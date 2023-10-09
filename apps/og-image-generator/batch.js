const puppeteer = require("puppeteer");
const express = require("express");
const fs = require("fs");
const path = require("path");
const frontMatter = require("front-matter");
const sharp = require('sharp');

const PORT = process.env.PORT || 3000;
const basePath = path.join(__dirname, "../../");
const sourceFolder = "./source/_posts";

const getPath = (name) => path.join(__dirname, name);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// generate og image in batch
async function main() {
  const files = await fs.promises.readdir(sourceFolder);
  for (const file of files) {
    const pureFilename = file.replace(".md", "");
    const postPath = path.join(basePath, sourceFolder, file);
    const stats = await fs.promises.stat(postPath);

    if (!stats.isFile() || !postPath.endsWith(".md")) {
      continue;
    }

    // get post
    console.log(`Path: ${postPath}`);

    // check if og image is already there
    const coverPath = path.join("/img", pureFilename, "cover.png");
    const targetPath = path.join(basePath, "/source", coverPath);
    // console.log(targetPath)
    if (await checkFileExists(targetPath)) {
      console.log("Og image exists for file:", file);

      const postContent = fs.readFileSync(postPath, "utf8");
      let postMeta = frontMatter(postContent);
      if (postMeta.attributes.photos) {
        if (postMeta.attributes.photos.includes("cover")) continue;
        console.log("Need to fix:", coverPath);
      } else {
        // automatically add photos
        const photoString = "photos: " + coverPath;
        let lines = postContent.split("\n");
        let result = [lines[0]];
        let found = false;
        for (let i = 1; i < lines.length; i++) {
          if (lines[i].startsWith("---") && !found) {
            found = true;
            result.push(photoString);
          }
          result.push(lines[i]);
        }

        fs.writeFileSync(postPath, result.join("\n"), "utf8");
      }

      continue;
    }

    // generate image
    let postMeta;
    try {
      const postContent = fs.readFileSync(postPath, "utf8");
      postMeta = frontMatter(postContent);
    } catch (err) {
      console.error("Read post file failed:", err);
      process.exit(2);
    }

    if (typeof postMeta.attributes.date === "string") {
      postMeta.attributes.date = new Date(postMeta.attributes.date);
    }

    const template = fs
      .readFileSync(getPath("resources/template.html"), "utf8")
      .replace(/{{title}}/g, escape(postMeta.attributes.title))
      .replace(
        /{{publishedDate}}/g,
        postMeta.attributes.date.toISOString().substr(0, 10)
      );

    await generateImage({
      postName: pureFilename,
      template,
    });

    await sleep(1000);
    // return;
  }
}

function checkFileExists(filePath) {
  return new Promise((resolve, reject) => {
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}

function startServer({ template }) {
  return new Promise((resolve) => {
    const app = express();
    const server = app.listen(PORT, () => {
      console.log(`Starting generate image...`);
      resolve();
    });

    app.get("/", (req, res) => {
      res.send(template);
    });

    app.use(express.static(path.join(__dirname, "resources")));
    resolve(server);
  });
}

function escape(str) {
  if (!str) return "";
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function generateImage({ postName, template }) {
  const server = await startServer({
    template,
  });
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1200,
    height: 630,
    deviceScaleFactor: 2,
  });

  // create folder if not exist
  const postImgDir = path.join(basePath, "source", "img", postName);
  if (!fs.existsSync(postImgDir)) {
    fs.mkdirSync(postImgDir);
    console.log("Create folder");
  }

  const screenshotPath = path.join(postImgDir, "cover-original");
  await takeScreenshot(page, screenshotPath);
  const outputPath = path.join(postImgDir, "cover");
  await browser.close();
  server.close();

  await compress(screenshotPath + '.png', outputPath + '.png')

  console.log("Done, you can find image at: " + outputPath + ".png");
}

async function compress(inputPath, outputPath){
  return new Promise((resolve, reject) => {
    sharp(inputPath)
      .toFormat('png')
      .png({ quality: 100 })
      .toFile(outputPath, (err, info) => {
        if (err) {
          console.error(`Error processing ${inputPath}: ${err}`);
          return reject(err)
        } else {
          console.log(`Compressed ${inputPath} to ${outputPath}`);
          fs.unlinkSync(inputPath);
          return resolve()
        }
      });
  })
}

async function takeScreenshot(page, name) {
  await page.goto(`http://localhost:${PORT}`);
  const element = await page.$(".window");
  await element.screenshot({ path: `${name}.png` });
}

main();

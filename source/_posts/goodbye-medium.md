---
title: 再會了，Medium 搬家到 Hexo 心得
date: '2023-10-09T12:58:26.058Z'
categories:
  - 寫作
tags:
  - 寫作
photos: /img/goodbye-medium/cover.png
---

說要從 Medium 搬家說了很久，這次總算付諸行動啦！

這篇就來記錄一下搬家的理由以及心得。

## 搬家的理由

### 一、使用者體驗變差

無論是免費文章還是付費文章，如果沒有登入 Medium 的話，在看文章的時候都會跳一個好大的視窗要你登入，使用者體驗很差。

雖然這改很久了，但我是之前偶然間才發現原來體驗這麼差（因為平時都有登入）。

### 二、平台流量日漸變低

雖然說我不是什麼大尾 YouTuber，但我大概可以體會得到，當一位百萬訂閱的 YouTuber 過氣或是不受演算法眷顧之後，會有什麼感覺。

我的 Medium 訂閱人數有 12000 人，儘管這個絕對數字看起來並不高，但相對來看已經是很高的了。根據我之前的[調查](https://life.huli.tw/2019/07/02/medium-analysis-40752b9efa03/)，這樣的訂閱人數在台灣的個人帳號之中，可以排到前三名。

但從文章的觀看次數來看，我絲毫不覺得訂閱數有這麼高。

如果文章只發在 Medium 而且不貼在任何社群平台，大約是 500 個不重複觀看，也就是訂閱人數的 4%，感覺滿淒慘的。

另外，Medium 從以前就一直推廣付費牆，但我個人很不喜歡付費牆，所以自己的文章也不會弄這個東西，因此也得不到 Medium 的演算法青睞。

總之呢，我覺得在台灣好像寫 Medium 的人越來越少，很多訂閱數高的也早就搬家到其他地方了。

### 三、為長遠的未來做打算

Medium 一直以來都只是個暫時的地方，畢竟任何平台都會有倒閉或是改版的可能。

如果想要寫一輩子的話，待在 Medium 越久，絕對不是件好事。待得越久，累積的東西就越多，就更難搬家了。

以長期來看，越早搬家成本越低，而且搬家以後所有事情都在自己的掌握之內，自由度高很多。

綜合以上三點，最後決定搬家了。

## 搬家心得

### 搬到哪裡去？

首先呢，最後是搬到自己架的 Hexo 部落格，會選這套是因為我另外一個技術部落格也用這套，兩個用同一套碰到問題比較容易修，至少這一套我比較熟。

雖然也有考慮過其他現成服務，但既然都要搬了，還是搬到自己熟悉的地方最好。原本也有考慮 WordPress，但考量到需要維護一個後端，而且還要時時刻刻注意資安問題，有點太累了，還是 Hexo 這種靜態網頁產生的框架最方便而且維護成本最低。

這次還特別挑選了 Hexo 的版型，挑了兩三天以後終於找到一個喜歡的：https://github.com/haojen/hexo-theme-Claudia

真的很感謝這個版型的作者，讓我省了好多時間，要挑到喜歡的真的很不容易。

### 搬家過程

文章的部分是參考這一篇：[談再整理自己的文章（上） — 5分鐘匯出 Medium 和 Wordpress 文章至 Markdown](https://notes.desktopofsamuel.com/posts/%E8%AB%87%E5%86%8D%E6%95%B4%E7%90%86%E8%87%AA%E5%B7%B1%E7%9A%84%E6%96%87%E7%AB%A0%E4%B8%8A-5%E5%88%86%E9%90%98%E5%8C%AF%E5%87%BA-medium-%E5%92%8C-wordpress-%E6%96%87%E7%AB%A0%E8%87%B3-Markdown)

裡面有提到這個：[medium-2-md](https://github.com/gautamdhameja/medium-2-md) 套件可以用。

稍微研究了一下這個套件，可以看到最重要的轉換部分，是使用了一個叫做 [turndown](https://github.com/gautamdhameja/medium-2-md/blob/master/lib/converter.js#L1C34-L1C42) 的東西，感覺滿有趣的。

在使用 medium-2-md 的時候有碰到一些問題，因為程式碼滿少的，所以就自己 clone 以後開始修了，修成自己想要的形狀。

改的東西大概有：

1. 修改圖片下載的檔名
2. 修改圖片路徑
3. 修改 front matter 的資訊
4. 修改檔名，讓檔名就是原本 medium 的 slug（這很重要）

改完之後其實部落格的文章跟圖片基本上就搬的差不多了，但剩下很多小細節要修。

medium-2-md 本身的一個問題是碰到 Medium 上的那種 import 網址進來瀏覽的狀況會出問題，產生的 markdown 會變得很詭異，這邊因為數量沒有很多，我是手動修的。

其他還修了兩個地方，一個是 SEO 最重要的 canonical link。

在 Medium 的文章設定頁面可以設定 canonical，要把這個設置到自己新的文章位置，否則 Google 會判定為重複內容。由於我大概有 130 篇文章，要手動實在是有點累，就快速寫了一個 code 去做了。

這邊有一點很重要的是當初搬家時我保持 slug 不變，所以要做這個超級快。我先把我部落格的新網址全部抓下來，然後用程式跑一遍就結束了：

``` js
const cheerio = require('cheerio');

// 所有文章網址
let urls = `/2023/09/22/coolwallet-pro-b381f545878/
/2023/08/30/frontend-choice-2f9f76a1614e/
/2023/07/30/myflightradar24-flight-tracker-120ec0c162e6/
/2023/07/27/2023-july-korea-trip-seoul-92ba2d0608ff/
/2023/07/27/2023-july-korea-trip-busan-a475e484e1fc/
/2023/07/01/2023-06-macau-travel-venetian-21687588b87d/
/2023/05/26/2023-jp-travel-eed64a0cb3a0/`.split('\n')

const sleep = ms => new Promise(r => setTimeout(r, ms))

async function main() {
  for(let url of urls) {
    await update(url)
    await sleep(1000)
  }
}

async function update(url) {
  let path = url.split('/')
  let id = path[path.length - 2].split('-').at(-1)
  const fullUrl = 'https://life.huli.tw' + url

  // 拼出完整網址跟文章 ID
  console.log(fullUrl, id)

  // 打 API 更新
  return fetch('https://medium.com/_/graphql', {
    method: 'POST',
    headers: {
      'Graphql-Operation': 'SetCanonicalUrl',
      'Origin': 'https://medium.com',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
      Cookie: '', // 換成自己的 cookie
      'content-type': 'application/json'
    },
    body: JSON.stringify([{"operationName":"SetCanonicalUrl","variables":{"postId":id,"url":fullUrl},"query":"mutation SetCanonicalUrl($postId: String!, $url: String!) {\n  setCanonicalUrl(postId: $postId, url: $url) {\n    ...PostSettingsCanonicalUrl_post\n    __typename\n  }\n}\n\nfragment PostSettingsCanonicalUrl_post on Post {\n  __typename\n  id\n  canonicalUrl\n}\n"}])
  }).then(res => res.text()).then(console.log).catch(err => {
    console.log('err', err)
  })
  
}

main()
```

第二個修的地方是文章的連結，需要把以前所有提到 medium 的連結都換成新的部落格連結：

``` js
const fs = require('fs');
const path = require('path');

const folderPath = './source/_posts';
let urls = `/2023/09/22/coolwallet-pro-b381f545878/
/2023/08/30/frontend-choice-2f9f76a1614e/
/2023/07/30/myflightradar24-flight-tracker-120ec0c162e6/`.split('\n')

const regs = []

for(let url of urls) {
  let path = url.split('/')
  let id = path[path.length - 2]
  regs.push({
    newUrl: url,
    id,
    regexp: new RegExp('https://.+/'+ id, 'g')
  })
}

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  for(let file of files) {
    if (file.indexOf('.md') < 0) continue
    const filePath = path.join(folderPath, file);
    const content = fs.readFileSync(filePath, 'utf8')
    console.log(filePath)
    let newContent = content
    for(let r of regs) {
      newContent = newContent.replaceAll(r.regexp, r.newUrl)
    }
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent)
    }
  }
});
```

這兩個的共通點是因為 slug 不變，所以做什麼都快很多，有固定的模式就是好辦事。

做到這邊其實就差不多了，額外做的兩個小事情一個是壓縮圖片，另一個是產生 og image（就這篇在分享的時候會看到的圖），但產生 og image 之前技術部落格有做過了，所以直接複製過來就行了。

## 總結

搬家過程大概花了兩天左右，其實比想像中要快一點，主要是 Medium 本身有提供下載所有文章的功能，雖然是 HTML 檔案，但因為已經有人寫好了轉換器，所以要轉換還是滿快的。

不過另一個需要注意的是下載的內容中發文跟回覆是混在一起的，我是手動把回覆都刪掉，但這邊要自動化應該也不難，可以再省下一些時間。

總之呢，新家就是這邊啦！但之後的文章應該還是會同步在 Medium 那邊，反正有設定 canonical link 應該就問題不大，所以如果習慣使用 Medium 的，還是可以繼續用那邊。

如果想要繼續關注部落格的話，可以訂閱 RSS：https://life.huli.tw/atom.xml


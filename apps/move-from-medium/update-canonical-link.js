const cheerio = require('cheerio');

let urls = `/2023/09/22/coolwallet-pro-b381f545878/
/2023/08/30/frontend-choice-2f9f76a1614e/
/2023/07/30/myflightradar24-flight-tracker-120ec0c162e6/
/2023/07/27/2023-july-korea-trip-seoul-92ba2d0608ff/
/2023/07/27/2023-july-korea-trip-busan-a475e484e1fc/
/2023/07/01/2023-06-macau-travel-venetian-21687588b87d/
/2023/05/26/2023-jp-travel-eed64a0cb3a0/
/2023/05/16/after-playing-hacker-game-ctf-for-two-years-12dbfb6a3adb/
/2023/05/12/after-working-at-web3-industry-for-8-months-60954d84ff0e/
/2022/12/28/cheap-eva-air-ticket-taipei-to-japan-116cc1d68804/
/2022/12/18/you-live-too-comfortably-de6b51fa9875/
/2022/11/08/2022-updates-e2a3ae1c9a2e/
/2022/08/17/def-con-30-ctf-final-3-e19eeeed8e44/
/2022/08/16/def-con-30-ctf-final-2-4444cf3645e/
/2022/08/16/def-con-30-ctf-final-1-79220bba7f02/
/2022/07/23/2022-07-tpe-sin-travel-92e5363560c1/
/2022/05/20/what-is-encoding-ascii-unicode-utf8-5fe55a98bee0/
/2022/02/21/sleep-apnea-and-i-176d197dbb4a/
/2022/02/01/know-yourself-8ac86e6ca2b9/
/2022/01/22/think-as-if-i-quit-f384091ca2f6/
/2021/12/19/mtr05-b3d0ccaaea08/
/2021/11/22/what-is-zero-day-2d343d5a70b3/
/2021/11/14/i-dont-know-how-to-choose-job-6e38534786e4/
/2021/10/29/wannabe-f24dca839d27/
/2021/10/24/do-you-really-want-to-write-tech-blog-on-medium-3dd25640f26c/
/2021/10/10/risk-of-service-exposure-a873d3418d99/
/2021/10/01/teaching-reflection-a1cbf3ae1997/
/2021/09/18/experience-f37004cf80ff/
/2021/09/10/when-i-got-sg-offer-e4d91856bd96/
/2021/09/03/what-to-learn-b85ee24c3e8/
/2021/08/09/techbridge-2ff7398a17ba/
/2021/07/08/why-only-reset-password-not-retrieve-password-aa7cfb8699f1/
/2021/06/25/update-settings-before-publish-on-medium-d2993706a9b0/
/2021/06/07/intigritis-0521-xss-challenge-writeup-b859a65acc48/
/2021/06/05/byebye-front-end-hi-security-fda6be0cb7ce/
/2021/04/02/async-communication-f786eb49a1da/
/2021/03/23/haidiliao-17e33c585350/
/2021/02/24/mentor-program-5th-start-c7da09311272/
/2021/02/22/mentor-program-4th-review-f8e8de92eea2/
/2021/02/12/happy-new-year-moo-e0e0ac5130e2/
/2021/01/02/teachable-introduction-and-review-ca3946e9a1e1/
/2020/12/08/working-at-onedegree-378a0401130e/
/2020/11/14/my-ideal-job-description-d72ec9cf5d0e/
/2020/10/03/lidemy-mentor-program-4th-updates-c344302c8a2d/
/2020/10/02/failed-mentorship-program-70a3c50caf7f/
/2020/09/07/learning-how-to-learn-7c92be9b72fa/
/2020/07/22/ask-better-questions-19f01b02f436/
/2020/06/24/variable-and-frontdesk-a53a0440af3c/
/2020/06/05/confused-d83a4091eca/
/2020/06/02/to-be-an-engineer-c20c962d44cf/
/2020/05/23/best-e55cb3491b23/
/2020/04/30/lidemy-mentor-program-4th-39f58a00067c/
/2020/04/28/2020-senior-front-end-engineer-interview-249c719c1a97/
/2020/04/26/i-dont-know-what-i-want-about-career-383bee0be733/
/2020/04/22/about-head-hunter-27fe1c28648f/
/2020/04/19/mindset-36c163303217/
/2020/03/23/leetcode-alg101-4848b595cef4/
/2020/03/01/cln-email-writing-part2-40213f9302a7/
/2020/02/10/learning-c6656ef14cd4/
/2020/02/08/teamwork-d2d0ac73812/
/2020/02/04/its-okay-if-you-dont-have-goal-35363a8d8266/
/2020/02/02/fight-against-procrastination-but-lost-b43d3c4164e1/
/2020/02/02/i-failed-9386c6b0a681/
/2020/01/27/tech-blog-coderbridge-to-the-rescue-2ba5b52d8bcd/
/2020/01/12/weekly-note-part3-87969dd50929/
/2020/01/12/weekly-note-part2-20fb2472d432/
/2019/12/26/weekly-note-part1-197335682a61/
/2019/12/23/cln-email-writing-part1-5262fcd9ff79/
/2019/12/18/thanksgiving-event-873e0cd48833/
/2019/12/15/mentor-program-3rd-result-df178bb55f4/
/2019/12/01/best-one-year-696aa373207d/
/2019/11/22/epistemology-8845a97e846c/
/2019/11/19/coding-tutor-88c960dc8bbe/
/2019/11/17/two-year-review-e029ac415a12/
/2019/11/14/someday-i-will-a5aede6d30e2/
/2019/11/10/about-interview-95bfaa4273ba/
/2019/10/31/travel-part2-818482a90bc9/
/2019/10/29/its-just-a-beginning-184b954df8a9/
/2019/10/14/etihad-a380-auh-icn-first-class-352fdbbc08db/
/2019/10/11/change-43bb422a30ed/
/2019/09/25/learning-tcp-ip-http-via-sending-letter-5d3299203660/
/2019/08/22/how-do-i-write-965328ae91fe/
/2019/08/20/front-end-learning-path-55201571ecfe/
/2019/08/19/lidemy-courses-fda610c7ff9b/
/2019/08/09/session-and-cookie-15e47ed838bc/
/2019/07/25/mentorship-program-350db93d5c9c/
/2019/07/13/travel-part1-46e50a306467/
/2019/07/02/medium-analysis-40752b9efa03/
/2019/06/20/ramen-and-api-6238437dc544/
/2019/06/04/freecodecamp-hackernoon-are-leaving-medium-1b7319d7a8a7/
/2019/06/01/jgc-and-jal-ctystal-862f2bb4af8b/
/2019/05/29/from-online-to-offline-bd99e545277a/
/2019/05/10/how-to-answer-question-eef8802126b3/
/2019/04/19/buy-me-a-meal-6e314b5d5bcb/
/2019/04/13/before-learning-b9b933b6078e/
/2019/04/13/4-years-review-7fb7edc52687/
/2019/04/09/voicetube-hero-review-9409c2248845/
/2019/03/14/mentor-program-3rd-47a2e85e33b3/
/2019/03/13/mentor-program-2nd-result-3cb7c2b6627e/
/2019/02/06/why-blogging-ab77fd8c6ffa/
/2019/02/05/qa-be72946f0b23/
/2019/01/27/goodideas-studio-98dbafb99abf/
/2019/01/21/mentor-program-2nd-review-e7c15f24dfb8/
/2019/01/01/delivery-300-311d531e1e65/
/2018/11/22/there-is-no-magic-in-my-classroom-4926b67c06f5/
/2018/11/15/one-year-review-2963f072572d/
/2018/11/04/mentor-program-2nd-mid-c7539f67b7d7/
/2018/10/29/learn-coding-9c572c2fb2/
/2018/10/14/singapore-expense-6f5caaf6dd75/
/2018/09/26/procrastination-ba12754ada49/
/2018/09/18/hahow-and-lidemy-2dab35919bb8/
/2018/08/19/mentor-program-register-3648c1b82cd7/
/2018/07/12/mentor-program-s2-f876c4e13d3b/
/2018/06/26/mentor-program-review-a9c6668dfb/
/2018/06/13/blog-e7a23a74ae2b/
/2018/06/12/english-174bd9b7c0ce/
/2018/06/10/frontend-engineer-guide-297821512f4e/
/2018/06/03/guide-for-getting-frontend-engineer-job-e73e04c2bec4/
/2018/06/03/value-of-fron-tend-1e047d4cb341/
/2018/05/04/introduction-mvc-spa-and-ssr-545c941669e9/
/2018/03/01/eatigo-128375a0caf/
/2017/12/21/mentor-program-b5f96ae1eed1/
/2017/11/28/smartwatch-review-55dac978bbf5/
/2017/10/29/about-asiayo-chatbot-28704dc9b84a/
/2017/10/21/stripe-and-i-df35a6f0a799/
/2017/10/21/delivery-services-2d90ec1e3555/
/2017/10/18/interview-prepare-b815d938f0de/
/2017/10/09/resume-evolution-4c337ff30729/
/2017/10/05/the-programming-journey-3-ebd9e995a4eb/
/2017/10/05/the-programming-journey-2-98dea8c475ae/
/2017/10/05/the-programming-journey-1-b9b19c0ef05b/`.split('\n')

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
  console.log(fullUrl, id)
  return fetch('https://medium.com/_/graphql', {
    method: 'POST',
    headers: {
      'Graphql-Operation': 'SetCanonicalUrl',
      'Origin': 'https://medium.com',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
      Cookie: '', // 記得換成自己的 cookie
      'content-type': 'application/json'
    },
    body: JSON.stringify([{"operationName":"SetCanonicalUrl","variables":{"postId":id,"url":fullUrl},"query":"mutation SetCanonicalUrl($postId: String!, $url: String!) {\n  setCanonicalUrl(postId: $postId, url: $url) {\n    ...PostSettingsCanonicalUrl_post\n    __typename\n  }\n}\n\nfragment PostSettingsCanonicalUrl_post on Post {\n  __typename\n  id\n  canonicalUrl\n}\n"}])
  }).then(res => res.text()).then(console.log).catch(err => {
    console.log('err', err)
  })
  
}

// 用來抓所有文章的網址用的
async function crawler(){
  for(let url of urls) {
    const html = await fetch(url).then(res => res.text())
    const $ = cheerio.load(html)
    $('h2 a').each(function(){
      console.log($(this).attr('href'))
    })
  }
}

main()
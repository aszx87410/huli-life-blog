---
title: 不專業數據分析：Medium 中文寫作者追蹤人數排名
date: '2019-07-03T03:21:58.750Z'
categories:
  - Others
tags:
  - Others
---

### 前言

之前一直想說要來爬 Medium 的資料，但最麻煩的地方在於 Medium 對外公開的 API 抓不到什麼東西，頂多只能幫你發發文。兩週前嘗試用 puppeteer 來寫爬蟲，發現效率十分低落，因此只能放棄。

但就在幾天前，我透過 Google 關鍵字「medium follower api」找到了[這個 gist](https://gist.github.com/newhouse/843c444ddefe084ea7f01603627dbcfd)，發現原來在 profile 網址後面加上 ?format=json 就能夠拿到 json 格式的資料！

自己隨意玩了一下之後，更進一步發現[有一個 API](https://medium.com/_/api/users/f1fb3e40dc37/profile/stream?source=followers&limit=25) 就是我想要的資料，只要有使用者的 userId 就能夠拿到追蹤者的清單還有個人資料！

好，既然 API 都有了，剩下的就只是時間跟成本的問題了。我抓資料的方法很簡單，手動挑幾個人，把他們的追蹤者全都加到 queue 裡，然後有一支程式就不斷從 queue 拿 user id 出來，把使用者資料寫進資料庫，並且把這個使用者的追蹤者又全部丟到 queue。

所以 queue 越來越長，抓到的使用者就越來越多，花了兩三天的時間抓資料加上整理，有一份還算堪用的中文寫作者使用者清單（只有個人帳號，publication 不會被列入）。

技術的部分就點到這邊為止，之後會再寫一篇跟技術細節相關的文章。

底下是針對我抓取到的數據（大約七萬筆中文使用者資料）做的一些簡單分析，文末會提供 raw data 跟爬蟲原始碼，歡迎其他朋友做出更專業的分析。

在分享一些數據之前，讓我們先來看一個奇怪的現象。

### 追蹤人數爆多，卻（幾乎）沒在用 Medium

在這次抓到的資料當中有幾個使用者有著超級多的追蹤者，但在 Medium 上卻毫無活動。沒有發文、沒有回覆，甚至連幫其他人拍手都沒有。他們的個人頁面長這樣：

![](/img/medium-analysis-40752b9efa03/1__3MNIBs9y1MhiB4mP7fcuhA.png)

一萬四千個追隨者，但是一篇文章都沒有。

而且這並不是特例，下面這幾個帳號也是幾乎沒有任何活動，但是都有著一定人數的追隨者。

[https://medium.com/@nestertweets](https://medium.com/@nestertweets)，9.4k followers  
[https://medium.com/@arthur369](https://medium.com/@arthur369)，5.4k followers  
[https://medium.com/@mranti](https://medium.com/@mranti)，5.3k followers  
[https://medium.com/@sixtus](https://medium.com/@sixtus)，4.5k followers  
[https://medium.com/@isaac](https://medium.com/@isaac)，4.2k followers

這是為什麼呢？

原因可以從這幾個帳號的共同點大概猜測一下：

> 他們都有綁定 Twitter，而且 Twitter 的追隨者都很多

依稀記得當初我把 Medium 綁定 Facebook 帳號時，系統好像自動幫我追蹤了我在 Facebook 上的朋友（如果他們在 Medium 也有帳號的話）；類似地，在綁定 Twitter 時我猜也會有類似的效果。

結果就變成這樣了，有些在 Twitter 上超多追隨者的人只要在 Medium 上面綁定帳號，一篇文章都不用發，也能把一定數量的 Twitter 追隨者直接帶過來。

不過有一個先決條件是你必須很早綁定 Twitter，才能享受到這種福利，因為你在 Twitter 上的追蹤者必須比你後綁定才能被系統偵測到，才會來追隨你。上面這些帳號大多都是 2012 年左右就建立的，加入的很早。

看完了這個從數據觀察到的現象以後，我們先來看臺灣寫作者的追蹤人數排名。如果要被列入這個分類，你只是個臺灣人是不夠的，你還要在 Medium 上面有用繁體中文發表文章，才會被列入這個分類。

所以像是 [Kai-Fu Lee](https://medium.com/u/13ba09f08ed3) 儘管有 22k 的追隨者，也不會被列入任何分類，因為他主要是用英文來寫作。而上述那些沒有發表過任何文章的作者也不會被列入。

（這些分類都是手動分的，如果有分錯的話麻煩再告知我，感謝！）

### 臺灣寫作者追蹤人數排名

![](/img/medium-analysis-40752b9efa03/1__pg5xg0wxT9wPbcSE3jgqfA.png)

版面有限，這邊只放了前 20 名。追蹤人數要有 3.2k 以上才能進入前二十，4k 的尾巴是我，第 12 名（沒做這統計以前我天真以為一定有前十…），要達到 6k 才能進台灣前五。

而最亮眼的是第一名 [Evonne Tsai](https://medium.com/u/a06b9f60d808) 的追蹤人數比二三名加起來還要高！而且才加入 Medium 不到兩年就有如此驚人的成績。第 16 名的 [游舒帆Gipi](https://medium.com/u/2317f5323929) 與第 19 名的 [Chofy Lin](https://medium.com/u/a220ac7b2c09) 都是在 2018 年年初才加入的，至今大概也才一年半而已，後勢看漲。

Medium 是 2012 年 8 月 15 號開始的，上面排名中就屬 [Fred Jame](https://medium.com/u/b36246f7a37c) 最早加入，Medium 才剛開始一週後就加入了。其他人大多都是在 2015~2017 年才加入 Medium。

話說第十名以及第二十名看似是 publication，但其實也是個人帳號喔，所以才一並列入統計（不過可能也會有同名的 publication 就是了）。

在臺灣超過 1k 追蹤的有 164 人，若是達到 2k 追蹤就可以排到前 50 名。所以追蹤人數在 1k~2k 的有 100 多人，其實還滿多的。

如果你對完整的資料有興趣，可以參考：[Medium 中文作者追蹤者排名](https://docs.google.com/spreadsheets/d/1TgzQ9o12uoQp8Dy6M7BTPW_BWbzKx2PWvFZDZCvHYz0/edit?usp=sharing)，裡面有臺灣、香港及中國超過 1k 追蹤者的使用者資料。

### 香港寫作者追蹤人數排名

（分類是我手動分的，如果有分錯先說聲抱歉）

![](/img/medium-analysis-40752b9efa03/1__fbQAkzdEjEcx8__lYWdDWbg.png)

根據《[數據分析香港Medium Followers概況(上)：從史兄說起](https://medium.com/@marginalobservers/%E6%95%B8%E6%93%9A%E5%88%86%E6%9E%90%E9%A6%99%E6%B8%AFmedium-followers%E6%A6%82%E6%B3%81-%E4%B8%8A-%E5%BE%9E%E5%8F%B2%E5%85%84%E8%AA%AA%E8%B5%B7-9cefb6192991)》這篇提到的一些資料，史兄應該是香港 Medium 追蹤人數最多的沒錯。

比較有趣的一個現象是大多數的作者都是在 2017 年的時候加入 Medium ，跟臺灣比起來稍晚一些。

香港寫作者的追蹤者人數分布比較平均，超過 1k 的有 39 人，超過 2k 大概可以排到前 10，3k 就可以排到第二名去了。

然後這邊也跟臺灣一樣，第二三名的追蹤人數加起來還小輸第一名，怎麼各地的第一名都那麼厲害。

### 中國寫作者追蹤人數排名

（備註：裡面有一些是沒有發文的但我沒有去掉）

![](/img/medium-analysis-40752b9efa03/1__6XsIEaeT3mQD__8b832jHDQ.png)

基本上自我介紹如果是簡體中文，我就直接分入這個分類了，如果有被分錯的可以再跟我說。

中國這邊的狀況比較特別，第一點是排名前面的加入的時間都稍早，比臺灣還要早，大多數都是在 2013~2015 年這個區間加入的，再來是 Medium 的使用頻率並不高，不過這個從上圖看不出來。

我自己有看了排名前幾的作者，發現文章都很久沒更新了，我覺得追蹤人數之所以高跟前面講的綁定 Twitter 應該也有滿大的關係。

然後比起個人作者，中國這邊的比較多其實都是媒體網站，例如說第二名的 [ifanr.com 爱范儿](https://medium.com/u/12dffbd02585) 跟第五名的 [华尔街日报中文网](https://medium.com/u/5622554f5aea)。

### 總結

這次爬蟲比我想像中順利很多，成本也比我想像中低，我在 DigitalOcean 上租了一台一個月 10 鎂的機器，然後爬三天就大概爬到我想要的資料了（中間還經歷過兩三次砍掉重練）。如果多爬一陣子，我覺得要把 Medium 上面所有會員資料爬下來搞不好也行。

由於數據分析不是我專業，所以我就簡單講一下幾個我看到的點而已。這邊我把爬到的資料公開，希望有專業人士可以做出更有趣的分析。

（2020–09–20 附註：因資料過舊以及其它個資問題已刪除）

這是爬蟲的原始碼跟使用說明：[https://github.com/aszx87410/medium-user-crawler](https://github.com/aszx87410/medium-user-crawler)。

最早會有這個爬蟲的想法純粹是因為官方完全沒有這種數據可以看，也沒有其他地方可以看這種數據（官方甚至連每天增加多少個 follower 這種也沒得看）。

我想看看自己 4k 多的追隨者可以排到多前面，所以才去寫了這個爬蟲，在做之前原本還想說 4k 搞不好前五，再差也一定前十，數據出來才發現根本不是這樣，狠狠地打了自己的臉。

不過太在意這種數據也不是好事就對了，但我就覺得還滿有趣的，而且必須承認追蹤者多的話有種虛榮感哈哈。

最後，喜歡的話可以不用拍手，但可以追蹤我，讓我早日擠進前十 😂
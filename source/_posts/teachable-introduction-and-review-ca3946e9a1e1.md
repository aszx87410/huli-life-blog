---
title: 線上課程平台 Teachable 介紹與使用心得
date: '2021-01-03T04:16:08.678Z'
categories:
  - Others
tags:
  - Others
photos: /img/teachable-introduction-and-review-ca3946e9a1e1/cover.png
---

最近幾年線上課程滿夯的，除了那些主流的課程平台之外，也有些人會想選擇自己弄一個自己的平台，少了一些限制，也能夠免除掉跟平台的分成，一些優缺點我在[《把 Hahow 的課程下架之後，我的下一步是什麼？》](/2018/09/18/hahow-and-lidemy-2dab35919bb8/)都有提過了。

而如果想要自己弄一個平台的話，最多人選的大概就是 [Thinkific](https://www.thinkific.com/) 跟 [Teachable](https://teachable.sjv.io/AoyVr1) 了。因為我自己的整個平台 [Lidemy 鋰學院](http://lidemy.com/)都是用 Teachable 建的，所以偶爾會收到一些信件來問我使用狀況跟心得，想說每次都個別回答的話有點沒效率，索性就寫了這篇。

底下就來談談各個 Teachable 的功能以及我個人的使用心得。

### 費用

我剛使用 Teachable 的時候它其實有四個方案，Free、Basic、Pro、Business，現在只剩下後三個。

原本的免費方案我記得沒什麼限制，就功能比較少（但很夠用），然後抽成手續費比較高，但後來這方案沒了，改成 14 天的 Pro 試用。

總之呢，我免費方案試用一段期間之後，就改成了 Basic 方案，年繳的話一個月是 29 元美金，整年下來 348 USD 將近 10000 塊台幣。

前陣子則是因為黑色星期五的特價買了將近半價的 Pro 方案，改了之後其實沒有太大的區別。除了金流的手續費少了 5% 以外，多的功能就是：

1.  可以看到每一個學生跟每一堂課的進度，例如說每個單元完成率有多少
2.  課程中可以出題目
3.  可以去除 Teachable 的 brand

但上面這些功能我本來就用不到，所以真的是沒什麼差。

金流的部份我們待會再談，先幫費用這邊做個總結。

![](/img/teachable-introduction-and-review-ca3946e9a1e1/1____kHLgKPLPQoxDozXvdHQBQ.png)

我覺得其實 Basic 就很夠用了，除非你用一段時間真的覺得你想要的功能只有 Pro 有，那再換 Pro 就好。或者是你精算過課程的收入，比如說 Pro 比 Basic 一個月多了 70 塊美金，然後升級的話每一筆交易可以少 5% 手續費，所以 70 \* (100/5) = 1400 美金，一個月的課程收入如果有超過 1400 美金，那轉成 Pro 方案就會是比較划算的。

### 金流

再來談談大家最關心的問題，金流。

Teachable 處理金流的方式其實分三種：

1.  Teachable Payments
2.  Monthly Payment Gateway
3.  Custom Payment Gateways

第一種限制只有居住在美國、加拿大、英國跟德國的使用者可以用，所以你跟我一樣在台灣的話只有後兩者可以選擇。

再來我們先講第三種，這最簡單，你必須先準備一個 Stripe 帳號，然後你網站上的付款都會直接進去這個 Stripe 帳號，中間不會過 Teachable，所以手續費是 0 元。

但別忘記這是「Teachable 不收手續費」，但任何的金流處理一定都需要費用，所以 Stripe 本身也會收手續費，費用應該是每筆 2.9% + 0.3 USD。所以總共的金流成本就是這樣。

不過有一些缺點，那就是退款的話沒辦法在 Teachable 後台處理，你要自己去 Stripe 上面處理退款。然後還有一個更大的問題，那就是你必須要有 Stripe 帳號。Stripe 目前不開放台灣申請，所以你必須找其他方法去辦到一個帳號。

所以綜合以上，我也不推薦使用第三種。

我自己跟我推薦使用的都是第二種：Monthly Payment Gateway（簡稱 MPG）。

MPG 的概念很簡單，就是金流會先過 Teachable 那邊，然後以月結的形式再轉到你的 PayPal 帳戶。因為金流有過那邊所以需要處理的費用，這就是我上面講的，Basic 是 5%，Pro 是 0%。

不過再次強調，這是「Teachble 幫你處理金流的手續費」，還要再加上金流本身的處理費用，基本上就是 2.9% + 0.3 USD（請見下圖），這是無論用哪個金流都一定會需要的錢。

![](/img/teachable-introduction-and-review-ca3946e9a1e1/1__66Q9GNp8dkDT7WuGHSBkzA.png)

所以如果你選擇 MPG 外加 Pro 方案，一筆交易的總成本就是 2.9% + 0.3 USD，跟選擇 custom payment gateway 是一樣的。

但 MPG 因為金流有過 Teachable，所以有一些好處，例如說退款可以直接在平台上進行處理，滿方便的。但如果你不想等一個月的話，就只能用 custom payment gateway 了。

另外還有一點要注意，如果你的課程價格是台幣，在交易時都會先轉成美金再來做計算，最後匯到你 PayPal 帳戶時也會用美金，如下圖所示：

![](/img/teachable-introduction-and-review-ca3946e9a1e1/1__unOwgCVkedDtVSVL__8EENQ.png)

再來，有些人可能有聽過，台灣的 PayPal 帳號不能收同樣來自台灣的款項，而 Teachable 預設就正好是用 PayPal，所以擔心是不是沒辦法收錢。

還記得我上面所說的嗎？MPG 金流會先過 Teachable 那邊，所以其實是：

1.  消費者在網站上透過信用卡付錢
2.  錢先進到 Teachable 那裡（進到他們的 Stripe 或是 PayPal）
3.  Teachable 再把錢轉到你的 PayPal

所以我們並不會直接跟消費者收款，因此不會有「收台灣的款項」這件事，也就不會有上面的限制。

總而言之呢，無論你用的是哪一個，收台灣的信用卡都是完全 ok 的，不需要擔心這個問題。但如果考量到成本跟費用的話，除了每筆交易一定都有的一個 2.9% + 0.3 USD 以外，還需要考量到「從 PayPal 轉到台灣銀行帳戶」這件事。

畢竟上面所說的，錢都是以美金進到你的 PayPal 帳戶，如果你沒有要直接從那邊花掉，那想必是要再轉進台灣的戶頭。這邊會需要透過[玉山全球通](https://www.paypal.com/tw/webapps/mpp/withdrawal-process)把款項轉進來，然後會再收一筆 2.5% 的手續費。

而且如果你是想收到台幣而不是美金，那從買課一直到拿錢，中間就會經過兩次的匯差：

1.  使用者購買台幣 100 塊的課程
2.  Teachable 把它轉為美金（請見上面交易明細）
3.  扣除金流處理費 2.9% + 0.3 USD
4.  扣除服務費（Basic 5%，Pro 以上 0%）
5.  存入你的 PayPal
6.  從 PayPal 提領（美金）
7.  扣除 2.5% 手續費
8.  轉回台幣

這些金流成本是在計算成本時也需要一併考慮的部分。

但總之呢，如果規模小的話應該差不了多少，要接收台灣使用者的付款是絕對沒問題的。

### 平台核心功能

前面金流的部分講了滿多的，再來我們來講一下平台的各個功能，首先先來講課程的部分。

在課程上我覺得基本功能都有了，像是：

1.  課程除了影片還可以有其他檔案或是有格式的文字
2.  可以開放試看、開放下載
3.  課程底下可以開放留言

![](/img/teachable-introduction-and-review-ca3946e9a1e1/1__pxqCC__yDgkwNYnbtJFpg8g.png)

然後還有個功能我超喜歡，那就是右上角的那個 Bulk Upload。上傳課程是一件很煩的事，尤其是你一次要上傳十幾支或更多影片的時候。Teachable 在上傳影片時有支援 Google Drive 或是 Dropbox 的同步，根據我自己使用過的經驗，你先把影片上傳到 Google Drive，再從 Google Drive 同步過去，會比自己電腦直接上傳到 Teachable 還要快。

而且 Bulk Upload 這功能很方便，你可以一次選很多支 Google Drive 的影片，然後它會一起全部同步過來，每一個影片會開一個新的 lecture，接下來就只要編輯 lecture 就好。

在上傳課程這方面我覺得 Teachable 做得真的滿不錯的，至少速度很 ok。

然後定價方案也很彈性，可以設定成一次性的付費或是訂閱制都行，要把多個課程打包一起賣也可以，coupon 的使用也可以設定成是要固定折價還是比例折扣，然後有哪些課程適用。

總而言之呢，我覺得課程的模組做的滿 ok 的，基本功能都有。

#### Dashboard

在首頁會有一些圖表讓你看：

![](/img/teachable-introduction-and-review-ca3946e9a1e1/1__3qOx6QRhRcnQyo____y0O1nw.png)

例如說最近的收益啦，新註冊的人數啦等等，右側還會有一欄是最近的活動，但礙於個資問題就不截圖給大家看了，內容大概就是誰誰誰剛剛買了什麼課之類的。

#### 全站設定

平台在設定部分也提供不少選項，你要改名稱一定是可以的，要設定 Facebook pixel 或是 GA 也沒問題，再來大家會關心的中文化也沒問題，但這邊 Teachable 的手段比較特別一點。

Teachable 本身應該是完全不做多國語系，而是把這個彈性交給管理員自己，所以提供這樣的一個介面：

![](/img/teachable-introduction-and-review-ca3946e9a1e1/1____FrOQSz6ruhGOFwhEulAXQ.png)

可以讓你去設定網站上出現的各個文字要顯示成什麼。所以就要在這邊自己中文化。

而且這種做法其實就斬斷了 i18n 的彈性，例如說網站如果同時要給英文使用者跟中文使用者，就沒辦法針對前者顯示英文，後者顯示中文，好像一定只能統一一個。

不過如果像我一樣只服務中文使用者的話，這功能其實就滿實用的，可以自己決定顯示的文字長什麼樣子。

其他自訂設定像是導覽列、custom domain 之類的我就不提了。

Teachable 的功能其實不少，但老實說有很大一部分我平常可能都不會使用到。例如說它的強項之一其實是銷售方面的，所以提供了很多跟 affiliates 相關的功能，例如說透過某個 affiliates 賣的課程要分給他多少，也會透過 MPG 自動把錢幫你算好然後轉進去。

但這部分的功能我完全用不到，所以也沒什麼可以分享的。

總之我覺得以一個線上課程網站來說，功能算是很夠用的了。

### 其他附加功能

有兩個附加功能我覺得值得一提，第一個是 Email，可以在後台寄 Email 給使用者，還會統計開信率之類的：

![](/img/teachable-introduction-and-review-ca3946e9a1e1/1__y4Vfc67y5j5h8zAZaCXKiA.png)

不過根據我之前使用過的經驗，不知道為什麼有時候信發不出去，所以如果需要比較嚴謹的功能，還是串接 mailchimp 然後自己做可能會比較好。

另一個值得提的功能是部落格，一個很陽春的部落格，只有提供發表文章的功能而已，甚至連分類都沒有：

![](/img/teachable-introduction-and-review-ca3946e9a1e1/1__O5ti6EM6sdswIt__EpIa3pw.png)

因為功能實在太陽春了，原本想把它當放學生心得的地方，後來想想還是算了。所以這功能我後來也沒在用。

### 總結

差不多該做個總結了。

在方案選擇部分，建議大家先使用 Basic，因為升級到 Pro 之後也沒多太多功能，我自己覺得 Basic 就很夠用了。

在金流方面，收取台灣使用者的信用卡是絕對沒問題的，所以在台灣賣課程是 ok 的，但每一筆會收金流手續費 2.9% + 0.3 USD（金流提供商 Stripe 或是 PayPal 收的），外加 Basic 方案的 5% 手續費（Teachable 收的），把錢轉回來帳戶時也會再收一筆 2.5% 的手續費（PayPal 收的）。

許多人擔心的「台灣 PayPal 不能收台灣的款項」也不會發生，因為付的款項不會直接到你帳戶，而是會透過 Teachable 轉一手，因此不會有這問題。

在功能方面，有關於課程的基本功能我覺得都有了，雖然私心想要再加兩個功能就是了：

1.  課程評價功能，這個目前完全沒有，學生無法在購買課程後留下評價
2.  討論區功能，希望每個課程或是整個 school 有一個共同的討論區，但目前也沒有

在賣課的部分也提供了彈性的 coupon 跟定價方案，銷售的頁面也可以自訂，想要找其他人幫你賣課分成也沒有問題。

其他全站設定的部分，中文化 ok，自訂網址或是串 GA 也完全沒有問題。

如果你想要有一個自己的課程平台，以我個人的使用經驗而已，我覺得 Teachable 是一個不錯的入門選擇。

以上就是針對 [Teachable](https://teachable.sjv.io/AoyVr1) 的使用心得，希望能幫助到大家。
---
title: 從拉麵店的販賣機理解什麼是 API
date: "2019-06-21T02:46:22.802Z"
categories:
  - 技術白話文
tags:
  - 技術白話文
photos: /img/ramen-and-api-6238437dc544/cover.png
---

API，全名叫做 Application Programming Interface，維基百科上的中文翻譯是：「應用程式介面」。這是一個你可能聽過很多次，但從來沒有理解過的東西，常常聽到工程師說著：「串 API」，但還是不知道 API 到底是什麼。

我原本以為在網路上有關 API 的參考資料已經有很多了，應該可以讓初學者理解什麼是 API。但根據我學生們的心得，好像還是有點困難，只好自己跳下來寫一篇，試著來挑戰這個主題，希望寫出一篇淺顯易懂的 API 介紹文。

如果你問我什麼是 API，我會跟你說：「API 就是拉麵店的販賣機」，所以在切入正題之前，我們要先來研究一下日本拉麵店會出現的販賣機。

### 仔細地研究一下販賣機

![](/img/ramen-and-api-6238437dc544/1__NRn__MDiOTwNUw1kPg0MjBw.jpeg)

你有去日本玩過嗎？或其實現在有些台灣的店家也用相同的方式來取代人力了。

上面的圖片是販賣餐券的販賣機（我原本想拍一張更近一點的然後是拉麵店的，但我離開日本才想到我忘記拍了…只好拿很久以前在東京都廳的餐廳拍的圖片來補），每一個按鈕就是一個品項，例如說咖哩飯、咖哩烏龍麵、咖哩豬排飯等等，也有一些像是「份量加大」、「加蛋」之類的選項。

當你決定好要什麼以後，就投錢進去，然後按下你要的選項的按鈕，就會有張餐券掉出來，上面寫著你所選的品項。簡單來說呢，就是個販售餐券的販賣機，跟你平常買可樂買果汁的販賣機大同小異。

拿到餐券之後呢，你就只要把它交給店員就好，店員就知道你要點什麼餐了。接著就是坐等餐點煮好，開始享用豐盛的一餐。

我第一次去日本的時候體驗到這種點餐方式覺得十分特別，但接下來我們要來想一下，它到底特別在哪裡。為了回答這個問題，我們先來回憶一下原本點餐怎麼點。

如果是跟以前一樣在櫃檯點餐，幫你點餐的會是店員，然後你要跟店員說你要什麼品項，也能夠進一步客製化，例如說：「一份燒肉套餐不要燒肉」或者是「雞排要切不要辣，炸酥一點，蒜多一點」，接著店員再透過電腦系統或者是直接跟內場說你要點什麼。

那這跟我們用餐券販賣機差在哪裡呢？

#### 固定品項

販賣機的品項是固定的，上面沒有的你點不到。沒有一個地方可以讓你輸入客製化資訊，所以如果沒有「不要薑」的按鈕，你的餐券上面就不會有這項資訊，你就點不到沒有薑的拉麵（這邊先不考慮直接跟店員說）。

#### 減少溝通障礙

你溝通的對象從店員變成了機器，壞處就像上面說的一樣，客製化程度有限，而好處就是沒有溝通問題。你不會講日文也沒關係，反正按鈕上有寫英文或中文，就算沒有也會有圖片，你按按鈕就可以點餐了，完全沒有語言障礙。

簡而言之，在你跟餐廳之間，**你們透過販賣機這個媒介來溝通**。你跟販賣機說你要什麼，然後得出一張餐券，接著把這個餐券交給餐廳，餐廳就會處理剩下的事情並且把餐點給你。

這過程當中你一句話都不用說，只需要透過按按鈕跟遞餐券，就完成了點餐加付款的程序。

好，上面我們講的都是以顧客的角度來看這件事，那接著我們來想想，為什麼店家要導入販賣機？導入販賣機有什麼好處？

#### 節省人力

最直接能想到的一點就是節省人力，你只要買一台機器放在那邊，就解決了點餐跟買單這兩項作業，不用再放一個人到收銀台那邊，節省了一些人力成本。

而且對餐廳來說，原本點完餐之後店員要跟廚師說有什麼單，現在變成餐券之後，其實餐券直接拿給廚師就好，他們就知道要煮什麼了。

#### 固定點餐選項，節省客製化所需成本

因為改用了餐券販賣機，上面的選項都是你已經定好的，所以你不想提供的東西可以不放。

例如說你拉麵就是一個 size 不能加大也不能縮小，上面就可以不放加大的按鈕，客人也不用問你說：「麵可以加大嗎？」，因為販賣機上面沒有就是沒有。也不用再處理那種牛肉麵不要牛肉的情況，除非你自己在販賣機上面放這個選項。

這樣分析完之後，覺得販賣機還真的是好處多多，難怪日本一堆店都用販賣機來處理點餐跟買單，寫完上面這段之後連我自己都想買一台放家裡了。

但是，這到底跟 API 有什麼關係？

別急，我們慢慢來嘛！先再來看一個故事再說。

### 民宿主人阿民的故事

阿民家裡經營著民宿的生意，為了讓大家更有畫面感，這是房間的長相：

![](/img/ramen-and-api-6238437dc544/1__3lF872K1zSoYeNz5X2O6AA.jpeg)

阿民在五歲那年，意識到爸媽每天都辛苦地用紙本紀錄訂房資訊，於是從那天起下定決心，要成為資工系的學生，幫家裡寫一個管理訂房的網站，讓爸媽開心。

時間快轉到十幾年後，他順利地就讀了資工系，除了系上教的那些科目，他也透過自學學習到了網頁開發的技術，並且成功做出了一個民宿管理系統，取名為 MingBook.com，用來管理家裡所經營的民宿。

這套系統成功地幫他們節省了很多時間，而且電子化之後愛護地球，從此以後都不必用紙本記錄東西，只要在電腦上按幾個鍵就好，十分方便。

不過，還有另一個更重要的問題還沒被解決。

目前能訂房的方式只有兩個，一個是打電話，另一個是到 MingBook.com 的官網。換句話說，如果 SEO（Search Engine Optimization，搜尋引擎優化） 做得不好，大家在使用 Google 搜尋民宿的時候找不到這個網站，就沒有人知道這間民宿的存在了。

再這樣下去，訂單會愈來愈少，最後只能落得關門大吉的下場。阿民心想這樣不行，決定想一些方法來解決這個問題。而他能想到最快也最直接的方法，就是把房間上架到訂房網站。

對欸，如果上架到那些 a 開頭 b 開頭 h 開頭的訂房網站，不就會帶更多流量進來嗎？這樣大家就有更多管道可以來訂房間了，不再受限於電話跟民宿官網。

「喂？請問是某某知名訂房網站嗎？想請問一下我如果想把我們家的民宿在你們網站上架，應該要怎麼做？」阿民打了通電話，想說直接去詢問應該怎麼上架，會比較有效率點。

『主要就是兩個資訊，第一個是您要提供空房資訊，我們才能在網站上顯示。第二個是使用者下訂單之後，必須提供一個方法讓我們把訂單傳送到您那裡』

「這很簡單嘛，我們已經有訂房網站了，是我自己寫的。你只要去網站上面就可以看到空房資訊跟下訂單了」阿民心想原來這麼容易，當初寫的系統還真好用。

『抱歉，**我們要的只有資料**，如果您提供的是一個網站，那我們工程師必須寫爬蟲去解析畫面才能拿到資料。**您必須提供 API 給我們喔**，等你準備好 API 再到官網去填資料就好了，謝謝』

就這樣，客服掛上了電話，留下一臉錯愕的阿民：

> 到…到底什麼是 API？

### 白話講解 API

無論是明示或暗示，相信你在上面兩個故事都有注意到一些我特別強調的地方。我發現如果要從正面來講 API 會非常難講，於是我決定先從側面切入。

一般來說當我們提到 API，會是這樣子的場景：

> 你 API 串好了沒？你還沒串的話資料拿不到欸

> 我要來串 Google 登入的 API，讓我的網站可以用 Google 登入

> 請提供一個空房資訊的 API，我們才能顯示在網頁上面…

從以上對話可以看出 API 背後隱含了「交換資訊」的目的。換句話說，如果你今天一直是一個人單打獨鬥，自己做自己的，基本上就不太會有 API 這種事情。需要串 API，就代表你需要別人的**資料**，或者是別人需要你的**資料**。

這邊特別把「資料」兩個字 highlight 起來，就是因為 API 基本上只牽涉到資料的交換，這是很重要的一部分。就像是阿民跟訂房網站的對話一樣，雖然阿民在自家網站上已經有訂房資訊了，但那個是 HTML，抓下來只會是一堆 `<div>` 之類的標籤，不是「純粹的資訊」。

那純粹的資訊長什麼樣子？我們來看一下 GitHub 的 API，只要你在網址列輸入：[https://api.github.com/users/aszx87410](https://api.github.com/users/aszx87410) 並按下 Enter，就可以看到這樣的資訊：

![](/img/ramen-and-api-6238437dc544/1__Nv0AlmAGoNAMX6aYBMcN7w.png)

你的第一個直覺可能是：「這什麼看不懂的東西？」，但你仔細看，會發現內容其實你看得懂。例如說有一個 “location”: “Taipei, Taiwan”，大概猜得出來意思是「地點在台北」，而 “blog”: “https://medium.com/@hulitw” 也猜得出來是「blog 是這個網站」的意思。

上面這些就是「純粹的資料」，你可以拿到資料本身，而不是畫面。那什麼叫做畫面？這個就是畫面：

![](/img/ramen-and-api-6238437dc544/1__hq5oD5nnc__8CIxARIVji5A.png)

在上圖的畫面中，我們一樣可以看到各式各樣的資訊，但這是因為我們是人。你如果拿給機器看，機器會跟你說：「維大力？義大利？」，不知道你在供三小。

那機器要看什麼？要看我們上面用 GitHub API 回傳的那些資訊，只有資料本身而沒有任何畫面，這才是機器想看而且讀得懂的格式。所以，API 只會回傳資料，而不是像上面這樣的畫面，這是很重要的一點。

舉個例子，很多公司雖然都有後台系統可以看訂單資料，但對於某些人來說，必須要加個輸出成 Excel sheet 的功能，把資料都輸出出來才行。為什麼？因為我要的不是「看資料」，而是資料本身。我要把資料拿去做分析或是在 Excel 上面跑一些公式計算，所以我只需要資料。

所以簡單來說，API 就是個拿來交換資料的東西。

為什麼訂房網站要阿民開放 API 出來？因為它需要民宿的空房資料。  
應該怎麼樣才能在網站上用 Google 的登入功能？串 Google 的 API。  
要怎樣才能用程式碼操控印表機？用印表機提供的 API，就可以操控它。

當我提到「串 API」的時候，背後指的就是：「我要你的資料」或是「你要我的資料」，不過講資料其實有點侷限，更好的說法是：「我要用你的某個功能」或是「我要讓你用我的某個功能」。

以 Google 登入 API 來說，我要串是因為「我想在我的網站上使用 Google 登入」，而 Google 「開放」出這個 API 是因為「Google 想讓其他網站都可以用 Google 帳號登入」。

這邊會特地把「開放」兩個字標出來，意思就是說 Google 沒有開放出來的功能，你就不能用。

咦，怎麼覺得這個概念跟開頭講的販賣機有點像？

### 連結販賣機與民宿網站的例子

仔細想想，會發現餐券販賣機也是同樣的。

為什麼會有餐券販賣機？廢話，因為餐廳要賣東西啊，這樣才叫做餐廳，提供食物以換取報酬。餐廳要賣食物，所以提供而且**只提供**餐券販賣機這個介面讓使用者來使用。

為什麼在阿民的民宿網站必須提供 API 給訂房網站？其中一個原因是阿民不可能把房間資訊的資料庫直接給他們嘛，這樣子顧客資料就全都外洩了。所以透過 API，**阿民可以自己決定什麼要對外開放**。

這跟販賣機是一樣的，販賣機上的按鈕決定了你要賣什麼餐點給顧客。如果今天沒有販賣機沒有店員，你要讓消費者自己衝進廚房跟廚師說他要點甚麼，你的獨家配方都被看光了，你覺得有可能嗎？

顧客透過販賣機這個界面來點餐，就跟訂房網站透過 API 才存取阿民家的房間資訊是一樣的。這樣你大概可以理解為什麼 API 的重點是後面那個 I，Interface 了。

透過介面，可以把兩端串連起來，卻又讓兩端不會互相干擾。訂房網站看得到 MingBook.com 還剩幾間房間，卻看不到顧客資料。阿民可以知道訂房網站上面自己的訂單有哪些，可是沒辦法看到訂房網站其他民宿的訂單。

當阿民跟訂房網站合作的時候，彼此之間會有資料交換的需求。但兩方都不可能門戶大開，直接把後台與資料庫全部給對方看。這時候就需要 API，透過 API，來決定什麼該開放，而什麼又不該。開放的還可以覺得要開放到什麼程度。

所以，什麼是 API？為什麼我們需要用到 API？

當「雙方」需要交流的時候，就必須透過 API。而 API 就是一種…介面。聽起來很抽象，但希望上面的那一大堆例子讓你在說出「介面」這個詞的時候腦中會有一些畫面（至少把販賣機想起來吧）

### API 與 Web API

前面提到當雙方交流的時候就必須透過 API，我覺得這算是很廣義的定義了。今天當我在寫程式時，我如果需要存取檔案，我就必須透過作業系統提供的 API，才能存取到檔案。如果今天作業系統沒有給我這個 API，那我就存取不到。

上面我們提的這個是作業系統與程式語言這兩層之間的 API，但是在一般生活上的例子，我們講的 API 其實是「Web API」。

什麼意思呢？

今天阿民跟訂房網站要串接 API 來拿資料。阿民有阿民自己的網站，訂房網站也有，那今天要透過什麼在兩個網站之間傳遞資料？網路嘛！透過網路才能傳輸資訊。

而因為是透過網路，所以就被稱之為 Web API。你可以想成有很多種不同的 API，操控檔案的我們會叫它 File API，網路相關的叫 Web API，諸如此類的。就像是販賣機有很多種，賣餐券的叫餐券販賣機，賣飲料的叫飲料販賣機，但無論如何，它們全都是販賣機。

我們前面提到的那個網址：[https://api.github.com/users/aszx87410](https://api.github.com/users/aszx87410)，它其實就是一個 Web API，你透過網路連到這個網址，就可以拿到使用者 aszx87410 的資訊。所以我們可以說：「GitHub 開放了使用者資料的 API」，只要是任何想要取得使用者相關資訊的人，都可以來串接這個 API。

所以呢，阿民其實只要如法炮製，提供一個類似的東西，並且把內容換成房間的資訊就好。背後的實作就是從資料庫把東西撈出來，然後按照一定格式輸出，就大功告成了。

當阿民把 API 做好並且在訂房網站上面填寫資料時，他必須提供什麼？第一個就是網址，代表說：「這個 API 在哪裡」，第二個則是文件，告訴對方這個 API 應該如何使用。

這就像販賣機一樣，店家必須告訴我販賣機在哪裡，我才知道去哪裡找它（好啦但通常都在門口），而販賣機上面通常也都會有說明文字，跟我說怎麼操作，否則複雜一點的我有可能不會用。

API 在哪裡（網址）、API 怎麼用（文件），這就是不可或缺的兩大主角。

### 略過技術細節的 API  串接實戰

接著我們來簡單實戰一下如何串接 API，不過我們不會講到技術細節，只會講到大概要做什麼。如果想學會怎麼串接 Web API，你必須先知道什麼是 HTTP 以及它在做什麼，接著才是看 API 文件。在此篇文章中不打算講這些，所以會簡單帶過。

假設今天我想串接 Spotify 的 API 好了，想取得最新專輯資訊，我應該怎麼做呢？

首先，先透過 Google 搜尋：Spotify API，你會找到這個頁面：

![](/img/ramen-and-api-6238437dc544/1__4zLa__HKVZEEuSIqOKcr43g.png)

直接開門見山就跟你說是 Web API，就知道我們是要透過網路來跟 Spotify 拿資料。在這頁面底下就會看到一些基本的說明之類的，但重點是上方導覽列有個 Reference，點下去之後可以看見所有的資訊：

![](/img/ramen-and-api-6238437dc544/1__8crEnFK1KNxkteuYVo8R0A.png)

並且在左邊的導覽列中，可以看到 Browse 底下有個 Get a List of New Releases，看起來就是我們要的 API，再點下去可以看見介紹：

![](/img/ramen-and-api-6238437dc544/1__43ZXLC2z14WEmd8____MyiVg.png)

除了這截圖以外，往下捲動還會有更多相關的資訊，而這就是一份完整的 API 文件，跟你說這個 API 在哪裡（[https://api.spotify.com/v1/browse/new-releases](https://api.spotify.com/v1/browse/new-releases)）以及如何使用（傳什麼參數、回傳值是什麼等等）。

不過與 GitHub API 不同，當你點擊上面的網址時，會出現一個 No token provided 的錯誤，因為 Spotify 的 API 需要身份驗證，而我們沒有傳進去相對應的身份驗證，所以拿不到資料。

不過你在文件上面往下找可以看到範例輸出，就可以看見這個 API 會回傳的資料，的確是我們要的最新專輯相關資訊。

### 總結

API 是什麼？就是日本拉麵店賣餐券的販賣機（會一直強調拉麵店只是因為我第一次看到它是在拉麵店）。

#### 我要串接 API  來取得房間資訊

\=> 我要看販賣機來確定拉麵賣完沒

#### 訂房網站必須透過 API  來我的網站下訂單

\=> 顧客必須透過販賣機來我的餐廳點餐

#### API 只給我 email 跟姓名，地址拿不到

\=> 販賣機只讓我點拉麵，沒辦法不要蔥花

#### API 壞了，怎麼文件上寫回傳使用者資訊，卻傳成訂單資訊？

\=> 販賣機壞了，怎麼按鈕上面寫醬油拉麵，餐券卻寫燒肉飯？

什麼是販賣機？

> 是一台能讓顧客與餐廳雙方溝通的機器。

什麼是 API？

> 是一個能讓生產者與消費者雙方溝通的介面。

希望看完這篇能夠增進你對 API 的理解，從此再也不害怕這個名詞。一看見 API 就會想到販賣機，就會想到拉麵，就會想到日本。

（結尾好想放個什麼機票或是拉麵的購買連結，就變成超展開的業配文了）

這篇文章預設的讀者是完全不懂程式的路人或是有點程式基礎的初心者，希望能夠讓他們更容易了解什麼是 API。文中所用的販賣機比喻並不一定能夠適用所有跟 API 相關的場合，但我想強調的重點只有一個，那就是 API 是能夠連接雙方的介面。

感謝我的學生們給我這篇文章的靈感，以後應該還會有這種給初學者看的技術文章，想持續關注的話可以 follow 一下。單純手癢想按按鈕也可以按個 follow，或是考慮一下關注 [Lidemy 粉絲專頁](https://www.facebook.com/lidemytw/)。

想看更多文章可以參考我的 Medium 文章列表：[https://aszx87410.github.io/blog/medium](https://aszx87410.github.io/blog/medium)
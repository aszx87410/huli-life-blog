---
title: There is no magic in my classroom
date: "2018-11-22T12:47:18.205Z"
categories:
  - 學習
tags:
  - 學習
photos: /img/there-is-no-magic-in-my-classroom-4926b67c06f5/cover.png
---

![](/img/there-is-no-magic-in-my-classroom-4926b67c06f5/0__beKPypfxkyRPpF__M.jpg)

什麼是 Magic？

當你下一行指令，就幫你把 controller 變出來；當你下一行指令，就自動幫你把整個 React 環境建設好；當你下一行指令，不用寫 SQL 卻能幫你把資料庫建好，這就是 magic。

對程式開發而言，這當然是好事，幫你節省了一大堆時間，讓你不用從頭把開發環境建起來，不用每次東忙西忙只是為了把基本的架構搭好。你只要打個幾行指令就把東西變出來了，工作變得比以前有效率許多。

但這對學生來說不是一件好事，或更甚之，我會說這是有害的。

先強調一下，這篇文中指的學生是指那些沒有什麼程式基礎然後跑來學程式的學生，意思是他可能只懂基本的迴圈、判斷式、函式，其餘什麼 hash function、cookie、session、webpack 對他來說都是全新的名詞。

### 知其然而不知其所以然

首先，用這些 magic 來教學生的問題在於它始終就是 magic，是經過包裝的東西，是比較上層的東西。

誠如我在開頭所說，對開發者當然是好事，因為可以「節省開發時間」，可是對學生來說，節省了什麼時間？節省了開發時間嗎？不對，因為學生不用 magic 就不會開發了，所以無從比較。

節省的是「學習時間」，原本應該要學的基礎，卻被 magic 給取代了。教了 rails，所以學生不懂原來世界上有種東西叫做「沒有架構」；教了 firebase 或是 passport 來做登入，所以學生不懂原來登入機制只不過是 cookie 跟 session 的應用。教了 ORM，所以學生不懂原來資料庫還可以下指令去查詢。

就是因為他們只會這些 magic，才導致有一大堆學生回答不出「cookie 跟 session 的區別」、「我要插入一行資料的 SQL 指令怎麼下」這種基礎到不行的問題。

這時候你可能會用一個例子來反駁，例如說腳踏車：

> wait wait wait，不對欸，我們騎腳踏車的時候就是直接學騎腳踏車了，難道你會先去了解腳踏車的構造嗎？

這個例子看似合理，但仔細想就會發現這個類比跟我們所說的 magic 有根本性的差異。

如果腳踏車壞掉了，你要懂的怎麼修嗎？如果是落鏈而已那你可能要會，但不是必須（我到現在都還不會修落鏈），大多數時候你會直接拿去給腳踏車行檢查。

如果你家汽車壞掉了，你要懂的怎麼自己修嗎？不用，因為你從沒學過所以也不會修，而且也沒必要會，所以你會直接把車子送去車廠維修。

如果今天你用的登入套件壞了，你發現你登入完之後 server 有記錄，可是瀏覽器這邊就還是顯示未登入的狀態，你要會修嗎？

不用，因為你找你主管求救就好。

這就是為什麼你主管想把你開除掉，你現在懂了吧。

上面開個小玩笑，答案是：要，你必須要會修。

為什麼？因為你的目的是「完成登入功能」、「完成這個專案」，所以一但跟登入功能有關的東西壞了，都要有能力把它修好。

這就是腳踏車比喻之所以不適當的原因。我們不用知道腳踏車怎麼做，是因為我們騎腳踏車的目的是：「從 A 點帶我到 B 點」，如果腳踏車壞了，我們可以走路、可以搭公車。

我們需要知道登入機制實際怎麼運作，因為我們的目的就是「完成登入功能」，如果你用的套件壞了，你要知道怎麼試圖去修它，或是可以選擇根本不用套件，因為你本來就知道登入功能怎麼做。

聽起來應該很合理，但這邊要再問一個問題來混淆你：

> 如果電腦壞掉，我需要知道怎麼修嗎？

根據剛剛的論述，我們的目的是完成登入功能，如果電腦壞掉就沒辦法達到這個目標，所以我們好像必須知道怎麼修電腦。

如果是這樣的話，不就代表我必須從電腦的硬體組成開始學，還要學會怎麼自己組電腦？或甚至再往下推，如果 CPU 壞掉我也要修的話，我是不是要去看電子學，去看底下的訊號怎麼運作，去學怎麼修好一個電路板？

聽起來怪怪的，怪怪的，怪怪的怪怪的怪怪的。

在談論這些東西時，我們會希望有一個「預設」存在，否則就會一直無限上綱最後偏題偏的很嚴重。例如說我們在談腳踏車的範例時，也同樣可以舉例說：「那地面塌了我要會修路嗎？」，但這已經超出原本問題的範疇了，因此我們應該會同意：「先預設地面是好的」

同樣地，當我們談登入機制時，也會預設電腦是好的不會壞掉，如果真的壞掉的話也會找專業的來修，就像地面壞掉也不是你修而是會找專業的工人來修一樣，這就是專業分工，每個人有不同的職責範圍，你負責自己範圍裡的東西就好。（當然，你想懂其他人的職責範圍也可以，但不是必要）

除非在你的公司（或你想去的公司）裡面，負責用套件寫登入機制的是一個職位，套件壞掉時要來修 bug 的又是另一個職位，那我支持你可以只會用套件，因為不懂登入機制也沒關係，專業分工嘛。

若是你剛好有聽過這樣的公司，麻煩告訴我一下，我會跟我的學生們說最好不要去。

### 漢字序順並不定一影閱響讀，教學順序呢？

教學生套件而不教底層運作，顯然是一件不恰當的事情，那如果教套件也教底層運作，問題是否就迎刃而解了？

是，不過這邊還有一個細節可以討論，那就是有兩種教學順序。一個是先教套件再教底層運作，另一個是先教底層運作再教套件，我覺得大多數課程都是偏向前者，我的觀察啦。

但我個人是後者的死忠粉絲，有加入後援會還有定期繳會費，聽演唱會時會一起應援喊口號的那種。

舉個例子好了，假設今天教登入機制，你教了一個現成的套件來做這件事，在前端呼叫一下 SDK 提供的某個 function，在後端也呼叫一下，確認有接起來之後登入功能就這樣神奇地完成了，magic 🧙！

先確認學生都會使用套件以後，再來跟他們講登入機制，解釋說背後其實都是靠 cookie 跟 session 這兩個東西，只是被我們的套件包裝起來了所以你看不到。

這時學生應該就會：

> 喔～原來是因為這兩個東西啊

好的教學會再讓學生用這些基本的東西實作一遍，沒那麼好的教學就這樣帶過去了。因此學生知道是 cookie 跟 session，但是從來沒有實際用過，因為套件就幫他們搞定一切。

那我們試著換另外一種順序來教學生。

先教學生 cookie，跟他們說這沒什麼，就只是個存在瀏覽器上的資訊而已，然後瀏覽器會幫你帶給 server。接著講身份驗證，最簡單的方法就是你在 cookie 裡面存帳號，這樣 server 不就知道你是誰了嗎？

可是 cookie 的東西是可以被竄改或是偽造的，所以可以選擇把 cookie 的內容加密，或也可以選擇在 server 隨機生成一組亂碼，把這串亂碼放到 cookie 去，只要誰能給你這串 cookie 就能證明身份。

這就像是複雜版的灰姑娘，先預設每個人腳的大小都不一樣，所以一隻鞋子只會有唯一一個人穿得下，誰穿得下那雙鞋子，誰就一定是灰姑娘。

或我們可以說這是通行證，認證不認人，只要你拿得出來這個通行證，我們就能驗證你的身份。而這個通行證是沒辦法被偽造的，因為上面有一大堆防偽機制。

上面這個機制就叫做 session，因為敏感資訊不能存在 client，所以只好存在 server，而 client 跟 server 就靠著這張通行證驗證身份，例如說 server 記住通行證編號 eij2f94ij92fj9 的是小明，小明只要出示通行證就可以驗證身份，而且沒人猜得到 eij2f94ij92fj9 這個通行證編號。

那通行證被偷了怎麼辦？小偷就可以冒用你的身份了，因為認證不認人。所以身為一間有資訊安全意識的公司，如果一大堆用戶的通行證真的不幸被偷走，有種做法是把所有通行證作廢，跟大家說：「麻煩重新再來簽到一遍，之前的通行證全部無效」，小偷偷到的東西就一點用都沒有了。

好，這樣你就知道為什麼臉書之前 access token 被竊取時你被強制登出了，不用客氣。

介紹完 cookie 跟 session 以及與登入機制的關係後，就要靠著實作來加深印象，確保自己除了理論以外實作也是一把罩，能夠實作出簡易的登入機制。

再來才是教套件的時間。

因為自己有實作過這整套機制，一來能夠很清楚理解這個運作，二來能夠體會自己一個人做這整套有點麻煩，所以才會有套件這種東西出現，幫你把這些東西包裝好，讓你只要會用就好。

這時候，學生的感想可能是：

> 喔～不過就是把之前那些東西包裝起來而已嘛

好了，兩種方式都介紹完了，一個先講套件再講原理，一個先講原理再講套件，比較一下這兩種順序，你覺得哪一種比較好？

我覺得後者比較好。

前者對我來說就像是看電影有人爆雷一樣，先跟你講結局，再跟你解釋劇情的發展，說明為什麼最後會導致這樣的結局，先知道了結果，再來看原因。

如果很不巧地這還是一部懸疑電影，那一切的觀影樂趣就沒有了。因為前面鋪的梗都沒有用，你都不會被誤導，因為你已經知道最後的結果是什麼了。

而後者就是平穩地看完一部電影，一步步跟著劇情發展而全心投入在裡面，角色哭你也哭，角色笑你也笑，好像自己就是劇中的主角一般，一同感受著喜怒哀樂並且把自己投射進去。

當結局到來，電影播放完畢以後，會對這部電影有著專屬於你自己的感想，會從之前那些劇情試圖去解釋為什麼導致這樣的結局，而這樣的結局又代表著什麼樣的意義。

順帶一提，為了不被破壞觀影樂趣以及增加不確定感，我現在連電影預告片都不看了。

### 啊多麽痛的領悟

原本這篇文章差不多到這邊就要結束了，可是我突然發現一個問題：雖然我上面說我支持先講原因再講結果，可是在我自己的教學中，有些內容卻是反過來的。

舉例來說，我教 hoisting 的時候就只先講說這個的結果是這樣，並不是直接從它的原理開始講述為什麼會有這個結果。

完了，這不是自打嘴巴嗎。

為了避免這種自相矛盾，我後來很認真地想了一下，終於想到了原因：

> 決定順序的重點在於「感同身受」

> 在於「痛苦」

像我們上面登入機制的那個舉例，如果你一開始就學套件，你會痛苦嗎？不會，你會覺得很快樂，想說登入機制怎麼這麼簡單，幾行程式碼就搞定了。

但若是從基礎開始學，實作完整個機制以後雖然很有成就感，但也會伴隨著一定的痛苦，因為很麻煩。你這邊要記得加一個 cookie，那邊要記得把東西放到 session，還要接 Google 登入、Facebook 登入，還有一堆你根本沒聽過的網站的登入。

當你研究一堆官方文件弄到頭昏眼花的時候，看到你隔壁同學快樂地用著套件，跟你說登入好簡單，你是不是會覺得痛苦，並且在心裡默默唱著：「阿多麽痛的領悟…」

於是你下定決心，下一次直接用套件就好，幹嘛把自己搞得那麼累，並頓時覺得海闊天空，這空氣多麽的清新，這世界多麽美好。

當我問你為什麼要用套件時，你會心如死灰地跟我說：「因為自己串真的很累…真的…」，當我問你隔壁同學為什麼要用套件時，他可能會說：「因為老師叫我用的」

所以，為什麼會有那麼多套件出現？就是因為有一大堆前輩經歷過種種磨難以後，決定造福世人也造福自己，才產生了這些方便又好用的套件。

那為什麼前輩都決定要造福世人了，我卻一再提倡大家繼續受苦？

因為這是成長必經的過程。

舉一個現實生活中的例子，很多父母生下小孩以後細心呵護，不想讓他受到任何一點點傷害，於是把家裡弄的超級乾淨，所有用的東西都標榜著無菌、抗菌，床組也是號稱能防塵蟎的昂貴進口貨。

投入了這麼多的心血，想當然在家裡孩子過得很好，可是一但出門了怎麼辦？因為從來沒有過敏過，所以碰到一點細菌就過敏的更嚴重。如果從來沒有跌倒過，一但摔跤了連爬起來不會。

這就是過度保護，出發點是好的但是手段太過了。

我認為學程式也是一樣的，身為一個老師，當你走過了那些崎嶇的路，你要做的不是避免學生再次走過那些路，而是刻意塑造出一種較安全的環境，並且引導他們再次走過。

所以他們不會因為太崎嶇就放棄，因為坡度是你設計過的；也不會因為路太長而放棄，因為長度也是你設計過的。儘管他們可能體會不到，但這環境是你特別設計出來的。

之前有個學生在意見回饋時貼給我一篇我覺得很棒，來源是[宋尚緯](https://www.facebook.com/photo.php?fbid=2304458812903327&set=a.109637015718862&type=3&theater)的臉書：

> 大家都會誤會一個人如果有很多粉絲／閱讀者／觀看者的話就一定是因為他把東西變得簡單。把複雜的東西變成簡單那的確是功夫，而且功力深厚與否會直接影響接收端的群體組成。最理想的狀況是簡單的事物能夠成為一個連結中高端知識內容的梯子，讓人能夠循序前進。
>
>   
> 一個高端知識，寫的人寫得再好，接收端沒有前置知識也是看得一頭霧水的。但如果大家誤會以為只要將東西寫得簡單就有人去讀，那就純粹是誤會了，簡單之外也要好看啊。

對我來說，好的教材就是經過各種算計之後造出一個梯子，每一階的距離都差不多，既不會長到讓人摔下來，也不會短到一點挑戰性都沒有，而學生就可以順著這個梯子一步步往上爬。

### 結語

一直以來我都抱持著這樣的理念在進行教學，無論是[跟著小明一起搞懂技術名詞：MVC、SPA 與 SSR](/2018/06/10/frontend-engineer-guide-297821512f4e/)，背後都是用這種理念在寫文章。

因為我始終相信當你參與其中並走過那段歷史時，對於「現在」才會有更深刻的感受。把一個東西獨立拿出來教，它就只是一個點，但當你把它放進脈絡時，就能跟千千萬萬個點連在一起，成為一個完整的面。

本篇是我一些教學經驗以及想法的總結，如果你跟我一樣對教學很有興趣，或是根據你的經驗覺得我這篇的論點有點奇怪，認為有更好的做法，都歡迎留言或是直接私訊給我，我們可以交換一下想法。

如果你正在教人卻不知道教材應該如何設計，可以參考[我在用的教材](https://github.com/Lidemy/mentor-program-2nd)（還有改進空間但目前堪用），想要用的話可以直接拿去用，註明出處就好，如果覺得有地方能夠改進也麻煩跟我說一下，我們可以一起讓它變得更好。

最後，感謝閱讀。

題外話，這篇比較偏「教」，之前寫過一篇類似但比較偏「學」的部分，有興趣的可以點擊連結觀看：[當我們在學程式時，要學的到底是什麼？](/2018/10/29/learn-coding-9c572c2fb2/)
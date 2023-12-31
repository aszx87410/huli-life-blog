---
title: 服務對外但需要登入，能有什麼風險嗎？
date: '2021-10-10T09:11:32.282Z'
categories:
  - 技術白話文
tags:
  - 技術白話文
photos: /img/risk-of-service-exposure-a873d3418d99/cover.png
---

![](/img/risk-of-service-exposure-a873d3418d99/0__9JN71UTxZ6xMbGB7.jpg)

在開發產品的時候，常常需要搭配各種工具作為輔助，例如說用 GitHub 管理程式碼，或者是用自己架的 GitLab。在專案管理的部分，也有些人會選擇用自己架的 JIRA 或是 Redmine，這些都很常見。

雖然這些服務通常都會有 cloud hosting 的方案，但比較常看到的是自己把服務架起來。畢竟有些是開源的專案，自己架起來省了不少成本，而有些公司的考量則是希望資料掌握在自己這邊，而不是別人的雲上面。

在最理想的情況之下，這些服務應該是不會對外的。意思就是，只有公司內網的 IP 可以連結到這些服務，如果不在公司內，就是透過 VPN 才能存取到，確保外面的人看不見這些服務。

但實際的狀況卻是，有些公司並沒有把這些服務隔離在內網（或搞不好根本沒想到要這樣做？或可能是有什麼實作上的困難），因此在外網就可以直接看見這些服務。

這樣會有什麼問題嗎？

最糟的狀況就是權限管理沒有做好，讓這些服務甚至不需要登入就可以存取，如此一來，公司內部的資訊就直接暴露在外。如果暴露的服務是 GitLab，程式碼就會跟著曝光，或有些敏感資訊例如說帳號密碼也有可能跟著曝光。

看到這邊你可能會想說：

> 不可能吧，有公司會這麼不小心連權限都不鎖嗎？

[HITCON ZeroDay](https://zeroday.hitcon.org/) 是一個台灣的漏洞回報平台，在上面回報的漏洞會給廠商足夠的時間修補，接著過一陣子以後就會對外公開，上面可以直接搜尋有人回報過的漏洞，這是搜尋 GitLab 的結果：

![](/img/risk-of-service-exposure-a873d3418d99/1__zFAXT1hVhaA8Z5M__tEVX__A.png)

這只是其中一部分的搜尋結果，如果好奇全部的搜尋結果，可以自己去網站上面試試看，看看有哪些公司有過類似的問題。

GitLab 存取控制缺陷，就代表不需要登入也可以看到裡面的 project，無論是程式碼還是各種相關文件，全部都會被人看光光。

### 這些服務是怎麼被找到的？

看了上面的截圖，你會好奇的第一個問題可能就是這個。

他們是怎麼找到這些服務的？難道是這些公司的員工自己來回報嗎？不然照理來說應該不會發現這些服務才對？

不不不，答案或許比你想得更簡單。

GitLab 的登入頁面預設的標題是「Sign in · GitLab」，所以只要運用一點 Google 的搜尋技巧，就可以找到網址有 tw 的 GitLab 登入頁面：「intitle:Sign in · GitLab inurl:tw」

![](/img/risk-of-service-exposure-a873d3418d99/1____5JHIE3yMUPTeac6p6fnvg.png)

這只是其中一種方法而已，是最方便快速的方法，但能找到的資料有限。另外一種方法則是利用其他一些網站——專門在搜集資訊的網站。

有些網站會去掃描每一個 IP 或是新註冊的網域，去掃他們的每一個 port，然後根據 response 來決定它可能是哪個服務，這些資訊可能存在於 response header 或是 body 的任何地方。有了這些資料以後，就可以做跟剛剛類似的事情，直接去搜尋資料庫裡面有哪些 IP 有 GitLab 這個服務，有些更精準的甚至可以指定版本。

例如說 [Shodan](https://www.shodan.io/) 就是這樣的一個網站：

![](/img/risk-of-service-exposure-a873d3418d99/1__aEe8Rv0y5b4P097dxk8fLQ.png)

如果需要的話，還可以指定更精準的條件，例如說「在台灣的 GitLab 服務」之類的，就會跑出一長串清單，但這類型的網站靠的是查詢來賺錢，所以想看更多資料的話就必須付錢。

想了解更多這種服務的話，可以參考我同事寫的：[駭客起手式 : Shodan & Fofa](https://tech-blog.cymetrics.io/posts/nick/shodan-fofa/)。

總之呢，只要你的服務暴露在外網，就很有可能被探測到，被收錄進去某人的資料庫裡面。所以千萬不要想著「我又沒有特別宣傳這網站，怎麼會被發現」，光是有 public IP 這一點，網站就已經被發現了。

### 可是我的服務需要自家信箱才能登入，這樣就沒問題了吧？

前面提過最糟的狀況就是權限沒有控管好，開放訪客註冊或是根本不需要註冊，而最好的情況當然就是服務不對外，隔離在內網裡面。而在這兩者之間的狀況就是標題所提到的：「服務對外，但需要登入」。

因為需要登入，而駭客不知道帳號密碼，既然無法登入就看不到東西，也無法達成任何攻擊，造成任何損害。

真的是這樣嗎？

通常是這樣沒錯，除非你用的這個服務本身就有漏洞，而且這個漏洞不需要登入就可以觸發，這類型的漏洞通常被稱為 Pre-Auth 的漏洞，儘管沒有登入，但只要能存取到這個服務，就能利用這個漏洞。

應該有不少人都有用過 Jira 吧？Jira 在 2019 年 7 月時有過一個編號是 [CVE-2019–11581](https://confluence.atlassian.com/jira/jira-security-advisory-2019-07-10-973486595.html) 的漏洞，是 Pre-Auth RCE，Pre-Auth 指的是不需要登入，RCE 指的是 Remote Code Execution，意思就是這個漏洞能夠讓攻擊者在系統上執行任意指令，是很嚴重的漏洞。這個漏洞只要有開 contact administrator 的功能就會中招。

另外呢，Jira 背後的公司 Atlassian 推出的另外一個服務 Confluence，在今年八月也爆出了一個 Pre-Auth RCE，編號為 [CVE-2021–26084](https://www.ithome.com.tw/news/146555)，這次不需要特別開什麼設置就會中招。

換句話說，上面這兩個漏洞基本上就是只要你服務對外，就有遭受到攻擊的風險，無論你有沒有鎖登入功能都一樣。

這就是服務對外的風險，只要這個服務本身存在著 Pre-Auth 的漏洞，攻擊者就可以在未登入的狀況下進行攻擊。

接著許多人的下一個問題可能是：

> 我們公司又不有名，應該不會有人來打吧？

這就不一定了，因為搞不好「打你的人也不知道自己在打的是誰」，還記得我前面說過的 shodan 搜尋引擎嗎？

假設今天我是一個攻擊者，而且想讓效益最大化，我一定是先去上面搜尋符合條件的主機，然後把清單撈下來以後直接把攻擊自動化，先寫好一個腳本，利用這個漏洞讓遠端的主機跑挖礦程式什麼的，接下來只要啟動腳本，就會自動去攻擊每一台主機。

因此，我根本不會知道那些主機是誰的，因為我也不需要知道。

來簡單總結一下：

1.  只要你的主機有著 public IP，就能夠被找到
2.  承上，如果架的服務有 Pre-Auth 的漏洞，就很容易遭受到攻擊

最根本的解決方法就是把這台主機隔離在內網，讓外界存取不到，或者是防火牆設定好，只允許特定的 IP（通常是來自公司的 IP）存取 。除此之外，也還是要頻繁更新版本，避免使用到有漏洞的版本，讓攻擊者無機可趁。

如果真的因為一些原因要對外，至少在前面擋個 WAF（Web application firewall），有些 WAF 的反應速度很快，可以站在最前線把一些惡意的 payload 擋掉，例如說 Cloudflare：[How Cloudflare helped mitigate the Atlassian Confluence OGNL vulnerability before the PoC was released](https://blog.cloudflare.com/how-cloudflare-helped-mitigate-the-atlassian-confluence-ognl-vulnerability-before-the-poc-was-released/)

文章內提的 Pre-Auth 漏洞都是嚴重性極高的 RCE，而這種 Pre-Auth RCE 的頻率沒那麼高，比起 RCE，更常出現的是一些大大小小的漏洞，例如說洩漏 user 的 email 啦，或是任意讀取檔案啦之類的，雖然說危害程度沒有 RCE 這麼大，但依然是個風險，依然是個需要修補的漏洞。

最後，若是你對這類型的資安主題有興趣，除了追蹤這個 Medium 帳號以外，也可以追蹤 [Cymetrics Tech Blog](https://tech-blog.cymetrics.io/)，我跟幾個同事們都會在那上面寫資安相關的文章。
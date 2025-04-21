---
title: 善用 SEO 工具的 backlink 來海巡
date: '2025-04-21T02:54:24.919Z'
categories:
  - Others
tags:
  - Others
photos: /img/use-backlink-to-find-reference/cover.png
cover: /img/use-backlink-to-find-reference/cover.png
---

我喜歡看別人轉貼我的文章以後的評論，因此時不時就會「海巡」一輪，找找有誰又分享了我的文章，給了哪些評語或是心得。其中最麻煩的就是社群平台，很多內容都不給搜尋引擎索引，只能用平台內建的搜尋功能才能找到。

話說我以前以為所有地方的搜尋都是全文檢索，只要你搜尋的關鍵字符合目標的其中一部分就會搜尋到，就像 `text LIKE %huli.tw%` 這樣。但後來才知道有許多搜尋用的是分詞系統，只會對分詞後的 token 進行索引，因此必須搜得夠精確才能找到。

舉例來說，搜尋 `huli.tw` 可能找不到，要搜尋 `life.huli.tw` 或甚至是 `https://life.huli.tw` 才會找到我想要的東西。

那如果先撇除社群平台不看，一般網頁的引用要如何尋找呢？

我以前會用 `link:https://life.huli.tw` 這個關鍵字來搜尋，但找到的結果有限，還是會出現很多不相干的東西。

直到後來我接觸了一些 SEO 工具，別人拿來改善 SEO，我拿來海巡。

## 用 ahrefs 看 backlinks

所謂的 backlink 就是「在其他人的網站放了一個到你網站的連結」，這會與 SEO 有關是因為這就是一種引用，越多人引用的內容可能品質越高，因此會影響權重。

我第一次聽到這詞是在幾年前的工作上，才知道「給一個超連結」也能是利益交換的方式之一。

而 [ahrefs](https://ahrefs.com/) 本身是個很有名的 SEO 工具，提供了一大堆的功能，例如說這是我的 dashboard：

![ahrefs dashboard](/img/use-backlink-to-find-reference/p1.png)

可以看到流量以及關鍵字等等各種資訊，真的在做 SEO 的就會根據這些指標再去設計自己網站的內容，看要出現哪些關鍵字。但我本來就不是個會特別為了流量去做什麼事情的人，我想寫什麼就寫什麼，管他什麼 SEO，因此沒有在用這些功能。

在 ahrefs 提供的各種功能中，我唯一會用的是剛才提到的 backlink，在後台中它直接幫你搜集了這些資訊，非常方便：

![backlink 列表](/img/use-backlink-to-find-reference/p2.png)

可以看到在什麼時間點這個 backlink 被找到，以及引用我文章的來源網站跟引用的文字。從這個 dashboard 就可以一目了然看出到底哪些網站有引用我的文章，超級方便！

然後，還可以看到一個有趣的現象是有許多專門為了做 SEO 的垃圾網站會到處亂引用，或者是 AI 寫的內容農場，反正就是些垃圾網站。

還能看到有些人用這功能來做行銷：

![運用 backlink 來廣告](/img/use-backlink-to-find-reference/p3.png)

以前看 Google Search Console 的時候就碰過了，某些關鍵字或是來源含有廣告訊息，通常也是些做網路行銷或是 SEO 的公司，用這種方式來出現在你的後台，推廣他們自己的工具。

最後分享一個今天剛找到的 backlink，來自於美國的上市資安公司 Palo Alto Networks，在最近的 [Slow Pisces Targets Developers With Coding Challenges and Introduces New Customized Python Malware](https://unit42.paloaltonetworks.com/slow-pisces-new-custom-malware/) 文章中，引用了我技術部落格的文章，是在講 ejs 的：

> A Taiwanese researcher who goes by the handle Huli discussed the technical details of how this results in arbitrary code execution in a CTF post.

能被別人引用就是一種肯定，開心。


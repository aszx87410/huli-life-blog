---
title: Samsung Galaxy S25 沒有 eSIM，就自己裝一個上去吧之 ESTKme 使用心得
date: '2026-09-26T01:34:07.000Z'
categories:
  - 科技
tags:
  - 科技
photos: /img/samsung-galaxy-s25-estkme-esim/p2.jpg
cover: /img/samsung-galaxy-s25-estkme-esim/p2.jpg
---

如同我[之前](https://life.huli.tw/2026/09/23/my-smartphone-history/)所寫過的，最近換了一支 Samsung Galaxy S25，最驚訝的事情莫過於居然不支援 eSIM。在確認這個事實的當下覺得天都要塌了，我費盡千辛萬苦從台灣帶來日本，結果不支援 eSIM。都 2026 年了，怎麼可能有兩萬塊的手機不支援？

心灰意冷的我讓 AI 幫我查一下，意外地發現居然有公司在賣「實體 eSIM 卡」，順便讓我稍微學到了 eSIM 跟 SIM 卡的原理。這篇會從原理稍微簡單講起，懶得看的可以直接跳到後面。

## 簡易版 SIM 卡與 eSIM 原理

我們所謂的實體 SIM 卡，裡面存的是一組 profile，你就簡單想成有個 ID 跟 key 就好，前者就是你的身份，後者是一把鑰匙，來證明你是誰。而這個 profile 基本上是寫死的，從出廠就寫在晶片裡面。

而 eSIM 的話，就是你手機上有一個晶片（叫做 eUICC）可以一次管理多個 profile，就能支援多組號碼。

如果有用過 eSIM 的話，最常見的啟用方式是去掃 QRCode，這個 QRCode 的內容並不是 profile 本身，它只是一個取貨碼，你要憑這個取貨碼去電信公司的伺服器下載 profile，而且只能下載一次。這就是為什麼啟用 eSIM 的時候要有網路，否則你下載不下來。

對手機來說其實是差不多的，反正不管是實體 SIM 卡還是 eSIM，最後看到的都是那組 profile，溝通的介面是一樣的。

以上就是簡易版的原理。

既然 eUICC 就只是個可以管理多個 profile 的晶片，那如果我們把實體 SIM 卡上的晶片也換成這個呢？不就有一個實體的 eSIM 卡可以用了嗎？這就是實體 eSIM 卡的原理。

原本 eUICC 是裝在手機上，有廠商把它裝在實體 SIM 卡上，就可以讓沒有支援 eSIM 的手機也有這個功能。

但由於現在大部分手機都支援 eSIM 了，所以「實體 eSIM 卡」的知名度不怎麼高，在買 S25 之前我也完全沒聽過這種東西，甚至不知道為什麼要有。買了 S25 之後，只覺得有人做這種產品真是太好了，簡直造福社會。

## 實體 eSIM 卡的選擇

我查過一輪之後，幾個比較知名的品牌大概是：

1. [9eSIM](https://www.9esim.com/en)
2. [ESTKme](https://store.estk.me/)
3. [eSIMme](https://esim.me/pricing)

台灣的話也有個公司專門做這個：[AIC eSIM](https://aicard.biz/)。

eSIMme 跟 AIC eSIM 管理上都要用官方 App，而前兩個 9eSIM 跟 ESTKme 可以用第三方的。

由於之前在 PTT 上面看到有人用 9eSIM 有點問題：[Re: [問題] 三星用戶選5ber還是eSTK?](https://www.ptt.cc/bbs/MobileComm/M.1743685345.A.64E.html)，因此最後選了 ESTKme，我看網路上的心得文比較多。

話說如果你特別注重來自中國的產品，有些 eUICC 是來自中國的，如 9eSIM 之前的版本就有明確寫是自中國。但有些廠商也不會明寫就是了，可以自己再多查查。

## ESTKme 使用心得

我是直接在官網上買的 ESTKme Plus+，官方語言可以切英文中文，切中文就是用港幣付款，價格為 140 港幣，加上送到日本的運費 55 港幣，共 195 港幣折合台幣 790 元。

9/7 買的，9/8 出貨，用的是順豐速運從中國深圳寄出，9/15 送到，大概一個禮拜，速度還算滿快的。

![estk 外裝](/img/samsung-galaxy-s25-estkme-esim/p1.jpg)

![estk sim卡](/img/samsung-galaxy-s25-estkme-esim/p2.jpg)

使用方法很簡單，就是把這個卡放進插槽裡（我是放在 SIM1），接著在手機上面下載 App 來管理 profile。

雖然說可以用第三方的 App，但我還是優先用了[官方的 ESTKme App](https://play.google.com/store/apps/details?id=me.estk.lpa)，裝好之後就跟一般正常開通 eSIM 差不多，拿 app 去掃 QRCode，下載，結束，輕輕鬆鬆。

我在日本用的是 Povo 2.0（現在好像也有人推薦來日本旅遊用這個），訊號跟使用上都沒問題。

就是這麼簡單，問題就這樣被解決了，我的 S25 也擁有了 eSIM 的功能，再次感謝這些廠商。

## 結論

感謝三星 S25 讓我知道居然還有這種東西可以用，也感謝 PTT 上面資料滿齊全，再感謝 AI 查資料非常方便，日本這邊也有網友分享實測結果，看了更安心了。

話說這種實體 eSIM 卡有個附加價值是，假設哪天你要換手機，直接把實體 eSIM 卡換過去就好，不用重新發行 eSIM。但如果讓我選，我還是選有 eSIM 功能的手機就是了，有原生功能還是最方便的，手機也不是天天在換。

若是你也不小心買到沒有 eSIM 功能的手機，誠心推薦這種實體 eSIM 卡，購買前可以先查一下自己手機是不是支援（應該是大部分都可以，少部分不行）。

---
title: 從「我的卡號怎麼在這」聊聊信用卡資安與 PCI DSS
date: '2025-06-23T11:54:24.919Z'
categories:
  - 科技
tags:
  - 科技
photos: /img/pcidss-and-credit-card-security/cover.png
cover: /img/pcidss-and-credit-card-security/cover.png
---

前陣子我在某個網站上面買了東西，在輸入信用卡號時因為好奇打開了 DevTools 看一下，發現：「咦？怎麼不是 iframe」，瞬間猶豫了三分鐘到底要不要刷下去（最後還是刷了）。

先來解釋一下有沒有 iframe 的差別，可以簡單把 iframe 想成就是「在你的網站上嵌入金流系統」，因此雖然看起來像一個網站，背後其實是兩個，商品頁面是購物網站，但是輸入信用卡號的地方是金流系統，網站本身沒有碰到任何信用卡資訊，根本不知道你的卡號跟 CVV 是多少。

底下就是個有 iframe 的截圖，可以看到整個輸入卡號的地方都放在金流自己的網站上：

![有 iframe 的截圖](/img/pcidss-and-credit-card-security/p1.png)

如果沒有 iframe 的話，代表你的信用卡相關資訊都會先傳到這個購物網站的 server，再從 server 傳給金流商去刷卡。（金流服務提供商，Payment Service Provider，通常簡稱為 PSP，在這篇提到的金流商、金流系統商都是指這個）

在我的認知中，大多數網站應該都是前者，因為這樣就不會碰到使用者的信用卡資訊。之所以不想碰到，是因為一旦碰到了就會被納入合規的範圍，要遵守一個叫做 PCI DSS（Payment Card Industry Data Security Standard）的規範。

除了 iframe 以外，還有另一種模式是跳轉，按下付款之後重新導向到金流網站，刷完卡再跳回來，這種方式也不會直接接觸到信用卡號。

於是，在我看到這個網站居然不是用跳轉也不是用 iframe 的時候，我猶豫了。畢竟這個網站看起來不像是有做合規的大公司，網站上也沒有任何相關說明。

雖然我最後還是刷下去了，但這勾起了我的好奇心：「如果他們真的沒有合規，會有什麼後果？我又該向誰檢舉？」

## 幕前與幕後

原本我沒想這麼多，想說這是網站的個人行為，跟金流商無關，網站自己拿了卡號去呼叫金流 API，金流提供商也沒辦法，沒他的事。

但後來查了一下資料，才發現事情沒這麼單純。

以知名的藍新金流為例，你在這個[線上交易─幕前支付技術串接手冊_NDNF-1.1.8](https://www.newebpay.com/website/Page/content/download_api) 中，看不到任何一個接收信用卡資訊的 API。裡面介紹的模式是我前面提過的跳轉，點了按鈕之後跳去藍新，付完款再跳回來，透過 server 傳遞刷卡結果。

那既然沒有能夠接收卡號的 API，這些網站是怎麼做的呢？

我找到一篇臉書前端討論版的[老文章](https://www.facebook.com/groups/f2e.tw/posts/2128921873811833)，在裡面看到了關鍵字：「幕後授權」。

前面提過的跳轉被稱作是「幕前」，而商家自己接收信用卡資訊並且在背後傳給金流商叫做「幕後」。

雖然在藍新的官網上找不到相關資料，但另外一間金流商綠界倒是寫得很清楚，在[信用卡幕後授權API技術文件](https://developers.ecpay.com.tw/?p=45876)中，寫著：

> 為了確保交易安全，我們向已取得PCI DSS認證的特店提供信用卡幕後授權交易服務。這表示消費者可以在特店交易頁面輸入卡號後，透過整合信用卡幕後授權API規格來進行授權交易。

並且附上兩點注意事項：

> 1.信用卡幕後授權規格須請特約商店跟業務申請開通。
> 2.特約商店須每年提供綠界PCI DSS認證之合規聲明文件(AOC)。

![綠界說明文件截圖](/img/pcidss-and-credit-card-security/p2.png)

這樣的話，整件事情就合理起來了！一般的網站就走跳轉，想要讓使用者體驗更好又有做合規的話，就走幕後授權，拿到合規並申請之後就有 API 可以用了。

照這個說法來看，既然要先提供 PCI DSS 的認證合規文件才能拿到幕後授權的 API，應該沒問題才對？這就不一定了。

在一些第三方的網站上可以找到藍新的幕後授權申請表，來源是 [1shop 申請藍新金流免跳轉](https://support.1shop.tw/%E7%94%B3%E8%AB%8B%E8%97%8D%E6%96%B0%E9%87%91%E6%B5%81%E5%85%8D%E8%B7%B3%E8%BD%89/)，申請表上是這樣寫的：

> 1.收款商店串接幕後機制，應確保買方交易資料安全，如發生資料外洩之情事，本申請人(即代表會員)願自行承擔風險。
> 2.若收款商店之信用卡交易筆數與交易金額達國際信用卡組織規範(VISA/Mastercard/JCB)指定門檻，本申請人(即代表會員)願配合執行相關資安認證作業。

![藍新申請表截圖](/img/pcidss-and-credit-card-security/p3.png)

第二點看起來像是「有到門檻的話要配合執行資安認證」，換句話說就是「沒到門檻就不用」或是「沒有特別要求就不用」，不像綠界那樣有明講你一定要先有 PCI DSS 認證。

因此，從這文件看起來，並不是每一個有開通幕後授權的網站都有拿到 PCI DSS 認證。

另外一間 PAYUNi 統一金流的[幕後功能申請書](https://docs.payuni.com.tw/web/#/7/245)上的寫法也類似：

> 1.為確保買方交易安全，如有卡號相關資料外洩風險，須由收款會員承擔相關責任。
> 2.因「第三方支付服務定型化契約應記載及不得記載事項」規定，會員應於交易頁或網站接露第三方支付業者 PAYUNi 平台服務條款，以確保付款方權益，若信用卡交易筆數或金額達國際組織規範，須依規定配合進行PCIDSS資安認證。
>3.全平台預設商店為3D交易，如會員申請啟用信用卡幕後同等於不使用信用卡3D驗証機制，應自行承擔付款方因使用信用卡付款所生之所有爭議款項。

![統一金流申請表截圖](/img/pcidss-and-credit-card-security/p4.png)

「若信用卡交易筆數或金額達國際組織規範，須依規定配合進行PCIDSS資安認證」這點跟藍新的「若收款商店之信用卡交易筆數與交易金額達國際信用卡組織規範」看起來很像，都是說「有到門檻的話會被要求」。

那我就好奇了，這個門檻會是多少？

## 初探 PCI DSS

PCI DSS v4.0.1 的文件可以在官網下載：https://docs-prv.pcisecuritystandards.org/PCI%20DSS/Standard/PCI-DSS-v4_0_1.pdf

在第二章 PCI DSS Applicability Information 中寫著：

> PCI DSS is intended for all entities that store, process, or transmit cardholder data (CHD) and/or sensitive authentication data (SAD) or could impact the security of the cardholder data and/or sensitive authentication data. This includes all entities involved in payment account processing —including merchants, processors, acquirers, issuers, and other service providers.
> PCI DSS 適用於所有儲存、處理或傳輸持卡人資料（CHD）或敏感驗證資料（SAD）的實體，或任何可能影響持卡人資料或敏感驗證資料安全的實體。這包括所有參與支付帳戶處理的單位──例如商家、處理商、收單機構、發卡機構以及其他服務提供者。
> 
> Whether any entity is required to comply with or validate their compliance to PCI DSS is at the discretion of those organizations that manage compliance programs (such as payment brands and acquirers); contact these organizations for any additional criteria.
> 是否需要遵循 PCI DSS，或是否需驗證其符合性，取決於管理合規計畫的相關機構（如 payment brands 和收單機構）的判斷；如需其他判定準則，請聯繫這些機構。

可以看到整個流程中有分幾個角色：

1. Merchants 商家
2. Processors 金流處理商，負責處理交易資料，藍新、綠界或是 Stripe 都歸類在這
3. Acquirers 收單行
4. Issuers 發卡行
5. Other service providers 其他服務提供者
6. Payment brand 卡組織，就是 Visa、MasterCard 這些

假設我拿台新發的 Visa 信用卡在 A 網站透過藍新刷卡，在這個流程中：

* Merchants 商家：A 網站
* Processors 金流處理商：藍新
* Acquirers 收單行：看藍新背後跟哪個銀行合作
* Issuers 發卡行：台新
* Payment brand：Visa

根據 PCI DSS 的說法，上面這些都涵蓋在 PCI DSS 的範圍中，但最主要的是開頭那句：

> PCI DSS is intended for all entities that store, process, or transmit cardholder data
> PCI DSS 適用於所有儲存、處理或傳輸持卡人資料的實體

是不是就如我文章前面所講的，只要嵌入 iframe 或是跳轉，不要儲存、處理或傳輸持卡人資料就沒事了？連碰到都沒碰到。

我原本是這樣想的，但查了查發現好像不是這樣。

知名的金流服務提供商 Stripe 在自家網站上有個 [A guide to PCI compliance](https://stripe.com/guides/pci-compliance)，裡面很清楚地解釋了這些規則。

首先，第一步要先看你的 PCI 等級在哪裡，分成四級，基本上是按照訂單數量分的，等級 1 最嚴格，4 最寬鬆：

* Level1：一年 600 萬筆交易以上
* Level2：一年 100 - 600 萬筆交易
* Level3：一年 2 - 100 萬筆交易
* Level4：一年 2 萬筆交易以下

上面這個是針對商家的，針對金流商的規定又不同了，Visa 也有個[頁面](https://corporate.visa.com/en/resources/security-compliance.html#5a9da041b6)在講這些。

總之呢，這篇以討論商家為主，所以小的商家可能會在 Level3 或 4。但不管是哪一個，都要寫一份叫做 SAQ 的文件，全名為 Self-Assessment Questionnaire，自我評估問卷。

但這個 SAQ 有很多不同的類型，因此下一步是決定要填哪一個類型。

根據 Stripe 的說明，就算用了我一再提到的 iframe，網站本身從來沒有接觸到信用卡資訊，也還是被歸類在最簡單的 SAQ A 這個類別。

![Stripe iframe SAQ A 說明](/img/pcidss-and-credit-card-security/p5.png)

如果用了舊版的 Stripe SDK，會在頁面上自動插入 input（不是用 iframe），填完卡號之後直接送到 Stripe 的 server，就是另一個 SAQ A-EP。

而開頭那種自己做付款頁面，使用者輸入的卡號會先進到自家系統，再轉傳給金流商的狀況，會被歸類到 SAQ D。

因此呢，根據 PCI DSS 的規範，就算是完全沒有接觸到卡號，看起來也還是要填個簡單的問卷。而若是碰到了卡號，不管你有沒有儲存都一樣，只要進到了自己家的 server，就被歸到 SAQ D，要做的合規十分嚴格。

Stripe 上有個 [Create a card token](https://docs.stripe.com/api/tokens/create_card) 的 API，input 接受卡號跟過期日等等資訊，而敘述中有寫到這個 API 需要額外申請：

> To use this functionality, you need to enable access to the raw card data APIs. In most cases, you can use our recommended payments integrations instead of using the API.

而這個 [Enabling access to raw card data APIs](https://support.stripe.com/questions/enabling-access-to-raw-card-data-apis) 的頁面中，就有寫到要申請的話要找客服，並且提供 PCI DSS 相關證明，如 SAQ D：

![申請 Stripe API](/img/pcidss-and-credit-card-security/p6.png)

除了 Stripe 以外，另外一間有名的金流服務提供商 adyen 也有個 [PCI DSS compliance guide](https://docs.adyen.com/development-resources/pci-dss-compliance-guide/)，裡面寫得很清楚：

![adyen iframe SAQ A 問卷](/img/pcidss-and-credit-card-security/p7.png)

寫說就算你用了 iframe，也要填寫 SAQ A 的問卷。

而像是台灣這種幕後授權，在 adyen 上稱為 API only，跟 Stripe 一樣都寫了必須要提供 SAQ D 的文件：

![adyen API only 申請截圖](/img/pcidss-and-credit-card-security/p8.png)

看完這些規定之後，不禁覺得藍新條款中的「若收款商店之信用卡交易筆數與交易金額達國際信用卡組織規範(VISA/Mastercard/JCB)指定門檻」有些蹊蹺，雖然說根據交易筆數確實有分級，但只要有交易，就需要做 PCI DSS 合規，這個「指定門檻」是一定會達到的。

話雖如此，實際上到底需不需要，似乎確實有些模糊地帶。

例如說 Mastercard 有一個[商戶須知安全交易知識](https://www.mastercard.com.tw/zh-tw/business/merchants/safety-security/merchants-need-to-know.html)，開宗明義寫著：

> 所有儲存、處理或傳輸持卡人資料的商戶都必須遵守PCI規定。所有1級、 2級和3級商戶都必須直接向其收單行報告其合規狀態。

在 4 級商戶那邊有個額外的注意事項，寫說：

> 4級商戶需要遵循PCI DSS的規定。4級商戶應諮詢其收單機構，以確定是否需要合規驗證。

搞得我好亂啊！前面說「要遵守規定」，後面說「要諮詢收單機構確認是否要合規驗證」，那到底是要還是不要？還是說走一種自由心證的概念，你應該要做但我不檢查？

而 JCB 的部分有一張[表格](https://www.global.jcb/en/products/security/data-security-program/)，規定就比較嚴格了：

![JCB 合規表格](/img/pcidss-and-credit-card-security/p9.png)

看起來就算交易量小於 100 萬筆也還是要做 SAQ 以及每季一次的資安掃描。

Visa 的[相關規定](https://corporate.visa.com/en/resources/security-compliance.html#6c3dbcefc9)中，應該是因為 Level 3 跟 4 要做的事情一樣，把 PCI DSS 的 Level4 給拿掉了，反正訂單數量 100 萬以下都叫 Level3，每年要做一次 SAQ：

![Visa 合規表格](/img/pcidss-and-credit-card-security/p10.png)

而上面也有寫說誰應該負責檢查這個合規狀態：

> Issuers and acquirers are responsible for ensuring the PCI DSS compliance of its service providers and merchants, including service providers the merchant is using. A service provider and merchant must always maintain full compliance.
> 發卡行（Issuers）與收單行（Acquirers）有責任確保其服務提供者與商戶符合 PCI DSS 規範，這也包含商戶所使用的服務提供者。服務提供者與商戶必須始終保持完全合規。

跟 Mastercard 的規定類似，都是把責任放在發卡行或收單行那邊。但是以商家串接金流服務，金流服務再接收單行的模式來講的話，收單行只會對到金流服務，不會直接對到商家。

因此商家那段的責任歸屬在哪裡，似乎沒這麼明確。雖然理論上應該是金流服務要負責比較合理，但好像也沒看到什麼明確的規範。

整理資料到這邊，大概可以總結出底下結論：

1. PCI DSS 根據訂單數量會分等級，不同等級需要做的事情不同
2. 交易量大到超過 600 萬筆，不管有沒有碰到卡號都要找專家來做合規
3. 600 萬筆以下，就算沒接觸到卡號也需要做合規，要做 SAQ 問卷
4. 用 iframe 或跳轉的話，會被歸類在 SAQ-A
5. 卡號進到自家系統，就算沒保存，也被歸類到 SAQ-D
6. 由發卡行/收單行要求直接串接的商家或金流商做合規

但與此同時，我自己也產生了一些疑問：

1. 真的完全沒碰卡號也要遵守 PCI DSS 嗎？但我沒聽說過有人做，那沒做會怎樣，誰會要求？
2. 有碰到卡號但只有傳輸，確定是被歸類到 SAQ-D 嗎？
3. 如果金流服務提供商沒有審查商家的 PCI DSS，責任會在誰那？
4. 發現可能不符合 PCI DSS 的商家該怎麼辦？有管道檢舉嗎？
5. 整個合規的責任鏈到底為何？誰有權要求合規？
6. SAQ 評估表填完要送給誰？

## 聽聽業內人士怎麼說

在 PCI 合規中有個專有名詞叫做 QSA，Qualified Security Assessors，在官網有個清單：https://www.pcisecuritystandards.org/assessors_and_solutions/qualified_security_assessors/

在上面的都是被認證過的，因此可以參考他們提供的建議。

我有找到一個 YouTube 影片：[A discussion about PCI compliance for e-commerce businesses](https://www.youtube.com/watch?v=sgtk7zNYcHo)

這影片跟我上面的結論似乎差不多，沒碰卡號「可以做」SAQ A，有碰的話做 SAQ D。

另外也有兩篇中文的部落格文章來自於受認證過的 QSA 公司：

1. [您適用哪一個 PCI DSS SAQ 類型?](https://www.securevectors.com/zh-hant/what-is-your-saq-type/)
2. [PCI DSS 認證的流程以及合規費用說明](https://www.securevectors.com/zh-hant/pci-dss-certification-process-compliance-cost/)

結論也是相同的，而裡面有多提到我想知道的責任鏈，是寫說卡組織（Visa 那些）要求收單機構，收單機構再往下要求。

那看起來跟我想得差不多，例如說卡組織跟某個銀行合作，就會要求銀行，銀行再跟某個金流合作，就會要求金流，金流跟商家合作，就要求商家，這樣一層一層要求下來。

所以，如果你的上層沒要求的話，就不需要做，聽起來也滿合理的。

我問了幾個在業界有接觸過這塊的朋友，一個朋友說先看量，交易量大的話不管用什麼串接方式都要過 PCI 合規，不大的話如果是用跳轉、iframe 那種就不管，但若是有接觸到卡號就要做合規，否則不給接。

另一個也是給出類似的答案，看是跟誰簽約誰就有責任去控管風險，銀行跟藍新簽約，藍新跟商家簽約，因此銀行會要求藍新做好資安，而藍新也理應會要求商家做好資安。雖然有接金流理論上應該就要做 SAQ A，但如果對方沒管的話，也不會自己主動做。

## 聽聽銀行局怎麼說

我透過金管局的[民意信箱](https://fscmail.fsc.gov.tw/POP30/MailBoxHome/Index)問了底下的問題：

> 您好！針對目前網路服務中涉及信用卡資料（例如卡號）的傳輸及儲存，對於是否須遵循 PCI DSS（支付卡產業資料安全標準）規範有所疑問，特此來信詢問。
> 
> 請問：
> 1. 當企業在網站上處理並傳輸信用卡號時（不論交易量大小），是否就必須遵循 PCI DSS 相關安全標準？
> 2. 如果企業未遵循 PCI DSS 規範，會涉及什麼樣的法律責任或金管會可能採取的處分？
> 3. 金管會對此類網路商戶處理持卡人資料，是否有額外要求或建議？
> 4. 如果發現有網站傳輸了信用卡號，但猜測沒有遵循 PCI DSS，可以去哪邊檢舉？

而金管局轉給銀行局，給出的回覆是：

> 依信用卡業務機構管理辦法第53條規定，信用卡業務機構應確保自身及特約商店因持卡人使用信用卡而知悉關於持卡人之一切資料，除其他法律或主管機關另有規定者外，應保守秘密。
> 
> 故信用卡收單機構於簽立網路特約商店，將會採取相關資訊安全管理措施，以要求特約商店提供刷卡服務時之交易資訊安全符合相關規範。故特約商店如有未遵循PCIDSS規範之情事，事涉收單機構對特約商店之管理，建議您可向收單機構反映或告知本局該商店名稱及統一編號，俾由本局轉請案關收單機構查處

PCI DSS 只是個規範而已，並沒有法律效力，但我倒是不知道原來台灣還有個信用卡業務機構管理辦法，這個就有法律效力了。

不過藍新應該不屬於信用卡收單機構，他們背後合作的銀行才是？如果是這樣的話，看起來從金流到商家這段，似乎也沒這麼明確的規範。

## 聽聽接收卡號的公司怎麼說

我隨意找了幾個能想到的服務，去看看他們在刷卡時走的是不是幕後授權，找到了三個案例，並且各自寫信問了他們兩個問題：

1. 貴公司合作的金流服務商，是否有要貴公司做 PCI DSS 合規？
2. 貴公司自己是否有做過 PCI DSS 相關的合規？有的話是做了哪一個類別的合規？

由於這些接入幕後授權但沒有做 SAQ D 的公司一定很多，我只是剛好找到這三間，再加上我覺得最主要的責任不在他們，因此不會寫公司名稱。你也可以試試看隨便找幾個網站去跑一下刷卡流程，說不定也會發現幾個。

### 公司 A

客服回答他們公司不會存卡號，而且使用的是政府認證的第三方金流平台藍新金流。

我就再寫信去問說我問的不是藍新，我是問你們有沒有做過 PCI DSS 合規，他們回說：「由於金流是由藍新處理，因此相關的合規認證是由藍新金流方執行」

跟我猜的一樣，自己是沒做的。

### 公司 B

一開始回說他們採用 HTTPS/TLS 來加密資料，保護傳輸安全性，接著我一樣又 follow-up 問說他們有沒有做 PCI DSS。

他們回說平台沒有存卡號，目前交易流程是根據第三方金流的規定接入的。

看起來也是沒做，但也能理解，因為不知道要做。

### 公司 C

寫信後的罐頭回覆說通常 3 天內會有回覆，目前過了 6 個工作日之後仍然沒有回應。

## 聽聽藍新怎麼說

我也寫信給了藍新，跟他說我在幕後授權的申請表上看到資安認證那一段，問說這個門檻會是多少？如果單量很少，在申請幕後授權的 API 時會需要執行資安認證嗎？

他們給的回覆是：

> 因幕後授權機制代表消費者付款時不會看到藍新金流相關字樣，但交易時候銀行端(包含發卡組織)、我司亦仍會進行交易的控管，交易單量如很少基本上是不需要進行資安認證，但須請貴司留意處理消費者資料的部分以減少風險，謝謝

我又再追問了，那大概交易量到什麼程度會被要求資安認證，他們的回覆是：

> 此部分需視發卡組織端這邊機制而定，建議如當下遇到該狀況或幕後授權有遇到異常可將當下狀況截圖下來，以利後續判斷，謝謝

看起來可能是要主動被卡組織擋下來才需要？

總之呢，就跟表單上寫的一樣，申請幕後授權時是不需要進行資安認證的。也就是因為如此，才有這麼多的網站會在自己家的 server 收卡號。會不會我的卡號已經出現在一堆 server log 裡面？或者是直接明文被存到資料庫？我不知道。

## 理想的世界

在理想世界中，無論一個網站是用什麼方式接入金流，都需要主動遵守 PCI DSS 的規範，至少填寫一下 SAQ。

那為什麼我都已經用跳轉或是 iframe 了，卻還是要做 SAQ 呢？我完全沒碰到卡號耶！

這也是我原本的疑惑之一，而前面貼的 adyen 文件幫我解答了，有明確寫說風險在哪裡。對於這些沒碰到卡號的商家而言，還是有兩個風險：

1. 你怎麼知道你串接的金流服務是可以相信的？
2. 你的網站被入侵之後，駭客可以把 iframe 換成假的表單，也可以把跳轉的目的地改成釣魚網站

但確實因為沒碰到卡號等資訊，所以就算要寫問卷，裡面的題目也很少。

如果不是用跳轉或 iframe，而是自己系統有收卡號的話，代表你的系統有經手到敏感資料了，因此標準會嚴格許多。SAQ A 的問卷只有 20 幾題，而 SAQ D 的問卷有 200 多題，足足是十倍之多。

在這個理想世界中，要求會層層傳遞，卡組織要求收單行，收單行要求金流服務提供商，而他們再要求商家。如果商家沒辦法符合這個嚴格的標準，就不應該開給他幕後授權的 API，而是只能讓他用跳轉或 iframe 的方式接入。

## 現實的世界

現實世界中，是否要求對方合規，完全取決於跟你合作的對象。

舉例來說，卡組織一定會要求銀行要符合規範，而當商家或是金流商要跟銀行直接合作的時候，銀行也會要求這些單位需要符合規範。

而這個鏈路的最底層是金流商跟很多小的商家，大多數的小商家都是接入 iframe 與跳轉等完全不碰到卡號的方式，而據我所知，金流商也不會特別要求他們一定要做 SAQ A 問卷。

這我是可以接受的，畢竟不會碰到卡號的話，風險確實沒這麼大，而且會去接金流而不是接銀行，就是因為規模不夠大，沒資源去做這件事情，再者商家數量很多，金流商也沒心力一個一個管。

但是！如果金流商開放了所謂幕後授權的 API，能夠讓商家直接傳遞信用卡資訊來支付的話，代表商家那邊一定得先拿到卡號，才能傳給金流商。那既然商家拿得到卡號，對資安的要求就應該要更嚴格。

這點如果沒有做到，我覺得是不合理的。

## 結論：這麼輕易開放幕後授權，沒問題嗎？

資安跟方便往往是不可兼容的，越安全就越不方便。在「我要讓更多商家的結帳體驗做得更好，所以輕易開放幕後授權」與「開放幕後授權代表商家會拿到卡號，要先把資安做好」之間，有些金流服務提供商選擇了後者。

前面我已經貼過參考資料了，國外大間的 Stripe 跟 adyen，都寫說要走 API only 形式的話，需要提供 SAQ D 相關文件。國內的綠界也有說要提供 PCI DSS 合規文件，才能開通幕後授權。

但是也有幾間如藍新或 PAYUNi，並不需要任何資安認證，就可以申請並且開通幕後授權，他們在方便性與資安之間，選擇了前者。

那最後犧牲的就是我們這些消費者了。

我認為這是不合理的，而且這是金流服務商的責任。若是今天商家用的是跳轉，最後付款是在藍新，那我完全沒問題。但問題是現在我的卡號進到了這些，有可能甚至不知道什麼是 PCI DSS 的商家的系統裡面，誰知道他們有沒有紀錄我的卡號？誰知道他們的系統是否安全？

就算他們真的沒有存卡號，他們又該怎麼證明？身為消費者，我又能怎麼評估呢？不管最後刷卡需不需要過 3D 驗證，光是卡號、過期日跟 CVV 流到一個不被信任的系統中，就已經構成一個資安問題了。

一定有許多根本不知道 PCI DSS 是什麼的商家卻接了幕後授權，讓卡號進到自己系統裡，但我並不覺得主要的責任在於他們。責任絕對是在金流商那邊，是金流商應該要求這些商家提供合規證明，才開放幕後授權給他們，但現在顯然不是如此。

話又說回來，為什麼這麼多商家需要幕後授權？我猜部分原因是，藍新沒有提供 iframe 的串接方式，所以如果不接 iframe 就只能跳轉，有些商家就覺得體驗不好，因此才想自己接入。

所以只要藍新提供 iframe，就解決體驗的問題了，理論上應該就可以收緊幕後授權，不要這麼輕易開出去。但為什麼沒有 iframe 呢？我沒接觸過，我也不知道，因此我也寫了封信去問有沒有預計開發 iframe 的功能，得到的回應是會再轉達相關單位評估。

總之呢，以上就是我無意間開始研究起 PCI DSS 合規的故事，中間學到不少有趣又實用的知識。但不管怎麼說，在支付與合規這塊我就是個外行人，只能參考這些提供給外部的資料，並沒有實際在工作上接觸過類似系統，因此只能問問其他朋友業內的狀況。

也有可能我上面提到的那些金流，雖然寫得好看說一定要合規，其實背後沒做到也會開放。若真的是這樣，歡迎留言或來信，我也會一起質疑他們。

## 2025-07-24 更新

這篇文章寫完之後我寫信去金管會的民意信箱反映了，在今天收到回覆，說他們已經督促藍新要求底下商家應該要合規才能接收信用卡號，否則要換個串接方式。

而私底下也聽說確實金管會銀行局有發文要求銀行去查查，而藍新那邊也有開始動作。

總之，因為這篇文章以及我寫去金管會的信，讓這整件事情有了一些進展，感謝金管會的協助。



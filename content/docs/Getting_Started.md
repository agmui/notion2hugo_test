---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635YOE265%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAybup0DVTlcCMz7j4EgY0CLzJP02QUvxpE5ilnY15iFAiEAumqk4d6Ochx%2FMdCsPU4zCnnMuXpvsS60arGGNCV%2Fma0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCx%2FYxVrSk%2B10is9RCrcA4GLxd5nszBCEmUQRDSzIRCa%2FoVFiLUenjLL%2BWDNtQ6kATkUMnhfNvzgoRmRnl8oXyPo%2FFaUjHmnVih%2FQP0%2FqouHf7gwTD%2FY%2Bar5e98Y4295BJegFaj36bBnrInUxvK4J2C1qCw29k78l2mR8KJT5h1g8u6XAn42KiRCx1VMTjk%2Fa%2Bn3xJJnep5sERlCsZOTffy3tkAKqek0trwHYr3qLb%2FICUhjknmKNSnJYiHdde%2FAfAGt5uIcc1QRkLLJxvo5kM%2FKQlLoLfAqi%2Fd3gd7VhvYxSTPtZmDHwK3nHipUd9Hor24RE9iy22UJa7Ix4tH2FyLGmPKMV8QfDBP6rCOg91dMaiS4s43xW56ZAq618W4bIJKFokzFhzynBpAbsmaWOsFivgwImIUepvi2MVpDwtM%2FpWmzFeL8Ujb%2BhXsZgs%2B%2BYj0faU9WA6Jb1H5sTwYOhAd0Zp02gUPDwaTJ9ErmJeSLTL0BJc%2BQfTn9Idsn6CKVk3rM0M9O41W9h0B2g4FKsxpnGcsRYcukhjaFAdgsYjwuCXuRrgy4dVC6%2BQjJlGuZkqOySvpn30QKoAyZ7Vta1sZPSvG%2F4IAkqldYo1swE%2FbVGpUoeMI5Vgm5RwWUCRPhM54QLVcSyB26XDOCMJDnpcIGOqUBaa5MGSKIDx2NUFHcDRxU91s3%2BT6y0UPBEKn09zcR4o0YICB9LIjaUEvNjEtx1oISY%2FuFHxy31HzIhIY5t%2BDbbJ4qkOtCfd0To2ePl9656Mx7zdQ6klFGkeg%2BU2oHAuBWeM4aWAAsKaplGIbQiq3Rm%2BfHOy3CBRXOk2VQ5mCXlqKRvokUXBBAnBVEcFaknwX199mUUzbiUEToc7S5tjsuPedakTjD&X-Amz-Signature=c749635b0964fe90ab7e7f5190c1bdb54cb4ca835edb1042fe4d756a52e74184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635YOE265%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAybup0DVTlcCMz7j4EgY0CLzJP02QUvxpE5ilnY15iFAiEAumqk4d6Ochx%2FMdCsPU4zCnnMuXpvsS60arGGNCV%2Fma0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCx%2FYxVrSk%2B10is9RCrcA4GLxd5nszBCEmUQRDSzIRCa%2FoVFiLUenjLL%2BWDNtQ6kATkUMnhfNvzgoRmRnl8oXyPo%2FFaUjHmnVih%2FQP0%2FqouHf7gwTD%2FY%2Bar5e98Y4295BJegFaj36bBnrInUxvK4J2C1qCw29k78l2mR8KJT5h1g8u6XAn42KiRCx1VMTjk%2Fa%2Bn3xJJnep5sERlCsZOTffy3tkAKqek0trwHYr3qLb%2FICUhjknmKNSnJYiHdde%2FAfAGt5uIcc1QRkLLJxvo5kM%2FKQlLoLfAqi%2Fd3gd7VhvYxSTPtZmDHwK3nHipUd9Hor24RE9iy22UJa7Ix4tH2FyLGmPKMV8QfDBP6rCOg91dMaiS4s43xW56ZAq618W4bIJKFokzFhzynBpAbsmaWOsFivgwImIUepvi2MVpDwtM%2FpWmzFeL8Ujb%2BhXsZgs%2B%2BYj0faU9WA6Jb1H5sTwYOhAd0Zp02gUPDwaTJ9ErmJeSLTL0BJc%2BQfTn9Idsn6CKVk3rM0M9O41W9h0B2g4FKsxpnGcsRYcukhjaFAdgsYjwuCXuRrgy4dVC6%2BQjJlGuZkqOySvpn30QKoAyZ7Vta1sZPSvG%2F4IAkqldYo1swE%2FbVGpUoeMI5Vgm5RwWUCRPhM54QLVcSyB26XDOCMJDnpcIGOqUBaa5MGSKIDx2NUFHcDRxU91s3%2BT6y0UPBEKn09zcR4o0YICB9LIjaUEvNjEtx1oISY%2FuFHxy31HzIhIY5t%2BDbbJ4qkOtCfd0To2ePl9656Mx7zdQ6klFGkeg%2BU2oHAuBWeM4aWAAsKaplGIbQiq3Rm%2BfHOy3CBRXOk2VQ5mCXlqKRvokUXBBAnBVEcFaknwX199mUUzbiUEToc7S5tjsuPedakTjD&X-Amz-Signature=99161e51bc670edc0eb8cb9f3f593e46ba89f005fbd392c3aa604d029ca078ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635YOE265%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAybup0DVTlcCMz7j4EgY0CLzJP02QUvxpE5ilnY15iFAiEAumqk4d6Ochx%2FMdCsPU4zCnnMuXpvsS60arGGNCV%2Fma0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCx%2FYxVrSk%2B10is9RCrcA4GLxd5nszBCEmUQRDSzIRCa%2FoVFiLUenjLL%2BWDNtQ6kATkUMnhfNvzgoRmRnl8oXyPo%2FFaUjHmnVih%2FQP0%2FqouHf7gwTD%2FY%2Bar5e98Y4295BJegFaj36bBnrInUxvK4J2C1qCw29k78l2mR8KJT5h1g8u6XAn42KiRCx1VMTjk%2Fa%2Bn3xJJnep5sERlCsZOTffy3tkAKqek0trwHYr3qLb%2FICUhjknmKNSnJYiHdde%2FAfAGt5uIcc1QRkLLJxvo5kM%2FKQlLoLfAqi%2Fd3gd7VhvYxSTPtZmDHwK3nHipUd9Hor24RE9iy22UJa7Ix4tH2FyLGmPKMV8QfDBP6rCOg91dMaiS4s43xW56ZAq618W4bIJKFokzFhzynBpAbsmaWOsFivgwImIUepvi2MVpDwtM%2FpWmzFeL8Ujb%2BhXsZgs%2B%2BYj0faU9WA6Jb1H5sTwYOhAd0Zp02gUPDwaTJ9ErmJeSLTL0BJc%2BQfTn9Idsn6CKVk3rM0M9O41W9h0B2g4FKsxpnGcsRYcukhjaFAdgsYjwuCXuRrgy4dVC6%2BQjJlGuZkqOySvpn30QKoAyZ7Vta1sZPSvG%2F4IAkqldYo1swE%2FbVGpUoeMI5Vgm5RwWUCRPhM54QLVcSyB26XDOCMJDnpcIGOqUBaa5MGSKIDx2NUFHcDRxU91s3%2BT6y0UPBEKn09zcR4o0YICB9LIjaUEvNjEtx1oISY%2FuFHxy31HzIhIY5t%2BDbbJ4qkOtCfd0To2ePl9656Mx7zdQ6klFGkeg%2BU2oHAuBWeM4aWAAsKaplGIbQiq3Rm%2BfHOy3CBRXOk2VQ5mCXlqKRvokUXBBAnBVEcFaknwX199mUUzbiUEToc7S5tjsuPedakTjD&X-Amz-Signature=f1ade35d7da60dad409d52d33ca4a0f4e9c4aebad9e2ef062c7c9fd5889261e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R44NAWP%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0Znx0eD3u0ado4dH4BBlwaOIVMW1ACcTFD2om18Q7lgIgAcOPxhEbDk3R4XGQnt81ZZAehze976x3XrDyOZ04WpsqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCr1p3hMoZr9rc6DSyrcA2l15F8bM6YKj1AUIv2SinSuZLARkk%2FDT7srTsRXXykDVTDT8f5xGvZgpDqveSNok5i2ZGJWbEsxebtjRuukLRlgQzy5qFJCqSxi2%2B5OYviXmsfB0x8c6sUyEdchlub2o22DA7oEPcbp%2BQ8dMGm%2FdDuPREQnc8xxDYOPAhqp7cCFzmqXJ9mvet3Qpi%2Bzgqxmo6Yyj7aQrB05QraFMl3S9VRpNyWHsdtwQt5y%2FxLFU9PTJ82Z%2B%2Bu%2BJffN7RH3yZdHeK1JcQfImCHbi2qSXm87oC3uMpe9hsdSim3CNtLFpK1Ldk5dSr6dFY7buwzkL8W2%2BsSKWyxL2PXAlwBOQfPiNxqDlCobz%2BQQOeic6B76dmHAIfDL8Vx6%2FCvxSuXJVQ5zEGIRDrnx1U0RNcV8YxMOLX0ievjBwGjr2vOpniRYsAWpN2zYqjw4yrAv3lVUTsmsbANk2f4vLVOxOlJyseRp0g0TGWABlF93K33NtHNnEYWQOPfkbxVVMnIi7cFqBVWXCCKhGQVHIk9T1ASYMCDCVoNZkEHq16DecJQFjBoz646ybR2o%2B9ETb0z5e7xUz%2FHIOqxSt1apm5FH%2FjiXaF6YSy713eRHhPyzSpWiyQ2NTC%2BkyDz9eQ7%2FwZ5jWro1MLrlpcIGOqUBGakXiTf18orK79kLARtNOkj2T%2BfeKJimqdv6jp4VehQRiqdaDlP7M7DmCUytfg%2F9%2BM7qwq26lvOnwBWDGfVY1b0X1wMHoFm%2B5stWO%2Bf6FCEohdBzelNHJwfMRCYotl9WoIDjQId%2BEnWuWjznIBoYhQ6eCgDoOJGncjBKwwtUKXaN1mvJO9pt2zIGURyL%2FoWao1IVDf9MFJALT%2FwvSevex6vnxb7N&X-Amz-Signature=c9764ae7f2f92e551d18d100e364c994404c6e45b47536b580ab72c588934960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKNBDKO%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmrewnzXI8pKx6OzW648hx%2Bh19no4ErCCn3hubWWUyAwIgYUkxNRdKHuILcUGDjbUZD4e30B9wsbZ1V9K%2B9j2KOW4qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXTNDjTj2WpQKAN2ircA1Z85AaH8gZA6%2FiKvWvEXOoBnuTNrevB4Za%2FnT%2BAzquiIrCAPXUDPK%2Bg4tnw3acoVR45VT940InGXHpqGRS8so59IdN7O7iqTOeczn4X9NAA3ptUgEoW0kaVtpWKtsflUFxbMCeWqFBNiKxvffBxY8wbfLQcbBWNnZC0yv00gBv%2BLe7W9fHJtT%2BrYQ1fo4iInl8kglCn%2BqSXpySm9OklPQbwzzfkrWxtyPVKZrYLG6F0wK37wo9L07oR5mwf4N2aP96EUHyzrEojwksd6Q2IzqXX7QW6U%2B6FCIBKXGUIc53Pw5lajLIXICfCyKWf%2BRgwm9Dkv394LKPBwgxBMjOgkr1IIx00jSNeXl2NuJ1FJZykx0lmiFCivPjYOauVFMYXtxdK3BMng2bk9g2aPfXpzgb7dOU3sKwb5jLPCSzjSo5rZwwWfKx07uh%2BPkWiXa2cNkQ4Rcn7kloZFvyf1%2FDtBQJzVyn4XEqHMoAzK%2B5uQBM0UmDUWmx8M%2BeVewx54M%2F3ta6T%2BVg8OUY%2BsQxk4q7BQmM8DhWmTwNj8sHTNARrqLv1E3BjTQ7xUrdR2AQXMVrXVNyEfrDg06BKS1iMH9AElS2bUZ4KduEOAoXehiQf3XzOrvUSIXimX0vQVLOAMKTmpcIGOqUBkh1QWB1Cj%2FQenHO30qr0yqv8fcZ5zCLWqgC1BQGDWY1iVWKOzwXd1tMYc7lwK1mbAV0jfmuCKr%2F%2BEvp%2FK%2FxLJQKKFdUKhQc3K9ZslAfx06OiJgSkFiekgimSjj0Cd4HNVwmvYxeVxgi%2FfTLs7N83k4n0LncWnb%2BDSR6QaT7Is%2FiX8muPjWpvOZ16l3M6v3Wk%2FjFJWBAhS6SryF%2BhlIsA8oJ%2FVEF2&X-Amz-Signature=8a91b3b404fec0e8a0354899c67ace73b8f22946d9b968174059dac4502587a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635YOE265%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAybup0DVTlcCMz7j4EgY0CLzJP02QUvxpE5ilnY15iFAiEAumqk4d6Ochx%2FMdCsPU4zCnnMuXpvsS60arGGNCV%2Fma0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCx%2FYxVrSk%2B10is9RCrcA4GLxd5nszBCEmUQRDSzIRCa%2FoVFiLUenjLL%2BWDNtQ6kATkUMnhfNvzgoRmRnl8oXyPo%2FFaUjHmnVih%2FQP0%2FqouHf7gwTD%2FY%2Bar5e98Y4295BJegFaj36bBnrInUxvK4J2C1qCw29k78l2mR8KJT5h1g8u6XAn42KiRCx1VMTjk%2Fa%2Bn3xJJnep5sERlCsZOTffy3tkAKqek0trwHYr3qLb%2FICUhjknmKNSnJYiHdde%2FAfAGt5uIcc1QRkLLJxvo5kM%2FKQlLoLfAqi%2Fd3gd7VhvYxSTPtZmDHwK3nHipUd9Hor24RE9iy22UJa7Ix4tH2FyLGmPKMV8QfDBP6rCOg91dMaiS4s43xW56ZAq618W4bIJKFokzFhzynBpAbsmaWOsFivgwImIUepvi2MVpDwtM%2FpWmzFeL8Ujb%2BhXsZgs%2B%2BYj0faU9WA6Jb1H5sTwYOhAd0Zp02gUPDwaTJ9ErmJeSLTL0BJc%2BQfTn9Idsn6CKVk3rM0M9O41W9h0B2g4FKsxpnGcsRYcukhjaFAdgsYjwuCXuRrgy4dVC6%2BQjJlGuZkqOySvpn30QKoAyZ7Vta1sZPSvG%2F4IAkqldYo1swE%2FbVGpUoeMI5Vgm5RwWUCRPhM54QLVcSyB26XDOCMJDnpcIGOqUBaa5MGSKIDx2NUFHcDRxU91s3%2BT6y0UPBEKn09zcR4o0YICB9LIjaUEvNjEtx1oISY%2FuFHxy31HzIhIY5t%2BDbbJ4qkOtCfd0To2ePl9656Mx7zdQ6klFGkeg%2BU2oHAuBWeM4aWAAsKaplGIbQiq3Rm%2BfHOy3CBRXOk2VQ5mCXlqKRvokUXBBAnBVEcFaknwX199mUUzbiUEToc7S5tjsuPedakTjD&X-Amz-Signature=1e35505e7e20651256effce80cbf98b6ec6fcd05a0afe6d628ce614778302303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

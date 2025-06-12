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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBBLEIZY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBWtYd%2Fbrn4%2BL4VcGLoW7Kn66GFDDcXRx%2BWHZVR7r70HAiEA9McEWCvHP1VeJDtlH3oCI6YiZcaXT14ykLNvTY9iZXcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1fOY19DrW8Yn%2FcyyrcA7juyPIpOWc6oJIEsb0Rs5nSvEFOXUsM7J1z24H84MUK8brLuOxLvjSwXPLeA4hQZlpqW1FRCX1h9n%2FcvKsZ1DvkBub4Zvw6L%2BVxEXvw0MGi%2FjXMteXWYJuR9Xu4Nret31iyt0RlCcofOZRfB8AphPEQ69UpzfObTCJWJia%2BaYjaqRJbCTRyugI1mDA2swM%2FcHqvwovknAbFcWEihfvKrqzuzSJID4RWp20F4BKhedNz0P5Y3cNjs2dPa4j9ncWdCx5HE8zVLRJAFfYu%2FPdy2SgCaPp3m9bQZBUYyQ%2Fi6L%2BpmClcssWz0G7%2FG7iYaOyuQfBPloHn5cLyQcRGOyQSMQ%2Bs7MWgPkb59oHfKjZnYJMcvdxk1MBzFg2RWZPnsrv3XWYaZ3Grpb09dsAOKTy7IhzjscFdF1EhxXBRc%2FUERlo1lzna978V%2Fjz78x0zdXO1Fzgb6OqIE9Bxd%2FeA7R0C3NJe3iWe02%2BOmNNV4eJYU0b7HEsSYw238dEQJCDnQ44oKPvnvYhPB3nCQMIAjn2gc11zFTEMSZoSU6ktxMLK0172kWCW1qXM2BzvmI%2FF3HUFACmgEOQQ5SOvnRrxJ6XDVrI1xTVgDhFRoMR7YwIdMVP5Q7Of7Rr4Aws6O1o%2FMNefq8IGOqUBL2wuPgt9162lqbixioP61Wj%2F%2F78SNJ8mHGSjg5yJMn%2Bv39GxXEjaxJfQjyp%2BomeMgm7mGH61i6fu9WIA20lUBL5RQEYPVc7R7%2BoaaD8oqk9DTZCN3k2xMMU3JEwk%2BOySxdkahbz422HvK5R%2FXa391A5SRcrrV%2FKI9Ktu31KVCWAlShNXC%2FI%2ByzNV61EOPdWHeWNNltJHHV4qRKluDWUk4spfOA0Q&X-Amz-Signature=48883bef32d0390eca091c315660f2c8876d7784af6797019689213a6a909b28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBBLEIZY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBWtYd%2Fbrn4%2BL4VcGLoW7Kn66GFDDcXRx%2BWHZVR7r70HAiEA9McEWCvHP1VeJDtlH3oCI6YiZcaXT14ykLNvTY9iZXcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1fOY19DrW8Yn%2FcyyrcA7juyPIpOWc6oJIEsb0Rs5nSvEFOXUsM7J1z24H84MUK8brLuOxLvjSwXPLeA4hQZlpqW1FRCX1h9n%2FcvKsZ1DvkBub4Zvw6L%2BVxEXvw0MGi%2FjXMteXWYJuR9Xu4Nret31iyt0RlCcofOZRfB8AphPEQ69UpzfObTCJWJia%2BaYjaqRJbCTRyugI1mDA2swM%2FcHqvwovknAbFcWEihfvKrqzuzSJID4RWp20F4BKhedNz0P5Y3cNjs2dPa4j9ncWdCx5HE8zVLRJAFfYu%2FPdy2SgCaPp3m9bQZBUYyQ%2Fi6L%2BpmClcssWz0G7%2FG7iYaOyuQfBPloHn5cLyQcRGOyQSMQ%2Bs7MWgPkb59oHfKjZnYJMcvdxk1MBzFg2RWZPnsrv3XWYaZ3Grpb09dsAOKTy7IhzjscFdF1EhxXBRc%2FUERlo1lzna978V%2Fjz78x0zdXO1Fzgb6OqIE9Bxd%2FeA7R0C3NJe3iWe02%2BOmNNV4eJYU0b7HEsSYw238dEQJCDnQ44oKPvnvYhPB3nCQMIAjn2gc11zFTEMSZoSU6ktxMLK0172kWCW1qXM2BzvmI%2FF3HUFACmgEOQQ5SOvnRrxJ6XDVrI1xTVgDhFRoMR7YwIdMVP5Q7Of7Rr4Aws6O1o%2FMNefq8IGOqUBL2wuPgt9162lqbixioP61Wj%2F%2F78SNJ8mHGSjg5yJMn%2Bv39GxXEjaxJfQjyp%2BomeMgm7mGH61i6fu9WIA20lUBL5RQEYPVc7R7%2BoaaD8oqk9DTZCN3k2xMMU3JEwk%2BOySxdkahbz422HvK5R%2FXa391A5SRcrrV%2FKI9Ktu31KVCWAlShNXC%2FI%2ByzNV61EOPdWHeWNNltJHHV4qRKluDWUk4spfOA0Q&X-Amz-Signature=10966ca1994e25e99cbf532ac318a22a935b58367281f5cb837a173c1f0fad22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBBLEIZY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBWtYd%2Fbrn4%2BL4VcGLoW7Kn66GFDDcXRx%2BWHZVR7r70HAiEA9McEWCvHP1VeJDtlH3oCI6YiZcaXT14ykLNvTY9iZXcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1fOY19DrW8Yn%2FcyyrcA7juyPIpOWc6oJIEsb0Rs5nSvEFOXUsM7J1z24H84MUK8brLuOxLvjSwXPLeA4hQZlpqW1FRCX1h9n%2FcvKsZ1DvkBub4Zvw6L%2BVxEXvw0MGi%2FjXMteXWYJuR9Xu4Nret31iyt0RlCcofOZRfB8AphPEQ69UpzfObTCJWJia%2BaYjaqRJbCTRyugI1mDA2swM%2FcHqvwovknAbFcWEihfvKrqzuzSJID4RWp20F4BKhedNz0P5Y3cNjs2dPa4j9ncWdCx5HE8zVLRJAFfYu%2FPdy2SgCaPp3m9bQZBUYyQ%2Fi6L%2BpmClcssWz0G7%2FG7iYaOyuQfBPloHn5cLyQcRGOyQSMQ%2Bs7MWgPkb59oHfKjZnYJMcvdxk1MBzFg2RWZPnsrv3XWYaZ3Grpb09dsAOKTy7IhzjscFdF1EhxXBRc%2FUERlo1lzna978V%2Fjz78x0zdXO1Fzgb6OqIE9Bxd%2FeA7R0C3NJe3iWe02%2BOmNNV4eJYU0b7HEsSYw238dEQJCDnQ44oKPvnvYhPB3nCQMIAjn2gc11zFTEMSZoSU6ktxMLK0172kWCW1qXM2BzvmI%2FF3HUFACmgEOQQ5SOvnRrxJ6XDVrI1xTVgDhFRoMR7YwIdMVP5Q7Of7Rr4Aws6O1o%2FMNefq8IGOqUBL2wuPgt9162lqbixioP61Wj%2F%2F78SNJ8mHGSjg5yJMn%2Bv39GxXEjaxJfQjyp%2BomeMgm7mGH61i6fu9WIA20lUBL5RQEYPVc7R7%2BoaaD8oqk9DTZCN3k2xMMU3JEwk%2BOySxdkahbz422HvK5R%2FXa391A5SRcrrV%2FKI9Ktu31KVCWAlShNXC%2FI%2ByzNV61EOPdWHeWNNltJHHV4qRKluDWUk4spfOA0Q&X-Amz-Signature=78da5bce05e43ed2fb255a39df7173dab873f721d7fb35323b3a472edc450931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466344MHMRK%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIEHI%2BHCKZe4fon9MzmX%2BYCCK0oxIq9tghVwWGvbK%2FWqJAiEAh9d4ZkIpehCaFFvZOOKgoSvwlhueDrR071dYsuEPhg8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK5FdgTXVd5UYWEPyrcAxpfHk2WFvnLbf%2FJ2mJS%2BgAfDMQz30nOD76M6xTBx42G%2BzvyeCMuGyESKpVwq6YP%2FJ3HYx8il6I%2Bf%2BLBLmLFlZBvprsgPunykoFRhPtx6glnxcVY2MpBe5SM4bE%2FO0HLqXIUQ3r7PEZdG9e9DD5qYAnrt0F5yDuO4ewiVLjWIavzTjgmiSUTIeAP0TyrGEW2SGd%2FvgYA2MkPNvwaALqmfghoRW9JMdj3z45GfzF3m96u1kovlD0y7N2eNgzabX1DU6v8kovAObZwD4%2FKuLWGGpFgoWXrQNxlC1G44B5hYdw1a9eyDfhqtlSmVb0Se2uZdDFuPWxIQQZmfOXZLk9uLdTuz8F7hNLAizFxk%2B92iaDMW6idT4dM9%2FezSMtEt91WDOssxzB6BMOadk0y9eizOrVf5SF3OirB3SiZR67NHLCA9n2ElLcawxSwEWqIbWx4GmWHbId7BMPrJj9fD3jFLb6mRtFS0WSd3wsjFBdnTUrhoBNKIlL0zDGCZ02yNZQmw2cw3HEdFa5avImZIRw4lWmKaLAF%2FHk3Dkzq7pmGhikZ2gY794BxB7mlrqZyU3fco%2Bl4XplpNa%2Ben6Bn3ozQm3SE6F9NwM%2BhQnj5oB%2FoHi2eRhu%2BhzUMxXn%2FYSvcMPXYqsIGOqUBW33uj2xpykRX3OXlYkSClEDl1kgHhbAuZ%2FsDFGGAm3vCaa%2Bq9wcDki%2BnvuoJ7X26%2FKCYtn70N9uhiiF5YFhdmCgyzBy8Zh%2F5%2F%2BLQNwcQ2QotY0HBJIJ%2Bi5xSa7TNbW04ejkoesjZS30u9QYhRfHGp0yvDKQX7vHNjG%2FunHG91ptVRzeZNfnnx%2B6jvPrguEKE1%2Bm3E3uZfcfmQFXAtHvYjC5fdDrd&X-Amz-Signature=1fc185806a6bf2e2628e2dd651fc695cbbc673a65f24801ab15cb45c236aa3bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXP6J2TW%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC9Wo%2BIugyqxGrHhLIrLzCICHSL%2FAKBtTmH1sIF191VIQIhAP32PzL8FcuoCO09W%2B3a%2F52No%2FwYCGce2EnPAakY3OnuKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuaB6Q0Lzcid%2B4ajIq3AMVNwJT6n9i4H1%2B5NS8AxnjjCxS30MsPMSV6rx8IsUmifcf2ar00wA3j5%2BGr8pXkJqhdiHzbJnT6l3KBfIv1qDBLqoArEpIapuBKd7kobQye7p3j4TphJ02bwjHUZ1b4zxB0KBFc6%2F36fYadwVT70HQXuLctqDi8fh3pf%2BaKEHjCCD6c%2BCvpHLnRXP3KEy8FqQM03ecXwO%2BsMuUyUSwnKIeMMkOqrSJsJtpfkjHWVfLyuCHhVoAno6AXKOETQwtNdCvg0jDGFsMMYIcYGJOJRkg3aWStbtrsIFN1DoTCc76R8cHQOgX7Ika9oCSC0eZOYKVQ6lF%2BI93744fpoEmKwG4jZj%2BRnhRg6DPRcBbu3GW%2FVuPSLiwUVm%2BJdKSXGZ9SMLmvy7p%2B1d1nSy6r1HjbNWZkI3uxLTg8lu1EFwvdvV0XuZ1%2F1cbB1cjoifNmfDYA9Ds4zzpwMKV21cmhspWGD7PePDiFUItu3%2F1pala23%2BEYNEFAruFOjykab9pAc3t5ewAF8nKaFAYb74aaqqA4PwgW0cX7c2tJ28hOWu4jZu89AJHa8iYjQrBxb6rDJag3H%2FRnfOB0khGEIAW2%2Bqtr9taJ2WnZMp8lVLaHx9VNuSE%2BEeAVKSKYYSDhvCLiTCCrarCBjqkAYA64gvJPD4mvPupcqADp33NF6Ohw0KOj2OeJxgJKYZtK5G7i8HT2H3rudWSI83KBL%2FXh9UDtpagjMGodcSUktIDlol%2Busn6efLE4Awds7ekE%2Bw6utblxf3YfbECv5gzWA9W3dS%2FEgm9UI7%2BHEkuYzykVRxVrmbjeSLBqmpHvf%2Bj21HhsGIecuWPsok%2B%2Fkplyo9IOp901ibbPzWV2bKoIMC6Vu%2FJ&X-Amz-Signature=ed9a4f0233197f3a0c873c4668010b36c3d31bb35659142ffa84a99b1042ad70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBBLEIZY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBWtYd%2Fbrn4%2BL4VcGLoW7Kn66GFDDcXRx%2BWHZVR7r70HAiEA9McEWCvHP1VeJDtlH3oCI6YiZcaXT14ykLNvTY9iZXcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1fOY19DrW8Yn%2FcyyrcA7juyPIpOWc6oJIEsb0Rs5nSvEFOXUsM7J1z24H84MUK8brLuOxLvjSwXPLeA4hQZlpqW1FRCX1h9n%2FcvKsZ1DvkBub4Zvw6L%2BVxEXvw0MGi%2FjXMteXWYJuR9Xu4Nret31iyt0RlCcofOZRfB8AphPEQ69UpzfObTCJWJia%2BaYjaqRJbCTRyugI1mDA2swM%2FcHqvwovknAbFcWEihfvKrqzuzSJID4RWp20F4BKhedNz0P5Y3cNjs2dPa4j9ncWdCx5HE8zVLRJAFfYu%2FPdy2SgCaPp3m9bQZBUYyQ%2Fi6L%2BpmClcssWz0G7%2FG7iYaOyuQfBPloHn5cLyQcRGOyQSMQ%2Bs7MWgPkb59oHfKjZnYJMcvdxk1MBzFg2RWZPnsrv3XWYaZ3Grpb09dsAOKTy7IhzjscFdF1EhxXBRc%2FUERlo1lzna978V%2Fjz78x0zdXO1Fzgb6OqIE9Bxd%2FeA7R0C3NJe3iWe02%2BOmNNV4eJYU0b7HEsSYw238dEQJCDnQ44oKPvnvYhPB3nCQMIAjn2gc11zFTEMSZoSU6ktxMLK0172kWCW1qXM2BzvmI%2FF3HUFACmgEOQQ5SOvnRrxJ6XDVrI1xTVgDhFRoMR7YwIdMVP5Q7Of7Rr4Aws6O1o%2FMNefq8IGOqUBL2wuPgt9162lqbixioP61Wj%2F%2F78SNJ8mHGSjg5yJMn%2Bv39GxXEjaxJfQjyp%2BomeMgm7mGH61i6fu9WIA20lUBL5RQEYPVc7R7%2BoaaD8oqk9DTZCN3k2xMMU3JEwk%2BOySxdkahbz422HvK5R%2FXa391A5SRcrrV%2FKI9Ktu31KVCWAlShNXC%2FI%2ByzNV61EOPdWHeWNNltJHHV4qRKluDWUk4spfOA0Q&X-Amz-Signature=e61658cdceed56e5e08af41a071128a2e83db6ff0e330e1668360c082ecfb8f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

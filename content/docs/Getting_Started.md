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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A4SAQWS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKLvZPvKQcgUcaRh5dV2%2FnuWkezmI03xkVm%2FegWfaiigIhAPjiyxzqvL%2BXpe%2B1AWFu8C3ozQ8rAl%2BjDi20WYNDXLtVKv8DCGMQABoMNjM3NDIzMTgzODA1IgwGRBkwpo%2FgagJ23Lgq3ANAE16DnlXIXvfAv85UuofxcddTXlvrz9sdzEgl8Y57e%2B0Be2aax87s6GO4G730NBpbRNNse35DvFgSDnmpytmqqcTnojYFWEO%2FdIiL6KkMYNHV4k7yf6yqyZmmOojiZpEwJBMRnTMSZqWN9FjCems6yAIkRDBO5f%2BOifPJrlTADPIVZB5URl2zBKSKXq5FKH%2F3K06os7AVev5foWFN8DZsfXTUWK7sL%2BqvoT6rCEXObfxUAtXXhxYw1BLdIIPYXDk28OPdXoz1NmKLsJkCDp70Edud%2BqvU0xI5pKF2%2FtpzI5IJnTwZ1l0hoRJ7wlkDGZ8d6wc%2BTte837yqp1yqOBTQ5iAjj8nNh94t1sr2INTPFeSPqNfUo%2BRE6IIdFVFPpdDk4hCNkIl2zOzw7GAVPelv1Wn136yfwd4CoDxUpDsiqBsUBJoc3azJJort1Xtv64RXpbfSSaxH8CqceBwC60FHTWwpUoSE4XyUi0swNUU%2F3NucTBFStwMc%2BlmAPeTfYci4ydj463fREFJbkzC6%2BGLT3fbsw4pKs2oOZ2gwUJJqOawi8SiSYb0pWtjXJZB3Fk3PI2OLaAzTYbZ7t4MmntO2uk6tMS5E0jFeA9a5KXg1mlvMnOfqLYQr%2BiNFGDCiue7ABjqkAbdtE%2FVU2smmuhjfGWUbye9m4XUCnCoaV%2Bhcmw5QV3%2FtVATWIUqbwAEHc1zierAxWcPmebzvULpjIgEJ4p5JQCj1w79lqSiGjCM16%2FGtZ%2B47zXKvxsEbFSvEDx9%2BXaBxfTcp8vCofX78V462hQFwXo7pZTsTrMP1jwWHGiYMIlwsCiqFQrtwh9n54wMsUJ5R9SQEIGSuMHYQ%2Fin4Ue1DtFhoYdQq&X-Amz-Signature=f55eee08670a8ea9ea48b8d9509904a50ba7254a44085ee3e83284a7941fdd04&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A4SAQWS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKLvZPvKQcgUcaRh5dV2%2FnuWkezmI03xkVm%2FegWfaiigIhAPjiyxzqvL%2BXpe%2B1AWFu8C3ozQ8rAl%2BjDi20WYNDXLtVKv8DCGMQABoMNjM3NDIzMTgzODA1IgwGRBkwpo%2FgagJ23Lgq3ANAE16DnlXIXvfAv85UuofxcddTXlvrz9sdzEgl8Y57e%2B0Be2aax87s6GO4G730NBpbRNNse35DvFgSDnmpytmqqcTnojYFWEO%2FdIiL6KkMYNHV4k7yf6yqyZmmOojiZpEwJBMRnTMSZqWN9FjCems6yAIkRDBO5f%2BOifPJrlTADPIVZB5URl2zBKSKXq5FKH%2F3K06os7AVev5foWFN8DZsfXTUWK7sL%2BqvoT6rCEXObfxUAtXXhxYw1BLdIIPYXDk28OPdXoz1NmKLsJkCDp70Edud%2BqvU0xI5pKF2%2FtpzI5IJnTwZ1l0hoRJ7wlkDGZ8d6wc%2BTte837yqp1yqOBTQ5iAjj8nNh94t1sr2INTPFeSPqNfUo%2BRE6IIdFVFPpdDk4hCNkIl2zOzw7GAVPelv1Wn136yfwd4CoDxUpDsiqBsUBJoc3azJJort1Xtv64RXpbfSSaxH8CqceBwC60FHTWwpUoSE4XyUi0swNUU%2F3NucTBFStwMc%2BlmAPeTfYci4ydj463fREFJbkzC6%2BGLT3fbsw4pKs2oOZ2gwUJJqOawi8SiSYb0pWtjXJZB3Fk3PI2OLaAzTYbZ7t4MmntO2uk6tMS5E0jFeA9a5KXg1mlvMnOfqLYQr%2BiNFGDCiue7ABjqkAbdtE%2FVU2smmuhjfGWUbye9m4XUCnCoaV%2Bhcmw5QV3%2FtVATWIUqbwAEHc1zierAxWcPmebzvULpjIgEJ4p5JQCj1w79lqSiGjCM16%2FGtZ%2B47zXKvxsEbFSvEDx9%2BXaBxfTcp8vCofX78V462hQFwXo7pZTsTrMP1jwWHGiYMIlwsCiqFQrtwh9n54wMsUJ5R9SQEIGSuMHYQ%2Fin4Ue1DtFhoYdQq&X-Amz-Signature=a2cb43dcb6d9d7bee2538593d3cb330e472b715c02a0de9575234fef01912b1c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A4SAQWS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKLvZPvKQcgUcaRh5dV2%2FnuWkezmI03xkVm%2FegWfaiigIhAPjiyxzqvL%2BXpe%2B1AWFu8C3ozQ8rAl%2BjDi20WYNDXLtVKv8DCGMQABoMNjM3NDIzMTgzODA1IgwGRBkwpo%2FgagJ23Lgq3ANAE16DnlXIXvfAv85UuofxcddTXlvrz9sdzEgl8Y57e%2B0Be2aax87s6GO4G730NBpbRNNse35DvFgSDnmpytmqqcTnojYFWEO%2FdIiL6KkMYNHV4k7yf6yqyZmmOojiZpEwJBMRnTMSZqWN9FjCems6yAIkRDBO5f%2BOifPJrlTADPIVZB5URl2zBKSKXq5FKH%2F3K06os7AVev5foWFN8DZsfXTUWK7sL%2BqvoT6rCEXObfxUAtXXhxYw1BLdIIPYXDk28OPdXoz1NmKLsJkCDp70Edud%2BqvU0xI5pKF2%2FtpzI5IJnTwZ1l0hoRJ7wlkDGZ8d6wc%2BTte837yqp1yqOBTQ5iAjj8nNh94t1sr2INTPFeSPqNfUo%2BRE6IIdFVFPpdDk4hCNkIl2zOzw7GAVPelv1Wn136yfwd4CoDxUpDsiqBsUBJoc3azJJort1Xtv64RXpbfSSaxH8CqceBwC60FHTWwpUoSE4XyUi0swNUU%2F3NucTBFStwMc%2BlmAPeTfYci4ydj463fREFJbkzC6%2BGLT3fbsw4pKs2oOZ2gwUJJqOawi8SiSYb0pWtjXJZB3Fk3PI2OLaAzTYbZ7t4MmntO2uk6tMS5E0jFeA9a5KXg1mlvMnOfqLYQr%2BiNFGDCiue7ABjqkAbdtE%2FVU2smmuhjfGWUbye9m4XUCnCoaV%2Bhcmw5QV3%2FtVATWIUqbwAEHc1zierAxWcPmebzvULpjIgEJ4p5JQCj1w79lqSiGjCM16%2FGtZ%2B47zXKvxsEbFSvEDx9%2BXaBxfTcp8vCofX78V462hQFwXo7pZTsTrMP1jwWHGiYMIlwsCiqFQrtwh9n54wMsUJ5R9SQEIGSuMHYQ%2Fin4Ue1DtFhoYdQq&X-Amz-Signature=666d1da87b0c8b91889d476932040e737fb705c46bd72270a1977eb97cc5d7a0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M6YUNPI%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFw1F3R3P15y7b1TZ7ywXdioBg%2Fj57vAGU1IP2TORvjgAiEAqgodabe02wSlSeslmiUHzX96VxXIxfWocEyzaanPO78q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHg%2F6rspT5NprBwrcSrcAyVx%2BkMrORjTq0CF2uZBO5HNaVGkArZ%2FIWAZjcZ65j5CSnS1eyCOEwNdxf8g%2F39dGXIECW703%2BMdoqSleWDRLWZ%2FM7EvvkeFZfaPaXledY0UOS671ISqqHijb9p%2BcySypOepbUvFWTVcC8H8tTdPOJhpECA3%2BOnCbeW0%2Bz09u6e0LBsI2VBeLZvBz6s6xmZIcHo2rN1EsoSCtvFcSvbUHo1Ma2YYjStK1sVcvMcYUb8CTbhOyRcpNK8gF7WABn4HqKu8u%2B4pwY0WNSsdXiYyrQu6mUph5IDZDJd9xbqEufnDmX8a4euL%2FZPl9%2BaKFe5FdgX9zEzUEggFWMht1dsan4Ks6IugEum3cYX9rhXofIGmHk3JhbqpwkmYIWKyQmZph6EbSsWshwhec1%2BDorQMb5dPmGFbpKZjArLj%2FAse2LU8Hv9yUL4O%2BRxvcZeuk2WDFt%2FnN0mK2HR5vXTKyIDBL4%2B7g7S6GLqRZwoC%2BsUS3lfKky2ELJx%2B0ckYKRNWBAG17yoaNkS1JydR4slfARuwsDabXOE59ETQRt6HPRFwjAscEGZomDbDFWzty24l%2FTLEiSpBpaP%2FK%2BCavI0cKf3SckdgpRYfF84EJ5JpRNB78Ot5Zt3Otit%2BsWY0tclSMKG57sAGOqUBT%2F5GM%2BuXXXT4sPbOjmirnwW9pI6AyIO3ir4G2Bp700lbPuBSOE5go5%2BbNGPR1sZ9PRrHFeLeXYCqbTfwIHMOSOuWeo1zusnZ4%2F2YwK1yqob3YECcmDx3jXmCczzsHIPywjyZM5%2Fl1U6DzUhfsl0jT6%2BQf0yTfZcqIuhJLy8kJHhWD6%2FZJA%2FcXCuvg6pwqEFJZf5G2JFdhRiXgMlWa6OkvvFNYIlR&X-Amz-Signature=8b154f05af84ee98dc3b05c314b162270549caeb434a35534cbb336e90d6892b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSDGXCJ3%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BEFGR48HGcQNWUUeAhWjudc80unAkOIvzb02YXg8cVAiAoLM0IJZXlEiNAOCTs%2FsWLWCfYA6PEX0ZXS%2FKBvGPKYCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMtRQrU4QDfhG6MC%2ByKtwDymjxRZ%2FFMHeN%2BPjRFE4%2B31ky86zyOnL6kbeGdYNy42d5AB0297qkuWmBTSPPg%2BwvH09v6tbHfAgiXq1remz0%2Fdlu%2Boc0e5P77vhQgqSjilYns%2FhGi5yh0vvXrjdDX7kwrnrSYkw3hL1OchmdRemjGWda4MupSYvIZj6w0pTNDqmmw9yt3BZxYcvNs8Scbpt9U5Lh34TvUddKq3ii0vxt5InUiZ7YeFJZsrcNIH7rSc9OK8W25LUWF9In5ZgvDjtq3Q7JPHxoLkxDl3Yl4hZdeg7Xb8lGtT9Vveb41lgIpcbU%2Fb4lLXiSRrbxKRnHvy323gbskX4FPNK2o4O5FmNngTp88pGida4xi3RY8fowUSJz2XwsSk4zjssAJmUvY75IQimSaApkwg7PWOP8Oco4e3HaGJvVdo6iwvbIP%2B6%2Bqi1x624IHDEbwai6i%2Fzkt8lsuagXm2uj8tLZtfgBPYZQzcpdZqNSXgfNbXIq%2BE78JRulk%2B3AWjgWfGvCRWWmPzzovNQGru1wflSK6lTThQyKACoOQL2%2BXY6qixGfwt8oRtC3egcs2b2YkeBrW%2BmFNF6aVAmDIxDrHFYIJAqOiHKrs1nfghijdtdtFQMxOxpnvuazOXVSBrAzlKUVjBww%2BLjuwAY6pgGsVe7ghUj498EMT2tBWvw5wp4DyAET5Ba%2FFW7%2Bq%2FuSq8A4N%2FeLYnKTYpmaseJxAw%2FUaav9fjLIm%2B4aKw8c5iXIOAJ6XtcbGRKkCCSr8uf3zf6%2BwecXsCfRgMaB3ixNPXcIAwDxAEnsNSOCsGDDqajmqf2%2F9YNvbFAgRrWISVNSnQi6FQwjR%2Bmp4rQnUXzpn%2Bk%2FE5aTmie8fyqHR6YwuSGzNbdKC%2FpF&X-Amz-Signature=08320577db756dbbeab859f2cdfcab96189455399f69053d579f1a5b8a071c8e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A4SAQWS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKLvZPvKQcgUcaRh5dV2%2FnuWkezmI03xkVm%2FegWfaiigIhAPjiyxzqvL%2BXpe%2B1AWFu8C3ozQ8rAl%2BjDi20WYNDXLtVKv8DCGMQABoMNjM3NDIzMTgzODA1IgwGRBkwpo%2FgagJ23Lgq3ANAE16DnlXIXvfAv85UuofxcddTXlvrz9sdzEgl8Y57e%2B0Be2aax87s6GO4G730NBpbRNNse35DvFgSDnmpytmqqcTnojYFWEO%2FdIiL6KkMYNHV4k7yf6yqyZmmOojiZpEwJBMRnTMSZqWN9FjCems6yAIkRDBO5f%2BOifPJrlTADPIVZB5URl2zBKSKXq5FKH%2F3K06os7AVev5foWFN8DZsfXTUWK7sL%2BqvoT6rCEXObfxUAtXXhxYw1BLdIIPYXDk28OPdXoz1NmKLsJkCDp70Edud%2BqvU0xI5pKF2%2FtpzI5IJnTwZ1l0hoRJ7wlkDGZ8d6wc%2BTte837yqp1yqOBTQ5iAjj8nNh94t1sr2INTPFeSPqNfUo%2BRE6IIdFVFPpdDk4hCNkIl2zOzw7GAVPelv1Wn136yfwd4CoDxUpDsiqBsUBJoc3azJJort1Xtv64RXpbfSSaxH8CqceBwC60FHTWwpUoSE4XyUi0swNUU%2F3NucTBFStwMc%2BlmAPeTfYci4ydj463fREFJbkzC6%2BGLT3fbsw4pKs2oOZ2gwUJJqOawi8SiSYb0pWtjXJZB3Fk3PI2OLaAzTYbZ7t4MmntO2uk6tMS5E0jFeA9a5KXg1mlvMnOfqLYQr%2BiNFGDCiue7ABjqkAbdtE%2FVU2smmuhjfGWUbye9m4XUCnCoaV%2Bhcmw5QV3%2FtVATWIUqbwAEHc1zierAxWcPmebzvULpjIgEJ4p5JQCj1w79lqSiGjCM16%2FGtZ%2B47zXKvxsEbFSvEDx9%2BXaBxfTcp8vCofX78V462hQFwXo7pZTsTrMP1jwWHGiYMIlwsCiqFQrtwh9n54wMsUJ5R9SQEIGSuMHYQ%2Fin4Ue1DtFhoYdQq&X-Amz-Signature=3d2ea8e8f82ef972b31efeca17f5f7e49c598552e11bc67fa7708cb939b9439c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

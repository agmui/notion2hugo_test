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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PEOSNXY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnEUHd9V%2BfHf8gkOdC3Dg%2BXoPI1qwFodEcXSYUeXRPQAiEA0mw%2FIru%2BZAKhWkKrqV4Uqzqem3HbvMOYskRGpbP%2FmS4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn5CGq44PtRRJFQ5ircA0as2RlaImdPLiU6ei6PdqxxznvssrI%2FtpRd9xI2nIH1c74Zi4d4EL3apuTW7V4K8Hs6%2Bu5gheDhbSX%2BrrxZVjMa09rSKUH0aDCI%2FOVmnm0vtdJM4tyFz4kRPIjnvenPJgHLhgHtbFQA%2BbnkGkV8ZA4K19pYMkSX%2F1Iawqvt0a1nZlZ4%2BO9l%2BS7oNKls0jQOsgW2Xubk1yTs%2B5VPvW5%2BS9UhJy4W3RSwQSb7mgLR%2BDdPTFBnTrxWtdbr6rQTdlaw%2FqLxRKBh42brPnJZGTu%2F9xKtYSkSv36bLBCe%2BbpeDmGyJuwbyaXx1%2BGbvQUXSQO%2FETKZmeaQOJoXfnyIuYnr0QjfnPQiv6cKKXJAgQJb1VJCXvddMTMjxMU88V89wz0ZFGrEJK0w3iYG2F6rjZJh54%2FSrR6J2kiEJwY8uQS5kQZRE%2Fzy7%2Bw1EGm4BC1FZEj9yA93LKPP%2FlQGP%2FEHgjwt%2Fzv8mxdBm%2FvHQEtxFCmqpJy0jQivxeik7vVw6hxziqN3%2FhY74oDOl25H%2BaDwXYAQ%2FcDGDB4rL7r1TT54DjBrTtq0GHPeH%2BlYV0k9L6Cyv5mIsJc6fPp16iFeTGtW6lcYNc8KpPqkkjGpKwyW2tYjx6hzmt12CmnTpM3B%2FTm7MMqBvsMGOqUBT0mNvNEIP2SyPpNxDCsEWW%2BrIg0HpQvRd85yyZHhUr8iuqs1lZbWET1Wey6blZOyghn%2BzGTctgdaCaNLTfOU76uPigxTNVqBl8Qex06MfGBWw%2B3DtohYkNW%2FB1m5EgjVDJ28dM6S%2BaiNmOFBzpRRnHRrZMyQ3O4PHt3257LMTgyRvdhnKwobq8Vjqs%2Bf8XqHEbrjyWrFQKfp1KuyOqhb%2BZ9ysCel&X-Amz-Signature=97f229e7af8f66d01d2a18e5b468d7f3c2f1f81bc56e844161a408c2d673b2b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PEOSNXY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnEUHd9V%2BfHf8gkOdC3Dg%2BXoPI1qwFodEcXSYUeXRPQAiEA0mw%2FIru%2BZAKhWkKrqV4Uqzqem3HbvMOYskRGpbP%2FmS4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn5CGq44PtRRJFQ5ircA0as2RlaImdPLiU6ei6PdqxxznvssrI%2FtpRd9xI2nIH1c74Zi4d4EL3apuTW7V4K8Hs6%2Bu5gheDhbSX%2BrrxZVjMa09rSKUH0aDCI%2FOVmnm0vtdJM4tyFz4kRPIjnvenPJgHLhgHtbFQA%2BbnkGkV8ZA4K19pYMkSX%2F1Iawqvt0a1nZlZ4%2BO9l%2BS7oNKls0jQOsgW2Xubk1yTs%2B5VPvW5%2BS9UhJy4W3RSwQSb7mgLR%2BDdPTFBnTrxWtdbr6rQTdlaw%2FqLxRKBh42brPnJZGTu%2F9xKtYSkSv36bLBCe%2BbpeDmGyJuwbyaXx1%2BGbvQUXSQO%2FETKZmeaQOJoXfnyIuYnr0QjfnPQiv6cKKXJAgQJb1VJCXvddMTMjxMU88V89wz0ZFGrEJK0w3iYG2F6rjZJh54%2FSrR6J2kiEJwY8uQS5kQZRE%2Fzy7%2Bw1EGm4BC1FZEj9yA93LKPP%2FlQGP%2FEHgjwt%2Fzv8mxdBm%2FvHQEtxFCmqpJy0jQivxeik7vVw6hxziqN3%2FhY74oDOl25H%2BaDwXYAQ%2FcDGDB4rL7r1TT54DjBrTtq0GHPeH%2BlYV0k9L6Cyv5mIsJc6fPp16iFeTGtW6lcYNc8KpPqkkjGpKwyW2tYjx6hzmt12CmnTpM3B%2FTm7MMqBvsMGOqUBT0mNvNEIP2SyPpNxDCsEWW%2BrIg0HpQvRd85yyZHhUr8iuqs1lZbWET1Wey6blZOyghn%2BzGTctgdaCaNLTfOU76uPigxTNVqBl8Qex06MfGBWw%2B3DtohYkNW%2FB1m5EgjVDJ28dM6S%2BaiNmOFBzpRRnHRrZMyQ3O4PHt3257LMTgyRvdhnKwobq8Vjqs%2Bf8XqHEbrjyWrFQKfp1KuyOqhb%2BZ9ysCel&X-Amz-Signature=1b54d446470baf0ee450dc6778c2ec09450fd85fa88a9c860c5550a226bc45f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PEOSNXY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnEUHd9V%2BfHf8gkOdC3Dg%2BXoPI1qwFodEcXSYUeXRPQAiEA0mw%2FIru%2BZAKhWkKrqV4Uqzqem3HbvMOYskRGpbP%2FmS4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn5CGq44PtRRJFQ5ircA0as2RlaImdPLiU6ei6PdqxxznvssrI%2FtpRd9xI2nIH1c74Zi4d4EL3apuTW7V4K8Hs6%2Bu5gheDhbSX%2BrrxZVjMa09rSKUH0aDCI%2FOVmnm0vtdJM4tyFz4kRPIjnvenPJgHLhgHtbFQA%2BbnkGkV8ZA4K19pYMkSX%2F1Iawqvt0a1nZlZ4%2BO9l%2BS7oNKls0jQOsgW2Xubk1yTs%2B5VPvW5%2BS9UhJy4W3RSwQSb7mgLR%2BDdPTFBnTrxWtdbr6rQTdlaw%2FqLxRKBh42brPnJZGTu%2F9xKtYSkSv36bLBCe%2BbpeDmGyJuwbyaXx1%2BGbvQUXSQO%2FETKZmeaQOJoXfnyIuYnr0QjfnPQiv6cKKXJAgQJb1VJCXvddMTMjxMU88V89wz0ZFGrEJK0w3iYG2F6rjZJh54%2FSrR6J2kiEJwY8uQS5kQZRE%2Fzy7%2Bw1EGm4BC1FZEj9yA93LKPP%2FlQGP%2FEHgjwt%2Fzv8mxdBm%2FvHQEtxFCmqpJy0jQivxeik7vVw6hxziqN3%2FhY74oDOl25H%2BaDwXYAQ%2FcDGDB4rL7r1TT54DjBrTtq0GHPeH%2BlYV0k9L6Cyv5mIsJc6fPp16iFeTGtW6lcYNc8KpPqkkjGpKwyW2tYjx6hzmt12CmnTpM3B%2FTm7MMqBvsMGOqUBT0mNvNEIP2SyPpNxDCsEWW%2BrIg0HpQvRd85yyZHhUr8iuqs1lZbWET1Wey6blZOyghn%2BzGTctgdaCaNLTfOU76uPigxTNVqBl8Qex06MfGBWw%2B3DtohYkNW%2FB1m5EgjVDJ28dM6S%2BaiNmOFBzpRRnHRrZMyQ3O4PHt3257LMTgyRvdhnKwobq8Vjqs%2Bf8XqHEbrjyWrFQKfp1KuyOqhb%2BZ9ysCel&X-Amz-Signature=fc297c93377039c1885373a34dedef21a5dbb231b3602fc1299c9f591b94b6ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCG52E36%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7dyvzFX%2F%2FgGrAKA63cAI7b2na9pzH%2BikSnblOHST2wAiBWevOMfJU6afKyNkvU38o1pjr8SKhxFy0xtjEzF8nsgiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg7n%2Fu4%2BzRhm3wLUuKtwDeHVFUu1wUO0J7Hr%2BbAlmy8S3BovM%2F8OBQU5Z5ySWIE9Nyoe4hRvVEnNJleIQTk8y9K%2FzW2WH9mX%2F8E4PanuVErNQDOLho6QYeDhQaXr489sfTwzxlY9G8NedKFH5O7W3PlhJtQO5opdwwEg5jM5EzhtyGMBOiuBEZSNCbF1LTJxWzeAOIIFzCWfodEWx2KQn5bmF1aHZ3o5acU8I%2BkzLGCckXEKcxa0ryWcmf%2BWtGX6GhGiHLoEteZbCk%2B9CteMMqfVRpTa9lL6E%2BzBBgAZrHppfFYISryFys1F3ZxbFWTQES7vy%2BBn%2BEAtTv5Ib4qn7w7IsVlpTfh23glwiHcRwUt8q9bK4dR%2FnAxgKvKs4BU1Br2R5JPg3nggwKwoWHfk%2FFmxniLHC6wk7Wtv2tWQBhfzCDpRusGq3Pft5JKBvoh%2Bt81MVxfZdyq0r3zOAHSbFGGf0wg2rBWbUVdvDOnGAWs6Nl%2BIoAu3uNqAa1NFSugwJJk2A0h79v3JtbQzXQVESF6QiJ6i7efnszXznb6IPEF4urg9h64F4bCRoazyMo6DVpWY13U6nPDsgHZPI6Lm%2B62yTFzsoMqBhkH47JHpntmFEXXrvzKHHqbaYr87%2BdMrfx%2BRIlI9DU4zPceYw14C%2BwwY6pgGn42JD%2Fe9L7sa%2BTCdNopa9VLrO0d%2FSE%2FgNz2ugy84d9VA7zxUlcANih5Zu4g26L96v1PPiyAyhkVobtLZxHhKpFNhTlMkIpUvbXp%2FgiCZZvFXtcm7aRWf9%2B2G5TSLC1a9TZCPOSEGo8FgHSFWmJuiVNRZhvDDHaRwqOW%2BmlLWrNRRfoxvQr0Qiwm1%2FhMhOV%2FeO9JN52gWOt2S7i7DEAAmyU7Jj1zHo&X-Amz-Signature=d1eae4c1d7f85986bdc39420aa688ff497c31240ef0cb0b794e4b2183a30ce2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPKQFEE6%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1WhxJAwF56YFZc%2F7cqgkHX61pU%2BxH7BBjlN%2BQUGcX8AiEA5SNsD80iXBepuSwEkmr915NDPSUV9%2FrRyGkb3kg5XIgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8hGckyxgse2fBsYyrcA8NHWMCc5oAta%2BAjTebFwvYvljcz0DOqs7Xyhm0R5hvHIbMNuDtVv9ztEq%2F0jjXF3yWp0%2FwlrEOz6IKQOPq%2BODX34VDPw5L2SpU5Yhj%2B5Ek16Mwbn6BhXBS1DDujOj6cRDhN5%2B%2FRitdUeMXO8rD6UKHEt%2BWx7LZhx8ZBUPn3vCltBCVx3nKxSiKWPI462ZuvbJumGj6qCYYFzklItpJscZkfj3vWl99m29aO%2BYgpOPmNp%2FptWf89XXLibGmao3%2BLxrVVdvQ5zyZFSyzD2ymf8y4FfIqDZLHYHaxkWqLvnowChjaWx7enh2UsN2V%2FwbLxIgfYT1yK0T3H%2FlHweBiCc5R9AgYXQMpEVfMxsBy17xFhoeVzbc9CGGpFbqMx7bEJSljtH6CpjbhhawgO%2Bi8PAeQfEQ8jRaUXf1RDJgQdN2g9ZW779U2nKlaHLEkZOKhFoSkDE2rNX6OmYMM%2FBc8Vs6aZbkcRZ8RuVOft371AL7XMMKsbwI%2Bm%2FhJf75WyfhnFASP338wE7g7SjKCxy1uPvvdGlW3kW8ylApRLfCjyxc8YRLub4hUOZBfxCessY%2F1%2BAVZIUC%2FSETCy4WJWA39of0QTrmwom82upWDet8TcIW%2BiSuxpWpJeM5YxIyheMO%2BBvsMGOqUBUAd8uO%2BfqLJocgyfhBhCPVHZzU6kcwpAeeiIUGhOJvMK%2BkceZBjBfTxE0D9bBR7P9F5k1HodZq2sAA6zx25YI78wT28%2F05%2BHqflzn%2BAJxpe%2Faek1AhGKf7i%2BMVq1dCYnROpdBlu8M0PB4KYZSnL6d2IBa9aM0bpfYdiNra1ToXWFd88BzdkilllTCFHTBpAOytmxeYeww42RZNQhLtrhRaWv%2Fj2q&X-Amz-Signature=a61606215b1c6349b62268776aec2fdeb135ccc289c43163f39b18cb2025e608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PEOSNXY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnEUHd9V%2BfHf8gkOdC3Dg%2BXoPI1qwFodEcXSYUeXRPQAiEA0mw%2FIru%2BZAKhWkKrqV4Uqzqem3HbvMOYskRGpbP%2FmS4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn5CGq44PtRRJFQ5ircA0as2RlaImdPLiU6ei6PdqxxznvssrI%2FtpRd9xI2nIH1c74Zi4d4EL3apuTW7V4K8Hs6%2Bu5gheDhbSX%2BrrxZVjMa09rSKUH0aDCI%2FOVmnm0vtdJM4tyFz4kRPIjnvenPJgHLhgHtbFQA%2BbnkGkV8ZA4K19pYMkSX%2F1Iawqvt0a1nZlZ4%2BO9l%2BS7oNKls0jQOsgW2Xubk1yTs%2B5VPvW5%2BS9UhJy4W3RSwQSb7mgLR%2BDdPTFBnTrxWtdbr6rQTdlaw%2FqLxRKBh42brPnJZGTu%2F9xKtYSkSv36bLBCe%2BbpeDmGyJuwbyaXx1%2BGbvQUXSQO%2FETKZmeaQOJoXfnyIuYnr0QjfnPQiv6cKKXJAgQJb1VJCXvddMTMjxMU88V89wz0ZFGrEJK0w3iYG2F6rjZJh54%2FSrR6J2kiEJwY8uQS5kQZRE%2Fzy7%2Bw1EGm4BC1FZEj9yA93LKPP%2FlQGP%2FEHgjwt%2Fzv8mxdBm%2FvHQEtxFCmqpJy0jQivxeik7vVw6hxziqN3%2FhY74oDOl25H%2BaDwXYAQ%2FcDGDB4rL7r1TT54DjBrTtq0GHPeH%2BlYV0k9L6Cyv5mIsJc6fPp16iFeTGtW6lcYNc8KpPqkkjGpKwyW2tYjx6hzmt12CmnTpM3B%2FTm7MMqBvsMGOqUBT0mNvNEIP2SyPpNxDCsEWW%2BrIg0HpQvRd85yyZHhUr8iuqs1lZbWET1Wey6blZOyghn%2BzGTctgdaCaNLTfOU76uPigxTNVqBl8Qex06MfGBWw%2B3DtohYkNW%2FB1m5EgjVDJ28dM6S%2BaiNmOFBzpRRnHRrZMyQ3O4PHt3257LMTgyRvdhnKwobq8Vjqs%2Bf8XqHEbrjyWrFQKfp1KuyOqhb%2BZ9ysCel&X-Amz-Signature=0d7c0e4d5f6aa367f54d1677e8155a099054464e7f6b3426a96ea8bf97a23bd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

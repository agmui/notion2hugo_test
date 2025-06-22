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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CPD346I%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD8pH2DIbp%2Fdxxc4gISh0sSuKLsXuHfVoKezDb7UpX%2FRAIgCtjsXxqx8%2B%2Bxg3te5ND36aeAtq1w%2FZcRCJRFfkFA5SkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEqnmoN%2F5P%2B8KanLyrcA%2FAGlIxIEIZZ7p%2BpKwsRc4P%2FusZWwPpJKCVLRi51ksl7NX24ZkTEmorDZv2NJkcjDZZB0G3SMwtx1CcqM9tVta5CDuPvYTYoP32MEIu3junxEJ7ulB9eHvUY6qGVjkxiI9Ppoug0077xJ0g6t9bEdAnWTuno8FPM9dFcuLpC2KOJTh0KGAuG5%2FjN%2FPHmfNXS%2B1NAps4cUal98EgfdSAEdFAY%2FvpM1FuLRwhk6mlKgsVJeSfNZ3X2rZPkEStND3OrxDZSYEh9q1HKCs6r2gLPeIAP07nMT6M4dNqRfJGg0q3VmxZuIpKoWdv1NWVnW9D5WRpmvjAMGgPgxxC5%2BM8SPWJWvb%2BP%2BMyf5f%2Fpqh4YfKRVJLaQmSGME8wZixUc%2F0s92YKotGlYrwdJnOVVZ6yw0XlJIwGs6nwSCGva7yinLzbtoS0LZn%2FlX5UrPVP1KCsT3WKYpTprdKRryzZDpNtifq4xmGWUtS2YmtrSq03GGJvVF8%2BvyVDxmuZB38giSa75EXP2uvJz3eZpEYFTjg4FmYu0fDjM%2BFBb5OsQ%2Bz5u7XKdMa1ZdlGcHdEip7Lhi7AkbrJJaAlM70zBGE7r0kQqRn%2B6fGlgQ0rarFgRCs42bXBNIKXXyfRvbx8LZV%2FqMJnz38IGOqUBXe1uwGL%2FD4I%2Fn0F54uco2HZosPNFjb%2Bt4X0DgK6cOGPD9hliKXR0AeVvoP7cjoey%2FcUb%2BEG2u2O39N7MufPyk2K%2BfNsl3OLX%2FkkIRDpXqXfxnzMWO3weiGBrVisp7CPcUawRaTVw2OBz7freKqAHh92uL%2Fu8wEtF6dTwt%2BpvGjuVXpJV%2FPTD%2Fn%2F%2B99URAw77RoWxMlHsyUNb6uZq1JDBUEcao3ln&X-Amz-Signature=dbbf4e4d0f63bae60ad505f5dbeb71ede3ecc721627c2eba6ded901f9706cad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CPD346I%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD8pH2DIbp%2Fdxxc4gISh0sSuKLsXuHfVoKezDb7UpX%2FRAIgCtjsXxqx8%2B%2Bxg3te5ND36aeAtq1w%2FZcRCJRFfkFA5SkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEqnmoN%2F5P%2B8KanLyrcA%2FAGlIxIEIZZ7p%2BpKwsRc4P%2FusZWwPpJKCVLRi51ksl7NX24ZkTEmorDZv2NJkcjDZZB0G3SMwtx1CcqM9tVta5CDuPvYTYoP32MEIu3junxEJ7ulB9eHvUY6qGVjkxiI9Ppoug0077xJ0g6t9bEdAnWTuno8FPM9dFcuLpC2KOJTh0KGAuG5%2FjN%2FPHmfNXS%2B1NAps4cUal98EgfdSAEdFAY%2FvpM1FuLRwhk6mlKgsVJeSfNZ3X2rZPkEStND3OrxDZSYEh9q1HKCs6r2gLPeIAP07nMT6M4dNqRfJGg0q3VmxZuIpKoWdv1NWVnW9D5WRpmvjAMGgPgxxC5%2BM8SPWJWvb%2BP%2BMyf5f%2Fpqh4YfKRVJLaQmSGME8wZixUc%2F0s92YKotGlYrwdJnOVVZ6yw0XlJIwGs6nwSCGva7yinLzbtoS0LZn%2FlX5UrPVP1KCsT3WKYpTprdKRryzZDpNtifq4xmGWUtS2YmtrSq03GGJvVF8%2BvyVDxmuZB38giSa75EXP2uvJz3eZpEYFTjg4FmYu0fDjM%2BFBb5OsQ%2Bz5u7XKdMa1ZdlGcHdEip7Lhi7AkbrJJaAlM70zBGE7r0kQqRn%2B6fGlgQ0rarFgRCs42bXBNIKXXyfRvbx8LZV%2FqMJnz38IGOqUBXe1uwGL%2FD4I%2Fn0F54uco2HZosPNFjb%2Bt4X0DgK6cOGPD9hliKXR0AeVvoP7cjoey%2FcUb%2BEG2u2O39N7MufPyk2K%2BfNsl3OLX%2FkkIRDpXqXfxnzMWO3weiGBrVisp7CPcUawRaTVw2OBz7freKqAHh92uL%2Fu8wEtF6dTwt%2BpvGjuVXpJV%2FPTD%2Fn%2F%2B99URAw77RoWxMlHsyUNb6uZq1JDBUEcao3ln&X-Amz-Signature=2121979f9c8e6d1dd097db6422f456f924c60e60a3cc6acc095a123a8e12d393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CPD346I%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD8pH2DIbp%2Fdxxc4gISh0sSuKLsXuHfVoKezDb7UpX%2FRAIgCtjsXxqx8%2B%2Bxg3te5ND36aeAtq1w%2FZcRCJRFfkFA5SkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEqnmoN%2F5P%2B8KanLyrcA%2FAGlIxIEIZZ7p%2BpKwsRc4P%2FusZWwPpJKCVLRi51ksl7NX24ZkTEmorDZv2NJkcjDZZB0G3SMwtx1CcqM9tVta5CDuPvYTYoP32MEIu3junxEJ7ulB9eHvUY6qGVjkxiI9Ppoug0077xJ0g6t9bEdAnWTuno8FPM9dFcuLpC2KOJTh0KGAuG5%2FjN%2FPHmfNXS%2B1NAps4cUal98EgfdSAEdFAY%2FvpM1FuLRwhk6mlKgsVJeSfNZ3X2rZPkEStND3OrxDZSYEh9q1HKCs6r2gLPeIAP07nMT6M4dNqRfJGg0q3VmxZuIpKoWdv1NWVnW9D5WRpmvjAMGgPgxxC5%2BM8SPWJWvb%2BP%2BMyf5f%2Fpqh4YfKRVJLaQmSGME8wZixUc%2F0s92YKotGlYrwdJnOVVZ6yw0XlJIwGs6nwSCGva7yinLzbtoS0LZn%2FlX5UrPVP1KCsT3WKYpTprdKRryzZDpNtifq4xmGWUtS2YmtrSq03GGJvVF8%2BvyVDxmuZB38giSa75EXP2uvJz3eZpEYFTjg4FmYu0fDjM%2BFBb5OsQ%2Bz5u7XKdMa1ZdlGcHdEip7Lhi7AkbrJJaAlM70zBGE7r0kQqRn%2B6fGlgQ0rarFgRCs42bXBNIKXXyfRvbx8LZV%2FqMJnz38IGOqUBXe1uwGL%2FD4I%2Fn0F54uco2HZosPNFjb%2Bt4X0DgK6cOGPD9hliKXR0AeVvoP7cjoey%2FcUb%2BEG2u2O39N7MufPyk2K%2BfNsl3OLX%2FkkIRDpXqXfxnzMWO3weiGBrVisp7CPcUawRaTVw2OBz7freKqAHh92uL%2Fu8wEtF6dTwt%2BpvGjuVXpJV%2FPTD%2Fn%2F%2B99URAw77RoWxMlHsyUNb6uZq1JDBUEcao3ln&X-Amz-Signature=4db5feab4d61487d93783ea567192b9f51f161df9977012baa6fbd1d7bffb98c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZF2HGU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIEfHuIfJXXMeMXAZZHZ6tuNyNpU3mV%2FXNpzTcIo8bKPXAiBPNHT%2FRsPQy80VOnu1ZYRUaJMWeAgwbhgl76pTQ86MhiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn2ABxvpMMAhYd9rxKtwDDPwe0KWNM4SrT3NUwYUjN0Zvc8T7Fkn1QyAnLhW57mOXV2tP6ihEfZFjvleZzycLi0khJnKlCDekbzkEuwOY2JBsw7uf91A9XAJVhVoas2AFWfQJsepJFYx88KIHZL4ZIUEFjeUL3lWeb%2FOkcXGWFd2fYbVI%2B%2B9A%2FL3HeFvmEhHFJ9ZbhgFnxDI28IVBUMXyisu1%2BdOJ6iKvff0jqv%2FVGRAD1F91taF2s5zVEb7di0MDdl8K0ti7cLWsen6BnBAT9K5oEfSSG10FUB9QKH4fV7ZrN8CA%2BNQz%2B8WfqM35l59n0Sah4z7%2Fu08W9YUOOb97I4k8KapPFpij3aeoJ1A5S63GE9UJYv7yp0bOcvnNMqgCZHDehkG0kFTucn85zhbn%2BO9xu3tUT2vWG039Mj9O0ai0%2Fc4JevaacpmvDAwubLr5VprjaKq%2FgIQoTJoLAqkBFeyjhSdtkxKAJVWLMdEahrPcmKcejy2QNFqhlXQa4%2FQmOqvW4czhvgd9swNsV6yc4Fl9Pa2AEDMeC4JanEWF4usgbdTI0QZliBlRb8vBOguK1QMvPentgT07QZiQ8PGbJMQ9CCrij9ULXXnfXSzX4S5fyNpm8o3Cfoc0IJFFPpBKO%2F6r1iaGVX%2FCJ7Iw7eTfwgY6pgHMiMkxUwdsw8SRfYyxN1P4v9RjCPu%2B4XgO9lnISZbMmUMjS8WCEb6bs%2FT256TUolbn849XSNW4hS0zTdyqT9SLXJ9SfuhVnqKDakuRj3bNDGHykpFKMzSs6fhgih8rpgbpMrxIyj4pKOcaK5tcEY5btFJOkj5VhSB3fIdCM4hdzOn2w%2BsZGhrcFSwh3Nkd%2BEs8bI%2FxxSZAjLgttm8METDiU%2FS14whE&X-Amz-Signature=7159aafe4db3358fa0c6a9f2d431bf4e5da60db54753c7fb2d8bcef462525340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQTBZQK%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIE2dYhoOFgxxbJm4IPpOJna3uPNQdybN05Xl3D8Oj1aKAiEAke1CGCCJ0xMnhA7eqQANrwzy8jWNWT7RJ2Rqce68IPcqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3hdtEnDqBCsiSfXSrcAxsMpGInbr7uDSGPuJ%2FzdGB9t%2FV3uQhmJRVeYtEhib1RmoVsLhBF0OkHaaXbRkYvlXnW3T0lVqRfDZP1qM8oW8D5WJNLEaIhvabz9mhGWGKoQdOIo%2FAzHoPP19xf8U0r8yURcTkd%2FMgarMgPbNE6At%2FhZdry7KdD72LXjNe%2B1iQXZ7KIGHtnzOSBWor%2FSga35%2Fqccoa8O4gOUe3eUZuFgYDP92TJeZ91VsnUxOpwrs7%2FDhfAEUpS7EFOU2RUFwMAcxFMMnX8NI8ptYht1%2FJ3XLcEHogqEmUc7z0P0QHGgTlg11uoif8WryDEDCgWWvr7rvzOC%2BDhCTb%2Bj4AIKPMZRW5iMi216qEIwsLaDuIN2of%2BgWJTVC94gLUhgyI5WMuDyhYLfavcHvGiYktSRI%2BNfsq0idpN%2B9FZ8%2FJRlVcfU1BYPQwcHXwo6kXQesADUgoKZHnsOWH2Kaf41dvNtlfrOhY96fAK3RlRiGvUbRbyUnnX3BXHo6RINQik4Zhx%2F9tqyRAK%2BKE8wpbJaXPNDNnWRcWnv%2F097ZvFb%2F43KYmcdrBbge1jtbRWxhJnMsihBghSfu8nVIylZFQil30Bij3f5pZjdtO3OaMP%2Ba9B9R8EseaWHFTmAp%2FAKgh9%2B%2B2SMLzd38IGOqUBjcKX00GoajsskG%2F4pqSV%2Fo88W0sPRVGkcQYBBIs%2FBwBPdTVddBJxK7YlFoqKoGXajGS22vGiwyFr0eM39VZvAA4HWOCCXlgHO4mJUU9xiS2yqgR16pFn0O23BVLHZMIKr6Gv67Iw2rBtbXEsgCk%2BsopVlCXCYhSSX3U8D6ldBBpI9zfXf6zgeJzResLF0eLBPQHnKVKHbrI36bvx5SkwBySD2iEh&X-Amz-Signature=2d21b34376441637a39da1c88583f224dce95bca366c2fee8e0620583c36e187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CPD346I%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD8pH2DIbp%2Fdxxc4gISh0sSuKLsXuHfVoKezDb7UpX%2FRAIgCtjsXxqx8%2B%2Bxg3te5ND36aeAtq1w%2FZcRCJRFfkFA5SkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEqnmoN%2F5P%2B8KanLyrcA%2FAGlIxIEIZZ7p%2BpKwsRc4P%2FusZWwPpJKCVLRi51ksl7NX24ZkTEmorDZv2NJkcjDZZB0G3SMwtx1CcqM9tVta5CDuPvYTYoP32MEIu3junxEJ7ulB9eHvUY6qGVjkxiI9Ppoug0077xJ0g6t9bEdAnWTuno8FPM9dFcuLpC2KOJTh0KGAuG5%2FjN%2FPHmfNXS%2B1NAps4cUal98EgfdSAEdFAY%2FvpM1FuLRwhk6mlKgsVJeSfNZ3X2rZPkEStND3OrxDZSYEh9q1HKCs6r2gLPeIAP07nMT6M4dNqRfJGg0q3VmxZuIpKoWdv1NWVnW9D5WRpmvjAMGgPgxxC5%2BM8SPWJWvb%2BP%2BMyf5f%2Fpqh4YfKRVJLaQmSGME8wZixUc%2F0s92YKotGlYrwdJnOVVZ6yw0XlJIwGs6nwSCGva7yinLzbtoS0LZn%2FlX5UrPVP1KCsT3WKYpTprdKRryzZDpNtifq4xmGWUtS2YmtrSq03GGJvVF8%2BvyVDxmuZB38giSa75EXP2uvJz3eZpEYFTjg4FmYu0fDjM%2BFBb5OsQ%2Bz5u7XKdMa1ZdlGcHdEip7Lhi7AkbrJJaAlM70zBGE7r0kQqRn%2B6fGlgQ0rarFgRCs42bXBNIKXXyfRvbx8LZV%2FqMJnz38IGOqUBXe1uwGL%2FD4I%2Fn0F54uco2HZosPNFjb%2Bt4X0DgK6cOGPD9hliKXR0AeVvoP7cjoey%2FcUb%2BEG2u2O39N7MufPyk2K%2BfNsl3OLX%2FkkIRDpXqXfxnzMWO3weiGBrVisp7CPcUawRaTVw2OBz7freKqAHh92uL%2Fu8wEtF6dTwt%2BpvGjuVXpJV%2FPTD%2Fn%2F%2B99URAw77RoWxMlHsyUNb6uZq1JDBUEcao3ln&X-Amz-Signature=2a48e40a9aec86c35e44786ee280cfffd1d4701827074a0e30ac0faf4d6304c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

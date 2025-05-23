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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KOLRPXW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIAG%2FzytvJL6uIfg04ZXQmDnsO2%2BHu1DeX3aAfixqvGj4AiEAsUoTkHj75ZtmtMo5rNrjFm0vVMhHaJiCcvPlsQKgbBQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHBBgG%2Fvsm9PGxqwCrcA838RslmywHqzuD6rFACC%2BasG6JgnSUxdJBrTBx%2F1wA96QXg8Ju4GmpHQLgZ5WirLzvI8P8svHEXxxKqmLNB9GJpJAJAA4nhAfv9vZ%2FtyQu9e6HT8MBce9QOnPi08zrHjvrnezPQTpYrpzss2y7yaxCnOpx7qNO7fyytHVD590uQyInDpF4bOtl1aP7N9UJbKBW4EvTkHnSCCQhDIuVKFwlm6JUyuV%2Fpv%2FKLXWyhiN7HB3WTv%2B%2FxY3yBczBTqIq3Ag1UEILrLezaQvm8gOPdYrkuEbrH5vVv%2BJFcTFJHT9S7w%2FAtWU3CwFTu5%2FoO%2BuC%2FLDGZRfT6YvBYfA1XCXMG%2FtbseTUfo1OssECpLz6bqUpTLOp9sC2Cupj1pb1E%2B4o%2FtjnCVS%2FVEXWHhW6DkC4sWy6mUCYM5%2BIS1ph8uqYZBKZ7au3L58lmy%2B42DM%2BYKBVJ6ufO0%2FABTDFnBkuHqop8qAoKOKShtDJipsGftMZvYhS%2Fa%2FCuB9tsdI3g5cTni%2FnMx1JeRE53Z%2BxdFf7Gt2abvpLEv%2F6JoMDvkeZQaOr5yGXzed6%2BIip5OlVVilUy966mvLlYcMDawy5fmqP7t3ukNmI%2B7%2BKt3N5uZOIpNn32qUobdxg0Bn%2FM6pIWC84EMOPCv8EGOqUBVx92NeCjE6mqIkkUdF8Jv3VLjvNAAg29mOHdmTJ80U8VC4zQ9wtmV1BV71xFEc1vCVDQWuD4zQHK33UXKnlTbzM2CKtRbT5M4%2FovqeB2lDMKoRqr8%2B%2FA2FrecuBIHYF%2FPbKYluhqpf3PsotSo5OCpHtj9FWezOJuYaXdhV0zNcPNigOjkWtIJlLmgF1OAUEu5LAgzya8gyKOyrgNABbLpKuwucQb&X-Amz-Signature=05093788005343455692d9bf663fb452bcc465f6310d7a23058569c038eb65e4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KOLRPXW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIAG%2FzytvJL6uIfg04ZXQmDnsO2%2BHu1DeX3aAfixqvGj4AiEAsUoTkHj75ZtmtMo5rNrjFm0vVMhHaJiCcvPlsQKgbBQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHBBgG%2Fvsm9PGxqwCrcA838RslmywHqzuD6rFACC%2BasG6JgnSUxdJBrTBx%2F1wA96QXg8Ju4GmpHQLgZ5WirLzvI8P8svHEXxxKqmLNB9GJpJAJAA4nhAfv9vZ%2FtyQu9e6HT8MBce9QOnPi08zrHjvrnezPQTpYrpzss2y7yaxCnOpx7qNO7fyytHVD590uQyInDpF4bOtl1aP7N9UJbKBW4EvTkHnSCCQhDIuVKFwlm6JUyuV%2Fpv%2FKLXWyhiN7HB3WTv%2B%2FxY3yBczBTqIq3Ag1UEILrLezaQvm8gOPdYrkuEbrH5vVv%2BJFcTFJHT9S7w%2FAtWU3CwFTu5%2FoO%2BuC%2FLDGZRfT6YvBYfA1XCXMG%2FtbseTUfo1OssECpLz6bqUpTLOp9sC2Cupj1pb1E%2B4o%2FtjnCVS%2FVEXWHhW6DkC4sWy6mUCYM5%2BIS1ph8uqYZBKZ7au3L58lmy%2B42DM%2BYKBVJ6ufO0%2FABTDFnBkuHqop8qAoKOKShtDJipsGftMZvYhS%2Fa%2FCuB9tsdI3g5cTni%2FnMx1JeRE53Z%2BxdFf7Gt2abvpLEv%2F6JoMDvkeZQaOr5yGXzed6%2BIip5OlVVilUy966mvLlYcMDawy5fmqP7t3ukNmI%2B7%2BKt3N5uZOIpNn32qUobdxg0Bn%2FM6pIWC84EMOPCv8EGOqUBVx92NeCjE6mqIkkUdF8Jv3VLjvNAAg29mOHdmTJ80U8VC4zQ9wtmV1BV71xFEc1vCVDQWuD4zQHK33UXKnlTbzM2CKtRbT5M4%2FovqeB2lDMKoRqr8%2B%2FA2FrecuBIHYF%2FPbKYluhqpf3PsotSo5OCpHtj9FWezOJuYaXdhV0zNcPNigOjkWtIJlLmgF1OAUEu5LAgzya8gyKOyrgNABbLpKuwucQb&X-Amz-Signature=8f3af4d0192dbd054ac206de1a68b2b529d018046c085d407b44ff97002c4ec6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KOLRPXW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIAG%2FzytvJL6uIfg04ZXQmDnsO2%2BHu1DeX3aAfixqvGj4AiEAsUoTkHj75ZtmtMo5rNrjFm0vVMhHaJiCcvPlsQKgbBQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHBBgG%2Fvsm9PGxqwCrcA838RslmywHqzuD6rFACC%2BasG6JgnSUxdJBrTBx%2F1wA96QXg8Ju4GmpHQLgZ5WirLzvI8P8svHEXxxKqmLNB9GJpJAJAA4nhAfv9vZ%2FtyQu9e6HT8MBce9QOnPi08zrHjvrnezPQTpYrpzss2y7yaxCnOpx7qNO7fyytHVD590uQyInDpF4bOtl1aP7N9UJbKBW4EvTkHnSCCQhDIuVKFwlm6JUyuV%2Fpv%2FKLXWyhiN7HB3WTv%2B%2FxY3yBczBTqIq3Ag1UEILrLezaQvm8gOPdYrkuEbrH5vVv%2BJFcTFJHT9S7w%2FAtWU3CwFTu5%2FoO%2BuC%2FLDGZRfT6YvBYfA1XCXMG%2FtbseTUfo1OssECpLz6bqUpTLOp9sC2Cupj1pb1E%2B4o%2FtjnCVS%2FVEXWHhW6DkC4sWy6mUCYM5%2BIS1ph8uqYZBKZ7au3L58lmy%2B42DM%2BYKBVJ6ufO0%2FABTDFnBkuHqop8qAoKOKShtDJipsGftMZvYhS%2Fa%2FCuB9tsdI3g5cTni%2FnMx1JeRE53Z%2BxdFf7Gt2abvpLEv%2F6JoMDvkeZQaOr5yGXzed6%2BIip5OlVVilUy966mvLlYcMDawy5fmqP7t3ukNmI%2B7%2BKt3N5uZOIpNn32qUobdxg0Bn%2FM6pIWC84EMOPCv8EGOqUBVx92NeCjE6mqIkkUdF8Jv3VLjvNAAg29mOHdmTJ80U8VC4zQ9wtmV1BV71xFEc1vCVDQWuD4zQHK33UXKnlTbzM2CKtRbT5M4%2FovqeB2lDMKoRqr8%2B%2FA2FrecuBIHYF%2FPbKYluhqpf3PsotSo5OCpHtj9FWezOJuYaXdhV0zNcPNigOjkWtIJlLmgF1OAUEu5LAgzya8gyKOyrgNABbLpKuwucQb&X-Amz-Signature=5477d641d6b47e16bc2204df12db820095fa986ad32ef36f4763852c314fb800&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ISJPYGR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIB9BZhVjuh1T%2FdhLB7fc6rGjFdWI4a5YDPpGBMwsenqtAiAuAndpsqe0FoosJpvRLWAnLSYFQtcr8QZ%2BLNNiCsuDHCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMry4XM62XP%2BeybjB7KtwD7478IOAlvt6Zlyz0hOgQenohjdTXW0lIyAfC6EO0Rlu1%2FCSv8f%2BVXQzJRxa6G6QJuh4UHr4EzmmO8Q1dWHheLWgCty0v1%2FNy8fpENbvocRUTRyOaGhL9QPtLFzUm6TiRz60ng1EpWJwkBX5CDWkbDpThdje0uq7%2FmNyJzQfHdS5SmJ%2FrkG67dpvJf62dlYsurLCi8wmUs%2BnuX6C%2BmHaPvdakck7zQZQF1Au%2BTXAmSpU06hbkV8lJocdIubsyu4jJnsuAWaaJSXZljDBM%2BB4h1l1G5mMRpSvwQE4%2Fbz0GAsH4bzZrTfNIYVYQesn6PQ2ke9ZM8u2bRLENYh2Dp5n9FhWMA11nJpYrsmnX8Cj1ujxVW925UW2AYasZLsaVuGIv%2BxQJoMK5Up%2B%2FKo2NZE%2BoWNW9hy05NxVuZK6scMmweVwCcTcRr7baMp3MuDeogfg4EyeItjEpOT2BLAbgg8fXA15JimhTKMZEcMOGAsU1UvswmJu1tDSOYW3FZH8hFICLI5VIxScTPkQmUJjPOxoMgFYlVjJsAPkhmlV9F6901tnHGzvbs%2BQ3o%2FjpxSC5GxcSJqsv6o3%2BiGhtO3XhNpVGuQBabhL8E1vQ%2BqKKrkGc5%2BmUivcuVpze6U2Cpsow%2BsG%2FwQY6pgHwIjQ4tzivMJeUpvbxJx6uoBjDbOkT2MdHcn0CH9r8fktNkWPQOGFrY%2BVXSTaEBlvd1WZ%2BKW8cawrNrqx92ivaLIsZe1o1%2F1YKoiR6qoDE5GItqcnl5bqISIo3fQMyNVQNOt%2Fp3ORmZKe2%2F7XrIzIGxQLShUbJIV60V%2BtpSY4NgQaAVfOcSr4xtIzvIzz2%2FEw3Vedn03foa6Law21VNRZigZObxG60&X-Amz-Signature=8264c3ed598c398e51bbd9843928390d1a31981c4722bf884a227db0dc356fb4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6ZUX7H%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIAjrWzI8KyrfaMv5GlnZbd1pqeCSfq10XXcGEhXzW5RIAiEAgEh1cvEtBxs%2FgVikxwDtg9aA%2Fq38GwvjLw2zp8pw2a8qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNotRFdrLrBDOapXhircA8VQMRmQCu7%2FmRttYDdC%2BozStVc0DED8JxleRyECM9A%2BGzrIDKfw%2FtGo6acTDkQQqyIUzzjVRUrtX26nZGsvY9i6lhrsVau0%2FgwfwjQAPX564bfEKDGeYphy5am6t2yMAT38WbRb6n%2FtKJKgCIn%2FqbgRc7mmy8t7ZLcBrS5%2B1nWEwpj2erKn6tdqACU1lNo5NxNv80x3iEMC7hrVNRmh8mVqKOTGSrqsxnGgxV9JPUbVSp%2B80hNh8jyZPue4YrjBmilDbbiosxagJVdzahbq0KhWqVzn6bbD%2BTuyv3I33AATopneOqEnNRNQiXypl9PvkKoY3zyB8VL8OXLs23j84YOOZIYwrFYsiB71eCNn1StBWWOZTOpDOIZSluVzM4FDsJquftAZT0qZ9bt%2BW6TpBVi%2F9FULl9cB5DWqdr%2FA5eroq2CsEwuYHyj0ahdsYvN%2FcJzMgfjozIdHTapBmWqXMXKwDsLO7JnoEIvmo%2FY6eOoVIEdhwLQMgfSqie%2BJKu7ifTNwRviZdlkqR5X1Xt1nZOIElC2FZWvewO%2FilGIIMyhmbWDsueXAQhZqh8kgHP8o%2BrY%2Fx06GzTLBjENutbQndKMYMY4SAxxmoNSVvM9gOhxgtRwwB%2BRVQPhUQInEMIDCv8EGOqUBQqldxsi%2Fww44C8hZUQYLdV2Bg1JJC61aFvmKB%2F0os%2BcBz1ysDAZBnQzgSAr%2BERZqFxjSFuLPDT%2BdSnrVm46ld80izodR9Ko%2BFSwnVxf0TMI1II8tNrSPKjw8yjDWQyEMrPr1U%2FfDazU72HP7cTJOZGjE08DaBCmEazbeoSxR%2BSsQqYEy7fwe9DvhsHVI4HqC%2FvH0YwOyTgob%2BrFscy9HIzyb6OIs&X-Amz-Signature=546f1a2c23db637225e31f9f7dc30488bf2df668677c74bdc75f241d71499f36&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KOLRPXW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIAG%2FzytvJL6uIfg04ZXQmDnsO2%2BHu1DeX3aAfixqvGj4AiEAsUoTkHj75ZtmtMo5rNrjFm0vVMhHaJiCcvPlsQKgbBQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHBBgG%2Fvsm9PGxqwCrcA838RslmywHqzuD6rFACC%2BasG6JgnSUxdJBrTBx%2F1wA96QXg8Ju4GmpHQLgZ5WirLzvI8P8svHEXxxKqmLNB9GJpJAJAA4nhAfv9vZ%2FtyQu9e6HT8MBce9QOnPi08zrHjvrnezPQTpYrpzss2y7yaxCnOpx7qNO7fyytHVD590uQyInDpF4bOtl1aP7N9UJbKBW4EvTkHnSCCQhDIuVKFwlm6JUyuV%2Fpv%2FKLXWyhiN7HB3WTv%2B%2FxY3yBczBTqIq3Ag1UEILrLezaQvm8gOPdYrkuEbrH5vVv%2BJFcTFJHT9S7w%2FAtWU3CwFTu5%2FoO%2BuC%2FLDGZRfT6YvBYfA1XCXMG%2FtbseTUfo1OssECpLz6bqUpTLOp9sC2Cupj1pb1E%2B4o%2FtjnCVS%2FVEXWHhW6DkC4sWy6mUCYM5%2BIS1ph8uqYZBKZ7au3L58lmy%2B42DM%2BYKBVJ6ufO0%2FABTDFnBkuHqop8qAoKOKShtDJipsGftMZvYhS%2Fa%2FCuB9tsdI3g5cTni%2FnMx1JeRE53Z%2BxdFf7Gt2abvpLEv%2F6JoMDvkeZQaOr5yGXzed6%2BIip5OlVVilUy966mvLlYcMDawy5fmqP7t3ukNmI%2B7%2BKt3N5uZOIpNn32qUobdxg0Bn%2FM6pIWC84EMOPCv8EGOqUBVx92NeCjE6mqIkkUdF8Jv3VLjvNAAg29mOHdmTJ80U8VC4zQ9wtmV1BV71xFEc1vCVDQWuD4zQHK33UXKnlTbzM2CKtRbT5M4%2FovqeB2lDMKoRqr8%2B%2FA2FrecuBIHYF%2FPbKYluhqpf3PsotSo5OCpHtj9FWezOJuYaXdhV0zNcPNigOjkWtIJlLmgF1OAUEu5LAgzya8gyKOyrgNABbLpKuwucQb&X-Amz-Signature=be4823b5f2f3fe3d1905e3a8467f6806f813bafb8bf06c2ca9115dca1ad73499&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

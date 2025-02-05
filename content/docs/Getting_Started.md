---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOD5YNVZ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQD%2BHWKwgYcr%2FPBqpUWRJCDHX2lZ4rOsC8CFkxhK80xXIQIgKup9%2B2j3O%2FZYy8ZABgtLNdegYi1Ygap4PcOCYr0IznYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGWLUCpIwlLt1dmApyrcA1X5%2FZrdg7vti9kqiBEIIdDYWoMkA8R6YZFqdaf7QZuD3tTsLYoT1B%2BURNn9jjQXqioOwdjqo%2ByJvBDiLOXCjIe6jEeXMDYebiNDIDf28uA9UdjOPNRe6gKP4km4F18twhS3KXAQSylo%2FF7vLnxSNd4uRlMOiR9gATGVoeN9MgjYNU6YmgwcHq4eBYDhUcdhEJxR5xjgtzcDu8yDP5KtGflxqDbo%2Bh5MDKaOB6g7qXim1Yp%2FjPEd4T3Q8M%2FimJpK%2BLTHwH19jOlN%2FKwtFsElzvfrOZ0G2IYu43uHAlzaWwJwhgLcLfGcKVCCiux4gauMcj0MADZq02Hdtj65JfgK2GXm9U6XrAg7vIRVYeF8IRXRxYFsU%2BDfYHFCH2lUoQvPGWaT3d4XsTpRXFUNJ06yoWKXQ4qCTgCGvQeOBItlLR40eRZxLDV25u5mgLvw7aQp6QAv%2BDA5zJgqUneFVzps9q2Auq%2Bdl434iLFMxUWDI%2BKBBxLP7%2B2gXq3umstzcgX9gq5iMVvdZGPjvIgL0DA1H%2BQ32okJcuuBGYO8%2Fyf0DTbaLPxspdq2qxeEH8%2FAtZbZZw4GlaTEaiT8b%2BYlTWNe5QFX83QF6luWyLJzc6vkJxdx0pU7uwDVOB%2B3YMbbMOnkjb0GOqUBtav728ksR6clCDY2GVGdn2HnI3%2BYDWl74GIGrt3Ipl0nj%2BWpHQQerXPe6vko3F3OpVpZNsybtKgtUVivIZCec8Hb5PuPqjP9SRWB%2Bqgtd4jZxucA2SmveRNaIqmmxIECxND9F4TgzITfpvERHbasTG%2BeYNG2%2Fg5W8SG7081Bj7GL1q%2F7gxSvvRF2NJuoi40jDqR9PQALHIGDUi4edSOmUO6%2B39cQ&X-Amz-Signature=5031c238cd6c0c7d1849273f596b4575c9b4c451244b32e1c5421fc9b5152abe&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOD5YNVZ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQD%2BHWKwgYcr%2FPBqpUWRJCDHX2lZ4rOsC8CFkxhK80xXIQIgKup9%2B2j3O%2FZYy8ZABgtLNdegYi1Ygap4PcOCYr0IznYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGWLUCpIwlLt1dmApyrcA1X5%2FZrdg7vti9kqiBEIIdDYWoMkA8R6YZFqdaf7QZuD3tTsLYoT1B%2BURNn9jjQXqioOwdjqo%2ByJvBDiLOXCjIe6jEeXMDYebiNDIDf28uA9UdjOPNRe6gKP4km4F18twhS3KXAQSylo%2FF7vLnxSNd4uRlMOiR9gATGVoeN9MgjYNU6YmgwcHq4eBYDhUcdhEJxR5xjgtzcDu8yDP5KtGflxqDbo%2Bh5MDKaOB6g7qXim1Yp%2FjPEd4T3Q8M%2FimJpK%2BLTHwH19jOlN%2FKwtFsElzvfrOZ0G2IYu43uHAlzaWwJwhgLcLfGcKVCCiux4gauMcj0MADZq02Hdtj65JfgK2GXm9U6XrAg7vIRVYeF8IRXRxYFsU%2BDfYHFCH2lUoQvPGWaT3d4XsTpRXFUNJ06yoWKXQ4qCTgCGvQeOBItlLR40eRZxLDV25u5mgLvw7aQp6QAv%2BDA5zJgqUneFVzps9q2Auq%2Bdl434iLFMxUWDI%2BKBBxLP7%2B2gXq3umstzcgX9gq5iMVvdZGPjvIgL0DA1H%2BQ32okJcuuBGYO8%2Fyf0DTbaLPxspdq2qxeEH8%2FAtZbZZw4GlaTEaiT8b%2BYlTWNe5QFX83QF6luWyLJzc6vkJxdx0pU7uwDVOB%2B3YMbbMOnkjb0GOqUBtav728ksR6clCDY2GVGdn2HnI3%2BYDWl74GIGrt3Ipl0nj%2BWpHQQerXPe6vko3F3OpVpZNsybtKgtUVivIZCec8Hb5PuPqjP9SRWB%2Bqgtd4jZxucA2SmveRNaIqmmxIECxND9F4TgzITfpvERHbasTG%2BeYNG2%2Fg5W8SG7081Bj7GL1q%2F7gxSvvRF2NJuoi40jDqR9PQALHIGDUi4edSOmUO6%2B39cQ&X-Amz-Signature=b98c3e82f2396584a4056a9ce1ed9634211fa1cb9924d682c6b8926976fb4ac6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROJCJVUD%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDhGG68PfykmR240gdAbGRhFCB6CJalAmIIUCUNbLokYQIhANxmNm7eRMKX5n%2BCkU%2BeJXuKEgDx0r%2Fql%2BtajuGoHPlRKv8DCEcQABoMNjM3NDIzMTgzODA1Igy8uqqTwhrwWu0oa28q3AMsG7r7I5PsYSl7wzJuBSn4EqNcgrJ%2FOfHA72IHkpdGUJ1jewoZsCJXBBAbfy8jjPVy8iQFxayxtxCvtI%2BoOcKGjLG3VRdFTTKbs55ln5D1QEQO4pg4lr9VIGQ9xmY%2BjU0czGYi%2FTgQplVyxY4UE4KYnpQ4SoGvGof5JvL68qj1lXaWIbQAIJOPC3A5KAaADUoGJvFG3TGxHUgQf89SNrI8FLMBcxiRZR8BXfADQbVEW2EqtBMy3DE55sTj3d5dGH8wTWBPfal45qxy7TR8bPyHTg1JmAaFj%2Fg6d73qQSBFSGAzvC91boZ3cNsf0sAceLub%2BW1%2F7F7W6bHX6movsaXB8rs2sKeW3AyOQImHm%2BhPaLjqgN%2FP9mtO52lkVq8jz2RvlgjpYAiloe3kFibAkBpwV4MmlKQ7JuvwDjd5vv58Kq2Ql9k1Y2yTTNx4VVau1gTkKbe600SNEt1VkHaKckGchFS%2F%2FRzmPMdzBMVXvoAWsC%2F0HSVEXfWP5fdvBmSMqUrTiwigStzMjd1xLzDIkoyfea0Hsiyu59QudAlX3Zo302uF7jMNRsbpP1C58Utj4YeQgEdGhzuKhl%2B4%2BDRKdQZFsVY4w30hDAjpYaWuG7FZi9Zzba%2B2moq%2BEb2pSzDT5I29BjqkAdgfFVwFrWEnlh1moa%2BqLjcMilmTyXGu5KtuwA90DOtXs%2Fqv7vtm2isntAANFdWkSws1qMnmjJ9JMM85z5%2F91anED%2BAq7tsDcySEkxC5HqvAp81P5c75IiTkJ50cpqMrkLi%2B66tTznk%2Btx%2Fu7Le8k7xqTMipNik8UVCnJgjetH6EuAoSV3Nh3b9Mqo5492HYEzNv3Vtpf9Cik2EYDYiezXTWq5g7&X-Amz-Signature=37c9aa272f1724769ff883c5910450ae0bd7c16bcc508b6e673c5c42cdac4e53&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUAP7CCN%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIEmhd4jTlckv19yLhOPCyvj3FbMnWm5FAsDLv0XVrMFtAiBXvC6DXQ7zKfsU5TJlV5MitmHfTfRnryiEkISBr3qztyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMoRm9WagVAWIRxfg0KtwDQXn1C9%2BaPqCRmVonHOA7yb7XkMtf%2Fyc%2Bg6QwV3AyKQEbYfUE9t7zp3qvNnR12NTscpY%2BaGxOzF%2BgWsr74hmspVeCtpQuOz14CZDGB3YNm%2FhrUwxPkXc2FdMbOpUB77fEiob4TaejFKw2SIfYX%2BQIxa0ZTzvudsUXS7IxKmcC4%2FYAtk2Df%2BnCFpO32zzLDwYhyw1KdvqYo%2FsTpeZTNULQ0VDxkC19XGp%2FelIHvHXgAnme5vBBR08z23iGyrtDFk%2BdqihGqHyQoMGJJARcG%2BL%2BnBg%2Fm7BZXERmSNirp8vRG4qaGZjn9yqqwVy2F%2FnqL%2FWXLsayfe3%2F4FQR42X25LVl0YDZTbAshPxRKuAuQFH4TnP5AWwcazCkq5tiEFHNk5Y8NLgvv7ScmHP1FNkWEhZ2dQQr2WA5IsDmW0HO2atL82ZBQjAU5RreWzqt5orN9XYmkqlzWg1q37EnhonVH7xNCMiTdlC3DNPfPAKEwu7ZcArrx3uElM19lcmv0lfe0cbyIpN%2FubkOjmH53hMc1IpR1gBFt3OxBJxG9IKfo3PZQUBmFOoOoeKDQ9u4O5x8n1dosaic5KbcHigm0Pw8GU3tuJKaRXlpwzfevn7nGGYzziZmb2WMLXaEss0HZWIw7uWNvQY6pgHgPoyWxXZ4vIJ%2FTwls7ABbX13nXvGq%2F2360LIFWFiHWIk60vEhHtpD%2Fb06aTMaSjF5SzgcDr2zj1%2BTAxwRWNCaAaEuwNsvqWTWxoB%2FfsMzUTSiJAY3gR4uOBcil9a1ApXkAtkl0%2BSYix4LaItQsB0Emq4dnMjLlo7vWBJAHT0gcgSVhZKgf9Pz%2F1ed5GQUC45g9utgh9Uni8FnlI3zDOQM%2FT17fVT4&X-Amz-Signature=a231d0ebeafdaf10be6c1287c0010f75b76d83ce90a8a686bb13ccfb939fa653&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOD5YNVZ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQD%2BHWKwgYcr%2FPBqpUWRJCDHX2lZ4rOsC8CFkxhK80xXIQIgKup9%2B2j3O%2FZYy8ZABgtLNdegYi1Ygap4PcOCYr0IznYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGWLUCpIwlLt1dmApyrcA1X5%2FZrdg7vti9kqiBEIIdDYWoMkA8R6YZFqdaf7QZuD3tTsLYoT1B%2BURNn9jjQXqioOwdjqo%2ByJvBDiLOXCjIe6jEeXMDYebiNDIDf28uA9UdjOPNRe6gKP4km4F18twhS3KXAQSylo%2FF7vLnxSNd4uRlMOiR9gATGVoeN9MgjYNU6YmgwcHq4eBYDhUcdhEJxR5xjgtzcDu8yDP5KtGflxqDbo%2Bh5MDKaOB6g7qXim1Yp%2FjPEd4T3Q8M%2FimJpK%2BLTHwH19jOlN%2FKwtFsElzvfrOZ0G2IYu43uHAlzaWwJwhgLcLfGcKVCCiux4gauMcj0MADZq02Hdtj65JfgK2GXm9U6XrAg7vIRVYeF8IRXRxYFsU%2BDfYHFCH2lUoQvPGWaT3d4XsTpRXFUNJ06yoWKXQ4qCTgCGvQeOBItlLR40eRZxLDV25u5mgLvw7aQp6QAv%2BDA5zJgqUneFVzps9q2Auq%2Bdl434iLFMxUWDI%2BKBBxLP7%2B2gXq3umstzcgX9gq5iMVvdZGPjvIgL0DA1H%2BQ32okJcuuBGYO8%2Fyf0DTbaLPxspdq2qxeEH8%2FAtZbZZw4GlaTEaiT8b%2BYlTWNe5QFX83QF6luWyLJzc6vkJxdx0pU7uwDVOB%2B3YMbbMOnkjb0GOqUBtav728ksR6clCDY2GVGdn2HnI3%2BYDWl74GIGrt3Ipl0nj%2BWpHQQerXPe6vko3F3OpVpZNsybtKgtUVivIZCec8Hb5PuPqjP9SRWB%2Bqgtd4jZxucA2SmveRNaIqmmxIECxND9F4TgzITfpvERHbasTG%2BeYNG2%2Fg5W8SG7081Bj7GL1q%2F7gxSvvRF2NJuoi40jDqR9PQALHIGDUi4edSOmUO6%2B39cQ&X-Amz-Signature=f7d8a77df651ded1f4ec551d64deb46647ca2e81591a00dbeeb1d056f4d71f4d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

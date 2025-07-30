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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQHDD53L%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClupj1763RUhSp4cmxLxrPFf1ct9SrcJMNyGJ3PtzLnAIgH2TjME%2Bfq8D%2BJ%2FNXN84aape3GUQQWuAkZIWoKFRdE%2B8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvXGTXKOpmtbHsyEyrcAzsm9oMDNygrFWfJnGKg4QdoEshqAnk7R5S7sK7QOAchZLmLHpuTh6xH%2FvgWzcjlhVvsaKLMd2vmU1VU%2F1ZVeKViT57BeIRvTwR7e%2B8YEK1vGqfHRyPWelqpmG3jQ73V0cFGmIOtIJXAgPIHV4w19jKs6X%2F%2B3VrFNVf%2BbiEk5ktVJGJiH1FKaZQev0U1T%2FloquJ6MVXkri223%2Bbq4mZRlRR5w%2BnshVnEfmhAycFDKcP76KJwLAwgFDcuwYwi0y8h0mwSE%2FaQbcRl%2BVONnPckm%2F6r56luKg6tums7FVEWcqFLlZZKOtV9smEWLgnuElhKcX0kxlBti7ZGbh3NC4AKj1Fm4ODaEmcFOoXW4xrfpmFVKtEkAeW6efDvdhpHp3eclysBYiPiCVbWIUKJyVxdy2CRr5mfKK7AqFqFFyjRKA8RhbpXh2c%2FeiMuHk%2BnMfovBKDYqd1XgUWQtBfcoiWeOZQpHBXofUyDt9h2m1vqcgGtkqLp8%2FUitc97POwCAPLXYbk9pXUhFKtZI5uueG3LFh%2BgiYsWNf2J5wmqoY0CVDYmf9Ef1YWmSdMR3I5cncn9M5CDt8a8wmeMifPZq%2FXYVYU5BCCIUzxO5OE4R84rXtnozuYSfPIQTq24VAMeMLyiqsQGOqUB%2FhfOC%2BOUbiHnm7QTSRsoDrEeW35Qb%2FZwFuZteVBD3SstJvcK1EjSeKYv9wE52QF1IR8mA0gpixZ%2BjKVuYkN4e3MEotsZ92qJiV83MqrtKUyNK89FsrIg%2FOI80swuaVo7cCVGA3FG1OSPC0nngDq7kfWPsNtJsAyjslKWjxm8u%2B88sNWN9zLvMe3GY6sMZB5%2FcfZqqqFU0LCvVGrsGrdzIzu5jEIa&X-Amz-Signature=f00a2aef4ed303b4a483267e2843aaa2e4bebfffe1de05ae00929218a6a47cd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQHDD53L%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClupj1763RUhSp4cmxLxrPFf1ct9SrcJMNyGJ3PtzLnAIgH2TjME%2Bfq8D%2BJ%2FNXN84aape3GUQQWuAkZIWoKFRdE%2B8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvXGTXKOpmtbHsyEyrcAzsm9oMDNygrFWfJnGKg4QdoEshqAnk7R5S7sK7QOAchZLmLHpuTh6xH%2FvgWzcjlhVvsaKLMd2vmU1VU%2F1ZVeKViT57BeIRvTwR7e%2B8YEK1vGqfHRyPWelqpmG3jQ73V0cFGmIOtIJXAgPIHV4w19jKs6X%2F%2B3VrFNVf%2BbiEk5ktVJGJiH1FKaZQev0U1T%2FloquJ6MVXkri223%2Bbq4mZRlRR5w%2BnshVnEfmhAycFDKcP76KJwLAwgFDcuwYwi0y8h0mwSE%2FaQbcRl%2BVONnPckm%2F6r56luKg6tums7FVEWcqFLlZZKOtV9smEWLgnuElhKcX0kxlBti7ZGbh3NC4AKj1Fm4ODaEmcFOoXW4xrfpmFVKtEkAeW6efDvdhpHp3eclysBYiPiCVbWIUKJyVxdy2CRr5mfKK7AqFqFFyjRKA8RhbpXh2c%2FeiMuHk%2BnMfovBKDYqd1XgUWQtBfcoiWeOZQpHBXofUyDt9h2m1vqcgGtkqLp8%2FUitc97POwCAPLXYbk9pXUhFKtZI5uueG3LFh%2BgiYsWNf2J5wmqoY0CVDYmf9Ef1YWmSdMR3I5cncn9M5CDt8a8wmeMifPZq%2FXYVYU5BCCIUzxO5OE4R84rXtnozuYSfPIQTq24VAMeMLyiqsQGOqUB%2FhfOC%2BOUbiHnm7QTSRsoDrEeW35Qb%2FZwFuZteVBD3SstJvcK1EjSeKYv9wE52QF1IR8mA0gpixZ%2BjKVuYkN4e3MEotsZ92qJiV83MqrtKUyNK89FsrIg%2FOI80swuaVo7cCVGA3FG1OSPC0nngDq7kfWPsNtJsAyjslKWjxm8u%2B88sNWN9zLvMe3GY6sMZB5%2FcfZqqqFU0LCvVGrsGrdzIzu5jEIa&X-Amz-Signature=aa8f61d6f2ae9cdbf01cece9bab14db37aa1b73d0f43160c0def9a800c6a5acc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQHDD53L%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClupj1763RUhSp4cmxLxrPFf1ct9SrcJMNyGJ3PtzLnAIgH2TjME%2Bfq8D%2BJ%2FNXN84aape3GUQQWuAkZIWoKFRdE%2B8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvXGTXKOpmtbHsyEyrcAzsm9oMDNygrFWfJnGKg4QdoEshqAnk7R5S7sK7QOAchZLmLHpuTh6xH%2FvgWzcjlhVvsaKLMd2vmU1VU%2F1ZVeKViT57BeIRvTwR7e%2B8YEK1vGqfHRyPWelqpmG3jQ73V0cFGmIOtIJXAgPIHV4w19jKs6X%2F%2B3VrFNVf%2BbiEk5ktVJGJiH1FKaZQev0U1T%2FloquJ6MVXkri223%2Bbq4mZRlRR5w%2BnshVnEfmhAycFDKcP76KJwLAwgFDcuwYwi0y8h0mwSE%2FaQbcRl%2BVONnPckm%2F6r56luKg6tums7FVEWcqFLlZZKOtV9smEWLgnuElhKcX0kxlBti7ZGbh3NC4AKj1Fm4ODaEmcFOoXW4xrfpmFVKtEkAeW6efDvdhpHp3eclysBYiPiCVbWIUKJyVxdy2CRr5mfKK7AqFqFFyjRKA8RhbpXh2c%2FeiMuHk%2BnMfovBKDYqd1XgUWQtBfcoiWeOZQpHBXofUyDt9h2m1vqcgGtkqLp8%2FUitc97POwCAPLXYbk9pXUhFKtZI5uueG3LFh%2BgiYsWNf2J5wmqoY0CVDYmf9Ef1YWmSdMR3I5cncn9M5CDt8a8wmeMifPZq%2FXYVYU5BCCIUzxO5OE4R84rXtnozuYSfPIQTq24VAMeMLyiqsQGOqUB%2FhfOC%2BOUbiHnm7QTSRsoDrEeW35Qb%2FZwFuZteVBD3SstJvcK1EjSeKYv9wE52QF1IR8mA0gpixZ%2BjKVuYkN4e3MEotsZ92qJiV83MqrtKUyNK89FsrIg%2FOI80swuaVo7cCVGA3FG1OSPC0nngDq7kfWPsNtJsAyjslKWjxm8u%2B88sNWN9zLvMe3GY6sMZB5%2FcfZqqqFU0LCvVGrsGrdzIzu5jEIa&X-Amz-Signature=2727882f51ef29020cca5cb8541c6e76f3243f80eafc4629810953cc822ace5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TISJJVIU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa8XyrDgbyFc483w3Val%2Ft9tFDdTAwLblUi%2F4RNc6kWAIhAKF%2FxAmyHv%2FjYPmmJmsMFNINT4W7gp71SESm8ZGOVCzbKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhYQe4qRlttFkDAu0q3APLHwKE1oob2YuvtgrS%2FJ5ZWVTVDYm0uxrxiw%2B7vZ27vosWLZH%2BkBb5j3c6hsynE1FDHY%2F7kk86UZ7%2F7FCoTZGgb2AYSxtaiZ5M7%2FX3ICUsmDbDPWOut301Hg1GnedP5E%2BMb30Z1o2R1EU73YYd%2BNH%2BlNkbSEsKt%2Bp6O%2FhhL%2Ba3k84h9nQejiCGF69BN6Qs4mJaVNEZy1QosC0WMfCv%2B%2FsfN%2Fz4x5BtD6KO8YGW3WBSQ0%2Fq5mZSYvEPBm0EBJZqUDHxeOGoei5Ieb4yl8%2FD3Zc6%2FTGNMW7fDicAtr8ov5bza1yzjXp1FS0aMZiEmBZpIxQL6hlhW2F2tz4sm8NF6Xjs%2F9lRHVvTmMVvbeFxGZL05oBuc505QvogXBlpYgnXzQPY%2FNRWut7lz5KldEgEzV84JZrDpAUpRwsZpTHltC6Yrb7JS1CDXolhYnBcm6u6%2FRjrmC%2BUfP8ZXqfoYWfgx91WCPf4ggafY%2BwjY8KxjsjZ8Y%2FFLExSP%2FuV7Md4qO6Wr%2F0%2Fv2cWNKFDLDagM9FOnG48rgPE%2BXXw%2FBlDSWxelQ8BaH29Ym%2BJuHM80LJWib%2FusJ6nUw%2FYuvCqqb%2FjMjd12VB%2F3U7p6Vli%2BxOIH8e9bpr7js6OcPpf13x0qYRa5jCToKrEBjqkAVJnudFkn%2FXvOUKbtD7feD3q84c4wXu2LS2N74pDn0z2giNjFUNASvPWh5k4wI2%2FD5xi6nMNlLyUfRH1yawFmdXNAlhJwnY0wRElWsLuWbO2K468Hd47tTtI6KlyG%2FfGxuEtj3%2Bkjd9GX6ImpFq8mWt4PZWXGY4etrUue9dx%2Fh6O8xuubdzGaZ95N00G8Hcb8NnYkRD6Q6inXCJmHXwFWDx6h%2BrM&X-Amz-Signature=8df4c0c785da1df6e17e053a358d89858a568f6c0e2fedafea519922dc53eb51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWXLEEXW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5lVGjATAjwqvxoMrpnR8HB7%2FekRTEQFbZswrF%2FrcZZAiEAhLVwwMYkcJiWEbvgZN7ncWqgl8AmgYbiebAxFE2MalAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgibd8zC13UqH40oyrcA2jn4mVcP2aC78Udp6rKozcVjxwIh9v4WB6YkJA4lWv3353DDAUBmDMoVIPfImVkZsigbfdpH1u3qhCkvGbiJuv%2B83KT4WMmciB37vHARJSGmWgNjOoEdhycaflvzZ%2FH2OH0xpv7iuzHMMrfUWYrpd5priGeXZ5pgpkLCjvrjsonxa%2B07Nmq%2BoFhWK%2FtQQXGr8tFRvCz%2BfdNWvK7j2U978jNT8%2Bjhnn1m1UQGnHITfR%2FZF4Yn6xiiyt4H1SN%2FzyFp%2FYzOr%2FDOR%2BR71gcnrQNkRuF0DB8bDkfWDzteKA%2BGZdEvZMM1ZPoCqM%2BVP%2BvyQ2PAl5Gv8KLZv4%2F7%2FqjZt%2FQ3jI1fgPamzfVynjRjhG1xC2QdtucEXH70T9w260zwoRn9dpI2YWp4Sy7o0tVfn5OJ9uWxA8WZKWzWw2f3Xdg9Q9r92Um7BrwSh0WrsWIvgnPfd6Bx6MjPViJ5WfsyI3j%2FdpT%2FFro9eG0iMQFOCXZ%2BXZlUCL%2F1gLaqrTRulH07i1toNL0Bj3T5%2BBA612K%2FJCpMoGSShASN5z4x9h%2FKxJdaJoS4hxpJDggL6%2FpwteHnKnCXuqPJa42H3MXJRHQXGC5Sv33t41wvRHjN%2BHrJiA%2F9AEz0oW9Ef2S6BYahkVCMJOgqsQGOqUBV%2BqfyHJxsqoOid9wc5N0pI4JPgIb0l%2BNtLkubLWaX7%2FX8%2FlLpUKrkcyld1Cmke%2B84%2FYGEmhIu1Ob7qceyjl%2FUTdPxVekFjs2%2F1fALmvAXdWdyE5mntVkwfVTVM4PaDw79Sa6WIpNUtvmEkHZbVSH6VASo8fFl4JSobjt%2B5qZCWEQVMfKNngS%2F954qfKasef9DXw1u2%2BKyYMJfbTMGyppRnkCB%2BwS&X-Amz-Signature=326ac449badc8fed8d671b3d79688219152132a3cb387e41d46239be7c75864e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQHDD53L%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClupj1763RUhSp4cmxLxrPFf1ct9SrcJMNyGJ3PtzLnAIgH2TjME%2Bfq8D%2BJ%2FNXN84aape3GUQQWuAkZIWoKFRdE%2B8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvXGTXKOpmtbHsyEyrcAzsm9oMDNygrFWfJnGKg4QdoEshqAnk7R5S7sK7QOAchZLmLHpuTh6xH%2FvgWzcjlhVvsaKLMd2vmU1VU%2F1ZVeKViT57BeIRvTwR7e%2B8YEK1vGqfHRyPWelqpmG3jQ73V0cFGmIOtIJXAgPIHV4w19jKs6X%2F%2B3VrFNVf%2BbiEk5ktVJGJiH1FKaZQev0U1T%2FloquJ6MVXkri223%2Bbq4mZRlRR5w%2BnshVnEfmhAycFDKcP76KJwLAwgFDcuwYwi0y8h0mwSE%2FaQbcRl%2BVONnPckm%2F6r56luKg6tums7FVEWcqFLlZZKOtV9smEWLgnuElhKcX0kxlBti7ZGbh3NC4AKj1Fm4ODaEmcFOoXW4xrfpmFVKtEkAeW6efDvdhpHp3eclysBYiPiCVbWIUKJyVxdy2CRr5mfKK7AqFqFFyjRKA8RhbpXh2c%2FeiMuHk%2BnMfovBKDYqd1XgUWQtBfcoiWeOZQpHBXofUyDt9h2m1vqcgGtkqLp8%2FUitc97POwCAPLXYbk9pXUhFKtZI5uueG3LFh%2BgiYsWNf2J5wmqoY0CVDYmf9Ef1YWmSdMR3I5cncn9M5CDt8a8wmeMifPZq%2FXYVYU5BCCIUzxO5OE4R84rXtnozuYSfPIQTq24VAMeMLyiqsQGOqUB%2FhfOC%2BOUbiHnm7QTSRsoDrEeW35Qb%2FZwFuZteVBD3SstJvcK1EjSeKYv9wE52QF1IR8mA0gpixZ%2BjKVuYkN4e3MEotsZ92qJiV83MqrtKUyNK89FsrIg%2FOI80swuaVo7cCVGA3FG1OSPC0nngDq7kfWPsNtJsAyjslKWjxm8u%2B88sNWN9zLvMe3GY6sMZB5%2FcfZqqqFU0LCvVGrsGrdzIzu5jEIa&X-Amz-Signature=3ae460941ddabcab56ff6d15bc6d678ef9800af2ed4d50dfe945e3572311542a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

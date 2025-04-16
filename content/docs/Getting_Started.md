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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPETBJAX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKBiQ2Gj1P%2B8FiKxjZvO35J8lhHMxgdShzSFe5073mGAiEAyA2TcpHS6hJrLapnMo86xlY8MkR09w1RCGRdFwcbY8Qq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDL0EEEqa2tMpFvFGgCrcA%2BA9xYn14V8fuyeV8VX1gWGY1JbN1f4mqcizeZLLva6AgiL%2Buto2u7bYlMI%2FEOKxh2L1LItV3D8RvI82yuWkbX0uizSxx2ZEBJ%2Bh6%2F0Dfdn9s9T0poMQAvNdd%2BaHeXCfxtE8IzWvKNABQJDUASbC73mx9QiMOJCGJvMRaMgB9HjWczBpbPODJOyjZCw8gQwd6TZcRhfdg7cHAX14trIo3eFiEFupm2dzHeip8R8dR1XAVW8X50bmoihkuZSBhr2gGHkLHx3vqmH1l1F%2BCG8aSicGna2%2BYgXZHo%2BZj8BUQKBpdmPCISfeHAQzoyDbo2FtKsL4yBuHU%2B30W7Uim2WNT3Kv%2F5QLADEj2ZO94xw2SiNk3JOaodaGNphz8Eh0GdiLptDJm1OX8%2FKVTPnyXd4pVIyetddViKT6JJxqM8ZKHV7pLhykeRozNm%2BGxA05%2BwLgcUBoXSqOyGuXe5aTl8e2bTLaew%2B2snAPYWG1ZdTwVYux%2BU0fiq%2F2N4SOGW1PDn1Qugo6BGd%2F9cuZMlsushfudeHPeT6L7LuBAn8LVEGAf68u03p49Z%2F%2B8L4vVHpbyuQ8SAdOqXwx8TBf8Z8v68bCAWmQ5%2FQMqq846qiQwjteVsy1rTzLUPqBWOVziGrgMN7v%2B78GOqUBF9bqheZPhJ%2FfXtFtateG6p%2FhIlYS%2FlGsWFbSv0pQ0L8j4%2BIH7GY301%2FE5q10FafRB09BS4Nj%2Fx26Gk1D0LRl%2FQQy8hHbp0bN2DwZ7eJ7SwQUNxqWcMPZVu7ZhIvVZqlYs58Bh6Fsxnd2HoCAreJxtMeYGCgs4qsOPtvajOILnegvQcOTY4S1bF0hiNhaWONiijmSUWiFMI1%2FHkaTOupX94%2Bebroy&X-Amz-Signature=605c0bfb5c5f247b6ddedefc3a6ba0ccbada71a1bca3d9d2471188ef98e7e5ef&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPETBJAX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKBiQ2Gj1P%2B8FiKxjZvO35J8lhHMxgdShzSFe5073mGAiEAyA2TcpHS6hJrLapnMo86xlY8MkR09w1RCGRdFwcbY8Qq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDL0EEEqa2tMpFvFGgCrcA%2BA9xYn14V8fuyeV8VX1gWGY1JbN1f4mqcizeZLLva6AgiL%2Buto2u7bYlMI%2FEOKxh2L1LItV3D8RvI82yuWkbX0uizSxx2ZEBJ%2Bh6%2F0Dfdn9s9T0poMQAvNdd%2BaHeXCfxtE8IzWvKNABQJDUASbC73mx9QiMOJCGJvMRaMgB9HjWczBpbPODJOyjZCw8gQwd6TZcRhfdg7cHAX14trIo3eFiEFupm2dzHeip8R8dR1XAVW8X50bmoihkuZSBhr2gGHkLHx3vqmH1l1F%2BCG8aSicGna2%2BYgXZHo%2BZj8BUQKBpdmPCISfeHAQzoyDbo2FtKsL4yBuHU%2B30W7Uim2WNT3Kv%2F5QLADEj2ZO94xw2SiNk3JOaodaGNphz8Eh0GdiLptDJm1OX8%2FKVTPnyXd4pVIyetddViKT6JJxqM8ZKHV7pLhykeRozNm%2BGxA05%2BwLgcUBoXSqOyGuXe5aTl8e2bTLaew%2B2snAPYWG1ZdTwVYux%2BU0fiq%2F2N4SOGW1PDn1Qugo6BGd%2F9cuZMlsushfudeHPeT6L7LuBAn8LVEGAf68u03p49Z%2F%2B8L4vVHpbyuQ8SAdOqXwx8TBf8Z8v68bCAWmQ5%2FQMqq846qiQwjteVsy1rTzLUPqBWOVziGrgMN7v%2B78GOqUBF9bqheZPhJ%2FfXtFtateG6p%2FhIlYS%2FlGsWFbSv0pQ0L8j4%2BIH7GY301%2FE5q10FafRB09BS4Nj%2Fx26Gk1D0LRl%2FQQy8hHbp0bN2DwZ7eJ7SwQUNxqWcMPZVu7ZhIvVZqlYs58Bh6Fsxnd2HoCAreJxtMeYGCgs4qsOPtvajOILnegvQcOTY4S1bF0hiNhaWONiijmSUWiFMI1%2FHkaTOupX94%2Bebroy&X-Amz-Signature=ee658c3a2551780993eed5cbc0615b1b558bd4a405c36a644139b6b210b51043&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAADOSUU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FInvVTkqDXc6pYS%2FvMaDbU%2BfTW2IBRcI0CjOKEtjdggIhAPOcp%2F09vw1BkY0mQ0hMKXbx2QZpXSIjbZhGMdWSvGqtKv8DCDkQABoMNjM3NDIzMTgzODA1Igze1fWwVCA2juldh2Iq3AM4zcHA4s5g3wCI3EFkLSrMm%2BzLki8VBATv5HfXdAj9EzaYhv0VWYxJbKTvthcrqVoxtg6MaFDYQpaQfqsIRe5lKR4UDbciTHKFjB%2BB3tS9Ug7qF5yqOnERsLDpnfNdotdRk1BL%2FHIFvSoQ9zHZVOqjnR%2BZ6fKhSkpvnVwnNTyJ46EIw8FV7plfPUxHriWw%2FyWdDyW%2BYqkIRelHd528xlBvb6SoVfeg4GWIn1poNffBYVdnAuPJ3Zw68pjhUP5JB1l4q5GjHHuw01wnMlZBNXnD6PnMiZ20vCKAPSX%2BddEOmLjcrFhfQ79uR2qQk0OYcIHD9l9zkK6ApTE7DIEgTROVHfdGWFkZva%2BPIdOwCPVl34Qi7QyADTmzzavvJyB1K4HZ3Jm1V4%2FVO5n4oxmpNsapj5ajMYaFd3ZcFD88DFdc87%2FYAqjWTVjnekfWjPnQOYkiLw0vAMFTiUEGPdrX8PiNayqA3KJAa%2BqRQnV7zPd4VXKcm3aSt%2BHiNexdeM%2BOtMUtfaT5OB8tP%2B3OvUifWc0RAktDoxU2CtgoxQKRlrnnmYftZMt1JoDKUy7dLCoqSEWBSW3EbQYsTwJRxFNQ0%2F4NpNpB347LLmKNVPsOIfJOJEq%2Ff74L2pd1vDG5njDh7vu%2FBjqkAb8YHKUBrSY7%2Fxlu3abj7YWyl6tdyWsQrogKZuGCWGyEUqcHQXQ26HgT5CLg4DnTUmZ%2FVIRG1VtxTzNICVK130UqMPPm9W6FfNiibg%2Bx1MWOEtcKa9E5q1r52QUWyEGZousuQDzD06ZosFKDySNDFyPycEfSokTQI5xwdIp2aO9zx4nwbj2TETvVMr2yhS%2BDUiK7xpcH5do6zDiixCkGMp%2BlLaQW&X-Amz-Signature=3f5f107a9e54a5d8bfa99067d42ebb880ffdbc0bcceac5cb0e2aa66309799774&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZUK5BL%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDvz14Lb8e2qcejgeIHCDXwCZeXpA6V3P1BMG5fpZiYAiAG%2BvzW8v%2BUZUWwZ%2BL2AIX4mbcK%2BaD9d0uegAG8r%2B4vZSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMeLsB2oukg1ehksYlKtwD1HOwoeXAjMPj6bwy1AhK36nPQErMZPI2B0my8homXWYj%2FSxWw7%2BC6qtqgiljS1kBP7HLt0Jc5P1%2F%2BVq%2FcKBwT4g%2BE2jruDfPiweVG3xLVvj7eMPIjz4a7q0p7Dhl3fGpD3QRys9J5hIsZuIiMbhWdXUlMVglWAoiPs74H1zxgOemFBqmc19fyRgTGRxBEj1Qmhbc6Iv4vDUnQ0b5hC7eH75EcZZJ83HPwAwHZAbFwqlw7NEvKLDH0oA6G5hXV1txpgoQhs6K5E9EsJAjNWA7iXQt5exnRZxiBngfMuDuuWi18ieFeLN%2BRnnoT8MQLsRVoCCP0X03qTybgy40FV6s7yxS%2FSKAUtRpaepeawhhEoZ3QR54IwgLHzcCsBP%2FjTlo6YXSKQ0pH43mPW9H9kIuv%2ByeqBPQmnQvRPU0sKVAWvq8HJr8JS5BvKpNna8nZH0Kvw103aNpyxsOrQzIeaAlwyMe2L4Ib8O62JoVS%2FHGGuLRjhjbPVqGyDDxdvJjNavWagHnOOPfWD451JpVqmzRHfRzXn%2FGuedjYyPpNNzMw9doAMJzIs2b%2BzsLVXsZzgaD1iRmdecCEsox1cZg44PHwPQFlKi0r8xWLb8p1WSdL3KFN5KAA%2F20KaT1oI8w6O77vwY6pgEDhYR8Adqs4xU2V%2F9wgiqfWP4EktZFOO8%2BGpGa%2Bg8SyddykzzT1nKQVxZIonJiSGvddPOy4JHzOhoS4CWDjdoap7rlxOWiVPanj3c29oUmM0t9fSLPpG%2BEIIUs2C96zAg%2Bov7oPuqooCAFrrKd%2FeYFsjnNdhYNcSEpxR40Q2xAL4WBmBu%2BRfHIXIPKCkLjZn%2FWpshvGeG8XT90s2bTA7oUjOohlM7Q&X-Amz-Signature=4bd187bf91d3937c529b306331a34db774c93e13154961a71f4783e2e7731368&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPETBJAX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKBiQ2Gj1P%2B8FiKxjZvO35J8lhHMxgdShzSFe5073mGAiEAyA2TcpHS6hJrLapnMo86xlY8MkR09w1RCGRdFwcbY8Qq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDL0EEEqa2tMpFvFGgCrcA%2BA9xYn14V8fuyeV8VX1gWGY1JbN1f4mqcizeZLLva6AgiL%2Buto2u7bYlMI%2FEOKxh2L1LItV3D8RvI82yuWkbX0uizSxx2ZEBJ%2Bh6%2F0Dfdn9s9T0poMQAvNdd%2BaHeXCfxtE8IzWvKNABQJDUASbC73mx9QiMOJCGJvMRaMgB9HjWczBpbPODJOyjZCw8gQwd6TZcRhfdg7cHAX14trIo3eFiEFupm2dzHeip8R8dR1XAVW8X50bmoihkuZSBhr2gGHkLHx3vqmH1l1F%2BCG8aSicGna2%2BYgXZHo%2BZj8BUQKBpdmPCISfeHAQzoyDbo2FtKsL4yBuHU%2B30W7Uim2WNT3Kv%2F5QLADEj2ZO94xw2SiNk3JOaodaGNphz8Eh0GdiLptDJm1OX8%2FKVTPnyXd4pVIyetddViKT6JJxqM8ZKHV7pLhykeRozNm%2BGxA05%2BwLgcUBoXSqOyGuXe5aTl8e2bTLaew%2B2snAPYWG1ZdTwVYux%2BU0fiq%2F2N4SOGW1PDn1Qugo6BGd%2F9cuZMlsushfudeHPeT6L7LuBAn8LVEGAf68u03p49Z%2F%2B8L4vVHpbyuQ8SAdOqXwx8TBf8Z8v68bCAWmQ5%2FQMqq846qiQwjteVsy1rTzLUPqBWOVziGrgMN7v%2B78GOqUBF9bqheZPhJ%2FfXtFtateG6p%2FhIlYS%2FlGsWFbSv0pQ0L8j4%2BIH7GY301%2FE5q10FafRB09BS4Nj%2Fx26Gk1D0LRl%2FQQy8hHbp0bN2DwZ7eJ7SwQUNxqWcMPZVu7ZhIvVZqlYs58Bh6Fsxnd2HoCAreJxtMeYGCgs4qsOPtvajOILnegvQcOTY4S1bF0hiNhaWONiijmSUWiFMI1%2FHkaTOupX94%2Bebroy&X-Amz-Signature=cc249c6853ef0c1be2f7ccdc3fd575279c45d2bac994a140b29864f85bb2e253&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

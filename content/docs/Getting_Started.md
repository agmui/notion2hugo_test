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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEW67WQ5%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDob8fqtwR6Q%2Fl%2BJQ3VEtv2NKC1su%2B0tsVF0VPUleW0hgIgVU2uLq2zo%2B3X7B6lTteqlfSimftzYI3XBjS3%2FnxlSWQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIWbqx78%2FmSSgx%2FIircA5RpCnsiOvofJsMGEKj3JHnmmQCec%2BiXV4X360Jm%2BJT5%2FC3UQnOVBsb4m8wifNuLpOCZ3JNgxQzR7uP7cjURsxwBt1lNju0uaVhla7zez8qQg3P9wAoMELyl2l7PrTUF22cwhVcqKV%2F20i%2FU2gObkEoFPvZkAz9JVqZ2HNMNVpN4%2FfuFLvFxG5dr4Py%2FV3SarUXbQmd8hNrRffSK89%2FPQZWqo9fxmrEQZI0Fe6TwKQcQhyuaM%2BLoOLep1PdivmUiI5PP74PuEmhDrMP%2FNmsnWAKn0gybi86oMqYgYv%2Bpct1VW72qw%2Bbo6wMoBrLjeCARXodqKZNvTsWB8mFobf7UNLlzsXE5B9Ynuh9mC6BgUDUWy2bAArg2%2BkXgGG06OL4wbfiv3PmHdswq%2Fq7Jw7ji%2FRzE2mU1zpyj0Un9VEUEHcM1TgLc%2FJJKfrjeNjeaZh8B4pedLbLu9fVzqEXSL9P3NqKm4Hxf%2FWqjQZI5ppowGnvl%2FwJH0wvy3O96qQ1pfgQF%2BGa01hFY%2FQiNOot%2FgX0T0OpzkSOduu%2BqOsNguI2NOe3mbC%2BpMRWAcK2iiVMxnET4Z30hgr9uzoLjfKp99vlH0%2Bgp%2FnbuAWa18KdYV4K9LtWGmd7sZT3d5x4t%2FHMMMLbstcEGOqUBrISwhDbx1RZU9m%2FeN9FTH32wmAwr4NuWAIBVhnIrTFeA37nCdx%2FVL6qLFmlln%2BVVkvc%2BTNtcOfVSoMrD2A6YHxj5mEc30IFimAE8w8rxYStKD2bVoAq1Zr%2Bg1x8cR7xIV2Tr%2FIb5yMPEVtvS3lXq6oxwDuTclcGZB1Gw9mvZD2e1HNcgdxERUOi%2BM6KFpAZVK2aPiarNfvhvDnkBgJG0ffI%2F7QiM&X-Amz-Signature=e69cb01402a5fdc40c7682fa3ac0a9bb0ebd7af19e9bd5c2913a75bc37b57c50&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEW67WQ5%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDob8fqtwR6Q%2Fl%2BJQ3VEtv2NKC1su%2B0tsVF0VPUleW0hgIgVU2uLq2zo%2B3X7B6lTteqlfSimftzYI3XBjS3%2FnxlSWQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIWbqx78%2FmSSgx%2FIircA5RpCnsiOvofJsMGEKj3JHnmmQCec%2BiXV4X360Jm%2BJT5%2FC3UQnOVBsb4m8wifNuLpOCZ3JNgxQzR7uP7cjURsxwBt1lNju0uaVhla7zez8qQg3P9wAoMELyl2l7PrTUF22cwhVcqKV%2F20i%2FU2gObkEoFPvZkAz9JVqZ2HNMNVpN4%2FfuFLvFxG5dr4Py%2FV3SarUXbQmd8hNrRffSK89%2FPQZWqo9fxmrEQZI0Fe6TwKQcQhyuaM%2BLoOLep1PdivmUiI5PP74PuEmhDrMP%2FNmsnWAKn0gybi86oMqYgYv%2Bpct1VW72qw%2Bbo6wMoBrLjeCARXodqKZNvTsWB8mFobf7UNLlzsXE5B9Ynuh9mC6BgUDUWy2bAArg2%2BkXgGG06OL4wbfiv3PmHdswq%2Fq7Jw7ji%2FRzE2mU1zpyj0Un9VEUEHcM1TgLc%2FJJKfrjeNjeaZh8B4pedLbLu9fVzqEXSL9P3NqKm4Hxf%2FWqjQZI5ppowGnvl%2FwJH0wvy3O96qQ1pfgQF%2BGa01hFY%2FQiNOot%2FgX0T0OpzkSOduu%2BqOsNguI2NOe3mbC%2BpMRWAcK2iiVMxnET4Z30hgr9uzoLjfKp99vlH0%2Bgp%2FnbuAWa18KdYV4K9LtWGmd7sZT3d5x4t%2FHMMMLbstcEGOqUBrISwhDbx1RZU9m%2FeN9FTH32wmAwr4NuWAIBVhnIrTFeA37nCdx%2FVL6qLFmlln%2BVVkvc%2BTNtcOfVSoMrD2A6YHxj5mEc30IFimAE8w8rxYStKD2bVoAq1Zr%2Bg1x8cR7xIV2Tr%2FIb5yMPEVtvS3lXq6oxwDuTclcGZB1Gw9mvZD2e1HNcgdxERUOi%2BM6KFpAZVK2aPiarNfvhvDnkBgJG0ffI%2F7QiM&X-Amz-Signature=6b74532821cf2d302e0786e2ec1c83b56a872caf895b86d6b4b1f483be7d2d81&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEW67WQ5%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDob8fqtwR6Q%2Fl%2BJQ3VEtv2NKC1su%2B0tsVF0VPUleW0hgIgVU2uLq2zo%2B3X7B6lTteqlfSimftzYI3XBjS3%2FnxlSWQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIWbqx78%2FmSSgx%2FIircA5RpCnsiOvofJsMGEKj3JHnmmQCec%2BiXV4X360Jm%2BJT5%2FC3UQnOVBsb4m8wifNuLpOCZ3JNgxQzR7uP7cjURsxwBt1lNju0uaVhla7zez8qQg3P9wAoMELyl2l7PrTUF22cwhVcqKV%2F20i%2FU2gObkEoFPvZkAz9JVqZ2HNMNVpN4%2FfuFLvFxG5dr4Py%2FV3SarUXbQmd8hNrRffSK89%2FPQZWqo9fxmrEQZI0Fe6TwKQcQhyuaM%2BLoOLep1PdivmUiI5PP74PuEmhDrMP%2FNmsnWAKn0gybi86oMqYgYv%2Bpct1VW72qw%2Bbo6wMoBrLjeCARXodqKZNvTsWB8mFobf7UNLlzsXE5B9Ynuh9mC6BgUDUWy2bAArg2%2BkXgGG06OL4wbfiv3PmHdswq%2Fq7Jw7ji%2FRzE2mU1zpyj0Un9VEUEHcM1TgLc%2FJJKfrjeNjeaZh8B4pedLbLu9fVzqEXSL9P3NqKm4Hxf%2FWqjQZI5ppowGnvl%2FwJH0wvy3O96qQ1pfgQF%2BGa01hFY%2FQiNOot%2FgX0T0OpzkSOduu%2BqOsNguI2NOe3mbC%2BpMRWAcK2iiVMxnET4Z30hgr9uzoLjfKp99vlH0%2Bgp%2FnbuAWa18KdYV4K9LtWGmd7sZT3d5x4t%2FHMMMLbstcEGOqUBrISwhDbx1RZU9m%2FeN9FTH32wmAwr4NuWAIBVhnIrTFeA37nCdx%2FVL6qLFmlln%2BVVkvc%2BTNtcOfVSoMrD2A6YHxj5mEc30IFimAE8w8rxYStKD2bVoAq1Zr%2Bg1x8cR7xIV2Tr%2FIb5yMPEVtvS3lXq6oxwDuTclcGZB1Gw9mvZD2e1HNcgdxERUOi%2BM6KFpAZVK2aPiarNfvhvDnkBgJG0ffI%2F7QiM&X-Amz-Signature=f4e33a5f325acce2ebee350f472305dfedd066e603fd557b2984ec3e7d1c2e42&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664POWOZ2G%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHP1%2FG2Bh0%2FqqgmFcJ%2BRAuLLEgyPicvZBmXIuL%2B4mu2aAiA%2Ba9dsBefUC4uYTYUWtzJd137nlQz%2BdVeSDpwu2N1CSSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXAuXRM62Y6OY5PsRKtwDfZluHkCDAlS0I50su9PXGpL2m%2BZku8wqV7EGI8uQPcK%2FX12e7VsXh0ez7YGbiKsATQ2UZruGiv8vUpAH909cDJSrRTBWZZxUFopzowJoP8v3FTdOF%2FV%2BNvnsRCpL9ZNLI7XaeBQOCafSrqJkd3xSuv%2FtoXQwczYSyeNWPAL6ykan975kY3m2sv6lfcglqP4DCPnnplbcQC8%2BXHXsDl8aHQSD4W5yJLDG2kNsE1jWQTxGhC%2BcohsLAKc7GIrPIatfpMCmexhyAGDE9yKCGpIwMGrU3LvptakPAfmBgUHra4MZeC9BS5UwHGLO1sHkYKb%2B5RRhbSP43kT8OZo38t24yr9HS%2FItJKaiChXtMGclId%2Fq8R6Rca8JyFbGVtGJ44ZQ%2FAzA3lD4CAZ6U%2F6PbWoJ16IvQ8FN33KmtTzWv9RLhmBzQaydr90A7VoOXyf7QTgyE1Xm3%2FkqxErAUBJxYIrxPUkSxM5VQ63mB79H%2F7ZuH7Fc%2B6KtdC5o%2BRdwKrjQrkTgENKiSEq2hFtwNRkvAAe2EvixLaca5y2XD10Lty700%2B7rkDDaYNLa642shYEfELdUmJ3F7q0cWQbmtwdlbcS%2BxTdJOwmrQ7399iYuaezzrXTkZwjuve5SmhpFPDYwwu21wQY6pgG7mmkB64WX%2Fr1Z6u69caFuz66xnUJK91MGEH6bzv9jVXRJvu0aBELsdY90W4XMne7GXwCA%2BjjdRL6L29igh4AHigqPZpe%2Bn3ZanSoQZDZguRmYczWDnO4ERMiKrnrZzuE7WEQZR7SIbrxsAmZ0E%2BMr72upuDUwmcjVbCFx9PbrcacyDz5M5TSPHnyUyCYisW0JP2AMe2v8mv8jZ%2B0v6BIHyiqIrOPh&X-Amz-Signature=c0964c6614304e0740b57117e0b3efffea138e65bd8a2a372b5a27976fbc79f3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5Z3VRBK%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQOK1guGaGza%2FgAxPTmfvQNSMvYq6n95k1f6SBlW09oQIhAL%2FGjXFjvnChu5jBeeOen9emebp1RvojOIw5rr5%2FMXkcKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJuOvEaLAHh0Q%2FFYQq3ANDqYDOxsTdUv4iwD7Iismkx4Z7zTbmsJLSpVabZkt%2BfCgKGjOWVm9ouBiyC3qHv%2BM6ALeFI1DE5I9IaZVAbB1LKy9zYsKHx0wPAyozdabsqsWbiTVfU3xaznlglBNASXrT8E6qlAbtygxeXC2NdEPEy%2FlSv5k55E2X8fghqVld6tz%2FfCjwLaB2fPFPR7wdAaAxywXR8NaHmcspRx8qGcAVzwsGp4RfpvFTr2GA9ilpYVKrJM2Duje0fo3SECeCo6kUdtKB54ICBv%2FpQuiYAha09ZlGCkYSs5VX%2BMZ5Zn9IPq3VOg%2FvNTgdAKJ8GdHs0gmGmISx%2BIYPfCwHMRMhaMmcaCP7TGYe9ELSHp%2BKmP50OE5IIMpyd3yOoHdTzmviKLEZBaJIvBzZBpCnYQmobZmmV7svHNbdnYYJsUujmUmMkK9jGxcqA2cGkMV%2FScXY5BFHxwWqoX4DeU30TwxxfwnPV2yyomQO5%2Brr0vvnMhF1aX7hm7qLNU0Zz9DBYFt51ot5qoB3klcmJsaWEbZciS93%2FjIaqBe5srzjUv2rOCkL1%2BtUISBHVhFNW2ll2W9PgE9yCUK5JGcHjobwsFh7YuLiz5bPfwxoiSdAB39%2FkOrtTac6stTiY6NGlY5DnzDo7bXBBjqkAVKd6jAhCXhn6iWaG7s9O1DhrIsW33zaLcGELRHQR4%2FLZKVU45uMSwtiGD8RmfCQoZ5SttelE5uyMFdJvDs9gYC1HOrm8LssAGrb99wFm7%2Fl12RmhL3QFnrK0hy2Q5JTmvkOJfnYocz7J5nlp9OgJqZjS3tIkzpN5o1C3IxyAzSR7f9hkMfTuYB88SsuJd7Svk%2BgpMlZ1xcW9pOOyTjSetSLjwnQ&X-Amz-Signature=9605480e24b3db3372b37d8f394018f7efe72502d71da1e0d08a828372512175&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEW67WQ5%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDob8fqtwR6Q%2Fl%2BJQ3VEtv2NKC1su%2B0tsVF0VPUleW0hgIgVU2uLq2zo%2B3X7B6lTteqlfSimftzYI3XBjS3%2FnxlSWQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIWbqx78%2FmSSgx%2FIircA5RpCnsiOvofJsMGEKj3JHnmmQCec%2BiXV4X360Jm%2BJT5%2FC3UQnOVBsb4m8wifNuLpOCZ3JNgxQzR7uP7cjURsxwBt1lNju0uaVhla7zez8qQg3P9wAoMELyl2l7PrTUF22cwhVcqKV%2F20i%2FU2gObkEoFPvZkAz9JVqZ2HNMNVpN4%2FfuFLvFxG5dr4Py%2FV3SarUXbQmd8hNrRffSK89%2FPQZWqo9fxmrEQZI0Fe6TwKQcQhyuaM%2BLoOLep1PdivmUiI5PP74PuEmhDrMP%2FNmsnWAKn0gybi86oMqYgYv%2Bpct1VW72qw%2Bbo6wMoBrLjeCARXodqKZNvTsWB8mFobf7UNLlzsXE5B9Ynuh9mC6BgUDUWy2bAArg2%2BkXgGG06OL4wbfiv3PmHdswq%2Fq7Jw7ji%2FRzE2mU1zpyj0Un9VEUEHcM1TgLc%2FJJKfrjeNjeaZh8B4pedLbLu9fVzqEXSL9P3NqKm4Hxf%2FWqjQZI5ppowGnvl%2FwJH0wvy3O96qQ1pfgQF%2BGa01hFY%2FQiNOot%2FgX0T0OpzkSOduu%2BqOsNguI2NOe3mbC%2BpMRWAcK2iiVMxnET4Z30hgr9uzoLjfKp99vlH0%2Bgp%2FnbuAWa18KdYV4K9LtWGmd7sZT3d5x4t%2FHMMMLbstcEGOqUBrISwhDbx1RZU9m%2FeN9FTH32wmAwr4NuWAIBVhnIrTFeA37nCdx%2FVL6qLFmlln%2BVVkvc%2BTNtcOfVSoMrD2A6YHxj5mEc30IFimAE8w8rxYStKD2bVoAq1Zr%2Bg1x8cR7xIV2Tr%2FIb5yMPEVtvS3lXq6oxwDuTclcGZB1Gw9mvZD2e1HNcgdxERUOi%2BM6KFpAZVK2aPiarNfvhvDnkBgJG0ffI%2F7QiM&X-Amz-Signature=8f91cdffc3b677cf1ee293c43ce19a4d713f38a85736af15745a75202cdb0cdb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TEPWSLI%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIBeUTF0FuVdzPQTiLQIPm0RsulFCBnFZ4FcputlEkXxdAiAbJbvKMCK15x93xVsUyJvfLxvR7NKnc5XLQ6u%2FeClNvSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAArDStQVeCV2R7yXKtwDk1YG0YTWS%2BClQvZsnujTGJ0tIxusLKNxXvkL3bS2S%2FtsU6HBpadG6GfK0Oohgr7nHzScr%2FB6zi%2Bsf%2FCX3HhR4UHIJGpVdZSqgg%2Bj5D5iYdy64M0soiXOSjsIeFmV9dwVYmtIrJmOSIMjBvRGLvjigxy6sb7zZoPz4CEl%2BycMM%2Fng1il3Tpqx1BJyG55G3U9r0mBpHFfe%2B1V%2FoB4yOXbSMSuiyxFm%2By3Z06dWCySEiy03MLvTcO0w%2BfFEwSKweIFi7gQFq3I3dfODTxpNtvkAiaJ5UO7u%2BiDyKJvsy5%2BIvsF01ikwVMAHzyiyhhOXGpUGTP%2F%2F1SWVKOJ9S%2BORWYGzAymYTiu8D8up1fonW5qG4PeaGyh3g4x%2FC%2Bghhos6aLZtGMUeG1kAgG7Z3H3bPNTk3vdTgcqlkcPOsilWBMVCsfiHrxz8kdqoPBbfV8GgmXY4cfzzSKONYGw8HklTIvHezhAk5VfcpOK78YTlL6exIjuRAiEZi6hbla3xPaqrCUqd0miyXxEXWpDKRYwNENB1mSm4Otvy18lqKGbsHgEhB%2FXNb%2BeobB8yLVniOmlcACOYqhnDGmpASOOjvPfjenkq3EogYlOlrhGdpkdO8IFYEsXxGWArb59p4oZrn4YwkPPBvgY6pgEPXGDOD5fR%2FgvpIe2SGGjoSAw5EKr%2BHQnT1UbCjx%2FAvRWyNiSaN0XgigsRYLDGMD5QnpTWWsiJr8eLhk5U3osreqcSBRYpPnWZHM3u6Ntjc13ewxrr55mFxStsHsLT4RX9mOOFC37NRnFuPvRdAaFscNdM2OZsu1CXXW4SBJTqw5Zu3eApl4yLTiSoHzu45OcguemDvTRONHwFCE3kR3WN6vetsEEr&X-Amz-Signature=270dbd76ec7410a7d894d34a2309ac082403e37017acc942334a80ef2cd1ab9c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TEPWSLI%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIBeUTF0FuVdzPQTiLQIPm0RsulFCBnFZ4FcputlEkXxdAiAbJbvKMCK15x93xVsUyJvfLxvR7NKnc5XLQ6u%2FeClNvSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAArDStQVeCV2R7yXKtwDk1YG0YTWS%2BClQvZsnujTGJ0tIxusLKNxXvkL3bS2S%2FtsU6HBpadG6GfK0Oohgr7nHzScr%2FB6zi%2Bsf%2FCX3HhR4UHIJGpVdZSqgg%2Bj5D5iYdy64M0soiXOSjsIeFmV9dwVYmtIrJmOSIMjBvRGLvjigxy6sb7zZoPz4CEl%2BycMM%2Fng1il3Tpqx1BJyG55G3U9r0mBpHFfe%2B1V%2FoB4yOXbSMSuiyxFm%2By3Z06dWCySEiy03MLvTcO0w%2BfFEwSKweIFi7gQFq3I3dfODTxpNtvkAiaJ5UO7u%2BiDyKJvsy5%2BIvsF01ikwVMAHzyiyhhOXGpUGTP%2F%2F1SWVKOJ9S%2BORWYGzAymYTiu8D8up1fonW5qG4PeaGyh3g4x%2FC%2Bghhos6aLZtGMUeG1kAgG7Z3H3bPNTk3vdTgcqlkcPOsilWBMVCsfiHrxz8kdqoPBbfV8GgmXY4cfzzSKONYGw8HklTIvHezhAk5VfcpOK78YTlL6exIjuRAiEZi6hbla3xPaqrCUqd0miyXxEXWpDKRYwNENB1mSm4Otvy18lqKGbsHgEhB%2FXNb%2BeobB8yLVniOmlcACOYqhnDGmpASOOjvPfjenkq3EogYlOlrhGdpkdO8IFYEsXxGWArb59p4oZrn4YwkPPBvgY6pgEPXGDOD5fR%2FgvpIe2SGGjoSAw5EKr%2BHQnT1UbCjx%2FAvRWyNiSaN0XgigsRYLDGMD5QnpTWWsiJr8eLhk5U3osreqcSBRYpPnWZHM3u6Ntjc13ewxrr55mFxStsHsLT4RX9mOOFC37NRnFuPvRdAaFscNdM2OZsu1CXXW4SBJTqw5Zu3eApl4yLTiSoHzu45OcguemDvTRONHwFCE3kR3WN6vetsEEr&X-Amz-Signature=1178b3e50b3ec7760ab55c61a8e1e65e760cf0a7bc9ba096379f16e3df7af734&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHQ4I6DL%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIExYunKo3h%2F0gKRerzcNpCiiUclloGhx4Vg2vBDNRLfhAiEA8m9Ai3ic2BPH8q5xTRE8eL3hnzq9oxses7LH5GcZ%2FhcqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFv%2FUniyloV0MudRNyrcA675kt1CH%2B%2F%2F3CDm1D9%2FSWe9IyUJgCgx%2BPCle%2FDSExkFcAhFOdrbNJ4Nv8Erngy1UE09pgV%2F40AQT9jFE1p1lk3sVV4ZulZxAPOdYdbIKXQlWT%2Bltgr1FmE%2FdarnX1v%2BU%2FEyToVDdJ6wkynW8ZMymtvyJJQ7ToUtmuqQHbao7gOVSx5rc%2FI%2FB5uYfVUpEXLMUCq7XYJRewZ8n%2BQmJ5rotVpSF0Um17xA63po4aw4aXeA9ge9Glxm631fch%2B4EMz5KrWAvBELABKeZrlTYqrgeuZ4nj6P4LrkxVEcxh37p%2BLLqHLQcY3YqD4psMAFML7hZBcctxoIB1ljUUMnARdnFXj8Ys1BIHM9%2FcCOM9fnc6Wr0h6k55ESpfwDaowF4kg9qJO4P9sE5O%2FmnjILI7PJjVAm7UmreFpy9cqWrumvgXCqSn877OU%2ByNAemAuA4TO9kEJvO9TDLc3GHEkHv4VNHDb17YtVyB9yApF7rFE1fQ%2B7MC6Oi2oPz2Mszh%2BTAx7xcp2WyldsiOneGhE3Ll%2FGSllflKGYV2xNjEcZeRXnT8WWbT5VFD7yJMYCKz4Nlt2bZa2iRGrvEoC6q192TM%2FnnBTjfyQOU59SWhEAYB%2B1rGoX3Sie4c5Ne2mRwJUsMKjzwb4GOqUBWXhyoDZOO5vjkY%2BIypXeBSbS5UAxnLYWglujpRNGO%2Fo3ktZBKJ%2FcrSBymClMALFM8dnOnndThzglRWuEZvEU1R5k6ccfEgsMKBDv0PT4OJUvgqWLC02NnsscYpw8ZabFpDDNOKl92DRvP4BZFDJ%2F6yZEr0%2Beu1Bk1IYZ3PZ8hecBxGI6N9v45lkX8vGdFLyFy9leM3DqoA9Q%2F%2B7JP1RASXQhB2dt&X-Amz-Signature=ec044274da4df2cebf0cb1d6c326c90c0577d1316695012c60185e233d43ee90&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJEKC7EJ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQC%2BAOdOrf6z2Rmb7s1dSjNx4kb%2BffrQ0Vtn15VNq2y7AQIgLV6DDeEWNkth7XdnaZ8%2B5aX4tjYz4Zgug%2Bpxw32CiAAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKikI35wvz3LIZnbCrcAyoL3o8kEfLoWcbqUPbxdIYty962G2WGRtWdlLUr1xywzN%2FZzRVYbktSRJL8Auntbp%2BQC3RpCviY%2FOR3Mo%2BaCpOizxUpZaju43wh0s%2FhKoIi2P5orphLz%2Bacckik3B%2FuzkOJnbr0vKGlcrY3fvCzStDLLQrFVXNvy%2FtGcyfEjwCCJXd9xpNanJMAOWPAFbS9HQTZDkOwKkLE9O0y48Q2Cxi3JEBFQmw9mKj9CsO6GJ188rdOFIVdU05AyXbwYgVLMKezDXyN1YOyFms0u1vgc3k0C%2B9MHKUBJSZ0LmW57BhkNrK7qygckQAqmXNavsUGvANuHgrzz%2BDnmAKGOYT%2FS92mcSSJOvPDN1eVEcoARsOqa9Hl79A8K4pviKsX9YHyFDIy8bKFCYFlrzT0Hi56U3wCJhtPNXc%2F1VQyErqvztVvoA%2FRUbP%2FbGb4D%2FQ7m%2Bvs01e88Z6gfg87h7yABS%2BfSMxXBGQLR7fxakUY%2FN%2BgmAOKr3a52aoLqbuoukkmyb6wOywupg6KPOlk%2B6q1Wo%2BC%2BbbTXVCR7xGaMCM4uvyCnrUFuRvA2fiFeSXqzZPVurXZZ8U6td2WEgvfbyMIoxt%2FtBCXv3kFoIBVleMQ06iKoNvDGTBt43VqXinTR5vKMILzwb4GOqUB32G0aZzU00PE9wCDhyBjDz100NDoDK%2BXxtf6grCraNRV5XFOgYIRmzxeTsc%2BXylL1b91tHSj0tlAiiBCZE54S%2Fdi%2FaSgtM8HG0lQ3h5fYAsYCDQDkZUNS69q1qf4Q559Gb33f5VYzs95Cnbnxh05IIeVMtsYsSkxdI6oGw%2Fsd7pz%2BB5iclTFDsE6fmXm7qKNMlCCmFOcv%2BYk3Mr5ZBi8RVWMXabD&X-Amz-Signature=381a3bc6287d84928034130d27f0bef009cf9dadfdb503ad0e6703498ce005a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TEPWSLI%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIBeUTF0FuVdzPQTiLQIPm0RsulFCBnFZ4FcputlEkXxdAiAbJbvKMCK15x93xVsUyJvfLxvR7NKnc5XLQ6u%2FeClNvSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAArDStQVeCV2R7yXKtwDk1YG0YTWS%2BClQvZsnujTGJ0tIxusLKNxXvkL3bS2S%2FtsU6HBpadG6GfK0Oohgr7nHzScr%2FB6zi%2Bsf%2FCX3HhR4UHIJGpVdZSqgg%2Bj5D5iYdy64M0soiXOSjsIeFmV9dwVYmtIrJmOSIMjBvRGLvjigxy6sb7zZoPz4CEl%2BycMM%2Fng1il3Tpqx1BJyG55G3U9r0mBpHFfe%2B1V%2FoB4yOXbSMSuiyxFm%2By3Z06dWCySEiy03MLvTcO0w%2BfFEwSKweIFi7gQFq3I3dfODTxpNtvkAiaJ5UO7u%2BiDyKJvsy5%2BIvsF01ikwVMAHzyiyhhOXGpUGTP%2F%2F1SWVKOJ9S%2BORWYGzAymYTiu8D8up1fonW5qG4PeaGyh3g4x%2FC%2Bghhos6aLZtGMUeG1kAgG7Z3H3bPNTk3vdTgcqlkcPOsilWBMVCsfiHrxz8kdqoPBbfV8GgmXY4cfzzSKONYGw8HklTIvHezhAk5VfcpOK78YTlL6exIjuRAiEZi6hbla3xPaqrCUqd0miyXxEXWpDKRYwNENB1mSm4Otvy18lqKGbsHgEhB%2FXNb%2BeobB8yLVniOmlcACOYqhnDGmpASOOjvPfjenkq3EogYlOlrhGdpkdO8IFYEsXxGWArb59p4oZrn4YwkPPBvgY6pgEPXGDOD5fR%2FgvpIe2SGGjoSAw5EKr%2BHQnT1UbCjx%2FAvRWyNiSaN0XgigsRYLDGMD5QnpTWWsiJr8eLhk5U3osreqcSBRYpPnWZHM3u6Ntjc13ewxrr55mFxStsHsLT4RX9mOOFC37NRnFuPvRdAaFscNdM2OZsu1CXXW4SBJTqw5Zu3eApl4yLTiSoHzu45OcguemDvTRONHwFCE3kR3WN6vetsEEr&X-Amz-Signature=ecad6fec1d2689cc1ec2beee1eb9988a1ff0976788fefe3973816f4b185e801b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

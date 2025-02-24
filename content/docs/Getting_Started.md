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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYRUTBL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHkOgOZAO6lGQbgLFrapFn8IsM1AII99scIPt8s1GuOAIhAIX%2F%2FRlvPjmmt4GTBDouE040OiBhFGZiRHLTFv1Sf1gFKv8DCC4QABoMNjM3NDIzMTgzODA1Igxxq%2F68pvRtfqEssBQq3AP2rM77L5l2pmGIlcgvqvt05hG7hvndZXN6YnksNKypC%2BHmWogwpi3q6103AVXwPokuV1GDkfxI1pTjh9d3nn1Gtkq%2BspPNvjfLi8ysZaPQgMIWPZQO1lYvXyBWk5MemiO8%2FvfKc0pUYWxEHNnoenVScI%2FSGG%2Bi42JQ5YgO4v91rUcfgUxfV9au3%2FvFbf8cucGvqOSjsKkZ6J7DYrWXkYPC44Jxasj9MhNNHDgBWw4HelyI1ZfLE0MhqNO%2BHTw1sIoV86z7Y928RHI6R3QjnFNwpeb2f4%2B8WgyN%2BwYp2LHmqXvytfyNLuTPcdG27g3gpA9348MdTxcXcGAh65fwMJCo%2FXiQd2U%2B1cxu%2Fy0S1cxlzjD7c%2BIvzp6dFI4t05mVVrfnWHMklT7T7PN2N7cwKlyJhueuIHStzGjJobAL3hVGzK6NxJ99uTWXYYsKuAoJc%2F0YEYJUaBV0lAGBItUxskECcXHKhxDNggwtsNR9jzLbvIyAru9OyeDAd8600%2FLhtiD0W1rhvXBw6OIuCpv%2B1HTLHSH8WdH5mhzqOsqGR9VWoYjTSMjPj%2BuPsN0B%2BkaPoPxFGaL%2BiLefJPgrtuduBFYuusFrjTNqpmhmwNafGposKJJZ7t1NFJXxtD5hxTDF1vG9BjqkAf6w%2FSiHogzFM7fkusmrAR22T21TB3y0TRW2w5uZk4EM0r2rYKGG6H3heKG7y1HgGOycCRdafSGAI9i7PXIHZQSf7JS7y9wTSu6J6vRJQ%2BlEUHOWezJJcVaM1LTAJD9D1kZi7Hgr3Kxe%2FHVgJMjT0BUHLu80mmazG0Aw%2B%2Be574hXD8x8VAolS7H49j4BaICqNY%2FtCWe423gzdUXjnwkp%2F%2F1qsUnf&X-Amz-Signature=0656e98fb0b1affbaf84047f9b7cb9fcc6a8bf57bccf804fdcc0da733ce503ab&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYRUTBL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHkOgOZAO6lGQbgLFrapFn8IsM1AII99scIPt8s1GuOAIhAIX%2F%2FRlvPjmmt4GTBDouE040OiBhFGZiRHLTFv1Sf1gFKv8DCC4QABoMNjM3NDIzMTgzODA1Igxxq%2F68pvRtfqEssBQq3AP2rM77L5l2pmGIlcgvqvt05hG7hvndZXN6YnksNKypC%2BHmWogwpi3q6103AVXwPokuV1GDkfxI1pTjh9d3nn1Gtkq%2BspPNvjfLi8ysZaPQgMIWPZQO1lYvXyBWk5MemiO8%2FvfKc0pUYWxEHNnoenVScI%2FSGG%2Bi42JQ5YgO4v91rUcfgUxfV9au3%2FvFbf8cucGvqOSjsKkZ6J7DYrWXkYPC44Jxasj9MhNNHDgBWw4HelyI1ZfLE0MhqNO%2BHTw1sIoV86z7Y928RHI6R3QjnFNwpeb2f4%2B8WgyN%2BwYp2LHmqXvytfyNLuTPcdG27g3gpA9348MdTxcXcGAh65fwMJCo%2FXiQd2U%2B1cxu%2Fy0S1cxlzjD7c%2BIvzp6dFI4t05mVVrfnWHMklT7T7PN2N7cwKlyJhueuIHStzGjJobAL3hVGzK6NxJ99uTWXYYsKuAoJc%2F0YEYJUaBV0lAGBItUxskECcXHKhxDNggwtsNR9jzLbvIyAru9OyeDAd8600%2FLhtiD0W1rhvXBw6OIuCpv%2B1HTLHSH8WdH5mhzqOsqGR9VWoYjTSMjPj%2BuPsN0B%2BkaPoPxFGaL%2BiLefJPgrtuduBFYuusFrjTNqpmhmwNafGposKJJZ7t1NFJXxtD5hxTDF1vG9BjqkAf6w%2FSiHogzFM7fkusmrAR22T21TB3y0TRW2w5uZk4EM0r2rYKGG6H3heKG7y1HgGOycCRdafSGAI9i7PXIHZQSf7JS7y9wTSu6J6vRJQ%2BlEUHOWezJJcVaM1LTAJD9D1kZi7Hgr3Kxe%2FHVgJMjT0BUHLu80mmazG0Aw%2B%2Be574hXD8x8VAolS7H49j4BaICqNY%2FtCWe423gzdUXjnwkp%2F%2F1qsUnf&X-Amz-Signature=4c3056d505c0b9888693e0707b0de326c4732b7100bd5f9fc51711e2d8647a74&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOU6GTPH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHRDw3do3z1sOPCm8CVmwBhcNR%2BosMIts7dvwzXXhG%2FAiEAqtXZ6HSYlcrgJCLlTi0zqSrarDv%2B6NG2iQrmFV3F9MAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEd7ZJbeSznZO5GeECrcA2CttvGXTqmOH3wxHCNGb26I8qxq6Zcc8HGTw6%2FYOQJ3SxuPE8kWHpq31UsncYFEQxsu2nn9CEsKvznAxb2bl8XAy7T4ebqMlHCUhIHm3gUn14kq46%2FJuRJWZlANybFTvfVjWAcU8WqxFGvQ1pt3d7Jnf%2Bf%2F8XHGJTKUVex%2Ff0IVDhoE%2FwnDQJA8ctCFPvyr5stso8AkZtR18PtwMmrOtmXPjTmLnWUe7bxfPYQkFJuFY49My17zTSGuehpmcxCQlw3qmfzBUQEcQAvV7hBO6NH61tcTN4B%2FEiTBBtPcTw97VISz3YQLuDrYNVk2TaAe8QG9kstezEwRJN202XohC%2FhMdrFbDckmfGpjsMRrMq6hMgMnk7vmDPjEKB4pK997YEzmxLHGDbMHIWnDagQ1NyEsRwKfysyHRBym%2Be4oU03qRIXgHSRn0ByrnOnOYGA2qZQpyWNYmISLfbdzRQn9Umc%2FDugGikNivnyU7b%2FPNZv8HJM0zd2%2Fw4EKOBw2yA39u2Bg5iduE56ias4%2BULyAlFAfLnocHx1l1tPQd1m5yWBNRdPS%2FkDx2Ji1c8ApebFo0ItguKNHfc%2F2v95NOm5Yv%2Bu8usj%2F%2Bd4010Rpj4fII%2BUNe%2FJuKI52udXaG5TEMJfX8b0GOqUBW3pv5Oe6wOcK%2BtgmbhSzTlHeKA7z5%2Fs0i68J%2FlA274t1iQCfN5pA4j4ZYzzkKHtBgTcEDD2Dbpivt%2BLU8nhnimOwMHgtr6a5%2F3fYDR%2BXw8NGE04vv%2BHwFb4b5hGl8WPuRoMfAb0CnrpfeLaQP2lS7NkvtvDP55YdujgLWjUXUnbaH%2FkPGBOQIEsjCf4fRnJ1869q8sfGfpYY8JjJdKuxHh0%2FEB9L&X-Amz-Signature=dd23920bce56546fb6ea1fbfe929f517c4f43ad619872c2aa5366aba10b00510&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T2Q2OVX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCieYu8pQtr9U8s1X%2BsN%2Fm5WP25XldQVBC1F3ewAEHuVgIgY147SRG8Z1D9AU2X4V31yaI%2B9ovgcAskMAoObsoXALcq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMHwA4uGna1%2BRFFYGyrcA4ZduVVaBrCb6EJ96C%2Bw1igSJhrG6CDW8%2F8bkV0jg%2BVCNOTcLy8C%2BGyDcDveGjhpLVNrgGBN527dDFGojrgGWkaaf2Mf2t7%2BVw0PVSAAcOw1uP8UOPKs9mu0SrLSpavY%2FhKmM2Fb3cnZwsneglo%2FSlb9Mh%2BSE9M8%2BnslZZDoQWZONjC7220oDs3hd7JQS5Y0SQ1%2FcP3Cw4s3YPrUNOtTpxM4TFDPmlfDzZd8hmKeU8cnHWHtdpibXz5i6MhHxPAugYUAg9%2FMZOGUhixzZVOEAENRWgeOcp0t6gcvB8h6PgsvlEbAWIMVqTbbBiGwVfpJz%2B8ZAR42H8UU8XJ2QQ07n7yoa4%2BmF3mRTp%2FKAps3WTIbriYBpKCxh2hTC4VnWkBVq0rHTvq%2FfquA3ziYjXIm7l%2FEFVY%2FZ4rMF68dosuRgFHsczRtXFV4g58pnz3xcKxEqIi6rWH0Nl9ltl80VE64DwejPUTwN1sVnQ3p984NhMlOOFZ1z182Jf%2BaVMgJPpHa9P3fKTrQ%2FJgLnB8%2FNZZufQKkeXcKAXgFe2FSPm6Sf1q70K730VEovPPH8UNVOBhoFvbtb30bp5IqzImLRgGTl5ge%2BuwMb4FefJT9HU%2FIqV9aRIQeMMw3G%2BDoKND1MKHW8b0GOqUBiKikxK5Gq%2B%2BLSnQOxr7fUAc5vr%2BsQLHLrBwmeVB6uzt5QCjTB1W4pyAf5WPTIBoXmq6jsYWVaxIOSC4zIgbHWavyEtunJGjTw3N3BCIIQhvRn0MIWE5UuNUR%2Bi98fGTD4qcjltEbpBCy%2BG5KjkTw8JWb2J4tswjDtVxZR0JDVfEzGKosMV4xI4uyuzWBfpQ%2FbxaOemzW7q3y89uyyo3pQAFekA1i&X-Amz-Signature=d537b6c44475d8c92f4a10b45b9d63a2ee07aedd0994b1b86abe6cf886f136c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYRUTBL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHkOgOZAO6lGQbgLFrapFn8IsM1AII99scIPt8s1GuOAIhAIX%2F%2FRlvPjmmt4GTBDouE040OiBhFGZiRHLTFv1Sf1gFKv8DCC4QABoMNjM3NDIzMTgzODA1Igxxq%2F68pvRtfqEssBQq3AP2rM77L5l2pmGIlcgvqvt05hG7hvndZXN6YnksNKypC%2BHmWogwpi3q6103AVXwPokuV1GDkfxI1pTjh9d3nn1Gtkq%2BspPNvjfLi8ysZaPQgMIWPZQO1lYvXyBWk5MemiO8%2FvfKc0pUYWxEHNnoenVScI%2FSGG%2Bi42JQ5YgO4v91rUcfgUxfV9au3%2FvFbf8cucGvqOSjsKkZ6J7DYrWXkYPC44Jxasj9MhNNHDgBWw4HelyI1ZfLE0MhqNO%2BHTw1sIoV86z7Y928RHI6R3QjnFNwpeb2f4%2B8WgyN%2BwYp2LHmqXvytfyNLuTPcdG27g3gpA9348MdTxcXcGAh65fwMJCo%2FXiQd2U%2B1cxu%2Fy0S1cxlzjD7c%2BIvzp6dFI4t05mVVrfnWHMklT7T7PN2N7cwKlyJhueuIHStzGjJobAL3hVGzK6NxJ99uTWXYYsKuAoJc%2F0YEYJUaBV0lAGBItUxskECcXHKhxDNggwtsNR9jzLbvIyAru9OyeDAd8600%2FLhtiD0W1rhvXBw6OIuCpv%2B1HTLHSH8WdH5mhzqOsqGR9VWoYjTSMjPj%2BuPsN0B%2BkaPoPxFGaL%2BiLefJPgrtuduBFYuusFrjTNqpmhmwNafGposKJJZ7t1NFJXxtD5hxTDF1vG9BjqkAf6w%2FSiHogzFM7fkusmrAR22T21TB3y0TRW2w5uZk4EM0r2rYKGG6H3heKG7y1HgGOycCRdafSGAI9i7PXIHZQSf7JS7y9wTSu6J6vRJQ%2BlEUHOWezJJcVaM1LTAJD9D1kZi7Hgr3Kxe%2FHVgJMjT0BUHLu80mmazG0Aw%2B%2Be574hXD8x8VAolS7H49j4BaICqNY%2FtCWe423gzdUXjnwkp%2F%2F1qsUnf&X-Amz-Signature=dd12e95e1aca140477e705009fbe4d2a6ba46cdfef02a13b9b1ebf2cc18add9a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

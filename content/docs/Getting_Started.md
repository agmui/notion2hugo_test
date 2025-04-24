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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STVCAT7Y%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDYcSTbPU1gqjZKmB%2BzBeitEKlUit1k42Rmq2A2qaL8KwIgHSJm820n%2B7nShTyIIDOpMQGckSvktewsgDDz5j8ybcsq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDC3g8L7mCA55HNTkryrcA1fxdCAANEdMGoqxFSruObJZeJfMl2Z%2BAYv1UCzsppNZZgYMmBTRG47myDabvWxJiz9gf8xgR9mYUF1lPLuvk8Skh%2BRSYYKxdcG314m0GHmb0JQNB36cxou4uCuFjuGKdiArFkXeJDAH%2B77j4iyQ0mpwy8xQjccnrkaCIdaehsak6ynaMUv77QzE5%2Bs%2BHhksXoA61i01tJSC4QGPVcW7of6knl8V33YBsVvAtXW2FstzjkR16tPBeH7uqxE%2FOQ2xeWgWVCzeqiBB%2BsYObKGcvoc0l5B7fBQVgFcKrKSze846hWRmNDYzzLLu5x66Fxg1NS8ekUV4v996kNm2qngHUfXBd00BP4wt1vmwo6F5k8vnl9aCJsZLZXEU1RjrqJcWkLWLUWAMzpx%2F8YvGc%2BYrD%2FgWRYt2cYSKesNhgQ3htr5gdDmgYsLPEhiKP1XZtchuZM%2F8sB%2Fa5EldXpQ5KPlbUrAoGqopTQAYpZpyLOQJ1VIlUCV38nOVrwDPsEIVHXTxJYF1dKHA9oG25y4d0IUKcUtwHxFfibbFjrjUCZMxrT3E%2FpNpc9d66ZJuQKDzdXCa8OH8YG4eHcSG04CUBSCxYXJBBKQmRXQTAy1z1SnCARX9vPKGtPApILpgyrFrMP6DqcAGOqUBMJ%2Bj0RawA842N%2B2k9xHsPRNMMUYPZryhnAmQBdDiZKJmD6PitReTdOUpyVBUVFz6QVbxk6KPV2O77xcc46rS2VDn8o3xEi1Cy08IkQm%2FAGgrOL3XS0D7mO1kmB8pyp9LcdQFeEVi%2B2pRJBTyNWZpuEerQ6oQDrdh3sQ0UXMexdy41vyKniP0FmRpO%2BJREYpxR0OcXERPznBr62WDrTrGPj3rVw%2Fw&X-Amz-Signature=aadc8fd49bead1b474d1df6814a17f80277fd5b4d84d3819cdb65743b0398881&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STVCAT7Y%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDYcSTbPU1gqjZKmB%2BzBeitEKlUit1k42Rmq2A2qaL8KwIgHSJm820n%2B7nShTyIIDOpMQGckSvktewsgDDz5j8ybcsq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDC3g8L7mCA55HNTkryrcA1fxdCAANEdMGoqxFSruObJZeJfMl2Z%2BAYv1UCzsppNZZgYMmBTRG47myDabvWxJiz9gf8xgR9mYUF1lPLuvk8Skh%2BRSYYKxdcG314m0GHmb0JQNB36cxou4uCuFjuGKdiArFkXeJDAH%2B77j4iyQ0mpwy8xQjccnrkaCIdaehsak6ynaMUv77QzE5%2Bs%2BHhksXoA61i01tJSC4QGPVcW7of6knl8V33YBsVvAtXW2FstzjkR16tPBeH7uqxE%2FOQ2xeWgWVCzeqiBB%2BsYObKGcvoc0l5B7fBQVgFcKrKSze846hWRmNDYzzLLu5x66Fxg1NS8ekUV4v996kNm2qngHUfXBd00BP4wt1vmwo6F5k8vnl9aCJsZLZXEU1RjrqJcWkLWLUWAMzpx%2F8YvGc%2BYrD%2FgWRYt2cYSKesNhgQ3htr5gdDmgYsLPEhiKP1XZtchuZM%2F8sB%2Fa5EldXpQ5KPlbUrAoGqopTQAYpZpyLOQJ1VIlUCV38nOVrwDPsEIVHXTxJYF1dKHA9oG25y4d0IUKcUtwHxFfibbFjrjUCZMxrT3E%2FpNpc9d66ZJuQKDzdXCa8OH8YG4eHcSG04CUBSCxYXJBBKQmRXQTAy1z1SnCARX9vPKGtPApILpgyrFrMP6DqcAGOqUBMJ%2Bj0RawA842N%2B2k9xHsPRNMMUYPZryhnAmQBdDiZKJmD6PitReTdOUpyVBUVFz6QVbxk6KPV2O77xcc46rS2VDn8o3xEi1Cy08IkQm%2FAGgrOL3XS0D7mO1kmB8pyp9LcdQFeEVi%2B2pRJBTyNWZpuEerQ6oQDrdh3sQ0UXMexdy41vyKniP0FmRpO%2BJREYpxR0OcXERPznBr62WDrTrGPj3rVw%2Fw&X-Amz-Signature=11981716606b85c1d8db91940a40cdb866eb335e1b069ad97b6f7c155810a1b1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYPZXYGX%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDsN%2F8cH9N5%2FupJiCfhcQVK1khcaYUbNijYohaW2WRYvQIgfZVDdkxLYoQHCNI56GRbiylQkyiG2kLrurSi9whgp%2FIq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDKhlmof%2BDQH%2B%2BXvEQCrcA4dc6eA3KtbJ0Rm27JV%2FI1ytS9vFFsbFpQSwv0CvcDdSc5K332oPlhXEpRtZ3alWqtm5eX0uH3TYQ8QfTSqWO%2Bch9K6UHDlGPZMD6ED9K2s0XV3I1FzlneBvRqJqWIha1ISLlkdh336cual2OBtn7%2B7WuojdeLDaYr6g4mfuGBVgY02hnEUvLQPCl%2FlS8xNtMteB1fkJen8%2FX0D8YwLveZNdOCuebFbCwKj0LgAOTvq0sMZlDXxV8YPdWaKPyhyeFQvVOAAGFnwyYdL6TPYjvgAmeCu5dFGAVORf2UdcA%2BlWiq7nIrFNSX4aXoKGfX3QSXgA2XGLWm6BR6UQQbqWNQZZXBrbBDmLMABfI1i2FvBfML2gGrcv62%2BjZOhy1DfZ1At20BQRzndmkmCkAITJxyKe2RGQVQbP5ZJkghU5zJOZSBp6FOAxflzty7ii0Qnzqb8%2FvskkXlNg%2B%2FzgKvyg4xDnSgmng%2B%2FOkGA6OQ9Xv9RYVgbtAQXudyCN6WNCZ2lXx3R80mEifS%2Bxp%2BRWYkx%2FQJJuaWD3Q5DvFnLfzhRibKr9v%2B5A5Wugftcp7vrl56F8xvLOS0JSPN4LQkGh0zSXcxvm%2FK%2F7bAmO88kYbbW7kpjGP%2FMKZIckmZEAv6KOMPyDqcAGOqUBUldyBUkwAPNQ8ny2qzD8sTknBllfurIV1JLY%2BwJH%2BRYFaUg62VYlWJKEJ3Aq9id%2Bnwth%2BfxmAViL6rOcRpFDCyZ1WGKoCFP9aqxpvptLt5T44hoH%2FIkeHbjCdF5aNglBNZW4EAMhiluHg7TsxQJ5r8zI3JvjgOxMKUxrRugNYketSvV%2FHJMIzC310sCNuDzjXYjowV6K%2FiZ03Ad2p82%2BBvNvfVZq&X-Amz-Signature=7608314701c2db46c802a254c4c67777fd47d33f636e549fa80682ddd9b9c9a0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAEJGI7T%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIAGN6tvY%2Bw2%2FhpE1vmU1UTGB%2Fj4%2Fyi7E6Bjj0RxwTZuoAiAzlPjAoIFnoOo7L%2B86dW7qwIpfY4kWSZGrf2yPIb3JPCr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMR0DgAWip2mC46nggKtwDKv%2FZ7Uajxvb%2FmZpU7KLqDU%2FrPbmb7TGppcU3q0%2BoJZnWUzEyrKePfM7%2BVKPGoJXdJtKd17B1uC4l6eKEIdlvapC3h9p5rjT9aBp82trblGKotc29W8Tb2ocGBXFSU7z4eWviG%2FUrCZmkxQ%2BcRn3qdwjHsFfJauBDmVfC1ChNDuQzmear9FSSpxHc%2BduZ%2FCVFrcXY06cXGsquJ%2BtDfB9eJSsNQheNsSAkNdnx2qybtS7%2BajTyLON%2FLdHtXVRQ6viyPSaW6ylLq%2B24HRYGZd6cv8uWiH63%2B%2FyExE5Asns9YDwNj8XKRL7HmoWDZnXBlQ52BiOMbXVK3jzMuDHGZ%2BKGN%2FvriCslC2idUTkNPbtChHxvpTheUmwuOUAnOzDCYzbu3bTMt5pzStnDrqTzTJwTOg8Jdsyj3%2BIqoLThf6Ff4WOuLs4Wtvv6J%2FK5i3yBk7K7J%2BtHAZ1So53FOpy5lRFIYM0iujLFQ01viW5KQwlRm%2BVErvrUTFCMCex9B%2BbuDDOdI%2BzGOM5HVyUMcddmQubUtZJVHP8Yr6q6t%2BrqgylTDvS6lZpUcTE5htArp%2FuOQcpGX0EquTKnXjuruEvC0uBN70IsUDomb3W2KH7Q%2FrV52tMN4HhwCbm6OILgRJkw9ISpwAY6pgE99tyfuAetgmRD%2BHSDIqGBTW7vOpS7wDMwk6Pnt3oZjbKZRhNe%2FORMl%2BhQ5%2BpEoxOshEYTGiFbR%2FrzLvcHjsJg4DesAUidBW6UXIO%2Bk5CUziXBgmjZZiNmGRrTIFGoI8CenwOrEPxf8j2J25zK56iyCZJHDuduVjpWzf2mtcEuJeRXc5CdVhJi0GgeZVsSq9GC44JRI9BPEFGp7S0eVVPT%2FzNwis%2F1&X-Amz-Signature=2c72a112c982f74383622249a452eb8a49b9052d6b74c89bb92cf9e650eaa1e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STVCAT7Y%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDYcSTbPU1gqjZKmB%2BzBeitEKlUit1k42Rmq2A2qaL8KwIgHSJm820n%2B7nShTyIIDOpMQGckSvktewsgDDz5j8ybcsq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDC3g8L7mCA55HNTkryrcA1fxdCAANEdMGoqxFSruObJZeJfMl2Z%2BAYv1UCzsppNZZgYMmBTRG47myDabvWxJiz9gf8xgR9mYUF1lPLuvk8Skh%2BRSYYKxdcG314m0GHmb0JQNB36cxou4uCuFjuGKdiArFkXeJDAH%2B77j4iyQ0mpwy8xQjccnrkaCIdaehsak6ynaMUv77QzE5%2Bs%2BHhksXoA61i01tJSC4QGPVcW7of6knl8V33YBsVvAtXW2FstzjkR16tPBeH7uqxE%2FOQ2xeWgWVCzeqiBB%2BsYObKGcvoc0l5B7fBQVgFcKrKSze846hWRmNDYzzLLu5x66Fxg1NS8ekUV4v996kNm2qngHUfXBd00BP4wt1vmwo6F5k8vnl9aCJsZLZXEU1RjrqJcWkLWLUWAMzpx%2F8YvGc%2BYrD%2FgWRYt2cYSKesNhgQ3htr5gdDmgYsLPEhiKP1XZtchuZM%2F8sB%2Fa5EldXpQ5KPlbUrAoGqopTQAYpZpyLOQJ1VIlUCV38nOVrwDPsEIVHXTxJYF1dKHA9oG25y4d0IUKcUtwHxFfibbFjrjUCZMxrT3E%2FpNpc9d66ZJuQKDzdXCa8OH8YG4eHcSG04CUBSCxYXJBBKQmRXQTAy1z1SnCARX9vPKGtPApILpgyrFrMP6DqcAGOqUBMJ%2Bj0RawA842N%2B2k9xHsPRNMMUYPZryhnAmQBdDiZKJmD6PitReTdOUpyVBUVFz6QVbxk6KPV2O77xcc46rS2VDn8o3xEi1Cy08IkQm%2FAGgrOL3XS0D7mO1kmB8pyp9LcdQFeEVi%2B2pRJBTyNWZpuEerQ6oQDrdh3sQ0UXMexdy41vyKniP0FmRpO%2BJREYpxR0OcXERPznBr62WDrTrGPj3rVw%2Fw&X-Amz-Signature=47a3bf14be8c6ae10bf4276ed9fda7d2e5bb3ee5e97189fb09eccda9e7126a9e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

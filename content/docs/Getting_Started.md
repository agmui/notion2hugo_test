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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZB37JKN%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8nKZb7G%2FMx25Zmyx4TGUSXBkse68sYSVL6GHINUlL8AiAqX42DH9mxVFaHlkhkNnHWq%2FofwtDbkq1zK%2FR5xI8a9Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMdQuSSPl0Gpt9oXgXKtwDAiYz%2FdTWNOQSh%2BfQZOl9dskzFk8qXjFjkkKmaJmL21Q0kcRQw0EIWXbFfYdA2xF%2BipZw4%2FEgGP%2BgL%2FdT9ik1DrlZNHad%2BOjq3DWL%2B%2ByNYXmTcQnLrVjTXpcYDciBfq9Dd5hfrK0hdGyB6I9KoJHtitnfjIiv2MuYKLrr%2F5FER9zeNZDwqrhFq739ee90EY3vacl6W71UlQt39xWI9ngR4ya0EXlqb42p0wQsGursBVMJqM9Hrl%2BotWEVUsMmJvi9Txl2YXFWJcmYlODam9kL2A72ycf9YbPqb3Xdi1MXclGMql4VlXWMz1i0Wzugi%2B4OX5%2FQ%2FP5HLvao8KrH2zyaaUmGQBcam5FJ6RFZlzh%2F1kzrLWiBxxolxngCaK58RPV9YQ99qSi3qTyqWGc8DHi1v2BWUDAA5Qbm6PIXV1wWYXp6FuLZ5JI8W9JPe4NFyE%2Bb7%2B1T51h23knGTA0y57q1LZ1oREQv9zfQ5GU5vutOaE%2FzyUUbzh3Bd0EtOd3QrnbVwfnhbcVyf2PfcpN5HReaZ%2FJJQPMhnqA3c0VJE%2B9dkYv4YH1h6nUvT8B2prrcg0FpaFC2%2BXLxFQnBq7oMXU0b%2FTmGjQzZFqyTD6RnpLtsSTJO2a7D6FlwNxlkyYcw%2Fv3WwQY6pgEfCXIB%2FS9gCkDr84iOlHbb5NW9f69ElqDWN1EwHp7SxBTShtI4gHHdbAdMlVGtDepmlY%2Fil9CbC96N9BNg0Vut%2FZTw3YKcic5A6rJu11xhIZsXGcdfd01M4h8ZjhQRQU%2B9QHsf9BkwMWMvasuORoHdwMFBCwOYuIpZJFxVI7qgdTvDI%2Flqv8XSZwxIwgQUNEjMmcRLe7sF6Sttkw%2BPL8wXs57vmkSX&X-Amz-Signature=471ccfdbbe4afa001ff3adda0e9539a241908d905b92eace51ad0ef1363d99c8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZB37JKN%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8nKZb7G%2FMx25Zmyx4TGUSXBkse68sYSVL6GHINUlL8AiAqX42DH9mxVFaHlkhkNnHWq%2FofwtDbkq1zK%2FR5xI8a9Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMdQuSSPl0Gpt9oXgXKtwDAiYz%2FdTWNOQSh%2BfQZOl9dskzFk8qXjFjkkKmaJmL21Q0kcRQw0EIWXbFfYdA2xF%2BipZw4%2FEgGP%2BgL%2FdT9ik1DrlZNHad%2BOjq3DWL%2B%2ByNYXmTcQnLrVjTXpcYDciBfq9Dd5hfrK0hdGyB6I9KoJHtitnfjIiv2MuYKLrr%2F5FER9zeNZDwqrhFq739ee90EY3vacl6W71UlQt39xWI9ngR4ya0EXlqb42p0wQsGursBVMJqM9Hrl%2BotWEVUsMmJvi9Txl2YXFWJcmYlODam9kL2A72ycf9YbPqb3Xdi1MXclGMql4VlXWMz1i0Wzugi%2B4OX5%2FQ%2FP5HLvao8KrH2zyaaUmGQBcam5FJ6RFZlzh%2F1kzrLWiBxxolxngCaK58RPV9YQ99qSi3qTyqWGc8DHi1v2BWUDAA5Qbm6PIXV1wWYXp6FuLZ5JI8W9JPe4NFyE%2Bb7%2B1T51h23knGTA0y57q1LZ1oREQv9zfQ5GU5vutOaE%2FzyUUbzh3Bd0EtOd3QrnbVwfnhbcVyf2PfcpN5HReaZ%2FJJQPMhnqA3c0VJE%2B9dkYv4YH1h6nUvT8B2prrcg0FpaFC2%2BXLxFQnBq7oMXU0b%2FTmGjQzZFqyTD6RnpLtsSTJO2a7D6FlwNxlkyYcw%2Fv3WwQY6pgEfCXIB%2FS9gCkDr84iOlHbb5NW9f69ElqDWN1EwHp7SxBTShtI4gHHdbAdMlVGtDepmlY%2Fil9CbC96N9BNg0Vut%2FZTw3YKcic5A6rJu11xhIZsXGcdfd01M4h8ZjhQRQU%2B9QHsf9BkwMWMvasuORoHdwMFBCwOYuIpZJFxVI7qgdTvDI%2Flqv8XSZwxIwgQUNEjMmcRLe7sF6Sttkw%2BPL8wXs57vmkSX&X-Amz-Signature=1cf9f4967a4b6156a1a5362dd84f46bbcfcf40ae4d76ac4a9909bbccf9817601&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZB37JKN%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8nKZb7G%2FMx25Zmyx4TGUSXBkse68sYSVL6GHINUlL8AiAqX42DH9mxVFaHlkhkNnHWq%2FofwtDbkq1zK%2FR5xI8a9Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMdQuSSPl0Gpt9oXgXKtwDAiYz%2FdTWNOQSh%2BfQZOl9dskzFk8qXjFjkkKmaJmL21Q0kcRQw0EIWXbFfYdA2xF%2BipZw4%2FEgGP%2BgL%2FdT9ik1DrlZNHad%2BOjq3DWL%2B%2ByNYXmTcQnLrVjTXpcYDciBfq9Dd5hfrK0hdGyB6I9KoJHtitnfjIiv2MuYKLrr%2F5FER9zeNZDwqrhFq739ee90EY3vacl6W71UlQt39xWI9ngR4ya0EXlqb42p0wQsGursBVMJqM9Hrl%2BotWEVUsMmJvi9Txl2YXFWJcmYlODam9kL2A72ycf9YbPqb3Xdi1MXclGMql4VlXWMz1i0Wzugi%2B4OX5%2FQ%2FP5HLvao8KrH2zyaaUmGQBcam5FJ6RFZlzh%2F1kzrLWiBxxolxngCaK58RPV9YQ99qSi3qTyqWGc8DHi1v2BWUDAA5Qbm6PIXV1wWYXp6FuLZ5JI8W9JPe4NFyE%2Bb7%2B1T51h23knGTA0y57q1LZ1oREQv9zfQ5GU5vutOaE%2FzyUUbzh3Bd0EtOd3QrnbVwfnhbcVyf2PfcpN5HReaZ%2FJJQPMhnqA3c0VJE%2B9dkYv4YH1h6nUvT8B2prrcg0FpaFC2%2BXLxFQnBq7oMXU0b%2FTmGjQzZFqyTD6RnpLtsSTJO2a7D6FlwNxlkyYcw%2Fv3WwQY6pgEfCXIB%2FS9gCkDr84iOlHbb5NW9f69ElqDWN1EwHp7SxBTShtI4gHHdbAdMlVGtDepmlY%2Fil9CbC96N9BNg0Vut%2FZTw3YKcic5A6rJu11xhIZsXGcdfd01M4h8ZjhQRQU%2B9QHsf9BkwMWMvasuORoHdwMFBCwOYuIpZJFxVI7qgdTvDI%2Flqv8XSZwxIwgQUNEjMmcRLe7sF6Sttkw%2BPL8wXs57vmkSX&X-Amz-Signature=a012df38e2f973055dfd9b7026c7120d6ed7d1d094791c6f5b7e0ceffebb6a4e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBAE2RJE%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvLv4zat49JQzHKikpHtniq6UCRGZEymU%2FuiwPBgl4TgIhANGJXPHvrTBa5wdrchd2SUmg3d%2BQHiCeEY3QBxvzaBA9Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzKsHk8wbiB921yWV8q3AO8vGLfh0Q2pGOPl7k9vJtQSJp9V7XDrJjFzL5aee2vBDAWd7YKhdMZZtFkQXu3x3g2xv80KIs3kYybR5TXYEy1OZtB1kh5eb9Wh2U6TJ08jqBu2kHb4bsbVMitbE2UTC4Hx3ZjtS1gipwS2raz5INIpzflw8X6M9PoaKI9Pfn8i1RtUTZRlO0uoZ2rvlxRF0r%2FjqHJiLnMTQ9LqIpjoreRXF3MXciuvIN6thBsFl44C5vr4qSg5hS9Mj1iC%2FBaMW%2BI%2Br2KbA5%2Fsk5XJjCUIpmOX%2BxA1LILZCgsvteH4CXMtUOgpIkefxyFIH%2FHsbEzU9dduzDjfmaRW1uePpyGu7p5qBi0SWiwFzXhX37bche0ANGaj8XglzJmywjinRZ8MEbkj%2BDmZJ7aMJHWNNwMXmfs5CJdyVlQG%2ButsmDLhJDnaL89JCRFo7hhrCojZ83nYABgTmvsxCQ7zz%2FyQnfXPw3OWaKyX0sPptR4mr4bvFZw%2BAIV05Gd4Wmo6pgMa47Ji5nDXYC6vVtEdsBlLvoQtf8kqhiTRoW4vtUxdFUTWVxxrHZwqA6wAXPcIUUix3unNTE%2FuOADEGP5jOfxZp%2BxZZKXu5RiCvJFdzyKzJyLm72ISxCLTLT0Aa7jbmgSvTDW%2FNbBBjqkARERq3bV4O7iqMWTCMbz7gm7zJoAHLiAGMuE0UfBYxm1rxOmHBC%2BQ5KQhYJzLEuZvOz6QV69mQOrxKpwOFWOi5BQgXe77xmOTe%2F5XHTqTTp7rw0myshCgoQQTbSqDjk1vDV97ZBtAO7kwQhtXAk7GtwY7fvplrVV4tdBW0HnCfX6YARke5H0RFvDemd%2Bf1ZR2tw4GYZ%2FoYTuPjzaY9pu0NgXis%2Fi&X-Amz-Signature=e09aaf42f72fef56bba380bf7844889d0e4018af93a3c85a8c05552351000101&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRIEBIXV%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWITYislaqXnRLtOi8zaE4oSUtmkKYkwdZsxFfK8UNwAiEA0UT97XGmUmZ4OV8aQFluHv3zJL5b0jFdhXVr9rGyOrwq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDL37HmzYbEYaiCrSbircA7kz%2B8cdGSlzYkhYbDXBx%2FP2fw%2FNzHaPQmWEtgefsIfQYFsjUBHIRMU6FrIf%2FbpCBLxFmm3nTiODYvurRiW3fY30hVdpey2lGTTHnuWIhUoE%2FYnPSj4rJqWTbNVxEV2%2Fv4cfVMPIcu0A1Z4XbHc9kMks8SlaTSRtKLpYu8NO1YXJN5RV7%2FQ4BfW%2FhxhuetUiXH%2BcVU%2F7VtE4trRqN00IHI%2FvbNKG1LNGtZ61fxfRm%2B10lbGWrwss8Pf8vUVHQO8UDOh7BzI6PoAnfkvvue4d6Y1YDgxIWJa%2BRDbxgTzDNSINmmabj8prKoXiZIx4iAqTL9900F4UsJDQAMJsUseOD8PGugab6h%2BDjttWQZotdc7T%2B%2F0T2mk%2FqIW1QtJjAZSly7cLXYUIfbPirpGgDpQ6YU9Am%2BuLR41mTGKdlCCeVuMEEPHMvepC2muQH30HiC7HAvgkX3M%2BEjvdhSM%2BGurq6rlP77tjCtNl2xJuwGewSUQU9wstv6BLttrpwqz%2FAa4K1skvR4%2FZEOTqpghwc6cCdegWVfaOxAJje%2F2I6fjzRY7ud7O4wqjgqYGd0zyseWJ4mUMCzKmGZfnhBn9V48bD1YJWpyvJLHofBTAW%2FuhW52BKea%2FjY4aNpc347IhqMLL81sEGOqUBsthif5ZyhSe3gCdIOI2haH1vtz8r0hUFtdRTThoLfYNikwRtrcTQM%2BYmeAvTSjTQLZ%2FOnRSmuvukDtqq7jqsDdZSQQFbc44fm8lCyoul46UfsILfs4P0Pzn2Tx4USXAlDeAVAcx8Kt2lr7N7kz7V%2BEg6d1wL%2FbCrT10i%2BVVn6AdIIA2y8rCtYiP0vParY7X%2FEk9lSh2VUs%2FsAocQKHfHSx1kcba8&X-Amz-Signature=8129367d9a01264ae021e24ae4c35ad8c82dd320a2266b5fc73e5afc92f60bdf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZB37JKN%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8nKZb7G%2FMx25Zmyx4TGUSXBkse68sYSVL6GHINUlL8AiAqX42DH9mxVFaHlkhkNnHWq%2FofwtDbkq1zK%2FR5xI8a9Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMdQuSSPl0Gpt9oXgXKtwDAiYz%2FdTWNOQSh%2BfQZOl9dskzFk8qXjFjkkKmaJmL21Q0kcRQw0EIWXbFfYdA2xF%2BipZw4%2FEgGP%2BgL%2FdT9ik1DrlZNHad%2BOjq3DWL%2B%2ByNYXmTcQnLrVjTXpcYDciBfq9Dd5hfrK0hdGyB6I9KoJHtitnfjIiv2MuYKLrr%2F5FER9zeNZDwqrhFq739ee90EY3vacl6W71UlQt39xWI9ngR4ya0EXlqb42p0wQsGursBVMJqM9Hrl%2BotWEVUsMmJvi9Txl2YXFWJcmYlODam9kL2A72ycf9YbPqb3Xdi1MXclGMql4VlXWMz1i0Wzugi%2B4OX5%2FQ%2FP5HLvao8KrH2zyaaUmGQBcam5FJ6RFZlzh%2F1kzrLWiBxxolxngCaK58RPV9YQ99qSi3qTyqWGc8DHi1v2BWUDAA5Qbm6PIXV1wWYXp6FuLZ5JI8W9JPe4NFyE%2Bb7%2B1T51h23knGTA0y57q1LZ1oREQv9zfQ5GU5vutOaE%2FzyUUbzh3Bd0EtOd3QrnbVwfnhbcVyf2PfcpN5HReaZ%2FJJQPMhnqA3c0VJE%2B9dkYv4YH1h6nUvT8B2prrcg0FpaFC2%2BXLxFQnBq7oMXU0b%2FTmGjQzZFqyTD6RnpLtsSTJO2a7D6FlwNxlkyYcw%2Fv3WwQY6pgEfCXIB%2FS9gCkDr84iOlHbb5NW9f69ElqDWN1EwHp7SxBTShtI4gHHdbAdMlVGtDepmlY%2Fil9CbC96N9BNg0Vut%2FZTw3YKcic5A6rJu11xhIZsXGcdfd01M4h8ZjhQRQU%2B9QHsf9BkwMWMvasuORoHdwMFBCwOYuIpZJFxVI7qgdTvDI%2Flqv8XSZwxIwgQUNEjMmcRLe7sF6Sttkw%2BPL8wXs57vmkSX&X-Amz-Signature=247ad62d00fadad13d8ab954267814f555c652ef17f76bf8c2651c5adf8bf362&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

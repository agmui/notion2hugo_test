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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AU43BDR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHr75vFIJCFSwRIoJwI%2F7sPgJeLUCXBX8XBlwziowY96AiAcTSe%2BMHRGFgK3s%2F3YB8J%2FhgRy3JUyJi98jh%2BBvwWILSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMqz0osTCPSwoBnlN7KtwDNqiUT5vaY1FLeJ6QwgEroFHKEafHftv5vNMeR25oAuSQ3%2B5MaZeLuBe5c0qJlTpjlproPq72%2B3lPRCRz55JFEIovLbdynsGAQ5nYdTgLmc5fP9GCWHCIVzxx%2F5E1pKX0oBNkRaIoB6sGArvBszR06zFkk5I6LAJEj9RI74%2BsZrCnDVvYKoGjbAG7qlMfYjDTsZXUY4Ou%2BKVI6tnKxMai58pbJLmD%2Fgv9WE8%2FxuVa1yRuyqxVj%2BgRMqiVNEOzBZKq7305QgSi2iatk8BELUIG63nGK66lOWGF6BD7IY3E9VtAnCq9NrOINTStfDfxl7IyWMx%2BFS9gvWNyIkZAsI3%2FQUpKH41m4IuDgPnJJR4j5hlMvzUkEnY7O8GE8%2F22i4gUhs%2B2AUyL2bZ7G%2B%2BUsTYmI21zPATVp%2FrngDDVxhevLbBGi4%2FtdXFpvddiOLZpHy5xeWP8Uv%2BVFhwO%2BqAYepFnCrQn%2B5TfiAUsebRf9JUKYkO7HrmdsuNF12cZ3WW45wlnXP9yKK1H6QrdHvhSYL2ovGHTxqxu4T8A6ejtohwbZzBGuryHsMm2IfsEfYrvYE9SiCs%2BwVGkkRIp4Xb150aEKd4W0Z5nWkvSEn%2BW5b3Xpmhyg8RiN7XQhccmqk8w9NX6vwY6pgGS3GDDBdM2DM2OROn4JF%2FKm8XblrLkGqkH4741Yg2MKDjYA6cuwO8Y6s0zQDHVmgl18cixHSLmiwjE9DFCn5mvH8tIPha7OFHj%2Bdza6h2kv7MmxacAgCn%2BLEd2uVrJhA%2FaEvgNhdS6GSZuUP9ZN0BU42508CF9msXPva4jkm7j8YhsUtY%2BUQwsVNVAWFvraJruat%2Bqt6j5hzIgE4hajnBu15fAtM3o&X-Amz-Signature=c70339689ce4fca5e2d462be31f5a10cb8b80c2323ab904284fe6517080b8a7a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AU43BDR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHr75vFIJCFSwRIoJwI%2F7sPgJeLUCXBX8XBlwziowY96AiAcTSe%2BMHRGFgK3s%2F3YB8J%2FhgRy3JUyJi98jh%2BBvwWILSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMqz0osTCPSwoBnlN7KtwDNqiUT5vaY1FLeJ6QwgEroFHKEafHftv5vNMeR25oAuSQ3%2B5MaZeLuBe5c0qJlTpjlproPq72%2B3lPRCRz55JFEIovLbdynsGAQ5nYdTgLmc5fP9GCWHCIVzxx%2F5E1pKX0oBNkRaIoB6sGArvBszR06zFkk5I6LAJEj9RI74%2BsZrCnDVvYKoGjbAG7qlMfYjDTsZXUY4Ou%2BKVI6tnKxMai58pbJLmD%2Fgv9WE8%2FxuVa1yRuyqxVj%2BgRMqiVNEOzBZKq7305QgSi2iatk8BELUIG63nGK66lOWGF6BD7IY3E9VtAnCq9NrOINTStfDfxl7IyWMx%2BFS9gvWNyIkZAsI3%2FQUpKH41m4IuDgPnJJR4j5hlMvzUkEnY7O8GE8%2F22i4gUhs%2B2AUyL2bZ7G%2B%2BUsTYmI21zPATVp%2FrngDDVxhevLbBGi4%2FtdXFpvddiOLZpHy5xeWP8Uv%2BVFhwO%2BqAYepFnCrQn%2B5TfiAUsebRf9JUKYkO7HrmdsuNF12cZ3WW45wlnXP9yKK1H6QrdHvhSYL2ovGHTxqxu4T8A6ejtohwbZzBGuryHsMm2IfsEfYrvYE9SiCs%2BwVGkkRIp4Xb150aEKd4W0Z5nWkvSEn%2BW5b3Xpmhyg8RiN7XQhccmqk8w9NX6vwY6pgGS3GDDBdM2DM2OROn4JF%2FKm8XblrLkGqkH4741Yg2MKDjYA6cuwO8Y6s0zQDHVmgl18cixHSLmiwjE9DFCn5mvH8tIPha7OFHj%2Bdza6h2kv7MmxacAgCn%2BLEd2uVrJhA%2FaEvgNhdS6GSZuUP9ZN0BU42508CF9msXPva4jkm7j8YhsUtY%2BUQwsVNVAWFvraJruat%2Bqt6j5hzIgE4hajnBu15fAtM3o&X-Amz-Signature=6da0ccb512ce703886aa16baefbc90232ba039ce0425730bce4cc99cdb3bf2f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y7SVBX7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbMbgbF4Vy9lqoNKid2QIgkU5x8MmzDq3bXP7Xfl5P6gIgRgOtpAhIxTMJNyTnUUxqrOYw8bfjOgATFbjFYJN0QgEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBvdJ4X94Kyydf82DSrcA6zVRsbPRrmQClrgfcnrHOdRGJSssAOqX2Ob8RIwlDxrSbJ%2FBUwq5lhsY3l5GK%2FgWem0mDN%2BdCBmGgqCnTPAkaawCzv5OJlRXsTGiwm0r1aPMeQblFeOi56ybFeKZmFGXnU9un8wvr4sG0iaaN%2FOQQUaf97X2ZX4PKkhZjUgmtd5iN5RfJURdOrJPTcwHZ%2BqFB8hodMCROV%2BuoXk2MPeBk%2B39CPJxQUFoIo31T4n%2BL9xQf%2FnwiBt5a9ssPlnubWXhbt0cbrgiQ%2BaIgxMQrfyuxkaCHnzMh%2BoiY04KbLzGhIv1B2LN2OUtKCz9IfDBCh4OHuRAFaU7aCf6WydOdjAvN8UZdzY9jOtdOhEwrC%2BCPu7Rs1%2BiiHuUf4xdzW6yrTKGmIuPcE9%2FzzI0tb0vevqI2oVI9y1gNqXFKwbOPT242fQrcLpqr7Bvtm6AzE3CfFd2Wt9vFRuO1bUh80mC3y8ASqUL7k%2BnxWqx7FxQj6CpbwcoNYB2baY5L9uf9kj3QCkdKkdIOOYx%2By2%2BaSjxDuZpd%2FAtNkQ51F2edUvxorCsCLjfhxAK6xl0XxGhiZEiXlwSX5%2BUOlpiV%2FYSzIS7iMRQ7%2F4UBep9lxC2iioRxxUx5qcAVxWl1PLIWUksUIKMI3X%2Br8GOqUBIv9kma4maCyeyzsNG46eiJulg6Jzi0p%2Bwve0EiPlx5pc72uQlhBGKCUh%2B2UJB3HNG715tOv4r49SRh6NcTgspF8BBe0da2jtBo%2B9B2J4dSO8K8F4hq2znEw448tbKSKgP6DJ1aHhqn71x4AcUi7PoXuMKJG%2Boq3W9nw80ofIwqGnB%2FSsleEfGzuNTnEWmPELjSk%2B2PS0P75y79cMT87tLaeltaGU&X-Amz-Signature=e0575239cf26c0e61af019d82bc8c5a51102826dd9582f7cac62ca6a7be8bf11&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZTFBHAV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVN7SGjuUO38NVuodhSQfcKvTNfsowiceuzvXTatVX%2FAiEAh5ZR0PelvuZDv0Q8OZiHg%2Fx6RzoPjXJ9tE0h5PAFGIgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLAzO6NgB2vEzLyHmircAwkKFk6A0e9eIOzDpl%2BK%2Bp65Q2I5eVp9hElqu%2BadCRTvK5IHodnkNiej1Ju2Z8T8hHvmnmDmTXjVRKeMOKYJNxlmndfoCkkSWMilfaLsxwHVkXH7WJcDwPueZ0ZHXHsk%2BMhJeRyifi6HIbOnvV%2F5MRIKjltjTyNMchCiuXHlN24oDWk%2BzHPkECPMCZQ3f6W7Mhh2qTrl4hNgnw72g0jEVpFCtA5mUk1ELWXc1XzEYuyccZub0ysPxmLKp%2B7Lv0MC3uXi%2BhPdCvuUUrxJAsYmGWXVqIb8uLAdYO2foayio7S7ukfS%2FrYxYZ3aMqfoaqbF3x0AbLKgWxtF%2Fg8YX%2FFWUCUCHDH6aYXE%2B%2BFOyFGPo8FG5x2vW8Vj1gxWUY12dbBJhYQrZ8vWrfFAn5%2Fj6IJhNqeiHwY%2BrHUy83hOlIZY%2FX8ShSVPCDG5QjTBoy1e62J3gLtXoeuQU8gVugVpiyVCFx02c5qMy9Wp7%2FuMAPci%2FHIIDitQqQ41OrJXVJj9se0XXqA0h5FfcmNNxd%2BbJzRxdA12UyvA%2BjCyY%2Fvti3r4l6UHUOgyZTm2njaQiOen8nNSqV0p5jeZBrLan4T%2Fkgz5hOaE20N%2B7qLc9OvGwBd8Lv4BllWPlAdbjs9FU%2FjFMPHW%2Br8GOqUBICnncNZNfijq3XMTT%2FF3vUnoFCaTv1tUjlNTTyxMxWWHQ4P3uuSqBSvFErIFlw2StyA%2BeF%2BBbmGuJJ29y1eocU0BnLpiI4fgYpdwrvKTObGtldYAKijHa6HF2vNEkdgXjxXoR%2F72DlojNracnBbu60SeMZRKlmDSPpCH7xyKQwQiUBxB%2FDUUHhV7%2F8%2BmL%2FL7oDhoNQ%2FYDxKcVLgEVfdDOU%2FzBiZV&X-Amz-Signature=2a1ebdd4481ebe0b1f77cb75c17492c239db3aeb5b2638720e5c9eba25c228a4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AU43BDR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHr75vFIJCFSwRIoJwI%2F7sPgJeLUCXBX8XBlwziowY96AiAcTSe%2BMHRGFgK3s%2F3YB8J%2FhgRy3JUyJi98jh%2BBvwWILSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMqz0osTCPSwoBnlN7KtwDNqiUT5vaY1FLeJ6QwgEroFHKEafHftv5vNMeR25oAuSQ3%2B5MaZeLuBe5c0qJlTpjlproPq72%2B3lPRCRz55JFEIovLbdynsGAQ5nYdTgLmc5fP9GCWHCIVzxx%2F5E1pKX0oBNkRaIoB6sGArvBszR06zFkk5I6LAJEj9RI74%2BsZrCnDVvYKoGjbAG7qlMfYjDTsZXUY4Ou%2BKVI6tnKxMai58pbJLmD%2Fgv9WE8%2FxuVa1yRuyqxVj%2BgRMqiVNEOzBZKq7305QgSi2iatk8BELUIG63nGK66lOWGF6BD7IY3E9VtAnCq9NrOINTStfDfxl7IyWMx%2BFS9gvWNyIkZAsI3%2FQUpKH41m4IuDgPnJJR4j5hlMvzUkEnY7O8GE8%2F22i4gUhs%2B2AUyL2bZ7G%2B%2BUsTYmI21zPATVp%2FrngDDVxhevLbBGi4%2FtdXFpvddiOLZpHy5xeWP8Uv%2BVFhwO%2BqAYepFnCrQn%2B5TfiAUsebRf9JUKYkO7HrmdsuNF12cZ3WW45wlnXP9yKK1H6QrdHvhSYL2ovGHTxqxu4T8A6ejtohwbZzBGuryHsMm2IfsEfYrvYE9SiCs%2BwVGkkRIp4Xb150aEKd4W0Z5nWkvSEn%2BW5b3Xpmhyg8RiN7XQhccmqk8w9NX6vwY6pgGS3GDDBdM2DM2OROn4JF%2FKm8XblrLkGqkH4741Yg2MKDjYA6cuwO8Y6s0zQDHVmgl18cixHSLmiwjE9DFCn5mvH8tIPha7OFHj%2Bdza6h2kv7MmxacAgCn%2BLEd2uVrJhA%2FaEvgNhdS6GSZuUP9ZN0BU42508CF9msXPva4jkm7j8YhsUtY%2BUQwsVNVAWFvraJruat%2Bqt6j5hzIgE4hajnBu15fAtM3o&X-Amz-Signature=db58eb1596488a59d54867ced30ca51bb39b15dc1508e41add132ddfadf7a1ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

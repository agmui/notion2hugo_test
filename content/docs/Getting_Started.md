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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHH3MQF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIF7aM4OKjLhHIGb9SLDVgQEZoBGPKIU88pay4mSpjl4cAiEA6vxYdXdvSrHeD3ZJiR0CXxLqcxQ6dbmJxZAOY5ZOcNYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FBzdjD3bIxywiBgyrcA8cL%2B89%2BraBayIvajbAiiNn4sIyGUeTsUOTyGG%2BM0cBW9K%2FlefqLtjlGrhT00ndgMCoJRS4QXjCpA6arL6PBMVyLt2cxf8QzvBiEzgWyLXwR0rTw1nbTG7BIEhX9%2Fkw9sfepn3UlRmOc6tA1mXyCPek5a4rL8ZATBT05oAqXylp1EOgmzXV887lJyQWwNirYgEpl%2FAxJHYYUPe9hHTXCEYeEcXzGtVxBxUOpigvc%2BSZzMI8um3zhHVmM4X6YU0mCKYx9N58XsE4bjUAZEjDjOwyfO5DpPmzy8nrZLwFB%2FcIdIqxUPVacGUXbW3mkyb%2Fg0MFVLhzsXmtI1W6k0rgzUAAUwTFPOAmx1UeyL7XI8BGf%2FzvL1sYQIeKTY9p4%2FdBEDe4iSoV1JywEtO1KqPynFzf8RCsnVTm3wNyNGl9FZzPYvSOPVI1puRGbVA0P2VPZ8ebtE8htBo894NcLC1cT9Lrw0RfZw8yKOQh7CW%2BrZRp8ZqA%2FiDD9RorICfqiudaWB7cEGWILFVeOYvlOHxK4Hz93kUYIB1bklB6X7lODyCKTG73ZqZHXCXziblZZOtCLO%2B0nSJAHCOo86h3iU6%2Fx5hE%2FicE3lyZSF0%2BzMW6tfjjcP0xD%2BZjvvmBfi2dBMKGcq78GOqUBDzc6%2FW6Hs0Gd%2FZMuPQtA8AZLkP1YAJeTJ21VSRl%2BYtCWfuVXo57XtQhp6QjL5rLKuTTHxMV3hVno3BFXZ6XaQkdt7sr%2FgqWThEhnVWokrAHjfyp94p5ydb1Wl5bYjUcooz3Nd%2B4pbq%2Fm3%2F1kaujCRFv3XnDEscELjb0d3FQZJFxh403koWHiNFenR5fxlDxj45uSIywneGe9CUUc5nz9%2Fch%2BPPYa&X-Amz-Signature=f60aa47e8f3bafe6db379918c980faaa99f50d1f6213559c201993ce572f5443&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHH3MQF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIF7aM4OKjLhHIGb9SLDVgQEZoBGPKIU88pay4mSpjl4cAiEA6vxYdXdvSrHeD3ZJiR0CXxLqcxQ6dbmJxZAOY5ZOcNYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FBzdjD3bIxywiBgyrcA8cL%2B89%2BraBayIvajbAiiNn4sIyGUeTsUOTyGG%2BM0cBW9K%2FlefqLtjlGrhT00ndgMCoJRS4QXjCpA6arL6PBMVyLt2cxf8QzvBiEzgWyLXwR0rTw1nbTG7BIEhX9%2Fkw9sfepn3UlRmOc6tA1mXyCPek5a4rL8ZATBT05oAqXylp1EOgmzXV887lJyQWwNirYgEpl%2FAxJHYYUPe9hHTXCEYeEcXzGtVxBxUOpigvc%2BSZzMI8um3zhHVmM4X6YU0mCKYx9N58XsE4bjUAZEjDjOwyfO5DpPmzy8nrZLwFB%2FcIdIqxUPVacGUXbW3mkyb%2Fg0MFVLhzsXmtI1W6k0rgzUAAUwTFPOAmx1UeyL7XI8BGf%2FzvL1sYQIeKTY9p4%2FdBEDe4iSoV1JywEtO1KqPynFzf8RCsnVTm3wNyNGl9FZzPYvSOPVI1puRGbVA0P2VPZ8ebtE8htBo894NcLC1cT9Lrw0RfZw8yKOQh7CW%2BrZRp8ZqA%2FiDD9RorICfqiudaWB7cEGWILFVeOYvlOHxK4Hz93kUYIB1bklB6X7lODyCKTG73ZqZHXCXziblZZOtCLO%2B0nSJAHCOo86h3iU6%2Fx5hE%2FicE3lyZSF0%2BzMW6tfjjcP0xD%2BZjvvmBfi2dBMKGcq78GOqUBDzc6%2FW6Hs0Gd%2FZMuPQtA8AZLkP1YAJeTJ21VSRl%2BYtCWfuVXo57XtQhp6QjL5rLKuTTHxMV3hVno3BFXZ6XaQkdt7sr%2FgqWThEhnVWokrAHjfyp94p5ydb1Wl5bYjUcooz3Nd%2B4pbq%2Fm3%2F1kaujCRFv3XnDEscELjb0d3FQZJFxh403koWHiNFenR5fxlDxj45uSIywneGe9CUUc5nz9%2Fch%2BPPYa&X-Amz-Signature=2effea8cba0cf309e20b15559fe09967eb9790bf0ba4891d516e9a5a84ac06e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG6RDWEP%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIBBF%2F9a47DfO%2FkTD0WrSPPDXPsXO0DR5gndVTSWG381xAiAgCQmeNaRfi0FGq%2FlC0E6g7RSXCr%2BYGadXc%2B8orV9BPiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B%2FzFCubznMBp5J2FKtwDUIhs0hu5G39WxRsNesCZy1ORHSi8jLQDdGHdGyNAhk23UAYab%2F0nm8SF7zK6FMbHxvWC%2B9oS7DAxLAnL9cV%2B5DpGfimgDrCfzpj%2BCcVKJ3d3WRm6UFiOVpHXdrmzAmUX91jwLZu7j410TsywejUhD%2FIV7fP3LHgEmjKaYLV97fUCEupLfjW99X36fuA%2FZyJHtj7IEsJI2zMCf2qV16bHjiudEW%2B3rmCumR%2BeIpIh9B6uXsErUQmpW5ky2fiRnkib6T2ORvo%2FJJGz2eB%2FnD6PrF6BlKzVijfQbRBLVeBVl3BWjVeNVwrgftVeITpBKoJZrjNzAL%2BKLCFRNlt0riZZbkIFB4o8S4xPhEGXQ1SKAnuuRSPNUwGcUt4Prk7vU%2BBshdVzE2Nzwa2FtD0wWfrW%2BagxZ3RbwNKXlUxHVgVXozVRaVrC57jwzyNm%2Be9AaS2CUm9N8zjyqU3l5G5GwczwysLM%2FyVx8Nsd1WYuTDAcjRnd02JZ0yIw9z%2FCm0AWUtBvBuLUvdkwd95rMmf8vw%2FVH8KBqqa7A456d9XZdyk4cTrPkbdvJJ0kFj%2B5MbpUA3rV%2FndVVXgfZKUdo2Fj36fw9IDJlJu5tQcuAkZ5TVcvnfSELx297it1XCW73LIw%2FJyrvwY6pgGdwtnVIPzcq%2FE2MQNyQMV6gIMXmwJC8wMHWRLP8mpAWpLRfyRvn4mPmoXkHneIZDA1lNTuTlKoUtZYlirzWCd9SSXBPj7t89Fo4jMd%2BTmIeiON9GEx0EL58yb10UalL%2Boe3G9EGARn351vWUGPF%2BTCoHw538hdC6Wjbnd1YaaGyYkYBv8Lzp1E5xCeAeD828P2K4dXgYzz4V4TlsVPqn1HjpdifXRU&X-Amz-Signature=592dc23ee63c0f2315558077c1d634d6ec38b627369234a89d43b7e740a625fc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W63YCWDF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIA0Lm1MfWe%2FP9Fn%2F4n0MYCqsMkVWE2%2BLRl%2F4MJf1Tj9aAiBFwACsblmGwMpJkXKiEu6MhF8M4cDrJjOTnV%2FRnFZu%2FiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9xdRE20Me4A8LNxKtwDbs6IXTWuuRNmAC4nrtcl%2B%2BI%2FyyeMutNzgkxL8yoUBxKEsND2vBwTEhNgXlAw2GEuViXz3I3gWHtJnDvzzHIAU1jrHCB7n0PudpHhZMLmikTPh58CcDGU1iArEU%2FucBB8AD%2BoVxDdx%2FtX3bfOLVDz%2Be1fyZF5czSjD3velqc1yTCZcMlBMvhyQyEHf8dJVnemJFIg14iZhGfLTPmAP1qSlfUr%2FLtGRKUf%2B4pIo0L5i3K5vcQio5%2B1wEPUCYdOkYZm%2Fcn3p519b8ybEcAi2eDgmmNt3RkIYpRznyvrXDEn1%2FpgxOq1WZgS%2FkkPyhjF2SSx%2BwbdvRZDjvYWmJ5%2B2EBMZkgOKaYQhFhn0mNGmOl5Tapc6LYpe%2FDdIFbJtCT3uMee7nxpvwm78nQtBGnUVW84mD940m4Syc4IGSVsCkae1jXH2XqoH4VdUwmKH55P1WvbPXB%2BRSPCVdy2FBsJRq6jo0ovCtoXPhUI2NWLQgPz%2B4udLNxtO1wbAFGbfSIMynv3LRanKj0LL41D0xhAH13rLY514YOTokHVnlHJHsAxKIvc3dyzQRioO2dm2ntiqrR7EJ3iIXB4D%2BQzm92qLKkFc8zROdBwLWfAwxIRpRvG9KcDpHqiWHU%2F7DUN5HowopyrvwY6pgFNeVsgEZazIdbUIopr%2B4sFKFnSbspG%2FZIpaMYbKaqCL6TfmCYXW9DLOD4%2Fo4qP%2Btz6Ia5ewflZdgrVeFBukhvwTBYr63ht1%2BieVYT2W7KHLAJ86NDw9uEE9qY10xNuIJ1p1FiGsNZ07XiiSkLYY6fSfDxBvDRciqt0nWpZrkkhPT0eFc7VB4s9IE9GhlloxThN91SJDbeTPGmPoz3DHwyCtS0fFGW6&X-Amz-Signature=1d1c7119a09d5c9ea9d27c1b6e3a6ff90efaf0efc1badb57897b4ecc5a1f4012&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHH3MQF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIF7aM4OKjLhHIGb9SLDVgQEZoBGPKIU88pay4mSpjl4cAiEA6vxYdXdvSrHeD3ZJiR0CXxLqcxQ6dbmJxZAOY5ZOcNYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FBzdjD3bIxywiBgyrcA8cL%2B89%2BraBayIvajbAiiNn4sIyGUeTsUOTyGG%2BM0cBW9K%2FlefqLtjlGrhT00ndgMCoJRS4QXjCpA6arL6PBMVyLt2cxf8QzvBiEzgWyLXwR0rTw1nbTG7BIEhX9%2Fkw9sfepn3UlRmOc6tA1mXyCPek5a4rL8ZATBT05oAqXylp1EOgmzXV887lJyQWwNirYgEpl%2FAxJHYYUPe9hHTXCEYeEcXzGtVxBxUOpigvc%2BSZzMI8um3zhHVmM4X6YU0mCKYx9N58XsE4bjUAZEjDjOwyfO5DpPmzy8nrZLwFB%2FcIdIqxUPVacGUXbW3mkyb%2Fg0MFVLhzsXmtI1W6k0rgzUAAUwTFPOAmx1UeyL7XI8BGf%2FzvL1sYQIeKTY9p4%2FdBEDe4iSoV1JywEtO1KqPynFzf8RCsnVTm3wNyNGl9FZzPYvSOPVI1puRGbVA0P2VPZ8ebtE8htBo894NcLC1cT9Lrw0RfZw8yKOQh7CW%2BrZRp8ZqA%2FiDD9RorICfqiudaWB7cEGWILFVeOYvlOHxK4Hz93kUYIB1bklB6X7lODyCKTG73ZqZHXCXziblZZOtCLO%2B0nSJAHCOo86h3iU6%2Fx5hE%2FicE3lyZSF0%2BzMW6tfjjcP0xD%2BZjvvmBfi2dBMKGcq78GOqUBDzc6%2FW6Hs0Gd%2FZMuPQtA8AZLkP1YAJeTJ21VSRl%2BYtCWfuVXo57XtQhp6QjL5rLKuTTHxMV3hVno3BFXZ6XaQkdt7sr%2FgqWThEhnVWokrAHjfyp94p5ydb1Wl5bYjUcooz3Nd%2B4pbq%2Fm3%2F1kaujCRFv3XnDEscELjb0d3FQZJFxh403koWHiNFenR5fxlDxj45uSIywneGe9CUUc5nz9%2Fch%2BPPYa&X-Amz-Signature=d5b8f8ea70173981e256a6432f73081d4392c61be2e7e723c8500c39f2df8f34&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

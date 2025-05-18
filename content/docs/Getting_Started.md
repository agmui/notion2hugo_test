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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZTBRFC7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFX1rrvdXdDjlXA2VYUAu%2FQ0Q2NhQnmM%2BGCyICcDs5KnAiARw3oSp10G5fyHMSxu7kM434FHqsLB%2FCSDZRJmU29PDSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM0iZhIPrW3OyYw9T8KtwDX77AFf4LY8HvMLGqIBAiHISbBJNkrlxJl%2FyPtbTiD480pwdVHzaiVHmd6vPjpp0FDokZMAW%2Fat9nrUGESTwoy9SifxzPtDbRsnVaIGJPLaQdiRjeWXuN27rwtcNMDp%2F%2BEaWtUxHHv%2FFU7XHrAat0cEsYoPwk7zuRVOcHJceveDYx374vVUmjkcrL2hMy8FKHATLf44D6eQ7YxrT%2BX0Cw3B1YKBmdfS68Tza4jJ%2BkFE%2Fpy4uq0WbDYrD4s25pXCTl%2Bg0JuQwikZXMRYIgN14HhgtdQzMLIjnjKtE0pjYDntVnSTq1nrYg%2FxkCGVTM0qPFII7McRV9B9W81VbktUL8N5ZWCF1FPqBGntc2Yb%2BY18dNe7P88TKvsZVBr1Yj9Z3xEi7a%2BUUuEkYv%2F7Ew3LKBpgm2shctP9nF2Mpnz9HnuPbq%2BQRxh4eYQIXBj%2BUHOMDYPFxfDj%2BGirsHAR4S6l9gYOFulVa2rjOT%2FklW0b%2Bx8OhGFVBuOXlSp4m8e6QQf%2Bd97vpYNZB1lMhlFvz25aYl1V6YkPrNtEaFEuIaHFyAfQFqqHRCNKUpsDtU7rfF2l8E77PhFih5iaNVfad04iPRRB6bRYydJC1dgFA6it9dscsXSOmKKXFvHLC%2FKDEwg%2BymwQY6pgFCYAPGeR11DAJmWx3%2Bm13Kt%2B%2Ffdn3%2FyakqlU9%2FWTr4kJg7LL2G3xOR6gKfjrITfy1Bo2slJi%2BQxLPIFyNnvYk2ZVxSRGOmMdEaEejHjUtflSR0iyM4JlK6qDwLERx6Vs%2Fh4i2lkLLIbEyKxgkgpwCDv67AyY%2B6qF9ugzdSS2PHmBUUW%2FxVBe34uoZKtO%2F5Rogov2rJQDhai4bDm9e2gBs0dCdBUJD3&X-Amz-Signature=155a1788f808640a0b1d6aed6eea1fc681c4d9262d58c1359feaf7e015d03fda&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZTBRFC7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFX1rrvdXdDjlXA2VYUAu%2FQ0Q2NhQnmM%2BGCyICcDs5KnAiARw3oSp10G5fyHMSxu7kM434FHqsLB%2FCSDZRJmU29PDSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM0iZhIPrW3OyYw9T8KtwDX77AFf4LY8HvMLGqIBAiHISbBJNkrlxJl%2FyPtbTiD480pwdVHzaiVHmd6vPjpp0FDokZMAW%2Fat9nrUGESTwoy9SifxzPtDbRsnVaIGJPLaQdiRjeWXuN27rwtcNMDp%2F%2BEaWtUxHHv%2FFU7XHrAat0cEsYoPwk7zuRVOcHJceveDYx374vVUmjkcrL2hMy8FKHATLf44D6eQ7YxrT%2BX0Cw3B1YKBmdfS68Tza4jJ%2BkFE%2Fpy4uq0WbDYrD4s25pXCTl%2Bg0JuQwikZXMRYIgN14HhgtdQzMLIjnjKtE0pjYDntVnSTq1nrYg%2FxkCGVTM0qPFII7McRV9B9W81VbktUL8N5ZWCF1FPqBGntc2Yb%2BY18dNe7P88TKvsZVBr1Yj9Z3xEi7a%2BUUuEkYv%2F7Ew3LKBpgm2shctP9nF2Mpnz9HnuPbq%2BQRxh4eYQIXBj%2BUHOMDYPFxfDj%2BGirsHAR4S6l9gYOFulVa2rjOT%2FklW0b%2Bx8OhGFVBuOXlSp4m8e6QQf%2Bd97vpYNZB1lMhlFvz25aYl1V6YkPrNtEaFEuIaHFyAfQFqqHRCNKUpsDtU7rfF2l8E77PhFih5iaNVfad04iPRRB6bRYydJC1dgFA6it9dscsXSOmKKXFvHLC%2FKDEwg%2BymwQY6pgFCYAPGeR11DAJmWx3%2Bm13Kt%2B%2Ffdn3%2FyakqlU9%2FWTr4kJg7LL2G3xOR6gKfjrITfy1Bo2slJi%2BQxLPIFyNnvYk2ZVxSRGOmMdEaEejHjUtflSR0iyM4JlK6qDwLERx6Vs%2Fh4i2lkLLIbEyKxgkgpwCDv67AyY%2B6qF9ugzdSS2PHmBUUW%2FxVBe34uoZKtO%2F5Rogov2rJQDhai4bDm9e2gBs0dCdBUJD3&X-Amz-Signature=3a23f952944aebc7468582e02731809f2750ac05b58aa04d9f58d012a248d79d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZTBRFC7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFX1rrvdXdDjlXA2VYUAu%2FQ0Q2NhQnmM%2BGCyICcDs5KnAiARw3oSp10G5fyHMSxu7kM434FHqsLB%2FCSDZRJmU29PDSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM0iZhIPrW3OyYw9T8KtwDX77AFf4LY8HvMLGqIBAiHISbBJNkrlxJl%2FyPtbTiD480pwdVHzaiVHmd6vPjpp0FDokZMAW%2Fat9nrUGESTwoy9SifxzPtDbRsnVaIGJPLaQdiRjeWXuN27rwtcNMDp%2F%2BEaWtUxHHv%2FFU7XHrAat0cEsYoPwk7zuRVOcHJceveDYx374vVUmjkcrL2hMy8FKHATLf44D6eQ7YxrT%2BX0Cw3B1YKBmdfS68Tza4jJ%2BkFE%2Fpy4uq0WbDYrD4s25pXCTl%2Bg0JuQwikZXMRYIgN14HhgtdQzMLIjnjKtE0pjYDntVnSTq1nrYg%2FxkCGVTM0qPFII7McRV9B9W81VbktUL8N5ZWCF1FPqBGntc2Yb%2BY18dNe7P88TKvsZVBr1Yj9Z3xEi7a%2BUUuEkYv%2F7Ew3LKBpgm2shctP9nF2Mpnz9HnuPbq%2BQRxh4eYQIXBj%2BUHOMDYPFxfDj%2BGirsHAR4S6l9gYOFulVa2rjOT%2FklW0b%2Bx8OhGFVBuOXlSp4m8e6QQf%2Bd97vpYNZB1lMhlFvz25aYl1V6YkPrNtEaFEuIaHFyAfQFqqHRCNKUpsDtU7rfF2l8E77PhFih5iaNVfad04iPRRB6bRYydJC1dgFA6it9dscsXSOmKKXFvHLC%2FKDEwg%2BymwQY6pgFCYAPGeR11DAJmWx3%2Bm13Kt%2B%2Ffdn3%2FyakqlU9%2FWTr4kJg7LL2G3xOR6gKfjrITfy1Bo2slJi%2BQxLPIFyNnvYk2ZVxSRGOmMdEaEejHjUtflSR0iyM4JlK6qDwLERx6Vs%2Fh4i2lkLLIbEyKxgkgpwCDv67AyY%2B6qF9ugzdSS2PHmBUUW%2FxVBe34uoZKtO%2F5Rogov2rJQDhai4bDm9e2gBs0dCdBUJD3&X-Amz-Signature=998af5690a6e2dc0bc3d7317d70ed2db75b89ab7fda13d5c9011b23f9da73bca&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634DJGQJJ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF75dupEO%2BJf44yta26atyOH4Nrqz%2BAlqySeLrCS%2FkwaAiEAh8G6XjV1p6uLN8%2FxBEa%2F2fJmOjqg4JCtmE6%2Fv9iaw0Eq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOjt8%2F6lbzfwLCRx1CrcA7eMljHLiDya6nuhbeillq4%2FuFsT%2BpK7XIlsAV779kr1Prftw1WjopDUxMTJEr5%2BVZcEhSHSUvKhCflctcDVcseeGK64KOgzF9r6q4anBXrbezN8m3kiu5du4p76Dpld%2FsNQZ719kLrm3is8rkSqnfznK%2FKAIMgzcyIFMHK9ApNX%2Bbgxf77e%2FKjm7YBXbvjnQLz3KjT6fIc90E7GsxRbP59GUOubWgX%2BGFxq1K4v3OADwHk2wOoR%2BcUuBhrpnuqgknJ6ZbxuTDiaDccPrqMpHkWbA1tP01KBm6IR8MxV3415kJ5kLh1JXmczCBYacaMkf%2BQbxY1WFp%2FDHQzISWIl27mmQnMxKzZaqa0oI8nkGYthf4BZyy4yBAeE1kBOBzJ6BwXFfGkH%2BVEABIVchHti8xgEbGt387noKxX0K66Vmvng%2FVuleil5XU2IgGZBacngoojxbrtR%2FbwrWIkrgpOby4GRA%2FaXEeK0dZVuQpNRxvsLtRYYUw%2BowURKCQoaDChHwrUOfMGQIfbnedT8abhSsdAMXWC%2FQtIyuU7vNtiY4aQbfm8XaPDmWLafGto95YI8Ie7Gzni3S3M8TwOSfKcE5w%2ByoqW8dikYO8G0BAb4LobyqjylU9ojxLQH1BnuMKmkpsEGOqUBCwmG3aMn8grDZONwDK0RX8Uovgx%2FSc3NYCwx9lmG2YyM32CUGmHhL2Da0D7JD86kbbCRJLkXEJNU1TTLxeWbOsQjvQY1F3t2yNI2WqBnqTVJcH9X6yYxRliN%2FUX1Rr6a8AYG%2BnjwwMzLqQC2isTRL2S3nd%2FCICJueywhoGXjtCgX9QmfCP0TA6GIwu9VceOg9W3%2FD1hJFdF4ukgESXlbbVDz%2Fjn8&X-Amz-Signature=140fd65c6e3a8422048ae7f3a76e4a867a431c93fb85398bd6d6267289204822&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624XCWR5N%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8XyDxTwgVPgMswojoHuWNsIM%2F%2FDe25R5Ush9RDM0qyAiA9mvXx6skVwtHobZMM%2FQPSYDdL8O88NEUYHF7QFzEFbir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMLOIY8mo1w3lGH7KTKtwDdoQHXzB6DXzhbkkq4PFQPw2LJXwqKk1ble%2FTuAvmVdHVpvRVoLWPxFoID696pal42EH4bUqfI4P2VfL2o1eZpNbpfvANTeEPP36%2FMQOh943PpGl03VWm6kh9sYqb%2B6sAPmten2JZoOvOtIihZa%2FjU5ioflaXTu2DacEHduIfLMsOnaJ2%2BAxz1MrjwW2C%2FDJrD0uNycYeMD2P3g%2BcPC4u7vVkz8k0n9BPDCFdrqanNnrAOOT7Q3ln%2BbD4HmDN6jxd2ob%2BygQSKzaqkUMCrRhsWgaTmXRmLr9bIpSsOcZlPMqJaAb3xXNehunLJpV7pJNgeD4TLbMkKts7KgExAso3q4O3nNsQKWeMSiY3h%2BZQAOM5dh5LIoXleO7Gh5oa6q3UZpnK2%2B9PpYABrt2wOzO8TAFzb%2BjVw8gUxAPVDnfDYXAuxgFMILV9Wv4HeV1%2FWOA99OUM3Eougc2GiWhAIlhgn0ld%2FrSMLI2LoO4uOlUn7z%2F6r3FbUh70IXc41NRGgcU42kEgcUvC3GxP31s805KfnO9NjTrpVdO01HYg8JPebwgYFESMZyBYXe13lMO%2B4GaagvYCz4abxwSawMYVBauDUZqCg2ae4IB5XV4JXGA%2BF0zHJupe%2FPvEWN3ZcMUwgp6nwQY6pgEGu6RfzFOgxCF%2FSZ2NFIuVT0Fak0x7Kq4kQuoaCKS7uL0Pf8QzBrV84P7QayoX86drY%2FPBvycKPCpdkMUZ6ZlOV8ZZCyUOx%2BX1jhtaY4yTSDmppPbjjUuR%2F2WljU7A0zkiGjNnSEXqe6dvfJOaOaQdw%2BrXr8jAG6%2FmPIsYQfMoewbi4PeQKdRcuRlM73ALP5h9QMuhGz4DrLlNddcOS4QmqN7sxzYq&X-Amz-Signature=689e0b640a0b0f10473d57442551d84f06f92e8d82bd3fe4c7f8f7463b1a2146&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZTBRFC7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFX1rrvdXdDjlXA2VYUAu%2FQ0Q2NhQnmM%2BGCyICcDs5KnAiARw3oSp10G5fyHMSxu7kM434FHqsLB%2FCSDZRJmU29PDSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM0iZhIPrW3OyYw9T8KtwDX77AFf4LY8HvMLGqIBAiHISbBJNkrlxJl%2FyPtbTiD480pwdVHzaiVHmd6vPjpp0FDokZMAW%2Fat9nrUGESTwoy9SifxzPtDbRsnVaIGJPLaQdiRjeWXuN27rwtcNMDp%2F%2BEaWtUxHHv%2FFU7XHrAat0cEsYoPwk7zuRVOcHJceveDYx374vVUmjkcrL2hMy8FKHATLf44D6eQ7YxrT%2BX0Cw3B1YKBmdfS68Tza4jJ%2BkFE%2Fpy4uq0WbDYrD4s25pXCTl%2Bg0JuQwikZXMRYIgN14HhgtdQzMLIjnjKtE0pjYDntVnSTq1nrYg%2FxkCGVTM0qPFII7McRV9B9W81VbktUL8N5ZWCF1FPqBGntc2Yb%2BY18dNe7P88TKvsZVBr1Yj9Z3xEi7a%2BUUuEkYv%2F7Ew3LKBpgm2shctP9nF2Mpnz9HnuPbq%2BQRxh4eYQIXBj%2BUHOMDYPFxfDj%2BGirsHAR4S6l9gYOFulVa2rjOT%2FklW0b%2Bx8OhGFVBuOXlSp4m8e6QQf%2Bd97vpYNZB1lMhlFvz25aYl1V6YkPrNtEaFEuIaHFyAfQFqqHRCNKUpsDtU7rfF2l8E77PhFih5iaNVfad04iPRRB6bRYydJC1dgFA6it9dscsXSOmKKXFvHLC%2FKDEwg%2BymwQY6pgFCYAPGeR11DAJmWx3%2Bm13Kt%2B%2Ffdn3%2FyakqlU9%2FWTr4kJg7LL2G3xOR6gKfjrITfy1Bo2slJi%2BQxLPIFyNnvYk2ZVxSRGOmMdEaEejHjUtflSR0iyM4JlK6qDwLERx6Vs%2Fh4i2lkLLIbEyKxgkgpwCDv67AyY%2B6qF9ugzdSS2PHmBUUW%2FxVBe34uoZKtO%2F5Rogov2rJQDhai4bDm9e2gBs0dCdBUJD3&X-Amz-Signature=abdf395ead078a27d521b9e99b4e87dbceeec8fbb5a9b7e0632c68525f54734d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

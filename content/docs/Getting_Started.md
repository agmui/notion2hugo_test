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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXGZRQ6R%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCUb%2BPCa35Q%2FX2r%2Fg%2B5ZEsGCTNjYPx4YDb38AynbLCqkwIhALfaekcZoB30BszlgMh9owjxJRvO6lKIhtqcWfqCMa54Kv8DCCwQABoMNjM3NDIzMTgzODA1IgzA8YILppdOzI9Ns7Aq3AP4c7FJ6L78UCV0WAwlFvWXjfnNNf3gvz6kHCjyofvb99dIOkM2OXJDROUodTKr%2F17cDA2RIEv48ngCVqxnjxpNvMeatnFNY5RPMMNlVddZXVh2CL2hCDFKPibSeuHvJCRbaRYAjD1KHgFHYMSwphNnGBgz0wlXWBS%2BNSdgo82GmxmGAOr2yAUdYzsabRR0eUb1IEs70PNetsPRAFNDuYfkybhrm14KsYE%2BPZ0QuUww2Qp9MCitz%2BgRgC9rz3HtWDuiXWx7Qva4ED1aJR1nR9xPZGEMZESorvz2ktiYKZw3CNERzyvpBhq5EuH1d1lSHKPStkMxnF8TBW9q9Pcv5pnQHqVZidIm9x1rfmMwDsGn2yWoSZ5gjQgCxKQD9L4Gz5YAohJSuq2PGDOzN0eAd%2FcrbZGrlRP9mo1e0x7h%2B9PoDT2lObkUl2WQJC9aUSR%2B%2BU29BfuPosegWOTipQ0VfPuxD%2B7l%2B8vEDBNdcSmZoGUL3Z6VFNZBRHVetJBmhI2T7XaoQSDiQFeXspfIaZzsTkXwyYvGXu2CpEXMxOshahjp3Ul%2F349RFxXzThsM7HMyPnKqKQ5Qk7Qs8PbZeMSdj8rt5RLdopOU3oJEm4nGEE5w63d0QnwnI4unDysTezCk0IDCBjqkAZi4JEKQKLqi47rAORRFlBObxr5auPMfRVylvqmWq1mN%2FbZ%2FThUydPomK7zyl%2B81whS2Kj3zheuyKMkEEORY%2FL2XdISMBna%2FIcxGeTOb6b7qY0ymPtNXykl%2FjwGy7t%2BJZzGIeKFVt%2FnNj9Hjwdbvl3tmmPxaB3KTbYNhHe%2FesmW6GTEBdsd5RG4JrfFzK7UCpeRfGxPMYvyu%2B4LrE7k6yOu%2BZZew&X-Amz-Signature=362249246436adc9b3e1c4a0acc8f0a4f6d2007aeaef16f7a9d2fe5308cc5cd7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXGZRQ6R%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCUb%2BPCa35Q%2FX2r%2Fg%2B5ZEsGCTNjYPx4YDb38AynbLCqkwIhALfaekcZoB30BszlgMh9owjxJRvO6lKIhtqcWfqCMa54Kv8DCCwQABoMNjM3NDIzMTgzODA1IgzA8YILppdOzI9Ns7Aq3AP4c7FJ6L78UCV0WAwlFvWXjfnNNf3gvz6kHCjyofvb99dIOkM2OXJDROUodTKr%2F17cDA2RIEv48ngCVqxnjxpNvMeatnFNY5RPMMNlVddZXVh2CL2hCDFKPibSeuHvJCRbaRYAjD1KHgFHYMSwphNnGBgz0wlXWBS%2BNSdgo82GmxmGAOr2yAUdYzsabRR0eUb1IEs70PNetsPRAFNDuYfkybhrm14KsYE%2BPZ0QuUww2Qp9MCitz%2BgRgC9rz3HtWDuiXWx7Qva4ED1aJR1nR9xPZGEMZESorvz2ktiYKZw3CNERzyvpBhq5EuH1d1lSHKPStkMxnF8TBW9q9Pcv5pnQHqVZidIm9x1rfmMwDsGn2yWoSZ5gjQgCxKQD9L4Gz5YAohJSuq2PGDOzN0eAd%2FcrbZGrlRP9mo1e0x7h%2B9PoDT2lObkUl2WQJC9aUSR%2B%2BU29BfuPosegWOTipQ0VfPuxD%2B7l%2B8vEDBNdcSmZoGUL3Z6VFNZBRHVetJBmhI2T7XaoQSDiQFeXspfIaZzsTkXwyYvGXu2CpEXMxOshahjp3Ul%2F349RFxXzThsM7HMyPnKqKQ5Qk7Qs8PbZeMSdj8rt5RLdopOU3oJEm4nGEE5w63d0QnwnI4unDysTezCk0IDCBjqkAZi4JEKQKLqi47rAORRFlBObxr5auPMfRVylvqmWq1mN%2FbZ%2FThUydPomK7zyl%2B81whS2Kj3zheuyKMkEEORY%2FL2XdISMBna%2FIcxGeTOb6b7qY0ymPtNXykl%2FjwGy7t%2BJZzGIeKFVt%2FnNj9Hjwdbvl3tmmPxaB3KTbYNhHe%2FesmW6GTEBdsd5RG4JrfFzK7UCpeRfGxPMYvyu%2B4LrE7k6yOu%2BZZew&X-Amz-Signature=59ebcf7fe07f51b545aed0e740c9fae1644cfa0dd42987479b811181e2baea54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXGZRQ6R%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCUb%2BPCa35Q%2FX2r%2Fg%2B5ZEsGCTNjYPx4YDb38AynbLCqkwIhALfaekcZoB30BszlgMh9owjxJRvO6lKIhtqcWfqCMa54Kv8DCCwQABoMNjM3NDIzMTgzODA1IgzA8YILppdOzI9Ns7Aq3AP4c7FJ6L78UCV0WAwlFvWXjfnNNf3gvz6kHCjyofvb99dIOkM2OXJDROUodTKr%2F17cDA2RIEv48ngCVqxnjxpNvMeatnFNY5RPMMNlVddZXVh2CL2hCDFKPibSeuHvJCRbaRYAjD1KHgFHYMSwphNnGBgz0wlXWBS%2BNSdgo82GmxmGAOr2yAUdYzsabRR0eUb1IEs70PNetsPRAFNDuYfkybhrm14KsYE%2BPZ0QuUww2Qp9MCitz%2BgRgC9rz3HtWDuiXWx7Qva4ED1aJR1nR9xPZGEMZESorvz2ktiYKZw3CNERzyvpBhq5EuH1d1lSHKPStkMxnF8TBW9q9Pcv5pnQHqVZidIm9x1rfmMwDsGn2yWoSZ5gjQgCxKQD9L4Gz5YAohJSuq2PGDOzN0eAd%2FcrbZGrlRP9mo1e0x7h%2B9PoDT2lObkUl2WQJC9aUSR%2B%2BU29BfuPosegWOTipQ0VfPuxD%2B7l%2B8vEDBNdcSmZoGUL3Z6VFNZBRHVetJBmhI2T7XaoQSDiQFeXspfIaZzsTkXwyYvGXu2CpEXMxOshahjp3Ul%2F349RFxXzThsM7HMyPnKqKQ5Qk7Qs8PbZeMSdj8rt5RLdopOU3oJEm4nGEE5w63d0QnwnI4unDysTezCk0IDCBjqkAZi4JEKQKLqi47rAORRFlBObxr5auPMfRVylvqmWq1mN%2FbZ%2FThUydPomK7zyl%2B81whS2Kj3zheuyKMkEEORY%2FL2XdISMBna%2FIcxGeTOb6b7qY0ymPtNXykl%2FjwGy7t%2BJZzGIeKFVt%2FnNj9Hjwdbvl3tmmPxaB3KTbYNhHe%2FesmW6GTEBdsd5RG4JrfFzK7UCpeRfGxPMYvyu%2B4LrE7k6yOu%2BZZew&X-Amz-Signature=749423f0dcc6e75a777a220531914f9ddff70bea2e4ba2ef87c282853fba89bc&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLRAK4JX%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIHenPp%2Fr0GTKsZln6%2BF4G2uzGUtCXTw6eO8AEWRoNo1xAiBqgjDqLj%2FQSjstkdeYHRhb3RTKPIk3%2BHmxBYeGjxgEKSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM7EG7ixmc41PJDLQkKtwDOF46ZHIQnR1p4Aj2npojjSx1oEBndZPlJp92Qa4igQVAxUltBG0MpLM%2FyagGxysEOPVfpsyyayzKmbPHwLHyqP0NymjHucBU7CgtJohdGs6HLmX3qLtZ560v4UxjAfETGcfJV5h1GfNPqo0IemZRVct%2BrfbB%2BQ14ej9qQ1r8WCnGwRyQfgC5ERyk1J5Q9Ro9IsDec%2FZbF9ag1%2FkBfTWk3kF0YDORHS7%2B5IlPr7uBaiN3wFuqEJLEjelYyuDhuv0qthejKXv7pOg2s5hHFAPxdbXj8j43WiekJPwD7jPwv9T3I5CzwDDIUVMg1Qfs3yp7OcEKTyCDkjG7UQ9gCQhN3tdbw3ONVsUQBkThnwZb860KfQg%2BX05g4dBwL6g2fylj9kAHCDy5XpYuUvsGQKWiFvVqOvrKi22YuTaxcIwjuT%2BfReDOWhI3qXLGe1GynJLqDZHnIyPbObeu0YbXkj9BedeMUCEZk6Mc9CHZrl9wFmx7KHAc3uW%2FI40sGhiyowXFDi6AstYbun%2BZmXztE651HG%2BPPOVw9H5BOBQtbWGRPMf3npy1IYPmprvbVVfIN4zoZSbJLG7ufvCH981gwzjkkzRJvr0P2%2FwR3XfqznuF0Gf4U1VNDI1pogbLqVgwr9CAwgY6pgFaNpfl7Dh3zmFLSko6So%2B95j%2BPc4tZDJX5RZ1Va%2BFvPX68QrG90oJhA7lvD2vWbOqmBaDWTuncbKTpWZ98Nq5NKB%2FzYycmVZqnDI6d6LhHu%2BkyE%2Fp2%2B38a9PemNsPOUhs5IDsVQhfHDxQ3MISPDm%2BrAbzj6fkK7eGtpx%2Bkfs4IKr21OtzIVafU4bkSEyV6egNgQDtxC1iMsiXIn3cCey28hjOrBKZa&X-Amz-Signature=7e1c26b704cc53a819da305d0c849a667d3c0f7bdafc802045dfff77c96d47e4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSMO5WAH%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCaMV4Cg17VBlQI8Fg8wPoCmzfYdZIbS4hw6uG%2FcUxd1wIgNFcJttyrUmtE1YHDnOv%2FDDsyt9Wm%2BWp8ty9P2s7Fkdkq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLGd0szoBdIJhKgSlyrcA8UK0KFEx680eV1OCZ0TyKMHPAFOCscxvglIe2CUU5vA0FnVuuo0HNA%2BmBpoks2vAcZXO8rLhwxTk7ry%2BQiWCC9H3853%2F%2FqZy5ZjOFseYN%2F1wResyIvfhRf1DeVhMHMOLjalvtDWIoVEWqo%2By1bXTvp%2BGhnghbVqnWttJukKh8BhWMkpLUlPNwkS08bG9wkfPNSbiZl5k4YDeVigAuXwzywYeuQdd0ihYv7NkEMvjY1ngCWg6Ze%2BYutb7kRygnPaZm61Cpuqite8ARRzmPWJmTd8UBmo5M6KTzdWqhNeJV1vvNo7LE0OxeVvdiQICKxnPMY2zSmSs4FNkhE5wg4CRfPHouc3iiOVmqzgNtFSk1Y8CpZ3QR4Pvyb4BU%2FB9Tu2ScS96K0%2BeShoVcsSCBJBqx6AlIx6cAevG4W2cqSz3HoTzlbtLoa5N1K5BUDkBDMT%2BCVWe8mT286PDHLVuNTwEDuQ4O%2FsylST7EUmIGSbpZVNXsBH4ntuU6AbZV3VYA1GEOXLjaBKoFyx%2Be6cs0tFDUN9ckjBs3OK0Q4796%2FCyiCO6yOWj546O%2FZuL35AoTDYGydlJTJVJcGvdIMlh1NmhwYiIumob5fio4AQsOk71Hv%2FTuulEWj6iWZ2jwXpMKfQgMIGOqUB2GMP19i5LOTpGJbR%2FoS6vxuOoPAEGRiNeA5Fn%2B90xQ5TGL19NsK6d5ItEoC3%2BoOx5HJeX11EQmwHyW502Rxt8t31FpweTp0mkF%2BtDrsj1d%2Bz3GvYxNKP4Q2AFcmta7fVak2uP0YFf8sIR2PTQUQw%2FH9qTx3iR9hwKXj2A7bL79UXwRYlQk6aMPGeAkilpgSS7KhYN326MZcO6CcPNyhXUrA1dJlv&X-Amz-Signature=265ac9f5ed85d9ff350b466608afc85394cc405caf560a6b66f175775a8d6c15&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXGZRQ6R%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCUb%2BPCa35Q%2FX2r%2Fg%2B5ZEsGCTNjYPx4YDb38AynbLCqkwIhALfaekcZoB30BszlgMh9owjxJRvO6lKIhtqcWfqCMa54Kv8DCCwQABoMNjM3NDIzMTgzODA1IgzA8YILppdOzI9Ns7Aq3AP4c7FJ6L78UCV0WAwlFvWXjfnNNf3gvz6kHCjyofvb99dIOkM2OXJDROUodTKr%2F17cDA2RIEv48ngCVqxnjxpNvMeatnFNY5RPMMNlVddZXVh2CL2hCDFKPibSeuHvJCRbaRYAjD1KHgFHYMSwphNnGBgz0wlXWBS%2BNSdgo82GmxmGAOr2yAUdYzsabRR0eUb1IEs70PNetsPRAFNDuYfkybhrm14KsYE%2BPZ0QuUww2Qp9MCitz%2BgRgC9rz3HtWDuiXWx7Qva4ED1aJR1nR9xPZGEMZESorvz2ktiYKZw3CNERzyvpBhq5EuH1d1lSHKPStkMxnF8TBW9q9Pcv5pnQHqVZidIm9x1rfmMwDsGn2yWoSZ5gjQgCxKQD9L4Gz5YAohJSuq2PGDOzN0eAd%2FcrbZGrlRP9mo1e0x7h%2B9PoDT2lObkUl2WQJC9aUSR%2B%2BU29BfuPosegWOTipQ0VfPuxD%2B7l%2B8vEDBNdcSmZoGUL3Z6VFNZBRHVetJBmhI2T7XaoQSDiQFeXspfIaZzsTkXwyYvGXu2CpEXMxOshahjp3Ul%2F349RFxXzThsM7HMyPnKqKQ5Qk7Qs8PbZeMSdj8rt5RLdopOU3oJEm4nGEE5w63d0QnwnI4unDysTezCk0IDCBjqkAZi4JEKQKLqi47rAORRFlBObxr5auPMfRVylvqmWq1mN%2FbZ%2FThUydPomK7zyl%2B81whS2Kj3zheuyKMkEEORY%2FL2XdISMBna%2FIcxGeTOb6b7qY0ymPtNXykl%2FjwGy7t%2BJZzGIeKFVt%2FnNj9Hjwdbvl3tmmPxaB3KTbYNhHe%2FesmW6GTEBdsd5RG4JrfFzK7UCpeRfGxPMYvyu%2B4LrE7k6yOu%2BZZew&X-Amz-Signature=735a7e266c23b6961a020c3a31a41d0dd1dc0fa799695906867dae761c86af6d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JPJMIXJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFfp6wm5spOfqI9aTHdyo%2BBZU65sLQZmtmmNu2QFCIz7AiEA6ei0RpCgGN80bN4IfBsFjgiCel0kPXd1Ze4z%2Fh9RNl8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDCAMXCix1o3ajTM6VircA8frf3%2F6T%2BqAMZivISyuoSGRoIszFX2MPXXefM1OMWBcDH1F70FZC2%2B2Pd2wwlH1p%2Bl0TNYfaMDiI7y%2F8pC0Uxsj15%2BjHRgYPcI8v1zgHEh8IC9npewBk8R2g%2FKWzAj7%2BX2Az6AnHkuMnFA3ovDk5DKLuMgnJXW4L0LUAMo8jqK6zlQrJJOIWjHRl74sus2yoxqItQw3f2RDZ%2B1sJ%2FoNzddcm3dvrttjn6nPMQtUMCRGIEt4OX41ufFand4lW0qQY%2B6wTyirLUr8FNMcn9YGG8GjwAbAuPhciSaRMd3bGn6QYXZVGyVomJVBG4aQIyrs2Ld2ddJPdFFMzRkonOv2mXS%2BIL%2FbBpZgD%2BGtAyo3ZR24jieoogGa6s0Ghy7QpFeLyxD1dit0vLl%2FGMqstHw94rTjfvt42A9IqQjRsna%2B9DFLHFDaGObMJqfL5rxkedgN58J0imWyO6WMcoPtbnN86cNV3dYhsq%2B1wEhKquqNf4zPycvYea7BPHdD1JwYjbwSJWsFWTK1QyfNUynNv2i%2FfhAhEMXJdTxjT6nnHBq1FXw%2BD78C1%2FJWnSjkM0tBFkihyVBcbcKA3RJftanHreeXGxBRozvEqxDRCH0jCVfRkk51IY1mR8mJdQ2tBtVLMJ%2Fc6sIGOqUBvr8JHSD7iPKN%2FUEswo0IZS1ZRVm3Q1WUGRWpT8kg7gXCGEY21qyPULl3BU6ZSvRL7HKCqGESsaT6apAcjd0uM3gGNk6IZ3j%2BmKvyKMvltIVg4q2fd909d07c1JYXFKsi0yR2WTLnfb1gLnqt9%2FjuE%2BNWjVVypbykK7%2Frgrpsdh67%2BseWtJeKpU4tYFKcR9W74rT3WwRf01eDGWaJ58vhT%2FhRXJKl&X-Amz-Signature=a5634063070a13e49554a30b5da31056cdd903a1a168c931247d5ad3dcf8c0bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JPJMIXJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFfp6wm5spOfqI9aTHdyo%2BBZU65sLQZmtmmNu2QFCIz7AiEA6ei0RpCgGN80bN4IfBsFjgiCel0kPXd1Ze4z%2Fh9RNl8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDCAMXCix1o3ajTM6VircA8frf3%2F6T%2BqAMZivISyuoSGRoIszFX2MPXXefM1OMWBcDH1F70FZC2%2B2Pd2wwlH1p%2Bl0TNYfaMDiI7y%2F8pC0Uxsj15%2BjHRgYPcI8v1zgHEh8IC9npewBk8R2g%2FKWzAj7%2BX2Az6AnHkuMnFA3ovDk5DKLuMgnJXW4L0LUAMo8jqK6zlQrJJOIWjHRl74sus2yoxqItQw3f2RDZ%2B1sJ%2FoNzddcm3dvrttjn6nPMQtUMCRGIEt4OX41ufFand4lW0qQY%2B6wTyirLUr8FNMcn9YGG8GjwAbAuPhciSaRMd3bGn6QYXZVGyVomJVBG4aQIyrs2Ld2ddJPdFFMzRkonOv2mXS%2BIL%2FbBpZgD%2BGtAyo3ZR24jieoogGa6s0Ghy7QpFeLyxD1dit0vLl%2FGMqstHw94rTjfvt42A9IqQjRsna%2B9DFLHFDaGObMJqfL5rxkedgN58J0imWyO6WMcoPtbnN86cNV3dYhsq%2B1wEhKquqNf4zPycvYea7BPHdD1JwYjbwSJWsFWTK1QyfNUynNv2i%2FfhAhEMXJdTxjT6nnHBq1FXw%2BD78C1%2FJWnSjkM0tBFkihyVBcbcKA3RJftanHreeXGxBRozvEqxDRCH0jCVfRkk51IY1mR8mJdQ2tBtVLMJ%2Fc6sIGOqUBvr8JHSD7iPKN%2FUEswo0IZS1ZRVm3Q1WUGRWpT8kg7gXCGEY21qyPULl3BU6ZSvRL7HKCqGESsaT6apAcjd0uM3gGNk6IZ3j%2BmKvyKMvltIVg4q2fd909d07c1JYXFKsi0yR2WTLnfb1gLnqt9%2FjuE%2BNWjVVypbykK7%2Frgrpsdh67%2BseWtJeKpU4tYFKcR9W74rT3WwRf01eDGWaJ58vhT%2FhRXJKl&X-Amz-Signature=6f64acf90ddf45b7f938003cdaa9e58a9864f9a8df2eec308bac56be0d0602d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JPJMIXJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFfp6wm5spOfqI9aTHdyo%2BBZU65sLQZmtmmNu2QFCIz7AiEA6ei0RpCgGN80bN4IfBsFjgiCel0kPXd1Ze4z%2Fh9RNl8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDCAMXCix1o3ajTM6VircA8frf3%2F6T%2BqAMZivISyuoSGRoIszFX2MPXXefM1OMWBcDH1F70FZC2%2B2Pd2wwlH1p%2Bl0TNYfaMDiI7y%2F8pC0Uxsj15%2BjHRgYPcI8v1zgHEh8IC9npewBk8R2g%2FKWzAj7%2BX2Az6AnHkuMnFA3ovDk5DKLuMgnJXW4L0LUAMo8jqK6zlQrJJOIWjHRl74sus2yoxqItQw3f2RDZ%2B1sJ%2FoNzddcm3dvrttjn6nPMQtUMCRGIEt4OX41ufFand4lW0qQY%2B6wTyirLUr8FNMcn9YGG8GjwAbAuPhciSaRMd3bGn6QYXZVGyVomJVBG4aQIyrs2Ld2ddJPdFFMzRkonOv2mXS%2BIL%2FbBpZgD%2BGtAyo3ZR24jieoogGa6s0Ghy7QpFeLyxD1dit0vLl%2FGMqstHw94rTjfvt42A9IqQjRsna%2B9DFLHFDaGObMJqfL5rxkedgN58J0imWyO6WMcoPtbnN86cNV3dYhsq%2B1wEhKquqNf4zPycvYea7BPHdD1JwYjbwSJWsFWTK1QyfNUynNv2i%2FfhAhEMXJdTxjT6nnHBq1FXw%2BD78C1%2FJWnSjkM0tBFkihyVBcbcKA3RJftanHreeXGxBRozvEqxDRCH0jCVfRkk51IY1mR8mJdQ2tBtVLMJ%2Fc6sIGOqUBvr8JHSD7iPKN%2FUEswo0IZS1ZRVm3Q1WUGRWpT8kg7gXCGEY21qyPULl3BU6ZSvRL7HKCqGESsaT6apAcjd0uM3gGNk6IZ3j%2BmKvyKMvltIVg4q2fd909d07c1JYXFKsi0yR2WTLnfb1gLnqt9%2FjuE%2BNWjVVypbykK7%2Frgrpsdh67%2BseWtJeKpU4tYFKcR9W74rT3WwRf01eDGWaJ58vhT%2FhRXJKl&X-Amz-Signature=5f1193cfa5f0bfa3294ab2f01de5cd6e7aef5aa2d058e0f6065e7d66126f5f7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM3H2HHD%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCICdj1zvaAX%2BwzsxjQdJRcxfhrSlI53Wia8HpUzOsm0XtAiB2hTEwIKvBPXkSq%2BJNDyd7pfkT%2BdY3p27EUHcnFWMNlir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM15yN6xyuQWBipybLKtwDN2gjfhKl1ISgWDyEhYMpYJyk1mxPFJ1epTEOfTkrMiK%2F8AzEZiHBqlsB%2BMqqAcw17Tvo5eaGb%2F6phS69PyPOmaHJYTpr6Q2zNXPSI%2B9IqOuzBZIo4fK6hJib0HzVs5irXDhiQX1KyKa2S%2BPwj41IYljWbdA8TGu%2BgPVy7gfil3zfXvEertL%2BI3fKy7xbn%2Ber%2FFMH2%2F5TQesL1X1GXynEJvOjP%2B9lOujyKu2ov9w8oQxDed%2FLVY9SI5mxgYf%2BHDasNvQr6NV3vWeFqL4CAPsReimvfG%2B%2Bp9NKg7h7c1JjEIeOHlSVdQKM3BVGvz7J6ibMI371E9x%2FwbdoHxuHJwh2LBnZLh0n0XMwR8wC0nqob8TZ7LGd7777InSKomjCJjVw3xtKspNApHfa1tM1NcsDUeawhNSbRY1ZsMAX5KOnNwbqs30VTMkWrirh5B%2BX7bDTYwMDQ9MqkHHf6lYQnOhFhZceNYsoSJPp4gQAFN3thxoobHBr91CTjSH5cs9SmlpJeygP0DRZu1Hky0zt9fsVOmbZcuVliwwkc%2BXZvuyUgFZnoOTr7hyfuwYLlrxAiU7hwmVBJyF4iuD%2F9u6LKbW6WxMrFY%2Fd8zRLePBTkh1aQoeXrKBoc4zMl0YN3ZAwu9zqwgY6pgHZjDyaPZvG4JEcm2FyVBM0gn%2BTJYOEpOlA7UjnTMdXl0upzOAXh1mXb63E0ggN6Tao7V8XViVgQ30cOyxdHQhcuLsltrFU2Xl02o%2B%2FroDovqiVq0VB6I%2B%2F%2FteNnyOSKxYvTHN%2FkwP6Z%2BRNfUoYNynlEEMCUGpWM%2BI8nvy6osE0grQ%2BQDPe9AY84Cxk7%2BxAnTP%2FnN%2BX0474NGGcykUQtl6IfPtnDtwl&X-Amz-Signature=2cab91241089f90ede41128cd6c11a2462c50169130e05bf810a4737d63c8463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZETQ4L2G%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIHDa%2Bnl2cpy75XRipVauCG8oaKsMdkHjkDwwxTBrWRuaAiBT0xodNqHy7qXMeERLuXmWjdKfpRLLyKayuKNRz9UQ2Sr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMth6JGAuOloFNv0pgKtwDGYXS5iXuI0NOkSB63aA6JrPO4xl6jl2P7FcCMdXl61tx%2BQaoktd%2BmOfyEOGJPUig9m6ssUeWD3zxcmd0oup7h6yMerg8VeyfSV1NjvpmQ2ImcX1fstgP1zGNGy%2FZa8Zac1wtsQ4SDipvlD6VBW8Sih5o9UMhPV9cOz62X2i4j8GtULjIkuDDsIgYoIUowByEqGJ9M4THJV52AtAtnSv4P%2FMdQvKkowa7PhDttdOxDBPf7rI3zgzMAI9KsuhWKmwTMf5h1CCtX5rvUQkljNeLQ4bNvxalFdmZkydScRFeiaa4yPz3ulsBBcS18v7gwR0clU2hg3fC0Lb%2B%2BqEW7UTUggRvjmfsGpqXPCDDf0U9DESyvkbms5iYf50qjpX2%2BwKLMEP6AJCZjK0dTB7gTYomBm0uCHg4vLSwXgBzI9bolS%2FStV31KfxdcSxzwtPROQEj5hBEdOMiDYZ%2FXlTXQLR6P63di3YBrIuBeN4ravW%2Btil%2BZYqiRytVS1EQTpqKjHoQTwpB9m12wU0P%2BouANypAqwo1wcQMiZ6gRJeFTgQSnEzFX4ZMLuffeR8F65leLRXwTfEW%2FKuvkDD0LLBDhUsoCyYNl77xgG4VyreCoTR%2FpB2TvWcithn9vSd21xQw%2BtzqwgY6pgFVVKSSjI%2FVsNKvWESbTWUiggjpKltS2WbxkY7uXhVgxbNQ6EP%2FDlLos%2BaDdOkvPVzgF5yxDkWdaotKzmsFWf%2Bis4AvlxuzQQQ0a6X3bXiIw4z3deMaLC2OKIu3yFl5qihjnruQVlw8CTUzL%2BM85B8PMpIL8%2BYOHeIBoY8kC2Cx%2BJiSTge4i0r3SXxKgKCpTjhaD3o7ue3RyCtxpd01j55FO3P%2Fva0x&X-Amz-Signature=2275b86882668c8a5eaa2122153d2fade9894acbac1464a848d2ad0a794426c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JPJMIXJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFfp6wm5spOfqI9aTHdyo%2BBZU65sLQZmtmmNu2QFCIz7AiEA6ei0RpCgGN80bN4IfBsFjgiCel0kPXd1Ze4z%2Fh9RNl8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDCAMXCix1o3ajTM6VircA8frf3%2F6T%2BqAMZivISyuoSGRoIszFX2MPXXefM1OMWBcDH1F70FZC2%2B2Pd2wwlH1p%2Bl0TNYfaMDiI7y%2F8pC0Uxsj15%2BjHRgYPcI8v1zgHEh8IC9npewBk8R2g%2FKWzAj7%2BX2Az6AnHkuMnFA3ovDk5DKLuMgnJXW4L0LUAMo8jqK6zlQrJJOIWjHRl74sus2yoxqItQw3f2RDZ%2B1sJ%2FoNzddcm3dvrttjn6nPMQtUMCRGIEt4OX41ufFand4lW0qQY%2B6wTyirLUr8FNMcn9YGG8GjwAbAuPhciSaRMd3bGn6QYXZVGyVomJVBG4aQIyrs2Ld2ddJPdFFMzRkonOv2mXS%2BIL%2FbBpZgD%2BGtAyo3ZR24jieoogGa6s0Ghy7QpFeLyxD1dit0vLl%2FGMqstHw94rTjfvt42A9IqQjRsna%2B9DFLHFDaGObMJqfL5rxkedgN58J0imWyO6WMcoPtbnN86cNV3dYhsq%2B1wEhKquqNf4zPycvYea7BPHdD1JwYjbwSJWsFWTK1QyfNUynNv2i%2FfhAhEMXJdTxjT6nnHBq1FXw%2BD78C1%2FJWnSjkM0tBFkihyVBcbcKA3RJftanHreeXGxBRozvEqxDRCH0jCVfRkk51IY1mR8mJdQ2tBtVLMJ%2Fc6sIGOqUBvr8JHSD7iPKN%2FUEswo0IZS1ZRVm3Q1WUGRWpT8kg7gXCGEY21qyPULl3BU6ZSvRL7HKCqGESsaT6apAcjd0uM3gGNk6IZ3j%2BmKvyKMvltIVg4q2fd909d07c1JYXFKsi0yR2WTLnfb1gLnqt9%2FjuE%2BNWjVVypbykK7%2Frgrpsdh67%2BseWtJeKpU4tYFKcR9W74rT3WwRf01eDGWaJ58vhT%2FhRXJKl&X-Amz-Signature=04fef28a4ae6521dfb487e761888d05c6b053772629a09db2d109caa3afe9ec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

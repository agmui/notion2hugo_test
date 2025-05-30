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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWQUEIOR%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCfeNXPJqIEF%2FIxhkDPaWyjOWmzTIRNoZZjk80V76PmAiBeD5FoIQm296LbFHARBoLmyxTRzOfAO0FyW05%2Fdv7WOiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz1vZ8mOYTa1i6W1AKtwDEpGm1HxSiL%2BFg4aUnQx02pYi3web7vcVAovTBYe0joHW%2FHK%2BNlCvWq6RcJJo1QNxxW8neoMb7DnW4BFjvfbjkcZlLXR9PGdtgIqMlXzKXARS3k9bCfR4CwoQxO9FyqQWaxE0nAjpt2wxLuyGgP33VnyxkE5NHKm5IIKCUClWFv%2BoVCPGci2EQHiJbxQSKctokK06gMkWZ06KAwRE8Z8cNOBOCzAOicWocPuD1u5n9uY%2BjHDzZ7%2BoHuDLUeJqnsWVfFKUGwQX5D%2BfUbMIpEp2Oq931lWaieIzKAzDPnlo7yfptYtdQoor8NWKIOIpmPMD1fS91KTBhm%2Be5J5fB%2B4T5nQk3tOeBNoM1XkA28jClI%2FNbX15RwBVynxuSKWHEUWAAWp0uCCOaH3Lnp0AfRtGT4DnvAH6XZSbiO0OYnLnQb5JQCsWMIg%2FMRd%2Bg74PunWuGWHyWzCBvIIHmtXll2GgtxaLSMDrWc%2BDlBJ0qnt9NbVRLGCPNCZnp0nY7iMhEnRlRo2wGjIh2IiqehqFsY%2BuOxhBbaJf7dohPYYpYgOiaL5yVy5eof1%2FSWNGvm1NLlJXp3xaxSCbJTxIC3qUJ0b4%2FC45f%2FcUPSQmwsOoYLCedtnClRQSPkAOD64gkz8wk4fmwQY6pgG3xgK%2BUKeAqxPqBXwu9UnCrdWjMhOqy%2FwoQ9yyAMjoO6PGLjO0HBj9AE8gOI26dIqa40tc0D%2BUFPyJLrfZSETrdfdZ77heZlY27ZYKRtVmxSzZ3DdtxtG5i6%2Fu2F7hV4ENuvC2faYhYmcUBrVsOSQxuCkS%2FdJ6Kay90%2BOlIvHbR3VZCou5BCcAbokMxwYIWz6PAMIpGW1TltqDGl3R135EMS0XD07b&X-Amz-Signature=c239874519c8f27cbca9894869f7567d2a7b0403382bf6cd3794d675c779f88a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWQUEIOR%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCfeNXPJqIEF%2FIxhkDPaWyjOWmzTIRNoZZjk80V76PmAiBeD5FoIQm296LbFHARBoLmyxTRzOfAO0FyW05%2Fdv7WOiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz1vZ8mOYTa1i6W1AKtwDEpGm1HxSiL%2BFg4aUnQx02pYi3web7vcVAovTBYe0joHW%2FHK%2BNlCvWq6RcJJo1QNxxW8neoMb7DnW4BFjvfbjkcZlLXR9PGdtgIqMlXzKXARS3k9bCfR4CwoQxO9FyqQWaxE0nAjpt2wxLuyGgP33VnyxkE5NHKm5IIKCUClWFv%2BoVCPGci2EQHiJbxQSKctokK06gMkWZ06KAwRE8Z8cNOBOCzAOicWocPuD1u5n9uY%2BjHDzZ7%2BoHuDLUeJqnsWVfFKUGwQX5D%2BfUbMIpEp2Oq931lWaieIzKAzDPnlo7yfptYtdQoor8NWKIOIpmPMD1fS91KTBhm%2Be5J5fB%2B4T5nQk3tOeBNoM1XkA28jClI%2FNbX15RwBVynxuSKWHEUWAAWp0uCCOaH3Lnp0AfRtGT4DnvAH6XZSbiO0OYnLnQb5JQCsWMIg%2FMRd%2Bg74PunWuGWHyWzCBvIIHmtXll2GgtxaLSMDrWc%2BDlBJ0qnt9NbVRLGCPNCZnp0nY7iMhEnRlRo2wGjIh2IiqehqFsY%2BuOxhBbaJf7dohPYYpYgOiaL5yVy5eof1%2FSWNGvm1NLlJXp3xaxSCbJTxIC3qUJ0b4%2FC45f%2FcUPSQmwsOoYLCedtnClRQSPkAOD64gkz8wk4fmwQY6pgG3xgK%2BUKeAqxPqBXwu9UnCrdWjMhOqy%2FwoQ9yyAMjoO6PGLjO0HBj9AE8gOI26dIqa40tc0D%2BUFPyJLrfZSETrdfdZ77heZlY27ZYKRtVmxSzZ3DdtxtG5i6%2Fu2F7hV4ENuvC2faYhYmcUBrVsOSQxuCkS%2FdJ6Kay90%2BOlIvHbR3VZCou5BCcAbokMxwYIWz6PAMIpGW1TltqDGl3R135EMS0XD07b&X-Amz-Signature=e41d805dcbf2e16d75fa4ac494c19c91ea757553a17ddf3637d226cb374e130b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWQUEIOR%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCfeNXPJqIEF%2FIxhkDPaWyjOWmzTIRNoZZjk80V76PmAiBeD5FoIQm296LbFHARBoLmyxTRzOfAO0FyW05%2Fdv7WOiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz1vZ8mOYTa1i6W1AKtwDEpGm1HxSiL%2BFg4aUnQx02pYi3web7vcVAovTBYe0joHW%2FHK%2BNlCvWq6RcJJo1QNxxW8neoMb7DnW4BFjvfbjkcZlLXR9PGdtgIqMlXzKXARS3k9bCfR4CwoQxO9FyqQWaxE0nAjpt2wxLuyGgP33VnyxkE5NHKm5IIKCUClWFv%2BoVCPGci2EQHiJbxQSKctokK06gMkWZ06KAwRE8Z8cNOBOCzAOicWocPuD1u5n9uY%2BjHDzZ7%2BoHuDLUeJqnsWVfFKUGwQX5D%2BfUbMIpEp2Oq931lWaieIzKAzDPnlo7yfptYtdQoor8NWKIOIpmPMD1fS91KTBhm%2Be5J5fB%2B4T5nQk3tOeBNoM1XkA28jClI%2FNbX15RwBVynxuSKWHEUWAAWp0uCCOaH3Lnp0AfRtGT4DnvAH6XZSbiO0OYnLnQb5JQCsWMIg%2FMRd%2Bg74PunWuGWHyWzCBvIIHmtXll2GgtxaLSMDrWc%2BDlBJ0qnt9NbVRLGCPNCZnp0nY7iMhEnRlRo2wGjIh2IiqehqFsY%2BuOxhBbaJf7dohPYYpYgOiaL5yVy5eof1%2FSWNGvm1NLlJXp3xaxSCbJTxIC3qUJ0b4%2FC45f%2FcUPSQmwsOoYLCedtnClRQSPkAOD64gkz8wk4fmwQY6pgG3xgK%2BUKeAqxPqBXwu9UnCrdWjMhOqy%2FwoQ9yyAMjoO6PGLjO0HBj9AE8gOI26dIqa40tc0D%2BUFPyJLrfZSETrdfdZ77heZlY27ZYKRtVmxSzZ3DdtxtG5i6%2Fu2F7hV4ENuvC2faYhYmcUBrVsOSQxuCkS%2FdJ6Kay90%2BOlIvHbR3VZCou5BCcAbokMxwYIWz6PAMIpGW1TltqDGl3R135EMS0XD07b&X-Amz-Signature=aa21ce7b8504545fbc167200d6cb79347371107c163e0d7f060f211d682e87be&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJFESGN%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxCHvn0%2Fo58hFrvhMNTdaeVBUOpq3tdiTJROUTUVNSJAIgA7ec7V%2BUzZPEYkTPCqMxcegKEebtR652B04tgeAEppkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyGe3XknscFWa0wTSrcA4YqR69D%2BwxhVO3iy3aP6KAeZMqJyxA5lYNdhMZmvKlEMvrwfHpTC6kJvykpmDZ4kb1Xju7AroOHyAqLgOwP9Qwcte4YtklMTgFf03vGoPdJtX3ibDIVs8zJSxbduZXoqtWl1MnwB%2FMKCdTKkz6GVvlcClS0KaT1B7CqGQ9pM8ixdAlR0EaqfuMbx7QbwHW53BA7Lr5DndlqUSe1Y5qHsHAnI0hKHpXoyzH6Znr5qxaG1mw3LQGcE8VOjG3jE5xJKEHk7MZAmCT6jONXUuWlCwwesHbiHeStZRGleS0KvCp%2BXhBTjU%2BV1htP9mnaleF3A%2Fh0TSF7r77L2vlkwEMIAUkKkY8XNz6MH9L7dwgad55qQuFOvkXh35hOjoNm7fm8IX2XmeCHUV268u2Z2d6jJAAQpF%2BlB7IeiVgqxx7J0rj2IfqUtHUKSzgK%2Fn9aaMzZgEbaEC1MqfgcVNGH0U%2F%2BbKnLam6Tj%2FDAfaIxTsRUk6uxlou%2FgJ23d%2BxU08Jc5e9TtbCTkHfwwBJUTF4DrLefi%2FyymoEQwcfIwJUlJkVNk5MUHnWoMUQ9wBaHwTM6OeKlUcg143ziOwtWjlHgj7dXsBgSryOiOTSUulK0coHtg4YJyH9JUcuEmJy1NS0dMPHc5cEGOqUB%2BQi4ujn2Ayfoe42F7Q5mfP2P9jCAsJ14XUWeH60xU%2FKnbAQl2PvxP47fn6o9%2F%2FenogftILxir5Nd%2Fx%2BT4mu%2FEqiyhXDiehdPw4uTfrPJLFOaPvccJDZs1J0nA5lyGPSVBwaKyIdLKyQylhuChqhjcY0x3ag4l3l3QMV4lIcfRKO3LKEYwgmORbEgser4B5a%2FzhvYX78b1CvOO4s5ivHuCN9VvV6j&X-Amz-Signature=ce347e93fd9bbe7b72dbf8cc8a070809b436fd971929f51ded12d3dc51bd8f16&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJWR5V5E%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs2%2BOf4xpO2FFLi5Jtyl4BLEsIAQdD228tu2U4q3Lz2QIhALZqf2aiLzCA5d44ykbAM3AuKOYBP1Kinbz0hWjyhvwHKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxwqie2eYRN4z37LMcq3ANdtkGcDSsy2wR%2BzlXyu%2Fbga7uZ8LXYKJ1SdXPg1ox0ifFv%2FbKprdsAXfwhe3YabxcnvpbIVkVC5PwGTd9G0EtujuwaVtGWU0Omb%2B%2FWyg%2FElMcTFBfp34axMxKekl8k8vzFQ9TZO3VlvCygmCigWnmhnMz7TTQRlg9qsmvZNEldtTQjwC%2Fn7SjAsQMT3cukEEspPcsRgBZuJlRyLPpeaXKGDEYFOsRZUzgMTFC8C0x0cs09np0J4X6abS4y9vw%2Bdr4jHjmCfVzysTK6M6T%2BojFhuXs52vOMsyniOxps1iKBl1pJjL4kcCP4ZB8jtzaxie1h6HdViPE9E%2B0qdRlfFvlbDybM8KstPUhn6izVsXwkaPOfNO7vzYkgBQbQ9ZPl8MJwlajpk6h8kJtfzUKwi8guA%2BIGOop7lMUDuJLysd8m3xsqwTJjs7BH7OUAdSdpysr9e5GHoEBqbB5P877COcdtUd2K7eLAxEGka2dWGgTFQuU39REFLVpvoOkBogBt%2Bdz4luvekn5rxLWEdLtCxvCGhpeQxhM7NyM1T1wTSmu41rDxqtrD6zLoH4u00C4x1rIIv9JDAvtqsegym1cch9zUGHZIiL2brsW4NP4vHqgm3w4WscSFMC1%2FjS%2F%2FITCZ3OXBBjqkAb0B30WfwrV6wYejxrXFQqU6oyyiL6HKW9G85lfZqdwf3sFfbAgWzVPsSkXV6jA5%2BNKwuOgPXqCfTLoL%2B5psH%2FFhoYPXfaQ%2BD8w0su%2FBW3Z8z0Mw3q3ppiWsWphiV%2BiMdMWnb%2BQwjTULu28xQYcl8Sn0%2Bo4FWlMOaCKf5xX6WNFbTkxS0unFN4XpMljpzV7J7KEbdFZaLhEixcyoxaQJrSq30jci&X-Amz-Signature=b1411e919f0a31ea4d828550f856e29045f15e92b8a22b5f1e41c480ec7be3ec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWQUEIOR%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCfeNXPJqIEF%2FIxhkDPaWyjOWmzTIRNoZZjk80V76PmAiBeD5FoIQm296LbFHARBoLmyxTRzOfAO0FyW05%2Fdv7WOiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz1vZ8mOYTa1i6W1AKtwDEpGm1HxSiL%2BFg4aUnQx02pYi3web7vcVAovTBYe0joHW%2FHK%2BNlCvWq6RcJJo1QNxxW8neoMb7DnW4BFjvfbjkcZlLXR9PGdtgIqMlXzKXARS3k9bCfR4CwoQxO9FyqQWaxE0nAjpt2wxLuyGgP33VnyxkE5NHKm5IIKCUClWFv%2BoVCPGci2EQHiJbxQSKctokK06gMkWZ06KAwRE8Z8cNOBOCzAOicWocPuD1u5n9uY%2BjHDzZ7%2BoHuDLUeJqnsWVfFKUGwQX5D%2BfUbMIpEp2Oq931lWaieIzKAzDPnlo7yfptYtdQoor8NWKIOIpmPMD1fS91KTBhm%2Be5J5fB%2B4T5nQk3tOeBNoM1XkA28jClI%2FNbX15RwBVynxuSKWHEUWAAWp0uCCOaH3Lnp0AfRtGT4DnvAH6XZSbiO0OYnLnQb5JQCsWMIg%2FMRd%2Bg74PunWuGWHyWzCBvIIHmtXll2GgtxaLSMDrWc%2BDlBJ0qnt9NbVRLGCPNCZnp0nY7iMhEnRlRo2wGjIh2IiqehqFsY%2BuOxhBbaJf7dohPYYpYgOiaL5yVy5eof1%2FSWNGvm1NLlJXp3xaxSCbJTxIC3qUJ0b4%2FC45f%2FcUPSQmwsOoYLCedtnClRQSPkAOD64gkz8wk4fmwQY6pgG3xgK%2BUKeAqxPqBXwu9UnCrdWjMhOqy%2FwoQ9yyAMjoO6PGLjO0HBj9AE8gOI26dIqa40tc0D%2BUFPyJLrfZSETrdfdZ77heZlY27ZYKRtVmxSzZ3DdtxtG5i6%2Fu2F7hV4ENuvC2faYhYmcUBrVsOSQxuCkS%2FdJ6Kay90%2BOlIvHbR3VZCou5BCcAbokMxwYIWz6PAMIpGW1TltqDGl3R135EMS0XD07b&X-Amz-Signature=4ae2e1db2f768900d1b95754b89e395b9802ee466d37056c75776ab4e8936257&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

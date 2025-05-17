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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653Y3NHNV%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG38iZTINGhfG2SGvAbfVJ2WWbdwP5p%2BMG55bgn4blewAiEAjaMN7%2B61GmeJyjlDvaXvYS8ZsjIIuCk2B98u%2FLct5OMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFFmg4gvnn0%2BE2WvVyrcA6c8OE1yR%2BC5jZI8M2PPcG5Ii6lpst%2Fq%2FFHs9LH6ztkv%2FS3mlvZZyfEirMcQdbPAVZeyHk5nFosmQzH33t%2BsD4uS4I3RqkftqqJAsGoopv3ER%2FNGCz57ueZyNIX0ae%2Ff8GioYMDzo5sT7H3tKjY2XF0ZXe2n8hM396AKqrGoZP0P2sQbSr5sIRroJ2grV8mmFK4wH7jSqyqc6cLNt8B32q0DZIzSWgzAUIjrE1uK%2BtyOEzjJBkerHWbu%2FxfrT8Ba4zkoZvr5%2BAD3WDbkBDYl3rUIBKInYR6RQ1QY%2BnPFb8i4qUYwkivocLxHuxi0xKkkyuzzbZiFF6Pmyb880x40bdicAbSYMS6ihCq9AWD4jnkS1F0J1sD1QcagjrULvz7iDa%2FZR4N3KVEvIw5XckAEcIBn9aK0MdID3NAcugwlQhMgflvUBHhVLC%2FxmHs22AI4UrNB3IiUR1VnRKohBuNJGb473EaeJiGkU9ilJvvpt84u4vXDSE2K4XFpLCalxpgCZ%2FKje9XySQUPyGFPdoInynOTkYlwssllS61hUteZ7IzxIAjq5Imi5ZYfEZWY7WXFZnU4bEnMbI9S8gJYzYwju%2Bt3x1m8fPRCokCt1OyRjvaUC05K%2F5DsPGJpRQNXMJbLo8EGOqUBjM7wN%2BU7yFMkMYG1Syz3oKDpkE86%2FGUwdpuysQfFgRwr8YZ3W619kxhNePGWXpfc5gvm3QBoVc3XTmoMnR4l1hGEv9IMBrhWpHejMZNLlU%2F8jRsY%2FssifSKu7LQ3mYwPbPxRnK3M6RUk2TOyAXcFvnasxU4eAXohvgi%2F6Ba0Y75YHfXcnH1%2FGdP2B%2BIzIw8bEbr8eM3vdH5mp%2F0LWuG9QUwSgcXM&X-Amz-Signature=a2ffda4a35daaa7c39a1e70f1109b5dec8f8137cd3dd2320cac2c366a582aafe&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653Y3NHNV%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG38iZTINGhfG2SGvAbfVJ2WWbdwP5p%2BMG55bgn4blewAiEAjaMN7%2B61GmeJyjlDvaXvYS8ZsjIIuCk2B98u%2FLct5OMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFFmg4gvnn0%2BE2WvVyrcA6c8OE1yR%2BC5jZI8M2PPcG5Ii6lpst%2Fq%2FFHs9LH6ztkv%2FS3mlvZZyfEirMcQdbPAVZeyHk5nFosmQzH33t%2BsD4uS4I3RqkftqqJAsGoopv3ER%2FNGCz57ueZyNIX0ae%2Ff8GioYMDzo5sT7H3tKjY2XF0ZXe2n8hM396AKqrGoZP0P2sQbSr5sIRroJ2grV8mmFK4wH7jSqyqc6cLNt8B32q0DZIzSWgzAUIjrE1uK%2BtyOEzjJBkerHWbu%2FxfrT8Ba4zkoZvr5%2BAD3WDbkBDYl3rUIBKInYR6RQ1QY%2BnPFb8i4qUYwkivocLxHuxi0xKkkyuzzbZiFF6Pmyb880x40bdicAbSYMS6ihCq9AWD4jnkS1F0J1sD1QcagjrULvz7iDa%2FZR4N3KVEvIw5XckAEcIBn9aK0MdID3NAcugwlQhMgflvUBHhVLC%2FxmHs22AI4UrNB3IiUR1VnRKohBuNJGb473EaeJiGkU9ilJvvpt84u4vXDSE2K4XFpLCalxpgCZ%2FKje9XySQUPyGFPdoInynOTkYlwssllS61hUteZ7IzxIAjq5Imi5ZYfEZWY7WXFZnU4bEnMbI9S8gJYzYwju%2Bt3x1m8fPRCokCt1OyRjvaUC05K%2F5DsPGJpRQNXMJbLo8EGOqUBjM7wN%2BU7yFMkMYG1Syz3oKDpkE86%2FGUwdpuysQfFgRwr8YZ3W619kxhNePGWXpfc5gvm3QBoVc3XTmoMnR4l1hGEv9IMBrhWpHejMZNLlU%2F8jRsY%2FssifSKu7LQ3mYwPbPxRnK3M6RUk2TOyAXcFvnasxU4eAXohvgi%2F6Ba0Y75YHfXcnH1%2FGdP2B%2BIzIw8bEbr8eM3vdH5mp%2F0LWuG9QUwSgcXM&X-Amz-Signature=95f6616af570ec276bfc274e5c64ce7a1b2fa12283e782bdfdbaa2fad922b61e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653Y3NHNV%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG38iZTINGhfG2SGvAbfVJ2WWbdwP5p%2BMG55bgn4blewAiEAjaMN7%2B61GmeJyjlDvaXvYS8ZsjIIuCk2B98u%2FLct5OMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFFmg4gvnn0%2BE2WvVyrcA6c8OE1yR%2BC5jZI8M2PPcG5Ii6lpst%2Fq%2FFHs9LH6ztkv%2FS3mlvZZyfEirMcQdbPAVZeyHk5nFosmQzH33t%2BsD4uS4I3RqkftqqJAsGoopv3ER%2FNGCz57ueZyNIX0ae%2Ff8GioYMDzo5sT7H3tKjY2XF0ZXe2n8hM396AKqrGoZP0P2sQbSr5sIRroJ2grV8mmFK4wH7jSqyqc6cLNt8B32q0DZIzSWgzAUIjrE1uK%2BtyOEzjJBkerHWbu%2FxfrT8Ba4zkoZvr5%2BAD3WDbkBDYl3rUIBKInYR6RQ1QY%2BnPFb8i4qUYwkivocLxHuxi0xKkkyuzzbZiFF6Pmyb880x40bdicAbSYMS6ihCq9AWD4jnkS1F0J1sD1QcagjrULvz7iDa%2FZR4N3KVEvIw5XckAEcIBn9aK0MdID3NAcugwlQhMgflvUBHhVLC%2FxmHs22AI4UrNB3IiUR1VnRKohBuNJGb473EaeJiGkU9ilJvvpt84u4vXDSE2K4XFpLCalxpgCZ%2FKje9XySQUPyGFPdoInynOTkYlwssllS61hUteZ7IzxIAjq5Imi5ZYfEZWY7WXFZnU4bEnMbI9S8gJYzYwju%2Bt3x1m8fPRCokCt1OyRjvaUC05K%2F5DsPGJpRQNXMJbLo8EGOqUBjM7wN%2BU7yFMkMYG1Syz3oKDpkE86%2FGUwdpuysQfFgRwr8YZ3W619kxhNePGWXpfc5gvm3QBoVc3XTmoMnR4l1hGEv9IMBrhWpHejMZNLlU%2F8jRsY%2FssifSKu7LQ3mYwPbPxRnK3M6RUk2TOyAXcFvnasxU4eAXohvgi%2F6Ba0Y75YHfXcnH1%2FGdP2B%2BIzIw8bEbr8eM3vdH5mp%2F0LWuG9QUwSgcXM&X-Amz-Signature=f590cfd5d7b963ef6595185fe498f270eed6c88aac34a7ffb376c4e6efe32cec&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPSA5D4T%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe80DVSqeoH74D4S9YsC74SOdWouhY%2BOY6z1OACJ3zMwIhAPIP1tQibLIQOZxTmze9t5xbojQ9fKzB8hJAZv65o8UPKv8DCGUQABoMNjM3NDIzMTgzODA1IgzoOmHBGhix86Agt70q3AMIerKcjcGLE3yrzxVssCsy3whz4Y2PmzBvKA4evNCOXTTytDo9xM00jccWZ%2F9XW4rPUwYldulm3sxnpFNNR3VGRUouviYVeSvnR0sUhNOgPQrNHToNiLtOwZOlVWivIOP3J5BSGN%2Bqs9UI8ahWmNgDLx4umTkb4NAXhsRgxY3XTedT3EGUl1ZaVJf5iaVhI7SqTndiO2IcUALwZLnRN2jI%2FddJ0MTFl%2BNgTOQCG0MjkDgx8DFL1hmtZKp4hiZjxLDRkIFKvrF5Pu9ujxmoRDnfrqgMa1bns9GIWq583tp3DBEJI3VB7Ho1CIN4XV0wNx7RCss3QU9hBGbJH7v%2F9d%2FEpRbsrrxDsMmv%2FNQuXMO9KcV9EsLndg3UW1NUVsZrLhCWBwz%2F8TdykB8ZA7pOKRzduts5P8aD%2F73Q8VkLlsZ%2B1dxzNN2DmuqiG5kaxLELBHRLeE2gA3KcnepEfcDJn%2FhYrunM3CF9c5EF0pgf2m6O1HxxHsxbE9krtHZqmU0tIr%2BUI6Znxwt%2FS3L4ntaer%2Fz8Fns4UoMWt05Qvg%2FhIdElsBcNlfApDiPG0TZykeauSkUg1MjOHOkRUyPWvmOoBeDCXMhTqA6kQNjsx%2BNA1DSEtvHjtUCVTPig5vu4ojCqy6PBBjqkAd7EoSz7CnqIRh6AI6L8B0cujSW980Z%2FzZIjCqnHKMSKGjrGYwx9PbqgwJTa7a2P6Vm1xt4hIz6RNybqZkYVT1fjg%2Bmm03IzHlrKq7a3vG0WGc5z23fNVf58UoOeKnUftn9Tfrz%2FUBgoyzmoaIDSNBewTuGCsUPNqgwklv50kJLfvM8CEnSrs3pc%2B9ZmH46u65E%2FR%2BKk9DWyYqj7LJgLJ0UDIUZ5&X-Amz-Signature=1a8c3e72927070f2691c9886438407eaefa81c48e75637accad8fe2ade338659&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUUCSZ7E%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BdWS%2BVYcgerbumAFByYLziaFzvT565M7%2BmL9ogrc%2F2AiEAy70XVXQif2o1PySxy%2BPfgO5VxQJMS7CSTLpfCE9iHioq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFDoEaBfkrClgbGrryrcAxk0hXJerw%2BP9T9GFzEqcx4AdDmrv9P8Kz%2FA7XaRgIADgJJE%2BAKCffiTnQanUn%2BFu7voG%2BRBXnkwAFkNL6PrNPwQ%2BCE0O5s%2BEaGMbWhZiYNW%2BOHbIH0XfwRNGIaqteO90WLOie7OvkP55duiG%2BLEol7mzcOhr3LK1PiaytZmG0f5D900wsxT1luewGyKRVEyqvueF%2F6jEoc7F1pKc%2B0T48zw6MS6wj21Esnpk6Uih0PrWu2Qf7Xx2JhKtcbdPTluHLegp8r8A1Dmp4lNW6%2BKpW%2B64zy99JiqKiyoULjOKemyVxSmijjuiKXp%2BN5BcwYSq6cqJ12uyWb3QlclyadB9IJOT9z%2Bp1nK9qTW77jgYAUQ1ZuLs4urCFUhiyFwuDvIJaeZ7wYbTQeQLHOQv02%2FRPUjx8t8aCug1E9rpTQzlKqbpBX9RG%2FCxqat9WcqsK25yTZwAENZvJl%2F3IY2VS5Ulz94BDLGubiDTRE9n0CfCyPILD7X8KdOgsMvoEzJJteQX58rDW%2Fu2dXfmYg9Jum%2B6S%2FfxjmsC9IyG7HslxKOgvVpPDHE1fToDD4MuHx4bKKLH4VJhzhwuPqjdF5HtzC%2B7353ZXSfbBidP6ijhQ9t2UZccmOYyReOvlqjhY5%2FMJbLo8EGOqUBvET0gn0XOOoIvMAI4HxcMHlBT0a5NrGmKxCO%2BMB0TGo60S%2BTvG0Y1EPFFfuqULjRDVZwYVX0e0927mmlZvP1isoiMjiv%2BZv%2BVgPZMO7c2dlhtuE5j%2BndgvoumG9je%2F5A0bxjkFa94FA8XCh7gBlwl1izs%2FrSTIrKICeP2mswUqL62JJ4CGXRKgYLBaoFzZ75NY4tmDI5yO2qxRWCnK6uvQ5keT5f&X-Amz-Signature=1d6e8d1370976bcf7e7eb1346c41aea6194f94d3d03d5533196c0cf60cc66aa1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653Y3NHNV%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG38iZTINGhfG2SGvAbfVJ2WWbdwP5p%2BMG55bgn4blewAiEAjaMN7%2B61GmeJyjlDvaXvYS8ZsjIIuCk2B98u%2FLct5OMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFFmg4gvnn0%2BE2WvVyrcA6c8OE1yR%2BC5jZI8M2PPcG5Ii6lpst%2Fq%2FFHs9LH6ztkv%2FS3mlvZZyfEirMcQdbPAVZeyHk5nFosmQzH33t%2BsD4uS4I3RqkftqqJAsGoopv3ER%2FNGCz57ueZyNIX0ae%2Ff8GioYMDzo5sT7H3tKjY2XF0ZXe2n8hM396AKqrGoZP0P2sQbSr5sIRroJ2grV8mmFK4wH7jSqyqc6cLNt8B32q0DZIzSWgzAUIjrE1uK%2BtyOEzjJBkerHWbu%2FxfrT8Ba4zkoZvr5%2BAD3WDbkBDYl3rUIBKInYR6RQ1QY%2BnPFb8i4qUYwkivocLxHuxi0xKkkyuzzbZiFF6Pmyb880x40bdicAbSYMS6ihCq9AWD4jnkS1F0J1sD1QcagjrULvz7iDa%2FZR4N3KVEvIw5XckAEcIBn9aK0MdID3NAcugwlQhMgflvUBHhVLC%2FxmHs22AI4UrNB3IiUR1VnRKohBuNJGb473EaeJiGkU9ilJvvpt84u4vXDSE2K4XFpLCalxpgCZ%2FKje9XySQUPyGFPdoInynOTkYlwssllS61hUteZ7IzxIAjq5Imi5ZYfEZWY7WXFZnU4bEnMbI9S8gJYzYwju%2Bt3x1m8fPRCokCt1OyRjvaUC05K%2F5DsPGJpRQNXMJbLo8EGOqUBjM7wN%2BU7yFMkMYG1Syz3oKDpkE86%2FGUwdpuysQfFgRwr8YZ3W619kxhNePGWXpfc5gvm3QBoVc3XTmoMnR4l1hGEv9IMBrhWpHejMZNLlU%2F8jRsY%2FssifSKu7LQ3mYwPbPxRnK3M6RUk2TOyAXcFvnasxU4eAXohvgi%2F6Ba0Y75YHfXcnH1%2FGdP2B%2BIzIw8bEbr8eM3vdH5mp%2F0LWuG9QUwSgcXM&X-Amz-Signature=ebe966daffe1294f5468acc063976b866ccd81411ca30bc80dbf1a53c1db9fd3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

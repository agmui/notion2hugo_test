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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OKSIESU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhvg2cf5EORTWanodSjs3n4BEdmp6e5vcUc%2F4iVneCLAiEA%2FBeYKoMVX95LgYkNVIceK6NfsYvK%2BQGp7xXZfInz29Iq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGeSKBqIqhlMjoybpSrcA3EtdBpv1J4EXf3Ew097IyKetwclqvaxRSZvuU1jhvRan2QgvyuC%2Fbuyc4QLMis9DNmlaKcb1MTg9d%2B3pkoVE3j%2FwE39te3B64m3YiCYyv%2Fp1a1IBBC6uZLZ5zEOw2p%2BMekgLAR49pD5mBmO6vwlk%2FcvIrG20bayhEAjYwnDIGvBjhchuokrdoznCBT%2BzrH%2Bv8z3gDFwzjJZzGyvPhSfY1t3fbPHWjpkOHyRSGRDdkv77eqGtvLO5lI3M5F%2B497oH6jdROeKiHOzLl9Gv4jhVckTHNaRIrAbMuRSJt2kMMXotHTDfgNsk9AKTTzDr0qA1xw%2FNW3bDZw9v7Se9xkNBoYKmaNQU7xmxJtA%2Fy8N%2FHMUo8DU7njRDiOBwv7jkVmF4IPmZSkzpSY7ZjoT0xSdCQ%2FGiXTiYhK5JtrHTWt%2FREUILOZ0UY%2BWv7nXJy5jpwKJmanRIX5r%2BJIwWXupM%2FqVEYbzoiDRXN%2FFoAnSVFvihQccFnQJcTnuSYzpZUK4nwvfb9ZXbB%2FGh%2BVAJx8Ux9r31DDzuR7ggPsmE9Tg33a%2FIDZOUE%2FGL1n5yDn2vjbYtS3Gfhlp%2B%2BrDqKNhiYYgHbFMFisjPwvIX1QfwOc9Aqg31ym4%2FEwTjrfFn%2BrMSyuPMPHf9sQGOqUBw8GNB%2F1zEs5uHLDSJP5IqrbKkZlrOJJQYtNTP2KhZlbFWh4h2x7LSugw%2BO175qtFbvNazjF6hYJ%2FxOGMt6DMSBOZidD578YRLo5bAS22aLXxVKsHGH58hVH4PwD%2BfmsO36I9GyGtMyQ3vHiE48GXiraKTYiENSfvNxdKmS9ZtM0s0kV6YCy7aPYEJ2MG2%2FxR5K5Ps0RhFMQ9%2BW7XphWd7WnIgCL4&X-Amz-Signature=6ed47f9a832b8be1350dc936a14acbb8f633b8a06119b27db0ddc9129a0b3d09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OKSIESU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhvg2cf5EORTWanodSjs3n4BEdmp6e5vcUc%2F4iVneCLAiEA%2FBeYKoMVX95LgYkNVIceK6NfsYvK%2BQGp7xXZfInz29Iq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGeSKBqIqhlMjoybpSrcA3EtdBpv1J4EXf3Ew097IyKetwclqvaxRSZvuU1jhvRan2QgvyuC%2Fbuyc4QLMis9DNmlaKcb1MTg9d%2B3pkoVE3j%2FwE39te3B64m3YiCYyv%2Fp1a1IBBC6uZLZ5zEOw2p%2BMekgLAR49pD5mBmO6vwlk%2FcvIrG20bayhEAjYwnDIGvBjhchuokrdoznCBT%2BzrH%2Bv8z3gDFwzjJZzGyvPhSfY1t3fbPHWjpkOHyRSGRDdkv77eqGtvLO5lI3M5F%2B497oH6jdROeKiHOzLl9Gv4jhVckTHNaRIrAbMuRSJt2kMMXotHTDfgNsk9AKTTzDr0qA1xw%2FNW3bDZw9v7Se9xkNBoYKmaNQU7xmxJtA%2Fy8N%2FHMUo8DU7njRDiOBwv7jkVmF4IPmZSkzpSY7ZjoT0xSdCQ%2FGiXTiYhK5JtrHTWt%2FREUILOZ0UY%2BWv7nXJy5jpwKJmanRIX5r%2BJIwWXupM%2FqVEYbzoiDRXN%2FFoAnSVFvihQccFnQJcTnuSYzpZUK4nwvfb9ZXbB%2FGh%2BVAJx8Ux9r31DDzuR7ggPsmE9Tg33a%2FIDZOUE%2FGL1n5yDn2vjbYtS3Gfhlp%2B%2BrDqKNhiYYgHbFMFisjPwvIX1QfwOc9Aqg31ym4%2FEwTjrfFn%2BrMSyuPMPHf9sQGOqUBw8GNB%2F1zEs5uHLDSJP5IqrbKkZlrOJJQYtNTP2KhZlbFWh4h2x7LSugw%2BO175qtFbvNazjF6hYJ%2FxOGMt6DMSBOZidD578YRLo5bAS22aLXxVKsHGH58hVH4PwD%2BfmsO36I9GyGtMyQ3vHiE48GXiraKTYiENSfvNxdKmS9ZtM0s0kV6YCy7aPYEJ2MG2%2FxR5K5Ps0RhFMQ9%2BW7XphWd7WnIgCL4&X-Amz-Signature=a1a45d0fe51ceadb0b3bb91f6cd9f6788363f6aec6e1e5e5364fede78feb61cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OKSIESU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhvg2cf5EORTWanodSjs3n4BEdmp6e5vcUc%2F4iVneCLAiEA%2FBeYKoMVX95LgYkNVIceK6NfsYvK%2BQGp7xXZfInz29Iq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGeSKBqIqhlMjoybpSrcA3EtdBpv1J4EXf3Ew097IyKetwclqvaxRSZvuU1jhvRan2QgvyuC%2Fbuyc4QLMis9DNmlaKcb1MTg9d%2B3pkoVE3j%2FwE39te3B64m3YiCYyv%2Fp1a1IBBC6uZLZ5zEOw2p%2BMekgLAR49pD5mBmO6vwlk%2FcvIrG20bayhEAjYwnDIGvBjhchuokrdoznCBT%2BzrH%2Bv8z3gDFwzjJZzGyvPhSfY1t3fbPHWjpkOHyRSGRDdkv77eqGtvLO5lI3M5F%2B497oH6jdROeKiHOzLl9Gv4jhVckTHNaRIrAbMuRSJt2kMMXotHTDfgNsk9AKTTzDr0qA1xw%2FNW3bDZw9v7Se9xkNBoYKmaNQU7xmxJtA%2Fy8N%2FHMUo8DU7njRDiOBwv7jkVmF4IPmZSkzpSY7ZjoT0xSdCQ%2FGiXTiYhK5JtrHTWt%2FREUILOZ0UY%2BWv7nXJy5jpwKJmanRIX5r%2BJIwWXupM%2FqVEYbzoiDRXN%2FFoAnSVFvihQccFnQJcTnuSYzpZUK4nwvfb9ZXbB%2FGh%2BVAJx8Ux9r31DDzuR7ggPsmE9Tg33a%2FIDZOUE%2FGL1n5yDn2vjbYtS3Gfhlp%2B%2BrDqKNhiYYgHbFMFisjPwvIX1QfwOc9Aqg31ym4%2FEwTjrfFn%2BrMSyuPMPHf9sQGOqUBw8GNB%2F1zEs5uHLDSJP5IqrbKkZlrOJJQYtNTP2KhZlbFWh4h2x7LSugw%2BO175qtFbvNazjF6hYJ%2FxOGMt6DMSBOZidD578YRLo5bAS22aLXxVKsHGH58hVH4PwD%2BfmsO36I9GyGtMyQ3vHiE48GXiraKTYiENSfvNxdKmS9ZtM0s0kV6YCy7aPYEJ2MG2%2FxR5K5Ps0RhFMQ9%2BW7XphWd7WnIgCL4&X-Amz-Signature=15089a0a59324cb88d97ec3f3ab26984d9a2dec503b9b818bb35003038cd7e01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE24QG4L%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0IZRUxvFMnbnhb5yJnZmKb2ay06ScW5qjtDQMrLL20wIhAPGmuhjzmxv4DKYcBkBbGCf4ICK8uwKOBiF0sKrZzZiWKv8DCEMQABoMNjM3NDIzMTgzODA1Igz0PsN0DIOL5UxJL30q3AOS0WqXkqJ0tB7eemL5metbfNQDhptKZhwcu%2BS%2FcjV%2BM95lRhDYg2Pi7zkLT1zNUdDYmg9Wx3p81iwOXWiBxiCI%2BIiFg6jjyZcJjW6ahlze8R0Bg4mPdUWm1RNisXmNRHibOHW7ztBt1fl%2BHyQSJKkO0XVRNlD%2FVImJEtndu%2FOV7nIr8luA9oG4CouyGLV4hKz8y4638oFbsFknMn5Yw%2FzsvkLKKwz0OPExmCLlRlvcd85fh%2BWx4t9n%2Bf1jH3HMjuB6eSaXArDMIRkoWvFGuErUCC0aifKZAYkPX0SWILSyRZgBlmjKQPbc%2BpMHjzfONZd9Z0Sssb9%2B2gCGw8nZeOJHbA7JbGhQJ31%2BmnObFs0aYzuPfpmu2lIYtdBjz6wf8oCROX0cKpJlQcgv3LdWzC0o0hdZOM%2FKhR4NH3vgzta%2BLi369H90s8v4yeYIeBxsZdSWTMtShQq%2F8XnRy1VZZjaS1FvDbKdp5VTC%2FWLSfFMdD9gdcFnRpgQfxWVJgncjhOndG264eEYsY9JtcCtIkaFfKMnBDlA3Q%2BmkdVcTtcdTW3z8ccgAgPCS5URQvqmJEAN02gvA1FTMX83kFB%2Fo0DUlCYmTQabx8LjJAZFqb9Imi6lQ7gnDyO4kaiQswDDc4PbEBjqkAbvP%2Foa7908AaGgUqVujrPZu3hYm8ZtPr7o7FrTtsiOBnHBFbQlhXvG2iZGzFGit%2BuqvKRV5I0MBy%2FMtuU3OM1rIo3yRJHuJclaAf2TfELQrM21cI0ufKnkCqUG5TKoukEkTTl8ahkcGIifqv8Ur7vJq8IlXS0GkqrWruqFCoJT9wZ2w9fJnt7VV0G9dVpJgDl2p%2FLYNGu8Fg8fm5YyAqdW4fh0B&X-Amz-Signature=d6e98788af998ccee31d2dbc390f39d046e945230e4934168e7f2543ad3c0e3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UU2HYXL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQrALiAv0vMk74TAo%2BRCxxNLb%2Br%2Bq8J61fIPzB%2FYNjcAIgBjcFN%2FuLHvK%2F%2FaNS6UkBtTBN7QkPODUfgvwsX0PmUoQq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJRb4i4%2B5q1bi2DO1CrcA%2FzqEqCd7OUqyOkk7mc6xkJGR%2FkR5t8%2FqpEcDEvJ%2BP0wUO%2BX%2F6TUEUtI4CHbtxM5YcxIvvrOdXnLWRw%2B%2FPWn%2FNOHvz07yWtGUPU6hzvH7N5uUe6u9IpEir8%2Fqlo2tUyvBzgfAA2KOMNH3NccqAB1WKq%2B6U8GdxLbVu4dSjIbOeBsRXhgBre4M1DgyIKwQt%2BdI2qvSD3kkcKnN8Feb%2Bu9pzgD%2BQYJCTRqHZYJaSBxQLIcvHdS%2FtdC3nme8xVwYheHxYyYhfFHu%2BLbgEflGy0dG9htetLbwSTsRlnvNxjchFlzuxaaBoJkxX%2BPbXWHEOAw5bhzvD4NrJYPHJ92iV0CYFClzKo0U%2Bg9SD5Ba8Jc2%2FmaVSUO7A6msrwBjZoiT%2BlxSILYN0danIoVWm2EnXhgNQvthT2ctnlZxMziCeuZ8QALcyhV%2Fbo6hkcebkZpQX0kAXnxtDkya4SXMGvV1JqGtb5rIL%2Bnj2uBnB%2B1hQgcZ9E4mg5wUICKF64Q9z0FU6giJ0hWbtKzjOCnpxTmftjJFNET%2FJc1h1VsdNYl2dMJ385Msrrn1IAlxgPqJ0SAiw7HYT3kAL2g79wDMeGzLBIE49TB2A7MfbzAMZAb6t%2Br%2BgEHwnfKBv0sL%2BrM5CoYMIDg9sQGOqUBHVx0J97pZNabhycHEKJBhrdbXmt5o1mrcG9zMJ4kW6YHysdNJiZCDedRFnbjZnuMn0n3MrF9wyohOp7NKzTTKNh3r11Jf8wdNEsdq2WxwZXolWLznL3KHQtj%2BfJ0bdRXPg20hXqjRBtsq9ilB0vhXB5Bzz1iGNTIAeLRdXCsiMGZVVVb5FtJeOOJ7Kh2F94pBktLk7ZAVVbVdh0Ut9FfrSirtal2&X-Amz-Signature=d5069feafbe378360eeadce35f2d001480b8057d20eddaf73d1374a85e21c0b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OKSIESU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhvg2cf5EORTWanodSjs3n4BEdmp6e5vcUc%2F4iVneCLAiEA%2FBeYKoMVX95LgYkNVIceK6NfsYvK%2BQGp7xXZfInz29Iq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGeSKBqIqhlMjoybpSrcA3EtdBpv1J4EXf3Ew097IyKetwclqvaxRSZvuU1jhvRan2QgvyuC%2Fbuyc4QLMis9DNmlaKcb1MTg9d%2B3pkoVE3j%2FwE39te3B64m3YiCYyv%2Fp1a1IBBC6uZLZ5zEOw2p%2BMekgLAR49pD5mBmO6vwlk%2FcvIrG20bayhEAjYwnDIGvBjhchuokrdoznCBT%2BzrH%2Bv8z3gDFwzjJZzGyvPhSfY1t3fbPHWjpkOHyRSGRDdkv77eqGtvLO5lI3M5F%2B497oH6jdROeKiHOzLl9Gv4jhVckTHNaRIrAbMuRSJt2kMMXotHTDfgNsk9AKTTzDr0qA1xw%2FNW3bDZw9v7Se9xkNBoYKmaNQU7xmxJtA%2Fy8N%2FHMUo8DU7njRDiOBwv7jkVmF4IPmZSkzpSY7ZjoT0xSdCQ%2FGiXTiYhK5JtrHTWt%2FREUILOZ0UY%2BWv7nXJy5jpwKJmanRIX5r%2BJIwWXupM%2FqVEYbzoiDRXN%2FFoAnSVFvihQccFnQJcTnuSYzpZUK4nwvfb9ZXbB%2FGh%2BVAJx8Ux9r31DDzuR7ggPsmE9Tg33a%2FIDZOUE%2FGL1n5yDn2vjbYtS3Gfhlp%2B%2BrDqKNhiYYgHbFMFisjPwvIX1QfwOc9Aqg31ym4%2FEwTjrfFn%2BrMSyuPMPHf9sQGOqUBw8GNB%2F1zEs5uHLDSJP5IqrbKkZlrOJJQYtNTP2KhZlbFWh4h2x7LSugw%2BO175qtFbvNazjF6hYJ%2FxOGMt6DMSBOZidD578YRLo5bAS22aLXxVKsHGH58hVH4PwD%2BfmsO36I9GyGtMyQ3vHiE48GXiraKTYiENSfvNxdKmS9ZtM0s0kV6YCy7aPYEJ2MG2%2FxR5K5Ps0RhFMQ9%2BW7XphWd7WnIgCL4&X-Amz-Signature=6e69f46faacc7094d1f693ccd5e75c1ce034dd26113a18672976077f757ae528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

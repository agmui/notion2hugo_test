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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6KZJQ3Y%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T180921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHOuTRd23lX6VSkeAoa00uT2QjljVdr3Pqi7rTw1f7vwIhAKvChJhBn1fNUtopuuUdiyB%2FZfY1DAaucns2U0UJyAOpKv8DCDEQABoMNjM3NDIzMTgzODA1Igz5z5ZXBlpwZeKGxfUq3APMcl3L9%2BeZJ4tljzUjo3%2BTQtNvUReEEytiiMZshil30rOR29QNZ%2F6uDLC0nTICEubOaTIi77N%2FVwtP2sIA2baDXAwagH0WsOdz6n7U3BDzLo866KPC8DR43xYA3ARraa1uFRI0aJ%2BHOHc%2BTYDtrp8%2FBe181jGQNmKQIgLVg9e5W9cYlY%2Bi0y0WuPwgVUj5x%2BQymIYGYzSAQUm8richTF%2FngIOgL64XYRJbRikUFP0ZgpXMDSnS75gqkxOFUQ38%2BfBvxvDvmuZ7p5QtypJ0IdFQfeoM59y0qaNj4GUtdDmQ3JKjUmhlHy9AEgwtVDQMV71R0FfM6IkVQ3MkNVftgSUFDaOh6YGa%2FS7TdQepHL%2Bf9zpV7TeBH62nany%2FcoN9la%2FK4ntpKyjyXN2YHJvKu5GpXE8eBr0zUzBrO3KpFIFlIXsLvRq%2BpcLxQU%2Fk8zsXuyaOK6EnIoFe6NZ2RLtD0fatrAnztpvQ8R3hV3l3clhhgX9m0At8ZKuyc0gjQH5xz%2Fjz5SDkup%2BaLCsedyP1JarYnw90ZVq6p4TtK8KS4A%2F9Z1EsGFImsypDUHk16%2BIda7zU5uBXT6sWFI4a7UX%2BkQpQLJyu7X732lkviLEIIMQqoQh7mYn5G36Vs7eONzCg39u%2BBjqkAXabxYyUUjCI6vuQ7Lmz8m%2BXPZWJLzgLbaprKevj7LAX3iuz7TwTDE%2B9ICuj2%2FmlSQX5JpkGfGZiMgVISIPU%2Fe75MsWJOF6%2BJ2ec3JRQ3f5eqd4IujjQ9CpZcqhEUMV1cWLEQEH0rDCSiBj%2BScSWPAxXo53mkXzPf9wJSkOlFw3%2Bmmg6AOloFCqvYrng%2Bi9Yam2yIzLmhnmnjOanQ7S6qwgUtu0b&X-Amz-Signature=e516ea62bde73966f2e5ac61cf3c3ddea447657b55e3d8e36886c85e1ca96361&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6KZJQ3Y%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T180921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHOuTRd23lX6VSkeAoa00uT2QjljVdr3Pqi7rTw1f7vwIhAKvChJhBn1fNUtopuuUdiyB%2FZfY1DAaucns2U0UJyAOpKv8DCDEQABoMNjM3NDIzMTgzODA1Igz5z5ZXBlpwZeKGxfUq3APMcl3L9%2BeZJ4tljzUjo3%2BTQtNvUReEEytiiMZshil30rOR29QNZ%2F6uDLC0nTICEubOaTIi77N%2FVwtP2sIA2baDXAwagH0WsOdz6n7U3BDzLo866KPC8DR43xYA3ARraa1uFRI0aJ%2BHOHc%2BTYDtrp8%2FBe181jGQNmKQIgLVg9e5W9cYlY%2Bi0y0WuPwgVUj5x%2BQymIYGYzSAQUm8richTF%2FngIOgL64XYRJbRikUFP0ZgpXMDSnS75gqkxOFUQ38%2BfBvxvDvmuZ7p5QtypJ0IdFQfeoM59y0qaNj4GUtdDmQ3JKjUmhlHy9AEgwtVDQMV71R0FfM6IkVQ3MkNVftgSUFDaOh6YGa%2FS7TdQepHL%2Bf9zpV7TeBH62nany%2FcoN9la%2FK4ntpKyjyXN2YHJvKu5GpXE8eBr0zUzBrO3KpFIFlIXsLvRq%2BpcLxQU%2Fk8zsXuyaOK6EnIoFe6NZ2RLtD0fatrAnztpvQ8R3hV3l3clhhgX9m0At8ZKuyc0gjQH5xz%2Fjz5SDkup%2BaLCsedyP1JarYnw90ZVq6p4TtK8KS4A%2F9Z1EsGFImsypDUHk16%2BIda7zU5uBXT6sWFI4a7UX%2BkQpQLJyu7X732lkviLEIIMQqoQh7mYn5G36Vs7eONzCg39u%2BBjqkAXabxYyUUjCI6vuQ7Lmz8m%2BXPZWJLzgLbaprKevj7LAX3iuz7TwTDE%2B9ICuj2%2FmlSQX5JpkGfGZiMgVISIPU%2Fe75MsWJOF6%2BJ2ec3JRQ3f5eqd4IujjQ9CpZcqhEUMV1cWLEQEH0rDCSiBj%2BScSWPAxXo53mkXzPf9wJSkOlFw3%2Bmmg6AOloFCqvYrng%2Bi9Yam2yIzLmhnmnjOanQ7S6qwgUtu0b&X-Amz-Signature=5f377d8e0523d96d641cab4a567f7b46bbd0f4a3afc00b4f62385f9b8522a311&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7P64LSU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T180927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBODUFpjSyPYkruRW%2BAxl6bIu8jqlIn3oDJwOdoSUtNCAiBmTctSw0e%2FJ8Li9ROkNj%2FWJ8nF7t7DZpnYr%2BODCQ%2FqzCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMzEmlGABB3UZwP4MdKtwDc%2BpzgS21wq1a5oKIHIFUNwx6NezSI8IbjHQ049M4CJYYGt3pDij948dQC807miU4GN39%2B8NI%2B8Sleo67Ijq%2BQzAbrXjMo9bhwCEKL1Jn05GS%2BkqhK8ei%2BaHo8PzQa4AQrv%2BHm0ZHuhA0vnbVuCKE9Ilg5D5adsoYSFRh5Dkc3ykYgJlGA3ftVIgDHEKsA4qajyWo8eEiOnmcvj%2B9npVUSHWk62udz%2FdDPydJiwaZ%2B6a8Zn5J22wgV7eKSS7DqpcFeNuecfHtt02lDv9DEz0lGTXChDaO1jT0BaYRa366htUyfL1AeOFJpYPv9dGYcfhGmX28uGpJaaVQIxwMtKnMB%2BCq6yOX2PcRzPI0beybpVTTLRO8WH3GsrczLuyGWAYY0QhZluyAMo6FLq27maWd9L3rSYlZ%2FV7X14Y4OaRcEwSTebY%2Fl%2Bzlqp1wKp5qBPfeNpv63LuQb2JFZZ1iWkwTwuEl%2Bne1f9JkoctHLQzYbFWOWP2%2BvppvCuiAfkqgl1%2Bu8Wn%2BpkOSu0f2A3yMhVFnJ27YqRQnkWPX8PuSjKD%2BgYWjADWWYjjL4XGb5qHv%2FHwyk1LrzZgxwhpGsXrUF16fREo3ZlYOzoNuak5QuyVklYsDFYF%2Bq5wG43SdBucw7t7bvgY6pgG4HekdIKIvQsnHUF%2BXhOueDSYpuPafXdHnQ4xB2gvEKPUPFEsSsLi1vAZucpoQjyaT6pLorDh3zSAh%2FTIxb0rWusKakag43VzhkgtKIFBy2VzodTIhLDZEh57OosvJSlta6ftDr360bCZwnCLlOXZH7g%2FYJ3yuO0hKMxxHhBrxfWJiXvtdfvsIwZFAy05%2FwFmEu8%2FMLpDauTf3zBqnvYxXbhblRoqJ&X-Amz-Signature=1fdbdd4691b8d58125b081ade26694b5adeacca917fb496d102f581352555413&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6KZJQ3Y%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T180927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHOuTRd23lX6VSkeAoa00uT2QjljVdr3Pqi7rTw1f7vwIhAKvChJhBn1fNUtopuuUdiyB%2FZfY1DAaucns2U0UJyAOpKv8DCDEQABoMNjM3NDIzMTgzODA1Igz5z5ZXBlpwZeKGxfUq3APMcl3L9%2BeZJ4tljzUjo3%2BTQtNvUReEEytiiMZshil30rOR29QNZ%2F6uDLC0nTICEubOaTIi77N%2FVwtP2sIA2baDXAwagH0WsOdz6n7U3BDzLo866KPC8DR43xYA3ARraa1uFRI0aJ%2BHOHc%2BTYDtrp8%2FBe181jGQNmKQIgLVg9e5W9cYlY%2Bi0y0WuPwgVUj5x%2BQymIYGYzSAQUm8richTF%2FngIOgL64XYRJbRikUFP0ZgpXMDSnS75gqkxOFUQ38%2BfBvxvDvmuZ7p5QtypJ0IdFQfeoM59y0qaNj4GUtdDmQ3JKjUmhlHy9AEgwtVDQMV71R0FfM6IkVQ3MkNVftgSUFDaOh6YGa%2FS7TdQepHL%2Bf9zpV7TeBH62nany%2FcoN9la%2FK4ntpKyjyXN2YHJvKu5GpXE8eBr0zUzBrO3KpFIFlIXsLvRq%2BpcLxQU%2Fk8zsXuyaOK6EnIoFe6NZ2RLtD0fatrAnztpvQ8R3hV3l3clhhgX9m0At8ZKuyc0gjQH5xz%2Fjz5SDkup%2BaLCsedyP1JarYnw90ZVq6p4TtK8KS4A%2F9Z1EsGFImsypDUHk16%2BIda7zU5uBXT6sWFI4a7UX%2BkQpQLJyu7X732lkviLEIIMQqoQh7mYn5G36Vs7eONzCg39u%2BBjqkAXabxYyUUjCI6vuQ7Lmz8m%2BXPZWJLzgLbaprKevj7LAX3iuz7TwTDE%2B9ICuj2%2FmlSQX5JpkGfGZiMgVISIPU%2Fe75MsWJOF6%2BJ2ec3JRQ3f5eqd4IujjQ9CpZcqhEUMV1cWLEQEH0rDCSiBj%2BScSWPAxXo53mkXzPf9wJSkOlFw3%2Bmmg6AOloFCqvYrng%2Bi9Yam2yIzLmhnmnjOanQ7S6qwgUtu0b&X-Amz-Signature=636d3ea19b68810f87c375db88cc4ce55a157bc9c4a8cd5dc828c8710a1a28c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6KZJQ3Y%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T180921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHOuTRd23lX6VSkeAoa00uT2QjljVdr3Pqi7rTw1f7vwIhAKvChJhBn1fNUtopuuUdiyB%2FZfY1DAaucns2U0UJyAOpKv8DCDEQABoMNjM3NDIzMTgzODA1Igz5z5ZXBlpwZeKGxfUq3APMcl3L9%2BeZJ4tljzUjo3%2BTQtNvUReEEytiiMZshil30rOR29QNZ%2F6uDLC0nTICEubOaTIi77N%2FVwtP2sIA2baDXAwagH0WsOdz6n7U3BDzLo866KPC8DR43xYA3ARraa1uFRI0aJ%2BHOHc%2BTYDtrp8%2FBe181jGQNmKQIgLVg9e5W9cYlY%2Bi0y0WuPwgVUj5x%2BQymIYGYzSAQUm8richTF%2FngIOgL64XYRJbRikUFP0ZgpXMDSnS75gqkxOFUQ38%2BfBvxvDvmuZ7p5QtypJ0IdFQfeoM59y0qaNj4GUtdDmQ3JKjUmhlHy9AEgwtVDQMV71R0FfM6IkVQ3MkNVftgSUFDaOh6YGa%2FS7TdQepHL%2Bf9zpV7TeBH62nany%2FcoN9la%2FK4ntpKyjyXN2YHJvKu5GpXE8eBr0zUzBrO3KpFIFlIXsLvRq%2BpcLxQU%2Fk8zsXuyaOK6EnIoFe6NZ2RLtD0fatrAnztpvQ8R3hV3l3clhhgX9m0At8ZKuyc0gjQH5xz%2Fjz5SDkup%2BaLCsedyP1JarYnw90ZVq6p4TtK8KS4A%2F9Z1EsGFImsypDUHk16%2BIda7zU5uBXT6sWFI4a7UX%2BkQpQLJyu7X732lkviLEIIMQqoQh7mYn5G36Vs7eONzCg39u%2BBjqkAXabxYyUUjCI6vuQ7Lmz8m%2BXPZWJLzgLbaprKevj7LAX3iuz7TwTDE%2B9ICuj2%2FmlSQX5JpkGfGZiMgVISIPU%2Fe75MsWJOF6%2BJ2ec3JRQ3f5eqd4IujjQ9CpZcqhEUMV1cWLEQEH0rDCSiBj%2BScSWPAxXo53mkXzPf9wJSkOlFw3%2Bmmg6AOloFCqvYrng%2Bi9Yam2yIzLmhnmnjOanQ7S6qwgUtu0b&X-Amz-Signature=f228ba3836d42a04da4017c74de059a5413ba9e1600eb697c39804bc2cf17130&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

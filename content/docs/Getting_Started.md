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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLPTU2UJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOK1yqSIH9wa5PKRdPjU8LY2DcOMZMeGScUQxBM29AaAiAyW2WA1vWlPFjYEpfwdibWVyg2EMBcFDMsVwKlz%2BhtJyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMPx%2BhR6uU%2B8SoMRm0KtwDbV9Hdf6xIVYwjLPaaEfFrrRAZl6z5boizZP5Vga6eY5YO%2FggBdLd1n2NrCY2cJ9VdnrbTHeJpQ50tPjaqLysxXA8zMQFg8kFjGV%2B4W5NgMplK3TzdCZVS5tsSdpBdxrLrsUVe5sRSuV5214Nd%2BygYUK4%2BP1S32o6w8a4pks4evam1sBUwg2O1qch%2F1LsW7KUKCh0w5PuGlzz5QmaxLRCY9Dk2APh5jZL%2FnxESL9Co1WDiesG9bbV836DGajIiHrzIdBYCtagDlv8f%2FtbeLSdD1q%2Btn1YVmEH%2B6%2FJt9rI7cx5T1Uv2HyaqsI9kmKvu1jguwkp77FZNvLE824svzdSHJKPeJzgWh6xfPsC4%2FmtywrgnyVUczowq%2BDfrkaTfGOVUkToW8jk8UxRWFdfpitpfzv6yYNq35bYPQKxrEctm6Pm%2B2LtuSQjKRajQuPQmNqg0htL8TLu5GzI6Wv4Xy5%2FQW2WA16N8pmDab1tEfmuVN7E9MKyTbhUV2JYPjcJSCKKM1Yy7hJcuZyIsYk72QUKUDp2EFVh3x4dRHjHOavfYknF4QPidNsRNzC5cJTfz79rJXfFXzfgusO4VexB297QTEdDG0gObTKNRNp9ie%2FK57w5xq3PqpKv0qhF374w5N%2FHvwY6pgHzOUoxuUZ8SQ7r4op7K3zfhe61PB7QFscFGM5reY5cTBZiI0ePMhVxToqtln1Nz0lutsVndOCASNhFkHfRstuZ%2FYZMdI3%2FgQxWrRiLplDvvlKOQpoGgplH2Ev8ijs2Be08H%2FMI%2FwRPiDh%2FCXLtLJ8YSKMZJ%2Betz4hDzuGlMUPgz4JsME5LveLeGqIczsWDKqh3gEPovSkF4QVT%2Fd%2Br5DJcF03UDlM9&X-Amz-Signature=5fbf1d5db600dfac4d98dc47ed26c9bc382ecc5aa58d7f5c1755dd8b35d88037&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLPTU2UJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOK1yqSIH9wa5PKRdPjU8LY2DcOMZMeGScUQxBM29AaAiAyW2WA1vWlPFjYEpfwdibWVyg2EMBcFDMsVwKlz%2BhtJyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMPx%2BhR6uU%2B8SoMRm0KtwDbV9Hdf6xIVYwjLPaaEfFrrRAZl6z5boizZP5Vga6eY5YO%2FggBdLd1n2NrCY2cJ9VdnrbTHeJpQ50tPjaqLysxXA8zMQFg8kFjGV%2B4W5NgMplK3TzdCZVS5tsSdpBdxrLrsUVe5sRSuV5214Nd%2BygYUK4%2BP1S32o6w8a4pks4evam1sBUwg2O1qch%2F1LsW7KUKCh0w5PuGlzz5QmaxLRCY9Dk2APh5jZL%2FnxESL9Co1WDiesG9bbV836DGajIiHrzIdBYCtagDlv8f%2FtbeLSdD1q%2Btn1YVmEH%2B6%2FJt9rI7cx5T1Uv2HyaqsI9kmKvu1jguwkp77FZNvLE824svzdSHJKPeJzgWh6xfPsC4%2FmtywrgnyVUczowq%2BDfrkaTfGOVUkToW8jk8UxRWFdfpitpfzv6yYNq35bYPQKxrEctm6Pm%2B2LtuSQjKRajQuPQmNqg0htL8TLu5GzI6Wv4Xy5%2FQW2WA16N8pmDab1tEfmuVN7E9MKyTbhUV2JYPjcJSCKKM1Yy7hJcuZyIsYk72QUKUDp2EFVh3x4dRHjHOavfYknF4QPidNsRNzC5cJTfz79rJXfFXzfgusO4VexB297QTEdDG0gObTKNRNp9ie%2FK57w5xq3PqpKv0qhF374w5N%2FHvwY6pgHzOUoxuUZ8SQ7r4op7K3zfhe61PB7QFscFGM5reY5cTBZiI0ePMhVxToqtln1Nz0lutsVndOCASNhFkHfRstuZ%2FYZMdI3%2FgQxWrRiLplDvvlKOQpoGgplH2Ev8ijs2Be08H%2FMI%2FwRPiDh%2FCXLtLJ8YSKMZJ%2Betz4hDzuGlMUPgz4JsME5LveLeGqIczsWDKqh3gEPovSkF4QVT%2Fd%2Br5DJcF03UDlM9&X-Amz-Signature=16c2394c00efd4627f4ea729cc8fd598481dee722f4be1748d112b9f1dc4fe2d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ULBYPJG%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FWOsPfPYg6mWAlAEwYFSba9lpmzIJoZnzAkDqPCgT6AiAlOpzbfhntouz2p2BekxDbTTE7NWywtp0WLSBs8M42myr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMGCe%2F9KZFxQHXKlu6KtwDU2%2BGzuBi8aHABCmv%2FahH6niEJpzc3urcvDtUMkAAuMd7gChg7C%2FQ2bCC7Tzestpatlhu6Te3YVuHjGNK4ltQwpepffAfL6tZIUyCMEeFe8%2Bi%2FtuZwfgKnAQr8h4Apj9cc55HIoMwH7Wh86NY%2FRJZROJO5wJWgwymireeZgX37QQfJGEhgeWXRKUdrroRheTazkyzseUBavamWc7g5Fy7Zljai4ze3q3U2G3QtxL%2FSoMrdGaZmoxTgX%2BPEbsVltE2z39QOlTTbR1kLB01GJIV9uXzvZVb8zkDTTMuU0vLAR%2FMFHUza5HngVxnDFNB%2BiEkvMoz1%2F%2BRq14o1%2BGtZggJwO%2Bfy4dGtMyKCP6AnrZY%2FiempDExSDCwi%2FqnoB%2BooE9Haivwzf4CFT%2BpmRrorOlCL27wLlTUdT2akjaQDI9P3VORzSuhlBhz3gbYrinPc6OmD0wBdPmBq%2B0%2F9NV2PGxlUpGDEdH6EvK0%2BI07WpQwrXr70MItLaESGFjvqoq7PXVu3Aq2O9LZmlS6aR%2FJDPrZyEWmD8XPrEOBN1YJL6v1WpJY139yYic6OP3Ralw6wYIOV7GhWlahp3fHkvrvFvSXglaJpDdqsYO%2FT2%2BiNrJO%2B3vG%2FaaLW9OjJd2c%2BFsw4%2BjHvwY6pgHX5abFPlK0ULagN%2B1plP1hmY3Ox%2BIL7Buv%2Fc6R%2FglBgLZztLTvj2ooVsO%2BUm8r%2F3yu4ItGuCKYs9Y0D5lVRmqVTkKAAEGXc9UEhLvaLwSEEQu%2FqYxRE3il1Kv4f2jPIsAO0e6KBLpYSkZrug%2BZzsrC5duGemyHlKoWOVD7rbhQBupIZ9uka6oZkG7LZXz94YnWMu%2F2R0RAGOavR9mpqIJXwHseajpx&X-Amz-Signature=f2a686e7697345c9fe3cf84018309dbdca53bf4e7a85e16ff1f58ab2e6d203d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y67XZC2B%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFYyoxEI9NFBooArulfUDiXq4Qfc3WPXdUReI1mm3L%2BAIgb6%2BqXh32j8MhpX9RRkgrFloPd1ijhNBD3NPtzIW%2BWpoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPTaL%2BG8m5V83JGGeCrcA1ez%2Bwh2fx0%2ByG6oNHxbEDov%2F73DiJPecvNEnUbL73Sz%2FrPWWe4OjuzrbYtQpFwiqCFnvrMGUx7grXHznMXcVtWKGmmpzIRQluS9UdbX9M1QKP0G2MRNEea6gToOBrhol8kmR9Zbzq3LbkEMp%2B17rsjAMMkPZ%2Ba2Yk%2FbDsdZHoA4%2FDtxsUuZdOXG7q6rdSi6Z%2FktHK9CBQlrn5i3s91zvV7f%2FdJCYz%2F10ehQcZOIVMZ8qUbXabNYFPEiZcW9Ov1YDB7%2BGRMX15bqKfcNvhGXyEYROjrxYKZ5FMsXdQYXEqVLH08ZuyninMQnPDz2ny3muQ623Q%2FzT%2BhE7occHDiXpZhZtDt4k25U5GKCOfUutCPnnU07Qnqg0x1QXnBdklOxfz9QPVnfgtj4jVFO082trVWYZ1aU3udtWDDUDp8%2B3SnKUocvO1KwRcQsDJ7xBRKn3Zd9ud7PBPR5XiKf1ZdhLswgR2RtRRWuLHTM8y3VtQSYm%2BOok0XmTRMZypqSQoM79LYkyV9QpfRj6zfg3trfglcFGMgVSnYSKqMKXP0kD0vmradlArUH%2BbG4xpFEJ56o4vw4HlT%2BHn0RivkYdoxxze93NuQ3QvJOw6l0am2yxKxAW6cK4jLK09v4VdJ0MKrDxr8GOqUB%2Fr6UiKeaUZq7sNdkaCA1PgxDeYjKm9ex7vyq2Zggcx%2FLr34azYQDaOqZBTVh3DGZba11Q1KM%2F5%2BZwnHg98kHkFC2oQN2HNqIoMoZE3qp5IYYJgy%2F5cUGlCbTACpkRTj5FRJ%2FoLXkPZy2YAYw6nb9StybQWpSGmlFhcSNFDE7pQhpOCQF7HraZ0hg%2Boeuykrg%2Fi6cNNWGUyJszil6ciZ4Wsxc33%2Fb&X-Amz-Signature=9c68c2ff375dacf2361c1d44a2f198d04767684330efac124be1a5a66edb50e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLPTU2UJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOK1yqSIH9wa5PKRdPjU8LY2DcOMZMeGScUQxBM29AaAiAyW2WA1vWlPFjYEpfwdibWVyg2EMBcFDMsVwKlz%2BhtJyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMPx%2BhR6uU%2B8SoMRm0KtwDbV9Hdf6xIVYwjLPaaEfFrrRAZl6z5boizZP5Vga6eY5YO%2FggBdLd1n2NrCY2cJ9VdnrbTHeJpQ50tPjaqLysxXA8zMQFg8kFjGV%2B4W5NgMplK3TzdCZVS5tsSdpBdxrLrsUVe5sRSuV5214Nd%2BygYUK4%2BP1S32o6w8a4pks4evam1sBUwg2O1qch%2F1LsW7KUKCh0w5PuGlzz5QmaxLRCY9Dk2APh5jZL%2FnxESL9Co1WDiesG9bbV836DGajIiHrzIdBYCtagDlv8f%2FtbeLSdD1q%2Btn1YVmEH%2B6%2FJt9rI7cx5T1Uv2HyaqsI9kmKvu1jguwkp77FZNvLE824svzdSHJKPeJzgWh6xfPsC4%2FmtywrgnyVUczowq%2BDfrkaTfGOVUkToW8jk8UxRWFdfpitpfzv6yYNq35bYPQKxrEctm6Pm%2B2LtuSQjKRajQuPQmNqg0htL8TLu5GzI6Wv4Xy5%2FQW2WA16N8pmDab1tEfmuVN7E9MKyTbhUV2JYPjcJSCKKM1Yy7hJcuZyIsYk72QUKUDp2EFVh3x4dRHjHOavfYknF4QPidNsRNzC5cJTfz79rJXfFXzfgusO4VexB297QTEdDG0gObTKNRNp9ie%2FK57w5xq3PqpKv0qhF374w5N%2FHvwY6pgHzOUoxuUZ8SQ7r4op7K3zfhe61PB7QFscFGM5reY5cTBZiI0ePMhVxToqtln1Nz0lutsVndOCASNhFkHfRstuZ%2FYZMdI3%2FgQxWrRiLplDvvlKOQpoGgplH2Ev8ijs2Be08H%2FMI%2FwRPiDh%2FCXLtLJ8YSKMZJ%2Betz4hDzuGlMUPgz4JsME5LveLeGqIczsWDKqh3gEPovSkF4QVT%2Fd%2Br5DJcF03UDlM9&X-Amz-Signature=e3bc93ddd33eb877921e2e37b27b40fe265f14bd65315b185140f3612f66c368&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

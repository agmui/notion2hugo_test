---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2RHDAZK%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCbGhpFgY5RJxohZ%2FAgdSVuhaIfasL6nXQsYmHJmffsNwIgS8U5nNCktXDzgXTBXUDtM%2FJRffzfpAcjzQ7K2UnfznIqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FuLv6cUMAscWmJ0CrcA6jAXcitmuDzNmpduugMnw1p3tnNmd1l9zE%2FF%2F%2ByLbb%2BkQXLANSztMDA20HsgZemN%2Brbn5gIpVQfLxQWQ240cOM5iy25%2FevGI4o5LKhBzrPEhtoIimL8KdXWaT7uqxnV%2B3HrhEK0BxV9YeTIFHjiTsReXHh2TA8KMMYi7EyacdC4HxTtl4p44jQXerTr%2FsqiWsnYGvl0aI3R0CJgUHfa7PfZiOUfq%2FQnDYexwwKE8JXNbBtVA5BjS1HwHE8LEs9SHn13w0Q1vIibh%2FZcF9n0kJa8pfiCtiQbKyidbiQsTGRPBr%2BFp7WaojulD3gT16db6zXewPyFwsu%2BVWSsIrXx44k06QR6w4hdFVbdYinrVxj7Ins6MmWGIrcNndIumWmqdD7rJJeTE3Wu3%2BXvo3aDoY204NbEr2fBAN7erxwxhF8EW4aXrUhnnqPCXr2mxHsxDf3DuqOIZXZmusbj9j0F2Vd8JmHBUaxjO9SxSNMQ6jQI9XMlDjFmgqFfmW5zQ9JUKLU2NG8MlnbH%2Bi2HA964Ybu90T1W%2FKcaktMfg%2FqZRsUuycpyB9ekBMnrd%2BT4o2U%2BzELvHPukHXn%2BYoBslVjFCN%2FneCa%2FopXi2YyW%2BOKAySTiarIo99HcfxZVYf%2BjMJOzxMgGOqUBRCg67LMnRefrzuefl3FyBgHlAJXCbbX5KepVhkTjPEzilooLfnsP46mcRiHeYT9W0%2Bccxe1IZGCtXAU%2BDAKxwFUCHhmcdrAVhSdpedgz4TueaSz6FPLMEdhSB9HwvMQ4b3OviQxEYfPk6chlXRoIEL34p0BfkZ6C6tGc4CR5Idwu%2Flqe8Ig3%2FJJsxZ98N5jHvV1t71ZMPdqlC0lm1irIEuCn%2FI0o&X-Amz-Signature=6e3a5131ffbfdc649e36282d1e4e280374c4be891b47619a91595844d683546e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2RHDAZK%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCbGhpFgY5RJxohZ%2FAgdSVuhaIfasL6nXQsYmHJmffsNwIgS8U5nNCktXDzgXTBXUDtM%2FJRffzfpAcjzQ7K2UnfznIqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FuLv6cUMAscWmJ0CrcA6jAXcitmuDzNmpduugMnw1p3tnNmd1l9zE%2FF%2F%2ByLbb%2BkQXLANSztMDA20HsgZemN%2Brbn5gIpVQfLxQWQ240cOM5iy25%2FevGI4o5LKhBzrPEhtoIimL8KdXWaT7uqxnV%2B3HrhEK0BxV9YeTIFHjiTsReXHh2TA8KMMYi7EyacdC4HxTtl4p44jQXerTr%2FsqiWsnYGvl0aI3R0CJgUHfa7PfZiOUfq%2FQnDYexwwKE8JXNbBtVA5BjS1HwHE8LEs9SHn13w0Q1vIibh%2FZcF9n0kJa8pfiCtiQbKyidbiQsTGRPBr%2BFp7WaojulD3gT16db6zXewPyFwsu%2BVWSsIrXx44k06QR6w4hdFVbdYinrVxj7Ins6MmWGIrcNndIumWmqdD7rJJeTE3Wu3%2BXvo3aDoY204NbEr2fBAN7erxwxhF8EW4aXrUhnnqPCXr2mxHsxDf3DuqOIZXZmusbj9j0F2Vd8JmHBUaxjO9SxSNMQ6jQI9XMlDjFmgqFfmW5zQ9JUKLU2NG8MlnbH%2Bi2HA964Ybu90T1W%2FKcaktMfg%2FqZRsUuycpyB9ekBMnrd%2BT4o2U%2BzELvHPukHXn%2BYoBslVjFCN%2FneCa%2FopXi2YyW%2BOKAySTiarIo99HcfxZVYf%2BjMJOzxMgGOqUBRCg67LMnRefrzuefl3FyBgHlAJXCbbX5KepVhkTjPEzilooLfnsP46mcRiHeYT9W0%2Bccxe1IZGCtXAU%2BDAKxwFUCHhmcdrAVhSdpedgz4TueaSz6FPLMEdhSB9HwvMQ4b3OviQxEYfPk6chlXRoIEL34p0BfkZ6C6tGc4CR5Idwu%2Flqe8Ig3%2FJJsxZ98N5jHvV1t71ZMPdqlC0lm1irIEuCn%2FI0o&X-Amz-Signature=1f494dabed9f26dcfcbe6e8b2a8f32794b2b2802ac07931a18e150ef58d3a737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2RHDAZK%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCbGhpFgY5RJxohZ%2FAgdSVuhaIfasL6nXQsYmHJmffsNwIgS8U5nNCktXDzgXTBXUDtM%2FJRffzfpAcjzQ7K2UnfznIqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FuLv6cUMAscWmJ0CrcA6jAXcitmuDzNmpduugMnw1p3tnNmd1l9zE%2FF%2F%2ByLbb%2BkQXLANSztMDA20HsgZemN%2Brbn5gIpVQfLxQWQ240cOM5iy25%2FevGI4o5LKhBzrPEhtoIimL8KdXWaT7uqxnV%2B3HrhEK0BxV9YeTIFHjiTsReXHh2TA8KMMYi7EyacdC4HxTtl4p44jQXerTr%2FsqiWsnYGvl0aI3R0CJgUHfa7PfZiOUfq%2FQnDYexwwKE8JXNbBtVA5BjS1HwHE8LEs9SHn13w0Q1vIibh%2FZcF9n0kJa8pfiCtiQbKyidbiQsTGRPBr%2BFp7WaojulD3gT16db6zXewPyFwsu%2BVWSsIrXx44k06QR6w4hdFVbdYinrVxj7Ins6MmWGIrcNndIumWmqdD7rJJeTE3Wu3%2BXvo3aDoY204NbEr2fBAN7erxwxhF8EW4aXrUhnnqPCXr2mxHsxDf3DuqOIZXZmusbj9j0F2Vd8JmHBUaxjO9SxSNMQ6jQI9XMlDjFmgqFfmW5zQ9JUKLU2NG8MlnbH%2Bi2HA964Ybu90T1W%2FKcaktMfg%2FqZRsUuycpyB9ekBMnrd%2BT4o2U%2BzELvHPukHXn%2BYoBslVjFCN%2FneCa%2FopXi2YyW%2BOKAySTiarIo99HcfxZVYf%2BjMJOzxMgGOqUBRCg67LMnRefrzuefl3FyBgHlAJXCbbX5KepVhkTjPEzilooLfnsP46mcRiHeYT9W0%2Bccxe1IZGCtXAU%2BDAKxwFUCHhmcdrAVhSdpedgz4TueaSz6FPLMEdhSB9HwvMQ4b3OviQxEYfPk6chlXRoIEL34p0BfkZ6C6tGc4CR5Idwu%2Flqe8Ig3%2FJJsxZ98N5jHvV1t71ZMPdqlC0lm1irIEuCn%2FI0o&X-Amz-Signature=7a02e37380753363c00a68f8e92cbc90070774cc5b93027c66815a3186a536df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGOP5O4%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIDsEk1ZpaXihkNznZBqfaI3eWD0CJhQhMJF4fytcNkLBAiB%2FFDp%2BcBWSQpHZxuqgNAkpDHyHWirBAvYywzLX2RlLTyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2lXAeP%2FPnCDsATexKtwDO7phi9luYJOj3cOnadM3J5PoOmFDQhOSnG73BTCyT2bQDB7Om99%2FqH%2FVOwvhM0IBoBxTM%2FT0i%2BVF5mLwRru8yx05TXPiJcG3eF3BScHZmXqyZ2ulX1BlNjP8X7gpkUFaHfP2NPm48S1PQ0lfU4c2ztfRc5cFRqvPgUZaVZDaXE0d4Ei3OBj7kj02kEBiHerofCm4JwOdaswAqR%2FV5WKwyf8qmLHwCAAg6mhvL2pP3%2F3vxyZVIeMYMKTvhBGASgQk97VaND51Lu6Qz0EPrl2p8yFy9BTWgUmMsze7KqVhHCyQtbLOIzdI2oivxlyduthKMmYSWHL%2BZuDqxBGxCTjyYD1YHsfoBEM5kUrPqzdHhGC9sLAaEi3YqzPxY7JOwUSm9oYd924f5JddSYAxBAiPs%2FuuJ%2BayYL50%2FSE7iIMl6z6UOdsBSUvgdlvgarppbns%2FUyJeF8bZujSmhoK5X8huqOvA3rt3oGOQFGadf%2BKpgpbx7BvyYTJmLAx0GtDIAmbkkUgnWZRs8p2rwoJbXhddSDnCwVgOAd33t8FszMxrAp8TYVu9y3cwutW90rJd7CmIHPR8YLKyvmAHfh4E0Hm57se1%2Fwd%2FnZaPt%2FCkswvWTOVxW%2BeTJYQe0GdAQkAw27TEyAY6pgHPG1efUNhm%2FtOcN06%2B6XDajyNJ1ZxEGf39pyCfqKJAmZDgVfwEydUpFOA9lgfbkwy7Lnd2p%2B84ZnOYSzAgNovo%2BPq%2F1v%2Fxca3p5VRkKKGL12mVwMDFjp8gjsZhuDYhaiLsrNyt0HPGfTEioczTAI5pgtwCbqTCCj6GI10t5SgX3A8fXkR0yTPyxCH0PppfNUrX%2F1ygUUexDfGMZLandpUceNleksUs&X-Amz-Signature=db3cf7c0d1faa926a2daf156496fbede24c916449d90d43d33a7a3704588f740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB5TVA3C%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQC9AK%2BtNwkyXv%2Fmqn6BL8a9048SFkElJj0PbNri7puO0gIgQPEuypVVjMKZmgpjqiEdS3dVMRMc8OTgw%2FOVCbwr7%2FYqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTSdANQZSh7p4lnbSrcA5Eps0MLH4IWw8zVnyqGmJfDfDQVxWiILvK1eN3zdIxui%2Fg8Ws9OPpPWcQTkVFwDhXZuoGn21WgI37CYZO5uQIiRledQKjn7iL7AQZZzRmQyCo4lwIQXYo3eFvKCnciu4ImSHN2GXnr4s7qYjAEDwMySU3yCFRqpOSNM6FZ%2Fes5iJzqw8Tyk3szleyb1K4EooFmej9Z6yJoGFm8jsbQMd%2FbA3UnVzbgUGvQ%2BWr4B%2BeXDf9mZPIy9FOzO8ZTy%2BCgGAO%2F4TN%2FLJNQZYOoKpMWEYx1CTMwhf46UEkJHjRxxxAuvE6kEEiBob2eTrInuIxdqZED%2Boy16H%2BDI4%2BTDWQ4pGy7fySG1jJvKHoReDaxmM86lXjUgZqjMuDrLacyQGCMnl2sjU2xzV5LZEfWmUly0lAL17OAgx5%2BwUgw%2B27zA0pVWiUpfF19GHSfOx8K%2F6FoKUN%2FkJuJ%2BH%2Bx1RNARhHOO6jqrxHs4lYyh8oT2M3T462frtvE9vcvzYg69t8lxyxsAXNY54nMk938p1d%2B782ipNA6aqwM5%2Ffu0tt76l1M9Uhp6GpmaKPjFdxUD0nGZyiv1ECNozyXHqvkOSMN7azf9s5v1428%2F3FEywatfVD3iSv3lEma%2FGMpfYLWvArQCMJ%2B3xMgGOqUBYfXiO8ppfSFgLgz%2F%2FctIIEiwTt1YKuBRwGceNZeUkT20NsrcNTCkD1y5yflPNpfKsBMsvO%2Fb%2B69uMeltj7EYxkbyibhjpC172ox66Ii3sqK3NdP4yBUFlgjEXC2WjqUC9s%2FNY40q7omhHijL3qNuTKvW%2BFSCP0rmGVidXyjVIjDThrAZFXglz8ppKy%2BT9PLmSI27bwoVvDvLfRhNvIQ5NkxaaSmO&X-Amz-Signature=3508931547a346532f6e84aa205a802f25dd6bdfb94175dd4f89f79d3ccd3bdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2RHDAZK%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCbGhpFgY5RJxohZ%2FAgdSVuhaIfasL6nXQsYmHJmffsNwIgS8U5nNCktXDzgXTBXUDtM%2FJRffzfpAcjzQ7K2UnfznIqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FuLv6cUMAscWmJ0CrcA6jAXcitmuDzNmpduugMnw1p3tnNmd1l9zE%2FF%2F%2ByLbb%2BkQXLANSztMDA20HsgZemN%2Brbn5gIpVQfLxQWQ240cOM5iy25%2FevGI4o5LKhBzrPEhtoIimL8KdXWaT7uqxnV%2B3HrhEK0BxV9YeTIFHjiTsReXHh2TA8KMMYi7EyacdC4HxTtl4p44jQXerTr%2FsqiWsnYGvl0aI3R0CJgUHfa7PfZiOUfq%2FQnDYexwwKE8JXNbBtVA5BjS1HwHE8LEs9SHn13w0Q1vIibh%2FZcF9n0kJa8pfiCtiQbKyidbiQsTGRPBr%2BFp7WaojulD3gT16db6zXewPyFwsu%2BVWSsIrXx44k06QR6w4hdFVbdYinrVxj7Ins6MmWGIrcNndIumWmqdD7rJJeTE3Wu3%2BXvo3aDoY204NbEr2fBAN7erxwxhF8EW4aXrUhnnqPCXr2mxHsxDf3DuqOIZXZmusbj9j0F2Vd8JmHBUaxjO9SxSNMQ6jQI9XMlDjFmgqFfmW5zQ9JUKLU2NG8MlnbH%2Bi2HA964Ybu90T1W%2FKcaktMfg%2FqZRsUuycpyB9ekBMnrd%2BT4o2U%2BzELvHPukHXn%2BYoBslVjFCN%2FneCa%2FopXi2YyW%2BOKAySTiarIo99HcfxZVYf%2BjMJOzxMgGOqUBRCg67LMnRefrzuefl3FyBgHlAJXCbbX5KepVhkTjPEzilooLfnsP46mcRiHeYT9W0%2Bccxe1IZGCtXAU%2BDAKxwFUCHhmcdrAVhSdpedgz4TueaSz6FPLMEdhSB9HwvMQ4b3OviQxEYfPk6chlXRoIEL34p0BfkZ6C6tGc4CR5Idwu%2Flqe8Ig3%2FJJsxZ98N5jHvV1t71ZMPdqlC0lm1irIEuCn%2FI0o&X-Amz-Signature=1eb45f3be33853e1b7b566df4ea68806d9648c7bc5e98ad5f756f1857dc52f74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

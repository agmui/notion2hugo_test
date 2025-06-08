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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WHBOB2K%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9sQKUGJKgfys7A%2BLrkiCp%2FB8FssH9v4XOLQmCXkKeZAIgHOfo%2B4lWt2jaEDjv1rqPOxAL0rPQRLYK1yU1ymOP%2F%2FQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIML2oKnmFiNH6UBeircAx%2FHTGJHZcjRmgOyoQwx5r1wUNjxqbVziUjowurk4uMtDMuBA%2BJ5539zhBw1CLCSZHYG7W6PXz%2BzUmy%2BKImdHiXo3DMRyxQp8pJX4WBVdDv6uWtyJe%2FSql92D%2BGk1yL2w5JFv4NdX1FBLBX6hUlKZP35gft1ZDo%2FdACfBnKXfxLentNOvKH68BVp6NYjB9XO9SKGGdmoF2dmW8a%2FiY5fFFmOshOJMcNq2BHT4AbKcat9TMsCpb0HzJwrOzc0MMEeKdh6SXy9OslJAkX6oEBsJpJMpZbotv2GpaGf8B%2FyNRpCAexAf00SYc9G8UwwPA7WlBhH1SGtrMhCBqjThDfVszHYdBEpCqrpUiM9DjkyP87syQzVyPw%2B5R0%2BZFXWVxe6TAU9B9EsNTKSyTQ5uEkQ03F%2BgyuObvYJZEvEC0hYcW1S7bIbMHY41EVhoPxFx7gyiK0PrTLUTCttlX09p%2BFvyM7qEiu39GKxTPk%2FvjyflVqlQ19h48A8mH4ZvVCa09YoQICnpBN0Cjyv9fv9sopPBhcaSuYPEymniYP0I9TIec67DDRUcv03jxrWjjItHCyyTgXFXhxig3IEwGBLE7KCG2uYvxGH08uRGP1NXaztqj4svojJE8WwnLeODSNxMNCqlcIGOqUBdXxJ1EbjBMu0p7nNwlgCTCzmdygDoV2y1u80FHmdwAgS9yKaFKT0Vc4DQ%2BhiBtzGJe4pDaVq4QUgup%2BC4wlRypeVDB%2BSpAaYqCrYQqiCi%2FKc%2FJlICBBkyWkUaC70rOFnmB4qqzaaF%2Bn74UcfPgHrPrt92b60NjbLg0PZvcyZCyLmvhBIipmKeEs%2FPGIuDfDF8doPSlaJcaNE6hmigPXXuHNMb6lY&X-Amz-Signature=93f6858a2e166bbce881ff1e6ee9fd17730a6afe7f46a37f1b5f8be7568b5d4a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WHBOB2K%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9sQKUGJKgfys7A%2BLrkiCp%2FB8FssH9v4XOLQmCXkKeZAIgHOfo%2B4lWt2jaEDjv1rqPOxAL0rPQRLYK1yU1ymOP%2F%2FQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIML2oKnmFiNH6UBeircAx%2FHTGJHZcjRmgOyoQwx5r1wUNjxqbVziUjowurk4uMtDMuBA%2BJ5539zhBw1CLCSZHYG7W6PXz%2BzUmy%2BKImdHiXo3DMRyxQp8pJX4WBVdDv6uWtyJe%2FSql92D%2BGk1yL2w5JFv4NdX1FBLBX6hUlKZP35gft1ZDo%2FdACfBnKXfxLentNOvKH68BVp6NYjB9XO9SKGGdmoF2dmW8a%2FiY5fFFmOshOJMcNq2BHT4AbKcat9TMsCpb0HzJwrOzc0MMEeKdh6SXy9OslJAkX6oEBsJpJMpZbotv2GpaGf8B%2FyNRpCAexAf00SYc9G8UwwPA7WlBhH1SGtrMhCBqjThDfVszHYdBEpCqrpUiM9DjkyP87syQzVyPw%2B5R0%2BZFXWVxe6TAU9B9EsNTKSyTQ5uEkQ03F%2BgyuObvYJZEvEC0hYcW1S7bIbMHY41EVhoPxFx7gyiK0PrTLUTCttlX09p%2BFvyM7qEiu39GKxTPk%2FvjyflVqlQ19h48A8mH4ZvVCa09YoQICnpBN0Cjyv9fv9sopPBhcaSuYPEymniYP0I9TIec67DDRUcv03jxrWjjItHCyyTgXFXhxig3IEwGBLE7KCG2uYvxGH08uRGP1NXaztqj4svojJE8WwnLeODSNxMNCqlcIGOqUBdXxJ1EbjBMu0p7nNwlgCTCzmdygDoV2y1u80FHmdwAgS9yKaFKT0Vc4DQ%2BhiBtzGJe4pDaVq4QUgup%2BC4wlRypeVDB%2BSpAaYqCrYQqiCi%2FKc%2FJlICBBkyWkUaC70rOFnmB4qqzaaF%2Bn74UcfPgHrPrt92b60NjbLg0PZvcyZCyLmvhBIipmKeEs%2FPGIuDfDF8doPSlaJcaNE6hmigPXXuHNMb6lY&X-Amz-Signature=cd52da87224c8479e57156451de68a86a5242bff2fb24c382805d6f17cec0ebf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WHBOB2K%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9sQKUGJKgfys7A%2BLrkiCp%2FB8FssH9v4XOLQmCXkKeZAIgHOfo%2B4lWt2jaEDjv1rqPOxAL0rPQRLYK1yU1ymOP%2F%2FQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIML2oKnmFiNH6UBeircAx%2FHTGJHZcjRmgOyoQwx5r1wUNjxqbVziUjowurk4uMtDMuBA%2BJ5539zhBw1CLCSZHYG7W6PXz%2BzUmy%2BKImdHiXo3DMRyxQp8pJX4WBVdDv6uWtyJe%2FSql92D%2BGk1yL2w5JFv4NdX1FBLBX6hUlKZP35gft1ZDo%2FdACfBnKXfxLentNOvKH68BVp6NYjB9XO9SKGGdmoF2dmW8a%2FiY5fFFmOshOJMcNq2BHT4AbKcat9TMsCpb0HzJwrOzc0MMEeKdh6SXy9OslJAkX6oEBsJpJMpZbotv2GpaGf8B%2FyNRpCAexAf00SYc9G8UwwPA7WlBhH1SGtrMhCBqjThDfVszHYdBEpCqrpUiM9DjkyP87syQzVyPw%2B5R0%2BZFXWVxe6TAU9B9EsNTKSyTQ5uEkQ03F%2BgyuObvYJZEvEC0hYcW1S7bIbMHY41EVhoPxFx7gyiK0PrTLUTCttlX09p%2BFvyM7qEiu39GKxTPk%2FvjyflVqlQ19h48A8mH4ZvVCa09YoQICnpBN0Cjyv9fv9sopPBhcaSuYPEymniYP0I9TIec67DDRUcv03jxrWjjItHCyyTgXFXhxig3IEwGBLE7KCG2uYvxGH08uRGP1NXaztqj4svojJE8WwnLeODSNxMNCqlcIGOqUBdXxJ1EbjBMu0p7nNwlgCTCzmdygDoV2y1u80FHmdwAgS9yKaFKT0Vc4DQ%2BhiBtzGJe4pDaVq4QUgup%2BC4wlRypeVDB%2BSpAaYqCrYQqiCi%2FKc%2FJlICBBkyWkUaC70rOFnmB4qqzaaF%2Bn74UcfPgHrPrt92b60NjbLg0PZvcyZCyLmvhBIipmKeEs%2FPGIuDfDF8doPSlaJcaNE6hmigPXXuHNMb6lY&X-Amz-Signature=0d6f4f162c2d8473f7efc922ba66d7efce1a42c20bc34e63d914fb124b41f85e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XTP7JWQ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVynY6zTVhHMO0ch3dUIwyni8cJz5cge0BGB93fVJTswIgHslkCgqMflhd%2B49IrTXU9onYdwibas8joz3NMqdlZiwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfID0v%2B2hRrwma4OSrcA1dfK2KbodVW0TI11ExgEmLH0XwbrVyHcEt0XHqM1t59Pv2s6ujxi2Lr4BLjnfGjsCLHZIwo0ERpzQFdXPdqWEpUCySQZIL0%2B7%2FdSQCcjnWAv3a3Pddnvr6300LW94kb%2B7SBjgrCVbRgkd36%2FSpXN%2Fa8%2B9aO02%2BRzW%2BPbJcB52XuGbCOEj%2BwPNgcs1u0cvdhg9RUUctNZwZHPQXeQv62l0j2WdB58NTg44xUl81Ir%2FvVSc0zBBv8oHV6SgdbC4zrkSr9KcioyRA%2FzIADEk33Tap%2F8ARI2EA6KxOljCVdb6rUyu3chU71II%2B5CgUeBBPJqpmC3JXpwbZyUUnEnLfM%2FfzIT64JSWFx6GluTl8jwV37D60Bc1aoSUZ8Jk0vv0iZLj7P7cp1JOk6yBnya4eTUz%2FXdu8FWNRBD9Bosv6g5%2FDYMNjqYrmJP1NnrzCTAiTJXT%2BGNKSW%2FiY3FHko1nr564UbBua3D2fv9vK12XBqLyMe1XEthkHib8vAPSJ8el3SXGX0%2Fcr9UqLeFJRddrWAgBcFdx287y7JWpAcAkWTE5ZNwH1%2Fw%2B8Zvr32TJk8I2XU3vmA7yh9AHyK4QFVOYgt1MgZXXxfO7zt2RA0OdiZuDMldWNrYOUntmHH8SzwMIWmlcIGOqUBwut%2Fh3LZP9Cq74b2lqyB%2F8iW%2Fi%2B0TupOBVCOi7lsEJd56v6XFdIvGLTFkyyFl2fjYlM6OaMalca6aXwnU3VCcu5RZVdanLMNc6yyUz1%2F4CsGYTIRF%2FJeTPu7oakfcNOypeMzSqiUhstXJ2Z%2BAXhpMigyeVapp3tyraiHTj3NA%2FlioFutgVUpz3wN%2F0tFGw8pZJ4bbb5FOVvWx%2FotT0KnJPyfcBk2&X-Amz-Signature=b0bc30c51c306c30ac55c65c0a3d63d3c543015867bba63f4eb5a22230a3c421&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBLOKWO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoScqUVHfJwv0T74hHVxF9hMNbk%2FajfgoCLPFzPbswnQIhANwhJJZfKxSr1ukb8AKbEcDxFJda9r1iAB2AnoNx7RcuKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY%2FiMzsNE7rvXCnZwq3APns%2FJc1dY3WX%2BquNboi1OP6gcKSSONsGnojT%2Fn4LRxGdg4xHJatw%2BE%2F9nSnKiXqod%2F158gBC24hb05SfGqs5mniTtEK1zv%2Fk8kWoMqx0v%2FHcC4WYnjh0g4yzp7yp3h3fW3rFKBJzwd22cgS7ff5tCL1%2BFzUhs%2BLpxbeDHr66cHQjt%2B19DIrmC3mXHiEcIo4ZqlEycNEXcInFozafgMhSASJe4%2Bt2T0R%2F8Ym7qLDjRnr%2BouvRK8ogAhE4L4xIOXZC5ALp4GHAP31UQQn8vKDiRfP3pLs8WvLR%2F%2B3qSjyh8fBoucC0esxu0Um0jpJcScPbmYVcE0Vbr5IOf4Pgwn7iWY%2ByZfR40hNUX18xP2hGwIhCwAU%2F63TnXRjVFzLDxY8f9UuEMv6GugV9pJOFSC%2FCBGmY8wGugtQEoDSfu%2BfeRvtzJ%2F5e3jyKy05DqnsIE5fCpsvh9qLq%2FXhwcfY%2FyLqJD3qpfbxsA0G9fjZ%2BIJZNHGQenXdYf5QFwAoGaYSlzVDW1S6eOCA56dfR%2Bx%2FTQUeDuc8f5vLNPP8aHYp4%2Bcco1enkMZRo5C7aQeyYZRHaZkpOPdUK8Cmn%2FcqeDtgmRPfVgtRokdOwh1W6TXV1%2BUBB8EIY89XzLXfveRk4YX%2FzCyx5XCBjqkAXEfVx8vZDdcdF9ssPUWwlXsYVtZ7PFo5Xo9yMLDxZ0qTMJtvlbmE0T0awJR9wVz9846b63y5SgYZYvxVYg7FY8x6jMDck1IVH4e89rgZj6aXl65FcmvOgcUAfG17Og3eBs%2FzU3WgTiyj80CFIUWqDSrKznWBO7GVpb7xhjZHryifdIFPrv%2BvCgkrUhnoA78%2BslHWk6uGxjnacDV4ITdJLnkMJzU&X-Amz-Signature=5cc0edbed270a0f82f82e2e05267ffedb04946ccf4b47241458f0d6f4db61199&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WHBOB2K%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9sQKUGJKgfys7A%2BLrkiCp%2FB8FssH9v4XOLQmCXkKeZAIgHOfo%2B4lWt2jaEDjv1rqPOxAL0rPQRLYK1yU1ymOP%2F%2FQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIML2oKnmFiNH6UBeircAx%2FHTGJHZcjRmgOyoQwx5r1wUNjxqbVziUjowurk4uMtDMuBA%2BJ5539zhBw1CLCSZHYG7W6PXz%2BzUmy%2BKImdHiXo3DMRyxQp8pJX4WBVdDv6uWtyJe%2FSql92D%2BGk1yL2w5JFv4NdX1FBLBX6hUlKZP35gft1ZDo%2FdACfBnKXfxLentNOvKH68BVp6NYjB9XO9SKGGdmoF2dmW8a%2FiY5fFFmOshOJMcNq2BHT4AbKcat9TMsCpb0HzJwrOzc0MMEeKdh6SXy9OslJAkX6oEBsJpJMpZbotv2GpaGf8B%2FyNRpCAexAf00SYc9G8UwwPA7WlBhH1SGtrMhCBqjThDfVszHYdBEpCqrpUiM9DjkyP87syQzVyPw%2B5R0%2BZFXWVxe6TAU9B9EsNTKSyTQ5uEkQ03F%2BgyuObvYJZEvEC0hYcW1S7bIbMHY41EVhoPxFx7gyiK0PrTLUTCttlX09p%2BFvyM7qEiu39GKxTPk%2FvjyflVqlQ19h48A8mH4ZvVCa09YoQICnpBN0Cjyv9fv9sopPBhcaSuYPEymniYP0I9TIec67DDRUcv03jxrWjjItHCyyTgXFXhxig3IEwGBLE7KCG2uYvxGH08uRGP1NXaztqj4svojJE8WwnLeODSNxMNCqlcIGOqUBdXxJ1EbjBMu0p7nNwlgCTCzmdygDoV2y1u80FHmdwAgS9yKaFKT0Vc4DQ%2BhiBtzGJe4pDaVq4QUgup%2BC4wlRypeVDB%2BSpAaYqCrYQqiCi%2FKc%2FJlICBBkyWkUaC70rOFnmB4qqzaaF%2Bn74UcfPgHrPrt92b60NjbLg0PZvcyZCyLmvhBIipmKeEs%2FPGIuDfDF8doPSlaJcaNE6hmigPXXuHNMb6lY&X-Amz-Signature=b39c2b07dd40ce5d5e33f37ad024eb8bf0f50f1a65459b0d545c78c704ac8661&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLFIU7JR%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDV7xEeupOgEh5kIgMiqKlbkCc%2FJUFzFChyvCvVTVLJwAIhAP4E2LY%2F2f4TSnAOQJyloEOXMuY2KBWQhOzGU6fju2AmKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU7dIo9b3XiIQagvAq3AMbe%2Bb8792BwHSxs0EndAfVNbSBoOGLGYFdINvv2PaYzsl3kIBIdhdzDD9EPhz5r5VclRf22fJq37zjLzS9Ai985JKhGPijnsmwsKZJrVWsTbTD3UnIILHB1PZxRQdGGd6aWuWssdKUhn23jneNS8CI0CNRI8mwDA5LD86p4PL%2FS442SNSLnH81iV5EAevg%2FXGPJyfzfTsax88EL%2FhQpna5F6PeghupMHYCbqN1mlAY2kcG6GuTBLZZkCbMCo474TyM4Pg%2FklwT3UcoiHIftsRJzcW6%2BHrBqiEoLMd3MZnTAJleLUJsTLSEbhD2ffcucubsRtR0ViYapvyuuELCZlquTcKj0dhLNHMXhuR3GpgmZuCugZQEyi%2FVdChYEXeZ1dBIW8GXVamIT2EJVWrxv3Nh0ft8E1Zi3H%2FpWde8Jd3%2Byo3JJj5%2BumktT4LgSj4v95fpQoMoiWpeAs%2FPrZlb18Ov%2BnRrioO3wFjbcvE3pKwLCRFJmMudAQMUBj85mjgx0440AGwyveRgAtHZXZGBQgwM5fqTibi2pIO7MofSFcKGhhNndXUD4CDuHjKYxNueRsKyF1NAJi%2BaywjSoOLRkCREweKM1ah%2BB0eNDMWj2kFpAUMcjih0dNUO7HdRUjCPuYHBBjqkAevlJuDqzwwOv9QqSGGbFhjfn0EohHcTeZneZs63O26j%2FEUUt887JslX3zMsqSJOTiLWPUoBOBBlNYWjMIlag%2B%2B7APfqePmvT7qGgnd3QUE8cuUTTTU2AxAEKkHhAMCjWKvGCIf5O5D2%2F48uxnXadwGO2rA20CTmO69ryPYJ6RggAhvPD81rZloRg1qrY%2BtL%2F5F9ZKVj5cvfuIdXxczJ35jo5Jqu&X-Amz-Signature=b8973b80ff5f25921b1eb9ad4d5234e3f40c06561ab71f05635cea43d3fc2159&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLFIU7JR%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDV7xEeupOgEh5kIgMiqKlbkCc%2FJUFzFChyvCvVTVLJwAIhAP4E2LY%2F2f4TSnAOQJyloEOXMuY2KBWQhOzGU6fju2AmKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU7dIo9b3XiIQagvAq3AMbe%2Bb8792BwHSxs0EndAfVNbSBoOGLGYFdINvv2PaYzsl3kIBIdhdzDD9EPhz5r5VclRf22fJq37zjLzS9Ai985JKhGPijnsmwsKZJrVWsTbTD3UnIILHB1PZxRQdGGd6aWuWssdKUhn23jneNS8CI0CNRI8mwDA5LD86p4PL%2FS442SNSLnH81iV5EAevg%2FXGPJyfzfTsax88EL%2FhQpna5F6PeghupMHYCbqN1mlAY2kcG6GuTBLZZkCbMCo474TyM4Pg%2FklwT3UcoiHIftsRJzcW6%2BHrBqiEoLMd3MZnTAJleLUJsTLSEbhD2ffcucubsRtR0ViYapvyuuELCZlquTcKj0dhLNHMXhuR3GpgmZuCugZQEyi%2FVdChYEXeZ1dBIW8GXVamIT2EJVWrxv3Nh0ft8E1Zi3H%2FpWde8Jd3%2Byo3JJj5%2BumktT4LgSj4v95fpQoMoiWpeAs%2FPrZlb18Ov%2BnRrioO3wFjbcvE3pKwLCRFJmMudAQMUBj85mjgx0440AGwyveRgAtHZXZGBQgwM5fqTibi2pIO7MofSFcKGhhNndXUD4CDuHjKYxNueRsKyF1NAJi%2BaywjSoOLRkCREweKM1ah%2BB0eNDMWj2kFpAUMcjih0dNUO7HdRUjCPuYHBBjqkAevlJuDqzwwOv9QqSGGbFhjfn0EohHcTeZneZs63O26j%2FEUUt887JslX3zMsqSJOTiLWPUoBOBBlNYWjMIlag%2B%2B7APfqePmvT7qGgnd3QUE8cuUTTTU2AxAEKkHhAMCjWKvGCIf5O5D2%2F48uxnXadwGO2rA20CTmO69ryPYJ6RggAhvPD81rZloRg1qrY%2BtL%2F5F9ZKVj5cvfuIdXxczJ35jo5Jqu&X-Amz-Signature=21a3ca21bb1d5baa2d5cbf90b04e02f12fbe5dc1dae745927cd4d8977ab35aa8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLFIU7JR%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDV7xEeupOgEh5kIgMiqKlbkCc%2FJUFzFChyvCvVTVLJwAIhAP4E2LY%2F2f4TSnAOQJyloEOXMuY2KBWQhOzGU6fju2AmKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU7dIo9b3XiIQagvAq3AMbe%2Bb8792BwHSxs0EndAfVNbSBoOGLGYFdINvv2PaYzsl3kIBIdhdzDD9EPhz5r5VclRf22fJq37zjLzS9Ai985JKhGPijnsmwsKZJrVWsTbTD3UnIILHB1PZxRQdGGd6aWuWssdKUhn23jneNS8CI0CNRI8mwDA5LD86p4PL%2FS442SNSLnH81iV5EAevg%2FXGPJyfzfTsax88EL%2FhQpna5F6PeghupMHYCbqN1mlAY2kcG6GuTBLZZkCbMCo474TyM4Pg%2FklwT3UcoiHIftsRJzcW6%2BHrBqiEoLMd3MZnTAJleLUJsTLSEbhD2ffcucubsRtR0ViYapvyuuELCZlquTcKj0dhLNHMXhuR3GpgmZuCugZQEyi%2FVdChYEXeZ1dBIW8GXVamIT2EJVWrxv3Nh0ft8E1Zi3H%2FpWde8Jd3%2Byo3JJj5%2BumktT4LgSj4v95fpQoMoiWpeAs%2FPrZlb18Ov%2BnRrioO3wFjbcvE3pKwLCRFJmMudAQMUBj85mjgx0440AGwyveRgAtHZXZGBQgwM5fqTibi2pIO7MofSFcKGhhNndXUD4CDuHjKYxNueRsKyF1NAJi%2BaywjSoOLRkCREweKM1ah%2BB0eNDMWj2kFpAUMcjih0dNUO7HdRUjCPuYHBBjqkAevlJuDqzwwOv9QqSGGbFhjfn0EohHcTeZneZs63O26j%2FEUUt887JslX3zMsqSJOTiLWPUoBOBBlNYWjMIlag%2B%2B7APfqePmvT7qGgnd3QUE8cuUTTTU2AxAEKkHhAMCjWKvGCIf5O5D2%2F48uxnXadwGO2rA20CTmO69ryPYJ6RggAhvPD81rZloRg1qrY%2BtL%2F5F9ZKVj5cvfuIdXxczJ35jo5Jqu&X-Amz-Signature=6ad34e2748e1bddcd6ffb185abdc5533d6f18c153be8d63b0a21486578b8b648&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BQMQLVY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIAm%2FGVG6XmLA0H%2Fv5WH4OGMv7MAw1UK31JNX1HV16ZK3AiA0wFSeFvdEAi%2BL8swblfcf64vOuuHUfRwjUug9eYTgNiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7CGlfCUXv9fcvS9cKtwDBSn1ChuKHLVo6BlqBvs5po3EqCw4TAO2bzuoE534Q6WnNq3Q1Ajj1rHVj91c3yxR%2BGazq39I1S5i0A5vn2xlu0sakbNOCj841mk7yrR7i%2BrTu48AHhvrZE7DDdRL6t4HhA6Dh2mPc7bDbVvdoRoY7nc0gH%2BtDFteHiSvifYSFFg3WbqbLcmHNSfhjWn5lEJHE3%2FDGFeio9KJgZ4F4xF8KabvncpWRUPAW7WThdckq%2FIOtD9hWAL9Dwrcwf5yDOBFB%2FCXA6vC4e8Gs8ewZ8u6W2yYpkVA2%2FIvoblaIu8t1rL4AlGjQj2qh0gKgGTk7Uw0vWpraH%2FRdcrYSJT9V9hljynCvtvbxSnJjsACsL5NMK51rMWPty9nRTi4hHcQT%2B38gBJ643MtSzY4zHdALgq7WgKLbq4ayEGlThbUvknm0FzIMRjssmW7YRxh%2FP1A18VcCQpS5vVZNT3zc9od1OBjRO2PaR4D5Cy5S3KG6m4fBb9rv85HIE1Xi5UPn7x2IqbH%2BLYgJ%2F2RbYF085YONPoEqT2VXdkv6Ls5NUD658vGtyptm0zl%2Br4dcCeAM%2BM75jaHmGmjkYhNCdVMPmJ4uzrvDQ3ICobptObzQPOnta7OZrV6zD69KI2APoRDWuswt7mBwQY6pgG7MTTEiKQBR4ppGXkGYpPYJmFSYTO9v%2Bd8SrYsoiuruaHfu4dzmweKERxaK%2B9JCTo9xJEQ7BwA91xoz9kb7%2FuuyAipHJXoAPsWZkyWcjcLLhF8qsDxjFT4YhGCNXU7ao8qMW4WAkpjtPzHWNuzV37gFzDgxOs3hCrg9ZVZTBxFE7h50w6LoYf92bsClAqP3tPdXsuNnw3wzmFcP16FEhvdwUfz5VTv&X-Amz-Signature=dade19414e993cf6699dfe8bb06aee13d3097f104ac439e9de4bc38e5c853942&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AO2PYE7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBvM8GCK%2FwxSWZHy%2F1NX%2F7DYTs63Zhs9MpLXeUwjikOyAiBzT23sGW14UhcqwS%2FAd%2BhO7GS2aoEjlnI7wWfM8c17QiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkmSUvCuUmybjwFjyKtwDhqutlBBdv5ZjU7UmyRh3RfGL4gelL9a1rLQUdTRxKjJAMhM7DTPCUDG9AyS0w05u6e1BMlISfvH9KtectC2%2FFw22M6sMOgssoxk%2FHdhJlyCnINKYDXWa%2Fx8V%2F%2F9owMHvTskB0NLz8ZrzThYY3a4Aywb4Xxtn95XhWLTiPE2Pramnut3wyDxQVsOOoK1bCRsxuTMVxenrc6EYYKEYOZQU3k9gWNiJhMBKA8K5WoPUudTJx2RR9ofJ7y4HUheo65cjJKihQF6fdvuTLiZnNsBdJ9rtqeh%2Fa7rwd5W0cU6HjBH1Fkef4RgtNx0a0LAPAK6D7unuoD9bDRR8onmKi7gyXM0bloJwSB3j%2BlYA9H5X66esKM8i5l6wECSE29aNu5jWYI0Mt6Koy0i7nCIESCurSUZgrWOoJQyHxpXORjWZsy%2BJb%2B%2FN3%2B29EaPNFPW3w1U6bBiV7ZAdSPBKNgiy%2F1ssqJ0goXvQrd6AWo3FBxe9U6j1%2Bs%2BAyEUliaTK6fehnqlJlCV4KlVFGsiu1jrNpU2AzH3zBUkozVuy%2BGlqdMY1ivPVExHi5dOJiz3ftWDov%2F43Q0v5iOOl83mh1QsrMzFpnQCKqKSx6WbLD5EGO7WpKnkFtk7es8E9t17kOe0wo7mBwQY6pgFuZcvMAM6FL5XVHGOee5g6HR24EdF8A4E3P%2Br4dqkHPPzPDz28UpukJcO%2F5RU%2BgjNWu8mzEZKG2lgSl0O5tB3XIiafWtkTonSLeWgSqqGMlip3bzaYd3sen1pE0%2FsJGLOYnog7cMrLdceqpno%2B9gFnuSkzzAGHt8Yp8jeCqwpbc3RSZR%2F5hqrvMGENk6AkJw7vUdrsZQ2PqRdw8L4uWznKesm64V4x&X-Amz-Signature=535e2122cd104dee78efb9ff00319d60d7628bfba69d2e519b0297b8cd56f9ad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLFIU7JR%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDV7xEeupOgEh5kIgMiqKlbkCc%2FJUFzFChyvCvVTVLJwAIhAP4E2LY%2F2f4TSnAOQJyloEOXMuY2KBWQhOzGU6fju2AmKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU7dIo9b3XiIQagvAq3AMbe%2Bb8792BwHSxs0EndAfVNbSBoOGLGYFdINvv2PaYzsl3kIBIdhdzDD9EPhz5r5VclRf22fJq37zjLzS9Ai985JKhGPijnsmwsKZJrVWsTbTD3UnIILHB1PZxRQdGGd6aWuWssdKUhn23jneNS8CI0CNRI8mwDA5LD86p4PL%2FS442SNSLnH81iV5EAevg%2FXGPJyfzfTsax88EL%2FhQpna5F6PeghupMHYCbqN1mlAY2kcG6GuTBLZZkCbMCo474TyM4Pg%2FklwT3UcoiHIftsRJzcW6%2BHrBqiEoLMd3MZnTAJleLUJsTLSEbhD2ffcucubsRtR0ViYapvyuuELCZlquTcKj0dhLNHMXhuR3GpgmZuCugZQEyi%2FVdChYEXeZ1dBIW8GXVamIT2EJVWrxv3Nh0ft8E1Zi3H%2FpWde8Jd3%2Byo3JJj5%2BumktT4LgSj4v95fpQoMoiWpeAs%2FPrZlb18Ov%2BnRrioO3wFjbcvE3pKwLCRFJmMudAQMUBj85mjgx0440AGwyveRgAtHZXZGBQgwM5fqTibi2pIO7MofSFcKGhhNndXUD4CDuHjKYxNueRsKyF1NAJi%2BaywjSoOLRkCREweKM1ah%2BB0eNDMWj2kFpAUMcjih0dNUO7HdRUjCPuYHBBjqkAevlJuDqzwwOv9QqSGGbFhjfn0EohHcTeZneZs63O26j%2FEUUt887JslX3zMsqSJOTiLWPUoBOBBlNYWjMIlag%2B%2B7APfqePmvT7qGgnd3QUE8cuUTTTU2AxAEKkHhAMCjWKvGCIf5O5D2%2F48uxnXadwGO2rA20CTmO69ryPYJ6RggAhvPD81rZloRg1qrY%2BtL%2F5F9ZKVj5cvfuIdXxczJ35jo5Jqu&X-Amz-Signature=4f14dfe28c25f4ab9d24be2da2a1d1b16530bdb9a211cc7c645e244efb78fbf9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

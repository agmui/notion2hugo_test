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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THAJRMXC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFK9MX0Y%2BwUAatpL90uORH0sMDmpsfD5Sk6WbOhMPDkuAiEAgNVbnbh0Gb4wFfVkaNmV1J1OtEoU8zF4LunFZSCdE18q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBmFJMLorRnO3gRG%2BSrcA1kbmKS5h4SdsfntX80gpC%2FJi9hxawCltXFoUdt5AxAev8clvvY6gHXG0j20xS4CCC%2FgsUfybvaMx3mmuYlp%2Boj9jYtKWTizBmF9OjrE7KLcpMFsiXampXuiRJzDtCL0tYE5%2F1RvFAwKasHuocecOIMDKhb9MJA8g%2FbiuUvp9YOTJy1qV48E5%2FXoRa0GXcZQRiuBPsTKKahlerW7UPUztYIAgyPM6BOYsUxP5DwLDymw%2BuqK9LF2XA4nN%2BtUrBT%2BotVrwhcKcMd%2BgRh7W324IW%2BjYcmY4RNYqmmTS%2BfJw5qyg9%2F6IOZ4FSalyXGck55rrbAtewl5A0dcCveOc8ght%2F1qBjJoT4rhV2NEAjNw%2BOfxcV3muvRZjopEsqgX%2FiDWIh79V0TvtLUZHn%2FW0ZfTtzjeP1L7ndWo%2BqxKe6r7XTcR%2B2iNQTRXjcLDDmZk6FzgzMdeibO8TZS2UKflGCm%2BtL2%2BgV9EOoYQGCffYx5R3UqeyardBtwXgjEJDpT%2FomKz4w1VeSZ73KIYPJ%2Br8gSLsh7bR6nU82say6nNl8dWesl2wDjzxlL8n3I53fOkPxKUqY24QZ5Yn6yDpE0ZCX%2Bevndyp8Ph0XBJxjqyyv0J%2FOaAjdoctD%2Bkq2%2F%2BUGfRMLTD2sEGOqUB5k0n8gUjKJ37qZJVcSHEIRbYxt%2Flcwn9ONCf%2BrgV5i3c5hrKwyIJ2lHc9VYxiRYPOvr6mhiA%2FGpkml0%2Ftxza7PNiWn2E2lenLaR0R85qM42j9nnpAyKTHMURc5%2BDJmynjHchcmNYvnV0u8xRZz92i254AVCuW6IhknOm%2FnOYiZp%2FjH%2FvgOOND6R0ETzeJA4hQow7Qz9y8Zo6Q4l7E1MhfqBWMStG&X-Amz-Signature=abfc2b917241fd0d1577bd5a175704f3f83607afc693cf66d91c49b8868cb404&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THAJRMXC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFK9MX0Y%2BwUAatpL90uORH0sMDmpsfD5Sk6WbOhMPDkuAiEAgNVbnbh0Gb4wFfVkaNmV1J1OtEoU8zF4LunFZSCdE18q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBmFJMLorRnO3gRG%2BSrcA1kbmKS5h4SdsfntX80gpC%2FJi9hxawCltXFoUdt5AxAev8clvvY6gHXG0j20xS4CCC%2FgsUfybvaMx3mmuYlp%2Boj9jYtKWTizBmF9OjrE7KLcpMFsiXampXuiRJzDtCL0tYE5%2F1RvFAwKasHuocecOIMDKhb9MJA8g%2FbiuUvp9YOTJy1qV48E5%2FXoRa0GXcZQRiuBPsTKKahlerW7UPUztYIAgyPM6BOYsUxP5DwLDymw%2BuqK9LF2XA4nN%2BtUrBT%2BotVrwhcKcMd%2BgRh7W324IW%2BjYcmY4RNYqmmTS%2BfJw5qyg9%2F6IOZ4FSalyXGck55rrbAtewl5A0dcCveOc8ght%2F1qBjJoT4rhV2NEAjNw%2BOfxcV3muvRZjopEsqgX%2FiDWIh79V0TvtLUZHn%2FW0ZfTtzjeP1L7ndWo%2BqxKe6r7XTcR%2B2iNQTRXjcLDDmZk6FzgzMdeibO8TZS2UKflGCm%2BtL2%2BgV9EOoYQGCffYx5R3UqeyardBtwXgjEJDpT%2FomKz4w1VeSZ73KIYPJ%2Br8gSLsh7bR6nU82say6nNl8dWesl2wDjzxlL8n3I53fOkPxKUqY24QZ5Yn6yDpE0ZCX%2Bevndyp8Ph0XBJxjqyyv0J%2FOaAjdoctD%2Bkq2%2F%2BUGfRMLTD2sEGOqUB5k0n8gUjKJ37qZJVcSHEIRbYxt%2Flcwn9ONCf%2BrgV5i3c5hrKwyIJ2lHc9VYxiRYPOvr6mhiA%2FGpkml0%2Ftxza7PNiWn2E2lenLaR0R85qM42j9nnpAyKTHMURc5%2BDJmynjHchcmNYvnV0u8xRZz92i254AVCuW6IhknOm%2FnOYiZp%2FjH%2FvgOOND6R0ETzeJA4hQow7Qz9y8Zo6Q4l7E1MhfqBWMStG&X-Amz-Signature=9a8da6a80fb826ea12b188a61496fe89c71671ccbca6b731a069d07095c537da&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THAJRMXC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFK9MX0Y%2BwUAatpL90uORH0sMDmpsfD5Sk6WbOhMPDkuAiEAgNVbnbh0Gb4wFfVkaNmV1J1OtEoU8zF4LunFZSCdE18q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBmFJMLorRnO3gRG%2BSrcA1kbmKS5h4SdsfntX80gpC%2FJi9hxawCltXFoUdt5AxAev8clvvY6gHXG0j20xS4CCC%2FgsUfybvaMx3mmuYlp%2Boj9jYtKWTizBmF9OjrE7KLcpMFsiXampXuiRJzDtCL0tYE5%2F1RvFAwKasHuocecOIMDKhb9MJA8g%2FbiuUvp9YOTJy1qV48E5%2FXoRa0GXcZQRiuBPsTKKahlerW7UPUztYIAgyPM6BOYsUxP5DwLDymw%2BuqK9LF2XA4nN%2BtUrBT%2BotVrwhcKcMd%2BgRh7W324IW%2BjYcmY4RNYqmmTS%2BfJw5qyg9%2F6IOZ4FSalyXGck55rrbAtewl5A0dcCveOc8ght%2F1qBjJoT4rhV2NEAjNw%2BOfxcV3muvRZjopEsqgX%2FiDWIh79V0TvtLUZHn%2FW0ZfTtzjeP1L7ndWo%2BqxKe6r7XTcR%2B2iNQTRXjcLDDmZk6FzgzMdeibO8TZS2UKflGCm%2BtL2%2BgV9EOoYQGCffYx5R3UqeyardBtwXgjEJDpT%2FomKz4w1VeSZ73KIYPJ%2Br8gSLsh7bR6nU82say6nNl8dWesl2wDjzxlL8n3I53fOkPxKUqY24QZ5Yn6yDpE0ZCX%2Bevndyp8Ph0XBJxjqyyv0J%2FOaAjdoctD%2Bkq2%2F%2BUGfRMLTD2sEGOqUB5k0n8gUjKJ37qZJVcSHEIRbYxt%2Flcwn9ONCf%2BrgV5i3c5hrKwyIJ2lHc9VYxiRYPOvr6mhiA%2FGpkml0%2Ftxza7PNiWn2E2lenLaR0R85qM42j9nnpAyKTHMURc5%2BDJmynjHchcmNYvnV0u8xRZz92i254AVCuW6IhknOm%2FnOYiZp%2FjH%2FvgOOND6R0ETzeJA4hQow7Qz9y8Zo6Q4l7E1MhfqBWMStG&X-Amz-Signature=11fd884d24d83c50f8ebc04ef8537c18ec11a397a0f257378a04e235758cea43&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6CUG37V%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYMvaYp2Nou0pNsFrU1yv7mW5FNUSJRoXyVcQPUJwiSQIgXtxbEnboDYmxpFapj1R%2BFvzxfGFr20ld9NjCkmLQFusq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDAz9jvsq54Go%2FY49%2BSrcA%2Bw1JRZyyR8NImW79Q3EsDtOVbNNKP9xYJ%2FjXionBi%2F2hwNQoHxzPN5WtOlMp%2FAry7%2FbRaIUh%2B9CraJME1EtuAdHNtC2Zdi%2FRUakFNWX4cTTnzj28PiyoZmeTScmsvzIEFyq8Cw9R6jfiZcIsul1Rsb2Qm2hISZMlwwe4zTtHGRLZMabtbBaD1Egsd3CGgz6raBydyaOOOj96PP1XxIyglN%2F79XpoFzSuhKzwU87%2FUpZIAI63ywIuSpJLZerTh7cZMn4x785VdkwNygViz0TGTD%2BAgzfwghG1uAaDkbiQjAtJrvll9qEQsIGSOyJNJGpXgxBRuaK4w6KM1TveIl3i3%2F7Tiq0hLHh9WkPZethj9kJtLhrq6UsSZp67w1j49LKid88Yl68y30HzMgyBGqVeL%2BjyflYTu09kOXurKaSB0p73DjRcT871ecxJXV8Xo46fx0zqybmj6XTIJc4%2FCS8RV%2FDKWNsi27ojpMEgDnkryU%2BXGUCvlgI6%2F3lEtYQGVDjtG73rlCZxd24TrUwjwqHDcyr4LyxBpl2h2NpNtq78ROZlv8dFU3B6HzKqs%2BVH%2Bd9uGD7G2wHNb%2FyP259YkF5KwOFgBnRDcWX3lvvFSmSHw2yVwpgHmMAfCHuMkqYMOPD2sEGOqUBoPkJcZLVnYYAaK6kMEPkI35fIfe1HJIFrF%2Bgp%2FG9lAFALe2qjqAMJYkpBwHM0sWGg2yHFrF%2FZ8Y3jclhtBK03%2FBv0Sd%2Fg0wnwb%2Bz1px%2Bm65Ki8QsfWWEmIAFTKWZyDwlEh6Qe3wXXe%2B3ppZTZUblw6Gaj0hr12ltqXJGYaNXJXN4LIymvRPgZM%2BSWY4WrpTeCPu0CU3fCnLlLjBpV5RARGSF0nn%2B&X-Amz-Signature=6d4e9acee197b0fd5bee086da63ca7e4606aaddef4b7dad1409ce165844f8dda&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XKVRPIC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FZFRUGrrqd2Bp5s5OstrixbafLEtIDEaAcitpn0Qv1AiBNaAm66yC24sbA9K5tz8yPJpGYiQezwsTnnOLodMIP7yr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMFM6mj%2B8u%2F73nR5%2FcKtwDtll8flgukKsE69nRbjKuSwcYFPb%2Fo4vFnqSMKw%2Fg6bxC%2BZhKRZiGTgKD7%2FXm5v%2Fjos4SCCS5uCCRpnYVdiCI5b%2BKi%2BVdFjbA8XFdYnScMDsGfqbdhh57BgBOG5h3cycTAXdc47YE3m1b9izya0UXSdvsb8v%2FJXEIAIW9RwzQRuufE0oknXzIOgJtTVwkIMktAEaAO%2FhOvwU97ycC3lfmqpMx%2FKpViTv4aMcZn6MQjQXU2RbJcH1dFR3g9px%2FJXGOSXsG1poaD0yGi4v05SDUzA2kmEev%2BLEXw2xl1zAkYzRl%2BZ5QjyJTn8J96HB6XzB5Up6uB3My%2FDfoniJoQWJNZEdVvA7rvlfFc4y9cNLWy%2BEePw4XNIWJ7Nju0i%2BRp1AqBzW2H43isGdWz4t3t48Pl8A0zEnU48%2F1VJiE4VcAM%2B%2Ffb7WlVkDOmBlBfilL7N9bXwhWA%2FulWoSsMc03Y7QNLZnW7bDQ1DMinlFa7xpmuGNc%2F4gM3hzzgV4BcuLUCKinalRCqIii%2FdDV%2FOgo6%2FrvXI4NKmRuDoZvagvzF9qZ%2BvLPr75oP7oAXSysnTrxZ2vIXpGh8l7ZM9gzSBFSb0viaT10PnlYNGotct9pBgZVaMNym%2FxSBIOSatieuJQwtsTawQY6pgHI3Kxf5x4vUm4cnUuvkIUOJ0ov7jPU3YPmN652EAAfkAp5XYC6%2FPcd5uV7nARQLWz9UFwZJa%2BgF3EJuTcZfUd0Siyi6%2FjouiuZqe%2FRp4ZuLkCuE8c1Rtw%2BxmSoPgqHfGMaRkyLz67tGFP7dktzp91w8WoygNHoTQB3wk6dnkdvrJSKXVjQg%2BfC2XXrbNrgbqPL79mju%2FBE90sy371PQBsQQuSS0rFH&X-Amz-Signature=a3c7f3406382521a61126cf3ae7b315e95a7fc28f4954a24adb1b06da493db15&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THAJRMXC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFK9MX0Y%2BwUAatpL90uORH0sMDmpsfD5Sk6WbOhMPDkuAiEAgNVbnbh0Gb4wFfVkaNmV1J1OtEoU8zF4LunFZSCdE18q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBmFJMLorRnO3gRG%2BSrcA1kbmKS5h4SdsfntX80gpC%2FJi9hxawCltXFoUdt5AxAev8clvvY6gHXG0j20xS4CCC%2FgsUfybvaMx3mmuYlp%2Boj9jYtKWTizBmF9OjrE7KLcpMFsiXampXuiRJzDtCL0tYE5%2F1RvFAwKasHuocecOIMDKhb9MJA8g%2FbiuUvp9YOTJy1qV48E5%2FXoRa0GXcZQRiuBPsTKKahlerW7UPUztYIAgyPM6BOYsUxP5DwLDymw%2BuqK9LF2XA4nN%2BtUrBT%2BotVrwhcKcMd%2BgRh7W324IW%2BjYcmY4RNYqmmTS%2BfJw5qyg9%2F6IOZ4FSalyXGck55rrbAtewl5A0dcCveOc8ght%2F1qBjJoT4rhV2NEAjNw%2BOfxcV3muvRZjopEsqgX%2FiDWIh79V0TvtLUZHn%2FW0ZfTtzjeP1L7ndWo%2BqxKe6r7XTcR%2B2iNQTRXjcLDDmZk6FzgzMdeibO8TZS2UKflGCm%2BtL2%2BgV9EOoYQGCffYx5R3UqeyardBtwXgjEJDpT%2FomKz4w1VeSZ73KIYPJ%2Br8gSLsh7bR6nU82say6nNl8dWesl2wDjzxlL8n3I53fOkPxKUqY24QZ5Yn6yDpE0ZCX%2Bevndyp8Ph0XBJxjqyyv0J%2FOaAjdoctD%2Bkq2%2F%2BUGfRMLTD2sEGOqUB5k0n8gUjKJ37qZJVcSHEIRbYxt%2Flcwn9ONCf%2BrgV5i3c5hrKwyIJ2lHc9VYxiRYPOvr6mhiA%2FGpkml0%2Ftxza7PNiWn2E2lenLaR0R85qM42j9nnpAyKTHMURc5%2BDJmynjHchcmNYvnV0u8xRZz92i254AVCuW6IhknOm%2FnOYiZp%2FjH%2FvgOOND6R0ETzeJA4hQow7Qz9y8Zo6Q4l7E1MhfqBWMStG&X-Amz-Signature=65803fedf4e21a0abe0a6d6f0a7fec234fc8f175f3dcf1a242aa65f479446ad7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

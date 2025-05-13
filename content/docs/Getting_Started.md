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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO6PLA56%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICKYMZwsZPafyj80idCEZSVfEMeO39gjWhSVpVvZWy%2F%2FAiEAvFyRkR2%2BjGWQ9ot9%2BzdErvIW3qup%2FqCLfWmMi6p7YtoqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZngw6MKnPXrlfzQircA%2FGKCfEY9RplFlhPayymdnGmOfHL8ELv2bAg9mUMIO9QtwNTeZrkUlxCFhwzHaQEnjOOsY63Zu7FCB0JG%2BvQyp1tDPyrC1LI%2BOoUBlyCBEUoSp5vvOXYMMCJ2K5GknNyqkKGEthVErqK9t3eD09eoDvy%2BgLlE2T0XBO2qJVRhqWeOhyu6MIU4BJXr6TJvSVxQR8kt%2FZaU0AAbRO1yLFDMHX06M8BOF1sBbRjJ908AwCF1X9o3kwqDKFmk3wk23eArgWGwqZmYEJ2QjQoaurp4q6guwGwJO3V03k7AaggHfL%2BMX0b%2B5kH8C%2FrFM%2Bv%2Bxp8kAjtug0qKFGL2Ylqfclv3nUtp%2BY6U3Ov6ozZy1zQsTN4a4tYONVGXX%2FQzYD0XYnv%2BOyZuGQMmy7uPr3B%2F8hCrUdNNxJ%2Bj84oxnpDV5tvgo%2BF0X7AhzEdLAB0VOcpSkNbWg5s26bk9BRv6up12Xrv%2FlCAzvQ3RDeb%2FGkAJAzMOtX9UO9ivfT9Tkhu%2B%2BPcM9%2FDf%2BdzHdDQo7okSU1A%2FwmP7CMaqdo9PlWRCNtago3bAjh8jPOti1IcxuOA3lt9vw9bosQPKxD4zwgQuhk8GM4uqBJTjnesWWxu37rBnxZUbp%2Bx%2F4e2v%2FyT%2FIs13znqMJKPi8EGOqUBDX7ZKGHih3PYtgX2XNrJFNyo8lEmLFZc%2FLEUsyAuStAJ096FV1yYcapo1au5At7YVUp5pceD4ud%2B56gBq5%2F1Ykp2z9B%2BxnQ%2B11pbTyQGpK3bdBobLnkjaHp9XCs9ZYMTFLVV38dXRMfMsNa%2BJGP1xeqOGDRqUAkYVq0G0QPJNwsEqYPPQCTNhTqzxKF8zRq1IhnIg%2Bq7eD%2F3ejxrQSAUvBgNYh4N&X-Amz-Signature=b33317637577a0f5b545f5c7b324bc507931b5d3f54533c11e719484cb6da23f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO6PLA56%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICKYMZwsZPafyj80idCEZSVfEMeO39gjWhSVpVvZWy%2F%2FAiEAvFyRkR2%2BjGWQ9ot9%2BzdErvIW3qup%2FqCLfWmMi6p7YtoqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZngw6MKnPXrlfzQircA%2FGKCfEY9RplFlhPayymdnGmOfHL8ELv2bAg9mUMIO9QtwNTeZrkUlxCFhwzHaQEnjOOsY63Zu7FCB0JG%2BvQyp1tDPyrC1LI%2BOoUBlyCBEUoSp5vvOXYMMCJ2K5GknNyqkKGEthVErqK9t3eD09eoDvy%2BgLlE2T0XBO2qJVRhqWeOhyu6MIU4BJXr6TJvSVxQR8kt%2FZaU0AAbRO1yLFDMHX06M8BOF1sBbRjJ908AwCF1X9o3kwqDKFmk3wk23eArgWGwqZmYEJ2QjQoaurp4q6guwGwJO3V03k7AaggHfL%2BMX0b%2B5kH8C%2FrFM%2Bv%2Bxp8kAjtug0qKFGL2Ylqfclv3nUtp%2BY6U3Ov6ozZy1zQsTN4a4tYONVGXX%2FQzYD0XYnv%2BOyZuGQMmy7uPr3B%2F8hCrUdNNxJ%2Bj84oxnpDV5tvgo%2BF0X7AhzEdLAB0VOcpSkNbWg5s26bk9BRv6up12Xrv%2FlCAzvQ3RDeb%2FGkAJAzMOtX9UO9ivfT9Tkhu%2B%2BPcM9%2FDf%2BdzHdDQo7okSU1A%2FwmP7CMaqdo9PlWRCNtago3bAjh8jPOti1IcxuOA3lt9vw9bosQPKxD4zwgQuhk8GM4uqBJTjnesWWxu37rBnxZUbp%2Bx%2F4e2v%2FyT%2FIs13znqMJKPi8EGOqUBDX7ZKGHih3PYtgX2XNrJFNyo8lEmLFZc%2FLEUsyAuStAJ096FV1yYcapo1au5At7YVUp5pceD4ud%2B56gBq5%2F1Ykp2z9B%2BxnQ%2B11pbTyQGpK3bdBobLnkjaHp9XCs9ZYMTFLVV38dXRMfMsNa%2BJGP1xeqOGDRqUAkYVq0G0QPJNwsEqYPPQCTNhTqzxKF8zRq1IhnIg%2Bq7eD%2F3ejxrQSAUvBgNYh4N&X-Amz-Signature=f6c0137683a8b4f68197912bbbe19b46425d88dfcd6704d8d24e1601b7abc622&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO6PLA56%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICKYMZwsZPafyj80idCEZSVfEMeO39gjWhSVpVvZWy%2F%2FAiEAvFyRkR2%2BjGWQ9ot9%2BzdErvIW3qup%2FqCLfWmMi6p7YtoqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZngw6MKnPXrlfzQircA%2FGKCfEY9RplFlhPayymdnGmOfHL8ELv2bAg9mUMIO9QtwNTeZrkUlxCFhwzHaQEnjOOsY63Zu7FCB0JG%2BvQyp1tDPyrC1LI%2BOoUBlyCBEUoSp5vvOXYMMCJ2K5GknNyqkKGEthVErqK9t3eD09eoDvy%2BgLlE2T0XBO2qJVRhqWeOhyu6MIU4BJXr6TJvSVxQR8kt%2FZaU0AAbRO1yLFDMHX06M8BOF1sBbRjJ908AwCF1X9o3kwqDKFmk3wk23eArgWGwqZmYEJ2QjQoaurp4q6guwGwJO3V03k7AaggHfL%2BMX0b%2B5kH8C%2FrFM%2Bv%2Bxp8kAjtug0qKFGL2Ylqfclv3nUtp%2BY6U3Ov6ozZy1zQsTN4a4tYONVGXX%2FQzYD0XYnv%2BOyZuGQMmy7uPr3B%2F8hCrUdNNxJ%2Bj84oxnpDV5tvgo%2BF0X7AhzEdLAB0VOcpSkNbWg5s26bk9BRv6up12Xrv%2FlCAzvQ3RDeb%2FGkAJAzMOtX9UO9ivfT9Tkhu%2B%2BPcM9%2FDf%2BdzHdDQo7okSU1A%2FwmP7CMaqdo9PlWRCNtago3bAjh8jPOti1IcxuOA3lt9vw9bosQPKxD4zwgQuhk8GM4uqBJTjnesWWxu37rBnxZUbp%2Bx%2F4e2v%2FyT%2FIs13znqMJKPi8EGOqUBDX7ZKGHih3PYtgX2XNrJFNyo8lEmLFZc%2FLEUsyAuStAJ096FV1yYcapo1au5At7YVUp5pceD4ud%2B56gBq5%2F1Ykp2z9B%2BxnQ%2B11pbTyQGpK3bdBobLnkjaHp9XCs9ZYMTFLVV38dXRMfMsNa%2BJGP1xeqOGDRqUAkYVq0G0QPJNwsEqYPPQCTNhTqzxKF8zRq1IhnIg%2Bq7eD%2F3ejxrQSAUvBgNYh4N&X-Amz-Signature=ade96bcddb2c51cc1cec232304d8acc812ab383b6065b7422098bdbbc622b96e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BQNYHYV%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDEO6%2F183RP5DirCkQTperMMHjmdtRNjomjLd8mfzuucQIhAMYSR1w%2BMb60%2Ft1qfdmvCNaKIDhYIvoR5sOrIdb%2BoznRKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6AbkgQUn8xNhp%2FsYq3ANFl9BJcbstcRXj22ATIXXzD93ghHpzoGwNx8Hr46q3MBGlEaL3nRZyJ38o0K5RcqvDLzVNWO0b%2F%2B8ntQcnSFfZHr1NeiAGmEwau9FYKQ2lSf%2BvkUlFODIJ1Gxsf13K2XTOxyxCIAidNJpI0CD%2B%2FAzslCprqYW4sLpXuJkX2pvm927dA3IV6eKA5HsDb9Zqd8HAoub3Oy6LpxU7hvHVgd0VM40UT2MrB8W9PyG9yjeiCwA3HD6NS6VKBW4%2BUIN%2B3D8kWgSB%2Bv%2BPNvJZssr%2BoIMl4NBXjSc%2BE56snBG%2F0R%2BAfsDPQoVF2GW4kV%2B149c3aH04bDMgc8AfQBYaA34VYso5twjr%2BS7AvsMDZZimVB9w76dgSFSSFoIyRcvxyBleJPgOIYDhDkjLCzbG0PneOBYV7ARuO3858BcO4U%2F%2BVzRjSAzeeFAo%2BPDt%2Bn7%2F6DqqX0MmzxpNc%2Fx7rn9CrBNPnvtpQ7e0Sitf9BSftaHtCaR7SlpG1V1hLHkDeeE2D79T6te3DyYTOOrrXPmeHs1jl7aO%2ByagaUehp89KxhK5vsHbNvCVSSfxzPAVaD7qJf15%2BTyzZe0ILZJNnJnQe13Y48eJgXDOMytpdjc0mNnSauztB%2FUPHxuYd%2FT%2Bfr0QMjCNj4vBBjqkARhczvTLfm%2FMgHENiRKMrOsf2h9sbeuIjj5mEm1HGlImN1GJbOaIYPBRx%2FGdxat3vykve2npqT6cIgaHyo2ZTDGkY%2Fos689g1f4nWRKo8%2Bj8WiTap6DF100yIRSzSWbM202OcNHRMQq6CJ0IuDgGbvLr%2BXWyljZg0VKbLPNi8SeWfOqAHgGaAmKzbZXDXL53GB9Hsh7M9O4PHU%2Bag%2FG2Gcbuwtlg&X-Amz-Signature=5d90ae8715069ff3c74a1574f79982b9afbf0e993e53146334a27e7de96d06c9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653VNQEYW%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCdG7VxIvUXtroj9cPeZwUOVI6%2BvqfRwZXW8d%2F%2B4pMvWQIgKzkpKuw1Nw3oArWGLJytJCkIbeQPNsgzhqrlDQz5VlQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQYBz6EC7oT1ksm6CrcA%2FT%2Be6djE8Lx938%2BSJbzY8rC1VoVAQC1%2Fx0ZSd3nUJIPGZaAtgehkr3Jva6ZXWlcd279Nd6zerHdBUO1ckSJNZMbJZWsJGspZLzvegQn4PrxOcZvE6RRR%2Bg3WDK%2FsrdBPggdllHJWdOBNHGdK1lIkoKn0Vc7sY7DSvwbbS7Ti5a%2B6%2B6AehMqvETip7QaR0BR9Rz%2FHHI8LqSG8Ku5wVYkzvw4LG4eS5bN4NKiHK62W8aW80%2BTW09G7Hy2uzAVkMcEsVzi7pkprp8NO1ZZL%2BtYNOilki7hGjB9%2FU76kUvByYvqOuZ9rbUyFOnApoKPMyzoxrSsKk6B5uih4L7dq0t6GnVfRrpJa7cRVHIL%2FX72CkMcSYTYgE1F7%2FfBwayedbmlRT7nfgdRseJzFO3wT1a%2B4vrQSuNCLcrn4Tqc%2FLRcSf2kIstUj2h4fvVBcTzyqeAnKWNRksYzAKpQmu1y4BouDY7%2FWB4HLITrxV2HwzkNq8EL%2B%2BTCiu44WU4lHHDAxjQEjv1tPEc9shEoauVlicUAt%2FepZsPQwz08wkbr%2FnS2oly8hFgx%2FqLbqQgzAFASmsvtzCdJmRmYtlQ2kfDyuDQ26vnKJiyEgOetj3fHY8xO8TFb45q141gf24zFas07MK%2BPi8EGOqUB%2B1yTH3LYpmqZKmh2Ia71PstIFDDoi1HYbeXMz8RyrpZmSUJOkIK0RzX8InCV1TdsrPdtTblhJYissT6xiQzcvVedd0df51OuUlMXW7QHRRIC3jdlNdfhUY%2BREGXApv6FqCBHW3m5wyvW7qIoI70nmjYwONB3ETp9IjK6iiYZqzP7ZHwKPzijl9xx0LLr1k%2BjVQT3M%2Fh5fu4vmO9eXImZe7pJJ2Uj&X-Amz-Signature=4b1fd177e872e0faa796e51e0ee764feb7686bf98769e57a97f05a5648f44511&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO6PLA56%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICKYMZwsZPafyj80idCEZSVfEMeO39gjWhSVpVvZWy%2F%2FAiEAvFyRkR2%2BjGWQ9ot9%2BzdErvIW3qup%2FqCLfWmMi6p7YtoqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZngw6MKnPXrlfzQircA%2FGKCfEY9RplFlhPayymdnGmOfHL8ELv2bAg9mUMIO9QtwNTeZrkUlxCFhwzHaQEnjOOsY63Zu7FCB0JG%2BvQyp1tDPyrC1LI%2BOoUBlyCBEUoSp5vvOXYMMCJ2K5GknNyqkKGEthVErqK9t3eD09eoDvy%2BgLlE2T0XBO2qJVRhqWeOhyu6MIU4BJXr6TJvSVxQR8kt%2FZaU0AAbRO1yLFDMHX06M8BOF1sBbRjJ908AwCF1X9o3kwqDKFmk3wk23eArgWGwqZmYEJ2QjQoaurp4q6guwGwJO3V03k7AaggHfL%2BMX0b%2B5kH8C%2FrFM%2Bv%2Bxp8kAjtug0qKFGL2Ylqfclv3nUtp%2BY6U3Ov6ozZy1zQsTN4a4tYONVGXX%2FQzYD0XYnv%2BOyZuGQMmy7uPr3B%2F8hCrUdNNxJ%2Bj84oxnpDV5tvgo%2BF0X7AhzEdLAB0VOcpSkNbWg5s26bk9BRv6up12Xrv%2FlCAzvQ3RDeb%2FGkAJAzMOtX9UO9ivfT9Tkhu%2B%2BPcM9%2FDf%2BdzHdDQo7okSU1A%2FwmP7CMaqdo9PlWRCNtago3bAjh8jPOti1IcxuOA3lt9vw9bosQPKxD4zwgQuhk8GM4uqBJTjnesWWxu37rBnxZUbp%2Bx%2F4e2v%2FyT%2FIs13znqMJKPi8EGOqUBDX7ZKGHih3PYtgX2XNrJFNyo8lEmLFZc%2FLEUsyAuStAJ096FV1yYcapo1au5At7YVUp5pceD4ud%2B56gBq5%2F1Ykp2z9B%2BxnQ%2B11pbTyQGpK3bdBobLnkjaHp9XCs9ZYMTFLVV38dXRMfMsNa%2BJGP1xeqOGDRqUAkYVq0G0QPJNwsEqYPPQCTNhTqzxKF8zRq1IhnIg%2Bq7eD%2F3ejxrQSAUvBgNYh4N&X-Amz-Signature=791d0d4d0c1577af1750b7f24e8d1c246177ea95d824632cc3fe096e8d64344e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

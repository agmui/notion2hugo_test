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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IR2B7YM%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXNDfLc5U%2FG%2BpTTjW8VvY3X6NY9RlkCTefr5D907AdwgIhAOPSFLk%2BNO247%2F1bntdkulXb5Qka2Z8fLN9WiBpy2Dt6KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igys%2B8sj1MEHwlRMR74q3AN%2BlDiBy%2BUJvrm%2FheMXTLcP3Xt4qZkoVr5eGw0%2FoU8NN%2FLrrlGiCYF0J8Vgba%2FBKk97gf7ZlxqSZTJ4MMTiISWWv5xOyBkhqtOZwOz4fqeUsYBiWjT57uLsSZugP593wEKeAj5WAmZteV0H%2BXub3CJ09CyrfHBCml80KJh9zoIIoqBFWOgMecjgaaAk7KS8OEDq4cQ4VCr0ppha5W0MKLTNUtsm0ZxpvqkP1FlCdS0OFQfuwucElctWfaVrx7GUa75qTVf7ErimfHlaQOCmHr8M9TfPLIf6Smfy3hE7TEuC93kw6CkwkCZetkZgAx49NOnpllOuyF%2F1oVy71i74AwDuP368kC5ALJuvfCmrpot340BQkGJwE%2F6d7zvJ%2FTQdP3In9AbEWDeiGU7rDckjP3cBKtrBzDJScwq7U3%2Bzpips7V8Ek75SZvFQA%2FyfKu3WJKY8ys5QDoizA8hFwgmxx1u1HfKnJNvx9%2BffbJs0o63A%2FTAfz7SJTgWhSqN6jZDulRBlAGKRmfCP6YqQdsotm9HaI8qB0oNazbR2RmN3Bf8oIMu5keq9xiwdFToGKh2A3IVmuu16os%2B%2FK%2FP1ah%2Bn83AgiKZdiVlxHnAJ66je6%2B6G8W6f0dTsrL3emTVrGDDJ1LTDBjqkAfowvPzaRaLexYIhHWNDf8%2Fxsr2NtEVT0SWsiWIvJgHNaJl5%2FPjd8%2BNxACvd9fPGFh%2B56WxT4cVIojZB4cVhRkJpvAJFu71IdEXAsue7RuA8l3IZMBsTysUudqUA7aqom6xqw9uleBYb7gFFf7mkgaQ8yTXg5UtCYhGZrjHH6krFwV9iFdFCEW%2BdcvUg02VcR9N4DeUB1MIaZ8oi9Pvi9vOWM6jx&X-Amz-Signature=019240ca31ac4c2873f9ef339d6d74a7288bad8ea8e510e0452815eab41077d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IR2B7YM%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXNDfLc5U%2FG%2BpTTjW8VvY3X6NY9RlkCTefr5D907AdwgIhAOPSFLk%2BNO247%2F1bntdkulXb5Qka2Z8fLN9WiBpy2Dt6KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igys%2B8sj1MEHwlRMR74q3AN%2BlDiBy%2BUJvrm%2FheMXTLcP3Xt4qZkoVr5eGw0%2FoU8NN%2FLrrlGiCYF0J8Vgba%2FBKk97gf7ZlxqSZTJ4MMTiISWWv5xOyBkhqtOZwOz4fqeUsYBiWjT57uLsSZugP593wEKeAj5WAmZteV0H%2BXub3CJ09CyrfHBCml80KJh9zoIIoqBFWOgMecjgaaAk7KS8OEDq4cQ4VCr0ppha5W0MKLTNUtsm0ZxpvqkP1FlCdS0OFQfuwucElctWfaVrx7GUa75qTVf7ErimfHlaQOCmHr8M9TfPLIf6Smfy3hE7TEuC93kw6CkwkCZetkZgAx49NOnpllOuyF%2F1oVy71i74AwDuP368kC5ALJuvfCmrpot340BQkGJwE%2F6d7zvJ%2FTQdP3In9AbEWDeiGU7rDckjP3cBKtrBzDJScwq7U3%2Bzpips7V8Ek75SZvFQA%2FyfKu3WJKY8ys5QDoizA8hFwgmxx1u1HfKnJNvx9%2BffbJs0o63A%2FTAfz7SJTgWhSqN6jZDulRBlAGKRmfCP6YqQdsotm9HaI8qB0oNazbR2RmN3Bf8oIMu5keq9xiwdFToGKh2A3IVmuu16os%2B%2FK%2FP1ah%2Bn83AgiKZdiVlxHnAJ66je6%2B6G8W6f0dTsrL3emTVrGDDJ1LTDBjqkAfowvPzaRaLexYIhHWNDf8%2Fxsr2NtEVT0SWsiWIvJgHNaJl5%2FPjd8%2BNxACvd9fPGFh%2B56WxT4cVIojZB4cVhRkJpvAJFu71IdEXAsue7RuA8l3IZMBsTysUudqUA7aqom6xqw9uleBYb7gFFf7mkgaQ8yTXg5UtCYhGZrjHH6krFwV9iFdFCEW%2BdcvUg02VcR9N4DeUB1MIaZ8oi9Pvi9vOWM6jx&X-Amz-Signature=f3b72cd56f225c4fbb9dab6cbaad9d49ab932565e07a9e40c4a0715382ceaf43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IR2B7YM%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXNDfLc5U%2FG%2BpTTjW8VvY3X6NY9RlkCTefr5D907AdwgIhAOPSFLk%2BNO247%2F1bntdkulXb5Qka2Z8fLN9WiBpy2Dt6KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igys%2B8sj1MEHwlRMR74q3AN%2BlDiBy%2BUJvrm%2FheMXTLcP3Xt4qZkoVr5eGw0%2FoU8NN%2FLrrlGiCYF0J8Vgba%2FBKk97gf7ZlxqSZTJ4MMTiISWWv5xOyBkhqtOZwOz4fqeUsYBiWjT57uLsSZugP593wEKeAj5WAmZteV0H%2BXub3CJ09CyrfHBCml80KJh9zoIIoqBFWOgMecjgaaAk7KS8OEDq4cQ4VCr0ppha5W0MKLTNUtsm0ZxpvqkP1FlCdS0OFQfuwucElctWfaVrx7GUa75qTVf7ErimfHlaQOCmHr8M9TfPLIf6Smfy3hE7TEuC93kw6CkwkCZetkZgAx49NOnpllOuyF%2F1oVy71i74AwDuP368kC5ALJuvfCmrpot340BQkGJwE%2F6d7zvJ%2FTQdP3In9AbEWDeiGU7rDckjP3cBKtrBzDJScwq7U3%2Bzpips7V8Ek75SZvFQA%2FyfKu3WJKY8ys5QDoizA8hFwgmxx1u1HfKnJNvx9%2BffbJs0o63A%2FTAfz7SJTgWhSqN6jZDulRBlAGKRmfCP6YqQdsotm9HaI8qB0oNazbR2RmN3Bf8oIMu5keq9xiwdFToGKh2A3IVmuu16os%2B%2FK%2FP1ah%2Bn83AgiKZdiVlxHnAJ66je6%2B6G8W6f0dTsrL3emTVrGDDJ1LTDBjqkAfowvPzaRaLexYIhHWNDf8%2Fxsr2NtEVT0SWsiWIvJgHNaJl5%2FPjd8%2BNxACvd9fPGFh%2B56WxT4cVIojZB4cVhRkJpvAJFu71IdEXAsue7RuA8l3IZMBsTysUudqUA7aqom6xqw9uleBYb7gFFf7mkgaQ8yTXg5UtCYhGZrjHH6krFwV9iFdFCEW%2BdcvUg02VcR9N4DeUB1MIaZ8oi9Pvi9vOWM6jx&X-Amz-Signature=3130088b96e8da9b21a83094f8bb33b87ae52409382f19d7c03c9700af1d77b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2D5HLF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC46w4Cm2DKs9IPM7iVX7%2BY6w2U755gKQ29l32v0sZ13gIhAN7Vb0je3dw0fBV72OeMIa4gz2k%2BABdlEibIIBOkQmiJKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCLGLYHap7kSbzTiUq3ANKt0jya9TlJEOVchTf0bltyvY0dVbdzwQ4SVZEQ5dhR4UnEk94ntCzFIAPpeFdnItFzpKKsTfPx1GEstyYmH96fGk33vU4QECYA8IqvjFksUvmfSOnIrAC75LDZeFP5UHHrhgiMjsnalMsK6pThOXRWwZy%2B4SIAPjzDWryJLnpSr5RhzBRsOgn%2BYXYbHGI4tc1wGVmDvgIVx5TrR24fJ387T7FCfrtLRY%2FxCk9Nha4ZG4qdXR7aUDXP%2FzF8FkcIj502DeRlEYpd5XjSIzVD%2FgVm%2Fua0r6ic7fcNYu7UL9FrctEuhyn4dofWK4rO%2BZnZp6HwPODTyxyHl4FxytK5xwkCHgCWzd3VdnHOE9%2BXCee0YRbOP8sqUocU0%2Fa1RGfpFTlC9k3tb%2BD9lgSkGuAKsz0LvVfQJeCJBA%2FMKMF7AcG%2FcpRAcSzeLJX1HBAIDkHeGMicK6Yzcz87meqqbo8BW2v%2BKSJfUZX4%2Buw%2FNx%2B1ez24PS14YDI3BpaLObGnX6LDBfBSnBiNqKU0Hl0PbtJWQl2967BDGdpBkeOhYiQacXKx8t2L7fAa1PvTCTCrWiBxqYoGujtRvy9r2SW5uW9vRAEcWAVtBiKHlo%2Bzs0vWBSAqK2sACXKgXYfASwAzzCs1bTDBjqkARuYbRg1FCJsN7f81jrBwWZg1hGdjQD%2BfkY8FeACOf7iTTb9ZggvICm4HaYWIusTjOzm%2FFrWTJIKFRujztlGMLGZRJRrBcdij5792qvrURnPb2l1OI4p5tquhs%2B82lSSSo9bLrX68OzizBSHxOpUw%2BPUBlSSlglz4wfn6vkk%2F%2F%2B7j9ujUder11DZQ%2B2QCNqRIJVH0bjQwAV2Xm%2BnRpTqgJH3n9Cm&X-Amz-Signature=2010341cbbd35dfa3d3dfc394ca508ab6dec3a7baa03f4c78cc33015a1e604ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB6DKMHA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDPB9FpP2ScOk1q5Xk3nzYCWigBWny4E68NsS8XdDNsgIhAL%2FxbvgO3668v6RXZShX75B9oBF16QSmbWg2WKPsZiLqKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVEvx76cUOgx4OXtkq3ANqNRVsFAAex%2FJq1fINeJBK6N%2Bn07ZroxmkCNNvPcYHHKFs%2FcTqglQpsDAlX3B73vcpzcpT9TqO8%2BBG8GSYpEVEO8raCU2zlOjkOH5trUmjwjsXLdV7y5KYh73O%2B8EIinTnSGF56lrpy5%2BvZqF04h5QU12su83x2IESyzzBWRJ7VF2GY9O48L5ANymxVGE119TLEbWS%2F1ly41kg89xF9vvsLkc473JqSb9rKUS4etOktyOrKA5h%2FSZFsi536cOpf%2FY8z%2Bs3ItQJd%2By7J3PG%2Fm%2FSrM86QjksCajAzhJV59q3CW43mU441hLI0m7ocMRITw%2FyDf6JVVWxwDGtdJ%2Fj%2FYAdZQp3ZKl2qoybVNJnOjjcVe648fLxHXAtOKIZRh0l511SbQWNgR3svJZgeHpRONR4wHZQy0pjx4PoUonBFnm6SwWFiX2V7lxf2U37z%2BescLFM73fDsI%2BVZSKOyXeNiD0bZuCx00zfaGySOuAr1vxuWh5zIRlSYSZ26iiRPv4%2FoT9Oo1AIZgmjBMVtRRH%2BAhIFzGEArhasJ1I3RwVskZv1vikr6%2FPpg2gjDK%2B8iO0TI0R1OAOhQGEtRksWdPwJIs02kBgDNro7%2FrvmwfsJfolBddBY7jOxwX4WmEj0ZjDJ1LTDBjqkASsJcftIvPaVk0RRwzEGa1GQCPaaN0efQpAcSRYnNHCiz5RokhQjHqGgcCmj%2FJSPqijx%2Bb4ewGboO7i0rPh5Ai85MSBPNVMLhg9T3yWaZZbeMfxF4pD2wPs7T%2BkFdA92BI%2Fbi3bFwHgFVJuZSw3vrzvTwzf%2BPGdn7NlVPDCZrH8sykiUZVmpvM5UoHKYyKe54weUlnZz%2FOc5AFrNBdmECmJVigV8&X-Amz-Signature=4b63daaa196d073c994051dda1fa880fc5999cd931b63881655da54cb09d8f09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IR2B7YM%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXNDfLc5U%2FG%2BpTTjW8VvY3X6NY9RlkCTefr5D907AdwgIhAOPSFLk%2BNO247%2F1bntdkulXb5Qka2Z8fLN9WiBpy2Dt6KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igys%2B8sj1MEHwlRMR74q3AN%2BlDiBy%2BUJvrm%2FheMXTLcP3Xt4qZkoVr5eGw0%2FoU8NN%2FLrrlGiCYF0J8Vgba%2FBKk97gf7ZlxqSZTJ4MMTiISWWv5xOyBkhqtOZwOz4fqeUsYBiWjT57uLsSZugP593wEKeAj5WAmZteV0H%2BXub3CJ09CyrfHBCml80KJh9zoIIoqBFWOgMecjgaaAk7KS8OEDq4cQ4VCr0ppha5W0MKLTNUtsm0ZxpvqkP1FlCdS0OFQfuwucElctWfaVrx7GUa75qTVf7ErimfHlaQOCmHr8M9TfPLIf6Smfy3hE7TEuC93kw6CkwkCZetkZgAx49NOnpllOuyF%2F1oVy71i74AwDuP368kC5ALJuvfCmrpot340BQkGJwE%2F6d7zvJ%2FTQdP3In9AbEWDeiGU7rDckjP3cBKtrBzDJScwq7U3%2Bzpips7V8Ek75SZvFQA%2FyfKu3WJKY8ys5QDoizA8hFwgmxx1u1HfKnJNvx9%2BffbJs0o63A%2FTAfz7SJTgWhSqN6jZDulRBlAGKRmfCP6YqQdsotm9HaI8qB0oNazbR2RmN3Bf8oIMu5keq9xiwdFToGKh2A3IVmuu16os%2B%2FK%2FP1ah%2Bn83AgiKZdiVlxHnAJ66je6%2B6G8W6f0dTsrL3emTVrGDDJ1LTDBjqkAfowvPzaRaLexYIhHWNDf8%2Fxsr2NtEVT0SWsiWIvJgHNaJl5%2FPjd8%2BNxACvd9fPGFh%2B56WxT4cVIojZB4cVhRkJpvAJFu71IdEXAsue7RuA8l3IZMBsTysUudqUA7aqom6xqw9uleBYb7gFFf7mkgaQ8yTXg5UtCYhGZrjHH6krFwV9iFdFCEW%2BdcvUg02VcR9N4DeUB1MIaZ8oi9Pvi9vOWM6jx&X-Amz-Signature=0d5aaae835416a061094aa8927a6cb204c4c6dbcd74d7c267ea78ffe73509c1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

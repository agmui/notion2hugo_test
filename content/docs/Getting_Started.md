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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YPSCKMW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPX3n%2Br1mqM0dt3WZNoI86G0E664eSp5%2F77DPFY33y8QIgbgBY7%2FqZ2nnyc8B0BBLiNlmNxwW7xSRsxXu5LLEYwLwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPbaomIdwqx8lchG%2FyrcAzpxnKX3OPK1KanP6od7CAs4uCksP87gI0tZDQPg8GKTLAR1Wwc16OnZBozhuMDYhGLtTFi1l4TObDurbfCGopGa03DzxiAaPncipETHaLj6t6RdhTRVjZv1z%2BLZcLt6K6%2F9RWKI%2F9g%2BfO5JFuHOwcLAljJyf4rB6hAiW%2F%2FZcQvEeD%2B6jTYqDWnm1NVIT0lbehhOdbnBoYexqc63NwYuzLz96GnOKZSPaQ%2FWVWDtmv9Y27k8zh%2FhERYNLunzJ065ldtaKtwYIkhdVxaVr82buZYavpfVP5%2FMGgUAC2456SYjiWR3RVrLnvu1K%2FIc%2FSrCyaAK8XlacX5vb0UrYSf2fHwI8XlYaul8mJ5OYAWcs30%2FJXApi5ezxUejQWxaTcOknZ9Gha40Svwtkci4zCBs5TqeCo3z6vKvjxSjHKdYviWguicR3KAlAbKh%2FY%2Fg4N%2FWarubyCFGGK3pAe8uy2RymloJZutyAIsuz%2FqrQ5zAlMltl8DYZ7V8jprHdQlKKlZuhToBgxWAtVjsIr%2BYV%2FffigZ6gDm8%2Bv1FaWhV7tfqtxTcoY0YoYT%2FMPcXjspm23FLXNnAioggMVXPGt4O44fcEvy7TLPS3l%2F6gQdtikugb9zCIQBKX7a5XBQSRWGNMN2Q3sEGOqUB7l3JoZvdfNGPoRxLZwyKE5KPsUptRe4lewvuifB1pteVQRTuEhXTlN2kOn77ILizpGXWI3X72v8rEHztuTnGbw1aRI%2FBZUZd3KsYeSjDaUS53m2duRvcOOTxXUW6MEOiW1qxYzmg6vs8JRWZTdg2mXiVU43SSvunpvHEo8MSzI1QcHzofDgUwooTicpBTjs%2F%2BaCXPzITng2JNgXD9nK8M4Vlg5oD&X-Amz-Signature=55d7a586f51d198569e7e51baa59ecfdd139b155fda7ddc72f2f30ed6497119f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YPSCKMW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPX3n%2Br1mqM0dt3WZNoI86G0E664eSp5%2F77DPFY33y8QIgbgBY7%2FqZ2nnyc8B0BBLiNlmNxwW7xSRsxXu5LLEYwLwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPbaomIdwqx8lchG%2FyrcAzpxnKX3OPK1KanP6od7CAs4uCksP87gI0tZDQPg8GKTLAR1Wwc16OnZBozhuMDYhGLtTFi1l4TObDurbfCGopGa03DzxiAaPncipETHaLj6t6RdhTRVjZv1z%2BLZcLt6K6%2F9RWKI%2F9g%2BfO5JFuHOwcLAljJyf4rB6hAiW%2F%2FZcQvEeD%2B6jTYqDWnm1NVIT0lbehhOdbnBoYexqc63NwYuzLz96GnOKZSPaQ%2FWVWDtmv9Y27k8zh%2FhERYNLunzJ065ldtaKtwYIkhdVxaVr82buZYavpfVP5%2FMGgUAC2456SYjiWR3RVrLnvu1K%2FIc%2FSrCyaAK8XlacX5vb0UrYSf2fHwI8XlYaul8mJ5OYAWcs30%2FJXApi5ezxUejQWxaTcOknZ9Gha40Svwtkci4zCBs5TqeCo3z6vKvjxSjHKdYviWguicR3KAlAbKh%2FY%2Fg4N%2FWarubyCFGGK3pAe8uy2RymloJZutyAIsuz%2FqrQ5zAlMltl8DYZ7V8jprHdQlKKlZuhToBgxWAtVjsIr%2BYV%2FffigZ6gDm8%2Bv1FaWhV7tfqtxTcoY0YoYT%2FMPcXjspm23FLXNnAioggMVXPGt4O44fcEvy7TLPS3l%2F6gQdtikugb9zCIQBKX7a5XBQSRWGNMN2Q3sEGOqUB7l3JoZvdfNGPoRxLZwyKE5KPsUptRe4lewvuifB1pteVQRTuEhXTlN2kOn77ILizpGXWI3X72v8rEHztuTnGbw1aRI%2FBZUZd3KsYeSjDaUS53m2duRvcOOTxXUW6MEOiW1qxYzmg6vs8JRWZTdg2mXiVU43SSvunpvHEo8MSzI1QcHzofDgUwooTicpBTjs%2F%2BaCXPzITng2JNgXD9nK8M4Vlg5oD&X-Amz-Signature=de87ce1648ef36bd052b87bd540deef1d74f8ae8584544bfb5a9bfc761971e29&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YPSCKMW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPX3n%2Br1mqM0dt3WZNoI86G0E664eSp5%2F77DPFY33y8QIgbgBY7%2FqZ2nnyc8B0BBLiNlmNxwW7xSRsxXu5LLEYwLwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPbaomIdwqx8lchG%2FyrcAzpxnKX3OPK1KanP6od7CAs4uCksP87gI0tZDQPg8GKTLAR1Wwc16OnZBozhuMDYhGLtTFi1l4TObDurbfCGopGa03DzxiAaPncipETHaLj6t6RdhTRVjZv1z%2BLZcLt6K6%2F9RWKI%2F9g%2BfO5JFuHOwcLAljJyf4rB6hAiW%2F%2FZcQvEeD%2B6jTYqDWnm1NVIT0lbehhOdbnBoYexqc63NwYuzLz96GnOKZSPaQ%2FWVWDtmv9Y27k8zh%2FhERYNLunzJ065ldtaKtwYIkhdVxaVr82buZYavpfVP5%2FMGgUAC2456SYjiWR3RVrLnvu1K%2FIc%2FSrCyaAK8XlacX5vb0UrYSf2fHwI8XlYaul8mJ5OYAWcs30%2FJXApi5ezxUejQWxaTcOknZ9Gha40Svwtkci4zCBs5TqeCo3z6vKvjxSjHKdYviWguicR3KAlAbKh%2FY%2Fg4N%2FWarubyCFGGK3pAe8uy2RymloJZutyAIsuz%2FqrQ5zAlMltl8DYZ7V8jprHdQlKKlZuhToBgxWAtVjsIr%2BYV%2FffigZ6gDm8%2Bv1FaWhV7tfqtxTcoY0YoYT%2FMPcXjspm23FLXNnAioggMVXPGt4O44fcEvy7TLPS3l%2F6gQdtikugb9zCIQBKX7a5XBQSRWGNMN2Q3sEGOqUB7l3JoZvdfNGPoRxLZwyKE5KPsUptRe4lewvuifB1pteVQRTuEhXTlN2kOn77ILizpGXWI3X72v8rEHztuTnGbw1aRI%2FBZUZd3KsYeSjDaUS53m2duRvcOOTxXUW6MEOiW1qxYzmg6vs8JRWZTdg2mXiVU43SSvunpvHEo8MSzI1QcHzofDgUwooTicpBTjs%2F%2BaCXPzITng2JNgXD9nK8M4Vlg5oD&X-Amz-Signature=d8c09e4f848b604e2a744ace0464df9c8810dc012c47a667e46e2f0d5f0d1a75&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TICBHY5%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID095kJXlGXfBVrna46DepfQKE%2BFTxDwBRQabhYSoojJAiEAu9qnjYHGlRjSQ6zysEJ4duSaW4PuvCr3IF0TQGDZO1Uq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFUn%2Fm8qaMi9KjRVeircA2k1X61IvlQJUOiO8uCDNHY0GPnHowt%2F9L5FTtIm4re8cj9iqXIdc3%2BlOan5nWwGdGleGR%2B40KTBo4W%2BHeCDNE5llGrc2UA11bhKdb2DdGMaOpM%2FQYNNONBgZZwhOiE7PR5nwlvROQ3qBx4dK4X%2BN0XOuHp8y6WVHyAov5o5FOnqPzQfnq9VxWojv%2BOVBeuyzI%2BWiofdPzFH%2FGwYjZu4nM7Q2bq8GutrampcJu00%2FG%2FA2N4iPR3PTWEXTYn62EkaC8gxtapDj3uYfvhGQSSCE5f3UAOw%2BOn1pZtxbSmYUXkeF2kGixEJFGPCRTZv3ILEGO0UDqqZn%2BT%2FSajRBGDb4xn0EnOO0YvhyW7AzTMoS7fStcUyxdotkr08wqTMxTc%2BMSZ85i1v42fXZHAU8BcHLIMICsmXKKpF3BjcGQ%2Bsd7qqMW20YplgKdFfyf2bdZl2uBSG6K%2BycCAqEchIZevJtCgAjdD8e2fS0AHn3AgWWIGssC%2Bq4SKpPq0PCRnqLh3dyxMFQLn4GGQqTQG6mx0HuOwoPwFK%2FeUC9%2BRk4qDo9bCfVk9gCWeiNHmMKfK5VgB5ji2SQAzK8Zs03LuTkaLu3BtfbZ8fOFVqH9yIfUc%2BwmHOZjs8UmhNYxD3bi8NMMqQ3sEGOqUBgT%2Bwvz8oSKgcOvK0SojrP8E99ZPLKyMUsM72e5imBxfNthUj0KAlWRYfW30oEoF0mJwdkKu8PwBp8Fal6OL7pU6bX81Am6%2BLwEuGu%2Fh3xaOUCwvh%2By33TWzieWqp4mHK91Q2EHURYZLof8SHI4NOPG2QR6e%2FZjXZdwlyABlkYooVMNavLO4uVXH4HzSEFVkP0Ak0Lwiivj2vDUva3SgvhphgYfOc&X-Amz-Signature=f5e991b7f51e84e1020060b6439841b05b4e845577facc95530470311ea190b9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XF4ZZNN%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBER575avudqaqROUCt5aUcLt9%2B8K%2FAIynr3cW%2FBNWtsAiEA8S8C77%2BxaWhn6gxIWBz0BonHaHKI%2FWYNrCnkZ4l8sckq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDGsuU4CiQhVJCz9TASrcAy7cLzEseIpIicFjVM7I8sQ9DXz%2FRxQeL1Qrb1yXWGuVkBCZFNZE7VT1j1PvYzCVhc8SwRB6Ty8dNIzo9i%2FFjPys7avwKCls0M3PtDZdOwE6aYAWy1x278L0Pk%2BpTNqJw37Mnl5ky4d9UfoL5LdpgBilex%2FpwZGgaAQxSwwpmoVAZFy1e4QQhXgB0pdfOvta8a6WoPSUpZuHI0rgm2fn3PIgjDKM9paVv0k9MefXlC3qh0JTqXV2kRt4RsDWb0FTG3fIJVkFel68b%2Fe%2FIWy41uRUQpBYZ8N9L4PKN4IoCoU7hlL6s%2FOb%2FVzfFyvy8hqNPoiZZ7CwfHe4LcTsQEok19kWG7lx2xfLRTlPyVfQvh1Q8mn4h6iX278OPQfus%2F2PPjh8LCBEozUa7Mivfh4lB2qN6Mz1wfSpoR6%2BRIVSbtNgsMYaCvEZWW290cWItqtwj6BnAFrx6%2Bcaum%2BWpk6%2BLHWkBiNdcY30sQqD%2FtqMcXo2MzaNNiC8bc%2BwVBMWlZL3dt2iyzFZdbluMdW8uKlcC%2BKH0uvdA7OxzXy4CzxapvJXLyaZ4tu%2FolVSHqmxA1k%2Fev7YDExNE8cXJPBd0pp8SKQJrLDoaTuyApKAaD9c4IaTTWT%2F%2BF5Xdv7GjH92MIOR3sEGOqUBlOtQgyLnIg6bp0XTySvvHfbHszm5C9d2MQe8swB5Uzccca8hZ25%2B2Xgj70aTISrPFkgOMjJX%2BcaKjLQbt4cmCLWlDNRAOfc%2Ftqm1cfAdmDgYBvTp%2FDYrB7DcP5PSLfxL6ZOSU6Qe%2FxEWUFNUCv9LpBteJ6kuY6hS31pei7rMcoysRzJgAx0AFxVZQak53mcyiJHCYmV7sWXhASp12nC9sEvguLHb&X-Amz-Signature=bf06f2453ce7652c4bfff18bfb7cbbb559287ef7dd8c6856760b034859334213&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YPSCKMW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPX3n%2Br1mqM0dt3WZNoI86G0E664eSp5%2F77DPFY33y8QIgbgBY7%2FqZ2nnyc8B0BBLiNlmNxwW7xSRsxXu5LLEYwLwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPbaomIdwqx8lchG%2FyrcAzpxnKX3OPK1KanP6od7CAs4uCksP87gI0tZDQPg8GKTLAR1Wwc16OnZBozhuMDYhGLtTFi1l4TObDurbfCGopGa03DzxiAaPncipETHaLj6t6RdhTRVjZv1z%2BLZcLt6K6%2F9RWKI%2F9g%2BfO5JFuHOwcLAljJyf4rB6hAiW%2F%2FZcQvEeD%2B6jTYqDWnm1NVIT0lbehhOdbnBoYexqc63NwYuzLz96GnOKZSPaQ%2FWVWDtmv9Y27k8zh%2FhERYNLunzJ065ldtaKtwYIkhdVxaVr82buZYavpfVP5%2FMGgUAC2456SYjiWR3RVrLnvu1K%2FIc%2FSrCyaAK8XlacX5vb0UrYSf2fHwI8XlYaul8mJ5OYAWcs30%2FJXApi5ezxUejQWxaTcOknZ9Gha40Svwtkci4zCBs5TqeCo3z6vKvjxSjHKdYviWguicR3KAlAbKh%2FY%2Fg4N%2FWarubyCFGGK3pAe8uy2RymloJZutyAIsuz%2FqrQ5zAlMltl8DYZ7V8jprHdQlKKlZuhToBgxWAtVjsIr%2BYV%2FffigZ6gDm8%2Bv1FaWhV7tfqtxTcoY0YoYT%2FMPcXjspm23FLXNnAioggMVXPGt4O44fcEvy7TLPS3l%2F6gQdtikugb9zCIQBKX7a5XBQSRWGNMN2Q3sEGOqUB7l3JoZvdfNGPoRxLZwyKE5KPsUptRe4lewvuifB1pteVQRTuEhXTlN2kOn77ILizpGXWI3X72v8rEHztuTnGbw1aRI%2FBZUZd3KsYeSjDaUS53m2duRvcOOTxXUW6MEOiW1qxYzmg6vs8JRWZTdg2mXiVU43SSvunpvHEo8MSzI1QcHzofDgUwooTicpBTjs%2F%2BaCXPzITng2JNgXD9nK8M4Vlg5oD&X-Amz-Signature=b057f0f862d087c27a07941d4e5deb5752ad5aa3138c498eb36d8a94cfc66fc7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

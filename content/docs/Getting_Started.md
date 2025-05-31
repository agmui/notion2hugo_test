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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7EI73UU%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlT29e76Ezw%2FhAbNKtF%2BTWvkaDdwjBphlCd5W%2B%2B6LoRAiEAnJ%2BJKIJrmaCgWonXZX06%2FkUKWjEF8EE9uZwv52x41m8qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsNPUeNGaNFH4fzzCrcAxW0fnYujblPyOp5mx1mJ04%2B4iLfQP0coJKxVIpniso2DaYCpv8WkylPFkt4acHmuNwcH%2FYu0ViSEsZ16BcFhhXO26SG4qz5ovBozv9J1edqUJXDYNBLudr7tHVWM8d%2F6OC8vdfgeADkpwbW6fHGvU9rNcFvI8qdv1lnJYMOZDnUFZr1AHu4FsmSSsDISdoxkBdrbMsxmQfAkpBB%2B29L82f91pDtspNSDOb0EIcbexS74QbN0MEA20WGkKd9Ffrfgo%2FtkAgFE0bCIsgMRM5%2FZ0kEmuvZrANplJ5GERJPsUj3zOn5dEVrGFPlMO0mDJA%2BUrxKRC5ehJ9IKNwA6XmmtSt86mPnqRWMT6mtl9VXrQA7Elbi9kZQ9KPi3iTsowf9WIDkyxzdU0LcOAy17d8MI%2BqWBVIFBYP%2BAAYmIt0o5vJV%2F9ZE5fcxUuko5H%2BLT5FumKTiSfRSLB1SIVn1ZdPiCC0Kjn77wfp6L8SpUo2w%2B5TtK4GL0hSp0%2BZaUlezflQSnyYCExz1K9cSc3sErwddGjQFnPuX0aFbiOa4gvhdvW%2B6mBzG9AuxHcXfrVS8rWqC6xIfbx96PMbjni3Wvr9ECKVYrfKmGStT69MHe9kveqF1gPzEKkLrtTrTbsJIMNKD68EGOqUBxLTUPJYW4M0tHU3ggMEtu5zr8JiOUU%2FbBxmpBer53KLjihpbxl6mqvZtI5JjtDzcvclzapnnR3Vz2cmEAhjo3jpjP0Hage%2FNBfLhLkwG3gFlXHkBDhw6wDa9TAW0uKCWItpRBnmoz8%2F9PHAkbvGenJAo9XlpGPTxe7iWjFc%2F7izqoeJfdP8GTY7yvfSR%2BJNsA0P6S15xoTpPbGPr1wye%2FOoJgygq&X-Amz-Signature=15618d83a0576a366c5c1709d0f37f40a7e05f12483866fa937342e4e61828fd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7EI73UU%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlT29e76Ezw%2FhAbNKtF%2BTWvkaDdwjBphlCd5W%2B%2B6LoRAiEAnJ%2BJKIJrmaCgWonXZX06%2FkUKWjEF8EE9uZwv52x41m8qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsNPUeNGaNFH4fzzCrcAxW0fnYujblPyOp5mx1mJ04%2B4iLfQP0coJKxVIpniso2DaYCpv8WkylPFkt4acHmuNwcH%2FYu0ViSEsZ16BcFhhXO26SG4qz5ovBozv9J1edqUJXDYNBLudr7tHVWM8d%2F6OC8vdfgeADkpwbW6fHGvU9rNcFvI8qdv1lnJYMOZDnUFZr1AHu4FsmSSsDISdoxkBdrbMsxmQfAkpBB%2B29L82f91pDtspNSDOb0EIcbexS74QbN0MEA20WGkKd9Ffrfgo%2FtkAgFE0bCIsgMRM5%2FZ0kEmuvZrANplJ5GERJPsUj3zOn5dEVrGFPlMO0mDJA%2BUrxKRC5ehJ9IKNwA6XmmtSt86mPnqRWMT6mtl9VXrQA7Elbi9kZQ9KPi3iTsowf9WIDkyxzdU0LcOAy17d8MI%2BqWBVIFBYP%2BAAYmIt0o5vJV%2F9ZE5fcxUuko5H%2BLT5FumKTiSfRSLB1SIVn1ZdPiCC0Kjn77wfp6L8SpUo2w%2B5TtK4GL0hSp0%2BZaUlezflQSnyYCExz1K9cSc3sErwddGjQFnPuX0aFbiOa4gvhdvW%2B6mBzG9AuxHcXfrVS8rWqC6xIfbx96PMbjni3Wvr9ECKVYrfKmGStT69MHe9kveqF1gPzEKkLrtTrTbsJIMNKD68EGOqUBxLTUPJYW4M0tHU3ggMEtu5zr8JiOUU%2FbBxmpBer53KLjihpbxl6mqvZtI5JjtDzcvclzapnnR3Vz2cmEAhjo3jpjP0Hage%2FNBfLhLkwG3gFlXHkBDhw6wDa9TAW0uKCWItpRBnmoz8%2F9PHAkbvGenJAo9XlpGPTxe7iWjFc%2F7izqoeJfdP8GTY7yvfSR%2BJNsA0P6S15xoTpPbGPr1wye%2FOoJgygq&X-Amz-Signature=70fcd3ff2659673e57255e87cf5a3b28f048939ceab464336b8521fdbec12c28&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7EI73UU%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlT29e76Ezw%2FhAbNKtF%2BTWvkaDdwjBphlCd5W%2B%2B6LoRAiEAnJ%2BJKIJrmaCgWonXZX06%2FkUKWjEF8EE9uZwv52x41m8qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsNPUeNGaNFH4fzzCrcAxW0fnYujblPyOp5mx1mJ04%2B4iLfQP0coJKxVIpniso2DaYCpv8WkylPFkt4acHmuNwcH%2FYu0ViSEsZ16BcFhhXO26SG4qz5ovBozv9J1edqUJXDYNBLudr7tHVWM8d%2F6OC8vdfgeADkpwbW6fHGvU9rNcFvI8qdv1lnJYMOZDnUFZr1AHu4FsmSSsDISdoxkBdrbMsxmQfAkpBB%2B29L82f91pDtspNSDOb0EIcbexS74QbN0MEA20WGkKd9Ffrfgo%2FtkAgFE0bCIsgMRM5%2FZ0kEmuvZrANplJ5GERJPsUj3zOn5dEVrGFPlMO0mDJA%2BUrxKRC5ehJ9IKNwA6XmmtSt86mPnqRWMT6mtl9VXrQA7Elbi9kZQ9KPi3iTsowf9WIDkyxzdU0LcOAy17d8MI%2BqWBVIFBYP%2BAAYmIt0o5vJV%2F9ZE5fcxUuko5H%2BLT5FumKTiSfRSLB1SIVn1ZdPiCC0Kjn77wfp6L8SpUo2w%2B5TtK4GL0hSp0%2BZaUlezflQSnyYCExz1K9cSc3sErwddGjQFnPuX0aFbiOa4gvhdvW%2B6mBzG9AuxHcXfrVS8rWqC6xIfbx96PMbjni3Wvr9ECKVYrfKmGStT69MHe9kveqF1gPzEKkLrtTrTbsJIMNKD68EGOqUBxLTUPJYW4M0tHU3ggMEtu5zr8JiOUU%2FbBxmpBer53KLjihpbxl6mqvZtI5JjtDzcvclzapnnR3Vz2cmEAhjo3jpjP0Hage%2FNBfLhLkwG3gFlXHkBDhw6wDa9TAW0uKCWItpRBnmoz8%2F9PHAkbvGenJAo9XlpGPTxe7iWjFc%2F7izqoeJfdP8GTY7yvfSR%2BJNsA0P6S15xoTpPbGPr1wye%2FOoJgygq&X-Amz-Signature=e6911eb7d7c14c05fe108ca409c4808966990895b3c1a834d0a95976c3df1695&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC7JQZ7S%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6qesGgQaqWP9I3XA1BjdGS%2FbQESgcYLJap2FditwoyAiEAiG1Zw%2B94TtYEYzIw1funq0qfo8dmWwtxHxDrY0BWZjIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyBH2GoNqOc%2FLGGfSrcA1RNgT3%2F1hT330DbUu263%2F81G906He%2BtCBjy568VvpXbTkeBbyK1JIx9AyFwq193YDBvrj2hI%2FcjijFXzfcvKxJwJCbztEzVa7cvodO5Kmbdkj3d9S%2BS9zuxoiXNJl3vqDqsH4dktThJstAv2I24h0JVYgrxQY2%2FXby0mT0mVW7KBrbn5og34l20CPGwMGIHW%2FcDenwhUBR5IqY8tN16%2BwkbFDtewCX5%2BGk07pv7Acqc%2FIe1%2FHKHSY8I6LKLZ3skSyhc%2BOdE%2FPdztuprUaEEGENei2Vph9kTTDFVsaEW2xN%2Bm65KllNY13e3aPVCG69Saq1FB1jcSltaAu2zqUF4km4jaRBb78KIFmYxR%2FuySG9ULYpMy3%2BxxbNp8XqJfkyOaqPy%2BF53jSXzIjG6GEeZfKQf8SeMQzWMylVwBQXBOXmwsgSScOpFSD4cjiC4pNM61p7QVBLbmEb8HL8LleqGs9pm4QvOPufkxAatIW35VpOyoG35NHUtLxjlA%2B7XapUPZ%2FTzeJljIGWoyLcX1D5aQrfDalSAtPzhjoGzIRQ6vbuHfv2dx8tmufQFA%2BFh4piFuzaxz5N5tQZHH8ENq6vwW%2BNGSKbTdg%2Fl%2BhDYPjnwVC9m5tjYe24HIO9argyHMOOD68EGOqUBIp8TWQZfLewXwUO83InSpj3NF9TBVhk%2Fj2jF7SCu79%2BxrxhMX7azw6ETLShyw6zlTO59kKCBLTvGE0qKkbVL%2BqP8nfhVP07Cu%2FbXLAAUhksDkF3sRQY1nMfspyUBKkYZnr51oJ8H%2FSw%2FCIbfNJC1zmnjSoyDBy%2Fe%2BgYDY6Ej4o7XxfXDWKsktg5rOW0%2Bt7YtSEe%2BWei4DFlAWZKLv3zNHKUlVktA&X-Amz-Signature=00f8fd2a68a5497504d7783a9f4d6744d4ed40ec8c1ef2bd3a262683ecbcb1c9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTQ743GH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHxxxbnnL6r0zUgymErBKy6ykTcaGK7yoWyD6Gy%2FbwHgIgCDOium6UQAQ2fAQjvanJjiwHsTS7iRpvpMwK4OMVIFoqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHb7QCac9s7%2FDgDp%2ByrcA47B%2B9aj1NNDVFCYbsoWGH810jcTYgxh%2B4KylPL8RSzs0ueyjjUwPMVacoV%2FqPaYPNgocykukMfdRcY9jgfQTAZfwKuJ57BAQRX%2FmxfMnpHJ91hcst%2F5TQRyDMiZ4JurFSjWOyDH8%2FyIBtqmkJKcV9h9p3x3xwYY5iXnTYyw39RvckqS9PAsWBOR0ihzMbdFQdfCZWlGLzqIEBwJ0709iGJ81BSsCUJUtJfh2mPGnzDwc%2FgzhrFeW3CJim%2F7C3yS14EZB1L10YRSODbkgTK35be%2FJehD1DrTp257yig5YDz%2BsXf6B%2FXtdl9GFAYLOpkHk1sGD5HPfgXG00QRH7MhEr66PxOv9TJ1bN5HbANG0iwMZMh%2BY8Ei5wefg1q%2F6PlC1A7ZGaQaNWMgrzuPp%2BazVYjkYMwdnF2Nkwx5FhxQ0HQ8QZOYeHs9Y8bp0pUYMVy9C4EpiA2Ik6niZK5X%2FjPg7qVP3YUuHfgfDc%2FwvatWHud4e0N3vMkEU4rb5bnGxywKor3ieE7rVh2mEv%2FBg2bffobrtUUWFgxObklRQRRNX%2Br2dzRkf8nm1bIdYflHuQgFsSq0MyfO0TEmrIDVPy2Tz5nh0b0bNmSdXIv4wqUmBVCxV9POjLnXGgYhMUBaMLSj68EGOqUBy1QtrfRlgMoNLwEpCGBFzPjHgtxwtnPYp%2FOdtZFUuNayNH1TZu0bLgvn1SJzjbZigVCPWRjjWY9jwVc7hn0OnuCSxn6Ahx5VkAx38Y%2BlZBqEY1HMyqLTW%2BKxkHSSHTjJb8I%2Fdnxzx%2BtQcqwMsSzAxfOdzf4fbWeE9nxlNNwDaETK%2Bv4f3HaepgO8AQCVmxy8gy77tIOInz2u4mPwYH83ybpRcVm8&X-Amz-Signature=257a30014c7939008a428bf16bd5df9889b7939a7d24dc416049492bdd662ee0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7EI73UU%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlT29e76Ezw%2FhAbNKtF%2BTWvkaDdwjBphlCd5W%2B%2B6LoRAiEAnJ%2BJKIJrmaCgWonXZX06%2FkUKWjEF8EE9uZwv52x41m8qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsNPUeNGaNFH4fzzCrcAxW0fnYujblPyOp5mx1mJ04%2B4iLfQP0coJKxVIpniso2DaYCpv8WkylPFkt4acHmuNwcH%2FYu0ViSEsZ16BcFhhXO26SG4qz5ovBozv9J1edqUJXDYNBLudr7tHVWM8d%2F6OC8vdfgeADkpwbW6fHGvU9rNcFvI8qdv1lnJYMOZDnUFZr1AHu4FsmSSsDISdoxkBdrbMsxmQfAkpBB%2B29L82f91pDtspNSDOb0EIcbexS74QbN0MEA20WGkKd9Ffrfgo%2FtkAgFE0bCIsgMRM5%2FZ0kEmuvZrANplJ5GERJPsUj3zOn5dEVrGFPlMO0mDJA%2BUrxKRC5ehJ9IKNwA6XmmtSt86mPnqRWMT6mtl9VXrQA7Elbi9kZQ9KPi3iTsowf9WIDkyxzdU0LcOAy17d8MI%2BqWBVIFBYP%2BAAYmIt0o5vJV%2F9ZE5fcxUuko5H%2BLT5FumKTiSfRSLB1SIVn1ZdPiCC0Kjn77wfp6L8SpUo2w%2B5TtK4GL0hSp0%2BZaUlezflQSnyYCExz1K9cSc3sErwddGjQFnPuX0aFbiOa4gvhdvW%2B6mBzG9AuxHcXfrVS8rWqC6xIfbx96PMbjni3Wvr9ECKVYrfKmGStT69MHe9kveqF1gPzEKkLrtTrTbsJIMNKD68EGOqUBxLTUPJYW4M0tHU3ggMEtu5zr8JiOUU%2FbBxmpBer53KLjihpbxl6mqvZtI5JjtDzcvclzapnnR3Vz2cmEAhjo3jpjP0Hage%2FNBfLhLkwG3gFlXHkBDhw6wDa9TAW0uKCWItpRBnmoz8%2F9PHAkbvGenJAo9XlpGPTxe7iWjFc%2F7izqoeJfdP8GTY7yvfSR%2BJNsA0P6S15xoTpPbGPr1wye%2FOoJgygq&X-Amz-Signature=73ae7bddfcd9a01906ccd5acdbdec51c2b91e0d9d282c4ff3e7e206371752bf6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

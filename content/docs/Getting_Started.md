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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R6PXEF3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDG442lWMt9j959FV5eiB7HAkUU6zhRJXQ8ufU9AfTgDAiAuhuttm1IhEkLAf3fjf7EFPjv07gNTgOsJy7jqCTFKLCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx%2BYdFenko12ejBugKtwDUCSd2P5lbbI%2FbwHEz2RodqDk6%2FTSxUOGRV841h0zaXdJEv80qg8QiR0ZuK6egIEmVrtqZAb1YhWN1QFo%2BbpzpaOrppgoPt7wWJU1LHR7%2B1eh5l3RX3ZmcgoO1c9QM3tsJEryCJlN6ha9787jmFCfoRiOCFCNWnpnuyEAHaLfX6AKZYVly1Wa9JJ1KOITZwHjEvjRqNXT74rJwAmr7Tii14ewV1ANuOWthKZK1q2y3KLJGg%2Fk%2BoVK%2Fja22%2FE6DLSr%2BT0G%2FAR%2BUAD7Ew%2FqU6aXqRvhgEQ3j2e0ztuB0UGz1b%2BGu41WxSAr%2B6VCRKSXf2cSODUwmNHTRoMtZbMy9YUth57A507hsyjuFab4TrS2ynTJAXuM1S5qGNe2e8IqNlBjnj9I758VgfIbqrAsKs18HO4oyRcscTY67ycjFCXuHFyjOuy2OSJP0kWlKbQ0Cy02SWEXNCCGSMbBt1oTBCuafjB0giwCtHowuVDvzc4Fg7EGUp3JUJCfC6zYm86KlPRIn680WxlRaObiWyMj5Gx3k%2FTtJ5yV0BW%2FAEMP7cojwN96aSb1R1py3xcYOHlh4DCu3CO6EIeu0pjrB7hGm805N2eHy%2B4iIHKh73%2F36vDNndoHugKtQ%2FbqD8PghD8w0NnLvgY6pgFt%2FGgVJzwoevbMM%2F4QUP%2FfVZkuHqctm26WpU4SdCyI8vVDacL1yvdPHHakOnCktnjgNomeT4%2BRFjb1ybXGOygPiR0fjWtg9KeCydT6Mqby25mSXT04hxrIqmZW%2BgNismWMu6ov1trqsG6zEEWHvdpb6UZ620UvAia1k5zWyeLhvA6pn8W06iogckXKFdY26zvVno0GHptK2CJ74enP6wjmcgnICxXA&X-Amz-Signature=7ed110140c5bac42943d47a5600d82d2f1a824cdc5a8e2c47b70962a1e532898&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R6PXEF3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDG442lWMt9j959FV5eiB7HAkUU6zhRJXQ8ufU9AfTgDAiAuhuttm1IhEkLAf3fjf7EFPjv07gNTgOsJy7jqCTFKLCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx%2BYdFenko12ejBugKtwDUCSd2P5lbbI%2FbwHEz2RodqDk6%2FTSxUOGRV841h0zaXdJEv80qg8QiR0ZuK6egIEmVrtqZAb1YhWN1QFo%2BbpzpaOrppgoPt7wWJU1LHR7%2B1eh5l3RX3ZmcgoO1c9QM3tsJEryCJlN6ha9787jmFCfoRiOCFCNWnpnuyEAHaLfX6AKZYVly1Wa9JJ1KOITZwHjEvjRqNXT74rJwAmr7Tii14ewV1ANuOWthKZK1q2y3KLJGg%2Fk%2BoVK%2Fja22%2FE6DLSr%2BT0G%2FAR%2BUAD7Ew%2FqU6aXqRvhgEQ3j2e0ztuB0UGz1b%2BGu41WxSAr%2B6VCRKSXf2cSODUwmNHTRoMtZbMy9YUth57A507hsyjuFab4TrS2ynTJAXuM1S5qGNe2e8IqNlBjnj9I758VgfIbqrAsKs18HO4oyRcscTY67ycjFCXuHFyjOuy2OSJP0kWlKbQ0Cy02SWEXNCCGSMbBt1oTBCuafjB0giwCtHowuVDvzc4Fg7EGUp3JUJCfC6zYm86KlPRIn680WxlRaObiWyMj5Gx3k%2FTtJ5yV0BW%2FAEMP7cojwN96aSb1R1py3xcYOHlh4DCu3CO6EIeu0pjrB7hGm805N2eHy%2B4iIHKh73%2F36vDNndoHugKtQ%2FbqD8PghD8w0NnLvgY6pgFt%2FGgVJzwoevbMM%2F4QUP%2FfVZkuHqctm26WpU4SdCyI8vVDacL1yvdPHHakOnCktnjgNomeT4%2BRFjb1ybXGOygPiR0fjWtg9KeCydT6Mqby25mSXT04hxrIqmZW%2BgNismWMu6ov1trqsG6zEEWHvdpb6UZ620UvAia1k5zWyeLhvA6pn8W06iogckXKFdY26zvVno0GHptK2CJ74enP6wjmcgnICxXA&X-Amz-Signature=d30e2c1edd966243e3af260d2dda35afb088f52e1fbcbc2f062480f3da84ca91&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MO4TCGO%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmwjFp4f2W0iqlTZRLDahJsj14EOTSXEzcHlU01q3qcAiEAl6J9RgXEB7p3JvgCvR8xvCTCwodV7mdozhQdayI79scqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjZCIRjudV7x%2FS5gSrcA%2FHafpHFIcAmDSZ0pwn4nPtJ1Qv6bJY2RalfFadu%2FEcO2OK9POYIUMHiM8ylv8DEyYG7VEzLrO3YY0dKUzJEGFm%2BdZvNz8UUPT%2FV5%2FK861BDMG28yPRTNy5PJo8NqAdFuWY2%2FKTZqvuybk0yQ%2Bs1cWm7Nv0OsEHXP6FuNpaYVC0vIps4UAVMa7%2FpZS3iIJ6uca6LlEkxNSgAOHJIzOGJgeKHOtQEgbb%2FnaJ6BDKrW9LzJocrdK0Xx8VRfRtwY6ADBmsf1uaM9R5fGMU59rCZ20GYkRIz%2BL9tnIjbA9Qu5Nh%2BM2c1YZ3FcOT5%2BmLfgiF57dEipXP70Q%2Btw6R553USBWu%2F1KBRKh00sPwVLSMbcjzVhMCU6MpKn59Fb%2Fw5p5Zjqn8xM%2FkR5pbEkHtqUllzVeujJ57pGhHwNbv5dSZ%2FUMxe4u%2BMvtVT51oI1xFO3Rqtw2F0%2BKJKfrAqXLs2udEUmw6rMq0E%2Fr7Vib43DTFAxE3Ldvg1dEeqoGRINw28Nm11aj6%2Bd1eLzL9R4eSHu95JslgxmOVguTFaZ%2BwwYkNZpeaZ1AChj%2FIyH9Rhk8EgPw0joiarMCRtt1RP%2FWKEF8Mnz2706KlqNyOWn1cw5U8QIseAoeNNH937volPNSi9MKzay74GOqUBJTmSIuVufs9f%2FOumlCZ5PL4gg8TXiTS6I6xddhPDwdFHQLYl2M6Z7XMB%2FEFv8k8FazvQ6AzHe%2FWxdZ0dweo7IyM7GveJfoylHNxWZmhFrxMf7fXYUTf9ktwdL6LfxyinOLUcsdAcYCAFlZn93dyWe0OkR6xswmCK9MtERzW8naohKrWb6LbdDVt5bTB%2B7JYtKt8GA0iqTtTvgcZeRDguaT2XbCQO&X-Amz-Signature=5187ee0dd953671269e9783a4ba686029c58148ee346fed33314b344c3b14409&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS5O2NSY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwPx%2B3NADXWFidjHAHFEUOHRAcPDABdhqqE%2Bk23g0kmAiEA%2FQTvQOMuUFaqEBXb6%2BCVZ3AYJK6xxnwo9DldNHnJrEQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtMgNGNWvsHp1HwDircA2kaja0%2FnEDULFd6hwMnecaOvWuu1skb581S4tsUpYQhqt6ZJN%2FJAsDB%2BbnumPo%2BrT5G9cWxJQMwBrXnlnFMUjm2SALRyJhD91Ovx3Lc%2FriADjU%2BHjuLhVS2CaaRUBNx1zwiJxw2Ymei4Qk1FaljKtoVo%2B%2FkVM8mygB8lLDgSa5IIt0WUbEvtY1zQ2FvGl3gKS0v6QIx8A47jIa9KFBNWzCoeCFBHQKVMwCGSMb2cyzOVwLXRYXBE%2FLFxwQ3cTgktHzwCZDWrkGjywxuhS%2BmMO7kCAzsNXyhe1tdP%2FNQcwZAHb3tV6ObUFb54dEB7SjuZPt4EFxrF0mHH%2BM1v0dekwngUkgpGwh33tLOJ2N%2B9uOJuGTrk8M8LOazmAehyqo7vGBtGVndqHY5rXOZut2mZ8utVshGaii7DTfeBu0kKCrBJNjat7MMKFs3wI5LxX%2B6lJaLALCnorC9m8wlIWOoawC2XxMwacxrr9CS2rZyvKZaEJ8bFDGgcjqRGpRxfeo9YD39pKs5E7jTI1yCBtETbGfD%2Fk2plTe%2B1oJpwLkSdEiZEtX95ukiwnOXK%2FyQNEkY%2FgPB8eyuiU9E%2FDsI9iAbm%2FLphLPD43VsOtd1WcMpG%2FNyU%2FgG14Wq88WSsCnOMIzay74GOqUBtRSvmF2BNfv52kpbC0cNut3VJJoSx%2FrauJ%2BzRSMaIqIj70%2FKzQsy%2F2AiM2q6iUEf6XDV8y93D0TKoaH5OqzWZ2epBtchWLw00VKwwDAJcKRpD8mIHIIVx7Ddto9g38to3gf0X1ZB8fI1GAf5JbJPI4Jz4bfZtsfEy1%2FOpD8PJrCY25u1VXQLqhPwlVQmF7cOmzQ16195yCcO7ujmlU9mY9r6WfSF&X-Amz-Signature=37cf7e7ff0ab588f4af42dd30bb796c5429c648a77454e4fb4c8c1e5af21ab48&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R6PXEF3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDG442lWMt9j959FV5eiB7HAkUU6zhRJXQ8ufU9AfTgDAiAuhuttm1IhEkLAf3fjf7EFPjv07gNTgOsJy7jqCTFKLCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx%2BYdFenko12ejBugKtwDUCSd2P5lbbI%2FbwHEz2RodqDk6%2FTSxUOGRV841h0zaXdJEv80qg8QiR0ZuK6egIEmVrtqZAb1YhWN1QFo%2BbpzpaOrppgoPt7wWJU1LHR7%2B1eh5l3RX3ZmcgoO1c9QM3tsJEryCJlN6ha9787jmFCfoRiOCFCNWnpnuyEAHaLfX6AKZYVly1Wa9JJ1KOITZwHjEvjRqNXT74rJwAmr7Tii14ewV1ANuOWthKZK1q2y3KLJGg%2Fk%2BoVK%2Fja22%2FE6DLSr%2BT0G%2FAR%2BUAD7Ew%2FqU6aXqRvhgEQ3j2e0ztuB0UGz1b%2BGu41WxSAr%2B6VCRKSXf2cSODUwmNHTRoMtZbMy9YUth57A507hsyjuFab4TrS2ynTJAXuM1S5qGNe2e8IqNlBjnj9I758VgfIbqrAsKs18HO4oyRcscTY67ycjFCXuHFyjOuy2OSJP0kWlKbQ0Cy02SWEXNCCGSMbBt1oTBCuafjB0giwCtHowuVDvzc4Fg7EGUp3JUJCfC6zYm86KlPRIn680WxlRaObiWyMj5Gx3k%2FTtJ5yV0BW%2FAEMP7cojwN96aSb1R1py3xcYOHlh4DCu3CO6EIeu0pjrB7hGm805N2eHy%2B4iIHKh73%2F36vDNndoHugKtQ%2FbqD8PghD8w0NnLvgY6pgFt%2FGgVJzwoevbMM%2F4QUP%2FfVZkuHqctm26WpU4SdCyI8vVDacL1yvdPHHakOnCktnjgNomeT4%2BRFjb1ybXGOygPiR0fjWtg9KeCydT6Mqby25mSXT04hxrIqmZW%2BgNismWMu6ov1trqsG6zEEWHvdpb6UZ620UvAia1k5zWyeLhvA6pn8W06iogckXKFdY26zvVno0GHptK2CJ74enP6wjmcgnICxXA&X-Amz-Signature=07eeebf8127d6d23e979f14dd4455ca7510203bcfdd0a558b2e8fb77c4ec7bce&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667BO65YM%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJqygjlFJuLWvn2G91bwrZ5U2Zg6lkYe3FUBoUiSG1mAIhAJjztnUA55%2BQi%2BKj3jKUC%2F%2FkuF%2FcsyPVz%2FOPFi%2FZow11KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyne6g%2F3A0sEsWfPU8q3ANLkrmSeuIULnbR8gCRiEcOEobraKJ3z%2B4QkH3Uo4QZQZgMBsuHMNcfgxZkpM8Muke%2BxfRLMgTvFlc2HPs3PVCYYvqgHDRFQx9kXxO6uMtsKMzEW4ufFiT%2FzHHfJfmJGIQX1RSUJKJw7yHOF2foqaEV5Ol8P3D9Hx9X1cbsO%2Fqfd7Gwww2Qy48DNIeRXBLAZo%2BIKkyN%2BXvJFcmMh5y9KCRUT37kvOZOGPT6%2FjM39ROx7yaBMsnnWYA4uOfu4sEph2TAlFLblqsIo47hCcs0Fn%2FOzQLMQmqv891%2BcVXU%2BbdnM1K8U6GtsRYe%2BevalNPBz9termRNkE3rJ9p7pxene6xNidJQaFNCdeGKCrTrCgM1HUtXh9vTqOLBqoMnhfr958Bfh7SKLdMzaiLyzwMw1l1U8Wva%2FhumiFYrcyJPr%2FlZo6qWIiOh0DPYYzzYY1XXfdinDinovQ43NY%2BEp%2FWJ4520F089zj%2FpI1ZCrbswua5avxo%2FUbm0inX8fvCE1QQyubH4wOf7KOD3iOaS44XJqRGt4sXMfVejU3IBSiD64sRlXcJ6a08%2BLbMh0k85uYfbbFhsN%2FwJshV5GoXhTNSzN0Yi%2FZ1U%2F36D1iFtQy8fEVFz62bW2cyYc6XboLgxCjCu%2B8vCBjqkAZT2Wz319wzTtbmYiTW8l8voGuRGEoTJAtxXyOWkt6Flgpg%2FHDbJSzBUqxcRjbfXKIjpxCs1tukAhcglT%2Ba5brx4d0CaRBHWC6jq52hMx3haQULlGFkpiTZx6cRnaVVvALWJD%2Bci4moPUFILx5uNmOEwkaecONvFXhUCmC3IF%2Fwbytl54T7Bive5q5Oaby6HoSN162RvkhNiKE53lREsHXeJA50L&X-Amz-Signature=86220616456be6901f681f7613644cc874019e34f030a240ceab446adeef7e5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667BO65YM%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJqygjlFJuLWvn2G91bwrZ5U2Zg6lkYe3FUBoUiSG1mAIhAJjztnUA55%2BQi%2BKj3jKUC%2F%2FkuF%2FcsyPVz%2FOPFi%2FZow11KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyne6g%2F3A0sEsWfPU8q3ANLkrmSeuIULnbR8gCRiEcOEobraKJ3z%2B4QkH3Uo4QZQZgMBsuHMNcfgxZkpM8Muke%2BxfRLMgTvFlc2HPs3PVCYYvqgHDRFQx9kXxO6uMtsKMzEW4ufFiT%2FzHHfJfmJGIQX1RSUJKJw7yHOF2foqaEV5Ol8P3D9Hx9X1cbsO%2Fqfd7Gwww2Qy48DNIeRXBLAZo%2BIKkyN%2BXvJFcmMh5y9KCRUT37kvOZOGPT6%2FjM39ROx7yaBMsnnWYA4uOfu4sEph2TAlFLblqsIo47hCcs0Fn%2FOzQLMQmqv891%2BcVXU%2BbdnM1K8U6GtsRYe%2BevalNPBz9termRNkE3rJ9p7pxene6xNidJQaFNCdeGKCrTrCgM1HUtXh9vTqOLBqoMnhfr958Bfh7SKLdMzaiLyzwMw1l1U8Wva%2FhumiFYrcyJPr%2FlZo6qWIiOh0DPYYzzYY1XXfdinDinovQ43NY%2BEp%2FWJ4520F089zj%2FpI1ZCrbswua5avxo%2FUbm0inX8fvCE1QQyubH4wOf7KOD3iOaS44XJqRGt4sXMfVejU3IBSiD64sRlXcJ6a08%2BLbMh0k85uYfbbFhsN%2FwJshV5GoXhTNSzN0Yi%2FZ1U%2F36D1iFtQy8fEVFz62bW2cyYc6XboLgxCjCu%2B8vCBjqkAZT2Wz319wzTtbmYiTW8l8voGuRGEoTJAtxXyOWkt6Flgpg%2FHDbJSzBUqxcRjbfXKIjpxCs1tukAhcglT%2Ba5brx4d0CaRBHWC6jq52hMx3haQULlGFkpiTZx6cRnaVVvALWJD%2Bci4moPUFILx5uNmOEwkaecONvFXhUCmC3IF%2Fwbytl54T7Bive5q5Oaby6HoSN162RvkhNiKE53lREsHXeJA50L&X-Amz-Signature=c7155adb47723ac7c01d4410ee4f806a285b378845539ba0a8a6c2155ca93b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667BO65YM%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJqygjlFJuLWvn2G91bwrZ5U2Zg6lkYe3FUBoUiSG1mAIhAJjztnUA55%2BQi%2BKj3jKUC%2F%2FkuF%2FcsyPVz%2FOPFi%2FZow11KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyne6g%2F3A0sEsWfPU8q3ANLkrmSeuIULnbR8gCRiEcOEobraKJ3z%2B4QkH3Uo4QZQZgMBsuHMNcfgxZkpM8Muke%2BxfRLMgTvFlc2HPs3PVCYYvqgHDRFQx9kXxO6uMtsKMzEW4ufFiT%2FzHHfJfmJGIQX1RSUJKJw7yHOF2foqaEV5Ol8P3D9Hx9X1cbsO%2Fqfd7Gwww2Qy48DNIeRXBLAZo%2BIKkyN%2BXvJFcmMh5y9KCRUT37kvOZOGPT6%2FjM39ROx7yaBMsnnWYA4uOfu4sEph2TAlFLblqsIo47hCcs0Fn%2FOzQLMQmqv891%2BcVXU%2BbdnM1K8U6GtsRYe%2BevalNPBz9termRNkE3rJ9p7pxene6xNidJQaFNCdeGKCrTrCgM1HUtXh9vTqOLBqoMnhfr958Bfh7SKLdMzaiLyzwMw1l1U8Wva%2FhumiFYrcyJPr%2FlZo6qWIiOh0DPYYzzYY1XXfdinDinovQ43NY%2BEp%2FWJ4520F089zj%2FpI1ZCrbswua5avxo%2FUbm0inX8fvCE1QQyubH4wOf7KOD3iOaS44XJqRGt4sXMfVejU3IBSiD64sRlXcJ6a08%2BLbMh0k85uYfbbFhsN%2FwJshV5GoXhTNSzN0Yi%2FZ1U%2F36D1iFtQy8fEVFz62bW2cyYc6XboLgxCjCu%2B8vCBjqkAZT2Wz319wzTtbmYiTW8l8voGuRGEoTJAtxXyOWkt6Flgpg%2FHDbJSzBUqxcRjbfXKIjpxCs1tukAhcglT%2Ba5brx4d0CaRBHWC6jq52hMx3haQULlGFkpiTZx6cRnaVVvALWJD%2Bci4moPUFILx5uNmOEwkaecONvFXhUCmC3IF%2Fwbytl54T7Bive5q5Oaby6HoSN162RvkhNiKE53lREsHXeJA50L&X-Amz-Signature=1c8fd402e4994081da73cff59f65da8fabef7e68ec1bd9ec7ff45ed0b9a31be9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655FMF2HC%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B6VpPgcda%2FCJAgUHtEfEtE55i0Tf%2Blkd3Lf2VNBcYQgIhAP0XNQqGyzuxfrHZYFjkU2Q8Tml5txPAgLqFmq2wCdfUKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiMvCW3Ig9MgWfqOYq3ANeZIjrJGFNjtPrUKz9yjv16%2BBci8XfVgQTYf1SYWiDqIfYhK4uJQg6PSMrqJg64utLSUDqFpabKyyZwGjPMaxUEJ3Wb1dpLGfp4G9il5gKg8fmoqoiF5XOxEvoRpRRht1Ze3VLCCZ8R7jUawpzd231F7Nl1MoC%2BMDgak3%2FiDVnDnBwliDXb4DuhuIjY03Jf3jP0lNJEeP%2FGiet23KIe1JGxGRBc6bSNSq4zRx5zPW%2Fr%2F3zw9vxPJDdZ7PhWxmCAWrDPqlUi6pkRxZnq0W64NOVh7yEzpb41DtH5jsaPFrzzI3tmeqIZ6sZe246bblCbhb6%2B2f%2BT5Bh7TIbw5GUYMTsr%2FjP5X7j5QvCqrcbw3cGVpjodUUQ%2BUD6Fmvb%2F6re%2B38wx0eCqfi%2F17mDciwMFgJcTsB0%2F1WsbD7ztd3QQR9Q9P1BpYMRLi1z9Z24eeywC6sJIAoPGkCSmJ4vrRCMl3VrHq6OqSE9d83t6tBecIIxyg8b7ZhlJ613i1WzVV0FNbKu1pJm1LVuYLbE2x3hJ84e1kiKFToFOiK48gp4GPYCT2TCNqS81WC%2BVCJU4Q5U7j0I3Pha1v1mhIfkMHpXdUn%2BEAD4q5pPn37g9fiZ7WUN18GA31V8BVBPzTrBTzCxhczCBjqkAWlCKNQRNb5FLU4vAmOKBmM78khHw%2BpUGyqjxq0sP%2Bb3F2CoDIbsyPURv9pKLszPfzs8JM%2F2fVrKkoxFMFPC8PqRJ6L13NH%2B3aTd4jToNDGoWSAE3dB7VADCEFqx2IxTat6bDehwUvN8jNqDDf4L0tkQ1QlwDJJYPAmSUUBeg0L2QG%2F6zkulAF9riz58eL4AesD%2F4HHF1jI8F1JvaNzF%2F9ZoV9CQ&X-Amz-Signature=150f57f4ea472b3524f552f52b7490c05abdb1471d4f30e82d2d388eeca0e097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IS2H55O%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdaFG4yI5457OtrFFHgGe%2BwBTKrS4hnm2ma8YL1vfFUwIhAI13fNLrDKqJh1w0wq5%2BvdGgzbXinsc8bEdQSpoGANyOKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsIU4NLBPUJdR3izoq3ANDnjhlN%2F0pDh1lIytlzFtS%2BxPWZl8jpBx%2B1szdBFSfzcVMxkMdEvXdyqFrFy6%2FFkL3Rgq6%2Fug%2FfUiv9GGY9ATBSBqiJUh%2Bb2fkFUK42vnZ34cytAs19u1D0a%2BijmzZpF1jup1sjEcxoDDOBSdNyqwKaI28asKDPEa8DulJSPCAXyRTOLeLU5%2BSjnvERrTKW7mylV3TUFC8eQ6EMGpXwP7usbUQvTsGfNbV3xMlOWLYn2Cw%2BFcGYboZCUJssKl64T4I4hYiu4O8yJZs8MJzmHymv5sV1lY77aGPTx0q4h%2Fx8jniq5xlxGPIIPd%2FNiAPdzN3S2uM3E7B0MiZb8Z1y07Ir3gvuHcH080d9Cp7MJ2wFvGrUJrVZcFniSJ6uXz1wCQkr6%2BCN7J2UKOSpR97Ov%2FXNN%2B2Clc5ukLzXzHAYq2oguPjEMoyLOAMIsvsoJu4088dIdNNDY8wIR0onv5RcXcR6Y2ZkC67e6xOnotfmgS7cu2Teii9PpQiWiRe5ezUFa1dwW%2FG0gwMZNV1nc70Fuy%2BQc7sZl1fIQQjfxPKOy5o%2F1qq7qIcw9sBG8pJy9imb04e%2B0noKfpargeNaHHYayLLiJcDg%2FzGb%2Bcpa2vMOO5RW2b2XBrg8tnVCxyz%2FzC2%2B8vCBjqkAZoVtlRRGh6%2BpBXJ3kF6Xff%2FiilXA8eHQzj86UQA3f2Kam2kN0buNIObQ6bib9EOhi6SXWEeI8aU15KsNUowjK%2BI7Vbmw3fpEFl0130YTe0a5UydETpaYPZZ8dFgCqoxQz4d7mnBAiXFg658NXu8sFiXr50evSNRjKPJp%2BrRhETXdB34iJhz9J59LU2gpH%2BDhPNLK1zw%2F8lpZcXQwrCE2lvRQ8Kb&X-Amz-Signature=48ac0ccf72d673dbbee0f522b546d17d374004028548c5fbed0a09ce06bf28b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667BO65YM%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJqygjlFJuLWvn2G91bwrZ5U2Zg6lkYe3FUBoUiSG1mAIhAJjztnUA55%2BQi%2BKj3jKUC%2F%2FkuF%2FcsyPVz%2FOPFi%2FZow11KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyne6g%2F3A0sEsWfPU8q3ANLkrmSeuIULnbR8gCRiEcOEobraKJ3z%2B4QkH3Uo4QZQZgMBsuHMNcfgxZkpM8Muke%2BxfRLMgTvFlc2HPs3PVCYYvqgHDRFQx9kXxO6uMtsKMzEW4ufFiT%2FzHHfJfmJGIQX1RSUJKJw7yHOF2foqaEV5Ol8P3D9Hx9X1cbsO%2Fqfd7Gwww2Qy48DNIeRXBLAZo%2BIKkyN%2BXvJFcmMh5y9KCRUT37kvOZOGPT6%2FjM39ROx7yaBMsnnWYA4uOfu4sEph2TAlFLblqsIo47hCcs0Fn%2FOzQLMQmqv891%2BcVXU%2BbdnM1K8U6GtsRYe%2BevalNPBz9termRNkE3rJ9p7pxene6xNidJQaFNCdeGKCrTrCgM1HUtXh9vTqOLBqoMnhfr958Bfh7SKLdMzaiLyzwMw1l1U8Wva%2FhumiFYrcyJPr%2FlZo6qWIiOh0DPYYzzYY1XXfdinDinovQ43NY%2BEp%2FWJ4520F089zj%2FpI1ZCrbswua5avxo%2FUbm0inX8fvCE1QQyubH4wOf7KOD3iOaS44XJqRGt4sXMfVejU3IBSiD64sRlXcJ6a08%2BLbMh0k85uYfbbFhsN%2FwJshV5GoXhTNSzN0Yi%2FZ1U%2F36D1iFtQy8fEVFz62bW2cyYc6XboLgxCjCu%2B8vCBjqkAZT2Wz319wzTtbmYiTW8l8voGuRGEoTJAtxXyOWkt6Flgpg%2FHDbJSzBUqxcRjbfXKIjpxCs1tukAhcglT%2Ba5brx4d0CaRBHWC6jq52hMx3haQULlGFkpiTZx6cRnaVVvALWJD%2Bci4moPUFILx5uNmOEwkaecONvFXhUCmC3IF%2Fwbytl54T7Bive5q5Oaby6HoSN162RvkhNiKE53lREsHXeJA50L&X-Amz-Signature=421c1e0dfa5afa472ecf33d5f9c43cf7d7876f1cbee06011eba8dd883a58aafa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

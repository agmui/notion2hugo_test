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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCG2XUNW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrZsHgISbe%2Ba%2BpWq2RjxewFh0tw%2BhbD9PHzxcFvtHw3wIgWl0By2AYu7dxOuTSQAM9Lsj%2FHIIY%2Fv%2BF6qEwRU43ONcqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCi%2FQ2n2cho1XF3PoSrcA4BI42NdChfo0Pj7bzqptB13%2BxYLXUE%2BvQuTohWvj0DtKydliijMUbULdqiX1MlVUGdzL%2Bj5NGmP12fXDWH%2FcArfTQDaPROt9FegKv6JDFPZVTstxSO9tAjXFVFh%2FJvcXvULTmKxDOxf4OMOi7NynXlGyUFsEXQRJMLWp6HFjB0fQaIrfuNZBcxumViyZrzNOAkrPB6xJ82HB1VOwae3lSqdaFFJ3Ge%2F8tloZZXYGRh3%2B6CHSAxxbq9eHMRGOC4RzUCgkJDHJSujor4DI7wPAnNsXQrpA9sqPaPjPFRkPZzL6De4ZCYldRM3pQn64J1D2xZtUqigjdcvbGp14Ct2mmIU%2B4l2qtLoix77YJ5QpxC5p%2BClDkTr0Yb0VKAkZwosJk6UuyWe4HnmywLEj8bANB8Kewj3luYheL0lZZM%2FmhbFsGYApWR0hNBd9cFQZXJ7BjKy9LEfP%2Bt9R7saVf3oG56fRh6sOXZEM5Fabk79dEbNxWDFl7D%2FaWPisVkIUteUJn%2ForH5eKYTGljSB%2FYUkDWRbwhxJDBGfVZG7A4CGyk49drjfjOliejyTSoNvGsSuSDj%2B%2BresiYrNQmOm56TpD6Cl7QEOlLHIJwULSZn31k4jPhiAbu61xDnMXHfeMLqw3MIGOqUBkq6o%2FLeCnTgb3pcD8SQntusJv088C7KOoAKXz5coMx7DQnEFjvUdI%2FgSBsQh2LBLG%2BVtRkBViwqjtTB8O4KXlcDSuDHLw3Ygv3hXdFpimmLS8Zj6ZGZfOyUZ33R9s4q8Y7rKaw5pdPmU4eA3fPIfF7fXU4IhMlTSJUTfTtOhJpASc2d4m34QxCwFv84RYqJ4rr1dyUiwOkiIO6UeZm02uRPGTSJg&X-Amz-Signature=1782e739bea4c826762db0d305a3166072584e5b9c7dfe309c20de3a841cfad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCG2XUNW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrZsHgISbe%2Ba%2BpWq2RjxewFh0tw%2BhbD9PHzxcFvtHw3wIgWl0By2AYu7dxOuTSQAM9Lsj%2FHIIY%2Fv%2BF6qEwRU43ONcqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCi%2FQ2n2cho1XF3PoSrcA4BI42NdChfo0Pj7bzqptB13%2BxYLXUE%2BvQuTohWvj0DtKydliijMUbULdqiX1MlVUGdzL%2Bj5NGmP12fXDWH%2FcArfTQDaPROt9FegKv6JDFPZVTstxSO9tAjXFVFh%2FJvcXvULTmKxDOxf4OMOi7NynXlGyUFsEXQRJMLWp6HFjB0fQaIrfuNZBcxumViyZrzNOAkrPB6xJ82HB1VOwae3lSqdaFFJ3Ge%2F8tloZZXYGRh3%2B6CHSAxxbq9eHMRGOC4RzUCgkJDHJSujor4DI7wPAnNsXQrpA9sqPaPjPFRkPZzL6De4ZCYldRM3pQn64J1D2xZtUqigjdcvbGp14Ct2mmIU%2B4l2qtLoix77YJ5QpxC5p%2BClDkTr0Yb0VKAkZwosJk6UuyWe4HnmywLEj8bANB8Kewj3luYheL0lZZM%2FmhbFsGYApWR0hNBd9cFQZXJ7BjKy9LEfP%2Bt9R7saVf3oG56fRh6sOXZEM5Fabk79dEbNxWDFl7D%2FaWPisVkIUteUJn%2ForH5eKYTGljSB%2FYUkDWRbwhxJDBGfVZG7A4CGyk49drjfjOliejyTSoNvGsSuSDj%2B%2BresiYrNQmOm56TpD6Cl7QEOlLHIJwULSZn31k4jPhiAbu61xDnMXHfeMLqw3MIGOqUBkq6o%2FLeCnTgb3pcD8SQntusJv088C7KOoAKXz5coMx7DQnEFjvUdI%2FgSBsQh2LBLG%2BVtRkBViwqjtTB8O4KXlcDSuDHLw3Ygv3hXdFpimmLS8Zj6ZGZfOyUZ33R9s4q8Y7rKaw5pdPmU4eA3fPIfF7fXU4IhMlTSJUTfTtOhJpASc2d4m34QxCwFv84RYqJ4rr1dyUiwOkiIO6UeZm02uRPGTSJg&X-Amz-Signature=09c356b2adfb3bee25259851bf597e735dc9492e3bc56d95c1d170449ad4bf52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCG2XUNW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrZsHgISbe%2Ba%2BpWq2RjxewFh0tw%2BhbD9PHzxcFvtHw3wIgWl0By2AYu7dxOuTSQAM9Lsj%2FHIIY%2Fv%2BF6qEwRU43ONcqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCi%2FQ2n2cho1XF3PoSrcA4BI42NdChfo0Pj7bzqptB13%2BxYLXUE%2BvQuTohWvj0DtKydliijMUbULdqiX1MlVUGdzL%2Bj5NGmP12fXDWH%2FcArfTQDaPROt9FegKv6JDFPZVTstxSO9tAjXFVFh%2FJvcXvULTmKxDOxf4OMOi7NynXlGyUFsEXQRJMLWp6HFjB0fQaIrfuNZBcxumViyZrzNOAkrPB6xJ82HB1VOwae3lSqdaFFJ3Ge%2F8tloZZXYGRh3%2B6CHSAxxbq9eHMRGOC4RzUCgkJDHJSujor4DI7wPAnNsXQrpA9sqPaPjPFRkPZzL6De4ZCYldRM3pQn64J1D2xZtUqigjdcvbGp14Ct2mmIU%2B4l2qtLoix77YJ5QpxC5p%2BClDkTr0Yb0VKAkZwosJk6UuyWe4HnmywLEj8bANB8Kewj3luYheL0lZZM%2FmhbFsGYApWR0hNBd9cFQZXJ7BjKy9LEfP%2Bt9R7saVf3oG56fRh6sOXZEM5Fabk79dEbNxWDFl7D%2FaWPisVkIUteUJn%2ForH5eKYTGljSB%2FYUkDWRbwhxJDBGfVZG7A4CGyk49drjfjOliejyTSoNvGsSuSDj%2B%2BresiYrNQmOm56TpD6Cl7QEOlLHIJwULSZn31k4jPhiAbu61xDnMXHfeMLqw3MIGOqUBkq6o%2FLeCnTgb3pcD8SQntusJv088C7KOoAKXz5coMx7DQnEFjvUdI%2FgSBsQh2LBLG%2BVtRkBViwqjtTB8O4KXlcDSuDHLw3Ygv3hXdFpimmLS8Zj6ZGZfOyUZ33R9s4q8Y7rKaw5pdPmU4eA3fPIfF7fXU4IhMlTSJUTfTtOhJpASc2d4m34QxCwFv84RYqJ4rr1dyUiwOkiIO6UeZm02uRPGTSJg&X-Amz-Signature=7bf60ea6fa20cc6afc55343fafa257ea5de40986982bc648db550fbed4cc873d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3WZJV6L%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaYKU%2B6EbDuNCJILS3DGRJxFsVd1U4Hf2CBq%2FScJc1aQIhAKptzW64szhGhNQpSxfbv0kvWJM%2Ftzupl0Qg%2BvjWykc2KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNDkaDm2mef3M6oooq3AN5q1%2F5qkqwspYQFYBipe5qydO9TVMWPlZ5Mme15iMjzbW9NMoh7mRO3C2vdnXxRNItvFZ89PCZ99dYJ7GFmqBWOFOoPnqSbAuoFHYkR8EpTUobfnsxX39XLhCR2P%2FYq6LEJ8RFBRSXjxQPV%2B310E%2BVyrtWiR77lXU2BsAVvjFdSEi07EiF8tx8C8rnBhOG%2BEy7otKfsSg5tgv51%2BgG5v3DykP2%2B9NSELa3D5Hrelwll7u00Z2g3yTcngIudGVRgiJ%2B0pm%2BhlGo9l8%2F%2Bt2pIv9G3uwGx2c3WJo12Z3g8Bq3uHeRXLl9u8mHiFApCrTyfNmCYCIZkSCtXK1SDj%2FYY5n9oa6jfLOYmcYtUukZB8aBk27TFdYkQVIGjRASBGtAsaAca7OdMJuxaSNXi%2B1NEpelsME%2B%2BM5jLjz%2FcLMbhCujDCpcm0L%2BroDQTYMsOMxZzOmj5i5AaXbWZaZUpBJclHxCr9mOr9TicQODrv%2BYgUDDSkml66xrsufLjUSLYhB80oLkftVTOAjdYTVEw9WJ8RjcwFpkRYggBIwINbO5q8V4fj%2FsfVbzP6gN%2FCa9E11k2Vmc%2FLz%2BB2xBg5xLcJ3VN5AAnfN6hubutR79BaQN0b6biopwYDLXmn%2BjXpw6tTCPqtzCBjqkAWrX8bL5Z%2BoeaC2dCezG6Lmll8kq5qWzGf8D3uIoNJd0yoKFUqQToXRt9nNNkT9UTBQJEREMjZrIVh%2F9540StkLY3ZCrL%2FYw%2F7tjd97ML4l8zGPS0pe3ta0l09udiLASIhQoscnsZnu0i6EkzAzyQ1y9rsgoLvTd8p6VL0t9f0KROflMUByCOc82KPMp4rj2%2BRf28UZhe3xiV%2Fi56aQaBbKFOytG&X-Amz-Signature=401afd4c85da60f02e1e723a36996fb97e64265d48d08653f4f714434d96178c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627Y3UVX5%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMtchhtmvF53%2FRgDkaq0iDoyOiCxvt%2FeYBzXbfXEpH1AiBYEAhQixMJlt93ZGCqE286vlnnYkaZ9cXSypoWY83zLiqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWM0L7zfhPPRPGBC%2BKtwDDLa9IqgYANnmnBaPfORSWFffCpnqNUXGr6c%2BjxMDgkibP7hqK%2BgnyeORvaEiZ30O4PmzgZBn%2B2kJMZt%2BP0S%2FnCTplwKP6b4cWTGxE%2BaWQvvBBLg95bM2%2FeAtIUTEOJ5OVU%2BsP1l7ULGO0oO3QOFA86PEjXxIVxPIr8ICFDNaTP0x%2BExvQJl3kdo5RG9QN%2BrgXghlFq24KztHZmGRif4A7piRYM1%2Br75D3Y762EXjP4L6TpP%2F7r5iOeHn4zF9gglcyxw68qW4QotIYlXYEjHCXN7vFCful6HFfEgzk9XjWNCcA63eYMtn4Xz2nQV5l5CbCARMpwo8jK50TykbVThMntZR8LkLbd8qbPUPGQj7Cc4QGMLuEmX2oeYEZ4ZX2DRxkzrtzuHYXH4uvwnQiBdEYOmMctBa3Ldnmcf5Y%2FZMItlyqbgjYYhcr8Mct0LlnDFiTDQf1SCFOQ065WT8k%2BG4TNZEXtizcSkJ9sTsFEGjQhHsDBvqu8PonqICGqLtJnqgjjp8f7rU4PdyBCbHC7Hph0F2y3A%2F6vR4wf6o4gwMC5OKc65X3eXfvVb0PHWc2KhUn4Hs3bY8eFQUhVR95G05KHyeaWkCvBUBUlJqZjEfdj2e6sHvT1Hw6Efh5m8w7LTcwgY6pgEFCNiHv9nejWjUi%2FQeWpIrHycjkNLzL7iVZlm9CFBUVs3UjFzTEzQjbF%2B%2BfikVvURk8M11KD9Vjsa%2FcZCMGGVhE7jlcqO6f%2F4JbsppnxwjAV5wn%2Fo063QkKwDhkvTm1Ojv59xj3IrNDZMWcO8b%2BgL3qEoMnaPXFgAF7SVsq6WffPZvPmRybNR7Xpr0n2nbkzXkIvlLuqnydoNRcrYSIKXBRPtTpOjX&X-Amz-Signature=3066d7a7d4548bce13f56c76ae54e4218cd9afc487e5f39a09e4fc51e86260c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCG2XUNW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrZsHgISbe%2Ba%2BpWq2RjxewFh0tw%2BhbD9PHzxcFvtHw3wIgWl0By2AYu7dxOuTSQAM9Lsj%2FHIIY%2Fv%2BF6qEwRU43ONcqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCi%2FQ2n2cho1XF3PoSrcA4BI42NdChfo0Pj7bzqptB13%2BxYLXUE%2BvQuTohWvj0DtKydliijMUbULdqiX1MlVUGdzL%2Bj5NGmP12fXDWH%2FcArfTQDaPROt9FegKv6JDFPZVTstxSO9tAjXFVFh%2FJvcXvULTmKxDOxf4OMOi7NynXlGyUFsEXQRJMLWp6HFjB0fQaIrfuNZBcxumViyZrzNOAkrPB6xJ82HB1VOwae3lSqdaFFJ3Ge%2F8tloZZXYGRh3%2B6CHSAxxbq9eHMRGOC4RzUCgkJDHJSujor4DI7wPAnNsXQrpA9sqPaPjPFRkPZzL6De4ZCYldRM3pQn64J1D2xZtUqigjdcvbGp14Ct2mmIU%2B4l2qtLoix77YJ5QpxC5p%2BClDkTr0Yb0VKAkZwosJk6UuyWe4HnmywLEj8bANB8Kewj3luYheL0lZZM%2FmhbFsGYApWR0hNBd9cFQZXJ7BjKy9LEfP%2Bt9R7saVf3oG56fRh6sOXZEM5Fabk79dEbNxWDFl7D%2FaWPisVkIUteUJn%2ForH5eKYTGljSB%2FYUkDWRbwhxJDBGfVZG7A4CGyk49drjfjOliejyTSoNvGsSuSDj%2B%2BresiYrNQmOm56TpD6Cl7QEOlLHIJwULSZn31k4jPhiAbu61xDnMXHfeMLqw3MIGOqUBkq6o%2FLeCnTgb3pcD8SQntusJv088C7KOoAKXz5coMx7DQnEFjvUdI%2FgSBsQh2LBLG%2BVtRkBViwqjtTB8O4KXlcDSuDHLw3Ygv3hXdFpimmLS8Zj6ZGZfOyUZ33R9s4q8Y7rKaw5pdPmU4eA3fPIfF7fXU4IhMlTSJUTfTtOhJpASc2d4m34QxCwFv84RYqJ4rr1dyUiwOkiIO6UeZm02uRPGTSJg&X-Amz-Signature=dbc6c1e2f419fe996918c5eb6fe13ee6b890027e9f45779a555d9c94729bb873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

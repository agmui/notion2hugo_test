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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BQ4IKVE%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdWAIf%2FU1dgkditit0uYaSGYMFWG0XnRi9ost0EM3AQAiB0zF%2FjfQeC0xPvR3UrZz3lSc1pPH2urRJ543eAz7sFTyqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGFubRKAp0SgzTSDfKtwDqFgDQFtpMntGMBDW8VHwLU3zN3LEgoYwcCOMbK78iVbljo2LxWwJPWKPv37BZ4X%2BLxR7YqlqtzzOwqonsOYKjGVZzT1uVW037lmSSL7hRgBOM4hOdlGqcIEafLM0TRTu9QU3u%2BbbpG9Fo8caVqa9uJf%2Fbn5DLEQSu0%2B8bI0bkCZO1zyX%2B678rOaMSbQzwjhFLLMCMLvXfR%2FooPyFkuY8NKzB9XQzN0YS%2F6yXvH%2Fv1xtHnq%2BWogDQWsJtLA0Hn8LTthBBjWBVM%2FHZoa3vsUNiA5romV2EPWxWPTwvlzhrP37FuJyj0rscWVT7FRW5GAk4UEpjij3a%2FGuL5sbOBU2smjbnNugmrwWnzo5hcbf4Apl%2Fegc00aH6S%2FTUh4n0C4ndlAc4u%2FU%2FoZ0rXlKuHIaMPoNNklf9%2FBD%2BzwRW9hpBZ4gwvdDWlOk6Z2lShZvNyhMpVf407xzVT1n8utou%2BMczIT4Q%2FHm%2BLTsCKs99xMsAxY4worVOqEzVTjQrQ8TfQ1Bubmsszj4xCwkgayr4a0T6SMPrFFq5%2Bx%2BY57OMBRo9%2BvIKpo8d8PJl57yRfyiQZ%2Fx75KQr%2B1AKXJ0IJ1poiAmm%2FszmznX0mmcf%2BrG5PHtxEdj6xUC1caqMTIoXoBQwsbjyvAY6pgGGZeqgw18lw1xbY15T6LMKrsE1izd9z84ksK2QJlI0WaHQoUQ4EqB%2FX9jsWIYLoQLyTR%2Fy5QJwwyZAtyk95K9HYtUuQACmDIZ6Hz5dlsXnNyJNgxQF3sN%2BiqB6NzukdqpNpyF6Q1xLwXAbAmYmoQ%2F8mQbaH4WRH0Fkdk0txbB8OjZA9WeVFVuxNmSti8T3dtx99IJt%2B5dLlIORgi6f%2FSfUKtLIsrSV&X-Amz-Signature=3fc3a6684098a8941c9bf702efe53c30d36ca386fad65cd5a1f744d6450c27b7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BQ4IKVE%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdWAIf%2FU1dgkditit0uYaSGYMFWG0XnRi9ost0EM3AQAiB0zF%2FjfQeC0xPvR3UrZz3lSc1pPH2urRJ543eAz7sFTyqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGFubRKAp0SgzTSDfKtwDqFgDQFtpMntGMBDW8VHwLU3zN3LEgoYwcCOMbK78iVbljo2LxWwJPWKPv37BZ4X%2BLxR7YqlqtzzOwqonsOYKjGVZzT1uVW037lmSSL7hRgBOM4hOdlGqcIEafLM0TRTu9QU3u%2BbbpG9Fo8caVqa9uJf%2Fbn5DLEQSu0%2B8bI0bkCZO1zyX%2B678rOaMSbQzwjhFLLMCMLvXfR%2FooPyFkuY8NKzB9XQzN0YS%2F6yXvH%2Fv1xtHnq%2BWogDQWsJtLA0Hn8LTthBBjWBVM%2FHZoa3vsUNiA5romV2EPWxWPTwvlzhrP37FuJyj0rscWVT7FRW5GAk4UEpjij3a%2FGuL5sbOBU2smjbnNugmrwWnzo5hcbf4Apl%2Fegc00aH6S%2FTUh4n0C4ndlAc4u%2FU%2FoZ0rXlKuHIaMPoNNklf9%2FBD%2BzwRW9hpBZ4gwvdDWlOk6Z2lShZvNyhMpVf407xzVT1n8utou%2BMczIT4Q%2FHm%2BLTsCKs99xMsAxY4worVOqEzVTjQrQ8TfQ1Bubmsszj4xCwkgayr4a0T6SMPrFFq5%2Bx%2BY57OMBRo9%2BvIKpo8d8PJl57yRfyiQZ%2Fx75KQr%2B1AKXJ0IJ1poiAmm%2FszmznX0mmcf%2BrG5PHtxEdj6xUC1caqMTIoXoBQwsbjyvAY6pgGGZeqgw18lw1xbY15T6LMKrsE1izd9z84ksK2QJlI0WaHQoUQ4EqB%2FX9jsWIYLoQLyTR%2Fy5QJwwyZAtyk95K9HYtUuQACmDIZ6Hz5dlsXnNyJNgxQF3sN%2BiqB6NzukdqpNpyF6Q1xLwXAbAmYmoQ%2F8mQbaH4WRH0Fkdk0txbB8OjZA9WeVFVuxNmSti8T3dtx99IJt%2B5dLlIORgi6f%2FSfUKtLIsrSV&X-Amz-Signature=eab53e24976c19d38967c603fb6ef4902b6b5b2af2f862f656948f20dc49fac2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5EBWPCH%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPDUSXv73BYcCiNdpd4P0fx9t14g52UHtY0AxIJoEr6AiAzdfMzj5yyLoURQ%2FO0nkg%2BlVmjmrRmPtggP989hfawViqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX92PFgB7Q7grQiM1KtwDOAS%2Bhq3tyqGvxJ8VfA7OTaXy%2BByGxLZURxSuYFvxmkdxIPzYQDiGoHFo3A6P%2BDUBkMYNOglOSExad7muWGoVV05T6ob7BBa2jvaSHyEr%2FltnjRU5VrAZ4Y8ceI8HbxEDvDu%2B3r5OtxvRE1pqOF6na1gIkwBiNDkdCxbObMh24eJUPuRDQsIZH84AmOpEktviQuOknDnWxgKXzrGLLWZIEwNwy91%2FaoBda7r%2FE3ZiybcpgFUkLGIz2IwGs2YQ6B627jbhCX4a27UB5ZPZeboxsfRmwGmrv0Cjej%2FXpGxv339a3D17OnDcYW71Rp58Xe%2FaJt30dE%2FKehCukEiqGugCgahgfUv11%2FdjjlKbGlV%2BctlQzqNqjTsizL%2Bpl%2FjQVzTtWaYPX9q4z6x0WaIKkJbdyzKcpgDcrN%2Bm7Y0LiMvZnvaW6h9FPAcaK61qWnZh%2BlvVyG3UrbVVa01ny7TA098duxyP%2BxjrqluA8UH7tD33uAzbx8qQOB2mB%2F4VZ34dH0gZLLcrXXbHzWTzo9ST%2BME%2Fti2KTyoetIovgj2hnmiLxoPIuAZts7da2A42zV82UweUkb60RZkS65%2FwhOM92vcjwban35R9Cgz6pDT5xFKA0BbweBb3%2BgVa41qSC3gwqbjyvAY6pgGGwZflZPSVxC6GCXmgZLqXwg3cC1nyC5XpyyA4o2gLN80BusvFFwTR3ByBcuy73W7LGIVgEOdV2XWkqGwGMj7t9BDtjbSkTcJJopg62sncXLNJTDvM7mikmJGztuNhE0JyBUUKSdZWnvwj7lB4uxTsCwJWKjvUb0p4sApS6RxYFifRvwhmPlHaFwvL4LgsE%2FpEUfUBQTW0mOfwvDOSycOirmj6pfyJ&X-Amz-Signature=af2f2d27642416289202af8f01f0e86b4234d97e7ef005ee5ee765891e1d8679&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646E6M2LY%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BkTyJsNFSaHOszzD7NDfVA54z%2BgIubxx6OFn7DYIMIAIgXDu%2BCH%2BSBRTyMoetG%2Bqg9T9F29DIUknkA4ayouxVArYqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5B%2BzhDLxtQefkcbSrcA5LDu3CTQGq3yd9VlEgxKHFPK0YGPsC2BA1RCdoMOUDykMZU40U2Q1uU8n9pvn8hhOB0JnVvCnlmrJn0Lp4FpqLRNRtmEvQguK9gxUMGp0nAK%2FS4B6FKYcyG0azDlLfnNk%2FglXOyvFPs%2FkfNcu4iJBpngDQaIPNd1xuJhoo8p%2BNVrKORbSYym%2BDyjpZH10UGY9KV21jtYxsorhpa%2BPo5H7NtPa3qMkH%2B0UpF4sHzMFGVkpv75LRwnHyNPanXxEpPOhLAUq%2B%2FrQ9SDBPGl9FY0lyo1OKCzCdgvDsw16ygzV0JojBey%2B1398kDnWSt9A1ClboqFhGnFDOa8aRNm8ZamxfNoeZQS6zNoq7IJoTU2HZopwH0yc7KODuAS4hHlg1%2FeNqYoYdBE5HtrRudr9%2FdSzrkbNjfvaHqfPEmr%2B1q5eze1UO8CvK%2BorUCk6oUIarK6xVx1OkXlQsVXpMvL12rOzAxUNOI0aKDGjfXtjX4mV39U2RLuZp6J0k2CBx9ZNWU7O5ANuATmbHIP%2FBedqLWsVBXIC3th98SHIgzDyitFwiGAh9oBP6deAcdQGnqToXVkolRv9oD7wnG8vva6G%2FhXsZBXeOr8oNBmBbX3Dwq54YZf7tp%2Br%2FWZmqXs23FMOK48rwGOqUBW919mGwfanN1VbbXMSihly77Y1Bv4JNkAOSgD0fE7h9fkBqhLKapTYzrlB8095sXXh0fAHr%2FF3Fwz9TjD7WcevrSvyQ1qXNpkJbFJDlI9GsY5HdM5iY4Qw5zhFKOuIaEot%2FTkvIY0MJVQZcPTli0drrXjwH%2F3NZwOgpjfzs9CNZTRa2JKzwGVqcJKRwblAIFVe8qSiUYRtOkzFcx744v%2FnfgWCdg&X-Amz-Signature=ba576171126f4bf0d466fbb88e93724b93bcdace5deda630dd49f56f62b8e3a2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BQ4IKVE%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdWAIf%2FU1dgkditit0uYaSGYMFWG0XnRi9ost0EM3AQAiB0zF%2FjfQeC0xPvR3UrZz3lSc1pPH2urRJ543eAz7sFTyqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGFubRKAp0SgzTSDfKtwDqFgDQFtpMntGMBDW8VHwLU3zN3LEgoYwcCOMbK78iVbljo2LxWwJPWKPv37BZ4X%2BLxR7YqlqtzzOwqonsOYKjGVZzT1uVW037lmSSL7hRgBOM4hOdlGqcIEafLM0TRTu9QU3u%2BbbpG9Fo8caVqa9uJf%2Fbn5DLEQSu0%2B8bI0bkCZO1zyX%2B678rOaMSbQzwjhFLLMCMLvXfR%2FooPyFkuY8NKzB9XQzN0YS%2F6yXvH%2Fv1xtHnq%2BWogDQWsJtLA0Hn8LTthBBjWBVM%2FHZoa3vsUNiA5romV2EPWxWPTwvlzhrP37FuJyj0rscWVT7FRW5GAk4UEpjij3a%2FGuL5sbOBU2smjbnNugmrwWnzo5hcbf4Apl%2Fegc00aH6S%2FTUh4n0C4ndlAc4u%2FU%2FoZ0rXlKuHIaMPoNNklf9%2FBD%2BzwRW9hpBZ4gwvdDWlOk6Z2lShZvNyhMpVf407xzVT1n8utou%2BMczIT4Q%2FHm%2BLTsCKs99xMsAxY4worVOqEzVTjQrQ8TfQ1Bubmsszj4xCwkgayr4a0T6SMPrFFq5%2Bx%2BY57OMBRo9%2BvIKpo8d8PJl57yRfyiQZ%2Fx75KQr%2B1AKXJ0IJ1poiAmm%2FszmznX0mmcf%2BrG5PHtxEdj6xUC1caqMTIoXoBQwsbjyvAY6pgGGZeqgw18lw1xbY15T6LMKrsE1izd9z84ksK2QJlI0WaHQoUQ4EqB%2FX9jsWIYLoQLyTR%2Fy5QJwwyZAtyk95K9HYtUuQACmDIZ6Hz5dlsXnNyJNgxQF3sN%2BiqB6NzukdqpNpyF6Q1xLwXAbAmYmoQ%2F8mQbaH4WRH0Fkdk0txbB8OjZA9WeVFVuxNmSti8T3dtx99IJt%2B5dLlIORgi6f%2FSfUKtLIsrSV&X-Amz-Signature=d4651a8e373db752f874da6ee1563b34686cbed20b747359552f8e1da8723519&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

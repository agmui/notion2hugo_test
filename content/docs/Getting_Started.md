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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZU3GUU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbFVgVp9yhsYrcbq15VQcvxqdQuknmrUzeC8inj8w4WAiBCagP3LdmC8xOVP97goEZzlOdTd4GlyYuZ4t20J90zISqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ2Pm5L3LIfYzMbpyKtwD9m2l0FrLSkfSPc6g4ZLbi189woamvBV5lvFS77yjLV1%2BC1uTdeGZx6wAiAYT0j1bNC8pC3tyupTVtLN7wSnJJHgnwHC680HJrBUAjKt6ULC5aRW8kd8O%2B%2FLuXa7KbhZavTTmuI0iGj83e4qmFV98xXjwY9ojji%2F8JRK4fKF8baB%2F1IziJ6VYBBaFhWpR629s2MNmUdTjw7n5%2B6fbVt%2FrmyPIo2xyWTO9qE8n8Ez%2BHZPRWr03tpVo9VUPqGVgqmmGAZSZPoVWu1OhvUwork72bPjQ6wfsB%2BPh0dtOfkqp23dIyCtaY4yIfJu7xugG%2FUmrHeD2QXjO7HnoiUnsqpPvW9U0auoiqBS%2BkrGlFIMOXsFRLQzbo%2B%2FJI07vMComON0zHb5cWkRZBAH9wlQ%2BKQ%2BnBb4Xc%2BOYsK%2FhgzpdTQYSXsmcS9RSluZYDulgVZVsAr4XUzHYXLieqjMloByK5c9xu4oPVj0lVk56wThXuYR%2F5x0E0C3fw5zm4HKstJV2mxI5M%2Bv%2FvL9pLvuwOWiJi%2Bf5%2FUv0NeJjnTuFxAt5bnnEv6BwkjCKUZTBUkSB9oUIN0tb08C5Q8X6sx7w2E%2FZiHMBLVVnCB772IW7LSrRcfiC5tcrmRhSFZiyOFDfyTwwsPmLwwY6pgE0xzxhFpNBnn%2B9pmsNukncwo9%2BT4hOTLiIRJl4voPKvbvZLn5gssTmi2gASkGGy%2FHm30Nzks4tvf3bu2A6XgqIBU%2F4UwbCt%2FWNI3T%2F9hT%2FNh6ybLiwzXMn38roQt5vF4TJ%2FX6xGCT9roIv%2FZ8F%2BmmBRpo4rMTcAwkWS8PhGMQTL877zhkigiA%2BDQ9LTIZ12XlXTATyfpMFT4YVTpazqwEha0GWOdf8&X-Amz-Signature=8a85be175df9c70c99c99d70ead699730a8e42192bad0c2f725302c9c2bd5e54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZU3GUU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbFVgVp9yhsYrcbq15VQcvxqdQuknmrUzeC8inj8w4WAiBCagP3LdmC8xOVP97goEZzlOdTd4GlyYuZ4t20J90zISqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ2Pm5L3LIfYzMbpyKtwD9m2l0FrLSkfSPc6g4ZLbi189woamvBV5lvFS77yjLV1%2BC1uTdeGZx6wAiAYT0j1bNC8pC3tyupTVtLN7wSnJJHgnwHC680HJrBUAjKt6ULC5aRW8kd8O%2B%2FLuXa7KbhZavTTmuI0iGj83e4qmFV98xXjwY9ojji%2F8JRK4fKF8baB%2F1IziJ6VYBBaFhWpR629s2MNmUdTjw7n5%2B6fbVt%2FrmyPIo2xyWTO9qE8n8Ez%2BHZPRWr03tpVo9VUPqGVgqmmGAZSZPoVWu1OhvUwork72bPjQ6wfsB%2BPh0dtOfkqp23dIyCtaY4yIfJu7xugG%2FUmrHeD2QXjO7HnoiUnsqpPvW9U0auoiqBS%2BkrGlFIMOXsFRLQzbo%2B%2FJI07vMComON0zHb5cWkRZBAH9wlQ%2BKQ%2BnBb4Xc%2BOYsK%2FhgzpdTQYSXsmcS9RSluZYDulgVZVsAr4XUzHYXLieqjMloByK5c9xu4oPVj0lVk56wThXuYR%2F5x0E0C3fw5zm4HKstJV2mxI5M%2Bv%2FvL9pLvuwOWiJi%2Bf5%2FUv0NeJjnTuFxAt5bnnEv6BwkjCKUZTBUkSB9oUIN0tb08C5Q8X6sx7w2E%2FZiHMBLVVnCB772IW7LSrRcfiC5tcrmRhSFZiyOFDfyTwwsPmLwwY6pgE0xzxhFpNBnn%2B9pmsNukncwo9%2BT4hOTLiIRJl4voPKvbvZLn5gssTmi2gASkGGy%2FHm30Nzks4tvf3bu2A6XgqIBU%2F4UwbCt%2FWNI3T%2F9hT%2FNh6ybLiwzXMn38roQt5vF4TJ%2FX6xGCT9roIv%2FZ8F%2BmmBRpo4rMTcAwkWS8PhGMQTL877zhkigiA%2BDQ9LTIZ12XlXTATyfpMFT4YVTpazqwEha0GWOdf8&X-Amz-Signature=caa38fc56e024211a71817fe052138f1e42fb2e257ba90e62d698e3d6ddc1c79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZU3GUU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbFVgVp9yhsYrcbq15VQcvxqdQuknmrUzeC8inj8w4WAiBCagP3LdmC8xOVP97goEZzlOdTd4GlyYuZ4t20J90zISqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ2Pm5L3LIfYzMbpyKtwD9m2l0FrLSkfSPc6g4ZLbi189woamvBV5lvFS77yjLV1%2BC1uTdeGZx6wAiAYT0j1bNC8pC3tyupTVtLN7wSnJJHgnwHC680HJrBUAjKt6ULC5aRW8kd8O%2B%2FLuXa7KbhZavTTmuI0iGj83e4qmFV98xXjwY9ojji%2F8JRK4fKF8baB%2F1IziJ6VYBBaFhWpR629s2MNmUdTjw7n5%2B6fbVt%2FrmyPIo2xyWTO9qE8n8Ez%2BHZPRWr03tpVo9VUPqGVgqmmGAZSZPoVWu1OhvUwork72bPjQ6wfsB%2BPh0dtOfkqp23dIyCtaY4yIfJu7xugG%2FUmrHeD2QXjO7HnoiUnsqpPvW9U0auoiqBS%2BkrGlFIMOXsFRLQzbo%2B%2FJI07vMComON0zHb5cWkRZBAH9wlQ%2BKQ%2BnBb4Xc%2BOYsK%2FhgzpdTQYSXsmcS9RSluZYDulgVZVsAr4XUzHYXLieqjMloByK5c9xu4oPVj0lVk56wThXuYR%2F5x0E0C3fw5zm4HKstJV2mxI5M%2Bv%2FvL9pLvuwOWiJi%2Bf5%2FUv0NeJjnTuFxAt5bnnEv6BwkjCKUZTBUkSB9oUIN0tb08C5Q8X6sx7w2E%2FZiHMBLVVnCB772IW7LSrRcfiC5tcrmRhSFZiyOFDfyTwwsPmLwwY6pgE0xzxhFpNBnn%2B9pmsNukncwo9%2BT4hOTLiIRJl4voPKvbvZLn5gssTmi2gASkGGy%2FHm30Nzks4tvf3bu2A6XgqIBU%2F4UwbCt%2FWNI3T%2F9hT%2FNh6ybLiwzXMn38roQt5vF4TJ%2FX6xGCT9roIv%2FZ8F%2BmmBRpo4rMTcAwkWS8PhGMQTL877zhkigiA%2BDQ9LTIZ12XlXTATyfpMFT4YVTpazqwEha0GWOdf8&X-Amz-Signature=62a9590cfe30359971b15235161c950eb4d2ef477ebe0e2ec8037a1cd4926026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YJ7LZJN%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3ZcMlem%2BhXfSnNAwuoaSITJd7QmLi0ZcXaZMRFbQCPQIhAO4uXepdpE%2BUOGYC3ETR6%2F%2FdNntufAUrSPQmJL33IT%2F0KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2F2fJ4ycaA2wFZYnUq3AMGMu7EM%2FnpCttTGIEH9cvNtImCMVvlgk6x4lofd%2BDhJzXixQZtGMEr7jrNcDv%2FlASgcsxB0kJ7xa36PD73W2jMGnV1QOQ1IM2UqmDeOtseSlSq38qJv8kiENjPH3XmB21uRlqhNaiV3%2BU2xwJB1kdVxQnnjREiw2NTEmxETX%2FiKXU6mn9W0JdKZKeDOxALARjlUgFl3%2FFWd4QtMhTraxg3Wzb4dEmMjbofg%2BPRBZO2d%2Ba9QxGAz%2F12zwbk45PwvnfoTOWGW%2BvaxAY2ZuIy6uq%2F422tmBTkAABB6J4BoTSPjYdlj3MQqlYIkGTgdDRAv9OItp3Uy4CcC%2Bw%2FP8XC%2FPry2Bskc3Ya0l1qT36Va%2BIqaawC%2Ba2DRdb3pCHGlbmfNTfrBoDcDsj1D6%2BeY7f%2BRICom%2BfKyST88a7tJN4Aw6bj51IAjlth2JdMixa3%2FD038i2X0Wx%2Fnkx6c0%2FE0dWA2J8JYTHVaU3nA%2BTkJIqht7kfRShn7ExWgRo3TmvdqLHwlVcERAW9mG%2BOb97Fy5sf8FN0EbtjvlrVJ66SJLukIomrY54N2A8I0ojvty796mIhyMlJbSpR1SXS5nZCM79%2BB5Q3Z6a52w8C8IyEbHsc7e26kUHNbhg94tglUHyVDTCd%2BYvDBjqkAeN2WrYRn%2F6u7F2w%2FwYqtrVSHdlAor7ZcsU%2FLI2renghk2Gl6HLodoeuq5qyNKan%2FpAiwFt0o6BhQOPAfHDtsiDxgacsV%2BBl%2BLNOBcugX9UhHKNTuK6cvPzv%2FsBUoelEsW7w1J%2Fy6vIlUUyRrmu6sS4TBhBi9Qef3LxNyxcGjG3PZHBTkG1fypqJRggFNZaR3mVEx0jiZ%2BeNdXtzqXKSBn7vysoM&X-Amz-Signature=6c103261f92315e9805834c9893776c3fee2064a9308c33f3dee21ed7364171b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOKVKK35%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjxw%2F2O7MC4RZXxhzxJIlUd%2FLeqaGejBdM7d6lqffyeQIhAOxfJ8CtE08u9jrvqBRGcxQfaDqkkKILvJQVDnzyxqHhKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaNwHDQdkpjcZaf%2FAq3ANef9Rk0dZPZ6xnUM72S7MvtuC89aVpG6C%2B1OTlYjeGJp%2BLuK5Jxf1%2Bzryq8P0BAz3NnIpvZnvOZnvtvQANG16wh399D2GoLqdeN%2BX09tSwU4qfGpoQLkALa54LOTJ6qtdTF%2BIa1GWyI802a5BH7EAqulOPLJ30XuHsG9PGSU3DA5FxLyEFSWvL8rzjdhU7Wf%2BBf%2BMdYc2ylj8PrYWYvkvlr3kc9jM5RUqo17FJnBiSJoKrb6T7mQkRgmhfSv82n8vogOK3memoNtyXslCb9yIPWJ%2BaMPBOo%2Fl6gKtLnEqsBw9NhEnAxeX%2B0ou8NyNZZ0lCSCPiXkWVgbCI5RzNNyiYIHcl26%2BQn8Z%2BuHdk56kmoOFHatxrAQKNAJz3SsSjstESStHHLl7MnJzyqYf21TT53114oluPTpEcaFkp55e0sF88XwQ7b53FW3ysm98%2FjrTOJfMPMjMO6y5y14ui9hast1enP3B4NDx32zcCCQk4z8qqhNpX4QEL5dk9JpSzAYO4LcIDubrGT6WyNpcut92SWmg9LcvIVEOg4aSJy1Qs%2FbdrZyBVOzr9DlqHf9FqfBhtN%2FvJmSH4KDrpWEmNT7RK3o6WASwl2vmgvqOC8TIBkw5MtnmTYRc53E5GTTCY%2BovDBjqkAaa7QXAUL%2FMHWO6XwhrqZjK3sppluqnZOWYa0DFakHvw40VhLTHkl2%2F7kuWNdZO9I%2FS5xrwbZkznWoPPLs%2BFs2atY7cmMGxQcc9%2BLyOvPgxAtl%2B2eK5eDpY7qxLFuB2aY4czCaEcQ1ghBrKXvxhmKo%2FQdCBoeF%2F9oWEhU31VfK4YKgxK%2BacaNJ1RgZpVl5JAweAAvtCHk91HfJzDEnOapHgdC%2Fjm&X-Amz-Signature=89710db2215dd7c9e1995ba5a229fed54405796d9234e362c526303736ab104e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZU3GUU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbFVgVp9yhsYrcbq15VQcvxqdQuknmrUzeC8inj8w4WAiBCagP3LdmC8xOVP97goEZzlOdTd4GlyYuZ4t20J90zISqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ2Pm5L3LIfYzMbpyKtwD9m2l0FrLSkfSPc6g4ZLbi189woamvBV5lvFS77yjLV1%2BC1uTdeGZx6wAiAYT0j1bNC8pC3tyupTVtLN7wSnJJHgnwHC680HJrBUAjKt6ULC5aRW8kd8O%2B%2FLuXa7KbhZavTTmuI0iGj83e4qmFV98xXjwY9ojji%2F8JRK4fKF8baB%2F1IziJ6VYBBaFhWpR629s2MNmUdTjw7n5%2B6fbVt%2FrmyPIo2xyWTO9qE8n8Ez%2BHZPRWr03tpVo9VUPqGVgqmmGAZSZPoVWu1OhvUwork72bPjQ6wfsB%2BPh0dtOfkqp23dIyCtaY4yIfJu7xugG%2FUmrHeD2QXjO7HnoiUnsqpPvW9U0auoiqBS%2BkrGlFIMOXsFRLQzbo%2B%2FJI07vMComON0zHb5cWkRZBAH9wlQ%2BKQ%2BnBb4Xc%2BOYsK%2FhgzpdTQYSXsmcS9RSluZYDulgVZVsAr4XUzHYXLieqjMloByK5c9xu4oPVj0lVk56wThXuYR%2F5x0E0C3fw5zm4HKstJV2mxI5M%2Bv%2FvL9pLvuwOWiJi%2Bf5%2FUv0NeJjnTuFxAt5bnnEv6BwkjCKUZTBUkSB9oUIN0tb08C5Q8X6sx7w2E%2FZiHMBLVVnCB772IW7LSrRcfiC5tcrmRhSFZiyOFDfyTwwsPmLwwY6pgE0xzxhFpNBnn%2B9pmsNukncwo9%2BT4hOTLiIRJl4voPKvbvZLn5gssTmi2gASkGGy%2FHm30Nzks4tvf3bu2A6XgqIBU%2F4UwbCt%2FWNI3T%2F9hT%2FNh6ybLiwzXMn38roQt5vF4TJ%2FX6xGCT9roIv%2FZ8F%2BmmBRpo4rMTcAwkWS8PhGMQTL877zhkigiA%2BDQ9LTIZ12XlXTATyfpMFT4YVTpazqwEha0GWOdf8&X-Amz-Signature=3cd029460e10de8564f6ea3dbe23e4d3a1fd79b4e9b0f4f8ac771871074ca55c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

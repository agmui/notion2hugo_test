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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7M3GXFP%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC5qMscGMNeJpPzDBKwGULmPp0TjRlo%2B6q17ZoMFfIEkQIgPzG15XqQHBMiBKaUQvSjHMdWh9m0UX332jgoKvw58m0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLQKeImZVz5pHb5ZyrcA35UFq9iKR%2FmUWVFPSD8qPeEddeBgFfzHiMaG03npvptxUcj2ckx%2FHrKXkaL6P1sXJQuFKPwsW81lzZQlpymeIRk8SV5DK1kQnGNhNYaTz1T717FlssBoN3Wr1qCxBn%2BRk3QtYZyfMEoEqPN3CcBOUDmu98Ws4TbvY%2FjZ2kz2G7KE0DKAOmn8xdWP4S80TAldAQAjHddvDM9SURJ0BBQHXOiWyhb3hxQIYoB2B1YzaqUEmXECXGS%2FHMVwS6tteB6lZCCzhz%2BfZKNKMsgkhnvxuvFKu48EzE3y4CvtXnNG9WbWN%2FKRpu8St1E5KYWoG5KzOfDiighYmkHBaD8Ch6zRPldNlQslhZoAo4YLb3yj4BAVdx4%2BDp%2BctB2ksTXdzjqXGD2ecLiGlD4S2PbfM4eQJhOaVwmzVH1HoHWsqtM1zx%2BWfZyt85mN8ZI2HPhLbw3y6ujrP3iABBCbcJogEsbBkmovfdDutZYVsLYm3BPIcrA0vilIq3glwsMCwKSKbLyerYRgxWLRUrs6vWUbITX%2FruPGXMa4CF%2BCpeNqBROUwBSIxGqXT%2BBCsg3VLE6smH%2BcYp9NQLodzrzZlAOZGbDGkFxiRDmiNtDlAcv92zBVy9i86sKIYeYbQnjZWUPML%2B97r8GOqUBFgMTSj23oH5bhjWWoXuIZzCqnnzwyxgXDLiYIQrwmWGGlRISoTN0%2F8p6XGMJCXJmNvFdWjvoZtblWNTku3ED1ZKOXWiazO%2FTwQkMxVpWFT5x0GyraRZ%2BG3XcxT7JLJunfXg6HTJPtRBruwo98vHD1SZcXPaHQSUlKQ9xbP3Wc7CKxYFrn3OBrAfg1AGRzPWtgsHlU0iDlvZGHeCUZyGPLLMeUa4x&X-Amz-Signature=12d04941bdbc4e53dd588f99e26c2f8666915310d9113be48c5f97c5bc528a94&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7M3GXFP%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC5qMscGMNeJpPzDBKwGULmPp0TjRlo%2B6q17ZoMFfIEkQIgPzG15XqQHBMiBKaUQvSjHMdWh9m0UX332jgoKvw58m0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLQKeImZVz5pHb5ZyrcA35UFq9iKR%2FmUWVFPSD8qPeEddeBgFfzHiMaG03npvptxUcj2ckx%2FHrKXkaL6P1sXJQuFKPwsW81lzZQlpymeIRk8SV5DK1kQnGNhNYaTz1T717FlssBoN3Wr1qCxBn%2BRk3QtYZyfMEoEqPN3CcBOUDmu98Ws4TbvY%2FjZ2kz2G7KE0DKAOmn8xdWP4S80TAldAQAjHddvDM9SURJ0BBQHXOiWyhb3hxQIYoB2B1YzaqUEmXECXGS%2FHMVwS6tteB6lZCCzhz%2BfZKNKMsgkhnvxuvFKu48EzE3y4CvtXnNG9WbWN%2FKRpu8St1E5KYWoG5KzOfDiighYmkHBaD8Ch6zRPldNlQslhZoAo4YLb3yj4BAVdx4%2BDp%2BctB2ksTXdzjqXGD2ecLiGlD4S2PbfM4eQJhOaVwmzVH1HoHWsqtM1zx%2BWfZyt85mN8ZI2HPhLbw3y6ujrP3iABBCbcJogEsbBkmovfdDutZYVsLYm3BPIcrA0vilIq3glwsMCwKSKbLyerYRgxWLRUrs6vWUbITX%2FruPGXMa4CF%2BCpeNqBROUwBSIxGqXT%2BBCsg3VLE6smH%2BcYp9NQLodzrzZlAOZGbDGkFxiRDmiNtDlAcv92zBVy9i86sKIYeYbQnjZWUPML%2B97r8GOqUBFgMTSj23oH5bhjWWoXuIZzCqnnzwyxgXDLiYIQrwmWGGlRISoTN0%2F8p6XGMJCXJmNvFdWjvoZtblWNTku3ED1ZKOXWiazO%2FTwQkMxVpWFT5x0GyraRZ%2BG3XcxT7JLJunfXg6HTJPtRBruwo98vHD1SZcXPaHQSUlKQ9xbP3Wc7CKxYFrn3OBrAfg1AGRzPWtgsHlU0iDlvZGHeCUZyGPLLMeUa4x&X-Amz-Signature=2ca3987020ed1a3ef27e037dbab55c7d6ce81cd04a4f588a389714512db5762e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5NZMYUK%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCk5oSi3QFuTEkWbbArHyMJlGBge7xvu2QXfnAbGWV%2FoAIgZm2jtfhCBehjZfRSb1r0WUBQImvQMuzUu7TZAZq1fbQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmHK%2Fge2qLuocbqCyrcA1%2BdN472bot8xCIRzE%2BxFrbGvYpL%2BDY%2BAhhSjdG%2F5%2Bm32RkqlR6NxECxKZftdrDwlzGFFJ%2B9LCxN%2FwnI5r3UNGfOJYwPDyj0Dr5CEMl5KxNXVNkKhcCE4xM1ZN1BnPdA2FWIssf%2BFjlQLogABnqxYmbNS0wwj8FYw9ud21uLdgodSA1JgDs0EIPLTRvC4gli4umWGTp3GlugeiMQ9H6d2HNzZrJz0ltoW4D2kw13UkDcN2eQOSQKxslt94qlzuknity2ZLGceDW60kmcZlUa3PdCWwNtZuX27CX3vctSr%2Ba158oiVBa73%2F1Mu9uJRWA67G2WZ4EMRpuQyG4Km6H3m%2F42ASuPyI2vbMD15bJeZT9MhvHucmrBeo2GMNa94cln7yFuc4Evyk0nxVDQndEq3nRd%2BVc%2FDrQON2KTn7on%2FO4rm33BKn3%2BpD3OVnmEXG%2BQPhzxvKOQXogAcct5ZmsGAMijRCqwQroKllP2VqilTmG%2BuEQZtvDD8hexrx4%2Bf26j5XHleTaTr5ZF4Jg%2F%2Fys3TEUxsUW%2FmPxSyYluPjrDFlZavJnaOl9sI2wYCOZ5VyUVUSikqNKQzPfi0gKnEzOvDerQ1cV33iJKoa4gMqeEXbp2wb%2BBjSL%2FLG%2BTx4sGMKy97r8GOqUBw7wao3LmRc%2F0FerbTx2PMOMGPu7m%2F7ufctn%2B6iy5IGj404dnrFxzlnG5Ee5x3Hci5cebDDZl5kbOdKEbKYHDkdrb49TLkP8Yfm0KUKBBKg6dPo9nfMg5cw9b0mnrOApegsZfdObLR7MsmZA%2Bftydq6sgJmSrGAIWHLP01LPBdPbLltbUf6rdirbI6hhE2eAlZKEBCmOsSUz8cK%2Bd5Br6k5FFJXfF&X-Amz-Signature=27b4492b91f8b960551c5d4638174f34dd7e06e6a5557cfb1a652264a45d0668&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KBWZQDG%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCICWtms2tL0n63xDUS81hYIP2ZL7qgWP2Qw1YvJFBrQd9AiEAxA4TVVJV3sbkiST7jPeJbHwteezQa13BAKuYzcpiR3EqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHCwaZDKutShGWxPSrcAxqGBdDyj1dWYduQf8kb2Zg2itXY6ap52irHMu58%2BWmwafqqZM8cqkATT7LyYJFrdPS2XcpHaikSbb8caMAGGH7ysWUsATlskjAB3pEtAM1EUcGR6jT3aQ7KPX02byi2zbLJMGFXjAnf0D7ASoHm768AsZaZkO89zeMcQPgME2Seqpiheua3pkxgv7xxlxwuyVSxN5800OXUKc1eEjQ7Oh4R%2FXTuw%2BZysdwUushQx5uU%2FHggm6PAnrBg5g1I8eGBVCjq12aifUANLfl1JbEo8tnZwN3uBw%2Fbb7HIS0hQ2vD%2FfIE2QNE7BOAwo8xDnrWFnmVnORKmTieGWHuod%2FywFM%2BEQ488IdQHRYekqNxKxlfWLwpEB3tRbipLOSrfCt1HXl8XxrTpZvd%2BJCdBkitFISNNBXyfPvuEx%2FijQtOfAykF0GHkX3loqzCBd3jda3rksIq0MW5n7eK1zUin%2Fd2zvQ4IeDZ6wZaZGLKxCH4KdwJB4gt5Y5hMLLYG3EnsFi%2FfTWCDocf0O40Ex0DV%2BhwWGqKakiTD6CERedbawRvApCjxk85V5OMNGdstblFVjS1iktmomd6s63vBYBHiR8awCEsGwXw57cHgtyHqYGKQNtixm%2FgLf5WHjifJUNVjMKK97r8GOqUB0NHONWSE5Wo1l1y0wxd3ZEFfq%2Fal%2Fpd67eQPi6N9ExwjahBOaTDsnjjpi8FDyJkQui%2B%2Bn0BM3b4PiFvd7LK181uFp3y%2B88d3l2VY3IHIUUjROI6JW2TiD5%2FN74D3MR4vozgfIulaF5oHrMqy4%2B4pA3tbplcr7Qq9Zc2%2BRejY9FQyDwXOSbDuTXLs0ivLIfL30o9Ytps%2FX91%2BKgN%2FInHwMZyQ0gmQ&X-Amz-Signature=261e99980e11e8d980bd7580dc2ff551e5074a8a13a2376ebd7da99245ae309d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7M3GXFP%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC5qMscGMNeJpPzDBKwGULmPp0TjRlo%2B6q17ZoMFfIEkQIgPzG15XqQHBMiBKaUQvSjHMdWh9m0UX332jgoKvw58m0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLQKeImZVz5pHb5ZyrcA35UFq9iKR%2FmUWVFPSD8qPeEddeBgFfzHiMaG03npvptxUcj2ckx%2FHrKXkaL6P1sXJQuFKPwsW81lzZQlpymeIRk8SV5DK1kQnGNhNYaTz1T717FlssBoN3Wr1qCxBn%2BRk3QtYZyfMEoEqPN3CcBOUDmu98Ws4TbvY%2FjZ2kz2G7KE0DKAOmn8xdWP4S80TAldAQAjHddvDM9SURJ0BBQHXOiWyhb3hxQIYoB2B1YzaqUEmXECXGS%2FHMVwS6tteB6lZCCzhz%2BfZKNKMsgkhnvxuvFKu48EzE3y4CvtXnNG9WbWN%2FKRpu8St1E5KYWoG5KzOfDiighYmkHBaD8Ch6zRPldNlQslhZoAo4YLb3yj4BAVdx4%2BDp%2BctB2ksTXdzjqXGD2ecLiGlD4S2PbfM4eQJhOaVwmzVH1HoHWsqtM1zx%2BWfZyt85mN8ZI2HPhLbw3y6ujrP3iABBCbcJogEsbBkmovfdDutZYVsLYm3BPIcrA0vilIq3glwsMCwKSKbLyerYRgxWLRUrs6vWUbITX%2FruPGXMa4CF%2BCpeNqBROUwBSIxGqXT%2BBCsg3VLE6smH%2BcYp9NQLodzrzZlAOZGbDGkFxiRDmiNtDlAcv92zBVy9i86sKIYeYbQnjZWUPML%2B97r8GOqUBFgMTSj23oH5bhjWWoXuIZzCqnnzwyxgXDLiYIQrwmWGGlRISoTN0%2F8p6XGMJCXJmNvFdWjvoZtblWNTku3ED1ZKOXWiazO%2FTwQkMxVpWFT5x0GyraRZ%2BG3XcxT7JLJunfXg6HTJPtRBruwo98vHD1SZcXPaHQSUlKQ9xbP3Wc7CKxYFrn3OBrAfg1AGRzPWtgsHlU0iDlvZGHeCUZyGPLLMeUa4x&X-Amz-Signature=1870c16379216d255b756d242a9e0cbc42e15dedcf3cb61d8b57738aa2901a9c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

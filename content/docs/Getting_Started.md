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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A26TAIF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIGNjlYo993AKeW%2FK5u4XCc9v1QTeAUBhv2QmuwkhV5iFAiEAvnzleS8FopSbWGTC39PBy%2FYCf%2FrWxRmqXzcdVZJFcOIq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDB8gUwaLOw8%2FOXFlvCrcA2x6n7uL9f1Lfe8nLQA3a4Jmw0kkvX5%2B6Y3Ff%2BhHjMbm8s%2Ff0BGMOmT51gVpBDAQOYIlvcu1%2BNTa%2FtbYn4qDSgNPmZwjoaE6ZcQ%2BrYlrPCErnyVwYBG%2Bo4zsniNZqFRrEL6x7f2WjlBhOV0ZKMW12HsSgKWQ8kJz7j8GX3Wl75vAQ9Oc5tY05Tt4MjX6%2Bd5AVBugRFq69IzS01qp86pSdyShbkY1sdfM5lG3DIDLFyF5JjVeT%2BiHG0LDW9jM36cBQExIIpS4IzqkToYBmPq4CvID73z4lOcXJMMnt2XtLr3jyVE%2Brz%2BRqKluazzln9OkGhHjwOt5mSe9A%2F1vA%2B%2FXzUSyESGOgA8dzG3fOz4y%2FYlUn47c239BiOvZRUwcl3x6MwJrYAi5n0rFh4OD9jFJWL2q6ENBowBCch1F5Q9F8%2FDNQpKUxliPM46LRyhQ%2Bw%2BtZ34QdPA0b7OpXiyWbJzJnDnZV07X7%2B6c3fNsXWhQq3HDV3bZwAPH9k9ZvwoRQn30WlOVW6Ko0keORr0tgxHJNTBY1ZS8fK6n1H3wWY6I4uzbSzfqD6NuwOBMjJUvUizlwO7%2FUaVYFW%2FMP%2FIFQeCQUB32EYq7Vv%2BlGS4YAqQArHONd4%2BAHe38u4%2FG4MOWMKa71b8GOqUBhXqvQxC18nl%2FM6irbs9Hoi%2BUTcJ2tr%2B06hLEA4iIudNxzDSTzpxnT3QqxAOD9nztoaSSV6l8AaOJkD40wdy8MOTnEZlS4rP3ObblNoCPFcUfitSud3Coko5Og8CpOHYzsqkxnnFp%2B13MZij7OcJIteIUNEvfFT2ef2%2BOXtU%2BGVjyjEyGGi7OTHKXAhQRQSnmxVvRZrNijF0Y5v1gbmo6q0aD2iCZ&X-Amz-Signature=8d4baf98bf8d776dc829de99d475aa623472c05abad96be97da3251eb2c1a8f0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A26TAIF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIGNjlYo993AKeW%2FK5u4XCc9v1QTeAUBhv2QmuwkhV5iFAiEAvnzleS8FopSbWGTC39PBy%2FYCf%2FrWxRmqXzcdVZJFcOIq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDB8gUwaLOw8%2FOXFlvCrcA2x6n7uL9f1Lfe8nLQA3a4Jmw0kkvX5%2B6Y3Ff%2BhHjMbm8s%2Ff0BGMOmT51gVpBDAQOYIlvcu1%2BNTa%2FtbYn4qDSgNPmZwjoaE6ZcQ%2BrYlrPCErnyVwYBG%2Bo4zsniNZqFRrEL6x7f2WjlBhOV0ZKMW12HsSgKWQ8kJz7j8GX3Wl75vAQ9Oc5tY05Tt4MjX6%2Bd5AVBugRFq69IzS01qp86pSdyShbkY1sdfM5lG3DIDLFyF5JjVeT%2BiHG0LDW9jM36cBQExIIpS4IzqkToYBmPq4CvID73z4lOcXJMMnt2XtLr3jyVE%2Brz%2BRqKluazzln9OkGhHjwOt5mSe9A%2F1vA%2B%2FXzUSyESGOgA8dzG3fOz4y%2FYlUn47c239BiOvZRUwcl3x6MwJrYAi5n0rFh4OD9jFJWL2q6ENBowBCch1F5Q9F8%2FDNQpKUxliPM46LRyhQ%2Bw%2BtZ34QdPA0b7OpXiyWbJzJnDnZV07X7%2B6c3fNsXWhQq3HDV3bZwAPH9k9ZvwoRQn30WlOVW6Ko0keORr0tgxHJNTBY1ZS8fK6n1H3wWY6I4uzbSzfqD6NuwOBMjJUvUizlwO7%2FUaVYFW%2FMP%2FIFQeCQUB32EYq7Vv%2BlGS4YAqQArHONd4%2BAHe38u4%2FG4MOWMKa71b8GOqUBhXqvQxC18nl%2FM6irbs9Hoi%2BUTcJ2tr%2B06hLEA4iIudNxzDSTzpxnT3QqxAOD9nztoaSSV6l8AaOJkD40wdy8MOTnEZlS4rP3ObblNoCPFcUfitSud3Coko5Og8CpOHYzsqkxnnFp%2B13MZij7OcJIteIUNEvfFT2ef2%2BOXtU%2BGVjyjEyGGi7OTHKXAhQRQSnmxVvRZrNijF0Y5v1gbmo6q0aD2iCZ&X-Amz-Signature=544318297ced3bd3ec4265ffb60c1c993147d986d7f2895e88bb0aff02725fb1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEEUE7MV%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQChqxA1uv8DEdRRuoasPGVGhv24ZvqD5KWQweIrKowtZgIhAIFAFSV%2BXlI4n01C1URnn8rdKJ%2BqqDkh16XeLmM7KMECKv8DCHsQABoMNjM3NDIzMTgzODA1IgwL3BcDNty0HmzqU3Uq3AO1%2FYgCzjBwk0tKxV0omQfm5eQUT%2BLGBt1CeVUDCtGULvxJ2%2Fa%2BybJqrg5QiAm0TJsl7ULanJ7s5MFDnRc7z%2BsClvDG%2BXG0sdKctCECFYcbM03lKUeM4RAcQk8UgZ7w8deijzETmNaOawcLFqVBMXvWiOFs9fAblJT%2B6uJ12NGAiK4RfYxh2uxXxzVCbnc2UT6Sfgs%2Bv%2ByMsbmAE%2F82BIy%2F94rfE1%2FHSkS4Oi24O4M32hwJgFdsgTo35UIm9XAd8vbNunLyqT4YpZENRG1zc6ISgwHMVhbXJUGEGOjjhfsFsqIfeXXZ6vzKOPnBrpOrY5ff5hhAhTFsPG8812Zu%2FQOVJFAgilhLSJLsLRV4Fe8wDcoPiIhQM4OQXXKkHsAQFVfltWM070EIXTj0AX08P%2BLSumfO8MLf2zgwoOKIY5yXGji3kf9A2i7lctznuEDBvxTHDLtOmd7Mf2Qkfs%2BNFOk%2FggE60n0FIGBGiW6ofo6sJxFcLq3ovGgsvaW2TWN43Urp082KeVFhZSQyKimOzBsu8APqvzAvQFc68v5tgruHcdxrbMUaDCCGgIJf92dWxDP6tGUeqw%2FcNArVQKqL8jzwbTxJhsy%2B8yCpFNNOgACQ2WD%2B42ptoWVYfKKcrjD9utW%2FBjqkAVnf5s%2Fd68j3XHB5ce%2BZW5ZZJ8%2BCSyWytDJJe8W8JtpzBI0JBvVs%2BZFEWMfd28YBQDScNzYulj89dxnKN1%2BEZfB2G1eS78rfDqbxFpt7VlyV%2BvkgyACNOX%2BVhUwkg34C2TS9Gunqs9GCCt2%2BySupXxGI5BNACu3MzMRgfnBAYDyesIGQBLG9tMtVQLQdTQt%2BV5cnACsyKr3XiN%2BdO0sDYSjlEAlg&X-Amz-Signature=6c063f24ebd74f3214b4f543756270f97cce8f72ef478552f109a23b46d15f70&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVNY7IXA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCWb1vohKwN6hDpuylnJG9or9R8fOTTv%2FHyxKgDgt5uxwIhAKAtbGsHv%2FbN3ydKvK7fcVmNqdOuSYT7%2BRkUTcK7UTHYKv8DCHsQABoMNjM3NDIzMTgzODA1IgybxUI8K6ui61fXzmAq3APmUp00XRkyF2x3spYG2pdZwbl3tSz56%2FzeHus%2BZKCKRGMlVL7fOfOyKpxY6f%2F4IGcgaAXqNRLHDVwyiirfCwfep1U3pXRuuPXoKISa%2F6f5F17OKd7rukd9pvkxZJukTY%2BYMsuJcx86MsMoteppU6vHy5dFzj7qrl%2F%2FGRpiSigKPBQB%2Ft3rLLnsiJSCyn7ihml6SKXAMN9IAJ8xRU9qdFcEK6O6dPc9FQ9mpL%2F0l0abEUbhvCJKHKHocYjc%2F2VJpyevC1HSrPxbJ8PdwVbmTolFPewKdVjlZqGMamkilssNoQzG%2FzZ%2BBbKQHceW1e44QnQrtickZVDcvIA6rGJCt5ZYhQh4bNoIlmRWr9M%2BbEfTw8CPNiLXfxcpaq2%2BKpzGmnHw7Y%2BlGtiE1Te3xCQLJhU19kGioCxe5ypUuMHAtMHkcA7LbkeTUHlJiB4%2BC1PKB7i5C8odernsKA6n3lOt0zUQr0eixngQ3vhxv1Sri46hWQpJ2eulTSGI%2FKb2hL2e3%2BDwW%2BfJP5m5haurcHRYdargh5fUGAZ%2FAwACA7wiXlpByAi5wWNleKol%2F5FSnVIj%2FIOo4jo6Rxj%2B3Ui9uHqaoGfYncWR6pmNevq%2FkmiOji43k8EghtygEAq%2Fk8LIrjCVu9W%2FBjqkAQToUtUsH%2BgTZVkoElYw5ft1qvz7iYE4fUrGv5atKu08UWCz23YRQ4jxDgINLusCb7gsluB%2FQ2Pc0GPalFkt40K7RK0ILdXfIV9ToH9CstIVs0jGi%2BzcQVg0xLJHTe1vSovO1UpTI0l6vKO4pKYTv%2Bf6%2Bi6Po1bCFB8ftV2tZ8oVVP1P%2Ft%2FZiYvM9bbf4gbzyJPgNF2kevGr%2BBbzGlF0D%2BJcukzw&X-Amz-Signature=44d83bf433c4e5bf544f7aacb8adfb6a7e71fd1e572b4abcfd6644769b380c66&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A26TAIF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIGNjlYo993AKeW%2FK5u4XCc9v1QTeAUBhv2QmuwkhV5iFAiEAvnzleS8FopSbWGTC39PBy%2FYCf%2FrWxRmqXzcdVZJFcOIq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDB8gUwaLOw8%2FOXFlvCrcA2x6n7uL9f1Lfe8nLQA3a4Jmw0kkvX5%2B6Y3Ff%2BhHjMbm8s%2Ff0BGMOmT51gVpBDAQOYIlvcu1%2BNTa%2FtbYn4qDSgNPmZwjoaE6ZcQ%2BrYlrPCErnyVwYBG%2Bo4zsniNZqFRrEL6x7f2WjlBhOV0ZKMW12HsSgKWQ8kJz7j8GX3Wl75vAQ9Oc5tY05Tt4MjX6%2Bd5AVBugRFq69IzS01qp86pSdyShbkY1sdfM5lG3DIDLFyF5JjVeT%2BiHG0LDW9jM36cBQExIIpS4IzqkToYBmPq4CvID73z4lOcXJMMnt2XtLr3jyVE%2Brz%2BRqKluazzln9OkGhHjwOt5mSe9A%2F1vA%2B%2FXzUSyESGOgA8dzG3fOz4y%2FYlUn47c239BiOvZRUwcl3x6MwJrYAi5n0rFh4OD9jFJWL2q6ENBowBCch1F5Q9F8%2FDNQpKUxliPM46LRyhQ%2Bw%2BtZ34QdPA0b7OpXiyWbJzJnDnZV07X7%2B6c3fNsXWhQq3HDV3bZwAPH9k9ZvwoRQn30WlOVW6Ko0keORr0tgxHJNTBY1ZS8fK6n1H3wWY6I4uzbSzfqD6NuwOBMjJUvUizlwO7%2FUaVYFW%2FMP%2FIFQeCQUB32EYq7Vv%2BlGS4YAqQArHONd4%2BAHe38u4%2FG4MOWMKa71b8GOqUBhXqvQxC18nl%2FM6irbs9Hoi%2BUTcJ2tr%2B06hLEA4iIudNxzDSTzpxnT3QqxAOD9nztoaSSV6l8AaOJkD40wdy8MOTnEZlS4rP3ObblNoCPFcUfitSud3Coko5Og8CpOHYzsqkxnnFp%2B13MZij7OcJIteIUNEvfFT2ef2%2BOXtU%2BGVjyjEyGGi7OTHKXAhQRQSnmxVvRZrNijF0Y5v1gbmo6q0aD2iCZ&X-Amz-Signature=1549e08f1e9f0ea3f51d2894337d383ec5afaf17cf6f2e72103d46d99a0ea7a2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

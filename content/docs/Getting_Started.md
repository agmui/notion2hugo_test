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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA3LD7S3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANRAE7YlmTf3S7GcoUKfKQ0BMjxwqEMUy7hevNIcPCOAiA%2BmVQY1QPRZ3vNhGhkL2aSBDijrX2Uk03Ku5NAADHo3yqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHSTc1CUqgvbDFOxnKtwD%2Bmx22hTANHmiUAyfzxb%2FC6eHfOvB%2F%2FfF4i8ndlnJVcg5BC%2B%2FSdFLAHOLg89jLTwPqAkQ4oH4cgfTF0dGKGK4UQlPR1tP9dqK9UKMFLpmY8xVasq%2BWIiXhPttUlpFDk6cjTuHI%2BvUMJX8NIBv%2FR6nmqqog7fupeRg6mYCS%2BtbxZPme%2FRiHDdrgpXbvuYlhjUGupRkPkfxH9ye%2FPkq5oEtvchl%2FrFutJqP5zXHNRugmZElMPU0wkkw8QhJkxRbRvjV%2ByS%2FZBnOkFSv4ghWSZ6K2w4xAkNPJgHjLJ8G1WKabliS6DEohT%2FyswnN4pM18ZLFYJ8nhqEtPgh%2BghRe%2Bro2RdNNP%2B5Y9lEg%2FxF%2FabO5eMXQAAvMMPecFAHlEP6ayfNo0kGqoTEqsz6oklLVVu%2Bg3dfSFQN5wQEt0W1uQXmaF4Hni4szFuacMf5LudOghnsMTY8jeYfO817Si%2FLQ15qHU491hCbhSkqO%2FEZGNP%2FUKnAOQ0IueOJu1cn6NC5VH33RCV5X1azPr1j9Rf%2FxUQxyPCW63CbkLz8sPg1MTVnfK8l7KNpQqPkmSKuREyVmlR1OSf0%2Bg5rUX5yTmNFq0zE0d7W9LjfoJ8jGqEqMIkNU3UzXmQpWMauSiiSe3yMwhMrMwgY6pgGobJjyqkQGoSsjvH8i9TwxMRtFKbjKoHiuVJAyna2cdUFX47C4XsNht1hmm4jSOlCLSLTh6CnzPD3reQ2bsN3UiSZR%2FXQcCL%2BiW8Deax8AVkhPvuOWcDHuFR9pmMPg%2BjIjmu1pPBVA3R80xz9WAvKDyxok%2FUirXK%2BtovI6Vj923ASkJRyhGh7BmXFDT%2FQhyOc4euHGuII052cjNb06nj0Z7P%2B0wxRP&X-Amz-Signature=5300ff1a4a0de9d6c430648da8375e9bd75a14b6e6cad7eaf1903ad6f212b54f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA3LD7S3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANRAE7YlmTf3S7GcoUKfKQ0BMjxwqEMUy7hevNIcPCOAiA%2BmVQY1QPRZ3vNhGhkL2aSBDijrX2Uk03Ku5NAADHo3yqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHSTc1CUqgvbDFOxnKtwD%2Bmx22hTANHmiUAyfzxb%2FC6eHfOvB%2F%2FfF4i8ndlnJVcg5BC%2B%2FSdFLAHOLg89jLTwPqAkQ4oH4cgfTF0dGKGK4UQlPR1tP9dqK9UKMFLpmY8xVasq%2BWIiXhPttUlpFDk6cjTuHI%2BvUMJX8NIBv%2FR6nmqqog7fupeRg6mYCS%2BtbxZPme%2FRiHDdrgpXbvuYlhjUGupRkPkfxH9ye%2FPkq5oEtvchl%2FrFutJqP5zXHNRugmZElMPU0wkkw8QhJkxRbRvjV%2ByS%2FZBnOkFSv4ghWSZ6K2w4xAkNPJgHjLJ8G1WKabliS6DEohT%2FyswnN4pM18ZLFYJ8nhqEtPgh%2BghRe%2Bro2RdNNP%2B5Y9lEg%2FxF%2FabO5eMXQAAvMMPecFAHlEP6ayfNo0kGqoTEqsz6oklLVVu%2Bg3dfSFQN5wQEt0W1uQXmaF4Hni4szFuacMf5LudOghnsMTY8jeYfO817Si%2FLQ15qHU491hCbhSkqO%2FEZGNP%2FUKnAOQ0IueOJu1cn6NC5VH33RCV5X1azPr1j9Rf%2FxUQxyPCW63CbkLz8sPg1MTVnfK8l7KNpQqPkmSKuREyVmlR1OSf0%2Bg5rUX5yTmNFq0zE0d7W9LjfoJ8jGqEqMIkNU3UzXmQpWMauSiiSe3yMwhMrMwgY6pgGobJjyqkQGoSsjvH8i9TwxMRtFKbjKoHiuVJAyna2cdUFX47C4XsNht1hmm4jSOlCLSLTh6CnzPD3reQ2bsN3UiSZR%2FXQcCL%2BiW8Deax8AVkhPvuOWcDHuFR9pmMPg%2BjIjmu1pPBVA3R80xz9WAvKDyxok%2FUirXK%2BtovI6Vj923ASkJRyhGh7BmXFDT%2FQhyOc4euHGuII052cjNb06nj0Z7P%2B0wxRP&X-Amz-Signature=f732df28f745cecbf10c2893a5444a32e25e33105e8d6bdcb9a704a4867fd6c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA3LD7S3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANRAE7YlmTf3S7GcoUKfKQ0BMjxwqEMUy7hevNIcPCOAiA%2BmVQY1QPRZ3vNhGhkL2aSBDijrX2Uk03Ku5NAADHo3yqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHSTc1CUqgvbDFOxnKtwD%2Bmx22hTANHmiUAyfzxb%2FC6eHfOvB%2F%2FfF4i8ndlnJVcg5BC%2B%2FSdFLAHOLg89jLTwPqAkQ4oH4cgfTF0dGKGK4UQlPR1tP9dqK9UKMFLpmY8xVasq%2BWIiXhPttUlpFDk6cjTuHI%2BvUMJX8NIBv%2FR6nmqqog7fupeRg6mYCS%2BtbxZPme%2FRiHDdrgpXbvuYlhjUGupRkPkfxH9ye%2FPkq5oEtvchl%2FrFutJqP5zXHNRugmZElMPU0wkkw8QhJkxRbRvjV%2ByS%2FZBnOkFSv4ghWSZ6K2w4xAkNPJgHjLJ8G1WKabliS6DEohT%2FyswnN4pM18ZLFYJ8nhqEtPgh%2BghRe%2Bro2RdNNP%2B5Y9lEg%2FxF%2FabO5eMXQAAvMMPecFAHlEP6ayfNo0kGqoTEqsz6oklLVVu%2Bg3dfSFQN5wQEt0W1uQXmaF4Hni4szFuacMf5LudOghnsMTY8jeYfO817Si%2FLQ15qHU491hCbhSkqO%2FEZGNP%2FUKnAOQ0IueOJu1cn6NC5VH33RCV5X1azPr1j9Rf%2FxUQxyPCW63CbkLz8sPg1MTVnfK8l7KNpQqPkmSKuREyVmlR1OSf0%2Bg5rUX5yTmNFq0zE0d7W9LjfoJ8jGqEqMIkNU3UzXmQpWMauSiiSe3yMwhMrMwgY6pgGobJjyqkQGoSsjvH8i9TwxMRtFKbjKoHiuVJAyna2cdUFX47C4XsNht1hmm4jSOlCLSLTh6CnzPD3reQ2bsN3UiSZR%2FXQcCL%2BiW8Deax8AVkhPvuOWcDHuFR9pmMPg%2BjIjmu1pPBVA3R80xz9WAvKDyxok%2FUirXK%2BtovI6Vj923ASkJRyhGh7BmXFDT%2FQhyOc4euHGuII052cjNb06nj0Z7P%2B0wxRP&X-Amz-Signature=1f776b0d47a5d1a9d25190d0c043ec3674f21b5093ab07d344c043d345a4434a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IS2H55O%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdaFG4yI5457OtrFFHgGe%2BwBTKrS4hnm2ma8YL1vfFUwIhAI13fNLrDKqJh1w0wq5%2BvdGgzbXinsc8bEdQSpoGANyOKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsIU4NLBPUJdR3izoq3ANDnjhlN%2F0pDh1lIytlzFtS%2BxPWZl8jpBx%2B1szdBFSfzcVMxkMdEvXdyqFrFy6%2FFkL3Rgq6%2Fug%2FfUiv9GGY9ATBSBqiJUh%2Bb2fkFUK42vnZ34cytAs19u1D0a%2BijmzZpF1jup1sjEcxoDDOBSdNyqwKaI28asKDPEa8DulJSPCAXyRTOLeLU5%2BSjnvERrTKW7mylV3TUFC8eQ6EMGpXwP7usbUQvTsGfNbV3xMlOWLYn2Cw%2BFcGYboZCUJssKl64T4I4hYiu4O8yJZs8MJzmHymv5sV1lY77aGPTx0q4h%2Fx8jniq5xlxGPIIPd%2FNiAPdzN3S2uM3E7B0MiZb8Z1y07Ir3gvuHcH080d9Cp7MJ2wFvGrUJrVZcFniSJ6uXz1wCQkr6%2BCN7J2UKOSpR97Ov%2FXNN%2B2Clc5ukLzXzHAYq2oguPjEMoyLOAMIsvsoJu4088dIdNNDY8wIR0onv5RcXcR6Y2ZkC67e6xOnotfmgS7cu2Teii9PpQiWiRe5ezUFa1dwW%2FG0gwMZNV1nc70Fuy%2BQc7sZl1fIQQjfxPKOy5o%2F1qq7qIcw9sBG8pJy9imb04e%2B0noKfpargeNaHHYayLLiJcDg%2FzGb%2Bcpa2vMOO5RW2b2XBrg8tnVCxyz%2FzC2%2B8vCBjqkAZoVtlRRGh6%2BpBXJ3kF6Xff%2FiilXA8eHQzj86UQA3f2Kam2kN0buNIObQ6bib9EOhi6SXWEeI8aU15KsNUowjK%2BI7Vbmw3fpEFl0130YTe0a5UydETpaYPZZ8dFgCqoxQz4d7mnBAiXFg658NXu8sFiXr50evSNRjKPJp%2BrRhETXdB34iJhz9J59LU2gpH%2BDhPNLK1zw%2F8lpZcXQwrCE2lvRQ8Kb&X-Amz-Signature=c234c172b6aa9063319a1d66f72f387f08f7e4a61e122a5b1aa8219755672972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CARQTR4%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ2ckes%2F31WsPxIaQim6dsjLD5RYb6D6QLn9JiL8pk6gIhALI18KCcM%2BhGgv1uQLBEkT1BwwWL4fZgFdbia%2FtawQRIKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6ZEcB0%2FqI2J7LiEYq3AODZrA01Rcdok7y5PSu6mh0BPccetpgwEfx6aS2%2FVV5OlG2m5IOZKd%2BkA%2BZfZcrvHryYdiSaYj4xCMDUNSIYEXUcexJY0ZDlxcqwOkGAJzItciJKXfsV3ZZ1c27EyMs2ujtFmd1pU1f%2BIzBSBvH6K7UHL19JzNIizteu%2BVgACSpM2KeCI5WhRd%2BAqx0tT6HDiTe34MkJCbqQf%2F4H1ZCzQPt7LoIfZY2Rzs9hwMyONucDroda2e17StvtZbciE98eetPTc5cAdFjG9fBizkTlL9uawwltNelguV9t98Du72GrpR2In94AZM2%2Bj%2FueKwKHqBc6B1oiHeWdpTQh6b5%2FZ7f3uN6l2qFLVaGp5PKYBMTPSUlbuXAcS2FzQVSIfMmiQu0DZOQxJ9kU3OjqCOyOM8E1Rkqlp2sgjXDmsTjr7e6y2m0UTBd1QZOlEGyeVFQ%2F7pjeXSKOfemJWswG2jpGRUAu29F%2BssX%2FlKNrnGJblVuoU%2Bqnfy%2BsT6WJfiour%2Fb%2BD8hK3RUfJGb8t5feYgMa2%2FepYflC4GqCnUO2hJ8cGCn%2BrjoP9YVMh29o5Q0YfEOe1a2DX9I7iebSv8oGEaFkmzi%2FriHsOAjmW5Fg1OLo7GISrw%2Fu1XoK56eTkWOxDC9%2B8vCBjqkAYOGwxwAuH1DJqahjuZB7eqkzftxy7yWJ4M0MtP6E14tiNcizvakVQX2K4Im%2FFtNrmN00kYYEatidhFPLIxvgMIp5DJ3ElTLW6lEqJh4LFeil%2FaAOAF6aR7MQEX40eJ7uTbe%2BPaUM%2FKQmTTP7jRIe6qpqUfUm2dnLu0M%2FCbMvlh%2BtAXVah3ctRIl%2FVBGQkVvqAXw1hjbCTYmx9J7hNuGjs4YD7Et&X-Amz-Signature=06bd8168841884715354b71f577d4b66a1be2fe08f2bad43f40a9dfcfefda05e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA3LD7S3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANRAE7YlmTf3S7GcoUKfKQ0BMjxwqEMUy7hevNIcPCOAiA%2BmVQY1QPRZ3vNhGhkL2aSBDijrX2Uk03Ku5NAADHo3yqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHSTc1CUqgvbDFOxnKtwD%2Bmx22hTANHmiUAyfzxb%2FC6eHfOvB%2F%2FfF4i8ndlnJVcg5BC%2B%2FSdFLAHOLg89jLTwPqAkQ4oH4cgfTF0dGKGK4UQlPR1tP9dqK9UKMFLpmY8xVasq%2BWIiXhPttUlpFDk6cjTuHI%2BvUMJX8NIBv%2FR6nmqqog7fupeRg6mYCS%2BtbxZPme%2FRiHDdrgpXbvuYlhjUGupRkPkfxH9ye%2FPkq5oEtvchl%2FrFutJqP5zXHNRugmZElMPU0wkkw8QhJkxRbRvjV%2ByS%2FZBnOkFSv4ghWSZ6K2w4xAkNPJgHjLJ8G1WKabliS6DEohT%2FyswnN4pM18ZLFYJ8nhqEtPgh%2BghRe%2Bro2RdNNP%2B5Y9lEg%2FxF%2FabO5eMXQAAvMMPecFAHlEP6ayfNo0kGqoTEqsz6oklLVVu%2Bg3dfSFQN5wQEt0W1uQXmaF4Hni4szFuacMf5LudOghnsMTY8jeYfO817Si%2FLQ15qHU491hCbhSkqO%2FEZGNP%2FUKnAOQ0IueOJu1cn6NC5VH33RCV5X1azPr1j9Rf%2FxUQxyPCW63CbkLz8sPg1MTVnfK8l7KNpQqPkmSKuREyVmlR1OSf0%2Bg5rUX5yTmNFq0zE0d7W9LjfoJ8jGqEqMIkNU3UzXmQpWMauSiiSe3yMwhMrMwgY6pgGobJjyqkQGoSsjvH8i9TwxMRtFKbjKoHiuVJAyna2cdUFX47C4XsNht1hmm4jSOlCLSLTh6CnzPD3reQ2bsN3UiSZR%2FXQcCL%2BiW8Deax8AVkhPvuOWcDHuFR9pmMPg%2BjIjmu1pPBVA3R80xz9WAvKDyxok%2FUirXK%2BtovI6Vj923ASkJRyhGh7BmXFDT%2FQhyOc4euHGuII052cjNb06nj0Z7P%2B0wxRP&X-Amz-Signature=00b6620bb379cae028e77f15ed7504de7e20ae23224ee1514245afbe1aba950e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRKXWRV5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCHCWpCaN7bmq2fu4M3XEaTJTcoklP5Bb3VJeIH5%2F42uwIhAL2xVFlLs5Svki0yOFFb9D3yiy8F%2FZaxdSTiIxNnAvyyKv8DCDYQABoMNjM3NDIzMTgzODA1IgzmCwHUXD7m6NwdEXwq3AN0i94Gj15CQziuq6SsM9Pi59tVU4FkSEpvf%2BMtpSzb%2FcbE7X7IlOjNyRUpeoPPf8LIh0SP9g3%2FFlkvR9OEiyqpvTnxP9OUuyN8uLzlLgwHime3zGn6sM30dfcM4l44ebAYN8A8ykyn4uTznlo6QlevoHeH6I78%2FLHdrW9OkBDPTCrJBnRpM3FwCcRYitAwSPxuRxmHLzkz%2FGr22zNUxOoF9VK2DucPzhAfMniuyDb4hpXZmtXWcaipDomjwnCBAnD4QQocSqAx0WwsnqTfGwIz4oxFxre6ur5prJSEAjDBYTFyR6DPoE%2BINEhx5w2Tpr45E6IJQxPQ5T7gnTxBHQR313HVvoB0aMPMDyTTHDqJ1SCMluG6fw7BpI8MrAqd9bZvWyllL1xd7x67cz2n2vzzMJ7pn4Uq1SWRlajYbYl738POfebO2yOHXeAC%2BX9Mhb1xpE8Mfcc519fA%2B1oP1Ubxe%2FWitGWnLyEVZfDdxAZuhngoHM1aR%2BrljbCTkK2nIV9pzkRucgODLIJsuH5jn01kQ%2BXAN8%2BqhY03guGrky0LSARP01B2k50fj3MrAUsXgy0RE7DCVqSnyOkSAKSTsVKdgkgk01FeyHuZf6BVHg8h3PbLZTelT%2F37XJz9NjCDzLfCBjqkAQsiePOOouTm2XILaqZ6k7Xm%2F3%2FwTSBkjEXczy6qzxamhBYhxaEpEa2fCzUo%2FSPCxI1NX1flNRIK0Fgl1vtS3Hue5y%2FU%2FxannBJQ3B63QMc1%2FvdwQjHisGmCc%2FK%2BWr%2FhlkXTSap8TXiI%2BN%2Boxuc%2Bg1UlAbWIFwtdqBxHex3F2IBJZKaBHL0ciXvjAPpv826wabqn3Ww7zjDu1AIR%2FDY7JS3Tf4s9&X-Amz-Signature=8d9822ab63ed709f12da28035475e3e2738430f9f45b675b88218a88abeb6051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRKXWRV5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCHCWpCaN7bmq2fu4M3XEaTJTcoklP5Bb3VJeIH5%2F42uwIhAL2xVFlLs5Svki0yOFFb9D3yiy8F%2FZaxdSTiIxNnAvyyKv8DCDYQABoMNjM3NDIzMTgzODA1IgzmCwHUXD7m6NwdEXwq3AN0i94Gj15CQziuq6SsM9Pi59tVU4FkSEpvf%2BMtpSzb%2FcbE7X7IlOjNyRUpeoPPf8LIh0SP9g3%2FFlkvR9OEiyqpvTnxP9OUuyN8uLzlLgwHime3zGn6sM30dfcM4l44ebAYN8A8ykyn4uTznlo6QlevoHeH6I78%2FLHdrW9OkBDPTCrJBnRpM3FwCcRYitAwSPxuRxmHLzkz%2FGr22zNUxOoF9VK2DucPzhAfMniuyDb4hpXZmtXWcaipDomjwnCBAnD4QQocSqAx0WwsnqTfGwIz4oxFxre6ur5prJSEAjDBYTFyR6DPoE%2BINEhx5w2Tpr45E6IJQxPQ5T7gnTxBHQR313HVvoB0aMPMDyTTHDqJ1SCMluG6fw7BpI8MrAqd9bZvWyllL1xd7x67cz2n2vzzMJ7pn4Uq1SWRlajYbYl738POfebO2yOHXeAC%2BX9Mhb1xpE8Mfcc519fA%2B1oP1Ubxe%2FWitGWnLyEVZfDdxAZuhngoHM1aR%2BrljbCTkK2nIV9pzkRucgODLIJsuH5jn01kQ%2BXAN8%2BqhY03guGrky0LSARP01B2k50fj3MrAUsXgy0RE7DCVqSnyOkSAKSTsVKdgkgk01FeyHuZf6BVHg8h3PbLZTelT%2F37XJz9NjCDzLfCBjqkAQsiePOOouTm2XILaqZ6k7Xm%2F3%2FwTSBkjEXczy6qzxamhBYhxaEpEa2fCzUo%2FSPCxI1NX1flNRIK0Fgl1vtS3Hue5y%2FU%2FxannBJQ3B63QMc1%2FvdwQjHisGmCc%2FK%2BWr%2FhlkXTSap8TXiI%2BN%2Boxuc%2Bg1UlAbWIFwtdqBxHex3F2IBJZKaBHL0ciXvjAPpv826wabqn3Ww7zjDu1AIR%2FDY7JS3Tf4s9&X-Amz-Signature=7907c070878d904f0617f6ed7388a903272848ac18388f37c3c40571843884bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRKXWRV5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCHCWpCaN7bmq2fu4M3XEaTJTcoklP5Bb3VJeIH5%2F42uwIhAL2xVFlLs5Svki0yOFFb9D3yiy8F%2FZaxdSTiIxNnAvyyKv8DCDYQABoMNjM3NDIzMTgzODA1IgzmCwHUXD7m6NwdEXwq3AN0i94Gj15CQziuq6SsM9Pi59tVU4FkSEpvf%2BMtpSzb%2FcbE7X7IlOjNyRUpeoPPf8LIh0SP9g3%2FFlkvR9OEiyqpvTnxP9OUuyN8uLzlLgwHime3zGn6sM30dfcM4l44ebAYN8A8ykyn4uTznlo6QlevoHeH6I78%2FLHdrW9OkBDPTCrJBnRpM3FwCcRYitAwSPxuRxmHLzkz%2FGr22zNUxOoF9VK2DucPzhAfMniuyDb4hpXZmtXWcaipDomjwnCBAnD4QQocSqAx0WwsnqTfGwIz4oxFxre6ur5prJSEAjDBYTFyR6DPoE%2BINEhx5w2Tpr45E6IJQxPQ5T7gnTxBHQR313HVvoB0aMPMDyTTHDqJ1SCMluG6fw7BpI8MrAqd9bZvWyllL1xd7x67cz2n2vzzMJ7pn4Uq1SWRlajYbYl738POfebO2yOHXeAC%2BX9Mhb1xpE8Mfcc519fA%2B1oP1Ubxe%2FWitGWnLyEVZfDdxAZuhngoHM1aR%2BrljbCTkK2nIV9pzkRucgODLIJsuH5jn01kQ%2BXAN8%2BqhY03guGrky0LSARP01B2k50fj3MrAUsXgy0RE7DCVqSnyOkSAKSTsVKdgkgk01FeyHuZf6BVHg8h3PbLZTelT%2F37XJz9NjCDzLfCBjqkAQsiePOOouTm2XILaqZ6k7Xm%2F3%2FwTSBkjEXczy6qzxamhBYhxaEpEa2fCzUo%2FSPCxI1NX1flNRIK0Fgl1vtS3Hue5y%2FU%2FxannBJQ3B63QMc1%2FvdwQjHisGmCc%2FK%2BWr%2FhlkXTSap8TXiI%2BN%2Boxuc%2Bg1UlAbWIFwtdqBxHex3F2IBJZKaBHL0ciXvjAPpv826wabqn3Ww7zjDu1AIR%2FDY7JS3Tf4s9&X-Amz-Signature=c5186e8e4c801bdbcd8afab77b2399634e1b2f26351ed263214a24546201c580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA6766SD%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDGESyF%2BuGc9oW8zG5FzYn7XGvWtYPS7%2FSHiZb7xDvM9AIgEMfSMoz2dF0IMG%2Fkwbks3wtfpUKWKjb54XY9n0uL9DIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPGwYwpysCCLgExbQCrcA77ZrXsj3u5EV%2Bq4oy%2BqJM1owY32H9XXsEev%2FFPc9E%2F8lPLutvzkipWbRxEFk5uVvJTPJN2uGyo%2Bc0f1Mk9UGEQ3ZDLfNqGSIYazOuacXLmwjgSIb%2Bnky96VWxzGRsH1ADDwiOd%2Fgok5iWHIA4OZdQ7HIKDR1DX39XawG2TDtkJ%2B4MqvElp8tJ3%2FJnzfZljQxXuXIjTr0YI1W0%2FZgYDB%2FLDnv8IY9VArtVCFgyE1mb5AXF8eGlKhCMzP%2FR5Hg3HU0AdIEDL%2F7qpDK3BpovBEmIEeg2oJC7HVaL%2BSTMHp25GAGQJ7kCc597SnxwbeNW5TvBk2wRKKUICz0Kj3IogcXT92cXqE0p1bXVfUsqTxARLHWj3WHa1ZMrucdiP5Az4NaoUAY4gjZmtxJt3uvn2goipD7ElMyZCI0QubkHQBtSjvbNwrvtUmijbXJGszPR5EOMvGW%2B%2BWP5pQ7tx1%2B5jGy20UI2nVDiaPMnUdDnId0V3aL%2FrfcMTLWF1kxxoHWN4CKLbAORvGsth%2Bjk4Q3%2BZWg3b4eGhGluBZ3zTguGXibLh62kM3p6%2Fd%2FxuZWnwCuM7WJUsqK3e1cgJ8o7F0KjHCwzHZwo%2B%2BlwbScw5HXp89xhxXjABm3SDxILLH69hlMJDMt8IGOqUBaUYaDn4yRQ4s4B18uqd5aEiuF%2B89sr1ZxGqh4W9ZrO21ucN%2BNIJRpv86fM8KtrWiqftdoFcOqylVN3hBJh1GP0MxrC%2BgYrWWaOTsEwwhNVVkPp9lfBoqc8fD95%2FhCxy6z2EVGxR4LFmUbV1IPKN92X0rbCpu2Yi93Gr2DMLw5XnT7VuD1FTjAt2GhpSlQ3toCs0elRN0syVpksoOHU8Fp1jT0Jzi&X-Amz-Signature=957406b1fd69d1713ee0df9e49b9b5d27c5d46f92c26b4ad87d9d065ee801a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPA2EP2T%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC4FunG90iKGfkqQ5y2RTXFJfnwCn8%2FzYaBlYAkxFnYlAIgEC7FDqkIyZyEVdp9AMk816bErZyyymhhZH4Up3bAUNAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPkHhzynHHqRMiA5BircA6xJ%2BL4LLj4NWJ8wND%2BdqHvu%2BsTfheLeYEP8Ss0gxcRjP0eFRAZqrzVIwORcJ02T3Y3sswZnPjEpveH4Xxo3dHo9UyELy3EqB16zFl8kHTcSXWGZmshEEDE7M4MpDPH3CakCnxqJTAa4VOfdTFT21PAX%2BF2JWSeHamW4hirDzuB0e%2BGKLAlnvmTt2ngQ1zXM2L359y4PFGFHymEMW7lEzGYQu2%2BeAIdO5OQdA60x8%2F3y5O92zm0J7X3dFosFfs7CMLiy4hYbQSEjITO1G8WMzBGd6WjCEXylZ4AKPzuDaP3rLAYDH87xNu4bgNcTEBj9HNN4dH3t9TImSqozPkqWMCOab%2Bxhny7a9gvvEFq4iCZBgsfzLsBtQaxGtkcZW%2B4OqRpnvRPKs6HH7kE2N0u1PuagEnMekg6K%2B8hzha3hzzXjAVwerufN3MLKx64%2F5d%2FnqKVW9bgjhoAXBNZFc4mR3g6ZMvku0tplPp0zVLAf3RjjoP15WfCdfWXiEFVnNsjJvwmXzRa5QPzVCMJB3oeWwaFQlcR9rKe7NCwVyrk6fcxOXcAsBG8iYv6b8pxMnEsuMhiLHVQY0jfzpTjCd6L26ydNqi5u6eK18fUdsZQv3z7UNxFeV%2Bk8ydPxCunhMMPMt8IGOqUB7x0Tlk9jAAt9nkqqan8fjdTvowfwmuUHiayxOltFOhBK%2FSMkNY%2F7ElRPlAUtyf2jMB0Q0PdCDwyJWdccA7Stszy0Q4cNqFbA%2FNpvIl2Beas%2BNHsUiTKSPtecyTULBeCwikY2RQ3pKLnXrVnnk8xHylyFl0sygcSyNV9lERqIv8J3tVnFehBBJl%2FXX%2Fb8ZCs6MWZkbcKgRriOL4XTC%2BUgv82uk6BM&X-Amz-Signature=49008f0b684d5fb6bf91c35f5b86b2d14634f3c318fc896f3643a9810414d86b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRKXWRV5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCHCWpCaN7bmq2fu4M3XEaTJTcoklP5Bb3VJeIH5%2F42uwIhAL2xVFlLs5Svki0yOFFb9D3yiy8F%2FZaxdSTiIxNnAvyyKv8DCDYQABoMNjM3NDIzMTgzODA1IgzmCwHUXD7m6NwdEXwq3AN0i94Gj15CQziuq6SsM9Pi59tVU4FkSEpvf%2BMtpSzb%2FcbE7X7IlOjNyRUpeoPPf8LIh0SP9g3%2FFlkvR9OEiyqpvTnxP9OUuyN8uLzlLgwHime3zGn6sM30dfcM4l44ebAYN8A8ykyn4uTznlo6QlevoHeH6I78%2FLHdrW9OkBDPTCrJBnRpM3FwCcRYitAwSPxuRxmHLzkz%2FGr22zNUxOoF9VK2DucPzhAfMniuyDb4hpXZmtXWcaipDomjwnCBAnD4QQocSqAx0WwsnqTfGwIz4oxFxre6ur5prJSEAjDBYTFyR6DPoE%2BINEhx5w2Tpr45E6IJQxPQ5T7gnTxBHQR313HVvoB0aMPMDyTTHDqJ1SCMluG6fw7BpI8MrAqd9bZvWyllL1xd7x67cz2n2vzzMJ7pn4Uq1SWRlajYbYl738POfebO2yOHXeAC%2BX9Mhb1xpE8Mfcc519fA%2B1oP1Ubxe%2FWitGWnLyEVZfDdxAZuhngoHM1aR%2BrljbCTkK2nIV9pzkRucgODLIJsuH5jn01kQ%2BXAN8%2BqhY03guGrky0LSARP01B2k50fj3MrAUsXgy0RE7DCVqSnyOkSAKSTsVKdgkgk01FeyHuZf6BVHg8h3PbLZTelT%2F37XJz9NjCDzLfCBjqkAQsiePOOouTm2XILaqZ6k7Xm%2F3%2FwTSBkjEXczy6qzxamhBYhxaEpEa2fCzUo%2FSPCxI1NX1flNRIK0Fgl1vtS3Hue5y%2FU%2FxannBJQ3B63QMc1%2FvdwQjHisGmCc%2FK%2BWr%2FhlkXTSap8TXiI%2BN%2Boxuc%2Bg1UlAbWIFwtdqBxHex3F2IBJZKaBHL0ciXvjAPpv826wabqn3Ww7zjDu1AIR%2FDY7JS3Tf4s9&X-Amz-Signature=d69e796e691d18bc8b1619927b80ff89a0e6ef10c34bd392be299841f5d47ee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMWQORQP%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCWadAmIJ0BGnoL654gkC7MYmG37HwWAxN%2BAWPj%2BRAnpQIgWWsOMLW2Enbc%2Fwj3O1WodOFnfoH6Oytp%2Fg7bagr8rJEq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOcAIUDKO6I%2BYmZYuSrcAy3ZTZIiLOxfbE9iTxGhw6aZdrQgbTQr7tlhB8bvpbcLKlgqItKUgDFTJJuWWDUdHZnPCiYe5j29KeqwjnDmvWsTz45RhchIWYunda2Rrp%2FHHLFzqZQMK3pyMV5wBY5I8unLE3E9jUF2%2Bh3rfRkBMjJ1OaZeHN7DWxtHv1SbaK0ZHvKEBRhYtbQiKn%2BaQC9Y5WiFp29anSQFkmmRCNJ5o6EtF8VIIQCYFJe%2BlIbIreosCiKdSEGyhGqjt37BUlVaJN8RrY5SGpN0WDx6U1qtxQ5vyJhJEr41I5M0hkbwhw8Fhhr%2FIVRCOYZhDXiI5H4coUIxLbmTnkPIO78KSm3fGE5eAuexh8wq47Q1huVK72JAaqbH995x4p2tIg9sKN8P1ggv%2FwsEOeX6a1zbLYqV%2BpAp3Z5qoXPulu9wekfVKN6Ht5EVfnrSid1aiX0214q91IeHArwBLn7FD9ukgxOF95G4TiUoGTAELBe%2FiYanxICABM5CIUZUQSEbTlmAarZZU03oG97W8UMt8eU2cUY4XjPokLp1BsIOvkJxWLbwPu5WUPxC9by9vLsKzad7TuFoPzx6TCz2%2FkxFDC3qIrUgWVEHzW0zW58caNNAqC%2FjPKo1qt3aBsUdDcPUekT%2BMP%2B8qMAGOqUBMIc3Sekr7wSNiDL%2BrIR5aatFr%2FduImsyiyyEBqD%2Bdno0Q8MwFJTSiU1hkBJAmPBwKgkBr5PSSstU4zGTCy6inT77CuXudFDwsL2yQIj3TJz6cMz2nQ6kmhBtBTdsFLzBsDF3LefaO%2FY7GTljM%2BRNNmStgI7Cm0Pd0VGnZJM5tXFWhx2ZrjCeGtu8NKBQfMqZZrs8w%2BnYy6YulJsMHIMwrAJsea6o&X-Amz-Signature=251973b19752f3101f49e2eb2fbed5fa343449602e7f9810bb75c2d9297f0110&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMWQORQP%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCWadAmIJ0BGnoL654gkC7MYmG37HwWAxN%2BAWPj%2BRAnpQIgWWsOMLW2Enbc%2Fwj3O1WodOFnfoH6Oytp%2Fg7bagr8rJEq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOcAIUDKO6I%2BYmZYuSrcAy3ZTZIiLOxfbE9iTxGhw6aZdrQgbTQr7tlhB8bvpbcLKlgqItKUgDFTJJuWWDUdHZnPCiYe5j29KeqwjnDmvWsTz45RhchIWYunda2Rrp%2FHHLFzqZQMK3pyMV5wBY5I8unLE3E9jUF2%2Bh3rfRkBMjJ1OaZeHN7DWxtHv1SbaK0ZHvKEBRhYtbQiKn%2BaQC9Y5WiFp29anSQFkmmRCNJ5o6EtF8VIIQCYFJe%2BlIbIreosCiKdSEGyhGqjt37BUlVaJN8RrY5SGpN0WDx6U1qtxQ5vyJhJEr41I5M0hkbwhw8Fhhr%2FIVRCOYZhDXiI5H4coUIxLbmTnkPIO78KSm3fGE5eAuexh8wq47Q1huVK72JAaqbH995x4p2tIg9sKN8P1ggv%2FwsEOeX6a1zbLYqV%2BpAp3Z5qoXPulu9wekfVKN6Ht5EVfnrSid1aiX0214q91IeHArwBLn7FD9ukgxOF95G4TiUoGTAELBe%2FiYanxICABM5CIUZUQSEbTlmAarZZU03oG97W8UMt8eU2cUY4XjPokLp1BsIOvkJxWLbwPu5WUPxC9by9vLsKzad7TuFoPzx6TCz2%2FkxFDC3qIrUgWVEHzW0zW58caNNAqC%2FjPKo1qt3aBsUdDcPUekT%2BMP%2B8qMAGOqUBMIc3Sekr7wSNiDL%2BrIR5aatFr%2FduImsyiyyEBqD%2Bdno0Q8MwFJTSiU1hkBJAmPBwKgkBr5PSSstU4zGTCy6inT77CuXudFDwsL2yQIj3TJz6cMz2nQ6kmhBtBTdsFLzBsDF3LefaO%2FY7GTljM%2BRNNmStgI7Cm0Pd0VGnZJM5tXFWhx2ZrjCeGtu8NKBQfMqZZrs8w%2BnYy6YulJsMHIMwrAJsea6o&X-Amz-Signature=3c45eb476d02e0c26e81205fbf60145b9dc4072bd349571d774687fa0abde6f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMP5H7ED%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHx2PzmThU%2Fhad9oLb7N7GTE8Pe9LXOzjxbDh2LQcCt9AiEAhrc%2F49erAK41t8BhX9aYWpi0mbsR0Iq4T05K7PAKEI8q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDLAdPnX2ouMFMywozyrcA%2FtcoQ3%2BJeoDzBRNKjVuSLMQlscUE3kHVTz3qnXx2KBnwtPZBqpycVXlhVs5Fj%2BFJvUMswamgidzuELprQ0UPyJcf4%2BgzgRwBMeWs5wGZ2NvpwE7J1uXyMSNIZWoID4sBNqpmkzgygkvJppqT03qVgf8HN6wq31oSjg4%2FjrvM4PHOnXTM23lNe8OSuVuMji5r1QgYMEcUzgzuek124FRcJSyiOH7r2I%2ByUXmS8%2FNpMD68%2BkokUW56qw997yCpf0v7d5yWT28%2BD4cC6lFpv4YJy%2FpnZ6rZ84M6aE5uZjCpqPnTHGXwZ0QXk2rXI3yyHvWoJjdQZDj%2Fm97ufV4jWrlL8tr8uxjwYWMeQ33iWe%2F2a9FiMofa8XKonZYY6yEQNMNsKhE5ycsx7T27zUH%2FIw4cF1aR4Y5re7GDYRmP26M5bFMSyYQkSqtP9h%2BrHGyUHpR1iOB%2BxuZylti2Q9GpxAn1hRnPrZscUlq3w5GaLDJ21q4HV3%2BftG1H04RcY6N6qTzdv5e%2Be%2BqMnt%2F4IKxtDtj3YHXMReyRSf6nRpL0fC4uuwKWTzAslvkd%2FV16AmmYJL86tyNRLrinjWweEVAEXvw4yo6wpxIgd1w7fdLmUCRBrG9OPgqnUMyn6fo3WNuMMS8qMAGOqUB7uGDFvLjl%2BIRvhlpdM2Vxyq2v8yvPNhuYiluzFyw5%2FFAvMXmE72fT%2BN1IAB4Ojg1QIiE8GgnJSy7binuDSy54tp0M3JIS9co3aW5nQuJ0Ky%2FvCtQwkHZKSsB4Cm%2Flf%2BPOoBbZCRSLGL7L1BhOnmP%2BX8Qhgqw3GPWjIZfqdbKYZ0PI9kHSULRvhqPBy%2BSRlFoASc4xImunReSncUK2Nts0EryiMua&X-Amz-Signature=4e4e2f7159ca9c20dc596ae26dccd98dac67797201a7b032e95f01f0735115b7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTBML3D%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIAr4%2BtGc4HX1mDDoIdMnarxVQ3zYg4lqFjrkhZDepz8zAiEA0aDbVjfVE1NAoXFNuwoxIjc5Nyld776aMddJR%2FoHijQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDIgqytg2vGyreMblQCrcA9QJkym%2FKdLBJQtU9%2BTUoF7Mbt%2BkV1veIFYjgmlSEfKCUC2%2B%2B9z2Cc6T70cJKUwES9ePSOUMqcvWqUozlBd%2B3lVhHMwx%2FsuUEQKCwNNLWCGnDGyup31LiYkGaLVJRSPNKjb18CEDiGSekLCxEyNwKnQ0n3NgbbDTqrH6cEzOXTMSW4qEODqeiJPNzZsgQxElMmmGtjx9mnRa%2B2IT6n56K89V8qgHbwuDMwsoEZHesd1zisJXtK1xRTFNZgsrpWdmCoDU0at2K1nOYSjjU0RIm16IX0WMpUdOEw%2FyBytrxiaRzAr6auPOdG6iqS4Z3oc5E9fCvGL59t0yeFap2%2BUopqB4nsyhytZ%2BCxEs0ugsqcFh5nbldTyHRuNZagrg79JDB8NitmSpcs6DwcX2XmmCz0ZCmA%2FjutzBykQaWWMKn5kZHJ%2FHyKhrGs%2FQkc0u8dxPMlKDHK5wiqHemcln3TZeKqx9B6rDFgWWYiQL6VROEmCFZmUf43JHpwhssG5icM8RiDUhRB6b48dWcmcNw7TZO8VZs3UkAr7HKeJD3s2hGuiQJ%2BIVX6sSNJzgQbe7UMr9%2FOsbe2Kavn6qtZOqbDH4CgsI6Ms8gmPVemxlRAPA61fD8lazqO0F8iPMHaaUMLfCqMAGOqUBNn%2FCWUpBoIvJamODwgaTktvIliTq656rk1Er%2B5LCGLoqZV50L8cQm6QXQ8I3%2FhNUwzXg1DqcoXWT5jvFJQpAwpIA6jNjLyy3ZhGO%2FwveZDPd5ztK%2BY4kCsAo%2Bk8hr6ZYfbmJnvpzEo8h5q38CRo2OJ%2Fx5LDGQYQrviJJjekFm72s41fpsLSl24LnidPCTeOFYWJIAZ1uqECa%2FaqVA%2BACFMSYYKZj&X-Amz-Signature=d60bcfb98ff26d9999c29728173a7b35ae761716c400fe48a5c585e7403a657f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMWQORQP%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCWadAmIJ0BGnoL654gkC7MYmG37HwWAxN%2BAWPj%2BRAnpQIgWWsOMLW2Enbc%2Fwj3O1WodOFnfoH6Oytp%2Fg7bagr8rJEq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOcAIUDKO6I%2BYmZYuSrcAy3ZTZIiLOxfbE9iTxGhw6aZdrQgbTQr7tlhB8bvpbcLKlgqItKUgDFTJJuWWDUdHZnPCiYe5j29KeqwjnDmvWsTz45RhchIWYunda2Rrp%2FHHLFzqZQMK3pyMV5wBY5I8unLE3E9jUF2%2Bh3rfRkBMjJ1OaZeHN7DWxtHv1SbaK0ZHvKEBRhYtbQiKn%2BaQC9Y5WiFp29anSQFkmmRCNJ5o6EtF8VIIQCYFJe%2BlIbIreosCiKdSEGyhGqjt37BUlVaJN8RrY5SGpN0WDx6U1qtxQ5vyJhJEr41I5M0hkbwhw8Fhhr%2FIVRCOYZhDXiI5H4coUIxLbmTnkPIO78KSm3fGE5eAuexh8wq47Q1huVK72JAaqbH995x4p2tIg9sKN8P1ggv%2FwsEOeX6a1zbLYqV%2BpAp3Z5qoXPulu9wekfVKN6Ht5EVfnrSid1aiX0214q91IeHArwBLn7FD9ukgxOF95G4TiUoGTAELBe%2FiYanxICABM5CIUZUQSEbTlmAarZZU03oG97W8UMt8eU2cUY4XjPokLp1BsIOvkJxWLbwPu5WUPxC9by9vLsKzad7TuFoPzx6TCz2%2FkxFDC3qIrUgWVEHzW0zW58caNNAqC%2FjPKo1qt3aBsUdDcPUekT%2BMP%2B8qMAGOqUBMIc3Sekr7wSNiDL%2BrIR5aatFr%2FduImsyiyyEBqD%2Bdno0Q8MwFJTSiU1hkBJAmPBwKgkBr5PSSstU4zGTCy6inT77CuXudFDwsL2yQIj3TJz6cMz2nQ6kmhBtBTdsFLzBsDF3LefaO%2FY7GTljM%2BRNNmStgI7Cm0Pd0VGnZJM5tXFWhx2ZrjCeGtu8NKBQfMqZZrs8w%2BnYy6YulJsMHIMwrAJsea6o&X-Amz-Signature=aca371e46b3479060c81916090284c9af6bca9bd5d0926ad00b32f87e30711a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

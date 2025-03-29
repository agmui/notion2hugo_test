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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKGMJUYB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCBt2cr384swTstR8%2BysA%2BbB8ZffkK%2FZUOxRb2rOmpQgQIgGU5qcHdVxSXgQqKgT2ogeZM44eAU%2BsKLPFJbSkYd%2B%2B4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDOnat%2BWrZ2cufNPcnSrcAyQeFXE8P1oW0D%2ForFxXtX0zJ8HOPbVmA8WIukGIPQ0Mupe3yYmlU1UgL6QvhB0mrzLgsqiYKH1LYi%2BkJahjgsCR5p%2FHePHS8R58DRydBHRl4GqoEK3xb2L9Jc7Ij%2FtxPEwV3V2Myw9KMvNWjbZQFeJth86UhbauiUg%2FV1aStdM6IKAOToYb7eS65RHmRuUSc4S9RHCfz6XzJ%2F5Qd2cNyx3nyA6FelYQeYMTrnwH4W9D3nrlMbfm0Yi3X8X96e1%2BAXnvcRW1R0utR0X66GP%2FuGNfh5jiGlgg2rv0bld%2BSmuo4Zj1j41hmxf04TdjxbNyouXvO4jjD90SKyWzVpBga3w805e0F%2BQHL9wtC2D4htqTqpBNB2jQt388uXauZYF6wDuYniz4KZRCHEY2vBqTcYC25qKeNjVAeEL%2BKtf5VlI4AJZkABZOfNHNo2T07y3ZQCWYHS%2B3XANvcaMpDx2VDSC6ZU6RfEX%2Bus1SY8DQJOJPnIgCNsuVV57PTon6QJ%2B7DjX3fNHXL1K468isiV21%2BrtyXCbdsDgVnowgO37GeEWvAg4SEOlNCUx23sc9MMWPz136IkhFrFy90Pvk4bTZgOHkAiIGrNm2X7XJ3LwFv%2F8YYbV8JnFEIubT4%2FlxMIDxoL8GOqUBeZW7tcCHn9J4waFEC%2F16ECJR0PWsQ7q%2BWOKlrtBTrxN6fT5JzxeirogJSkoDIU1b%2BQP%2BXdCFE6%2FbNUlZxG30LNZpCAQ9jFJ%2Buw6f%2FZhjkdbcypGA02uyw%2BTzqO0PIDtwfLxncDiiYYPkaSIY3L3Uqmdauzc09UxVINw2w4qAlchCwf%2FGFSf5UoKLkiNwfX2fDWgrpMrGBdVGhVmC4mXxRONaQPPF&X-Amz-Signature=b696cefcd7d5875c0777f85090763733eacce5bd4bdcbce275cfb23141cceb06&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKGMJUYB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCBt2cr384swTstR8%2BysA%2BbB8ZffkK%2FZUOxRb2rOmpQgQIgGU5qcHdVxSXgQqKgT2ogeZM44eAU%2BsKLPFJbSkYd%2B%2B4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDOnat%2BWrZ2cufNPcnSrcAyQeFXE8P1oW0D%2ForFxXtX0zJ8HOPbVmA8WIukGIPQ0Mupe3yYmlU1UgL6QvhB0mrzLgsqiYKH1LYi%2BkJahjgsCR5p%2FHePHS8R58DRydBHRl4GqoEK3xb2L9Jc7Ij%2FtxPEwV3V2Myw9KMvNWjbZQFeJth86UhbauiUg%2FV1aStdM6IKAOToYb7eS65RHmRuUSc4S9RHCfz6XzJ%2F5Qd2cNyx3nyA6FelYQeYMTrnwH4W9D3nrlMbfm0Yi3X8X96e1%2BAXnvcRW1R0utR0X66GP%2FuGNfh5jiGlgg2rv0bld%2BSmuo4Zj1j41hmxf04TdjxbNyouXvO4jjD90SKyWzVpBga3w805e0F%2BQHL9wtC2D4htqTqpBNB2jQt388uXauZYF6wDuYniz4KZRCHEY2vBqTcYC25qKeNjVAeEL%2BKtf5VlI4AJZkABZOfNHNo2T07y3ZQCWYHS%2B3XANvcaMpDx2VDSC6ZU6RfEX%2Bus1SY8DQJOJPnIgCNsuVV57PTon6QJ%2B7DjX3fNHXL1K468isiV21%2BrtyXCbdsDgVnowgO37GeEWvAg4SEOlNCUx23sc9MMWPz136IkhFrFy90Pvk4bTZgOHkAiIGrNm2X7XJ3LwFv%2F8YYbV8JnFEIubT4%2FlxMIDxoL8GOqUBeZW7tcCHn9J4waFEC%2F16ECJR0PWsQ7q%2BWOKlrtBTrxN6fT5JzxeirogJSkoDIU1b%2BQP%2BXdCFE6%2FbNUlZxG30LNZpCAQ9jFJ%2Buw6f%2FZhjkdbcypGA02uyw%2BTzqO0PIDtwfLxncDiiYYPkaSIY3L3Uqmdauzc09UxVINw2w4qAlchCwf%2FGFSf5UoKLkiNwfX2fDWgrpMrGBdVGhVmC4mXxRONaQPPF&X-Amz-Signature=df720c830d9b3b9bce58acbb5ebf8cd9b8dbeb5dae833dd13c580f6f6cf98a87&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ME6PXHU%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIHpBX2eqhmTENR8mcYy1tPe1GuxXe9XsXIU61djgWP%2FSAiAU9OKm9neDAk7zK8%2BdcXMuqvmqtNqF%2FmFuu876giEAOSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMc5Syko3ru0xZk7q9KtwDdCHvsR4rscNepw3oRPpVilJUwSUp7iaycBZkSX9PdetswM2vCvcvFuvTo%2FZUtw5HPij4Cc3JMRyaxbBjSQ3OYfjk%2FI7lMmKUoP4HLRwDrB1NQCjKuoSX1tTmJeL2oVpTS7weJc0UkXTupD9f7wH3W30y47WeFRlenBxSoCP83tu14gOe9sIMxfATm3%2FsLjLlqlSQ%2F0GDrOOxlEBUAIdv9pUoXQpqRayTS068gMaKWgxcvHv6K4qqEicu8exbqcjpO%2BmBiD9YJ3cz6lYgG%2FAH7jnkSCKqa2oZcxSVp%2Fe2wbG4PEFo7kttIN6GtGZzt0gIWlKHy46SuK56cx50bS3aWS3qIPsSuKfvjYUuekLHv6Dge0Tu7POpgKxHUOe5%2F0hK%2B7o%2FykTFq7NcZ1UX63CfswBoCtSEuppePnM6Hc61fDk%2BhBZjKoJE7Yj34lbmy8u3yEPue2l21JYGcWfu0cQ6ExEGEcjbjkmlNMsdxkuZ9HtzPkF%2BlHS0FjLvTWIp87BObEOe9q6mjMek%2Fr%2FLRI30bXzqFbhlpOhbZzdB5Jcprc6kNBN2L8J6obFeiRHMoZblRLlT%2BBMlMy1a3w0NwmAUp4NlxYSwGwuS4wT0cwo%2BwktylJQeKOhAJWj6HqcwuPCgvwY6pgE82WDBr1YGS4dS52%2Bo778Pj2CZFQDEqiQniOwTJEkWcJH7ptYhgGGdtAvIAeq3tzHXy68MwGWRu8ftclpIJ283vo5W9nMNadN2O43QVrbPIxFY6soZqv3x3DQzzHTWzkJbxrSnqmxFiT1nC2tV5zCHNUmxTiY4GwdzROUneGuBKHFH3mBPnLQtMCSicww09y0c0yvbrVRcQautv6LuaKHzL0RO90GR&X-Amz-Signature=aa00b21c59c68067b0dd4b367583c2705a9bae9954757b5af085fcd1b8e5721a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAVJ6DWQ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQC4FYvymPS5wkUGJrvsxNb2SEpg%2FAtEuFEuJtL3p2K8jwIgV%2F68lzViOVP8lBv6njHEsrjL4Q2qv2E0ytpc4KJ12XAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBhKWB9ph%2Box9aCKsircAw2APwq4%2BBb5XwM4F66qxK5vXY5MhAX%2Bi7k0Oc5ipuBFlI2%2BBoTXVycNZxxF4hurgnZDtMEvg76C49RpeODvI4UweCly4QGyjL%2BSqulxXkhXof0MRhoyXefx%2BH11xKg7rRPyKd%2BUeMfwc%2F9XyfBkwWAlcabl1EbNIFAfG85XjiAKS3P43UVFJA9IGfAVGAEBbg45fF8NZdp8wTj78DOARth01WSMF2hYVQ2nh7DXWPryvFAWs%2BBZjfAKoxHM83mwvGy93hB3idacbgdeLjY06P8FxbMC%2BW5cx5s2s1vddVLmrO4PhUDBRlwaU3ryJS6SmzZpWtWJtivlJ%2BKXYjNUlBet8wa%2FGc4sqa9vizg24HqPwYgYxJddMRnjceodIe5G4roozmdTGyT5qC2zwJR9erhQOwWxWaUTFT3GtTBntMRbQIlt1SmIvZHHKmAbvXtYuSJDyumcwOu0qUiLscadO%2BVQ93gyxLQJqWeray7gTdbOVz%2FN709VddyTYK4ib0TvtN1%2FGaa5WrqQi2mtoigPr2%2Bo69oAPVdPp9HxvpyxAciJjPtGR%2BVpZueO%2FWr%2BXOCFzU%2FxF%2Baxc1JjyeqYA%2BnlAZsRza0DR1%2F71GK1nHHWgGCUATdzL3vHa5reNOSGMMvwoL8GOqUBKQQNNe7P89FesxNCbmQrLlteINytA0DYVbYrRdZ5JsMxM6ttUDtTe5JFrK78mlx7Go6RDyVZv3lpYKqmbO541CndSAtq77xRPaRTmrWyIQgcZLqNV2QmC1D7fACBSLttBg4vgnI67AMNZ6ABu2t5%2BxxwzdUUflpK2Vbm3M4G2%2BrB5j48VHC7ZBJT40JrqV040k%2BPQ4E9%2BpiUC5msrGoB1ofR%2Fd36&X-Amz-Signature=c5572cc2b803aa842afa46d08b2d3199a21ccd60701b4ea4c48028f2e79f0309&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKGMJUYB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCBt2cr384swTstR8%2BysA%2BbB8ZffkK%2FZUOxRb2rOmpQgQIgGU5qcHdVxSXgQqKgT2ogeZM44eAU%2BsKLPFJbSkYd%2B%2B4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDOnat%2BWrZ2cufNPcnSrcAyQeFXE8P1oW0D%2ForFxXtX0zJ8HOPbVmA8WIukGIPQ0Mupe3yYmlU1UgL6QvhB0mrzLgsqiYKH1LYi%2BkJahjgsCR5p%2FHePHS8R58DRydBHRl4GqoEK3xb2L9Jc7Ij%2FtxPEwV3V2Myw9KMvNWjbZQFeJth86UhbauiUg%2FV1aStdM6IKAOToYb7eS65RHmRuUSc4S9RHCfz6XzJ%2F5Qd2cNyx3nyA6FelYQeYMTrnwH4W9D3nrlMbfm0Yi3X8X96e1%2BAXnvcRW1R0utR0X66GP%2FuGNfh5jiGlgg2rv0bld%2BSmuo4Zj1j41hmxf04TdjxbNyouXvO4jjD90SKyWzVpBga3w805e0F%2BQHL9wtC2D4htqTqpBNB2jQt388uXauZYF6wDuYniz4KZRCHEY2vBqTcYC25qKeNjVAeEL%2BKtf5VlI4AJZkABZOfNHNo2T07y3ZQCWYHS%2B3XANvcaMpDx2VDSC6ZU6RfEX%2Bus1SY8DQJOJPnIgCNsuVV57PTon6QJ%2B7DjX3fNHXL1K468isiV21%2BrtyXCbdsDgVnowgO37GeEWvAg4SEOlNCUx23sc9MMWPz136IkhFrFy90Pvk4bTZgOHkAiIGrNm2X7XJ3LwFv%2F8YYbV8JnFEIubT4%2FlxMIDxoL8GOqUBeZW7tcCHn9J4waFEC%2F16ECJR0PWsQ7q%2BWOKlrtBTrxN6fT5JzxeirogJSkoDIU1b%2BQP%2BXdCFE6%2FbNUlZxG30LNZpCAQ9jFJ%2Buw6f%2FZhjkdbcypGA02uyw%2BTzqO0PIDtwfLxncDiiYYPkaSIY3L3Uqmdauzc09UxVINw2w4qAlchCwf%2FGFSf5UoKLkiNwfX2fDWgrpMrGBdVGhVmC4mXxRONaQPPF&X-Amz-Signature=60732158fb8365ace07eb131392e23eaed25a1d0ffc733ad7ccedec817804d09&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

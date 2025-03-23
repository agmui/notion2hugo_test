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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAB7GF3N%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDt4OhHcXgN16pBSeMf5TkI8s%2FjGe1dSEtmAKSGoHqTgAiEA2WxHDNRR%2FP4gSETdW3yb1Dg1%2BO5yRUl1%2BwFq4mYxs9IqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXfIeQ26cpPW9ygoircA6MerP88j0jcYsxx6bRNvRtjnLvUKXfaqJGR2Hc6HbkgNIVHb6g7Y5LI%2BlnHWVy6AxnNYdhD9whV7KCRaztszAvxk5SR5oqXlNl95acwVg8vTqQFoJ7SlZZcnYxaLkuWnVyuB%2Ft8vuuuK9kNIWKwkpNWeXcixjViypBnRNe8ooO8BTwudBxeWpwPf6gXTNR7ZOvHxf8EOaCLyKQJnejkJuCwhUsUeEPmIw0waSiT7dV2hMnxoGfZFtRnK01v%2FwQQvoEVKzYEdpsyKMVRVtBi%2F21BD90ADRHvYTIzT6K%2FmnCJAAZ8H%2BcVHCuZ80YIjxh%2BFka%2BFVtqOzyn3pYCTikC38hMXo71mtR%2BYM9VEESiBAalYLXHBfM%2BZHThh9BlSYYnCEmPh6iV6N9%2BIHg8pYe1u4Bhp6MvAAD6S5B8CBXscUqYGpblIgKue0zQaK3yiUMBRde5cV4wOA%2FzHluqJPGvkVwFBvNNTi5xcO6H3chVAnmFFjtJQwVtH9KPPrN7omWozDx14pPPtGoa5F1psEBX6w5qSpdBSqP7TIa%2Blpz26qyanJ%2FNAH9YkoovOC1u%2Br6p7ixKUF2jS20Y8Wq3CTR%2FghcYZ1KmVd6bWWTCxyzvSHrGxuoLa01sjLzhNPHQMPLKgb8GOqUBLMGsMqAm%2BrRn5kwAVvcmBXs6mfBrTBuHZZIkVB5zd%2FbLdddd9X1rBKkHpXjhCDOgN8kEynWAHl9Qt6%2BJSMKNksFlC4yzVGJjIRxtgnHFr3OnvRSJ1NiZyqsFw%2BacWDKuy5R7V8MtgvsHUwP2K%2F%2F43seIWwOF%2FX207exw%2F1n2o%2FhFpMbqvgS0rsa6lz27pe6KG3mBr13NvHK2uc7hWWqeYgUhFHkl&X-Amz-Signature=a0014e9bb052557a86b3e23f9e803f8a62c6e598ec71a110889469aed72ba58a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAB7GF3N%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDt4OhHcXgN16pBSeMf5TkI8s%2FjGe1dSEtmAKSGoHqTgAiEA2WxHDNRR%2FP4gSETdW3yb1Dg1%2BO5yRUl1%2BwFq4mYxs9IqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXfIeQ26cpPW9ygoircA6MerP88j0jcYsxx6bRNvRtjnLvUKXfaqJGR2Hc6HbkgNIVHb6g7Y5LI%2BlnHWVy6AxnNYdhD9whV7KCRaztszAvxk5SR5oqXlNl95acwVg8vTqQFoJ7SlZZcnYxaLkuWnVyuB%2Ft8vuuuK9kNIWKwkpNWeXcixjViypBnRNe8ooO8BTwudBxeWpwPf6gXTNR7ZOvHxf8EOaCLyKQJnejkJuCwhUsUeEPmIw0waSiT7dV2hMnxoGfZFtRnK01v%2FwQQvoEVKzYEdpsyKMVRVtBi%2F21BD90ADRHvYTIzT6K%2FmnCJAAZ8H%2BcVHCuZ80YIjxh%2BFka%2BFVtqOzyn3pYCTikC38hMXo71mtR%2BYM9VEESiBAalYLXHBfM%2BZHThh9BlSYYnCEmPh6iV6N9%2BIHg8pYe1u4Bhp6MvAAD6S5B8CBXscUqYGpblIgKue0zQaK3yiUMBRde5cV4wOA%2FzHluqJPGvkVwFBvNNTi5xcO6H3chVAnmFFjtJQwVtH9KPPrN7omWozDx14pPPtGoa5F1psEBX6w5qSpdBSqP7TIa%2Blpz26qyanJ%2FNAH9YkoovOC1u%2Br6p7ixKUF2jS20Y8Wq3CTR%2FghcYZ1KmVd6bWWTCxyzvSHrGxuoLa01sjLzhNPHQMPLKgb8GOqUBLMGsMqAm%2BrRn5kwAVvcmBXs6mfBrTBuHZZIkVB5zd%2FbLdddd9X1rBKkHpXjhCDOgN8kEynWAHl9Qt6%2BJSMKNksFlC4yzVGJjIRxtgnHFr3OnvRSJ1NiZyqsFw%2BacWDKuy5R7V8MtgvsHUwP2K%2F%2F43seIWwOF%2FX207exw%2F1n2o%2FhFpMbqvgS0rsa6lz27pe6KG3mBr13NvHK2uc7hWWqeYgUhFHkl&X-Amz-Signature=bbd70dd8f2d4f556d8631edde6593c1b6d54f897d16b345d98ae9b27f448278a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HLRHKY6%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgjTgyUE7hGJnkHma329W1cFveHnyPf%2Bf6%2Fp75LtpRkgIgQ6dn6wL%2FV2K1jiXoOSDv9jszgE2mwejau3yh3dPqzlwqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmNRAyTz3zJK%2B8l5ircAxpQ9t0IZqQi13R%2FZGJQEiXHRUzfPwbKJgERiYbKAYmQSRFj2vmaEkxewiGuK5DJgEGRIaoVkAp2RLDroEhUFz%2BzdZ6KpMTpGEoR%2BvZTXYJHZfmtvtiHLjHIeHr7VIEuK%2Frx5uvVFy3bHxCBK2Z8%2BeGfOJenxn4tHmq1GJbTl5TfkABvIu7VgMDtdXnJMU3J47kBlNz5FSx1mpvcqxRamEh9tUpbLsF3Bt75cIKhoNfXF0X7kg%2B5yO9e9d4r0k2zEA%2BtN3mWM48%2F6ND1kFc9NSog2Zo9IicAp0rGeR16clZow7HjccZCsyRyoY0b6bRdOcSd0pbTbZTWcLq91EbJjnI1IoqiRjodaxqwxwJCsj41k15OCuuecc4gCQnHsT06ALf0OfsWyObBks6tVA9OHUbfFPKczy9LbHHREZk1rzu%2BiJ7sMh1BGjOFBpQiFUGu9uapD1MINwHRMFpQDu7LRIBmEutWavWWSm2a%2FJcAiJQ2xB%2BkjawtGB53TwzTDq6lAGy9Lo0DrXSgV7rwf%2BMX8aQJj%2F%2BqpUW2AaaTVEot%2BlzKuiTyo%2BOyt4IcEayGGaYTtGvuKxxy3jRa5iutpm%2FsofZb5K8eQKhmXiiYH%2BqqGYZkfujdY0zcKGiA4Op9MNHKgb8GOqUBUmbG%2F5ABgfA%2F%2BnrZvOst%2BooHQ5U315HbPRzoe0vS3F%2FUCrcBhm3k51YoJDP7WELvWk29AeiVxL1IhC3I0fAJBPkLRdJyA7vmUH5xYIBezLZgxw70uG1V5CezscUFGvIE1sAM4bW3AX0rx1JtiRrPS6%2FsfRibw1hEntuw7DYtK2VZLETVcsbXIofy372GWSYHV1ivyLNyNbCXC7cH1t%2BXXK2xM0Z1&X-Amz-Signature=f6e9b55fae11e1fe6d2343e0162142d2d453e05880a570886d2e0948c4e07279&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VONH7VUF%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFplgg7c%2Bow0vMRQgSlVd5mvfHYDxD6lA4WyGvS2GzTgAiEAtNs05qRzPFGl1VTrzVZKHDsuaVFLNOtwYArqCQ7Pg00qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTfkL%2F2qyKJPFhQvCrcAxo4wuIlulR6n1gM3dHU6QWx5npFZKpSxTrVECbe6aqGF5u%2Fwh9SAOkJ52Pitb0222W3ewHYfELm6ABU%2FhQuzpNAjKrgAy92H4nyPWkOBSL9K%2BlBIncu%2Bv7O2OwdsphPf%2FohRI0YjLSC3PUNfofA8L8Q9O6QHSamwrhcgWCVCgpH0EUOsADY4FktH3777WRCRSlva5vtqSGTw85QsNHy2tRZqpAFEUmNmS8cY0dxQ2c1EQVANmcgXDMOo6VMrf3oI1YI2KeRIW0OTxnqnKT%2Flz1R0JMoVPKQhgywwbGE5k2J%2BEc%2FhN5DcpEItxUUHyVCLRCPz99pRIfDOk%2F81wJCt1bVVyK17Cl3hlVNs0oseT8y4X%2FGUAZFmhQ7KF5AW1gQkdBxX2IEtxO5rknRdpTb57WEC950v%2B1PxFGJY9gqS4SQK23JJa%2FPi4%2F4NrdDTHI0M9st1LwEiVWIlTKOu%2FQtQxjcP7zFZJoVeb0%2BItJ28Lsdxd%2Brjy34AOzTJ779uB%2F0MRn%2BEI%2BxnRTOk5uL2zwueTxLhAg3S7Kv2S9PMrb%2F1%2BkreSOR1JxKGRj2LIafR%2FI5k6FNUnTNTnMCV1wB%2FXVkd5EurSbadDcD6uj0iukL03pROOtbigv1rqUCRsOwMIXLgb8GOqUB55x6ndEJrax7P2fAuIOeHcVySvg3CptoxnJckrz4KuO2xPq7gtZxYNkLCULh94zQW9tog8jFxpzmosaYUWr8uJwD5zLJNadfttsKL%2F8VTDxk%2FYuEfnYf1HJw0hsJszkcwY%2BX0i8m7Niki9%2FaIe%2F7XMAi1NoeEp1k%2F99HK%2FnZDD3A%2B0ZLMVAs2oqruWGhOtJEaxn5IX2KK9WrXoEtafy4W%2BOuEN19&X-Amz-Signature=d08fd1a73912904544e442f6f91cc08de65b0e43988a403752a95e4346163536&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAB7GF3N%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDt4OhHcXgN16pBSeMf5TkI8s%2FjGe1dSEtmAKSGoHqTgAiEA2WxHDNRR%2FP4gSETdW3yb1Dg1%2BO5yRUl1%2BwFq4mYxs9IqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXfIeQ26cpPW9ygoircA6MerP88j0jcYsxx6bRNvRtjnLvUKXfaqJGR2Hc6HbkgNIVHb6g7Y5LI%2BlnHWVy6AxnNYdhD9whV7KCRaztszAvxk5SR5oqXlNl95acwVg8vTqQFoJ7SlZZcnYxaLkuWnVyuB%2Ft8vuuuK9kNIWKwkpNWeXcixjViypBnRNe8ooO8BTwudBxeWpwPf6gXTNR7ZOvHxf8EOaCLyKQJnejkJuCwhUsUeEPmIw0waSiT7dV2hMnxoGfZFtRnK01v%2FwQQvoEVKzYEdpsyKMVRVtBi%2F21BD90ADRHvYTIzT6K%2FmnCJAAZ8H%2BcVHCuZ80YIjxh%2BFka%2BFVtqOzyn3pYCTikC38hMXo71mtR%2BYM9VEESiBAalYLXHBfM%2BZHThh9BlSYYnCEmPh6iV6N9%2BIHg8pYe1u4Bhp6MvAAD6S5B8CBXscUqYGpblIgKue0zQaK3yiUMBRde5cV4wOA%2FzHluqJPGvkVwFBvNNTi5xcO6H3chVAnmFFjtJQwVtH9KPPrN7omWozDx14pPPtGoa5F1psEBX6w5qSpdBSqP7TIa%2Blpz26qyanJ%2FNAH9YkoovOC1u%2Br6p7ixKUF2jS20Y8Wq3CTR%2FghcYZ1KmVd6bWWTCxyzvSHrGxuoLa01sjLzhNPHQMPLKgb8GOqUBLMGsMqAm%2BrRn5kwAVvcmBXs6mfBrTBuHZZIkVB5zd%2FbLdddd9X1rBKkHpXjhCDOgN8kEynWAHl9Qt6%2BJSMKNksFlC4yzVGJjIRxtgnHFr3OnvRSJ1NiZyqsFw%2BacWDKuy5R7V8MtgvsHUwP2K%2F%2F43seIWwOF%2FX207exw%2F1n2o%2FhFpMbqvgS0rsa6lz27pe6KG3mBr13NvHK2uc7hWWqeYgUhFHkl&X-Amz-Signature=c8cb3f76efde4869830c4c2063320da3a0549ff4da06b5edbe1965cb3a00b1b0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662II3UB6A%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T050843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkZH4LSo0KXfD%2FHJPZI6ZXd8uK3UzvyfwDm7hYFDEE3AiBQBrEGPiAOKoA%2Bpkxg2NSoNWx7gT7K7L9PhO2nwCckVir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM%2F5D8eRJqqMyslFeNKtwD9hDYuHhPSqoPiS3AiIhz1F7iqiud97D6eNcHk1ulvG9iBfPGx18GmQ2vrECF%2Fi91HvoadZVnmEoZn5oQZRIQjoy%2BD1edP6QD5PmljNDes%2BN2BcRpL7lvdWxWulPLLUL2jeviun2M6ijzNX1tyYQjwBVQedQ129lOkSpuNX6Uw186M5x2peOeDmVvYN9AFhED1GzjMSB1b3RT2rhQEIJweIDNSQrv5VCi6oF%2F78FXIigkl0jO1C%2BviLydEhU%2BRdBi%2Fmq%2B0Mtu2fmos8a%2BOXuv3ufpMpBl0o%2FUNL3xoREyNulgxUXw2QLBIjCwDevrsM8Eif6OB8OdhD6H6IMGOVLxobTnlIVfD%2FNH5bwW8nBrF6mWIZ2z4xIhK%2Bd7ezhhCwuGtIcVslHSFPjq9wEWNyjeV%2FFw28fGlp1XlQGUMbGskJO4t5z%2FzTb8xdwARJ1%2FYRsCMZosPD3noPbPiA77Tsdins5J4JJ9T8FcYLvKdvemOA%2Fl3IAo4lrNlID6WVSjigIHkGewDTAvygoVKuHw5wA4hGfUnA7FAUzs3zXB0Cwc%2FwXG3EgDTHPtkzW6K6FiKk8kIwH4ndiCVZeg9IaNPaFpQ0KDIHMo2GMQgdHd4QBTHnTl%2B3UOYmdQBPNI57QwpdPSvwY6pgGrAlfCHgMmj0YbgdorqopKQQx2Cn8dM3M7plxyEaqUZonIkKkm%2BbZUG1kOp4IN4BOosc9k0gb8I0Em9Hf4If2TIM4oB%2BCa2pN6oVhzl2z3d6hjPYXOld%2FlOPvW7aM1rpGGdA3wF60WCf6okHIQW8KHN5ETTw0mdS6Zo8AVAC8Hf6NQX61ie1SIvwVLKesHgvbGUBSTW0oQ4rjQAZY2ZghxJvCrRmAt&X-Amz-Signature=cc8e642b5a2877a4697531f801631c7e8a1401d7652cb32c52e3c428526eda46&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662II3UB6A%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T050843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkZH4LSo0KXfD%2FHJPZI6ZXd8uK3UzvyfwDm7hYFDEE3AiBQBrEGPiAOKoA%2Bpkxg2NSoNWx7gT7K7L9PhO2nwCckVir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM%2F5D8eRJqqMyslFeNKtwD9hDYuHhPSqoPiS3AiIhz1F7iqiud97D6eNcHk1ulvG9iBfPGx18GmQ2vrECF%2Fi91HvoadZVnmEoZn5oQZRIQjoy%2BD1edP6QD5PmljNDes%2BN2BcRpL7lvdWxWulPLLUL2jeviun2M6ijzNX1tyYQjwBVQedQ129lOkSpuNX6Uw186M5x2peOeDmVvYN9AFhED1GzjMSB1b3RT2rhQEIJweIDNSQrv5VCi6oF%2F78FXIigkl0jO1C%2BviLydEhU%2BRdBi%2Fmq%2B0Mtu2fmos8a%2BOXuv3ufpMpBl0o%2FUNL3xoREyNulgxUXw2QLBIjCwDevrsM8Eif6OB8OdhD6H6IMGOVLxobTnlIVfD%2FNH5bwW8nBrF6mWIZ2z4xIhK%2Bd7ezhhCwuGtIcVslHSFPjq9wEWNyjeV%2FFw28fGlp1XlQGUMbGskJO4t5z%2FzTb8xdwARJ1%2FYRsCMZosPD3noPbPiA77Tsdins5J4JJ9T8FcYLvKdvemOA%2Fl3IAo4lrNlID6WVSjigIHkGewDTAvygoVKuHw5wA4hGfUnA7FAUzs3zXB0Cwc%2FwXG3EgDTHPtkzW6K6FiKk8kIwH4ndiCVZeg9IaNPaFpQ0KDIHMo2GMQgdHd4QBTHnTl%2B3UOYmdQBPNI57QwpdPSvwY6pgGrAlfCHgMmj0YbgdorqopKQQx2Cn8dM3M7plxyEaqUZonIkKkm%2BbZUG1kOp4IN4BOosc9k0gb8I0Em9Hf4If2TIM4oB%2BCa2pN6oVhzl2z3d6hjPYXOld%2FlOPvW7aM1rpGGdA3wF60WCf6okHIQW8KHN5ETTw0mdS6Zo8AVAC8Hf6NQX61ie1SIvwVLKesHgvbGUBSTW0oQ4rjQAZY2ZghxJvCrRmAt&X-Amz-Signature=83bc10c0ad60b4cb1e2919f77888b8029972223c142fa278aeb2764f97ff61cc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAD4IPM4%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFLep3jFE9JQ%2FYLWNU7cViCWplhM4JQ8ny8rKfCli8fAiEAkMIlA8JG0qz467fCQbw5r%2F9nkquq2r5cEF5oHs1%2BTJ0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIZ1m8FDpEGQvfEAXircA93UtTfFOvs40Rr0mc3DyDoaOk6HkjqFujNyuyBp6HdzPrBRjM9V6w%2BfB7VcQX6KdGx7i4MxRCGaivRaK9pjKG6lWvoO1O%2Bd86Vef3ma0Z4Jbg3TLQJDCmrCwauSIu0ot8M2%2BsqZcRFIWvjww6DSiO4XzvpIJoKvEjtaN9UzDC8ug2iQH0bvndg%2BYw8JNBi%2F5xAWoDlU7gScGahWwlBzG8xWXIu%2FZNTp0sn45ExggMHwbqId0uTgD17XrYcWVGdQH6m5EZ3REwU30%2BjkgAbuV1aVlUBjvxY86srjkstWgI3Xw8t3VQG66p6uHmqqTzFT2rSJhOobo%2Buu3I4TBsedS5am9R%2BTZWBUNGEbHoPJZ%2F1%2FrV5bcgiUS8tvYJhAzQDfmppSq%2Bh2kCqgKehTN4XZ1AhU%2BM7%2FBXbISI9EeaQRTrfQz2QO3Dj4PsqsgYmQXsSlBeedArCzAEOs%2F4Gk%2F8OfgbA8IOtehl03vIHIxJMzYjh0hZX0IxwMrQjwgpdKHtFbv5UVjYow6B%2B3%2BKpcooWv4x7kwfjbrxNRlIUjvprdSGK56RhpchXJbK%2BpPx7vdFbO69fA2KsJiuW5YoZDfV8G2u3gUXQS0vBdYj%2FGtAKM84WddKfx7Gcr3K49D2rmMMnT0r8GOqUBY9UxKrGVvQf%2F8%2FarJ7zcmnpbdJ3P83QxU%2BtaZRnQicXAHYdQKKEmPF3n4nTfp3QeDol%2FNnbXSqADNuOXFxWK5UO%2Fw3gw8ZPv1rt9V9wySqo1MQGP6CheVvTohtXCRmSPIAPkim10Y2CP7DnIwFrZ3MkvL5FiMiwZhz17ASWZgBSsHECMm3T%2BMxHCdKrj6sa5UxrTSNI3vjZlbDgoNAzxOqvUheHZ&X-Amz-Signature=70c92fc27c517cedaa5f0505f5503d26d1e9074e7d417a2f359f3d6bfecfd6ec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRS55KB6%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiHahXCFRmKeXAzIBzemWftpSwaGupJR1n%2Bapdg9DUSAIhALu5djkmmKjVt6%2FJ0nNwpMlmRIi0g%2FnPr54rJ%2BRzl19nKv8DCG4QABoMNjM3NDIzMTgzODA1Igx6ZFndouOozIwnzbMq3AMpMevb9HH1vtHJ%2BvsvosqOctBkJMLdhywnYR7FFOFmg%2FTQVK4%2B8A%2FFC6RV73OVvr9S0xHwJlwHUJxT8L1sDtfiG2sXcP8IRHm9RbXOSWwPVtPeYlv1uC3O2LPe40FUB2C0zH2yYzTJVHGn3LlsZtIrHqow9ayYrb14Pg9tSt4CGXkSHzgFK%2F5Imk9TDjUBfCbF5h3ry1VPF2KHSzpI2XEgrprgi0iN1qYsXH3IDeCSzEPQJY%2FzRm3WFOYs7rTGcnOmcKXj3r6PzUf5c2iRswKt5Xf%2Fj1JVv5taRvn19AwOxTJKUV%2BgoaGhDziOOlefDfSYGaZcTAwtEJWL8N8G7RFVZQhU%2BIFXMa4Ejjdnhen8eAMsu7wpcJZjSEy0OXfOrRmvLjxRiBjVYph9ajDTvPeWxSEd%2F6uBuUSfqpMAZQeIUWMeND0iAKZaaykWlJubABNm8D365HH3siI%2FspFZC%2FndyzKf%2F9ob7SeUQ1iiq7fHnEgqHTvL7mVVoMRraDiwFU2iiCtvGDnsx91JLED0pk%2BJYxu38sScat0Vp6JesnJYyeYh9lsYnJvwUJpliJ%2Bu3qxbv7X1AOZD50qLZmr3eR1cs4fmRfDLu5O8FOLKoaA0T5GEMOCqLe%2BbKmOQsTDJ09K%2FBjqkAXs9%2FPza2%2F8bIaiD7pkwwICsojssqcV65PdHJHxhW3MzoeZTDZt3CieesmcqtPrJdO9MEgGvtFhnuIRlZWksKrGBiQzMnWJRvu%2BxEk6ko9KuKJwf0Z00YeNFZKo1aQteFvr3a2nHWyCxbakejpiLJPWVbcFblwyk6e8z%2BVeFbwMXZkbk50aZqhiZHBx9AEGkkqMKK31aSpVzBWDyrdQC2vhdINDf&X-Amz-Signature=53a84fbc779ef99b1423fc2cafb95e4348861d35973c49c51b4f5f81b5d71325&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662II3UB6A%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T050843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkZH4LSo0KXfD%2FHJPZI6ZXd8uK3UzvyfwDm7hYFDEE3AiBQBrEGPiAOKoA%2Bpkxg2NSoNWx7gT7K7L9PhO2nwCckVir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM%2F5D8eRJqqMyslFeNKtwD9hDYuHhPSqoPiS3AiIhz1F7iqiud97D6eNcHk1ulvG9iBfPGx18GmQ2vrECF%2Fi91HvoadZVnmEoZn5oQZRIQjoy%2BD1edP6QD5PmljNDes%2BN2BcRpL7lvdWxWulPLLUL2jeviun2M6ijzNX1tyYQjwBVQedQ129lOkSpuNX6Uw186M5x2peOeDmVvYN9AFhED1GzjMSB1b3RT2rhQEIJweIDNSQrv5VCi6oF%2F78FXIigkl0jO1C%2BviLydEhU%2BRdBi%2Fmq%2B0Mtu2fmos8a%2BOXuv3ufpMpBl0o%2FUNL3xoREyNulgxUXw2QLBIjCwDevrsM8Eif6OB8OdhD6H6IMGOVLxobTnlIVfD%2FNH5bwW8nBrF6mWIZ2z4xIhK%2Bd7ezhhCwuGtIcVslHSFPjq9wEWNyjeV%2FFw28fGlp1XlQGUMbGskJO4t5z%2FzTb8xdwARJ1%2FYRsCMZosPD3noPbPiA77Tsdins5J4JJ9T8FcYLvKdvemOA%2Fl3IAo4lrNlID6WVSjigIHkGewDTAvygoVKuHw5wA4hGfUnA7FAUzs3zXB0Cwc%2FwXG3EgDTHPtkzW6K6FiKk8kIwH4ndiCVZeg9IaNPaFpQ0KDIHMo2GMQgdHd4QBTHnTl%2B3UOYmdQBPNI57QwpdPSvwY6pgGrAlfCHgMmj0YbgdorqopKQQx2Cn8dM3M7plxyEaqUZonIkKkm%2BbZUG1kOp4IN4BOosc9k0gb8I0Em9Hf4If2TIM4oB%2BCa2pN6oVhzl2z3d6hjPYXOld%2FlOPvW7aM1rpGGdA3wF60WCf6okHIQW8KHN5ETTw0mdS6Zo8AVAC8Hf6NQX61ie1SIvwVLKesHgvbGUBSTW0oQ4rjQAZY2ZghxJvCrRmAt&X-Amz-Signature=ae3dad4e0dc5afb3b3de87902eb699851ffb7cd6dea982ee457b8f2fe2f2edcb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BO3CG2S%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGk25SIkAIPKQsPLxaut5aOSr0ULkDPdTmJ72KFwlh77AiA2o5CTyFbjfGqXwbG37MhbjLDJWa4O8DBYM%2BZMxYIZKiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoi7%2Fnuh%2BrpidPUCsKtwDViHhE%2FODbYRAmOqUBT9zt4l3F0iChxvFqmLmZG1KAeNYxWNvJrWdqNNLMJBsR1zjOkJf6QIOQDucy1aeOCaiRlNbdxpXjw7xWKyvbktvP6mkBYon7XR8i%2BTKlqH7Kc5x2MyTMMWJN8dDLI9TgxVlQlxByAxDgsz5WY6usOeIZ9uEWuG%2FpRiB%2FuIzQxe4iWI5oIQz5Hb2HnBn9vRAm8YJ%2FQc%2BjIu7Tu6ptCbsf%2FmU0XYIay6ov%2FSV6qw9UJTvF0RyNDgVCAP97%2FxPT8pWIR8P4w3Qx2YQyDT99QZqYhB2yrSftHh0Nrv9escJuAMKwbR4kZ638qQjGdR2edXBTWMbxfDsA%2BQxm6Jtjz6bhlFR%2FN%2BLE9ILKLK3rJbmLYzPwHM6jTXQ7C2xmJX7l0p8ntbW9BbtN3XdjDUKo82BqPE1BjKDk8HTRy%2F%2FNxnOg2QmFYV7OstbfQc1uTCIa2LUzdiUOy8%2B8aDQ9WRsWbDyjWZ1IAIVCwUyQAWgCUCaHul9Tq37ICIzWiktjgRDU3GzN4DOAObRjDcUTcd6zqKPNiISvJtGFOJDX310wdxMHMBb1R3QncYWr0RGXjkoiSeI3YK5N%2FEQPZB081kpluMIgHwsiRZ7VQKSrX%2F1k4nLLh0wzMCAvQY6pgGGtnnMsYOAYGMMIoCmvm68KqWDDIvvkxrx2UNp8AKYDOYTQTrV4R%2FIJUfzc%2FicgA1j9ZiL5%2BrO5mlN4GvVEpT56VCixPXRzJ5uVHRKgTEt4qRqFTrYItsi027GUZzctthnKKVeXn%2FCuELnKd4a2bEP9Xz9NMiZ8n3sgHXmUr%2FSDAZxkMBNVelg3E%2FqufTKRDOs%2Fyga6FpHb7HTTQaqylIZanlQxMy9&X-Amz-Signature=8326dfd2f6be59424925f0de3fe1b4a697e7add4f582b22c625a409ea3ccef53&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BO3CG2S%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGk25SIkAIPKQsPLxaut5aOSr0ULkDPdTmJ72KFwlh77AiA2o5CTyFbjfGqXwbG37MhbjLDJWa4O8DBYM%2BZMxYIZKiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoi7%2Fnuh%2BrpidPUCsKtwDViHhE%2FODbYRAmOqUBT9zt4l3F0iChxvFqmLmZG1KAeNYxWNvJrWdqNNLMJBsR1zjOkJf6QIOQDucy1aeOCaiRlNbdxpXjw7xWKyvbktvP6mkBYon7XR8i%2BTKlqH7Kc5x2MyTMMWJN8dDLI9TgxVlQlxByAxDgsz5WY6usOeIZ9uEWuG%2FpRiB%2FuIzQxe4iWI5oIQz5Hb2HnBn9vRAm8YJ%2FQc%2BjIu7Tu6ptCbsf%2FmU0XYIay6ov%2FSV6qw9UJTvF0RyNDgVCAP97%2FxPT8pWIR8P4w3Qx2YQyDT99QZqYhB2yrSftHh0Nrv9escJuAMKwbR4kZ638qQjGdR2edXBTWMbxfDsA%2BQxm6Jtjz6bhlFR%2FN%2BLE9ILKLK3rJbmLYzPwHM6jTXQ7C2xmJX7l0p8ntbW9BbtN3XdjDUKo82BqPE1BjKDk8HTRy%2F%2FNxnOg2QmFYV7OstbfQc1uTCIa2LUzdiUOy8%2B8aDQ9WRsWbDyjWZ1IAIVCwUyQAWgCUCaHul9Tq37ICIzWiktjgRDU3GzN4DOAObRjDcUTcd6zqKPNiISvJtGFOJDX310wdxMHMBb1R3QncYWr0RGXjkoiSeI3YK5N%2FEQPZB081kpluMIgHwsiRZ7VQKSrX%2F1k4nLLh0wzMCAvQY6pgGGtnnMsYOAYGMMIoCmvm68KqWDDIvvkxrx2UNp8AKYDOYTQTrV4R%2FIJUfzc%2FicgA1j9ZiL5%2BrO5mlN4GvVEpT56VCixPXRzJ5uVHRKgTEt4qRqFTrYItsi027GUZzctthnKKVeXn%2FCuELnKd4a2bEP9Xz9NMiZ8n3sgHXmUr%2FSDAZxkMBNVelg3E%2FqufTKRDOs%2Fyga6FpHb7HTTQaqylIZanlQxMy9&X-Amz-Signature=78804595990540d74d143529f7243558663d1b601869ed41495bfb70f2c92033&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6PXBRGL%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDchrxojC0OCxC%2BYbtRsMubWUiDsHt3V%2BZ8w0UcgmkClQIhANows3MCQbKzxaXIab0qHIWW%2Fb7ZizX%2FEsbmzCF70NUXKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLEDF61HvxtJBRsaUq3APVrFD8ACFjyNTjEpBTy8iNOlk0W0XPSGoiaCSuC9%2BMf7w%2BC4cGrckLb0GNz0ku7aJRj804RjkF3R0yXeimJWHLZZCeYTzrdI%2BV8BmtUEeAcSyNN4nqlrJ%2BIHItt9o8IlIZb1mbj7jBzJwzbmas%2F6HdPPQr6Jtmak6lOk8rwO5ebuSvavPwGXmFoUv%2FoqGcsBtdZU9%2FJ7ftZTp%2FkxOoZ4uMT2aBp24TOM3bzBk2D8u4aDEt5JMaYGWo5jGGiChVydSfxas7rrWmZKFgvhgttg%2FvGvVaNThmlANA5CW4S5J0HdT2L5UI1qzRrMPsM37B2DgvYeBw1pdeaBPev9nf43TGSJXJYnUvUI%2F778haelKOIhogysTCGqa2NMGddvaa6998B50q3e%2FfR%2BcdXVTsYQMvIJJ67DXbeGLe985qZ%2By7L2kWYnn%2BNjveUgwbeInO5PHb8h4dDcvcJgSDwBzZY7KQ6HfJ7ad1vFB27OEmkhPiOTA66DoqBbByUKj0kI30Ga1UUxnjcwiP2gRolin4cFRMo%2FE6N2bpsCjdF9HjgpbT1ZcthTm8o08MoBF2TbAHq3GPB8Vg0yeHvn3c34k1XldnnrVqpix0GHkzga1G0mKesmhC%2BNep2FP6nFodqjDTwYC9BjqkAf%2B9CS5CumtWl%2B0EBXTEfEgHrMrODT2sXJFUzEYJnXOP2R9vo2sHI1G4aRnoOI8bLrJUfQQ48858YklshomOUosY5Tx26YF%2F7V5Vkz4j369IYSoLcVUfxRiyt7XtRN9kLIdWU1BxADGrC8Iv%2FdeoDphjpOh9dw8WZggw42rThRf%2FMW5jAbAV%2B%2BkJe1K3g3TlSGLK7Fsa%2FFItHLYo%2BE5AJlS3LMvJ&X-Amz-Signature=76760e383a9b1ff7fa6178b9d206cda73c7bffcd118ba84f12a2a2b797634407&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ2572E3%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFE24PetmMj9FQdAU9RNiyVy5qs9ymf%2BRWxaoDIWrxeYAiAzhdKwACpQ6EuhKWcV%2Bw%2BqXuWQy1qj6htmzylccPw8MCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvmqrjw2qWy%2BCY1e7KtwDfwuIVsMGlDNtkT946ve6xygxiPjlagufGqXA5q4t0J0wa3q7Rj3QAp7wGkYWo6HhO7wPrh%2FT902ErE9PUmw2CjpT%2FLHDuAleGu%2BpWrO0kEvzeJmTliXljTEI5M0gWhx6LKghbja7I1jhVXl113CMtmT7fCAbbwHsKmXetxMirs%2BTcsprMOq5gImh9AML9F9gN%2BjAyxRso1eUCbmXS%2Fgan%2FTHikt2UvEgWlK6Pxe6jfbgGIn7J7XPIB3SBynMWj3iSUI30b%2FN7oqZ%2Ftq0vLp4gHi25wBPBaBs7RwXwhZkd7OaMn8PchDAqIr3Bvo95tF%2FQLTnb5YEg%2BK4lXEKF8o5WY6HB1mOltZWpIXCuVgAwXheOpk1D5MsWQakNppacTRdquRwMzm%2BCA5%2Fbgfgjeu277cYNRtqjAugr2ZWEcVuzjLWpS620bjHAeffK1sWpT0tR9Iuhb1%2F3ODIwo53pzWo4fVMmGNknHuq%2BYMHUfMgGf%2B3m3oPgSFGyGD%2FGmyCHu3uBdCTFk29IAb5Pis5lLJPGV6E%2Fk0jlnqO1oD9Ei%2FjHsw8yfbxkvrBYl1f%2BtiHr%2FPAA4IptdT%2FyG303BCvfVKMuX9AfB%2Blzfj1jpmUMNT2rimk2y%2B54r1AdSJ6BE4w9cGAvQY6pgGz9FPV0qdbOSRq%2Fx%2BC8qNsanbdvj3M2ACO%2B3dfq2a6hOFghziW%2FT959iVsdsyOpJOdcLuxHiBi6AEGD1x5Q9NGtu%2FVyOuYFikXK5i22rHkBW2%2FVCz4ZmCUJjnwPCOsto35cs14zKZfxThiGKhjuyqgyTIcBvXm2BKk%2BleHPds1tvSQc2poMskbIoLC%2B33qlr13smsb%2B2WhwzLMpQKQh%2F84db003cOq&X-Amz-Signature=2eb5d768d7605113b52d9f3081098fa558f748d0a847a369dceceff00de274f8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BO3CG2S%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGk25SIkAIPKQsPLxaut5aOSr0ULkDPdTmJ72KFwlh77AiA2o5CTyFbjfGqXwbG37MhbjLDJWa4O8DBYM%2BZMxYIZKiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoi7%2Fnuh%2BrpidPUCsKtwDViHhE%2FODbYRAmOqUBT9zt4l3F0iChxvFqmLmZG1KAeNYxWNvJrWdqNNLMJBsR1zjOkJf6QIOQDucy1aeOCaiRlNbdxpXjw7xWKyvbktvP6mkBYon7XR8i%2BTKlqH7Kc5x2MyTMMWJN8dDLI9TgxVlQlxByAxDgsz5WY6usOeIZ9uEWuG%2FpRiB%2FuIzQxe4iWI5oIQz5Hb2HnBn9vRAm8YJ%2FQc%2BjIu7Tu6ptCbsf%2FmU0XYIay6ov%2FSV6qw9UJTvF0RyNDgVCAP97%2FxPT8pWIR8P4w3Qx2YQyDT99QZqYhB2yrSftHh0Nrv9escJuAMKwbR4kZ638qQjGdR2edXBTWMbxfDsA%2BQxm6Jtjz6bhlFR%2FN%2BLE9ILKLK3rJbmLYzPwHM6jTXQ7C2xmJX7l0p8ntbW9BbtN3XdjDUKo82BqPE1BjKDk8HTRy%2F%2FNxnOg2QmFYV7OstbfQc1uTCIa2LUzdiUOy8%2B8aDQ9WRsWbDyjWZ1IAIVCwUyQAWgCUCaHul9Tq37ICIzWiktjgRDU3GzN4DOAObRjDcUTcd6zqKPNiISvJtGFOJDX310wdxMHMBb1R3QncYWr0RGXjkoiSeI3YK5N%2FEQPZB081kpluMIgHwsiRZ7VQKSrX%2F1k4nLLh0wzMCAvQY6pgGGtnnMsYOAYGMMIoCmvm68KqWDDIvvkxrx2UNp8AKYDOYTQTrV4R%2FIJUfzc%2FicgA1j9ZiL5%2BrO5mlN4GvVEpT56VCixPXRzJ5uVHRKgTEt4qRqFTrYItsi027GUZzctthnKKVeXn%2FCuELnKd4a2bEP9Xz9NMiZ8n3sgHXmUr%2FSDAZxkMBNVelg3E%2FqufTKRDOs%2Fyga6FpHb7HTTQaqylIZanlQxMy9&X-Amz-Signature=4c9fab32e364a2e8744531b4f5bc598f2b08d2bfd1ee996b86acc4e72fa1a343&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

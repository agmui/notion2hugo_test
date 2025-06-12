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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5EWRYY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCZqEk29%2B9LMN1weSoD53cimHE9zZCkj%2B9rahxj6X8igQIhAKfuLFbxtQzDJ92ljQWXzs5DKY9IOiNf9jwgep3J%2FOJKKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzu4rpKDMB6hd8%2BjP8q3APMzZyj0xBpwcAolzUylakbAOUZt5La5sU2i%2BYXNA2aXroLekWvFpSHljy8gFaBX12UoG70%2B7cRyvEHKKiEBKYc0hWwMXeFDMLvqwmOKdkqivnTSZlCH7kuRWCA1yPc78qUhNxshiOgLIAl6D1ZRL%2FkFw77pWwwDr0UdTfc9S%2BEV8YObXerFxIMmS3DZO4K6nCIv%2Bt9HdfjmGOD2M15Bgom2MPsNzcQ0lJewksmHmZZMRwkwW1mDO%2FYAV7qMJIHAv%2FzNJufmL36JNGs4G2Fbcrqleb30yP5lf7b3uuX9uq1DNNZuqRvxf0CeBmxMcxrLfnGKFRz9rUIpY6Qg9R30nRmD6KFVI99IxGbqGdyADt16qg4LataFMEpQCIQ2BaXlKtR4HwCt5xp1MoI%2B6QMtS6LiVlkGPa3gTRPxGRM9RhbQzjr2wmdHiFwZC%2BP6NwTAyBzY7oDKF8Rl0%2BDIeWrTLHOPPVgskU3KfudMToRmBzpEprv44O69asjcX0dku4BWHlAd7YFbaCdvUVuaAE%2B0osvGhis6ULU9z6j4wHv3MpfqaxVg2Jdxv2x514vlQn9ZZuTzrJ8p2nqZannboEbDvp6GdzAlGncg1qNg%2B776bwNdBiWDcwsk2dRiGdkBTC%2BiarCBjqkAcHrYlT7Lx7L9BTB8c30tw73GzYNEpmRUcskq0U8ILkXFKr9Vt%2BNJUsvwMk7Qz8Ps553hCqKzsb7W6wJjdZwArC3jDXODdHOcrJH9kZpZSXl66kYw4pwGy7mSLQEz4syU3oDB5Jd7Hkt7%2F9MwLPIO1xI2id1FQGqo%2Bh1sYjSWbH7MV5wkDWNdHQsrTd9C1GGRuShC0f6sWH5Hz3z7rU6MhZ11tf6&X-Amz-Signature=5816a111e0e2c5c0a5836c40f6313e7748e7ea9b25bf75d6f1aa1c0eec550769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5EWRYY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCZqEk29%2B9LMN1weSoD53cimHE9zZCkj%2B9rahxj6X8igQIhAKfuLFbxtQzDJ92ljQWXzs5DKY9IOiNf9jwgep3J%2FOJKKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzu4rpKDMB6hd8%2BjP8q3APMzZyj0xBpwcAolzUylakbAOUZt5La5sU2i%2BYXNA2aXroLekWvFpSHljy8gFaBX12UoG70%2B7cRyvEHKKiEBKYc0hWwMXeFDMLvqwmOKdkqivnTSZlCH7kuRWCA1yPc78qUhNxshiOgLIAl6D1ZRL%2FkFw77pWwwDr0UdTfc9S%2BEV8YObXerFxIMmS3DZO4K6nCIv%2Bt9HdfjmGOD2M15Bgom2MPsNzcQ0lJewksmHmZZMRwkwW1mDO%2FYAV7qMJIHAv%2FzNJufmL36JNGs4G2Fbcrqleb30yP5lf7b3uuX9uq1DNNZuqRvxf0CeBmxMcxrLfnGKFRz9rUIpY6Qg9R30nRmD6KFVI99IxGbqGdyADt16qg4LataFMEpQCIQ2BaXlKtR4HwCt5xp1MoI%2B6QMtS6LiVlkGPa3gTRPxGRM9RhbQzjr2wmdHiFwZC%2BP6NwTAyBzY7oDKF8Rl0%2BDIeWrTLHOPPVgskU3KfudMToRmBzpEprv44O69asjcX0dku4BWHlAd7YFbaCdvUVuaAE%2B0osvGhis6ULU9z6j4wHv3MpfqaxVg2Jdxv2x514vlQn9ZZuTzrJ8p2nqZannboEbDvp6GdzAlGncg1qNg%2B776bwNdBiWDcwsk2dRiGdkBTC%2BiarCBjqkAcHrYlT7Lx7L9BTB8c30tw73GzYNEpmRUcskq0U8ILkXFKr9Vt%2BNJUsvwMk7Qz8Ps553hCqKzsb7W6wJjdZwArC3jDXODdHOcrJH9kZpZSXl66kYw4pwGy7mSLQEz4syU3oDB5Jd7Hkt7%2F9MwLPIO1xI2id1FQGqo%2Bh1sYjSWbH7MV5wkDWNdHQsrTd9C1GGRuShC0f6sWH5Hz3z7rU6MhZ11tf6&X-Amz-Signature=04806eb35db5842464233bac490215e4878d3c44bdcfe52fcf065d8f4bde0411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5EWRYY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCZqEk29%2B9LMN1weSoD53cimHE9zZCkj%2B9rahxj6X8igQIhAKfuLFbxtQzDJ92ljQWXzs5DKY9IOiNf9jwgep3J%2FOJKKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzu4rpKDMB6hd8%2BjP8q3APMzZyj0xBpwcAolzUylakbAOUZt5La5sU2i%2BYXNA2aXroLekWvFpSHljy8gFaBX12UoG70%2B7cRyvEHKKiEBKYc0hWwMXeFDMLvqwmOKdkqivnTSZlCH7kuRWCA1yPc78qUhNxshiOgLIAl6D1ZRL%2FkFw77pWwwDr0UdTfc9S%2BEV8YObXerFxIMmS3DZO4K6nCIv%2Bt9HdfjmGOD2M15Bgom2MPsNzcQ0lJewksmHmZZMRwkwW1mDO%2FYAV7qMJIHAv%2FzNJufmL36JNGs4G2Fbcrqleb30yP5lf7b3uuX9uq1DNNZuqRvxf0CeBmxMcxrLfnGKFRz9rUIpY6Qg9R30nRmD6KFVI99IxGbqGdyADt16qg4LataFMEpQCIQ2BaXlKtR4HwCt5xp1MoI%2B6QMtS6LiVlkGPa3gTRPxGRM9RhbQzjr2wmdHiFwZC%2BP6NwTAyBzY7oDKF8Rl0%2BDIeWrTLHOPPVgskU3KfudMToRmBzpEprv44O69asjcX0dku4BWHlAd7YFbaCdvUVuaAE%2B0osvGhis6ULU9z6j4wHv3MpfqaxVg2Jdxv2x514vlQn9ZZuTzrJ8p2nqZannboEbDvp6GdzAlGncg1qNg%2B776bwNdBiWDcwsk2dRiGdkBTC%2BiarCBjqkAcHrYlT7Lx7L9BTB8c30tw73GzYNEpmRUcskq0U8ILkXFKr9Vt%2BNJUsvwMk7Qz8Ps553hCqKzsb7W6wJjdZwArC3jDXODdHOcrJH9kZpZSXl66kYw4pwGy7mSLQEz4syU3oDB5Jd7Hkt7%2F9MwLPIO1xI2id1FQGqo%2Bh1sYjSWbH7MV5wkDWNdHQsrTd9C1GGRuShC0f6sWH5Hz3z7rU6MhZ11tf6&X-Amz-Signature=4b26e66b790f13349252280071f14a373c946c340b97baf01aa2204d636d1bb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STHSVGQY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDw8fGziziiSghP6HRbB%2FnMD22IRjj8ZVldPdJ%2FxezI8AIhAOEBqOWVL6oH%2FdRQCB6pDMHDwjk7QyNb5ErRwHVWiq5DKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwsdo0quwH0cI3NMs8q3AOazWzIrcmnINc3mJ5Bhj1l%2FQhKHc4nPmTBE17RuaerBK2UvJUBVr%2FgqxUvaRekPj0f9netSWVRE3KkbdGWAj4slSqjY6VnAPXE25DtaFCkK0xrCzg3PVW%2BB6XUXuiaOlZTH5ZuJUSGrhD6CjPZEXWwYf7B%2BLs6RDY95HzKRFizXZCO5G9x3Q5Jv1XTXFvt%2B0FSL7UIch1dZ2oAYturd6QNtjlNFHm%2FyFtYsk6xLWdA6WvqDEJOf1F%2F5sdcAWhAf9BnKxZpNQdkzA8LmVsF%2F2UE0g3uG9S0u3Dtp%2BFPCDODa%2Fwps3CB1gCfuThLZdztHqo47y90U4KzWsFBDsaePToPHnuJVB8yXSXPokCsoMiyI6Itv%2FOB7OXcQCrSqlgC4NwFLVfHBbcF2Di4MfFsVoDDSGsKFjDCrewi155PQKnTSe86ooRySyth9y%2BEpC3pKGcQWwuICZ5FsXA%2FbO4zGIt5OI9i7MYlmNtxjfjq03w7G0m%2Fg3kttcPBjK8YGPF%2FA6zvAtOCLQ%2FXVSkyI%2F%2F9J7NwPSP3spfbHF%2BY2%2F%2F8Iaj2uquBM00NFC8AX1Czc7JPpQHmjLGaCVQLZvgm9Hcov3kYbuOV6a9nahmq7lNP4v2BiuKtLVTqdTAd5gQGajDjhqrCBjqkAYZxXwcb1antlXamJER6HeMGz%2BTY9%2BEGUbIlxS%2B0vd42DpYQmgo19I%2Byihql6KMjGZ5rK8rPc9evWbsfcOjTUPqxM1UFjismoNdDSkptvNh1m4R5Dd2bRcbeJq9ENyVJ88EInIu6Hl4DyA%2BlK6h6zb2nBp15qZHlwCKA7Gu2rsd61Gy48tfKDl2uMtu6qrCcJk4wZV%2BaVN%2BVKVo5Ll4bL21r1onW&X-Amz-Signature=7e9d195e0b165aca7f9bd5834fbaa295346afefe075ae09ce6db45ccdfc226c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKMWXP6M%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIFFXNcH6tCfpFke6jlYqk9CeYQADsBca3EAvWOdIJW%2FIAiBkbdC5JmtV3VnNt3IZUakoiTgWzz95PF6jUDB5%2BmUnLyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhEjrX8%2BqQDvQaNFKtwDhQSdTK4ysdPazVqVI4u45QgAMU5vUipVwSvSt06EygX%2BYVYrMdvXV5LjiPLQlKcoeTluHrwdB3jxVkRngUA0TLnZiDQ9u4CQU3Il0DBv2EOqqw9Qz6z%2FTM84fJw7ayBRk9QA8AYWUV%2FsclbEEGkKdcv2fLyxmmWObgPMaHCyivoolXYrCAOJCuyvABXeg0ZwBZu%2FL7v2z9scMyDKwjySXeevgiF3zJJ13XiYnkpgV7mfCwggb%2ByiO7miQ0seaU6s9UsNGCfU99YXGtPX0Eq6O42ulqvBRwn0OawbWtORymT6pKZp2hXCpTmwZCTOo3Y1KYfi1DJyBr0gk6RU5RbHZnMaS11aVqw4guF3Dp8Y9KN4G0dIsY6ixKiGT8wxdUL0Z3k%2Fgont%2FOgV%2F6if%2Be7832nAV5Ez0ejiTEdkx1tKpx9OGoBQZ6o%2BlyCZxI8YfQ%2FejQEAcPJjE1NJkbrLD5eqmigtlgvWJZA1pUJvgZrNxVa23pK3P%2BwjoDO9RSttcSenjpAWVTZCmp8%2F4vau4RGcT1klJtoU1GRoucgd4KaCp2wLEvVCM2G2ohei8zqEvCHn8FAq0C6PuZLnvxSK7hJomo5CenolQC3FafZtQmMXA9ql9OKl2NK4Frmouhswt4iqwgY6pgGroHhII7P8%2Bw8iMLKI5IrZtPeLyjVoCge180syUHbkMT8Qtn2vCAde9n5ALSeXMDkSwfQCmKrpM3zrsPVhGzMm%2BRFAx28o2Ht%2FmkJp0DcBZKO%2FglA53vIDf%2BzpkxH6uXXByRtN1keTN56UKpkpzTreg3SIVvpwV5M7Tyb6zhegN55SIYklKxxKULyfY6Kd%2BrFqX9c8rUumTtTz6LjnxScEnMmWgYt3&X-Amz-Signature=b8a9fddeb074f6ae293a03a4cb5ebb16f8504c1f19c34bc8b6301c2430563be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5EWRYY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCZqEk29%2B9LMN1weSoD53cimHE9zZCkj%2B9rahxj6X8igQIhAKfuLFbxtQzDJ92ljQWXzs5DKY9IOiNf9jwgep3J%2FOJKKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzu4rpKDMB6hd8%2BjP8q3APMzZyj0xBpwcAolzUylakbAOUZt5La5sU2i%2BYXNA2aXroLekWvFpSHljy8gFaBX12UoG70%2B7cRyvEHKKiEBKYc0hWwMXeFDMLvqwmOKdkqivnTSZlCH7kuRWCA1yPc78qUhNxshiOgLIAl6D1ZRL%2FkFw77pWwwDr0UdTfc9S%2BEV8YObXerFxIMmS3DZO4K6nCIv%2Bt9HdfjmGOD2M15Bgom2MPsNzcQ0lJewksmHmZZMRwkwW1mDO%2FYAV7qMJIHAv%2FzNJufmL36JNGs4G2Fbcrqleb30yP5lf7b3uuX9uq1DNNZuqRvxf0CeBmxMcxrLfnGKFRz9rUIpY6Qg9R30nRmD6KFVI99IxGbqGdyADt16qg4LataFMEpQCIQ2BaXlKtR4HwCt5xp1MoI%2B6QMtS6LiVlkGPa3gTRPxGRM9RhbQzjr2wmdHiFwZC%2BP6NwTAyBzY7oDKF8Rl0%2BDIeWrTLHOPPVgskU3KfudMToRmBzpEprv44O69asjcX0dku4BWHlAd7YFbaCdvUVuaAE%2B0osvGhis6ULU9z6j4wHv3MpfqaxVg2Jdxv2x514vlQn9ZZuTzrJ8p2nqZannboEbDvp6GdzAlGncg1qNg%2B776bwNdBiWDcwsk2dRiGdkBTC%2BiarCBjqkAcHrYlT7Lx7L9BTB8c30tw73GzYNEpmRUcskq0U8ILkXFKr9Vt%2BNJUsvwMk7Qz8Ps553hCqKzsb7W6wJjdZwArC3jDXODdHOcrJH9kZpZSXl66kYw4pwGy7mSLQEz4syU3oDB5Jd7Hkt7%2F9MwLPIO1xI2id1FQGqo%2Bh1sYjSWbH7MV5wkDWNdHQsrTd9C1GGRuShC0f6sWH5Hz3z7rU6MhZ11tf6&X-Amz-Signature=cf7b8a5d7d69de2ee7e510182c8fc4239df1b5cdd4fbbae0f4ff0f1cd821811f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

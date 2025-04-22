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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3YHG3I%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIGlGQNYzNQohjlPVHOGbZTB5Hy1t9Q97yJXkET%2Fdcyl%2BAiB0xDZfgvoCe6AzBz3HOQqQ3jjlUypOMNQ2MMZfEuFw7CqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2C4SPzgDyr9W%2BR%2FyKtwD4V4tn7HFOw3IDEY3QAQzeiAJR3fAu0kvAr%2FLMmFKAPLDo6TKZOakbLog%2BOgiG%2FmkBRF1bWziU1elaYsppwWV1Zjx%2B0A7ojCn0sRtMnfKYBM2feMj54nyYUSXTCtdxYq1BR%2Bm7qOOA4C5P8hBBxaWe47NznvAQ%2Bztuf3BDHrgPl%2BnrBVuDsEA%2FZXj36m2lqnPQqkHQNgXPxRcnakCa%2FFba6Bi%2FjzEysc98iW9x%2BEweK47jqI8mBrPVnLdifM%2BMrknip2ssRmqAvdE5iXtqllBWOcDwd%2BPtoSsqxFKre3FLAJz4DrwgpAGKwuTpGnK0aoXIkY4cxr13q%2BbMYvo%2BKJwJU%2F5Bbgpv%2FTo%2Bp01d4eqX71gquq7yPHJjuLvDbyHregqH9wRFQv%2F6WpqOqtNqfTOO%2BMZtWvS3NtmUvUV7ybO%2BMUzx5L19B3XcvdDgy7gwbfxmgXFNhQYxjywtrzQg1h%2BUXsm%2F0A53TM4IF5KwaGFh%2BMsuoc0H7S9OhODsq0X6e02ahlGUl8uRpXbaZYufhhtPa1BAGkfYZI4beq01CQsfitnSseBjjeBM1Ea35O0viKlxcdby7I%2B3Z0DHVFGFekAGdYqxL7rGThEXZ6qlhbmaK9PxTcAy5bhMo8nBjYw5KOgwAY6pgHy00j8%2Bp6u%2B%2FbCmdOSYIAcUx8Z00JFtPjBqOV8igt2DUsRRy%2FDfZMBRy4EBf%2FwbBzwPwyxDbNDAKy5I%2BA6iA9JovMb3y%2BHC4sgxRsasZ8adRR0DJjZV8Bi8SKUqkhEmLa1QIt1B4wjtXwux0ADjMmgvA6k84CpG2VxgF56fm6%2F1mCh6jOw2mCarIUit9T%2BuIlecEM2vnCsM2YQ5ONh7%2FSdzUs8mDiF&X-Amz-Signature=3d7add874a91593747b75a02878ae8c3c8aa69f724bd208afe6eea258d3e800d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3YHG3I%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIGlGQNYzNQohjlPVHOGbZTB5Hy1t9Q97yJXkET%2Fdcyl%2BAiB0xDZfgvoCe6AzBz3HOQqQ3jjlUypOMNQ2MMZfEuFw7CqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2C4SPzgDyr9W%2BR%2FyKtwD4V4tn7HFOw3IDEY3QAQzeiAJR3fAu0kvAr%2FLMmFKAPLDo6TKZOakbLog%2BOgiG%2FmkBRF1bWziU1elaYsppwWV1Zjx%2B0A7ojCn0sRtMnfKYBM2feMj54nyYUSXTCtdxYq1BR%2Bm7qOOA4C5P8hBBxaWe47NznvAQ%2Bztuf3BDHrgPl%2BnrBVuDsEA%2FZXj36m2lqnPQqkHQNgXPxRcnakCa%2FFba6Bi%2FjzEysc98iW9x%2BEweK47jqI8mBrPVnLdifM%2BMrknip2ssRmqAvdE5iXtqllBWOcDwd%2BPtoSsqxFKre3FLAJz4DrwgpAGKwuTpGnK0aoXIkY4cxr13q%2BbMYvo%2BKJwJU%2F5Bbgpv%2FTo%2Bp01d4eqX71gquq7yPHJjuLvDbyHregqH9wRFQv%2F6WpqOqtNqfTOO%2BMZtWvS3NtmUvUV7ybO%2BMUzx5L19B3XcvdDgy7gwbfxmgXFNhQYxjywtrzQg1h%2BUXsm%2F0A53TM4IF5KwaGFh%2BMsuoc0H7S9OhODsq0X6e02ahlGUl8uRpXbaZYufhhtPa1BAGkfYZI4beq01CQsfitnSseBjjeBM1Ea35O0viKlxcdby7I%2B3Z0DHVFGFekAGdYqxL7rGThEXZ6qlhbmaK9PxTcAy5bhMo8nBjYw5KOgwAY6pgHy00j8%2Bp6u%2B%2FbCmdOSYIAcUx8Z00JFtPjBqOV8igt2DUsRRy%2FDfZMBRy4EBf%2FwbBzwPwyxDbNDAKy5I%2BA6iA9JovMb3y%2BHC4sgxRsasZ8adRR0DJjZV8Bi8SKUqkhEmLa1QIt1B4wjtXwux0ADjMmgvA6k84CpG2VxgF56fm6%2F1mCh6jOw2mCarIUit9T%2BuIlecEM2vnCsM2YQ5ONh7%2FSdzUs8mDiF&X-Amz-Signature=bfdb371b1ba21878e3f9aff966acc415e7aa0826e33449c020b5ef2075e186f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF4XDAXS%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIEt6Lo9epz7WH1G6z%2FK9pVzfRNBUB4FtJtFkdd2OyuI3AiEA7TyHnoe9%2F%2BlyGBRZbElpAoqD5RcXGeoKw6lyOGv0yrwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdGSlJmkmfoduHryyrcAze3Vv7n6VciHXan9SMnAIcZGad3Q7FDGIDobBoW8358jlHiMGatIdb2CKEWPaGVkGQrhqDGwEwZnYx6naLxCPXWjAI92FNTrUP4%2FEgTjAbvpwnTyg7JUn%2Bk2pYCJeLsG6oJqIWlkVgnZfoqeBnx505ko9KEp14dv7LHEu%2BKSFRIELOKJGWrn0GU5kan95DQW7iI1ZpkqGONVni4Qw1oh9bl4rF%2BvNwhr8xG1OLRDWcDOyjRJRgQue72sqsuMJctu%2BrZ5lnlcqIrEN%2BB5ka%2BpqRvLqwAXYqmAADFtWLdyi57aU83idPOIgCf5%2BNdFhKTPmxOtTnekYiRMJx7nLVeQqR%2BbkYTzZ582fCopuazQDD4vcfb30dZeWeZ9A1%2BcKFNd0cFDSxg5dg6hHWlp91olKUOozIQqY99jq18uNXfMbtCNZk47ExMbaIPJJp4cGQaZcQcVsba3j0%2B0gUb5%2FyorXkSdOYzH3htxgHWMBknuZ2uJwqztNNwL0eO6OhioO%2F3tagQE0xIfnKT4hnHAQ5Lwl8kF%2FAu03jR%2FlBhFD6raKVavwPy1e16xUv9FTtMeIVCyHSi3tZKUjYpV3Fqw63ZJs%2FvRqd3NJxqrD6OcyaH695eVv6LuhFdpIIOYyk9MOqjoMAGOqUBjdqqnwSGXIWC%2Fs3KijDWgXSvEp%2BY%2F9uRSGYahPGgcuAx7heKNwkC97VZEauaidgNK1rBvuQdLVBMmj8WjA9hItNz%2F%2FOouceinvf%2FURfmNZz%2BdBOu86SVjIkaapdwzoB%2FJioDfCTrEo0jS%2BSEX%2Fm2jVtYgcR2fD5bIKvvQj9tSGNZ1sk%2Ffs2ZyXDh5f%2BFwf%2B75XuX6o5kJ46xrc6PROcXDl%2FEJ2N7&X-Amz-Signature=a07302ae5304f04629141a30a75fa1677ad20db69e1f7f4bf972143d59cf0158&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3XGVFAK%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIHZ4GPMH%2B6xl0DUAW1p2le52sc6fyK5VUFYkiYJ9uAwCAiARgH%2BKuR8hLBDdncFXVGDD01d26txnFbFSO9KPYX%2Bc9CqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoqhSxhhtnOJ9NZn3KtwDhc%2FpUpfG7eKaTQvcU28onx0OHMq94AkoJaER5VQmP4azY6FzukOjuvfzqydTntFYRgD9mEtkT%2ByNGSQPYzs0iL9pH4gHNLTXmOmoZ%2Boi%2FB7wrJQt6zGuqLcDGYr4BSGjkDY3qhJa9kv63sz3dEGdrXEEQ15MgcSb4XFeNqHNHgdp4GkpfVx0tfT5MDbPQ1oiG0uitITQ982XmoJuH5j5Zl1xsRcpwOSRsxymkT91X9vez4yG07XMm7blGBeXXh907Cte6OOL3qAPJAW378cCF8Okuz9fAn0Otuy%2BlTBoJj4A%2B%2FpBNf%2Fg8DHEUhqrvA4EI8wAdyQt7FA0dJWGi6ADkWvjQNBa%2FLBf9Gj7jme17HmrBF7p6BmpHpiLvEeGcCZXUzks83ZborrU4MzP1iFNghpH5dfBf3TgEo30uxI5UagUQ49YIakPAvz0Biwr2%2FbAdPi9SFZuoSv%2Bh0ANNL%2BkdmrEEz2%2BSwY%2B%2BZXTK2xVNsiWKDmX2dmpSxhUtX1%2Bnn4r0yU1uQIV5JVLg7M%2BTP%2BxaIqjSuhnd9P4gqCmuXXJGy2ADudl0MamxwBOzlIVSr8h%2BAsShgrUOWOUp%2BaMY9a4R3c7DqwVxtw8Efy7B48qmurkkykvHe6UuYOrc3IwpqSgwAY6pgGc53qr8zHy7ebzXELF3vWC86nL9TqUFwWBRjoGunPfd%2FmillUa3pvMUTpG93VbPAFddg7ILzOMwBvfbroTdEfjeL404aXIUv678BY4QZKnazJfJqkabHbpV01ULH77sTNjkqt9oFcO%2BbWvDQAy0bPiXiv9NUD5UXIsEcdWGSQIosG57HtCDKgEht%2BccMBudqlmS3On%2BqaltijpXJHhGNloffOS4F0v&X-Amz-Signature=8da9fc29070dfa8229d6c63dbeed20cddae5a1724f340ac736b298d043958f3c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3YHG3I%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIGlGQNYzNQohjlPVHOGbZTB5Hy1t9Q97yJXkET%2Fdcyl%2BAiB0xDZfgvoCe6AzBz3HOQqQ3jjlUypOMNQ2MMZfEuFw7CqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2C4SPzgDyr9W%2BR%2FyKtwD4V4tn7HFOw3IDEY3QAQzeiAJR3fAu0kvAr%2FLMmFKAPLDo6TKZOakbLog%2BOgiG%2FmkBRF1bWziU1elaYsppwWV1Zjx%2B0A7ojCn0sRtMnfKYBM2feMj54nyYUSXTCtdxYq1BR%2Bm7qOOA4C5P8hBBxaWe47NznvAQ%2Bztuf3BDHrgPl%2BnrBVuDsEA%2FZXj36m2lqnPQqkHQNgXPxRcnakCa%2FFba6Bi%2FjzEysc98iW9x%2BEweK47jqI8mBrPVnLdifM%2BMrknip2ssRmqAvdE5iXtqllBWOcDwd%2BPtoSsqxFKre3FLAJz4DrwgpAGKwuTpGnK0aoXIkY4cxr13q%2BbMYvo%2BKJwJU%2F5Bbgpv%2FTo%2Bp01d4eqX71gquq7yPHJjuLvDbyHregqH9wRFQv%2F6WpqOqtNqfTOO%2BMZtWvS3NtmUvUV7ybO%2BMUzx5L19B3XcvdDgy7gwbfxmgXFNhQYxjywtrzQg1h%2BUXsm%2F0A53TM4IF5KwaGFh%2BMsuoc0H7S9OhODsq0X6e02ahlGUl8uRpXbaZYufhhtPa1BAGkfYZI4beq01CQsfitnSseBjjeBM1Ea35O0viKlxcdby7I%2B3Z0DHVFGFekAGdYqxL7rGThEXZ6qlhbmaK9PxTcAy5bhMo8nBjYw5KOgwAY6pgHy00j8%2Bp6u%2B%2FbCmdOSYIAcUx8Z00JFtPjBqOV8igt2DUsRRy%2FDfZMBRy4EBf%2FwbBzwPwyxDbNDAKy5I%2BA6iA9JovMb3y%2BHC4sgxRsasZ8adRR0DJjZV8Bi8SKUqkhEmLa1QIt1B4wjtXwux0ADjMmgvA6k84CpG2VxgF56fm6%2F1mCh6jOw2mCarIUit9T%2BuIlecEM2vnCsM2YQ5ONh7%2FSdzUs8mDiF&X-Amz-Signature=8a6be7bf2581274ac15ed6fbd18d9778a2cb1e5a70b2e4b82eb683c3e6eef95f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

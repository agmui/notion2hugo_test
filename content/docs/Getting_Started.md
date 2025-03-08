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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQG6ADQV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIAepeGLxXQcTf%2FjBsqsOHjbSGcI%2FJLCtxEkLH2j81RsYAiAVoCOvtqjhrhWH1hlKn%2F60anuLz8KaZZXw5Ev%2F3jkyGyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMeov5GwBdjZPd0cntKtwDxY%2BJulwJF4rALI4106Sp9%2BGRJptAxAyU5oyT%2FFno2I1rgkgDYotIDeF6unqOSELZfoTvZDiEnDTUB7ebiINYHWecygIj9wgoyaDu5mFtrCYQUAC%2F4aCWy9Z6OmxAnWpP6Qve2InGiEZJB%2Fp1GXvieI6qbeC908lhmsVpjuGa%2F%2FTpQ%2BhIUuzgEo0roYwW29LlY0s99TNPIVPg2Xzs1c1%2B89V3GH9%2BibGgj63fPD6ls4OfQHgjt2AzVhDU%2B%2FGMQweI7Acu4kUF1NaqOnq3HXncr4VJWiJYc5EBzeT%2BiJHgJuG4K9W1LL%2B8qSZjyCfB%2FSigaUOVdm556o2OAmH8OJG%2Fc2XPfSkiz8OmU6QtlRjpNUqg6WVfMCtC%2B0UKYw9apH1LEkMppcv0c8YPy3zQGFzhmjA0Z61MCfYuzn8%2FTEtpZGPxijwRwlhNDEkozX1QAcvhQU6e%2BZH1AhHSAy9sxeL3pgg7SC%2B%2FH35FFWudg4icAo7Hr9EY22DrVIMTmcIpbPK%2Fda5LuGXLy4C4%2BxMBx1mghi3NSI9IcWzvs6BoIRqLf853GNL5lQGEpaQrT3%2F6%2B3G4QwmBVcU7pUaFDL6Oaz6MsdNBBGyJf3%2FiX%2Fwx4J0VH7dqTpKSoXHjS9sco7YwveCvvgY6pgHS5D5LR7dbGxRgST3H8Hbo%2BvGF3XRhh2nYdilI0scQVLKtNZWrIdp2uirnNLQSk6Or5tQILr2IGbcS8FYkikBxW0HUhxyTNtiNpJV4HRzHohD2uiGmYChNcGy7%2B8MxjSGDvCsnGF7i33XTs%2FOF1h7Nf14gI7L2DEegzQK%2B62WORYsHt15Mapi%2FJkS6iM%2BkaDkoT3fbjwPzReNfz%2FUTY1vQhBXAMHGo&X-Amz-Signature=8662293dcf2c006584b8afe8c911c717faa2e1bcf87322f7713585799d1ff20f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQG6ADQV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIAepeGLxXQcTf%2FjBsqsOHjbSGcI%2FJLCtxEkLH2j81RsYAiAVoCOvtqjhrhWH1hlKn%2F60anuLz8KaZZXw5Ev%2F3jkyGyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMeov5GwBdjZPd0cntKtwDxY%2BJulwJF4rALI4106Sp9%2BGRJptAxAyU5oyT%2FFno2I1rgkgDYotIDeF6unqOSELZfoTvZDiEnDTUB7ebiINYHWecygIj9wgoyaDu5mFtrCYQUAC%2F4aCWy9Z6OmxAnWpP6Qve2InGiEZJB%2Fp1GXvieI6qbeC908lhmsVpjuGa%2F%2FTpQ%2BhIUuzgEo0roYwW29LlY0s99TNPIVPg2Xzs1c1%2B89V3GH9%2BibGgj63fPD6ls4OfQHgjt2AzVhDU%2B%2FGMQweI7Acu4kUF1NaqOnq3HXncr4VJWiJYc5EBzeT%2BiJHgJuG4K9W1LL%2B8qSZjyCfB%2FSigaUOVdm556o2OAmH8OJG%2Fc2XPfSkiz8OmU6QtlRjpNUqg6WVfMCtC%2B0UKYw9apH1LEkMppcv0c8YPy3zQGFzhmjA0Z61MCfYuzn8%2FTEtpZGPxijwRwlhNDEkozX1QAcvhQU6e%2BZH1AhHSAy9sxeL3pgg7SC%2B%2FH35FFWudg4icAo7Hr9EY22DrVIMTmcIpbPK%2Fda5LuGXLy4C4%2BxMBx1mghi3NSI9IcWzvs6BoIRqLf853GNL5lQGEpaQrT3%2F6%2B3G4QwmBVcU7pUaFDL6Oaz6MsdNBBGyJf3%2FiX%2Fwx4J0VH7dqTpKSoXHjS9sco7YwveCvvgY6pgHS5D5LR7dbGxRgST3H8Hbo%2BvGF3XRhh2nYdilI0scQVLKtNZWrIdp2uirnNLQSk6Or5tQILr2IGbcS8FYkikBxW0HUhxyTNtiNpJV4HRzHohD2uiGmYChNcGy7%2B8MxjSGDvCsnGF7i33XTs%2FOF1h7Nf14gI7L2DEegzQK%2B62WORYsHt15Mapi%2FJkS6iM%2BkaDkoT3fbjwPzReNfz%2FUTY1vQhBXAMHGo&X-Amz-Signature=cbcd3f9737b196b4c8d46349df0b2befc8997082b7d86cbcca14f9a0416784c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6IBEMY%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIA3lYFUYpJi%2F%2BUo0UaQMSPjQVTyT5mtdYnlqbd8WC1NVAiA8nHxIAoC8CwzePrQOXwyQN7zQNmkuGmEBgGvyhsv5wyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM%2BuotAKlXsmCsDClBKtwDOEb%2FoQ5pgWI4pLvHkkMGibM7pOX%2F80MuhQ3eYUfPow%2BbF9u9%2FzZDb%2FIfmm%2BO1w7YRf8asxLHAjoZsEhKlQ0KBJRgdsfq9A8Fp5td8aiz1Xm%2FCNDmUrU3VSrMBVl%2FmsJBNkEfxTdywYN9gdMZafCYHb6LxfcNRtEeb1YQ8xJzyfFvgo6x9fCGaEx6G1Us4B5Vw%2BZH7FxZorDA3A41YI7asGBuooBZktlhVaUlwvfrwMKiBviTuIwKUPzAp2%2Bm%2FgZL%2FrdK0I2gWoqFo1Rga92TNj7Nu3YSO7J4wB%2FheMGbywdtxMmhyhGO5WgwgCPM61EUk9ltG6Wh6PVYDFZWzWNSZ9q4Nbz6qiXXqB3lc4xZOensDBJcoX1qOkpUMHf%2BEi7%2BOYJk%2FCnmD4jNT7lck6FSfaD1auQYu0a2dF%2FdrnNWsLAjnDKEfvTgHx0ysZrI0HqdKPdLJe%2FaiVe0%2BEcMVHf%2Buhm3h4FYsdgE905F3iG3g%2FIJ4ylkKo6WY%2FR17pwBDxmtCsRdzpkfZT%2FE1RmX9Ke7fKB%2F3gI5Wvvn1ICwkO6419G2T2zkwOXaMQ0Icni6KXcdOC5raY%2FyvYsp7tDaK11uGhwbyZcanvjIQn1N0HeauXzORAycaH1N0wc96XQw1OCvvgY6pgE5U9k2DkY9ed%2BRYZZHpp05E6OtciyZ7ox1HDK%2BklQKMvZ0y6g%2FFN253kkh6GcT6Jpg2%2FGi1AHcEe5k5sccKqS7pJwodQhpFWBX0BDS6zbTmcOZPPdedykxYJT066RkrVY5yNTnBb1Y1Dz0nDqu1nngwd%2FEBswp2zrrF81QcYd283Nkz%2F3m5irfIcO729lrUZp%2Bq7YDvZRnqKGWjbaqsafgdpyvXX0U&X-Amz-Signature=ab55d4b431b02d8849bac761bf9e46c24a3eb33762864ad595a4e27288878a62&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZCZCOYO%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCTuStkviUg1cNEII7OihHnaXc17Uw4QNaYkTrjkV2eywIgK1U%2BYeBUQA0ODHAk62sFpQPgIrltIuiTOnYRLTOWhWAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDLbjOrfeKkb5VXuWpSrcAwIZzReKk2chnZL7JrfTxf6VpRRavRz3K7luT5v6%2FU0Lg1FTl87dV6GHtqinM1iW8fJYOfzl2mgMcPWVJLPkt2zyYLXZHUGt6cfby7ww5SOM5B8sJYBS3H4e1ULX1Cg25KIkRGoR6pdqsxDSmdFvAxn11FfQRUDLnQdxDhjDyUZFUNGlU2wySZ3BLSmsnrufCacKvlqn%2B2qXkpAe22yxOlVFrq1LY6jJYGG5AuOqqeW4iGv2R2ncm4G6TqUwsFAul9UoiUXoBGwCeTMS6sjkt7rRl7sj3maBKhxBtWZ%2BP4qiRg5fpQWoE9jkelZTbFaJ7oLbIJAu7t2J2J5F9Xt2bcj%2FMBhp7IhJMQN2je2VRWeLkamUykVBCGrmT5BvJnN%2FgFlfr7rqEe%2BRl9oUteP14ShI0YXwofrsl5d79SANT63DI8NtcEx%2BLMDCUe59kVC8LMKhrS7oi6JOj%2BaocM30YuuFIhzCTPN0PKccJjDhXmBhomkPRAUga%2FSdNvOzcbCjzwoZQqcay3R7WH14l2pt%2BiDPX%2FNTE7MGIdIHxuLhWN1YjHdyT8caC89D%2BbU43heNR6cPT5bRML8ww5UZBZ1T5KLq4BPHtg1vOkZiaUT3B9otsaMWrEOMJ1GLh0noMObgr74GOqUBFB86bisk5xHVjwbMeDe0x3PcjGDmQT%2BkEXBq6eZa%2BeX8cx4ZUFWESurmfR0ogPYLR4DcOIK7N%2B2rADc7EqyiHyrFcH5dsfena%2FwWYPIGZOQ4%2BB3vXGgQaxYaPeFOlkczF7siKASAkD0WrvyOTMHgSzB9ow4ODujLAYVTyX7NZwhE1rM0ecRqeSxr5%2FoTW5AbRiprrJl77GiLls5EwT94nDbYwk09&X-Amz-Signature=47a81459c01f79deee16b8e4b31bf888332e7fdcef7adbee982595fd5381786a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQG6ADQV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIAepeGLxXQcTf%2FjBsqsOHjbSGcI%2FJLCtxEkLH2j81RsYAiAVoCOvtqjhrhWH1hlKn%2F60anuLz8KaZZXw5Ev%2F3jkyGyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMeov5GwBdjZPd0cntKtwDxY%2BJulwJF4rALI4106Sp9%2BGRJptAxAyU5oyT%2FFno2I1rgkgDYotIDeF6unqOSELZfoTvZDiEnDTUB7ebiINYHWecygIj9wgoyaDu5mFtrCYQUAC%2F4aCWy9Z6OmxAnWpP6Qve2InGiEZJB%2Fp1GXvieI6qbeC908lhmsVpjuGa%2F%2FTpQ%2BhIUuzgEo0roYwW29LlY0s99TNPIVPg2Xzs1c1%2B89V3GH9%2BibGgj63fPD6ls4OfQHgjt2AzVhDU%2B%2FGMQweI7Acu4kUF1NaqOnq3HXncr4VJWiJYc5EBzeT%2BiJHgJuG4K9W1LL%2B8qSZjyCfB%2FSigaUOVdm556o2OAmH8OJG%2Fc2XPfSkiz8OmU6QtlRjpNUqg6WVfMCtC%2B0UKYw9apH1LEkMppcv0c8YPy3zQGFzhmjA0Z61MCfYuzn8%2FTEtpZGPxijwRwlhNDEkozX1QAcvhQU6e%2BZH1AhHSAy9sxeL3pgg7SC%2B%2FH35FFWudg4icAo7Hr9EY22DrVIMTmcIpbPK%2Fda5LuGXLy4C4%2BxMBx1mghi3NSI9IcWzvs6BoIRqLf853GNL5lQGEpaQrT3%2F6%2B3G4QwmBVcU7pUaFDL6Oaz6MsdNBBGyJf3%2FiX%2Fwx4J0VH7dqTpKSoXHjS9sco7YwveCvvgY6pgHS5D5LR7dbGxRgST3H8Hbo%2BvGF3XRhh2nYdilI0scQVLKtNZWrIdp2uirnNLQSk6Or5tQILr2IGbcS8FYkikBxW0HUhxyTNtiNpJV4HRzHohD2uiGmYChNcGy7%2B8MxjSGDvCsnGF7i33XTs%2FOF1h7Nf14gI7L2DEegzQK%2B62WORYsHt15Mapi%2FJkS6iM%2BkaDkoT3fbjwPzReNfz%2FUTY1vQhBXAMHGo&X-Amz-Signature=b4112572270a0fba5b93c98ed695611f7b9afbcb96efaf22cedcbbd810bb282d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

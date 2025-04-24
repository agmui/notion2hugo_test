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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP7JOHBH%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIBPO1jPJCqjzgF5WoQ8YWBA5gEDUCw9nFaPJAlchQx7CAiBuxeO%2B1YWAZll0%2BBpa%2B20gbg3cP9CZ9x%2BCGU2wP6xvMCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM0c%2BUWkTuQr7CNO6nKtwDvV5e0MbKuUX0peh6L5axUMMcdLEvrqF3qkpqOs3FOzZxvUMP7x2Ie%2BjKz53gWdh6NUptlbsYYrjN%2Fq4IMX0yH9N1FadQgy0B83EIPKRFW2mfFwu2eu8TyzMd0%2FaDRmXM1s0pUIh6J%2FGGmf01AUpNmBBiIxuCWx53tpU%2BAYJm%2FyLMm1SPM1v8yYjpBl0giS4d3rdUQwI805p0w44acic5Oy72a6lR0mATKsJwWXOMlLRTnu4pZlXpTaM%2B60agUeR2u8%2B7c5ZoPhdq97LCW%2FiBaLnfn5M9bsYR%2Bz%2Bub64ZCz2oBp2DvMSNYa%2BNBmrs%2FTYEl7t4qsPrBjhKHbQ2WhTL721Ea3BeXcaw8JyAX6EaZbxCbMzrjEG9smHhzrudgSVrwXgRsxOjobbDkP3y%2FOf1l68JSPl%2FJLGeYjn8KLNQW23p01LykZz%2Bwum7al1%2BCs1AYpcB5dZc2o1St4LAg%2BMtFDxowZ4kawiQ0R4bIp%2FdchOIo0%2FQLzQ66gvl1zH3LJmGfy4G%2B5pbREvf1c%2FHv5rr677ZdOQ1LvaNJ3LIfuEhLveAjn7WkG496QkF7CCxRmBlkmVA%2F4uLJNVbu8R%2Bc7NAJpHgeBfcDpO2JFsjsBd1x2mkID5gBc7GgX7bagsw8uiowAY6pgE%2FGa4cczT4soG8nTOLolX2Ujjeo6CWZ1jK91RVYOcYETJ7zVxGHgKIP6CQ1R%2FbofzH1oSfzGuabOg3B8p2AG09xAr5JHwicYl1AxYoxPKCDVsepq9vHJVBGxJHMuMS%2BdOldGQdaGyHQjwgRUCqhNAAyfh3XnE6S7Eu1e30gbsAcpFKPUPUvs6I42k7ALG0YcTHa8tUJMGnTsyRIcyHKk4c9EUOYm70&X-Amz-Signature=9b1a0f42fd5a2a1af9cd37b2b5f54bc614b40f9a84693e1acfe018d43f07ebbe&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP7JOHBH%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIBPO1jPJCqjzgF5WoQ8YWBA5gEDUCw9nFaPJAlchQx7CAiBuxeO%2B1YWAZll0%2BBpa%2B20gbg3cP9CZ9x%2BCGU2wP6xvMCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM0c%2BUWkTuQr7CNO6nKtwDvV5e0MbKuUX0peh6L5axUMMcdLEvrqF3qkpqOs3FOzZxvUMP7x2Ie%2BjKz53gWdh6NUptlbsYYrjN%2Fq4IMX0yH9N1FadQgy0B83EIPKRFW2mfFwu2eu8TyzMd0%2FaDRmXM1s0pUIh6J%2FGGmf01AUpNmBBiIxuCWx53tpU%2BAYJm%2FyLMm1SPM1v8yYjpBl0giS4d3rdUQwI805p0w44acic5Oy72a6lR0mATKsJwWXOMlLRTnu4pZlXpTaM%2B60agUeR2u8%2B7c5ZoPhdq97LCW%2FiBaLnfn5M9bsYR%2Bz%2Bub64ZCz2oBp2DvMSNYa%2BNBmrs%2FTYEl7t4qsPrBjhKHbQ2WhTL721Ea3BeXcaw8JyAX6EaZbxCbMzrjEG9smHhzrudgSVrwXgRsxOjobbDkP3y%2FOf1l68JSPl%2FJLGeYjn8KLNQW23p01LykZz%2Bwum7al1%2BCs1AYpcB5dZc2o1St4LAg%2BMtFDxowZ4kawiQ0R4bIp%2FdchOIo0%2FQLzQ66gvl1zH3LJmGfy4G%2B5pbREvf1c%2FHv5rr677ZdOQ1LvaNJ3LIfuEhLveAjn7WkG496QkF7CCxRmBlkmVA%2F4uLJNVbu8R%2Bc7NAJpHgeBfcDpO2JFsjsBd1x2mkID5gBc7GgX7bagsw8uiowAY6pgE%2FGa4cczT4soG8nTOLolX2Ujjeo6CWZ1jK91RVYOcYETJ7zVxGHgKIP6CQ1R%2FbofzH1oSfzGuabOg3B8p2AG09xAr5JHwicYl1AxYoxPKCDVsepq9vHJVBGxJHMuMS%2BdOldGQdaGyHQjwgRUCqhNAAyfh3XnE6S7Eu1e30gbsAcpFKPUPUvs6I42k7ALG0YcTHa8tUJMGnTsyRIcyHKk4c9EUOYm70&X-Amz-Signature=57dc0dc5c7f7a27a26e83568abc208800767edaec5053e637dcd3733138623d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YUYPZ3D%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQC8NxhoGXtn3o5jxGLR9iimR5e%2BSUegfyTG5uMt%2Fjyd9AIhANLRltKBOc5%2BLEPZXR6CPi4Ae4Mruo9J1uchzUo4g2urKv8DCBYQABoMNjM3NDIzMTgzODA1Igyt%2FBxUeXlLWYfpnG8q3AOTQyI9P3fiW%2BIuQIHwTA4dkj5H%2BVtg9Xcbv0%2Fnwwrei0mi%2FQMnSZsAumem58gJxaIKyYfz0ut3oZzPC1NgAKaTQY2FUgtI9833XYKPbzHGfIKuXaGSwJWHFUmvl%2B1LzgSwKivmNAaAXRZm%2Bfl2FXmCCYtD7aiHau03W95TokDDXJ37Il10mj2fohFlucYKKGImQ1gx%2FPU6d2zB3C%2BZXZofdWJYfhe5N9TBcmlY6yH5HSGb%2B8CWmG4CaZeu5Vwpq4b9ppDQuKxChjY084pDMw0Vwer9q98xTpzWEDnOjsRXS34WPnbBOknnP%2BYVhpxFPHisPyxlCklrypiCjbC6ik4r73toEVh3kTVufXRfS1v12c0NoQXAzwfsMM5NE2fDbZduXePbdZ9KxCb2C7bMwtfcEbHzELKdA%2BrwoWzAQmHYEKtTYi50hdKai%2BCkuhqTBf3yQkbxDFPWOsFYlJyZ6WBAp3XMTrt9dYalLLhQGGDSp0dPmKue6YvPu4BQBtH5jcvB8tt5Xny%2Bsw%2FWt8dR9fePiswOdh9K8Sy%2BLjtZb5iPmnU4EderMl0hYGbYu9rc4xMdQV8PlCZWyNbMvTSXyCM19WvNLHJgTctvAWMeIjZMmqbH72yc8yjq0RJCgDCZ6KjABjqkAVpkBG%2FYorgA1J3ZgroU18OGmrSG3HF%2F9OHD1aaKhHuWkOfjZfnsH9pmvOX%2BtHBDw5a3RnRdLFS0usgSHjB4HFHgt6D1dzuMP8r3sxEF7AhTX%2FQMliQ7ajnty2ZKfOFhl6GUJlqdSfnXaVFSBjsFjNG4i%2BqBMwBN%2Fwh65oQ7jfniPADw2%2FXLqoNhAFWfbKyg4VOdXWoda0Cpk4bsX3tjgy3p4AeE&X-Amz-Signature=cf849715e49046c796f85401cae46b0f80f20d4887dd6321a9a2b38bc4c90f42&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPMXFFD%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGsz%2Fu1gta0Xbh%2BGMG9DoqSVP4Jbu9cDY%2FaqWy81%2BIcBAiA6mk5Kmru%2FP74UGqcH0PDCXB%2F3cakMIMERLsQE6r0TYyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMPF3cmxayNcps71yMKtwDANWQMqRUgad1F5ByZijnKd7K8rg%2Bpz9oG%2FX7tv%2BB10ZBuBotufCDKsS5pcyxc%2B7S1wI6vl81RYtAuPWoWNH4lvyBQvSDa8%2F86cyHX%2BcHoWjjFCY%2F0PQmdXhi9%2BvQy%2F%2FudTyWUr4TJRGI7lsQcxDwQ9DX5v7cbFd7mbVZmGcZgnA7Mp4rkSXDZh01LEcxdZRgYS8iuWWWNzxVIEsDQHLWduisR03KdUyXOdjP7znSBJ6z%2FkBMEGSkInmCQYm3iN3PAv2Q8kxGGBPJqBh%2BLrAFAKUfNKukYuUZ5ckr%2Bjerye4jpIiIbKewoUTnv%2FrEb40eUVHcn6gZtZccaVTP1g5L9vA%2B%2BhAOP%2FsZU5opFVntlzI20hCgmR3SwgO4C79msNW8inRKTICmpcUn7Tojk3WE4QtRIzVKFtMXvDBxTTOfZb9i7pjRAqfWqYTI1oyp825jw4CWTD%2Fh7mVQFnwgEeGKv1Fd4WJXsn8lh8TS9NbocMJZ2MxTQR14ahgz4NsBX4dI1w%2BBwpnAeGEeX54mDvsJ5esyoOohuYBFLpZAP%2FpW9%2FgDC32jxqQ5T2YEgQe3MaRaLKLvhV2%2FKYkYO0O2GgsevNSdD8WGdnR3Itpi9aD2pPhJU0LTuvsEYK3aBmAw9%2BeowAY6pgElCsAIHHiPyYTMP7mtDY0QVtZsDdPIDvEhNks91PNQjuktykA0lncQlvUY1AvsKh0V42qainILICujG88Eoh3Ze4U61%2Bs6IkKWBDVs3LKhDYCYFXTXoj4AtcCaG1E9bDskoTklpmGoDgFtdI4iwnWx8S%2FUfU0SEqEcyma%2BuNn8d4RXE7OqOUCEAxMlx7zI1OGE4ZZQvFK5T5Z4CJl1xVxxi9BabAdB&X-Amz-Signature=e738f85293a5725423cbb82c617d03298df583e6fea3ecf08e367518031648f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP7JOHBH%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIBPO1jPJCqjzgF5WoQ8YWBA5gEDUCw9nFaPJAlchQx7CAiBuxeO%2B1YWAZll0%2BBpa%2B20gbg3cP9CZ9x%2BCGU2wP6xvMCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM0c%2BUWkTuQr7CNO6nKtwDvV5e0MbKuUX0peh6L5axUMMcdLEvrqF3qkpqOs3FOzZxvUMP7x2Ie%2BjKz53gWdh6NUptlbsYYrjN%2Fq4IMX0yH9N1FadQgy0B83EIPKRFW2mfFwu2eu8TyzMd0%2FaDRmXM1s0pUIh6J%2FGGmf01AUpNmBBiIxuCWx53tpU%2BAYJm%2FyLMm1SPM1v8yYjpBl0giS4d3rdUQwI805p0w44acic5Oy72a6lR0mATKsJwWXOMlLRTnu4pZlXpTaM%2B60agUeR2u8%2B7c5ZoPhdq97LCW%2FiBaLnfn5M9bsYR%2Bz%2Bub64ZCz2oBp2DvMSNYa%2BNBmrs%2FTYEl7t4qsPrBjhKHbQ2WhTL721Ea3BeXcaw8JyAX6EaZbxCbMzrjEG9smHhzrudgSVrwXgRsxOjobbDkP3y%2FOf1l68JSPl%2FJLGeYjn8KLNQW23p01LykZz%2Bwum7al1%2BCs1AYpcB5dZc2o1St4LAg%2BMtFDxowZ4kawiQ0R4bIp%2FdchOIo0%2FQLzQ66gvl1zH3LJmGfy4G%2B5pbREvf1c%2FHv5rr677ZdOQ1LvaNJ3LIfuEhLveAjn7WkG496QkF7CCxRmBlkmVA%2F4uLJNVbu8R%2Bc7NAJpHgeBfcDpO2JFsjsBd1x2mkID5gBc7GgX7bagsw8uiowAY6pgE%2FGa4cczT4soG8nTOLolX2Ujjeo6CWZ1jK91RVYOcYETJ7zVxGHgKIP6CQ1R%2FbofzH1oSfzGuabOg3B8p2AG09xAr5JHwicYl1AxYoxPKCDVsepq9vHJVBGxJHMuMS%2BdOldGQdaGyHQjwgRUCqhNAAyfh3XnE6S7Eu1e30gbsAcpFKPUPUvs6I42k7ALG0YcTHa8tUJMGnTsyRIcyHKk4c9EUOYm70&X-Amz-Signature=458ef94e3340dd1cb0e7ac6d6173f129be340cbc5b1883b1ca2c7a503925369c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

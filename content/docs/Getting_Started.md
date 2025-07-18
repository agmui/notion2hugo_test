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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ5VFG4M%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDJoCUBfIoBUfxuKZ%2BhLGrilP9vEoMvV9Rvk%2FR3bldOfQIhAOCiuFjywvi%2FGf0%2BrdbAbYFyUoRV5axmLESNf5kXa0ZyKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh%2BoaGDgnqPi94rDkq3ANsHh%2Bjp%2FpG7Y2MTuYxiqmuuHmY1lui%2Bd6QekjGEquuhr9%2BWc8iEDWL%2F7Hwh7PgeBCOcN5RwPMlq6MEYRPJP5MZH%2FV2S1TT8eSgy79qPiFBGP6UOSwe3eJG4kt41%2FLUXLpYNwxsPAKiVzTgkm8FQgHJAxoKKhiULpFK12sEwDeEM8rQKdvLupN3DoiZZNpYuVwxMvFnUkr%2BGVns%2FXurwvBRpgIljyEJZdRCMw2w3CLxrPrK4K5ryN%2B75p7atpjBp1jHv8FrPidh4i2a3rSNGiysEV65lSKG7y3mVz69LyBkiflWccZf3N82%2BfK%2FcGBnsPCBV6l7UCTJsFKsycnjZrTSmbU1i2F%2BLPxEkfZLLAivjRH%2BBrTqduS%2FzF4hm75HwR6jKP3j6g70OswjQMsoQP7ScjI1p89%2Buu%2FUkHuB2rzdJ4JeE2HRl5fKS111MmoAafATs9Veulqno8Zs0w0W%2F6c6skbLLDolvsif2pLXIhcrmtPMfKoiO8xfPSShLJrFXzqzu050MBOFQYuEI9HnDb%2FhRX8vtgHhd6jZsxOYhq1gSIsZIrzIh%2B1Hy9d43tSNHVqOwBzX%2Fpqw%2BQPvQ6P93kxZ%2Fjlmj0mhcYiJmhkMKmq0JIuYeygOivhisQ8gIzD5iOfDBjqkAZpbc1S6XRV%2BScsplsBRzySW%2BsWZ8sNlueqlAK%2FDs40uiiPpO7j13bKJxXxXZjBuTUu%2BCI%2F77f6Akktngm1QPw1MpIIQSqzGszRCRL4tgJ1avEytbcf8HxZWD7tDLtzestEv3UNeq43JXR3BIIhkR532K1tqzmcggJDSq2jQEAE%2FH%2FZcvuRzMBhvhYFdIXUWRaC5W8H9iBY3t9BAcwKfRc%2FxMj56&X-Amz-Signature=85ea8e1a208a9ba5b0244ed17811b47150be1ebbbcd5f4897385421badf97311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ5VFG4M%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDJoCUBfIoBUfxuKZ%2BhLGrilP9vEoMvV9Rvk%2FR3bldOfQIhAOCiuFjywvi%2FGf0%2BrdbAbYFyUoRV5axmLESNf5kXa0ZyKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh%2BoaGDgnqPi94rDkq3ANsHh%2Bjp%2FpG7Y2MTuYxiqmuuHmY1lui%2Bd6QekjGEquuhr9%2BWc8iEDWL%2F7Hwh7PgeBCOcN5RwPMlq6MEYRPJP5MZH%2FV2S1TT8eSgy79qPiFBGP6UOSwe3eJG4kt41%2FLUXLpYNwxsPAKiVzTgkm8FQgHJAxoKKhiULpFK12sEwDeEM8rQKdvLupN3DoiZZNpYuVwxMvFnUkr%2BGVns%2FXurwvBRpgIljyEJZdRCMw2w3CLxrPrK4K5ryN%2B75p7atpjBp1jHv8FrPidh4i2a3rSNGiysEV65lSKG7y3mVz69LyBkiflWccZf3N82%2BfK%2FcGBnsPCBV6l7UCTJsFKsycnjZrTSmbU1i2F%2BLPxEkfZLLAivjRH%2BBrTqduS%2FzF4hm75HwR6jKP3j6g70OswjQMsoQP7ScjI1p89%2Buu%2FUkHuB2rzdJ4JeE2HRl5fKS111MmoAafATs9Veulqno8Zs0w0W%2F6c6skbLLDolvsif2pLXIhcrmtPMfKoiO8xfPSShLJrFXzqzu050MBOFQYuEI9HnDb%2FhRX8vtgHhd6jZsxOYhq1gSIsZIrzIh%2B1Hy9d43tSNHVqOwBzX%2Fpqw%2BQPvQ6P93kxZ%2Fjlmj0mhcYiJmhkMKmq0JIuYeygOivhisQ8gIzD5iOfDBjqkAZpbc1S6XRV%2BScsplsBRzySW%2BsWZ8sNlueqlAK%2FDs40uiiPpO7j13bKJxXxXZjBuTUu%2BCI%2F77f6Akktngm1QPw1MpIIQSqzGszRCRL4tgJ1avEytbcf8HxZWD7tDLtzestEv3UNeq43JXR3BIIhkR532K1tqzmcggJDSq2jQEAE%2FH%2FZcvuRzMBhvhYFdIXUWRaC5W8H9iBY3t9BAcwKfRc%2FxMj56&X-Amz-Signature=0dc246eb9d2b69c0d63d54f48cb4655516bd7e7b795d495278e95b0bac995890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ5VFG4M%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDJoCUBfIoBUfxuKZ%2BhLGrilP9vEoMvV9Rvk%2FR3bldOfQIhAOCiuFjywvi%2FGf0%2BrdbAbYFyUoRV5axmLESNf5kXa0ZyKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh%2BoaGDgnqPi94rDkq3ANsHh%2Bjp%2FpG7Y2MTuYxiqmuuHmY1lui%2Bd6QekjGEquuhr9%2BWc8iEDWL%2F7Hwh7PgeBCOcN5RwPMlq6MEYRPJP5MZH%2FV2S1TT8eSgy79qPiFBGP6UOSwe3eJG4kt41%2FLUXLpYNwxsPAKiVzTgkm8FQgHJAxoKKhiULpFK12sEwDeEM8rQKdvLupN3DoiZZNpYuVwxMvFnUkr%2BGVns%2FXurwvBRpgIljyEJZdRCMw2w3CLxrPrK4K5ryN%2B75p7atpjBp1jHv8FrPidh4i2a3rSNGiysEV65lSKG7y3mVz69LyBkiflWccZf3N82%2BfK%2FcGBnsPCBV6l7UCTJsFKsycnjZrTSmbU1i2F%2BLPxEkfZLLAivjRH%2BBrTqduS%2FzF4hm75HwR6jKP3j6g70OswjQMsoQP7ScjI1p89%2Buu%2FUkHuB2rzdJ4JeE2HRl5fKS111MmoAafATs9Veulqno8Zs0w0W%2F6c6skbLLDolvsif2pLXIhcrmtPMfKoiO8xfPSShLJrFXzqzu050MBOFQYuEI9HnDb%2FhRX8vtgHhd6jZsxOYhq1gSIsZIrzIh%2B1Hy9d43tSNHVqOwBzX%2Fpqw%2BQPvQ6P93kxZ%2Fjlmj0mhcYiJmhkMKmq0JIuYeygOivhisQ8gIzD5iOfDBjqkAZpbc1S6XRV%2BScsplsBRzySW%2BsWZ8sNlueqlAK%2FDs40uiiPpO7j13bKJxXxXZjBuTUu%2BCI%2F77f6Akktngm1QPw1MpIIQSqzGszRCRL4tgJ1avEytbcf8HxZWD7tDLtzestEv3UNeq43JXR3BIIhkR532K1tqzmcggJDSq2jQEAE%2FH%2FZcvuRzMBhvhYFdIXUWRaC5W8H9iBY3t9BAcwKfRc%2FxMj56&X-Amz-Signature=906278e6fc96d3802d743c34fa13815c09fea56b3517b87aab88c301882c1214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625OLL5EU%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIHkuIjmqSBWX5H4hfkFv2rRRS0GhOMdV9QR6%2BOGrV0rnAiBoBOelZSlmJ2EuTBwXPuA2BKddvNUkxKs1CFqQBbiICCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKUBOjit90W%2FrPbXaKtwDbT2S2roWwNmZkGymRQVrF6Fqgzhi535wLNI5dZ2HlQnjzf9zi3CbqECsOZlWl%2B1J8cwbSxQSTvB4MvjtJo7mDMp2DtoHozNBrlocaiozTwfEOyvM756OcQtPyugcZwJL2lr%2BiRl8Vo7eKTxv%2BGL6aOayJ0TdYTlnfQrZoNyBCQBBImS83M4JHutk053hFHPalcwNeltH50NdFsvCTNJlzmkg30r9FQ7aOivNRatcMEFLmt77ZckabhOoCtt8xBIWixb1BfP7oi%2FhuhO12Y8jnFTEGj0gHmXvDvTERQI%2F1hTZj4%2Bnz6EcvHGwbHIiclUlzsgP%2F2MN%2B5PxX420gvkLGJyEZu6adseCAcX5v8oWjmtr01IsNeAaLhHi0OIVkH90rgqsTtXkLz7ShJppNupxKw1A%2B4x5A%2BR%2B3QVyl5%2FOmtCcWijqJbH5SYwRlBEkclUkw6oLcKv5wqEakP5QfRs0hTIGFesEi3MZKoEy3GnkYWTy3PJfhmf7k4aGrKyHba5bxCXcLEplblNesnX1yACghqSYqWV3x2faGyjA4kEJTDKPJ62vpnFb4y8Pdk48vTqP%2BX5c7kD56s9fPXjUnENVJxbIWYeLjNHzOw0XAKEJRV4TJ9t0cFC741Y8YuMw%2BIjnwwY6pgGTbHuJ5Ra8b4bHQRJUdNTM%2FBMc7%2B%2FTEld6ojpJP8aDLc7Fks8Bwat8SOfhMf6wXd1EQ8k75ch3R5RRxm2YzGRlKPAjHIuSz5tAziemaQx0bGtBrV8cQQwJurovtFsPCEdZFH9aurLmiA5Fe1R1tFeraHZnLNmt4GWbIqTFHVHUutAOTjJzPEBxKQtfdS5G0uRp3oGjkJ6tlnptI8cH5yfv3TpOZM9c&X-Amz-Signature=7da6314be9ea96bc5fce4e005bbdc2e4c8763bb2200390aa1cd5f214f24d1845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DWHI7PP%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDQKyZQHhm0QxbW54GXYD5JTvAuB5l2u67YBJyL4euB9wIgS9fkz3QIFUxdO44AOjWdBoydEmSOZSp1ZUlRrqfGgFIqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJUhhOufx%2BV5B%2FoqQircA6iIngctiqhpuYwRFKKbPCmouXwqnCwARH1XW4NusqqDqGGiP4aOHVv4z2%2FoUW5UnQLCBF7eOiICQlYHYcKSHfWUCAhL24IOGV3gov3kubplsYZcoTdLPhG0L%2Fy8Aj3mrPTW1FKnqWJ1djcr4dVijmRz34ugAUs9jQk5hxdq3TlKqXISVU4jGwVsmzzhXq6AJ9BGNO4%2Fm6TmHg9ctwkRPfpi5gRn4a33Tarm40gEHu7W%2Fk2N81imoGCpZwUaWzbL4q%2BFWi33U5qHgZnL4jjp%2FyPh6qDoS6sE7FjLDgwdyDwFjlIA%2B%2BSCqKytXYfzlVbUC8HevN%2FK6SDvkRnd6woSz89zQa%2FT1NvtrfHMILCyAHgMiLauKSiIvc15y5lEL4ls4cHj%2B%2Fz%2B9Vuo6zVVvPM4YA9R%2B6xYzShLZu4tuwcNGiBObR2MAaEWtMv8dUzpmrXb%2FixnbyXLVUKFlzTOVwxjENVWv62j9rMPVef0oHqI%2F4OoXJzJTVrgE4uKsS6TRCRcROl50Js%2BNc3q%2B61mcUBm4OAB72thp4yYUGfocd%2BJAmRo8kysqUqvrpw8WK%2BIrXYFXXWe%2Fc9PsuPs8Z60oKAZB9MlGh0ebNq4jeSanQ8R2SGkkp0s3ed2JI5cAjbdMNeI58MGOqUBvCsItYUfmYx1CBmdYlJBE757XOOMMnQ%2FruEPcgOXMCAx5jTQ01fNGsIU8oZA2ozdfBFDxCHSTyl0t77SxWlXFNHNn3qaqabYdX8yHXdQAuq4EBdDMLbBkfj%2FqdH173SGVsGPiBko0chmoSQUpltLo1sk27Uqh7QJ%2FJZOIkhwnWCIC80DLDHV2GBrmcqTQhDA2329umdAnCUlovVobr9iOywiq%2BOi&X-Amz-Signature=ca1d79e8884394fb219f748a33e3eac9b216b3b77bd8626617526dccd6342fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ5VFG4M%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDJoCUBfIoBUfxuKZ%2BhLGrilP9vEoMvV9Rvk%2FR3bldOfQIhAOCiuFjywvi%2FGf0%2BrdbAbYFyUoRV5axmLESNf5kXa0ZyKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh%2BoaGDgnqPi94rDkq3ANsHh%2Bjp%2FpG7Y2MTuYxiqmuuHmY1lui%2Bd6QekjGEquuhr9%2BWc8iEDWL%2F7Hwh7PgeBCOcN5RwPMlq6MEYRPJP5MZH%2FV2S1TT8eSgy79qPiFBGP6UOSwe3eJG4kt41%2FLUXLpYNwxsPAKiVzTgkm8FQgHJAxoKKhiULpFK12sEwDeEM8rQKdvLupN3DoiZZNpYuVwxMvFnUkr%2BGVns%2FXurwvBRpgIljyEJZdRCMw2w3CLxrPrK4K5ryN%2B75p7atpjBp1jHv8FrPidh4i2a3rSNGiysEV65lSKG7y3mVz69LyBkiflWccZf3N82%2BfK%2FcGBnsPCBV6l7UCTJsFKsycnjZrTSmbU1i2F%2BLPxEkfZLLAivjRH%2BBrTqduS%2FzF4hm75HwR6jKP3j6g70OswjQMsoQP7ScjI1p89%2Buu%2FUkHuB2rzdJ4JeE2HRl5fKS111MmoAafATs9Veulqno8Zs0w0W%2F6c6skbLLDolvsif2pLXIhcrmtPMfKoiO8xfPSShLJrFXzqzu050MBOFQYuEI9HnDb%2FhRX8vtgHhd6jZsxOYhq1gSIsZIrzIh%2B1Hy9d43tSNHVqOwBzX%2Fpqw%2BQPvQ6P93kxZ%2Fjlmj0mhcYiJmhkMKmq0JIuYeygOivhisQ8gIzD5iOfDBjqkAZpbc1S6XRV%2BScsplsBRzySW%2BsWZ8sNlueqlAK%2FDs40uiiPpO7j13bKJxXxXZjBuTUu%2BCI%2F77f6Akktngm1QPw1MpIIQSqzGszRCRL4tgJ1avEytbcf8HxZWD7tDLtzestEv3UNeq43JXR3BIIhkR532K1tqzmcggJDSq2jQEAE%2FH%2FZcvuRzMBhvhYFdIXUWRaC5W8H9iBY3t9BAcwKfRc%2FxMj56&X-Amz-Signature=9b77443a39ac1b00081146df7e59e1f74a1731e983ffd6b85e00b6f82d124e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

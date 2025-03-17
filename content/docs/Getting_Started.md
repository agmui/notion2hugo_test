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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUC6OW55%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmbtUpSTWmQcr4fOOtz7XnxZnmKozbVzJ7ZA82mgtmTgIhANUEbk3VpnBudloRc3KPZB0pQqKgQMPVuUUonHj2K8pnKv8DCEEQABoMNjM3NDIzMTgzODA1Igwm3QwLbL0ID92k5lAq3AMOasJKwLqbVb4X2yYwZuVM%2BqdFkFRut4fpyRKziBgzWUQV59pg0tnHivDx9Jf3Ki0d%2FBfTac8s3JQsLkL%2FRg5xFY5Bm61jT0pNT1IeZ6WTZy%2BEPPZl8qJ8b5qDgmWUv9CUGRDAC70%2BUjwhs8e22qj75581d57y6XiKZ%2FK3ReH7jbTXwhkNbEeMUvXwDTAwI9C%2BTlZH3yo38a8rqrDgGEgiVEEvRjIrpMQSTonLHUhHvbttXwxORozlBtAUHfRNl0oJBewRcHQoCtbnvjgIJcqbRMFR3lEJKzURfQhbuTCoJuf07J%2Bev7UAj3SCI8mOS6bSUc6G2PzHKEgEmfR00pX7rj2pLhINVU%2FySPoiTGrLMCAI10rw6T8w%2BIqs%2BK3jxzyOAa3X2q5xAJImnpCtnplcGDtpOlemhB48sr0i1QXTnv7G%2F9GiYIvn%2B09rFWGFoxBVg5hMzAm7ZT%2BY3JmbR58SvdY7msUm2etcB8XlGFmjVcYjvjivd66gASIdA7ZCf%2FRBaRgGE2pPSULBNpU4eO1hTi1VTr7vN7FoaW4IOOuzFNzbpYqRE5vr%2BFabVYmmDkNbkbfFTg5N7pxky8873%2BmU0xzyoJDlCSiUzjY1L%2FPiZRM0E3WWEJqu4ZjjWjCEr9%2B%2BBjqkAUC0zg3vC0ICKC8NAbjqN5L0l3uty6i2QRYhP%2BMZeoKsbF7FJr8pwx67aTn9i5%2FxoYN%2Bmc%2F%2BqQFeaRZCXtMw52Imte%2BbzHbkgtSseAbrD94Xan6quAbbFzJXQ9iCj%2FmOWd0yCylE7WvePiSjCk3DY2DxpogO0epVJQ2CIja0bqnszeNe9eaiV1UUNhsCH6J9ibW5cQ7k%2FYDZNe1PHdKBc8FMmlWk&X-Amz-Signature=702f35fd71efaa5d3723ab0028f3323eb76ef2cb5233bc08a9bf6fb80a817d1b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUC6OW55%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmbtUpSTWmQcr4fOOtz7XnxZnmKozbVzJ7ZA82mgtmTgIhANUEbk3VpnBudloRc3KPZB0pQqKgQMPVuUUonHj2K8pnKv8DCEEQABoMNjM3NDIzMTgzODA1Igwm3QwLbL0ID92k5lAq3AMOasJKwLqbVb4X2yYwZuVM%2BqdFkFRut4fpyRKziBgzWUQV59pg0tnHivDx9Jf3Ki0d%2FBfTac8s3JQsLkL%2FRg5xFY5Bm61jT0pNT1IeZ6WTZy%2BEPPZl8qJ8b5qDgmWUv9CUGRDAC70%2BUjwhs8e22qj75581d57y6XiKZ%2FK3ReH7jbTXwhkNbEeMUvXwDTAwI9C%2BTlZH3yo38a8rqrDgGEgiVEEvRjIrpMQSTonLHUhHvbttXwxORozlBtAUHfRNl0oJBewRcHQoCtbnvjgIJcqbRMFR3lEJKzURfQhbuTCoJuf07J%2Bev7UAj3SCI8mOS6bSUc6G2PzHKEgEmfR00pX7rj2pLhINVU%2FySPoiTGrLMCAI10rw6T8w%2BIqs%2BK3jxzyOAa3X2q5xAJImnpCtnplcGDtpOlemhB48sr0i1QXTnv7G%2F9GiYIvn%2B09rFWGFoxBVg5hMzAm7ZT%2BY3JmbR58SvdY7msUm2etcB8XlGFmjVcYjvjivd66gASIdA7ZCf%2FRBaRgGE2pPSULBNpU4eO1hTi1VTr7vN7FoaW4IOOuzFNzbpYqRE5vr%2BFabVYmmDkNbkbfFTg5N7pxky8873%2BmU0xzyoJDlCSiUzjY1L%2FPiZRM0E3WWEJqu4ZjjWjCEr9%2B%2BBjqkAUC0zg3vC0ICKC8NAbjqN5L0l3uty6i2QRYhP%2BMZeoKsbF7FJr8pwx67aTn9i5%2FxoYN%2Bmc%2F%2BqQFeaRZCXtMw52Imte%2BbzHbkgtSseAbrD94Xan6quAbbFzJXQ9iCj%2FmOWd0yCylE7WvePiSjCk3DY2DxpogO0epVJQ2CIja0bqnszeNe9eaiV1UUNhsCH6J9ibW5cQ7k%2FYDZNe1PHdKBc8FMmlWk&X-Amz-Signature=de35f95022ea7312205058aa7bc98e80aa56f3a1874ccfbf46f3fe00b299cdf0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CF7KPPK%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BvqG9QePu%2F5higxZ9jQnx%2FtwK6AIUtRjEC36cDKyXJQIgHOlkMNSJEEJBav7cqW3Zk3vH9eQ64FXc0uP3asSwdTUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDF5rA15Bb29mGkqkDSrcA6fZUFvOZIBs0fR%2BBz%2FmiVuuNp6vSanjESZ%2BA0MjYc4wQNhpxn94KfHETS1ihss4CnjoYdbC70mdv1k1x5MPhCNQzyDwRgmUyLmCQOUmfWv1UIZAaIjdbFyUDzy4yc0q5u9aNWOw031jb0pLFZ%2FF0hOlACUk%2FgDF8c2FqkHGZ7bmOYJrPHpM8Z%2BBcgevevTBq1Zx%2F5UdgYMq7j%2FunDtLZdU2LuVQtneiv87e4jeq37uLp7R1ocW7GOkOCRGR4Azyr8AHjSkmUGdAwWNyHXQl5Cg4W%2Fn7SVt7aQ49Wg5x5WSCZPAfg5hwzrsnvRriOXipWt6LXiSNJMfnlfhdVqxM%2BeJPNfYZBSD9DGAgt6qDg0Kw7HGJzMvvdL8wTlJivZDcYb%2FDtPYBxIOE3nZHdAV0vkKBhieI7yEYZRsGlDUVJqbXtgx7AoE9Wjexn4PCWL6IT8LUGIcnC%2BAE3QL1BMZSSpkUP0dG8LoLgWvR5glm5dm1CDbnQ8Fnp7yHTaBALTEQEOqUbOlYSMgYQ2FPAhH4ArVdzitWMdZPB%2BCcAHxQYK8OMP0mXOHn8Ku138DYhxBbHsEgu3TuvYrOOz%2BY6nuD3eHcbDIiwR7xljHiSQCcuhcIDKalYwqoGOQeLDNsMJ%2Bv374GOqUBuM0ztHp2xcvPmeM%2Fq1pfMT3JBfrvAPL9zVKGwtjo%2Fi651vVTSEYx1riFa%2BgKiwlePui1kSDGdOEY5Jhvo%2BZq99zQUYmug%2BOtl4Z9DmQ%2BtFi5%2Bk77fM8k%2B%2B5Oq5dTT6wufDdCgTPg7%2FbBXm4NgGh80M44USDnQ1QE3YHbqIRuGQitB8T5ald40XqRz2YkRNNxOP%2Bor5vaklmLtLUXK8dsZ48mSdIw&X-Amz-Signature=e4776555e8bfc30cc28ebd68fdc27859f91b3e00c33008f5bc4a8fdc973a79f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPJSL6PP%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEG50R5UYj9n%2FIdX53QOkfuO9OvfSvv6zEG7HcaNDLmsAiA2Pwyc2MWv3NZZNSLJb2GOTwPZ9Cuv9GoooljmP10Lyyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMJkZjwN3xBz%2F5mstiKtwDSoQbgUSrDRNdySjRT6SrGA84SRcyv2tchqquzfjuMKjctx8MXw9l2FUvG2NCJPu8SZGa1BuccV%2F94x9tWUpZq8X7Jm1x%2BRelnx7KmuFp0K%2BkJUCSzoXkcHxWZsaOLLRX1xRewP%2Fc5zXajeXWQLvYi16BD%2FMhHV0sWbuah%2BDgL8tVgYXLAg1H6nZMBMVbLG9hrX7jTAJ74gFPyLe1TsMhJI%2FFI6EUqTzt1TFx9sxTep4otx9tQetJVpPa0G8Fjeji4ud2zLoi5D9c%2B4WUVrWv8K8nADeD3lIY0Ef66rPa1Cqwx8NXtZQHLN4%2BlFb%2BwBqQAwMaX2sNwM%2F2DbveAUHQyGg%2FVuxTeLRui4pmMzZBCkd2oR0CvbNoggWVi8pKauQjYezwBjO6q89sUTQ13%2F60eLH8vu5mdmACGHXGnnbja6RaeTmCoQxRtSrpGWo1DIa6AmrFcfeDRCFcAtflGbwRtTqTU8kJjllKLj5kHFR%2BFXAs2uy7T4aIQ%2F2OCxFLGIl0KntvFesKGFndNTlfWK6JRj2zqXGtMDojDILF2EwRHXk4lPAGSKISm%2FzqfxI9ASy77a2yMDPkM2KyvD%2FN3sSnyYaEh22Avn8nY2rZ2qQcKUPZGB9OCG1uSYytcREwpLDfvgY6pgEVu6ErBAxdDvlq4ZCXsEb%2BYnIeA7BO1zLdW1m4%2Bglbq27%2Fzxl5VZzyx3CuLAHj8guOp%2BgyHNrb7LQQRrkCFDR2smKVvOx99CbUS3CXRjfm641NuUaKaZmRjRHsB%2FyYIb951J0HZKWV8gJOpMnlB8IP%2FwuYp8U7iFNdlVHjtFKWYffRURXMYQ4ClBEwEiVItBmC5KLvdSfEVVL6SGMPRl5NRSf%2FTcan&X-Amz-Signature=32a952b4bbfaa96628c7b006a61b9b980d102eec9d0e9e3410d89bab4145f7f8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUC6OW55%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmbtUpSTWmQcr4fOOtz7XnxZnmKozbVzJ7ZA82mgtmTgIhANUEbk3VpnBudloRc3KPZB0pQqKgQMPVuUUonHj2K8pnKv8DCEEQABoMNjM3NDIzMTgzODA1Igwm3QwLbL0ID92k5lAq3AMOasJKwLqbVb4X2yYwZuVM%2BqdFkFRut4fpyRKziBgzWUQV59pg0tnHivDx9Jf3Ki0d%2FBfTac8s3JQsLkL%2FRg5xFY5Bm61jT0pNT1IeZ6WTZy%2BEPPZl8qJ8b5qDgmWUv9CUGRDAC70%2BUjwhs8e22qj75581d57y6XiKZ%2FK3ReH7jbTXwhkNbEeMUvXwDTAwI9C%2BTlZH3yo38a8rqrDgGEgiVEEvRjIrpMQSTonLHUhHvbttXwxORozlBtAUHfRNl0oJBewRcHQoCtbnvjgIJcqbRMFR3lEJKzURfQhbuTCoJuf07J%2Bev7UAj3SCI8mOS6bSUc6G2PzHKEgEmfR00pX7rj2pLhINVU%2FySPoiTGrLMCAI10rw6T8w%2BIqs%2BK3jxzyOAa3X2q5xAJImnpCtnplcGDtpOlemhB48sr0i1QXTnv7G%2F9GiYIvn%2B09rFWGFoxBVg5hMzAm7ZT%2BY3JmbR58SvdY7msUm2etcB8XlGFmjVcYjvjivd66gASIdA7ZCf%2FRBaRgGE2pPSULBNpU4eO1hTi1VTr7vN7FoaW4IOOuzFNzbpYqRE5vr%2BFabVYmmDkNbkbfFTg5N7pxky8873%2BmU0xzyoJDlCSiUzjY1L%2FPiZRM0E3WWEJqu4ZjjWjCEr9%2B%2BBjqkAUC0zg3vC0ICKC8NAbjqN5L0l3uty6i2QRYhP%2BMZeoKsbF7FJr8pwx67aTn9i5%2FxoYN%2Bmc%2F%2BqQFeaRZCXtMw52Imte%2BbzHbkgtSseAbrD94Xan6quAbbFzJXQ9iCj%2FmOWd0yCylE7WvePiSjCk3DY2DxpogO0epVJQ2CIja0bqnszeNe9eaiV1UUNhsCH6J9ibW5cQ7k%2FYDZNe1PHdKBc8FMmlWk&X-Amz-Signature=8bf00ffa934946b9281e6afdaa9fb9448185b746bb5e14274ec3250a239ee40c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

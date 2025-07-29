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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PBPAPMP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNDeYjdrfSluq4h423nXBfPtGu3EpMuh4sh3CKmh%2BtBwIhAIzpvPjYlr0hldYBJYV7YJiF48kJ2hgWw9WJt3otAxXcKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1lzXKg6nhN7OaAjkq3AO69QLCpSdkMQP9O9z4bSV5Dkxguwdr3mpE2J7XnHySqmvfPMHBw3BxZscJXtpXksf%2F9dklkc6BjvoNxqEknZ4W6WwWiBT5qnMNTNg1mR8%2FuxXN8QN9CNJT7CICqJ4mzThWjw%2BoofmyhI4cLxZiznqEFNzCZhdYiqH13ktpQrv1SKxLZ1PdQfYe3iFi2ABEiLWMQZ6YnKQAzrQMfehKhloXPeuazR7S3LhTR6ed89%2Fii%2BqRXmnrbKZVRgqVTi8Yt4ZHLn3S2zeaqNhJ5iIu1S3wg5tMEkUTR2%2BsnnfAm01gGZF3wFtRRhR64nAH%2FMYWgeUCMK5l9M%2BoSqS84P6yDekjTJc0oxQAMoA7WBoQ05QpH75XZV9dW20QyiUsHJEqS3b9xidaelHwXBm9UCOY4AjoR8MT53h5Ak%2BWJNQXpWCVASkNfiaqK89%2FVEmEj%2BK0f9vYYTG9QQPSvTyipls0Gfw1nbJ%2B2j6UsUps0hJXgsSTZjm%2BMTIFH9%2FWdxeM9EDNW1f%2B5xqZ6pU7WC%2BTRv%2Bwog2pecgMILdroPr3qnIJTSecd9zYkT3sSakJrBzzA%2BflNmgYMntHPn02ZTyQC4iD74fZ5LoVrmttKnuLCqYg2j0pm6hnepF58G0110qeyjCz%2FqPEBjqkAYfi1mUs%2FqvsbfcRBXTDbsm0qLzrTjxPZuA9IokqUpEApOnV3tPs%2BESxsmzL1Z92DqulBUSPzBj1ZP7HYF5jbG0ZAoGxoaup9Q0mO59%2FcTwQugDCuX%2B21mNJmwYzLgiUbt9hN1tt7TZZHUPk2jflvLyqjTAU1HDaXpDhglNeznrWSjlqVqKLWYFCp2Oij6icoTwP%2Fmzh%2B9dAE%2FiqCGoqf%2FYGb3Qp&X-Amz-Signature=9575adafd39f4ed029f5a6bce6d25050222219e2864851e45484003fdfca24ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PBPAPMP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNDeYjdrfSluq4h423nXBfPtGu3EpMuh4sh3CKmh%2BtBwIhAIzpvPjYlr0hldYBJYV7YJiF48kJ2hgWw9WJt3otAxXcKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1lzXKg6nhN7OaAjkq3AO69QLCpSdkMQP9O9z4bSV5Dkxguwdr3mpE2J7XnHySqmvfPMHBw3BxZscJXtpXksf%2F9dklkc6BjvoNxqEknZ4W6WwWiBT5qnMNTNg1mR8%2FuxXN8QN9CNJT7CICqJ4mzThWjw%2BoofmyhI4cLxZiznqEFNzCZhdYiqH13ktpQrv1SKxLZ1PdQfYe3iFi2ABEiLWMQZ6YnKQAzrQMfehKhloXPeuazR7S3LhTR6ed89%2Fii%2BqRXmnrbKZVRgqVTi8Yt4ZHLn3S2zeaqNhJ5iIu1S3wg5tMEkUTR2%2BsnnfAm01gGZF3wFtRRhR64nAH%2FMYWgeUCMK5l9M%2BoSqS84P6yDekjTJc0oxQAMoA7WBoQ05QpH75XZV9dW20QyiUsHJEqS3b9xidaelHwXBm9UCOY4AjoR8MT53h5Ak%2BWJNQXpWCVASkNfiaqK89%2FVEmEj%2BK0f9vYYTG9QQPSvTyipls0Gfw1nbJ%2B2j6UsUps0hJXgsSTZjm%2BMTIFH9%2FWdxeM9EDNW1f%2B5xqZ6pU7WC%2BTRv%2Bwog2pecgMILdroPr3qnIJTSecd9zYkT3sSakJrBzzA%2BflNmgYMntHPn02ZTyQC4iD74fZ5LoVrmttKnuLCqYg2j0pm6hnepF58G0110qeyjCz%2FqPEBjqkAYfi1mUs%2FqvsbfcRBXTDbsm0qLzrTjxPZuA9IokqUpEApOnV3tPs%2BESxsmzL1Z92DqulBUSPzBj1ZP7HYF5jbG0ZAoGxoaup9Q0mO59%2FcTwQugDCuX%2B21mNJmwYzLgiUbt9hN1tt7TZZHUPk2jflvLyqjTAU1HDaXpDhglNeznrWSjlqVqKLWYFCp2Oij6icoTwP%2Fmzh%2B9dAE%2FiqCGoqf%2FYGb3Qp&X-Amz-Signature=2905f198cb0a65065d41f65e8625b37b32ce141034ee54e68a31ca6846de9815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PBPAPMP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNDeYjdrfSluq4h423nXBfPtGu3EpMuh4sh3CKmh%2BtBwIhAIzpvPjYlr0hldYBJYV7YJiF48kJ2hgWw9WJt3otAxXcKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1lzXKg6nhN7OaAjkq3AO69QLCpSdkMQP9O9z4bSV5Dkxguwdr3mpE2J7XnHySqmvfPMHBw3BxZscJXtpXksf%2F9dklkc6BjvoNxqEknZ4W6WwWiBT5qnMNTNg1mR8%2FuxXN8QN9CNJT7CICqJ4mzThWjw%2BoofmyhI4cLxZiznqEFNzCZhdYiqH13ktpQrv1SKxLZ1PdQfYe3iFi2ABEiLWMQZ6YnKQAzrQMfehKhloXPeuazR7S3LhTR6ed89%2Fii%2BqRXmnrbKZVRgqVTi8Yt4ZHLn3S2zeaqNhJ5iIu1S3wg5tMEkUTR2%2BsnnfAm01gGZF3wFtRRhR64nAH%2FMYWgeUCMK5l9M%2BoSqS84P6yDekjTJc0oxQAMoA7WBoQ05QpH75XZV9dW20QyiUsHJEqS3b9xidaelHwXBm9UCOY4AjoR8MT53h5Ak%2BWJNQXpWCVASkNfiaqK89%2FVEmEj%2BK0f9vYYTG9QQPSvTyipls0Gfw1nbJ%2B2j6UsUps0hJXgsSTZjm%2BMTIFH9%2FWdxeM9EDNW1f%2B5xqZ6pU7WC%2BTRv%2Bwog2pecgMILdroPr3qnIJTSecd9zYkT3sSakJrBzzA%2BflNmgYMntHPn02ZTyQC4iD74fZ5LoVrmttKnuLCqYg2j0pm6hnepF58G0110qeyjCz%2FqPEBjqkAYfi1mUs%2FqvsbfcRBXTDbsm0qLzrTjxPZuA9IokqUpEApOnV3tPs%2BESxsmzL1Z92DqulBUSPzBj1ZP7HYF5jbG0ZAoGxoaup9Q0mO59%2FcTwQugDCuX%2B21mNJmwYzLgiUbt9hN1tt7TZZHUPk2jflvLyqjTAU1HDaXpDhglNeznrWSjlqVqKLWYFCp2Oij6icoTwP%2Fmzh%2B9dAE%2FiqCGoqf%2FYGb3Qp&X-Amz-Signature=1c0c2128efb6b41e896511bf03ea4bb468f7b281f19501d851ed8198b5bcc48e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UENELLQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnRZps%2BCESPREuoYV70zFOZHYzMT5Qtscz9kk9ROt13AIgSkTgev94EDehulURa8osOBaKtGUUodgXgF6U1LawcbkqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCo2Jk3wugxzGwkKSrcA87Skrx9r4%2BLIZIE87nb2JrlXbUE8J9UdbFBgBFxs7sutBR7HZsu2J9bTeOWON2fJmReXZZ7x6eNeZ1eTOJjYt58Lut7bblMc%2FT1Yzitjy%2BRpshCjNO%2BrcK2GQraEso858ygjdkCrVQxFvuZjcgNGnBpI1PINlL1PLpr0PS%2F%2FnH8Lx2Wpdlm2ZqziK1lfZEU0RGtl60TlL9I1isRa53CHHJ7ERTXUx6RAsqxvPYSCgH0gSWGZVAeot%2Bqndc6p5dDAQ3hS3mD9bTSCscJE79TZUV2OzztzqFXFotrPm4iPd8oFpFILgIq5mkH6ZudviMEvwODLWxULopQlKjKi6EzVU2I%2FY5dpRT8PiQQMJUAn0WPqyGEp4%2BjKR8T5xlKfPBLP7VNz3kvw%2B6C1WqQbLgEHPJTpYCiJn3yn7MHSY7d%2BZlUnVh3%2FSVSvPbfN6pptkQoy5MTaHHefVM%2BxsP0Q3AdRpzniNNn%2BzRcVo1%2B%2BTKeFfm2yxoiqTWvEWK2B%2FZl43YuaaTtq%2BWcyVcVpWnoh%2FHwzwcHVxTR6v7EQP4HuFzng0%2B5agAatQp0b%2BYoJOjDwbOFOXVmSkuTwjjw6Lu%2FxZj03Bs2QqtPl%2FatPp19EMboz81gz9JUQ1LyATebWQkcMKP%2Bo8QGOqUBjikM6UGfLrEbTzTJ%2Bh%2BTfPLAXWoWMgF6HsaDi2HH8IITPDL5DO2orXofnikzjFmbM5BogEA%2BXqRFkorS10JawB25QFBqqLveODvINfb15HhmF%2FX0%2Bjvg601D3PVIB6udPZTQoXCZ856e1U2mIG88xn%2FZK1dAhksAf48%2FvLo6gqnNa5h6IcrJjFIgjqODWXr0DrF7bWk0iFQu1t1TQMSqqedlcUfR&X-Amz-Signature=04444d2afc2f7881dfca27f8fe5f14445d4b3e3d976f2e98d87852b39babc061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BXSO3OZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG5oIMRW0hH0Xu%2BCyjKvHJpvJlVnqmXpaPUt5FQX%2B4KgIhAOZuoMl9CnsNooyYH2vlHrCUsFIOEiAvSLIlzXedTExMKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPB66UKsUX0%2Fkg51sq3ANV1t5Zv0RRAPBS7FXSyXDK4y5utTZtclg26U57QYm91yx4SgXXHzmNuYvXnOQMe9El2tq08e6YmaOz3bztC0Lkc1ubLfqNaVU0aCBhAAdBwzXIpbJx7TKS9uhkD1O2sTOnmBqwI1R%2BGJCND4jOhTGPh6e%2BiibtX6ZsDqeFJpoHYaNSWE7CuZvxP%2BeGgdLVfGK4%2FtqyrvxVdsZmyOfXu9L5bCrrkXaiaA%2FVeJ36nhrI%2BA2%2BYFxylObnCLzWTdcNXN8KMTxN7M%2Bz2hcvoOK7387lJhhiFLoSrQ%2BOLgO1vLxku%2BWeS2n3QTHWyCKzn9OCiSvI213KB5qf3D9HUeshN5wYnp7snGnFSXD00D%2BONWkJxtRznWQfLrjmLgwnNy2IEGYho7FI0DJpwNSoB%2F1Xn22aKNgL8Qp6AZC0jZsOwWXaj9GUbPZ3Sr%2FrkYDGpK%2F0LjA1uPtUFr9j52xC0abdiMuJXfsbLC3OYnt5HvSVEbLMd8kyQo%2BlFkAmKSgbSW7j3bhg1GChYvqa7P3g6jKNezSwBvJOPoxpnS2dzKmd2hppVRKiGkIZemk3H%2FUVIfll%2Bc7W9f4sYDV%2B40ykfWjD03BlLsFU7pEDlyenLXpjndEzR0aC%2FUoZDGx6iL%2BI4DD6%2FqPEBjqkAQ26hjc%2B90X0BXa%2FnMlhf3V7HzbdlxyND6K1yoW0eGIuDKB1Pt30xl8wSkmpzE0iKPmz5LmxSdm98%2F%2BNqgrXHmTfmajk1Zzv2Evhl69Xy5TMh9w1bSXAMZmOfHVuBwpFUR3q3Z6V%2Fy4oWKRiuIf7XuAEqDHVgEwpz%2FPuggll8n%2Fia6q9QiLyDbPj5n1Ys7gBcpzNhA89vaDGOuApFfcJR5RoLekI&X-Amz-Signature=bc1a3e3b1c27f240d3f932691f6f297ae047e174b6c40cd8312f62670a477905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PBPAPMP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNDeYjdrfSluq4h423nXBfPtGu3EpMuh4sh3CKmh%2BtBwIhAIzpvPjYlr0hldYBJYV7YJiF48kJ2hgWw9WJt3otAxXcKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1lzXKg6nhN7OaAjkq3AO69QLCpSdkMQP9O9z4bSV5Dkxguwdr3mpE2J7XnHySqmvfPMHBw3BxZscJXtpXksf%2F9dklkc6BjvoNxqEknZ4W6WwWiBT5qnMNTNg1mR8%2FuxXN8QN9CNJT7CICqJ4mzThWjw%2BoofmyhI4cLxZiznqEFNzCZhdYiqH13ktpQrv1SKxLZ1PdQfYe3iFi2ABEiLWMQZ6YnKQAzrQMfehKhloXPeuazR7S3LhTR6ed89%2Fii%2BqRXmnrbKZVRgqVTi8Yt4ZHLn3S2zeaqNhJ5iIu1S3wg5tMEkUTR2%2BsnnfAm01gGZF3wFtRRhR64nAH%2FMYWgeUCMK5l9M%2BoSqS84P6yDekjTJc0oxQAMoA7WBoQ05QpH75XZV9dW20QyiUsHJEqS3b9xidaelHwXBm9UCOY4AjoR8MT53h5Ak%2BWJNQXpWCVASkNfiaqK89%2FVEmEj%2BK0f9vYYTG9QQPSvTyipls0Gfw1nbJ%2B2j6UsUps0hJXgsSTZjm%2BMTIFH9%2FWdxeM9EDNW1f%2B5xqZ6pU7WC%2BTRv%2Bwog2pecgMILdroPr3qnIJTSecd9zYkT3sSakJrBzzA%2BflNmgYMntHPn02ZTyQC4iD74fZ5LoVrmttKnuLCqYg2j0pm6hnepF58G0110qeyjCz%2FqPEBjqkAYfi1mUs%2FqvsbfcRBXTDbsm0qLzrTjxPZuA9IokqUpEApOnV3tPs%2BESxsmzL1Z92DqulBUSPzBj1ZP7HYF5jbG0ZAoGxoaup9Q0mO59%2FcTwQugDCuX%2B21mNJmwYzLgiUbt9hN1tt7TZZHUPk2jflvLyqjTAU1HDaXpDhglNeznrWSjlqVqKLWYFCp2Oij6icoTwP%2Fmzh%2B9dAE%2FiqCGoqf%2FYGb3Qp&X-Amz-Signature=ff9830e1468dfdb1e19ed4d52727c320da59f5a4319bd136bd6e9e6f51627618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SCPS7KO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4UrFaWnKl5XqzIPvsEUTDcUhwM%2FkGve%2BS%2FS%2BW%2BQLaEAiBkIRGEsT75zc%2F6gtaWMJe63Aa4LkTOaWhqFhZG2cbl%2Byr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMEWhoi86aoZDFXiccKtwDMH8IQ7Syv%2BLsDIIA8UXBDYwY4h7adbbi%2BbsxgAGvZ071a9YNlaZ7eWXypDDfTcpMoPSQnXWIRKGAVmZa1GdOv7FntTmDmD9qEDJFv%2B%2Fx5rZdavF%2BhRgfWae1cRUFVesc9yWcWeu0sVe4blTjg9IeJys0EElvCqMkoOBj5JzzPgNccbVR7a5fY6PA2bfdVzib9yEFtrS5l7lo2S2Ceg9B6UJnosYyErqiCIldaD5xcQECqqhBJh7mqqAvBTebUXGvnx6tRKV9eht4SRLmMrvyEIY34yXVYemM%2BYxUSL0zqrF7T8cfogfz4J5JWvFTqMggIc5W0vsLmdKdJYmGoPKSRN3Fgi05pCuluLuTFn%2B3r3wi3zIDCR3xve7iR4M69j8E0it3ep150g6wto5YNhgQVYeLm8mNrEu1UkuFHVEu8R2rSJ0VqylYObkrt1W2yJi3WT8OjQFUaqZlXNhUBL%2B92HyhACMAs%2Fmv5ynGYhPvsHyVA21QIXI8ssgsBRtzgAqMkj4p76ObWWYjzNiwkLqa6ExOEzDD5D7STex7GWiAN2BaqbgqWp2sVp8qADvCV0%2F6YtvRajHM6JCqpHOSqbSo8rSOWeeRh9dQzDtzkJDUL7UNn%2BjWVUi%2Bv2hnMrowvuqVvwY6pgH7Hnty0E%2F5cv%2BuuXI%2FPvGWK%2BwTlKZN%2BA2saFiYfMt6xBTFzk3%2FODJdDDpGjGO7QMqMoKNSB0HDG5HJsGi2WuR5lqDTPn%2BlmhfHdffhtLMobSiPS7fGCwVwo65vcxLT8bHFdr1PmKwiwDAWkxpYTaiu7zftheJGoB%2F9s8eFJ%2B1VTQcOybY8Mqb5pA9JqhsFGClLXWMP7sOVsEHI3JR08%2FZ0%2FALwAb8r&X-Amz-Signature=504def2c7b162732f94c40057a55f1c6ab21a00b62c2b97b35142a8c76b7990a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SCPS7KO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4UrFaWnKl5XqzIPvsEUTDcUhwM%2FkGve%2BS%2FS%2BW%2BQLaEAiBkIRGEsT75zc%2F6gtaWMJe63Aa4LkTOaWhqFhZG2cbl%2Byr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMEWhoi86aoZDFXiccKtwDMH8IQ7Syv%2BLsDIIA8UXBDYwY4h7adbbi%2BbsxgAGvZ071a9YNlaZ7eWXypDDfTcpMoPSQnXWIRKGAVmZa1GdOv7FntTmDmD9qEDJFv%2B%2Fx5rZdavF%2BhRgfWae1cRUFVesc9yWcWeu0sVe4blTjg9IeJys0EElvCqMkoOBj5JzzPgNccbVR7a5fY6PA2bfdVzib9yEFtrS5l7lo2S2Ceg9B6UJnosYyErqiCIldaD5xcQECqqhBJh7mqqAvBTebUXGvnx6tRKV9eht4SRLmMrvyEIY34yXVYemM%2BYxUSL0zqrF7T8cfogfz4J5JWvFTqMggIc5W0vsLmdKdJYmGoPKSRN3Fgi05pCuluLuTFn%2B3r3wi3zIDCR3xve7iR4M69j8E0it3ep150g6wto5YNhgQVYeLm8mNrEu1UkuFHVEu8R2rSJ0VqylYObkrt1W2yJi3WT8OjQFUaqZlXNhUBL%2B92HyhACMAs%2Fmv5ynGYhPvsHyVA21QIXI8ssgsBRtzgAqMkj4p76ObWWYjzNiwkLqa6ExOEzDD5D7STex7GWiAN2BaqbgqWp2sVp8qADvCV0%2F6YtvRajHM6JCqpHOSqbSo8rSOWeeRh9dQzDtzkJDUL7UNn%2BjWVUi%2Bv2hnMrowvuqVvwY6pgH7Hnty0E%2F5cv%2BuuXI%2FPvGWK%2BwTlKZN%2BA2saFiYfMt6xBTFzk3%2FODJdDDpGjGO7QMqMoKNSB0HDG5HJsGi2WuR5lqDTPn%2BlmhfHdffhtLMobSiPS7fGCwVwo65vcxLT8bHFdr1PmKwiwDAWkxpYTaiu7zftheJGoB%2F9s8eFJ%2B1VTQcOybY8Mqb5pA9JqhsFGClLXWMP7sOVsEHI3JR08%2FZ0%2FALwAb8r&X-Amz-Signature=b37dc71b597bc657a0a82e802687cb104d144f7e96dc902a7fc33aa715162c16&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3M7Y32B%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BovxXVur%2BdbQzJbeQOXzlb2LKxrXD7qPP0tfIb0DjkwIhAJmy9OxjrRQ0RetRIysUdK1IACDpkQXeRUAtEb63t3qTKv8DCEkQABoMNjM3NDIzMTgzODA1IgzOmH5s5iPy%2BWesuAwq3APSOiSdmhlOGN%2Fdc8hS0GbHVfr6L3rvhcsI0%2FZ6zpgXdcgrtrIXPBC0QR5UckQUHrboBr%2BV%2B94Hdsk%2FJU7yDapmzohIuFxWk0KtMm99EZix06Uu4c%2Bw3jwoWOte9aRpRJwegvRrUW9U9266Sg8jo2WLUoVtN7UhQ5%2BAA0F1h%2Fp6%2BcW632X9BTX17QQeJfmgdTGM95KKnuJlPC8vzQQR%2Bdgv%2BHl3SXiW%2B4iahCI8dssSdGannr9eCc85BE3qJd01Q9v1dYYF8met%2Fp5MIqIgo72tbTIYPcuwMu7%2BWJAcRz0vV37kl64iQvhLcvz%2F6x5wlx%2BoiZQsDI%2BqFmoUrj%2FcRhPCnCS7hwkm%2BYDxKVAIEFBmjvraoLqsV4um4hH41PrBOCfwP88Er35UsFgmwrJ7PXrLYIhQ6BgvEZ9QwlMe%2BWOtQHg8WTYBXRBrA8NEzvfOPKDoTMdeG5crVfBsIRLo10%2FlLojS6zpu4GF4HehLt%2FCtPh1c%2Fs0DAmYkrLSOq4b7EsRtdn6HWHpURMwBn2kI2VcyqmfRPavskBVZafGZ0bESzlAuCg%2Bho3uI9UlAq%2FqVIr%2BfqiwMcU%2Fwro%2BfaAJwcrq6awWReoUxtR7QOsAtYbV2PMGr3Vm8e2OXvhKffTDA6pW%2FBjqkAYKS3W81pggIsBsUEvuR8eD8xWrDYV%2FwJzlN9a1UYudI9FUmRwneSGJng6NjadDCeKg5NQDcPIcgXLLMnFVTv6GJhWfEH0P2gqYG86X4VB76vNxciiY%2FKcocOO%2BkkaGaB5CqM%2FlC8tM4lWmegxVweydEt3PIFQkx9sOtwpAHvLsjQANCdgTTdPDkYuIht9DhNkM29hWxl%2FpcLVseIIZrpQfGwQFS&X-Amz-Signature=3a1bd1a25b1c99ae9fac6879e42a3d6f934d5fd46e1110c85ab386b8a8bbccfd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C2WOIFA%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc%2Btcz9aHRJznr3Vhx2WXk2U6rXG8YpgXhQhVGkGTwLQIhANs3qqy3G77Y%2B7DoeUbXLgRPZDzs%2BPCr%2Fk%2FTkZJGbdBPKv8DCEkQABoMNjM3NDIzMTgzODA1IgwTvTp0ORIm5KbQP80q3AMNDDu%2BaSpStOgFMKIO4tGl6aMIKy%2Bk9q0YrYnouaWYyiwjzJ77TPvvX5EzOhL3KTPavTae8hBMj5zgMYVKkOcXvbotK%2B64AwD3VXxzrrliS59MIwMPSHO15Sue8hW2pMp6Go5nk2cG%2BoH388JMWZ%2F4R0P2VCFVaEIZpvbWRfDoSP%2FFOivPCpmXa23fpWuBw%2FGi4j1DeDAjFpbRLRtLRI2%2BEA9LZdigqU3GlipZIHItknBnHfQDXMxmdEN3FQ4v0ZR5TxU6ksGvu2gRxJ0UuCm5keAq6LSpgdOlHSJ5T0GdDlq3AcB34bGkH3NWMTB%2F5D5VQNtrcJmdbCwkV14auDBbgHI17VlSg2K862axuoIvSoUE6iQpKnUFAriLx%2Fp2h%2F%2FaJ4OQqzCMSbZI4VVcjn8ER4qjYjY1h5mng8ru5Lgq7Ya2WYxuriZP4X6TnWUYEUGz4UfL4OMA4xmppPFBax1CEzzPS6n49H66qQhFUOPZlEpasSJeed%2By7Tj7gOr%2BwGir2O1LslA9ciC0NIM34aUdMlQVHf5S04cgOBFKy77cosgn93mPdUxiLczf2ACIel0LmSdJZwZA9gm%2F%2BI8j9p%2BDVRaiGwEHiyh1%2B92jLtpbkn1GZpxoB3TxCNZoRDCc65W%2FBjqkAeqMjmNDhPgQMK0yVsC2hyYioSpZHziVmfPg5Bj3juJAb7PjZoN7xqlepWmkio8YzXptLk%2FBJHUssfSTUVsk5nu%2BGTr4rf93FNqrcRCZoEns93a%2FOf3hhcz3vql8%2F1VLbJx6L5Dn%2B8vDdC6H2WI1oZ%2FlrKSn9ZpxCpF3kVzunFjIYYP8Rq3ZxnmGHe7KSgXwewse3NlEmvDSriWqs%2BrsXZoGniuR&X-Amz-Signature=8b357bf9160c5037da09853fdf582d3a1aa41bae512db8d8bd376b57dbbf3108&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SCPS7KO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4UrFaWnKl5XqzIPvsEUTDcUhwM%2FkGve%2BS%2FS%2BW%2BQLaEAiBkIRGEsT75zc%2F6gtaWMJe63Aa4LkTOaWhqFhZG2cbl%2Byr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMEWhoi86aoZDFXiccKtwDMH8IQ7Syv%2BLsDIIA8UXBDYwY4h7adbbi%2BbsxgAGvZ071a9YNlaZ7eWXypDDfTcpMoPSQnXWIRKGAVmZa1GdOv7FntTmDmD9qEDJFv%2B%2Fx5rZdavF%2BhRgfWae1cRUFVesc9yWcWeu0sVe4blTjg9IeJys0EElvCqMkoOBj5JzzPgNccbVR7a5fY6PA2bfdVzib9yEFtrS5l7lo2S2Ceg9B6UJnosYyErqiCIldaD5xcQECqqhBJh7mqqAvBTebUXGvnx6tRKV9eht4SRLmMrvyEIY34yXVYemM%2BYxUSL0zqrF7T8cfogfz4J5JWvFTqMggIc5W0vsLmdKdJYmGoPKSRN3Fgi05pCuluLuTFn%2B3r3wi3zIDCR3xve7iR4M69j8E0it3ep150g6wto5YNhgQVYeLm8mNrEu1UkuFHVEu8R2rSJ0VqylYObkrt1W2yJi3WT8OjQFUaqZlXNhUBL%2B92HyhACMAs%2Fmv5ynGYhPvsHyVA21QIXI8ssgsBRtzgAqMkj4p76ObWWYjzNiwkLqa6ExOEzDD5D7STex7GWiAN2BaqbgqWp2sVp8qADvCV0%2F6YtvRajHM6JCqpHOSqbSo8rSOWeeRh9dQzDtzkJDUL7UNn%2BjWVUi%2Bv2hnMrowvuqVvwY6pgH7Hnty0E%2F5cv%2BuuXI%2FPvGWK%2BwTlKZN%2BA2saFiYfMt6xBTFzk3%2FODJdDDpGjGO7QMqMoKNSB0HDG5HJsGi2WuR5lqDTPn%2BlmhfHdffhtLMobSiPS7fGCwVwo65vcxLT8bHFdr1PmKwiwDAWkxpYTaiu7zftheJGoB%2F9s8eFJ%2B1VTQcOybY8Mqb5pA9JqhsFGClLXWMP7sOVsEHI3JR08%2FZ0%2FALwAb8r&X-Amz-Signature=8949af7287e821acf89d77ab5e1fac1b04f3423c63fc6ded44e1e15db11435b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

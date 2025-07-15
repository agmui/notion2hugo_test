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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUGTVY7V%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQC7cysSPtEcgKs9kmmBI1IQ6d8HBKKkHFsx3%2Bxl90eeAwIhANqH%2BXWZoV%2FAt4L24OFxYnUKO0ZYWP90KHwyzvXmDyQrKv8DCEgQABoMNjM3NDIzMTgzODA1Igx%2BGEZseNyB4zS08c8q3ANyO7g6tKulNwFNhXKUjFamacJnRrRA5A1fRn4h13%2BZR2Y9bN9obFMY1SJ5mgjs%2Fb9QR%2BuPbB1%2F9WsgLV4kK5iD%2FXfIKaomq8hODtx9%2FDhU9JmPBudltwC8GazWB%2BcthSEw7iOnFFuq0jUbQXvzWW8DmK9DEPp5yXLc3VedqkjFp3fHpSAXfR9YIVcyfdaJgmqSjCe%2Fpfau1t%2FnemIno0xkErrtR7nyvHyV0lTcODVaxEbQHNhK3MOpRpG9CgN7fB%2BMvhyHG2m5h2DGZ%2FlB5GtVUGSjxldgokVo55KthQ5CogorajS5bmJiaRp7zuXkACeRiFcHBI%2B79YkE%2FO6BXCntPPxIVVKpOu%2Bzzwmd%2F1L89rJram2GDUBR4QTYUGxKQUtnmwe7WKKmzRxEsK3Qk4ZwXxDenY7rGewkU5sBmiNZeMemoj93PBBTfNhI2PtaKwn6JSxV4lRUshVNBzt19VmJb%2Bn9hxQD%2FjxVPCtEQTBK7hYLGNsA59x6JlJ7wHK0YEHR%2BurFCmcFiKYwBWaERzsTmOGDCNtXNiPV%2B2ZV1bdeM2MKsYkq9yQS3qXpUQr%2FUfzXHdZXImWefrPVUGZvREwGLBJ8c7KFLfdjTlMDDVA2Nn9vb3B0HbrQ%2FEKVTjDB2dnDBjqkAe4J7MXktUnTbopRDUbVA8cV6TDDIm8fyayPSPc46dB6UC%2FNXQegYkQKUhf6%2FLjYE5qjZEWPmtaS3a0%2FeKtMXIWUseOnLnk5LV3sjain7f9fxFB4f%2B7vbXmAhNxIU3zzxLWq1EjDYlKEDeIowx6RC6fGM1AHpZv9oxPDL1d9q%2BV14FbaPZleG5DDE9d%2Bkqg4yoTNfWAQB4tJz9XfZe%2ByqufKV6N2&X-Amz-Signature=0e11c4667f5625c4fc1fe8b778cb5c945fed76068f73315755deaf3606c9c5f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUGTVY7V%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQC7cysSPtEcgKs9kmmBI1IQ6d8HBKKkHFsx3%2Bxl90eeAwIhANqH%2BXWZoV%2FAt4L24OFxYnUKO0ZYWP90KHwyzvXmDyQrKv8DCEgQABoMNjM3NDIzMTgzODA1Igx%2BGEZseNyB4zS08c8q3ANyO7g6tKulNwFNhXKUjFamacJnRrRA5A1fRn4h13%2BZR2Y9bN9obFMY1SJ5mgjs%2Fb9QR%2BuPbB1%2F9WsgLV4kK5iD%2FXfIKaomq8hODtx9%2FDhU9JmPBudltwC8GazWB%2BcthSEw7iOnFFuq0jUbQXvzWW8DmK9DEPp5yXLc3VedqkjFp3fHpSAXfR9YIVcyfdaJgmqSjCe%2Fpfau1t%2FnemIno0xkErrtR7nyvHyV0lTcODVaxEbQHNhK3MOpRpG9CgN7fB%2BMvhyHG2m5h2DGZ%2FlB5GtVUGSjxldgokVo55KthQ5CogorajS5bmJiaRp7zuXkACeRiFcHBI%2B79YkE%2FO6BXCntPPxIVVKpOu%2Bzzwmd%2F1L89rJram2GDUBR4QTYUGxKQUtnmwe7WKKmzRxEsK3Qk4ZwXxDenY7rGewkU5sBmiNZeMemoj93PBBTfNhI2PtaKwn6JSxV4lRUshVNBzt19VmJb%2Bn9hxQD%2FjxVPCtEQTBK7hYLGNsA59x6JlJ7wHK0YEHR%2BurFCmcFiKYwBWaERzsTmOGDCNtXNiPV%2B2ZV1bdeM2MKsYkq9yQS3qXpUQr%2FUfzXHdZXImWefrPVUGZvREwGLBJ8c7KFLfdjTlMDDVA2Nn9vb3B0HbrQ%2FEKVTjDB2dnDBjqkAe4J7MXktUnTbopRDUbVA8cV6TDDIm8fyayPSPc46dB6UC%2FNXQegYkQKUhf6%2FLjYE5qjZEWPmtaS3a0%2FeKtMXIWUseOnLnk5LV3sjain7f9fxFB4f%2B7vbXmAhNxIU3zzxLWq1EjDYlKEDeIowx6RC6fGM1AHpZv9oxPDL1d9q%2BV14FbaPZleG5DDE9d%2Bkqg4yoTNfWAQB4tJz9XfZe%2ByqufKV6N2&X-Amz-Signature=36437bfafaf4b0dbc1fd7e5d842c7168f33996edf0b8222f64744ba66f9a046d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUGTVY7V%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQC7cysSPtEcgKs9kmmBI1IQ6d8HBKKkHFsx3%2Bxl90eeAwIhANqH%2BXWZoV%2FAt4L24OFxYnUKO0ZYWP90KHwyzvXmDyQrKv8DCEgQABoMNjM3NDIzMTgzODA1Igx%2BGEZseNyB4zS08c8q3ANyO7g6tKulNwFNhXKUjFamacJnRrRA5A1fRn4h13%2BZR2Y9bN9obFMY1SJ5mgjs%2Fb9QR%2BuPbB1%2F9WsgLV4kK5iD%2FXfIKaomq8hODtx9%2FDhU9JmPBudltwC8GazWB%2BcthSEw7iOnFFuq0jUbQXvzWW8DmK9DEPp5yXLc3VedqkjFp3fHpSAXfR9YIVcyfdaJgmqSjCe%2Fpfau1t%2FnemIno0xkErrtR7nyvHyV0lTcODVaxEbQHNhK3MOpRpG9CgN7fB%2BMvhyHG2m5h2DGZ%2FlB5GtVUGSjxldgokVo55KthQ5CogorajS5bmJiaRp7zuXkACeRiFcHBI%2B79YkE%2FO6BXCntPPxIVVKpOu%2Bzzwmd%2F1L89rJram2GDUBR4QTYUGxKQUtnmwe7WKKmzRxEsK3Qk4ZwXxDenY7rGewkU5sBmiNZeMemoj93PBBTfNhI2PtaKwn6JSxV4lRUshVNBzt19VmJb%2Bn9hxQD%2FjxVPCtEQTBK7hYLGNsA59x6JlJ7wHK0YEHR%2BurFCmcFiKYwBWaERzsTmOGDCNtXNiPV%2B2ZV1bdeM2MKsYkq9yQS3qXpUQr%2FUfzXHdZXImWefrPVUGZvREwGLBJ8c7KFLfdjTlMDDVA2Nn9vb3B0HbrQ%2FEKVTjDB2dnDBjqkAe4J7MXktUnTbopRDUbVA8cV6TDDIm8fyayPSPc46dB6UC%2FNXQegYkQKUhf6%2FLjYE5qjZEWPmtaS3a0%2FeKtMXIWUseOnLnk5LV3sjain7f9fxFB4f%2B7vbXmAhNxIU3zzxLWq1EjDYlKEDeIowx6RC6fGM1AHpZv9oxPDL1d9q%2BV14FbaPZleG5DDE9d%2Bkqg4yoTNfWAQB4tJz9XfZe%2ByqufKV6N2&X-Amz-Signature=d5c328372e722e51a574d523547a49be66bd363c699effb41848ed8a820744a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3FILZTI%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDlLuQC3kcRsDtqzLF4yPwkDVhv5hYj3aaU1ZyhyVoIsgIgQgei1VbGLvzp3nZ5HOWCXpy%2Fplwep1pidgsoJzFS3FMq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGBNRd86IV9f9RjrnCrcA9jPvaym%2BVhXgDuiyp8yLdbSXxJWYUb6LKIAaebMGUUxcJ6g0by8zaQ7WHm7sm01nt09cmLkLzaTXOfL4Mqhp3QNm47SgrEwHdHcPFnIdU7AxdQudY1RgdUYbJ6Ijk5cRk9Cx3XMQcVWiMBeOCG4L7ycC56yJBtebDB4szpWPnSbRfmpmqNGF%2FOBa4b5UruZDwVosyHieXXFN9%2B99MKaI5AFMr8ewFZiW2eVzYjkENnjXarJ5PTi%2B5SgTG%2FKdBL0oozjmYEdKs4YvC5z8a2sgSsJp4F%2Bqdd4By7i9VVbXHwbRz6quetE6JK6YU38ehORwH30WbYu19ozJsDZYojZHFszDT86HO0eVSZ2YXEt6L6gXCqFs3hgIrtz6JcnVncC6nJr8sELOEszGmcD3swGAq33R2PRkgYM53f3xN9C6mNee8aQVQIMTarTOWk933xk1YpBuIc8t2yiHK%2F4WcDTim3vP3xvA99U2L3xRnGmcJz9YVfLYBFQUukyMfGj8%2BnCaxUc8P5RWyEGLVnbG2rJx591j6ktff%2FMgCVcMUKssmpu36aZR%2FXyenIo8jCaTjdiPdzsARbZUpIiopKbjaz3PhT8TJ5oiahDF%2Bo3qBOFIY9MZ9G91n4VJ%2FqlvufuMNjZ2cMGOqUBiv6D81jOpeMBJOlUJOsNrtsR6amBwMsJRaR4p%2Be7UMWSYl%2FB6v9GI8osgZHhTTH4CGKGjfUgwKk1FzmPBPRWiPTvjZZ0Bxb2%2FkAiMLUflSloE0SqYuOtUvzzhgWreZIbnrV89Y1aMMEuz4eL0Hx%2FxB06AKEROAXIxChIYNhQx5iAFLoB3WE4BZ26s6JqmVIZOlv1b0Rn%2FIwhrkF15ar8FEi71DCJ&X-Amz-Signature=c5c1e9d48dd9ff6a0fd39553c2bef3e462de6a379908e0d411497624823db711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OBPSEBZ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIE3lU%2FBWgCArHLxQVUSFzPMxMC0MNCeVthopYL6g97pQAiEA9nkSfkCeuwxEjX8DDbwk1JQ2PiEl4LAHgtyUwwut3hwq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDITwv%2BnFoz2T3HyebSrcAyXpE9Z00R3Gf5ej8lP0jVSsgBzdL6RdkiAYbXgqf9Hd1HN%2BgBhJna5BMx6bl2OywM4Mfe%2FTVxsQ8ZyyRQptCOQauqqHlOhNZa4kNQRoqluorycrw2aRv3ejNYL9e%2FkMpW14Zbj13TU%2FEh64Cnn9M02h3kUNJ1Mlirq%2FMvM2HL5ycn98OnF2vSA6nyvH6SIpfhcZbKGetZI9I7iS1mzDY%2BvzQ8bxGzskwVpbwx53cGCdt9B0ZYqINvdQgQHeslXijW2iMTx3lkyMLzdO1sQfdnfQCzgtS2wpiEFUPTErEZoo6Ogz08SGfTEYYyev7IAn1qy3%2BpSYk2exl1zmPVCYgUezyYn35GZk59yZF4Ab02LqIhDzPGBe%2FnA92mn4YDV7JfWPa%2F0eTXlK4b9FAfrBOIAyPUaw7U0ItirvGXu4EpiX85mfCkJJOtxxOVJOB1x9SUrG6lr1IdMMjdqLb%2B7CNBdDFu2Jd7wqZjTAL4ViTfnbUx5SoS%2BqF%2BY%2FwgGFqJq9pMPVIIdyDC3ORhVcD8fgmDGhqK9qAs0mO1LtyfUkMZ6aORfQY7Zelqh2PWqUaEgtWx3bSBej90ZAVD60pnWAYlmG%2FbvX5I41R1naA4VhbXJBZoIHQbJgusC2Z2u1ML7Z2cMGOqUBjYX5B56ivybscZmYximnjMjqcodq42U7s3AGux1XPqxFQky5920NmuTq8XSJb6CixeuqXrlQX0tRTF%2BDqyHBmdsFChgaZP2IPOaqj7WTHEzVQ99OC1hqWX%2FzIEhAh%2FegcFZKcy6MPd%2FAytLL2XqCSfX5qq8eNqjhiw2hx17AK6rAl8OsO6B2Th5Zwt65Ew7GLsSIpDo0CJe7negp0AqzXShenTqB&X-Amz-Signature=04b95e6c7267056b30f7a8becb4035f33c442a6495f273c722481b77c5b459ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUGTVY7V%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQC7cysSPtEcgKs9kmmBI1IQ6d8HBKKkHFsx3%2Bxl90eeAwIhANqH%2BXWZoV%2FAt4L24OFxYnUKO0ZYWP90KHwyzvXmDyQrKv8DCEgQABoMNjM3NDIzMTgzODA1Igx%2BGEZseNyB4zS08c8q3ANyO7g6tKulNwFNhXKUjFamacJnRrRA5A1fRn4h13%2BZR2Y9bN9obFMY1SJ5mgjs%2Fb9QR%2BuPbB1%2F9WsgLV4kK5iD%2FXfIKaomq8hODtx9%2FDhU9JmPBudltwC8GazWB%2BcthSEw7iOnFFuq0jUbQXvzWW8DmK9DEPp5yXLc3VedqkjFp3fHpSAXfR9YIVcyfdaJgmqSjCe%2Fpfau1t%2FnemIno0xkErrtR7nyvHyV0lTcODVaxEbQHNhK3MOpRpG9CgN7fB%2BMvhyHG2m5h2DGZ%2FlB5GtVUGSjxldgokVo55KthQ5CogorajS5bmJiaRp7zuXkACeRiFcHBI%2B79YkE%2FO6BXCntPPxIVVKpOu%2Bzzwmd%2F1L89rJram2GDUBR4QTYUGxKQUtnmwe7WKKmzRxEsK3Qk4ZwXxDenY7rGewkU5sBmiNZeMemoj93PBBTfNhI2PtaKwn6JSxV4lRUshVNBzt19VmJb%2Bn9hxQD%2FjxVPCtEQTBK7hYLGNsA59x6JlJ7wHK0YEHR%2BurFCmcFiKYwBWaERzsTmOGDCNtXNiPV%2B2ZV1bdeM2MKsYkq9yQS3qXpUQr%2FUfzXHdZXImWefrPVUGZvREwGLBJ8c7KFLfdjTlMDDVA2Nn9vb3B0HbrQ%2FEKVTjDB2dnDBjqkAe4J7MXktUnTbopRDUbVA8cV6TDDIm8fyayPSPc46dB6UC%2FNXQegYkQKUhf6%2FLjYE5qjZEWPmtaS3a0%2FeKtMXIWUseOnLnk5LV3sjain7f9fxFB4f%2B7vbXmAhNxIU3zzxLWq1EjDYlKEDeIowx6RC6fGM1AHpZv9oxPDL1d9q%2BV14FbaPZleG5DDE9d%2Bkqg4yoTNfWAQB4tJz9XfZe%2ByqufKV6N2&X-Amz-Signature=8371f7fc22977ce43ebc91047819459846cf862f91c53e744ecef8d0f9958859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEHGUYV3%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDWB%2BJAZ%2FrVlCsAuj%2BDZXQstLzkuPrE7UqOf6UuglQtdgIgGfjIR0J0o53z70h%2FcESEUEkALvNMCu6hltoIuEP2uj0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA479s3rPaHUheLxVyrcA73EF5e29KIvpnzTZefsRynNFBmcKyoNGZX0Kwo1Lbm8hdlDi8dBXAxuyNnv65DAXV25cBHaT0LU0XYByDE4ITtGVzfUImKAEy7bvpgzdFOvfSsRqNpAEi9Hrbg%2F%2FGJdYGwaT9mbOrfoM%2BPGRAg%2Fw8dAb1BZpydB797GueIOjS8iXcOLqPIAP3blnE%2F8KgcaBFzeUqok%2F4taRrqSuvGb7ThLMjUwmL7z7Y3TGC7KGW2s6iMvAK8PIvDtToKFptLs%2BIbibrRvEX3ajV7vWeqj7x%2BWaN2ImRvYwr%2Fg9MpRAnlLxkIcaKhfYni3%2B2CLZc9dD3vBtqA%2F2NKyDS2jiX%2Bi5ihRb%2B3CuhvWD8d7Oe6NQQ2jl3f8cKRRujjlWYu1X8Mti7MZXiirY7Fp8fct3ulPuZlJY%2FbsdDn1ZMITACe7%2BgP5SmX4E%2F5fJxdpeONpdfOI7Phlvsii2rGUNn88ybB7uhZh4FVF9KcveIKWXZUQmN2h37w%2FWC20umaNepJUVULjxaArt5Yd0YFgfvf8HRUR2nazV0pfB4sdwQQ5ThAlS%2FLm1G7SbqsCWoo80z0CfVvSLCAlzJOOWIvMfmrfzP1nW0SZFXFSfBbLNaOrz4BnWJ6T2kJB8IdxWIaulBElMNjZzsAGOqUBrlsphQsaZkt0u01n33GwhWYqHBl0W1SYU%2FqDQWyTwP1yNb6PUxcC%2BGyYUeSRGx%2FdYKejQSRj5DJZCKTWeWguKj9WNdQfSVy0WirYEgiDygp6A7h0IcfaVpJKjr58B6Z0oM5tMjgGTIl9ki31b4sSAJtA6BB51vGFrUofdJuvDwG44YyU0vXr4ud86x8cVDehYkrt8C4fjo82XmE6MLDA%2Fhl92NBD&X-Amz-Signature=c9810f20d56ac83d064478953cb4b33bbdf77e1dc2827bdf50cd988b22b3ad60&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEHGUYV3%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDWB%2BJAZ%2FrVlCsAuj%2BDZXQstLzkuPrE7UqOf6UuglQtdgIgGfjIR0J0o53z70h%2FcESEUEkALvNMCu6hltoIuEP2uj0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA479s3rPaHUheLxVyrcA73EF5e29KIvpnzTZefsRynNFBmcKyoNGZX0Kwo1Lbm8hdlDi8dBXAxuyNnv65DAXV25cBHaT0LU0XYByDE4ITtGVzfUImKAEy7bvpgzdFOvfSsRqNpAEi9Hrbg%2F%2FGJdYGwaT9mbOrfoM%2BPGRAg%2Fw8dAb1BZpydB797GueIOjS8iXcOLqPIAP3blnE%2F8KgcaBFzeUqok%2F4taRrqSuvGb7ThLMjUwmL7z7Y3TGC7KGW2s6iMvAK8PIvDtToKFptLs%2BIbibrRvEX3ajV7vWeqj7x%2BWaN2ImRvYwr%2Fg9MpRAnlLxkIcaKhfYni3%2B2CLZc9dD3vBtqA%2F2NKyDS2jiX%2Bi5ihRb%2B3CuhvWD8d7Oe6NQQ2jl3f8cKRRujjlWYu1X8Mti7MZXiirY7Fp8fct3ulPuZlJY%2FbsdDn1ZMITACe7%2BgP5SmX4E%2F5fJxdpeONpdfOI7Phlvsii2rGUNn88ybB7uhZh4FVF9KcveIKWXZUQmN2h37w%2FWC20umaNepJUVULjxaArt5Yd0YFgfvf8HRUR2nazV0pfB4sdwQQ5ThAlS%2FLm1G7SbqsCWoo80z0CfVvSLCAlzJOOWIvMfmrfzP1nW0SZFXFSfBbLNaOrz4BnWJ6T2kJB8IdxWIaulBElMNjZzsAGOqUBrlsphQsaZkt0u01n33GwhWYqHBl0W1SYU%2FqDQWyTwP1yNb6PUxcC%2BGyYUeSRGx%2FdYKejQSRj5DJZCKTWeWguKj9WNdQfSVy0WirYEgiDygp6A7h0IcfaVpJKjr58B6Z0oM5tMjgGTIl9ki31b4sSAJtA6BB51vGFrUofdJuvDwG44YyU0vXr4ud86x8cVDehYkrt8C4fjo82XmE6MLDA%2Fhl92NBD&X-Amz-Signature=ced75b4ed8b626c08350bc93f461fd356437a6e85b6ac7b35885d56f80d73393&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEHGUYV3%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDWB%2BJAZ%2FrVlCsAuj%2BDZXQstLzkuPrE7UqOf6UuglQtdgIgGfjIR0J0o53z70h%2FcESEUEkALvNMCu6hltoIuEP2uj0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA479s3rPaHUheLxVyrcA73EF5e29KIvpnzTZefsRynNFBmcKyoNGZX0Kwo1Lbm8hdlDi8dBXAxuyNnv65DAXV25cBHaT0LU0XYByDE4ITtGVzfUImKAEy7bvpgzdFOvfSsRqNpAEi9Hrbg%2F%2FGJdYGwaT9mbOrfoM%2BPGRAg%2Fw8dAb1BZpydB797GueIOjS8iXcOLqPIAP3blnE%2F8KgcaBFzeUqok%2F4taRrqSuvGb7ThLMjUwmL7z7Y3TGC7KGW2s6iMvAK8PIvDtToKFptLs%2BIbibrRvEX3ajV7vWeqj7x%2BWaN2ImRvYwr%2Fg9MpRAnlLxkIcaKhfYni3%2B2CLZc9dD3vBtqA%2F2NKyDS2jiX%2Bi5ihRb%2B3CuhvWD8d7Oe6NQQ2jl3f8cKRRujjlWYu1X8Mti7MZXiirY7Fp8fct3ulPuZlJY%2FbsdDn1ZMITACe7%2BgP5SmX4E%2F5fJxdpeONpdfOI7Phlvsii2rGUNn88ybB7uhZh4FVF9KcveIKWXZUQmN2h37w%2FWC20umaNepJUVULjxaArt5Yd0YFgfvf8HRUR2nazV0pfB4sdwQQ5ThAlS%2FLm1G7SbqsCWoo80z0CfVvSLCAlzJOOWIvMfmrfzP1nW0SZFXFSfBbLNaOrz4BnWJ6T2kJB8IdxWIaulBElMNjZzsAGOqUBrlsphQsaZkt0u01n33GwhWYqHBl0W1SYU%2FqDQWyTwP1yNb6PUxcC%2BGyYUeSRGx%2FdYKejQSRj5DJZCKTWeWguKj9WNdQfSVy0WirYEgiDygp6A7h0IcfaVpJKjr58B6Z0oM5tMjgGTIl9ki31b4sSAJtA6BB51vGFrUofdJuvDwG44YyU0vXr4ud86x8cVDehYkrt8C4fjo82XmE6MLDA%2Fhl92NBD&X-Amz-Signature=cd20d43e9622c0c002a43ff776f5d4287f9039cde74745f1d30b95fdaed358cf&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7E4IWHA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFaKcnVzwf%2BjCtTF4rfCUKNUTI3lLHetEnzKaJVElRgdAiEA7ZOGM2puVjqrFcJYO%2Fnl%2FVddBlrzgGHT61AgCMT17%2FsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBV0yKiG7DLBrlkyNircA1IQ2aYT4c%2BZ5sMG02LCNBM1wFDDuUTyDKma4SfvoIa2Q2ZLR5PjKKN1%2B2Pszp%2BQG%2F5nVOFdRVKyNpK07l3VX1Sp%2Fs2ZiBZUwQkZYANe%2FGC0DjjAKYW2CCR8WAoRj%2FhK9nuRLKJvUz9SmNGNpApMP%2FrJLszAM1PUt2wKUv1Zvat3igGT9BQQkAv4P0G60LhJawCubKAtrCzcYe%2FkbbgCiqM%2B3%2BaMuLsf6Xadnapq7xneaQz95mJspyZ%2Br6wyJlqgKutu9zn%2F1jh0fXDdWDTW0sAsSVjSbJP1WBVRMw6DkYmA%2Fd7fP6BRoRLjMxHOg%2Fby6USbAbfK%2FJ3ISIqqOt7VT3iBlzfMybUUspt6uBXIo6ftVGYs8sU7EqX9WbuXPmCTSAELcJnC4n5hC8ga5dO%2F9NjWqX%2BamL2ezC8S17%2FJC481DwEq5bu%2BOR%2BVPD%2BiL904grSUuvWxoZvwP0Po%2BTwrCZBrp4r3jyvn7br8DYFRjGB%2B%2B%2F%2Bnw%2FaitsqphPMkPfpBivyMVvT7V80pATlIB0uW9byP8MouzQe7Z8H%2FcdfPoUTPQvBd8spGA3FWlMsxEmo0rM4u41gjVI6FRwPlr9XtsTYj9svIdpQaF%2Fr4kQrq5l8SaqAm63WQU4641sXKMOTYzsAGOqUBtv6XmCJR8X3LByiciBt%2F4y%2B9QPLJa13dHDQEsAE8gqfK7%2BVOylnJNfA551%2BwT6XAb8LY1W9SSeg7VwOGgY2K%2B%2FaDsiP2jzsJEb6ITlhFSqDd%2FLmHWGiD%2BHf6ugdBVie54qRHPm%2Fj8OSXvPdS2qeioKbczgwHNQwqROiaWDT8u%2BRUazeZ5Ua9VsPRO3fDz%2F6GCyJ%2FlZ3SFllaBOslQ3bLtxyBeGqN&X-Amz-Signature=a27ac6f024fc08ace16dfc408a150e2f660e8146ce7ab4a54f32655cf9da10d1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI4LI7YK%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGHc%2BtR0OSxGc438wVx586Ss%2Fx0b2ATcFW67rijM%2FQY2AiBhPQ%2BI7N181BG2CvnOjQMfhQH46ZXDQRlWVuS1tzsc4iqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMANEer2%2B1DPM%2BL%2BbHKtwDqVXOLmh%2FVj74DmZSkTISHpLoP4SCdSLLbkjRWigi9e%2BArAmyppZN4KkYOytprgXTz5QuFk2NJWRavTH%2BRRMsYL%2FjIB3U6fjLLQ5toYbB1mspN2YsHSXhnhmG%2BwXz8TEH%2FJyBbrvIPj3jNtFu4HR7tXd3OYt7ZcSlrp6r3VkxskJw1vTBoAvRqmzoFiahidAiD96gvrNyMvcVxGiZtH7PKMGywEDIA213doganCelavu85WyFbna2%2FMjNR8OFSrMEeuhNOCAOqyeMBz0LHethCksI5Ffvp1G9xwbuU868u02nh0fnXJ1%2FHcZQp5ZzWwVXp5xk6foiNS0J0t77BGLr%2Bd03vGg5x%2BdEtvo1L%2BGXk8S1iMOS7LtBo6DRIaEN4J%2FX0KqYFhWEAwFJApq1%2BSANnrLKvzisGtoVkjszq%2FFz%2FiIulIZBjiAhSI3V8URV0QDfr%2B0DcoX2jp%2B%2B1VtfTA4rmaFYp5Uipb5NdN%2F937hOXP6DpUlfY8RcAYYBG5%2Bavrqibxv3lBQRqeVXbqOfEvvwlzMw6FUowHWTAfYSvW%2BIaUTjH9Y2wbJAi9q22e6KiGNEUk%2FQQyXXptpFRQq%2FSL3g%2BKXkView9XDUeL83hc4SH%2BlxWYoGkfUqrGKeI2Qw5tjOwAY6pgE7GqneTb29R55POQIl%2FUTzSxQ%2Bu9ZQIl1nBddMzCYi56pWrRIjiwJWCS7Z54W6sGFXoQgQjfbXkB67lOHSOD6vvHVGSXH%2Fq8O8GcCmzT%2FQwzTYteGnlElQkDSou8WfTdo0hRCwhotZKM78%2BEaIxBgu4fdcXYgfj2jGqJUkf2C7E%2BxqG5ttLy7zeF6FWWSOKM1AWXtWUkg6dHSbhrZVycOUMreDRqJa&X-Amz-Signature=12e5d8d81f6212db8de1f3753511793cd8aaa1675c09be0f42f838efab977bdc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEHGUYV3%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDWB%2BJAZ%2FrVlCsAuj%2BDZXQstLzkuPrE7UqOf6UuglQtdgIgGfjIR0J0o53z70h%2FcESEUEkALvNMCu6hltoIuEP2uj0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA479s3rPaHUheLxVyrcA73EF5e29KIvpnzTZefsRynNFBmcKyoNGZX0Kwo1Lbm8hdlDi8dBXAxuyNnv65DAXV25cBHaT0LU0XYByDE4ITtGVzfUImKAEy7bvpgzdFOvfSsRqNpAEi9Hrbg%2F%2FGJdYGwaT9mbOrfoM%2BPGRAg%2Fw8dAb1BZpydB797GueIOjS8iXcOLqPIAP3blnE%2F8KgcaBFzeUqok%2F4taRrqSuvGb7ThLMjUwmL7z7Y3TGC7KGW2s6iMvAK8PIvDtToKFptLs%2BIbibrRvEX3ajV7vWeqj7x%2BWaN2ImRvYwr%2Fg9MpRAnlLxkIcaKhfYni3%2B2CLZc9dD3vBtqA%2F2NKyDS2jiX%2Bi5ihRb%2B3CuhvWD8d7Oe6NQQ2jl3f8cKRRujjlWYu1X8Mti7MZXiirY7Fp8fct3ulPuZlJY%2FbsdDn1ZMITACe7%2BgP5SmX4E%2F5fJxdpeONpdfOI7Phlvsii2rGUNn88ybB7uhZh4FVF9KcveIKWXZUQmN2h37w%2FWC20umaNepJUVULjxaArt5Yd0YFgfvf8HRUR2nazV0pfB4sdwQQ5ThAlS%2FLm1G7SbqsCWoo80z0CfVvSLCAlzJOOWIvMfmrfzP1nW0SZFXFSfBbLNaOrz4BnWJ6T2kJB8IdxWIaulBElMNjZzsAGOqUBrlsphQsaZkt0u01n33GwhWYqHBl0W1SYU%2FqDQWyTwP1yNb6PUxcC%2BGyYUeSRGx%2FdYKejQSRj5DJZCKTWeWguKj9WNdQfSVy0WirYEgiDygp6A7h0IcfaVpJKjr58B6Z0oM5tMjgGTIl9ki31b4sSAJtA6BB51vGFrUofdJuvDwG44YyU0vXr4ud86x8cVDehYkrt8C4fjo82XmE6MLDA%2Fhl92NBD&X-Amz-Signature=81dd756928a56361434f60a835e4eb988b43f6ae682d497de527279a125ea4bd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

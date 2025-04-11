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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNSBOUMF%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCfVLAjudrVA2c%2FZDM3NZkNqKyBT%2Bmu8DRg9r7YcQlwawIgBfjPJo1xxXiK0mixaf0KWYzPsetbe%2BqLa6%2FYlAcoEPAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIuXy1qV4gdKMnB2CrcA2ar3rvVcVJLGQDFFXahM3G17Fw6cm0m8pDLXJzgKkNDMPbqBED3CvxEjc%2F7SebmbJtAgyd8BceE5RXKIC04j%2F2jWMQ8knaJ9ZApY%2BUmBeEhD8V%2F6GnXQTp%2F9VyEBWb4h6j1IZVZro8ggU2GsQAAHToQDzBxosgtii7sNKV6zl%2FcrZELHM4O5rRNpP%2FiIJHjbbBCZfbxOaldLAyGxDidTKl3L682MDhrT51ncuz8U5O70RTEsDb8PbV%2FaOsyjydrWFSMpfLYVCcoU7nHcfjgDgxMwvYpv%2FXfzBbrPh%2BFXAUiY1Zp6igM2KpFZclcOlzhamlw6CbCf9zOBWxXHtAa%2FP9UZjh6y0YGzCpe9rDFdjBwpy%2F4R2scaSftgTLB6aTwgoJgErxI7CrhqfTFC0X1pFFcB14Jaz9CC6GFe4NZVJWy7VjkrBC%2BX9aFiMtRAvSq8TVDaXYKjq7xvf4KtNB1lWcsYrdcNB5uhGct5OznShBDNy8koZ7OG7IoLb6RxQdvNmOS2l2Po105u1kaQKZDGMHccrR2QrlryDAkqPD5gk%2F7nzZSJ03sg%2FTYsqumGWbNEpD1e2fUxtlLt%2BLaqfcgsNCCmmuZy1oFdw6ZnZE0W1w2K6Y11J4XnN%2FuBjeIMPq15L8GOqUBRNzpr8S7o6VJXO5YtKnH%2BJKM3r0i3vDW56ULXI10yZFt04yML9Qf9zTy6mUzl1TQ%2BL4jUgFqSmit3D9uuX%2Fz1Ev2NYp9k%2FVucKdTDU38PSIbeye9bRCMu4d8I8ZW5fr%2B1ufbCsnGG8DI3ATJEGaEvVKjettlKqcnKctLE9YkobcpbqthwfHaZ1LrLa2w8rxmp3nDriCgl6iTYC00Eujf9RQxsn46&X-Amz-Signature=e8b01b1ff018613bb47505e830409ac6ca714d15b791cc9b289de728502e2e28&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNSBOUMF%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCfVLAjudrVA2c%2FZDM3NZkNqKyBT%2Bmu8DRg9r7YcQlwawIgBfjPJo1xxXiK0mixaf0KWYzPsetbe%2BqLa6%2FYlAcoEPAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIuXy1qV4gdKMnB2CrcA2ar3rvVcVJLGQDFFXahM3G17Fw6cm0m8pDLXJzgKkNDMPbqBED3CvxEjc%2F7SebmbJtAgyd8BceE5RXKIC04j%2F2jWMQ8knaJ9ZApY%2BUmBeEhD8V%2F6GnXQTp%2F9VyEBWb4h6j1IZVZro8ggU2GsQAAHToQDzBxosgtii7sNKV6zl%2FcrZELHM4O5rRNpP%2FiIJHjbbBCZfbxOaldLAyGxDidTKl3L682MDhrT51ncuz8U5O70RTEsDb8PbV%2FaOsyjydrWFSMpfLYVCcoU7nHcfjgDgxMwvYpv%2FXfzBbrPh%2BFXAUiY1Zp6igM2KpFZclcOlzhamlw6CbCf9zOBWxXHtAa%2FP9UZjh6y0YGzCpe9rDFdjBwpy%2F4R2scaSftgTLB6aTwgoJgErxI7CrhqfTFC0X1pFFcB14Jaz9CC6GFe4NZVJWy7VjkrBC%2BX9aFiMtRAvSq8TVDaXYKjq7xvf4KtNB1lWcsYrdcNB5uhGct5OznShBDNy8koZ7OG7IoLb6RxQdvNmOS2l2Po105u1kaQKZDGMHccrR2QrlryDAkqPD5gk%2F7nzZSJ03sg%2FTYsqumGWbNEpD1e2fUxtlLt%2BLaqfcgsNCCmmuZy1oFdw6ZnZE0W1w2K6Y11J4XnN%2FuBjeIMPq15L8GOqUBRNzpr8S7o6VJXO5YtKnH%2BJKM3r0i3vDW56ULXI10yZFt04yML9Qf9zTy6mUzl1TQ%2BL4jUgFqSmit3D9uuX%2Fz1Ev2NYp9k%2FVucKdTDU38PSIbeye9bRCMu4d8I8ZW5fr%2B1ufbCsnGG8DI3ATJEGaEvVKjettlKqcnKctLE9YkobcpbqthwfHaZ1LrLa2w8rxmp3nDriCgl6iTYC00Eujf9RQxsn46&X-Amz-Signature=f20511a18b0ee2bf6ef394928a5e3ec2fff10121d332d640d71e01e7fdd67eea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSPHZEKC%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCSKSm445yvhw15znUNeqVV9ed3K%2BgDGpbFvt4DN18i2wIhAI3Ahs9VOELTL8eVI7haWQ1%2FDGuJrf7u%2FvMIUP45eI4uKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpNmOxgRzhlosZ%2Bhsq3ANRbtir9rHSb30k%2F8utxdAZY72Ox4Wq3Ts396tFhQ5eW2SNJy1iecnIeRgTu2i9aaPpHqKTREWlwAZRPMQP3Xa3jIXdnRs1MT0j7F0WU%2BEw4WTtDeW%2BG4%2BMXOS%2BBbmackQSGPbjTC5vn44s%2FEpCboGrLPBZVBpMoAOFf1ZcUvCqnYInfn2FpE9wJwR5%2F%2FIOU4UzZP24kwtWysd%2BtTNggvEQEP2GgiBU%2FTCl6QhJxq1lIUG%2FcFbqdDnEsamr8aRg0RDVGVfotBdYgqOmfQ%2FScy2AhhxyY4ukoUvAj8y98gxCQ6riwkylrAZBgeM6DDNBlk9%2F2xd%2BvvX%2F0s55HPIN4fxarMNMfmsdWpv1Lv5Fw1RiZ8aEu6Y8k%2BlvHAVGtMwfxDCCcAwZdL187YJ9Y%2FBuYCuL0Qod9BFOVzRjV6xJFaZY5gktUhHSUl9Bf7TSBmKVVwrHEiHWCSL7MZtaCWmPAjGRMVt8r7dYNZVuUj8qvS%2BJwfilTSJ6CIsw7twkS0qUOiJSfWhaRHakroC2orL69H9JiPk9OPaVn4sKaVt%2FfT%2Fz%2BoKVTfpjSWVk9Eo1MeEV0QIScLRTusYXDhnJ8GK3fa0512wUrFDOazzTXxxwEar7z7mFDrz0DDkIconRWzDtteS%2FBjqkAWkj2%2BgfwZf6UmSX92%2FjNTetAqelECeYx3Y%2BEA1J%2BijpEF1qCOc8TZ2hndjKdQ9H1hSf2yhrH5QdIHS9AzpHhJ%2FUsDKi3MZ6KZnWbVyint0hky5OPGm8maf79skSmJyM5HPr2iDTdlbklSAZaB4jGl5CLWTIC7BhdxC2S%2F8MQepcj68yaXqV3ljfrbAEGpGxppmYN%2Fjl53VCzAWHAIK4gVTASuhD&X-Amz-Signature=191cd6efe9cf563b304a784918daeefede00f54ce25b561e704a2abb763960dd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDRXBGYI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIDapWFerKHN2%2FEHvyY1LeV%2B6PZbQsp5JqyyvC%2BFCH27lAiAk4wreneiauhi6nGKuGX4QA%2BRcBjrPKe92GvtQbguFFiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMod9zd%2F7r3dqzkJOCKtwDcQ7MWwWAQt%2BqKpluj%2FSiMT1P7PJR0yhvulMGGWk70t3nhk1um2337SL0A75JYoiXbiMAGerRiY34Vnv7n%2BupqqaAEMFpxzcENkwfFtqqaMCJHLK6e6dVrltZkfcmR2do1%2FMNXFkbeKooz6%2FF7Ld2SAdMtRpDsQvi8LobAFsFK6v5%2Fk5wadQFOheuHgS%2FDKGvDZHBsBEx4erK8bjVe43q0WJ4hvmrgG6VTHC6kOa9l4pgKN%2FU6AaVlLvkV%2FV2We4f%2BY3Cta7veGqA%2FDbkCl%2FQ0uuEgqHib8YltvRfU%2F7hjJXBeplVY6Bas58OmnbP1mlyD0R4ViP2b9Ecq8sYaCWlm40eTuYH2R%2FgQn8umYLcn3SzFN5r%2F6bbIbFR7HJr65wxR00O2miXsKmgLQg65tfHnF%2B3O3MJHSZXyRHQfEy%2FBxN0%2FsSXkYc9XEM6AVnQOzQSmbGW9d4d9dciPR653IDJAur3bYSPpw0w2DL%2B8wOuU%2BpD0cWATmo4W1UGuP7kRcXSXNjiJPCPSdxv1sXkTVWC01MPEu06BECjipg4GDqiB5W59A3Wf3x8n9MxkhSKp837kdd%2FofeNweQrqwaJGtwv%2BHYcxSuAdXzS5zdC94es19htdjcTopEX3%2F6f8FQwpLXkvwY6pgHPeADV0xJS2Usn8gGCvbFNyIMeMnwYZ%2F5MSkOG1VtO8Au4WktFvzvBs5A9rNkvzjIoozQNlM%2B9%2F1p9aduVY043sCnLVk3Bv4IALThiXVeAVbGlrj4bDmy%2FBsUaZJzHt2aCqVGhzJV74upePuAeyPPisdieOFnYUQs4FAtKODmR7n2eR11gHVNRQTTkvsWeuRdSAHbA1gIocEQyLjXXUyHh22h%2B73rh&X-Amz-Signature=575785a088dfcd052ff147c881f8d981e44c87795cbb7c0a7d68f06e7705349c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNSBOUMF%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCfVLAjudrVA2c%2FZDM3NZkNqKyBT%2Bmu8DRg9r7YcQlwawIgBfjPJo1xxXiK0mixaf0KWYzPsetbe%2BqLa6%2FYlAcoEPAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIuXy1qV4gdKMnB2CrcA2ar3rvVcVJLGQDFFXahM3G17Fw6cm0m8pDLXJzgKkNDMPbqBED3CvxEjc%2F7SebmbJtAgyd8BceE5RXKIC04j%2F2jWMQ8knaJ9ZApY%2BUmBeEhD8V%2F6GnXQTp%2F9VyEBWb4h6j1IZVZro8ggU2GsQAAHToQDzBxosgtii7sNKV6zl%2FcrZELHM4O5rRNpP%2FiIJHjbbBCZfbxOaldLAyGxDidTKl3L682MDhrT51ncuz8U5O70RTEsDb8PbV%2FaOsyjydrWFSMpfLYVCcoU7nHcfjgDgxMwvYpv%2FXfzBbrPh%2BFXAUiY1Zp6igM2KpFZclcOlzhamlw6CbCf9zOBWxXHtAa%2FP9UZjh6y0YGzCpe9rDFdjBwpy%2F4R2scaSftgTLB6aTwgoJgErxI7CrhqfTFC0X1pFFcB14Jaz9CC6GFe4NZVJWy7VjkrBC%2BX9aFiMtRAvSq8TVDaXYKjq7xvf4KtNB1lWcsYrdcNB5uhGct5OznShBDNy8koZ7OG7IoLb6RxQdvNmOS2l2Po105u1kaQKZDGMHccrR2QrlryDAkqPD5gk%2F7nzZSJ03sg%2FTYsqumGWbNEpD1e2fUxtlLt%2BLaqfcgsNCCmmuZy1oFdw6ZnZE0W1w2K6Y11J4XnN%2FuBjeIMPq15L8GOqUBRNzpr8S7o6VJXO5YtKnH%2BJKM3r0i3vDW56ULXI10yZFt04yML9Qf9zTy6mUzl1TQ%2BL4jUgFqSmit3D9uuX%2Fz1Ev2NYp9k%2FVucKdTDU38PSIbeye9bRCMu4d8I8ZW5fr%2B1ufbCsnGG8DI3ATJEGaEvVKjettlKqcnKctLE9YkobcpbqthwfHaZ1LrLa2w8rxmp3nDriCgl6iTYC00Eujf9RQxsn46&X-Amz-Signature=b416884056dc5636e2af0b135eea369ca43801316511d3eb7cdc691508b95f72&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

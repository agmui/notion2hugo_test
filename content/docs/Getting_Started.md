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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP2MJGJZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBgBVAWD4eAolqnCIfLCH%2Fz0wm2SDwEwrzjaycZ3H5S9AiAkpztJdPJ98nD57luthQhd3lMJme4aU8SLHycg%2F3GSeCqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2QGkZtIHFq1x0rctKtwDR9NmL68DizGHOrhB3h%2FJclffHbcervrJk2kX%2BIh%2B1IZk7SC69w7wcNyAQCKDLYD0Bza%2BDXvG9zRzyTC%2B%2FxCfhwKX8zv%2FIasDOaQ50dcmJQh9X%2Bq6VMfSKLqstbBsD%2FZAT6Tx%2FJa5xI7YxUEOZr46z3YyD2BzsE97czcsGsRWMeMVQiZvcnIE%2FEn4fiuYl88WZwE%2FcxsCQsURf8qpvL2qaPQ0vyVfm87ffAiYn8ms8L0%2FbN0oDIRWb4JDrDr8KsKt7uZ36TRxbDL7zKJsrypIjP2ufItD6sRFLn%2B1LzP%2Fca9dO2ppT9SdJcKOA1%2FXZrmrrRgFgnPHzwzK84GbszgxymizjsyPoWsZmxF1TX%2Fk9gQmPWNe3%2FMfkyW6z1Gw2CGX20AIDCRRXtsn50ZTA1OPWbhnnJGtE9LBVHj3%2FHzSo%2BoOePXTKJ680o5i%2B61CxjZSVTiyV6pg5vD0tvXoE5v9FsAnTswVHEWgGufJyTY1tk1bUWHmMC188P%2FnYcfu%2FHUK0IpBIAQirZEiOUwKJDa14M7xHPjuxZfrqcnIR%2Fa5MVXIwv9OTjRQAakc57AiHRnLUN5%2BJnktOgyvjKhHFYeCpIEMrMGQtcNFwNFEA9j6HYPwIFv8xZLnEiuLEw8w6dWfwAY6pgGJ9S5NrA%2F9G1p6NRGt70NSI8pM0PzL%2BhXrmniVnBjj%2FVU4pgEiisYroBD0x%2BV2AGHAqP3mpxCe5A5%2BKxHJQEv%2BxkTO5PlDFsy45WGkO8NesOT28ZAlj6uU2r3mGx8Wj9AgwfqusKyphmyIfcdDfcw3zEQQXKbPN5dKAiWjOARa4j1qFGYCw%2B%2BqNQyvusddPQH04BTYjcklXB2nSSOoALCPFlZQNO4t&X-Amz-Signature=52a2d77c40b97b8a888cd211a34e286fee792e326403141e4ce8882ea4d46180&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP2MJGJZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBgBVAWD4eAolqnCIfLCH%2Fz0wm2SDwEwrzjaycZ3H5S9AiAkpztJdPJ98nD57luthQhd3lMJme4aU8SLHycg%2F3GSeCqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2QGkZtIHFq1x0rctKtwDR9NmL68DizGHOrhB3h%2FJclffHbcervrJk2kX%2BIh%2B1IZk7SC69w7wcNyAQCKDLYD0Bza%2BDXvG9zRzyTC%2B%2FxCfhwKX8zv%2FIasDOaQ50dcmJQh9X%2Bq6VMfSKLqstbBsD%2FZAT6Tx%2FJa5xI7YxUEOZr46z3YyD2BzsE97czcsGsRWMeMVQiZvcnIE%2FEn4fiuYl88WZwE%2FcxsCQsURf8qpvL2qaPQ0vyVfm87ffAiYn8ms8L0%2FbN0oDIRWb4JDrDr8KsKt7uZ36TRxbDL7zKJsrypIjP2ufItD6sRFLn%2B1LzP%2Fca9dO2ppT9SdJcKOA1%2FXZrmrrRgFgnPHzwzK84GbszgxymizjsyPoWsZmxF1TX%2Fk9gQmPWNe3%2FMfkyW6z1Gw2CGX20AIDCRRXtsn50ZTA1OPWbhnnJGtE9LBVHj3%2FHzSo%2BoOePXTKJ680o5i%2B61CxjZSVTiyV6pg5vD0tvXoE5v9FsAnTswVHEWgGufJyTY1tk1bUWHmMC188P%2FnYcfu%2FHUK0IpBIAQirZEiOUwKJDa14M7xHPjuxZfrqcnIR%2Fa5MVXIwv9OTjRQAakc57AiHRnLUN5%2BJnktOgyvjKhHFYeCpIEMrMGQtcNFwNFEA9j6HYPwIFv8xZLnEiuLEw8w6dWfwAY6pgGJ9S5NrA%2F9G1p6NRGt70NSI8pM0PzL%2BhXrmniVnBjj%2FVU4pgEiisYroBD0x%2BV2AGHAqP3mpxCe5A5%2BKxHJQEv%2BxkTO5PlDFsy45WGkO8NesOT28ZAlj6uU2r3mGx8Wj9AgwfqusKyphmyIfcdDfcw3zEQQXKbPN5dKAiWjOARa4j1qFGYCw%2B%2BqNQyvusddPQH04BTYjcklXB2nSSOoALCPFlZQNO4t&X-Amz-Signature=0d8da8176323b7ceefcfb061fdaf262bb22635766cba8f5598f4b8082f3713b2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C5SQ5UL%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDY9DnRMy1zuw2%2FLDHlWryLhlBCcMJK%2BnpYXodqMj4kYQIhAIAY8EDF4diNzU8wD0euD5DbxzwfcJIxALeYPP0L3PFvKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYx3qIcCJ802y5Zr0q3ANp63QW7zEEyF8OBhIv%2Bl6kY52JIfrHo%2BCFdO42hVsBLYaZRkCjan4%2FJHyZ%2Bynj4tTOubALIq3IJ2%2BjKyfKU1KTBlZchAgaUtWO5UGcOCIG40HqmjJzAbG4cw6WwJjZl9osyIC7k1eJZ0%2BcrzdBhCEGYYauv%2B0USydInlDGgapUEz6mMzdiAF5beLbSy%2F9sFuoXSC7ca94VPxAfeh1dFc9Ika55kvu0PG8RP2Rcev2uMZ2lsFCEL10jLVFxqawvIQDzyFcKfjdfHRUrfF1j1gDAtivrVMT%2FfBEr990N28BrXf7qJpYYN6pJlauLNY5RYeCGvYq%2ByiA%2FkXWUsYs8pw8VoD%2BBfVhy2oUyWOApypmzjAiP23bUeviSQSR7QgRmSiXnol0rZvX2NcBt3jU1196xMY0%2F787tO79VNuS10xZAGFrLREXMGHbzJBfjNeWtKVb1trqFZL32KFFjaJTLFUn%2BxUTRzvN5AFkI8x9AgDbDS5niC1OzXdLDIL8Mm4V1PL81ABamK724prIRuTJrsywoeyaOl554LJ6nJHTM5TafRTdscjeKQ3g3qrWw3KgZjUP0F7YNoqHNh8wqfgqBUoA5OX1zLSRCnFSspsKn9%2FDbvsf8TjDof%2FlfadDaljD41J%2FABjqkAURM2mdJ6ETW3ZmH5rEPFTNTOHbNhqtTufr5avGI%2BafDNAzfw81RbzFAnffdYNVCXVkjc%2B9IaLOklwxSJBTP5ulaApzn%2BrHNbWAuBGkFR6i4cmM6HPdzyS4sCd4N2y%2BmkWX3rZO8VCmHuEDKf%2FErJwtu7NzXEjopMZKFXHJhhldaPMzqUbM3ftAY3XlRUUz3YM2UarrPRygtAfCOBMAErOBFDDdQ&X-Amz-Signature=90ab75ded2e09193c233867fabfb971ad204870dc8183eb01a3f950b45df1a55&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZUMW3SJ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCl1pDgco16qBDZu%2BYdN27bZxPwqZT8YwO1GA4HcQWvLAIgHSwOMEAfQ8P6HgQNmvsgJ3K3Z%2BBrlS%2BU07r31eRjaFcqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIU9QRPZP%2F%2FBq%2FzRMyrcA3fa37yCx5cFoFBD9d9loMLKAZg5JAjwFuFbcha9mD4D6oVIsrmLfjkcNWspt74JEGKbKuEFFh931vE7JUkPZx%2F3Vh%2BHAPqN6A0OwCA88346X%2FFjhwCHFSk7UvwyBdjUqH%2F6U%2B1xx1bbOGPuL63zhP8BezJ4UJsEO8wY%2BK7XGZ9aa0FRy8uE51i35j1PuQvs%2BRbk0vvCw6Py0tK%2FC1e6UAZ3KbMC%2Fq2ZrtWMeALIKef8a1XosAWgTuMCnG5h2jPdJLfhK9dN9n8tIKDncsj4DTbvDawOHg6foa8HlbtbaQt7y0sHoHCQ2LBWB%2BkCmEop1Gk3Cku2iT1F9RmHcTQY4i3XTiVRV3msdGpVT96Z6O8aJqr43xsZFuIbHaDuJrR5eePTSlW%2B%2F8j%2BqpX1qGY2LFzbI1bkXkmlUnXojceqi8hzmBUOtcQP%2FmgT6tXu2ZqJ7KCsX36uz75VW1OpzssdrHW3Z9NVrxBMqxMUrH4yyn%2FPJdaZo4wpoXLr%2FSlCVHT578w158duY3UH5ippUKqqXrxzqlgxT4RKmTSMMj4SCNtAsk5PGZ4YaMFyipWrtbu6qvjDvAYFPnXNBUPc208zCXi%2FWjMUAQUHqq0nXaQc4jJdGxWlk6u4LBgipmj%2BMP7Vn8AGOqUBxOxl45t0GX4RuyRmFg353hh6dnJTQF7C803fg9ER9TlsT2ZGZXdLU%2B%2BvwLf%2Bz6w6VwT4i%2B52%2Fi8I2xyqVE98H2uVnVPhLWFRmyA8gnRgeHCcOTAh2sZ103TVfkJrvy4UMcz4Qev%2FlLEQob5JpdtaNx24PHD3ubUWIZCCbE3a9MBb0TjsOVaakX3R8SR43jc%2FSCN%2FkwJsBB8kYxEGJ9bcE12Mt12i&X-Amz-Signature=8d56c78f0b5e4328049953778f588cb401ebac8169990c487d47c88143624429&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP2MJGJZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBgBVAWD4eAolqnCIfLCH%2Fz0wm2SDwEwrzjaycZ3H5S9AiAkpztJdPJ98nD57luthQhd3lMJme4aU8SLHycg%2F3GSeCqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2QGkZtIHFq1x0rctKtwDR9NmL68DizGHOrhB3h%2FJclffHbcervrJk2kX%2BIh%2B1IZk7SC69w7wcNyAQCKDLYD0Bza%2BDXvG9zRzyTC%2B%2FxCfhwKX8zv%2FIasDOaQ50dcmJQh9X%2Bq6VMfSKLqstbBsD%2FZAT6Tx%2FJa5xI7YxUEOZr46z3YyD2BzsE97czcsGsRWMeMVQiZvcnIE%2FEn4fiuYl88WZwE%2FcxsCQsURf8qpvL2qaPQ0vyVfm87ffAiYn8ms8L0%2FbN0oDIRWb4JDrDr8KsKt7uZ36TRxbDL7zKJsrypIjP2ufItD6sRFLn%2B1LzP%2Fca9dO2ppT9SdJcKOA1%2FXZrmrrRgFgnPHzwzK84GbszgxymizjsyPoWsZmxF1TX%2Fk9gQmPWNe3%2FMfkyW6z1Gw2CGX20AIDCRRXtsn50ZTA1OPWbhnnJGtE9LBVHj3%2FHzSo%2BoOePXTKJ680o5i%2B61CxjZSVTiyV6pg5vD0tvXoE5v9FsAnTswVHEWgGufJyTY1tk1bUWHmMC188P%2FnYcfu%2FHUK0IpBIAQirZEiOUwKJDa14M7xHPjuxZfrqcnIR%2Fa5MVXIwv9OTjRQAakc57AiHRnLUN5%2BJnktOgyvjKhHFYeCpIEMrMGQtcNFwNFEA9j6HYPwIFv8xZLnEiuLEw8w6dWfwAY6pgGJ9S5NrA%2F9G1p6NRGt70NSI8pM0PzL%2BhXrmniVnBjj%2FVU4pgEiisYroBD0x%2BV2AGHAqP3mpxCe5A5%2BKxHJQEv%2BxkTO5PlDFsy45WGkO8NesOT28ZAlj6uU2r3mGx8Wj9AgwfqusKyphmyIfcdDfcw3zEQQXKbPN5dKAiWjOARa4j1qFGYCw%2B%2BqNQyvusddPQH04BTYjcklXB2nSSOoALCPFlZQNO4t&X-Amz-Signature=4e691e448ee24bec26a70b6411bea207c734b2da9524c92e41b50f8a028e866f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P2R22GI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIEKM2SoKanoicMsyOP0MTxmlW2cHsnIc15hcOIWUEf7GAiEAmwhIw9DNe1ILynQVOk8udc5QGD7K7%2BZgasodQAcjVoAqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9ZcaPPMkZ8kJyPNyrcA0wXkA3%2BqxAirdLTRVR5n2yYp4dsybAPSOcAsx9OF2fR0JA7Lz3YydjnFMeGL6l%2B7BrFSY21jT6uWZCtheyDb9R5BwxmOCZFbwiajgBSmLEmZBwKq1h%2Bh2MqZV4iNHqNZJEqeyomoVbB6PmdxAuzKRt51l8TBBT4nduu5Ryo%2F0Vh0ZCL5bL5%2FoIAUuysJF4%2B3pa6t7E7g%2Fr1R1vnMyggTESzUxdSiJ6gkpLgJ130DbJVVJLdMkKTJqJfDZVtpADYLidWKcCjcbuc6Kq%2FwSCwQGgxVQiaW%2BzdF71LvriQn6mdm189YwRpT0XLsba%2FQ4W%2FV%2BXpsW%2FqPzHdXtXaaoOxoxf8c%2FLzTMMDdiZelsNr7xQiO7kIOv5TEf%2FmhB4cbs1S%2Flf1q8A%2FNdmyH8qZ3Xwl8Gj8eDNF6unWwoMmHkDN%2FPJ6NiAuG%2F8ScESiqBv9No%2BYOkGkbmyTvHY2o8kaEmDGSkaOiUkLwm3%2Fc5iQ%2F21YwN1rAlWjBN8wfX%2F35OOGn20no7LXhv9d4d%2BL8TKHhkwkBy3ArUAI3MGrNYDOFPXHydRy5uvEKw%2F15gq%2BlPSlFGrOVbIIZPJhL71aLlg7ZZF9kRqzMjup%2BY59c%2FCxKtAVKm%2Fm9f3IiuZjx6q0sBp8MJ399sEGOqUBdSq%2FUXsUf6kawyf3gc3VBXFLwLLYmn%2BAiMS8gszsmMijRa3gjUN77RGIv6w5WOd%2B%2BrR2sRmOnTH%2ByAn6bqdEqq1C1xWCUsJmbGTldaTmTmt5kkGmSsPjV2dKSTQfzmUgbgqMkjViv68avH1ZO8vzo0xSDFXQukMxMewo9N8kpwLJqAhHwtwM9cEm%2B2Byfg9SXE%2BWjXITWc3i3gebJz8kaMNs1k3o&X-Amz-Signature=46fef07103fbc7ce1bcadb323106cfea0339da3c2c38a58fa9bd1b1fcf6696da&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P2R22GI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIEKM2SoKanoicMsyOP0MTxmlW2cHsnIc15hcOIWUEf7GAiEAmwhIw9DNe1ILynQVOk8udc5QGD7K7%2BZgasodQAcjVoAqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9ZcaPPMkZ8kJyPNyrcA0wXkA3%2BqxAirdLTRVR5n2yYp4dsybAPSOcAsx9OF2fR0JA7Lz3YydjnFMeGL6l%2B7BrFSY21jT6uWZCtheyDb9R5BwxmOCZFbwiajgBSmLEmZBwKq1h%2Bh2MqZV4iNHqNZJEqeyomoVbB6PmdxAuzKRt51l8TBBT4nduu5Ryo%2F0Vh0ZCL5bL5%2FoIAUuysJF4%2B3pa6t7E7g%2Fr1R1vnMyggTESzUxdSiJ6gkpLgJ130DbJVVJLdMkKTJqJfDZVtpADYLidWKcCjcbuc6Kq%2FwSCwQGgxVQiaW%2BzdF71LvriQn6mdm189YwRpT0XLsba%2FQ4W%2FV%2BXpsW%2FqPzHdXtXaaoOxoxf8c%2FLzTMMDdiZelsNr7xQiO7kIOv5TEf%2FmhB4cbs1S%2Flf1q8A%2FNdmyH8qZ3Xwl8Gj8eDNF6unWwoMmHkDN%2FPJ6NiAuG%2F8ScESiqBv9No%2BYOkGkbmyTvHY2o8kaEmDGSkaOiUkLwm3%2Fc5iQ%2F21YwN1rAlWjBN8wfX%2F35OOGn20no7LXhv9d4d%2BL8TKHhkwkBy3ArUAI3MGrNYDOFPXHydRy5uvEKw%2F15gq%2BlPSlFGrOVbIIZPJhL71aLlg7ZZF9kRqzMjup%2BY59c%2FCxKtAVKm%2Fm9f3IiuZjx6q0sBp8MJ399sEGOqUBdSq%2FUXsUf6kawyf3gc3VBXFLwLLYmn%2BAiMS8gszsmMijRa3gjUN77RGIv6w5WOd%2B%2BrR2sRmOnTH%2ByAn6bqdEqq1C1xWCUsJmbGTldaTmTmt5kkGmSsPjV2dKSTQfzmUgbgqMkjViv68avH1ZO8vzo0xSDFXQukMxMewo9N8kpwLJqAhHwtwM9cEm%2B2Byfg9SXE%2BWjXITWc3i3gebJz8kaMNs1k3o&X-Amz-Signature=440ec3a89cd06dd0da161c0807bbf2da487219b1c9a8f43da723289091424585&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P2R22GI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIEKM2SoKanoicMsyOP0MTxmlW2cHsnIc15hcOIWUEf7GAiEAmwhIw9DNe1ILynQVOk8udc5QGD7K7%2BZgasodQAcjVoAqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9ZcaPPMkZ8kJyPNyrcA0wXkA3%2BqxAirdLTRVR5n2yYp4dsybAPSOcAsx9OF2fR0JA7Lz3YydjnFMeGL6l%2B7BrFSY21jT6uWZCtheyDb9R5BwxmOCZFbwiajgBSmLEmZBwKq1h%2Bh2MqZV4iNHqNZJEqeyomoVbB6PmdxAuzKRt51l8TBBT4nduu5Ryo%2F0Vh0ZCL5bL5%2FoIAUuysJF4%2B3pa6t7E7g%2Fr1R1vnMyggTESzUxdSiJ6gkpLgJ130DbJVVJLdMkKTJqJfDZVtpADYLidWKcCjcbuc6Kq%2FwSCwQGgxVQiaW%2BzdF71LvriQn6mdm189YwRpT0XLsba%2FQ4W%2FV%2BXpsW%2FqPzHdXtXaaoOxoxf8c%2FLzTMMDdiZelsNr7xQiO7kIOv5TEf%2FmhB4cbs1S%2Flf1q8A%2FNdmyH8qZ3Xwl8Gj8eDNF6unWwoMmHkDN%2FPJ6NiAuG%2F8ScESiqBv9No%2BYOkGkbmyTvHY2o8kaEmDGSkaOiUkLwm3%2Fc5iQ%2F21YwN1rAlWjBN8wfX%2F35OOGn20no7LXhv9d4d%2BL8TKHhkwkBy3ArUAI3MGrNYDOFPXHydRy5uvEKw%2F15gq%2BlPSlFGrOVbIIZPJhL71aLlg7ZZF9kRqzMjup%2BY59c%2FCxKtAVKm%2Fm9f3IiuZjx6q0sBp8MJ399sEGOqUBdSq%2FUXsUf6kawyf3gc3VBXFLwLLYmn%2BAiMS8gszsmMijRa3gjUN77RGIv6w5WOd%2B%2BrR2sRmOnTH%2ByAn6bqdEqq1C1xWCUsJmbGTldaTmTmt5kkGmSsPjV2dKSTQfzmUgbgqMkjViv68avH1ZO8vzo0xSDFXQukMxMewo9N8kpwLJqAhHwtwM9cEm%2B2Byfg9SXE%2BWjXITWc3i3gebJz8kaMNs1k3o&X-Amz-Signature=257e705128557a8c8ebe8c6b3da18bd1f8ca09e1f836b3981fe957629ced0bc8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VEREPHG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDPdLXOS77Y7CWVQEKLEp06ub9dzUZYKrFcXHnx44sGvAIhAM2uWjsRJoh%2FEO6u5GCkm6kLtHeF2zW2GCWaiZKWldeXKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1GlLn7xK6agZRo90q3APq8%2F1zsTPsiHLDVQGFJxrzG02ZwVUqinEqNBDlVfF31HWAr2NnDQ1p1AFao0yiiY03txO2LJvX45GiDVBV8mszBZWBSuaf74zmNn%2FBBajU9Dar3Tm7QBtTnwTN9rCJBVvdIwNkLCb1z%2FTYq2DMJb5Km9LzmkIc7zhiNccoDovKpJP8xQvrNOJgNloPjimEvpXj39tMLjCvl%2BH%2BSaJFnYXVmF2oT0m5oslOPntDUw2CpkA%2BkCC5U6IUP%2BVp1UXMf46LFmXaSVch%2FrKLI%2FAiY8odMCHAsPgh%2B6G3f74WFTQlj1TTZnnz74v8CX8IAccZqyzMqcsO6SPCo3E2eG7A6AQ9TJWenkttXSN7ExGEw2Y%2F1TIEjzAq1brUC6FKYB%2BsqV3OrugcBLaaFbTv7yB0Cc2Q3pe%2FKzO33cD7nP%2BJln0lx9YPhDR8OoiCyWV4cTF%2Bq%2FG%2BM11QqP6dis8DXFzVzKdcwkpJlM8H5GTLOy6God4aVh%2BRUybD51CTluoTsSpYNef6m7Ym7xVz4RthSlZNM64xfVj7n1TnYLTV9KgxfT7pBu8m3xNgXhXidolctLAWM4wdOouMhd4B9jqrJQVV2dVA%2FvCX9vNwCXbEI9dpEBT6FUwLxg3NDUyAf%2F3TUjCf%2FvbBBjqkAb02ndeKDaaoD3rFCLiqJjcDx3GAqCetHlpsGez5PflNVA0orPEtvL2En6Xp%2Bqz4Avrminaao2pM36mBiMq6tUEHQEl3W2rdEPKuEGOZ1TinwacptmRHLvmjeZ6MUh85cq3SoOUjwUoR05epQJ7P%2Bm5P8D8LITbXQMRQIDmphSfSEh2Y%2BndmRQK%2BonunzwzUrftFzZbyLz9lwLhkt%2Bt9i4rMzMJ9&X-Amz-Signature=fad5216119cd432113475cd2e7a544136aaf8fe423b7a24dadd3aeded21fe803&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NXNBCAS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIEQi8rNUg1uj%2BLU9ccbmDw8xuzsGkxkHi2oh5R4PfxdoAiEA0cL5i5vk8zkDTv3gxObbHcRyFefi3SVvTI4wt9mj3HsqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKztn1Ds9lKmq3LkyrcA0FfFCcaKeU7g22jga9wcPdnHt%2Fufd61kMzf3gJ3sEI790RRpDvkhpY7ZH0%2FB7IjwXRdJHraTunWgO0MZOvOOMfHYBsP6MJ603TjoGrRcnW3NZ9hjrXtibEuGtcddovaQlicL5frg93NvD67s%2FUyJhKIZeZdxM%2BJnfSe%2B0uw4N4GxdwxKY0lUGpymYle0Y%2BHTNUAGBGLrETJvrEV07hN8XGWEuQ9DlHOXjlTBkTZY9ngvJShu8K%2F48l5V%2FN1TcSY0pPTqlunKrpq45pvgY22MTbZrHx%2BuUxrlGj7xvLHULgjZoL3rYP%2FbLbJr0OTHjI9r5h5r%2B8YdEBiLm8zNeCLkm9OdE48WL7%2FZRa6%2F4h%2Fh6bnOXHr4eUZHkWYANNTbHWGLgpFeXN%2B7JG6fLFV31Y6wLOvM4ee5wQCTjIloD2yWTy62H37edtiFJyGKrXggJ1SzlTQ1srJPze5sgbhhHQH1aycIiZtD%2Fji18VF484HGA5%2Bqv8SSSiK3rXafJJrEXA3ehKUolvdjdoseSIIuHrYjhedq8xcp72kUZPW0MYpxMQyVH63%2B3G5hImmYkUz7oTBEK3lwqQXfnr2mgQOB1xFYygI%2FGblbMmHaisheczE8k%2BHBjgjrrbX1dTMdQr%2BMOr99sEGOqUB7gtRL3zbwyIEtGmCYsoacH4R4yA7TeRnyhoZtjOG%2FThIpq7yfgzYkbkPiebmcOj%2FeKsblMvtFC3XSzOjQMQbVNo%2FrDdCdF528%2FckR%2F91KGfQDVtLbW7%2BFSYtBaPPrqnd4ExM%2BdKGz5RvD6Wz0Pd1Y7uIVYUn%2B0kiZlao96bjmApOh70LyOdiJRZpLAqWgvNiYWx%2B1lT%2BcPIvOgINYoJquQl7mgdb&X-Amz-Signature=0bac0015d3b4965683d3f605dd78d3d0fceb1a7c576cbc94cdaf792810b1e042&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P2R22GI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIEKM2SoKanoicMsyOP0MTxmlW2cHsnIc15hcOIWUEf7GAiEAmwhIw9DNe1ILynQVOk8udc5QGD7K7%2BZgasodQAcjVoAqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9ZcaPPMkZ8kJyPNyrcA0wXkA3%2BqxAirdLTRVR5n2yYp4dsybAPSOcAsx9OF2fR0JA7Lz3YydjnFMeGL6l%2B7BrFSY21jT6uWZCtheyDb9R5BwxmOCZFbwiajgBSmLEmZBwKq1h%2Bh2MqZV4iNHqNZJEqeyomoVbB6PmdxAuzKRt51l8TBBT4nduu5Ryo%2F0Vh0ZCL5bL5%2FoIAUuysJF4%2B3pa6t7E7g%2Fr1R1vnMyggTESzUxdSiJ6gkpLgJ130DbJVVJLdMkKTJqJfDZVtpADYLidWKcCjcbuc6Kq%2FwSCwQGgxVQiaW%2BzdF71LvriQn6mdm189YwRpT0XLsba%2FQ4W%2FV%2BXpsW%2FqPzHdXtXaaoOxoxf8c%2FLzTMMDdiZelsNr7xQiO7kIOv5TEf%2FmhB4cbs1S%2Flf1q8A%2FNdmyH8qZ3Xwl8Gj8eDNF6unWwoMmHkDN%2FPJ6NiAuG%2F8ScESiqBv9No%2BYOkGkbmyTvHY2o8kaEmDGSkaOiUkLwm3%2Fc5iQ%2F21YwN1rAlWjBN8wfX%2F35OOGn20no7LXhv9d4d%2BL8TKHhkwkBy3ArUAI3MGrNYDOFPXHydRy5uvEKw%2F15gq%2BlPSlFGrOVbIIZPJhL71aLlg7ZZF9kRqzMjup%2BY59c%2FCxKtAVKm%2Fm9f3IiuZjx6q0sBp8MJ399sEGOqUBdSq%2FUXsUf6kawyf3gc3VBXFLwLLYmn%2BAiMS8gszsmMijRa3gjUN77RGIv6w5WOd%2B%2BrR2sRmOnTH%2ByAn6bqdEqq1C1xWCUsJmbGTldaTmTmt5kkGmSsPjV2dKSTQfzmUgbgqMkjViv68avH1ZO8vzo0xSDFXQukMxMewo9N8kpwLJqAhHwtwM9cEm%2B2Byfg9SXE%2BWjXITWc3i3gebJz8kaMNs1k3o&X-Amz-Signature=238b3b8eecb457d79bb8c9fc209b12552901f28f579207e8d29666215e7338ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

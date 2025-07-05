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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624ZHKWBI%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDkrUndGjEZAoznc8K9O58xiCRGrUS1y%2FQm%2BN4jyqTFJQIhAO8A8kfYT3X41BnRiuXD4mqbZ0CN5RYHr6KxWYpHFoqoKv8DCD4QABoMNjM3NDIzMTgzODA1IgxSL3CToEf7fJaqmt0q3AP6%2FSm7xOOw%2FNLsIu%2BZYEOou26Bc0LiIqa0h%2F0rV7hSV8RlIuiFuC28DEy9ECZMe%2BldX1Bwvs4W87a4Kmy9gVPzyggfmurUDrB%2FPrd7s%2B6nIoEe1bXnYYJ4l85LlXKlC1SFghxZbV9HSj%2B3vNK7ylirvBsatkoeX8TprgoPIXXUU2KoL1yloV2pCFVkRLhq6nQJy8xcqIrlnMLtTKbU6UtdHfc93nbPBfBQjwLWRm2xfLFqYtAwjCEbhgso%2BFhC8wLCW188H8lCtaE%2Fqz5wHho4xDLnW0PFzj3whRyQbaF10CqR2Kghi1pIaz3bMsPQhS%2FZc%2FxakaOSyHwbgFtqXzyedtvlfGikWAwbrhQb3xlVJ1BUhQoxB2Nyx3x4Nt630sSIVQU8IoWa2erHyXXNhZouVJMWDOcniYis8xH05x%2FeKOlL9M5hp0nhm%2BoIcJacEUQRGTUjFy0ixKwA6YKAzIsXHxspqiH090yx%2BVSK8112UJvNJSv1lpNDrKy96TcuyIydz02mfG19WvyJlwfYI82x84scnrIK4PK%2Fh4l1mZ7xdXxOgi19YUdBYd9L5ZhPoLDKLkBfFf%2Bt%2FoLOWKi9WzXDVghOMJPHppqIWsnM1aENW3xvU6pcLixAihAtfzCT4qLDBjqkAUrZ66iQWoFCPCNU7IaFW1IxROzSff2vcueo6Od5ZocpxRS53jywDdEuHFoBi4WDnzddtCyVDk7DQ1vZdxEkiqyvDTl39qQ4m36URRW7W4SfO6URa7XGWNdHUiaxWYWHyvU8RR7FUP4VEdZgNR4CPOyNA9Rds62FXw5spD7kcaySy2i2%2FpZZHbLgqs%2BagBPYvmzZmZHpQsC%2BTKoWAnQmLUxvn8%2Fd&X-Amz-Signature=87750a1033581b8512933fa335bf8e02d87a91e4a516a2e378f3e438893ba5e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624ZHKWBI%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDkrUndGjEZAoznc8K9O58xiCRGrUS1y%2FQm%2BN4jyqTFJQIhAO8A8kfYT3X41BnRiuXD4mqbZ0CN5RYHr6KxWYpHFoqoKv8DCD4QABoMNjM3NDIzMTgzODA1IgxSL3CToEf7fJaqmt0q3AP6%2FSm7xOOw%2FNLsIu%2BZYEOou26Bc0LiIqa0h%2F0rV7hSV8RlIuiFuC28DEy9ECZMe%2BldX1Bwvs4W87a4Kmy9gVPzyggfmurUDrB%2FPrd7s%2B6nIoEe1bXnYYJ4l85LlXKlC1SFghxZbV9HSj%2B3vNK7ylirvBsatkoeX8TprgoPIXXUU2KoL1yloV2pCFVkRLhq6nQJy8xcqIrlnMLtTKbU6UtdHfc93nbPBfBQjwLWRm2xfLFqYtAwjCEbhgso%2BFhC8wLCW188H8lCtaE%2Fqz5wHho4xDLnW0PFzj3whRyQbaF10CqR2Kghi1pIaz3bMsPQhS%2FZc%2FxakaOSyHwbgFtqXzyedtvlfGikWAwbrhQb3xlVJ1BUhQoxB2Nyx3x4Nt630sSIVQU8IoWa2erHyXXNhZouVJMWDOcniYis8xH05x%2FeKOlL9M5hp0nhm%2BoIcJacEUQRGTUjFy0ixKwA6YKAzIsXHxspqiH090yx%2BVSK8112UJvNJSv1lpNDrKy96TcuyIydz02mfG19WvyJlwfYI82x84scnrIK4PK%2Fh4l1mZ7xdXxOgi19YUdBYd9L5ZhPoLDKLkBfFf%2Bt%2FoLOWKi9WzXDVghOMJPHppqIWsnM1aENW3xvU6pcLixAihAtfzCT4qLDBjqkAUrZ66iQWoFCPCNU7IaFW1IxROzSff2vcueo6Od5ZocpxRS53jywDdEuHFoBi4WDnzddtCyVDk7DQ1vZdxEkiqyvDTl39qQ4m36URRW7W4SfO6URa7XGWNdHUiaxWYWHyvU8RR7FUP4VEdZgNR4CPOyNA9Rds62FXw5spD7kcaySy2i2%2FpZZHbLgqs%2BagBPYvmzZmZHpQsC%2BTKoWAnQmLUxvn8%2Fd&X-Amz-Signature=a262a992df17a03ac324a25f85e85a9759f423119d1ac949d8943e2296ead048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624ZHKWBI%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDkrUndGjEZAoznc8K9O58xiCRGrUS1y%2FQm%2BN4jyqTFJQIhAO8A8kfYT3X41BnRiuXD4mqbZ0CN5RYHr6KxWYpHFoqoKv8DCD4QABoMNjM3NDIzMTgzODA1IgxSL3CToEf7fJaqmt0q3AP6%2FSm7xOOw%2FNLsIu%2BZYEOou26Bc0LiIqa0h%2F0rV7hSV8RlIuiFuC28DEy9ECZMe%2BldX1Bwvs4W87a4Kmy9gVPzyggfmurUDrB%2FPrd7s%2B6nIoEe1bXnYYJ4l85LlXKlC1SFghxZbV9HSj%2B3vNK7ylirvBsatkoeX8TprgoPIXXUU2KoL1yloV2pCFVkRLhq6nQJy8xcqIrlnMLtTKbU6UtdHfc93nbPBfBQjwLWRm2xfLFqYtAwjCEbhgso%2BFhC8wLCW188H8lCtaE%2Fqz5wHho4xDLnW0PFzj3whRyQbaF10CqR2Kghi1pIaz3bMsPQhS%2FZc%2FxakaOSyHwbgFtqXzyedtvlfGikWAwbrhQb3xlVJ1BUhQoxB2Nyx3x4Nt630sSIVQU8IoWa2erHyXXNhZouVJMWDOcniYis8xH05x%2FeKOlL9M5hp0nhm%2BoIcJacEUQRGTUjFy0ixKwA6YKAzIsXHxspqiH090yx%2BVSK8112UJvNJSv1lpNDrKy96TcuyIydz02mfG19WvyJlwfYI82x84scnrIK4PK%2Fh4l1mZ7xdXxOgi19YUdBYd9L5ZhPoLDKLkBfFf%2Bt%2FoLOWKi9WzXDVghOMJPHppqIWsnM1aENW3xvU6pcLixAihAtfzCT4qLDBjqkAUrZ66iQWoFCPCNU7IaFW1IxROzSff2vcueo6Od5ZocpxRS53jywDdEuHFoBi4WDnzddtCyVDk7DQ1vZdxEkiqyvDTl39qQ4m36URRW7W4SfO6URa7XGWNdHUiaxWYWHyvU8RR7FUP4VEdZgNR4CPOyNA9Rds62FXw5spD7kcaySy2i2%2FpZZHbLgqs%2BagBPYvmzZmZHpQsC%2BTKoWAnQmLUxvn8%2Fd&X-Amz-Signature=3aebdb3e861c94eca19d8a05aa1f5c9bc3442a8a31be1f935e918e421a3205f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YFJHRJY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGmhoQ4VS7n1BlABi8ZArcLFIGKVTNZemJVczjVIsHY3AiBHO3Aa0bEv4PAFOcc%2BxCrghidaPb6azq1zcX%2BoFBDC2yr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM4naSvuBRgP5QP0SDKtwDY2yT9FzuITJnPMcJImCBy005qcPEVT8U2%2BXnoHYmJwNF%2FOj%2BOdQ%2BqMnOwaztj5%2FsnW%2F3YmnDvQBu7E1mHA3wBNUsXuQRwqVBpCfwW9PY8yxa0WQ%2FUfRp0YVZw4RVNqZi%2B7y4ZrZBk99909RDXDzVwTGzM5DVhSjieRe%2BQXV0t7C9nSDutML5CpzKr%2BTATzup061NycL8DS4RK4Iw2j%2FRBF0vx7tFFcPjVGFhAI4%2BpzhUaOTVsguW3efy3UZmHF818RGCnhkqlT06gCwlzemTdQvMg4TJ2STnTrpIhB%2FdW6Efv6zO1q4IGercqFquSl6fs3KupICOp3PN4i18gqY3341p9YU2xgjLA47AVoHyxR%2FTl0HSeM7yf5nEn2Z1JMtYSUjONRW0fT0gj%2FNZ14yf61UG%2Bl01KbUHl9vda1%2BTaASoQ%2BMv%2BCu53fNcg5o36Eiv9axjzjPld8W%2BICr21Uzjj85HwLrDYiq8or0bHOXkxzUktVf9RgxcvL8iga51jMBDi6VYPNVsNyhoCsxKEgul%2B1GVMz19dHhLm2hHYcgCc%2FQcAeLQ4ByfBlPnvzdEvN688v8eG%2F8pdIup1Qg4cGr3ZPf%2BQrUwyXBMM4DokHsXeeKAiFoj5NluOh8G1dEwnKyjwwY6pgGAwoJMKxyJ5xgdsWQQKpt%2BBSNkQqChG0Q3RkJW%2FBxwsIKTk%2B3ecMSdTToS8k6BlhrK5XpVtVqMjDyq9wwK8DfCBzMvPohPbzC0LvKd1y0nTJ2c4EK7owT1nVnZeC4InGe704f3HK8zEr1qHVfql%2FjT4SiR1N1Wpsk82f6DVfa4tlCVQfIaz%2Fq6%2FI%2B43MlSd861QW8vNQcdkTNEYeFNKvSTQbNQACux&X-Amz-Signature=fc4426b54f7bdb9496c4a74ed7b58e6cebaac3a1ecc8ece03dae503d44283920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK666WCJ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIEvvDG2r7FW1POh8nK%2BgLDQ6YzNHqopqlA%2Br19gTUUSCAiEAi%2B6sE93unVJuTzEvz%2Buxc0An7eigBoAnssImQG6liqMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOSnBcTezNzq0tbC4yrcA3EKdkPVHSM6V2kibQ5xrD6%2BdcUwbSAEIJlt8FbDw88IOzd2UYqT3EMjFKnl62EOs2F9uoYd28Lpp4dMSIm6SHSDsqlP8AFdriNTW8gxkWkiWuu6yvp4te74wbCToYVI7vBHM1erpRfXnP3hp4WZUdy6PC3Um4QocnLmj4XZSgfRqNCNki3Pp%2F2GAoxS5Tnybl1YvoHCJFxL%2Fd7Nc6unNe%2BHtWhULkKk%2FaGj1oK2rFneW8VDJJiZGdSSCy8AZ4B2CCXP%2Blf6AYj6%2FqT3ZuKn2%2By6Tj4bJ8vdhLmH1sMH7%2BLw%2FpVxM%2BsUK3wlZ%2BR9EMhZtLTW9Go8c4wlQ0Wh5WlrgkWmRAtrpOyLzbRy61YsFXgvWtA7yuMVuFOu6mwyBC0Es0GNXcTN9OxjeQGq4KvMCELh76caix4qLeSOwNKPqgy%2F41rbFwGQ4kIbROHEf8OzgOtusbCF0Ye6rW9u8l0ae3flp5WITJUVjtDLkm4gidgRx7LTPk4udXodn0GISiwrpTwa31h%2FIpPxRE8kKYTms6e%2FXmRp09EspY0dSsgSjHgzy1u98OLMPFa%2Fjg%2BQA0jV29GX%2BGFqnRYU%2B8k1R%2FHNHv8OPq%2FB5et4YZQM8y8ZIq7kjSDkc3hrbZTjXruXMIqko8MGOqUBdhRUKuZ2NhYyk6DCs69Z8jEXnS9bpQ%2BkYno1C0n4xLWRAMORFOrHjYO2S3SBbMMRbAVDTIxfrQCbfD%2F8cLq9l347aofXLxC%2BU5bZYHudTdqzA44Ds9RWYJhdt9Xa5woHvd2FigzF1VpdteCrLR1P47tc2Dx%2FmEQzHjRLnvbzmBIn7A%2FOX2ZDcmfjcoDBtmgE3msd5UzwkUYYkMlAdd7EGVP9bU5Z&X-Amz-Signature=e6c9b4d0a386ef43c2495e351640d76dff92f30e0a19b0e0c23cfd195f9c745f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624ZHKWBI%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDkrUndGjEZAoznc8K9O58xiCRGrUS1y%2FQm%2BN4jyqTFJQIhAO8A8kfYT3X41BnRiuXD4mqbZ0CN5RYHr6KxWYpHFoqoKv8DCD4QABoMNjM3NDIzMTgzODA1IgxSL3CToEf7fJaqmt0q3AP6%2FSm7xOOw%2FNLsIu%2BZYEOou26Bc0LiIqa0h%2F0rV7hSV8RlIuiFuC28DEy9ECZMe%2BldX1Bwvs4W87a4Kmy9gVPzyggfmurUDrB%2FPrd7s%2B6nIoEe1bXnYYJ4l85LlXKlC1SFghxZbV9HSj%2B3vNK7ylirvBsatkoeX8TprgoPIXXUU2KoL1yloV2pCFVkRLhq6nQJy8xcqIrlnMLtTKbU6UtdHfc93nbPBfBQjwLWRm2xfLFqYtAwjCEbhgso%2BFhC8wLCW188H8lCtaE%2Fqz5wHho4xDLnW0PFzj3whRyQbaF10CqR2Kghi1pIaz3bMsPQhS%2FZc%2FxakaOSyHwbgFtqXzyedtvlfGikWAwbrhQb3xlVJ1BUhQoxB2Nyx3x4Nt630sSIVQU8IoWa2erHyXXNhZouVJMWDOcniYis8xH05x%2FeKOlL9M5hp0nhm%2BoIcJacEUQRGTUjFy0ixKwA6YKAzIsXHxspqiH090yx%2BVSK8112UJvNJSv1lpNDrKy96TcuyIydz02mfG19WvyJlwfYI82x84scnrIK4PK%2Fh4l1mZ7xdXxOgi19YUdBYd9L5ZhPoLDKLkBfFf%2Bt%2FoLOWKi9WzXDVghOMJPHppqIWsnM1aENW3xvU6pcLixAihAtfzCT4qLDBjqkAUrZ66iQWoFCPCNU7IaFW1IxROzSff2vcueo6Od5ZocpxRS53jywDdEuHFoBi4WDnzddtCyVDk7DQ1vZdxEkiqyvDTl39qQ4m36URRW7W4SfO6URa7XGWNdHUiaxWYWHyvU8RR7FUP4VEdZgNR4CPOyNA9Rds62FXw5spD7kcaySy2i2%2FpZZHbLgqs%2BagBPYvmzZmZHpQsC%2BTKoWAnQmLUxvn8%2Fd&X-Amz-Signature=4ec04b2698d328b90d0c128a0fbf025b1dd8780ec22a3859d8bb317a46e74fcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

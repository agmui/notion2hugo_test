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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWGMACWJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDY4t25JC5WtK%2Bj1yFk84i9oTWMWt2PxTzPol99DQWjjwIhAPlhSHbm5TGCrkPgQOezx%2FoYy4zsxCjmTXWoYYKaR92lKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYcdUe%2FQWQihwA5pIq3AMt%2FTvz3D2BZylIhhTNjFu9i%2FYObvj7XNHksek46hTDLVuaLi59i5tDGzPH16EQ%2FKhIg%2BNKQTeEIKhWA3KVuuM2120no3KiYtVwn%2B6bFwu0hjdPuwC3%2F9EEuqfB%2B305KSkMLMJn2OM5673bn26FnXcoagGpqIsMYDBGGAf4aQHwsHu2MfuA%2FyH8vYPVDzdp1Fym7jRs8W%2FGIdz7n9i4X2CAAWEDU3FLCfhdQUC%2BY3xjjgZmLYkiDe8csYi8YC4WDMWVEGjp0wow437ZAIcDftfj0cu6ghr9raQUTGprF3a0h%2BB4InGPDn2ANyV0uvTOatlTOusq2CZptQRPgzmEN%2FlAelZTuMhi2tFatdQs9TpLODVLS9GfQITd%2F4ftFa5j3U6jMGbDd%2F8OqJbPgTQ12UyWISk4Uxxu043FAQxzFQYUit6yisb3oyssVGlzj9k6J5qIFfhHu6xtHw7SV%2F149XTbKy4oy86VC5o8AEv0LVNQ1757WGW5CobzA8jTkFiY4xtE6vfPSNG%2BblVL2EgsYhqq2aXDBUdu98UMFPYqsCEZDolLr%2BGh%2F8Vn1LMK%2FvxUmjOLovIUD8NgcGZS2jO7lDURuWk8Mgn4iz9kFa8LTkcJzmyOJWh2AJAf%2BInfWDCr5a6%2FBjqkAQhcyaOd9XC4B%2Ba71Hgp8beBZdmS4qBgl5zJ7z68DXGXqvHFD1Jpeb7ysAUQKIgg05TIjfF3FjLtFz1crit%2B8ObbVlip8P5p7DNgAIXfhEmK8aejhQ%2Ffgu2GrpEEizBlZnvVajrnWutJkEeWduW1VbfdW9CbZsk%2FWZxlmTJkxYkvdTq64M10tc3X4jrZpzUSiKZCqO0amleLaJpeMCHRhrrAqwqV&X-Amz-Signature=8bf94625fbb3bea4a3d21921f5b821fced27bfb94448583e0b11411a0df742d3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWGMACWJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDY4t25JC5WtK%2Bj1yFk84i9oTWMWt2PxTzPol99DQWjjwIhAPlhSHbm5TGCrkPgQOezx%2FoYy4zsxCjmTXWoYYKaR92lKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYcdUe%2FQWQihwA5pIq3AMt%2FTvz3D2BZylIhhTNjFu9i%2FYObvj7XNHksek46hTDLVuaLi59i5tDGzPH16EQ%2FKhIg%2BNKQTeEIKhWA3KVuuM2120no3KiYtVwn%2B6bFwu0hjdPuwC3%2F9EEuqfB%2B305KSkMLMJn2OM5673bn26FnXcoagGpqIsMYDBGGAf4aQHwsHu2MfuA%2FyH8vYPVDzdp1Fym7jRs8W%2FGIdz7n9i4X2CAAWEDU3FLCfhdQUC%2BY3xjjgZmLYkiDe8csYi8YC4WDMWVEGjp0wow437ZAIcDftfj0cu6ghr9raQUTGprF3a0h%2BB4InGPDn2ANyV0uvTOatlTOusq2CZptQRPgzmEN%2FlAelZTuMhi2tFatdQs9TpLODVLS9GfQITd%2F4ftFa5j3U6jMGbDd%2F8OqJbPgTQ12UyWISk4Uxxu043FAQxzFQYUit6yisb3oyssVGlzj9k6J5qIFfhHu6xtHw7SV%2F149XTbKy4oy86VC5o8AEv0LVNQ1757WGW5CobzA8jTkFiY4xtE6vfPSNG%2BblVL2EgsYhqq2aXDBUdu98UMFPYqsCEZDolLr%2BGh%2F8Vn1LMK%2FvxUmjOLovIUD8NgcGZS2jO7lDURuWk8Mgn4iz9kFa8LTkcJzmyOJWh2AJAf%2BInfWDCr5a6%2FBjqkAQhcyaOd9XC4B%2Ba71Hgp8beBZdmS4qBgl5zJ7z68DXGXqvHFD1Jpeb7ysAUQKIgg05TIjfF3FjLtFz1crit%2B8ObbVlip8P5p7DNgAIXfhEmK8aejhQ%2Ffgu2GrpEEizBlZnvVajrnWutJkEeWduW1VbfdW9CbZsk%2FWZxlmTJkxYkvdTq64M10tc3X4jrZpzUSiKZCqO0amleLaJpeMCHRhrrAqwqV&X-Amz-Signature=433f00dd26c956fa2f1b50870c441e76184d6d4eacce2c2bb7f1fc7aaeb9788f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB6P5GN2%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCICgNlO2%2FE7i7E6wrnE5uSAVgBUt0RUfl0yjnuqTLvf5%2FAiBBaMoxBN5a6pUHmad%2B1t5p8QrY2wCLpp3BqRX5xQaCNSqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt7%2Bdw1qUyRnOYUQFKtwDCQgi6YlvwdK4A%2BB5qIqpI8xB7BX2OCOOA16l5qT%2Bw6hAM5boQ%2FTX%2BpvnWjVJLNu7lGP%2FmWuy6%2BcsTO8yrU2BVa0N9c%2B4ScjLjj5%2FOuFDSzPnSgvCyXDTc16Uacs4C4%2BYuM8U462DVynn155cuzRy61HoLcBfJPrHPmit8hWt09hr0gq4mAy8JsW0Xq8BBCcrLHwk8BwzE%2FXZP216oKhNczvh4J3TfkDqQh0VAd4oY1DxluUiNnex6XsxU21zO85x5uxSgE%2BhlaHu0N0Z7TF7msX9oiBKAuXdlbFfVK%2FNiSzpVNu%2Bl5vT6SABSeyLZqoXmoxbzW03qxwBgn6XnQs9j58967xxDTCiDvqu8%2BTBijw7nBH5WMjs0VvtS26PWg%2Bkp%2BHZdTJOfU5Ps7GGJHGv5BTVOKeNzYSRDibpDyPCVik9KJz2777s5KK85w6%2FLMKnyYkyAJQPlDXqfry4qe3mzjTjurm00zJChEBIITxULLameR0T%2BXmEU0xrWi9Kfgl6qgtjXF76golcReTPMgvxSd%2FDu5dSGXUWTm4k0RV5LzkONf4SbsYaJwc41Hvr2p0n0MsPyWtJSuUvEvxOr4NaBQx5LF38rTz1PKHBfS9zw8UwLX9xwiHUGebYC5swweWuvwY6pgG0xJMvRcEHjnenUTiUmB802%2BD5YnqPHif95v30m0Q4dQSDNSFcaUGKocIPtRVB0cTBxEvRXGTQv4sgPgKjy3afhwi8%2FSYyOeYx9a9HHUdecxX%2FjEXdpHOmDPQTZeRhmn%2B95GmigS4%2F7ZOqX3lzS89J1Dq%2Bfw%2Fb%2Bz8XRuoDFE9eNKyqtuRvdFtneSoeUe3%2FOYJzqJHlVC%2BQe%2Brae37dwPPgrISC84Th&X-Amz-Signature=a4ee96073efc6824389cbc7c70d777e11c2e6e5bdb170730d6dc066898fda02f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NMGUGZA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEkftQDh66AYDiEq5dE5sqJ%2FBaWfG9S8Mkg8qmmrMdp0AiAbYOHQ9qpcKk84ZQHUWV%2BvW60gVrFnIJ2Kz%2FeA6wtvgyqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt7K9EYru7ylovGYnKtwDW0He7xQRzfFL8SbfWChmR1HGc%2BfblIX%2BRjVLuSpcrqsLYwFIxHzjGqNtB1NAn7%2FHP1%2FHh67tGLGgpgY4b7Ak5YLkmKoBCaEf077Bao4lHBHnvtotPQ5Da2RWT0C9LLEXYisvDzxmcjbpDPNxsUJfqtzFXPRq1u8xyk2Y%2BYZGuZLDaZGU6036QklLwspup13Fr3ZBI9m1PLZx%2FXMMc0%2FdaxodA%2BZlTHWSLpe9CNHDBki2ui24HdCm3nYlfGISyiONQ4nA6ZEgZSpMnIbzmX5m8FerjQjOE5DoQogFNEY9JNcYQZf4iMGD6J%2BDoi%2B%2BsmvtJOdTxX%2BVI4lTKITJl0Zltb8OUO9stwXLNyCTUQiwTjSHdDoiGDtXh5BLoG%2BTx593XXz0wonlvS7RQ69C7zQI9HgJ2lyEcr42titzc5Nj7AEaCD%2BIB%2FisRt7HQ3OgsByekxBFuzTu1QHceuIP5Z8zyqONs4jkDytntj3vWumlXs2WW8icO2qa2sEPFTYZf0U6EAaGxuKXzrl8%2FYY7QfMhlwc%2FS%2BauyLP4hVoH7vVOIIErT9dcjx4tO3UzIkasEZwpaZfUKzAAQH4slBpLhzibl1gch%2BE3OZ9q58hJL7zlMSFg4Tt69Qv%2B3gy1nycwo%2BauvwY6pgG9mlGCbW99bmdtqA7SML4uNHJstvYYWE6CeF5%2Bs4PpPXphMoPgw%2BXTBU2Jg4y%2B8NHku3G%2FRea%2BNNKFUr95Q26v4rYJrizTNcBhcdCSClN05XocyJO%2FrMUDZIBJwUV1oMBg6KjqzVwErbEc8JAYiJNPIL67CDUBdSrQ9QrgsxnLU6zlvswrcUmk1zhOjLLj1gKe6P3fYYp6grdlf1dgMPt%2BwrO8AEc3&X-Amz-Signature=2f9ed388db9fb21254915fa0b75e704a3adf215c99e2ac1189142796560646f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWGMACWJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDY4t25JC5WtK%2Bj1yFk84i9oTWMWt2PxTzPol99DQWjjwIhAPlhSHbm5TGCrkPgQOezx%2FoYy4zsxCjmTXWoYYKaR92lKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYcdUe%2FQWQihwA5pIq3AMt%2FTvz3D2BZylIhhTNjFu9i%2FYObvj7XNHksek46hTDLVuaLi59i5tDGzPH16EQ%2FKhIg%2BNKQTeEIKhWA3KVuuM2120no3KiYtVwn%2B6bFwu0hjdPuwC3%2F9EEuqfB%2B305KSkMLMJn2OM5673bn26FnXcoagGpqIsMYDBGGAf4aQHwsHu2MfuA%2FyH8vYPVDzdp1Fym7jRs8W%2FGIdz7n9i4X2CAAWEDU3FLCfhdQUC%2BY3xjjgZmLYkiDe8csYi8YC4WDMWVEGjp0wow437ZAIcDftfj0cu6ghr9raQUTGprF3a0h%2BB4InGPDn2ANyV0uvTOatlTOusq2CZptQRPgzmEN%2FlAelZTuMhi2tFatdQs9TpLODVLS9GfQITd%2F4ftFa5j3U6jMGbDd%2F8OqJbPgTQ12UyWISk4Uxxu043FAQxzFQYUit6yisb3oyssVGlzj9k6J5qIFfhHu6xtHw7SV%2F149XTbKy4oy86VC5o8AEv0LVNQ1757WGW5CobzA8jTkFiY4xtE6vfPSNG%2BblVL2EgsYhqq2aXDBUdu98UMFPYqsCEZDolLr%2BGh%2F8Vn1LMK%2FvxUmjOLovIUD8NgcGZS2jO7lDURuWk8Mgn4iz9kFa8LTkcJzmyOJWh2AJAf%2BInfWDCr5a6%2FBjqkAQhcyaOd9XC4B%2Ba71Hgp8beBZdmS4qBgl5zJ7z68DXGXqvHFD1Jpeb7ysAUQKIgg05TIjfF3FjLtFz1crit%2B8ObbVlip8P5p7DNgAIXfhEmK8aejhQ%2Ffgu2GrpEEizBlZnvVajrnWutJkEeWduW1VbfdW9CbZsk%2FWZxlmTJkxYkvdTq64M10tc3X4jrZpzUSiKZCqO0amleLaJpeMCHRhrrAqwqV&X-Amz-Signature=1561ac286d0dbaf93b9a14945532654e5acd10e27c931d54a5e12f5c504720a8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

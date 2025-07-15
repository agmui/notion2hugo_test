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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K5Y6XQK%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDB42Mtrr4BN1WZeGMP1Hkgc%2B8bD8th5xbePEVPVYxm1gIhAJlBFlLfn%2BIJaUm1RAbfPm2eyDUsyDk5SgMn5OQHAapEKv8DCE4QABoMNjM3NDIzMTgzODA1IgzO7jsZ7F1Ebomuyq0q3AO8hDIy7JJevwONgrwXJFIhMIFRsZaoFf9Se7skYbLOfGEsVy2WJuYeD6FcRBVfsRiJ1pYcNv7JfTjkgtmEDh6qLHASbWPaOE%2BXfKSHLuXcrHXDtvLI2tqUgo%2BdK80pHDvC2qNcKXlNfK5RzfFvLPZRnEKGSb0UqqNtbmDa0Ihx3Etw443Uv3htrQ44dCXMgEL5GBUMdCkkdW4UEnnOBCi01VK0pYJgsiIg%2FfeCOCHIla82JuxHtahYOOKpmECQreuiW4HVOrgSE%2B%2BhTxflu3VUP4fUDeneXgrfC8th9%2FPzjG%2Fg7pt9DIXBuJZGlirQOHLso2pMcWW1iS1rTj8X4RCnEdLeUE%2FimG9vSZwzhn7SMemPoD9J8%2Bwf7LutPfQtyt%2FtIAhEesIyyaNkYKHJFON4gPiW2HY%2F%2F1pyUMdZWzjdLesN0mzezM6rFFQ651K9hrNGYeTIpSxT4qhUU0TMEtQRNIqkxwY0qSLX9BLvXPdlUkc9T%2FJ4PXSWUp2rLKPljeKQrkBR4K5sWu47s0u8%2B9IvYae0HJWKfxPwLUJ1j1C%2BhzTo2DsAs4jv9R%2BLcrCXksRPm%2FapRIAyf43Eum4mENL%2BDz9bgAfBTz4JlKY4mbsW6HHyfeZn1aHeUMCqJTDZ9trDBjqkAYI%2Fo9nLY%2Bifq%2FNedL6tikgJna2gkpHlf4F3cKBj4VfI1pFKvqOShvAJewTpvvNcamzJmchwm8b1C1qEQee%2BgqySA80NmczMM8jIVHnipe%2FMtNvUxmx0Fw4dFcgWw8QAows3DQsr3zaSMpHEsP5WuFBG1mI60gwFebyYlJY3%2BDtoa7FnIGVSgCH%2BbayNHgweveslzf5ASA5G0BKHWHSKBsT0YGSI&X-Amz-Signature=70e587f50f99ad3dc3af0575ac1c797c0a9849f6dbddf2edc6fa470041775731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K5Y6XQK%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDB42Mtrr4BN1WZeGMP1Hkgc%2B8bD8th5xbePEVPVYxm1gIhAJlBFlLfn%2BIJaUm1RAbfPm2eyDUsyDk5SgMn5OQHAapEKv8DCE4QABoMNjM3NDIzMTgzODA1IgzO7jsZ7F1Ebomuyq0q3AO8hDIy7JJevwONgrwXJFIhMIFRsZaoFf9Se7skYbLOfGEsVy2WJuYeD6FcRBVfsRiJ1pYcNv7JfTjkgtmEDh6qLHASbWPaOE%2BXfKSHLuXcrHXDtvLI2tqUgo%2BdK80pHDvC2qNcKXlNfK5RzfFvLPZRnEKGSb0UqqNtbmDa0Ihx3Etw443Uv3htrQ44dCXMgEL5GBUMdCkkdW4UEnnOBCi01VK0pYJgsiIg%2FfeCOCHIla82JuxHtahYOOKpmECQreuiW4HVOrgSE%2B%2BhTxflu3VUP4fUDeneXgrfC8th9%2FPzjG%2Fg7pt9DIXBuJZGlirQOHLso2pMcWW1iS1rTj8X4RCnEdLeUE%2FimG9vSZwzhn7SMemPoD9J8%2Bwf7LutPfQtyt%2FtIAhEesIyyaNkYKHJFON4gPiW2HY%2F%2F1pyUMdZWzjdLesN0mzezM6rFFQ651K9hrNGYeTIpSxT4qhUU0TMEtQRNIqkxwY0qSLX9BLvXPdlUkc9T%2FJ4PXSWUp2rLKPljeKQrkBR4K5sWu47s0u8%2B9IvYae0HJWKfxPwLUJ1j1C%2BhzTo2DsAs4jv9R%2BLcrCXksRPm%2FapRIAyf43Eum4mENL%2BDz9bgAfBTz4JlKY4mbsW6HHyfeZn1aHeUMCqJTDZ9trDBjqkAYI%2Fo9nLY%2Bifq%2FNedL6tikgJna2gkpHlf4F3cKBj4VfI1pFKvqOShvAJewTpvvNcamzJmchwm8b1C1qEQee%2BgqySA80NmczMM8jIVHnipe%2FMtNvUxmx0Fw4dFcgWw8QAows3DQsr3zaSMpHEsP5WuFBG1mI60gwFebyYlJY3%2BDtoa7FnIGVSgCH%2BbayNHgweveslzf5ASA5G0BKHWHSKBsT0YGSI&X-Amz-Signature=1874c31ded15b6bd6a45ecc303ceb83c1fa9c7265fafe4f2137c90e078bc0f38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K5Y6XQK%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDB42Mtrr4BN1WZeGMP1Hkgc%2B8bD8th5xbePEVPVYxm1gIhAJlBFlLfn%2BIJaUm1RAbfPm2eyDUsyDk5SgMn5OQHAapEKv8DCE4QABoMNjM3NDIzMTgzODA1IgzO7jsZ7F1Ebomuyq0q3AO8hDIy7JJevwONgrwXJFIhMIFRsZaoFf9Se7skYbLOfGEsVy2WJuYeD6FcRBVfsRiJ1pYcNv7JfTjkgtmEDh6qLHASbWPaOE%2BXfKSHLuXcrHXDtvLI2tqUgo%2BdK80pHDvC2qNcKXlNfK5RzfFvLPZRnEKGSb0UqqNtbmDa0Ihx3Etw443Uv3htrQ44dCXMgEL5GBUMdCkkdW4UEnnOBCi01VK0pYJgsiIg%2FfeCOCHIla82JuxHtahYOOKpmECQreuiW4HVOrgSE%2B%2BhTxflu3VUP4fUDeneXgrfC8th9%2FPzjG%2Fg7pt9DIXBuJZGlirQOHLso2pMcWW1iS1rTj8X4RCnEdLeUE%2FimG9vSZwzhn7SMemPoD9J8%2Bwf7LutPfQtyt%2FtIAhEesIyyaNkYKHJFON4gPiW2HY%2F%2F1pyUMdZWzjdLesN0mzezM6rFFQ651K9hrNGYeTIpSxT4qhUU0TMEtQRNIqkxwY0qSLX9BLvXPdlUkc9T%2FJ4PXSWUp2rLKPljeKQrkBR4K5sWu47s0u8%2B9IvYae0HJWKfxPwLUJ1j1C%2BhzTo2DsAs4jv9R%2BLcrCXksRPm%2FapRIAyf43Eum4mENL%2BDz9bgAfBTz4JlKY4mbsW6HHyfeZn1aHeUMCqJTDZ9trDBjqkAYI%2Fo9nLY%2Bifq%2FNedL6tikgJna2gkpHlf4F3cKBj4VfI1pFKvqOShvAJewTpvvNcamzJmchwm8b1C1qEQee%2BgqySA80NmczMM8jIVHnipe%2FMtNvUxmx0Fw4dFcgWw8QAows3DQsr3zaSMpHEsP5WuFBG1mI60gwFebyYlJY3%2BDtoa7FnIGVSgCH%2BbayNHgweveslzf5ASA5G0BKHWHSKBsT0YGSI&X-Amz-Signature=7c9a8bfa4d79c985c712acef236b114708ff91ccdf4038e7a0afc36689569221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z37YRSLV%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCN66LIz8tkCZYlwgjtyLEWuY31qolGCrg9a2hz%2F6MpeAIhAPAf2nJe6Q4FndLiTvI9dQ7eEQz27zIhgVqmZv5DVeL9Kv8DCE4QABoMNjM3NDIzMTgzODA1IgwFc20LQvCzkKV2mI0q3ANGpnNziSDck0%2FpsfahlG0cinKxLuniZnFjVVf0DrCrJI4jMn5NCEEAjpzrogth4YYiYJNkJv8uYai9SzdzLgYydbIUEpdKm2XasrNLoU6r7j0k64in5GUxqTYV9Ca5akRLOw%2Bm0IlvkMnwn7ZS3RATXui8N9Ye32K0Ixje4Qsm1YAT7%2BarRW2BhAwBhkdnBKlrlttePLHTPgMbqtAXIVKb%2BuUTsUTrwaAllxhMOxEviV%2BXcX8ODbL42lQeQQSt9eJHcPm%2BuBxn9e7hjIiszGp8cJ6mPzXzfNocQaqXJ4h75Cf4BxIyrGwwMvaaatGrreuCd4jur3FGpD9Rl6u9UAAL66WMIYBmZVfMlrR39MVRGLi1Hpx5Az3cVo0w%2FzQOhdiMFkAaK%2F6WW9APrjoE49octZPyncVgxdxyseq4eddHMkyuPr6fK%2FUj0HnaVuC7P0GiWYi%2BHis5Y3x9%2FlZPvyr1WRakGXss%2B4XalAnYW0YOYMDPCSybPWSvBIqdcglHDdF9XEIt%2FM8ECtgMoH150U0lG7eMm2tJutyyciAHs%2FD%2BG6XBzs9YpLJFm%2Bwz8YdO8tKqao%2BuGp2IQfdTpyunX%2FE3HH7yoq%2FUnlkMXg6ZQgKPdtCQRRjVe2G7OFWU9DC49trDBjqkAYJ%2FBrrc8EV%2BM5d4Vj%2Fsfj3rMxIFfOfAUEEHsTEIbF8VqKSZJthMAJkDpGodZwLXHrNh1FAk6OSlOz8qi4uk1QMmKyPetb4nAX2EkSuxshdYcy1qdTCx9gGeVR1sOhht5xZeGNfK3qlYfl3FmKa5zH0%2BWFXF30dW%2BPIbU8M%2BDyN0aOuAeXovlzOVHfp0OAmfWIB9PsWTvxGXEln8mWQqeBeXNtZR&X-Amz-Signature=e19feaeaefc0fc45c5a90d3ad951060c46f621b74b3a140d8efad3548aa28286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653DFHONW%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQC2WZ82gqSMq3bcjAdtjEvdvN3pTpY%2FIrph%2FfEZUBJxXwIgfZlVYCcTmFu0fcbV%2BMNtLanF%2Fs9YwXLj9DgwFkOA344q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHyjb7WusNbhfffS%2BSrcA8TuI%2BaNFzw0t97bZldRMxpGeaUp2WlLtPrnTkFpkpfj2LjlbLSlGDBFPHhr3OQ4nO22RPNWQsRsaiNj5ADdtMb3FAIKWACrMLpyPi%2FcBK%2FaLDfVQsF83TIdJXwJeFcM3PfHecpgf4JYWRAEgLQnmUu3Fpl8kZ%2Fk3ZicXEpAqeJ%2FFkA6yKTSGRcxOlVIkG8i0i%2BIEBB5iLmXxWPb12g38LndCzcc%2FFmzhzXIuKCafuiMPMSdv3AD4KH0VVrLCRjquCtbroJyGcD4bAujo2Wn%2FE06EVTCTC5MfVZJ33o5r0%2Bi1Ov7omGhiStBRd1SeSV4Y%2FtQOPUG8IgqGx5Xm6wrCTqRlrazvX9jwLnFaUPKXx8lZcJHd%2BN7Mi5LQSHWfWhlhFWcvyEqkNiSiKus9ki%2FUQwtwvibOZYchTTStq3a4o5TBU5jNk3DkXnzxbXrr5eQ3xDovDRUX31otePpqRB9cQYq6b4vDV3FWtHLhFooxl5IcZ7KF6BFL16GUnjue8m5RJFBrKjQ19r9fhMSu1DKD6KeGKElCyzcBg9Lm8M%2FUkFt1VCsSIKtZNocqF9rTW0Mc7FHRStz9s9mJdQY6uQUsMk82aV8GKmJbm6of0tIIGKX1Je0uTsaGRCfUN7wMP312sMGOqUBaaXnQnGhTEcU%2B9%2BZwfCzzTNsZ1D9UAu80ks0yPZwAXQWf%2FLAPjOKAedMjNpFpZzRZ77gaU0dnK1Z5kTr74R0FL2qTQGHEyAbYAzrNRl5Ok1%2FabqaNqwgBBKnZ%2FIEkTc27TfOmzPxLU8SUuxPvZzUuBQZr6Ryrmj%2FnZRtEGooeD7yTN3mgTAoPvq8%2BSW%2FAwRBfSZ1Nn41dKVzLlMXpxG41YN1cbHK&X-Amz-Signature=2f1fcb3280067bfc3ad459ca6b0818aaeb9005cce4b9d0a3471ac4b28c944036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K5Y6XQK%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDB42Mtrr4BN1WZeGMP1Hkgc%2B8bD8th5xbePEVPVYxm1gIhAJlBFlLfn%2BIJaUm1RAbfPm2eyDUsyDk5SgMn5OQHAapEKv8DCE4QABoMNjM3NDIzMTgzODA1IgzO7jsZ7F1Ebomuyq0q3AO8hDIy7JJevwONgrwXJFIhMIFRsZaoFf9Se7skYbLOfGEsVy2WJuYeD6FcRBVfsRiJ1pYcNv7JfTjkgtmEDh6qLHASbWPaOE%2BXfKSHLuXcrHXDtvLI2tqUgo%2BdK80pHDvC2qNcKXlNfK5RzfFvLPZRnEKGSb0UqqNtbmDa0Ihx3Etw443Uv3htrQ44dCXMgEL5GBUMdCkkdW4UEnnOBCi01VK0pYJgsiIg%2FfeCOCHIla82JuxHtahYOOKpmECQreuiW4HVOrgSE%2B%2BhTxflu3VUP4fUDeneXgrfC8th9%2FPzjG%2Fg7pt9DIXBuJZGlirQOHLso2pMcWW1iS1rTj8X4RCnEdLeUE%2FimG9vSZwzhn7SMemPoD9J8%2Bwf7LutPfQtyt%2FtIAhEesIyyaNkYKHJFON4gPiW2HY%2F%2F1pyUMdZWzjdLesN0mzezM6rFFQ651K9hrNGYeTIpSxT4qhUU0TMEtQRNIqkxwY0qSLX9BLvXPdlUkc9T%2FJ4PXSWUp2rLKPljeKQrkBR4K5sWu47s0u8%2B9IvYae0HJWKfxPwLUJ1j1C%2BhzTo2DsAs4jv9R%2BLcrCXksRPm%2FapRIAyf43Eum4mENL%2BDz9bgAfBTz4JlKY4mbsW6HHyfeZn1aHeUMCqJTDZ9trDBjqkAYI%2Fo9nLY%2Bifq%2FNedL6tikgJna2gkpHlf4F3cKBj4VfI1pFKvqOShvAJewTpvvNcamzJmchwm8b1C1qEQee%2BgqySA80NmczMM8jIVHnipe%2FMtNvUxmx0Fw4dFcgWw8QAows3DQsr3zaSMpHEsP5WuFBG1mI60gwFebyYlJY3%2BDtoa7FnIGVSgCH%2BbayNHgweveslzf5ASA5G0BKHWHSKBsT0YGSI&X-Amz-Signature=7360f2641f2c0fc05bf282e362b8fa9719889d1b52bfd7939028c28b09074666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

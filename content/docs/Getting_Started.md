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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXH6WDRI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T131930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm6cSXWk3dWgd3GjSitaJJESkQX9l87cqZRKgFGoKz3AIgN2wEO%2Bc4IsmOXTN5Wt%2BJAJd60kUEMTDhPrmdkxrYm5Yq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDMMNOX2ACNcCVAZ%2FGircA3zURJVnFyFeNlOGW%2FhPzAME4ugFZr0l44CE%2BHwDcVeupawMzoriNLwmZIhV1rcx6qsPMIY9HAONUiTcHRTEqM5GRM8%2F20QvBGwxJtYDFN87r69Flk4VVFXJWzFvJ3zdFc6yUA%2F0RGf4LPG9%2BP5Fh4Gz0uB7yvSWy04ME2CEnhRxvwgiCuiku7YHzTX3tu6sGXMJbNPwtUrJNKtKa8NWKkHwRw%2B%2BFNQ4giR4ZQXjrNlquOipJ%2FZUBO1XZXm2jCEMXRf8G4JYVFzDiAJvFFK1dF7xRoH%2F3di6LmGMtRJE0eTGyE1ugkiG93MYFMvK2xIBD4Qo2PbaRSSJ4YwfGq1w0lYtiATGXLOuoGpqn898GdnSPjqVErE7G%2F33H7M2TlTxm4tSH1YLVwlAelfnrk2NuQYCT1YH9hfi1VZNmvqgqY6zRnoVReX74TIGm4YqYcR31itslFTIS0gu%2BMUa8WMXbCM897P0kDSPPNh8NKKm0dGMDWkVIvMPiuoJWSvFKu7RhsPPcT31Wb79%2BUUkCls%2F1Ko4XJlhy8yJf9uOuf8i2P4uh1f3vJNByyiMfsN5WV5qclzc3p3h6zDNVK8yeBjisHQHHMi%2B8VUtrx29Hp4srmdLLYmdqeDr7OtwOMVRMMP7g8AGOqUB3Jeup15P2TuoTh2DA%2FZHwtwLoQZfd83GXMo%2B9NYJBj6vvfM9KUomJ%2BFSHaKrQh4SaU71N3PglZhacldqIa4c%2FL7iUkvLu59nSipkpp3flbtvVQbh1yPMTDQyYaYjHrmu%2B8V3NhdQHhxD8Hr85f2gUFSgLfSSN8qBSFP2pYlVyFsPGJjG66nIs%2ByS8fUnrGKnh5h%2BYemLPLFvkb2jcVQebgpVcBMD&X-Amz-Signature=3577d98f8c930ab419f318c78006d60b7b3f0a7fcb180b11301a3339d8c2d25f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXH6WDRI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T131930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm6cSXWk3dWgd3GjSitaJJESkQX9l87cqZRKgFGoKz3AIgN2wEO%2Bc4IsmOXTN5Wt%2BJAJd60kUEMTDhPrmdkxrYm5Yq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDMMNOX2ACNcCVAZ%2FGircA3zURJVnFyFeNlOGW%2FhPzAME4ugFZr0l44CE%2BHwDcVeupawMzoriNLwmZIhV1rcx6qsPMIY9HAONUiTcHRTEqM5GRM8%2F20QvBGwxJtYDFN87r69Flk4VVFXJWzFvJ3zdFc6yUA%2F0RGf4LPG9%2BP5Fh4Gz0uB7yvSWy04ME2CEnhRxvwgiCuiku7YHzTX3tu6sGXMJbNPwtUrJNKtKa8NWKkHwRw%2B%2BFNQ4giR4ZQXjrNlquOipJ%2FZUBO1XZXm2jCEMXRf8G4JYVFzDiAJvFFK1dF7xRoH%2F3di6LmGMtRJE0eTGyE1ugkiG93MYFMvK2xIBD4Qo2PbaRSSJ4YwfGq1w0lYtiATGXLOuoGpqn898GdnSPjqVErE7G%2F33H7M2TlTxm4tSH1YLVwlAelfnrk2NuQYCT1YH9hfi1VZNmvqgqY6zRnoVReX74TIGm4YqYcR31itslFTIS0gu%2BMUa8WMXbCM897P0kDSPPNh8NKKm0dGMDWkVIvMPiuoJWSvFKu7RhsPPcT31Wb79%2BUUkCls%2F1Ko4XJlhy8yJf9uOuf8i2P4uh1f3vJNByyiMfsN5WV5qclzc3p3h6zDNVK8yeBjisHQHHMi%2B8VUtrx29Hp4srmdLLYmdqeDr7OtwOMVRMMP7g8AGOqUB3Jeup15P2TuoTh2DA%2FZHwtwLoQZfd83GXMo%2B9NYJBj6vvfM9KUomJ%2BFSHaKrQh4SaU71N3PglZhacldqIa4c%2FL7iUkvLu59nSipkpp3flbtvVQbh1yPMTDQyYaYjHrmu%2B8V3NhdQHhxD8Hr85f2gUFSgLfSSN8qBSFP2pYlVyFsPGJjG66nIs%2ByS8fUnrGKnh5h%2BYemLPLFvkb2jcVQebgpVcBMD&X-Amz-Signature=ce54d3f6e630f9bbe01a044b752ebb54895636d0722da02ebab631d1f24d3003&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ5YWDR7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T131937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvuoynCVW%2Fy6QN17Ks9BuVk%2FhqckvFNarxdySonhPbZAiEA%2F9ceS2zHk7ZLM6tvHnxdSWWhvf1y3Qbmb031I2bBIvcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDL1Dy%2Fp23GzETo0CHircA9hQIsQ2zVEeaKnbweLAkDKoNBdxZ1dmPYvGqfGBalsh3oaDA%2BEZbdSv3ayAULHPj%2FuWgyqMSCACWA3xRVu0D2fS3p1KmQ923mhyHJmcwMZPiXWefHzdMWk4IDQ6Fg8b0TRVpZoKCW7kP1EhT1DYdtU5D3MqpJqYuE2b1n6uwrLzzNG24IuZ98Bq6D17oklttFuv8FCoX5s9Ei3v9NpFbC4SylqCHNg8su5Z0%2FhbjgdKWEGCyGzOQhXxZRhtw9eCaN%2BGQIN6xDM9DFnPZ1zAf%2BQIdkMbMc5ZpTAdrTXQks%2BXaxNTOPcrrzGXdI0F4VMvsDU8u61E6BIZRXCSNRlQRjYCi2xFl71DrIzi23gn5epGnYhwLu4DAFqoJoww6hyaFkJggTMAAZS%2BePSQl9RvkvAwTP%2BjdgrE0aBSEYoqzTXV6AdZbmU1JvSFf9IiXRzJIZRU1XxRBQniS0gEhhnMczL%2BaF12jQQLiWkOXlWoodEoGe2eizeMCSaKMBy%2FlN85eA2Il2BfFTLuDQKu2bfCa2LWXnYuwEACHJjkjg8d5y7oyY%2Br14d7fn%2BUSFb4syWiEE8XgHjSdq5rraCFvcUSlrsdOr%2BoTute8HT2X87muUkNRpa26TCzoZiZWgD8MNP7g8AGOqUByqTP8dxAVNbSs3DbVB8t5n5fzp8Dxqtz3HX%2FWH7Fb9TJrRj8FbM1LuMMJDAb5S9sS1GXlaYrtOKRMWx%2FsUAVL25YQwkD9VA64gSBnCI%2BvnP9SnDK9DKyKizgII4InwsGGKkx418Pp9rhwXfu7bsX7IvwpfWZKZvfNJvcWSsK92ayfcA%2F8M2iDjIDupoMcVGu%2FJ7McId%2B7un1z8dQO857KGCQcqRz&X-Amz-Signature=35bb4e44c0d07de22bce5fbfbeeeb3e189adce9414ff381754b5339e0270a5c8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MZS7VZC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T131937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2oobISy7RC%2B72cmrBv1hK5TIRdlcUH86KpYwtH%2FM4TgIgS2TsBwbLIGkMKtaUG1aO%2BCmQZx153XyXn5YlbL7VcSYq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDD1fZLjIkJHuka3gYyrcA2cUQS2jsinviCVNRgW6YpXMX70QRuuWQfXsaVOUhTCwVewZNwLkY3ODSzCTjlaEOTAAcV0hWpFpXUSRHcdXULsambK4eENnrWkakb6tL%2FkxThX7t1wJQsZfi4bLCpVAnaLV8qUHx6LmVYDoGuc0DJP9WRla%2FpdrfcRXxoMA5XfhywUm6KgSBvjGvg4xZmxz3UsuQej9S4Dv4za0dlZeobjEob4OMltzD1uDciQ3%2FKuzFHXofCDaK6eBcai8cTpodzvtlAcbepr2HM34C2fRY%2FcBlM5YAJJpYA1a2wOdOfqYY5jxzC5mTnN6wKtE2%2FDEIXYICWLLH8APlWBOS2NNvjInF9mOJLmevPryNRvzXRW1M%2BJ5Ng%2B%2Bj4WWKJblNSjufF6AC39z7C8K%2Fhljhiti6XLUHXEpxPAN5YMLQd8izhCxoSkGwuL%2BDRKaJpXOne2eGjXRPEAzQ%2BKsbru00EOZANn3SjqdzbetPHsgNEwdgy%2FPnfw8eEPqRh%2FUF8n0CGkZk4gfhiVv9g7qltFgy13ODmTZ73Cv9jPD9QaBunvoVvKEN2wtjw6UJMJ434cOVA3axlxueTdI3iOyEEf%2BLpGP4zr4ZDAney2CclvmEKESEAi1sw5WiX%2BtGXQR1R4LMMr7g8AGOqUBPvhRWSer70hFUob6MtcMM4eM7t5o1xMmeKcT58o93FvfAMxV0pA60ckN5DFBPudlQNvg7NUeSMvOG2%2Bo6teiGz8WDWV0YZ8w8v6iQwnkmvDNP%2BYOdj68%2B0ICvM4yY61IVT6v1QJC9dOBHlg42J0X6iij5QByGW1kMEjzUDdt4cf3GA2JiZx22YvGneqvULJd6vYKbXG8J0yP0DzrmdcBP6pL9bN1&X-Amz-Signature=27187a186a4fd117afa83adfb5b42990064b4b237c9ed2cb851ba3b05f5fa85e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXH6WDRI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T131930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm6cSXWk3dWgd3GjSitaJJESkQX9l87cqZRKgFGoKz3AIgN2wEO%2Bc4IsmOXTN5Wt%2BJAJd60kUEMTDhPrmdkxrYm5Yq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDMMNOX2ACNcCVAZ%2FGircA3zURJVnFyFeNlOGW%2FhPzAME4ugFZr0l44CE%2BHwDcVeupawMzoriNLwmZIhV1rcx6qsPMIY9HAONUiTcHRTEqM5GRM8%2F20QvBGwxJtYDFN87r69Flk4VVFXJWzFvJ3zdFc6yUA%2F0RGf4LPG9%2BP5Fh4Gz0uB7yvSWy04ME2CEnhRxvwgiCuiku7YHzTX3tu6sGXMJbNPwtUrJNKtKa8NWKkHwRw%2B%2BFNQ4giR4ZQXjrNlquOipJ%2FZUBO1XZXm2jCEMXRf8G4JYVFzDiAJvFFK1dF7xRoH%2F3di6LmGMtRJE0eTGyE1ugkiG93MYFMvK2xIBD4Qo2PbaRSSJ4YwfGq1w0lYtiATGXLOuoGpqn898GdnSPjqVErE7G%2F33H7M2TlTxm4tSH1YLVwlAelfnrk2NuQYCT1YH9hfi1VZNmvqgqY6zRnoVReX74TIGm4YqYcR31itslFTIS0gu%2BMUa8WMXbCM897P0kDSPPNh8NKKm0dGMDWkVIvMPiuoJWSvFKu7RhsPPcT31Wb79%2BUUkCls%2F1Ko4XJlhy8yJf9uOuf8i2P4uh1f3vJNByyiMfsN5WV5qclzc3p3h6zDNVK8yeBjisHQHHMi%2B8VUtrx29Hp4srmdLLYmdqeDr7OtwOMVRMMP7g8AGOqUB3Jeup15P2TuoTh2DA%2FZHwtwLoQZfd83GXMo%2B9NYJBj6vvfM9KUomJ%2BFSHaKrQh4SaU71N3PglZhacldqIa4c%2FL7iUkvLu59nSipkpp3flbtvVQbh1yPMTDQyYaYjHrmu%2B8V3NhdQHhxD8Hr85f2gUFSgLfSSN8qBSFP2pYlVyFsPGJjG66nIs%2ByS8fUnrGKnh5h%2BYemLPLFvkb2jcVQebgpVcBMD&X-Amz-Signature=1dda44691166ab5deecfe10b70b2807c3feafa308945bbb9b31342daa02601ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4ZML7ZM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACB8xqEsbHnDE%2F09wfdgSvPxPGbWvV%2BKoe5pXnd6ZzwAiBjtiXsnablSEedVa8QBssBOpWartTwBfFtvlHv92XDUyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo2HEyhkP0HhhfjtUKtwDi8ER%2FD2EKTicEAC%2F8W%2Bv4nJHh6cpWy%2B6dQuaBvKnThBddZG51TR3l4E9eAICX99DcxUEhmkKVgOhTT%2F5g0Y0qDxx4%2BP3qRCGLi2wFVrGl3nwl3Qf7ncFOubSMcrB%2BrT7l4WP2gjbeJi1TClwi%2BAeGOIG9GZsjucazSeJr6IWZsuhlb5%2B7%2FumyefSu27e%2Bj6%2B5xsLnxdoKCWGVs%2BB%2FPa0Y1oFa9bTt04SWyyEUKj9qsQqRGGXIMdT2ENNcKsLlLMjZU5p8CoeBaQVNq5djLCYlzZIbZYpBfTZ%2FQA3v9GT4Bi48chfwTx5vSg47bmsCHL2ODNybloJquzWpVvxZTfNsCjBX1Z20ZrFATxcb0PwJwTFJd8JNBdOEJA2VftICe6OdriTlihF93GYUviBPY6thEMvdxoDSqcniUK01AoRpfReJxyph%2FCnLzc0YV%2FRT9HPfbUbpoEa5pGg5FqaBSvjsBZBmBXJRVfzvOU%2Fo%2BwHzpVnJfzbCgzr8JQdNqLD7M13vkyVpSPwQwktKOKhjDRp3%2B6W8qAButiLxLVdCnfXs%2BEPIQ4Phg4X3rHJ1gWbOyZKQygNTTcURbPavD1quq3nCupu%2BFxT5xNrFE0lozoe2wFnRGtL2gWTEBWKOZIw4NrDwAY6pgGDFUv7UpI1XTGNhBo7%2BwKVemKfQDXh6znEDNR43YK0MBa0A4bdq0%2BuCUIO%2Fdm8skFBrsczfTI5aepnUlBjn3BUtRm7PaSi4agA%2FZjQrrsJtAuTpLccCjXhzMZmfBk5kazqsINEjyWwYd7DQbw4rQpeIfxTPMde66s8O%2BEdt2SzTZRqdoCRiMOtbq%2FlwEGtYH4GcwbGtTIOErRyPjyTdQGKo3s8P6HA&X-Amz-Signature=e49c837aee515da4948fd855364c9e6438574c2d2388ab7c4233e9d2c5ea2f58&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4ZML7ZM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACB8xqEsbHnDE%2F09wfdgSvPxPGbWvV%2BKoe5pXnd6ZzwAiBjtiXsnablSEedVa8QBssBOpWartTwBfFtvlHv92XDUyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo2HEyhkP0HhhfjtUKtwDi8ER%2FD2EKTicEAC%2F8W%2Bv4nJHh6cpWy%2B6dQuaBvKnThBddZG51TR3l4E9eAICX99DcxUEhmkKVgOhTT%2F5g0Y0qDxx4%2BP3qRCGLi2wFVrGl3nwl3Qf7ncFOubSMcrB%2BrT7l4WP2gjbeJi1TClwi%2BAeGOIG9GZsjucazSeJr6IWZsuhlb5%2B7%2FumyefSu27e%2Bj6%2B5xsLnxdoKCWGVs%2BB%2FPa0Y1oFa9bTt04SWyyEUKj9qsQqRGGXIMdT2ENNcKsLlLMjZU5p8CoeBaQVNq5djLCYlzZIbZYpBfTZ%2FQA3v9GT4Bi48chfwTx5vSg47bmsCHL2ODNybloJquzWpVvxZTfNsCjBX1Z20ZrFATxcb0PwJwTFJd8JNBdOEJA2VftICe6OdriTlihF93GYUviBPY6thEMvdxoDSqcniUK01AoRpfReJxyph%2FCnLzc0YV%2FRT9HPfbUbpoEa5pGg5FqaBSvjsBZBmBXJRVfzvOU%2Fo%2BwHzpVnJfzbCgzr8JQdNqLD7M13vkyVpSPwQwktKOKhjDRp3%2B6W8qAButiLxLVdCnfXs%2BEPIQ4Phg4X3rHJ1gWbOyZKQygNTTcURbPavD1quq3nCupu%2BFxT5xNrFE0lozoe2wFnRGtL2gWTEBWKOZIw4NrDwAY6pgGDFUv7UpI1XTGNhBo7%2BwKVemKfQDXh6znEDNR43YK0MBa0A4bdq0%2BuCUIO%2Fdm8skFBrsczfTI5aepnUlBjn3BUtRm7PaSi4agA%2FZjQrrsJtAuTpLccCjXhzMZmfBk5kazqsINEjyWwYd7DQbw4rQpeIfxTPMde66s8O%2BEdt2SzTZRqdoCRiMOtbq%2FlwEGtYH4GcwbGtTIOErRyPjyTdQGKo3s8P6HA&X-Amz-Signature=e1019e20c4f2ab62329410cc50b1cae17260fe217a266fe6a68309a48bdc3d8d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUXUKTKU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOwMNWq0mxBQRnwusWKbaOVpQxrUM7TCEpIifhH0cgSAiEArRQdCWoeUhhoLeKv7fxrePFYLovUf4Zuk6UQokatgZgqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLn418PvKcdwPpqHyrcA%2BX%2BGOSVeNt886X95PBIa%2BIzQMS4Vqv24jrQCL5evFAdS7Wexmo8c1dK6oS8foqaYj8p8a6xOMcAxNSqSE6jGs5a0k4HfdTaQHKucAKf58VguElZfJraThq6AYu3mycPP%2F4EMGhnmbWAlAWhZLIdGchUoXJaSRw7eXRdD711QQa5TCtShsDBLfb813%2FHMfpZJ2%2BQIa1dCFc%2Fy1sLNTfI5CsdfZuE3d2RZ69tTESsYMDRvQlWb%2Fg%2BkBQUG5FrLyxZyHfMniOBqC7C3cIrS5rodyQSLL26ScsBTdDTHPFsC08koaXWshDCWw2CrKhBIPaDfEj4146QJubYfHa2zabiBijkZ8iZgTNiB1yyI7WXiC%2BDnxjfqjTUVVKqa7ZIlaRI1YGslsNSPwQ760Fk8RqdQEyE2tDW6N7iZV46NLYHtKDINy3VS%2FXmkliT7xriodxWGXooF8j5zY3V%2BPbv%2BaTdpOgqGvi4XExSvfhKwEsMWUu1RfekmyECbCIBv4CIFDzUT0RnO0lMKk5%2BBS7uI2XjQN1m7GkM0V6tijHnA6is7qLaFwV9qfARkNGr1S3i6q%2FPqs2ugV3B5Kc8fu4iOs0rZOZe5RSnOeupL%2BZ3BU%2F1HjGX0Gk0jlGMkWReVYegMOzbw8AGOqUBKnAC092IWjcqe8Oh46bHi6j%2FsmKIO1EP4OAQUU7qiWylR0IoTn7v3iTCQLBELOUETtTTBU1uCUqg4emw46Q0vqSPQzbl0E0r7BfqKSip%2Fegg0OyEosFamKjH3U0ZlLKk91p5HP13I1eM44Rw5R1ZJbjIn3MBWQjV9jNwXhJFiIbyCPRMLGt6FGIxA0BqyrJTTmJXkdDMQxJtz%2FrvXnj9LF890KHa&X-Amz-Signature=b06506edc8ec115931ee08bff8804c5437611ae68e02b3fea921475a9c77916e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A4XPP46%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTKZvI%2FW5gaOfHC20WrJEiS2etGq4bgU6YcqFOjunPFAIhAKA8oCqGvjMZ%2B1r%2BSFasx8lTMDwlPpc%2Bl6V9iaYSVLOFKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5Kd4KhWs0ncHKVqoq3AMr8Y4t9UmPdPoyYUC567Beg0fHn6CT%2BjqOTnvNzbt5UvO1DA1lQonPMG%2FQroJGbv7RHK5pcWCoNRyqkAca5qMZXn4HC83c45uZ%2FnFmWiXd3L6hRXmQR%2FwgbAVGJ4BcvLX6%2FgUiZpd8kIjkuBmXp8DKAhtSDrOm%2FUFUHKO8ME9AC19QroxAQ4VXHyLoHxnwgQdDBH4EZe1QMniJ4UV0mHJf92w9LgTcsOlVk76a%2FiC%2Bru3H3q0B9pwhLELDx4AQ%2F6H49wzKNnKp9BxUPFTtfxpIRDf2qNkNHSPZAxW03oC0M3N1YwfJeeBxPb3rIoEaUGbXuc8N9kA9aDG0IYb7MqETzgEXzeHAjI5P8vJGq%2FvdONhogQ6IFrjTxounznFKEabtNIJjOaJuBv0N2R7YYsj5qjWnMVCbg%2FOGag1eO0NgBep%2BpgMSqCiZUa%2FW3WleXPTTkSWTnKto7DSRDlLy%2BKIEiCcO97ohVuqZ0U5ZQotCvip%2FuzXrrylhSu4jc2dPYv2v14z4n6Asx17X9KyrOMyTXzqQuAnPSI4bsCF5djTd1DCiG8eCLIXyLCbmhuB2JmFjA7wRozRpG3Q%2FTiJKQ7Tv%2FamAWF7nKNMgxRNYZF3glG%2BLzC31a19Mmq7A0DDo28PABjqkAdJjGEw2hxhJWdGyYmJ%2F1ozZag0luYPqy%2FC%2BfAeBY%2FCL4bFWdroersryC%2B6EYxJPypefSjdKK4q2muargTNLoDK%2BceYlnnvlyOjQpW2tQiObfS9S3rBNf7Xt8UwqCMSlnso0151JGD2P2T7cZUfpcPolUuTJX5G2B5rZSdKvLW2H5L6%2B4t7kUbI%2BrYXm3nATKSakXqDpzLk2sWaF0mg8ByFujjtm&X-Amz-Signature=289d210481c7f33bb614ffd1e3e525132210b362169a243386e6a5e33e8f0fde&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4ZML7ZM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACB8xqEsbHnDE%2F09wfdgSvPxPGbWvV%2BKoe5pXnd6ZzwAiBjtiXsnablSEedVa8QBssBOpWartTwBfFtvlHv92XDUyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo2HEyhkP0HhhfjtUKtwDi8ER%2FD2EKTicEAC%2F8W%2Bv4nJHh6cpWy%2B6dQuaBvKnThBddZG51TR3l4E9eAICX99DcxUEhmkKVgOhTT%2F5g0Y0qDxx4%2BP3qRCGLi2wFVrGl3nwl3Qf7ncFOubSMcrB%2BrT7l4WP2gjbeJi1TClwi%2BAeGOIG9GZsjucazSeJr6IWZsuhlb5%2B7%2FumyefSu27e%2Bj6%2B5xsLnxdoKCWGVs%2BB%2FPa0Y1oFa9bTt04SWyyEUKj9qsQqRGGXIMdT2ENNcKsLlLMjZU5p8CoeBaQVNq5djLCYlzZIbZYpBfTZ%2FQA3v9GT4Bi48chfwTx5vSg47bmsCHL2ODNybloJquzWpVvxZTfNsCjBX1Z20ZrFATxcb0PwJwTFJd8JNBdOEJA2VftICe6OdriTlihF93GYUviBPY6thEMvdxoDSqcniUK01AoRpfReJxyph%2FCnLzc0YV%2FRT9HPfbUbpoEa5pGg5FqaBSvjsBZBmBXJRVfzvOU%2Fo%2BwHzpVnJfzbCgzr8JQdNqLD7M13vkyVpSPwQwktKOKhjDRp3%2B6W8qAButiLxLVdCnfXs%2BEPIQ4Phg4X3rHJ1gWbOyZKQygNTTcURbPavD1quq3nCupu%2BFxT5xNrFE0lozoe2wFnRGtL2gWTEBWKOZIw4NrDwAY6pgGDFUv7UpI1XTGNhBo7%2BwKVemKfQDXh6znEDNR43YK0MBa0A4bdq0%2BuCUIO%2Fdm8skFBrsczfTI5aepnUlBjn3BUtRm7PaSi4agA%2FZjQrrsJtAuTpLccCjXhzMZmfBk5kazqsINEjyWwYd7DQbw4rQpeIfxTPMde66s8O%2BEdt2SzTZRqdoCRiMOtbq%2FlwEGtYH4GcwbGtTIOErRyPjyTdQGKo3s8P6HA&X-Amz-Signature=5852b2215e27fbf91dd6461a87ab042c3217fc28f1b2511129438d7a7ba92e12&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

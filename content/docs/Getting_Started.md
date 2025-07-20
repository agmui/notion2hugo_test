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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGMCH7KL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtnhHduVHH9qHx6tw3B015yZWrkaGzOR6jCLPQgUOhqAiEAqmkCIn4ebKdlfVurIg2jn1qZXVjjTjOSjON85YZ55JEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLt%2BcFqJ685aXkiaESrcA4NeGoQixeWrboS1P7CzfcXHTm5tvbkwxAmzo0vXHXvQDr5w9wruzgln41MNheTqePpS9%2FCF4JxCwc4lwrB0qEERU6V20GLdDITWBSGy97yTj51NHKWdTkp7qaKojxNpx5JU9Zv35ZFFamqPFh87LQR1DKADMtUCY%2FpaYaUqPT1oWgjY9UnYowlRHm3JQ40wI2OukD%2FMd32p2JzFFoFDLIMNm8FhV7A1rIEnKqHej7QnmnqPDsqG4ac%2B%2Fv%2F0bnfDk72xolShEfmwu7QKhDQ6iH4QsMO70osfNLMJX1QN4PDD8c6U2X6B2JTZAqaNHsdLFCcvPRCwrMijrYIt6w7zw7pgsNpT230t0Ljpk%2BvliQ%2Bx5oa3PKM6EIzXveOazCkvUDRj%2Fl%2BNu6NefAm3v5lHd5siOn2wXX7TN%2FL5ec5nzZSaa64xNKEvIpEqIAXHBq%2FDMZ9igIjuS8IrAY1owAydXy5EGebBctwhgOqOpgRHbgR7D4ADmA0eH1xGNO1BHw1biKHu5J5cS4TqV29RRRR4WmiWaTE5g3k%2BMHdgOlYcATPtQzq4P7wnsZTbJpOS8au4xFkm3w5hodMx6ZjkS1Q7mCu2lMv3RNX5wTyN8OlFVMu8CibO771fMryHGnnHMOaY8cMGOqUBDo8xgOnmdarc30eNCMJxaBEhNoQvwGDzBA6XCwed5cYREc42cadwrfpcvR45Cj3JwFRwwEJH9rZT17DB8yyMrskFyrZ5e62fyuPCnSRc60f1GuCaW%2BsZ7EScajGWmokJrhO7Dz9c1qfeUYeSonu4560JxgavKkv54RyrkzgSMjIbHF%2BgW4UdRXZt9TUvA7Iv3Vimv3gGrm6F9qxDFi18a5299nZ8&X-Amz-Signature=5ed57976270492ed30a3ff4e7b9653e84dbe2198f0e56f1ecf050c1965a79f7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGMCH7KL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtnhHduVHH9qHx6tw3B015yZWrkaGzOR6jCLPQgUOhqAiEAqmkCIn4ebKdlfVurIg2jn1qZXVjjTjOSjON85YZ55JEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLt%2BcFqJ685aXkiaESrcA4NeGoQixeWrboS1P7CzfcXHTm5tvbkwxAmzo0vXHXvQDr5w9wruzgln41MNheTqePpS9%2FCF4JxCwc4lwrB0qEERU6V20GLdDITWBSGy97yTj51NHKWdTkp7qaKojxNpx5JU9Zv35ZFFamqPFh87LQR1DKADMtUCY%2FpaYaUqPT1oWgjY9UnYowlRHm3JQ40wI2OukD%2FMd32p2JzFFoFDLIMNm8FhV7A1rIEnKqHej7QnmnqPDsqG4ac%2B%2Fv%2F0bnfDk72xolShEfmwu7QKhDQ6iH4QsMO70osfNLMJX1QN4PDD8c6U2X6B2JTZAqaNHsdLFCcvPRCwrMijrYIt6w7zw7pgsNpT230t0Ljpk%2BvliQ%2Bx5oa3PKM6EIzXveOazCkvUDRj%2Fl%2BNu6NefAm3v5lHd5siOn2wXX7TN%2FL5ec5nzZSaa64xNKEvIpEqIAXHBq%2FDMZ9igIjuS8IrAY1owAydXy5EGebBctwhgOqOpgRHbgR7D4ADmA0eH1xGNO1BHw1biKHu5J5cS4TqV29RRRR4WmiWaTE5g3k%2BMHdgOlYcATPtQzq4P7wnsZTbJpOS8au4xFkm3w5hodMx6ZjkS1Q7mCu2lMv3RNX5wTyN8OlFVMu8CibO771fMryHGnnHMOaY8cMGOqUBDo8xgOnmdarc30eNCMJxaBEhNoQvwGDzBA6XCwed5cYREc42cadwrfpcvR45Cj3JwFRwwEJH9rZT17DB8yyMrskFyrZ5e62fyuPCnSRc60f1GuCaW%2BsZ7EScajGWmokJrhO7Dz9c1qfeUYeSonu4560JxgavKkv54RyrkzgSMjIbHF%2BgW4UdRXZt9TUvA7Iv3Vimv3gGrm6F9qxDFi18a5299nZ8&X-Amz-Signature=b2f0a24c7c33521c01562a77ef332400a5ac9ae45d3cacdac19e44efaa5f3ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGMCH7KL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtnhHduVHH9qHx6tw3B015yZWrkaGzOR6jCLPQgUOhqAiEAqmkCIn4ebKdlfVurIg2jn1qZXVjjTjOSjON85YZ55JEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLt%2BcFqJ685aXkiaESrcA4NeGoQixeWrboS1P7CzfcXHTm5tvbkwxAmzo0vXHXvQDr5w9wruzgln41MNheTqePpS9%2FCF4JxCwc4lwrB0qEERU6V20GLdDITWBSGy97yTj51NHKWdTkp7qaKojxNpx5JU9Zv35ZFFamqPFh87LQR1DKADMtUCY%2FpaYaUqPT1oWgjY9UnYowlRHm3JQ40wI2OukD%2FMd32p2JzFFoFDLIMNm8FhV7A1rIEnKqHej7QnmnqPDsqG4ac%2B%2Fv%2F0bnfDk72xolShEfmwu7QKhDQ6iH4QsMO70osfNLMJX1QN4PDD8c6U2X6B2JTZAqaNHsdLFCcvPRCwrMijrYIt6w7zw7pgsNpT230t0Ljpk%2BvliQ%2Bx5oa3PKM6EIzXveOazCkvUDRj%2Fl%2BNu6NefAm3v5lHd5siOn2wXX7TN%2FL5ec5nzZSaa64xNKEvIpEqIAXHBq%2FDMZ9igIjuS8IrAY1owAydXy5EGebBctwhgOqOpgRHbgR7D4ADmA0eH1xGNO1BHw1biKHu5J5cS4TqV29RRRR4WmiWaTE5g3k%2BMHdgOlYcATPtQzq4P7wnsZTbJpOS8au4xFkm3w5hodMx6ZjkS1Q7mCu2lMv3RNX5wTyN8OlFVMu8CibO771fMryHGnnHMOaY8cMGOqUBDo8xgOnmdarc30eNCMJxaBEhNoQvwGDzBA6XCwed5cYREc42cadwrfpcvR45Cj3JwFRwwEJH9rZT17DB8yyMrskFyrZ5e62fyuPCnSRc60f1GuCaW%2BsZ7EScajGWmokJrhO7Dz9c1qfeUYeSonu4560JxgavKkv54RyrkzgSMjIbHF%2BgW4UdRXZt9TUvA7Iv3Vimv3gGrm6F9qxDFi18a5299nZ8&X-Amz-Signature=3d45950662266575f2156f8f02a314bb1de9ff98c1cc0a57b630792ac3cf382b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YTOU2B4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEx%2BL3ZWslu9RinrbOmvbuV4ZpBWSOEgVTx3%2BqgpmcrxAiAcTWM%2BjXfYDGtTU7KuZCHu9J%2BvDhnDeY5o9j%2BkIOWlwSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCEW8p5gkK3cYo57bKtwDyddLzXLvdV7vcBWI5qefWBZf8tQsUi07lbxk3%2B77WEZ2rBta4QwHkFiGkO2Z4kjCvbtLpAdguriLLMoLRLiV1VrTvfeVuHL9uuHZVZBQi86mmJbUqp8aGsaEv3BqXj9adbL6qic9kyGFDWpCdaTOtd3bN%2FbIZXg4SNWKDHhpd7uxTonCC2FmB195rOkbrzvtHcCYZYu7ujoq5wENz2fWTny%2BoxGGjTMj3IenjZJjTXtS7%2Fgkx3S%2FE1py5sdmym0TZTljf5jDnoHzcnKTMqIT7DLZW0U6fiK310%2BGtFmIJCfGglBKRNrg2qdRfztdLahcPtanSmohzSKf%2FsZEazdJ9THMPW9qATh1%2FGE0cHKyUV8wS%2Fl1XaJCBeUGYlzXY4kMUwQHdXO%2FQczh2UizPN5mzOETYyWAwLc0uXuMJ%2FiQwXhwR50gJC65HZaddt%2FYWbKqgJIxLw1miu0NB15OCs9iuChCHYJ4EFZx3KszUY9gTdhjouHL%2BMv2I4yR0J2ehibAGB8tnJZTGZgJ7yOfTbb6HXd8%2BdsthyUDhwhxktQtajXYCkhSbk%2FJ5jFBcMDkR8WIRl2ByzAjkLeLSuHBUP9CDE4dDoasVqeQW76gWpmKGMgkOvZAqxMjiJD0gY0w%2Bo%2FxwwY6pgEZlr00lKuyZOaPStzEqN2lSI1Aj6wDC7ontIULmxebiheDK3bjVmaYFA4Kt22%2F5Ese90JUncUP83fCzGFzhAU2Gcpn8xCiKvP80BJFwoHnrLGBo0OxaIjRoynkdhwnEYMiwqw4X4PL1j9acE9Es9P2dFbqsJDzLUUylCpsbIspLgXN1VZXLEvca8Uj2WZfyV%2BjswqRdtQCSYxuA03Q2UtOeNGXOOEC&X-Amz-Signature=1a47c0b3a8a788bc4de28fb69420c1e74b591128904abb836ae9154f96463b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IDHTOIM%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPiEvCXx8xA%2BfhX8yXE5VheSpvy51wBvSwHNnSuxnWhAiB54jN%2FV9cXJZVGuRsqn5I60jh0GSEzBccmJ6%2Fvjo3r1yqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3ST59EnOCdDBTtKVKtwDSSmmeb14e2IgEaGQ7HPqmDZ8c%2FSLrgKUf75bearyQyurFpYwkBMUhcTRHBpK3VZ7%2BeZDZLg%2BdLEu3T0eSW6SuEN7LYpPlAKAaB7MFisfA4%2FJRAYE3CFT4VvJZY77JN4Xibj8bLo3uwJ7iKnoRe53fpUfcru2xVyxXZ0aF0CqyfsBoQ1YU5gDfYLhzyBWXNXb5PQ%2Bx6N99pDVznm8lfqsxKzW66P%2BpKawFAbq3gjTT2FCTJjxbmhzQW936PYaXHiN5N97DBuRxtb%2BMNIdWkkGyH6FlYHe4zO40S3%2Bdd5glUqzfW2I%2FWDIHfApboIJKfOHe5YO1WyfaFmPP5%2FJpdZq3P5KG%2BXFQVoBb7kB7vraB6jiypnzMS8oHxqlR0DUhn%2FZIaJiO2QwBcWEszHxDmgeoD9sfN6TjNVQIU%2Bc6r9QurP4qr0HZD90EXBlGjzAsFEaW8V0T0ml6HcTJ49ZnI25bLuBHzrSUBgoLTRcOe4nXoyfftXcEtj%2F6%2Fe51r51DEjnX%2FBakCz0f7dlt1EGyGcfpHb9qtCW8Kcl%2FtOoahRSynDttN%2B4xfxwX1ZCxn1GX0DqS5Im6dH71gCJTUu9sgOdoVgyFzxnOlMJQLfXr2vDmK4KH01P%2FGSAoVc%2F8DIwx5fxwwY6pgFbWOOOhwUAMuWl1%2BN8%2B3ILLyhLvevv5Es9vOvYOQMlaYQ%2FzBwIRm16H5QROnw5JhOnkAbaeXn4u04GBjevl9ogIppHM8wTguYySrwxOriNlpExWPnosAuFbplhDz%2FPf7%2BQf8Wdvb0vLHLjsHNQjxmipuE5%2FJPdq8Ia0KGFrmu4cXVzQCTAi8fOrp7xynfjpNP5Zxh3utzDjzJHO9FT2XsASMnTV1Sh&X-Amz-Signature=625488a9279ee90ee59f6224f1f0d8f4a9090c23d35a2467b3141b8433bdad22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGMCH7KL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtnhHduVHH9qHx6tw3B015yZWrkaGzOR6jCLPQgUOhqAiEAqmkCIn4ebKdlfVurIg2jn1qZXVjjTjOSjON85YZ55JEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLt%2BcFqJ685aXkiaESrcA4NeGoQixeWrboS1P7CzfcXHTm5tvbkwxAmzo0vXHXvQDr5w9wruzgln41MNheTqePpS9%2FCF4JxCwc4lwrB0qEERU6V20GLdDITWBSGy97yTj51NHKWdTkp7qaKojxNpx5JU9Zv35ZFFamqPFh87LQR1DKADMtUCY%2FpaYaUqPT1oWgjY9UnYowlRHm3JQ40wI2OukD%2FMd32p2JzFFoFDLIMNm8FhV7A1rIEnKqHej7QnmnqPDsqG4ac%2B%2Fv%2F0bnfDk72xolShEfmwu7QKhDQ6iH4QsMO70osfNLMJX1QN4PDD8c6U2X6B2JTZAqaNHsdLFCcvPRCwrMijrYIt6w7zw7pgsNpT230t0Ljpk%2BvliQ%2Bx5oa3PKM6EIzXveOazCkvUDRj%2Fl%2BNu6NefAm3v5lHd5siOn2wXX7TN%2FL5ec5nzZSaa64xNKEvIpEqIAXHBq%2FDMZ9igIjuS8IrAY1owAydXy5EGebBctwhgOqOpgRHbgR7D4ADmA0eH1xGNO1BHw1biKHu5J5cS4TqV29RRRR4WmiWaTE5g3k%2BMHdgOlYcATPtQzq4P7wnsZTbJpOS8au4xFkm3w5hodMx6ZjkS1Q7mCu2lMv3RNX5wTyN8OlFVMu8CibO771fMryHGnnHMOaY8cMGOqUBDo8xgOnmdarc30eNCMJxaBEhNoQvwGDzBA6XCwed5cYREc42cadwrfpcvR45Cj3JwFRwwEJH9rZT17DB8yyMrskFyrZ5e62fyuPCnSRc60f1GuCaW%2BsZ7EScajGWmokJrhO7Dz9c1qfeUYeSonu4560JxgavKkv54RyrkzgSMjIbHF%2BgW4UdRXZt9TUvA7Iv3Vimv3gGrm6F9qxDFi18a5299nZ8&X-Amz-Signature=78603a1f0dcc1bdd6d1774c6eb807b200d1434d728e9425cf9384a834b978e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

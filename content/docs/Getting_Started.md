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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI37AAHR%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHSYfd55xGSHUh52EvPN4oEUZAoDGh9kuEfMRv9Xy1MuAiAJtFk1rVc4Do6GGRZkxNuNwnEaRQctiOhhiPKikiTCJCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcJ2uNXpXgxE%2FW8RtKtwD2ZFmSIiPixiNe%2FovaV2YHCglchCpZylWtIaSIXz8%2BKvZoeoEz2Z1rBoAD8Wfr59l3jZKI%2Fvf%2BDccMWcXQ0VUt9TGY6r4N0T2RTiOHa6Ckowmk86vG8OH2n%2BT8RUCZSlhuXY811EhrcFbdTEA6oR%2BB7qpOx7ihXsEWktxOxxGSc4swclF6S89oVSSaJfdpLPKHufyWZ5%2F6ukyCPcTF3rSrOxwvjm3baNDdzrc8QlgT7m7K8z0XsJNGBxanYqPyI1sdlFIZBFLArzWD4hXHeeUaAsGS8rzyX%2BpzhUlMTo8jHa%2B%2B1yRcEFQocaJWE6mZOfOhKYZm7taqv7M%2FExYfHAj%2BHquTJHvpaTqdef8lPgO%2Bx91JHUmRgu8htxaXlamFWBCh%2FxTpTtLFPWgqVaVFR1m3Jn%2BfY8SfUJxfE%2BCWoAbjUNQiVjPNorIIlV5xLgfJeI8PJeat0UOGaToJ649vebjkIPQRh95vOaToNLMcAaeYmjwTwftjZpLjyrgHF%2BpKIUmKIHujwTj5GWWZQTBSuZLv2%2BwThJ%2BJHDo38N8vDJBgTPtSB5WOAjVjVq1yIYepb9XaSR2PXhD5QH42GYZi0qeEbq7IW3QO%2FRtvLnshPS%2BJ16XFeT2oAaLQ2F1c2ow97HuwQY6pgH1onWPjetolCNtDKC9taywpc0wIj3iGBVnvBgVTQpHQpQ7%2BWh3Dq17V%2Bg6lBsCAWTKITL2kQg7AaJfznxuDrb9Rzo27m%2BFQSoHWubp4OKONw3ew1SlHvnBNN2vHKvaZwlHKs6HtDrQuwJx9xlmjID3AVCkaqL3xIyz%2FgQmOYJpX2tFr1a4Z%2Baadz%2F99oP0Rda8R%2FIlSQ2R83dxgXsNI2N1TtZmeWZ1&X-Amz-Signature=9b0047a624e7e54a8d7a66acdcf31adcf2dcda69c02d14fe4b2dec5652bb3d6b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI37AAHR%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHSYfd55xGSHUh52EvPN4oEUZAoDGh9kuEfMRv9Xy1MuAiAJtFk1rVc4Do6GGRZkxNuNwnEaRQctiOhhiPKikiTCJCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcJ2uNXpXgxE%2FW8RtKtwD2ZFmSIiPixiNe%2FovaV2YHCglchCpZylWtIaSIXz8%2BKvZoeoEz2Z1rBoAD8Wfr59l3jZKI%2Fvf%2BDccMWcXQ0VUt9TGY6r4N0T2RTiOHa6Ckowmk86vG8OH2n%2BT8RUCZSlhuXY811EhrcFbdTEA6oR%2BB7qpOx7ihXsEWktxOxxGSc4swclF6S89oVSSaJfdpLPKHufyWZ5%2F6ukyCPcTF3rSrOxwvjm3baNDdzrc8QlgT7m7K8z0XsJNGBxanYqPyI1sdlFIZBFLArzWD4hXHeeUaAsGS8rzyX%2BpzhUlMTo8jHa%2B%2B1yRcEFQocaJWE6mZOfOhKYZm7taqv7M%2FExYfHAj%2BHquTJHvpaTqdef8lPgO%2Bx91JHUmRgu8htxaXlamFWBCh%2FxTpTtLFPWgqVaVFR1m3Jn%2BfY8SfUJxfE%2BCWoAbjUNQiVjPNorIIlV5xLgfJeI8PJeat0UOGaToJ649vebjkIPQRh95vOaToNLMcAaeYmjwTwftjZpLjyrgHF%2BpKIUmKIHujwTj5GWWZQTBSuZLv2%2BwThJ%2BJHDo38N8vDJBgTPtSB5WOAjVjVq1yIYepb9XaSR2PXhD5QH42GYZi0qeEbq7IW3QO%2FRtvLnshPS%2BJ16XFeT2oAaLQ2F1c2ow97HuwQY6pgH1onWPjetolCNtDKC9taywpc0wIj3iGBVnvBgVTQpHQpQ7%2BWh3Dq17V%2Bg6lBsCAWTKITL2kQg7AaJfznxuDrb9Rzo27m%2BFQSoHWubp4OKONw3ew1SlHvnBNN2vHKvaZwlHKs6HtDrQuwJx9xlmjID3AVCkaqL3xIyz%2FgQmOYJpX2tFr1a4Z%2Baadz%2F99oP0Rda8R%2FIlSQ2R83dxgXsNI2N1TtZmeWZ1&X-Amz-Signature=40f679381a2f354f9b130f3d36be8c9e5c411fc8830fca764b8e4d2a6eaf87c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI37AAHR%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHSYfd55xGSHUh52EvPN4oEUZAoDGh9kuEfMRv9Xy1MuAiAJtFk1rVc4Do6GGRZkxNuNwnEaRQctiOhhiPKikiTCJCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcJ2uNXpXgxE%2FW8RtKtwD2ZFmSIiPixiNe%2FovaV2YHCglchCpZylWtIaSIXz8%2BKvZoeoEz2Z1rBoAD8Wfr59l3jZKI%2Fvf%2BDccMWcXQ0VUt9TGY6r4N0T2RTiOHa6Ckowmk86vG8OH2n%2BT8RUCZSlhuXY811EhrcFbdTEA6oR%2BB7qpOx7ihXsEWktxOxxGSc4swclF6S89oVSSaJfdpLPKHufyWZ5%2F6ukyCPcTF3rSrOxwvjm3baNDdzrc8QlgT7m7K8z0XsJNGBxanYqPyI1sdlFIZBFLArzWD4hXHeeUaAsGS8rzyX%2BpzhUlMTo8jHa%2B%2B1yRcEFQocaJWE6mZOfOhKYZm7taqv7M%2FExYfHAj%2BHquTJHvpaTqdef8lPgO%2Bx91JHUmRgu8htxaXlamFWBCh%2FxTpTtLFPWgqVaVFR1m3Jn%2BfY8SfUJxfE%2BCWoAbjUNQiVjPNorIIlV5xLgfJeI8PJeat0UOGaToJ649vebjkIPQRh95vOaToNLMcAaeYmjwTwftjZpLjyrgHF%2BpKIUmKIHujwTj5GWWZQTBSuZLv2%2BwThJ%2BJHDo38N8vDJBgTPtSB5WOAjVjVq1yIYepb9XaSR2PXhD5QH42GYZi0qeEbq7IW3QO%2FRtvLnshPS%2BJ16XFeT2oAaLQ2F1c2ow97HuwQY6pgH1onWPjetolCNtDKC9taywpc0wIj3iGBVnvBgVTQpHQpQ7%2BWh3Dq17V%2Bg6lBsCAWTKITL2kQg7AaJfznxuDrb9Rzo27m%2BFQSoHWubp4OKONw3ew1SlHvnBNN2vHKvaZwlHKs6HtDrQuwJx9xlmjID3AVCkaqL3xIyz%2FgQmOYJpX2tFr1a4Z%2Baadz%2F99oP0Rda8R%2FIlSQ2R83dxgXsNI2N1TtZmeWZ1&X-Amz-Signature=b4eec0e427761ac8b8d3effc5a996c59ea92b4824e0303da39cf6a19612c5ba4&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BCF7EM5%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIB4JsLA7BQ4ZEHd2yE5i1hwFCY1rK9zGlFdXJpx%2BQWl0AiAMz6z60BDb1tqXAcYM6Mt0%2BdC4x6FtK6Z2LlvBcUAdHyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC93nHudN2M0Y8STeKtwD60IkyWyRYBvv2WB3bS89k%2BbXxfOjRQTlQAAvemaU94GGPxWDEWlPAvp50szUa5PqiDUM%2Bdfz267ZcMIXYztbQ0Qary8RPhCuW12UeD2wlkQiqviHKKvIWFcy6e52ipfIgXTfbKW9XPE8KNkRdWlkYZ1VoMWglm55kyDblYHnYmkISegrKMiFdfMNqIDBWa3hV7NW4rG3IvAAWluNKKcxfbMFdFn13GRmzH%2B18r12UjoftDQwo%2BTq%2Fhy18DXQ5eIgs3X2PGP9v4BiI13WcTIojDydap1Pm4yXCq3cRmyiXWBR%2FUu6s9cZOZbKjRAp%2BKSX4In55%2FyIvo3%2FnL%2FOA5NJWtKOwfkBnn3Up9ZVIay%2BLy7mpmxgkbRPpdTiW56l1ZHtuvcccvih6HqCyVaMFcoqeGW568A5iMITR2Bc57TKy4LsAvQ82YG0lp2a3k9oYaA1xcFI32YY0wouI7XmSFy0NMHQwfIMGQiI%2F8FXaW0p024lmGQGxWhRj2sz6NF6xoqLapcpKx8cpujWV0J2t6b1e6yRZNSpIKECSKQwm6laTlWzh%2BLOtVDCF6ol5S9%2FqdaBEZbtA1nWfrwTvtttPlE49sZMyPYOA6CWZoH2Yeuij%2B8nliIgaKNuUoGg4zYw3oHvwQY6pgGW1%2FTWoxBNSFbFOki%2FeRljBn5I5lWRvsKLl8Kbh%2BqNc8hBer1rYoL3tc%2FAKbd7g8L4kBn6g0XioPyTUywgt1yfhhH2ZPA%2F5FxvRSodrLA6bWN122%2BqeHwBCdT76pv5bB6dYRxdMbKNDGkTGbZXJZt27DypZr1AXXwGEmLHs4SZwGn%2FYgcddKdYCRKKdHG6kom3AjDTpnlF18hE0w9dS%2FGbZEtHeBol&X-Amz-Signature=bb67a174cf151b4a589bf79d52c4ec83c7b2a629b5ad8c4c8d3e22d6a48cc4fb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GCSV5F6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIG1Y5Cm1VhRQhX8YFfipr76mwGJAcV0qT9G6wqklF%2F5hAiBGJVRsA8VcChUq8vjBBrXnwDQ7cRepSBSlhtBRwcJNPSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfBoSiOQxIaCEreSIKtwDnf2auNbvEAFDdNZoFlotZXSU3s%2BpNw%2B%2FtTCm%2FFh160s1QSQSNZ9x3YyBxBke18oXnRH%2FzqKhSsoZsPJt%2FrCbDDKfUI51iTPDMJDNxOV5YjOva1Vl6CMvmzm%2BQUccKtNVdcqONqc%2FgDshE%2BSVyr9OF8LQ7HHHAv4XE%2BVMTUMenKNHOjgUJnXI%2FcFtoHqQBuTqli3vpD777YFzohqRXZXb%2BfrBXXCaN0tiy548W0Cpmy%2FuBK4dZUYKLBwst4uT5gF4476k9uK9Ewuc9vbLTJn8w6jop24PzKJjdzG6PyibkwUHCL%2B%2BAySfq%2FZLWuoJ4QPjFQndUFoCXfdhVJib89l1Rd2kuUUpvGZ8lsrq9N5oDF6OHK3q0jJB%2BfbIL81J8nFJKQLvPb7tS%2B8aIw9P6Au%2BVgEjq5CGUGeN30JR9sk66Uls2%2BVzDRpssekp48wGxpE%2BauGoXSvAtgeXcKKaVaMFaPuhhXDkmitKDIQNVmOAru1dwy5UDI%2FSHwkiYolbqmsXcXNFik0r2v8rpjPdpo3CVSWLGfpyuoYI5EXiXc97oUZiq53aIpzq8Lyo1PD%2BQkpomMMc%2Bz6JUyoxyXTu6Kyez%2FSfts2py423PiutV8f4cpcjO47MnZMPjQrtt%2Bkw6u7uwQY6pgHMjEnZ29Seskvoa%2Ba10F7ioxcyqRJdcK3Hx3qnE964NZdf3i7s%2F%2Fft2OeJKz0x%2FCUllwyS1BlhdaHMxntQ8x9YrPDPVioI1HhPd1rVR3mEsjHc84VDlIUtCHMRS6rJ569B2oJVN5mMsVC6FOx10Ne8Gn%2Fuyz8biBosuWNksGtw11JPEvt1C17wo6XF9t1SeOd8GxBNR%2FgYw6OZCCos55i69kKqJhNI&X-Amz-Signature=2625daa2c032c4398c5dc184c2e53305063a4db75ccba4f91ac47a7dc78475ff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI37AAHR%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHSYfd55xGSHUh52EvPN4oEUZAoDGh9kuEfMRv9Xy1MuAiAJtFk1rVc4Do6GGRZkxNuNwnEaRQctiOhhiPKikiTCJCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcJ2uNXpXgxE%2FW8RtKtwD2ZFmSIiPixiNe%2FovaV2YHCglchCpZylWtIaSIXz8%2BKvZoeoEz2Z1rBoAD8Wfr59l3jZKI%2Fvf%2BDccMWcXQ0VUt9TGY6r4N0T2RTiOHa6Ckowmk86vG8OH2n%2BT8RUCZSlhuXY811EhrcFbdTEA6oR%2BB7qpOx7ihXsEWktxOxxGSc4swclF6S89oVSSaJfdpLPKHufyWZ5%2F6ukyCPcTF3rSrOxwvjm3baNDdzrc8QlgT7m7K8z0XsJNGBxanYqPyI1sdlFIZBFLArzWD4hXHeeUaAsGS8rzyX%2BpzhUlMTo8jHa%2B%2B1yRcEFQocaJWE6mZOfOhKYZm7taqv7M%2FExYfHAj%2BHquTJHvpaTqdef8lPgO%2Bx91JHUmRgu8htxaXlamFWBCh%2FxTpTtLFPWgqVaVFR1m3Jn%2BfY8SfUJxfE%2BCWoAbjUNQiVjPNorIIlV5xLgfJeI8PJeat0UOGaToJ649vebjkIPQRh95vOaToNLMcAaeYmjwTwftjZpLjyrgHF%2BpKIUmKIHujwTj5GWWZQTBSuZLv2%2BwThJ%2BJHDo38N8vDJBgTPtSB5WOAjVjVq1yIYepb9XaSR2PXhD5QH42GYZi0qeEbq7IW3QO%2FRtvLnshPS%2BJ16XFeT2oAaLQ2F1c2ow97HuwQY6pgH1onWPjetolCNtDKC9taywpc0wIj3iGBVnvBgVTQpHQpQ7%2BWh3Dq17V%2Bg6lBsCAWTKITL2kQg7AaJfznxuDrb9Rzo27m%2BFQSoHWubp4OKONw3ew1SlHvnBNN2vHKvaZwlHKs6HtDrQuwJx9xlmjID3AVCkaqL3xIyz%2FgQmOYJpX2tFr1a4Z%2Baadz%2F99oP0Rda8R%2FIlSQ2R83dxgXsNI2N1TtZmeWZ1&X-Amz-Signature=0390e85a5591d2fa1c779415675b3a2c1cc3882036c40016d2910bdadd4d201c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

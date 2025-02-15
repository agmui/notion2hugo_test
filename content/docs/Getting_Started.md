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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVY6Y6RP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHj0kZbSVjt9priOGlwEs6VLFBXwDMJw4FI255PMhy56AiBn0Uf8i%2Fke3X4ZOfh6MQ1OMVkQN5B%2Fz1Yl6o8A3c2rtCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMEe4iyqy%2Bc0XFYlH%2FKtwDQ2eQi5KkBD8ulpA%2Ffb1cP4W3UVvPEAjj3qEUXKA4YPnHCnslKAfMKoOWnog4GdNEObSuMqPHvIfOPeImOTfm%2BLOAreNLsMsYzpZkPl3V7oDJ9CsNIyPIU7v0HdIL%2Bnk50FzB8Q7NPnkSADRhPIoNjDXQQs%2FPYTs2oMe0LP7T%2BBbY6bwx9TKInPrhfq1koDQzO3JWI%2BnHmBPXlvc%2FAV6pp%2B2ZkKgZWh1LyAnS20hXxDJNilyK1ZEsx3x5KPC9txfGzB5hg1EPRns01iPyW1b3NnBpXNyTQuOuDI4BOh%2B2QaRGU%2Fv1qC2h47ghmrsiNnyZcCPglj0Gz%2BXNjYTH%2F86UmGxdOmMWfuMWHXRY6l6X6uVJK%2FT9Su4JPVF7x5iZH%2FpYdpYD%2B0fFg9nEpNurFtpvkOZoE9LZpMdO7iLHZplkmIpkx7ZP1PpMaAexna2EfzV8JjgH89PnfAJLg%2Bfzx83P%2BmhmDGDKwZ80SpA%2Fohh5JudheU5e%2B24hsi%2Fa7hXhfV7tp1kjb6KPsOQpildNObDDt%2BYvfov5Sc0JWHGxgbaR3howvhHM2tV0gpdqfZjHOcFlh5ve5PM%2FiRytfW1dJPgEPQ7jKd2ZwAx3xmhc2Z2Jl28VNLkE%2Fary5Cbmz8kwvZvDvQY6pgGMz2tffCd7l63OlHW%2Bd3VfUiGQaa5re9M318g368gXNGCgyuy5kg3kvweC9%2FVvSwSBTRlVgjjf8%2BJp4wuLaxiShkoU1GMIN4Qf0RRrfGVwhZTgJN9f%2BcP73JwMSOWs4053ahJq4g4wWhSf7jKpH0bL64bLX9XIfmYQ%2Bm0YoW54GHAxAgPMvoDgzd698RMmibYHcqoSKlwxHRW0WRklwTLVVMdhvpxJ&X-Amz-Signature=e1ea45a25fb527e3373952d571c5e65d7a84558eebe0fcc56776d89ae6730adf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVY6Y6RP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHj0kZbSVjt9priOGlwEs6VLFBXwDMJw4FI255PMhy56AiBn0Uf8i%2Fke3X4ZOfh6MQ1OMVkQN5B%2Fz1Yl6o8A3c2rtCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMEe4iyqy%2Bc0XFYlH%2FKtwDQ2eQi5KkBD8ulpA%2Ffb1cP4W3UVvPEAjj3qEUXKA4YPnHCnslKAfMKoOWnog4GdNEObSuMqPHvIfOPeImOTfm%2BLOAreNLsMsYzpZkPl3V7oDJ9CsNIyPIU7v0HdIL%2Bnk50FzB8Q7NPnkSADRhPIoNjDXQQs%2FPYTs2oMe0LP7T%2BBbY6bwx9TKInPrhfq1koDQzO3JWI%2BnHmBPXlvc%2FAV6pp%2B2ZkKgZWh1LyAnS20hXxDJNilyK1ZEsx3x5KPC9txfGzB5hg1EPRns01iPyW1b3NnBpXNyTQuOuDI4BOh%2B2QaRGU%2Fv1qC2h47ghmrsiNnyZcCPglj0Gz%2BXNjYTH%2F86UmGxdOmMWfuMWHXRY6l6X6uVJK%2FT9Su4JPVF7x5iZH%2FpYdpYD%2B0fFg9nEpNurFtpvkOZoE9LZpMdO7iLHZplkmIpkx7ZP1PpMaAexna2EfzV8JjgH89PnfAJLg%2Bfzx83P%2BmhmDGDKwZ80SpA%2Fohh5JudheU5e%2B24hsi%2Fa7hXhfV7tp1kjb6KPsOQpildNObDDt%2BYvfov5Sc0JWHGxgbaR3howvhHM2tV0gpdqfZjHOcFlh5ve5PM%2FiRytfW1dJPgEPQ7jKd2ZwAx3xmhc2Z2Jl28VNLkE%2Fary5Cbmz8kwvZvDvQY6pgGMz2tffCd7l63OlHW%2Bd3VfUiGQaa5re9M318g368gXNGCgyuy5kg3kvweC9%2FVvSwSBTRlVgjjf8%2BJp4wuLaxiShkoU1GMIN4Qf0RRrfGVwhZTgJN9f%2BcP73JwMSOWs4053ahJq4g4wWhSf7jKpH0bL64bLX9XIfmYQ%2Bm0YoW54GHAxAgPMvoDgzd698RMmibYHcqoSKlwxHRW0WRklwTLVVMdhvpxJ&X-Amz-Signature=e31eb0951f976d896fd093a2509c65c87f2837bb118df5e587e453a33e53e683&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666AW4ZJZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHw5RScCHJ%2Bpui%2Fl5a%2F6WorHgCXW79YaaVD%2BVtFom8PzAiA6YzIfPR8OJErP7L6VD%2FZsnIB4WoEmKdoltq36DNdvvCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMs3eUySuAVrkHh1PrKtwDTdXUi6Vn3RLiQNYuMtUY4Q0%2FNk%2BnG0Tb9mW%2FiSCH78K2JB2tNIttEUcCiZ626CpDAdmBSEH%2BAAD3r%2FBCZsq1auyw4yKIMQjDAtwtcXyJgjTAC%2BKmSo%2BEwY0EYITPVp%2FFwtF8OdS8578nx%2B%2FGsP0aqSIaAv4kl4T4sSZTPkiddiK8c9zxBgbXvZ4wLd1b%2FTdKARWMK8x3aILYn8qHLNloEWLMFyclyoTRBi6k7vcYc6B8sIHMO2m8cRNdAV2phWwPCecyZQsfJd0XLcWIvRBWk5dVE3hlrerKlsCEGaBt4CDLQQ3VDsBV0xTPxamdxaPz8B0YRUsELWjXA3VDcswh8z13UF8erdX66VY%2F0frg0OkhTZ4xRV685FDn%2BQCshSf3SHBH%2B4cG7trGPSzincehSpPC99FrcfnSxIEY1x7APCt0AaDTevl83gXrT8Ht5g509U0BaQDnvyEhDl4JUFCb0S5XDz3zw6C1pRP2JZ%2BYVYa77HqAnKHk6IW7%2BEiYV4ouT1NfMzSees15shR8WFelCkLuAO0Uf2VhuW99BwCIFPYwuZBWkl7JqeH6a2%2FOsMOL9iBTCpFAgkaEPPenFTRCzyauUSA1ZMVj0NVKCG2%2BpwYVegNu3d%2B%2Bi2Gy8tQw0ZvDvQY6pgGKMWA42nLWsUMRMEPUsgfx7x%2Fo%2BEUM6dCKtoCEoMn7%2FptD8emisYMQc4hi30uOFp6kFOOSU%2FNETQUoAkni5aVBdqFC8XspYJhmRJRP%2FOvzOvRZ9rY9wW9qKOJ%2BwzlMZ2criwCMLxcgls0oCEgG1Fca8uxfWaYZ5zNSGj4lfifyrDCK7bcY34f31w6hBTXcLPzmHIkq45GvXdqhDPNxO0zr6X6e37Lu&X-Amz-Signature=7cf5e2ce2e22d94742eb97f113ebddac1d9a9983be4e8ad04d04093534cdefdb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL3FSUZV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDKfu7UzmEiS51PO%2BcYikN5gyRMD3AdoOn2i68f5VJRxAiEA9bKSLIZ7IE1wI7N7us7Q8Ig4ux%2FGO9GIDQKZ7dsOmKEq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDLRZXf%2BQsK7H41puiircA2pBaBy1I%2BqGuyrWjlQodKb21ZQVnE5WRSGKjFD90fu9g3r3w02FwdUBxOVKl2GNeMFy2ehqsxPmc0xuGadGgJneRTONTd3%2BReRd0rEtjsL28GIU6N6b6bghPfFJz99furIi2jkfQTZc8mvbKcG0REHUVeSpMgg2rFrMsEmHaf%2BEa6p3u4WCLXFVXSBoSlx%2FGfjLUK6Dund51GLenf5gaYQuWieLS9WlHPEboyp9P273zuqbt4rwxBAVK1HSHzatOE%2BZ%2F4w6pM9V2t0dmYVS7xSDrqsU3Nf2sKRMeXBEdpDYTNDCsLNcUVcQnmAITDi5oumuWCczFfX4ragHBNifD9PT7RWFg7xPrcqt8oZd3Gj8zfMU6GsZ12a0zzSwGJD4ek07ZgySx6nHnchRwlbmpns0QTFNpTgTFcMf4aolIbRu3lZW7BA7kCnz8vFerRijfouZkvytxys%2B8TtyMM1DJdWyYMc%2Ff7T%2BLHD60sxPwhcxerPHY0m6z27g8oAclqo318ZCoaAQcpIg43O8I3AffEpGV1dKlI4Z1XGo%2Bg9PFAH2k9kRHG4wal9tVqp1AgQ2zyHjidos3Jh%2F4oxXn%2BsF5qkz3DRV36k9aB%2B1nbmTF%2BVze62gdgN%2F6Wk3lrR7MJicw70GOqUB%2Bg87ObTRT81TW5AarnV5%2BEXQDyvmcKekrQGpe%2FXF06EzwXXd8bw%2B3ATKacN4i1C4Nfsyo3%2FejIqwTbI%2FDsG2T4PNsEur3ldDI5C1z7gI%2BUdhk7dAltb6Fg5%2F8cG6%2Bip00UkMAtYeNUGhP1P66q%2F4F%2B9u68J%2FSq8UZhVhf1v98b6rlNmvfS%2FJf384lCx3Tmr9k92Y0%2BFspQBSc0V7pZN6j6jSBc3d&X-Amz-Signature=978961f69147186f46c2d01d67755cf6e06530e4e1ce082bb5087fdae6c3f897&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVY6Y6RP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHj0kZbSVjt9priOGlwEs6VLFBXwDMJw4FI255PMhy56AiBn0Uf8i%2Fke3X4ZOfh6MQ1OMVkQN5B%2Fz1Yl6o8A3c2rtCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMEe4iyqy%2Bc0XFYlH%2FKtwDQ2eQi5KkBD8ulpA%2Ffb1cP4W3UVvPEAjj3qEUXKA4YPnHCnslKAfMKoOWnog4GdNEObSuMqPHvIfOPeImOTfm%2BLOAreNLsMsYzpZkPl3V7oDJ9CsNIyPIU7v0HdIL%2Bnk50FzB8Q7NPnkSADRhPIoNjDXQQs%2FPYTs2oMe0LP7T%2BBbY6bwx9TKInPrhfq1koDQzO3JWI%2BnHmBPXlvc%2FAV6pp%2B2ZkKgZWh1LyAnS20hXxDJNilyK1ZEsx3x5KPC9txfGzB5hg1EPRns01iPyW1b3NnBpXNyTQuOuDI4BOh%2B2QaRGU%2Fv1qC2h47ghmrsiNnyZcCPglj0Gz%2BXNjYTH%2F86UmGxdOmMWfuMWHXRY6l6X6uVJK%2FT9Su4JPVF7x5iZH%2FpYdpYD%2B0fFg9nEpNurFtpvkOZoE9LZpMdO7iLHZplkmIpkx7ZP1PpMaAexna2EfzV8JjgH89PnfAJLg%2Bfzx83P%2BmhmDGDKwZ80SpA%2Fohh5JudheU5e%2B24hsi%2Fa7hXhfV7tp1kjb6KPsOQpildNObDDt%2BYvfov5Sc0JWHGxgbaR3howvhHM2tV0gpdqfZjHOcFlh5ve5PM%2FiRytfW1dJPgEPQ7jKd2ZwAx3xmhc2Z2Jl28VNLkE%2Fary5Cbmz8kwvZvDvQY6pgGMz2tffCd7l63OlHW%2Bd3VfUiGQaa5re9M318g368gXNGCgyuy5kg3kvweC9%2FVvSwSBTRlVgjjf8%2BJp4wuLaxiShkoU1GMIN4Qf0RRrfGVwhZTgJN9f%2BcP73JwMSOWs4053ahJq4g4wWhSf7jKpH0bL64bLX9XIfmYQ%2Bm0YoW54GHAxAgPMvoDgzd698RMmibYHcqoSKlwxHRW0WRklwTLVVMdhvpxJ&X-Amz-Signature=181447f2f43ea4c05a511320ffd5c4cceb4504d090b13915f34dceb70525f2b7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

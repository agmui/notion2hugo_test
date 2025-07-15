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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KD63ZLP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCHEiJQsupIOoCE67osCpT8dVr7Izn0SKLSXv8hRd8d1wIgM7cCxwzYlyQAvVzdojig4GBO%2BuliQU0AXv1kSozCru4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDMn3EmYLZI%2Bkk5uSjyrcAyTiQl8QMW2fzX3whVrwPeIq0Vdo0ybdVnHNHmp9Yth3GNwK0M1megnWQXr8zzbAagL8JpHDD1cxyIr1060FmjDzLaStRC06D%2F1HgJwy5EY%2FnTMUUJvpsBuIWBVlfVlur3BgDwqFygJkF9wX4H1k9O7b8bnv2Llo5nIdZhPA2ayEZsZCDj0cla7aptCZfhZe%2FjegiJh1DOR4oF8%2FDwEU%2BEN1twI9ECpYxOUMjdlmCXG%2BYNI1SSZHlO8tzgiAZ%2FFsx3uxSt3j4lxKAqLc4ULuquCjAfOJ20NX2Uc0Juyfiq8UsorApzYK1O3G6sqXVdEGHD%2BgyUl01LeIGDkYq4hRraUhSEf%2FEwiHTks7sNvUhV9I0YARj7d5tg2VF%2BzNCYKtJMCVA9u9wviD97tNX4Sdt3dwBIRTQ8v%2FEX4UsRAigY7h1lO1kiEYkniy%2Bu3bzSM%2FVzJ0%2Fjd6gWQoWIqm5kRBIkn1wFOFAPe1cY3zxcM2peY6bJbF2ISC28AfthmaOl590S420ZcKNb8b9pBBXT2f5lwECDnyv9E6zPG88LZHmKg2xMyz%2B09BLOUwMuqAG6nmQ91l3mAp7vjSYjOHMTJ1MMRQBacoJzUb1qH5QHUBR3CyRm8QFTfaPjx9dIwBMJOE2cMGOqUBwOkbpwFE1v44QRgAzWLIMeWS3nsNyC8cgczI%2FjDYwKLpiMOlhjV7Qj%2FDLds6yN3yjcQne5ql3RFd010DNtSJFoS4XUlQxFeNr5Qv%2BCYs5FFVACkJOoN%2F%2Bi%2BE1wmLgZvOqqRIJtYMX730OYfz7vorrfpmbNk7HtSOYQxJ6ZrrtHgn3Xkl57oVVkmxgWoUV9Dw0I2DFkNMRqgsLr1HoH9gEdhSahaU&X-Amz-Signature=b8e6a01df61635d520489a9e28d69a60141fabfa3fade1a62918a3cf46dc2220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KD63ZLP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCHEiJQsupIOoCE67osCpT8dVr7Izn0SKLSXv8hRd8d1wIgM7cCxwzYlyQAvVzdojig4GBO%2BuliQU0AXv1kSozCru4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDMn3EmYLZI%2Bkk5uSjyrcAyTiQl8QMW2fzX3whVrwPeIq0Vdo0ybdVnHNHmp9Yth3GNwK0M1megnWQXr8zzbAagL8JpHDD1cxyIr1060FmjDzLaStRC06D%2F1HgJwy5EY%2FnTMUUJvpsBuIWBVlfVlur3BgDwqFygJkF9wX4H1k9O7b8bnv2Llo5nIdZhPA2ayEZsZCDj0cla7aptCZfhZe%2FjegiJh1DOR4oF8%2FDwEU%2BEN1twI9ECpYxOUMjdlmCXG%2BYNI1SSZHlO8tzgiAZ%2FFsx3uxSt3j4lxKAqLc4ULuquCjAfOJ20NX2Uc0Juyfiq8UsorApzYK1O3G6sqXVdEGHD%2BgyUl01LeIGDkYq4hRraUhSEf%2FEwiHTks7sNvUhV9I0YARj7d5tg2VF%2BzNCYKtJMCVA9u9wviD97tNX4Sdt3dwBIRTQ8v%2FEX4UsRAigY7h1lO1kiEYkniy%2Bu3bzSM%2FVzJ0%2Fjd6gWQoWIqm5kRBIkn1wFOFAPe1cY3zxcM2peY6bJbF2ISC28AfthmaOl590S420ZcKNb8b9pBBXT2f5lwECDnyv9E6zPG88LZHmKg2xMyz%2B09BLOUwMuqAG6nmQ91l3mAp7vjSYjOHMTJ1MMRQBacoJzUb1qH5QHUBR3CyRm8QFTfaPjx9dIwBMJOE2cMGOqUBwOkbpwFE1v44QRgAzWLIMeWS3nsNyC8cgczI%2FjDYwKLpiMOlhjV7Qj%2FDLds6yN3yjcQne5ql3RFd010DNtSJFoS4XUlQxFeNr5Qv%2BCYs5FFVACkJOoN%2F%2Bi%2BE1wmLgZvOqqRIJtYMX730OYfz7vorrfpmbNk7HtSOYQxJ6ZrrtHgn3Xkl57oVVkmxgWoUV9Dw0I2DFkNMRqgsLr1HoH9gEdhSahaU&X-Amz-Signature=1d82d009a342df5dfac23dcf2b7a850a5d2251a767d73210817dcc0d1f2d257a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KD63ZLP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCHEiJQsupIOoCE67osCpT8dVr7Izn0SKLSXv8hRd8d1wIgM7cCxwzYlyQAvVzdojig4GBO%2BuliQU0AXv1kSozCru4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDMn3EmYLZI%2Bkk5uSjyrcAyTiQl8QMW2fzX3whVrwPeIq0Vdo0ybdVnHNHmp9Yth3GNwK0M1megnWQXr8zzbAagL8JpHDD1cxyIr1060FmjDzLaStRC06D%2F1HgJwy5EY%2FnTMUUJvpsBuIWBVlfVlur3BgDwqFygJkF9wX4H1k9O7b8bnv2Llo5nIdZhPA2ayEZsZCDj0cla7aptCZfhZe%2FjegiJh1DOR4oF8%2FDwEU%2BEN1twI9ECpYxOUMjdlmCXG%2BYNI1SSZHlO8tzgiAZ%2FFsx3uxSt3j4lxKAqLc4ULuquCjAfOJ20NX2Uc0Juyfiq8UsorApzYK1O3G6sqXVdEGHD%2BgyUl01LeIGDkYq4hRraUhSEf%2FEwiHTks7sNvUhV9I0YARj7d5tg2VF%2BzNCYKtJMCVA9u9wviD97tNX4Sdt3dwBIRTQ8v%2FEX4UsRAigY7h1lO1kiEYkniy%2Bu3bzSM%2FVzJ0%2Fjd6gWQoWIqm5kRBIkn1wFOFAPe1cY3zxcM2peY6bJbF2ISC28AfthmaOl590S420ZcKNb8b9pBBXT2f5lwECDnyv9E6zPG88LZHmKg2xMyz%2B09BLOUwMuqAG6nmQ91l3mAp7vjSYjOHMTJ1MMRQBacoJzUb1qH5QHUBR3CyRm8QFTfaPjx9dIwBMJOE2cMGOqUBwOkbpwFE1v44QRgAzWLIMeWS3nsNyC8cgczI%2FjDYwKLpiMOlhjV7Qj%2FDLds6yN3yjcQne5ql3RFd010DNtSJFoS4XUlQxFeNr5Qv%2BCYs5FFVACkJOoN%2F%2Bi%2BE1wmLgZvOqqRIJtYMX730OYfz7vorrfpmbNk7HtSOYQxJ6ZrrtHgn3Xkl57oVVkmxgWoUV9Dw0I2DFkNMRqgsLr1HoH9gEdhSahaU&X-Amz-Signature=c9d0267717e2117b495c3a3f75379c49d29fe6c289b0d5c394a8d38e5853360e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQDQKRJU%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIC6%2BzIxx0UhccCXVkqIaPS4JP%2FJYEbIfE4jJlDc%2B958cAiEA1mnDQnS84dLH1ZPeOImiGV6zZqwrH6SaOmkTKQpzEVEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDO6B6RH3IS2kO%2BpanSrcA6cRL8%2BETP04Bou0o8AfShFRQP0JfePC6P6UlZ9K%2FF6yXIGzPzkkHLZqrmPt0O6aAhr8ypMwzCA%2F8rYVg7NF3NJ0Q9stwnuW1U6Z9qq0VE2RLKLT9%2BxFpuHLMeExzK189%2BglDYkG0RUAWmunxcuLLm6Jq9E2k4D9IAeeAfHw%2Fkdr6zw0WIOMO3m2aMSmmQ4cf%2BcSomWjyJmvKLs1HSkVSEtiuKANS2fbxL5J1BVzdW3ezRQ7nkPmV7oi3CieMswhK5csmy%2BH48vYoaxE%2BTi62WzBQSw1EbSKqT9j59qtpkvsW%2B6GCWoECEW7G91v8f1KwEqDHfnujqc8xnIJoASPR2rQFlLZfoGusLrESKPjY1QliMPtkFUKCphRaf%2B754KXSu21BIXh7Tun55CdB85n4u1cOTDLM%2F%2Fbfof17KGtExg0oKvv6zYE%2BuRnBxLkcAWV%2FXnrIl%2BWjNrymfKa3FW3pMO9FJsILE%2B6n6i%2FQoZo1TjiVHwQOV%2Fv8X1olABSKGhx3vW8R7k7LnZ3nFXViIqG2I5RtLzClI4Ha%2F2XtOq58m9sap1oW%2FYKHqlNOxTG5lSSjdL1TmY9mVPj%2B3ZjcN1uLFBIsSrsFI4b0S7vAav%2F2ufovrd8WqJzi7ase2NNMPaD2cMGOqUBeUDZlPk0SosWkRgZQyQpgaiAKlhBykd7MOrXO3Zqs8PqKyyH2boDWDpMr4GDx3hqeOeQTrcB5NNMIHBk8OrbcOx45N2EBbdE1czYiclmOx2z%2BMmnwCHw%2FIDSs7k4Gj96o3aS29%2F1rARKMKHb8xJSDmBiHXA3u5kxoslc2VBCofOAXW%2BNoF4M6%2FJFIU4NaexIdkSkirOlU5jWsWEEdCGFrGCmW%2Bxw&X-Amz-Signature=ac4f710010e4e1b46e75fb23a8e1a7588f86e5f42884a4d033c89947cc30c363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4IJYRZ3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBx1RZRilsqxmVhaLkBEw7FLqyfdtRazj5IGusi%2BtJDRAiAwgHeEoaji7zZbkAj2L10Soq2qXUhYZcHY1fWkYu1d9ir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMmneYNjrItTHZbY1DKtwDbY2rFLjsE4RJSBk30meQNcr940pdlB4xjtQ9IoxZBY3KbXuKfXcRd4AZd5xoumEKUK8SHiw0alPmsdA6LoWMLDDNK9wA13h%2B%2FUttlWHBgdZ3hmbzO5p27dB4emL02n%2FOZOOPTFw7xOlC27CUutCpF5zaa2how4gfbjT2rMiqu6AZ4Be%2F2lycxCtV2XBZfREBOm%2FAef9QABtG%2B%2FLQxNDWtOLCu8logA2RDwtpHDjKvUHxRiQw5K%2Bp4kCx4w2CEmvJpaKWPMPYE7hdgmDg67w7V0QeWTrtku%2Bn2XFY0BSzV7imki7p5tIfnFXByfc1E1RTDrzk0zNcmgAWWEKZejSdmw2puVpLc%2FRdz6SRutaCKf0iDMwXEURqTuw5W616kyFW1EPUoJncJmUfJZ6wR6Kqs6%2FfUZXujVJvZKm0MCvqyNj8EebH7cWCrAxmOY0M%2B%2BcXGrPPD0ifMB9chca4XVHaMZnLejINtPFXQF9vXxUozYS%2Fsn0K9ALy8XB381VQa7hfL4v76%2BPz1HURcadf1iyWi6R8hFPzccthnjE6Gdor3%2FATjJGgC7GroclF8eNjLjvmwCIQSvKcqk7%2Fo%2FztnNG0PWAEgxyX8Lk7wAU1q7vnU8we3yVQU0BxDGlVH6MwnYTZwwY6pgGQ%2FHCif%2BBH5RFEKzBabdOpOwFJcYuOmbCmU86rn1ufIs1%2B9Us88I7OpcB97s%2Bsu8u4p6iwzi5XylElTW6zHUF%2F55nIL22LlDno59nwYPaGjvoRZQRi2R6iVqlpz%2FE47XL8LZBDLDzccaXgpfnYWGpS3dH%2BxjDkq7LFX37KiV9OC0jNWh387C8RMKue1bLvVYdHOraIVELiCdR5FTM4uP5afunpQ0Qy&X-Amz-Signature=4e0b63bc0b00962bac345edd9e6c5ae7d28d646c29c50ae6f19d2fbeb277a32b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KD63ZLP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCHEiJQsupIOoCE67osCpT8dVr7Izn0SKLSXv8hRd8d1wIgM7cCxwzYlyQAvVzdojig4GBO%2BuliQU0AXv1kSozCru4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDMn3EmYLZI%2Bkk5uSjyrcAyTiQl8QMW2fzX3whVrwPeIq0Vdo0ybdVnHNHmp9Yth3GNwK0M1megnWQXr8zzbAagL8JpHDD1cxyIr1060FmjDzLaStRC06D%2F1HgJwy5EY%2FnTMUUJvpsBuIWBVlfVlur3BgDwqFygJkF9wX4H1k9O7b8bnv2Llo5nIdZhPA2ayEZsZCDj0cla7aptCZfhZe%2FjegiJh1DOR4oF8%2FDwEU%2BEN1twI9ECpYxOUMjdlmCXG%2BYNI1SSZHlO8tzgiAZ%2FFsx3uxSt3j4lxKAqLc4ULuquCjAfOJ20NX2Uc0Juyfiq8UsorApzYK1O3G6sqXVdEGHD%2BgyUl01LeIGDkYq4hRraUhSEf%2FEwiHTks7sNvUhV9I0YARj7d5tg2VF%2BzNCYKtJMCVA9u9wviD97tNX4Sdt3dwBIRTQ8v%2FEX4UsRAigY7h1lO1kiEYkniy%2Bu3bzSM%2FVzJ0%2Fjd6gWQoWIqm5kRBIkn1wFOFAPe1cY3zxcM2peY6bJbF2ISC28AfthmaOl590S420ZcKNb8b9pBBXT2f5lwECDnyv9E6zPG88LZHmKg2xMyz%2B09BLOUwMuqAG6nmQ91l3mAp7vjSYjOHMTJ1MMRQBacoJzUb1qH5QHUBR3CyRm8QFTfaPjx9dIwBMJOE2cMGOqUBwOkbpwFE1v44QRgAzWLIMeWS3nsNyC8cgczI%2FjDYwKLpiMOlhjV7Qj%2FDLds6yN3yjcQne5ql3RFd010DNtSJFoS4XUlQxFeNr5Qv%2BCYs5FFVACkJOoN%2F%2Bi%2BE1wmLgZvOqqRIJtYMX730OYfz7vorrfpmbNk7HtSOYQxJ6ZrrtHgn3Xkl57oVVkmxgWoUV9Dw0I2DFkNMRqgsLr1HoH9gEdhSahaU&X-Amz-Signature=e9ea910ae054693f6f10725afc9d741a3c289b9a33c7d082221bf6fbbdb0ed56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

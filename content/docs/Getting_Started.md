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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWVGJCQN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEib%2BNSnv8MDM0wcVTE8oDrRxjDtsQJRi8DT1RYH2rWCAiEA4AOV8Y3WzCzK5u6xsOHTcw1o3A6KwCaK6S%2Bd9eO%2BTK4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHDXyrd%2FwAoLhW%2BVryrcA9KNxkzfvf%2FX31oFbr%2BL5rWJ2aXoxSc%2BJ821hz1UuiG1NHJLIuRQh4M5vbI6er93LNgPkVnL6%2FACfwvqTcmNkmcVVqcFewEp5KTsV7rjYnkpQ%2BNqj9Q1iwHyZwposxlSuSe1XKTnjlcyLEJ4tq4YIKjWQHihZjOeTw3bSdX3bd%2Fz%2FLSRBMOSpdxekgjAzX7Kbjz0PqTQTqQtP9GGvL0LZG8bF2eZfmviOLg91Kl1JC2B2HRij9Tb0yXGhZN1am5l0rCh%2Fduv4VXI9LIMohl0ZMf8cEDFJge69AiTNCRwKRiIwJtkNm1ysIYSXRaKOhedqw69inHP45EOfSfAYleIThWJW5AGqbw2lEbVIl6vUwvqAeG6vqcOyFR11MvLEHoRgRI6Pj1B%2BB1H%2BnXExw1Bu6jHFw3HHPdmO%2BdFWsAaUs%2BQmWv0l28H2StmHquFPvAegrFR5HSduEV2PIKhfkEA1TGBed8%2FqJnsnEGuAMZ3Wz%2FYQurKXd0AdyYEm2vUeLywA4E%2F%2BNllDrRntBeafiCc9rIL%2Fi9xcqlwErrJW2jKsan51uXBS6mXLZXvLnnxg9sfb%2BwildV61kVfP69sW0ME7%2FKv%2BJ7NXpc0wPagQmACVN3GSV03s0vG6GZmNoDCMNjqur0GOqUB5tzPDBSVpnG0Xpu6YStv%2FX9dfrC0gzZmUACY8XjZ1OA2UpDs035b0Vi7pfDK1%2F8A71LklkBh4z9M%2BcfRoHtEeWR2T3lDwPw53K9%2F79C2sxG9iTRq4NC4oAjURoOORJWiTt%2FtAu%2BAHsrZ%2BhHxJANzH1NbyUgSBcgiYV%2FIf54nuTsJEw523o91lL7LpYwBVivExVBi8VwYnF47H%2FqIH4aiGqAGQ0Mv&X-Amz-Signature=d58dee6d27be182d7226231e3499f9fd4b73462a8052404c926f826fccd5eb51&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWVGJCQN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEib%2BNSnv8MDM0wcVTE8oDrRxjDtsQJRi8DT1RYH2rWCAiEA4AOV8Y3WzCzK5u6xsOHTcw1o3A6KwCaK6S%2Bd9eO%2BTK4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHDXyrd%2FwAoLhW%2BVryrcA9KNxkzfvf%2FX31oFbr%2BL5rWJ2aXoxSc%2BJ821hz1UuiG1NHJLIuRQh4M5vbI6er93LNgPkVnL6%2FACfwvqTcmNkmcVVqcFewEp5KTsV7rjYnkpQ%2BNqj9Q1iwHyZwposxlSuSe1XKTnjlcyLEJ4tq4YIKjWQHihZjOeTw3bSdX3bd%2Fz%2FLSRBMOSpdxekgjAzX7Kbjz0PqTQTqQtP9GGvL0LZG8bF2eZfmviOLg91Kl1JC2B2HRij9Tb0yXGhZN1am5l0rCh%2Fduv4VXI9LIMohl0ZMf8cEDFJge69AiTNCRwKRiIwJtkNm1ysIYSXRaKOhedqw69inHP45EOfSfAYleIThWJW5AGqbw2lEbVIl6vUwvqAeG6vqcOyFR11MvLEHoRgRI6Pj1B%2BB1H%2BnXExw1Bu6jHFw3HHPdmO%2BdFWsAaUs%2BQmWv0l28H2StmHquFPvAegrFR5HSduEV2PIKhfkEA1TGBed8%2FqJnsnEGuAMZ3Wz%2FYQurKXd0AdyYEm2vUeLywA4E%2F%2BNllDrRntBeafiCc9rIL%2Fi9xcqlwErrJW2jKsan51uXBS6mXLZXvLnnxg9sfb%2BwildV61kVfP69sW0ME7%2FKv%2BJ7NXpc0wPagQmACVN3GSV03s0vG6GZmNoDCMNjqur0GOqUB5tzPDBSVpnG0Xpu6YStv%2FX9dfrC0gzZmUACY8XjZ1OA2UpDs035b0Vi7pfDK1%2F8A71LklkBh4z9M%2BcfRoHtEeWR2T3lDwPw53K9%2F79C2sxG9iTRq4NC4oAjURoOORJWiTt%2FtAu%2BAHsrZ%2BhHxJANzH1NbyUgSBcgiYV%2FIf54nuTsJEw523o91lL7LpYwBVivExVBi8VwYnF47H%2FqIH4aiGqAGQ0Mv&X-Amz-Signature=11977f1fbc6ee64c6c86e153def7589b303ecfb256f55485f872388589bcf1b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOQNPFHL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD65tuEIdMtfjUv5VcCvZx2sBp2X6hr9CzOLu%2BckD2JDwIhAJI5okFSkSz4%2FG186uv3mjNFw3xLE6qa5N9nE72gkaCrKv8DCCQQABoMNjM3NDIzMTgzODA1Igxk0tYXdwM3GSUf%2F5Qq3APLVQAaQCUuBuxpbwG3Ic1tnW5AP2mf005GuAFghmPJ%2BFxMjzcb9ASolnFhFXcSwGG1YFnjJZGoNcq6O8AbfX967nlsFmIgh2B1f3XYKb4h8OaLJBIOIMi3LEkb616izxSymPHpMUZv2YjcbZg14mTOCUrJ4NLlhwgv4%2BVJDbojVpKHFcxk%2B9XlouyfCyiu3HWe5YT6pu0L1gupuixX42be8l1rJgzqueAedjzT%2BOfOYeFXZBf5899iueoMEPf30eLDtg04%2FTE2FBrhuMvqD6oJTUVjgkJFw9z9CMCfHmu1cOCtipo2A9kR%2FwYwnUP24NiLHpiFknqsRlB7owZ9lW5KUrw%2Fr5iGOlrMUrlg%2BZJQ4abMWCrDX1qJgq%2BJKNx%2F%2FlvFRSuKDHcq6AWdSkvrC1VHNYE38Da%2FY%2F5D68nY1%2Bhu6%2FUxorJ8PeJgl%2Fey5WYsHab2xrQc5iE1P4djmbnf%2By0GSys3caZmPrjBKlia9o96bxTVsm%2F8XklXrRNAHKap8XCAwXvUZt7U8jJ6AzvE1XEjGXmA74reyxjY7yr6GENwjnqebR4rFErXUzt7Z6WhbtiuDdXGtqMr6V%2BlWmYA9QvKQKUSbEn667o5qVdNoBGtw9eW5S5RJfDmKt6WHTDg6rq9BjqkAcCAUVrWXXzs%2FIFEpUtcxhFxbLIgJ4%2BpY50fFrRqhrt%2ByKqGA8BAEIU3IOnLL3P6MFaN6sIongpH88AEflF2iAebrikAi2yE2WV8d2PeKQnC271E9Oz8wEKr6Ck0IBO8RIl%2FimAfJ0dqj6f7a0D4b0byMjkOfHYhUhhsnhdK4TVtQi2TdV%2Bh3Y2vs5so6xZvH%2FYPtEQdWFC5PY1uDcByTG1p3y7z&X-Amz-Signature=2e2db013220d03ea0231df9e20cc92582e36c69855765e139ae53095b4c7d1d7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J3MQQ7T%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FSJkXqhVY2p7O%2ByeKclQPhQg6Thwz2A4WwMCv3NHtnAiAEpwX3qAZVayruxSIpma58EurqUpFUUClCBK0xv8Gusir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM7FqACtJzYSy7zkQqKtwDqDBQsytnBqdj5lthWnbabrjymDraDRo3cMXaTvedrXsqLxLLhaCLOMngVXJk9DAOwEJUefQsixjUdesmcH3ckVBbvLMxnov%2Fg%2Fn%2FpIHpWAiyARLQxpKPkgsYngLSofckdD20HBKdLkoOXhJllXVF96NCgQL%2BLfGFVPGewWOfPWiCKKPrN%2FsP6wvhjAp3S5jCwRwrBYiKaZTtFhJYvIW8b0rL7NCYSQvbsdxj5GFcg0yzy%2B5bbDilbFrYRL2nEQtaNYz5M8JRcPUehoHd6zHI9hC3ZcT20yTNVwkVIMbqXHJ2Ie9fA5GVe8haExwa8dbYlT7PbJSQ%2FX5kaCTqgBwhEf0EtnWU%2B%2F7usMLpuezgWyzmjSIivZ7Wcl4s6AQoZBenZa69xDeBkyXcUIWB7bvaPfCIQtut%2F7Ix6YIR3QQ1TxVxCWlSGNy2qzvKKqAm%2FYoTFGlum1Cv6FAgocNYtnOHJoF8OtC7fLfoASSv5qlh0%2FvBdT%2BkodjKYSL%2B7YYOTykdvdosWGWYEkrcm0sTy6HGK6Z4SvgWHzbtv8bG1OxNkW8MXG%2BJp99EnA35DUfC99%2ByNmLsbL1tQ16EISU%2B29k%2FRfCMplcFsn2yofLWqwaM96igXNyHBn2YyfxFC2cwwuq6vQY6pgGnBiTEjSNQ%2FrDseAo8tQlQJBfrfOuv61q1DjV6U1zewpPFzZrx8OkhKtYKYeXW0n5VCcaH9s8TYnnim9%2FrJsDUGEcW9zjQEtgblIlSIAv9aoq2BaGsAJG9SZnbptPqqrxz4X7XIihRGFMPr2jQfuJBg89nfMM6xDcGJJ0mZ5JV%2F%2F5StAOmS7RLpK8yoFjoeqVQWFICWlZmKIZd%2B%2FiRS9hBjCEBKAFZ&X-Amz-Signature=49229682cc9ed4c891d2d558774d85577b79f87c4dbc6cbee466f0e268a87113&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWVGJCQN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEib%2BNSnv8MDM0wcVTE8oDrRxjDtsQJRi8DT1RYH2rWCAiEA4AOV8Y3WzCzK5u6xsOHTcw1o3A6KwCaK6S%2Bd9eO%2BTK4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHDXyrd%2FwAoLhW%2BVryrcA9KNxkzfvf%2FX31oFbr%2BL5rWJ2aXoxSc%2BJ821hz1UuiG1NHJLIuRQh4M5vbI6er93LNgPkVnL6%2FACfwvqTcmNkmcVVqcFewEp5KTsV7rjYnkpQ%2BNqj9Q1iwHyZwposxlSuSe1XKTnjlcyLEJ4tq4YIKjWQHihZjOeTw3bSdX3bd%2Fz%2FLSRBMOSpdxekgjAzX7Kbjz0PqTQTqQtP9GGvL0LZG8bF2eZfmviOLg91Kl1JC2B2HRij9Tb0yXGhZN1am5l0rCh%2Fduv4VXI9LIMohl0ZMf8cEDFJge69AiTNCRwKRiIwJtkNm1ysIYSXRaKOhedqw69inHP45EOfSfAYleIThWJW5AGqbw2lEbVIl6vUwvqAeG6vqcOyFR11MvLEHoRgRI6Pj1B%2BB1H%2BnXExw1Bu6jHFw3HHPdmO%2BdFWsAaUs%2BQmWv0l28H2StmHquFPvAegrFR5HSduEV2PIKhfkEA1TGBed8%2FqJnsnEGuAMZ3Wz%2FYQurKXd0AdyYEm2vUeLywA4E%2F%2BNllDrRntBeafiCc9rIL%2Fi9xcqlwErrJW2jKsan51uXBS6mXLZXvLnnxg9sfb%2BwildV61kVfP69sW0ME7%2FKv%2BJ7NXpc0wPagQmACVN3GSV03s0vG6GZmNoDCMNjqur0GOqUB5tzPDBSVpnG0Xpu6YStv%2FX9dfrC0gzZmUACY8XjZ1OA2UpDs035b0Vi7pfDK1%2F8A71LklkBh4z9M%2BcfRoHtEeWR2T3lDwPw53K9%2F79C2sxG9iTRq4NC4oAjURoOORJWiTt%2FtAu%2BAHsrZ%2BhHxJANzH1NbyUgSBcgiYV%2FIf54nuTsJEw523o91lL7LpYwBVivExVBi8VwYnF47H%2FqIH4aiGqAGQ0Mv&X-Amz-Signature=62cf928aeee2691540bdbd616a813481627ef601737749fa1d8ed14f26a52b5d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide

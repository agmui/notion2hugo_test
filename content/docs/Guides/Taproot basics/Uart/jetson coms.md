---
sys:
  pageId: "223da3bc-6297-80a4-8291-ecdfafcf7da0"
  createdTime: "2025-07-01T23:33:00.000Z"
  lastEditedTime: "2025-07-03T19:55:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Uart/jetson coms.md"
title: "Uart/jetson coms"
date: "2025-07-03T19:55:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 133
toc: false
icon: ""
---

This guide goes though adding UART communication between Jetson and type-c

---

Suppose you would like to send the x,y coordinates of armor panels your Jetson sees the type-c.

The simplest and and easiest way to do this it though UART.

Here is a basic video on how UART works at a low level if you have never heard of it before:

{{<youtube "IyGwvGzrqp8">}}

## Materials

First lets wire up the hardware:

You will need 4 things

- Jetson/any laptop with a USB port (laptop is recommended)
- type-c
- [USB to UART converter](https://www.amazon.com/HiLetgo-CP2102-Converter-Adapter-Downloader/dp/B00LODGRV8?crid=2K10NE19DJYMS&dib=eyJ2IjoiMSJ9.7LOjrpNFxmPhGRZZ3kvolMAira4OsO6xYfnqFStomtQbzIrqXeQsm6BC0NI3fjYbRt-Whqg0ssR-dCFBmTTrONIPIEBLel-_lh85Z4CMTziF9gL4dOz_saed6pMNWw9nxJ6EnIWFXwffRjDxX7VlRy7NbsMCjVoN3dUnycTqv0rGjdaFjPfOqBrIPJ-6N5_YBiW4cNVRfrFXBVx3LHQ_M9IXyKtC0iC9nEkuHTa4Ju4.pD_y5RBjUFSqTrt8bcDLeOVA7zfEkch_RnuD_iFiIM0&dib_tag=se&keywords=usb%20to%20uart&qid=1751326690&sprefix=usb%20to%20uart%2Caps%2C183&sr=8-1) (there are may USB to UART boards out there, I recommend this one)

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJFZLRR%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7Qc27wSKD5pLpc5ZD7g93LAs561K7dtH5JVE44b4nlAiAFHjeo8hWmeaZOnic8e8E8BgVvrSRKnDuYHLmv%2F1sFRSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvY81Ea5tQB%2BoYj5LKtwDtERjmmQ8842vU%2Ba8NRnK9a8kYIUNC87op1MYTNACvoAsm0eszMbRHJSz1HQGH%2FOm0rSt03sdW%2BqDROK61iFHIMbArH2JN09%2F%2FyEmWgWF9iPINrzfxOs1lGo%2Fs1sCA3HwFkRJm3yw1ZKvgx2zpBxeassEhXVm9qXo3HhK32OqU6d%2Bkmku8T6sQiiBu9L6ilgddIpDmSFN3%2BtOo%2BxuOKFspYkVoTX9ubNq9Td7TVUgkRie5rwOePKr%2FdVLT4y85M2g54p3otcWZ%2BSL0ayMy37g0apX9yAeHq9xQx6LIcJq4f1oF5%2ByiRV87lQl5NW8MY8r6xS%2B2PW%2FPe5p1%2By83%2Foec7EoyyfVgP51h7GLpYBIif2opUBEeo4XLM2zS%2Br70GuZKH2MS4W5YkA6xDDVSjKsmkvegoppnoHZ8H01OvWpV24oUb8jOFwpVi3vdfRK0SbxcmbPunCUEcw7s3K2YBPgJklrOUtLQ6haq9Tx%2FUvAv%2BUCNfl9xLBAQ269z6F7t6zRG4waxyuFG5dGHNPJOtzIDqBvrebJeJS%2BKfWhYQxvtqiC%2BLf7z5SskfxHOIKf4ZRVy9RfWn1t1TpQ1OljiPpIrwRXJIdDWJXEJUqFvvcIp0CUiQ1wR0cfNW2DfD0w%2BfiVxQY6pgFMfN2YWsLM7FN1toYazlMXr9lrmHo2THgSbcvgAjiXRcI0jCv7nBG4qfowjZ5V1LRilMceFkQb%2Bc%2FJLZoscs%2BmSIOszvkBdhcHgj4zykElenApyPZu0aia3GnX55jW6SNq%2B2i8zRBLq%2FPuZDGksB7YCDLu5qi6HbSh7EhtPoeiYibTyJEeJOEq9yTJoQVyRRRzjZhD8hqCty7S5eO5K3r6Lw6J7FJq&X-Amz-Signature=70dfd9fd056d5572ebeb594aacc58baae7f040ad9a746bf233b68a260ec9e257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K7F6GLR%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKAdAlAMc0A0LQm88k7n%2Fjw5yS3t5WHxwfJ3P9DAuMrAiBHdgAf%2FK81VpqQ7bWMR5%2F0aKal4JllC1EoZ%2F2EWIc1ViqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEhj31hQ0r1Eoq8gpKtwDGoaP%2Bby62QgGfwwTZwPlcal8YlGcZGkCB94gaZikTV2I2aeBZ%2Bwf2FcddqUNAPpWHymR2BoseMZa8nNEzXm4CoU%2Ba4k%2Fz1%2Fw9Ha1phQKqdYlwIRAOSeKJ%2BX0G2M1SkYX39t8eQOsN6a%2FW%2FPKKP9NR%2FMO8qSAcnADdtVVmKiE8kTUeJf9SO3RrGGNssPNxGi6NhFlqTWIszDhpaEesGGO%2Fhst020fTwMIjZ04joM4RTwD2Z2Sa0dQW29b5DgL%2FHBFPHsacPB5TN8oI%2Fo%2B3yvw0r7I3fdJkQKzBur4qFBcUnQcaSEuAbw2HJyoPQiRi3NgH5U2%2BeZ0%2FpPVteanvvJfjPEz7HnTwCjmOBPSe7BslX82ydPY5YhNXubCt2T7r3sikuobxRxLcw2umnLsQT6eZUyMgVQIZQC71SnJ1IUdNgQGmBK1yopeTPnGBqJNE4Kvc3iECtoyxP%2FbpPQB%2FA3OZywN3sHkCK6gfqiu7VP9tzfs7lFgJa%2BkkFSUldJm6BhMX31TM%2FCAeuj45HOIyQsC3z0AYf7uwAgdRKIZHruk4ZgAD%2FPOBMaRxnFh4VbcpDzH5D7kSknX7xIm2J2gYtoDxbd4tvczYp3FGablBc0fnyN4hUFlVvedq%2F9MtO0wsPmVxQY6pgHyTxUA3YL11AsbRkWi0m3H6c%2BGown9PqLpXifJ1uxcbPlw2HxVG24Xe2fs45jb1fp4%2Bqqtyjm8uKmwAhhL7q4vBgNSVH0KniGFfa%2FlNiMAPIlP9Uk163yM%2BnfamLN7Z7h5FZIkPI2dfddn7EzzU%2Fse5y3dTB3phv2TjLs8anzgKdIyrNPCBWJWpslqmWIOTwsMUNkxwfcF%2FuPySNnoakB7YiwUa77T&X-Amz-Signature=be9069ca1ed86907506050b7c859b8aec6f5a045c2d2194f52af4c92139957ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Connect RX of the type-c to the TX/TXD of USB to UART

and TX of the type-c to the RX/RXD of the USB to UART

<details>
  <summary>{{< markdownify >}}Note: TX and TXD??{{< /markdownify >}}</summary>
  
They mean the same thing in this context

TX == TXD

RX == RXD

</details>



<details>
  <summary>{{< markdownify >}}UART1 but its UART2???{{< /markdownify >}}</summary>
  
There are actual 3 different UART ports connected for the type-c

that is why in taproot there are these three in `taproot/src/tap/communication/serial/uart.hpp`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNXCRHA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx4qjEn46%2BhHxhj6bE9Ew4yI8BrNk1aHmmu4esB9%2FmhwIgVBUuigA3JNPPWXANwPfDASfO1q33Z%2FFhcRN0e%2BOBboMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwczvXgW50hixgwTSrcA74qWaHcFHGrH9mZAhtLdt%2B0%2FWVsldzEuhDNUzfyoWURLqZShIHHGwbJUdqL8BWS7CV%2F%2FfO6lTN6G7ROhz6MXH7sf3XCIV73DFRjuBEAdjvoSTTasfppZq2xz%2B5G4hrSjQvuOFZb%2BR0%2FZfF1HS%2BDJgZERTlUHuy76AoRLTZuhudHwSCbarfZwVjh2DygaDX3TaDDR2%2F5LOMSD9QLX%2BeDVRT2BS2vK7jUF2ifDQf%2B7RStdRMxYuHMYB7uUWnu1Hxrz%2B2CUj3RMl9PTHaOJ4pY47TZOmSubWmCapfASsYZL3DNm%2Bpl8ZIoBfjGoiTh6tP0CrT7OOsmaTTe3mvJRSymZrcHzxpYy3a4zDCUqXDwGevc%2BiEdUILHfiAm%2FepwSpFgJGdw3POROOKwpH88uyJkAyV40XD8ZWJQ9wMEUL%2BAxnd6U8n1Af00IFUbbZNdgXjM7HmzFSpaSHVQddrKE5XTw4qtw0ZpD93vqun%2FHLVJPWGRSgGIvdMiNrXvRgIkUEeFGcbY2Yzz9CNkk5u%2BQhqoVFPQlXzWVLLgQKaFs5xjLNkaqn2kjY0BmlGvnmc5zKUOvcwykQE6Z5D%2BLpgmPfb0POa2UbSYguzzbvZtOBf3j26n7qCJken0GFsX1SQRMOH4lcUGOqUBbGUQJ4jg3kznlqeAS0EE4xzFQr05FILc%2BWXz0%2Fhinywg8lY3o9bpzaQEU%2FZR6aL%2FXD13jNFssrO2wnDK3xp%2F6Ay50biB3JfR%2F26XtRDahNMDBQn6kINukXpbeHQT73RvlBwSn4HwzsDCm0QUqwKYUCKFEz1rlJD%2FDOnoIJTlu8zX%2BW5JcS4kuNlzts%2BftII63ilg8QUlW24czfpEeHS0JW5052%2BI&X-Amz-Signature=10242e1696f0bcc773721b847efd26669f0f432efa23a6bdee75835e5197b158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNXCRHA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx4qjEn46%2BhHxhj6bE9Ew4yI8BrNk1aHmmu4esB9%2FmhwIgVBUuigA3JNPPWXANwPfDASfO1q33Z%2FFhcRN0e%2BOBboMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwczvXgW50hixgwTSrcA74qWaHcFHGrH9mZAhtLdt%2B0%2FWVsldzEuhDNUzfyoWURLqZShIHHGwbJUdqL8BWS7CV%2F%2FfO6lTN6G7ROhz6MXH7sf3XCIV73DFRjuBEAdjvoSTTasfppZq2xz%2B5G4hrSjQvuOFZb%2BR0%2FZfF1HS%2BDJgZERTlUHuy76AoRLTZuhudHwSCbarfZwVjh2DygaDX3TaDDR2%2F5LOMSD9QLX%2BeDVRT2BS2vK7jUF2ifDQf%2B7RStdRMxYuHMYB7uUWnu1Hxrz%2B2CUj3RMl9PTHaOJ4pY47TZOmSubWmCapfASsYZL3DNm%2Bpl8ZIoBfjGoiTh6tP0CrT7OOsmaTTe3mvJRSymZrcHzxpYy3a4zDCUqXDwGevc%2BiEdUILHfiAm%2FepwSpFgJGdw3POROOKwpH88uyJkAyV40XD8ZWJQ9wMEUL%2BAxnd6U8n1Af00IFUbbZNdgXjM7HmzFSpaSHVQddrKE5XTw4qtw0ZpD93vqun%2FHLVJPWGRSgGIvdMiNrXvRgIkUEeFGcbY2Yzz9CNkk5u%2BQhqoVFPQlXzWVLLgQKaFs5xjLNkaqn2kjY0BmlGvnmc5zKUOvcwykQE6Z5D%2BLpgmPfb0POa2UbSYguzzbvZtOBf3j26n7qCJken0GFsX1SQRMOH4lcUGOqUBbGUQJ4jg3kznlqeAS0EE4xzFQr05FILc%2BWXz0%2Fhinywg8lY3o9bpzaQEU%2FZR6aL%2FXD13jNFssrO2wnDK3xp%2F6Ay50biB3JfR%2F26XtRDahNMDBQn6kINukXpbeHQT73RvlBwSn4HwzsDCm0QUqwKYUCKFEz1rlJD%2FDOnoIJTlu8zX%2BW5JcS4kuNlzts%2BftII63ilg8QUlW24czfpEeHS0JW5052%2BI&X-Amz-Signature=598823f5cdac050629055ddf8237045f22a173a382371faab8c79344ce61017a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K7F6GLR%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKAdAlAMc0A0LQm88k7n%2Fjw5yS3t5WHxwfJ3P9DAuMrAiBHdgAf%2FK81VpqQ7bWMR5%2F0aKal4JllC1EoZ%2F2EWIc1ViqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEhj31hQ0r1Eoq8gpKtwDGoaP%2Bby62QgGfwwTZwPlcal8YlGcZGkCB94gaZikTV2I2aeBZ%2Bwf2FcddqUNAPpWHymR2BoseMZa8nNEzXm4CoU%2Ba4k%2Fz1%2Fw9Ha1phQKqdYlwIRAOSeKJ%2BX0G2M1SkYX39t8eQOsN6a%2FW%2FPKKP9NR%2FMO8qSAcnADdtVVmKiE8kTUeJf9SO3RrGGNssPNxGi6NhFlqTWIszDhpaEesGGO%2Fhst020fTwMIjZ04joM4RTwD2Z2Sa0dQW29b5DgL%2FHBFPHsacPB5TN8oI%2Fo%2B3yvw0r7I3fdJkQKzBur4qFBcUnQcaSEuAbw2HJyoPQiRi3NgH5U2%2BeZ0%2FpPVteanvvJfjPEz7HnTwCjmOBPSe7BslX82ydPY5YhNXubCt2T7r3sikuobxRxLcw2umnLsQT6eZUyMgVQIZQC71SnJ1IUdNgQGmBK1yopeTPnGBqJNE4Kvc3iECtoyxP%2FbpPQB%2FA3OZywN3sHkCK6gfqiu7VP9tzfs7lFgJa%2BkkFSUldJm6BhMX31TM%2FCAeuj45HOIyQsC3z0AYf7uwAgdRKIZHruk4ZgAD%2FPOBMaRxnFh4VbcpDzH5D7kSknX7xIm2J2gYtoDxbd4tvczYp3FGablBc0fnyN4hUFlVvedq%2F9MtO0wsPmVxQY6pgHyTxUA3YL11AsbRkWi0m3H6c%2BGown9PqLpXifJ1uxcbPlw2HxVG24Xe2fs45jb1fp4%2Bqqtyjm8uKmwAhhL7q4vBgNSVH0KniGFfa%2FlNiMAPIlP9Uk163yM%2BnfamLN7Z7h5FZIkPI2dfddn7EzzU%2Fse5y3dTB3phv2TjLs8anzgKdIyrNPCBWJWpslqmWIOTwsMUNkxwfcF%2FuPySNnoakB7YiwUa77T&X-Amz-Signature=540084fc930f44afbc917a306acc9c8c5737a6c606e1cc7bd4be4f93320a1079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## NOTE: MAKE SURE RX → TXD and TX → RXD (they must be “flipped”)

<details>
  <summary>{{< markdownify >}}Why flipped?{{< /markdownify >}}</summary>
  
TX stands for transfer and RX stands for receive.

you want the transfer pin off the USB to UART to go into the receive pin of the type-c and vice versa

</details>



Finally plug the USB to UART board into your laptop or Jetson

## Software

We will first code the laptop/jetson side in python

### UART settings

the settings the type-c in taproot uses are in this table below:

| **Settings**         | **Value**    |
| -------------------- | ------------ |
| baud rate (bits/sec) | 115200       |
| byte size            | 8            |
| parity               | None         |
| stop bits            | one stop bit |

**NOTE: the bytes are sent in little endian**

### Jetson code

install the [pyserial](https://pyserial.readthedocs.io/en/latest/shortintro.html) library with `pip` to be able to send UART messages on your computer

```bash
pip install pyserial
```

If you have any questions below is the pyserial API 

**Official pyserial API:** [**https://pyserial.readthedocs.io/en/latest/shortintro.html**](https://pyserial.readthedocs.io/en/latest/shortintro.html)

Otherwise let us write a simple script to send a message over to the type-c

First find the port on linux the USB has been connected to by typing this command

```bash
ls /dev/tty*
```

you should get a list of files saying `/dev/tty`, `/dev/tty0`, `/dev/tty1`...

Looking for something close to `/dev/ttyUSB0` or `/dev/ttyUSB1`. (In my case it was `/dev/ttyUSB0`)

To make sure that is the correct file/port unplug the USB to UART cable and run `ls /dev/tty*` again to check if it disappears and reconnect and run the command to see if it reapppears.

Next write this python script and for the argument for `serial.Serial()` put the port you USB to UART device appeared as

```bash
import serial

ser = serial.Serial()                   # inits serial object
ser.port = '/dev/ttyUSB0'               # selects the port
ser.baudrate = 115200                   # set baudrate
ser.bytesize = serial.EIGHTBITS         # set byte size
ser.parity = serial.PARITY_NONE         # set parity bit
ser.stopbits = serial.STOPBITS_ONE      # set stop bit
ser.open()                              # opens the serial port
ser.write(b'hello')                     # write a string
ser.close()                             # close port
```

> Note we applied the settings from [here](/223da3bc629780a48291ecdfafcf7da0)

<details>
  <summary>{{< markdownify >}}Note: type-c max baud rate{{< /markdownify >}}</summary>
  
according to ARUW the type-c can’t handle the max baud rate of the USB to UART chip (921,600) when using both RX and TX due to impedance.

this is why ARUW runs with separate UART ports each with one RX and one TX.

</details>



this script should just send the bytes `hello` on to the wire or exactly the bytes 0x68, 0x65, 0x6C, 0x6C, 0x6F.

| h    | e    | l    | l    | o    |
| ---- | ---- | ---- | ---- | ---- |
| 0x68 | 0x65 | 0x6C | 0x6C | 0x6F |

run the program and you should see the TXD led flash on the USB to UART board this just shows the actual 1s and 0s being sent on to the wire proving messages are being sent from the laptop/Jetson. 

> NOTE: this is a good debugging tool to check if stuff is being sent.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K7F6GLR%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKAdAlAMc0A0LQm88k7n%2Fjw5yS3t5WHxwfJ3P9DAuMrAiBHdgAf%2FK81VpqQ7bWMR5%2F0aKal4JllC1EoZ%2F2EWIc1ViqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEhj31hQ0r1Eoq8gpKtwDGoaP%2Bby62QgGfwwTZwPlcal8YlGcZGkCB94gaZikTV2I2aeBZ%2Bwf2FcddqUNAPpWHymR2BoseMZa8nNEzXm4CoU%2Ba4k%2Fz1%2Fw9Ha1phQKqdYlwIRAOSeKJ%2BX0G2M1SkYX39t8eQOsN6a%2FW%2FPKKP9NR%2FMO8qSAcnADdtVVmKiE8kTUeJf9SO3RrGGNssPNxGi6NhFlqTWIszDhpaEesGGO%2Fhst020fTwMIjZ04joM4RTwD2Z2Sa0dQW29b5DgL%2FHBFPHsacPB5TN8oI%2Fo%2B3yvw0r7I3fdJkQKzBur4qFBcUnQcaSEuAbw2HJyoPQiRi3NgH5U2%2BeZ0%2FpPVteanvvJfjPEz7HnTwCjmOBPSe7BslX82ydPY5YhNXubCt2T7r3sikuobxRxLcw2umnLsQT6eZUyMgVQIZQC71SnJ1IUdNgQGmBK1yopeTPnGBqJNE4Kvc3iECtoyxP%2FbpPQB%2FA3OZywN3sHkCK6gfqiu7VP9tzfs7lFgJa%2BkkFSUldJm6BhMX31TM%2FCAeuj45HOIyQsC3z0AYf7uwAgdRKIZHruk4ZgAD%2FPOBMaRxnFh4VbcpDzH5D7kSknX7xIm2J2gYtoDxbd4tvczYp3FGablBc0fnyN4hUFlVvedq%2F9MtO0wsPmVxQY6pgHyTxUA3YL11AsbRkWi0m3H6c%2BGown9PqLpXifJ1uxcbPlw2HxVG24Xe2fs45jb1fp4%2Bqqtyjm8uKmwAhhL7q4vBgNSVH0KniGFfa%2FlNiMAPIlP9Uk163yM%2BnfamLN7Z7h5FZIkPI2dfddn7EzzU%2Fse5y3dTB3phv2TjLs8anzgKdIyrNPCBWJWpslqmWIOTwsMUNkxwfcF%2FuPySNnoakB7YiwUa77T&X-Amz-Signature=9c1e4d67f009cc1feb3c3a1cd869f34503091eb029f2f98ba9323340e05beb6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677W5CCZW%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDr6weta6mjrNPifA1%2FWcZjLCnni0aHVtkK%2B1HKRl3FMAiB5ZibyZIX8%2BBL6ufl%2BQ7uJJcbxhHvfLj5DjYDUg3mL0iqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2qDLIax6kJGzP4F0KtwDUytidW6B%2B2ijqJwpM0w2%2Bbbz6TNZr5g%2FprfENWLBk4jkJqj9s3BCbR2sUCVowIFs8leRi3H0M47YYhSaspGNlAQWYRInnSq5FoCLBBoW%2Fb6sH352p8eD%2BcbTscK%2FJFiepLQ01F47ueNFr2ck6aSbgv%2BnpKswrtyWMhE2WcR6IVbPDsR6qXwMQYUDoOtf9lz4e%2BFxVbUeuy2TCotIuijXAv7y1jTtN8g7XsVBy9n4hIo2pVlRd7h79o4yYwpvMakNvNSHDxz9I8nEgDRMVe5inedY%2B2KV6Vhdg8osnh%2BnO9RpCpVPX8KyTNfw9vY0JB9feJ9oyl4sIqqtrRNbutjRCXB0lSGESE32JER6TKjZO1O3%2BTxSN1U8oM7GV1eGPp1TN7VFvPkM2LO9W2acf%2FIy0VqE2llXjD6OQg6bdXMwQXdBTNNeAtSBMCadDAtwaYBLrEu8J9W0ueiOQzabBcJg%2BPpYft0l83QQAvZmRhi5NktGeb4KUZp1dM%2FxLcrR4Q6D5KQrcc%2B5H5E%2FgRaFGJfpZuXsJH1Cn%2FvoMQhuy7v%2ByhrI%2FAfLp7Ll95dG%2BJ5IXhtJnF7QpC9ZblxBohiV98MOF5haCW6cpGOGQGa%2Bqn7GbpBtdE9TLYLFZvGsrLQwxPeVxQY6pgExt48qWUVR7AeTJIUN3ZStGqs51S2Bf1rUI9OMMDEklDueIyS9QoXoR0HLrBcPg8WjIAB0ATidhUsgZj6rdtvp3lMVw4tgfiNlhJPBY0CKh3oLahm3gFXGThYzzQqhH62QZiDanX%2BI9zYe%2Fp%2BoFTP3kQudj%2FJuN3ebuPmUiYHgkthogj6sEZZcvlHl4zQ0mZY94SncQZf5jIY57JxkY2ZCO7WTzsM4&X-Amz-Signature=e25ed4b05296027dc5bc15aee0a23a9d16334db2e70115f13103d8c59e122c7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



### Type-c code

let us make every time we receive a message we flash the led

```cpp
#include "tap/board/board.hpp"  // import board specific settings

#include "drivers_singleton.hpp"  // import taproot

int main() {
    src::Drivers* drivers = src::DoNotUse_getDrivers();  // get the driver object
    Board::initialize();                                 // initialize the whole board

    const tap::communication::serial::Uart::UartPort port = tap::communication::serial::Uart::UartPort::Uart1;
    drivers->uart.init<port, 115200>();
    drivers->leds.init();  // initialize the led

    while (true) {

        uint8_t buff[5];                    // buffer to store the msg
        int read_len = drivers->uart.read(  // read the msg in from uart RX queue
            port,                           // port to read from
            buff,                           // where to store the msg
            5                               // read five bytes
        );

        char* msg = (char*)buff;  // cast the raw bytes(uint8_t) into a string

        // check if read in msg contains the string "hello"
        if (read_len != 0 && strncmp(msg, "hello", 5) == 0) {
            drivers->leds.set(tap::gpio::Leds::Red, true);  // Turn On LED
            modm::delay_ms(500);                            // sleep
        }
        drivers->leds.set(tap::gpio::Leds::Red, false);  // Turn On LED
        modm::delay_ms(500);                             // sleep
    }
}
```

compile and flash the code to the type-c and every time you run the python program on your laptop/Jetson the type-c 

If you would like to check you can check each byte of buff (`buff[0]` , `buff[1]` , …) matches with the [hello table](/223da3bc629780a48291ecdfafcf7da0) above.

### sending 2 floats

Let us now modify our code to send two floats over

```python "2-2","12-12","14-14"
import serial
import struct

ser = serial.Serial()                   # inits serial object
ser.port = '/dev/ttyUSB0'               # selects the port
ser.baudrate = 115200 # set baudrate
ser.bytesize = serial.EIGHTBITS # set byte size
ser.parity = serial.PARITY_NONE # set parity bit
ser.stopbits = serial.STOPBITS_ONE # set stop bit
ser.open()

msg = struct.pack('<ff', 69.0, 420.0) # turns the floats into bytes in litte-endian

ser.write(msg)          # write two floats
ser.close()             # close port

```

to turn floats into bytes we will use the struct library

**struct API:** [https://docs.python.org/3/library/struct.html](https://docs.python.org/3/library/struct.html)

> Note: we use little endian because ARM and most communication protocols use little endian

```cpp "5-8","19-19","20-20","24-24","27-28","31-31"
#include "tap/board/board.hpp"  // import board specific settings

#include "drivers_singleton.hpp"  // import taproot

struct msg_format {  // creating  struct to received data
    float x;
    float y;
};

int main() {
    src::Drivers* drivers = src::DoNotUse_getDrivers();  // get the driver object
    Board::initialize();                                 // initialize the whole board

    const tap::communication::serial::Uart::UartPort port = tap::communication::serial::Uart::UartPort::Uart1;
    drivers->uart.init<port, 115200>();
    drivers->leds.init();  // initialize the led

    while (true) {
        int msg_size = sizeof(msg_format);
        uint8_t buff[msg_size];             // buffer to store the msg
        int read_len = drivers->uart.read(  // read the msg in from uart RX queue
            port,                           // port to read from
            buff,                           // where to store the msg
            msg_size                        // read five bytes
        );

        msg_format msg;                // where to store the msg
        memcpy(&msg, buff, msg_size);  // copy raw bytes into msg_format struct

        // check if read in msg contains the string "hello"
        if (read_len != 0 && msg.x == 69.0 && msg.y == 420.0) {
            drivers->leds.set(tap::gpio::Leds::Red, true);  // Turn On LED
            modm::delay_ms(500);                            // sleep
        }
        drivers->leds.set(tap::gpio::Leds::Red, false);  // Turn On LED
        modm::delay_ms(500);                             // sleep
    }
}
```

##  🎉CONGRATS!! YOU HAVE WORKING UART 🎉

---

At this point you can stop reading the guide and just use this setup. 

However, there is a much safer and elegant way taproot provides for UART communication this next section goes over.

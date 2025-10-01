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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653BDX64O%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCpNen8%2B%2BIC76BJSSplEsGOwq8kMPKVNByBTptqz8RZsQIhAMV09qSGX77dZaLknGqVv8jWa0NC%2BKKF%2FvjUGwBlIfC5KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdlgB2u9oPJZmH6U4q3ANeJHcrJJBV1PgRQjcQMbNWdwDFakePuXH51Bqf%2F5ji9wwr3%2B51NcnXQkydzcGILO13mO0esB0%2Fy9z%2Fmg0w7rIC28MneDhXh8u7IyX7UKG%2FBD9OU%2FpZQ7MTm35Irco0O3HQCoTLiBTGiqsRJMGabChvHHwJPySdgCmg42PBIi0BjCYlZ8pLt%2B4BIyUhQPe92GEvJAEybz%2Bxvo5qxWEvxkB3TTXS13XR4HTKtUV8uohGe7jt%2Bxzju7mFhbqrxijYNzpETUrVx3WsGV8T%2FHl%2B%2FFNy89TZd36raQuMklrP%2BXNB3LTjBdH9BVlcZ2fbJgLM609QCuHRwPGfJfyL%2FMYZQPzr5qIKcjCxORYgGJ91Ba6lr1NOM87KxfkRCXRWLg264G78OLyfOSCpBx1m3tV3WPQoS2hyygAu2tF7MVPaLGmq32a8e0tRFo4%2BCT%2BVPMRizUZjZ%2BoiriVi4WG2SLRD1DjC81jlcR%2FCZPPxwmcfnIgbSGCOITJQJWRBGmJRyyFZnUM7rGicYURdVX0avHYwAdrE9f7s54XvG%2BKz0dMvEe5ho46wvfVllNo7npRFzuC5suOuylkruDgRRVuQdTBCwgEfZ4YxSR6D2uowexgZdIwLcfogafwYZCkZCtBmKDD%2BiPLGBjqkAf54%2BDUe2VEnSTIXWiabFVI1BZT7hXkHYAvDJbpKhwbjV9thHqOJoc%2B14T4DRBAP%2BmtdKYlual8owTDti5bY2F6ffannlI1S7IaCLZUgqbxJ2WlpLcKPAR6%2FYj97m1hOZHkIUl3P%2FO8Hv%2FjNha5AxspD5HrbgYnAFRx6e9dYVX0tAALzmyivn%2FV0ZAMxbyzPYy6tc8rcvEeZha4comseIOMtLUMK&X-Amz-Signature=6320629ae2f574319531a89b6af169df582f384bc56611b85200940c363d05fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2YREKA7%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIF5fiFkSghqtBy3J3t09ZTZ4r1MiRxxPCnPVAsy903GOAiEAnSTJODdHzyZ44m6UUjupFPSqgQYEixCFWaOwf1t4kEwqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuSYXLYAyEbyW7%2BsircAwdlvsO1%2BtbZth8YpuyKFy6h6342C%2FS5A8F0ILKgS2KB8ylNDg3HMF7n0gLCyxAFN1reHWVtWVmuUVPsX28ZwwDSfcxyeZlyngYVsrF8pZ93cj01PpM%2FzQXaL8GAS0r0%2FyZGwT%2F6lNfjeQwmP%2BSQF7mHU6LyAA5r1Uirvuv5SS6iieycMn9SLDwLyM9BmiuO8ED2bgy7lvkchrpWyR1mu2tL64U5FVmbNtI21P%2BFI%2FE1aI05bvAlAkg0SB41wEHVxdaV03vcu4FBqLas6vbowe6sFU3xRKWxxsbbDeUOo87R%2BLuVr1Y1BE8NbniIt0nbJ5Hsf%2B3Bf%2BhjCLHooewNMjlEHq5WsRlHnrfD8Nl1NqEEUxMNTCCZIFEuc7ghabX%2FY5yfN4SwEqR%2BPIBwayQiitR2PqT%2FE5qjqhoUl3DjEWq4jMBikfX7k8JDGtYBUIC9xRLrKE3HVHo6KIv%2F3vmeowmKuhtqLpAiUmhXsKOBBGnWs3sraX34p9NekjczHGRelbulS9eT7y4oq7n4qzGPMsdzMWzH9A%2BaqJ7xdxOTDBdULUvJLxYuqj0VDkhv4v6m7u%2FwjbA%2F9ykCceZtFDMvY0C9NTQ9oPOhCAMttE2WTumMjlJrX4hjKzlxaUFEMOqI8sYGOqUBpnXZw1Tnpsyt4aCngfmY9giBYJB1j9Qy%2FpngKexyhR3ims6yXH44jGhntgrsLCB5Aix5EDLo42VDDufR8DUR3hY3tLt797XG3PnAoqc6GW0YO%2FA4%2BEBAWT1NxN37%2Fwd6pIzd6lVPYzpRaJ9%2FabmGBf4XiECgZA0nq%2FmCOmrbxr4nem9%2BVBbW8yV4vTNVfqLmV36RjSVvcsgPeuUyOA4a%2BTFSVR8j&X-Amz-Signature=433fc9ad1d5ddc0d31fcb0551480b3a89f895d4c19fe49da8f25a9a5920287eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZQQYLMS%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCp9rUzjUpglepf%2F%2Bgyn%2FfuYApSlQtSONX7L9RTL7IwwgIgf%2BGIys1VoMgh5ncWxUkvI6AVhlEUpTaH%2FhXb9bnyYlEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4NpR0Tp33R%2FdtWfCrcA%2FtRriDSR%2B%2BFR14%2BkESQOv6T75%2FK7cTwQ2z4lLMsMudAUNk%2FudGrpC3x2yulLuKvNAgND8KSazvM2z8BUie4vqAfL5UwqBi77YSMox5jYwi4jTiACV%2F%2F%2FcrQCK8qHSVs2ypy4WXnuOXZntbJMR8mLorFD5VAPWX3LTSJLW8cJ0W7uYfyy7dX%2FiCj4xxS%2FNIeK8lz1Cpw1LuMHl6PmMWMdGW4%2BnyWgt%2FNZI9Z%2FAip9hANNVNG%2FfqJJDISuV8NsnffMBLRM9vQQrL78zL%2Be4s7STeOYEctstuilwGslE1rYkcOF1PgqqSaws8PYV4jCiQh7nQYzIyfZFw%2FY966i06wum%2F0aiMkKNwuPpVtmoJpv6H%2FHtKgiGBt%2B32MxOkBZRPpqP%2BAxw5WNDKj2%2BYJPay%2F4ya8Q4e965bdjH1z4fkMNe0UCOV90FDP7pAm%2FYOMpNSUZA0by%2B65zYWiMxk%2BLYXcXJtDm6GIf7y0sT4mEFoMw1HAEKL8MuerGi8xyIGbWD3YFNprxVkMWmDesppij7SV7cRxV56BRVvQ9r%2Fr79shKboX%2BHOzdzRu%2BllNO7EkmL5%2BgN2i5o%2BSATRsZQMT6G4sU%2BGhrNri1KdnYHDtx6xf%2BlCaYzafNznebVXljftoMP6I8sYGOqUB6yWHNLmFpmSBnokhKUqu0ZRpK2gfkAVesun%2Bjsq6ZYkoiFaDZEF7rzyIcmZXeDn%2BLdhizuK0sj%2FRZTAuViMh2ynL53VGi4T8CiVUPXXjz%2BqL5E27AmN7E8cfRJRVx9JSW5r5%2BXuWDNy4k%2BcgOvandHI%2BJLgntg12bDHpECPxTXMnMerPLrax7OIRJU%2BYnNLM68eCbDBCW7pDWXUM27BEeG0bf9JJ&X-Amz-Signature=ae8c7b247bc0df9b29f25e3e1c02ceab51dd4c1a75296c446c7c9663f47591c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZQQYLMS%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCp9rUzjUpglepf%2F%2Bgyn%2FfuYApSlQtSONX7L9RTL7IwwgIgf%2BGIys1VoMgh5ncWxUkvI6AVhlEUpTaH%2FhXb9bnyYlEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4NpR0Tp33R%2FdtWfCrcA%2FtRriDSR%2B%2BFR14%2BkESQOv6T75%2FK7cTwQ2z4lLMsMudAUNk%2FudGrpC3x2yulLuKvNAgND8KSazvM2z8BUie4vqAfL5UwqBi77YSMox5jYwi4jTiACV%2F%2F%2FcrQCK8qHSVs2ypy4WXnuOXZntbJMR8mLorFD5VAPWX3LTSJLW8cJ0W7uYfyy7dX%2FiCj4xxS%2FNIeK8lz1Cpw1LuMHl6PmMWMdGW4%2BnyWgt%2FNZI9Z%2FAip9hANNVNG%2FfqJJDISuV8NsnffMBLRM9vQQrL78zL%2Be4s7STeOYEctstuilwGslE1rYkcOF1PgqqSaws8PYV4jCiQh7nQYzIyfZFw%2FY966i06wum%2F0aiMkKNwuPpVtmoJpv6H%2FHtKgiGBt%2B32MxOkBZRPpqP%2BAxw5WNDKj2%2BYJPay%2F4ya8Q4e965bdjH1z4fkMNe0UCOV90FDP7pAm%2FYOMpNSUZA0by%2B65zYWiMxk%2BLYXcXJtDm6GIf7y0sT4mEFoMw1HAEKL8MuerGi8xyIGbWD3YFNprxVkMWmDesppij7SV7cRxV56BRVvQ9r%2Fr79shKboX%2BHOzdzRu%2BllNO7EkmL5%2BgN2i5o%2BSATRsZQMT6G4sU%2BGhrNri1KdnYHDtx6xf%2BlCaYzafNznebVXljftoMP6I8sYGOqUB6yWHNLmFpmSBnokhKUqu0ZRpK2gfkAVesun%2Bjsq6ZYkoiFaDZEF7rzyIcmZXeDn%2BLdhizuK0sj%2FRZTAuViMh2ynL53VGi4T8CiVUPXXjz%2BqL5E27AmN7E8cfRJRVx9JSW5r5%2BXuWDNy4k%2BcgOvandHI%2BJLgntg12bDHpECPxTXMnMerPLrax7OIRJU%2BYnNLM68eCbDBCW7pDWXUM27BEeG0bf9JJ&X-Amz-Signature=10b06f350433052c18eae1b1109fddd08d8cb058807fb36ec68ce0953d16b5d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2YREKA7%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIF5fiFkSghqtBy3J3t09ZTZ4r1MiRxxPCnPVAsy903GOAiEAnSTJODdHzyZ44m6UUjupFPSqgQYEixCFWaOwf1t4kEwqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuSYXLYAyEbyW7%2BsircAwdlvsO1%2BtbZth8YpuyKFy6h6342C%2FS5A8F0ILKgS2KB8ylNDg3HMF7n0gLCyxAFN1reHWVtWVmuUVPsX28ZwwDSfcxyeZlyngYVsrF8pZ93cj01PpM%2FzQXaL8GAS0r0%2FyZGwT%2F6lNfjeQwmP%2BSQF7mHU6LyAA5r1Uirvuv5SS6iieycMn9SLDwLyM9BmiuO8ED2bgy7lvkchrpWyR1mu2tL64U5FVmbNtI21P%2BFI%2FE1aI05bvAlAkg0SB41wEHVxdaV03vcu4FBqLas6vbowe6sFU3xRKWxxsbbDeUOo87R%2BLuVr1Y1BE8NbniIt0nbJ5Hsf%2B3Bf%2BhjCLHooewNMjlEHq5WsRlHnrfD8Nl1NqEEUxMNTCCZIFEuc7ghabX%2FY5yfN4SwEqR%2BPIBwayQiitR2PqT%2FE5qjqhoUl3DjEWq4jMBikfX7k8JDGtYBUIC9xRLrKE3HVHo6KIv%2F3vmeowmKuhtqLpAiUmhXsKOBBGnWs3sraX34p9NekjczHGRelbulS9eT7y4oq7n4qzGPMsdzMWzH9A%2BaqJ7xdxOTDBdULUvJLxYuqj0VDkhv4v6m7u%2FwjbA%2F9ykCceZtFDMvY0C9NTQ9oPOhCAMttE2WTumMjlJrX4hjKzlxaUFEMOqI8sYGOqUBpnXZw1Tnpsyt4aCngfmY9giBYJB1j9Qy%2FpngKexyhR3ims6yXH44jGhntgrsLCB5Aix5EDLo42VDDufR8DUR3hY3tLt797XG3PnAoqc6GW0YO%2FA4%2BEBAWT1NxN37%2Fwd6pIzd6lVPYzpRaJ9%2FabmGBf4XiECgZA0nq%2FmCOmrbxr4nem9%2BVBbW8yV4vTNVfqLmV36RjSVvcsgPeuUyOA4a%2BTFSVR8j&X-Amz-Signature=eecdd2837dd7641d1e11556d09328d8e06d5c83b5e7f3560f61bd35844b8c45b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2YREKA7%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIF5fiFkSghqtBy3J3t09ZTZ4r1MiRxxPCnPVAsy903GOAiEAnSTJODdHzyZ44m6UUjupFPSqgQYEixCFWaOwf1t4kEwqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuSYXLYAyEbyW7%2BsircAwdlvsO1%2BtbZth8YpuyKFy6h6342C%2FS5A8F0ILKgS2KB8ylNDg3HMF7n0gLCyxAFN1reHWVtWVmuUVPsX28ZwwDSfcxyeZlyngYVsrF8pZ93cj01PpM%2FzQXaL8GAS0r0%2FyZGwT%2F6lNfjeQwmP%2BSQF7mHU6LyAA5r1Uirvuv5SS6iieycMn9SLDwLyM9BmiuO8ED2bgy7lvkchrpWyR1mu2tL64U5FVmbNtI21P%2BFI%2FE1aI05bvAlAkg0SB41wEHVxdaV03vcu4FBqLas6vbowe6sFU3xRKWxxsbbDeUOo87R%2BLuVr1Y1BE8NbniIt0nbJ5Hsf%2B3Bf%2BhjCLHooewNMjlEHq5WsRlHnrfD8Nl1NqEEUxMNTCCZIFEuc7ghabX%2FY5yfN4SwEqR%2BPIBwayQiitR2PqT%2FE5qjqhoUl3DjEWq4jMBikfX7k8JDGtYBUIC9xRLrKE3HVHo6KIv%2F3vmeowmKuhtqLpAiUmhXsKOBBGnWs3sraX34p9NekjczHGRelbulS9eT7y4oq7n4qzGPMsdzMWzH9A%2BaqJ7xdxOTDBdULUvJLxYuqj0VDkhv4v6m7u%2FwjbA%2F9ykCceZtFDMvY0C9NTQ9oPOhCAMttE2WTumMjlJrX4hjKzlxaUFEMOqI8sYGOqUBpnXZw1Tnpsyt4aCngfmY9giBYJB1j9Qy%2FpngKexyhR3ims6yXH44jGhntgrsLCB5Aix5EDLo42VDDufR8DUR3hY3tLt797XG3PnAoqc6GW0YO%2FA4%2BEBAWT1NxN37%2Fwd6pIzd6lVPYzpRaJ9%2FabmGBf4XiECgZA0nq%2FmCOmrbxr4nem9%2BVBbW8yV4vTNVfqLmV36RjSVvcsgPeuUyOA4a%2BTFSVR8j&X-Amz-Signature=cf95a54f6ac322510cc256148283d148e6239a0ab8dcd61d5cf08c37dd844b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V42ZBJXH%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFsW8zfzEBO2EWarwO9u1ZgO0REO9KiT5S26kbDpTfZ0AiA%2FpKFLI7m8tYOVb0%2FJZTUPWIU%2Bb8hK63azrDtfaB8WdiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnL4r5TKZ%2Fh4HJ6HsKtwDIeO%2FPexpM%2BrgY3A%2BCLwZROHrcddwSu5M2stXXZYJmZJLJ7HKoD7GkTGZ5cpgUIJXhVokfH8RaJQpKR8D8m57FMGc5AMhWUXKOkXr7Lj2%2BpjrvNof3rckOa8OpkxFhYfnBXg2YNixs6yBjnoBJ0%2FiVBAuya81DTjhYP2WkViLXMeY6Al2eBO0T%2BhEGE4Le9apDBUJ4PSuS8OQzbST3v2%2BIvnYp6rlSgP7%2BNx3VO2omNG9Jg%2FIrdSYqfaEaDfIFjOVSMh2DG40cxXFnAKIAc7fmM8UEe%2FwLv1J%2BH5LizFUjPjoI827B5fGGulq%2F6%2B1oDgOCOdVkBEoxah808Khpeg3zBZlvyBNqg7R8H1WRuh49SOlAw8uo%2BDtr%2BANIqXNEEh3s6A7K8%2FF92xd5Q6d3d4pzFucGbX9RjcjvU31%2BXeVUotwf0%2FBRBMTtfHsyUKp684hy8pH43gglrRVZ1ofoqD3h%2FQDv%2F5PnEhPnf1LT502GmxjVIHS6kxlxvf5vmXP3B3yrAELFGu0ksyS9zvARGFBT3%2FN6aY0HkgFWsezNryfj5Kyc9afUE9TL4vSEhGLSK25i75fsX1NKAtE9ud92O87hQurf1X4VgR6B0JZgC2Lu0pFn2VG4%2B2t1%2BqlqLQw1ojyxgY6pgHFS9jZgpm4gFTTBKfC1ik2spfiU8FevSzgyC0oOzVag6MeXeFQscc%2BqCiw7jVbEcWOv%2B0Q82jKJ8P5rWCOk3Kl%2FG86O4e4SlU3fw1vmV1WP%2BjqqDpmVeW3GZOJsRysHGoQsuwGlu703zO6Q9gKIUt206f3YzbDveNMhGOnV2DpCY8iG7wCV00KvdCAE8dniRoVDXcq7s163GPb5ZPU6iW3Xsi2m2NB&X-Amz-Signature=1506db94c6bc59f48395088cbc2a08640367acfedd7529751e21471a1f15f489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

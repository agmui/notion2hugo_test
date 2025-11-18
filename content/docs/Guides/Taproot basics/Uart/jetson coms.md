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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647A33IGZ%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FHJZW2APiHhyC%2BbFf7SjUsdEbvlyIQ92r8UD7wX5GpAiATlDeJzbGQmkQ7kJq9N6PB6quOfvUrW0Uhkcgi%2BI8VsSqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOeoKPH3Wzir42pyVKtwDtV0WhOkj49EtKcY7YWjKHf4fHh%2BAm5ViVsLDVB%2Bt%2BWRTI924HyS2ysrdAadQZwm4WgX3CntIjB%2FTMRzvPW7y3bwB2iUHXxwkSsnk85qg5K0O2NhiAR7a%2Fl0Q0RJ1AkULeANx6%2FnDSBemxiGM976PGJc%2F4RIxxB%2BlIEAUKfO6RoYQ%2FmMnyLvdCie931VliZEPFG%2FrabJes8a%2F%2BBI9AO8b%2FLJs%2BPX%2BZmm%2F4kZEiPd%2BC6jF6467gQM4%2BL5dp7j2AHLBzZdcLZ0r02GOJJd05eE5S3KWNJ7HYRzyAb1MI5DWQ8n2PtW5TaDQ0ISJCCzTej0CGbjUS%2Bg384gbx9ZaT%2B4a4EDKB5k5JbzbLXxaorIA7k5F%2FO%2FWpP27qN13Vtg2fP8yzZ3hILHb9hxM2Y44p6PP9ldKo0wvbwRNSCk3Qd0T2JsTdAztwgIXkHEAnK7DqACLGsdMwUzzFjpDNicdiPklSpXmW5EfMGdoef4jk4MVRuWuWF5XkRiaL%2BN%2BiTnfTzj%2FSozDr8ENVe%2Byb6KBg2aGe3ck9xRdy6kxiyQWQA91%2B87ou3UaI%2B0BnDkQbp8UiDJ7K0LvvU2sYuEyCQxlVGCcx3VeIPsi2JN93VmJTXlE%2FioXqmkyWCaL7ms8Qr0wv5jvyAY6pgESCdYu2JDXGS2lBI1WkCKLnsldja2K%2Fhs7idWj5bWYEKXLgJNTzeit01GTSgeC9c1lsyhGhIqyiJtdFBaM2btPIhK4d0ftDQdMcqZR5YkgfI%2B6EE62BUBdbhwn8Ymyimfx7q2cr%2BrvJdRAbehDEH4WIOPEF7U52eh7IWKIxFXU4hZTkoxL7T2N8%2BNWKJBPs4GVWQ4g4Jj6HvTwytmW0VTpPbMGi1Ni&X-Amz-Signature=deba8522af67bd3354d12d99b9c3c1f1c75249f5593fcd3d1b2bbc0d843d1f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L2LL5B3%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6mQnpxrRQcyZi54bPU0NVNFM5NdID3EK68igCqSy2BAiEAgx%2FnWoPGohFfop8f4uMF77Qo7rEyqoy%2BnrtNE5Ga0wkqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjVIiuEEePy%2BHusDyrcA1aQZOK8Oqn2zC6sHE6o1NPLw8ewKR2inF0984B5vMPRZuliNEMWH7mvPtIl0GwiTJEuRGsxIVP4NsWti2Hk7R599sxJwmLodCbdL9g9QPB3%2FWIvJPEkDTsh739TO%2BqX%2BpJ7sUCMAhULhAohtuKaPlYoApLNuAXz8g9uiREvyAoq4ia5BMgcbDYOdREXBFBlLXL1q94r8RXybnWHDY%2BbY5T1k4EdQoZbu95hDksz3AeXhYjXIgdiHj5ihIGkg3HLXkEBacYNogGqxvcK6eZ2zec56z6s8%2FnHKd8nguXwcf2Kde2B1ycIEeZNFELI6F0zqyRbfAeKRJyPzXcxjKMElY21sn04Bh0Cr4%2Fn2EPXboExgfrY2jQykirW6z6ILDIHBwhX4nQEQNrSHxK34uZ%2BeI2jf%2BcPcTwOuzULhzBBy3gRirM%2FRYBYOWlPiV4mcvsnxibb1iXVVhHppiZHDP5pkiNJ%2BdVq7QiZQbXZAw4qE5qlOxMDwRqfk%2BsHdeaxirt2zxqOTTMmUhttEzVEO7k1bqhE3CiytqYHCGGiJvEGjs9qedUrPoO%2FhKVy34sGDc3mmTyMMvDH50BpN0vaHAicAED%2Bon01kfeblqwr1D9cpsWqVurj8Oz16GdZrXImMP%2BY78gGOqUBS636legne0CAEGYYIXKgNnePsjMRWFCYYY15YTVfxRwbs7KmmBlK5aCHPzDsH4ga7q9st41EfmNCX3v1WxXNroUNjC9uVaK9B6bTX50nFh%2B1CBV%2B2zkWcqN6iBVpZhco3BJZZBAQxTBE%2FaO%2FGNLVG5CFzj7wwiWgXa0Sm9z80t6orw8YjUft9xfmbGmR8jiLp5WtHHIUrTITMj%2FwKzrF8E4l5S1O&X-Amz-Signature=0d92eb6b06f95f825016b8386a68facc55d2a7ab10a083065000b40471a76714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4TEZG2V%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwCBPdw7CtyPyBhWpoGM5tTmIZlIBed5YF0JKi6SjmlAiAu47rAoC8x5AP06eIeHslBj2clEff9e3W1OunHd37aPiqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM95Te8Mn1nFMUZW9eKtwDqFGHTkcUQSIBRysAjoEKP2pdMw5wCSriH2yJEXHE80yoLZG950v7kAzWX%2F3GQlRZC%2BxKOwuAvloJATsd4uH0qhjqmJX2TFBchN%2FFv6z%2BqFxI5f1hrIPKPLSbNQyBrs5rLOoq%2Fggz06l%2FgeeaD5pImrqsrIe9iRTRfMh8%2B8V7BGYYDnc7kupD%2BKdmFC0gUKEQ7D39uOjQDMyZtKOPVK%2Fq2l8seknEDNGGRFyv0WAMJBeBVK3%2BOeZCEOsznl%2B8stTOw74qyuQdQTMD3jwqtal7JmJ9y3dLU8r05zKzeYzyIqtpmwVlv8CVCdzfeZIEIItDJrmt%2Fl8KJloXB%2BWVJayGMLA%2BkBS%2FecVqDRG45xLv%2BuE1pcEB0r6DIT6AhAzE926GCl1JHAFXUvE9HZL0ChdB94eLdNxazkcK4ZQqJIKRUHYCbDHxCl4S3iMtAI9c8khNQN7kUwEC2JOEEJPbSPMvOHGv9BnNpMdc1wXta6prprRqrjpbcd1fixJWPRVYep9cFI%2Ba1Kl%2BdW3apHL9%2BoU4LjyR8Q8w2bV31mvUFjjIruOANChJ63rjTDw1ZSxYT3Pri91glIpn3heMuO47rnHgFSYenmGVIIpInaEIKQIPNSOLvB6kXGrOEJ7S4iUw85fvyAY6pgEtMg1mSR5%2BdENOGQEIFgd9I6rdUaPB6c%2FBhVhMiHdmCUb%2F2x6I%2BcFE8KnvFewCNzudT29BcYLXWyoD20e%2F3Gst89%2BI9NEcFfheEYANxvtbEIsjNxw7ViLiKYfv9Rt%2Fc0NlOR5mZYFijGe4DJ3g3qBB0mpAE83XqGIzSNPLu1pZjg4hWB0QCi5uoWokqRuDId0EWmoZFhrXmGZ6xegw0lQu1zadiA%2Fv&X-Amz-Signature=5ac77061c0037941c950db567a7fa5ba0c0d74f7e5a17fa98d80d8d2b7c1f7bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4TEZG2V%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwCBPdw7CtyPyBhWpoGM5tTmIZlIBed5YF0JKi6SjmlAiAu47rAoC8x5AP06eIeHslBj2clEff9e3W1OunHd37aPiqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM95Te8Mn1nFMUZW9eKtwDqFGHTkcUQSIBRysAjoEKP2pdMw5wCSriH2yJEXHE80yoLZG950v7kAzWX%2F3GQlRZC%2BxKOwuAvloJATsd4uH0qhjqmJX2TFBchN%2FFv6z%2BqFxI5f1hrIPKPLSbNQyBrs5rLOoq%2Fggz06l%2FgeeaD5pImrqsrIe9iRTRfMh8%2B8V7BGYYDnc7kupD%2BKdmFC0gUKEQ7D39uOjQDMyZtKOPVK%2Fq2l8seknEDNGGRFyv0WAMJBeBVK3%2BOeZCEOsznl%2B8stTOw74qyuQdQTMD3jwqtal7JmJ9y3dLU8r05zKzeYzyIqtpmwVlv8CVCdzfeZIEIItDJrmt%2Fl8KJloXB%2BWVJayGMLA%2BkBS%2FecVqDRG45xLv%2BuE1pcEB0r6DIT6AhAzE926GCl1JHAFXUvE9HZL0ChdB94eLdNxazkcK4ZQqJIKRUHYCbDHxCl4S3iMtAI9c8khNQN7kUwEC2JOEEJPbSPMvOHGv9BnNpMdc1wXta6prprRqrjpbcd1fixJWPRVYep9cFI%2Ba1Kl%2BdW3apHL9%2BoU4LjyR8Q8w2bV31mvUFjjIruOANChJ63rjTDw1ZSxYT3Pri91glIpn3heMuO47rnHgFSYenmGVIIpInaEIKQIPNSOLvB6kXGrOEJ7S4iUw85fvyAY6pgEtMg1mSR5%2BdENOGQEIFgd9I6rdUaPB6c%2FBhVhMiHdmCUb%2F2x6I%2BcFE8KnvFewCNzudT29BcYLXWyoD20e%2F3Gst89%2BI9NEcFfheEYANxvtbEIsjNxw7ViLiKYfv9Rt%2Fc0NlOR5mZYFijGe4DJ3g3qBB0mpAE83XqGIzSNPLu1pZjg4hWB0QCi5uoWokqRuDId0EWmoZFhrXmGZ6xegw0lQu1zadiA%2Fv&X-Amz-Signature=97920912b12aa770341750cecee230cffef532413bb0e5b28a3cef9637f47a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L2LL5B3%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6mQnpxrRQcyZi54bPU0NVNFM5NdID3EK68igCqSy2BAiEAgx%2FnWoPGohFfop8f4uMF77Qo7rEyqoy%2BnrtNE5Ga0wkqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjVIiuEEePy%2BHusDyrcA1aQZOK8Oqn2zC6sHE6o1NPLw8ewKR2inF0984B5vMPRZuliNEMWH7mvPtIl0GwiTJEuRGsxIVP4NsWti2Hk7R599sxJwmLodCbdL9g9QPB3%2FWIvJPEkDTsh739TO%2BqX%2BpJ7sUCMAhULhAohtuKaPlYoApLNuAXz8g9uiREvyAoq4ia5BMgcbDYOdREXBFBlLXL1q94r8RXybnWHDY%2BbY5T1k4EdQoZbu95hDksz3AeXhYjXIgdiHj5ihIGkg3HLXkEBacYNogGqxvcK6eZ2zec56z6s8%2FnHKd8nguXwcf2Kde2B1ycIEeZNFELI6F0zqyRbfAeKRJyPzXcxjKMElY21sn04Bh0Cr4%2Fn2EPXboExgfrY2jQykirW6z6ILDIHBwhX4nQEQNrSHxK34uZ%2BeI2jf%2BcPcTwOuzULhzBBy3gRirM%2FRYBYOWlPiV4mcvsnxibb1iXVVhHppiZHDP5pkiNJ%2BdVq7QiZQbXZAw4qE5qlOxMDwRqfk%2BsHdeaxirt2zxqOTTMmUhttEzVEO7k1bqhE3CiytqYHCGGiJvEGjs9qedUrPoO%2FhKVy34sGDc3mmTyMMvDH50BpN0vaHAicAED%2Bon01kfeblqwr1D9cpsWqVurj8Oz16GdZrXImMP%2BY78gGOqUBS636legne0CAEGYYIXKgNnePsjMRWFCYYY15YTVfxRwbs7KmmBlK5aCHPzDsH4ga7q9st41EfmNCX3v1WxXNroUNjC9uVaK9B6bTX50nFh%2B1CBV%2B2zkWcqN6iBVpZhco3BJZZBAQxTBE%2FaO%2FGNLVG5CFzj7wwiWgXa0Sm9z80t6orw8YjUft9xfmbGmR8jiLp5WtHHIUrTITMj%2FwKzrF8E4l5S1O&X-Amz-Signature=158175ae0c58d93415194aaa18641200277ce2b283ba5b6fa5409e68f458fe7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L2LL5B3%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6mQnpxrRQcyZi54bPU0NVNFM5NdID3EK68igCqSy2BAiEAgx%2FnWoPGohFfop8f4uMF77Qo7rEyqoy%2BnrtNE5Ga0wkqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjVIiuEEePy%2BHusDyrcA1aQZOK8Oqn2zC6sHE6o1NPLw8ewKR2inF0984B5vMPRZuliNEMWH7mvPtIl0GwiTJEuRGsxIVP4NsWti2Hk7R599sxJwmLodCbdL9g9QPB3%2FWIvJPEkDTsh739TO%2BqX%2BpJ7sUCMAhULhAohtuKaPlYoApLNuAXz8g9uiREvyAoq4ia5BMgcbDYOdREXBFBlLXL1q94r8RXybnWHDY%2BbY5T1k4EdQoZbu95hDksz3AeXhYjXIgdiHj5ihIGkg3HLXkEBacYNogGqxvcK6eZ2zec56z6s8%2FnHKd8nguXwcf2Kde2B1ycIEeZNFELI6F0zqyRbfAeKRJyPzXcxjKMElY21sn04Bh0Cr4%2Fn2EPXboExgfrY2jQykirW6z6ILDIHBwhX4nQEQNrSHxK34uZ%2BeI2jf%2BcPcTwOuzULhzBBy3gRirM%2FRYBYOWlPiV4mcvsnxibb1iXVVhHppiZHDP5pkiNJ%2BdVq7QiZQbXZAw4qE5qlOxMDwRqfk%2BsHdeaxirt2zxqOTTMmUhttEzVEO7k1bqhE3CiytqYHCGGiJvEGjs9qedUrPoO%2FhKVy34sGDc3mmTyMMvDH50BpN0vaHAicAED%2Bon01kfeblqwr1D9cpsWqVurj8Oz16GdZrXImMP%2BY78gGOqUBS636legne0CAEGYYIXKgNnePsjMRWFCYYY15YTVfxRwbs7KmmBlK5aCHPzDsH4ga7q9st41EfmNCX3v1WxXNroUNjC9uVaK9B6bTX50nFh%2B1CBV%2B2zkWcqN6iBVpZhco3BJZZBAQxTBE%2FaO%2FGNLVG5CFzj7wwiWgXa0Sm9z80t6orw8YjUft9xfmbGmR8jiLp5WtHHIUrTITMj%2FwKzrF8E4l5S1O&X-Amz-Signature=d2928ef5cabae57a0d8997911f6dd60258834c3d52c67330a40a6e53b5286311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAP2HDGN%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaolS92vnC%2F0%2FzzmgTxjFTaD67f4RHS7lC8hLv1GxXcAiEAvA9YRwKMIPbDDZ4rca5fnPgsXJs0TW9zRhPSKFqgE8UqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpRaqkZtWx%2Bb%2FZapCrcA7o2RAmbXdWN2PYCUrbP%2FYgy4soPSVZJdjLIEnWEoZywIRjxRsgb5QYWSfYA308qXBKTp4KsSUM1505mI5VgU%2B6SP%2FGV3t85fjXYTB3afJx123yRlPegTBF8Medw0cx8uVCgANdHrk85%2BRO8qzrfrfz%2F873dipNk9LJ12afxITc4s31RW%2FnwXzR0OFvlrah5DNK0gLsIrchd3yaC%2B1qr%2BLn20jx2%2FnqFWlY%2FUCFmNj4QVyM1AvpDXxY0s6LB63AwcWqqCvTPJ%2BmT2j%2BtZV7FVU9qp8LStqj6e%2BZ1h6ypx2P%2BH1fEY7lY%2FCHRfgQvXOU6%2FrscibxBzw7NF0LnJm8jLWik3MH4LDg%2F%2FYOuIGgn%2Fu70NVe97GPs58wvHwcH85PqYzZKTKaykbpNIhINjUMyAMaGJOPGidFFVLwgwL1ypQWVxItcrlbeYj56Vk7ACH2%2Fc1kx%2FgGfglqYx59GHMJZh341XP8mVujUAxJ%2Boy1QyJQQA5PwbVf2%2FLYNTO6mm%2BcfPoJ0Egf01m%2FbFrJtA0pR4d39%2BzTRmKg1j%2Bpfe7G0pCjvI2Mr%2B4DMFnYH4a6LgMav3h0AZGZtSFJSf5XS5UG68BpU6CThn5%2BEDDqaTt8TS%2FqKEpj0UajWmK5QEC7HMK2Y78gGOqUBO2J74zteN03KD1ou0NSFZpleTwhR728kBz3fANQygA6yfS7So6cNsBws4lMnBX1mzrF6ktJ9tc2PuXX0OhAMQvs5cT8oeJrrZv5tsobmQHeQ%2Bn0MbUrIWzkEwnFJixQAXbaKQR65cg%2BGLYogoDOULxKuaV6Qjl5th4o7Mk3ulUE9WdPTuJKVBl3qimPariE%2FU0E8F6nriTKniXM%2BVyl4xJqyu79B&X-Amz-Signature=cfe6f019ce8bd8246143d95bd669ce76a69bdbbc84e97b0fb0290f4158f1755f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

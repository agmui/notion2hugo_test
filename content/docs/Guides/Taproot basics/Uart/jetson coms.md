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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y57D7VBQ%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCtuCDZ0rV%2F%2F99FWGizLuP6T8pdmhXn%2FhhcG29Cy00QQwIhANBOd0gaMhfTQL2dGy%2Fo6TqB7pnTgGep1kHBryFMiMIeKv8DCCEQABoMNjM3NDIzMTgzODA1IgziMGDQImrSDyqZMrYq3AMpAFAmcYflwYmeYmK3mcHRZSvbAXPb3dBpzV90CBjlMVP45DL3GusoCb96uNnJXqHUHtK8A9LjWTYw1L4eyVYfUDP5Gpj6f5sO8WZCt5bwlu63NpAlvZV1Gd7dMDfG25BZOkcGEX2BQ8rSLwddKjCpa7Ru3dXWaYXD7%2Fvw%2FJOteKh0UtCSI5K6THsUo22vYO3usUAnfxzlmc7uJ4q5OADpBU29Z65qrwukv4l5fnxhfVm7B1uCroYrfJpW75jSgRLQf8XGQj1br2VEa5h63%2BNyg7IBVB6mPiYtMb%2FP4MFDTEqX%2BJpOSFQEFb8hQxviTewI41F48GvrSrPuG3RxwqhzigvITaIE4YDVADOC1FUZA2FHvTT94pyNjPQLYQwCHbXU6tUy%2BYcxyIGj27n8gr3j%2BK35yzC31W1M%2BEegUUkUYlP2D0aSp424LW3hXsrmc8nR7gIiYBDigYCnspfQh3O3aGSRw6lxwiZ%2B3RRd7lE%2BQKqLcuICQp%2FhVVBeYEemJ4YwwCG2UFTv1f00bZUiFmkYBfZDaLZJu6LJKatoLY09CrFc7sErZl31aj2novCVQiLUGesxhDRQ1grmGp20WsfdqIyxxOjB92rwj3jHopt%2FVtVfUTl4uceEeISFfTDQ7YPUBjqkAUzaOa2AuiHemFEN%2FSga%2Fgc6ZZ2fCzPaqaAaPJrgFi%2F5bt4Kn1QTnJq6cDtTcyN%2F%2F32I3Fa33MAizG6CeHvu82Ad37hjD7F%2FIqfhHuXiqTuw%2FitbusR5sW38eZT12Zy8lci3iM%2FCEOv68RvVuN%2B6GOfPv4u29tWgmpFdIs%2BJ%2F%2FlIovdl6vpjDMjBHkgRdgkzhuuilkx0DKcpfkbc72c14TSNQqPn&X-Amz-Signature=fc94824b992d8d1d122a0a2a310116c9ee3548d046c3d58b7ca9ed22abac92e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WYMCHA4%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHIiaXnJf0pEW3h8BEffQJauzQyECd0Vy3BMOJR%2BSnIaAiBFxfmsKZ7kkxF0EQnpYl4dvGZbDRNmA67Vst%2BlRAC8oyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM%2FHbzG3uxmEdW5PpRKtwDGxZfxeyiB8oKVa7bMZ2t%2Fd3QSHHuEHexLe7dSWMHjQ%2Fuk52IfoN0PB36bpglw8TkAHVgea3Kyzh0Gyn9w4%2BAcn9yJHWyTNaQ3c2MPK2l1ASdRG3L5OXj8sl75OSFJROtfwujOqYI9rf1IAwtWrBYZ5j8LgWKBJs8uruG%2BwZ%2BjKETFDIHBGLbMawY5rC2rhhFYqPA3IX%2FoOh233InnctyK0VdnzXTEXEM34Pb8X%2BlZVpHSNHnFuYSef6P2RWaZKkZHgEjaA%2FirSyCTASBmH76Atnk9dYJFIV3wGqfrQgiAJ2KYtfDuy8IOi9otyYLUUenHme%2F3CBOAJvd8ZC6kmH3UTseqkuoVlfaYZJUpHzy7R6nJ1Flf3T1ZxKVrtrikChoVKY%2B2%2FiDu27s6YbheZPE7QEtTQ%2FhBbAk3dEHhx4j644Ergyz%2FQhlTeWmuLXxXeiAdeAtlu1yxWbOQPXNQSJKw3srGcaDJRprfPBXI1MtPqacmw2ddlSL0Vvy3egrluG1UXnf%2Bpp%2FJPmhrHunlWG%2Fxr90H4oWdrO2FE7luEv4dNEyxU%2BR8e6VRvk5hrtcCvd0W4kPan%2BnCcLP6iBbCG9BIh7mpxY2Jii8Ti%2BAXDa%2Bs4uDr%2FP82DX4A2MQ%2BfQwzeuD1AY6pgHhFUiQCWJE4nzreM59Fp0ZOy%2FFNcZ%2Fe2QR0jmZhu9ozSnofLnO7fJzdH3uZ6Nslk0fQrgJXJvOdmzeXGZNDyiSCF%2BaVrDLsWgBYBaRWkFIE3f01%2BPXfeTLigE7b1N2C56ke7RFTUsYhNE%2BlJH7v4J1FiI%2BRcep8BZ%2F%2FkAoUUvJtTDgsFw1DrdBw8%2Bd%2BGgk3m98BWLlUM%2B4UplqG%2FfsT333co%2FIhFIC&X-Amz-Signature=98c904254d9eb09e98d05df9832a6aebfb459eaf936d382d191c4b51462cfaeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXFHMJC%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIGP8yRLT7axM7Y21dmBlaxnXLLLCXS3jNebT2MI3CzC1AiArd0vD8B3Uup5boQiMVTUTodhl8aAu9%2FeCGU9sF4BgSSr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMDlOVzLHbGZ9hEVhRKtwDPyLB5ICuQW8QFnDpCYmfeC5V%2FucF9%2F0iHuAIcWJGn6b8hjUycbcesc9gRD6KZmbd5NFn%2F%2FYU5j4nW1NWZu%2BaUGvwHQGdgh009h25ho0pSEZHACMTkrbhr2exn1AoUMQ2TD5xDtxR34vTBaGl2UKh6QP54BZ0OuetuskPWbCTJZjWqmenzBBs8yNDJbLPWnMYc66EvO7dYoxVo0pT2lSab1PBLsNt6TeN7n0jdV2riPcZPLZAqZTgkaiUvziqZZ3gQg883xwCOiI9snZt4gT8DfeWUbKu4BsxnQkcOfeT33iapgXD3LI%2B0pJBvCyfG11MK%2BiWNmKWAXXnA2EL1zRQdoZbQS5eqcLdy8ZSNeIMZxQNHrd2P6e%2Fpf%2Fhp4bX%2FURScfD0laNqxlwx4L69umOxZVtiheTW3njgivrx63Iw52R1zP6j1F2EWPzRB07W%2FZ8AWogVxtt8ULWW3wHs761f1XUi4fM0fMN%2BLRLK%2Bv%2F5GEJBiQRpedzreMSLjWhLyfolppQmqkajeplWVBDoSCJogGHi9lm77sKH%2FHzDwsoqJUu%2B3bPBWy5yEbtf0DeYE0EuoTlhSNkiqYpipWW3gBGVb%2BX6VMkcoD87QeENyOpcM7g810tfkOKICduJ7ysw1uuD1AY6pgHK4DFmBaKmIJutyIljQTvONEvzjR%2B%2FbOp3VVDkKutrJLTZVfJ%2BIwvo12SNLSCokPoKM53ftitWVMFC1e2oQ5H%2Fve19vLwXKANoS7WVsGhmk%2FnKSyVnKFqvX1Eg62EaOob3vLBuosum8seh0tsDEYcTsfjPSMxToXUquGFATp9%2FUIu2amYe3pve0LBZVLajyP3Uk%2Bb2Rcc%2F8AOIZRoVGgv7ySUjCRpK&X-Amz-Signature=c56b418edbf645277b0e5cfb29afbca9be8fe04ed9386b280f0ee512cd7b9abf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXFHMJC%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIGP8yRLT7axM7Y21dmBlaxnXLLLCXS3jNebT2MI3CzC1AiArd0vD8B3Uup5boQiMVTUTodhl8aAu9%2FeCGU9sF4BgSSr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMDlOVzLHbGZ9hEVhRKtwDPyLB5ICuQW8QFnDpCYmfeC5V%2FucF9%2F0iHuAIcWJGn6b8hjUycbcesc9gRD6KZmbd5NFn%2F%2FYU5j4nW1NWZu%2BaUGvwHQGdgh009h25ho0pSEZHACMTkrbhr2exn1AoUMQ2TD5xDtxR34vTBaGl2UKh6QP54BZ0OuetuskPWbCTJZjWqmenzBBs8yNDJbLPWnMYc66EvO7dYoxVo0pT2lSab1PBLsNt6TeN7n0jdV2riPcZPLZAqZTgkaiUvziqZZ3gQg883xwCOiI9snZt4gT8DfeWUbKu4BsxnQkcOfeT33iapgXD3LI%2B0pJBvCyfG11MK%2BiWNmKWAXXnA2EL1zRQdoZbQS5eqcLdy8ZSNeIMZxQNHrd2P6e%2Fpf%2Fhp4bX%2FURScfD0laNqxlwx4L69umOxZVtiheTW3njgivrx63Iw52R1zP6j1F2EWPzRB07W%2FZ8AWogVxtt8ULWW3wHs761f1XUi4fM0fMN%2BLRLK%2Bv%2F5GEJBiQRpedzreMSLjWhLyfolppQmqkajeplWVBDoSCJogGHi9lm77sKH%2FHzDwsoqJUu%2B3bPBWy5yEbtf0DeYE0EuoTlhSNkiqYpipWW3gBGVb%2BX6VMkcoD87QeENyOpcM7g810tfkOKICduJ7ysw1uuD1AY6pgHK4DFmBaKmIJutyIljQTvONEvzjR%2B%2FbOp3VVDkKutrJLTZVfJ%2BIwvo12SNLSCokPoKM53ftitWVMFC1e2oQ5H%2Fve19vLwXKANoS7WVsGhmk%2FnKSyVnKFqvX1Eg62EaOob3vLBuosum8seh0tsDEYcTsfjPSMxToXUquGFATp9%2FUIu2amYe3pve0LBZVLajyP3Uk%2Bb2Rcc%2F8AOIZRoVGgv7ySUjCRpK&X-Amz-Signature=01a3ceb809da20396d8e92e3cb17b412f2e34878c560c520c83ade9dcc878746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WYMCHA4%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHIiaXnJf0pEW3h8BEffQJauzQyECd0Vy3BMOJR%2BSnIaAiBFxfmsKZ7kkxF0EQnpYl4dvGZbDRNmA67Vst%2BlRAC8oyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM%2FHbzG3uxmEdW5PpRKtwDGxZfxeyiB8oKVa7bMZ2t%2Fd3QSHHuEHexLe7dSWMHjQ%2Fuk52IfoN0PB36bpglw8TkAHVgea3Kyzh0Gyn9w4%2BAcn9yJHWyTNaQ3c2MPK2l1ASdRG3L5OXj8sl75OSFJROtfwujOqYI9rf1IAwtWrBYZ5j8LgWKBJs8uruG%2BwZ%2BjKETFDIHBGLbMawY5rC2rhhFYqPA3IX%2FoOh233InnctyK0VdnzXTEXEM34Pb8X%2BlZVpHSNHnFuYSef6P2RWaZKkZHgEjaA%2FirSyCTASBmH76Atnk9dYJFIV3wGqfrQgiAJ2KYtfDuy8IOi9otyYLUUenHme%2F3CBOAJvd8ZC6kmH3UTseqkuoVlfaYZJUpHzy7R6nJ1Flf3T1ZxKVrtrikChoVKY%2B2%2FiDu27s6YbheZPE7QEtTQ%2FhBbAk3dEHhx4j644Ergyz%2FQhlTeWmuLXxXeiAdeAtlu1yxWbOQPXNQSJKw3srGcaDJRprfPBXI1MtPqacmw2ddlSL0Vvy3egrluG1UXnf%2Bpp%2FJPmhrHunlWG%2Fxr90H4oWdrO2FE7luEv4dNEyxU%2BR8e6VRvk5hrtcCvd0W4kPan%2BnCcLP6iBbCG9BIh7mpxY2Jii8Ti%2BAXDa%2Bs4uDr%2FP82DX4A2MQ%2BfQwzeuD1AY6pgHhFUiQCWJE4nzreM59Fp0ZOy%2FFNcZ%2Fe2QR0jmZhu9ozSnofLnO7fJzdH3uZ6Nslk0fQrgJXJvOdmzeXGZNDyiSCF%2BaVrDLsWgBYBaRWkFIE3f01%2BPXfeTLigE7b1N2C56ke7RFTUsYhNE%2BlJH7v4J1FiI%2BRcep8BZ%2F%2FkAoUUvJtTDgsFw1DrdBw8%2Bd%2BGgk3m98BWLlUM%2B4UplqG%2FfsT333co%2FIhFIC&X-Amz-Signature=ff68a9479c4ca34ebdc3f79ef9502b1e9d11dd5bdfc9ced63cebd62bb299e8bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WYMCHA4%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHIiaXnJf0pEW3h8BEffQJauzQyECd0Vy3BMOJR%2BSnIaAiBFxfmsKZ7kkxF0EQnpYl4dvGZbDRNmA67Vst%2BlRAC8oyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM%2FHbzG3uxmEdW5PpRKtwDGxZfxeyiB8oKVa7bMZ2t%2Fd3QSHHuEHexLe7dSWMHjQ%2Fuk52IfoN0PB36bpglw8TkAHVgea3Kyzh0Gyn9w4%2BAcn9yJHWyTNaQ3c2MPK2l1ASdRG3L5OXj8sl75OSFJROtfwujOqYI9rf1IAwtWrBYZ5j8LgWKBJs8uruG%2BwZ%2BjKETFDIHBGLbMawY5rC2rhhFYqPA3IX%2FoOh233InnctyK0VdnzXTEXEM34Pb8X%2BlZVpHSNHnFuYSef6P2RWaZKkZHgEjaA%2FirSyCTASBmH76Atnk9dYJFIV3wGqfrQgiAJ2KYtfDuy8IOi9otyYLUUenHme%2F3CBOAJvd8ZC6kmH3UTseqkuoVlfaYZJUpHzy7R6nJ1Flf3T1ZxKVrtrikChoVKY%2B2%2FiDu27s6YbheZPE7QEtTQ%2FhBbAk3dEHhx4j644Ergyz%2FQhlTeWmuLXxXeiAdeAtlu1yxWbOQPXNQSJKw3srGcaDJRprfPBXI1MtPqacmw2ddlSL0Vvy3egrluG1UXnf%2Bpp%2FJPmhrHunlWG%2Fxr90H4oWdrO2FE7luEv4dNEyxU%2BR8e6VRvk5hrtcCvd0W4kPan%2BnCcLP6iBbCG9BIh7mpxY2Jii8Ti%2BAXDa%2Bs4uDr%2FP82DX4A2MQ%2BfQwzeuD1AY6pgHhFUiQCWJE4nzreM59Fp0ZOy%2FFNcZ%2Fe2QR0jmZhu9ozSnofLnO7fJzdH3uZ6Nslk0fQrgJXJvOdmzeXGZNDyiSCF%2BaVrDLsWgBYBaRWkFIE3f01%2BPXfeTLigE7b1N2C56ke7RFTUsYhNE%2BlJH7v4J1FiI%2BRcep8BZ%2F%2FkAoUUvJtTDgsFw1DrdBw8%2Bd%2BGgk3m98BWLlUM%2B4UplqG%2FfsT333co%2FIhFIC&X-Amz-Signature=a368108607c2d0403df1b5071c937739bae88951b3292779a1e2ac90e9f7ce63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UBHRU3E%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDe6p3HhRP8MRPxM58mOPALVRl6SdntGhiF%2FGSEslD6RgIhAOGWWvdxf5BxIxYW90e5%2ByNOOPuJ2cTrk3p%2BzZbdHnYvKv8DCCAQABoMNjM3NDIzMTgzODA1Igw5b7MMICuHdyxy1m0q3AP4ve3d0phMtSDRUkOKKKQ09RnyhdKxx%2FRPkOgCHILb23W4J5MKyX7tL146oA551slnrn7z%2BzPJBdmpWUHnFoJGXkivtvgWpdtt1BxvJMjqJq5kT9iUxQYOfbn58ctzud5j0GmU%2FS%2BWZY%2BjB56TR2%2BCjkOmryD%2FsZaYlHHryoDL%2F520%2BNNPebXJkxKXCI%2FZLCnvpwxc0Lc6gZ92otWihYOSf%2ByywEFegOr3mKvn6zC%2BkSeB2pgOTvh%2Fm22rHeZAbXKbtkQdEukEDXnoBMnFEmVEcU38fhlTztEb4IgOwHeYyXtqoDwNZX2Jrc40wX4dsyOl%2BNIhgnVUTCw1R%2BgMb9db%2FuBfD21dbp%2BBPUnBxpMdUz1gca5iRC5s3lU3SsQ%2FXharNEay98n1kSB7Y%2F62W%2F3ftN54dZHZ6uIlMcQu1v2tIqAOSzvpJNQDmvCzzfHlYgIyehxGQvUV63d1YPq2iO4A3OEDxGNMoB4OszLfc0mXR%2Fm9aM3TXU0rOga%2Bzy7HBhLMbOacxHd59dD9QKUIfoHNfwWMBcpnugkJWW6oJrW8iVr9V2JsQWFtcU6OTOl%2FikPW%2FMOe6byP4BsG8Inh5cEGsbEmIZm0ZRudlQNScgNiDXlnmaTPRbsTaP4hQDD57YPUBjqkAbQLHqHSveyHrUNBsNz6EP5HNsfXEFuS7dfTUlrdUjWrKxjaElkPBgbD1RBwuoJgoCXznHhPoUVaPWQ%2BoI2Je4DIS1gGT3VeKy5AwWkN2f9LTiRxmxGHxy7B%2Fve4jK1cBn6XRhWAW4CBeNbq%2FkF6%2B1sZBFE4tR4MVu%2F5VTZqu17wu%2F3ZmJGOlMAog8NZnElYp5Qq%2B4M9fDkrvRebnYEVFRJASD3e&X-Amz-Signature=d1efad5ee1e3525577073e57f6c1e906dc9532db103195033f01237e72f1f4a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

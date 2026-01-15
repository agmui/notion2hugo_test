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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAMWMZXE%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCICRajx2TndX99H2RdLyBtxYXm%2FoBMDHCqdDae9Yz7gt%2FAiBmyNt18MieKie1EZGa%2FZS56eS2gseTFKpAmJ4Vr0H95Cr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMV7qrIq6fTEJhbAlDKtwDksl20V4OTBtp%2BCi6ho4kp87nh%2BM%2BmQJTmqP6ZNl88b3UTXdlgazwrynL2WFDNmUvZW1h2uK3ihxuX39zdaDrNI8enNkk8OlBq9Gm6%2Bha7DlS9oi4cpEq%2FfmDOmEWte9W5ALxN33c42w1yrtmpfSOUYZAGoRhK%2F5mQ8WFwB8SuJlUuLF9AWb8XrljnG0%2FGUziKtiOk2L3YeGPHKs%2FMuHD3LElavtaLlHwf%2BtRk3Ou1%2FMPtY7gItrXwfV0pIVlzOE5IjiLBuq4T1gN5heQXi%2BhRKSXuxVz35yyGJiyqdb71AqL1s9LZBSkaF2XNsH5DyQAMo%2BhsqkRV4%2BdI%2FhwPqChDIhaIpVfEPJAkjGPKm8deA5PwgmhP1P2P6hMn7v5QaBhyMEd1FsL%2B01Ru0FPqABCp38C%2B3Re3u328PtklgFBecUId5G%2FiNIdG24kvyx8Vm4peQWoN8xJnA9osJGPwLE71uQlKMaR5Zzp2SYPFwAzEgOnMhBZ148HqaqvEYPNLozj5qqzaZfEiV7E%2BDzng5qNtOAo0%2BPeB6TtnHQUyrRCb%2BnDLYkmkWnMZWfXbR5fn08x%2F4cS8oFshb%2FsSZHUf3KKnAvylJ9DRka6NUnsSrRhPXaH5%2BMT3DSMsnMkIkgwp4ChywY6pgFP2WQMkht1RGNjCnNxlZdWeX2VVxyu2Xb%2FrVOms3dhtJ4LlASYbMyaLuRJv0No9xbc%2BfgtqrUf%2BEbfAO9aXLV%2Fw3Y9nJKGHBbbE%2F%2Fhj%2BshEGBwFtrqxmaxR%2FJ%2BVLVT6GSJZwNs0EKZVbZw5tbM9Fp9B3%2B6xR%2BF2spdYBdMSLjhD%2F9oCLVRfkxq5q6b0CwrX7Pn4Ub%2BmYbwxKIpTHXOLFEo50IyG4ub&X-Amz-Signature=f0fc12f58565e64d623497dddae9a9cec0d7b9955d9b19afc7426258f7416f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUGEDXYN%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCqrtlxG6k1Kb8sNZS9t8LhrWvcnkDsgMpHth4RJSR7HAIgZqa1m4cEAmyVelMaaM2hoSSodPW0zuGYioLguCabf9Eq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGV4vEG4wl%2FFsKL%2FsSrcA2%2BIKXqdiEEKpQv6JVbNuNyAIYyqxIFS0ux0bvYBBItxNO3uewUz63LGYwaB422zr1JeFWLzonZG8R5sKLOgcXtqf2EM9N7HF3oQLIaXtFAyobpfUkv7N0j3kYVVusCmLT4F1QsHSoj92I4tRhPR80k%2BwK6oRCiy29e8MJ8%2BY9CMLnYq89jbdX3X%2BxuQn7q0Hc408ycev1vvoooD5QeFUYto%2BfwTlVIRlU9I5BTnS9Nx8qwvuLl5yo2pPwsUIteG3K0U4kr9WMt71JesKx6rpRMBqnDJ0QtoHVukpZD0e1D92IxFRvIWT5KMythhlTJtVVawYvow8QMYHu8wOM9sCbBUUm3nUYBWqUvM71mHn8vtN01KJT7fTbqive%2FoWMLLvjBnalD7x9Kx0lF%2F5f2lsQrYhoxgo2tEDTo54o1%2BYY34BrHXugQRZ097pA%2Fg9sbjIjL2s%2BcuNTD9pUII7dSYGLP9ATg%2BPiawCHBMmSgHOG3vtg4NoEM4zwWN9hKmYA4%2B%2BYjhiIvBNT%2BOseEphZ9UfyUdkobTwg9DGOhgyk7GTfzDD29TDAWAl4GcYYhYQh5Bsj3nL%2BBUZ3dPQOhYNu2AX1f9ZRiQw1s2AqDA05dG012qt2vHBQfrc9KEe7SkMOb%2BoMsGOqUBPkdbIrtB3PxfxvWps6QK14MzPL%2FEGo8dpJwzygbGOMB9T2rxMR4aeAHVePROBk3d2OqWUz6YdDKiBBXK9fkvXaBJvlwlVwlWguvs%2Bn7WkZylclVJ2yFlmKMPSgabv8Mb99R78GcEPab1UOrmSnzHmQRy21xv76h59cbhzjNrxQn8oyVZEmwC9zzVGku%2FNtgSIf8SMAGXljvie5AidZILUCINBLBw&X-Amz-Signature=bf0f1cc7b0e2f0450e7227c058b701eadf6f524d7cadca23ac0796bb09d4df08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26RHMPM%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDmtdZJx5lru%2BgyBm9YWE%2Fp0vedjSe6kQhB7VipIUSe1AIhAMt6s%2FPCbfgyB88BOnAkSySzqJY2%2FcnT3SorweJJ6OyUKv8DCCoQABoMNjM3NDIzMTgzODA1Igyo15mkBf3UBkZt%2BqUq3AMZOjyrvX1G5NiZvcEhBMnSzkPFrpwZJ60CQZzS7tw9E6KCR7Z498GmLP2MDqtFc1ILRC5uHIvDiUwhB1oCedMgRY82THRiBjPxK2b9CpN6zssQVL%2BFpmOhorKEqTMvFbV5iqPvqggM%2FoU7HPNbmLOon8wzpIyI4GxLeOQXq%2FdddPKqv25HO5f23HczS8ZAdJ9xON5lb9R%2FLQP6FW09JJhJluw7m5x9djWRRAYwxVOaK4I8tagLc%2BKQnsXyMv%2F3MchTmmB6WBKUTZ9NoWLG50dBM7tRXc5rGNNDh%2FkzCaAFaLyGzzRx7e8lo3aWXQ3fNeYNcDcG7upYUg6VYER0dJh9UzyDuBQufUd5pGzwBEm4HTycLriDD%2B99BysaNuhiQe0OcyWUbBTOe6ZB0NGpHp29kVrwYF6aECc4Q7r0eGCgB4Pll3rqdUaktXOPFCzC34U7n3sVv7n5H6%2FL0K9uOfe7Wxpuwus3I4ISaLPxunmDzAO1lnxmu7SCvc%2Fe0mRuLXGnmXwUVwuxzasWkAkfk0Uvmhh9xaZOO56035I0x%2FGLafVo30TGsgcyGUChgz5s1Jr2y50HzvBsQ9I%2F3A%2FbgbWNoJ3GmNHB1tGiU3F0mDn7tOxhGXMSXweeIjQOyTDw%2F6DLBjqkAeCO9dgR2IfziHbojqqDZvs5iIrWeUl7WdPkKBFJxnfnZ0XvTHwTMKBgdFC2cm%2FZBZDJl9wbYbti2fsJbZnMJIXPB7srT6oYmZhzoBsBYO2uaX4LZI83UmkGX2w6dvWfdyXAS9roRUoFpJ33uz8ufSXl2JgObvEeNdh9cBoznzgJevZ434sravS0i7pCo5XRW3xEdkrGw81mUta5Pa%2BFZ8lGZMPS&X-Amz-Signature=2c34e1aab776c3db2bd594ad6a6263cc2fa1a7f8e1929f111e7fa84111d59f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26RHMPM%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDmtdZJx5lru%2BgyBm9YWE%2Fp0vedjSe6kQhB7VipIUSe1AIhAMt6s%2FPCbfgyB88BOnAkSySzqJY2%2FcnT3SorweJJ6OyUKv8DCCoQABoMNjM3NDIzMTgzODA1Igyo15mkBf3UBkZt%2BqUq3AMZOjyrvX1G5NiZvcEhBMnSzkPFrpwZJ60CQZzS7tw9E6KCR7Z498GmLP2MDqtFc1ILRC5uHIvDiUwhB1oCedMgRY82THRiBjPxK2b9CpN6zssQVL%2BFpmOhorKEqTMvFbV5iqPvqggM%2FoU7HPNbmLOon8wzpIyI4GxLeOQXq%2FdddPKqv25HO5f23HczS8ZAdJ9xON5lb9R%2FLQP6FW09JJhJluw7m5x9djWRRAYwxVOaK4I8tagLc%2BKQnsXyMv%2F3MchTmmB6WBKUTZ9NoWLG50dBM7tRXc5rGNNDh%2FkzCaAFaLyGzzRx7e8lo3aWXQ3fNeYNcDcG7upYUg6VYER0dJh9UzyDuBQufUd5pGzwBEm4HTycLriDD%2B99BysaNuhiQe0OcyWUbBTOe6ZB0NGpHp29kVrwYF6aECc4Q7r0eGCgB4Pll3rqdUaktXOPFCzC34U7n3sVv7n5H6%2FL0K9uOfe7Wxpuwus3I4ISaLPxunmDzAO1lnxmu7SCvc%2Fe0mRuLXGnmXwUVwuxzasWkAkfk0Uvmhh9xaZOO56035I0x%2FGLafVo30TGsgcyGUChgz5s1Jr2y50HzvBsQ9I%2F3A%2FbgbWNoJ3GmNHB1tGiU3F0mDn7tOxhGXMSXweeIjQOyTDw%2F6DLBjqkAeCO9dgR2IfziHbojqqDZvs5iIrWeUl7WdPkKBFJxnfnZ0XvTHwTMKBgdFC2cm%2FZBZDJl9wbYbti2fsJbZnMJIXPB7srT6oYmZhzoBsBYO2uaX4LZI83UmkGX2w6dvWfdyXAS9roRUoFpJ33uz8ufSXl2JgObvEeNdh9cBoznzgJevZ434sravS0i7pCo5XRW3xEdkrGw81mUta5Pa%2BFZ8lGZMPS&X-Amz-Signature=15c3504a2dd428662d8e322494f66c5c477367514200361d517830ec46bb077b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUGEDXYN%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCqrtlxG6k1Kb8sNZS9t8LhrWvcnkDsgMpHth4RJSR7HAIgZqa1m4cEAmyVelMaaM2hoSSodPW0zuGYioLguCabf9Eq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGV4vEG4wl%2FFsKL%2FsSrcA2%2BIKXqdiEEKpQv6JVbNuNyAIYyqxIFS0ux0bvYBBItxNO3uewUz63LGYwaB422zr1JeFWLzonZG8R5sKLOgcXtqf2EM9N7HF3oQLIaXtFAyobpfUkv7N0j3kYVVusCmLT4F1QsHSoj92I4tRhPR80k%2BwK6oRCiy29e8MJ8%2BY9CMLnYq89jbdX3X%2BxuQn7q0Hc408ycev1vvoooD5QeFUYto%2BfwTlVIRlU9I5BTnS9Nx8qwvuLl5yo2pPwsUIteG3K0U4kr9WMt71JesKx6rpRMBqnDJ0QtoHVukpZD0e1D92IxFRvIWT5KMythhlTJtVVawYvow8QMYHu8wOM9sCbBUUm3nUYBWqUvM71mHn8vtN01KJT7fTbqive%2FoWMLLvjBnalD7x9Kx0lF%2F5f2lsQrYhoxgo2tEDTo54o1%2BYY34BrHXugQRZ097pA%2Fg9sbjIjL2s%2BcuNTD9pUII7dSYGLP9ATg%2BPiawCHBMmSgHOG3vtg4NoEM4zwWN9hKmYA4%2B%2BYjhiIvBNT%2BOseEphZ9UfyUdkobTwg9DGOhgyk7GTfzDD29TDAWAl4GcYYhYQh5Bsj3nL%2BBUZ3dPQOhYNu2AX1f9ZRiQw1s2AqDA05dG012qt2vHBQfrc9KEe7SkMOb%2BoMsGOqUBPkdbIrtB3PxfxvWps6QK14MzPL%2FEGo8dpJwzygbGOMB9T2rxMR4aeAHVePROBk3d2OqWUz6YdDKiBBXK9fkvXaBJvlwlVwlWguvs%2Bn7WkZylclVJ2yFlmKMPSgabv8Mb99R78GcEPab1UOrmSnzHmQRy21xv76h59cbhzjNrxQn8oyVZEmwC9zzVGku%2FNtgSIf8SMAGXljvie5AidZILUCINBLBw&X-Amz-Signature=3d6ebb408f79fc8aa10b2a1eb9753a54ba1b04fb0467131454244c6fd74ccf4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUGEDXYN%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCqrtlxG6k1Kb8sNZS9t8LhrWvcnkDsgMpHth4RJSR7HAIgZqa1m4cEAmyVelMaaM2hoSSodPW0zuGYioLguCabf9Eq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGV4vEG4wl%2FFsKL%2FsSrcA2%2BIKXqdiEEKpQv6JVbNuNyAIYyqxIFS0ux0bvYBBItxNO3uewUz63LGYwaB422zr1JeFWLzonZG8R5sKLOgcXtqf2EM9N7HF3oQLIaXtFAyobpfUkv7N0j3kYVVusCmLT4F1QsHSoj92I4tRhPR80k%2BwK6oRCiy29e8MJ8%2BY9CMLnYq89jbdX3X%2BxuQn7q0Hc408ycev1vvoooD5QeFUYto%2BfwTlVIRlU9I5BTnS9Nx8qwvuLl5yo2pPwsUIteG3K0U4kr9WMt71JesKx6rpRMBqnDJ0QtoHVukpZD0e1D92IxFRvIWT5KMythhlTJtVVawYvow8QMYHu8wOM9sCbBUUm3nUYBWqUvM71mHn8vtN01KJT7fTbqive%2FoWMLLvjBnalD7x9Kx0lF%2F5f2lsQrYhoxgo2tEDTo54o1%2BYY34BrHXugQRZ097pA%2Fg9sbjIjL2s%2BcuNTD9pUII7dSYGLP9ATg%2BPiawCHBMmSgHOG3vtg4NoEM4zwWN9hKmYA4%2B%2BYjhiIvBNT%2BOseEphZ9UfyUdkobTwg9DGOhgyk7GTfzDD29TDAWAl4GcYYhYQh5Bsj3nL%2BBUZ3dPQOhYNu2AX1f9ZRiQw1s2AqDA05dG012qt2vHBQfrc9KEe7SkMOb%2BoMsGOqUBPkdbIrtB3PxfxvWps6QK14MzPL%2FEGo8dpJwzygbGOMB9T2rxMR4aeAHVePROBk3d2OqWUz6YdDKiBBXK9fkvXaBJvlwlVwlWguvs%2Bn7WkZylclVJ2yFlmKMPSgabv8Mb99R78GcEPab1UOrmSnzHmQRy21xv76h59cbhzjNrxQn8oyVZEmwC9zzVGku%2FNtgSIf8SMAGXljvie5AidZILUCINBLBw&X-Amz-Signature=eb5f8600ecef2fb51c91d26b1a064f308ec9b4297fbefb6b43d093ea54780eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEOHTQD%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIBbV1ONLnkzHcqscw3qtvcBlql7vJBSN7Dp6%2Bhwc78HvAiBEtiDUD%2F8fjBjbF%2FVnviu2p%2BT9wC30Zeyrh74Z2xCoVyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMHuTBsRLVnu0TUoz2KtwDtjtyoWcPWb8ZjBt%2BptJuEFJxfeUuaBZmTbJH9whWv0wnkb2pn%2BJ3yu9VleNdoeur20LYy58owqPVqVxkj0%2B9XDhCQOLqYrzcu2CU%2BLCeDNPOHXu%2FDz%2BYyZDDtcwlmJOxgpX0%2B9If1nqT3i9xTILfiO8ofjfLbq3poNr6c6PvZUW7PR%2FDmVrFcLnYgLLiWAnqZEazcHVzqDQT4gCw4kcECe%2BKwN3UUXeWIeRRSz6ac55iUXiq6o6DyBSHw9263cBUttUzSG%2F1NcEk6LSG7QfwhBFa8N20MqleTFaJ7S0GZKiSBq%2BeDRD%2BONqJ22w%2FujjvIY9zxHc342uKdMXyls0%2FLbhOWEaxV7CrWW08WGq2LZuQR%2FavphhgzzfVNWPG5mFFSrEuD0TSXTn4Xq%2FED9kmJRQkWznZK%2FGC856OTrYF%2BUTk50FZ%2BJ%2BK9IwvwuZOdddp3Hi3Q1Y6brkIQpheSHL9ktBYx6K2gxR1WI8wo78tD5rnf0wX4hYQWjJ8LYJGpiUNFnUJfEx6NcioXImud3m5urK6ky91%2FAnqTbkrq39LKHEK83HbX5O%2BtoD5wiGyqp7jqv3fe0z8ZMcR5ORaq%2FaM0tmfrtV5ykDrgG5DK%2BbreHhAS1Dhf%2BGemf4ru6swn4ChywY6pgHRxaz6%2BIfo9QhujjYWd3tNwgv3gutZivrjKzxHB0hPNjKuNA0wzhWPxcyYRAfm1gBD8L8SOtr9V1QQN%2B4SoeT5whwNorrlKNxtHH3Mn1OWFqsvwLGsL9K5wgzv1mitt%2BcvaY7bUqADpOGW82i5cNflnhYdZFYtNP7Yo7TqLH%2FR0V3Y0iq%2FOB5JFpwiYtdFitv5p15IUMgoUjv7yw8xVk0UX48KQi1D&X-Amz-Signature=20926b0819824cc20dc2f52d70faf9c0d3f71e46103fc7d8142596cb9377d121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

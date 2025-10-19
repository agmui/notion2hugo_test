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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYNEMLEE%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIGPh89mubCUBjek9RoCb%2BSG1qHfGRZpFa4KwVsFQN%2FbGAiBDXB3iACEFncaEnGatlCdgcrM8wuVJJ3HCApNO4voGwiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbVlbLb%2B7ZL0F8VPyKtwDSE2dIEaYH%2BLyvng5KxNj%2BVp4mH124InVp8fbzDCbq%2FmEFUtvAP4Att4N4nK6Mq%2B6EC1MpKxFca7ShfH4pzYUuY%2Bvgfunn0ImcImebNFHd3YU61x%2FvT960XdSZrDPjiftzR8yRGvkIOYRL5TpELwsKsbAwztSaZONErPnzotdU7%2FtKEkMCsin7A7bbMDQnGdrDGcEVpad7hKd5YstfCjGMKGbhGCUIZgx5sbehq8MhQKHYn0cML72yrj0u78ntRcCR4EEIq7pi0oBaC0dmCor1VIYONzuy6ThMfKCJNk9aNuhCUIotUNJ1VAqDcwQUMeU1SVbSNn7TPCBsUL4D0ObveOwBASMgscOyAWCmS37UoOP9XSGyFH1zJppjzRL6GX6VTBcIlb7J2sbKNYxZTs0UaA%2BlRJeedHPk%2Fo%2BADRFzIf1lX7ZFKsG3vAeT8dMANZ6rJQdFWtJhIGvutW7kKWPBCLM6lSU%2FazOSE2Ukl6xEFHwhEW%2FgJhjhdpy73k0BEC9biZiPUqjM%2B2zMgmcbBcvreyC6NxPFM7u7yLjJ52HXb26IiEILcFK%2Bq0IfX3Ck1qCcYTzhgrvNabRjaBhfRa1Xt3%2BZQwfb23vVulzjG0s6TQE7Bn4joEU52MaFN4wu4DRxwY6pgE4EbN9x0exyXcJgYD3xay0ee0EG5%2FSXXulVsQWs4oJ6%2FVStpV0fLCFeSawlU4uVqUteKunjTUKnQqXOob2AgMvZCL%2FPdSHfhHdAn5jbHSWD04X8oWlj%2FR%2BmiwNzw4%2Fc%2FueLl%2F%2FP%2FiEPWW%2FkNzwmxYFQ23sNm09%2Bo318RGcL32xMNGdrrbnNJW1sKGYKz%2B7vA%2FTT65G4ZNpqi6tnPb8z7hYs4kgolE0&X-Amz-Signature=cc4d2a803173929c59b2dd3a9bc471068d21befbb86e1c047b2f47a435faaaa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VETLWG36%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIDVZx9p%2FetYOpBE3MwwTY9g8bNONt3ltvyoM1LZoOWX7AiEAtnPJ9BGXJ3DShgXTm4e%2FM1oSnPUGAPqdefpGjudd28EqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiBZEexmvgax5wmQircAzdMy2YDYEno9FoTIuZD3e%2FHecmpKzOnJhhYvzqhpxNS3J8xuJPHMG9G3%2BCwWx21%2BqZjj7zYWuxypOcogJAkjqJO6HjayKm2I1d4Gobz7EmZI3HGi4Wr5GVXYLc3q%2F9XbIFpVn8%2B4i0Rc88pKtut5XegMD4BqEKl%2Bro%2B8YnNuRc%2BRBX3Xuq1Go8JD3XYbDLa3icYrVhI029LaJyNhClImg0Pwcs0nbhwxsIszHW0YsI%2Fovog3k2AGZb8SO%2FrF52Crs5XVbb4Gj6zxt4LG3uJ9NqJDai6AIzUC4MIHm5iAPKVD3glyb6E%2FfxZQVmZx%2Fdt3IkRJ2vYX03cHBi487XjeeLKoa971loTk61UEVKC3ZLa5VEkA%2FJWglzSBMp8xwG0o2zs2%2FZK6WM%2BZXulLDIRG58gYFS9Cqs0Xst75uLhAiwZkTc4sI1XFxu4wtao2R%2Fc8zO8CDRvAiYm0BeR4zstbr7o0IgeECKmgUj3dtA2g4a%2BrsQ4osLT8N8VGplOeuaGI3YDF3u3jjBE24MNKTGyoCz42jzrapURLTRNl%2Ba2e6KeUL%2FcdZFYiAsawk5Kj3Ch5f6xNm6oj5mZfFvl6SlCISnz62qhLC3Qt1Tg4PSXc8GZvVk8IVXeRwaAHV81MKPez8cGOqUBiVoxyXn2EHDDif54MloJ12zqp%2FAzOz8%2FuqCr%2BfUEL%2BFhakhJFz2lSmYJjdeaNQsCAv2znbnb5ZOBqfNm459nNhgR3gk4TC0eGCKulXx5sWNTRVQfPuS9dOlFE5L0Voqqrx74q8DDJKsKx05P4TAXVbgU3YcAbX2TCAB6z040%2BKTKJ6NNqgRuvqPhIQCWlnpTgsoj2RQk1glVqHshoB%2BlEDPULPA7&X-Amz-Signature=1f9636777657ca995bdf5c374032473eb8f8121bdcf2900dee0079c40c69cc48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTBNA2ZN%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFIcW%2Fz7gzZfufOrko71%2FkebPs0hhUhZhEuKzB77wi38AiB1ndbv%2B11Rg1VhfQaWZ7uKQSdb75lRphojeK0tM%2FQT6SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6WI2rrF8Ee1n%2BZ78KtwDzxr6XiLJTCUdPwVWG%2FaakoD6dQPupsuUYT2ubI92nHmiY%2B3uDWhU%2F%2FGz%2Bswez%2BWlSr%2F0UvaP2xKkRHTCKqJWD0Mvcuz337t%2Ft6ogTWQ6Y3tEF%2F%2F1MWR4iuwQ%2Ft4u8v%2F6v3l53EtjfGnFCPpy8Yl2GXhhkk7KDbS1zg5IQG7sSWPNRAze6ePWAW66g0mEQqPWT%2BJBRx17s0V3Jz3qb%2BQYrpuytfo%2FWYuFpADWlW8V61ftGVdHeuiCg%2B18vuV2E7mrh%2FlzXlJOVmMRU0qVXIYf6th1TkSyVOF%2F1TzDXfJySpcMnuR5Zff2APqy8XTbWJA4QiqvDLx81osKBjq%2F8x1zLmpvSoYRSez7AFd7T%2Bs6NF90OEC%2FiQalRtBw3ZW7cUTJ429TrVWspG17%2FAXOvdS1FRXHlh%2BOQjArl2E0SE4qvodndnaE0PwQCRyDfgw7IpRavPmQ9wevFycp5jZj8ar%2BcLJQ4jmWAitg4vzoSb9h4Nk%2BCZZOgqsZdFoGJ8TzxLj0cG07wVyuV8ncyPF46bEoUJvXmsO4MGtrF0Bkre71ej%2FXuiO%2BsbmUcop9%2B7oGYKAnI6Z55%2B86XwkswabC1oT9DdbwA64asnzY9llyw8QrpkTasEPeiTaGP0s7G%2BwwhIPRxwY6pgHsfjsfMePfwra88T%2Fk0R%2FpsuPGF%2FrI68IuiZAz%2FGcTQlezM7qB3tM6nLzbbA7HQYP%2Bg%2FprDGy6ZH9dNfCg1XmNsT9NI9b%2BeJS3HmaUSU7pw%2FvnTLDtqlpvvLFU%2F89w7de3%2FIkPfTxqUvIhNaogT8irD7pcFwW6hb%2B8QClw%2Bk0BHD4JMLhWHufSsnnUYLF4MFBGOOLHq0t4Dx6G3jTbjJKJ%2B5kAFOBd&X-Amz-Signature=be4262c5b20260f5963daf164c354be81dc979ea9c20f1fa4fe5acd8be1d0178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTBNA2ZN%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFIcW%2Fz7gzZfufOrko71%2FkebPs0hhUhZhEuKzB77wi38AiB1ndbv%2B11Rg1VhfQaWZ7uKQSdb75lRphojeK0tM%2FQT6SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6WI2rrF8Ee1n%2BZ78KtwDzxr6XiLJTCUdPwVWG%2FaakoD6dQPupsuUYT2ubI92nHmiY%2B3uDWhU%2F%2FGz%2Bswez%2BWlSr%2F0UvaP2xKkRHTCKqJWD0Mvcuz337t%2Ft6ogTWQ6Y3tEF%2F%2F1MWR4iuwQ%2Ft4u8v%2F6v3l53EtjfGnFCPpy8Yl2GXhhkk7KDbS1zg5IQG7sSWPNRAze6ePWAW66g0mEQqPWT%2BJBRx17s0V3Jz3qb%2BQYrpuytfo%2FWYuFpADWlW8V61ftGVdHeuiCg%2B18vuV2E7mrh%2FlzXlJOVmMRU0qVXIYf6th1TkSyVOF%2F1TzDXfJySpcMnuR5Zff2APqy8XTbWJA4QiqvDLx81osKBjq%2F8x1zLmpvSoYRSez7AFd7T%2Bs6NF90OEC%2FiQalRtBw3ZW7cUTJ429TrVWspG17%2FAXOvdS1FRXHlh%2BOQjArl2E0SE4qvodndnaE0PwQCRyDfgw7IpRavPmQ9wevFycp5jZj8ar%2BcLJQ4jmWAitg4vzoSb9h4Nk%2BCZZOgqsZdFoGJ8TzxLj0cG07wVyuV8ncyPF46bEoUJvXmsO4MGtrF0Bkre71ej%2FXuiO%2BsbmUcop9%2B7oGYKAnI6Z55%2B86XwkswabC1oT9DdbwA64asnzY9llyw8QrpkTasEPeiTaGP0s7G%2BwwhIPRxwY6pgHsfjsfMePfwra88T%2Fk0R%2FpsuPGF%2FrI68IuiZAz%2FGcTQlezM7qB3tM6nLzbbA7HQYP%2Bg%2FprDGy6ZH9dNfCg1XmNsT9NI9b%2BeJS3HmaUSU7pw%2FvnTLDtqlpvvLFU%2F89w7de3%2FIkPfTxqUvIhNaogT8irD7pcFwW6hb%2B8QClw%2Bk0BHD4JMLhWHufSsnnUYLF4MFBGOOLHq0t4Dx6G3jTbjJKJ%2B5kAFOBd&X-Amz-Signature=9f989ef156a26b0d5bef8adb369f7eeb189530f363e196ce511046a7fc41a95f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VETLWG36%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIDVZx9p%2FetYOpBE3MwwTY9g8bNONt3ltvyoM1LZoOWX7AiEAtnPJ9BGXJ3DShgXTm4e%2FM1oSnPUGAPqdefpGjudd28EqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiBZEexmvgax5wmQircAzdMy2YDYEno9FoTIuZD3e%2FHecmpKzOnJhhYvzqhpxNS3J8xuJPHMG9G3%2BCwWx21%2BqZjj7zYWuxypOcogJAkjqJO6HjayKm2I1d4Gobz7EmZI3HGi4Wr5GVXYLc3q%2F9XbIFpVn8%2B4i0Rc88pKtut5XegMD4BqEKl%2Bro%2B8YnNuRc%2BRBX3Xuq1Go8JD3XYbDLa3icYrVhI029LaJyNhClImg0Pwcs0nbhwxsIszHW0YsI%2Fovog3k2AGZb8SO%2FrF52Crs5XVbb4Gj6zxt4LG3uJ9NqJDai6AIzUC4MIHm5iAPKVD3glyb6E%2FfxZQVmZx%2Fdt3IkRJ2vYX03cHBi487XjeeLKoa971loTk61UEVKC3ZLa5VEkA%2FJWglzSBMp8xwG0o2zs2%2FZK6WM%2BZXulLDIRG58gYFS9Cqs0Xst75uLhAiwZkTc4sI1XFxu4wtao2R%2Fc8zO8CDRvAiYm0BeR4zstbr7o0IgeECKmgUj3dtA2g4a%2BrsQ4osLT8N8VGplOeuaGI3YDF3u3jjBE24MNKTGyoCz42jzrapURLTRNl%2Ba2e6KeUL%2FcdZFYiAsawk5Kj3Ch5f6xNm6oj5mZfFvl6SlCISnz62qhLC3Qt1Tg4PSXc8GZvVk8IVXeRwaAHV81MKPez8cGOqUBiVoxyXn2EHDDif54MloJ12zqp%2FAzOz8%2FuqCr%2BfUEL%2BFhakhJFz2lSmYJjdeaNQsCAv2znbnb5ZOBqfNm459nNhgR3gk4TC0eGCKulXx5sWNTRVQfPuS9dOlFE5L0Voqqrx74q8DDJKsKx05P4TAXVbgU3YcAbX2TCAB6z040%2BKTKJ6NNqgRuvqPhIQCWlnpTgsoj2RQk1glVqHshoB%2BlEDPULPA7&X-Amz-Signature=cd2f4c19309c554879cfb9b9495c913e85cb8ce336b4838703bf68e80f74fd40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VETLWG36%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIDVZx9p%2FetYOpBE3MwwTY9g8bNONt3ltvyoM1LZoOWX7AiEAtnPJ9BGXJ3DShgXTm4e%2FM1oSnPUGAPqdefpGjudd28EqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiBZEexmvgax5wmQircAzdMy2YDYEno9FoTIuZD3e%2FHecmpKzOnJhhYvzqhpxNS3J8xuJPHMG9G3%2BCwWx21%2BqZjj7zYWuxypOcogJAkjqJO6HjayKm2I1d4Gobz7EmZI3HGi4Wr5GVXYLc3q%2F9XbIFpVn8%2B4i0Rc88pKtut5XegMD4BqEKl%2Bro%2B8YnNuRc%2BRBX3Xuq1Go8JD3XYbDLa3icYrVhI029LaJyNhClImg0Pwcs0nbhwxsIszHW0YsI%2Fovog3k2AGZb8SO%2FrF52Crs5XVbb4Gj6zxt4LG3uJ9NqJDai6AIzUC4MIHm5iAPKVD3glyb6E%2FfxZQVmZx%2Fdt3IkRJ2vYX03cHBi487XjeeLKoa971loTk61UEVKC3ZLa5VEkA%2FJWglzSBMp8xwG0o2zs2%2FZK6WM%2BZXulLDIRG58gYFS9Cqs0Xst75uLhAiwZkTc4sI1XFxu4wtao2R%2Fc8zO8CDRvAiYm0BeR4zstbr7o0IgeECKmgUj3dtA2g4a%2BrsQ4osLT8N8VGplOeuaGI3YDF3u3jjBE24MNKTGyoCz42jzrapURLTRNl%2Ba2e6KeUL%2FcdZFYiAsawk5Kj3Ch5f6xNm6oj5mZfFvl6SlCISnz62qhLC3Qt1Tg4PSXc8GZvVk8IVXeRwaAHV81MKPez8cGOqUBiVoxyXn2EHDDif54MloJ12zqp%2FAzOz8%2FuqCr%2BfUEL%2BFhakhJFz2lSmYJjdeaNQsCAv2znbnb5ZOBqfNm459nNhgR3gk4TC0eGCKulXx5sWNTRVQfPuS9dOlFE5L0Voqqrx74q8DDJKsKx05P4TAXVbgU3YcAbX2TCAB6z040%2BKTKJ6NNqgRuvqPhIQCWlnpTgsoj2RQk1glVqHshoB%2BlEDPULPA7&X-Amz-Signature=732ab67aaf4b86a2947fafecb8e6f5d2a699305b770cf043d060875ee3476655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625HO3SXI%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDNXp2I5aokjsd4TKNxggz99btsW1zKJEFZ%2BTj%2Fctf2GAiEAgMpu8TEYpPm%2B4urO4D%2B3BeiP%2F3gEH6neNREJ10LCjREqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjVr8AuO6on9iNjZyrcA%2FkZJWmXLHBpIM5GEToueqKv2K%2FZB5W9qLUJwSiRWQkpmrEiqVSolP2cKetNXuy3z36Uu6Re5sWYuOeHfj7CofjrVTPPSamvPDgB%2Fyn4gPsamFtF4bbM8BlslphNxJVggnMIQGSCA1M3BKclTws4ZsPANa4ib35bZNx0rOC4dYC7bLSXGHpElExoxz1vegtTf7XK3agVVzKkxQ%2FTUa3GhuBSnAgFbZOnIIoIPw1hR1X93qJIStNrLW7lnnTekyEjm5QmAQPRQfXcdH%2Fl%2FajIvjM5XrBL2uRFwgil8%2FuVCe0kHHBH7ZnHmP56ImEGkyhFsCXzTfqG0bS1mltcdbtvaC7K8V%2Bi%2FykVSdJSDURLI681plcYuQq6aO7%2BIQoC%2BAz4CdPyFTt8j8PFgdxB3id8JEZgPqH3FiczyTmFn9%2FQZBQDa8zs9MSwhBmNFzsmQhJIOD3D9WjnQGhGWu7pItsUf2TqW1GWscR09gCvz5J0RUfcwmG90ixdKmwJB%2FkWKWdGbhd50BFHxgIaCKw35D%2BUuhKeqHDZbRouqfmytPVXzpzAqHl7Zk8alP2nJGyKB9go3EGUy%2BUe%2FvzQPAvJqFNfiglofn8YL%2FcELGyIZ2LfsdYla8CL9njx8fnusz2OMMD%2B0McGOqUBK2RA8%2B15esUFV0vSQgbgVVSgLOTS4UDPZLfsr4vItURdMbEA6D3OIPkRDJJ7uJdwPmK3ZZAKdwY6TIZ6FH3PJ4V6ZnRrPDhkwfS6t5GW%2BcPYAS5rpUuje88M00juXA8FZW89zxnFZrT18%2BH1cIUnKtbTxxWGMhLNdNzvSeCk0LpyN3ENaNMSweU8F0dlDsnbBMT9%2BfuH2SCZbXutwYpVDCbH6hI9&X-Amz-Signature=ba4b634a53c88bff42825828e209927ba1110df67142f2e10262fca0da272e7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNG6FK7K%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC3CEVp7tNuYdiiUQtyaiKhW8bK3p5nNNkJJKBv95Ye9AIgDBlG0Xo%2B43Enkq61sgFOwRuqJ6IbuUmvpIqCGtWh1WEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIimhkgs4qk1T0n2ayrcA8LAudyLEzthXI9q3MiLpkOkw81fNO72GFsWt%2FA05H775l0bRrBYmfFa8r3Nr%2FWj99mml6OO8qsvUW%2BBi4Avx6VYQs05GFcfWGkgbSXOkUCPo8UNq5xlAPOjGgme7vz0HX9UddB4wtI5kkcn8drIWX7uPUmJlOmo0Jcc8aBzDqK0GsgDwZTByokv%2FnLoG1fjpxPusXIPpkPpNF4aNLJA6QC%2FfUqzgByceVZUFpBACZtyTs1m1kKadvREeGOV1%2Fs8fy80qy97FhSPUvLaY74e2WTbr3tngI9Dl4R4gLYhr6fkviKwIGjsHKZGSTsz4rbs7Wp1eMe2kQzkCx6D92TvD5gaW2Jsm77fy6x92sExoXBu1gIbAimtis3dOFYmFrFaUx95LByJXjLqH10%2BEu8e3z%2FOYyoRzLFKU9JQMlKb4P8DxLjY%2FwuUUItBzf8i3NU0NGauGKHFqfRJ%2Btuug%2FTwuMgmm%2F79cLLLIdLlByr7sfqe%2F21A4l2ruxvIZ8vR8%2Bf59XvO3HmL%2B57UsC4X6FrgQaCMsZb8%2F%2B0dSC0HWBp7wIfnkQHRfOpHYicMqcOx0FC35R40fFi%2F4cJctwIk5vMOmNYteF4SjabPoNZ8y5hzz8rqA6wYHhB9XE4gS31fMN2wickGOqUB0y5Cn0dCFnvbKhT9LWf6rc1lUUIGdL6pVGG90nuNvMmbLEu7wLLs0gDarJd0SNS%2F3Wxw6DVTGv9Ull9BCYr9qUcIOMbclEf3kzrLT1C7yYl1ODdxLGd1Cmgs6crF5JpW4jmGyWwMjPMiQCo7C5%2Fwqk8vtCI2T25H5DrdP5dA8hjm60UJuhOTvMN5%2FGRuoKFHOq1em3SHaCqmwimKXdX4tua74qOx&X-Amz-Signature=b0fcf237b6504c776234e908eee386f30cb197ad28933a6ff4f6686f22c4bf8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMBCR5HY%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC5PBZpNyhAnZwljwNSjAKpdKe9oyKBy7uYArQjW3E3vgIhAM%2BcuM6YNIyu2pN9uCru7z%2BzshdrV0%2FC%2BScETZn%2FuuaIKv8DCDIQABoMNjM3NDIzMTgzODA1IgzZHwS3%2Fr9CEMzTl%2F8q3AP1pyUsy2Z1q1nlmnIvNlSoaOqpBPJXd39cgEhqzcQ2uT%2B84K87n%2Fxw1TnGjy68L51V7oOLD3ITH8ZToMv4%2FjhbGYEnchwz%2BNLCLpCy3ZOMGLouhX0AraFivuk8rFyMmK8CuTCVKgpRfhaHXIBj7gec%2FvBS6M4P6lm1w1PUksxRcw7HpH%2B5bSDWa0JFEvje323ve1LOjBJIv54EBgRgPwR9%2F9PBEpucCUBLHvoDmAHV%2B5%2FrMpMogPXa4F6FLLaSPmFnNDxeFLVrXgvpZsGQXMpwjeIlnzR7wzqDtYIYCCA4GR%2F%2FnLWQdPre3n93rMPzGyqsRxbb5TzroI27pIsG8ipiYS%2B3eB8mp0Qs4f3kev74F9kRfKzGTs6lp2ir7qAsTDLZYuguwjFhXgpGfCIQVBj49%2FJYN3CqkoFaL5zFSTsT9rV5%2F%2FpbPG3hgbSCLgeswK%2FMkigsQLP22u1bTn9E1U%2Bhu%2FbH9Ep8U2DxmReGEKN0wC7JxcoyppFlczB6gp8%2Bcz%2FPp9PYQMiz0reNnHAAnLY7xDXsQmbeosS1ylWNHJYjCkZ4T12JoyJtH4pLjrvan4zvdw5%2FspX2NAsla3tVffJ8GBn5YNCeZa1%2FI%2FI309i2ND9H3BNbItasYJlLXjDUsInJBjqkAQJQeqY7HH8Of8%2BwuTyFEQlQuMFRBZm04IdGc6paCo836MmkNYixc%2Fk4HaI6cLNKpdgeTD0OYUR5MSWhQQPJvjAeUgg84R3yrBggd9btGAIgZucKJEAMMmsDokdiTs89VL6WWUkwiiEdJ3iKH%2BIvCmRvFCHJw7xCImJWHGJoA%2BkEIEZDVx8036jzJp6qTOi%2FMYCNY5Kg2xTmM1kTJfQG9B6vPfuB&X-Amz-Signature=c108f5e5ea01718df62d7612d7d994dfab8fcba2ae5e9e2856103ec749f3bced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5HJSTNG%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDdwrv7FfrIXsCZu8E0WOSzLWrkXh5zGq5cAfbfG88w6QIhAMw7BwyrXPhby5LlPreXZFhfgKRzg2Jmj99GIVoHaTyVKv8DCDIQABoMNjM3NDIzMTgzODA1Igxf5JP7wDPYNu1enKYq3APmyVaBXZAR%2B%2F5eD7EvrdxmUZ4VQwSUxoEkbQ7NdyQU2w%2FRHvgycmi%2Fr2X6j4GKv9dssNPh%2FrlMt3RA5k8au2CA%2Bw0FUFOTLAQrLVPUieItzh9ug7i7cTR1JS%2Fc%2FYfbzwv4Zbz3uBYrxmv6%2BKCiMacSIJFjRhv2AmnivpnRA8LduZbfOrQJRL5XtEDLJ1OiCY%2FOsDAISKy4elsO0m8LXvScH66urhQZW4DhVN3vxiplhxlhtI3NrJTjBU9mGLJ%2FwQ2AZFXVC%2FjIG2w9wJcuIKmUSETxkMsGEOsU6sl5P2ZtHl9weARHz3UsAO5U69aVLhOwhcQC%2FqIZPBW9d0FmTZbYnMTTvo589TCP70tyvGB7PwU%2FXRq4X%2FwVeG9fqaNikj9%2Bnpczdw27myNjl7OkHhQw7sDE%2BmmyDwcRQFDqdbe2zf2C4kotyGLgg%2FALq%2FOfeNHC74JSncCMw4Q8CvKdc5N2D8kZaiIe2Ku3Afd%2FgBHmemeziG8Dheo9gIs3RWblofglHp3BAbge3%2F6TZLwkm9rgjvFKI7i%2BXCxA4tDJ6TtVMrlu91OpRyn6NtHKrf1bWYwhqJUwH2i3Zk2JONUdWRcSMwtG54FU7IjXZ%2FlsxQK7ehHreJY4szOYRcd51zDrsInJBjqkAaSfBCJ6JASyqL0N8gFr0WCeswlt2wGtbsmlsN4Ke2NBnkcWkp8nArgPTcpP4Imnih%2Fu1O8UBbn5tjIlYjxV06fsYIZVX3bJ3RdTI5Sfj3OSzZ%2BC%2BJh5OEdik3zpeOWhQcfAKuuqw82vEKZe9%2FrmGwMIovpvHSLgbpLdbL2oHrK0886V1APmDiTPBQ07iS8utER5Ic8z03Nd2BZB1tAfdt9CrIbD&X-Amz-Signature=6ea0ee420fc9d83f8bf24f5c324b40d7a5646aed2e84d1e1dee4e65ba3ed53be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5HJSTNG%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDdwrv7FfrIXsCZu8E0WOSzLWrkXh5zGq5cAfbfG88w6QIhAMw7BwyrXPhby5LlPreXZFhfgKRzg2Jmj99GIVoHaTyVKv8DCDIQABoMNjM3NDIzMTgzODA1Igxf5JP7wDPYNu1enKYq3APmyVaBXZAR%2B%2F5eD7EvrdxmUZ4VQwSUxoEkbQ7NdyQU2w%2FRHvgycmi%2Fr2X6j4GKv9dssNPh%2FrlMt3RA5k8au2CA%2Bw0FUFOTLAQrLVPUieItzh9ug7i7cTR1JS%2Fc%2FYfbzwv4Zbz3uBYrxmv6%2BKCiMacSIJFjRhv2AmnivpnRA8LduZbfOrQJRL5XtEDLJ1OiCY%2FOsDAISKy4elsO0m8LXvScH66urhQZW4DhVN3vxiplhxlhtI3NrJTjBU9mGLJ%2FwQ2AZFXVC%2FjIG2w9wJcuIKmUSETxkMsGEOsU6sl5P2ZtHl9weARHz3UsAO5U69aVLhOwhcQC%2FqIZPBW9d0FmTZbYnMTTvo589TCP70tyvGB7PwU%2FXRq4X%2FwVeG9fqaNikj9%2Bnpczdw27myNjl7OkHhQw7sDE%2BmmyDwcRQFDqdbe2zf2C4kotyGLgg%2FALq%2FOfeNHC74JSncCMw4Q8CvKdc5N2D8kZaiIe2Ku3Afd%2FgBHmemeziG8Dheo9gIs3RWblofglHp3BAbge3%2F6TZLwkm9rgjvFKI7i%2BXCxA4tDJ6TtVMrlu91OpRyn6NtHKrf1bWYwhqJUwH2i3Zk2JONUdWRcSMwtG54FU7IjXZ%2FlsxQK7ehHreJY4szOYRcd51zDrsInJBjqkAaSfBCJ6JASyqL0N8gFr0WCeswlt2wGtbsmlsN4Ke2NBnkcWkp8nArgPTcpP4Imnih%2Fu1O8UBbn5tjIlYjxV06fsYIZVX3bJ3RdTI5Sfj3OSzZ%2BC%2BJh5OEdik3zpeOWhQcfAKuuqw82vEKZe9%2FrmGwMIovpvHSLgbpLdbL2oHrK0886V1APmDiTPBQ07iS8utER5Ic8z03Nd2BZB1tAfdt9CrIbD&X-Amz-Signature=808f8ef02cc9ca8bd702283519cc66e2643a43cfe035ab65207bb038a7be7b50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMBCR5HY%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC5PBZpNyhAnZwljwNSjAKpdKe9oyKBy7uYArQjW3E3vgIhAM%2BcuM6YNIyu2pN9uCru7z%2BzshdrV0%2FC%2BScETZn%2FuuaIKv8DCDIQABoMNjM3NDIzMTgzODA1IgzZHwS3%2Fr9CEMzTl%2F8q3AP1pyUsy2Z1q1nlmnIvNlSoaOqpBPJXd39cgEhqzcQ2uT%2B84K87n%2Fxw1TnGjy68L51V7oOLD3ITH8ZToMv4%2FjhbGYEnchwz%2BNLCLpCy3ZOMGLouhX0AraFivuk8rFyMmK8CuTCVKgpRfhaHXIBj7gec%2FvBS6M4P6lm1w1PUksxRcw7HpH%2B5bSDWa0JFEvje323ve1LOjBJIv54EBgRgPwR9%2F9PBEpucCUBLHvoDmAHV%2B5%2FrMpMogPXa4F6FLLaSPmFnNDxeFLVrXgvpZsGQXMpwjeIlnzR7wzqDtYIYCCA4GR%2F%2FnLWQdPre3n93rMPzGyqsRxbb5TzroI27pIsG8ipiYS%2B3eB8mp0Qs4f3kev74F9kRfKzGTs6lp2ir7qAsTDLZYuguwjFhXgpGfCIQVBj49%2FJYN3CqkoFaL5zFSTsT9rV5%2F%2FpbPG3hgbSCLgeswK%2FMkigsQLP22u1bTn9E1U%2Bhu%2FbH9Ep8U2DxmReGEKN0wC7JxcoyppFlczB6gp8%2Bcz%2FPp9PYQMiz0reNnHAAnLY7xDXsQmbeosS1ylWNHJYjCkZ4T12JoyJtH4pLjrvan4zvdw5%2FspX2NAsla3tVffJ8GBn5YNCeZa1%2FI%2FI309i2ND9H3BNbItasYJlLXjDUsInJBjqkAQJQeqY7HH8Of8%2BwuTyFEQlQuMFRBZm04IdGc6paCo836MmkNYixc%2Fk4HaI6cLNKpdgeTD0OYUR5MSWhQQPJvjAeUgg84R3yrBggd9btGAIgZucKJEAMMmsDokdiTs89VL6WWUkwiiEdJ3iKH%2BIvCmRvFCHJw7xCImJWHGJoA%2BkEIEZDVx8036jzJp6qTOi%2FMYCNY5Kg2xTmM1kTJfQG9B6vPfuB&X-Amz-Signature=0bc285cf7481371166d0b87b680edbe5d13e700640fb53912ffb3d9fa3a5dae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMBCR5HY%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC5PBZpNyhAnZwljwNSjAKpdKe9oyKBy7uYArQjW3E3vgIhAM%2BcuM6YNIyu2pN9uCru7z%2BzshdrV0%2FC%2BScETZn%2FuuaIKv8DCDIQABoMNjM3NDIzMTgzODA1IgzZHwS3%2Fr9CEMzTl%2F8q3AP1pyUsy2Z1q1nlmnIvNlSoaOqpBPJXd39cgEhqzcQ2uT%2B84K87n%2Fxw1TnGjy68L51V7oOLD3ITH8ZToMv4%2FjhbGYEnchwz%2BNLCLpCy3ZOMGLouhX0AraFivuk8rFyMmK8CuTCVKgpRfhaHXIBj7gec%2FvBS6M4P6lm1w1PUksxRcw7HpH%2B5bSDWa0JFEvje323ve1LOjBJIv54EBgRgPwR9%2F9PBEpucCUBLHvoDmAHV%2B5%2FrMpMogPXa4F6FLLaSPmFnNDxeFLVrXgvpZsGQXMpwjeIlnzR7wzqDtYIYCCA4GR%2F%2FnLWQdPre3n93rMPzGyqsRxbb5TzroI27pIsG8ipiYS%2B3eB8mp0Qs4f3kev74F9kRfKzGTs6lp2ir7qAsTDLZYuguwjFhXgpGfCIQVBj49%2FJYN3CqkoFaL5zFSTsT9rV5%2F%2FpbPG3hgbSCLgeswK%2FMkigsQLP22u1bTn9E1U%2Bhu%2FbH9Ep8U2DxmReGEKN0wC7JxcoyppFlczB6gp8%2Bcz%2FPp9PYQMiz0reNnHAAnLY7xDXsQmbeosS1ylWNHJYjCkZ4T12JoyJtH4pLjrvan4zvdw5%2FspX2NAsla3tVffJ8GBn5YNCeZa1%2FI%2FI309i2ND9H3BNbItasYJlLXjDUsInJBjqkAQJQeqY7HH8Of8%2BwuTyFEQlQuMFRBZm04IdGc6paCo836MmkNYixc%2Fk4HaI6cLNKpdgeTD0OYUR5MSWhQQPJvjAeUgg84R3yrBggd9btGAIgZucKJEAMMmsDokdiTs89VL6WWUkwiiEdJ3iKH%2BIvCmRvFCHJw7xCImJWHGJoA%2BkEIEZDVx8036jzJp6qTOi%2FMYCNY5Kg2xTmM1kTJfQG9B6vPfuB&X-Amz-Signature=4594e543a296d6a224665bb39f783be8f1a6ec2d26d0c364a9e74acda7126c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T22QJAGD%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCD9fe0CSpBohK4xq31R2QJ9yyi3rJLt%2BGtUiFhhxbIfgIhALMqYuYCAn8qjN9rpYDBPvw%2F1zpkVq9D2h%2BuznwrXYwFKv8DCDIQABoMNjM3NDIzMTgzODA1Igwbmj4gs%2FI5kCGaD04q3AMEX0HC8%2FMeiY2Bpgl1zZnN0rWxbLSSXH604F8Qw8E9jtkH7vvpcxKQ8cyxUNEjQF66Q36WXgcnY9TysgAXtRol19%2BRRAcx05R%2B1XpkFMuHSB0M43nzAMblUAZWM0IDK9xbymeQC3mxoMLsxBWwJwDIom6H%2BmmDiChkvocl3%2Fsabsg00s6rIWmQEqxSWYfNNfKd2SbF5eb2jLz1KdHzga9J8iUFpMTijcKWNL6aJyaamYGX0jhQiAADfbabPVxmhAHE8xPKmu%2BGhAKNAATz8880G%2BvI7HUI1NeGpD%2B9AC2qfSDB5tXb1Z0lnlHdvBuzf85e47mtobuSUj0U4VBk%2BtZhJI1jSSzJLp%2FmtgRBNr4JmmgK41dAUsBKO%2BY4e7%2F%2BdVChZiI0tt7f1VNztA9iMgOlr%2B9%2BK0w47EuKHy%2BcTOXyo365tjS36FbB0i8FY53mfRINQtGc7TbXHOd54IS2rJRvtPNYMC2dpIORcOyrVZDvS5bVQAENVgiyw%2BHf6BzmykKmq2ohnk13NR3LhbEca%2BgmfyXQ%2FtaIxr7CeIW%2BhlWgMRkj2BOQsinT10aY2KL4iyFig9r%2Be4ZDkgrAqzXlppqzR6Xg%2FEPufTwI7nU0rQqvKbfnIDQdQ5uQ8Nd4xzCBsYnJBjqkAeeTjQFqrfc2OEW46bA8vtOLrLGvshLlmBKneP2hdYzJuDT5B%2FJbcaBXYpHlIVq64bwBxKWgJkfQjDo37qV4%2B%2BCUzp2oQZ0lLNcALwgGWcfOh1nUz538cHWsUu7vaHg72P3Z5tniNZW7BqSJ%2FlJzj5HbBq06R83VLt6rut9cHPd0G8gOrEKu1PPW2%2FVHifPsE%2FihN%2F69G75wQTeaD0iTfo6JP5gn&X-Amz-Signature=7a4cf610932b957ea0582a62753860e83c678afa379cc22215857311462ef150&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

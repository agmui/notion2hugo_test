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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IMMKJTJ%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIGlmoV9rN2mrgcqJkjh1pxZbK97oOe3DSp4i4F%2BkAluOAiBoWs1bkrSRaecqZV5FSdJu8qnFxUguJCw8Wjjfn1%2FcVir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMj5O%2BZYqM9F4D4O%2BbKtwDz1XG%2FZ34fuTFnm%2FasE03bRzWTpnp%2FOX4yGIuS2CNl75nDBXCrnPiQxOa%2BFxb%2Fm3ZUJZw8rdH1rPIeb6QJvZ0Io07NpGeVcRkVHP60ecASDBSS3XzKBR12m3VFhvxAC2TD0CaFyz3A4NxWdS%2BzHYTGKTka%2BoFg1idIY5d8%2FWTSI6Dl7rTR6cphgdIOsBoU0kvg1GEWm%2FiAAOFa5MoKuJet5L3mVES7REjGlrkFLDZhlF5g%2BDq6nC%2F7IPtLITHlIjrzikO2Xf2IxDsfguETlCOUtsyl5YQeR4mS5aAgkLj9iLHmtEKVrPuY48L4kdEFXE0Jvf3HE5TBGjuCDdHE%2BTOkuiHVSBbi3OqjypDWXixn7CTqHTLokh6ttCL6h7wZLJT%2FNRZhpVcm8B%2FNyvCdzVs8PzWs%2BFobWnKEUY5zyGedaGzWEDIwpaeeibF%2FcRCfuO%2Fh8XwsefiKnYkyUvKHFH0rSwRBZJOabTmhE7h0fFJ92fJvnyhgowcPU2khrb4lG5QCgRc7qMrgMhaRNF3PipiEuRuyHDnvxxvuoQtFNSVrs34L3iwRjHSxcUIQMnWdbyzd901PWzdkPEo2VTTBGSjX2ey8RwAtgdJze7hhVnvlvmoY%2BBFxmNBcK0MwLcw%2BPqy0QY6pgEynT8%2F6%2BRGD4lIO4XUz1CPsut%2FbMBNCaqxG5TBRQCA9Fj4weC8cfCx78YbhpMUuaOk2EokpC%2BPWS4QAnBricam%2FmVlM4Ew%2FKhuN0J%2ByCuTI2qTKp9J8henWOD1CODWIt4GGUB%2FZFJSvCKxdip%2FdP4qdNpoiWYbqVKFLKAjz9dF%2F9olpLY2jDgsgsiLLSK7Wf86%2F2NYjTDyvZ2aGH8pdcbOWdjTl8%2Be&X-Amz-Signature=c2e5e7f39e0f685386fe3698e4dc239b9a5f2979d5ffd6a970c18ad859748eda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYVVISP5%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCmIQlnFm4%2F3GarLACg9YB%2FXUHtiQByGcvth0%2BCO4f%2BbwIgN9ROOxZhw5oNa0zfa5VxB0Y%2BJxMWOfposCRZR6xJn%2FUq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDD0%2BH7Ao0xCnama3syrcA%2B1aWhC2c1zC7A2S8Hxg5ycqHoQd6ftKAaAHRA32nLk3TpYIGHRfkFjSAKU4OaXz9ej4fAT6vqVJQpLlHPaXdY1VyIiReHdr1GGL4ATIT0RIWfPqmKwWCaaOWd9gBLHsS8IIeNjV7FTG4zFkpU8jKpZgF8NwZIPkHMht3FZEWGPRVpG4BIrVxUtE9hjoyjbWaa%2FzSasb%2FkvPeV9TUZxlyYq5PzbMUS%2BJow1dgUfE4%2FfPNuLCVPdKnyiaelTF2aeKM%2FB%2BWmd6kR0yThD1H2vs4nEReN77D0yWjrgNj%2BhxajJ%2FNshawFkAi5VgGMYVnLLZWE7ck0n4nEpQ3EVq7oB80wo8LG9ilS3%2FkA4dW8K5s4DZ20rrMU7zSMeeWBX84MFdHhWdUGX%2FxrfA8TI9a1AJ9up9xvAMZqkzlvOP3TOY%2BHSkRKJZVOIfw%2BWkBjGVloQJ9R%2FW9289mkwdRoSKBeWmMP9Dxn0mKdo8LQSCDBSfCt6jpCzzbIrMWIJXaUjwpMSpaECdY8zMPkOa9oAYLCGP6xLUSKuJKPM259zDI%2B4LyVwvzn0y0IPKNDObYZrHLvVHknCoyDjDMTWERt8THjlf%2Fr4L3Ew%2BPe8fyGUDU7b2LbL8jclxlj5%2BDgc5lPD6MIn6stEGOqUBzqQAapJfgRrf5EiSqHuBb%2FgGh6IoxbmKEe0dCG8jfAoPDxNcA8ywaglison4SlFgjq%2BBgtbPF0h4kmxQK21RDQqz6XhCg1CU%2FssoN9EYoJxUasjHQaakUM2hAkoaOgExrH1EdcNqrfkJUTjISpPixIT6KvZVd6LtbQ0AYQGPDTJpJeEgmZHib8FJCPH1hfsSMm0yx%2BMmcRRclQgz3ylLhf1IAkur&X-Amz-Signature=badc6fb10aa9b7bcf19d6c5af3f00f8d1501c1013ee7584e27eb9e12bb093437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PGTICZX%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCbVuJ0ztcQD2OeWhqqxeKdLBV2iLq7na%2FxazWQTOyFgwIgMXBA9aGs%2FX%2BkNkCKCRwaSKnoAB7hDBiKejLkTIURynkq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGVr%2BHJ4Nv8JTNWiySrcA1Dm34jVvg14u8LHSOdm4Pj26YBoU9a31UoWMcWsUOxteOSAmhNLYOx9x1ZLRrEVED7rlTBNDZKdmheX2r2ov%2FavAzCoRIdIZJZdejHKuuGj2%2BmG8uNPek59iMG6SYB9onJTUoktduIQtemmxHI08FpVr9hb%2B87ZkP8gNeWYqM6XhXzfxGCOw5fdaZI1rJ2nANTYHjvyTWHYE8hJL8eeVFDV9uAp4uLvs%2F2ZLnnBRY9%2F1SMfzJ4EE%2FnCRlaNEsqmwvYtQuNneYGdLxd63NXDMXDgre0pSS1fiBuTLlqzeqoA0H02mDZTWHUZSaF7B73P0caRlVUlUdlDTqwzdOGbL8W0yvXdfvV2gUifDixypK1DZ7COhjuFJaeGXi8%2FiJ4qtjFtzfxkwcb%2FkxNPLn%2Brs9LFa9n3AOl6SG9e9KGwcy9lCUZTLxsylqYWv1B4WFNwo4WTQmi%2Bbyt6b3BjH%2BkhNR6ByFy3PSSWOhpOnncBkAOPKwVmIw9Bg6LzRGhXdj6YGkhpg9WH62GA8dlBEuVee883mEwpwKwMIJVw9oYHZcRnzRWT5YP4q%2BCZvxmzwIDuApGDdFScfhe7%2BLrBNByiozhw%2FW9rCGdq0MPVz1IYmHy5bFi5O4FaAxHC9J6PMIv7stEGOqUBwGdmeNAZ%2Bj5qd%2B%2FI09pmO4dCwE5bsvg%2B1aS2WZ%2B3skclO6ppxVQOIosepYOKT6DFDOicF7RHOeojcbYuKy4Rs9GJUpSfAlgm2m7lVvCcFqyXExLwq5jzWDXXLXFvXfP1F08wmwSnjVlBirkUFLzMk%2BcxaJOiPh9iNsrrX8%2FthDP229NzO16yrz9wxripFI2cp5mQFLIa%2BHcuILhmjURgzH6yxvMT&X-Amz-Signature=ed92910eb10d45f08175470cbf035e094b0747c45bec810dd25317b640c9b8bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PGTICZX%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCbVuJ0ztcQD2OeWhqqxeKdLBV2iLq7na%2FxazWQTOyFgwIgMXBA9aGs%2FX%2BkNkCKCRwaSKnoAB7hDBiKejLkTIURynkq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGVr%2BHJ4Nv8JTNWiySrcA1Dm34jVvg14u8LHSOdm4Pj26YBoU9a31UoWMcWsUOxteOSAmhNLYOx9x1ZLRrEVED7rlTBNDZKdmheX2r2ov%2FavAzCoRIdIZJZdejHKuuGj2%2BmG8uNPek59iMG6SYB9onJTUoktduIQtemmxHI08FpVr9hb%2B87ZkP8gNeWYqM6XhXzfxGCOw5fdaZI1rJ2nANTYHjvyTWHYE8hJL8eeVFDV9uAp4uLvs%2F2ZLnnBRY9%2F1SMfzJ4EE%2FnCRlaNEsqmwvYtQuNneYGdLxd63NXDMXDgre0pSS1fiBuTLlqzeqoA0H02mDZTWHUZSaF7B73P0caRlVUlUdlDTqwzdOGbL8W0yvXdfvV2gUifDixypK1DZ7COhjuFJaeGXi8%2FiJ4qtjFtzfxkwcb%2FkxNPLn%2Brs9LFa9n3AOl6SG9e9KGwcy9lCUZTLxsylqYWv1B4WFNwo4WTQmi%2Bbyt6b3BjH%2BkhNR6ByFy3PSSWOhpOnncBkAOPKwVmIw9Bg6LzRGhXdj6YGkhpg9WH62GA8dlBEuVee883mEwpwKwMIJVw9oYHZcRnzRWT5YP4q%2BCZvxmzwIDuApGDdFScfhe7%2BLrBNByiozhw%2FW9rCGdq0MPVz1IYmHy5bFi5O4FaAxHC9J6PMIv7stEGOqUBwGdmeNAZ%2Bj5qd%2B%2FI09pmO4dCwE5bsvg%2B1aS2WZ%2B3skclO6ppxVQOIosepYOKT6DFDOicF7RHOeojcbYuKy4Rs9GJUpSfAlgm2m7lVvCcFqyXExLwq5jzWDXXLXFvXfP1F08wmwSnjVlBirkUFLzMk%2BcxaJOiPh9iNsrrX8%2FthDP229NzO16yrz9wxripFI2cp5mQFLIa%2BHcuILhmjURgzH6yxvMT&X-Amz-Signature=3f205d0a07967d88ef09001bdda71dc8df879636ef1b97113deafb7b78405685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYVVISP5%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCmIQlnFm4%2F3GarLACg9YB%2FXUHtiQByGcvth0%2BCO4f%2BbwIgN9ROOxZhw5oNa0zfa5VxB0Y%2BJxMWOfposCRZR6xJn%2FUq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDD0%2BH7Ao0xCnama3syrcA%2B1aWhC2c1zC7A2S8Hxg5ycqHoQd6ftKAaAHRA32nLk3TpYIGHRfkFjSAKU4OaXz9ej4fAT6vqVJQpLlHPaXdY1VyIiReHdr1GGL4ATIT0RIWfPqmKwWCaaOWd9gBLHsS8IIeNjV7FTG4zFkpU8jKpZgF8NwZIPkHMht3FZEWGPRVpG4BIrVxUtE9hjoyjbWaa%2FzSasb%2FkvPeV9TUZxlyYq5PzbMUS%2BJow1dgUfE4%2FfPNuLCVPdKnyiaelTF2aeKM%2FB%2BWmd6kR0yThD1H2vs4nEReN77D0yWjrgNj%2BhxajJ%2FNshawFkAi5VgGMYVnLLZWE7ck0n4nEpQ3EVq7oB80wo8LG9ilS3%2FkA4dW8K5s4DZ20rrMU7zSMeeWBX84MFdHhWdUGX%2FxrfA8TI9a1AJ9up9xvAMZqkzlvOP3TOY%2BHSkRKJZVOIfw%2BWkBjGVloQJ9R%2FW9289mkwdRoSKBeWmMP9Dxn0mKdo8LQSCDBSfCt6jpCzzbIrMWIJXaUjwpMSpaECdY8zMPkOa9oAYLCGP6xLUSKuJKPM259zDI%2B4LyVwvzn0y0IPKNDObYZrHLvVHknCoyDjDMTWERt8THjlf%2Fr4L3Ew%2BPe8fyGUDU7b2LbL8jclxlj5%2BDgc5lPD6MIn6stEGOqUBzqQAapJfgRrf5EiSqHuBb%2FgGh6IoxbmKEe0dCG8jfAoPDxNcA8ywaglison4SlFgjq%2BBgtbPF0h4kmxQK21RDQqz6XhCg1CU%2FssoN9EYoJxUasjHQaakUM2hAkoaOgExrH1EdcNqrfkJUTjISpPixIT6KvZVd6LtbQ0AYQGPDTJpJeEgmZHib8FJCPH1hfsSMm0yx%2BMmcRRclQgz3ylLhf1IAkur&X-Amz-Signature=fb01aa81cbb02bfc6bf69cee8a461e1c55d8bad7f7364c745eb01ae850ae2eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYVVISP5%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCmIQlnFm4%2F3GarLACg9YB%2FXUHtiQByGcvth0%2BCO4f%2BbwIgN9ROOxZhw5oNa0zfa5VxB0Y%2BJxMWOfposCRZR6xJn%2FUq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDD0%2BH7Ao0xCnama3syrcA%2B1aWhC2c1zC7A2S8Hxg5ycqHoQd6ftKAaAHRA32nLk3TpYIGHRfkFjSAKU4OaXz9ej4fAT6vqVJQpLlHPaXdY1VyIiReHdr1GGL4ATIT0RIWfPqmKwWCaaOWd9gBLHsS8IIeNjV7FTG4zFkpU8jKpZgF8NwZIPkHMht3FZEWGPRVpG4BIrVxUtE9hjoyjbWaa%2FzSasb%2FkvPeV9TUZxlyYq5PzbMUS%2BJow1dgUfE4%2FfPNuLCVPdKnyiaelTF2aeKM%2FB%2BWmd6kR0yThD1H2vs4nEReN77D0yWjrgNj%2BhxajJ%2FNshawFkAi5VgGMYVnLLZWE7ck0n4nEpQ3EVq7oB80wo8LG9ilS3%2FkA4dW8K5s4DZ20rrMU7zSMeeWBX84MFdHhWdUGX%2FxrfA8TI9a1AJ9up9xvAMZqkzlvOP3TOY%2BHSkRKJZVOIfw%2BWkBjGVloQJ9R%2FW9289mkwdRoSKBeWmMP9Dxn0mKdo8LQSCDBSfCt6jpCzzbIrMWIJXaUjwpMSpaECdY8zMPkOa9oAYLCGP6xLUSKuJKPM259zDI%2B4LyVwvzn0y0IPKNDObYZrHLvVHknCoyDjDMTWERt8THjlf%2Fr4L3Ew%2BPe8fyGUDU7b2LbL8jclxlj5%2BDgc5lPD6MIn6stEGOqUBzqQAapJfgRrf5EiSqHuBb%2FgGh6IoxbmKEe0dCG8jfAoPDxNcA8ywaglison4SlFgjq%2BBgtbPF0h4kmxQK21RDQqz6XhCg1CU%2FssoN9EYoJxUasjHQaakUM2hAkoaOgExrH1EdcNqrfkJUTjISpPixIT6KvZVd6LtbQ0AYQGPDTJpJeEgmZHib8FJCPH1hfsSMm0yx%2BMmcRRclQgz3ylLhf1IAkur&X-Amz-Signature=f22566b2dced414997232ca700a61986e2b74f4580e1e91715f3596a41eb2f77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJXOUT6%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDdi3OWALZLMLKdAch3xn%2BkXcekzz6mRBh%2Bk%2BvwXnfYXwIgc9GoqpQEk7s6DJPKVtN7ktp4%2BZzX9h%2Bv2eYONyhzsSgq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDFkEPvbpOE9MddruFyrcAywKru78SX%2FP4lfEyBa80DrAPB3VIA41uxMAvDoVBe4DhAq6STi1dKBj472%2FU3XcAxTfCtRql7mbBJUBRXQGaK59K1IXK5SL%2B%2FRlwwkkOjZI7%2FSkM9Zury%2FU%2BatAI7aRqNvDNTnjQ9El9H3RD62JWKNWQR5cixf5XwqCVFvakIA8%2FBfFY5F0%2F%2BtxKygoMSlJvS6kmkS6IVZoupdTKbWCLjgb%2Bcw0cf6BXIfcwjm5kklsNFJdkABi%2FePBg4IkSXvDh%2B71eWM5IoxLz6PyoXbIJdGuizbsg1D9VGRBWmP%2FM7Rz2IbElyuJnQIoTobLxGHhoV0BAf373HhlZaASC1rwvjlHkjg6mNdvobompi4EeQlwV0FqMC2dZFAKvGxqJWM62O1poREPDpg9gNDJ%2B7oXW93eMJ3mOb%2FrjHOtsHAMTSK%2FnKvuUxTjuyK4Q1U8buRF3UWx53bft1f3ftGgBzgnfk38oYYx7n%2BlJ1iRxRofAoS%2F7ZKxXHUqfPQnv8TAU4yVVy86FZLnsEhH%2Bqent0Hu73UA%2FOxOPgMMwLSnwV7FBLH%2BprkgSPTnAhKXVlUgL2lqLf3MXHOOfICeFV8ek31DvaDprAO5%2F9frXv3zOJGNYb1H7Vd3iQSgHR99twLNMIr6stEGOqUB%2FZykqPIqoyzKIKIThH5%2BJKlkihA9xe7LWZk0A5WuS3vAQ4uNxaZBhpDCDgxvePVZrX%2BfRn5D6tyErYajapzbbui8ZN26hpnu1PsbK0oR7JjiZl2ue5POmV7sZVdphG60ga3QDyd3gWxGoHFwT56jj0RUdzVFCuQNbqSfXBK7WdSbGX6n2mAQz07LrY%2BBdCQvO5xB34IJXoLcOUhlgQwqjmbom9B3&X-Amz-Signature=ce6523ef7fc75c04ad13f2aa42d1a5d6169b244d23e379a386cf02a71e6e3c0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

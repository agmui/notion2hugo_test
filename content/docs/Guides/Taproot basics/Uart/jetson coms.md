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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR6GWVP5%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlrlhMYR7e4Ld6kc8YudEw2Yav0EHr%2FvSD%2F7nSl%2BUQwAiEAm2iBchK7pDahePS7epc78hHVnezeYmHrT%2F8Bj1J%2BZUgq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJU%2Bvk54CeI4YHySAyrcA8n1sr%2FZ2a5a6DML3JxWbDNTbazyxs%2BtTXzeoU4kiFXKV0gighnE7ljInDrPOEn0rdy%2Bw9nJ%2F73JBoIwh9iX0SlBRr4j%2BNJacOaS5UdsFl4wQlwfHWJhPH45a%2FyqsakkEGpy6ll%2BAx4wzYDpdSaR40ByCcijVNPpMBTsnUKwa6edtlgOjr9ug%2BUD6Nynysm%2F0CLd9iPAwzhaS25IlEm%2FeASxM52Bz64GRvM79aF%2F8o66tTBCG44x3wFHS0Ml9Llv56DoXNFConO4HZb5QHwWKWlBOlEbt13aZcTOjq6DxVq2zFkRjIy8k%2BrN9XfcW1tAHGgjHOa6naCKQ93BREAlPzWY2qgdmOmiOI3Qq0LFTe5lEJ3NUmFLs%2FbuIyAE9Uib34SyV6QPLjNRaR1z%2BYOQTNlmSbMrj5FABicj5b6dAXp6XS%2BGMspxzHBbfZ5Omw5SLgOY2xE4r%2FdnDnjabTp2qAmCQ9furNCLaOSTIK70OojmzY9dvmqLCNaxW94ljtTdraIa25%2FGLpbM%2Bywg1Q%2FZiZ9jkmolFpdhrPNaA4MP8V9sL4DnjY6EHgDGjQF4sJuPNa%2BCF6RQx5ELZVpfNVGxlr9Y3p%2FUG6mpA78eytwj%2FhSJNNKtAWuVRcApXnImMOrFwsYGOqUB4edALpKoojpR4OrGk3YOWvvZs9s0M9B5JcjdMKZPvGHxAC%2FajU6SbUwoxsCd%2FVxu7nCuQdjc3aKAS%2F0mH7FhWufEB6pgOvuZ%2FTaXX3zV0g1iizP%2FArZh8og%2BxZ5RNJL8fEq6IxjfoQssDFhIn6kyb4BgLHvtwymlp0mnV3talfl13%2FEBAeIcJd8a0auqLoIRyTMjWhwFpVvNB28AmKxg9CKnUQ5o&X-Amz-Signature=705155974eac7ea66651a3f9aaab0a1a471584158e6e3535449d51515c5caf95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z7A2I2O%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8d1qCXfRfbUeP2fxh29wv%2B8mlMvlAr82IA5dEMejyTAiEA1aWR0wlfxUxgoDBgaJlY2Z71Eyj1%2F9A7Hfbb5s%2FnkjMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDB8Q2WevSne2l6hnSCrcAx%2Bd7EGusYCcJropf8nRZZnq3W4U7yawEA358fiEwZxz3mYU%2FfcbaGYmhlNaFN6osoRkYkN4ZEWqQGFGkaCuXHXZUoTX1hNNBzmwksvnYo96m9m0EILzjfOQqA2bRtAOPzuOrdHRu5DxVh8cLcSpLE9bkMASXTMtTmeXVdC30PzptdwQZqZ90MVHuuAL6sRWah9MYgolz0nIFTMiZFMCg683WGUoRoKhLZw57fj82Qi0xI5W%2BO0NvVVI%2FbdH54IDKf%2BmeO3D02hpevVBJJfIkvf9xFix3FsEewcFqAyOXvQSIyhuGFqGeoSzOvm%2BA0n83Z0pyr6T%2FL4LwiKV9C5Y2LlQ2gpkFli3zW8Bu%2Frdq3DI62GkK3WGH10ofl4ShKadwzQf3Wxkr%2FlekKDh2KSbtWUXkyNqARUkyqdL2PhGddK8OYAoq%2Bb2OJ5i1yTj3JlhEk2OlJDTRNanQLhoGqgd2T%2FtS90VoMswNH%2FwGZHTMOtoJcYL23rBQ26hY%2F9ZlO2JVofST3zGY1qGjcWr5MxxaMal4SNaBjUNerbiT7dfDV5QNyxAoTRC6CqwT6fTUUOzxth2AAK8m6OELABCm9tfaCnb67vFKq2CvrCws0B6xoVTjVr0o3tKGe5FnNOkMLrGwsYGOqUBB%2BuxvmvbtV1KxGkXvh6cTbZK0pJBYlQ1mh4dSYg06QwdBqxsnPj20L221QNTM3PXZyGvrfckz4ce6gG2mLVQF98wS4%2Bi%2Fbrx8%2BbQAeg6SBmvHzJ3ioEWkzcCAjEwMzAGn7cx3318y7uKCxodngRWBIE%2BzVxzx9vbsUnogySg2gJCErK4hO7vEJLR36YWTixYohqOehD6QRNnxdmIcxbIfJH7VxPX&X-Amz-Signature=032a1cfc940fb132df0e0799d87533fcda631cebc99a840e028524361b55d9c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUEPVJS%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKkwvsiLVLaTdd%2FwxC%2BKlAyWaq1YehxQGCf%2BFZ1qwWhQIhAPWQ%2FaMXUtQkT5zzGsmk3JSUhJubKy9sWtgSIAM8NP47Kv8DCCIQABoMNjM3NDIzMTgzODA1IgxjQA3gBAqczx2YKzEq3APCGRjz2BtUyeIiJcMlxQEod5ZjQXvsY8UNfa1T6SWUF%2B2L7RtYqAhbKtyQooHXV%2FCYGdOPjUWo6zZ14t6U8n46g9Oihw4MZH9lIyeNVEp%2FRYCB%2Fj758ojiVNo7b1vpNJIgloGeNlaDrJv3w7oB9gaPwLHYqvTWyYXYa4D%2Fr2H5EyWRHO5DOx3njA%2BedAdJww2hi19aMnn8YvQ%2Fs142wu0JWc%2FX0ggDBlaZlpBeBwe%2BGz2otxWbW0OE%2B036oa3K9oRZ3lHVws9XKnnbp%2F1mcbUDyVrwR06%2FSuj%2FBBau6wstqB5D%2Bzd2go2yTjCKHF0scqY3mfOU5P88d9GEODLP%2BHtlNPGT9MC27uPBhvM9iVxP%2BK5LO6er6oe%2Bw8K1yv%2Fic3tEbOTGVAyBoCUeWQpUa5DMvMhGg9X%2BUQviZKtLC5gqN8%2FZLi85kEAj0BuTagYCVGDkERhjFrFd2LvFm%2FoY44m%2FCngYyufPYlSu2gv28%2BtrM%2FCpAT4Epr4zONsfaMB7cy%2BSp0nDylRWIVWQgAZZX2TRMwYoN%2FKn3%2BgQastlOeBoRL%2F1YAOcBdtH30MCeNKukZeSMRnlTwL80PRE6rPh4Q9xZQL8QqJoajZDNe%2FS7DDwH72AwFt5NyrdvllmRTCTxMLGBjqkATP2Zy5ik5sZOj%2BoWxxPHHt5PgooCFCw65wgdL8XhrNCpQHBGc%2BCQmPFo8sBfkAXg7bWdbqQf17EWkV6NW20yg515ymSMv7sQCrkc%2Fn8WWLPoGEqqbU9etFF0JP71%2Fib0G9It6XRlXZVsLiM2bZImdOBVNGhppNRgQ7keHGm%2BZH89R0wu1GHjIwdi0UwiB46kwM2P0ujdgK5mBGzQm9DlYXPSUpm&X-Amz-Signature=88c24aa574755778e6ddaff101d3a566c6fe0959ca931bd9e3edb4cbdcc7c12c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUEPVJS%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKkwvsiLVLaTdd%2FwxC%2BKlAyWaq1YehxQGCf%2BFZ1qwWhQIhAPWQ%2FaMXUtQkT5zzGsmk3JSUhJubKy9sWtgSIAM8NP47Kv8DCCIQABoMNjM3NDIzMTgzODA1IgxjQA3gBAqczx2YKzEq3APCGRjz2BtUyeIiJcMlxQEod5ZjQXvsY8UNfa1T6SWUF%2B2L7RtYqAhbKtyQooHXV%2FCYGdOPjUWo6zZ14t6U8n46g9Oihw4MZH9lIyeNVEp%2FRYCB%2Fj758ojiVNo7b1vpNJIgloGeNlaDrJv3w7oB9gaPwLHYqvTWyYXYa4D%2Fr2H5EyWRHO5DOx3njA%2BedAdJww2hi19aMnn8YvQ%2Fs142wu0JWc%2FX0ggDBlaZlpBeBwe%2BGz2otxWbW0OE%2B036oa3K9oRZ3lHVws9XKnnbp%2F1mcbUDyVrwR06%2FSuj%2FBBau6wstqB5D%2Bzd2go2yTjCKHF0scqY3mfOU5P88d9GEODLP%2BHtlNPGT9MC27uPBhvM9iVxP%2BK5LO6er6oe%2Bw8K1yv%2Fic3tEbOTGVAyBoCUeWQpUa5DMvMhGg9X%2BUQviZKtLC5gqN8%2FZLi85kEAj0BuTagYCVGDkERhjFrFd2LvFm%2FoY44m%2FCngYyufPYlSu2gv28%2BtrM%2FCpAT4Epr4zONsfaMB7cy%2BSp0nDylRWIVWQgAZZX2TRMwYoN%2FKn3%2BgQastlOeBoRL%2F1YAOcBdtH30MCeNKukZeSMRnlTwL80PRE6rPh4Q9xZQL8QqJoajZDNe%2FS7DDwH72AwFt5NyrdvllmRTCTxMLGBjqkATP2Zy5ik5sZOj%2BoWxxPHHt5PgooCFCw65wgdL8XhrNCpQHBGc%2BCQmPFo8sBfkAXg7bWdbqQf17EWkV6NW20yg515ymSMv7sQCrkc%2Fn8WWLPoGEqqbU9etFF0JP71%2Fib0G9It6XRlXZVsLiM2bZImdOBVNGhppNRgQ7keHGm%2BZH89R0wu1GHjIwdi0UwiB46kwM2P0ujdgK5mBGzQm9DlYXPSUpm&X-Amz-Signature=50a5c662be3d99681ea2ab1d2ec3713d354ea73f8992d84ef12e8ff0b5df570c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z7A2I2O%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8d1qCXfRfbUeP2fxh29wv%2B8mlMvlAr82IA5dEMejyTAiEA1aWR0wlfxUxgoDBgaJlY2Z71Eyj1%2F9A7Hfbb5s%2FnkjMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDB8Q2WevSne2l6hnSCrcAx%2Bd7EGusYCcJropf8nRZZnq3W4U7yawEA358fiEwZxz3mYU%2FfcbaGYmhlNaFN6osoRkYkN4ZEWqQGFGkaCuXHXZUoTX1hNNBzmwksvnYo96m9m0EILzjfOQqA2bRtAOPzuOrdHRu5DxVh8cLcSpLE9bkMASXTMtTmeXVdC30PzptdwQZqZ90MVHuuAL6sRWah9MYgolz0nIFTMiZFMCg683WGUoRoKhLZw57fj82Qi0xI5W%2BO0NvVVI%2FbdH54IDKf%2BmeO3D02hpevVBJJfIkvf9xFix3FsEewcFqAyOXvQSIyhuGFqGeoSzOvm%2BA0n83Z0pyr6T%2FL4LwiKV9C5Y2LlQ2gpkFli3zW8Bu%2Frdq3DI62GkK3WGH10ofl4ShKadwzQf3Wxkr%2FlekKDh2KSbtWUXkyNqARUkyqdL2PhGddK8OYAoq%2Bb2OJ5i1yTj3JlhEk2OlJDTRNanQLhoGqgd2T%2FtS90VoMswNH%2FwGZHTMOtoJcYL23rBQ26hY%2F9ZlO2JVofST3zGY1qGjcWr5MxxaMal4SNaBjUNerbiT7dfDV5QNyxAoTRC6CqwT6fTUUOzxth2AAK8m6OELABCm9tfaCnb67vFKq2CvrCws0B6xoVTjVr0o3tKGe5FnNOkMLrGwsYGOqUBB%2BuxvmvbtV1KxGkXvh6cTbZK0pJBYlQ1mh4dSYg06QwdBqxsnPj20L221QNTM3PXZyGvrfckz4ce6gG2mLVQF98wS4%2Bi%2Fbrx8%2BbQAeg6SBmvHzJ3ioEWkzcCAjEwMzAGn7cx3318y7uKCxodngRWBIE%2BzVxzx9vbsUnogySg2gJCErK4hO7vEJLR36YWTixYohqOehD6QRNnxdmIcxbIfJH7VxPX&X-Amz-Signature=5f43dbeab6510e933b8f2c6095bfe91dccea341559d1ae54c2e55437c6c11fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z7A2I2O%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8d1qCXfRfbUeP2fxh29wv%2B8mlMvlAr82IA5dEMejyTAiEA1aWR0wlfxUxgoDBgaJlY2Z71Eyj1%2F9A7Hfbb5s%2FnkjMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDB8Q2WevSne2l6hnSCrcAx%2Bd7EGusYCcJropf8nRZZnq3W4U7yawEA358fiEwZxz3mYU%2FfcbaGYmhlNaFN6osoRkYkN4ZEWqQGFGkaCuXHXZUoTX1hNNBzmwksvnYo96m9m0EILzjfOQqA2bRtAOPzuOrdHRu5DxVh8cLcSpLE9bkMASXTMtTmeXVdC30PzptdwQZqZ90MVHuuAL6sRWah9MYgolz0nIFTMiZFMCg683WGUoRoKhLZw57fj82Qi0xI5W%2BO0NvVVI%2FbdH54IDKf%2BmeO3D02hpevVBJJfIkvf9xFix3FsEewcFqAyOXvQSIyhuGFqGeoSzOvm%2BA0n83Z0pyr6T%2FL4LwiKV9C5Y2LlQ2gpkFli3zW8Bu%2Frdq3DI62GkK3WGH10ofl4ShKadwzQf3Wxkr%2FlekKDh2KSbtWUXkyNqARUkyqdL2PhGddK8OYAoq%2Bb2OJ5i1yTj3JlhEk2OlJDTRNanQLhoGqgd2T%2FtS90VoMswNH%2FwGZHTMOtoJcYL23rBQ26hY%2F9ZlO2JVofST3zGY1qGjcWr5MxxaMal4SNaBjUNerbiT7dfDV5QNyxAoTRC6CqwT6fTUUOzxth2AAK8m6OELABCm9tfaCnb67vFKq2CvrCws0B6xoVTjVr0o3tKGe5FnNOkMLrGwsYGOqUBB%2BuxvmvbtV1KxGkXvh6cTbZK0pJBYlQ1mh4dSYg06QwdBqxsnPj20L221QNTM3PXZyGvrfckz4ce6gG2mLVQF98wS4%2Bi%2Fbrx8%2BbQAeg6SBmvHzJ3ioEWkzcCAjEwMzAGn7cx3318y7uKCxodngRWBIE%2BzVxzx9vbsUnogySg2gJCErK4hO7vEJLR36YWTixYohqOehD6QRNnxdmIcxbIfJH7VxPX&X-Amz-Signature=c8c0c90c6f77818ea35a57eef4dc8375b57eab71d3658c7f6c9ad90b919d5183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPD3KSUQ%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYzoLNyw8%2BSEYZ1KioMLxsxht%2FF82WY8Tiead0P6pBDAIhAJ1SmyVtWJBg1zmYLEgIDq%2FsSqdlFIyEpwCcgtUobqTWKv8DCCIQABoMNjM3NDIzMTgzODA1IgwLN6wcorrjwj%2BKjIAq3AN2HT4s1Ghq2bjEBg6HrOESwjHVCxmvpdPA03jKN2u7SkbRvrFT7JJwC0Sc9JgyVecgZGXeDsDkv0aV3Dnd%2B98ZFmXbIkt0%2FztATlE%2Ftiv2bidxI5Gi2%2FKyAx9F5SLY4Td%2BLShHrWvcz4%2Fpx5guIcJZ0wtgY8ZxZpB4TiSo7fCbCMRFmNDfQ0d6MZ0wbf5Q6moFT9TKYfjr4EGgduvGtzncjVOJDdK%2FkS26fWUkkQh1FIilAXdlCPcdi9dUqPTatkemLtRbJgYETf2PNuIep0cbO0kMMqIgfrR614dSJ3SYZJ%2FAvJhbG4A6HbKLsJoZELKe1uULGe6aUzLCoDPhbYyNRWJE0MukBGUnCux87WzQRulwDhBfO%2BDCkcHVVG3nKQXeh3xmIIIsIcVwBEP48xwJqaClInznMAPNAmtlQaZQhGLYSts%2BpoFpgKtE%2BVgvgm6HgV3WAhZbUwwTvgkybqePFkiWKkA2pZXpRvnsksG2Hok9ZPJSMDu9ySRlxRpS34V8i22ER7M%2FKoPxk3L82cZ9EQKWLb%2BxkDGVSk9KLblI7mvEt0nhhdebZp5Tq1SU3eQVaYdws2E8VkNZcQmfY31MkZi9F68U6a2HTbs%2Buz5MrDTwvEOFCvjg7No%2FATCaxMLGBjqkAVVVTgYIsvVLBdpSO8dQcXS9%2FUEzGCN7hAX3Gt%2BFhbpW%2FugZtju2tXYVY%2Fn4V7nMghN6lRSPvzgTkbMv52kgx61%2BzAcDbeeiShetaZuN9pe5BT%2BEpkWqlg5j5MMNOBFIDc7IkkYufC4X12MZVOOWy3%2FNRd1I1GNH484uG519FhYJOaLxrAtSTvJGmGf7KiHIS3GCn4PuHpIRo7JhFdvFKx%2Frffwe&X-Amz-Signature=2fd407b6a8cb07a0ae7c58817d5febea70afcadb00b76d4a3c6f8c47a8f4f503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

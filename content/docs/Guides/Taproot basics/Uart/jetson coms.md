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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHDA57MF%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC1Tv1y01zMLtMCoYcMsn8kwcrM3qGk1Sk3AyydawTcCAIgQhjVjYuIxf9bcBL7xotiXgHVZuqgull1%2FwtwivY2NBMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCunG8XWDrbx6XpR7yrcAyfe2wFXCjwFQPjA2VrmmIc%2BqlU4l6oWWll2f%2Fy8%2FsVqFe3UywL96J7Fqv639GLkS4tn19I5xytOSVr3QVBYE5SY785WYIfF1MqJcKP01jheXyZ%2BF8WUVANwTWxF1kGWZNbTDxg5QvzxX1uJ%2BZNgbGdFDrTrslnoC1bJrFt8KJuS%2F1XQUJjuib%2BdoiLK3nX%2Bu75QFFXNEloneLRuWEsUhVu8BG94lRUbgRYpRfAcDv%2BzeJ3ccOV03vhAuZqSPIowF3hkLHF9EO1YNjo%2Bxy2nTGNMyjt31Stcww9JNclZ%2BL4vkiMhP%2F0Gb5JgmYq%2Bq2BpIUPeyhc5vE20kLBvldjG44kzEXElnWTIibDB8AQqEMAYxuU9W2jgQZ%2FD8ZABnaya8nWnJe947kppvCUEPXQF70Wzbh%2Fgr6Xb8lE%2FKQorDGvGEGRc74NLH9%2BmoKD2bUconadUmepYj%2BJXAqIqs%2BcYcZY0J%2FxxeYIi06wM6iqjDU5zApFhVJtAxfARlqgT2i0zl2XdKwZaPnpnVKncx5LUg1%2FYzP2IgvjOKL5LivGP5cW2c%2F7pJbZodv4PWPw5ha7PKCygELdNSHb0cN%2Fl7nZfZ76CN2LgdQVvBUstWePKLNbe0uqMHQGP1NkPx265MOSkitAGOqUB7lKecPi2YM1wM8I58mUVLCj4AYblE%2BcTZGN%2BiBlLrGFClJbFR2X9RFVzhCL66SSZ5Vpsh84UwjXfjvKUU2DmDR7oNdB7stL%2F4YfP6RS0057EAblggxcSuTHwV5RNchgabTO9iXD3UL3Fo%2BS%2FrFOlHuHDJq1BJyPpyuHwEOhAH8SIrZ1kkOfEJngHjEpCln5UA%2F8uk6RtUDvE1dvhZL0aNLKjtE2H&X-Amz-Signature=353f2b461454355e410ce3c569b24c6dddf26f38b04536289674b6d0214fe4ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NQDSIVZ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC8AKs9woGlQO5XxmGEv3p3eqtNVUNQ%2BnzyVKKqpLlA%2BQIhAJcgIqFN0Rf5tZxI4Vj%2BwgLcdSHdGeI%2BY9E3%2BKPxXyKlKv8DCCQQABoMNjM3NDIzMTgzODA1IgySs%2BgqJIbyQ%2BLW4fYq3AML06M4C1MTnWCnHJtTtjI9ta9qdb93aBa%2FnZ943UyKsVylrXJyCLK6psvMJ0AEGnbnVA1uSDNMCqUypyItnTMGRECBoP9OmjeRoeZDtlL36Q%2Bf1E8jv%2BortOOe6aEVuoruDGlh7k9pUvKMh4Cl0jL6Mgompw1Yb%2BVPlw84JVLR76QwlK0%2Fb17Y%2BESOgxcaAiNBoBY%2B3yCKSO5et4MVl9mMwdXhdqtn3kj%2FrLQyUs5ad14OAeuE35prgvjQEp2yMQhT1g%2B4VPZznp0o84HWXLTuf08Vq50BZF46x5F4MauFnwPUmxHgG5HV4XQ2lrMsRV70mOo0zayza3mhO6pvzs9%2FmnJmcsqePdta0kBYCDurabHiHCoHl%2FMXwYrIJO5ROkeDUoBRK2q%2FNpM3XNqa%2BtOzY8THTxH6H7q6snvLn4EvwU2NLS5ha4%2Bcl3YfGORg1i%2BdcWU1vjBVtGfL2gEvSwiD5AdXJSqbeVjQyEhDyn%2FOc3U2BhChis3r0J%2BdkHaWXySu%2BEpKwf8ledSh466XP4XQxNfBcc%2FAi3r5Nz7jckwxyzV1SUxPo8jTyQUMzw42QO%2FkWIo6SKElTS4jw75jPLuXux5n59LuxaaoMh4Ty%2FNPpLnxb53kL5%2FH6018pDDqpIrQBjqkAfFFTbRaLdN6mRrJ0cPZW3tXVjgv7n4dtqwVWz8uoncvoxoMJKK1IqJVAVegAp0bglyVQ0BetUass4Tcaz8MDCxqMiLUg9Nd2Hb3o0Cyc%2FdtfSV6e2l6Gay1LMIJTomXS6e%2BxS5cImK0Tuydi72eWDHJBTCwfIKPo1esYrzI%2F23Sw6wGZ%2BZWlBVY560hQpQkzgqdbz0y0m0IjKKug5vg2rueAqhy&X-Amz-Signature=a951fe214cca31559852c9c844a9d2201a7ce51b32a8d1d96624d1c5a8e49524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCVRE3J2%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAWEeTOMEiTrr0G81n6cZQY8xIUPXS7x%2BGF7lgqKXT6kAiEAsoMDrnmNMGtixhzZ14ottgIPzwC%2ByByog%2FdxH3N%2BZ6Aq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDH2Zcrr%2FR1gIquBuMyrcA5cMlme0ccTyavgnrGDcrmDdKTu6Ra13KeetWFcj%2Fg1A0f3%2BV4CjBXti4l83wEyFXl9bRWoA2Q1%2Bfue6I5UGOMam658QKxpHbKxgIZ7Fs%2Bfr1XV2JvvnHn%2Bj2%2BCYRqK3uBwcWZ3SNUN35jBgqyGFXmpY66vGutH1PZ605sMeT1ujn0OSHd7PsodWK0ORldicaTLELK44IZGRcUkRAyvFKDtnoPDjeoSc5ZFuPvJnTRl8QpoLJeVthSGXFSt191PwO2TeHijfost735uDaDiUI3c5c5tGzjJp1D2QdGSuMeic5vI%2FPTxYIgm5iwM1%2FYbSHJqAxG5G%2FjpVDxiHWEggU%2FbS825m7fcAKtLcG1OnNhCsCB6ccqeQubx3c0P%2BpzaT3ccCGKbVGH84kRzmd1Phhkt4QzNhWdCPrASn0N%2BjDMRDi0Jo0%2BNSHqlsmc7t6rUr%2Fu1iFHhaZJFj%2FlYwCc4S6L1L2taltQS7T%2FLEXAPbST0TZ8n2BpshuWuQNdwTM%2Fgv9pGvMWPdqfywzHAlQCPWRnFIbC32BOAqgheT0JJVbkPBulTYGuWiWCnmQeoUh4LAPpbuOtwZZ1rrNp4zegBJ8Lt0JtZfZKqkj%2BX8MVTN%2FVfRly9cciXeoxLQtN8LMIGcitAGOqUB8OUE60Qsz3nBMmnZOM%2BQCsdWHM68T9LZHVMGnT%2B2q4L9q2xRGcKZ8aRsbuonItj29nlSdznCq%2BExO4aEslorN95sNqvDwdjkkfWoTs%2FiGrztOcSH2ooUVkAb9aVXQXnVtAfEHlXpz%2BQ1vWtZBcwCDvZ0U5l3Rla%2BAR9%2Ff1Elt2b8W27Y4LWAopunF%2BOlJG3QxKR2LLn6Nt8Fd6%2BHVa0eXAlVUDsd&X-Amz-Signature=035a3f911e23fff6f9644ec35376c52eecf23a477b53f7eb388c298a9a044231&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCVRE3J2%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAWEeTOMEiTrr0G81n6cZQY8xIUPXS7x%2BGF7lgqKXT6kAiEAsoMDrnmNMGtixhzZ14ottgIPzwC%2ByByog%2FdxH3N%2BZ6Aq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDH2Zcrr%2FR1gIquBuMyrcA5cMlme0ccTyavgnrGDcrmDdKTu6Ra13KeetWFcj%2Fg1A0f3%2BV4CjBXti4l83wEyFXl9bRWoA2Q1%2Bfue6I5UGOMam658QKxpHbKxgIZ7Fs%2Bfr1XV2JvvnHn%2Bj2%2BCYRqK3uBwcWZ3SNUN35jBgqyGFXmpY66vGutH1PZ605sMeT1ujn0OSHd7PsodWK0ORldicaTLELK44IZGRcUkRAyvFKDtnoPDjeoSc5ZFuPvJnTRl8QpoLJeVthSGXFSt191PwO2TeHijfost735uDaDiUI3c5c5tGzjJp1D2QdGSuMeic5vI%2FPTxYIgm5iwM1%2FYbSHJqAxG5G%2FjpVDxiHWEggU%2FbS825m7fcAKtLcG1OnNhCsCB6ccqeQubx3c0P%2BpzaT3ccCGKbVGH84kRzmd1Phhkt4QzNhWdCPrASn0N%2BjDMRDi0Jo0%2BNSHqlsmc7t6rUr%2Fu1iFHhaZJFj%2FlYwCc4S6L1L2taltQS7T%2FLEXAPbST0TZ8n2BpshuWuQNdwTM%2Fgv9pGvMWPdqfywzHAlQCPWRnFIbC32BOAqgheT0JJVbkPBulTYGuWiWCnmQeoUh4LAPpbuOtwZZ1rrNp4zegBJ8Lt0JtZfZKqkj%2BX8MVTN%2FVfRly9cciXeoxLQtN8LMIGcitAGOqUB8OUE60Qsz3nBMmnZOM%2BQCsdWHM68T9LZHVMGnT%2B2q4L9q2xRGcKZ8aRsbuonItj29nlSdznCq%2BExO4aEslorN95sNqvDwdjkkfWoTs%2FiGrztOcSH2ooUVkAb9aVXQXnVtAfEHlXpz%2BQ1vWtZBcwCDvZ0U5l3Rla%2BAR9%2Ff1Elt2b8W27Y4LWAopunF%2BOlJG3QxKR2LLn6Nt8Fd6%2BHVa0eXAlVUDsd&X-Amz-Signature=5d404cfbc32e9ef1737c5bde40566030a1f7908ab4993a41ee449d09c703c080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NQDSIVZ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC8AKs9woGlQO5XxmGEv3p3eqtNVUNQ%2BnzyVKKqpLlA%2BQIhAJcgIqFN0Rf5tZxI4Vj%2BwgLcdSHdGeI%2BY9E3%2BKPxXyKlKv8DCCQQABoMNjM3NDIzMTgzODA1IgySs%2BgqJIbyQ%2BLW4fYq3AML06M4C1MTnWCnHJtTtjI9ta9qdb93aBa%2FnZ943UyKsVylrXJyCLK6psvMJ0AEGnbnVA1uSDNMCqUypyItnTMGRECBoP9OmjeRoeZDtlL36Q%2Bf1E8jv%2BortOOe6aEVuoruDGlh7k9pUvKMh4Cl0jL6Mgompw1Yb%2BVPlw84JVLR76QwlK0%2Fb17Y%2BESOgxcaAiNBoBY%2B3yCKSO5et4MVl9mMwdXhdqtn3kj%2FrLQyUs5ad14OAeuE35prgvjQEp2yMQhT1g%2B4VPZznp0o84HWXLTuf08Vq50BZF46x5F4MauFnwPUmxHgG5HV4XQ2lrMsRV70mOo0zayza3mhO6pvzs9%2FmnJmcsqePdta0kBYCDurabHiHCoHl%2FMXwYrIJO5ROkeDUoBRK2q%2FNpM3XNqa%2BtOzY8THTxH6H7q6snvLn4EvwU2NLS5ha4%2Bcl3YfGORg1i%2BdcWU1vjBVtGfL2gEvSwiD5AdXJSqbeVjQyEhDyn%2FOc3U2BhChis3r0J%2BdkHaWXySu%2BEpKwf8ledSh466XP4XQxNfBcc%2FAi3r5Nz7jckwxyzV1SUxPo8jTyQUMzw42QO%2FkWIo6SKElTS4jw75jPLuXux5n59LuxaaoMh4Ty%2FNPpLnxb53kL5%2FH6018pDDqpIrQBjqkAfFFTbRaLdN6mRrJ0cPZW3tXVjgv7n4dtqwVWz8uoncvoxoMJKK1IqJVAVegAp0bglyVQ0BetUass4Tcaz8MDCxqMiLUg9Nd2Hb3o0Cyc%2FdtfSV6e2l6Gay1LMIJTomXS6e%2BxS5cImK0Tuydi72eWDHJBTCwfIKPo1esYrzI%2F23Sw6wGZ%2BZWlBVY560hQpQkzgqdbz0y0m0IjKKug5vg2rueAqhy&X-Amz-Signature=5b25240a9fd94d3c3bf84a0e61ba2447b60511636aae6982a7044dc43003bcd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NQDSIVZ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC8AKs9woGlQO5XxmGEv3p3eqtNVUNQ%2BnzyVKKqpLlA%2BQIhAJcgIqFN0Rf5tZxI4Vj%2BwgLcdSHdGeI%2BY9E3%2BKPxXyKlKv8DCCQQABoMNjM3NDIzMTgzODA1IgySs%2BgqJIbyQ%2BLW4fYq3AML06M4C1MTnWCnHJtTtjI9ta9qdb93aBa%2FnZ943UyKsVylrXJyCLK6psvMJ0AEGnbnVA1uSDNMCqUypyItnTMGRECBoP9OmjeRoeZDtlL36Q%2Bf1E8jv%2BortOOe6aEVuoruDGlh7k9pUvKMh4Cl0jL6Mgompw1Yb%2BVPlw84JVLR76QwlK0%2Fb17Y%2BESOgxcaAiNBoBY%2B3yCKSO5et4MVl9mMwdXhdqtn3kj%2FrLQyUs5ad14OAeuE35prgvjQEp2yMQhT1g%2B4VPZznp0o84HWXLTuf08Vq50BZF46x5F4MauFnwPUmxHgG5HV4XQ2lrMsRV70mOo0zayza3mhO6pvzs9%2FmnJmcsqePdta0kBYCDurabHiHCoHl%2FMXwYrIJO5ROkeDUoBRK2q%2FNpM3XNqa%2BtOzY8THTxH6H7q6snvLn4EvwU2NLS5ha4%2Bcl3YfGORg1i%2BdcWU1vjBVtGfL2gEvSwiD5AdXJSqbeVjQyEhDyn%2FOc3U2BhChis3r0J%2BdkHaWXySu%2BEpKwf8ledSh466XP4XQxNfBcc%2FAi3r5Nz7jckwxyzV1SUxPo8jTyQUMzw42QO%2FkWIo6SKElTS4jw75jPLuXux5n59LuxaaoMh4Ty%2FNPpLnxb53kL5%2FH6018pDDqpIrQBjqkAfFFTbRaLdN6mRrJ0cPZW3tXVjgv7n4dtqwVWz8uoncvoxoMJKK1IqJVAVegAp0bglyVQ0BetUass4Tcaz8MDCxqMiLUg9Nd2Hb3o0Cyc%2FdtfSV6e2l6Gay1LMIJTomXS6e%2BxS5cImK0Tuydi72eWDHJBTCwfIKPo1esYrzI%2F23Sw6wGZ%2BZWlBVY560hQpQkzgqdbz0y0m0IjKKug5vg2rueAqhy&X-Amz-Signature=403fbc3b2eeef28eb7bf2314e23f211b1ab9f26c3ea690017f7faf6beef34350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ASTC3KT%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCSfo6RXRar5d0nOmDJFDPG%2B1PVF19F0GYdiYNVUQKhwAIgYxn759PmOzGNSmuXEpvux7n835XvA1gACsnV%2BVT2q64q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHg5iukmR6N7CmZy6ircA51omJTeaUXU4KXI1NLSgsRfFVLPmf33i%2Bk55zxV0e6jFEXhDhhgp%2Bpa%2BwjRubRRBYDEZ272V89BcEOvpFJHDxORcceq9OW7c7QB10acehG7GruR4%2FbH8PbYkxUkDxpkW7zHNaX%2FaRlGz7JtPi%2B5WMETBUMU6yQmDe%2FBNteaPDB6aojUaVgIdM9lOV9fdDyMaoci64MLHYFucudJ%2BcWwwI5L5iX4HD3BY4obEFxkG6GascfNuRKWX%2B1hZOGy0NgWjT4M2aAYHeYwhZuhCzSkt2hr%2FvX0o0kyKXl5CBFcOrpJjA%2BfIKTsDxgP5iv7RNQU%2B55vFTGb%2BJqisIVvzor3YHV0JEXuSkI9FstehwA4vLu1ahEREn67S2mcr%2BS9yt4TQxsG97eZWkzzRiDMsQfFBASRI8ekv5ZnyDT4HpxLsJjS8s3DdL92z8AcpFk2HgCBEtKOt3ZFigmO3o%2BtJHBmMps42uBoV0XuL%2F8Z%2FoyBUTlwy%2BsvLYrNnL%2ByahXH4fh8u%2FZZSGhxuAIq%2BFUfFG%2FJAqYo0%2BspD9TCAuAfLrd8a1nHoynWK0Bnup8ZOpieBLhy3rlLcNYMz%2FLQChI1cAWwplU5ROYIWEXiND45DPu2owEeoQNyHTotXxzljcB4MIWiitAGOqUB93EsuVPguSKG1zlaYIpoO94vWH8Mu%2F8%2FIbWafe7PIgxRo1nEPXzA6m%2FyHulxNllR46zno37SglmBpfir9Vb3T%2BzX39z8jQsmM%2F9vi6aihIbKGK8lG%2BQlE283kzrVxSx2Tr47U1LvG23AjqCRZUweV7rQ43%2B8LD%2BuoP6MMV2%2F1kRNEsDZi1gVqoxO1nKwABJpP0yOqUdiMtE%2ByQKHy9N%2F1AU7mR0R&X-Amz-Signature=519287c6bacd4acfeda60ead2cea4ae54b687277ccb4ca6f91ee471ccb60458d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

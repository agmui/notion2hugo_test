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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZVDMDD4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCY3KoLXeIuPC2%2BE%2FgM2zGu3XuiVJIMyxs9RXKQiVBuNgIgYFW5ETjU3tPEXQ%2FjvlkijLxy5NVLRQmtAD2ZztrTaesq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJE7c1wr2n0FSG1qsCrcA%2F9wLS0iH8FQE4RNFJoneeR4eLu6PFjAip9x3UHF4QA9pEMtESNRnCisy2Z0wJSc5a50kiE16ISs6MlInrp4jDe%2BKet%2B42fZVTe0kd%2B%2BAajwFlem3GnVCZ%2BfbBBClpWqaKHSIakjoPaMGkP6hpxQSCpGrzKtTE%2B%2FD4olGaRmCFJiGIf1SUDbML%2BdzThrSSvP2kF6iFkNwHaHDePcZPL%2BdBHJpziGqpNgO9ATeWoHzB7obUKrdVZh0joW7ALTfCcgVrwm%2BK8Ndfn3qRatucFQoWWopfr0AvA0ahz%2FYYWPp1WB8zHZpuSIyhgL6qciqwJAE1sHDFp%2FOFt6SuNT1Ht84GaiqkJxWxdPSEC6ceiGesXBOzaXsW3xSPglWIE1XuiRZhArlLHL%2B4VJVQ3fzLZYPIGD%2BGeQEn1nEhX%2Bg6Ql6oA8wiNy42exTMxBe8EU1pmDa6hmvi2fzVXaUhMoeYrbgRLkxFkLh8A8UGy3VLkTcECtddhzkkI6acm5iUzeJcv2oAu7knB5yO7c43fhgY%2BKirVG1IuumteZnI6j0vEB0PWTm40llT%2FLAIJxacz78pzucfJtdCjnmsMQNeAheK7H0yYDZnihlsuklp7Qa8ToLWIkzOZANrsgq%2Ff%2Ft6StMK6WvskGOqUBnP4t18uruIpS1X7o0P0k1uSnZfHrC3DqMVlagNkVC0aW%2FrVx1u%2FrC48qSeU%2FXandcXv%2FqjhRFEnTSgWeKCyOQ8uBofxSLOXv%2BSzRxOa2jBmcH3BzxjgVhDvvg0Hp3b3FPpneCdjr3UV718X7oK9HyvG0yFd8tHoSrO9kZlvcL3q9ak0EsgYUEHY6bOb8dyjVrzZfedX0TpNGNH2c8lFmg5aSaMOZ&X-Amz-Signature=41a3baba8172a1d0567309696cfbdc5fb67fb8f9f23c534a11240a5cc5c974a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQNXT5P3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICcd3EpykqRnz76ZDsjO0hS37k8ouypTs5Tc%2FK7VfPFeAiEA91P7CwwmpxDv8x2BBD4k9IuT8SAxUnbu61BmmSJM%2FGEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDP1akSeYx4xNQkssSSrcAwR3LYaIpObq9wDS0eKR4pzOAPKi6dOT530FaXAJzkqpiDKm9ml7r3kIy0RZeoIzVTAqxdH%2FXWXcISi8KiWUMWH3dlWSAjOzrcASSvlvCrSuXoTyUpb8cr09681jHfEE7zmsf8P2Ii6%2F40W%2BNX0woiZVTnASmMFTIEuyIaAj0vS4VEWDN9oWMy7alIEEfxWeyrX48m9GoCmdvwI7TJDVO5GGSQiQyK9WI%2Bmoj7gAZbBS8rb0S8VF48BaeZPerssTdJEqg3cQKmmyflm%2BIMWZw4%2BCRPMhKVGHVwyRAR2TwQ8dTrCFvWCsJ%2FRayvB7h5rhQ93KeynBLExNjbNHvDhnqt%2B32R3cDGnqEIpmzJhoiqqOgEKwNkSh6kxnxdpnzS8m21%2FL7zLAA%2FtD%2BVx8hoH78nkrLWAlFn%2Bq%2BZrs%2BATDr7W1c6Oe%2FJ4o8hXN0ciGd0C%2FOqTIXeFRVVXuZYanOzP4uTmfXcGG36wxoaYE%2BRD4S%2Fq6ult8u5YbaGUAFd0Xt10bD7aSsEyiZNBKQyf6QEsJSXns1UGVdJ48DkbkgPWoc2T%2FonPQK1I1OweF9E590CdXy6DfIfwYGCTykkZQDP0YQuw7Khua05tyIVY%2FAH0ijQ6Q%2F3YgpHKP8UfWmLNhMNCUvskGOqUBJQUPtP%2B%2B6pd5wPvTKce66fCxFbkldMmxQJhh7ry%2B2bwXRq4DCN1m7I%2FYr2jLKIJr0cE4XzBmc04n%2FABU4Hl7%2Fa7wpalK7F4GjmBO5RfSN76bYAJ%2FLEbcn22lCjvhqJNrnUtUTNNfYDVX%2F0d5%2FD6D6k5R40KjOPrrQb09cISSJ%2FkAAkxyM5f8qzpDUeK5PPHKBC74OSyAtG%2F36116kAO8HsMFW0wC&X-Amz-Signature=3eb34fb998224167aac60fd5654236d2f7197a27f07bc4d14457b2a038910025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TXWFINC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIFV0cIMCLNRNGf3XLAU47EjvsXM81jKOEYXEVjqGl27kAiEA1JyKfAo9alhXwdSJWz72qa1rl5PE1k5gDk5rQw7wh7gq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDNNYm%2B1qyD03a7SGiircA27GoS8%2BcPIqeo3vVX5H%2BcH55fHVqFgFMP651eHLqgZXPxQJEHkZrKlUrcAnFvcsqCd7F7uvPXsYSeUB2f0QyJbCB6Lwqtd%2BQZLO0%2FJbXctwnN0QOnrkbM3LA0hRwsqkr30OtSIrXmo%2B537yfl1O7YCzR2oG%2Bk4U6ZNXEdkLLSe%2BPEwYMXtE17NnfuLPtxiv4gHYWs3rMisnTnUeYmyAss7A0L6bkOeB%2FDPFM%2F13pTzlfr0Chtz6L8Y2dseU%2BRKiZxlIyo81boMJ%2BltitnRf1H6Q6uy8NlZ3JyxB3M97pOYYH2eb5toxuXSkGM2ATvc%2FQzQSCsPdtbV7v7mWy%2BA0IhzRvsjwXfmVleV2wY2v%2BugQwXxAgSuLEJm5PEDWhMVFDWkZDuOxa%2BCj6L9tgPR3UV%2BlbXIBvi1aPmyGKqTBMO1Wr48rSIBlrKoRdk3CGYe2eODfXgDrbY0qxBaNWyytqkWcOYa8NqXOclZI7yAGxQ02R243XV61tysBZXcNA23p1uU6z04lAXCG3WYr%2B3vRcbgx1QAMoRPSP6DgVQ2HwKU3zHeOUSlzJt3CEWWWYK0RjBiUk106mpab%2Brv0uPZtLoUyYWczPYoZnWkhZLEO%2FIuRJJKk6Wo8n4tgDERbMMiUvskGOqUBMT0lLbgZS8O9icE6DLERWfbMKAzTRZXXPqIWSBZ%2FN%2BvWblqLfRSHlCmj8BbFAN6nBDwu4hq1hp%2Bj2MBlX5FbEv8S1hX7S8%2BnIr0KzPyig07RTaAWdR0W4l3pNAfwHBR6Vl%2BMO1qtxBiw4HYjkH0dFZSpXmV057sPk3L1mc6hTP7c1SXHalc9s%2BcOa3WGZhkur7dkS%2B96hqDBDKlGxhtQ%2FkAbxcwT&X-Amz-Signature=9c119713296274e0c58dd09efdc2b4cd84eb4baad411f6a78c72333157f8db32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TXWFINC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIFV0cIMCLNRNGf3XLAU47EjvsXM81jKOEYXEVjqGl27kAiEA1JyKfAo9alhXwdSJWz72qa1rl5PE1k5gDk5rQw7wh7gq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDNNYm%2B1qyD03a7SGiircA27GoS8%2BcPIqeo3vVX5H%2BcH55fHVqFgFMP651eHLqgZXPxQJEHkZrKlUrcAnFvcsqCd7F7uvPXsYSeUB2f0QyJbCB6Lwqtd%2BQZLO0%2FJbXctwnN0QOnrkbM3LA0hRwsqkr30OtSIrXmo%2B537yfl1O7YCzR2oG%2Bk4U6ZNXEdkLLSe%2BPEwYMXtE17NnfuLPtxiv4gHYWs3rMisnTnUeYmyAss7A0L6bkOeB%2FDPFM%2F13pTzlfr0Chtz6L8Y2dseU%2BRKiZxlIyo81boMJ%2BltitnRf1H6Q6uy8NlZ3JyxB3M97pOYYH2eb5toxuXSkGM2ATvc%2FQzQSCsPdtbV7v7mWy%2BA0IhzRvsjwXfmVleV2wY2v%2BugQwXxAgSuLEJm5PEDWhMVFDWkZDuOxa%2BCj6L9tgPR3UV%2BlbXIBvi1aPmyGKqTBMO1Wr48rSIBlrKoRdk3CGYe2eODfXgDrbY0qxBaNWyytqkWcOYa8NqXOclZI7yAGxQ02R243XV61tysBZXcNA23p1uU6z04lAXCG3WYr%2B3vRcbgx1QAMoRPSP6DgVQ2HwKU3zHeOUSlzJt3CEWWWYK0RjBiUk106mpab%2Brv0uPZtLoUyYWczPYoZnWkhZLEO%2FIuRJJKk6Wo8n4tgDERbMMiUvskGOqUBMT0lLbgZS8O9icE6DLERWfbMKAzTRZXXPqIWSBZ%2FN%2BvWblqLfRSHlCmj8BbFAN6nBDwu4hq1hp%2Bj2MBlX5FbEv8S1hX7S8%2BnIr0KzPyig07RTaAWdR0W4l3pNAfwHBR6Vl%2BMO1qtxBiw4HYjkH0dFZSpXmV057sPk3L1mc6hTP7c1SXHalc9s%2BcOa3WGZhkur7dkS%2B96hqDBDKlGxhtQ%2FkAbxcwT&X-Amz-Signature=4bffbbf503373c157af374208c73e3d8d710ea0f288055336379ef2977ba2a7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQNXT5P3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICcd3EpykqRnz76ZDsjO0hS37k8ouypTs5Tc%2FK7VfPFeAiEA91P7CwwmpxDv8x2BBD4k9IuT8SAxUnbu61BmmSJM%2FGEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDP1akSeYx4xNQkssSSrcAwR3LYaIpObq9wDS0eKR4pzOAPKi6dOT530FaXAJzkqpiDKm9ml7r3kIy0RZeoIzVTAqxdH%2FXWXcISi8KiWUMWH3dlWSAjOzrcASSvlvCrSuXoTyUpb8cr09681jHfEE7zmsf8P2Ii6%2F40W%2BNX0woiZVTnASmMFTIEuyIaAj0vS4VEWDN9oWMy7alIEEfxWeyrX48m9GoCmdvwI7TJDVO5GGSQiQyK9WI%2Bmoj7gAZbBS8rb0S8VF48BaeZPerssTdJEqg3cQKmmyflm%2BIMWZw4%2BCRPMhKVGHVwyRAR2TwQ8dTrCFvWCsJ%2FRayvB7h5rhQ93KeynBLExNjbNHvDhnqt%2B32R3cDGnqEIpmzJhoiqqOgEKwNkSh6kxnxdpnzS8m21%2FL7zLAA%2FtD%2BVx8hoH78nkrLWAlFn%2Bq%2BZrs%2BATDr7W1c6Oe%2FJ4o8hXN0ciGd0C%2FOqTIXeFRVVXuZYanOzP4uTmfXcGG36wxoaYE%2BRD4S%2Fq6ult8u5YbaGUAFd0Xt10bD7aSsEyiZNBKQyf6QEsJSXns1UGVdJ48DkbkgPWoc2T%2FonPQK1I1OweF9E590CdXy6DfIfwYGCTykkZQDP0YQuw7Khua05tyIVY%2FAH0ijQ6Q%2F3YgpHKP8UfWmLNhMNCUvskGOqUBJQUPtP%2B%2B6pd5wPvTKce66fCxFbkldMmxQJhh7ry%2B2bwXRq4DCN1m7I%2FYr2jLKIJr0cE4XzBmc04n%2FABU4Hl7%2Fa7wpalK7F4GjmBO5RfSN76bYAJ%2FLEbcn22lCjvhqJNrnUtUTNNfYDVX%2F0d5%2FD6D6k5R40KjOPrrQb09cISSJ%2FkAAkxyM5f8qzpDUeK5PPHKBC74OSyAtG%2F36116kAO8HsMFW0wC&X-Amz-Signature=08d54dae10f7f42252b3eec0175c747c486584777c9d50dee36c11bfc83d5082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQNXT5P3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICcd3EpykqRnz76ZDsjO0hS37k8ouypTs5Tc%2FK7VfPFeAiEA91P7CwwmpxDv8x2BBD4k9IuT8SAxUnbu61BmmSJM%2FGEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDP1akSeYx4xNQkssSSrcAwR3LYaIpObq9wDS0eKR4pzOAPKi6dOT530FaXAJzkqpiDKm9ml7r3kIy0RZeoIzVTAqxdH%2FXWXcISi8KiWUMWH3dlWSAjOzrcASSvlvCrSuXoTyUpb8cr09681jHfEE7zmsf8P2Ii6%2F40W%2BNX0woiZVTnASmMFTIEuyIaAj0vS4VEWDN9oWMy7alIEEfxWeyrX48m9GoCmdvwI7TJDVO5GGSQiQyK9WI%2Bmoj7gAZbBS8rb0S8VF48BaeZPerssTdJEqg3cQKmmyflm%2BIMWZw4%2BCRPMhKVGHVwyRAR2TwQ8dTrCFvWCsJ%2FRayvB7h5rhQ93KeynBLExNjbNHvDhnqt%2B32R3cDGnqEIpmzJhoiqqOgEKwNkSh6kxnxdpnzS8m21%2FL7zLAA%2FtD%2BVx8hoH78nkrLWAlFn%2Bq%2BZrs%2BATDr7W1c6Oe%2FJ4o8hXN0ciGd0C%2FOqTIXeFRVVXuZYanOzP4uTmfXcGG36wxoaYE%2BRD4S%2Fq6ult8u5YbaGUAFd0Xt10bD7aSsEyiZNBKQyf6QEsJSXns1UGVdJ48DkbkgPWoc2T%2FonPQK1I1OweF9E590CdXy6DfIfwYGCTykkZQDP0YQuw7Khua05tyIVY%2FAH0ijQ6Q%2F3YgpHKP8UfWmLNhMNCUvskGOqUBJQUPtP%2B%2B6pd5wPvTKce66fCxFbkldMmxQJhh7ry%2B2bwXRq4DCN1m7I%2FYr2jLKIJr0cE4XzBmc04n%2FABU4Hl7%2Fa7wpalK7F4GjmBO5RfSN76bYAJ%2FLEbcn22lCjvhqJNrnUtUTNNfYDVX%2F0d5%2FD6D6k5R40KjOPrrQb09cISSJ%2FkAAkxyM5f8qzpDUeK5PPHKBC74OSyAtG%2F36116kAO8HsMFW0wC&X-Amz-Signature=ce0f80b7789aa5e38e52c51c8a40b9a1e9f6abcd4c3c40f1370ebcb2af46f6f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVBXYBH2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIArs912w0KAwkSsZUJYafTTe0EEr5EKbkg8iN3g0KznXAiEAoqDN5ZE2Y22O9MAEeG6o18ZvwQB22BnncaouuCRGQsEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDK8FaXtazUgEDqUlXircA5CjNQzOtUY6sccaMer73W7I%2F2a4iYSY1d878Yd%2ByU60hOn%2BpMSf003GKl2XlHIdIzSMGkuFy7pwRYJPvwo8XAmTwptUc7Dm1bjgXt8HTjeXEgENJfEf8ANZ3fZ%2FhmeURX6BzE%2BHYhlQkYZVDSSZlTdh7Tw7pTCoDXRRxtgZqPe5mdQ1v4sTs%2BwpoIPxR43HupWKfR9Hi9rO38yDjhYoWi8qJOBo3EsjjSuFSDH6z6E6bnBRFRGKREUjKcCmt32av13ywQu5aJ3pJFDdavnifu9cjlNruods3vURvLBL8CVYtU22NsymuW4CWjLJEldbn91NmfWphQIg2XYjO8gkB64EhVDwQ%2BkcU0x%2FrtWpbSJU%2Feq8l964xKOsS7sv%2FjBU9xkxektQu8RpHRXUSx0jtUXezRFH9QfNAyIuCvfaiVuTNF7P%2Fv%2FSBFTpdXsJ160XZ1yMhaGkjvXWXcLtP213R0Tqj%2FvdAS9tE0g0bCUH77RpaAlbCDf5MhRe5J4D1foMYTqEZnIwFUKh%2FZA4hPm4kKb%2F8CeV2T%2B7duo%2F9hu5R9I575p7x%2FTViEawXU7GIM%2F4I7Eo%2FH4esyGT5RGFrBQBZqAmX7hXU8c2RuYlR%2Ba36QrIk2mF7gDy2bEjKEcqMIKWvskGOqUBukqFzmQfFSKctKC72VsFFTDPyxyuDLBIRpq1rLhPFX00kMO1RbpH83LDwUENX42rC9Je7Vrj1FnptT3XI8AfyUfswa99Mo2jHw5F7O2nnVTpzsHylApxKgR6z93wXHlX%2BCLHKpvo5W5fKmZPst5KnEHhpn%2FZLKNg2mypfIZTf4bpjBcGa%2ByQ7VcbWGf2evg5GycDEbDyKaXCrY%2FiMdF1Ow75cHsO&X-Amz-Signature=3e84790f6cd05df9ca45989bb71c5513e695f39d5f6732a9f4bf70a1859a8e1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

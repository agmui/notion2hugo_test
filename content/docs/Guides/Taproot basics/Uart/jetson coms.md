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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH7SBQAV%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGoKLr%2BcMtn9OdQRSBTX%2BkETgsRIPRnZ42e84qfJF6EuAiAS4N0uDTeFAff%2FbsVbJMo8C66jpnGb0jMiBSxr1GCeHyr%2FAwgBEAAaDDYzNzQyMzE4MzgwNSIM6NCUERzuGALmrEsIKtwD5vYggBBACUMKbSiTOb6yf2q%2FEvb38tzo5JqDglWyg9yqtJ18Hd%2FzYug%2FK8nk5GhicXqim0wEO797p%2BVASg%2BuICuXvxFv6fCh0SS1CMTEW69zC2D3dTB2gZSvqBCTS1%2FoP9xaBc%2BXHVWGPtlDvt3YG9055XDhaR1a9fSpiNV6I06LYm4dVQeCU6JNRjf%2FlPuIbw5a3VPSmo89mrYUrwC51VMMZ22PrmLfRBiSPMyFDq%2BSuHDP%2B5SjQw6MuGcXozwIxLZzRvOGz9Rn1qppavHdSJFaDiOOqjkgA7otdIiGd5XQFS1xPmuCoBV5lRApmqjYLNrY%2FR0xkoXLcbMJEkgg2LY4YDu%2FL9930W7uNQceK%2F2l%2FYLKbFmqbGfW3iv6ErxlMkQQfdwQZWFTVK6QvI5aJW9n%2BUlODFzidosM5tEwU6%2B5dmXxSANImJc%2FbbAlZXzGiViHJRtiRQLLNlPZFyifxBVMnQqQuMgzZJuvg%2F0Nd0aumaFgQc06NaVZ5%2FKpZNz5hG0FTcFLpbaoMZb%2Ff8SeI4CFPx21mZlkNgbGLNW5n7Eei6oKvwpHNKlwJuaPh73jNwXM7cH5Fs9MYO%2BbvWQzbOK0VZGWtTDN%2Ffz95u3B5%2BDVrveKDxF5fccGOW0wxYP5zAY6pgHRZZfOeHBlktCqMp6eExqdpqnQ9RGeBCuoa8zsOu%2FMowbKflDYpyezrn4kzxLxFSsEQU2H9gw96mFk6vGV0Fr9M0380ZZnsdlY1KLtjt5tasHiqOw7so5GPzVjGpEBtKrfvbmTgqURC1eEmX2oxFTuKV0f1PCu9Uf%2FPtzR5P8zHstTZr1LDIR%2B05BWH0bEozwS9ldCUmAyvttCZXYqYzLgJ6zSHVn5&X-Amz-Signature=cb82c7f36bc6d129abdc2bd4083b71a635b3eb0d2aaa6e39d74e2bdc80c5d0cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T37I5KIX%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDwjn9wgiRnBsYy44NC9YKZKeBHUbiQ1Pk3sMFXsvDKpQIgR8wkQ0BYyJYOOQkW9JxoPGhHiVBw1mLhvkKSNDzUNPUq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDBYXeSiy%2FuUqNqRekSrcAw%2BfCakPB9x3miSM3C8RsR1LDtVdvRW0QU%2B1GoTCFzNp2UlqhFI4KdLcly7vtGup0AdelfZAEzz1XJ4uF1q%2BSWDr9kC6KjeG6MEyfdcGbfn5XVT2stOBXaYNyfF4Cgsa2WCUyTti5wLaruAi1SaR%2BiT1qhysT2xJiahflze%2F3dJMQuJn%2BqrbrunCf%2FfP2kKNve9iMjGOwbbgx3zA3s1Uz12wP1F%2FD1OTVWrgmhxmc4sPteRqVG2Wxs2Wm0m1fjupgGVc2QFNt28%2FZggOMwITknNzTAnGDPgUohS2qaq%2BLGZOamofi0TaaiaItTxgTCW2SQcg4wsrXfvyIpcrefd9WFXRSobVhF3FhBkZxrHp2zsWx2eoiXtFL0K1TDrLfjXQIltUNG%2BcOIBDteVup308gdW%2B1FJq4dKKFPYVIMex0DHMxyahKDEWNsaTGycifWsExzVAIBFafkvkNMiwqoHsTFFjBsiLEJjaj7ywEABzE3FvuKdAiWF3oxyt4n12zGk0up8tmdjY7Yzmcy9%2FaOsz4YQfu5xEtFrQYLGc8%2FOhZIzbIpyrWHP7%2FjYClsNDI6QYWPsYi78zb7cNfxV1xyYY2%2BG6k1e%2BeshXA254Uflx3ImoJCuQnjOIjSRuPfJHMNSD%2BcwGOqUBqAD2n1oOk0q09dTJw3WpJsRaf4BzmJMQgTgED1CFk0Q3htWHzMw52Qbit8UMaun2cHPqAL0Xv7MKdjMpnvmsufyR3%2FtNGf5yv4Kwnhjd4sjFJnJ1D7T9vEHasAx247L8lWngywyIzkZlwA5ZwM0QOEG7IT%2Buo%2F5PClhvfH6sB6kUm10eBXBOz34xdmtBZ6px%2BBqN8WI8C2JcP050iyovikGIgB3D&X-Amz-Signature=62d13fac360b158e29e798b4eabc948cacef634e0d5c2f4e6fd2d8f65e747d9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMNOA4CM%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICQkhu%2FpaCDcxOPBlSIFlmErsvdsdpnvGKBdhxi1L%2FuwAiEAmoMFA4pUaL0XpCLWKk1Sv79pIRY4VmLbKazQA3Z6lLwq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDAq7vqhcnUMOTq6e1CrcAy0phroW%2BliW6NxjEaIBJPQrAIHpqIW%2BAccAr53jZ2Jhs%2FdS%2FTfs2Nr2kY208rNRZZRz34vgxQhmaVMH1ieG8UuwUbmSY5KFki9e3S3uyvjQ09xuZ3HofEDDwaPxrQFlCGucBU2Mwgfjc%2BkolxRnRuSVnWBvdJ%2B7GykKbUwMklLkVkoqs61YsVwkYIGW%2Bln0Zj1RXjJ7ERumRBzAMtJta3gx%2FnGW7tvY1KkHIHZlul7k4ZkZZyWRVBuDFLTblWAq20WJsrEZjAMGFGbv%2F7ivQ3dDTR%2BbHCBuyy6bgLxZNBtfSHuBTjhwJrwzG%2F8BIipvx3wvJEYrGSiCs4vMmdcnRGqWncAiCTmR2JZAHGehOTVf%2FSlc9IuU%2BiFnRlqCz3nF0lpKqtw5%2FpmdYfdYpABRpQ2n%2Ffj5m3aS%2FJQ5LSWIrz66ZX6Tle6Ka%2FzlvTPW7MUmJG4vKWviP86kJbr42wXmepbX6ZyeHq4bSfG8SLOQCZz3jczRrIX4Ls9lrzXYfPbtMY8j0UZ7Dc2Hhd6mSI5697xRBoFiR%2BUvpbBBhi4BeIxdqq28OARnOrDmBDeJJiRARyxAji12PWiHF5k7Pvcb%2B4A5bGwyUKQWtaxm%2BpF4O1%2BVCpNb5BUm75SXyUX6MNOD%2BcwGOqUB8hzJbiDWX7KfVHzwJ3enJeNQ62bE2zGPyiKfhzgQ2Ihjh1ZXwXQEGrfaswfcOOGFcmrugKbrO2C8NzPNbshK5%2F684ZSVJoJ3NN%2FPCprgpkZpDmXBOM%2FOvH08B8H8fvJM0tA7LrjHXxICrXpu16YOLh0lh9IGyOo%2BXo8g1o2DRR8GZ4NxQLbPipWooxcm2yeV7dLhZmJsXORvJe72ygSLOJt13Gwc&X-Amz-Signature=730f18b1126d280d8b2b0be04f1d98d11c2c3a6aeca54b27348ed77e1c249c57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMNOA4CM%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICQkhu%2FpaCDcxOPBlSIFlmErsvdsdpnvGKBdhxi1L%2FuwAiEAmoMFA4pUaL0XpCLWKk1Sv79pIRY4VmLbKazQA3Z6lLwq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDAq7vqhcnUMOTq6e1CrcAy0phroW%2BliW6NxjEaIBJPQrAIHpqIW%2BAccAr53jZ2Jhs%2FdS%2FTfs2Nr2kY208rNRZZRz34vgxQhmaVMH1ieG8UuwUbmSY5KFki9e3S3uyvjQ09xuZ3HofEDDwaPxrQFlCGucBU2Mwgfjc%2BkolxRnRuSVnWBvdJ%2B7GykKbUwMklLkVkoqs61YsVwkYIGW%2Bln0Zj1RXjJ7ERumRBzAMtJta3gx%2FnGW7tvY1KkHIHZlul7k4ZkZZyWRVBuDFLTblWAq20WJsrEZjAMGFGbv%2F7ivQ3dDTR%2BbHCBuyy6bgLxZNBtfSHuBTjhwJrwzG%2F8BIipvx3wvJEYrGSiCs4vMmdcnRGqWncAiCTmR2JZAHGehOTVf%2FSlc9IuU%2BiFnRlqCz3nF0lpKqtw5%2FpmdYfdYpABRpQ2n%2Ffj5m3aS%2FJQ5LSWIrz66ZX6Tle6Ka%2FzlvTPW7MUmJG4vKWviP86kJbr42wXmepbX6ZyeHq4bSfG8SLOQCZz3jczRrIX4Ls9lrzXYfPbtMY8j0UZ7Dc2Hhd6mSI5697xRBoFiR%2BUvpbBBhi4BeIxdqq28OARnOrDmBDeJJiRARyxAji12PWiHF5k7Pvcb%2B4A5bGwyUKQWtaxm%2BpF4O1%2BVCpNb5BUm75SXyUX6MNOD%2BcwGOqUB8hzJbiDWX7KfVHzwJ3enJeNQ62bE2zGPyiKfhzgQ2Ihjh1ZXwXQEGrfaswfcOOGFcmrugKbrO2C8NzPNbshK5%2F684ZSVJoJ3NN%2FPCprgpkZpDmXBOM%2FOvH08B8H8fvJM0tA7LrjHXxICrXpu16YOLh0lh9IGyOo%2BXo8g1o2DRR8GZ4NxQLbPipWooxcm2yeV7dLhZmJsXORvJe72ygSLOJt13Gwc&X-Amz-Signature=d6fde385f5196002e46c38a22edd9a7f322377e34c8d2f9fd45366943cfec19c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T37I5KIX%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDwjn9wgiRnBsYy44NC9YKZKeBHUbiQ1Pk3sMFXsvDKpQIgR8wkQ0BYyJYOOQkW9JxoPGhHiVBw1mLhvkKSNDzUNPUq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDBYXeSiy%2FuUqNqRekSrcAw%2BfCakPB9x3miSM3C8RsR1LDtVdvRW0QU%2B1GoTCFzNp2UlqhFI4KdLcly7vtGup0AdelfZAEzz1XJ4uF1q%2BSWDr9kC6KjeG6MEyfdcGbfn5XVT2stOBXaYNyfF4Cgsa2WCUyTti5wLaruAi1SaR%2BiT1qhysT2xJiahflze%2F3dJMQuJn%2BqrbrunCf%2FfP2kKNve9iMjGOwbbgx3zA3s1Uz12wP1F%2FD1OTVWrgmhxmc4sPteRqVG2Wxs2Wm0m1fjupgGVc2QFNt28%2FZggOMwITknNzTAnGDPgUohS2qaq%2BLGZOamofi0TaaiaItTxgTCW2SQcg4wsrXfvyIpcrefd9WFXRSobVhF3FhBkZxrHp2zsWx2eoiXtFL0K1TDrLfjXQIltUNG%2BcOIBDteVup308gdW%2B1FJq4dKKFPYVIMex0DHMxyahKDEWNsaTGycifWsExzVAIBFafkvkNMiwqoHsTFFjBsiLEJjaj7ywEABzE3FvuKdAiWF3oxyt4n12zGk0up8tmdjY7Yzmcy9%2FaOsz4YQfu5xEtFrQYLGc8%2FOhZIzbIpyrWHP7%2FjYClsNDI6QYWPsYi78zb7cNfxV1xyYY2%2BG6k1e%2BeshXA254Uflx3ImoJCuQnjOIjSRuPfJHMNSD%2BcwGOqUBqAD2n1oOk0q09dTJw3WpJsRaf4BzmJMQgTgED1CFk0Q3htWHzMw52Qbit8UMaun2cHPqAL0Xv7MKdjMpnvmsufyR3%2FtNGf5yv4Kwnhjd4sjFJnJ1D7T9vEHasAx247L8lWngywyIzkZlwA5ZwM0QOEG7IT%2Buo%2F5PClhvfH6sB6kUm10eBXBOz34xdmtBZ6px%2BBqN8WI8C2JcP050iyovikGIgB3D&X-Amz-Signature=24e33c1dc74602842de413ea9b174b5cbf69af6ce926390bc760cdf16480fa0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T37I5KIX%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDwjn9wgiRnBsYy44NC9YKZKeBHUbiQ1Pk3sMFXsvDKpQIgR8wkQ0BYyJYOOQkW9JxoPGhHiVBw1mLhvkKSNDzUNPUq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDBYXeSiy%2FuUqNqRekSrcAw%2BfCakPB9x3miSM3C8RsR1LDtVdvRW0QU%2B1GoTCFzNp2UlqhFI4KdLcly7vtGup0AdelfZAEzz1XJ4uF1q%2BSWDr9kC6KjeG6MEyfdcGbfn5XVT2stOBXaYNyfF4Cgsa2WCUyTti5wLaruAi1SaR%2BiT1qhysT2xJiahflze%2F3dJMQuJn%2BqrbrunCf%2FfP2kKNve9iMjGOwbbgx3zA3s1Uz12wP1F%2FD1OTVWrgmhxmc4sPteRqVG2Wxs2Wm0m1fjupgGVc2QFNt28%2FZggOMwITknNzTAnGDPgUohS2qaq%2BLGZOamofi0TaaiaItTxgTCW2SQcg4wsrXfvyIpcrefd9WFXRSobVhF3FhBkZxrHp2zsWx2eoiXtFL0K1TDrLfjXQIltUNG%2BcOIBDteVup308gdW%2B1FJq4dKKFPYVIMex0DHMxyahKDEWNsaTGycifWsExzVAIBFafkvkNMiwqoHsTFFjBsiLEJjaj7ywEABzE3FvuKdAiWF3oxyt4n12zGk0up8tmdjY7Yzmcy9%2FaOsz4YQfu5xEtFrQYLGc8%2FOhZIzbIpyrWHP7%2FjYClsNDI6QYWPsYi78zb7cNfxV1xyYY2%2BG6k1e%2BeshXA254Uflx3ImoJCuQnjOIjSRuPfJHMNSD%2BcwGOqUBqAD2n1oOk0q09dTJw3WpJsRaf4BzmJMQgTgED1CFk0Q3htWHzMw52Qbit8UMaun2cHPqAL0Xv7MKdjMpnvmsufyR3%2FtNGf5yv4Kwnhjd4sjFJnJ1D7T9vEHasAx247L8lWngywyIzkZlwA5ZwM0QOEG7IT%2Buo%2F5PClhvfH6sB6kUm10eBXBOz34xdmtBZ6px%2BBqN8WI8C2JcP050iyovikGIgB3D&X-Amz-Signature=8f30bf90d87d7984ccf1aa086ba98ff1452a803ac9f56fb73d00967109eb690c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ2WD6WH%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAe1yoGLqLS2N13coUv%2FjQEhoRB93cOjxc9uP7Kdp%2FzCAiEAq8%2Bdayf9iISNu3FyCxAopy2GXLqUqF1Ytb%2B3UNi%2FXjoq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDCOTESNwR%2BCKaEa9oyrcA903%2BGjz4P1jnactuBeJgreab275Ph%2FC5yGbCnxAXG4204iCtaVWzY43rmRykv%2FQX6YZ%2BH%2FA%2Fiko%2Fj6MdlL%2Bse4ki%2FPLcNjb7Gwt4OdnuiyeUITPVxepDDmTv9vfT3hzoEuU5F4rn8NxdtOc0l6NB9%2F1%2Bh1gELX%2Bg8Ii7q4mwdR7IereZs6q4t%2BUVD4fhoiyiMncFCoDDVR5%2BJKVkz7tWndFVuEtzw7PHSEq%2BhUMtPn2zb7bRSFdlszwzVVCVIOInDuuIoqRsErWc6%2FFuus6tTaDyH6BMC6%2BaOyn3011pOA%2B43q6Kzfy6mGMiErGW8qr9V9txG5mg68MuZUPUnGGtII9Hb3aBSYCouFD9RZ437uxoFGq5y5IaHwd%2FZEncSIyW2od3kOEmnCdb3m4rhZMIaSVO41TbdAGvWnmmvZmeRqRmbWYWZv1LSXuJx%2FcCafYxeVQF5dPjZ5azoJwo%2BgcvXnJuSzW%2FMRO8x%2BsdmR0M6529YBEiK74wxREAI4%2BMWOmUQ%2BqPXTLiSmuZJoFpbxhFmGO7ik%2FkJMXXTlrA07%2FPyrc0nn4h8BAl93A0kr%2F2nDKZoKNS1ewP2ghTt6GmGrqEKVuB17yWht%2FHzHsuEuIfJgobh51vfU%2B8T%2BmGUbdMNyD%2BcwGOqUBqore1S%2Fe%2BfQBtjhT80JLMv6TuWFAxUsisNJxtQIndw0FlD1Ynx8TkvAM1uoOhRd4vkk6ed%2FN3EkNyeG5XOi6bon0pLU8xnrIvFXIRTa8QWHkyVheAy6%2FqqAt%2BpMCRuynpC9lO510reNWJssHk6Hl4hlbaWKw20kS3qk%2F8ilV9hXlalKOwofObwRNUALZZkEvKSG6yYtdOOgJM%2B%2BHcgHfScg7mXw3&X-Amz-Signature=5f2562133ced2af2ca0b16706502d1ed18ca4093d9fab03b856f0193e8b01829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

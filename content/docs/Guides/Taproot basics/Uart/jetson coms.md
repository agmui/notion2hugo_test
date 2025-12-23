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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZBVGYC2%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDoZhjFk%2Bly72%2FccXpoYJ%2FOe06%2B%2FA5geDvACB3KYmLoBQIhAKlU%2F0zhmlCdlxQO7JpWL3vyV4i0DkhcpEDahEhLyQMcKv8DCAMQABoMNjM3NDIzMTgzODA1IgyoUX6caMA02j1G9d4q3AOZx3xLFVVOZqG0nx1KPr1rto7NO6QZQvCipvKxsWdOCR0co2gHBtNzMVCYYttHBukW31Pt7o3A2FNW%2F%2FVr3duSHRPBPGQWq3E1Z9kn7Hf%2FJn%2Fo7yx9qu52hOjM5sg9L8x7btbyuywJV0nwinqBr5RutJ%2FWEuhm9L1JcrZACKaT9l7V7%2F%2BtqE8Mdej%2FedSHsPaV7wTSPGKZVSTn2oAj3EWqJpPQe6D%2FvaJmfHmuShJ0hShSFVcP%2F174fKFGo3Gp9yJSqLzOddaffBarwH9orLwLGEUdKDqgWq7cuIQHkEloTApxwCs8qy7HxvORjPgP5UZ1KMjMDRzBaR2jwXjn%2FEYbegjhvHzHSerDvf8twa%2Fao3zGvcHDFsb0UqktQ%2FWDGonFk75S0VlYUN7OFrxHCxoQMMidsVxYKeckHlWObgMBTEqSbMRsJBXNcayEyJRl8kA3oKFwbgjWvbbfebUnbXvy%2Fq5MoLMWPtbwFIYlIr5MlDbFJaj%2FRMrWTRbTz7h%2B4v5gQWZwGZZj9HrX0RFMM5jLViPrTPuPCNvoetyNoa52zcTBT97V5bI15sClM9O5Rbv%2B2BcfMA633y2NCwn3OOszyV6DEHMzLR5dAgH9V%2Btt93U8WllnIutfOOXCPjDq4KfKBjqkAWImY0gYw7VowVVxi0EhHBr4d%2B8PnKQGg8Ox9QhrDKWk2n9%2BIzJxrEBjJe6b7Yoj7aWjk5aO%2B4%2FuEsbrDTL2H4NWsiEg7gvkRAOBGI6OOy3TsGi5a%2Bkf0NiHEFhSiUeoaBIYAlFM2BWAG5IdhEFQ6CMTzNr%2BTWG3yvbCXzhp2v%2BlYQa9w9YmYVWvY5YGa1tQIrEUnoeuKlCK%2Fq%2BsMC5qKr2on1tw&X-Amz-Signature=8caaeb56690a450eb8452f591b90a330a44c22a120cd84d8caf297bcec6c5f76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7SCMXWZ%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBtvfYJ81u7DBgaVfsRUwQLmCZu3kDvZscnV%2FH4zHFCTAiAtIJLsYx1vlcceznckBJL1JBzQXwgKAmZWxh9st%2BvalCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIM0rY5Y%2FNHH9cdJUjkKtwDSFVaWm0RNnYRCvdU4IbLJMCSNp6uEFRgoYUEAD4X%2BFJQ0E5mATklzCrHPP%2BaWO1B5dNEP8EQxPI0F8Lig4DFTTlouI%2FniHRFOs1HzlcTLCKF1lpuCkLLMBkL54JGNz%2FsgUOscsJ9xONEwTdszq6Ju69FQG0u7lakrApeAnJNdDysoZC0mAfO5OvHWdLXoDX%2BrNXaydlQ0h3b0osbAkS2Zst1%2Fp4Fk8D%2FbJh6I8%2BH24R6tHAwxpnz7WHpOL5%2B1GFs4xnZgH0eCmnKvXJBUyd3g1Uf1Fa2Xo093ANdh0JaDBr7hIDju1dNxxUoohUtx%2FHNkDwVtJq4nrboRW1YXVnhMChkhn4IvjWmABLyxMpK0W3q3J5MMvS5KBdXqRI24UzmQUWaiHRqA4JDbkiOdFHr9yK%2BruO8lDQqp0sMT4TqNfF4ErYqem6gPT0XTstNrZmXX05lT%2FfnCpv8XNpHiWkqIOKW1Z8tDMVxdftLAywKfxopPQ4iqQ7WEF%2BLmzI3x5kTJ7enFmaDgQlyWNyy5CHk6yZalk%2B0TCGgMHAJfmLoj7omWUpty46Tn%2F%2BydXJZy4riK2GJcJTXzzzT4iRxTO5xRGmZnYnYCQvaQ%2B0o918XdWsCj3yWPEBuqn9Sf0kwrOCnygY6pgEh3R0mN9Xv%2BU82uxTqEKZyHWNr6jNe%2BNQlmUiYAA9wBpTTtSaFI14KcMCM%2BkD7TQLzA0MKr43jDBO2hsLLBHP2oBn47dPiBv1yxgreqFJQvRat7agIw%2BTsMT%2BoKIbrVzmWPfc8uZSRDTACa07Xr3gYumlBu%2BkgUGcK6yWUgZsp4iRBvo8%2Fh9qTX%2FUqzQg2gB%2FbX77K2p9nF921P%2F9J3ghpO6M7jkgi&X-Amz-Signature=b2c3da643e32e3311dc2173cac1291e68fd92b10a238501f732f7c40d0747988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSY7SGJX%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIDthwge%2B%2B5X9MO0SWZ0qbOLL5xFnN%2BIus1qx%2FFuhHxThAiAmqnl2Ed2Y3t%2FJoGetEqR%2B4CBnX6GxsGU86OstZRtTTCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMHNKC95K3nlCzzYSVKtwDOAmKvLqeuEkc45HB%2Bzg%2FW7cdbPVCxcWGvqRFuZ6AaWdbshZwsu%2FJ%2BXlRLj2OSYhLIvHyTv6kUlu6HTCNK0dOER7wRMstfiy87XALIdT8cpexKnJq6A5fjtZL%2BvG0PV3lGxQn%2B4sAdezzpx1nNWhVu7VuqJkSXJ%2F93%2F5uipioG2pc%2BTVUIp7z3attPGnU%2BYZqfE98sLCbhGb0Fj3tCcVfwvDKHfFcHDpkk%2BbmM4isFh%2FL0M8bGnL%2FvW%2FNBStb2UOYT%2BrmFcompN7JqiUbttvNPrhs9hNNhfLCFA2SImaHCcjgvgmZ0P%2F2aKlpuM%2BL%2BOsVatSSs4HZhc2v7bvKuV2ss4TzLFNuGkVKJIsCTE%2B%2BK1gtLYHLWc6DufToInMLsQvhDANr%2BDUhLtujvPYehJDovFlSfAy6Rd%2FDtYsGx4mTyh%2FRBReywvHkFfzpZ1u3AIu5BalX%2F5%2BdJir0aYPYm4PFmZjrHaabVlJ1hqTyxYq9m7UIeUGUtmZhICWzBjJCNIIedCT9BO2YROxEHgu4y1lwDfK3MsO3sUvdhx9S5i31RXIHrEkdXcPRrGVB2gZbhrnrfLT1FXadyrnSCDXIPJcN14vJ4t3skQNkmyQTMABF1WU%2BbQQICmJP%2FekUuGcw1OCnygY6pgGWNB1q3l%2BNshwcOjdgktKxoNi78DS0yTuk%2F9hubBZNTGtetJc3m5zRcRw0CVtNyZUBRwITCsQbrWpEW3bx%2BHKeyLlBx%2Bzi9oL%2BJ%2FiStoikywu5Um92b9yjs8%2B%2BtMYhcISLvSK3fYtF3rDjUEbP2%2FVpB0P8XJ1HXO0aJoM9FSLPeKTawOstGg2hw72XQTjB7yDu5Zmt3DMt%2BIhFp19jZoU98Dc2nu8Q&X-Amz-Signature=1b397943dd0520d612fc399a52049d7d521a9d781f6dfe1cad1e8122126a7773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSY7SGJX%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIDthwge%2B%2B5X9MO0SWZ0qbOLL5xFnN%2BIus1qx%2FFuhHxThAiAmqnl2Ed2Y3t%2FJoGetEqR%2B4CBnX6GxsGU86OstZRtTTCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMHNKC95K3nlCzzYSVKtwDOAmKvLqeuEkc45HB%2Bzg%2FW7cdbPVCxcWGvqRFuZ6AaWdbshZwsu%2FJ%2BXlRLj2OSYhLIvHyTv6kUlu6HTCNK0dOER7wRMstfiy87XALIdT8cpexKnJq6A5fjtZL%2BvG0PV3lGxQn%2B4sAdezzpx1nNWhVu7VuqJkSXJ%2F93%2F5uipioG2pc%2BTVUIp7z3attPGnU%2BYZqfE98sLCbhGb0Fj3tCcVfwvDKHfFcHDpkk%2BbmM4isFh%2FL0M8bGnL%2FvW%2FNBStb2UOYT%2BrmFcompN7JqiUbttvNPrhs9hNNhfLCFA2SImaHCcjgvgmZ0P%2F2aKlpuM%2BL%2BOsVatSSs4HZhc2v7bvKuV2ss4TzLFNuGkVKJIsCTE%2B%2BK1gtLYHLWc6DufToInMLsQvhDANr%2BDUhLtujvPYehJDovFlSfAy6Rd%2FDtYsGx4mTyh%2FRBReywvHkFfzpZ1u3AIu5BalX%2F5%2BdJir0aYPYm4PFmZjrHaabVlJ1hqTyxYq9m7UIeUGUtmZhICWzBjJCNIIedCT9BO2YROxEHgu4y1lwDfK3MsO3sUvdhx9S5i31RXIHrEkdXcPRrGVB2gZbhrnrfLT1FXadyrnSCDXIPJcN14vJ4t3skQNkmyQTMABF1WU%2BbQQICmJP%2FekUuGcw1OCnygY6pgGWNB1q3l%2BNshwcOjdgktKxoNi78DS0yTuk%2F9hubBZNTGtetJc3m5zRcRw0CVtNyZUBRwITCsQbrWpEW3bx%2BHKeyLlBx%2Bzi9oL%2BJ%2FiStoikywu5Um92b9yjs8%2B%2BtMYhcISLvSK3fYtF3rDjUEbP2%2FVpB0P8XJ1HXO0aJoM9FSLPeKTawOstGg2hw72XQTjB7yDu5Zmt3DMt%2BIhFp19jZoU98Dc2nu8Q&X-Amz-Signature=31560f8df33895f9c632151f5e415eccd4aefd06d291a3c6856bbb67243ae2f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7SCMXWZ%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBtvfYJ81u7DBgaVfsRUwQLmCZu3kDvZscnV%2FH4zHFCTAiAtIJLsYx1vlcceznckBJL1JBzQXwgKAmZWxh9st%2BvalCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIM0rY5Y%2FNHH9cdJUjkKtwDSFVaWm0RNnYRCvdU4IbLJMCSNp6uEFRgoYUEAD4X%2BFJQ0E5mATklzCrHPP%2BaWO1B5dNEP8EQxPI0F8Lig4DFTTlouI%2FniHRFOs1HzlcTLCKF1lpuCkLLMBkL54JGNz%2FsgUOscsJ9xONEwTdszq6Ju69FQG0u7lakrApeAnJNdDysoZC0mAfO5OvHWdLXoDX%2BrNXaydlQ0h3b0osbAkS2Zst1%2Fp4Fk8D%2FbJh6I8%2BH24R6tHAwxpnz7WHpOL5%2B1GFs4xnZgH0eCmnKvXJBUyd3g1Uf1Fa2Xo093ANdh0JaDBr7hIDju1dNxxUoohUtx%2FHNkDwVtJq4nrboRW1YXVnhMChkhn4IvjWmABLyxMpK0W3q3J5MMvS5KBdXqRI24UzmQUWaiHRqA4JDbkiOdFHr9yK%2BruO8lDQqp0sMT4TqNfF4ErYqem6gPT0XTstNrZmXX05lT%2FfnCpv8XNpHiWkqIOKW1Z8tDMVxdftLAywKfxopPQ4iqQ7WEF%2BLmzI3x5kTJ7enFmaDgQlyWNyy5CHk6yZalk%2B0TCGgMHAJfmLoj7omWUpty46Tn%2F%2BydXJZy4riK2GJcJTXzzzT4iRxTO5xRGmZnYnYCQvaQ%2B0o918XdWsCj3yWPEBuqn9Sf0kwrOCnygY6pgEh3R0mN9Xv%2BU82uxTqEKZyHWNr6jNe%2BNQlmUiYAA9wBpTTtSaFI14KcMCM%2BkD7TQLzA0MKr43jDBO2hsLLBHP2oBn47dPiBv1yxgreqFJQvRat7agIw%2BTsMT%2BoKIbrVzmWPfc8uZSRDTACa07Xr3gYumlBu%2BkgUGcK6yWUgZsp4iRBvo8%2Fh9qTX%2FUqzQg2gB%2FbX77K2p9nF921P%2F9J3ghpO6M7jkgi&X-Amz-Signature=2ccb41f52764e5cbf25a2be9d295d0e244d89acced58742aeba287e29ee3af99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7SCMXWZ%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBtvfYJ81u7DBgaVfsRUwQLmCZu3kDvZscnV%2FH4zHFCTAiAtIJLsYx1vlcceznckBJL1JBzQXwgKAmZWxh9st%2BvalCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIM0rY5Y%2FNHH9cdJUjkKtwDSFVaWm0RNnYRCvdU4IbLJMCSNp6uEFRgoYUEAD4X%2BFJQ0E5mATklzCrHPP%2BaWO1B5dNEP8EQxPI0F8Lig4DFTTlouI%2FniHRFOs1HzlcTLCKF1lpuCkLLMBkL54JGNz%2FsgUOscsJ9xONEwTdszq6Ju69FQG0u7lakrApeAnJNdDysoZC0mAfO5OvHWdLXoDX%2BrNXaydlQ0h3b0osbAkS2Zst1%2Fp4Fk8D%2FbJh6I8%2BH24R6tHAwxpnz7WHpOL5%2B1GFs4xnZgH0eCmnKvXJBUyd3g1Uf1Fa2Xo093ANdh0JaDBr7hIDju1dNxxUoohUtx%2FHNkDwVtJq4nrboRW1YXVnhMChkhn4IvjWmABLyxMpK0W3q3J5MMvS5KBdXqRI24UzmQUWaiHRqA4JDbkiOdFHr9yK%2BruO8lDQqp0sMT4TqNfF4ErYqem6gPT0XTstNrZmXX05lT%2FfnCpv8XNpHiWkqIOKW1Z8tDMVxdftLAywKfxopPQ4iqQ7WEF%2BLmzI3x5kTJ7enFmaDgQlyWNyy5CHk6yZalk%2B0TCGgMHAJfmLoj7omWUpty46Tn%2F%2BydXJZy4riK2GJcJTXzzzT4iRxTO5xRGmZnYnYCQvaQ%2B0o918XdWsCj3yWPEBuqn9Sf0kwrOCnygY6pgEh3R0mN9Xv%2BU82uxTqEKZyHWNr6jNe%2BNQlmUiYAA9wBpTTtSaFI14KcMCM%2BkD7TQLzA0MKr43jDBO2hsLLBHP2oBn47dPiBv1yxgreqFJQvRat7agIw%2BTsMT%2BoKIbrVzmWPfc8uZSRDTACa07Xr3gYumlBu%2BkgUGcK6yWUgZsp4iRBvo8%2Fh9qTX%2FUqzQg2gB%2FbX77K2p9nF921P%2F9J3ghpO6M7jkgi&X-Amz-Signature=ced3fdb11a7a950f950b9576ffc515cd3f5e395c34f4d80252aec227c464c010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVGR24L%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBa2AEnd7wNf4kYjtXO1hnpnbup%2BoojlVmxTGV07FnNvAiABEHT1gWTdBV9Bfg%2F0pPBUrlcabNSwMykADwmBJbSCnCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMhb%2BZIW4nY6WPZffgKtwD4wOhYp81UMdo32d0R8umYf7m%2FG2dLk0uQ4KLxjcovC3m%2B1B3nbMoXQasjplbBrd9waTDJ3FKD53VIWNnv1OKC02a8mACbHP6akpvLCGe3cFGQJd017rLmHUH%2BDWcmDLBOtNsh95tUwE8FDywr3EYDaoNiH%2Fj7tu963E32Bl%2FgkhQPLu%2FemOHQscmTzsxbNeVkvBwEATdZFHL0dPB2SIS8sHewqtFrMQpjl2ZaoHZ%2BbNPqREss1%2F0UnPoeVv2IXDQc99On62ArhPr5I%2BOwDdv5MKYw96EBzvKuTg5oNPn1EswZuafjFVnctIQ6fjY9ReIJLhl6HfhAnOsVd2uTAtOWySDAIm9UTiWrPVp3WWxqmUPbH3o2Ce4Ok9g3NrMt5%2Ft0ScjA3Y4us7t9GIERCFoFtujeMSUe5mQ%2F8WZLKvVqCak6AmhbFr9zfnZB29AEr4VyuY%2Boe6QMDK8eKFlKy7JMo0P3Jv%2Bg6z6quM%2FPimVhF9UaqAXAi1fMYb7AA4cWCG%2FR1974HeK2Ynd1lroavdN3PIK2ar8IFHQcdmn8cmSycSOgl1N6u2J5mZSe9tZMSJ%2ByQIW2%2B5QHIEV729P8PeK8ngk4F9II177z2IaGuww2CkA9NMJNLBaxJcLWIkwwuGnygY6pgEu%2Bw54dhg2CGu1AoLktJbRhNk4k6kY6QEdLIvAphG%2FKljpxWtY%2FqOsVAcHY6aSelPl%2F4Ueo1F3dZJxwWsnfV59m8jXzJSWdXnMy4rKBmn3E4WWhH4jr19Nwar2CUqO5Xw8m2czhrpu6u8Uj85VTCUoOWUb6ZFxE7iZf1nr0aq%2BxD47EK3i5vVwpDToQ1f20RoUoB3JwD7gjbvN%2Burvj27Q0AkNZBvb&X-Amz-Signature=d4936f3bf3c0e2959fec424924f828be901c8139edb7999f3693ef64b88d714c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

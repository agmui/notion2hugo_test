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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMPTQ4TH%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwWHuZexJqX4KW%2FL0Fsiym1g3qHFea7s%2B5hQOIW1%2F5PgIhAPAM9rlgIfMBpjslyvhyJzhayOkl0h5EbPgLZ2tF8JfSKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4c2svOXRw4YrBPaEq3ANbb9D5dxlorlczBr1I1j%2BQGtrKzvcNDiVf0wDS1qGS9Ns6gLFDHVB3%2B1GtcTNRhCTV21Agdw38TVmP0TepmQUwPJhy%2FIn9MMspW1wxnZj7%2FNyUKkhSq7NOsM%2FrXkEtwJnoaYNL5Wh0JJ8RlPYVNwChuFFeW8BZcoY1CkmwGIfgjNTbyDKau13ZMmCIAVNTS8tsAcTaZpWV3lJNs3GQPikKoYmgDjTGCacU2XAoEqlJ3sa1AjCy3lXMDzAFitKVxzJUBeSUMjfs3BLwxlft5umd0kAQ6cmtGQCnoaLsBrsS0EG4U6UYmJ6k9UM%2F0D6vef6GQ6qOM%2Bxk0tx4SEXowqSA0aZIhS6Kotw7yK7s2ia5%2FqxmJESZ9%2Fo8HRrCfA0kH5CWD9VNrMfP98%2FAwfguRDz75rMYnvgZqcp26Nd1s6zt7IDwD9ZePt636koVsAOLq%2ByBs0X%2Fe7ORSVIl5JsYELIEcSLBz%2Bp1v50yEz0f2Cl%2BYPvRemAIVOPKgeKLW7fjBSV0ltrQTgElCqtgRsiQcdyAyXIhTG1Uae3JXp9DJZJ8ckihFWz%2BZmX6QoFafyCSdCSpD4VvhBuCatPHDsRmPI%2B66GZ8BWSjY5nYtuOGl3nQJlANdgrWZ%2B2qRRMXOjCAsszOBjqkAeGjCKfRvuApf9ASCkWC0VHxErpf3N6GshCJhfMn6iTykV3iXYbwq%2B857MhLLB5urlzAwYuZLT3g54IDNLoW8O%2BbE%2FeeKkzRkkHORz8PHtCrhPkSkx9Q%2BczFJrzq4%2FBeTphrw2W%2FImwunKbIGvpb35Ysnafrew%2FD0AAFC%2BPsctdQIXqEu6xygaD%2BSTZWtsDmpqYvmykRga8QVNoL7CkvOseDMcEk&X-Amz-Signature=9c1791dc871f39f1ac661f80e99507b9ff0d4c0ccefd38cd570f8104dee9f144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HOBQMRG%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGRqKBldT%2F3wA1QZA5vC1HN8c8OVsWlsjnRGR4xgFZTAiBFtOIEGXGTzRwIByDu%2FLtUhtQyxIhfbQVy7scWAdjg2SqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYgqH2pHCqSZekU9EKtwDBBwKhARcuKr2lCPqQ4C8L3ibvrjPZ3WHl1iz7QqmkH%2FMqCODsl4V%2BMD9wurTUpz56TFy3Dj2d0TEcFkFue1q0D73N2JPKj8Ax01%2FfZ3faGlzZctAhJJLDMs141ZEC664u0onlgE0LgJQ8OqGX64TQMjz7N7916gykJVBW6lUG3F3vpRIZ%2BWD7izidtZT9R9RCfb%2Bfrju9ZmUWqFHrojkjAfZHmL7i4VhF5ABaepmmttKO%2BZ6rzum5vapG3jaz3lVTF6F3x1qBqGMIj0WnAJzyDgB6uZKxi0wTwfoLIJP012ybLAS25SNQph7ZQVRoPaIkuocbKOGfUj8etSEWq2BWD84iH3QXvh9zRF7VGMms4VyBs59C0dOsr2c5xMch3sssmNEvyeZITxmYN52tb08ovljewZDo3KFcrumnUGr7uoS4M30uuVGjjR3VGv1S3qFz6qUVFmLkZR4X3gYwrCtGndWTY4LCuN8%2Fisk2z2FYlLxbyRIhbtpT8HTw5Ee72K5S4ALm04h7PpsCP%2BKiZJnYpVJ36Kt7voB67ywR%2FqQ81Kzc0F80CwI9QL8oLyfeAE4tNWpiwH3Q%2Fize4DJryaf%2BPwPZUV2bW3rE0sIQB7AyrkUTg6kwUMAm9ayhu8wz7DMzgY6pgF0lWY%2BYVjLyc3cUGQ8NCMKPkKGaVrSNvtgkw6tCl1Dzt0vs6dRudU4cpHt%2BBgp7Gq%2BWByt6PPFCpdyUCUiIU%2BAwVZ3t6Eyyj7XubtAsbSghNf6IHTgLg0MGEzdvuGdwWFEwfXdM7g169nO40rx38yaJbh0hUEY3XCTfR9NGjEtKoqHjQWT6BSyRcXEB981OXEmItfF0ADEvtwSy5V1TTpwtTRSfESS&X-Amz-Signature=f7c3c17143609455515a43d7fad238568f73c8946142cf0e833deda6c2ed5622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K7W4BWL%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKI5tJffFmETfFFIANuHIgtUSo3k0KmKXtTCQtj0F7lgIgAQN21I7NAYdaK%2F%2BhCZB9HZFvdlbUQYMAKEME9l9ZywQqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCx2F3XgAF3mk%2FGMyCrcA4PpPDz0g8FmW1tZw2NmYvg9kXeZgeplBoAI5hzX32udQQD5BRNWvUF437paAmnMeGaZnK5T9%2FzLEa303ZvzdpB9eMV8AFfqVl%2Bhd1CH8ZnfvShlk768L%2FKkWQJNBO6zyYR5jfka1a6Dk9uTWSK0b2RL%2BqfKZoVw9TYEnq4lz0g4VJijn7DcxSroRAftKTiDh7igVyGRLC4zdgzENxfnO91lEQSldNfXBj2IaJotX9bYiqdiiE7ROyH5mnDEcF%2B2FaoFAri9XmHvNUP3248PIjGCUdBbFakR0pQlmJQp3WBowsceluNScBZ6xbQW1f5ma7OrlJNAVau2FVk6LekP9CCGdkIlsNaKFVUuFcVHYhLAZBvk8E4jF54T%2B7oOS7dHolWw%2FdGv53RbTtJK%2B2xSUvo4wNTxLWtnEPybR4kpdNbc2dGhwRR5F9Rsm9m284gCdJwYw7sbYBqWGyASkQxv1%2FxrdPUiaHhLoqwgRqEa%2FZKtDodkXykZS1qVVmKU3pv8T7nPmWTi7e3v46EjK3ngQGu0Hx9i4F8KnH3CKWre1mGkUHp77l7ZgHhQNNqtSdxKwutjx1RS9B1668bjqsptiBTt0GJ%2BXXy7coU7bJCZGUIGwV2DRUEgBdwnf13sML2yzM4GOqUBDuWri8x5i77VzzVdyWWTRiLBITCJG8vlCfmjHyNHCz3YLmPyNq1zpC5uwui%2B%2FWxmx9NDIkgBrTKufS3TTWXytUOU%2B07FikuePbi8KawdIKeQ6XNv7blr%2FdjR22o%2BV2iLuMeB5JmXkfqaj6EDNUKAQyGeRDAw3RZjmCCqU66kQ8fKVgvwnJHlwmKvScjDbVi0puQyVG7i9RqD8oJSXnzLbyneUAsD&X-Amz-Signature=e3041601a6286fcff1f2892fabb542eb3e3fb6b3a49a5e052615d2e6605fb573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K7W4BWL%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKI5tJffFmETfFFIANuHIgtUSo3k0KmKXtTCQtj0F7lgIgAQN21I7NAYdaK%2F%2BhCZB9HZFvdlbUQYMAKEME9l9ZywQqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCx2F3XgAF3mk%2FGMyCrcA4PpPDz0g8FmW1tZw2NmYvg9kXeZgeplBoAI5hzX32udQQD5BRNWvUF437paAmnMeGaZnK5T9%2FzLEa303ZvzdpB9eMV8AFfqVl%2Bhd1CH8ZnfvShlk768L%2FKkWQJNBO6zyYR5jfka1a6Dk9uTWSK0b2RL%2BqfKZoVw9TYEnq4lz0g4VJijn7DcxSroRAftKTiDh7igVyGRLC4zdgzENxfnO91lEQSldNfXBj2IaJotX9bYiqdiiE7ROyH5mnDEcF%2B2FaoFAri9XmHvNUP3248PIjGCUdBbFakR0pQlmJQp3WBowsceluNScBZ6xbQW1f5ma7OrlJNAVau2FVk6LekP9CCGdkIlsNaKFVUuFcVHYhLAZBvk8E4jF54T%2B7oOS7dHolWw%2FdGv53RbTtJK%2B2xSUvo4wNTxLWtnEPybR4kpdNbc2dGhwRR5F9Rsm9m284gCdJwYw7sbYBqWGyASkQxv1%2FxrdPUiaHhLoqwgRqEa%2FZKtDodkXykZS1qVVmKU3pv8T7nPmWTi7e3v46EjK3ngQGu0Hx9i4F8KnH3CKWre1mGkUHp77l7ZgHhQNNqtSdxKwutjx1RS9B1668bjqsptiBTt0GJ%2BXXy7coU7bJCZGUIGwV2DRUEgBdwnf13sML2yzM4GOqUBDuWri8x5i77VzzVdyWWTRiLBITCJG8vlCfmjHyNHCz3YLmPyNq1zpC5uwui%2B%2FWxmx9NDIkgBrTKufS3TTWXytUOU%2B07FikuePbi8KawdIKeQ6XNv7blr%2FdjR22o%2BV2iLuMeB5JmXkfqaj6EDNUKAQyGeRDAw3RZjmCCqU66kQ8fKVgvwnJHlwmKvScjDbVi0puQyVG7i9RqD8oJSXnzLbyneUAsD&X-Amz-Signature=830da5195d6da95ac3cc30ff2d6be4947fd4a5675f5d406aae2a8be3294824b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HOBQMRG%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGRqKBldT%2F3wA1QZA5vC1HN8c8OVsWlsjnRGR4xgFZTAiBFtOIEGXGTzRwIByDu%2FLtUhtQyxIhfbQVy7scWAdjg2SqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYgqH2pHCqSZekU9EKtwDBBwKhARcuKr2lCPqQ4C8L3ibvrjPZ3WHl1iz7QqmkH%2FMqCODsl4V%2BMD9wurTUpz56TFy3Dj2d0TEcFkFue1q0D73N2JPKj8Ax01%2FfZ3faGlzZctAhJJLDMs141ZEC664u0onlgE0LgJQ8OqGX64TQMjz7N7916gykJVBW6lUG3F3vpRIZ%2BWD7izidtZT9R9RCfb%2Bfrju9ZmUWqFHrojkjAfZHmL7i4VhF5ABaepmmttKO%2BZ6rzum5vapG3jaz3lVTF6F3x1qBqGMIj0WnAJzyDgB6uZKxi0wTwfoLIJP012ybLAS25SNQph7ZQVRoPaIkuocbKOGfUj8etSEWq2BWD84iH3QXvh9zRF7VGMms4VyBs59C0dOsr2c5xMch3sssmNEvyeZITxmYN52tb08ovljewZDo3KFcrumnUGr7uoS4M30uuVGjjR3VGv1S3qFz6qUVFmLkZR4X3gYwrCtGndWTY4LCuN8%2Fisk2z2FYlLxbyRIhbtpT8HTw5Ee72K5S4ALm04h7PpsCP%2BKiZJnYpVJ36Kt7voB67ywR%2FqQ81Kzc0F80CwI9QL8oLyfeAE4tNWpiwH3Q%2Fize4DJryaf%2BPwPZUV2bW3rE0sIQB7AyrkUTg6kwUMAm9ayhu8wz7DMzgY6pgF0lWY%2BYVjLyc3cUGQ8NCMKPkKGaVrSNvtgkw6tCl1Dzt0vs6dRudU4cpHt%2BBgp7Gq%2BWByt6PPFCpdyUCUiIU%2BAwVZ3t6Eyyj7XubtAsbSghNf6IHTgLg0MGEzdvuGdwWFEwfXdM7g169nO40rx38yaJbh0hUEY3XCTfR9NGjEtKoqHjQWT6BSyRcXEB981OXEmItfF0ADEvtwSy5V1TTpwtTRSfESS&X-Amz-Signature=86a544c2594973abd064b1de2ac520225f735733ec1faac9e0e24948cd021437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HOBQMRG%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGRqKBldT%2F3wA1QZA5vC1HN8c8OVsWlsjnRGR4xgFZTAiBFtOIEGXGTzRwIByDu%2FLtUhtQyxIhfbQVy7scWAdjg2SqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYgqH2pHCqSZekU9EKtwDBBwKhARcuKr2lCPqQ4C8L3ibvrjPZ3WHl1iz7QqmkH%2FMqCODsl4V%2BMD9wurTUpz56TFy3Dj2d0TEcFkFue1q0D73N2JPKj8Ax01%2FfZ3faGlzZctAhJJLDMs141ZEC664u0onlgE0LgJQ8OqGX64TQMjz7N7916gykJVBW6lUG3F3vpRIZ%2BWD7izidtZT9R9RCfb%2Bfrju9ZmUWqFHrojkjAfZHmL7i4VhF5ABaepmmttKO%2BZ6rzum5vapG3jaz3lVTF6F3x1qBqGMIj0WnAJzyDgB6uZKxi0wTwfoLIJP012ybLAS25SNQph7ZQVRoPaIkuocbKOGfUj8etSEWq2BWD84iH3QXvh9zRF7VGMms4VyBs59C0dOsr2c5xMch3sssmNEvyeZITxmYN52tb08ovljewZDo3KFcrumnUGr7uoS4M30uuVGjjR3VGv1S3qFz6qUVFmLkZR4X3gYwrCtGndWTY4LCuN8%2Fisk2z2FYlLxbyRIhbtpT8HTw5Ee72K5S4ALm04h7PpsCP%2BKiZJnYpVJ36Kt7voB67ywR%2FqQ81Kzc0F80CwI9QL8oLyfeAE4tNWpiwH3Q%2Fize4DJryaf%2BPwPZUV2bW3rE0sIQB7AyrkUTg6kwUMAm9ayhu8wz7DMzgY6pgF0lWY%2BYVjLyc3cUGQ8NCMKPkKGaVrSNvtgkw6tCl1Dzt0vs6dRudU4cpHt%2BBgp7Gq%2BWByt6PPFCpdyUCUiIU%2BAwVZ3t6Eyyj7XubtAsbSghNf6IHTgLg0MGEzdvuGdwWFEwfXdM7g169nO40rx38yaJbh0hUEY3XCTfR9NGjEtKoqHjQWT6BSyRcXEB981OXEmItfF0ADEvtwSy5V1TTpwtTRSfESS&X-Amz-Signature=da573fdea935357cb6cdbd025a5c1fc6075b1b83c289dcd87b8fa7760f735046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU7HENJM%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6TPOzFAYYYqvxMwvzPUyVxwYDgbIlDDtRS66PspsnggIgVZ7%2FDUerPX5btQDsa8GTf%2BKaY1aRHAG4BUDg7BAr5kMqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7b8gmepX%2BnNoyMrircA56zxcoj1VlWH%2FlgAjS6cMLQnP0Jk4ivkpL%2F7cneVo%2FQG%2F5RTl23Dl0YumlJC0KNO848e74%2FqYQa3Sei%2Fm9Ic5yN9aViZJWtmH3eKA%2BxvGSEdOwB3aJftqD40bsfl0lAKrF%2B41ws%2FNfmkbHChG24q5xL4F60xLqWOSz2gHmiP4D%2BtJVL31pnEbds6yovulx1hhvKkJCBjwESkqAd93kUJZbIN%2BBfDyjmU15TpWdoagj83P%2BYUk4MZT2fjBZztgzegVD7QihBIG1MKZs7EB0IpDjecnJf0%2BkvMdLRPxZZyjQAQao%2FoO9rjOZPk8A%2F%2BGWEqezcuBSEb0ZxuATCvZ9%2Fyj9sXHIv8BhvT8qnEO13ptzc7U%2F15mLvbfW0cyPX%2Fo2i2%2FaGEGctlw5K7tDhbHrcHNu0qUIWQYDo3jSJ7xGkrKVXnX%2B1vnYZl4rn6b4e3dJ4c7gAaKVZxYh2QBZR%2BxCW0wnq%2BfBtIlD8aG8wKK2KS%2BreKddlU1foNhfwsFxqOnNwmhSBoYJ01e8c1edVsaE1FP%2FFUn0sDSRrfmRYc07lktB7sCVXgAuwg%2BukLz2svlwX83AnnOL6ygumw0lnSffijOZ9lMExmXHPZm3mzj4XcvyCNDbz9kUtooPkodtpMMewzM4GOqUBUtqDTrcdrHto18cfYW4QqLYGdwMc%2BJUrenhsj8a96sSZB9%2FNACVRbRMvn90tDKZ996En7RjDqVzcRms%2FN%2FyPIISs%2BAynyzqOccz2%2B26MxTttjRWGElgDpZpSpQoZGfbovbQChedirB2pRUoNxVgQMUYz%2Fbi0LtHl0pJkLPlDiC%2BGyGPjccJdLWxEPf1m1T1Z7YWeQc4ZeUE4jFA49r%2BaXkh991B%2F&X-Amz-Signature=b0ec4172ce7334ab26ac931a07800d8ca05e29c12a3df6697b3c289c0f6bcb77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

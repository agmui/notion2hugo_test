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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7O37ZWE%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfwc2Ao3OgVUwU5Adtvj2ycpa7RIgdmSnKHZFbq0Oy1AiADJGwIBMdM7%2FFQZJ%2Be5jCWO1QufzRUdDDfENstHNO8USr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMqSlzMRjmvhweqX82KtwDPpcZk%2BI6t8RlFceitocLOr9sHReOcWQNGhCOPu8c8uXYR9zTbusBUB3KmFUZv91asqRSYVBYTsbdT93OiISwDIcPxMTdC5ul1VvlzrvW7Al1MNNEfOIpKo75lMbkj0XYKo5MuPDYhWfxMwm6qVo4L50ZbnTmrqYf7WRs2kd%2BTYLdPyAarcSrPv3V1kI2rReni9wrGoc52kdO9cvq9SrmQwzoeHe%2BF0DScxZ4tNbDM2T3i%2FbOoyFVqxJ7PdDBfcXNUFkTfn94L3hSHZHRb9ei3aXCWyHz6f4w0cL0nS%2FIYpL2DLdt509TYIvlKtapFhlVr2eW%2FUS6NuN612zqntXsoZehHnqrQkZJPizUgu6Anz4AtOibHmihpWx7b%2FK20ab6fWCRVL0JyWMiIlV3J1Ho2RJ34%2FY6Ssr50vpIDENFJlzSb9dsvJ7SZs5rKGodI4mF7PCak1%2BBA74tjWKjHiuHiFxaCYgl%2FQ8vG%2BEknwvpnH3TsPMK0Dm%2B1NHX3nB3x8JLPjvVWpvwtz3uzK2NBBHLrlmwB%2FiAccEVphywICVJtuEN6XCeRLmfIUKixF%2B9c29NMZEqfhMFWRoReDTbWx299y3Y41%2BUt6R3dIOpf0JOMZFTAL7ZPfLFFcLF3oswrtPe0wY6pgEnjERBeUF0pS%2Bk9R6haNzhmynvQ%2BP%2BIqDZKzQkaJnn6gxEYBN3eUSj9JXSo6FRHCT6PNZuARNPpRUGKYP%2BsGsAn5BWdF6NkHY9u2ylFhmJpvXA3VKgO6KG5xQLcbCnZYJ1O32Tf1vxWqD5pFqdB7hVg5pPi9nnWEE4MBXHQt5oeba1ArZqdtJNPNrUR7sgWwx3gnnB%2BA9YxHkyvbP83jDETw%2F1%2FYU%2F&X-Amz-Signature=8c2b5c2963c01091eb59946ec8b0cec85dfe85cfcd0ddec57213242a79065735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YBBHR4Q%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5Z3xgPAxn7pBFMPGdIKG5cGyZlLKrJlYFtjgMbdN3rQIhAKdDHfhppHyUCt7n1ZlkbehLRCoRcPzAcVVce3eXcmBsKv8DCHcQABoMNjM3NDIzMTgzODA1IgwthV91vcYT%2FxyDdrwq3AMHU92%2F3IfupQQX88HL5DOA8EeXhbk%2F15KFPmvpAEk4WtRihzx03OhfmlSin0ewkoQT9RLpU9RfAEd9QFb%2F6NC5dNdnZ72Q508YNeB%2BA0Dtk06ZuU80G1NgCxaXNWsIBXqS3E%2FnlJJypRwybMpeW7JTSMksnQ215o8806NoNgqXT0nvayY6CWxxhEWsCAlTNaTWykfQN1hx8AAcJmweXozNK%2BUpEykbTpVTx2xoFuzdz7gI2tNkDLLSZcerm3H7O1yAt2qqWdlTK8klo8owsB5VnLfAJJCM3ynDRoxF8X0kMjmVcs5k0EMGazZyN72hlgSRO8QQAl15s4qfmtlwbS0x7lXyvFljHkAPsZ94XZJ4qbv8QWE2iQQH5t9m1Dq%2BZlyHoqcIOtACV98TDqfH2Nb%2BKCvtdTvmeR%2FWo5WPnErSu9IX64VzLReODGHW9uBhEisMY9lTEX0BaEAYVjNQ5RKg9AVgR1MuWvWa0l%2BcpRVLOPICwy%2B5KgQO3aBK9S%2BulSkqP3nCPQ5RU6RSCiLYkOnOd5gVsTZBKhk%2FrVKcOQhFSq7zd2U5P4ASnohdj1CKiIg0XbUV%2B1TfL4lubpxno6j95wnThGR4C38x%2Fp%2BWKbdknAGU1w%2F9W5MG%2Fip85TDX1d7TBjqkAe2FSJjdDqagejpHjTq12Lee9Dy7FB0j4X8Z3PdeUwSBaxTDcmk9ykIR%2BX0wVmhscuqYYUG%2BCzr54tsLslA1wMn6WSG7Ifw7bPaUB3SoOe7zUH9DbwrNMrvPELPlGRQqYETnnVUpy6r1SgCTM%2F4lQCaTSmSrZenP%2BAtWvRs12D5PvSO4UqfV%2FM9Ne3xwvbCvaBOSz5Ry%2BIuIUBJG4giOnMvr%2Fkne&X-Amz-Signature=ad73c2062331e77ced20c9c64172ac00b633312c5b9c6c215966a8b07abc1e4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK67AMKZ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcB0gGQ%2FRDPF6ItQqCT9FGbLlJ3Y7bDfvW%2BEfpBNg04wIhAJY12ExNNm%2F5i85dZyGpKxOPlI5MfCE12N24CBC29QGSKv8DCHcQABoMNjM3NDIzMTgzODA1IgxLnLY9FaR1d1YZ1JYq3AOI%2F6ke0P3hxZhUCICekdCrRuGPJtt0ac%2Fej%2BAITcyWqwpwxY9pBKiv%2FxmnmlVFPOCkDUSwk8nH55blBTmsFM65Sa3Nx2dQRz6TWCwYzNtVgOeoTnjwFgoLG2s%2FtK%2FdFsxXFVT%2FRnRK0hoqgqA%2FJofirqWucnP%2FsR%2FxFzhGySwP2JUtqFPr%2FCR3OX2LUBQ51t5ud1AEkuJUGvE%2FaD8kUGvghSQaZxUtKycdmsqRsmpb7NhXnAHva2PS4mV5ozwpyGcgymMOtxKP00Sg9pnaYOJ3NCsln4Wv%2BkaQrY%2Fce%2Fmumk8ML2D%2Bkju8byocIEODSDBwjdqi3rvy7hzlzfSJM9sXOmJxAMno6UHLn8TJq9M7oesdjgUtHmNzmIXuNo%2FrySppitU4bbFLvfUybVSJffvDGVcYLeJvOcaEnFJHlaDs1%2Bdg9KC8NWaHtzcaXxMpL6YWC%2B63JwFhD0o3T5DP8hZc1aUQ%2FU6O04vhHRD4WPP5ueqGOT1ox631hmYXWsLvPqpRyNaCk1HG%2BSJYEVppnYQiqMkpmhMfXTsHn7NHV4OGzTUvoJKMWFOVi%2FoWX%2FNKjdKjrbaMoHtVavYyDhZXu6%2FADqvV3NLrMppBQap0foRkFowfyboMYos87zshVzCQ1d7TBjqkAV7V4p7mndN5GqH7nR1oQwGB9urcjX2fk4v8AkyfTLVJoQIvzBXTr8Bl8Zf%2FprY0IJV3vw7dZJIu2k2K7YGMNf7jJATzrLeUEwsncBEFWxUN8GZ%2FnvC%2BONsP8OaUgLVQ507Oyl53iWD4kJ6LEqM44JKYoyuGIw%2FIYMPp1NtBW8CKz66E0reF9cCAaa7xUoX2aC4%2FC0LtGPa5pO5lyyDPNF5%2FNA8K&X-Amz-Signature=cc50331ae67a2985f26baa65be1f0999f57a4dd74211b5e41d91bddc52e0743a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK67AMKZ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcB0gGQ%2FRDPF6ItQqCT9FGbLlJ3Y7bDfvW%2BEfpBNg04wIhAJY12ExNNm%2F5i85dZyGpKxOPlI5MfCE12N24CBC29QGSKv8DCHcQABoMNjM3NDIzMTgzODA1IgxLnLY9FaR1d1YZ1JYq3AOI%2F6ke0P3hxZhUCICekdCrRuGPJtt0ac%2Fej%2BAITcyWqwpwxY9pBKiv%2FxmnmlVFPOCkDUSwk8nH55blBTmsFM65Sa3Nx2dQRz6TWCwYzNtVgOeoTnjwFgoLG2s%2FtK%2FdFsxXFVT%2FRnRK0hoqgqA%2FJofirqWucnP%2FsR%2FxFzhGySwP2JUtqFPr%2FCR3OX2LUBQ51t5ud1AEkuJUGvE%2FaD8kUGvghSQaZxUtKycdmsqRsmpb7NhXnAHva2PS4mV5ozwpyGcgymMOtxKP00Sg9pnaYOJ3NCsln4Wv%2BkaQrY%2Fce%2Fmumk8ML2D%2Bkju8byocIEODSDBwjdqi3rvy7hzlzfSJM9sXOmJxAMno6UHLn8TJq9M7oesdjgUtHmNzmIXuNo%2FrySppitU4bbFLvfUybVSJffvDGVcYLeJvOcaEnFJHlaDs1%2Bdg9KC8NWaHtzcaXxMpL6YWC%2B63JwFhD0o3T5DP8hZc1aUQ%2FU6O04vhHRD4WPP5ueqGOT1ox631hmYXWsLvPqpRyNaCk1HG%2BSJYEVppnYQiqMkpmhMfXTsHn7NHV4OGzTUvoJKMWFOVi%2FoWX%2FNKjdKjrbaMoHtVavYyDhZXu6%2FADqvV3NLrMppBQap0foRkFowfyboMYos87zshVzCQ1d7TBjqkAV7V4p7mndN5GqH7nR1oQwGB9urcjX2fk4v8AkyfTLVJoQIvzBXTr8Bl8Zf%2FprY0IJV3vw7dZJIu2k2K7YGMNf7jJATzrLeUEwsncBEFWxUN8GZ%2FnvC%2BONsP8OaUgLVQ507Oyl53iWD4kJ6LEqM44JKYoyuGIw%2FIYMPp1NtBW8CKz66E0reF9cCAaa7xUoX2aC4%2FC0LtGPa5pO5lyyDPNF5%2FNA8K&X-Amz-Signature=64f447b22d38c43dc181bbdef454b2907de748535e7bbd166b2255a3171a8873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YBBHR4Q%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5Z3xgPAxn7pBFMPGdIKG5cGyZlLKrJlYFtjgMbdN3rQIhAKdDHfhppHyUCt7n1ZlkbehLRCoRcPzAcVVce3eXcmBsKv8DCHcQABoMNjM3NDIzMTgzODA1IgwthV91vcYT%2FxyDdrwq3AMHU92%2F3IfupQQX88HL5DOA8EeXhbk%2F15KFPmvpAEk4WtRihzx03OhfmlSin0ewkoQT9RLpU9RfAEd9QFb%2F6NC5dNdnZ72Q508YNeB%2BA0Dtk06ZuU80G1NgCxaXNWsIBXqS3E%2FnlJJypRwybMpeW7JTSMksnQ215o8806NoNgqXT0nvayY6CWxxhEWsCAlTNaTWykfQN1hx8AAcJmweXozNK%2BUpEykbTpVTx2xoFuzdz7gI2tNkDLLSZcerm3H7O1yAt2qqWdlTK8klo8owsB5VnLfAJJCM3ynDRoxF8X0kMjmVcs5k0EMGazZyN72hlgSRO8QQAl15s4qfmtlwbS0x7lXyvFljHkAPsZ94XZJ4qbv8QWE2iQQH5t9m1Dq%2BZlyHoqcIOtACV98TDqfH2Nb%2BKCvtdTvmeR%2FWo5WPnErSu9IX64VzLReODGHW9uBhEisMY9lTEX0BaEAYVjNQ5RKg9AVgR1MuWvWa0l%2BcpRVLOPICwy%2B5KgQO3aBK9S%2BulSkqP3nCPQ5RU6RSCiLYkOnOd5gVsTZBKhk%2FrVKcOQhFSq7zd2U5P4ASnohdj1CKiIg0XbUV%2B1TfL4lubpxno6j95wnThGR4C38x%2Fp%2BWKbdknAGU1w%2F9W5MG%2Fip85TDX1d7TBjqkAe2FSJjdDqagejpHjTq12Lee9Dy7FB0j4X8Z3PdeUwSBaxTDcmk9ykIR%2BX0wVmhscuqYYUG%2BCzr54tsLslA1wMn6WSG7Ifw7bPaUB3SoOe7zUH9DbwrNMrvPELPlGRQqYETnnVUpy6r1SgCTM%2F4lQCaTSmSrZenP%2BAtWvRs12D5PvSO4UqfV%2FM9Ne3xwvbCvaBOSz5Ry%2BIuIUBJG4giOnMvr%2Fkne&X-Amz-Signature=9a10ddcd8fa12bb6745e1e11165951270435a4f8b4510cf99e3bd832f581a539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YBBHR4Q%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5Z3xgPAxn7pBFMPGdIKG5cGyZlLKrJlYFtjgMbdN3rQIhAKdDHfhppHyUCt7n1ZlkbehLRCoRcPzAcVVce3eXcmBsKv8DCHcQABoMNjM3NDIzMTgzODA1IgwthV91vcYT%2FxyDdrwq3AMHU92%2F3IfupQQX88HL5DOA8EeXhbk%2F15KFPmvpAEk4WtRihzx03OhfmlSin0ewkoQT9RLpU9RfAEd9QFb%2F6NC5dNdnZ72Q508YNeB%2BA0Dtk06ZuU80G1NgCxaXNWsIBXqS3E%2FnlJJypRwybMpeW7JTSMksnQ215o8806NoNgqXT0nvayY6CWxxhEWsCAlTNaTWykfQN1hx8AAcJmweXozNK%2BUpEykbTpVTx2xoFuzdz7gI2tNkDLLSZcerm3H7O1yAt2qqWdlTK8klo8owsB5VnLfAJJCM3ynDRoxF8X0kMjmVcs5k0EMGazZyN72hlgSRO8QQAl15s4qfmtlwbS0x7lXyvFljHkAPsZ94XZJ4qbv8QWE2iQQH5t9m1Dq%2BZlyHoqcIOtACV98TDqfH2Nb%2BKCvtdTvmeR%2FWo5WPnErSu9IX64VzLReODGHW9uBhEisMY9lTEX0BaEAYVjNQ5RKg9AVgR1MuWvWa0l%2BcpRVLOPICwy%2B5KgQO3aBK9S%2BulSkqP3nCPQ5RU6RSCiLYkOnOd5gVsTZBKhk%2FrVKcOQhFSq7zd2U5P4ASnohdj1CKiIg0XbUV%2B1TfL4lubpxno6j95wnThGR4C38x%2Fp%2BWKbdknAGU1w%2F9W5MG%2Fip85TDX1d7TBjqkAe2FSJjdDqagejpHjTq12Lee9Dy7FB0j4X8Z3PdeUwSBaxTDcmk9ykIR%2BX0wVmhscuqYYUG%2BCzr54tsLslA1wMn6WSG7Ifw7bPaUB3SoOe7zUH9DbwrNMrvPELPlGRQqYETnnVUpy6r1SgCTM%2F4lQCaTSmSrZenP%2BAtWvRs12D5PvSO4UqfV%2FM9Ne3xwvbCvaBOSz5Ry%2BIuIUBJG4giOnMvr%2Fkne&X-Amz-Signature=2152ad8c7f1900958a3dc29c4cfb071b2a1daa233f4e8897511e7c40c93d38a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRUYFQQJ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWCt3wv3zX6unQn1JtgI1rKEh%2FLkzwutUOju%2F5%2BS72AAiBir%2FUDx%2Ft5QddRIA4VAqoic50lh%2F3pl9uwm8v07WJYUyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMjfn2keGLPpT8GdCIKtwD8J2t%2FaJUrL4Env7Z%2BPSO5WB9eQiUCTtr7Hn1FWVklRTRWL9IDx7P399IwbbDYsdhYQ%2BDCZaj7J0BWBSdHJgT0QI0IREdxhcRbVIkj06qajof5UkJqzd9q2z8Yf%2BdWFL%2B%2BcztL2YweuS7t%2FaoUr5CujyYdx6dzUYB1AEvfyUv10St8n4O6aD57WPNZeGHOWi7vkAmTVDAofRGyabBD7%2BADBI%2BSMbFDB2PpiDfpb%2FEV1uh9du2Lgtc72Gq4UgjFzUh2EfuxHLadW%2BjPZqmqLaQrQBgFxJvPvWffMLa5Skq%2FnOBZOxFJUkZgaB89ZlY6iHxJQalBWzkwqUfSOchkXVfAbPJY7hz9yLQT5KdqH6WPLZkdJORphZZbotQ89j7pe0LE4RFyn1z3AGI%2B7sMs%2Bhqr%2FWIwHK7qAmMkAkNzRJjbl5RwqXZ0judtPQuegZXS4oF0awNhIthLVhoqd5bIQ%2FeHnEPxhIMcis5YfnKOLlFxLlhntiD9gIOuBNJGbQm1rH32DdlH2nVJOFDjyqcIIQeFAlcMQE6P%2BFZMXKg0iO8RAkJkXEx7y%2B5chSrh1rSPmo9vCLl6jgKpaxE9QUYsm95i25MgpnoFbcgJQlnsg%2BoE1L7rGnEMbUX6g9uV6Aw3NTe0wY6pgGsnQKG03iJsLNgDxVo%2Bsnwbz8pMRMzBZ8kmsttesWnt%2BKZybOuqCTsO0n5vmLPsy85HUdmfEr%2B2qBOeSAlfT%2BFZG178JN3zyhLnMn8LtWyi2iEwrlbWLd12mTfYKo3fYUEuUJIrALQCdqHL7hr8XdfbcFLnqdysyS1RJXT0QWscWhQbGMGR0mB8ddIvrNUmV%2BsIMUvbqNHKiwsVI855yXy5in0owoN&X-Amz-Signature=479554133b78a0981fd5e62ba1b767d59e5f02cdc9dc12cfeb8c5d46f6481a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPVOSVEF%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAx03uiMYVLXnX6rcHFg%2B4GfUVptduLoht%2FYFDCkwerwIhANpRqloy7Mkf07bvq2CBxuvasVhCdW3J1eYMDpn10jiMKv8DCFIQABoMNjM3NDIzMTgzODA1Igy%2FbvF%2Fm01caGZE7Xcq3APuLtTXvKNCjdjqXkzIH6O%2BHiYLuMlvvZF359b3QRoOZKGgh4xHw%2FDVaxdSnitauOMeJuwRQflTi9WJd6CjRkAkcwI%2FsCVsskGLCL6NC432M6ZZpVy1jLTZoOXJnvu8RBHGzXXUzJNhaRMISlANLTgVW0Sx5uvvC78R1l2Zy%2FEH%2FqUIRC4WA4Zq4TJknORWS73oxIWfDAoEpeFZnRsv%2FqlpKgQIkV5XCg9p9BOApBq%2FxQtbplgY33oVL%2BxasFk6J9%2FyRDWmgscz7QawVxcdjHmtTeRRiUzUUYWsfwu3XpomdXqhi1JQlbATRnQdgHNiQsTdIuSW6%2FZEqV3FcMvLpDWC1m51eT8uzmg0cTsnwwU26XYOuscSazBRq2sxq9VHa58Ujd2igzXVruYnpBAabqe3MkP0B8b3TwrOpb7zLvNxknYFUMM5OxHKtnyJQNHxFneCZue%2B8xWnACDuuM9hrCeSuj9j1Wufx0ok8IMVYyUoDYxZcbZcRDLuKPlzI9uMDVqUEAd6HWU7fwWacZyyInjNa1k5rdCPPVu%2FJ1L7ndJZV1PPkYGIQ8VNCqUNxhJC8lwsqW2MfxAVUPXQDYPlBau3tcWBqWDgsj7Mu5T%2BttBUs098Qg%2BXYb%2Fe%2BYJ%2BFzD9h6DIBjqkAZWmWeUSbgj5MBU06faASGBIyOL48XpuDWc%2B7m%2BCn4XPrhKGpjfRmiKC%2B2SXsyfM0AKf8L6t53lyF7jQMpEVDIXPxPRt4VeV%2BcfNcIu74ARhGxpLKNy%2FWvL1CWKmZ%2F82thv2n66d3RBU%2Bt5DelQpt%2BMBFMjLjn5kOoW5re06jAspc%2FzWK6IGVa96RzwjcXCEmLXxnqd6JXpJtb142FIZuc0mcThk&X-Amz-Signature=2e1b58d1067d4fa5dce374d36e9a41da74a18f4314151355da1082eca3d74c16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZX32ULE%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnUp7dcRrmBp7wP7k0VIqkXaWVAQtKMrfCQUDxy3m6xAiBYcX%2FSXMjnM%2BOUgxAcasiNOu0Q1hBi6xs7mF37U%2Ba7XSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM8jDhkatS10z7F7gqKtwDdTMHazwXRyVF%2BlL81EWXnODkbQJRJ%2BpPtVBgxx5%2BPnXdgRXBwPj9Vjh24bQCIzMiMgMACL5zRyX41V8Q7AOIbT0KusIfH6ZE28A0ezhpTjJKiu69bNxcNfPZHWgtFMwqhYUZ0RdFT8htb%2FEQU1%2BFGf8cGuvyCjNFwyth1S3NMLyEq1Z0bIvfrwJ3Ad5e57iyfv6ecNBPPHgPGEoeOpsn0Y2MDjp3f8KSuUYsP%2Bd5Oh%2FQ7umkhNH9MvcsNi%2FWHG0xatJSU0YRFvWzQEKrOR%2FwacTC2K9%2BgRQe4NCg95TQbx5hwLea%2FVACEWFYe0dmSEB6WZVtENQU8%2F%2FIJ7dIo1h4kKjl0bbxbKN2WahB0UcI7%2B9n%2Fipin8O1a7zBEQeh%2BoxYnsk63IFZIeb%2Byb3JDSazlEkLNw9srOuC0BBhQswE9WZ5Jauar8C2i30AF3skSbTrDiAgD09sF5DUjCCnpxso55VuyoA2W7XoJESIKUo8BCV%2FjUC73XBNgTaVrRfoMOEInbNm3lsYTMehtFPKFoWY1Ytyc1m0ouOlfbmFPiIfUN0tsq9dnWQ0Dt1vz9yA6OBjZLyn2XrUORZ%2F5tyZn6QNeaSym7a4DIcqjGUlnCnObwDL6EJkbm2dnlgXYkswtIigyAY6pgFwkmB1lspCU2duQtMediNCLrnCXnK%2BG3%2BjNpmjfsuiq%2FOHITnQunbDfUccIxXcdmLOTbFojbJ0u6mYKEXdg0OXI5dsoGm6gZNNQg2T%2BCoURDyFHeIAWO0mK8lBJSc9MF01k9LqGeFFjQMMndvd7J2xORA4AOdq96AeBJToNU1Q86FT%2FRILx1Cj%2FD82DrNnW%2Ft%2BRc7S%2Fyp%2BCwr4b%2BCOPNOcFO%2BT5exU&X-Amz-Signature=3b6087245aa90c531f2c7d34566a7f07f1bdd9349c47f9e02e407911a5898f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLABJ65R%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BYifjQXJicHNFzNzn5Gv4US2CUVDDBtDBKsda85msGAiEAvg8sIDosjDuHK7XJtUMOv6NwI%2Br4ITSQt6OV%2BZS0QMAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDItQw0pLZCwg%2Fkg9vSrcA4xjLEiwGNS5RLzUOY7mXpC4IyGvI7pPz3djjMr%2FiHdLrbLesDqVNE%2BC6Z1xyKl3wKr1N%2FWNijTeF9k7eCfepPYT7%2BQe5tXgQKL%2B4WkS0N3c9xRYOM2lpBBVEGWVc8YkcLJc%2BfEt4NIMmSCHKSDaiVizju3Y887b7%2FkTwUswNBoaQMGk4qnpJ30V4SPU%2B6gYmNoplFt5FdqnV%2B6ExgSJ9KlDeweWfjNt1Dpf1MgFtAKE1mAmXkg9M6iZOvCCqcu7fVx6f%2FJSmftLbm7jxcnabReU2qTYClEb1uJKQsUQAMNnYsBWYSxbJPBxm9MuL6EmJSSqGiwK8O3VzqK5ye9cDe7Min59VJi94ufv78RhxCVNILqU4KPutj1LeqJRo4uuENO7Hm2pexn9GZStmiMjd2HZnnObigIz0arJkGcFGq6f97mw4yxPS2a%2F1LW1c5DUB2QCMhbWUhZUHh3OEyNewI4UAsdshPKFf16QbhYaWOpOTDKO8TOXbYn0TOKFZ%2BU8xKSFfI6TxN3gnA8HlszqZrJEtdABHvtJJk0v5hxIakbS%2F2YPc0q0PUjgzYJObaWF6bdyZZsryQTgdAS61e6g9i0nW3M2Vsqr19LQHlq4%2FKi5JqZYrm4flhjqssMFMPOIoMgGOqUB9Y%2B%2FXiJEv23pzP2fTZuQy5%2F%2BPbVg%2BUAZelAUUl3CX%2F1cCs%2FBrYXFWTgR0pH5l1toCgrph5ZDxUJ9krqh%2F9Nl5JQ%2FC8fPjspwnFC69FxrIRlJZc79nlmK05Uhe3IlgGp7%2Fsy3fE1NcClME8JC6IwWqJ9HXXPHbjwikB6huwrRD2vyWmHmpUU9unTOI%2BdMTh4PmB1IF57S%2BjO%2BUdJb8HpTTKfRJjwh&X-Amz-Signature=af288e6cc8ddfcc52b98255856029100e290cf38461fe85012966629d220b71d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLABJ65R%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BYifjQXJicHNFzNzn5Gv4US2CUVDDBtDBKsda85msGAiEAvg8sIDosjDuHK7XJtUMOv6NwI%2Br4ITSQt6OV%2BZS0QMAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDItQw0pLZCwg%2Fkg9vSrcA4xjLEiwGNS5RLzUOY7mXpC4IyGvI7pPz3djjMr%2FiHdLrbLesDqVNE%2BC6Z1xyKl3wKr1N%2FWNijTeF9k7eCfepPYT7%2BQe5tXgQKL%2B4WkS0N3c9xRYOM2lpBBVEGWVc8YkcLJc%2BfEt4NIMmSCHKSDaiVizju3Y887b7%2FkTwUswNBoaQMGk4qnpJ30V4SPU%2B6gYmNoplFt5FdqnV%2B6ExgSJ9KlDeweWfjNt1Dpf1MgFtAKE1mAmXkg9M6iZOvCCqcu7fVx6f%2FJSmftLbm7jxcnabReU2qTYClEb1uJKQsUQAMNnYsBWYSxbJPBxm9MuL6EmJSSqGiwK8O3VzqK5ye9cDe7Min59VJi94ufv78RhxCVNILqU4KPutj1LeqJRo4uuENO7Hm2pexn9GZStmiMjd2HZnnObigIz0arJkGcFGq6f97mw4yxPS2a%2F1LW1c5DUB2QCMhbWUhZUHh3OEyNewI4UAsdshPKFf16QbhYaWOpOTDKO8TOXbYn0TOKFZ%2BU8xKSFfI6TxN3gnA8HlszqZrJEtdABHvtJJk0v5hxIakbS%2F2YPc0q0PUjgzYJObaWF6bdyZZsryQTgdAS61e6g9i0nW3M2Vsqr19LQHlq4%2FKi5JqZYrm4flhjqssMFMPOIoMgGOqUB9Y%2B%2FXiJEv23pzP2fTZuQy5%2F%2BPbVg%2BUAZelAUUl3CX%2F1cCs%2FBrYXFWTgR0pH5l1toCgrph5ZDxUJ9krqh%2F9Nl5JQ%2FC8fPjspwnFC69FxrIRlJZc79nlmK05Uhe3IlgGp7%2Fsy3fE1NcClME8JC6IwWqJ9HXXPHbjwikB6huwrRD2vyWmHmpUU9unTOI%2BdMTh4PmB1IF57S%2BjO%2BUdJb8HpTTKfRJjwh&X-Amz-Signature=addfe095e4b57c4674f7f91d4c843b8ab5fb2c9e73ac080efe0e5b7d4b65ced2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZX32ULE%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnUp7dcRrmBp7wP7k0VIqkXaWVAQtKMrfCQUDxy3m6xAiBYcX%2FSXMjnM%2BOUgxAcasiNOu0Q1hBi6xs7mF37U%2Ba7XSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM8jDhkatS10z7F7gqKtwDdTMHazwXRyVF%2BlL81EWXnODkbQJRJ%2BpPtVBgxx5%2BPnXdgRXBwPj9Vjh24bQCIzMiMgMACL5zRyX41V8Q7AOIbT0KusIfH6ZE28A0ezhpTjJKiu69bNxcNfPZHWgtFMwqhYUZ0RdFT8htb%2FEQU1%2BFGf8cGuvyCjNFwyth1S3NMLyEq1Z0bIvfrwJ3Ad5e57iyfv6ecNBPPHgPGEoeOpsn0Y2MDjp3f8KSuUYsP%2Bd5Oh%2FQ7umkhNH9MvcsNi%2FWHG0xatJSU0YRFvWzQEKrOR%2FwacTC2K9%2BgRQe4NCg95TQbx5hwLea%2FVACEWFYe0dmSEB6WZVtENQU8%2F%2FIJ7dIo1h4kKjl0bbxbKN2WahB0UcI7%2B9n%2Fipin8O1a7zBEQeh%2BoxYnsk63IFZIeb%2Byb3JDSazlEkLNw9srOuC0BBhQswE9WZ5Jauar8C2i30AF3skSbTrDiAgD09sF5DUjCCnpxso55VuyoA2W7XoJESIKUo8BCV%2FjUC73XBNgTaVrRfoMOEInbNm3lsYTMehtFPKFoWY1Ytyc1m0ouOlfbmFPiIfUN0tsq9dnWQ0Dt1vz9yA6OBjZLyn2XrUORZ%2F5tyZn6QNeaSym7a4DIcqjGUlnCnObwDL6EJkbm2dnlgXYkswtIigyAY6pgFwkmB1lspCU2duQtMediNCLrnCXnK%2BG3%2BjNpmjfsuiq%2FOHITnQunbDfUccIxXcdmLOTbFojbJ0u6mYKEXdg0OXI5dsoGm6gZNNQg2T%2BCoURDyFHeIAWO0mK8lBJSc9MF01k9LqGeFFjQMMndvd7J2xORA4AOdq96AeBJToNU1Q86FT%2FRILx1Cj%2FD82DrNnW%2Ft%2BRc7S%2Fyp%2BCwr4b%2BCOPNOcFO%2BT5exU&X-Amz-Signature=1acac63a31ff0a227a4d757af23a20e6a3a57951b3892bcadbbf766762f53890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZX32ULE%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnUp7dcRrmBp7wP7k0VIqkXaWVAQtKMrfCQUDxy3m6xAiBYcX%2FSXMjnM%2BOUgxAcasiNOu0Q1hBi6xs7mF37U%2Ba7XSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM8jDhkatS10z7F7gqKtwDdTMHazwXRyVF%2BlL81EWXnODkbQJRJ%2BpPtVBgxx5%2BPnXdgRXBwPj9Vjh24bQCIzMiMgMACL5zRyX41V8Q7AOIbT0KusIfH6ZE28A0ezhpTjJKiu69bNxcNfPZHWgtFMwqhYUZ0RdFT8htb%2FEQU1%2BFGf8cGuvyCjNFwyth1S3NMLyEq1Z0bIvfrwJ3Ad5e57iyfv6ecNBPPHgPGEoeOpsn0Y2MDjp3f8KSuUYsP%2Bd5Oh%2FQ7umkhNH9MvcsNi%2FWHG0xatJSU0YRFvWzQEKrOR%2FwacTC2K9%2BgRQe4NCg95TQbx5hwLea%2FVACEWFYe0dmSEB6WZVtENQU8%2F%2FIJ7dIo1h4kKjl0bbxbKN2WahB0UcI7%2B9n%2Fipin8O1a7zBEQeh%2BoxYnsk63IFZIeb%2Byb3JDSazlEkLNw9srOuC0BBhQswE9WZ5Jauar8C2i30AF3skSbTrDiAgD09sF5DUjCCnpxso55VuyoA2W7XoJESIKUo8BCV%2FjUC73XBNgTaVrRfoMOEInbNm3lsYTMehtFPKFoWY1Ytyc1m0ouOlfbmFPiIfUN0tsq9dnWQ0Dt1vz9yA6OBjZLyn2XrUORZ%2F5tyZn6QNeaSym7a4DIcqjGUlnCnObwDL6EJkbm2dnlgXYkswtIigyAY6pgFwkmB1lspCU2duQtMediNCLrnCXnK%2BG3%2BjNpmjfsuiq%2FOHITnQunbDfUccIxXcdmLOTbFojbJ0u6mYKEXdg0OXI5dsoGm6gZNNQg2T%2BCoURDyFHeIAWO0mK8lBJSc9MF01k9LqGeFFjQMMndvd7J2xORA4AOdq96AeBJToNU1Q86FT%2FRILx1Cj%2FD82DrNnW%2Ft%2BRc7S%2Fyp%2BCwr4b%2BCOPNOcFO%2BT5exU&X-Amz-Signature=9610e67f694eecd4432569628360ee91da8958fc8f4e780787250342c6cf3531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VYKO5SL%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3y1kHQ%2BdmFS%2FFnRmfkSyEY8UnBBbjMCDFMyGhEpbR0AiEA6XCQ2WM4Is4VVDUZTDJf42OhndPXFdW%2BhMclAuR9mUYq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDEVoZ5IIj5PYVhOOLCrcA3RQLFFBKA7JGb2JJfNNmQ2TVxodHmhxd%2Bxf3jZQxpS0MHUeGgrqusqYMVuwFWk2V7DoFg3p9kRfCycuXVoSp2m1YFlIV1lAuJodMl3IDDQwxQNn2aiPj060NrTqqGNKlh%2BnolKu2nhBqlmOc%2BqLvfDYoGqGiMl3LtrgPzErDvUfFelHc7kVTPBknbTgl26M541jU%2BFPiDksWZIb8f2W3oIavhDWGK0oQX4NW%2FNM0lPaAbKDzl7kpOOJ%2FxgCh7W%2BKP0kYnIeopriQjR14VIYipIPPYmVdyeQwS9HLF3Fg4Qw%2BM7WQBIKvHieCSeV2HTWph1437y7wV78Hsd1IDUcEMMcChS0HP4MTtNV3kEFvA47%2FsHCSFIMZXK%2B5h3sBopbyZw5kb8GF3nl%2BH2vfNhKurNk8Mkkz%2FiD5Em1zmWPnQGo722daIu6kFL7bkSqHTe9bxhseDo0x7qtsm9qLm85gsqWY6mIRfcbuWEl1B2%2B8GtH5s7VrFzL6LlbLHe%2F%2B0uQenSLTBqAmVcUBADGd77ZDvQ3L7BKJ5HA1FZSLrjujkgc2JdkEbKE1T7Tb6%2BQEB%2FvzhhqG2Ut4XAEA0Ycxv5p%2BHcx5rP4o6sfGlv5ytOp4klUWFP9%2BsvK6WUAaex%2BMIOKoMgGOqUBtgtsykTCVwaE1Ejhd8u8iDFMq2eEBOKJId38TtMfdL3vdTThsZk52nQv6UT0ncbTd84IauchPuDqGjdI3GLD9TrgcE8qUROWIbBfUtUIXndWs1LDjgBiiHrqqs8aRcdfMgvAtREdQJazeT9KrN0hiW2lorlGbhpqW9jHWM2CXlOw5u9PA3agLxdtn7FtG83oKV%2FfhgqFiiybryJ7ITJz6gsZ8nhZ&X-Amz-Signature=89a3ce4da1935394f4d8cc4a0863afc905e898ceee0b9e8f266eec480b11bba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

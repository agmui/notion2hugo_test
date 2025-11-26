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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL2N67WI%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F1YBX%2FUTzlaRpU8kHk8NBKCi9DXepYgmsCWCcbmLslwIhAIlnuqwr1gxs88HsGraq47jXu5TIF5YIluEECfDgVIzrKv8DCHsQABoMNjM3NDIzMTgzODA1IgykO8L%2BP6ZNfPO2Yg0q3APZiG7%2Fyf93VVttvytI%2BX%2B6%2B1yjjYLu7r8VU3hoWbYstIc8DUP6batmAm%2FmgHqJGPqSaybQSp9tkSg88ftj6l7Kw4Ew%2FxUpCDlStrCjCec6vblDwshT9qwbWDVk0awKmsvuJw6EPbYSO9UE18WyJ6soz6AKMaFvBp5Oap6JQObnkozFqda5uTQLbyTBLzanIGaQQSSpQpkXkRNG%2BLEUQ3xepy4%2BoCTJ%2BMkMSh9Ev50eq87fDGahZTwZcRX%2Fh90xVJS%2F0XQjcrgB7wQWzLhr48DG9jCvFFET6%2F%2BdeK82LFR6iEaPGNPT8bOocjYEEhXw%2B4Misc2doT69QxAUTBfd7WfzdNqssvyi8dc9SjvUi3h4fQlb750yn6seFS25CSAohL1q%2BogXCwOsCAjFrA24HGpi10Gyp2AlrtRG0nHz08UCrYS883nBfR9qiFWki5%2FE07y2GsdcVPy%2FWExPIoDErwGym5yM2fO5yIYddr1GViLzj8y6Gmb5ikBkeIWKuL0MiIPiI0QIsAQYHROaHPv%2F%2Froq94Qs365OeK%2BCnsTtLxpRINRWGOUFPcloDWDXmNKLRrf4%2FuWa%2F4Of6qcaK7Cw7OqLLGzizZOg3OcEtqZSsz8wTy0a3e3g4xJTDGLfSjCjsZnJBjqkAVndaOFHo%2F8CFvUJLI60KCgPs84OkRTtzNt0IbH19Nh3OvoEmclZC51JPwVUAN5jrkSyZWEEiWJUUVtBorEwrFXvan9OrQEzG2RZcaOH9BcVdExDC%2FWyrWf7%2FspoKZjB4lPhPZWahL72m3vn1ic3cVIu26g8qkuOhSzuAQx7Ie%2B451b1Ktb8QhVhlus8rdZWYs7wcZGkySiDwS9xp3JGE5UeUltg&X-Amz-Signature=4286f2c5c8880647999651c88e9303aa54011d5ea79a93e2dd01d594ef9a47fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF3TSIWZ%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDW9wCbdjHNHZuf8%2FwTtO8LSajkGqL4ODBk3940HzQHTAiA7eaN0wYhwBUL06yMOnYKo2ETt6JXqny7nOBV51pU2OSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM7Ewvkzzf6ZGr0R0UKtwDj6lEI5UMuaJX779nUZWfdYxMQzmT4g%2FROsYTS3Tmk5KLR0fOisP16jC2gpFd9dZiOEpmcgsufJZB6sZl0PhJm%2BhUSGpsFOAzF%2FSE%2FWwIzCEiZ5%2FxRtUCTUWjiF2nwbeP75qdIuteayqyDmGmntTcBR%2FwZNcHPFXqnc%2BS3S1ofgx9G1%2BcBz9PrxzmhBjZKyqQp2m%2BfnwXuZJdg9EtibPemmO1pXZ3gS%2F%2BAOy0Mm%2BT3VW8z8B3SwybzrxikzAs3AGWCwUx25iLF5so8IB%2FnVoglj3BQVe%2B%2FgNMOd8xPSZEaUJAWDdyOObxltgFU6Vvwpf6ADtdqazyRahojpJ1b8ad5cnHR%2FQyn%2Fmb%2B1vT0fH8PNVtgf4Fr5Q9M5B2T7VzkcczV2%2Bi7f0Hp%2BapLBnPGjEDpKghv%2Frt9NeycgkF2DMSzud8eE%2F17xoaNeovRl1iQtLlTUQZQBdlRph7u6MbfWQTyHzJjOgjN9koUO8t%2FTrnCRnDjZJIWMYW35rnF%2FPJ2DEsmomiV3ZlBcFIL7Y2lg2pcyh2rvZAderwIsNEO8YwZpzuSx7LrPPgzXmM5pIvUmNJxgre2dtu63UjmmeroBd3Xudq4YELhKuZ6FEhgTYQWGVWYLlpOfqfHbRKEKIw0rGZyQY6pgGT0s9hRA4TBvw3cIrYIeiFzRLeuuayzDgd7QOAny1T9dgDc0FS7Ceu%2BA%2FNxFqrz8Mor5cBRGa5xDSrCykNgRp6HCRqxVI2y%2BYZo6OphPwrvtzj1w8NBb8SIytxJ%2FeAZ22e1pdV5TwK9RhbrawFur9rESNasvDe6Vob18H%2FX12M7tTi3dTXIiP%2BkFNhvyQBvCjGqQ8t%2BG1FG6hwV%2FenXsCh0E0Ql0zU&X-Amz-Signature=f9787221f5aed77dbacfa8c331c010ba3ef7146f3f7e6056315d977e0cc86ee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LL6KK5Z%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZU9pTN8zr2nheATXEQFFvamoGi4LIn2Cep8mPTPnUkQIhAIsU3Rf8a7SnlegyPzrLHWXtE6aRlqM6l9iZEL1kRJJxKv8DCHsQABoMNjM3NDIzMTgzODA1IgzIocNzRMfJGztwUlUq3APtPjCkvi4g4f%2FB9RDC2R%2BC8iLsMdX%2Be9MJeKyWhRjp%2B5s3pe18TmKL3P6xxklymW6kS6vcBK0Ph8dFVXbCLWUDmYIXGbvIi8W53IMH3qtQelQU1PnprzlegdY7vgrmt4PiaXNeVCm5LcnKyd%2BjkgWjRl%2F6JA5%2BV%2BSxHa29L%2B42ZdK4ZE7e9bgD%2BbYHljvR6e4m9%2Bk44Bvi78K060DqFjZ6wKAOEjCpaUIXt%2F2fX14D8jKTUrESdxK5JzUI0N8AOyApiX%2BTHgsfHiLPDUB3aG3YmRnTRbMERZIEvcI9GIavMsvFWyWmQOGTfdXCjRq08YrnMG9wUqoiZxhybxL8XK7VBpuoSfkADd4NTDY07%2BxbxrSYXF%2FRWOUOFgjbreDdCDlrW6vnIDleTMzM6X6quQohrufe3F%2F55U6pceiWuiXNNNBZQShFZmdLSv0S2T7Vxm7mLFzsKBN4ZEBdWQ7FZHaNX728Kj26ajylpA9oITPAbSp4ipAvtuDfecHY84GYYf7n0KjXmqixnv%2B7l9uC4od1prvVLeJUjt2Ho6GpKR5AfpyFe2OITCCuagJ3URNCttY07mJEMI8ubFqWen8R%2BHx33u98I%2Bcq3iOd%2FD8pYRuwbNls1%2BliXjU3JgfIOzDcsJnJBjqkATANPCzGss1Bx2bq4FS94e9oz6AcKNrNTIl1NC6rYpUiO4xRgUYMDeKhgrWArtSpwKx1stVPFgvnC5mC2Ys9wg5lfmMSyTbqOvrzvL7tMbFr%2F%2F%2B4A5LFVxooHRjuX3YEkY7vuqEA7Ax6kAsJSiYJb6Mdms04sm5aOIwARQRYAl%2BKuru6RNGem%2BjYskVpQyBG7izvslcF%2BxbQqP12rlbKXVn7oEHD&X-Amz-Signature=3f8d7ba1ef8d17ffb1586e6a65dd02e7a25c0b534fca5d8e3a854bfc5631afa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LL6KK5Z%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZU9pTN8zr2nheATXEQFFvamoGi4LIn2Cep8mPTPnUkQIhAIsU3Rf8a7SnlegyPzrLHWXtE6aRlqM6l9iZEL1kRJJxKv8DCHsQABoMNjM3NDIzMTgzODA1IgzIocNzRMfJGztwUlUq3APtPjCkvi4g4f%2FB9RDC2R%2BC8iLsMdX%2Be9MJeKyWhRjp%2B5s3pe18TmKL3P6xxklymW6kS6vcBK0Ph8dFVXbCLWUDmYIXGbvIi8W53IMH3qtQelQU1PnprzlegdY7vgrmt4PiaXNeVCm5LcnKyd%2BjkgWjRl%2F6JA5%2BV%2BSxHa29L%2B42ZdK4ZE7e9bgD%2BbYHljvR6e4m9%2Bk44Bvi78K060DqFjZ6wKAOEjCpaUIXt%2F2fX14D8jKTUrESdxK5JzUI0N8AOyApiX%2BTHgsfHiLPDUB3aG3YmRnTRbMERZIEvcI9GIavMsvFWyWmQOGTfdXCjRq08YrnMG9wUqoiZxhybxL8XK7VBpuoSfkADd4NTDY07%2BxbxrSYXF%2FRWOUOFgjbreDdCDlrW6vnIDleTMzM6X6quQohrufe3F%2F55U6pceiWuiXNNNBZQShFZmdLSv0S2T7Vxm7mLFzsKBN4ZEBdWQ7FZHaNX728Kj26ajylpA9oITPAbSp4ipAvtuDfecHY84GYYf7n0KjXmqixnv%2B7l9uC4od1prvVLeJUjt2Ho6GpKR5AfpyFe2OITCCuagJ3URNCttY07mJEMI8ubFqWen8R%2BHx33u98I%2Bcq3iOd%2FD8pYRuwbNls1%2BliXjU3JgfIOzDcsJnJBjqkATANPCzGss1Bx2bq4FS94e9oz6AcKNrNTIl1NC6rYpUiO4xRgUYMDeKhgrWArtSpwKx1stVPFgvnC5mC2Ys9wg5lfmMSyTbqOvrzvL7tMbFr%2F%2F%2B4A5LFVxooHRjuX3YEkY7vuqEA7Ax6kAsJSiYJb6Mdms04sm5aOIwARQRYAl%2BKuru6RNGem%2BjYskVpQyBG7izvslcF%2BxbQqP12rlbKXVn7oEHD&X-Amz-Signature=f15206b6d279e38d875e1183471f4ab005fb2733b447782ddea9481933aedc5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF3TSIWZ%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDW9wCbdjHNHZuf8%2FwTtO8LSajkGqL4ODBk3940HzQHTAiA7eaN0wYhwBUL06yMOnYKo2ETt6JXqny7nOBV51pU2OSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM7Ewvkzzf6ZGr0R0UKtwDj6lEI5UMuaJX779nUZWfdYxMQzmT4g%2FROsYTS3Tmk5KLR0fOisP16jC2gpFd9dZiOEpmcgsufJZB6sZl0PhJm%2BhUSGpsFOAzF%2FSE%2FWwIzCEiZ5%2FxRtUCTUWjiF2nwbeP75qdIuteayqyDmGmntTcBR%2FwZNcHPFXqnc%2BS3S1ofgx9G1%2BcBz9PrxzmhBjZKyqQp2m%2BfnwXuZJdg9EtibPemmO1pXZ3gS%2F%2BAOy0Mm%2BT3VW8z8B3SwybzrxikzAs3AGWCwUx25iLF5so8IB%2FnVoglj3BQVe%2B%2FgNMOd8xPSZEaUJAWDdyOObxltgFU6Vvwpf6ADtdqazyRahojpJ1b8ad5cnHR%2FQyn%2Fmb%2B1vT0fH8PNVtgf4Fr5Q9M5B2T7VzkcczV2%2Bi7f0Hp%2BapLBnPGjEDpKghv%2Frt9NeycgkF2DMSzud8eE%2F17xoaNeovRl1iQtLlTUQZQBdlRph7u6MbfWQTyHzJjOgjN9koUO8t%2FTrnCRnDjZJIWMYW35rnF%2FPJ2DEsmomiV3ZlBcFIL7Y2lg2pcyh2rvZAderwIsNEO8YwZpzuSx7LrPPgzXmM5pIvUmNJxgre2dtu63UjmmeroBd3Xudq4YELhKuZ6FEhgTYQWGVWYLlpOfqfHbRKEKIw0rGZyQY6pgGT0s9hRA4TBvw3cIrYIeiFzRLeuuayzDgd7QOAny1T9dgDc0FS7Ceu%2BA%2FNxFqrz8Mor5cBRGa5xDSrCykNgRp6HCRqxVI2y%2BYZo6OphPwrvtzj1w8NBb8SIytxJ%2FeAZ22e1pdV5TwK9RhbrawFur9rESNasvDe6Vob18H%2FX12M7tTi3dTXIiP%2BkFNhvyQBvCjGqQ8t%2BG1FG6hwV%2FenXsCh0E0Ql0zU&X-Amz-Signature=c92c264bc64d94d8f07469dc5cb58e9691550c1ec4dbc4778acdcd6f49bc84ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF3TSIWZ%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDW9wCbdjHNHZuf8%2FwTtO8LSajkGqL4ODBk3940HzQHTAiA7eaN0wYhwBUL06yMOnYKo2ETt6JXqny7nOBV51pU2OSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM7Ewvkzzf6ZGr0R0UKtwDj6lEI5UMuaJX779nUZWfdYxMQzmT4g%2FROsYTS3Tmk5KLR0fOisP16jC2gpFd9dZiOEpmcgsufJZB6sZl0PhJm%2BhUSGpsFOAzF%2FSE%2FWwIzCEiZ5%2FxRtUCTUWjiF2nwbeP75qdIuteayqyDmGmntTcBR%2FwZNcHPFXqnc%2BS3S1ofgx9G1%2BcBz9PrxzmhBjZKyqQp2m%2BfnwXuZJdg9EtibPemmO1pXZ3gS%2F%2BAOy0Mm%2BT3VW8z8B3SwybzrxikzAs3AGWCwUx25iLF5so8IB%2FnVoglj3BQVe%2B%2FgNMOd8xPSZEaUJAWDdyOObxltgFU6Vvwpf6ADtdqazyRahojpJ1b8ad5cnHR%2FQyn%2Fmb%2B1vT0fH8PNVtgf4Fr5Q9M5B2T7VzkcczV2%2Bi7f0Hp%2BapLBnPGjEDpKghv%2Frt9NeycgkF2DMSzud8eE%2F17xoaNeovRl1iQtLlTUQZQBdlRph7u6MbfWQTyHzJjOgjN9koUO8t%2FTrnCRnDjZJIWMYW35rnF%2FPJ2DEsmomiV3ZlBcFIL7Y2lg2pcyh2rvZAderwIsNEO8YwZpzuSx7LrPPgzXmM5pIvUmNJxgre2dtu63UjmmeroBd3Xudq4YELhKuZ6FEhgTYQWGVWYLlpOfqfHbRKEKIw0rGZyQY6pgGT0s9hRA4TBvw3cIrYIeiFzRLeuuayzDgd7QOAny1T9dgDc0FS7Ceu%2BA%2FNxFqrz8Mor5cBRGa5xDSrCykNgRp6HCRqxVI2y%2BYZo6OphPwrvtzj1w8NBb8SIytxJ%2FeAZ22e1pdV5TwK9RhbrawFur9rESNasvDe6Vob18H%2FX12M7tTi3dTXIiP%2BkFNhvyQBvCjGqQ8t%2BG1FG6hwV%2FenXsCh0E0Ql0zU&X-Amz-Signature=632f89b62cf5bde21525296a196b9289437c3f16ed1277b816e81e25f8a37d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY6WHLGP%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOjDcKMzeb3n7GRvyeCjaxvfKHMhzYi3h61%2BEYR%2B1ROQIgBbEeyFQ7oEcK45JsENOFKukeGl5ujopnCsaYm17RTGYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDGw9VLQbTsvB4gGkpSrcA60YDl2S0ErzgB5VBTmVxcL41tUoP91hNzoIQcy9TUVnFoLu8wwEE8%2BSIRW1rOhZtKHLdIO5ovOoJNXfImg5Xfe12ZCSgNH0gEvTs0FKScIw8Jkgyc74ZGYTezpHl8HvkDL7K8Xy%2FZUr2XeDRXYbz%2F7BRYZ%2FazpDrGlpuqvDTu2qJu6L%2FPXv42pGbjuV%2BEfTHJwvU%2FoZnMWSNr5Uj2ZcX6qrjTCb%2F9hTd2EZ%2B5Z7i5P7YZybM7sXBuokfa6XpIkZyxOnBSs9LhMrnkHRbgG%2FEA%2FSDUwiSQeFjjUmJF8zchQuGX1XD0kV4q0ar5eAoYdPGNDwVfWKXRrxDOS7B9waAEzqDJe5k%2BttboVRSZCV%2FZep8%2BCSYIOZ4Y%2Fjic7V%2FSjPbMv04iQILvvgcnYmxuTJ4n6HQ7efPmrVE8pPt6hlESVWc3hQ3uVaM7TsXx%2Bo7h7xWh4lRFd6SLO2omERL9BS8S0rVQa1EX6ArKh%2FeUUc17lhWOLJ0A1CbMZK4QMhvq1C5xzSPIgQzdAzNJJeD%2BYUe0x0umDp34JQ1ThQGUkoBqbgLMSbwhWemHkHuWK%2FJncHZ4keKsQmQ0XfZA9KP8hiYVCD9Yc9WT8t5Qm4UNjtiX20JJ7qo2M%2BJPDn%2BR0yMIaxmckGOqUBTurFT1WB2v0PvQkNqcplNSWy8%2FqMXv0F5HnzCinnQKhYzIfUXky1Z3p4PSggaiXk2sz93DpmC3wlIIP0h7H8aboeQe2AZWowDlR5ZeK1dkXU4i%2F6cSKUSJoJIYARoI9t7o4M0%2BHhT%2F0CV9n9Oo3AWpIe7tnQd3G2kkYO3WOZ4XS6MuWrLxB67z2bpal1JkEAb24kqX5O2Yd9qZscdKlxGe30wYLf&X-Amz-Signature=e152170513c2551caec1ddfee8fbbe46c4198d8b973d3915c43a55d8ca03a67b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

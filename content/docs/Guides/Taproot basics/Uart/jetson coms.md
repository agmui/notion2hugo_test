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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPFF6CU%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCQb1oWulI%2BShSUgvi9NMj%2FEFWuLNzsYTJGCQE0TZOmLQIhAJ%2Ba0Ic0jAI5r%2BYJE6Z4u%2BQoJs3nwePhAIt29EtpxgQFKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGXRVZtwbHGbmay6Iq3AM%2BihUD2iGiRpG11ES6K4xuD6cpY56tf3ZmFoe4Escu3sSHOgopJScUFoxkAsf16H4YqfgpeW3%2Bcu8bftmhzXAIx7usSpX4V5CLhkxZxDXNzJIFZTSSEJHCKBMr0du4x2AbKr9cWO3rez5QcQqo5Cc07BmMOPNcoFCNjADWEJ6h1fD%2FUGcX2mJIrugSGFK%2FiiIXqDjfOSTr2tJlTJiw2yBs%2Foy%2Fr%2B280PwlhnCYzltzPodM10%2BDaU3UYyPRbzdEdUxF8q85%2F15Mf0F4%2BJ2kK8VL7P%2FZ5pA%2BrYHSPilEmFDOtq3HNolpZGP%2BFNefJE%2B4Lk2g7vfIs2r3F0eco3XU9tIEU10Pcs6A4KNL2BfuF29%2FQYE0w0a%2Ftic2RQq%2FXyKSTjFDFXIZgcobPd6UJMrqVXZCWnO8aygVa0rHB9jimVJElAYTYnwMcwnNK13HsNCyvnWtSbAIXgbSnt8vEDZP6wYYMs5WcwzDmAHp8KjBODbwVcEwYw8gHe5l3L7x%2FLyrahBC8YYcZQlMMAyj3uLRcGT%2Blxzisdd3H6cDkIZVOiJGbhpYoHJwZrwr%2BUGC%2FWwTTbFbchhk6WZDizjBtvVV2CRBfIIaJQgoPWIaMrrl7y%2BH0nycLVZRmQB33FGH5zC0pcDPBjqkAaskvb0aPrjXr10XGUCNSMQspVrkPiFUaWcx155QIF56JYtrCCCOm2gHIUi5NgO9Eaz9bhI13otv9nn1uB0lJlSLT2GXypNhqnGIKGJV7L8Zn%2FcBUd2I23JABKin%2BL7UWcnd1ID1KovAoRoKgQhqB9hLcCczDiYgiON0cw7mQjGtque%2FhDCQni2gPK3znFmdZIFRrBw9fwXb%2BEw%2FMpOG47qprAjJ&X-Amz-Signature=e6798417c28aceb649d7a307b138b02af23455c4c089a23faa89846e9150ef59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSIDC75N%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDr2hiNtki8UwA7Rx6cvHOmQB%2BAus4PdydGdh%2FJRDnKOgIhAOY2Vwpoktb%2F4KxMjD3HsvKKyyVIGsbvFFaNwN0qWhH8KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzmc5ZAyBcEnJkYp%2BUq3AMQYiZ5K%2FOs6XuxXyuIUKKLZJbK900HyqzAMXJhEvaELE2RxiPNnB8wfCHpExsVVvoN1xKIP51%2B%2Fr1vfCT0HzroPFnmVH73%2FRrmlryk2JX0BDCbyyTpPdPfKCr8P6ex1p%2B4niDQRziU1TdvwsdeQgSl%2FcaLIGE7g7U8L89pbkRnL%2FmihHTwvXeYJmUav284H475%2BIBRdOIRjWUpG6prSR%2BO1PTmj04eHqomnGWQQPBd4WwJ7XMGvefDa62pWV2fhCHII9yFQb0l3Uyhhrg2MB77WnJwRMMZbtrwLGMEBrtPTnfXzq5WJzo2W2WzO2w1gE8h%2F%2F2QzhBQ1IqsTwlAkga3Bm%2B%2BBQ38c%2F5b8gQ15gAUpzO2PVh5d5q7wgC4Jz1%2Fxj6uu2cJ4ehnZAv3pbZX7QjyzK8PJ%2FVopOv5pSnhgB%2FBM%2BSdYONKLfeO%2BxA4xuNQPMqYiYjyWgrrUUYq4j1yergtHGElZRLFKfvv585Cs1bq1uaCcQ1uk2KGBitRoVsw2Ss%2F1ZStZSo2dvusk17V50Zw%2F2NDI9m1jDlDWtudYpSXm%2Fp1ppGCxs%2FOJRzNkPwx3dnyqrs3dKY4xRtvdrtDzETkZe7NTb0aqfeytjJiiwY6ugphES6eIqJIAkKCSjDPpcDPBjqkAQKo0v%2BFMB7iz%2F9rMpFzrTljl7Xx4qiV%2B%2Bx1YwVzmwbc816xZHKpEF09HeeFscwkDgOgx4w34eqKFxJkOjkN7Eon%2FFP8G4JbXIAgYaOjljkGO1qz7ZRu0gX2LczEq9eLZ0B1BKXcL9VkaFNWkQeVjzL%2F%2Bf3MN0vrVsNmNy5LYfbKmyNFtjPvAk955K7jxdxuX7PtOdj0O93yH%2BYQJNlsrVQRCDB3&X-Amz-Signature=ce231404bb8c31b4f4c4f7152809112e5f61e2e877a2ce204ac7e688549592b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MUVXR2O%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBumxvMf3i1hso9AqbMCatwOSusE0N3nqPMNWrRNw2u8AiEAo5Jm1cva5B%2FfP896u5zFtZrV5fPe%2B%2BZ8EIRTWbVQELcqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOA4qTc2sygHdpYaircA1sIvQU%2Bdc4FRsoJtZXVOD9GLqCIgNokkeKPQVhz3UdqyHC1pLfHaBt6OH3DLyJ1AHxs4eBpxHIq8d2f0usdy4aBdIBSSRj4cvJA1EqrDGf63HCmkth7IScgczgNeZuPZHKCjrOMjhHaqAFQGBAwk%2FcgfrwM6tWqzH9MAw6FdalAwepy0C6eRmMzdIZ%2B%2F9qc7%2FbLp9P8v%2Fyv%2Bzay7fO2bPqy51Abq924RtYj91dHW4ESZb9%2FFfu0J3SM7TvEu%2B87QeHkgif2OYV3dNlOl2yVi4tibGEmgbnoRWC1iRYEKoPo2%2FybPo7QXOVWGF9I7N53SYhSiIJvBJgh2lPvELD1YTi9Yf46oxuLlAhPd1v33QKRODwjerXI9acVqfDd%2FyWN4SJkSWjRH4B4gVfBmAWvpIZFzXCR%2FiAfWEEJDeZNXXQcayysAPO08fOgkHDMvO0%2FOPCn3LKkvzQXqm2r7mP21nmbidGbJbBZvwbVd2At02wHAFnV9cxumr1zV5BakX7Y02lX6rmUVvcKxxwmR1aB6hM64AzOAnR41zOr8JAGgReppyOb2dQHkQzLz1CdVh%2FfPC8s%2Fgwrd8ltanUwcROLGu39rYt62hgd9dmRKfNl5dRh%2BQ9W3O%2BdrCcIdw72MMulwM8GOqUBNwj4v0js3bZC2bScrD5m5GVmRHB2XoV5V3MM2%2BBEcCx0DsWcKDDbUDuAQrdAkQEp4beDYw6rdgcVoUe8zGgQXs1Z0LmYjqXpPTNmIfweihkePXMh%2FdFWKdffUEjpWy4%2B4BhdoUeFa%2F33DSN8niJ25clGGgW0cgyxBVPSGtlHDLPoIkjM1GQrmvqFRgE6iIt0fOkIURzn%2FDd%2Ffu%2BRjM9ZPuPySR%2BG&X-Amz-Signature=28bb358062671aa146beb323e0f540bc88fdefd0115a198404e1c931ff2c5782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MUVXR2O%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBumxvMf3i1hso9AqbMCatwOSusE0N3nqPMNWrRNw2u8AiEAo5Jm1cva5B%2FfP896u5zFtZrV5fPe%2B%2BZ8EIRTWbVQELcqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOA4qTc2sygHdpYaircA1sIvQU%2Bdc4FRsoJtZXVOD9GLqCIgNokkeKPQVhz3UdqyHC1pLfHaBt6OH3DLyJ1AHxs4eBpxHIq8d2f0usdy4aBdIBSSRj4cvJA1EqrDGf63HCmkth7IScgczgNeZuPZHKCjrOMjhHaqAFQGBAwk%2FcgfrwM6tWqzH9MAw6FdalAwepy0C6eRmMzdIZ%2B%2F9qc7%2FbLp9P8v%2Fyv%2Bzay7fO2bPqy51Abq924RtYj91dHW4ESZb9%2FFfu0J3SM7TvEu%2B87QeHkgif2OYV3dNlOl2yVi4tibGEmgbnoRWC1iRYEKoPo2%2FybPo7QXOVWGF9I7N53SYhSiIJvBJgh2lPvELD1YTi9Yf46oxuLlAhPd1v33QKRODwjerXI9acVqfDd%2FyWN4SJkSWjRH4B4gVfBmAWvpIZFzXCR%2FiAfWEEJDeZNXXQcayysAPO08fOgkHDMvO0%2FOPCn3LKkvzQXqm2r7mP21nmbidGbJbBZvwbVd2At02wHAFnV9cxumr1zV5BakX7Y02lX6rmUVvcKxxwmR1aB6hM64AzOAnR41zOr8JAGgReppyOb2dQHkQzLz1CdVh%2FfPC8s%2Fgwrd8ltanUwcROLGu39rYt62hgd9dmRKfNl5dRh%2BQ9W3O%2BdrCcIdw72MMulwM8GOqUBNwj4v0js3bZC2bScrD5m5GVmRHB2XoV5V3MM2%2BBEcCx0DsWcKDDbUDuAQrdAkQEp4beDYw6rdgcVoUe8zGgQXs1Z0LmYjqXpPTNmIfweihkePXMh%2FdFWKdffUEjpWy4%2B4BhdoUeFa%2F33DSN8niJ25clGGgW0cgyxBVPSGtlHDLPoIkjM1GQrmvqFRgE6iIt0fOkIURzn%2FDd%2Ffu%2BRjM9ZPuPySR%2BG&X-Amz-Signature=66bae823987811513003557708f43cbc087f1d930b4d4b710cb4ccd133d5e4ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSIDC75N%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDr2hiNtki8UwA7Rx6cvHOmQB%2BAus4PdydGdh%2FJRDnKOgIhAOY2Vwpoktb%2F4KxMjD3HsvKKyyVIGsbvFFaNwN0qWhH8KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzmc5ZAyBcEnJkYp%2BUq3AMQYiZ5K%2FOs6XuxXyuIUKKLZJbK900HyqzAMXJhEvaELE2RxiPNnB8wfCHpExsVVvoN1xKIP51%2B%2Fr1vfCT0HzroPFnmVH73%2FRrmlryk2JX0BDCbyyTpPdPfKCr8P6ex1p%2B4niDQRziU1TdvwsdeQgSl%2FcaLIGE7g7U8L89pbkRnL%2FmihHTwvXeYJmUav284H475%2BIBRdOIRjWUpG6prSR%2BO1PTmj04eHqomnGWQQPBd4WwJ7XMGvefDa62pWV2fhCHII9yFQb0l3Uyhhrg2MB77WnJwRMMZbtrwLGMEBrtPTnfXzq5WJzo2W2WzO2w1gE8h%2F%2F2QzhBQ1IqsTwlAkga3Bm%2B%2BBQ38c%2F5b8gQ15gAUpzO2PVh5d5q7wgC4Jz1%2Fxj6uu2cJ4ehnZAv3pbZX7QjyzK8PJ%2FVopOv5pSnhgB%2FBM%2BSdYONKLfeO%2BxA4xuNQPMqYiYjyWgrrUUYq4j1yergtHGElZRLFKfvv585Cs1bq1uaCcQ1uk2KGBitRoVsw2Ss%2F1ZStZSo2dvusk17V50Zw%2F2NDI9m1jDlDWtudYpSXm%2Fp1ppGCxs%2FOJRzNkPwx3dnyqrs3dKY4xRtvdrtDzETkZe7NTb0aqfeytjJiiwY6ugphES6eIqJIAkKCSjDPpcDPBjqkAQKo0v%2BFMB7iz%2F9rMpFzrTljl7Xx4qiV%2B%2Bx1YwVzmwbc816xZHKpEF09HeeFscwkDgOgx4w34eqKFxJkOjkN7Eon%2FFP8G4JbXIAgYaOjljkGO1qz7ZRu0gX2LczEq9eLZ0B1BKXcL9VkaFNWkQeVjzL%2F%2Bf3MN0vrVsNmNy5LYfbKmyNFtjPvAk955K7jxdxuX7PtOdj0O93yH%2BYQJNlsrVQRCDB3&X-Amz-Signature=eb8e171839f8e191f1bd2b6c84744c502cd4d8bac23411de2aea86a915de7f14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSIDC75N%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDr2hiNtki8UwA7Rx6cvHOmQB%2BAus4PdydGdh%2FJRDnKOgIhAOY2Vwpoktb%2F4KxMjD3HsvKKyyVIGsbvFFaNwN0qWhH8KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzmc5ZAyBcEnJkYp%2BUq3AMQYiZ5K%2FOs6XuxXyuIUKKLZJbK900HyqzAMXJhEvaELE2RxiPNnB8wfCHpExsVVvoN1xKIP51%2B%2Fr1vfCT0HzroPFnmVH73%2FRrmlryk2JX0BDCbyyTpPdPfKCr8P6ex1p%2B4niDQRziU1TdvwsdeQgSl%2FcaLIGE7g7U8L89pbkRnL%2FmihHTwvXeYJmUav284H475%2BIBRdOIRjWUpG6prSR%2BO1PTmj04eHqomnGWQQPBd4WwJ7XMGvefDa62pWV2fhCHII9yFQb0l3Uyhhrg2MB77WnJwRMMZbtrwLGMEBrtPTnfXzq5WJzo2W2WzO2w1gE8h%2F%2F2QzhBQ1IqsTwlAkga3Bm%2B%2BBQ38c%2F5b8gQ15gAUpzO2PVh5d5q7wgC4Jz1%2Fxj6uu2cJ4ehnZAv3pbZX7QjyzK8PJ%2FVopOv5pSnhgB%2FBM%2BSdYONKLfeO%2BxA4xuNQPMqYiYjyWgrrUUYq4j1yergtHGElZRLFKfvv585Cs1bq1uaCcQ1uk2KGBitRoVsw2Ss%2F1ZStZSo2dvusk17V50Zw%2F2NDI9m1jDlDWtudYpSXm%2Fp1ppGCxs%2FOJRzNkPwx3dnyqrs3dKY4xRtvdrtDzETkZe7NTb0aqfeytjJiiwY6ugphES6eIqJIAkKCSjDPpcDPBjqkAQKo0v%2BFMB7iz%2F9rMpFzrTljl7Xx4qiV%2B%2Bx1YwVzmwbc816xZHKpEF09HeeFscwkDgOgx4w34eqKFxJkOjkN7Eon%2FFP8G4JbXIAgYaOjljkGO1qz7ZRu0gX2LczEq9eLZ0B1BKXcL9VkaFNWkQeVjzL%2F%2Bf3MN0vrVsNmNy5LYfbKmyNFtjPvAk955K7jxdxuX7PtOdj0O93yH%2BYQJNlsrVQRCDB3&X-Amz-Signature=5d021a4e2f276ed2bc85fe4838a53cc50dd93d1f5b02389c7a999d531a6085b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDA3YQRC%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAYZnc9CulOPY%2FcIoNYIoLRYumNuB8PYMjqULp0%2BVND2AiEAldordY4W7odywSLYlCd%2FwvXIjPlWbN2aEt%2B4rat8DrsqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0VBvilyw0mfe1HhSrcA1tjG9G2UOnp6SwgKnZ8F5ZWTXr8MYwYmfwZRucIPD156qvMfsHvbfOJ3ObJrb%2FNQ1pt6vpmmgwhmPQq6Nqzhzyzzj4Mid%2BOufFmSlRvnv6tb47UxKPu%2FpOoGsgqGrqlLf5k49k8d3qMBmCl7A69KaqrbB3RlkzO155CgnL4dI2MglDGyxiceikEwrD6VBKbJNmt2lOLNThMJCaf8%2FmfMkxynIGAZhKSRg3t2vosfbgKQqYCpbaBpAjENnn3Y7z%2ByKdoosOMlpmIBJDb3Aj9CNPXHuKkoqe1qSqa46Hgoc6dgG%2FEgk4rnllbqTZVfYWLK8RXpeG268o9MjhwXlkihrlhu8DrVPPZsex2goKQQzZQcdtNc1HHWm6urgYbf2S5CZ52COL3t0Lna8rNKg6jwF3cU2ICRtPAGnXh%2BfKD7v68vA6YGBbaaP91aLnN%2Fqe73s7W4rWJiXRPY3NNYWcAKVOKeFgpaxT6c2xVdvi%2Btouye7ZNtsLo%2Fw3%2BuZmBR0JcdjU10auSbY%2FqIyW07zn5KuOBQjZaTi3gkgZe3U37yGE6nlEb45QvbBen0oVt3oL9k%2BylYkFrKZhjcjFEoxzom3WTmLIAOODyJ5gEYn76mWnoRwGS8OtQpoX5RJozMKejwM8GOqUBvtb324glfI0%2BmMzxXwPzSIKB9M6z%2Bzd%2FzYIaHo5GL8jP6aWM8DLpay5NgJ3SAFKkU9BIfyawf54Xo5j2KEJvvQKiKcDKUVJdAO7pt%2FwvO5eltClwDKHL9Yqp3z%2BSlu8NfxsulfJKdPuia3vjFuFQRbX5hEPkzNIG0WielwrqOrUZXlRp%2BdY%2Bgw211U1wMZziFqCUZLsTD3JKV%2FXKTaWrezjjQcXD&X-Amz-Signature=8914cc4fd536a0b8cf6f670567c52e691757a60dc283b147c3e52663a74fd4f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

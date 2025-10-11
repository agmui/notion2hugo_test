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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSKRBQES%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFHIZE8GuxpXlIq4hnIqJpvs%2BR0Mx1DOwNyn6dIZFlfCAiAj4RebFjcWjM4S8ZQ6roneZzRthOJEuedYBGVBA8cxmSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FufJHVyiFIfCBdiGKtwDMp0vDyRFOFPrkcrtq3lGyn3rBfWLOMAiywjP2IkxtdNSxrj6F2xa0OQCezy0O%2B4zY%2FVlxTkTa31BEAEzUoWtxdhOQ1SrggdY2T80w5yKD5uINeOa9D8LqnU6HFnWTlilbzyYqw1wYUnOyX8QKik8zFNFfDWep9K44nEqBCatACHz0MbAcDqQ%2B7hPny5LWPs8SH3w4fiMkzdAl1d%2BsO2omw5pDPHnSt%2BBD3yCtBvqcSURZi5JWa%2B2e3dxR3M5%2BP3F5UorK3etsBNvQFCaAQ%2BTkXd0Z%2BYgBfSnUFF7eHNb5HRDh1puMCN1BR5oB4EPovq7Zn60v%2Fq1fRpCSk%2BLQ%2Bc6q5OuJU9qg2Ibb5EVLEO4rpiBQQlABM4f%2BmImzTLXp1QB%2BtO%2BiiQAFfRr0IUsHfu11bgUbtsQlWx1lPQ45w34%2BZBBCw3q82CRMGM0Zhuhkkr1gvDt%2FGz0j%2Fbblfl8sWe1H3d9wFj7DSF8OYxmADhyykirCniimRM0gX7hnU%2B8yGsQgkgv7llU9p8lMh8JSw4mFH0rI42CpdCiObDTD2dNd4eeoTcJuRnX7eOkHLdQLsuclqyYIZSZDi1fqs4RHQC5GWnucBrGXZQmO2NPFOv0UDfEiI5ISSef8G1iVEQwsNemxwY6pgF0UWd37M5KkcSMpX0ugL3ksSOWWpwario26NjVaj5wsD2c9K%2B3i2oA4%2BIHagJDwcLu%2B7t88ztX3D3R4Lm75MAq0UXWmkAr2M6gG7ECrqDECPS3cKVRRoaX43wdcgQ22v%2FQ0fP3pk5YIH36iOGpfBHnwADgjDk3r5sjMBewPD5RsO62SXy43mpIxkNMI7g%2FNLiHuN%2FrIrelmpphB3zPuGYSCXe4S8wo&X-Amz-Signature=b41569655df53d4fc4aee22110f9282d6deb7fc0ed3243d0f31b51b053e026fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNMJGPJ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDc%2B7csepj3UQf8yGHq%2BPtl70O1SlPOoHRgOAYunsmptgIgODAp%2BkOSaV6aYO2jRFKwaKwy%2FEhMO95fyAc9ETRNDOEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6VSWO6gMLbt4McOyrcA3YUJTqg19xWVoiP3FiY2hhabMOVrHUOzO0AacRrpZgPi4dPm6pZReZMLlflpnCA5l1mCWMbdXkHpBPAQyteLr0pUTYIfTNomKr54M9IC58j67scDCrDR7tKADYwmmYL0mWOMPxFc%2Bz1m6DVcwtpbQ%2Bi62IJAFFw363xSRMIwi0p5cHb4nT4XF6pLVbkTNCu%2FWohNVdDZQtyiwOdgWyS1%2BVyhzH18%2B3Qk5%2Bx9pgj7s4f2LsaIDSe%2BiGyGu02erRhhIOw%2FHU1MGYUy9ecR36yRSjni8OLnmjeRVAEuTQ9kN8FhLBiV5ibrHWl1iqJzmwRJUZv3y6AzU5RGB88pauQJUllhgHTh2HvaG2iBNavaeH2mfARq4r2%2B4fZa7d6gfVDE%2FxTHYk6ubq9iKXmNjgHuQSjGGYVoyceykGKsG%2BUqsTLGj6%2FZIxENw60SFm4KNw2i6arhZLrtlwVVYa09jHcU0mgMB1OFFFjoAqXCxXdqvupd2U%2F8A1k6IslVr1o0assG64Ue5%2FLGZLTAT4kcdnPt1IyVImvNyc5kxkCyqhh9sRIZ%2FEIW0dKq78j9BmJ5cxxFyUBppC8RHqu7PQGt%2F2o8gnrdKhGE8l3jJYGTcYosOMNyKzQ%2FSzRTlvP2XgIMJXYpscGOqUBMJx%2BJ7LmxfUiB6QzhsWBhrK4pBomRCrG6%2B5hlHq%2BckCdUgh1mkRtfp%2FRx6XRXZyP5HNZPm26UpaNLZcFGZ02T8AGzSycUT75IekRsdSAbvo1U2Z2%2BaZ3EVJnqvC33g74DkQ4T1vYz%2BZ0h8UT847QtlOyOrSDN4BZz7PJ4UP9vnqCX9tph5MLN1ZBrq9fibfwDPJnENnOJRFUsKkJYX452FD3j2ie&X-Amz-Signature=b01bdfa8637c002e7528def8f88bbb5bee9af7922b66888fe591921837923086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYUI2BUS%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDzGs%2B1m4ROQpMQ7H82bDDjlWvfwTj3fvLUwCwydTDg%2BwIhALqJOqwPMQKNpjHfbo79jZFbbDr6PCI7lWvM8dpmFpTnKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZZS21z3r9JNbsy18q3ANerQ2QPh3qmEa2OuM4Qhmi3%2FXwg6CfHIJCnlVJccfh1RCPAOzUgF%2BSXBqD%2BqjxpT3x65N3v%2FCsoqWn928cuYbJta7qAbyYFhp3HhLQliuVe86nLhhhQwgcy7FLAet%2BnoN2NcX1Lu6xTCA9mSThs8cLV8L6lk8%2FNR2JOjpXoGTPTFsWZ5fbTqiZ6%2BN1OmSURvG0KJ96irM3oJA4cNLz3p6%2BELxwXhqbundPtLDIO4itIVDYVX8OfE0MyFVePFg6BLHIk5C6VTMEEDonAG3YBCOe2wE6IoI3bdP69%2Fo8cwQINQkps1aDdkEQgA7rL5QtvqpCmZbMfmiEnzA8kMapeRfd0zd86TqOm9cSB3y4d%2FsBQMiUyM0hZ0PYhq0JtFwYUzWaL0csTl9CtJFrIOsM1RqJk8u%2BWbwigXJsa80zN7XwgBVzZyAr9cNJcRUO8R5M29WcYt8cTRZfuFdjDTmgIaG%2F4NKnZ9ZSm6lU%2F62rStZtwZwf%2BSoaGi9YsPeHgW0rg4eHfknMkOzQ2ksF1fKh4k19M2SNl2w3iL%2B2%2BBNFZibP%2Bul%2Fajc%2Ftty42kVZ9gZzgqsybTmng4kLLIDkKEkBmcbrpsLyjJHfq4Ilvz9eofnkDaLkxCVQzd2ymdWrVzCw16bHBjqkATbrnTHCONgHsv49gn5qGyoyIoSusoGN5PHmn45XACnOcgQtddDAEFDk9XCqG5%2FY%2BzSxb1e1H3CA8mcrCvzQo8q87%2B6u0ZXjNWaBPJz6%2BYZs2YQ1XjK9qJghM9oZIFkHBz5k%2BzLFp1JVVlOz552ToKiZuiu%2BD%2BlmJYuGuxfxjcwSf%2FJ%2FkTyHioJhwxBOxP6ccSLfdYsFL5S9AEGrR5oS8E7c1ZOL&X-Amz-Signature=a5f8bc347af1d58cea1039f60c0f2c3ed500cef310e7dd9e5006a60e5f555a22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYUI2BUS%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDzGs%2B1m4ROQpMQ7H82bDDjlWvfwTj3fvLUwCwydTDg%2BwIhALqJOqwPMQKNpjHfbo79jZFbbDr6PCI7lWvM8dpmFpTnKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZZS21z3r9JNbsy18q3ANerQ2QPh3qmEa2OuM4Qhmi3%2FXwg6CfHIJCnlVJccfh1RCPAOzUgF%2BSXBqD%2BqjxpT3x65N3v%2FCsoqWn928cuYbJta7qAbyYFhp3HhLQliuVe86nLhhhQwgcy7FLAet%2BnoN2NcX1Lu6xTCA9mSThs8cLV8L6lk8%2FNR2JOjpXoGTPTFsWZ5fbTqiZ6%2BN1OmSURvG0KJ96irM3oJA4cNLz3p6%2BELxwXhqbundPtLDIO4itIVDYVX8OfE0MyFVePFg6BLHIk5C6VTMEEDonAG3YBCOe2wE6IoI3bdP69%2Fo8cwQINQkps1aDdkEQgA7rL5QtvqpCmZbMfmiEnzA8kMapeRfd0zd86TqOm9cSB3y4d%2FsBQMiUyM0hZ0PYhq0JtFwYUzWaL0csTl9CtJFrIOsM1RqJk8u%2BWbwigXJsa80zN7XwgBVzZyAr9cNJcRUO8R5M29WcYt8cTRZfuFdjDTmgIaG%2F4NKnZ9ZSm6lU%2F62rStZtwZwf%2BSoaGi9YsPeHgW0rg4eHfknMkOzQ2ksF1fKh4k19M2SNl2w3iL%2B2%2BBNFZibP%2Bul%2Fajc%2Ftty42kVZ9gZzgqsybTmng4kLLIDkKEkBmcbrpsLyjJHfq4Ilvz9eofnkDaLkxCVQzd2ymdWrVzCw16bHBjqkATbrnTHCONgHsv49gn5qGyoyIoSusoGN5PHmn45XACnOcgQtddDAEFDk9XCqG5%2FY%2BzSxb1e1H3CA8mcrCvzQo8q87%2B6u0ZXjNWaBPJz6%2BYZs2YQ1XjK9qJghM9oZIFkHBz5k%2BzLFp1JVVlOz552ToKiZuiu%2BD%2BlmJYuGuxfxjcwSf%2FJ%2FkTyHioJhwxBOxP6ccSLfdYsFL5S9AEGrR5oS8E7c1ZOL&X-Amz-Signature=9fb072c16e0544f8a5a28bd1309e184f6cac0bc33ee60021828d24ad61390d75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNMJGPJ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDc%2B7csepj3UQf8yGHq%2BPtl70O1SlPOoHRgOAYunsmptgIgODAp%2BkOSaV6aYO2jRFKwaKwy%2FEhMO95fyAc9ETRNDOEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6VSWO6gMLbt4McOyrcA3YUJTqg19xWVoiP3FiY2hhabMOVrHUOzO0AacRrpZgPi4dPm6pZReZMLlflpnCA5l1mCWMbdXkHpBPAQyteLr0pUTYIfTNomKr54M9IC58j67scDCrDR7tKADYwmmYL0mWOMPxFc%2Bz1m6DVcwtpbQ%2Bi62IJAFFw363xSRMIwi0p5cHb4nT4XF6pLVbkTNCu%2FWohNVdDZQtyiwOdgWyS1%2BVyhzH18%2B3Qk5%2Bx9pgj7s4f2LsaIDSe%2BiGyGu02erRhhIOw%2FHU1MGYUy9ecR36yRSjni8OLnmjeRVAEuTQ9kN8FhLBiV5ibrHWl1iqJzmwRJUZv3y6AzU5RGB88pauQJUllhgHTh2HvaG2iBNavaeH2mfARq4r2%2B4fZa7d6gfVDE%2FxTHYk6ubq9iKXmNjgHuQSjGGYVoyceykGKsG%2BUqsTLGj6%2FZIxENw60SFm4KNw2i6arhZLrtlwVVYa09jHcU0mgMB1OFFFjoAqXCxXdqvupd2U%2F8A1k6IslVr1o0assG64Ue5%2FLGZLTAT4kcdnPt1IyVImvNyc5kxkCyqhh9sRIZ%2FEIW0dKq78j9BmJ5cxxFyUBppC8RHqu7PQGt%2F2o8gnrdKhGE8l3jJYGTcYosOMNyKzQ%2FSzRTlvP2XgIMJXYpscGOqUBMJx%2BJ7LmxfUiB6QzhsWBhrK4pBomRCrG6%2B5hlHq%2BckCdUgh1mkRtfp%2FRx6XRXZyP5HNZPm26UpaNLZcFGZ02T8AGzSycUT75IekRsdSAbvo1U2Z2%2BaZ3EVJnqvC33g74DkQ4T1vYz%2BZ0h8UT847QtlOyOrSDN4BZz7PJ4UP9vnqCX9tph5MLN1ZBrq9fibfwDPJnENnOJRFUsKkJYX452FD3j2ie&X-Amz-Signature=c4414dae483b52dbf8e9e1d707bd7106e80fd5ddadc6ccbcd066f817bfbd71ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNMJGPJ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDc%2B7csepj3UQf8yGHq%2BPtl70O1SlPOoHRgOAYunsmptgIgODAp%2BkOSaV6aYO2jRFKwaKwy%2FEhMO95fyAc9ETRNDOEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6VSWO6gMLbt4McOyrcA3YUJTqg19xWVoiP3FiY2hhabMOVrHUOzO0AacRrpZgPi4dPm6pZReZMLlflpnCA5l1mCWMbdXkHpBPAQyteLr0pUTYIfTNomKr54M9IC58j67scDCrDR7tKADYwmmYL0mWOMPxFc%2Bz1m6DVcwtpbQ%2Bi62IJAFFw363xSRMIwi0p5cHb4nT4XF6pLVbkTNCu%2FWohNVdDZQtyiwOdgWyS1%2BVyhzH18%2B3Qk5%2Bx9pgj7s4f2LsaIDSe%2BiGyGu02erRhhIOw%2FHU1MGYUy9ecR36yRSjni8OLnmjeRVAEuTQ9kN8FhLBiV5ibrHWl1iqJzmwRJUZv3y6AzU5RGB88pauQJUllhgHTh2HvaG2iBNavaeH2mfARq4r2%2B4fZa7d6gfVDE%2FxTHYk6ubq9iKXmNjgHuQSjGGYVoyceykGKsG%2BUqsTLGj6%2FZIxENw60SFm4KNw2i6arhZLrtlwVVYa09jHcU0mgMB1OFFFjoAqXCxXdqvupd2U%2F8A1k6IslVr1o0assG64Ue5%2FLGZLTAT4kcdnPt1IyVImvNyc5kxkCyqhh9sRIZ%2FEIW0dKq78j9BmJ5cxxFyUBppC8RHqu7PQGt%2F2o8gnrdKhGE8l3jJYGTcYosOMNyKzQ%2FSzRTlvP2XgIMJXYpscGOqUBMJx%2BJ7LmxfUiB6QzhsWBhrK4pBomRCrG6%2B5hlHq%2BckCdUgh1mkRtfp%2FRx6XRXZyP5HNZPm26UpaNLZcFGZ02T8AGzSycUT75IekRsdSAbvo1U2Z2%2BaZ3EVJnqvC33g74DkQ4T1vYz%2BZ0h8UT847QtlOyOrSDN4BZz7PJ4UP9vnqCX9tph5MLN1ZBrq9fibfwDPJnENnOJRFUsKkJYX452FD3j2ie&X-Amz-Signature=8527a1d4cade964e7384407138ce4cfe1da1206518329d6bbeca690f171d1c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QICNYTAY%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIH2YVOa%2Bv3IG5JpZQilosO7qvwxa9EqyEBEEaQfjK4EQAiAXrAtHhJ1931wROpIgX4NgKaJidkuPddFaR5moNTlfjCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9VSPtQMxlDgZM%2Bt9KtwD8JD%2BiX12ODzI3KcV7KxvcW75YO1ijdTi3wAIFA6s6LiGMUJ76iPj8Jc%2B3f%2FX32iqr7ZT58adFuI5yok84GL%2FDSIoSYyUxixU%2BCYI8K3sbHGCkP%2FgOG8jCu3xO%2FdlA7bqY7yEbjinRhEyYzB6utT%2BB72PQTsx5%2B3rx6XEpA3T8M%2B9nJsdqph3UXFLseP0CTw%2FphOjoQ41zd38LxF%2BA3PNwM86xEAboIeZYumHvSwLnhgPkZdiKIfMYz3UfoLdNfgN9v%2BjvilX41SydbrnDCzGoOXsdqH8xW7B0CbPD%2FxDa8HY67qG1QuW7un5YBFFrSZftNML0dGxbE3mtbZOTO%2BPhrvX8UDgnmWARlExFKxQd7Tiu0pv9tDavIA%2F6AohEXplNrSZ37QjZnmZANhs2tLuV8MQK%2BUzeGcxZ0ItNUzUBFMEM63Lcpfq%2FLb0zVkJ61WmJ%2Bj1uJ9MKp3Tw0NLsXH4NQ51ldBML7nlSHsIOTFa9OOVHkfQcwuhlijVZnKZYXrnzs3W0fhMAvNZ04YyfAxmqwH0qeSZePiTnAGudMU%2FPKpYoHMr6mJNZ%2F0wcJSZv1sUxYUwZeviIJ1UGlgTE2oMq5depfj6LlAEqE4VhHFWnFc2MRNFbvpraXA3NKQw1demxwY6pgH2wxLYlUVyYFE%2FkIc%2BWJSyorlm%2F3oQuDWxMq%2BEtlakvWVRRINio0XwaPUGGOGQQZNu7WXig0wArIDEb3LwnOId%2BcQ7%2Fpq3HCYYQ46KUqJqAB%2FN%2F0IZ2AcxidPawCLcjtPzqkn2b3oeMbhPrv2ioXeLr0pIikVMh51%2FqMWHq6BLc1TwOXaLa6B42cC9U7lGnboZRsat6pOnxQpknxPmxClfxcWwaYi7&X-Amz-Signature=5ec47b4ba6f71895ff9e8887058d87bc662be4a405409d93e1fb1249d470c787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

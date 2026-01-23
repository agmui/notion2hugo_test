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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J4O67ND%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIBnzDtp7zdox45402%2F%2BxiL%2FwyT4ABGS6g0xb58UHffv1AiEA95ahzQBCuIufErxkImR5f%2B7ADzd4zPKmOVkg45GEWMUqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhRk4RExb%2Fz8ccXCSrcA5TUlq%2Ft4pwcBA3wmHlsdRYzIPqdcBs3IWsicQJTRSZl5DvBnX3uYaBawqCZL%2BgjWH0Qz3vT1uJ%2F4A6ir3aXYK98ao40r%2BmSGMovfng83gOt3g9jqNW6xHnxdpZvhTzsUYvHAHwiKnF5VIssgorgT4AmNv97w1QuFBiYBdAgTsLNlsgxGf99yd7EGH0PHhcd8lThBV1KVYuVWoCzbjlLK08CPEOOn25%2BSM1Rsevchx3d%2B%2BfJaK6ewzUdvggdiqUS4zm%2FugqEYBpKepeEfdLeqITtz6%2BOFaVNoj6TiZ21EPKerrF%2BNn16VylV4c5jvI8sFHNC6LcdaXdC20F%2FQbU7Tslvi7i2fLbXV2WZYBILvpw7TvoVhIZy2TOQ1Do973LhaiaH8QjLBBdyA9ZpI3Au%2FlMeqXKqkiHvceaGe2On5xoA3AXmHTHgACQ4jqoXzflklWi5MEM8TyliaVwN9Lj9xjwn460S0oj21OF5li9KWuUk2Wq0xVdpjUv9crdXX%2BMR2kLz9JS2OqFBOBb2Znnrf1N81eHTvghR%2Fat%2B%2FgJFSq3Wc2xAGjMd8Vo6C1kiFJznW1EvBOgQVG4K4B3ORs%2FafaRXpPcvnJOhbS7xE4g3THRiorv0ODRv5lxhM0RaMM%2BKy8sGOqUByxw95NP8c0QBE0JO8%2FGv4gXhdfgMStZMX4PllYLcaothIKhRVNFZPMlKv33gY2cy%2F9e7oE59g3NAw5%2FPv3SffYK91jZlRjV1UytWIWdX9dH2braP4hkxEwGBWvflsHvBgh03WnEJotE2UCZTgkqyo1TvMprxs8IJfddGyb6lGPhli9k76oKHgAGMSLZ25y9nja4vnA0NBgCrc4%2B3wrXphECoc1rs&X-Amz-Signature=ac4ea0ce1e6f61256554e508f65b47df0ab669363a7f1735a5502398178d58ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BJB3AWW%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIEd086K9ooTuvRDDA8g2c9bFU3KGuzxYx%2FwL%2F6JsumY7AiAG8VrZhI%2F6%2F53dcbqj5fMI%2FYVUZoRIYKrkSk4eMOh8%2FyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhVk4YgpUuqAIwVLKKtwD1C2LqskZ3TLb54W%2FQRlrwXn9OYScXf7hWI1kyzWY%2BIhI67WQPGihxzlBNl46iB9QZ5WjYEVlsbHQCXlUZdUL96CXaz6nuj5qbgjjEwMvzriaMLoATjRN3IENjUlbotpl60FSGtFmDjUso6Ajw7iKnHyKTOtpa%2Fy2OH944lPKTFkrLcguc50U6b5FlESudoO4i5jy%2Frn43fTomqdEZ46a4Jk3qV63I5iFb1DKD7VWhpFaJUaYnwx95lN5g4eDXSOMJfi49Cfr5RblfZQ3uHU8rBU8W16ppyGynick0bw7IUWY07dvHX9X6POs5jUOFeicgWglXxO3ASbEAnTtr6B031xtuoKqo6zfZFHjiOKebHbL8MZICCQeE002ivSYDXWjr2ZB7D5rC%2Bxrv%2BnCAtdXFGamRZ18CQ3K7t6iTdDfR8m218ZI32o0NID31%2FflFkCdTZvEKJi3rm%2BBGWxuweDjJIjJXMAJDyJBgZu1LLo9SM5cnEBVJikAnlD53Kre8Tl65JxquLbT88shXKCZefUHKuDIVwiWrmb%2BOfAPcSCm05ohan3ktBnNW6cqP6w%2FeuQZpwGCd6FgPHR2XaMu0nd962fKlwsvQAxwYF70ZdnSZu3hqTtRwslpE9TSjpkwlIvLywY6pgGL3wgVVNS7MMnn6d0smFXqI1XwXG8VuJL0guOoqA%2FtWjxYlq2miELnf7VZr9fFQZ26xISCQDf4WDTKnagTUI7NW%2BnqQcw5a%2FkCZ%2BIGjFO5hxPjBEFhU1d2duRomUwWQSTSetj26spBJNbi0orU6nJVXWBSGwUo06YG4gzjYeNRZf9Eb1r0QF8D%2BLhO5KRuJZ4pQXsbDPZVbbl787LZcEloLQcJaNau&X-Amz-Signature=72d3f0a0c87632ba18b2a2f8a0153150c99b8ac3e38ae9f5c8427776ca152e5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCSX3T25%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCDmsjAoIemetUXSiy1KdDPhPWq1GwHZvMOn889Qo0o3QIgB3fFoMSj1VrmIjicR5WjjX8UtGReq8U3GUP1PnTBWuwqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNy1GHgm8ZQ29cRWCyrcA4F9rPhMf8YtT6kN718EloQVme%2FCHTxWtqf3O3LAioSp%2FnYQkBxbCfM9iBvAY8irKLtD2yEk%2FSPv1mmb1MM%2FAh12dPeyPrjuKzuf%2BpOOTfWYPbcYUToWtRbWWI%2BbSS6%2Br26%2BqGEUuMgXJD0zid5dqdcD2YyEByWtulW0e34rV6BjZpNpvluzTt%2FVDMd3HK5Kz6KVVvDXJTj9u6CpILTTDCtsKkVGSMKhgyRMiUoHm8E8g5X13EuTWJhIdNoupeEFCgD2x%2FRvhOkN9IUKE7Rdwxgm29pnIP7d360Z7xzJJSTqESBxBSTaAVi1J0KGKCWJ4umaM%2Fpay7oHwxPnO%2F2WuBWUgDgkeLIU7xyM8Qgtnva4w7ydCa11UqpgR0PIdBimR3g%2F2fRSfAjHOs%2F6yGGE3LxHmWIlZM4VPj4x0whmE04MKRa7bzLNUJj1v60dgjwOEfv%2FPN5yqpElYAY3FqWY6FieGFE58S%2FRhQFGQx5i3jMnWlzZacPG2%2By6tbOZwMkTPGJ2ti5Pdv5AX6aeKyvS%2FuQ9BQlKZZuV%2FInvyIGS%2BONndrWm%2FKKpljm7fgVBHa86xNdY7l2ysMzFY6AQkNncCeyix5affJJug4jsu0h%2FQbAj4c1A%2FHLjj%2BpqamgyMPWKy8sGOqUBwHBZ8YrARcPsEL6rLkJKoXvY1AYVwF%2FEXIcRDTQzToB9wHNsu1lbdusl5NhsmyN8XbgFX3Qdd3wfr3jcUfiTXVBTPTbV0w%2F5pRxJHiyQF6aP5D3XEpK7ERm20IuqVJGHUhWavWPiHKS1%2BLxJZwSX94gh8TqT21TphnVz11wVt0BobqAAfHkLT%2FUR0rx6mCEE7VV77wQsDwYra91zQkn7zmDwrmkA&X-Amz-Signature=374d31710b6effda42493751c21242121a3af1fb7bc5e6512ce1d92fbf851f6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCSX3T25%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCDmsjAoIemetUXSiy1KdDPhPWq1GwHZvMOn889Qo0o3QIgB3fFoMSj1VrmIjicR5WjjX8UtGReq8U3GUP1PnTBWuwqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNy1GHgm8ZQ29cRWCyrcA4F9rPhMf8YtT6kN718EloQVme%2FCHTxWtqf3O3LAioSp%2FnYQkBxbCfM9iBvAY8irKLtD2yEk%2FSPv1mmb1MM%2FAh12dPeyPrjuKzuf%2BpOOTfWYPbcYUToWtRbWWI%2BbSS6%2Br26%2BqGEUuMgXJD0zid5dqdcD2YyEByWtulW0e34rV6BjZpNpvluzTt%2FVDMd3HK5Kz6KVVvDXJTj9u6CpILTTDCtsKkVGSMKhgyRMiUoHm8E8g5X13EuTWJhIdNoupeEFCgD2x%2FRvhOkN9IUKE7Rdwxgm29pnIP7d360Z7xzJJSTqESBxBSTaAVi1J0KGKCWJ4umaM%2Fpay7oHwxPnO%2F2WuBWUgDgkeLIU7xyM8Qgtnva4w7ydCa11UqpgR0PIdBimR3g%2F2fRSfAjHOs%2F6yGGE3LxHmWIlZM4VPj4x0whmE04MKRa7bzLNUJj1v60dgjwOEfv%2FPN5yqpElYAY3FqWY6FieGFE58S%2FRhQFGQx5i3jMnWlzZacPG2%2By6tbOZwMkTPGJ2ti5Pdv5AX6aeKyvS%2FuQ9BQlKZZuV%2FInvyIGS%2BONndrWm%2FKKpljm7fgVBHa86xNdY7l2ysMzFY6AQkNncCeyix5affJJug4jsu0h%2FQbAj4c1A%2FHLjj%2BpqamgyMPWKy8sGOqUBwHBZ8YrARcPsEL6rLkJKoXvY1AYVwF%2FEXIcRDTQzToB9wHNsu1lbdusl5NhsmyN8XbgFX3Qdd3wfr3jcUfiTXVBTPTbV0w%2F5pRxJHiyQF6aP5D3XEpK7ERm20IuqVJGHUhWavWPiHKS1%2BLxJZwSX94gh8TqT21TphnVz11wVt0BobqAAfHkLT%2FUR0rx6mCEE7VV77wQsDwYra91zQkn7zmDwrmkA&X-Amz-Signature=f15827b6480aab141071432369b9feb5fb0e38086270d2cd97d4c36cc6e6938f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BJB3AWW%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIEd086K9ooTuvRDDA8g2c9bFU3KGuzxYx%2FwL%2F6JsumY7AiAG8VrZhI%2F6%2F53dcbqj5fMI%2FYVUZoRIYKrkSk4eMOh8%2FyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhVk4YgpUuqAIwVLKKtwD1C2LqskZ3TLb54W%2FQRlrwXn9OYScXf7hWI1kyzWY%2BIhI67WQPGihxzlBNl46iB9QZ5WjYEVlsbHQCXlUZdUL96CXaz6nuj5qbgjjEwMvzriaMLoATjRN3IENjUlbotpl60FSGtFmDjUso6Ajw7iKnHyKTOtpa%2Fy2OH944lPKTFkrLcguc50U6b5FlESudoO4i5jy%2Frn43fTomqdEZ46a4Jk3qV63I5iFb1DKD7VWhpFaJUaYnwx95lN5g4eDXSOMJfi49Cfr5RblfZQ3uHU8rBU8W16ppyGynick0bw7IUWY07dvHX9X6POs5jUOFeicgWglXxO3ASbEAnTtr6B031xtuoKqo6zfZFHjiOKebHbL8MZICCQeE002ivSYDXWjr2ZB7D5rC%2Bxrv%2BnCAtdXFGamRZ18CQ3K7t6iTdDfR8m218ZI32o0NID31%2FflFkCdTZvEKJi3rm%2BBGWxuweDjJIjJXMAJDyJBgZu1LLo9SM5cnEBVJikAnlD53Kre8Tl65JxquLbT88shXKCZefUHKuDIVwiWrmb%2BOfAPcSCm05ohan3ktBnNW6cqP6w%2FeuQZpwGCd6FgPHR2XaMu0nd962fKlwsvQAxwYF70ZdnSZu3hqTtRwslpE9TSjpkwlIvLywY6pgGL3wgVVNS7MMnn6d0smFXqI1XwXG8VuJL0guOoqA%2FtWjxYlq2miELnf7VZr9fFQZ26xISCQDf4WDTKnagTUI7NW%2BnqQcw5a%2FkCZ%2BIGjFO5hxPjBEFhU1d2duRomUwWQSTSetj26spBJNbi0orU6nJVXWBSGwUo06YG4gzjYeNRZf9Eb1r0QF8D%2BLhO5KRuJZ4pQXsbDPZVbbl787LZcEloLQcJaNau&X-Amz-Signature=24d8730a4faa4df690672f4129e9ec551cad5577a00670f1fa9c79749b29a6cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BJB3AWW%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIEd086K9ooTuvRDDA8g2c9bFU3KGuzxYx%2FwL%2F6JsumY7AiAG8VrZhI%2F6%2F53dcbqj5fMI%2FYVUZoRIYKrkSk4eMOh8%2FyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhVk4YgpUuqAIwVLKKtwD1C2LqskZ3TLb54W%2FQRlrwXn9OYScXf7hWI1kyzWY%2BIhI67WQPGihxzlBNl46iB9QZ5WjYEVlsbHQCXlUZdUL96CXaz6nuj5qbgjjEwMvzriaMLoATjRN3IENjUlbotpl60FSGtFmDjUso6Ajw7iKnHyKTOtpa%2Fy2OH944lPKTFkrLcguc50U6b5FlESudoO4i5jy%2Frn43fTomqdEZ46a4Jk3qV63I5iFb1DKD7VWhpFaJUaYnwx95lN5g4eDXSOMJfi49Cfr5RblfZQ3uHU8rBU8W16ppyGynick0bw7IUWY07dvHX9X6POs5jUOFeicgWglXxO3ASbEAnTtr6B031xtuoKqo6zfZFHjiOKebHbL8MZICCQeE002ivSYDXWjr2ZB7D5rC%2Bxrv%2BnCAtdXFGamRZ18CQ3K7t6iTdDfR8m218ZI32o0NID31%2FflFkCdTZvEKJi3rm%2BBGWxuweDjJIjJXMAJDyJBgZu1LLo9SM5cnEBVJikAnlD53Kre8Tl65JxquLbT88shXKCZefUHKuDIVwiWrmb%2BOfAPcSCm05ohan3ktBnNW6cqP6w%2FeuQZpwGCd6FgPHR2XaMu0nd962fKlwsvQAxwYF70ZdnSZu3hqTtRwslpE9TSjpkwlIvLywY6pgGL3wgVVNS7MMnn6d0smFXqI1XwXG8VuJL0guOoqA%2FtWjxYlq2miELnf7VZr9fFQZ26xISCQDf4WDTKnagTUI7NW%2BnqQcw5a%2FkCZ%2BIGjFO5hxPjBEFhU1d2duRomUwWQSTSetj26spBJNbi0orU6nJVXWBSGwUo06YG4gzjYeNRZf9Eb1r0QF8D%2BLhO5KRuJZ4pQXsbDPZVbbl787LZcEloLQcJaNau&X-Amz-Signature=6ac8d540e0e7140d5430d7008ae92fe19daafc194eeb1568e4c2517a60533769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHV4ABS%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIB9opcUElAYwam%2Fy2VIxF3gWgpcXoZLmvaoSQPH8%2F3k0AiEAj491pDaR8S2hvmOxzb3cEN9ePTVfXoXft6zs9qe5%2B9wqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJVWBux6k0PhFnRACrcAwnGwYcaOSubOcHh3FZhQZFBRWmHsUsDbHbktNgGXrZEenz92FyMnQQJUHZV%2FouVdF9ABgWwFriknGOFxbTiaJ7PUAfskAYx5cCK6heY3meIcXoXyzrM4TGPc6vgl8buv3SjLdR0RqIH84raly5yCi8LaVL87Ss1nZid%2BrX%2Fgr9fi%2B%2FA4MwNQwFeYmaXC3zfDavB36%2F6xmh4jwnRa90MV0SdxrNy7F0IMEf8fYaOOHSPjuc00NODkgl0J613bl93v9Ed0yHNT43BoAPgLSUL8N8Qf9xjyjD3GV8SNPgCA4JSoMUCx5hhWCztL6qpjflYbA9vzOdHxzh8arbC6wGqGKmXc4SWg%2F%2Bj0uzSIXGrz6cMTD1iH7avdf3bHJioo41mlenzF9FFwHVjMOHBgQ%2BsjnzSpgli23MOSwHPXIZYI33xsk2HiO5gDAgMuCiJBusccB5wgKCUuvIf8NkpJFSxFHuVq%2FolXaI02oERK2PrdMy2ehd25Fj0uYH9X8etWswPJyjfyNBQtxF0lBhGLjIDOrPi8TVMSAdgk6ChTo1OSPwsOwByperGN4jaYetPlNM9uf9iXU4GbwxMsO7Up4sWsz5M5uBey7ony3RE0jqR6u8NfiDrr%2FzIKQ1w%2F0JrMMOKy8sGOqUBXpwK7H12JYfGfMfadJ4kHeNhmHLPxXxsXmJP1tJhHr3so8RMg9I%2B3GgQB3oqbJBefixIdmr2U9ZRmFtlVSfmLUaORqav%2FLuG%2FFSfKuh2q6W%2F6595EKREYw7Fqx%2BHViUbi0DGVsnYMxl%2BXW5wxUJ6DgeGlJZBKb8paDeu19SadlrbEqU9DJM7KMDwRVolmud0vptkz6g122JxO%2FGhOs%2F4WezJP4jD&X-Amz-Signature=caedcc868a5904aefdbefeeff2d81f4f8e7cf2ae89b59aa47689041d55cce353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

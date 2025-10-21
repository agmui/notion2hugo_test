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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJY2LFOM%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDYd79T039tU%2BKKiDtEXd0ikLmQi%2Bb7WMVgUb%2BgsBNqMAiEA5qqAieNDWQZ4tRbwdu%2F0QVmVZsBt3RmX2wSK6MjRB%2BwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJP0HhZl2cZqZs9WzCrcAxENerk8WRXPz63QGXtZPwiSMcqpO9VqKb4Zd4X%2FOYzoYoYFYyn85ZAG7YvuPY2T89Y%2BEte%2FFhtTp%2BZnsiEfB9N3nTs5zXrfiU9%2BkRbHsUXGbLuL02w0jrtsNruACMTViO0%2Ba9tHVaGRc88E8SxEI7VpON%2FNFbSBy88S0qtkuLIxPiwniNhHcTBkAY3d8EUgcdzB7feSBdqLNkRZdarwhND40lks%2FGyj6LsP7Kjyiu1D1%2BC2BugF1BLGxZ2zOzmESHVWD5ljd9KYGRihxV5vxwjtIGCBD1KpJ4zbkERd%2Fqy7eOs7wvgxMI140dJyCpX8eNAXXRWBoKoug8IJ%2BsNbQMk%2FEpv%2BfA7496MZIYQocrA52ve4KTsX1gOVXMF%2B3GUY7TDDAWRSGw%2B45%2FaJdwH94MbP3VTA9Fv%2BgRHc2lGYi%2BZLUIndTlcfrtodHwswxDEZ5LANVej4KxG2blk6DrPv28i1kWdz0at7P6HSbbP7UIZRsd7pJdUbTt%2BtfIneWPdxIX8fr7Z5OKX%2BrLkdZDz2p111r8rwaYxNIeRSY6s2UGuJBou1VE9KTwbRRNnb4zOLxcav%2F9hJsqe3tWmzopW5G7dGzCzeIVoqKDjabBR2JW6s%2F7TxfCO%2FNRSFWKHKMOGt28cGOqUBJIVr2sVxPJGUptQyc7un9lXh7XyBLW7UkVTzOYBoZAxnWTl4H%2FKlabijYMaZcQVCVoXuq2Ka%2BtNJFBmPt65o18j5I6U0Z2D%2ByPWvVqm7yF3lgjx2gqZlbmskmK4gIFtBQijAqEl7xEQK3B18p%2FoEoWbZKhRYGL%2F0HTW4V20cRfHiME8BIH8Y3o%2Bj%2FyFoj8XEFn0o2BRKZgFeDJ9W0aCvQnsCaNaY&X-Amz-Signature=4ec6aa0190f8494acad81a79b70eaaadbb14cea8645c8185a1aae1c3f3d01698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ACGDEL%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIH0XYZdXOPRkNLBkz87h0jtDFCR0Ce4cH6j%2F4zg4l%2BeZAiBqj70yqCHu6oH5zdVavA53%2FNtBdHWnAo9wSRO0qeaIQCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAb12a4TxqnaqDD31KtwD5dQ8%2Bx4XbQEgymOsY1VcVWbmLFB7NWNQ6o4gCajaD56UXDkal8kwpKTHqsOeJzxlW8MkJcvGNLWQkQO34Y3JblTPq5BnrKJTbo8T5kLF0U6NkwrvhhhtEH1qchAiEdX75Nzrz86sYKgt3DwQY89dmAYS6KZ%2FcGFlFZmL3h%2BrvE4glj71J4U87no9dKRQNWZKpKSk6kUt762zdWuMi9LpllEBWlwBDhE7%2FrUQ37hNS83zDipAo77H4ieezCG3FNKZONZtyYiF%2Fdb9SMVZBkR%2BX4m63V9MgIP6Vs4109g7V9XtefEeYCk5yvm%2FWl7Sv2qQKjYw664nndxSyMlfgk3y8O%2BS7FJNNh01SHMteLAaCUhblf%2BD29ZggQScWz0nQopA%2F8N6z2fgrvMJ0T3szD91tdQ7wYdpK7YbCNsoHc72PACN3WXxeKBXDms6nBEtnHypVM%2Fz%2F8590xpAlyA%2By9lW2yG34PewWe2paKebtNC7z1%2BgW6Ctf7cC6JJzIcqRolobdm0DjRDDo80sMQuVIzhz5rQM3YPFcOgliayqzkhLG4tVuBIjdbbCD53NCoCtK%2FyWnJBYNipEbtF6YGH2Y9KM8OWrh1UgJ5xsijA%2FLrWUPBxrfCYsTwqC2TI1CGsw8qzbxwY6pgH0IJem3%2FcDAVKKmbY3WhbOhKXTLeUO08It8UEBQc9Zti4LyGNp6tM42qp8WObZW8as2%2F3vGgttxMIkC2BhyJ5OwZMnb8BRarcQhvOhV3b9eMXqYj8Qd06DkSIVwP%2BBQsfANC6rqdv9lgIwTZQFv8WRm7U%2FHAxcKVHCdq6CBPovLSskrHlnGkhfVsCyyDqfqFdeUQQe2nZdhLzhqwvxQbi%2FlOnJwy%2B8&X-Amz-Signature=795b6599f6df7710d343aad3b2f2140e82d8596544f13bded47b8f5ab810a91e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KYZIBQZ%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIDHAXPlQsQfmZKmiwEFhWXWYtPnzdJlPoFNgN1fiSiQJAiB7cZTItRKpXrFj2ue1Fvj8pHUR8hII88kuztJtSO7AdCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJkIqdxU65HteOqthKtwDWmrt1qiGeLfNWN0z1oh%2BMg1RLBN5MOUxfC0OuOpRP2pz50gxuk28UusycPD1ouz4xtY%2B5ZJqX0WzuDiQPXgiXBRsnnr4f6fKeeGahpnxeDd3B5LhyvBhW%2BAniZb4qV4GMJOpsrMekLyoqQqMXDHz9KrP3jtmUC%2BBeTdMRTl1FX6evTaEn6Kt4VqamT4LNoNStsj2p1PWq1vURp7mup1zYw5n%2F8btYFt7NLD5uGfuqcpxIm2VPGXm9F2eIOtAByCoZSg7LGSu2FE%2FY0pmP26HTofxP%2FWTCTZRyUMbjagvcG6qFOpLTBHUoDAqspMYJ6zTBIkVgtnKoS0xEedkk87zQyxpRxczPD32CZn8s%2FErlGECB2bQ5URhmWoEEAsKhZF5MK91IEXpllZzUpYhQ5tjJQa4NnzXpiMFQqGiUC9BxQHc7PxOvpALy4KHEM%2F8TIbpl4bZarpbZtOeEf8h0fH%2B9ByYcyavhKT1x4BQRwODSSm%2B8brMXg25vcvk5b7gED2OtoqJA7gLVit03G0oRRjq7zl%2BiqDZPWrRXY9h3BW7nMmYDwh2xZyTNhNQo59eyRQpazuWwFwwASekX8WOp5Xhl3f%2F1d0JIV%2FPWsnEu2%2FBODTaiacMrU3qUZKEq%2FcwjKzbxwY6pgHz0anGXr%2BNPYkZ7xpUQ44SA8dSV4Aq2ebNDoUfoI%2FZ66Z1ulLqwZcNdGahkRryMZyn8s0NEyXD7oIe7sf%2FWkWXaAh3ak%2B%2FzPOQ99sSt5TXh3BlaSip2S595XPztugnbgpvvjnOWWnvgdIyIm2syOwbKyuNiXKaxD4nnBGm7%2FnnwkfyJnt6JRDgAdgA5tESIPdGwOfMskFr6QX%2Bm8lyC9sqBPv4BzoA&X-Amz-Signature=d1e9764f83ed83b7f754a0dc68a093fc77a03fee0291e6f81c24b9a9a081b74e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KYZIBQZ%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIDHAXPlQsQfmZKmiwEFhWXWYtPnzdJlPoFNgN1fiSiQJAiB7cZTItRKpXrFj2ue1Fvj8pHUR8hII88kuztJtSO7AdCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJkIqdxU65HteOqthKtwDWmrt1qiGeLfNWN0z1oh%2BMg1RLBN5MOUxfC0OuOpRP2pz50gxuk28UusycPD1ouz4xtY%2B5ZJqX0WzuDiQPXgiXBRsnnr4f6fKeeGahpnxeDd3B5LhyvBhW%2BAniZb4qV4GMJOpsrMekLyoqQqMXDHz9KrP3jtmUC%2BBeTdMRTl1FX6evTaEn6Kt4VqamT4LNoNStsj2p1PWq1vURp7mup1zYw5n%2F8btYFt7NLD5uGfuqcpxIm2VPGXm9F2eIOtAByCoZSg7LGSu2FE%2FY0pmP26HTofxP%2FWTCTZRyUMbjagvcG6qFOpLTBHUoDAqspMYJ6zTBIkVgtnKoS0xEedkk87zQyxpRxczPD32CZn8s%2FErlGECB2bQ5URhmWoEEAsKhZF5MK91IEXpllZzUpYhQ5tjJQa4NnzXpiMFQqGiUC9BxQHc7PxOvpALy4KHEM%2F8TIbpl4bZarpbZtOeEf8h0fH%2B9ByYcyavhKT1x4BQRwODSSm%2B8brMXg25vcvk5b7gED2OtoqJA7gLVit03G0oRRjq7zl%2BiqDZPWrRXY9h3BW7nMmYDwh2xZyTNhNQo59eyRQpazuWwFwwASekX8WOp5Xhl3f%2F1d0JIV%2FPWsnEu2%2FBODTaiacMrU3qUZKEq%2FcwjKzbxwY6pgHz0anGXr%2BNPYkZ7xpUQ44SA8dSV4Aq2ebNDoUfoI%2FZ66Z1ulLqwZcNdGahkRryMZyn8s0NEyXD7oIe7sf%2FWkWXaAh3ak%2B%2FzPOQ99sSt5TXh3BlaSip2S595XPztugnbgpvvjnOWWnvgdIyIm2syOwbKyuNiXKaxD4nnBGm7%2FnnwkfyJnt6JRDgAdgA5tESIPdGwOfMskFr6QX%2Bm8lyC9sqBPv4BzoA&X-Amz-Signature=d9b954b4b1f4efca553b705aefaf0a1f9b6a1963d37bdfea8e5aa7906e4f92bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ACGDEL%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIH0XYZdXOPRkNLBkz87h0jtDFCR0Ce4cH6j%2F4zg4l%2BeZAiBqj70yqCHu6oH5zdVavA53%2FNtBdHWnAo9wSRO0qeaIQCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAb12a4TxqnaqDD31KtwD5dQ8%2Bx4XbQEgymOsY1VcVWbmLFB7NWNQ6o4gCajaD56UXDkal8kwpKTHqsOeJzxlW8MkJcvGNLWQkQO34Y3JblTPq5BnrKJTbo8T5kLF0U6NkwrvhhhtEH1qchAiEdX75Nzrz86sYKgt3DwQY89dmAYS6KZ%2FcGFlFZmL3h%2BrvE4glj71J4U87no9dKRQNWZKpKSk6kUt762zdWuMi9LpllEBWlwBDhE7%2FrUQ37hNS83zDipAo77H4ieezCG3FNKZONZtyYiF%2Fdb9SMVZBkR%2BX4m63V9MgIP6Vs4109g7V9XtefEeYCk5yvm%2FWl7Sv2qQKjYw664nndxSyMlfgk3y8O%2BS7FJNNh01SHMteLAaCUhblf%2BD29ZggQScWz0nQopA%2F8N6z2fgrvMJ0T3szD91tdQ7wYdpK7YbCNsoHc72PACN3WXxeKBXDms6nBEtnHypVM%2Fz%2F8590xpAlyA%2By9lW2yG34PewWe2paKebtNC7z1%2BgW6Ctf7cC6JJzIcqRolobdm0DjRDDo80sMQuVIzhz5rQM3YPFcOgliayqzkhLG4tVuBIjdbbCD53NCoCtK%2FyWnJBYNipEbtF6YGH2Y9KM8OWrh1UgJ5xsijA%2FLrWUPBxrfCYsTwqC2TI1CGsw8qzbxwY6pgH0IJem3%2FcDAVKKmbY3WhbOhKXTLeUO08It8UEBQc9Zti4LyGNp6tM42qp8WObZW8as2%2F3vGgttxMIkC2BhyJ5OwZMnb8BRarcQhvOhV3b9eMXqYj8Qd06DkSIVwP%2BBQsfANC6rqdv9lgIwTZQFv8WRm7U%2FHAxcKVHCdq6CBPovLSskrHlnGkhfVsCyyDqfqFdeUQQe2nZdhLzhqwvxQbi%2FlOnJwy%2B8&X-Amz-Signature=35fa0e49699d747a29baf0fade0a1fe9759b9c42e6798d80cc25551fecc90687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ACGDEL%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIH0XYZdXOPRkNLBkz87h0jtDFCR0Ce4cH6j%2F4zg4l%2BeZAiBqj70yqCHu6oH5zdVavA53%2FNtBdHWnAo9wSRO0qeaIQCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAb12a4TxqnaqDD31KtwD5dQ8%2Bx4XbQEgymOsY1VcVWbmLFB7NWNQ6o4gCajaD56UXDkal8kwpKTHqsOeJzxlW8MkJcvGNLWQkQO34Y3JblTPq5BnrKJTbo8T5kLF0U6NkwrvhhhtEH1qchAiEdX75Nzrz86sYKgt3DwQY89dmAYS6KZ%2FcGFlFZmL3h%2BrvE4glj71J4U87no9dKRQNWZKpKSk6kUt762zdWuMi9LpllEBWlwBDhE7%2FrUQ37hNS83zDipAo77H4ieezCG3FNKZONZtyYiF%2Fdb9SMVZBkR%2BX4m63V9MgIP6Vs4109g7V9XtefEeYCk5yvm%2FWl7Sv2qQKjYw664nndxSyMlfgk3y8O%2BS7FJNNh01SHMteLAaCUhblf%2BD29ZggQScWz0nQopA%2F8N6z2fgrvMJ0T3szD91tdQ7wYdpK7YbCNsoHc72PACN3WXxeKBXDms6nBEtnHypVM%2Fz%2F8590xpAlyA%2By9lW2yG34PewWe2paKebtNC7z1%2BgW6Ctf7cC6JJzIcqRolobdm0DjRDDo80sMQuVIzhz5rQM3YPFcOgliayqzkhLG4tVuBIjdbbCD53NCoCtK%2FyWnJBYNipEbtF6YGH2Y9KM8OWrh1UgJ5xsijA%2FLrWUPBxrfCYsTwqC2TI1CGsw8qzbxwY6pgH0IJem3%2FcDAVKKmbY3WhbOhKXTLeUO08It8UEBQc9Zti4LyGNp6tM42qp8WObZW8as2%2F3vGgttxMIkC2BhyJ5OwZMnb8BRarcQhvOhV3b9eMXqYj8Qd06DkSIVwP%2BBQsfANC6rqdv9lgIwTZQFv8WRm7U%2FHAxcKVHCdq6CBPovLSskrHlnGkhfVsCyyDqfqFdeUQQe2nZdhLzhqwvxQbi%2FlOnJwy%2B8&X-Amz-Signature=385952d0f23438e46f4da1a5047452375cda215da44cf6ad1882fde07f5fbbdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SLFVLMD%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCCi55YFHOIKcawE7Ec%2Fc7pwyP6ZL1F3NVTNqEThAsy9QIgUBZNau70dbWYQyTS2PXu5UrjzhgCaYlxQADdgQmMriUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLi6WCZzUxUNOqCLKCrcA11vA19RVwdppX%2BEoI8gn1ubmK1cVElOfS9Y1TocwBFxyP2YgICKwox2rziJvVk6eOqAQlzQoFRtF3wis0QYmaAPsg0Gh1HN%2BdznswlZGYO4c9bGN30c7Q9vAyOoYU1025ImpdwHNgTRJTxfFxIcSHT8%2BVrjGK9472wS%2BPeeRLHrs%2FDDY5lS6avxHydhMCTqa6Wx3%2BlYvp1a%2Bl37tF7iGMVquwGm3Szxw3vfM0IXCTG1usTOr3W4NDy9F2IXXS1Kk1tu%2BphBq13UEFcyewgVjuv6rkCku2gbuOSRi1%2Bzh%2BjTEe8jW1g1j5H2o9n%2BZ8Wbgp8Dk3hVduR8h88OMMB%2BFlIj7ScZB4fgdii2%2Fk%2BGx8L3FI0GwJir4QVOp8SCnIVKW6PtzsaghzYJsZeFxCwF8X3luQnCVXzFT%2F8fpzdj9OrZ3mtYQFwfuLXtorXmF4H5zC5eOw%2Fw%2BjLZvWACNsfvLjmoKwbpGyRCvKsS8FEH9v%2F8X%2B%2FYWPbZONbBqz2fLkPbuWoBOFlY1qihmV5aSjx7VRv%2BsetkrJEqVu1qTL4prOcU9jCgbXRmWXnOpmweuZ2WsYDbft%2Be4oj5Itxo9PKLA3%2Bow7Xy3qSzWzocn%2B6WfaEn2phOOtDPy8g2eeI5MKCt28cGOqUByirQcafZoGe6CItSCwYNytzQAQRJavKx4G32ET%2BTGGEBCkfbD1F01W6EWSizRpgW6oA%2Bu16m2Ru8jeejzwgS2k4nX8p25ZL8RSP1ZZ1lJm4jvveTEn%2BWtdYzdWUuGf6lihoxEKT6ZltTCmAuVdIAu6EDyBW6Iyj2ZQI3Npp4Y4x8%2FbTRF8YfwH9SvyKmLxDi18OvTMle%2FdkLN%2FKml%2BICWYpGSPyW&X-Amz-Signature=1e6d5d6d6dc759785f32ca09731a011e3821f670b7b67852273fe17be3e04185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

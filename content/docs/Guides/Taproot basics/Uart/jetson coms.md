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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKEZTWYL%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbFa0ud2MrLxviQSK6vEX4Dx5ysgWshcVs2NxypKiAjwIgVb8%2FItXFRJaJGSS0ucv0I642S6FtDRCss6X8dZO3lRoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhGwwZD3qMuWJGDISrcAyupPykcHTZS1dRO46i9MgY%2BinOUDiNXpMe6k7u8Mghw3m3jwO4sIHKA2GVeqvCfEfaKe3YWzJhE7i2ZpceY2i1HgZI8%2Fll7LcNvRSVRF4cScIOuuM8d7Tu%2BnwhDwJ%2FHCcSK1JK1YkwsA1lFh8P7ksOnHHy9fEkf7upFK9pB27jWw5zgaju9OeXS%2FqwVcBxl5yrbFog2h1jc6NARtU0muWndT2bbgFSTawO9xfvXpYjaRJ0o1qSedDxj78bsPO7GjV3cXm1FrMHMhKd%2F5NaywCh4LntXOX5n8A5%2FUlTz7LrrUcTIUI0gUMeRDvNS%2FMQu5b8uDDAoplidbWv5fcdyTuGzG9EMPZEkp3drfZpLiR607b%2BS9xv8Jojo4pMXQZyhfIY245aCZi7HyFFIh6ywPp1YhoMnh4sdj1Kbl7mx6K17zI5CUi7%2Bk4oEfNt3T1Pv7fgyCAVm%2FOChT0NgVxMOmT6JJhSCf6sTDFGO5VAfgX75yNN3oxEdwQq9TDfCF26BsPTUqVr50L1iiVYo3erSpJu8nxXtZjBP2lqUXYc0XiXBsUs5yD%2BWSR7QYSzi%2FLy4l8dZ6LGUBuKvBt4j3nAgJaFW3fTlFre2kt0KcRuB5omrxf45pEcJi2rDdmvKMJaXtcgGOqUBiRUNMiZ95wkGtE%2B50OpG2pnrn7Z8tLytx91b4vIgM4V6gB8uuWWiUJD3OESxH8z0Ba25OyShi%2FMCBoVrqNV6u00gfOKjIgaYsNO54TMPrSM6OPiVlu712wMCs09fTYSWWHRUlurgmzdEWuCnjyBk2B%2BDQW4w28x6N1E%2FL5kJsWq4lOL7Qrn4t4MqSCp4BiMNs1jkDtUgl%2BjjDD0SPxB9DQld9RKj&X-Amz-Signature=436892f0174ed98ac151606068a488956caf68500fd98cf15c581ec5bf9ade81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UGJP2K6%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGqgm%2Bd8gE74EsZTA9RUbaGWZgLAaNnwj6sJHdw2BzzAiEAnJl8jF2xyzckpQqBLUF11y8%2BjsegP1H0ycM8dTRdvucqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH79k1wdvzz1TykYrCrcA8AIAvtxSBo5vqjGCD6RigIVaNnyZGY%2FpY%2BHW%2B1kMX8Y3g5x5DAlxg4RQXvz6qyMNcpb4QDIPBTuYplKo7V2JMNZtWhhJgCkBXVT5nc%2BNqq%2Fxia%2FRb9oiPrMcVrfz4pEV4b02cwxx9a210etGD36ndLcikqJNpwZsA3%2FpoPJCfnpjXWU7RDVkEYtPGvHUu6nA1wFhfbqNKfXZn8fd8y5ZVDUI%2BoH76pZr6p1VYT8skFAY%2FOvnZNjEMyxwNd%2BIXCPHbG90rUA7Rmxp2WVnmKQ97dsRGGxjCm1Q7%2BdSQ4zXXu2pD2LzAYozfJHiQQ2%2B%2Bbp9X4yAAbBl%2BatLJc61rBYcrJ1pSyhCN0tzuphc3bh1iChdrI0jfA0JBuO2D%2F14qV5CLbqcjQQcqp7XZcUDLrDjs6DET3odZRdb8%2FJgDj%2FgZrcE%2BgMfHCFjJRyeN%2BpvE31SjF2LgQBtRvJbI5gAXPvy5H%2FjOK6zKtVh63UbHHUW%2FvlcrGH6SwRbxt3%2BnXwc347MUGn9ITdxlS01gPV%2BgdZgVB4%2BCQawnMNYunETspg09qdlcrLcykxDb1e8Diu9gYGnOddvXPk07CQQ5zt05orp31g%2BGilPgKpy9d5mesJUA7L9lF%2BLsoba%2BNJZecfMKaWtcgGOqUB2%2FYbpHgx1xctWsRr8wc7gFvFWmF4YaMzgdiYPd%2F64mIwzh6nzvbmgo4vMy8sOFr1vh%2FOBTNKNXzGF%2BiwWwtiIAo01dTS3jxecFYPhNnva%2F1WaSWq%2BWZVvoS7elmPJLEU%2BvpqzGFgsMqpn1IuiVjvxonlLvHsZ75d%2FgGgUTVsWew9TtWsXm1L4p9Nb0o7R7Sicocl5GUsduyjjWGl%2BGTp9PkzWPUa&X-Amz-Signature=3427dda699695daf2499c130af3eaf437f5d9b7d9cb8518aff3e53e1d5675244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EMMPXVN%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN7MSVMm9xEoEFQTtqcGcJEWkNEjwiwEQAPg8AD4OpNgIgDcGAgnZ34kjWWhrUtXdv6aNRUVwGwzvzZ7NrlcN%2FnccqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHA%2B5Ip%2FADTUSEjlbCrcA7HyTdS72OXzglN%2BNGpQA7nfp%2BvFyAc01W%2BNsSZD5e03oJhnKZ5lAbkdHPZ1G%2Fw6hsCk4UdAs4OvZNNJIPsy8DOhre9BqGG%2FhC3ehrfKLOAxTBw4XuOWT9goegL3%2B36hVcVqvRS24yLia76EWyNNm0PXl6jJFwlikCZ1xzEy4VGXNa1AkM%2F61ULrBZGYjaUZHxwWqjWoD4USRzEURZBN5Oks5ZNSAKMvipd57Zlx9ZW3loDxdTdZ5JseIl1kDEwMRmuiIaiR7k0mGz1t9YvPF53Ykt%2BqnbBI5Hu%2FcsWOBlfDVrWTD5CKIs3t0%2FVMJlcAYW0zHTK7RkO5WoxfgOzNixl3qkDhLnaQ6OnTBmRHbPGyjtyMlYTFeCyGw8xdnzqQX3d85mYbarZY3OsU3CJYrKKwcjihcDBKugGkXr2RvMXYqI6ZaXX8%2FfqkYGlwU9%2FsOj0qehozFWvvcXR9QLVLV1WD2I3ndnctpQMXtE0yZs%2BXP3%2FGkNTOLgLT2adzMV6a%2FEUwbB7552UTlNYBu7Wq0b5q5uGiVzrQuFxsQBggGrUdZSB6dbKa2r3X6do3vExOPd1%2B58KG2gMF7nx5u%2Ft8cDL7xyGIkDxqtVtjlQglDStpjBKbFiSBP%2FVwoEgOMO2XtcgGOqUBO9e21386nhgLKk6Pqt%2FdsCt8YthOnGgKXW%2BT5Ji%2BF7Lhb0aHWKTeM8TQbKl4LiQSjq98BsUo8MhQR9XpTrmjx9JVjxTBlTMj8OSllt2A8tA6N1HHm1HKUQHeFM%2FCwVuNj5h57CAaUdIzFODuc91OpfQy7bHDJPUOhwL5%2ByO2hlyxac9UneAhDF%2BGP%2B%2BWYgyQZanoaIyiUN8GkN%2BmiLKWKAs8HaPp&X-Amz-Signature=956fb8114fece97eba81fbc23d591ed4a7f49d47646e6dca9febed458627a352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EMMPXVN%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN7MSVMm9xEoEFQTtqcGcJEWkNEjwiwEQAPg8AD4OpNgIgDcGAgnZ34kjWWhrUtXdv6aNRUVwGwzvzZ7NrlcN%2FnccqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHA%2B5Ip%2FADTUSEjlbCrcA7HyTdS72OXzglN%2BNGpQA7nfp%2BvFyAc01W%2BNsSZD5e03oJhnKZ5lAbkdHPZ1G%2Fw6hsCk4UdAs4OvZNNJIPsy8DOhre9BqGG%2FhC3ehrfKLOAxTBw4XuOWT9goegL3%2B36hVcVqvRS24yLia76EWyNNm0PXl6jJFwlikCZ1xzEy4VGXNa1AkM%2F61ULrBZGYjaUZHxwWqjWoD4USRzEURZBN5Oks5ZNSAKMvipd57Zlx9ZW3loDxdTdZ5JseIl1kDEwMRmuiIaiR7k0mGz1t9YvPF53Ykt%2BqnbBI5Hu%2FcsWOBlfDVrWTD5CKIs3t0%2FVMJlcAYW0zHTK7RkO5WoxfgOzNixl3qkDhLnaQ6OnTBmRHbPGyjtyMlYTFeCyGw8xdnzqQX3d85mYbarZY3OsU3CJYrKKwcjihcDBKugGkXr2RvMXYqI6ZaXX8%2FfqkYGlwU9%2FsOj0qehozFWvvcXR9QLVLV1WD2I3ndnctpQMXtE0yZs%2BXP3%2FGkNTOLgLT2adzMV6a%2FEUwbB7552UTlNYBu7Wq0b5q5uGiVzrQuFxsQBggGrUdZSB6dbKa2r3X6do3vExOPd1%2B58KG2gMF7nx5u%2Ft8cDL7xyGIkDxqtVtjlQglDStpjBKbFiSBP%2FVwoEgOMO2XtcgGOqUBO9e21386nhgLKk6Pqt%2FdsCt8YthOnGgKXW%2BT5Ji%2BF7Lhb0aHWKTeM8TQbKl4LiQSjq98BsUo8MhQR9XpTrmjx9JVjxTBlTMj8OSllt2A8tA6N1HHm1HKUQHeFM%2FCwVuNj5h57CAaUdIzFODuc91OpfQy7bHDJPUOhwL5%2ByO2hlyxac9UneAhDF%2BGP%2B%2BWYgyQZanoaIyiUN8GkN%2BmiLKWKAs8HaPp&X-Amz-Signature=1f2a4a34092eb6278afb882d3d2af104d4818a5c59d7a3c1001d1dfa6d763acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UGJP2K6%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGqgm%2Bd8gE74EsZTA9RUbaGWZgLAaNnwj6sJHdw2BzzAiEAnJl8jF2xyzckpQqBLUF11y8%2BjsegP1H0ycM8dTRdvucqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH79k1wdvzz1TykYrCrcA8AIAvtxSBo5vqjGCD6RigIVaNnyZGY%2FpY%2BHW%2B1kMX8Y3g5x5DAlxg4RQXvz6qyMNcpb4QDIPBTuYplKo7V2JMNZtWhhJgCkBXVT5nc%2BNqq%2Fxia%2FRb9oiPrMcVrfz4pEV4b02cwxx9a210etGD36ndLcikqJNpwZsA3%2FpoPJCfnpjXWU7RDVkEYtPGvHUu6nA1wFhfbqNKfXZn8fd8y5ZVDUI%2BoH76pZr6p1VYT8skFAY%2FOvnZNjEMyxwNd%2BIXCPHbG90rUA7Rmxp2WVnmKQ97dsRGGxjCm1Q7%2BdSQ4zXXu2pD2LzAYozfJHiQQ2%2B%2Bbp9X4yAAbBl%2BatLJc61rBYcrJ1pSyhCN0tzuphc3bh1iChdrI0jfA0JBuO2D%2F14qV5CLbqcjQQcqp7XZcUDLrDjs6DET3odZRdb8%2FJgDj%2FgZrcE%2BgMfHCFjJRyeN%2BpvE31SjF2LgQBtRvJbI5gAXPvy5H%2FjOK6zKtVh63UbHHUW%2FvlcrGH6SwRbxt3%2BnXwc347MUGn9ITdxlS01gPV%2BgdZgVB4%2BCQawnMNYunETspg09qdlcrLcykxDb1e8Diu9gYGnOddvXPk07CQQ5zt05orp31g%2BGilPgKpy9d5mesJUA7L9lF%2BLsoba%2BNJZecfMKaWtcgGOqUB2%2FYbpHgx1xctWsRr8wc7gFvFWmF4YaMzgdiYPd%2F64mIwzh6nzvbmgo4vMy8sOFr1vh%2FOBTNKNXzGF%2BiwWwtiIAo01dTS3jxecFYPhNnva%2F1WaSWq%2BWZVvoS7elmPJLEU%2BvpqzGFgsMqpn1IuiVjvxonlLvHsZ75d%2FgGgUTVsWew9TtWsXm1L4p9Nb0o7R7Sicocl5GUsduyjjWGl%2BGTp9PkzWPUa&X-Amz-Signature=1a061a4fe1973bd2bc39f3833ec19da444786f70e19eb5d2d4fcda5b1f119cf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UGJP2K6%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGqgm%2Bd8gE74EsZTA9RUbaGWZgLAaNnwj6sJHdw2BzzAiEAnJl8jF2xyzckpQqBLUF11y8%2BjsegP1H0ycM8dTRdvucqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH79k1wdvzz1TykYrCrcA8AIAvtxSBo5vqjGCD6RigIVaNnyZGY%2FpY%2BHW%2B1kMX8Y3g5x5DAlxg4RQXvz6qyMNcpb4QDIPBTuYplKo7V2JMNZtWhhJgCkBXVT5nc%2BNqq%2Fxia%2FRb9oiPrMcVrfz4pEV4b02cwxx9a210etGD36ndLcikqJNpwZsA3%2FpoPJCfnpjXWU7RDVkEYtPGvHUu6nA1wFhfbqNKfXZn8fd8y5ZVDUI%2BoH76pZr6p1VYT8skFAY%2FOvnZNjEMyxwNd%2BIXCPHbG90rUA7Rmxp2WVnmKQ97dsRGGxjCm1Q7%2BdSQ4zXXu2pD2LzAYozfJHiQQ2%2B%2Bbp9X4yAAbBl%2BatLJc61rBYcrJ1pSyhCN0tzuphc3bh1iChdrI0jfA0JBuO2D%2F14qV5CLbqcjQQcqp7XZcUDLrDjs6DET3odZRdb8%2FJgDj%2FgZrcE%2BgMfHCFjJRyeN%2BpvE31SjF2LgQBtRvJbI5gAXPvy5H%2FjOK6zKtVh63UbHHUW%2FvlcrGH6SwRbxt3%2BnXwc347MUGn9ITdxlS01gPV%2BgdZgVB4%2BCQawnMNYunETspg09qdlcrLcykxDb1e8Diu9gYGnOddvXPk07CQQ5zt05orp31g%2BGilPgKpy9d5mesJUA7L9lF%2BLsoba%2BNJZecfMKaWtcgGOqUB2%2FYbpHgx1xctWsRr8wc7gFvFWmF4YaMzgdiYPd%2F64mIwzh6nzvbmgo4vMy8sOFr1vh%2FOBTNKNXzGF%2BiwWwtiIAo01dTS3jxecFYPhNnva%2F1WaSWq%2BWZVvoS7elmPJLEU%2BvpqzGFgsMqpn1IuiVjvxonlLvHsZ75d%2FgGgUTVsWew9TtWsXm1L4p9Nb0o7R7Sicocl5GUsduyjjWGl%2BGTp9PkzWPUa&X-Amz-Signature=c14f332656d65ca1fa226bdd67ab61c646189f0659cbb2b600f11e154ac6285f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665U5YMTG%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrXbwkup%2F9CjDkrG5IzbOrXijoEvPGA68A0vsJojoSMAIgSq8wB9jHTwcpW5ElCbZI0zeKGi6XtDin0%2BlqnTJQ2AAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwcd7BqYfl32dGeYSrcA3F476p2VeQ5ok4cUEyBQZ8ztaiV650Ao8g6Yl%2BN6ALIkcuKFS8x4ney6dd%2FVd307lacElhmVLu0IMXSxc%2BAZ%2FTyHbrhv7CtLBfxm6%2BWhA4Dp8tPBxsEqxNmvNQpQHKsXzkmcyfASESycdRtjM6ZSSf6UqQ1ia2nQOaZvlOmI9QJYVmzHGTveBPtIifgvek9L7AgjwTHIZJDKKt21QcYszQQ5kn%2BNyBqk4AhSkbRIhQsze3AqbZYXFVLIKma779sY7jm4cjtC1JtJqQOu5wa5CXV7nsBPsjbcn%2FFB3g6KW5PP2aCQ4tYiZeAHsM07VJUb%2BQVIAElBC0RnNdnsC21fG13uFsATTB2BwSJVRpDqOsTy2jYwhw3IhoFyeSX1Bz117dTyP5tAUBdvSioFD0as4QmyKP%2BZAVBfftSgSn7RX4FWO3QHddtiujN3zAVjG3jt3UV%2BprSUobSILba0iLl96DnW8vSoLXdwUC%2Fx1pj8imQYv7HAUZ0jQnONpgoC0CRPpbSj%2BWWQdpZEezYHn4Uy4FIaVr4s0jmrU8c6Hvmypl7Mfe%2FUxenlhr9T2c3zW%2FGs07x5h7BroD0h1FAI935UzoGMyXYTTLQKZkpM60wVEt7mEsiSQHys7VlUCp5MJ%2BXtcgGOqUB39CcadjDSMR94T6wHqGHEqRZPDWvyg9bakkBSOBvEapXmeQrGJI4%2B89MKZI14St8DsARZaE262%2FFQtWhOXoHAwGAJWtt0vCknBBKXHrmqNi31ZTqlOpeDhHw%2B2lyjyFP4VZtTmeDZveLGsawsdrr4w05TJKDkUiJTHBX9o3m2BYEl3B2xgTfqSZEHo3fDDFo6leVMQOlCgjuGJPhDZXthQPjUU%2Bm&X-Amz-Signature=57016f859a110129c8e12b9e50bbe24835d7c101cb5e0a9645d9c2bf93fff987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

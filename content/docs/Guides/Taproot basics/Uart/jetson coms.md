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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLVZUEUL%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIEm7ivx3fVPgfK5jjFYd4hVTP%2FfoNFMHTuTh1IDTtMTBAiARJqtxgBq9gay9Oe3DJaF7czbn5bdIff4YGG7NjUx91CqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlTsHiO%2BckIvSZ%2FjKKtwDgkrcSD2ccA8Blo72lQrgyA2e0BIZ2qupN7HS3tl7Hte82OOChT1QGvV%2BsBitavXH3XRmZQuCGPlU28lfB3o5l8c41ehi6MbW4bo2RJ8Ayr1zaw%2BOvJxHCDsHsMaVRo78u10teLh2n7t%2FyFVlpH0RBrqZuCU7oL2EsCBgqyzAyxIRc2EoI9aiPga5VCR4e9ImQ4vBkLVuaBTMi%2Ba1LcwkYbV5QHZm%2FzLjWxp7I3%2FWaESgQVGd4epgz6CCgREfyz94KPxUL2N0tOZontUXW90xfPh2OJf2sNbqccXRujTB2MmMlfrtbXxiyZj3JZT7ET19WHRbzAPhAI0YPghVBhOZ3P0NREahnMKUmvTWYBlYGsNu0O%2FlSOqIeyF1P%2BjFGIblhFP36GRtkvKrBAz6hkzZqJdFjgxOKKBUnTL22ntl1631d6d0TmTCpgSnc3run%2BgpChzjZ4E8TdEPJzyC%2B3nSteaxxsRE9Lbp82UJKrQZzYM0V9B97te17T%2FSXB0LGRMD0dDOSRJHTISokNs%2F0GhLTZNHohiv%2FOX6CxlgYf88WNNzW%2Fk5apRTk7Tpe5C8Miz60%2FFz6H%2BMdCFtJp8MCxybH%2Bh2S4m97vuf3bjmc9At81WamJM%2BRmB772jPy7UwodXtyQY6pgFkRNyfGmQ5U7Hutc1XJt63WWPCV5SNudeeGpMX5ENBiKWNGPvHvgTAnBjK3Cug8LMOPLuJY0AlBzkj3n94l26YxVhoHwx2UTg7QuwTd676RdLAbF2g0cmn2Kl3TEt0VXBqNZ4xb%2FOXm8E4r4YrxZ4Mz5RJN1Ay9PpI9%2FoUP4G70uJzdT7QbO3kxUW7zO0z6QBNzW9%2FCCGTmodri7RmNM0%2BCIB0pclw&X-Amz-Signature=9fea4aa44230047ad88ba4c4a3b52129b077d53833ce1341c2ca67bc9f5e3887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTH4LSZV%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC%2FfVpq%2BvdJgQMSkCPi063UErTsh7GoZjYrlFrbF%2F1AYQIhAJbIK3Nw7wc3bCIf76m%2FCLgaJGYx4F63va0SMtHjoN0yKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCe2JpnQQ937t7dSIq3AMpt%2FR2oV4d4B%2F%2FNJuR2jif6JqXokHp0J7K3tWI1Y2u8sfZ3bOmAijBCQ3aJPdVb%2FxK4DN9Gp%2FtnMVvM1oPfSMFg%2FwJDATqZDOjpEQBnk1ajwolxkaDQEkVey9Ls5BPpe%2FYxzF2zpBbzI%2B3A4hefh2aJBxh25HrKjQNzD4u7xJxADDoTZd4%2BkzRqsrN12Y4NT7B%2F8FKF2JHE25g50T0xfT5%2FG%2BCrldtS5rEp6%2BS1eD3gdZMQQ7Tl1uM73w0n3HBlhoK5PNzWsTwEVaK6MRy2zojflsiTWCYsB4jYVMXtUb%2FvOi4K6tY3CwMYJd00iNwShnF6eAuiRHavxYUJb8UB3Fyui7iXhvX%2FFJkNkYk1fqHLSFF3Kjgw6fQs%2B35F4EGgyjO8vrFErgzqZYcUMoCwLmI09aTxzGYmwSSqL95dUSEl5D1LnJFJmzcKllwHrF%2BGvLSkG09QDcW6EVEcB9Lt1TQ8AGiQQeRn%2BMeEpD6flpXDmcxQxfSXn63IqYX5tfTdAhYxXKvyKNC2r4%2FbmA2FZxhFisxbkaI0GZwAJdE2%2BpCP3k2PMmsPuJdbIGqnu68%2Bw%2BxvKfoyw1ecTiLBAv1t%2FTsAJqyQSb1ze9dthGrS8OQYVSkn8S%2BEb7NeWrd9jDA1O3JBjqkAakN87eAY5M%2F68GOr%2FFdDEIPLWvL7mG6zkjmro2mUaFek%2BA%2BeK3T6PaMZGrCJ4pEq9bmARYFHE6IjeVZPHiYHPPqJ1DwP%2FRvZS4jxT%2Bwg2e%2Fg0iAs4sUzRqpCtx02fIjn%2Fly8UucBuFO8OxVmscbrisKGGVTl6vQvJVs3H%2BL2NJUPzPGII0CHqY9nFlhCJnkK9SpKzOhso%2B4Kq9M3KzQvXX1FrV2&X-Amz-Signature=2270a02caba71bafee18aa5ab99824d2c08aa861782c04633bb1e551bcb5fa89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NO2MH2E%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHDJOGiSSiML%2FVfwVXGYm8QMXbPyzdvV8Loqr%2FXDTMAHAiEA7NukoNMhtuXYVfTXEoDUYactewmgHdvnvx3Rd6M29CwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTm%2Bb1AHdOeBoUwiircA2dNOgfRDPnraxDiXb7Oa2Ci5VDfENx1D0hyIJjIbLOJVMMJ8vVDxJBQ%2BLK3zI%2BvdP%2B4dT%2BY%2FeeXLV1PebU6U4ZwIQ1YEpouVfGkaQHljzKN6Ek0PNh329wKCZlU5%2Flm6hQteIYTbG7IazterpvJbT3RKJMS%2F2a1TNx3PfkkM%2FIpbMUSe%2F4oSI%2BCEmjWASb%2BehHfJMj8l8rJ3OGTTbgf3oNOFeOjFh1AVswfyDN6oBg3kSu7lFIVGDC8rWrMcBizmDys76g%2F2ExuRrizimD%2Fo7zmbl5MsBr7JLrfafhBJHECHqCwafxfG0ZST8AhmWUthdLT5CdtmDMw4ICmT9tFqlp0xkS17ffFs4ZalzLw0xqOjRG3pAkNGjcVKldaG1EqofkLPzwOdGeP0bOJc%2B9J5EA6pGMc4keDHPy8cwXbwviNiGgU5gnyQ6Lrv5db6X%2FEnOrHkzeYc4Q2KiNp%2Fs%2BV5zwF4ESAAN%2F44LXA%2BAOUAmO%2FLkCAtB4Kx17A46mxSLSJqYMvhQuY0yfDlDiEwAcDeYpUtyZ07Ce4B3kOBS3XUy4QtC0YuHZsFhOW7aa3Gg1DcbzCVfgfTdhJcGopgRvWGLBMON7cRRbfMd%2FIAcFxey%2F%2BiYKIfxBAYGbW37n4MPvU7ckGOqUBFtq0lOxtSDyqoRsHnvcMwsu8q4NUcRXbao2IM5ruGIteyeJRqpXQ59bx%2F7On8Vdz8LhfRFnYLm8zaweCJF2WbcjtLj%2FVhkCl8wIbwMgVC155txUPg%2BgWAuQto%2BiF%2BdDs57MwW6kuBJAiDiX1GgS6ngdMhjLbKd2PmL9HAcUSXoesdpHoU7q9PVoGdibRozVovHUoqQ85%2BgFifXyCG8IVjzDpybLZ&X-Amz-Signature=330117c52f278d9854792baccc6c4850a5f131db052e8ec3244cb2be5e9a3536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NO2MH2E%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHDJOGiSSiML%2FVfwVXGYm8QMXbPyzdvV8Loqr%2FXDTMAHAiEA7NukoNMhtuXYVfTXEoDUYactewmgHdvnvx3Rd6M29CwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTm%2Bb1AHdOeBoUwiircA2dNOgfRDPnraxDiXb7Oa2Ci5VDfENx1D0hyIJjIbLOJVMMJ8vVDxJBQ%2BLK3zI%2BvdP%2B4dT%2BY%2FeeXLV1PebU6U4ZwIQ1YEpouVfGkaQHljzKN6Ek0PNh329wKCZlU5%2Flm6hQteIYTbG7IazterpvJbT3RKJMS%2F2a1TNx3PfkkM%2FIpbMUSe%2F4oSI%2BCEmjWASb%2BehHfJMj8l8rJ3OGTTbgf3oNOFeOjFh1AVswfyDN6oBg3kSu7lFIVGDC8rWrMcBizmDys76g%2F2ExuRrizimD%2Fo7zmbl5MsBr7JLrfafhBJHECHqCwafxfG0ZST8AhmWUthdLT5CdtmDMw4ICmT9tFqlp0xkS17ffFs4ZalzLw0xqOjRG3pAkNGjcVKldaG1EqofkLPzwOdGeP0bOJc%2B9J5EA6pGMc4keDHPy8cwXbwviNiGgU5gnyQ6Lrv5db6X%2FEnOrHkzeYc4Q2KiNp%2Fs%2BV5zwF4ESAAN%2F44LXA%2BAOUAmO%2FLkCAtB4Kx17A46mxSLSJqYMvhQuY0yfDlDiEwAcDeYpUtyZ07Ce4B3kOBS3XUy4QtC0YuHZsFhOW7aa3Gg1DcbzCVfgfTdhJcGopgRvWGLBMON7cRRbfMd%2FIAcFxey%2F%2BiYKIfxBAYGbW37n4MPvU7ckGOqUBFtq0lOxtSDyqoRsHnvcMwsu8q4NUcRXbao2IM5ruGIteyeJRqpXQ59bx%2F7On8Vdz8LhfRFnYLm8zaweCJF2WbcjtLj%2FVhkCl8wIbwMgVC155txUPg%2BgWAuQto%2BiF%2BdDs57MwW6kuBJAiDiX1GgS6ngdMhjLbKd2PmL9HAcUSXoesdpHoU7q9PVoGdibRozVovHUoqQ85%2BgFifXyCG8IVjzDpybLZ&X-Amz-Signature=bbf58b5c712a6e61d87d8fade6cabd65efeff56a20b98cede633bafbc761d754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTH4LSZV%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC%2FfVpq%2BvdJgQMSkCPi063UErTsh7GoZjYrlFrbF%2F1AYQIhAJbIK3Nw7wc3bCIf76m%2FCLgaJGYx4F63va0SMtHjoN0yKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCe2JpnQQ937t7dSIq3AMpt%2FR2oV4d4B%2F%2FNJuR2jif6JqXokHp0J7K3tWI1Y2u8sfZ3bOmAijBCQ3aJPdVb%2FxK4DN9Gp%2FtnMVvM1oPfSMFg%2FwJDATqZDOjpEQBnk1ajwolxkaDQEkVey9Ls5BPpe%2FYxzF2zpBbzI%2B3A4hefh2aJBxh25HrKjQNzD4u7xJxADDoTZd4%2BkzRqsrN12Y4NT7B%2F8FKF2JHE25g50T0xfT5%2FG%2BCrldtS5rEp6%2BS1eD3gdZMQQ7Tl1uM73w0n3HBlhoK5PNzWsTwEVaK6MRy2zojflsiTWCYsB4jYVMXtUb%2FvOi4K6tY3CwMYJd00iNwShnF6eAuiRHavxYUJb8UB3Fyui7iXhvX%2FFJkNkYk1fqHLSFF3Kjgw6fQs%2B35F4EGgyjO8vrFErgzqZYcUMoCwLmI09aTxzGYmwSSqL95dUSEl5D1LnJFJmzcKllwHrF%2BGvLSkG09QDcW6EVEcB9Lt1TQ8AGiQQeRn%2BMeEpD6flpXDmcxQxfSXn63IqYX5tfTdAhYxXKvyKNC2r4%2FbmA2FZxhFisxbkaI0GZwAJdE2%2BpCP3k2PMmsPuJdbIGqnu68%2Bw%2BxvKfoyw1ecTiLBAv1t%2FTsAJqyQSb1ze9dthGrS8OQYVSkn8S%2BEb7NeWrd9jDA1O3JBjqkAakN87eAY5M%2F68GOr%2FFdDEIPLWvL7mG6zkjmro2mUaFek%2BA%2BeK3T6PaMZGrCJ4pEq9bmARYFHE6IjeVZPHiYHPPqJ1DwP%2FRvZS4jxT%2Bwg2e%2Fg0iAs4sUzRqpCtx02fIjn%2Fly8UucBuFO8OxVmscbrisKGGVTl6vQvJVs3H%2BL2NJUPzPGII0CHqY9nFlhCJnkK9SpKzOhso%2B4Kq9M3KzQvXX1FrV2&X-Amz-Signature=781ea0489e5eecb6cc8c3370e14c7424d407d0b5429fbeb7187fc7eebbfc8cf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTH4LSZV%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC%2FfVpq%2BvdJgQMSkCPi063UErTsh7GoZjYrlFrbF%2F1AYQIhAJbIK3Nw7wc3bCIf76m%2FCLgaJGYx4F63va0SMtHjoN0yKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCe2JpnQQ937t7dSIq3AMpt%2FR2oV4d4B%2F%2FNJuR2jif6JqXokHp0J7K3tWI1Y2u8sfZ3bOmAijBCQ3aJPdVb%2FxK4DN9Gp%2FtnMVvM1oPfSMFg%2FwJDATqZDOjpEQBnk1ajwolxkaDQEkVey9Ls5BPpe%2FYxzF2zpBbzI%2B3A4hefh2aJBxh25HrKjQNzD4u7xJxADDoTZd4%2BkzRqsrN12Y4NT7B%2F8FKF2JHE25g50T0xfT5%2FG%2BCrldtS5rEp6%2BS1eD3gdZMQQ7Tl1uM73w0n3HBlhoK5PNzWsTwEVaK6MRy2zojflsiTWCYsB4jYVMXtUb%2FvOi4K6tY3CwMYJd00iNwShnF6eAuiRHavxYUJb8UB3Fyui7iXhvX%2FFJkNkYk1fqHLSFF3Kjgw6fQs%2B35F4EGgyjO8vrFErgzqZYcUMoCwLmI09aTxzGYmwSSqL95dUSEl5D1LnJFJmzcKllwHrF%2BGvLSkG09QDcW6EVEcB9Lt1TQ8AGiQQeRn%2BMeEpD6flpXDmcxQxfSXn63IqYX5tfTdAhYxXKvyKNC2r4%2FbmA2FZxhFisxbkaI0GZwAJdE2%2BpCP3k2PMmsPuJdbIGqnu68%2Bw%2BxvKfoyw1ecTiLBAv1t%2FTsAJqyQSb1ze9dthGrS8OQYVSkn8S%2BEb7NeWrd9jDA1O3JBjqkAakN87eAY5M%2F68GOr%2FFdDEIPLWvL7mG6zkjmro2mUaFek%2BA%2BeK3T6PaMZGrCJ4pEq9bmARYFHE6IjeVZPHiYHPPqJ1DwP%2FRvZS4jxT%2Bwg2e%2Fg0iAs4sUzRqpCtx02fIjn%2Fly8UucBuFO8OxVmscbrisKGGVTl6vQvJVs3H%2BL2NJUPzPGII0CHqY9nFlhCJnkK9SpKzOhso%2B4Kq9M3KzQvXX1FrV2&X-Amz-Signature=213871f6e914f19adebeba0a431743440f20c0dbe72a45dbd111547dfb412716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WHVRUXI%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDwX6dsf9XxV2V4irE1NX3%2F2DvnFMZZn78i0k6mf6UB3AiAvkrwY6rhilVXGqz24v6LQVc8KwamDq6dnwgMYGOyC%2BSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMefpYb%2BuwIBg%2BB8m%2FKtwDFOP%2F3w1B5HRE0y4Gm2UthWzwNqAahJEGeBuDMpGr1SmvvFdoZLJLXmLnb%2BU4EJPMzuVYp%2Bd5xZgyzWEhxORIJ2qS4aNP%2Buc32zGX1SkUhvavHIFHJnL0ol8b6PBELMHbeG8ECBdbTyKBMem9MlgCk73zbSm5LumSRWp%2FkZ7%2BJGv6um5OyhXLKOyQTzYDSFRCjErjer%2F82k%2Fdnu%2F3Uybvx1EjqGx3oCvUDKQa%2BsiHnDL95NbMPgGyC39EKE%2FlI%2Bzc%2FDOSL%2Be3%2F1GuIT1qha0v0p6bKVtTlxJv93vfPJp7op3ikBCnvP%2BXmzODj5ZYEp%2FM5qDp52L0HrPk6KZlTtuIlUyHC58mNJdCuypMO%2BrXZPw%2BwQnngcI6zly5rQrBuCgO7cjoPGhIE3eL7bnqtiHFxLjwrDivN0JYZWNPMnNSeY%2BvU%2B1XVVlbnikXJG6G85SxPYVgiCbr%2Bot%2BiIrzBaz46Ff%2FMcYjowmM%2BZXAukFc4%2BnlUnvDDiaiQkxeqXZ0JbVACMopp0ssOxXHdwfVJPdYIkMefrMooTfcWy%2BORMeF0JwfZO03SNORBkt3iEow2tOwr2Skp5z5ATewBNHgjnjENUdxJvIbz1%2BsnTDCvgb6l5gdNaB6lUJnmYdP5skwg9XtyQY6pgHywAdITMfvWPGndf9dr8v3N3b1HaV73yhrJjo2RgRH0oFk34EMu2VD7KhRmmmequ1FV65Pf%2FVQDG1hSX1Dj%2BSwsIwennnljw0F7MWftn7WY31srYTX8vYRrubAqrBECwocqUDVw58Gv4ZcHVV3n3VRHZ2JQ18pJ03UqC5yqy55ke%2FjKyTYNzM6lsGbMj3vxmAhsLtCIiO1rHhqWywa5B3WtVTchOfo&X-Amz-Signature=cf5cf51f0da5103c92394a607e42d24ebe63982b6cb34a8f9f52143ea8918d1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

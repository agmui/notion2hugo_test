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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY3LCKVX%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqzo70gsQsHT8c0icoog6hL7lckTiUID%2B4r9krCpOOyAiAYLqEK8p5%2BJHXaWqjyz%2BpcUK%2BAALuPL3Yza0aVdqN8uyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMuG3y9C1odxeeTtSGKtwDoAduCqxpEDf1XkRB%2BypD9cEl7oG6RQ%2BP66Q3Y6jylTUc6Hwvmw63o%2B2tND42CteV95xQ7n5iA9ba1RW%2BegkfFXS7k%2FPAom6kb9fSETzWFpA9hyPQxEfdTzH9vTSwM%2BeCe4ILjtF18OtRIfpARc8C83PXiO%2BZe6voHrXao3uY6qdi3N5nF5o46YoiwuZFMV46b1yqajnsGYD2o%2B5nqXlOz3ywBONcUFrrjHN5ZeSlsz4GSUS%2FdNr3emuL4gYRnioYHMzx5KuyMo%2BAnAEELf7vjpZ5BGVNlA%2FsFswXuZ%2BliyBWlMri%2BUN%2BcMvthdRL8f5pvi9ZpouGTFB0X1gL1n16QixntZp1uc9THrW39RPKGUHyE2MXLwgpDTCuj5PjBPsEK4p4cLN7kklh3glxZ5C7rhu9JDSHGc%2BuYHjqp9ZqXuIknNplHpHMEmcDn0RzwWNDNKqZt70RXJnvuSItLoknsh2cY2xVaJC6%2BaNMFLDB0e5q3hNMOrAlfTtus%2B%2FXA2vEdw91ClejDxHhP9buHQU15s%2F28NGO0EQXLj8xTMd42g85cmzi%2BlUCpaJJv130QZ9KkOvMNsvcVNJzWgiFLV4tDRgOWl4YABpe0NeOe9NC6hgUl8ZyGg1vOq9%2BXNAwq%2BqfzAY6pgFHqtpuUqHXmD7msiv%2BRLzRZawN7aLKAm%2FLfAjOk%2BFihKzBz35LUflR%2BUCJxU5b7bwK8lMQdBiXcu7KEpSZuV6uPgsOvCK%2BYEzCir1YrKWkt834RBWyYVcBx6ieTcHIlerUJrW7q47Ly7FMpdOjwkfeQ3iJ5D%2Fz2QEFbqUI8MT2BKRtKaCA1Io%2FCmsD6Tlk4%2BuyiDQ%2B3ZK03oUArxV7KVWLj4hCjxwl&X-Amz-Signature=ff9b27a258dd9c05603e00abd818d3d3b6c4feaea1c818812ecd15a1683dd400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUPJZEAF%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgm6LjiLjMtEpHE3ihnkv%2Bsbc%2BL1tLwZ21Bi3jhph9pAiBk8dECvaGBcrOhduYH4TAhDpdPEVcLhG9Cmo6hJkKZUir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMtAlnIpdwTwweCFE8KtwDuDO0OgGte95qm8WmuuGajrjb9VuD6eWIfGBLXZsVbTC7o6JyclRxSi8mfBXC0AycJL8ACJg3x4qesg5DuYcf91OoVpJpi28ObVedyL8H%2B%2BTvV%2FNYneaaBqohqDRcKzu6bQKZDahF2GkEJWY0O%2Bp8US7JiV4VYjXAnYlsHNegbLvU1NLlsfAWaiHxYTBaged5Km8ituwD4BEjdGNS5gC%2B%2FvqpmXqfBo00SWxJqo9erTJM8ecaxxf90EGnMFvRWVhR0AcdMLwmuLzBKod7t1Mlx%2B48nVaiy241iXNIL9V2gwzY33qRCZyw%2FGgo8VBxbJWL2eWHO1i0I8RfI9wKnSwWOaN9i73FCuHui9p6MWZDqTwbPPT1L4MNK4AjkJ7fz%2Ff0%2BEQjgPf5XB5AqMhc1CkgB0rA0TM6nuUXWBryWTGi0c4vMx6CzA7kidk5%2BwMeifzcUYUdlBrJ%2FIO8wIEXl4ZeSK2jw0SfYRs%2Bq3qxy12buVs%2F4XyG2NZUh9FVfUFxTtbj5GXRFnObCzz%2FD8TKHmuUbr3ar8T1cu4pNCqivsr0%2Fb7GzGuemVOn26e7sCPfnT7DE7H96xRXhu1a%2F%2FNf9hdRloHEZJD173v2X5CJ3apYEoT5CyGHPAevipxc9D0wgeufzAY6pgH%2BeazoN1%2FTYYKGtJO%2FrGZu4nTvBKFWAMZlPtR3d%2B2cmEqUNGAa2MObBzkhJsjo40wCOVkX50%2BNdcr6kMiTDUGpjbOCviVFGs2MGYZXUJonR0%2BJIxvcoKm0ucqbDXd99LNh3gLm3cEzMu9SiZ0iRuNAEJJllZ0z3u%2Fp%2FTWkKJcBN7EXdWimjkiglCPYTE1S6zjz2HOq9e1xxAnVEGbcErnmt1Ng%2BUmS&X-Amz-Signature=8f57dc84bf2e99a1a9bec0fc0cadb3c90b60f0c94d758db58bc90f602d17ba5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGTXN56R%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCewJsaZiEorHhar3bMdmmun%2FRssKYrxG1%2F6JmFR2wBVwIgGkrV7GFA025XzOUTNpVoS28CDPFQq0ekkoMCOidrCZMq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDCaCfWChHx1z%2BWrN9CrcA%2Fcx4DIhhLuLFQ9shMuJeS5R40hAtugvKzym6dGH3LBXx4WC6Ni4CVM6Jn%2F6tsSnVNSD2hLp1rwRHuCYTx0NTa1N5bzvUuEr8Enqn1OgQ8LHkGfYu1cfLWg%2FIWmghp8W%2FD8mVEngwpnHJPcQerw8wvYaWazPCEyoaxnrqtuexzDaeV5t2fn6qtmi%2FmWPA6htK1kEIDOrs3hDRbeCcSGXeQbMdXx0mhMQWsrPcO9eS0yD4y3zVZz8biDH2M2m7zElltGkNdIngXJ99fyfOYC%2BQmt4gRbDUTfpE%2F0Apmyekiql9zJG3jq3Z18iQkAcriu%2FhRO4159NhIOGDv1zusvBWQmX1AF8CbEE7Hd%2FC%2BBnKV%2Bl3a8IDsfNd6b6RUKuf1YHrGmCPYRS9dcmAn54U72Z38RCnGD1%2FQ35erlkc3UnHJh3JCjfGi2mgA8%2FTjQZdOPaSU3JhPJ1hE5S6y%2BqX5c%2FyY%2BzG1Avgl4mDh6wMV6bHPo2L0PwzXS3S1S8Kv5spbreGiLqBpDBjGv2DekKi4LD5oTh4Uvko%2FtwPb6%2FbETHrtzsNc6oEkPLFcStJATnF6Eakmdyu%2FUUfml73ORGt5lFne%2Bnd%2BY31aQUs1tGygZHHp4BxTZBnMilcJ2LMgxLMJXqn8wGOqUBlgC6vlJANCJYuPeSsggm%2BoD4veZ0ra3f%2BzhExdg0SfbVpFM%2BPQ4%2BvcyKtz1RfJXAJysVbt7%2Bh4J709ZmkAXkLlVkaJ3T90m8MzLbHdxEK0iPwQDRbFb7Ph0CbBaqLtwlxFCSt6VOgAeex6kb8Y2O%2Fs%2BgC4UfFiRcIsIvRBwEKyFi6CSAY0%2Flmm0D4uBFpcLXks9245LGiyOfoXhGNZv3oKIcC4dX&X-Amz-Signature=3aff841676f6db4fd83da08e27d4dbcee1bb52959ede61e543677b5f2e0e2a7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGTXN56R%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCewJsaZiEorHhar3bMdmmun%2FRssKYrxG1%2F6JmFR2wBVwIgGkrV7GFA025XzOUTNpVoS28CDPFQq0ekkoMCOidrCZMq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDCaCfWChHx1z%2BWrN9CrcA%2Fcx4DIhhLuLFQ9shMuJeS5R40hAtugvKzym6dGH3LBXx4WC6Ni4CVM6Jn%2F6tsSnVNSD2hLp1rwRHuCYTx0NTa1N5bzvUuEr8Enqn1OgQ8LHkGfYu1cfLWg%2FIWmghp8W%2FD8mVEngwpnHJPcQerw8wvYaWazPCEyoaxnrqtuexzDaeV5t2fn6qtmi%2FmWPA6htK1kEIDOrs3hDRbeCcSGXeQbMdXx0mhMQWsrPcO9eS0yD4y3zVZz8biDH2M2m7zElltGkNdIngXJ99fyfOYC%2BQmt4gRbDUTfpE%2F0Apmyekiql9zJG3jq3Z18iQkAcriu%2FhRO4159NhIOGDv1zusvBWQmX1AF8CbEE7Hd%2FC%2BBnKV%2Bl3a8IDsfNd6b6RUKuf1YHrGmCPYRS9dcmAn54U72Z38RCnGD1%2FQ35erlkc3UnHJh3JCjfGi2mgA8%2FTjQZdOPaSU3JhPJ1hE5S6y%2BqX5c%2FyY%2BzG1Avgl4mDh6wMV6bHPo2L0PwzXS3S1S8Kv5spbreGiLqBpDBjGv2DekKi4LD5oTh4Uvko%2FtwPb6%2FbETHrtzsNc6oEkPLFcStJATnF6Eakmdyu%2FUUfml73ORGt5lFne%2Bnd%2BY31aQUs1tGygZHHp4BxTZBnMilcJ2LMgxLMJXqn8wGOqUBlgC6vlJANCJYuPeSsggm%2BoD4veZ0ra3f%2BzhExdg0SfbVpFM%2BPQ4%2BvcyKtz1RfJXAJysVbt7%2Bh4J709ZmkAXkLlVkaJ3T90m8MzLbHdxEK0iPwQDRbFb7Ph0CbBaqLtwlxFCSt6VOgAeex6kb8Y2O%2Fs%2BgC4UfFiRcIsIvRBwEKyFi6CSAY0%2Flmm0D4uBFpcLXks9245LGiyOfoXhGNZv3oKIcC4dX&X-Amz-Signature=a36760e4b8d42c87feb84daffe61f810898fd8ea2108f40ac3f16ce8d638d9f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUPJZEAF%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgm6LjiLjMtEpHE3ihnkv%2Bsbc%2BL1tLwZ21Bi3jhph9pAiBk8dECvaGBcrOhduYH4TAhDpdPEVcLhG9Cmo6hJkKZUir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMtAlnIpdwTwweCFE8KtwDuDO0OgGte95qm8WmuuGajrjb9VuD6eWIfGBLXZsVbTC7o6JyclRxSi8mfBXC0AycJL8ACJg3x4qesg5DuYcf91OoVpJpi28ObVedyL8H%2B%2BTvV%2FNYneaaBqohqDRcKzu6bQKZDahF2GkEJWY0O%2Bp8US7JiV4VYjXAnYlsHNegbLvU1NLlsfAWaiHxYTBaged5Km8ituwD4BEjdGNS5gC%2B%2FvqpmXqfBo00SWxJqo9erTJM8ecaxxf90EGnMFvRWVhR0AcdMLwmuLzBKod7t1Mlx%2B48nVaiy241iXNIL9V2gwzY33qRCZyw%2FGgo8VBxbJWL2eWHO1i0I8RfI9wKnSwWOaN9i73FCuHui9p6MWZDqTwbPPT1L4MNK4AjkJ7fz%2Ff0%2BEQjgPf5XB5AqMhc1CkgB0rA0TM6nuUXWBryWTGi0c4vMx6CzA7kidk5%2BwMeifzcUYUdlBrJ%2FIO8wIEXl4ZeSK2jw0SfYRs%2Bq3qxy12buVs%2F4XyG2NZUh9FVfUFxTtbj5GXRFnObCzz%2FD8TKHmuUbr3ar8T1cu4pNCqivsr0%2Fb7GzGuemVOn26e7sCPfnT7DE7H96xRXhu1a%2F%2FNf9hdRloHEZJD173v2X5CJ3apYEoT5CyGHPAevipxc9D0wgeufzAY6pgH%2BeazoN1%2FTYYKGtJO%2FrGZu4nTvBKFWAMZlPtR3d%2B2cmEqUNGAa2MObBzkhJsjo40wCOVkX50%2BNdcr6kMiTDUGpjbOCviVFGs2MGYZXUJonR0%2BJIxvcoKm0ucqbDXd99LNh3gLm3cEzMu9SiZ0iRuNAEJJllZ0z3u%2Fp%2FTWkKJcBN7EXdWimjkiglCPYTE1S6zjz2HOq9e1xxAnVEGbcErnmt1Ng%2BUmS&X-Amz-Signature=8be22216e482bb0b4784f91f94d2ea532c6424fa95ad82681f3f0a47fea47100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUPJZEAF%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgm6LjiLjMtEpHE3ihnkv%2Bsbc%2BL1tLwZ21Bi3jhph9pAiBk8dECvaGBcrOhduYH4TAhDpdPEVcLhG9Cmo6hJkKZUir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMtAlnIpdwTwweCFE8KtwDuDO0OgGte95qm8WmuuGajrjb9VuD6eWIfGBLXZsVbTC7o6JyclRxSi8mfBXC0AycJL8ACJg3x4qesg5DuYcf91OoVpJpi28ObVedyL8H%2B%2BTvV%2FNYneaaBqohqDRcKzu6bQKZDahF2GkEJWY0O%2Bp8US7JiV4VYjXAnYlsHNegbLvU1NLlsfAWaiHxYTBaged5Km8ituwD4BEjdGNS5gC%2B%2FvqpmXqfBo00SWxJqo9erTJM8ecaxxf90EGnMFvRWVhR0AcdMLwmuLzBKod7t1Mlx%2B48nVaiy241iXNIL9V2gwzY33qRCZyw%2FGgo8VBxbJWL2eWHO1i0I8RfI9wKnSwWOaN9i73FCuHui9p6MWZDqTwbPPT1L4MNK4AjkJ7fz%2Ff0%2BEQjgPf5XB5AqMhc1CkgB0rA0TM6nuUXWBryWTGi0c4vMx6CzA7kidk5%2BwMeifzcUYUdlBrJ%2FIO8wIEXl4ZeSK2jw0SfYRs%2Bq3qxy12buVs%2F4XyG2NZUh9FVfUFxTtbj5GXRFnObCzz%2FD8TKHmuUbr3ar8T1cu4pNCqivsr0%2Fb7GzGuemVOn26e7sCPfnT7DE7H96xRXhu1a%2F%2FNf9hdRloHEZJD173v2X5CJ3apYEoT5CyGHPAevipxc9D0wgeufzAY6pgH%2BeazoN1%2FTYYKGtJO%2FrGZu4nTvBKFWAMZlPtR3d%2B2cmEqUNGAa2MObBzkhJsjo40wCOVkX50%2BNdcr6kMiTDUGpjbOCviVFGs2MGYZXUJonR0%2BJIxvcoKm0ucqbDXd99LNh3gLm3cEzMu9SiZ0iRuNAEJJllZ0z3u%2Fp%2FTWkKJcBN7EXdWimjkiglCPYTE1S6zjz2HOq9e1xxAnVEGbcErnmt1Ng%2BUmS&X-Amz-Signature=3a031a925767826246348176ec1719baec34967e2bb27252849ffee97378e364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UXQUVPD%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFO8bxzXrPZF9Sg7Y6inM9LDXn1pSQl%2FMius%2Bo5aDbJNAiAfCsbFsEeliOth0Kymbg1A6jl1DClzoV%2BTlzT3nnQ7Bir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMaNQum3UQZ1ZNMNt%2BKtwDrxPXvS8HqHP4KmWzS3zGIx8ZUJvr22R3%2Fkhe4ieZMMl%2BFrbWbMHlsLtGpFhzAT%2FJ6qEm%2B3TsXW1SgWT60hxO%2FnXwOrJVuNoGQJMsHF5Jvz2A6ARwuOFX%2B7n2H0k0uQZYDtyzANIVIXjNyjfkv0tGSn51w9pKXh7lAxNGnuAVRwT%2BklMltRsIerFpMqyHjV1q7hZ5cE3GSXpgJjY%2FI89%2BePXG0QJ2o9xoEKXTjMVM1snuDGlMHjycDuRvDps5G%2B6B4IvYh970bT9zWZZJcArL4GWkevzdhXDzLOau5KNMvc45ZsxUAYBry6hM914HU7bCvcoYZ1OKl4hQdT5%2FHMtGs0kLit5UdbHuJMEJazBKBe8dGaGLwEnybgnoBqvvsQqX2i38KeBbLdleYpr3iM%2FtBRlOnM2%2FjZN91mVhzVx%2FtUahEq1oHXIEK4CRmi5a6ymCoeDSAaleADWdKmOLikCPxnbrbzvsMm6K1LIWkbj7hbsPdLXfbrWwgJuNypw6GJz3BC3akTuQxehi9%2ByyFqdOkrVtiEww8twvD1nbWQp90c3GzMJVqgKkCASiFsjvk%2FDhrnc6rT8bWNe2vvPP1%2BMo8MuyFz0gmZqOfqDz0uNtcUqUVGsbLjL%2BhuU8uUAw9OqfzAY6pgEQQuCPMJQ6%2FWn%2BSYxiao148b0cN2GmhlhYLbXAowfjKB7Qa7MCdEHUOcToRdn6OXjBMuKHLdw23hjdl%2FTGCBgV2wfumQ5G0dF1%2F6YCKfbQvwC2IMZCj7Chxe1SvZJyzl5ELiaIJ3CJmxQ8xVqVgFOnKlefpXgvT8vtXEpbXOfXRdmL1hPpk0V882ghk6BraW74c4pTAWm5rRElyENPW6Pd8yJRE80M&X-Amz-Signature=23c2d099398600b2d317817cfb00bb44fd86cced622219b223dec4eb42a68f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

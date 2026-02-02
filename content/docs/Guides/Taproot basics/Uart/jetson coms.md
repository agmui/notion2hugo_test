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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QT4AM4P%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCudSSarhLyLKRpaSLPwTEkAeF2iHkguzdkFWB9mBsBWwIgd7y9KcZsSZEEL6UIbWMq%2BZ1kqzjgmJxbs3%2FFz2AD%2BaIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNGDBjVVG%2BpdoGbOircA%2BTX%2BLbjbwjDsRBzcBBum%2B4kpv7TSswHi17L4vK1A2kTtSWIO0wsCGD2giFZDEffP%2B3WhiGN82EaNE94mLdfsx15XveHBPsrmzIndOY5AzI7lGq8Q%2BMSyMPteTDX08qVonTslcaf%2Ff8XUz8i51MbuCYfJulXTzCRXKXj5Oj8AtYxBAGkatMnSw4XXCSH8g9PsvnT11fnG1sqd9PLU8disbmM22FpXiMQ4ExBMKST%2FH%2Fyp6CBgMi5%2FBqnyXjmdNx8nYVkE1Qqi8nqPLhcNYILTzRnXWeanfmFSeppKYHiPlZ7oFy4mMU%2FAJs5WkCZ0v1%2FTPD5f%2FT9lQDYDvBfRLGbhGf%2F5FVbsR%2BBLi%2FDXOz%2BP9X8Ic%2F9HSoq5yR4N6OUc6H%2FGifbhLpxAb9LT%2BEVEHZ15bxVh7mDTdm29X9wS4vcFyEUOpEtZwAfdfg3qQaNSb6GIlU2TwoEYIbqVZAi2X1vUafS9u8eCGQfPsFt%2BJAooI0pnb%2BDA1aaqkp0LqrNPLjY5lfPW6sjoV9skz0%2FrgoxKgAxTkzjxF407XdUb%2Fj5ZplZs7wIwLV5gasJqWE833Qi0jJbU3qea69%2BRdFrq8CIBRWuBvZ1%2BCu%2Bs0L8J5DWZO9PFFCDtNY8yMVB%2Fxc7MNGGgMwGOqUBMWosKTbxxyNvTcuLCvYnDwMXGOn6PbVCxunK3y8sPQECGXkJifRS6boe%2F9iL0XBIvrHCC5NJ%2FqeusOO7%2FwShFdg%2Fea020jQiCZ6x9jdzhnzb5Z8fndhKLmTgYf8NjhOZnWV5rOJywHRCyovNCEWbnVegf7LOim5YOnu0ugYcG8%2FU8zq4HSrPeIA2geBaM4PIVgAGK0s6pLLvkxI9PW3grqaLwlRK&X-Amz-Signature=1992a068b19182a755e62c56a7d873e9a6818806f2b7aa1bdd5eb96d47a6dc94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DZX56BU%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGddjNCTBnwF%2B4M5%2F5dxF5AQcUzWxxsBeUILNLHCPzT8AiBwhQQrs5g1ger8cP%2Fgao03RQ1oCU6ublEmYiroOYLCGyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5DED1mIQ6PvhYFGZKtwD6PJOVzERv8w34U5RlFG%2BnLYpmtYy8UYs7ylZOxwA59EDwjez3uyKQShhVVMZp8SL%2FWMoI3XwAGqf4suSqfe3SgDFGE%2Fwdub7oX0o0F%2FtvHTlXIsvnwbBNV%2FI%2FFicqhGNOLTNchnRqngQUjh6RbEB%2B9Zl1iNYF5EdqF34uz5SDLQjWFDTxZNkxPTxPbOper8jfK%2BhkmAjLHUL0ZDYfZAjfaQar%2BCoMj54JD1sbGUE1f0UOG0adpAnQ6hXio9Gr%2BGwgjEcD7ia1emyh3smCYVEnT73Yy3MsMD%2FC2Y481OgZYkFTI4MuUUVGx%2F28TRvu4jUjmY2PLopIMZ3MIojowpv08yXVURRrXaInD%2FZ54tXQpTdTStrNla69M4tc6TuTAbDKTUWi9I20VaRxFXW5pngQRfyK0M10ljnUug6PBetPmHkZebvqzc6crFUE4eGtT6wEAM6OpNLyKrIhtPPxxL0uw1rFivx9g1XQ0GC6s0KhKvf0Qlmbval59R8PwkOTtuVurK2efyidR5sooCXfzyWMLLiHw9GSE%2F6e58PbbdiVbSFySnSr%2FlReBkP4FXbgqWTzma1tstYNAKyvlSWKt8qgDELiYwupzHiN%2FrxM3Y2TTEimA2DF8iL64kfe3swrIiAzAY6pgH6BVX1teBo1GeXRsHn3Mkt8ielHUCEUBiHWTlHaEd68eIHGF01K47dObA1V4d8jGxCTFCHRT0%2B1RcbrqgtZ%2FzMbMw0U6YppGIf%2BumBBcIIWLHaQdjsIfQiCPJh6n5DIyy73IhPJBgHNFFhkTLEFCD0NWBQ2H%2FIGc0DuHAT3kPkimknyf6ULeD1H32wspizdX4MdNUxX%2FQIU2cxXtxqXZK1qhZAWkkc&X-Amz-Signature=cbc795b2f8aa08db0bab023793c579de79b56538b31df3e8e1f05b2c130d07e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3WIM5G5%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIDq45qwYpsaUZnWVK8ZS7%2BuAeXLbpFSKOBEJusIjDTeAAiEAo2TFdSUNdnIw3bhIB0lhnrHYsIm9uOD7H%2BCK%2Bb0U%2FEYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCopmBYyOLrV5SivSrcA3F78qDjS0EBkWnc42tSxyXb5Y18HwIvdg7gQvuURB3eYsdRRkvNOVukdtVzAUYEtdI5NuUiltI4sh59mpl74jr%2FBDcVrM03fTwu7kbopPOmBz7JSZqWoTxrRClkjijSIR%2FNRcU3IpZmnmyEu7UJC5RGso5Ji0aRAcjZaP7wnx%2FfgK%2BDwIYBNrsOw6npGjdeYs%2F5sEU%2F7lk81l4bErSdNcB5s3o235ghgHl5mZU9Mr%2B4aM1F8CukkKyRTcj%2B5R2DLUvXf79Kb4BNtwOtFFGb7f6rdRAtdgbqNBNJXjwr%2Byid%2ByzcjDLuKfD7DgI0EzLHSpfXZduBDQK%2FKtfpADa6%2BiUYySs7PKi6pHEzGi6W97KhuqjLpTZxn5SRgCK2%2BcdmPmv4Guw4vuDN4Py7pHivPnKbWjGcuVXGzD150DI1yVbAyUcUpgtIO9Zxzs1EW4FPfIjnphExfcJmxq2C%2BplbaQpZlpU5vP0LedegZnwh8h87Qk%2BQN3BxRyJqDBH9Vcz1uBq2GK5UXEi4xzCejM3svIReliA0phSPdGHPqDz3IeMbcHJxKeMzwHUxRDkIb7NVo3gXCaX1SwnK4hXaalXkdB93KGZR7xiMV12CeUc6n8WUplQUDdhg9Rj1UFWlMLOIgMwGOqUByf7pGmkobY%2ByzsNsY%2B2lVvtlu2VqBl5FjJXldwG9lvoLdRTJL%2F3NaE3GfRMRGb2flCvGQs4J4uvTpDLeXnEp6Tfxyo6D%2BuRkOjIU%2BYMqXPpJ%2B96Y3Y%2FqKFkS35E2WLZLWP%2BDHSEtu46bjVcB%2Fk7qY%2FXXfJOB1IGHBeEnHDh6UTnRlNdRlxtfZWLvdX9qIi%2FBYtPpQiy%2FN%2BptcokS%2F651qIS%2FW3Kd&X-Amz-Signature=463445c64f076d1f1d5824c6d3594d263bff77dc1bfb8b8f8937edf702157536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3WIM5G5%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIDq45qwYpsaUZnWVK8ZS7%2BuAeXLbpFSKOBEJusIjDTeAAiEAo2TFdSUNdnIw3bhIB0lhnrHYsIm9uOD7H%2BCK%2Bb0U%2FEYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCopmBYyOLrV5SivSrcA3F78qDjS0EBkWnc42tSxyXb5Y18HwIvdg7gQvuURB3eYsdRRkvNOVukdtVzAUYEtdI5NuUiltI4sh59mpl74jr%2FBDcVrM03fTwu7kbopPOmBz7JSZqWoTxrRClkjijSIR%2FNRcU3IpZmnmyEu7UJC5RGso5Ji0aRAcjZaP7wnx%2FfgK%2BDwIYBNrsOw6npGjdeYs%2F5sEU%2F7lk81l4bErSdNcB5s3o235ghgHl5mZU9Mr%2B4aM1F8CukkKyRTcj%2B5R2DLUvXf79Kb4BNtwOtFFGb7f6rdRAtdgbqNBNJXjwr%2Byid%2ByzcjDLuKfD7DgI0EzLHSpfXZduBDQK%2FKtfpADa6%2BiUYySs7PKi6pHEzGi6W97KhuqjLpTZxn5SRgCK2%2BcdmPmv4Guw4vuDN4Py7pHivPnKbWjGcuVXGzD150DI1yVbAyUcUpgtIO9Zxzs1EW4FPfIjnphExfcJmxq2C%2BplbaQpZlpU5vP0LedegZnwh8h87Qk%2BQN3BxRyJqDBH9Vcz1uBq2GK5UXEi4xzCejM3svIReliA0phSPdGHPqDz3IeMbcHJxKeMzwHUxRDkIb7NVo3gXCaX1SwnK4hXaalXkdB93KGZR7xiMV12CeUc6n8WUplQUDdhg9Rj1UFWlMLOIgMwGOqUByf7pGmkobY%2ByzsNsY%2B2lVvtlu2VqBl5FjJXldwG9lvoLdRTJL%2F3NaE3GfRMRGb2flCvGQs4J4uvTpDLeXnEp6Tfxyo6D%2BuRkOjIU%2BYMqXPpJ%2B96Y3Y%2FqKFkS35E2WLZLWP%2BDHSEtu46bjVcB%2Fk7qY%2FXXfJOB1IGHBeEnHDh6UTnRlNdRlxtfZWLvdX9qIi%2FBYtPpQiy%2FN%2BptcokS%2F651qIS%2FW3Kd&X-Amz-Signature=f5d726d14e47ebfb2b6aa6dfb05d920dd7182875135309036c959925a9a802e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DZX56BU%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGddjNCTBnwF%2B4M5%2F5dxF5AQcUzWxxsBeUILNLHCPzT8AiBwhQQrs5g1ger8cP%2Fgao03RQ1oCU6ublEmYiroOYLCGyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5DED1mIQ6PvhYFGZKtwD6PJOVzERv8w34U5RlFG%2BnLYpmtYy8UYs7ylZOxwA59EDwjez3uyKQShhVVMZp8SL%2FWMoI3XwAGqf4suSqfe3SgDFGE%2Fwdub7oX0o0F%2FtvHTlXIsvnwbBNV%2FI%2FFicqhGNOLTNchnRqngQUjh6RbEB%2B9Zl1iNYF5EdqF34uz5SDLQjWFDTxZNkxPTxPbOper8jfK%2BhkmAjLHUL0ZDYfZAjfaQar%2BCoMj54JD1sbGUE1f0UOG0adpAnQ6hXio9Gr%2BGwgjEcD7ia1emyh3smCYVEnT73Yy3MsMD%2FC2Y481OgZYkFTI4MuUUVGx%2F28TRvu4jUjmY2PLopIMZ3MIojowpv08yXVURRrXaInD%2FZ54tXQpTdTStrNla69M4tc6TuTAbDKTUWi9I20VaRxFXW5pngQRfyK0M10ljnUug6PBetPmHkZebvqzc6crFUE4eGtT6wEAM6OpNLyKrIhtPPxxL0uw1rFivx9g1XQ0GC6s0KhKvf0Qlmbval59R8PwkOTtuVurK2efyidR5sooCXfzyWMLLiHw9GSE%2F6e58PbbdiVbSFySnSr%2FlReBkP4FXbgqWTzma1tstYNAKyvlSWKt8qgDELiYwupzHiN%2FrxM3Y2TTEimA2DF8iL64kfe3swrIiAzAY6pgH6BVX1teBo1GeXRsHn3Mkt8ielHUCEUBiHWTlHaEd68eIHGF01K47dObA1V4d8jGxCTFCHRT0%2B1RcbrqgtZ%2FzMbMw0U6YppGIf%2BumBBcIIWLHaQdjsIfQiCPJh6n5DIyy73IhPJBgHNFFhkTLEFCD0NWBQ2H%2FIGc0DuHAT3kPkimknyf6ULeD1H32wspizdX4MdNUxX%2FQIU2cxXtxqXZK1qhZAWkkc&X-Amz-Signature=ecc6d67e4f7a49413976933601f55b37c9fee4d6e28df591c81779ed174727bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DZX56BU%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGddjNCTBnwF%2B4M5%2F5dxF5AQcUzWxxsBeUILNLHCPzT8AiBwhQQrs5g1ger8cP%2Fgao03RQ1oCU6ublEmYiroOYLCGyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5DED1mIQ6PvhYFGZKtwD6PJOVzERv8w34U5RlFG%2BnLYpmtYy8UYs7ylZOxwA59EDwjez3uyKQShhVVMZp8SL%2FWMoI3XwAGqf4suSqfe3SgDFGE%2Fwdub7oX0o0F%2FtvHTlXIsvnwbBNV%2FI%2FFicqhGNOLTNchnRqngQUjh6RbEB%2B9Zl1iNYF5EdqF34uz5SDLQjWFDTxZNkxPTxPbOper8jfK%2BhkmAjLHUL0ZDYfZAjfaQar%2BCoMj54JD1sbGUE1f0UOG0adpAnQ6hXio9Gr%2BGwgjEcD7ia1emyh3smCYVEnT73Yy3MsMD%2FC2Y481OgZYkFTI4MuUUVGx%2F28TRvu4jUjmY2PLopIMZ3MIojowpv08yXVURRrXaInD%2FZ54tXQpTdTStrNla69M4tc6TuTAbDKTUWi9I20VaRxFXW5pngQRfyK0M10ljnUug6PBetPmHkZebvqzc6crFUE4eGtT6wEAM6OpNLyKrIhtPPxxL0uw1rFivx9g1XQ0GC6s0KhKvf0Qlmbval59R8PwkOTtuVurK2efyidR5sooCXfzyWMLLiHw9GSE%2F6e58PbbdiVbSFySnSr%2FlReBkP4FXbgqWTzma1tstYNAKyvlSWKt8qgDELiYwupzHiN%2FrxM3Y2TTEimA2DF8iL64kfe3swrIiAzAY6pgH6BVX1teBo1GeXRsHn3Mkt8ielHUCEUBiHWTlHaEd68eIHGF01K47dObA1V4d8jGxCTFCHRT0%2B1RcbrqgtZ%2FzMbMw0U6YppGIf%2BumBBcIIWLHaQdjsIfQiCPJh6n5DIyy73IhPJBgHNFFhkTLEFCD0NWBQ2H%2FIGc0DuHAT3kPkimknyf6ULeD1H32wspizdX4MdNUxX%2FQIU2cxXtxqXZK1qhZAWkkc&X-Amz-Signature=c8b88d9a28659d6ee1dbada654ae887405a9e55f4f0fe355734e808e51c2d65e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V75JJ4ZO%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCg%2F2pqfjs0ic5rxmFzqqmVvklJgtwFmsks0yF2O44VlAIgc1JUUoghXDHYPAhSEIkvGSXw9jY34AXZyEvIFbuMs1YqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1575cMvvakBexLjCrcA0pJ2kQUeE7BM%2FtzlgrzyVYq7Hcita2AOsjWL5cktjb0la2GZG6r%2FtvZnqoqJW5ZtVKcHe1kYZxSQgFEUO%2F0iNre5LKLsHe1gmNQ1hPz395AUCksiBRBzDbkU4HHDUsnIaO9s3Lo5unR3towGtDU1s%2B4Mrg4X34Z3x8g1Xp%2FiOGZLfczq5tee47E9tD14o4QkYRYqQsDlt65nf1rQ6OaeXRCyI2yDMCTgss7Vv%2BbD%2FoSwuy30WXOuX6mD0La7scJVcwvaLaaMk3tdHRKOpDKOZ%2BlS8oOuTuakhUTm46G3M791sL1ZDq6HMFBYCRPKy99Tew66cf2poMIXNSX00W61CNHZ4WoIdxZKaI0oXUcCHYNw6LNmOVwNK0GJd5n7NwHsXpWehrJ2psyEQpGXY921bTX6VKyJKKWrFPfZ4b1%2FHGetlSts2dnWSwtJCESYtnsiEYQWvODdyHhmlWUm2ASye%2FCofIRQCcZ1p0MjJMAmD0mi0SCMd5lRoc%2FNHXXgfv5Jl4MYS2sYJU%2BMg9RLSrsmNClNB8s0s6Ixr3%2Bb%2FD4PaisyjZomJsyRnKLkmvkidjxcifvNqyLUQAk%2B%2BlSU6vMkdy6FEtBdfdSqXxCbjosOj1CvZ8hyQzZTNQbGIcIMLmGgMwGOqUB5CUaYAu9ifd%2Br3CW%2Fh9liTvF4h%2FZ%2F4wMle69GQZOStDOA4RPO%2B4PxbPk5WBG5w%2FBIlNouyI%2Bv48gshG2p980BGxA9%2B1DWOfs9QaakCWpLXvpuMBjsSV9r2y5unQPJbZ0u%2FUGnT1xC68wQmsxabyTDKwSiM%2F3IgXBngK3FYUMr%2FQiSjllQngVSTPJvIJ7fzygn9P73SEVDI5YeleGAxO359cjERXp&X-Amz-Signature=c6f55d6e95147bad1099dd581f5298017ac997bc524ef7c79c10d114eeb1914a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

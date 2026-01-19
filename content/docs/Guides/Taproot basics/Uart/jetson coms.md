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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKMUEYND%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSwYSfpXcsvNa1nMX0TgWcdbiZc8qC5bWMHuOxK5O%2BmgIhAPWRdZfu18Maion4y4NjYh60TLTc0ZVMFh%2F2tJVb13kNKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJvjtbN728Emd0JTcq3APuHX0CTpVNq%2FZqh0aUcdclczc3r7dUUPzTYItqQY0b6MmnZIRsmKUi0vZC8QeYwIZiQcdn6To7nvKS0Bb%2Bu3IPsbx%2B4uEeJoUsb7h2JeSnT3cXOZ%2BKbQcsQqkIyf%2F33Uh1MhF88utB%2FmNr0DA3adPpLvY%2BgoFCbjKXkT2XxS0fdRk2Q4fdvA1CIb2TcsIizvVWFnGztaE0%2Bc%2FN9pdoHAaKsE0R5N37T%2FcD7D%2BoQi46WhIpiJvuNCC5bWb%2FbUMtC%2FnacIJHI%2BacpqOc4LH3eSK6snqKBdkdTF5Exk6%2FRxIgn1QaNH9IGlB7v%2BMEASsAmjFVdKkzTHIoChyKAen7PcY14Fu%2FE86OAXsO4KxktFUuV5T3DNCaMTrc7NBVAFWzVzxJ7hSO3QV93o78sl1Tr0XYDbSgMdie66Fm%2FC0yzjPf0K5BwUKE0%2FMHa20l8JF9UEhwY%2BgcA9jjfCPQzb0b9Xi5%2BFRtDHMmU0rgaEr%2BWc3s%2BpOBpMEQAdlvtLdNMWvSShdHFhoLU5hrcpBsHbomuL7JKBVe6jXbpS8mIZqnoSHM35X%2FHLtC%2BH74ASyiThNh4y9thHGLds%2FlgeFU4Xrqn%2Brc4281NTlAoKfVEb2I9aoNTxSAH4JJcU%2BOSBi%2BIjDH3bXLBjqkAa8Mk5RcT%2F5ptIEdcx91a92CHOnhLk370Y10%2BSK%2B6Xxad0Xmkd5VjHuUpgyWE3hKhl8UM6K7NP%2Bwgnm6jXe%2FiC%2F2u2j2rrfhQ2ve3%2FLIHL4R19U%2BfcfIGxWDHrAX%2B07rDMJbJLfr59znR%2BkpczmeMuH7TxhdCAB%2FzuqRXL6ktM17bR5lWzt%2BNtAM0EBTxdnLtvhhkNAdqaVICbAOEO8w3ENo4hK%2B&X-Amz-Signature=30155b36c4caf93a133c17ae49892f6b52ef4650b05d0682cba1aaea32aa2669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW2ZD7R3%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHnvb7cGe9mCaeP2%2B29ZwOUAJ4%2B7Xq7Vm%2For%2BBaJx9WAiEAvh8bgH7nsAH5Ivr6xn4d62UhifAYGlXXtKUu8SFzvVAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHbcU1%2B8e1yYuQJ2SrcAxZVs9Hrl%2F5NQGA2KP%2FEDPXkrcD%2BF1ya%2B47JZXTJLJIl8jDD2hk11Onoy3j2Ss2%2Ba%2FCkuoiBUFUyfxyWgbjIM0v%2B9PrF1SIqF2BgRFGHiueuFPhkYkS%2FBPxwc8SQkAzyopKWdAk151ZO6Cv9KHNQqJfjFavzb9ZjJAxi0Ia%2BB8wdpa0Un9LJWucuANT0fqS%2FkBy4SEgv3dYKK6pLXrXq8nIFjT%2B8Uf5yj3AaB5SvfqHq2EQJF9C1Aibq6YogpmjZTvoXbTrZUFWTmXoClILwnyAyPaqLaVTzh9JnkKhaemil1Ap4C%2FMYiJGjsKDZ3kJBLf2l3vf%2Bhkfmo7%2BPbRO8LVo4PMz0y3YTC1fwCZ8orwZoc17b8IC7bPmvLt5O7GCkuSR3WtosRNBiORWm5Yjf7kNxE1jiJD%2BgyllJ1qpErTZUeAnR7I39IJgPmjbsEISePKL0h56D0DZEvhLb%2FGTwVA8o4d2RlKR70iUH4jRiVsUCTvM%2BGPZlEqtk7mc0TwrGdcTfp%2Fh3cXCdo1yaeK5O9AopuLAio1aVfevD77X3ITCJtiAavnF4ipAkjXNT6r5Y9kcKy%2B4TOkb08U8M3OOYggsvfng1PvdSIngJEeXovPEawyYBF6oH8jCryFsIMIjetcsGOqUBY7tgzlTpEBCiLlSMuCZn1KjmBf5CeBuSNDC0FgYITl9DOzPHtmulF7qjvWYFcQxJP9mDQfyFg6LUSm4ygiD2mLWynEUGmEYRiIKGyEAYGNHFS%2BxZN5saulu%2BZd2z0DbFItdLSvX4d08MWloy4p9EB8tDtvp6%2B6Ya2jeXYvPFrkQD5sWPhoVjlpUu2h%2FDAsoYfNcE%2BMMdNwyeEdtHYb%2F01UNc0ocK&X-Amz-Signature=59de8c943592011bda996860cd0fa7ab2bcb72bb600d060ec06306e178822191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HDS5QDY%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BKm6fhIhpjYi4jBoKAV6XA9mrRS8Y1zNMQUDwDdVkTAiEAvOO%2F%2Bner9RuyxKTgjuk7HvpS21AgSKPDngDFvaAS15IqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJsbq0TDCHyrAJX0yrcA2tx5%2BaMA7u%2FmEsAWljbc8AojWJpN5sIN4%2FuankLnsM2zPIDpgAzubldp2r6To3RybORqKXLjpzDhhnwcLHogvWF3I%2BgzyFr6eSQNfBjwT%2FsMJJ91ABmew4w%2B2ZfzsaoSmA%2BXmgJxgr6c59kF%2BFXIwumNMeXJlyU7xCIb%2Fy9agPvv3zimMmVCh5IiZRl%2BKwXAVY9XBgdF6RUHZXNpmWoFEppuVw00uZPmg4Rf84do90GhWNWtMEyU8lWcGT%2F%2FXNBZGCF0faAl3tWMlRcJGvwWm0bOCBACYLqLfOGQ27183NbUVnCo9mw53DlvrqxyPEvsd30XG2vHhPF1wlqcQgwPzdyX5AyVgLuH8TxLYVRlsMKzKT%2FWZx%2FrRthUEr1Nn2CA%2FgyFR7JFUa9mXeWuY%2FAkHCf0Z7awrwQ9GFexliML2Ule%2FIckD8I69hZj9mmYUrNCj7795xbPl6FT6eWcxp33Er7KkMGkjsr7TAVWw3d7qeZzcOImhlTwds8CALs2jzL8xrcqFTgQe9WRJxoe%2FDLT1XEuTHqREigM7fmPR8Y9R8%2BOC7k5oxpN63p5Gg7LVXgOnmVpuRdLaD55xjgaU6G%2BgtUOb205JK%2FBypqqAWAkmcBhsyRgt7Xlzz1pXhqMPnctcsGOqUBV%2FK3udy1zlbldRqNLFXERYVteF3UXVh3LAowVpUvDK850xrN3ifG2Hy40%2BCTYxUbUuK%2BPaigrEmgYD6c9w4PHH3ISKcBRnzd6maNl0nJMQNwbFfDUbNIfnhtg%2BhEEq2RqRRCmXj2BYGiSJIbltWYEYm8BDrd25a%2BBMea9QS1KDylngVXTG%2BjLe74XCDFk2XrjhCKd%2FSiC9pwbm8b5nqVHt%2F2VB%2F2&X-Amz-Signature=7c94433d5138a3409bd961a61912cb309f1a622db78840e2f00abd5a60b87af2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HDS5QDY%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BKm6fhIhpjYi4jBoKAV6XA9mrRS8Y1zNMQUDwDdVkTAiEAvOO%2F%2Bner9RuyxKTgjuk7HvpS21AgSKPDngDFvaAS15IqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJsbq0TDCHyrAJX0yrcA2tx5%2BaMA7u%2FmEsAWljbc8AojWJpN5sIN4%2FuankLnsM2zPIDpgAzubldp2r6To3RybORqKXLjpzDhhnwcLHogvWF3I%2BgzyFr6eSQNfBjwT%2FsMJJ91ABmew4w%2B2ZfzsaoSmA%2BXmgJxgr6c59kF%2BFXIwumNMeXJlyU7xCIb%2Fy9agPvv3zimMmVCh5IiZRl%2BKwXAVY9XBgdF6RUHZXNpmWoFEppuVw00uZPmg4Rf84do90GhWNWtMEyU8lWcGT%2F%2FXNBZGCF0faAl3tWMlRcJGvwWm0bOCBACYLqLfOGQ27183NbUVnCo9mw53DlvrqxyPEvsd30XG2vHhPF1wlqcQgwPzdyX5AyVgLuH8TxLYVRlsMKzKT%2FWZx%2FrRthUEr1Nn2CA%2FgyFR7JFUa9mXeWuY%2FAkHCf0Z7awrwQ9GFexliML2Ule%2FIckD8I69hZj9mmYUrNCj7795xbPl6FT6eWcxp33Er7KkMGkjsr7TAVWw3d7qeZzcOImhlTwds8CALs2jzL8xrcqFTgQe9WRJxoe%2FDLT1XEuTHqREigM7fmPR8Y9R8%2BOC7k5oxpN63p5Gg7LVXgOnmVpuRdLaD55xjgaU6G%2BgtUOb205JK%2FBypqqAWAkmcBhsyRgt7Xlzz1pXhqMPnctcsGOqUBV%2FK3udy1zlbldRqNLFXERYVteF3UXVh3LAowVpUvDK850xrN3ifG2Hy40%2BCTYxUbUuK%2BPaigrEmgYD6c9w4PHH3ISKcBRnzd6maNl0nJMQNwbFfDUbNIfnhtg%2BhEEq2RqRRCmXj2BYGiSJIbltWYEYm8BDrd25a%2BBMea9QS1KDylngVXTG%2BjLe74XCDFk2XrjhCKd%2FSiC9pwbm8b5nqVHt%2F2VB%2F2&X-Amz-Signature=bcc6ee260ea2b96a5cb02aa1ce4823076fab7d0c67f066146955a1a4600f066f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW2ZD7R3%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHnvb7cGe9mCaeP2%2B29ZwOUAJ4%2B7Xq7Vm%2For%2BBaJx9WAiEAvh8bgH7nsAH5Ivr6xn4d62UhifAYGlXXtKUu8SFzvVAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHbcU1%2B8e1yYuQJ2SrcAxZVs9Hrl%2F5NQGA2KP%2FEDPXkrcD%2BF1ya%2B47JZXTJLJIl8jDD2hk11Onoy3j2Ss2%2Ba%2FCkuoiBUFUyfxyWgbjIM0v%2B9PrF1SIqF2BgRFGHiueuFPhkYkS%2FBPxwc8SQkAzyopKWdAk151ZO6Cv9KHNQqJfjFavzb9ZjJAxi0Ia%2BB8wdpa0Un9LJWucuANT0fqS%2FkBy4SEgv3dYKK6pLXrXq8nIFjT%2B8Uf5yj3AaB5SvfqHq2EQJF9C1Aibq6YogpmjZTvoXbTrZUFWTmXoClILwnyAyPaqLaVTzh9JnkKhaemil1Ap4C%2FMYiJGjsKDZ3kJBLf2l3vf%2Bhkfmo7%2BPbRO8LVo4PMz0y3YTC1fwCZ8orwZoc17b8IC7bPmvLt5O7GCkuSR3WtosRNBiORWm5Yjf7kNxE1jiJD%2BgyllJ1qpErTZUeAnR7I39IJgPmjbsEISePKL0h56D0DZEvhLb%2FGTwVA8o4d2RlKR70iUH4jRiVsUCTvM%2BGPZlEqtk7mc0TwrGdcTfp%2Fh3cXCdo1yaeK5O9AopuLAio1aVfevD77X3ITCJtiAavnF4ipAkjXNT6r5Y9kcKy%2B4TOkb08U8M3OOYggsvfng1PvdSIngJEeXovPEawyYBF6oH8jCryFsIMIjetcsGOqUBY7tgzlTpEBCiLlSMuCZn1KjmBf5CeBuSNDC0FgYITl9DOzPHtmulF7qjvWYFcQxJP9mDQfyFg6LUSm4ygiD2mLWynEUGmEYRiIKGyEAYGNHFS%2BxZN5saulu%2BZd2z0DbFItdLSvX4d08MWloy4p9EB8tDtvp6%2B6Ya2jeXYvPFrkQD5sWPhoVjlpUu2h%2FDAsoYfNcE%2BMMdNwyeEdtHYb%2F01UNc0ocK&X-Amz-Signature=ceef069dca8ff8715e4ed2a622391645fd2c1b70943a577b419f9dbe16ed673d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW2ZD7R3%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHnvb7cGe9mCaeP2%2B29ZwOUAJ4%2B7Xq7Vm%2For%2BBaJx9WAiEAvh8bgH7nsAH5Ivr6xn4d62UhifAYGlXXtKUu8SFzvVAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHbcU1%2B8e1yYuQJ2SrcAxZVs9Hrl%2F5NQGA2KP%2FEDPXkrcD%2BF1ya%2B47JZXTJLJIl8jDD2hk11Onoy3j2Ss2%2Ba%2FCkuoiBUFUyfxyWgbjIM0v%2B9PrF1SIqF2BgRFGHiueuFPhkYkS%2FBPxwc8SQkAzyopKWdAk151ZO6Cv9KHNQqJfjFavzb9ZjJAxi0Ia%2BB8wdpa0Un9LJWucuANT0fqS%2FkBy4SEgv3dYKK6pLXrXq8nIFjT%2B8Uf5yj3AaB5SvfqHq2EQJF9C1Aibq6YogpmjZTvoXbTrZUFWTmXoClILwnyAyPaqLaVTzh9JnkKhaemil1Ap4C%2FMYiJGjsKDZ3kJBLf2l3vf%2Bhkfmo7%2BPbRO8LVo4PMz0y3YTC1fwCZ8orwZoc17b8IC7bPmvLt5O7GCkuSR3WtosRNBiORWm5Yjf7kNxE1jiJD%2BgyllJ1qpErTZUeAnR7I39IJgPmjbsEISePKL0h56D0DZEvhLb%2FGTwVA8o4d2RlKR70iUH4jRiVsUCTvM%2BGPZlEqtk7mc0TwrGdcTfp%2Fh3cXCdo1yaeK5O9AopuLAio1aVfevD77X3ITCJtiAavnF4ipAkjXNT6r5Y9kcKy%2B4TOkb08U8M3OOYggsvfng1PvdSIngJEeXovPEawyYBF6oH8jCryFsIMIjetcsGOqUBY7tgzlTpEBCiLlSMuCZn1KjmBf5CeBuSNDC0FgYITl9DOzPHtmulF7qjvWYFcQxJP9mDQfyFg6LUSm4ygiD2mLWynEUGmEYRiIKGyEAYGNHFS%2BxZN5saulu%2BZd2z0DbFItdLSvX4d08MWloy4p9EB8tDtvp6%2B6Ya2jeXYvPFrkQD5sWPhoVjlpUu2h%2FDAsoYfNcE%2BMMdNwyeEdtHYb%2F01UNc0ocK&X-Amz-Signature=c10cf73f3319a7478f3b476aaff089e5757381584f21407db7820cf0dd73d322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2DPYAE%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCBA7bg2re7j56V8olxtanqgf5Q6uctigqZ6rVxkZnngIhAIJtyCCPkyoDzBi%2BqzTDb5fQqNCg8EL4Ga7qI80%2Fk1t1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfWgt2ZxRNCRHAd7Aq3APuIKuf68QJAviGJzm7CvjGQk66q8qokI%2FG%2Fv7eU23EMaZPZeJ%2BorJuBZyVsbhBT1bmHQZE5b1NKsbflo%2BUc8%2BGJW2NFTqvxTnHiS1IYNmspkq8Cl12NvV4YhF4c9fGDnz9UY0bqKkB0OlpfJrVYxeX4moL%2BVZ%2Bio0NsvYtJQoqM95mW1mOGyJr0Oy%2Bjze%2BIxnu95uHgIb3Rfy1u98FbTpOMjddQ1hEpVuJfVSuXilG1SbY4szaUnYYQIwJJjiLRlOTE1CpJoztagOgX6P4w6%2BUTtua41ySqBuh51U4nLdmaojdUkGC7ICG4A39DwXxQlkksKjOWWUt5U0lMKgd7wBentLOf1qFALGul7Qo4B%2FxMapY757vxhquLkBn%2FSo0wWgYMqg%2Bq39MjpNLIXYWq4e7wuEv5vnhnOfiPTFLcphZ%2FBEiRwrTI%2BKN3%2BqG3%2BLNJoLn%2B2RIjsq01OwR3u16NgOYJYObGks5rA%2BDDjHtVRYb80lJsqEwf76zzT2Q%2F%2F8xV9I1UuK5Fe1iS7xz%2F201xRkWPShl2WN%2B49Dv5i2AHmVKOjj%2FzFpxpJueuBcdpCe15dMLeHuGzBgeH8W7g%2BQh3XT5o0M5hl3R9Ef%2FYP5Db0JXmArqtKgqDuGbLRN4mTD%2F3bXLBjqkAdOwS%2Bkzi78%2FrDp%2BNXMSlkoExVebWIJ3cTlocKC3sK1gucbjLzvo8jOQ7VdQgch6zH9vBDsNBJO%2FcWb93BFsShaZdC9Kx84Qb2Vfz8HlaXy3iVsSnpKjL33%2FsNed1wWz0CTgm9u%2FKC8CDlV400WRAgfeFhXdxAhioWI%2F1bi8AqaWaeISIKneZdqxQC8%2Fiqb7K2IgvW7yr03Xyr2zht52z2enJTpq&X-Amz-Signature=109f77a016a7dd54292ac773898a062fbd5c1a4f3f5e9d5a4365d40ad7c57bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

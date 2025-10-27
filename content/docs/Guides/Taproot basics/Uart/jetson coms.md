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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CFPYXRR%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6C085sjD8uLeHJTepHvB6kGRjSZwswGjCQ9EmeAO0VAIgUNjGqhmlidw9yzhQtpln6amf8cAMVf%2FH087vUjXc1kkqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoNrTg9abDDn4cl4ircA5z1Pz5%2FRhq34VTqNPeGi7S%2BaGXRk4nH6epBMPawfXjje9zua1IRnstsg11uSEIyZieIHTyIFE%2BUGcMIbmDJOz%2BRZ2ziBa%2B6p0ZS3PtZhCk9e8ECb28AyyYuK4xuRwcMuGOh%2FV0HveTLIp9xdcFoLoTa5Vb5bG0qzwaUzyMyCktpF7b73UXzRGGuBRbdOXuWjFBAYL0oghP%2FrunhMsxP5%2BfYSQCCQppCgX9DoYoJwFshdA%2Brj24yyGBoPP0h85f9daLJIPKnUml0xBvZvi3%2BZJfe56NmyZfzZMBn5%2B%2BXJysHvRoIXypO57hycG90kBhfvQWxc4JilJz3Ryo%2FPwZarf7lh6PSJ8ZomfKMX%2FnruLI5osLSdJCw457AizIwRFn1xruFrSlYiLNu3URfMDHq6afulIYY46TbI3bz%2B1fS7Q9BTdK3xdtjzRm%2Fs0Jn2KPuVfz26RcjkNhifVUEQ0WURK0hAvCa6RJOva886pz78GCeFAztlGPhBt8SLHUts3gKSPz%2B9UMIoF6SiDZ%2BQ%2Be%2BWQxbIZa95po5o5mv8IigHgcqxC610AeFjb67arYuI%2Fykgxpr%2FKt3VBXhTNSnQt8jyKtUr8yHdC9DyaeP0yN2%2FeYUKgCYlsyVnip%2FbZNmMJKP%2B8cGOqUB8%2BJ9TH5fBu5253u0UXFKx6L97NaikX5sJzEUujifDBiJY%2BqHo3LbJHhs2QWD2Z8PknqCDkazaMrgEvXr3Gif3gKj%2FTBEHvyNfSY3P8yeiUl55Z%2BKg7g7us%2FEW0hvZakTh1asu2mn5rQQ9ION73ejSx2rTlWgWnn9yiFyZwwXzxk2j9P3Mkbpj6yLu6Dp5DSQf817D6XIB99BIUNiPwInjipj5ytX&X-Amz-Signature=7b7f81006d2a509d85ee278118b72718308b63d821c5baa8d31d988ab601b8fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DEMV6G%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsLrk9zXHiHWinQsXVJp07fiCtKvTmgIszHlyVI7revgIgW9aNdoZ4ClVxIbjCVAzloOV7mNaulPRGaccAtzgI%2F2QqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlJGcQHgRFvHwOZVSrcA6WViSdAi0rnthD%2Fhasxc%2FZVxhDo0UXx7IuabE1nuVO2zXwsHRT%2Bf%2BmAWhLoy9ZLRU9hNg%2F3cvg1QFxngub9qeeeAZ2Eejdo8NCgsFAvE6PewiSRmM098J2U0eZJe2OlHwZpXyHOeVwxVKg0y%2FCIfVeM4XRI7QDWPgCkzFeGi3ytSpoWPXhlZ2W3zTdXRx4PndD1G%2FvcrRuuH8Q4mrOL7blNsZgYArO5ut3z3Ymet8jzt6oNHikwM5KzNZ5fBYFQtMh8QbxDmeaAKl2uPvDcGOKZei0qzWSmzlF1RZ3wR1xnuGhy4nx3Dyfz1Yk7b5YfUltPJ%2FCZR%2Fvf5eS5Z6Owj1LIbbMlwZL3XrhbsuOPY6NFOndRZaUx8%2FAr%2Bk7Eo89LwxOAqiJZGr8egYJmRe60vx4kOKpoG8k7mht97wWsfRbDO4yMaHCr8Bcs1nJiDG35OY3EXVgdZp7x8fVmJ2YhTy%2BpbGm8GhUcOc2GKRR7%2Fs3HRyJbaCbiY00VZbzGNDRkMuTRsPdI9FA9L645%2Bl73AwNTcUefdTMR81blwrXa44zjRPXvhTK%2BvEHG5cLw2MoKuM4EQJaIguC1oekbYAf%2FSsFPAsDx53Dp1eDA4KNRsQMtrqVqKeT6tg0ETzOcMNaO%2B8cGOqUBlhKw7DcMZr8KhaQOpKZW6LVhAFtJ%2B%2FKNnUKQl9fNXhDC8HGHu6nMzjJm9dlRkvPN%2FlSf9TUQCvuivMWqVXpOT4SxXKw2PDSMTUp3Ui%2FIQzn%2FzzSsQbZNxbk5tquY3mxo2Dk45Y5xIdkXnUms2VhyBVDvoZqCIGothjQSlnQ3SDyiAdFJgIClDea%2BJ3oPSyZ4yXNVvJtpzbTlgOCFZ09eFPg52IUE&X-Amz-Signature=991f047ab61fac601104c7bf2e3f696d8a606db0f9c3e6eaa67e82f29d28ac20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D5VDWMJ%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5847N%2BjGQpVtFIFiD0xputP57EVdVdwu4zUmXVhWFiAiEA1RFMCdMpy7Qwi9kRYtvuevo5jwmWwCvT7DzXqJCGb1YqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKz%2F%2BQnGdmRQ7H7kPyrcA6VC4%2BSMXp%2B0Hmj%2FPZ7C5%2BUi%2Bklxf85fkcBjclYjnrHt%2FmgaH4QNBGWLTb2Xv5R9Oamu5sgUExsKSDuJ2Wsepy42kFdIHNMgdloxodWHSzKfTF2F5ybjIIF%2BWz9u7Jh0LufKhhitkJFLuzNQ7w7RFF338QDpzWX39mdGfnLoj09ZjuG8QB2Rk7Ha%2B4HCmpboQs1tDlCLrg9zoqo944nOLoRTNNOUlER4nZ2T30UWNA9ljMfkfJKVRia7mbBS2KjJs9Y4%2FX5x4kdGWBUN7JLTouG6VeDBCKHQwCgCMyQDiQrCPpGvBFUtqdwDEikbjGsXFWwyHfs9%2FwzwHGuJ0Hvkaojf16kXU0pCDEWguKy%2F3WFXcWiBHkJqK%2BOwg3oYJZc3IXWTSc2lVIyyHUcteVIZKBreSY5xkPXkWVB6DCoa1N9Mak0a5BXXGVxuzSKeKsSaP9L7QxI0WIDfX1Cou7stn0HrW96xLgIjVum1KkwunGBcDJapAawhQhKwd9Ct%2FcY0y%2Fy5%2Ffpo%2FwE7Z5Cl1Z%2FxDlVdNJkHW7e0PPzteBAMSVhEvpCDvr9HK9vxCZwgNrCVf9DywCj%2BmRdD9MWDP1HeZ4s7Air2cUyt%2BLjdhNhFKKhQI7Fx0%2B%2F0mpw7G291MNyO%2B8cGOqUBwNATEuTeA%2FPcqqFyuF49k1QoC%2ByvcPLgWobSt0cqgf%2FwBsulbH4FgtKZlqFGVtqUd5s4zo5udTgXgGB2LQJXfSpPve0A2DUBdjBW49oDumsvjRjTIrhaVQ5Dnv344hY7yNnuj80id2Khl80vl4N4lO0qFVGr42C0kRiqvr8lblG2k%2FKfylwRVyjhEnfRwGFv1yqzdRDw%2BP4gbTxfd53KmgZgSaSj&X-Amz-Signature=24dbe43bb70e0abcc35470671863bbfb7228542bb43754a04bd8b074d23d9acd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D5VDWMJ%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5847N%2BjGQpVtFIFiD0xputP57EVdVdwu4zUmXVhWFiAiEA1RFMCdMpy7Qwi9kRYtvuevo5jwmWwCvT7DzXqJCGb1YqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKz%2F%2BQnGdmRQ7H7kPyrcA6VC4%2BSMXp%2B0Hmj%2FPZ7C5%2BUi%2Bklxf85fkcBjclYjnrHt%2FmgaH4QNBGWLTb2Xv5R9Oamu5sgUExsKSDuJ2Wsepy42kFdIHNMgdloxodWHSzKfTF2F5ybjIIF%2BWz9u7Jh0LufKhhitkJFLuzNQ7w7RFF338QDpzWX39mdGfnLoj09ZjuG8QB2Rk7Ha%2B4HCmpboQs1tDlCLrg9zoqo944nOLoRTNNOUlER4nZ2T30UWNA9ljMfkfJKVRia7mbBS2KjJs9Y4%2FX5x4kdGWBUN7JLTouG6VeDBCKHQwCgCMyQDiQrCPpGvBFUtqdwDEikbjGsXFWwyHfs9%2FwzwHGuJ0Hvkaojf16kXU0pCDEWguKy%2F3WFXcWiBHkJqK%2BOwg3oYJZc3IXWTSc2lVIyyHUcteVIZKBreSY5xkPXkWVB6DCoa1N9Mak0a5BXXGVxuzSKeKsSaP9L7QxI0WIDfX1Cou7stn0HrW96xLgIjVum1KkwunGBcDJapAawhQhKwd9Ct%2FcY0y%2Fy5%2Ffpo%2FwE7Z5Cl1Z%2FxDlVdNJkHW7e0PPzteBAMSVhEvpCDvr9HK9vxCZwgNrCVf9DywCj%2BmRdD9MWDP1HeZ4s7Air2cUyt%2BLjdhNhFKKhQI7Fx0%2B%2F0mpw7G291MNyO%2B8cGOqUBwNATEuTeA%2FPcqqFyuF49k1QoC%2ByvcPLgWobSt0cqgf%2FwBsulbH4FgtKZlqFGVtqUd5s4zo5udTgXgGB2LQJXfSpPve0A2DUBdjBW49oDumsvjRjTIrhaVQ5Dnv344hY7yNnuj80id2Khl80vl4N4lO0qFVGr42C0kRiqvr8lblG2k%2FKfylwRVyjhEnfRwGFv1yqzdRDw%2BP4gbTxfd53KmgZgSaSj&X-Amz-Signature=b133a148b61ef43308dd322447a6f721a48e2872825618b118d44515312bf467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DEMV6G%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsLrk9zXHiHWinQsXVJp07fiCtKvTmgIszHlyVI7revgIgW9aNdoZ4ClVxIbjCVAzloOV7mNaulPRGaccAtzgI%2F2QqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlJGcQHgRFvHwOZVSrcA6WViSdAi0rnthD%2Fhasxc%2FZVxhDo0UXx7IuabE1nuVO2zXwsHRT%2Bf%2BmAWhLoy9ZLRU9hNg%2F3cvg1QFxngub9qeeeAZ2Eejdo8NCgsFAvE6PewiSRmM098J2U0eZJe2OlHwZpXyHOeVwxVKg0y%2FCIfVeM4XRI7QDWPgCkzFeGi3ytSpoWPXhlZ2W3zTdXRx4PndD1G%2FvcrRuuH8Q4mrOL7blNsZgYArO5ut3z3Ymet8jzt6oNHikwM5KzNZ5fBYFQtMh8QbxDmeaAKl2uPvDcGOKZei0qzWSmzlF1RZ3wR1xnuGhy4nx3Dyfz1Yk7b5YfUltPJ%2FCZR%2Fvf5eS5Z6Owj1LIbbMlwZL3XrhbsuOPY6NFOndRZaUx8%2FAr%2Bk7Eo89LwxOAqiJZGr8egYJmRe60vx4kOKpoG8k7mht97wWsfRbDO4yMaHCr8Bcs1nJiDG35OY3EXVgdZp7x8fVmJ2YhTy%2BpbGm8GhUcOc2GKRR7%2Fs3HRyJbaCbiY00VZbzGNDRkMuTRsPdI9FA9L645%2Bl73AwNTcUefdTMR81blwrXa44zjRPXvhTK%2BvEHG5cLw2MoKuM4EQJaIguC1oekbYAf%2FSsFPAsDx53Dp1eDA4KNRsQMtrqVqKeT6tg0ETzOcMNaO%2B8cGOqUBlhKw7DcMZr8KhaQOpKZW6LVhAFtJ%2B%2FKNnUKQl9fNXhDC8HGHu6nMzjJm9dlRkvPN%2FlSf9TUQCvuivMWqVXpOT4SxXKw2PDSMTUp3Ui%2FIQzn%2FzzSsQbZNxbk5tquY3mxo2Dk45Y5xIdkXnUms2VhyBVDvoZqCIGothjQSlnQ3SDyiAdFJgIClDea%2BJ3oPSyZ4yXNVvJtpzbTlgOCFZ09eFPg52IUE&X-Amz-Signature=cec2a22cbf428a88471082b4ccc5a6c63de080913b6b30dfc689fc3981de75ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DEMV6G%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsLrk9zXHiHWinQsXVJp07fiCtKvTmgIszHlyVI7revgIgW9aNdoZ4ClVxIbjCVAzloOV7mNaulPRGaccAtzgI%2F2QqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlJGcQHgRFvHwOZVSrcA6WViSdAi0rnthD%2Fhasxc%2FZVxhDo0UXx7IuabE1nuVO2zXwsHRT%2Bf%2BmAWhLoy9ZLRU9hNg%2F3cvg1QFxngub9qeeeAZ2Eejdo8NCgsFAvE6PewiSRmM098J2U0eZJe2OlHwZpXyHOeVwxVKg0y%2FCIfVeM4XRI7QDWPgCkzFeGi3ytSpoWPXhlZ2W3zTdXRx4PndD1G%2FvcrRuuH8Q4mrOL7blNsZgYArO5ut3z3Ymet8jzt6oNHikwM5KzNZ5fBYFQtMh8QbxDmeaAKl2uPvDcGOKZei0qzWSmzlF1RZ3wR1xnuGhy4nx3Dyfz1Yk7b5YfUltPJ%2FCZR%2Fvf5eS5Z6Owj1LIbbMlwZL3XrhbsuOPY6NFOndRZaUx8%2FAr%2Bk7Eo89LwxOAqiJZGr8egYJmRe60vx4kOKpoG8k7mht97wWsfRbDO4yMaHCr8Bcs1nJiDG35OY3EXVgdZp7x8fVmJ2YhTy%2BpbGm8GhUcOc2GKRR7%2Fs3HRyJbaCbiY00VZbzGNDRkMuTRsPdI9FA9L645%2Bl73AwNTcUefdTMR81blwrXa44zjRPXvhTK%2BvEHG5cLw2MoKuM4EQJaIguC1oekbYAf%2FSsFPAsDx53Dp1eDA4KNRsQMtrqVqKeT6tg0ETzOcMNaO%2B8cGOqUBlhKw7DcMZr8KhaQOpKZW6LVhAFtJ%2B%2FKNnUKQl9fNXhDC8HGHu6nMzjJm9dlRkvPN%2FlSf9TUQCvuivMWqVXpOT4SxXKw2PDSMTUp3Ui%2FIQzn%2FzzSsQbZNxbk5tquY3mxo2Dk45Y5xIdkXnUms2VhyBVDvoZqCIGothjQSlnQ3SDyiAdFJgIClDea%2BJ3oPSyZ4yXNVvJtpzbTlgOCFZ09eFPg52IUE&X-Amz-Signature=84f3477dc15538a691317bd8155160ad16ee157cb2f335cba7fb80bccbc21137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKSQCCVM%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfQ1mhAT1ntTiSYB0LLOWt4aTT5KFSNvZiFo2gPOvyNAiEArPf2%2BVcprVlEHpiivjZOx7L12OUFKZXI5okcJPLyBDAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbY5B8f2ZhwrwzQSCrcAyCKVHOZKogcpAqn5Ja0DXClIk%2BWK%2B3BtI1IDHs9WRIYm40QDnO23ayg5lkIO1G4u2Rgsi2F4FGuTwYe46RJZLvZNS05c2IxlxTZBNer3lG09g0YAikQyWWQZMUddkqtUTh5wxDIxLeGVFJRHtqREokn%2Byrxmk%2BH5bBy1SyTxJ4BWeHObxM8kknJ%2FFcSvtTHIb78gtw0olF5ScJzxQq0LsZlSk7gP8xIcmOCr0TQ38GrbJveI%2F0PQUmpk6Qnr1mIfJddNHeWVod4DovJF4y4xWFiGTY0uCMP2zsNaMgi7%2BW43z7DRNAM5BnkvhOpLdmUzAwbBWSmerYqzKR0TxIcYsC88jUp09I%2BkYyBzb%2B5Dud9vWnYgG8K%2Bqz%2FHQlPdxA1D0QnpRny9Dso2ghuE0YqBhTapifYuC19kah98HT%2Bq%2FMvWyt6L9ZQT1oNfjskcYNTWuYoqnerV872%2BICT2o79weaQyjGjChYtYzSISe3xmldJ323QGH53yRdTqtwxgPbVIuRdpsNsO%2FC8GmzB8pxbdtXl21uE3aheKqvWXUH04oYnzsJvo8IdodQzyjB6e4vU6JpUIFg6c2bB445m34XmqpmMsD1cMYTTY9Qds4EbV94ODWHcl6Lb1LK6wkFXMNyO%2B8cGOqUBYsLh3CICIJskeIr9sYnWzpWl%2FrJKk0FT4kKCc%2FRO2WHM9JHzcwklMLF4EO4dvtInnZ1a439QbsbmWwN1FXe41N3iNY6gOXf3ragnD5mB1EIwRQyo13uYsleo24yrl%2F1a1Fbod08Q57PpsH%2BOkJhmNisrD%2BI4MRhHqbrF9LDN6AqyR6V5a6JXVNjxj3JMJadHU9gcMctC%2Bpd%2BqTGCXiHv3Aozb%2Fgk&X-Amz-Signature=9508b7458fc046c8ee59b819b514945f4529872f616d3a07aa59fcc8c3605128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

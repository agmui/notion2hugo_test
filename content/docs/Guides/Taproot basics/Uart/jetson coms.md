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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYVSOB6T%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjtmGkZsRwrh4yPXIazcYN9jU9l%2BR3gKc3S7IQCojGcQIhAP%2F1F9eWa14jtyLJkO4krxTb8NOVclSf8ooulv%2FNH7yxKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1UreHiPLK5ANSLr8q3APBnxQ21yUYEmC3FpojbV5tso6H8hIkOiz12BVQ1TTga2BvHboNDzTDQkyQLKWsJpW7akryRPbBii4L9P9SVnrJ2iPRmC4Z0aOd4m6h%2FOgtrcq0qiX32yqK2DGwo0VNmXOb9a%2BQjsOrxA%2Fw%2BpqHwSpM7abAHNsUioZSi4t1VFfwJgOiNrEllc5G9ZnbZTDi5O9MAZELsNs8RJtWULhoPaOTkZ97HEemgVed3nj9s53wnnmWsRhnp0%2Bt0MdUyUpfpp6Gh7TZyKCa47ahrRdkLpRvR5PTwEbvp%2Bcxf3%2Bqicst28%2F4bpcOHRGmRDhmozr6NNdlDfPz4je8eHx3a7uDdOdRmy4lS2ZLFDCPJXHX6V6AHbBwZy6JRdHyDCfv%2BlEWAMAR4GJJnap6q%2BNiEw6rH8AfiK6AwBY6Y6ZZ2lpEChrK8BNFa6yLxyENEDOVqFi36lpSLdzparrJmIHvZ0TZYcJYDOi55AsaUOeFxP0XIN6FmavqsDpAv6dXNWvji5GwZ7%2BRY%2FqY1Wd7yyKTBhhRO7FsB98ofYZuUir2awBtqZ63hGK%2FB%2F1F5vzrPD8FNXGW81nSWEYP%2FjNBxUCkM%2BbWQd64NEuDgKFIPpIDZEMFV49EpUj5xxFH6h2ohnzgozCfv5jRBjqkAWRvOfF9Rh0wpayBUqWOmGHyNmvyWPMA5tllTooL%2FDyobnNyBc8i0Pme3ruf%2BAuidMZQi%2Ftn4qDxV%2FnZD%2F%2B%2FAx5brOAQjD2Sp4f63GdefOQZXd07F7IFIjPKXz9G0aR1eKzgu%2FxKwTETSicUaVpmGxJyA%2FIPQ%2FGn78pSx9q%2FUCA2CUf4sdonsbF3PloNh%2FRHNO%2FeNYyydCNdvgTgP7x0LGsQ0XfZ&X-Amz-Signature=23b6ef187bd93fc192d907c880a37242d5c689108af6f8ea16c487e9e123ba08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB2MBPRM%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZBISet2nnQxcfVCsI%2Fy26RykXxMxVSUuBJwdkx1j%2FPAiBdTpyHYxEIYw2QNfaKP%2BGqO%2BSCrsJw6BtfDwbJc6SOlSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKbfoHdHDOnNL9SIiKtwDa1bmduxGLVUGtvXu5kj9M1qErJpfk9j3h6VJJVvKE%2BXjMRlm3NbeHAqFhPOStPIKvD0W02IIqOLMcSZnrrkEWNDVI3xmWpsBvc34bHFWRrco0n1GFVdAtUN4GLQ4%2BGZOJKYGVuJ2g8osHv8Z48aBS5%2BTG2BpAgaH5zmbMNOn08scDSrjqL9J7YF8DZWJiNkrebmjN9%2B2Kz4GcMq31xMGv0YuFm6v3bYlQ1I%2FCQyWcTsFGgMWWqlMyJRnUm6OTiUYjxh3jjLGAgq%2BJdSXgvYGFh%2FXlVM2Zj3bgwUovMnM0Phn90zEXQyANNA3ZfjA8dtGb1Wa4BTaS2bonSGnrSuzgHm8ZWIbFo0dRvHfd%2B369Hn5b5qehzZEb%2F3kzLxmKkbPDzyK7hv7y0PeMbNPYkKVR4dBYGkc52lXMBMYwsHMTfwh5YXTQBW%2BKVGM98G6zPXoydRd1xS%2FUCviYs5morMTaU5xdSram1ABmb01weMg34eCKx6Gm9XOsANdrXaDUbO8KX90WVdhGz%2BNQZdrbhw%2B4OdLcEkjxsNpuiD5e60AtqD2Aktuz0iCDo0q%2FRc6eIxHtDCHm2sCiyEZkMvZXvGkeEpX97uLO9Gef9Ljbd2y4BwO8YMB4wanyJt27CowucGY0QY6pgFNoE9SmmQ%2BrpsnjZefNFnq0PHmhJohfMK4rRfVPaLKWjZ7EL4sA7bQCIC0ZOwlwhzHx6s8CQpJxOLFhu7EuZ65E3p%2BNmRb0x7HzgoV%2B5ohJ50ErocP6HtqFmyx6LMe1qWoDmmT4UqadKuNb65CSRByHfhumJEJDgYf2gNfV5s5NK%2Fhl7e6HOlEmAGAcsOeecVc%2FrFffMRr%2BtSGdGcrr6Jpw130G6SK&X-Amz-Signature=ca067cf4c1fb2076bbac590f950bd7e897a83af5b488b6238965ad5b31b7aaa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHTNOQPG%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDr0aa3SaspMv%2B1ruINJ1AOwW4RXSm367Ce7%2BaFMC85yAiEAnwVNs1qxOdhK2m%2BYXnzrM1hMjd5bZLPWJKv%2FOz38atEqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbQn9r7prlI6wcCUCrcAyP2CYur87xJrLwYBhF16IkQJadMp3p79Ztn8zlDd9cTTfdVPpUzgz4kBB2xfV4v2O2zIo9fRv5pzRQSh7zUB7vF4bKetcg0TOWdmnOKL0Dg7YPH5Nb34QX3GQdXIx5ZLIItxBagjB%2FmfiXlEjXiTWprJjcZjH927jpl%2FqOtd3JRDWORf57T2X3mGHTLnumtP%2FR%2F7eMp6P6yfJE7AuAEbUDWTE89kTVsLpCUZtP65ysXocBE0Mo3m1KYbpoyW%2BbNPeq7Y%2BS3JJp9F5vUIfzuig3kKCSAKKVF46Jb%2FzKR7x5Wms1tqtu3vimORZkWGAE2v1aOqQMs9bE7ex9X4ACgycqR5C9bHGryz0Yel6SMTIEinlfK313trRZB5e3KINW3etL6YvQP%2FMYeaMKrQ23sSxB%2FOy8l5zkPJuiI6zUTJYwWgocG7dKIyenc0DW50dhFM2JK26wdjJohgd6RCkkNL%2F9fbcz7TTzVCr1oy%2Bo3bKBK%2BcNCxQ5%2BfyHCWtYW%2Bgyf3%2FkjDYzSxoV3sDuGnQ3m6RIVh8ZBo2MsdB6BsufPyCmDW6aG4EpY2%2BZ0OHLX7ul3I2i3LPujFC3xVuS7fdp1x4lymqLOEG%2BqwScR0%2FxDqe5BJJYD%2FlE7R7mBFHLEMLjAmNEGOqUBqFSH3Ds02MCfinsxI9Jzl%2Fwg3F56HaV8izcpSDS8lQK2Zxff7dW3CiYmiaJOrNpoBTBaYTzcnxsQVFm5rN5KEOMJDQVzzLNEzgR57%2Ffep2SRUHccIApCfGHzGgT6RvGxUU1url%2BPtGgvpFANoo%2BI4BdCinTcHeeiRJ%2BCz6qQwCIxxz7PDbHsJn%2B3f%2Br16VnDEJxic0MLuWNsIJNowUDOcCwwAOhv&X-Amz-Signature=507dc5179f417c0e2a730fcdccc0eecbed22be138f3996f7c426e3021f41600d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHTNOQPG%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDr0aa3SaspMv%2B1ruINJ1AOwW4RXSm367Ce7%2BaFMC85yAiEAnwVNs1qxOdhK2m%2BYXnzrM1hMjd5bZLPWJKv%2FOz38atEqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbQn9r7prlI6wcCUCrcAyP2CYur87xJrLwYBhF16IkQJadMp3p79Ztn8zlDd9cTTfdVPpUzgz4kBB2xfV4v2O2zIo9fRv5pzRQSh7zUB7vF4bKetcg0TOWdmnOKL0Dg7YPH5Nb34QX3GQdXIx5ZLIItxBagjB%2FmfiXlEjXiTWprJjcZjH927jpl%2FqOtd3JRDWORf57T2X3mGHTLnumtP%2FR%2F7eMp6P6yfJE7AuAEbUDWTE89kTVsLpCUZtP65ysXocBE0Mo3m1KYbpoyW%2BbNPeq7Y%2BS3JJp9F5vUIfzuig3kKCSAKKVF46Jb%2FzKR7x5Wms1tqtu3vimORZkWGAE2v1aOqQMs9bE7ex9X4ACgycqR5C9bHGryz0Yel6SMTIEinlfK313trRZB5e3KINW3etL6YvQP%2FMYeaMKrQ23sSxB%2FOy8l5zkPJuiI6zUTJYwWgocG7dKIyenc0DW50dhFM2JK26wdjJohgd6RCkkNL%2F9fbcz7TTzVCr1oy%2Bo3bKBK%2BcNCxQ5%2BfyHCWtYW%2Bgyf3%2FkjDYzSxoV3sDuGnQ3m6RIVh8ZBo2MsdB6BsufPyCmDW6aG4EpY2%2BZ0OHLX7ul3I2i3LPujFC3xVuS7fdp1x4lymqLOEG%2BqwScR0%2FxDqe5BJJYD%2FlE7R7mBFHLEMLjAmNEGOqUBqFSH3Ds02MCfinsxI9Jzl%2Fwg3F56HaV8izcpSDS8lQK2Zxff7dW3CiYmiaJOrNpoBTBaYTzcnxsQVFm5rN5KEOMJDQVzzLNEzgR57%2Ffep2SRUHccIApCfGHzGgT6RvGxUU1url%2BPtGgvpFANoo%2BI4BdCinTcHeeiRJ%2BCz6qQwCIxxz7PDbHsJn%2B3f%2Br16VnDEJxic0MLuWNsIJNowUDOcCwwAOhv&X-Amz-Signature=ed2a893e9f1b29f97e7f0555f4cc41698f370494739f6b3f12c5e15cac953e71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB2MBPRM%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZBISet2nnQxcfVCsI%2Fy26RykXxMxVSUuBJwdkx1j%2FPAiBdTpyHYxEIYw2QNfaKP%2BGqO%2BSCrsJw6BtfDwbJc6SOlSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKbfoHdHDOnNL9SIiKtwDa1bmduxGLVUGtvXu5kj9M1qErJpfk9j3h6VJJVvKE%2BXjMRlm3NbeHAqFhPOStPIKvD0W02IIqOLMcSZnrrkEWNDVI3xmWpsBvc34bHFWRrco0n1GFVdAtUN4GLQ4%2BGZOJKYGVuJ2g8osHv8Z48aBS5%2BTG2BpAgaH5zmbMNOn08scDSrjqL9J7YF8DZWJiNkrebmjN9%2B2Kz4GcMq31xMGv0YuFm6v3bYlQ1I%2FCQyWcTsFGgMWWqlMyJRnUm6OTiUYjxh3jjLGAgq%2BJdSXgvYGFh%2FXlVM2Zj3bgwUovMnM0Phn90zEXQyANNA3ZfjA8dtGb1Wa4BTaS2bonSGnrSuzgHm8ZWIbFo0dRvHfd%2B369Hn5b5qehzZEb%2F3kzLxmKkbPDzyK7hv7y0PeMbNPYkKVR4dBYGkc52lXMBMYwsHMTfwh5YXTQBW%2BKVGM98G6zPXoydRd1xS%2FUCviYs5morMTaU5xdSram1ABmb01weMg34eCKx6Gm9XOsANdrXaDUbO8KX90WVdhGz%2BNQZdrbhw%2B4OdLcEkjxsNpuiD5e60AtqD2Aktuz0iCDo0q%2FRc6eIxHtDCHm2sCiyEZkMvZXvGkeEpX97uLO9Gef9Ljbd2y4BwO8YMB4wanyJt27CowucGY0QY6pgFNoE9SmmQ%2BrpsnjZefNFnq0PHmhJohfMK4rRfVPaLKWjZ7EL4sA7bQCIC0ZOwlwhzHx6s8CQpJxOLFhu7EuZ65E3p%2BNmRb0x7HzgoV%2B5ohJ50ErocP6HtqFmyx6LMe1qWoDmmT4UqadKuNb65CSRByHfhumJEJDgYf2gNfV5s5NK%2Fhl7e6HOlEmAGAcsOeecVc%2FrFffMRr%2BtSGdGcrr6Jpw130G6SK&X-Amz-Signature=d22da453da0e664aac4dd702b6aa8fa1203e71c16afc15c8fc1816451905ee71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB2MBPRM%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZBISet2nnQxcfVCsI%2Fy26RykXxMxVSUuBJwdkx1j%2FPAiBdTpyHYxEIYw2QNfaKP%2BGqO%2BSCrsJw6BtfDwbJc6SOlSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKbfoHdHDOnNL9SIiKtwDa1bmduxGLVUGtvXu5kj9M1qErJpfk9j3h6VJJVvKE%2BXjMRlm3NbeHAqFhPOStPIKvD0W02IIqOLMcSZnrrkEWNDVI3xmWpsBvc34bHFWRrco0n1GFVdAtUN4GLQ4%2BGZOJKYGVuJ2g8osHv8Z48aBS5%2BTG2BpAgaH5zmbMNOn08scDSrjqL9J7YF8DZWJiNkrebmjN9%2B2Kz4GcMq31xMGv0YuFm6v3bYlQ1I%2FCQyWcTsFGgMWWqlMyJRnUm6OTiUYjxh3jjLGAgq%2BJdSXgvYGFh%2FXlVM2Zj3bgwUovMnM0Phn90zEXQyANNA3ZfjA8dtGb1Wa4BTaS2bonSGnrSuzgHm8ZWIbFo0dRvHfd%2B369Hn5b5qehzZEb%2F3kzLxmKkbPDzyK7hv7y0PeMbNPYkKVR4dBYGkc52lXMBMYwsHMTfwh5YXTQBW%2BKVGM98G6zPXoydRd1xS%2FUCviYs5morMTaU5xdSram1ABmb01weMg34eCKx6Gm9XOsANdrXaDUbO8KX90WVdhGz%2BNQZdrbhw%2B4OdLcEkjxsNpuiD5e60AtqD2Aktuz0iCDo0q%2FRc6eIxHtDCHm2sCiyEZkMvZXvGkeEpX97uLO9Gef9Ljbd2y4BwO8YMB4wanyJt27CowucGY0QY6pgFNoE9SmmQ%2BrpsnjZefNFnq0PHmhJohfMK4rRfVPaLKWjZ7EL4sA7bQCIC0ZOwlwhzHx6s8CQpJxOLFhu7EuZ65E3p%2BNmRb0x7HzgoV%2B5ohJ50ErocP6HtqFmyx6LMe1qWoDmmT4UqadKuNb65CSRByHfhumJEJDgYf2gNfV5s5NK%2Fhl7e6HOlEmAGAcsOeecVc%2FrFffMRr%2BtSGdGcrr6Jpw130G6SK&X-Amz-Signature=a0fe506cc6bc3e9d5e747d614c49bb2f7604571c41aaac498cbe264bb6ca9885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4VEWPJ4%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdlmu%2BoBB%2FQB2%2FLv50VqZV9ZXResmz1%2BLVcHpvXNHX4gIgfy%2FmlEDWE35DoKYSwcKdK5F2C%2FcyHFYCSGgiPJL%2FJ4EqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHW5T%2BdWYHhquJbSCrcAybHSxdD5pgqcn2CDRmvfBu3HsrU2fzPVNaQ5RXbTjkinhdyK8e7nJ6fA4yyiCMQGsN62Yb5mlsHvI8KShZklhBRgFfxASb5OQFzVGeRjOfY8Z3TRerZpY5%2B%2BvE3h5qMyXWVColCn6P7UHhdU6cjQi%2BBmPMISvhKurm%2BwBcqxv59HvZh62sqx5HO%2Buxas0mSuIZS80rJ1IC%2Ff9iuDcbF%2FI2RF5gJ60Rv2xy83uxbt9euB5NyIZFpANX4PM8Op6rsl2dV15BAV3JsKDffODZEW%2FYmfSrBq2tPtGdlYAj7TwJzP%2BEH4b%2FEkDuF8Fg4d9mVjRnK4%2BO8vgW4oiBvIgJAzcacIpdytNJDy3QKQLtMjZDhsBCFAsnTf%2FuhZJBLumTgXwiCc7TxP6lH8JkJkx8YkDdeJCfsmN1WZocPCB8%2F4Sj88ePlAibMw%2BeRIPFCDSdLUdrCikUiKEKJPEif5z8bI%2BLvfwu2AkzaTbcpxU4C6JpAV9jCFB4GHGR%2BggzYL5OmhjovEV%2BLV3Y9mYQDnJ%2BXAtTsmu8wIQsqpLHid2llhPLPrgdOs4KVfBue2zCvR7rkPyrYrg7PromQkR8phi%2Bs50yIWzqglZSVQmWcAq6PdvKWYfaGaJYQtQjlb6%2BZMMrAmNEGOqUBkfE%2FJW1lg87ENoNm%2BCwaA8zxHhOKemSZ8mkwfs3l9v2ZrexSeu5oclzHiywA%2Bvb7OZ4tGPqzNmLXmNHlXqKQGzH2Z4a3WvRKLFW%2F0JiTZGpJH4akQWiFa2W2qFmhzRypgHGlKU8OZ4zIBdM7S41fvlf24keFXAHF%2BkzVYxvlKJfBdSxAt06j%2Bxdsc6V7mPsvNok1vghiYvqKKtTzLkxu1Lw5hkx9&X-Amz-Signature=48f0a83a683e75de89d5aeca7ecbe21b4203754cb564b353067b788b09d0f227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

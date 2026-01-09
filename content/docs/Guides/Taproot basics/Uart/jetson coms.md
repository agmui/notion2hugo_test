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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5YA2KIX%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE1aOw5kbhYVsHh11BZiTwTaKVNwNbrjZFRR6KVAEqjQIgaEN9JCgSz4HDoBCZ8pyCySQ5aUCaaM9kTwyhGVyieHwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFDhw3hnCxUgazruxCrcA2V8EfTi9x5oSHDY%2FpYOI1Fm6Tae2bgdvWTcmM%2B9x5vbHp3MvVq68QSmdpFpeYgQQP4frEmPRoc3N1Z6K4MonVueQIIUmS8qLhd8a4zZFmJRK1ExKKx99xETo%2By0sPtyJOtHFwP%2Fvl2Y4jcFph0sJA33zxFOZms7pcjs7wwnZaur7R%2FKad0akdO9cSLYgGz%2FvDALkKJqH8dSsigTbEDbRUR7en%2FesPGwNteVcrsnQlvUUvvqz%2BkF61e6NgqdtmG5lLILXV79YR%2FIf1L9TF2YYQz2jasAIlHJtbUoV1EDgtFwwfLvqIE18%2BVqidprUyra8HrBVEGfex6kJJCWZP328KdmA5LgoI8gH8ND3jpF70icFaGae09O3qJfeaulQ%2BXqyOz3C%2BjdrNcOEdGqqVS2FgzBgXMdVjrFm9S99o3OjBXGdWq2nxIHxdKbXl2L5jslBBa0w9lVWtBHK5yUra6MFv192oWwIiOLiOvAgz8n2YJyM%2FrvRQure39ejPORfqXX79S%2BUE0YruFUww4nBP1gEMqVBAbqVDvm33SQ3FuTr1m7nxZACE8zaikWQVCE3NK%2FNIlWabQ1%2BJdww5unZUwf6cCB%2BdvMQCdc%2FN08w5UXZP0xpuLy7YpGb%2F%2BAn%2BjtMIukgcsGOqUBIfCqulUeflNDZG2ntIDTHI9w1IO6Kpjo07xLIXEEpP2L8ggZXER5WIUU2V1k99D1URFjwGq2Gi2VFacY%2F3WNCXM2D%2F%2BC3qZBvHjGGHbLPP80W03ZbcWEnz04WckFVQfTpVQxoQJtGWuDMAAasvXCC%2FETVs6c8YFTtgTJOW%2FEfE2ysZNWAxVpUvd0fzQQV6qlE4DRmUUYNQVztsHC161m3INT7OED&X-Amz-Signature=d75f6e6540b6d0bb51ae956270dbccbd3f4a2f853fc77e3034e2ee094c953e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQKO5SGG%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtUVBC1UX7Xe7LemYiM9%2Bx10avXBYIOjGhFWte8OS9KAIhANmnsTxHeMJhb7KxqIhu032jRSqrG95c7zSszaA1yTd6KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXVCHRO7hsrVB6GCYq3AN7hTCyQSENTgUgV%2BSFDkXEDk5MS2eNmN9CRXMO9WsPBxjydLfCPn2%2BECdA%2Bcyr0UxIQz26awcbofItEh8xngVjLu5ddQmoZp7jL9gl8S6JXHICq7zHNQfd06yDmLol1u%2F1MiCzWMvKRTKhDn6vzK9ExKEZFsv7GOlcg3Ax9F1ystQ1ztkfLPvmIm0D7a8VKm%2BMfO8FJEE%2FJxSObI3toRdA5ZQCyZCzHRV7nmR35FZKKrARdJ5QNkpy6zASg5Jh1utHT%2BoekcWYmXYKN2UUsG6u9tuE0QpmxAeb9V2BnAFWDbpWM076XQNw0tLpXCF%2FqEnKKjn2zJphEcUEPHRSIMeTw9AzXR8s3P0Fg2xug9piXKe3INO%2FPg3tmtoIH9WlUMvL3wM9ymH%2BGYOXNUKoiVTV92K0Xg%2FIBdHGr4sxKISnWF4jICM94Ih1rmm5lnIMWhXWKIofsTNRda%2B0v%2BM3Mm6PoSK40aVYiHe7B5wc0pqL3qg2AqZ7JamswIr%2BOj1xdGG0VNhvjeWnT5brKC3ai65BRJ1APMsjHBSkdS8qDMBYp09h2cjVB5Hluozky76Wod0r7dt1xUe4v2GcmMyZiuitt%2FjywC%2BBnkRApnmN38d%2BNIzZXoh7OOM8a2qsdjCOpIHLBjqkAZKezjTwNCdPlmgcO6%2FDU1JdqJOmMIy1rt6r7vfImt9GYqsehwRm%2F2UbiadFXB6ySEAklZnK5N4wNBSCcjJMFnMcuy1cuLyyW%2FUYRyWkve5me%2BTW9uzDRri9OLCtxfiRRHDu6OlbjWVkvQmNupupEgdzLBV6tUbWDV5HU0%2FoHIqFEuohaC8T8ov2CAIy4WVEeq4Go00fDW91RxXejWfWKbUqt8a6&X-Amz-Signature=1ded581a26193de3e271652ec1c5fa9fe27e574670f35791be8ac30e08578439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z47IXPEH%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FcYtW1LSAwINtykx6T1Oy82mW49AuvcV1%2BQ3DFE8IoQIgc%2BxRi1VkFFgntcCMh%2FdIGZrGsr7bxXMq38FczDorxocqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4m2poWWYD8pFSnHCrcA1rpQlcyZ9HItDLdjuXAzxArmDPoZ4eaqa%2By0vD8E0QRJS0W%2Bw3enMFfzOZU4dj4Z1ZzEzz7q310Aonquu%2FGJWhLyNfmU1k7EVOdvBqd%2BspVVL429%2FXY0UJ%2BdYWPhAnxi6Yive32XLBkamj0AsS5qIq09b8EeYMgTAr631irAfcdbVMy0B%2F5nZI%2F8YK8FzUC3yi6RxqmPh7dnxLFhcMuFBajz4tnCKyo0dxB%2BE7ArdjRzv6YL%2Fn4umEU7Pj62SxTbQBxf6lTdsOhphdnRZBLe6cvPcm1u6R2nLMJ7CGqY510dEgm9NkF6YSU4%2BOn3S564iS4W1zkLkMWpuI4ePnULCSO0itj2cELg5uTPq5grgZyt8JH6GjGWh6%2FYHr7VQYKtwqhuoMH1NKoKYtUwAhUeSJDzv0VX1B%2BA1%2Fs0KjbJIEUQ8fraZYLfU5dc%2Fd1Q2Rj9YIToUv3EfgPSm3YjmlNRa14YqPSFKF7c7JZhbRThtV9%2B3ZhtryiQ%2B%2B7cgTA3EssdZd3wRLVWXfmipTEMQyaG%2BdPHizlRlPhYznCnBF1EfEP46q0Za3i%2F3OowFaPn8Fw6hWANDvjyZbZTAaRZKd%2FS%2B%2FyIkE24byEY6zh4cKawpyZgxFNLk1f1JiaC9VvMOOkgcsGOqUBDtFsAcWxebFkNnF2uworZuQqaDjHzJdGKiwMecLKxoKSRDtWpYcIJxC8tIYpcIzWXmFppfZFQPqCxxN8yqxAGfUzlwRJgVphTGIu%2B0hM%2BGmMQmu6KZkA3e1%2FihpohSm2Py%2BR5fKVm8VYNM2JrXb0jApwjJzm5SNwvnLhlTxfv5mX0DgaOlRSfJAsyjLZznl5%2FZnv8t9%2FyXq3ENH9odhI3i2%2BHmM9&X-Amz-Signature=892247599e1f7da546a8d9e48ec098624dcb93b00cfb8eb2b9ac3d637d9f328a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z47IXPEH%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FcYtW1LSAwINtykx6T1Oy82mW49AuvcV1%2BQ3DFE8IoQIgc%2BxRi1VkFFgntcCMh%2FdIGZrGsr7bxXMq38FczDorxocqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4m2poWWYD8pFSnHCrcA1rpQlcyZ9HItDLdjuXAzxArmDPoZ4eaqa%2By0vD8E0QRJS0W%2Bw3enMFfzOZU4dj4Z1ZzEzz7q310Aonquu%2FGJWhLyNfmU1k7EVOdvBqd%2BspVVL429%2FXY0UJ%2BdYWPhAnxi6Yive32XLBkamj0AsS5qIq09b8EeYMgTAr631irAfcdbVMy0B%2F5nZI%2F8YK8FzUC3yi6RxqmPh7dnxLFhcMuFBajz4tnCKyo0dxB%2BE7ArdjRzv6YL%2Fn4umEU7Pj62SxTbQBxf6lTdsOhphdnRZBLe6cvPcm1u6R2nLMJ7CGqY510dEgm9NkF6YSU4%2BOn3S564iS4W1zkLkMWpuI4ePnULCSO0itj2cELg5uTPq5grgZyt8JH6GjGWh6%2FYHr7VQYKtwqhuoMH1NKoKYtUwAhUeSJDzv0VX1B%2BA1%2Fs0KjbJIEUQ8fraZYLfU5dc%2Fd1Q2Rj9YIToUv3EfgPSm3YjmlNRa14YqPSFKF7c7JZhbRThtV9%2B3ZhtryiQ%2B%2B7cgTA3EssdZd3wRLVWXfmipTEMQyaG%2BdPHizlRlPhYznCnBF1EfEP46q0Za3i%2F3OowFaPn8Fw6hWANDvjyZbZTAaRZKd%2FS%2B%2FyIkE24byEY6zh4cKawpyZgxFNLk1f1JiaC9VvMOOkgcsGOqUBDtFsAcWxebFkNnF2uworZuQqaDjHzJdGKiwMecLKxoKSRDtWpYcIJxC8tIYpcIzWXmFppfZFQPqCxxN8yqxAGfUzlwRJgVphTGIu%2B0hM%2BGmMQmu6KZkA3e1%2FihpohSm2Py%2BR5fKVm8VYNM2JrXb0jApwjJzm5SNwvnLhlTxfv5mX0DgaOlRSfJAsyjLZznl5%2FZnv8t9%2FyXq3ENH9odhI3i2%2BHmM9&X-Amz-Signature=b3840ae9b37221266cb544f91aba66f436f4225946e9ead678c1b133efdbb188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQKO5SGG%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtUVBC1UX7Xe7LemYiM9%2Bx10avXBYIOjGhFWte8OS9KAIhANmnsTxHeMJhb7KxqIhu032jRSqrG95c7zSszaA1yTd6KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXVCHRO7hsrVB6GCYq3AN7hTCyQSENTgUgV%2BSFDkXEDk5MS2eNmN9CRXMO9WsPBxjydLfCPn2%2BECdA%2Bcyr0UxIQz26awcbofItEh8xngVjLu5ddQmoZp7jL9gl8S6JXHICq7zHNQfd06yDmLol1u%2F1MiCzWMvKRTKhDn6vzK9ExKEZFsv7GOlcg3Ax9F1ystQ1ztkfLPvmIm0D7a8VKm%2BMfO8FJEE%2FJxSObI3toRdA5ZQCyZCzHRV7nmR35FZKKrARdJ5QNkpy6zASg5Jh1utHT%2BoekcWYmXYKN2UUsG6u9tuE0QpmxAeb9V2BnAFWDbpWM076XQNw0tLpXCF%2FqEnKKjn2zJphEcUEPHRSIMeTw9AzXR8s3P0Fg2xug9piXKe3INO%2FPg3tmtoIH9WlUMvL3wM9ymH%2BGYOXNUKoiVTV92K0Xg%2FIBdHGr4sxKISnWF4jICM94Ih1rmm5lnIMWhXWKIofsTNRda%2B0v%2BM3Mm6PoSK40aVYiHe7B5wc0pqL3qg2AqZ7JamswIr%2BOj1xdGG0VNhvjeWnT5brKC3ai65BRJ1APMsjHBSkdS8qDMBYp09h2cjVB5Hluozky76Wod0r7dt1xUe4v2GcmMyZiuitt%2FjywC%2BBnkRApnmN38d%2BNIzZXoh7OOM8a2qsdjCOpIHLBjqkAZKezjTwNCdPlmgcO6%2FDU1JdqJOmMIy1rt6r7vfImt9GYqsehwRm%2F2UbiadFXB6ySEAklZnK5N4wNBSCcjJMFnMcuy1cuLyyW%2FUYRyWkve5me%2BTW9uzDRri9OLCtxfiRRHDu6OlbjWVkvQmNupupEgdzLBV6tUbWDV5HU0%2FoHIqFEuohaC8T8ov2CAIy4WVEeq4Go00fDW91RxXejWfWKbUqt8a6&X-Amz-Signature=066239d6820d791804005cc09e41c1e1591c9f970669a0acd0d273f08a28e579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQKO5SGG%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtUVBC1UX7Xe7LemYiM9%2Bx10avXBYIOjGhFWte8OS9KAIhANmnsTxHeMJhb7KxqIhu032jRSqrG95c7zSszaA1yTd6KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXVCHRO7hsrVB6GCYq3AN7hTCyQSENTgUgV%2BSFDkXEDk5MS2eNmN9CRXMO9WsPBxjydLfCPn2%2BECdA%2Bcyr0UxIQz26awcbofItEh8xngVjLu5ddQmoZp7jL9gl8S6JXHICq7zHNQfd06yDmLol1u%2F1MiCzWMvKRTKhDn6vzK9ExKEZFsv7GOlcg3Ax9F1ystQ1ztkfLPvmIm0D7a8VKm%2BMfO8FJEE%2FJxSObI3toRdA5ZQCyZCzHRV7nmR35FZKKrARdJ5QNkpy6zASg5Jh1utHT%2BoekcWYmXYKN2UUsG6u9tuE0QpmxAeb9V2BnAFWDbpWM076XQNw0tLpXCF%2FqEnKKjn2zJphEcUEPHRSIMeTw9AzXR8s3P0Fg2xug9piXKe3INO%2FPg3tmtoIH9WlUMvL3wM9ymH%2BGYOXNUKoiVTV92K0Xg%2FIBdHGr4sxKISnWF4jICM94Ih1rmm5lnIMWhXWKIofsTNRda%2B0v%2BM3Mm6PoSK40aVYiHe7B5wc0pqL3qg2AqZ7JamswIr%2BOj1xdGG0VNhvjeWnT5brKC3ai65BRJ1APMsjHBSkdS8qDMBYp09h2cjVB5Hluozky76Wod0r7dt1xUe4v2GcmMyZiuitt%2FjywC%2BBnkRApnmN38d%2BNIzZXoh7OOM8a2qsdjCOpIHLBjqkAZKezjTwNCdPlmgcO6%2FDU1JdqJOmMIy1rt6r7vfImt9GYqsehwRm%2F2UbiadFXB6ySEAklZnK5N4wNBSCcjJMFnMcuy1cuLyyW%2FUYRyWkve5me%2BTW9uzDRri9OLCtxfiRRHDu6OlbjWVkvQmNupupEgdzLBV6tUbWDV5HU0%2FoHIqFEuohaC8T8ov2CAIy4WVEeq4Go00fDW91RxXejWfWKbUqt8a6&X-Amz-Signature=8d1bf926d98b30e805c16327a9868487bebc32e8d27735963f4f47178f16263a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGRU7ILA%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICS%2BJIJcF2PERzoyvAhQblW4W34gCf5oSWX2L6kg7TycAiEAoU3k4AnocTEAcBA4Qzd73kyRwxh6UTG8s7smSGBmEokqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0QZni1%2FcOuZdasLircA81CQ74hTu2hboSPCpvMG6zqFufrzdF7mK2O4TxUjvq1UuW64Mb39gla0N5%2BB7ZPr7ty5HqltG4lfTjom6mGLSbINKW4dHH2sTXhUha6SNDjZBZZ5pi3Z1O5P3WyaQQawcs8sdIhPOICynIK9BnhAGDDdsJ407WTnLGdO1nUxmba2Io1xTYMobZZb5mvhk0MHEDNux6%2BM25ariINv7PD5yxhDZXCK7haTBPjRbDDlaq%2Bpgi5B5Qi1XdHzr4Kj3l%2FWBT7x47xcKs7XmlGcbBjn40PeVyZ5fj8BkbwwzykasBIbMqAur7pICL7QjR9NWwU66UA9CnnY8MteMUi62ihLkc7UBU5gQWyxeHRTdkwgrSlG%2BoPFXKvta65jO713Zn%2Bgc6RW%2BRPT01zvPxYuykOpJm9D7TFwuqpH%2BF4doST56VJas3ohab%2BH%2BQT6KTjGWZ0hyj22Qc4BkhSPjoplXEltV4iXQHuBzG0CtIn%2B5fUjR1l9X24iLmW1AbnpEE9TgEw%2Fz1DLgy4LucY8to1hRUuNsha5lvuExITNBawCW2n2566y4p8EinVwgBXXpaTlIt%2BZCSVHipYPgwqltBhWGu0j2i7ML3YMx0TO8FfW1KE3Erf5xcid%2Fu5dKe2EANnMNukgcsGOqUBysibq%2F%2BpoRFEObWmi7xvcjuaNCZkaQiz869evZ0y8s7Pw0pzxm0bBJY3vueRkQi0FemMab110KeOKuzg%2Fx6z00kikF4sDujgFZPvAFGD8w0Gn22lzYf%2FgYfdt6XIi4P70mDwz6J5kM%2Brk3dfIsbOvqTNN8BU7m1eAqykUm37Ldc26QLWAJ5%2F6zlOtUUPC2xIvN0KjaIEXNO%2BLEs0Em6hPX6m%2B9rf&X-Amz-Signature=f679f197242ad9d91f5f621b4d11e348279eb9814e09b606b9b5357f9e599b69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

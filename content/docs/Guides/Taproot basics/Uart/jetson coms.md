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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJKLT6GM%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIG54MLy4SkWllijY%2FJaZwmuMQbwWHzIQ8Ak%2Bcg15citJAiEAmeMeSPGuWmvReh2Ic6%2B8dg7bKBpRh531US0CPvEfZXsqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPazejB6LAgRVB%2FwyircA%2BND3TOw3SaLifEytDb4lw5EeemwHa8TO4oZlb%2B%2BpdZl7fkxm0oaNAW2kjgB%2FM8tSO8urRcBC6nc%2BV9yd0%2FKfrKsYPIRODY37v8cjnCWKiFtCWJ4BtLdM4IIW4%2FFg6pKglexKp6VF%2BwLjIF%2BWTa%2Fe66a9VqN3cYjMrYrJYoQnpY7T7PYVRX6qpDwy%2F%2FOB6bnefOhon2A8Kt2dhFn4OI8MjTlk0uiMs%2BotJI5WhJzMptksDyEreWEuDsT15ELRSgrHLkjrGAH6LFpdOvhSIUWnN2%2F4lyg%2FtEYSkgnIxsLs2Gwbw8PSFun5Ssx9KJHXcdLBZcY4bM2v8xU3hTzpvJq8z1wYH0Bi4Ev6iPhTQmL9GuHeMJpIIil3YC0upxznccz9Ki4TpjbARQ3h6hmBGMNSqafNaHefo5tKA5xoYpxg1sjMc570ghsDl6q0esa8IC2Z%2BXanVHaKe%2F5PU5nGkpCVE1BWXYsom%2Byzqab8GugqBAg%2BcXk9LefOANFXCFlrvXtOfC2oIGpcUQRyWXQLAOsy%2FyoGfpTvFjoOgdoxKENCYwXS%2FY1OOMESxZk4UZehiQSlJpgeLwMymG8S23C%2F3wheAK%2F6TG7NSziQKWCLK9D2CAbx2NImwufwUeq0wniMJr2isgGOqUBqNllqc0sthr2CO1sulVEbDSKRvPyTpcgLj6Twp48DxgxKzObAs3PDAjRlpu3qHAk4PdryCE2PIUcGOJUFQxnx9fi6t23QZvLVkJhE7HgvDfbuuDfZlyezO%2B%2BI6zz3SeOpUjI7ZgYzqIUvHdqZ3w6y%2F8CD8tckWOJQN%2BrsQ2R%2BgIubHSNjgZWn5vMFlKrvPDzlK2QGYtLJ2j5FhaxOfnNknO7ntdO&X-Amz-Signature=2d4d3fd816070bb6429407f3e8eefdb9c0dcd7ac9e29d497561109d1e9445313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75B6VNU%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBeak2B1s%2FG56lLE%2FntIv2uwzZO3heV7an9O0Jss2WIwAiEAoNqYcfS0uCyFawMveaq5tfGJpZivoeUd84hm0S63kD0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqpPl6u0NSAzn45KCrcA%2B28M3l2A8cKS4e6lRCv0og740fDnDiX1oFNSPiee31PHdDRQGmpyYVUOjIG1wBZHZj6Cdm84etjE4GDTmndfrok1Csx%2FQIu1fgm3GwhoXu8dY0a7g7MxglpmzU4jtZtkhlvx1OQRjE7%2FuF%2FLUx3B5Q8IePn6SEI9KrI5hIFBqo2oL8MEWxXervDROE%2Bq5q0X%2FXII56jBBhXwgCudyiTq15uwdomuv8bR%2FN7dQwdu6IpL%2FWMvWRM4EDlV8pbBREC0TRplrdleD7grbT3cGxx23aQmr1RZih3oF%2Fs2nm0Y7tg%2Fne7NWGjGzYaWEiOAhkEKajyDXe5lmjBkjo%2FZKWmW9cIW%2FdJsfzJ9B1xzNci0dd%2BWgA%2FMyCpRIj6GHTS8SLQofn1hnQWCuuIL7qj0yyTW03m%2BRNhHBRDJeuxyheHsgkk8t1rxxsmg4FBmzyXMQBPT%2BIS4SKrl6dH6PFvUqXR%2Bze1jX7KU36zigupNQQ6aTAVDf%2Bv6RJNlslW%2Fy0tYcJLlJU5Q4yacRjDykJ%2FZ5I00g%2BQI58zwSTIfr0uawX%2BDxUq89PxQT0BghE%2FG%2FUbgYohUxZBCjMgu4c7OPD2YDzf%2FftQ6Zmu2P40HGsLe027AqpDjwpP8%2B%2FrlQgeh%2Bw0MJT2isgGOqUBzlS23gwwtIq5tTq7wt%2Fr1clHqTvqhUHg2p3wuTJzfFSUOv22jSuFUbmmqOz7EbiKfPbhSuIKlNj9PYTfBb6ffJa8sHOiyD4MlOfCmdpQf%2FP8IAsu2Smo0fmDuQiEMZUfSTAdfK2p6lhwNAvirGbePjqvUBs3mkYKNx2W1f3nFS2Ko9AMwwUHUkGGaP5sI7%2BeHp32rjKUDJmNqQpgA61sELZjW%2FdY&X-Amz-Signature=a34372a3568d3642c6581fe71d36c8ea322d1f86110b1d7f42b43e264d5724e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4VYP7P4%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIGDKy3UOhYakupkdwI4dfopaL9SR5%2Fv%2Fx4Ul9NY%2FwhqJAiEA3FDjQXQ1KeIB7nuRxH48bv8bdc8PiQWmsEID8XKmJP4qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpQiVPQ7qH5IwGN%2FyrcAyzy%2FJ6uSHFBO%2F32rNK3v8esnKCeCvqLj%2F%2B43fmLRla01BW2W2RSW62psWAlSqg4u5v%2FlgD9cQZmZUQlyHzo4aot4ggWdg%2B31tzScPoE7EZdKsqgA%2BYFexa5pFEh55iDkJxxsY5V5APkZNlPayELVPclibW5snQjmOao7xdbYKDxKQByCibtEyy9ZJT%2F9SJEag%2BheedgbzYYkgQz0YdtAL%2B5JTwK3IqWGepV94ILqGXmXXoq1nBco5oRolMJzZfw%2FQz9E2sHFB4eZf0qTTRlBRs907jzIZPZG6R7CybvEaQOnkjymjrkwbffcVmBUA1LL3dvo1IiVdZLccUerItdrQg%2BHv%2BgrI25i6JRpnR1Yrx2Txf6r64%2FdvXSrxPGEawPJ77Qy1xVexXtOutUFUJO0n1xqG8zK9V3mQjho%2FFIsjEtr39dZEzvJWLT4T1iZr8h22BQh%2B1TwkE6sfz9vsiouO0OrpQrfKTvC2lGJvQSX4uWpIkH2Hvcd%2BXMaaB7Um0EVSD%2BTDsVUH8%2F082sJR6oMZRpNXQf26ZpMtlh%2BhkyDoawCa7pTblatjizzw0Nq%2Bjk1zpQYYR0fskbta0ud4kOSGGl3rqUuGCe8IM1NBVG6E0PVxepLDWRs7iNJUI9MKH1isgGOqUBaq2QMokHfRT3I3RuWksD9N9r%2B3NrjRNKuMi3jKdEmLifp2mf0SJuae1zlFfkG%2BV1C1SoYogVyuL21phrcq16W86e4dpyx%2FTvfXWl1h1ByGDydZOf8UBRlcG8fPRyKljZ7zzu1iD9U%2BSFS97X2wYItH5hVdQF7K8OC8wYQK6GhHuq3WQb7qcLYCRtznWku504e8Uxqjh3bdiS7y%2Ff6rwR8LvtTZAy&X-Amz-Signature=b0e6a005db83599bd01f14fe28ce8778d7a876156f2056669de44b8ea91339f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4VYP7P4%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIGDKy3UOhYakupkdwI4dfopaL9SR5%2Fv%2Fx4Ul9NY%2FwhqJAiEA3FDjQXQ1KeIB7nuRxH48bv8bdc8PiQWmsEID8XKmJP4qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpQiVPQ7qH5IwGN%2FyrcAyzy%2FJ6uSHFBO%2F32rNK3v8esnKCeCvqLj%2F%2B43fmLRla01BW2W2RSW62psWAlSqg4u5v%2FlgD9cQZmZUQlyHzo4aot4ggWdg%2B31tzScPoE7EZdKsqgA%2BYFexa5pFEh55iDkJxxsY5V5APkZNlPayELVPclibW5snQjmOao7xdbYKDxKQByCibtEyy9ZJT%2F9SJEag%2BheedgbzYYkgQz0YdtAL%2B5JTwK3IqWGepV94ILqGXmXXoq1nBco5oRolMJzZfw%2FQz9E2sHFB4eZf0qTTRlBRs907jzIZPZG6R7CybvEaQOnkjymjrkwbffcVmBUA1LL3dvo1IiVdZLccUerItdrQg%2BHv%2BgrI25i6JRpnR1Yrx2Txf6r64%2FdvXSrxPGEawPJ77Qy1xVexXtOutUFUJO0n1xqG8zK9V3mQjho%2FFIsjEtr39dZEzvJWLT4T1iZr8h22BQh%2B1TwkE6sfz9vsiouO0OrpQrfKTvC2lGJvQSX4uWpIkH2Hvcd%2BXMaaB7Um0EVSD%2BTDsVUH8%2F082sJR6oMZRpNXQf26ZpMtlh%2BhkyDoawCa7pTblatjizzw0Nq%2Bjk1zpQYYR0fskbta0ud4kOSGGl3rqUuGCe8IM1NBVG6E0PVxepLDWRs7iNJUI9MKH1isgGOqUBaq2QMokHfRT3I3RuWksD9N9r%2B3NrjRNKuMi3jKdEmLifp2mf0SJuae1zlFfkG%2BV1C1SoYogVyuL21phrcq16W86e4dpyx%2FTvfXWl1h1ByGDydZOf8UBRlcG8fPRyKljZ7zzu1iD9U%2BSFS97X2wYItH5hVdQF7K8OC8wYQK6GhHuq3WQb7qcLYCRtznWku504e8Uxqjh3bdiS7y%2Ff6rwR8LvtTZAy&X-Amz-Signature=c5828cae87eca5b8375c49c23722280c6dcb30bf143514fc7a703ec22513c301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75B6VNU%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBeak2B1s%2FG56lLE%2FntIv2uwzZO3heV7an9O0Jss2WIwAiEAoNqYcfS0uCyFawMveaq5tfGJpZivoeUd84hm0S63kD0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqpPl6u0NSAzn45KCrcA%2B28M3l2A8cKS4e6lRCv0og740fDnDiX1oFNSPiee31PHdDRQGmpyYVUOjIG1wBZHZj6Cdm84etjE4GDTmndfrok1Csx%2FQIu1fgm3GwhoXu8dY0a7g7MxglpmzU4jtZtkhlvx1OQRjE7%2FuF%2FLUx3B5Q8IePn6SEI9KrI5hIFBqo2oL8MEWxXervDROE%2Bq5q0X%2FXII56jBBhXwgCudyiTq15uwdomuv8bR%2FN7dQwdu6IpL%2FWMvWRM4EDlV8pbBREC0TRplrdleD7grbT3cGxx23aQmr1RZih3oF%2Fs2nm0Y7tg%2Fne7NWGjGzYaWEiOAhkEKajyDXe5lmjBkjo%2FZKWmW9cIW%2FdJsfzJ9B1xzNci0dd%2BWgA%2FMyCpRIj6GHTS8SLQofn1hnQWCuuIL7qj0yyTW03m%2BRNhHBRDJeuxyheHsgkk8t1rxxsmg4FBmzyXMQBPT%2BIS4SKrl6dH6PFvUqXR%2Bze1jX7KU36zigupNQQ6aTAVDf%2Bv6RJNlslW%2Fy0tYcJLlJU5Q4yacRjDykJ%2FZ5I00g%2BQI58zwSTIfr0uawX%2BDxUq89PxQT0BghE%2FG%2FUbgYohUxZBCjMgu4c7OPD2YDzf%2FftQ6Zmu2P40HGsLe027AqpDjwpP8%2B%2FrlQgeh%2Bw0MJT2isgGOqUBzlS23gwwtIq5tTq7wt%2Fr1clHqTvqhUHg2p3wuTJzfFSUOv22jSuFUbmmqOz7EbiKfPbhSuIKlNj9PYTfBb6ffJa8sHOiyD4MlOfCmdpQf%2FP8IAsu2Smo0fmDuQiEMZUfSTAdfK2p6lhwNAvirGbePjqvUBs3mkYKNx2W1f3nFS2Ko9AMwwUHUkGGaP5sI7%2BeHp32rjKUDJmNqQpgA61sELZjW%2FdY&X-Amz-Signature=b7df5c179a7b1318289d9b2e96c29fdb3070021bc61664986c3fcdd0d0898a9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75B6VNU%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBeak2B1s%2FG56lLE%2FntIv2uwzZO3heV7an9O0Jss2WIwAiEAoNqYcfS0uCyFawMveaq5tfGJpZivoeUd84hm0S63kD0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqpPl6u0NSAzn45KCrcA%2B28M3l2A8cKS4e6lRCv0og740fDnDiX1oFNSPiee31PHdDRQGmpyYVUOjIG1wBZHZj6Cdm84etjE4GDTmndfrok1Csx%2FQIu1fgm3GwhoXu8dY0a7g7MxglpmzU4jtZtkhlvx1OQRjE7%2FuF%2FLUx3B5Q8IePn6SEI9KrI5hIFBqo2oL8MEWxXervDROE%2Bq5q0X%2FXII56jBBhXwgCudyiTq15uwdomuv8bR%2FN7dQwdu6IpL%2FWMvWRM4EDlV8pbBREC0TRplrdleD7grbT3cGxx23aQmr1RZih3oF%2Fs2nm0Y7tg%2Fne7NWGjGzYaWEiOAhkEKajyDXe5lmjBkjo%2FZKWmW9cIW%2FdJsfzJ9B1xzNci0dd%2BWgA%2FMyCpRIj6GHTS8SLQofn1hnQWCuuIL7qj0yyTW03m%2BRNhHBRDJeuxyheHsgkk8t1rxxsmg4FBmzyXMQBPT%2BIS4SKrl6dH6PFvUqXR%2Bze1jX7KU36zigupNQQ6aTAVDf%2Bv6RJNlslW%2Fy0tYcJLlJU5Q4yacRjDykJ%2FZ5I00g%2BQI58zwSTIfr0uawX%2BDxUq89PxQT0BghE%2FG%2FUbgYohUxZBCjMgu4c7OPD2YDzf%2FftQ6Zmu2P40HGsLe027AqpDjwpP8%2B%2FrlQgeh%2Bw0MJT2isgGOqUBzlS23gwwtIq5tTq7wt%2Fr1clHqTvqhUHg2p3wuTJzfFSUOv22jSuFUbmmqOz7EbiKfPbhSuIKlNj9PYTfBb6ffJa8sHOiyD4MlOfCmdpQf%2FP8IAsu2Smo0fmDuQiEMZUfSTAdfK2p6lhwNAvirGbePjqvUBs3mkYKNx2W1f3nFS2Ko9AMwwUHUkGGaP5sI7%2BeHp32rjKUDJmNqQpgA61sELZjW%2FdY&X-Amz-Signature=76ec636c8d0ad98c979b31fac214bebbd5d59e4d29c19b4e281062e96870ee5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS7RVGK3%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIAIKUKmUFPu1s3tLaAjh4ojcfZRkrBRPuh7wtaQsyIZQAiAezNfQJvStzHmr1ohOPt5x6NTetKiFaycpYqy0ZqsqviqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR8EzawltyNLSG%2FpyKtwDkWI%2F%2FnoGwMxCgHq2p%2FXUcpm1m9ISAXK4N7Jts1vGmit8C3PEr87CbCzjGa%2FOuGlE93PPBTizpybfU8c50z2im53X6tY1MOW1dpNVSSrDleuISSqwjLIr36Fjzt86PiODH7kUviF52ANOj3EqOxlLHd33HaMxM7KTHAd2jQJJuTN3WjcFWC%2BC9V1Dqq0GxYlkhfZyw7oXBMQPTC33nzXvWFuAxIniJOkX4i5njCEQjipP0WdHO%2BcjPQZZLuvConb1JNTEyAS0JP7rbC27d47L5OVqOZg5Ifyaf8O%2Fwq1yw59CDqbbis9rDGswNbibT%2B%2FnA%2FVZD9RC%2FiNNDiWfVmRaosAYdfCsYxfiaQYcQNBSWrnTAb%2BBWBXCu%2FRpXsro9R6mzrBHsYzOXRnARaV3VOP6JVvlU7qN9NKKpWB4KiW01KHDYCPZZjicn5ZGNAbmPf%2BNz1dgCeyIAFNDU2sg33a0LuY%2FgSbW8s3wrOxw2YSL2ZGBIDCQHFVokvlXCIXGzBwlM%2BwpB2zmED4uy%2B5haocQqGVOE8LLRUAH%2Bhkb0vIewEvUVsehn%2BfumYXpeaVlsRQAWnImrE0ubmxGWEIqy8OxWzgqSNFeEt9TmymkmWrg2reydmQIFwjehDl90lcwhfaKyAY6pgFJ5BrasqYZ7WSDXxYgfubjcm%2BSQIGq141HM%2FcM8R0VfiHv2EFFJxbGFb9nbkqjPkpfSMmwWsismHoOqCx1X78gOs6X165qC6uXGvkNu6gniRmo2p9uVfNCgNI0%2FQ6e0N27gkgo3g59NqC4vWeJZQLTEWiagymtrkkPS7b7EFXOGUFenBC0eOmfnBhRxa1dys7J1uD0MGeDb9mih%2F0uLUTzqYlFdj%2FF&X-Amz-Signature=709d8308e3bcfa442a4f67bca6a8b5c7287c2e4ae4156f2b00e2332fe5cc4767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHD6FC3W%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1zRwdy4KvJyCV%2BFCpE1JoYpPiWGp2MZPGy1dE38A6PAiEAvE94lBaUtJ1g5GIgsaNCZB3qCESIqpHYxywRVCNpdqwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8R6JZhAvqfiy7%2FUCrcA2aKLEcqJs4rynM5ibfXmjn3OFDLSNgXUowzw9uB1jhOOqhheFn6KcEFCByS2UnLu6AiV%2BB1W4fs8zjBU7UykLn4G0CoWBNacr8bQLPip%2F7I10KuXu2Vv5d6V6ock0RTOi6gFlxU3JbSemh6%2BPi8LwJngzv5ZC9y0VVKBEZi8AI7SrjCRM3G%2Bj3fnD8ICGifbZKGYdKOVGwkjjPQv46hE311GHoE3oogkFCZfJcSZMDSk8AOY%2FUoB%2BjgJ8JnVco1gybrBSTJr0lfRAofAtmqcnYYl6w%2FS4lDcNyl%2BatKrrdtzn%2F9wf6sgedgzLUaMFjIEH14mXSS3ttDw%2Bg1qzQy2mbXRLfRimNOWOsmhJt0tNtuuioebVcRQpb3%2BX8AyIncq94GPLZ%2B03tEbKf9cLY9AXauN65tSIyNVKBfI2PnYimJzVGACj6UsN67webc4IVrcbVkzHLkLFZnGYdqoZ01OEABRFCqGq%2FczkUCf0Wmfnd3KInr2llqTReqJ0AVQGGCNDiRUFV4Q0dmIKvW9%2BoEpZkM5r2E%2BZEY3aJuAH9r2FDEWZInlSaOpDrfhmnW4lDbz5U3LWo0%2FwDY2tNBqCMI7kQYgwNXI75ZcuVufJCcrjrOCLDmQWoFQj9Nvg3uMN3g6cgGOqUBj%2BiBK6sAXmoPVqKwHXg%2Bv0R%2F2mN7DUkKtj%2FfDbfBbuD6M9Vi22qwHNHVi7BtCIpxGiOCwuP4DXXyTMe71JoVxQfItOixB9bjFBdcJ38k8MILT%2FurS7HctMYPX0nAy5i1zuwnEuWtk%2BRJHLP2qTjJ%2BGMom%2FcXolj3R2eq356CgVfTX35APLl1EQg3qshCsDldgQ8i7u8a1uCSIAY8UNWn0E%2BTq0RR&X-Amz-Signature=096dfcb94a57e7b78453786f87d052c619872fd74671daf7e3099c9a7fa8ef15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCXR76A%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ21uJLukBcooqxo1Pm2Wux3knEA65opF1C6%2F6aMgupQIgckreuS7ABkOxTWpntZ4HaSh1qCdteq3L0pz%2Frra9D%2B0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0dncN3nJdj7LgcJSrcA8stSsHdFhB4zNDLGBElvThoukRvzLBudDIAvfgtw0dGGoQAO0uk6ftUwJv3rI2uqoRH6FtkZD9ONxZZD6GqNZhCpTmlN4RyibjnNkNW60XpiExfEbJVa4wWETPyrDN3%2BmWUnEH8wBnlYCGGtl%2Bg6mt17DZ6hbM717UqvF4xdl9DCrzfHb7w2YGiwb9gW5hBaHyqz3l3vGISrC8Dad0wubG4TotjQBFkE3KH43mJ2SKW8NfzOXOr4Kjl9Xr1DvYBJxTgZraNjSha4%2FMiOUxPevTdzuZeJUaP8%2Fl5HmdmMEUb0ddw0gAaS4QmW91Ls9isxJMWEsrHGMKQnw4XC4GWimM0yfjPXyz0Ll2awpR3hHIyCDRwsp3o9QGQjKWHko7bCnCfGvLmHrS%2BA7177GIidaS1oZQ8Tvvz1ftmNT5r1Lts%2F4edw09LwCTQx0QakED%2FlAJpqz7F0TWdpW2l8SI5bjV%2BwI5ShVwi1Stlx4WB%2FuCWpEKPiDAm0VRhh%2BGsIUiIlOrIqUd9OJ0r0CzG68bAfiQ2qIolG%2BziPyCIcv3TNtU%2FuKZPT13TMpP27C3JEGgYyBow0k4CHAiUkG4YPM%2FPZiWQTIiyteR01Jz%2FyPoG6bJVmgUCX7aNtmooR3sBMK%2Fh6cgGOqUBFJUtzCA5B1CKC%2B9uKPWR38G6EY2Ee9mTPYMV4Och29wizx%2BNMJdbGqp7SMlb9Kj9QT3PvvX7S8Vc0ADFA2tHtGd0BhcJdLniYrvE2vMoO66LZbTzneU%2FNQ8N46GT2MLvFyZepETJpPQLudaydh1m7%2Frmw5zba0S14TXvq369BXLC0nQbHmKfcDF%2BVl27XS1L1uk5aA0%2BQLFuznIoUV3XkJe8peNV&X-Amz-Signature=01b62fcda4a32be2a1a5ed83681d68b6a3ed96a0e5a8020c7391aa234c030283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BGON376%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdCw9VmlNjzGp6Xfz10hqu%2BCgUDPtThkJ2nGrHggz%2FeAiEAqd%2F6yyTXtCq80BmdAraqXhzHGn%2BKByThqX0kI1WV6fcqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCjk7cre%2FWrmhgIYCrcA8b3KdyVw89M61ABJn6E4u0CQgFrUMs5W9oBATzL0dBMyFBiIAxFIG0jIXR8hESP9haLlBf3VbPEZt7S7pxFMqsQJNOCUoj7dMaGJyBLpa6uWmHuiCDzYlT79rfSG7F%2FX3S8%2BOM6ySrlwc%2BVzgCvtuHsW%2Fa%2B%2BzHqvZb5%2Fl5yMhAXBlLHpVNCWOGlL3swBCBX4AV%2BpxOO2vXrqxWmfiAEpzXjlaSJh3h%2FESJKkQ7cWHRncSlHEGrThZIQssqjn2jd0AmqXgPCL%2BZmiCFJgwdiIhXrPJMFhNYesl8LpnSI%2Bz8bykkKgyGpmyRIwpxPkINeT5mAf2zr7pwi%2FmVTdW%2FwWjIp7l%2BKCEY8QXP4CjrXSJZGCxOkCICeea71zHLpJ03yxKMGiCjv%2Bqi48sLCsnXJWCcrSDtcFHhnvyVNXwxgpXSn0CHTogSYFCuhXQkb4%2B7oaSnobvI%2F2vlMo40LNIbHQwm21yGrtjJ5fFOnGIPKCZapp1fd2xbs3bgF6ANM0oi2pZFuaaNXNkBm9M7zsq4qnCqw8nC2u%2FmHKEmcn%2Bjnxobc2UaG34PZ4BY1vwQO5mRiRPuTPadsUB4OjPOu8HF2vX%2FfTYu6BXoEUg4GUtLW0l%2FbWVL5DA6WM%2FoOnhzvMNLg6cgGOqUBDd4E%2FwWwuUMD3%2FCV6N25ihBm7mPw5VXz%2B3Ec0g9ra%2BM%2B8u3j2NBmgfJ2gxZF%2BNViceKJJgZU0v%2BpNwWxHyV23BGbfXeP1xcWf3q507%2F55n%2FZW0nFFJGYnCbzTd5mKpLWYLboZIgWoaEHwN%2Fz4X0Rlhv0QpnXEbyC0u6dLa2oX7VKZpT5wTG%2FjkA%2FYaenic3z9MPPK1WrPWoJkVVR1Y5NQ4DqpNmk&X-Amz-Signature=c92d63bd156ea4ad0349b92acc2778e474f746c06a4f59ac118e90708c9e6dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BGON376%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdCw9VmlNjzGp6Xfz10hqu%2BCgUDPtThkJ2nGrHggz%2FeAiEAqd%2F6yyTXtCq80BmdAraqXhzHGn%2BKByThqX0kI1WV6fcqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCjk7cre%2FWrmhgIYCrcA8b3KdyVw89M61ABJn6E4u0CQgFrUMs5W9oBATzL0dBMyFBiIAxFIG0jIXR8hESP9haLlBf3VbPEZt7S7pxFMqsQJNOCUoj7dMaGJyBLpa6uWmHuiCDzYlT79rfSG7F%2FX3S8%2BOM6ySrlwc%2BVzgCvtuHsW%2Fa%2B%2BzHqvZb5%2Fl5yMhAXBlLHpVNCWOGlL3swBCBX4AV%2BpxOO2vXrqxWmfiAEpzXjlaSJh3h%2FESJKkQ7cWHRncSlHEGrThZIQssqjn2jd0AmqXgPCL%2BZmiCFJgwdiIhXrPJMFhNYesl8LpnSI%2Bz8bykkKgyGpmyRIwpxPkINeT5mAf2zr7pwi%2FmVTdW%2FwWjIp7l%2BKCEY8QXP4CjrXSJZGCxOkCICeea71zHLpJ03yxKMGiCjv%2Bqi48sLCsnXJWCcrSDtcFHhnvyVNXwxgpXSn0CHTogSYFCuhXQkb4%2B7oaSnobvI%2F2vlMo40LNIbHQwm21yGrtjJ5fFOnGIPKCZapp1fd2xbs3bgF6ANM0oi2pZFuaaNXNkBm9M7zsq4qnCqw8nC2u%2FmHKEmcn%2Bjnxobc2UaG34PZ4BY1vwQO5mRiRPuTPadsUB4OjPOu8HF2vX%2FfTYu6BXoEUg4GUtLW0l%2FbWVL5DA6WM%2FoOnhzvMNLg6cgGOqUBDd4E%2FwWwuUMD3%2FCV6N25ihBm7mPw5VXz%2B3Ec0g9ra%2BM%2B8u3j2NBmgfJ2gxZF%2BNViceKJJgZU0v%2BpNwWxHyV23BGbfXeP1xcWf3q507%2F55n%2FZW0nFFJGYnCbzTd5mKpLWYLboZIgWoaEHwN%2Fz4X0Rlhv0QpnXEbyC0u6dLa2oX7VKZpT5wTG%2FjkA%2FYaenic3z9MPPK1WrPWoJkVVR1Y5NQ4DqpNmk&X-Amz-Signature=7e409314af338f4a5890f39812519d319546324d654c5389bfffcde6899c8ec3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCXR76A%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ21uJLukBcooqxo1Pm2Wux3knEA65opF1C6%2F6aMgupQIgckreuS7ABkOxTWpntZ4HaSh1qCdteq3L0pz%2Frra9D%2B0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0dncN3nJdj7LgcJSrcA8stSsHdFhB4zNDLGBElvThoukRvzLBudDIAvfgtw0dGGoQAO0uk6ftUwJv3rI2uqoRH6FtkZD9ONxZZD6GqNZhCpTmlN4RyibjnNkNW60XpiExfEbJVa4wWETPyrDN3%2BmWUnEH8wBnlYCGGtl%2Bg6mt17DZ6hbM717UqvF4xdl9DCrzfHb7w2YGiwb9gW5hBaHyqz3l3vGISrC8Dad0wubG4TotjQBFkE3KH43mJ2SKW8NfzOXOr4Kjl9Xr1DvYBJxTgZraNjSha4%2FMiOUxPevTdzuZeJUaP8%2Fl5HmdmMEUb0ddw0gAaS4QmW91Ls9isxJMWEsrHGMKQnw4XC4GWimM0yfjPXyz0Ll2awpR3hHIyCDRwsp3o9QGQjKWHko7bCnCfGvLmHrS%2BA7177GIidaS1oZQ8Tvvz1ftmNT5r1Lts%2F4edw09LwCTQx0QakED%2FlAJpqz7F0TWdpW2l8SI5bjV%2BwI5ShVwi1Stlx4WB%2FuCWpEKPiDAm0VRhh%2BGsIUiIlOrIqUd9OJ0r0CzG68bAfiQ2qIolG%2BziPyCIcv3TNtU%2FuKZPT13TMpP27C3JEGgYyBow0k4CHAiUkG4YPM%2FPZiWQTIiyteR01Jz%2FyPoG6bJVmgUCX7aNtmooR3sBMK%2Fh6cgGOqUBFJUtzCA5B1CKC%2B9uKPWR38G6EY2Ee9mTPYMV4Och29wizx%2BNMJdbGqp7SMlb9Kj9QT3PvvX7S8Vc0ADFA2tHtGd0BhcJdLniYrvE2vMoO66LZbTzneU%2FNQ8N46GT2MLvFyZepETJpPQLudaydh1m7%2Frmw5zba0S14TXvq369BXLC0nQbHmKfcDF%2BVl27XS1L1uk5aA0%2BQLFuznIoUV3XkJe8peNV&X-Amz-Signature=570b15960a695c3e09ce264388e7133c39fec8e7d8e968a0340ca6872ccfa808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCXR76A%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ21uJLukBcooqxo1Pm2Wux3knEA65opF1C6%2F6aMgupQIgckreuS7ABkOxTWpntZ4HaSh1qCdteq3L0pz%2Frra9D%2B0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0dncN3nJdj7LgcJSrcA8stSsHdFhB4zNDLGBElvThoukRvzLBudDIAvfgtw0dGGoQAO0uk6ftUwJv3rI2uqoRH6FtkZD9ONxZZD6GqNZhCpTmlN4RyibjnNkNW60XpiExfEbJVa4wWETPyrDN3%2BmWUnEH8wBnlYCGGtl%2Bg6mt17DZ6hbM717UqvF4xdl9DCrzfHb7w2YGiwb9gW5hBaHyqz3l3vGISrC8Dad0wubG4TotjQBFkE3KH43mJ2SKW8NfzOXOr4Kjl9Xr1DvYBJxTgZraNjSha4%2FMiOUxPevTdzuZeJUaP8%2Fl5HmdmMEUb0ddw0gAaS4QmW91Ls9isxJMWEsrHGMKQnw4XC4GWimM0yfjPXyz0Ll2awpR3hHIyCDRwsp3o9QGQjKWHko7bCnCfGvLmHrS%2BA7177GIidaS1oZQ8Tvvz1ftmNT5r1Lts%2F4edw09LwCTQx0QakED%2FlAJpqz7F0TWdpW2l8SI5bjV%2BwI5ShVwi1Stlx4WB%2FuCWpEKPiDAm0VRhh%2BGsIUiIlOrIqUd9OJ0r0CzG68bAfiQ2qIolG%2BziPyCIcv3TNtU%2FuKZPT13TMpP27C3JEGgYyBow0k4CHAiUkG4YPM%2FPZiWQTIiyteR01Jz%2FyPoG6bJVmgUCX7aNtmooR3sBMK%2Fh6cgGOqUBFJUtzCA5B1CKC%2B9uKPWR38G6EY2Ee9mTPYMV4Och29wizx%2BNMJdbGqp7SMlb9Kj9QT3PvvX7S8Vc0ADFA2tHtGd0BhcJdLniYrvE2vMoO66LZbTzneU%2FNQ8N46GT2MLvFyZepETJpPQLudaydh1m7%2Frmw5zba0S14TXvq369BXLC0nQbHmKfcDF%2BVl27XS1L1uk5aA0%2BQLFuznIoUV3XkJe8peNV&X-Amz-Signature=1eafe0b660daa18d147d7340add4595bb2d800c22e1a0d2c99952ec690ca9094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDBCDTM6%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID56K7xHEgca5OuDfQfTNHMXCuTvWWym0M%2BhfH7%2Bt17NAiBQmiGHq3uGDQGqmH0okJp0M9q7VkmTR%2FSRgigC%2BcXSoyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW4eq1Wl3WjKwUdPnKtwDvtSCYutGhOUDZwY9XKgpVhpuyLG83N5qvN5IaGa0b8Nyf%2B9WBjQRMZRI9gNGEkzQQcsPz%2Bl2Fy%2F8tl504UGHyykto%2BSRbb2drosMJ50YkbMGHq3ZetlEUm4f9347EbHwg4F0uUo5YsFEoYkfQJ1wK6ICvZ9WzU7sC3vXElkKW%2FDS2fx8QVYov9os7dZX95DqJNlp46eKbSoWg561bO%2BOkJFjPD5Xclbu98QAZhDRAdq5EAMHQXlZGbkvv3PR6tO2AUraN9hJ6Dii7vvYjnK6JqRFF%2FHxSKLhTWvQnVThlviqPJGPEZuM3k4nxrxEIcshYNGpRaRLm2h4vHC3eoesTDejJDtki3HUMndteranpnERGkeaxuvrrsVc8MAA%2B9McOL2n%2FKJPBZlNEPCGB25Rmv5mXlBTTgy97g92qiMGfeX7DqQxFkG75A09u1XZkQgNmRRlptdhlyc7ioQfL945AOVu0FilReZi9sJ4naKc8X%2BES8sTsPLQDWL5%2FDExuXNSewC2m2XnfLUks4Yc1fnJFvqg2HJ1KTogPAgVnVLN%2BF2LOYWviUrZcf6tGItTUnQXzPGvccfYypuct%2FBhaHtDJ2kte9WkZcZGtFkBz59cdNF8UJ6prUNVld5cnn0wieHpyAY6pgH2A2yhOP3JuT2T484%2Buab%2B6BDEx%2BfoQbnu5231l%2F1lbZ0OtXLN1pPyS4V56ylyScWxvg9NR1v3XqDX19weqEtuno%2BXMdQqxZAQXMCgZ76op99QxqgzlfiqTzEfOQEK%2Bkg1FKBuAPZCs86mClVgxVup9qCxL3YFc9%2BFxX5BsKCnsqsppNe97eT%2F1LVxrG%2FtZ42hQSg%2FvtsqBxJ9Xt9ORZP4M7sTQGp7&X-Amz-Signature=ca14e5f548f6fde47e54f531cde3399a3a92a9acc9ef38881e0dc108f690d224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

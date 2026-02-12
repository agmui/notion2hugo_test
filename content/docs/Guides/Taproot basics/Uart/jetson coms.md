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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMNCV7Q2%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCF5qVkSBB95uuLKRFvPUEUNxkG2i2FvanjlbwjNLTVHwIgAiqqqHIJSBBTPVtHb3Yqyu8DO1z3kiH2Ow93dfX048kqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMXu%2BXy4WaBQewn%2FCrcAw1TjNMxsJ1Ua2ZwbT8WAbE5nTE%2Bx1lakTnhoocVP7PCMWXtObO7sUo9I8SDQicwL8mOTxda90XESAwOdCuSiWHZMJfckFfbtNJCwHNYqtmpKQ%2BDz%2F5CXmnEEwZqgJcBAdxPCfxagg0SBDh1Z9i3GqI%2FxVzT1OuMBGNvgygZPAFziC1s71OU7UFDKVm2PaKiXyWDu9c%2BCcz6FJZsi6I1aMNqZStfuBCMAsP%2BGKCnaJ18hhI7ZcbT2Y1Vkl2o7RhO6lS2rDKIiIhf%2B5JTHwG0KZ8Ey%2FAEJfHcfxNntcK0804Zf%2Fx2clSD1KN%2FcrNa73gc1%2FpY00gnvGVjfgtrKU7YYJlb3RKUcADhUkPEjXKmV0bL%2F5z5nZHztbRXLi7dc9h9F%2BxevRNXbBiERPOZ2SeQ1eLQnkGg1kprBjfOyUnE0ONsT9gx%2FHDldUosVd6FBE1M%2BpIQuy2jDYSu1BcZYYNkQsSWqAxUHaMFRgFoK0ZK1FZKrKaqxXkxa8fhnCh09KaI3czskhQ16g4LMO5x9UEdicfHxSwYxC%2BqYZ2wVT1TOJ7cf6anthl99FfcOcHB4M9KomjCLYdZCH66GqrMEUlRrb3At%2FcSvDaUIgNoyBA5jtDX9b1jeVblT6pDPvcQMLXStMwGOqUBJxPVXx3LaFgG1gxDwQoZNt4K2pLQjXR8Utu9TFbGNa9ZDUFvvrm%2BC0jFRCMKdaHv5vYjz6wfoNwD5BoHS5e02WsbmShAcK5FHsu3Dc63FtFE67%2BBz2zWSlQFkETIlhnAg8G98s0ieFU7YoPV2os5xqFXDblzUanWROY5LG2shz%2BRwqHXAzBuHFJfsQHwOYrERY1xJTDklPie8DfcYGUDrCWVjw%2Bx&X-Amz-Signature=a8058b6b2062e3726e7af4cfb58cfd811c6eb19f8b65cb7617a594353ba451b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAIDVPYQ%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDlwLJKqfGJWFWDkqA34%2BK8NWmnQ%2FXqNyOekB5ni2LzEwIgC2OAyp%2FVyP%2F7DLTzxSV0w1MYhh7vjLb1HdVrsXw4ASYqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6lbJpgWwDJW0Ga6SrcA0GXst69PvgDO380PX3G4VL6CZ8vijyzsthO8wRvVXZi49GdOQopZ8RzOxOIld%2FK9N6fu80f1%2BlSHhbhANk9A9jE91wWIPhEi4bJN5qEyVAvYfKraHJ3L4voFgXzXIZsbwD254nmiw1UlI9%2Fe%2BDTdFW9g23OpcQvKgrKjBHofxxoB13UE8vkYD0x6DbPBuBkWNhkUA7%2ByHeqxtutlSkjQrI8JNvV1n7g3gu8%2BZNxeomWn4cIOv4t%2Bms9%2F4fcjGhyYWdj6ElhsfqHRytf632oxN3kfbyLvAeULnw1mWOk0mfX8QyMl90AhCWV8i9uznuzOTO2QYRtecalC8Sx0Jgqllyf%2FSqa9yS2ejTf0hEgaID0gSjArxnIEjptoRDHIkNvBWPHHkcpYVf9zC094QMec7Qsi3xYJvJZ14%2BEigBGkgv4YOy6vXNnoUgNVBmMYdevn%2Bi76NApSHgMDh2AlSTAh3Ch6iCcfCj%2FHvQJdTR7q%2B1lHY7q2K9G8hJkb2UCVcEe%2FGfZlKtrZytlkcvdd1DObw3efuNfpnvg6lewPvB%2BQRMNr%2BT26tF0WwzfnM3ehtVG8crGZg0Ft%2FAbs1HikLUrLuPGHsA1POGhsZcUVyyLbbK5GZbD%2BF9qC9wg2zcjMJ3NtMwGOqUBZAyuVZWNfGZPPZ%2BSVQ4%2Bq4UL9QxZVJMoMvLs0bhGLBaiUcpEuCUeeHd7X3Rhjl870aGLB9U%2BLR%2Br3%2BD4Ap2l3Yu%2BhTffDZU1O4ZPwipgzk0DPRLxt6b79dcg8ZohIHHQOBj6Nq7nL7J76%2BZ6jh8z3W0pkUTFjswmLz%2Bt9UmCnSu0YhQXCX5SK6hIOoqm2AWzhSz%2BTWnEbhCLJkGVEDHvlYwDPhtI&X-Amz-Signature=fc088a39027e58028b9b81a1dad9a39527633ad860d4828736986112dccde355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZ3ASZ3%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIDmy8ceef0M4YsNe%2Fu95q4lPX%2BlOuPYV1%2F1hm4BLnkCcAiEAr%2FaBRFbBZbJdYJP2VHHxaPovA7PSbeSUeub8wejRFRMqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRdJCY8vCFHa1tzICrcAwzg6OrxeYP9Lz9ysraK8Fr510y4NsfOQrbNSfR0e3kvqpqqKZNbbzJ8S7g2Xr9Dt5%2By4ME8Nyg44Y%2B0TJouzEZ2JlPTsmZZgmZq97sVYLuQviznBz91PB0HMe2ZX1xMBtm91dDj0EqZiq73X6DV01w0f9CR1yZYohFwvxtzKt0SAdLHUOqPF9GGTJqZWoLNBnpE9SVYdhA0B4yoqPLFxytfStq8VczsWvtnbeKrrnodcwndIxDuLKlTVodPVnGDwCLar92C%2BT6yaXqYlpCe%2F5IN4oMR4QrcYroXE3FpfaCyTajsQnod2AAMm6jjb%2BEK1AsX6YWaec1S8j5GOMgcbQ%2BG%2Fio7mKWCnfgRey8cJeawWIcfw5B1CQE7M4tsn%2FPw96BskUj%2BSa1ruf79HhzRZXvR6v6PzPkP44kYle3LDJxfva1wwaThjDUQvfGkHJAb1gjZMXYuDv4peaK5h7HoMBh2Zhcmg%2BMsz57iYlKTdjLfm29FwLGZYFzquPpbm%2F8kfmljP6Xb4oT3J8LgvGtwoeYcBDGW5df4Lbby9DsXUF58Z8OhyorqtvS8UwbDjTGP3ySCLJKOURzSvK0u2mUfWsNDvYRLXiSNWKQm9%2B0IHnfp3hguYvWnVaSozVvrMJ7NtMwGOqUBqOHkuxdA6hkpgRzKJnBY%2BuALtO%2BClBTiK7UAmAGzx4l%2B6i%2BoubkqCi3SWVzD55h%2BjVQ987AVN2RHXtVEjdHoUl0IeZ6qvBnUvm06OEmVrWVcLk5hWvWZuoMNvSwHmNqNaoWs95TMijAa%2BWqjm93cz%2BI9V9p5q0yE2yTOyAL0Z1mpoFtPDwMVYJbtJOlh7pEKiI8D1OjaIyPdBK1e7uix6zKoWosp&X-Amz-Signature=131c3be3d4db4a91a6a8e64254270777692db0597592b1913772820826fb3f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZ3ASZ3%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIDmy8ceef0M4YsNe%2Fu95q4lPX%2BlOuPYV1%2F1hm4BLnkCcAiEAr%2FaBRFbBZbJdYJP2VHHxaPovA7PSbeSUeub8wejRFRMqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRdJCY8vCFHa1tzICrcAwzg6OrxeYP9Lz9ysraK8Fr510y4NsfOQrbNSfR0e3kvqpqqKZNbbzJ8S7g2Xr9Dt5%2By4ME8Nyg44Y%2B0TJouzEZ2JlPTsmZZgmZq97sVYLuQviznBz91PB0HMe2ZX1xMBtm91dDj0EqZiq73X6DV01w0f9CR1yZYohFwvxtzKt0SAdLHUOqPF9GGTJqZWoLNBnpE9SVYdhA0B4yoqPLFxytfStq8VczsWvtnbeKrrnodcwndIxDuLKlTVodPVnGDwCLar92C%2BT6yaXqYlpCe%2F5IN4oMR4QrcYroXE3FpfaCyTajsQnod2AAMm6jjb%2BEK1AsX6YWaec1S8j5GOMgcbQ%2BG%2Fio7mKWCnfgRey8cJeawWIcfw5B1CQE7M4tsn%2FPw96BskUj%2BSa1ruf79HhzRZXvR6v6PzPkP44kYle3LDJxfva1wwaThjDUQvfGkHJAb1gjZMXYuDv4peaK5h7HoMBh2Zhcmg%2BMsz57iYlKTdjLfm29FwLGZYFzquPpbm%2F8kfmljP6Xb4oT3J8LgvGtwoeYcBDGW5df4Lbby9DsXUF58Z8OhyorqtvS8UwbDjTGP3ySCLJKOURzSvK0u2mUfWsNDvYRLXiSNWKQm9%2B0IHnfp3hguYvWnVaSozVvrMJ7NtMwGOqUBqOHkuxdA6hkpgRzKJnBY%2BuALtO%2BClBTiK7UAmAGzx4l%2B6i%2BoubkqCi3SWVzD55h%2BjVQ987AVN2RHXtVEjdHoUl0IeZ6qvBnUvm06OEmVrWVcLk5hWvWZuoMNvSwHmNqNaoWs95TMijAa%2BWqjm93cz%2BI9V9p5q0yE2yTOyAL0Z1mpoFtPDwMVYJbtJOlh7pEKiI8D1OjaIyPdBK1e7uix6zKoWosp&X-Amz-Signature=5108a15353aa39f5a223715153e351ccb3092af7dd65cd34249dad38b9854319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAIDVPYQ%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDlwLJKqfGJWFWDkqA34%2BK8NWmnQ%2FXqNyOekB5ni2LzEwIgC2OAyp%2FVyP%2F7DLTzxSV0w1MYhh7vjLb1HdVrsXw4ASYqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6lbJpgWwDJW0Ga6SrcA0GXst69PvgDO380PX3G4VL6CZ8vijyzsthO8wRvVXZi49GdOQopZ8RzOxOIld%2FK9N6fu80f1%2BlSHhbhANk9A9jE91wWIPhEi4bJN5qEyVAvYfKraHJ3L4voFgXzXIZsbwD254nmiw1UlI9%2Fe%2BDTdFW9g23OpcQvKgrKjBHofxxoB13UE8vkYD0x6DbPBuBkWNhkUA7%2ByHeqxtutlSkjQrI8JNvV1n7g3gu8%2BZNxeomWn4cIOv4t%2Bms9%2F4fcjGhyYWdj6ElhsfqHRytf632oxN3kfbyLvAeULnw1mWOk0mfX8QyMl90AhCWV8i9uznuzOTO2QYRtecalC8Sx0Jgqllyf%2FSqa9yS2ejTf0hEgaID0gSjArxnIEjptoRDHIkNvBWPHHkcpYVf9zC094QMec7Qsi3xYJvJZ14%2BEigBGkgv4YOy6vXNnoUgNVBmMYdevn%2Bi76NApSHgMDh2AlSTAh3Ch6iCcfCj%2FHvQJdTR7q%2B1lHY7q2K9G8hJkb2UCVcEe%2FGfZlKtrZytlkcvdd1DObw3efuNfpnvg6lewPvB%2BQRMNr%2BT26tF0WwzfnM3ehtVG8crGZg0Ft%2FAbs1HikLUrLuPGHsA1POGhsZcUVyyLbbK5GZbD%2BF9qC9wg2zcjMJ3NtMwGOqUBZAyuVZWNfGZPPZ%2BSVQ4%2Bq4UL9QxZVJMoMvLs0bhGLBaiUcpEuCUeeHd7X3Rhjl870aGLB9U%2BLR%2Br3%2BD4Ap2l3Yu%2BhTffDZU1O4ZPwipgzk0DPRLxt6b79dcg8ZohIHHQOBj6Nq7nL7J76%2BZ6jh8z3W0pkUTFjswmLz%2Bt9UmCnSu0YhQXCX5SK6hIOoqm2AWzhSz%2BTWnEbhCLJkGVEDHvlYwDPhtI&X-Amz-Signature=01829b27ffd0789b0ba108f79d94b5c3412ba47246b0985d1e538b21a9511db2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAIDVPYQ%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDlwLJKqfGJWFWDkqA34%2BK8NWmnQ%2FXqNyOekB5ni2LzEwIgC2OAyp%2FVyP%2F7DLTzxSV0w1MYhh7vjLb1HdVrsXw4ASYqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6lbJpgWwDJW0Ga6SrcA0GXst69PvgDO380PX3G4VL6CZ8vijyzsthO8wRvVXZi49GdOQopZ8RzOxOIld%2FK9N6fu80f1%2BlSHhbhANk9A9jE91wWIPhEi4bJN5qEyVAvYfKraHJ3L4voFgXzXIZsbwD254nmiw1UlI9%2Fe%2BDTdFW9g23OpcQvKgrKjBHofxxoB13UE8vkYD0x6DbPBuBkWNhkUA7%2ByHeqxtutlSkjQrI8JNvV1n7g3gu8%2BZNxeomWn4cIOv4t%2Bms9%2F4fcjGhyYWdj6ElhsfqHRytf632oxN3kfbyLvAeULnw1mWOk0mfX8QyMl90AhCWV8i9uznuzOTO2QYRtecalC8Sx0Jgqllyf%2FSqa9yS2ejTf0hEgaID0gSjArxnIEjptoRDHIkNvBWPHHkcpYVf9zC094QMec7Qsi3xYJvJZ14%2BEigBGkgv4YOy6vXNnoUgNVBmMYdevn%2Bi76NApSHgMDh2AlSTAh3Ch6iCcfCj%2FHvQJdTR7q%2B1lHY7q2K9G8hJkb2UCVcEe%2FGfZlKtrZytlkcvdd1DObw3efuNfpnvg6lewPvB%2BQRMNr%2BT26tF0WwzfnM3ehtVG8crGZg0Ft%2FAbs1HikLUrLuPGHsA1POGhsZcUVyyLbbK5GZbD%2BF9qC9wg2zcjMJ3NtMwGOqUBZAyuVZWNfGZPPZ%2BSVQ4%2Bq4UL9QxZVJMoMvLs0bhGLBaiUcpEuCUeeHd7X3Rhjl870aGLB9U%2BLR%2Br3%2BD4Ap2l3Yu%2BhTffDZU1O4ZPwipgzk0DPRLxt6b79dcg8ZohIHHQOBj6Nq7nL7J76%2BZ6jh8z3W0pkUTFjswmLz%2Bt9UmCnSu0YhQXCX5SK6hIOoqm2AWzhSz%2BTWnEbhCLJkGVEDHvlYwDPhtI&X-Amz-Signature=3e2d20538f57a3d77268550b2446edec57df8c0231baa968cbeedc7604a47112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QKBSAMX%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDk0FYGt9j45MbVUoHE7SlLCv2DbD%2BSOt7hnl7mDVoWCwIhAPc2M4H3ztHtzm%2B9C2ZIzz10TetWqssXuVv11H6VkLcdKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY7y9c9c27qB49Oosq3AOnpwztFsrb1j1W66fxwX0pouZ9ffBWkjxFzHWG%2BSCRdxPd7AFnTpwM94%2BHN9R3PNbUJ38CLAD1qN72W52Sr7BHI5T25I5Gsv3cF%2BWDdM41rHZ5994wqfihimviq50kxAh66uO7nYa%2BSEsjkB6pYdksJ5ATVq4s96Bw%2F2OZrtNlewqHTMAUcaQJAGbtEICmJWK3JVbjK5rPebN8qTA%2BKjl19w6eYW62fn45SxAXd412JN1RxvTOq02fyXXsEhouK7a0POXtdoL5Tqz%2BM0scynWzChO4SlkxqaAIX0nBMM9C%2B77hUdDoV16uyPPKGw31fSS16ZnSnvQf2AEvEJarHnmxTlY9tyugfdaTAzd%2BAaslssL19JY55DSEfOu26tJPaDuv%2B%2FwpXBSccRglqS3pWrJUpo6%2FUGpELS4qqzqS%2BKFbJBilfwCb2Ucl25%2BwFOG9yFsTsh63%2Bz4piA%2BgQ3%2BHqZn7CJoiC8EszwAJxLg7hNiQOZBTlsNea8p3svYUa5uv3jGYrcc%2BBzVhEyN6ot9On9A3YnCmeuBMA%2B8Sp0PstIIT3%2BAXkF%2F%2FuALROKsE%2FLrMGcYDbRZfwbDkTS%2FOpI0y0rzoIcvaTY9T4Dq24%2B%2FZJnrZSblyAE%2Buyudvl2K4djC50bTMBjqkAdskdaZxcu64B4kW76iImZYHTQStnwQkvzUHxcYbfFVJB4rQzYQ2arF5ccmLyr360XUTnM9jXmKn7rYPBzB3PqI3uqXx9m4zkCm0TfLE9hpK8w7jOD4SwlVzD3UKpYvqyazMf7zcgnxmxzVOGL3vNwWUrf72NS5r1RxNf4dtao1EEW%2F%2FXsApeMIKwH1MPkFUN29FTgv1VA2m2vLdhSpo0%2BBIo%2BYJ&X-Amz-Signature=ffc2eedb5edb94e4c252a77ee6fe89d5595e52b6202c8777b82c5a36f94ecdf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM25CW44%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIGQo0j4c1KvbEpk83JGod68p2EQIJroUHb9PjDXpBe%2FdAiEAr%2B%2Bsw4go7sdMV2QTUtyEzKkAUp6ZZqV8qP7jgMZwDs4q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDHHQ8DilIamqHdPK1CrcA0x%2FAgwjuofwE2Ny3GdICwqwhaUNGNTLOyOaAIc9OBeyrHjmW6xVYIbW0RRvl%2FAkw1uraNI75keapDJXJJk%2BxsLbqq6Tqc9YHnO3vJ9vwttIlW44ylqnfKTdKgOiuouhMXzqxrsvhAlH%2Bvpld7pyuQbOUvbfZ%2BGX3a85GBpReQcGE8JrrvNgijFu3Ttra1QjwZ%2BTaTwxru%2FAno2a%2F9gjfsU4GAPTpwm5vbsRQ0Jf0y4xROKwizsvtw2EaPcJaM1s%2FoGP1StMeC%2FKtqB%2BZRYxFGDE4Yte%2BkaO25BZyi7uUpKrJ0%2BzC1okRgJvkW0UIllbgaZDBn1ilOWJsqmQwr9%2B3p6cG%2BP%2Fdto1iw6efjrARHxDa6da2YNL9dL6ohEWQvywhdmnIrRTRgz7bN4j7rtzk0iTekVOElgtR4lJLqV%2BLAh92hnLnX66GwQzZNsCzbYNGEz4wW1Pwwgluhf2sxiD9xygOlff4hza4ryzZQi4VZc%2BJlNckjJS7nI8ht%2By6FmPkLTooHtoSSYn952BXn97XynDbKcYz1l6nBNzYHoNYNxc2IWoWTVYD8QNowde1YZSplNRa4%2F4P9u5if8%2BIcTi0Q25uASx9CBM1LGJu3UIf9%2Bk0FSWcsCTJx8J8xjjMOSUytMGOqUBwotG4lKvLU6cO%2FllI6dee8QQ3N%2FpsS74YztweHbi2dgnviBXbQJz5vN5oNeVCFhbSCv3MOU4T7CXyIYZOd6KlZ%2BHJulcqQzVyqwEUwbt8OVojzKXBfNNutfeQ5jANmyifg95mmtyKhZyP110UamBrHtrxV2qaaSYbj8DshllOU1lYXULmixFzoazsPiZYJ4KUyInic9gZjBH0lfhgfIcDmU6LY3l&X-Amz-Signature=413c2f99be6a96763b9d26a1e9d201274903f26acbfabba6cf7646a754e28ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW6FDA27%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAcORfcodwWFy7UxxonzO6NISjB2U%2B4yqPF2LAsPX3LFAiEAnwTLUvCMDc9ff8AzU3Nthq0vlk%2FgITn4yXqApxbTUlgq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDPfcP5%2FPfSgfRwXUlyrcA0Ax%2B2oyow8QTQ8yTGNTau%2Fpx4OX%2FX7cDjdiL8bMg1uUvpIGA7rJQpy3LD21%2B%2BfiVvnKZWnXHJZ3zagUh0wubok3YwA0JlXeZHn3VhEeRRzcg6ETU6dNi3ppAWywsE4mMVb0yyzF4mHyrF6xEblHMNBRh7LOfRCVGZs1Bo53SpOgunU0ayOvCrn6vZQBCt77DnoPK%2BlOSjZnkjmQY5WOX995uqTQjLCpDgjqEgpStHU47%2FkgBdkE9mLz73JG65gWn5kCVG%2BEz%2Fa0jfzYyX40gcMI2TdN3%2Frf1xBrsIYvfeGuAtlzlZW%2FcL3bz2z6%2FpF%2FMg8HH8p69pQnlZULRhrjDemMHzjG0uSHxnZiuRJoy4KnUcY5mVwzddntcW7VIjIdJ1tusANfWtoqJfWkLm9q3f5G8bRwxrfGo0SbN%2F838fg89DGcifLnhT7iY0dkmCVD%2BwPXahgJU3z%2BotwdZP8NjUBM4zgYGYSkI3GKuUu4saMcVQ8Ss4OaxEmFa6xYNEHLeoFIMeVfZA8W8BXX%2FeDiTErRMLf8LGqLTm7zsoM4QLwSF%2FZkBin%2BU6poh2yyaSglyoHxUvTcilWcDYaO2Nf75gt6MV1bKMzGopAChH8jv1P5PpHGQ7I7bWFxpb5%2BMKWXytMGOqUBwgWfpGcyukiDuwH23ejrO4wH5UoVkaiWbOMOEZ7j4h%2B2xoG7V9eHKRGKNyLSaXEeWdy%2Flo7bER1NPtXITd1rngRwYF%2FyrqyPiQOY7wtpLuYmS0ZxfM%2B3K92JU2WyTFvRJTTHNWFG%2BwExVJ9I5uhCDzMulyJ08jeS5RB%2FWurKSo4yZJZnQWb7CmOgfstW6v7u6lIlapnvZLcKA8vSJQw0AgbvIASj&X-Amz-Signature=71c7371f2f8e2e7585df217adefe62524ed9442e3ca2c1298362133a57a6568a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYXGGBGD%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCf%2BuwRo6vTZSL6YtR99FjNkYHw5NzAg6NJe%2BTZO5SZAwIgVCtUtxCnfJa5%2FKbJckRH6OO3nw2ih82x3U2xqRpeOfEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLik5jt%2BNsi5YZTeTircA7F3OdNr%2Fj2eMScGpJJ5ChsPqTnoSq2knkKh4zZ0aC2Xwi9t3jq0kix1radz2S2YgzcEwHKvIprBOP155QmfsFCbRoloSsvwY72UxdF%2FrWe0YS019WZf%2F%2BWamwgy8Co7T6khQ%2BA15ZN58iDt%2FIWvAaxF8qgwOl%2ByVHNKwgiI0mRYHKPptlNFcEYkQHsah%2FvOFu01trahMM73dOtKUyrby81pj%2B4bPTBYqxet63PH2S%2Bb%2B9kvkh5%2FukhmJBKZu2%2FdywxdxHxwOv0XCYmAtp3ii46s6rkH54t%2BLZdnsO2BSc0r6VPYoWfetZKH%2FTfxwlRWZIye5Fx6XgmZKjAeZqfzd%2BeTyT9mPjxQtl%2FlvaBirs%2FD9I02SAzlnFgFfrpk58g2ScmlRUhLkiCn%2FEt8b9OVR3NGKDVtmIMj578kpSACctRe0ky8JzLPBEQ0Q6C%2FsvjsGoLyMddcf3ib%2FAKV0qgBGXiQ2QT2ex%2Fy59hIoSBcyhkksQNKpJpGfMFiUu8j2%2BWf9bjdMFBCaCEWPDh6csHwf8HXWugy59XQKc1Qy6pSBH%2Bgnn10GL2URN3O6IEudSE4JCnPxHq25mPMXcBkv5QtdCCC3fdjKrSC3Una2hpPnellpNueHPLRFavoVL5XMJ%2BWytMGOqUBn2Uu5rTwzEy8OPKGU3m1OVa1Gtla4UCmduP9Tz%2BZ%2FmVAFH5Ofz%2FjnftBVUx62If4FaBlwflPKph%2FqrNkIBVpV7CUlwiwKhywQk5ESfurS2fHN3CBk%2FitETWeUd2pHSQS2qbR%2FK7WVU%2B8%2B6qdO%2FNzBRcpf%2FPhtdXSS17wNkwNTt4okiKmxcrxXzbH4Jdy5KGxgMrcgkT%2FXi53RAN%2F2Y9%2BXoKwa9i%2F&X-Amz-Signature=5982a71b9dde64c7d29c51d82cb67025d835b76bef75843dff6e2f4d80d8be44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYXGGBGD%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCf%2BuwRo6vTZSL6YtR99FjNkYHw5NzAg6NJe%2BTZO5SZAwIgVCtUtxCnfJa5%2FKbJckRH6OO3nw2ih82x3U2xqRpeOfEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLik5jt%2BNsi5YZTeTircA7F3OdNr%2Fj2eMScGpJJ5ChsPqTnoSq2knkKh4zZ0aC2Xwi9t3jq0kix1radz2S2YgzcEwHKvIprBOP155QmfsFCbRoloSsvwY72UxdF%2FrWe0YS019WZf%2F%2BWamwgy8Co7T6khQ%2BA15ZN58iDt%2FIWvAaxF8qgwOl%2ByVHNKwgiI0mRYHKPptlNFcEYkQHsah%2FvOFu01trahMM73dOtKUyrby81pj%2B4bPTBYqxet63PH2S%2Bb%2B9kvkh5%2FukhmJBKZu2%2FdywxdxHxwOv0XCYmAtp3ii46s6rkH54t%2BLZdnsO2BSc0r6VPYoWfetZKH%2FTfxwlRWZIye5Fx6XgmZKjAeZqfzd%2BeTyT9mPjxQtl%2FlvaBirs%2FD9I02SAzlnFgFfrpk58g2ScmlRUhLkiCn%2FEt8b9OVR3NGKDVtmIMj578kpSACctRe0ky8JzLPBEQ0Q6C%2FsvjsGoLyMddcf3ib%2FAKV0qgBGXiQ2QT2ex%2Fy59hIoSBcyhkksQNKpJpGfMFiUu8j2%2BWf9bjdMFBCaCEWPDh6csHwf8HXWugy59XQKc1Qy6pSBH%2Bgnn10GL2URN3O6IEudSE4JCnPxHq25mPMXcBkv5QtdCCC3fdjKrSC3Una2hpPnellpNueHPLRFavoVL5XMJ%2BWytMGOqUBn2Uu5rTwzEy8OPKGU3m1OVa1Gtla4UCmduP9Tz%2BZ%2FmVAFH5Ofz%2FjnftBVUx62If4FaBlwflPKph%2FqrNkIBVpV7CUlwiwKhywQk5ESfurS2fHN3CBk%2FitETWeUd2pHSQS2qbR%2FK7WVU%2B8%2B6qdO%2FNzBRcpf%2FPhtdXSS17wNkwNTt4okiKmxcrxXzbH4Jdy5KGxgMrcgkT%2FXi53RAN%2F2Y9%2BXoKwa9i%2F&X-Amz-Signature=8782fafdddded300c5e112baa8cb5fe14019f93aa04250dfad9509088e233c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW6FDA27%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAcORfcodwWFy7UxxonzO6NISjB2U%2B4yqPF2LAsPX3LFAiEAnwTLUvCMDc9ff8AzU3Nthq0vlk%2FgITn4yXqApxbTUlgq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDPfcP5%2FPfSgfRwXUlyrcA0Ax%2B2oyow8QTQ8yTGNTau%2Fpx4OX%2FX7cDjdiL8bMg1uUvpIGA7rJQpy3LD21%2B%2BfiVvnKZWnXHJZ3zagUh0wubok3YwA0JlXeZHn3VhEeRRzcg6ETU6dNi3ppAWywsE4mMVb0yyzF4mHyrF6xEblHMNBRh7LOfRCVGZs1Bo53SpOgunU0ayOvCrn6vZQBCt77DnoPK%2BlOSjZnkjmQY5WOX995uqTQjLCpDgjqEgpStHU47%2FkgBdkE9mLz73JG65gWn5kCVG%2BEz%2Fa0jfzYyX40gcMI2TdN3%2Frf1xBrsIYvfeGuAtlzlZW%2FcL3bz2z6%2FpF%2FMg8HH8p69pQnlZULRhrjDemMHzjG0uSHxnZiuRJoy4KnUcY5mVwzddntcW7VIjIdJ1tusANfWtoqJfWkLm9q3f5G8bRwxrfGo0SbN%2F838fg89DGcifLnhT7iY0dkmCVD%2BwPXahgJU3z%2BotwdZP8NjUBM4zgYGYSkI3GKuUu4saMcVQ8Ss4OaxEmFa6xYNEHLeoFIMeVfZA8W8BXX%2FeDiTErRMLf8LGqLTm7zsoM4QLwSF%2FZkBin%2BU6poh2yyaSglyoHxUvTcilWcDYaO2Nf75gt6MV1bKMzGopAChH8jv1P5PpHGQ7I7bWFxpb5%2BMKWXytMGOqUBwgWfpGcyukiDuwH23ejrO4wH5UoVkaiWbOMOEZ7j4h%2B2xoG7V9eHKRGKNyLSaXEeWdy%2Flo7bER1NPtXITd1rngRwYF%2FyrqyPiQOY7wtpLuYmS0ZxfM%2B3K92JU2WyTFvRJTTHNWFG%2BwExVJ9I5uhCDzMulyJ08jeS5RB%2FWurKSo4yZJZnQWb7CmOgfstW6v7u6lIlapnvZLcKA8vSJQw0AgbvIASj&X-Amz-Signature=24792773d40c91720f6b1b9eefd8fc41866fa1eae8afc40226b16759ea510884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW6FDA27%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAcORfcodwWFy7UxxonzO6NISjB2U%2B4yqPF2LAsPX3LFAiEAnwTLUvCMDc9ff8AzU3Nthq0vlk%2FgITn4yXqApxbTUlgq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDPfcP5%2FPfSgfRwXUlyrcA0Ax%2B2oyow8QTQ8yTGNTau%2Fpx4OX%2FX7cDjdiL8bMg1uUvpIGA7rJQpy3LD21%2B%2BfiVvnKZWnXHJZ3zagUh0wubok3YwA0JlXeZHn3VhEeRRzcg6ETU6dNi3ppAWywsE4mMVb0yyzF4mHyrF6xEblHMNBRh7LOfRCVGZs1Bo53SpOgunU0ayOvCrn6vZQBCt77DnoPK%2BlOSjZnkjmQY5WOX995uqTQjLCpDgjqEgpStHU47%2FkgBdkE9mLz73JG65gWn5kCVG%2BEz%2Fa0jfzYyX40gcMI2TdN3%2Frf1xBrsIYvfeGuAtlzlZW%2FcL3bz2z6%2FpF%2FMg8HH8p69pQnlZULRhrjDemMHzjG0uSHxnZiuRJoy4KnUcY5mVwzddntcW7VIjIdJ1tusANfWtoqJfWkLm9q3f5G8bRwxrfGo0SbN%2F838fg89DGcifLnhT7iY0dkmCVD%2BwPXahgJU3z%2BotwdZP8NjUBM4zgYGYSkI3GKuUu4saMcVQ8Ss4OaxEmFa6xYNEHLeoFIMeVfZA8W8BXX%2FeDiTErRMLf8LGqLTm7zsoM4QLwSF%2FZkBin%2BU6poh2yyaSglyoHxUvTcilWcDYaO2Nf75gt6MV1bKMzGopAChH8jv1P5PpHGQ7I7bWFxpb5%2BMKWXytMGOqUBwgWfpGcyukiDuwH23ejrO4wH5UoVkaiWbOMOEZ7j4h%2B2xoG7V9eHKRGKNyLSaXEeWdy%2Flo7bER1NPtXITd1rngRwYF%2FyrqyPiQOY7wtpLuYmS0ZxfM%2B3K92JU2WyTFvRJTTHNWFG%2BwExVJ9I5uhCDzMulyJ08jeS5RB%2FWurKSo4yZJZnQWb7CmOgfstW6v7u6lIlapnvZLcKA8vSJQw0AgbvIASj&X-Amz-Signature=14457870152713dac0f8b1fd8dea6d6c13eec76ed282ba88d94968c0dea31fcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3MVL4HH%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQC1Ou%2Bdfb%2BOrsn9um8LStFvjE%2FccHH71cibEVcrcRITCQIhANBPiXAsoroSjhdTf1CDQ5Cy82tSsNUed5F39aqAU2fRKv8DCBoQABoMNjM3NDIzMTgzODA1Igx4K3EwX0MXTpP20%2Bwq3AOfuSjrjMt%2BOpMd4%2FqqUlasX0sWhswyByWwdVSAlRHDYix0CB%2FZFlM1dPvhKTPgsI4wA%2By4RWnAvRUP6GHoSM8vTi09XvUX8T0enuyvP6KysC4SzT%2FGsCdnt10Ro4sEXJnE951NZhybvKRa93Jfh%2BoxXt7iVVdyp0SNcCDmsHuC5I8EwjXMjTE78Rv6slh4FABxyMqh1mxVBr9c39k1My9dtWqfCtf9VU1Sp%2FAW%2Fk11dK%2Bs4QnsHZAh3l7wnYwI2uusKL10T80%2FwK5NEmnoJ242rH9kZMWMy7H1t5JdRwOtSAllkIdoV56ijPMz%2FyYvNeQKiUePYUJVYG0gNvptuj27NeQNb7wyYHV1pRKK1qq%2FeOF21LlJgakIbpdpy5djfhakXo4xqX98ua8SzBl8e57CG%2FsLWvePOZnw7VnBr6j9sL1oymGhQm9vQx5pu4tis36XWaNAPPmjgzQLu%2BAxWj9%2FxovgaP3ECdnHXm%2FdPz3to3tsyz3GKCRgPDlrsA78VS9fcIXEgL1O0x920mzlC4Yq1NzULxRCpZkLL4ryERDhY05mk66dj%2F1kKcyZzxaHaKscjRDgULiq8nf%2FL1m%2Bu1Fj%2FB472myuNq0LG30AEsbJFHhXqMe7%2B3JmPnReEjDDlMrTBjqkAY6ccEOmJHxIYVEpRI63haa1uuvRRaMih1Xfj72UZkbQaB98mNFe44DON9Y64n01QZugJ3WfYsdLLF%2BDwewDKDQc7qcuYUj2%2FYKOIV0bW6IT7ojM9oZZohW7%2BgNEnFNsnggfji3%2BEVTnXGba%2F227sh8HeBcHZZkbfMJuX5aVL0SFoHAZ51JpTM%2BRsJvUx8EF4I6O1ObZONRScZjxJvCVasfUiCyP&X-Amz-Signature=7caf74a55c9b657a8ee50cc07a5dd4fa7a5800400b3a2ce8d7c2710d7facad03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

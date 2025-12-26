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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPQTRXY%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDOG8lkmJFXXk6LsAmF%2BQHqwuJ5bLp7DYVF6NFsAD9jRgIhAJZ6d1Rg1g7nUdzwKSr%2BndmIZpVOzqVsliwuCdiPSIEVKv8DCEUQABoMNjM3NDIzMTgzODA1IgxftNpFEiEYs9%2FxHIEq3AM6MPL2O3DZ0FKk3fYCUTqXZ21RFLzme%2BUcgDD4LyhHNaeQ627coXGZFXtcocvoWfaj73S96hw4C4WGCUKUI1Fj5Q6L8my6KUtXSdX8qZx0casI9YtNX7ukjv7yaxbpjnqPlEEACE%2Fokfjl91ctWJB4n2ikZDGHXTWhkzBekeV917ol3eCQOWACdsevPtMGxrsypLWbGT5H1WxsV43Q9Mdu16XC98YMJVHN2qqYNf1OK0efuWhIEhP3ZB30GbXJQtdhcyNLmN%2F2vCdW5GqgE%2BNgzrjJVjZysHKXmjpjGmkC8HHAdISl9u2PZgwVlwQKD0AEgBGGXO%2BmWETnP1LZra9K9BlYWqU8sAwOOs6yDmpK%2FbL0raUjOaDLrcf0SI1jrx7jp3M8R2rTbV6e3ftXzS1GnjXFZAsNKMMuUDoMm0QQTDxu5mL29k4TITrFW4jXxXCxl%2FNbE1cpQ%2FqDjoJlDUwd177qAWlBtHaFfzoX%2BFp%2FvN00ecFaKR%2FFv%2FyAVcp0U0jNwY5lUKqFb8tfbe5Hrrd9y%2ByO72PcEhNboonYWkBiyvgkf%2BrCtVyc7UnDwOzHmMS%2Fmx4SyOTtDZQr6WTch9VMnoNR7K9vaJSv3wwwji78Nw94r0e%2FD7PL1CoVTzDpr7bKBjqkATFV7jaIawggQpXrt6pdvzYPRwugfI89hUGqcfa%2BT6mBg7d7Cm5EgY5EOPpzjMrWkY1ERELfmw0wcS%2BmYNSTpwfvxeRATL%2BAzGUb%2Bxt%2B7htxkzE6IIUUNeNWpm%2B%2Bqfq%2B4nYkIZvCLM9Lq0VJ6ojSzsr3saYmmuX%2FETiDNW1bYZ4Lg9CnP4GvSAw0adRqX3geKrpDXmT20ChqKMAd8CHPG5%2Bd39b%2F&X-Amz-Signature=13c764e9d2188f412eec92ae2570c38032998006ba1ca418b7411f6afcbbb8ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3KNWL7T%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBGVwBhothyKx9BajCcDwALVE2LHZk8ON5rLWHRuvAvNAiEA0YUQa%2BqW%2Fm6Isu%2Feuj4ZzfTZNfRlMHbjtbXZVMAqJA4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDhWqwgl4a0pysfrtSrcA1wk91B3Hl3TcFb3BCdq2bvLJu6uVWoWIdT7R5skHMHMdTljxSQr3UcPTnrFRVd%2BAANoYsieuLm83tWAl0JpBWb25c18AGP2e1qArsxGFXBkCiPgGUPtbLI2VFiWFUdepsQAhyIFkPXDFeWB30OaazifRYjAEMLXNrAdlth%2Bf80fYKRfcUw9kA2GmQtaHFm5nl719fduP%2FFttmG9Fqm6rTvj930RVo1Wp0kPQUqrvThQ59lM5fVKaJm928mcl%2BGD5mGxHQdlvxkv4v%2BeQoQdfkp2Z68LXg%2BIJxY%2B3WPPa3yXnzL4OJNEUeS1l18KzDB%2F5gGisTA08u%2BamD%2BCrbqf3J4qb4TJvq3DGk8%2B%2FYiyTr%2FZLNYfGFsKW4G4CG7BSngYZFwm4G0962QNtLk0%2Ff8JGUQJPFngQ3MAaF2ppdy1yE0O1KZZhLToFY2o6npn5yShuWzYNv0X30ynDS4%2B3sg8sCy3bIeG7GDcEbogB6%2Fj%2Bm4%2BKCMdBWWSsIabp53s8gSaeReVAmFJ2OVZtDyTGcX80yRHEk9BB4exF7SXuOEpXZrVeKINzvKWSXwGn53aqcORC1RsA42jgXFjfphtEJKEVhJ8Pi8BVXwcW5PXf%2FGCebRf0SLv5mZMwfCrMRpXMNyztsoGOqUBMXHuJQh%2FBKjrJBnQJ0eN6fdZCJdPh6jk%2FLUoF9xp4y4bUMlRP727poUkl8y4VCtUlKDsKmQoG3TMJ%2B%2FhSukfa94GuwfcJXx%2Fs%2FDCzCO%2FigjT0tA5IZUJqhQyKN7edQLtgQIcTu3fdER1xaOK1p6sdj7Y13lXSEvXKzu7CqwygI02HSOjHLVzC7%2FJL7d81Pl3bXGxI6euR1Hgw%2BVPac17KVWBe4Zw&X-Amz-Signature=2520ddbb560372181acdefa9c713492621bdc02ad1d55e58f0dc6808de086295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDVC4E6V%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDjwG3AWjYyLkCepE%2F0GJV49swZ72IKRcZcPYKgp3iiUgIhAKwYqjtK0e7QuF%2BIbrXM%2Babfq2%2BYPWlNi%2F1I6w6UG5RzKv8DCEUQABoMNjM3NDIzMTgzODA1Igyw86Ir4mVN52w%2Fsu4q3AMAx8OQsx6JGODhYICDKg3DjPJovJjemN%2Fuj6K2jATBw1PF4nK0995gK2DhlfooNHmJPQdJl5aYp%2BS3qsEOfWOnpnwBZiawlhZxK9XLSqFrQ6UBv7UBIt2Up2KyvtDXSlT4YeFJ5hhS%2BFhwcSjpRysiFRX%2B%2B56MetvGgNCdLhUrw4mm6qmZHbB%2FqeCPzkBS8yNJwCwYlbsMChsLvtf4d0s%2BE1SDQHMSGTtPyotIciJOqYbDVbUtY%2FT%2BQjKOLO35mb%2FLn%2BJddWegyUnqv%2FBbE9SDkn2BhLUms%2F19hu1yKFyJwyJWuuSdpo3iya%2Bq9mJbb4KOQ3e2lsOw4bBf%2FwxcmUAPBnxstREDkHjMfGAAyfSrnafmezOYl5PJgmWCzKfl7LK%2B5%2FO6z61WgAJQkmiBdiHGzgLemOS5WTgJ%2BRqMwsWoCctP%2FWrBBoy26l1BfTjXbgleWP8HsSP6gFRTLGmLwHoijROFCergPOBdMqndpPiShlC%2BSl%2FmX33VjT5UrdhL0uyaMvCIDIibcUVuJ8hZmyNaF3i5LjKmDvk1QW08Vujt1IKIroeeaILk0G6yEQgFqf6YEjheb9MhFSt0iS0ZRHIGHhKRC742K1eXWS2%2FwOyvaKdgbzTWlHvWFsnrNDCQs7bKBjqkAVGhBl1Apysv70DlBummxf%2FBnU1d7wlJ17kxUMgu%2BWzhnVIPsyvbyLhsmNkbeeqF7vaVDZAxWQFH%2FxGqUfRVvMWfyKYTrUPByqNFuNoYENYtELDx1pLJspdkkoHKm2mU8%2FV8bHL8aZOQWYs%2BYvKQFFAE78Hj8cejqUmfjrhiiZMERkhf1HyEieymS4GYlaGw9WGJpaulprTmgPMPfCs6agyZf8r2&X-Amz-Signature=77d2c199f0cda24f99baad19c5897624c4a3186a533b767b222fcbbbf81dba5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDVC4E6V%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDjwG3AWjYyLkCepE%2F0GJV49swZ72IKRcZcPYKgp3iiUgIhAKwYqjtK0e7QuF%2BIbrXM%2Babfq2%2BYPWlNi%2F1I6w6UG5RzKv8DCEUQABoMNjM3NDIzMTgzODA1Igyw86Ir4mVN52w%2Fsu4q3AMAx8OQsx6JGODhYICDKg3DjPJovJjemN%2Fuj6K2jATBw1PF4nK0995gK2DhlfooNHmJPQdJl5aYp%2BS3qsEOfWOnpnwBZiawlhZxK9XLSqFrQ6UBv7UBIt2Up2KyvtDXSlT4YeFJ5hhS%2BFhwcSjpRysiFRX%2B%2B56MetvGgNCdLhUrw4mm6qmZHbB%2FqeCPzkBS8yNJwCwYlbsMChsLvtf4d0s%2BE1SDQHMSGTtPyotIciJOqYbDVbUtY%2FT%2BQjKOLO35mb%2FLn%2BJddWegyUnqv%2FBbE9SDkn2BhLUms%2F19hu1yKFyJwyJWuuSdpo3iya%2Bq9mJbb4KOQ3e2lsOw4bBf%2FwxcmUAPBnxstREDkHjMfGAAyfSrnafmezOYl5PJgmWCzKfl7LK%2B5%2FO6z61WgAJQkmiBdiHGzgLemOS5WTgJ%2BRqMwsWoCctP%2FWrBBoy26l1BfTjXbgleWP8HsSP6gFRTLGmLwHoijROFCergPOBdMqndpPiShlC%2BSl%2FmX33VjT5UrdhL0uyaMvCIDIibcUVuJ8hZmyNaF3i5LjKmDvk1QW08Vujt1IKIroeeaILk0G6yEQgFqf6YEjheb9MhFSt0iS0ZRHIGHhKRC742K1eXWS2%2FwOyvaKdgbzTWlHvWFsnrNDCQs7bKBjqkAVGhBl1Apysv70DlBummxf%2FBnU1d7wlJ17kxUMgu%2BWzhnVIPsyvbyLhsmNkbeeqF7vaVDZAxWQFH%2FxGqUfRVvMWfyKYTrUPByqNFuNoYENYtELDx1pLJspdkkoHKm2mU8%2FV8bHL8aZOQWYs%2BYvKQFFAE78Hj8cejqUmfjrhiiZMERkhf1HyEieymS4GYlaGw9WGJpaulprTmgPMPfCs6agyZf8r2&X-Amz-Signature=507b29dc7f4615cb32f89239e73e456ad2f9713b76483299e58c5c9414458fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3KNWL7T%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBGVwBhothyKx9BajCcDwALVE2LHZk8ON5rLWHRuvAvNAiEA0YUQa%2BqW%2Fm6Isu%2Feuj4ZzfTZNfRlMHbjtbXZVMAqJA4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDhWqwgl4a0pysfrtSrcA1wk91B3Hl3TcFb3BCdq2bvLJu6uVWoWIdT7R5skHMHMdTljxSQr3UcPTnrFRVd%2BAANoYsieuLm83tWAl0JpBWb25c18AGP2e1qArsxGFXBkCiPgGUPtbLI2VFiWFUdepsQAhyIFkPXDFeWB30OaazifRYjAEMLXNrAdlth%2Bf80fYKRfcUw9kA2GmQtaHFm5nl719fduP%2FFttmG9Fqm6rTvj930RVo1Wp0kPQUqrvThQ59lM5fVKaJm928mcl%2BGD5mGxHQdlvxkv4v%2BeQoQdfkp2Z68LXg%2BIJxY%2B3WPPa3yXnzL4OJNEUeS1l18KzDB%2F5gGisTA08u%2BamD%2BCrbqf3J4qb4TJvq3DGk8%2B%2FYiyTr%2FZLNYfGFsKW4G4CG7BSngYZFwm4G0962QNtLk0%2Ff8JGUQJPFngQ3MAaF2ppdy1yE0O1KZZhLToFY2o6npn5yShuWzYNv0X30ynDS4%2B3sg8sCy3bIeG7GDcEbogB6%2Fj%2Bm4%2BKCMdBWWSsIabp53s8gSaeReVAmFJ2OVZtDyTGcX80yRHEk9BB4exF7SXuOEpXZrVeKINzvKWSXwGn53aqcORC1RsA42jgXFjfphtEJKEVhJ8Pi8BVXwcW5PXf%2FGCebRf0SLv5mZMwfCrMRpXMNyztsoGOqUBMXHuJQh%2FBKjrJBnQJ0eN6fdZCJdPh6jk%2FLUoF9xp4y4bUMlRP727poUkl8y4VCtUlKDsKmQoG3TMJ%2B%2FhSukfa94GuwfcJXx%2Fs%2FDCzCO%2FigjT0tA5IZUJqhQyKN7edQLtgQIcTu3fdER1xaOK1p6sdj7Y13lXSEvXKzu7CqwygI02HSOjHLVzC7%2FJL7d81Pl3bXGxI6euR1Hgw%2BVPac17KVWBe4Zw&X-Amz-Signature=eaa13476038e7ea77add8ff25691daa9a0ef0f9837afaf777bec2e92aff86dbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3KNWL7T%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBGVwBhothyKx9BajCcDwALVE2LHZk8ON5rLWHRuvAvNAiEA0YUQa%2BqW%2Fm6Isu%2Feuj4ZzfTZNfRlMHbjtbXZVMAqJA4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDhWqwgl4a0pysfrtSrcA1wk91B3Hl3TcFb3BCdq2bvLJu6uVWoWIdT7R5skHMHMdTljxSQr3UcPTnrFRVd%2BAANoYsieuLm83tWAl0JpBWb25c18AGP2e1qArsxGFXBkCiPgGUPtbLI2VFiWFUdepsQAhyIFkPXDFeWB30OaazifRYjAEMLXNrAdlth%2Bf80fYKRfcUw9kA2GmQtaHFm5nl719fduP%2FFttmG9Fqm6rTvj930RVo1Wp0kPQUqrvThQ59lM5fVKaJm928mcl%2BGD5mGxHQdlvxkv4v%2BeQoQdfkp2Z68LXg%2BIJxY%2B3WPPa3yXnzL4OJNEUeS1l18KzDB%2F5gGisTA08u%2BamD%2BCrbqf3J4qb4TJvq3DGk8%2B%2FYiyTr%2FZLNYfGFsKW4G4CG7BSngYZFwm4G0962QNtLk0%2Ff8JGUQJPFngQ3MAaF2ppdy1yE0O1KZZhLToFY2o6npn5yShuWzYNv0X30ynDS4%2B3sg8sCy3bIeG7GDcEbogB6%2Fj%2Bm4%2BKCMdBWWSsIabp53s8gSaeReVAmFJ2OVZtDyTGcX80yRHEk9BB4exF7SXuOEpXZrVeKINzvKWSXwGn53aqcORC1RsA42jgXFjfphtEJKEVhJ8Pi8BVXwcW5PXf%2FGCebRf0SLv5mZMwfCrMRpXMNyztsoGOqUBMXHuJQh%2FBKjrJBnQJ0eN6fdZCJdPh6jk%2FLUoF9xp4y4bUMlRP727poUkl8y4VCtUlKDsKmQoG3TMJ%2B%2FhSukfa94GuwfcJXx%2Fs%2FDCzCO%2FigjT0tA5IZUJqhQyKN7edQLtgQIcTu3fdER1xaOK1p6sdj7Y13lXSEvXKzu7CqwygI02HSOjHLVzC7%2FJL7d81Pl3bXGxI6euR1Hgw%2BVPac17KVWBe4Zw&X-Amz-Signature=e7fadb2f57d48a21135d41ff06ea8246104dfd29f2a52f1b39c28e636ba44bb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHGXPIJX%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQD8qQIiiSHbRfEKKnhj9%2FYgnELpc6h%2BAMhFoLIhlqiChgIgT7QzSoWy4XTLcR8Oe0D5UWWyk6p%2BhVi0WpjPKRtUL40q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDA7ZNuT0%2F4lTYvubyrcA9qwJcpaN3TCAO84JbPe%2F0d0PgtazW8nhrEXlCSkO%2BaX0DgUF%2BCkbHLidVQELCIEuHmeSxJ00mFcrBvWx%2BF0Mo6VVhLFv%2F3MzIHYApYqM4ewGyCxQzZNG8d4gEkR9tmpYOGbhd1iQ8aIexSMY5Xnw7xp%2BCGc5p50rZL38XS%2BOab43hXZRJl427FGHiXKAUkgB5zuZ9I6hW7ku%2BzpbR%2BudlqeJ3QByLu0IsVgI0EYRuxLni0i%2FKcxW2pAWKIVStvnCub4i1aCc2f0NqY5XhmiKJkJ76RXWKlAg%2FaXPM4NGTATEuEhUdD%2F0YZmi23f6W9VBCV%2BDjayil6%2BusbCKQQoSOC14BXEJepLfjoLkht1ThLiPwqgYOXJyrtsePyE%2Bqb3FbqVXR%2Fow9e8NUTNjMRRk0JypkfulBm03l93uYY%2BwRndk99w%2BfXF9KjubqAlseZjGKG3EDLvKcE0rBxnuopm9WmCPtwiUOa9wIX%2FSWDP92m68mBcbz4uzUUQmp%2F0LK%2FN%2BkyYiuq%2BbO9al9qRRe3sz%2FOmgY0iRXE6KoUCD4dcEa4BbMVZAqEm6GTHRfjXAyDw%2FlnVhYvq%2FBAz1MvMHHGdybywOV0lqB0Svlu6aMEaD90GUbq%2FS8egJ9N4HSjwMPuztsoGOqUBORK2E7cB%2BeZFWVrrGYWsA9RETk%2BHpObN3JueMahjOCXmwxStz2tu5y0Ec2WQScbQH%2B5pM%2Fe0zb9AbGM8%2FSM4V5H0ZCqIg3Kmtv4OxSLnXSXjXSoJlk8T%2FWcQaQsdefcj2JO7B%2FUxe1I28srgF%2FnK41smJsZMJuV%2FhJ8al4BD5JO%2Bro3HzLdVw80DSNVjY3PSDoNaAOtprUIcWfG89Fki8KF5jLjB&X-Amz-Signature=96be2e6424c665d416f9d243fe764d74194ee2c99dc2d722087c01986c60140c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

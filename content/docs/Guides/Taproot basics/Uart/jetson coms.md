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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI3YGMSG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9d%2BF6zkgjHcoYSnRQ9ZZ4RBabOHrWNn7oqBWzEXjj%2FAiEAz6ACejrlIVOPg6mXBR2QnDdms7V%2FAJvNUSAmuTs5hAkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPZGx%2FPyUswVsb6rFyrcAyhaphWn74yknM2rTQdKsDBSmjNIXHJ1TAM3nEelnOnYzE3w0oXR9wICksdM2uI9RpBbKtF6Q69Zhoz3HBx9JQsx1QBVV4JnVr%2FiybKAmpFIUVHD9rKNn7k1nru9lLx3J%2BH0gdNOoA8vE%2F1%2BBBKOqtpyv3IBwtY639DgPgq3GDICHl3vZPYgjh8O9Aj212eZIRkzJB72tbu01%2BD4LugdC0v3eNaZIsgv6ff1bt77%2FEy9%2BQlt3GF7q89qXx4F8G4qGjDl9fem5Bo5BWlITRmAl0ZAPdr1b%2Flh22QVqWaVfJWY%2B61lGJWa1liMOBglswpWJ%2B0GLHlVrrSxqQP8X8tDOx%2FoKJ9EOF4w9oXVBe5MQcxy6nb8PCuEigVmX4ldLOmipdNAaqZSZGtQDUvkmuMM8EJq6tmPcWekupZgj1VHWySl490lbeaGWxMBuZDtncDoSpLfeJZCtui6eCg8z4ZHezhxq0dYAmKYg7BuqVdXm3DKUQEaFyu%2F9vquGx88%2FAx3f1qEXJvs2yi0nonPdHlsLo3Ag%2B2s%2BjZq7bSQSbvjNQBTj6qPMUHszfuYTeH2LLkU0WDxXT2i5P8dIw2cGsmmv19hbJvw7joGp35S6Ik%2B5%2BU7%2FHy9Ybzzt5Ml%2FXk3MOb7h8oGOqUBduRjna7YUhekvmH%2F8wuyfkn7LuKF9UbwWvkKz%2BznibDZ8vprjE4a%2FoOjB7clshGZPg6iG2DB%2FLcfdIerYWRRQ1IvmIVSCZdEoCYkMea8lsOQxSucJ4s6jXDkkBUN2Kggl%2B%2FqqaxNxNEDqLeIm4bK5imY6hIaeRRfhYFYZ%2BvUpaIH8TwbKBemF3NZsWUO5o6CRlxNCAUE%2B9f5NOinnPCHvrUj1Cz9&X-Amz-Signature=2f27b9d256df7d1053690149144ca9133b270cc861ab036747d7e9d97f4dc6a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOBJ55ZX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4wfQwjKTZKDgnXgK%2Fhml7f%2B76AhLANZRUdcFShxqgiAiAcB5EKQrypaKpMANdb%2BSNSWOpBHbVTx1rtygejrK6KKSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMmRnLzGKBNDoEKUfcKtwDblPQw8%2FYARhgDhF1S%2FEZuABFdJaUIwKpotpK1mZGPnty9uy3CIp5qyvFbREcKV2AzFD%2FX94x60N2btPQV6IOVPtLY%2Bgn89p0S9jwgUpE%2BzxR4Fmo%2Fg1CVrNS6UC2PmuySfNaoDUVKSrVowSe1PHtrU%2B4KTWSg9MDjORpDy3guRdyBtF7ONYkRG8Doqu4k3LWotXkfTkLKAsgTDCtOO6mn%2FWVObckjnue3OwJeSVP%2BFpSUOW81yTaRvj1Vv3%2FNQxXyunieT9Q8JIGzFY42XTKERmRHkIh%2BRUuBBpsfv2d2tEwJMN6BsgOIl0icCE5A9iujpMXAWWY6ALtsvfzPCNmrLLoMCG90NwlF1mXOx8SZ%2B5dwSSb6jcTzdTUpTyXk1aBs3JdyeHtHLzP%2Bx%2Bci76KtDdAJ9yC4oFLzCRUeNXj6HUlZLn2L2V3QgIfxBQKBLovUxhWO4solIYoWa3AKVcbbf9ceKMDFiWFzKjeaXO%2BQQ7jK0ccEqqh0dfpBq2NZXYuH2gaZbjzDTvAD%2Fjs1iKfNGlCkwJDS6iaho1O%2B0YNLiaPn6m%2FMFayobu1ToMeUqKGsovzLZTkAVLfHvdFF%2BDvR7iflNVoqMM7kvixTflnX7M2DbJPGbXey%2FJvQgswrPuHygY6pgFUW3Ii2B%2F57myZiT0q2SMTwbsVUnom1f3Aj2zdZ%2Bd7uTNPxcQ49ELZ4qJn070xmY%2BwqVG2iSojTh4tOkoOUIECAApKc2goyxAqVWNstLQ4Z%2FiycjXlSRRi33wQSH57iBXV3zEPnePQU%2FZL7RInjBbkvzKbgC5y%2BBpSx2kBnYVjR521USewBgrZ0ngN9Q9EXadnCF4ErD7J7k66h2vmZeYXhWj211tX&X-Amz-Signature=42aec11ff8dd588c43eb3d9c9d399c913923375f7b1c7944eaf53e71c0228cc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O3OD3IA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDNVZmkJT6TxBG71jPZ78g3kRBbtAyJD0JD9ANhNwyZQIhAMrueMXLbjSiRjIetoaFcUzXztgmpygI4EgTUWIRuUyGKv8DCHIQABoMNjM3NDIzMTgzODA1Igwu%2BPGhffCv0MekkqQq3AMehReGvgEKfbY1nwRurbHHAJwufW6gD8MScfcc%2F2WMiiwuKn59TRkEgwP3P9M8Th65DGqH5u7uaoIzjhItJy8bkqQLcVnk6d0%2B71iOyBgXkhDmRf71feVom9T3fb1wBMhIh7ua0aA4MoxWUKGib%2FTurV09EMPh8%2FbBH%2FBMJtFHJWAtnc60UtHY%2BE4gSjK3mavk7HOgnrEsLLQwwYMdbzuTA9bu0UB713qHGEeaN5BYlj%2BeGySHb%2BjLmOY8c8J039glyHCg0497c0xbY%2BBfnmOEX8XVrG%2BbWTZ57fgnrAZCS9%2B3AlNZ6w1Dx74VjtbOYHylv6yx6GHNkylApQ3qTj1DrTk87hwg%2F6SF1XG5HNKfGgllDSqMQccSII4agS3yVcOm65j5%2B1rZ60nEGdgXSf%2BycXi8YwLPLN29jW%2FpjooU2vS%2FobQ6lnwlQxe7I3YfCrS0vZfNVnUSV1h1xRn9CFUG52Walt6VSBQyH7jt6wmNi4OntVzEvp0ws4y4GvMGYZqdktWmewNjb72H1bYYO%2Bydtt0f1rEsaLW%2FcENtSfVv274sxzC7T47nPXJcLiOoR0v2bx3DOnVNntYy6jQ8EBoJGPZkh7fw%2B7NakiTWcmahtNDP%2FxYEbH6bSmil0zDE%2B4fKBjqkAYTetzA8e5QotAZ0DttQGEYCAo6Gf%2B609tLlvOO1dtTcU2VIiDjfrQKvSGB2yYUevSqtD3a7jQ7qTRj3XlJBS3a42oth%2FwRxYvL4obUd%2Buk1X4Or0HowNlFBEeDe87NK3Du5K1aVTnD1D3z%2FzAH6UumzXCrXC1hjZd1dPdUdOxPwagzc%2FSsHmbLE5uRGqA8z8d%2FSXTg%2F9RDXZDXuMCDQZybzHy13&X-Amz-Signature=3dada4bd6ca039710c41aa0c257366419af8d48d77229dad2bf9f92fc81ebe61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O3OD3IA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDNVZmkJT6TxBG71jPZ78g3kRBbtAyJD0JD9ANhNwyZQIhAMrueMXLbjSiRjIetoaFcUzXztgmpygI4EgTUWIRuUyGKv8DCHIQABoMNjM3NDIzMTgzODA1Igwu%2BPGhffCv0MekkqQq3AMehReGvgEKfbY1nwRurbHHAJwufW6gD8MScfcc%2F2WMiiwuKn59TRkEgwP3P9M8Th65DGqH5u7uaoIzjhItJy8bkqQLcVnk6d0%2B71iOyBgXkhDmRf71feVom9T3fb1wBMhIh7ua0aA4MoxWUKGib%2FTurV09EMPh8%2FbBH%2FBMJtFHJWAtnc60UtHY%2BE4gSjK3mavk7HOgnrEsLLQwwYMdbzuTA9bu0UB713qHGEeaN5BYlj%2BeGySHb%2BjLmOY8c8J039glyHCg0497c0xbY%2BBfnmOEX8XVrG%2BbWTZ57fgnrAZCS9%2B3AlNZ6w1Dx74VjtbOYHylv6yx6GHNkylApQ3qTj1DrTk87hwg%2F6SF1XG5HNKfGgllDSqMQccSII4agS3yVcOm65j5%2B1rZ60nEGdgXSf%2BycXi8YwLPLN29jW%2FpjooU2vS%2FobQ6lnwlQxe7I3YfCrS0vZfNVnUSV1h1xRn9CFUG52Walt6VSBQyH7jt6wmNi4OntVzEvp0ws4y4GvMGYZqdktWmewNjb72H1bYYO%2Bydtt0f1rEsaLW%2FcENtSfVv274sxzC7T47nPXJcLiOoR0v2bx3DOnVNntYy6jQ8EBoJGPZkh7fw%2B7NakiTWcmahtNDP%2FxYEbH6bSmil0zDE%2B4fKBjqkAYTetzA8e5QotAZ0DttQGEYCAo6Gf%2B609tLlvOO1dtTcU2VIiDjfrQKvSGB2yYUevSqtD3a7jQ7qTRj3XlJBS3a42oth%2FwRxYvL4obUd%2Buk1X4Or0HowNlFBEeDe87NK3Du5K1aVTnD1D3z%2FzAH6UumzXCrXC1hjZd1dPdUdOxPwagzc%2FSsHmbLE5uRGqA8z8d%2FSXTg%2F9RDXZDXuMCDQZybzHy13&X-Amz-Signature=7c2d08eea289401c7b86374a6bcbe12050c0896b0d6aa65ce143d50553000a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOBJ55ZX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4wfQwjKTZKDgnXgK%2Fhml7f%2B76AhLANZRUdcFShxqgiAiAcB5EKQrypaKpMANdb%2BSNSWOpBHbVTx1rtygejrK6KKSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMmRnLzGKBNDoEKUfcKtwDblPQw8%2FYARhgDhF1S%2FEZuABFdJaUIwKpotpK1mZGPnty9uy3CIp5qyvFbREcKV2AzFD%2FX94x60N2btPQV6IOVPtLY%2Bgn89p0S9jwgUpE%2BzxR4Fmo%2Fg1CVrNS6UC2PmuySfNaoDUVKSrVowSe1PHtrU%2B4KTWSg9MDjORpDy3guRdyBtF7ONYkRG8Doqu4k3LWotXkfTkLKAsgTDCtOO6mn%2FWVObckjnue3OwJeSVP%2BFpSUOW81yTaRvj1Vv3%2FNQxXyunieT9Q8JIGzFY42XTKERmRHkIh%2BRUuBBpsfv2d2tEwJMN6BsgOIl0icCE5A9iujpMXAWWY6ALtsvfzPCNmrLLoMCG90NwlF1mXOx8SZ%2B5dwSSb6jcTzdTUpTyXk1aBs3JdyeHtHLzP%2Bx%2Bci76KtDdAJ9yC4oFLzCRUeNXj6HUlZLn2L2V3QgIfxBQKBLovUxhWO4solIYoWa3AKVcbbf9ceKMDFiWFzKjeaXO%2BQQ7jK0ccEqqh0dfpBq2NZXYuH2gaZbjzDTvAD%2Fjs1iKfNGlCkwJDS6iaho1O%2B0YNLiaPn6m%2FMFayobu1ToMeUqKGsovzLZTkAVLfHvdFF%2BDvR7iflNVoqMM7kvixTflnX7M2DbJPGbXey%2FJvQgswrPuHygY6pgFUW3Ii2B%2F57myZiT0q2SMTwbsVUnom1f3Aj2zdZ%2Bd7uTNPxcQ49ELZ4qJn070xmY%2BwqVG2iSojTh4tOkoOUIECAApKc2goyxAqVWNstLQ4Z%2FiycjXlSRRi33wQSH57iBXV3zEPnePQU%2FZL7RInjBbkvzKbgC5y%2BBpSx2kBnYVjR521USewBgrZ0ngN9Q9EXadnCF4ErD7J7k66h2vmZeYXhWj211tX&X-Amz-Signature=509a5bc1b8f559fb2a26628dc9a9ef6376678fb9f0a2c8c8e9f6c9259d4f554b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOBJ55ZX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4wfQwjKTZKDgnXgK%2Fhml7f%2B76AhLANZRUdcFShxqgiAiAcB5EKQrypaKpMANdb%2BSNSWOpBHbVTx1rtygejrK6KKSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMmRnLzGKBNDoEKUfcKtwDblPQw8%2FYARhgDhF1S%2FEZuABFdJaUIwKpotpK1mZGPnty9uy3CIp5qyvFbREcKV2AzFD%2FX94x60N2btPQV6IOVPtLY%2Bgn89p0S9jwgUpE%2BzxR4Fmo%2Fg1CVrNS6UC2PmuySfNaoDUVKSrVowSe1PHtrU%2B4KTWSg9MDjORpDy3guRdyBtF7ONYkRG8Doqu4k3LWotXkfTkLKAsgTDCtOO6mn%2FWVObckjnue3OwJeSVP%2BFpSUOW81yTaRvj1Vv3%2FNQxXyunieT9Q8JIGzFY42XTKERmRHkIh%2BRUuBBpsfv2d2tEwJMN6BsgOIl0icCE5A9iujpMXAWWY6ALtsvfzPCNmrLLoMCG90NwlF1mXOx8SZ%2B5dwSSb6jcTzdTUpTyXk1aBs3JdyeHtHLzP%2Bx%2Bci76KtDdAJ9yC4oFLzCRUeNXj6HUlZLn2L2V3QgIfxBQKBLovUxhWO4solIYoWa3AKVcbbf9ceKMDFiWFzKjeaXO%2BQQ7jK0ccEqqh0dfpBq2NZXYuH2gaZbjzDTvAD%2Fjs1iKfNGlCkwJDS6iaho1O%2B0YNLiaPn6m%2FMFayobu1ToMeUqKGsovzLZTkAVLfHvdFF%2BDvR7iflNVoqMM7kvixTflnX7M2DbJPGbXey%2FJvQgswrPuHygY6pgFUW3Ii2B%2F57myZiT0q2SMTwbsVUnom1f3Aj2zdZ%2Bd7uTNPxcQ49ELZ4qJn070xmY%2BwqVG2iSojTh4tOkoOUIECAApKc2goyxAqVWNstLQ4Z%2FiycjXlSRRi33wQSH57iBXV3zEPnePQU%2FZL7RInjBbkvzKbgC5y%2BBpSx2kBnYVjR521USewBgrZ0ngN9Q9EXadnCF4ErD7J7k66h2vmZeYXhWj211tX&X-Amz-Signature=9791c9c6f4b3706de6d8c4ee8d58d1a02c0a16c78c7451196199603dfc1a6538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WWSCIYP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGB3CCKQbVvMlkrEK%2Fhjm2mkraglGq9xjaHVSdSNhP2AiBk%2BYrCt%2BCa8MVrYpsGhWfV%2BOFHv04sPzoJevmgLuKEfCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM7xO%2BkoOdfbZA35vyKtwDTpwnnHbMAebt8G7u32P3%2BnzVw9SMNjvNzVGe3x1gZ5QOKHZY4%2FEI0QvnkK5n6QX%2BFHL9LpGtoQe8tYY0HzPx5haH8shyG68YsCfDLqDzgvKHgOUwk2wy92IfkI5Z5X5xRD9KKsLnAHklTdOltxTfHFdRYGfX03nR6DBtQaiDQXiQx49jmEv8w%2B9I36fwGNFpqk6A95eBvVJc1TzKyi3KlO6l%2FTFsvR7Wj0JIuyM3LqYsCh%2FY%2BffzHKKIYNcoNWQzOVStG2QW%2F6sGsSISreg4V6%2Bjq8DOPLmRY8aIBj31M4BhlwFxUtqkmHw9GkGJNgrBqy97Hj2%2BJQsa0Puo%2FqajBw9l3d1k%2F%2FHtG0wNanWNZfVoMZFL4b4kjWWQ3tDmHS%2Btw3xJz86kZluLfJbgtvsIf1uzO6P6FJSK5CRGq7jDb3bhLt2tnMkV7m6SL%2FFUjWFYcCHVPh3UcKTiMa7nLwaRy53ayWD2kzwJxWOxnxEgpipKb5LUS2z18%2FxYPQODExapZtqiEivaakRU88gOn%2F6R5bYNY3j2pKkbELaD7p%2Fag7ZI6JGPVNiOzVPj%2BylP0AEd0aClKkkZyFUu2ctFN%2FDrOY4gksdUuZcIhX6Y3i9%2Bpf81FvhFtp%2FrBV9BuQ0w4fuHygY6pgHULT4qjrtYTY0uR4CHnC642tteXlYhynf%2F1HCD6MQFSuYO%2FU6P4DtrViOMsPQMkoxbnWrKgEafZan6WKu37H9GP0xBbE0pKDCVWlLauDLPXsdYW1lVZhapoEhSPYkLfHtfP%2BApZMlUpUT0VtyQFAifCU%2FUUow5xEve0J5ohIpA1Xy8tdl9QTGLY7m28qIMeCOUNLV%2FEclv%2FBLCuzwXBf9OLFQCvCtb&X-Amz-Signature=4fab6f329d54946787c2c2ebe5881fe29613483dd61d836d1ec192143558c82c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UL4H2KS%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIDTaPN4wTMsJsYoxZaenQa4ONB4df%2B5bD%2FubE7seHbkxAiEA0QlyMe0WLZHTnSB65HQFUafS5KPZFVljEqPGo6JGIEIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMD%2Bt%2FYUs%2F5bdNZACrcA4S8oAcwpamQ%2BvPHId0odzldhaWux9780GIs2sHSncaXTdFZPGpPEPDO1ackMFdmoyBFMhFtobfAhY8Dux3al51mcvfVDUkyw4V60OdZx0elaVJmdr9X7hayQlK%2Bf8vLmRE0ykQRnOfsiYk4QkKXid8GPpFI6WnOlRJdd6Kr0JgANH85tihdws7ZZ6vL664%2FXDLNxThA%2BW5HO2pafntfYwYoFdNtJqhWs3qNd7gCEf5HFoZBvTsMw1P78UPymJjp6hYtZaXfdPf0RSxQE2bu0WIMMFza3h6OK8DQxQWprNIeOlQ%2BzKlg0%2FoqXTVh%2FSSHIS0C6kBCKI7J6z9TQT%2F0t1ttjmj5c8BDrFKvv4hsQXFrlu5PtxANXMc%2B4cdXgw9vl7MLHIjTfb%2BLf6kPCrZ7Ozc2jpVovL3mgnybKU7I7jKi%2FMu6MzWPSlvbSDUJ3116sgDY6oR562CNbQOsUc2hGnEaUjT2OsNUNrWxD7OFoKcz6SyLJ89E%2Bn0jSydClqJHYyil%2BgzFLXCACFD%2FM%2FrIT%2FHDEKl3%2FBj%2BfYrc82Ta5Ilg4DyvHQfyweRj8eiA1lZSneVGmWeQoyV5T8JQeCfK7vf5dVyHMJvxj%2FUn%2FzCSkd3iS7HsC2h%2F1hRE50thMI%2Bn6dAGOqUByOSJw4mssE06R%2BsbPHmQNWgoV4x0y5fTheVvG5hdN0%2FZR1AJgSbZYeS3nG%2FbfeCLQfgaoIGDyY7xkil7M4kLekyv11ztGNxet%2B8uFRR2ZwgzMpENRO6bul6tdDEiY63x7MSn9wvXgVFAdua5DKGggeaCRmxKslskJc9dNXUpl0HariCftSry7Zod7cyxlXkDrBhPzVYyF%2BfJHyuHezrXKPMH7bgQ&X-Amz-Signature=d1b658c61812a76c376d0f6d47660c86c4a6eaf7b5a351b19370b76bce2a5763&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2CH3UJJ%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIH38vzN917KdQlWCBYVzkmfHj1aurbbfdzlIy4gQzB9uAiEAxz88nnP4roa8dLU8VxLyyKjPK0HQVVll7Dg9%2F9KzM28qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIA6Z3btDvUVy6pEircA9qhJVjowok6vVP1GMar2MOrhVa6j2DSY%2BA3iOpUnO1%2FzYshtTTLODIvnVC1U7RAUNl%2FpclaE%2BQ2BADTsv7fC7ZjKWDTeFg9ZnpUy3UgytN5HiMXUdwZCEbF6onwasC74EvIsfTCXvEbpQUl6AO4G0FafFwsEjzz2zGzqQEeVEDfCkskYQPh9Ezus%2BAT82T%2BUz7oREbSHtcXwY7UQ%2FBQv1qurstLSqo78sTYmy9Bla%2FWVWE6x2ovycMXNvfgbyC5wvrwvaFEQF0z7XiXRZCqUOwA1PDtjGYKoa4yB3u%2FX4JBK4l5yYyghWPHI4NiHEO8tGTs9XyONjjSJZitCIm4fsjLA9ROQQPFiHCjA%2BW6qAdzxpCnC2FDQwWp55Jj4%2BM8ABPAwqSb%2BZcV696XItVicdp%2BJxHjxX5qvl72UnBn%2FIVzvC5jxGqOFmPpXmYxlx1gbQkV0SEROyDGFFpDVQFJrv5Ix1DwSSnjNqOlLCOTrwLi1ZsIyGIA5pF9XcAFimvqbSCVzk4BrbUM6%2FUj%2F2v8pxyUgeUwur8wYjAPxs9LB7EVQAuMxMtkDC1Dhn4yTogvjPup%2B7DWJWJSlRe3FGIToyUhmCfeTvjIQ%2BxQnB5HQo4YK%2FvE5PcpCxLx%2FhRSMKum6dAGOqUBRImYKvu9fSuvDWKjknQb6EAUzJdY5akDaOXqqs%2BSWvlt7cd1aKpRv2iOo01P4eTG%2BjPeuBwj9siaCMKBQuLhd96AQ0IVqAWVPMV7iZ18s5MfUywJc6vO5U0iuyR%2Bud5%2BNLDVb1kfq2xsk7Du3HdMcpbcFMqLxYHtlAv4CcCgvRSKljh0r3BLPxbveQAh%2FJXYtHRoMUMPggfk2ImAoYcWnO13Tzzt&X-Amz-Signature=6f23c5b07e64ee27836c9a9a9d984fe02c64240c7215a4c8fa54762601a0fcc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZPRPAET%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDyP9JVaIrJJqQvoIw5U%2Bpcum%2FUNKCMY5n0QEO9pOeFEAIhAJDlIOY0AUQ075FRD8OFgBw6421X9QWOnyFxe29uGKrTKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQI4F0IAYyfSGz%2FnYq3AM5Zv3eoB2OwJHt8laIvGdAKW4nfmNB%2Fehjw2MPUO2S5fm9ot%2FAHu%2BvvR9Q4ReL4mN07EA9zC66uYeGTWVv59xpSC6cnV6sS2%2BXxPQUlzE2idk7YS2pTcTPY3Lh2%2F2bWcloGX1%2FX%2B197GV3x2tziU3vMX0BgNvnnQRcl%2BAJ6em4vlRsHBBLI9hUl%2FSDcH%2Buversimnj5xY4CQjgLH4hptf8%2B5xHpEU7n5vbm9uMZpnsWVxfrQ5rKt%2BQJIQg%2FAXOkPSVEf8gF9enyVuL%2BBDkH84ano5QCudnEqqY5TPlc4DI5DZ1OHFjgkc%2B9XA%2BQDeTi%2FCkLQMxAL09jVeFjaU5E6fNvDu0WdpLFhoDX8d%2BzmIGAv7%2FdzHrvSUFCzqsaI%2FYjauL86g%2FlzH8E0FUKXgyemH8QH4Medq7q5G2xqCBvx4MdNgoUHD5NXSg8bRcvALL3C0xMGxJ%2FBvIjNOmbOT6yBzppnFSzGaaEZU2D56Dy1zFK7%2FSaZV0oi%2BpzeBsDEUaW7XSeYlI2VBlbpGXRX3gBZXiVqmubWfvj4Ii2pEa8aErA0r1zB4s69UpR1%2BIkSZvNMeujtpJOUbQIb53s3%2F1pIuu9GdrVehyGYJG0aLQixz%2B6hxpc%2BLUbDZJr8E%2FvzDvpunQBjqkAd7ZIXW6qx6dEdxxFmoGN%2BwaBFITjLNO6UoPDGX%2BUDSV0sAYh6GmLaL9v1UMA5%2FY%2BTEecqujw7JPVNKgECn3Fg6iMsPX47TTDlf1VwaDYCbsttEg8p%2BqB9RFv5qLLbVOT%2FrpQvucIxxuobOG2jXboKnoZXQJKHX9NkX9hNBIhknSw6Jn3kjD%2FD8E8T3G8koUD6iuCw6tntg8LyWqWWIkWCGUaAv7&X-Amz-Signature=db59063ae2fd38a630ca1c5e58d0c3cc330c8987f575a756d93c13fb13ef365c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZPRPAET%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDyP9JVaIrJJqQvoIw5U%2Bpcum%2FUNKCMY5n0QEO9pOeFEAIhAJDlIOY0AUQ075FRD8OFgBw6421X9QWOnyFxe29uGKrTKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQI4F0IAYyfSGz%2FnYq3AM5Zv3eoB2OwJHt8laIvGdAKW4nfmNB%2Fehjw2MPUO2S5fm9ot%2FAHu%2BvvR9Q4ReL4mN07EA9zC66uYeGTWVv59xpSC6cnV6sS2%2BXxPQUlzE2idk7YS2pTcTPY3Lh2%2F2bWcloGX1%2FX%2B197GV3x2tziU3vMX0BgNvnnQRcl%2BAJ6em4vlRsHBBLI9hUl%2FSDcH%2Buversimnj5xY4CQjgLH4hptf8%2B5xHpEU7n5vbm9uMZpnsWVxfrQ5rKt%2BQJIQg%2FAXOkPSVEf8gF9enyVuL%2BBDkH84ano5QCudnEqqY5TPlc4DI5DZ1OHFjgkc%2B9XA%2BQDeTi%2FCkLQMxAL09jVeFjaU5E6fNvDu0WdpLFhoDX8d%2BzmIGAv7%2FdzHrvSUFCzqsaI%2FYjauL86g%2FlzH8E0FUKXgyemH8QH4Medq7q5G2xqCBvx4MdNgoUHD5NXSg8bRcvALL3C0xMGxJ%2FBvIjNOmbOT6yBzppnFSzGaaEZU2D56Dy1zFK7%2FSaZV0oi%2BpzeBsDEUaW7XSeYlI2VBlbpGXRX3gBZXiVqmubWfvj4Ii2pEa8aErA0r1zB4s69UpR1%2BIkSZvNMeujtpJOUbQIb53s3%2F1pIuu9GdrVehyGYJG0aLQixz%2B6hxpc%2BLUbDZJr8E%2FvzDvpunQBjqkAd7ZIXW6qx6dEdxxFmoGN%2BwaBFITjLNO6UoPDGX%2BUDSV0sAYh6GmLaL9v1UMA5%2FY%2BTEecqujw7JPVNKgECn3Fg6iMsPX47TTDlf1VwaDYCbsttEg8p%2BqB9RFv5qLLbVOT%2FrpQvucIxxuobOG2jXboKnoZXQJKHX9NkX9hNBIhknSw6Jn3kjD%2FD8E8T3G8koUD6iuCw6tntg8LyWqWWIkWCGUaAv7&X-Amz-Signature=e50d6affbb640ceb7e9a158b65638b32d3cee280323dbdd9246ce8eaae97086e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2CH3UJJ%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIH38vzN917KdQlWCBYVzkmfHj1aurbbfdzlIy4gQzB9uAiEAxz88nnP4roa8dLU8VxLyyKjPK0HQVVll7Dg9%2F9KzM28qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIA6Z3btDvUVy6pEircA9qhJVjowok6vVP1GMar2MOrhVa6j2DSY%2BA3iOpUnO1%2FzYshtTTLODIvnVC1U7RAUNl%2FpclaE%2BQ2BADTsv7fC7ZjKWDTeFg9ZnpUy3UgytN5HiMXUdwZCEbF6onwasC74EvIsfTCXvEbpQUl6AO4G0FafFwsEjzz2zGzqQEeVEDfCkskYQPh9Ezus%2BAT82T%2BUz7oREbSHtcXwY7UQ%2FBQv1qurstLSqo78sTYmy9Bla%2FWVWE6x2ovycMXNvfgbyC5wvrwvaFEQF0z7XiXRZCqUOwA1PDtjGYKoa4yB3u%2FX4JBK4l5yYyghWPHI4NiHEO8tGTs9XyONjjSJZitCIm4fsjLA9ROQQPFiHCjA%2BW6qAdzxpCnC2FDQwWp55Jj4%2BM8ABPAwqSb%2BZcV696XItVicdp%2BJxHjxX5qvl72UnBn%2FIVzvC5jxGqOFmPpXmYxlx1gbQkV0SEROyDGFFpDVQFJrv5Ix1DwSSnjNqOlLCOTrwLi1ZsIyGIA5pF9XcAFimvqbSCVzk4BrbUM6%2FUj%2F2v8pxyUgeUwur8wYjAPxs9LB7EVQAuMxMtkDC1Dhn4yTogvjPup%2B7DWJWJSlRe3FGIToyUhmCfeTvjIQ%2BxQnB5HQo4YK%2FvE5PcpCxLx%2FhRSMKum6dAGOqUBRImYKvu9fSuvDWKjknQb6EAUzJdY5akDaOXqqs%2BSWvlt7cd1aKpRv2iOo01P4eTG%2BjPeuBwj9siaCMKBQuLhd96AQ0IVqAWVPMV7iZ18s5MfUywJc6vO5U0iuyR%2Bud5%2BNLDVb1kfq2xsk7Du3HdMcpbcFMqLxYHtlAv4CcCgvRSKljh0r3BLPxbveQAh%2FJXYtHRoMUMPggfk2ImAoYcWnO13Tzzt&X-Amz-Signature=6b7b25b86a61ba035f7d6cc082c7deef8d6a280fcc7b625e8bb6135a2da8040b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2CH3UJJ%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIH38vzN917KdQlWCBYVzkmfHj1aurbbfdzlIy4gQzB9uAiEAxz88nnP4roa8dLU8VxLyyKjPK0HQVVll7Dg9%2F9KzM28qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIA6Z3btDvUVy6pEircA9qhJVjowok6vVP1GMar2MOrhVa6j2DSY%2BA3iOpUnO1%2FzYshtTTLODIvnVC1U7RAUNl%2FpclaE%2BQ2BADTsv7fC7ZjKWDTeFg9ZnpUy3UgytN5HiMXUdwZCEbF6onwasC74EvIsfTCXvEbpQUl6AO4G0FafFwsEjzz2zGzqQEeVEDfCkskYQPh9Ezus%2BAT82T%2BUz7oREbSHtcXwY7UQ%2FBQv1qurstLSqo78sTYmy9Bla%2FWVWE6x2ovycMXNvfgbyC5wvrwvaFEQF0z7XiXRZCqUOwA1PDtjGYKoa4yB3u%2FX4JBK4l5yYyghWPHI4NiHEO8tGTs9XyONjjSJZitCIm4fsjLA9ROQQPFiHCjA%2BW6qAdzxpCnC2FDQwWp55Jj4%2BM8ABPAwqSb%2BZcV696XItVicdp%2BJxHjxX5qvl72UnBn%2FIVzvC5jxGqOFmPpXmYxlx1gbQkV0SEROyDGFFpDVQFJrv5Ix1DwSSnjNqOlLCOTrwLi1ZsIyGIA5pF9XcAFimvqbSCVzk4BrbUM6%2FUj%2F2v8pxyUgeUwur8wYjAPxs9LB7EVQAuMxMtkDC1Dhn4yTogvjPup%2B7DWJWJSlRe3FGIToyUhmCfeTvjIQ%2BxQnB5HQo4YK%2FvE5PcpCxLx%2FhRSMKum6dAGOqUBRImYKvu9fSuvDWKjknQb6EAUzJdY5akDaOXqqs%2BSWvlt7cd1aKpRv2iOo01P4eTG%2BjPeuBwj9siaCMKBQuLhd96AQ0IVqAWVPMV7iZ18s5MfUywJc6vO5U0iuyR%2Bud5%2BNLDVb1kfq2xsk7Du3HdMcpbcFMqLxYHtlAv4CcCgvRSKljh0r3BLPxbveQAh%2FJXYtHRoMUMPggfk2ImAoYcWnO13Tzzt&X-Amz-Signature=61595b7d267c33ea48e987d3aec6496ee0e15f94dcc654e3467a9d2990e5c68a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJ6U7DD%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBql%2BbFH7yF80kefUGvD7G8X%2By%2BqO1v6BcZAttHQDuDfAiEAmug5B3pLjHuWYvpcYqnlJcl4fPhET0vyWzgGoMcvhU8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENjKPuUqQ1JexJYzircAwpVxBV0T%2FgIhUQJHus70iMNHaQpMpt%2BmsQlhG1FCfnEbNNvHckkrYnXV5UKuqPLMsBciTKoae8CsbJK8ekJ9aK%2FShxM3cCfk3behXj9S5QBBmnOKjNR6rFk%2Bm7OzP1bjyss%2F0zYFPeWrJnqgKaANy7KlgrId3riSOMW3%2FsP5DvcCAI9IMLXLUbrwYDoAadqL8pzL%2FSt5mmqVhhM0dP1WPLQsjJAVYoJeK8aQx1fyxHxXx76Q%2FkW63neRl1jFnPu25zuo6Cq8ANf6vWpJh3n6y4TW7pyNIUwLfkpmDKH69SFHWulr28HxhDqqFYOJuyP6pSEvwBs1AAJjzE9gnQClVIUlANjxLeq0xibpC2JPkCnDc5EVa7Wf38Ax6qIh0KWTnFq%2FxiQDogw4GYbPWzFwAG2EMDUJ6ebtgFCQFodUvnb81CoZHoajyhs8Az%2B8YDpoYUQC35h4MF3vfMYpDrF2dLnlsg%2BdmZWZ06F4SMdSWyXEZN1UpFamLqm9CgRAjWSzD8o2cinwCOkpct08m8VQ3cxMibi4Jy%2BUfEreYIPp%2BKkQ7rcvX1kzGTDkrQYe2K9WFqmd64fZj7gnKcUbaAJsLlBjevM6QUNWzAVHK8%2BO8T5dXXVPBbedT59Ev6AMOal6dAGOqUB75mB4oTvbAyt%2BzmIYcCbpl7f2LoO8ZVXr7tZvDkyqwQxOnxVWE%2BIZpFlWf%2BAwXWaJaeOHmsibH2tu%2FdcSMAuUiS3E7FAYMgRh9lWidY9T4dddjWlcKBl9WSJ0lXR%2FAVN%2FCuK729mT5ShmpPR%2BeJRGvfJy7HiM6jp%2FxWiQ0bdYN6IE2sP%2FmoF9lIdh26Uv6oQwePTVSe7GxzVa9k6C6elDXCb21qB&X-Amz-Signature=37baaecefa7587da88d3582c650585172455abce06dd72c5d449810d3d32906a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

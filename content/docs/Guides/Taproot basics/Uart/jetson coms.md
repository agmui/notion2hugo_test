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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDEGANUE%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIBHdendf9LB47GeTktU1o%2FV4rfGZYAlL8RFpjPlm9vOqAiEAqcpkZIEQxrE0lQrnDZQYEVvy2ZX3eCcQMoChUieLW8gqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnYsQ1g2XH4%2FKWUqyrcAwUdTy4uSheufvdr5B2M0buFE%2F%2BLSd%2BEpqD39cZ9osfTw9ULe%2BE1Pdd8EzlLix1BHHwVvuoVJnt1wBC%2BaYvQMiIXu9HPPpcVmF1GFoCws3i2lr5tWenPwA7%2BIc0mH%2BaADKmRAQQ%2FFzjy8qDpAIhdSFSTKCQMmJa3Lu7zXe3ROuGYhfyovDdogxfojNcmaTFbZxUH2CSM1vCa8ztLK1elvfqM6%2FOmnM5ZaUSIH%2Fc%2B4i1EtX3VuQRG8D1RACXVs3JzsuOks45ynj%2B0L9ESrF5Zl5EShIzJ1CSjH6Y4GL%2B3pQRg2EDbQsFIAox2Lg0WuOOeSTk5QeqS2aitW%2BirpVu3DDaUoED3%2FgQh3cDQIzvML97fjKd9w3GrERb0v4jRi383libZwtFiut27APsz7tK4YKo9xGBnWXzde94QiAVrxn2JIbDC1mmIhUOjLa9ooCRqiUKWV4aAa%2FpkNMQ%2BSRZId8HoKDPg2dBwkU047S79ycr47CAkJSojchHW0UGmrbcflS76f8nSAKKf7mmIOQ%2FonFQ3yRlK7OPwsKs%2FuvrDX1oHZqrPXCm94j7rO4Td110M2dyey9PAnQeVZuD6DNtcNAe8oPKX1q1PgaE2ixEetKqAIMXU6XvymQE9%2BkYhMO%2BlqNEGOqUBXVyz773aNuZIqvjZvXJwh2n4tEfoFCoNQ6WWinwHvf0W2VElEZqp7XcSGvucCZ7mIGimYr7yLHjdzEoo5iBBfl38Tc68qOwjl7BPBzRbf7oFkkmMQReTcZsvHG3EHjZtA71KZuUPGp8a1vUPHC6QIlBMQVb8heU9IRbt4BGzETjAQcqglVJxflu%2BLb1EtYkDp3egGPDmIGeiwpWqbuJzNFYgyGtz&X-Amz-Signature=6e47cb90ef197fabecda28d9a9813e94d06895d5836f4067e997d9f35a130b1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK723PDK%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIHHYXKH9KdjN047h7ROJze2pp5qalVCWFLfTud7yKRnfAiEAl9kW1vP%2BSGt7VA0VJ4lyNcV2hXOeGh5LvBMGn9CyesQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrw%2BXcs0pFqH6%2FOXircAzmbuucV6EoFYSBgyM9Xzwc2XZMgJrok4Ds0baB13U8wQ8Olbig3tbkcd9Mu4hS2ZOUxESmSfvk8uFuxbI4oMlbgknpisHdrAHSTEjvQ%2B5LOCCjCfulIZEmo%2FxsKLJs7zP1zRAWu0XgkutZ43x5rMK26FCBqkDksNNp%2FkFmE6dbtm4Z3TP9z2%2F5zKDJ4%2BybfAwqrFSECaewFs9D58UcROP3FyI0PJKuyK9rMPChFZWVrD5Pt1dC1dHg1rB4aEtok%2F%2Fr8RvbXbLrROwSC4JN1HjnnstxW024bKnh2oh1aF%2FqMJDU%2Fb%2F28sMeC2MqTEfOzeuISfIY%2BUsWoX97llGwHVWF4abWmoaw6wrW7w8STEZQGknFP9aNKqfE074gwQOdbvLjhT9EVcukzOC03XIVscoMA39TGxFoLRFOo2xVpW%2F21l7UfOmkpe4v2nsAHrPiSgdDsXmJvgmqtp7TXCqtfdzU%2F23fjNXtU5gnq6Az6%2FcjDOueSZYuQiEXGeePGdwyxuC6HNMqVgQ8gMW%2Fu1RX20uHXYOtVEHJ7LZPJlSXgxk5Ls0yWoDvSOkmoF03W6X6F9rwEDJTTFaJ%2B%2FU3b0iLPK%2BpEvHnqIxZULSnRoEdoE2zEYGZ1jPkxge5JafwFMMymqNEGOqUBF1J73FBLd%2BqvwQ%2BW1s54nHIJBCKFZzMUTZOOYvfYY0nAsctT6k%2BE9u5R%2BGagHc3PMJMPOGQ9NcK1%2Be5YMKP2UEOyPxy9%2BakgH9FAwJUy3oD3l6MyUqNGhNbnPyuXwzChQpvhlVffDlJJBumgJ7RIbKqqU1s87k2C%2F4nSTOA8yFUtm79dpouFzRrqW6Rc0h2WYjuHd75bdBnf2IvDYDcuBnqcyWs6&X-Amz-Signature=88ab31aeca637bcb43c6b1c431dbb0ed5c35ca5fe9cfcfd7512f7e7f44f5cb2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IRQVLGY%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDLzbbopJxuqlaoYgATrUKIgib0ckXQKThxNhF8XFD0JwIgbDT8cR8JTgDq%2FYDaIRVeKr%2FO1WYwrtCsHux6wqkzXswqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8J48N5BZ6R3z60GCrcA9G7LtRjmczEjXeFDeIjZGEnZHTTQ4NSJpsnc9CK6bdjFH839CDHmZEQekTxBMpWRWwaX7aX7ubXHUkLdKBtACAyJODEqLzndiw73MbPenksWHc%2FjqNTG5EkQSz2w6uHp0J%2F1V74pQ%2FlvpQs9qvobO0aV4hlY%2Bs3ebc%2BHlR4N%2FTSs4k1kJkbmviY3Q9GKCAonAlnT97sxoN%2BxN%2F8CPEvan43R9peeGjOx9bAYyx60plqTFyrRo793PI9krhGAE3fcPGP7gGXSmEf614IYZ%2BqDGAmzki023lVJG9I%2BWj2ZDJ%2BFqTjTv8coQlJEy3B6eDF3PvsE6J3cf9OuXaMt41BqrWdwSr7uHHlQ0L60Gc70%2FnF0y0BYk1xFXvcraB1m793P6ABlQofQ6ase44R4OzI9uIBEYLVGObFG3jKrJ1VG5M1V4kWTsK1s9XTOIlR8%2BKtvzJJcBnooEbjynuCmtT%2B8iiaalwuexaEQZAF3cp56rCHmJVIQxMEP2EmDXU3N6K6hABJsD0%2B1pzSm%2FL6usdgsGg54ICUA9LWeaGC3M2EBvt0%2F13Z3jJgsI%2B7GhCE5cbXlSipoT6pDMIu3t%2BV1y9vUvtdf7EP03NXwOegsTAi5pR7Gvx4jdHL7DsYT3eUMM6pqNEGOqUBP18lughPWzvfaQft0DI6mwGKhfNUPybPLP4CLtI3cVlmBf4CWXTIPgNUgApECEcoJbIBJAlLyghnWxhFWYhg0UCz7scPYhUajm59TrBlcCL6goJbyviXBgZHp3zMTGv1Lq%2Foip%2B8n82Kk2IKxwsVppAm86F5juiKUbbIA3bwpIJS5eMEINvcTL37qAVySnvHYlsGw%2BeiGtnpLU0xn1mtyVoA59yS&X-Amz-Signature=eae358661e900d199a5a8c78dd4e03bbeba29d25ee8c87dd9feb3fa4339f0383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IRQVLGY%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDLzbbopJxuqlaoYgATrUKIgib0ckXQKThxNhF8XFD0JwIgbDT8cR8JTgDq%2FYDaIRVeKr%2FO1WYwrtCsHux6wqkzXswqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8J48N5BZ6R3z60GCrcA9G7LtRjmczEjXeFDeIjZGEnZHTTQ4NSJpsnc9CK6bdjFH839CDHmZEQekTxBMpWRWwaX7aX7ubXHUkLdKBtACAyJODEqLzndiw73MbPenksWHc%2FjqNTG5EkQSz2w6uHp0J%2F1V74pQ%2FlvpQs9qvobO0aV4hlY%2Bs3ebc%2BHlR4N%2FTSs4k1kJkbmviY3Q9GKCAonAlnT97sxoN%2BxN%2F8CPEvan43R9peeGjOx9bAYyx60plqTFyrRo793PI9krhGAE3fcPGP7gGXSmEf614IYZ%2BqDGAmzki023lVJG9I%2BWj2ZDJ%2BFqTjTv8coQlJEy3B6eDF3PvsE6J3cf9OuXaMt41BqrWdwSr7uHHlQ0L60Gc70%2FnF0y0BYk1xFXvcraB1m793P6ABlQofQ6ase44R4OzI9uIBEYLVGObFG3jKrJ1VG5M1V4kWTsK1s9XTOIlR8%2BKtvzJJcBnooEbjynuCmtT%2B8iiaalwuexaEQZAF3cp56rCHmJVIQxMEP2EmDXU3N6K6hABJsD0%2B1pzSm%2FL6usdgsGg54ICUA9LWeaGC3M2EBvt0%2F13Z3jJgsI%2B7GhCE5cbXlSipoT6pDMIu3t%2BV1y9vUvtdf7EP03NXwOegsTAi5pR7Gvx4jdHL7DsYT3eUMM6pqNEGOqUBP18lughPWzvfaQft0DI6mwGKhfNUPybPLP4CLtI3cVlmBf4CWXTIPgNUgApECEcoJbIBJAlLyghnWxhFWYhg0UCz7scPYhUajm59TrBlcCL6goJbyviXBgZHp3zMTGv1Lq%2Foip%2B8n82Kk2IKxwsVppAm86F5juiKUbbIA3bwpIJS5eMEINvcTL37qAVySnvHYlsGw%2BeiGtnpLU0xn1mtyVoA59yS&X-Amz-Signature=38c51f9d4723ea7eae50012f2c7636244197d059db8acbe46d4043dbde2887da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK723PDK%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIHHYXKH9KdjN047h7ROJze2pp5qalVCWFLfTud7yKRnfAiEAl9kW1vP%2BSGt7VA0VJ4lyNcV2hXOeGh5LvBMGn9CyesQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrw%2BXcs0pFqH6%2FOXircAzmbuucV6EoFYSBgyM9Xzwc2XZMgJrok4Ds0baB13U8wQ8Olbig3tbkcd9Mu4hS2ZOUxESmSfvk8uFuxbI4oMlbgknpisHdrAHSTEjvQ%2B5LOCCjCfulIZEmo%2FxsKLJs7zP1zRAWu0XgkutZ43x5rMK26FCBqkDksNNp%2FkFmE6dbtm4Z3TP9z2%2F5zKDJ4%2BybfAwqrFSECaewFs9D58UcROP3FyI0PJKuyK9rMPChFZWVrD5Pt1dC1dHg1rB4aEtok%2F%2Fr8RvbXbLrROwSC4JN1HjnnstxW024bKnh2oh1aF%2FqMJDU%2Fb%2F28sMeC2MqTEfOzeuISfIY%2BUsWoX97llGwHVWF4abWmoaw6wrW7w8STEZQGknFP9aNKqfE074gwQOdbvLjhT9EVcukzOC03XIVscoMA39TGxFoLRFOo2xVpW%2F21l7UfOmkpe4v2nsAHrPiSgdDsXmJvgmqtp7TXCqtfdzU%2F23fjNXtU5gnq6Az6%2FcjDOueSZYuQiEXGeePGdwyxuC6HNMqVgQ8gMW%2Fu1RX20uHXYOtVEHJ7LZPJlSXgxk5Ls0yWoDvSOkmoF03W6X6F9rwEDJTTFaJ%2B%2FU3b0iLPK%2BpEvHnqIxZULSnRoEdoE2zEYGZ1jPkxge5JafwFMMymqNEGOqUBF1J73FBLd%2BqvwQ%2BW1s54nHIJBCKFZzMUTZOOYvfYY0nAsctT6k%2BE9u5R%2BGagHc3PMJMPOGQ9NcK1%2Be5YMKP2UEOyPxy9%2BakgH9FAwJUy3oD3l6MyUqNGhNbnPyuXwzChQpvhlVffDlJJBumgJ7RIbKqqU1s87k2C%2F4nSTOA8yFUtm79dpouFzRrqW6Rc0h2WYjuHd75bdBnf2IvDYDcuBnqcyWs6&X-Amz-Signature=03218f3a73af21052bbc778fd5e16fb5ea02987281437741d1ff3b019486ff3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK723PDK%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIHHYXKH9KdjN047h7ROJze2pp5qalVCWFLfTud7yKRnfAiEAl9kW1vP%2BSGt7VA0VJ4lyNcV2hXOeGh5LvBMGn9CyesQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrw%2BXcs0pFqH6%2FOXircAzmbuucV6EoFYSBgyM9Xzwc2XZMgJrok4Ds0baB13U8wQ8Olbig3tbkcd9Mu4hS2ZOUxESmSfvk8uFuxbI4oMlbgknpisHdrAHSTEjvQ%2B5LOCCjCfulIZEmo%2FxsKLJs7zP1zRAWu0XgkutZ43x5rMK26FCBqkDksNNp%2FkFmE6dbtm4Z3TP9z2%2F5zKDJ4%2BybfAwqrFSECaewFs9D58UcROP3FyI0PJKuyK9rMPChFZWVrD5Pt1dC1dHg1rB4aEtok%2F%2Fr8RvbXbLrROwSC4JN1HjnnstxW024bKnh2oh1aF%2FqMJDU%2Fb%2F28sMeC2MqTEfOzeuISfIY%2BUsWoX97llGwHVWF4abWmoaw6wrW7w8STEZQGknFP9aNKqfE074gwQOdbvLjhT9EVcukzOC03XIVscoMA39TGxFoLRFOo2xVpW%2F21l7UfOmkpe4v2nsAHrPiSgdDsXmJvgmqtp7TXCqtfdzU%2F23fjNXtU5gnq6Az6%2FcjDOueSZYuQiEXGeePGdwyxuC6HNMqVgQ8gMW%2Fu1RX20uHXYOtVEHJ7LZPJlSXgxk5Ls0yWoDvSOkmoF03W6X6F9rwEDJTTFaJ%2B%2FU3b0iLPK%2BpEvHnqIxZULSnRoEdoE2zEYGZ1jPkxge5JafwFMMymqNEGOqUBF1J73FBLd%2BqvwQ%2BW1s54nHIJBCKFZzMUTZOOYvfYY0nAsctT6k%2BE9u5R%2BGagHc3PMJMPOGQ9NcK1%2Be5YMKP2UEOyPxy9%2BakgH9FAwJUy3oD3l6MyUqNGhNbnPyuXwzChQpvhlVffDlJJBumgJ7RIbKqqU1s87k2C%2F4nSTOA8yFUtm79dpouFzRrqW6Rc0h2WYjuHd75bdBnf2IvDYDcuBnqcyWs6&X-Amz-Signature=d44fa7dd7868e2527ab7046b07d648606e7ae0d1dfa2bb68e469a5e35b5a1e22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZFDP2V2%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCqJMVTPiD9JRzRwqAh7omuoCtmpPwoRCzuuDX2hRE2jgIgPLBx99j8quWV1qkI8zkPJJB6B3e%2FwLsPgXR%2F%2BJo8OAwqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BB4IIzqEVNUECb%2FSrcA4HLSvX5Hw9pfsf9ii9O0JDnaCWb8qvMVzUFm16lw4t8KFJMSgdzyYz%2FO6Pdbyg7HaQ%2BYJ2r%2Bh5P1mTLlIPDIkG3lhS2NMH4cubl57vShXHp%2F%2BPiOaP1MvbHe6i3tqJ96ojEqQJvqZCUu7zQixdKtshYuef5rAdP6VjDJr3qpwZkJewmQQWzNC%2FEPrZPkYNRq8qWL8MagO89hO8kIKaaHZppmaFvgRSAXN%2BCp0gQdykXl2Uo%2FOk8Tb%2BO4PncMhaIz31ATfr6nRmQfMJaGtvei2V9ckgidzIlziKyMREzx10G%2BYmCJexF1vOeNfj1EqrHKDMQjfkRtBRlf5rTNGBTqPHI5IQtND3cRb5Np5jwP8zc3Ml6FDNzPzBJDV%2Fp%2F53G5KwiWx25GQkx4PChc9uQDSOblaVZFVcwzxphpqYu0GiO9jLvQ8MLBP1%2FmICUOuRGBnOZqDOa2jQyOoc3PHNQ1V5HyvJQVs%2Fl%2FkTVaLgERmZpJyt8PV46e%2B7%2F7etS5GlhC4VpbSoXxDSu9vc7qAmj8I47lcN0im8aaZ6k%2By9d0BM6eWf9CBtPqaGTRsdn6LXqAsSoMR8bS2NzwtTNXK%2BvodJqPRipKlGYok2bOs6PnoquT%2FsHB3gRljL1ojarMOWlqNEGOqUBEcL4esk6VOO54y3W6%2BxJNZB227fOGRCUMVlMI%2FCc2X%2BjT%2BBG40%2BOi8WnnXJje8Y%2BN7%2B3Avy82jo%2Brpu%2BNQufbNOXFrtDKBAmLlNY51fNpDtfz6mcObnJpk9aeLzfCbqgwxoEXE2rSvM77bfoKXVs2N6p48%2BlfZpCrpLBS0yfaWXFJrn1v1WBD%2BEnzrAKF%2BZ30nU%2F%2B8InSrUNwtgM0UIA%2BqqA2Cjs&X-Amz-Signature=7f1accc1c05fa9c4df8e4866ecd69981e3e4a8521156dd54bdcb249b6aa421c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

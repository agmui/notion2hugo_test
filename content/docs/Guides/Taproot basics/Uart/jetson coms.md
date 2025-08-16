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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDBNHLKW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQD3%2BczI2tNOLwFs%2BflhmPc1lcAqQWnjXAMi0f5dW757TQIhAIPhSyS4YEz3bjvqW9WR3kR9jcgz9dgu289UaXpNZZJpKv8DCHcQABoMNjM3NDIzMTgzODA1IgwkWNz3lNUN1z9DH14q3AMrM0Op196ayAovzxE%2FD8DCf8kj%2BUvkiTAtAOgo4GmuOKHFjMAnqexEWIRXU8I5D9YNmbhJzDh759i%2FSO9fq0CL2MEi76ySa60x2ucrcs8gjZniG15SHG8KYlRu3hxVyvdyYIwQ%2FzD0Al68n517vHiVmOUCg2xdnqAKVXjumZiCbUb9PEEKNIQYtOzTC2Z5msWJ1r29sNIu9yU8IyIifZfy%2Bj7sXS4rO70dldBtPjzpfc9jVw8z5VOqRdciXT3E%2F%2BjfkonsWW%2FDF%2B%2Fmad1Wyt6DZYO3BFe7YKq%2Fu2JON0YyFkEQKMbStLEZX2h9QaUdFMbRHMwymTQxb91IXtORU2KaaPzI4Gl5gCsEJVcku6U2tW9IERqXrFWOvSDMQ3991cvyb1YpJfG4NlBdNYNUMlM1wFTeCBCfRzGwNEsPaXFXe1AhiLOzKeHc0oD%2F7BEyaxyKxcXBaSMl09tUNbQYEP%2FjyUWKg7o93iPB3%2B2N8z0O7%2BhrXXAghy6OWttKA30t2oCLH6qH%2B2FqQAnTsnOiSzOQrx10%2BNa6nvPDDgaQAiM3kRPq1cUrl4AzWWeXlzU10c6V%2Fh4L0hLGQx%2BD2p5i4SUVWacLlWIq00xstljfnw3Vm4FxiBhH8d5wV1wjzTDdk4LFBjqkAYL0YvsBltrYh6G3P0qb9qtVr3PbRFN5fAc2FzyHFlNMkFRR0m0VkjAqUlh9RB5CALtRsrmFhCaQAGopUFAECMjVoVK6uPpnM4XCZFES82mRSDRYVN%2BUFC8vgGJL45dPs8OpGpmpQeuYX0%2F3W8Lpmg8Jap0NlOPPdagBhOM9AstWl3u7dmDCgDVdBXWwD5W8AD%2Bljy0aPXY%2FhM2ReKkZiCnfWq90&X-Amz-Signature=8ae51f658ffba347b881f6178fbdd4d5c9052a58e98675377c3d17908dfa96e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MUBQGQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBYjqqJ1AUKQDEp2vi%2Ffjj3j9M0AkTTraz7HMcQeKgIHAiEApPESG0l3eivzzP3U4qJQ4rEmf7%2FyNyv5kSHSzhedEX0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDN83u9GdceIhS6gplyrcA0Dc8MCezLS4YiklJ7cPpTNBaYbzn9sQHRxxXOlHUNmH0feOKJawPFvZTTvVOc04iZfUoh2REWLmRqF8Xj5C3J4Y0WjIJScxwIG1dyRAL6AoLUNZU6MzfUIXwZQQiJ9sK3A1j%2FwHozYiL2QZXVupH5qgm4yCaHtVYlez1UR5C2C3Q%2BePsTvaovZnivoKiJMEJnbea0FHwECEwGSFILw8buzeKK21JzTiw51w0V7opzZYMdqAmqYxV2ZaH3jDvxlDoOfm1rdz9xpvLfQWKMSJ6DdRQjgGe5jK%2FxTyqvVN9YbNOMv2tOvqJAtzPrsvh0hJuHeUApBvtGZ%2Bt137KgRFkiqZadyiE7wURy80UdPJDcdU9H7A9KfeB%2Bk3n%2FQFEnWGooSY5m62HS5NAuln4KFt%2Bbfmcj%2Fd2l%2BZuA2VJYjfTDSZhFUXko30OClsRDYM61%2Bo%2BUc95yCbh1M6nstJpYZMU1qCsvxUgq1Qq%2BNAHnvpRIWPoPGEtUvzy1lONxnDthMRW3QQ8UgkTcd0tcV2xoowtw3g8rtnrSm4bv2ptfy6ozJuRQT12aNowfz1Gd0kypmKivEclFhqXuUnjbSL9BocEdHKeFfnBjuPS%2BJRf%2B8yYqJFYgW1ZqMKzL%2FRykPBMOqbgsUGOqUBmg%2FnuDIw3SLE64AmoeqJqtVkSGy40N%2BRJv545PKj92Jz6ra%2BGTS3spK8NRIloaCRuc%2FcEl3E7NxTjrHzXQhX%2FnxO1%2Bz6JkMk29rHyKGSLYa%2FArSRotHMAGMWaowVb2jjikkhm19Mm2RvW0eeM8QV%2BTRULlTmaQFLn8OIC%2FNIvgE4ML%2BkuSPMucTcXHGoIyEpxLrGVynjIa44yyWoyOAzw%2BbdFprf&X-Amz-Signature=85f47e9bdbfecd636d72cf9c1e219ebfa673f3e43b9ac68e97213135a5b666cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VHZEP6V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIFy%2BOOrI%2FV1SRKpntFR8JW809%2FxXvTeBpZjQKOcMCg4oAiEA0G2P6Ix5m4ZrpsoTRhxvIdp8edHZ%2B%2BjQiuEt10HSa4kq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO7fEIxN1Z%2Bk8l8n7yrcA2yKuLDnBVi%2BQF7jXnsUoFrxpy%2B%2FMG8ucUBYrYfMLg8rc4ZuWETKFcCcb%2BnYUBL%2BjCYfoSM71MKQ1WooiCmrBZUwXeIC%2BxHK32zKvmSJ3%2BnBrSKUjbNriYDntcS7Y4bMNQnS5DPjogA7A4kdR6ezvgPXPjwqwN%2FiCD80wFM%2B5sjvCoWE45LMWtbpBt6qAk7LxnaIaxRH%2B0DsJ8vQSGjhtOTXeYgEliiBhZR8Ryfie4Ay6xnRnyubsrFflunFDFeLIMESjyU8MucoIWR5mfCajJHifcrYNHLOK5WOb6QnUWamXuZ%2FOw4hSrJPT1aWtgBKVgSwA53%2FUae6W%2B1sL4m96gQjzPrxdGbGr8DB3uQ6ispbaQv%2BfNX22Rk0DYAK8xO7yprJgGLDK9xmsgRAumwk7naMKdHBNLjv9Ogvef4wgmtakn6R6MKY7KGCxljtkKEBRf7a4TiTxTL9v0QzZ0GJ5mdsoDDI0B0rcY0c1Ev3rtVUOP7YjMDvqa1JnnP20h26wLzDCJ%2BCGsiCxJ48EouIrFZRZq2oB1x%2Bd2F1k9mjDcQtyL7IMNxKEwgxMlzsw1ZoZQ3R9%2BRIRb6UAPLAtFDRHTQeU%2FDryACjiYk7ROS8KAGeCDqpPm88OX5j7splMNKXgsUGOqUBj7U5fGPuuqrzIK%2F4iSAetGIkxi6gjGt%2F7kqPDRNe%2B62cVjt47ajEcuwpIRp0wiVCyQFNZUxgaPUKdU7mKzEw%2BWq%2FfEpJiJwkArRpuxtLHLvL%2BMDvWhGDTQ6FuGyFp5T7Bc2KUarxgNMOBqHfdeet4J3HFWKwXWTMilYBiHpKTfpHO8mUrEozYcVtzArtjTy2fadreDX4ng76nlwz33QDHTW%2FoxYt&X-Amz-Signature=423e139180e5ea5b9e130b03da1b158e60eed4b012b718384172d314cec06baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VHZEP6V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIFy%2BOOrI%2FV1SRKpntFR8JW809%2FxXvTeBpZjQKOcMCg4oAiEA0G2P6Ix5m4ZrpsoTRhxvIdp8edHZ%2B%2BjQiuEt10HSa4kq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO7fEIxN1Z%2Bk8l8n7yrcA2yKuLDnBVi%2BQF7jXnsUoFrxpy%2B%2FMG8ucUBYrYfMLg8rc4ZuWETKFcCcb%2BnYUBL%2BjCYfoSM71MKQ1WooiCmrBZUwXeIC%2BxHK32zKvmSJ3%2BnBrSKUjbNriYDntcS7Y4bMNQnS5DPjogA7A4kdR6ezvgPXPjwqwN%2FiCD80wFM%2B5sjvCoWE45LMWtbpBt6qAk7LxnaIaxRH%2B0DsJ8vQSGjhtOTXeYgEliiBhZR8Ryfie4Ay6xnRnyubsrFflunFDFeLIMESjyU8MucoIWR5mfCajJHifcrYNHLOK5WOb6QnUWamXuZ%2FOw4hSrJPT1aWtgBKVgSwA53%2FUae6W%2B1sL4m96gQjzPrxdGbGr8DB3uQ6ispbaQv%2BfNX22Rk0DYAK8xO7yprJgGLDK9xmsgRAumwk7naMKdHBNLjv9Ogvef4wgmtakn6R6MKY7KGCxljtkKEBRf7a4TiTxTL9v0QzZ0GJ5mdsoDDI0B0rcY0c1Ev3rtVUOP7YjMDvqa1JnnP20h26wLzDCJ%2BCGsiCxJ48EouIrFZRZq2oB1x%2Bd2F1k9mjDcQtyL7IMNxKEwgxMlzsw1ZoZQ3R9%2BRIRb6UAPLAtFDRHTQeU%2FDryACjiYk7ROS8KAGeCDqpPm88OX5j7splMNKXgsUGOqUBj7U5fGPuuqrzIK%2F4iSAetGIkxi6gjGt%2F7kqPDRNe%2B62cVjt47ajEcuwpIRp0wiVCyQFNZUxgaPUKdU7mKzEw%2BWq%2FfEpJiJwkArRpuxtLHLvL%2BMDvWhGDTQ6FuGyFp5T7Bc2KUarxgNMOBqHfdeet4J3HFWKwXWTMilYBiHpKTfpHO8mUrEozYcVtzArtjTy2fadreDX4ng76nlwz33QDHTW%2FoxYt&X-Amz-Signature=51c8e586a78494e7db83d94a5efbb402c9865872a1247220924812ba405dac32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MUBQGQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBYjqqJ1AUKQDEp2vi%2Ffjj3j9M0AkTTraz7HMcQeKgIHAiEApPESG0l3eivzzP3U4qJQ4rEmf7%2FyNyv5kSHSzhedEX0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDN83u9GdceIhS6gplyrcA0Dc8MCezLS4YiklJ7cPpTNBaYbzn9sQHRxxXOlHUNmH0feOKJawPFvZTTvVOc04iZfUoh2REWLmRqF8Xj5C3J4Y0WjIJScxwIG1dyRAL6AoLUNZU6MzfUIXwZQQiJ9sK3A1j%2FwHozYiL2QZXVupH5qgm4yCaHtVYlez1UR5C2C3Q%2BePsTvaovZnivoKiJMEJnbea0FHwECEwGSFILw8buzeKK21JzTiw51w0V7opzZYMdqAmqYxV2ZaH3jDvxlDoOfm1rdz9xpvLfQWKMSJ6DdRQjgGe5jK%2FxTyqvVN9YbNOMv2tOvqJAtzPrsvh0hJuHeUApBvtGZ%2Bt137KgRFkiqZadyiE7wURy80UdPJDcdU9H7A9KfeB%2Bk3n%2FQFEnWGooSY5m62HS5NAuln4KFt%2Bbfmcj%2Fd2l%2BZuA2VJYjfTDSZhFUXko30OClsRDYM61%2Bo%2BUc95yCbh1M6nstJpYZMU1qCsvxUgq1Qq%2BNAHnvpRIWPoPGEtUvzy1lONxnDthMRW3QQ8UgkTcd0tcV2xoowtw3g8rtnrSm4bv2ptfy6ozJuRQT12aNowfz1Gd0kypmKivEclFhqXuUnjbSL9BocEdHKeFfnBjuPS%2BJRf%2B8yYqJFYgW1ZqMKzL%2FRykPBMOqbgsUGOqUBmg%2FnuDIw3SLE64AmoeqJqtVkSGy40N%2BRJv545PKj92Jz6ra%2BGTS3spK8NRIloaCRuc%2FcEl3E7NxTjrHzXQhX%2FnxO1%2Bz6JkMk29rHyKGSLYa%2FArSRotHMAGMWaowVb2jjikkhm19Mm2RvW0eeM8QV%2BTRULlTmaQFLn8OIC%2FNIvgE4ML%2BkuSPMucTcXHGoIyEpxLrGVynjIa44yyWoyOAzw%2BbdFprf&X-Amz-Signature=202eb6b388895fb9a423a1bc75dd478c0d7c92a8569dd093d4e9f01d083c791d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MUBQGQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBYjqqJ1AUKQDEp2vi%2Ffjj3j9M0AkTTraz7HMcQeKgIHAiEApPESG0l3eivzzP3U4qJQ4rEmf7%2FyNyv5kSHSzhedEX0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDN83u9GdceIhS6gplyrcA0Dc8MCezLS4YiklJ7cPpTNBaYbzn9sQHRxxXOlHUNmH0feOKJawPFvZTTvVOc04iZfUoh2REWLmRqF8Xj5C3J4Y0WjIJScxwIG1dyRAL6AoLUNZU6MzfUIXwZQQiJ9sK3A1j%2FwHozYiL2QZXVupH5qgm4yCaHtVYlez1UR5C2C3Q%2BePsTvaovZnivoKiJMEJnbea0FHwECEwGSFILw8buzeKK21JzTiw51w0V7opzZYMdqAmqYxV2ZaH3jDvxlDoOfm1rdz9xpvLfQWKMSJ6DdRQjgGe5jK%2FxTyqvVN9YbNOMv2tOvqJAtzPrsvh0hJuHeUApBvtGZ%2Bt137KgRFkiqZadyiE7wURy80UdPJDcdU9H7A9KfeB%2Bk3n%2FQFEnWGooSY5m62HS5NAuln4KFt%2Bbfmcj%2Fd2l%2BZuA2VJYjfTDSZhFUXko30OClsRDYM61%2Bo%2BUc95yCbh1M6nstJpYZMU1qCsvxUgq1Qq%2BNAHnvpRIWPoPGEtUvzy1lONxnDthMRW3QQ8UgkTcd0tcV2xoowtw3g8rtnrSm4bv2ptfy6ozJuRQT12aNowfz1Gd0kypmKivEclFhqXuUnjbSL9BocEdHKeFfnBjuPS%2BJRf%2B8yYqJFYgW1ZqMKzL%2FRykPBMOqbgsUGOqUBmg%2FnuDIw3SLE64AmoeqJqtVkSGy40N%2BRJv545PKj92Jz6ra%2BGTS3spK8NRIloaCRuc%2FcEl3E7NxTjrHzXQhX%2FnxO1%2Bz6JkMk29rHyKGSLYa%2FArSRotHMAGMWaowVb2jjikkhm19Mm2RvW0eeM8QV%2BTRULlTmaQFLn8OIC%2FNIvgE4ML%2BkuSPMucTcXHGoIyEpxLrGVynjIa44yyWoyOAzw%2BbdFprf&X-Amz-Signature=3da03476d4e0d5823d8fdcf81fef6fa5b88922948882d6d08f9fd1e8cf9b3ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6YEKT7U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDhQ7if%2BlCffV%2FehLtm7kB7mbtsNmAoaop533jJHRmHyAiEAugx0A5QfXTOm7EdvuGDfFpK5Iawe%2FecANZ6MDrtPPtcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDECXwIivObzZX%2Ftf0ircA9kUhhdcdwD%2B2slHPwbEB%2BnEPHTtZu1f8zDVdZTfU2fH5SboYjoXeHeiXVdPyKfSeDLeie8bBCHPhMlQUfkyMzy4TaouqGvykZoAXSuHT3Xe5VglRlvFXCxZJk2EIaAh2QEClCFKPfBualDOHwO5Iq4%2F%2B1R0q42ghQGO9F9rshFeXOtFoH29cEPaoJi8f%2BQnyhHlyxk5SkqEqpVZQewFRfLd6DZHCeN4sQ7DULWrnK10ZxkWs2EmtSyIrcoPzT3VrthrbjX5RxbFTOz2TxtJa3BWlrXuOuyp67hnAUkraRzPyXvCBsgjLFPP4yDcPQXPrD0TO3EU8J3Ux3MJpoT6lU1gp7jnPu38cu7r0ZaAumJUvKQqvMPFemMxYvQQtLDVD5i%2FgzhfHmCJJY%2FeyV9d0oLmo%2FSUnbF%2FJEEyNFK8u1410jYEU%2B%2FUxmv%2FLtOzCZBQ%2Bf8j8h4ILJm1B0%2B%2BQEeV%2FwCEM0p59PdG%2BJlh3W7wsj4kllqnTEztTpaEfzA2Kzqg%2BGNWa6q8qZ38FuGvzXtdw7QsrlI%2FZiGtbH2Wl0t1qzGwGa2t%2B6dUHQpXjno4iSspE2yPQXYBcQ9k3UBFmM6nrP75XT08SiAjGxiKljILeREhxVHBTc8rDGn7EhRcMOOZgsUGOqUBJoeUOecLjWFuazTVVnXiD0mI7gsB0ZY0PJaMXnaio9JeOeCPiEoHD%2BLedgzrLZob%2F72Lzp4gqDm4DLlGpZ4ZKTcYC%2FNFLfhO4ynuEa%2BJfMZ5cd13xl6Hrr46NolyS9aV0k%2F%2Fb8yl5vvPYKjsVQk8qPPNK0OuI4q59Z4tQ42czJogCZKJo1TZk537eHWWoqNbotaUQrdNq4rH9vjGpy23181SSguA&X-Amz-Signature=ee3960281e91f4baf4f2688d19a04385d8fb62ca7759f33964cdba3c764ca07d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

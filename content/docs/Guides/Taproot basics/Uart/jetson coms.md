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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WMMVUWZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC6AysEnAefpR8Eun8ivlNMUB%2FTeNbaViOM05Wb1Gs9jwIhAL2n9MPrmOROZFrdw5ipKY%2BejgVuL9im2IlHIRyoW7l%2BKv8DCDYQABoMNjM3NDIzMTgzODA1IgyYXNfw3W%2FgqjPazU8q3APxzeu9sx2MWvIxWi8VvrKwO9R1P6kw0E%2FVfvo7sIGbV2vdRrKo%2BM71UcsVtlMJ2aGfMU0%2FBgjTo3ROJgpwkaFSGJcvrUpVK2SFi%2FGgUaK37LjfabehsWqHYWPbS55S2RedDerZMJ9nNV65Zq6ZYj0FCrer6QVbdojJAGJ%2FowB%2B2ddPcwRgYUimmZ6Mp%2F46tyNHD%2B1q986YdsU3S2NygYEoCJCdRHiMItuULcpAmOqMRiXd%2FzaR%2Bnlzi1RMu1B5Zz2mmMxk4I%2Fr0Wbsi9UIOfWjjBI%2BVODq1kqK1JgaN1PDuQF6JojFIL3RKCAMyH9hEp91zdtvmhRU3pyfvs5Ng%2FKKoLcrdaDXd9c1V3ILa9Sho8XiB5p2bg%2FLSFmhBWxDv6TNU4qjV9v08PL9YVEohU3DmWVKjC1qrYnBzsMa%2B56SkyIiFiuyQUnDavVsPVYyWQJo3NvZfNDvKSkAYl6bZmgcLfLxUVEqqtwz65Dr9I%2FG9vbmlXD4oVv1Ajnd7FdACEXnSjMNmiS6qIFSlhfdShcW%2Bv9pYPcPR1ODzKkma%2FlFhnP689L7XHwtEfK7p8OuI2rdhUjnpm9LZPzkjYjCZ29rQDu0y%2BFwV6NoGtwiBpd9UTXJOij3LKF44HKH4TCMpOvKBjqkAVtSJNOjDrB9THogR9fsWkWsqo5G8OHVZAJOreAZCcH5zORR%2BrWbDBaUwU8R8QYd%2F5JhmHbQUw91XWz%2BE3JacT21OqGyBEJXUyBef1MkqqGRraUa1YeHYayfZ5EHnkhW5p5HuShr7MAhp9vXTFjmzUiWPnCmqctBkaOPCx5qHANYid8jhYXouKIGx0IFdcTnNs9F4wJ2WoBA3riwFyWjOImxLoe%2F&X-Amz-Signature=9092ebb8173aba3de89b6b69482bb336546dcbb31e1b8779e44b34f847ae995d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QPDVW6X%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCxmZ9Lc9emcbtpAkH4Qyu1Tn29ENJkozrwEyhjfPKMngIgL2sL7zWqrJK4BgcuiUEdfLcxkM3Mo1ktEJckrDtPG%2Fgq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDM9cEuO4MOGQgE%2Fc7CrcA2sg369o%2FAqnje1bvWUmvXkle5FYByWPiYB4H4C9nsnRLIB3pcUdpBxjAHr6nZj0vF8%2FKJH4TE4XFKb9S14o%2BBMBog%2F7MDB5afnJPzcNpzaY2qxNzSVsj3ko7%2FFyym14hCqeZh29YtSxmOOTVeFl23H51zRjf5RUGc5v5%2FiyU2YsMD6LEKtexgfwx23PXktOYvqJoG2Jo22aJcXBYCg3vMMm0eIQalD%2F44sc1nd340dJDA%2FKxF3ixIWf8UYyXRLN9bOcXnA2%2FLLz3xdG6HBavznjputOpPwBOI8%2BoroMyyNbGl4Op%2BHKta751GSO8o7sKOS8%2FJgKOebZ8wx%2Bd2HbmMjtHMUUCm7GJVdl%2BQd3Rq9WLbaWdlfBHhRfLe9yFTEJ0Z3yj%2F5VkIOyuvZ8BF6z8nOgo8b40pA0HWNRuDKT86ZnafRYkh2gmVkmiDhoNgW3YURTPP5t9zvi8asgkafQuENghCKB5%2Bs8lgCvqvj5dLxF2bpGdQSHzMutonsFI6Zdtcj6ubPtlxP%2BorDFWmd%2B7ON5qGjhrK2UF90zAAWwjCHxzlGKe3mLquCToyUID1rzlydHugbDzDk3YDSb4mis0lPsrb1TULlbNqk5u%2FiB9m2xuGBhGc35qJtLeCVvMKK%2F68oGOqUByQ0K4bFbLMjpIfwv4WGB%2FyNMBJD9yTi7DiSQs1uMQhq7cRLm44TGIanQ7Kd%2FTVEvYwKdGBvowSb4PThmtrYjf9vS%2F1egndds9Jw%2BADjueJikx04evWMtM7f9Cbr0lAqh0FI876jLGhPixAW%2BmI%2FBeqJsG1jXotPkbOU4OtQR7gNOPtZW92Ue4keNfBuRASugH1Y2yCRCu7q7kgA7ShO730wLYv1i&X-Amz-Signature=182b0fa9536f85a879c9ad6ae55d90f64357670411402b63bdd43ab7d59dc055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AGVLFZY%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDeERczKjD5xuhdShvEd0H2TcfSxUq9wzSaXqkq5k64KAIhAKNV2A43CvYefmtQ93bW%2Bn4ZwJhL4jM1dw3hIzG9Rh9UKv8DCDgQABoMNjM3NDIzMTgzODA1Igxqm5b4%2FYXfOVkVWFQq3AORrmEHdALfqeY352KNNyIR0kACrTCrHkZYnxGep4olomIAVVbGcYVZdBib3xquI8SbpsjgOT6sCaZImOoisUF8NemEPMYD3hFIhAbyT2O79ddLwVQIzv5PZsy9kRNYxDl51ATkYG54P2HsUdbOiSgd9cxQHFwSPrTPabLtxP5BHDQUQzhXcCEsF7lCtVTyf6D5P4odbPPaTMED771mUA8%2FLwaxcMEHUijS4Q%2FPFlvg60dFnPQZlxkAKqDRvVvZNM2%2F0n4hAUs8NSB3zXAOLiON7c5upn7nHW%2Fu4jfHUiUVhr1Azssn2iyZhlIf6FCt0JcNVjW23I%2FUcDmjpfrZHXXTnBRkLKjLdOZ%2FWpqQUNRHFcbuR62zITYHb1mB2bDOSDLj7LuGB2SATZebjXaMfCccKJfWJIQJWBinRMgAxu9WALcQ0T3ou4sskqjE7ThiCVO931%2FNpy5bRTcelQQW1v%2Bs4oEG24OA%2B%2B6VbRlA63k5IjbkEFPGFjI0OLtM8Xx2kv9u24jwGJpqy4mvhJy8uiaeG%2FyigmdSIfn6eQoDIiEJPFbqQKl24SPwrZQDu4YfmQEwaksaDs4gfox3N7v254BvvV%2FIywnPGA%2BNrhTJwCt64fNNyMRTSCZ1NLaL7zCh0%2BvKBjqkAeEP0AejgZxwCdFEXNl8saSmiQCr90WsfuRMZFtVHt8c9xQdbOiwVtA5Chb01aVSRju1Tsv8G1aqiJJ%2B%2Bxano6Z58xkkwZ0cKRqa9JqJjBTHuau6eLuesPpiIX6KI3EGDE0wMovAa2jYIS%2FcLDUmc%2FrWVCIpRCj5GLvFl%2F5KmdnlTWLf9rAMt%2BKnQ6Y7G7X4n%2BGdfbBmF5%2BtDnE27rU8yA1ogETS&X-Amz-Signature=784815f97a4e19f1967eb9ce5c2c418fe42aa76dbf88acef97d848b23203ef9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AGVLFZY%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDeERczKjD5xuhdShvEd0H2TcfSxUq9wzSaXqkq5k64KAIhAKNV2A43CvYefmtQ93bW%2Bn4ZwJhL4jM1dw3hIzG9Rh9UKv8DCDgQABoMNjM3NDIzMTgzODA1Igxqm5b4%2FYXfOVkVWFQq3AORrmEHdALfqeY352KNNyIR0kACrTCrHkZYnxGep4olomIAVVbGcYVZdBib3xquI8SbpsjgOT6sCaZImOoisUF8NemEPMYD3hFIhAbyT2O79ddLwVQIzv5PZsy9kRNYxDl51ATkYG54P2HsUdbOiSgd9cxQHFwSPrTPabLtxP5BHDQUQzhXcCEsF7lCtVTyf6D5P4odbPPaTMED771mUA8%2FLwaxcMEHUijS4Q%2FPFlvg60dFnPQZlxkAKqDRvVvZNM2%2F0n4hAUs8NSB3zXAOLiON7c5upn7nHW%2Fu4jfHUiUVhr1Azssn2iyZhlIf6FCt0JcNVjW23I%2FUcDmjpfrZHXXTnBRkLKjLdOZ%2FWpqQUNRHFcbuR62zITYHb1mB2bDOSDLj7LuGB2SATZebjXaMfCccKJfWJIQJWBinRMgAxu9WALcQ0T3ou4sskqjE7ThiCVO931%2FNpy5bRTcelQQW1v%2Bs4oEG24OA%2B%2B6VbRlA63k5IjbkEFPGFjI0OLtM8Xx2kv9u24jwGJpqy4mvhJy8uiaeG%2FyigmdSIfn6eQoDIiEJPFbqQKl24SPwrZQDu4YfmQEwaksaDs4gfox3N7v254BvvV%2FIywnPGA%2BNrhTJwCt64fNNyMRTSCZ1NLaL7zCh0%2BvKBjqkAeEP0AejgZxwCdFEXNl8saSmiQCr90WsfuRMZFtVHt8c9xQdbOiwVtA5Chb01aVSRju1Tsv8G1aqiJJ%2B%2Bxano6Z58xkkwZ0cKRqa9JqJjBTHuau6eLuesPpiIX6KI3EGDE0wMovAa2jYIS%2FcLDUmc%2FrWVCIpRCj5GLvFl%2F5KmdnlTWLf9rAMt%2BKnQ6Y7G7X4n%2BGdfbBmF5%2BtDnE27rU8yA1ogETS&X-Amz-Signature=787d0c61834c3a5d3112961ac912c68f4c3b7e988bab84de233334a6b9e9490b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QPDVW6X%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCxmZ9Lc9emcbtpAkH4Qyu1Tn29ENJkozrwEyhjfPKMngIgL2sL7zWqrJK4BgcuiUEdfLcxkM3Mo1ktEJckrDtPG%2Fgq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDM9cEuO4MOGQgE%2Fc7CrcA2sg369o%2FAqnje1bvWUmvXkle5FYByWPiYB4H4C9nsnRLIB3pcUdpBxjAHr6nZj0vF8%2FKJH4TE4XFKb9S14o%2BBMBog%2F7MDB5afnJPzcNpzaY2qxNzSVsj3ko7%2FFyym14hCqeZh29YtSxmOOTVeFl23H51zRjf5RUGc5v5%2FiyU2YsMD6LEKtexgfwx23PXktOYvqJoG2Jo22aJcXBYCg3vMMm0eIQalD%2F44sc1nd340dJDA%2FKxF3ixIWf8UYyXRLN9bOcXnA2%2FLLz3xdG6HBavznjputOpPwBOI8%2BoroMyyNbGl4Op%2BHKta751GSO8o7sKOS8%2FJgKOebZ8wx%2Bd2HbmMjtHMUUCm7GJVdl%2BQd3Rq9WLbaWdlfBHhRfLe9yFTEJ0Z3yj%2F5VkIOyuvZ8BF6z8nOgo8b40pA0HWNRuDKT86ZnafRYkh2gmVkmiDhoNgW3YURTPP5t9zvi8asgkafQuENghCKB5%2Bs8lgCvqvj5dLxF2bpGdQSHzMutonsFI6Zdtcj6ubPtlxP%2BorDFWmd%2B7ON5qGjhrK2UF90zAAWwjCHxzlGKe3mLquCToyUID1rzlydHugbDzDk3YDSb4mis0lPsrb1TULlbNqk5u%2FiB9m2xuGBhGc35qJtLeCVvMKK%2F68oGOqUByQ0K4bFbLMjpIfwv4WGB%2FyNMBJD9yTi7DiSQs1uMQhq7cRLm44TGIanQ7Kd%2FTVEvYwKdGBvowSb4PThmtrYjf9vS%2F1egndds9Jw%2BADjueJikx04evWMtM7f9Cbr0lAqh0FI876jLGhPixAW%2BmI%2FBeqJsG1jXotPkbOU4OtQR7gNOPtZW92Ue4keNfBuRASugH1Y2yCRCu7q7kgA7ShO730wLYv1i&X-Amz-Signature=fc9fad89daeb619c5e9166700f519a7cfad91de4decb862ac0ce8b23a78168a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QPDVW6X%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCxmZ9Lc9emcbtpAkH4Qyu1Tn29ENJkozrwEyhjfPKMngIgL2sL7zWqrJK4BgcuiUEdfLcxkM3Mo1ktEJckrDtPG%2Fgq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDM9cEuO4MOGQgE%2Fc7CrcA2sg369o%2FAqnje1bvWUmvXkle5FYByWPiYB4H4C9nsnRLIB3pcUdpBxjAHr6nZj0vF8%2FKJH4TE4XFKb9S14o%2BBMBog%2F7MDB5afnJPzcNpzaY2qxNzSVsj3ko7%2FFyym14hCqeZh29YtSxmOOTVeFl23H51zRjf5RUGc5v5%2FiyU2YsMD6LEKtexgfwx23PXktOYvqJoG2Jo22aJcXBYCg3vMMm0eIQalD%2F44sc1nd340dJDA%2FKxF3ixIWf8UYyXRLN9bOcXnA2%2FLLz3xdG6HBavznjputOpPwBOI8%2BoroMyyNbGl4Op%2BHKta751GSO8o7sKOS8%2FJgKOebZ8wx%2Bd2HbmMjtHMUUCm7GJVdl%2BQd3Rq9WLbaWdlfBHhRfLe9yFTEJ0Z3yj%2F5VkIOyuvZ8BF6z8nOgo8b40pA0HWNRuDKT86ZnafRYkh2gmVkmiDhoNgW3YURTPP5t9zvi8asgkafQuENghCKB5%2Bs8lgCvqvj5dLxF2bpGdQSHzMutonsFI6Zdtcj6ubPtlxP%2BorDFWmd%2B7ON5qGjhrK2UF90zAAWwjCHxzlGKe3mLquCToyUID1rzlydHugbDzDk3YDSb4mis0lPsrb1TULlbNqk5u%2FiB9m2xuGBhGc35qJtLeCVvMKK%2F68oGOqUByQ0K4bFbLMjpIfwv4WGB%2FyNMBJD9yTi7DiSQs1uMQhq7cRLm44TGIanQ7Kd%2FTVEvYwKdGBvowSb4PThmtrYjf9vS%2F1egndds9Jw%2BADjueJikx04evWMtM7f9Cbr0lAqh0FI876jLGhPixAW%2BmI%2FBeqJsG1jXotPkbOU4OtQR7gNOPtZW92Ue4keNfBuRASugH1Y2yCRCu7q7kgA7ShO730wLYv1i&X-Amz-Signature=f5f59e2ead564a21b3742f303ea1d39b2debfc3fa3119ad5c06c78909a4c79da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PO7STZW%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIBOr8HaSVfvK1e6KF18IjKLa92Pne5dTS%2B0NpsSrE6%2BjAiEA0KnykKoZAfK2P6pdiiwzA8Oh7KAjb9Ij19woHHpeU%2Fwq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDEVYxppq%2FsBkXN0tqyrcA5ALzUtWjSh0MnNmQnA4hu7t82qrBLNufN0y2ynu3yTjaf7RBuh6Hko5fnGfkb%2BzesZM1eZs%2BTGr2ZQxKu7MFKQCTAaqVDtQoNQo84P2xY%2FEJ%2BhPqq6QbUPMkwrEoFzYHWvsjlJbigSslnK%2FzdIc3LUvd2fyMC%2BnbMND7FqW%2BrcbQEolidE%2Byc7PJoL1KCKI3LLTSBe4W3%2B9snStFtDmiKRaVKtfKXiE6p0wgKtI5%2FqBwoHQNhNcdPwcPIjKoLIPqyM0vfpaOzo9BHV1KVDW6E8ew%2Bxi6Md%2Fv1gwcCE2YsGDZii9Qu%2Fn%2BeByZPWmogbUxYqzxD8wYqsSjHW%2FRdDv6%2Fv%2Fud%2FJHdVa90OnMHn6qUVM%2FvKfsUAECpdeuuP92j9fuvS2Yc3U4jOwkep7QQfd73%2FsLMjQaTFDKrVHUqwdCmp9GlQkePkfGw1NCIW%2FTBpprr6bS74GncJ%2BL8zWtebwUnfr1FHwxR3O%2Fu0dxe0z6GHJyCDT%2FFmy5Bw9Ax0ANf7zaf77LURaJokQwaocZ9kvW2OyXW%2BfaNNj1Whw%2B%2BUqgJP8%2B0oMqL%2FHOup68ucei7lRml7P0tG01fVQcEph%2FnHKjFjYsX2i%2FGaoX641rty%2FZXQhGOl1KyHLJDRBavvrMJne68oGOqUBs11zAMMkzUJI%2BeFioBkldpDnoUimB%2B928wKjflc0Z0on2BfjGH%2Fc4nOuEchgSu30vNoUfHv0hAP2ToFu5sK9Ux4CkT%2F25wuZXIDdZvP8K8ZHKddRoYNiB9wohDx3ytLTBkfYn3zxNr9kw2MphmhULPIhGhyxMwXkzf%2BDn8f4HkukVJY1i16Q1CtFcYkGPKxcZ7Rouhckb095cvtbZMgHMrgDcGHn&X-Amz-Signature=adf3f9b486f893931c30927bec6c9024c78a56a1422547beac433c4be102cb20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

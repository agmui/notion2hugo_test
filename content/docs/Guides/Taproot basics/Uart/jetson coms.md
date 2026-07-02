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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HA35FRE%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCICCr2cXdXBCg8y8ilwd2hQavyfUhfM4D%2BpxiUEkijv%2B4AiAKhMZ1gk4erh6fTCnHTEfPOl9NeKotqDkPKoTs954e0SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHt7YAFMjlxYmY9bTKtwDllRNyJPVV%2BnJWsht04Jds3TBQYTtTcvQI41NMauz%2BY9q9ODR6nPMXmbxmgfS1g%2F4C5maeNuch0xuMKqqhI%2FGMfHu032RhrKjagrEwFaYbpCo93ew9FpYab2WqlGxFMd0NrMlcO0tQrERxPetMu5Dj8ugnVAoTPwoV5sR7sy0wve0%2FktNnMCR8HVsKSKvxl7xhmult2ypYUsUeZGJBDvEOGxWWwOmYfnSGtGMpOBkFsBAFdP9KejW4H00e%2FM3t1wdpQ1nATtia6iO5X5IE8DBVFh2fx%2FaAyjMpSB4jovmSDdDaT5HD6dH4paZRIceHl1369B967AjKVEcziioBOakcGbderXZAO1DDNA1GW5P73hMYDbVbWT%2FCmlRfvc%2B10TkVAefGZF%2BkpMgoX%2F8SphYS2nKDXO3rjMKIwDpq0IsNBP0dxYvAl03MHvGKwXJb4rmB66xHqu8vAhzpxoAlQWllaSDRKW%2Fk33zBXzS3T8HXvjW%2B4Nuk9V1j0ALG%2FJCbnSmQAND63MdduR3EFxDieFzHt5jsRQNrlFOaL73Vd4dtkOQjfVmK0r9ys5wRZTkuJGqr6nwcQIMNZjfE6M1jHfQATdEosMjHsq55Thbn64g52XGBLBAqrJwla%2BZ2r0wx6KX0gY6pgE%2B9KTdgpjlAurLN0zPQ%2BASTbV%2Fv08ovWDuOvycEczX5bKx%2FFFMwGLi%2FrcNJIqJVuoj0llDVn3plVpa7TIPEOwFKPHhVF7AIC8PpYQH9J3CQeiu4uIsixTl1C2obYNeSCJCem81b%2FaX9rJYlUQzSasedYSX9f1Du0nXKSMOMF5prQz5jhA%2FwOjHGeAaM%2F5306ek%2FMCxTZL050a%2BuNY7rle4rtzgklh1&X-Amz-Signature=96a9f44a5c1940b710526a26929ceacc4dea57a1674426fccad75cca2a5a83ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDVKXIHW%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIDpLVxEge%2F8qCDo67ZgXqYguw0MDdDPQAu%2Bd%2Btg59Cn5AiEAlT6ep6WGwJKWfXggSlKvfOvXQD00roFeagmvQs2CnasqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdPOa0tjsXfnyvySyrcA9m6rT3K7YbqHegF3TOOmgLTJbY0KZ1y8d01nyo80rJDpUCgpxXs0nr9o5fW6uN8hSyrAdDQReec2KkjBpiABb6R12i4nHRQtY7nA3CXMlNNvSupuTzb0dZDKJK2Y5O7u5bjOYGifRvk4QRkrDXsCxT7guwxiBvWYSXPSUtQMytOlkuzfNqXY%2BENVDF5cS0xOMAdGuvEiaTzIVWJfq%2BUHwJ9J1cX2Dofu%2F5eLIlXp8Hs8AL2z1%2Bv1FWgLw6arAfJsplLlI9RVSTIUf00qBOA7yZEbdY31bNy%2FvT%2FhETiNqjyuBBmt5LZErheCg0haBGt9uy1RZngRJo%2Be8DJGFE3hbI7c8VbSz9LTEfaX3B1WboBt3j9VSB8P6J3k7VrW9KfpxZ5vyiWn28xObfx%2B%2F%2F8gg%2By%2FV1LB2b4onjtDS2ecnRxU5uEfzB%2BMcraNbXf%2B1TdSKQdQf3p4XAQrLb%2FcNBkHSAFNinuqOOngLRa3OyBWCkYbEmS72bAIjpYktYso10N7ZKYBcjkccl5p7ecwOHXEvXByuVpBykd7q0jrpmP68XUt6CBvVtffbPA8dgowaWTRkqDhIoXvT3xUXZL%2B58H%2FbQpZOIQ6EG%2Bd8OaT%2FiYCWxirrpxyAgmzOuLRqpAMOOfl9IGOqUBnuqNYFLTDhAw6JR1JsE40m0AX9V36AvHo6dDBhbo395w2VRGIkoG%2B42CRYPogdr2j7PlpUftdAyDIdRX7EaE%2BWDo9usPCiVFZe%2Fs1FVeDG72U1vP2Z2%2BIUnepshRo%2FO1g8hzUo0WeHp52yAFa6vtvffku1vaS16Wo6Cz4jTXws5K5SBaMDWKZpqDImEbSVHCqhx5POZPkmuHZFex6WAnj5bCnTck&X-Amz-Signature=a5f1bd78d414c090dc402c05b72f745fd1f80ceabcfc76c171d008d6e9f6665e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYTBV3YP%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCQw3WQFwSZ%2FOE5Eu%2BBcZef2jFY7KN7utxXLSxgEQ9z5QIgFla3c%2BRWpKLLECNhDTAQQgqVQAom%2FucFlp9MC0RS3GkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNe%2F2sRm9dURgtvGyCrcA%2FfSaHa5yhbsHyw7%2F4RVG3OPLapEqdJWaxOnufomTK45HN89MMJaIY7msaqmrC9CGhMt3MZs78ZYe5g%2BbZMFI%2FSQdBmSk78Xu4mBKyXDFP%2Fbx1DG5TNvS1lfIYWozW1bdFUGUgfo3INtshfJlmhR6vF5HWmIPhLtkNIIyXRQB5Rhb8%2FQCH0Lm0kP369TPGfrtATEbon9fHrhiWYsS3rUabwURXTn28DxyKozQHXddVsKUCNeTKomzThePYQwrkSmeYeuFpDKo%2F3ulSzmHsS4kRopG6tAT0hOxIfE3JbBYyX1csqifa4U137Hs3BSPtbj4rIfWxtLmSc765EbaHjtmq7SaV%2F9CSII8N8H8tl3u2Odtdq1Lwt%2F4BXQGHJUFuNNOdtylJ57X5Yrk5Q2YI%2BxFYacoulrpt35ZF8m1PeRLoZGwO2IwfOfRP9KPoIglwjsdBQLjVm5u8d1tKvOI0y3OLVsdZtYgdRJHmWASGfCoQwWgdF9thaBJzdzr7Cg76TJ%2FxhbTVsQCSsj%2B271ma94Z%2Fl1W6c7%2BvI8efdXEOIgANLC3fUXR9afiLrwLzSbmqKdLQBf8nS5sN%2BfXtemtl4ZQo0FXopDUCITQ6FY9jydqzMP5qOi6%2B8HlwdDmkMsMJOel9IGOqUBoXluLxlp2l91bGAmG8YrmvRzA3cbIDXEjEAVYBbUy2yleNFatQrksGudUOxWAqDPc%2FpShf0Mt3r1XV61hu%2FlyxNLRN8Bjfg9leQIZwBgXy%2F9kmLHPUOYcicX0VEgEAPddkLJSKnS%2FXT1biQIY4dwSRQ5qPbWcidKhgFzUATbQDLTrOGcZy7tj7aV%2FKE58F05oOXIqsktjBQmJSF3qRtmbXgdBg37&X-Amz-Signature=c21591274990537bff36533e376b98e6f2ff42f5d4944f70c79bce0e2e43e1f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYTBV3YP%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCQw3WQFwSZ%2FOE5Eu%2BBcZef2jFY7KN7utxXLSxgEQ9z5QIgFla3c%2BRWpKLLECNhDTAQQgqVQAom%2FucFlp9MC0RS3GkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNe%2F2sRm9dURgtvGyCrcA%2FfSaHa5yhbsHyw7%2F4RVG3OPLapEqdJWaxOnufomTK45HN89MMJaIY7msaqmrC9CGhMt3MZs78ZYe5g%2BbZMFI%2FSQdBmSk78Xu4mBKyXDFP%2Fbx1DG5TNvS1lfIYWozW1bdFUGUgfo3INtshfJlmhR6vF5HWmIPhLtkNIIyXRQB5Rhb8%2FQCH0Lm0kP369TPGfrtATEbon9fHrhiWYsS3rUabwURXTn28DxyKozQHXddVsKUCNeTKomzThePYQwrkSmeYeuFpDKo%2F3ulSzmHsS4kRopG6tAT0hOxIfE3JbBYyX1csqifa4U137Hs3BSPtbj4rIfWxtLmSc765EbaHjtmq7SaV%2F9CSII8N8H8tl3u2Odtdq1Lwt%2F4BXQGHJUFuNNOdtylJ57X5Yrk5Q2YI%2BxFYacoulrpt35ZF8m1PeRLoZGwO2IwfOfRP9KPoIglwjsdBQLjVm5u8d1tKvOI0y3OLVsdZtYgdRJHmWASGfCoQwWgdF9thaBJzdzr7Cg76TJ%2FxhbTVsQCSsj%2B271ma94Z%2Fl1W6c7%2BvI8efdXEOIgANLC3fUXR9afiLrwLzSbmqKdLQBf8nS5sN%2BfXtemtl4ZQo0FXopDUCITQ6FY9jydqzMP5qOi6%2B8HlwdDmkMsMJOel9IGOqUBoXluLxlp2l91bGAmG8YrmvRzA3cbIDXEjEAVYBbUy2yleNFatQrksGudUOxWAqDPc%2FpShf0Mt3r1XV61hu%2FlyxNLRN8Bjfg9leQIZwBgXy%2F9kmLHPUOYcicX0VEgEAPddkLJSKnS%2FXT1biQIY4dwSRQ5qPbWcidKhgFzUATbQDLTrOGcZy7tj7aV%2FKE58F05oOXIqsktjBQmJSF3qRtmbXgdBg37&X-Amz-Signature=b3ba4bad1f22298d3bded1ef3d38c9cf8fe297e33034a3a467f30eb932f10fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDVKXIHW%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIDpLVxEge%2F8qCDo67ZgXqYguw0MDdDPQAu%2Bd%2Btg59Cn5AiEAlT6ep6WGwJKWfXggSlKvfOvXQD00roFeagmvQs2CnasqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdPOa0tjsXfnyvySyrcA9m6rT3K7YbqHegF3TOOmgLTJbY0KZ1y8d01nyo80rJDpUCgpxXs0nr9o5fW6uN8hSyrAdDQReec2KkjBpiABb6R12i4nHRQtY7nA3CXMlNNvSupuTzb0dZDKJK2Y5O7u5bjOYGifRvk4QRkrDXsCxT7guwxiBvWYSXPSUtQMytOlkuzfNqXY%2BENVDF5cS0xOMAdGuvEiaTzIVWJfq%2BUHwJ9J1cX2Dofu%2F5eLIlXp8Hs8AL2z1%2Bv1FWgLw6arAfJsplLlI9RVSTIUf00qBOA7yZEbdY31bNy%2FvT%2FhETiNqjyuBBmt5LZErheCg0haBGt9uy1RZngRJo%2Be8DJGFE3hbI7c8VbSz9LTEfaX3B1WboBt3j9VSB8P6J3k7VrW9KfpxZ5vyiWn28xObfx%2B%2F%2F8gg%2By%2FV1LB2b4onjtDS2ecnRxU5uEfzB%2BMcraNbXf%2B1TdSKQdQf3p4XAQrLb%2FcNBkHSAFNinuqOOngLRa3OyBWCkYbEmS72bAIjpYktYso10N7ZKYBcjkccl5p7ecwOHXEvXByuVpBykd7q0jrpmP68XUt6CBvVtffbPA8dgowaWTRkqDhIoXvT3xUXZL%2B58H%2FbQpZOIQ6EG%2Bd8OaT%2FiYCWxirrpxyAgmzOuLRqpAMOOfl9IGOqUBnuqNYFLTDhAw6JR1JsE40m0AX9V36AvHo6dDBhbo395w2VRGIkoG%2B42CRYPogdr2j7PlpUftdAyDIdRX7EaE%2BWDo9usPCiVFZe%2Fs1FVeDG72U1vP2Z2%2BIUnepshRo%2FO1g8hzUo0WeHp52yAFa6vtvffku1vaS16Wo6Cz4jTXws5K5SBaMDWKZpqDImEbSVHCqhx5POZPkmuHZFex6WAnj5bCnTck&X-Amz-Signature=1d3ffcc26c3f0fab0948dc43c37110e174763466339ae26c83baf11838582880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDVKXIHW%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIDpLVxEge%2F8qCDo67ZgXqYguw0MDdDPQAu%2Bd%2Btg59Cn5AiEAlT6ep6WGwJKWfXggSlKvfOvXQD00roFeagmvQs2CnasqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdPOa0tjsXfnyvySyrcA9m6rT3K7YbqHegF3TOOmgLTJbY0KZ1y8d01nyo80rJDpUCgpxXs0nr9o5fW6uN8hSyrAdDQReec2KkjBpiABb6R12i4nHRQtY7nA3CXMlNNvSupuTzb0dZDKJK2Y5O7u5bjOYGifRvk4QRkrDXsCxT7guwxiBvWYSXPSUtQMytOlkuzfNqXY%2BENVDF5cS0xOMAdGuvEiaTzIVWJfq%2BUHwJ9J1cX2Dofu%2F5eLIlXp8Hs8AL2z1%2Bv1FWgLw6arAfJsplLlI9RVSTIUf00qBOA7yZEbdY31bNy%2FvT%2FhETiNqjyuBBmt5LZErheCg0haBGt9uy1RZngRJo%2Be8DJGFE3hbI7c8VbSz9LTEfaX3B1WboBt3j9VSB8P6J3k7VrW9KfpxZ5vyiWn28xObfx%2B%2F%2F8gg%2By%2FV1LB2b4onjtDS2ecnRxU5uEfzB%2BMcraNbXf%2B1TdSKQdQf3p4XAQrLb%2FcNBkHSAFNinuqOOngLRa3OyBWCkYbEmS72bAIjpYktYso10N7ZKYBcjkccl5p7ecwOHXEvXByuVpBykd7q0jrpmP68XUt6CBvVtffbPA8dgowaWTRkqDhIoXvT3xUXZL%2B58H%2FbQpZOIQ6EG%2Bd8OaT%2FiYCWxirrpxyAgmzOuLRqpAMOOfl9IGOqUBnuqNYFLTDhAw6JR1JsE40m0AX9V36AvHo6dDBhbo395w2VRGIkoG%2B42CRYPogdr2j7PlpUftdAyDIdRX7EaE%2BWDo9usPCiVFZe%2Fs1FVeDG72U1vP2Z2%2BIUnepshRo%2FO1g8hzUo0WeHp52yAFa6vtvffku1vaS16Wo6Cz4jTXws5K5SBaMDWKZpqDImEbSVHCqhx5POZPkmuHZFex6WAnj5bCnTck&X-Amz-Signature=65dafa35cf9da7a2d27ceb87b263d7e67fbef511e449c5c606cbf3f66507aa89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJC2KETZ%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC8O7Vo%2Bji2mI2e9mNZVQE93oGHeVVSZ877daa8IyexTgIhAMV%2B8ilxrjQi5g6VVh4qXfh%2BDd5HpGY8kyThjchgircUKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfV9XJE5Vs8S8XjOwq3AP8GnVhP8SbZRo8AKtnuwMDrjYAL7kZbNn4r86T%2BxbMygALiXmP0lIuaqlMPYjYNboaAGP7eeMzaert6xL7rhPjV04df5zljdKclkSzponKcE8B%2BNBXLsnsEZECl3f1LNclv8p%2BOcIlleuckgY%2Fnu%2BQ1Qm%2B2YSJ7uNXfzuIQCmSnrPaetgq3MsHLtSKLcN6CS3Z1XIwztYIiFbidEZfUvhWIreKm6MeElzcrX2Rrvi7C%2B5VWhs9CY1I%2BDTzP30DIguZJp7Qkcb%2FWcUYn%2FcNztP9RvRs28Fn7ae9uk5kAR3saG1tF93vVwP3RuNONUpu7iOQNcgSBgqe8ibjvWPRDFjgpJ2WZqpiIxvQav5w3QCy9mHejLRxIs00PCQoU%2Bc%2Bj19PSRsIww2p8uGCtgyvlPgh4m5rHKxSz78yGGxZAZG7JS4TU27H3bpB07l4QnD6aXVs1PKr8JbAaE%2Fc10l8pJqlnWCIqosKn5ALIS8%2Bm5muGNIXJnbMKxEu%2Bjpjh3w4xJoOxWmRSDMbpT0%2FeQ1Awxuy%2BDbOg16mDCMOBbOK%2B8dGjxutr7D7CFnMv2pC0i65e2By847u3gkNZc%2FE4P2yiZejZ%2B1wnr%2FpGbk3hCyvnHRYnAt82GUpJU207KToxTDjmpfSBjqkAZU9KnIRJCwjK1OxSN%2B%2Br%2Fa3NxzjkZ8L1kSBlTJ8mIDk%2Fi0NU57dWll0aINElkF5xlqFSyS2usarr%2Ft1daqkp3gwbJgNXTLLwLwRl6m%2BKqOBs6z1bKi0rBTHUTYhkIorewXMIF%2FaFHTWRUDlqqrd5DLzANFVRBN4TeVfGka63nwgspOguZapOH8gE1Wi5geGrjYU4%2Fj5OjOL2Sjy5CrzwRz93XCO&X-Amz-Signature=7ba649521ddf875943bd3c5f5c02df0cf81e57be29c2da77fee5c7595b0dbce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

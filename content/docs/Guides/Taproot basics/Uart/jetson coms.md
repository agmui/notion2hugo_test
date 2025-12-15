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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LWDI3O5%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDlYy71jgJIIUjgYWzglPj%2B9q2IMiLZhos64z9UlL4W0gIgTDesTcaild9fM%2FNYTtnM9L0tTmppfIoVP9%2Fed7bHpRcq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLDcZegAKV4rK7MnGCrcA3ZbVrvsgOzexDEFdP%2Fgql%2BcWSFnC2vsC2z789d0uaBsOx5YvJEeEd5RuLmqCdoQpvdbSQXNjjTB5BZgbB2UMGPOHQEbQTVa4GL%2Bhth7cxCzIwT663AD1lUAIBkIIYK0P%2BJnqWf%2FRiH%2F44dP3ZlxMWAJwlQ%2FjbBRYLd%2B0%2Fx40tKE2fuDIzMzLd8TdYds0%2FhNd1t3eSbxJkp9iIXjXYL1l8W%2BugffV1ga4s4iHItQ1hcaV4ofW9QCsYJ9GN%2FfJ9qS37%2Bo0JRuVdHK1ADMLs%2BnMJQgWsM7xuYobfn1Y4fWH8rGw8YW%2F3msdzLqYMXuO6c2GU0w4a%2BZ%2F6%2FBHIjUHp%2BwQTcYtMcGa5gVXEQmOMveHEQqG%2Brl4c83O5osDHDgST%2B04MS1zmoZhbkmVGxlFaAOOmtXlHGfs0A1tmufL42YSkGL7eL5OZx%2BbyBg3WlcreE28CPMYBnlfWmGfF1UqkpiCTtBNegrnq6TwxAzDvPaRIVbFLpttIBzIEifaQV9NH0Zf21nh09Y4abrKxXjy7e1QpU1TTO5sBI1qfOe9Pn2QGXpWxvENKICgXPPc45nCsBo1FkaosmCulFr6NkZyXzinVx%2FHTdZVl7fsAkzeW6R8PaHffVPbIYE80lF%2BbrxMMXa%2FMkGOqUBWWVPq9dFUZhvpMo6PYTTOEAdmMKx9zU3jbS9QZjm5C8lGH7OFLmIONUVeUfJUAG1gdEXjbULvcY83a43%2BC3YRK323i7NS8qewqYcG2eqmD0WzNGS26FdnYvsPgS4iiG3TTnd%2BtQZMXjtPr%2Berstx25miTnprR%2FLfg75PXqkQUCGJbPHZidz9oY6Ai4dCCJHVP%2FoOHw0k5sTqBx3TzAbv%2B80T%2BrEP&X-Amz-Signature=155a6d4809ec4a87e8f1b9705696a998348ae86537fc0a5b55baef521df581ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWZGSMQM%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCoDwbngLIMBXz69NYQaeoyreNrdi3E1tKcmHV%2BhPGDdgIhAOTxVuGX7KjABl2B%2FygplP2%2BFCE3K8XIkUhQY1U%2BGu6BKv8DCD8QABoMNjM3NDIzMTgzODA1Igyzlc6Z6iNwx%2FNyEh0q3AOtC9SpHoHU%2Fcmk2L9evPRfyhlMyjDmmMC%2FQcS3ssnOXjsYj1%2FkRSfLZ8n%2Fvx%2FZJytOeIyS88m7%2F%2B3FKhq8HA0B%2Ff3byf%2F%2BlVZ5GwFhmpZ1ej219JDZi1mCXK%2BzdeD9J7Nd3jA2EHZe781tMKICTXf9TB6SSWpgLNzXqqWTQO053qjTkTLxdrfL8otv4Y7G6rU8FZSSh86jAf1Bf2ncJGG1a8tsrApXmG9L9GQ1kBe1XDNFoVKqvNsamxsioHCcB0R9fXx7Yd7TQNRqRVzsflXTMwhjVuPFBebWUtCCrTJw%2BeethRIBxLlNZqoKG6QImu4SwqRG%2FQbpyYVG7iAJi%2Fp%2FReBR5oUCUZOEzL8Td5GrQOcyDmRhEMlsvhugouTJ%2BbQ4J8%2Fbcw3jwlDVlSvs7FZc916XpYnWaYT9biJj7uFkXAwuQBulG6jYC0fA4zq3IdFV%2BJdAFkCTsIpYMxuyxukB1PMVNf%2FELrxHDClWd02n8DZ8syE93Fd1Ljp69Oq%2F1ZHr494wVA6ixX9BciW%2B7AcK%2FPIYOThfxUguXzWq8aj%2F4tJkYUBgj1jp35xSjLeb%2Br4DRkBhabWHfqRTC%2FmWT6itavFkah6KDnFR0THRJuDYdaxF4E92INPomUFACjCa2%2FzJBjqkAT5cSKKY%2F05mtE5Kg2mJy3TD0iJqXZBOSX6J7dnFf3wttmiaSEwOaTaGXHgxM0WJYV4BSfna8ynvLGopJdKZzEF5x4%2BoMqqDUjmJ0f6A7hXNCZpH%2BQ5j3l3DFIHWwQy0k9f4cpjd8HjyoPjeWnB7uNFdDHpJ5WE9eibx8%2FEyqg3b4PLeBXwkzxq6UdOZCDSgaaoTdVfIvYQTyTc8vxfTsMsRDvQE&X-Amz-Signature=e8a87d58c98554ee8499ff32250e48f0cacc26859333cfaa8b4d3e30ab2a36a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U7T3MGH%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCJHkZ5ak1S%2BEY0ep%2Fh9dy7kO7iqx0zOdcyagc1ISm4MwIhALUXvLesVuxPZ4CwQtI9hal72jbFNFQQkvvpy6v%2FPBa9Kv8DCD8QABoMNjM3NDIzMTgzODA1Igwg6efFFNr2MtUtdAEq3AOTe580BMDpS0f0CDQFkslIJx40i1LV1CUerxxxutdnzs3oMXTOpMMDvq%2Bx3s5QEspVfSJIiXXDvYkEByIksEV2AJlcTYKirzDou9DJsgMnmwNAv1hcx%2BFw2W3ikIz2LjXnslEYofRH%2FxV06DEJDVPGF6MvGJHKifYHiW7kkgwY1B95cRi9eUsSSBsbXcCH8Y0PopXlnq%2FuKwPmmFkdouKJPpRgOD9ex3RMBNlk%2Fny%2Fx26XTp7m6w5yE0WD925%2B4Vjmn9agVQ6jj%2BIYYql3bGRbnYgHL9QebFaz%2FqU5TxsXQzNh0gDLKSwn%2FjbQrbnCLxWsOP%2BxDKnKjrXkSW7NJepcFqMysT1CwjcfC9JsKUqos2GYQwwWpy3ScJEOmf6Y84vxwxoIiiv0x7ZqEoOrL6ESCq27%2B6EI0mne9%2FpsjPQzWn8Vz%2FkEtm%2FddYeq%2BTv5Fp10MzlLLqow4foyL0tkYfl8xTOt9ah2ObxUhPjEZrrfc7ygjQdpWg0xxDCjeqGAe0cZtlcb7XMLbqKoQh8vGBUllsvCy%2FUFfPAmFmI0FmQqqmokbY9sL7Fhp9Of3rGLymIRJuiotwxFHj2nI7UvTxF7GVV%2B0XuYoDRp8T90ALIlpuRzHomRTaIHEwtIvDD62vzJBjqkAULV2zVWy5iQptU19%2FJi0wtBrEGHS%2FJDBA6AREAgArOKLhra0970Rhc%2F%2FiP78unxpqg6wPe%2BiiXbXr360rWEfgh%2F%2B2Q5Qafy85nTMsydho6JcVnDFsCNfH2KCNPIaJgv7R6SOjE%2FfchGe0G2TEqL%2B4Bj9xZIPBqKq%2BlObJ4psQ9NluewfarzIrKfzR87ih51BwR3lPju3flRAlNvtkoAUadscjLo&X-Amz-Signature=cd61bb9c6c7899ff624ef76eec52e72a318758cf7f95ef7353196b6c22fecab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U7T3MGH%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCJHkZ5ak1S%2BEY0ep%2Fh9dy7kO7iqx0zOdcyagc1ISm4MwIhALUXvLesVuxPZ4CwQtI9hal72jbFNFQQkvvpy6v%2FPBa9Kv8DCD8QABoMNjM3NDIzMTgzODA1Igwg6efFFNr2MtUtdAEq3AOTe580BMDpS0f0CDQFkslIJx40i1LV1CUerxxxutdnzs3oMXTOpMMDvq%2Bx3s5QEspVfSJIiXXDvYkEByIksEV2AJlcTYKirzDou9DJsgMnmwNAv1hcx%2BFw2W3ikIz2LjXnslEYofRH%2FxV06DEJDVPGF6MvGJHKifYHiW7kkgwY1B95cRi9eUsSSBsbXcCH8Y0PopXlnq%2FuKwPmmFkdouKJPpRgOD9ex3RMBNlk%2Fny%2Fx26XTp7m6w5yE0WD925%2B4Vjmn9agVQ6jj%2BIYYql3bGRbnYgHL9QebFaz%2FqU5TxsXQzNh0gDLKSwn%2FjbQrbnCLxWsOP%2BxDKnKjrXkSW7NJepcFqMysT1CwjcfC9JsKUqos2GYQwwWpy3ScJEOmf6Y84vxwxoIiiv0x7ZqEoOrL6ESCq27%2B6EI0mne9%2FpsjPQzWn8Vz%2FkEtm%2FddYeq%2BTv5Fp10MzlLLqow4foyL0tkYfl8xTOt9ah2ObxUhPjEZrrfc7ygjQdpWg0xxDCjeqGAe0cZtlcb7XMLbqKoQh8vGBUllsvCy%2FUFfPAmFmI0FmQqqmokbY9sL7Fhp9Of3rGLymIRJuiotwxFHj2nI7UvTxF7GVV%2B0XuYoDRp8T90ALIlpuRzHomRTaIHEwtIvDD62vzJBjqkAULV2zVWy5iQptU19%2FJi0wtBrEGHS%2FJDBA6AREAgArOKLhra0970Rhc%2F%2FiP78unxpqg6wPe%2BiiXbXr360rWEfgh%2F%2B2Q5Qafy85nTMsydho6JcVnDFsCNfH2KCNPIaJgv7R6SOjE%2FfchGe0G2TEqL%2B4Bj9xZIPBqKq%2BlObJ4psQ9NluewfarzIrKfzR87ih51BwR3lPju3flRAlNvtkoAUadscjLo&X-Amz-Signature=ff6fb1fc82bde68ea865b3db94289c2f6552cb98733cdc0e3c89a61a7a7ae307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWZGSMQM%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCoDwbngLIMBXz69NYQaeoyreNrdi3E1tKcmHV%2BhPGDdgIhAOTxVuGX7KjABl2B%2FygplP2%2BFCE3K8XIkUhQY1U%2BGu6BKv8DCD8QABoMNjM3NDIzMTgzODA1Igyzlc6Z6iNwx%2FNyEh0q3AOtC9SpHoHU%2Fcmk2L9evPRfyhlMyjDmmMC%2FQcS3ssnOXjsYj1%2FkRSfLZ8n%2Fvx%2FZJytOeIyS88m7%2F%2B3FKhq8HA0B%2Ff3byf%2F%2BlVZ5GwFhmpZ1ej219JDZi1mCXK%2BzdeD9J7Nd3jA2EHZe781tMKICTXf9TB6SSWpgLNzXqqWTQO053qjTkTLxdrfL8otv4Y7G6rU8FZSSh86jAf1Bf2ncJGG1a8tsrApXmG9L9GQ1kBe1XDNFoVKqvNsamxsioHCcB0R9fXx7Yd7TQNRqRVzsflXTMwhjVuPFBebWUtCCrTJw%2BeethRIBxLlNZqoKG6QImu4SwqRG%2FQbpyYVG7iAJi%2Fp%2FReBR5oUCUZOEzL8Td5GrQOcyDmRhEMlsvhugouTJ%2BbQ4J8%2Fbcw3jwlDVlSvs7FZc916XpYnWaYT9biJj7uFkXAwuQBulG6jYC0fA4zq3IdFV%2BJdAFkCTsIpYMxuyxukB1PMVNf%2FELrxHDClWd02n8DZ8syE93Fd1Ljp69Oq%2F1ZHr494wVA6ixX9BciW%2B7AcK%2FPIYOThfxUguXzWq8aj%2F4tJkYUBgj1jp35xSjLeb%2Br4DRkBhabWHfqRTC%2FmWT6itavFkah6KDnFR0THRJuDYdaxF4E92INPomUFACjCa2%2FzJBjqkAT5cSKKY%2F05mtE5Kg2mJy3TD0iJqXZBOSX6J7dnFf3wttmiaSEwOaTaGXHgxM0WJYV4BSfna8ynvLGopJdKZzEF5x4%2BoMqqDUjmJ0f6A7hXNCZpH%2BQ5j3l3DFIHWwQy0k9f4cpjd8HjyoPjeWnB7uNFdDHpJ5WE9eibx8%2FEyqg3b4PLeBXwkzxq6UdOZCDSgaaoTdVfIvYQTyTc8vxfTsMsRDvQE&X-Amz-Signature=cc66de8ccff8799ea907f2712c9506a3266736a0df8c42cce4a5d562f8188025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWZGSMQM%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCoDwbngLIMBXz69NYQaeoyreNrdi3E1tKcmHV%2BhPGDdgIhAOTxVuGX7KjABl2B%2FygplP2%2BFCE3K8XIkUhQY1U%2BGu6BKv8DCD8QABoMNjM3NDIzMTgzODA1Igyzlc6Z6iNwx%2FNyEh0q3AOtC9SpHoHU%2Fcmk2L9evPRfyhlMyjDmmMC%2FQcS3ssnOXjsYj1%2FkRSfLZ8n%2Fvx%2FZJytOeIyS88m7%2F%2B3FKhq8HA0B%2Ff3byf%2F%2BlVZ5GwFhmpZ1ej219JDZi1mCXK%2BzdeD9J7Nd3jA2EHZe781tMKICTXf9TB6SSWpgLNzXqqWTQO053qjTkTLxdrfL8otv4Y7G6rU8FZSSh86jAf1Bf2ncJGG1a8tsrApXmG9L9GQ1kBe1XDNFoVKqvNsamxsioHCcB0R9fXx7Yd7TQNRqRVzsflXTMwhjVuPFBebWUtCCrTJw%2BeethRIBxLlNZqoKG6QImu4SwqRG%2FQbpyYVG7iAJi%2Fp%2FReBR5oUCUZOEzL8Td5GrQOcyDmRhEMlsvhugouTJ%2BbQ4J8%2Fbcw3jwlDVlSvs7FZc916XpYnWaYT9biJj7uFkXAwuQBulG6jYC0fA4zq3IdFV%2BJdAFkCTsIpYMxuyxukB1PMVNf%2FELrxHDClWd02n8DZ8syE93Fd1Ljp69Oq%2F1ZHr494wVA6ixX9BciW%2B7AcK%2FPIYOThfxUguXzWq8aj%2F4tJkYUBgj1jp35xSjLeb%2Br4DRkBhabWHfqRTC%2FmWT6itavFkah6KDnFR0THRJuDYdaxF4E92INPomUFACjCa2%2FzJBjqkAT5cSKKY%2F05mtE5Kg2mJy3TD0iJqXZBOSX6J7dnFf3wttmiaSEwOaTaGXHgxM0WJYV4BSfna8ynvLGopJdKZzEF5x4%2BoMqqDUjmJ0f6A7hXNCZpH%2BQ5j3l3DFIHWwQy0k9f4cpjd8HjyoPjeWnB7uNFdDHpJ5WE9eibx8%2FEyqg3b4PLeBXwkzxq6UdOZCDSgaaoTdVfIvYQTyTc8vxfTsMsRDvQE&X-Amz-Signature=90ab0a64716ae0577925526cbfc00917f8bfef0f1d11925f9d233924e4223679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REWJU2F4%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEztWJy8RfZj8bkBEtmaTlJymx06kwNBBYGTGpVNhADYAiEApsnmM7Tl7UWgWcPGh9eYUi2RPxHPXd%2BiY9zM%2FKHtW5oq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDG%2FWr3axPLzpS30f5CrcAx72jDuOEuv5E6nQXdVmC8I1eOexsnMv4WcLRenrZ%2FxZz3%2FVN9F8cKqv3KII3RDLawcMEeuwi1ccQEGRWOtOT31%2Bt9rySUlyd7f%2BiiypSEEQCYo8o2qIzRdT9pZ3ugefzAk7fXqBd9xgeDiGZGoQy0xbF4%2BqSBvBRBQcnLg7YqvpWNRMO3aLLAobpgOqsThrL2kC45msRVmRiQugwNcAgM9zzWWaNPRI2JS4m1%2FdTPysTP2Q3JvBDshjMSQwtTZAFZcA3S%2B5YNKUapk0jSm7ppnpxg6hcyanpOktkA649CjuN8CPEBBOcnCaHinYCtOlLrXDBcuwDSLn9bEvw3LtV5OUnO5v%2FinowgjyzuDqo2pbSyGJWrtUVS4a2NA%2Fk7rt621jQES%2BNH1KclNmy4pXowuP2yUgHVUnkBrGCIfnZR43kHFWq%2BXaBb5dLwGuipjjwKxB68SyaX8A8eDoswxOUEGTpEAzsmpZ14R1v98FruqkQQoiCtsn2PakTEIA%2F1OhaGDPFsQe7WcRab6Rgsx9TXbky5XFOfthH1IzLnM0f10wZ9Wr7fx4GZlrib%2F7E35z2Y7MSFjl%2BVxhkoHTQ17KEXBDtAmZtLKhP4UOABnujDqUKq5piPUJCB3Ya%2BfiMO%2Fa%2FMkGOqUBp04BcUMZzpsMND%2BoHkSFxJ3aC%2BAnuyF2Wxbk3oFzeBRW4%2F3zJPeGw6yqJF%2FCLuRhZ7lai1qgQSFRdfSRlqf4njLoxlj3p5MqCk9n4Sn7q1PY5JR%2Fs6HO%2BYjP1kIGoMZJpTa7mF75sL0KUhFIGfsKeV%2FFsMLafYG7OqemWViCMjl4OwUsh9YI9NaQm1f7QrJH%2FVcyvGibcJMhxnYlZgQzagf2HuAy&X-Amz-Signature=985b6366a68521edba054dbd3f11e2667fcfe4877aa420771be0a4e0f168436d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

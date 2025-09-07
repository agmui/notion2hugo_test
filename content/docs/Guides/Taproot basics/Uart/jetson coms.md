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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLDRQ5U6%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDvwU8%2FKtLky9GwSa0Kgnt8eimqC3%2FRvZna7ALSbFLq%2FgIgP53hpJN42WzvtKZ1mVFh17RlevfLUvOgmsaXlO%2FsJD4qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7dOVGxtFomPXkviCrcAz0mqVb9RJa9oASH3kRsmrzOUVaSPpDH6WInMvK7vJI6edi3Qd0j2BtrtxS%2Bx3KU6yfJERXJ0uzGmnyfmGruNR3JmXMrk8aDIvnFtGZzs6GZHLl4sbm4mRfeHisfFf6hI37sSvlueKQx7YCuuD9lXVopIEp1Rua75kKqYE3PJlSHhV7jN94yqlw0yVCG5%2F9qGWcikVpOgXSIdzzJxyoSc%2FVegnGYvLFQLwioDKiAK7%2B%2FB30tVAfS9BPLZksJ41rWxsXNVQ64XiUHnX%2Bvh5l5rO%2Bv04yMxBPVZol%2BAvCMmGYGkJ9pmnL1SAie5BS6muOsPFjJ72KJPdR3S82dG6gyVn8bPjj0Lr3K4s28EkCZYaJhmUWvNg1%2FmkgXTCqo2Xeuy2xaqI8sXRI%2Bx23oF5CxoYApacRnaCCoAkaVNPOXHbqcdZqfLcQXv4iIIddnbPdl49GI5OO7OH0qMpxwXb2Mvj9MCAooxOIOFYt14dP84Nv9OtsrgTInL2BMcpJ4Y4stsXUme0543lxoUogKYBIKCGwKEpFSFpFQGuBp93je5xTaIy0mowj4UZLOXcckB8spgOm5hTXZgOBThHAp%2FIW7ny6dNCsjpE%2Bu0B4w2RimfOarXwk9JlpPfTC8TXnBMKnE8sUGOqUBe1kqWXiLmYnvwdCaO2j6oLUJMKHdrkjeNVYEG0Sqtj816wKDwC5MKHRaDg%2Fj2e2CvAgX33bg5%2FZe8ydVNyXFngj4zLl9U5nkAR0I37kr%2B3Vo3InBMZ3gO7VsHic%2BwNVBSLqNHUsRZ%2FiqqZ9GW5LSLXCxj1lEBK3o8WDoNCGAE7QtFTXhU4cUYMqOldbyvRASRvw9pXNtxv58YxEKbm7Vh7SWcROq&X-Amz-Signature=69d307b37caf2ee1adfd00274edb51df1345f4991d52b5a8b67d80cad15df0ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG6DMS2K%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIBj3ZhhtUz%2FZ7g39dcBVCpiAWp1S82Srf4S0nrf9Hw2CAiEAiky%2FuKwA8NiRt9mGrYnTDQ4EKztZpGk9OU0b3Fkw%2B3gqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfgmt3dl%2FGND0EwWCrcA3XsEiWLp16sZ8M1JF8PK%2FLrK3hWnogt0x%2FHO6XZrUSx4t4sRgeJ3x6zbqW2eiQLYfXMZ7wmgCSwHDiY9zmO47OpQExZHw2SBIiRmxRJFwi9CqTa9XgvXVwMGNy%2B3QlCvcCrsC79pumy7ZX%2Bpxms%2B9gJA5Jq0hdGho1L0tpXfsZzLsciEeNbqPtEuAKqut%2B3XHGnDg6sdmnmxU8lrvMh072mInq%2BIC4iT8gPYsD54md7VERDgkl4Y6sY4eOgO5tliiBT7Ly8BMqAoQz3ay119BUIi0Y0hCcsLOPEFL%2F4XM1vGwRUOSrtLjiaVGOzreJhZObJlaNcNF6KdNPh3eWEpParWqPECWCvjq86lBkTLPZtR7OwN9Zx94XAF89O8hLWbnk0imBRuGDrQuNgZ66oLbwLL1WDHInkR0f2pB8HdMsH5bsRfgiPz5KTgSXUSQHAXKcEgr%2FQc5aVVYAUCSWjdlRbZcsrIyKm2s3yBob1co81eqXljtIJgEw%2FQk5VrpHdSRoP3OabpWyFT%2BwnqlWjFN%2BtH9X4PgVSkaEy7QxeSqi%2B1RL%2FqGEGtwmFfs6PrATo3B04GiYj%2Bxe7uii8KuKWKhV6GL3DrRxAIME%2B1ZoUkJMeQ8Cr1TMrB1zRPbw1MMHE8sUGOqUBZZHUetRqw9uzimK%2FwH5BzhuSDE9VRkoR%2BI4FIHk99qPr%2BOuirwf8TBwg0ADRwPJp5XMMynTN6wDGOlJHkA5pNCxglUQb4mYwBiHhXoEJV%2FHPb60yZBwJx7BdqwpfQNHFO29TkM5tCp7CtmRCtMRlSZqUQ4E1vwbqHhO4tqJguCzarB67fdmw8RrMZmY%2FjN6ec7NEiCAblCFKf%2FKb6h8Owln8NrLv&X-Amz-Signature=451000ba15f9ba4a60d281216b1229f52c4eeea019497122fc9e22d98ccebfbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4FVSMDB%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIF2zg4js7LQCvJeARFMbAbTfg%2Bm6ETP%2FLxgcGf3zaCDWAiEA59EKoAwTFTYeDNdgPX5Ic0pC4EfBaJiwv678IA8OCIUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKscegHqSXTgwdMECrcA%2FqT6%2Fma0XoIHK8Om9h26tAPu7c7S4exJw2SupvKpCCdHa003vgqSxkdnAaBN5IBRF0m23YXMmXCjMmdZs6XnpkyieciVwmWmZN%2FFfIeT5GvJs02dFvDHs8Mpo83NDDoDV3C6bDDI%2BnxV3YT%2BauWHk3gav1%2FenzjIxGTAz8nTIeU2TgSWgwNH73Bcsvi5q%2FgzG5jh5xUEmye0oR2J3ySM7%2F23Q320dkBdq6lbzdV9jjyI%2Fd%2FDJP1t7zTsBDWmSln66bAHHeH4SD7A%2B1vrZU0fxaveQhFmeqOQlKyU5bALHHauibGShSyE%2FCN7XoyYvW5FcSZgn3slmmGqOGmTfdDJrk0p2fNWNqsoQ4V9zgHvAqeSwGNC2KE1OHhm0ivFwgAQ6CB0rJV%2BOm81noT0ZG8XlNAiwYaFxAtzILx3u42OyKgtEpOEwhbeph8iOB5f%2FkyzfFPwhGT0pUNNKMuNEa5kl7qoNG6rfbwWZUBOgirOvHa70ImIjczSe5wO%2B9BcJmD0obfql0O%2F2%2BmQtXDnCbukUA3%2Boc2dHYHIjXuxJCSUSU%2FTCmv4olaVC%2Fy0Pp%2FCkvk5uEzylb4piGihBrsBnYnDSLMXUCbHKFTbWszA1AjaHGvrsDy0n8PGsrKGhOoMInE8sUGOqUBR8KHq9ULAszU%2BYUMZZVBzywvsX3GmkRpvsHX0nPWWb8J3qoeQ1%2FqOiu5pT3m9ql4idX%2BVasJgUZWZJmfaOn2x0xSx%2BOBdj%2B6eepyydvRyQq7VhxCwCsw2FBqe7fP5PhJUEjopz9YXkwTnJpqYX%2F%2F1TznyVrTere2IOp6k67OV8lzQMWZrxkfaB6HeUMjvDFVWJ%2FtW7VUWTF4mKVfUR2IOuA5Tbyc&X-Amz-Signature=9f527b36b58080131819d5db0b9ed418e775fc5fd5995610af41508440fbccc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4FVSMDB%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIF2zg4js7LQCvJeARFMbAbTfg%2Bm6ETP%2FLxgcGf3zaCDWAiEA59EKoAwTFTYeDNdgPX5Ic0pC4EfBaJiwv678IA8OCIUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKscegHqSXTgwdMECrcA%2FqT6%2Fma0XoIHK8Om9h26tAPu7c7S4exJw2SupvKpCCdHa003vgqSxkdnAaBN5IBRF0m23YXMmXCjMmdZs6XnpkyieciVwmWmZN%2FFfIeT5GvJs02dFvDHs8Mpo83NDDoDV3C6bDDI%2BnxV3YT%2BauWHk3gav1%2FenzjIxGTAz8nTIeU2TgSWgwNH73Bcsvi5q%2FgzG5jh5xUEmye0oR2J3ySM7%2F23Q320dkBdq6lbzdV9jjyI%2Fd%2FDJP1t7zTsBDWmSln66bAHHeH4SD7A%2B1vrZU0fxaveQhFmeqOQlKyU5bALHHauibGShSyE%2FCN7XoyYvW5FcSZgn3slmmGqOGmTfdDJrk0p2fNWNqsoQ4V9zgHvAqeSwGNC2KE1OHhm0ivFwgAQ6CB0rJV%2BOm81noT0ZG8XlNAiwYaFxAtzILx3u42OyKgtEpOEwhbeph8iOB5f%2FkyzfFPwhGT0pUNNKMuNEa5kl7qoNG6rfbwWZUBOgirOvHa70ImIjczSe5wO%2B9BcJmD0obfql0O%2F2%2BmQtXDnCbukUA3%2Boc2dHYHIjXuxJCSUSU%2FTCmv4olaVC%2Fy0Pp%2FCkvk5uEzylb4piGihBrsBnYnDSLMXUCbHKFTbWszA1AjaHGvrsDy0n8PGsrKGhOoMInE8sUGOqUBR8KHq9ULAszU%2BYUMZZVBzywvsX3GmkRpvsHX0nPWWb8J3qoeQ1%2FqOiu5pT3m9ql4idX%2BVasJgUZWZJmfaOn2x0xSx%2BOBdj%2B6eepyydvRyQq7VhxCwCsw2FBqe7fP5PhJUEjopz9YXkwTnJpqYX%2F%2F1TznyVrTere2IOp6k67OV8lzQMWZrxkfaB6HeUMjvDFVWJ%2FtW7VUWTF4mKVfUR2IOuA5Tbyc&X-Amz-Signature=e0772833089421ee456ac834b6ae8c73e5f228881154efb350f6ae9b8edccaa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG6DMS2K%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIBj3ZhhtUz%2FZ7g39dcBVCpiAWp1S82Srf4S0nrf9Hw2CAiEAiky%2FuKwA8NiRt9mGrYnTDQ4EKztZpGk9OU0b3Fkw%2B3gqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfgmt3dl%2FGND0EwWCrcA3XsEiWLp16sZ8M1JF8PK%2FLrK3hWnogt0x%2FHO6XZrUSx4t4sRgeJ3x6zbqW2eiQLYfXMZ7wmgCSwHDiY9zmO47OpQExZHw2SBIiRmxRJFwi9CqTa9XgvXVwMGNy%2B3QlCvcCrsC79pumy7ZX%2Bpxms%2B9gJA5Jq0hdGho1L0tpXfsZzLsciEeNbqPtEuAKqut%2B3XHGnDg6sdmnmxU8lrvMh072mInq%2BIC4iT8gPYsD54md7VERDgkl4Y6sY4eOgO5tliiBT7Ly8BMqAoQz3ay119BUIi0Y0hCcsLOPEFL%2F4XM1vGwRUOSrtLjiaVGOzreJhZObJlaNcNF6KdNPh3eWEpParWqPECWCvjq86lBkTLPZtR7OwN9Zx94XAF89O8hLWbnk0imBRuGDrQuNgZ66oLbwLL1WDHInkR0f2pB8HdMsH5bsRfgiPz5KTgSXUSQHAXKcEgr%2FQc5aVVYAUCSWjdlRbZcsrIyKm2s3yBob1co81eqXljtIJgEw%2FQk5VrpHdSRoP3OabpWyFT%2BwnqlWjFN%2BtH9X4PgVSkaEy7QxeSqi%2B1RL%2FqGEGtwmFfs6PrATo3B04GiYj%2Bxe7uii8KuKWKhV6GL3DrRxAIME%2B1ZoUkJMeQ8Cr1TMrB1zRPbw1MMHE8sUGOqUBZZHUetRqw9uzimK%2FwH5BzhuSDE9VRkoR%2BI4FIHk99qPr%2BOuirwf8TBwg0ADRwPJp5XMMynTN6wDGOlJHkA5pNCxglUQb4mYwBiHhXoEJV%2FHPb60yZBwJx7BdqwpfQNHFO29TkM5tCp7CtmRCtMRlSZqUQ4E1vwbqHhO4tqJguCzarB67fdmw8RrMZmY%2FjN6ec7NEiCAblCFKf%2FKb6h8Owln8NrLv&X-Amz-Signature=497d199d89aefee2a7ee2c0d91e4f16f76b96325e79ebcc1625c4a7465acb9bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG6DMS2K%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIBj3ZhhtUz%2FZ7g39dcBVCpiAWp1S82Srf4S0nrf9Hw2CAiEAiky%2FuKwA8NiRt9mGrYnTDQ4EKztZpGk9OU0b3Fkw%2B3gqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfgmt3dl%2FGND0EwWCrcA3XsEiWLp16sZ8M1JF8PK%2FLrK3hWnogt0x%2FHO6XZrUSx4t4sRgeJ3x6zbqW2eiQLYfXMZ7wmgCSwHDiY9zmO47OpQExZHw2SBIiRmxRJFwi9CqTa9XgvXVwMGNy%2B3QlCvcCrsC79pumy7ZX%2Bpxms%2B9gJA5Jq0hdGho1L0tpXfsZzLsciEeNbqPtEuAKqut%2B3XHGnDg6sdmnmxU8lrvMh072mInq%2BIC4iT8gPYsD54md7VERDgkl4Y6sY4eOgO5tliiBT7Ly8BMqAoQz3ay119BUIi0Y0hCcsLOPEFL%2F4XM1vGwRUOSrtLjiaVGOzreJhZObJlaNcNF6KdNPh3eWEpParWqPECWCvjq86lBkTLPZtR7OwN9Zx94XAF89O8hLWbnk0imBRuGDrQuNgZ66oLbwLL1WDHInkR0f2pB8HdMsH5bsRfgiPz5KTgSXUSQHAXKcEgr%2FQc5aVVYAUCSWjdlRbZcsrIyKm2s3yBob1co81eqXljtIJgEw%2FQk5VrpHdSRoP3OabpWyFT%2BwnqlWjFN%2BtH9X4PgVSkaEy7QxeSqi%2B1RL%2FqGEGtwmFfs6PrATo3B04GiYj%2Bxe7uii8KuKWKhV6GL3DrRxAIME%2B1ZoUkJMeQ8Cr1TMrB1zRPbw1MMHE8sUGOqUBZZHUetRqw9uzimK%2FwH5BzhuSDE9VRkoR%2BI4FIHk99qPr%2BOuirwf8TBwg0ADRwPJp5XMMynTN6wDGOlJHkA5pNCxglUQb4mYwBiHhXoEJV%2FHPb60yZBwJx7BdqwpfQNHFO29TkM5tCp7CtmRCtMRlSZqUQ4E1vwbqHhO4tqJguCzarB67fdmw8RrMZmY%2FjN6ec7NEiCAblCFKf%2FKb6h8Owln8NrLv&X-Amz-Signature=1348be33fce6838457a11c076b3c5d68a1ef1d60ff5ae000ea894f072d0c275e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEZTXW5%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICaf3z6zUmUex6RgnWaOg05aUs6XAw6cbAffweGywuQ4AiEA0W0hxajwi4OoGyrK6j4YMQO9XciVdx%2FY8XDz%2BzF%2BPeUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPI733uaan3KmV%2BZ8CrcA6Yc85DpWnY5KTjPVerzQGijq2llTSHMUA%2B34DW5uv%2BYvkmYJBu3jHKlhDF%2FVmUdDDzAmsKBwW4po2t1hJNq%2BYbVc4fqN9xKNjZfD8KI%2FdIir0Cq2hbmEmi7GlVyswjL4AwtDV3EVf%2Bx%2F4%2F2CepXkYc4gbJ6rkdCUIqCFDWApR%2Bs2ikL%2FsAxBk50uJ%2FVY3AxeSJ5ia0Dq9%2B2FCBX3NojTpbTFlijU0DvCRp6b8TGhpky%2FncYQDPIMVW7D6exmzchD9RZBz%2FYApFowt%2FS5z7mCEYYg1aT0esY4YDqzKTPpo492vfWGjGs4D037hQZUZoF3TE01oQm%2F7YnJMgm4RVZSLRs0n5Hi%2FQjxZ%2BAta1KvePod8CUUKw63EcUJBfSCVolkLbOME5Iz5NsDtSqBEO2doI9FcUEYGJ%2FsO2HCZOgAxnBE2WzkNoimLra%2Bl8ZCV14%2B376OD9L4IiOxAHyDpJ9gor5%2FZCIScUA1Tr4eXmzJ1WhSoSa11IxfD4kBMIx3RV3Oq2uxhkS9S%2BOZP5LGEssMkiXMy8qRuSl2ByrovhS%2BJ73jO4CcRQwq%2FEQSCkovVwEoFhNWADBBCHenomkH%2FaT3%2FlVTgQdjnN3ZRzafIYP83hPJMkbuiNdpNW0LxJJMJTE8sUGOqUBxU9Y4%2BtMhdUbLW%2FRv94DenVjVKHTBT51LtfI5uFAbZ3218fMMSd1cAN%2F7O%2F5sHJdYrV6InLOTPQxTS0smCnsddTxkwSpjZSiWGtrohcGiQIqFwSNs72T1uKfF9P0VPluqXqhzlrru6twcdrXfb83RIKmWS3URXTh00UgQA7Z7P%2FIYAiOLba8U%2B%2BYYWZcPm%2B2d2Oo9ilMuPqZIn3varkRRFbOrnRm&X-Amz-Signature=7a1b041eb0c79d02f8e867b87c40fd002a8beb6a7ba74181111360fed5ecdd19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

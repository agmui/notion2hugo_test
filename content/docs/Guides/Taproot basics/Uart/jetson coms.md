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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYD6NI2D%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCICH5Q%2F74iavpSnynnqlX3IxhcJRlIk88vOGNXiIGKqSGAiEAt%2F5in44aDxcfY6krntDJzFQqT%2BGLpxo%2FckiDM337exAqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXvmGPuH%2FHx7WPimCrcA03SyvgJLK3NhFjRo4hyZiRWnnzqQPiYfYZYfAJuO2vkYK5ZhZ7kauWMlwoWhzUsHoACogkKXFmkKWrJVqsBnWTm3AjvecbCxPulXGEJHLlNcehYnPotRl%2FKMLczSnYcl%2Fg%2BJYswd9nYruX%2BOsvopdbJh9kJXIYJNDV4il%2FN2swGwaz8lcpMvliRtlXUQjOuWAl7RN8fxfRW%2BCeB1ZASMcKhZbUI5OiCVjeMIuL5JyLgxJsBhw%2FrIElqPl2EJtEgSquGupVIGH173jspq%2B2PiKTtWxFDzunwM4UEyjPon6VhbHFM2%2Bw2P9jLFx%2F3S%2FiDlivea2VCqRFnDR9d0DpEMxa5fRHC6BJATl8PHZpDPs0AdAeAP7sVTnanjcuU69Q2FqkzHl7eM1LR6N8MMwp5Wv4ktiCNlq3rQ9ELnyNVnBtQlQF9ZIHhbTecgZ4km3rOyBQ6GgS5MakSunvSa7Y%2F49pdncf75bCsOZ2vjJcvUihGCbZ8I%2Bq7ycnZxfjo%2BFJB164J2QdjngncZqTZZF4Ingv4T7V6%2FxDEbOve%2F8rYRR9R%2FYEntk25DEGQOYWFr%2F5hXq0FdzCRmdMEVldUwRI1g6wNM7fMJunPMVPphwPWb1%2FAP3QCyuFOpl%2FC7YKGMNDp580GOqUB1zbtiOdt1UkoVIhFbK48mjcvzHBjt0K9FGg8BIlYMcCu%2BVDZjPVfDo1euiZZpRFX8jOuBVMgdUulBZuCktnFKmIRkXaMmvloS64fadgdgqiaEW44kX6T00bthAr3Mi%2FYYCTkSbYq4I4Wfvby0P7OrKE2vkRMsYEkCKM6a3a%2BwdNF8iXJTLlzEBeccAOSMm9IpTexzvWce676xVlzBIQ60ICjiAfC&X-Amz-Signature=ff8cff01d6235df3f063b06efd41fde71f9cb195c6c8cb0ec0d1594c4e2c50a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KOZZU6H%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIEA9RwVIaPU085Zd%2FmK1na5ZySuabs39UwiGblblfk6XAiEAov58DaBJchhuU51UxJnET8y%2BiZDG77dB%2FDcNEhUi37cqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs1zxv4eJSxysuKSCrcA2HBcE1WgqKOlqzp9e4nAB6HTQWJ1UEJBSrBqVvcxansCCk%2FvKJnpFAPneilS2wRHsqMpN%2Fs4CHBOy%2BOGtyk5rqfs4xJF%2FVNsalj4ymcVtAJZ5Sgt2gfmuwDf1BqKlvYg%2BJIzYgiS0KB9amqj4%2FuIiXGw9WV0TtcLZcbK%2Bbs%2FophUjM7k1wxqCCr5SBnfbBLtSwoc6fgZ0ms8%2BN0P6Iigiwj%2FyVmpKcCR5LE6XBBCecwPUeJXtVNnKchWw5nU8k48ULkKA0W%2F0tECo93%2Bpn6GHZVxrlo5O%2BtEPb5ffovA5DxlC7CZ74nMObGkBhM8t4GSCqXvhE3nMKPckEDrs3Ojn1OIwvMDxe2TXiSG8GOwSsJb8FooEEgEI3DSbWP5cOxHCD6DDbUpLW1oKp%2BOEpOPUYHoVimlSbnOWe%2BuSpIJXCp5yQJZvVonhKgnEWKHATJzTgurjz5uXBP0bmCTJ%2FtwzdAEMBrjVhAE8CY%2BKW6oX8nIJbVRcbb3Kt%2BIjoUqNpv6rGSydC7Fx4OyPPxRLRb7V%2FTYS%2BK9Tj%2F%2FoKJCHPy9HLmWQzpwQv8U7%2FOF5wPUN0Un0X%2Bj36deggrnjnGkFkoEHKgKJ0AwyaOrWgrcTmLCMNubMw5AhO%2FKCXRXWc6MIzr580GOqUBN5IjWohktF6yN9RlyprGUMeZl3xu%2FKqZAzPgUwZOtKHZ2mJijlQrNByPfx%2FHlSoFsyff305J7tqvDD4LcoQ4PUOGw8tTet%2BvsgJoSzpDNydjEQJVXu8ixxF3KqT13594uhrsB9%2Bz113nrtHY3DuAD8SFGG7xBXkJwejEnR%2BrHe6A7Gww%2FvkdDAPi04DyeVleA8%2F%2Fx1vIt97y5tzP6jc8KRtiYitD&X-Amz-Signature=2c8303ee7af2a1a150fffe222dce97f3eaa051fba407e99f215e58d1ec963ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VKZNL6%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHL%2BWSFUYgB9bwrxqNy0CO%2FaHlzifnKFPPJStMlI9cX%2BAiBJQjUUid42%2Bv6cbz9QLgaAwLN5HUTpuC1GvDg3esfaviqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKodJtFAyNNkmLtQHKtwDaM5nNC%2BJMUp7m4HCzIyGZVlX8kQ5xbdQk4xo8Klw2nIDiJoexaRx%2BpCB3tJkt%2BMspPxS2yGGmabKmOAQAV4tA9Pxrcnbm%2FR8W8ULeB7CM4XjKrjFsYuh6C1gBRhq9bOZQ8AAN0ODmMTKGdrI4GN%2FjXsFcSh2Nmsou32pcZAxQD30fDptKG7f2wmEjE%2BupWoCl1Xeh%2BMIowclYwndX2h8GanUCOExM7XzF3y5VqF1RmsU8sFDbzCCNQ4dNvefVA874hDkACIRQq%2BnWl4eCQDx%2Fj4STyUBdUOfFp9bN2kpMSBKuJNM1LnY283GKW9GJ3BardJQkDa6wAUjLpF%2FXlPBmTxAmfxOkHQYPF0VvwmkNg%2FbaEwSAl9UkI7mY8X0dmvIy4On%2FJJtv%2F3YqfXQc%2FgjUMih7%2F68VQRYXbuPorZzYtIa%2BigMT4KWylx8Uf0rxk55zEtlQ5F8Ywjk68Q57yWkeMRLw%2FJBRit5A3iX4DzZIUZnpLHFsGZKeJ9nqJAibeNN6ukQVQaGPQNLhhdvgZawadMjaAqUegkseGCXynfBvUAogDu9pco0gJS8hpdjHEZR68lwODsHB8rriO%2Btr7wYJMF5SQZ9yX2S0M5WHBiTrxoIlIaUt79U6gm5mCEwo%2BrnzQY6pgHukGW39ybRlqstLl8blgkKgpU1%2FFMFwBsQzyibzLmOLEy0h3Ml3cflY6NWa%2Fw%2BSWzUXP9OSFsqW6QERGszGaXBlmkA84EOcUGEZvsezH8A%2BEELuUXuwPUVJKq%2Fi3KWhZlx2wqR2QE64m7CvWjHceYUj05NkKg6D8nEL%2FhV2dLRwtw9GqSiDU11fhfWiXMD76QY1XhI%2BgRA8GOQvfbddkqUIhT9Bv5A&X-Amz-Signature=f9b8bc7ff93944b5b87e43d531d5b1bf2aa94317a702d0d580542141aa3999b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VKZNL6%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHL%2BWSFUYgB9bwrxqNy0CO%2FaHlzifnKFPPJStMlI9cX%2BAiBJQjUUid42%2Bv6cbz9QLgaAwLN5HUTpuC1GvDg3esfaviqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKodJtFAyNNkmLtQHKtwDaM5nNC%2BJMUp7m4HCzIyGZVlX8kQ5xbdQk4xo8Klw2nIDiJoexaRx%2BpCB3tJkt%2BMspPxS2yGGmabKmOAQAV4tA9Pxrcnbm%2FR8W8ULeB7CM4XjKrjFsYuh6C1gBRhq9bOZQ8AAN0ODmMTKGdrI4GN%2FjXsFcSh2Nmsou32pcZAxQD30fDptKG7f2wmEjE%2BupWoCl1Xeh%2BMIowclYwndX2h8GanUCOExM7XzF3y5VqF1RmsU8sFDbzCCNQ4dNvefVA874hDkACIRQq%2BnWl4eCQDx%2Fj4STyUBdUOfFp9bN2kpMSBKuJNM1LnY283GKW9GJ3BardJQkDa6wAUjLpF%2FXlPBmTxAmfxOkHQYPF0VvwmkNg%2FbaEwSAl9UkI7mY8X0dmvIy4On%2FJJtv%2F3YqfXQc%2FgjUMih7%2F68VQRYXbuPorZzYtIa%2BigMT4KWylx8Uf0rxk55zEtlQ5F8Ywjk68Q57yWkeMRLw%2FJBRit5A3iX4DzZIUZnpLHFsGZKeJ9nqJAibeNN6ukQVQaGPQNLhhdvgZawadMjaAqUegkseGCXynfBvUAogDu9pco0gJS8hpdjHEZR68lwODsHB8rriO%2Btr7wYJMF5SQZ9yX2S0M5WHBiTrxoIlIaUt79U6gm5mCEwo%2BrnzQY6pgHukGW39ybRlqstLl8blgkKgpU1%2FFMFwBsQzyibzLmOLEy0h3Ml3cflY6NWa%2Fw%2BSWzUXP9OSFsqW6QERGszGaXBlmkA84EOcUGEZvsezH8A%2BEELuUXuwPUVJKq%2Fi3KWhZlx2wqR2QE64m7CvWjHceYUj05NkKg6D8nEL%2FhV2dLRwtw9GqSiDU11fhfWiXMD76QY1XhI%2BgRA8GOQvfbddkqUIhT9Bv5A&X-Amz-Signature=010bdfef42e9086692c2a732cf209dd8b95d9818374149c296cd3214f7ac0b3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KOZZU6H%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIEA9RwVIaPU085Zd%2FmK1na5ZySuabs39UwiGblblfk6XAiEAov58DaBJchhuU51UxJnET8y%2BiZDG77dB%2FDcNEhUi37cqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs1zxv4eJSxysuKSCrcA2HBcE1WgqKOlqzp9e4nAB6HTQWJ1UEJBSrBqVvcxansCCk%2FvKJnpFAPneilS2wRHsqMpN%2Fs4CHBOy%2BOGtyk5rqfs4xJF%2FVNsalj4ymcVtAJZ5Sgt2gfmuwDf1BqKlvYg%2BJIzYgiS0KB9amqj4%2FuIiXGw9WV0TtcLZcbK%2Bbs%2FophUjM7k1wxqCCr5SBnfbBLtSwoc6fgZ0ms8%2BN0P6Iigiwj%2FyVmpKcCR5LE6XBBCecwPUeJXtVNnKchWw5nU8k48ULkKA0W%2F0tECo93%2Bpn6GHZVxrlo5O%2BtEPb5ffovA5DxlC7CZ74nMObGkBhM8t4GSCqXvhE3nMKPckEDrs3Ojn1OIwvMDxe2TXiSG8GOwSsJb8FooEEgEI3DSbWP5cOxHCD6DDbUpLW1oKp%2BOEpOPUYHoVimlSbnOWe%2BuSpIJXCp5yQJZvVonhKgnEWKHATJzTgurjz5uXBP0bmCTJ%2FtwzdAEMBrjVhAE8CY%2BKW6oX8nIJbVRcbb3Kt%2BIjoUqNpv6rGSydC7Fx4OyPPxRLRb7V%2FTYS%2BK9Tj%2F%2FoKJCHPy9HLmWQzpwQv8U7%2FOF5wPUN0Un0X%2Bj36deggrnjnGkFkoEHKgKJ0AwyaOrWgrcTmLCMNubMw5AhO%2FKCXRXWc6MIzr580GOqUBN5IjWohktF6yN9RlyprGUMeZl3xu%2FKqZAzPgUwZOtKHZ2mJijlQrNByPfx%2FHlSoFsyff305J7tqvDD4LcoQ4PUOGw8tTet%2BvsgJoSzpDNydjEQJVXu8ixxF3KqT13594uhrsB9%2Bz113nrtHY3DuAD8SFGG7xBXkJwejEnR%2BrHe6A7Gww%2FvkdDAPi04DyeVleA8%2F%2Fx1vIt97y5tzP6jc8KRtiYitD&X-Amz-Signature=7857e91a61315ae1c5ca0bc7450eede0837d4e2944199920939590feb9c9f9b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KOZZU6H%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIEA9RwVIaPU085Zd%2FmK1na5ZySuabs39UwiGblblfk6XAiEAov58DaBJchhuU51UxJnET8y%2BiZDG77dB%2FDcNEhUi37cqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs1zxv4eJSxysuKSCrcA2HBcE1WgqKOlqzp9e4nAB6HTQWJ1UEJBSrBqVvcxansCCk%2FvKJnpFAPneilS2wRHsqMpN%2Fs4CHBOy%2BOGtyk5rqfs4xJF%2FVNsalj4ymcVtAJZ5Sgt2gfmuwDf1BqKlvYg%2BJIzYgiS0KB9amqj4%2FuIiXGw9WV0TtcLZcbK%2Bbs%2FophUjM7k1wxqCCr5SBnfbBLtSwoc6fgZ0ms8%2BN0P6Iigiwj%2FyVmpKcCR5LE6XBBCecwPUeJXtVNnKchWw5nU8k48ULkKA0W%2F0tECo93%2Bpn6GHZVxrlo5O%2BtEPb5ffovA5DxlC7CZ74nMObGkBhM8t4GSCqXvhE3nMKPckEDrs3Ojn1OIwvMDxe2TXiSG8GOwSsJb8FooEEgEI3DSbWP5cOxHCD6DDbUpLW1oKp%2BOEpOPUYHoVimlSbnOWe%2BuSpIJXCp5yQJZvVonhKgnEWKHATJzTgurjz5uXBP0bmCTJ%2FtwzdAEMBrjVhAE8CY%2BKW6oX8nIJbVRcbb3Kt%2BIjoUqNpv6rGSydC7Fx4OyPPxRLRb7V%2FTYS%2BK9Tj%2F%2FoKJCHPy9HLmWQzpwQv8U7%2FOF5wPUN0Un0X%2Bj36deggrnjnGkFkoEHKgKJ0AwyaOrWgrcTmLCMNubMw5AhO%2FKCXRXWc6MIzr580GOqUBN5IjWohktF6yN9RlyprGUMeZl3xu%2FKqZAzPgUwZOtKHZ2mJijlQrNByPfx%2FHlSoFsyff305J7tqvDD4LcoQ4PUOGw8tTet%2BvsgJoSzpDNydjEQJVXu8ixxF3KqT13594uhrsB9%2Bz113nrtHY3DuAD8SFGG7xBXkJwejEnR%2BrHe6A7Gww%2FvkdDAPi04DyeVleA8%2F%2Fx1vIt97y5tzP6jc8KRtiYitD&X-Amz-Signature=718287e7c339faa14bbab09c057625dc71d50475fca3a0bc573f4ddc01c743ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGBSGEB3%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCAa9EKFfMWIAYiLIH7t%2FuF9G998ISZ8K%2FlXLXiGp8AwwIgBPIKPGeMWPCdetXiy3nN%2BbXMbYdYXJTX9j5aqcXTa9kqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjfEKbOsS6wwZpu1ircAx9QKI3fc%2FYeJeqvL3gwgkwNNO6B4DcaAmR3saB0OPlJxp7545j7ci7bpW3Fnwz4e3SuRDVjT1G8QKG9GKPY2TNr%2FdeaZnFs9INPvQ%2BVoDayDGlaotTCM8WTzriacRh6QXDltRa884xvF2dRQBM1Wo%2BxwNp8wX1CkTXPtY7Ug%2FwOLNxqASxpka0QWtMHxZfD3nVMMiG98QngL7IbFTm%2FII5CbqSe8pF09lAYytdpHaC9sZX21NGX7E7FXyAGLnI4SoU01NoX%2Bx30T0XOp0LkOoRVt3ztsOKLXW1lJp1LSLeFGyDfkZx%2F4rUfV90xxNfSCIVPuhCAO5J8LnS%2F0pLBgU72x4cBdTBButfYoU14AxudZR6kWu3lc983vPQ3PRi67lqo7UxK9jdx0q6mGQuka0SGdpjSzMLI3wBEBj2MEnzXJvdMOFFXTR143PazejXmK1UH2QmnY8F%2Fn3WQ7oj2wRmr%2FvDBjDUZhyHn0fxYevuTxf1QU3eSvMNnvF%2FZn%2FRiLky7ACKenK1E8GHFCDQSj7clyIjnS7ZfS1TtBB%2FnkaEnH3qkKTFDo9A3aWQOWR8Odh%2FtR4fX4UxgmFN%2FENY%2FxcxLUIOSUJRkKjc%2FfAjYpr%2FDNxJFzG6paZRoxylSMIbq580GOqUBo6w40MwIcEEe2EZQIAdf2oAZJYtNfTdMjlPSvx8kaqjpnnU%2B8TnO53zUaHvj5%2BJR1gzICRA1JN6La%2B8O3PJfBp0txwKHr2A9suY%2FUG%2F%2FRcl2D9qhPuRu6T2W%2FZ8vSFqbjr833Ky%2BoLf9I6zK4HCbE5cATp6Q6Fj2nafU3VCF0w%2F65EeIlPWbp0IyPF6iubwyahoXKSKAm5tQQfqeyDBeewgcorh%2F&X-Amz-Signature=fda101a351866e85b1f643fe63350ff0418b9dec730e9e69608aa54f7b804c52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

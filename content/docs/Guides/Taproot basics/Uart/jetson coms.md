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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFLWUMBJ%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdhT%2BA5tCJ78MFnvdbC1c9E4%2FlsEobYPeM6Z4l%2FvoR6AiB%2FNGkbh02%2B%2F1zQlZXS5YDQXCa%2B0idCCV9JZOjrrVgE%2Bir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM7nR%2BgKt9QDzn5FeXKtwDlWv7pCRompl71uBdkBX9N2aARAAILF4ThYc57%2FycfCDHt8yVeh3xog4Cls8KUp2DwBCVw4MZNRlRtl1MjTfDHlJNmGl6n6E4wPDdOh9cy8zeW8wGOXoRAlVFfRr3xR5%2BrcLQNxBREWoKHOrTxSTAZH8QKAMes9vet286%2FD2SsEYleaj3hHM1UHqUkgzecZiIxf3qqAv8Hv3MVqhPnLeOKG1FziRuDTrYiXTRQTQZv2lf7YXoZ%2FakTwP33%2BzL7qQlcC5f3gvCjMyL59gO327hb29zBkpkAbJKSLsmyRJaGkON23Xo%2B6639f1wuNs0DHuXa8uTGvhwRdC4d9vWauUyrYQjjqgG9x7pUjxAWRPJyk5GK2iprXClDRgovXdIqP9AwiCabjGFrh5Ar0Zp2JAJ4%2Ff6RGtVlBqMOfpXjcLVUU5u53ioHB2wqc6g0TsFKtkP8fqOWO8lIj5tNHqP2oR%2F5UFOuof9v3cuYrnZyCgA0r7SyPEX%2F3p%2BuYjK6%2BfFZyllh4JTmdZ0Z5oLvLkedSZ0NbzZncgmcczaK5GBSlQsrxd6849uz5g0jxoob%2FTzCjJ6mZgbMVG95nKN2JzcVPkmh%2FNpxGtaP0alWuM4PoJeV2LMAM%2B5Qh9uMN1VW6Qwrue8ygY6pgHEwzFh%2BO1FtsdKcLAoilRXfRcq%2BPCCJBAohfRZReZHm9a%2B8tmRUrhhxpZ1FcaPJBz4ty2dQ4yb4rJWHnlzJvdI0sYc1AXrTNLgQrAq08wLvZ7iQoFnUihrumGRuVi66T1jWPLRlvs41Pwsc3CkxOgaI%2B6m4XpMuF9sNUZEWFoi%2FDeBvnXSLeCJI1fOOVTYG7i%2BupHrFtyXGDEk8WwcLiNlzPSwnFC9&X-Amz-Signature=ebf9a67a83f1b392dc8c5e45ea155a3335e7f0a014b2f7f4b2293a1bd7b94928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7BSTHWP%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNKKryj9dmqAaeGKWOIhzFDXuXCWv5UCTWnxFuZrCbjAIgXxf7wXXYS2CDwn5fhm0bQ1dc2h3J%2Flk6DTXY%2BanFHGkq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDBh%2BokxmsOrh8blLAircA%2BsmdMgoZa5BkLO5Zp7pAvT6xMsjnBU1posPFkW9%2BuBQw9KBP1nmmLWrjqcyaqTL%2B1VuYDDeS%2Bm1sQTBCWJEWPDPNynS4XtqfFqXR797DArGVJPgK8WncXT%2BFcTnMrfVgS9SuOcqBAlfE2UwZQPGGzohFahn6GHab7K71QDiVTepo87IwIh95qeX3wbiX%2FCUOz2BhzCKOPOQzmwA3FGu19K5zuUsYR6F7H%2B66lnGwWBbMZuChNEwu1fhUlRXy%2FYFDR%2Fr9TrtRmM3Vt9xf%2FWEB1Ox1kGGV7bjmfpgqbS5E%2BHogc1p5DI74zy5kh8MIyP0KqJWK2uHno6lvHwWHUKaR4dHn3VvE7L13pUhrBQYpyoGSeRRM%2BO4lBqTv%2FWZMrjyP3TR66GSj%2F4TBG0DzkUvVVvQ7ulXTsDxCSHr49JvQemyHogbotOZ1n4c2emnS4D37FXz2wNygQpm0qkVjceNx%2BkgkVDGXmPsu5rQgAVYLxrhfeoyqOLYQ5cmSbep34vyVbINIGfpPZticuifuzFxBO2h4s1%2FsmN%2FNY9bQ0BB%2BZ01Xl2MEBxuCX8BxYsqY34QJrwSlII9T2O3l1i37Jjpv%2BKwzgIPhiJtHsNX2R9t0ti1TudnqCKEXVnOvLXjMKXmvMoGOqUB%2BQBbuuLYG6O8q5mMpWEB3TkuQW600xG2EpiIijHDA3nkNHZ0ZxSdcTp31jJjpyME6%2FRMZmGcfAht%2FBaYSeLr2H3DUWgjl2V3gJYnEWwoZCm3qGeh6m%2B1GSePX717GB%2Fjc2k%2Bng6fgjwHrprsAtMNmts2MCfxMdiQbWnul6fXnPfaSURGRUalsojrpW17qww0R2%2BdZzn2DTbntl%2BZcV%2FRj5u1geJf&X-Amz-Signature=9b7628ca63113ddf0263c44096da792ef961fec1fced66e044c3a108e2b2424a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIRAJAYW%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3v%2FMr1pnuYiOGmoaW2GSFY8%2BxP9uD1o3dPYCYNBGvhgIgNhVIJEu6nX8TEl8803X5fyPcHuv0rX4b7CV%2FZIYnwzYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDPCdUFeemVIzDPr9xircAyNmn4dXF2ZQiJFdTO9uDQyevOLfFX7Kd4d5UldgXR3KAJIMoG21PtKScruE6CUFC9b4RHxHesws5cG%2FzBiISv2lCnNZJznxrzBfub3MtUD%2Bz6uwR40ewzz0iiWKcnCp7MAjlLZmUljsTaEA0Jj2WOe2enPHzspUcK%2BPA5Cbt3r1LXEgrsXfUmcWxcD4wmIIwVnrBRz1%2Fccx5TriaACj8%2BFB7FTWVMyoZYLONDixoil1kAkKOijiuwJzxn5oXUS3E%2Bc1BKadLLaItaBYswj8eMj%2Fq24zSOYwvwaj3VNexGNDMzXF5XSaL3%2FrLFapul23cp8ivm6Y9IEMVk6eHIYTac0Bc0jJGEMoPNpGeauYFo5%2F5fTzWguQ9gRkUbCgaYl7ucYBqRLUDiMggqamYKiJRLGGQlzHkrm1x%2Bj%2FzHrg1Mxo70oSCvQXQJAdFVIzeUte%2BuNq4LR2hPlz80XR3dC9UfSNIt6YFg2qbr%2FjGh3vRJxlppDTgAMipGZkz20oOUtGMfRAat58HiscFh2PIoM6FHJkTHFweQeHzthmEjfERBfbduwI6%2FhLqkdTF%2BecA%2FT9zYAwStRef6OEfRZ2oooNNAvxn5WnSqFN7I7Ff9jM3KB4HiqsRePG6VI7WPxLMPHjvMoGOqUBiNkxS6rmNLZZhk3%2F0nvMme%2Fbl6Fgk%2FPu1Ii62yV0BJZkYo229I%2BJ%2FwuozD0lgE9ePK%2F5NW0QcufBBt%2FoDSscxBBNCzIvx4SAAC61M0qAktjsxA80mPaXe93Nah3CyMGx6YlutM41A7S1hk296EoYEMwGYuOof2YYVVFMNcGOwZckkqbEdryQp9SdwPlEdve8765RHzWUHh9FtF7r2ZwSzTt%2FK11w&X-Amz-Signature=ec462ec8b709e2e97fdd73bee1373178f0bd3fc92ae49fe2d80f54a4defd088b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIRAJAYW%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3v%2FMr1pnuYiOGmoaW2GSFY8%2BxP9uD1o3dPYCYNBGvhgIgNhVIJEu6nX8TEl8803X5fyPcHuv0rX4b7CV%2FZIYnwzYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDPCdUFeemVIzDPr9xircAyNmn4dXF2ZQiJFdTO9uDQyevOLfFX7Kd4d5UldgXR3KAJIMoG21PtKScruE6CUFC9b4RHxHesws5cG%2FzBiISv2lCnNZJznxrzBfub3MtUD%2Bz6uwR40ewzz0iiWKcnCp7MAjlLZmUljsTaEA0Jj2WOe2enPHzspUcK%2BPA5Cbt3r1LXEgrsXfUmcWxcD4wmIIwVnrBRz1%2Fccx5TriaACj8%2BFB7FTWVMyoZYLONDixoil1kAkKOijiuwJzxn5oXUS3E%2Bc1BKadLLaItaBYswj8eMj%2Fq24zSOYwvwaj3VNexGNDMzXF5XSaL3%2FrLFapul23cp8ivm6Y9IEMVk6eHIYTac0Bc0jJGEMoPNpGeauYFo5%2F5fTzWguQ9gRkUbCgaYl7ucYBqRLUDiMggqamYKiJRLGGQlzHkrm1x%2Bj%2FzHrg1Mxo70oSCvQXQJAdFVIzeUte%2BuNq4LR2hPlz80XR3dC9UfSNIt6YFg2qbr%2FjGh3vRJxlppDTgAMipGZkz20oOUtGMfRAat58HiscFh2PIoM6FHJkTHFweQeHzthmEjfERBfbduwI6%2FhLqkdTF%2BecA%2FT9zYAwStRef6OEfRZ2oooNNAvxn5WnSqFN7I7Ff9jM3KB4HiqsRePG6VI7WPxLMPHjvMoGOqUBiNkxS6rmNLZZhk3%2F0nvMme%2Fbl6Fgk%2FPu1Ii62yV0BJZkYo229I%2BJ%2FwuozD0lgE9ePK%2F5NW0QcufBBt%2FoDSscxBBNCzIvx4SAAC61M0qAktjsxA80mPaXe93Nah3CyMGx6YlutM41A7S1hk296EoYEMwGYuOof2YYVVFMNcGOwZckkqbEdryQp9SdwPlEdve8765RHzWUHh9FtF7r2ZwSzTt%2FK11w&X-Amz-Signature=2a8ca9c4552337823f404b091be27a5b67120baf0572f0a972b52bb2f72d64e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7BSTHWP%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNKKryj9dmqAaeGKWOIhzFDXuXCWv5UCTWnxFuZrCbjAIgXxf7wXXYS2CDwn5fhm0bQ1dc2h3J%2Flk6DTXY%2BanFHGkq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDBh%2BokxmsOrh8blLAircA%2BsmdMgoZa5BkLO5Zp7pAvT6xMsjnBU1posPFkW9%2BuBQw9KBP1nmmLWrjqcyaqTL%2B1VuYDDeS%2Bm1sQTBCWJEWPDPNynS4XtqfFqXR797DArGVJPgK8WncXT%2BFcTnMrfVgS9SuOcqBAlfE2UwZQPGGzohFahn6GHab7K71QDiVTepo87IwIh95qeX3wbiX%2FCUOz2BhzCKOPOQzmwA3FGu19K5zuUsYR6F7H%2B66lnGwWBbMZuChNEwu1fhUlRXy%2FYFDR%2Fr9TrtRmM3Vt9xf%2FWEB1Ox1kGGV7bjmfpgqbS5E%2BHogc1p5DI74zy5kh8MIyP0KqJWK2uHno6lvHwWHUKaR4dHn3VvE7L13pUhrBQYpyoGSeRRM%2BO4lBqTv%2FWZMrjyP3TR66GSj%2F4TBG0DzkUvVVvQ7ulXTsDxCSHr49JvQemyHogbotOZ1n4c2emnS4D37FXz2wNygQpm0qkVjceNx%2BkgkVDGXmPsu5rQgAVYLxrhfeoyqOLYQ5cmSbep34vyVbINIGfpPZticuifuzFxBO2h4s1%2FsmN%2FNY9bQ0BB%2BZ01Xl2MEBxuCX8BxYsqY34QJrwSlII9T2O3l1i37Jjpv%2BKwzgIPhiJtHsNX2R9t0ti1TudnqCKEXVnOvLXjMKXmvMoGOqUB%2BQBbuuLYG6O8q5mMpWEB3TkuQW600xG2EpiIijHDA3nkNHZ0ZxSdcTp31jJjpyME6%2FRMZmGcfAht%2FBaYSeLr2H3DUWgjl2V3gJYnEWwoZCm3qGeh6m%2B1GSePX717GB%2Fjc2k%2Bng6fgjwHrprsAtMNmts2MCfxMdiQbWnul6fXnPfaSURGRUalsojrpW17qww0R2%2BdZzn2DTbntl%2BZcV%2FRj5u1geJf&X-Amz-Signature=c70914e3028928887691be34ff42738b5b9af04a9de029e8a8bb851a01a174ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7BSTHWP%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNKKryj9dmqAaeGKWOIhzFDXuXCWv5UCTWnxFuZrCbjAIgXxf7wXXYS2CDwn5fhm0bQ1dc2h3J%2Flk6DTXY%2BanFHGkq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDBh%2BokxmsOrh8blLAircA%2BsmdMgoZa5BkLO5Zp7pAvT6xMsjnBU1posPFkW9%2BuBQw9KBP1nmmLWrjqcyaqTL%2B1VuYDDeS%2Bm1sQTBCWJEWPDPNynS4XtqfFqXR797DArGVJPgK8WncXT%2BFcTnMrfVgS9SuOcqBAlfE2UwZQPGGzohFahn6GHab7K71QDiVTepo87IwIh95qeX3wbiX%2FCUOz2BhzCKOPOQzmwA3FGu19K5zuUsYR6F7H%2B66lnGwWBbMZuChNEwu1fhUlRXy%2FYFDR%2Fr9TrtRmM3Vt9xf%2FWEB1Ox1kGGV7bjmfpgqbS5E%2BHogc1p5DI74zy5kh8MIyP0KqJWK2uHno6lvHwWHUKaR4dHn3VvE7L13pUhrBQYpyoGSeRRM%2BO4lBqTv%2FWZMrjyP3TR66GSj%2F4TBG0DzkUvVVvQ7ulXTsDxCSHr49JvQemyHogbotOZ1n4c2emnS4D37FXz2wNygQpm0qkVjceNx%2BkgkVDGXmPsu5rQgAVYLxrhfeoyqOLYQ5cmSbep34vyVbINIGfpPZticuifuzFxBO2h4s1%2FsmN%2FNY9bQ0BB%2BZ01Xl2MEBxuCX8BxYsqY34QJrwSlII9T2O3l1i37Jjpv%2BKwzgIPhiJtHsNX2R9t0ti1TudnqCKEXVnOvLXjMKXmvMoGOqUB%2BQBbuuLYG6O8q5mMpWEB3TkuQW600xG2EpiIijHDA3nkNHZ0ZxSdcTp31jJjpyME6%2FRMZmGcfAht%2FBaYSeLr2H3DUWgjl2V3gJYnEWwoZCm3qGeh6m%2B1GSePX717GB%2Fjc2k%2Bng6fgjwHrprsAtMNmts2MCfxMdiQbWnul6fXnPfaSURGRUalsojrpW17qww0R2%2BdZzn2DTbntl%2BZcV%2FRj5u1geJf&X-Amz-Signature=44353fc98e48d2f316a9597a6447fd0b5a4d96f5fe56b18686e6a86e3e852b05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSY3SPB7%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQvx%2Fjbh80tesL3VFmx1%2BiImphKu7jzrXRlx6QXSglhgIhANPg9sa%2FBKYIxB%2FVPolpP970yBHd2wuIKGstmB1NazuXKv8DCGMQABoMNjM3NDIzMTgzODA1Igz8T2KNVNDGcsx8t8Aq3AOHDRdYHWzhu469TZTDVfk9FSHy6OGj0Fi9Y0CGsIgSBinkjXe3oPBgvnYcIBy%2BoOm37gx9Kw0Id5wzYhi5r6i6qCQOkQp9PSuUrt6wxJjSLMfqVp8YiK0%2BMFUIRCu72yctEREnpml6tYDWlyLgqyEJ83nV2JF4O9JKJSHWpmawFIkSQCCu90h5nBeOIMGUAYGCpAyuGZHWWhbjg4UE5H%2FkIV91W9cDhgg6BehMGgnu62c1oIFvKYJZcqHLZnB%2Fm%2FrdYCDM1y0JuBX7uJPKUhzMb5vB3ex5EHNFd3pelApCYmWJ4cwVttB0qycqf%2BRbU8ZlAyBOvgLxPPGvshqB%2BBd85o30uJJH3QJs2j6UxZ6XKOhXG3vLCGMDtWsFjhZ%2BaAVV4lwb9agNtuQFDVX4z7%2BBrZho4EbxhKbO0lBN%2FsK4dBWrlxPz1oNH3t1COpFdoJEfSvD7vC13Ft6QMFw6zqQKBJDwTXO4yA9%2BOQtnrZkB%2Bc%2FuFcn92DLuhRDahNXBpAMJ136ARHLEY2dQoHQzzCkK2xPO7xz8AKvOnSrYmOr1fy6ZFfJ39wL0Uaa8fYKCQcnDo2ujfQG4KNrqJtifAAvXHDyxVw28L0ulULiSLOqnKeITZnutO7Cwc0G0ZjDe67zKBjqkAdRq6%2BklZXciZDekA4ZCALfekNtD1DCzcagje8LedgBaM9GfUUinZtshPCzpKHB1xF0y4ngwRcevT8aLsoTlnp%2FqYA0u1uERfm0oSf05rHvp%2BRyZf7044g%2BXW%2FpP%2Bzvm1xi5xkahsmE3msjuveqz66xp2BhkYdKwKd9ZX%2B2mRbWiK8clQ%2FBanEtMEj6rXfGA2qoWCR4lN585aNLT6aF9vrwrwDWm&X-Amz-Signature=c42a4365cb1b82d2e5b93a98694b9267efd37f6c9856f7e5b8b13b6615ef13ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

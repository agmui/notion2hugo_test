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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DWZPWS5%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHu4fgnUKfuGko9mX0x0qHuTnFNKMdMVBVowpQ0LeumZAiBjuOCzFiLW9ZumLabUt%2BcJc9dRmk6u7BUYPuhgupsoiyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuHnh0dy7mAlf9siZKtwDqPD1g7mI9%2BIpQOVjhiEto1GIb3xsrgPa50vxQwDlKjm6q1f0nnDiV%2FKkf9%2FVTLc3VV5YLG8mCGJsbVndM1aRz3sRvKmhw4%2BZWhFnAtA98m2gW5w1rYtO2CVuWjzBPM45ZhaAVYcDT2uzrscQkDenWUh4aRLrdB6D7WvKpXxDDUdz6iGxhPO0ZldfUemO6L0%2BV3Qtko%2Fz%2FfZB%2BuV4nw7EWDJhYwOWS7Dt59Rye0R6Ng6LvtJ%2F0xFgn2xQNJq75UwdTqVtccLF4kOMaN79XPmEgbDfy56XHdcH2bZyYv%2BGPWjHUonIn1%2BiDQxaCA2HaBTyY1L4EUf710au2tH35qye5t46qSxBgeKfcokYyEV2CQw98ELhwlyWrcy5E%2Ft62Nqq5spDgKVIpHx68q2RBTF1JNs%2BiP16LguqeDDpvRix0pNGz1a7px6mXZK2Lx7KUe0Ju3GKqtropm6phguvEOCnlmtWry7wuLC4zl%2BomyBO%2BLvg9Pwn%2FjBvilu7z0N8aKlSiJkopf79njmmBRVa0B%2FEkgjJxC7%2BIjfAKev6Q5rQvXxt8Pkq%2FusdPZqIcleH9xRmPNQdjFetlTGghpnOsfkArN6w8ezBfIKpwJm3mfBx3wV5%2BUPv2EzJUMgKTgMwyPHLygY6pgH0uS2lnW3cySm5KedmrXQ4nhtpvOIrjhLeuyjUafdL0ZDRo7UKpv%2B9TWhkYvOOjRzTUlH9B3K0qXORLpQfBBxUB6ke%2B3fns7bl1tfwviP1MR%2FAIa%2F9qK4aVDOx82zZF7B8nZC3%2B8Hc%2FYLQFfxOpjCNlJgsHYzDTQm%2BjSfxLu8aU6%2BxH8X5snwObUirgN7AqPb6EYagSHe%2Bba9lGUj3hFMQMc30tt7N&X-Amz-Signature=1db79934af31ee9bdc87198ecdd4fb84c6684b5f2f78921f21d65fc9e2ace660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIHZQY63%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGJjwA65jnc%2FrleDecc7gKZEM4Bm%2FXwolMFhhDKMAWMAiAnYZVHSG1xad5JLRze82pSgN1nEEZ%2FV6PnhIBBVBY%2BzCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTJpjP7T9ILov%2BZMUKtwDRZcXm1i3dOqPBn4p6EKzu02mgKdilBLhXZJSEhcaNyah%2BpNxOvXzSEa1yHhrB00MhoVWKWAiJeNelLnmHF5K%2BpA9WY2nsa5L%2FYPzVu%2FWfD2FgA9PHQCLCzeLZ6G5SGaL%2BjjVPY6jN2HZi3A4tAWv2iDCKP%2BAvHcV330R4j%2FEKh8soP%2Fsic7BpGoVNlyH2x4P5yFrTp9e1Vx1iAyChi5pmTyMYI5hETZesF06cgI5D2tVJTrLTJ1CXm4xI8q5z%2Fug7jKd6Kf34c8TpD%2BrrS%2FciPPokIU0HBSNtSC6yrIJ0ecMOvkWfLEEhN%2F4CaR%2BVqBi84p3KvpSFe7KNKPRU5GE%2BX05QQd31ehan7bZzRUfsbL8LyZ%2FsPJw4nPGnvPS8J6Ybyyvf8CEpM1YbBNMJKK9ulIeHFUq4J0F6VYkgENmGmepNlq9ofGVUK%2Be6RUaXE2cOIxGwd%2FrKrHXUSo6KAICpNuHVeHSF3p2P5i9S%2B3LY%2BnLRZNd75dQCre5SsFDfj0yNTHc4i7xTTMNWdfWS7IH6fWdMnEFRfu3yPw9Bngr3LwiH02IESf1uaDnUv0S88GiyCaTpKpzcfsTlcrRO6GqV2AcY%2FEckgpQgJOXY%2F8KMgjaV%2FSTZTBJePZUzTUw9dvMygY6pgE7ZWZ4LGE9m8OwuMMTDveBfbm5i3zavNMGlf%2Bnm991t26IlOfokBuiDDEPR%2F%2BY%2BfyHbCu0EDFfABgGcxQyZMPGb8EQcECPQ5uYeFvL0lNMoHsFiuni5d%2FLttuS4K7prJ7Rc69ZtnYVDnpxwBpOYsPaBpAr9P8iGRllVEIw1KWzirQhbvOY4vqC4VcycTy9UGIsUQWnTqKYY4xTuhIzL1MjXL1OWq6h&X-Amz-Signature=8c72852d0103fc0bbb673cdea1d1585b6e07d47c217520b5ff9fec456386161b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVSAYDGX%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7rTOtD5Lt7mgQMtRqu%2FURDHuygJtYK0Rw2Pn2WPjYeAiEAy4%2BXYuA9tCt3xnplh6LBeQuqa9xUTLxqzXeNguGy0BQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvtf0iYKIf01gtwXSrcAynP69bQrRhu2zrsMscFV7tMO8Y4KBYkYVe3ti9m3SQwCpcBAZ88ASalVnzlXVzEIzw4H0Y74L1l37zlBFPC3f63aEJjezH%2Bu3rgaPKyMJB6ex%2FAaGKa32s9JJ3Pb15n18rOFF2cPcgyKCmrRtVBmDGym4wn9g89UDCDS5zMpFnsC%2FLm816XlM2g1kiyOZxTpNSocvtk%2FIqw0tGrpC%2Fnw4GFFZoHjo8dxYgicdhxxp30LgtnoiI%2FSD0pnuzqzKcc5PMjPL2JkdKZTiBYxuWjvYLT%2FkSPrZ%2FvdVAbl8pjmBAMn7w%2FwMxNFESKCtBEqi%2BmTI32ATsrgnvcEjqYYOvgf8uFohZdk1gVl6CDcx3YIsYIv2gbuykyrkMTgrycPPao8hzCEjpqdOTrMXWTH0pnWAG97NyieYwo3UgSCm0ik4YkCPEUNFG2h2A84sP5PH5uhMVC%2BLqg915KQjHVwUNubixOwe3Yxw%2FsQ%2BouGqDtSvNlphRJUhmGQAJrwcI3GiEfYhwqjqj9mimwl9KMJImAIKHy1IcfpEcpfurgFcgvCZOWhiBut%2FgG%2BbN92H8uKe7cx0vv9JANi1Udb3sjtRP%2F%2B0Uc95VEzDOTQvklVmoUlwMyxQ4NY2JfIP12qUCWMKTPzMoGOqUBoiIVuCSEaFxg2hlDjwMdodJgtz5O4R6lThorAatc3rHgltmGlYxqfrpqYL24k11YtuU048xJaNyglx4TjriMZiBRzMU09FCrMYeXB57bE%2F0mdBcMY5MwDOWba0lp6LFFfbOb7KTo43QageZ5PR8CpR3Jkx%2FX7MSlvwqGRjg3R1eZixPvmkOFvRRQ1rwx91OMDoA26myXB0n6ozmeAjkW3cZgSxxt&X-Amz-Signature=35d4d22cd5da3d59a6b4bcb577fe87a6731083c75e453a8ba11f43efe5a5c562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVSAYDGX%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7rTOtD5Lt7mgQMtRqu%2FURDHuygJtYK0Rw2Pn2WPjYeAiEAy4%2BXYuA9tCt3xnplh6LBeQuqa9xUTLxqzXeNguGy0BQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvtf0iYKIf01gtwXSrcAynP69bQrRhu2zrsMscFV7tMO8Y4KBYkYVe3ti9m3SQwCpcBAZ88ASalVnzlXVzEIzw4H0Y74L1l37zlBFPC3f63aEJjezH%2Bu3rgaPKyMJB6ex%2FAaGKa32s9JJ3Pb15n18rOFF2cPcgyKCmrRtVBmDGym4wn9g89UDCDS5zMpFnsC%2FLm816XlM2g1kiyOZxTpNSocvtk%2FIqw0tGrpC%2Fnw4GFFZoHjo8dxYgicdhxxp30LgtnoiI%2FSD0pnuzqzKcc5PMjPL2JkdKZTiBYxuWjvYLT%2FkSPrZ%2FvdVAbl8pjmBAMn7w%2FwMxNFESKCtBEqi%2BmTI32ATsrgnvcEjqYYOvgf8uFohZdk1gVl6CDcx3YIsYIv2gbuykyrkMTgrycPPao8hzCEjpqdOTrMXWTH0pnWAG97NyieYwo3UgSCm0ik4YkCPEUNFG2h2A84sP5PH5uhMVC%2BLqg915KQjHVwUNubixOwe3Yxw%2FsQ%2BouGqDtSvNlphRJUhmGQAJrwcI3GiEfYhwqjqj9mimwl9KMJImAIKHy1IcfpEcpfurgFcgvCZOWhiBut%2FgG%2BbN92H8uKe7cx0vv9JANi1Udb3sjtRP%2F%2B0Uc95VEzDOTQvklVmoUlwMyxQ4NY2JfIP12qUCWMKTPzMoGOqUBoiIVuCSEaFxg2hlDjwMdodJgtz5O4R6lThorAatc3rHgltmGlYxqfrpqYL24k11YtuU048xJaNyglx4TjriMZiBRzMU09FCrMYeXB57bE%2F0mdBcMY5MwDOWba0lp6LFFfbOb7KTo43QageZ5PR8CpR3Jkx%2FX7MSlvwqGRjg3R1eZixPvmkOFvRRQ1rwx91OMDoA26myXB0n6ozmeAjkW3cZgSxxt&X-Amz-Signature=4e684721daedb8c3498cab77b84b775edc74acce6b05aa923f407fff1b7b4f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIHZQY63%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGJjwA65jnc%2FrleDecc7gKZEM4Bm%2FXwolMFhhDKMAWMAiAnYZVHSG1xad5JLRze82pSgN1nEEZ%2FV6PnhIBBVBY%2BzCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTJpjP7T9ILov%2BZMUKtwDRZcXm1i3dOqPBn4p6EKzu02mgKdilBLhXZJSEhcaNyah%2BpNxOvXzSEa1yHhrB00MhoVWKWAiJeNelLnmHF5K%2BpA9WY2nsa5L%2FYPzVu%2FWfD2FgA9PHQCLCzeLZ6G5SGaL%2BjjVPY6jN2HZi3A4tAWv2iDCKP%2BAvHcV330R4j%2FEKh8soP%2Fsic7BpGoVNlyH2x4P5yFrTp9e1Vx1iAyChi5pmTyMYI5hETZesF06cgI5D2tVJTrLTJ1CXm4xI8q5z%2Fug7jKd6Kf34c8TpD%2BrrS%2FciPPokIU0HBSNtSC6yrIJ0ecMOvkWfLEEhN%2F4CaR%2BVqBi84p3KvpSFe7KNKPRU5GE%2BX05QQd31ehan7bZzRUfsbL8LyZ%2FsPJw4nPGnvPS8J6Ybyyvf8CEpM1YbBNMJKK9ulIeHFUq4J0F6VYkgENmGmepNlq9ofGVUK%2Be6RUaXE2cOIxGwd%2FrKrHXUSo6KAICpNuHVeHSF3p2P5i9S%2B3LY%2BnLRZNd75dQCre5SsFDfj0yNTHc4i7xTTMNWdfWS7IH6fWdMnEFRfu3yPw9Bngr3LwiH02IESf1uaDnUv0S88GiyCaTpKpzcfsTlcrRO6GqV2AcY%2FEckgpQgJOXY%2F8KMgjaV%2FSTZTBJePZUzTUw9dvMygY6pgE7ZWZ4LGE9m8OwuMMTDveBfbm5i3zavNMGlf%2Bnm991t26IlOfokBuiDDEPR%2F%2BY%2BfyHbCu0EDFfABgGcxQyZMPGb8EQcECPQ5uYeFvL0lNMoHsFiuni5d%2FLttuS4K7prJ7Rc69ZtnYVDnpxwBpOYsPaBpAr9P8iGRllVEIw1KWzirQhbvOY4vqC4VcycTy9UGIsUQWnTqKYY4xTuhIzL1MjXL1OWq6h&X-Amz-Signature=70d33098c0731f84b5db4ac59f637a4f060366a6bcb692c57d52f34d1f6295af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIHZQY63%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGJjwA65jnc%2FrleDecc7gKZEM4Bm%2FXwolMFhhDKMAWMAiAnYZVHSG1xad5JLRze82pSgN1nEEZ%2FV6PnhIBBVBY%2BzCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTJpjP7T9ILov%2BZMUKtwDRZcXm1i3dOqPBn4p6EKzu02mgKdilBLhXZJSEhcaNyah%2BpNxOvXzSEa1yHhrB00MhoVWKWAiJeNelLnmHF5K%2BpA9WY2nsa5L%2FYPzVu%2FWfD2FgA9PHQCLCzeLZ6G5SGaL%2BjjVPY6jN2HZi3A4tAWv2iDCKP%2BAvHcV330R4j%2FEKh8soP%2Fsic7BpGoVNlyH2x4P5yFrTp9e1Vx1iAyChi5pmTyMYI5hETZesF06cgI5D2tVJTrLTJ1CXm4xI8q5z%2Fug7jKd6Kf34c8TpD%2BrrS%2FciPPokIU0HBSNtSC6yrIJ0ecMOvkWfLEEhN%2F4CaR%2BVqBi84p3KvpSFe7KNKPRU5GE%2BX05QQd31ehan7bZzRUfsbL8LyZ%2FsPJw4nPGnvPS8J6Ybyyvf8CEpM1YbBNMJKK9ulIeHFUq4J0F6VYkgENmGmepNlq9ofGVUK%2Be6RUaXE2cOIxGwd%2FrKrHXUSo6KAICpNuHVeHSF3p2P5i9S%2B3LY%2BnLRZNd75dQCre5SsFDfj0yNTHc4i7xTTMNWdfWS7IH6fWdMnEFRfu3yPw9Bngr3LwiH02IESf1uaDnUv0S88GiyCaTpKpzcfsTlcrRO6GqV2AcY%2FEckgpQgJOXY%2F8KMgjaV%2FSTZTBJePZUzTUw9dvMygY6pgE7ZWZ4LGE9m8OwuMMTDveBfbm5i3zavNMGlf%2Bnm991t26IlOfokBuiDDEPR%2F%2BY%2BfyHbCu0EDFfABgGcxQyZMPGb8EQcECPQ5uYeFvL0lNMoHsFiuni5d%2FLttuS4K7prJ7Rc69ZtnYVDnpxwBpOYsPaBpAr9P8iGRllVEIw1KWzirQhbvOY4vqC4VcycTy9UGIsUQWnTqKYY4xTuhIzL1MjXL1OWq6h&X-Amz-Signature=049645e7072378ab9e5a83334f4e2467f2185e2c8e32d2dcc9b2c552de81cbf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMIIHJUM%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChW%2FSlHyAjM98AiITyhcrVdZVnCcWERT%2FZwwFUEwLTKgIgSDNYR3Ur4f9SQdJCqGA3jIxz3BWXoEpGP6mkjhlOy8YqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKK0oW3oyNzBD3QQ0SrcA1XnNK1QToJcOt2GgoJSPmhO4nIauaK%2B2PQt0hyVFjczsFm3zj3xJTqHuicoOWVCiXqGjx1ii%2B9z4S%2B9YK2MotiP4llOyqc3iNWreDasksk36lA%2BylVDKU9xQhCQNJfCgLmTVMOYcp4odZjVF0jHCImrGRo%2Fsy3qIpknhsSsDHg3ZmXhNYmUD6L9rBwZWYLuXSH38yK4KmIYUY5xSMDhQuzUM3XIPUZbtvMAc9fxUn1uD8npGVchKmEI3PXhGLa3QsujkVSQKo9eowlLKrakyVVN7dsTJJWMcPxpG9aEkrVfjhMiGK6uz8uIMwM7Pif1DcisHIxpIvWYuA7azwpdLRawfo9kjOdo6XmcdFjbTRK%2BGBgbcyIE9J85uZwERYiidTIlhzle5wbWmKKLC9zK0xAPFYxNwu7tYDkWY%2FuApwf2YmHTX%2FBHBfBoqiaU7R3gnm8bYOMUTjwORuwipXCGoKmUzSuZg%2B1N3KaOnoWpallikWuXX3UD5sOPfsSA5xJQBGxSLUaDn7bZdxSqFB%2B26hMcCbdQysSte6KoDwgoTMkrIy4XZTnqCgEt8yDD2e4bphUtFFTn1WhXMnhNJIx8iOwMx94TUmbeIsHNYtlWTWEcrmCIr301DFxfAVlcMLS8y8oGOqUBq1FSoxynshQQv7lPsUjkz%2FZ25rpI5xJLdExOj4Ac%2Fh6jzAQMI1nPpVp6SNOLeHV9HL7K3UbPhZuxmnvx818P939x8p7Wr5PEFkgGzi5ZGh1anXE8s8kWpA67LPENoCaOBvEY9dazPG0XP5bpfLDqpfKjdOngllEGJ639b19bVkiZwQY7yEdk2kDgU7F0C9KmxnHHs7L7uAQPEtenSCBHLmzABh6k&X-Amz-Signature=25ea76db1c79d81c9389549944703723494135a045c96256bdaa0e627d3f3bb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

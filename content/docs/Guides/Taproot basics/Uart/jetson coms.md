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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTD3BB6X%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAdkxY%2Fd6iiPV5YFBSQye6HigmiAr%2B6THvxuNeEnJn8BAiAGKd%2Fko2LvPtmvodad%2B16fLa8%2FeWJrZVgMJjDQmLI9fyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMjjkkA%2FptfaMwIlkUKtwDGB4033yG1ECXb8iXC5E%2BQgLwfyeox7jrV99%2FMYPNU3%2F2fOzDOWu1%2FXbO9OWdqEG71Sei6XDZg7FqJXijHoCPhoytKuYkjlFFwiGPAkhB3yJA49gEmfqGyzxGyqCW%2FoQ0QOIMuVlYYBRR6aKAq54ufovTIqcOHE89A8yHtN%2BEQud8zYZ%2BYF4%2B6SwXuiAdhE4Ced5b4%2B%2Fn4nDkbVRn8LTdfB4LdZmV%2BNwFnJNu2s7nX%2FfQCWh6AuxkCgsxhGcpTrj1tEtXMI7xV4y0shf3ImQPuUTBzHBTjo0tOJ2bKQJtJxxtoFBKxINpbeFkU76Hy%2FGskq4oJsZQvnHzeBeDy1nLkqxWmu6KqN2qixbI%2BTS2cmDqviQXuiX5vV2bjvq5yxT1Xhbp960gc%2FXEpm%2BYzzrFMCAz0wBaMJmK2hOxlpMX4WovyveXP95HAIIvMtcFmpk5nfy3axaDiyGD39ocvyY2qvTG9Sz%2F%2B0nK3RcGlI0WyQIEJXY042DKcT5PGTVelOz4YMXfBI94K4UnBneffsCOoG%2BNyorOxIVV6fo%2FJw69nbr9R7Wk9784%2FLdgyw6xqGVPtxB9UYOiBhUkR4tx%2Fqj5N65UonQnDN3tOzu%2B7Zbapux3Xmes0WsaVrjtfm8w%2BsjVzwY6pgFfhA2%2B%2BQzH8%2BBtqGWPi6wV2E%2B3ZRDW%2FDq6r3tkbzYr78ahtb4NQLniq%2B2TX83qYAuuuS5b8bQi1KwxtDsA88Ws0Qgg0aPZA%2FXpqSh0AQwruNf9xa5pRlC10etFKbaUxj6vio5Z2tSYciUKP9%2BPejPyvq0ZiPaVoIOCGOY9fPjN9Uiil1wsA6KLlCy%2FcTm%2F%2FWgTXip%2Fj2MwrPqMvF1DFK9BIHH9rWDz&X-Amz-Signature=b3ba415ff1a97b480df2af84cc5498b26c0e1997de2f0c514a85e7cd618a9cbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626MGUTVB%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDNHkXi2avI9DMMrZaHMIovu9v1S9AJBtO0SXc98Vg6NAIgDnpsROu1rfg%2FDNYw8VGWiqml1DMU3qbzUXq%2B85dBBj8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDG3bLdLYW9b4BnB4GCrcAxLxvsiDI1Lfc5Pz%2BkIxOGJr8R%2FFf5pqRNfQmBy33GZl8dK%2BniIcMxsjYDvCN%2F7LaAZO%2Bp3qtAcexHUm5EHRxQ%2BHFYUNYomv%2FyaQgJcKOuFnYfjE5joDtWtIs3DJYIu%2BhAeYzAYAzLHesn7uRtbCJWH7m1wWOFndVqUvE0E7FZ54LzQHt6RKX1Ln21pUtmePaSi4NVV9wnZJuTpNPsJWvEBKh%2BYqC3k5Gw4PzF25XEz%2Blw2%2FKFZNDFdD%2F8cd5B91B%2FofspdVCqkIAm6b96%2FsWCmANALXQBF1wkYFXlaww1DHsK9X%2B7rpEXZspkLpR9xrZ5FVIHL5g8C%2BdWkIP%2FNNi%2BTI6F7Z8fWOJFAdLtOQd4RbgMv%2FXH5KiPuE4uY%2F0WyL2sajwdm7nr%2BqngkQSzoPr%2BVd2kXlDWSBCijsVz10jIVmwrzR2bP207CYbmtP195OAV1F3%2Bz2nu8P0QMX7yfCx1qyeIkcMBpPZKw63RntK5Gg1bLFS78l8eO1JMHZ%2BOhcHvKP0AUeV%2F%2Bls0RXyL2LpYup9oOK10ERxmHXZFLnxalrTAiDdW6h%2BYtX6CvO%2BSr8Jaugr%2BVfkJv2we9jOerajc%2FWPLuwPexjYKFw8rj5UzY0%2BkPzfcwfHNm2FbD%2FMNDJ1c8GOqUBXFJbYVTxoIXfMjt%2F8fwmv7xXqUeECuNIOBAqrCBQ%2FEX7LFUq%2FLkVh%2B9534BCoqZWwVrwUUCtMkiufuSa36sHaP%2BgS98fa11nbgPunDPO1VT04R33BReyac6IKPmvCrCdMgzr2yw6%2BH9F4K7S9kCfY9TPBf7xcgKO6sR9%2FuFpN54hOjoOfs9oS6HwS6eUm8QZ5VSa6q056366TdKkApvU7g8o1hbG&X-Amz-Signature=aaf30a0510edb61454f7bc744fbcc6162c938ae3b2fea9db1c7902808ef40439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULAGDVWD%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCAeMFNYZc2blSjAvTBq88NFtOMPPhaGbyM33DnWuea4QIgJEA91FRRwCUMyw%2BlSKbajXOuWj5KhnGHkmYuDCQkuV4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDN4kVbWWRit3%2FusrZircA1sFs4DRf8kV9nl5JAY00JImgIrJSrKGKQA6nLBIKsapq2vbnMITS5RojwHedsqFCT1YAJfw%2FpHKVflNH5EJ8yd9lEGZdxpjPcNMEokaw1IoYg0UysK0E9H2KnmCINxtGfhht09r7h%2F5Qb8Px9%2B4xR6z6fezVi96nVZsKnY2GUQUCboPOVwMsRT4wd%2FT%2FWfIqbLA49Tj%2FjcZiq8ae6NNWXP3vsoGijJPqr5y8Z4W7kmSO%2FuVsGA88rPVN7ewv3MkDlfYm4WFTkQ%2B1007lPOpxUqPMnkdQhL9y2yU7W%2B5fiaShWMvh8vNiwdSDK2yXH3q%2BTVbkI%2B8uS9Y3lHQVaKtWoH%2BbY3Cx3kIsRE0v%2FPqH20%2F2i40Ifd37pxPx4yqExxwjAjxDVdcCOoc5AEdslyadLtOKTau0OHyrYOOfmeWCcgskemdHpY8M1vTDBxWqvD7uEsNFsphz%2FF4lyBX4bgYdDnu%2F6GCgg1XCUt9gy09V5seaviXj9GqEWYKozVPea0uc4ZO2sDHz7ni5JusRmp4HtXXYn0%2BTkTF23RMTX%2FwP2Pc1y2gv4rYsrHRv8baM3YWLFraHxfp8CBcCvX2Ixcafv2CaHb5J9jLe28sBNi1TKnNp%2FJIeRwGJZlI3kyeMK3J1c8GOqUBovSUAygKOsDScbpvjQOE4oqPXpH%2BVHtVhls6sWqXr4gYqTYCI0g975pdyV%2B8jhZExZsXQe9x26QRvEegTFtVJotatVv5qA%2BzXLPhcrqMz%2FjCRPJBgQcsPakbzKNzcYUs7t%2BvEWk2fo83W6xtftS6t9RiQtO%2BT9ptN9IoGh4pieqVV8q57CgcBCC5pY%2BfkkA5SP6%2FpbDzq22VBRjDD8vIRtNSZf4G&X-Amz-Signature=eab469e7b1c045f69186aa4124fffdec6c4045a19aaf129410bba0d4d0fa684e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULAGDVWD%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCAeMFNYZc2blSjAvTBq88NFtOMPPhaGbyM33DnWuea4QIgJEA91FRRwCUMyw%2BlSKbajXOuWj5KhnGHkmYuDCQkuV4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDN4kVbWWRit3%2FusrZircA1sFs4DRf8kV9nl5JAY00JImgIrJSrKGKQA6nLBIKsapq2vbnMITS5RojwHedsqFCT1YAJfw%2FpHKVflNH5EJ8yd9lEGZdxpjPcNMEokaw1IoYg0UysK0E9H2KnmCINxtGfhht09r7h%2F5Qb8Px9%2B4xR6z6fezVi96nVZsKnY2GUQUCboPOVwMsRT4wd%2FT%2FWfIqbLA49Tj%2FjcZiq8ae6NNWXP3vsoGijJPqr5y8Z4W7kmSO%2FuVsGA88rPVN7ewv3MkDlfYm4WFTkQ%2B1007lPOpxUqPMnkdQhL9y2yU7W%2B5fiaShWMvh8vNiwdSDK2yXH3q%2BTVbkI%2B8uS9Y3lHQVaKtWoH%2BbY3Cx3kIsRE0v%2FPqH20%2F2i40Ifd37pxPx4yqExxwjAjxDVdcCOoc5AEdslyadLtOKTau0OHyrYOOfmeWCcgskemdHpY8M1vTDBxWqvD7uEsNFsphz%2FF4lyBX4bgYdDnu%2F6GCgg1XCUt9gy09V5seaviXj9GqEWYKozVPea0uc4ZO2sDHz7ni5JusRmp4HtXXYn0%2BTkTF23RMTX%2FwP2Pc1y2gv4rYsrHRv8baM3YWLFraHxfp8CBcCvX2Ixcafv2CaHb5J9jLe28sBNi1TKnNp%2FJIeRwGJZlI3kyeMK3J1c8GOqUBovSUAygKOsDScbpvjQOE4oqPXpH%2BVHtVhls6sWqXr4gYqTYCI0g975pdyV%2B8jhZExZsXQe9x26QRvEegTFtVJotatVv5qA%2BzXLPhcrqMz%2FjCRPJBgQcsPakbzKNzcYUs7t%2BvEWk2fo83W6xtftS6t9RiQtO%2BT9ptN9IoGh4pieqVV8q57CgcBCC5pY%2BfkkA5SP6%2FpbDzq22VBRjDD8vIRtNSZf4G&X-Amz-Signature=2d01b5575f17b6d98000ca56e5fb8a6e1e86a0304152a4f2c8a2b97df94716b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626MGUTVB%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDNHkXi2avI9DMMrZaHMIovu9v1S9AJBtO0SXc98Vg6NAIgDnpsROu1rfg%2FDNYw8VGWiqml1DMU3qbzUXq%2B85dBBj8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDG3bLdLYW9b4BnB4GCrcAxLxvsiDI1Lfc5Pz%2BkIxOGJr8R%2FFf5pqRNfQmBy33GZl8dK%2BniIcMxsjYDvCN%2F7LaAZO%2Bp3qtAcexHUm5EHRxQ%2BHFYUNYomv%2FyaQgJcKOuFnYfjE5joDtWtIs3DJYIu%2BhAeYzAYAzLHesn7uRtbCJWH7m1wWOFndVqUvE0E7FZ54LzQHt6RKX1Ln21pUtmePaSi4NVV9wnZJuTpNPsJWvEBKh%2BYqC3k5Gw4PzF25XEz%2Blw2%2FKFZNDFdD%2F8cd5B91B%2FofspdVCqkIAm6b96%2FsWCmANALXQBF1wkYFXlaww1DHsK9X%2B7rpEXZspkLpR9xrZ5FVIHL5g8C%2BdWkIP%2FNNi%2BTI6F7Z8fWOJFAdLtOQd4RbgMv%2FXH5KiPuE4uY%2F0WyL2sajwdm7nr%2BqngkQSzoPr%2BVd2kXlDWSBCijsVz10jIVmwrzR2bP207CYbmtP195OAV1F3%2Bz2nu8P0QMX7yfCx1qyeIkcMBpPZKw63RntK5Gg1bLFS78l8eO1JMHZ%2BOhcHvKP0AUeV%2F%2Bls0RXyL2LpYup9oOK10ERxmHXZFLnxalrTAiDdW6h%2BYtX6CvO%2BSr8Jaugr%2BVfkJv2we9jOerajc%2FWPLuwPexjYKFw8rj5UzY0%2BkPzfcwfHNm2FbD%2FMNDJ1c8GOqUBXFJbYVTxoIXfMjt%2F8fwmv7xXqUeECuNIOBAqrCBQ%2FEX7LFUq%2FLkVh%2B9534BCoqZWwVrwUUCtMkiufuSa36sHaP%2BgS98fa11nbgPunDPO1VT04R33BReyac6IKPmvCrCdMgzr2yw6%2BH9F4K7S9kCfY9TPBf7xcgKO6sR9%2FuFpN54hOjoOfs9oS6HwS6eUm8QZ5VSa6q056366TdKkApvU7g8o1hbG&X-Amz-Signature=ae3970c4ff784f2ef851d5fbb61771b09797ee4a7d8d82b818576e4de47cf887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626MGUTVB%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDNHkXi2avI9DMMrZaHMIovu9v1S9AJBtO0SXc98Vg6NAIgDnpsROu1rfg%2FDNYw8VGWiqml1DMU3qbzUXq%2B85dBBj8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDG3bLdLYW9b4BnB4GCrcAxLxvsiDI1Lfc5Pz%2BkIxOGJr8R%2FFf5pqRNfQmBy33GZl8dK%2BniIcMxsjYDvCN%2F7LaAZO%2Bp3qtAcexHUm5EHRxQ%2BHFYUNYomv%2FyaQgJcKOuFnYfjE5joDtWtIs3DJYIu%2BhAeYzAYAzLHesn7uRtbCJWH7m1wWOFndVqUvE0E7FZ54LzQHt6RKX1Ln21pUtmePaSi4NVV9wnZJuTpNPsJWvEBKh%2BYqC3k5Gw4PzF25XEz%2Blw2%2FKFZNDFdD%2F8cd5B91B%2FofspdVCqkIAm6b96%2FsWCmANALXQBF1wkYFXlaww1DHsK9X%2B7rpEXZspkLpR9xrZ5FVIHL5g8C%2BdWkIP%2FNNi%2BTI6F7Z8fWOJFAdLtOQd4RbgMv%2FXH5KiPuE4uY%2F0WyL2sajwdm7nr%2BqngkQSzoPr%2BVd2kXlDWSBCijsVz10jIVmwrzR2bP207CYbmtP195OAV1F3%2Bz2nu8P0QMX7yfCx1qyeIkcMBpPZKw63RntK5Gg1bLFS78l8eO1JMHZ%2BOhcHvKP0AUeV%2F%2Bls0RXyL2LpYup9oOK10ERxmHXZFLnxalrTAiDdW6h%2BYtX6CvO%2BSr8Jaugr%2BVfkJv2we9jOerajc%2FWPLuwPexjYKFw8rj5UzY0%2BkPzfcwfHNm2FbD%2FMNDJ1c8GOqUBXFJbYVTxoIXfMjt%2F8fwmv7xXqUeECuNIOBAqrCBQ%2FEX7LFUq%2FLkVh%2B9534BCoqZWwVrwUUCtMkiufuSa36sHaP%2BgS98fa11nbgPunDPO1VT04R33BReyac6IKPmvCrCdMgzr2yw6%2BH9F4K7S9kCfY9TPBf7xcgKO6sR9%2FuFpN54hOjoOfs9oS6HwS6eUm8QZ5VSa6q056366TdKkApvU7g8o1hbG&X-Amz-Signature=f2dac7636f25053e35b7f0a34d5bc1a4b95a6a3e53bf219f350579be19e591c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632JA6JLP%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDmgcljg5qBvSxTiSm1GDYmPlFpLGKhbQZvvWfnnT0NKwIhAKN7hc0nyPuMqoOz5ULf4aRGxFOI%2FWBAcf4EaFCV1HwrKv8DCDMQABoMNjM3NDIzMTgzODA1Igy6SDoKR4WCf7RFT%2BMq3AMY%2BKtqoBa0XjdcK3dV0M8rVLnOtrPLxFmgMPzsIOJHogOSeF7j%2BIOB4T87xay5zzA6%2FwDOearVqulnNU9cFMAhji%2BoeQENppylCkhuZUDmJiVL37HUqFXaDSZ45XSEdOj4Qg5YGplsVvNdM29%2FxE%2FUOYx6gE6V8DD%2FLtBeTgPZP9a9rEeqjOqXqIRKMr8JQ1lNizfEENOm1Xu5VJd3dwZOey5Kl6Bn0EPv54iSq%2By%2F18FzUrex7iA4omZgyEpJUh6awlg4ayw2Y6C2EPi%2B9evb9cD16vy2IZeOEGQxa%2BM77QUjnMYB3D5AqhXEV9W6axKL7vqeifFvpqQqzWo6C8nyL3hnmmv4e4cl4WbPAVFoyVXCXsQFob6yQ3l7794TLiLgWI7c2T%2F%2BNu04bVPHXQOONAFy0F%2BFD48%2BLnxSbW12gHHOJSuuo%2BlNgSaFDvx5vzOar9BYu2FHjuShOuMe6Mfxel9EWGoe4pzo1%2F1bzC25khR51nZ9iuPGkkZ5Zf%2FU52RoebHP9kgM%2FuEVDuyoHvyB2BqbW7DeuIwHpWRPsOhgei4pEHiVz65lCakk%2BjFrXPR9BgS5i6MyKtFjjSpE3D50IrQSnVQDx5GVJ5rSKgbXmvuv6n6csES1Xr82fDDYqNXPBjqkAe0CqnXdZT1jXzRJmB3ppFDyFcNVjYkCcX%2FIkcavINTVIYveO7as3nKtEEh65yRUKBZ%2BbzpsYGRxihFGjwZ1gt%2BhOb95yHH7IJi060%2Ff93ukWIe1bxJvpIaAL%2FwuRIk8EBfdAJaz1PWnaTZjPaz26mmMLxfUmUmIsTVtU4m7j20NaEofEQLAwbZa7vkkYpDBFakY8NCBHN%2BEXgIxenMrURXBmnS6&X-Amz-Signature=797c8350b6daf9aa20cb1e349e914349c28ff999380cc08c0898b2a4c625dd7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

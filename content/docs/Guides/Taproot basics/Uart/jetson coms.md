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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5CNJJEU%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxZNXC%2BT8jebpRcsQdokxs76iwS5jdgAIxKLk5d59UlQIhALmdsRmcxCmpXL7chZmXQEWcEgc%2Bq%2Bb06CSACK2IfsSWKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuMUpYPbrYZFOQGiEq3AOo1i0F6ewWvE50Bq52dxIf5XHbXPQcFspST3ZLDkvCttdc1Yg1321GKCIOE%2FgywEpB65XrRTD10jFO3ZpXyLxma9dXkSc8UralR7J5dRdD2S6yT%2FNoieGHC5NybTfJMZrWSQb9NkQjAI7bvJS6CuOOJAPLZofzgBzeyLH2qH%2Bzw58%2Bd5%2Bse%2FMxDXpw3Jhco1zhYlTKkFKl%2BC6vqciUKyPZN16vVPfvdZaA%2BVgKEOLGOl%2BnS4vzTd040Yy4atLvVbsFXjciKzanGt3BWNREbJpxmpQHwmn47xqeFbSmD45%2Bf4zIq%2B93RVlRALbYMmoAOiiK6NMzTGkRiMvE%2FekT3407Elm7ArzYzWwMygKNqKYK4%2Bxys8%2BWIvMhmpLupz75a2BZWn8vNKCte8JZdXmEgGjVPiX%2ByiMMVKXGl18ActbgaOqhjjGd9%2FQjvxwTOr1j21g4h6df%2FWPBPprz79bkptDrfzXgsn08VVXzYWV2RaePEsyOfMtiIH2PpORrXF1cXCrvL56776RLiHt%2FCiwBSMyJMyOxyQia1nn5yzAKwTDWZ%2B6Tg1%2Fnhb%2BSgXuxSxbLHCOInvLbxiYxk7m9%2BYvRudfihh2LPIJ%2BSBDemyDFgyd0aZ%2BVgeQ6pLV3y8xVyjDqt7XTBjqkAY2AhAxY3v981FgXkIlEr8CGm2BbFRNbjKarEoIS%2BLXeIRfKtX7rc2MUocwc47U8add09avY3PNhBy5doVYWtcsMvXxeF5kEb1zEZ3FHSA29uDHgVVHJPaNZapMZV1tReffADQdLUdSOnHFhBPc7gS2S4ts2pTcF8wMBjcQhmqh1lhC8WG7VO0rxFX4Q3%2FYcUoOrZiLNZXG8fAaVonekOm3ZnjhH&X-Amz-Signature=088faa88e0b7c84ddc088587b8433139de5f02aeef593cb85612924d45896e32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VS7H7H%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHT9aYrfVcMEGYfOIsAj5wPylaYdePRxwCNBa%2BEAOLajAiEAydTc2vLtFXfNXGuniVK%2BaddOZsj3EAoJY0sCPH1%2BBwwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhN%2F4Q6LmgX%2Flm1%2FircA%2BBqLN%2BqQ0WLg0zBA4JYAiquKCFtNA0Zo7Dm4eX5NwutSvM1vgMvQiYCXqJaDOjehuHAfn5cWb0B%2FxBrjd4bv71nPt%2BMD9ZUZ3TVHjQmPRhnHDgQZPeaA4XtrZ9UQlALqPvk7o2lL8Iikt%2FnRI0Z%2BPz1I3auCIl2%2BTjakZaGjA4DDnF3VsvaobwUMK1nPFEYwLh0%2FJkchgSKll%2FLoDB%2BGsJ%2F%2Fr7JGvvHScFxzOoh4VVM7UpM50ti48sNXu06JupcsIKB01T%2Bw1LheYbNULjazHAuuKZpEVoppD3FmibxOyl%2FUQNJzOsBVJXzbQuQHytKUwj2iBX9lCKEABTJZ5%2F6PmqeHGWpclRTqkOO5wjba8I6rIa43gP2QBlzwooGE57Bfw%2BBmzQIYBpIYfgTSQVkpMHl%2BSs2i6CllMTWrxjvyiUcZzVAFCckHf%2FMUGguTiJYf%2B8W00yzYRRkrYhgEJnkMUJXxci7IsLr%2FMt2NCuJQvgQH4030lw1ZX%2FeNYjOFfTCf6PBwjsFddooaXFawGT5Qr666LhVhqtSzpKpIP41fxG9qLFlhzQ89XjGS6tl91DFr3tupdHvuxcw2rV18eVxNeoJAE%2FkpHvwDSTMgUqV1URZbgnbXc0FnwenLOMYMO22tdMGOqUBfpsz8Ol9ob4kajfuTAB47phOsYPd9P%2BlD2oqjPvF4XWz9XgAk0%2BKTqfDrcgtkXLSCzgiKzOyKJHQjNFEdbOwK3VCw622wGQonHiU%2FPjRoQPF97WBsh4QlvG8qtlJgmP51z8Y2RMbxh%2F5Uf1sSYRYEc6b3ySxQlzciJheRvL0Y0wfTz0%2FLo2l3rxYdOCCpCTKq7l6kenF0RgjgJmqgGkpp9CeH1fl&X-Amz-Signature=4364faacced34b567757f38298a110fcb8723591e15ffa91874d2d34a7376bc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZGIMSVU%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwRkyLIpx4Y2EKxaJdzQ4QwDhpWd3zeNdK9aEwy9QEZAIgI8Islu7IYm7qyT7Pt4xasPaWTSt%2FbcBppifSgHvytBIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDRiqYX%2FuLihZkbgyrcA2QSIAJXa6JjnqhjebqwWO3X%2BJ6RVHTmDJ0OfENfP2HvK9iSiAPC0P4EbJOFVluCi2L5%2BxUBeoICLbnFTrGUti3RfwZCY0beyD5xeEvholYPIxSlyRZsZrdAAHyQcxCYAZ8Vb%2FffwvYipyxjiD%2BS85dGVB5PuO407GwwN6zVZC%2F%2BnLvqGbYRZpHUbYvFZ8DwFikeTHJLqIVocNsLPKkeNv3d3UQFPn0z%2B2g9v35bl9G5Gb6F%2BjChv7%2BgoW8851yqufQ0Fh05nVkfjQmBAAi1raUWyx8nHmFzehPi0wMQukjpoKAxXmKuv3kvH%2FibmiJLxKEV0nsN6%2FajFIThthgMT4dwzFCMLO2X90ZP5rO%2BmJxPVXE0BI5UOtmpxb9WCDldRVOSMfohfTxsdJWDhSlQMlEw5wWGH0c3XTXzAIkd7KR4HSdZfC%2FQb2UhPxpfN4NsXnCBM05pt3%2Fze9fxYZxmlVo8k24JzuMEWm2mvEjgjOxdUFAa27tbUOMEAUhJslHSo%2B21Rx03ArPicJHJm%2BdsfnWKtyUJprD%2FzLQ9yq5QxfQImP3MKaCvmuzm5ytX7%2FlDxw42fa3NXNGm8GxQ7INzSsg9xQxWxBb3t00X5AgoLgCFx4JUsdfmIDXSAduXMLy2tdMGOqUBlF2DzxM4m%2FFH1no5c05hdFW8QNz3mahaaIwxsO1d3m9dpPiGNbQE%2FpAZwtBS2TKQs6vgpH1nvi0ww%2FMdCQNc8gGc2ybVdDyA7kRnrRTqNjo9SfrFW58pGY%2FY5LuxrrCVx71mqMv5wKtqsDqkfJeExZsf0MYsOrRgyh%2BH6XBdpK9t9dnKIgPoeI0vO7kDVnqU4SjZLREOo3Gc2jMX6nQYXGA6WXq7&X-Amz-Signature=d78b8f2f7bdc38be7062f29b493da133bfdd92285512b2873140175141e7ca5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZGIMSVU%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwRkyLIpx4Y2EKxaJdzQ4QwDhpWd3zeNdK9aEwy9QEZAIgI8Islu7IYm7qyT7Pt4xasPaWTSt%2FbcBppifSgHvytBIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDRiqYX%2FuLihZkbgyrcA2QSIAJXa6JjnqhjebqwWO3X%2BJ6RVHTmDJ0OfENfP2HvK9iSiAPC0P4EbJOFVluCi2L5%2BxUBeoICLbnFTrGUti3RfwZCY0beyD5xeEvholYPIxSlyRZsZrdAAHyQcxCYAZ8Vb%2FffwvYipyxjiD%2BS85dGVB5PuO407GwwN6zVZC%2F%2BnLvqGbYRZpHUbYvFZ8DwFikeTHJLqIVocNsLPKkeNv3d3UQFPn0z%2B2g9v35bl9G5Gb6F%2BjChv7%2BgoW8851yqufQ0Fh05nVkfjQmBAAi1raUWyx8nHmFzehPi0wMQukjpoKAxXmKuv3kvH%2FibmiJLxKEV0nsN6%2FajFIThthgMT4dwzFCMLO2X90ZP5rO%2BmJxPVXE0BI5UOtmpxb9WCDldRVOSMfohfTxsdJWDhSlQMlEw5wWGH0c3XTXzAIkd7KR4HSdZfC%2FQb2UhPxpfN4NsXnCBM05pt3%2Fze9fxYZxmlVo8k24JzuMEWm2mvEjgjOxdUFAa27tbUOMEAUhJslHSo%2B21Rx03ArPicJHJm%2BdsfnWKtyUJprD%2FzLQ9yq5QxfQImP3MKaCvmuzm5ytX7%2FlDxw42fa3NXNGm8GxQ7INzSsg9xQxWxBb3t00X5AgoLgCFx4JUsdfmIDXSAduXMLy2tdMGOqUBlF2DzxM4m%2FFH1no5c05hdFW8QNz3mahaaIwxsO1d3m9dpPiGNbQE%2FpAZwtBS2TKQs6vgpH1nvi0ww%2FMdCQNc8gGc2ybVdDyA7kRnrRTqNjo9SfrFW58pGY%2FY5LuxrrCVx71mqMv5wKtqsDqkfJeExZsf0MYsOrRgyh%2BH6XBdpK9t9dnKIgPoeI0vO7kDVnqU4SjZLREOo3Gc2jMX6nQYXGA6WXq7&X-Amz-Signature=be0a5d41d4f027214294a53383e4cb6560172a99754fb1b00f11ce90441d29b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VS7H7H%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHT9aYrfVcMEGYfOIsAj5wPylaYdePRxwCNBa%2BEAOLajAiEAydTc2vLtFXfNXGuniVK%2BaddOZsj3EAoJY0sCPH1%2BBwwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhN%2F4Q6LmgX%2Flm1%2FircA%2BBqLN%2BqQ0WLg0zBA4JYAiquKCFtNA0Zo7Dm4eX5NwutSvM1vgMvQiYCXqJaDOjehuHAfn5cWb0B%2FxBrjd4bv71nPt%2BMD9ZUZ3TVHjQmPRhnHDgQZPeaA4XtrZ9UQlALqPvk7o2lL8Iikt%2FnRI0Z%2BPz1I3auCIl2%2BTjakZaGjA4DDnF3VsvaobwUMK1nPFEYwLh0%2FJkchgSKll%2FLoDB%2BGsJ%2F%2Fr7JGvvHScFxzOoh4VVM7UpM50ti48sNXu06JupcsIKB01T%2Bw1LheYbNULjazHAuuKZpEVoppD3FmibxOyl%2FUQNJzOsBVJXzbQuQHytKUwj2iBX9lCKEABTJZ5%2F6PmqeHGWpclRTqkOO5wjba8I6rIa43gP2QBlzwooGE57Bfw%2BBmzQIYBpIYfgTSQVkpMHl%2BSs2i6CllMTWrxjvyiUcZzVAFCckHf%2FMUGguTiJYf%2B8W00yzYRRkrYhgEJnkMUJXxci7IsLr%2FMt2NCuJQvgQH4030lw1ZX%2FeNYjOFfTCf6PBwjsFddooaXFawGT5Qr666LhVhqtSzpKpIP41fxG9qLFlhzQ89XjGS6tl91DFr3tupdHvuxcw2rV18eVxNeoJAE%2FkpHvwDSTMgUqV1URZbgnbXc0FnwenLOMYMO22tdMGOqUBfpsz8Ol9ob4kajfuTAB47phOsYPd9P%2BlD2oqjPvF4XWz9XgAk0%2BKTqfDrcgtkXLSCzgiKzOyKJHQjNFEdbOwK3VCw622wGQonHiU%2FPjRoQPF97WBsh4QlvG8qtlJgmP51z8Y2RMbxh%2F5Uf1sSYRYEc6b3ySxQlzciJheRvL0Y0wfTz0%2FLo2l3rxYdOCCpCTKq7l6kenF0RgjgJmqgGkpp9CeH1fl&X-Amz-Signature=3429b024f553f5eeefbba096132f7fe314523ed8a7689fd27030cea0ecca5e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VS7H7H%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHT9aYrfVcMEGYfOIsAj5wPylaYdePRxwCNBa%2BEAOLajAiEAydTc2vLtFXfNXGuniVK%2BaddOZsj3EAoJY0sCPH1%2BBwwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhN%2F4Q6LmgX%2Flm1%2FircA%2BBqLN%2BqQ0WLg0zBA4JYAiquKCFtNA0Zo7Dm4eX5NwutSvM1vgMvQiYCXqJaDOjehuHAfn5cWb0B%2FxBrjd4bv71nPt%2BMD9ZUZ3TVHjQmPRhnHDgQZPeaA4XtrZ9UQlALqPvk7o2lL8Iikt%2FnRI0Z%2BPz1I3auCIl2%2BTjakZaGjA4DDnF3VsvaobwUMK1nPFEYwLh0%2FJkchgSKll%2FLoDB%2BGsJ%2F%2Fr7JGvvHScFxzOoh4VVM7UpM50ti48sNXu06JupcsIKB01T%2Bw1LheYbNULjazHAuuKZpEVoppD3FmibxOyl%2FUQNJzOsBVJXzbQuQHytKUwj2iBX9lCKEABTJZ5%2F6PmqeHGWpclRTqkOO5wjba8I6rIa43gP2QBlzwooGE57Bfw%2BBmzQIYBpIYfgTSQVkpMHl%2BSs2i6CllMTWrxjvyiUcZzVAFCckHf%2FMUGguTiJYf%2B8W00yzYRRkrYhgEJnkMUJXxci7IsLr%2FMt2NCuJQvgQH4030lw1ZX%2FeNYjOFfTCf6PBwjsFddooaXFawGT5Qr666LhVhqtSzpKpIP41fxG9qLFlhzQ89XjGS6tl91DFr3tupdHvuxcw2rV18eVxNeoJAE%2FkpHvwDSTMgUqV1URZbgnbXc0FnwenLOMYMO22tdMGOqUBfpsz8Ol9ob4kajfuTAB47phOsYPd9P%2BlD2oqjPvF4XWz9XgAk0%2BKTqfDrcgtkXLSCzgiKzOyKJHQjNFEdbOwK3VCw622wGQonHiU%2FPjRoQPF97WBsh4QlvG8qtlJgmP51z8Y2RMbxh%2F5Uf1sSYRYEc6b3ySxQlzciJheRvL0Y0wfTz0%2FLo2l3rxYdOCCpCTKq7l6kenF0RgjgJmqgGkpp9CeH1fl&X-Amz-Signature=b386166cf8188140428a4e20015f54cba9a9898c7994e78113c81ee062abff6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUI4H4MV%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRREBJRw5REt4cv6orgyqMc0SfXHp%2BmOp%2B%2F1YuZgUKiQIgawnohOOUKUyhLVkcSR7NK3TsaxKJ4L%2FBZbL0jJ44HUsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJM5%2FVWcTUT%2FX5jaSrcA1NBh9KD97xEYQOBB68tk%2B5gPb4c9Ljd9ej6AYNBS%2BLDP0wzpEEvWb%2B6uAa%2Br6MegBmYbKZPKUoY7sDef27A4dbvBIjrx%2B5VnOD29MJVum6vD9kXX4ZYbcte1TxMujpFQw%2FtvUbrRY%2Fe%2B2jGvl7KEmnmJ6D%2BtdlpKW7Bbr5sBBVB8xHZ4K8ZT%2BdiocVgdznZ4vEFdMgZvwFfjQUo9Aj9PCbp3HFQAPk6PVvsbC1UgZhcwFjbzaNmyZbhRn2hlt%2ByudxY9aFkLHvJiVfPfUybOSIXepvqH%2BmQ2IswKJkZQT6vg4yUqlIJor8bUJZw0zqJdCRO9HecpCwSoVwn43zCF4Hu7i%2F7awlyrmpx8WxVcJjsyPiJb6BPBBZTrzbz2nPba0cmogqYC8BoCrPXTC8qq%2F3Ips81BGhPENZX%2BbELA8LSmTSYi2NAtCx0sIAjreQCfEBnEI5UOTRzRNv7%2By04oB%2BU9OYdNyZYNUhIBjP%2Bj8XCFhIKK5hZ%2BSZTGDINK4vkwDbqASBHlWdvxInH%2FYIcUHvRSK7GFvbL0CmW3g2H2hFRrjtQve5WagmZigPDDF7TiikwAnBoW5wRG4QwTOFLjN5gwGTn6M219wnVt6YfN4Fqh8rbtLuP5rqCdtm8MLG2tdMGOqUBue6QrGKGvB85ts3RmPKmec50dtdseuUinVJOGL4VP23T%2F19IQYfOptfTjkgzEjPLIYqIsQJvX7nKdeS3RG%2BKKg%2BM5Jz5d2rbehbZOgoKGPQZbi5QxBANoU4uzx7OW9z%2BDHXYTNV8aaq7jrgoEk9KHFj5RKw4qlBkpjCxskj5VKYyJWxGgFt1zOZCKl29YX8kYdPTB7q%2BFDEx8ozxG7JMe1DhLh6q&X-Amz-Signature=ea9784edb07a28378b9eba42cd10371a70ff147a3184a31516de53f766d232f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

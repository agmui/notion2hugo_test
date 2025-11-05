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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CN3Z3KS%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCikUEwRqJ4Ibcfz5WaG5Ol4XI0c1jAP4W6AmDu6UDfuQIgWUt%2F8lGTo9Xwx0%2B30CZ7spHELl5D%2FwxRhBnICBCMTQQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDGKOcfhV3HPbFDa%2FSSrcA%2FH2n%2BJ5swMpYe8Vq7NEUIYUUi%2BBawoci0%2FmlIb6BkIGFsFxNxlcSDxHQPu45GoJp%2BKIc2jUmihxs7R6P0RvQIpCnjSsO%2Bttyw%2Ff%2BN9zH3k9nxw4tH5HKEHlHN4zxuoPLOXdV7r26035ZIgIt2Ygz4YsuNQuLsBFOFwyVdQz%2BWloSkywMUKru62Kl5BTYn32XrWszVUUxl%2BfYjd3%2F0KVbvpB4GAryp2anftkOc6vfgrc%2Bjqx4UXaRnoYIila67s7S3h0Sas9a4c2HsraWxZ15lm0eFVwFxszg%2B4epTrY%2FAQ36fvGjOBgCRefROQ0b3Xn4tcoXsNt0sJIbvck1XzltdRzWP%2B49l56ZKb64J7g5gpYOIC97Os6hQDFQeyRLzz678wAvH2RP7tOt1PbFitrUV9PZ1zenz%2B8uM0hm10dRf0TBa1zm33f51saWYXOtoPIA26tSa86ItxpUyJ7rEoPK2L7POX6FqC7X4n52tUHP0Ej2JuSAaeDbIlGYD68O6Eg9nyy%2B1BDpLf%2BPFZmjb9n9WD2QqSMpPZjJ%2BPmnXXqq6mKmp995T7AU%2Fh0tIWf7gxcxQeYQ9K%2FXN4X4XIAp1a30r4IUy%2ByGy9chX%2Bi6eB1Qy3%2FCKPpj5Y4b%2B6%2B0DYzMNfdqcgGOqUBB2pwa2teAL7PYqx%2BoKz38gqNICr2RGoUIAclD2Q9qC1j%2FByCb3RaFjahNxTJgwYggqec6LTMp5U%2BnjWEbd9%2BvJjI%2BTNDvxaz5lAA%2B%2Bthl0x6MT%2BU541m%2BYVoRds2yqfN%2FGd0Thw4k1Z6RSb6RF9LPhVvXrn3SC4uQmF27FYdLnACK0TcEMO5h1RjI7PJgGW%2FhatoWkLmUxTsPcOz%2Fjl71pwlhesL&X-Amz-Signature=faf9b70fa4081e72045a9d9f70613cbd42f380b7986946eb0fe9a9b680c911fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5C5QPX%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1WJC6wYQLIdHiUuyA7DpSC1UwtcdOVx%2Bhw28sGiKXVAiEAyz6Yi8%2BiJQF2ykVPmGlmN20NyDRN6NTl8BIRunayoxwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIlZ53MVEPruaVD6kSrcAz2%2FTALVXwdlENfvwEEMdzg2CWOZMiuNKa7RUJpIXzzFQdHh1egrQ3F3K7orFPlbZXE91178tdGxohLElZUGsIAgS6t3Q2G4U5nw2hSE4vNyxrc5ru7%2FAEv1t3Vhe3%2BFqXu7UrE%2Fswo0kcc9vQj5yv%2B8QW5YH0uUnRKDvxmFeMF0ercA8ETLEO3nVOr7SKZjw7Gzkp064UqIhfke%2FdeANYnyCFS%2FRdi%2BSNUbzPU3x1k4Kn3Wtl%2FQa7aSpl76jis5goNuz1qJLSdDd1i7VT3ZTEnenKKhoMII2HGTZc1yF%2ByEXqLAQmwbzSUQlvPM96EGYPzux73kEgDxIXSgpvuS4rI89HI%2Fv1KC3mV5JcW%2BvV%2FB78MCsdqco56L4r2JVSAocZzAS35wdFeuXWuHIWhBSmcYDvmMdnZVwmn0Zdd5f08uYAbRmcaOr%2F0ly3SfVbXFyNP7qy8yvGW60iDm%2FkzsF6B3bnLgpszY6cpoVzOqaKWUOQ8dLnn11DHAznmf%2Blrh3tle097X9N38YWf0g0anpLm6wxPzXZ6TPUBIK%2BASWC1auW17zxgOwVfApp5lN%2FWsw4PSnIdC4DUJSRi4tkYFv3gHklO55X2u9JFB17bBYKS8YT%2BfJ2N69xp%2BwUo9MNfdqcgGOqUBC3sCJbA0WEV5VqHWl%2BM7GFGJu61u9KAHFcYZrZXoiIogLFrXE7sWWl0PVoS6mwK7ky%2B1bpVCsXogAs68CmYirVkBmiPFZZBz2DDqSqjLMVQeXPbRAR%2FNcVwvr5DVimABsQSpGmHqXb1CGfn5AwULyOH%2BXnGmxb63SmmQ1LqjV9NiQNcDmXFmHqJfRJSHyRXzH%2Bi2tyKF%2BoY5%2BJw%2B8KrK%2FMgR4r5P&X-Amz-Signature=9406b9bd86bfe3965bfe4d71207472ab4edff34f36bbdd25e77ea2a7461f912b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DZO3FW5%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3F5n76pF9rqXGea%2B1I8SKwaY535VG9nFh9YIfqbFNiAiBQ0BrnqcZm2Pn6o3lKmmMBAORnI7lm1yeo%2FrM1ZJ1BQir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMEv5WZShUIFPcFfC1KtwDcpCK5q3q2zJceeijVtlOlb5ckF4tppplBupXqIYnzBVNCqmflZpTuQoGRl5UoMTCq7X7OnBkWMbCELV6BYqg8HmH6UhHL1MwOrQF1qFbC045L4fkXz%2BexoPNXmDHotYeT8ygJs7trPC1%2FpXoKPitht8biHo1Sf7rnduY%2FjZbgvWe1VSBOZduJrGYAsQn9FpxNK7z9HthmiLrOm5R0dhnmC22qDnUtkJgvp%2FJKwB5xK6VC2VWZxx%2BRDpEozGcPQR%2BgqdZlN%2BipUYtX0OYHblM3RsiOk5dW%2BRUPjD2tR0QIVdsp0ySbEKjXdPQkBhMVDqb%2BgXlAcftLhQUoUj0bO4Kjs0iqoC0uzvw67xgAfJ5oXvdR9H0D1vnAjYa%2BDXeKAVrwz%2B7MKCbkpw9IA0wH%2Fy8wEudJHCWCwlC7SxKxmKLfdJXGlnc%2FknJpZCFZrgZ5pbv8dM2Q6qVcHC2gogvyp6DyQocAqA9TQ3sf8PXXheNKWLW9cwx%2BdyNWzrWgVLHHeSvNcykRGov1xbzEStVqVFvNdO7Xqrqe05SWuDrrDMDRljKv5QflpCC640qDKYkMC3eH4Zp3vNVjEIoLINVJGQNBbTX7fOZFzzi1cZuHkrzNStZoxAzvsYfks2N%2FAcwxt2pyAY6pgG%2FxieM3zswkO6qlZftTXzyBJ4gJae7GJyivel6xVVWn9d11jz1HdqjPYDROzdxGTsa2grmeUSRJ9lvw%2BjuiAas0dqX%2BpU8la8J1aUfIWhAo1qO9CVqt6CAO9KpsNQjt4fQIYFTM%2FmNatGknQoC5NuX1YodRmV5QuraWsSLpQh%2BonH8egPjtcZlpY5as2f4UqinHiH6SJkkOiqhITr%2BjPAwbUIy2beA&X-Amz-Signature=b4969c3953087905e4791d081b2a71b52218ce01d246952edd810d0ef87eeb78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DZO3FW5%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3F5n76pF9rqXGea%2B1I8SKwaY535VG9nFh9YIfqbFNiAiBQ0BrnqcZm2Pn6o3lKmmMBAORnI7lm1yeo%2FrM1ZJ1BQir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMEv5WZShUIFPcFfC1KtwDcpCK5q3q2zJceeijVtlOlb5ckF4tppplBupXqIYnzBVNCqmflZpTuQoGRl5UoMTCq7X7OnBkWMbCELV6BYqg8HmH6UhHL1MwOrQF1qFbC045L4fkXz%2BexoPNXmDHotYeT8ygJs7trPC1%2FpXoKPitht8biHo1Sf7rnduY%2FjZbgvWe1VSBOZduJrGYAsQn9FpxNK7z9HthmiLrOm5R0dhnmC22qDnUtkJgvp%2FJKwB5xK6VC2VWZxx%2BRDpEozGcPQR%2BgqdZlN%2BipUYtX0OYHblM3RsiOk5dW%2BRUPjD2tR0QIVdsp0ySbEKjXdPQkBhMVDqb%2BgXlAcftLhQUoUj0bO4Kjs0iqoC0uzvw67xgAfJ5oXvdR9H0D1vnAjYa%2BDXeKAVrwz%2B7MKCbkpw9IA0wH%2Fy8wEudJHCWCwlC7SxKxmKLfdJXGlnc%2FknJpZCFZrgZ5pbv8dM2Q6qVcHC2gogvyp6DyQocAqA9TQ3sf8PXXheNKWLW9cwx%2BdyNWzrWgVLHHeSvNcykRGov1xbzEStVqVFvNdO7Xqrqe05SWuDrrDMDRljKv5QflpCC640qDKYkMC3eH4Zp3vNVjEIoLINVJGQNBbTX7fOZFzzi1cZuHkrzNStZoxAzvsYfks2N%2FAcwxt2pyAY6pgG%2FxieM3zswkO6qlZftTXzyBJ4gJae7GJyivel6xVVWn9d11jz1HdqjPYDROzdxGTsa2grmeUSRJ9lvw%2BjuiAas0dqX%2BpU8la8J1aUfIWhAo1qO9CVqt6CAO9KpsNQjt4fQIYFTM%2FmNatGknQoC5NuX1YodRmV5QuraWsSLpQh%2BonH8egPjtcZlpY5as2f4UqinHiH6SJkkOiqhITr%2BjPAwbUIy2beA&X-Amz-Signature=f981d895d41bb009e54b8dc4a615ae32f4b90ec1c6f31f0cb81b10e8c586addd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5C5QPX%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1WJC6wYQLIdHiUuyA7DpSC1UwtcdOVx%2Bhw28sGiKXVAiEAyz6Yi8%2BiJQF2ykVPmGlmN20NyDRN6NTl8BIRunayoxwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIlZ53MVEPruaVD6kSrcAz2%2FTALVXwdlENfvwEEMdzg2CWOZMiuNKa7RUJpIXzzFQdHh1egrQ3F3K7orFPlbZXE91178tdGxohLElZUGsIAgS6t3Q2G4U5nw2hSE4vNyxrc5ru7%2FAEv1t3Vhe3%2BFqXu7UrE%2Fswo0kcc9vQj5yv%2B8QW5YH0uUnRKDvxmFeMF0ercA8ETLEO3nVOr7SKZjw7Gzkp064UqIhfke%2FdeANYnyCFS%2FRdi%2BSNUbzPU3x1k4Kn3Wtl%2FQa7aSpl76jis5goNuz1qJLSdDd1i7VT3ZTEnenKKhoMII2HGTZc1yF%2ByEXqLAQmwbzSUQlvPM96EGYPzux73kEgDxIXSgpvuS4rI89HI%2Fv1KC3mV5JcW%2BvV%2FB78MCsdqco56L4r2JVSAocZzAS35wdFeuXWuHIWhBSmcYDvmMdnZVwmn0Zdd5f08uYAbRmcaOr%2F0ly3SfVbXFyNP7qy8yvGW60iDm%2FkzsF6B3bnLgpszY6cpoVzOqaKWUOQ8dLnn11DHAznmf%2Blrh3tle097X9N38YWf0g0anpLm6wxPzXZ6TPUBIK%2BASWC1auW17zxgOwVfApp5lN%2FWsw4PSnIdC4DUJSRi4tkYFv3gHklO55X2u9JFB17bBYKS8YT%2BfJ2N69xp%2BwUo9MNfdqcgGOqUBC3sCJbA0WEV5VqHWl%2BM7GFGJu61u9KAHFcYZrZXoiIogLFrXE7sWWl0PVoS6mwK7ky%2B1bpVCsXogAs68CmYirVkBmiPFZZBz2DDqSqjLMVQeXPbRAR%2FNcVwvr5DVimABsQSpGmHqXb1CGfn5AwULyOH%2BXnGmxb63SmmQ1LqjV9NiQNcDmXFmHqJfRJSHyRXzH%2Bi2tyKF%2BoY5%2BJw%2B8KrK%2FMgR4r5P&X-Amz-Signature=193d5300bb57739ddf53a53af024a2e49f3c50d71eb8388ca590dc5cad43ba61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5C5QPX%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1WJC6wYQLIdHiUuyA7DpSC1UwtcdOVx%2Bhw28sGiKXVAiEAyz6Yi8%2BiJQF2ykVPmGlmN20NyDRN6NTl8BIRunayoxwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIlZ53MVEPruaVD6kSrcAz2%2FTALVXwdlENfvwEEMdzg2CWOZMiuNKa7RUJpIXzzFQdHh1egrQ3F3K7orFPlbZXE91178tdGxohLElZUGsIAgS6t3Q2G4U5nw2hSE4vNyxrc5ru7%2FAEv1t3Vhe3%2BFqXu7UrE%2Fswo0kcc9vQj5yv%2B8QW5YH0uUnRKDvxmFeMF0ercA8ETLEO3nVOr7SKZjw7Gzkp064UqIhfke%2FdeANYnyCFS%2FRdi%2BSNUbzPU3x1k4Kn3Wtl%2FQa7aSpl76jis5goNuz1qJLSdDd1i7VT3ZTEnenKKhoMII2HGTZc1yF%2ByEXqLAQmwbzSUQlvPM96EGYPzux73kEgDxIXSgpvuS4rI89HI%2Fv1KC3mV5JcW%2BvV%2FB78MCsdqco56L4r2JVSAocZzAS35wdFeuXWuHIWhBSmcYDvmMdnZVwmn0Zdd5f08uYAbRmcaOr%2F0ly3SfVbXFyNP7qy8yvGW60iDm%2FkzsF6B3bnLgpszY6cpoVzOqaKWUOQ8dLnn11DHAznmf%2Blrh3tle097X9N38YWf0g0anpLm6wxPzXZ6TPUBIK%2BASWC1auW17zxgOwVfApp5lN%2FWsw4PSnIdC4DUJSRi4tkYFv3gHklO55X2u9JFB17bBYKS8YT%2BfJ2N69xp%2BwUo9MNfdqcgGOqUBC3sCJbA0WEV5VqHWl%2BM7GFGJu61u9KAHFcYZrZXoiIogLFrXE7sWWl0PVoS6mwK7ky%2B1bpVCsXogAs68CmYirVkBmiPFZZBz2DDqSqjLMVQeXPbRAR%2FNcVwvr5DVimABsQSpGmHqXb1CGfn5AwULyOH%2BXnGmxb63SmmQ1LqjV9NiQNcDmXFmHqJfRJSHyRXzH%2Bi2tyKF%2BoY5%2BJw%2B8KrK%2FMgR4r5P&X-Amz-Signature=2b98c92950c243cfe33794cca51f79c7167034de41a66251b5d42ec4d98a3f28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LWODCR7%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDO3cEMMWLnmxbzVo6Z1uMv%2F6%2FP8FFt9d4yrLD9VS3qrAiANzrG%2BuK2fYp6Wi9oO%2FxrMA16DNBFPN3j3EJy63kW5LCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM9D1x35%2BjXbcEa%2Bh9KtwDEZ4tTyaDCOMLN06T%2B7%2BfuzCUUBD8LHef%2F2qt7MEDnwaeW%2BNRbLdwXg0KUNWFSVBggh%2FsGH6W4HFCa2dVm8HAW3BciAN1%2FDBNpdQSoMaUxi%2FbQqjAjT%2BIhxb0QjbBeVEKX40cIm4wke7dbF5EtH5KzU9TaOY8Wf6567Qw%2FOG8gCgC%2BiGaoJzv0qLo5uQ4UXwZaBfdyVGFBwuBp0q5AMEWtrjUVTn8xez0isE1aONdY3mu69HRt0Twab1mAqFF7A7k%2BdFvQMvmER%2F6XLFgioEqwoav3LEpCzrPVSpK8%2B2hRdMXFylwcnTjqfNXVhPD0c96Hs36DdLpuHMGvCFPWpewMwm64CxsbSaVDTo1rN%2FNNlh07L5NZI9UGQfQzL6os9RB39MOtRksUyBc60PZn4qIrfQZQwRbCmyZXIvlfjlDolJ5qNvCt5E%2BlbLQYwEhFJnayujSDo8pNwCoQz4dE9QaNSKDXOM1HJlW3Pqw%2Bks71pTBl37arPQeq9vVfd%2BP7Efx41XPZLWne1CILk86PxiGZzBjDiT44lj0356bB04rOAem%2BcOze1%2FK4Xsv9XXw0b4%2FXpEJeEZpvwgL2NUEwGu7gFvl9cW2jShpFmHoDnnwFLDZG%2Fbf%2FbH%2BU7fz2Ucwl92pyAY6pgHb9Os74lLdGuZn%2Be3PgB8pad7OSPmJU5mvoWRsyg1YVcbMS9SiH112kMKfX8La7hKdFWxE%2BFMZVeewM%2FoXOBvrLT3ryBqEKY6b4HOlaAcgXZgjXmsx3kiG0I0V9vybmWay9W%2FCEEQxdQBHLyhTYuTHLl1z70Qzn6HIQ9jjA1ab2rnVNFaFj60MnRU3nfKjgK8uWA%2Fz4ZBHowsyN4229ukOV8nkZWMh&X-Amz-Signature=568f62137b9d6f21293b5c412fb8498971fcdff5ea7134ab8524b2b357623f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

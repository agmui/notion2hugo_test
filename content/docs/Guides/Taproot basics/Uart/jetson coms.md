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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645CRZCHA%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPXlGCJz%2BPFiddsbbJJA0xuXUZTFDT6bIe0GoBiP%2FUOAiAS80fSlHGcFaDmN6QIsvi62kVSJ8c4NF096DQDZUM2VSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMIyX39E92JYir2NPkKtwD6U0XTq61U4thPKX2gJ2jL%2BeRx6g%2BcFNgfyaYmsnzUfaIRGytwTBtmnQX11UqvycYf80N9llsQ14ytyP9QF1%2BrHuZMlrh3CXX5kEGi8PFsmNdhJSl3jelcsUb2C6MsQHwTZK%2BDNVw3ie7DkWV2D8iPaJQAghlXqj7ZCJvPwiOmkCujC8m7GO%2F5m4A7kzW5sk55qOMQRB9SJDhwjDhi1%2Bal0ls1DeEd2pFF0MtjU71fGg1iXEm4eShhlTw7DJojKQrIF7tFiDLtNN%2FzDt%2Fj6bnWW2GDN%2Fnv7PmDPiAoUp054HZvbZiHqASNyOYoUPihbW%2BGHe7P5YfuNzWjgl2M3EBl2bSj0zZBrrwyUxsVJOIdPXbTOXTDLLsx8nDjLrQqLdFEsrtAUP4PP3%2FSuPze%2B1zeOgi6UGxcOyoB8Dbi3hHeqOKswIOl1gAvMoL98KyRPd45VfHmsvZuH%2BkzGi7obdPaef67689v6lviiauhyjCNDcMoJ%2B5J%2FNnfWomnL80gAdxYpL2C4%2Fx4bQ902jJnENaflEASqGvYgnV58iH0PgQJfePd5TW0K2xBr06OjLVN%2FvtBY%2BwmXTxaP%2BP7Vst%2BWfbRhHufqNmj6gwELwJUF4mIDWzaEQ8n%2F1e5naVk9Iw2oqqzwY6pgG%2BGOJv6m2BQX2jOfVOuHpLBJ8nvi0tSjckvj5BzG7nndfkRrZr2ubpws%2FC7eYYeLRQkvIbrfy4S%2FTBwxfkMNY9xSKE%2FStPr2DifVdGWRK%2BI9wJS%2FMenahX%2FybbWNV3wuwZWgQ4gvAkI9Eoo1B0qU76PgAOfFhbqGf%2ByKmCFdlzpkpAkBR4F54b00i4ejbtbfVasd6EmlLd6AskgCWgjQod4uOHvkpY&X-Amz-Signature=05fe06248e9741ca31fb4937d4051eb559a3379bc52fe93e1f78303c6aea7654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2UHTZ7M%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDabBlvC4XIplHgHLzGMOwq%2F9TtpaFNt%2FMDHtDd0O1OWgIhAIwx6ope7gLGb%2BnsUhntR8JHd26ur62jyqx60y%2FtXyLDKv8DCG4QABoMNjM3NDIzMTgzODA1IgzAaToKulAS9tk9X78q3AOPB%2FXhnNVWgfmT%2FfYmHU%2BoBl74EsbbLxwisJdBf1RFc%2B2%2BjacpMmrxxdyXrJ%2BScsSx%2FG1w7jZ1j9cBCZv1jDVezbr2x4HeC4Xt1azQRtj61Q75xdQAN3bL3PnHQVHkKMPkQv0UfzqmccBi5Fldo53AwdIuSTaE%2BHfrx6XUk0w6pgU4phFbNyIGXAJ%2FPCJ4XrX4he3W1uaf1fJjMzD5eUW5IHo36DWUjUFPwfipUxrbRFXuDu2tKoUQ5ABtlcWbrqp5nSKiqKpITYYPTuxFEdObHJPNTiQBCoIF6rlpIi5pQmcOX3TFrS1TlJPYKWbZkwvrTbkt%2FrCOq21duLnh4xN4i%2FjtFPxA7PJGm7gd8HKQiY6NJWhF3jBgJBXcS1%2FVuJvhKK2zCAwho%2BzJpNhKd9RiIutc3MeVi3t0pvS2%2BdJ8N4iTC9r2KFplMs2vrrjYBIIDePAe9AT6emRKR4VMjnkRVnxS%2FELfekLxrA42FQuDBeSOniTmCAcGWj8YdxdjoNr0iMZCoduA3gBRkJcAcsegDliA0z8ff2o68kd3WnkvgPmjEGSjqYSgTOC9wbFcvUdatquGqegZKHGcDLE8e2rEp6NNdB%2FFfLQOhH7DZ2a6gyV3PTbDZnSmlMd4xjDCiqrPBjqkAbkDHouOKom60CqhzM830Ob0ocKbMIaqfOWLT9u2Wjh1MDMxwadn0JTmREeFBX6Td%2BleuMl%2FHgBhOrriiMbCBzSZ%2F1%2BKks5liw8oZdbJqrx%2BY7j%2BethT1U6Q5nPeV0LU9%2FmxKIbyc4%2BrdtA2ztw6y%2B2PwKDI4tY92f8N6HjBAHZset1QU%2Fl%2FZuZY4Fw57x4uGhmRkG1ItUtrwRDpTR6Jctb6YBkG&X-Amz-Signature=f9bf2fea13b7e6805ee4383cd06b5b632bcc387610e6f41e31282edd5b82c3cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DX5HQKQ%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgrX48s2Yl4uMO6itl4g%2Fm2xqNGPTMUwBgZlDvKplH%2BQIhAMlBxqZgDcnDtAxjJ1TCeF5YAIMmn3Vb3FvfbPZ77%2BNCKv8DCHQQABoMNjM3NDIzMTgzODA1IgxvxU1gNYTqoHf6BiIq3ANmwXEoV%2BYUt7AT33gcZVoPV190nkPuLe6ga30KS7BUqeBjPGAJGvfnwgtoKC4Q2oBKjN3zzCi%2F46vJwCyYmWIaQcvTKdO4DnMGoujvnFXT0En85xIBN5as8nUMlxE9%2FldWaQvrCGBGnAnbTRBMqzuK1dGyVAQPQnYep7A7CTb5TucnTWh2JNauSbMU40HDNk7bOYWUdTT%2BxvFjBDksJ6HSuxFJpqdfzoM2oGq%2FByOC7fbbSSryg4w%2F2t1Jnu9Shd5v1UssQ3Kmx9G7VRk2NVjROgQZqv8oBx%2F4PVFqYXEsO8sdU8XbFsnmCLsorQOveU%2FYH5qIM6%2Fe3dKjkTXgnLYISVZcpQGYERS6lPL3ZOBwx%2Bo0kz7Rs3C2%2FtNoZYUzkh7HRtisKnIoYlWyt9zxt%2Bk3O%2B1OfRWoNV3sm1%2BspSWE1%2F%2FVKilXs39H3W1nRzTu%2F3WtevUJOAtYMmhEKsloWxLUuzraQEJ6mifSddtpEL3KlmbzMszVO%2FKk1MfA8DlXlMtCD9EwlgUJ7ZgxpIFYJW3Om20xsA%2BUi5DkWnE%2BwNpiW0goGHN741XCzDuHCax9oMPIkh5%2F6UDo6u%2FcdP1XSA9XIJiwosswk0ToDdrwSFWZ5A3An%2FoirdpX5n9A7DDHrKvPBjqkAfFIuTpsZtPHMuzal%2FJ64brdRDyDlPEmCzXqcT2NLcYicgIlbMtTSl%2BE6HEKb00GaWLdZV2QoxDjMNSnkHSRT%2FmOS2lor%2FITx4YFOPzBm4z1yhXAmemAt4ZX0RxrpOqjY9tFB74TsDfzjsfEiUTZ9d1qie8yQZbnVlsTutdUg%2B0hFiJhmVH0ECWoXSpCqCH5%2BJEl3SKq0xrwLVvD97EfEKAa1ot4&X-Amz-Signature=52398f9cb5f22eac32801805cd4f195ae26d486f935852354dae4da8b303a71e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DX5HQKQ%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgrX48s2Yl4uMO6itl4g%2Fm2xqNGPTMUwBgZlDvKplH%2BQIhAMlBxqZgDcnDtAxjJ1TCeF5YAIMmn3Vb3FvfbPZ77%2BNCKv8DCHQQABoMNjM3NDIzMTgzODA1IgxvxU1gNYTqoHf6BiIq3ANmwXEoV%2BYUt7AT33gcZVoPV190nkPuLe6ga30KS7BUqeBjPGAJGvfnwgtoKC4Q2oBKjN3zzCi%2F46vJwCyYmWIaQcvTKdO4DnMGoujvnFXT0En85xIBN5as8nUMlxE9%2FldWaQvrCGBGnAnbTRBMqzuK1dGyVAQPQnYep7A7CTb5TucnTWh2JNauSbMU40HDNk7bOYWUdTT%2BxvFjBDksJ6HSuxFJpqdfzoM2oGq%2FByOC7fbbSSryg4w%2F2t1Jnu9Shd5v1UssQ3Kmx9G7VRk2NVjROgQZqv8oBx%2F4PVFqYXEsO8sdU8XbFsnmCLsorQOveU%2FYH5qIM6%2Fe3dKjkTXgnLYISVZcpQGYERS6lPL3ZOBwx%2Bo0kz7Rs3C2%2FtNoZYUzkh7HRtisKnIoYlWyt9zxt%2Bk3O%2B1OfRWoNV3sm1%2BspSWE1%2F%2FVKilXs39H3W1nRzTu%2F3WtevUJOAtYMmhEKsloWxLUuzraQEJ6mifSddtpEL3KlmbzMszVO%2FKk1MfA8DlXlMtCD9EwlgUJ7ZgxpIFYJW3Om20xsA%2BUi5DkWnE%2BwNpiW0goGHN741XCzDuHCax9oMPIkh5%2F6UDo6u%2FcdP1XSA9XIJiwosswk0ToDdrwSFWZ5A3An%2FoirdpX5n9A7DDHrKvPBjqkAfFIuTpsZtPHMuzal%2FJ64brdRDyDlPEmCzXqcT2NLcYicgIlbMtTSl%2BE6HEKb00GaWLdZV2QoxDjMNSnkHSRT%2FmOS2lor%2FITx4YFOPzBm4z1yhXAmemAt4ZX0RxrpOqjY9tFB74TsDfzjsfEiUTZ9d1qie8yQZbnVlsTutdUg%2B0hFiJhmVH0ECWoXSpCqCH5%2BJEl3SKq0xrwLVvD97EfEKAa1ot4&X-Amz-Signature=d5e05dbf42b339ac3c25545e19ca93b2fe2602b897518c493956ea2187c6a7b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2UHTZ7M%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDabBlvC4XIplHgHLzGMOwq%2F9TtpaFNt%2FMDHtDd0O1OWgIhAIwx6ope7gLGb%2BnsUhntR8JHd26ur62jyqx60y%2FtXyLDKv8DCG4QABoMNjM3NDIzMTgzODA1IgzAaToKulAS9tk9X78q3AOPB%2FXhnNVWgfmT%2FfYmHU%2BoBl74EsbbLxwisJdBf1RFc%2B2%2BjacpMmrxxdyXrJ%2BScsSx%2FG1w7jZ1j9cBCZv1jDVezbr2x4HeC4Xt1azQRtj61Q75xdQAN3bL3PnHQVHkKMPkQv0UfzqmccBi5Fldo53AwdIuSTaE%2BHfrx6XUk0w6pgU4phFbNyIGXAJ%2FPCJ4XrX4he3W1uaf1fJjMzD5eUW5IHo36DWUjUFPwfipUxrbRFXuDu2tKoUQ5ABtlcWbrqp5nSKiqKpITYYPTuxFEdObHJPNTiQBCoIF6rlpIi5pQmcOX3TFrS1TlJPYKWbZkwvrTbkt%2FrCOq21duLnh4xN4i%2FjtFPxA7PJGm7gd8HKQiY6NJWhF3jBgJBXcS1%2FVuJvhKK2zCAwho%2BzJpNhKd9RiIutc3MeVi3t0pvS2%2BdJ8N4iTC9r2KFplMs2vrrjYBIIDePAe9AT6emRKR4VMjnkRVnxS%2FELfekLxrA42FQuDBeSOniTmCAcGWj8YdxdjoNr0iMZCoduA3gBRkJcAcsegDliA0z8ff2o68kd3WnkvgPmjEGSjqYSgTOC9wbFcvUdatquGqegZKHGcDLE8e2rEp6NNdB%2FFfLQOhH7DZ2a6gyV3PTbDZnSmlMd4xjDCiqrPBjqkAbkDHouOKom60CqhzM830Ob0ocKbMIaqfOWLT9u2Wjh1MDMxwadn0JTmREeFBX6Td%2BleuMl%2FHgBhOrriiMbCBzSZ%2F1%2BKks5liw8oZdbJqrx%2BY7j%2BethT1U6Q5nPeV0LU9%2FmxKIbyc4%2BrdtA2ztw6y%2B2PwKDI4tY92f8N6HjBAHZset1QU%2Fl%2FZuZY4Fw57x4uGhmRkG1ItUtrwRDpTR6Jctb6YBkG&X-Amz-Signature=33bcdc276fb282303e51b53fe9a45b210650c0de68d886bb94f00bb99339354b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2UHTZ7M%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDabBlvC4XIplHgHLzGMOwq%2F9TtpaFNt%2FMDHtDd0O1OWgIhAIwx6ope7gLGb%2BnsUhntR8JHd26ur62jyqx60y%2FtXyLDKv8DCG4QABoMNjM3NDIzMTgzODA1IgzAaToKulAS9tk9X78q3AOPB%2FXhnNVWgfmT%2FfYmHU%2BoBl74EsbbLxwisJdBf1RFc%2B2%2BjacpMmrxxdyXrJ%2BScsSx%2FG1w7jZ1j9cBCZv1jDVezbr2x4HeC4Xt1azQRtj61Q75xdQAN3bL3PnHQVHkKMPkQv0UfzqmccBi5Fldo53AwdIuSTaE%2BHfrx6XUk0w6pgU4phFbNyIGXAJ%2FPCJ4XrX4he3W1uaf1fJjMzD5eUW5IHo36DWUjUFPwfipUxrbRFXuDu2tKoUQ5ABtlcWbrqp5nSKiqKpITYYPTuxFEdObHJPNTiQBCoIF6rlpIi5pQmcOX3TFrS1TlJPYKWbZkwvrTbkt%2FrCOq21duLnh4xN4i%2FjtFPxA7PJGm7gd8HKQiY6NJWhF3jBgJBXcS1%2FVuJvhKK2zCAwho%2BzJpNhKd9RiIutc3MeVi3t0pvS2%2BdJ8N4iTC9r2KFplMs2vrrjYBIIDePAe9AT6emRKR4VMjnkRVnxS%2FELfekLxrA42FQuDBeSOniTmCAcGWj8YdxdjoNr0iMZCoduA3gBRkJcAcsegDliA0z8ff2o68kd3WnkvgPmjEGSjqYSgTOC9wbFcvUdatquGqegZKHGcDLE8e2rEp6NNdB%2FFfLQOhH7DZ2a6gyV3PTbDZnSmlMd4xjDCiqrPBjqkAbkDHouOKom60CqhzM830Ob0ocKbMIaqfOWLT9u2Wjh1MDMxwadn0JTmREeFBX6Td%2BleuMl%2FHgBhOrriiMbCBzSZ%2F1%2BKks5liw8oZdbJqrx%2BY7j%2BethT1U6Q5nPeV0LU9%2FmxKIbyc4%2BrdtA2ztw6y%2B2PwKDI4tY92f8N6HjBAHZset1QU%2Fl%2FZuZY4Fw57x4uGhmRkG1ItUtrwRDpTR6Jctb6YBkG&X-Amz-Signature=dd8f18c1f03990d69f68b7f1760234369d042a62a7fe07f8a9bc446b98a92d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MZ4SGJ3%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7%2FxFQg6J2mnWsoCyuGJ49y7iNCX2BjRXBRR083LRNHAIhAIKFOpek96rOYrPsuSFX93UfHHs%2FZ8Ch%2FSGd%2FCgfmJLDKv8DCHQQABoMNjM3NDIzMTgzODA1IgxHHLoq3JmebpM3XDQq3ANLPjgIP6SgCyBO7lp%2Bhs1WWZ9TjKGEaMniRIkSuZJkx5z%2BFP8wnK%2BfriCZWtTtLKmZuQjbmHklEl62kG7HF1Ut%2BBQ6vc8SMiz%2BQAaAHzj3sFA9MiQE44evB1gSLAxblhiCeG6nY68HOIpsdZZUaxGiNL2kDTQ7j9UpxkARldsS5Aq39Sh4KxJEkMphuNgD1swo%2F2w60AfVDQWj%2FJQVZi9ZaFZZuNau6IBklTVZop6A21KcTcc07e%2BHbC%2FXnktrk9L3k5%2BfVMoxhWyTNCmHeV0SNy16%2BaMdtjPKukTh1YW53hInvBq6F1YAsrDKMoGGx4fLTr8yOVoWnvK6nRQnA0zTR0oL7VA%2FtLmh6BFmT3CmVa3UZHHmT8hhBwcObuL1%2BKe0Ad9F8EonqukFFLLMbgOfsZAzGAfB6CcVBe4GN2MXEhXLyT9IUN3sJlJpJwy06N9YE2TPA0%2B52s%2BpHKJvXTsIi1jqY9ejiwB%2F0wrHqyaQfyXZ79JnK3rF6X1pmQ5tKUDqCjqkXolhvSOWQjl2G2dtmA44NiuVl8f5Ma5NFIZ3ZDukou%2F5lsAeh33na4TZ%2F3ipKOoRa%2FzZi5F%2BwPp5sv2idrjQXNgHVJeLB0C6aQJG8cHGoy2sNlYBnY7sQDCRrqvPBjqkAfLKXFwX4%2F6K%2FYe1TjC06tj7h%2F7uTM3t4UPQxfF35oE6eJgLe%2F%2FWe%2B9nj9E60uZmBO8AzF3tNug7YOJKkUx2H5wDeeAAGq%2BMo5cKXzVeo3g%2FS%2BGF%2Bri8Evoh1EyUImKJYaz9B4ZNJxs3M9e6vxDwa2STDp2YXRF7Z0FgVEokfVBNlXVlGzz%2Fyt6VETcly835x58al8PHSiRlpWqgsH7El8w%2FQWXJ&X-Amz-Signature=a67a03fcefc8e86cc4aadb83abc2e46e2a6094066ea285cf5b19ec035eac179a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

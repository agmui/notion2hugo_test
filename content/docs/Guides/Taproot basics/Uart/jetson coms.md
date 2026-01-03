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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCAAM3Y%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCHaGikoNqiJPb5eBWEZ%2B21MjP4dxwzoDAYOuPhHlU9wQIgBHW%2F8IjaLTakFC8d4rrgdBFjb5IsntsSp2Rfc7n3ZcEq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDN2zqLzEUcTZF%2FxY9CrcAyTHx%2FobjvD7z9yepB9nPpLKI5KsrJxsC4%2BxQJH3cq0s%2BNjYChuF1DolbOBNpXXTjUaafd%2FJLWvmf8yX6MR%2Bf9ypIjdb4BC%2F%2Fjupm%2BTlCsjkarLTc1ywHlYlVohlVUViD1l2uwF8KJ%2BKtRZMSxUM6D3Fzl%2FZhpOqq9YMvhch2boBFJYUfXXcAf2oD69URo6asr%2BZeDw3dUFOqH960QLY3nwm%2FqiPBTSMcaQe3WEwBF2YPCNRp9bms4dwaMf55mMxX32wsCG3Bwd0kJ25QUDj%2BZF2mj%2BeDo%2BKR%2FD4LV5ENUct2uudTeDQkIfwglfcpnam4brCmlwS2YqrB9r23y%2B2SdZdH%2FKVv99mO2g%2FX49jBCD3LNjmM%2BqfjVLOGY6lfUJa3TVNKg5VgrGe7NGczUVBelLZLIQwnVeTNwD54Hb9YlrkbkSkR41WPYHUFX0%2Bzz9kX62CSurvB5LBVBmEtm6s3QaD0cE0jOp2L9aNduFWshxrdNiN6DFdFor4oHa2El2HePkgORiYLKlihab0iSTYr2MrVXaCpwsK99vVPdo%2Fb%2FyaljBne9tga9ZuTY3BucDdnftNRi0Twgl%2FCPQUJ%2FxPjOrpsJbk0wmrVdRuNgtlloPSYHUjBgFau5DZVGwDMI7T4MoGOqUBuhw0LrLic54rEsJOdjymZB%2FZ9WYNYZftoHdki6yuPb23Phm2lHiVW4nlVHuCWs3MzkK4bLbHLwWDqqEF1khiTD7tRrKaS9cygBSNi4idYOyOKNcg1LwT9SuaF1wHSfKD2iW2iTr8vYWPHIVHrGQTqOjwzYAKWE5wIZWYl%2BawceuXpr0XaUJuGfGw50TBz3i15b9ACl5QnxgW1e%2F5QaqGA0DYuNjs&X-Amz-Signature=84cf299d5479e3d3bd065de8fdfe01e20c3a4c7a4736324e5278c903e0d2ae69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T6A4J7G%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEMEFmwPYj%2BZL3euvH%2B4szd0kUsdmxVWzqaMKhCALrKmAiAMLNB%2BPb1wKo6jYD0ENgGH%2FsI2a7Izyw1c7HsZLfJ1Zir%2FAwgGEAAaDDYzNzQyMzE4MzgwNSIMtxPVDHr5IZ%2FQOIJwKtwDHQh4JcR4BgwAPyT5TEbRmehX4pO9mHxW6UANUxFOy06S4uO9ZQ3YNs3%2F8ku2YTEygt5i0yC%2FLwwbcu0f6hnRxuCQGRUKea4IyhtpbNJfSFCcpEPGm98MbiTS1%2BqTpUJG4MIpaOXGx7zEAWFiY39Ayb2vwA%2BQVitqM6ErbDzwBTlSJj3VVSRQRMdVfJMDvfG0cD5s8TYTR0oChHqkcndC5da7CRN2IyAU%2BVwsiNF3i8Ytt5%2Fo3ENM5RdcK6eUJRFilqJD6c2JfD5zVdIbl0NE4c%2BXSqL7dSeJO0MPszOpA7COhdcPkRhLDu5D6HF1ZnJrK5GprM9Rpv8kbXt06y%2FE%2F3zjMb%2F5PMNKLI8%2BR5YfGKTDEIV63crSF9PBxyM65EJr9NH4fHtS0JAVcFUPqJjrBN3WR3LgOKD9jajZGnzegCzMbIXs2MJhtTci7crswlEOGztNC8lM2fsfeZ8a0P5nXqX6d%2Be4r94pgHr%2FY9okrztak%2Fg6vM68VXOCtgxCp%2FMNLCfveqJ%2FNkIf0zzni%2F0nUVoNic38zq%2BCvl9WHsLH5xBvNsNBuMlgyadueGiUK3B1nadm582wAHU%2FNg4E%2B5IOnu9fFVhE28R%2BKLRqMFJcgWZMp%2B1HWgykA3bHNCEwytPgygY6pgErAg00y72HaPPyMvn0fQqsGnhgyNnQXOnw3ZEtlFWSiwCrKGkkr%2F8gGj6dR2APbsTUqtMnGv2l3uyYZmO18Rs7qkdhK4TLG2jUbtpQDU6fzcQZbdqOBdjhvVFm8s2xKcaCeWkez2Y9eOOoGWKsj00%2FXOA%2BE7dypk1kw9U9%2Bu6u7x4yot%2Brf2m%2F%2F0iDTxaAhLxXP6YTMd%2B%2FXG4YWh09wCxcoY1ZcaS8&X-Amz-Signature=19092e2ccaea295017b32a94742e1df8ca31acbeb82461c325fa85b00492d7b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZNP7YC%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHYRTKt13in%2FVyqf2i3vFrSVf9zlZotUQItw9C4%2B6iRzAiEArhjbueEYrmf4B3vm%2FO2YsD7vvPlVtVNGLIKFdwOfnrcq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDDzVXyf%2BrC5MEmwkoyrcAx%2BE6oKYYRL9Gvse3%2BfKmhN8X1eYJdzttuImKxz%2B013ffytNtgD1JdYVHyISS9kx3dXPsvV1T%2BV%2FC60cD8XbNN0s2ahidF8azUcWiz88zrNICyhBmDKMnne1veaObl%2FeNziC7uJJYYo7C4xnZsC%2F1tYPDK3otOwE2MHok%2Bv8xO1%2BwdUbmastFut03PMMVqVcD%2FzvFLBM441wyKYpNQ9Kq0bAERjxObSbk2kfnKaEVWwxH2DN%2Fg9f5Tuf%2F0vMYLUn9ovkinS%2BFhx4uhWOtqgaIhcXpiv5grBLEeFjZ1KoOPAEVQlnFHb3XylbE%2BEk0AzrLgqJzjG%2FDcs2MUocPHBP08hXNztsocIBH27c%2FXqypyeV8p16iliTOVJJ%2BQigYE9hm88ItWtui1grjg8XWV88GBwPHrNlgmcrnFhQ6NHPra7Wr9dGw0iHmgui3jO%2B56qwq2reGQ7djmjfdPkapJukCaPbOl2D9wvkeA6mPkhr0aUTqsfaGlhEi3tvpHW%2BF9IbcVpSOM%2BaMIGVUiSoDXO81Eg25MvYj27pMRwQxnNJLAhCreJy%2F6B1moCpJNnLZp6%2BBdQx5NJHE41VW5mlJK58zgp8H1EOVQOmSaPjljCnZj%2F54oO0%2Br%2F8QkRHHBrJMNnQ4MoGOqUByWqfD8i2giDipcKQilALerB2iLVVldAGG0rfQBxkpJ7349l80K5yVL4AweLGADK39D88hI8cNjloKvE7O%2F07IARm%2FG%2BmRkkwQu309ChZuzS84r8rMIsJ%2B0adAHXhZ9OqgB2pW8eqeDu5e%2FmrguG3ifqrzlgnGMh4XXcyCAK3APZxEUCpWdar9P6CledAJf1OKndveq473HpD9W5ESAlUsO6Ca3YX&X-Amz-Signature=7148c4e01b37503577b1bf70cafc46f28ebd168f9e15d4765a3392311a61ff40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZNP7YC%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHYRTKt13in%2FVyqf2i3vFrSVf9zlZotUQItw9C4%2B6iRzAiEArhjbueEYrmf4B3vm%2FO2YsD7vvPlVtVNGLIKFdwOfnrcq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDDzVXyf%2BrC5MEmwkoyrcAx%2BE6oKYYRL9Gvse3%2BfKmhN8X1eYJdzttuImKxz%2B013ffytNtgD1JdYVHyISS9kx3dXPsvV1T%2BV%2FC60cD8XbNN0s2ahidF8azUcWiz88zrNICyhBmDKMnne1veaObl%2FeNziC7uJJYYo7C4xnZsC%2F1tYPDK3otOwE2MHok%2Bv8xO1%2BwdUbmastFut03PMMVqVcD%2FzvFLBM441wyKYpNQ9Kq0bAERjxObSbk2kfnKaEVWwxH2DN%2Fg9f5Tuf%2F0vMYLUn9ovkinS%2BFhx4uhWOtqgaIhcXpiv5grBLEeFjZ1KoOPAEVQlnFHb3XylbE%2BEk0AzrLgqJzjG%2FDcs2MUocPHBP08hXNztsocIBH27c%2FXqypyeV8p16iliTOVJJ%2BQigYE9hm88ItWtui1grjg8XWV88GBwPHrNlgmcrnFhQ6NHPra7Wr9dGw0iHmgui3jO%2B56qwq2reGQ7djmjfdPkapJukCaPbOl2D9wvkeA6mPkhr0aUTqsfaGlhEi3tvpHW%2BF9IbcVpSOM%2BaMIGVUiSoDXO81Eg25MvYj27pMRwQxnNJLAhCreJy%2F6B1moCpJNnLZp6%2BBdQx5NJHE41VW5mlJK58zgp8H1EOVQOmSaPjljCnZj%2F54oO0%2Br%2F8QkRHHBrJMNnQ4MoGOqUByWqfD8i2giDipcKQilALerB2iLVVldAGG0rfQBxkpJ7349l80K5yVL4AweLGADK39D88hI8cNjloKvE7O%2F07IARm%2FG%2BmRkkwQu309ChZuzS84r8rMIsJ%2B0adAHXhZ9OqgB2pW8eqeDu5e%2FmrguG3ifqrzlgnGMh4XXcyCAK3APZxEUCpWdar9P6CledAJf1OKndveq473HpD9W5ESAlUsO6Ca3YX&X-Amz-Signature=58e6739caf0f04bd37d3608595aaf20c8adfeab7a15330cb917a6d8f337e0408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T6A4J7G%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEMEFmwPYj%2BZL3euvH%2B4szd0kUsdmxVWzqaMKhCALrKmAiAMLNB%2BPb1wKo6jYD0ENgGH%2FsI2a7Izyw1c7HsZLfJ1Zir%2FAwgGEAAaDDYzNzQyMzE4MzgwNSIMtxPVDHr5IZ%2FQOIJwKtwDHQh4JcR4BgwAPyT5TEbRmehX4pO9mHxW6UANUxFOy06S4uO9ZQ3YNs3%2F8ku2YTEygt5i0yC%2FLwwbcu0f6hnRxuCQGRUKea4IyhtpbNJfSFCcpEPGm98MbiTS1%2BqTpUJG4MIpaOXGx7zEAWFiY39Ayb2vwA%2BQVitqM6ErbDzwBTlSJj3VVSRQRMdVfJMDvfG0cD5s8TYTR0oChHqkcndC5da7CRN2IyAU%2BVwsiNF3i8Ytt5%2Fo3ENM5RdcK6eUJRFilqJD6c2JfD5zVdIbl0NE4c%2BXSqL7dSeJO0MPszOpA7COhdcPkRhLDu5D6HF1ZnJrK5GprM9Rpv8kbXt06y%2FE%2F3zjMb%2F5PMNKLI8%2BR5YfGKTDEIV63crSF9PBxyM65EJr9NH4fHtS0JAVcFUPqJjrBN3WR3LgOKD9jajZGnzegCzMbIXs2MJhtTci7crswlEOGztNC8lM2fsfeZ8a0P5nXqX6d%2Be4r94pgHr%2FY9okrztak%2Fg6vM68VXOCtgxCp%2FMNLCfveqJ%2FNkIf0zzni%2F0nUVoNic38zq%2BCvl9WHsLH5xBvNsNBuMlgyadueGiUK3B1nadm582wAHU%2FNg4E%2B5IOnu9fFVhE28R%2BKLRqMFJcgWZMp%2B1HWgykA3bHNCEwytPgygY6pgErAg00y72HaPPyMvn0fQqsGnhgyNnQXOnw3ZEtlFWSiwCrKGkkr%2F8gGj6dR2APbsTUqtMnGv2l3uyYZmO18Rs7qkdhK4TLG2jUbtpQDU6fzcQZbdqOBdjhvVFm8s2xKcaCeWkez2Y9eOOoGWKsj00%2FXOA%2BE7dypk1kw9U9%2Bu6u7x4yot%2Brf2m%2F%2F0iDTxaAhLxXP6YTMd%2B%2FXG4YWh09wCxcoY1ZcaS8&X-Amz-Signature=f32103c444beb3a73277315060d260e69df42e1dda4dbe341680b70e1d4a7924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T6A4J7G%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEMEFmwPYj%2BZL3euvH%2B4szd0kUsdmxVWzqaMKhCALrKmAiAMLNB%2BPb1wKo6jYD0ENgGH%2FsI2a7Izyw1c7HsZLfJ1Zir%2FAwgGEAAaDDYzNzQyMzE4MzgwNSIMtxPVDHr5IZ%2FQOIJwKtwDHQh4JcR4BgwAPyT5TEbRmehX4pO9mHxW6UANUxFOy06S4uO9ZQ3YNs3%2F8ku2YTEygt5i0yC%2FLwwbcu0f6hnRxuCQGRUKea4IyhtpbNJfSFCcpEPGm98MbiTS1%2BqTpUJG4MIpaOXGx7zEAWFiY39Ayb2vwA%2BQVitqM6ErbDzwBTlSJj3VVSRQRMdVfJMDvfG0cD5s8TYTR0oChHqkcndC5da7CRN2IyAU%2BVwsiNF3i8Ytt5%2Fo3ENM5RdcK6eUJRFilqJD6c2JfD5zVdIbl0NE4c%2BXSqL7dSeJO0MPszOpA7COhdcPkRhLDu5D6HF1ZnJrK5GprM9Rpv8kbXt06y%2FE%2F3zjMb%2F5PMNKLI8%2BR5YfGKTDEIV63crSF9PBxyM65EJr9NH4fHtS0JAVcFUPqJjrBN3WR3LgOKD9jajZGnzegCzMbIXs2MJhtTci7crswlEOGztNC8lM2fsfeZ8a0P5nXqX6d%2Be4r94pgHr%2FY9okrztak%2Fg6vM68VXOCtgxCp%2FMNLCfveqJ%2FNkIf0zzni%2F0nUVoNic38zq%2BCvl9WHsLH5xBvNsNBuMlgyadueGiUK3B1nadm582wAHU%2FNg4E%2B5IOnu9fFVhE28R%2BKLRqMFJcgWZMp%2B1HWgykA3bHNCEwytPgygY6pgErAg00y72HaPPyMvn0fQqsGnhgyNnQXOnw3ZEtlFWSiwCrKGkkr%2F8gGj6dR2APbsTUqtMnGv2l3uyYZmO18Rs7qkdhK4TLG2jUbtpQDU6fzcQZbdqOBdjhvVFm8s2xKcaCeWkez2Y9eOOoGWKsj00%2FXOA%2BE7dypk1kw9U9%2Bu6u7x4yot%2Brf2m%2F%2F0iDTxaAhLxXP6YTMd%2B%2FXG4YWh09wCxcoY1ZcaS8&X-Amz-Signature=4d8158e360b0c6d50787335e3973bbd98a9ab21d73a4073f31be74387e47fafb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOEPFUQM%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDnEUbo4qp17I3YG361Ab%2FdNyEHqWIBIfRT7ObPpptaXwIgHKZuOOII4ZInL6TmXSNiodHUnsbZ%2FgmmgWnbhB%2F3bEgq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDI9LYEkK0bDXXjhVlSrcA7CPZJ%2F2Xw9muQsnqJM3zy6VomkKjN5TQLqEogHSSgmCZFwvgevhzBaAjyFIc2%2BuyxaMFjCtDYELSaV5dg8MVV4DbYnCZpxYXniC9fXeC6%2B%2Fxw09LB2CDqYlMzFjksBLzd0benLAs4e00NZVot2ssSqcUp3pbTctFPXk%2FUmyn7D9jjbU52YfN7%2BTpGanx2c13wUgq3x%2BtkN1IRToF4yU2I6OsojfQn94pbtxYB8v7saAmC5wVLhW1JQ%2FeqURGQFqaZfET048OBuNcP6HWxzc%2FVN8IwODNfge1cHJmvlqits%2B7rqIYrzJeqxiDhYTz77WuHlfGlSAMQG%2BJP3z2iVzsBD0bkdsaYFdM8Bk6dJzaVBO99xEIKGcHj4F9mgXuprcC%2B3lhR3l3JbSp8VBc53Lip7f03Oc9bHVUafWtkSVwvdtwdFzKtWgbN3PuiT7YX96F4%2Fcdb1Er3NZumX%2Fpux%2FNhMzZW6nFj1SnmKCCnZHQ5BwF80IyeZQUkyAKP%2F4C0AmoZ3g9O%2Bj3kY81UHXkSAtEpMXCRSVjnoTSZJdkz3CERwCucZ0%2B8Eb%2FL%2FPYABbSsDA%2FyHm9MTqvsu6mIeg%2FkrYCAOqVW7KG%2F9p0TdEolZE4Bck1vAKCOqvEoThjNzpMI7L4MoGOqUB82jK8X%2FUo3fTOO4A6vGmCvl9Vbpf3HlcWgbimNnXzU6Y0rrBoHWQXQPN9suj1lbgl4ksDK0GlBZz7y50lPcr0vsFg7VQTs7OCYD9MmWdykkDV38TYfoNVlX91OOIu8I89PwqHcPk0VPA7EyVH1FKOxZBunS7kQ87gndN0VI5%2B11y456yYUaa0kefRymTCJBEwaNasU0dYNPCJ58SpLaWwdhvYjAA&X-Amz-Signature=0f71a9557282d8cd2f5c1a9487ea9a6cedbacdac76e14c9eba741983d4b01bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

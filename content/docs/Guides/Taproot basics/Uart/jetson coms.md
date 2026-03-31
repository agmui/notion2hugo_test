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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IL7P7AP%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIC25qfJscVi1LEZzxGdpTCQKMdRHTg056AtvG7GvhyEnAiA%2BVJJCPoySSqBWIGK8lKwNqCAcHaA6ZOgH8Izp0YfEFir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMQaFTcNo%2BAOpeKAj5KtwD9GVIdGv1caS0zdZniFmwHnUMh%2F%2BDFrdl1U3NLLXPALkkfF57zPLcbL%2FMkUine%2FExs%2FU7n06HBMLD3xgH8S1rb11Uq2kb0qgd%2BGYPccNdQg699N1bC7HQ7JWom6w2oPkHWgucpiYk6tsHLKhpyYwglj3xR8iAe2zh06w7me3NlKRqiocV6%2BHBS7UjpnC9kLnFqHntcioCGPoYs8u7Dyw1isf9papNSO3vz9F9p85tOu0LebElcgHBleTNMoMQYnmS6eV%2F2yyeAd05C1rDEbVqDb%2FQKGolELHiJTrhgJJPrgyuEkwPH6gNpCtVLWTENjgWfCOj4YbNEZPlRNh6hclIY6c%2Bs2Yar7wvgCXW3Y0VPYRCafpJflx92T5PofNNR7EXboZpoEHkr%2FWIcsG3R1MI9E4hc9yIw8cMezOMpGi%2BNZiFE6jsILtbHPc3RLy7NPM8W9ev5RDfZP3Kz5If%2B7ORyHSSX%2FGbIycXYU5gp8b6qSEPTs14%2F9gp2dYXwE6dYdzBVm6MDq%2FuXc2nOKcX64UlQEtVUmJiM2BrL7bGMJF8P2xjwf8To1aQanlMOWLByLlflrFNZnDsiFXJKoakt5EqvQ5y764vyFYbAiTlZ%2Fi3vhUgwiZ3cD3Is%2Fa27uUwtLqszgY6pgG6FOsNDP2GZ7YRi7ENiWat0Th%2BTotYDGw5m7AH%2BObFHRrUoIVt8RmeG9FeVY8A9NpjkZ%2Bbt3cgC7BQdur2SPpOzMr2ORJZ8MJGXxqjSRe5ZmVtTw1bHQboWlBtt6gu2J31HFcpFJkmu5QbCZQhH9Wf3RZAxS7KlNIGi0tfXs%2FfaJbvRB2U5Msk1YTGoY8z0SY0m0f3jVBiizJhry7ljSWhcmOHdnxF&X-Amz-Signature=6adaaab67f5a52b2700b5c69bac4ce72c4f9d98bf139954d7a80f9ea1df3a5af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXO3TIE%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDsOcl8pZ8TQQZlOi2J1YXl1y2d2HSi4S9Ooc92UyLRjAiARbD3sfKY5qfuM1vUPf%2Fa%2BSSwKmf8r%2BVjSq%2BF71BN4BCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMQal7ElIHYFdv9xU3KtwDcjZKjUldo0NPn1nLcQNKkYhsY%2B0fW0UWgWa5lIhhHOlvBSOybbC1KcwJBiw3yWTfPPwrGR1GeLCcJvYYAZjrKoj4zLMVd1N8Ju%2FAEM8PRfARqrqDp4PriJv1c2KRgxqOKF7aHVL3Y%2FmppeW9MFSe5NHefyfUL%2FlrbaPjpz5N7dhfGmnKuDzXaScBm85YByjxRz78YrwIdFwrqvMQDYR2UkjQ8wfO5W1FmV6yUXNeFwCjQ%2Fd8xf1M8FL0zaLtC9AzPGza74opBib5uo9Lfa2iSbCIS2Behee296fEvBO1ah9MQPuvikrxj9iWdDTRzSyvF%2FypOZf%2BfwwJ%2FmHDGm50Pyz7Zuu37SSD%2BC1yPksWIuwjlmC2Pe51ph1HNRKW6rJm1ssoQ88u3EtlwQ%2B7gOIpG8nQkBsgWrRJE7fn3QjG7Hzk7RZQxIDHUpporWCo5zjD59IMdhuoBU1cEU3kozIWHP50o88DgZ5Vc8fAwjG0elp%2FtmgYyzCLBG6qojfoyOr6t1R0tW5WPFBWbUCv9thVDdwSOSoTvxm9g0FlN9oH5cjQ%2FVjqi1m8zgOVA%2Fbi%2FZQE6t6twF9V6yp3BQ8tipfBGv1QZp%2BZnTF9T6O3pIl0ZHnClXPeSx079CCoM7Yw1bqszgY6pgFvOr9WluOIzqWA5Z2aUYQnDdGLxinD4rC5Ucizu2BkTrGMzld%2BqeyJvi%2FbFCSTsbjKXZwXBzyuOyfMFCpPAcNMqu%2BRIcxdaDOd5fay2ttO8sTGHNsSV%2BUA0rfWYvCZuOHj91WntMEq8SRaQixjNNz5yUV%2B7Pc71nqgSd4gMwuJtMtU3GnYOlTbAbw%2FYpRjezyZ9Ff96hjoVAz2%2BXQZzDoj70en7PZo&X-Amz-Signature=62860e84cf264e325401e06e1508c48364c2ed0182e86a877f35ef5903da7c63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTHWUQS%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFT36PDVG%2B9q6kHzD1wra%2BFzPKpS33OVFu23VVLt4ojoAiEAlv7yliGViO8pLKx62FkXKiRPbsbgeA9Lqg1jcywiE%2FQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFCgNpzArjJe%2BM8bcSrcA7qL4TIapiEsyx5gwljbdIPNWJR94WnN3i6ygIPDJNbSsOsIttCriSlNY%2FZHFf6mfIxn2OrqhIDU1lTNab8eG8lboZtARKdS5rpYA65CREhw1w8kLod2z9nKL1iwT8WH3do%2FvuMg%2B63ODP%2FNMs5Tbp0%2BlRMtgDeRvXp8SpJyiALW9gAT2tP4rFzjz2iowes8jMT9eevlPFw1SZWkG6m0RueJOaSVxXQmR3HOYp7cEpBhs5Vd3jHruE9%2Bxollj%2Fa4JBgkVQomE3%2B2EGq2L9dHS2PBQmrNvSJGNwnT8lXvWp1m3Ku4dH0nLCdRXE1HeKyVYKDYic8JW8AL83dt7z08pzkA9qNuDsIYR8fP5UUbGcutiMiDmxsvC5V2Lb6TL96hvBa3CWN9h0zO1acanskVG1iX7ERPrmLryi9KJHZrdG%2BKihka5gB%2BwgS7qZUcsyqzJKbIkdyWqhrMSRk5NHTF0uGZ8xu7%2Fa2CGeY2l8pQUlSXgjJW4gtH%2Bql696kHjLKIi9V5HUYAdYLtHq17DyOJSe54lTE63gzdUPRk37trCrK1lmOWTogGIqkQeOkBP2gh5MG%2FUGjcuh6BH4Ckqlhla%2Bt5JR83VIvbtw%2FM1CweGHn3ule53%2FC76fxO7pWqMLW7rM4GOqUBV54UclaKvH6yDpmQ76%2BdCErf7dNsayUL2smCekcykkRVUnfVv1uOEO5LGcikweNoEh2GrLoKHrioCtjfYAIS8%2FaYNtY57alxXYlwTluNtKJmY%2BcUOWS313v2ejDRqckdugUiP4vmS0yBXyL%2F91UJvi0OvhpRFTvwbnTs6QzIB2o9%2B1yxcpQSZF513oUWyVqTdvozST3xbAXMN%2BakFbIjRl2BNZdG&X-Amz-Signature=45bb0493daeb47ae4cd600dbf2524fe9e54cc66c300a40e022743cc3a35c1dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTHWUQS%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFT36PDVG%2B9q6kHzD1wra%2BFzPKpS33OVFu23VVLt4ojoAiEAlv7yliGViO8pLKx62FkXKiRPbsbgeA9Lqg1jcywiE%2FQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFCgNpzArjJe%2BM8bcSrcA7qL4TIapiEsyx5gwljbdIPNWJR94WnN3i6ygIPDJNbSsOsIttCriSlNY%2FZHFf6mfIxn2OrqhIDU1lTNab8eG8lboZtARKdS5rpYA65CREhw1w8kLod2z9nKL1iwT8WH3do%2FvuMg%2B63ODP%2FNMs5Tbp0%2BlRMtgDeRvXp8SpJyiALW9gAT2tP4rFzjz2iowes8jMT9eevlPFw1SZWkG6m0RueJOaSVxXQmR3HOYp7cEpBhs5Vd3jHruE9%2Bxollj%2Fa4JBgkVQomE3%2B2EGq2L9dHS2PBQmrNvSJGNwnT8lXvWp1m3Ku4dH0nLCdRXE1HeKyVYKDYic8JW8AL83dt7z08pzkA9qNuDsIYR8fP5UUbGcutiMiDmxsvC5V2Lb6TL96hvBa3CWN9h0zO1acanskVG1iX7ERPrmLryi9KJHZrdG%2BKihka5gB%2BwgS7qZUcsyqzJKbIkdyWqhrMSRk5NHTF0uGZ8xu7%2Fa2CGeY2l8pQUlSXgjJW4gtH%2Bql696kHjLKIi9V5HUYAdYLtHq17DyOJSe54lTE63gzdUPRk37trCrK1lmOWTogGIqkQeOkBP2gh5MG%2FUGjcuh6BH4Ckqlhla%2Bt5JR83VIvbtw%2FM1CweGHn3ule53%2FC76fxO7pWqMLW7rM4GOqUBV54UclaKvH6yDpmQ76%2BdCErf7dNsayUL2smCekcykkRVUnfVv1uOEO5LGcikweNoEh2GrLoKHrioCtjfYAIS8%2FaYNtY57alxXYlwTluNtKJmY%2BcUOWS313v2ejDRqckdugUiP4vmS0yBXyL%2F91UJvi0OvhpRFTvwbnTs6QzIB2o9%2B1yxcpQSZF513oUWyVqTdvozST3xbAXMN%2BakFbIjRl2BNZdG&X-Amz-Signature=3346f7b69cc911cba63fcead0ba92372de16b2174eb57799614f730dc9e1f210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXO3TIE%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDsOcl8pZ8TQQZlOi2J1YXl1y2d2HSi4S9Ooc92UyLRjAiARbD3sfKY5qfuM1vUPf%2Fa%2BSSwKmf8r%2BVjSq%2BF71BN4BCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMQal7ElIHYFdv9xU3KtwDcjZKjUldo0NPn1nLcQNKkYhsY%2B0fW0UWgWa5lIhhHOlvBSOybbC1KcwJBiw3yWTfPPwrGR1GeLCcJvYYAZjrKoj4zLMVd1N8Ju%2FAEM8PRfARqrqDp4PriJv1c2KRgxqOKF7aHVL3Y%2FmppeW9MFSe5NHefyfUL%2FlrbaPjpz5N7dhfGmnKuDzXaScBm85YByjxRz78YrwIdFwrqvMQDYR2UkjQ8wfO5W1FmV6yUXNeFwCjQ%2Fd8xf1M8FL0zaLtC9AzPGza74opBib5uo9Lfa2iSbCIS2Behee296fEvBO1ah9MQPuvikrxj9iWdDTRzSyvF%2FypOZf%2BfwwJ%2FmHDGm50Pyz7Zuu37SSD%2BC1yPksWIuwjlmC2Pe51ph1HNRKW6rJm1ssoQ88u3EtlwQ%2B7gOIpG8nQkBsgWrRJE7fn3QjG7Hzk7RZQxIDHUpporWCo5zjD59IMdhuoBU1cEU3kozIWHP50o88DgZ5Vc8fAwjG0elp%2FtmgYyzCLBG6qojfoyOr6t1R0tW5WPFBWbUCv9thVDdwSOSoTvxm9g0FlN9oH5cjQ%2FVjqi1m8zgOVA%2Fbi%2FZQE6t6twF9V6yp3BQ8tipfBGv1QZp%2BZnTF9T6O3pIl0ZHnClXPeSx079CCoM7Yw1bqszgY6pgFvOr9WluOIzqWA5Z2aUYQnDdGLxinD4rC5Ucizu2BkTrGMzld%2BqeyJvi%2FbFCSTsbjKXZwXBzyuOyfMFCpPAcNMqu%2BRIcxdaDOd5fay2ttO8sTGHNsSV%2BUA0rfWYvCZuOHj91WntMEq8SRaQixjNNz5yUV%2B7Pc71nqgSd4gMwuJtMtU3GnYOlTbAbw%2FYpRjezyZ9Ff96hjoVAz2%2BXQZzDoj70en7PZo&X-Amz-Signature=f0dba85933bea426791cccae2a08c083057fb392cce26d98ab70015833bc2888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXO3TIE%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDsOcl8pZ8TQQZlOi2J1YXl1y2d2HSi4S9Ooc92UyLRjAiARbD3sfKY5qfuM1vUPf%2Fa%2BSSwKmf8r%2BVjSq%2BF71BN4BCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMQal7ElIHYFdv9xU3KtwDcjZKjUldo0NPn1nLcQNKkYhsY%2B0fW0UWgWa5lIhhHOlvBSOybbC1KcwJBiw3yWTfPPwrGR1GeLCcJvYYAZjrKoj4zLMVd1N8Ju%2FAEM8PRfARqrqDp4PriJv1c2KRgxqOKF7aHVL3Y%2FmppeW9MFSe5NHefyfUL%2FlrbaPjpz5N7dhfGmnKuDzXaScBm85YByjxRz78YrwIdFwrqvMQDYR2UkjQ8wfO5W1FmV6yUXNeFwCjQ%2Fd8xf1M8FL0zaLtC9AzPGza74opBib5uo9Lfa2iSbCIS2Behee296fEvBO1ah9MQPuvikrxj9iWdDTRzSyvF%2FypOZf%2BfwwJ%2FmHDGm50Pyz7Zuu37SSD%2BC1yPksWIuwjlmC2Pe51ph1HNRKW6rJm1ssoQ88u3EtlwQ%2B7gOIpG8nQkBsgWrRJE7fn3QjG7Hzk7RZQxIDHUpporWCo5zjD59IMdhuoBU1cEU3kozIWHP50o88DgZ5Vc8fAwjG0elp%2FtmgYyzCLBG6qojfoyOr6t1R0tW5WPFBWbUCv9thVDdwSOSoTvxm9g0FlN9oH5cjQ%2FVjqi1m8zgOVA%2Fbi%2FZQE6t6twF9V6yp3BQ8tipfBGv1QZp%2BZnTF9T6O3pIl0ZHnClXPeSx079CCoM7Yw1bqszgY6pgFvOr9WluOIzqWA5Z2aUYQnDdGLxinD4rC5Ucizu2BkTrGMzld%2BqeyJvi%2FbFCSTsbjKXZwXBzyuOyfMFCpPAcNMqu%2BRIcxdaDOd5fay2ttO8sTGHNsSV%2BUA0rfWYvCZuOHj91WntMEq8SRaQixjNNz5yUV%2B7Pc71nqgSd4gMwuJtMtU3GnYOlTbAbw%2FYpRjezyZ9Ff96hjoVAz2%2BXQZzDoj70en7PZo&X-Amz-Signature=b548346c77c3a2d036a1c3ca6b06dc2f84242536524a553dcf5ebd3e111aed74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5DLEVHX%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJFMEMCIFAa%2BzTjotNIPqdVZBC%2FSt0aXotl75e3G4gZPrhvzpaMAh9kX96aZcwQK%2BNv%2F1UTAtXaGBtmqK2Y4qbhEkVCIS2VKv8DCDIQABoMNjM3NDIzMTgzODA1IgwxTsQd%2FrPy6x%2BvYOkq3AOgELiVJuD6HzyoEJfNv7BVW3WIC6xisI5H2OsCU4kRBtczZ3IQiPqAT9fWvvQqS4zTUh2jzILJ2LcO8db%2Ftb7xNkba9cR%2B9sPk1ZwSdsJ9KsDp8doFZAr2UvI3IRRusdUW5xkB%2FFPhF0WzekgfDPdJfyJp%2BR%2BIy9WtReskRysM7LvswThvDwv33Ds4J7HZ3RLRrxJbESK3sfa29pbSHR%2FSkeCIYI2vrc0oCuiI3UpsqgTUqrQmtIomBK6Akn0W%2BlItfnTKml9wMDsgSzH4v9s8M4jn230M2TAQlkQjuQrIricffDgsGIinKnqq35DWRTonARyO8cdF4PQKrHQpbnLp3Wtp4VtY7OXTJegG%2BpHVZ%2FnBBgYleU2psZGfr%2FzjNlgPDtDVbg9qKDKFha9B8tj%2BYXTzlZHw3B1jj5KdseiyRtHKHvHlRItvk4%2FHu8obwkU4BDchdaWwlGsfuKZfKNPMlwHcBXenEka%2Fz0J0HQ2aQ3y5uYsGb79M1WuHmqqIoScMzSm0SDYX%2FrZSCsbbfA4%2F16WCiSNwN%2F6%2B6UvQQpmYNGkTsyaYon136es4DMEs0WgtI67aEyunSeE2FYjIOpzWwm%2B6NQggs26nMn3IwlUzKjolRT%2FvqdtXJqbiNTCYu6zOBjqnAZFWDIzhpxXDzuw6RtHnvWRIUgiTYa5qVCCwmfRgztxnqrhSNcayFUiVqe%2F6f86nePBa0PbuOlWzAkanV%2Fr4yxHwfyG1fM%2FFk2UBstrHIBtL9IRoE%2F%2FRlVOqqjqDE5mfm6hET0WPs6R9hTPMaG8mF9cz1xFX%2BcDwlB%2BVfVXOuY6HzQdMScVv3brNgdBkyriqFGJmXf8U4K4IbnwQq2Ff8GZwwM0Ldpih&X-Amz-Signature=974311e9be7879bdd42f70df9915bca756702510794ac1fb95b671d0a47503b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T7UYHDM%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsUVsgNEqeREBzz6Xvudx3T0S4%2F8wQFo10aMvm40tpHAiEA6jIo%2FjZpDrj1bB1vdwtvxcad1R%2F3%2BMW2cwL5OFb6oK8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMUExt4BFrGhtHlpdCrcA6ktvv7KHkEAYaQyggcycRW4boCjeZytBxwacrtgMx%2BCsS72PVcYoDpGQpH4AH4y6inmkoy3%2B0xijwzXPk6FRTvN%2FK0n4CFH1it4wVSTC5LEloINTCN4QcPGqJ4CLUEmMN1QEK2dQnxJ8Cs1EUDb6jA5fgCb%2BE9OP6wBdmQr%2FjMiOUsoQVWXsdFPUuCtlBEpraqL%2BBW8pU1PSi7LHoF8R7lq8yp6VaitBIr%2FOXWTkzHlh0PbY%2BM7jQ5MOJ2BRTdAtY2t3d6Xjkcg2nCfx3%2F5a2Zns6oxEzkPySsh492dD%2BYSKumicXuAUHSg1PXN1cpR3TdD9KrBJA6piSs%2FiZerY2wMVMnG87tkELjV1OSwWoK8HA5rXRPxs3aHzSata1As0oPdxpih0ZlcpLKaud3ceiprEiEl%2B%2BeM4gfCR1JYBElDquro1a6t%2FwoNkNS8gQh3BAaND0H8C1qX%2FepGmqb1ETioSZ1LuJnSYTpeSu2NsRhVhe7ogQFSL4uTEqXjgj0QAMD6nYdSbi9tAwyfhJeK0HqJ4OC3jKx2Lv%2FJLrQGFaexJGjE7i%2BCv7A3Q3dHbM8vRAFutrIiEz8D6%2F9BEHLVY9szG9ntCa%2BQjGEK03dgz6cUbMLJ5co2xX8cg8eQMLi248UGOqUBT%2FVWrcyaFYE43Czr%2BA1bTkIEeqCGT%2BZ0SIkPS8FYwtTmhfa47I6toJ6zUIv%2BouVrygGgLRvOQvXnWbbbKXOFhowdMIhNmLXdPgCcEcqVIksVL3Kj7oNl%2BeITKxzfKCNk1A43V2k6r%2FBTzVv0emFxTiqjQtItnnvfR7HzcUa6HlJKw%2FmYwvJkX69ShVKbuBuJg5c5N8SNBBCq%2Bg5299Wwj7DTHuZd&X-Amz-Signature=b001bde3b7e6178b8e8ada1189ce499ec89197dfbb3cb93c10cef7d4f456b60e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZQV2GFH%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAXaULoflKQ2UqM30FA70UhUBOoLNXLEX0NIUiy8vZdAiEAglJ6bevp6WwlZFaFbEdUgBCmAmFbhaDJ36DbOwB10Lwq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLshc1%2BZNnMkCq8UXyrcAzwJVLsg6q0wkfzPp6N7V5gf7UfuHwT3ZL9iAkeo4B4EE4O%2B6ndVIi4aftzgF2RKg4oldjVJz0hIgozjGQpBWvlTyWYnLhFcZouL9zBNpuvuzRCX%2FUpsAZefmB78rompfxl5q5RLs%2FfIJh6LhNh4bMMQfhpyxG8pVFTjckp3KIe3chi5aql4K1WQorAu4xdS86rltahxpDEvCszv%2Fku9KNtt74jqrJ3sIday7Uot%2F%2B43kvVsyLB15If%2FfXWXgGlXrSK%2BhrmZtiPde%2FwLFTh44Xh2xdU%2BqYCkq0Lq8k5tZsNdeAQZQMzMfHpwxKhOACb8n%2Bf9lqq9W4MR3UPtp7rmy3iqJuhJ9vgzR6NalGkXfu5xYfyjOZovFwCvBvjW%2BTOgRXPPtzDqFoHtNu4pQT3nmSaRMHF2qKTK%2F7i7P%2BUTqE0SoeMrtYxtyksUrIixXlTXX%2BG8OuMOXw1QdMg4Rg8m0oIyzttaFK7HCblXgeI62ATppnzhRucaL1EmWaC8M3D%2FrRcGYpd3i3%2FeG20QebgCrcnKWfYclXpqTw3yXs2EaRw0ap%2FeZl5rdJKRPPD7W61CqYf3F9PUINsT3EECLvnO1W%2BrKW0UMHLL9dEacnIGFyMpm53XYRTAq78YOKHrMJy348UGOqUBpg3HoVxJJdylXYGaFJ38UC5LCAF4aJ1FKuBqMTAATPR0KmAfEujIuoX1PF10Xz9oyFnlX6nyQMIPyJkhqyY%2FqtoQIy%2Bany6Xf6aiXdxMBP5dO4OSaH82lEJyOaQSb8r%2FnLqvxrmNIy4PAbaYcwLK7NV8gSBmubhOx%2F9SL%2FPtcdbGE6hiof77hKMTt1tRSo%2F7asuJwP%2BZDeA3VDOOlb4gTwC5SgDi&X-Amz-Signature=ced961359473318dc3e8b3f782e021a362c7d64983e8a8178816c7b0ce2a2f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7REV3ME%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvFkONRHRTqklyR5APh%2FVOyW7v%2FedB5PTT7Xzlo%2FqtqwIgVmlP6mM0biE6gYCX8LhNJnjPe6br%2Ba%2B9Dud0xKBYYk0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFeUtTcWICjR%2B2K0tSrcA5erM8d8ZAWJsFixBS3M8XApVFhqQikhRqUN9AC%2FqNczZCw8B8mRQQzcM6icBCM9Ok2WkwZxwpKvWuJp%2BW9PAPjOZttnK95HLGlkUZwF%2BQQtGZH2nXEiH5lArVlf%2BxXbXT7cfgZIQ5fwDAxq32PDF1PLdKwN6wZAxgN5POYI95R%2BPn%2BVA0ZgyFcrANjmUo%2BW4O5gtSlmtevovc2r61B4LFk%2FKUtzYD1%2F8BHrHnzdL1%2FpWlmpl%2FezTUIp4J066MTqCbZorKq48rvK1Y30uqG0McTrLlRtjrqn4i6jDW4DPuaXwWNUxHWNSAGY4yohHCsQ02kpuezmZO2TeJnXL6OT5TupeGO%2FfkuPVZEPfI9%2BGR0D6796LvrkjjN%2B7JsvZcqMyWOCUTEpjxHDImTYMwxo9cN27sw8Iherj0%2BHrcSd7Iq4HUnG6f4ge7DV5Tz6EzV5hMzb8IZlLVnaICHwoj2REVykZ6ELPO3%2F1b6SjmPDz2yGt8guudsdPczgM6ughVtPNoOvMv7Kao6mBP4L6IMUEap6xI%2FYbx%2B77GweTzOqk79ZOStgER2eaDXKOqrSZBprRvIdebMMkc1tD5LtYze1rjOWUwc5bQzpgFhtboMmOUyobLD3sFDZacFnQt%2B5MJy348UGOqUBqvvICmN3i%2FL6pE97dNF3qPVcVC8R2BQkdG%2BGNjQqIVUH6A3wZLJFNES9RVCEBzzLTyf1z8CZfgQjtRrQbtkNMBYaeN9gsUa5XyebT41qi%2FbiP%2BlxKZZYp%2FoNxQlKlyx4QvEXVPnNiSQfNGay4zyNM9e8vWYa1w1m2CXCdvoySeMKQg%2BA2inVisGbpDvDDj9QzHGWFwuil6KzS7NB1DjZ98y01kIf&X-Amz-Signature=eab9c1277ed4d292298f400c5cab69f96081556dbcfec3577a6d27c8b45f2984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7REV3ME%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvFkONRHRTqklyR5APh%2FVOyW7v%2FedB5PTT7Xzlo%2FqtqwIgVmlP6mM0biE6gYCX8LhNJnjPe6br%2Ba%2B9Dud0xKBYYk0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFeUtTcWICjR%2B2K0tSrcA5erM8d8ZAWJsFixBS3M8XApVFhqQikhRqUN9AC%2FqNczZCw8B8mRQQzcM6icBCM9Ok2WkwZxwpKvWuJp%2BW9PAPjOZttnK95HLGlkUZwF%2BQQtGZH2nXEiH5lArVlf%2BxXbXT7cfgZIQ5fwDAxq32PDF1PLdKwN6wZAxgN5POYI95R%2BPn%2BVA0ZgyFcrANjmUo%2BW4O5gtSlmtevovc2r61B4LFk%2FKUtzYD1%2F8BHrHnzdL1%2FpWlmpl%2FezTUIp4J066MTqCbZorKq48rvK1Y30uqG0McTrLlRtjrqn4i6jDW4DPuaXwWNUxHWNSAGY4yohHCsQ02kpuezmZO2TeJnXL6OT5TupeGO%2FfkuPVZEPfI9%2BGR0D6796LvrkjjN%2B7JsvZcqMyWOCUTEpjxHDImTYMwxo9cN27sw8Iherj0%2BHrcSd7Iq4HUnG6f4ge7DV5Tz6EzV5hMzb8IZlLVnaICHwoj2REVykZ6ELPO3%2F1b6SjmPDz2yGt8guudsdPczgM6ughVtPNoOvMv7Kao6mBP4L6IMUEap6xI%2FYbx%2B77GweTzOqk79ZOStgER2eaDXKOqrSZBprRvIdebMMkc1tD5LtYze1rjOWUwc5bQzpgFhtboMmOUyobLD3sFDZacFnQt%2B5MJy348UGOqUBqvvICmN3i%2FL6pE97dNF3qPVcVC8R2BQkdG%2BGNjQqIVUH6A3wZLJFNES9RVCEBzzLTyf1z8CZfgQjtRrQbtkNMBYaeN9gsUa5XyebT41qi%2FbiP%2BlxKZZYp%2FoNxQlKlyx4QvEXVPnNiSQfNGay4zyNM9e8vWYa1w1m2CXCdvoySeMKQg%2BA2inVisGbpDvDDj9QzHGWFwuil6KzS7NB1DjZ98y01kIf&X-Amz-Signature=b08be153d26f42cc4301c65aa34327ff8b566cc30a9cbca4efa82e1cfe29dfd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZQV2GFH%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAXaULoflKQ2UqM30FA70UhUBOoLNXLEX0NIUiy8vZdAiEAglJ6bevp6WwlZFaFbEdUgBCmAmFbhaDJ36DbOwB10Lwq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLshc1%2BZNnMkCq8UXyrcAzwJVLsg6q0wkfzPp6N7V5gf7UfuHwT3ZL9iAkeo4B4EE4O%2B6ndVIi4aftzgF2RKg4oldjVJz0hIgozjGQpBWvlTyWYnLhFcZouL9zBNpuvuzRCX%2FUpsAZefmB78rompfxl5q5RLs%2FfIJh6LhNh4bMMQfhpyxG8pVFTjckp3KIe3chi5aql4K1WQorAu4xdS86rltahxpDEvCszv%2Fku9KNtt74jqrJ3sIday7Uot%2F%2B43kvVsyLB15If%2FfXWXgGlXrSK%2BhrmZtiPde%2FwLFTh44Xh2xdU%2BqYCkq0Lq8k5tZsNdeAQZQMzMfHpwxKhOACb8n%2Bf9lqq9W4MR3UPtp7rmy3iqJuhJ9vgzR6NalGkXfu5xYfyjOZovFwCvBvjW%2BTOgRXPPtzDqFoHtNu4pQT3nmSaRMHF2qKTK%2F7i7P%2BUTqE0SoeMrtYxtyksUrIixXlTXX%2BG8OuMOXw1QdMg4Rg8m0oIyzttaFK7HCblXgeI62ATppnzhRucaL1EmWaC8M3D%2FrRcGYpd3i3%2FeG20QebgCrcnKWfYclXpqTw3yXs2EaRw0ap%2FeZl5rdJKRPPD7W61CqYf3F9PUINsT3EECLvnO1W%2BrKW0UMHLL9dEacnIGFyMpm53XYRTAq78YOKHrMJy348UGOqUBpg3HoVxJJdylXYGaFJ38UC5LCAF4aJ1FKuBqMTAATPR0KmAfEujIuoX1PF10Xz9oyFnlX6nyQMIPyJkhqyY%2FqtoQIy%2Bany6Xf6aiXdxMBP5dO4OSaH82lEJyOaQSb8r%2FnLqvxrmNIy4PAbaYcwLK7NV8gSBmubhOx%2F9SL%2FPtcdbGE6hiof77hKMTt1tRSo%2F7asuJwP%2BZDeA3VDOOlb4gTwC5SgDi&X-Amz-Signature=d53111d0e0c535f07761318d3712fa0aaf4a8a7b19a984c4a4195cac58160cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZQV2GFH%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAXaULoflKQ2UqM30FA70UhUBOoLNXLEX0NIUiy8vZdAiEAglJ6bevp6WwlZFaFbEdUgBCmAmFbhaDJ36DbOwB10Lwq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLshc1%2BZNnMkCq8UXyrcAzwJVLsg6q0wkfzPp6N7V5gf7UfuHwT3ZL9iAkeo4B4EE4O%2B6ndVIi4aftzgF2RKg4oldjVJz0hIgozjGQpBWvlTyWYnLhFcZouL9zBNpuvuzRCX%2FUpsAZefmB78rompfxl5q5RLs%2FfIJh6LhNh4bMMQfhpyxG8pVFTjckp3KIe3chi5aql4K1WQorAu4xdS86rltahxpDEvCszv%2Fku9KNtt74jqrJ3sIday7Uot%2F%2B43kvVsyLB15If%2FfXWXgGlXrSK%2BhrmZtiPde%2FwLFTh44Xh2xdU%2BqYCkq0Lq8k5tZsNdeAQZQMzMfHpwxKhOACb8n%2Bf9lqq9W4MR3UPtp7rmy3iqJuhJ9vgzR6NalGkXfu5xYfyjOZovFwCvBvjW%2BTOgRXPPtzDqFoHtNu4pQT3nmSaRMHF2qKTK%2F7i7P%2BUTqE0SoeMrtYxtyksUrIixXlTXX%2BG8OuMOXw1QdMg4Rg8m0oIyzttaFK7HCblXgeI62ATppnzhRucaL1EmWaC8M3D%2FrRcGYpd3i3%2FeG20QebgCrcnKWfYclXpqTw3yXs2EaRw0ap%2FeZl5rdJKRPPD7W61CqYf3F9PUINsT3EECLvnO1W%2BrKW0UMHLL9dEacnIGFyMpm53XYRTAq78YOKHrMJy348UGOqUBpg3HoVxJJdylXYGaFJ38UC5LCAF4aJ1FKuBqMTAATPR0KmAfEujIuoX1PF10Xz9oyFnlX6nyQMIPyJkhqyY%2FqtoQIy%2Bany6Xf6aiXdxMBP5dO4OSaH82lEJyOaQSb8r%2FnLqvxrmNIy4PAbaYcwLK7NV8gSBmubhOx%2F9SL%2FPtcdbGE6hiof77hKMTt1tRSo%2F7asuJwP%2BZDeA3VDOOlb4gTwC5SgDi&X-Amz-Signature=2d52e7255e715d398dc4c91ff1d69023a68de2c6a8cc5e082688ed7f44061360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSVEJ3K%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEJQL%2FaOSY%2BpuhSwbK7z9Nj%2BYPfXsiw5rgtRmvYlQcAwIhALVh9qAbk3LQpqyc53mHAYPQboFFyk6wLMB4je%2FRPbojKv8DCFIQABoMNjM3NDIzMTgzODA1IgwuDFw8vsgi12279d8q3AODm9x7HrwKwk1p2MVS2ojpDNbov%2Bn8TU%2FaKNBcERZmgfhQ1atBBE3x8C%2BFXcEogsOl1xuOJicgNGnKPeQNK0hKJeGUqgInWo6ZR%2Fbfhvq6UWDDD2aFLAXQXe%2BpPargURSkA5Qs0bK%2B8j%2FIbfQ559MZ15O%2BJW10TRkygBmq8zL4SHFeZTvCMgHPVqAMxxYzz%2FSioLET82f4DrzNDbxG5jLOGXFOotlNmtSB0Ht8MpxkRJA3X4RwJdOgtg8HSe%2FJxjZdMWfOtFyQAPIrr2rI9a6tLMxY2ZOI%2BsxiGjrflSxSejHVvLJkbkNPjDTxR1OEGaX%2BjLsBg%2BYFgEuDbIaeFt2nagQcGXc3zIsZiguAy1438CQgl1FUkP6eYbMBkaR6KGGV5EHm14Mop0isD8VkJkae65fwmje1xM%2FuBJ3qDjk3jKqbLS4qNhjrQhNzJ%2B92XhpZO2jLrjnn1F5ZhmHpa9UzuJmT7RpUeaQGRxRVV%2BOqHKQUGzKS0VvQBpm7%2FXATb21Gc5hMGNptbyDL880Ixl5jb12InZIZMlo9eDDrOJqhUUmmzpPbWao%2Fk4pfLtSWc%2F%2FmtAuGSJrjGXmH3DIb%2BI53EUdVZC76mB61pc1%2FLNRHDhu0aBmamX2cOFmiFzDut%2BPFBjqkAVzKjiIQC%2FeUiQl1ISU93hCFpoczuNmcxgMFEY%2F4PxYb%2Fi281h1KVG5VhOfuS%2BhgW9xeSNIiDgtFjtIV%2BeCrcQTxHJoktaTRdEzXE6vLWrWtgJztwwIZYauYsj%2FbbS0jHaBpfJsUxghs9afpjYVrl4keSaw6WjJv9woLHTkekL5s%2BIXme4HjgnI%2FXZ0D8ojgrWrYzvMQFUtiCtzM4uHfrDhlVw3k&X-Amz-Signature=36f03172d0d13116a05be4d50bc0ca4258dfc27dd55905623ca0f05f29da4926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

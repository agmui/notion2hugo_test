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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PCY3LH5%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCI6hA6qrQbl3Axie6WuaPpyHCUq6FF7FXC1BG9cRTNPQIhAMeV%2FNDhSifjyYyL43dQGcZuCgCEZ%2FyvIOmzYVHomYSfKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFxInTTRGkHKVrZgkq3APog5no6IeWDZNGicyWl7T3%2FbDKMhHyXXtLMHWTKO23zEWmyi1GISEEjvmMn1OQE7ZRRPZ9zcQijkpb5J7SQH9%2BVs5cg5zZyz2GfDVohHaIfAHD4EBq7BJeMXkzjvUSVKjK3IO%2BOPRItj6nw%2Bf1yO7EEKDxR5m%2BCczT75ruHfNiZcmKY%2BuvaaY4lgBd%2BtqPVQk%2FS%2FNFihWg09K72uolEtT9g64XzVZOIDi7P5aSH8Oph2YsOIW%2BkxtXbv7oIznD8%2BotfNiEeDpLi8qkswihxlTzPfxpHS7OkTRlCTjElrdWtbEIML5f%2BJmOX5gyv1otYBXmQzqp%2BMs25odOWp23VNebaqxkgbr%2FOQ600RB7t5J1QCTsgrDkiax7vzhs0YsvaGL9%2FS4SkYU8aF33ZPhP0i35Dmm1TnvKD%2FcHJbn9LTe57AvSeyg8pC8l1FPrPgF9kBAUvzTnyvTdIUrrqZTcXMYJ2O8QZ0AZ4yHy9rxiZin%2F%2BZ8G%2Fi492a5p22lj9G2%2FW5xeIX9zV5bJyKqdrDM%2Fc5r9Sac4nISys8N7HyWwRV1DZnKSboHeqXhmfp1%2FIu34YgFwN%2FSu6IyUlJ8TtGDmfRDOD0qGCmOgJw%2BItRUJtY4LsdoSBtD5K4rkJQCrXzD%2BxoDTBjqkAZnnwYrIdqASw%2BHvfQgX%2FO8XZAovwtYatWjnSvKkTsR1jAtUyj54Bv0fm6MXGBkaQlmP70E%2Fp5B5E3fDeYQRmAJnm2OtyN6Yd%2FWOW%2BRoygZmwd4Xl5PUzi6Wr4CF1qmEm4widCZr7UK5MHzqhr7BqF50Qy0W1Z%2Bba2eCaR%2B3OU5hxg1T0lBW02eNb60DluP%2BqAetNm%2BX9rqOi9wmxmgDBA0ajJWn&X-Amz-Signature=f9e7ceb44a3a3cfb8f53f625a0261dcf36255a7d9651a8fdf9c6700f46770c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCZCU7Y%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHnmog7CusTwyogVov%2FkU3CU1897%2FhvVehoLDrr9yY8EAiBebVxtuN5uRmniN%2B0onpRfmphiN3TEd%2B3AE5WrPljs1SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU9W9zUxNcAahwWpHKtwDUN9MKOJyUkoGLkpQTjbfdXomk0fMWwjfynLZmHbEybZMvE4AMBbjH%2FFBwfLil8Tb5e2itkNJX%2FPSnNF8XBHHSiNcj1MrKdEanPh0qgKOTb%2B%2ForAUxFkThz2UINQPwdh%2Bl3lZnkk3GOcoeYJZXeHn0SYyucUmYv4zncRDUnRzXe5eXLg63QQEhUHz0%2B58MrEOetjd0J1WzzpG37MuPYfeuXFVFALrwt1w8xCtHkxSVWWEHaT%2FdKe2lsVQ2lEeUsDY%2BnVX%2BBk%2FxYUj3%2BN2X6mww4mlfO%2BpFNwGuVQROT9X%2F5HUTWspW03XEQ0uDD5DRpZMIY7D8vxDfksstLa%2Btsyz84KAqMY8CHC7cmfmxUfxxZsXyRp8AvNkQMapM%2FJG68MzOuKel2%2F7oAbYAl1WBOxINn8grnh5KP5pYCWhT%2BejdbiLjy6rGcDVKX5ITcjTz3GtVMlPhV4pylI8gjMEjZR5GbDh7qn4RjvoGfUjYFUhne1xzEr5xu46xILs9jJZxQ9MPKIlC9Zm0RydrGHXMD1ZhYuGDPoGhhlt%2BqkCBLxzVx271MvOYzz3BL3qhO%2BhgJZ4uBYGy10XcC2XACau5Dlz5mytZc26vP0zFBEqkeopxWU9AVT%2BEAl%2BlwypMzwwmMeA0wY6pgHY4T1tstjEQ244NaCvSR0rXu3nO0WJojdwoOYnhGdw%2FZA5b1bZpHgx8HuSBNTlqmMAq5UYzy4uxy22WOeeKp2b93vla9CugNEtwn%2BffsMePhd1zMFOXxGPi3q0mC7C2emZwFXQmVGdBgs%2FH6CbOih6kpl7JYTtDH9gel4zi17XrKMETUA3%2Fhm303T5ssWwiS%2FX0I%2FuIRLzi09SaPMDL%2BenAN06gUd3&X-Amz-Signature=d31a2ec5ef2a992f784872b57829e9c4d3133a19e5192f4b2ae964425e7bf6fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYVWNBMX%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDa3cMRIgIhhrIPboPJbaO9GPOCnmRCGBwnPl8ZP0riQwIhAOXshYjj129nRxzeAA7RRZ2GLRPH%2FsqCZ0C6V32Xa9rQKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWAD0%2BZnW0NSopPgEq3AN%2BqZbgrpKWmjkmq6Eh72EnW8UNNDOmKYnAhNT5V03l1gQqkcj%2BIyEzFaQCNB3d%2B6ybZrKQm2VwQMAEDBZwfdcZlweNCpbXe1NLmt422voJtpXHYVb%2FILJNDUV3qI6j4fkKWsjKqP%2BN02C99wch7j9GtYEuDV9aRO%2FpuaHgTJUF8Y5DQywzxsZ65DmNroiJ6aImQNXyUlDKDSyhDyJM2oLC8hmkDVovG31wFzwgr%2FqgRAE1kD34jW2CIjNTDXdcZrfq%2BTdwaEJygAskMfEMim8N3S57j%2FrJIsLqDUHabdWpuOAggtyGhEIIF%2FdcVf%2BsovpkGsnRci28WJRfezsjR8awLBeRGLgmWVaRBMtBZxxaDnvvLepc0RlwmYTq6gId%2Bj5DLPDu6Y3PZLv2%2FhMqQsMX9S6Y%2FlkGr8NHyOjmY7tCnb%2FSP21eeEpq9zfsu0g508XKpucWF8Ao%2BaalA55bRN%2Fx0LMHaj2sFD1DCjXFERHuLDuUo8jSlCtxWMIl%2BnFdKLCeOhoH2lcIKdnVUnqWUsbcduVfJL9%2F6LRxVNLUF3VnTCvWt1HG%2B%2Foyk6HaVbiv%2FUCRKkzZ4JvWZybnN6MLDd9GjW2hJCSuuxEbVI0%2FURX8HlAN9pFkTlowFwcgsjCtw4DTBjqkARYxF4DtXHaogSAvwKnzPKWYIkWWh1XrlRxt1IOh%2BuvNjbjnMPABWXknxQ3VLuTVIzPbd%2FzCEGe3KsjY1JoZao35fvVj%2BO%2BJUFI4CMs9%2FihlbxIMiWmp0WL%2FZUzAJxdIhQq%2B7N3P7PVuKvouFwSb0FEThpVo6K%2BszVHRI6dAGRYZ7OSUJuYdhCQ%2B3D1SCi4pcFkmrexPAdzM2M8lpir6vMlgNYaT&X-Amz-Signature=d47ecdc1f75de28c81ae3cdcd95c521746a8b4f501619d89135394f6984c4812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYVWNBMX%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDa3cMRIgIhhrIPboPJbaO9GPOCnmRCGBwnPl8ZP0riQwIhAOXshYjj129nRxzeAA7RRZ2GLRPH%2FsqCZ0C6V32Xa9rQKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWAD0%2BZnW0NSopPgEq3AN%2BqZbgrpKWmjkmq6Eh72EnW8UNNDOmKYnAhNT5V03l1gQqkcj%2BIyEzFaQCNB3d%2B6ybZrKQm2VwQMAEDBZwfdcZlweNCpbXe1NLmt422voJtpXHYVb%2FILJNDUV3qI6j4fkKWsjKqP%2BN02C99wch7j9GtYEuDV9aRO%2FpuaHgTJUF8Y5DQywzxsZ65DmNroiJ6aImQNXyUlDKDSyhDyJM2oLC8hmkDVovG31wFzwgr%2FqgRAE1kD34jW2CIjNTDXdcZrfq%2BTdwaEJygAskMfEMim8N3S57j%2FrJIsLqDUHabdWpuOAggtyGhEIIF%2FdcVf%2BsovpkGsnRci28WJRfezsjR8awLBeRGLgmWVaRBMtBZxxaDnvvLepc0RlwmYTq6gId%2Bj5DLPDu6Y3PZLv2%2FhMqQsMX9S6Y%2FlkGr8NHyOjmY7tCnb%2FSP21eeEpq9zfsu0g508XKpucWF8Ao%2BaalA55bRN%2Fx0LMHaj2sFD1DCjXFERHuLDuUo8jSlCtxWMIl%2BnFdKLCeOhoH2lcIKdnVUnqWUsbcduVfJL9%2F6LRxVNLUF3VnTCvWt1HG%2B%2Foyk6HaVbiv%2FUCRKkzZ4JvWZybnN6MLDd9GjW2hJCSuuxEbVI0%2FURX8HlAN9pFkTlowFwcgsjCtw4DTBjqkARYxF4DtXHaogSAvwKnzPKWYIkWWh1XrlRxt1IOh%2BuvNjbjnMPABWXknxQ3VLuTVIzPbd%2FzCEGe3KsjY1JoZao35fvVj%2BO%2BJUFI4CMs9%2FihlbxIMiWmp0WL%2FZUzAJxdIhQq%2B7N3P7PVuKvouFwSb0FEThpVo6K%2BszVHRI6dAGRYZ7OSUJuYdhCQ%2B3D1SCi4pcFkmrexPAdzM2M8lpir6vMlgNYaT&X-Amz-Signature=d273e64281cd2d5d39b5a520705b077a0e7e563bf518a5f1ddde78ccf79b8f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCZCU7Y%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHnmog7CusTwyogVov%2FkU3CU1897%2FhvVehoLDrr9yY8EAiBebVxtuN5uRmniN%2B0onpRfmphiN3TEd%2B3AE5WrPljs1SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU9W9zUxNcAahwWpHKtwDUN9MKOJyUkoGLkpQTjbfdXomk0fMWwjfynLZmHbEybZMvE4AMBbjH%2FFBwfLil8Tb5e2itkNJX%2FPSnNF8XBHHSiNcj1MrKdEanPh0qgKOTb%2B%2ForAUxFkThz2UINQPwdh%2Bl3lZnkk3GOcoeYJZXeHn0SYyucUmYv4zncRDUnRzXe5eXLg63QQEhUHz0%2B58MrEOetjd0J1WzzpG37MuPYfeuXFVFALrwt1w8xCtHkxSVWWEHaT%2FdKe2lsVQ2lEeUsDY%2BnVX%2BBk%2FxYUj3%2BN2X6mww4mlfO%2BpFNwGuVQROT9X%2F5HUTWspW03XEQ0uDD5DRpZMIY7D8vxDfksstLa%2Btsyz84KAqMY8CHC7cmfmxUfxxZsXyRp8AvNkQMapM%2FJG68MzOuKel2%2F7oAbYAl1WBOxINn8grnh5KP5pYCWhT%2BejdbiLjy6rGcDVKX5ITcjTz3GtVMlPhV4pylI8gjMEjZR5GbDh7qn4RjvoGfUjYFUhne1xzEr5xu46xILs9jJZxQ9MPKIlC9Zm0RydrGHXMD1ZhYuGDPoGhhlt%2BqkCBLxzVx271MvOYzz3BL3qhO%2BhgJZ4uBYGy10XcC2XACau5Dlz5mytZc26vP0zFBEqkeopxWU9AVT%2BEAl%2BlwypMzwwmMeA0wY6pgHY4T1tstjEQ244NaCvSR0rXu3nO0WJojdwoOYnhGdw%2FZA5b1bZpHgx8HuSBNTlqmMAq5UYzy4uxy22WOeeKp2b93vla9CugNEtwn%2BffsMePhd1zMFOXxGPi3q0mC7C2emZwFXQmVGdBgs%2FH6CbOih6kpl7JYTtDH9gel4zi17XrKMETUA3%2Fhm303T5ssWwiS%2FX0I%2FuIRLzi09SaPMDL%2BenAN06gUd3&X-Amz-Signature=a34db1629f5c61583f8d7e6f27e175ba75fb894897b353244b53ac9f010d7443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCZCU7Y%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHnmog7CusTwyogVov%2FkU3CU1897%2FhvVehoLDrr9yY8EAiBebVxtuN5uRmniN%2B0onpRfmphiN3TEd%2B3AE5WrPljs1SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU9W9zUxNcAahwWpHKtwDUN9MKOJyUkoGLkpQTjbfdXomk0fMWwjfynLZmHbEybZMvE4AMBbjH%2FFBwfLil8Tb5e2itkNJX%2FPSnNF8XBHHSiNcj1MrKdEanPh0qgKOTb%2B%2ForAUxFkThz2UINQPwdh%2Bl3lZnkk3GOcoeYJZXeHn0SYyucUmYv4zncRDUnRzXe5eXLg63QQEhUHz0%2B58MrEOetjd0J1WzzpG37MuPYfeuXFVFALrwt1w8xCtHkxSVWWEHaT%2FdKe2lsVQ2lEeUsDY%2BnVX%2BBk%2FxYUj3%2BN2X6mww4mlfO%2BpFNwGuVQROT9X%2F5HUTWspW03XEQ0uDD5DRpZMIY7D8vxDfksstLa%2Btsyz84KAqMY8CHC7cmfmxUfxxZsXyRp8AvNkQMapM%2FJG68MzOuKel2%2F7oAbYAl1WBOxINn8grnh5KP5pYCWhT%2BejdbiLjy6rGcDVKX5ITcjTz3GtVMlPhV4pylI8gjMEjZR5GbDh7qn4RjvoGfUjYFUhne1xzEr5xu46xILs9jJZxQ9MPKIlC9Zm0RydrGHXMD1ZhYuGDPoGhhlt%2BqkCBLxzVx271MvOYzz3BL3qhO%2BhgJZ4uBYGy10XcC2XACau5Dlz5mytZc26vP0zFBEqkeopxWU9AVT%2BEAl%2BlwypMzwwmMeA0wY6pgHY4T1tstjEQ244NaCvSR0rXu3nO0WJojdwoOYnhGdw%2FZA5b1bZpHgx8HuSBNTlqmMAq5UYzy4uxy22WOeeKp2b93vla9CugNEtwn%2BffsMePhd1zMFOXxGPi3q0mC7C2emZwFXQmVGdBgs%2FH6CbOih6kpl7JYTtDH9gel4zi17XrKMETUA3%2Fhm303T5ssWwiS%2FX0I%2FuIRLzi09SaPMDL%2BenAN06gUd3&X-Amz-Signature=fb3aac2966ff7badd07503f94c9b9e3cc7f09e6c5a61219049f1238dc2e7e6e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XMCFLP6%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDmPk15ctsATJdUsJI5KfAcLtdKTD7f0UI4uhvbrH9ujgIgYABQpIkq7fWGTpyMBhhFwa7aXRh%2F9NHUhRy0vTCOs2cqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEC2BOTKyAz0JrYwuyrcA1ZI0H1Q8ss8GJbdA%2BjPRmKYEr2czY4SHqKJ5Ocp%2F4Qzr7yH3Wc%2BhEm7mV9VKmHCi2jTgz4S1XW%2BgcE%2FqeJ2BR6DQQThlwZOEgJTGO3YiYEjCFWhafxRcIIqD%2BFH0PglWDFCmjAkURWSSPQHyhuviEEm161jY6qWFWaf7hoon0pPZ5OILjtJu%2B6L%2BgwprX7tSqe72UJu%2BNEkNNC7Il4teyga6fj6Pk7C8dcA%2B%2B7XViBvPkXjeVWIRlPTwq8D%2FhjgeLvhWEmFs7%2BEON2lbWq38%2FHZo6m7jZHgNPz3iOv4F50Aj8S%2F4PCG5UtBaQ458tGazFOfGG6F6C8KoxWtEDFkOlr2QUr51vWpdZNZn3FYg2c5DulXrBNhV%2F79auoIod9KPuepkFwu94Vvtw9F4mtTPU3jeYxtACn2WxdIiGqlXOsPFChspgeoY8POb68J01pqRAKtQZvdg8xy5GXry2LpD2wrunin4lBdhYRXupUdSNbOmLyurthCAIK0LciA7ozOzjxPgowxdl3cuculNedj8LKSUdLrRfBD%2F6TylSJ53tPX%2BQ%2Fj%2Bo4%2BQuZv56AxAjTtf8Koz8N%2FEq5bwEOqFsIaNVKXMUzbTvgtJnSu6AQmuqR8WCqdO%2BQIswNqwbNLMIPIgNMGOqUBBzmGIYzc0Irody7HUH8HeIAXvnR72oPyzzd93fA5RfGK88Iuaj786ClhMpgzW%2Bo5woXP%2F7JdivkmdkjWYZ5mCbiLJ64%2F0ulC1OZBoMMKgJN73Uc%2BcVVmaz6YSVHhf9IROnkCR8nX7h9wcbA7Yw%2FpnTB%2BQ4aFC43vy2kkdn5yLFap8Bo5EzksTPiDr9NPJLTb1BT4LW3vsY%2BnPYOrNtN7%2FcvVcIri&X-Amz-Signature=f47d22bbadd5aaddaf934b1bdf12702a340beeddfab8ce4c57f9e88eba8387a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

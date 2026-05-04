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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXWRYL2E%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKYLl3qmsldRejMyKT722Wfjk9sr0TEYKl6zyCLsej1QIhANSs76vuLdWOfDLTyS0u4em97lRwHsUBIAMtXBguYP3EKv8DCGMQABoMNjM3NDIzMTgzODA1IgyObNqGIvXtgWtyXhUq3ANg2%2FArfXf5oJmRy4jR%2F4hBL5dqHCcmDOS4OLxflYLI1DDqhQWWBpRCahGXdg%2FmjOGcSrWXrpGAhvjc%2FRg8hR96Vngv8bCyH%2BAW5aweZA0aBcPHmy8v%2BFj8auMQyBjxJZcny0wx31yltIg2R1GLO10jV%2FEjrojgyeVW7qGGb6QLeQzanJn6ybwNTQOQM0Uhzzvu8GanPiGHTi819iaCT7SeCGFsqV8iqWT9A9QMo0VY%2F%2BBDxLWud80EBIj6zmKMfe47jmx8OHmurLMPLvhs0qDdQDlXa%2Fbq48BkDCaMlmbkoj0Vlx2XQZkmzVQaUdpv17%2Fc7biN%2FQmwtPND0tU72UoSrqRMeh53CUr%2FKA8S%2Fb73ZRX1SNVYdVDTAYWDPxTas8q6RIvuR2Ok%2BO35WKf5SNsPxSMgXKFC5EdMPc7z0H49DoF73PjrqnV9YwG3PpVLixYQM%2BT4H8C4R%2Bs2aDkWAUJmWG4lqw1LNIR0tinQs8zXvXESshDAC7ciOsYMmNsLOPKewrauLSCXo3DwcgYYgP8Ww2Bd9J3eul8ecpCPtkdKgUWLHffVCmuHimLBRpVHZJ62zbeZ3LpDiCzgj9yFoYUTx45sZJa3CK3Ev6Kxm7wTM0lQFA8EaLYm%2FiojeDDA99%2FPBjqkAfWoiLwAEr6FJLYOOhe%2FecGBBhYMqHGHd3X57SsZmHsiieUpEvIcm5iCpuTIIIFmvlOSICsFfEGHfAomCu2e%2FeCdCSu4bCR1bVoL3HG%2F9%2BnGgPM6pcpgoM%2BDOG44oIH8OJqCMTlVwYRsbbJFUEfoBtIMDOHo%2BnmuFs%2FSyxDOEW0ilNXFCl3zTHlTCyJKo9lngjW6umnbwPoTSZ94Niwgo6g9Aj3q&X-Amz-Signature=4db95208a1212960e2a4bf3f75daf2f30d71a1d871a0a067e78bfa2eac64c67e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KWUSVNV%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXt%2BnMqMiklJIippCl3AsFw3lPpAH94nl%2Fh0yreEKn2AiEArFRFgEYeDkflzsxn8g9fO140Nfx0ERHPHoUvW2i1W4Eq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDNZh5v0rMXoQLx4%2FircA%2Bg22qOh3fwEIb3PY9e0%2BDqHBEGbi7KjBnIl6jxdIYrYRY8UJw2zfQN8nYy64%2Bo3T7g7xlUzMY7b297lIDUo8HXQSUm0nN%2BHPzLATlUTfxHD%2FydL1w3mIPsVB2p0uHKCT1xiVbrqKaj9xO%2FYp8CvOpJE1%2Fgr5k7uDM0sRH2Ur9xpJ3jxIdXyFkcd%2FEtytPvWV7CsmwbKogml7IQdsdr%2Fc8bpuz0K0N%2BXLVtXgaOomjVM5RW08Ac4l9uZvWrcu6yxzyWtsqJWywtQ2zwSbFPvn9Z3bB0RR4mgs%2FHr%2BzUcbhob1KMOPjstz6cpsYYKHuMzZJKmLgXo0BJhCPvmxoIzcJ6H234tB4Cxcsd9j%2BbNZCxBuuK8n8V51EPDiRhLofDKA8xYp%2BJ9unpnv1%2FdVIrU8GCY9WUETwCDyxSaNIyCufpKIxVYifyKf4Qf0GZD0KOprBdVi0quJvMrvgQ5HXnXUYCdmU2eUFflMtJUU62oQFRgkI56DBa0wnaRugMFgbUOAweGsBrgmCJwy0VJjEEQjOUbUIxa%2B01etVz%2BiD8x9FsmvEB5%2F%2B5W3KkB48T0rA%2BhLR%2F4HQywhtBVTE1HY2t8pw55xNVq9v0tVDw0Qz%2FocZZoUZ4H4oTUbf2zdXiLMKD2388GOqUB1NaTe3iLZp%2BLpgf1lFCSpiI2DoCdyXJSzYGDjHOivl8HLCeR263su6kX0xcsDgsiLdTu30iYa27UpGYOPDQ%2Bn6SASY9uVBeLXAhUtD6CHf1NAfug3Q3%2BKOWPwcjbYtJJDNoRw1%2BMh39WyTo33kL4mMbLXy5bglBCsyVOJblg7gl7hKN9zacElXn%2F7IO3dX3%2FWsTRdivNfsy4wT3dDScQbG2YR0H%2F&X-Amz-Signature=651ec238f463edeaa205620276cc638d3725f843532972b0f481f42566453874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJYJORJZ%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnU5Q%2BmSGAJ%2FFltm0rTkxASKfY79cVQX0Vc%2B3ZTZpHmQIgRTBdVDmgzCya%2Fun38ZcJTGtlwhYPz9I%2BB9LOW%2B9HAGQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMFF48JBXaPQGwExsircA6vnKCGFWXntYGyNqCSF7SWkzQP0pYbXbEoK%2Fu12LLPw6qmOBY1RvpjzrbPYe1XEnLwJ1JxS8lJpiTkFAuRp8iKTcpQKI6hPKtGzNVV2SNlZPBxT8Y8xl%2FKtzwu8CcRFjXEEpzkrzvpwwcj6jTWj5mDubaevzWacCO6nqgLptpWSpRwfDd4ZWaHgx6rSf%2BNH9oO9r0pWPfoQKAHSjfoMxsYzvwidoEFmkaK9rokZc3s%2BwxbdgWeHjYc8%2BVa3Lu73%2B3on8TG6qoly8fsFhVoc%2F6thD3TQzP2Jfgojbhd9nYeG1WIvCoEMCgC3%2BLhw4oDp9WE1GXcMEO8inXfB07JdF1%2Ba2j08z8Mrz8r536gPl5t8PzTDDthDPNRy0iyq6SoSl7Ogy8P1sekA5o8Ea9H9MC51kRtowSIgC3kApp39YtjLcnbi1AIPe38rC7ZbCExbUTYWVp0jx6nlZlrHk%2Fz%2BxYaiifx3chfHn2KSVgY314jWI2ICQDF8cxwfiTp%2BR06sBpAashuY3tz67AlVbgVoy59QKFeCGiWWnL1fCIXmSmvL%2FqIAooWoy5P79neiWJ1l4ZzONFD7WXH2BniwpyQ%2FjMRZt%2BT1n%2FN3rfSC5oMoPaqYxXn9of8ehwHBVJCtMNb3388GOqUBJcSyUjhzmWalsYR6XyGtPmmrDUL7nkhnx7HdiF64jqJhzdcZ8NNJzLii1%2FT77K4l33lMvZzAdL6HPFsWMxHY4JweGZZ4VS8I9iFs6vr659gKawdm15pJVpEtfD2xfqDDWjj4R%2FN0h%2BSMf0usAsbHVEYwKALWGUWFeti2gF6HMEIEDGFPJQo7RpjzQrNtM6dvb4iVNmcKg1G7XOv1o0YWQfLAfBi5&X-Amz-Signature=5052e4ba821a338f125aef70aab97f29537c300b24687675a9eeb561b4467b7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJYJORJZ%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnU5Q%2BmSGAJ%2FFltm0rTkxASKfY79cVQX0Vc%2B3ZTZpHmQIgRTBdVDmgzCya%2Fun38ZcJTGtlwhYPz9I%2BB9LOW%2B9HAGQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMFF48JBXaPQGwExsircA6vnKCGFWXntYGyNqCSF7SWkzQP0pYbXbEoK%2Fu12LLPw6qmOBY1RvpjzrbPYe1XEnLwJ1JxS8lJpiTkFAuRp8iKTcpQKI6hPKtGzNVV2SNlZPBxT8Y8xl%2FKtzwu8CcRFjXEEpzkrzvpwwcj6jTWj5mDubaevzWacCO6nqgLptpWSpRwfDd4ZWaHgx6rSf%2BNH9oO9r0pWPfoQKAHSjfoMxsYzvwidoEFmkaK9rokZc3s%2BwxbdgWeHjYc8%2BVa3Lu73%2B3on8TG6qoly8fsFhVoc%2F6thD3TQzP2Jfgojbhd9nYeG1WIvCoEMCgC3%2BLhw4oDp9WE1GXcMEO8inXfB07JdF1%2Ba2j08z8Mrz8r536gPl5t8PzTDDthDPNRy0iyq6SoSl7Ogy8P1sekA5o8Ea9H9MC51kRtowSIgC3kApp39YtjLcnbi1AIPe38rC7ZbCExbUTYWVp0jx6nlZlrHk%2Fz%2BxYaiifx3chfHn2KSVgY314jWI2ICQDF8cxwfiTp%2BR06sBpAashuY3tz67AlVbgVoy59QKFeCGiWWnL1fCIXmSmvL%2FqIAooWoy5P79neiWJ1l4ZzONFD7WXH2BniwpyQ%2FjMRZt%2BT1n%2FN3rfSC5oMoPaqYxXn9of8ehwHBVJCtMNb3388GOqUBJcSyUjhzmWalsYR6XyGtPmmrDUL7nkhnx7HdiF64jqJhzdcZ8NNJzLii1%2FT77K4l33lMvZzAdL6HPFsWMxHY4JweGZZ4VS8I9iFs6vr659gKawdm15pJVpEtfD2xfqDDWjj4R%2FN0h%2BSMf0usAsbHVEYwKALWGUWFeti2gF6HMEIEDGFPJQo7RpjzQrNtM6dvb4iVNmcKg1G7XOv1o0YWQfLAfBi5&X-Amz-Signature=725e0a1ca5267ad5ca5efdadb8eaa28668c9778ebd0785bd0ff1cc65c8c13b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KWUSVNV%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXt%2BnMqMiklJIippCl3AsFw3lPpAH94nl%2Fh0yreEKn2AiEArFRFgEYeDkflzsxn8g9fO140Nfx0ERHPHoUvW2i1W4Eq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDNZh5v0rMXoQLx4%2FircA%2Bg22qOh3fwEIb3PY9e0%2BDqHBEGbi7KjBnIl6jxdIYrYRY8UJw2zfQN8nYy64%2Bo3T7g7xlUzMY7b297lIDUo8HXQSUm0nN%2BHPzLATlUTfxHD%2FydL1w3mIPsVB2p0uHKCT1xiVbrqKaj9xO%2FYp8CvOpJE1%2Fgr5k7uDM0sRH2Ur9xpJ3jxIdXyFkcd%2FEtytPvWV7CsmwbKogml7IQdsdr%2Fc8bpuz0K0N%2BXLVtXgaOomjVM5RW08Ac4l9uZvWrcu6yxzyWtsqJWywtQ2zwSbFPvn9Z3bB0RR4mgs%2FHr%2BzUcbhob1KMOPjstz6cpsYYKHuMzZJKmLgXo0BJhCPvmxoIzcJ6H234tB4Cxcsd9j%2BbNZCxBuuK8n8V51EPDiRhLofDKA8xYp%2BJ9unpnv1%2FdVIrU8GCY9WUETwCDyxSaNIyCufpKIxVYifyKf4Qf0GZD0KOprBdVi0quJvMrvgQ5HXnXUYCdmU2eUFflMtJUU62oQFRgkI56DBa0wnaRugMFgbUOAweGsBrgmCJwy0VJjEEQjOUbUIxa%2B01etVz%2BiD8x9FsmvEB5%2F%2B5W3KkB48T0rA%2BhLR%2F4HQywhtBVTE1HY2t8pw55xNVq9v0tVDw0Qz%2FocZZoUZ4H4oTUbf2zdXiLMKD2388GOqUB1NaTe3iLZp%2BLpgf1lFCSpiI2DoCdyXJSzYGDjHOivl8HLCeR263su6kX0xcsDgsiLdTu30iYa27UpGYOPDQ%2Bn6SASY9uVBeLXAhUtD6CHf1NAfug3Q3%2BKOWPwcjbYtJJDNoRw1%2BMh39WyTo33kL4mMbLXy5bglBCsyVOJblg7gl7hKN9zacElXn%2F7IO3dX3%2FWsTRdivNfsy4wT3dDScQbG2YR0H%2F&X-Amz-Signature=4fdbdff02e967b03eb67615fc47585f9051612b3358babea6ce93997351f15bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KWUSVNV%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXt%2BnMqMiklJIippCl3AsFw3lPpAH94nl%2Fh0yreEKn2AiEArFRFgEYeDkflzsxn8g9fO140Nfx0ERHPHoUvW2i1W4Eq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDNZh5v0rMXoQLx4%2FircA%2Bg22qOh3fwEIb3PY9e0%2BDqHBEGbi7KjBnIl6jxdIYrYRY8UJw2zfQN8nYy64%2Bo3T7g7xlUzMY7b297lIDUo8HXQSUm0nN%2BHPzLATlUTfxHD%2FydL1w3mIPsVB2p0uHKCT1xiVbrqKaj9xO%2FYp8CvOpJE1%2Fgr5k7uDM0sRH2Ur9xpJ3jxIdXyFkcd%2FEtytPvWV7CsmwbKogml7IQdsdr%2Fc8bpuz0K0N%2BXLVtXgaOomjVM5RW08Ac4l9uZvWrcu6yxzyWtsqJWywtQ2zwSbFPvn9Z3bB0RR4mgs%2FHr%2BzUcbhob1KMOPjstz6cpsYYKHuMzZJKmLgXo0BJhCPvmxoIzcJ6H234tB4Cxcsd9j%2BbNZCxBuuK8n8V51EPDiRhLofDKA8xYp%2BJ9unpnv1%2FdVIrU8GCY9WUETwCDyxSaNIyCufpKIxVYifyKf4Qf0GZD0KOprBdVi0quJvMrvgQ5HXnXUYCdmU2eUFflMtJUU62oQFRgkI56DBa0wnaRugMFgbUOAweGsBrgmCJwy0VJjEEQjOUbUIxa%2B01etVz%2BiD8x9FsmvEB5%2F%2B5W3KkB48T0rA%2BhLR%2F4HQywhtBVTE1HY2t8pw55xNVq9v0tVDw0Qz%2FocZZoUZ4H4oTUbf2zdXiLMKD2388GOqUB1NaTe3iLZp%2BLpgf1lFCSpiI2DoCdyXJSzYGDjHOivl8HLCeR263su6kX0xcsDgsiLdTu30iYa27UpGYOPDQ%2Bn6SASY9uVBeLXAhUtD6CHf1NAfug3Q3%2BKOWPwcjbYtJJDNoRw1%2BMh39WyTo33kL4mMbLXy5bglBCsyVOJblg7gl7hKN9zacElXn%2F7IO3dX3%2FWsTRdivNfsy4wT3dDScQbG2YR0H%2F&X-Amz-Signature=72fcb00022d3250e86f26011e94da25e28115cc05c2978610a087fd6590ddd33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FXS7GBH%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzfsLI0EuWxucmUx6oUql6nzE6vSSTdAF%2Bjy25GnIxswIhAIltMiQ4cb7AeClX3LWmJxrBaXr6AFnSlGdatshMAVn6Kv8DCGMQABoMNjM3NDIzMTgzODA1Igyx0TbJVY6tdbnfeyMq3ANTNEzW5%2FFEFd5sfTgju6cKp3afXg5nmboE9sxoSc6d%2F4cvO32%2BK0uqhfMN1k40C40VgzTyD0lBwk8NgkPUSvFX16JMJfz479PojS8J2WLeFlqajUHLhDJg78P8PNBG2tuWVel3f1IugJ%2FK7vkZtKTuvnlGHuCIdC0CxPEJIplClB2Tii%2BOrCu9V1ZO%2FPkJ2gbEbp9gINeyLzyq0PB3ZXRL3CqdL%2FWehdhX5gbHVA%2F%2BQ9hIdCz9wIlvD9cc0hFN%2FtnyVVlmPhFkGUnr5byQP4uzIvX4cSGVkQ2dxSLgIm%2BZ5nVq%2FmE8a4BR4ymc5UhVeSNXiTUecSfhUOkknwnDjgeOFoKckGHtnkpZSOrWWczh7InSTTWAXxBUXg2VDQDnHteaywdM48Oyg5rJwSCgCPbaf%2Fg5TJ%2FZ%2BX0l83ARhTd6gyWp4uqoeXrQEWAREqPic5N0l%2Fi9GPA%2Ft90WdiEI9tnsySEzW0EBRIOKy7oigaRqOvuEtXyMapTVOM3lH2t9wNqs9MbYrCi%2BpmovTnIFVBMjlSYmBKyd9ck6VN4imU4lg1wr7T7bSrb%2FldB2OSakCImB9sG6R6PIt6OZXP%2B3rjLch%2F5RFiQJTO0Mm6iVWemfQgFqI9dbEpbtjKVkzjDPhODPBjqkARX%2Bfxhmtyvu6Gq7aH2cyKOl0Q%2B40L3FVXhnHsslM2ug%2FQ9lv7mEJ42N7t4wpXbbWaLtngafo%2BvpQnqmUCFjbu5LAtbSUQSJFjc3OPUDrrfmb1be6lX9Q0XojqVScpgKhF5SeqGV8%2BEZtzkdWUbudfNt3nhh93n6nbfQEuExBAC5SxRLEfEDvv697qdLI6amJXo4alKZMR1dKT%2Fh8oUxwrLeOBgT&X-Amz-Signature=3e688bb615d5d3e2a2085fb939d6f3372a961d4f13d149d33e3cea6c445393d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJTIHC5%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCFVycLbYIWLJUp%2FrF0U4BGcrQOBi5w24j3cs0nAzSe9gIgeBbEeAI35YcCDXrU0if08VlSa8c4Y7NKmbVtII78PpQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKXWDN1bi%2BhouT5zaSrcA9nRIMZLaQ%2B7RCnHk5UzyO%2BweZ2Dza%2B5YF6iIw3wd3iEN1fsj%2FE3sjepICMqUOiGNnyl%2BKOk02SiJTjzn4iHcKmh6reHJs%2FKj3Wqy%2FgjhWJBtjEH50hGX7I6cu%2BiRaJIShAlQFJrQi75pqjoNMXbbNKrOfhyWcMMrXi9umfWicRmqOTqq097dA9bH%2FhKqTyWophvvIeHkcNen5HaOIySi7ObF5yvhkL1NM3M8Xx4AwzEsuxL1hUTMzi9SkLx9AFLlULDHGUJGhSZcSBGXx85vsBw%2BXhQnvbOYDJaYF1HEKnYKtSBSfTXluT0Z3twVW3bTYG6BhtZu75Sxdes%2Bfgy191HuAlRAVJZ31X3YJOvCAn7HpcLyVq1ACrg758gnCEsixdWUT4aiqwCD16I%2Fvhh%2FrPlp6BkCuhtELcXoDg9XDYPbI%2FAkyo1MOEzj3lmq8Nyu1ornBtYPgu7FwhqKdwK4JI9rdyEyju0HDdJGhGDtSDA4IKe17lEoLWVbhdTJBUj3fjQRYI5Jm3KgMvlJn6VoeccTN8zZMZwn6wyzxpwSri8Cg%2BAEwT2IuXMPx9WyWwy76GyqESyqYjQ%2BFT9YJ8NLMahYt8HW9YcCW84VneStLY2FQJel97zJdNEgozgMJTv7NEGOqUBBTczBJyxmYCHKOJWJSjE8Cxtn7IKR8zgNFaOJKeXBr4gsiBtcRKsnn6JShdtZUoHGHhd%2Be52vhUvqiOXKbH%2FXV%2B2oLPQYC4znT6IVOmgckg17fLlWxPplk3Zi6q7OFywSevlIlBtlDWXcIwSKhMmmj0K6o7zU107%2BCluDIFdZZETpKti4mhUwrDufPiQWDtdKvRoP%2Fa%2Bq8DMKq7AT%2BKUeKnQVw1A&X-Amz-Signature=848fb2185ed24c3c61a075a6cec688dc5623b49bd2069941a8d9333e5d3f5857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MC776HQ%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDSiT%2F46HeVDzMMO5ClRfme%2F6M26kV7P9m726TZfDQ7swIhALuVGc8By9rYJUGgtbmkuDmRQ6wIyZs5rSlXe3sSh5PcKv8DCCsQABoMNjM3NDIzMTgzODA1IgyNp7Xe90EjBc%2BfOrUq3AMPiFJSnuF4JkuRzj2GxgeElyOqRKT2%2F%2F3FWruo95Qdk3h%2Bvm0%2FW2MA8VgNPPW5DndZpLfNBS5fq7qDapshHdy5awrV19pzHnNdZoO1gkiLvUgOTgvd5Roz0hsFYCqXMGQV0ul0D8pT1tto7dbls%2FR0tDu2ArtNzSb5lkQIg%2BFp48u8oszyZDZvcP7IaNO9udu26c8EHQRMgn7VjEFduSIBdQUP5GK%2FFD7yl%2F0ufjpMYmQJbQBcV%2BsE01vtTMUygCH8CRxcJFND4uN3ib%2BQAYGkpLa9wTbbatG2Kx6FR4%2Fra2%2FKP9Ogs6dCq1ttdFUSj8WD7juB7fUOqBEDaIi0d8pJ0xlnhA5zGyiyR3oCkIrRn5%2FXYvLH%2FMQbqVAKO1908FC2VbdscHnTs7ypOruII0rHS8Fw4PIrwjU4hcpIU85VloV33FbDmELmWGKaoJMMNcdb9YmtuAO4rnqqDvVVZZXeEWVj61TxKCBsL%2BKNzoGw997vS9cp1v8ilMsgOnsKeRITNUnyNrpNSwOI22qKRWBP6B%2BNvgkWZa1VzM4VYFdsk9EFrSsx8llx9X4RBcWXIP0LqlUZX%2BwbrwAc5apZpvUfW4Xfu%2BjjeMmvrUjV2lfee9FGcoS1cdSeexUS6zCu8ezRBjqkAQEvKzhXBnWlvSZV7MmnjkngrT48KDCfmGIxtpu%2F3tonKCt3v1Ua8%2FoIPgATQPjrlGImcdygR96kwHomiZ5IKtcAbTy7yj3Zb59LPAyEz%2Bzbwkof4pDRmtMqaZrNTFtAy7iXJS9p0srpFeWmbqQkXsAQ2JjRxXCmW0FvpYuF%2Fg9qeAncsNNeBwqy%2FPhN5GrP8EPGgKekbIbHT496awW33kbrtdq0&X-Amz-Signature=364909e9a704b27e6b85518aa84722e04c2ce8357bbc69942a4dd52c6480cb02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MDCMZ2L%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDT8PrtOwr74fiOsxrW35KIxW8UK50uoZtFXLqEM3orzgIhAPeh%2B3u1BJCVW%2Bvx6vDPFLJaWXc1h2QLlISmqgPfDuEbKv8DCCsQABoMNjM3NDIzMTgzODA1IgyYPVvZtcI5flNKztcq3AMmMk%2BUZH0q4CZHX3JpZmpcljHGDJg8dMmYw5rRFGkZ5d3m%2BfJpw9oiGoSIfjzn4Dn5XUKZ7GtkJEMxp4ZECUswhQ29ZSDNKSd23Uj6nb3%2BsIquc5vRJYfIglK4JZGMnsUZlVoUc0gCn6v0c7Nl7HSKBSazTPn%2B9qcxhi3ZVRqNupMwA5hh5NoqcdUg82Ap%2B2beueIjFwQO5xa9sUq00FdRam5GgrBxYmonJ5DGXFjg8SHBweByCJRG0u0TfYIq21KbQS4IirUlSKiMspVYqGw8HhHNITrdp6wCy%2FPc3fmmbBTnM0MG4IqN0w8jwapK9i71GwTODwSmHIbrZhVk1OdP9faXIznjbLQK0UTUOExI9KKTTeAqIcTe%2FYhBlvlX8IrVgdbpdZnKzcJhc3Lclo2l0eN3vok5JXn3i9%2BKrFecRIZHOIbubIzCEF2gUEacsr33tUWZ8isUWmlYx61t%2BFrhzH2%2Bn8gYoFyjVcZ5B4aKfyVue7HueZ5FnUV9ueIve4%2FgCLp%2FlXa8vLGOZ2jwlQ5soqcaaPmPc20lL%2FSuuW7luIHQ6QrBp2E2%2Fc6vxInwMu9iYjSYM%2FNiTtpszF2K3YPsI4c7n8QeqSPtTVjkjm1QioQ6UWMIfGi3gsykOjCY8uzRBjqkAUJvEV5z4PtZVUfiOAmU77YVl8RARwyIkHms5D8a%2B%2BMJNz7Q8cCpA3hYY1sQCvFoNxtcOVwqtPCOk5FSOw0mJwgXuNbtjsvqGQuHguHXp69QgKijiPHH49Y9QFS2pkwOT1J6gMJu32Azs6u1TORB1ZxbH9mWwVTrqwpHVX8nsFrZ%2BZFBLCwQqFl5LUqiX3Osmyvz%2BhgwU95iCKSAyaakxD4XgsMR&X-Amz-Signature=5587d35ce4d6b301580fb2b8007c3cd65165ff1b6f9becb843bbd015f08a57a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MDCMZ2L%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDT8PrtOwr74fiOsxrW35KIxW8UK50uoZtFXLqEM3orzgIhAPeh%2B3u1BJCVW%2Bvx6vDPFLJaWXc1h2QLlISmqgPfDuEbKv8DCCsQABoMNjM3NDIzMTgzODA1IgyYPVvZtcI5flNKztcq3AMmMk%2BUZH0q4CZHX3JpZmpcljHGDJg8dMmYw5rRFGkZ5d3m%2BfJpw9oiGoSIfjzn4Dn5XUKZ7GtkJEMxp4ZECUswhQ29ZSDNKSd23Uj6nb3%2BsIquc5vRJYfIglK4JZGMnsUZlVoUc0gCn6v0c7Nl7HSKBSazTPn%2B9qcxhi3ZVRqNupMwA5hh5NoqcdUg82Ap%2B2beueIjFwQO5xa9sUq00FdRam5GgrBxYmonJ5DGXFjg8SHBweByCJRG0u0TfYIq21KbQS4IirUlSKiMspVYqGw8HhHNITrdp6wCy%2FPc3fmmbBTnM0MG4IqN0w8jwapK9i71GwTODwSmHIbrZhVk1OdP9faXIznjbLQK0UTUOExI9KKTTeAqIcTe%2FYhBlvlX8IrVgdbpdZnKzcJhc3Lclo2l0eN3vok5JXn3i9%2BKrFecRIZHOIbubIzCEF2gUEacsr33tUWZ8isUWmlYx61t%2BFrhzH2%2Bn8gYoFyjVcZ5B4aKfyVue7HueZ5FnUV9ueIve4%2FgCLp%2FlXa8vLGOZ2jwlQ5soqcaaPmPc20lL%2FSuuW7luIHQ6QrBp2E2%2Fc6vxInwMu9iYjSYM%2FNiTtpszF2K3YPsI4c7n8QeqSPtTVjkjm1QioQ6UWMIfGi3gsykOjCY8uzRBjqkAUJvEV5z4PtZVUfiOAmU77YVl8RARwyIkHms5D8a%2B%2BMJNz7Q8cCpA3hYY1sQCvFoNxtcOVwqtPCOk5FSOw0mJwgXuNbtjsvqGQuHguHXp69QgKijiPHH49Y9QFS2pkwOT1J6gMJu32Azs6u1TORB1ZxbH9mWwVTrqwpHVX8nsFrZ%2BZFBLCwQqFl5LUqiX3Osmyvz%2BhgwU95iCKSAyaakxD4XgsMR&X-Amz-Signature=329f3a9e8398c64b30b63fb08004149441976c6e7b5596f6e710fe221d606990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MC776HQ%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDSiT%2F46HeVDzMMO5ClRfme%2F6M26kV7P9m726TZfDQ7swIhALuVGc8By9rYJUGgtbmkuDmRQ6wIyZs5rSlXe3sSh5PcKv8DCCsQABoMNjM3NDIzMTgzODA1IgyNp7Xe90EjBc%2BfOrUq3AMPiFJSnuF4JkuRzj2GxgeElyOqRKT2%2F%2F3FWruo95Qdk3h%2Bvm0%2FW2MA8VgNPPW5DndZpLfNBS5fq7qDapshHdy5awrV19pzHnNdZoO1gkiLvUgOTgvd5Roz0hsFYCqXMGQV0ul0D8pT1tto7dbls%2FR0tDu2ArtNzSb5lkQIg%2BFp48u8oszyZDZvcP7IaNO9udu26c8EHQRMgn7VjEFduSIBdQUP5GK%2FFD7yl%2F0ufjpMYmQJbQBcV%2BsE01vtTMUygCH8CRxcJFND4uN3ib%2BQAYGkpLa9wTbbatG2Kx6FR4%2Fra2%2FKP9Ogs6dCq1ttdFUSj8WD7juB7fUOqBEDaIi0d8pJ0xlnhA5zGyiyR3oCkIrRn5%2FXYvLH%2FMQbqVAKO1908FC2VbdscHnTs7ypOruII0rHS8Fw4PIrwjU4hcpIU85VloV33FbDmELmWGKaoJMMNcdb9YmtuAO4rnqqDvVVZZXeEWVj61TxKCBsL%2BKNzoGw997vS9cp1v8ilMsgOnsKeRITNUnyNrpNSwOI22qKRWBP6B%2BNvgkWZa1VzM4VYFdsk9EFrSsx8llx9X4RBcWXIP0LqlUZX%2BwbrwAc5apZpvUfW4Xfu%2BjjeMmvrUjV2lfee9FGcoS1cdSeexUS6zCu8ezRBjqkAQEvKzhXBnWlvSZV7MmnjkngrT48KDCfmGIxtpu%2F3tonKCt3v1Ua8%2FoIPgATQPjrlGImcdygR96kwHomiZ5IKtcAbTy7yj3Zb59LPAyEz%2Bzbwkof4pDRmtMqaZrNTFtAy7iXJS9p0srpFeWmbqQkXsAQ2JjRxXCmW0FvpYuF%2Fg9qeAncsNNeBwqy%2FPhN5GrP8EPGgKekbIbHT496awW33kbrtdq0&X-Amz-Signature=44e40a68a145e08be841eb6f8eb9380aa04bcf2140e44030bfce1f33fd1f9b86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MC776HQ%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDSiT%2F46HeVDzMMO5ClRfme%2F6M26kV7P9m726TZfDQ7swIhALuVGc8By9rYJUGgtbmkuDmRQ6wIyZs5rSlXe3sSh5PcKv8DCCsQABoMNjM3NDIzMTgzODA1IgyNp7Xe90EjBc%2BfOrUq3AMPiFJSnuF4JkuRzj2GxgeElyOqRKT2%2F%2F3FWruo95Qdk3h%2Bvm0%2FW2MA8VgNPPW5DndZpLfNBS5fq7qDapshHdy5awrV19pzHnNdZoO1gkiLvUgOTgvd5Roz0hsFYCqXMGQV0ul0D8pT1tto7dbls%2FR0tDu2ArtNzSb5lkQIg%2BFp48u8oszyZDZvcP7IaNO9udu26c8EHQRMgn7VjEFduSIBdQUP5GK%2FFD7yl%2F0ufjpMYmQJbQBcV%2BsE01vtTMUygCH8CRxcJFND4uN3ib%2BQAYGkpLa9wTbbatG2Kx6FR4%2Fra2%2FKP9Ogs6dCq1ttdFUSj8WD7juB7fUOqBEDaIi0d8pJ0xlnhA5zGyiyR3oCkIrRn5%2FXYvLH%2FMQbqVAKO1908FC2VbdscHnTs7ypOruII0rHS8Fw4PIrwjU4hcpIU85VloV33FbDmELmWGKaoJMMNcdb9YmtuAO4rnqqDvVVZZXeEWVj61TxKCBsL%2BKNzoGw997vS9cp1v8ilMsgOnsKeRITNUnyNrpNSwOI22qKRWBP6B%2BNvgkWZa1VzM4VYFdsk9EFrSsx8llx9X4RBcWXIP0LqlUZX%2BwbrwAc5apZpvUfW4Xfu%2BjjeMmvrUjV2lfee9FGcoS1cdSeexUS6zCu8ezRBjqkAQEvKzhXBnWlvSZV7MmnjkngrT48KDCfmGIxtpu%2F3tonKCt3v1Ua8%2FoIPgATQPjrlGImcdygR96kwHomiZ5IKtcAbTy7yj3Zb59LPAyEz%2Bzbwkof4pDRmtMqaZrNTFtAy7iXJS9p0srpFeWmbqQkXsAQ2JjRxXCmW0FvpYuF%2Fg9qeAncsNNeBwqy%2FPhN5GrP8EPGgKekbIbHT496awW33kbrtdq0&X-Amz-Signature=66f05b8af9d243334e6b8fcfeeb06edaa35dcccca2b56a7edce7c3e04a7a17b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647OZWEZD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIA1r02gxbOGXK9cSx86HE7i6mcyRGX6ZqGuKGXcrcdfzAiALt5P64QEbomFJQotz0puN6aQ1dJqW8wErCquIPxBxmSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMxiFsKYEOSL3u8G0RKtwDBXIQO0JVAtn%2BdA2MNonK6wWUXK3vZaI0WL%2BDPNeEsh0LnyKbXO0o2lRehI44020DP1BEKSEg1uJ6WsyfP8uq6PDEEdU97Nkn3CHQoOEWL94ORJyhhO0JWnUWgoifATJXHMdw%2BmaiiyYb8VdIp%2FQvT%2FPDzvG88FkVqKm%2FXIBw%2BwU1h3bJyJrjiK51reuAiqIyS5o7Hk%2BP0VIsIAzbOFPYosCCUnEvzn11cwbyG%2F8qCwJjgnIgCtXc9fmqxjZ6mE6GSLl5v9uoUYFc%2Fg15IyGZ6eCSwpO%2BUZFsN%2BtTqm7PD50uGhdaButG4%2F9MiSMXrfjvPvnvsnfwDOZhXYz6nIk8RqyBuc%2FnhAH7ph4aB8OxNIo1vxxajmq18AqfoeI%2FvhAeUK5DOOfkxYpVnK1xE%2FjvbZQbL9ks0QXFqjmk9ig%2BZ6Ert9sFlvyGoBXN8VIQs9FORdGf32yeQWlt%2Bw%2BgAqnawkUkAt3iZnu%2Fd0SZT9CAiKTi%2BUEiKJ8chh6ZfRHB7UNvGbuxJzGu0Z0V4LMprmCVVd5LZYr%2BV2hahX6aHQeDtLRP%2BtUK7rwatHoDmZ2Lib%2B2Ia7Cb0SdEk3d%2B09FUV3u2qpkm4gCQzv2nHarW0fopH1tfsSX0eQTzyTH8GAwgu%2Fs0QY6pgHegYagmPA8ea9ohTu7y8qkpTsg1IwnF%2F%2BtpB%2FLaFEQgG2AUnEXFqeStPGaB4AGx3nbA73PWjDXwj%2Bk3J%2BoTpk6Z9lwMVTtoBH4MhWOgCscM%2BdxSEy3yvQKo%2FfMrbaE8I6VzanN30YK60KzsFt0RoEsRaVGkEfONpMbDA1aKA%2F3MOgwLaO3ADfdwblUzeEHG2q4uRjjIJfQob39m3ghBWfeUM9m%2Fwcb&X-Amz-Signature=c2949fa1c813197f29e79839639cbe480f003067593d12ea078c751bab1ac79c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

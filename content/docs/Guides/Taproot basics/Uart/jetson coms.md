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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DL6WLFM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCL%2BsKoDnctkDQaEXvEBvedaXG%2Fep2yvQ6209Tlh%2BryMQIgBvWhUj0qzWHlA7ez%2B6hXO7WpK7GKWYCkFv0gff%2FOEnAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDbF6Zc1XKbsEyKH0ircAx6OU7TmIFblfDYweCbwxHahhphBWA5cRYkHDRVs%2FYvyEjA51xynE9xfpo8cf4GlYV2X9w2g5y1eReSz05gJLu0ufYPxkzead4JNrlPE00m%2B3RGpkGbl0fMdInYyAYZn9oGcXZcHpC%2FODJsKHmrHFm0AohPfX5P81o5u7uhCGEDzGRGCPKJxmj7oluQbEwEDTEuPl%2B7TSIIJrzCRcEBo1rgVtRDuHnWVVpDWlSCVZ58uHX2az2h3H9iLaleLBzl5bS%2BqIb9L2PJZ0S2k%2BmkeSQXOjYM0Xur0wOEZCM8ENviaWvHIpzLsLg5S99mfC8xsqEx0Cba0t0KEGKF9qjfxhWGZCfvS5UGnK7lGbkY%2Bjl3o4rUZyYz4%2FM1NUdhUfQ7lpGHlyEBH93gP8JfjxiJSX6h1rUrgXz%2B%2Fsi5cfSmcGDV6jmciqkcPXk1a%2FuiVE5YsDfBy%2FRZN6wXwc5ELYk9N3hCM1yFLZV7%2BVp9JCJDpeXkGS%2B%2B5C%2BKxtVJYhNx8OKLlQNaCPBCP1BOETLNDDuaVnrPsyg1CZ%2FFU%2BZgNKDv4OKUadz8CPXwHrCJtDMo8uwy%2FHfs8PayUaZ1y56EtvhmeHQCGuhmMa1LwXEtN305rIwPLAXsqU1W0nAvEkosoMKGNwcQGOqUB4DBRJHPp%2F%2Ba%2FK9pyx4U7JBgZIPXfe6TQTo3qhd0ootUCLpG6gtosXi7VEs0BXQCYbcvCl3Dhs%2FuM0OuzO3wyRuy4E%2FV1B9Jkwngj7giwkhWKJE7z8I9O%2B5LnVXb%2BPP%2Ba70bs7HHN3gSKRk58XVNVEiSrgRqLbT8UJSTa4rpgvBYYifxF2t1yaQ%2B4ZHpBIxQpD9Ql5yTpvXFaPIF5LjPAn0%2FRml2u&X-Amz-Signature=9bbe8f1f781b382dbfce21ab9424a05ab99ed6aef3dae293e97fe04ff4bb9ca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636OAYOBN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIAYZQAi%2Fm5GP%2Fbrnp8ew0JeJKLTZ1i7QvrCyVNRyCDIzAiBilWbUuh2QqR%2BAUxenINYUzcWzJw6PGDc6G990cGR%2BySr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM7EEw31UySJE%2FSnoeKtwDGdeYgJb7e2po%2Fd5NR%2FidBUHSHWalD0s%2FoAs49uTjve3FjSCIEYa7DNlO%2BEwEmDT5OfCN5UBqY9gTR8kp1ubKOj7B3KA1CKPeAIA81HSrWCM0G4D%2BvcNLVpRwCyOtabj1sjYMjVB0szBbAbGKDbUMc%2BeRNn35Xx1C1PaTd%2B2yKbFCddFDpKr%2BO3Mm0cayNIGMIvRCZDufuSX914UB4F%2BkPaeB2iNrwkoP45fRUY6asNW9S8FLuzvJwlOLV0FHnY88h54rp8d270GQaJE6xGUvujUFdcvdM6FE59h4b0b%2BSjU6mxq9eBhuBNq5QWzrPMx3JlvUEZ9th2TirpMO0yU%2B6FxYHbgRJibu%2FPfxgK6irGkn5IqUeubFGvEKdM2jELqvENt5YodT3m8taRqE7NzQPyP%2BVmC3WQANyZAV2ANN63BXd8smzLbJ3rTD65ldKLNgzYRev69bDCrCAqTRgBxLdfxT8IjDnJmsD6xST6i%2B9fYl2vTOQK6jmDrvvw5wfb8AC%2Fd5iMrx%2F%2FrY%2FCf5D24LsUjfKVagc7EQTq7YAGaPLgOs92zQ2S61XOJBowxUTHGHNI9tccprK6V8ReW881CIpjeO9A8HLIC0dXTf9q2FoacaL46F%2FUOEsV%2FUqg0w743BxAY6pgET2t6Sej5G4CPW1aPs6PGtgr8IEoq6%2FIE9%2BO8zbOeXdFuwI5vQpivd%2Fy1BEpvn%2B3r%2BoPhF%2BGijBEjQIhGrgR6VIDYDCWl7o%2BI2usf9Mf4y%2FVgO274RwekQqGU8O8SO5tUgLP7%2FnBZo8n8iuCmI890uCkMqNANGO8ZJ4sU9rdXNWSLSANZ%2Fd%2BlWzbHN3lgE1ZABqu0QAh%2F2fpKnqM2SwmuBkjHfc8PQ&X-Amz-Signature=ee12dd37d6e02cf639fca86b3d0189fa0539ab9839df85981ac688c8d9f10f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Connect RX of the type-c to the TX/TXD of USB to UART

and TX of the type-c to the RX/RXD of the USB to UART

<details>
      <summary>Note: TX and TXD??</summary>
      They mean the same thing in this context
  </details>

<details>
      <summary>UART1 but its UART2???</summary>
      There are actual 3 different UART ports connected for the type-c
  </details>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636OAYOBN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIAYZQAi%2Fm5GP%2Fbrnp8ew0JeJKLTZ1i7QvrCyVNRyCDIzAiBilWbUuh2QqR%2BAUxenINYUzcWzJw6PGDc6G990cGR%2BySr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM7EEw31UySJE%2FSnoeKtwDGdeYgJb7e2po%2Fd5NR%2FidBUHSHWalD0s%2FoAs49uTjve3FjSCIEYa7DNlO%2BEwEmDT5OfCN5UBqY9gTR8kp1ubKOj7B3KA1CKPeAIA81HSrWCM0G4D%2BvcNLVpRwCyOtabj1sjYMjVB0szBbAbGKDbUMc%2BeRNn35Xx1C1PaTd%2B2yKbFCddFDpKr%2BO3Mm0cayNIGMIvRCZDufuSX914UB4F%2BkPaeB2iNrwkoP45fRUY6asNW9S8FLuzvJwlOLV0FHnY88h54rp8d270GQaJE6xGUvujUFdcvdM6FE59h4b0b%2BSjU6mxq9eBhuBNq5QWzrPMx3JlvUEZ9th2TirpMO0yU%2B6FxYHbgRJibu%2FPfxgK6irGkn5IqUeubFGvEKdM2jELqvENt5YodT3m8taRqE7NzQPyP%2BVmC3WQANyZAV2ANN63BXd8smzLbJ3rTD65ldKLNgzYRev69bDCrCAqTRgBxLdfxT8IjDnJmsD6xST6i%2B9fYl2vTOQK6jmDrvvw5wfb8AC%2Fd5iMrx%2F%2FrY%2FCf5D24LsUjfKVagc7EQTq7YAGaPLgOs92zQ2S61XOJBowxUTHGHNI9tccprK6V8ReW881CIpjeO9A8HLIC0dXTf9q2FoacaL46F%2FUOEsV%2FUqg0w743BxAY6pgET2t6Sej5G4CPW1aPs6PGtgr8IEoq6%2FIE9%2BO8zbOeXdFuwI5vQpivd%2Fy1BEpvn%2B3r%2BoPhF%2BGijBEjQIhGrgR6VIDYDCWl7o%2BI2usf9Mf4y%2FVgO274RwekQqGU8O8SO5tUgLP7%2FnBZo8n8iuCmI890uCkMqNANGO8ZJ4sU9rdXNWSLSANZ%2Fd%2BlWzbHN3lgE1ZABqu0QAh%2F2fpKnqM2SwmuBkjHfc8PQ&X-Amz-Signature=e45a268bda1496148c0b0b48832231af36a1fcee890c3d72ce38e38b20387744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## NOTE: MAKE SURE RX → TXD and TX → RXD (they must be “flipped”)

<details>
      <summary>Why flipped?</summary>
      TX stands for transfer and RX stands for receive.
  </details>

Finally plug the USB to UART board into your laptop or Jetson

## Software

We will first code the laptop/jetson side in python

### UART settings

the settings the type-c in taproot uses are in this table below:

{{< table "table-striped table-hover table-responsive" >}}

| **Settings**         | **Value**    |
| -------------------- | ------------ |
| baud rate (bits/sec) | 115200       |
| byte size            | 8            |
| parity               | None         |
| stop bits            | one stop bit |

{{< /table >}}

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
      <summary>Note: type-c max baud rate</summary>
      according to ARUW the type-c can’t handle the max baud rate of the USB to UART chip (921,600) when using both RX and TX due to impedance.
  </details>

this script should just send the bytes `hello` on to the wire or exactly the bytes 0x68, 0x65, 0x6C, 0x6C, 0x6F.

{{< table "table-striped table-hover table-responsive" >}}

| h    | e    | l    | l    | o    |
| ---- | ---- | ---- | ---- | ---- |
| 0x68 | 0x65 | 0x6C | 0x6C | 0x6F |

{{< /table >}}

run the program and you should see the TXD led flash on the USB to UART board this just shows the actual 1s and 0s being sent on to the wire proving messages are being sent from the laptop/Jetson. 

> NOTE: this is a good debugging tool to check if stuff is being sent.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636OAYOBN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIAYZQAi%2Fm5GP%2Fbrnp8ew0JeJKLTZ1i7QvrCyVNRyCDIzAiBilWbUuh2QqR%2BAUxenINYUzcWzJw6PGDc6G990cGR%2BySr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM7EEw31UySJE%2FSnoeKtwDGdeYgJb7e2po%2Fd5NR%2FidBUHSHWalD0s%2FoAs49uTjve3FjSCIEYa7DNlO%2BEwEmDT5OfCN5UBqY9gTR8kp1ubKOj7B3KA1CKPeAIA81HSrWCM0G4D%2BvcNLVpRwCyOtabj1sjYMjVB0szBbAbGKDbUMc%2BeRNn35Xx1C1PaTd%2B2yKbFCddFDpKr%2BO3Mm0cayNIGMIvRCZDufuSX914UB4F%2BkPaeB2iNrwkoP45fRUY6asNW9S8FLuzvJwlOLV0FHnY88h54rp8d270GQaJE6xGUvujUFdcvdM6FE59h4b0b%2BSjU6mxq9eBhuBNq5QWzrPMx3JlvUEZ9th2TirpMO0yU%2B6FxYHbgRJibu%2FPfxgK6irGkn5IqUeubFGvEKdM2jELqvENt5YodT3m8taRqE7NzQPyP%2BVmC3WQANyZAV2ANN63BXd8smzLbJ3rTD65ldKLNgzYRev69bDCrCAqTRgBxLdfxT8IjDnJmsD6xST6i%2B9fYl2vTOQK6jmDrvvw5wfb8AC%2Fd5iMrx%2F%2FrY%2FCf5D24LsUjfKVagc7EQTq7YAGaPLgOs92zQ2S61XOJBowxUTHGHNI9tccprK6V8ReW881CIpjeO9A8HLIC0dXTf9q2FoacaL46F%2FUOEsV%2FUqg0w743BxAY6pgET2t6Sej5G4CPW1aPs6PGtgr8IEoq6%2FIE9%2BO8zbOeXdFuwI5vQpivd%2Fy1BEpvn%2B3r%2BoPhF%2BGijBEjQIhGrgR6VIDYDCWl7o%2BI2usf9Mf4y%2FVgO274RwekQqGU8O8SO5tUgLP7%2FnBZo8n8iuCmI890uCkMqNANGO8ZJ4sU9rdXNWSLSANZ%2Fd%2BlWzbHN3lgE1ZABqu0QAh%2F2fpKnqM2SwmuBkjHfc8PQ&X-Amz-Signature=06d9f3c3b1d8b8233cc06b168052c4eb1050fcab1b1dd618129256816627a0f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>peeking into the wire?</summary>
      For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.
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

```python
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

```cpp
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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMWTKSJB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEk8cY9d%2BqJGDGx1wQJQrvBmArozNAO5zm0OCO4NRXpQIgTl1ampJ%2Bted%2BsngR0iTmhdCRLEQJ1c4c1iLx7RGwoRgqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA519Bp0zs89ZRgKvircA2NKDH%2FT43h49E1evyxtrCN%2BVfnAKp%2FDeMfn4QZxTMyrXfUaZ2nJVR6YVTdJTj78S2w9mrjjmJn4yIH4BsDG0miTEmkEt995SGOGO9yxtappJlqcT7cFDTKsdQUyOkrCRtiwF7uvRWurVMgBHdfRKPQLyP28ib18nmgBJOPdKRxqlz2Wv%2F2ni5CyXijMfUw0Yw2a3WkKpqqK9V6bIALAWq%2BoyKlpsAtyN%2F52F6eZTd05LkK29NJcc1AGcqET%2F7tu%2BCPsjHCf%2FPXUBt8PztWLY5Ko7iHx96gjOIQu%2BF4bYlY8OA3xhlHOn6Ab6J83B6%2FS%2BnGiFkb7tNve%2BaPaCLA7QW0VmKlCnKZB1iaYKzvL%2BBZIyY5fDjGqWdF%2Fyf6gZk67rPK36UpkBu7c6te%2BfWvbeccb6EqBSm2QPnaNCjl9I8fIJ7%2FJa%2FNrxdTG0i2zlxlb8E6eC85Zuk7rlucXivJDgTCUXS%2FTf5B9CfCc39Uzm%2Bfp1%2Biji1Vwd%2Bf07DxxCIgbm0IJbHZJ1ohDXuEO%2BTOt8DvKnEffY%2F8P2e6ywKJ26085A7IDtY2Dg0WHEUCteREWCwx89QOjpoU6v%2FWiNxc%2BUwoGqnx%2B5TZP2LiKmwS2D%2BKRsx4Zuh3io%2BkVLSQcMNCiqsQGOqUBA2JBJVCGMOe5XETtTszeILiNA%2FV8Aw1i0l2nZ%2B5QCSGbCa2gNpqY%2B6GWx5Gu8gXT5JTcKAV159HitXWnBYj0nNczis0QCFL7M9yNGJQpCh%2BrDQnMjVogsx6QyihCUBweVFJSB1u%2BoGn6l0iACUz0pI2f8jsFVTGzlbDaxsNZ%2FhSFp2AQM9HmjT%2BLYY0fL7kIJX9lkn7BO94NZqKEP9N%2FsXiJv8kY&X-Amz-Signature=99407125285f3a82cb6175106c9ee8b01325476a9977e26428b3f4c97f800fe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SMQBFMJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6JcNex4rjTY8q7ntKDBvFCkDfqaTzkxTRw5n4qryD%2FAiAuc04iav3Z8hz1oYX4Jlc%2FoUN7tkmHCxyQy0%2FCUwVdhSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYKYHoBdQAbvbhRBaKtwDlxMuPpaMvasc%2FN%2B%2B0mO5ozTURp%2B2vdxEpChoRjGPo8ibjMA5Fh56NxM4iF1l%2F2m6Fnhl5wo7s%2BGo8FxBp49a52ONAEzyMFln4qm6xwCbXjeYCTmxiJsuEpHFb7Rxbe%2F1I7cXJu9%2B6LL4K%2FIyzC1jVj%2BSpChf4mKTXvAJuWw9h%2Bi5NFLM%2BtJOAAhysrrLO65AG0RNZaaE6Zk0Wk%2FrhsigLI2Ahq45MgfA5c3iAwZL3LmVXh0oaK2RuKWkwSWJroehX1neqQ5xp5e%2Bdx2TYNqm0mmkL5m7OVXtUxRlfZejSN5WggKArQGcGn1p6kRrXZyHLVBUfqk24l%2BGtyQizUIzEksNVHJbOPT6Fbd08CgXbV0N3XLSEYyyw55OrYBt87QmvrRAR2AyICwGopqxo9n%2BGiYicv3dkVNO0bDbYt7GnaPzz5t6jTcvtWEInvck3B12UzcsB38UrZt3kmb2ralicTCI5tgK%2FhFE3gcLWGO3IUuLN7uwq82MoAcz6j4J57DjJ3v1Re34P1itfJMVGLk8vDtrg3Tt8X7m3EWt3SjztRHMymes5vN0eLuiH8f4TSMuayrNwkYt1uStjdwsMPbnXSYFm4%2F9m3tU7Ea7v8oLx6MYf%2FQC2KpWCRtv7YIwx6KqxAY6pgH64h3eWZnOI%2FHZYtFQKhCBdpJGc3A%2FHIhSHEKRGVR0EIqUSau3VUMFjTYI5bRKTvVzFYBoKbtyYsDT3SAaIPkycpF5BSkMjcFcJqhDw9l9YGjBz54HwIxhVeyZSuEx9LMh01W993Av0CChp%2BaxhNvYDyw0i2OGIskXuDD72YUB0kaUU1Fk3hCcAlSDzjjrOekpEW%2BfqfGjfQOrPXPnrvaAqOwFDSAG&X-Amz-Signature=1bdd39df36f4ff8653300d52944cf3d66d14d4c63319d42c5a2333792ef233df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SMQBFMJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6JcNex4rjTY8q7ntKDBvFCkDfqaTzkxTRw5n4qryD%2FAiAuc04iav3Z8hz1oYX4Jlc%2FoUN7tkmHCxyQy0%2FCUwVdhSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYKYHoBdQAbvbhRBaKtwDlxMuPpaMvasc%2FN%2B%2B0mO5ozTURp%2B2vdxEpChoRjGPo8ibjMA5Fh56NxM4iF1l%2F2m6Fnhl5wo7s%2BGo8FxBp49a52ONAEzyMFln4qm6xwCbXjeYCTmxiJsuEpHFb7Rxbe%2F1I7cXJu9%2B6LL4K%2FIyzC1jVj%2BSpChf4mKTXvAJuWw9h%2Bi5NFLM%2BtJOAAhysrrLO65AG0RNZaaE6Zk0Wk%2FrhsigLI2Ahq45MgfA5c3iAwZL3LmVXh0oaK2RuKWkwSWJroehX1neqQ5xp5e%2Bdx2TYNqm0mmkL5m7OVXtUxRlfZejSN5WggKArQGcGn1p6kRrXZyHLVBUfqk24l%2BGtyQizUIzEksNVHJbOPT6Fbd08CgXbV0N3XLSEYyyw55OrYBt87QmvrRAR2AyICwGopqxo9n%2BGiYicv3dkVNO0bDbYt7GnaPzz5t6jTcvtWEInvck3B12UzcsB38UrZt3kmb2ralicTCI5tgK%2FhFE3gcLWGO3IUuLN7uwq82MoAcz6j4J57DjJ3v1Re34P1itfJMVGLk8vDtrg3Tt8X7m3EWt3SjztRHMymes5vN0eLuiH8f4TSMuayrNwkYt1uStjdwsMPbnXSYFm4%2F9m3tU7Ea7v8oLx6MYf%2FQC2KpWCRtv7YIwx6KqxAY6pgH64h3eWZnOI%2FHZYtFQKhCBdpJGc3A%2FHIhSHEKRGVR0EIqUSau3VUMFjTYI5bRKTvVzFYBoKbtyYsDT3SAaIPkycpF5BSkMjcFcJqhDw9l9YGjBz54HwIxhVeyZSuEx9LMh01W993Av0CChp%2BaxhNvYDyw0i2OGIskXuDD72YUB0kaUU1Fk3hCcAlSDzjjrOekpEW%2BfqfGjfQOrPXPnrvaAqOwFDSAG&X-Amz-Signature=ebddff65364390f5d7566ab8e4145341b4b3108ca342c8d7a8876ffe2f54df30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SMQBFMJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6JcNex4rjTY8q7ntKDBvFCkDfqaTzkxTRw5n4qryD%2FAiAuc04iav3Z8hz1oYX4Jlc%2FoUN7tkmHCxyQy0%2FCUwVdhSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYKYHoBdQAbvbhRBaKtwDlxMuPpaMvasc%2FN%2B%2B0mO5ozTURp%2B2vdxEpChoRjGPo8ibjMA5Fh56NxM4iF1l%2F2m6Fnhl5wo7s%2BGo8FxBp49a52ONAEzyMFln4qm6xwCbXjeYCTmxiJsuEpHFb7Rxbe%2F1I7cXJu9%2B6LL4K%2FIyzC1jVj%2BSpChf4mKTXvAJuWw9h%2Bi5NFLM%2BtJOAAhysrrLO65AG0RNZaaE6Zk0Wk%2FrhsigLI2Ahq45MgfA5c3iAwZL3LmVXh0oaK2RuKWkwSWJroehX1neqQ5xp5e%2Bdx2TYNqm0mmkL5m7OVXtUxRlfZejSN5WggKArQGcGn1p6kRrXZyHLVBUfqk24l%2BGtyQizUIzEksNVHJbOPT6Fbd08CgXbV0N3XLSEYyyw55OrYBt87QmvrRAR2AyICwGopqxo9n%2BGiYicv3dkVNO0bDbYt7GnaPzz5t6jTcvtWEInvck3B12UzcsB38UrZt3kmb2ralicTCI5tgK%2FhFE3gcLWGO3IUuLN7uwq82MoAcz6j4J57DjJ3v1Re34P1itfJMVGLk8vDtrg3Tt8X7m3EWt3SjztRHMymes5vN0eLuiH8f4TSMuayrNwkYt1uStjdwsMPbnXSYFm4%2F9m3tU7Ea7v8oLx6MYf%2FQC2KpWCRtv7YIwx6KqxAY6pgH64h3eWZnOI%2FHZYtFQKhCBdpJGc3A%2FHIhSHEKRGVR0EIqUSau3VUMFjTYI5bRKTvVzFYBoKbtyYsDT3SAaIPkycpF5BSkMjcFcJqhDw9l9YGjBz54HwIxhVeyZSuEx9LMh01W993Av0CChp%2BaxhNvYDyw0i2OGIskXuDD72YUB0kaUU1Fk3hCcAlSDzjjrOekpEW%2BfqfGjfQOrPXPnrvaAqOwFDSAG&X-Amz-Signature=cfadd0309ac7d075967f90c889955db6cd7ca445b144369a064d3988dfe98a3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

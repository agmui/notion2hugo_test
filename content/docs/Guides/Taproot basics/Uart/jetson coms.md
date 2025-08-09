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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCRTXCHE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCaBoIYuY5apjanUxcBJsMMnFGV12x%2FbQUtdmv5roekyAIhAPHnjlVhgevauaqh7XU9q365JI29roO7UtlnDoUzwOufKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcPfy5X77VSCK5Ruwq3AOTj0VRfVPj2z79ab8HCjVIa8Bzd90ieuXldkCNFUCFATToh8RrcV%2BXuOUoSU0eAd1187FdaQRQ86XiwqfyJCoRVTUf2RilrI6vyr%2BTcGLAHtmdiyXHqHY0g1PbQAtTDutRXzh%2F2ouvrwvTjRgfbGCwHg5O2V9aznKKGdQmHuS5qvwHaeMFcmKt%2F9NGVUQNW7qoXphHEZ8tacUY%2FT3oOn08nhSnwWUbG5a%2B%2FdQn1P%2BUoyI4De6%2BWSNvN6JbhpV5WSJX1XEwFpLGgzm8HgSlPWbdqoicqGBSV4ZWnbJXj6sAinAHY4ar0Dce8RYdds2X3CDG2L1R63FO1KUDZBC5%2BfQJwB8m6MpNe%2B7BevrcMvw9PxF%2Bmo97bGNvvnW7ps6u9ZJHJ9h3P7PlRE9m5YvmL0m5mDhdXZJCGg1sRSjfjeNsSfqeP4Nwh4PBblq1ZL5jP8U5q1fkdYzPutS3l%2BAFKToijTirci5QhkBeZ9Xp8vIMMXeap48ky%2B8Dffpbbl%2BLidz5pGfoY%2FsjqhVt%2Bv2G%2FdItNAJisoZWo3TeEhXZGXfQBtuOoRm6OaFALUeQ3FdC6jqCNl2b9tDlHDq6e%2FFFjir%2BkLNpH0CHdnUSp2KP1ryPJAdxdv8f%2BPtoEZKxRjCexNvEBjqkAUMrDtGBlhyy4ZJwYj6OAwtA2R36ckVJweBkO7z2l7JlkW3XUy3bgp4YFX3BoFYxCT%2Fulm8msYTyvh%2BL46x77GRZRfuP8xliCJ9H1%2B3euhfpcPtwwSMRPvYpB9a342vlnVV9eRv%2BHL79jgNtrelyCZwqyV2OMpc2sHUW1HdnPLhy25sN4SlyAmMSld2wWI%2BlDG3j8wH%2FtpmOi%2B4%2FYrdUQgtgIc8x&X-Amz-Signature=4fcce945e8211e8a8337fd5d4a2a8e9155768023a6add0dd64ed378ccab5c494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYSTQQ3W%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDPqUcGhTbCksSmulViMXT63b9qbhIX22Jlgf363B7nBAIhAIwGLLqylRCWj2TQsiIlKVZqiJWoZ41AgjZrDylEgXlkKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjAcGRiRQtHb6KAWUq3AMnoieu4Rum6iOzW2Iz2tutzC0%2FMUDpMCAyZP4rbcQNno5dglxsVZqVxK3ocABJTygqqTobr3TEraeJ3ZGIlyp4aFhGq%2FLu1yKycmzTRpEXGObiuoLCtWavzwOyhGzrY4C5XKJPtL1CpHiHPqpiJoiW2BcLjdNs0HlGxVyukPrfYVtLNEdSB%2FgghtLfFhnJ%2Fg7jqylFBhAZ5hK46WFkuIlJj0ehRk0W29HXzuHSKq5rz%2BA8HVyn6s%2BMi2L3mQOilJKnj39eT7V1prgvlHC%2FGgZ0A0wKdUyIH4gO5HPVNbw%2F7P34t28SHvYJuK2JC46ZwgxoPBr%2FY20EQhOrkWGwSW6yWeB1gyfDP85TPgMuR4w1DXDQZE5Qi5244MApZYH6KwnUXOuXU3E5Ii%2Bux8%2FrCtI6%2FL73O8pXVVI65iF0ohygw%2BKyBlWw1Adasx8iCaA1bva8ICoFx%2Bixq3A%2BBZBzMd7pZLyTCSR28%2Fy0G9BBjC3ytBPdlgxjfmfd7tSjaSIgBG8HhytKqTmeK7DKAD3ckW4irfH6fAXcJIZ8MGt2vJg0wa3jvgc2QvBphytw57xMHzk%2BpMoq2NiteYMgqIVFe4JyDCF1OBxMCVIv6RZrB1SiUtC8D2XhP5AATb6hWjD1xNvEBjqkAYllqdvFYa2h3E0DdAMApkd4rtS23pjYLIXilw%2Flar3MzS1T1fPIVfDtwzQadh0sc9zZIpynKP19wWnxjq9ISVSBn1lI%2FmohMPumfkiJRAi3TKyG%2FFIhy8mhxLRXZYNmV7P9SxOa8gxVsVr39x7TmHZGFefF8SAKnXXBh4yUrzRCDesudyu5azII5vF06yOLSRNItpRjxo6oAO%2BD8n%2B26sp5fK%2F4&X-Amz-Signature=b631e296dcea9fc3609fa54415161f125d344e035ebd8298a6437f525908c3d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYSTQQ3W%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDPqUcGhTbCksSmulViMXT63b9qbhIX22Jlgf363B7nBAIhAIwGLLqylRCWj2TQsiIlKVZqiJWoZ41AgjZrDylEgXlkKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjAcGRiRQtHb6KAWUq3AMnoieu4Rum6iOzW2Iz2tutzC0%2FMUDpMCAyZP4rbcQNno5dglxsVZqVxK3ocABJTygqqTobr3TEraeJ3ZGIlyp4aFhGq%2FLu1yKycmzTRpEXGObiuoLCtWavzwOyhGzrY4C5XKJPtL1CpHiHPqpiJoiW2BcLjdNs0HlGxVyukPrfYVtLNEdSB%2FgghtLfFhnJ%2Fg7jqylFBhAZ5hK46WFkuIlJj0ehRk0W29HXzuHSKq5rz%2BA8HVyn6s%2BMi2L3mQOilJKnj39eT7V1prgvlHC%2FGgZ0A0wKdUyIH4gO5HPVNbw%2F7P34t28SHvYJuK2JC46ZwgxoPBr%2FY20EQhOrkWGwSW6yWeB1gyfDP85TPgMuR4w1DXDQZE5Qi5244MApZYH6KwnUXOuXU3E5Ii%2Bux8%2FrCtI6%2FL73O8pXVVI65iF0ohygw%2BKyBlWw1Adasx8iCaA1bva8ICoFx%2Bixq3A%2BBZBzMd7pZLyTCSR28%2Fy0G9BBjC3ytBPdlgxjfmfd7tSjaSIgBG8HhytKqTmeK7DKAD3ckW4irfH6fAXcJIZ8MGt2vJg0wa3jvgc2QvBphytw57xMHzk%2BpMoq2NiteYMgqIVFe4JyDCF1OBxMCVIv6RZrB1SiUtC8D2XhP5AATb6hWjD1xNvEBjqkAYllqdvFYa2h3E0DdAMApkd4rtS23pjYLIXilw%2Flar3MzS1T1fPIVfDtwzQadh0sc9zZIpynKP19wWnxjq9ISVSBn1lI%2FmohMPumfkiJRAi3TKyG%2FFIhy8mhxLRXZYNmV7P9SxOa8gxVsVr39x7TmHZGFefF8SAKnXXBh4yUrzRCDesudyu5azII5vF06yOLSRNItpRjxo6oAO%2BD8n%2B26sp5fK%2F4&X-Amz-Signature=46e650990d758fd7396fff934b74bc76764d733b0335e7c28f58b4b09113eb47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYSTQQ3W%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDPqUcGhTbCksSmulViMXT63b9qbhIX22Jlgf363B7nBAIhAIwGLLqylRCWj2TQsiIlKVZqiJWoZ41AgjZrDylEgXlkKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjAcGRiRQtHb6KAWUq3AMnoieu4Rum6iOzW2Iz2tutzC0%2FMUDpMCAyZP4rbcQNno5dglxsVZqVxK3ocABJTygqqTobr3TEraeJ3ZGIlyp4aFhGq%2FLu1yKycmzTRpEXGObiuoLCtWavzwOyhGzrY4C5XKJPtL1CpHiHPqpiJoiW2BcLjdNs0HlGxVyukPrfYVtLNEdSB%2FgghtLfFhnJ%2Fg7jqylFBhAZ5hK46WFkuIlJj0ehRk0W29HXzuHSKq5rz%2BA8HVyn6s%2BMi2L3mQOilJKnj39eT7V1prgvlHC%2FGgZ0A0wKdUyIH4gO5HPVNbw%2F7P34t28SHvYJuK2JC46ZwgxoPBr%2FY20EQhOrkWGwSW6yWeB1gyfDP85TPgMuR4w1DXDQZE5Qi5244MApZYH6KwnUXOuXU3E5Ii%2Bux8%2FrCtI6%2FL73O8pXVVI65iF0ohygw%2BKyBlWw1Adasx8iCaA1bva8ICoFx%2Bixq3A%2BBZBzMd7pZLyTCSR28%2Fy0G9BBjC3ytBPdlgxjfmfd7tSjaSIgBG8HhytKqTmeK7DKAD3ckW4irfH6fAXcJIZ8MGt2vJg0wa3jvgc2QvBphytw57xMHzk%2BpMoq2NiteYMgqIVFe4JyDCF1OBxMCVIv6RZrB1SiUtC8D2XhP5AATb6hWjD1xNvEBjqkAYllqdvFYa2h3E0DdAMApkd4rtS23pjYLIXilw%2Flar3MzS1T1fPIVfDtwzQadh0sc9zZIpynKP19wWnxjq9ISVSBn1lI%2FmohMPumfkiJRAi3TKyG%2FFIhy8mhxLRXZYNmV7P9SxOa8gxVsVr39x7TmHZGFefF8SAKnXXBh4yUrzRCDesudyu5azII5vF06yOLSRNItpRjxo6oAO%2BD8n%2B26sp5fK%2F4&X-Amz-Signature=cf568224363ae13c72c5dddf8fe520a5bce0abb04d8cd7e207d729cd786163c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAWZJ3TZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDG%2BuV8GaLXoPwDCktwEAuRF5Ebxn5rWrZ6LEHNqPzmRAiEA4nP9fhWXuaFeEd5xCirLiIM5cA3%2BCqaGcHYxl1CBKgkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIcoaCrFLXs%2BCSjVCyrcAxhvG5yud97qM8P2WBfC3EQ6xYa6qJb4TZg78e7yz2tgp8pOW3Jo02976UddvY2LCI9NtEWrgc%2Fgblswj1qi5h5PwhPy2xqHkuclQS%2BOeBnLYUOt83Erew60hSZwNeMyUwb%2BK45v%2FEglm6sygBXueTAaBLsYzKmnLUOqjzbr13sZhtGilmooTT5AsY4YpevRN6tpPEgVzDG48%2BYnpT3q7pvV9kjB20wCERsjHpi9RbIh1IGfp6jLbigodVSRk07fNwrsDRufbsFjvTC7oVjFjo6MhyjkMU9arQhs4yY9krkZ6j4pV9h0Kfup2P%2BMMwanA%2Fq%2BxvPMZrWJpPUR8PWfQPyiGcUY37ITZD812N45N62APXZxhpcL1sg6jYficUcf90ZHgKCNZqYMat1QwfmP3A%2BiXxU0e65J3QSijPjVQSUV0bA%2BnL2cJzGCRudKduDZoSWbdn4Km1VGNbk8nvNodm629lGHU6b7jdS%2FVR9WWC2ae10ai1BzimaY7%2FiQC7zo%2B3c2CqwfnS6lkKnrDYwOZUGFCaRxEj%2FB4hmGFdv9ZKo%2FA66QknPeYraoBagBHe0sbTr%2FSq4VPi%2FdnpFq1eJp0RJY5o8nvIG4%2BhFS6k1GaGznOditGl8bUdkcTHuYMJahu8QGOqUBD80EDAmqX7ivfDP3byOizCSUVz7KCKoip4%2BuG21EsPMM5kZjtZ0VsOxQ4hu%2F0X6g25yGKcyaWnYqHniGk6w7dZ8JYOogtPn%2BLTiaYFoy0oVo4xXicixhdw161Qz9Zc2Z4d7sLFCfucdGzz23rSOIJOZ75MQt1%2FDxYQqml%2FtZTDFHAsmepcDUkssLG0%2B5bIcZ%2FDCvi2yEde9UGnHIIK2tuRRCiM4X&X-Amz-Signature=7eb781e98e61e7675ae7e3053ee41c96ae3296a1ad1a1e2bc1a1044a175dbe76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIYSNBX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClaV9vyp8bwARtjBuh9%2BImpgFfJwjWSDPKm3fq1yoh3QIgEq3UulIpTd5VFc31M8F8DaQN5NQZf1niM9DN0%2BDT%2Fo0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJi%2BxDaQNhFaNLVYjCrcA3bcAsl8gVtE09tB0CdxqW0wR60ilxuaLq5L6owGwIVoT1A%2BZiUt39nhY%2BUGAA6bBi%2FD7xMwMoq9ld3dnIiQnx16pV8%2BvRgXd3KkOuQH841RpgQ4DtXb%2BkxaC68uSDGwsCivi9zVXlr6MHVuguL9n8aA5RAw8yxhNS37DozzvF6airtFNw0jalyib9hD8KSonkDaI%2FW2nFkIONjCEwldAI2ivEjfNrLCkzG3nscYc%2FKWkAij0vBaQOtaE5gul7OU0sdZWjT9aIGHDfKXDLStX%2FLfqfH0DERNDKICQ%2Bm7n4af4lhUvcSqN7DxOCysUh1kMEcY4FGhobsR69UPMzQssLmvdD3HR6czafMCHNYjZGqi7zzJ%2FP8gXjPxkznLMUI%2FDaGAx9Gou9ralyPAs%2F7WQJY7o5jL29qCDVX%2FX6xPGO9CZu2Df0I8HCbHMsdEt%2BhIVcYpMYxUEsdwDDO7OUCtrp7mhvappF8A8hdbonGMmR5UNvuFBZnxL7hk1ZWgcVQ1ITL1tBTP9GDpcI7aIsYir%2BO3124PC97xN4WG1pn2wmpMnzv0PgYoyVwLURC7dEDQDQDwKeNx8PpuhPBlElbHuUeFD8DeRFLxcUVfKWrU5GMobGfN7fAxTn8rnARyMMKju8QGOqUBtKj1M3EloiXdezPDcObuFRYPj%2BNu%2BMvWuLQa70WUqNE%2B45JPAEkkd5uc0RA9WYws%2FKpherrxo7Av6SN44Pa2NfOh6dZ%2BB73zNe5Jh5K75A2%2BzWUYTf8i0egy49SIzFJ%2Bfzk7rFYRhX%2FYkm%2FFTinlhNo%2FNIyvtlq1qlalHoZn9e2fhymb1jxUUQktxPGc1WPlShai9srQRKNrUfd06HjiQawr0Zx4&X-Amz-Signature=2ac94e3d887b06cab12322ef43adf06d4309be90d65bd5941aecaae5070a1668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIYSNBX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClaV9vyp8bwARtjBuh9%2BImpgFfJwjWSDPKm3fq1yoh3QIgEq3UulIpTd5VFc31M8F8DaQN5NQZf1niM9DN0%2BDT%2Fo0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJi%2BxDaQNhFaNLVYjCrcA3bcAsl8gVtE09tB0CdxqW0wR60ilxuaLq5L6owGwIVoT1A%2BZiUt39nhY%2BUGAA6bBi%2FD7xMwMoq9ld3dnIiQnx16pV8%2BvRgXd3KkOuQH841RpgQ4DtXb%2BkxaC68uSDGwsCivi9zVXlr6MHVuguL9n8aA5RAw8yxhNS37DozzvF6airtFNw0jalyib9hD8KSonkDaI%2FW2nFkIONjCEwldAI2ivEjfNrLCkzG3nscYc%2FKWkAij0vBaQOtaE5gul7OU0sdZWjT9aIGHDfKXDLStX%2FLfqfH0DERNDKICQ%2Bm7n4af4lhUvcSqN7DxOCysUh1kMEcY4FGhobsR69UPMzQssLmvdD3HR6czafMCHNYjZGqi7zzJ%2FP8gXjPxkznLMUI%2FDaGAx9Gou9ralyPAs%2F7WQJY7o5jL29qCDVX%2FX6xPGO9CZu2Df0I8HCbHMsdEt%2BhIVcYpMYxUEsdwDDO7OUCtrp7mhvappF8A8hdbonGMmR5UNvuFBZnxL7hk1ZWgcVQ1ITL1tBTP9GDpcI7aIsYir%2BO3124PC97xN4WG1pn2wmpMnzv0PgYoyVwLURC7dEDQDQDwKeNx8PpuhPBlElbHuUeFD8DeRFLxcUVfKWrU5GMobGfN7fAxTn8rnARyMMKju8QGOqUBtKj1M3EloiXdezPDcObuFRYPj%2BNu%2BMvWuLQa70WUqNE%2B45JPAEkkd5uc0RA9WYws%2FKpherrxo7Av6SN44Pa2NfOh6dZ%2BB73zNe5Jh5K75A2%2BzWUYTf8i0egy49SIzFJ%2Bfzk7rFYRhX%2FYkm%2FFTinlhNo%2FNIyvtlq1qlalHoZn9e2fhymb1jxUUQktxPGc1WPlShai9srQRKNrUfd06HjiQawr0Zx4&X-Amz-Signature=75814b7de1127a343408e7d9852c18a88000451fe2f8c9141e7386ac65480e6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FIYSNBX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClaV9vyp8bwARtjBuh9%2BImpgFfJwjWSDPKm3fq1yoh3QIgEq3UulIpTd5VFc31M8F8DaQN5NQZf1niM9DN0%2BDT%2Fo0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJi%2BxDaQNhFaNLVYjCrcA3bcAsl8gVtE09tB0CdxqW0wR60ilxuaLq5L6owGwIVoT1A%2BZiUt39nhY%2BUGAA6bBi%2FD7xMwMoq9ld3dnIiQnx16pV8%2BvRgXd3KkOuQH841RpgQ4DtXb%2BkxaC68uSDGwsCivi9zVXlr6MHVuguL9n8aA5RAw8yxhNS37DozzvF6airtFNw0jalyib9hD8KSonkDaI%2FW2nFkIONjCEwldAI2ivEjfNrLCkzG3nscYc%2FKWkAij0vBaQOtaE5gul7OU0sdZWjT9aIGHDfKXDLStX%2FLfqfH0DERNDKICQ%2Bm7n4af4lhUvcSqN7DxOCysUh1kMEcY4FGhobsR69UPMzQssLmvdD3HR6czafMCHNYjZGqi7zzJ%2FP8gXjPxkznLMUI%2FDaGAx9Gou9ralyPAs%2F7WQJY7o5jL29qCDVX%2FX6xPGO9CZu2Df0I8HCbHMsdEt%2BhIVcYpMYxUEsdwDDO7OUCtrp7mhvappF8A8hdbonGMmR5UNvuFBZnxL7hk1ZWgcVQ1ITL1tBTP9GDpcI7aIsYir%2BO3124PC97xN4WG1pn2wmpMnzv0PgYoyVwLURC7dEDQDQDwKeNx8PpuhPBlElbHuUeFD8DeRFLxcUVfKWrU5GMobGfN7fAxTn8rnARyMMKju8QGOqUBtKj1M3EloiXdezPDcObuFRYPj%2BNu%2BMvWuLQa70WUqNE%2B45JPAEkkd5uc0RA9WYws%2FKpherrxo7Av6SN44Pa2NfOh6dZ%2BB73zNe5Jh5K75A2%2BzWUYTf8i0egy49SIzFJ%2Bfzk7rFYRhX%2FYkm%2FFTinlhNo%2FNIyvtlq1qlalHoZn9e2fhymb1jxUUQktxPGc1WPlShai9srQRKNrUfd06HjiQawr0Zx4&X-Amz-Signature=8281d1eb23f97db987e70a0ff073c95c8b09d9a57b7a5b522e02be4fe3bf2fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

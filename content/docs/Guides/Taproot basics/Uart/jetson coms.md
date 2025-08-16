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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635MASNIP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCDvF5vYbniZbtUnJy3AMOHgZ3yLb11bdch3l7YXSCq%2FQIgWt6SWPjYgFhSopirsBqmtDzWhQazxvbu20jVHnUk6twq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDd9ik1S1v7qxJFviircAy3IubD0hR0zWcq%2BzMiKxu4xjKtM2LERg0U5ZEqDnPPEy8PoYxH3PTWB%2FCGtJPt0Ol2SJ%2FiC9IocW9c84ktXzCe5T1HMdD4wYCfVUaLnhHypf%2FvQztVaspyNloRAZ93R5CDmvsFt5aDXynE7xoWmXQV54blrRMPaFEfgj4bBabzEsnGhSNW1cVRqKfPXXIocms%2FPV3DJpFHtHSzEqRQvCxgKRK5AQ4kg25XzZ6D6I8ECu9050VjNnJ1I38HZrBA%2FhrGrH18%2F812z8elGE%2FtgcS2yU6rZGGkrHGu%2FBe0KZSsAoKxPvC6A6q1fhjFUPyYj3GTWGABUqpdiQFDYIsUni1cgRkVLoF9L29p3dtcIc%2BJxdTKY4l28knkX7yxz5Tq0uUQiAjlgYg0BGXqV%2FCctkUpeLNJsxsA1w%2FKzYcgCKKLR7fJGaBJ4lcpdDfWtySJAPkWEZd%2BdSGO0UqhdCbKTgDxPfabVrkaF3A0wZXVVJ7vOaxcn0P66fTkwLuZ4hw5cG0SZXla5DITdh6mw%2Bd5LK2cwtz3LtqtdvyKwplGkz3py40NGQpYXKT0wgkuNk1I9jTV7UC9mVybPh40L4qfy7rLp%2BtosT6yn1ZBzCZyTPgD99rv57PrjDD%2FZbdcLMMiagsUGOqUBeTEl35IFsR8EdeXgMUtu5ypTzlK33y6RBFox1mOp1ZhMxf5YX%2FqqJmQ7wdowxo2WnxV7sKJqny%2BwSaUGnVhWKXmtzOJ%2F1ux3EaugA%2FZyOMT1tAuUjzBrXDAdhb8HrL99yoiwCnIrYJA5SXSZ69rRvWEK542tQs%2FKmlnLWzM%2BKJeEXpZ4xMKoW5nRuzNtAzpTuKBUcYJfiE2v5T6UuXbFA1RoqHPn&X-Amz-Signature=ed1f8f82385d30029816d961aa574a59d9db4ce1ae2e4d0c06971743be28f1d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXKG4425%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBQnEYYNrHyJSzOySLA%2B%2F8d1DD8%2B%2Fx4f9PozcLhzxpeVAiEAzB1g1GsKKn3FMF2OV13hxBu%2FAiTzjzOZHjNmIA11syoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMSnteBQcFWaHo2mZircA9mIvEVz7hEOKSoCgzZ2ftb%2FqXaOEBKzDeY4sD0%2FgE0u5e1MoU2F3tCta89Ou35jdMT3hPX48RKqNdk77kSFpRacR5q2x01B0hAgJz3W5j%2Bk2UXWiiggMwyl3dWQLkIfaQK%2FDbMrZ9nT31zqrKQBPvajDXxtLlWuws64oSXocXNP6eGkOU85jAZ7I9MDuf5IJP2gZa3H8SsT40Bxk9BTb6P5dUMmoiE6gnUT3nSJSdepMa4ISX%2Fpnr0C2XOzJaOOd9xiQUMHsIo9yjBcgMG%2FeC3wo%2B136DkcFLPyWHOREKADQzvBVD%2FrYXd1UFYw8bUu7EYP5fVBchcFGEoc4c0z5QGvrsdAeUrARP12HZYdSzfDB9q7NSwHeQ0pqBDroTd7H5udkAK5FGhiDYeeDipW58%2FD9KF6WyhEHLkypooiioXfQVzqSc0qk6FTgR6s2Y5xoUnhQC7VMHlJz7ZslLE9AyIUEf%2Brd3KEnUy%2BlmDOL0TYCtJNEmzx80EP8hAqHG4rw4z%2BkKXjHprQCvFmIEWmF6RGNY4%2BDSyrkXavRGmBfF3L3MchGalt0NVPTVNA6BFs2Lq7V4sBZanhRKWI12eqxf0rqnJ3ZUn53I7y0q4Jv5DYFctNEwHKcjhjnMORMM%2BcgsUGOqUBecrwMhdsaCDjDjOIw%2BS%2FblsKCcWlat4oECwdT0Y%2Fp%2FVPvdaOtGFE6rnpTVTCjXqs1zEyL4jj0zedcNOAm2xbwOLrPIms5195SpVWSfOANFeAYpFXNewOdeofai4%2FKWEfOZxMTdLGLvIxQCoZTunuDKaHaWZ9FT3vBTEhQnprA59U5exyR8VFeWx2eC487h0%2FVBGSO9bpEnlMD4z9a6xq%2BgpSlzzA&X-Amz-Signature=58b92fbf7fd913add9dd61af5cba81f8ad061f3a5858f0d7a2f7ab08464cf63a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXKG4425%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBQnEYYNrHyJSzOySLA%2B%2F8d1DD8%2B%2Fx4f9PozcLhzxpeVAiEAzB1g1GsKKn3FMF2OV13hxBu%2FAiTzjzOZHjNmIA11syoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMSnteBQcFWaHo2mZircA9mIvEVz7hEOKSoCgzZ2ftb%2FqXaOEBKzDeY4sD0%2FgE0u5e1MoU2F3tCta89Ou35jdMT3hPX48RKqNdk77kSFpRacR5q2x01B0hAgJz3W5j%2Bk2UXWiiggMwyl3dWQLkIfaQK%2FDbMrZ9nT31zqrKQBPvajDXxtLlWuws64oSXocXNP6eGkOU85jAZ7I9MDuf5IJP2gZa3H8SsT40Bxk9BTb6P5dUMmoiE6gnUT3nSJSdepMa4ISX%2Fpnr0C2XOzJaOOd9xiQUMHsIo9yjBcgMG%2FeC3wo%2B136DkcFLPyWHOREKADQzvBVD%2FrYXd1UFYw8bUu7EYP5fVBchcFGEoc4c0z5QGvrsdAeUrARP12HZYdSzfDB9q7NSwHeQ0pqBDroTd7H5udkAK5FGhiDYeeDipW58%2FD9KF6WyhEHLkypooiioXfQVzqSc0qk6FTgR6s2Y5xoUnhQC7VMHlJz7ZslLE9AyIUEf%2Brd3KEnUy%2BlmDOL0TYCtJNEmzx80EP8hAqHG4rw4z%2BkKXjHprQCvFmIEWmF6RGNY4%2BDSyrkXavRGmBfF3L3MchGalt0NVPTVNA6BFs2Lq7V4sBZanhRKWI12eqxf0rqnJ3ZUn53I7y0q4Jv5DYFctNEwHKcjhjnMORMM%2BcgsUGOqUBecrwMhdsaCDjDjOIw%2BS%2FblsKCcWlat4oECwdT0Y%2Fp%2FVPvdaOtGFE6rnpTVTCjXqs1zEyL4jj0zedcNOAm2xbwOLrPIms5195SpVWSfOANFeAYpFXNewOdeofai4%2FKWEfOZxMTdLGLvIxQCoZTunuDKaHaWZ9FT3vBTEhQnprA59U5exyR8VFeWx2eC487h0%2FVBGSO9bpEnlMD4z9a6xq%2BgpSlzzA&X-Amz-Signature=a7d439e51e67a6dded0682f9beda7b43fbf8fef6a7d455e80c64e5efc6ebf499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXKG4425%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBQnEYYNrHyJSzOySLA%2B%2F8d1DD8%2B%2Fx4f9PozcLhzxpeVAiEAzB1g1GsKKn3FMF2OV13hxBu%2FAiTzjzOZHjNmIA11syoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMSnteBQcFWaHo2mZircA9mIvEVz7hEOKSoCgzZ2ftb%2FqXaOEBKzDeY4sD0%2FgE0u5e1MoU2F3tCta89Ou35jdMT3hPX48RKqNdk77kSFpRacR5q2x01B0hAgJz3W5j%2Bk2UXWiiggMwyl3dWQLkIfaQK%2FDbMrZ9nT31zqrKQBPvajDXxtLlWuws64oSXocXNP6eGkOU85jAZ7I9MDuf5IJP2gZa3H8SsT40Bxk9BTb6P5dUMmoiE6gnUT3nSJSdepMa4ISX%2Fpnr0C2XOzJaOOd9xiQUMHsIo9yjBcgMG%2FeC3wo%2B136DkcFLPyWHOREKADQzvBVD%2FrYXd1UFYw8bUu7EYP5fVBchcFGEoc4c0z5QGvrsdAeUrARP12HZYdSzfDB9q7NSwHeQ0pqBDroTd7H5udkAK5FGhiDYeeDipW58%2FD9KF6WyhEHLkypooiioXfQVzqSc0qk6FTgR6s2Y5xoUnhQC7VMHlJz7ZslLE9AyIUEf%2Brd3KEnUy%2BlmDOL0TYCtJNEmzx80EP8hAqHG4rw4z%2BkKXjHprQCvFmIEWmF6RGNY4%2BDSyrkXavRGmBfF3L3MchGalt0NVPTVNA6BFs2Lq7V4sBZanhRKWI12eqxf0rqnJ3ZUn53I7y0q4Jv5DYFctNEwHKcjhjnMORMM%2BcgsUGOqUBecrwMhdsaCDjDjOIw%2BS%2FblsKCcWlat4oECwdT0Y%2Fp%2FVPvdaOtGFE6rnpTVTCjXqs1zEyL4jj0zedcNOAm2xbwOLrPIms5195SpVWSfOANFeAYpFXNewOdeofai4%2FKWEfOZxMTdLGLvIxQCoZTunuDKaHaWZ9FT3vBTEhQnprA59U5exyR8VFeWx2eC487h0%2FVBGSO9bpEnlMD4z9a6xq%2BgpSlzzA&X-Amz-Signature=9e49fb585225c14ec2356bc4d475960adf9aef62408ed01a2afba40a23dfe614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

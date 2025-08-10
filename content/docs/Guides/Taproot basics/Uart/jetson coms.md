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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5Q7YIMM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ6021e3fTHs7OvO3ppsovBDJBPwad7vfOc0aHE%2BxgCwIgLRMuA%2B17l0axSOKMKqw9NMIEhRz6jEkYxuvyWxcYqo8qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkr1POUOvy38dNbkircA0iczRvglYLm2t4dG5%2BNTb8JT94uRyoZmyq8EJj6BVjr%2Fa%2BEMgQG12JOgZcnPmq4fGpgM%2BGtEN8DouTIhHja2rpDeHPUJCT63%2FoqCd5q5bPQ36PMN9NtgpWqlT7gu2Rc8WwJHyRUCqk9amsEJ1fr83m9no%2FIKHPa%2FrVmFs%2FtalS6iaPKdo9dTArLeg%2FP4GOA6wJM7exEUnVowXwffWVMRs5t461zhZXbQa1k0Qh7ApU1td2%2BzQEDXnQJtj6n973spOOg0jQHwpTGI6kT%2F2bYZUY85gvkwkRC0ulxZvhngYcr757Jc4ElzkoCvb%2FWUR9zEgYDxhVieBNi3Rvo3rOl0OsLwLEyQo%2FLZE%2FKSmr03QWo%2BqgpuzlEkzCweJ8qmIe70F3zPflhqDa4OP%2B%2F4lMgac%2Bww6mE6m4agJnTccovIrzwoSai3omPgcXUr43B9DDuRtbnIxxqOBs%2BSiVlkdxP68wDvaL8PXvVredLojzXxeAKgkZz69lLg4GgDkVNXaRZ7aH7ZKtgZ3O5Hsu5sRFIdLOwuqe%2B8vqQ%2FM0h2NVNkgpOp0cagu8%2FDczd5TeByElXybLQEdOGiCQbHw7g6SbFWY8mLZjiLCIXwWvCCU%2FfHmv5VdoZws%2B0%2FI%2Bg3JSXMJC%2F4sQGOqUB4tBd6ezLCCbCHYfwdTVl6v7%2FIktGjHClaJjP5m3Cud27apU0Un908lu%2Bkt01jO1QyA0SWyoDC%2Fr4XpJtc%2B0IhMmB9%2FT8ZbSpe00c3vH3dzfz8DgWQ9BurNWJzWNk6bZXfkA%2BqUbpkqA79EMdX2eX1K5subwwThdb8mDOuVpi4lHQ1XDLNIBdSt40%2BJwtAPUKMK%2B1ICAd2Gcclk9mWX04t9CdWv9l&X-Amz-Signature=2e08ffbe6a1a6608be702feeb7d08ea7aa05c0d262de5533c915d1c619ecbcf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673Z4KS5I%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsyOTBrDIokHgSQJV%2FQtB%2Fmeuulajo7AamQfwNd%2B%2FJWAiEA5Opzz6tSDRZ890OSyXV7nzFkK5S9p9QOgROgpiIunOQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2QKrN46jrzac2eZSrcA4sWku6QzGAwFwwwl4XddlQDBRsjAsj2sM22wMk2fN4VQHslNWFXExhCC30pWb4Jl2RLEjshFEItIPdn646shJUsr%2FnbERZyOoCzjxTSMJpV53rB31%2FkQC9js%2B%2FzLsI8zkHcpkonY99hZUqlgJfEc9VUu%2BGGga18zzV6hjnnflOEb5fOINIwo%2Fc1sbbt5KYJYsXkwO3k7z2JvWBFGd1P7t6pwZDYhWMmlFpiskGsEgaEWhKpz%2BsJh0kR8L2UQRsWE1MR4N11pZpn9b2OemoAZARnKnoQKz50MjYVLIkEDjevDINSMARJ%2FfjLeWL6XcHCRyPIkgVK7n66VBq5e0O32jGFC0ZEsR8omdzB5w0wYyZzbRPjeT7lOFS1YS9BUEB6qJmbkwNyg%2BqpcVo0nTrD08CJlOohvpWr1FGl3zhd91GDgEt%2Btq0Bz2IVV6BdGw9Ednaazf3Z6a%2BaTRUB2QJhw3Xa9KMfTXus9QKKxZSE4DqUd9XZ0dh84s8a6USRdBXWUrBwmAfpih%2FF5%2BlgFsheZjAhY4jX5UYrzmLuxvIwSB3lE6NANrvCfeLP3IRDzuterqZISc5hG1IdbjNkpVP8DKlIlbngCh%2BQ2%2Bl9eCmyR6CCLBAlLGr%2B7Lc6YVTqMOS%2F4sQGOqUBRgRfiBvXu%2BHXb3kMvbVEEyyjWq9hBkk5GYyr%2BnWTZcp4YTbsRbgS82PClScJ22huhLCGOiN9ZZWgagvDLEoZHt8SWSS1W8cADugI%2BvZzTvALedpID2po9qBeekpbik%2FTkJN8kkHrm8uESnRc2yPXxlNyvOb12d%2FpLhFehoRMF0BXMeg2UjMqavGkLAms%2BGrq9jfu66zeoMu%2B3%2FZc7p6SYWkKYpeN&X-Amz-Signature=2384747b9f50442b3ebb1ec085f05c2c1004718bc2ac9a523e90b233c1718a9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673Z4KS5I%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsyOTBrDIokHgSQJV%2FQtB%2Fmeuulajo7AamQfwNd%2B%2FJWAiEA5Opzz6tSDRZ890OSyXV7nzFkK5S9p9QOgROgpiIunOQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2QKrN46jrzac2eZSrcA4sWku6QzGAwFwwwl4XddlQDBRsjAsj2sM22wMk2fN4VQHslNWFXExhCC30pWb4Jl2RLEjshFEItIPdn646shJUsr%2FnbERZyOoCzjxTSMJpV53rB31%2FkQC9js%2B%2FzLsI8zkHcpkonY99hZUqlgJfEc9VUu%2BGGga18zzV6hjnnflOEb5fOINIwo%2Fc1sbbt5KYJYsXkwO3k7z2JvWBFGd1P7t6pwZDYhWMmlFpiskGsEgaEWhKpz%2BsJh0kR8L2UQRsWE1MR4N11pZpn9b2OemoAZARnKnoQKz50MjYVLIkEDjevDINSMARJ%2FfjLeWL6XcHCRyPIkgVK7n66VBq5e0O32jGFC0ZEsR8omdzB5w0wYyZzbRPjeT7lOFS1YS9BUEB6qJmbkwNyg%2BqpcVo0nTrD08CJlOohvpWr1FGl3zhd91GDgEt%2Btq0Bz2IVV6BdGw9Ednaazf3Z6a%2BaTRUB2QJhw3Xa9KMfTXus9QKKxZSE4DqUd9XZ0dh84s8a6USRdBXWUrBwmAfpih%2FF5%2BlgFsheZjAhY4jX5UYrzmLuxvIwSB3lE6NANrvCfeLP3IRDzuterqZISc5hG1IdbjNkpVP8DKlIlbngCh%2BQ2%2Bl9eCmyR6CCLBAlLGr%2B7Lc6YVTqMOS%2F4sQGOqUBRgRfiBvXu%2BHXb3kMvbVEEyyjWq9hBkk5GYyr%2BnWTZcp4YTbsRbgS82PClScJ22huhLCGOiN9ZZWgagvDLEoZHt8SWSS1W8cADugI%2BvZzTvALedpID2po9qBeekpbik%2FTkJN8kkHrm8uESnRc2yPXxlNyvOb12d%2FpLhFehoRMF0BXMeg2UjMqavGkLAms%2BGrq9jfu66zeoMu%2B3%2FZc7p6SYWkKYpeN&X-Amz-Signature=973911e8a4b0c51fadef7b8578a4b10b6b1f947d7b65724353b71542eaff2689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673Z4KS5I%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsyOTBrDIokHgSQJV%2FQtB%2Fmeuulajo7AamQfwNd%2B%2FJWAiEA5Opzz6tSDRZ890OSyXV7nzFkK5S9p9QOgROgpiIunOQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2QKrN46jrzac2eZSrcA4sWku6QzGAwFwwwl4XddlQDBRsjAsj2sM22wMk2fN4VQHslNWFXExhCC30pWb4Jl2RLEjshFEItIPdn646shJUsr%2FnbERZyOoCzjxTSMJpV53rB31%2FkQC9js%2B%2FzLsI8zkHcpkonY99hZUqlgJfEc9VUu%2BGGga18zzV6hjnnflOEb5fOINIwo%2Fc1sbbt5KYJYsXkwO3k7z2JvWBFGd1P7t6pwZDYhWMmlFpiskGsEgaEWhKpz%2BsJh0kR8L2UQRsWE1MR4N11pZpn9b2OemoAZARnKnoQKz50MjYVLIkEDjevDINSMARJ%2FfjLeWL6XcHCRyPIkgVK7n66VBq5e0O32jGFC0ZEsR8omdzB5w0wYyZzbRPjeT7lOFS1YS9BUEB6qJmbkwNyg%2BqpcVo0nTrD08CJlOohvpWr1FGl3zhd91GDgEt%2Btq0Bz2IVV6BdGw9Ednaazf3Z6a%2BaTRUB2QJhw3Xa9KMfTXus9QKKxZSE4DqUd9XZ0dh84s8a6USRdBXWUrBwmAfpih%2FF5%2BlgFsheZjAhY4jX5UYrzmLuxvIwSB3lE6NANrvCfeLP3IRDzuterqZISc5hG1IdbjNkpVP8DKlIlbngCh%2BQ2%2Bl9eCmyR6CCLBAlLGr%2B7Lc6YVTqMOS%2F4sQGOqUBRgRfiBvXu%2BHXb3kMvbVEEyyjWq9hBkk5GYyr%2BnWTZcp4YTbsRbgS82PClScJ22huhLCGOiN9ZZWgagvDLEoZHt8SWSS1W8cADugI%2BvZzTvALedpID2po9qBeekpbik%2FTkJN8kkHrm8uESnRc2yPXxlNyvOb12d%2FpLhFehoRMF0BXMeg2UjMqavGkLAms%2BGrq9jfu66zeoMu%2B3%2FZc7p6SYWkKYpeN&X-Amz-Signature=f2ffa81543b185016583b40e0061d866c814b1832aa1bd45d2efcfbb77978bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

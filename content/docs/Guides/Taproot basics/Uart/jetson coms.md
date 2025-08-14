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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MZCIXZL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDTyGW5BvtDe1vYQqO5BjD2RKL68cURJsy7U3YfD3AMnAIhAJBhAVQtfertYKpALSvbCJl97yEfqsNibCwsIpgcQOlGKv8DCEwQABoMNjM3NDIzMTgzODA1IgwS7XXry6QhsuMm%2Fr0q3APzx1xF3EvQ7yvw0zVenaBf4xY7MNY%2BSILLQXIUfQOX5%2FrYanpMl4bgc3YOjZf2gaAaYx9Xb5J8h5xZBdtQXSn7gde9EVmHzu9ZzzzJBpQshRkm7A%2BPr%2FTw7Ul3RNMJdSSaLnEYNNRTdVIbHI42Wy7yEcjrC0W5kE5%2BsGEA1MMOg3jWwHJ3H0wtZtQJ%2F61%2BGktBxVFqLwXWRnioMD%2BTkUmDPQ6eghIiFY7g2THdoaFgL7gxAvmdh%2FPT%2BOFdmr48ue9zO3X832KTHM5UQ3WuXp60WX87oqE3cvqZg5rvQxhRlcDE5G%2FLF7E1cYIRsyyXmQ9kSDjU6nmIey5qhqnkzKH0wq%2BimQe41rX6fzBDuuhAf3FKiFIacRl7PUMPIpB568pdjePEnYx6tAJoCSZWmFp1cWSpL1kb%2FOzDKWnT7ELcMGNAPjJDrn%2BdBnKz2COgz2AjdTjZgZIbM0US4A5DOxACmI0GkWAIYnz8sLMtvjen%2BaEUC61qNavNaTIBC5ihh792mYnxsS%2FOucfLmnpRdyNzQ9DNWykC%2FybYzqtvXqRj7S2VzUxxhHOIo6hlo7lEm645tUHnIs5msE9ugGq1BORgAJ8T%2BpHOyDw6zQR%2Fe5LB4X3j09KjTgb40ZiL8DCz6fjEBjqkAcQOuYVzT7cfvFzu%2Fd79ntTyPfqPlbYdFTd%2FQSaDbo3z2gre6mXFV6CwIGsKslfkWO36aXipMD6ZKd4S2YcgnwZ8%2BwNNWnYZ7s2zkkCE1mDP8RzGK%2Bz0AI%2FFudR62pmx8hWFI9Zp9sYlm6trtGjWA6ryg2hh0iH5yxFvI3nktu6scb8p%2FpUVDpOrzV5dJGz7Iud8YjrCaG%2Bl7vPlWwCLrxqQOYn5&X-Amz-Signature=16111a7d0468d0ef5e88700da2f5ec368417aba00b92b18753d944dec4a66c22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GOR7NKS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCR9PfvAU5QxhdHC0qAaINuLI%2BCDu1Vv%2B%2FLRYT4yelLygIgb2jUCG0%2FOMWc%2ByGFZBydpZEGZLXMMV1J4JNvEz%2BsZ2wq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMh5E3I4e5qm4%2BdJpCrcA1crEJvR8Q1X77mZAkPVHVECAguT%2FKh%2FN91y5OjhnXvJWnkcVGIKi61UX5vBpcMbxqKH4HsyuDv%2Fux875xP%2Bb8pO%2FyqY4Lt7xkSuSBWv424GUPSEFFaxj0L4yvfttfSEHoR8C5Di8Hi8erd5wSHa51EUnNKTAVtDO3MZ6OajEFNKmESu4vFZKMaqJQ5tqtg8fC3w8RHeKzRoBo2LuQ03pDw0ATtNNpu%2FW3J7lhbI3HTZwrvr2InQHKGalmq%2F%2B8eDS8uyFFSTRQMYYDhwTs1eZUcH%2BCMm%2FG07iA6LrvTKKfJZcV4QYGeLEPZ2JCLB9S0hFds4yzGtwv6eqBX4v4Uas43z4zGOqhPRrnNmZldew60iNkyq2TMhKErDviE0ht418b6wu0ZjOFEf2ESC3Ak8z4dkUZwDetIvsh8DgU%2FUq0bLNwJIGEbRAcX5M2414P69RugBj1fbzE5VR8VGtpmvDtyqo3AId5VLuZzY2Jwb5LDXBQ46JQ%2B7tWgBicM9irgLyK4l0O3KlTc0y3jYfVAP4waYs6sg566qO4gFVIJj0bh73sOVpQK6ZlYyzTsDAxpX7MD9%2FJrWHIrskupnayaOOcsa8RCJ2ZUESOf0SAzZzep%2Bw1Oi%2FKMZo05AHAA9MKTp%2BMQGOqUBAY4IbNM%2FmYdFAwPyBflqgbqi9bt5Q7LNcikLfhSVYer%2BH3lM3EuUidHqLnr1GqwktlPB6%2BHfg0mNGyLNv8YI%2BHhJBFWsYDXjVVSKxi57B4kVImty%2FbDwmLA5Gn6hxg60ztx6trepLPwhrH3UHDMaPjyEXjNzrREEUbddmLnrvtiiMFAVnHrIgoVzL6XbD%2FnRbr0yWmXiOzCZ3K41NNLJ%2F2LdOqlQ&X-Amz-Signature=1e48cfdf005faf82b900d531d6e12dd5a9c5e8e640a0f3493d26954f549549df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GOR7NKS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCR9PfvAU5QxhdHC0qAaINuLI%2BCDu1Vv%2B%2FLRYT4yelLygIgb2jUCG0%2FOMWc%2ByGFZBydpZEGZLXMMV1J4JNvEz%2BsZ2wq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMh5E3I4e5qm4%2BdJpCrcA1crEJvR8Q1X77mZAkPVHVECAguT%2FKh%2FN91y5OjhnXvJWnkcVGIKi61UX5vBpcMbxqKH4HsyuDv%2Fux875xP%2Bb8pO%2FyqY4Lt7xkSuSBWv424GUPSEFFaxj0L4yvfttfSEHoR8C5Di8Hi8erd5wSHa51EUnNKTAVtDO3MZ6OajEFNKmESu4vFZKMaqJQ5tqtg8fC3w8RHeKzRoBo2LuQ03pDw0ATtNNpu%2FW3J7lhbI3HTZwrvr2InQHKGalmq%2F%2B8eDS8uyFFSTRQMYYDhwTs1eZUcH%2BCMm%2FG07iA6LrvTKKfJZcV4QYGeLEPZ2JCLB9S0hFds4yzGtwv6eqBX4v4Uas43z4zGOqhPRrnNmZldew60iNkyq2TMhKErDviE0ht418b6wu0ZjOFEf2ESC3Ak8z4dkUZwDetIvsh8DgU%2FUq0bLNwJIGEbRAcX5M2414P69RugBj1fbzE5VR8VGtpmvDtyqo3AId5VLuZzY2Jwb5LDXBQ46JQ%2B7tWgBicM9irgLyK4l0O3KlTc0y3jYfVAP4waYs6sg566qO4gFVIJj0bh73sOVpQK6ZlYyzTsDAxpX7MD9%2FJrWHIrskupnayaOOcsa8RCJ2ZUESOf0SAzZzep%2Bw1Oi%2FKMZo05AHAA9MKTp%2BMQGOqUBAY4IbNM%2FmYdFAwPyBflqgbqi9bt5Q7LNcikLfhSVYer%2BH3lM3EuUidHqLnr1GqwktlPB6%2BHfg0mNGyLNv8YI%2BHhJBFWsYDXjVVSKxi57B4kVImty%2FbDwmLA5Gn6hxg60ztx6trepLPwhrH3UHDMaPjyEXjNzrREEUbddmLnrvtiiMFAVnHrIgoVzL6XbD%2FnRbr0yWmXiOzCZ3K41NNLJ%2F2LdOqlQ&X-Amz-Signature=f0b8a06dfc0c0f6b0e867b198cd69fb1a893a954635d31033171fe6aa6d7e6b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GOR7NKS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCR9PfvAU5QxhdHC0qAaINuLI%2BCDu1Vv%2B%2FLRYT4yelLygIgb2jUCG0%2FOMWc%2ByGFZBydpZEGZLXMMV1J4JNvEz%2BsZ2wq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMh5E3I4e5qm4%2BdJpCrcA1crEJvR8Q1X77mZAkPVHVECAguT%2FKh%2FN91y5OjhnXvJWnkcVGIKi61UX5vBpcMbxqKH4HsyuDv%2Fux875xP%2Bb8pO%2FyqY4Lt7xkSuSBWv424GUPSEFFaxj0L4yvfttfSEHoR8C5Di8Hi8erd5wSHa51EUnNKTAVtDO3MZ6OajEFNKmESu4vFZKMaqJQ5tqtg8fC3w8RHeKzRoBo2LuQ03pDw0ATtNNpu%2FW3J7lhbI3HTZwrvr2InQHKGalmq%2F%2B8eDS8uyFFSTRQMYYDhwTs1eZUcH%2BCMm%2FG07iA6LrvTKKfJZcV4QYGeLEPZ2JCLB9S0hFds4yzGtwv6eqBX4v4Uas43z4zGOqhPRrnNmZldew60iNkyq2TMhKErDviE0ht418b6wu0ZjOFEf2ESC3Ak8z4dkUZwDetIvsh8DgU%2FUq0bLNwJIGEbRAcX5M2414P69RugBj1fbzE5VR8VGtpmvDtyqo3AId5VLuZzY2Jwb5LDXBQ46JQ%2B7tWgBicM9irgLyK4l0O3KlTc0y3jYfVAP4waYs6sg566qO4gFVIJj0bh73sOVpQK6ZlYyzTsDAxpX7MD9%2FJrWHIrskupnayaOOcsa8RCJ2ZUESOf0SAzZzep%2Bw1Oi%2FKMZo05AHAA9MKTp%2BMQGOqUBAY4IbNM%2FmYdFAwPyBflqgbqi9bt5Q7LNcikLfhSVYer%2BH3lM3EuUidHqLnr1GqwktlPB6%2BHfg0mNGyLNv8YI%2BHhJBFWsYDXjVVSKxi57B4kVImty%2FbDwmLA5Gn6hxg60ztx6trepLPwhrH3UHDMaPjyEXjNzrREEUbddmLnrvtiiMFAVnHrIgoVzL6XbD%2FnRbr0yWmXiOzCZ3K41NNLJ%2F2LdOqlQ&X-Amz-Signature=f1524c131bccd4519c83dee163528aaa13d8758101f955169c5326c94baae423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

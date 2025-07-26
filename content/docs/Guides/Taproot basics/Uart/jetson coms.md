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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674HFW6DN%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDHzlXgByGhKE4gTmlHi3IcJgkKykfg0ggluPLOiY5QMgIhAK5vL9EoIHz6oAgNPI4F4qfoaj1JXw5SBo8RooZdb08fKv8DCGYQABoMNjM3NDIzMTgzODA1IgwgAYaEk4DpqKNvE%2Fgq3AOyvbRc5zo3uq%2BpF7rxvr%2BtiSENoq6uYhTVDIugLxPP%2B%2FB1AZ3Qk%2F9JBJep5aSdmJddXN0gsxGsPb8vTPHRHB%2FRQiufpk%2BjrXbD9%2FjVrgna%2Fn4uCZs6XnrXWg2Lwx%2BvAHhYOTEN%2BUqjqPb5f0WJCy6PYfVkftyatYUxaeLPRAzak%2FQsGq9h61jvpsSvh50HZS%2Baoyq36gx1kpAj5pxtDZCyvXfshrdcfwoE58lBLNSbcs%2F0IHZdjaT1avLEvumS2lp4f6bHa5bAV3AByVmC7iv2Za7MFbL%2B7Rot6laVTBhZx0RKsIBpPjQnwWty4jAl%2Bc%2FcRvHrYIG7Qt0c6x%2Bnno%2B30Xc8uv0RqB8tQ8bIewIm3SJ9qjLyOiHw03nGTvEAo4lMsSOPvDtogMUwlYDUc55nH5GJE9xtTrJwvL8Ze6cFgsb5nmX%2Beyjp0I04mfQmKHz4FBpbYdpzFgbHjZF0iYO3fMSaczZVZ1gVWzkLJSKJPkh08udyVdAn5BEVHoHMS77zeU4luVcXkJOxRDpAH3EHQPWipYQAOilE44VqoDp%2F9nkoBtXBU2ZxFQARWjfHUedXavAwG1b2fF4WFyIWLQe%2Bi1aDjKTMVoSXxg6f9eYTVvHi2xN4HekarSZqGjC5%2F5TEBjqkAQRTB%2Bt98RUWWcnxTL9770yKdoH4Ysl9LOKJOTRNjLrnv7JFfiurs5fk74ksbfIt1LT8gEYee4YApZAcbIkK7gSm7uu49oZzwPk2vXbtIJ5KIm0Tw7jVTakNKLV5XP4qgp654kBBd99OinOR2x%2FX6Qt27Ta8dNV5pzkee1Z56YnRlLslSFBingVwdhTw6KOk%2FIfD2AA68NXp5mZWMGO0AU2qhGfP&X-Amz-Signature=5a3685a49c9cde62530a382b4c00ae22234846682144bc98ce89f9404f05791e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2TP4FFG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDEVzccFbOuqvEK0flNQKzHXS8cl9oZ0O5TyqjVWBKO%2FQIhAPHzayo%2FcVUtP6T4iU4n0APgH%2FoizA7E3g6uSDR%2BYCbOKv8DCGYQABoMNjM3NDIzMTgzODA1IgzhJyKsgm%2Fy1I6JPbQq3ANmN65zODxMR%2BDjiYNKe3Anjvw05LgYJrsMG5zLk8K1artvqlpvHNQfmv8hWzthyMm3%2B1wXBAk6SFzJXZ2bYVtgjRthy0kpK0vsYfimebR%2FP1rsy%2FslqW%2FQrMyPjBJ%2BP050MWjVyYYTp5Id00f7uBoxWeiY4ykKpXyQFd3QInYvvWGB3XDb4LOJ90O2rGMTJpZdBVAUeBuALbgHOz8iGuMWtdEeq5Mm1Q6uPEaJtzqpuyW3KY3Co82EFZlzVyUBKGEy0wom5b94Uy8tIj1UhrXP6ROYIOX6Cj0PVoeqH6AD3%2BLdaZTbDYF1boEYA4A64oOAij8s9aCjJUWL2vukQPzhsqsSk2jZD3FZ%2FVhgWwKz0DmDqyjfnkIwJA%2Fort8u6ArxLYSrD5ns%2B4cWREcstLj0XxcoY7wpDBorK41HPzsPiEMAJw0EjFypKW30dsK6JhFR%2FxIAV51WMTrs0Pw4MObgUg8qhORzwCpxbyaIzqONG3FIU4M8Q0PnBYRI7nD1Ay5c%2FbbFI7iezGhLUzwEVv6O%2FxiX3%2F4r4Vkij5xt9ff0i8Z%2BY2msrHclQIgw8%2BZ%2FQtqKD89P5IjHLW1EbyWEU6qX3j6r5VcFRF7gFCjxSxlXl0qT9Z5kUP5PbUxivDCk%2F5TEBjqkAdW4dLYnkjfHKUapSrUrh03urr%2FjBoYTB25nCa4kJ2WyVhntJJ3bxkqtS%2B8HtnyXy91CDh07iS%2FhtNUQWOZKCINvrIIGTnqVD5MNxDJXUJVRAJ87cjbppejNoQNfu0G2j5RJuBc4tgcJZDn2PIe6PPCq3euWQ0fokrjoz3pcHNFR1udgZXl6EEyj7caQN9xXv67pVBUWsTBB0uEEaFIdsz9VPcDv&X-Amz-Signature=1b3a96b0a03d92e54f27a87e3c29e6802f677867aa3d53b619d9c81154e4c2f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2TP4FFG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDEVzccFbOuqvEK0flNQKzHXS8cl9oZ0O5TyqjVWBKO%2FQIhAPHzayo%2FcVUtP6T4iU4n0APgH%2FoizA7E3g6uSDR%2BYCbOKv8DCGYQABoMNjM3NDIzMTgzODA1IgzhJyKsgm%2Fy1I6JPbQq3ANmN65zODxMR%2BDjiYNKe3Anjvw05LgYJrsMG5zLk8K1artvqlpvHNQfmv8hWzthyMm3%2B1wXBAk6SFzJXZ2bYVtgjRthy0kpK0vsYfimebR%2FP1rsy%2FslqW%2FQrMyPjBJ%2BP050MWjVyYYTp5Id00f7uBoxWeiY4ykKpXyQFd3QInYvvWGB3XDb4LOJ90O2rGMTJpZdBVAUeBuALbgHOz8iGuMWtdEeq5Mm1Q6uPEaJtzqpuyW3KY3Co82EFZlzVyUBKGEy0wom5b94Uy8tIj1UhrXP6ROYIOX6Cj0PVoeqH6AD3%2BLdaZTbDYF1boEYA4A64oOAij8s9aCjJUWL2vukQPzhsqsSk2jZD3FZ%2FVhgWwKz0DmDqyjfnkIwJA%2Fort8u6ArxLYSrD5ns%2B4cWREcstLj0XxcoY7wpDBorK41HPzsPiEMAJw0EjFypKW30dsK6JhFR%2FxIAV51WMTrs0Pw4MObgUg8qhORzwCpxbyaIzqONG3FIU4M8Q0PnBYRI7nD1Ay5c%2FbbFI7iezGhLUzwEVv6O%2FxiX3%2F4r4Vkij5xt9ff0i8Z%2BY2msrHclQIgw8%2BZ%2FQtqKD89P5IjHLW1EbyWEU6qX3j6r5VcFRF7gFCjxSxlXl0qT9Z5kUP5PbUxivDCk%2F5TEBjqkAdW4dLYnkjfHKUapSrUrh03urr%2FjBoYTB25nCa4kJ2WyVhntJJ3bxkqtS%2B8HtnyXy91CDh07iS%2FhtNUQWOZKCINvrIIGTnqVD5MNxDJXUJVRAJ87cjbppejNoQNfu0G2j5RJuBc4tgcJZDn2PIe6PPCq3euWQ0fokrjoz3pcHNFR1udgZXl6EEyj7caQN9xXv67pVBUWsTBB0uEEaFIdsz9VPcDv&X-Amz-Signature=e4d6c23a1fe009c20a1022d99af9c8c56eaf11a3f628fafc4e5d78cf3a9a4be0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2TP4FFG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDEVzccFbOuqvEK0flNQKzHXS8cl9oZ0O5TyqjVWBKO%2FQIhAPHzayo%2FcVUtP6T4iU4n0APgH%2FoizA7E3g6uSDR%2BYCbOKv8DCGYQABoMNjM3NDIzMTgzODA1IgzhJyKsgm%2Fy1I6JPbQq3ANmN65zODxMR%2BDjiYNKe3Anjvw05LgYJrsMG5zLk8K1artvqlpvHNQfmv8hWzthyMm3%2B1wXBAk6SFzJXZ2bYVtgjRthy0kpK0vsYfimebR%2FP1rsy%2FslqW%2FQrMyPjBJ%2BP050MWjVyYYTp5Id00f7uBoxWeiY4ykKpXyQFd3QInYvvWGB3XDb4LOJ90O2rGMTJpZdBVAUeBuALbgHOz8iGuMWtdEeq5Mm1Q6uPEaJtzqpuyW3KY3Co82EFZlzVyUBKGEy0wom5b94Uy8tIj1UhrXP6ROYIOX6Cj0PVoeqH6AD3%2BLdaZTbDYF1boEYA4A64oOAij8s9aCjJUWL2vukQPzhsqsSk2jZD3FZ%2FVhgWwKz0DmDqyjfnkIwJA%2Fort8u6ArxLYSrD5ns%2B4cWREcstLj0XxcoY7wpDBorK41HPzsPiEMAJw0EjFypKW30dsK6JhFR%2FxIAV51WMTrs0Pw4MObgUg8qhORzwCpxbyaIzqONG3FIU4M8Q0PnBYRI7nD1Ay5c%2FbbFI7iezGhLUzwEVv6O%2FxiX3%2F4r4Vkij5xt9ff0i8Z%2BY2msrHclQIgw8%2BZ%2FQtqKD89P5IjHLW1EbyWEU6qX3j6r5VcFRF7gFCjxSxlXl0qT9Z5kUP5PbUxivDCk%2F5TEBjqkAdW4dLYnkjfHKUapSrUrh03urr%2FjBoYTB25nCa4kJ2WyVhntJJ3bxkqtS%2B8HtnyXy91CDh07iS%2FhtNUQWOZKCINvrIIGTnqVD5MNxDJXUJVRAJ87cjbppejNoQNfu0G2j5RJuBc4tgcJZDn2PIe6PPCq3euWQ0fokrjoz3pcHNFR1udgZXl6EEyj7caQN9xXv67pVBUWsTBB0uEEaFIdsz9VPcDv&X-Amz-Signature=9fd19dead4e3b1a1bd60301dc7e1bad229b7646b76c103ade070e3980894976c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

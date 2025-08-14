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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZN62X5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIpxB9ouGZJk9EUiQyUzGGpmYBGgMqNenE5QOBxiYcOQIhAKs1C7wNLBpltaFlB8BBjy5SyRtcb4UDJ4gaXUhSbfU6Kv8DCEQQABoMNjM3NDIzMTgzODA1Igw96f9LpYsbeI%2FEHY8q3AO6L0sbjGIvOP56V1BomwmWPXd6nyAeVeu7R3%2BKhqPgC%2B%2F6gRBvyjCA%2BF6gHn1cUkrHeC2sjYI2Rd8K54oXWiZzcH%2BJ49%2FI0P1Ja7X5MzMfxYgabdMZsgPh9wboN5yVQqU5EkxxEYNdFA%2Fy0f07NehDfUn%2BhFQaUDOP%2B70a2swqwdSggoy0K19pXzdWqrJ7wA8Od91Emg2YDXnuGcKol9SMfiChb4he6H67zK5jWsxgDE4NbJPBsgf13FvoqsKGxBx9%2BnabhGD1oxMKQjNqWDHelR0HcJEb7jmoEdh4Hub6JywcUXvrR0C1bdztsO77VA8whpX3RXC4ty5w5Ulc9u9XgvrucY9QZcvFQJBeO0IiCPhvC5CkTw%2BQzfIaIsLI13hvu2%2B8VnfZnwHqL2%2Fzq%2FSLFrWDq8NuJcxQqChKtxvztRKgVYPqVaFyYU6MA204JyZwa6XpDDIffBSWrf1iSVUPK4O%2FgD1RZthkcMCgiT44Oyc44UNGq%2Fu8QEenofq06mzVhwSm4b2I7HGxr6NJ3gJY6JGVt8%2BDU1zsIa%2FjnpCLkNXgnbFQ%2B21DUpW2jX79OxEMxEDWudajF%2B2d3PVgTjg8b8ykyPGtFPwALwrL%2FnsSUemHTIhZI2pV5pc6fjCGhffEBjqkAd8jPU0W2eFra7L25fODQXdQiKRWZiIQ5%2Fvfi6MERZGyh5AYf6rEb0Nf1OB5JIYTF%2FfJwOSnM5%2BYLGZz5O6quWY%2Ff39EFZJTKprR%2B3SbG73KJvvqtXr%2BRx%2FRu1Qk%2FjxDL5iwuaESDN51AHHYPwzYBMmuM9IiEQWuPRqOCnGHJaF15i9%2FfRgNnK8vFaaAVczV9d3ggQKTSo6RU3zh4XOq6QSimoIS&X-Amz-Signature=a20334dc6b73eda275740a6fbfa5685e1d082ba648dee976c26fd4ca7e4be391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JQL6WF5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMBeBSMHhenNG2OGmbw2Jb1i%2BU5fPS8MtvzS95g1jb4QIhAMHwWcg1iBc5ul4Vla%2BPJt1kwieyzIKXeKJwHebRWb0NKv8DCEQQABoMNjM3NDIzMTgzODA1IgzCAIutkL3kPp4Q8i0q3AMG0Y9zHF8Tjewb7Dr5Bvh0bKYjbkqgHsdDcKVTLmAGZb87%2B%2BPUlxtW%2BVfQA8i9ERBOR5qoPCiZB1pFupKgUmirGhlYbTcppkVqYrpkk8yM3wdHEnIZmL4hDBebDbsg0Rkx2xtmOguudGFSjhs4%2Fyt3FDGWUgTaBcpi8zEXq8L8oyRNYc6JGJkk19V3YOw9tAKqHVQ3gbMU0P9xeSI%2FJ4xQ2inI0XsmLlY7uTIXZ4YSV62s9Dhjftf2ko58Yk%2BBy2A1T%2BfrVObAPxHfzh4PSqaghB70%2BAW2WUTVIGJUvLtt%2Bkmigd2LfJKAW5XRNdXvJ6HXMdFsgNvfVdbir6gBNfliPT%2BihJrqP8dFNcTYrH2nC4pL0C2F4gfSZh8%2B%2F5U8PXepaUDR9ND4RR8CLY52ta8eNrDayfe49LcqLhb9yGl0OposClwxqAOvbvQ01KFFgjEQIUhTBjtiumysNZFjCSiRokf08YaFb89h0JckzVe56nyGN7v10gbM%2BBPeTxI%2BMB7O0K0UzVzLfDH0P7P3VCtKv7DlNK0%2FqzU811bbgM3Ddm5C8UGuDlsqJ2oiGX%2Fn%2FwT59lvRiY%2BoRWkeBOhXjQYtMBNVy01S3utJPHWFqdyj41bNsLk%2BaAA9tXPdKDD2hPfEBjqkAWwuAUTA9gM7Nyjnc8o5pm2w%2B6jncmWyUUFHeUhkRDxRLS9bS9P1Wg5%2BKn78rQAmC3HqKW2BbENk2INCOyB4QH%2FiiJrMgJnmIquRWJ2MHtGB4HwJ2zzh5gpeKUb5O0dQjj9A2t5swit3m3ZvUBShe5F%2BHSmfjAu45OIwrSmvQw5E6het1MFuH339dOZjs4LL%2BtObFUwCci5cfhcr61JI%2BdlPSk9v&X-Amz-Signature=883cae464d4e531b2a2b2da6c8941497e746ca350f9c6dd247c4f254c07eb85e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JQL6WF5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMBeBSMHhenNG2OGmbw2Jb1i%2BU5fPS8MtvzS95g1jb4QIhAMHwWcg1iBc5ul4Vla%2BPJt1kwieyzIKXeKJwHebRWb0NKv8DCEQQABoMNjM3NDIzMTgzODA1IgzCAIutkL3kPp4Q8i0q3AMG0Y9zHF8Tjewb7Dr5Bvh0bKYjbkqgHsdDcKVTLmAGZb87%2B%2BPUlxtW%2BVfQA8i9ERBOR5qoPCiZB1pFupKgUmirGhlYbTcppkVqYrpkk8yM3wdHEnIZmL4hDBebDbsg0Rkx2xtmOguudGFSjhs4%2Fyt3FDGWUgTaBcpi8zEXq8L8oyRNYc6JGJkk19V3YOw9tAKqHVQ3gbMU0P9xeSI%2FJ4xQ2inI0XsmLlY7uTIXZ4YSV62s9Dhjftf2ko58Yk%2BBy2A1T%2BfrVObAPxHfzh4PSqaghB70%2BAW2WUTVIGJUvLtt%2Bkmigd2LfJKAW5XRNdXvJ6HXMdFsgNvfVdbir6gBNfliPT%2BihJrqP8dFNcTYrH2nC4pL0C2F4gfSZh8%2B%2F5U8PXepaUDR9ND4RR8CLY52ta8eNrDayfe49LcqLhb9yGl0OposClwxqAOvbvQ01KFFgjEQIUhTBjtiumysNZFjCSiRokf08YaFb89h0JckzVe56nyGN7v10gbM%2BBPeTxI%2BMB7O0K0UzVzLfDH0P7P3VCtKv7DlNK0%2FqzU811bbgM3Ddm5C8UGuDlsqJ2oiGX%2Fn%2FwT59lvRiY%2BoRWkeBOhXjQYtMBNVy01S3utJPHWFqdyj41bNsLk%2BaAA9tXPdKDD2hPfEBjqkAWwuAUTA9gM7Nyjnc8o5pm2w%2B6jncmWyUUFHeUhkRDxRLS9bS9P1Wg5%2BKn78rQAmC3HqKW2BbENk2INCOyB4QH%2FiiJrMgJnmIquRWJ2MHtGB4HwJ2zzh5gpeKUb5O0dQjj9A2t5swit3m3ZvUBShe5F%2BHSmfjAu45OIwrSmvQw5E6het1MFuH339dOZjs4LL%2BtObFUwCci5cfhcr61JI%2BdlPSk9v&X-Amz-Signature=dd3e5afc9540eb6c0a9d1e6bc69717d3ec4391109734551e067215fd6870896d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JQL6WF5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMBeBSMHhenNG2OGmbw2Jb1i%2BU5fPS8MtvzS95g1jb4QIhAMHwWcg1iBc5ul4Vla%2BPJt1kwieyzIKXeKJwHebRWb0NKv8DCEQQABoMNjM3NDIzMTgzODA1IgzCAIutkL3kPp4Q8i0q3AMG0Y9zHF8Tjewb7Dr5Bvh0bKYjbkqgHsdDcKVTLmAGZb87%2B%2BPUlxtW%2BVfQA8i9ERBOR5qoPCiZB1pFupKgUmirGhlYbTcppkVqYrpkk8yM3wdHEnIZmL4hDBebDbsg0Rkx2xtmOguudGFSjhs4%2Fyt3FDGWUgTaBcpi8zEXq8L8oyRNYc6JGJkk19V3YOw9tAKqHVQ3gbMU0P9xeSI%2FJ4xQ2inI0XsmLlY7uTIXZ4YSV62s9Dhjftf2ko58Yk%2BBy2A1T%2BfrVObAPxHfzh4PSqaghB70%2BAW2WUTVIGJUvLtt%2Bkmigd2LfJKAW5XRNdXvJ6HXMdFsgNvfVdbir6gBNfliPT%2BihJrqP8dFNcTYrH2nC4pL0C2F4gfSZh8%2B%2F5U8PXepaUDR9ND4RR8CLY52ta8eNrDayfe49LcqLhb9yGl0OposClwxqAOvbvQ01KFFgjEQIUhTBjtiumysNZFjCSiRokf08YaFb89h0JckzVe56nyGN7v10gbM%2BBPeTxI%2BMB7O0K0UzVzLfDH0P7P3VCtKv7DlNK0%2FqzU811bbgM3Ddm5C8UGuDlsqJ2oiGX%2Fn%2FwT59lvRiY%2BoRWkeBOhXjQYtMBNVy01S3utJPHWFqdyj41bNsLk%2BaAA9tXPdKDD2hPfEBjqkAWwuAUTA9gM7Nyjnc8o5pm2w%2B6jncmWyUUFHeUhkRDxRLS9bS9P1Wg5%2BKn78rQAmC3HqKW2BbENk2INCOyB4QH%2FiiJrMgJnmIquRWJ2MHtGB4HwJ2zzh5gpeKUb5O0dQjj9A2t5swit3m3ZvUBShe5F%2BHSmfjAu45OIwrSmvQw5E6het1MFuH339dOZjs4LL%2BtObFUwCci5cfhcr61JI%2BdlPSk9v&X-Amz-Signature=e2e105242d31d92e4a53d2b82cfed33bc158139d1697d4760affda7008dabbe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

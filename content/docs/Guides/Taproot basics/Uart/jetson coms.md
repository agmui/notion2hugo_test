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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQR7TKBM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIAFX713cbQMDhkKge6jOyraY%2BeXxjqNeIa1u5dofoeZ6AiAP3jQfxe55BMvTy5bkj7ehKEfzWKehF5nyPRKsz5RV7yqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMivf5nnoSXsOX3YGTKtwD%2BEp%2F3SVkdveQ5%2B%2FrpcGdcM9D5aGjPg2IfTnrDv477gMZnGEV7QiJav%2BGT6neeV%2B8OicF4RLRHWo7K7VYMGaw3VT7lkWNt70oWROymsNkaZDQpjEJc1S%2Fn3DaVLKaqmfdab5c1t8VzqEN8RaCDlctUkGEUdumIRzffj8ZJG15KL7kRnOHVSRkN1tJnMeiecOzlGWMnONsyY4cmwcoQpxprwFwcM4or7IxjJR5i8U18lC%2F4MxVt7W8JsfsAfQpoGgsJhjtdFc4Qdmh4wMKL9AuDpTOxgUhIkqiBd06548bcBS6OLWJekeyqLfMQRDWE9de5WazUVMb9dPZA4ai7QrA7oj4SXQfabva4xJ%2B8afTyCdHpiKkFJf%2FtVkB1ACUn06jiipt5VtDCQRmxdHukTaO3Dv9%2B7FR6SeqoQZVWu6pU%2Fo0YNChkeQLYiYcwMZz1XMuJaAe6x5Jr1B%2FVViRBCW%2BI0qwKDIvHTII1ymyw7w2usocLZRkrkbRoCS%2BopUd8ZbsSLXgk5LKbFZmJsi45dWaXuecVo8SQPTEkEBZ0so8h7rTfG6ClPOcBB7dX1YotkSlGErpoh9EQk2HtBp38tzGuZlO%2Bfvbe69Zb7eNtqKP2C3Uo3THEwSinQY5aoYwv%2F3nwwY6pgHnUPuKgwNuD9%2BzT605K5K2GPeykyANxVmfYD6hxei%2BGW1NLNnw5cakJaZ3w6m2di32T8ZUearLlT6aB7V5oPnn8R4%2FlCe7tB8H2X1kWn%2BFL8nhrNSO4wpQFx2VsjU6TRcmqmAzZ2RubyG0r18askOjfqf9tBRuP9SUCt%2FABo%2FD%2FN2RC8rkMMNEsfTUkf2WuZRSMAJS2sqEbgejwYFzD0qZWZaeemTv&X-Amz-Signature=b4dbeed30773ec1b7a29a356132e5426032117027bd2d1d0fa743c76a043080f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KBX4CXT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC7ULgpd0nNwqr9FMZgAzw%2BMln1zQvpsalGJB1EBbkpQgIhAJprtiB3JKRwbBbFgXjnzDnZAD5KPQcwM3HyFQvqXzIyKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwI9%2BOMNOxWpIOfaKoq3AOmiRCHOOfxlt%2BRLh%2BGqSdXw3ZDF8QC8BqwgcbhalsiXwvL7ddFGCD9ngwM978sFY96LOjD8ZIZfiX9tHktPiPALWVTxFTvSFJENqjcjQSuqhQ8bfhF%2BpW8aJHsKTv%2BNQ6b%2F7T8jQpzGaw0p84IOfl40gPFS4%2FW1M9n2HUAu%2BpE4aSqA2m90ShYcUBEDQInjwckin16hEeCyejhxKatSLKiYN7JyKP8bqH7uxpDnssvY3%2BgtBZ1HZ3EYbzsm2KMyORA1X5FPbQ6hzQRQ%2FX8Yh1yAKLDZaB5w%2FT6SmFUDkREuTjQmKgFrJOpIukCyu3Ver%2B%2B%2FU6eQRESFIt5%2BXcEkPcZwQr4yfX82pU3Y3DH3bPEPe1lf6rdc4fIoh4U4m%2BurXhK0Ggwj793mc57ltutkkrhdaWpXO8ACZeUg%2Fg89ubOJAqPVNTGNTiJlQ2%2BomvKv5WFnP%2Bx6tsAPob1P0vhOBI4BbR3pNKkzfG3G31ehgZJaRqwQ%2FmD80OVPKOBfK0SOHHYZj91aj0CsrwUzmK184RUwVff4HTCxB2%2FnzJzeem%2FMajVcfkdJMJTMEAMdG5oNsDWwjXQ%2BmIuIDC9ho8UDftfJKGSJYqmkgMxyMrl5URTVQajwn8tFHHqz0RziTCX%2FefDBjqkAfrEnqnHxg4Rrf3NJs6RsPxvhLiia3WOagd4aWyO7cqmNygTGLS8AZwt8m943PuNhJn9LwvUOAah8tbjxDJiioqTmtu1wlCtKn2dump4IAOhZVUiw7mdO9SzYjVSBYzrLoM5%2Bw77JWNUGV0OJ2iZfLpYOxX7r3ehP6yQcqwl8Wt9rQg4dCI9Xr5S9fgVpal7RI1bXPxfsi6XHgVigXKXYLGvuIXu&X-Amz-Signature=a73e1861b8c645013c23cf40cd8a633cdb295bc0225ce59c6f843786e50c7a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KBX4CXT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC7ULgpd0nNwqr9FMZgAzw%2BMln1zQvpsalGJB1EBbkpQgIhAJprtiB3JKRwbBbFgXjnzDnZAD5KPQcwM3HyFQvqXzIyKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwI9%2BOMNOxWpIOfaKoq3AOmiRCHOOfxlt%2BRLh%2BGqSdXw3ZDF8QC8BqwgcbhalsiXwvL7ddFGCD9ngwM978sFY96LOjD8ZIZfiX9tHktPiPALWVTxFTvSFJENqjcjQSuqhQ8bfhF%2BpW8aJHsKTv%2BNQ6b%2F7T8jQpzGaw0p84IOfl40gPFS4%2FW1M9n2HUAu%2BpE4aSqA2m90ShYcUBEDQInjwckin16hEeCyejhxKatSLKiYN7JyKP8bqH7uxpDnssvY3%2BgtBZ1HZ3EYbzsm2KMyORA1X5FPbQ6hzQRQ%2FX8Yh1yAKLDZaB5w%2FT6SmFUDkREuTjQmKgFrJOpIukCyu3Ver%2B%2B%2FU6eQRESFIt5%2BXcEkPcZwQr4yfX82pU3Y3DH3bPEPe1lf6rdc4fIoh4U4m%2BurXhK0Ggwj793mc57ltutkkrhdaWpXO8ACZeUg%2Fg89ubOJAqPVNTGNTiJlQ2%2BomvKv5WFnP%2Bx6tsAPob1P0vhOBI4BbR3pNKkzfG3G31ehgZJaRqwQ%2FmD80OVPKOBfK0SOHHYZj91aj0CsrwUzmK184RUwVff4HTCxB2%2FnzJzeem%2FMajVcfkdJMJTMEAMdG5oNsDWwjXQ%2BmIuIDC9ho8UDftfJKGSJYqmkgMxyMrl5URTVQajwn8tFHHqz0RziTCX%2FefDBjqkAfrEnqnHxg4Rrf3NJs6RsPxvhLiia3WOagd4aWyO7cqmNygTGLS8AZwt8m943PuNhJn9LwvUOAah8tbjxDJiioqTmtu1wlCtKn2dump4IAOhZVUiw7mdO9SzYjVSBYzrLoM5%2Bw77JWNUGV0OJ2iZfLpYOxX7r3ehP6yQcqwl8Wt9rQg4dCI9Xr5S9fgVpal7RI1bXPxfsi6XHgVigXKXYLGvuIXu&X-Amz-Signature=1ca82fef61f5fe18d5709caf455e8fb84d960792d59c41455d2a37d1ad969164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KBX4CXT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC7ULgpd0nNwqr9FMZgAzw%2BMln1zQvpsalGJB1EBbkpQgIhAJprtiB3JKRwbBbFgXjnzDnZAD5KPQcwM3HyFQvqXzIyKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwI9%2BOMNOxWpIOfaKoq3AOmiRCHOOfxlt%2BRLh%2BGqSdXw3ZDF8QC8BqwgcbhalsiXwvL7ddFGCD9ngwM978sFY96LOjD8ZIZfiX9tHktPiPALWVTxFTvSFJENqjcjQSuqhQ8bfhF%2BpW8aJHsKTv%2BNQ6b%2F7T8jQpzGaw0p84IOfl40gPFS4%2FW1M9n2HUAu%2BpE4aSqA2m90ShYcUBEDQInjwckin16hEeCyejhxKatSLKiYN7JyKP8bqH7uxpDnssvY3%2BgtBZ1HZ3EYbzsm2KMyORA1X5FPbQ6hzQRQ%2FX8Yh1yAKLDZaB5w%2FT6SmFUDkREuTjQmKgFrJOpIukCyu3Ver%2B%2B%2FU6eQRESFIt5%2BXcEkPcZwQr4yfX82pU3Y3DH3bPEPe1lf6rdc4fIoh4U4m%2BurXhK0Ggwj793mc57ltutkkrhdaWpXO8ACZeUg%2Fg89ubOJAqPVNTGNTiJlQ2%2BomvKv5WFnP%2Bx6tsAPob1P0vhOBI4BbR3pNKkzfG3G31ehgZJaRqwQ%2FmD80OVPKOBfK0SOHHYZj91aj0CsrwUzmK184RUwVff4HTCxB2%2FnzJzeem%2FMajVcfkdJMJTMEAMdG5oNsDWwjXQ%2BmIuIDC9ho8UDftfJKGSJYqmkgMxyMrl5URTVQajwn8tFHHqz0RziTCX%2FefDBjqkAfrEnqnHxg4Rrf3NJs6RsPxvhLiia3WOagd4aWyO7cqmNygTGLS8AZwt8m943PuNhJn9LwvUOAah8tbjxDJiioqTmtu1wlCtKn2dump4IAOhZVUiw7mdO9SzYjVSBYzrLoM5%2Bw77JWNUGV0OJ2iZfLpYOxX7r3ehP6yQcqwl8Wt9rQg4dCI9Xr5S9fgVpal7RI1bXPxfsi6XHgVigXKXYLGvuIXu&X-Amz-Signature=b2d2b262ab5b774b449fd502e46f6b5619858474a2438ac447d7725eabecd043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

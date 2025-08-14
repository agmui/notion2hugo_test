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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W772Y7NC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDD4Uk1kW8QO9jlvFtJ1kQ%2Fy5AISsvUkN6Vl5z9j5NbOAIhALrdAXOXjs7edPIJm0pUpKKRYoCVvqA%2FUr3eipqD%2F9riKv8DCEoQABoMNjM3NDIzMTgzODA1Igw7WnBiterIVAn15HYq3AMVX71vNivlq8o7byJyjlpb8uUbX7Rq3lB%2FXKlYdF%2BLGGRPSO6%2FekGCOpcp9xvBRnmR4RH6Eg3cItDMcmaxrCWCKO8OwHQfq5an0LQ%2BuMUoFqwWf%2FaZtlRvZB46CG7ZiKkoFn5PBnMyP5KPt5ERip4PtHyPLSnEuqw3m%2FImkcIVGlDz5FoO71grbdahifiYaurlTNLgSceOTvgIwRYCB4WLbbluzakJ0xa%2FVeEqKbS%2B5%2B4aV%2B4nf5MLpiuU7QFJ%2FGGC7sosScnF8jSGOCG58tjH3Iifzhou9pvoRL8njRnDDVmx8XQZPHL%2FoCWWROjcVMmASAu74psMUjI1ZaOadpaBgJ5%2BMUmEjMy3JOF2O2pXsp6yWFcqd9ByF1VP3DUhB7nUbbI9DO5cDbmNd4G5JeT4OwvTI7Vxo%2FBTT2EGjxlTqiFchgYHnHdTa8Q%2FP0Ux6kWRPs81fMTClF4CD%2BV7hTkNSzY%2BrOsAMmv%2BjiPmyxeelSSpuazEHnmiPaXBaS4AwZvPcdJeD4kzjHrgo9YmRMVxkxYMbDfq4xSlvsPSes4TsKz09fRPAbdORj2jSXGJ%2BKgR94GSqzGWX0GDhS9rKy6XhsXZsUJuJQOtvSKzT64vuD3nDG3CUO1MDNs8CjDin%2FjEBjqkAVOyuC1sgij52MCZzMRGJYPKyIUxBEq2gAN%2FA8d4l1xRu2sRBngncSB9IGkSh6jsYCQEVMezCUSVbpZszTFcFCaejClmw2dayAxVbQsAzYqs3rjWqqKrKs33jsFFcs5WaPBMMe5%2B2eKetfBj4x6T%2B8vrTC19ckTXvzxOjdl4M2lU4u%2F1Lkt5XAT7G3T9i3fGDuxhPpsu%2Fva%2B7hiCRC%2FbOvkdrC8Y&X-Amz-Signature=86c7a238b95cfbef9e866eb4d102feb0d70a73eb940637adacaaac3a7c195261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZFIUVLV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDi9qu6W5%2BtwOLahcNwI5nKj10zIsmSEQjKs0SE%2Blkp5AIgXhDP%2FM1DV5eJREIswkbUj3Uat0AAKefjAzYbIjsufaEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNKjF9c8hl4KJBk5zircA5%2FkNVr3PNfQag2H%2BE%2B4qUl6wrfatM0qA5fhUX90l8akPYFT7XboOlFjUwgeb8K82ayvdq5Za9TPTQO7YNTGYhHGhi01KYip3BkIkG41H6JnUtqURq2ccyJeXYrFHjbgYjkvy0yT22yYNNMMGsvOgKZv%2BA3j5issWeBAYk%2FnSv4clyclkPT%2Fpsbjw5fg327QnMi7X6JXIbCQuHvePvR%2B%2FToZPMcmC11CdYMppPiKwjXsa%2F8CFInLgMF3Y%2FN2BMGAn1hOlqCyppz9Gsk0h6mwIv0%2ForGeJl%2FGUWml9NCoAxQpFW%2BCLD%2F4q7l4KSuTFOcKyE%2Fcc%2BF%2FWwQnr8n4RlQs%2FaomBIJ5jkWaON81%2Flp8co7H3lAwKpFzE2RDWFdui2%2FBxaKNzDMbiY2TqX5HeEYUkapZiCdMVxShIdSS3Igc3L6CRonGydNemZsoiBfj1ImnTT9yHlmUMi5FcWeu6wzxj96dw%2BOlDeTxzhJMXy7xwQOly8tjYm7dUpX8lJwBy8UG9XOOTWI%2B1Kh%2BaCxsZEhwiE8G1jFU8FoiUOH%2F8Eebt70aXSpTi28vWyM5v774N%2FNuE2iSk%2BslrFSk%2BhbPlh3YMIPTXwaxPqQX016PkkRzMGWFPcnuAp0wfYrE59UqMPGe%2BMQGOqUBD6%2B7s%2FUgOWplHz3k7LzzxU3MJZoQI%2FeG2GLQaQgaLGKGp64SUHx04rsKlUwfwV5XU0wG%2Fmq4CY9Dg7WQOFavgCgrOhBOTnn5LXWuLeB4rSAJ35YJkYe%2BJzobDDvz7CejIjzk%2FgfcEEpei0tIrQJBSPTL5rwYV05iG9sgSXnhQpNUkSdE%2FmR8lpt8Gd%2BwLPU7lgYJdNAIHTemjQ0yrgx6agln29aF&X-Amz-Signature=a3d93106b7c63bb3799547e888324d1acafff40e649b2daf6075e5a92b258a3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZFIUVLV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDi9qu6W5%2BtwOLahcNwI5nKj10zIsmSEQjKs0SE%2Blkp5AIgXhDP%2FM1DV5eJREIswkbUj3Uat0AAKefjAzYbIjsufaEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNKjF9c8hl4KJBk5zircA5%2FkNVr3PNfQag2H%2BE%2B4qUl6wrfatM0qA5fhUX90l8akPYFT7XboOlFjUwgeb8K82ayvdq5Za9TPTQO7YNTGYhHGhi01KYip3BkIkG41H6JnUtqURq2ccyJeXYrFHjbgYjkvy0yT22yYNNMMGsvOgKZv%2BA3j5issWeBAYk%2FnSv4clyclkPT%2Fpsbjw5fg327QnMi7X6JXIbCQuHvePvR%2B%2FToZPMcmC11CdYMppPiKwjXsa%2F8CFInLgMF3Y%2FN2BMGAn1hOlqCyppz9Gsk0h6mwIv0%2ForGeJl%2FGUWml9NCoAxQpFW%2BCLD%2F4q7l4KSuTFOcKyE%2Fcc%2BF%2FWwQnr8n4RlQs%2FaomBIJ5jkWaON81%2Flp8co7H3lAwKpFzE2RDWFdui2%2FBxaKNzDMbiY2TqX5HeEYUkapZiCdMVxShIdSS3Igc3L6CRonGydNemZsoiBfj1ImnTT9yHlmUMi5FcWeu6wzxj96dw%2BOlDeTxzhJMXy7xwQOly8tjYm7dUpX8lJwBy8UG9XOOTWI%2B1Kh%2BaCxsZEhwiE8G1jFU8FoiUOH%2F8Eebt70aXSpTi28vWyM5v774N%2FNuE2iSk%2BslrFSk%2BhbPlh3YMIPTXwaxPqQX016PkkRzMGWFPcnuAp0wfYrE59UqMPGe%2BMQGOqUBD6%2B7s%2FUgOWplHz3k7LzzxU3MJZoQI%2FeG2GLQaQgaLGKGp64SUHx04rsKlUwfwV5XU0wG%2Fmq4CY9Dg7WQOFavgCgrOhBOTnn5LXWuLeB4rSAJ35YJkYe%2BJzobDDvz7CejIjzk%2FgfcEEpei0tIrQJBSPTL5rwYV05iG9sgSXnhQpNUkSdE%2FmR8lpt8Gd%2BwLPU7lgYJdNAIHTemjQ0yrgx6agln29aF&X-Amz-Signature=f643b2492420f5b385192888c1642d4fa937bbf51659fe4e56d07ad2d8416f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZFIUVLV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDi9qu6W5%2BtwOLahcNwI5nKj10zIsmSEQjKs0SE%2Blkp5AIgXhDP%2FM1DV5eJREIswkbUj3Uat0AAKefjAzYbIjsufaEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNKjF9c8hl4KJBk5zircA5%2FkNVr3PNfQag2H%2BE%2B4qUl6wrfatM0qA5fhUX90l8akPYFT7XboOlFjUwgeb8K82ayvdq5Za9TPTQO7YNTGYhHGhi01KYip3BkIkG41H6JnUtqURq2ccyJeXYrFHjbgYjkvy0yT22yYNNMMGsvOgKZv%2BA3j5issWeBAYk%2FnSv4clyclkPT%2Fpsbjw5fg327QnMi7X6JXIbCQuHvePvR%2B%2FToZPMcmC11CdYMppPiKwjXsa%2F8CFInLgMF3Y%2FN2BMGAn1hOlqCyppz9Gsk0h6mwIv0%2ForGeJl%2FGUWml9NCoAxQpFW%2BCLD%2F4q7l4KSuTFOcKyE%2Fcc%2BF%2FWwQnr8n4RlQs%2FaomBIJ5jkWaON81%2Flp8co7H3lAwKpFzE2RDWFdui2%2FBxaKNzDMbiY2TqX5HeEYUkapZiCdMVxShIdSS3Igc3L6CRonGydNemZsoiBfj1ImnTT9yHlmUMi5FcWeu6wzxj96dw%2BOlDeTxzhJMXy7xwQOly8tjYm7dUpX8lJwBy8UG9XOOTWI%2B1Kh%2BaCxsZEhwiE8G1jFU8FoiUOH%2F8Eebt70aXSpTi28vWyM5v774N%2FNuE2iSk%2BslrFSk%2BhbPlh3YMIPTXwaxPqQX016PkkRzMGWFPcnuAp0wfYrE59UqMPGe%2BMQGOqUBD6%2B7s%2FUgOWplHz3k7LzzxU3MJZoQI%2FeG2GLQaQgaLGKGp64SUHx04rsKlUwfwV5XU0wG%2Fmq4CY9Dg7WQOFavgCgrOhBOTnn5LXWuLeB4rSAJ35YJkYe%2BJzobDDvz7CejIjzk%2FgfcEEpei0tIrQJBSPTL5rwYV05iG9sgSXnhQpNUkSdE%2FmR8lpt8Gd%2BwLPU7lgYJdNAIHTemjQ0yrgx6agln29aF&X-Amz-Signature=d2e6f8d5a9ef9c9d1c32b1c704972d8bf5f3f495cc0d89dbe9aba88453f06256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

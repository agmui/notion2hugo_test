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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSY6JDHI%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDivMmN%2B8wRKrwg7TvayA6Nct2Miyl4FUvIk%2Fw3uah4xgIhAJAjwMKYr0ObyHUM5m1rSWiS0Muu%2FqEQe2ZKCZPuFGg0Kv8DCEIQABoMNjM3NDIzMTgzODA1IgwCgZfjdC4%2F89gfoqUq3AP7ToNPjpSexumoiPAqVJXj6OsRBfuHUUkEiYqhOiRbU3UD4jRy6gsTRmNinbsU7%2B%2BjxZt8N8aE9jQlzgFBEVOIphrByB0xdQBLZqLS8OYkQTdSK%2BUe%2FA9q5Hel1C%2BqYkEUflBQhZuyK1KGLbsFS%2BH%2FR9sgb3bZ%2BraR1r1ZKsxrFeMNuQVxD7o45IHLWwoJF1Kcg0aaeSAeld%2F0x6TGaJGcMJIK4xmHE3rCRxygmBz9hJT6NCfu2skm0oy5xM3tfqv5wgaSVKxUJVJuBXvgMsO4xlqDNlRGlaoOUuWFsW7JYQHD2TFutTVXvP7%2BvJOEPUR4qGyDu2AC9ln8S8Ap8ihuofPXvjP3TObnapdcHDUp2fLEpSiz0gDH7NmvBBsZmiFO%2BLRlWvHt9RJTbyuKsyp3pdu3BVlxufRRFLkTHYLTU6SqO%2BTIlbwJF9f4qVJ9xPq9XOA0Y9PBqR6oVRlN86mtcZQ3%2BNzW2i%2FAznMLr7SdvpgmjfuVGjPej6X8WE0DU0FZYiKfklxBcMjvQ3z1rBTTiyURUH7j9r7PewcqYGl%2Fa38xS8XtYaM6wwqmdcsB8VPW0II%2FN1Wegm65mYePpRs2zNVEyQY%2FpoVuaY8BdFtT023Cc%2FMjICWu22YyyjDGsNjDBjqkAdmqiKCU2dgO01JrXquIAREPhxjLP5594hteLlfvxzf5i8PB7i98Xm%2B8qXIkfR%2FAp%2Fkw%2FCqEaDX1fvLZYSLW4Um0Tz1ftdDoKhCbugBRPGWDGsQsH9dmcE1TQcpx7NS55FtjYZ1bqUYRGJlF%2FctdE8XY6A%2BD%2Bni22cov6M1ttP7pXgESn7573Renu98ZMN17g2Xj9Vu%2FUFCpjAar7NpPEMGd0cHh&X-Amz-Signature=ed37fbbebb00dbc0f41dc9f04123adeec0e9a1706a6bea62d96447602d1d00c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BUA5LXU%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDRFXdttbmgvRUpLrf9idlR7CB7nyveZzEjss35eVns7wIhAJZG%2Fduz6%2FnYa%2B%2BAMF8L%2FqouUrAXgjVlr6z1ZspYlazvKv8DCEIQABoMNjM3NDIzMTgzODA1IgwSYA2p%2BOFZ1eVEossq3APV81%2BgPfYzUgD4IUaOouwr%2BCH6bmJxSuW%2BKcs1rcWUxPy1desnKUSWJ2uJcVYK0rCjfp9JUbnO3QEFpeu6O5qPVqxmkqOIFSUd0Yjvg63gftqogDA400ZGR332wyvVpxr28AWpoKYTFibBkgYVD%2FejfmNA7sO3Yles4x6pusnSdij%2F9suHX9kcggCfe8a62nMkK3u9OYUXh5qtLqJupkNAot3iZvThZA85MplCdFq86i0O9CjRVqLyfhp9dai685X%2Fu%2BACZQQO%2Bo5h5ZAWmqdoZQGf8KXe9q0L0Ojn3kzech0DZG7O17AbImfUBpFCCsTjmo8O9hAZVc92sDwXTAl9M1wzfjbeA8nCUKbYL5d9IDyxXJchMTDgomaOOJ66V93pOgALNAi%2FPLJiw4XiqujZlhFydZvb8CHlg5utwI667LJkgLiI6mBz95jKfrkDLg7enabZtDL%2Bt0qlUHwwZc2ErhFRK32kHaB2Mjgie7TGHbacTxyRYRvKBmYUe8GgE3kDyf8u1Nh%2B459Tsp1ZzcETWf558EbCHCW%2B%2Fc3LzYFWq2UEZFqZOXzsjn0i%2Fu%2F68r06u59PCa%2BmfYLCKn%2FXyJFRAsZUnCGG2NYndyagFTsNMcyFH1EzTIYBJ5PRJDDFsNjDBjqkAccTO7j8nhuZ5yysWBmr8FwCCjOklWkRzGnE3v%2FQtMpLw%2BNntFxv7CMKvr1Hqkor47OmfvSdiO233DXzDNX1Kyc7giG491FvvUILqrZFIC3tI8m5sFiWns%2BfCkz0UKgs1roAN%2BHEWLOJpQi49%2FbCOJ9Nh29QyhSATGB0b28myg6qY636m3C5c9UDkt9lrZtNdkrbnMBimTJ3Gorg4wJ%2BgjvF0cGR&X-Amz-Signature=634e465fc807feea065cab65cec1d88b896f73ff27bd3cb8459f9fd3fd7da576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BUA5LXU%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDRFXdttbmgvRUpLrf9idlR7CB7nyveZzEjss35eVns7wIhAJZG%2Fduz6%2FnYa%2B%2BAMF8L%2FqouUrAXgjVlr6z1ZspYlazvKv8DCEIQABoMNjM3NDIzMTgzODA1IgwSYA2p%2BOFZ1eVEossq3APV81%2BgPfYzUgD4IUaOouwr%2BCH6bmJxSuW%2BKcs1rcWUxPy1desnKUSWJ2uJcVYK0rCjfp9JUbnO3QEFpeu6O5qPVqxmkqOIFSUd0Yjvg63gftqogDA400ZGR332wyvVpxr28AWpoKYTFibBkgYVD%2FejfmNA7sO3Yles4x6pusnSdij%2F9suHX9kcggCfe8a62nMkK3u9OYUXh5qtLqJupkNAot3iZvThZA85MplCdFq86i0O9CjRVqLyfhp9dai685X%2Fu%2BACZQQO%2Bo5h5ZAWmqdoZQGf8KXe9q0L0Ojn3kzech0DZG7O17AbImfUBpFCCsTjmo8O9hAZVc92sDwXTAl9M1wzfjbeA8nCUKbYL5d9IDyxXJchMTDgomaOOJ66V93pOgALNAi%2FPLJiw4XiqujZlhFydZvb8CHlg5utwI667LJkgLiI6mBz95jKfrkDLg7enabZtDL%2Bt0qlUHwwZc2ErhFRK32kHaB2Mjgie7TGHbacTxyRYRvKBmYUe8GgE3kDyf8u1Nh%2B459Tsp1ZzcETWf558EbCHCW%2B%2Fc3LzYFWq2UEZFqZOXzsjn0i%2Fu%2F68r06u59PCa%2BmfYLCKn%2FXyJFRAsZUnCGG2NYndyagFTsNMcyFH1EzTIYBJ5PRJDDFsNjDBjqkAccTO7j8nhuZ5yysWBmr8FwCCjOklWkRzGnE3v%2FQtMpLw%2BNntFxv7CMKvr1Hqkor47OmfvSdiO233DXzDNX1Kyc7giG491FvvUILqrZFIC3tI8m5sFiWns%2BfCkz0UKgs1roAN%2BHEWLOJpQi49%2FbCOJ9Nh29QyhSATGB0b28myg6qY636m3C5c9UDkt9lrZtNdkrbnMBimTJ3Gorg4wJ%2BgjvF0cGR&X-Amz-Signature=7862e8e46417a08d4c0945639f3e1601655944105dbd497c028e182b86ca0695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BUA5LXU%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDRFXdttbmgvRUpLrf9idlR7CB7nyveZzEjss35eVns7wIhAJZG%2Fduz6%2FnYa%2B%2BAMF8L%2FqouUrAXgjVlr6z1ZspYlazvKv8DCEIQABoMNjM3NDIzMTgzODA1IgwSYA2p%2BOFZ1eVEossq3APV81%2BgPfYzUgD4IUaOouwr%2BCH6bmJxSuW%2BKcs1rcWUxPy1desnKUSWJ2uJcVYK0rCjfp9JUbnO3QEFpeu6O5qPVqxmkqOIFSUd0Yjvg63gftqogDA400ZGR332wyvVpxr28AWpoKYTFibBkgYVD%2FejfmNA7sO3Yles4x6pusnSdij%2F9suHX9kcggCfe8a62nMkK3u9OYUXh5qtLqJupkNAot3iZvThZA85MplCdFq86i0O9CjRVqLyfhp9dai685X%2Fu%2BACZQQO%2Bo5h5ZAWmqdoZQGf8KXe9q0L0Ojn3kzech0DZG7O17AbImfUBpFCCsTjmo8O9hAZVc92sDwXTAl9M1wzfjbeA8nCUKbYL5d9IDyxXJchMTDgomaOOJ66V93pOgALNAi%2FPLJiw4XiqujZlhFydZvb8CHlg5utwI667LJkgLiI6mBz95jKfrkDLg7enabZtDL%2Bt0qlUHwwZc2ErhFRK32kHaB2Mjgie7TGHbacTxyRYRvKBmYUe8GgE3kDyf8u1Nh%2B459Tsp1ZzcETWf558EbCHCW%2B%2Fc3LzYFWq2UEZFqZOXzsjn0i%2Fu%2F68r06u59PCa%2BmfYLCKn%2FXyJFRAsZUnCGG2NYndyagFTsNMcyFH1EzTIYBJ5PRJDDFsNjDBjqkAccTO7j8nhuZ5yysWBmr8FwCCjOklWkRzGnE3v%2FQtMpLw%2BNntFxv7CMKvr1Hqkor47OmfvSdiO233DXzDNX1Kyc7giG491FvvUILqrZFIC3tI8m5sFiWns%2BfCkz0UKgs1roAN%2BHEWLOJpQi49%2FbCOJ9Nh29QyhSATGB0b28myg6qY636m3C5c9UDkt9lrZtNdkrbnMBimTJ3Gorg4wJ%2BgjvF0cGR&X-Amz-Signature=69c2982ed98fbed390b68cbb689b0880e862d47e85eaa139f3bd8f25264d04a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

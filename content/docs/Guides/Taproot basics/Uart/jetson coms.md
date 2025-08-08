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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAVCY6LC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIH7l1H7nf2o5LDn9BQ2TVCLZE2xsKL0vFUNXKC%2B6LAJyAiBH6cIiGBLmGs2WWc4w2EZPWi%2BZjNkmFCkVtRLM9FB3aiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo%2FEaVDmL1dVogi5LKtwDjCv9Nt%2BzwCYEfHIvsTpbXXGUQ9Wq7WG%2BlbqysFOrhGNzsszN7nvzMGvNBGWuwCv5A5YaXNTE814iZPVl6bxuuYMkCadYZ456TIOSw08mwEpfa6gpFW%2FVMhm5HwyV6j%2BQLL0AmwHCMj14QefaPKcMd%2FpuUCcDMXkvH2WTMBG%2BccQNxkbwfc9%2FttUsic9BpMWYmk2FBZPtTOv9GtvGFSOQf%2BZvBCc1jH82ANrx%2FecIj0OQPwwGb44FwfPuuk6d8wpHsAC47RpZMKjyMrW5DfF6t1eZjFsIotbA9GRIm4goNNU892BQRINLe2WWaPl2a72ZHpbYFXxWzXKfrSfLfgvtTDMcWttLdx8BGDY3nFf1h1dBm1wayOd7D0oc%2FJfAmXgyE8%2BGdYokSl06KnmOJZgJN%2F5dfdJ36UtL913q0Mk7654qjpYpc%2Facb0n5OZxw03bJuqMtNDTn38HsKk%2FYnBSieVM8EHLSjNrKE2eMWQsSCW%2FXP7Yfu2EH7BKBJIhyAZuG9Dk%2FNos2pjOe0820JhAcU63WT4Tk%2FQjxukYQ96gX%2BynSGv0GRoiCghHMpgT2X0c%2Bn%2Ffs7xrzFUukJk93%2FBOO4DPgQog2mXUxas1yVKeoQd5rFgzuTgIy8bgPxaownfrVxAY6pgHe7vSJFQrkrY9GDuEUEaRX5B7qJXAHi2p9kZM%2ByUIt4jgIFc%2FfDqaMuBSQg2z40Bum1YWdoNGtbHCG5PKBSHIQ4KM6VWJybaXMXrzhhni2%2BTjNtC2fulpQ2y97NwJuRJchZ1VW5mQXBNlof1uFH4zr%2BsnmMTPcOmoaUOQQQsE%2FYaf0vMjG1v0HaNMLElm%2BSLLCeJA6xEB6ZNuOBEEaF6FGedkKPjDk&X-Amz-Signature=50d5713887b71f49afd1b6262cc93324fbe37dcc8f5d16b4bbe059a93e9077b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TVRDOWF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCvE7iaaORUpviFv45utrXhUFzKkXun0cojEKDTZLwfNgIgU5RSZ1HgSIGe1Ynj812PePk%2Bnp29uVEHqC48A5ut8SQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPARQzQCQXzmkedmyrcAyQq1B7ehz9eSqwGaIQ5Yj0M6OXXWNdsRn1Hm0QSnyJcAxo2fcOCEQ3AK3IlpYrp0VLX%2BsluUg9UTehZcCbHhfKQvkbGz0vumLywJ%2FEwPedeclzfdlj3NzCGgIT1zZsrXgqKOc%2B369pMqYcKvnYDd8KdkyZCUgjO1PT2qfcVzY80TVzpNEAnX585vwec3PQ1UJQ0dsRtX1sE%2Bc8Mcx0gwYxx38DvEpJLHfJ8n2zKxQaVGmRxOvhHNj87ef2nWR1oohVa33pzoACJIOhfo2v7M9bO0uIOG1WglkeD4Pl1LR%2FC7y73r3BJYjEm31LHPqEQyzjb6W63ndMrfOAEp%2Fy3SgFopsPTUyO7HUCFHahsRvdqTpcj8yQKlJXcpXZU5739hl0EU1y7LB0ZURiQnt0fJBj5UBCV%2F170HOBLFMR%2B9bT%2Fm9hm5%2BzebuZ%2BVH6QiESBtR4XWipPF9UkY6xBluWjPB6Vzr7LIkt8ms3T766Ebmla0yA%2FbpT6V%2B8mZGc27rlg8NHvqSo2Oj9CYni%2B6h6o3abbCW42Qhg7nZNGCfj%2Fg%2BpDcs3cFZbfOdybfsEYSepEvwkWL8vBbqg249XHldedWiRXflyej2nuQrhEYvjips4n8vtLmv1q9TM2sI5KMI771cQGOqUB0Uw0ZUaDtyN086Nl%2BiaICpbZDB2ulnwavbuDFzxjUMxD4MMAoyb28uyPeMMt8GRf9NxnqLQncEuHsV7%2F3WcuCKS0bjuzFwdlsi2ABpvjYzF58p8apb2mhuolnDENWRO0IHp0rrqIiSkv9mltQEsB6R4YKtbzxCfjtDae8WRl56D8W4Iar1dn63lgeNLWsjuQFtGD5x9ri2WOBB5WuUoLOL1l2XMR&X-Amz-Signature=3def0c774bcc418e89fea009f6b6aab744637411e785503ac3a2d41d5a5e7614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TVRDOWF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCvE7iaaORUpviFv45utrXhUFzKkXun0cojEKDTZLwfNgIgU5RSZ1HgSIGe1Ynj812PePk%2Bnp29uVEHqC48A5ut8SQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPARQzQCQXzmkedmyrcAyQq1B7ehz9eSqwGaIQ5Yj0M6OXXWNdsRn1Hm0QSnyJcAxo2fcOCEQ3AK3IlpYrp0VLX%2BsluUg9UTehZcCbHhfKQvkbGz0vumLywJ%2FEwPedeclzfdlj3NzCGgIT1zZsrXgqKOc%2B369pMqYcKvnYDd8KdkyZCUgjO1PT2qfcVzY80TVzpNEAnX585vwec3PQ1UJQ0dsRtX1sE%2Bc8Mcx0gwYxx38DvEpJLHfJ8n2zKxQaVGmRxOvhHNj87ef2nWR1oohVa33pzoACJIOhfo2v7M9bO0uIOG1WglkeD4Pl1LR%2FC7y73r3BJYjEm31LHPqEQyzjb6W63ndMrfOAEp%2Fy3SgFopsPTUyO7HUCFHahsRvdqTpcj8yQKlJXcpXZU5739hl0EU1y7LB0ZURiQnt0fJBj5UBCV%2F170HOBLFMR%2B9bT%2Fm9hm5%2BzebuZ%2BVH6QiESBtR4XWipPF9UkY6xBluWjPB6Vzr7LIkt8ms3T766Ebmla0yA%2FbpT6V%2B8mZGc27rlg8NHvqSo2Oj9CYni%2B6h6o3abbCW42Qhg7nZNGCfj%2Fg%2BpDcs3cFZbfOdybfsEYSepEvwkWL8vBbqg249XHldedWiRXflyej2nuQrhEYvjips4n8vtLmv1q9TM2sI5KMI771cQGOqUB0Uw0ZUaDtyN086Nl%2BiaICpbZDB2ulnwavbuDFzxjUMxD4MMAoyb28uyPeMMt8GRf9NxnqLQncEuHsV7%2F3WcuCKS0bjuzFwdlsi2ABpvjYzF58p8apb2mhuolnDENWRO0IHp0rrqIiSkv9mltQEsB6R4YKtbzxCfjtDae8WRl56D8W4Iar1dn63lgeNLWsjuQFtGD5x9ri2WOBB5WuUoLOL1l2XMR&X-Amz-Signature=075a234f14b297c67baada234ff01eb35f609ad4e2315b9847fb0fbc546fbd74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TVRDOWF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCvE7iaaORUpviFv45utrXhUFzKkXun0cojEKDTZLwfNgIgU5RSZ1HgSIGe1Ynj812PePk%2Bnp29uVEHqC48A5ut8SQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPARQzQCQXzmkedmyrcAyQq1B7ehz9eSqwGaIQ5Yj0M6OXXWNdsRn1Hm0QSnyJcAxo2fcOCEQ3AK3IlpYrp0VLX%2BsluUg9UTehZcCbHhfKQvkbGz0vumLywJ%2FEwPedeclzfdlj3NzCGgIT1zZsrXgqKOc%2B369pMqYcKvnYDd8KdkyZCUgjO1PT2qfcVzY80TVzpNEAnX585vwec3PQ1UJQ0dsRtX1sE%2Bc8Mcx0gwYxx38DvEpJLHfJ8n2zKxQaVGmRxOvhHNj87ef2nWR1oohVa33pzoACJIOhfo2v7M9bO0uIOG1WglkeD4Pl1LR%2FC7y73r3BJYjEm31LHPqEQyzjb6W63ndMrfOAEp%2Fy3SgFopsPTUyO7HUCFHahsRvdqTpcj8yQKlJXcpXZU5739hl0EU1y7LB0ZURiQnt0fJBj5UBCV%2F170HOBLFMR%2B9bT%2Fm9hm5%2BzebuZ%2BVH6QiESBtR4XWipPF9UkY6xBluWjPB6Vzr7LIkt8ms3T766Ebmla0yA%2FbpT6V%2B8mZGc27rlg8NHvqSo2Oj9CYni%2B6h6o3abbCW42Qhg7nZNGCfj%2Fg%2BpDcs3cFZbfOdybfsEYSepEvwkWL8vBbqg249XHldedWiRXflyej2nuQrhEYvjips4n8vtLmv1q9TM2sI5KMI771cQGOqUB0Uw0ZUaDtyN086Nl%2BiaICpbZDB2ulnwavbuDFzxjUMxD4MMAoyb28uyPeMMt8GRf9NxnqLQncEuHsV7%2F3WcuCKS0bjuzFwdlsi2ABpvjYzF58p8apb2mhuolnDENWRO0IHp0rrqIiSkv9mltQEsB6R4YKtbzxCfjtDae8WRl56D8W4Iar1dn63lgeNLWsjuQFtGD5x9ri2WOBB5WuUoLOL1l2XMR&X-Amz-Signature=65d44eeb79e18b1f9a994f9efedf6da048f055c187f2af9cdd091339dc9b49b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

---
sys:
  pageId: "223da3bc-6297-80a4-8291-ecdfafcf7da0"
  createdTime: "2025-07-01T23:33:00.000Z"
  lastEditedTime: "2025-07-03T02:56:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Uart/jetson coms.md"
title: "Uart/jetson coms"
date: "2025-07-03T02:56:00.000Z"
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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PDKXB5Q%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCXuCTHzMin6%2FIIGAHGxuDDKlHrugOaHXM2g%2BVgqER7FwIhANIUy35cwo8k38YMJwheeTxkuPNCgogUjQnJhNZBkYNQKv8DCBoQABoMNjM3NDIzMTgzODA1IgxFZGv%2FlmJXix5Ukn0q3AM2YaFN8IO2FSHnBk6gZOZmcuPleztIzYOqx5HolyE3jMYwSTstS3t82HUGLCb4F2omb4DoV7uZ8tKyFmzHUMbr%2BFMPnHmMRtObJJhm6AgNqTZlrc6%2FvZejlbOT34uiajB5cdTcXicg9i1vmmAh3yQCjokg3BZMlfZlDCP%2Bh%2FVi95T5joe6mMdSS8qTPdPU4n%2BsaT4rIgf3HxF9mCU%2BIMU2smfujeiulRmOEM80HYIC2zW5JM43JO9Lj1NebCtA2yR7Y3Iz%2BDIc5m2xhOjLhJcc%2FoC1OOnr3CR8IJJg7jsTj0MLo94JO4cLS2%2FRhnBmQwx58%2BYwWwQeSAgoffgqoyY9FJDhMdE%2Fm0ev021CAuV3sNdorLdVpB3u%2BK8IbGIJ0wgduKiicIMCIPhTuyLnEz%2BnY2AJ5dPU%2Fcg%2F4lf9tkU4sPGu9p2bsVyfAYj0JoyrZ%2FWkKaHaU39Fb3zgp79A8SIuMFOc%2Fz%2Fbym2xHKC%2FfRJUqyg8B8zNxeu1wZc%2BTDc24NZwNAWdyWXotXLzMe13bysEbopWuF57RrLBNW96UNapnDQZNyflpbfB%2FTocS3kJga9PTXv%2FBNJQkUB3S6LleSGThkOu%2B5otJ6MDz6j6%2FY1chPFp%2FmdVpBdSc8AMFTDa5ZrDBjqkAf%2FEJKE9wwGdha2GvRQg0ustl9LoIXnL3%2BHVit2xXNQUUqUzUxYXXxZ3bFu06toQWvKq7Ugf5SCYRUBaF7aGVrN1f%2BMfsoqFHU0sduJNag%2BCLD8DqdoUCxsfF%2BrWvvV8kU4zQA7YbnOmuemgvszs4dw7Jj%2FFWc45yUHxTj%2BqPLlmN0yteWqQGZ2MORxKqrphfJdlyQM6kXEh%2B%2Bvh2AbK4tNUAxtb&X-Amz-Signature=65cc5623e0d17d8d160696a5fb6c1dbdb8500e2670ef04d357a9fa6f2a383480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCQYSO2I%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDD9H51tv0zh%2Byu2RfC9Ag5ujqYKq56kKKpBsynYZndUAIhAKE5CB6qw46UGRoVEIgQt8LCejcz1FLfOISLYg0NsA%2BEKv8DCBoQABoMNjM3NDIzMTgzODA1IgyA1fV6IwKSHbTyuasq3AOyv3l2dBst3IUGf4m8gH%2FNQex2VMT6rw0DqJo8X6YdhKndTBsRGFcRwRoQ8RlBC5Y7iPIKwyPQi4oAXU1m2HIy%2BTPuVbtZ0dDq2otCzJKuIjXholiy0uE6gF1QwCiAena73VP7%2BJbbYr%2F%2FkYZw%2Fbha02SVO0w65UdqrzvCVtxD1eOD32YTReyiOIlLdoJrIeHSN47bJMEP%2B1WVEFl6TNt5KDUt7t%2FlFrhMZjGz2zKnm%2Bv2W1wwi%2FRCkfh0C6VuGLUa%2B56DPphc%2BQgWHoJjtXrB6huB1X9PXNm5AiIWp25xDlJMuaqUh0mr1tZbyvgdvqE%2FY%2FkJIZpVAWAB6wq%2B8i6ANEedOWnAm3R8LdpN5v49z1sumQZClwwbTFYxofVp4VPFxV6mRvkK51FuW8AKTKbRuhS5flCixpc36ulGbReLSZk5I7x3fTKRIefBnwiGk7J5A1nV954qCM9c2N40gs7U1quIlNOATSzmstwLBc6r9653vi66H9nP3VwxrHr0tIsuhxpqzY3bLnQNoVSlPhVEF3fhdeUF%2B1rkkb1ldvfCqzrOHrIMiqo8rSqnn90HVW%2BKEr4%2F5nWpFWcyv365fxZ0q0BxgsxhzGFKmoeva2Mb0nCQ71Z61Q%2FWiayzKjDQ5ZrDBjqkAQUudjvCJdVhOo%2FuIqawRtk17sVuJmMQBMIrsKIypkr8MsYb1i4UDnnooeX3lbzstKrHbzIZQSmcs2jOUHBhqExPcKRCbegwUq1%2Fdo6qTK%2BvG658%2BfD3sCYDDIxDYPf4yUcIh%2BIcs8xpN8CSI3jj%2FLqhVg0Jvg%2FGeA8tSFB6ois3PPAiX%2Fllw51hwgfLp6AeJ%2BcOAcDSe1pV2qRQKvwGi4YTSIl9&X-Amz-Signature=e54046cdb2fa0e559c345aa0918f03cfd4a733bab608eee7e6b50e1bab316d8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Connect RX of the type-c to the TX/TXD of USB to UART

and TX of the type-c to the RX/RXD of the USB to UART

<details>
      <summary>Note: TX and TXD??</summary>
      TX / TXD
  </details>

<details>
      <summary>UART1 but its UART2???</summary>
      TODO:
  </details>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCQYSO2I%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDD9H51tv0zh%2Byu2RfC9Ag5ujqYKq56kKKpBsynYZndUAIhAKE5CB6qw46UGRoVEIgQt8LCejcz1FLfOISLYg0NsA%2BEKv8DCBoQABoMNjM3NDIzMTgzODA1IgyA1fV6IwKSHbTyuasq3AOyv3l2dBst3IUGf4m8gH%2FNQex2VMT6rw0DqJo8X6YdhKndTBsRGFcRwRoQ8RlBC5Y7iPIKwyPQi4oAXU1m2HIy%2BTPuVbtZ0dDq2otCzJKuIjXholiy0uE6gF1QwCiAena73VP7%2BJbbYr%2F%2FkYZw%2Fbha02SVO0w65UdqrzvCVtxD1eOD32YTReyiOIlLdoJrIeHSN47bJMEP%2B1WVEFl6TNt5KDUt7t%2FlFrhMZjGz2zKnm%2Bv2W1wwi%2FRCkfh0C6VuGLUa%2B56DPphc%2BQgWHoJjtXrB6huB1X9PXNm5AiIWp25xDlJMuaqUh0mr1tZbyvgdvqE%2FY%2FkJIZpVAWAB6wq%2B8i6ANEedOWnAm3R8LdpN5v49z1sumQZClwwbTFYxofVp4VPFxV6mRvkK51FuW8AKTKbRuhS5flCixpc36ulGbReLSZk5I7x3fTKRIefBnwiGk7J5A1nV954qCM9c2N40gs7U1quIlNOATSzmstwLBc6r9653vi66H9nP3VwxrHr0tIsuhxpqzY3bLnQNoVSlPhVEF3fhdeUF%2B1rkkb1ldvfCqzrOHrIMiqo8rSqnn90HVW%2BKEr4%2F5nWpFWcyv365fxZ0q0BxgsxhzGFKmoeva2Mb0nCQ71Z61Q%2FWiayzKjDQ5ZrDBjqkAQUudjvCJdVhOo%2FuIqawRtk17sVuJmMQBMIrsKIypkr8MsYb1i4UDnnooeX3lbzstKrHbzIZQSmcs2jOUHBhqExPcKRCbegwUq1%2Fdo6qTK%2BvG658%2BfD3sCYDDIxDYPf4yUcIh%2BIcs8xpN8CSI3jj%2FLqhVg0Jvg%2FGeA8tSFB6ois3PPAiX%2Fllw51hwgfLp6AeJ%2BcOAcDSe1pV2qRQKvwGi4YTSIl9&X-Amz-Signature=0a6097a92ec2e0c1ae3bf6629899393fb30069594254d3749a8021e5659d441d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

Note we applied the settings from [here](/223da3bc629780a48291ecdfafcf7da0)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCQYSO2I%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDD9H51tv0zh%2Byu2RfC9Ag5ujqYKq56kKKpBsynYZndUAIhAKE5CB6qw46UGRoVEIgQt8LCejcz1FLfOISLYg0NsA%2BEKv8DCBoQABoMNjM3NDIzMTgzODA1IgyA1fV6IwKSHbTyuasq3AOyv3l2dBst3IUGf4m8gH%2FNQex2VMT6rw0DqJo8X6YdhKndTBsRGFcRwRoQ8RlBC5Y7iPIKwyPQi4oAXU1m2HIy%2BTPuVbtZ0dDq2otCzJKuIjXholiy0uE6gF1QwCiAena73VP7%2BJbbYr%2F%2FkYZw%2Fbha02SVO0w65UdqrzvCVtxD1eOD32YTReyiOIlLdoJrIeHSN47bJMEP%2B1WVEFl6TNt5KDUt7t%2FlFrhMZjGz2zKnm%2Bv2W1wwi%2FRCkfh0C6VuGLUa%2B56DPphc%2BQgWHoJjtXrB6huB1X9PXNm5AiIWp25xDlJMuaqUh0mr1tZbyvgdvqE%2FY%2FkJIZpVAWAB6wq%2B8i6ANEedOWnAm3R8LdpN5v49z1sumQZClwwbTFYxofVp4VPFxV6mRvkK51FuW8AKTKbRuhS5flCixpc36ulGbReLSZk5I7x3fTKRIefBnwiGk7J5A1nV954qCM9c2N40gs7U1quIlNOATSzmstwLBc6r9653vi66H9nP3VwxrHr0tIsuhxpqzY3bLnQNoVSlPhVEF3fhdeUF%2B1rkkb1ldvfCqzrOHrIMiqo8rSqnn90HVW%2BKEr4%2F5nWpFWcyv365fxZ0q0BxgsxhzGFKmoeva2Mb0nCQ71Z61Q%2FWiayzKjDQ5ZrDBjqkAQUudjvCJdVhOo%2FuIqawRtk17sVuJmMQBMIrsKIypkr8MsYb1i4UDnnooeX3lbzstKrHbzIZQSmcs2jOUHBhqExPcKRCbegwUq1%2Fdo6qTK%2BvG658%2BfD3sCYDDIxDYPf4yUcIh%2BIcs8xpN8CSI3jj%2FLqhVg0Jvg%2FGeA8tSFB6ois3PPAiX%2Fllw51hwgfLp6AeJ%2BcOAcDSe1pV2qRQKvwGi4YTSIl9&X-Amz-Signature=ca3446c0ee3e916bd6ed0c86916cc352a5fca61a1340e4d90d2afe7600b53dee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

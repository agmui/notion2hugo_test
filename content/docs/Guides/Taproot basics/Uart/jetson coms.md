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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ24UM7T%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFMGbzVfBjvkCPVTvax0ZNYAIUX2tLYSlKbfL2z0LOrIAiEAlZDPEIsmc88aTNA85dCsgVUhCzY7qFfZR0gEHbL7g5Mq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEI%2FUTvBnYIYRX4kYCrcAwrDJ5CcoYXLxDav45q2UNgdgNGTSwieFCz0aRUgjrlJXHLKLjGODWaC6PSYp4iBMRoz4yy4apgEWfqLJX2FIcu4K0N6dajdVyvM0wHJFoPqxDOpQ5SDcyWJn5vp%2FBBN5FROpvoNEGqWfDsutngtYvC7ohkB39mspixZQMdb1cf5CI0%2Bjpsl1661IaaH9anji2hS1WimzFjKuzl8Q7jGQ%2FPjyz3yC3ooNKIZ1cj8T5yRiBB3dFdlpOUweSS3GDIikWC7nWlhWoqLbRWiTk5EEOm0Xdyu1rgsTa%2FxG%2FEQjCQJlHfVhbBUvXD%2Bx2AO5H2ru32MpwE1e5MkbxoG8MOR929Q4xW7WIxQQFHL70SnOkx0VxeY%2F8y%2Flj0KUutl%2Fv2E%2Ba0%2FivLMQDYy5cHDOyzICkZNu2ycC3Grz7LZ7pBY3c5O3qu%2BQ20tLqe3VqW1L%2BreyNSel9e5jFNSXvQXj5h%2F95Jar3pk5YXXfE%2BWMolhzhtufXXXqEQa%2ByHPw5NQwRXY3aAdv7LB8EKCJejhWqorDW1kJeRa3hGtlVw5Ov9%2BrD8GHZoJtWyQXNq4LMReBp1F1N95bUItAvAfOrTU6ZbIf8apvIiKrXXo07C9TjLTEPujiaGEIOt8DGuQMW7AMJDal8QGOqUB4Z1mrDq4wEPQ4FUvmPgfZAks7vxLIxkZCil%2FvaG4YbZLg2Z%2Bn64hZA0bbcs3GqnVCyGEheyDWJL7zfbNoJ4r3LN1GOJ1%2F5p95bDQkbiL8ZsCyXpN2%2F6rt78b3dMv3mGaNa9ETdf6GdZsuq7789RhiQseNYKhaBnAQNRLTuA2enwPwEySa%2FYl51jvVz0aAqGoORKbpQX9AQhlCFAvZuTcb5Ks0M7%2B&X-Amz-Signature=34f9cd97c8283b4debdf5dcebd84b624d276c2f928e3748b31766e74114ccc69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWVPLYX5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDXcnMX2QheQe3gEh5hdknt6Kn%2BDNKZYorIcYiL0nUHDQIhALaeuokfo9KaRtS%2F3Fau6Km7LwBaxB64UiF2N74SbcqfKv8DCHIQABoMNjM3NDIzMTgzODA1IgxKNDOjLJoZ8aJF6mkq3APFhFUTXYC08lNiGz%2FWNWSfMG9h8pj7MArEAiO1QutRGqGny26ZbFC7z%2BxoI9FmfW49IJgGPBhQc3RSaap6i1L8XBvM%2BPhwrN5TeZi5Ig%2BimngQPBd8XovXOZ0RpF%2Bn5sb1qejtXrFU%2B%2Bu%2B0ouA7Wo2AFKp9bR%2FiUxfSrPOZTVwIeK9JGMsGJggiAGV8ba8dj3TcuidMrdydfNL8uTjhh07Hg9%2B0uv9LH5s41yUkYo10CHNst5CK26oBVc8X8vkout4tqOAN4N%2FU69icRW7gvoz%2FNlk0Aev%2FkvF9LIjeMGXTzh0TdnwNMla%2BA0O04q1dfEK4Tt0Yf6ek22NahTqP7SFl5wJXx8JtwNw2p7HE5TNAM26x2jwJmdZEN66NbbnBUp0o3ZMdbPw70x4Y3QuzPUQpDYSd6E2BWbRp9mmFyaiRqWbV%2Brrhp9XjLmmcD6o1oxaoskzxreXMCFAdS6OeL9GPZw5p%2Bn%2F77d%2BBp4VjRXmDDxvhmvroRtKO3Z90hiJn9UwXyg7%2FoIspFn8ZGy5syE%2BCU2zXmbJvCrtiw9k6b4rXhxkTukx%2FemUa6eK1K4hC0zui8AagvqKvHuoac%2FzQ0EMFF9Rph3weMhzTnNmlAGwD3nD4Tk1jw0TOQrRzzDN15fEBjqkAfmYGQ%2BjVH0fySfoeb79rnd0qjPdDxzs8jIe9i1RrGEceDAXFNAbUjZea2d3WFNSFIqO25NRaXtYL0%2B7F1YndRiIxcMiIUS49t2vhuM4oZpnWHfWOGkCck2SWAtH3Xwr%2BRUFNorHlyuzSHEwyevp2p3v7S3uyJXrDie0j15leJCaVzsizh%2BIxuHmziqjs06eF%2FSwDGv7kcceh%2F%2BU%2BFdpWl%2B%2FkV9W&X-Amz-Signature=428746284956f5b996f0c309603d26b292a8ff2d100416788b712267067bf364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWVPLYX5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDXcnMX2QheQe3gEh5hdknt6Kn%2BDNKZYorIcYiL0nUHDQIhALaeuokfo9KaRtS%2F3Fau6Km7LwBaxB64UiF2N74SbcqfKv8DCHIQABoMNjM3NDIzMTgzODA1IgxKNDOjLJoZ8aJF6mkq3APFhFUTXYC08lNiGz%2FWNWSfMG9h8pj7MArEAiO1QutRGqGny26ZbFC7z%2BxoI9FmfW49IJgGPBhQc3RSaap6i1L8XBvM%2BPhwrN5TeZi5Ig%2BimngQPBd8XovXOZ0RpF%2Bn5sb1qejtXrFU%2B%2Bu%2B0ouA7Wo2AFKp9bR%2FiUxfSrPOZTVwIeK9JGMsGJggiAGV8ba8dj3TcuidMrdydfNL8uTjhh07Hg9%2B0uv9LH5s41yUkYo10CHNst5CK26oBVc8X8vkout4tqOAN4N%2FU69icRW7gvoz%2FNlk0Aev%2FkvF9LIjeMGXTzh0TdnwNMla%2BA0O04q1dfEK4Tt0Yf6ek22NahTqP7SFl5wJXx8JtwNw2p7HE5TNAM26x2jwJmdZEN66NbbnBUp0o3ZMdbPw70x4Y3QuzPUQpDYSd6E2BWbRp9mmFyaiRqWbV%2Brrhp9XjLmmcD6o1oxaoskzxreXMCFAdS6OeL9GPZw5p%2Bn%2F77d%2BBp4VjRXmDDxvhmvroRtKO3Z90hiJn9UwXyg7%2FoIspFn8ZGy5syE%2BCU2zXmbJvCrtiw9k6b4rXhxkTukx%2FemUa6eK1K4hC0zui8AagvqKvHuoac%2FzQ0EMFF9Rph3weMhzTnNmlAGwD3nD4Tk1jw0TOQrRzzDN15fEBjqkAfmYGQ%2BjVH0fySfoeb79rnd0qjPdDxzs8jIe9i1RrGEceDAXFNAbUjZea2d3WFNSFIqO25NRaXtYL0%2B7F1YndRiIxcMiIUS49t2vhuM4oZpnWHfWOGkCck2SWAtH3Xwr%2BRUFNorHlyuzSHEwyevp2p3v7S3uyJXrDie0j15leJCaVzsizh%2BIxuHmziqjs06eF%2FSwDGv7kcceh%2F%2BU%2BFdpWl%2B%2FkV9W&X-Amz-Signature=372c91ecf974838b50074e6fc43aae44027bd88210d9d8b8a0a1a5317795db6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWVPLYX5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDXcnMX2QheQe3gEh5hdknt6Kn%2BDNKZYorIcYiL0nUHDQIhALaeuokfo9KaRtS%2F3Fau6Km7LwBaxB64UiF2N74SbcqfKv8DCHIQABoMNjM3NDIzMTgzODA1IgxKNDOjLJoZ8aJF6mkq3APFhFUTXYC08lNiGz%2FWNWSfMG9h8pj7MArEAiO1QutRGqGny26ZbFC7z%2BxoI9FmfW49IJgGPBhQc3RSaap6i1L8XBvM%2BPhwrN5TeZi5Ig%2BimngQPBd8XovXOZ0RpF%2Bn5sb1qejtXrFU%2B%2Bu%2B0ouA7Wo2AFKp9bR%2FiUxfSrPOZTVwIeK9JGMsGJggiAGV8ba8dj3TcuidMrdydfNL8uTjhh07Hg9%2B0uv9LH5s41yUkYo10CHNst5CK26oBVc8X8vkout4tqOAN4N%2FU69icRW7gvoz%2FNlk0Aev%2FkvF9LIjeMGXTzh0TdnwNMla%2BA0O04q1dfEK4Tt0Yf6ek22NahTqP7SFl5wJXx8JtwNw2p7HE5TNAM26x2jwJmdZEN66NbbnBUp0o3ZMdbPw70x4Y3QuzPUQpDYSd6E2BWbRp9mmFyaiRqWbV%2Brrhp9XjLmmcD6o1oxaoskzxreXMCFAdS6OeL9GPZw5p%2Bn%2F77d%2BBp4VjRXmDDxvhmvroRtKO3Z90hiJn9UwXyg7%2FoIspFn8ZGy5syE%2BCU2zXmbJvCrtiw9k6b4rXhxkTukx%2FemUa6eK1K4hC0zui8AagvqKvHuoac%2FzQ0EMFF9Rph3weMhzTnNmlAGwD3nD4Tk1jw0TOQrRzzDN15fEBjqkAfmYGQ%2BjVH0fySfoeb79rnd0qjPdDxzs8jIe9i1RrGEceDAXFNAbUjZea2d3WFNSFIqO25NRaXtYL0%2B7F1YndRiIxcMiIUS49t2vhuM4oZpnWHfWOGkCck2SWAtH3Xwr%2BRUFNorHlyuzSHEwyevp2p3v7S3uyJXrDie0j15leJCaVzsizh%2BIxuHmziqjs06eF%2FSwDGv7kcceh%2F%2BU%2BFdpWl%2B%2FkV9W&X-Amz-Signature=e56b6ae2712e12c64887ad2553fb87d1df052917327e628442a3bc0cc49d3ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

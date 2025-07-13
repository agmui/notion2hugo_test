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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A4FWSOJ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrQCNF1z%2F1u0TQvkRgk76GAZao3zwrBASq%2FxJpTzHdJAiEA%2BlkqmgeVuOsZfHlWHnqP64ljlniXJe%2FcHPq%2BmUY7O2kq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDD5%2FlzqXoAgnrfXvBircA0RUr9%2BP6uOusUuzbbctjFhhI6k%2F3GXu45sJ1UTSIvs1YhBUoo0UlPZ3XJvVd%2FP8zwFh%2F%2FtWHyg7CCryoTyEmSvtJ5WZGMEqp4ug%2BsQx4BrlgsVqnpWfn0PF6VraO5QS%2BwsT0%2BD6o7nux%2BCAkZmjXz6n66oMFa7rhSrCbn3sRBs%2BYVFMMJKTvy7mxIzGm9yJN9k%2FvrTScWkLgla6NArb3HoVR1vF6sKpRfjhFZfoCjLYH4u6u7KVZC2GV%2F8oCR1Mo%2FeYjRd%2Fpr%2BF3%2FsUNHJwCzexA8kLfeNMrIdmBWM%2F%2BAIF%2ByW2dSfsTC51LU%2Fw8HTQ4oyCvpfa%2FxP8JrP3TBsgmCZS6A%2F8drI09C6bar%2B1jG2RiceCMJmzovTvdeRKdrQy9Bo5Tvxvrkqx79M9qOhCjj%2B%2B7ixmz7cld68UxcU9ssIIoInRJJU9WYt4SnFtoyeMGYJT%2Fv16pWcBHs36bFdFhdALnI%2BNd6Wjq8G3WUa29IrQf8hmO6c9dTv4X5LOHzOHgjyA6kq3ik8jbuUHgEJWaXgDW6NCQ9FRo0CRj68s98xucdZvl8kqMmnwUMkkrMjYEh%2Fc8JeEfa9KgUbR8XnEQQqpjre2URtRll7hQ9oLN0i%2BED6%2B5TPAROcG7fP7MMakzcMGOqUBVRTuvN2i90%2F%2BmjZh6MaO%2FlUbg13QvgTSO0Ve0UVG0iHDUn2TM9FHalMy001xJVtFmWsUXEo%2FaxQNSDOfxyLaAE%2FVjf5rJdDQg6TyU89FkHvxNou%2Fx1zIg8b8GuzsQGRNQPJoxnGX26gwipR0J8gHvG51peaflGi9uLl2zXlEmRCixZ5SqLfTkR1lEMBdA7OEBu3iMdY%2FxDX%2F8uyBmj%2BQj3ia5Nv8&X-Amz-Signature=249c578d7e92dfedffe853a17b4c138ed185afcb9f6e181c50d18afc10d82a7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U65ZTYTJ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBWobXtz%2BZLHnFwlFZJ4P8cjNuq08DkIw8bQrbRS27MQIhAMG4dgfEsQo5JIJowCjsptZG%2BzLTMAcZvq85rbqmG2LJKv8DCBAQABoMNjM3NDIzMTgzODA1IgyYtxDh8cGkvrf%2BWG4q3AN8EBXZoY8OjhqXmTsn7UY5oOC15GWxBFTfRULj740F1y5Gd9wzWAJZOrLi9jdLE3JSLt2oSS8EUib58k%2BDzT3J7uUoGQJZPDTbDtVZms8gvuwkbi63OIWVAAaJ1uHs0ra6mBHJVK2Y%2BL4RnGuU7UY1ubQfvjZ16w3LdfsQeLj820IsyIJTDfpdXdV4F0VS9ZeUMd12CDXs7hLKzd7mYgFBpd8UsXz4pTvQKdSL4tvRWU7l0stLkngqforXuw8VGXHbZn4EWnNtbm550fiq6XfhhTKhuDW8bcL1wSTN6f5faFoi8MHPh%2B4CXhFqcT7tVdRhFdFMXSUh%2FQ8V%2BYL4KnmrqQFopnMFNpwEZ9TJUMVxuKiQF7jx0YdVxswZUXFbgfMd39UoEPt2P6oC3zfsDeTgCMG527Lqm4DBQQLPv7Ii%2BqsPrUJ6jZBtV7CY8kqDe%2FwPFHcT0HT%2FczWPALf8Elq69ux0ZyVLw%2Fi8tLPDrPUR07BZ9Nsfu%2Fg7M3x05M19kwQCnfbNmhtjpKq%2BklZoOqntg6bm6YqBjbrCO4eNS3AQbmNBlst9pBCBzVbnJsrB8bgzIrKzqSUYbGduabtHuyA3tEAUK7Z481FMjTzPOWZ5YvcNvWBCxi%2FS6mYESjDmpM3DBjqkAU1Lg2qetaOWRVWggfyodnbNEw9T2jTfOHcOjU71RSmKOtKbykzSwJHukyllrhS804Z89Brm%2BMEdkBDMx7cAogd1sfPEwOH%2FR%2BX1RG%2B4no8x5PpB7GXKdGwhs1yjtTISjbFh2jpAWbd9ZrxaNO7N%2B2UYjPAQxRHMAJ2bIYh7%2FaRSse0lasQ3nJx99O8FMkQvvr1ETWLrREcc3WBlu1kvih8jO7%2BP&X-Amz-Signature=b75772dcf2bf4ccb7126f1fa059d62f804f7bd09a2cbe0c2f9e65ef6d0a53a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U65ZTYTJ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBWobXtz%2BZLHnFwlFZJ4P8cjNuq08DkIw8bQrbRS27MQIhAMG4dgfEsQo5JIJowCjsptZG%2BzLTMAcZvq85rbqmG2LJKv8DCBAQABoMNjM3NDIzMTgzODA1IgyYtxDh8cGkvrf%2BWG4q3AN8EBXZoY8OjhqXmTsn7UY5oOC15GWxBFTfRULj740F1y5Gd9wzWAJZOrLi9jdLE3JSLt2oSS8EUib58k%2BDzT3J7uUoGQJZPDTbDtVZms8gvuwkbi63OIWVAAaJ1uHs0ra6mBHJVK2Y%2BL4RnGuU7UY1ubQfvjZ16w3LdfsQeLj820IsyIJTDfpdXdV4F0VS9ZeUMd12CDXs7hLKzd7mYgFBpd8UsXz4pTvQKdSL4tvRWU7l0stLkngqforXuw8VGXHbZn4EWnNtbm550fiq6XfhhTKhuDW8bcL1wSTN6f5faFoi8MHPh%2B4CXhFqcT7tVdRhFdFMXSUh%2FQ8V%2BYL4KnmrqQFopnMFNpwEZ9TJUMVxuKiQF7jx0YdVxswZUXFbgfMd39UoEPt2P6oC3zfsDeTgCMG527Lqm4DBQQLPv7Ii%2BqsPrUJ6jZBtV7CY8kqDe%2FwPFHcT0HT%2FczWPALf8Elq69ux0ZyVLw%2Fi8tLPDrPUR07BZ9Nsfu%2Fg7M3x05M19kwQCnfbNmhtjpKq%2BklZoOqntg6bm6YqBjbrCO4eNS3AQbmNBlst9pBCBzVbnJsrB8bgzIrKzqSUYbGduabtHuyA3tEAUK7Z481FMjTzPOWZ5YvcNvWBCxi%2FS6mYESjDmpM3DBjqkAU1Lg2qetaOWRVWggfyodnbNEw9T2jTfOHcOjU71RSmKOtKbykzSwJHukyllrhS804Z89Brm%2BMEdkBDMx7cAogd1sfPEwOH%2FR%2BX1RG%2B4no8x5PpB7GXKdGwhs1yjtTISjbFh2jpAWbd9ZrxaNO7N%2B2UYjPAQxRHMAJ2bIYh7%2FaRSse0lasQ3nJx99O8FMkQvvr1ETWLrREcc3WBlu1kvih8jO7%2BP&X-Amz-Signature=15284fcd7d043f808c36ef06f1b318a7d8d789ef68ac60b7380a08bd1387a2c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U65ZTYTJ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBWobXtz%2BZLHnFwlFZJ4P8cjNuq08DkIw8bQrbRS27MQIhAMG4dgfEsQo5JIJowCjsptZG%2BzLTMAcZvq85rbqmG2LJKv8DCBAQABoMNjM3NDIzMTgzODA1IgyYtxDh8cGkvrf%2BWG4q3AN8EBXZoY8OjhqXmTsn7UY5oOC15GWxBFTfRULj740F1y5Gd9wzWAJZOrLi9jdLE3JSLt2oSS8EUib58k%2BDzT3J7uUoGQJZPDTbDtVZms8gvuwkbi63OIWVAAaJ1uHs0ra6mBHJVK2Y%2BL4RnGuU7UY1ubQfvjZ16w3LdfsQeLj820IsyIJTDfpdXdV4F0VS9ZeUMd12CDXs7hLKzd7mYgFBpd8UsXz4pTvQKdSL4tvRWU7l0stLkngqforXuw8VGXHbZn4EWnNtbm550fiq6XfhhTKhuDW8bcL1wSTN6f5faFoi8MHPh%2B4CXhFqcT7tVdRhFdFMXSUh%2FQ8V%2BYL4KnmrqQFopnMFNpwEZ9TJUMVxuKiQF7jx0YdVxswZUXFbgfMd39UoEPt2P6oC3zfsDeTgCMG527Lqm4DBQQLPv7Ii%2BqsPrUJ6jZBtV7CY8kqDe%2FwPFHcT0HT%2FczWPALf8Elq69ux0ZyVLw%2Fi8tLPDrPUR07BZ9Nsfu%2Fg7M3x05M19kwQCnfbNmhtjpKq%2BklZoOqntg6bm6YqBjbrCO4eNS3AQbmNBlst9pBCBzVbnJsrB8bgzIrKzqSUYbGduabtHuyA3tEAUK7Z481FMjTzPOWZ5YvcNvWBCxi%2FS6mYESjDmpM3DBjqkAU1Lg2qetaOWRVWggfyodnbNEw9T2jTfOHcOjU71RSmKOtKbykzSwJHukyllrhS804Z89Brm%2BMEdkBDMx7cAogd1sfPEwOH%2FR%2BX1RG%2B4no8x5PpB7GXKdGwhs1yjtTISjbFh2jpAWbd9ZrxaNO7N%2B2UYjPAQxRHMAJ2bIYh7%2FaRSse0lasQ3nJx99O8FMkQvvr1ETWLrREcc3WBlu1kvih8jO7%2BP&X-Amz-Signature=268168842ca2a254ee8df7ab80e043d7977034d6c82d460737ad198105588310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

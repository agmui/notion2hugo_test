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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QPZRIE7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDs4jEFhaDZPpM7nP9KJ2%2FtOEeEt88Vc9mQqKJc99y3nwIhALPLoIJja1jljkLTWVXVt2qx2unLJajdWvC3S6oxoUZSKv8DCDkQABoMNjM3NDIzMTgzODA1IgyBycuNjcEEO3b%2F7TUq3ANh0KaDK%2FFhafKpg8ahbgaRZtDOVifHyGIEoxD0TvkCLpFrH4IwhBfa2zuIa967IuhKZ0BE0M1EBamQWYcHR7QN82YOJBeZ2hXngwQNcBzCWkrAZR8HmVLE%2B63t7G5qHIpw3vH6FuelICTpN%2Fxs5CtwgbWKXTeiEgdj%2Fp871BIt5x4ZpNH5rC6WbpKGv6LDWPK7e5j6MCYm%2Ftr738rgfX2voCTuAWiNlxXIw3A7pmM%2FzkIveTx7Qo9%2FVA4u%2BfpR%2F4agE9V59ES6V88Ua%2FhOVcdoJGXMKOFyCZEoQxPvMt7Xx8YPpv0%2BYqW5Ils4of4VMgHymi%2F72XbyMMZl3snHXMOqmInRsPirj9wlVZvVrzn20dhSqyTrwCn9x7jK3foTmYlI67DXWZyIW9wrAkwdr%2F2Ctp5VgSKw1yKwfE%2F3rAk9yPYIf9lDs2rY%2B691o9HAx0jTsOl%2FUNDDkflVifq6DF%2FUqNWF9ynty4%2F7SicwuhHRo3orrtm4O%2B4QyUjVGF0hhWjT6ZoXhOGuDCpYl44OXODQ%2FPua70Tc6%2Bjv85bDMnTHGhGO7e2a8XvZd%2BuW5s3qtIGNlzIMe%2Fheqinkx6%2BfZvsc5TC79%2Ba5B9rvZM4yXRrATY%2BHFwzDYNos4c3Q9jD%2BiYvEBjqkAQp%2BumVg0AsIHGZAMTGM2CcYAERGWzLmvhi6cJnEEBofhGfoLQYdNWEisjsdpc1qmZRbB%2FAdZZ%2BjuRHGQSEIDhM%2Fgm%2FM8hTpVzD0e0uERCT2iT71gWR9%2FwUzEVyz9QylHMZ%2FLv8kNgcmoJJUhZ3YlfPDKeaR%2B9UdT7efNvNTpuzzWmB%2FDOXAl6v3%2BbB6ZQ47qAcMMPMma3h69fgZ%2FIhB1hhOfmdc&X-Amz-Signature=b5f3f03ed007358ab9a6e74f0bff8a179a6133c467df2c3755c02cb9a60fc37c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466333ND6XA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCID45xb7FOic3WD0e7Hc2QckLxvCb2qoMCMChiZ3F8%2FNqAiA5sSAsaDtxBnV5uSRBRAXvutxFgRSFefVPjduzPFoyNyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMAA%2B2kNguVTI5pzMAKtwDaL14z2ZO3pz5Uae%2BxUbWbA93%2FCr4uQuwKe9yaCxCppt8FVEhk4UossdddeE9hxzUClWa%2BfT9dJ%2FLE2pxGvkiOa74TreMJCpDQt3Mw0Vu%2BFdv2jxnKL%2BkKEnH%2F%2Br6ZTPb7N2XQisriKjv558WOLYRje%2BOwnDKbiQ9fnEUsgk58OGyKP63%2Fk%2FNxsWWjN9hspDCKsru6vnMeTX8kkTsJdf3HWVNe%2Fiv2OEGvSzdZ8teLbtVgzdp7sTGOgNU%2Fgm4QBnfoIyrF8Suqhzbus4H0xsvKdJ05kRuZO3kb%2FoFFzbox%2BAv3dSQPUJxrHr3D0sRDVsmyAI2Z5Y3QGbvzosS4vJSc6gurSxEa2kRy7Gd1wdovfBE24DVAXyjhk1QYDEChG1dXk8HsQHb8UeUVxG2TuYdroXQ5LwqWqhdtafZCSWY%2FoU%2B1T0Vp6hlg4L1fI8ZI6b%2BSyECgQVn3pqKbBkJm8bSTjuxNjPOy1%2FW%2F1mzAGAQNtHH9SoGuzY6gAwW2s5gXRCWjnIEuE1m25qnKx4n4eyNlFF%2FiSmVnoYYIOxoMt0lzMZ5OT3HfC7EYkzbaG9%2B8FZCzDtmxB6dggQAcD%2FWygLU%2FAno4OvGMa7GOXScuTaqVzY7zukNrcJ9KZzvTQ0wq4qLxAY6pgFOmrk38Ics2M2zW1dC3KSG2w85KiN7Tqb5btiXp0GCOZbHCjOD78jcniXFIw6hPYBcvXM5GeVKqBy8KSlo%2BqIcHQRz0foIYOq565LuAUPZgPdEFSqPW%2BCY1%2F%2FgHWttu7%2BwZBARbH18Q5NVG1GSCjKZ2vCbXV4tu63fEkJkkEdXG1r%2F7gUFqrSd97H%2BujXPz4f%2FqM9FQPDDf%2B67OEjttkTwhyzXqAeS&X-Amz-Signature=5290c2125ae77f72caec46e86db1f54b9c689312c3053bd1c5db7fed96d88905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466333ND6XA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCID45xb7FOic3WD0e7Hc2QckLxvCb2qoMCMChiZ3F8%2FNqAiA5sSAsaDtxBnV5uSRBRAXvutxFgRSFefVPjduzPFoyNyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMAA%2B2kNguVTI5pzMAKtwDaL14z2ZO3pz5Uae%2BxUbWbA93%2FCr4uQuwKe9yaCxCppt8FVEhk4UossdddeE9hxzUClWa%2BfT9dJ%2FLE2pxGvkiOa74TreMJCpDQt3Mw0Vu%2BFdv2jxnKL%2BkKEnH%2F%2Br6ZTPb7N2XQisriKjv558WOLYRje%2BOwnDKbiQ9fnEUsgk58OGyKP63%2Fk%2FNxsWWjN9hspDCKsru6vnMeTX8kkTsJdf3HWVNe%2Fiv2OEGvSzdZ8teLbtVgzdp7sTGOgNU%2Fgm4QBnfoIyrF8Suqhzbus4H0xsvKdJ05kRuZO3kb%2FoFFzbox%2BAv3dSQPUJxrHr3D0sRDVsmyAI2Z5Y3QGbvzosS4vJSc6gurSxEa2kRy7Gd1wdovfBE24DVAXyjhk1QYDEChG1dXk8HsQHb8UeUVxG2TuYdroXQ5LwqWqhdtafZCSWY%2FoU%2B1T0Vp6hlg4L1fI8ZI6b%2BSyECgQVn3pqKbBkJm8bSTjuxNjPOy1%2FW%2F1mzAGAQNtHH9SoGuzY6gAwW2s5gXRCWjnIEuE1m25qnKx4n4eyNlFF%2FiSmVnoYYIOxoMt0lzMZ5OT3HfC7EYkzbaG9%2B8FZCzDtmxB6dggQAcD%2FWygLU%2FAno4OvGMa7GOXScuTaqVzY7zukNrcJ9KZzvTQ0wq4qLxAY6pgFOmrk38Ics2M2zW1dC3KSG2w85KiN7Tqb5btiXp0GCOZbHCjOD78jcniXFIw6hPYBcvXM5GeVKqBy8KSlo%2BqIcHQRz0foIYOq565LuAUPZgPdEFSqPW%2BCY1%2F%2FgHWttu7%2BwZBARbH18Q5NVG1GSCjKZ2vCbXV4tu63fEkJkkEdXG1r%2F7gUFqrSd97H%2BujXPz4f%2FqM9FQPDDf%2B67OEjttkTwhyzXqAeS&X-Amz-Signature=8b24e8276717d8df71e9eecd138d58369baf2c6555162de788864f90057609d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466333ND6XA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCID45xb7FOic3WD0e7Hc2QckLxvCb2qoMCMChiZ3F8%2FNqAiA5sSAsaDtxBnV5uSRBRAXvutxFgRSFefVPjduzPFoyNyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMAA%2B2kNguVTI5pzMAKtwDaL14z2ZO3pz5Uae%2BxUbWbA93%2FCr4uQuwKe9yaCxCppt8FVEhk4UossdddeE9hxzUClWa%2BfT9dJ%2FLE2pxGvkiOa74TreMJCpDQt3Mw0Vu%2BFdv2jxnKL%2BkKEnH%2F%2Br6ZTPb7N2XQisriKjv558WOLYRje%2BOwnDKbiQ9fnEUsgk58OGyKP63%2Fk%2FNxsWWjN9hspDCKsru6vnMeTX8kkTsJdf3HWVNe%2Fiv2OEGvSzdZ8teLbtVgzdp7sTGOgNU%2Fgm4QBnfoIyrF8Suqhzbus4H0xsvKdJ05kRuZO3kb%2FoFFzbox%2BAv3dSQPUJxrHr3D0sRDVsmyAI2Z5Y3QGbvzosS4vJSc6gurSxEa2kRy7Gd1wdovfBE24DVAXyjhk1QYDEChG1dXk8HsQHb8UeUVxG2TuYdroXQ5LwqWqhdtafZCSWY%2FoU%2B1T0Vp6hlg4L1fI8ZI6b%2BSyECgQVn3pqKbBkJm8bSTjuxNjPOy1%2FW%2F1mzAGAQNtHH9SoGuzY6gAwW2s5gXRCWjnIEuE1m25qnKx4n4eyNlFF%2FiSmVnoYYIOxoMt0lzMZ5OT3HfC7EYkzbaG9%2B8FZCzDtmxB6dggQAcD%2FWygLU%2FAno4OvGMa7GOXScuTaqVzY7zukNrcJ9KZzvTQ0wq4qLxAY6pgFOmrk38Ics2M2zW1dC3KSG2w85KiN7Tqb5btiXp0GCOZbHCjOD78jcniXFIw6hPYBcvXM5GeVKqBy8KSlo%2BqIcHQRz0foIYOq565LuAUPZgPdEFSqPW%2BCY1%2F%2FgHWttu7%2BwZBARbH18Q5NVG1GSCjKZ2vCbXV4tu63fEkJkkEdXG1r%2F7gUFqrSd97H%2BujXPz4f%2FqM9FQPDDf%2B67OEjttkTwhyzXqAeS&X-Amz-Signature=c8a3cef30cf4dea9c393f6955cfc9e0d7ad56eca11e435d24aa3d007e4db47f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

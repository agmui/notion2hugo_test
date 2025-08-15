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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIA7RIGL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCXtCyyy4R%2FATwwR1OYaex%2FxU28DqT9vWmo06o9%2F6dHVwIhAIxnKJyX5uBlqL1B2CTnjZRzgjV9qG9DN79h%2BIQSIaESKv8DCGcQABoMNjM3NDIzMTgzODA1Igz%2BW7uMt8q8RuKp%2F40q3AOoLWFaj7pm3fqRvnH9x1D3Q7Fwf9QTp3vLZfBmGInNxcGunyUKr2WZpZ7jttHbzUcHOXxbr5Jx8A5pgk7Gx36IZrt3psDxydLNUjmeJqDpEsCR1dGEIK7keOYcY1yRpEj0Vy%2FX2OtptYa3FiUdnvW%2BsE9UhHPVo8FhGu0NsTvP9eEIkoByZbD7BWcRE5r%2Fb3VL%2BSvn6SNviBFDtdKq%2BEq4MYOSCdCoKDkzBX5x%2BluvI6i2zcp%2FUBwFvLuSzuZ7uBfEFpf%2F054Nvs92jPz2AAkg4Ed2Uo7OtbLE%2FUeYYv7N4CAd%2BZnz3OcIjW8A4C32DSUFJTOUAH1pdosPDZgojgk0wfqRz6lDJOzHc%2B12rryGlvuSChUueDlhm58frjKoSgVpBACdSAvMMkDsDQZzUujbqZL%2BUtEma7jXMqdIt0R5Q8YWc5%2BZBzzF8XlWvpBLUigAYuRBH4Vk1TiCS7hLvVVhCaXOxII%2Fn%2FGcxXXlwz6tOysri5Yvjkac6KJOA5EefcIV6%2B64UL363CYuuysElnImWPDYU5%2BXyRe6YeUftVhOQl06KxCz0x3coiy8TSzYTb%2BtnTGXcTzCSjfKz4fuUCby2K7Ui6BoxlRM3n%2B48YNSwrY4PP7VaEmqf7MLnzCE2P7EBjqkAQT%2BxhGkrQrstm45hW70LcIHxtezRSD3Rwn1XN%2FJyI50DmEO%2Ffd%2FVcMt5mDKhbu0mXeRnpEBD7SiZ%2Bi%2FJFqJWo1yY%2Fan3q6Evld81lSw0zxvPzWoI%2BtI21df4bpEg44WNEsK9SsDylo0t6J4wfLK3p95fel%2FSxs5XctFwkxsGcE323KDr6ZDrVGBjtn6sjPI974D2aOW7%2FHPWHbbOSgDeTasJBg1&X-Amz-Signature=cb4c5fdc18b10b0c8726bb09273b6e3bb69e42367af7752981e534971789f57b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3YL6YWO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAPHeJCRDkUeZqhcWnIj39JVihjwNC%2F6FarKntLpF9PIAiAsc%2BlWe4zXWnX%2BWhhf%2FhWsK6q5L9F61Jvra8tzrxpWyCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM9%2BlLRFLF2jEVQNefKtwDfwaDPeMAmrMvP%2FNqmsnukfCYyMYLvEoSJORzdhDH2QGVpHYAu9zO%2FVeqwNL4gduKMtH730t3l%2Bo0nD1ujqi%2B9jpf1ISUUJvGJrXs2mzZDhMn9O8GQfqyJguIYzfRai7wKSQV4jTQ8A3qcu7LTrTnREQNaQTGn3TDdNagF5QuRRSoPisoe9l3jBvjiXzjJCkDvYXlk4zrhB7NEUTAy2cY%2FOCDTsEJwNyUta0H%2FeN%2FdM1F1%2F853biiJmTX5k7UTy6aH0tQo0RXUADjTCVKL4itHVvCUUJOldpbEXUGbNfGBZfAGhQqo0pX4sZTu5n%2BGrqULT2anNrnz4AwSo3Og0s1reWOkQ3NyQgOjzVpn4QK8%2Bh%2FMdMwIuWpWkoQqzO%2BKuVU5IZYUWd0%2Bp6vQNqaSD4jtCokP%2FwV5M2PorHuFS2j4iw6mXs4bDt7w%2FnT%2Bi97BDn8NmK1hTplH5ZiqTVapP5%2FSR9QX0fUp10%2BMKzn8ADBZ8gWpfXjDrLjL8w9sFbh5be5GpSw0vH4kXj6cDoY4Te8c6gRM1BhywANUZs%2BIDw0b9PSXUqYZZecVNFlQGRZPIfGv3X%2FetPGi6RTvZBvYxRDhacLUD%2F%2BTPLBqU4oaput8OuoxgcOn6abtLMUgHAw59f%2BxAY6pgHvlVpk9XNF4wTfwf%2FDysY3s%2BTnPBFdNf9Z0H64tLkAjc8XIXQNcAayqcXFfTaEmZdTku7e8%2FaSbZmG3D1N6nHf6V4jmmMsjYb2zWAwbYlny5fjI2JtTlfkwTcF3VtGBcKwHv7VJYtygXeLWX3G8Ya7DhTs5aErR%2FoRqjxEWs%2B6b7CIBE5ehi3CJ8wSmRy1z3coHy8GJERov2Tv5wpe1n7mG1rlMizc&X-Amz-Signature=a9db76a92114966b4577da4bc23c54b29c840259a8ce866b7dc864827ea2bda5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3YL6YWO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAPHeJCRDkUeZqhcWnIj39JVihjwNC%2F6FarKntLpF9PIAiAsc%2BlWe4zXWnX%2BWhhf%2FhWsK6q5L9F61Jvra8tzrxpWyCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM9%2BlLRFLF2jEVQNefKtwDfwaDPeMAmrMvP%2FNqmsnukfCYyMYLvEoSJORzdhDH2QGVpHYAu9zO%2FVeqwNL4gduKMtH730t3l%2Bo0nD1ujqi%2B9jpf1ISUUJvGJrXs2mzZDhMn9O8GQfqyJguIYzfRai7wKSQV4jTQ8A3qcu7LTrTnREQNaQTGn3TDdNagF5QuRRSoPisoe9l3jBvjiXzjJCkDvYXlk4zrhB7NEUTAy2cY%2FOCDTsEJwNyUta0H%2FeN%2FdM1F1%2F853biiJmTX5k7UTy6aH0tQo0RXUADjTCVKL4itHVvCUUJOldpbEXUGbNfGBZfAGhQqo0pX4sZTu5n%2BGrqULT2anNrnz4AwSo3Og0s1reWOkQ3NyQgOjzVpn4QK8%2Bh%2FMdMwIuWpWkoQqzO%2BKuVU5IZYUWd0%2Bp6vQNqaSD4jtCokP%2FwV5M2PorHuFS2j4iw6mXs4bDt7w%2FnT%2Bi97BDn8NmK1hTplH5ZiqTVapP5%2FSR9QX0fUp10%2BMKzn8ADBZ8gWpfXjDrLjL8w9sFbh5be5GpSw0vH4kXj6cDoY4Te8c6gRM1BhywANUZs%2BIDw0b9PSXUqYZZecVNFlQGRZPIfGv3X%2FetPGi6RTvZBvYxRDhacLUD%2F%2BTPLBqU4oaput8OuoxgcOn6abtLMUgHAw59f%2BxAY6pgHvlVpk9XNF4wTfwf%2FDysY3s%2BTnPBFdNf9Z0H64tLkAjc8XIXQNcAayqcXFfTaEmZdTku7e8%2FaSbZmG3D1N6nHf6V4jmmMsjYb2zWAwbYlny5fjI2JtTlfkwTcF3VtGBcKwHv7VJYtygXeLWX3G8Ya7DhTs5aErR%2FoRqjxEWs%2B6b7CIBE5ehi3CJ8wSmRy1z3coHy8GJERov2Tv5wpe1n7mG1rlMizc&X-Amz-Signature=ea03073699b5f5dac1ffd704107f400f331c24915f3eb633169dcd7bb6d3a41e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3YL6YWO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAPHeJCRDkUeZqhcWnIj39JVihjwNC%2F6FarKntLpF9PIAiAsc%2BlWe4zXWnX%2BWhhf%2FhWsK6q5L9F61Jvra8tzrxpWyCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM9%2BlLRFLF2jEVQNefKtwDfwaDPeMAmrMvP%2FNqmsnukfCYyMYLvEoSJORzdhDH2QGVpHYAu9zO%2FVeqwNL4gduKMtH730t3l%2Bo0nD1ujqi%2B9jpf1ISUUJvGJrXs2mzZDhMn9O8GQfqyJguIYzfRai7wKSQV4jTQ8A3qcu7LTrTnREQNaQTGn3TDdNagF5QuRRSoPisoe9l3jBvjiXzjJCkDvYXlk4zrhB7NEUTAy2cY%2FOCDTsEJwNyUta0H%2FeN%2FdM1F1%2F853biiJmTX5k7UTy6aH0tQo0RXUADjTCVKL4itHVvCUUJOldpbEXUGbNfGBZfAGhQqo0pX4sZTu5n%2BGrqULT2anNrnz4AwSo3Og0s1reWOkQ3NyQgOjzVpn4QK8%2Bh%2FMdMwIuWpWkoQqzO%2BKuVU5IZYUWd0%2Bp6vQNqaSD4jtCokP%2FwV5M2PorHuFS2j4iw6mXs4bDt7w%2FnT%2Bi97BDn8NmK1hTplH5ZiqTVapP5%2FSR9QX0fUp10%2BMKzn8ADBZ8gWpfXjDrLjL8w9sFbh5be5GpSw0vH4kXj6cDoY4Te8c6gRM1BhywANUZs%2BIDw0b9PSXUqYZZecVNFlQGRZPIfGv3X%2FetPGi6RTvZBvYxRDhacLUD%2F%2BTPLBqU4oaput8OuoxgcOn6abtLMUgHAw59f%2BxAY6pgHvlVpk9XNF4wTfwf%2FDysY3s%2BTnPBFdNf9Z0H64tLkAjc8XIXQNcAayqcXFfTaEmZdTku7e8%2FaSbZmG3D1N6nHf6V4jmmMsjYb2zWAwbYlny5fjI2JtTlfkwTcF3VtGBcKwHv7VJYtygXeLWX3G8Ya7DhTs5aErR%2FoRqjxEWs%2B6b7CIBE5ehi3CJ8wSmRy1z3coHy8GJERov2Tv5wpe1n7mG1rlMizc&X-Amz-Signature=cf2b3d50b96f4f26ffbe55317056a90466be5529a8632329d3e6721cba43d946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

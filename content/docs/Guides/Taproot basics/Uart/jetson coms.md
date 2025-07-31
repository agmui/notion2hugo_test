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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YGOTXUO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClqwYU4Nx8sgI8VkeED%2FHY646jJFe8fWiOmaegsObEcgIgWxMVp7PSU5nRlbk4DW3iUNY4TN659qyCaGrlz6dRri4qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZpSLPM5904mVvYvircA53VLLQ8q69AkbmtSCq0yh0WRAAL1kyEB1yvUuDJCYSIkadFQIdxVKa%2B%2BGLtn01OzaZ1TDeIdwP0pEx%2B4x%2FyGL1CyRdFE%2F%2F%2FDkHbcG6B5BCyE7FN3l0dVW5%2B8Z8O0akKOq4q7OhTvpBbcrPhkOsnoSbb%2Brvef3qfPS7UsCWa2f93wYV4hI2IQy5gjLXreVraieYVeFxp6k4%2Bm9OgXLK83yRVL71ksdlG0s94L%2BJy0KY6dHgOuC9of4LaVM%2B7a82%2FoMMCZtN%2FSnM1lrPyipZ%2B%2F5FIIcZLvxoxpFWbY%2BX%2BEjon03jxxFtdPmuhMeZ5Y5DzWgVigqbA%2BJ%2FFCsNw6TRUcvriliKExYfPGhFyZzDdSEpmSmdLA32OEUl2iBb6rTV7LrRVbLryBQ6TKHeRAgLT4b4RpavOu5JoqeOl1yRGiCFws1Z2gvnErkQDdOnwFWQwDxc%2F5m5IUDTLKrcxkXEs255YVlkXJuXILuT0HKc1XJfJ%2BCtJOxbvYmQDZ5PDp%2FDr7XEh2MCK%2BUATeVr9VLQU5ZacdkP%2Bn%2BUhWHaFv5LjwDw8Jmw2fPuKIAa1%2BsH599t2nfZLvvuKeJaLNtRiVClckaYb8TNklGjKI5VQxPLrJdwOze3BKdLZcoM5%2FTdGMMiQrsQGOqUBZn%2F0uJr%2Bz9qR5rAkdTe1chy%2FpIm3hLNIbBsAbWBm94UggvC5YKANqzeGCiRSj6WmjmXdJ%2FbOvzYGUNuCuijkiJrNNCxg%2BoxoZ3cemNL5CVtlsDPXSM1zF%2F2RktcLD4x7gNnpw4jL3YHplAW0oMv%2FYwPNJxYSMi5QHuM7Bsq%2FsXil%2BKYBpx6SvdbTBT1KDxXUBloxxK2nmu3UiSYsW819GAYId8cU&X-Amz-Signature=cedd7668273c7dc1c4a8afc896a59c43e71e166cfa0b7f37d533afee7ecd5878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466563WTBS7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGZxQdsXKzF2HaVSOYxh9IZdwjwR8J6i3uhFxtbNCOVAiALozTA3SH%2BhMGlHxUf%2Fw2n3awRtbWXozUdptiwXe1PDyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFm1YbFVoef%2FEACARKtwD2MNtfyPaklWr2cPqX1TeQyABYEOJ%2BqIGIbowjKaxIYi%2B46rIoGlO3p8VANRzzSGDWAhvDNxadHF9f78nOw2vqYCefiuSmQ184rJp96lyJ3jHb4K7kbQ5oXF1%2FFm7rRJSsAf8myz42SMn6ieMsj4cW2w%2Byn58CEwT5ennA50lQRDMQ2hgeQ986t0DFLLeP4bbZAl%2FoNfE1m6wSFUd%2F0Y2GTLZ8Am09qnn6lHF8WtL6DbYL7TKvQJSt0k59GCEtpUC2RIJJXRAevjMIW2ZMyyu%2BWTGla0etSJmKItNkgnXmXn8fcr%2BLyKWz9%2FgqxV37bgkcwhmuquWW1aHzLTs%2BMrT%2FHXcwywd%2Fn%2F8EGlHI7Yszp7dOsCbiEmA7iPzjHUWP7XIb6YZdjpBUnGK6Xcr4Q21u1uiK8p3DGlTi9qBkS%2BpH6A9lrD1rZ2VCQp6l6q%2FoZycn%2Bk8jzFXKCmvGshgydU1%2FfSqve7NHEaJGiIyCxONod%2FXdbjh48XXVebPRlLJ2oVz98FvjVKqD4OVi0ge7p0UjZpDqG2%2BBaKKJ%2BUoo5akFGQP7JuWhUrLuCtQwTtr9n%2Fzubny8PjA6gUn3fbINpr23StWd0j2W7R2PMRQCwv2pb9Ye6BxYym2Eajovusw9ZCuxAY6pgGl23S3IBHevbvHhFrzpYr1YqVKLhry2uXeekZiW%2FHR1oybEIUis%2F7N8TJzzrxNFMW6r67IcJReKz2AcvUKfn8p5iRjZvVPtu%2BPdclM0O6seEEJY6Blnty52%2FZebjc8ag5Z1iTkDKPxBkwVDLqpbolukK6g%2BnT9vtIob%2BJDp%2FH3tYHTy6cWeF%2Fzuh7fnWVD1Rvh8wglsp3BxUhTB5g3C3UcoafLy7Nw&X-Amz-Signature=edf014198e6c9b35eeede59c3085607a0c2b7559a5ba1831cd7ccc19a1017ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466563WTBS7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGZxQdsXKzF2HaVSOYxh9IZdwjwR8J6i3uhFxtbNCOVAiALozTA3SH%2BhMGlHxUf%2Fw2n3awRtbWXozUdptiwXe1PDyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFm1YbFVoef%2FEACARKtwD2MNtfyPaklWr2cPqX1TeQyABYEOJ%2BqIGIbowjKaxIYi%2B46rIoGlO3p8VANRzzSGDWAhvDNxadHF9f78nOw2vqYCefiuSmQ184rJp96lyJ3jHb4K7kbQ5oXF1%2FFm7rRJSsAf8myz42SMn6ieMsj4cW2w%2Byn58CEwT5ennA50lQRDMQ2hgeQ986t0DFLLeP4bbZAl%2FoNfE1m6wSFUd%2F0Y2GTLZ8Am09qnn6lHF8WtL6DbYL7TKvQJSt0k59GCEtpUC2RIJJXRAevjMIW2ZMyyu%2BWTGla0etSJmKItNkgnXmXn8fcr%2BLyKWz9%2FgqxV37bgkcwhmuquWW1aHzLTs%2BMrT%2FHXcwywd%2Fn%2F8EGlHI7Yszp7dOsCbiEmA7iPzjHUWP7XIb6YZdjpBUnGK6Xcr4Q21u1uiK8p3DGlTi9qBkS%2BpH6A9lrD1rZ2VCQp6l6q%2FoZycn%2Bk8jzFXKCmvGshgydU1%2FfSqve7NHEaJGiIyCxONod%2FXdbjh48XXVebPRlLJ2oVz98FvjVKqD4OVi0ge7p0UjZpDqG2%2BBaKKJ%2BUoo5akFGQP7JuWhUrLuCtQwTtr9n%2Fzubny8PjA6gUn3fbINpr23StWd0j2W7R2PMRQCwv2pb9Ye6BxYym2Eajovusw9ZCuxAY6pgGl23S3IBHevbvHhFrzpYr1YqVKLhry2uXeekZiW%2FHR1oybEIUis%2F7N8TJzzrxNFMW6r67IcJReKz2AcvUKfn8p5iRjZvVPtu%2BPdclM0O6seEEJY6Blnty52%2FZebjc8ag5Z1iTkDKPxBkwVDLqpbolukK6g%2BnT9vtIob%2BJDp%2FH3tYHTy6cWeF%2Fzuh7fnWVD1Rvh8wglsp3BxUhTB5g3C3UcoafLy7Nw&X-Amz-Signature=d2ae9b83ea126b971cf91ab8327eb6d00815153a7aa14ce3c97edd5ad1fb7c60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466563WTBS7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGZxQdsXKzF2HaVSOYxh9IZdwjwR8J6i3uhFxtbNCOVAiALozTA3SH%2BhMGlHxUf%2Fw2n3awRtbWXozUdptiwXe1PDyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFm1YbFVoef%2FEACARKtwD2MNtfyPaklWr2cPqX1TeQyABYEOJ%2BqIGIbowjKaxIYi%2B46rIoGlO3p8VANRzzSGDWAhvDNxadHF9f78nOw2vqYCefiuSmQ184rJp96lyJ3jHb4K7kbQ5oXF1%2FFm7rRJSsAf8myz42SMn6ieMsj4cW2w%2Byn58CEwT5ennA50lQRDMQ2hgeQ986t0DFLLeP4bbZAl%2FoNfE1m6wSFUd%2F0Y2GTLZ8Am09qnn6lHF8WtL6DbYL7TKvQJSt0k59GCEtpUC2RIJJXRAevjMIW2ZMyyu%2BWTGla0etSJmKItNkgnXmXn8fcr%2BLyKWz9%2FgqxV37bgkcwhmuquWW1aHzLTs%2BMrT%2FHXcwywd%2Fn%2F8EGlHI7Yszp7dOsCbiEmA7iPzjHUWP7XIb6YZdjpBUnGK6Xcr4Q21u1uiK8p3DGlTi9qBkS%2BpH6A9lrD1rZ2VCQp6l6q%2FoZycn%2Bk8jzFXKCmvGshgydU1%2FfSqve7NHEaJGiIyCxONod%2FXdbjh48XXVebPRlLJ2oVz98FvjVKqD4OVi0ge7p0UjZpDqG2%2BBaKKJ%2BUoo5akFGQP7JuWhUrLuCtQwTtr9n%2Fzubny8PjA6gUn3fbINpr23StWd0j2W7R2PMRQCwv2pb9Ye6BxYym2Eajovusw9ZCuxAY6pgGl23S3IBHevbvHhFrzpYr1YqVKLhry2uXeekZiW%2FHR1oybEIUis%2F7N8TJzzrxNFMW6r67IcJReKz2AcvUKfn8p5iRjZvVPtu%2BPdclM0O6seEEJY6Blnty52%2FZebjc8ag5Z1iTkDKPxBkwVDLqpbolukK6g%2BnT9vtIob%2BJDp%2FH3tYHTy6cWeF%2Fzuh7fnWVD1Rvh8wglsp3BxUhTB5g3C3UcoafLy7Nw&X-Amz-Signature=e65da5cf6db053b44bdf559afc767ab76d5655c6ff5e23f8ddd8d2ff2a6756d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

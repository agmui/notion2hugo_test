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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6X46NYK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCYwq2RO76RWulvOQytqqAT3hEvVVY%2Fk1wt4MJ5M7t7CgIhANs%2FHZEVdkfXFPEpCVaqtjeiu6w%2F3hJBT3AAuk%2BE9IRZKv8DCG0QABoMNjM3NDIzMTgzODA1IgxCbZv6OAJN%2BtCUerEq3APyJLbgt4LwUDjes9XfPNW4VsUKD85NHNo4DQt9IbaKrI9MvOF%2FstoljHuP%2Fu1%2Fg6FivLRKNRSQnQyMK1cED82dlwB4i1EwklslZd7V8Y%2FLEIbiPjB%2BI9MKi5%2FX350spSyBuUaQ0Uk90e6NIy9rFc7zWSRQYJj5RuHgIWAjijHRq3jAnY0MDumI4mlU9FfhphlbDqF%2FUVC5Rimw7uGQR6M2jbfxFKu%2B5gSKqe65gDFaZ%2Bd9D8xkY6%2Bw35Cai%2Fz0s0UDmuWq8LUufuL6m7qmmJxsb4wIQvL14Nym%2B6LWMtrJ5GXSuiUoE5RfyY7wG6Y9iN1Ly8%2BwXigEQh7gRAynA7XUi98NAprk7n1yUZBQinNLn4nLsKIuQlbFqPPDIXmohn0FlIwp%2BBy02QGiVOGA5ETHcDPWuwFK1PYZDh2DI2K%2BbdZJ%2B6qztwDR32JRjaCO2uuMBF%2BKCwfHZYZZepq7V0%2B4PQeaVD5MN1t%2FOURJsDUng5tN22ODoHo0%2FKo%2FKhVPrXIAIRzw6e9FR7DkT6OLKiclzQ%2FuwovArRY20y5q%2BRuQ2SRHuDqlELF%2Bn8hw1hitIhbrndJhn%2FR6e0BNSU0FhVF8UCSJRm7LfczmGHrdtTxdhslGPuiGJKkM9Awl6jDRupbEBjqkAZyCI8ZDANKjj%2F3zdvqsp54E2ctaqKXoeeqWj%2BbYXdiKrTpC%2BqH5hwlz8I2rwbVeP1I9sLl2hDPZZy2YeaYQceMhTiP8q4nwP1rZvWGUPodmn7zSzFOD6wKtMDF8%2BCWLRrI066xlx%2BelYn9jLOtzzT2w10B1ITpn5AeFUMxNKSftvmD%2FpltaUZm7puq0ef90vjCGkRRAT%2BcNsKjnIKKtG5du7uhc&X-Amz-Signature=8ffe4392810210fea0eae10d3b20a43c0f1bc6b44bb2da6d743fe4b524f0756c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BB27UQE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIArmgIVau40jwR%2FxYhjLWPJzEsLQaY5sq4fBWQZGHn7gAiA7%2B%2FtSUlIC3SzRvxYcZXhUCWLN0xQWxr5NE%2BB89NmpqSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM0Ag5NAfsg2t6AKaFKtwDoEhQunJzrKCRS3dcagwYmz%2B387DoChXIRc%2FDksErNKRSY5WJ8fC9tND94k9HqF32EpY7FJlZb6P3hI3yhy7foi%2F0AIbdxTijrUXm6I0S6bN970ULXOri%2BqKsd6QQDLq%2BMKKUxClsSF6YcyRMIIUl%2Br%2Bjl3TBHm4a1pY2tNXRoAG5d2CwJZb8uDHQpOiWrk2ylqn786ifYGbkVOx1ZuLzT0MvDHls%2FBhgBQfXmM0btnAKkHh%2BBE8E5by6cNXCUlbruwjgmMExILWdEBmI5o6O448wVbOlXwJnCw%2BAh3yEj0wJGkcpz4Ux394zU2zGVji2jcRnATvDirhT7DXtwlmnp5fY49IHgdUzamOc5F9hciT0%2BowgkJJd4MkoXu%2FbJSQwLEgF7ASpCwb5y%2FEZCy17FcIKRBRZAjIxpAsydRGFTB%2FSKoytUhmNfaTxNI7opoo1Zu16jExivhCN9K2h2Yp4XLpNr3NBOW3rG69pr%2BoanMIgQ1Vez%2Fpl%2BKJzzhOPGGEM%2FumBj6S8OEzsKgIe3rxeGSa%2FqUQS3bponhY%2BJ6L8apLE7bLYozjpS3sCQVZMIgod4ipSar0mDI0y3MWYctD0sUHBYDfXVDfz%2FAXnpONYIqaChXEcTpGG6%2BHL%2BiYw1ruWxAY6pgH%2FfMqydi6LvEw3QWirbRWcrQbrFUyZscKr2uNEWVH%2BzJWthviFsAZpjlAXr44yWrbmz%2FQJky0ZF7BJtxBgJipvn7fuz1JTjNtLLtQow05fXtw%2FBGcBEY5Vbu8lX%2Fd98VSodmRECpSdzxRjIehMk75mE8fy9mF8ZatbgAorUMX7LqB%2FMGdwdBj0CCawRyMBqzrZIfZYOx7yFeLRpdtCU%2Bh%2B8n%2BetBU1&X-Amz-Signature=8cdb6bafe97cf6a7279363c712037be71f29d9a747feda18bf9ceefeb36edceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BB27UQE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIArmgIVau40jwR%2FxYhjLWPJzEsLQaY5sq4fBWQZGHn7gAiA7%2B%2FtSUlIC3SzRvxYcZXhUCWLN0xQWxr5NE%2BB89NmpqSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM0Ag5NAfsg2t6AKaFKtwDoEhQunJzrKCRS3dcagwYmz%2B387DoChXIRc%2FDksErNKRSY5WJ8fC9tND94k9HqF32EpY7FJlZb6P3hI3yhy7foi%2F0AIbdxTijrUXm6I0S6bN970ULXOri%2BqKsd6QQDLq%2BMKKUxClsSF6YcyRMIIUl%2Br%2Bjl3TBHm4a1pY2tNXRoAG5d2CwJZb8uDHQpOiWrk2ylqn786ifYGbkVOx1ZuLzT0MvDHls%2FBhgBQfXmM0btnAKkHh%2BBE8E5by6cNXCUlbruwjgmMExILWdEBmI5o6O448wVbOlXwJnCw%2BAh3yEj0wJGkcpz4Ux394zU2zGVji2jcRnATvDirhT7DXtwlmnp5fY49IHgdUzamOc5F9hciT0%2BowgkJJd4MkoXu%2FbJSQwLEgF7ASpCwb5y%2FEZCy17FcIKRBRZAjIxpAsydRGFTB%2FSKoytUhmNfaTxNI7opoo1Zu16jExivhCN9K2h2Yp4XLpNr3NBOW3rG69pr%2BoanMIgQ1Vez%2Fpl%2BKJzzhOPGGEM%2FumBj6S8OEzsKgIe3rxeGSa%2FqUQS3bponhY%2BJ6L8apLE7bLYozjpS3sCQVZMIgod4ipSar0mDI0y3MWYctD0sUHBYDfXVDfz%2FAXnpONYIqaChXEcTpGG6%2BHL%2BiYw1ruWxAY6pgH%2FfMqydi6LvEw3QWirbRWcrQbrFUyZscKr2uNEWVH%2BzJWthviFsAZpjlAXr44yWrbmz%2FQJky0ZF7BJtxBgJipvn7fuz1JTjNtLLtQow05fXtw%2FBGcBEY5Vbu8lX%2Fd98VSodmRECpSdzxRjIehMk75mE8fy9mF8ZatbgAorUMX7LqB%2FMGdwdBj0CCawRyMBqzrZIfZYOx7yFeLRpdtCU%2Bh%2B8n%2BetBU1&X-Amz-Signature=52e56999597531000bf3f404c69589460a907b951b9eb928991609453123aaa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BB27UQE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIArmgIVau40jwR%2FxYhjLWPJzEsLQaY5sq4fBWQZGHn7gAiA7%2B%2FtSUlIC3SzRvxYcZXhUCWLN0xQWxr5NE%2BB89NmpqSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM0Ag5NAfsg2t6AKaFKtwDoEhQunJzrKCRS3dcagwYmz%2B387DoChXIRc%2FDksErNKRSY5WJ8fC9tND94k9HqF32EpY7FJlZb6P3hI3yhy7foi%2F0AIbdxTijrUXm6I0S6bN970ULXOri%2BqKsd6QQDLq%2BMKKUxClsSF6YcyRMIIUl%2Br%2Bjl3TBHm4a1pY2tNXRoAG5d2CwJZb8uDHQpOiWrk2ylqn786ifYGbkVOx1ZuLzT0MvDHls%2FBhgBQfXmM0btnAKkHh%2BBE8E5by6cNXCUlbruwjgmMExILWdEBmI5o6O448wVbOlXwJnCw%2BAh3yEj0wJGkcpz4Ux394zU2zGVji2jcRnATvDirhT7DXtwlmnp5fY49IHgdUzamOc5F9hciT0%2BowgkJJd4MkoXu%2FbJSQwLEgF7ASpCwb5y%2FEZCy17FcIKRBRZAjIxpAsydRGFTB%2FSKoytUhmNfaTxNI7opoo1Zu16jExivhCN9K2h2Yp4XLpNr3NBOW3rG69pr%2BoanMIgQ1Vez%2Fpl%2BKJzzhOPGGEM%2FumBj6S8OEzsKgIe3rxeGSa%2FqUQS3bponhY%2BJ6L8apLE7bLYozjpS3sCQVZMIgod4ipSar0mDI0y3MWYctD0sUHBYDfXVDfz%2FAXnpONYIqaChXEcTpGG6%2BHL%2BiYw1ruWxAY6pgH%2FfMqydi6LvEw3QWirbRWcrQbrFUyZscKr2uNEWVH%2BzJWthviFsAZpjlAXr44yWrbmz%2FQJky0ZF7BJtxBgJipvn7fuz1JTjNtLLtQow05fXtw%2FBGcBEY5Vbu8lX%2Fd98VSodmRECpSdzxRjIehMk75mE8fy9mF8ZatbgAorUMX7LqB%2FMGdwdBj0CCawRyMBqzrZIfZYOx7yFeLRpdtCU%2Bh%2B8n%2BetBU1&X-Amz-Signature=a59553ad8da7ac26a40b7229531a8e752aa12fa27832c758eae0fde0d03dfddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

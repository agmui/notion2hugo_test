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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZZRWL6V%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIC%2BXZDCsx5aEA00Jk3w6IM8pvUMJ49TOH5OsgIuhgmbIAiEAi3U7CElsoO9wYomSvyWqnEnwfdfTNbvkfRawC2SiMqMq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDED0KA7ZA%2BeNDiNnPyrcAxrUMr7sXswoMlw0%2FVH7mIuUacqMaUVhzxYQKCN1Bv0HR8dllAr0UqEGZlrqiyyZwLMZQHmcxBC%2By6KEGjWtZKm%2BL97tzvQFj%2BJZZ7y4%2FOtaQ4BNdalRTNrvbV3%2F9MtnhyO9dUq%2Fyc7EZ%2BLAg3yVARrwty3T813WL5pyIyoLBAKL%2BbzhBdiHtyy3PtfeeP4rBvExFl8RlUrH09cnOHmi%2BsdTP%2Ff9K9H0oED4Xk0tyUulfILv%2FZXM8DjUB1y0QTbqEkrNyfT0DeqUWlrnBywKeQcwJIULbpTcy3gqzGF3Mze%2FrJj6p3RCEvyQK1KBaS%2BeNPeW%2B%2BV5ksK7IpWwP86yj3mZsdItpa6cFZ8dNB2Aw8qxeG%2Bq0sJH5LkzxXH5EpMlwSPQLfGT0VIjMqAVLmHB4EF4ADZuFiuwU2UA4%2BEpIzZSRRmUuTg5yrFSIlTsnYYLl1gUEpelIQan9cPV9Nma4%2FbR2iPuPQM38EQVqm3%2BQMP8qVdYj%2FChz%2FJX%2BxutDhG22wpkBuUJDILOEO4f1Jxn8%2BcoupVyBB6ItAmO5BYfylQWjDZbHzmOVYxGMrBHYA0m8wtRKX%2B8kLXBOgootFRHHBphYA9WhuvthtcYeu0ZTmFRxR6ePR6CUFwMsf9SMKTimcMGOqUBfksbTc87MVUrVc6Ds9Vu5GbiXYOp7Y1buiGVnWwyD7CKjV4bCXdFJjfcbudstpGl4QgknFKwqV%2BAliz6hE4OJgGu1fqUdmqCv56lxQhYY0vSxMDOszZ2f%2FsdLiRxFjYpHiaPxXvxq26wVB2HbftbEpEhU51mg9NvaVd3rGYuhOYfo0R785ejTZTI5o41xbGa0a%2BYD8xc2%2FEXQvGyhO%2Bmh3y10DpT&X-Amz-Signature=abcea96aa3dcd619062a06e392308faabcfa2a67489bd5d05594e57ce4fb9b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZF3VOG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDlFHufouINXDmsSBbCGmkySgrid3cHKcOBYwp0rhCsjwIhAN2Ls2ZHfYzJ3Pz7%2FQesoGrbwKHQMkTKOgYNhuGR2xQ6Kv8DCBUQABoMNjM3NDIzMTgzODA1IgwHJAWdANI8YXpNZD4q3AM8D4Q0FacuUHxQV%2BKvFwV%2B6KGxRa%2F87jnlFmylKZ6hjKminIo0E2i8jVzaP3gH6Plvrzdlza7mmj3YFNWAZCwLkXQ%2F%2FeCv1cD9nDgQfmTIyAuPr8QFUlRysGxXrWQ6bRJ1977zYLa8MXs6qAFdqoW3OFWx1u%2BQ96a04qva4PGoJMK4Jd2wLY5463Qi%2B99Yy791en9NiCjJZxtAeZyGxokeFZunfDvVp9MLILOKl2mTU4jOkgA08uPv2hMMlO3XXGdCBB5z4g78i71hTx6S38lvs6LFlC2DOwiSlwehhesiRhI6a%2BnSNRtel%2FUUNIL1wJzm%2BMhJnfG9XVcNOeT%2FsQ9j8sXORvexsln%2F48U9HlcicJqzYV6gbnxZVnw%2FS0PjCIW2vM92kdRC%2BurgxubAjHE8oP8fBBSbyzyMgfQMYMmVQbx%2BCQkpk7En%2F5A5ebc41zLbMcAHIlfvP7sfbyopwjVE3lwGAmVeoPv1lQOo10bvy013V49yPknsDE1qFpLcdACHgwhhtX9TvrKSNLIOG8JxZX8yGe56oXJwKp6c7tTkAYhrEGdySjnAk%2FqKQI2e89QiCCzy72rjBqancTZui1XZAyAqHMZugtW0AhrlXXRDli89yq%2BGooMhsARJjTCy4pnDBjqkAZiQZT%2B4afa2CpGw1nC8IjJHUCp0qOhzHAdiWONwf07rm2Dkp91jzpI33kFd7vI192FrnuCe5t%2FcxV9e0FrG0im7c19fmywkIFaAv4OxtJJjhANxW6XMdoDoE2lCqA9K0bR1jtStc7rZ8Y%2Fc0p67q7w8o0m2Dg8sw4PxWCtz598wovIsvWf9zwJUJKHeUnSj8O%2Fo95bPnyMdEjh4SXhM5%2BNmWbpq&X-Amz-Signature=304aa4f6fcee2350843de3195c4f3d864907a4721c78a893790c0ed937655f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZF3VOG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDlFHufouINXDmsSBbCGmkySgrid3cHKcOBYwp0rhCsjwIhAN2Ls2ZHfYzJ3Pz7%2FQesoGrbwKHQMkTKOgYNhuGR2xQ6Kv8DCBUQABoMNjM3NDIzMTgzODA1IgwHJAWdANI8YXpNZD4q3AM8D4Q0FacuUHxQV%2BKvFwV%2B6KGxRa%2F87jnlFmylKZ6hjKminIo0E2i8jVzaP3gH6Plvrzdlza7mmj3YFNWAZCwLkXQ%2F%2FeCv1cD9nDgQfmTIyAuPr8QFUlRysGxXrWQ6bRJ1977zYLa8MXs6qAFdqoW3OFWx1u%2BQ96a04qva4PGoJMK4Jd2wLY5463Qi%2B99Yy791en9NiCjJZxtAeZyGxokeFZunfDvVp9MLILOKl2mTU4jOkgA08uPv2hMMlO3XXGdCBB5z4g78i71hTx6S38lvs6LFlC2DOwiSlwehhesiRhI6a%2BnSNRtel%2FUUNIL1wJzm%2BMhJnfG9XVcNOeT%2FsQ9j8sXORvexsln%2F48U9HlcicJqzYV6gbnxZVnw%2FS0PjCIW2vM92kdRC%2BurgxubAjHE8oP8fBBSbyzyMgfQMYMmVQbx%2BCQkpk7En%2F5A5ebc41zLbMcAHIlfvP7sfbyopwjVE3lwGAmVeoPv1lQOo10bvy013V49yPknsDE1qFpLcdACHgwhhtX9TvrKSNLIOG8JxZX8yGe56oXJwKp6c7tTkAYhrEGdySjnAk%2FqKQI2e89QiCCzy72rjBqancTZui1XZAyAqHMZugtW0AhrlXXRDli89yq%2BGooMhsARJjTCy4pnDBjqkAZiQZT%2B4afa2CpGw1nC8IjJHUCp0qOhzHAdiWONwf07rm2Dkp91jzpI33kFd7vI192FrnuCe5t%2FcxV9e0FrG0im7c19fmywkIFaAv4OxtJJjhANxW6XMdoDoE2lCqA9K0bR1jtStc7rZ8Y%2Fc0p67q7w8o0m2Dg8sw4PxWCtz598wovIsvWf9zwJUJKHeUnSj8O%2Fo95bPnyMdEjh4SXhM5%2BNmWbpq&X-Amz-Signature=70434b23f50fbc9c38daa4acd3e84d6f7e923edc7838d4d6b5402015d0616b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZF3VOG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDlFHufouINXDmsSBbCGmkySgrid3cHKcOBYwp0rhCsjwIhAN2Ls2ZHfYzJ3Pz7%2FQesoGrbwKHQMkTKOgYNhuGR2xQ6Kv8DCBUQABoMNjM3NDIzMTgzODA1IgwHJAWdANI8YXpNZD4q3AM8D4Q0FacuUHxQV%2BKvFwV%2B6KGxRa%2F87jnlFmylKZ6hjKminIo0E2i8jVzaP3gH6Plvrzdlza7mmj3YFNWAZCwLkXQ%2F%2FeCv1cD9nDgQfmTIyAuPr8QFUlRysGxXrWQ6bRJ1977zYLa8MXs6qAFdqoW3OFWx1u%2BQ96a04qva4PGoJMK4Jd2wLY5463Qi%2B99Yy791en9NiCjJZxtAeZyGxokeFZunfDvVp9MLILOKl2mTU4jOkgA08uPv2hMMlO3XXGdCBB5z4g78i71hTx6S38lvs6LFlC2DOwiSlwehhesiRhI6a%2BnSNRtel%2FUUNIL1wJzm%2BMhJnfG9XVcNOeT%2FsQ9j8sXORvexsln%2F48U9HlcicJqzYV6gbnxZVnw%2FS0PjCIW2vM92kdRC%2BurgxubAjHE8oP8fBBSbyzyMgfQMYMmVQbx%2BCQkpk7En%2F5A5ebc41zLbMcAHIlfvP7sfbyopwjVE3lwGAmVeoPv1lQOo10bvy013V49yPknsDE1qFpLcdACHgwhhtX9TvrKSNLIOG8JxZX8yGe56oXJwKp6c7tTkAYhrEGdySjnAk%2FqKQI2e89QiCCzy72rjBqancTZui1XZAyAqHMZugtW0AhrlXXRDli89yq%2BGooMhsARJjTCy4pnDBjqkAZiQZT%2B4afa2CpGw1nC8IjJHUCp0qOhzHAdiWONwf07rm2Dkp91jzpI33kFd7vI192FrnuCe5t%2FcxV9e0FrG0im7c19fmywkIFaAv4OxtJJjhANxW6XMdoDoE2lCqA9K0bR1jtStc7rZ8Y%2Fc0p67q7w8o0m2Dg8sw4PxWCtz598wovIsvWf9zwJUJKHeUnSj8O%2Fo95bPnyMdEjh4SXhM5%2BNmWbpq&X-Amz-Signature=e4ab9bb344f65862848ebf515977e769f2029c017e723563f34f8fba468a9cb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

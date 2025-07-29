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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZUHHMSB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5dg3cfYNBnBv0oIn1V43GytzhY8Rf80rmjQMIivDjOAIgSZSOlWUo1mFbzMyITmR2AqCSgnJRJV9keP6I5y%2FjcDQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8VW0s5tHsfL8TF3ircA%2F%2Bhmie2A96EV2l2nLhU5Nig5JhWBzf0l54SIw9l4uD75mmJhQP%2B0voSLzwbqtai8e%2Bul0EUf5QBJD2Md10%2F12EEKjJbx74p1H%2BpSg8QmAmwgmaZN7Qrxt%2BwvdziYXIDXRSc7MCciBiNtXwwXa6xtRl%2FOWSikA%2Bu%2Bjavfv9uTJ%2FnK8wpnVK8iJx0jP3fpZkgB3ZQIKxVjeCHPDPRo7aKhbI4dlu%2BYeVyOg7mAzzY08WJM2%2Fe%2Fue3zmQQ%2B36Bdz59A6MJhFqQMSQyx2iiLNNsFtD%2BqXCebzC3AJ52%2BpWaeAXfCO3bKnJa8Shn42aiEMIEUi3cr6z9vLqG5y1%2FnqLYopMx9Do6XDuhpKF8rKNQMGcUXFFMyqke14u%2FRgaX%2BWBoqL7i0IWfKhZI%2F0OgTH1sxSg5%2B6lWi0pW3qr8WXKIz6jLt3f3cdyPpj9mzSqcZSL%2Ba2Vp8%2BqxIWERPg9nU9oAATdfe9ucNSTw1oInrs8Nbq4EKywH8r5yui0ABM1Dpr58bE%2FPdO%2B0YdFda3HcKwcdsYmO3MX6uItclXWtt50xzQwDsIV84UskYhly8HBAjfu0scMZm7a4rAki0yIj5oFyNqHHD4nM0svI%2BxJDKgw9X%2FlQM2QDWoCljhwT3YqZMMb%2Bo8QGOqUBCp8ZkmMtXXpWAPSBnb2CqIMwHKRge5JfNrDhGDPyo%2B%2Fdwl%2B9s%2B3KUDbeIJXm0mOCrZz0FlSagOzJ20U%2FXqORGXEHOHBeot8LYIfI2h1Qt%2BamYPs%2B6YNcnky95JUbqrSBpONANMg%2B48T0mm5sXAlnc%2BEO6lNBRxpv2KA%2BBjS6VggicYwLdMf93aw8ZmB%2FB8I2Vrp%2BMKew6%2BGnKmaYlan8Tf5LfM2X&X-Amz-Signature=7bfd9f3e2cf5775ffbc041a335d7ccba3f6a262a453a8d2bdd5767de95178200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNBYOFEZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiU26n%2FWif2hzkmXpEzCXRnE7oifsLE8u9iaKyca1ADQIgF0pYNPK%2BaW1uyRvSCcJMUSLtgqAoNTfbBc%2F2hVaYYCAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzgvBJ6nwW1fmaUeyrcAyvkLAJSpLk%2BA0MwzkzqGraay8IstRmR3bkVGUYx0S%2BWgXUAvjd%2Brvzzq9l8AD7bMs2qN2O6xGmR22OJt8urp1c%2B7Rcq3u7kB5dUvsZ7tLb6pi%2B7G5iBfxF8wTF8m7IB3FKkJHq4%2BKUnJE4HhGjEZoBH3Unp7GNzkfbco7IuR9lEdmlXPfSSKouEWh9nLrufLojArXy7Gu2Z%2Bsy%2BwQ4ie6Q90t%2B99wXmSu7kY3BYDecVlcCEymBCVxEbb7oh7Q20fdKAb%2F1K9vBexoVkYBjvvshUgkGCMMutcflexfvJ87e4aYmZQvnZHuX3GbO74yaZ13ltcpCgf9BMICA6EV2MCibYy2BbUW0OJo9pw2XqqPRWFRqPKFdlpCbyflpaJ8Pzfklgp4SQRSZkNx7ZQhDRoMpPqWdQirtaaaecWJW9rK6zWJeYrWNS0qc8ll1inN3Y3XKVZwdZfA1JJPgTi0Ot9XkZmXalSKUaou0%2Bwk72z4ZkSOoZXy9kN%2BHPHo0RIezehfoYBs%2FHRXF27b3UNGP3SEr%2BnJGuguBThC31vzMJIGFp3DQTD5uBCJRiK0nB4yszUVh0rht28FiTeb%2BqvLtoqEjwU1uNpWRTdaSiGWJY5k5UiV6MCoXcCKmlJL7SMMj%2Bo8QGOqUBNlUOZ%2BftqZwJMxiazMRqGz2Xw2iIPbot61bnhQfizKv5oozBnk2mRh%2F90bHgHurlD47mbwkyMhPc0ixPDNWnxYfyZEBBhI8fMDnImLoFxJgXr2Jlvnbe1vdRr1UwcHJTngj9my2ZmyQD6%2Bwy6NnWUFGyk%2Bq3WoAeVgfofx0SVEcq9sCgZXvbY2GJCmFAuMfIDh2ABQ7o%2FWmZELuE3wSvF8tMng28&X-Amz-Signature=7518bdc8b28b6e618987fd5abcbba74415f81985ab01cfce6979af75bc2f7786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNBYOFEZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiU26n%2FWif2hzkmXpEzCXRnE7oifsLE8u9iaKyca1ADQIgF0pYNPK%2BaW1uyRvSCcJMUSLtgqAoNTfbBc%2F2hVaYYCAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzgvBJ6nwW1fmaUeyrcAyvkLAJSpLk%2BA0MwzkzqGraay8IstRmR3bkVGUYx0S%2BWgXUAvjd%2Brvzzq9l8AD7bMs2qN2O6xGmR22OJt8urp1c%2B7Rcq3u7kB5dUvsZ7tLb6pi%2B7G5iBfxF8wTF8m7IB3FKkJHq4%2BKUnJE4HhGjEZoBH3Unp7GNzkfbco7IuR9lEdmlXPfSSKouEWh9nLrufLojArXy7Gu2Z%2Bsy%2BwQ4ie6Q90t%2B99wXmSu7kY3BYDecVlcCEymBCVxEbb7oh7Q20fdKAb%2F1K9vBexoVkYBjvvshUgkGCMMutcflexfvJ87e4aYmZQvnZHuX3GbO74yaZ13ltcpCgf9BMICA6EV2MCibYy2BbUW0OJo9pw2XqqPRWFRqPKFdlpCbyflpaJ8Pzfklgp4SQRSZkNx7ZQhDRoMpPqWdQirtaaaecWJW9rK6zWJeYrWNS0qc8ll1inN3Y3XKVZwdZfA1JJPgTi0Ot9XkZmXalSKUaou0%2Bwk72z4ZkSOoZXy9kN%2BHPHo0RIezehfoYBs%2FHRXF27b3UNGP3SEr%2BnJGuguBThC31vzMJIGFp3DQTD5uBCJRiK0nB4yszUVh0rht28FiTeb%2BqvLtoqEjwU1uNpWRTdaSiGWJY5k5UiV6MCoXcCKmlJL7SMMj%2Bo8QGOqUBNlUOZ%2BftqZwJMxiazMRqGz2Xw2iIPbot61bnhQfizKv5oozBnk2mRh%2F90bHgHurlD47mbwkyMhPc0ixPDNWnxYfyZEBBhI8fMDnImLoFxJgXr2Jlvnbe1vdRr1UwcHJTngj9my2ZmyQD6%2Bwy6NnWUFGyk%2Bq3WoAeVgfofx0SVEcq9sCgZXvbY2GJCmFAuMfIDh2ABQ7o%2FWmZELuE3wSvF8tMng28&X-Amz-Signature=b6923c37c65376f14ea1032b6348ee329e140e9c0c83e267351d9ecf716828b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNBYOFEZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiU26n%2FWif2hzkmXpEzCXRnE7oifsLE8u9iaKyca1ADQIgF0pYNPK%2BaW1uyRvSCcJMUSLtgqAoNTfbBc%2F2hVaYYCAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzgvBJ6nwW1fmaUeyrcAyvkLAJSpLk%2BA0MwzkzqGraay8IstRmR3bkVGUYx0S%2BWgXUAvjd%2Brvzzq9l8AD7bMs2qN2O6xGmR22OJt8urp1c%2B7Rcq3u7kB5dUvsZ7tLb6pi%2B7G5iBfxF8wTF8m7IB3FKkJHq4%2BKUnJE4HhGjEZoBH3Unp7GNzkfbco7IuR9lEdmlXPfSSKouEWh9nLrufLojArXy7Gu2Z%2Bsy%2BwQ4ie6Q90t%2B99wXmSu7kY3BYDecVlcCEymBCVxEbb7oh7Q20fdKAb%2F1K9vBexoVkYBjvvshUgkGCMMutcflexfvJ87e4aYmZQvnZHuX3GbO74yaZ13ltcpCgf9BMICA6EV2MCibYy2BbUW0OJo9pw2XqqPRWFRqPKFdlpCbyflpaJ8Pzfklgp4SQRSZkNx7ZQhDRoMpPqWdQirtaaaecWJW9rK6zWJeYrWNS0qc8ll1inN3Y3XKVZwdZfA1JJPgTi0Ot9XkZmXalSKUaou0%2Bwk72z4ZkSOoZXy9kN%2BHPHo0RIezehfoYBs%2FHRXF27b3UNGP3SEr%2BnJGuguBThC31vzMJIGFp3DQTD5uBCJRiK0nB4yszUVh0rht28FiTeb%2BqvLtoqEjwU1uNpWRTdaSiGWJY5k5UiV6MCoXcCKmlJL7SMMj%2Bo8QGOqUBNlUOZ%2BftqZwJMxiazMRqGz2Xw2iIPbot61bnhQfizKv5oozBnk2mRh%2F90bHgHurlD47mbwkyMhPc0ixPDNWnxYfyZEBBhI8fMDnImLoFxJgXr2Jlvnbe1vdRr1UwcHJTngj9my2ZmyQD6%2Bwy6NnWUFGyk%2Bq3WoAeVgfofx0SVEcq9sCgZXvbY2GJCmFAuMfIDh2ABQ7o%2FWmZELuE3wSvF8tMng28&X-Amz-Signature=27f1644c1bb96aba4a58732ef794ce3bdb2ea1bda98c5c5e5aaf9678c429ddf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

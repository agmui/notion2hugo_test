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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7V4GWN6%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD1t8pAxBVxWBDnHX2VVzSEi35uGbKgMxvBygST4lpJzwIgU7uYqg2ucesM4cEClXDIdgiwjfrYh4VnENEADS5MtD4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDNMu6DNi91t3TjJM2ircA%2FgdSXwto78ynxtCmeJ6UsPqHR%2BgeQdQ7RZC01IjzlG38KsUl%2FQbd%2FXCMEPvrRPdLyCgyKo4I4adbZsnZYZdEsfIIq5Vh3biDv6ZcxMNwIYx9jTWEYn6FOt3LVCaWfIaNc7au8W1i7KSzQCHgijl3UIj60OdXZW4%2F7piMYne62c81L6GGWmxAFnKGEH3Xpzm8%2FUGg8Pz8grbNr6%2B5JI0Jcy3eGkyB0S%2FJvg0MzhUfhrnZLR9tcYcrYY%2BpOR7VexQ0VTS5G1%2Bie1JJ3%2Fdahu3ffbiB52YO%2FH5EPVhYSlvg9OEQIzW5dxc1vGh%2F2st27%2FFEMzmCubbUGSCRhjYOMzSH71Swedte4BLX%2F5TJfudpuPV3lT0HsB9O1BnHJfNlw3e9eBSR2T%2FA%2BdZjBb6E18uaFtbM56U%2BbOMjmBg8x4NtG3pMILVaRY659s%2BWBoIpRKg69CEw8%2FecFg7gh%2FygdQeZjOVGAhHLX3O8sWAagqh4ZVmCfLeWeHr2%2BPugWinB3eSiu34VaOr3xDghc3ep%2FcpEgjMTbQFIMPp1WSOeaaU074FZior%2BhAX7znxQdkP7DjhUcthXWU3oFATZiaHH7wiA8mki5AfCe11qgdXfpUYthUBuOJO63Tv5v4RogKnMMfhmcMGOqUBu%2BhWOha87QydBOk8m1UR9fRFBlGsSQPSbVyt0Oh5gcAJmyjXqnY%2B1QfRE0bRmwkESB3xkM6eMGhHWDOBCOY5GMjB%2FojvdSRfL0P1WDQFpAWnbkOK1H%2Bi2EYDLCkKmD9VawlpS4sLJjSjJ%2FP9Fu524H4mwaEsKPdvOp%2BfVZod9xgc%2FnzDXm5e3srg%2FSgOh%2F7Xn2t4R94yvcFaWFyb6RBIQMCsb2wM&X-Amz-Signature=d60ab58aecb664c4c3b7fc4c5bc6ef655b6ef21dbb006ad85e25916ebb5d3ffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTML762N%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIC%2F8yH7GKpqCL4yCWJ3n0IdaGjC0%2Bp%2FZsIl18DYi06RLAiEAnd6B61vbg41N%2BY%2F9cBNeKO1RPw86fGAJskEGSjV3UwUq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDDqyMhT1334nKpT%2F5yrcAyGwupXlurqeCTnnBd8vkNSZBpUiNMABflwHNdIsXXZ8DC55A%2FAIS5AvU6CX5YEnBebQLi%2BJA7pxh7%2BGOUaKc36ipo4geY9UoRV6qxShuFtNIAV9HRjTe0t6AnMOTl2zcxvE9B4sR3vUcjzal86FiQPwVHpAZzEAsLHVtKQLriusHT75UODc%2BTlLo92KVOhOaCEySljC8EGot%2BJZPPfIdMltbrDnq9o819HHTmHH3z7dSZspV%2BA52PuplR0da4yVm5Ut94%2FjxqkyQEmtuJahKi%2BCicb8hJt%2BCo35HWT4r4FcUcyMlEA0M9zpfVBWVM3upI%2Fh1c2%2B4hPx%2BXBIzSVuJTIBCQcv2nAV7Y80eGknOzgvcKF%2FnyTVp%2Bh9C7%2F20pUvNvoRp6RQuyp80%2BE74hxzdfB4%2BpL7rXBbcGS0sKShR5gg15Vlxw1tVWMf3kmnQM1pOjgd6MVj%2BoLvv52rw4rq7JkyHzHQN%2B8w%2BA7LaF5L7xkdznKjwrjmvDHZiwQjt0v5WibBe93QeBTNwCI3%2BdzU35FhnWzEtQFpmQSQjLGfIzhPjYlqx5U1bM%2BnF%2BhmJ812XST1j8lnXGx%2BnIOUe7qU4xsLsxJ0dKzlfWxHEicKe4MZ2kGzssxB2B9by7ZEMKvimcMGOqUBu56BDajaDYAN%2Fd48vjViBN%2FFX2WiPfyNQhftdYSFEUaaKIjVuRGyuHkvUHxS9nGepEWRyG5p84MMdFpMveUbUJcXSZFvNXHVRbaoVJZJLkTN8o7b84M3K0EDb4KBtTPt1mX6yDnLDlo%2FXeBLVptGZp0V3KnmT5PGl8MKT2SWzALdqwl9xNZjcIkgI3e1YgSGIr0FaOQQ8ewd%2Bq1TYkyt6%2FKQq8%2FH&X-Amz-Signature=7a333b54ba056aee610999778b0337f3cbda46567133aeabb8ddda55bd66c2f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTML762N%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIC%2F8yH7GKpqCL4yCWJ3n0IdaGjC0%2Bp%2FZsIl18DYi06RLAiEAnd6B61vbg41N%2BY%2F9cBNeKO1RPw86fGAJskEGSjV3UwUq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDDqyMhT1334nKpT%2F5yrcAyGwupXlurqeCTnnBd8vkNSZBpUiNMABflwHNdIsXXZ8DC55A%2FAIS5AvU6CX5YEnBebQLi%2BJA7pxh7%2BGOUaKc36ipo4geY9UoRV6qxShuFtNIAV9HRjTe0t6AnMOTl2zcxvE9B4sR3vUcjzal86FiQPwVHpAZzEAsLHVtKQLriusHT75UODc%2BTlLo92KVOhOaCEySljC8EGot%2BJZPPfIdMltbrDnq9o819HHTmHH3z7dSZspV%2BA52PuplR0da4yVm5Ut94%2FjxqkyQEmtuJahKi%2BCicb8hJt%2BCo35HWT4r4FcUcyMlEA0M9zpfVBWVM3upI%2Fh1c2%2B4hPx%2BXBIzSVuJTIBCQcv2nAV7Y80eGknOzgvcKF%2FnyTVp%2Bh9C7%2F20pUvNvoRp6RQuyp80%2BE74hxzdfB4%2BpL7rXBbcGS0sKShR5gg15Vlxw1tVWMf3kmnQM1pOjgd6MVj%2BoLvv52rw4rq7JkyHzHQN%2B8w%2BA7LaF5L7xkdznKjwrjmvDHZiwQjt0v5WibBe93QeBTNwCI3%2BdzU35FhnWzEtQFpmQSQjLGfIzhPjYlqx5U1bM%2BnF%2BhmJ812XST1j8lnXGx%2BnIOUe7qU4xsLsxJ0dKzlfWxHEicKe4MZ2kGzssxB2B9by7ZEMKvimcMGOqUBu56BDajaDYAN%2Fd48vjViBN%2FFX2WiPfyNQhftdYSFEUaaKIjVuRGyuHkvUHxS9nGepEWRyG5p84MMdFpMveUbUJcXSZFvNXHVRbaoVJZJLkTN8o7b84M3K0EDb4KBtTPt1mX6yDnLDlo%2FXeBLVptGZp0V3KnmT5PGl8MKT2SWzALdqwl9xNZjcIkgI3e1YgSGIr0FaOQQ8ewd%2Bq1TYkyt6%2FKQq8%2FH&X-Amz-Signature=3db19507ac3f914e16629bf1147b853606b678b79a4372ed019c7bb37ad208f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTML762N%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIC%2F8yH7GKpqCL4yCWJ3n0IdaGjC0%2Bp%2FZsIl18DYi06RLAiEAnd6B61vbg41N%2BY%2F9cBNeKO1RPw86fGAJskEGSjV3UwUq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDDqyMhT1334nKpT%2F5yrcAyGwupXlurqeCTnnBd8vkNSZBpUiNMABflwHNdIsXXZ8DC55A%2FAIS5AvU6CX5YEnBebQLi%2BJA7pxh7%2BGOUaKc36ipo4geY9UoRV6qxShuFtNIAV9HRjTe0t6AnMOTl2zcxvE9B4sR3vUcjzal86FiQPwVHpAZzEAsLHVtKQLriusHT75UODc%2BTlLo92KVOhOaCEySljC8EGot%2BJZPPfIdMltbrDnq9o819HHTmHH3z7dSZspV%2BA52PuplR0da4yVm5Ut94%2FjxqkyQEmtuJahKi%2BCicb8hJt%2BCo35HWT4r4FcUcyMlEA0M9zpfVBWVM3upI%2Fh1c2%2B4hPx%2BXBIzSVuJTIBCQcv2nAV7Y80eGknOzgvcKF%2FnyTVp%2Bh9C7%2F20pUvNvoRp6RQuyp80%2BE74hxzdfB4%2BpL7rXBbcGS0sKShR5gg15Vlxw1tVWMf3kmnQM1pOjgd6MVj%2BoLvv52rw4rq7JkyHzHQN%2B8w%2BA7LaF5L7xkdznKjwrjmvDHZiwQjt0v5WibBe93QeBTNwCI3%2BdzU35FhnWzEtQFpmQSQjLGfIzhPjYlqx5U1bM%2BnF%2BhmJ812XST1j8lnXGx%2BnIOUe7qU4xsLsxJ0dKzlfWxHEicKe4MZ2kGzssxB2B9by7ZEMKvimcMGOqUBu56BDajaDYAN%2Fd48vjViBN%2FFX2WiPfyNQhftdYSFEUaaKIjVuRGyuHkvUHxS9nGepEWRyG5p84MMdFpMveUbUJcXSZFvNXHVRbaoVJZJLkTN8o7b84M3K0EDb4KBtTPt1mX6yDnLDlo%2FXeBLVptGZp0V3KnmT5PGl8MKT2SWzALdqwl9xNZjcIkgI3e1YgSGIr0FaOQQ8ewd%2Bq1TYkyt6%2FKQq8%2FH&X-Amz-Signature=43b23e1d249797eedbd57e41d8ea1b3e7b0df7559b38aec63ffcbd6d63ae5d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

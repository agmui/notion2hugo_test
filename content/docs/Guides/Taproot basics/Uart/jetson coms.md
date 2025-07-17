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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IADV253%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCQlzuuPjLbSVjRHzwiQQLiOPz6QgTa7t7%2BeFEs5iTyxQIhAKtlAkQFS8SRwtGXBZbguD7SdN0cPDGlHfRvuh3VnPoUKv8DCHcQABoMNjM3NDIzMTgzODA1IgwllSST3lpeUJudC48q3AOWeDmjVB6GYqfR7ThlJ2SzpMI6rWoxzN16lMH0axR4rz%2FSdyl34OqAJl5lsvulRtbfC63WrH8BFxHcO7pkRX8AooUFyHAWrwHmgrVpdRBDKQilnonA1iF7m379MruPdL1AsmVUMO9ZlWi97ZJ36HZaRGBdAeXdEC8ebFrFa%2BEg7kgljuQU%2FMsYGcbb2yR6Z%2BjCyDzeQ1qQehijNDLO%2FXUwHIeBlFi65HK2QnaFTlIUMYAWaW6M%2Fw3qRv5PqfIwwqT5S2NrEeQiCI3wX1nhxr1XiJKn0vC2RF1ySz9LEMwimRqRjb1urBDUeUsjhjKpv3xnpz7eu8IpC71raHicVVJ5q2FiYO5nDRJsG%2FbueeFoQJBHyPISMNhDEtxKFy%2BuivZ2y5MXJtM479tmShpUXlzqHAoNkQxWR1KajHEVlmz7qVBezRsggrpRsgkglDYlSxrz6PIgLJVeDej3zat5hibnEI7bm5NN4mh7uVE7wbbse4mqWbQb7YU8N55BHeevsZyTxZpWL1PER888%2FTFy8hzefm763Xc9%2B%2BWot9jHCvNJUHDp7DMGVFv6QCGiynae6YJb2vfrM5exghWxfKCOkD0KFsL2fAJCPd7Qf6EnlYTGxpX13mPgyk6WOxSkRTCqi%2BTDBjqkAcc0ThxoRMp5bFxh4G%2BKmHYte1LYTjWQ2G2jdNoNQmC1mAe%2Fqnkgw3iEiknaJ0tgruDZnRPNnCuL9viOhFe8HTOl10s9NJgVMmcWMhurXktp15yFdzhPXTlecJzzYLZB0ZSzNuh%2B6y5cGfLWaFscaL67MRLXXTSFEyC121iTt3iD3YCgWBhw9YoIw1hvUQVtz82jK7zD%2FfcAkMdiVpllvV2qMua%2F&X-Amz-Signature=dbc89a9cb063e98deaa99bd7911cd77a03aad227934c782a5a94304e74aba1b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RVTJMIO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIA4KrCxG4TK6kFKqPY788TBdhdGoJrNSq9qazBHVYGluAiEAhhzEYyh7gRluhy8t%2FbKeUIUpiEp4HnScIP1r0RozS5oq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMRQ%2B2IOJE5G7qwIqSrcA7DjBMvGPrIVlia6XC1rc51L%2BJMQLjEf4wD4SMMtrx24Ql3GcJCZOZmV9I3f3F7W76I5LUkXApv95OKtxTtK%2F9QXwlGF5PNOAxkpLkeJ4CJpWm4jd75Kd6COpZDt7cGR%2FqERlOShFP4hwbBfqmuH7nAtPPx64wjXbSbYvMMJsAKludiGA95jPQux6wnZaIBskBXLwGSO4teRRkRII2aOI88NkiThZTbnl995IfXEWRQ6mshcUBkM9udwnAZndRyaID6%2BN0ib6wK69Vwa7T7uSa4459rggoUwxJHhNUQrI6sXbBTKF5DYfHOE%2BBeq63CRMvduFqp48sA20Aid2MkCL67QdIOIrM%2FAXevGXxGr67yC9KSVTkwXw%2BzUf5pQVmTuXMlVllp9NZUM2%2FjN9Pyz5FOfpUOpy7dYBd2K3OQ0Hce5%2FkKHacsafmkFmZhCS9V7wSBiWDb%2BwOqsIXCoElB219fEMb6hzvR9bSFPJLFl%2FjeBHxePoW6Ietxt9Lf8efYaz2PXv%2Fdj%2BmH%2FKQ2ZagAHHdPBbaIiVe%2BqQoKSNEw3%2F8njg3Rz1cGr7pJ0aTDo9Zp8qjdAhrO%2F4hhwSdfGOUfIAsKbyI8LBkEOuiHcTnc9%2BJO6OM6AUZS4laKcBRY0MPiK5MMGOqUB36yXm2nuff78Az2eUVstwpb5Os7Br%2BlkwEXZAiudeZnwt8yhrjsipBPTAw35UaPcP3nmtFXlQtutKBbcG%2F0GZHKRoTy5%2FK5I85YyBcSkwrS%2FeY9lyW1Et2Co8M6swhXDvoSZe%2FriDRwXhrgMxTWJUPrfL5kOsnBaQZjr%2FdUyRIc6EJhrw4OUqG2Fk8qv77RL231otBRJT8mhr4Veb63hrVLem%2Bne&X-Amz-Signature=753d9592897e2cd12b55bf665032bc30c94aa788420d1d1e32147f273c73e5af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RVTJMIO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIA4KrCxG4TK6kFKqPY788TBdhdGoJrNSq9qazBHVYGluAiEAhhzEYyh7gRluhy8t%2FbKeUIUpiEp4HnScIP1r0RozS5oq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMRQ%2B2IOJE5G7qwIqSrcA7DjBMvGPrIVlia6XC1rc51L%2BJMQLjEf4wD4SMMtrx24Ql3GcJCZOZmV9I3f3F7W76I5LUkXApv95OKtxTtK%2F9QXwlGF5PNOAxkpLkeJ4CJpWm4jd75Kd6COpZDt7cGR%2FqERlOShFP4hwbBfqmuH7nAtPPx64wjXbSbYvMMJsAKludiGA95jPQux6wnZaIBskBXLwGSO4teRRkRII2aOI88NkiThZTbnl995IfXEWRQ6mshcUBkM9udwnAZndRyaID6%2BN0ib6wK69Vwa7T7uSa4459rggoUwxJHhNUQrI6sXbBTKF5DYfHOE%2BBeq63CRMvduFqp48sA20Aid2MkCL67QdIOIrM%2FAXevGXxGr67yC9KSVTkwXw%2BzUf5pQVmTuXMlVllp9NZUM2%2FjN9Pyz5FOfpUOpy7dYBd2K3OQ0Hce5%2FkKHacsafmkFmZhCS9V7wSBiWDb%2BwOqsIXCoElB219fEMb6hzvR9bSFPJLFl%2FjeBHxePoW6Ietxt9Lf8efYaz2PXv%2Fdj%2BmH%2FKQ2ZagAHHdPBbaIiVe%2BqQoKSNEw3%2F8njg3Rz1cGr7pJ0aTDo9Zp8qjdAhrO%2F4hhwSdfGOUfIAsKbyI8LBkEOuiHcTnc9%2BJO6OM6AUZS4laKcBRY0MPiK5MMGOqUB36yXm2nuff78Az2eUVstwpb5Os7Br%2BlkwEXZAiudeZnwt8yhrjsipBPTAw35UaPcP3nmtFXlQtutKBbcG%2F0GZHKRoTy5%2FK5I85YyBcSkwrS%2FeY9lyW1Et2Co8M6swhXDvoSZe%2FriDRwXhrgMxTWJUPrfL5kOsnBaQZjr%2FdUyRIc6EJhrw4OUqG2Fk8qv77RL231otBRJT8mhr4Veb63hrVLem%2Bne&X-Amz-Signature=b2d8e8fe72c9ed74fa66ff54c593cf1389b62d7b3aaa80791c61c2a421b55496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RVTJMIO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIA4KrCxG4TK6kFKqPY788TBdhdGoJrNSq9qazBHVYGluAiEAhhzEYyh7gRluhy8t%2FbKeUIUpiEp4HnScIP1r0RozS5oq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMRQ%2B2IOJE5G7qwIqSrcA7DjBMvGPrIVlia6XC1rc51L%2BJMQLjEf4wD4SMMtrx24Ql3GcJCZOZmV9I3f3F7W76I5LUkXApv95OKtxTtK%2F9QXwlGF5PNOAxkpLkeJ4CJpWm4jd75Kd6COpZDt7cGR%2FqERlOShFP4hwbBfqmuH7nAtPPx64wjXbSbYvMMJsAKludiGA95jPQux6wnZaIBskBXLwGSO4teRRkRII2aOI88NkiThZTbnl995IfXEWRQ6mshcUBkM9udwnAZndRyaID6%2BN0ib6wK69Vwa7T7uSa4459rggoUwxJHhNUQrI6sXbBTKF5DYfHOE%2BBeq63CRMvduFqp48sA20Aid2MkCL67QdIOIrM%2FAXevGXxGr67yC9KSVTkwXw%2BzUf5pQVmTuXMlVllp9NZUM2%2FjN9Pyz5FOfpUOpy7dYBd2K3OQ0Hce5%2FkKHacsafmkFmZhCS9V7wSBiWDb%2BwOqsIXCoElB219fEMb6hzvR9bSFPJLFl%2FjeBHxePoW6Ietxt9Lf8efYaz2PXv%2Fdj%2BmH%2FKQ2ZagAHHdPBbaIiVe%2BqQoKSNEw3%2F8njg3Rz1cGr7pJ0aTDo9Zp8qjdAhrO%2F4hhwSdfGOUfIAsKbyI8LBkEOuiHcTnc9%2BJO6OM6AUZS4laKcBRY0MPiK5MMGOqUB36yXm2nuff78Az2eUVstwpb5Os7Br%2BlkwEXZAiudeZnwt8yhrjsipBPTAw35UaPcP3nmtFXlQtutKBbcG%2F0GZHKRoTy5%2FK5I85YyBcSkwrS%2FeY9lyW1Et2Co8M6swhXDvoSZe%2FriDRwXhrgMxTWJUPrfL5kOsnBaQZjr%2FdUyRIc6EJhrw4OUqG2Fk8qv77RL231otBRJT8mhr4Veb63hrVLem%2Bne&X-Amz-Signature=7da666a438c4aa7abe982f605317d4aa18080f5ee9f00cbda6c61b76a658a654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

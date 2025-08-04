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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYXOE6DV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIGkAl141i056BCyVix3hP0qg5CNHpV1MTc6LvLuGEaG2AiASCTPOrKLWSIybQ5MbSIyNlJUfr8t5CsAmH%2F4R%2FO%2BWGCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMKkPDYwCc241umd6oKtwDoE5OZZ21Fr3CseM9DCLVVpxOzZsjRdtsYFx%2BHhlcfKdRB6SoZ0HG152HQA12myytfkM900Y8V8w3x1DKgfaSeAk%2FXGvMco8nebjQ8atxC0U9MURZ1vB0uqkCMBqHG4Bq06Q9ztK9thZLTSwS%2F5mpJ%2BB8REhQmb9jsN%2FPJszpt8tuDc%2FKcd7ltxcwsoc7rURbz6knmp9%2BKpaJ7z260F3ivdeFJm5rT9StQ2tOe%2BBkVAw8FTIdmcbWqeMVIqctAZhVM8S%2BUbpHUKcFcG2ikWrzZVjPLfdj%2FO4ez9WlIgfPYcBCqPbEeBmlnvzIsDk7Sw6fCN733yS8EtNQtFLW35OsNMIZTekMdQeHajtny%2B4an0jYKIWiwOE%2BZOJ9ThXIFSVgxceyRgOMEOSdW243Bhk7M1E5u7SYoooGA99ADrzCij7%2BcHuq2hB1FT3XNXS2Z6G%2FeskiMfCzpvBEjX9qaoz9cPCpGo7rTMxsc9XgwSdtcjOI3pTetMRZl04audjT%2FMwPF9N%2F7k8V4gIxLoSc4WeOPFRBnTIlkARhGmjua2%2FvBOM0rHZvYDGDU9%2B1m2MvV%2BbawJD96xIxKmy5R1DnNp5s6epp4fOcJ67mrudGE3cMOCEpE%2Fc6nAUs%2BM%2B5w6Iw6%2BnAxAY6pgHq5fXitN3veWCNx%2Bhxv9E8F7jAN%2FB3u4UC8cx6VsZTel0XdQG9kMQOhOqQgECIr9RFATiNdrAwAM1%2FSIRiUuw8RBcORM3JC1zz5WXCTfNI2aKAgThi6DcdgGsQordCOtxZjLqV%2BFKT7DRNKu7vNeXsNJcaINI0NKakI2ir30IhJXNX9Y52gHQkEL5LQr3YWygvwgOhNvJbNM1USslF5g3o2lKMdIBw&X-Amz-Signature=76435ce49745e7fcc71bbaf4e4b9c7ffecc0ce536b4d7f086516af4e8ec80419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O3FKNUU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIA%2FLyfA8P3%2BXiorVoLktw3w3qd656SIoHOjUTFOoVnw2AiBxLeWbPKQLRcIaTe2o6wij6GFobuzFViBkr8qFDwgh%2Bir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMlP1O0Rh8vSaijjndKtwDi3n5PSqKVqasah0ojMO89nQajb2YSThM3L4gC8A0sODmEJ6jzR68p0pUMg6ereDtcA7zuEzNLZ0TLc%2BHPXSX%2B%2FlOVrc8qgz0%2BhsUYY%2FlKSUlJmgP7ILy0xNFY4CgBFPDs%2BeJC3XN2y%2BrzywTfX%2BwcZCAGS5TUdL31FKULRmyQsRGLRL%2FLJGaOdGG8FB5JLMA4A4dgWThZjwIOT6IZoDk0rsubOqhaLyNGJj%2FdukNVBlipCCwoNhx9A0CcJRA5vgCLOh8%2F41RptFhiz5MT7k08Zlygj3Dh%2BxHbbYqlhK%2FcCNiSZMZak0LWcu2a4RkLoCfBQfsWuQsG5KlnDP4sbj3UCLbslyy66bAETqFPhS1mLMKvJ%2BxJH66ibSjao2qDi08jdXA6u3%2BnPgXQ7IPKX867YV%2FSLfg6G4TcC%2FSo%2BxdG50t1eaIx70MtwaMHhEoPi%2FqiVSgH3SPWuXsPBCgw8ypBJTC7afmZzwloLtMjS7HfwzelK0eknLlIxThaYL4Xtq2rz%2FxI1PhOgSufKDZPpK3vg%2FaYLdTElVo44%2F5giVpl%2FxGIlqtSLkbOVdp%2BXT5%2FDpWXUBiHql6hLOiTw8KJ8dWTZXCa8RCHlBmkdHQL7kTcNzi6sKIw%2FzBGt%2FGQHkw6enAxAY6pgFI5QfqrslJMiKzS2Fv%2BuWCQ023RQ3GDS4p5Qfs5EFf%2BheCsr4WylCkuElO8y3OrLIvoa%2Bf%2BmScbfqlwx4j%2BOeW9eWxq5AH2nLYxeFU%2B%2BT17faLJ4eUeo0x9mbeHav2Fifemj8QpfQpEctk4n6Naxwnqpt7xu3QvBlKMkNeTDZi6tSJLNo5lOg6v0lR%2BEIjbv%2FVC%2F63SyY9zj7bmbNdyWaiacMWfYhy&X-Amz-Signature=926a0246f05739e33a1e4862f871cd79df0d9899cef45e45a56488b6c9d56d46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O3FKNUU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIA%2FLyfA8P3%2BXiorVoLktw3w3qd656SIoHOjUTFOoVnw2AiBxLeWbPKQLRcIaTe2o6wij6GFobuzFViBkr8qFDwgh%2Bir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMlP1O0Rh8vSaijjndKtwDi3n5PSqKVqasah0ojMO89nQajb2YSThM3L4gC8A0sODmEJ6jzR68p0pUMg6ereDtcA7zuEzNLZ0TLc%2BHPXSX%2B%2FlOVrc8qgz0%2BhsUYY%2FlKSUlJmgP7ILy0xNFY4CgBFPDs%2BeJC3XN2y%2BrzywTfX%2BwcZCAGS5TUdL31FKULRmyQsRGLRL%2FLJGaOdGG8FB5JLMA4A4dgWThZjwIOT6IZoDk0rsubOqhaLyNGJj%2FdukNVBlipCCwoNhx9A0CcJRA5vgCLOh8%2F41RptFhiz5MT7k08Zlygj3Dh%2BxHbbYqlhK%2FcCNiSZMZak0LWcu2a4RkLoCfBQfsWuQsG5KlnDP4sbj3UCLbslyy66bAETqFPhS1mLMKvJ%2BxJH66ibSjao2qDi08jdXA6u3%2BnPgXQ7IPKX867YV%2FSLfg6G4TcC%2FSo%2BxdG50t1eaIx70MtwaMHhEoPi%2FqiVSgH3SPWuXsPBCgw8ypBJTC7afmZzwloLtMjS7HfwzelK0eknLlIxThaYL4Xtq2rz%2FxI1PhOgSufKDZPpK3vg%2FaYLdTElVo44%2F5giVpl%2FxGIlqtSLkbOVdp%2BXT5%2FDpWXUBiHql6hLOiTw8KJ8dWTZXCa8RCHlBmkdHQL7kTcNzi6sKIw%2FzBGt%2FGQHkw6enAxAY6pgFI5QfqrslJMiKzS2Fv%2BuWCQ023RQ3GDS4p5Qfs5EFf%2BheCsr4WylCkuElO8y3OrLIvoa%2Bf%2BmScbfqlwx4j%2BOeW9eWxq5AH2nLYxeFU%2B%2BT17faLJ4eUeo0x9mbeHav2Fifemj8QpfQpEctk4n6Naxwnqpt7xu3QvBlKMkNeTDZi6tSJLNo5lOg6v0lR%2BEIjbv%2FVC%2F63SyY9zj7bmbNdyWaiacMWfYhy&X-Amz-Signature=9968ed52c5320ffba162d5f7f645efaff92b9b03bcb493573526f5877eb9bfc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O3FKNUU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIA%2FLyfA8P3%2BXiorVoLktw3w3qd656SIoHOjUTFOoVnw2AiBxLeWbPKQLRcIaTe2o6wij6GFobuzFViBkr8qFDwgh%2Bir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMlP1O0Rh8vSaijjndKtwDi3n5PSqKVqasah0ojMO89nQajb2YSThM3L4gC8A0sODmEJ6jzR68p0pUMg6ereDtcA7zuEzNLZ0TLc%2BHPXSX%2B%2FlOVrc8qgz0%2BhsUYY%2FlKSUlJmgP7ILy0xNFY4CgBFPDs%2BeJC3XN2y%2BrzywTfX%2BwcZCAGS5TUdL31FKULRmyQsRGLRL%2FLJGaOdGG8FB5JLMA4A4dgWThZjwIOT6IZoDk0rsubOqhaLyNGJj%2FdukNVBlipCCwoNhx9A0CcJRA5vgCLOh8%2F41RptFhiz5MT7k08Zlygj3Dh%2BxHbbYqlhK%2FcCNiSZMZak0LWcu2a4RkLoCfBQfsWuQsG5KlnDP4sbj3UCLbslyy66bAETqFPhS1mLMKvJ%2BxJH66ibSjao2qDi08jdXA6u3%2BnPgXQ7IPKX867YV%2FSLfg6G4TcC%2FSo%2BxdG50t1eaIx70MtwaMHhEoPi%2FqiVSgH3SPWuXsPBCgw8ypBJTC7afmZzwloLtMjS7HfwzelK0eknLlIxThaYL4Xtq2rz%2FxI1PhOgSufKDZPpK3vg%2FaYLdTElVo44%2F5giVpl%2FxGIlqtSLkbOVdp%2BXT5%2FDpWXUBiHql6hLOiTw8KJ8dWTZXCa8RCHlBmkdHQL7kTcNzi6sKIw%2FzBGt%2FGQHkw6enAxAY6pgFI5QfqrslJMiKzS2Fv%2BuWCQ023RQ3GDS4p5Qfs5EFf%2BheCsr4WylCkuElO8y3OrLIvoa%2Bf%2BmScbfqlwx4j%2BOeW9eWxq5AH2nLYxeFU%2B%2BT17faLJ4eUeo0x9mbeHav2Fifemj8QpfQpEctk4n6Naxwnqpt7xu3QvBlKMkNeTDZi6tSJLNo5lOg6v0lR%2BEIjbv%2FVC%2F63SyY9zj7bmbNdyWaiacMWfYhy&X-Amz-Signature=017a4d05f0b00f58737493c41e7ae04150ee3f8687e52e8e4fdb92907a3658e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

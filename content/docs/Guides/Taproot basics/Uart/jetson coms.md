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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM3VVSKG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDLD357eYN%2FCNBZ8pfNOW7dfjJVD9j0SVwZ1K3i6tuPKgIhAOlcEM%2BCf4te%2F9HOuazFNizAYBlgbCtsfMJ2k6ubscJRKv8DCC0QABoMNjM3NDIzMTgzODA1IgzuiZZvzLS51i6c5Z0q3ANvWkPSlxz5Nxkxr5okjRc%2BiPQtvF5yEdydJZvJEE5QhKKVaveQkWkKFjcPOOKd4APGXSgz5h8Fv4v9koUAWxUkg6S20NhWyms4fXMY0qxMvODA30pCn8hkg21WAhh%2BW%2BVBy3qRiQ5AyTG2gxxoJB8fVIHsoZU8WST%2F14td%2BkAAwlNDCdh%2B98rD7KeBhzeeHUlXZgm8Hoh1r3IEkHVGiROqTFDgJ9ZlZ%2BsVZj9mnTRr0p0C9DtXv6TwpXcgDF%2B02ZRiw4fVztBd6OuTYRWas7LevwzEdPM3A3%2FymxmOLaOI28AE1YkPh2tLX0oKQqjU7owptuUk8S6zI9mfhwr9tuCbnxprJVirY8DNz1CE4jKuH8pFGQQ0PKsPJcenMOcXVbKSEidpUjniul%2FXzJ97idMD3ZHS98fkV2lxpvTf1YP%2FALNZdjywg3o6qnAjuBZHCMLmcgWPA4sa6N%2FxOsiFQk7gPF6mmmhgN3g%2BBjzxPwHzkdx1F8%2F7j1cz%2F0rIvoNqKZwFYpNorlsx0kotPRcOI20GJ9THTyIGwmGTHv2uMs0AMMdMGCthUl%2Bvuh1qtL3yryd2%2FRWrgbAqs0%2Fq%2BLcP0F%2BHeC1dMP3IXCpqtkMmg6RV35dhGV7V%2Bpk96Lit1TCptojEBjqkAQbnFZEe8RjPK%2F7ulcvGvWDlfCnuaKcs8ePnFVOZcVtKMgB3GcTYhopBmJBBXQ6YWeiUjW8utI5Z8Ii9Q%2Bstuo74gsI07K%2B7BtQOsVWMTfIm2lHRoymrRYjwNKDpoZ3wvcRcF2ZkDVowj63s1HV4d%2F5oh%2BTm08ruoltoVukpTPYHy6yYewmYW3JmH7WMykSY9DbOQxShGdbcNWIWQMAZ3cqedZSm&X-Amz-Signature=f6d9beb2beadfb8d5790752b7cbd9da30f549fc16e7bf836c98ade15623c2d26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TLHDOP4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCICvQ1gT8ih0SbZsFFLXWePOcWpBwBtpcqvOjYf%2Fc1L2RAiA1sx1vUa%2FaL8K%2BCo1tcVK29cSdD3gHTCRn8zyIe%2F0UYSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMnfmDjzHxHxXLGx0OKtwDE8nPAl5jao%2FL%2Fk0HiPfhAZFCYLx2jfGtNVupPtX%2BHmMWwNhovRUl16%2FEHAnfLWXZA1NzpCcX2kZ7gkJivg%2FtT8ZU%2FRTIhpH6V%2FJQ9AJDAXvX1rtjPO5KWth%2BEdBxP3h4wd7b4MOnHotjoBlIeR6utN%2B%2BNjfDZOzJYX42nLBpCOwoVJiqfe7lSz53QcvagVOLSJSFiN7cIFaBY1Q2aqmaZqVUt7TP%2Bq5bADt6voWA4WNvwYg4YKqoVefHnmn4ALRKsDH6hdGMgf4n6VA%2BVO4m5fJ5D2Jt038%2FXDlQc1F3Y7BorgoJNsK3138k48IAtNRzHdUyIw55v0yi1uv5CGKrk%2FFpEtl7ffqVVbRpwOYtxcDPBNMT%2FuEZzsKvdxBpwkQE7VNNoJL%2FsDMvFeE6Ga0W8dmSM1O%2BKd9BLTXJZLK9gpKKDJ1VNZXZAj5ZU7kGcd%2FQ7NReAcetvm4yR74N4NhmA%2BoZIAx%2BEjNnfdFhunIgsE9kiUBqgYEKpE0c3n%2BmuNJMiY5ie6%2BPjWrVUjctLWZPqd1XhvGa1mMcDHKEk2e%2BTq4WpSSQB9A3lqLET8cQKUzFBBtTADm1XSRta9EgqDyvJUWg5IAofZfH1YrfwHOlCWZwVvp%2BiqO5iivZ080wr7aIxAY6pgHeR6hqnKsh4WCw6%2B0mtFz5O%2BFdm3OCR1RlSnVllMYzLI1bplbH%2BpUSfm2R%2B%2BH3BlYTzTsBd%2FtDBbT0LS8qFrmiSvcPpG3HatxiR%2FIYR6LGEu8bhg1j6%2FQnL0renAsXDfFYJwYJ08JFkfM415xFwDBOmkkT7o2Nc6Ox2UaCyy5mEZSZs4P0oTOej%2BhZPQWUJ5myBWB%2Byh3YhlIDk5y6rW7%2F4Ru5UroD&X-Amz-Signature=f1b88d56ac14a5f6a22b02a594dd83ed95c299c7a91f9c3ed82a23652991dbb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TLHDOP4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCICvQ1gT8ih0SbZsFFLXWePOcWpBwBtpcqvOjYf%2Fc1L2RAiA1sx1vUa%2FaL8K%2BCo1tcVK29cSdD3gHTCRn8zyIe%2F0UYSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMnfmDjzHxHxXLGx0OKtwDE8nPAl5jao%2FL%2Fk0HiPfhAZFCYLx2jfGtNVupPtX%2BHmMWwNhovRUl16%2FEHAnfLWXZA1NzpCcX2kZ7gkJivg%2FtT8ZU%2FRTIhpH6V%2FJQ9AJDAXvX1rtjPO5KWth%2BEdBxP3h4wd7b4MOnHotjoBlIeR6utN%2B%2BNjfDZOzJYX42nLBpCOwoVJiqfe7lSz53QcvagVOLSJSFiN7cIFaBY1Q2aqmaZqVUt7TP%2Bq5bADt6voWA4WNvwYg4YKqoVefHnmn4ALRKsDH6hdGMgf4n6VA%2BVO4m5fJ5D2Jt038%2FXDlQc1F3Y7BorgoJNsK3138k48IAtNRzHdUyIw55v0yi1uv5CGKrk%2FFpEtl7ffqVVbRpwOYtxcDPBNMT%2FuEZzsKvdxBpwkQE7VNNoJL%2FsDMvFeE6Ga0W8dmSM1O%2BKd9BLTXJZLK9gpKKDJ1VNZXZAj5ZU7kGcd%2FQ7NReAcetvm4yR74N4NhmA%2BoZIAx%2BEjNnfdFhunIgsE9kiUBqgYEKpE0c3n%2BmuNJMiY5ie6%2BPjWrVUjctLWZPqd1XhvGa1mMcDHKEk2e%2BTq4WpSSQB9A3lqLET8cQKUzFBBtTADm1XSRta9EgqDyvJUWg5IAofZfH1YrfwHOlCWZwVvp%2BiqO5iivZ080wr7aIxAY6pgHeR6hqnKsh4WCw6%2B0mtFz5O%2BFdm3OCR1RlSnVllMYzLI1bplbH%2BpUSfm2R%2B%2BH3BlYTzTsBd%2FtDBbT0LS8qFrmiSvcPpG3HatxiR%2FIYR6LGEu8bhg1j6%2FQnL0renAsXDfFYJwYJ08JFkfM415xFwDBOmkkT7o2Nc6Ox2UaCyy5mEZSZs4P0oTOej%2BhZPQWUJ5myBWB%2Byh3YhlIDk5y6rW7%2F4Ru5UroD&X-Amz-Signature=a068c7dded7439699b538c59081c596af1461b0eb471bdf40999370ec3fe7545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TLHDOP4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCICvQ1gT8ih0SbZsFFLXWePOcWpBwBtpcqvOjYf%2Fc1L2RAiA1sx1vUa%2FaL8K%2BCo1tcVK29cSdD3gHTCRn8zyIe%2F0UYSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMnfmDjzHxHxXLGx0OKtwDE8nPAl5jao%2FL%2Fk0HiPfhAZFCYLx2jfGtNVupPtX%2BHmMWwNhovRUl16%2FEHAnfLWXZA1NzpCcX2kZ7gkJivg%2FtT8ZU%2FRTIhpH6V%2FJQ9AJDAXvX1rtjPO5KWth%2BEdBxP3h4wd7b4MOnHotjoBlIeR6utN%2B%2BNjfDZOzJYX42nLBpCOwoVJiqfe7lSz53QcvagVOLSJSFiN7cIFaBY1Q2aqmaZqVUt7TP%2Bq5bADt6voWA4WNvwYg4YKqoVefHnmn4ALRKsDH6hdGMgf4n6VA%2BVO4m5fJ5D2Jt038%2FXDlQc1F3Y7BorgoJNsK3138k48IAtNRzHdUyIw55v0yi1uv5CGKrk%2FFpEtl7ffqVVbRpwOYtxcDPBNMT%2FuEZzsKvdxBpwkQE7VNNoJL%2FsDMvFeE6Ga0W8dmSM1O%2BKd9BLTXJZLK9gpKKDJ1VNZXZAj5ZU7kGcd%2FQ7NReAcetvm4yR74N4NhmA%2BoZIAx%2BEjNnfdFhunIgsE9kiUBqgYEKpE0c3n%2BmuNJMiY5ie6%2BPjWrVUjctLWZPqd1XhvGa1mMcDHKEk2e%2BTq4WpSSQB9A3lqLET8cQKUzFBBtTADm1XSRta9EgqDyvJUWg5IAofZfH1YrfwHOlCWZwVvp%2BiqO5iivZ080wr7aIxAY6pgHeR6hqnKsh4WCw6%2B0mtFz5O%2BFdm3OCR1RlSnVllMYzLI1bplbH%2BpUSfm2R%2B%2BH3BlYTzTsBd%2FtDBbT0LS8qFrmiSvcPpG3HatxiR%2FIYR6LGEu8bhg1j6%2FQnL0renAsXDfFYJwYJ08JFkfM415xFwDBOmkkT7o2Nc6Ox2UaCyy5mEZSZs4P0oTOej%2BhZPQWUJ5myBWB%2Byh3YhlIDk5y6rW7%2F4Ru5UroD&X-Amz-Signature=ec89eb0472bae97b13385578570607652c535758bc32a3d9c6965fa5c5f08dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I443HTF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCa9scRVsUU7snQdiEh9cgpS3lyuOmAhq4qPPcxc880TwIgfSvLd%2BK2D4ZE124bgyzuNr7ElUbqckmXO84RKiHLFzoqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEsXbM93%2ByiuIqtWSrcAwMrSgXHsPok46x%2BSm62ATUqZoIhOsRzhVLxUnDPgZDN31u4huyrsx6DOLj61fx0dpMMprfmGtwD1wTpCdWNFt4zPhm2OGyZ7deu5Je%2Bc3pH8omhI2caw%2FtMMkNNEe5v%2FAi5sjuMXVeoNhjMiHN7eHiqtKxGtVJvEexDrpsYbeNxSlq7Qqx1F0shQ1sCD1eRy3VKR6IYA1zH6nDlncGh98F6QWrfGfSYFIX2PUKiqlYUZNP0vL7fyGNkTCDd5VkF3JnKhTmyt2FwwbSRnnmrv9IBjLrbJR5b85IsJZQSzcH6fDBs7RP3BSxF%2FWfoh3YFWE7sCZh8Lh77O4NWW%2FJ5s8DfSmrBK1r6uNkK2t5tsGkm4pja15yvmxwrFcrfRdg7eBBcnT5xYqs0g8Q6I%2BUTJl7AVON0vAc0sgE%2FVLtdWY5UxBZtkVphUqN0jl45iTw0PkG%2FGZHjUtkW28iNXJ7sVTxr1nomjwuADt%2FOYBYObilnVR2ZutyPH0JuMcJV3Cdpf8P%2B6Sq%2Fpe4niZFyHKw9Vq9QszBR0jTammd%2Fg2LNrKbDo%2FOEzEXEyBvNacR4xWd5RDT%2BG%2BCY6U6hI5DPnBYc%2FhUHIDkYeCDiMIUAFpjzLzanb72VP%2BQBmsoBle0KMISvmMMGOqUBkpYfqPdVz9yx0DD0AG%2Bo%2BzrCYrwn260dAwZ0bc29gQl81WyjdV79GMfLwqWe89Ao7U%2FyyUzMxBzi3DA1Efo6xwlRj4ewhLLD9idlupRkyl1gX3XFi7CYMMH1xrmq4U%2FMSiiYIGBf4rE8vVLv1rUiIWQqrMLUvFjEM0pXFtSGrtqQ4oLVwWaEzozj2YLmu5JjDOmSK42C2CDDs6mo9gSq9cvueMdf&X-Amz-Signature=8d138a1214dc103a5e4a95be6cc40e8dd06fef54b386d05bdea24f5d6ecd9fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA3HDJBQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIDpagL4ASrhZABThM2RePwiMEEGrPA7EJRBi1EGz3IcpAiBjc%2BM%2FZTOVNnfvrpMCRzEaAy3sKMTBKAirAE%2BbU2bY9yqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGRCUl6vO7uKJKLAXKtwD9py7i4OcSuXebGy19VDLPLXSvqTW7aQ8fh2HzbubK1%2B8Nt6ZyY7Trmj%2Bsi0S3wAKi%2BN88mH8DO1NSyiIxtSQHpsDIo9OMp55n%2B3E8Z1K54ECwvgyGupYb1%2F4TyZIMNiqbqI8ju8%2B%2FUjYX0U4Bz2D6BLX6Q5BwG%2BGBIdp3TPfk6Y%2Fy4BddJWYzqNgRH6%2FW22M1B0XxqKGaKCwdq7G1C6uEEJiPDbOByuIMNSXtqFbIltKYwa%2FgqN%2B9Zao8E9LQJeZVWjkNqEcIcbp%2Fg0%2FaLtW%2FvScS1pfYCe9ssqZndubrCrtc5InaUcIXRfJExoa%2B%2B7muBsZxclKJ2AKNLLtJHek%2BZMlAcdeMvFHrSLJN5cHb4%2Bqfx7yv2Ak%2FZAdF5M7zC3er9IJla8Aww59g81%2FZ6eXDlB53HMo8F6cUYXBxTgXXTp%2Fw4Av6dOtXLZQ9tqv86SPBCyq6cnzrLBySc1vqtre7BiWfTCTzdLM99P5YGrC%2B6Tx2nL9GNrHW4wCQ4XTrsx3%2BcsmNyrJObqa7Zv6ACWz4U9udgMlCC66vTve1S%2Bj2JXsIssM9OWo4a%2FW4rTi%2B4I5cvPRwDH%2BJ5BHQNyqg2y5BKn2zex6fLOVxIDb7kdSbFTzGRvmnkHNQgN%2FsKIw866YwwY6pgF5OTZJLxGCUsnNmgNX0zF%2B8YXuKDJUrhb8WPW%2FxIagJdNjaE7xRwAyYLZG4qX2QQAJvD4dDZp7R5jC1jipRc367gUHBMJMo5qxfEZWIHQswYESOSH9Ll0DgM0HDRZgqhMR5n24SK2jG5I8MGPnnVbXid3s9r7jnun7CUQeVjGBLoCiwzzqbHL8ZZSz%2FDpPjbQoPd5p%2FQXbPaHhq8bj%2BNdE%2Bxwfjx0L&X-Amz-Signature=dfe25894def61e1f5297ce1d1139523c812967c5bf7980a7b257d813f2d1b9d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA3HDJBQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIDpagL4ASrhZABThM2RePwiMEEGrPA7EJRBi1EGz3IcpAiBjc%2BM%2FZTOVNnfvrpMCRzEaAy3sKMTBKAirAE%2BbU2bY9yqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGRCUl6vO7uKJKLAXKtwD9py7i4OcSuXebGy19VDLPLXSvqTW7aQ8fh2HzbubK1%2B8Nt6ZyY7Trmj%2Bsi0S3wAKi%2BN88mH8DO1NSyiIxtSQHpsDIo9OMp55n%2B3E8Z1K54ECwvgyGupYb1%2F4TyZIMNiqbqI8ju8%2B%2FUjYX0U4Bz2D6BLX6Q5BwG%2BGBIdp3TPfk6Y%2Fy4BddJWYzqNgRH6%2FW22M1B0XxqKGaKCwdq7G1C6uEEJiPDbOByuIMNSXtqFbIltKYwa%2FgqN%2B9Zao8E9LQJeZVWjkNqEcIcbp%2Fg0%2FaLtW%2FvScS1pfYCe9ssqZndubrCrtc5InaUcIXRfJExoa%2B%2B7muBsZxclKJ2AKNLLtJHek%2BZMlAcdeMvFHrSLJN5cHb4%2Bqfx7yv2Ak%2FZAdF5M7zC3er9IJla8Aww59g81%2FZ6eXDlB53HMo8F6cUYXBxTgXXTp%2Fw4Av6dOtXLZQ9tqv86SPBCyq6cnzrLBySc1vqtre7BiWfTCTzdLM99P5YGrC%2B6Tx2nL9GNrHW4wCQ4XTrsx3%2BcsmNyrJObqa7Zv6ACWz4U9udgMlCC66vTve1S%2Bj2JXsIssM9OWo4a%2FW4rTi%2B4I5cvPRwDH%2BJ5BHQNyqg2y5BKn2zex6fLOVxIDb7kdSbFTzGRvmnkHNQgN%2FsKIw866YwwY6pgF5OTZJLxGCUsnNmgNX0zF%2B8YXuKDJUrhb8WPW%2FxIagJdNjaE7xRwAyYLZG4qX2QQAJvD4dDZp7R5jC1jipRc367gUHBMJMo5qxfEZWIHQswYESOSH9Ll0DgM0HDRZgqhMR5n24SK2jG5I8MGPnnVbXid3s9r7jnun7CUQeVjGBLoCiwzzqbHL8ZZSz%2FDpPjbQoPd5p%2FQXbPaHhq8bj%2BNdE%2Bxwfjx0L&X-Amz-Signature=628383cc06953a8e77094daff7ae41f8bf9a6c4fced2f71b5e5dfb1a6c154f81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA3HDJBQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIDpagL4ASrhZABThM2RePwiMEEGrPA7EJRBi1EGz3IcpAiBjc%2BM%2FZTOVNnfvrpMCRzEaAy3sKMTBKAirAE%2BbU2bY9yqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGRCUl6vO7uKJKLAXKtwD9py7i4OcSuXebGy19VDLPLXSvqTW7aQ8fh2HzbubK1%2B8Nt6ZyY7Trmj%2Bsi0S3wAKi%2BN88mH8DO1NSyiIxtSQHpsDIo9OMp55n%2B3E8Z1K54ECwvgyGupYb1%2F4TyZIMNiqbqI8ju8%2B%2FUjYX0U4Bz2D6BLX6Q5BwG%2BGBIdp3TPfk6Y%2Fy4BddJWYzqNgRH6%2FW22M1B0XxqKGaKCwdq7G1C6uEEJiPDbOByuIMNSXtqFbIltKYwa%2FgqN%2B9Zao8E9LQJeZVWjkNqEcIcbp%2Fg0%2FaLtW%2FvScS1pfYCe9ssqZndubrCrtc5InaUcIXRfJExoa%2B%2B7muBsZxclKJ2AKNLLtJHek%2BZMlAcdeMvFHrSLJN5cHb4%2Bqfx7yv2Ak%2FZAdF5M7zC3er9IJla8Aww59g81%2FZ6eXDlB53HMo8F6cUYXBxTgXXTp%2Fw4Av6dOtXLZQ9tqv86SPBCyq6cnzrLBySc1vqtre7BiWfTCTzdLM99P5YGrC%2B6Tx2nL9GNrHW4wCQ4XTrsx3%2BcsmNyrJObqa7Zv6ACWz4U9udgMlCC66vTve1S%2Bj2JXsIssM9OWo4a%2FW4rTi%2B4I5cvPRwDH%2BJ5BHQNyqg2y5BKn2zex6fLOVxIDb7kdSbFTzGRvmnkHNQgN%2FsKIw866YwwY6pgF5OTZJLxGCUsnNmgNX0zF%2B8YXuKDJUrhb8WPW%2FxIagJdNjaE7xRwAyYLZG4qX2QQAJvD4dDZp7R5jC1jipRc367gUHBMJMo5qxfEZWIHQswYESOSH9Ll0DgM0HDRZgqhMR5n24SK2jG5I8MGPnnVbXid3s9r7jnun7CUQeVjGBLoCiwzzqbHL8ZZSz%2FDpPjbQoPd5p%2FQXbPaHhq8bj%2BNdE%2Bxwfjx0L&X-Amz-Signature=c130b5c54722639689cf3ab656d5a05090c92db9e15db499ba87407134432f5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

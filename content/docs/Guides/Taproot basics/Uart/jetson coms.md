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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHADXXJB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDxIkoJe%2Fo5lAwlU3IFYUqQb31no9saoFNsloHpy4UKIQIhAIZD4DKHCbFZPSbHsbvACh2PSH8Jj85sCWpyJsWyF3K9KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh49uT2jrb5JmhpzQq3APpcjfkgrFwcZzAiHQFanAo42pXW%2BU7ghyum4ogXPrOXwK6S22gPqvFdWcJw3TaqvI6eGlJkaLNsJddFggYsp1y2jdFTji%2Bhq8ej84C8VqIIiNJogF%2Br%2FEx6SSBi7S4L1yWShQjYR%2BZGRvKzA5M2H0hrAhOeUjp50%2FkzmFRS%2BMXKpkCi05N9r%2BirmqO5sBnd%2FwlNjag8G7Ur2hhI2WW%2B4kKLxNdFctjBJJ8FeIGqsz7p72tvsZpdssJs0j3NNKlBCEU%2B48F9iW6UViFpSAGiJlm4%2FcVi551Y1bjDOwL7YvfQelzVw4JUDk7nDbltXY0bhaENKNk6flNX3EwHMHUFv0z3PLqRq6bFlvEN%2FWDo4uNaSwQDYeqaY7SCfHuzksRxo0FFe5Cl8GQcMZ7skzP1RVEglyfE7uwzGVhE41osqzCy42vzsRMSSCEa5k8ROn9t7q8F06ORGlPfKHGFjXQ%2BpoilpU6vkyBVMYdXg4x9vPT4R8yDWNjF9ud4s9MqlaxcaDNUxsZe5pi%2B1MhK1iXkhiiLhi5EX6GyWvcinoZcFYMvKt%2FviPTvmuZGh3KcbjshUgJlZ6Wr6tQp6FjkW4kUvlwAL6nX3RQEaJpHFmgHNmf3KqCmqxNm8wn%2BExK9zD3k9fEBjqkAcnTRfX%2BjOPnK%2FOaNVjp%2BysRU6foIHMZR%2BWYL9mwO2FAEurby4P9zxRw0oQDqFKb7BSo5sNAB1FxtdDacspjLSxrZWkVBWt8TmHgzAtigvRUmMqB%2BZ13Yaquamc%2FrcTFYuUpnCjlBFazmm7mzNRHxDJZhGhcarTB7%2FyVEnq1f%2BZhaYUZ%2BeY4G4oLv8DUjUMAcSXspPDVtml%2BOB5Ml7u9E%2FQRGKFe&X-Amz-Signature=70061cc83f143292a8d7136a2331f52ee34eae71556244cc3f5d993c49147057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFNRWJT7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGQknaQsZ4MPIEjxMg9mwrDQg4q%2BHLKxVtBcDvuiS5x7AiB499EMJFpT4rAuXhUtLv2RCGqfz0a6FMS2fuGD1xpxCyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7MDEfbfaIkTaGBXTKtwDGyfHsOrygZlOGSM62BqVnkEvT0bY%2BwForQXzGj4%2Bl4byg1bkzjmgKuOCJsFGzFDbKCoqBgVkU8P0Uui6t0ifmP2%2F3HJtzvzoeZmKfkHLAyCz1rTv6zGqN0WK%2Fw4ZHaOW%2BFrGTBAV3RZ0E3rl3w2MJFu1cU1ZG%2BvAZuyRRQ9dMah%2FbmJof7v2d57s45DbkNojpQZ0pwyv5NsP6lq2aJmc28DK2rDYwUdulZNCZepG8uC%2Ba479SyrFJASspVyQUWfx70VnINUZkLJlTWiD0RCwtiXe1Gkc0Yf0vddcfRUdAAgiLo5HzhfxkoIItGpLzVWyzrvCRtUzdGwo%2BPEyblwLTC326%2BWGQP5Z66mvvvY7ZBhfX0JSa2GtwQh5ahF7eer%2BHVQFaGXVkMVqRJZTXyauHSmlQ3SqfviiBuzEnmjH8%2B%2B4ohHM6XyJezKOkYZjOJ%2B5P%2B3BNy2qw5dbrZq55yS%2BpMDXiwETp2j8hh%2B2HRcDmsFL%2FsYA1LN0o2%2FSbUTzvQLn6eoC70d2TkUjOVGWvSdBEZvcv6UqUz3Etz8vk12BZIsc02UH2VhSpUdwRNR2l0lqnYSdVaiJoAnyKYyiC8iLNCsQFbm%2FjgPvlwEBkdxgickOLD4r096aK31rkLcwq5PXxAY6pgH2RaYpVdPm23YocSdYznEhpDw9gNVtLJLi0QclYzJhAHc9GWThgrYjY0eH1Bz%2FbGzgKVlNtFFMsYigF%2BqCqb8%2BL97NALsxxXpDvYx0Wq0XKIPJDBwd%2F2VA6N%2FONmvMW9Z40tRD60OG5rBUwRrwvyiRwi3UxcNBGOcprYi%2Fd20yUod1ei1FVryqzM4sexK1fffNldKwCrhAP6y7sgYLJokueCMGYGR%2B&X-Amz-Signature=c822b953eb820c5d5e4f8533be8394de0c6d4460d297dc475700e8e97aee543a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFNRWJT7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGQknaQsZ4MPIEjxMg9mwrDQg4q%2BHLKxVtBcDvuiS5x7AiB499EMJFpT4rAuXhUtLv2RCGqfz0a6FMS2fuGD1xpxCyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7MDEfbfaIkTaGBXTKtwDGyfHsOrygZlOGSM62BqVnkEvT0bY%2BwForQXzGj4%2Bl4byg1bkzjmgKuOCJsFGzFDbKCoqBgVkU8P0Uui6t0ifmP2%2F3HJtzvzoeZmKfkHLAyCz1rTv6zGqN0WK%2Fw4ZHaOW%2BFrGTBAV3RZ0E3rl3w2MJFu1cU1ZG%2BvAZuyRRQ9dMah%2FbmJof7v2d57s45DbkNojpQZ0pwyv5NsP6lq2aJmc28DK2rDYwUdulZNCZepG8uC%2Ba479SyrFJASspVyQUWfx70VnINUZkLJlTWiD0RCwtiXe1Gkc0Yf0vddcfRUdAAgiLo5HzhfxkoIItGpLzVWyzrvCRtUzdGwo%2BPEyblwLTC326%2BWGQP5Z66mvvvY7ZBhfX0JSa2GtwQh5ahF7eer%2BHVQFaGXVkMVqRJZTXyauHSmlQ3SqfviiBuzEnmjH8%2B%2B4ohHM6XyJezKOkYZjOJ%2B5P%2B3BNy2qw5dbrZq55yS%2BpMDXiwETp2j8hh%2B2HRcDmsFL%2FsYA1LN0o2%2FSbUTzvQLn6eoC70d2TkUjOVGWvSdBEZvcv6UqUz3Etz8vk12BZIsc02UH2VhSpUdwRNR2l0lqnYSdVaiJoAnyKYyiC8iLNCsQFbm%2FjgPvlwEBkdxgickOLD4r096aK31rkLcwq5PXxAY6pgH2RaYpVdPm23YocSdYznEhpDw9gNVtLJLi0QclYzJhAHc9GWThgrYjY0eH1Bz%2FbGzgKVlNtFFMsYigF%2BqCqb8%2BL97NALsxxXpDvYx0Wq0XKIPJDBwd%2F2VA6N%2FONmvMW9Z40tRD60OG5rBUwRrwvyiRwi3UxcNBGOcprYi%2Fd20yUod1ei1FVryqzM4sexK1fffNldKwCrhAP6y7sgYLJokueCMGYGR%2B&X-Amz-Signature=9bd68ce03cea13bd61b8fe168ce17323252248e91d691ad7cf5ccb4f3c6f1316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFNRWJT7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGQknaQsZ4MPIEjxMg9mwrDQg4q%2BHLKxVtBcDvuiS5x7AiB499EMJFpT4rAuXhUtLv2RCGqfz0a6FMS2fuGD1xpxCyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7MDEfbfaIkTaGBXTKtwDGyfHsOrygZlOGSM62BqVnkEvT0bY%2BwForQXzGj4%2Bl4byg1bkzjmgKuOCJsFGzFDbKCoqBgVkU8P0Uui6t0ifmP2%2F3HJtzvzoeZmKfkHLAyCz1rTv6zGqN0WK%2Fw4ZHaOW%2BFrGTBAV3RZ0E3rl3w2MJFu1cU1ZG%2BvAZuyRRQ9dMah%2FbmJof7v2d57s45DbkNojpQZ0pwyv5NsP6lq2aJmc28DK2rDYwUdulZNCZepG8uC%2Ba479SyrFJASspVyQUWfx70VnINUZkLJlTWiD0RCwtiXe1Gkc0Yf0vddcfRUdAAgiLo5HzhfxkoIItGpLzVWyzrvCRtUzdGwo%2BPEyblwLTC326%2BWGQP5Z66mvvvY7ZBhfX0JSa2GtwQh5ahF7eer%2BHVQFaGXVkMVqRJZTXyauHSmlQ3SqfviiBuzEnmjH8%2B%2B4ohHM6XyJezKOkYZjOJ%2B5P%2B3BNy2qw5dbrZq55yS%2BpMDXiwETp2j8hh%2B2HRcDmsFL%2FsYA1LN0o2%2FSbUTzvQLn6eoC70d2TkUjOVGWvSdBEZvcv6UqUz3Etz8vk12BZIsc02UH2VhSpUdwRNR2l0lqnYSdVaiJoAnyKYyiC8iLNCsQFbm%2FjgPvlwEBkdxgickOLD4r096aK31rkLcwq5PXxAY6pgH2RaYpVdPm23YocSdYznEhpDw9gNVtLJLi0QclYzJhAHc9GWThgrYjY0eH1Bz%2FbGzgKVlNtFFMsYigF%2BqCqb8%2BL97NALsxxXpDvYx0Wq0XKIPJDBwd%2F2VA6N%2FONmvMW9Z40tRD60OG5rBUwRrwvyiRwi3UxcNBGOcprYi%2Fd20yUod1ei1FVryqzM4sexK1fffNldKwCrhAP6y7sgYLJokueCMGYGR%2B&X-Amz-Signature=a29e1c1b5b07996598384b191697841ca2b275599d26e46258089950e0f5cb98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

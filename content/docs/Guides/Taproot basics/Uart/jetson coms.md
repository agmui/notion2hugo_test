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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMD6THRE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDetv9GsmpQ6QOglkNzssusLDWGRrYcRHIS7qA6vPilvgIgGP%2FCFpCAJBEG3nSTQvUEu1HlfVEnCNeaJ6cgFfjmw5IqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLGCxrmHvJfr0LCDSrcA3CCRta4FI44nOUqgVmYHAVPsv9z36EQvq5h4xFD7A1h8an19G2EQ3KAdYXdgnW8%2BOcyPMoEhuwKHaEaKyQy3V%2F4qmWGIMkKQE4gpCKiW6PQuwhyDhRLc6HPsXuQ6UF59UpD8beAkOUc4qxdREondctMIg%2BMCWvv4DF40HdCdo7XpL%2BOYzec%2FDL2LfzbYpYkulmM%2BKGSk8fLspWkQ6Kljl38bhL09kQjICMHVQu20Ysu%2BqavlYc0yBO3a5aFtG0SQAXRQBcl8XmkFwRV77OFuL7Aa5REkTeH1D3b8RRR%2BT5rw5hQTgamDvPg7paw%2FtjgccYLc5gQBGfKbE2%2F%2BsPs%2BE%2B0tlfGXuA3TH0jxg8t98QIz59ErFEJbGQlwa%2BgU8BydEalLRenPHwneTVzFT59Z4r%2Fhg7Ej0kccHp6vFi1geqcQDR9MYdBGU262qJvy97v7AM%2F5Cq5vo9eP2sgwyOZ%2BohiLfNFu0N%2BRm3bV8gFlY3oQLrSz0K%2BvdM8I36iVKBYj6PKgHGeM6oEiFwmJj8laBr3KLILcJwrDkC5yd2sMHzLcLVG9kHmqJkB1%2BZtBhS58wmo8z3XZikNkxVQbv%2F6xbzdnzWYtuAtDkRO8jYz6G2gCiu5xVECb8sGAn20MNDj3MQGOqUBLLHZYaqMCAbz3JEiEBcUsLr2KRGKMW9WEcwqrdpe%2BelZtZ5TU5IKciE8WMLUu1AQxZEIhFeRL3B5yPyHj1pF9%2Fs%2Fgqv0FY1mD1Zl%2Bgdx%2Bkek4NaWuny8NRCtG%2BqH37YYniuv19Lz4RF5jtx24Q4E7HWkJ1MhHnQwYNNmGSFd%2BQjhBas%2FiGJ3Yt5DmjK3Ifb25H6Lkfn%2FbYBU0PfTdU0%2BCu7C%2BFQd&X-Amz-Signature=dfd250d22560c6a1d22e32d2ac7a819516fe17bd2f3d0e4d2c8f232b63e80b32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGRPCL4Q%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkxsZz8FqmV%2BXUuwRz%2FO64PXEkVBlmz8hDr4vVR9fI%2BAiBig4CqdoM%2BfpR5DxFb4tpBkBeJ%2ByvFRh7inb5ShVPc3yqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWY6%2B%2BvyxwyvmOcuiKtwD9FpNbt3JNHLgLHQIZ2Bu%2FgD4ehkSAGuLgXov%2F9z8KWMUTqUS7LB2L880LgeIlUhbJZcMzQ5weOng20CBL4NusRL903HPtu6gnLUYeSIkFMJ8m2Kj4YVqp04BF3XGwyEoQzm%2FmgfvYmf6rRbvh9EywLO9J7EUCURwy5hYyuVW1ueUcAckBQrKRlzNP3YIM9bwjVqsYAL8LXck4wrsvt385CSlkJHvc2AjzI8Z%2B%2BdAiGDWH6XqYSTLZ9BuXKIX6BmOCAnibe6llcWYcxQZLdLcbI5xBwPfZG1Cuoa0T1xdEs6yMXx8G%2BjHCKfGye0HSssTJ8VE3aKGtB0qi4uiBRHX4AsRKEh3wdXfKrW0r5VkhHPQ5xjahq54xN4UK8or6hbwzBpTkSR%2FqARk3qn7zx1ziw3Iuano%2FHgcHaxX9g%2F%2B6SQvHBRNGSEBvySik3gyGBA20IU2h1L1EYVUdg%2Fncp0csO5Nuhl0s36Aqd6pCGu4%2Fct1a4Q6XuAb4XWnuRVtQgJw3JWZDTl3uMCON1PXQDazU42nB2tCtkVhW%2BtY7zAp%2BBhpH%2BisIlwKHFgtqGtn54nvrpL%2BfgFSjTOmboOoyqGz6OkFD8UiyjUUyGhNFM0w5E6R0QwTa6xyOAnNGpowh%2BrcxAY6pgECw0cnQgi8FmMMx4VowJcgN8t7xNhDhmvZ%2BBio8GLfHZrba%2BALnrASIPNwihAI0eX2w48rnFNBeYhzpd7R1xv98wIkyAdiYkUaBZkR49YvMbIDY6oOyaGqpfw8ptNY%2FzqGZvsss5IXAy1PEtVdOtoR1aAWacisXVQu67Wc9P61uKAPs8qk2pfipULIH5Q%2B%2FLVKjX30SwCfUPxqCp5zsZQIohd%2B9IF4&X-Amz-Signature=ab066b0d14dd340b3835dd7b1092681f99e93a89913c6a1c71eaab27c63d86a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGRPCL4Q%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkxsZz8FqmV%2BXUuwRz%2FO64PXEkVBlmz8hDr4vVR9fI%2BAiBig4CqdoM%2BfpR5DxFb4tpBkBeJ%2ByvFRh7inb5ShVPc3yqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWY6%2B%2BvyxwyvmOcuiKtwD9FpNbt3JNHLgLHQIZ2Bu%2FgD4ehkSAGuLgXov%2F9z8KWMUTqUS7LB2L880LgeIlUhbJZcMzQ5weOng20CBL4NusRL903HPtu6gnLUYeSIkFMJ8m2Kj4YVqp04BF3XGwyEoQzm%2FmgfvYmf6rRbvh9EywLO9J7EUCURwy5hYyuVW1ueUcAckBQrKRlzNP3YIM9bwjVqsYAL8LXck4wrsvt385CSlkJHvc2AjzI8Z%2B%2BdAiGDWH6XqYSTLZ9BuXKIX6BmOCAnibe6llcWYcxQZLdLcbI5xBwPfZG1Cuoa0T1xdEs6yMXx8G%2BjHCKfGye0HSssTJ8VE3aKGtB0qi4uiBRHX4AsRKEh3wdXfKrW0r5VkhHPQ5xjahq54xN4UK8or6hbwzBpTkSR%2FqARk3qn7zx1ziw3Iuano%2FHgcHaxX9g%2F%2B6SQvHBRNGSEBvySik3gyGBA20IU2h1L1EYVUdg%2Fncp0csO5Nuhl0s36Aqd6pCGu4%2Fct1a4Q6XuAb4XWnuRVtQgJw3JWZDTl3uMCON1PXQDazU42nB2tCtkVhW%2BtY7zAp%2BBhpH%2BisIlwKHFgtqGtn54nvrpL%2BfgFSjTOmboOoyqGz6OkFD8UiyjUUyGhNFM0w5E6R0QwTa6xyOAnNGpowh%2BrcxAY6pgECw0cnQgi8FmMMx4VowJcgN8t7xNhDhmvZ%2BBio8GLfHZrba%2BALnrASIPNwihAI0eX2w48rnFNBeYhzpd7R1xv98wIkyAdiYkUaBZkR49YvMbIDY6oOyaGqpfw8ptNY%2FzqGZvsss5IXAy1PEtVdOtoR1aAWacisXVQu67Wc9P61uKAPs8qk2pfipULIH5Q%2B%2FLVKjX30SwCfUPxqCp5zsZQIohd%2B9IF4&X-Amz-Signature=a46ef8820eee058d73e66dee3d2918d39a987441eb0eccc9346d76366c1f95b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGRPCL4Q%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkxsZz8FqmV%2BXUuwRz%2FO64PXEkVBlmz8hDr4vVR9fI%2BAiBig4CqdoM%2BfpR5DxFb4tpBkBeJ%2ByvFRh7inb5ShVPc3yqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWY6%2B%2BvyxwyvmOcuiKtwD9FpNbt3JNHLgLHQIZ2Bu%2FgD4ehkSAGuLgXov%2F9z8KWMUTqUS7LB2L880LgeIlUhbJZcMzQ5weOng20CBL4NusRL903HPtu6gnLUYeSIkFMJ8m2Kj4YVqp04BF3XGwyEoQzm%2FmgfvYmf6rRbvh9EywLO9J7EUCURwy5hYyuVW1ueUcAckBQrKRlzNP3YIM9bwjVqsYAL8LXck4wrsvt385CSlkJHvc2AjzI8Z%2B%2BdAiGDWH6XqYSTLZ9BuXKIX6BmOCAnibe6llcWYcxQZLdLcbI5xBwPfZG1Cuoa0T1xdEs6yMXx8G%2BjHCKfGye0HSssTJ8VE3aKGtB0qi4uiBRHX4AsRKEh3wdXfKrW0r5VkhHPQ5xjahq54xN4UK8or6hbwzBpTkSR%2FqARk3qn7zx1ziw3Iuano%2FHgcHaxX9g%2F%2B6SQvHBRNGSEBvySik3gyGBA20IU2h1L1EYVUdg%2Fncp0csO5Nuhl0s36Aqd6pCGu4%2Fct1a4Q6XuAb4XWnuRVtQgJw3JWZDTl3uMCON1PXQDazU42nB2tCtkVhW%2BtY7zAp%2BBhpH%2BisIlwKHFgtqGtn54nvrpL%2BfgFSjTOmboOoyqGz6OkFD8UiyjUUyGhNFM0w5E6R0QwTa6xyOAnNGpowh%2BrcxAY6pgECw0cnQgi8FmMMx4VowJcgN8t7xNhDhmvZ%2BBio8GLfHZrba%2BALnrASIPNwihAI0eX2w48rnFNBeYhzpd7R1xv98wIkyAdiYkUaBZkR49YvMbIDY6oOyaGqpfw8ptNY%2FzqGZvsss5IXAy1PEtVdOtoR1aAWacisXVQu67Wc9P61uKAPs8qk2pfipULIH5Q%2B%2FLVKjX30SwCfUPxqCp5zsZQIohd%2B9IF4&X-Amz-Signature=ea00d24b5faf1cd2aa1650a9f8aaeb6e7bd4482026bbffacbd03bd6681aede5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

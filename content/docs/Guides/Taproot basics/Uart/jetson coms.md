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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVD7PMH2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCLcQYGU95fXdwDn%2FyC6XRrsPh8a7Gm3oeMNo3tb3eYAiAM4x4YLeDwBP7QsXmpSozDXkF8bLg4GQXc7xdaDXPqSyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FG%2FnjEuNITwGAWctKtwDxP8YgoCIT8jE4ooZLiPU3wy5pB1SV3SNp%2BLbFdK5ENGMuKaseG5A39ARdAozCOLpOCYQDZd%2F739BbWCc813rBzlOVxcsLSHyvr5M5ENL0fn7eOBMhmF6nAy8viS21ahP%2BO7prV73tuwDP1SGXImST8BIgzrvFHPz%2BPaYkszknsY6gFr8M85vJwX2ABOMKdzwvPECoNKQ52ic3ezivuehGVqcsFM5zjUwbC1Ecf%2BpULdR5SyohIZsUcBIAoYsQeXQL8aCzPZxB%2BPIQGTeYizpZIXIW5DLe38pXjSg%2FTYSaLr2SaTevSNj0mZCDFNMOmtMqpE7C8GOaYjeiN4R4ZKwF2UagyOgEUJOsaRx5BlZ5pmfeW4sGPGdcXI1WcRWhfZC5w3ornlyIypP3sf1FGb%2FrdYEAJADZ5pibCODbqv%2F3p5YKw561UzVfbWm%2BI83lcHyOgU6vxNfkq8%2FyW9F%2F1BDnfA1RSu6fNk%2BEqHKAqBKmdMj1YacpaS2PMeKzAnJlFaPGvXSGWuI2tKrqVsnT%2BoBG9yg0cWTpdWuks4iCTBhtTh2Oc%2BbkLHxDYLySQU5bD2ishHQT7hFg2Ep0njr9CQvLbBpJFgJe8Hwpl1ibHq97Os9%2FpjGbeHGoZslZ2Yw%2F%2FXvwwY6pgHUDWEmPBgb9%2BTf%2BkT%2BLh3E8CvDET6wPIcZ95pIZSUeOsw3DfR2sKhGySVaomWso1465MERdanmtspXTScTzBmGsDU8m%2Fzg%2F7oGZPirSIuv6yqDbfMSVQhzQoSYq16LCUCleLf8nlAcHOjJ8A7ikVxrcAf7tMY9epoxmacZA%2BSH9t2RdzWTLj2J5u%2BNu5CTUOHMth%2BjZ058FRqDBiuy%2FAqDbwKXzLy1&X-Amz-Signature=b3c6dd9284c8b02c0a4d2d8080fbebcee3185faca70d8f12f4e9dd2a7aad5b56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZN523GD%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDdCAcumRvzqtss6q%2BzUmFhOAnE5R2xCwrZeOJS10UiwIhAI5al26n4mP%2FJri8ziDLH8ZrBmcQ%2F3q8FuXLpEFDnaP%2FKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0Yn6uvWy67V2n7t0q3APik5onZPs84t%2FaULhfMc8S0rArDLo3rwFoWQvwV5AnOm%2FaTR8aWr%2BTTHiioHJXQ%2FIYzvBpfV33CgLcC8T5yeXn7kmHy63ffHfS3mE69t9TAI5RsH%2B8%2BKJDDGEt3DcGqvC8wmXXeMMC3fmjmIMEZQP0Eyd5Sk1kMA%2BoC0FIVJuUMSjneJRDXA0Befr8qeFzFOSXqhg9tLMXQjUjQp6ImJ8NA8Z6A%2FUP2aJs%2FU27ak80EddwpsIEWTHg8ma%2B0ecs4%2BZY3Iln7ycWu2uJz130cDzXF4B2Fssp6rMSMztUBU8j9oiJuV7rNWCpG8oTKkbhzzEkOjm%2F4I0sYxtSW7a8E7AdUsAhOwahxmL3WZCYpX0RVQjGXJy0jwr4vyj0G93QWfZQw0h7LxciDbd9aZJBYp4kvH%2BUw%2BdypP0SSq8f5qUEYEeABq10sn1RAJ%2F57CWystsHKyXQ9uyjk%2FN5t5qF4dCj%2BkW325d9KnNF2QloW%2B%2BhWlZ39GBPD2CJE6lq4stVhhyzOEX8b7EBvOd2%2Bq%2Bd2JiTglNWPItp%2Fb9sHwkxR79xq2BvRKpV76GqdWC49oAN2ysX%2F3ov1DqQFdNJMnCQKC%2Bebazdl1B3V%2FHnmjZwvrzcp4xGesyxB8hsWOdYwzDO9e%2FDBjqkAXp0VUxVoKB7DBi1XMwmbKHRi5LS1MdxqXO5eS6VUgkL5NrCYOAdiMwouH9izM0mwdyPNlEEL9cPEcL3%2FKxLqimMROvJUvUtwmZVy3XZ2H%2BEptS%2BG%2BitLMmqUeTxvs4eh9pQzkctxxGX3hitsapEqGAXyeE%2B%2FL1xqF3Mjy0iYZ%2B7sXv0DYMLLtx2w7%2B3bxhYj81Uj1Lry1oQogLMWPJaG%2BHgAnRs&X-Amz-Signature=7e51651421150d4d65a336ef3348f4a3e7889757ee615cb4507b6a45fbafe9d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZN523GD%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDdCAcumRvzqtss6q%2BzUmFhOAnE5R2xCwrZeOJS10UiwIhAI5al26n4mP%2FJri8ziDLH8ZrBmcQ%2F3q8FuXLpEFDnaP%2FKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0Yn6uvWy67V2n7t0q3APik5onZPs84t%2FaULhfMc8S0rArDLo3rwFoWQvwV5AnOm%2FaTR8aWr%2BTTHiioHJXQ%2FIYzvBpfV33CgLcC8T5yeXn7kmHy63ffHfS3mE69t9TAI5RsH%2B8%2BKJDDGEt3DcGqvC8wmXXeMMC3fmjmIMEZQP0Eyd5Sk1kMA%2BoC0FIVJuUMSjneJRDXA0Befr8qeFzFOSXqhg9tLMXQjUjQp6ImJ8NA8Z6A%2FUP2aJs%2FU27ak80EddwpsIEWTHg8ma%2B0ecs4%2BZY3Iln7ycWu2uJz130cDzXF4B2Fssp6rMSMztUBU8j9oiJuV7rNWCpG8oTKkbhzzEkOjm%2F4I0sYxtSW7a8E7AdUsAhOwahxmL3WZCYpX0RVQjGXJy0jwr4vyj0G93QWfZQw0h7LxciDbd9aZJBYp4kvH%2BUw%2BdypP0SSq8f5qUEYEeABq10sn1RAJ%2F57CWystsHKyXQ9uyjk%2FN5t5qF4dCj%2BkW325d9KnNF2QloW%2B%2BhWlZ39GBPD2CJE6lq4stVhhyzOEX8b7EBvOd2%2Bq%2Bd2JiTglNWPItp%2Fb9sHwkxR79xq2BvRKpV76GqdWC49oAN2ysX%2F3ov1DqQFdNJMnCQKC%2Bebazdl1B3V%2FHnmjZwvrzcp4xGesyxB8hsWOdYwzDO9e%2FDBjqkAXp0VUxVoKB7DBi1XMwmbKHRi5LS1MdxqXO5eS6VUgkL5NrCYOAdiMwouH9izM0mwdyPNlEEL9cPEcL3%2FKxLqimMROvJUvUtwmZVy3XZ2H%2BEptS%2BG%2BitLMmqUeTxvs4eh9pQzkctxxGX3hitsapEqGAXyeE%2B%2FL1xqF3Mjy0iYZ%2B7sXv0DYMLLtx2w7%2B3bxhYj81Uj1Lry1oQogLMWPJaG%2BHgAnRs&X-Amz-Signature=64c547102d076d608f6eacc5f2b8f278c775301b2c39d81834a5b4a285ac2805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZN523GD%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDdCAcumRvzqtss6q%2BzUmFhOAnE5R2xCwrZeOJS10UiwIhAI5al26n4mP%2FJri8ziDLH8ZrBmcQ%2F3q8FuXLpEFDnaP%2FKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0Yn6uvWy67V2n7t0q3APik5onZPs84t%2FaULhfMc8S0rArDLo3rwFoWQvwV5AnOm%2FaTR8aWr%2BTTHiioHJXQ%2FIYzvBpfV33CgLcC8T5yeXn7kmHy63ffHfS3mE69t9TAI5RsH%2B8%2BKJDDGEt3DcGqvC8wmXXeMMC3fmjmIMEZQP0Eyd5Sk1kMA%2BoC0FIVJuUMSjneJRDXA0Befr8qeFzFOSXqhg9tLMXQjUjQp6ImJ8NA8Z6A%2FUP2aJs%2FU27ak80EddwpsIEWTHg8ma%2B0ecs4%2BZY3Iln7ycWu2uJz130cDzXF4B2Fssp6rMSMztUBU8j9oiJuV7rNWCpG8oTKkbhzzEkOjm%2F4I0sYxtSW7a8E7AdUsAhOwahxmL3WZCYpX0RVQjGXJy0jwr4vyj0G93QWfZQw0h7LxciDbd9aZJBYp4kvH%2BUw%2BdypP0SSq8f5qUEYEeABq10sn1RAJ%2F57CWystsHKyXQ9uyjk%2FN5t5qF4dCj%2BkW325d9KnNF2QloW%2B%2BhWlZ39GBPD2CJE6lq4stVhhyzOEX8b7EBvOd2%2Bq%2Bd2JiTglNWPItp%2Fb9sHwkxR79xq2BvRKpV76GqdWC49oAN2ysX%2F3ov1DqQFdNJMnCQKC%2Bebazdl1B3V%2FHnmjZwvrzcp4xGesyxB8hsWOdYwzDO9e%2FDBjqkAXp0VUxVoKB7DBi1XMwmbKHRi5LS1MdxqXO5eS6VUgkL5NrCYOAdiMwouH9izM0mwdyPNlEEL9cPEcL3%2FKxLqimMROvJUvUtwmZVy3XZ2H%2BEptS%2BG%2BitLMmqUeTxvs4eh9pQzkctxxGX3hitsapEqGAXyeE%2B%2FL1xqF3Mjy0iYZ%2B7sXv0DYMLLtx2w7%2B3bxhYj81Uj1Lry1oQogLMWPJaG%2BHgAnRs&X-Amz-Signature=84e0c446df0aea99510891e15397307fdce8ce85f54ddb0d03b5b59895de56d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

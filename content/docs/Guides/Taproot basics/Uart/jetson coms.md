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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSUE3KTM%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYc1Dp7Z4Lkj0Ec1Z6%2FPV%2FQwAHLcpRUwjtNxj8FakBaAiBmgW%2FrJPhehTZQZZbevUMinLZ25kkjH1jeM8zVF8wS%2FSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBm8raKMvzYYvYkunKtwDlMVApqokU8HXfGuAqk1%2B59PfadAUWJvtDsM0qqtB22K2wCjjkUclRilSM%2FjIAT2jwzOiRV2F%2FXIR12Dl3C4LKrI%2F6NZyJ9p4rdmNxeE8swCMqJ3wCI%2FgTM%2FM4NQd6gZch%2FXXUIwLcXVda1RhkZNtwmj%2FklaXpZTk1oUL6s7mYV%2BGS52tBUK02cY6eG%2FFU1QtPMpnclUTwTbtuoW77XKs4pHADqKreZTalLpE4VK2kJqsJpTebOkUOMs6wfhkAREBezNJXBrNycrKrmPt3JYjPxbyMwIhmxz1mGGLXNtPu%2B5ZC%2FUQ%2B%2FKa1eNFuLNJsRkAa%2B91Ec95hH41Hi0Z7%2BCTekajP8qyMGetAyy%2FDfp69iXC%2BuLviC2yKh6VGR6rSfuLiSgBXfBIqCuK9IOs63LDYTr5ZejQrZ%2FQPFdsjk7oIMxxqOjqucNrp88SSuhOL%2BDxmwxH8MKsqa%2BWXX1CPL8V7%2B2ENfe0ovlMDlm0nQzZHeTqieHSAsAk1TmJJLDLCAL6n7aHaCnH5ZeEZ12NSEoeU4D5yAqZ3FCj3sSNsVSxkSSAsXT63KbJ6Z2CUIybZXN0D3SUvvXbsJ4KbB5w95k1W1Q12%2FnqYVhO4gvubZzttLlIpFtVE9tO9eWDOdIwub3ywwY6pgG%2B2EXFfTbNLoHHywBn3qusNywTO37D5sz%2BA3A1SGz6La0KZXN%2BdbPEZGF%2BYohkUE7d9GZS7AFuJRnSvMMorp9jXPvrVj5%2BpYCdqugGVTRPk8NGth%2Fnh3qxyVc1dtf3Z73CBndDaqJkgSw0ddZZcYsuDECxqFyBIJ%2BFjL9DyOkwztSU00LkCTfnoaMFdEoPZ%2By%2Flab%2FfjNlLp8AK4TDmxH%2FOqGnwNyF&X-Amz-Signature=e66e5e6092be5d590a23fc9e0d8d5e44aed7654836987240582a3bbabc3b02c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L5JPAIW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkwCnzpM%2F4d73kgwkMSSvPY80IOLv6oK0b6tf7ryeMHgIhAPTm1FPacw7noHk9pEWTpsWRNFwY4aXMSAWek1Ki3Gd0KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzs%2BpeIyAD%2FikbMYEEq3AOvZqwX%2FnZh1kyo20iSB2S2rIczKLjMzAsLUEemeFSZobK%2BkL8Z%2FWLGf8Pn%2Bn5fJRiTEf4QROt82JadKqpu198mc1LtghKr4i8laCLECTZiSxkmJNG3j4gu38hQC%2BHkqw18ujyQbeUdoXZFEP5M14GuVybCu3oojVM2e%2FXmYuNDTMlJf78tJYMYUJRjkBbCPpWFKqQsg722l5Jbbds%2FZ0ld1crgLmF%2Fb8ajeNFzHHYsuocpIlX5H%2F%2BkzrP9n4v6bihHjl1lvIsSfZLlm5S40Wbsvtlx4xZuNKI%2BUFbOOadtX1W8%2BW12I%2FoOoaGvSBkS85r%2Bh3dzkPOU5Lxs3JU3MUD1m%2B8X%2BgWeVlgobaAfSugtkrrfMum8uBhnlvPfSNfGgQxpUmPm6JEPhyE4UA9rC1l8WWvyMCclf6TOYRMxBocx%2BcWoEkyWR1nCtJpihqzW%2BJbkmu8XD01XM%2FjeKXi0%2FzY4g2myZewWzhJgAzsULCFcbtb24Hp2ZXwY9t9F6zAwzAYIOl%2BLZWuaqQ86GJW%2BxJVOiIjYq9vYy2FfeTXhCmpMRdOEV8BdHpsUDJU8NwvHxlGPcFm7bUYdRvRbVlcpMnur5D55ikNu7%2BNbIwxl5XjyeWluKECgvD5VEAaK4DDSs%2FLDBjqkAVzYa0lfqVPxOE5r%2BsnSl0Kwi41cK%2F4M2K0IE7iXecDwd8JeKhKuALT3y1S%2Bt4RHahJUgMJr7%2BiZ%2B2lw29V%2B%2BawdC7yCFjAjAd5%2FB1KrZI6rQk5Pktv5196bz2LRA9d%2B3AlCUo%2BJ55wVE1bnOvOZ%2B4v41EaJpM%2FztZ4lx6aRr8D1fRT%2FWZJoSpC31pMYOzijWw6RGamlKq%2Fx%2BcuSfjucaMqj%2F8BN&X-Amz-Signature=9c62971445fbe138e72a03502b4b193bfec6f43c7554975ead732e77e2fd0c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L5JPAIW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkwCnzpM%2F4d73kgwkMSSvPY80IOLv6oK0b6tf7ryeMHgIhAPTm1FPacw7noHk9pEWTpsWRNFwY4aXMSAWek1Ki3Gd0KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzs%2BpeIyAD%2FikbMYEEq3AOvZqwX%2FnZh1kyo20iSB2S2rIczKLjMzAsLUEemeFSZobK%2BkL8Z%2FWLGf8Pn%2Bn5fJRiTEf4QROt82JadKqpu198mc1LtghKr4i8laCLECTZiSxkmJNG3j4gu38hQC%2BHkqw18ujyQbeUdoXZFEP5M14GuVybCu3oojVM2e%2FXmYuNDTMlJf78tJYMYUJRjkBbCPpWFKqQsg722l5Jbbds%2FZ0ld1crgLmF%2Fb8ajeNFzHHYsuocpIlX5H%2F%2BkzrP9n4v6bihHjl1lvIsSfZLlm5S40Wbsvtlx4xZuNKI%2BUFbOOadtX1W8%2BW12I%2FoOoaGvSBkS85r%2Bh3dzkPOU5Lxs3JU3MUD1m%2B8X%2BgWeVlgobaAfSugtkrrfMum8uBhnlvPfSNfGgQxpUmPm6JEPhyE4UA9rC1l8WWvyMCclf6TOYRMxBocx%2BcWoEkyWR1nCtJpihqzW%2BJbkmu8XD01XM%2FjeKXi0%2FzY4g2myZewWzhJgAzsULCFcbtb24Hp2ZXwY9t9F6zAwzAYIOl%2BLZWuaqQ86GJW%2BxJVOiIjYq9vYy2FfeTXhCmpMRdOEV8BdHpsUDJU8NwvHxlGPcFm7bUYdRvRbVlcpMnur5D55ikNu7%2BNbIwxl5XjyeWluKECgvD5VEAaK4DDSs%2FLDBjqkAVzYa0lfqVPxOE5r%2BsnSl0Kwi41cK%2F4M2K0IE7iXecDwd8JeKhKuALT3y1S%2Bt4RHahJUgMJr7%2BiZ%2B2lw29V%2B%2BawdC7yCFjAjAd5%2FB1KrZI6rQk5Pktv5196bz2LRA9d%2B3AlCUo%2BJ55wVE1bnOvOZ%2B4v41EaJpM%2FztZ4lx6aRr8D1fRT%2FWZJoSpC31pMYOzijWw6RGamlKq%2Fx%2BcuSfjucaMqj%2F8BN&X-Amz-Signature=54f2dcd82c8dcba9e265eaf1815bb1ba1c5ab5964a3e5fd72ecc0ce4943952a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L5JPAIW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkwCnzpM%2F4d73kgwkMSSvPY80IOLv6oK0b6tf7ryeMHgIhAPTm1FPacw7noHk9pEWTpsWRNFwY4aXMSAWek1Ki3Gd0KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzs%2BpeIyAD%2FikbMYEEq3AOvZqwX%2FnZh1kyo20iSB2S2rIczKLjMzAsLUEemeFSZobK%2BkL8Z%2FWLGf8Pn%2Bn5fJRiTEf4QROt82JadKqpu198mc1LtghKr4i8laCLECTZiSxkmJNG3j4gu38hQC%2BHkqw18ujyQbeUdoXZFEP5M14GuVybCu3oojVM2e%2FXmYuNDTMlJf78tJYMYUJRjkBbCPpWFKqQsg722l5Jbbds%2FZ0ld1crgLmF%2Fb8ajeNFzHHYsuocpIlX5H%2F%2BkzrP9n4v6bihHjl1lvIsSfZLlm5S40Wbsvtlx4xZuNKI%2BUFbOOadtX1W8%2BW12I%2FoOoaGvSBkS85r%2Bh3dzkPOU5Lxs3JU3MUD1m%2B8X%2BgWeVlgobaAfSugtkrrfMum8uBhnlvPfSNfGgQxpUmPm6JEPhyE4UA9rC1l8WWvyMCclf6TOYRMxBocx%2BcWoEkyWR1nCtJpihqzW%2BJbkmu8XD01XM%2FjeKXi0%2FzY4g2myZewWzhJgAzsULCFcbtb24Hp2ZXwY9t9F6zAwzAYIOl%2BLZWuaqQ86GJW%2BxJVOiIjYq9vYy2FfeTXhCmpMRdOEV8BdHpsUDJU8NwvHxlGPcFm7bUYdRvRbVlcpMnur5D55ikNu7%2BNbIwxl5XjyeWluKECgvD5VEAaK4DDSs%2FLDBjqkAVzYa0lfqVPxOE5r%2BsnSl0Kwi41cK%2F4M2K0IE7iXecDwd8JeKhKuALT3y1S%2Bt4RHahJUgMJr7%2BiZ%2B2lw29V%2B%2BawdC7yCFjAjAd5%2FB1KrZI6rQk5Pktv5196bz2LRA9d%2B3AlCUo%2BJ55wVE1bnOvOZ%2B4v41EaJpM%2FztZ4lx6aRr8D1fRT%2FWZJoSpC31pMYOzijWw6RGamlKq%2Fx%2BcuSfjucaMqj%2F8BN&X-Amz-Signature=879e7cbf4439699abd1c374bf3144033f7c4472af49cbc40e1ec2c8590f81aa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

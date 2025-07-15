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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SF6TAD3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCy7t5ogDW5VNGaSAb1rm83hEr88vCk2XcIu6cxWKTAkAIgNolX3om328xif2mwOuLxZLPi%2BnfPr9o%2BWtd3hfOaSIMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDK9JXiM8fpgFbAjULircA38vKEll6fFzU04slJDwNt9HwcEhcbv0XuWornTSDK3CsF78Mfh7391LxmgsQmyuNw6az52H4H1LCF1RKouBzFrvSApa7CEOwFODo8p%2FUIxs3AmCpDmXd7k2V6lFZvyixSvklEVt4numB%2Fj%2Fvla6XQkzTzVsk7Gc5b%2BuRr%2B2n7Pu5bJazofekSQdGpsbgq2aCKAPymrX35gZFiv1HCiK4I8Iismq2bS59K5yRRXkTPsU296f9gHVkanupsNH8Anmni43z7gbnm1IbHxm6Rb3SBYBOzblI%2Fw9vsXV0U%2BtUunFJvwk3WxjSohQfI8%2BUe7AJn4Gt47QM4QI6bCs6vjFgy%2F%2BGePh7JfgRhUPowPgPPvULsTib96y5dS6P51VM5Kc3C1ZA8lvn4MQ8qUY6VEWAWTFUmZns7d15SKm73nPLvKOqkSoFoZPvg8ly1NcZJHViP4EoojfeTbj%2Fqm7btdSVq4a0ckFDQKWDe0VvgytHUNCDM3thZhWJO6gmw9%2BIMkiTAOoIbkvk5DL%2BreWsNA9USF4G16QPzCPOSdosHogOjcR9NdapsK1I9vS%2BRrRjp6QyXuiLoF5cOsRDxeacLBrypMFGCD3bib79G%2BjugbtA%2B3JlpFnyqS8YRBIam30MO%2BB2MMGOqUBcHVFQ2mzL32OYHhGYZmgq1rgz8vwpv0wdzncSISAN9t%2BgeHnjcu8MJ%2BMNk6Twp55fhB3Prh7V6QOxPqKl1QuKc1w1T2zTCGtJ3gNHhJbw55HufOYS823KfJttS%2BOvuDXrQIb4Tk3qur4CHkihVjF17lquaVYrg9wagDIwpS%2BZL%2BFL%2FrLKsVH9fJXPs5hMYc2%2BCMAkgDX0pA1iPP%2ByIyr52XilCQx&X-Amz-Signature=43a9b23dbb770bb13e5c1fc911b318174bac74ac8aca8cfc9dd3b356bb4ab174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676DUBKW3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGY3QHIHK1060hfYeoj4aXg6q3rz%2F49wMQqaRHOcwSo7AiA99z%2B4WJDbKSBKLR6Z4n1LdKs4PKt5LfuqZTrAVmTcaCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMWr6F09EKRJ0%2FqKsQKtwDEAo%2Ft23IDYf%2BAX4WP2vm11k%2B8Jxs9r%2BdqwczJbW9daGuvgv8jtDhSUH8aBfqq13HCkwx6a6hmHNwXIOSKPc9%2BSEzby6GsKK%2FXFn8zRdAA9BJM05rD2H14WcpubTr8iqG5UAvT%2FS7377UTMDnQh5G5XIKHiL%2F53dE2nzhg606nrefosUbPZWqkGkI%2FqgMC%2BoJAspBfEn5TPDh2VqwI%2FcibK26u1qVn4%2F436VWEyRN073HnAwJYjSNFqpDmS57ftbPBfYsQoR0HoP6NNO4cm0lLAf8pDfihEda9JazURMIaKYem6gI7%2F%2FfkLTJRCd8J1jM4ZBpru9UqjMr5WirAhYMK0FmBXd9vwBE71iOvGB9fUSkoigDtNIeoLYxoGaUudiZ67tQCs%2BxuwYfrZMj00s%2BFIrchh2lKo824yEM8LW4hIuMflOWxQnuHlZWPjJZ7T6tLJfdpIqTSLzB3ayBgrAI%2BPwR1lzPHuO2OOYH3zIv3qiQl2DMetsYRDtQeIgN1C5GQQF%2Fdv1JMqsMW5urP2BfrOUwoldhpkvtbmRe2vh0qUEgWSlrR8izBSvvq7WBcaoIWi%2F0fvRceExG7gkuuJyrJ%2FViy5HoB1hpTUF3j%2FaAl6gkgev7Y2tA99EUkVcwpIHYwwY6pgGtXo59JwJqdHCsCkF2M%2F3o%2Fawt2D%2FHd9%2BuT9Y9h7EINqtjs67gc9h4GvZ5mr3u9Cr%2FKv6bJuSU7T6740OTTw7wShSYsY%2BcOi%2FpT%2Bi3p4xOSYpbsdzuX39jvyb83Y51EbOy2xHequUaFK8hf0Kro5N4IFD2SCdzaRzMp7Um77eLQZUOk15iSX54H8FiCvvoVJ8rzOEpfkSSZrVOFxpAgC6%2BkM8eOUDh&X-Amz-Signature=4532f52de6b99054908b2a72138dbac12f8597a43c367dc04557b6440e63acc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676DUBKW3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGY3QHIHK1060hfYeoj4aXg6q3rz%2F49wMQqaRHOcwSo7AiA99z%2B4WJDbKSBKLR6Z4n1LdKs4PKt5LfuqZTrAVmTcaCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMWr6F09EKRJ0%2FqKsQKtwDEAo%2Ft23IDYf%2BAX4WP2vm11k%2B8Jxs9r%2BdqwczJbW9daGuvgv8jtDhSUH8aBfqq13HCkwx6a6hmHNwXIOSKPc9%2BSEzby6GsKK%2FXFn8zRdAA9BJM05rD2H14WcpubTr8iqG5UAvT%2FS7377UTMDnQh5G5XIKHiL%2F53dE2nzhg606nrefosUbPZWqkGkI%2FqgMC%2BoJAspBfEn5TPDh2VqwI%2FcibK26u1qVn4%2F436VWEyRN073HnAwJYjSNFqpDmS57ftbPBfYsQoR0HoP6NNO4cm0lLAf8pDfihEda9JazURMIaKYem6gI7%2F%2FfkLTJRCd8J1jM4ZBpru9UqjMr5WirAhYMK0FmBXd9vwBE71iOvGB9fUSkoigDtNIeoLYxoGaUudiZ67tQCs%2BxuwYfrZMj00s%2BFIrchh2lKo824yEM8LW4hIuMflOWxQnuHlZWPjJZ7T6tLJfdpIqTSLzB3ayBgrAI%2BPwR1lzPHuO2OOYH3zIv3qiQl2DMetsYRDtQeIgN1C5GQQF%2Fdv1JMqsMW5urP2BfrOUwoldhpkvtbmRe2vh0qUEgWSlrR8izBSvvq7WBcaoIWi%2F0fvRceExG7gkuuJyrJ%2FViy5HoB1hpTUF3j%2FaAl6gkgev7Y2tA99EUkVcwpIHYwwY6pgGtXo59JwJqdHCsCkF2M%2F3o%2Fawt2D%2FHd9%2BuT9Y9h7EINqtjs67gc9h4GvZ5mr3u9Cr%2FKv6bJuSU7T6740OTTw7wShSYsY%2BcOi%2FpT%2Bi3p4xOSYpbsdzuX39jvyb83Y51EbOy2xHequUaFK8hf0Kro5N4IFD2SCdzaRzMp7Um77eLQZUOk15iSX54H8FiCvvoVJ8rzOEpfkSSZrVOFxpAgC6%2BkM8eOUDh&X-Amz-Signature=29926f3e64f807a0e861d3bc2e424ac1919a5c4748c9f0d2b477307de197b115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676DUBKW3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGY3QHIHK1060hfYeoj4aXg6q3rz%2F49wMQqaRHOcwSo7AiA99z%2B4WJDbKSBKLR6Z4n1LdKs4PKt5LfuqZTrAVmTcaCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMWr6F09EKRJ0%2FqKsQKtwDEAo%2Ft23IDYf%2BAX4WP2vm11k%2B8Jxs9r%2BdqwczJbW9daGuvgv8jtDhSUH8aBfqq13HCkwx6a6hmHNwXIOSKPc9%2BSEzby6GsKK%2FXFn8zRdAA9BJM05rD2H14WcpubTr8iqG5UAvT%2FS7377UTMDnQh5G5XIKHiL%2F53dE2nzhg606nrefosUbPZWqkGkI%2FqgMC%2BoJAspBfEn5TPDh2VqwI%2FcibK26u1qVn4%2F436VWEyRN073HnAwJYjSNFqpDmS57ftbPBfYsQoR0HoP6NNO4cm0lLAf8pDfihEda9JazURMIaKYem6gI7%2F%2FfkLTJRCd8J1jM4ZBpru9UqjMr5WirAhYMK0FmBXd9vwBE71iOvGB9fUSkoigDtNIeoLYxoGaUudiZ67tQCs%2BxuwYfrZMj00s%2BFIrchh2lKo824yEM8LW4hIuMflOWxQnuHlZWPjJZ7T6tLJfdpIqTSLzB3ayBgrAI%2BPwR1lzPHuO2OOYH3zIv3qiQl2DMetsYRDtQeIgN1C5GQQF%2Fdv1JMqsMW5urP2BfrOUwoldhpkvtbmRe2vh0qUEgWSlrR8izBSvvq7WBcaoIWi%2F0fvRceExG7gkuuJyrJ%2FViy5HoB1hpTUF3j%2FaAl6gkgev7Y2tA99EUkVcwpIHYwwY6pgGtXo59JwJqdHCsCkF2M%2F3o%2Fawt2D%2FHd9%2BuT9Y9h7EINqtjs67gc9h4GvZ5mr3u9Cr%2FKv6bJuSU7T6740OTTw7wShSYsY%2BcOi%2FpT%2Bi3p4xOSYpbsdzuX39jvyb83Y51EbOy2xHequUaFK8hf0Kro5N4IFD2SCdzaRzMp7Um77eLQZUOk15iSX54H8FiCvvoVJ8rzOEpfkSSZrVOFxpAgC6%2BkM8eOUDh&X-Amz-Signature=6f6bde512a712243863730c2915e24ee95cbe715a4d5a22aeffd09cd6ff5b47f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

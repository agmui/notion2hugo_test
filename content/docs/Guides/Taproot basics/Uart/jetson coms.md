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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDFXYFTK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNUYJxhNZ2fCHOFCyYw%2BZCESB5ZCAhbP5GsRzSl%2BI1%2BAiB3p0SkXE8uIdsK3T1%2Fijb1r2PT4ydJzD6MfOggDUlKMiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpeMoExCVlUqwNmepKtwDDTm4ilv9OjWwxwliLDaVxnXiuzjhq%2F48eQnmdk18SSFRhYrDE7MbcK7dPvAqrCUxKW9cU47nwjOJ4XJ92TZrcNgXkEgfssWEeiyMALXpw3AE7ZOaIskfv%2BI2eUjCZo53hN2ni%2B45uOmG4Tq59Vc%2Bvq0BFQLEfC8TRGkHXDkpJH8LAg3Z69xI4co9xrdy%2BWq8JaYXFR3f7Opng7gAf0z%2BqgbrKwHHTd%2BAP%2BXZBxsFMh1WwSCB7x6okE3UzBkm0GCH8%2BlRubwY5m8wVSsTU0Vp4RCGe%2F%2Bpn0u06x3piJamq4RQRCTtYRqRn7mxlsmM%2FHXXuIqxNLDV8VIn4XTuehG6D%2BjuzBLgj%2Fgeb5pYlNsww%2BRIQQS0%2FyHuNNfJYOk2bm%2FvPEKCLGXwnlAUwCYO0KFlzUwYY3DnJXhzRnAynE4QRyDSAxJ8K8QSs1X6QQm1yOVKWAoIpuNFy5VdfMgPGW3SkYPzO70dDo7t3ylw7UiM1zLNwxzmFWsSdHDj0qqHlkgX9TuCembs1NO1cTY8ZwrfaOFwGdl753VsqtM5ap2NAndyFASH0XFVLq6shwIAZVgIFlTgFbw8ivucHJOmfWnUoay6SYmMkI5RubmI5D%2BP1oVS0UnPWi7u8NC%2Bk3YwrParxAY6pgFaKT6HUzyIt%2BvNzkwRHPACuZlFSSAJkWry1HfAQY72GkSJNi270Z%2BdnVMksSfT6Y0DcWxOjyfabeNmkN58uC4Y323pVDbs40rHkYiKsLrdyN1wIHClenUoK%2FMVG908EouzgzfDu7P8MMK3kJWB32DGUZ%2B6WZZGR4HszBE%2BxIzUWgGvrQPSxRrkHFAhPWpZOWzBSbhnRc3aMeAKkOr%2F639Itqd6riTB&X-Amz-Signature=1046572af09c14970630ac2f9c1cb0127d6c853b960251bedfc1b146a5f8e837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKOIBTND%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFc9cgi27%2FjMd8ACx0oIRT3oz8IofE28Gxv7nRPtAne2AiEA%2BgeUbTIeRkuTKHh8JedHP6wY3SQldawr7orJjRWKDGEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4EyrE6iO4%2BzBgCCircA4QLQdTRfbI99II1x%2Buo1cfaDkens9hFrSto1Flj6EKj7vJW%2Bi9042aA7XWu6eGaqVll6Bg2eQTXIrcbs7SjLuF75tTWqQOUkqXxBa14BrT31TtrX5TpohjeEfRCELiIKPXwK%2BR0z4x4EqpCIxzjaeLnIfaZ8LU3yw8szzOLlmUZ0ekZWP%2BpNG350QRdocT5LFDoytfUXaK9pBzsKYGW%2BdtX64XCbakI0UY5UWB%2F85JdjQ00aXolh9UKLr24qVE521WOghm%2B1K0WN%2Bqznd2Exk4pZXZVzOjeo37Y2GQuHwPikdJnZos8Y3JyKPCINvZ%2BpmCHcTtOtaumOSL1wwVfrTT2IameTRE%2F%2FPabR%2BBsqp%2FfaAl7lvWFaCx1yAoE33QtyM5dEX%2F118V%2Fpy4BH3a6ekOcyZP4gOMEUBzbzzmAGpwqzY0Mi7yH%2FqdJ1IZfIiBQSY4CAQX6Uy2o%2FVSuHf8wEA08uXiKmZo588x%2FBdHY2xpFHfCcPTMSd2pGT7qqwt%2FO3UsBDjjEO4Dzi3fXeltS%2Bcm286PnjmTbuwOQjha44FHgF6PKD7fU%2F%2Brc%2Fa1ONaITDn1YK4BYFvtl%2Fg7%2BH5p4LkKa1vRPQ12zjwp7xbdEqRxevvwGPjh9gBCAOTAKMOL1q8QGOqUBsZ1fTJ7Y9%2BSW8yO%2FcDmCSU81PK7r1czgQxdeXk3I03jG5UwYdAErgL%2BT4ZvW%2Bmol1uX0QKha%2Fyk%2Bs0qInW82V%2FKPi4Q0J4HZAITV47qzhvQKB4eqXoSTATQdQyJJY%2BY8eh%2F%2FNLRRRklMI2fmxl8S65cJBwKkeN%2BEwDZdgXEVQDItmO%2BqzKQGqhJPv03J3Ijg7kyc7s0ocXD4vP4ehSt19kF1VGQY&X-Amz-Signature=56d95db3493474d48f040bdd8b32cda70ce64a61dc2bec1240ebb15b134c7adf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKOIBTND%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFc9cgi27%2FjMd8ACx0oIRT3oz8IofE28Gxv7nRPtAne2AiEA%2BgeUbTIeRkuTKHh8JedHP6wY3SQldawr7orJjRWKDGEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4EyrE6iO4%2BzBgCCircA4QLQdTRfbI99II1x%2Buo1cfaDkens9hFrSto1Flj6EKj7vJW%2Bi9042aA7XWu6eGaqVll6Bg2eQTXIrcbs7SjLuF75tTWqQOUkqXxBa14BrT31TtrX5TpohjeEfRCELiIKPXwK%2BR0z4x4EqpCIxzjaeLnIfaZ8LU3yw8szzOLlmUZ0ekZWP%2BpNG350QRdocT5LFDoytfUXaK9pBzsKYGW%2BdtX64XCbakI0UY5UWB%2F85JdjQ00aXolh9UKLr24qVE521WOghm%2B1K0WN%2Bqznd2Exk4pZXZVzOjeo37Y2GQuHwPikdJnZos8Y3JyKPCINvZ%2BpmCHcTtOtaumOSL1wwVfrTT2IameTRE%2F%2FPabR%2BBsqp%2FfaAl7lvWFaCx1yAoE33QtyM5dEX%2F118V%2Fpy4BH3a6ekOcyZP4gOMEUBzbzzmAGpwqzY0Mi7yH%2FqdJ1IZfIiBQSY4CAQX6Uy2o%2FVSuHf8wEA08uXiKmZo588x%2FBdHY2xpFHfCcPTMSd2pGT7qqwt%2FO3UsBDjjEO4Dzi3fXeltS%2Bcm286PnjmTbuwOQjha44FHgF6PKD7fU%2F%2Brc%2Fa1ONaITDn1YK4BYFvtl%2Fg7%2BH5p4LkKa1vRPQ12zjwp7xbdEqRxevvwGPjh9gBCAOTAKMOL1q8QGOqUBsZ1fTJ7Y9%2BSW8yO%2FcDmCSU81PK7r1czgQxdeXk3I03jG5UwYdAErgL%2BT4ZvW%2Bmol1uX0QKha%2Fyk%2Bs0qInW82V%2FKPi4Q0J4HZAITV47qzhvQKB4eqXoSTATQdQyJJY%2BY8eh%2F%2FNLRRRklMI2fmxl8S65cJBwKkeN%2BEwDZdgXEVQDItmO%2BqzKQGqhJPv03J3Ijg7kyc7s0ocXD4vP4ehSt19kF1VGQY&X-Amz-Signature=a303bc1bd36881a409cd598eb762aa2c1a642f0077a7a25168d35ebdb7c8f7bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKOIBTND%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFc9cgi27%2FjMd8ACx0oIRT3oz8IofE28Gxv7nRPtAne2AiEA%2BgeUbTIeRkuTKHh8JedHP6wY3SQldawr7orJjRWKDGEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4EyrE6iO4%2BzBgCCircA4QLQdTRfbI99II1x%2Buo1cfaDkens9hFrSto1Flj6EKj7vJW%2Bi9042aA7XWu6eGaqVll6Bg2eQTXIrcbs7SjLuF75tTWqQOUkqXxBa14BrT31TtrX5TpohjeEfRCELiIKPXwK%2BR0z4x4EqpCIxzjaeLnIfaZ8LU3yw8szzOLlmUZ0ekZWP%2BpNG350QRdocT5LFDoytfUXaK9pBzsKYGW%2BdtX64XCbakI0UY5UWB%2F85JdjQ00aXolh9UKLr24qVE521WOghm%2B1K0WN%2Bqznd2Exk4pZXZVzOjeo37Y2GQuHwPikdJnZos8Y3JyKPCINvZ%2BpmCHcTtOtaumOSL1wwVfrTT2IameTRE%2F%2FPabR%2BBsqp%2FfaAl7lvWFaCx1yAoE33QtyM5dEX%2F118V%2Fpy4BH3a6ekOcyZP4gOMEUBzbzzmAGpwqzY0Mi7yH%2FqdJ1IZfIiBQSY4CAQX6Uy2o%2FVSuHf8wEA08uXiKmZo588x%2FBdHY2xpFHfCcPTMSd2pGT7qqwt%2FO3UsBDjjEO4Dzi3fXeltS%2Bcm286PnjmTbuwOQjha44FHgF6PKD7fU%2F%2Brc%2Fa1ONaITDn1YK4BYFvtl%2Fg7%2BH5p4LkKa1vRPQ12zjwp7xbdEqRxevvwGPjh9gBCAOTAKMOL1q8QGOqUBsZ1fTJ7Y9%2BSW8yO%2FcDmCSU81PK7r1czgQxdeXk3I03jG5UwYdAErgL%2BT4ZvW%2Bmol1uX0QKha%2Fyk%2Bs0qInW82V%2FKPi4Q0J4HZAITV47qzhvQKB4eqXoSTATQdQyJJY%2BY8eh%2F%2FNLRRRklMI2fmxl8S65cJBwKkeN%2BEwDZdgXEVQDItmO%2BqzKQGqhJPv03J3Ijg7kyc7s0ocXD4vP4ehSt19kF1VGQY&X-Amz-Signature=896246493c17d544a569ff57e51bba907c76280e957ee4b29ad0e336d45c32f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

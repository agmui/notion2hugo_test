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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLD5ERPL%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZmec1Ahfk5EDx81cnE4nv3IrJOrMLe123nQKhB2%2F3tgIgXhvjBehOAkGpkFCTCZlqyeXGHLwlxBR%2FRKZpYp8ltrkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2Byv2kr%2Bv%2F4KXZt6CrcA2Vikc0cL2cR%2B0%2FNFWq8Z6I6PgyiBVECiRImPlT%2FdVm7sFiheLyTpokS4TSfKdDzNPzwHvI9ar3kKeMSAPuVO3PGmU%2B0k2JB72W9TGV%2FkIimWlhzxiuG00Q4sOInNNJE8wVIw7jy6YrEF0NE6NxUUVEKWrgormFtpQx0erir8cndy%2B9mf8Xoj80s697hsWnx%2B6DptWzi0NtEz%2F67%2FrJkdXPT%2BWT6eTaIWdFexXf7YT0YVep3XAFIc3FtwvtmezdfWr5DrNkYLt1%2BP83ceT2YxmQHrXII0d3qOJ6Csx1mzL4CbdvRZ%2FQ5IstaIf5uJ7tnhHorUqd6pBhoRzC6S1xBOa0XxZyOhZut8UxZZqwqfJ%2BUnIxCfJd7CTp7C4lmNO4ceMYGddHIw0K%2F13AhbBNv6aTvPS4zrmGSTG9owbnlp2wTNXmx00rzE31QaZBUC8x5YsK8eCi5FiCGqM93mNRUO5M6k6APGSCZ2fxBGXw5Scz%2Bn7V5gjNARXK3U0M0TvnXseF56cRIZ7HD4FlIeJ9Q27eRm6inw5w2%2BIw8zFkgIuN6ggqYYWeCSF2eOxwp04mNly07NeXIHWrFnmoNp6zPMhKnQUzDXyWteEeE4Vawsoj5fjIDzJqU0HxabUBFMJ7I9sMGOqUByBBpQuNf%2BpL8B7AI5FBgXVSAvXqRYf97qi3K3AVFSKTTr7AEhOYfJ88tWE4qavG8zb%2FpjN1JkUAEGQDqlgY4Y0WLJit3wT0oceFZp8tJT1MrmaIodulnNLHC4VDjdhAYeKPZkCa1TDQik7nwvABaztjhDNzjC79OibRfTUTrsolxTTkeCcVSDA1ALurSg4BuoiYkPelbyklKRYf60Eh0jOVZ%2FHoM&X-Amz-Signature=41aa6f191dff251cac63b760e4d2e96ece9f5839202ce580ae188ffe8bded709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDQTB4LT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHahwsgUAjtZ8pSzbOeS71TqxdikC2TZjct14oJXMct%2FAiBEc9lNCg8veyklWskfchaJkPXV2cFppvt1t83rof219iqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrOTyGtKdYqmtQqBzKtwD4RomFOUJEHnthEgL246tx1szOOq%2Fz6x38fPOiloOADYVCMB%2BPZ9xwrosPZ8s%2BuBQ1cJNrf49e%2F%2FKaJEtDwJ7NoCUuoJLQ6AQ3efIe5UBtRHyWNhnc%2FD1yuTEZBVd6oQGZ2Nq%2FNpWRtKxvd8hUT3ebMslNg1QbF%2BcQ%2BF9T5lXfj7OaSffp72HESg8ZD877CyF8%2BuoYucWCTOkCAMPIznbg9UgzD6c8y1f47KJ6u4AKqGnh7uFiXiVklix5Tat452auYFH2V6cyRO9ye8yLPkG6u6Yzd3HbQDeI0dAcUB%2B3rPgRs0TzvcOl0U4FfXnz9%2Bm%2F3QcHhCPZ4RfSuzszgswtvVLzzl8V3AsoD7ckouNF4PgSGdesZMoHgkcVNtPVvE4Sr9jN3Br1aatB%2B%2BUjvMH9tLGlo2FSEzOzpiVn4AYylMBWO7%2FJ5Va2gH6yIQqAzK08z26fZikRQk4n0hNv5GV33g0K4gfDoVlLEHpSNHS0kWsstbPxwGDmZlRicSYHqdHs0PNzB1QeTzbFm2T9wMh5edSJqD2EeN4sonQESo3NqclRFCaU7Q%2B4j8J%2BUU64h76T0XpZu74KpWW2vNJva3ZJ1GTS2DoNyO1hd5XnUHA50xyiNi3VC7IlEg1I%2FMwj8f2wwY6pgEv%2FAFBJ8ij0vBlF6t5bt1y%2Ff%2FWG2qTPh7b5WdIHCqYMh6WnSQRF0PPq90K0EmGAlakoJWbz%2FIOwE%2FAFFeOpRiGheWqdZoPzYgqPKFupAt4sg3mT%2FdHZW77tkL5Dh%2F7njKmWGXSKEdhoxg0bwjze0%2FdgdwA6IA4CC1HB2VzFQlIC67w16fNdY162BfRvXhl2gmOCDHEAp8tW2VRrvMpokfREGgHx3sG&X-Amz-Signature=8e8db57f5d27d8dae2018d9c79c85263d0475ad73897f4229cb238aa34c988b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDQTB4LT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHahwsgUAjtZ8pSzbOeS71TqxdikC2TZjct14oJXMct%2FAiBEc9lNCg8veyklWskfchaJkPXV2cFppvt1t83rof219iqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrOTyGtKdYqmtQqBzKtwD4RomFOUJEHnthEgL246tx1szOOq%2Fz6x38fPOiloOADYVCMB%2BPZ9xwrosPZ8s%2BuBQ1cJNrf49e%2F%2FKaJEtDwJ7NoCUuoJLQ6AQ3efIe5UBtRHyWNhnc%2FD1yuTEZBVd6oQGZ2Nq%2FNpWRtKxvd8hUT3ebMslNg1QbF%2BcQ%2BF9T5lXfj7OaSffp72HESg8ZD877CyF8%2BuoYucWCTOkCAMPIznbg9UgzD6c8y1f47KJ6u4AKqGnh7uFiXiVklix5Tat452auYFH2V6cyRO9ye8yLPkG6u6Yzd3HbQDeI0dAcUB%2B3rPgRs0TzvcOl0U4FfXnz9%2Bm%2F3QcHhCPZ4RfSuzszgswtvVLzzl8V3AsoD7ckouNF4PgSGdesZMoHgkcVNtPVvE4Sr9jN3Br1aatB%2B%2BUjvMH9tLGlo2FSEzOzpiVn4AYylMBWO7%2FJ5Va2gH6yIQqAzK08z26fZikRQk4n0hNv5GV33g0K4gfDoVlLEHpSNHS0kWsstbPxwGDmZlRicSYHqdHs0PNzB1QeTzbFm2T9wMh5edSJqD2EeN4sonQESo3NqclRFCaU7Q%2B4j8J%2BUU64h76T0XpZu74KpWW2vNJva3ZJ1GTS2DoNyO1hd5XnUHA50xyiNi3VC7IlEg1I%2FMwj8f2wwY6pgEv%2FAFBJ8ij0vBlF6t5bt1y%2Ff%2FWG2qTPh7b5WdIHCqYMh6WnSQRF0PPq90K0EmGAlakoJWbz%2FIOwE%2FAFFeOpRiGheWqdZoPzYgqPKFupAt4sg3mT%2FdHZW77tkL5Dh%2F7njKmWGXSKEdhoxg0bwjze0%2FdgdwA6IA4CC1HB2VzFQlIC67w16fNdY162BfRvXhl2gmOCDHEAp8tW2VRrvMpokfREGgHx3sG&X-Amz-Signature=563e5cf6cc84a10d7472648de9f12b818be3ca66076cadc50761a71c3a304939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDQTB4LT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHahwsgUAjtZ8pSzbOeS71TqxdikC2TZjct14oJXMct%2FAiBEc9lNCg8veyklWskfchaJkPXV2cFppvt1t83rof219iqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrOTyGtKdYqmtQqBzKtwD4RomFOUJEHnthEgL246tx1szOOq%2Fz6x38fPOiloOADYVCMB%2BPZ9xwrosPZ8s%2BuBQ1cJNrf49e%2F%2FKaJEtDwJ7NoCUuoJLQ6AQ3efIe5UBtRHyWNhnc%2FD1yuTEZBVd6oQGZ2Nq%2FNpWRtKxvd8hUT3ebMslNg1QbF%2BcQ%2BF9T5lXfj7OaSffp72HESg8ZD877CyF8%2BuoYucWCTOkCAMPIznbg9UgzD6c8y1f47KJ6u4AKqGnh7uFiXiVklix5Tat452auYFH2V6cyRO9ye8yLPkG6u6Yzd3HbQDeI0dAcUB%2B3rPgRs0TzvcOl0U4FfXnz9%2Bm%2F3QcHhCPZ4RfSuzszgswtvVLzzl8V3AsoD7ckouNF4PgSGdesZMoHgkcVNtPVvE4Sr9jN3Br1aatB%2B%2BUjvMH9tLGlo2FSEzOzpiVn4AYylMBWO7%2FJ5Va2gH6yIQqAzK08z26fZikRQk4n0hNv5GV33g0K4gfDoVlLEHpSNHS0kWsstbPxwGDmZlRicSYHqdHs0PNzB1QeTzbFm2T9wMh5edSJqD2EeN4sonQESo3NqclRFCaU7Q%2B4j8J%2BUU64h76T0XpZu74KpWW2vNJva3ZJ1GTS2DoNyO1hd5XnUHA50xyiNi3VC7IlEg1I%2FMwj8f2wwY6pgEv%2FAFBJ8ij0vBlF6t5bt1y%2Ff%2FWG2qTPh7b5WdIHCqYMh6WnSQRF0PPq90K0EmGAlakoJWbz%2FIOwE%2FAFFeOpRiGheWqdZoPzYgqPKFupAt4sg3mT%2FdHZW77tkL5Dh%2F7njKmWGXSKEdhoxg0bwjze0%2FdgdwA6IA4CC1HB2VzFQlIC67w16fNdY162BfRvXhl2gmOCDHEAp8tW2VRrvMpokfREGgHx3sG&X-Amz-Signature=540bd9ba1a13bc68631d2fd07e6e370dbd52ba248367a594a371da189b290d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

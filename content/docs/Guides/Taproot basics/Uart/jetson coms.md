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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNTEMQGN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIFsHX1mXvP4WH43k7dnlLaeUAMvLhfz8q1lIqSGiXaMaAiEAgyLumagw%2BzpzuX2yRNaS4R%2BMPA9Y2f9PLCTPVtg%2B3I4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDH2WcKS1KOIMY8YDByrcA7SqtfIxJ1n%2Fwtdcr3c%2BR6pZTx%2F6QNtFtPvJWWH2YpOFiiUM6pAGsaN6afYTzTTAEfX5M4lWVwR%2FJ4L4nsjJEgGLe2qeB50uVKpwELXSTsUbsykBZNmp4Uxw4ud%2B5ALePHYvZM00j%2FvdABR40nccWJbQt%2Bn%2BJpgBhl%2FuCC26JEp%2BXTnYlyabn9tEskjb0X70Rd0zCYUYdakd2naX7vvObHgphebHaxL6%2FeMLxQzXtQXN%2BujL%2BznIvaQet5ameusN5RMuYsUHQ1ZrBVgwhfXN%2FaZYm5SGAupUlK%2BJAorp%2FYp3f1uI5a9ztwPF%2FFp%2BJUzEB9tVVQkaJpvHYx8k3b6C0qnjuyNGrbjeCDsFqltZeLpAJ%2FCLs1nMoK1eqhn98FdfAfM4eii02euNGusHY9PtjM1ZxQ%2BLn0S7%2FWV3WVpFtWD%2BcM0S%2ByWfSumTWfb%2FJgHBoWkJL6Jh43USj2l4dMX5h74ouKZA1p8KYJWVWOY61X6nMl%2F%2FDr9W%2BI3iLYaA5hWK9Kvqqd3rbKaHYPMHH%2Ba9qWDbqikfsVjdebQgayKpovHXZ7JBeUbwegQyRbeyE0ONpYOytq7iiWQQSK5RyNHe0t2MmaCxmj4mTCCGenU78%2B6QdDKIFh1GQpfd6zF1MM28jsQGOqUBO54xLahTSqEq6IEgaEAIADmLqBcZN%2Bjhg8O6GV%2Bu6lHkdSDPt%2Bl%2BoXwS1F4w9fpUAmesRxqA6XJtzNlUzE64oR4odQk%2BqhMtoZzeX88QXQ6O5mayrfmo7jdprOclUAZeZ%2FqirGrYqvnG6c4FWJXZHnr%2BlVTIFbx7XdRmZ88i4swZCEWivY8aHoGDY%2Bm50iX4NfWjhRs%2BuxDKyrivHmah61%2FUIveD&X-Amz-Signature=25f69734303b450af94579492b820355e692ec7f2e9f7ead644edfa509ad4876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAFP5NHB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIHysjynKo9UE9iZ0%2Bf%2F6pamIPKHRrysMVGSb20FP04paAiEAyMkaOcW5X%2FbQa%2BM4JHXY%2FNECwGZ3H%2Bo%2B6QENHMAgavUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDA1JRnm3R1w7bfbPfCrcA%2B6XDeMNqBrJSogQEUDd5qgUAIW8%2F4os6KAUaN%2FW28isc3JCIuWpaiwKF2dFT2q5xrgm8X4NkQTzuyq3bLFq%2FWSY6ob8kBawb8t5K%2FngNGl27lS9AW4zhhHJvyHpyNkJCSqw3U%2FvEqRrguHXyWsUkqCwnVH72gMMZh6czQIcNF%2Bypkpvpky8WCuv%2F9KOuV2IpbovCwhKqDauXrPLorbtg4CCGSrtyoW0vPQ5N7FJQDN8qLiW9uFFfbkItiVfXeIHrL6Z0ufNzr9ex4e5KU22NOsG6z%2FJBfONsTjoBBEHXzFObwekl5sgX9o1JXiCLMXeETo22HvXCOuqzy8XwmxGwDg%2FFgy%2BkPRBSl9Wsl7B%2Flg2hkI2k%2BazxLh0xU2fc2%2BEf6Sc35j8tS75658OkU4Ucd52scjJtMeThLzMMpgzmb0LYXSPSDiyGcX3qdFq8n5QLUuzkCjeh6kc0HqRFSoMF9hIli5gv%2BcsQMRbjijIoxOmcXJis7bpPPA5HgpWKa4%2BNKXBxyFIU4qJmsk0gHpo1LZoABPQFzu14DDaduSZjqyWw1iCFnsdZI5ptyHCEkOdh%2F7KZ06eFQ50wr9a4PIP%2BgZ5jJMY9u3ZpPPD0DvQmuVo%2Bx%2FWZLILV9o7kgN3ML%2B8jsQGOqUBUDlsx11es7z8D2snXt3H6lUMZQa5ggsg%2Fb1bfKHgRJ6UVVYTA8XzskUI8aIke%2FMsqpPBC7O7mKBbPkV5xBPdPuMnJwRNyMm6VpAu4V5GM6HGavyprusIGw4TX38yQ4UXigP8E%2FUFS2mYVX6FtlVpeZMogHBXLkQgszxMhMKaere0CiMRQoYJ7b7pgOWjVnEytAmBvfQaqduShbJg35siGy67%2Bi69&X-Amz-Signature=1ef508a439b5f615d5baa2f92fc156f3986f03989e6819da4598497972e6cd1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAFP5NHB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIHysjynKo9UE9iZ0%2Bf%2F6pamIPKHRrysMVGSb20FP04paAiEAyMkaOcW5X%2FbQa%2BM4JHXY%2FNECwGZ3H%2Bo%2B6QENHMAgavUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDA1JRnm3R1w7bfbPfCrcA%2B6XDeMNqBrJSogQEUDd5qgUAIW8%2F4os6KAUaN%2FW28isc3JCIuWpaiwKF2dFT2q5xrgm8X4NkQTzuyq3bLFq%2FWSY6ob8kBawb8t5K%2FngNGl27lS9AW4zhhHJvyHpyNkJCSqw3U%2FvEqRrguHXyWsUkqCwnVH72gMMZh6czQIcNF%2Bypkpvpky8WCuv%2F9KOuV2IpbovCwhKqDauXrPLorbtg4CCGSrtyoW0vPQ5N7FJQDN8qLiW9uFFfbkItiVfXeIHrL6Z0ufNzr9ex4e5KU22NOsG6z%2FJBfONsTjoBBEHXzFObwekl5sgX9o1JXiCLMXeETo22HvXCOuqzy8XwmxGwDg%2FFgy%2BkPRBSl9Wsl7B%2Flg2hkI2k%2BazxLh0xU2fc2%2BEf6Sc35j8tS75658OkU4Ucd52scjJtMeThLzMMpgzmb0LYXSPSDiyGcX3qdFq8n5QLUuzkCjeh6kc0HqRFSoMF9hIli5gv%2BcsQMRbjijIoxOmcXJis7bpPPA5HgpWKa4%2BNKXBxyFIU4qJmsk0gHpo1LZoABPQFzu14DDaduSZjqyWw1iCFnsdZI5ptyHCEkOdh%2F7KZ06eFQ50wr9a4PIP%2BgZ5jJMY9u3ZpPPD0DvQmuVo%2Bx%2FWZLILV9o7kgN3ML%2B8jsQGOqUBUDlsx11es7z8D2snXt3H6lUMZQa5ggsg%2Fb1bfKHgRJ6UVVYTA8XzskUI8aIke%2FMsqpPBC7O7mKBbPkV5xBPdPuMnJwRNyMm6VpAu4V5GM6HGavyprusIGw4TX38yQ4UXigP8E%2FUFS2mYVX6FtlVpeZMogHBXLkQgszxMhMKaere0CiMRQoYJ7b7pgOWjVnEytAmBvfQaqduShbJg35siGy67%2Bi69&X-Amz-Signature=0a23e50770b3544d7a92c9abca3ad6c5dc0f89041402a395e497eb32664c7256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAFP5NHB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIHysjynKo9UE9iZ0%2Bf%2F6pamIPKHRrysMVGSb20FP04paAiEAyMkaOcW5X%2FbQa%2BM4JHXY%2FNECwGZ3H%2Bo%2B6QENHMAgavUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDA1JRnm3R1w7bfbPfCrcA%2B6XDeMNqBrJSogQEUDd5qgUAIW8%2F4os6KAUaN%2FW28isc3JCIuWpaiwKF2dFT2q5xrgm8X4NkQTzuyq3bLFq%2FWSY6ob8kBawb8t5K%2FngNGl27lS9AW4zhhHJvyHpyNkJCSqw3U%2FvEqRrguHXyWsUkqCwnVH72gMMZh6czQIcNF%2Bypkpvpky8WCuv%2F9KOuV2IpbovCwhKqDauXrPLorbtg4CCGSrtyoW0vPQ5N7FJQDN8qLiW9uFFfbkItiVfXeIHrL6Z0ufNzr9ex4e5KU22NOsG6z%2FJBfONsTjoBBEHXzFObwekl5sgX9o1JXiCLMXeETo22HvXCOuqzy8XwmxGwDg%2FFgy%2BkPRBSl9Wsl7B%2Flg2hkI2k%2BazxLh0xU2fc2%2BEf6Sc35j8tS75658OkU4Ucd52scjJtMeThLzMMpgzmb0LYXSPSDiyGcX3qdFq8n5QLUuzkCjeh6kc0HqRFSoMF9hIli5gv%2BcsQMRbjijIoxOmcXJis7bpPPA5HgpWKa4%2BNKXBxyFIU4qJmsk0gHpo1LZoABPQFzu14DDaduSZjqyWw1iCFnsdZI5ptyHCEkOdh%2F7KZ06eFQ50wr9a4PIP%2BgZ5jJMY9u3ZpPPD0DvQmuVo%2Bx%2FWZLILV9o7kgN3ML%2B8jsQGOqUBUDlsx11es7z8D2snXt3H6lUMZQa5ggsg%2Fb1bfKHgRJ6UVVYTA8XzskUI8aIke%2FMsqpPBC7O7mKBbPkV5xBPdPuMnJwRNyMm6VpAu4V5GM6HGavyprusIGw4TX38yQ4UXigP8E%2FUFS2mYVX6FtlVpeZMogHBXLkQgszxMhMKaere0CiMRQoYJ7b7pgOWjVnEytAmBvfQaqduShbJg35siGy67%2Bi69&X-Amz-Signature=5f64c6406c01df69f10735126133eb6f0efbadfb3bbe93a24f93efc5e95953cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

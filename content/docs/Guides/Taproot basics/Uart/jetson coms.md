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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF3R4NNA%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDtS260WEExBPpS2yQcaEIH63W%2FTeko7wBMdDkz8J6B7AiAdrT7jOFS9cApcYuLra1yHgwIMs5W2pd2VvGa8WN%2B7FSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMTd%2FObCcDP5nI0apjKtwDhPbEfVzSh4QJ0SBeEhXnuzNvZwy%2F3qFKI8qBL2x0PySY0wNBPevTmVo%2F1CfsBBfnte%2Fqt6CDYwPkPfHKoXHJozM4JtxoDxvdwfkMDojfu03D%2F4hMeBpr913PcCrNQ4EABmEtysQLAsZL7ZwWduJxRYa%2BvIrQpbhOmLgAtowB2kJ%2FGsFpJK5m7rQvipBuB%2FguVNBQZJyXSXUqAut9VLq1J9eSfRGsq5rhSFIFx88dr3RIOsiGi%2FgIm65B1WalXDBaQ0k%2Bo59gME1bjh%2BkYqMb5JbwuOGwuISEPJsn7aa3tHiShJtW2Q1NnKR4IDBEY%2BIXsrWvQOGouyG3lVraZSLmMW7xpadnv3z0avogKiJ7q7idVg8okt4Xr3hBoTTxrTFaYrfHMZH2X5GTnKlfLRV2hl6vKbsdYgl%2BeXdwB3Ug2ROF%2BnGl47kG1jIlmG1%2BtFTDrvANbL4FfnUbIgW4RaZ%2BjMoFDXpW9eh7Z9dPnBNIUi%2BsDNw7W55QsZnfDx7%2F1A7JjeIlS3Kag%2F5U36vlYZm8%2FzMwp05ZSEW897bHtsu9PL%2FZiMsSuXK5lvHKu3CnDXL6nsLjeeX7JDLqBxU%2BV6vmqIYCH80HiRY1oV5XYwW%2B6Vjl3gLaVckEuUI%2FSCEwmvCqwwY6pgE00xppRrgDKEHjIo8pBxnl8RTreyDP8YpN12FpR7HVKwl%2BkDp9Mho1rQN%2FzXF9SQsXaJ4TDaJyAZ9fiQ9qxAF6jHELN08oFmFMN0qyW%2BAf598YI9RGjJ5ocJ6%2F20dCzAlHHG%2BEuvVRwO6H1t603DieKSzX6ylP%2BqrL2UkNyF1%2B5YkaaAAK0VNJaDsjkVltsc533lB8cy83frc%2FunXRkhRsaqWRNSpz&X-Amz-Signature=d1ebf16472d87658cf539c09b09f373c777a44f1ab5e7b9e98a2f9779e6b20ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LRQLFHV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDGufwjakb%2FintWv2LTYGEqt5U1K7hFhGMAt9M2jpsJZgIhAIpcF0Pn7j%2BCwYU4zHfKE085UyeGaai6Gu0uwoZ8WlA7Kv8DCGMQABoMNjM3NDIzMTgzODA1Igzutnv0VpMj80uMmQsq3AO%2B62rtvFmzmRkvMH8vdpobMwBxl%2BgQARhNhUGlHLrKBXAAWn8e5zyxv%2FUh9XaXWzSE42SaVhr6WfhbSfEBTKcwADZexbfq7AsfKJAAvo0d9Qa6NnZ7qpsMTtFkWlvNj7KJQwBjQvhXUiJiViDwpHS1CD1Ws9fCsjSwk3STvoi%2FoyzOHjz5FPLfplkXhTZ4W6ey0U7DrD8hx6dOAAYkCM2CbmIIEtdwDIzy70x7UX78tUBQeYFlM4et65lddfPZUoTsQlLYpjsYJxq14%2B%2BJUpoXaNVmF3nd3AWOBCTxXOfklBapfP8U8UA6alQOOgEFU2qqaK3H%2Fcz9hSB6XI8I5QcLft%2BBPB2WBUudiT6ISniVCGZ4PT1VJc0f5XY9OWcciBQ16NAKlDMD680ujZuwiP0TDVqGOAIbZlhnzfJ3VjD4Y%2F%2B6nmu%2B%2FHIN7ckKZIv1ZnzETFzup2Lzk43MkJQC1WH4EeO5Uij49qj5BzL5oBVVKGN4XVQyzldJD3yoiu1pjXVyrrQFSN3NalWDI0EPj4lCWrHgAckWmkKXRu8rXKie%2FQGJwfhfKM1tJ1zdri0x2T2jAyKfOEU8WaggSiD2eewNso01cbCdCBn7GKJvtNAJQ%2Bt5KS1Xee4dul%2F9XTDM86rDBjqkAcCZWbLf8MWl2rEwdEuW5IxcIH0bsXLf3vFEv2YMbs5yFoWkRyXKMoUt22D4dYPHJL7sMrzuwO4c%2Bd7JjJf1yMMxUkUbyrBqESOXaZ4fv8mnlvoRsQaExPiS5LUDh8A9EaD8HPba7T%2Bul2vW%2Frjpp%2FRIGj2n%2B3NEowKt%2BQxu6OhOASVC94Ug%2Fyza4FCDdbLBIWOxozQ8Xa%2Fq%2BFKW1T1lNHIa538I&X-Amz-Signature=f8e66c268635270218deb55e50aa1b148386be85e9d8e397c63291d16cd42d89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LRQLFHV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDGufwjakb%2FintWv2LTYGEqt5U1K7hFhGMAt9M2jpsJZgIhAIpcF0Pn7j%2BCwYU4zHfKE085UyeGaai6Gu0uwoZ8WlA7Kv8DCGMQABoMNjM3NDIzMTgzODA1Igzutnv0VpMj80uMmQsq3AO%2B62rtvFmzmRkvMH8vdpobMwBxl%2BgQARhNhUGlHLrKBXAAWn8e5zyxv%2FUh9XaXWzSE42SaVhr6WfhbSfEBTKcwADZexbfq7AsfKJAAvo0d9Qa6NnZ7qpsMTtFkWlvNj7KJQwBjQvhXUiJiViDwpHS1CD1Ws9fCsjSwk3STvoi%2FoyzOHjz5FPLfplkXhTZ4W6ey0U7DrD8hx6dOAAYkCM2CbmIIEtdwDIzy70x7UX78tUBQeYFlM4et65lddfPZUoTsQlLYpjsYJxq14%2B%2BJUpoXaNVmF3nd3AWOBCTxXOfklBapfP8U8UA6alQOOgEFU2qqaK3H%2Fcz9hSB6XI8I5QcLft%2BBPB2WBUudiT6ISniVCGZ4PT1VJc0f5XY9OWcciBQ16NAKlDMD680ujZuwiP0TDVqGOAIbZlhnzfJ3VjD4Y%2F%2B6nmu%2B%2FHIN7ckKZIv1ZnzETFzup2Lzk43MkJQC1WH4EeO5Uij49qj5BzL5oBVVKGN4XVQyzldJD3yoiu1pjXVyrrQFSN3NalWDI0EPj4lCWrHgAckWmkKXRu8rXKie%2FQGJwfhfKM1tJ1zdri0x2T2jAyKfOEU8WaggSiD2eewNso01cbCdCBn7GKJvtNAJQ%2Bt5KS1Xee4dul%2F9XTDM86rDBjqkAcCZWbLf8MWl2rEwdEuW5IxcIH0bsXLf3vFEv2YMbs5yFoWkRyXKMoUt22D4dYPHJL7sMrzuwO4c%2Bd7JjJf1yMMxUkUbyrBqESOXaZ4fv8mnlvoRsQaExPiS5LUDh8A9EaD8HPba7T%2Bul2vW%2Frjpp%2FRIGj2n%2B3NEowKt%2BQxu6OhOASVC94Ug%2Fyza4FCDdbLBIWOxozQ8Xa%2Fq%2BFKW1T1lNHIa538I&X-Amz-Signature=8099e24fc3e5fe9394046a228a8b3ff35f18aa947def05dcd9f49350d09cb67a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LRQLFHV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDGufwjakb%2FintWv2LTYGEqt5U1K7hFhGMAt9M2jpsJZgIhAIpcF0Pn7j%2BCwYU4zHfKE085UyeGaai6Gu0uwoZ8WlA7Kv8DCGMQABoMNjM3NDIzMTgzODA1Igzutnv0VpMj80uMmQsq3AO%2B62rtvFmzmRkvMH8vdpobMwBxl%2BgQARhNhUGlHLrKBXAAWn8e5zyxv%2FUh9XaXWzSE42SaVhr6WfhbSfEBTKcwADZexbfq7AsfKJAAvo0d9Qa6NnZ7qpsMTtFkWlvNj7KJQwBjQvhXUiJiViDwpHS1CD1Ws9fCsjSwk3STvoi%2FoyzOHjz5FPLfplkXhTZ4W6ey0U7DrD8hx6dOAAYkCM2CbmIIEtdwDIzy70x7UX78tUBQeYFlM4et65lddfPZUoTsQlLYpjsYJxq14%2B%2BJUpoXaNVmF3nd3AWOBCTxXOfklBapfP8U8UA6alQOOgEFU2qqaK3H%2Fcz9hSB6XI8I5QcLft%2BBPB2WBUudiT6ISniVCGZ4PT1VJc0f5XY9OWcciBQ16NAKlDMD680ujZuwiP0TDVqGOAIbZlhnzfJ3VjD4Y%2F%2B6nmu%2B%2FHIN7ckKZIv1ZnzETFzup2Lzk43MkJQC1WH4EeO5Uij49qj5BzL5oBVVKGN4XVQyzldJD3yoiu1pjXVyrrQFSN3NalWDI0EPj4lCWrHgAckWmkKXRu8rXKie%2FQGJwfhfKM1tJ1zdri0x2T2jAyKfOEU8WaggSiD2eewNso01cbCdCBn7GKJvtNAJQ%2Bt5KS1Xee4dul%2F9XTDM86rDBjqkAcCZWbLf8MWl2rEwdEuW5IxcIH0bsXLf3vFEv2YMbs5yFoWkRyXKMoUt22D4dYPHJL7sMrzuwO4c%2Bd7JjJf1yMMxUkUbyrBqESOXaZ4fv8mnlvoRsQaExPiS5LUDh8A9EaD8HPba7T%2Bul2vW%2Frjpp%2FRIGj2n%2B3NEowKt%2BQxu6OhOASVC94Ug%2Fyza4FCDdbLBIWOxozQ8Xa%2Fq%2BFKW1T1lNHIa538I&X-Amz-Signature=afd3ed67e6d12f1157f686968f2246687a311ab5841dfb3f49916a616d2856ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

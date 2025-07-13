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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RINUFEJH%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2hXK%2F%2FKunyeVV0KUb%2BP8KVMJzW14lmYdmv8ygxiRXsAiAWKJGQWNkgUmLFPhIStCCVU1jCvpZUpuwLBpCiCGj4FSr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMZLcltt9hh4jyRRkqKtwDuG0mDTwSM0kVAIhTsQknV%2BlTtcfylKW5tY7VrsGxMVFloJshPazDjhF%2BYNcqaCCDoEUQFmVmgPG9sP9Pr7fLxHVnUOu1%2BkToRb3yHEje8BY34nJUQrEF530b6LWxknxXxpLUgnMtaKNbFlYzQCG1D7Mxy7KZxSf5%2BM0Am3coidBCpkLYp0BNJKaKLzLbby%2FheCIYg1DZoHbNycqhaNwttQGH%2BPOqRR%2F6q4tp7rVbKaOOIpO7V5cod5budrTOVnQpzlb52%2Fsg%2BBiSLeGHYHI0Z48MZ0wPlgpMYcR1I5kTfstfb3a8hR578F0lyV53lfG8WZlhRHJ5wNtXx6nI8NeCkVJnQMACDChSjM1dhLogacJPfiaP68zQ3TRpXfqJwePaR%2BQVw7Awlw0HWoKvhSVLK%2BLPIU7JHbnRur2Sva%2BcQ7zc0lwVM6gheqi%2FzLdyYV8uwunUgc1YkMUSUnB4xKxXSC1e63iSsd3LlSK6AvZrJrabYG%2BMIOnogo9Wg434GfRnpuxxN9hnTS%2FI%2BlDJGaSjmKKNImz84F%2FxR%2BW%2F78OwtphlabySD%2B%2B5R%2FQ4v2EY1BgHI4WKXRCe2TIy4T8j6FEEUTcQtx6DedTM9fbttfQZWLOwrOxg1w7gCRvZhk8wrpbPwwY6pgGmRSVk53f6InPY5HEEvtxGMdqMTWC3VfODVKNC%2BOlKsE0O6c2zxEzMON42yIoX6AUyQDKjRcxJzjjkyxggRXpV5DaVkcaC1cyN8ZQApawxxF7nE1Vo1l%2B%2BP0fYo7MH1VSMaBDP3%2BDqEU478QC9poP2y1dKgcp83wZpbOVCmwinAEDZisnc2EO3b7oghWcFcQrvOx7HtKXbYusMzWjNQrk8nvpTCJxx&X-Amz-Signature=064dcdc0e289ae205586fd7c7e98464224015f4246c7858cf1cacef2945a9249&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVCY4OKD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA024gJExsrz1I6tN74iph1g7sAmgPQ0EDEnel4Rp3vQIgblukXvb1EZnkm714SGMrlfuB%2BZEnpgyjnLc3s9N0ApQq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDIrJPVodOwHsXQRpgSrcA9ONaAExMqNDveKPXdVuuUL5iVc5LCzAUfJjH8yM%2FFuADITp0cIlxhlqeaHxRnsm5c7v2M8SCIQ5QVxhM%2BYfjX6uMj7ZBD8gEP7HOkoegRIUhLdaXriNDgGQmzvfMURPklhC9kvJgygOTOWeFIzmLRQwso57a23T%2F1xRVl4zLUQ7mL%2Bijo65eHjRKYZYv9OezV5Z3N9ZL%2BwgyHIsThaIZoPt6zE6nvgjF8jMZ8vLBxwqQsgTWupPzPmlTHxS69q8EGLUkkNvKb%2FQHna43Smt7KYWp%2Bj8jxLFAvmJsSS9nKqVTAMIqUooIZN1buohE%2B43Cw%2F3p0s03oB70FhJr%2FvcCc1FM2v9aUXdLOlVwAbf3KA5v5z9ugqq5vwNdZ4PNPqxch9jqHGi%2B95ZvFlNa6sesUs4kne4ELuc9IdyLUtTqss%2BparzJ1dWXdS%2BCMJN0J6AKNFRFXmG18NOAeZCN%2F4LMmz%2FAJTEQ4mnO40Kh%2BQX%2Flfsi1Vv6Wi8mGhC%2B8sjU7ErXTYNtzSF9CI%2FN4IF0n1prYatiQXl1bC481NG4H%2BzvrBbIZ7%2BvLXMqcoNxw8XlmFPlbRZKHEClqWZdLKcmdy%2FkQpDORACKpfBt3cBusul1ZpQpQcjFAzExWWGuNKnMLyWz8MGOqUBiQlOUf5XuSIrQ4sqTEN%2F8j8jCR5CC4eiIYwNGJhk9KaowlofTIQHmsuzBFoFbuBUJIDomFaYXKBJ%2FdIcCJGL8IoqIwmPB5YWacSLDgD2pg4SdrYYmazRNPcHj6OeS2b7e%2FpxGMxvNV6tFp96hMHKuO4ngg%2BvsxvxhjfKhX6B5Ov8fjAT6GiduWqYw5jOMOYF4O6sZqCWhqKpsK987UKqixAMVtDr&X-Amz-Signature=0789c9151a8306432e3a131b9795240cb325520dd54785fa5fb1d67825617711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVCY4OKD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA024gJExsrz1I6tN74iph1g7sAmgPQ0EDEnel4Rp3vQIgblukXvb1EZnkm714SGMrlfuB%2BZEnpgyjnLc3s9N0ApQq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDIrJPVodOwHsXQRpgSrcA9ONaAExMqNDveKPXdVuuUL5iVc5LCzAUfJjH8yM%2FFuADITp0cIlxhlqeaHxRnsm5c7v2M8SCIQ5QVxhM%2BYfjX6uMj7ZBD8gEP7HOkoegRIUhLdaXriNDgGQmzvfMURPklhC9kvJgygOTOWeFIzmLRQwso57a23T%2F1xRVl4zLUQ7mL%2Bijo65eHjRKYZYv9OezV5Z3N9ZL%2BwgyHIsThaIZoPt6zE6nvgjF8jMZ8vLBxwqQsgTWupPzPmlTHxS69q8EGLUkkNvKb%2FQHna43Smt7KYWp%2Bj8jxLFAvmJsSS9nKqVTAMIqUooIZN1buohE%2B43Cw%2F3p0s03oB70FhJr%2FvcCc1FM2v9aUXdLOlVwAbf3KA5v5z9ugqq5vwNdZ4PNPqxch9jqHGi%2B95ZvFlNa6sesUs4kne4ELuc9IdyLUtTqss%2BparzJ1dWXdS%2BCMJN0J6AKNFRFXmG18NOAeZCN%2F4LMmz%2FAJTEQ4mnO40Kh%2BQX%2Flfsi1Vv6Wi8mGhC%2B8sjU7ErXTYNtzSF9CI%2FN4IF0n1prYatiQXl1bC481NG4H%2BzvrBbIZ7%2BvLXMqcoNxw8XlmFPlbRZKHEClqWZdLKcmdy%2FkQpDORACKpfBt3cBusul1ZpQpQcjFAzExWWGuNKnMLyWz8MGOqUBiQlOUf5XuSIrQ4sqTEN%2F8j8jCR5CC4eiIYwNGJhk9KaowlofTIQHmsuzBFoFbuBUJIDomFaYXKBJ%2FdIcCJGL8IoqIwmPB5YWacSLDgD2pg4SdrYYmazRNPcHj6OeS2b7e%2FpxGMxvNV6tFp96hMHKuO4ngg%2BvsxvxhjfKhX6B5Ov8fjAT6GiduWqYw5jOMOYF4O6sZqCWhqKpsK987UKqixAMVtDr&X-Amz-Signature=76fa4312f4d9526485c8c81b6793e983693cdeaf134419f28b6e4fa5d2d063a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVCY4OKD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA024gJExsrz1I6tN74iph1g7sAmgPQ0EDEnel4Rp3vQIgblukXvb1EZnkm714SGMrlfuB%2BZEnpgyjnLc3s9N0ApQq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDIrJPVodOwHsXQRpgSrcA9ONaAExMqNDveKPXdVuuUL5iVc5LCzAUfJjH8yM%2FFuADITp0cIlxhlqeaHxRnsm5c7v2M8SCIQ5QVxhM%2BYfjX6uMj7ZBD8gEP7HOkoegRIUhLdaXriNDgGQmzvfMURPklhC9kvJgygOTOWeFIzmLRQwso57a23T%2F1xRVl4zLUQ7mL%2Bijo65eHjRKYZYv9OezV5Z3N9ZL%2BwgyHIsThaIZoPt6zE6nvgjF8jMZ8vLBxwqQsgTWupPzPmlTHxS69q8EGLUkkNvKb%2FQHna43Smt7KYWp%2Bj8jxLFAvmJsSS9nKqVTAMIqUooIZN1buohE%2B43Cw%2F3p0s03oB70FhJr%2FvcCc1FM2v9aUXdLOlVwAbf3KA5v5z9ugqq5vwNdZ4PNPqxch9jqHGi%2B95ZvFlNa6sesUs4kne4ELuc9IdyLUtTqss%2BparzJ1dWXdS%2BCMJN0J6AKNFRFXmG18NOAeZCN%2F4LMmz%2FAJTEQ4mnO40Kh%2BQX%2Flfsi1Vv6Wi8mGhC%2B8sjU7ErXTYNtzSF9CI%2FN4IF0n1prYatiQXl1bC481NG4H%2BzvrBbIZ7%2BvLXMqcoNxw8XlmFPlbRZKHEClqWZdLKcmdy%2FkQpDORACKpfBt3cBusul1ZpQpQcjFAzExWWGuNKnMLyWz8MGOqUBiQlOUf5XuSIrQ4sqTEN%2F8j8jCR5CC4eiIYwNGJhk9KaowlofTIQHmsuzBFoFbuBUJIDomFaYXKBJ%2FdIcCJGL8IoqIwmPB5YWacSLDgD2pg4SdrYYmazRNPcHj6OeS2b7e%2FpxGMxvNV6tFp96hMHKuO4ngg%2BvsxvxhjfKhX6B5Ov8fjAT6GiduWqYw5jOMOYF4O6sZqCWhqKpsK987UKqixAMVtDr&X-Amz-Signature=1bb8bad243c7c682f1c3018eb26a12499b7a711f9509325eb433da36e639c884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

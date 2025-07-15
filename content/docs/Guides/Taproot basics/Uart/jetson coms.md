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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CBCY362%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T191006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCICjcKsQYs2BhKx45%2FJccMDwxh1RAWc0QMijAYvX2EQ2XAiBaxj3FgzhYy8ahMP6NfvAvibXQYDv2mIykIe2Qk5Vnmir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMs3jmbUXvFjFcK6fmKtwDpT6O%2F8O7zxv0Bc1gcJCLtd9k%2BzSlE6OhQu%2BYxeAe4yjzVltVOYNHEwf%2Fy9Pj7PKMFigSb36Pn%2FwPIjEPjNmDxkZ%2FT0kXYyZFJ3P2boB%2B2Y5I9H3LoOfsYb9vl4jAtrinDdLuxaJ%2BStr5rxMh4BZ3ZGQ%2B7TSeNB%2B5VfoJRavWGcjvIhPr7AVf2ftfa2%2BEl4hqWjB4yEXhdhVlrmprXLsggJRle9QeA5KRO43h0QSgounvKPQogGCRoiM%2B1rgOAqJ9NGWh%2BSeQPZWpZNuvPQIAixyzEA%2FbLOVGrDl8odp8PQ0t2SmQBdzfK6lN8ub8PNbYXoYyOJKCZH1P6%2FS%2F1x3AaFBOp1RzlXqJZ7ikdZHHNvY4qZdrOGogpSFpu3efrIZwVHArIHV9lXVCC3i9brhxbQAIxOueG%2FKHBnHaVECSTUHsF7ltn%2Bw%2FoWn4MW9hhSIf22T4Ht%2BkYhuilT59Kn0USZaYMVHPC2fgEmYpRN%2F5WJUqc3JlqwNQnynsJCHMB4THtC7rJS6qD4Bo5zkQnCdbsJkJMR6f4F%2BmovBJLrGlU64teEagczfNTXnZYeV%2FsVKxrB8zh7FLGtU4IOltMZ%2BU%2Bwuu0vLMLYwYzD0FUIwqJYFedckRglf6FlCFMOQw%2BIbawwY6pgHOdlwQtZebXP78YtuWZpIdsOF0tdQrriK%2FbKJfp0BB3Qfb5hyBqFdUk3gXmc%2FkVrIdxclnG6pSxqYmiov2zQtcwR51GsZlHH47cawMiS%2FwTTptXaY0%2F2GOcyOJX3wEV2nUPo7VoAqYccZmuUL87rIMyXyJZVCw3DhrB6f2eaGg17xVvbv8eCNSvuSjmqSvWWGFLLSV2A2KEeorp7Ak%2B%2B9cbDeWXuf8&X-Amz-Signature=1812d879e4e06187529a8d09e2c953e504f404f8a0f070393b1b493b6f091584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRBLWTF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIGHPjem8whrglCEbQwsrz%2FzK%2B%2Fty9e0RUfNlLAwHILkEAiEAryIExTnkMWF6aG95DmQtKsM0RDe7vIeNHADxasDAJC8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAdZktRujDj%2BcTKg3SrcA6CrK30WSADXQyHzGmgZpJvw9hmX2NZYWea%2B61c%2BHVt2FRuB%2FeqwkEbRHIwHo5MwJfcHBhSA7twzgoy8h9sSDKPwqFYMDmJkvElak%2B4MYZLwRymRG056TZyAfOVNKXlTcaITBK5s8mBUx8Sg3sXiKME4ij%2F%2FQD5jVEWmJuaYBJcWw2oQoQn4sHqVUk5sbQVJ%2FI%2BkEtbksV1uhITRSjvX4NFq2aF8fnOUVdc19zNgaPeRmuWmN3RtXz9WkHf8PJw2U%2Fz%2FMEpPRguG1O2EGYdmfI3L9Wj%2BhZJaXfuqWBE29jeqE3VfH2ao2DHQ%2B41BMaJ%2FTMrKPYYymSYvtFLwNGr7oYvgfcdiNkjvbxpa3l9Y9AR2DZMZo3GkqgZ3P5HNJ%2BOK3wsH88N3Er2qhCdXKPCyPf%2Fm7xPD%2BmygaqEe0s4N0bI2%2BwZwP6tpiKeB2QjOyroh%2Bzz%2FLssYr4l4PpHzn6ZWDG6t52MAoPdqB8pe4GNeh4Wl8IHNxcVcIvIo7oPVJS0hiIhcthZ8ISSKSwjgeSp3lbhRnqBLxegUeK95h%2FHmS6IqXPZIFfCVLy4LY7bb9J91nryVZ4P6K%2Bo38RiqIz9AI%2F4eNKkwH5C%2BTaUguXrEM9r9wq3sFfvffaP%2BAKdbMOqG2sMGOqUBnWCb8NTER9O7uzt0RLIIEe9PQ0zPHAI6bYjwYdb5yF9%2FEECo1T47F3qBQ%2FeDpxVnR%2BrRlyv8keJFosW3C2tVqWz9wSZMG5bQ%2FQT7FRC29Y1pi4vVvlk4ZHTvCYN79UUOrQFFYjVT71hiSFjcbsQ0MInr%2FtKUzpkHPHpkrfgSmHrG6lkkC7YP9ZWE41re%2F%2FutstOhII%2B4GNMUGnb62FoO3b9bw8V%2F&X-Amz-Signature=70f523b4e7689f17b1f93cc0c74fe3714ea92e80e1c613eacfa2bd98c95a16e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRBLWTF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIGHPjem8whrglCEbQwsrz%2FzK%2B%2Fty9e0RUfNlLAwHILkEAiEAryIExTnkMWF6aG95DmQtKsM0RDe7vIeNHADxasDAJC8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAdZktRujDj%2BcTKg3SrcA6CrK30WSADXQyHzGmgZpJvw9hmX2NZYWea%2B61c%2BHVt2FRuB%2FeqwkEbRHIwHo5MwJfcHBhSA7twzgoy8h9sSDKPwqFYMDmJkvElak%2B4MYZLwRymRG056TZyAfOVNKXlTcaITBK5s8mBUx8Sg3sXiKME4ij%2F%2FQD5jVEWmJuaYBJcWw2oQoQn4sHqVUk5sbQVJ%2FI%2BkEtbksV1uhITRSjvX4NFq2aF8fnOUVdc19zNgaPeRmuWmN3RtXz9WkHf8PJw2U%2Fz%2FMEpPRguG1O2EGYdmfI3L9Wj%2BhZJaXfuqWBE29jeqE3VfH2ao2DHQ%2B41BMaJ%2FTMrKPYYymSYvtFLwNGr7oYvgfcdiNkjvbxpa3l9Y9AR2DZMZo3GkqgZ3P5HNJ%2BOK3wsH88N3Er2qhCdXKPCyPf%2Fm7xPD%2BmygaqEe0s4N0bI2%2BwZwP6tpiKeB2QjOyroh%2Bzz%2FLssYr4l4PpHzn6ZWDG6t52MAoPdqB8pe4GNeh4Wl8IHNxcVcIvIo7oPVJS0hiIhcthZ8ISSKSwjgeSp3lbhRnqBLxegUeK95h%2FHmS6IqXPZIFfCVLy4LY7bb9J91nryVZ4P6K%2Bo38RiqIz9AI%2F4eNKkwH5C%2BTaUguXrEM9r9wq3sFfvffaP%2BAKdbMOqG2sMGOqUBnWCb8NTER9O7uzt0RLIIEe9PQ0zPHAI6bYjwYdb5yF9%2FEECo1T47F3qBQ%2FeDpxVnR%2BrRlyv8keJFosW3C2tVqWz9wSZMG5bQ%2FQT7FRC29Y1pi4vVvlk4ZHTvCYN79UUOrQFFYjVT71hiSFjcbsQ0MInr%2FtKUzpkHPHpkrfgSmHrG6lkkC7YP9ZWE41re%2F%2FutstOhII%2B4GNMUGnb62FoO3b9bw8V%2F&X-Amz-Signature=8e3c25204d0e19e3a9dd0acf8af7dfe44cc2e623210098b676fde0805147dc4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRBLWTF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIGHPjem8whrglCEbQwsrz%2FzK%2B%2Fty9e0RUfNlLAwHILkEAiEAryIExTnkMWF6aG95DmQtKsM0RDe7vIeNHADxasDAJC8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAdZktRujDj%2BcTKg3SrcA6CrK30WSADXQyHzGmgZpJvw9hmX2NZYWea%2B61c%2BHVt2FRuB%2FeqwkEbRHIwHo5MwJfcHBhSA7twzgoy8h9sSDKPwqFYMDmJkvElak%2B4MYZLwRymRG056TZyAfOVNKXlTcaITBK5s8mBUx8Sg3sXiKME4ij%2F%2FQD5jVEWmJuaYBJcWw2oQoQn4sHqVUk5sbQVJ%2FI%2BkEtbksV1uhITRSjvX4NFq2aF8fnOUVdc19zNgaPeRmuWmN3RtXz9WkHf8PJw2U%2Fz%2FMEpPRguG1O2EGYdmfI3L9Wj%2BhZJaXfuqWBE29jeqE3VfH2ao2DHQ%2B41BMaJ%2FTMrKPYYymSYvtFLwNGr7oYvgfcdiNkjvbxpa3l9Y9AR2DZMZo3GkqgZ3P5HNJ%2BOK3wsH88N3Er2qhCdXKPCyPf%2Fm7xPD%2BmygaqEe0s4N0bI2%2BwZwP6tpiKeB2QjOyroh%2Bzz%2FLssYr4l4PpHzn6ZWDG6t52MAoPdqB8pe4GNeh4Wl8IHNxcVcIvIo7oPVJS0hiIhcthZ8ISSKSwjgeSp3lbhRnqBLxegUeK95h%2FHmS6IqXPZIFfCVLy4LY7bb9J91nryVZ4P6K%2Bo38RiqIz9AI%2F4eNKkwH5C%2BTaUguXrEM9r9wq3sFfvffaP%2BAKdbMOqG2sMGOqUBnWCb8NTER9O7uzt0RLIIEe9PQ0zPHAI6bYjwYdb5yF9%2FEECo1T47F3qBQ%2FeDpxVnR%2BrRlyv8keJFosW3C2tVqWz9wSZMG5bQ%2FQT7FRC29Y1pi4vVvlk4ZHTvCYN79UUOrQFFYjVT71hiSFjcbsQ0MInr%2FtKUzpkHPHpkrfgSmHrG6lkkC7YP9ZWE41re%2F%2FutstOhII%2B4GNMUGnb62FoO3b9bw8V%2F&X-Amz-Signature=a796b1971ec8fa58f1f699e09707541b0364f575f012999912c429a23557de41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VYDEIB2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSO4JDgnSfJA9DPSpyOvY%2B4SOY0jlW6O1wnw6Sw%2Bxy4wIhAIL3VPca1DY30hAFMPw8XQu%2BeA45zN0unR0mP%2FEQZGwJKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzH38nuEv8GSoRO%2Foq3AO2j9j7mjOJRf5nb218LlI9NOmMQZft1L9y3WHHa6WWP%2FeCmxxbJ9XuqDCPcgQkN%2F06XSJPM5aE1mSeiOaiebEkeWAEFmOPQi1Z%2BAQACCJfZaVkS1r1wnBUpwuHH%2BFPdf6GLty4ya91W0ColvgZgaZPR1WzL%2FOh2GzH47rh2Jz3eLmgWr6nCUHljXZtpCSS2ug35X5C22Ha%2B9w20gnBkdjLZ9b3hM%2BaTU%2Bf05rKLvXmiTcyZFS3Wndh0VVwsntXNp1zn7sBlxI%2BPYwMYKeH49MMj3wnqyhJ6L%2Bes39IaU%2BqYjmoSINOpG94PDv6UJSL1Dq1KQ3TwROUAeVro6E6TZrVAQxpzAySCJv9pRMPon%2B1P5YfLw5ldMUGzgfVyc64871i8N3lzz83ydudmyS39ddVKsODVDxwEC4uqNeLMn0OkBhBN20g1%2FFCiJnFLucVGZmDt6O%2BFXCyTzOYuwCVBp6w6TTTRDFOg%2FC%2FuTTYg%2BL6haEy1kSt33m%2BSiCRrS15FT39PeeKueiBS7%2BMZBDZgGnNjeVIVsKkhbBNBQYQfgB9nkdPIAZq01u5UX4rcgwu3u1KikuFJxynipZB%2FywNQ6ut6Vwnv4YGVq9yeTVoWWwR1TJOWemiyXVClXwJJDDA9LDEBjqkAWEDzf6IhmVK%2FZYbsgsTdf1NzbB%2FvVWs4VC9K5XtnsqZHb3PVsp%2FRiYF4s7MlGHLVDudUEt7RRPN3l7LM5%2Bo76hyuBvN7PDquTAUuOxKe1nfM%2BgMTYNGfhP%2FLxYQzkyQQf8VWlQ4%2FZV5tZEwFnqc4LKtf1nuBtgNJYW7HG9nx2XLBhPzOkWokyKsYVrR2sgfDi%2FjeUboANqN3iQj%2BP9dsWJOhQI3&X-Amz-Signature=2b22061a561bf1275a47a34fd21c7f949676a66315d2f933f8a250e7c4e3ca13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGX3DXOZ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDD79RZGYmNFhPI5t5e2SqjvxP%2BRcKXuTXcgTLsSW7uuAiEAnUzbqVa2NbgHl9rq7bwPY9W92femj8eHBZbIhUbyof8qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8egKpyiypTnCT%2BXSrcA4%2FS8fX171pizsY7xtXQbpXdoM1oB3KjSWK0IjT08gvMGUJeEGgiMkIjUbr4JiUJumYdn8ZHVDY%2BLbrdTtVSltZqK4EqsUZ3uyG%2FrkhMMzxu5Q2BafduGTZiq1znJIRGuHla6%2F1%2BXjZd7tKyr%2FTyUxLgbWO1nqI5slu%2B3F88a3HxEJFycUOnsWWeJyEONKCKCY1%2B37HM%2BxtpU9MHOt8WKmnzT7rOdNklx0LbG8yJpuqVlztwcdEc6BeRHpqXwVrArtxDSgUFA%2Fhvtm%2B3S6IWWur31qRaNQ9Lyom9Y%2BhErj4AQnd6HwxHW1DMtU09YSJ5X767wzXA19kQ8G3hNv4qFv9L4kQZciVrH61K9DLaBA2Xedz8kh7%2BWWqwI6vyfydBTmqkYitHbfELXAjmBW5UacnLmdFs2Np22AfARFDs9ZlY2h8Z2FU2Wm9BVyr646zn5wjT5jJM944zA4YX8n6wDZZB0qzxF0LKCd0E%2FpPCWbAhBf%2BKy3jKqWW5S5cxtRytB1xNO7dh%2FcX5xYlE3sGVKPFILfx1sDZjGbIobF06ktUXlDKKoK90EHFYnPcovRGV8TF6h1%2B%2B710fxiEbbiKeV7Zy6Xpf6QYz3rkQTMZ524Q9P02KvjU90QFFhPt1MJL1sMQGOqUBE%2FEg7nD9YLVB5VZ3BX9RfV09aMTk5ujjcC4OADRPcmu1afW2sfJcrWlzgibwNUTVUJvV1SqksIY%2F%2BJpvv9kzxVYt3lMzRNhxrkGcWMxeiiHSgkbN7AYW6C3Gsbvquu6n%2FHN1wpJYODKAzWTsJhHhpH1nNCCzVQplG2kUfhXql6whVTUERwfqQzoBZazWQxQFqyQu%2FSx3R67A4saq4xJrZ6pDea5r&X-Amz-Signature=03c2f0345e6c00c6fd99eee99f6aed4d9fff98dc575cff3f9efa3d2fb660ed68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGX3DXOZ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDD79RZGYmNFhPI5t5e2SqjvxP%2BRcKXuTXcgTLsSW7uuAiEAnUzbqVa2NbgHl9rq7bwPY9W92femj8eHBZbIhUbyof8qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8egKpyiypTnCT%2BXSrcA4%2FS8fX171pizsY7xtXQbpXdoM1oB3KjSWK0IjT08gvMGUJeEGgiMkIjUbr4JiUJumYdn8ZHVDY%2BLbrdTtVSltZqK4EqsUZ3uyG%2FrkhMMzxu5Q2BafduGTZiq1znJIRGuHla6%2F1%2BXjZd7tKyr%2FTyUxLgbWO1nqI5slu%2B3F88a3HxEJFycUOnsWWeJyEONKCKCY1%2B37HM%2BxtpU9MHOt8WKmnzT7rOdNklx0LbG8yJpuqVlztwcdEc6BeRHpqXwVrArtxDSgUFA%2Fhvtm%2B3S6IWWur31qRaNQ9Lyom9Y%2BhErj4AQnd6HwxHW1DMtU09YSJ5X767wzXA19kQ8G3hNv4qFv9L4kQZciVrH61K9DLaBA2Xedz8kh7%2BWWqwI6vyfydBTmqkYitHbfELXAjmBW5UacnLmdFs2Np22AfARFDs9ZlY2h8Z2FU2Wm9BVyr646zn5wjT5jJM944zA4YX8n6wDZZB0qzxF0LKCd0E%2FpPCWbAhBf%2BKy3jKqWW5S5cxtRytB1xNO7dh%2FcX5xYlE3sGVKPFILfx1sDZjGbIobF06ktUXlDKKoK90EHFYnPcovRGV8TF6h1%2B%2B710fxiEbbiKeV7Zy6Xpf6QYz3rkQTMZ524Q9P02KvjU90QFFhPt1MJL1sMQGOqUBE%2FEg7nD9YLVB5VZ3BX9RfV09aMTk5ujjcC4OADRPcmu1afW2sfJcrWlzgibwNUTVUJvV1SqksIY%2F%2BJpvv9kzxVYt3lMzRNhxrkGcWMxeiiHSgkbN7AYW6C3Gsbvquu6n%2FHN1wpJYODKAzWTsJhHhpH1nNCCzVQplG2kUfhXql6whVTUERwfqQzoBZazWQxQFqyQu%2FSx3R67A4saq4xJrZ6pDea5r&X-Amz-Signature=544b722f0fc4be7c039980c446aca751330e707905c0ce58fce8ccd2426a9fa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGX3DXOZ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDD79RZGYmNFhPI5t5e2SqjvxP%2BRcKXuTXcgTLsSW7uuAiEAnUzbqVa2NbgHl9rq7bwPY9W92femj8eHBZbIhUbyof8qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8egKpyiypTnCT%2BXSrcA4%2FS8fX171pizsY7xtXQbpXdoM1oB3KjSWK0IjT08gvMGUJeEGgiMkIjUbr4JiUJumYdn8ZHVDY%2BLbrdTtVSltZqK4EqsUZ3uyG%2FrkhMMzxu5Q2BafduGTZiq1znJIRGuHla6%2F1%2BXjZd7tKyr%2FTyUxLgbWO1nqI5slu%2B3F88a3HxEJFycUOnsWWeJyEONKCKCY1%2B37HM%2BxtpU9MHOt8WKmnzT7rOdNklx0LbG8yJpuqVlztwcdEc6BeRHpqXwVrArtxDSgUFA%2Fhvtm%2B3S6IWWur31qRaNQ9Lyom9Y%2BhErj4AQnd6HwxHW1DMtU09YSJ5X767wzXA19kQ8G3hNv4qFv9L4kQZciVrH61K9DLaBA2Xedz8kh7%2BWWqwI6vyfydBTmqkYitHbfELXAjmBW5UacnLmdFs2Np22AfARFDs9ZlY2h8Z2FU2Wm9BVyr646zn5wjT5jJM944zA4YX8n6wDZZB0qzxF0LKCd0E%2FpPCWbAhBf%2BKy3jKqWW5S5cxtRytB1xNO7dh%2FcX5xYlE3sGVKPFILfx1sDZjGbIobF06ktUXlDKKoK90EHFYnPcovRGV8TF6h1%2B%2B710fxiEbbiKeV7Zy6Xpf6QYz3rkQTMZ524Q9P02KvjU90QFFhPt1MJL1sMQGOqUBE%2FEg7nD9YLVB5VZ3BX9RfV09aMTk5ujjcC4OADRPcmu1afW2sfJcrWlzgibwNUTVUJvV1SqksIY%2F%2BJpvv9kzxVYt3lMzRNhxrkGcWMxeiiHSgkbN7AYW6C3Gsbvquu6n%2FHN1wpJYODKAzWTsJhHhpH1nNCCzVQplG2kUfhXql6whVTUERwfqQzoBZazWQxQFqyQu%2FSx3R67A4saq4xJrZ6pDea5r&X-Amz-Signature=64cd4bedb54614ff49fabe382b0448ebaa4deefb748301c37951444eb975a14e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

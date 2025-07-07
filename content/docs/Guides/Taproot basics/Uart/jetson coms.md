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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MKOH7OA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIF%2F5kXMNHxuQ1k7a7sj2nfuHHWAWOSkZR%2F3WBrDhVhYbAiB9uVEAfqs14Tgd29h8%2FDbJcdX80Ar5UDige3qXqDKWvSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM%2F20CL47bPfFmdSCgKtwDNQe73hoATaIh0q7nIcoLz0%2FMI%2B8EiescM0hMWxWUYrnktS59GvuDVHPD1P2o2EXw4geBisgS3GmmuX65%2FyWT1OAzHfbMmivBQyAewLg%2BToNBH79Y8qguHoKawPdyYa3VVqGVk7nXhegqwMVSdVN2txZ2TSkSRKvxcl2YcwgRd%2F38aTSnRN2ifNQUEKIwGre7CFoiptmmJc%2BmUvrWl3Gefal%2FNNhv8L4hNltr7klvcdAVB4P5cOgYs7NNGjz2oRoK3b9pBVio5Efjgj%2F5KykmPGauv3h1Dljs%2FS47btVgOZIVnYbRS2JZAbbk%2Bl4pU5MKVA13LpVSQnrjm6t4VWwsFqsyaqPgOquwCi%2F9CQwqjeR%2BgT0syhbZGyQaaHz8xtajmkHB3F1GMDwKBEiLBTZeBKo4uJlZbMqGT8PsAnjuVTSAcyCK%2Bc1RattT3mtp2kg16n0vBL9kkNSpb1au7qvrnmfhjvpG65VWtGe4DXNrV3NlMZTNBE%2BmiHATXcrr13UIV5MAeVKnqRo9YCLUcIMhTmXC0dQIkrMo2%2F5z4RN298mGkyk4SrAQWo9Z4w%2Ban19DzqlAJRVGYd4Z%2FjEsBJfWFr5RZ7mO%2BXn2FS%2FWrlKNx5UFqpwTEdvC7deJSBgw%2F56twwY6pgGmBy26GY0RbOKIDY9GipaWRr8Xug%2FEjr2krp0dC490VYP5aaomgERONbbVA%2FaBzmhy%2BDx0m7dDsNXPTwKOkt5kKfOab6oNooD2hg5%2FFqjpz1CiegaGLBBaE8%2BFz9ABwN0%2Bxlw%2FBlIBmPpGMH32xg6L050%2BoVw7p3HHqYncb8K%2FCLaVNR7TnPnSA1b1nO3QAGyP0afKXk44H0Tp1XUdo83BCjAc2EIx&X-Amz-Signature=4156717982afdbc7a75f39a31240fc1ce43fe3f2289d80d332e06acd09087bae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X425E6BE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHH67DeCguxuReF5hh9HnU%2BsxW%2FCjTwpeLTu8bMPRkqZAiEA5Sef7Ulr5ML27KG6acne3QUCPkv6aNLpUV1JzxiSgMIq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDJFAT%2FFyKcJxJ0n6pircA%2FGjAeFb%2F2Je69w3T3Ij0AKZYfIlJP9I1B5nf7slHnRp54qK58f7rOWa33U3K5bJDL8HW6rsNh2dNaDBeFm%2Brd8wNrJs%2FMIZ2Rr%2F7oe6K87x9yB97duj76iwp2Wxaahz2uy21dqJoQNnm0YUv%2BOvYWzoL1I6p0kxe9ZLDnC4NVw6H4MbO5ajeH565NUUDB6dQqQeJdUlTVvju1W4jq1IfiizqmtyTup2%2FeznGjou6y4zqt%2FtcXluxPJHT0uRlEDCOzsyRkKO7%2BOw%2FhSOaBxAUqFkrDFGeQ9OMeKLSJ8RGOZ0TGCKkqWnXcsYNQJCr%2B3g%2B79xV2iSDnI70Klg5t5klXIharj%2B6tC7C2HJXRGIaGFfIcTyzka422RD7k7dQecvxhNpce8W6WG31Akqhy8geGjeyjh12S%2BPAsVQkexUaHJS7oWk8GfQI%2F9fmKLI3%2BQj96poDL1qE%2BSohvVyQNsI5BKetc42BQOi2Pvf5FDIMqJ5eDlOdyKW%2FZWJ759OJXD1Lt7RxsmjqnLf5PAzOdfY236wWg2Wfuf8CGoJObSaOQZVwXc7JfxQlJSLCF5XcXCYlyYCc9RHsGkiRqXjn9gxmMw5bAG9Gc18aD0TCB0Iz%2FGILK9IxXdRdL3POxk3MOedrMMGOqUBXkuu4LBmczn75rPP7g2dgCIj8JYpMRPHzGPCgONgpD%2BvM9FcxYTzbF171%2FYYWBOPWpuQ0cgBwoRxK270ennVO2mrGRh61LOxHDQYErKraxZrA1dNJU8JFcBuTmzc04Gz8p5bPVVm8%2FiC5yQq8%2Fool3mF71oohvw92R%2F%2BONIHProei%2FHEUaiLeog04Cty9JKRema7VGI0iUGl8VvUnxplZWQsuvUH&X-Amz-Signature=c02bb2346dc8bb3eeb3ba9ba7a149197f81ca1a770a40461367e9d6941a137a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X425E6BE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHH67DeCguxuReF5hh9HnU%2BsxW%2FCjTwpeLTu8bMPRkqZAiEA5Sef7Ulr5ML27KG6acne3QUCPkv6aNLpUV1JzxiSgMIq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDJFAT%2FFyKcJxJ0n6pircA%2FGjAeFb%2F2Je69w3T3Ij0AKZYfIlJP9I1B5nf7slHnRp54qK58f7rOWa33U3K5bJDL8HW6rsNh2dNaDBeFm%2Brd8wNrJs%2FMIZ2Rr%2F7oe6K87x9yB97duj76iwp2Wxaahz2uy21dqJoQNnm0YUv%2BOvYWzoL1I6p0kxe9ZLDnC4NVw6H4MbO5ajeH565NUUDB6dQqQeJdUlTVvju1W4jq1IfiizqmtyTup2%2FeznGjou6y4zqt%2FtcXluxPJHT0uRlEDCOzsyRkKO7%2BOw%2FhSOaBxAUqFkrDFGeQ9OMeKLSJ8RGOZ0TGCKkqWnXcsYNQJCr%2B3g%2B79xV2iSDnI70Klg5t5klXIharj%2B6tC7C2HJXRGIaGFfIcTyzka422RD7k7dQecvxhNpce8W6WG31Akqhy8geGjeyjh12S%2BPAsVQkexUaHJS7oWk8GfQI%2F9fmKLI3%2BQj96poDL1qE%2BSohvVyQNsI5BKetc42BQOi2Pvf5FDIMqJ5eDlOdyKW%2FZWJ759OJXD1Lt7RxsmjqnLf5PAzOdfY236wWg2Wfuf8CGoJObSaOQZVwXc7JfxQlJSLCF5XcXCYlyYCc9RHsGkiRqXjn9gxmMw5bAG9Gc18aD0TCB0Iz%2FGILK9IxXdRdL3POxk3MOedrMMGOqUBXkuu4LBmczn75rPP7g2dgCIj8JYpMRPHzGPCgONgpD%2BvM9FcxYTzbF171%2FYYWBOPWpuQ0cgBwoRxK270ennVO2mrGRh61LOxHDQYErKraxZrA1dNJU8JFcBuTmzc04Gz8p5bPVVm8%2FiC5yQq8%2Fool3mF71oohvw92R%2F%2BONIHProei%2FHEUaiLeog04Cty9JKRema7VGI0iUGl8VvUnxplZWQsuvUH&X-Amz-Signature=18fea5f553d4bc10fc3cf0152ae0a03c91f9c40432289b0b913a7c4eabe55b9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X425E6BE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHH67DeCguxuReF5hh9HnU%2BsxW%2FCjTwpeLTu8bMPRkqZAiEA5Sef7Ulr5ML27KG6acne3QUCPkv6aNLpUV1JzxiSgMIq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDJFAT%2FFyKcJxJ0n6pircA%2FGjAeFb%2F2Je69w3T3Ij0AKZYfIlJP9I1B5nf7slHnRp54qK58f7rOWa33U3K5bJDL8HW6rsNh2dNaDBeFm%2Brd8wNrJs%2FMIZ2Rr%2F7oe6K87x9yB97duj76iwp2Wxaahz2uy21dqJoQNnm0YUv%2BOvYWzoL1I6p0kxe9ZLDnC4NVw6H4MbO5ajeH565NUUDB6dQqQeJdUlTVvju1W4jq1IfiizqmtyTup2%2FeznGjou6y4zqt%2FtcXluxPJHT0uRlEDCOzsyRkKO7%2BOw%2FhSOaBxAUqFkrDFGeQ9OMeKLSJ8RGOZ0TGCKkqWnXcsYNQJCr%2B3g%2B79xV2iSDnI70Klg5t5klXIharj%2B6tC7C2HJXRGIaGFfIcTyzka422RD7k7dQecvxhNpce8W6WG31Akqhy8geGjeyjh12S%2BPAsVQkexUaHJS7oWk8GfQI%2F9fmKLI3%2BQj96poDL1qE%2BSohvVyQNsI5BKetc42BQOi2Pvf5FDIMqJ5eDlOdyKW%2FZWJ759OJXD1Lt7RxsmjqnLf5PAzOdfY236wWg2Wfuf8CGoJObSaOQZVwXc7JfxQlJSLCF5XcXCYlyYCc9RHsGkiRqXjn9gxmMw5bAG9Gc18aD0TCB0Iz%2FGILK9IxXdRdL3POxk3MOedrMMGOqUBXkuu4LBmczn75rPP7g2dgCIj8JYpMRPHzGPCgONgpD%2BvM9FcxYTzbF171%2FYYWBOPWpuQ0cgBwoRxK270ennVO2mrGRh61LOxHDQYErKraxZrA1dNJU8JFcBuTmzc04Gz8p5bPVVm8%2FiC5yQq8%2Fool3mF71oohvw92R%2F%2BONIHProei%2FHEUaiLeog04Cty9JKRema7VGI0iUGl8VvUnxplZWQsuvUH&X-Amz-Signature=2c6478586ad83c5c2ad27d15d39404c85e90c4379e30d8f945be03460eebea3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T7RC672%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQC9p1P7SATGFDfPnsnPGz2P3obnvOdmYLB6v%2BbWZ9HcQQIgQCKarThXelK5ycqNZgDS60JaqK8JA522dW39AT1x%2BnQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOyHlH3X1bFlgGiF1yrcA%2BVuZ0f4kxZ8K9GnLE1B8Qpkem%2BTyxMPEDvenXdVsqSx9Glg8TfqfC%2BELLf4DPCwhBM2Xpprhgiz1euddNd91EpyKNSkgjoxkReSFBaLhaWjfjsTTkpXa0C%2FolBDoBP5prJuCpO%2ByyQ%2F0wJiP%2FrrIIeryHDmukpeOrZ7NT5AoUmlj9UmjRVy3mM7yf5n9kla9GyYvAeWLE%2FDFscVG10oOCCK21rmgOxG%2FeXYpIXTjozmY5ux8Lj%2By0%2FRwymyzmq7FxX7kc4boXYBtmLVwhwKZ67oeM0kXWW4069cS5AOYRpVtqeMTGwzUf0Z6jYFgkJb1jDqT89bmSORF7Dj%2Bg2yDNlmn1Ti3k%2BbrManjcU5xToBbuR3UsRoyF57Z5YeYf9vwXU2WcCcB8ytW%2BrsXWXOoiTxLKj1PdA6u1HzWPai%2BaTGpDdL9SAde%2BZf2iqfztLtJadb%2BG%2BtvfOcPyw%2BzV0ebX7MESp5fwrMWAij3C8fxuboaFx6zd3vzV3sPuC85uBMBwENn0lmPbw1crx0z4lTjczAPaMvXsv3VpsKiUV24KB3G9uwTJQFRZGODBnKFqqO4rdgGfUxzImZxG6i6T4qiBz3A4%2FlYhy367P1Gos%2FeVleck72e3RUzmu72mYQMOr6zcQGOqUBTT9BMtLpf1pmrxjpaTE7r7wNS246DUuOJVvjhaFTCsCkPRfeRlm3XbuOySAHV14wTqFRwLwLkkmya6CPaUxKC1NUrrpRRn373C3wLhF%2FedS%2BoFi%2Bs%2FB94dR%2F74nE9RNIzbJSZPdBBQchj%2F4OKBkrXfBw1UglwhrjWid2FAKfA49H7UHy%2Bo%2B9o%2B%2FEhvbzD%2BlU6lIn2CX8dEEYCyp7FQy00aZCSLrh&X-Amz-Signature=f8c3a80a21aa7965384a32ad0da2430daa5155999a5d21dbf08925a5609c578c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBG3T4NL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIFmfzydQBTXApeC3TM%2B24HmvE7Is0jQ44tDlAtMGrmPWAiA3rCRZYrdRcqPoQseV22%2FZUAGfYO4kBBz6G%2FKLDCff7Sr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMp7mnrRHk0uGsG%2BWvKtwD4Sy4t2in1hWDSeO1qa8A9WxCt5Nr%2BQe6bgCuQlwZ3CNDQJ3ujLecpEncf1N0FYRwBkc%2FVuk7ux7wlIk9bJu4czdvyu99%2BJKhoB0b9iqs16wTPbM0yR7BYntPIqB09KvcNKQsHfnZz7oIq%2Fk8QCv2AhI0%2FpDVLjmsPOKJIKWzhp%2FqCAtZSEvNNU7xyeBOSpG8nrm%2Bw4FNyO4kwL6dkORG3T%2FMZPflL9C55VPI2UibcBo8yL1JKQ%2FPAM1bB5VCTGrrOaP%2BCj2ipY4hoaM9FHCLrUsM6XHO%2B7B2ZnM3LdDlaxewxmDLoFl190BseIZnqxcH8CHbOfJjSvTuX4Sk8d0eA2JGY1XkK5tiLqkFHdb43NkJAEqJfW8yblvMjexN0%2BsCW6TyhwxEEcyF5%2FPeLHYqkSdn7dpaacs3k%2FWmwGP25j8zjahbqDb6mIkOWtYizEEnxB0FsXIJ1djiXeS8vubwGkbff3EHFBZRupk62eVVYIhSpn8%2B8dAc6ccuVhd3wSxtWmt9YsyssIY6p8VJBXg4QLQVxtoo5zspTDk9mW3Jhjr0annsbCn6nlwZfvQ%2BXEPsil9qU5FrnGrIFctnJ373b5OEqNJP%2Fwwsma9fKVCiKPkv7IJ%2BL1cdx%2BX3bTEw4%2FrNxAY6pgF1%2BS6fNvqDtejYfdapJxCQo1%2BV%2F%2BqNcDM8DSnJo%2BfZnsTk5MhZtHq074eA612bobWLPNMa3ToBGZKJ15PJFY%2F7sWhENz8THxTgFFxsG%2BrcfOAMxsqnpEP4tHCcKmZIidTUAR2%2FgvYX2GQpMuLOn51bS%2Frla%2B30clGLTnaVdq3%2BF3oiQgCQG%2Bza4LYbpL9aj8rGz4mIUjXCQ3YlNo%2BA8iX3QWHS5ozN&X-Amz-Signature=e3ee57d3c2c5623149ad2c7e4dc20438b2f0910297aee9ab2bb1c7e1c6a18511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBG3T4NL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIFmfzydQBTXApeC3TM%2B24HmvE7Is0jQ44tDlAtMGrmPWAiA3rCRZYrdRcqPoQseV22%2FZUAGfYO4kBBz6G%2FKLDCff7Sr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMp7mnrRHk0uGsG%2BWvKtwD4Sy4t2in1hWDSeO1qa8A9WxCt5Nr%2BQe6bgCuQlwZ3CNDQJ3ujLecpEncf1N0FYRwBkc%2FVuk7ux7wlIk9bJu4czdvyu99%2BJKhoB0b9iqs16wTPbM0yR7BYntPIqB09KvcNKQsHfnZz7oIq%2Fk8QCv2AhI0%2FpDVLjmsPOKJIKWzhp%2FqCAtZSEvNNU7xyeBOSpG8nrm%2Bw4FNyO4kwL6dkORG3T%2FMZPflL9C55VPI2UibcBo8yL1JKQ%2FPAM1bB5VCTGrrOaP%2BCj2ipY4hoaM9FHCLrUsM6XHO%2B7B2ZnM3LdDlaxewxmDLoFl190BseIZnqxcH8CHbOfJjSvTuX4Sk8d0eA2JGY1XkK5tiLqkFHdb43NkJAEqJfW8yblvMjexN0%2BsCW6TyhwxEEcyF5%2FPeLHYqkSdn7dpaacs3k%2FWmwGP25j8zjahbqDb6mIkOWtYizEEnxB0FsXIJ1djiXeS8vubwGkbff3EHFBZRupk62eVVYIhSpn8%2B8dAc6ccuVhd3wSxtWmt9YsyssIY6p8VJBXg4QLQVxtoo5zspTDk9mW3Jhjr0annsbCn6nlwZfvQ%2BXEPsil9qU5FrnGrIFctnJ373b5OEqNJP%2Fwwsma9fKVCiKPkv7IJ%2BL1cdx%2BX3bTEw4%2FrNxAY6pgF1%2BS6fNvqDtejYfdapJxCQo1%2BV%2F%2BqNcDM8DSnJo%2BfZnsTk5MhZtHq074eA612bobWLPNMa3ToBGZKJ15PJFY%2F7sWhENz8THxTgFFxsG%2BrcfOAMxsqnpEP4tHCcKmZIidTUAR2%2FgvYX2GQpMuLOn51bS%2Frla%2B30clGLTnaVdq3%2BF3oiQgCQG%2Bza4LYbpL9aj8rGz4mIUjXCQ3YlNo%2BA8iX3QWHS5ozN&X-Amz-Signature=e88987453f3709a2796d753fb87be1aa095c7b33ad1ace29c9fcbe119121420a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBG3T4NL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIFmfzydQBTXApeC3TM%2B24HmvE7Is0jQ44tDlAtMGrmPWAiA3rCRZYrdRcqPoQseV22%2FZUAGfYO4kBBz6G%2FKLDCff7Sr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMp7mnrRHk0uGsG%2BWvKtwD4Sy4t2in1hWDSeO1qa8A9WxCt5Nr%2BQe6bgCuQlwZ3CNDQJ3ujLecpEncf1N0FYRwBkc%2FVuk7ux7wlIk9bJu4czdvyu99%2BJKhoB0b9iqs16wTPbM0yR7BYntPIqB09KvcNKQsHfnZz7oIq%2Fk8QCv2AhI0%2FpDVLjmsPOKJIKWzhp%2FqCAtZSEvNNU7xyeBOSpG8nrm%2Bw4FNyO4kwL6dkORG3T%2FMZPflL9C55VPI2UibcBo8yL1JKQ%2FPAM1bB5VCTGrrOaP%2BCj2ipY4hoaM9FHCLrUsM6XHO%2B7B2ZnM3LdDlaxewxmDLoFl190BseIZnqxcH8CHbOfJjSvTuX4Sk8d0eA2JGY1XkK5tiLqkFHdb43NkJAEqJfW8yblvMjexN0%2BsCW6TyhwxEEcyF5%2FPeLHYqkSdn7dpaacs3k%2FWmwGP25j8zjahbqDb6mIkOWtYizEEnxB0FsXIJ1djiXeS8vubwGkbff3EHFBZRupk62eVVYIhSpn8%2B8dAc6ccuVhd3wSxtWmt9YsyssIY6p8VJBXg4QLQVxtoo5zspTDk9mW3Jhjr0annsbCn6nlwZfvQ%2BXEPsil9qU5FrnGrIFctnJ373b5OEqNJP%2Fwwsma9fKVCiKPkv7IJ%2BL1cdx%2BX3bTEw4%2FrNxAY6pgF1%2BS6fNvqDtejYfdapJxCQo1%2BV%2F%2BqNcDM8DSnJo%2BfZnsTk5MhZtHq074eA612bobWLPNMa3ToBGZKJ15PJFY%2F7sWhENz8THxTgFFxsG%2BrcfOAMxsqnpEP4tHCcKmZIidTUAR2%2FgvYX2GQpMuLOn51bS%2Frla%2B30clGLTnaVdq3%2BF3oiQgCQG%2Bza4LYbpL9aj8rGz4mIUjXCQ3YlNo%2BA8iX3QWHS5ozN&X-Amz-Signature=b9c87193076aa1f86a7e3af827d24effc288617186cdd1e6f3de321c37f4c587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

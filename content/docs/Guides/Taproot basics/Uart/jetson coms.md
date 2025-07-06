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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNY7K3LM%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDiSuuFzkJNUvQzhPPOfL36FgIcR9fS5dNHwFQtJt%2B4JgIgNNN%2BbRLb6UuR12eCMaFNZiIYL9v6s1aAz9lLSvG0ZJQq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDGSskQizf9lWTFY7eircA7ufL7CDL8y84qAIi1pjVIRA5JcUY9zSigW0paeljAiP9qcl8Ot8gdtV7rx4muQ1IAqurzPo7oHoGxFknPP8JVI0Jb20Cm%2FLHKYZW2bDUfAuSUDW3coYeAtewYKXRlrTnoRA7fAxZX5JiC092%2BkdGJoNKf9X6sATdyS3DltHa74AISd%2Fkx4nIqfcU02BBFZgCljsVk7KBXQpWHL1R2Dem1TawNYx5Hh0R9VxG%2Furxk9hbHBkBRfKTa7Odpx3ORCg%2BXNJvBoG7zXJ5HzdcT7gcQw%2FwVw4qH%2BwF8cw8wu28FsUIUI2FJdtCEj5rey8POeOcifP7EmnSG0QvLhapBMWfa3hfW8sQVhDlsjmor5uBF7BeFt4BY7dp1jjBnB0iTmpchmJmBDVIH4nfaqS3BXAmWU%2BGHkNHUIpzvda%2BcXhd50t0p0WRHfqHhUzhufItybNdVDZvunipiJUzP4xku%2BZi4N1shu5xg3EKLibqTu8oWrBhn%2BDpUfaVTUNPyOWhjvKYkqMEDqI7rB8XnBU63FPlIcjye7X%2FD0eblSOPS5LhCbRXIpWm3dYvbZTMJw%2BXs8uqS2GprZ6qVkVFPRz5hvDNG7Gr69DMQiMT%2B8CTR%2BuKM7OenA%2BFdifNt25LRLqMPbMpsMGOqUBNhDZrnu8VSIUClJ4AV%2F%2FqP1%2FAhjB3IBRe%2FzXhvJykNaFi2v3808pK%2BfTIpd2TpEGv9QAD8nSsRnSY4%2BI27vECtM0zKQ%2B63tM01tFcfvdzdpcNImb7Fh4z6SvrGckrST24ia4TphQ%2F8vKqloWLxMp4yMEaNE74LBRP5kOjbn2DpLnf6N0mA3n%2Bwd2n1X%2FIvfLRrYSN0iXI5Zgdr6gCw6wj%2F0pjX9I&X-Amz-Signature=8c188a255476eea5e3079f01db74cea99a6b820b6f86ddd412feaad5e6e9ab23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AFF6R22%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDtVQ4%2F8UeJCYY7vseGS0oNchXYZiy4oAIJ1hUl9%2FvNogIhAKAbrdpBEvylYCaeZXKlSi8zob2F4VcH9vlKDLGMoI6wKv8DCFIQABoMNjM3NDIzMTgzODA1Igw3n3Q96r4fhMiuEGEq3AM5WGt4oxDE%2FOPC68K65dPzJWkwkvZhhr8FqsJiKcoVEb8f8MZ%2FdQqDebzoO8ZLlzgu4GreH0IhR0E3JDnczoffc78zdpv8vnenVphF7z6ik8UHABZg%2BdUh7v7cN%2FVCoYNpFrvm15CkJaqlPZoPPtGHSStSzjRZBi4tMDnCgMvHufmZd7XCVVi2rOxJ4b9W2KtJh9%2B6%2FU1jG9eMHJHPoql43YvYG2jKZsz93khmfPMjBnx%2FmZ9VYjUO%2FBkdjrRL7FdpvF42ToJB3deoO8oXY2VLND3XSqSB3mWFlcLFs3q6QdP%2B0eoLHFh6EpWdlbA6y5IOLwpKYkqICRvjx%2FcXzqSSZB92fEMO0nw%2FGKR9xAa1gjv1F3w54BWtV6luI42Wmt3gnvXLH8oHJ2K5RyyY14YVzfjnQffvcJvq%2BYGK25z3z5ct0wrcy%2FLKodENVB9cSrl1Z0FTr8HPs%2FSvkmAFebEqpQ1kGtMvyiDHcRnBqP0xUseTn1U%2FfvtOU2HDJ2UVCCbpk1WVTY4h%2F7xOC8yNhYCzGCs3285Kj92PFe05TuTmHJ58E97%2BOZiDX5dpk24TC9qF1HbgVbTvClVj9D2b%2FoQvC%2FYe1kwuXoCw7Ri3ydgY3OnxAi9qYCiiwTY9nzD7jKfDBjqkAbMPV9PeaCbjCe%2FuK050rrd62a%2BpjPDcHR3BuuGil6EFRUJ0k24Hxt6YcbOhY3XF8z4o%2FfCWbLrzx7c21Zl7359RNiF3AWNW%2B6wJOiY1lH%2BwMrWuC68gKDbYPQOMSpwAhq12MMLF5WuNBB7YkKF5ucJj6n7LgOvqx0ZLs1OyCdgvLG9q0w%2F17wTTiOv9B2rLCHcqnOdvj6sYdgAdYaqVi%2FffWdm0&X-Amz-Signature=329574ee6192cd665a406e2dc3d300d9a70be885cb0e16f939c52d8f6404049d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AFF6R22%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDtVQ4%2F8UeJCYY7vseGS0oNchXYZiy4oAIJ1hUl9%2FvNogIhAKAbrdpBEvylYCaeZXKlSi8zob2F4VcH9vlKDLGMoI6wKv8DCFIQABoMNjM3NDIzMTgzODA1Igw3n3Q96r4fhMiuEGEq3AM5WGt4oxDE%2FOPC68K65dPzJWkwkvZhhr8FqsJiKcoVEb8f8MZ%2FdQqDebzoO8ZLlzgu4GreH0IhR0E3JDnczoffc78zdpv8vnenVphF7z6ik8UHABZg%2BdUh7v7cN%2FVCoYNpFrvm15CkJaqlPZoPPtGHSStSzjRZBi4tMDnCgMvHufmZd7XCVVi2rOxJ4b9W2KtJh9%2B6%2FU1jG9eMHJHPoql43YvYG2jKZsz93khmfPMjBnx%2FmZ9VYjUO%2FBkdjrRL7FdpvF42ToJB3deoO8oXY2VLND3XSqSB3mWFlcLFs3q6QdP%2B0eoLHFh6EpWdlbA6y5IOLwpKYkqICRvjx%2FcXzqSSZB92fEMO0nw%2FGKR9xAa1gjv1F3w54BWtV6luI42Wmt3gnvXLH8oHJ2K5RyyY14YVzfjnQffvcJvq%2BYGK25z3z5ct0wrcy%2FLKodENVB9cSrl1Z0FTr8HPs%2FSvkmAFebEqpQ1kGtMvyiDHcRnBqP0xUseTn1U%2FfvtOU2HDJ2UVCCbpk1WVTY4h%2F7xOC8yNhYCzGCs3285Kj92PFe05TuTmHJ58E97%2BOZiDX5dpk24TC9qF1HbgVbTvClVj9D2b%2FoQvC%2FYe1kwuXoCw7Ri3ydgY3OnxAi9qYCiiwTY9nzD7jKfDBjqkAbMPV9PeaCbjCe%2FuK050rrd62a%2BpjPDcHR3BuuGil6EFRUJ0k24Hxt6YcbOhY3XF8z4o%2FfCWbLrzx7c21Zl7359RNiF3AWNW%2B6wJOiY1lH%2BwMrWuC68gKDbYPQOMSpwAhq12MMLF5WuNBB7YkKF5ucJj6n7LgOvqx0ZLs1OyCdgvLG9q0w%2F17wTTiOv9B2rLCHcqnOdvj6sYdgAdYaqVi%2FffWdm0&X-Amz-Signature=d3d7940a4a38e4c81655d6c00625d803dca92455418813bb64224c47f60d0210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AFF6R22%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDtVQ4%2F8UeJCYY7vseGS0oNchXYZiy4oAIJ1hUl9%2FvNogIhAKAbrdpBEvylYCaeZXKlSi8zob2F4VcH9vlKDLGMoI6wKv8DCFIQABoMNjM3NDIzMTgzODA1Igw3n3Q96r4fhMiuEGEq3AM5WGt4oxDE%2FOPC68K65dPzJWkwkvZhhr8FqsJiKcoVEb8f8MZ%2FdQqDebzoO8ZLlzgu4GreH0IhR0E3JDnczoffc78zdpv8vnenVphF7z6ik8UHABZg%2BdUh7v7cN%2FVCoYNpFrvm15CkJaqlPZoPPtGHSStSzjRZBi4tMDnCgMvHufmZd7XCVVi2rOxJ4b9W2KtJh9%2B6%2FU1jG9eMHJHPoql43YvYG2jKZsz93khmfPMjBnx%2FmZ9VYjUO%2FBkdjrRL7FdpvF42ToJB3deoO8oXY2VLND3XSqSB3mWFlcLFs3q6QdP%2B0eoLHFh6EpWdlbA6y5IOLwpKYkqICRvjx%2FcXzqSSZB92fEMO0nw%2FGKR9xAa1gjv1F3w54BWtV6luI42Wmt3gnvXLH8oHJ2K5RyyY14YVzfjnQffvcJvq%2BYGK25z3z5ct0wrcy%2FLKodENVB9cSrl1Z0FTr8HPs%2FSvkmAFebEqpQ1kGtMvyiDHcRnBqP0xUseTn1U%2FfvtOU2HDJ2UVCCbpk1WVTY4h%2F7xOC8yNhYCzGCs3285Kj92PFe05TuTmHJ58E97%2BOZiDX5dpk24TC9qF1HbgVbTvClVj9D2b%2FoQvC%2FYe1kwuXoCw7Ri3ydgY3OnxAi9qYCiiwTY9nzD7jKfDBjqkAbMPV9PeaCbjCe%2FuK050rrd62a%2BpjPDcHR3BuuGil6EFRUJ0k24Hxt6YcbOhY3XF8z4o%2FfCWbLrzx7c21Zl7359RNiF3AWNW%2B6wJOiY1lH%2BwMrWuC68gKDbYPQOMSpwAhq12MMLF5WuNBB7YkKF5ucJj6n7LgOvqx0ZLs1OyCdgvLG9q0w%2F17wTTiOv9B2rLCHcqnOdvj6sYdgAdYaqVi%2FffWdm0&X-Amz-Signature=e62964314a01de4f2f74ff3fa4b53127dc2f14653eb21dd376c3f641d5273699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

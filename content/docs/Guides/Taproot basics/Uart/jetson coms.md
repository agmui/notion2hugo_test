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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A4R4NDX%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIAZmttLb6A7IQbuzPSBSgh5YGCtn93LJFTWmB8eOj5vjAiAjY7A3XrnLZa3GMTTli9mC4Mc9s2zq1XMg7Twc1nqmESr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMoGhKIAxGLwNIe8LuKtwD8obumOz%2FLJNXZm8omXDEBvcn73oB9GNB7OuuLg%2FAGH%2Fos8%2Facd06lKkShYe%2B8I9B8WZ7eWpYkngJ51N4EGlGd7YwhsTdWQycZ2O%2F8kVttXyirZzcbrocpewxEMeV%2F%2FSKStWsuQ%2FcB0i6kppQyTA88gRhkEkHg1lKXOw%2FsDRYg72tfc6G6%2FnPM5E5rxFJuIh6SgjSfnsZAPZbcvPV7zKIkoFHZk36xT4%2BFQy%2FZ4anm4%2BgWUNogT%2F6C%2BCc9OXTbbcF1jIESmpkxs%2Ftg5BamBuj22se7BiZWuOAWlF%2Fyo%2FGk3wRIttapgIQJG8rlJDFJmHPmXwV0I7OvLGzyFeeB8%2BMtyqlDKt617gfVXLpf4kM57E6HOUaO%2FqUg%2BEd28KAina44bGTUT7CxwQXwpfybQLErcpY1Wj7qyhf7KAAG7S1%2B%2FOFxTpR%2BH7%2BZo7I3bgv6ljhMFlXVvY42oHor%2B%2BDtSIvUn%2FBmgcuETnroCmR5nNPQIIV0oE1z1utm4exMAb3e8goJCXMrC04qiGfCBfMR6k5i8V0sndr6johwoVEpVYN0ojMp8WF6LNIKI28H%2F9uAZJqQu4oOzq9EBK6w3oe81scCZ104ceIrrh2tNaocdam5EVzwS%2BdactzAC4Q%2B7Awi9rZwwY6pgEU7rBC2yKvYPII%2F%2FNRbtzNPu5bVdeEbPOhqxqXL9YO%2Beq4y0KydpC0ljkPM3v1jqCPMa2uz3wcbxgDAuxHsLmWTHNejH6B%2Bwhu9fZPtTq0djl7hxL7IgcGTCF5D8d%2B60F8HiYH1F7BE10syVNkZ18Nh6YAnpx5XPdyrLc%2FVs%2Fdr81x4DL8G9GHpPFeFbYsCGNgmygz4QFJfnpKmTKhwrp25k04rcSE&X-Amz-Signature=42aba9a8e3d778c6566525e907fe0151b99e065c66212f91989a2451e94bd210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466745CUBTK%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIFQ8bJLH45KcnScrXDVyF%2B3xaUecXKMn4CzhkIaRavHIAiA825%2FBYO0gRBZgFAVOWJB%2Fnz2o4foYuS9Zr3wrBsXjNyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMAbUQ03hHj7RZGKjJKtwDX1iw6ZVd6eScEoWybFSlYv%2BRnNDF2sH93MIV2pDRub%2Bbw9GTSTGk7GXF4Zphj5rWRWpw3ezZSSny1kyryUy9PfeiA6ZEmCqXsnhzXqWbn%2Fri3lQUh2wnrB6bnnginamFMGn6iZpootKo18PTzQOhivThhOGDqu37f5tuijxD8TCdPgN211RJHgZcvdl7W%2FmPXrQ86NeCN0tuLfKKFla%2B2uWrkxlABTgya0aPGMdC%2F7pNF%2FwXipnzqWJK0qM7pbmV4ujG2jwgi5hQ8lWAUaUUjLh03mxQSHeCEOyKKBikPzo3DqTEN0W5Tq1GL4b5xSdYiiIADzv7qKlkvImJ3JKEuLgD8om7sIFeQtiGBXr7HTNKTGqaebtDtWEipuznAiKB1O3N30aw74HcmS3vr31k5TWkMPvjx3mzqMKI%2BJe2c13xtPR1HtHwXBKW9I%2BUooa7ZhLGsDU6FivCHMp5FC3ZCIz%2Bqya%2B9zM8VvH%2FkI5XZr74IxXVcb6QTbqICP5JfnuK%2FMSWR3Vt21UYUHQe3n0g7ghvhoEqCSnK3V5UNFsN39v%2BlCVSpBt0LQiV2ECDhaD4VdaDQAcMeGTIT9Wyio8udPCgt1i3K51wLWyqaVyTBcs6%2F37mWO1ofd0l8Egwt9nZwwY6pgHAX74vA6dQvNSDV1wSpJ5l2gmCHNZ4wmWGwQDxzXja0GhBTds5vnt1REKXYX9W%2Fp4WqCDkrgi8fSbLFCc%2F7c%2F%2FO3fxzRf9rUzDSCB1lgWZ86GvunhJ85D21%2Bu0iMmM3fngFLlov%2B7wpel3IFH%2Fiw9O1kklZU%2Bt75u8qrUHVX9pC9TybPOjNf8BElQRBLBh4DssXj409efFJo34DoYxpFhnkksRsf%2Fc&X-Amz-Signature=6750e1b82bcb6c28262c28d77ffbb9d335868ec7389f32762c241c1c0a0eee6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466745CUBTK%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIFQ8bJLH45KcnScrXDVyF%2B3xaUecXKMn4CzhkIaRavHIAiA825%2FBYO0gRBZgFAVOWJB%2Fnz2o4foYuS9Zr3wrBsXjNyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMAbUQ03hHj7RZGKjJKtwDX1iw6ZVd6eScEoWybFSlYv%2BRnNDF2sH93MIV2pDRub%2Bbw9GTSTGk7GXF4Zphj5rWRWpw3ezZSSny1kyryUy9PfeiA6ZEmCqXsnhzXqWbn%2Fri3lQUh2wnrB6bnnginamFMGn6iZpootKo18PTzQOhivThhOGDqu37f5tuijxD8TCdPgN211RJHgZcvdl7W%2FmPXrQ86NeCN0tuLfKKFla%2B2uWrkxlABTgya0aPGMdC%2F7pNF%2FwXipnzqWJK0qM7pbmV4ujG2jwgi5hQ8lWAUaUUjLh03mxQSHeCEOyKKBikPzo3DqTEN0W5Tq1GL4b5xSdYiiIADzv7qKlkvImJ3JKEuLgD8om7sIFeQtiGBXr7HTNKTGqaebtDtWEipuznAiKB1O3N30aw74HcmS3vr31k5TWkMPvjx3mzqMKI%2BJe2c13xtPR1HtHwXBKW9I%2BUooa7ZhLGsDU6FivCHMp5FC3ZCIz%2Bqya%2B9zM8VvH%2FkI5XZr74IxXVcb6QTbqICP5JfnuK%2FMSWR3Vt21UYUHQe3n0g7ghvhoEqCSnK3V5UNFsN39v%2BlCVSpBt0LQiV2ECDhaD4VdaDQAcMeGTIT9Wyio8udPCgt1i3K51wLWyqaVyTBcs6%2F37mWO1ofd0l8Egwt9nZwwY6pgHAX74vA6dQvNSDV1wSpJ5l2gmCHNZ4wmWGwQDxzXja0GhBTds5vnt1REKXYX9W%2Fp4WqCDkrgi8fSbLFCc%2F7c%2F%2FO3fxzRf9rUzDSCB1lgWZ86GvunhJ85D21%2Bu0iMmM3fngFLlov%2B7wpel3IFH%2Fiw9O1kklZU%2Bt75u8qrUHVX9pC9TybPOjNf8BElQRBLBh4DssXj409efFJo34DoYxpFhnkksRsf%2Fc&X-Amz-Signature=e79c00c340d1fd6958133fea6c4a350bd50134d82b76c46dcd7b4057daa2ca81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466745CUBTK%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIFQ8bJLH45KcnScrXDVyF%2B3xaUecXKMn4CzhkIaRavHIAiA825%2FBYO0gRBZgFAVOWJB%2Fnz2o4foYuS9Zr3wrBsXjNyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMAbUQ03hHj7RZGKjJKtwDX1iw6ZVd6eScEoWybFSlYv%2BRnNDF2sH93MIV2pDRub%2Bbw9GTSTGk7GXF4Zphj5rWRWpw3ezZSSny1kyryUy9PfeiA6ZEmCqXsnhzXqWbn%2Fri3lQUh2wnrB6bnnginamFMGn6iZpootKo18PTzQOhivThhOGDqu37f5tuijxD8TCdPgN211RJHgZcvdl7W%2FmPXrQ86NeCN0tuLfKKFla%2B2uWrkxlABTgya0aPGMdC%2F7pNF%2FwXipnzqWJK0qM7pbmV4ujG2jwgi5hQ8lWAUaUUjLh03mxQSHeCEOyKKBikPzo3DqTEN0W5Tq1GL4b5xSdYiiIADzv7qKlkvImJ3JKEuLgD8om7sIFeQtiGBXr7HTNKTGqaebtDtWEipuznAiKB1O3N30aw74HcmS3vr31k5TWkMPvjx3mzqMKI%2BJe2c13xtPR1HtHwXBKW9I%2BUooa7ZhLGsDU6FivCHMp5FC3ZCIz%2Bqya%2B9zM8VvH%2FkI5XZr74IxXVcb6QTbqICP5JfnuK%2FMSWR3Vt21UYUHQe3n0g7ghvhoEqCSnK3V5UNFsN39v%2BlCVSpBt0LQiV2ECDhaD4VdaDQAcMeGTIT9Wyio8udPCgt1i3K51wLWyqaVyTBcs6%2F37mWO1ofd0l8Egwt9nZwwY6pgHAX74vA6dQvNSDV1wSpJ5l2gmCHNZ4wmWGwQDxzXja0GhBTds5vnt1REKXYX9W%2Fp4WqCDkrgi8fSbLFCc%2F7c%2F%2FO3fxzRf9rUzDSCB1lgWZ86GvunhJ85D21%2Bu0iMmM3fngFLlov%2B7wpel3IFH%2Fiw9O1kklZU%2Bt75u8qrUHVX9pC9TybPOjNf8BElQRBLBh4DssXj409efFJo34DoYxpFhnkksRsf%2Fc&X-Amz-Signature=e497e88515361315d3357233262db2631b8ee59efb3ebe34dcd23cdc37619c61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

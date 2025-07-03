---
sys:
  pageId: "223da3bc-6297-80a4-8291-ecdfafcf7da0"
  createdTime: "2025-07-01T23:33:00.000Z"
  lastEditedTime: "2025-07-03T02:56:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Uart/jetson coms.md"
title: "Uart/jetson coms"
date: "2025-07-03T02:56:00.000Z"
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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQKHDTW3%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIEIv9VQI7Lp%2BVSK50Qf7R%2BeqEyFvAdPb0iOe0SpsKwvYAiEAhCAjPHTzzohF5iX7KBc%2FqsSqbsVX9wYUuxhucSyAstkq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDEt%2FWkkVcYAjECJcTSrcA1Ff5D%2Bh4t%2FZH8jssBJBNsGPbtFERj8CMRIhOqGWVUSJn2%2BfiRHI74F%2Bn4y16FI%2FHFv9kJaqIKKj2JcuAM1a9KgrkP10V%2FCw%2BJkbJcjHmATfENOLXREII%2BMwA5MC4m8brN%2B7GMqWosZvSjpB72rqAu1h070k54RJvSFMoUJXKAwpYusbfBFAwnJWRBTgghdzFWyRKO4zrQqmChptf%2FD8vUwce5yeKs6nNgOAM1rQ1sJk1COdxHtYg%2Bp3Xw8cwX6hV0O2IynUcae0Wk2ip4bqLEwtklJrGmaqsMf%2FfodmcrEdCr6Xx5%2BNA%2FtfNiamPLwW5hmuZwOkg5Uv%2Bb7JUuXOwAPIoiK6Hc3yB8KQbaSF6PHI3t%2FWU1hTkZAQP4pVTApOYAxdqfMxz8m5A%2FtQVWeN0dzv7WDIHw7RFwCA6wqro%2B4psS0%2BSn6IotFjYMdGGsG8Zbx1D0bzFmmGjF8Eugn%2FgezCwjMFa%2BkXUQ1tXUhcPBaSXQvztOq0JlfqtAezcqHePvKvpzY%2Fr%2Bkibou98c%2BlL5GL%2B%2F2rbbuxH2IHefd6og97dpsY16brrIf0rGPzEPrrAE3QcE8VlifHynHJ7PM62mmbhztHDySN6GEO9kq7193OjMZsaMBzaopFF0o3MJa6msMGOqUBJLBefF2QuiWp%2BguYbyYbqO9cULOW5VYsI8uYMHeDMRp69zqWLp9a%2B9UVcfrB3i9RJmW4g485ZOGuG1VeK9JdIjG2elLwtwT6BAO4trXZpNUkR9B8wwBhGltuHmkyK%2Fg3rWrq7IRP47I1tUcRI6fE1X4V9mNBp1RzqKOTRfL4jUpkyExktwTcUC%2BApG3OCTV%2BfHJi0SGj7TExFPt1D9mS7TMlSVtS&X-Amz-Signature=71f57163b263cf2df5d4ee120ec067137c8a3bf89a97b1d4bf3dd503a60c52b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTSK3AUP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQClwX4zcGpvKcQCjJQQSck5HgE37q624XFlK86ZG5lv8QIhAMYe%2F8JmyGU9OTixqIjSSJyTOwVVTEcphW8Zkynpp3LxKv8DCBgQABoMNjM3NDIzMTgzODA1Igx0n%2B4pXTbJR81zDdkq3AOZf3U%2Blb%2BarCyMbK4XoNaaLTcYKoqFaMe9KtF%2B5p4uNO4jCTl6TmW%2FuINhNGbAtaUp3JaMypxO3MVbqxG6xe9FUeJ%2FD0LklTRLdvWKzIZJXftefF6nfWOOBD%2BDbbFrGIwv7eddql3pKhJO5%2FyJYm4i8OYdsJwYp0MkCjgkjl2WYTxtFIJM9KIBPF9kmbd0NSDpGnKf4g32xP043QtQ2G3ey6Vi8ows7BshfC9DlT3oSYI25YCxxlVwnJeH52qGxjSILIf%2FcDdrzZ4yAR9fzkmp%2BZQ4aPGNjaObAsiXnjvgjyBVjYHD9ufOxXEPI%2BE3n%2B%2FhnKheG4DnVZU4gTedHH3tyCaEmlBKeC8UPk4n5UBzn39wcbhcVT9h%2FOAKMzCmbgxJluSX4mRy5BxjtIzXyhHcpVb9d9zQhhxeE%2BZCdDpnurXcGlLtQpOOz21bA8vMjga9%2Fxn1ju39%2FnEg7WjSn1nUJhwRuAl16BhpuP2l7uL83IWlF1FpVo2FGSZDIF7vcADdBCobUt1sdOprlRjTKm8z%2FYXKyr8s%2B3wQo64LQcNMeUdVsOCALWnAWt%2F3ftwBIn%2BI7toLOvcOyY9azzXQbItgEWXMK6fb2Fy9ZPo6oCShgdVDVbwXoWxpwCiVwzCuuZrDBjqkAYlOmMqdYMzSmD8hx%2F%2FaorGBOWYN829I3wKWiPeADzFoKfzfgqm9FyBxBoIEgSaTaS4gyXmpHJWdVDwL9iVo9N84TGOLgIwsDWlGwCgyAVRRvbDdRey%2BoIWe163ngOIpGOs%2B0JMxJiDVd%2FME04bAuQhksEj7BbPYphjrRzy0VKd3G1gV1GMpUHgtcXsCp20WTSJh3fd%2F57Wso7BgyWeu90Y%2BlOMZ&X-Amz-Signature=dd23f58d16b20793334d7b57e6e90d1b32253ffc6a52bf009a80d86e65a6cee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Connect RX of the type-c to the TX/TXD of USB to UART

and TX of the type-c to the RX/RXD of the USB to UART

<details>
      <summary>Note: TX and TXD??</summary>
      TX / TXD
  </details>

<details>
      <summary>UART1 but its UART2???</summary>
      TODO:
  </details>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTSK3AUP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQClwX4zcGpvKcQCjJQQSck5HgE37q624XFlK86ZG5lv8QIhAMYe%2F8JmyGU9OTixqIjSSJyTOwVVTEcphW8Zkynpp3LxKv8DCBgQABoMNjM3NDIzMTgzODA1Igx0n%2B4pXTbJR81zDdkq3AOZf3U%2Blb%2BarCyMbK4XoNaaLTcYKoqFaMe9KtF%2B5p4uNO4jCTl6TmW%2FuINhNGbAtaUp3JaMypxO3MVbqxG6xe9FUeJ%2FD0LklTRLdvWKzIZJXftefF6nfWOOBD%2BDbbFrGIwv7eddql3pKhJO5%2FyJYm4i8OYdsJwYp0MkCjgkjl2WYTxtFIJM9KIBPF9kmbd0NSDpGnKf4g32xP043QtQ2G3ey6Vi8ows7BshfC9DlT3oSYI25YCxxlVwnJeH52qGxjSILIf%2FcDdrzZ4yAR9fzkmp%2BZQ4aPGNjaObAsiXnjvgjyBVjYHD9ufOxXEPI%2BE3n%2B%2FhnKheG4DnVZU4gTedHH3tyCaEmlBKeC8UPk4n5UBzn39wcbhcVT9h%2FOAKMzCmbgxJluSX4mRy5BxjtIzXyhHcpVb9d9zQhhxeE%2BZCdDpnurXcGlLtQpOOz21bA8vMjga9%2Fxn1ju39%2FnEg7WjSn1nUJhwRuAl16BhpuP2l7uL83IWlF1FpVo2FGSZDIF7vcADdBCobUt1sdOprlRjTKm8z%2FYXKyr8s%2B3wQo64LQcNMeUdVsOCALWnAWt%2F3ftwBIn%2BI7toLOvcOyY9azzXQbItgEWXMK6fb2Fy9ZPo6oCShgdVDVbwXoWxpwCiVwzCuuZrDBjqkAYlOmMqdYMzSmD8hx%2F%2FaorGBOWYN829I3wKWiPeADzFoKfzfgqm9FyBxBoIEgSaTaS4gyXmpHJWdVDwL9iVo9N84TGOLgIwsDWlGwCgyAVRRvbDdRey%2BoIWe163ngOIpGOs%2B0JMxJiDVd%2FME04bAuQhksEj7BbPYphjrRzy0VKd3G1gV1GMpUHgtcXsCp20WTSJh3fd%2F57Wso7BgyWeu90Y%2BlOMZ&X-Amz-Signature=0a28b4809ae1462c3de079df96fd3340915a03714246c359b3d5e1ddc7dab436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

Note we applied the settings from [here](/223da3bc629780a48291ecdfafcf7da0)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTSK3AUP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQClwX4zcGpvKcQCjJQQSck5HgE37q624XFlK86ZG5lv8QIhAMYe%2F8JmyGU9OTixqIjSSJyTOwVVTEcphW8Zkynpp3LxKv8DCBgQABoMNjM3NDIzMTgzODA1Igx0n%2B4pXTbJR81zDdkq3AOZf3U%2Blb%2BarCyMbK4XoNaaLTcYKoqFaMe9KtF%2B5p4uNO4jCTl6TmW%2FuINhNGbAtaUp3JaMypxO3MVbqxG6xe9FUeJ%2FD0LklTRLdvWKzIZJXftefF6nfWOOBD%2BDbbFrGIwv7eddql3pKhJO5%2FyJYm4i8OYdsJwYp0MkCjgkjl2WYTxtFIJM9KIBPF9kmbd0NSDpGnKf4g32xP043QtQ2G3ey6Vi8ows7BshfC9DlT3oSYI25YCxxlVwnJeH52qGxjSILIf%2FcDdrzZ4yAR9fzkmp%2BZQ4aPGNjaObAsiXnjvgjyBVjYHD9ufOxXEPI%2BE3n%2B%2FhnKheG4DnVZU4gTedHH3tyCaEmlBKeC8UPk4n5UBzn39wcbhcVT9h%2FOAKMzCmbgxJluSX4mRy5BxjtIzXyhHcpVb9d9zQhhxeE%2BZCdDpnurXcGlLtQpOOz21bA8vMjga9%2Fxn1ju39%2FnEg7WjSn1nUJhwRuAl16BhpuP2l7uL83IWlF1FpVo2FGSZDIF7vcADdBCobUt1sdOprlRjTKm8z%2FYXKyr8s%2B3wQo64LQcNMeUdVsOCALWnAWt%2F3ftwBIn%2BI7toLOvcOyY9azzXQbItgEWXMK6fb2Fy9ZPo6oCShgdVDVbwXoWxpwCiVwzCuuZrDBjqkAYlOmMqdYMzSmD8hx%2F%2FaorGBOWYN829I3wKWiPeADzFoKfzfgqm9FyBxBoIEgSaTaS4gyXmpHJWdVDwL9iVo9N84TGOLgIwsDWlGwCgyAVRRvbDdRey%2BoIWe163ngOIpGOs%2B0JMxJiDVd%2FME04bAuQhksEj7BbPYphjrRzy0VKd3G1gV1GMpUHgtcXsCp20WTSJh3fd%2F57Wso7BgyWeu90Y%2BlOMZ&X-Amz-Signature=11a4260ebd68f0addbbe24d6fe7b7d578228640a8626750657031d2b8e9409f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W36RFR4Y%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDmbr4EZ7jA7RGseWlG0zsWZW2UaiuLWG5aFQ8ZExJezgIhAKI5%2FtxcM2CkgsljzS347twK23iu%2BsqUqTLqZTTTvTT3Kv8DCBAQABoMNjM3NDIzMTgzODA1IgwMbHmk1sDIDbQZTOkq3AMlh7PvJGFcjzmnajFxXdf8m6QO0kimG854If7k7CF%2B%2Fmiua3sePmjjykSRQ9wBIu0gs%2BC9K5aj3WQFs9yf16LZDy4GOeT43J2b80yJLe%2F2Krwgf2iWn2aljfGSBWxrrcgzc9W21xo17Ik5huCIwsUnsnNO%2Fu7Sq5MoDOZW3bFVxDIV8YVmyNJ3dlsxY6p0zen8Grf%2F6qtXFM%2FkWHuecU3ytIw8eOS5IAmM4gbIm5UCUMxYdJd2v23VQ1JYzZ%2FprCTMGV5SsNxToQCUNB9wR4zCwGqxqZe%2F8Ii1zQYD%2BwjGf1aV1rBoBkId3%2FmEj32evpm%2F3Gxlg%2FvQqCdeup9PQSUPSwk1CexLrcWFQcCPRtGK1KMstxng6kfwa9v8rjkebe9MoeLb5kZWiGcgk7rhI%2F4NzQtcgmiANnWpO4Aab7qztYcNkYCgnZ6JqEssPumXn0keue180xiWUWb%2FSOt%2FAZJjaYHs8Geo%2F62MBM%2FJwSwz4SzJAoout2fr17dI4INEx4dqL%2BhZ%2FPDXDfj3pnp1NWE0NT3yt%2ByIO1rad9pjfoMmj1XovBx6lkAdCeJzEV8IfYmlJ%2BK5Vjeu8ksgZcm2Vt7RnaQ7%2BTEeamJjTUcpLzl8o9APghFtmfeeLzLNZTCP3JjDBjqkAbvvTADSLM9X3JSrklNVALnlFNOly5gddQmrWaf9%2BC7aCJNaIruUOrbLGubUAg5pf%2BNnmMpyGUjBZwWUoa4CDYDN5xtL3uyWH0dp1ZIdyWswgbOwCZA%2Fda7LGCBtykvcGtsNcvpGeeW4uVjYjN8%2FlyUsPmbPrjU6u9xzJwLZeDl7phua1Xh4BOrJNGEXYRIO8x0440Gh0yxwvnuMeVRRwPf5nGNT&X-Amz-Signature=27fc97fcae3de46e65e95243f61cdada0f8ddeb7b3ed7ca5b88e3878c91889bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHMT2UZ7%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCRZ7ho6Ep4oV4nYFdxhs5N52R%2BVuDo3%2BByU%2BX2BzIMTwIhANCgve1QfTL8IIo8jucfgtZ2XESVFykO%2Fvh%2BRKM6UVNfKv8DCBAQABoMNjM3NDIzMTgzODA1IgxsBicDJGuIC00sCpIq3AObSiX0u%2BqyxxCqa7%2Bc878rYXtLxqvFFFfP4F4y4rTh1Zf%2FFdaJRofCEpL3GaNqhUYSqLLlnj7zTKJX064o2m5aE2JPdTY67XdPecdoy3mr57FhvkTklAthxyU1vak54Sh6fJ8wo7XXnyrl%2FEj7bq8CmItwXuCPj8ftRPVDdBpnppqbJXO0yLTEDZFBZHSvOwxWueZ0BBIxzLtGpN3FV%2Bpua7jgHLKegDoqvFY%2Fs2vBgsMjKgZP4UajuLNSVzioeHTzVmF4dy%2FfLD0D01QWaNOTta4u2qTsU5nz1adkVJ0kAKuJh%2BtfimRBk4dS%2BFo%2Bu2v4gpHro3L%2FdZ2qxwtUKR1wHFJXQTcPf5ncmMSpbYxBhRQbIqWUlYuDrao5QtorT1PYgzyyk7C8g8aVh0PufdREkMKdrqEHmhQC8I7ZIQ%2FBQDd4UE91f9LEcUWSRpxYFGN71cNXNz1HKvEF8NUB2hs2aJNoPyfPtfPlToOT3WC3xtdrGI8wNnBoQC1gIR9zW9YA9%2BnzMNxRo8nmyIMwWxafAr5SasGVXNhRoONgESlu41Z%2F5iSfD%2FvT9bN%2F68E%2FCRzINJeIKmfnUn9PHO%2FnZFvfh4KePIgy0GFIJdad491%2Ffd09VRLHliMEwOqbEDCX3pjDBjqkATpYKhdj7y59SOL1xWMjCxE1kygB1vPkjnzIUXICMFcR0X78vjGkPIDgPDlF0stRoVXRBKnsQ%2FnbbWyJ4dvYNBYIKJGK3ecJ%2B%2FLyFrzv%2BFeI3IrHvKDhm5Uv8GPOxWmL39kDLF67FDyHYjHVmNbHjGObCKRvhBTTgX7bE6RAOyzwW3UnViMN3ZfvTTR09bX4B9h3ths58xwKZm%2FjRaap0Fdm8WPr&X-Amz-Signature=5eb76489a2e96fdaa66bc7ad3afa0868fd0863dda13c86a791dad0ec43f3d6eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHMT2UZ7%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCRZ7ho6Ep4oV4nYFdxhs5N52R%2BVuDo3%2BByU%2BX2BzIMTwIhANCgve1QfTL8IIo8jucfgtZ2XESVFykO%2Fvh%2BRKM6UVNfKv8DCBAQABoMNjM3NDIzMTgzODA1IgxsBicDJGuIC00sCpIq3AObSiX0u%2BqyxxCqa7%2Bc878rYXtLxqvFFFfP4F4y4rTh1Zf%2FFdaJRofCEpL3GaNqhUYSqLLlnj7zTKJX064o2m5aE2JPdTY67XdPecdoy3mr57FhvkTklAthxyU1vak54Sh6fJ8wo7XXnyrl%2FEj7bq8CmItwXuCPj8ftRPVDdBpnppqbJXO0yLTEDZFBZHSvOwxWueZ0BBIxzLtGpN3FV%2Bpua7jgHLKegDoqvFY%2Fs2vBgsMjKgZP4UajuLNSVzioeHTzVmF4dy%2FfLD0D01QWaNOTta4u2qTsU5nz1adkVJ0kAKuJh%2BtfimRBk4dS%2BFo%2Bu2v4gpHro3L%2FdZ2qxwtUKR1wHFJXQTcPf5ncmMSpbYxBhRQbIqWUlYuDrao5QtorT1PYgzyyk7C8g8aVh0PufdREkMKdrqEHmhQC8I7ZIQ%2FBQDd4UE91f9LEcUWSRpxYFGN71cNXNz1HKvEF8NUB2hs2aJNoPyfPtfPlToOT3WC3xtdrGI8wNnBoQC1gIR9zW9YA9%2BnzMNxRo8nmyIMwWxafAr5SasGVXNhRoONgESlu41Z%2F5iSfD%2FvT9bN%2F68E%2FCRzINJeIKmfnUn9PHO%2FnZFvfh4KePIgy0GFIJdad491%2Ffd09VRLHliMEwOqbEDCX3pjDBjqkATpYKhdj7y59SOL1xWMjCxE1kygB1vPkjnzIUXICMFcR0X78vjGkPIDgPDlF0stRoVXRBKnsQ%2FnbbWyJ4dvYNBYIKJGK3ecJ%2B%2FLyFrzv%2BFeI3IrHvKDhm5Uv8GPOxWmL39kDLF67FDyHYjHVmNbHjGObCKRvhBTTgX7bE6RAOyzwW3UnViMN3ZfvTTR09bX4B9h3ths58xwKZm%2FjRaap0Fdm8WPr&X-Amz-Signature=4ed416f006231e82d99ecf8f60d9dada7f9cead0299b9ce10738e3c8907dd907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHMT2UZ7%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCRZ7ho6Ep4oV4nYFdxhs5N52R%2BVuDo3%2BByU%2BX2BzIMTwIhANCgve1QfTL8IIo8jucfgtZ2XESVFykO%2Fvh%2BRKM6UVNfKv8DCBAQABoMNjM3NDIzMTgzODA1IgxsBicDJGuIC00sCpIq3AObSiX0u%2BqyxxCqa7%2Bc878rYXtLxqvFFFfP4F4y4rTh1Zf%2FFdaJRofCEpL3GaNqhUYSqLLlnj7zTKJX064o2m5aE2JPdTY67XdPecdoy3mr57FhvkTklAthxyU1vak54Sh6fJ8wo7XXnyrl%2FEj7bq8CmItwXuCPj8ftRPVDdBpnppqbJXO0yLTEDZFBZHSvOwxWueZ0BBIxzLtGpN3FV%2Bpua7jgHLKegDoqvFY%2Fs2vBgsMjKgZP4UajuLNSVzioeHTzVmF4dy%2FfLD0D01QWaNOTta4u2qTsU5nz1adkVJ0kAKuJh%2BtfimRBk4dS%2BFo%2Bu2v4gpHro3L%2FdZ2qxwtUKR1wHFJXQTcPf5ncmMSpbYxBhRQbIqWUlYuDrao5QtorT1PYgzyyk7C8g8aVh0PufdREkMKdrqEHmhQC8I7ZIQ%2FBQDd4UE91f9LEcUWSRpxYFGN71cNXNz1HKvEF8NUB2hs2aJNoPyfPtfPlToOT3WC3xtdrGI8wNnBoQC1gIR9zW9YA9%2BnzMNxRo8nmyIMwWxafAr5SasGVXNhRoONgESlu41Z%2F5iSfD%2FvT9bN%2F68E%2FCRzINJeIKmfnUn9PHO%2FnZFvfh4KePIgy0GFIJdad491%2Ffd09VRLHliMEwOqbEDCX3pjDBjqkATpYKhdj7y59SOL1xWMjCxE1kygB1vPkjnzIUXICMFcR0X78vjGkPIDgPDlF0stRoVXRBKnsQ%2FnbbWyJ4dvYNBYIKJGK3ecJ%2B%2FLyFrzv%2BFeI3IrHvKDhm5Uv8GPOxWmL39kDLF67FDyHYjHVmNbHjGObCKRvhBTTgX7bE6RAOyzwW3UnViMN3ZfvTTR09bX4B9h3ths58xwKZm%2FjRaap0Fdm8WPr&X-Amz-Signature=38d29ec0a5ddde27f1d5c91f9b0eb34ba14b727ada7761b28f5ed41a2941317c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

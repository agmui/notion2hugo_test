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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWCDRSR4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDDC8Th6Y2EAydIxROjKxCGAZMWHas7T3arzEpckGMrJwIgFAvceSFsLsWZHykyfvfZDkYVpi%2B9Stpn9FaqAY4Wp5kq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPqok8bN%2FsVVV1UwXSrcAyzrzcpiD4c%2FA%2FqaeoeZlXj3lJGpPf%2BDsBMu3ORUYcIqM9BtUNhaibqgnCgaYsSqNvz%2BtS5sBlTTwzU%2FDUZHUBBSOdDMeaK%2Bz7zL3JXto%2FVdTJkMbpANxmTifXmhKOafdxrql%2BRMXGRVRb7zrnO8xB%2BEHjSVPmLHm9JiSlhlhHcfYWCv6Oh1AZO7WzEQ%2FvLpw%2BYAKiyoMzlwUvAl%2FbnUXq%2B99FtL8rEzAfrQCVMlIVUf%2BKKrD3zhWVNd3cliBWgw%2B6x2n4ZhMub6EI%2BOnwR1ZxE5W6ZYvAFj%2Bm4QCpoEVrQ1TG5oFrBeLPxnkFfa1wWYUCsi7V3ItpMETRoI2Ig%2BLBAvb3oqJHN9RIqZJzJd%2B86zSwq7Rwytb0%2BFSl3O0WB9BQ6weFudJZk3mCqiNL4mI5WQ74bt4yXjhaldVEwsTaRMLQBSCYuw14ZUNo7wTA6a7QVVq%2B30EbMze6UTuWgangVHD0KDdDZFib4VoWDeals0C%2BMWY3EFzQBHr%2BwHVg0Uxf8cE1YJmMWeyH0%2FYugSmPH2Jvfo%2BANrVq%2FW0a4u8qQwzX2PEqa1g4r3iwJ4InU8v4PgvZUto6o9jO4REnuhERC7DfM4UxZ4ZTyFwN3dG%2BnDGW7tVTXStIPSg1xOMPvn3cMGOqUBM1Dw3aWqE7LrtPjr9fkCbhLytn%2FLI99GCyVL3NMp%2B4ml5Un6ShUZrX9xEM4lk3NQ6upYul%2BC7isZ5ZJvlTHCil4UmALD%2B9yvngKgp69dXzaWoJsamyiBNllEAC%2BWAJID64qWa1v1DtSLqHx619Qtuc5TE%2BAzv%2Big%2FnJqT8YhG7GP3wPG%2Foni1MxlaHmq6prQAaQDJr6L4R%2F6HW9ezwrMoj%2BQbBvo&X-Amz-Signature=2b762bc94d14614f032602a77c1b66c9d98dd1f9e2ca194bc3fe0fdf824b0aab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ2UTG3F%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFn5%2BIX%2BaaDDbRYOS5NB3wUD7Ou6izJJpaaicu5XpMF7AiBWkb0HfK1APlYv0esPXcbakzrxRD6a5Us%2BAhde4MYo4Cr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMEcQOEHalAefNdX60KtwDEeID1TfR%2F8H1p%2BC7yv7OuXFpG4BCyyhmgz6Dm6R5XqzARonwGN531aW4GjzFo5uS%2FFjhztGmfHs9jZtQR%2Bnz5fffwEDqHjwsK0JaogRF4sDP0AkTKniG9%2B87l9je4NLq6kUYNaUvTLOgLntGyWnKEsGs7dOPkQBbdGfvYmw02C%2Fcz%2BoQ3j0NmdGtpTvM5fibAJBJEkRjzVsttHsjfWQ66HT%2FBfKofHYoQQiv9MTLgHhf1p8DguwFnyN2EWKnQM0RfPssd9%2FQEjYW0jHVSpB1f4JQGao5wypMf5cMeYwfGWUurtbCuTmiAuYl5n4aTORaLoq3i4OyT8uybcXmmnN1N2JGxHTtunIfRsf0aWb50FtxE8QoQNuBWC4uBqHbPijTVUFRWmYQQMOMqxg80E3LS6wgz22rCZtiZAv7g8IWoYKqyku%2F3i%2B1Lt1j2hI%2BeMha9v5pvKXfSjax4BLuxvP31W7pReQENnxRtySqw%2Fy64cn6T5HgFIN9Xt5FgMXlCOanChT3zWSwXdDBHeiME2Ss5%2FMb%2FyzHwdt46snuvJbiMT%2FMiwp6x%2Bwf%2BmEapm19k9F8SmVSocmi7QDli%2BPMw9z5jQ%2FQww%2F0uZe3KDi6yFdYNzTCnndWpcvZcBRLu60wl%2BjdwwY6pgGMcA4fmcItecyLCmQXpI5Q%2FiSJ35Qv69eiYi8Ib0%2BhT2pzUw5IO0Mr7Vwv6kgfwyL94rbDVNElCbNvILCXegj4n%2BgEAE8IywGfFZe571sCfGyWFpogGdkOSgz0J1iQK2RRNmHonhf0QhZTsjUPM%2F073%2FTRnd2dUQiMzW4woYjsB3Oo0B%2F3nCHnq8gJPHV14jQ4w0XaW2Pn4wL0D0i1fW4cotI%2Brou0&X-Amz-Signature=f878f9f2c4bbfa6bc760356e3cd86bc9faf341989c06c8d640ac56fcbfd93f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ2UTG3F%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFn5%2BIX%2BaaDDbRYOS5NB3wUD7Ou6izJJpaaicu5XpMF7AiBWkb0HfK1APlYv0esPXcbakzrxRD6a5Us%2BAhde4MYo4Cr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMEcQOEHalAefNdX60KtwDEeID1TfR%2F8H1p%2BC7yv7OuXFpG4BCyyhmgz6Dm6R5XqzARonwGN531aW4GjzFo5uS%2FFjhztGmfHs9jZtQR%2Bnz5fffwEDqHjwsK0JaogRF4sDP0AkTKniG9%2B87l9je4NLq6kUYNaUvTLOgLntGyWnKEsGs7dOPkQBbdGfvYmw02C%2Fcz%2BoQ3j0NmdGtpTvM5fibAJBJEkRjzVsttHsjfWQ66HT%2FBfKofHYoQQiv9MTLgHhf1p8DguwFnyN2EWKnQM0RfPssd9%2FQEjYW0jHVSpB1f4JQGao5wypMf5cMeYwfGWUurtbCuTmiAuYl5n4aTORaLoq3i4OyT8uybcXmmnN1N2JGxHTtunIfRsf0aWb50FtxE8QoQNuBWC4uBqHbPijTVUFRWmYQQMOMqxg80E3LS6wgz22rCZtiZAv7g8IWoYKqyku%2F3i%2B1Lt1j2hI%2BeMha9v5pvKXfSjax4BLuxvP31W7pReQENnxRtySqw%2Fy64cn6T5HgFIN9Xt5FgMXlCOanChT3zWSwXdDBHeiME2Ss5%2FMb%2FyzHwdt46snuvJbiMT%2FMiwp6x%2Bwf%2BmEapm19k9F8SmVSocmi7QDli%2BPMw9z5jQ%2FQww%2F0uZe3KDi6yFdYNzTCnndWpcvZcBRLu60wl%2BjdwwY6pgGMcA4fmcItecyLCmQXpI5Q%2FiSJ35Qv69eiYi8Ib0%2BhT2pzUw5IO0Mr7Vwv6kgfwyL94rbDVNElCbNvILCXegj4n%2BgEAE8IywGfFZe571sCfGyWFpogGdkOSgz0J1iQK2RRNmHonhf0QhZTsjUPM%2F073%2FTRnd2dUQiMzW4woYjsB3Oo0B%2F3nCHnq8gJPHV14jQ4w0XaW2Pn4wL0D0i1fW4cotI%2Brou0&X-Amz-Signature=7e5dcedf49a8f29a4bfee268e27b2f2a5a3941930e5884a31556361c37e77861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ2UTG3F%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFn5%2BIX%2BaaDDbRYOS5NB3wUD7Ou6izJJpaaicu5XpMF7AiBWkb0HfK1APlYv0esPXcbakzrxRD6a5Us%2BAhde4MYo4Cr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMEcQOEHalAefNdX60KtwDEeID1TfR%2F8H1p%2BC7yv7OuXFpG4BCyyhmgz6Dm6R5XqzARonwGN531aW4GjzFo5uS%2FFjhztGmfHs9jZtQR%2Bnz5fffwEDqHjwsK0JaogRF4sDP0AkTKniG9%2B87l9je4NLq6kUYNaUvTLOgLntGyWnKEsGs7dOPkQBbdGfvYmw02C%2Fcz%2BoQ3j0NmdGtpTvM5fibAJBJEkRjzVsttHsjfWQ66HT%2FBfKofHYoQQiv9MTLgHhf1p8DguwFnyN2EWKnQM0RfPssd9%2FQEjYW0jHVSpB1f4JQGao5wypMf5cMeYwfGWUurtbCuTmiAuYl5n4aTORaLoq3i4OyT8uybcXmmnN1N2JGxHTtunIfRsf0aWb50FtxE8QoQNuBWC4uBqHbPijTVUFRWmYQQMOMqxg80E3LS6wgz22rCZtiZAv7g8IWoYKqyku%2F3i%2B1Lt1j2hI%2BeMha9v5pvKXfSjax4BLuxvP31W7pReQENnxRtySqw%2Fy64cn6T5HgFIN9Xt5FgMXlCOanChT3zWSwXdDBHeiME2Ss5%2FMb%2FyzHwdt46snuvJbiMT%2FMiwp6x%2Bwf%2BmEapm19k9F8SmVSocmi7QDli%2BPMw9z5jQ%2FQww%2F0uZe3KDi6yFdYNzTCnndWpcvZcBRLu60wl%2BjdwwY6pgGMcA4fmcItecyLCmQXpI5Q%2FiSJ35Qv69eiYi8Ib0%2BhT2pzUw5IO0Mr7Vwv6kgfwyL94rbDVNElCbNvILCXegj4n%2BgEAE8IywGfFZe571sCfGyWFpogGdkOSgz0J1iQK2RRNmHonhf0QhZTsjUPM%2F073%2FTRnd2dUQiMzW4woYjsB3Oo0B%2F3nCHnq8gJPHV14jQ4w0XaW2Pn4wL0D0i1fW4cotI%2Brou0&X-Amz-Signature=4858943384646b9722334e1318e52032bd71bbf5b7d5d00d9a68739a1250d7a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

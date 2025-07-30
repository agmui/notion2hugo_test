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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY7OB5L6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD79vfTvnEcPV2WRFO9XPf3XZdC1MLnI1o%2FflI9J1%2B0%2FAIhAMCwGFarsJLuNWh8KF4ye5G1EMmkJK1AwQVoFpMjdpOvKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx95rcOmZNhzy3FiqEq3AMCcaxq4lDYCuYT2u1LZNHsrQTwVrqIQ7pihY9VDxy%2BroDh8dJux73pmGTtlS0WWzA4pCXZqHV5BSpcMj3mmhA5JdTbq56MADuDZ5oGLkNiMOHEeXBl9OLXuTEcrKu6FUe9TWJ6ruGIh0cx8kZfcPUNJrUwOF7XOejUPPgYJFMZ%2BmxP7uAWvSDo64QDcYRT4bDKRgOkNX29Eqk%2FbggQS9eYdEm0itm%2BKs0f618iLnPCWXHkcwHSg2Zke2fAdi1ERTeyQ8ncG%2B5nHBjTnhvJRTSXOVSMsVs%2BMY04OKboYnuUvLLRbSI6Uty3wdqEtRrFOryQ6Oyp1tJDETiS8Zqqnul1%2BHjKv4FXjAgMaflsOvOneaFjIRVXr2v5E4uQ9Ur5xpODqfNul6UeZslu%2F%2BuFx2qh50Mnr3fykomAmqcEcGamJDGJm7cTLAjywvwNwC8GyBQPvj7oop7Tg2dKRaI3zVkJ3SQ3iUJRzMy45Px0tvpv16dY3LKwxprKoL78GnYtHgZZPo60cBbjP9Yx5F0%2FZxdkc59Xdo60YNW1fyLWIX8Gtj3DKJF1QdBD%2FuW%2FbMymHcVcE9xokzQ79Qx7pDjsCJCaSTqfyEl5%2FnQMCB1CPq6cJpjsO%2FwNlxlmd%2FKLezC9oqjEBjqkAekh8G270PSBBCJ3y%2B5YQRERDCt45JtcXHG%2FbkSwf1%2Be%2FPMU%2FWLuU5BbujGWixIokeRF1pQ2MmBlqLCGlPyi2J%2F9rwcF9rFZnwSFy06SAvUrvvm0ZbThyjs9nb7iQQ%2FT43718Ew%2BsZ0CwUELc9R7wMxkQBku36Q9mzc5HNwOs4NBTZ%2FO%2FrbSVKH%2B52rqsnX3wD4sCBxbAPWRbFll1CMH6XLw3g%2FI&X-Amz-Signature=b7250e49d07b779d2db8e0e915b8e99a386d86c9043f32c2b7d098d47f54ba61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKQCGW7L%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwKARJX0vyifDT%2FoutPvq%2FOA9WPSMmsj7MX2IOwhHddgIgWFe8TBSSAKPtFhiWp%2FS3pjjBNEe03%2B%2B8ztXObUEA9isqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFo%2Fu73qIs%2BMNjk4PCrcA11LeopTMDRscnfol9EImVXc3yH%2FQvNjx74Jxy2aA9QmXHONVOZegV4AGfD1CsFx2bK3wwqbcYoe7aH3MPgDs0Ts7MVTE80dX9a%2BDuVrTiES5KTWZ4ix%2Fxv3J492hqT1zerhSUdNfMcaG%2FRvyq3NQe5szM9NFoPSiWrJoCvXDpDZ2iOCaAonrV70%2BE5KT7Qam49w5e%2B%2F25Dmw6LOsHnCBccQeuzM3Hva3RG2OecLVDNmTogWErd%2BZpAn7sBCW34hptHL72vSHLfg2T8Jftqcnh5copRHMslqtoibNucYlVbpc3b%2BeS%2BZdWlWWbuWDcTJpgdifRKElqUdINeDyAWqTmzhDTm9smN1pXqR5NnVMTDdYnSE4KaOvRhQuXpEZ42txgbmFDlZ%2BY1wPqU4oL%2FKOeahiACZWM2NC3%2BQ8URq3HllzfEXfQ4l%2Fbge%2B6Ykog6SY1GSMcyhIx83z%2Fi5zvT2XcLccjo6xBY7qd3mbzr3yAirvI1ZDZjdDpWlGS54mZWD%2BbDhK1X7dNTmbolFuWx7l3NE0Zcnn36VCbVVWhMWh0jAd9qUug%2B4QPLKokgu0ldBmVNginC4nzD3ECwYM2JOJE9yeYnYLnBLz4B3ja84%2BVKhmQ6a6P8UfM9fDIgBMK2iqMQGOqUB9g9LglOM6ZvnE4klnHTGV1Ja9WjzOEU4wt1%2BrJhkTtLv94rL0PBkTqv2g17%2BgHQqPxZDwwK%2FIGFOl7z4j82Rbcu%2F%2FUP1RGOJ1EFBZQjGf3JB7TVDCYPihiIcHLVKO2oS0nRc2l8YA9wndHRcHrPtxcjmPZwFPT693uf5hAL8W%2BgveUtOpluuQXD0LmuqrSCbTPEvNggr405ILLPQcG2LWrNqbekv&X-Amz-Signature=ec77baff1bea2a621c1d775d802a8d8f9cfdae4ee58b87089b37be99a90b10dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKQCGW7L%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwKARJX0vyifDT%2FoutPvq%2FOA9WPSMmsj7MX2IOwhHddgIgWFe8TBSSAKPtFhiWp%2FS3pjjBNEe03%2B%2B8ztXObUEA9isqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFo%2Fu73qIs%2BMNjk4PCrcA11LeopTMDRscnfol9EImVXc3yH%2FQvNjx74Jxy2aA9QmXHONVOZegV4AGfD1CsFx2bK3wwqbcYoe7aH3MPgDs0Ts7MVTE80dX9a%2BDuVrTiES5KTWZ4ix%2Fxv3J492hqT1zerhSUdNfMcaG%2FRvyq3NQe5szM9NFoPSiWrJoCvXDpDZ2iOCaAonrV70%2BE5KT7Qam49w5e%2B%2F25Dmw6LOsHnCBccQeuzM3Hva3RG2OecLVDNmTogWErd%2BZpAn7sBCW34hptHL72vSHLfg2T8Jftqcnh5copRHMslqtoibNucYlVbpc3b%2BeS%2BZdWlWWbuWDcTJpgdifRKElqUdINeDyAWqTmzhDTm9smN1pXqR5NnVMTDdYnSE4KaOvRhQuXpEZ42txgbmFDlZ%2BY1wPqU4oL%2FKOeahiACZWM2NC3%2BQ8URq3HllzfEXfQ4l%2Fbge%2B6Ykog6SY1GSMcyhIx83z%2Fi5zvT2XcLccjo6xBY7qd3mbzr3yAirvI1ZDZjdDpWlGS54mZWD%2BbDhK1X7dNTmbolFuWx7l3NE0Zcnn36VCbVVWhMWh0jAd9qUug%2B4QPLKokgu0ldBmVNginC4nzD3ECwYM2JOJE9yeYnYLnBLz4B3ja84%2BVKhmQ6a6P8UfM9fDIgBMK2iqMQGOqUB9g9LglOM6ZvnE4klnHTGV1Ja9WjzOEU4wt1%2BrJhkTtLv94rL0PBkTqv2g17%2BgHQqPxZDwwK%2FIGFOl7z4j82Rbcu%2F%2FUP1RGOJ1EFBZQjGf3JB7TVDCYPihiIcHLVKO2oS0nRc2l8YA9wndHRcHrPtxcjmPZwFPT693uf5hAL8W%2BgveUtOpluuQXD0LmuqrSCbTPEvNggr405ILLPQcG2LWrNqbekv&X-Amz-Signature=25a58567a8cff6a980d88752b7d4a3f99c0ee8a1508862dddde1b525f24244ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKQCGW7L%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwKARJX0vyifDT%2FoutPvq%2FOA9WPSMmsj7MX2IOwhHddgIgWFe8TBSSAKPtFhiWp%2FS3pjjBNEe03%2B%2B8ztXObUEA9isqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFo%2Fu73qIs%2BMNjk4PCrcA11LeopTMDRscnfol9EImVXc3yH%2FQvNjx74Jxy2aA9QmXHONVOZegV4AGfD1CsFx2bK3wwqbcYoe7aH3MPgDs0Ts7MVTE80dX9a%2BDuVrTiES5KTWZ4ix%2Fxv3J492hqT1zerhSUdNfMcaG%2FRvyq3NQe5szM9NFoPSiWrJoCvXDpDZ2iOCaAonrV70%2BE5KT7Qam49w5e%2B%2F25Dmw6LOsHnCBccQeuzM3Hva3RG2OecLVDNmTogWErd%2BZpAn7sBCW34hptHL72vSHLfg2T8Jftqcnh5copRHMslqtoibNucYlVbpc3b%2BeS%2BZdWlWWbuWDcTJpgdifRKElqUdINeDyAWqTmzhDTm9smN1pXqR5NnVMTDdYnSE4KaOvRhQuXpEZ42txgbmFDlZ%2BY1wPqU4oL%2FKOeahiACZWM2NC3%2BQ8URq3HllzfEXfQ4l%2Fbge%2B6Ykog6SY1GSMcyhIx83z%2Fi5zvT2XcLccjo6xBY7qd3mbzr3yAirvI1ZDZjdDpWlGS54mZWD%2BbDhK1X7dNTmbolFuWx7l3NE0Zcnn36VCbVVWhMWh0jAd9qUug%2B4QPLKokgu0ldBmVNginC4nzD3ECwYM2JOJE9yeYnYLnBLz4B3ja84%2BVKhmQ6a6P8UfM9fDIgBMK2iqMQGOqUB9g9LglOM6ZvnE4klnHTGV1Ja9WjzOEU4wt1%2BrJhkTtLv94rL0PBkTqv2g17%2BgHQqPxZDwwK%2FIGFOl7z4j82Rbcu%2F%2FUP1RGOJ1EFBZQjGf3JB7TVDCYPihiIcHLVKO2oS0nRc2l8YA9wndHRcHrPtxcjmPZwFPT693uf5hAL8W%2BgveUtOpluuQXD0LmuqrSCbTPEvNggr405ILLPQcG2LWrNqbekv&X-Amz-Signature=5c12e1e711abf68c3dbbdf4d8228fbda32f736fa2e0241eadb36119cc6ae8ff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

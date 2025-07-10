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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUVCK6NX%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkbyUMk1NMJkqngxnb14hDE3M1d9xyG%2FmBSEgdy3%2BaOAiAzzELCAincSDl1cD7yhMAfe2rC78PHolrc341q6ZC1siqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbxutgwMoj7L%2BNvM7KtwD5lbLhs0ieebQqko3raDzg0CvlTgTqrbthMSYs2Pce%2FcSTy3dKjJWaAB%2BBgh%2B4K1SFtPAIppOp3ywAmWJ66ijktdXnwMpDTUAPzeo18QsEIuBm4MBpCezdUdz%2FwQo0EQ2StuMpZojhGhcWoMNcHSfNd7QTVLSlMFM5KOoga0jTu8naHl3NUKC7mo%2BNJTJZNDtQLR4jCECdr1eAtzUzbdOS7INRjcgksRkMsRy2r2XLGMZhnwQooC1v5szQC0b1vV4QG6p7j3M1Ub3b%2FfZWpLuKCdVQJYa6wV2c4tw%2F6DzNs7pwCeNqSmdQIzV3PlpuUflQbEkQwbcUPhLyJE%2BVYSNj0L5W073w2%2BkWqKUPUZ33XtwOUvUYdyp4vHFwtYfPLdfkbcOJjIGaFwgVnEyq%2FVWHT3RbjCo66lyObzsSpHUe%2Fp5SVKHQ4xYUySjgDuuwYj5ZviBeYzzINAUOZSjh70p%2FB6bAA7vIbI3WZLCMUq1It3OxwNwKDFBF2LUZyJ3Obr9wxDK%2FbR5oloL%2B%2BPd94Q8UPeJZmk9EFQNkaKEZ0f6bRH5qqTFrFMJ7bM6KhVTgMgxcFaYHsxqHtk7cTzL%2BY0x8BdgCwi%2B7v%2FNwxi%2Fes4ah7t76CI72YHXVb0taFgwi%2FC7wwY6pgHXvPXkAuF%2FP%2FXWXiDDZtAg0HWP1wh0ExVvGfzU73kQcoRNN5TYwyjtR77rWEMgNWMpIPlIKm35zujD6JuJEyCTDwEZA0fzMIC7Bi8kZCF3u5%2FTCS2pO0HY%2BX3CmvC85mUTNXMYcOf0S9mFvVzfOw606Q3L9oneNBST9LTfGQb43Pk729aQ503%2B9QpA2nSGdZS5Iwx0SuM%2BmSEYzu%2BbkJ6Cvttdh%2Bpp&X-Amz-Signature=823b23bbeabbedb38275d3dc3ce6387a4087c6c36a6be5686c4612434d2cd053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2RF7X2%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRzbcJQIHlsQny7NsUjYaVNswKp8B3YB8q2enSshbqfAIhAMXcnyVR5P6gb24fHJP2XzmwQUAFImU7haYEdf4HbaKkKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxg2vb2KEmacYz7gUq3APWpcfdLQgRXWDsaOlM6y%2FUO3tiu4hjhZk9Tgn40ioTzdJ%2FoMGC9F2SX%2FGwciUxqe4DtkE3ERGaVY5BL%2BGdKs0hF7h4LknxeKct05UeBMTyvL5djPYK%2F3GGxSrzK4dm%2FFJeuHusR0HZr8%2Be7NroyPEF0qaenmhv0o9UL4j0lQeO361Kaz3%2FVpnPVUGjozlBSVqmdgXXBrX7WNKCosdz4dfZylMh4J2yLcRfhOeWvY%2B9GCSx%2BxENLQ%2BzNuIN0xDRrJYMOuMqLHwnpI1pRw6bk914gBE1u7%2BwFk%2F3J3yWsH9dOegw0LQ2qvOAfjDdZdTAaqd9RY684Sh4jFU1NnOyFK5LRWR34c0SPEmPg%2BmrDa2szegFJGvlFZVPDga63fDVUG4V9s9q2HkBIXEkv4vykmDV9HDhJXu%2B4OuL%2Bea43CvJxO3l6PHOfQmpat0YVSHMpsFOBjBCogHMLVVun8ZVTxswxnTB7OFyHyLPTVPHWo9ICj933lwG%2FWXq5HLKUjRdYkhd0mg%2BnABdXpPBZZfAjDeagD062mbIBCJZABRwU5B5ZmaSNiNalL%2BxJFuaP0g2ALSM5G0XOVuhuymJpS1sWoWTsrfVeK5n0dUGH3b3lzE26sBDjmEaOJOsnfsn9zD%2F8LvDBjqkAeeRZyh9JfqJ%2FrFeb3AImpHqEzFN3BbZCmmzp9Wy4xcZvTSCBK1HIPBDRS2DXNoUG%2BTVXhhhd9H8lrv%2FXn4yml1CAEJ%2Flnj5Do9BzN0BU6KeX1RiaTu3RBPqT8muHQoBMLbJt%2BovJAZUsffBIkEBs%2Ft81%2Fk%2B2HAqu4euEGriXCSKQ%2B5YpvjVjtIdyhetSUXInXLoczk2uj7y3KcS%2BmPjveGyh%2B2h&X-Amz-Signature=cb9ca7acc8c9f5eed8e5a5364a867c6237622c481fee1742f07f341fb258466b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2RF7X2%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRzbcJQIHlsQny7NsUjYaVNswKp8B3YB8q2enSshbqfAIhAMXcnyVR5P6gb24fHJP2XzmwQUAFImU7haYEdf4HbaKkKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxg2vb2KEmacYz7gUq3APWpcfdLQgRXWDsaOlM6y%2FUO3tiu4hjhZk9Tgn40ioTzdJ%2FoMGC9F2SX%2FGwciUxqe4DtkE3ERGaVY5BL%2BGdKs0hF7h4LknxeKct05UeBMTyvL5djPYK%2F3GGxSrzK4dm%2FFJeuHusR0HZr8%2Be7NroyPEF0qaenmhv0o9UL4j0lQeO361Kaz3%2FVpnPVUGjozlBSVqmdgXXBrX7WNKCosdz4dfZylMh4J2yLcRfhOeWvY%2B9GCSx%2BxENLQ%2BzNuIN0xDRrJYMOuMqLHwnpI1pRw6bk914gBE1u7%2BwFk%2F3J3yWsH9dOegw0LQ2qvOAfjDdZdTAaqd9RY684Sh4jFU1NnOyFK5LRWR34c0SPEmPg%2BmrDa2szegFJGvlFZVPDga63fDVUG4V9s9q2HkBIXEkv4vykmDV9HDhJXu%2B4OuL%2Bea43CvJxO3l6PHOfQmpat0YVSHMpsFOBjBCogHMLVVun8ZVTxswxnTB7OFyHyLPTVPHWo9ICj933lwG%2FWXq5HLKUjRdYkhd0mg%2BnABdXpPBZZfAjDeagD062mbIBCJZABRwU5B5ZmaSNiNalL%2BxJFuaP0g2ALSM5G0XOVuhuymJpS1sWoWTsrfVeK5n0dUGH3b3lzE26sBDjmEaOJOsnfsn9zD%2F8LvDBjqkAeeRZyh9JfqJ%2FrFeb3AImpHqEzFN3BbZCmmzp9Wy4xcZvTSCBK1HIPBDRS2DXNoUG%2BTVXhhhd9H8lrv%2FXn4yml1CAEJ%2Flnj5Do9BzN0BU6KeX1RiaTu3RBPqT8muHQoBMLbJt%2BovJAZUsffBIkEBs%2Ft81%2Fk%2B2HAqu4euEGriXCSKQ%2B5YpvjVjtIdyhetSUXInXLoczk2uj7y3KcS%2BmPjveGyh%2B2h&X-Amz-Signature=dc7b422a7e27d42692e4b42fa499f09c4b608907c95c6decd92d7f5be0b9905b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2RF7X2%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRzbcJQIHlsQny7NsUjYaVNswKp8B3YB8q2enSshbqfAIhAMXcnyVR5P6gb24fHJP2XzmwQUAFImU7haYEdf4HbaKkKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxg2vb2KEmacYz7gUq3APWpcfdLQgRXWDsaOlM6y%2FUO3tiu4hjhZk9Tgn40ioTzdJ%2FoMGC9F2SX%2FGwciUxqe4DtkE3ERGaVY5BL%2BGdKs0hF7h4LknxeKct05UeBMTyvL5djPYK%2F3GGxSrzK4dm%2FFJeuHusR0HZr8%2Be7NroyPEF0qaenmhv0o9UL4j0lQeO361Kaz3%2FVpnPVUGjozlBSVqmdgXXBrX7WNKCosdz4dfZylMh4J2yLcRfhOeWvY%2B9GCSx%2BxENLQ%2BzNuIN0xDRrJYMOuMqLHwnpI1pRw6bk914gBE1u7%2BwFk%2F3J3yWsH9dOegw0LQ2qvOAfjDdZdTAaqd9RY684Sh4jFU1NnOyFK5LRWR34c0SPEmPg%2BmrDa2szegFJGvlFZVPDga63fDVUG4V9s9q2HkBIXEkv4vykmDV9HDhJXu%2B4OuL%2Bea43CvJxO3l6PHOfQmpat0YVSHMpsFOBjBCogHMLVVun8ZVTxswxnTB7OFyHyLPTVPHWo9ICj933lwG%2FWXq5HLKUjRdYkhd0mg%2BnABdXpPBZZfAjDeagD062mbIBCJZABRwU5B5ZmaSNiNalL%2BxJFuaP0g2ALSM5G0XOVuhuymJpS1sWoWTsrfVeK5n0dUGH3b3lzE26sBDjmEaOJOsnfsn9zD%2F8LvDBjqkAeeRZyh9JfqJ%2FrFeb3AImpHqEzFN3BbZCmmzp9Wy4xcZvTSCBK1HIPBDRS2DXNoUG%2BTVXhhhd9H8lrv%2FXn4yml1CAEJ%2Flnj5Do9BzN0BU6KeX1RiaTu3RBPqT8muHQoBMLbJt%2BovJAZUsffBIkEBs%2Ft81%2Fk%2B2HAqu4euEGriXCSKQ%2B5YpvjVjtIdyhetSUXInXLoczk2uj7y3KcS%2BmPjveGyh%2B2h&X-Amz-Signature=0c1ffeae860923b20b1c5bf209c2883ab2e8b3defbc7c589820b1d42892d0262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

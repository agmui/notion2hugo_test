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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL7V6454%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0yDc%2FkFRlvBpfG1xX0V9vfz%2Fk1gpneF3kUGbzJV7iXAiAD95bKyYdNW%2BgeCARViSm1GHUOY7nSW%2FlMW5kIawFh1iqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEq%2BsQ3SoTvLI522aKtwDAJnIzwyOiQSLzEfaWFBU1WWS%2BRrRHKx42elKELr7koKff9OaEKIFO4lFWeAj4Gh2gtbimDcM80diX%2BGoPuH4vvAdTBmcWzj68M85Qx6bzzOEao%2BHnXpI3ncGC2cy%2FJongIEP3Yllw5jVOPzcp7kmEkGEAEJENZ5fKC4KmjMdzZ43GIKeBJcwaUbIbbhk7HATH%2FeYIUggvb60T94M7FFIQymfCHAniGMsBU0%2Bbe3lh9DR3g360iN7KFgJAM2cLfsWoaLiMJkOa3wKUYEttEnz%2BiK8oFF907gPx9iPKxNiALHyW5F01Cxk7ESlXqJSDz7M%2B13HdKVOgh5BjCJN%2BzDg6MAikJzTbZvksBv%2Frk2%2B2CuEbBvW6i3UztCJ2UIZGfe9K9pP4DqhJ0GUTRTY00dm5ZlhCSYvP1uSorQTT%2FZO6ftMeqKUcBdXQe93VSwpIMpujc0n9qOBdRFWkNTc%2F7%2FV3IdNEa7JfAnCXlgjTxia6B4uwun1GlzdaPl4068C8zJyWK6EpR%2FyT%2BAvDemBc6KtUl92lMe%2B3F%2FtBMIkXS4JH94WbANmpzNbdLvVKImgrs%2FRATRmwbdud57UnrGNyAEhKEg3OFLKgtpRbiJs81%2BgnJiENRYRrmvbcCX2v0owtv7EwwY6pgGIaBNETaV6EggXZtJsS%2FfPLT4Gs0P3wlz0arqNla0xf4f7VBQbVKhRtDt3q86nZI0uEXEEYC%2F2QeUp%2FE171KjiOys%2FEDW8sESN1LKcwpZMu%2BrmwOjkExe55TYKjPGBjTQwWwNYE5HGRq2EFjKzpi6LhvqOBnKnH5eM%2Fa8cFaIzKUpGiK1MDJM5xLAV9IZB0wPSPEQlVMs3Grc3vpygnJjuux4HWP0u&X-Amz-Signature=186515aa840208f42060478d0036a82b1bc403da6c0c8921a1c8a10331fadcb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PF7SB4B%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2Fnqm4SfperqppcFK0gzoz2W340m6AQ%2FO7RpG2Kh97oAiEAhHRGkRcZIFAH%2BRp95ASeEVaNaHnWniD3L6FKyHBnni8qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBc0ujUfpmYYpYKQyrcAxgBXzzzc4qmuHRTRAKBgF1nqFGIz39EG3pa3n1ajpZba7q%2FMU7xrjNWI8rE0QTx3%2FGLGYFAkalBdB7as63x1IfnM8fEVc9X2QOxpV%2FCCmSL47Ygjlgzp1x6IdJVVD%2BtcLR1BbPVRTC0Lw1dpohgxF%2F4INVYMx%2FjjjC5z6NRKXwSa8WgTlDmGsyPLdtUHMB4vaW7ClR%2BloyfSTL1SRifORKNr%2FqX6mQFhZvGze%2FAoo0N68mil0%2BFdbOTA1lXldoknFQ%2BGTNDunvUbgMJUaG4Y3NtVKmImREAt4XLQUveqwvIm%2BJBKigMT20pPb9coRcpndRHNNScS3lksPOcwCNEIZTxN2ulKKk7%2F7AdGerIoBEirBA7McHX3YmniRvX%2FxPN%2BNqk2OexNgv2npYQdVlHgpZmSxksNa%2F8u33a2bbnXBvcIv5H3HWy9kvUktVH410D4ex%2FrSfBQ5pO7G45WihwT7ViETf5Zc%2FHVnS4QotO5vifEitQLLn4perBH%2FyHfHcpxoVQP31YNFCxg0dRnbP6Z8ZsvO4yhSyHIr%2ByO1TYqUytFNerCUbvQJE2LvT2%2BV5fC4Sk1jXiWME5iOAcPnCd2lKFG6oKGJ2b4yOBGjWd8FXWLXuDj82Evwlfq3qWMLP%2FxMMGOqUB2agYbcv34u9%2BI4PTH9aZUN8lXU2FlM7uvYkQZHoEa1cFDZU3IFghIthycvQF9Z3ZUL3q0CjM3JIIFArJZZ62%2F5Qm0envVLT4r7e%2FeV5piizetZU37UrTlD8mLIvOE%2F8BcYx1XpXTuDAGiFQjUilEExfz9ugZuDXGxag0iJam%2F95Yf8cDDfZHdfJWZkDLTd6CE147MbyxejJ7%2B2UTGpjza3WTmbGR&X-Amz-Signature=54f56cd838795d4b8f7b739705d9dfb84fd07a364a7a8abc61360adb8a5d7528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PF7SB4B%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2Fnqm4SfperqppcFK0gzoz2W340m6AQ%2FO7RpG2Kh97oAiEAhHRGkRcZIFAH%2BRp95ASeEVaNaHnWniD3L6FKyHBnni8qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBc0ujUfpmYYpYKQyrcAxgBXzzzc4qmuHRTRAKBgF1nqFGIz39EG3pa3n1ajpZba7q%2FMU7xrjNWI8rE0QTx3%2FGLGYFAkalBdB7as63x1IfnM8fEVc9X2QOxpV%2FCCmSL47Ygjlgzp1x6IdJVVD%2BtcLR1BbPVRTC0Lw1dpohgxF%2F4INVYMx%2FjjjC5z6NRKXwSa8WgTlDmGsyPLdtUHMB4vaW7ClR%2BloyfSTL1SRifORKNr%2FqX6mQFhZvGze%2FAoo0N68mil0%2BFdbOTA1lXldoknFQ%2BGTNDunvUbgMJUaG4Y3NtVKmImREAt4XLQUveqwvIm%2BJBKigMT20pPb9coRcpndRHNNScS3lksPOcwCNEIZTxN2ulKKk7%2F7AdGerIoBEirBA7McHX3YmniRvX%2FxPN%2BNqk2OexNgv2npYQdVlHgpZmSxksNa%2F8u33a2bbnXBvcIv5H3HWy9kvUktVH410D4ex%2FrSfBQ5pO7G45WihwT7ViETf5Zc%2FHVnS4QotO5vifEitQLLn4perBH%2FyHfHcpxoVQP31YNFCxg0dRnbP6Z8ZsvO4yhSyHIr%2ByO1TYqUytFNerCUbvQJE2LvT2%2BV5fC4Sk1jXiWME5iOAcPnCd2lKFG6oKGJ2b4yOBGjWd8FXWLXuDj82Evwlfq3qWMLP%2FxMMGOqUB2agYbcv34u9%2BI4PTH9aZUN8lXU2FlM7uvYkQZHoEa1cFDZU3IFghIthycvQF9Z3ZUL3q0CjM3JIIFArJZZ62%2F5Qm0envVLT4r7e%2FeV5piizetZU37UrTlD8mLIvOE%2F8BcYx1XpXTuDAGiFQjUilEExfz9ugZuDXGxag0iJam%2F95Yf8cDDfZHdfJWZkDLTd6CE147MbyxejJ7%2B2UTGpjza3WTmbGR&X-Amz-Signature=2561c00814721d59a226f110f430f1665529c8255a466b8d550df004b4f0ac4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PF7SB4B%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2Fnqm4SfperqppcFK0gzoz2W340m6AQ%2FO7RpG2Kh97oAiEAhHRGkRcZIFAH%2BRp95ASeEVaNaHnWniD3L6FKyHBnni8qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBc0ujUfpmYYpYKQyrcAxgBXzzzc4qmuHRTRAKBgF1nqFGIz39EG3pa3n1ajpZba7q%2FMU7xrjNWI8rE0QTx3%2FGLGYFAkalBdB7as63x1IfnM8fEVc9X2QOxpV%2FCCmSL47Ygjlgzp1x6IdJVVD%2BtcLR1BbPVRTC0Lw1dpohgxF%2F4INVYMx%2FjjjC5z6NRKXwSa8WgTlDmGsyPLdtUHMB4vaW7ClR%2BloyfSTL1SRifORKNr%2FqX6mQFhZvGze%2FAoo0N68mil0%2BFdbOTA1lXldoknFQ%2BGTNDunvUbgMJUaG4Y3NtVKmImREAt4XLQUveqwvIm%2BJBKigMT20pPb9coRcpndRHNNScS3lksPOcwCNEIZTxN2ulKKk7%2F7AdGerIoBEirBA7McHX3YmniRvX%2FxPN%2BNqk2OexNgv2npYQdVlHgpZmSxksNa%2F8u33a2bbnXBvcIv5H3HWy9kvUktVH410D4ex%2FrSfBQ5pO7G45WihwT7ViETf5Zc%2FHVnS4QotO5vifEitQLLn4perBH%2FyHfHcpxoVQP31YNFCxg0dRnbP6Z8ZsvO4yhSyHIr%2ByO1TYqUytFNerCUbvQJE2LvT2%2BV5fC4Sk1jXiWME5iOAcPnCd2lKFG6oKGJ2b4yOBGjWd8FXWLXuDj82Evwlfq3qWMLP%2FxMMGOqUB2agYbcv34u9%2BI4PTH9aZUN8lXU2FlM7uvYkQZHoEa1cFDZU3IFghIthycvQF9Z3ZUL3q0CjM3JIIFArJZZ62%2F5Qm0envVLT4r7e%2FeV5piizetZU37UrTlD8mLIvOE%2F8BcYx1XpXTuDAGiFQjUilEExfz9ugZuDXGxag0iJam%2F95Yf8cDDfZHdfJWZkDLTd6CE147MbyxejJ7%2B2UTGpjza3WTmbGR&X-Amz-Signature=2ea16cff6816dca9c5041f7d3219a3148193bcc2709605aa49ac6ba8cbcaafae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

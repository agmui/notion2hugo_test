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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6DK2HT2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCA%2FLvhbe3%2B%2ByCAfnYOS4N4GmgDu8LEqW7d5O6He9NsmwIhAOOBnull4BjtYgTl2ccMGedIizb7kkgmEAIBJ9lhXJxyKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FThYQ5GA6e%2BYiR7kq3AOBGsLO51w4yBISGuyXUTqP3wupPNBPsuWvkOv7o3J6VzgtBLLSPRxUBBX3ONwEL5VDH7JgsZ%2BPmEEArwTe6%2B1dww6N8UCyzYuJqv%2BJ3QTlJhw7%2BZn6yyZGYi0AjlLcpE%2B2PlYqS%2FbUormRVJZlo9mLbhBCjbRnipXlbyX4ktJIhfhebw2k%2FtRW6kZNvRUXxG4wdVnhF7xQGHnj89R%2FoRsKrRAazugjEcHC3LLyraLIPL7fMY4rE3xk2A8dvTD2YXmhaWK2C%2BHe0PVn%2FKqO4eP7DJL9rRgrUtqEmpw74%2BUnUN0%2FzU%2FpD9HyLjpwt8k0MFVhHfUBBQiAErZ3CRwA0YFdGcq702LQm4Ti2uQRWvtzH7lc8ROpQ16w2Jp7cfQkPhQ9fX%2B2IuKxUfKflC%2BMpN6NVr1TIVpVAFDYJxclTuL1dyFxQw4ScwqFEx715R1o%2FK668%2FySAcpEck0HXbyeZagpgFXZQcrKv0ycwui1TnOYwTCh5%2F8N2v6rpHWVHCDi3uwn92R%2BTSuvTl3nnxZYxmCWgoAUQSrAHts%2BY2tl%2FxU%2Bv3ZylTd3m%2FKdQPqO81saUzbQu66Cei45nbehmwGjqGNZTX%2BCSoeR05hbRlU%2BReboNf%2BjH1mxgrqd31qInTCsp9jEBjqkAZg51Ei9%2BbzxJ9WhZ3Sz7W7oBrl5S0FyWBRwtnm839%2BJSvz4BnSJwWD6xhjVJBkFSmYxYt4KPyBvd7d21lVqS%2BTKZQbqfh8M8xafP94IcL02BKxmsGDugEN1zrCU7CdsR4LbbjAB8gH3JmNHJgEtqG2cTfD37ckhTypIkfbX9o9ebiFLFPKXfjcA6nb84eiuzvi3lEVc198L7CeONHMddBwMN1PF&X-Amz-Signature=4b89be8c9c268c15d4060db4dd6e983985f300d563fb73ebbc80d9f5808c2e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GIRGHOO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCGeDFcyWY%2FOxFEswpfEYaKp5TX8piy0%2BV52mWU0bj47QIgSd2cgTh89XuNMs9H4NP6%2F0qxezL%2F2La3RYFIilVZwswqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCP2OjSqEbyPA2PcdyrcAx2404dC2xgPmBfko8UDhTz55g%2BqcNsyPozmMWbpCjWJYeu9%2F7nb43khGKgiqx5TQD%2FrFuoHls6Nm3i%2FhziPkCpioggVrMxUo0OFJ5GNHn1ce4LFVC5OnU2ssZrdJGe2Epi1Dkcba9b%2FGxDS89sUKwtFdyWJ4QXka1uuTgo9UCeOWAu62bLiI4gBP%2F8LDradwGOQ2cjkqG79KllUIS%2FLJMtrWsuUeqQfkkVkmFglcYo45YH7UmAITHDuLQwI5SM0rqcGJyrh6bKL6pa4crD6d%2FDP%2FlyKkviVuXw3ZRp76nMt9zXgFf9Jul4cmKWL4VXz4HzWhL%2BseBYTt6hAIezwzu18K3gDAfkowCrDs%2FffUwthzqLa%2BwWoggoKxBTFyP%2FeNG9XIeFXObC4zBfzMP7Y%2FeCkHeOXZ%2FZrfwHvJmZTM7M04eWY2vQZy0w2i8QbJZS7X88K29nhKBCdGtaQ6sNMpqqjgb3Bc7JhVvnJUdknbFTmkNrJQmANqCS0hEeVtk9z1AyoROk4wdhqACmkNSWmIc%2FxXanMdKOv9G6b2gO%2F9PhCpZ%2FsBNVUXpxOhmeQ%2FcMiP%2B0EnU7O0q9bC01Ps2vh7jgf8tONqrFJ2sh2G%2BSxiME53IQ6os26E0FP5Z%2ByMOam2MQGOqUBXbECbUxlBS%2Bs6ge5SaSa4OC4Z%2F2zxaUeFjpI2xIaI4AJJbww9qw9YSjqnnkWVXwtClo1ZN%2BEVj0q%2B2%2FMtP5CpdfyKbhZ%2F1XRzLNSvx4TY9HUcePdSxc6eKWGFIqtPj8BbUSIXzGBH4CmhZ%2F1Q%2FjKm%2BMnLAvdRsDB%2FGLPJz6U6KLtogvBREDyPUdp90eKdADe8NfR7JLwPo2PohCtPM5kCS0MWKFC&X-Amz-Signature=6b68b75643925df378a105fe76544eee79907f39f8a081e7aed3e77648fb1adc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GIRGHOO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCGeDFcyWY%2FOxFEswpfEYaKp5TX8piy0%2BV52mWU0bj47QIgSd2cgTh89XuNMs9H4NP6%2F0qxezL%2F2La3RYFIilVZwswqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCP2OjSqEbyPA2PcdyrcAx2404dC2xgPmBfko8UDhTz55g%2BqcNsyPozmMWbpCjWJYeu9%2F7nb43khGKgiqx5TQD%2FrFuoHls6Nm3i%2FhziPkCpioggVrMxUo0OFJ5GNHn1ce4LFVC5OnU2ssZrdJGe2Epi1Dkcba9b%2FGxDS89sUKwtFdyWJ4QXka1uuTgo9UCeOWAu62bLiI4gBP%2F8LDradwGOQ2cjkqG79KllUIS%2FLJMtrWsuUeqQfkkVkmFglcYo45YH7UmAITHDuLQwI5SM0rqcGJyrh6bKL6pa4crD6d%2FDP%2FlyKkviVuXw3ZRp76nMt9zXgFf9Jul4cmKWL4VXz4HzWhL%2BseBYTt6hAIezwzu18K3gDAfkowCrDs%2FffUwthzqLa%2BwWoggoKxBTFyP%2FeNG9XIeFXObC4zBfzMP7Y%2FeCkHeOXZ%2FZrfwHvJmZTM7M04eWY2vQZy0w2i8QbJZS7X88K29nhKBCdGtaQ6sNMpqqjgb3Bc7JhVvnJUdknbFTmkNrJQmANqCS0hEeVtk9z1AyoROk4wdhqACmkNSWmIc%2FxXanMdKOv9G6b2gO%2F9PhCpZ%2FsBNVUXpxOhmeQ%2FcMiP%2B0EnU7O0q9bC01Ps2vh7jgf8tONqrFJ2sh2G%2BSxiME53IQ6os26E0FP5Z%2ByMOam2MQGOqUBXbECbUxlBS%2Bs6ge5SaSa4OC4Z%2F2zxaUeFjpI2xIaI4AJJbww9qw9YSjqnnkWVXwtClo1ZN%2BEVj0q%2B2%2FMtP5CpdfyKbhZ%2F1XRzLNSvx4TY9HUcePdSxc6eKWGFIqtPj8BbUSIXzGBH4CmhZ%2F1Q%2FjKm%2BMnLAvdRsDB%2FGLPJz6U6KLtogvBREDyPUdp90eKdADe8NfR7JLwPo2PohCtPM5kCS0MWKFC&X-Amz-Signature=b25c2e4c1ca350901e2b09dac35f7c84711491d7f590d289fe9e62f8387af0f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GIRGHOO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCGeDFcyWY%2FOxFEswpfEYaKp5TX8piy0%2BV52mWU0bj47QIgSd2cgTh89XuNMs9H4NP6%2F0qxezL%2F2La3RYFIilVZwswqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCP2OjSqEbyPA2PcdyrcAx2404dC2xgPmBfko8UDhTz55g%2BqcNsyPozmMWbpCjWJYeu9%2F7nb43khGKgiqx5TQD%2FrFuoHls6Nm3i%2FhziPkCpioggVrMxUo0OFJ5GNHn1ce4LFVC5OnU2ssZrdJGe2Epi1Dkcba9b%2FGxDS89sUKwtFdyWJ4QXka1uuTgo9UCeOWAu62bLiI4gBP%2F8LDradwGOQ2cjkqG79KllUIS%2FLJMtrWsuUeqQfkkVkmFglcYo45YH7UmAITHDuLQwI5SM0rqcGJyrh6bKL6pa4crD6d%2FDP%2FlyKkviVuXw3ZRp76nMt9zXgFf9Jul4cmKWL4VXz4HzWhL%2BseBYTt6hAIezwzu18K3gDAfkowCrDs%2FffUwthzqLa%2BwWoggoKxBTFyP%2FeNG9XIeFXObC4zBfzMP7Y%2FeCkHeOXZ%2FZrfwHvJmZTM7M04eWY2vQZy0w2i8QbJZS7X88K29nhKBCdGtaQ6sNMpqqjgb3Bc7JhVvnJUdknbFTmkNrJQmANqCS0hEeVtk9z1AyoROk4wdhqACmkNSWmIc%2FxXanMdKOv9G6b2gO%2F9PhCpZ%2FsBNVUXpxOhmeQ%2FcMiP%2B0EnU7O0q9bC01Ps2vh7jgf8tONqrFJ2sh2G%2BSxiME53IQ6os26E0FP5Z%2ByMOam2MQGOqUBXbECbUxlBS%2Bs6ge5SaSa4OC4Z%2F2zxaUeFjpI2xIaI4AJJbww9qw9YSjqnnkWVXwtClo1ZN%2BEVj0q%2B2%2FMtP5CpdfyKbhZ%2F1XRzLNSvx4TY9HUcePdSxc6eKWGFIqtPj8BbUSIXzGBH4CmhZ%2F1Q%2FjKm%2BMnLAvdRsDB%2FGLPJz6U6KLtogvBREDyPUdp90eKdADe8NfR7JLwPo2PohCtPM5kCS0MWKFC&X-Amz-Signature=ac67a9fc96e99738ce5729aab01ab87bc86eda27dc80b9ad79bea510ba389850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

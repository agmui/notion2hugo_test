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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B7KDH6A%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFJYNiovsOl8nRiGZbxaoRkoJxgKT8GW7%2F2XPSnWrrHQIgcMlTNehcJf7pBbZEIxoxVXhaMwBl6CTcS%2Bprx4K7jIsqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BiBI%2FDw8uQJArMSircA4c1rubHkfiIY%2BTv8vjsZlH92k7gOgILCUNQ43z4f%2FssEybb8VPWeGyTe8rqoMSjm8ujDR7VW%2BH%2FOHKhPtJXp3XJ7aBU%2FLJ0YGM8EihsZqjChGMMblnzcMgIff7Nlqn0bINIlgHWpfvYZmo1O9qT6wErZVTOQwzuFDG303jDA0uJQoP%2FhP9pl4%2F8zucnHm1SMDBNc2Wuow9wLhWCrMS5y%2FBoR0DjuhZQ0xY%2FtsTSoRLMny3rnvfZAue9GqodDbm7SB6qWtxlfj9InYdj76iRpI4mRU1pGWmvnex99t6F6N%2FoTtPtGOzTdzv0z7PTy3UbbB5eUiY6ykfGH4PLh59kaeiTnBbR%2F8jLcBR9mjnQB8n%2BsWEwMTEXP0vMdjH6RWo0or2RRGwgIeDjN3Zju83ZRjIw9tMPBKi4SpZCbS65iiUIjd4WvibAvBwdzT230UAsaOJ2O9TrkZE2XNVsg%2BsM2V478EBRtNEr5LjfeD6rxzNV%2FWQKOdL%2BiFOJtpKzXm7uVfM1ZxXkI6nxwhoAoQjj2E%2FPDqxY6XIrNnv3SfGyR5mfeBdyoYfk%2FQLiHFHHqe4OzaA00HiHTgsgLUWxhiyQ%2Bh%2FX7seM5pf5JSVHm7Qi6gA%2B4s5G4UQAPMc%2BVXbTMJfNwMMGOqUBTpiLcF67wHkFD8B%2F6nlpop4%2Fuvr4xfmlgoNeQRc78bvW8Ig4Yam1S6l99WA6ewuLbKPRV%2FnimVJIaHTF0QqrgLHGQozwtNSXZ1r%2BhTfh6fSc7I6RWZzDpW3h7%2BUc%2FV1yf2fYj9JOL%2F6x6CUgij%2FvD99KSbPf%2Bp30CYYquep4oGT%2B1YYnJvK4LPfcC0tF9B%2BFGMPb2w7C%2BS1SNHFq4%2Bcm2ldVtRSd&X-Amz-Signature=e7aad835846bdfd1377c72ab1c6653d871c924ebbb22f48b2650e902ea009fd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6DATQY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEv52GPXPJ1ah8DH6BA8H8sQO2P%2Beh65iOOsYdSW1lOZAiAzAOYB5VOLf1FlJDPFJ%2FCUi9ktog%2BgLaUWhx9io%2B56VyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6A2J1gfl4iOLugicKtwDtmvSvx2Tr0HEua4%2BSUaaoZCgbe%2FgsAefv6GAskNyX0rgI4E%2FJzD5V74netmtFPdG1aFL45AL3kcKu0emX2yOO6A%2B5RUQM5qIR2P2su92Il9vWulQgjPSAijZDoE2%2FQ47Ja5M4sRaXbFLC4Rnbi5KXe2YLs39VBLnPwW6fjDlJ%2FZK1fd0WRkPm2K4iA3JgqxcyfzCR6FwS9keO7S1FhiVpD%2BLNrFvaRw2HZ9DWiVsuD7rWjCP0ac4CWakmrhoDbb7%2FulQNDXyyvjyKtHLO7g1ZhVvtkWggHCxoE806taZ9jjamjmHm6Eb%2FTF3jL6419yBNnPAdPba43c5XpGCZf%2BUAx6M3wW42%2FUIxEc9pmya0fvZvJzDd7LCuyvEqvvor0%2Fbi8XV9P25l95483P3kU5efzbC1SLm1Xfz3GkrSYAAH7JZKo6YygffN4fn7jyS1ELav2Pf96rWXwk3Woi%2FRMgxqXU6oAnNUA9k0GJ9eQHnUpGGNsmrl9JF0wGhYFCHvxEKlVKQPG%2Bmd4KvIY%2FxlmuVuADqDm5o9B2TwMjsaOH4%2FsLhDuWMt7kzspZ%2BRViXCm7EPElXDc4aIzQaHdWSBmAuvvRPicVPPcMhz01%2F%2Fj19J794Pktt%2Fam%2Bjgwej48whM7AwwY6pgH%2BSTXuaQpBbSHrwxnsAi%2Byvzx5W7%2Bu7OEWgsKowbndteP4JjOb2HcbIj26wcMVqxpuNzTspITqEXeEx3FdfCLID%2F1Uo8BcVfwzw%2FVBpgsLMjMZWli47WimYp7V7gwkkupW7B5aCNDl9ZcwIGKOhVuLcdbf1qv%2Ft9IT7G8XwDCaEFb8%2FVrnAZphSPH3fBunDgvXDKUmvI9VTt%2F6Xhoo8YOnebwfEt9q&X-Amz-Signature=30cf186f619d085dfea2ba5491b5270a8f60c346871da01c69b3b183d5221e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6DATQY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEv52GPXPJ1ah8DH6BA8H8sQO2P%2Beh65iOOsYdSW1lOZAiAzAOYB5VOLf1FlJDPFJ%2FCUi9ktog%2BgLaUWhx9io%2B56VyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6A2J1gfl4iOLugicKtwDtmvSvx2Tr0HEua4%2BSUaaoZCgbe%2FgsAefv6GAskNyX0rgI4E%2FJzD5V74netmtFPdG1aFL45AL3kcKu0emX2yOO6A%2B5RUQM5qIR2P2su92Il9vWulQgjPSAijZDoE2%2FQ47Ja5M4sRaXbFLC4Rnbi5KXe2YLs39VBLnPwW6fjDlJ%2FZK1fd0WRkPm2K4iA3JgqxcyfzCR6FwS9keO7S1FhiVpD%2BLNrFvaRw2HZ9DWiVsuD7rWjCP0ac4CWakmrhoDbb7%2FulQNDXyyvjyKtHLO7g1ZhVvtkWggHCxoE806taZ9jjamjmHm6Eb%2FTF3jL6419yBNnPAdPba43c5XpGCZf%2BUAx6M3wW42%2FUIxEc9pmya0fvZvJzDd7LCuyvEqvvor0%2Fbi8XV9P25l95483P3kU5efzbC1SLm1Xfz3GkrSYAAH7JZKo6YygffN4fn7jyS1ELav2Pf96rWXwk3Woi%2FRMgxqXU6oAnNUA9k0GJ9eQHnUpGGNsmrl9JF0wGhYFCHvxEKlVKQPG%2Bmd4KvIY%2FxlmuVuADqDm5o9B2TwMjsaOH4%2FsLhDuWMt7kzspZ%2BRViXCm7EPElXDc4aIzQaHdWSBmAuvvRPicVPPcMhz01%2F%2Fj19J794Pktt%2Fam%2Bjgwej48whM7AwwY6pgH%2BSTXuaQpBbSHrwxnsAi%2Byvzx5W7%2Bu7OEWgsKowbndteP4JjOb2HcbIj26wcMVqxpuNzTspITqEXeEx3FdfCLID%2F1Uo8BcVfwzw%2FVBpgsLMjMZWli47WimYp7V7gwkkupW7B5aCNDl9ZcwIGKOhVuLcdbf1qv%2Ft9IT7G8XwDCaEFb8%2FVrnAZphSPH3fBunDgvXDKUmvI9VTt%2F6Xhoo8YOnebwfEt9q&X-Amz-Signature=391d6a1e972fc4d1782ab75efb9cb4fdb4435f2353dd7b77049c6dcebe06bc61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6DATQY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEv52GPXPJ1ah8DH6BA8H8sQO2P%2Beh65iOOsYdSW1lOZAiAzAOYB5VOLf1FlJDPFJ%2FCUi9ktog%2BgLaUWhx9io%2B56VyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6A2J1gfl4iOLugicKtwDtmvSvx2Tr0HEua4%2BSUaaoZCgbe%2FgsAefv6GAskNyX0rgI4E%2FJzD5V74netmtFPdG1aFL45AL3kcKu0emX2yOO6A%2B5RUQM5qIR2P2su92Il9vWulQgjPSAijZDoE2%2FQ47Ja5M4sRaXbFLC4Rnbi5KXe2YLs39VBLnPwW6fjDlJ%2FZK1fd0WRkPm2K4iA3JgqxcyfzCR6FwS9keO7S1FhiVpD%2BLNrFvaRw2HZ9DWiVsuD7rWjCP0ac4CWakmrhoDbb7%2FulQNDXyyvjyKtHLO7g1ZhVvtkWggHCxoE806taZ9jjamjmHm6Eb%2FTF3jL6419yBNnPAdPba43c5XpGCZf%2BUAx6M3wW42%2FUIxEc9pmya0fvZvJzDd7LCuyvEqvvor0%2Fbi8XV9P25l95483P3kU5efzbC1SLm1Xfz3GkrSYAAH7JZKo6YygffN4fn7jyS1ELav2Pf96rWXwk3Woi%2FRMgxqXU6oAnNUA9k0GJ9eQHnUpGGNsmrl9JF0wGhYFCHvxEKlVKQPG%2Bmd4KvIY%2FxlmuVuADqDm5o9B2TwMjsaOH4%2FsLhDuWMt7kzspZ%2BRViXCm7EPElXDc4aIzQaHdWSBmAuvvRPicVPPcMhz01%2F%2Fj19J794Pktt%2Fam%2Bjgwej48whM7AwwY6pgH%2BSTXuaQpBbSHrwxnsAi%2Byvzx5W7%2Bu7OEWgsKowbndteP4JjOb2HcbIj26wcMVqxpuNzTspITqEXeEx3FdfCLID%2F1Uo8BcVfwzw%2FVBpgsLMjMZWli47WimYp7V7gwkkupW7B5aCNDl9ZcwIGKOhVuLcdbf1qv%2Ft9IT7G8XwDCaEFb8%2FVrnAZphSPH3fBunDgvXDKUmvI9VTt%2F6Xhoo8YOnebwfEt9q&X-Amz-Signature=311e2670b9a32c93269bff1e43d14acbdcdadb3021914e27cc3db844d103eb0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

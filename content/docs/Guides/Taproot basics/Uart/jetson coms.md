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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZNAAUPU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIBNU7Pt8SGxXFNjdQ5RyML0wn9rILH6dma%2BYgq0WQGDlAiAF6a2fBjmQb%2BcfgNXbPPqz1sQOu6Ug%2BXQRYINZfIGnmSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMk%2FcPiJ%2FVAJZUZDz%2BKtwDels1q8o5XgJWqzSklQG69ccVyu9y%2FmftB%2FdMgN%2Ba6fYWiVfi2pE%2B%2F6m5LKRDYn26oz5zy%2FyXOrCHHWCTQz%2BQBGb0z4JEwagrSINIHfoxeuM6gBt9aPkOKKjf7GwHt9AVUhxSZ2ftp7r7VKqREKJC%2B37eFpXwWgs2JsMW1YCSYXzEOGJsHm%2FUUtfT80EaoHKD6i1iA%2BD1znJ849n5ohPAS5CcG5Y5z%2BcYGLkFEQVjUwKBblztyIenSjkRLUruvDje3RTSQD5bBk99kTXW13U%2BGoqW0NPsDmMC1yCMcf%2Ff3mqwM%2F2ttAK%2FW3dhRuL7%2BSu1ddLMaVhCZ7LkpSwUyGsNatezG6PGuP9e5O%2F%2F5Sc7k%2BzS9XeG6HJu99XnLztCPF8KyOlnVL9OBITIiN0TEJIOOsi1NuI8oslAPcLP20LCN3uRySCLmK3aGM3j2o8YbcCLZvL590rN5%2FuvChIF0tfwyY7h42q9W%2FkCsA8BMvZaWfT5vnT44txRm40VfjLRm4nufpwPjv9IJg6kq9ZJbGKgc6SgQCCMmFWTKCrctQZ%2BiuTGFhkVNXADqbVqRLF2GZBuEijUacYiYUD4vnFIDfmQHE50zHWuxKhd%2Fiu6ezfGG9kI6gs%2BG7YBdxaPhUAw4uqHxAY6pgEnTRYMsrJpnpOf1qpwPwFuwY%2FuJmcyn5no6Nvp4ZfPo77tCnclki65zf4T%2FfJew7%2FL%2BBSq3M7UYSWyonak%2Fummlfz1c4W%2BqGt%2BQ4mrQUM6uEZnhkYzWOWQ53260AnpF4y8MRIgYvlnjJd9P0dE3lv4T47uh2YKCzEL68JGUIAkpw5bANJU8lbWf6YgErsiAVWKbC%2FAHdWboS%2BEpcXr78MkyP2NjrUz&X-Amz-Signature=3e6c93493bf96f10ff328871192ee4e692562b1e7804d7e9e1d1832641e097d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QWWH2NB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC32MjHgUwXvXwndWpeCimTOfMRC3iBFWdmZGueTJKZ%2FQIgfEInKEUlVIUnelKr7EULzJeVRjk0QoYI%2BYsmEc8EI6Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDTT%2BCVS%2BgqgCurElSrcA842aI8LROpPQg0dZ4hwlIgpDI11O9cOacE8ON%2FPia9E%2BNbjXb8uP0CgdtDoCdm97qamMl3WGqJ4S8%2FgAhz6uv%2FaGTjCvatMxaYP2%2FbG5pI06sCyHdQocb21s%2BBrInNGHheE4m%2FW4BbPVq07YGGCnVhN7lrhTDmDgPGO7ZkxOyNJ9tHpBPh2dIM2xzjc8odBBbPSJeVKxe1WvkJq40nhO9ui62h8r0zAmXMK7YfR7UCeaNaLLwoyffDuDkmR4lP1VnPcUfb2uyGdca3lEwtMAVurgCkv7%2FjVDyQs2YUK%2FvcXTFNOdXp9ltqz4lFjMeCT7GuXGPAqS4UYO2hsGjojJThny1tpqo7EJrNcoRTbMLNr9HaqqJi%2Bl61ixtZMS74pxi4Nru8Kllg4wAsKq3ffMiegr32ULJmD18wjxSneVHFDriv7Q2a2Pt%2FTX0AobSDvN%2Bdz5T%2Fn0nj1VjaFjChtq5Me%2BXZOBdCA0cpD99OrElUA8T3dcsB9h%2Bd%2FZfRp3WHA7ogF4G9NhkF%2Fv46ft6gNmG%2FvlVsroM%2BmTuvJyqbU4Su2B36IuQDV72Q1Uk1bzm83SHTcxQf2MZ1F4CZ8hIYbDaR3eWLWD4K3S31oNB7Da5hDkV5sVF%2BkFAZOqAgMMOHqh8QGOqUBQwv1NUROAAdJb%2Fs7porZLCDpR0gT25j6IcUcD4ttZSSNAu5BgpCgusQmA6qgGij9hmyqCmsPAmfTghSJ%2FCD2BU9%2BPgSIrl9egq6%2BsytaJzfTXroVX4OsOAeQt5k6A059iLiriif%2Bcq%2BTqWR7W%2FlstdninL3PAX6SNVC%2FiJXZAKkDlXYWxnQ%2BvtjKbYp1LsWPSb%2Fc1kRuyzd3pdGgdwXUmhOTX4h4&X-Amz-Signature=a37d162c8ccf052c7e75c31754a65fc6dfcf5c216e603c9180021912aa138b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QWWH2NB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC32MjHgUwXvXwndWpeCimTOfMRC3iBFWdmZGueTJKZ%2FQIgfEInKEUlVIUnelKr7EULzJeVRjk0QoYI%2BYsmEc8EI6Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDTT%2BCVS%2BgqgCurElSrcA842aI8LROpPQg0dZ4hwlIgpDI11O9cOacE8ON%2FPia9E%2BNbjXb8uP0CgdtDoCdm97qamMl3WGqJ4S8%2FgAhz6uv%2FaGTjCvatMxaYP2%2FbG5pI06sCyHdQocb21s%2BBrInNGHheE4m%2FW4BbPVq07YGGCnVhN7lrhTDmDgPGO7ZkxOyNJ9tHpBPh2dIM2xzjc8odBBbPSJeVKxe1WvkJq40nhO9ui62h8r0zAmXMK7YfR7UCeaNaLLwoyffDuDkmR4lP1VnPcUfb2uyGdca3lEwtMAVurgCkv7%2FjVDyQs2YUK%2FvcXTFNOdXp9ltqz4lFjMeCT7GuXGPAqS4UYO2hsGjojJThny1tpqo7EJrNcoRTbMLNr9HaqqJi%2Bl61ixtZMS74pxi4Nru8Kllg4wAsKq3ffMiegr32ULJmD18wjxSneVHFDriv7Q2a2Pt%2FTX0AobSDvN%2Bdz5T%2Fn0nj1VjaFjChtq5Me%2BXZOBdCA0cpD99OrElUA8T3dcsB9h%2Bd%2FZfRp3WHA7ogF4G9NhkF%2Fv46ft6gNmG%2FvlVsroM%2BmTuvJyqbU4Su2B36IuQDV72Q1Uk1bzm83SHTcxQf2MZ1F4CZ8hIYbDaR3eWLWD4K3S31oNB7Da5hDkV5sVF%2BkFAZOqAgMMOHqh8QGOqUBQwv1NUROAAdJb%2Fs7porZLCDpR0gT25j6IcUcD4ttZSSNAu5BgpCgusQmA6qgGij9hmyqCmsPAmfTghSJ%2FCD2BU9%2BPgSIrl9egq6%2BsytaJzfTXroVX4OsOAeQt5k6A059iLiriif%2Bcq%2BTqWR7W%2FlstdninL3PAX6SNVC%2FiJXZAKkDlXYWxnQ%2BvtjKbYp1LsWPSb%2Fc1kRuyzd3pdGgdwXUmhOTX4h4&X-Amz-Signature=1371675d2681eb61966a1e334851d200c73c95ef91429059a6784fbcb10a7baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QWWH2NB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC32MjHgUwXvXwndWpeCimTOfMRC3iBFWdmZGueTJKZ%2FQIgfEInKEUlVIUnelKr7EULzJeVRjk0QoYI%2BYsmEc8EI6Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDTT%2BCVS%2BgqgCurElSrcA842aI8LROpPQg0dZ4hwlIgpDI11O9cOacE8ON%2FPia9E%2BNbjXb8uP0CgdtDoCdm97qamMl3WGqJ4S8%2FgAhz6uv%2FaGTjCvatMxaYP2%2FbG5pI06sCyHdQocb21s%2BBrInNGHheE4m%2FW4BbPVq07YGGCnVhN7lrhTDmDgPGO7ZkxOyNJ9tHpBPh2dIM2xzjc8odBBbPSJeVKxe1WvkJq40nhO9ui62h8r0zAmXMK7YfR7UCeaNaLLwoyffDuDkmR4lP1VnPcUfb2uyGdca3lEwtMAVurgCkv7%2FjVDyQs2YUK%2FvcXTFNOdXp9ltqz4lFjMeCT7GuXGPAqS4UYO2hsGjojJThny1tpqo7EJrNcoRTbMLNr9HaqqJi%2Bl61ixtZMS74pxi4Nru8Kllg4wAsKq3ffMiegr32ULJmD18wjxSneVHFDriv7Q2a2Pt%2FTX0AobSDvN%2Bdz5T%2Fn0nj1VjaFjChtq5Me%2BXZOBdCA0cpD99OrElUA8T3dcsB9h%2Bd%2FZfRp3WHA7ogF4G9NhkF%2Fv46ft6gNmG%2FvlVsroM%2BmTuvJyqbU4Su2B36IuQDV72Q1Uk1bzm83SHTcxQf2MZ1F4CZ8hIYbDaR3eWLWD4K3S31oNB7Da5hDkV5sVF%2BkFAZOqAgMMOHqh8QGOqUBQwv1NUROAAdJb%2Fs7porZLCDpR0gT25j6IcUcD4ttZSSNAu5BgpCgusQmA6qgGij9hmyqCmsPAmfTghSJ%2FCD2BU9%2BPgSIrl9egq6%2BsytaJzfTXroVX4OsOAeQt5k6A059iLiriif%2Bcq%2BTqWR7W%2FlstdninL3PAX6SNVC%2FiJXZAKkDlXYWxnQ%2BvtjKbYp1LsWPSb%2Fc1kRuyzd3pdGgdwXUmhOTX4h4&X-Amz-Signature=4d660f1cb23a565630d247c28343a0e484691a666b6ca5303ee3eb33a10fc90e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

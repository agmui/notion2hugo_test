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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SM4CM6C%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFG2CCZ4UugiZ2qrT%2F9aDIdp4HcdoyzCJ4Lt6C41ULFPAiEA%2BXUSLiTEgv3VYtTqeqCv3IWa6My6ueIYnYQSepSDwVcqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXIeTY0NMbckK51hCrcA7CVCdDfGVnzJaPWNuXZccwrSotbD6S67U89GI0Emp%2FGfxd83xk0dCa9UCPEfAXrct6Tr4E9%2FZix0NxTXNpR4OKtsy0AKeAYf2AjY%2BDhca%2FZpDqC2ynkcpKEiITbzT5WkCpO%2BfwSHJ3GhhCyYzuJ6WD%2B67HLwS7dZxYTdOrYynUoQy89Y51hpj1mR2pWwTzgHSJvIAYyLplxbLt1ZnUEZ1VjU1W1jgdQXRGAxiC277x%2B%2BUSkTlsDVsphNBov9gBoKvL1xzxeTLFhgQax4%2Bd0Efw%2Bl0iCX9Gnn0NdMBL6LDeKCeZknwxqDhtDxeXdkvW91M8xdoCSrf7TfAjLClN7SF6yM6ZjWYfs9kURMI0DjoeK7Mx9IAKILLELH1iz85pzvsHOXfHR8nr4idlTTHaSzlJcal8G1R11%2Fl1ysraNMyUplrMKjidbLUAIRKFOuSIb%2BRRInEQXcYVhsWkowk%2F3CEk2vQNV%2FSEIGOeP%2BJIiL%2FDLH6DC0U0PmlDAIQqyt5EnqLeifEBWeOFKZKkxZk69FD0IcUYjtSI1G%2FV8ErVG9Pru2iXEHCMYyPyE5Rx10VX%2B4h2B2jH1sqRlYvdw9YV%2FFuVd5CIgCtPnybXrzbP7kN7WvQb3N624MkQ%2FZNHXMOLVxcMGOqUB5vkxzfP6RVSssPH3O%2FqfcbJiyWFF1j7kJa5ZthaCBdC%2FW0xpSvFoRYZYckE9POzvwrQYK6293FX0smvOSMD7Fdi6IRFzNEERVP7UnLhQgze8xkNOBFMMI3709rZGHZvvulLy4o1%2FVf4PJfFVe3pyPZ9AMko2Zt9O8MTvsEy7fWDFxeX52U0ZruDQfgpVNqrY03Dl179%2BldgFm85K5niaS4flZnCN&X-Amz-Signature=3e1d2bb025824f0e95c7eb77a1e87fe4d6a81df3c2797eb9dac12a4416d610aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TVST27G%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzL5P8aDK3x32LqkPdHH3%2BXNmCHgOuV1vy8RUATF%2BPeAiEAgWKM55bC1M1oA2GcFvHRbFMUnOurYl57qTf81nKFzb4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2XTPA%2BSntGJTQySCrcAyYffUdJLJNdk6uj635qeTTDQcGwVAYu7QU%2FFnAKUX8Bg6cCZGjju8GEAwVlUgcIQ2mnGVYsb8qAfJXtpXfpoQEE7X3j2FIi3hnFp78tQMOe75yRMmUDiLiV%2Bu6HlBG1jVnD8e%2FSDZWtiaddt%2FyeMLgQ95BKiuvF680Z89FP2LVjxTrbdatgi9G2kW6nx18InAz%2FwnUpfP7TqhfQOdJt%2B2EqzKwjgcR8XD0gvDkcKjn7M2AYeEMGhPhlzchuw0pkIp6cOXVdZt5QCV748fOk4kjFvRuu2jnMpOZFflM0gBD2B1lNBpSzb6rMdWBv9RmDgw7cqRi61zql8mlMe6%2ByYsuBnN86dh%2B1pBZEnH7m4vzyXLV4he77Hh54o95c%2BQkRZsLGbMvFEk3A2h6Y0jId8jW5%2BW59vAjEnNXZUDX1FiwwV3ZFWgfc1slPEnX7EQ%2FLzVn589pa33OtxSZjAB9JiS1pGYbV0OtwFT05uEDvAGo4c6GD%2BHZwKlvb%2FXin37pzUmSydV1IENtLqZLHbMbHHA35KXj0YNQr%2BPVeh3EiM%2FGHWwlHOgbpiTOHbU0HcXdf5UXruYrF%2FByXtxRCVnt32geRGGjvJWvHLQLUuPVoeIrPLDMwvmrfiOFxdJ79MI7WxcMGOqUB2h0B9lusU5oicOJZwlmh043eDYfQAoOMKnDg9VITv0NpnB1V9qsUoC6lXKiQWzhFC%2BTZhj1gdZ%2Bz4MY8N0BrrZY3Cos6HrqGsJXipHzUe43gK9wIe21%2BngXCbSbhQXMzbloyxuUaOLhK3xjeybLBGuZKQhcjNKoin8gvZTZ88biRP9frw6v3OCJNg33DpvK5BKbEx0Pr%2BTLL0YlVjG%2FBDNPIGkGC&X-Amz-Signature=990778144f4eafff7035c3b41442ae80c39f4edb728bd8588dd76521f0f70a24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TVST27G%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzL5P8aDK3x32LqkPdHH3%2BXNmCHgOuV1vy8RUATF%2BPeAiEAgWKM55bC1M1oA2GcFvHRbFMUnOurYl57qTf81nKFzb4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2XTPA%2BSntGJTQySCrcAyYffUdJLJNdk6uj635qeTTDQcGwVAYu7QU%2FFnAKUX8Bg6cCZGjju8GEAwVlUgcIQ2mnGVYsb8qAfJXtpXfpoQEE7X3j2FIi3hnFp78tQMOe75yRMmUDiLiV%2Bu6HlBG1jVnD8e%2FSDZWtiaddt%2FyeMLgQ95BKiuvF680Z89FP2LVjxTrbdatgi9G2kW6nx18InAz%2FwnUpfP7TqhfQOdJt%2B2EqzKwjgcR8XD0gvDkcKjn7M2AYeEMGhPhlzchuw0pkIp6cOXVdZt5QCV748fOk4kjFvRuu2jnMpOZFflM0gBD2B1lNBpSzb6rMdWBv9RmDgw7cqRi61zql8mlMe6%2ByYsuBnN86dh%2B1pBZEnH7m4vzyXLV4he77Hh54o95c%2BQkRZsLGbMvFEk3A2h6Y0jId8jW5%2BW59vAjEnNXZUDX1FiwwV3ZFWgfc1slPEnX7EQ%2FLzVn589pa33OtxSZjAB9JiS1pGYbV0OtwFT05uEDvAGo4c6GD%2BHZwKlvb%2FXin37pzUmSydV1IENtLqZLHbMbHHA35KXj0YNQr%2BPVeh3EiM%2FGHWwlHOgbpiTOHbU0HcXdf5UXruYrF%2FByXtxRCVnt32geRGGjvJWvHLQLUuPVoeIrPLDMwvmrfiOFxdJ79MI7WxcMGOqUB2h0B9lusU5oicOJZwlmh043eDYfQAoOMKnDg9VITv0NpnB1V9qsUoC6lXKiQWzhFC%2BTZhj1gdZ%2Bz4MY8N0BrrZY3Cos6HrqGsJXipHzUe43gK9wIe21%2BngXCbSbhQXMzbloyxuUaOLhK3xjeybLBGuZKQhcjNKoin8gvZTZ88biRP9frw6v3OCJNg33DpvK5BKbEx0Pr%2BTLL0YlVjG%2FBDNPIGkGC&X-Amz-Signature=2f59945755b2c57880942c45f8f72044b0f11f049d2a548a9989eecdb0560af2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TVST27G%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzL5P8aDK3x32LqkPdHH3%2BXNmCHgOuV1vy8RUATF%2BPeAiEAgWKM55bC1M1oA2GcFvHRbFMUnOurYl57qTf81nKFzb4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2XTPA%2BSntGJTQySCrcAyYffUdJLJNdk6uj635qeTTDQcGwVAYu7QU%2FFnAKUX8Bg6cCZGjju8GEAwVlUgcIQ2mnGVYsb8qAfJXtpXfpoQEE7X3j2FIi3hnFp78tQMOe75yRMmUDiLiV%2Bu6HlBG1jVnD8e%2FSDZWtiaddt%2FyeMLgQ95BKiuvF680Z89FP2LVjxTrbdatgi9G2kW6nx18InAz%2FwnUpfP7TqhfQOdJt%2B2EqzKwjgcR8XD0gvDkcKjn7M2AYeEMGhPhlzchuw0pkIp6cOXVdZt5QCV748fOk4kjFvRuu2jnMpOZFflM0gBD2B1lNBpSzb6rMdWBv9RmDgw7cqRi61zql8mlMe6%2ByYsuBnN86dh%2B1pBZEnH7m4vzyXLV4he77Hh54o95c%2BQkRZsLGbMvFEk3A2h6Y0jId8jW5%2BW59vAjEnNXZUDX1FiwwV3ZFWgfc1slPEnX7EQ%2FLzVn589pa33OtxSZjAB9JiS1pGYbV0OtwFT05uEDvAGo4c6GD%2BHZwKlvb%2FXin37pzUmSydV1IENtLqZLHbMbHHA35KXj0YNQr%2BPVeh3EiM%2FGHWwlHOgbpiTOHbU0HcXdf5UXruYrF%2FByXtxRCVnt32geRGGjvJWvHLQLUuPVoeIrPLDMwvmrfiOFxdJ79MI7WxcMGOqUB2h0B9lusU5oicOJZwlmh043eDYfQAoOMKnDg9VITv0NpnB1V9qsUoC6lXKiQWzhFC%2BTZhj1gdZ%2Bz4MY8N0BrrZY3Cos6HrqGsJXipHzUe43gK9wIe21%2BngXCbSbhQXMzbloyxuUaOLhK3xjeybLBGuZKQhcjNKoin8gvZTZ88biRP9frw6v3OCJNg33DpvK5BKbEx0Pr%2BTLL0YlVjG%2FBDNPIGkGC&X-Amz-Signature=c1969072f032fdcc330ef29991f632a97ce134fc6d03d650a497664e467bb7df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

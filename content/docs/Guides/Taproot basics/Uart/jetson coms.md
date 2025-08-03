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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVXAQRKN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSn3tmncP%2F6rdMopZa9zHG3t6Y8DhVBYPyaz9U%2BkRUdAiEAwqiEYpF%2FAl8EKLnijrku2h0Ine2xGtsIO%2FrU1xe6Pgoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLQlyw60HQ9sNrBARyrcA1vGLELEBdSUAcOHCVy43cPxMcIWYat4LZxnG28PPBRTfUQPP2buougxOD%2F6ujk1sVG3Jqq7hkV4AkGZxnORoYsJccJwTAOpD0ZnH011W%2BwBKvo6ifQUG3LHdD4rZmzYg2CgHFqcA5trrOPjaZSulxMlvTGVKAKvQ%2BAM4w0bGZu5im%2Fmmfj7FNCXqpktouHyVPtpVVl14GVR%2BkDO2DRY7mNxkd2dCWGdVZYidcZo3CVUz4VAaWHqnfbGcGtvXZS5Q5e%2B8XAyRVsTmcBHo6C3Fq%2FU54WGdJwaaY5wQwUyYIoujRjCetXp%2BieYF36evjXKv8RJKMA5mcD9aR07tqGixqM9VNtcSE5X%2FdiE%2FS%2FmhS4K6thXahdy8ELO4hW%2FS%2F292JyOdJl888%2FdyJiuMZEr4SeOSq1Bc7Vd1dVFnQxekBFLTq8pcajXKBh34lTQJ0cEV3z%2BnSWcxc1gdZ%2BzdB3PgjEfh40gdV0w6C6nKgnakL%2Bf09kSGFMASGZMOTwiirIo1Y2afzMVhxE7t7Z8bjHyLNj7%2FXMvseU93OLG1JNpdo8%2B4iqaMCpHWALnOCcQFgTiKdH%2BoUsHtPFfpW1Z7gcKWf0T0gXWMF0HDFmTHSgoRikBP6kSMDwV3gm9AMPgMOqlu8QGOqUBHK6MughnVnKG2k%2FgDgYMDAiSlwahivMBDMvDuRad3T%2FEDerZLfFlF%2F%2F3eHyLRUrgRfordvUnI4zh5ebzZEB3sGifyDimSZ3A0%2Fmd%2FA%2BjuimykwzlqL6i8eDkbDBPZyAP3KR0Bd0JHCJrwNZGDO62u%2FLlW8V6GB%2B0%2Fa76yFVIvCmXpq%2BZqlHK%2FSwHcjpunnXR0NTO%2BsRgsvUJofXwxVXhX9CCAbM2&X-Amz-Signature=7a4ba793b40545d08736eea5b7f83439013256451186f6983881df3167e8c05c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TICDGUUL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtSo9M7t5M57F7rZQ5fzLA7j9DpG7senLBphIYYShmfAiEAxn2z4%2FbbFiorvYUy%2BPnE1gjfXd7fcBsdK6XTAp3jdeEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJR7GnT1Jegduy5jJCrcA%2By67dbSR627ccwNBK48FMUsRYQJSDI1viWaJvPmMpoHDaRfBc%2FDTXQg8%2BXJYoVHSFJ5V%2FFIglROEP12q%2BsHN2aWLa5egjhEJf%2F12oS9gyFl8147nWEdQysX%2BlambuChw4d6EbNUHYsJzFRKO1q%2Bf9H%2FYm6ppMe4cMvxCGWjyhQq23ICv2oh0Xd9s%2BbH%2BWp2dZr7YksOCx8W3icgnueXjfDjZb5PpJycprc%2FyVwNCNimtPi0gC8MJROcchpmZqhwMv%2FHvrXIwDhJ%2FGyN3YZ8WeBguvoypMSs60PB650FAQ1812iD49GwFjh8cVHBN7Qbd5onFXKhGHWReXZwT2OcgPJdBx5FbJ9%2B0a1EwVguNYmyyG4crlzKCrq%2BPLLHJL3jlrZxYIdeT9zJ9%2FEd0mRu9yyHl%2B3W6PbnXmQ3ra5oXFPNoE5zzWccdj4llWDHaO3YeQMwtki6Lf1T4VfkHMRs2kRBctWfiLITbgf7I%2FYRYNQ6zdyvcgG2iifJEk7vB3l0gD5ayF62msAPzPi2h3jlzGNBYnDtuGuKd%2B1pIjR9i1x41WeqTWO49jrgPGkekvPXZyP1F1LKABfV4vs4EKxPJL9gkgH6DWSIK0t4vZ2tdNLYSbow5Jest8wpGF%2B6MKqku8QGOqUBU7xFrtAKJdVpRxYP1uPG7FGgKNT5jq4wf%2B0dTgWKBFt3%2FtwEuOtnGfaATQUtvxT66h9sYQZpOexE37AW6jpZ%2FiTV0hMnuxB%2B5Vk%2BVf%2BZ1rXKX9twxOwcg1b1NcY3V%2BkZBO7qEdE0Kok70PYh8zDtuZ08A4apgyW78XCIVzhF32i0xg2z5NqfaPq2%2FBhsPC7M7KSKpbBXqbqqQsIV6HRYDxUIX0Mf&X-Amz-Signature=354c79441e805b1a3a5946f60aff963afca6eb5c798f5226032af38873f03d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TICDGUUL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtSo9M7t5M57F7rZQ5fzLA7j9DpG7senLBphIYYShmfAiEAxn2z4%2FbbFiorvYUy%2BPnE1gjfXd7fcBsdK6XTAp3jdeEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJR7GnT1Jegduy5jJCrcA%2By67dbSR627ccwNBK48FMUsRYQJSDI1viWaJvPmMpoHDaRfBc%2FDTXQg8%2BXJYoVHSFJ5V%2FFIglROEP12q%2BsHN2aWLa5egjhEJf%2F12oS9gyFl8147nWEdQysX%2BlambuChw4d6EbNUHYsJzFRKO1q%2Bf9H%2FYm6ppMe4cMvxCGWjyhQq23ICv2oh0Xd9s%2BbH%2BWp2dZr7YksOCx8W3icgnueXjfDjZb5PpJycprc%2FyVwNCNimtPi0gC8MJROcchpmZqhwMv%2FHvrXIwDhJ%2FGyN3YZ8WeBguvoypMSs60PB650FAQ1812iD49GwFjh8cVHBN7Qbd5onFXKhGHWReXZwT2OcgPJdBx5FbJ9%2B0a1EwVguNYmyyG4crlzKCrq%2BPLLHJL3jlrZxYIdeT9zJ9%2FEd0mRu9yyHl%2B3W6PbnXmQ3ra5oXFPNoE5zzWccdj4llWDHaO3YeQMwtki6Lf1T4VfkHMRs2kRBctWfiLITbgf7I%2FYRYNQ6zdyvcgG2iifJEk7vB3l0gD5ayF62msAPzPi2h3jlzGNBYnDtuGuKd%2B1pIjR9i1x41WeqTWO49jrgPGkekvPXZyP1F1LKABfV4vs4EKxPJL9gkgH6DWSIK0t4vZ2tdNLYSbow5Jest8wpGF%2B6MKqku8QGOqUBU7xFrtAKJdVpRxYP1uPG7FGgKNT5jq4wf%2B0dTgWKBFt3%2FtwEuOtnGfaATQUtvxT66h9sYQZpOexE37AW6jpZ%2FiTV0hMnuxB%2B5Vk%2BVf%2BZ1rXKX9twxOwcg1b1NcY3V%2BkZBO7qEdE0Kok70PYh8zDtuZ08A4apgyW78XCIVzhF32i0xg2z5NqfaPq2%2FBhsPC7M7KSKpbBXqbqqQsIV6HRYDxUIX0Mf&X-Amz-Signature=1005b242b5f27e65067f3b5160fe7de946e032153689a7db054b020be500e6e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TICDGUUL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtSo9M7t5M57F7rZQ5fzLA7j9DpG7senLBphIYYShmfAiEAxn2z4%2FbbFiorvYUy%2BPnE1gjfXd7fcBsdK6XTAp3jdeEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJR7GnT1Jegduy5jJCrcA%2By67dbSR627ccwNBK48FMUsRYQJSDI1viWaJvPmMpoHDaRfBc%2FDTXQg8%2BXJYoVHSFJ5V%2FFIglROEP12q%2BsHN2aWLa5egjhEJf%2F12oS9gyFl8147nWEdQysX%2BlambuChw4d6EbNUHYsJzFRKO1q%2Bf9H%2FYm6ppMe4cMvxCGWjyhQq23ICv2oh0Xd9s%2BbH%2BWp2dZr7YksOCx8W3icgnueXjfDjZb5PpJycprc%2FyVwNCNimtPi0gC8MJROcchpmZqhwMv%2FHvrXIwDhJ%2FGyN3YZ8WeBguvoypMSs60PB650FAQ1812iD49GwFjh8cVHBN7Qbd5onFXKhGHWReXZwT2OcgPJdBx5FbJ9%2B0a1EwVguNYmyyG4crlzKCrq%2BPLLHJL3jlrZxYIdeT9zJ9%2FEd0mRu9yyHl%2B3W6PbnXmQ3ra5oXFPNoE5zzWccdj4llWDHaO3YeQMwtki6Lf1T4VfkHMRs2kRBctWfiLITbgf7I%2FYRYNQ6zdyvcgG2iifJEk7vB3l0gD5ayF62msAPzPi2h3jlzGNBYnDtuGuKd%2B1pIjR9i1x41WeqTWO49jrgPGkekvPXZyP1F1LKABfV4vs4EKxPJL9gkgH6DWSIK0t4vZ2tdNLYSbow5Jest8wpGF%2B6MKqku8QGOqUBU7xFrtAKJdVpRxYP1uPG7FGgKNT5jq4wf%2B0dTgWKBFt3%2FtwEuOtnGfaATQUtvxT66h9sYQZpOexE37AW6jpZ%2FiTV0hMnuxB%2B5Vk%2BVf%2BZ1rXKX9twxOwcg1b1NcY3V%2BkZBO7qEdE0Kok70PYh8zDtuZ08A4apgyW78XCIVzhF32i0xg2z5NqfaPq2%2FBhsPC7M7KSKpbBXqbqqQsIV6HRYDxUIX0Mf&X-Amz-Signature=7b1b528417f61c8d1d0b7b436ceb1994c35b7b7f12b8293733212176524f9180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

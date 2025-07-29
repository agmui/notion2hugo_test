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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H237WM5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCUECDR%2BDvME3D3Uw9Ws%2BNZJ5txYWzDqa6jRZX13iwLAAIgKs8yrrVbwOsfDftA6DtNMuGvBKGww2fQUQtpdPXHQzMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyT259QqmyL3fzryircA1Fqk%2BPoTbRy1A5xvP%2FJAKHu3xRgLXAdKJoOVcyLh0igEaHvMJ2gATKpfCg7%2FlVy%2B3kHPFeM56pFG%2BFxwIhnyABewfYLEiiNSwQ78ET%2BhCU%2B0eA91Nv5BuLqrnXVyi9R%2F2dnykJzJQBGsQ7bcgRZepbgDF2w8IDA5fRAciIGwKHfYuEoqiJFfzfMzhNhV4tmSYrGiaw1HTY5SOy0KWuUX8flKPak17JDseLkgqykTvXYYES5%2Fn3UPhOhiRojSY0apYkW5KIUAWQAJP6VfsPaX6AFmFcS7lHlXwVigspA7upRNq3Y2hO%2B%2F5C6FxUfbSRjMeqVfFqNVO7n4PkqU12Na6n06XIIZXoABy925B3PPmObKGoMPNpjr1UV4%2FIkRO%2BSZ8Z6NZukwoA1%2FXirS8ShaJhF4izb989JnFu2kVLV9w7E7JGcUCowLZHNyvtL3hmETPCIPeOJQgH5JCUGGZM2At03dZcOampP0SIp6RPOWi%2BBj%2FCCIVrhxLFX%2BG9LjNckDIrdy%2FrVJWIbcYJlnFx6y5j4G5N98i7p8NFfawcAMP4jrRbbddeU%2BMcxYrDYuyJAyJRND7NpWWjJMvGUYIvTPYInzwjSntkvmd1FuPOf%2FkZjAv23U8lrIjBLKz%2FbMM%2FnosQGOqUB4QGjIKBOd2xI91RYRHdX3gdql6QMhQXslydDLJRNjvog7YyxDzgSN%2BR14hw1yhmCbXMYCgFBFa5VejXarf8btABJ0GNgGTxNbeYL7%2FHjawIQ4TFx3uJlW4q75%2BmSWVpu6coZ24QFKpUY4R4iOs%2FbA%2BjJKWgCCN54Akf0wARzigwQLNabosfpGNWIFxYApP7WqGHZi8H5Sm6baTwyjwE%2B3oKwPWmJ&X-Amz-Signature=0aa280198b267ee1d8186f024663fe1c944a2b835e8545f287452cd56df6946c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625Q4TX3F%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCM9CQ86%2FI9LqZKYQ6EQA8QbE%2F302lHllbNJ2qT%2BJ%2FQOgIgby63sPG4MmfabIoRKaRaRrUvaOX0rlwn5vUY9onyNf0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCx6uc9GOxLdU7k7yrcAxa9ITfmYpcbtyyeNnAHsx3%2F8MF8Bmt6ODCoOWMYXi%2BojRzVCZrD4G2vhPVEKfj9GnVGS32u420v2nc%2Bn5p9Hr9h4bm%2Bph4WmwV7%2Feq6EPuscn%2BbgTtBhYU%2FwbBv2jVMf1QbPT2l0qLI5CxNj7T%2FZHzDzRqNS0Ee%2FfqiPzprRWwBX4OzzlGQ3kReAY5KqcmRNhB5VaSTLFh%2FTk715MjkkCgl9OTgCIosq08p%2FIMVYZONWJi7vYKvJEiZwnMzKNo9hnnIbsDCKY4DSs9doYfdX58H8Kg6N0ZuHC8HfOctGtEMeVUB184pqNEqCXedvPVfN5b3Mb8Ld9yCDqPlQAgRMvWXqthcVpsaNxAkebQrLZ5waGeCXyv5j007jR0TPAPo%2FGSpgJO9euKdAhOXTLJ%2FdBgmEulNRiEPPWLYNoSqlCCwXiaUiyMyhBZA0XTq8twE0CZCwr1w3n0ZFnoCdEkE7ZKgYSCE4Kmes8COYODyNfzIcrDTVdJTII%2FUVPGOj7MYbjFMxyDrE6W%2BwSVDyWAT19JjSF%2Bd%2ByDd%2F54k5NUPRghRKxTQDgOu1RbCL5hEbszsP%2BqxdKejBk1GPtH01nlAAhayKlI8oZ1aq4T0OFfQRBxK2a57VsAifxdhs8XUMMLnosQGOqUBiBV5Vx2WK1WkNPjslzLFHweRmI9WWzWm4gMZt3aRXUtiTu3f2LtdiCK0CctuicTIBCPGIcA4gJLdBm0WJrhDH1St4idOGZq3kUJWv%2BTCZPUEz%2FImzhzIz8jZnoVFKUeODQfDwo3RnTTZE%2BcDkP8UDvqtGb9Gpn%2BaXQr1qCy3RmOGJ%2FMCHYmtH1wEbuli6PZvA8o8eSSt3yQfXcqU1Amc9klU5Njy&X-Amz-Signature=aadf465826d3657136f2d8c2f51434acad9a11fbd7392f36fad7a59b047751b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625Q4TX3F%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCM9CQ86%2FI9LqZKYQ6EQA8QbE%2F302lHllbNJ2qT%2BJ%2FQOgIgby63sPG4MmfabIoRKaRaRrUvaOX0rlwn5vUY9onyNf0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCx6uc9GOxLdU7k7yrcAxa9ITfmYpcbtyyeNnAHsx3%2F8MF8Bmt6ODCoOWMYXi%2BojRzVCZrD4G2vhPVEKfj9GnVGS32u420v2nc%2Bn5p9Hr9h4bm%2Bph4WmwV7%2Feq6EPuscn%2BbgTtBhYU%2FwbBv2jVMf1QbPT2l0qLI5CxNj7T%2FZHzDzRqNS0Ee%2FfqiPzprRWwBX4OzzlGQ3kReAY5KqcmRNhB5VaSTLFh%2FTk715MjkkCgl9OTgCIosq08p%2FIMVYZONWJi7vYKvJEiZwnMzKNo9hnnIbsDCKY4DSs9doYfdX58H8Kg6N0ZuHC8HfOctGtEMeVUB184pqNEqCXedvPVfN5b3Mb8Ld9yCDqPlQAgRMvWXqthcVpsaNxAkebQrLZ5waGeCXyv5j007jR0TPAPo%2FGSpgJO9euKdAhOXTLJ%2FdBgmEulNRiEPPWLYNoSqlCCwXiaUiyMyhBZA0XTq8twE0CZCwr1w3n0ZFnoCdEkE7ZKgYSCE4Kmes8COYODyNfzIcrDTVdJTII%2FUVPGOj7MYbjFMxyDrE6W%2BwSVDyWAT19JjSF%2Bd%2ByDd%2F54k5NUPRghRKxTQDgOu1RbCL5hEbszsP%2BqxdKejBk1GPtH01nlAAhayKlI8oZ1aq4T0OFfQRBxK2a57VsAifxdhs8XUMMLnosQGOqUBiBV5Vx2WK1WkNPjslzLFHweRmI9WWzWm4gMZt3aRXUtiTu3f2LtdiCK0CctuicTIBCPGIcA4gJLdBm0WJrhDH1St4idOGZq3kUJWv%2BTCZPUEz%2FImzhzIz8jZnoVFKUeODQfDwo3RnTTZE%2BcDkP8UDvqtGb9Gpn%2BaXQr1qCy3RmOGJ%2FMCHYmtH1wEbuli6PZvA8o8eSSt3yQfXcqU1Amc9klU5Njy&X-Amz-Signature=65a6c5177beb345a73f7403b1d0b1c66542972b4f1d1d02dc5188c7864cf10db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625Q4TX3F%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCM9CQ86%2FI9LqZKYQ6EQA8QbE%2F302lHllbNJ2qT%2BJ%2FQOgIgby63sPG4MmfabIoRKaRaRrUvaOX0rlwn5vUY9onyNf0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCx6uc9GOxLdU7k7yrcAxa9ITfmYpcbtyyeNnAHsx3%2F8MF8Bmt6ODCoOWMYXi%2BojRzVCZrD4G2vhPVEKfj9GnVGS32u420v2nc%2Bn5p9Hr9h4bm%2Bph4WmwV7%2Feq6EPuscn%2BbgTtBhYU%2FwbBv2jVMf1QbPT2l0qLI5CxNj7T%2FZHzDzRqNS0Ee%2FfqiPzprRWwBX4OzzlGQ3kReAY5KqcmRNhB5VaSTLFh%2FTk715MjkkCgl9OTgCIosq08p%2FIMVYZONWJi7vYKvJEiZwnMzKNo9hnnIbsDCKY4DSs9doYfdX58H8Kg6N0ZuHC8HfOctGtEMeVUB184pqNEqCXedvPVfN5b3Mb8Ld9yCDqPlQAgRMvWXqthcVpsaNxAkebQrLZ5waGeCXyv5j007jR0TPAPo%2FGSpgJO9euKdAhOXTLJ%2FdBgmEulNRiEPPWLYNoSqlCCwXiaUiyMyhBZA0XTq8twE0CZCwr1w3n0ZFnoCdEkE7ZKgYSCE4Kmes8COYODyNfzIcrDTVdJTII%2FUVPGOj7MYbjFMxyDrE6W%2BwSVDyWAT19JjSF%2Bd%2ByDd%2F54k5NUPRghRKxTQDgOu1RbCL5hEbszsP%2BqxdKejBk1GPtH01nlAAhayKlI8oZ1aq4T0OFfQRBxK2a57VsAifxdhs8XUMMLnosQGOqUBiBV5Vx2WK1WkNPjslzLFHweRmI9WWzWm4gMZt3aRXUtiTu3f2LtdiCK0CctuicTIBCPGIcA4gJLdBm0WJrhDH1St4idOGZq3kUJWv%2BTCZPUEz%2FImzhzIz8jZnoVFKUeODQfDwo3RnTTZE%2BcDkP8UDvqtGb9Gpn%2BaXQr1qCy3RmOGJ%2FMCHYmtH1wEbuli6PZvA8o8eSSt3yQfXcqU1Amc9klU5Njy&X-Amz-Signature=586536e0ca6cdd35117c5eb57c9747f56df02a9906fb839d636ced6d40ef4ed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

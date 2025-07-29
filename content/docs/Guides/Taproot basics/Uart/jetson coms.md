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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIE5VSIU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCQSrvmZNVvIK9C9Co2RNwgxekpGZVsHwy3VCLOvcntnwIgDoOzY3XCFITCc2fiMMof031Xk8y68jkuUNul8UAad1gqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYAQ%2FzUv%2FvUUhsJoCrcAwQEENSX9GGvAw9h9%2Fok5llm84LZJhpYtyi1HTw2hzmF5Xzy%2BIGg8jgxjnOzS004JrixgTct2aL1qRUjLHdtd3ClL00aooE0mnmt16p6%2Bu8f1mZ0m2lDAzwwumsg232YtiC5SoYRVU6%2BakG7jG6lmWRHThjAarmQClLyG2GiRAt80FStVTsXDwaAPyd1fKaHvzp5OP6SNq8EDyeZWyGo4iNC7N1EWqi8LL6vBFAiFtzjH9ZfmKOv1QbFJY1QU2yhZ%2Bi5%2F8pVHGX5XBvdAgpdILDC%2F7CjMe6n5K7hg4UhEcqsPjYaVTAV5ygesCw9f9m0JcTczz%2FwpCeAqwO5ZqvilOVex%2FtYky3L%2FR9OmcucltSmkucyEpsaYIUB1mLXNN3gBinKxO81Rw2rUIsKu5q2ZMtMd4iSj3YnCVZee%2BP4EM%2BEQb6b28bFQD8NvYmunot%2BiHtUxR6we0V2oJ74nfZysCHg5k%2F69wWAvr%2FipVBJMr8BhwmdBDCYbCHIfkZEiKS9skr4Z051fRCV800O3E%2FC0C5%2FJt0swG6v1BJNDfK8hEd19tO2XO%2FnZ4ZulXuQOSMvrFfFW%2B6waHsrHRyJfMsjkmM5I7jt74Ig59i6%2BE9M3S5vRjH1niVsAEz%2FCDgiMLiZo8QGOqUBNkWygkeQCM8V9qmPeSNRBAP9HqzqV7x%2FCrF7Jf3IphVOC810IeBprF7nEqmX%2Fjqp1DGq%2BjGNVsZBwLMHNCXoSU%2BYJMFZK5lY8th9LhZUZqF2U3SCgW8Mmo%2BksOHYMpc1usX8eecJt%2FmkwmWzo5ABYURk1%2BiPFwfrdqVUGGoak3hc0UqT42FHF1auutem%2FDDWPhMKc9Eje7QJ2JXOI8gu0Q92WiPR&X-Amz-Signature=8e1008cc580d38519480000a9d3c71d9205195dd952beac86590e17fb1255c20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXXHUM22%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICbb28%2FbLdyrcuMDV6%2FcN98DZP8uP6OB0RigYFyLNNzoAiA%2B13mG0IGNQ7m0sIxY96Vsw4R960Nk3MkZiP%2FiPbwZ5CqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1323czQ21jrmUeIWKtwDhxNLLnndXIdNrMzzZroy8sZMuv5CGw0dt6xyrbfYFkrxMvhoxrS6oKMFOFNDD%2Foneg3g9I3Y%2B3fbzmHJJBiMgD6Img8qGFgigfg4klqT79MwtlZduEz%2FAh73sAEdQoz0K5QGXh%2BB0R6Dsf7aX7i9sPtTYjYOo3AHWWPoxTtxHWH7dv%2Fk77bxiiDU26v3QiqHelp51t1yrZZuciNY7jXmoj8gF69%2Bm6JNGD%2F6By0UV6OuN3gQQZxYyTPORSnGN0DAkDM1oi5%2BJJu71zTjgxNBvHUuxCyv8ElXSEGnvqFNSnIdNHQL2Fg%2BsPUHZHXLk7XhutXIRpuGY6P2C%2FQMhUMBfRgE%2Ff8%2FfVCNm5JbjGIaUb1rZ578%2BZGhuc4EHa2iIO6HIERbRYn8sGhXE8qP1plrRVlV7tS3o9g6OCc2bvO%2FZnIYmNNTfCPY4UGxPGnpgT3WrBxkoLONClv46Upltc2kIRDJHDWNneCUh%2BAIUF3CKZWjOQ5f%2Fw7Rn2XR5H%2FFXWoORmEfk8vln0vuqDSSjG62zdZebRtov16UIOGjTLbnrviai8wUq0666ThjDcP13D1zhlvb2Hp%2FfxBkdDFH2mRsmfu9%2FGLlOhwQ8yqMaF%2B9B7LZECOa5YhpBAgxJ9Aw7pejxAY6pgGe%2FTkjEpNAnJGdJguwOCGkgZp7Kx9t1JAWjLipmw%2FK9wleflTv4DTT%2BWKeZmvpG%2B3D2Pp%2BCj0r%2F45CWwBa%2BoubA%2F1qFZ33DAJ2asnPedmR7F%2F2aDTVTdz8R%2F%2BQ7FGqKC9JOGdAmxRY6h9HbhhTK8j9suA6722hhNqN28fuPwo818sNzBbSntMpz%2Fzrc29lJs04pGfto9UORZzFAEe%2BQI1j6j9%2BIaJX&X-Amz-Signature=bcb9ebefc619c341885e76d2ec348159eee45d2f99ed9d03384455dfbdae63eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXXHUM22%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICbb28%2FbLdyrcuMDV6%2FcN98DZP8uP6OB0RigYFyLNNzoAiA%2B13mG0IGNQ7m0sIxY96Vsw4R960Nk3MkZiP%2FiPbwZ5CqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1323czQ21jrmUeIWKtwDhxNLLnndXIdNrMzzZroy8sZMuv5CGw0dt6xyrbfYFkrxMvhoxrS6oKMFOFNDD%2Foneg3g9I3Y%2B3fbzmHJJBiMgD6Img8qGFgigfg4klqT79MwtlZduEz%2FAh73sAEdQoz0K5QGXh%2BB0R6Dsf7aX7i9sPtTYjYOo3AHWWPoxTtxHWH7dv%2Fk77bxiiDU26v3QiqHelp51t1yrZZuciNY7jXmoj8gF69%2Bm6JNGD%2F6By0UV6OuN3gQQZxYyTPORSnGN0DAkDM1oi5%2BJJu71zTjgxNBvHUuxCyv8ElXSEGnvqFNSnIdNHQL2Fg%2BsPUHZHXLk7XhutXIRpuGY6P2C%2FQMhUMBfRgE%2Ff8%2FfVCNm5JbjGIaUb1rZ578%2BZGhuc4EHa2iIO6HIERbRYn8sGhXE8qP1plrRVlV7tS3o9g6OCc2bvO%2FZnIYmNNTfCPY4UGxPGnpgT3WrBxkoLONClv46Upltc2kIRDJHDWNneCUh%2BAIUF3CKZWjOQ5f%2Fw7Rn2XR5H%2FFXWoORmEfk8vln0vuqDSSjG62zdZebRtov16UIOGjTLbnrviai8wUq0666ThjDcP13D1zhlvb2Hp%2FfxBkdDFH2mRsmfu9%2FGLlOhwQ8yqMaF%2B9B7LZECOa5YhpBAgxJ9Aw7pejxAY6pgGe%2FTkjEpNAnJGdJguwOCGkgZp7Kx9t1JAWjLipmw%2FK9wleflTv4DTT%2BWKeZmvpG%2B3D2Pp%2BCj0r%2F45CWwBa%2BoubA%2F1qFZ33DAJ2asnPedmR7F%2F2aDTVTdz8R%2F%2BQ7FGqKC9JOGdAmxRY6h9HbhhTK8j9suA6722hhNqN28fuPwo818sNzBbSntMpz%2Fzrc29lJs04pGfto9UORZzFAEe%2BQI1j6j9%2BIaJX&X-Amz-Signature=79eb14706551731554648d428fe4dc131b93aaaa6e00d7ec2c78118e7b759636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXXHUM22%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICbb28%2FbLdyrcuMDV6%2FcN98DZP8uP6OB0RigYFyLNNzoAiA%2B13mG0IGNQ7m0sIxY96Vsw4R960Nk3MkZiP%2FiPbwZ5CqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1323czQ21jrmUeIWKtwDhxNLLnndXIdNrMzzZroy8sZMuv5CGw0dt6xyrbfYFkrxMvhoxrS6oKMFOFNDD%2Foneg3g9I3Y%2B3fbzmHJJBiMgD6Img8qGFgigfg4klqT79MwtlZduEz%2FAh73sAEdQoz0K5QGXh%2BB0R6Dsf7aX7i9sPtTYjYOo3AHWWPoxTtxHWH7dv%2Fk77bxiiDU26v3QiqHelp51t1yrZZuciNY7jXmoj8gF69%2Bm6JNGD%2F6By0UV6OuN3gQQZxYyTPORSnGN0DAkDM1oi5%2BJJu71zTjgxNBvHUuxCyv8ElXSEGnvqFNSnIdNHQL2Fg%2BsPUHZHXLk7XhutXIRpuGY6P2C%2FQMhUMBfRgE%2Ff8%2FfVCNm5JbjGIaUb1rZ578%2BZGhuc4EHa2iIO6HIERbRYn8sGhXE8qP1plrRVlV7tS3o9g6OCc2bvO%2FZnIYmNNTfCPY4UGxPGnpgT3WrBxkoLONClv46Upltc2kIRDJHDWNneCUh%2BAIUF3CKZWjOQ5f%2Fw7Rn2XR5H%2FFXWoORmEfk8vln0vuqDSSjG62zdZebRtov16UIOGjTLbnrviai8wUq0666ThjDcP13D1zhlvb2Hp%2FfxBkdDFH2mRsmfu9%2FGLlOhwQ8yqMaF%2B9B7LZECOa5YhpBAgxJ9Aw7pejxAY6pgGe%2FTkjEpNAnJGdJguwOCGkgZp7Kx9t1JAWjLipmw%2FK9wleflTv4DTT%2BWKeZmvpG%2B3D2Pp%2BCj0r%2F45CWwBa%2BoubA%2F1qFZ33DAJ2asnPedmR7F%2F2aDTVTdz8R%2F%2BQ7FGqKC9JOGdAmxRY6h9HbhhTK8j9suA6722hhNqN28fuPwo818sNzBbSntMpz%2Fzrc29lJs04pGfto9UORZzFAEe%2BQI1j6j9%2BIaJX&X-Amz-Signature=e74759390f86e50413fde80e24aeaf623e2ac81d7b2b831aa9695bd654a0b736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

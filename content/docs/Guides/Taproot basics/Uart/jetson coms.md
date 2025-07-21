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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643TFZO6L%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxCLJFfHD95AI323KfDrKHbHSRyK4siqT2htWVfhpJzAIhAOtFg03Hv1zJj1gk5euFPplLWeTLTLKSwUjPHeFdJzycKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYreX3QAiA9NA5sTcq3AP182oUzAiMDKrr%2BWoFI4um1nNUwIqTHZ0cl1DOu8r7iOn0x9c%2FyVLw2N4B%2BMtS2ZS63%2FhUh9wykBB3U4Y%2BzejbAu5s3ONhc6w7MLgvi9tByUZP5sxqGrli7Dd4pC4%2Fob9TH9t2dcIDu6cBm9V1WTihJpkmmdubgn4rK9AiJY9TA%2BiBMubxlSMEHP3W8MheEIMv6v%2B8UIzVBxeU7INqfHfBPVu64L1%2FqTH%2B6Qx2EmXgmZwlqCMnVE%2BQQgEl%2B7Qt48Y%2FjCHVDKdVahNQGJr6h5b4uq9tUm4jmFuVYKuqmm3B6rsLflvQj9w2AvxqQeiqx0yrUEt4kKRjE7HltkBa%2FgXUcyGtqzTr%2FwarzFU5yFcRA511KzpSOSBZ%2BhzD4UQ9oL%2FiO%2F8eWAKg9ycl90kFUde%2B6fhlqvx6jUkpEUn5CY2ZT6DPRJWMpwUqpPfkaEaBPXKEbZZcGLwsVCx0h4K0P9oUXLN8jnxLt6R4wsESSszpgGtnrETh1ubw82tPglgPBpQ%2BWmXR4RogOd0vj5M%2FC9UoXwOzLEr7gJgTKejExF0i3VumH5bINB3xLFl7k%2F3eCVrtk%2F66jRhfPt%2BuJ0kLhr2dZ985Rz9wE6ZiDKaDfBCPpI1V3HLx%2Bh3UD5BpUDDPk%2FfDBjqkAXf3bDMnEHR%2BuzkkjIqGEzMtBXSp0ljToBSabDCaUHt0Bd9Vka1bNWnrzGNjWu6YW3%2FTtgraCqBshKXsHoIlr8mTgrP5YWbYcQNm%2BR9wn18cJ9QdXqKajEySXnTsNrhf53Ua%2BN%2Fppbs10EhdakzM58v76p6tYQspHwa9ZNrqDe43Tgbr%2FgDqD7Wx%2BEgYloHuf6Fwb1NC%2BAz1QyhSlHhIo3E13rZn&X-Amz-Signature=dbb93c45e5104546d32e271451ba54400e9530762d4e95b0000972d08e193296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTFBBDRD%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx1%2BRV5m58xvSjTCYuAz%2BR9NlNioS2LxIdKGfRkvpm8AiB6Fz%2BaC0IQyybMxk80mhO9%2BVW4PSbTxxzrP0N%2FB3NUJSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFRxdquLbTDnDeIUyKtwDpSNpX1zKH%2BuvriYt5JZyYCCzY%2BwtrsyYpitgRY%2BHAMh6VySF65CTzn7k3nO26GUm%2BDPC2w%2BTYppq1FAyWLceR5nGh1sAmbMmupCCpW60j5224pw%2Bb0cCOWeD4AmNZQ57LHal9nwbBwGzI%2FOxzo6f2YdWL1Yw7r2tFT7GmtivvC1WM3O5Rfud624I9IrZn0vog02JcfUIil%2BeJa776ZtKmTfigGpOvcyWF6ovJdlm9RF%2B2qovtHj93z1WIz8iqFl%2BUgzPwiK%2BgoJYxW2nLkVXNy3oD4VTMwcKwtIZtsCPBnrMrGnmQMcAxmFdyU9lCHWejAurzbCP1anHr8BL%2BVbiNjwep54EXeZLoeSXeYPgirAMb9B2t5j%2FeQTTu64ZTnaRXb%2FgDit7zUML1PY12Rs7JDrmlrn%2BwVQbm9gfgo7DJVT4k4vgqCDoTKCe%2F4MI7XJCLgObV9sd%2Fks0ddbWlzy244eNUEpfgw89DSPIJNaiI7wFfCxfYQjWc6vW9rDRaUHUP3duqLP3sTb2VyHinN5P7naqj2apYex5mQF3yA9fBj62TpqtQPH4CEBPCi3Y4%2FtA%2BiBfpAPPd%2Bp4AgoYd0Fe%2BlsfzE5LeQJRLsFtYQcy2vpXth06SW%2F75w1D%2FEAw3JP3wwY6pgHigIB7ZJoVL%2F4b5y4D9XD%2FqqQTzapKfx6wasUroFfl2Igxbk%2BcWcYdPud6CcnI4ReqG8wCyVg3LjzIgbrKAuor4GU0VQPKIhoClUwx6i4c5%2FRjj7lkkVYyWSwE2ojxTt51jAkkfNFQyvfkv6r6e9oxUYP%2BUP4frwoyxEPQ1rwbv6JrC0Br5ZUH%2BihkA%2FfX6p3kEdOD6APbQRjVe0zrRMaknkDvPxiu&X-Amz-Signature=ddc5ee74530395fff8d1ca79d6fcd7a6165a4841458318286253748474263eca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTFBBDRD%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx1%2BRV5m58xvSjTCYuAz%2BR9NlNioS2LxIdKGfRkvpm8AiB6Fz%2BaC0IQyybMxk80mhO9%2BVW4PSbTxxzrP0N%2FB3NUJSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFRxdquLbTDnDeIUyKtwDpSNpX1zKH%2BuvriYt5JZyYCCzY%2BwtrsyYpitgRY%2BHAMh6VySF65CTzn7k3nO26GUm%2BDPC2w%2BTYppq1FAyWLceR5nGh1sAmbMmupCCpW60j5224pw%2Bb0cCOWeD4AmNZQ57LHal9nwbBwGzI%2FOxzo6f2YdWL1Yw7r2tFT7GmtivvC1WM3O5Rfud624I9IrZn0vog02JcfUIil%2BeJa776ZtKmTfigGpOvcyWF6ovJdlm9RF%2B2qovtHj93z1WIz8iqFl%2BUgzPwiK%2BgoJYxW2nLkVXNy3oD4VTMwcKwtIZtsCPBnrMrGnmQMcAxmFdyU9lCHWejAurzbCP1anHr8BL%2BVbiNjwep54EXeZLoeSXeYPgirAMb9B2t5j%2FeQTTu64ZTnaRXb%2FgDit7zUML1PY12Rs7JDrmlrn%2BwVQbm9gfgo7DJVT4k4vgqCDoTKCe%2F4MI7XJCLgObV9sd%2Fks0ddbWlzy244eNUEpfgw89DSPIJNaiI7wFfCxfYQjWc6vW9rDRaUHUP3duqLP3sTb2VyHinN5P7naqj2apYex5mQF3yA9fBj62TpqtQPH4CEBPCi3Y4%2FtA%2BiBfpAPPd%2Bp4AgoYd0Fe%2BlsfzE5LeQJRLsFtYQcy2vpXth06SW%2F75w1D%2FEAw3JP3wwY6pgHigIB7ZJoVL%2F4b5y4D9XD%2FqqQTzapKfx6wasUroFfl2Igxbk%2BcWcYdPud6CcnI4ReqG8wCyVg3LjzIgbrKAuor4GU0VQPKIhoClUwx6i4c5%2FRjj7lkkVYyWSwE2ojxTt51jAkkfNFQyvfkv6r6e9oxUYP%2BUP4frwoyxEPQ1rwbv6JrC0Br5ZUH%2BihkA%2FfX6p3kEdOD6APbQRjVe0zrRMaknkDvPxiu&X-Amz-Signature=525cbf636c72af7c56b0d2ab176266d2532a62c7ff49f2b11e3542baa9a39466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTFBBDRD%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx1%2BRV5m58xvSjTCYuAz%2BR9NlNioS2LxIdKGfRkvpm8AiB6Fz%2BaC0IQyybMxk80mhO9%2BVW4PSbTxxzrP0N%2FB3NUJSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFRxdquLbTDnDeIUyKtwDpSNpX1zKH%2BuvriYt5JZyYCCzY%2BwtrsyYpitgRY%2BHAMh6VySF65CTzn7k3nO26GUm%2BDPC2w%2BTYppq1FAyWLceR5nGh1sAmbMmupCCpW60j5224pw%2Bb0cCOWeD4AmNZQ57LHal9nwbBwGzI%2FOxzo6f2YdWL1Yw7r2tFT7GmtivvC1WM3O5Rfud624I9IrZn0vog02JcfUIil%2BeJa776ZtKmTfigGpOvcyWF6ovJdlm9RF%2B2qovtHj93z1WIz8iqFl%2BUgzPwiK%2BgoJYxW2nLkVXNy3oD4VTMwcKwtIZtsCPBnrMrGnmQMcAxmFdyU9lCHWejAurzbCP1anHr8BL%2BVbiNjwep54EXeZLoeSXeYPgirAMb9B2t5j%2FeQTTu64ZTnaRXb%2FgDit7zUML1PY12Rs7JDrmlrn%2BwVQbm9gfgo7DJVT4k4vgqCDoTKCe%2F4MI7XJCLgObV9sd%2Fks0ddbWlzy244eNUEpfgw89DSPIJNaiI7wFfCxfYQjWc6vW9rDRaUHUP3duqLP3sTb2VyHinN5P7naqj2apYex5mQF3yA9fBj62TpqtQPH4CEBPCi3Y4%2FtA%2BiBfpAPPd%2Bp4AgoYd0Fe%2BlsfzE5LeQJRLsFtYQcy2vpXth06SW%2F75w1D%2FEAw3JP3wwY6pgHigIB7ZJoVL%2F4b5y4D9XD%2FqqQTzapKfx6wasUroFfl2Igxbk%2BcWcYdPud6CcnI4ReqG8wCyVg3LjzIgbrKAuor4GU0VQPKIhoClUwx6i4c5%2FRjj7lkkVYyWSwE2ojxTt51jAkkfNFQyvfkv6r6e9oxUYP%2BUP4frwoyxEPQ1rwbv6JrC0Br5ZUH%2BihkA%2FfX6p3kEdOD6APbQRjVe0zrRMaknkDvPxiu&X-Amz-Signature=5a06f3fc52a87adf691314883e12982b023b4585c9cd5297dc8bb5d2484dd500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

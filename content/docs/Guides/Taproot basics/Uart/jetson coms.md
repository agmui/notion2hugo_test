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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OS2CPV2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBv8csXVxF%2FHDf%2Brp9s8BF%2FpLo1vYLoYp4LR5woVxWw5AiBxGRtMR0qlod3iYS1O1A%2FNRoy6w4g%2FSFE5KCi%2FoWixnCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMlueBMMDZUwPlmZmsKtwDIKI7dXgjWi0HmkC0UGGNbF9N%2FzJlmLharxxCYPiGt4r%2FuMNKJA6fAJAUmr1i1bmeADsP%2FucRdMuPksV%2F7EpZk74uPd%2BbOgy17zsC1AwH%2BoFNXJs2%2BJHwNwi6KRm8nezzc01UQaf18mvfeTo3xvPcD0OVXBmvDUdrpj5PPqa%2FN9hyxrcgXBo630JciGTxHlZ55sFGkJUhKvOaXNuQNy6YhP8xkG2r0rBIwPxbUEkVqRs8%2BHyNgK40oGHY%2BnC3M%2F3imftwnVrfQBqeuU2eS%2B2txSB%2F2cy8%2F7aQFcRXblc69rd8C5rSalZqzmQBS9pYWkL463%2BgifNDsXpZ%2FlKJrcE78Y0SZKnO3i62p6qhB%2BbShMVGbzHKY2qP1Jm5g4kYkoarsBTLaEQX%2FFT8HTsOb6W2vqWryDb021w0snOx0LApq%2BrkvwP2RvQpXLVzYPSTH0VbPhLfL%2B7jq1pQtK4ZwrvlPB%2BhqL%2BJSPm5NtGWXaMvhUguBjWfoC5Bln81sPk%2FfQ6bHCboR4hPLN4TfWe6Xm8PBcqHBhtBWqK0smGH8NO66xKJVW%2Ftv4kakoOzNRyp%2FbJiwcTzb1rKe%2BPqwg7Z%2FPEcvq%2FjfMzhDZD5Qi0UDg2LD9X7qXFisoIRLc1Eva8w4%2B%2B2xAY6pgGBfDlc8Evm2eg1089DDI4OnQrDwfWWQN8gWaXoBma%2Fa9APwWiGERlggHBEFNfNhiQFg5fh86sNXv3iQ%2BRBFV1UT2lgiykLddr5z4SrPmPtzmehAtaiXQ%2B5Ig826LslDbjTJha0tlZ8PxVI0kkPW7fcTQz6q72V25pk0Kxjb31ks4bjGwoXat9snOHsRlURUXQzT%2Bv13R9blM%2FJ5Xt08GVVHfjio5hx&X-Amz-Signature=3add9b3b4534cbcb59827f24ae30708785dd37a6ea89cd9b0a0067badc3d3d9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VAVUOHU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUQ7PPNXbLxFd%2BXcZ4FHaWzy1qsjHaK8MRgYTdwVvC7AiB1KVb8eVjeB23bOV5d1ixyUox0lrQfKI3vzTxSKxVJ7ir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMFSWK1hLi2u%2FaC4mOKtwDtDFdfFqKwRDiFt93VouKEye0fmw8VjUCTUd3pYf4Wf4diCQWOEUyHOZsu%2FNeFncMcSsu%2Fue9DLkPIXRq087n6awuoi7%2BJd%2BQVjps%2B%2FrPl3R0WVS9OJh%2Fw9k3v0YTTEaMmAMJcaIpvp1rMIbFgyl0FNzFNJd1j%2FikEhVh31QK6x%2FXrO6chODFVUcT0jr%2BQGxfU5eMp5TIxfbg%2Bs0X1VEaNsm9qBsbInwiZGnxM8mwMh42fb5hygKfLMdVQkOB%2Bu1hXwL2slOC%2FxxyD3EioeH48d0SJjY%2FnK9S0zN75XuMmDKfzepWPOFooJlvz8XUupSrwziow1fsU%2BNatpH1aUdr%2BWqct0jemTVj5sgjTUwDHPLFU%2FFEKGB5uIMom5R%2By040OViSTvC2i7PDDglDOOinf8eF5wyUmxTVmlp7uZ1IJLugF0lwooaPPKChMVHrwj4i%2FOO3IUmofvFpHaliCfRflaYX86NP8KV6yoLeutIgKlahfDMdIrxLJMjyrVXF4ksvA1ltWfATgCRZhJ7tnXza2v4KA1V6VmDQ%2FqyuUYhP7cWmGQ1PwqKV0pSnouHBk%2FbMNy%2BPQDrYaIurzF%2BAmLgNXv%2F7z2wTRTcT73spEHJSYYvV7yonFmVgiks4o3Iw1%2B%2B2xAY6pgEKa5Vs5yCklAy51%2FVubZvL69bmv31Odjf7MRbaFEAD%2FmroVHhUy6XIagKr1BjtodJ0pMGKDKi9%2FDhY2kJ0MCaTrkE0abKU0vsZHKE36mz1fdlPErbIfy%2F2V98KWJukMNLyU%2FhJ2zTmC0QDvdC8oOvHVZMryVQA00Wa1ImFC%2FVPG4ZbkmP7kZW%2BcGqlg9q7dboj0z7CpwxB9Bh7k6RW8P8UPsTt47GM&X-Amz-Signature=a2ce3122c5998f638a818c561474a8f8f904b74a3f913a24a3dac50fab81d556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VAVUOHU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUQ7PPNXbLxFd%2BXcZ4FHaWzy1qsjHaK8MRgYTdwVvC7AiB1KVb8eVjeB23bOV5d1ixyUox0lrQfKI3vzTxSKxVJ7ir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMFSWK1hLi2u%2FaC4mOKtwDtDFdfFqKwRDiFt93VouKEye0fmw8VjUCTUd3pYf4Wf4diCQWOEUyHOZsu%2FNeFncMcSsu%2Fue9DLkPIXRq087n6awuoi7%2BJd%2BQVjps%2B%2FrPl3R0WVS9OJh%2Fw9k3v0YTTEaMmAMJcaIpvp1rMIbFgyl0FNzFNJd1j%2FikEhVh31QK6x%2FXrO6chODFVUcT0jr%2BQGxfU5eMp5TIxfbg%2Bs0X1VEaNsm9qBsbInwiZGnxM8mwMh42fb5hygKfLMdVQkOB%2Bu1hXwL2slOC%2FxxyD3EioeH48d0SJjY%2FnK9S0zN75XuMmDKfzepWPOFooJlvz8XUupSrwziow1fsU%2BNatpH1aUdr%2BWqct0jemTVj5sgjTUwDHPLFU%2FFEKGB5uIMom5R%2By040OViSTvC2i7PDDglDOOinf8eF5wyUmxTVmlp7uZ1IJLugF0lwooaPPKChMVHrwj4i%2FOO3IUmofvFpHaliCfRflaYX86NP8KV6yoLeutIgKlahfDMdIrxLJMjyrVXF4ksvA1ltWfATgCRZhJ7tnXza2v4KA1V6VmDQ%2FqyuUYhP7cWmGQ1PwqKV0pSnouHBk%2FbMNy%2BPQDrYaIurzF%2BAmLgNXv%2F7z2wTRTcT73spEHJSYYvV7yonFmVgiks4o3Iw1%2B%2B2xAY6pgEKa5Vs5yCklAy51%2FVubZvL69bmv31Odjf7MRbaFEAD%2FmroVHhUy6XIagKr1BjtodJ0pMGKDKi9%2FDhY2kJ0MCaTrkE0abKU0vsZHKE36mz1fdlPErbIfy%2F2V98KWJukMNLyU%2FhJ2zTmC0QDvdC8oOvHVZMryVQA00Wa1ImFC%2FVPG4ZbkmP7kZW%2BcGqlg9q7dboj0z7CpwxB9Bh7k6RW8P8UPsTt47GM&X-Amz-Signature=09dc148fc8277eca75e86337eec33c02541fefc3d95281dfdcfacdff10d2959d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VAVUOHU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUQ7PPNXbLxFd%2BXcZ4FHaWzy1qsjHaK8MRgYTdwVvC7AiB1KVb8eVjeB23bOV5d1ixyUox0lrQfKI3vzTxSKxVJ7ir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMFSWK1hLi2u%2FaC4mOKtwDtDFdfFqKwRDiFt93VouKEye0fmw8VjUCTUd3pYf4Wf4diCQWOEUyHOZsu%2FNeFncMcSsu%2Fue9DLkPIXRq087n6awuoi7%2BJd%2BQVjps%2B%2FrPl3R0WVS9OJh%2Fw9k3v0YTTEaMmAMJcaIpvp1rMIbFgyl0FNzFNJd1j%2FikEhVh31QK6x%2FXrO6chODFVUcT0jr%2BQGxfU5eMp5TIxfbg%2Bs0X1VEaNsm9qBsbInwiZGnxM8mwMh42fb5hygKfLMdVQkOB%2Bu1hXwL2slOC%2FxxyD3EioeH48d0SJjY%2FnK9S0zN75XuMmDKfzepWPOFooJlvz8XUupSrwziow1fsU%2BNatpH1aUdr%2BWqct0jemTVj5sgjTUwDHPLFU%2FFEKGB5uIMom5R%2By040OViSTvC2i7PDDglDOOinf8eF5wyUmxTVmlp7uZ1IJLugF0lwooaPPKChMVHrwj4i%2FOO3IUmofvFpHaliCfRflaYX86NP8KV6yoLeutIgKlahfDMdIrxLJMjyrVXF4ksvA1ltWfATgCRZhJ7tnXza2v4KA1V6VmDQ%2FqyuUYhP7cWmGQ1PwqKV0pSnouHBk%2FbMNy%2BPQDrYaIurzF%2BAmLgNXv%2F7z2wTRTcT73spEHJSYYvV7yonFmVgiks4o3Iw1%2B%2B2xAY6pgEKa5Vs5yCklAy51%2FVubZvL69bmv31Odjf7MRbaFEAD%2FmroVHhUy6XIagKr1BjtodJ0pMGKDKi9%2FDhY2kJ0MCaTrkE0abKU0vsZHKE36mz1fdlPErbIfy%2F2V98KWJukMNLyU%2FhJ2zTmC0QDvdC8oOvHVZMryVQA00Wa1ImFC%2FVPG4ZbkmP7kZW%2BcGqlg9q7dboj0z7CpwxB9Bh7k6RW8P8UPsTt47GM&X-Amz-Signature=7e67cca02e9e3675c6fd2864ae5e34dd5a378dd731798e9c3dab38aa018c6c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KRM7XBZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBLI0%2BgFaCkrGP6kFMlXiFx0X9pcTZhR9ApuoqatnEigIgZuohVXoZLAgK8FaVKyljHq60JpSZaC13%2Fgeihwf%2BnCcqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVJ3xfxReMyIEyGzircA0R8%2B3lP8ouHvRDozRIOKlVjz%2FQq6Ve98%2BY6YImKrt7PiejiZWPfob6FRwRE%2FGmpZstFh3g%2FLoRLX%2Bx7ke81RjX3vMqts2jEd8WfoUhwv9EnicfnTYjISlL7147dGujkaX0biR8dqSwLc5UwqtAu%2BxT7V6zSM6Qq8Pgq03%2FwMi3%2BrM%2B8HLrf0i31KzQ9TRJL6j5OtCj%2FcK%2FvLFgDr%2BemQn0aKuDFW1M8UQbaZSMYV47tTBqtfkd5zzMEJNwTZcNwOCs5LHG%2BU2PSu9cF4nyjIs0ZHFKmYaXdDDipT%2Be7G1QeWnNCIb2445HMpcV4M1dBx6HB6lsRKPWZP6geasrSl5hQsHUwo6zGbMmk2jMZxEj6oTX0rFVHvmnjwF%2FaV0zjOdD%2F50HpNaSt86rYzAFJKUDiN%2BtK7H%2F8H5K5ECBeg0brQun6H3dU86giKNFd%2BtdFVgIpEp0SklWUOYowraxgZlQfgyEcRwGmrkFeDAdmf0A1WlqhlygUZbl4wc7EFxOfRT42HjSptgOdm9Pl%2B1LWZrVBKdajdpjGfMEM0PqX%2B%2F3X4aAQfJDpstth9JzjDsxvPeC0luWYI9LO%2FA4IvPFycuY6QKUq%2BGbRlc4DPYlyFI%2FDC6svuzheERF69uHCMPPNwMMGOqUBP1T6tCln4%2F4y8MMHRpRMZ93fc0PEKtiSHsH93zDbJ65QscdfHFEoWCrCXh7uCXAEr0THDUyCKh9JpYm%2BUq2vuHRPCxM2sp9feWZA%2Fc3V3OjcKoGDUvUiuOVLlCiow%2FlFhgau5kzB8cvL%2FWyHXoou6cJTwGd60bGGh9quBQryqZiU0%2BZkuwTXHstDw%2Fnb%2Bj07A4Uj%2FsuhIYqmaxeZAa9VVLkjk51S&X-Amz-Signature=9821d7b0d03f6e5d070fde43dc16c61c1cd8e73b19d9e82aed9e14fd00368c09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU7ACX4F%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAu8sLkXjfvlULDsp%2FGCbbaqAvMlkNN3m2KoND6omkULAiBpdnVrAQY66CYO8TeaAARpLzE8NqdNtDuCKTcQE4Sa8CqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvgSfGsxXnMVknZTbKtwDZ0e%2FAQfGWlRqM6HDNax13CoEBghCMARU63ilpU1ewUS9FZ%2BDIDd3rOfvwydRydImluGl7rpJpsz8NCm0%2FjMa2uRCWCRdEk4k4JO6qcgq3Pk9CuZ8fMb5ktrAxjlRfnhY7WRfAVGcybmx7O%2BYuYVNr98oBkHlaIm%2FgZcYzBzzM2iquiC4B387VCXFBEoEbg%2FUeB2JRgSlpMDda%2B6yWJp8EzIc3LttB5s7aQDK3I%2BFxFkJ1hS3yXaFhUtpt5zqaVoVtpQJzJLpn2%2BV7SzHEjXsr5N6DpjVnMILvnWnt15Ids34K4M2xwB%2FkdRRLewj5XSB7btxTuLPbdFIJdG%2BS%2BckM7v6jd1paJdH0IWGAU1AZIAsDukxADKyJ%2FbIigXQZ0UgI5pIXCISemd4m9CadyLBGTfBg%2FoD%2FquHpiI8XlAS893kkFXSAT3wqx%2FaL%2BueeZ95sdc%2FQYyKgVULqkGu4LE%2F1EwNNzw1aVLAmmZq0ob8BMJGrFxFFkmvPNusmrzKaCJ8DfTIPk8R3HQqz0RyvQesX3vc7b7KIaFLlMpTGjdVmdmXlC2vpNRZRMO6UbYzi1DrwH6pmrAZR34Xo04gV4j6nuKG3HB2A2KaU6ScZ5jZAS4t6bj7shNN8mkAgdMwk87AwwY6pgGSPWUJKhoWDW%2BQ%2F%2FX2xEVRM3eleKrXoPsDF9TCb3ek2Bi9Pxef4kwS1yKy8Zs%2B0RtNVu0SqmCs2E4s6TQkK07xaYrxD8N6MhcJUmY6YCQ%2FjnaemfaN6HZyGlw48o0vMULL8aYXD37V8w1yTvDjWauUtbQGMVDYRHyY%2FgKikcTVBnDEkhKUWAo3dut2PCpPBlWMxx9%2BIclFxIUydqWlaz7yHKKQ1GX%2F&X-Amz-Signature=276e784a3456597db0190e114014fd6cd2b1bd0f2c714589b6c0a9e89b444edc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU7ACX4F%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAu8sLkXjfvlULDsp%2FGCbbaqAvMlkNN3m2KoND6omkULAiBpdnVrAQY66CYO8TeaAARpLzE8NqdNtDuCKTcQE4Sa8CqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvgSfGsxXnMVknZTbKtwDZ0e%2FAQfGWlRqM6HDNax13CoEBghCMARU63ilpU1ewUS9FZ%2BDIDd3rOfvwydRydImluGl7rpJpsz8NCm0%2FjMa2uRCWCRdEk4k4JO6qcgq3Pk9CuZ8fMb5ktrAxjlRfnhY7WRfAVGcybmx7O%2BYuYVNr98oBkHlaIm%2FgZcYzBzzM2iquiC4B387VCXFBEoEbg%2FUeB2JRgSlpMDda%2B6yWJp8EzIc3LttB5s7aQDK3I%2BFxFkJ1hS3yXaFhUtpt5zqaVoVtpQJzJLpn2%2BV7SzHEjXsr5N6DpjVnMILvnWnt15Ids34K4M2xwB%2FkdRRLewj5XSB7btxTuLPbdFIJdG%2BS%2BckM7v6jd1paJdH0IWGAU1AZIAsDukxADKyJ%2FbIigXQZ0UgI5pIXCISemd4m9CadyLBGTfBg%2FoD%2FquHpiI8XlAS893kkFXSAT3wqx%2FaL%2BueeZ95sdc%2FQYyKgVULqkGu4LE%2F1EwNNzw1aVLAmmZq0ob8BMJGrFxFFkmvPNusmrzKaCJ8DfTIPk8R3HQqz0RyvQesX3vc7b7KIaFLlMpTGjdVmdmXlC2vpNRZRMO6UbYzi1DrwH6pmrAZR34Xo04gV4j6nuKG3HB2A2KaU6ScZ5jZAS4t6bj7shNN8mkAgdMwk87AwwY6pgGSPWUJKhoWDW%2BQ%2F%2FX2xEVRM3eleKrXoPsDF9TCb3ek2Bi9Pxef4kwS1yKy8Zs%2B0RtNVu0SqmCs2E4s6TQkK07xaYrxD8N6MhcJUmY6YCQ%2FjnaemfaN6HZyGlw48o0vMULL8aYXD37V8w1yTvDjWauUtbQGMVDYRHyY%2FgKikcTVBnDEkhKUWAo3dut2PCpPBlWMxx9%2BIclFxIUydqWlaz7yHKKQ1GX%2F&X-Amz-Signature=c61f7e8f599813dedf9a0a4b0d5bf688c11c1cc3d71031d04b6a7ff4084f1fa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU7ACX4F%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAu8sLkXjfvlULDsp%2FGCbbaqAvMlkNN3m2KoND6omkULAiBpdnVrAQY66CYO8TeaAARpLzE8NqdNtDuCKTcQE4Sa8CqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvgSfGsxXnMVknZTbKtwDZ0e%2FAQfGWlRqM6HDNax13CoEBghCMARU63ilpU1ewUS9FZ%2BDIDd3rOfvwydRydImluGl7rpJpsz8NCm0%2FjMa2uRCWCRdEk4k4JO6qcgq3Pk9CuZ8fMb5ktrAxjlRfnhY7WRfAVGcybmx7O%2BYuYVNr98oBkHlaIm%2FgZcYzBzzM2iquiC4B387VCXFBEoEbg%2FUeB2JRgSlpMDda%2B6yWJp8EzIc3LttB5s7aQDK3I%2BFxFkJ1hS3yXaFhUtpt5zqaVoVtpQJzJLpn2%2BV7SzHEjXsr5N6DpjVnMILvnWnt15Ids34K4M2xwB%2FkdRRLewj5XSB7btxTuLPbdFIJdG%2BS%2BckM7v6jd1paJdH0IWGAU1AZIAsDukxADKyJ%2FbIigXQZ0UgI5pIXCISemd4m9CadyLBGTfBg%2FoD%2FquHpiI8XlAS893kkFXSAT3wqx%2FaL%2BueeZ95sdc%2FQYyKgVULqkGu4LE%2F1EwNNzw1aVLAmmZq0ob8BMJGrFxFFkmvPNusmrzKaCJ8DfTIPk8R3HQqz0RyvQesX3vc7b7KIaFLlMpTGjdVmdmXlC2vpNRZRMO6UbYzi1DrwH6pmrAZR34Xo04gV4j6nuKG3HB2A2KaU6ScZ5jZAS4t6bj7shNN8mkAgdMwk87AwwY6pgGSPWUJKhoWDW%2BQ%2F%2FX2xEVRM3eleKrXoPsDF9TCb3ek2Bi9Pxef4kwS1yKy8Zs%2B0RtNVu0SqmCs2E4s6TQkK07xaYrxD8N6MhcJUmY6YCQ%2FjnaemfaN6HZyGlw48o0vMULL8aYXD37V8w1yTvDjWauUtbQGMVDYRHyY%2FgKikcTVBnDEkhKUWAo3dut2PCpPBlWMxx9%2BIclFxIUydqWlaz7yHKKQ1GX%2F&X-Amz-Signature=980a5e951bf92162b7af355bc0527e4f8c7834017ae6a400e4449032665cdab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

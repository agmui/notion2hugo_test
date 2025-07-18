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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L6DGRVS%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFTj%2BSg1xqSpSo3q5mv%2Bf3XlWIqYRitSkqKFdzR%2BCQODAiEAlXRzFFQ91Asxeg%2BJIG1UpyiLqYIjh6j3VfkUas2EGVwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZM7AP0db9hVOp7ZSrcAx%2FWSk2cfJ3Si2tuY%2Fhu4FFmMPDMCJSkoPvhMey7tghTkPotHAv%2Bh7gvDgv2qi2%2FRxsqQo5u%2Bcb7McCEGbsAJrddHq8FhXMpJ5JRtW%2BYT99dbRehayrbIU1o%2B2gCZM3wLXZ%2F0OCBZI3WreeybSXuQdR2A6ij5xVNtBrRx1ytowQ6TIrBvfiptf6oD4w%2BI9vBU3NlHxxstEiczNj6ByYkyiedu%2FQAwqEpRw2bIJwZlgX9G8dcbm3WhdyOfVt1k6o17A0mzC2Ac4vNcgJ%2BnGN%2Fb6%2BOrCFkm8dA4PK%2F%2BoNZXBmbgshuUblW%2F9XpOUE4pTeL1mUzyucjaMTpSd6u3r2L8UtLQgC5O0FJRBJbZ1ncwfoyLRQM2y8Qjh7FFGPHFrVtpRMySZTyh4KVKgNpsv6LiRvz4oLsp56%2BmLzaoBtgkcEhgWndSot2C3UnyCHqbx5eHJJ4ZX6c75P0q4h4hYarn1s3ySk3Sbnvjm32KlloF6h%2Bk6BHlFiypVg3wCl8uXwdm1%2FSWKCC8f37gSUP0Y96L1mt5Lvv4D6dwPgyKoay2P6opvCGgFgZL%2F0NxgRtHgVYapJdiGK86k6hgk3dxGDD7rd3TesL9CHA4n7piKtx3GmppsUzwZkoUM1cQbMtMPGv58MGOqUBJ2df5b%2BjwZCobpczd87vTHD9UgZkdItCW5eHId4c%2BOG4zgZwBxoYgLVyZ%2BCXabr0jkVv6ej0x8Ve8oKUa%2BwIQd5e3mC%2BPMqX92SLIWyW2ta64nEJXTl1woY5Y%2F3ZuTY1vyglphMUnauIhDQpvbYoz%2FSzCL8ys5%2FG2eQY1olGSb89Ltz%2B1ewmMnRnvQ9kXRrah%2Fx%2FVOSgS5%2F82MN86RKlASJ1Qggo&X-Amz-Signature=f33667f5a596109a813a00bfd81de7d2973678c8e8a6e1bdc1ec7666496a9897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIPCRWIR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDy16arNBWxPspvsPMG9G%2FSqLtLzvKdt0ANXntzjQkK1QIgHCCRx1T74I3w3caUH0SVGA7stld7FoihFTkzz2AL8wIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCtCu0SLpoTT1k%2B8ircAy3fYbjhE5KaaRPqECFP1WVNMNVoEyWjgINTPwflHQIT3DscEuO%2FWIrKCwaOMI3sdD2Wu9Fna2GDE5t42Sj8gd%2FQj2STwlFbU7rXFxMX9xnM0mrl4y6V%2BSp%2BXflmLvntI23eH%2BbFx4aNA1DjK34C3gwrV0Wn1RWuxgQ3ZO3%2FWReDeJyLFRL39Jx%2BYJYzq64YXsC%2B%2BZ3kWiWZEsc%2F4FAuiPYBb8wC9ierstSPS%2FxjXa6Z5vL%2F4SFMRixo1CWdfsAY%2BkWKJcpwH45VIEXZaAVUvIWKvWgZsgT9Yo3DYuMJW9yRddI4cnU2r%2BPt5pOvZcdJKsYzNgQLhvJybSEJsjegPMSLm1M0K95tEgycCjsI1q29uVsqtueFw6kN0NdVfjnJ24BveoA%2FN%2BU%2FwvPDsVhnwBYfB%2BTM9AkWXlSzvKa3t215kMDs3xI7W9blWNaNMiISRPUU3k29%2Ffm8bvvrdt5h6OGe8O7QhMIrlMaXydyg4k1NF98Mvs%2F8ZjUL0YFFB9ZbqtO4Uknn9N2PEZP9K0d30RpyHA5jHkB8np2eXK%2BQ6RE73srMdvRiqWehuQcMq5qp5OtHr%2Bvnzwb9Zxw%2FqJlMCcCpNIhnwWiOw3KkSmc4LDfr0TwxW23zQlnOUOuqMJOw58MGOqUB19cOPgWKYSW9wCDQuYfP93ME6%2BdpbSDqi1ZnGY3jsSrxAl9n30UmpfdB%2Ft438L9hOjBeyFhESO6r5ywf1jCI0py4UcsMMUUe%2FEi5srK82uSjln0OgRBWzWjKOyFVYH2%2FJb1YM4%2FciK9OLMcsVFgr271bOW%2F9p5Uz9hJxz7OkQkUIxjwmtgkSFAdLutHWlxwk3n8ReOmabOkEpA1Jkvb2whYYrXAN&X-Amz-Signature=3e3473959f356b71a53b032407f57487b4d1a8c95ddbfcd1ce36a96b57382d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIPCRWIR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDy16arNBWxPspvsPMG9G%2FSqLtLzvKdt0ANXntzjQkK1QIgHCCRx1T74I3w3caUH0SVGA7stld7FoihFTkzz2AL8wIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCtCu0SLpoTT1k%2B8ircAy3fYbjhE5KaaRPqECFP1WVNMNVoEyWjgINTPwflHQIT3DscEuO%2FWIrKCwaOMI3sdD2Wu9Fna2GDE5t42Sj8gd%2FQj2STwlFbU7rXFxMX9xnM0mrl4y6V%2BSp%2BXflmLvntI23eH%2BbFx4aNA1DjK34C3gwrV0Wn1RWuxgQ3ZO3%2FWReDeJyLFRL39Jx%2BYJYzq64YXsC%2B%2BZ3kWiWZEsc%2F4FAuiPYBb8wC9ierstSPS%2FxjXa6Z5vL%2F4SFMRixo1CWdfsAY%2BkWKJcpwH45VIEXZaAVUvIWKvWgZsgT9Yo3DYuMJW9yRddI4cnU2r%2BPt5pOvZcdJKsYzNgQLhvJybSEJsjegPMSLm1M0K95tEgycCjsI1q29uVsqtueFw6kN0NdVfjnJ24BveoA%2FN%2BU%2FwvPDsVhnwBYfB%2BTM9AkWXlSzvKa3t215kMDs3xI7W9blWNaNMiISRPUU3k29%2Ffm8bvvrdt5h6OGe8O7QhMIrlMaXydyg4k1NF98Mvs%2F8ZjUL0YFFB9ZbqtO4Uknn9N2PEZP9K0d30RpyHA5jHkB8np2eXK%2BQ6RE73srMdvRiqWehuQcMq5qp5OtHr%2Bvnzwb9Zxw%2FqJlMCcCpNIhnwWiOw3KkSmc4LDfr0TwxW23zQlnOUOuqMJOw58MGOqUB19cOPgWKYSW9wCDQuYfP93ME6%2BdpbSDqi1ZnGY3jsSrxAl9n30UmpfdB%2Ft438L9hOjBeyFhESO6r5ywf1jCI0py4UcsMMUUe%2FEi5srK82uSjln0OgRBWzWjKOyFVYH2%2FJb1YM4%2FciK9OLMcsVFgr271bOW%2F9p5Uz9hJxz7OkQkUIxjwmtgkSFAdLutHWlxwk3n8ReOmabOkEpA1Jkvb2whYYrXAN&X-Amz-Signature=8e13256c8058b6f3ce5bbdab4e607e0cad0ba87419d72bac8f5472ecb7ff0eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIPCRWIR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDy16arNBWxPspvsPMG9G%2FSqLtLzvKdt0ANXntzjQkK1QIgHCCRx1T74I3w3caUH0SVGA7stld7FoihFTkzz2AL8wIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCtCu0SLpoTT1k%2B8ircAy3fYbjhE5KaaRPqECFP1WVNMNVoEyWjgINTPwflHQIT3DscEuO%2FWIrKCwaOMI3sdD2Wu9Fna2GDE5t42Sj8gd%2FQj2STwlFbU7rXFxMX9xnM0mrl4y6V%2BSp%2BXflmLvntI23eH%2BbFx4aNA1DjK34C3gwrV0Wn1RWuxgQ3ZO3%2FWReDeJyLFRL39Jx%2BYJYzq64YXsC%2B%2BZ3kWiWZEsc%2F4FAuiPYBb8wC9ierstSPS%2FxjXa6Z5vL%2F4SFMRixo1CWdfsAY%2BkWKJcpwH45VIEXZaAVUvIWKvWgZsgT9Yo3DYuMJW9yRddI4cnU2r%2BPt5pOvZcdJKsYzNgQLhvJybSEJsjegPMSLm1M0K95tEgycCjsI1q29uVsqtueFw6kN0NdVfjnJ24BveoA%2FN%2BU%2FwvPDsVhnwBYfB%2BTM9AkWXlSzvKa3t215kMDs3xI7W9blWNaNMiISRPUU3k29%2Ffm8bvvrdt5h6OGe8O7QhMIrlMaXydyg4k1NF98Mvs%2F8ZjUL0YFFB9ZbqtO4Uknn9N2PEZP9K0d30RpyHA5jHkB8np2eXK%2BQ6RE73srMdvRiqWehuQcMq5qp5OtHr%2Bvnzwb9Zxw%2FqJlMCcCpNIhnwWiOw3KkSmc4LDfr0TwxW23zQlnOUOuqMJOw58MGOqUB19cOPgWKYSW9wCDQuYfP93ME6%2BdpbSDqi1ZnGY3jsSrxAl9n30UmpfdB%2Ft438L9hOjBeyFhESO6r5ywf1jCI0py4UcsMMUUe%2FEi5srK82uSjln0OgRBWzWjKOyFVYH2%2FJb1YM4%2FciK9OLMcsVFgr271bOW%2F9p5Uz9hJxz7OkQkUIxjwmtgkSFAdLutHWlxwk3n8ReOmabOkEpA1Jkvb2whYYrXAN&X-Amz-Signature=4cbf6078e8e9242adffe11abd7f9ff9e722d04343203b5eb5da0a499810a8a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

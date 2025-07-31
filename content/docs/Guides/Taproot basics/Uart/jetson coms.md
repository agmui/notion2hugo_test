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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y52O465C%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMwjYH7sPhqiGV%2BdK%2Fsx8eggObltx%2Fh7yP6rMXyxj8YgIhAKb5eITnLSAZcFyuEY5huwkdps4lg%2FVoRfsnla1Nwd6bKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9J%2BqwGiIxkk4DhFoq3AM5TarG3DglxNjE%2B3gEttFVF4fec6albxj2O54YUPvK2TNZtkM0dA4gxGhVB3gUqNFVS%2FDxbsAk2qscl%2FjfnW2Xs1ZNtY1XImEpBQN%2BptRUZeUjg9Oviz01lAau8YZs36qPER8ra%2BywcWlDwOOcDSyIDth7bnlmDA3UeKQxX0%2FfyJhp1afoFNLVyhYI%2FD66ViLG%2BW04ivKW63Fg%2F6qjYls7U3yeTalfWKz%2FXPZ%2BT59JXGvRt1IdWP3l4NoRtwJdXw26RBnxT%2Be9oDanWq5b3XMFVWlH5lQaeaELxfpZLbkHYfAmj7crd46uLlnrXIvSgUmtHMnJcq72l2%2F4DQSR%2BFym0e%2FWjKwC4%2Fg1Mx4KXt%2BAhdPtZG%2FsYYQfGN3uO2TfWLY4ip3ny%2Fcl52h0G02d9vJ5V8FhXHBeklerDul3LpzwlqrQ5%2BGDG1lodu1mXL%2B46Mp4FN0u2dgG6L9Aw6bruQV4y%2FIeRscdJUJKmz43APl%2FRDR5RE0z6a7ayut8wn6N1qcmur7gizqvQ2D7PFjq7IufUg81E%2BAJ1wEvfuNqZG%2B3Lp2ykvV0%2BGaJ5ylvTaiWcNAWF3YrrtnjP%2Bua4os7AT03Taq%2FDWErd%2BLaAesQAH%2FzpyM%2F83O0PrrMsUb8VzDZzK%2FEBjqkAUvwvyw0go5MUqSmRMRIgSfmkAwvEDggovA4vQkEHg%2F%2BZuG7Sz4vlMMnA45GUjQhYjJ8H4YAWMDi0oS8H%2F5sJHdH64K247CFJW4RQY1GtwWiQKjjHkd69E9Ain31kDEqLoHtUXXT2oNwM2LFPVvGM36LHDAUyLtpUizOK3MGiIL85nqxRjbMXzAS8i0NWxRMbZeJejq0JH6IhxtaDnwh%2Fo%2B8D8Il&X-Amz-Signature=3fd8c5a489352972c179f3cf67e395c79d118585b9528eaadb0f7909860ea212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JOWKH37%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHhQxHSNdxDhAKAQtqTCRiRJ0J8XS2PYiPBhV1U%2BjZOQIhAM1PUcE7I8XHnotpBv89X8laoo1MSG%2B6C9YpNoHlQz3lKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyH0v3ufKS6zbU6OYYq3AP3SUWBlIhwecSa24zhfUhDOoffeU8RSczD3DgLg4nBQJK%2FzWRC0Ma9c1UG9QtRr8pilykKydElU0RggHrJMiyf1%2FJFhpoHm%2Bn2FacF8xpM07DJAba3iMZgqBBHqjrNPx9SCcrDNrVZGb3ZYwRop60saqd4IG33Fed7nAIYEDi10fbfxfTz9GxGg4lx6XWYpgI9fa4VRQghkzF1MbMwTIRHbIxNny3MB0J2dSOliwkB2dquwnKpBZAY0hm8KYoob4vasjmzr%2BVxgQ5DwZmOTQgFE3kT%2FrJOs10%2Fuo8A%2BLMw40eIbuvz9GwFO1DumNo4eSdz2wXz0xBWv49fgjS3%2F8JF7XxO4MoZqOiLTRblAX%2Ffg%2Bpdpa1ow%2BReli%2FPukmeqnRK1fXJ96OxeG0Ayx5IzzfwG38PbB64tQjH5%2FERpkfjmQlXhj1UStdKDV%2B5cYLl2Yp59Wf1mO1beyj%2Fv%2B8HBARDonTp7ulDem8V5x%2FDVQm5OlHVK%2BpUKZb8q%2F8%2BWy%2FQuM%2FlTKMH5TeLe84qECDpmHFz3qCOLDlpn%2Buu8i7nJ8KHJ5RqaoLKwyCj4D7moQCzXosY5y18ySXdxOSmgXAcH2ARIjPOMga%2FXyHcNJqAvXbf99ysjvgIni3R8yTr2zDjzK%2FEBjqkAe6xPYe8p1OJzvsHm7kuP7Jjj1G6VU1OkHfIUu0oM0W359isBBIKjdcUWnrtvXa1hjhRpERI5KfdqCNuVq3LbFU9C%2BH1qUrYNj0EG6s9Rmhbd%2BD2s11bes99wSbLZQswnbjJ4miTophCSz4AJpjAUOmoy3XCMIb8orYljcexBkr%2FrrXCsHk8qQ%2Fekufk1WqdWsl%2F4DFYeetEsXGKvzGrWkkoZ3hq&X-Amz-Signature=ccb448b812d41b8c1a22d210feb3537b933363ee1ecc2f03899ad43eaf79de58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JOWKH37%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHhQxHSNdxDhAKAQtqTCRiRJ0J8XS2PYiPBhV1U%2BjZOQIhAM1PUcE7I8XHnotpBv89X8laoo1MSG%2B6C9YpNoHlQz3lKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyH0v3ufKS6zbU6OYYq3AP3SUWBlIhwecSa24zhfUhDOoffeU8RSczD3DgLg4nBQJK%2FzWRC0Ma9c1UG9QtRr8pilykKydElU0RggHrJMiyf1%2FJFhpoHm%2Bn2FacF8xpM07DJAba3iMZgqBBHqjrNPx9SCcrDNrVZGb3ZYwRop60saqd4IG33Fed7nAIYEDi10fbfxfTz9GxGg4lx6XWYpgI9fa4VRQghkzF1MbMwTIRHbIxNny3MB0J2dSOliwkB2dquwnKpBZAY0hm8KYoob4vasjmzr%2BVxgQ5DwZmOTQgFE3kT%2FrJOs10%2Fuo8A%2BLMw40eIbuvz9GwFO1DumNo4eSdz2wXz0xBWv49fgjS3%2F8JF7XxO4MoZqOiLTRblAX%2Ffg%2Bpdpa1ow%2BReli%2FPukmeqnRK1fXJ96OxeG0Ayx5IzzfwG38PbB64tQjH5%2FERpkfjmQlXhj1UStdKDV%2B5cYLl2Yp59Wf1mO1beyj%2Fv%2B8HBARDonTp7ulDem8V5x%2FDVQm5OlHVK%2BpUKZb8q%2F8%2BWy%2FQuM%2FlTKMH5TeLe84qECDpmHFz3qCOLDlpn%2Buu8i7nJ8KHJ5RqaoLKwyCj4D7moQCzXosY5y18ySXdxOSmgXAcH2ARIjPOMga%2FXyHcNJqAvXbf99ysjvgIni3R8yTr2zDjzK%2FEBjqkAe6xPYe8p1OJzvsHm7kuP7Jjj1G6VU1OkHfIUu0oM0W359isBBIKjdcUWnrtvXa1hjhRpERI5KfdqCNuVq3LbFU9C%2BH1qUrYNj0EG6s9Rmhbd%2BD2s11bes99wSbLZQswnbjJ4miTophCSz4AJpjAUOmoy3XCMIb8orYljcexBkr%2FrrXCsHk8qQ%2Fekufk1WqdWsl%2F4DFYeetEsXGKvzGrWkkoZ3hq&X-Amz-Signature=64455ace72b4e2b01a7e26f129ca2b8753a36faaed39acda61cb397857d265ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JOWKH37%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHhQxHSNdxDhAKAQtqTCRiRJ0J8XS2PYiPBhV1U%2BjZOQIhAM1PUcE7I8XHnotpBv89X8laoo1MSG%2B6C9YpNoHlQz3lKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyH0v3ufKS6zbU6OYYq3AP3SUWBlIhwecSa24zhfUhDOoffeU8RSczD3DgLg4nBQJK%2FzWRC0Ma9c1UG9QtRr8pilykKydElU0RggHrJMiyf1%2FJFhpoHm%2Bn2FacF8xpM07DJAba3iMZgqBBHqjrNPx9SCcrDNrVZGb3ZYwRop60saqd4IG33Fed7nAIYEDi10fbfxfTz9GxGg4lx6XWYpgI9fa4VRQghkzF1MbMwTIRHbIxNny3MB0J2dSOliwkB2dquwnKpBZAY0hm8KYoob4vasjmzr%2BVxgQ5DwZmOTQgFE3kT%2FrJOs10%2Fuo8A%2BLMw40eIbuvz9GwFO1DumNo4eSdz2wXz0xBWv49fgjS3%2F8JF7XxO4MoZqOiLTRblAX%2Ffg%2Bpdpa1ow%2BReli%2FPukmeqnRK1fXJ96OxeG0Ayx5IzzfwG38PbB64tQjH5%2FERpkfjmQlXhj1UStdKDV%2B5cYLl2Yp59Wf1mO1beyj%2Fv%2B8HBARDonTp7ulDem8V5x%2FDVQm5OlHVK%2BpUKZb8q%2F8%2BWy%2FQuM%2FlTKMH5TeLe84qECDpmHFz3qCOLDlpn%2Buu8i7nJ8KHJ5RqaoLKwyCj4D7moQCzXosY5y18ySXdxOSmgXAcH2ARIjPOMga%2FXyHcNJqAvXbf99ysjvgIni3R8yTr2zDjzK%2FEBjqkAe6xPYe8p1OJzvsHm7kuP7Jjj1G6VU1OkHfIUu0oM0W359isBBIKjdcUWnrtvXa1hjhRpERI5KfdqCNuVq3LbFU9C%2BH1qUrYNj0EG6s9Rmhbd%2BD2s11bes99wSbLZQswnbjJ4miTophCSz4AJpjAUOmoy3XCMIb8orYljcexBkr%2FrrXCsHk8qQ%2Fekufk1WqdWsl%2F4DFYeetEsXGKvzGrWkkoZ3hq&X-Amz-Signature=5c899a7571896dded0eca063b80ee4f5879bcd3db814537d58926089a1702c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

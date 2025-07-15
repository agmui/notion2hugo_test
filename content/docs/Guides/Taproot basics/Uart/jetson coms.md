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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XGIZB2W%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIGqFunH%2FS1Iko%2BquYUR%2FWioYyh%2BAMciM1irvEmqnDU4zAiBxY9psL6QXD9AewilTG%2F4uz8uaYaAAh3QcrNZf6Ym52yr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM%2F4kwU22ZLh3hMYKQKtwDO%2FJmB7hq64wSuu9fqfP0CuSbaq0UTjaGGS00kghUW5Wg99%2FDV9GLPj9oH9dwvtH7b0vDL2Vicwe1YY%2F4LW1MKj5bTaCrTCixfiYmpyFXRRZWsxGllihnFnQ%2Fn64dMFaRVKLVkcLk2xAAs%2F%2BuR9eEQXocfB7cdRoEqqxFdROJxsEIa70yWsLgkJzU0YPszMauIyePsOnbbi9S0L%2Bjazd0PGPWNdUV%2FUFiiyzifdF3KyRRkOrEtDV8UdZwSzDuommPUlYNo2IUnm3QfqsXIimLe2kyYUVN7ipqJ8N4NaPqkbVlW8Zl2658FnCYL57bBbYWs7YNPXHv0J7RHsYy1OnR%2F8O4ZzDJkAqZFFH83h2EJt1JTViUcVswO1sMvH5ruHbVpjGRtw8LwIV%2FkRHXJ20anxa79HhbuLbO%2BicqXQNe447oipMzPPfew%2BFL6Y%2BFZxu43Mhz1tWM0wcH%2FyFCmIgPEA9Wm64dbZrr8Xw6WnT0ch3alWLPWVr2QUYXnd%2BSy%2BVNxIXUokX5jN86x%2F2SLfQomEr1CSKWKy2fuZR1yIHCWT9xNs%2Bg3LfOF9q6Wb00F9h86M9lmY4RdMdGhQUv31dZcstW4OGx0z6Mu5mmLnwBGWG8FcziCEkumgW6zcwwttXXwwY6pgHZWnPdW3NYT7xLFsoYgt4KT%2FR5veNwn7PrWE54TDSUrw1k4xPSBLlImsAU5Ax0kHG2YUT%2BePXvlO8OY4yLYDrB1u5BeRKPyl95E6yq5Cmg2OsYKcVeK6pdvFDR%2FlZFuRBEM2%2B26vpss1fS%2FAc%2FctY%2Fl0WfTVN6rwMybH2%2FSlwFstyVna1uTEFb7tvGqqw2%2BrWNb9ItmCY%2BCsXvPQArmpV3tGwgtapk&X-Amz-Signature=366572661a0a17d883599f8546c3b499422ec605a770a0ee77046bfe78479974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ5TRDN6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIERrdvZoDJBrUGP83zJwfx6BjLylwXnRacyhKwvbSn%2BzAiBCh%2B42OkeMKMvaWHoYbOXWhbe5M%2F70J5GZwl5FOQAuQCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM2CJOGLZKSvpP160eKtwDc89MgFrE3kT9lt8a5P%2BSMJ5V56tqhqstAmEgJWdKVdLdF6377P9g5OCzmhaQrkPGI8VkH4%2BdB37NxMI6YnwN3ouEDmBuXlESl5PcNjqMe80wlUEmZwrt3Ax5eKvPpC3R9oeBscwS58ZBKnpZxAf%2BGM3PLzckl9ivqCaDH1k8oyMmSMgUvYZthtuRWvLcPZB9uZkL%2FNKthcmawDmyQbsxooVxu1ofyru84oT%2FlN3d0Qs40JAJiYIwVwwcYYhNE7sOJS%2FjTOtpFKVG51Tlb7cre9RmHiPZU3xbeqpefWZamAzGNFm3j63k7%2FG8equgkuBpqF1xBoa2Jh5urXn6kC6A%2Frf778bdQqyj1lGTIQagB2F4tgcIKj0stiFE1lrF%2F0DMFYQ5MDCyY%2B92M7VEGJ1IZL8%2B4ES%2BIslfGz4Hq%2BdJ%2Fa5PlwRP%2F8QtevGiMD8pmTjAeItllm1LVFFbygtdID%2BpbZSD6dDHinhKkfP6EUQQ3Nzvx17YkLxQGzoq%2FcqhhF%2FjR5MK2s0e4hjxHQVMceUbB60fmNKwY5u5L69FOwDHDYxk1Li4KF6VGSsrHLuT5XBZJ8n4OaRk3l6pEbdTei9ge81qEnaWPjMInh2Z%2Fy7nlPQsvqotFq%2Bp1e7jWxMw9NTXwwY6pgH1Vpvd%2BrnA7R%2FeVV0LTELThzsC5b0legKlzwZPGarnB1HANx3BP3yAbPWJyM3fjTw0mB3bmKUnPJ9mvFnVMQY4%2B3ECpf1ZWdNHD9m9kVlP1ZAa0ZD7o9Ld%2FQ8ez7o2xhig8vj3vMKXKO3lJYg7jvRqvUUpXy6M0hVsUwRuUR%2BHIxgoa0U7Rjakby91%2F%2BeOJwss%2FQXfCvbIpnNSJzIR%2FWCT6PqUNOl4&X-Amz-Signature=596059f2489c9d06d16c4eb59dec2b2b46ee37d9b4535a2f114eeb1b4ccaf777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ5TRDN6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIERrdvZoDJBrUGP83zJwfx6BjLylwXnRacyhKwvbSn%2BzAiBCh%2B42OkeMKMvaWHoYbOXWhbe5M%2F70J5GZwl5FOQAuQCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM2CJOGLZKSvpP160eKtwDc89MgFrE3kT9lt8a5P%2BSMJ5V56tqhqstAmEgJWdKVdLdF6377P9g5OCzmhaQrkPGI8VkH4%2BdB37NxMI6YnwN3ouEDmBuXlESl5PcNjqMe80wlUEmZwrt3Ax5eKvPpC3R9oeBscwS58ZBKnpZxAf%2BGM3PLzckl9ivqCaDH1k8oyMmSMgUvYZthtuRWvLcPZB9uZkL%2FNKthcmawDmyQbsxooVxu1ofyru84oT%2FlN3d0Qs40JAJiYIwVwwcYYhNE7sOJS%2FjTOtpFKVG51Tlb7cre9RmHiPZU3xbeqpefWZamAzGNFm3j63k7%2FG8equgkuBpqF1xBoa2Jh5urXn6kC6A%2Frf778bdQqyj1lGTIQagB2F4tgcIKj0stiFE1lrF%2F0DMFYQ5MDCyY%2B92M7VEGJ1IZL8%2B4ES%2BIslfGz4Hq%2BdJ%2Fa5PlwRP%2F8QtevGiMD8pmTjAeItllm1LVFFbygtdID%2BpbZSD6dDHinhKkfP6EUQQ3Nzvx17YkLxQGzoq%2FcqhhF%2FjR5MK2s0e4hjxHQVMceUbB60fmNKwY5u5L69FOwDHDYxk1Li4KF6VGSsrHLuT5XBZJ8n4OaRk3l6pEbdTei9ge81qEnaWPjMInh2Z%2Fy7nlPQsvqotFq%2Bp1e7jWxMw9NTXwwY6pgH1Vpvd%2BrnA7R%2FeVV0LTELThzsC5b0legKlzwZPGarnB1HANx3BP3yAbPWJyM3fjTw0mB3bmKUnPJ9mvFnVMQY4%2B3ECpf1ZWdNHD9m9kVlP1ZAa0ZD7o9Ld%2FQ8ez7o2xhig8vj3vMKXKO3lJYg7jvRqvUUpXy6M0hVsUwRuUR%2BHIxgoa0U7Rjakby91%2F%2BeOJwss%2FQXfCvbIpnNSJzIR%2FWCT6PqUNOl4&X-Amz-Signature=15be48021accd969fc7b271b0c63129ec9334ceb7bee32a8875b8f2f82fbe765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ5TRDN6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIERrdvZoDJBrUGP83zJwfx6BjLylwXnRacyhKwvbSn%2BzAiBCh%2B42OkeMKMvaWHoYbOXWhbe5M%2F70J5GZwl5FOQAuQCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM2CJOGLZKSvpP160eKtwDc89MgFrE3kT9lt8a5P%2BSMJ5V56tqhqstAmEgJWdKVdLdF6377P9g5OCzmhaQrkPGI8VkH4%2BdB37NxMI6YnwN3ouEDmBuXlESl5PcNjqMe80wlUEmZwrt3Ax5eKvPpC3R9oeBscwS58ZBKnpZxAf%2BGM3PLzckl9ivqCaDH1k8oyMmSMgUvYZthtuRWvLcPZB9uZkL%2FNKthcmawDmyQbsxooVxu1ofyru84oT%2FlN3d0Qs40JAJiYIwVwwcYYhNE7sOJS%2FjTOtpFKVG51Tlb7cre9RmHiPZU3xbeqpefWZamAzGNFm3j63k7%2FG8equgkuBpqF1xBoa2Jh5urXn6kC6A%2Frf778bdQqyj1lGTIQagB2F4tgcIKj0stiFE1lrF%2F0DMFYQ5MDCyY%2B92M7VEGJ1IZL8%2B4ES%2BIslfGz4Hq%2BdJ%2Fa5PlwRP%2F8QtevGiMD8pmTjAeItllm1LVFFbygtdID%2BpbZSD6dDHinhKkfP6EUQQ3Nzvx17YkLxQGzoq%2FcqhhF%2FjR5MK2s0e4hjxHQVMceUbB60fmNKwY5u5L69FOwDHDYxk1Li4KF6VGSsrHLuT5XBZJ8n4OaRk3l6pEbdTei9ge81qEnaWPjMInh2Z%2Fy7nlPQsvqotFq%2Bp1e7jWxMw9NTXwwY6pgH1Vpvd%2BrnA7R%2FeVV0LTELThzsC5b0legKlzwZPGarnB1HANx3BP3yAbPWJyM3fjTw0mB3bmKUnPJ9mvFnVMQY4%2B3ECpf1ZWdNHD9m9kVlP1ZAa0ZD7o9Ld%2FQ8ez7o2xhig8vj3vMKXKO3lJYg7jvRqvUUpXy6M0hVsUwRuUR%2BHIxgoa0U7Rjakby91%2F%2BeOJwss%2FQXfCvbIpnNSJzIR%2FWCT6PqUNOl4&X-Amz-Signature=eaa5f68d589dbf9083eb48d051e723ff544daf9431175b067b37217f0e219746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

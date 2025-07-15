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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672MNBPVG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIEER4SQRW24JksP7Giej%2BConUX%2Bhsw5dbPcOIItC5bXYAiBHbfdeDXeo5A9JuDaNwUmNcQC%2BoQHpIVaQkSGCj2au1Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM92uEjabbzdAbk34rKtwDbvy6f2jDN88kk7yJWeFB%2F2zXMfPaE94VFOKtEb6AQDFTmnj4jdm7xQ8hd2RjCBMTK9efrb7KFtAYz9q7c3YlCC7SdbuwwDAIbPOe%2B5bW0VEuN8Dm%2Fn9RLk4zDOjrN3P7cJPhmPa9TvJO%2BMxhvG9aQZzonYof9GGD25w6IFELiLXZcKqa0%2F1V6A8cVvLPHtHvoJTrr2KYAJ1WtrBWoRdBMOkxT%2FW%2BAFJfBtHSKsbmeh%2B%2FzheMrkuxdP01C7U4EXGeV%2FCNIDf7d7B2MsaHONqZm5lww4TWG99ubhkrDvuVlyowkBkiHI9aetmCF240WuV%2F6JhkJvBfbj24jMLitix7ewC3BvcTCBxfLuMMrjvwtXv4pZNRvPn2SAsPUnzwnugNNdXr19i2unNsSuh4qOwfR8%2BbYypBwKMCmg1IsRvWcACevJQdzG2hbXdVVVnN%2FhyeXFrIFu%2FNcUS9nbA5Iw94L%2F5TvJo9%2BthFwOi0zCe5DvCOA6QYrfKz41J%2BnM03rmNtfUD2wrE8avwaPzqfxGYDHf5JvzOYN9UjOXgy6JyQmOtciwOjGP%2F3fU0ahH25WNbiQBJ091MMWsVM0aDq6ELrp8Qwjb6gabOALNePxi1P%2Bn%2FJ5iOziZPN3WzsHxswlqvXwwY6pgGi5CYaxsDlnSIUQ9P7yveg7GnsgytVjjorR%2FuiZI%2FwOjkpwU%2FuCSrcFieMRWO9vR%2Bit0T2UK%2BklYnCG%2F4ai%2B1eImuJATnDB8gR0XWx4xTQKZiXeOvFho4j5tz5780CKVQCZpDIktTCJLtk2YkWK4lX3grjtJ2qk4l%2Bg5tw5wvtvNJAiG9X2p3N7dBVZatRiT8vm47SS9DDZyDamfoHnFJIJEiOhzNY&X-Amz-Signature=97497695797fe168e9dfbb564887da0eda5e4cd91245b820c372905bce7d03bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SK7H36Y%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQC7pmDnlhlo0FrSQT5ChPC1Al6HvvCKoz5kyMHTk6QeuAIhAKvTH8UpamHwyMJfuAO2tm1bhDzVkAS%2FaCO9AyRbmrYRKv8DCD0QABoMNjM3NDIzMTgzODA1Igz0vcMT7LQYJ%2BH9DjIq3ANYGTVyrv3mlAKcT9yV%2FzWJ%2BIDil7BXLiiuzoVLAhvJ0%2FvAZDi2JElIPygJlEbmdU0NW4UxFE1wwgHeXQn43PBf6aqlH%2F1m94SUPnuJz7Pvclro3893qkskopBxQOo7q7Ef8XhmE3Ysx5XHnzJCMUB7Liqw8fl3%2FrEozmPJH74v1AsueJtnhEyEe%2F1U5Yc5nhzvV%2FjKXEsIsRH7ngyj7mH%2FYkd%2F5RzDJChpU0nluXBFrFS0WiqHxvnsdg2%2FvnmcLkUJ8z2PkSNdMCeMjR4hdrGVPqiC49GjZ8YlbPm2N7%2BU9PuL7VIxrVrYv25xxmC6Xk6d2LDo5zA8mafkrRBegdeMZ0aI5sDsXEEaJY2CJimEMcRtfASFop7DPmr%2Br%2BsvMsGxrYC%2FHuG7M%2FeQXl%2BE3sCwM1D7tdB8HN0FUIZYHSMenA23uTJiu2P7v%2FG9dHm2SDRdssYlMjTzH7xvn2D6lQ4ihwg44Vj8%2Fn9TwWW51p5%2FtCCQKnTzK2XShdeurrFZCWjnaYvIVl7yLMkLXT7XwWzuPhvLj%2BuFEO9Q7L8JEtVbRB%2BODNC%2FAwmJVKt9VQQGTAI2MUgNFm%2FdY8zb4B8vWLM7UGw7rdmnEos4P3PBHq%2B0l5i3Z8HdL62uo%2FX7iTCGq9fDBjqkAfJpL7r0uDl7lKa4Mes%2BQsxwSWiwS8V6g9omHm05ugIVP0yhrsfvO%2Fin%2FRiXOlMZMy4tElnYWNjsOme83fW565sYQWbXOw5sgUxoS1QcQFj895RkXL12gsPNTxAGKwfzEqfIHi0f1St3mi6roOtItwt2AofHmcMJdFDznoSIpNAIc0siBl60RAUeQC6pY43XfmmB8CF2vrCujpazguTzhO2HSQ5s&X-Amz-Signature=65b3a28f5136b8c99c86c19e81ff8b83cdcffc234b04b11396acd69c5c69cc5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SK7H36Y%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQC7pmDnlhlo0FrSQT5ChPC1Al6HvvCKoz5kyMHTk6QeuAIhAKvTH8UpamHwyMJfuAO2tm1bhDzVkAS%2FaCO9AyRbmrYRKv8DCD0QABoMNjM3NDIzMTgzODA1Igz0vcMT7LQYJ%2BH9DjIq3ANYGTVyrv3mlAKcT9yV%2FzWJ%2BIDil7BXLiiuzoVLAhvJ0%2FvAZDi2JElIPygJlEbmdU0NW4UxFE1wwgHeXQn43PBf6aqlH%2F1m94SUPnuJz7Pvclro3893qkskopBxQOo7q7Ef8XhmE3Ysx5XHnzJCMUB7Liqw8fl3%2FrEozmPJH74v1AsueJtnhEyEe%2F1U5Yc5nhzvV%2FjKXEsIsRH7ngyj7mH%2FYkd%2F5RzDJChpU0nluXBFrFS0WiqHxvnsdg2%2FvnmcLkUJ8z2PkSNdMCeMjR4hdrGVPqiC49GjZ8YlbPm2N7%2BU9PuL7VIxrVrYv25xxmC6Xk6d2LDo5zA8mafkrRBegdeMZ0aI5sDsXEEaJY2CJimEMcRtfASFop7DPmr%2Br%2BsvMsGxrYC%2FHuG7M%2FeQXl%2BE3sCwM1D7tdB8HN0FUIZYHSMenA23uTJiu2P7v%2FG9dHm2SDRdssYlMjTzH7xvn2D6lQ4ihwg44Vj8%2Fn9TwWW51p5%2FtCCQKnTzK2XShdeurrFZCWjnaYvIVl7yLMkLXT7XwWzuPhvLj%2BuFEO9Q7L8JEtVbRB%2BODNC%2FAwmJVKt9VQQGTAI2MUgNFm%2FdY8zb4B8vWLM7UGw7rdmnEos4P3PBHq%2B0l5i3Z8HdL62uo%2FX7iTCGq9fDBjqkAfJpL7r0uDl7lKa4Mes%2BQsxwSWiwS8V6g9omHm05ugIVP0yhrsfvO%2Fin%2FRiXOlMZMy4tElnYWNjsOme83fW565sYQWbXOw5sgUxoS1QcQFj895RkXL12gsPNTxAGKwfzEqfIHi0f1St3mi6roOtItwt2AofHmcMJdFDznoSIpNAIc0siBl60RAUeQC6pY43XfmmB8CF2vrCujpazguTzhO2HSQ5s&X-Amz-Signature=52fa5a09b35d8dde1da4a3471c21bb4697bd831bd6daed13621de81fea0e8e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SK7H36Y%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQC7pmDnlhlo0FrSQT5ChPC1Al6HvvCKoz5kyMHTk6QeuAIhAKvTH8UpamHwyMJfuAO2tm1bhDzVkAS%2FaCO9AyRbmrYRKv8DCD0QABoMNjM3NDIzMTgzODA1Igz0vcMT7LQYJ%2BH9DjIq3ANYGTVyrv3mlAKcT9yV%2FzWJ%2BIDil7BXLiiuzoVLAhvJ0%2FvAZDi2JElIPygJlEbmdU0NW4UxFE1wwgHeXQn43PBf6aqlH%2F1m94SUPnuJz7Pvclro3893qkskopBxQOo7q7Ef8XhmE3Ysx5XHnzJCMUB7Liqw8fl3%2FrEozmPJH74v1AsueJtnhEyEe%2F1U5Yc5nhzvV%2FjKXEsIsRH7ngyj7mH%2FYkd%2F5RzDJChpU0nluXBFrFS0WiqHxvnsdg2%2FvnmcLkUJ8z2PkSNdMCeMjR4hdrGVPqiC49GjZ8YlbPm2N7%2BU9PuL7VIxrVrYv25xxmC6Xk6d2LDo5zA8mafkrRBegdeMZ0aI5sDsXEEaJY2CJimEMcRtfASFop7DPmr%2Br%2BsvMsGxrYC%2FHuG7M%2FeQXl%2BE3sCwM1D7tdB8HN0FUIZYHSMenA23uTJiu2P7v%2FG9dHm2SDRdssYlMjTzH7xvn2D6lQ4ihwg44Vj8%2Fn9TwWW51p5%2FtCCQKnTzK2XShdeurrFZCWjnaYvIVl7yLMkLXT7XwWzuPhvLj%2BuFEO9Q7L8JEtVbRB%2BODNC%2FAwmJVKt9VQQGTAI2MUgNFm%2FdY8zb4B8vWLM7UGw7rdmnEos4P3PBHq%2B0l5i3Z8HdL62uo%2FX7iTCGq9fDBjqkAfJpL7r0uDl7lKa4Mes%2BQsxwSWiwS8V6g9omHm05ugIVP0yhrsfvO%2Fin%2FRiXOlMZMy4tElnYWNjsOme83fW565sYQWbXOw5sgUxoS1QcQFj895RkXL12gsPNTxAGKwfzEqfIHi0f1St3mi6roOtItwt2AofHmcMJdFDznoSIpNAIc0siBl60RAUeQC6pY43XfmmB8CF2vrCujpazguTzhO2HSQ5s&X-Amz-Signature=7dadb09e5dab777a889c4919389a779ba6af5db25a2f9c1481b1630de7207ee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

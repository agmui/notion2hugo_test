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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQFHJD4%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIAfpN016QgzAyB2OJiRNcPvi75YE%2FjxTUjTNBwhvWxJAAiEAyfjeF%2BV8hxE%2Besfuo9z9%2BMu6vV2%2FbKdR7Sm4uOiraIoq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJAlI8SxPvdOEAB8FircAzocDb1mPqJmDMtOhLAxn60uyE0sKz%2FdeqhDloRAUXp%2B9XdrrDg1wTRIePrlZMLIVw2qqDEm4Tg8XYpcJeAPuZem0s5yuZ4JIriqxgGExbY2ihRaY6AuNo6R9svXqtowCF9hIv9WOjzLzWyNL%2BA53D7xZ7sKcqpI8Y9q6adj7%2Ft2xapl5rh9PjJYoEGIMeMU3dbPz0MNTMVflWwZvVBJ7ayLrJRWh8ucwo2e2D4CcGFSgEN9tlBe%2FP7z%2FBgjSW6DVv2npPT%2B%2BcgaP1QKfP92kAkrUkxKngO%2FjN6RaUGAkiuylmAbM50gwPR%2FT2ujcwHym0CxasaD1mJlOXVhI%2Bj86ukf02ugNZ2C3g%2FlliJKCGv3PbF0ZT5kT8PrTOAMlW7cOtsSH7ZB3B5NwHeHqmH2mcvNpYFFlwNma6XuGEqUJkTcO6MYcJQShcONmqKOzw47UlpvPMR6EWjRcabO%2BR%2B%2FlgxBpX20%2BV59SKPtvPe5rmgBLk%2BT11LlvU%2Fbo7JYAloL96FTXjDrtyhO1qrjuobp1l3pOYK5skzGZU5UaFKCEcP7k%2Bip179BuSa4Hvcr1IaTnRnB0jTHu%2B1zsEDVvGvk5Hv0bJy86Z7wZp6MCb2nMKCaKalnQpt5CqbRxXZKMMi0qsMGOqUBTu1gqmuEChq9AeutXdDqxM%2FSP5GAHcTzMXOAeJhC7oy8zY92Srv5ecZ7pbf752dtAfKVRSR2hyhJ7rTmxg59zIx7ozJWU5R9Vf2rvngIdzPn5ptOcQOVpIquE0OmWSUzRyhe%2FtDayW2je4D%2FisTF%2Bb7aw%2FIII1BaCNlGv1WqvpvhEM6vm56uudBJ1Cd1PdlckWiHDPlwbTB1NutnBdkQSpBDmG69&X-Amz-Signature=7aa3ce5703aa806c2680bbcfe5322f19a60234429047a6eb32ee2b8d97689c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OF5DIZA%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDuIyrWo%2By07%2Fya9F27e%2Ff0SmrB2sOxOgwGfvs7i0hveQIhAKgb%2BvuO%2F2TL9JpAShJqaKIDhTuKxPBInhU6NcuMEgOkKv8DCF0QABoMNjM3NDIzMTgzODA1IgyuHliBrNLyf173Hfgq3ANkJ%2F77scSADvmWvMH%2Bz7kceDc2j%2B6LKmy4oV4t97%2FqTs%2FpdV1P5JKD8eYkvPhd%2BrZaYRcdVr4vC0cKZtAtLIKcDXplywuwN3qqDQY3R3JQDt1YoR0u0oVAXc%2Blc%2BmreWS5aac1DAEf%2FlR1Hw2rqYDb%2BMpTVSjeUQiOOBCzjS3380knQPicdJCRdhpOhAKlrIjnlh6xKwBR3%2FcY9jbIHpZICM3FX%2FBANmWyEkm7EM03grb5sGww6g8agW5BIENgSqeGJV3xZzm3d35v1m5B2nhu4RCkSBzT1WEDSVXQ%2B3K5sKYnWGhcQWqSHHgpdePC4Jl7FxJ%2BpZj%2BttbZfHsdsN00P2PFEuGUEgSfB93I%2FcRK4OB7T5p9mRwz90mBm6O48aHiwaEHTJfqnSJQib2C8HomlXKsJDg0%2F2lcLebVi%2FZkXOgVcI8d66jwps3FaDk4S5vzAHDt7aNfwWvxFNE2QIdTUFbjx7YSv%2FM2ym9PgLXu%2Bzp5bXb7WayJGEmSyC20BoDbeLYPMAyNbCQ2OWJEfisM%2FjjpfJeSBwakTjsZ%2BZt%2BA6%2FDvxMpnOUSkBcjBfZXwRII94eymF2gw6B8hQjlOPLaQ8qSvSzK8cxxZk9vENRGP2DpbTQSaJUoYJcKATDJ1anDBjqkAc8ZLoO%2F7qwGM985vvqsY5ZmREVONql35K9o%2BewbFhaR%2FS%2B6v9%2F637P8K0ebiWQ3XspC0ExgB3VBThlPjOFuJh0HFOHoQ9oTcb46W0OaY6pgVlzl8Cuhhk1aV3icezCfTN7lCCveuzn4g%2FL0rjhaJ5NaZd%2BidCtoUZDkeA%2FkR9xfhx2nm0%2BJ5VZdUoCHgeY7drdWh9rq%2BnBFUhYUAE6gqm%2FN%2BHHQ&X-Amz-Signature=a14ba6a67a8979c792b99c90fbf6009b743e920e57a65f96404ec06f69a1e614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OF5DIZA%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDuIyrWo%2By07%2Fya9F27e%2Ff0SmrB2sOxOgwGfvs7i0hveQIhAKgb%2BvuO%2F2TL9JpAShJqaKIDhTuKxPBInhU6NcuMEgOkKv8DCF0QABoMNjM3NDIzMTgzODA1IgyuHliBrNLyf173Hfgq3ANkJ%2F77scSADvmWvMH%2Bz7kceDc2j%2B6LKmy4oV4t97%2FqTs%2FpdV1P5JKD8eYkvPhd%2BrZaYRcdVr4vC0cKZtAtLIKcDXplywuwN3qqDQY3R3JQDt1YoR0u0oVAXc%2Blc%2BmreWS5aac1DAEf%2FlR1Hw2rqYDb%2BMpTVSjeUQiOOBCzjS3380knQPicdJCRdhpOhAKlrIjnlh6xKwBR3%2FcY9jbIHpZICM3FX%2FBANmWyEkm7EM03grb5sGww6g8agW5BIENgSqeGJV3xZzm3d35v1m5B2nhu4RCkSBzT1WEDSVXQ%2B3K5sKYnWGhcQWqSHHgpdePC4Jl7FxJ%2BpZj%2BttbZfHsdsN00P2PFEuGUEgSfB93I%2FcRK4OB7T5p9mRwz90mBm6O48aHiwaEHTJfqnSJQib2C8HomlXKsJDg0%2F2lcLebVi%2FZkXOgVcI8d66jwps3FaDk4S5vzAHDt7aNfwWvxFNE2QIdTUFbjx7YSv%2FM2ym9PgLXu%2Bzp5bXb7WayJGEmSyC20BoDbeLYPMAyNbCQ2OWJEfisM%2FjjpfJeSBwakTjsZ%2BZt%2BA6%2FDvxMpnOUSkBcjBfZXwRII94eymF2gw6B8hQjlOPLaQ8qSvSzK8cxxZk9vENRGP2DpbTQSaJUoYJcKATDJ1anDBjqkAc8ZLoO%2F7qwGM985vvqsY5ZmREVONql35K9o%2BewbFhaR%2FS%2B6v9%2F637P8K0ebiWQ3XspC0ExgB3VBThlPjOFuJh0HFOHoQ9oTcb46W0OaY6pgVlzl8Cuhhk1aV3icezCfTN7lCCveuzn4g%2FL0rjhaJ5NaZd%2BidCtoUZDkeA%2FkR9xfhx2nm0%2BJ5VZdUoCHgeY7drdWh9rq%2BnBFUhYUAE6gqm%2FN%2BHHQ&X-Amz-Signature=5f8973f1493a901d6d7045f834cfd295f486b7f4d56f09b54d44c521463cef15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OF5DIZA%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDuIyrWo%2By07%2Fya9F27e%2Ff0SmrB2sOxOgwGfvs7i0hveQIhAKgb%2BvuO%2F2TL9JpAShJqaKIDhTuKxPBInhU6NcuMEgOkKv8DCF0QABoMNjM3NDIzMTgzODA1IgyuHliBrNLyf173Hfgq3ANkJ%2F77scSADvmWvMH%2Bz7kceDc2j%2B6LKmy4oV4t97%2FqTs%2FpdV1P5JKD8eYkvPhd%2BrZaYRcdVr4vC0cKZtAtLIKcDXplywuwN3qqDQY3R3JQDt1YoR0u0oVAXc%2Blc%2BmreWS5aac1DAEf%2FlR1Hw2rqYDb%2BMpTVSjeUQiOOBCzjS3380knQPicdJCRdhpOhAKlrIjnlh6xKwBR3%2FcY9jbIHpZICM3FX%2FBANmWyEkm7EM03grb5sGww6g8agW5BIENgSqeGJV3xZzm3d35v1m5B2nhu4RCkSBzT1WEDSVXQ%2B3K5sKYnWGhcQWqSHHgpdePC4Jl7FxJ%2BpZj%2BttbZfHsdsN00P2PFEuGUEgSfB93I%2FcRK4OB7T5p9mRwz90mBm6O48aHiwaEHTJfqnSJQib2C8HomlXKsJDg0%2F2lcLebVi%2FZkXOgVcI8d66jwps3FaDk4S5vzAHDt7aNfwWvxFNE2QIdTUFbjx7YSv%2FM2ym9PgLXu%2Bzp5bXb7WayJGEmSyC20BoDbeLYPMAyNbCQ2OWJEfisM%2FjjpfJeSBwakTjsZ%2BZt%2BA6%2FDvxMpnOUSkBcjBfZXwRII94eymF2gw6B8hQjlOPLaQ8qSvSzK8cxxZk9vENRGP2DpbTQSaJUoYJcKATDJ1anDBjqkAc8ZLoO%2F7qwGM985vvqsY5ZmREVONql35K9o%2BewbFhaR%2FS%2B6v9%2F637P8K0ebiWQ3XspC0ExgB3VBThlPjOFuJh0HFOHoQ9oTcb46W0OaY6pgVlzl8Cuhhk1aV3icezCfTN7lCCveuzn4g%2FL0rjhaJ5NaZd%2BidCtoUZDkeA%2FkR9xfhx2nm0%2BJ5VZdUoCHgeY7drdWh9rq%2BnBFUhYUAE6gqm%2FN%2BHHQ&X-Amz-Signature=9c7c89bc0e4de57973df1e01821c116ef35851b1c67fe2a89138aa2e48052285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

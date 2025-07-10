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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMIB4BHC%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEebq7%2BM1bNPkyiymHK4tGrZ0HIi6l4mtKV%2F8u7WbkCCAiEAv1HGYb6%2BgJWmRgNUJ9xGF%2Fe5OrV1QF5c%2BJAiM5RNtfwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCR0DIra%2BndmOFk8yrcA9k5GfBtT0tihkSj92pT7yEktwKVwkYZNM6exPa8yYmPzrLGyQds7V9U6fiq6qT1uxrNFDlCmUc3gOqF9O5lDekwYEuWmqartDQE0zJMqYY%2FnT3hYvseB88pzpd0PhEJpFBrXB9M312luXKoS6SXbRlHL0Y09v1pbmjsVsrr8RmPVAk7zu9aNXfVdkQ80iiEDHRH%2B9Mil%2Fexi4Ts1keGxJm6QoltLeoXbM5CfkaycG0RD3wOKvwJTsJDLxXGVvmPyHu6JOVErCWtX53OrlfiBxbdlyr1WD1S1x173gkC6h4%2B%2BJibblKldC4oz61oxwW4tUGi8IdrIX1l1SHT%2F7b%2FWzASGMyf%2BKUwXfD4JU%2BdbB5oHw7mFW2C%2FcdnAXK%2F2BtkYZiOmOJ%2FPTRWDhk5RPEEoARD33JIyahPdRT4HNRHm7OilUEfgFzoCBC8358qO9Xsvvk%2FW3aYAnV5v9hRy4ad6liZTVDxCHUErO3Uq7gV1RuzbuIC0h7UJ3ZuQz47f%2BrhIWa59z32kp4wchD0RivWZPzMu52nVao2eWG4RPzK%2Bn0gViL3y%2FnjkPze2xPEhA%2FiYT0IICBu56ytc4nbaUBNZwXo15%2FwiO2AoswhefaGgiO4xtDT8CAmiAy9SJ9UMKKpvcMGOqUB6q6tWY8rdCclhmTC5hP8leP%2BAwA2%2FKX2aFI%2BjmafBGqMqkquw6URyFCfNSuuoUz1a2j8dDIg%2FuVyVDtmE9z2096bOWifR0Mgtq6Q0OcQQlm1UVLI8vM4B6C%2BIR1T1R%2BSUuABZUSuh2wB2nFCQ%2BcA52hI%2FbnS2OhAksG2wkw2XRPoAjQrAMHO%2B3h4GXKP3AF%2FTsSjTxvjClXtiM8%2BYd93aKe1NyVo&X-Amz-Signature=821179aca8d1fb954898050cdcd0319ed98d9c62905034e8523eac3eec595ab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2M6ZZFZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlsDDBat%2B3wQDt%2FSwvli9%2BMFl%2BhRiE3HU6C4R6Jnvk%2BAiEAzK6BlOe4mRpgSR8UAoc1YA2mYbct79ck5cEQQY5NmNcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiRzz3C4ik7y8vgOyrcA27Mbid1TuqNyQkOm2CCD2b5ZVpDWWE7Q%2FXZ5tUwBr31ttK4B9R3rdh3CzbfGPc0sMid%2BtV0RTBcgR8dSkwVgs9ppZp%2B3wYdvtNZtoV28vNPFu%2FLRwrh4Uq2sw8s%2BV4LoAksVwlH9qy8q2uCoVm7CvUQftxYX%2BQDZSlsMZdlp7HyACT7X5%2BCP2Zm7E6DFP9Nsjn63t%2F6AUREY6SddwqIBedraeXkXINZyfj6DHTGAPKaK6K0D16u8T46YAXLSgNoKSpdBN0xVym0SluGiFOw6Zb0HscvIt3nknVmCv7smLEFZDWnO%2FxY64mFpqfYlgo6DmAtT8TPuJJELmJa2OrJqgztcwKXrrHmVQXl4UjKk86XAbEirhdkKRPZ3T%2B%2FfD%2BR%2FFtUAr1OsTSrvApwuAORlOHp3Tg3D%2Bdj%2BQduv6dCDtwQ8FKQ%2Bj3S%2F3mXkViNOc8brPaiKVekQgFkHSV4NAml3rL8W89GjUDRAPzXEx5kXWZn8alDOMYQKVu3QdJ3I3ULP%2BNF9CMfkcgholufJZT3aF137EWNCbj0XyNxb6tipsmHZnCtFeKz%2BRIM7iH%2Fg1cyO6Bz1Rgz2GxaMiLgfBwbbVs%2F9HGeLJHx0elkeT6ngl3ZbeEprMilDWpkloQYMJipvcMGOqUBmqwKfLW2Cq%2BXOfm5%2FEFUbVCCXtIcX89I4ZJXmuNT2OfcujGmAzfJLS6K5SnFVb%2B3cA7Rn1iWozYWd5XImYwi1tIWs8lwYwhBFx3qqjk5Qy4fYSdd3%2FKceak5TY6kBRVsCTLFfAQo2Cqg7zlAphbIEJkHwq5PG0oAA2Woj7V6Nj8mpK7T8nQ3qbGLQZrC%2Bx7GhhWTRWoxp5f%2FeS97EVePeiGnyh%2FV&X-Amz-Signature=fde13867bb65c44c95dc3995c82a3e1eb138742fb9cab5a22bed49d371d662a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2M6ZZFZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlsDDBat%2B3wQDt%2FSwvli9%2BMFl%2BhRiE3HU6C4R6Jnvk%2BAiEAzK6BlOe4mRpgSR8UAoc1YA2mYbct79ck5cEQQY5NmNcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiRzz3C4ik7y8vgOyrcA27Mbid1TuqNyQkOm2CCD2b5ZVpDWWE7Q%2FXZ5tUwBr31ttK4B9R3rdh3CzbfGPc0sMid%2BtV0RTBcgR8dSkwVgs9ppZp%2B3wYdvtNZtoV28vNPFu%2FLRwrh4Uq2sw8s%2BV4LoAksVwlH9qy8q2uCoVm7CvUQftxYX%2BQDZSlsMZdlp7HyACT7X5%2BCP2Zm7E6DFP9Nsjn63t%2F6AUREY6SddwqIBedraeXkXINZyfj6DHTGAPKaK6K0D16u8T46YAXLSgNoKSpdBN0xVym0SluGiFOw6Zb0HscvIt3nknVmCv7smLEFZDWnO%2FxY64mFpqfYlgo6DmAtT8TPuJJELmJa2OrJqgztcwKXrrHmVQXl4UjKk86XAbEirhdkKRPZ3T%2B%2FfD%2BR%2FFtUAr1OsTSrvApwuAORlOHp3Tg3D%2Bdj%2BQduv6dCDtwQ8FKQ%2Bj3S%2F3mXkViNOc8brPaiKVekQgFkHSV4NAml3rL8W89GjUDRAPzXEx5kXWZn8alDOMYQKVu3QdJ3I3ULP%2BNF9CMfkcgholufJZT3aF137EWNCbj0XyNxb6tipsmHZnCtFeKz%2BRIM7iH%2Fg1cyO6Bz1Rgz2GxaMiLgfBwbbVs%2F9HGeLJHx0elkeT6ngl3ZbeEprMilDWpkloQYMJipvcMGOqUBmqwKfLW2Cq%2BXOfm5%2FEFUbVCCXtIcX89I4ZJXmuNT2OfcujGmAzfJLS6K5SnFVb%2B3cA7Rn1iWozYWd5XImYwi1tIWs8lwYwhBFx3qqjk5Qy4fYSdd3%2FKceak5TY6kBRVsCTLFfAQo2Cqg7zlAphbIEJkHwq5PG0oAA2Woj7V6Nj8mpK7T8nQ3qbGLQZrC%2Bx7GhhWTRWoxp5f%2FeS97EVePeiGnyh%2FV&X-Amz-Signature=e40494ed1236664003c8abf8717e140070c86c117930a5ddb37c95de01bcf755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2M6ZZFZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlsDDBat%2B3wQDt%2FSwvli9%2BMFl%2BhRiE3HU6C4R6Jnvk%2BAiEAzK6BlOe4mRpgSR8UAoc1YA2mYbct79ck5cEQQY5NmNcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiRzz3C4ik7y8vgOyrcA27Mbid1TuqNyQkOm2CCD2b5ZVpDWWE7Q%2FXZ5tUwBr31ttK4B9R3rdh3CzbfGPc0sMid%2BtV0RTBcgR8dSkwVgs9ppZp%2B3wYdvtNZtoV28vNPFu%2FLRwrh4Uq2sw8s%2BV4LoAksVwlH9qy8q2uCoVm7CvUQftxYX%2BQDZSlsMZdlp7HyACT7X5%2BCP2Zm7E6DFP9Nsjn63t%2F6AUREY6SddwqIBedraeXkXINZyfj6DHTGAPKaK6K0D16u8T46YAXLSgNoKSpdBN0xVym0SluGiFOw6Zb0HscvIt3nknVmCv7smLEFZDWnO%2FxY64mFpqfYlgo6DmAtT8TPuJJELmJa2OrJqgztcwKXrrHmVQXl4UjKk86XAbEirhdkKRPZ3T%2B%2FfD%2BR%2FFtUAr1OsTSrvApwuAORlOHp3Tg3D%2Bdj%2BQduv6dCDtwQ8FKQ%2Bj3S%2F3mXkViNOc8brPaiKVekQgFkHSV4NAml3rL8W89GjUDRAPzXEx5kXWZn8alDOMYQKVu3QdJ3I3ULP%2BNF9CMfkcgholufJZT3aF137EWNCbj0XyNxb6tipsmHZnCtFeKz%2BRIM7iH%2Fg1cyO6Bz1Rgz2GxaMiLgfBwbbVs%2F9HGeLJHx0elkeT6ngl3ZbeEprMilDWpkloQYMJipvcMGOqUBmqwKfLW2Cq%2BXOfm5%2FEFUbVCCXtIcX89I4ZJXmuNT2OfcujGmAzfJLS6K5SnFVb%2B3cA7Rn1iWozYWd5XImYwi1tIWs8lwYwhBFx3qqjk5Qy4fYSdd3%2FKceak5TY6kBRVsCTLFfAQo2Cqg7zlAphbIEJkHwq5PG0oAA2Woj7V6Nj8mpK7T8nQ3qbGLQZrC%2Bx7GhhWTRWoxp5f%2FeS97EVePeiGnyh%2FV&X-Amz-Signature=981996410f954f3b1484a2ae9b8aca236ab5b113f838681e52a0ec63342554fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

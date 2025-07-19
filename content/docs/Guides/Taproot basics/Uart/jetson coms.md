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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SOX5JXB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWWU0rr0CZhmZqlnIYTJBSHjb49%2B6JUefuO%2BVL8Zz6KgIhALY1hNfBbpN6bLwowFu6%2FZOiB4tVPSQO3FYcZkZtHtuaKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2Fhble3%2F%2FOh0T2d5wq3APnjqUvC9pN8HqtDSquieIR7%2BvliY%2FOfl3F7hIDz%2FgceK%2Bk2X5Fq9zuFOP6WJqidUloIkdNxjFY0UZwu8ZN6JTcvCj6sgXmDRjHfuGU5ZDWJDnkRWiihc8JVRs%2FghBhxwfeKSaHYiozSiQkIG3lJ9B9%2F0YT8YnI64veLPsWIq%2ByY%2B9SHeSRIGwKIXxpEPCkCbUmbuRAjtxe6YRs0ecsvL4VzYNl63EKB8dITyELtnoW1g7h%2FbL20P3fAaKEY0lrXDDy%2FWrdfV4FxkzUfAWEu0gvbahEkwBzF8u6lF%2Fvrr4w%2FU%2B9i3i%2FTRHnP1xbyyteuuFqJeiUO%2Fy4aPYMci6vEwRosWOEZvaV97vVzPYgskTFfNUQ8Yx9XoUAwdslTpp1bvFBqVm3JUOUZ9ihpqNSi%2Bt37YjDRcQNjenSUZ%2F5%2Bzf%2Be9kwNYH0GlLLZskB9%2F95O2uLzgR3GV1LhXR4liA7mp7rjWsxe%2BuMZRW18B9rcTC%2BUGxOaB%2BFbQZjnI0nWq1PHZt7vOEUvyMI%2BWxH1kUo2IIIJgWKe1F99K7AidtarL9%2Fr28RxfezvlD0QUnVMDIRdA2Fx2bStxNEO6886vUER7sJm4wBv7D%2Fsa33O88j0eJBixLVIkpXEQgpYrtT6TDAuO7DBjqkAX9iQb0XmOKTdVDXmQogcqeKEZ1JFWoVPWvTHub9vowTLUxW7owrvLzHzVSNylhDbeDZxo0Q8n6w1TWGIDKZ3z%2BHYQ7f4W2ejfCUpVZs7Mcsr5fwZv%2BCFzOO5vnBxezD1ectJhIq%2FLuD1lS3hdCWFdlHIPULJj1Iv2Kdjs0amdO2snA4Arnu%2BQ4bNZUYcuqPyFYMqRTRRYmXuZTaIpKvYZszPrTR&X-Amz-Signature=f2b612f2542206251ce6e2130440af4c84a0b02e1e459b2a277c0d3772923ff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RFG6PUO%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGKCqaHgAvZ0%2FaRgGt66pS2K4qU4MZoA9b0NzPa7Q2nwIhAJip1Fg3aDRJxvbsGFqpJzh%2BEPf%2BeJbyz5W983mIv5l0KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8cMZRVY3mSLLX0x4q3APsj3kUmmdKCQAotjx3iElHw3CC2Vd0ZZsh%2Fr5tHQptAUqSrzAXA6HRo5s%2BWoO6BMmw3ZEmHv2Tr51H5oKp7N8KA1sYjqp%2BYopWXC1BM3JK8BWUT42jnY4k2rS5G2z%2BWREBGAbCuD%2BnUkNW5YnZiae2OWstJZdCtaOaTp855shhAReYOd%2FfuQm0M7rDauZOZpK0MJt%2FgPgRK%2FvWKTbStj9roUY2Q%2BoM4PEzs5f%2Fr5Zkj0jYNpyfyVbceWzZLu7rXkQmBYIZ7wNmbtcnpau5gUMlix6vd6vl3eYiCXkWiyqZUnnqXXucXBa14q0Z0FHNNwpXqOtVSzUaA5zl24a7dezKIgBslT3gLkw81hL%2BK3HRyjPsZigpUAu8n9gGkI0nOpksDrr7a%2FoLFXoswCpO9P5sQB22k1zuXpdBemQILJsXiikJKAbUaNy3C01OB%2BsDQYIaW5W9DVcNSZ2QBBizThakTrwcO%2B5Qn3mmecjjfdsNibFXs6%2F%2F6FmDcaMUIsvRk1kMY8XE5SCYrKGJ7uQ%2BHqVk5GbuWCtnUC6tHmOsiz8r%2Bh%2FulVfMclPcfF8IA%2FIQxan74pmoKzrAbYyzWN9QpowVOlo%2FWmT2Bs50PsPMuAJlRYGzTREfU6ibpLecJTC3uO7DBjqkAVsCHLP0lVW0P6LuTlxV0mgNImz3rz1N6UqfdIHYD778nj8xSWxd5V8E3b2XEwTahevvTa4K656Fy534WkhL5G0TW6MuyRsJAww11Qo7Q499UBKXtK9lxNoBrssmmUQ%2B8XnqlD%2BeX3WNzk0yASEs3D7bhpz4qsVhBv9wBwn6J0ReSKgay1yLAh04NoQIiAh%2FXzZpuhol1xfvRPmusqtvg%2Fb1Tl3d&X-Amz-Signature=3191b78bd02adcfba17e4510f760a0db7462b83eeac23a99686e2e279b81452f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RFG6PUO%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGKCqaHgAvZ0%2FaRgGt66pS2K4qU4MZoA9b0NzPa7Q2nwIhAJip1Fg3aDRJxvbsGFqpJzh%2BEPf%2BeJbyz5W983mIv5l0KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8cMZRVY3mSLLX0x4q3APsj3kUmmdKCQAotjx3iElHw3CC2Vd0ZZsh%2Fr5tHQptAUqSrzAXA6HRo5s%2BWoO6BMmw3ZEmHv2Tr51H5oKp7N8KA1sYjqp%2BYopWXC1BM3JK8BWUT42jnY4k2rS5G2z%2BWREBGAbCuD%2BnUkNW5YnZiae2OWstJZdCtaOaTp855shhAReYOd%2FfuQm0M7rDauZOZpK0MJt%2FgPgRK%2FvWKTbStj9roUY2Q%2BoM4PEzs5f%2Fr5Zkj0jYNpyfyVbceWzZLu7rXkQmBYIZ7wNmbtcnpau5gUMlix6vd6vl3eYiCXkWiyqZUnnqXXucXBa14q0Z0FHNNwpXqOtVSzUaA5zl24a7dezKIgBslT3gLkw81hL%2BK3HRyjPsZigpUAu8n9gGkI0nOpksDrr7a%2FoLFXoswCpO9P5sQB22k1zuXpdBemQILJsXiikJKAbUaNy3C01OB%2BsDQYIaW5W9DVcNSZ2QBBizThakTrwcO%2B5Qn3mmecjjfdsNibFXs6%2F%2F6FmDcaMUIsvRk1kMY8XE5SCYrKGJ7uQ%2BHqVk5GbuWCtnUC6tHmOsiz8r%2Bh%2FulVfMclPcfF8IA%2FIQxan74pmoKzrAbYyzWN9QpowVOlo%2FWmT2Bs50PsPMuAJlRYGzTREfU6ibpLecJTC3uO7DBjqkAVsCHLP0lVW0P6LuTlxV0mgNImz3rz1N6UqfdIHYD778nj8xSWxd5V8E3b2XEwTahevvTa4K656Fy534WkhL5G0TW6MuyRsJAww11Qo7Q499UBKXtK9lxNoBrssmmUQ%2B8XnqlD%2BeX3WNzk0yASEs3D7bhpz4qsVhBv9wBwn6J0ReSKgay1yLAh04NoQIiAh%2FXzZpuhol1xfvRPmusqtvg%2Fb1Tl3d&X-Amz-Signature=37c072447875b9a50cf702fb97a4c3433156a5ef33de84a0f75e6451e55b2811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RFG6PUO%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGKCqaHgAvZ0%2FaRgGt66pS2K4qU4MZoA9b0NzPa7Q2nwIhAJip1Fg3aDRJxvbsGFqpJzh%2BEPf%2BeJbyz5W983mIv5l0KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8cMZRVY3mSLLX0x4q3APsj3kUmmdKCQAotjx3iElHw3CC2Vd0ZZsh%2Fr5tHQptAUqSrzAXA6HRo5s%2BWoO6BMmw3ZEmHv2Tr51H5oKp7N8KA1sYjqp%2BYopWXC1BM3JK8BWUT42jnY4k2rS5G2z%2BWREBGAbCuD%2BnUkNW5YnZiae2OWstJZdCtaOaTp855shhAReYOd%2FfuQm0M7rDauZOZpK0MJt%2FgPgRK%2FvWKTbStj9roUY2Q%2BoM4PEzs5f%2Fr5Zkj0jYNpyfyVbceWzZLu7rXkQmBYIZ7wNmbtcnpau5gUMlix6vd6vl3eYiCXkWiyqZUnnqXXucXBa14q0Z0FHNNwpXqOtVSzUaA5zl24a7dezKIgBslT3gLkw81hL%2BK3HRyjPsZigpUAu8n9gGkI0nOpksDrr7a%2FoLFXoswCpO9P5sQB22k1zuXpdBemQILJsXiikJKAbUaNy3C01OB%2BsDQYIaW5W9DVcNSZ2QBBizThakTrwcO%2B5Qn3mmecjjfdsNibFXs6%2F%2F6FmDcaMUIsvRk1kMY8XE5SCYrKGJ7uQ%2BHqVk5GbuWCtnUC6tHmOsiz8r%2Bh%2FulVfMclPcfF8IA%2FIQxan74pmoKzrAbYyzWN9QpowVOlo%2FWmT2Bs50PsPMuAJlRYGzTREfU6ibpLecJTC3uO7DBjqkAVsCHLP0lVW0P6LuTlxV0mgNImz3rz1N6UqfdIHYD778nj8xSWxd5V8E3b2XEwTahevvTa4K656Fy534WkhL5G0TW6MuyRsJAww11Qo7Q499UBKXtK9lxNoBrssmmUQ%2B8XnqlD%2BeX3WNzk0yASEs3D7bhpz4qsVhBv9wBwn6J0ReSKgay1yLAh04NoQIiAh%2FXzZpuhol1xfvRPmusqtvg%2Fb1Tl3d&X-Amz-Signature=b4042844e7775b544988ac0e01c3281121996f86e1e539e6b1b5108f8865de20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

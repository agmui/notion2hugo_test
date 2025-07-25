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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XDNBULL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDEYEfozDmfgVxKTpAYGQBYYnXXiV%2FuDoNRlEGfvVTS9AIhAI9dMMJuqRP6pWIVw3r3ooRwU6Z1Pa%2FyUN3q8M8V0k2qKv8DCD0QABoMNjM3NDIzMTgzODA1IgzBgXFVNjMUKiyhjBYq3AOpM92zXWiGRpi2ruwMhXwfoDXG96fKztGHEwod%2B3zC2kOAD%2B5ut91duFHlbTV20ZkaLVDCCL13KQqwQ8scf9V4BGAnaQEOpDesRHbv8Q%2BxTyZH%2B3IfqZUPjPJPLjPYfz344J3pfHCtR5UMyFz3HFwqrSJ9yFTpipb0Jq%2FWbkFjyO4ZQm24I%2FRS%2FrIBrTKUw4C%2FCvr0FUlJ2Qm9hBF4myIjicNz9bmtNxFF8UshokGCdMgeLXyAs1vjMcLNf1R%2F1yJhkCvyma9moclUQk26EYaJ5q3yOeXpnolKow4V9VIWbrDD59cP3vmcOqnKSWAYS0Jadrvs%2BgAOOEuh5EDavlT%2BJHTPm8GsqKPngWu7RrK1oBvoaDqekVO%2FNOZm%2BMT24nopH2jOeR3623RB6WlppwSvY2%2FAdvT9VEds1wk%2FlCGeKvywno4X9Qvk432xHHSl4QWDeBXpmt4mB1S7rvgoSUkf6L3hp%2BIG%2FKQ1OTOMeN%2Bi%2BCaDoLPoq%2Bu1aJvBBHDh3NywBXnayGOxbFNq3ZfFHVNN7w29Uz%2BosGRwLn%2FD0hkbVfXpWMofTOjdzSZey0P5US8DqOXdMhodOF81yMznrpG4FN6ACA1jUAw8ZkDakFdA2tgWApSNQfd9KQAu%2FTDG94vEBjqkATEenf8hvQg3QWw2ZRO7sb9AKJG4KpM%2B%2BnhfjKUKLjVNAACuIqH5KLjbOPZJW0QjYQit5zZN5QnqljJxavdMCt2NZ3tJTRpxEyUjFznzceKidzDxKBUp3TxR5lQ6YiiHcuHjjct1v2Y4CrN7sP25EuaVeuszzNpJvy4BYSVh%2BI5ySrS3M9IWp3BrbnfRvpVKp4UMxm7JL4BdaVBoaxaX9RHD%2FWLk&X-Amz-Signature=81284daac7d40e282bdce2262035560920f3d817403297265f214513647529b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJF3JQIH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIH%2F0NBUjc%2BPj8WO4kBRLWkwJp4zGcOUiP2eCheix5EpUAiB7jrN4tj46SdEURldrlc3Eh5DGATsrq5COvEyuQmX0Gir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMW8qGDq4XjFq9lAoNKtwDkNGm8emf4UX088iyEZQXTT4bumFOpllc3gRL9WVAJfhvD2j0YK75TcH1R3%2F1t0olcQV6dY%2FiHgYZEN2fqwF9VjunCKQmIfuqTiCPdWYs4XvR5bmf0qEUSgikeqVVUAxZzM%2FVpivIPIKhj%2B6WVHIAhl9NonNFDyvwcXiVp8g48CVzoACuA3BEcuDjZBYuZRYexxOLQ%2Fx%2BaXW7ylU6AhYo%2FeGB%2FBSIjTCq9IrjadMRr9G9iJzJV7B%2BFGAxiWYBUzvtZa6IADqWAV6XtQSaRAQ%2FRpN0V0ak%2B2OoNCVC1QEjEC0SHddEo62LjsFZx0yYwCfMBuU8M54zahNGECzHmQjGmcokJlqOREJymegaBPBFtqDQh5%2Fg09gbFmmQwyh1PLmpA5mo7BXMKpJAoFel5RTJ2UWVkK8HMCJT1NLLuqGMu2%2B35LVGOO0zBCzsv3VgnI9hPAXa5MmeXuNaPctYHJTOQYID83aZ6mlfFt7ZkpKIJ50CJqOMSStQgiPhA0Au14Xa3gOhi4p%2FsepxRUO99V%2FxOB4vrvxov9%2B8YS%2FK%2FzzbbVTwoRYFRzj1kNlAtJo4rWdIoEnKTmjUfaMSCcg8O8Pcqt7v6HWb7Yfqb0Ijz6y%2Fb9riaqt85FL9DBRJo04wjPmLxAY6pgHYqoJFZb6A0JPCEv6NSYDGxC79CI1CfIqr0qDYGMybBUcBYsnioemFiYUDj2kRHVcAA7%2F4mLmvDAmOsR1EyiKZiJejzs87%2F2Kdu9JjvMqH1HJPXOZHZNHgibRS9WjSKiZ1gBp7i3YmCyl7mGVhFBAaPojYWEwU1h6d6ukNifINrQvyvj2j05On%2FUhZmAt%2FSnZVUlDEXmzhI5n4brt0kJDIIpgd635k&X-Amz-Signature=a19d9dcb16ca0d703391fb8510be6614b9d3845503f862469c5dd8d43aefd205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJF3JQIH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIH%2F0NBUjc%2BPj8WO4kBRLWkwJp4zGcOUiP2eCheix5EpUAiB7jrN4tj46SdEURldrlc3Eh5DGATsrq5COvEyuQmX0Gir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMW8qGDq4XjFq9lAoNKtwDkNGm8emf4UX088iyEZQXTT4bumFOpllc3gRL9WVAJfhvD2j0YK75TcH1R3%2F1t0olcQV6dY%2FiHgYZEN2fqwF9VjunCKQmIfuqTiCPdWYs4XvR5bmf0qEUSgikeqVVUAxZzM%2FVpivIPIKhj%2B6WVHIAhl9NonNFDyvwcXiVp8g48CVzoACuA3BEcuDjZBYuZRYexxOLQ%2Fx%2BaXW7ylU6AhYo%2FeGB%2FBSIjTCq9IrjadMRr9G9iJzJV7B%2BFGAxiWYBUzvtZa6IADqWAV6XtQSaRAQ%2FRpN0V0ak%2B2OoNCVC1QEjEC0SHddEo62LjsFZx0yYwCfMBuU8M54zahNGECzHmQjGmcokJlqOREJymegaBPBFtqDQh5%2Fg09gbFmmQwyh1PLmpA5mo7BXMKpJAoFel5RTJ2UWVkK8HMCJT1NLLuqGMu2%2B35LVGOO0zBCzsv3VgnI9hPAXa5MmeXuNaPctYHJTOQYID83aZ6mlfFt7ZkpKIJ50CJqOMSStQgiPhA0Au14Xa3gOhi4p%2FsepxRUO99V%2FxOB4vrvxov9%2B8YS%2FK%2FzzbbVTwoRYFRzj1kNlAtJo4rWdIoEnKTmjUfaMSCcg8O8Pcqt7v6HWb7Yfqb0Ijz6y%2Fb9riaqt85FL9DBRJo04wjPmLxAY6pgHYqoJFZb6A0JPCEv6NSYDGxC79CI1CfIqr0qDYGMybBUcBYsnioemFiYUDj2kRHVcAA7%2F4mLmvDAmOsR1EyiKZiJejzs87%2F2Kdu9JjvMqH1HJPXOZHZNHgibRS9WjSKiZ1gBp7i3YmCyl7mGVhFBAaPojYWEwU1h6d6ukNifINrQvyvj2j05On%2FUhZmAt%2FSnZVUlDEXmzhI5n4brt0kJDIIpgd635k&X-Amz-Signature=d7da19a0246d2584abdfcaef21d2801d09e33505ae8fcd5cc7270523952361ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJF3JQIH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIH%2F0NBUjc%2BPj8WO4kBRLWkwJp4zGcOUiP2eCheix5EpUAiB7jrN4tj46SdEURldrlc3Eh5DGATsrq5COvEyuQmX0Gir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMW8qGDq4XjFq9lAoNKtwDkNGm8emf4UX088iyEZQXTT4bumFOpllc3gRL9WVAJfhvD2j0YK75TcH1R3%2F1t0olcQV6dY%2FiHgYZEN2fqwF9VjunCKQmIfuqTiCPdWYs4XvR5bmf0qEUSgikeqVVUAxZzM%2FVpivIPIKhj%2B6WVHIAhl9NonNFDyvwcXiVp8g48CVzoACuA3BEcuDjZBYuZRYexxOLQ%2Fx%2BaXW7ylU6AhYo%2FeGB%2FBSIjTCq9IrjadMRr9G9iJzJV7B%2BFGAxiWYBUzvtZa6IADqWAV6XtQSaRAQ%2FRpN0V0ak%2B2OoNCVC1QEjEC0SHddEo62LjsFZx0yYwCfMBuU8M54zahNGECzHmQjGmcokJlqOREJymegaBPBFtqDQh5%2Fg09gbFmmQwyh1PLmpA5mo7BXMKpJAoFel5RTJ2UWVkK8HMCJT1NLLuqGMu2%2B35LVGOO0zBCzsv3VgnI9hPAXa5MmeXuNaPctYHJTOQYID83aZ6mlfFt7ZkpKIJ50CJqOMSStQgiPhA0Au14Xa3gOhi4p%2FsepxRUO99V%2FxOB4vrvxov9%2B8YS%2FK%2FzzbbVTwoRYFRzj1kNlAtJo4rWdIoEnKTmjUfaMSCcg8O8Pcqt7v6HWb7Yfqb0Ijz6y%2Fb9riaqt85FL9DBRJo04wjPmLxAY6pgHYqoJFZb6A0JPCEv6NSYDGxC79CI1CfIqr0qDYGMybBUcBYsnioemFiYUDj2kRHVcAA7%2F4mLmvDAmOsR1EyiKZiJejzs87%2F2Kdu9JjvMqH1HJPXOZHZNHgibRS9WjSKiZ1gBp7i3YmCyl7mGVhFBAaPojYWEwU1h6d6ukNifINrQvyvj2j05On%2FUhZmAt%2FSnZVUlDEXmzhI5n4brt0kJDIIpgd635k&X-Amz-Signature=33c7bf4f4367106195fb75ef9a309700c7ddd2ebf46a404441266e22400f9fd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

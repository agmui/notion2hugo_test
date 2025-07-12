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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDRDGRW2%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPV9%2F%2BPoKd%2FRurapojb0lLEdvWycmmzxbWXzguzY%2FXhAiArC%2BadslkfsT5fVc9lVs3RDN7z%2BdQX%2BzCCpSP48l1W1CqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMykajDEQbmmHLCgTRKtwDy9ejFiLYtugNOHoQdrT28N%2FxHxcPMHhJ5ARhksn0exdid64p3ntlDD6EMOn3Ag15oTwFrKPhPbl3a7gSqM18cuTw6rB71bBV8J5lpnfDFknO4DscDSUoZpGUpZPnzGfKVOJFZvX3cJAwixkXo1g99I5fhUb%2FwMzWaOtzDOmPEJggvwELAk8sg91a%2BKkbub53a0fh0eJm2X8KmdpDn%2Ft3PlKNqAQuVz903wQWbt11ud%2FX5SjiA9He%2FL%2FDs6r%2FKImbqFccgr21gjzlpIS5EKUZ35RB8YZQNftU5BWCl70r3ymn03Wid%2Ft2q8pXS4J7Jl9UIKh9%2BBBTh24qQVKv8ASjOTV0653Meyv21lAjUfjgjfq1Jli75GRMeCluQfhags13VCChYRdBiDDiZ82nUo65xHfS%2FKDbeveQZi%2F7KCK3fc1D1%2ByRDDGU41nhxqSUg8J0WR%2BQB0CHr5PCy0RiTtElSjzs5%2FVkTc%2BVd5Y%2Fcnl4zyDYkhkxb1glO2Kmy26diJUrlyfyZ5oY%2Bx6K3FBbBtaA8kH2g72MzMQLSSkwUXcNFMjlJadtS0Jv1WQ3pL1gP3thMoNCKZPO9E138fozHMzSH2u8BI3hsMpmPS%2FdNt0mPB%2Fim6LUDOxEzNBn7xwwqoTLwwY6pgFHjKPUDrVRcZILk2z6IeBAPapK1KiNHT%2B6EFEv3pJBxFPymQIER7G8ctpBmapBN06tQuXQzhuyZ7%2B19x%2BzDjg%2BtjCLunDWRPBo8ZlQ%2FRWRRIgG1S%2Bd%2BUTlf%2Fs6eYWlJcRmpA5BAdqmBuCHNz3sqLtWppv81UCW43CfmaK6qA5VGki4keW8p4NfJYIi%2BtjExAuXntVnxDeUidvgVqdPfVYCTUsol9A4&X-Amz-Signature=cf4770eaf91810dca91f368d8654cbf83a3941fb5a12c34c8bbe8a022bd21c32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCPQXN6J%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRzG3O4Dm3yTLncXBj%2FjRwnij4RxDNIzQskUZt4WDq8AiBOrdCtfAEjws2SiQPRdj05vdgn1ONXSia4bhejoqGr4yqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzNz7R%2Flw4SZH6L4aKtwD7fd0G%2FTywJlq62e84XEXB002t3OxywHe5ZzZ8lmSRFb8o2TQQZJFK5nqFL86oN%2FCSzv03LAs6hrV5Wf10wa7fqS4fNl8%2BF0xtGq6NgGkD0snpxiOvLTawbeqVv0WlASOGR2S92duwzlkA0BoiBYZSaULvTc6Kb69JtD8oRDm8lp77htTF1qr0K5D%2F3xWXljlMaVD24m%2Bfhold99Y3mg99lNEow1FwWLbu9nFp4zNRXLi40g7w7h1p5LZ0P1zOMjOKCpASw0Llv4H8B%2B%2FurcDLFneVdqjgaWycSiAKQssvyWT9VDgucUGaL386o6IzpBurjRk%2BV5%2BevUTrS1xft4iw%2FTwzywBkQHzPWWaeCcDzZSp74y6QHyjiai7XQwqgkMm4shwZ9XeSu00Bvg9fTcqbiwHe%2BdiLjFQdsffuzpQ3oKY%2BzoFeid7VoyGJQMNw%2FqHns42gLROanHLeo2etKh99v3XrnIBR4ojGw6z9juQ5LEZdM9XGE0qX%2FRrCTgQJ8PhDEubdH5BKdRAn3ojt7VSYuo2%2BE1UGgXzzKfXU6%2FP9wEN5SgJBYLzFx436Ovs1dJe0OJrJ3M96G8QjOOlqVD%2B9KZSMRHg94gjF0D0sinSIIWPVREOR6ggpE8i3LkwxYTLwwY6pgGxcyrijSTvOb50VEN0vvTxIFZJnhVTbG4ofO8L4%2BqW5pcJtqOtYvQlNiosMgVaSbXUdMyL9vChaLD4I5uiUf7BmdXxvN8y5bEyEgMLKbAuKW%2FCRt%2Bk6as0ziKzNzjTdOb4No6JTXR%2FGqCo8YniZ4RcZqnOUOo6u%2FgrypfWrG7opasr5buCmdp8XNZjGrvGWe2I8V%2FQ0DwIiLrjKV7gAK71nn%2FH19%2BW&X-Amz-Signature=56ac02060727088d312477880ef6369d203114aa3fa1ba171ada4ab9b48971c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCPQXN6J%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRzG3O4Dm3yTLncXBj%2FjRwnij4RxDNIzQskUZt4WDq8AiBOrdCtfAEjws2SiQPRdj05vdgn1ONXSia4bhejoqGr4yqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzNz7R%2Flw4SZH6L4aKtwD7fd0G%2FTywJlq62e84XEXB002t3OxywHe5ZzZ8lmSRFb8o2TQQZJFK5nqFL86oN%2FCSzv03LAs6hrV5Wf10wa7fqS4fNl8%2BF0xtGq6NgGkD0snpxiOvLTawbeqVv0WlASOGR2S92duwzlkA0BoiBYZSaULvTc6Kb69JtD8oRDm8lp77htTF1qr0K5D%2F3xWXljlMaVD24m%2Bfhold99Y3mg99lNEow1FwWLbu9nFp4zNRXLi40g7w7h1p5LZ0P1zOMjOKCpASw0Llv4H8B%2B%2FurcDLFneVdqjgaWycSiAKQssvyWT9VDgucUGaL386o6IzpBurjRk%2BV5%2BevUTrS1xft4iw%2FTwzywBkQHzPWWaeCcDzZSp74y6QHyjiai7XQwqgkMm4shwZ9XeSu00Bvg9fTcqbiwHe%2BdiLjFQdsffuzpQ3oKY%2BzoFeid7VoyGJQMNw%2FqHns42gLROanHLeo2etKh99v3XrnIBR4ojGw6z9juQ5LEZdM9XGE0qX%2FRrCTgQJ8PhDEubdH5BKdRAn3ojt7VSYuo2%2BE1UGgXzzKfXU6%2FP9wEN5SgJBYLzFx436Ovs1dJe0OJrJ3M96G8QjOOlqVD%2B9KZSMRHg94gjF0D0sinSIIWPVREOR6ggpE8i3LkwxYTLwwY6pgGxcyrijSTvOb50VEN0vvTxIFZJnhVTbG4ofO8L4%2BqW5pcJtqOtYvQlNiosMgVaSbXUdMyL9vChaLD4I5uiUf7BmdXxvN8y5bEyEgMLKbAuKW%2FCRt%2Bk6as0ziKzNzjTdOb4No6JTXR%2FGqCo8YniZ4RcZqnOUOo6u%2FgrypfWrG7opasr5buCmdp8XNZjGrvGWe2I8V%2FQ0DwIiLrjKV7gAK71nn%2FH19%2BW&X-Amz-Signature=1f96f10d8571770d8d627911ff4d6c2f62f6da4ca99d5cdc3aeaf5cad7dc5cb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCPQXN6J%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRzG3O4Dm3yTLncXBj%2FjRwnij4RxDNIzQskUZt4WDq8AiBOrdCtfAEjws2SiQPRdj05vdgn1ONXSia4bhejoqGr4yqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzNz7R%2Flw4SZH6L4aKtwD7fd0G%2FTywJlq62e84XEXB002t3OxywHe5ZzZ8lmSRFb8o2TQQZJFK5nqFL86oN%2FCSzv03LAs6hrV5Wf10wa7fqS4fNl8%2BF0xtGq6NgGkD0snpxiOvLTawbeqVv0WlASOGR2S92duwzlkA0BoiBYZSaULvTc6Kb69JtD8oRDm8lp77htTF1qr0K5D%2F3xWXljlMaVD24m%2Bfhold99Y3mg99lNEow1FwWLbu9nFp4zNRXLi40g7w7h1p5LZ0P1zOMjOKCpASw0Llv4H8B%2B%2FurcDLFneVdqjgaWycSiAKQssvyWT9VDgucUGaL386o6IzpBurjRk%2BV5%2BevUTrS1xft4iw%2FTwzywBkQHzPWWaeCcDzZSp74y6QHyjiai7XQwqgkMm4shwZ9XeSu00Bvg9fTcqbiwHe%2BdiLjFQdsffuzpQ3oKY%2BzoFeid7VoyGJQMNw%2FqHns42gLROanHLeo2etKh99v3XrnIBR4ojGw6z9juQ5LEZdM9XGE0qX%2FRrCTgQJ8PhDEubdH5BKdRAn3ojt7VSYuo2%2BE1UGgXzzKfXU6%2FP9wEN5SgJBYLzFx436Ovs1dJe0OJrJ3M96G8QjOOlqVD%2B9KZSMRHg94gjF0D0sinSIIWPVREOR6ggpE8i3LkwxYTLwwY6pgGxcyrijSTvOb50VEN0vvTxIFZJnhVTbG4ofO8L4%2BqW5pcJtqOtYvQlNiosMgVaSbXUdMyL9vChaLD4I5uiUf7BmdXxvN8y5bEyEgMLKbAuKW%2FCRt%2Bk6as0ziKzNzjTdOb4No6JTXR%2FGqCo8YniZ4RcZqnOUOo6u%2FgrypfWrG7opasr5buCmdp8XNZjGrvGWe2I8V%2FQ0DwIiLrjKV7gAK71nn%2FH19%2BW&X-Amz-Signature=15316ac680b5ac2cef5d5ef6fc7f1d09f29f1419ddc20d77ff8651f72616675b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

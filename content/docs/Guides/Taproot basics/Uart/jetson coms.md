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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ASVE6B%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQD5ZQNubQ2%2BvqGOq6YiqT4Xjn49lPZwfGMvhUkLirpBggIgC0kHYBNGWGogNw5J%2BKoe%2BHlb0sGifko16EmI%2FGhnmq8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVBtbpPfJrT1m%2BX%2BCrcA5337UP97hu8sNWKxJ60gx6pTy93W%2BSXugA48lZRgnm3fn5KmZvpLI6HMIlssN1I66Sq%2FddM7%2F0BMWvU9sg55ww%2FB%2BNTaKaLeJLm6%2BpHnMhHH4ocExBxrzIplOWz4zDG1x2k8nT3Qa8oiHO2vF8YACps6yRhdPv2OOSIBZctc1t%2Ble6l93%2Bajshl92PXOMuOLs51tNOgOksG4Yyz7prOMie8Co0bu7T0BoIx6lF6%2BwtvVV6H2o7djRc50304ocsep20aOh5%2FLRXJDDCfdy18ropGYTwn%2FSWL2C%2FiJCOuMqEcfdB9801PejFiJXyIePYxAR1M1ful%2B%2BCNVP0PQAlF112SB1fJJO2GzMJGBEIuSVVOd6ZmJBw3TD8uFDP1AWtZM3dPgPTcp9OqTiGBtA%2Fc1XigPGKmZxLb9J9xXW%2BVcKkN1V7WLlJnJfxFvJtt08GjVQ3%2BV90PJoBMYaXF9KP3F9%2BI57uCMd0s5pRtWcezxV6cLY0NveOrNixZ%2BacmgCLSjwgMetB9nTrzH%2BH8BlRTVpR1iYznkEYeVGAMf8Y6xet8SAKp4HDnt8ejGlrCDyUitnr2%2BNuOsT1tA%2B9OMqEPjKWiV9WrGCHvLi6YE4v%2FSoQifVaqv1zwPIaIclEcMMS10cQGOqUBe1QfkOsHIqqJhOvQnBHzemd1demKXNdNT0ukfy0EGlZ1Vzap2QrXJ%2FC4CG9wfoPGHIbztYMAzf1C8iBe57y%2BeVrqGfksaMJvfjpaUEr9gC%2B3cqFvx0Lzl73Nxnc0UlK6xMPQWSnw0vN6RZuy0cw3bsbDKxuvSDSbda4H1P51h%2BFl7xg0cl%2B3yRB4m6X0SKBlAiU1zXnHYydMFlq8tgzKfxL2fc1T&X-Amz-Signature=66fdd4f70d797f84a9a5cebc04f34aca7d81fa974ff8b880896ec139c260994f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QHFSOLX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAzdND6odzBoA%2BphCUZLuiFOAF2x4ypFtEttUR1a4nS5AiAURmgNfFCJG5lPfzuuMlT2jhpD8DB7Bb6JBW7WhJfpTCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwxdw3VS4eJZuiKryKtwDuuMW8TwqSUcKkK1MTYicapNktpesbQOoMLBQMp%2BZ5hvtyv94si4kwf2pnTJtKL41s7M9n1mp2mp0pOKZEK9IMJnM6%2FwrmqHq1vw9mFYS4QTcJH2ym0QwufaooV%2Boa47KgOwDPiVEWOhejnj8flaGWvvfdCk%2Bv%2FEqhSgid8%2BafpqstHH6P%2BFo7%2FvcMBs9%2BgwMdnTbhNnTd6dbjr1vmnegJcq4UxxKVZJ475q94gMhLahlODJwAqv8y6Npfu4g0r6kWG1XzZcoQTGBumXJDZALpKe1ZPZ9GuqUiY8qnd4BmEEp7n1mj1bs3J75finJ6Kh10oc11guegvFGCMpMdU0YT1iC3FZGfa5pw%2FnBFV3qqZ%2BSM9Pqj4nxetZcKHtVMT2jUACwp2EZoQCtALROgcdn%2FDoWsrqEQDHgbi9qOLT8ErEWfSZhunMA9s6A9%2B%2F2L7PhBAbm8btA1QbP%2FzJlS5%2BttI%2FBlFr8irCC2kBprO%2FVkw1x5QfGkPnMTxBFyuWy96BNSW56hYeDNY2rQiCqKLVlLHEdX6fcgXNEbvBCnWdpyT4QEZDz5eVNu5HSemGDXKyfijDqZ0X1DpCPN2ZpBH5Cxd64iLgSFuFEZRv1gHndd9tKasHK%2Br85me5UDtIwy7XRxAY6pgETiWtQo1T3K%2F1yeOKAogvINtsCxAGh8PoxhLkP8Dv3E3aRiUuMladqvi9%2FmfxvtrlXrLUPaeMV%2B5Gb1MJykbFqqPa0Fk6svHZATalYiyguEHUQTQkdXzEfwqKU35jUdVrfrWxs6u%2B5FH%2F%2Fiy1F%2BWN3NHgEkobxumeI5uEVeotBPRXeCtwXqwMWIo2zIpA3qYf0cGWQNXmV4z%2Bqk1sk5AYKISlgympe&X-Amz-Signature=bcb67281bb7fa572dfc8b1372a39f9fb3b3bb4222f1eb74cc00f0456f44a7619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QHFSOLX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAzdND6odzBoA%2BphCUZLuiFOAF2x4ypFtEttUR1a4nS5AiAURmgNfFCJG5lPfzuuMlT2jhpD8DB7Bb6JBW7WhJfpTCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwxdw3VS4eJZuiKryKtwDuuMW8TwqSUcKkK1MTYicapNktpesbQOoMLBQMp%2BZ5hvtyv94si4kwf2pnTJtKL41s7M9n1mp2mp0pOKZEK9IMJnM6%2FwrmqHq1vw9mFYS4QTcJH2ym0QwufaooV%2Boa47KgOwDPiVEWOhejnj8flaGWvvfdCk%2Bv%2FEqhSgid8%2BafpqstHH6P%2BFo7%2FvcMBs9%2BgwMdnTbhNnTd6dbjr1vmnegJcq4UxxKVZJ475q94gMhLahlODJwAqv8y6Npfu4g0r6kWG1XzZcoQTGBumXJDZALpKe1ZPZ9GuqUiY8qnd4BmEEp7n1mj1bs3J75finJ6Kh10oc11guegvFGCMpMdU0YT1iC3FZGfa5pw%2FnBFV3qqZ%2BSM9Pqj4nxetZcKHtVMT2jUACwp2EZoQCtALROgcdn%2FDoWsrqEQDHgbi9qOLT8ErEWfSZhunMA9s6A9%2B%2F2L7PhBAbm8btA1QbP%2FzJlS5%2BttI%2FBlFr8irCC2kBprO%2FVkw1x5QfGkPnMTxBFyuWy96BNSW56hYeDNY2rQiCqKLVlLHEdX6fcgXNEbvBCnWdpyT4QEZDz5eVNu5HSemGDXKyfijDqZ0X1DpCPN2ZpBH5Cxd64iLgSFuFEZRv1gHndd9tKasHK%2Br85me5UDtIwy7XRxAY6pgETiWtQo1T3K%2F1yeOKAogvINtsCxAGh8PoxhLkP8Dv3E3aRiUuMladqvi9%2FmfxvtrlXrLUPaeMV%2B5Gb1MJykbFqqPa0Fk6svHZATalYiyguEHUQTQkdXzEfwqKU35jUdVrfrWxs6u%2B5FH%2F%2Fiy1F%2BWN3NHgEkobxumeI5uEVeotBPRXeCtwXqwMWIo2zIpA3qYf0cGWQNXmV4z%2Bqk1sk5AYKISlgympe&X-Amz-Signature=426735b247e49d0fe47840d29bc12563f819bc7a8ca2439d4b77d73c96f9b40d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QHFSOLX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAzdND6odzBoA%2BphCUZLuiFOAF2x4ypFtEttUR1a4nS5AiAURmgNfFCJG5lPfzuuMlT2jhpD8DB7Bb6JBW7WhJfpTCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwxdw3VS4eJZuiKryKtwDuuMW8TwqSUcKkK1MTYicapNktpesbQOoMLBQMp%2BZ5hvtyv94si4kwf2pnTJtKL41s7M9n1mp2mp0pOKZEK9IMJnM6%2FwrmqHq1vw9mFYS4QTcJH2ym0QwufaooV%2Boa47KgOwDPiVEWOhejnj8flaGWvvfdCk%2Bv%2FEqhSgid8%2BafpqstHH6P%2BFo7%2FvcMBs9%2BgwMdnTbhNnTd6dbjr1vmnegJcq4UxxKVZJ475q94gMhLahlODJwAqv8y6Npfu4g0r6kWG1XzZcoQTGBumXJDZALpKe1ZPZ9GuqUiY8qnd4BmEEp7n1mj1bs3J75finJ6Kh10oc11guegvFGCMpMdU0YT1iC3FZGfa5pw%2FnBFV3qqZ%2BSM9Pqj4nxetZcKHtVMT2jUACwp2EZoQCtALROgcdn%2FDoWsrqEQDHgbi9qOLT8ErEWfSZhunMA9s6A9%2B%2F2L7PhBAbm8btA1QbP%2FzJlS5%2BttI%2FBlFr8irCC2kBprO%2FVkw1x5QfGkPnMTxBFyuWy96BNSW56hYeDNY2rQiCqKLVlLHEdX6fcgXNEbvBCnWdpyT4QEZDz5eVNu5HSemGDXKyfijDqZ0X1DpCPN2ZpBH5Cxd64iLgSFuFEZRv1gHndd9tKasHK%2Br85me5UDtIwy7XRxAY6pgETiWtQo1T3K%2F1yeOKAogvINtsCxAGh8PoxhLkP8Dv3E3aRiUuMladqvi9%2FmfxvtrlXrLUPaeMV%2B5Gb1MJykbFqqPa0Fk6svHZATalYiyguEHUQTQkdXzEfwqKU35jUdVrfrWxs6u%2B5FH%2F%2Fiy1F%2BWN3NHgEkobxumeI5uEVeotBPRXeCtwXqwMWIo2zIpA3qYf0cGWQNXmV4z%2Bqk1sk5AYKISlgympe&X-Amz-Signature=fa59d73f832b0efd2f054b3c989c28dbbc02747953a71288e3d255eed94ca5c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

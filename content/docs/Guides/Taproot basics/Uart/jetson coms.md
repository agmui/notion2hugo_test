---
sys:
  pageId: "223da3bc-6297-80a4-8291-ecdfafcf7da0"
  createdTime: "2025-07-01T23:33:00.000Z"
  lastEditedTime: "2025-07-03T02:56:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Uart/jetson coms.md"
title: "Uart/jetson coms"
date: "2025-07-03T02:56:00.000Z"
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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RGTPUNF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEuxE%2ByX1M5xybtsVthHTBfp%2BNsAzjA%2Fy9y7gIC9cNHsAiB8%2FtG29N88HrVY5UEP4bmUNd6pOuPDJButMNnDJ38IJCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjz%2FPeiSaUwLe4Qa6KtwDlkygdSnipcG4EU%2F2cuQHrGns8WZoHdhyNO85OYwGmgGnkzJqXfBVXoIIVV38KaN7fbO1nEajtoqrYn4hrWuwETImCouP2r3bsnfoxLVz2%2BhyOyTTVzGEZ%2BMYGSJfj2sT9P3eZZmcRVs6O%2BZYL66nFZBb2M3%2F1u7ENV%2Fu1xZRO41K0klm7FdzgNGZHwT2zeIE%2B46n%2BMhHVHCGQVle4TfFAbbpEdKpOv3EFiEy0JDT76Evx%2F6sR4aHra2dPCSkntWLo9LTk8iTgjshMdjW4dKgCOs%2FHGG4fG%2FCPVYvc7u8GdLYnkS0vFqbGbpyLx%2BkulotxPFmPEccfMDRL6iKA9d98gmfoSRLCJFC%2Fb4jIis%2BT9Yu7Lsbthb8WrG8qNO594vqVDqOqm6VexuUVJe8BSP9B46hFNQkfSOs%2BG1ozks2mxPVU5sRhR%2Bhf3uhgLc8ZVJsITwY1%2F7LwrqfdfsKqqObi03K%2FlyAWHrUed7F2FYdrLwaBF7pRVYl8fa78GDP5hOfynQmr%2BgaiiyWRZJkZvva%2FDx7DqOWWjJ5JDwM%2FEiOKMoehXdUmRLB8fyS82Y5r5ee7WPKXCSkKcbgw6rnKbEvzq%2F25zHTRBOVie2zeRwG204xUdwdbONcriLgWQ8wt6%2BYwwY6pgG7C%2FkY4W7CI0wbhh%2F6tAbg1LiuOfMkqZ863LM4IP%2BhsgowRrANXvNIp6u%2BG%2FDxThv0GpU6xIveyAVSw9qegVxpTN8mlgHr0HMtSWBiML7xrs%2BJa3HZRsRtBVtV5AEhEw%2Bb4iQMQ%2Fkdt%2Fksz%2FGTRSqK9jLMc6uuuV7OyxrerYu2KuV5Sy%2BJW6t%2BswefANEKR8DZohzBfKXuFj8ym7XsL3YsVdhvmJbn&X-Amz-Signature=6e850de93361beeb49ce680f51f14e5d47d355acb073b15e67bd94c654a6a1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6DRF4RK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDRual0exuLuxvqljlkq3UF1M6saJrdqYqf8Oq6ngH0ZAIhAKeKXoAPcOlp8mh10CTu7uWe%2Byyiua%2B57P3P3yT4cxQ2KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXwexWNO5y7614p10q3APVwI2ARR7hEd1kr1hiWlJm2SNcG1X21EO%2FqC9eVO0o1U3ri2RSh9FmVgKGXpAd6ldML7YwLNIaAJS7iYBkXStTLfD%2BSpwVODR%2FjXjQRNj%2BMRP9k3xkPvt7r3BGt1NMBJX5Rvd6J9lWWbXv1yqGZuH0vdGIrldUkcxopo2s2nbjoQEg4w%2FN0xojKEZEh%2F2kbCfIluTp1lG%2FEBUairByyRVlDce4SNSj4%2Fo1yJ2Lj4M%2FKUXwkTTFGcLcL4RiTtNczsWi0nzv4K%2BOmgI33Q3sqMGhM19ymi6TYtC26E91sF0gQne7zDE2TOlB3cyd5B88a%2B2u4XZF8V9YNq4DiVdjlXcH8s%2F4IzD53SR42nPLBTBdXHAsoUat%2FjbwOSsfooo5UY4vUXZoPz5c9O6XA1RB%2BUX7Sf3p7bS5xre1G97aj%2BNiVX0vl8t6kb0tI8XA%2Fqa4ktcd2I03BbZx5dOy8Cz5b6SLIctVlDrzl9ctYKZeYGXAG9YElXSv1s5m%2FRt9SDNIR3srYaJwlVF8FbLL1uWDgaqSO1H%2BCJNBF%2FmvOWBiq4CfhstQpNta08DFOCW%2Fdi4vR2VveAeXrTxX97yw9FNHuOwGzDXHR6%2FYc4e635PDEn%2BYenbvHx0xCPvPFYNhiTCJr5jDBjqkAcQyqZh7qmsY%2Fqnn0F2Mq7EJQWHMWoe%2BLGo9SgI3NRJ%2F8CdU%2FPYgTGVjZ3Ew%2BMFo38BAw07TaD1EKuHbgmfxPwRuYuBrfw1IGre4dBd3K6GsUrfu4zhgK7DZ493%2Fep8Conu5fB5p8O46IxUzgiA75jtAilW0g9NbUcvrmOT%2BLJOHMbqqfbbj%2FEwLzm3nD6Si02RFAS5gqsRNWluMmeecOMaz%2F0xI&X-Amz-Signature=fc2f1b2afc882ce81157e6f5d19cd4c89d09f9cc89ba8e86421252480389a190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Connect RX of the type-c to the TX/TXD of USB to UART

and TX of the type-c to the RX/RXD of the USB to UART

<details>
      <summary>Note: TX and TXD??</summary>
      TX / TXD
  </details>

<details>
      <summary>UART1 but its UART2???</summary>
      TODO:
  </details>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6DRF4RK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDRual0exuLuxvqljlkq3UF1M6saJrdqYqf8Oq6ngH0ZAIhAKeKXoAPcOlp8mh10CTu7uWe%2Byyiua%2B57P3P3yT4cxQ2KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXwexWNO5y7614p10q3APVwI2ARR7hEd1kr1hiWlJm2SNcG1X21EO%2FqC9eVO0o1U3ri2RSh9FmVgKGXpAd6ldML7YwLNIaAJS7iYBkXStTLfD%2BSpwVODR%2FjXjQRNj%2BMRP9k3xkPvt7r3BGt1NMBJX5Rvd6J9lWWbXv1yqGZuH0vdGIrldUkcxopo2s2nbjoQEg4w%2FN0xojKEZEh%2F2kbCfIluTp1lG%2FEBUairByyRVlDce4SNSj4%2Fo1yJ2Lj4M%2FKUXwkTTFGcLcL4RiTtNczsWi0nzv4K%2BOmgI33Q3sqMGhM19ymi6TYtC26E91sF0gQne7zDE2TOlB3cyd5B88a%2B2u4XZF8V9YNq4DiVdjlXcH8s%2F4IzD53SR42nPLBTBdXHAsoUat%2FjbwOSsfooo5UY4vUXZoPz5c9O6XA1RB%2BUX7Sf3p7bS5xre1G97aj%2BNiVX0vl8t6kb0tI8XA%2Fqa4ktcd2I03BbZx5dOy8Cz5b6SLIctVlDrzl9ctYKZeYGXAG9YElXSv1s5m%2FRt9SDNIR3srYaJwlVF8FbLL1uWDgaqSO1H%2BCJNBF%2FmvOWBiq4CfhstQpNta08DFOCW%2Fdi4vR2VveAeXrTxX97yw9FNHuOwGzDXHR6%2FYc4e635PDEn%2BYenbvHx0xCPvPFYNhiTCJr5jDBjqkAcQyqZh7qmsY%2Fqnn0F2Mq7EJQWHMWoe%2BLGo9SgI3NRJ%2F8CdU%2FPYgTGVjZ3Ew%2BMFo38BAw07TaD1EKuHbgmfxPwRuYuBrfw1IGre4dBd3K6GsUrfu4zhgK7DZ493%2Fep8Conu5fB5p8O46IxUzgiA75jtAilW0g9NbUcvrmOT%2BLJOHMbqqfbbj%2FEwLzm3nD6Si02RFAS5gqsRNWluMmeecOMaz%2F0xI&X-Amz-Signature=e9603004df226ec015c7f9264f262c6cfd61604ee2e94d6b9aec632aa2bd53a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

Note we applied the settings from [here](/223da3bc629780a48291ecdfafcf7da0)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6DRF4RK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDRual0exuLuxvqljlkq3UF1M6saJrdqYqf8Oq6ngH0ZAIhAKeKXoAPcOlp8mh10CTu7uWe%2Byyiua%2B57P3P3yT4cxQ2KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXwexWNO5y7614p10q3APVwI2ARR7hEd1kr1hiWlJm2SNcG1X21EO%2FqC9eVO0o1U3ri2RSh9FmVgKGXpAd6ldML7YwLNIaAJS7iYBkXStTLfD%2BSpwVODR%2FjXjQRNj%2BMRP9k3xkPvt7r3BGt1NMBJX5Rvd6J9lWWbXv1yqGZuH0vdGIrldUkcxopo2s2nbjoQEg4w%2FN0xojKEZEh%2F2kbCfIluTp1lG%2FEBUairByyRVlDce4SNSj4%2Fo1yJ2Lj4M%2FKUXwkTTFGcLcL4RiTtNczsWi0nzv4K%2BOmgI33Q3sqMGhM19ymi6TYtC26E91sF0gQne7zDE2TOlB3cyd5B88a%2B2u4XZF8V9YNq4DiVdjlXcH8s%2F4IzD53SR42nPLBTBdXHAsoUat%2FjbwOSsfooo5UY4vUXZoPz5c9O6XA1RB%2BUX7Sf3p7bS5xre1G97aj%2BNiVX0vl8t6kb0tI8XA%2Fqa4ktcd2I03BbZx5dOy8Cz5b6SLIctVlDrzl9ctYKZeYGXAG9YElXSv1s5m%2FRt9SDNIR3srYaJwlVF8FbLL1uWDgaqSO1H%2BCJNBF%2FmvOWBiq4CfhstQpNta08DFOCW%2Fdi4vR2VveAeXrTxX97yw9FNHuOwGzDXHR6%2FYc4e635PDEn%2BYenbvHx0xCPvPFYNhiTCJr5jDBjqkAcQyqZh7qmsY%2Fqnn0F2Mq7EJQWHMWoe%2BLGo9SgI3NRJ%2F8CdU%2FPYgTGVjZ3Ew%2BMFo38BAw07TaD1EKuHbgmfxPwRuYuBrfw1IGre4dBd3K6GsUrfu4zhgK7DZ493%2Fep8Conu5fB5p8O46IxUzgiA75jtAilW0g9NbUcvrmOT%2BLJOHMbqqfbbj%2FEwLzm3nD6Si02RFAS5gqsRNWluMmeecOMaz%2F0xI&X-Amz-Signature=e2732ec29fbfcaf54d6573c6546e0e62b5107fcdc436f941b4021630072e83f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

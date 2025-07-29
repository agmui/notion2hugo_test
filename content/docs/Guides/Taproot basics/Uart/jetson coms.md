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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOVWJUV5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIF2gk%2BX0sGHWF9zeAfho9pKlY2baXCjFxEs8%2BYA5bu0SAiEAja7hT%2FIbpBMrH6UlKijln1xwXM%2Bn7zUBpqfrjEjenv8qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZVw9UrIZrIut7SwircA6ZslhVxFA31h5meh%2FTMMWULj2xBupxmQza%2Fv4Hz8rB9INsnJ%2FHKgymuPFT6ZjIaarFZwCeauYXj8mPFTR6TlY%2FFFmwMB%2FkrhZ5fObe%2BRzIJcHFEZVewT6qpaqcPKt%2FbZB9Gs1nt4rUUiPWUqcQY1I48VMfneEXS9I8W5aKhc08dOppIAphrz18b5uWgwwJAUtrFeuMSTNUhD%2Bm%2Fa8jgV%2FN2u9r0r4Vn5IXA9D9OOUl7t%2FziSITN8NsNKfLjlSjzoi39vCQglPXf5%2FJw5350JCeRe1n05zM5kxLZ0xqdpSrVfd4KiHjnV9fHsmC4oUeo%2FGhUeGJGR5IBeF0qmSt1dImgZLYktkDVysQcppZBm3F64C5t3S6EYrMQEgElwEeimXxwxKW0fwsUuU5unOIs5DfOJ0M0elEXKV%2FFPcTqge9w%2FvZR0VklDDCVzsbgvx2lwsOqdEuTl21f9hFCc7S1QBaNB%2BWcU0%2BJ81fI6L1YTkETvmIJAlm4yMOYT2UvWqTa7DG5C5JA%2BEj%2BA5%2FpwN7BSlIMD6ziuDdrN9YruFqhvdknZPfT3DCsB%2BlrGCONLMX8FEEoWEgTCQCliRD1NAu7frp4InonAjRU%2BH%2FrwxenmJdmImnAA%2BrL7Azd9aQ7MLu0ocQGOqUBvm5otkPwgchxTM2mf1d5MQJv7GgzH0Vl%2FQ9YJ%2B%2F8Dhl9D%2Bc1fUWNbrv5vQuM6Lct8D5d1zfuM71%2FGSDY%2BMZOfCAoDq6hrBhn2NrwzduSyHKiiUsG6%2B5UdSByvoigh8nyC%2F8qymbldZfxNWJrZVllhiGUrhOaCFFN6GNA3WsxnHp%2BcnIB0%2BA%2BP8E1DudSQ2F8OLAUneP%2BgkfssA6mTuImnBuu3MzH&X-Amz-Signature=f5fb3dcc0704d5acb4ec46933419b65a5801a9eee94b84ed134d5509ccc8d89b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI424D4U%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCUSTXel2rTkj6q%2F4i0yK06zWVmNUYotw5NMS48uIpnyQIgJMbPoWmbgOGltTwinrQxo%2BLUaPa5SVETz87wI5qbi7oqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqb4lywCwIT5Vb%2FoCrcA0RkXiIX%2BnSzQ8EFhinbWocGRzs15wlScl8lexQ8X85XFmG8eySXluM%2B1RZXb27IZLGqWMJPR5l%2B8NOBz8Gr%2Bg79DRNVsGCunxFNouHTkG1bfVm4k2F41T46Soy4LeNKdcfqbkKQiH%2FIt8%2BKKosNuM3E0T0T%2F%2FlamKxLY4nUEFVFpPfNw3rv9Nsg2m9iQ918mT7y%2FHAKiEAAAptX3b85Fpg7I7HL8H1RQkEI4cMk2jpgf7%2F0iVkQzzWXo7LLmEa2Zc2niUfo9KlyQsG7qzBaQZoZ%2FmLsF9im8W1addRSJ9O3963oBQjaaM1GL4tY4fyWump2kLYWGmb4iFItE%2FjPBfJicDbkmHOw4RWfmnLId932ZWsq5oI84gozU8b3Qc2X7ejsjKEgEnpVqWbFyvMs%2FkoL4aK6uGn76sB4cz7LLdScuh%2FkyszXlYyXtSjIImVSxlL061Jxxi9IBgAbS65jttlmxlznnWWfxgf7rPCey1zgAvZcYWhviTUSiK5hOsnGIVuz0UwE%2Fj1Bnt5t4MTIPmkaqBydqS7eaMMJmyumioPtafkr2Cv7%2BGkXyiTyAYbTfkD4QXOyjHv5ZV1zyHTD2FzNgd6wISZ0rxIM47sUh7%2FocuT21BANOLw8CSmwMNi0ocQGOqUBoxpaxIf0VoZpHJMJWNEnXR5N966RbHZTyOXd8KH7yDu3LeyjLGWlXvzfdPFKo40S9NgexdNiBaZj0HLC3giqsZh9fiKh%2BvKMM4k0NeBSifF3QiAsTPgroJwADml%2Fviwez1%2B9oKAJ6meOufjZ7bcDEDOU1K4gJ84ZnPGkstmlJbHv1bvg2ebNh7ziy%2FIGMwcAPhugNj1ZAf0uX17v%2FSjIoLrSwLv2&X-Amz-Signature=3b16267c3379393118a11641dc602ddedbafa72903eb111996d0d755597ba5d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI424D4U%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCUSTXel2rTkj6q%2F4i0yK06zWVmNUYotw5NMS48uIpnyQIgJMbPoWmbgOGltTwinrQxo%2BLUaPa5SVETz87wI5qbi7oqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqb4lywCwIT5Vb%2FoCrcA0RkXiIX%2BnSzQ8EFhinbWocGRzs15wlScl8lexQ8X85XFmG8eySXluM%2B1RZXb27IZLGqWMJPR5l%2B8NOBz8Gr%2Bg79DRNVsGCunxFNouHTkG1bfVm4k2F41T46Soy4LeNKdcfqbkKQiH%2FIt8%2BKKosNuM3E0T0T%2F%2FlamKxLY4nUEFVFpPfNw3rv9Nsg2m9iQ918mT7y%2FHAKiEAAAptX3b85Fpg7I7HL8H1RQkEI4cMk2jpgf7%2F0iVkQzzWXo7LLmEa2Zc2niUfo9KlyQsG7qzBaQZoZ%2FmLsF9im8W1addRSJ9O3963oBQjaaM1GL4tY4fyWump2kLYWGmb4iFItE%2FjPBfJicDbkmHOw4RWfmnLId932ZWsq5oI84gozU8b3Qc2X7ejsjKEgEnpVqWbFyvMs%2FkoL4aK6uGn76sB4cz7LLdScuh%2FkyszXlYyXtSjIImVSxlL061Jxxi9IBgAbS65jttlmxlznnWWfxgf7rPCey1zgAvZcYWhviTUSiK5hOsnGIVuz0UwE%2Fj1Bnt5t4MTIPmkaqBydqS7eaMMJmyumioPtafkr2Cv7%2BGkXyiTyAYbTfkD4QXOyjHv5ZV1zyHTD2FzNgd6wISZ0rxIM47sUh7%2FocuT21BANOLw8CSmwMNi0ocQGOqUBoxpaxIf0VoZpHJMJWNEnXR5N966RbHZTyOXd8KH7yDu3LeyjLGWlXvzfdPFKo40S9NgexdNiBaZj0HLC3giqsZh9fiKh%2BvKMM4k0NeBSifF3QiAsTPgroJwADml%2Fviwez1%2B9oKAJ6meOufjZ7bcDEDOU1K4gJ84ZnPGkstmlJbHv1bvg2ebNh7ziy%2FIGMwcAPhugNj1ZAf0uX17v%2FSjIoLrSwLv2&X-Amz-Signature=b1589b7e4cfa330bdde2d015a1ae11a5060629b1dc9cb2bc7014a080e45cc2ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI424D4U%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCUSTXel2rTkj6q%2F4i0yK06zWVmNUYotw5NMS48uIpnyQIgJMbPoWmbgOGltTwinrQxo%2BLUaPa5SVETz87wI5qbi7oqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqb4lywCwIT5Vb%2FoCrcA0RkXiIX%2BnSzQ8EFhinbWocGRzs15wlScl8lexQ8X85XFmG8eySXluM%2B1RZXb27IZLGqWMJPR5l%2B8NOBz8Gr%2Bg79DRNVsGCunxFNouHTkG1bfVm4k2F41T46Soy4LeNKdcfqbkKQiH%2FIt8%2BKKosNuM3E0T0T%2F%2FlamKxLY4nUEFVFpPfNw3rv9Nsg2m9iQ918mT7y%2FHAKiEAAAptX3b85Fpg7I7HL8H1RQkEI4cMk2jpgf7%2F0iVkQzzWXo7LLmEa2Zc2niUfo9KlyQsG7qzBaQZoZ%2FmLsF9im8W1addRSJ9O3963oBQjaaM1GL4tY4fyWump2kLYWGmb4iFItE%2FjPBfJicDbkmHOw4RWfmnLId932ZWsq5oI84gozU8b3Qc2X7ejsjKEgEnpVqWbFyvMs%2FkoL4aK6uGn76sB4cz7LLdScuh%2FkyszXlYyXtSjIImVSxlL061Jxxi9IBgAbS65jttlmxlznnWWfxgf7rPCey1zgAvZcYWhviTUSiK5hOsnGIVuz0UwE%2Fj1Bnt5t4MTIPmkaqBydqS7eaMMJmyumioPtafkr2Cv7%2BGkXyiTyAYbTfkD4QXOyjHv5ZV1zyHTD2FzNgd6wISZ0rxIM47sUh7%2FocuT21BANOLw8CSmwMNi0ocQGOqUBoxpaxIf0VoZpHJMJWNEnXR5N966RbHZTyOXd8KH7yDu3LeyjLGWlXvzfdPFKo40S9NgexdNiBaZj0HLC3giqsZh9fiKh%2BvKMM4k0NeBSifF3QiAsTPgroJwADml%2Fviwez1%2B9oKAJ6meOufjZ7bcDEDOU1K4gJ84ZnPGkstmlJbHv1bvg2ebNh7ziy%2FIGMwcAPhugNj1ZAf0uX17v%2FSjIoLrSwLv2&X-Amz-Signature=4fe57bc0587d6e7ee051f9ae6aa4f20985f96d2f2c658350b1a281a508603859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

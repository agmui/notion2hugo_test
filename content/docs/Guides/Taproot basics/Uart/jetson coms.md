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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJHDK7JB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIBrLGoKVdLmO%2F5nhEN5IkLvm6L1rYE0Dy1M%2FO8w3nSfjAiBl9ZxgjoIzhR7J1apE5dJcYyL8x3f%2F14yCtypJNyOxrCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMP%2BQXvDvkUMpxBThpKtwD5COMg%2FxFjCY55%2B0d8HDyTx0vGZzvMlUnQtVrON0keme6JBIwS2KodslS4bk7A%2FYFwEApRbkNQKju95LlEuc16sRnQdeyGF4z3DppfOn1wDbJxZEjClJF9%2Bx5x4zOSpQR4zY2plbutvQhbFvijqcb4BkJsBmdj3eVsmwg2rFo5Vq3LZG2KqCtkqkE4UaJ0gvWTs0ldmSJLTZKiE3coctcWwuyWkdERmpHvP%2BaDqdEYhENZ0ooZ4Q6%2F8NoNu3vq8%2BqB%2BvxxZr000IJqcqUhsigSJshVD%2BbmM6YinUAZKb%2BtjO%2Bmw55CxPqAkzqTvHlleWWI7AtiHYaw%2B7vp%2FNW8nKX%2FeVAMStXiIF4VwuAMjuQPoNCvuG0w0NKdup2v7l8m1GqRTLns5F7emEz3K2U1SW8j9wFH7pfdeMzS75%2B6L4s9dgWACdiJ3FAVMKoWPk9iMtZlWCPZQljVCyh982YHSlGm%2F4T2hkAu7XojWoIssX9aPiMpcKpZgEousF0vQ%2FVn8hNHW2%2FBGy5%2BSiH%2F0BvAkBaAu4Ggw5ln3ve%2BHwGPbvYF1r%2FiRpQokQ%2BxgwFre92PQVTK1DzhsFx%2BS375orCn7%2Fmp4wbFvBK1gWTtQgdweQ9DeLDX0%2F7ImkhqL4N88own7%2BgwwY6pgE5pkFYm2AHiAnnpeGiTlYZ0Qqso8Ng6wcT7x7Vxyp6iIWYlZEdQEzctRIq%2B69YAXhDfew2gasPXaNDYe%2Bj%2Fuquw2k9zz%2BD%2F4ukFD2dG5lCFeVNQIY6yCNIjAV3s41nabILI2kR6C6OfCeJ92zzV6k24EqGnElBMPGiDNsW5z%2F0F50eDIUq%2BUFafqQDkdOtVbrt6mWjAiH%2FYNGkpyf8uN1ki1hQn04%2B&X-Amz-Signature=c941c8693f5aac9669fc82f3b5e98f718895e881580b16c9470ea812798a02c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMDP57JE%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDZiwlYgwYOhAvJZdPaUAj4IgImsUEHYIhiWEvajnXk0AIgI5MgPRkOXIEgeCREJ7d6UtfV4hOlZMJgoENXgNLINjsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDe55M5pV1ydOy6dMCrcA%2BiWoBnPCb0mlMOc3ni0bt10tgYCGB0GvPXgxCK5OJ0bREXOtmaBzN5RpIn6EJc%2FnSUL%2BXDtHxH12vvEt%2F5iZ4DpMFy382sum4jafBCpRhS%2BAS%2FyVmX%2B3Ek90kahReKYxAN5YsH7pt0TS0gJrRWRMntO4KIb2eYmlxFyIdWIz0isyrB6gANn22sT0EsuX6U9SCZ%2BmBE2EtxK6j8EqFUKdeEZqfL4bVOzjg8FG9IWBAreHHQXe1qjnPyVmKdeF3li%2FtqEduq8Gh6%2BJx0wmrPmYw4Fee1fvCo5%2BRXCZ3KDMFvibOwe1YVvLuJEL66oeJqQXPYt9ijzCJAw9ng2HbQyYxaYJYt9bgRAorfG1EXSBtb2Vf6g1hsSjc79SA6ASp%2BTNIxdRS%2Bh2aOtB2HZ0NELcgpJ%2FRMXb%2Fc4Lkf2VA%2FSQ20y7Y35Pja%2B3actg6MXKeyz3YmIZ6K4IctTiACD%2BRaIesV4lL3NnAudFfyEZ74xPOZbnTXDtgsM2bQ0%2F89Y%2FmnGnKRUuo0AH479IcZ5GsYAlNCt0R6lvcVeE2UEXvYA88tkt6COz%2Bo8w4ehaKa%2FPs0JajPF46yyyRDWmA%2FDtkYi3qgKGlXU8ZFHAuiMMP%2FYqclmK9xRyozWF9nI2imNMK%2B%2FoMMGOqUBna%2BQaYn%2B9Hw0goEt5c6HviOshGacmdpJYzviysAx%2FdiQvPrQaxAPjj76K5uF96e%2FGPZ6k5mWxbZNfYkP%2FDfzMbrl%2FdEJ8eyLC5TltnjUPXktW1qmTTNZNpGXG7gz%2FL8x4Z08gzXT14kPQggShl8czK4wN%2FyrGSO%2FZxMI%2FXC%2BYNNedLvrwpfV8l4rskhGUm4ycR9poXrXeo1%2F78s4DaMDNz7nqgrd&X-Amz-Signature=478b81c7b26e45fbd0ff28339b9cd8dae47334a55fa9e1019cd3abb1e77bfa69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMDP57JE%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDZiwlYgwYOhAvJZdPaUAj4IgImsUEHYIhiWEvajnXk0AIgI5MgPRkOXIEgeCREJ7d6UtfV4hOlZMJgoENXgNLINjsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDe55M5pV1ydOy6dMCrcA%2BiWoBnPCb0mlMOc3ni0bt10tgYCGB0GvPXgxCK5OJ0bREXOtmaBzN5RpIn6EJc%2FnSUL%2BXDtHxH12vvEt%2F5iZ4DpMFy382sum4jafBCpRhS%2BAS%2FyVmX%2B3Ek90kahReKYxAN5YsH7pt0TS0gJrRWRMntO4KIb2eYmlxFyIdWIz0isyrB6gANn22sT0EsuX6U9SCZ%2BmBE2EtxK6j8EqFUKdeEZqfL4bVOzjg8FG9IWBAreHHQXe1qjnPyVmKdeF3li%2FtqEduq8Gh6%2BJx0wmrPmYw4Fee1fvCo5%2BRXCZ3KDMFvibOwe1YVvLuJEL66oeJqQXPYt9ijzCJAw9ng2HbQyYxaYJYt9bgRAorfG1EXSBtb2Vf6g1hsSjc79SA6ASp%2BTNIxdRS%2Bh2aOtB2HZ0NELcgpJ%2FRMXb%2Fc4Lkf2VA%2FSQ20y7Y35Pja%2B3actg6MXKeyz3YmIZ6K4IctTiACD%2BRaIesV4lL3NnAudFfyEZ74xPOZbnTXDtgsM2bQ0%2F89Y%2FmnGnKRUuo0AH479IcZ5GsYAlNCt0R6lvcVeE2UEXvYA88tkt6COz%2Bo8w4ehaKa%2FPs0JajPF46yyyRDWmA%2FDtkYi3qgKGlXU8ZFHAuiMMP%2FYqclmK9xRyozWF9nI2imNMK%2B%2FoMMGOqUBna%2BQaYn%2B9Hw0goEt5c6HviOshGacmdpJYzviysAx%2FdiQvPrQaxAPjj76K5uF96e%2FGPZ6k5mWxbZNfYkP%2FDfzMbrl%2FdEJ8eyLC5TltnjUPXktW1qmTTNZNpGXG7gz%2FL8x4Z08gzXT14kPQggShl8czK4wN%2FyrGSO%2FZxMI%2FXC%2BYNNedLvrwpfV8l4rskhGUm4ycR9poXrXeo1%2F78s4DaMDNz7nqgrd&X-Amz-Signature=6786e93ddc317d61bfde918895ab5f9b2003b70596449b96f82bf5680f86fe9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMDP57JE%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDZiwlYgwYOhAvJZdPaUAj4IgImsUEHYIhiWEvajnXk0AIgI5MgPRkOXIEgeCREJ7d6UtfV4hOlZMJgoENXgNLINjsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDe55M5pV1ydOy6dMCrcA%2BiWoBnPCb0mlMOc3ni0bt10tgYCGB0GvPXgxCK5OJ0bREXOtmaBzN5RpIn6EJc%2FnSUL%2BXDtHxH12vvEt%2F5iZ4DpMFy382sum4jafBCpRhS%2BAS%2FyVmX%2B3Ek90kahReKYxAN5YsH7pt0TS0gJrRWRMntO4KIb2eYmlxFyIdWIz0isyrB6gANn22sT0EsuX6U9SCZ%2BmBE2EtxK6j8EqFUKdeEZqfL4bVOzjg8FG9IWBAreHHQXe1qjnPyVmKdeF3li%2FtqEduq8Gh6%2BJx0wmrPmYw4Fee1fvCo5%2BRXCZ3KDMFvibOwe1YVvLuJEL66oeJqQXPYt9ijzCJAw9ng2HbQyYxaYJYt9bgRAorfG1EXSBtb2Vf6g1hsSjc79SA6ASp%2BTNIxdRS%2Bh2aOtB2HZ0NELcgpJ%2FRMXb%2Fc4Lkf2VA%2FSQ20y7Y35Pja%2B3actg6MXKeyz3YmIZ6K4IctTiACD%2BRaIesV4lL3NnAudFfyEZ74xPOZbnTXDtgsM2bQ0%2F89Y%2FmnGnKRUuo0AH479IcZ5GsYAlNCt0R6lvcVeE2UEXvYA88tkt6COz%2Bo8w4ehaKa%2FPs0JajPF46yyyRDWmA%2FDtkYi3qgKGlXU8ZFHAuiMMP%2FYqclmK9xRyozWF9nI2imNMK%2B%2FoMMGOqUBna%2BQaYn%2B9Hw0goEt5c6HviOshGacmdpJYzviysAx%2FdiQvPrQaxAPjj76K5uF96e%2FGPZ6k5mWxbZNfYkP%2FDfzMbrl%2FdEJ8eyLC5TltnjUPXktW1qmTTNZNpGXG7gz%2FL8x4Z08gzXT14kPQggShl8czK4wN%2FyrGSO%2FZxMI%2FXC%2BYNNedLvrwpfV8l4rskhGUm4ycR9poXrXeo1%2F78s4DaMDNz7nqgrd&X-Amz-Signature=22aeec500ca62b930b4832e855ea733727bed45e7c3cb87786e6aa800e11dbdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

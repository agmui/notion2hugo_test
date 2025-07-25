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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHMAFH4N%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIDPFIOhMmimR%2FSH07uFNfXbearphuHuCtnoEQJp92P44AiEAsUjC9vCok19wkYpUeoNot2TZC4Ed9al0JTbI75QUSH8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDM6RXucXSaxOhHtmHyrcA%2BqyXdCnzOnjJd%2Bub1OU9kDj50GIVc%2FJzpuGYE8YhJp4GVqIB3tEj%2BK26gPtYrxBA%2Ftr%2BvHpeUnRe25jZMcRfP9WOOobuTSSkt%2BMTDmPfSXnzpVaax9vMcJAOtCgcKbs0hth3cVBHMPmWB6GYC1kjo%2BFhaJ32DK4bWkKf7VNsA2ikA5cX1k60VwdOjGjUr0EvNv%2FvSjxGs1qXZlhrnUrpN7U10OJgr2iO0Civ0STmppa%2Fg2oTjpqE2CNq3LuFvzGF4ATyDxLmLxpgp6dDudr1g1fgNs6FJtOAVi0j10Ec1IVYwfAeyUT2wnECy1ggY35irBJQtb87xD4xBXDEK2jK3kUqWhyDf8VbS0QDWbB4PvefkZ4lKStDg%2FH0xhhyqyme0puM0bnGTn5RBn%2Fq1c%2Fgi43KDenKc%2BxndQW5GXb0WkrOclKheUGMJWo5eLf1AKLsl7t690fdz4bzZvNSwkU7nmrwwYzm%2BUfSsXw5k1CGdXKmHNYj2rWiXK70t3kIi3TBM8%2Fv8WHkN5i9PyayXLMA26enP%2FytBQbwcdqGOfzStlvWZsf82MhEU1%2BIEdPbE6%2F9e8Ic1Z5x77FWW4WwmFX2Sfn%2Ffv7TuuL1%2FyEZ5pqf0cVKmtjUtu1f5l1Xu6QMLy8jsQGOqUBfDfJROCxdrj1gcw8IeKq41r%2Fhsskzv0IgglzGXc%2FjnPyXb1i9rq7jEdlzPxHiufd6Dixv0rjazqpoNOeP%2FqUf6l2%2BZKfvHyDO%2Fuh%2Bfu%2BDLy7qlM02B3rTW%2FjQl7nK6Wk141KWgGnZZ0hBJfGe%2BnlsExixBHSlMraw4F55Sww0asLmwQg0Y1ygF0C2rMX8QteE6Sut1G8%2BvFwAFty3nGxuebId0dD&X-Amz-Signature=a7a6411f3896adcc413e1456eb1c621acfd9d5240be0b8b37d288ebbf8dad1dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM2FO6D5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIB4s4k3KnfDBytVe%2BzD%2BYKNhuo0GKFk3Lvfl%2BmlpvYa1AiEAwavaxENz3mZpSYjGToIsGvwaYIg7FCyklZglkZSazG4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOZAmSP7%2FaQAtamk5CrcA21N4%2FLhhViq9MRjXFixT8LS5TJ5s756TsZ5hagKoZQ%2FjUNzyBUVb6VoNSzfVSJBVa1OHBYuilXE8%2FAqnKCvMd5yinu7IFi4ybUORz8Vcp%2Fs1fnqMfk0%2BVUcgoxr1G4pB%2FzB1H0MryO2szUvj3WUq4dcY6xF0V89avn95QelIc2OjE%2BcLqgX0ogPujtIGzycnNGi%2FNJvnWw3K6LpvHW2%2FtSHINylYZ%2F1LkbIEce9h3fmdq7P1GK%2FsbxSfPhU6ZHqOgc3m7DcN9kHuqNvGfmu7PmJipwYaKvwaDR89tlkGvuwIrffi%2BZkucwWhW1qiFSnpFpDuhvvvKQy65rA0LMZDevqnF3vPauFRIhWLsEJ%2FdqFFSCK9ZVVjprK95x7Vqj3hk%2BvpMG9FXGWY%2BnNeYtr2AAb1E6IgbjOa0k1oUMMHdH63Hw6lbPEo%2F1J3%2FQ1w8v7lSavFuQK0RZZUilJ21DRQa8ADFLcKfLWDFDMl8d2upRbT0xye%2F%2BgMBocXACgqTDMDcTOKnvnpSFghamD4dRMMlzw%2BaV3jTEB2BglFJPagls8MJSy4KAangpECCCV%2B2O%2BXPTVyqyDiZgBM8TH9E7ZNFuCx7BoazwqXMnXP0E8086360d6AKrms%2FjlA4uIMJe8jsQGOqUBeBqCRr1vqXh%2FAzPLXu6yKs%2BNeraPl2AvEzVKIbo7gLbIivzgx4qcWph1eo5ERnazS9%2BdcHWzcuwgK0bXqqH%2F7yz4A3wk2HeWSFTF3wZCh7eCeUTj1J4sBoc67FX5Zm4MvP%2B%2FR5Ob8oFNU%2BsW7Qiez3SZRYcjNIQdpDTrXDg5699qHOqE0umzAuHENBmEni6bF32k4h%2BQqaB3devaf88fZiX1nBdy&X-Amz-Signature=bedcc058b55841a3ce460320ade22ff0179990a791547deb711e9edd4bb88825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM2FO6D5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIB4s4k3KnfDBytVe%2BzD%2BYKNhuo0GKFk3Lvfl%2BmlpvYa1AiEAwavaxENz3mZpSYjGToIsGvwaYIg7FCyklZglkZSazG4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOZAmSP7%2FaQAtamk5CrcA21N4%2FLhhViq9MRjXFixT8LS5TJ5s756TsZ5hagKoZQ%2FjUNzyBUVb6VoNSzfVSJBVa1OHBYuilXE8%2FAqnKCvMd5yinu7IFi4ybUORz8Vcp%2Fs1fnqMfk0%2BVUcgoxr1G4pB%2FzB1H0MryO2szUvj3WUq4dcY6xF0V89avn95QelIc2OjE%2BcLqgX0ogPujtIGzycnNGi%2FNJvnWw3K6LpvHW2%2FtSHINylYZ%2F1LkbIEce9h3fmdq7P1GK%2FsbxSfPhU6ZHqOgc3m7DcN9kHuqNvGfmu7PmJipwYaKvwaDR89tlkGvuwIrffi%2BZkucwWhW1qiFSnpFpDuhvvvKQy65rA0LMZDevqnF3vPauFRIhWLsEJ%2FdqFFSCK9ZVVjprK95x7Vqj3hk%2BvpMG9FXGWY%2BnNeYtr2AAb1E6IgbjOa0k1oUMMHdH63Hw6lbPEo%2F1J3%2FQ1w8v7lSavFuQK0RZZUilJ21DRQa8ADFLcKfLWDFDMl8d2upRbT0xye%2F%2BgMBocXACgqTDMDcTOKnvnpSFghamD4dRMMlzw%2BaV3jTEB2BglFJPagls8MJSy4KAangpECCCV%2B2O%2BXPTVyqyDiZgBM8TH9E7ZNFuCx7BoazwqXMnXP0E8086360d6AKrms%2FjlA4uIMJe8jsQGOqUBeBqCRr1vqXh%2FAzPLXu6yKs%2BNeraPl2AvEzVKIbo7gLbIivzgx4qcWph1eo5ERnazS9%2BdcHWzcuwgK0bXqqH%2F7yz4A3wk2HeWSFTF3wZCh7eCeUTj1J4sBoc67FX5Zm4MvP%2B%2FR5Ob8oFNU%2BsW7Qiez3SZRYcjNIQdpDTrXDg5699qHOqE0umzAuHENBmEni6bF32k4h%2BQqaB3devaf88fZiX1nBdy&X-Amz-Signature=a2790c73246e328730dd1127e6f54c5f3fa3f2831b57581ef90a23a61c0a4498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM2FO6D5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIB4s4k3KnfDBytVe%2BzD%2BYKNhuo0GKFk3Lvfl%2BmlpvYa1AiEAwavaxENz3mZpSYjGToIsGvwaYIg7FCyklZglkZSazG4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOZAmSP7%2FaQAtamk5CrcA21N4%2FLhhViq9MRjXFixT8LS5TJ5s756TsZ5hagKoZQ%2FjUNzyBUVb6VoNSzfVSJBVa1OHBYuilXE8%2FAqnKCvMd5yinu7IFi4ybUORz8Vcp%2Fs1fnqMfk0%2BVUcgoxr1G4pB%2FzB1H0MryO2szUvj3WUq4dcY6xF0V89avn95QelIc2OjE%2BcLqgX0ogPujtIGzycnNGi%2FNJvnWw3K6LpvHW2%2FtSHINylYZ%2F1LkbIEce9h3fmdq7P1GK%2FsbxSfPhU6ZHqOgc3m7DcN9kHuqNvGfmu7PmJipwYaKvwaDR89tlkGvuwIrffi%2BZkucwWhW1qiFSnpFpDuhvvvKQy65rA0LMZDevqnF3vPauFRIhWLsEJ%2FdqFFSCK9ZVVjprK95x7Vqj3hk%2BvpMG9FXGWY%2BnNeYtr2AAb1E6IgbjOa0k1oUMMHdH63Hw6lbPEo%2F1J3%2FQ1w8v7lSavFuQK0RZZUilJ21DRQa8ADFLcKfLWDFDMl8d2upRbT0xye%2F%2BgMBocXACgqTDMDcTOKnvnpSFghamD4dRMMlzw%2BaV3jTEB2BglFJPagls8MJSy4KAangpECCCV%2B2O%2BXPTVyqyDiZgBM8TH9E7ZNFuCx7BoazwqXMnXP0E8086360d6AKrms%2FjlA4uIMJe8jsQGOqUBeBqCRr1vqXh%2FAzPLXu6yKs%2BNeraPl2AvEzVKIbo7gLbIivzgx4qcWph1eo5ERnazS9%2BdcHWzcuwgK0bXqqH%2F7yz4A3wk2HeWSFTF3wZCh7eCeUTj1J4sBoc67FX5Zm4MvP%2B%2FR5Ob8oFNU%2BsW7Qiez3SZRYcjNIQdpDTrXDg5699qHOqE0umzAuHENBmEni6bF32k4h%2BQqaB3devaf88fZiX1nBdy&X-Amz-Signature=13d6742a44f9c4f3315ee43d4b2484d0a34fbcb3ab1a387f2246075b17df43e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

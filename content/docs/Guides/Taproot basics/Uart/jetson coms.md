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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSO2R5D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBIqITn5odoWjh9%2BnlwgRej8F%2BB445%2FlifavhYP4TL%2BcAiEA5YqYN0qoui97EYuGldfypv7ue%2FRxtf1lwFUG%2BmjjjUkq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLeIMt54y%2BrHi5CK7CrcA%2FS%2FlD1nSNIlcdKS7Yu0O6A2zLPGb9X0XXz8WoTi3Q1KIrft9fMo%2F9Ru0itEUmueTR9BEWvPvryIcq5BB6p9DGPD8KbvPL1xkAltJUG9tJrz3%2FmLAc1NmYlHnD2xmZSJuHo3CFZahVQQMy2iXz947H4wEcR72EOHo0e%2BYvo%2Bd48HXzxXfPmqvMxNKNSURW3m3aHBWI3POclAirK6zIb%2BakfsUnzl%2BomnAocd6ZcrMD%2FNymhNcPNMEzxdj32Iy3%2BqClHaHu6M5uvJOq0dbTyXJci16kG%2F1C%2FXSU13NzjRxdXKLKAfbC6zuOfQ87mMFd62YH8VJIHi04CbejpXLinJb2Bx1g3uWGKuRGAum8wrn4YIT6quc366el2uL8gQF585zPcHh958GXb3CPGTfy4J9D4gfaKn8Ebo3uuPGkZYTw9e2YCGKFrCa9IDdPDx7jUhAs5Edny9lFDjmx1UKNCPcOjk9Ln6E1Rq2NU%2BfZdBCm4D2LwQteCI%2FNc5leX7LCJhQK9kui9%2F9oCTJkx3L%2BK1YSt6xTnZIraMn%2FBz99nSBpCHXWQY8%2B4eXbo6tQ35xBSS3WKlbLYULwP%2FzHcKBnMmqUr2a2wQAmUK60IU9Ng3wZO0QHFVvRzDy1alxLu3MI2BwsQGOqUBIyQX8A1n5A72xnNFyCEmqylJktSYMfx6DWkC40oL0ImadbEhrZLSPd3Vev7qvy%2FnoRZYKB5qZBKIFudCoDhT9zTzGlxcuLAB88APi0vTwud0T3DKRLhNNfr6LA0YJOhxqw2Is3G9MtDyAo5FoFw4zv1Ks0g4pvl0SfszTmQ6fhU9XulrQYdr%2B7AEmH8goFUdJ9Ve%2BiKfD0bkYwEXymXk%2BxLIiNyd&X-Amz-Signature=e7b742b55d1b5d746fb93600bf64d437240a107b82baa2c267fc89bfd1847e36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSXL5JX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFH65glpxduqIPjeDi4ViU38VVTYkLFZj0DOFShDxSYGAiATxuxmO4WrBoWP45Htad%2BblB0BsunztuceWCSuwU%2Bi7Sr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMLIIYH2NRbUEsgEwaKtwDwtXbWQgDfWWiW3d%2BGQrsau4hpiljA0m%2FBw%2FlqT0uNXOldg3COb74dQgShXoAH5BQK5KA8NnjhyVNKFjDHmidDgyiwtSr34aaGEsn9uytfEzQQKjXVLp3ehnrOVKP3Zi7op6Qtdyjho0vOfbDBSSbpWyPZx5w1B84JPon%2FbRRQA4ZGwOItsPUaYnU0Dm%2BGjpeSW03bHcjs0kTxBKsEhka7N%2BnYSO9tc1Pm%2F8VSArzyAjKHl0DD9B87JZF2orrYt%2Fe%2FEX47ZCA0lRnQvCas16rzAtjJ73K18DVmZeO%2BdyhoImXX0f6IfrBycbdIoEZ0UidXnQLt7xfkktZoa0BHEZDDWAPF86OOx%2Bp%2B1Bm7F4ftUAWo%2FBd%2F00y11aGsCiyntvE%2F%2FuAc2ac5nQ%2FSnCuJF%2FakgZn9T3nL6HCuY3wKkj1nK%2B9tyzfvBfOpz3P6echOaYjBOClvP280%2BJC9qtVlDMDJtYnYF2zjmhvVuouPKsqukHMF%2F8ruo3omIEpDt%2Bt0eERjf4ryeblu1NpxkjnaACGiOJQvWhg7DGP1yi7HQ6VHEp6LEsYS%2F29m0LK%2FUVmL0htCjNuFh%2B0otfTfBIqwk8DXEHQJAkPVeBmHlW%2FN%2Bp7B%2FtbxUiT61Ei7eE%2FoNswkYHCxAY6pgGpKb%2F%2BB4Umh6JzbGpOO%2FoHnjrF28d3j8O2NATrK0GSgph9tLHkhGWo%2F7XNmmsteGXyaZDmyY2DmSf98Z7UFNQCU6OHkipdIXFUGl6p%2BQp2DdnGKJKwPzO7w8efgYgUIvwgSLk%2FlpjxWh%2FBrVeYmi6cZMhOIIj%2FuQjmHwFtDPMTMi2x7MHgX%2Ba99Mmyc76jW0%2B5pvXmgz%2FOWiuX5l3yoycc8zv%2Funor&X-Amz-Signature=9d305acd79d80bb6ad4d148c3700111ca734d368f0a6570e8c2af144fd68b4f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSXL5JX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFH65glpxduqIPjeDi4ViU38VVTYkLFZj0DOFShDxSYGAiATxuxmO4WrBoWP45Htad%2BblB0BsunztuceWCSuwU%2Bi7Sr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMLIIYH2NRbUEsgEwaKtwDwtXbWQgDfWWiW3d%2BGQrsau4hpiljA0m%2FBw%2FlqT0uNXOldg3COb74dQgShXoAH5BQK5KA8NnjhyVNKFjDHmidDgyiwtSr34aaGEsn9uytfEzQQKjXVLp3ehnrOVKP3Zi7op6Qtdyjho0vOfbDBSSbpWyPZx5w1B84JPon%2FbRRQA4ZGwOItsPUaYnU0Dm%2BGjpeSW03bHcjs0kTxBKsEhka7N%2BnYSO9tc1Pm%2F8VSArzyAjKHl0DD9B87JZF2orrYt%2Fe%2FEX47ZCA0lRnQvCas16rzAtjJ73K18DVmZeO%2BdyhoImXX0f6IfrBycbdIoEZ0UidXnQLt7xfkktZoa0BHEZDDWAPF86OOx%2Bp%2B1Bm7F4ftUAWo%2FBd%2F00y11aGsCiyntvE%2F%2FuAc2ac5nQ%2FSnCuJF%2FakgZn9T3nL6HCuY3wKkj1nK%2B9tyzfvBfOpz3P6echOaYjBOClvP280%2BJC9qtVlDMDJtYnYF2zjmhvVuouPKsqukHMF%2F8ruo3omIEpDt%2Bt0eERjf4ryeblu1NpxkjnaACGiOJQvWhg7DGP1yi7HQ6VHEp6LEsYS%2F29m0LK%2FUVmL0htCjNuFh%2B0otfTfBIqwk8DXEHQJAkPVeBmHlW%2FN%2Bp7B%2FtbxUiT61Ei7eE%2FoNswkYHCxAY6pgGpKb%2F%2BB4Umh6JzbGpOO%2FoHnjrF28d3j8O2NATrK0GSgph9tLHkhGWo%2F7XNmmsteGXyaZDmyY2DmSf98Z7UFNQCU6OHkipdIXFUGl6p%2BQp2DdnGKJKwPzO7w8efgYgUIvwgSLk%2FlpjxWh%2FBrVeYmi6cZMhOIIj%2FuQjmHwFtDPMTMi2x7MHgX%2Ba99Mmyc76jW0%2B5pvXmgz%2FOWiuX5l3yoycc8zv%2Funor&X-Amz-Signature=4fd7ba939c10d7627ee024d5f4cb66e0748670b08efdc1a68a591d5874c46f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSXL5JX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFH65glpxduqIPjeDi4ViU38VVTYkLFZj0DOFShDxSYGAiATxuxmO4WrBoWP45Htad%2BblB0BsunztuceWCSuwU%2Bi7Sr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMLIIYH2NRbUEsgEwaKtwDwtXbWQgDfWWiW3d%2BGQrsau4hpiljA0m%2FBw%2FlqT0uNXOldg3COb74dQgShXoAH5BQK5KA8NnjhyVNKFjDHmidDgyiwtSr34aaGEsn9uytfEzQQKjXVLp3ehnrOVKP3Zi7op6Qtdyjho0vOfbDBSSbpWyPZx5w1B84JPon%2FbRRQA4ZGwOItsPUaYnU0Dm%2BGjpeSW03bHcjs0kTxBKsEhka7N%2BnYSO9tc1Pm%2F8VSArzyAjKHl0DD9B87JZF2orrYt%2Fe%2FEX47ZCA0lRnQvCas16rzAtjJ73K18DVmZeO%2BdyhoImXX0f6IfrBycbdIoEZ0UidXnQLt7xfkktZoa0BHEZDDWAPF86OOx%2Bp%2B1Bm7F4ftUAWo%2FBd%2F00y11aGsCiyntvE%2F%2FuAc2ac5nQ%2FSnCuJF%2FakgZn9T3nL6HCuY3wKkj1nK%2B9tyzfvBfOpz3P6echOaYjBOClvP280%2BJC9qtVlDMDJtYnYF2zjmhvVuouPKsqukHMF%2F8ruo3omIEpDt%2Bt0eERjf4ryeblu1NpxkjnaACGiOJQvWhg7DGP1yi7HQ6VHEp6LEsYS%2F29m0LK%2FUVmL0htCjNuFh%2B0otfTfBIqwk8DXEHQJAkPVeBmHlW%2FN%2Bp7B%2FtbxUiT61Ei7eE%2FoNswkYHCxAY6pgGpKb%2F%2BB4Umh6JzbGpOO%2FoHnjrF28d3j8O2NATrK0GSgph9tLHkhGWo%2F7XNmmsteGXyaZDmyY2DmSf98Z7UFNQCU6OHkipdIXFUGl6p%2BQp2DdnGKJKwPzO7w8efgYgUIvwgSLk%2FlpjxWh%2FBrVeYmi6cZMhOIIj%2FuQjmHwFtDPMTMi2x7MHgX%2Ba99Mmyc76jW0%2B5pvXmgz%2FOWiuX5l3yoycc8zv%2Funor&X-Amz-Signature=59fcb791702f44fcaed7fedfe820b9aca5a2d44c87bc3d6944a3a498a854283d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

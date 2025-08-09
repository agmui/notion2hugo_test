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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLBKQXBV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCJEZNWJKGtZAU5Sd1wuZ1fOtejMxPAlvY9d732xmcIwIgL7hLIf8Y%2FI806aCT7ZSPgElu8oyASYf115%2BuKJRiiXwqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHf6AWi2p4WMvLrdHircA6%2BijUNqGxK7KnLxqiS3YXjX1pqebmNvuNgKmkN7FgMc%2BJEebZZiWekg0caMayLOGVUR%2Fpax7YoY2oEBmCEk169N%2B3oKSL%2BxBDIQP7eiKUiYMHQNB7PJu52Kaky%2B8S5QtHya%2FpqV6fbjizWsfqPlTzsZRgre7Ue2vvoAs3vLJFf1lI9vBf8OuVsIYpjjEEsZT4mXD9U%2FGD1MXQSq%2FDHw4hej6ijsk6E1%2B%2BmX18%2B%2Br6MM1h2p3twBwDjNaVj0qPNQUoy0jRAv5xj8SW%2BZBikZLqLU7exhP1CIY2BSFtMMpfQyM5%2FfnGPxxnlgCStdrOBkZ09nlzUAp7Igxo0iRKtoVXzoSeJbfVIRdMhd5Vmo0Fy9cTR%2BCjor%2FNqv%2FUIx9fTaJQtxkmOinWHnUZ6GmcSZ0ms8P%2Bxgoka0CcePE23rDrYyUzs7tnI33FXJOSTO731sqpQRGEUJ%2FbgxeuDfK94WhlrS4cpPXRUAyaIHN6tnceIiUbvwK5JRpl3bUDU98i9f%2FDIxiESpOjFOyQ%2FCkTDAzDyQf9COp8bWSND0R1ie1VD%2BUg4umdAdNk%2BrTFaArAbWXrRh2crKGq0iaTyn2MbIWYNWZwVWYFCf3vLy4P3gGBtmpkQPcqDD%2BpSSR8XlMJKL3sQGOqUB3JW3kioE37dd1jrzr4ANT2DqgaMj%2FAMFLBBYo23pqVVv6xL%2FYIcqTZEHjFRGVjCxQSxvrbYrirDqIXidgv8x%2FSOy3LUrhZQotvCyiqE4l6x5GZSLikr3vOoTuGHm%2BJfFImALP207L5KQax8nvSOdYaFDRUyWAJlbeWpND%2FXTE4GZ0kGO6TgjfGU1GdEo80A4nxBS%2F%2F7YwVhYeASrAL38iCMLp1Bs&X-Amz-Signature=d3ef7de185071937ba249ecda582a9dc7e53a0f55f782ec8fafd3e66d2b15bb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3VXE6CG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG%2FfOEXmi4c8jsQtn9gtlibGmlrHF7%2BQbAP54kcRlq5QIgO2iEH0oqA8Lb4FYmYh8J0QCWMOH9utZDMbqkeUK7PcgqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxHJkYYVw1hsce%2FKircAwTH7VIMblg7%2BZ%2BD77M9vDbMjpyKAcwC2VrCBb1KJncVzi1dgmRuVELyvcanFPbBLo5c%2BerD9vP6UBZLypRKicCfB25dOKWDh1Sf0a1uKQcyATy8OCyLZA6IsxBiiGW5GL%2BYpZ3a13nPNMDoTkMH%2BMkEfTrnrdia0iqiit4BuU1or%2Bw9FhjA4ZsF%2F1sCaInViTALXhX30Y35CmF8Oz37Ib5l%2BZHYMhpKbhFk4RMaybZDj5UnJc%2F9OkwYIP0zO%2FDhLHJVG7ilPuwQ6mgAkrtxfWazGj8cdsfGdFmhnLdjCVSD8iXcz7nzhJI6hXwpg4%2FRrfl1zYXK4Z8g8cVEZipFhBEu6IiE3pNAKny%2BIOBMAlYiJPE8gVRxw9h91cAxfmQKhytmT4U2lZZu3P0jcblNb%2FnnQb8oUT%2BATxpYUwxXxZa%2BsuuGuhbrE5b%2FmeAYDVcynw6RRWS45p6QNwBgg4%2BXJI%2BTQTf181G5N7le3uk%2FtsrWzKFQoLtCfZDMoxu47q2jCaGHvQRdgZ9TogBn0lX2zTdwy6NLZsLJHKhEC5LXraDTg%2Bg9bcjUQy%2Ft%2FKYLEqmkE4f8krXqHeLOMfXt7yzcbEIUW56ckXobK7jxHnIrcWLiY9i0pTUHY2q77c9LMLCE3sQGOqUBkDCdOK4mx2hiRcSUaaYCMxl0gJ1KZF26d0KhyTigBdYSkHXy2w6oovY22YcVbWrhEne%2FABSCyAgE9blqEv%2BPiGKiviJtd6%2BckuPsp3fO1yUvX49sYo5uA7jMOZ5azQutbNbzjsxSsVqDBH8Tw3FuA6%2Bwu5uXFc%2B69wssszKM4984ms3h4ok9CaA9fpBTsSYU1ZFFvk3HEoPHZHEKO%2B4y%2B%2BOBOojD&X-Amz-Signature=5980ca3aff5ff40506252893a09f077274e695e23498127a9777362efe64deae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3VXE6CG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG%2FfOEXmi4c8jsQtn9gtlibGmlrHF7%2BQbAP54kcRlq5QIgO2iEH0oqA8Lb4FYmYh8J0QCWMOH9utZDMbqkeUK7PcgqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxHJkYYVw1hsce%2FKircAwTH7VIMblg7%2BZ%2BD77M9vDbMjpyKAcwC2VrCBb1KJncVzi1dgmRuVELyvcanFPbBLo5c%2BerD9vP6UBZLypRKicCfB25dOKWDh1Sf0a1uKQcyATy8OCyLZA6IsxBiiGW5GL%2BYpZ3a13nPNMDoTkMH%2BMkEfTrnrdia0iqiit4BuU1or%2Bw9FhjA4ZsF%2F1sCaInViTALXhX30Y35CmF8Oz37Ib5l%2BZHYMhpKbhFk4RMaybZDj5UnJc%2F9OkwYIP0zO%2FDhLHJVG7ilPuwQ6mgAkrtxfWazGj8cdsfGdFmhnLdjCVSD8iXcz7nzhJI6hXwpg4%2FRrfl1zYXK4Z8g8cVEZipFhBEu6IiE3pNAKny%2BIOBMAlYiJPE8gVRxw9h91cAxfmQKhytmT4U2lZZu3P0jcblNb%2FnnQb8oUT%2BATxpYUwxXxZa%2BsuuGuhbrE5b%2FmeAYDVcynw6RRWS45p6QNwBgg4%2BXJI%2BTQTf181G5N7le3uk%2FtsrWzKFQoLtCfZDMoxu47q2jCaGHvQRdgZ9TogBn0lX2zTdwy6NLZsLJHKhEC5LXraDTg%2Bg9bcjUQy%2Ft%2FKYLEqmkE4f8krXqHeLOMfXt7yzcbEIUW56ckXobK7jxHnIrcWLiY9i0pTUHY2q77c9LMLCE3sQGOqUBkDCdOK4mx2hiRcSUaaYCMxl0gJ1KZF26d0KhyTigBdYSkHXy2w6oovY22YcVbWrhEne%2FABSCyAgE9blqEv%2BPiGKiviJtd6%2BckuPsp3fO1yUvX49sYo5uA7jMOZ5azQutbNbzjsxSsVqDBH8Tw3FuA6%2Bwu5uXFc%2B69wssszKM4984ms3h4ok9CaA9fpBTsSYU1ZFFvk3HEoPHZHEKO%2B4y%2B%2BOBOojD&X-Amz-Signature=1bc5d7d14dd4b8668faae7909347decccac5c3fbee21bb8e76fd49488c0087ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3VXE6CG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG%2FfOEXmi4c8jsQtn9gtlibGmlrHF7%2BQbAP54kcRlq5QIgO2iEH0oqA8Lb4FYmYh8J0QCWMOH9utZDMbqkeUK7PcgqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxHJkYYVw1hsce%2FKircAwTH7VIMblg7%2BZ%2BD77M9vDbMjpyKAcwC2VrCBb1KJncVzi1dgmRuVELyvcanFPbBLo5c%2BerD9vP6UBZLypRKicCfB25dOKWDh1Sf0a1uKQcyATy8OCyLZA6IsxBiiGW5GL%2BYpZ3a13nPNMDoTkMH%2BMkEfTrnrdia0iqiit4BuU1or%2Bw9FhjA4ZsF%2F1sCaInViTALXhX30Y35CmF8Oz37Ib5l%2BZHYMhpKbhFk4RMaybZDj5UnJc%2F9OkwYIP0zO%2FDhLHJVG7ilPuwQ6mgAkrtxfWazGj8cdsfGdFmhnLdjCVSD8iXcz7nzhJI6hXwpg4%2FRrfl1zYXK4Z8g8cVEZipFhBEu6IiE3pNAKny%2BIOBMAlYiJPE8gVRxw9h91cAxfmQKhytmT4U2lZZu3P0jcblNb%2FnnQb8oUT%2BATxpYUwxXxZa%2BsuuGuhbrE5b%2FmeAYDVcynw6RRWS45p6QNwBgg4%2BXJI%2BTQTf181G5N7le3uk%2FtsrWzKFQoLtCfZDMoxu47q2jCaGHvQRdgZ9TogBn0lX2zTdwy6NLZsLJHKhEC5LXraDTg%2Bg9bcjUQy%2Ft%2FKYLEqmkE4f8krXqHeLOMfXt7yzcbEIUW56ckXobK7jxHnIrcWLiY9i0pTUHY2q77c9LMLCE3sQGOqUBkDCdOK4mx2hiRcSUaaYCMxl0gJ1KZF26d0KhyTigBdYSkHXy2w6oovY22YcVbWrhEne%2FABSCyAgE9blqEv%2BPiGKiviJtd6%2BckuPsp3fO1yUvX49sYo5uA7jMOZ5azQutbNbzjsxSsVqDBH8Tw3FuA6%2Bwu5uXFc%2B69wssszKM4984ms3h4ok9CaA9fpBTsSYU1ZFFvk3HEoPHZHEKO%2B4y%2B%2BOBOojD&X-Amz-Signature=aa222b2d732d197f56f5a00acb45a29f21d2368db17449c77f2a85dda7ab8d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBLOBAKN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCnvFYIrFMMJqKvJmqoM1tP6v6fp4q0ByVqLy5dZZqSvgIgGJlRdW1Te89IK0wwV0T%2BqOJnZ8e82ghJLtt6fdVdY%2B0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBWvh6LuB0lsP3ReHSrcA3kIAp6ld5eOEZZgcUJjKP%2BKFjGZORmC5DtGQrmVk1L%2Blbmy%2FGU8KVXuiOA13ML4P8tBgoES9oh9TIL2AdYpJ9cZtyPc84DAeT1GeoLbNR0RtBM9NBiRynxk2SFhn6eNhX1AIx2x%2BCDn7OPajIYepgTQ%2FDIKhzFaUxeoonbY%2FfocinU38SjSfQDUpT0KNWYf4utrimw8j5eNiGumFbu%2BftJzEr0vrEVgJ4q%2BhCDeNACQrAmMe5NDGJL9oSOOeB8fijdIATaBcNfgfgDRVLXwYOJydi2fp5NZLh%2BSEsYZLkY7qTUTAbrAVMfXMGVmsnemdkvNnsF4DYG43Bkdf%2BYG5c83o%2BKS9N1EN2ChwIoRBDTbzj%2Bn%2B0%2BLbOx4vjF28WqJcyZewS9r1pcTW0WAKMXdmZhqr0iERhmqWciyDAOldXV8jgU2T3ijc1Uo2RQw7Qr4Jpu%2B1BDwxyLEvvhATYHe21ik1AHbmNQues2d7%2BrZn7G5CvHS%2BkUF7D%2BRRVghD22V9pIf46GzpPKEDyJmwfvMZHisRxAa8ettCtJAfycNKBACYvwhDLGR0hdxiH9OydytngLlE%2B33pbpX020n6Sy%2B5mB8W5TVKwao1GtzimxxyC%2BjhfDePG2PbHIuMeBdMIbMyMQGOqUB03B%2BjNI8xw9ssPWQ1NfZL40qsfHSvKEpAZSkzU9WXaAurVs6scJdFjqVi8FjESdnPnMoAMdBpjg2RIA0Yw3tp1mZBODJsb%2BYuTAqbq5lcYOG%2F%2B4WrtXdXV9RB%2BOZYYP%2BNQbkjLNRq%2BNkk8XAn3o%2B6ujT%2BOZCwbhskPcojQ8IJHdqGd4nvD1C4OS7EJxEDLlGfSqtCiElqXiZz7y1YKrSvTpmpLiC&X-Amz-Signature=f2da0587e586f8a5dde21bcc1ecae3b1c99afe517cfecf52aee34aff4e57ce7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2Z4TU7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDD0Dpu8O8wq3jm8GlgUxzBUVREfGLE3SRvit%2BeOyRWNgIgR6tsecxQljqus0YC%2Bce%2Biq%2BOFPrlMGaakCNyYzJyC2Aq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPh%2FktOK%2BznFiEZRiCrcAyHIPqLk36QXKeFW6V2%2BwjaGlEU%2BmIZCarvYA6l13gpUZHPqVJ0KJEQh6Dkz1885o33cD5qX06FpPi30kVBHJbv53MlG4MmVAaRq5EBSFokpyRxediBJ7e3zvDnUu4MR8VdTFZBs6XNKXv7liTZnMJ0IapzjLNTQRyu0D7cCLXWahj7QsI77XMEvRFnE1%2B5k3f0oBMeZySb7CONcwHxMv5mdJ0On%2BJBFixJXniamn4XvjAR7SeVD%2FR7igOpPwbbXz6x90Neq1cWrDMBtv0vbrAky%2FWy7N2%2F8MkfWrk0m89NrW00XcstVY0%2BN9LgSbn%2FKexcVQPM0qWozOiSSOBK3y8RWO73ToDe2zcPhqVPEOQyx%2BepWLcsVX4ERmwoy8gw2%2Byy%2BJNMDv%2BYjW7ka0oR7ZpLqCAy2ZtnDkY8zdD0k38WGOpGi4bnOv2B4ZZiw1JQWp3UcGyDuo2i2Hw1GZBdB2Fua1lj38HqcdXF9%2FY%2FXfnbz6cYKQW41ItUAqXU%2B6Y6Q3dv1xsEvlCQbwsUjwnB39oO1mlPAQw4Xw2N%2F3XlufQ7gPPUPRVq%2FtZAhqCM4e6XfH%2BJ4a7A%2B9xDPW5wi6t9P5SAh%2BchljPiYmV1pCzNehIMN9A0qbFfm2fXVewBJMLXMyMQGOqUBswtYRJIPK268jAag4Yztrb7v7MsTp1yQEK6cnQ1UuWQUCAU256yK9jLDvQtUHrGrDqU5EmRYe2RP75oNrdeZ%2BlaTUyZFTwGfgaXqYOsZQb5cp3EsZZs9PI9442eDSZKUwxovpR%2FVxL0Vi7K8JPZ%2BPBYoD%2Fq9c7fMKStBp%2BzXRmDj1JQLmuVNxaDAyCxvqidgb7P0U0gzhebHY1gBafiqWUb76D80&X-Amz-Signature=a544ce9626ec9194133f6e5eb84320bd9246b2d74dfb17dc2921fb3857c840af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2Z4TU7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDD0Dpu8O8wq3jm8GlgUxzBUVREfGLE3SRvit%2BeOyRWNgIgR6tsecxQljqus0YC%2Bce%2Biq%2BOFPrlMGaakCNyYzJyC2Aq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPh%2FktOK%2BznFiEZRiCrcAyHIPqLk36QXKeFW6V2%2BwjaGlEU%2BmIZCarvYA6l13gpUZHPqVJ0KJEQh6Dkz1885o33cD5qX06FpPi30kVBHJbv53MlG4MmVAaRq5EBSFokpyRxediBJ7e3zvDnUu4MR8VdTFZBs6XNKXv7liTZnMJ0IapzjLNTQRyu0D7cCLXWahj7QsI77XMEvRFnE1%2B5k3f0oBMeZySb7CONcwHxMv5mdJ0On%2BJBFixJXniamn4XvjAR7SeVD%2FR7igOpPwbbXz6x90Neq1cWrDMBtv0vbrAky%2FWy7N2%2F8MkfWrk0m89NrW00XcstVY0%2BN9LgSbn%2FKexcVQPM0qWozOiSSOBK3y8RWO73ToDe2zcPhqVPEOQyx%2BepWLcsVX4ERmwoy8gw2%2Byy%2BJNMDv%2BYjW7ka0oR7ZpLqCAy2ZtnDkY8zdD0k38WGOpGi4bnOv2B4ZZiw1JQWp3UcGyDuo2i2Hw1GZBdB2Fua1lj38HqcdXF9%2FY%2FXfnbz6cYKQW41ItUAqXU%2B6Y6Q3dv1xsEvlCQbwsUjwnB39oO1mlPAQw4Xw2N%2F3XlufQ7gPPUPRVq%2FtZAhqCM4e6XfH%2BJ4a7A%2B9xDPW5wi6t9P5SAh%2BchljPiYmV1pCzNehIMN9A0qbFfm2fXVewBJMLXMyMQGOqUBswtYRJIPK268jAag4Yztrb7v7MsTp1yQEK6cnQ1UuWQUCAU256yK9jLDvQtUHrGrDqU5EmRYe2RP75oNrdeZ%2BlaTUyZFTwGfgaXqYOsZQb5cp3EsZZs9PI9442eDSZKUwxovpR%2FVxL0Vi7K8JPZ%2BPBYoD%2Fq9c7fMKStBp%2BzXRmDj1JQLmuVNxaDAyCxvqidgb7P0U0gzhebHY1gBafiqWUb76D80&X-Amz-Signature=bb7cb050e7dd2a901fbc2f64f41f2d7446c94aed2cf39d897d9471ef423f82ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2Z4TU7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDD0Dpu8O8wq3jm8GlgUxzBUVREfGLE3SRvit%2BeOyRWNgIgR6tsecxQljqus0YC%2Bce%2Biq%2BOFPrlMGaakCNyYzJyC2Aq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPh%2FktOK%2BznFiEZRiCrcAyHIPqLk36QXKeFW6V2%2BwjaGlEU%2BmIZCarvYA6l13gpUZHPqVJ0KJEQh6Dkz1885o33cD5qX06FpPi30kVBHJbv53MlG4MmVAaRq5EBSFokpyRxediBJ7e3zvDnUu4MR8VdTFZBs6XNKXv7liTZnMJ0IapzjLNTQRyu0D7cCLXWahj7QsI77XMEvRFnE1%2B5k3f0oBMeZySb7CONcwHxMv5mdJ0On%2BJBFixJXniamn4XvjAR7SeVD%2FR7igOpPwbbXz6x90Neq1cWrDMBtv0vbrAky%2FWy7N2%2F8MkfWrk0m89NrW00XcstVY0%2BN9LgSbn%2FKexcVQPM0qWozOiSSOBK3y8RWO73ToDe2zcPhqVPEOQyx%2BepWLcsVX4ERmwoy8gw2%2Byy%2BJNMDv%2BYjW7ka0oR7ZpLqCAy2ZtnDkY8zdD0k38WGOpGi4bnOv2B4ZZiw1JQWp3UcGyDuo2i2Hw1GZBdB2Fua1lj38HqcdXF9%2FY%2FXfnbz6cYKQW41ItUAqXU%2B6Y6Q3dv1xsEvlCQbwsUjwnB39oO1mlPAQw4Xw2N%2F3XlufQ7gPPUPRVq%2FtZAhqCM4e6XfH%2BJ4a7A%2B9xDPW5wi6t9P5SAh%2BchljPiYmV1pCzNehIMN9A0qbFfm2fXVewBJMLXMyMQGOqUBswtYRJIPK268jAag4Yztrb7v7MsTp1yQEK6cnQ1UuWQUCAU256yK9jLDvQtUHrGrDqU5EmRYe2RP75oNrdeZ%2BlaTUyZFTwGfgaXqYOsZQb5cp3EsZZs9PI9442eDSZKUwxovpR%2FVxL0Vi7K8JPZ%2BPBYoD%2Fq9c7fMKStBp%2BzXRmDj1JQLmuVNxaDAyCxvqidgb7P0U0gzhebHY1gBafiqWUb76D80&X-Amz-Signature=f228125ad6068b930ddfd90d9fbdf3326b5798df0d0b25d577f7f234b2d35fa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

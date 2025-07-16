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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623NCHJIL%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDqm7uxvvtvqyYtjwcwAbMHQ0nRI6Q3fq9eUYYRJ53dCwIhAMQlokn6mMUGi6aB%2BSvmWjfU4u7FVIvVbNGQLfqOMzHgKv8DCFwQABoMNjM3NDIzMTgzODA1Igy3ZfKqn9nsa9vk2W4q3ANINtjv5Y3bxPSzwTzaWv8T9DIdzfH7ZtXoVC9lwzZlnAVwVZb6QJUtxDrm4ZdeSrPzLc7L1O5wTWBr%2B0DQih9n6Gmsr3tBoD2kvbCxIes4V%2B4TFK%2FjN%2BS880XCjZb0xqTscs0oCcW7%2Frm5vDaI2EnFO6H8RgRc38ai7TVO8kDtqU3necQlt0LiFbEiZQSSsb7PLlliF554jUGHjzzr9uXm2u%2BvXOHLhL7B4kF2LRrOtaihZL5fB9KmzORWGEZImW1NfvICInyj9CRpXEzUnxXwHViS%2FVAJxd3iXuz9GwvhRi%2FS%2BLldFfefx79SsGYYt6H8GtZdNCDPv4qKACMSdjXgAiqqjrZ0B7b6jalFyLdf6d15QoCVOuPIoRliYdcYa5WU%2F8xyK3vVtyS1B0dUUIIWEQNmVji2TZUvOUWiWp%2FNfVrvBm4Fh4tJJmCmS0Okb8WASs6WxbfQ549yTGgHXkqQL257a%2BOAeHsIY1DQHgelb84KahU9LtpAReVviZr872leeRx6vuCCPHFwZYxiMlZ5e4rv%2FXvzi0vsGji8i7rsMf3Ji20efb58JV64bvW6nEj9f1PtRtRvFRs0LFyjhE21mNu2mtXbAvJ0F93l2hmcTCSWDFzBG7HlhWHNqjCOk97DBjqkATsl16F5qW2clINMv%2BBX%2BDAM%2F%2BN65fYRkOGFzeTqXybvNtU16N7McKuIyi6cGWywAlRhsj9W3ca3DRGikKC0xY7mFwZdFaKO7tgEOsfPpntf%2FbC484eDZmRmwGIilEU%2B35OcsBTajgsqMX70PHPEpIhqhEiIb46ULVvO6GUP6rSJt98ScyWSuvE0ydYCQW4MKE0qwtJkFpjeSpJFzJsb3TNAR%2FaD&X-Amz-Signature=bb6aba827fb1fa3d9bd7e45dba5d15ee303048a6a13efaa03161384119dae723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDQATCJJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDlHtKHNKqiWW8m25xtudGkhl%2BC5%2B8vxUYsuMwcGsLDEgIhALGknRn3AhGvL9qp6i9gw0lU8TgMsEFYu0YF2S6RSvktKv8DCFwQABoMNjM3NDIzMTgzODA1IgwIzaEe4F01tKcmu2Eq3ANNNBbqyFF4K7QAEGXeBlLnjSHGxcOuyM2O0KwJMTfC4fcpp2ttj9GqbDfgrxNZmW7mXKouPSLvW423Pj%2FXEOkSVbUjIjhCVWZ4A%2B%2BGURIr2TtBelYbNAHUG6zqHWg%2FeaRKP1PckUG7wDABFABMHj1%2FfJ8V7IosziSa04%2B12aTUbnt5a7iJHF0rTj3dcddAf9BymQ44hMnMbbnKgPknY%2FF8BJWAis%2BfgDnNmUvHjlOCkAhQrenNBRAqjTH0JpY8%2BFgMAcS4lt6UOzt%2BXhbKwV1zt1ZFP0WoRZugt1A4CLzjn9KwhzBh1djIRKuwFUVIV4OztTeAeT7u7%2BWgnmkTb81Ejd5eLD7tcYqPHbJ0m6IW6HUz0SFSJg7OtESpxPmLjst2Di6jBojkPOzQg3rbKhLTPtIwgI3v2RXHNRs3DYhoiPda3niTAsO%2BofN1PmcdkAXb4O8F%2Fa9jNr2ctTOoRVnTRPAaBdj3FaEsGnHxfHQznWbYrnmpJ9eiB1a3tBQVmgZ8QLFg9ZP%2FCiN4y5FHkQmERjgyUpxTof0ptL3G%2FmRciEP8ud0euupWOBn8zdmW9r6TkKdDKitVy%2FEDZJ9EGqxwht6LlbJjy88Kr0XJ0VhI4hgWpM1VGpWKu7ndmjDYk97DBjqkAfO96ow5cu%2BIQ0yOEdhjYREqt5nvYtJJqWuPWpTvh1qDXcSJjGy%2FE1W%2FlrRj5Fb7yDtiObzDWhEkf%2FGzkB%2Bkzzdv73fXpeHB1A1Q21Ni%2FPmviOIreUHULcGzR2dEj7xUSm5yGde8NjeFXzwfG9hEt7nvl9g72TGTnHM4aP3BmSV0dtyRxkh6jCq86BFWSTE94hQXyv89R3X%2BWb0y665mfGU70Zlx&X-Amz-Signature=93d219dc244bdd672375c119e6defefcd45e8ef9c2018f27abc957bf186a3a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDQATCJJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDlHtKHNKqiWW8m25xtudGkhl%2BC5%2B8vxUYsuMwcGsLDEgIhALGknRn3AhGvL9qp6i9gw0lU8TgMsEFYu0YF2S6RSvktKv8DCFwQABoMNjM3NDIzMTgzODA1IgwIzaEe4F01tKcmu2Eq3ANNNBbqyFF4K7QAEGXeBlLnjSHGxcOuyM2O0KwJMTfC4fcpp2ttj9GqbDfgrxNZmW7mXKouPSLvW423Pj%2FXEOkSVbUjIjhCVWZ4A%2B%2BGURIr2TtBelYbNAHUG6zqHWg%2FeaRKP1PckUG7wDABFABMHj1%2FfJ8V7IosziSa04%2B12aTUbnt5a7iJHF0rTj3dcddAf9BymQ44hMnMbbnKgPknY%2FF8BJWAis%2BfgDnNmUvHjlOCkAhQrenNBRAqjTH0JpY8%2BFgMAcS4lt6UOzt%2BXhbKwV1zt1ZFP0WoRZugt1A4CLzjn9KwhzBh1djIRKuwFUVIV4OztTeAeT7u7%2BWgnmkTb81Ejd5eLD7tcYqPHbJ0m6IW6HUz0SFSJg7OtESpxPmLjst2Di6jBojkPOzQg3rbKhLTPtIwgI3v2RXHNRs3DYhoiPda3niTAsO%2BofN1PmcdkAXb4O8F%2Fa9jNr2ctTOoRVnTRPAaBdj3FaEsGnHxfHQznWbYrnmpJ9eiB1a3tBQVmgZ8QLFg9ZP%2FCiN4y5FHkQmERjgyUpxTof0ptL3G%2FmRciEP8ud0euupWOBn8zdmW9r6TkKdDKitVy%2FEDZJ9EGqxwht6LlbJjy88Kr0XJ0VhI4hgWpM1VGpWKu7ndmjDYk97DBjqkAfO96ow5cu%2BIQ0yOEdhjYREqt5nvYtJJqWuPWpTvh1qDXcSJjGy%2FE1W%2FlrRj5Fb7yDtiObzDWhEkf%2FGzkB%2Bkzzdv73fXpeHB1A1Q21Ni%2FPmviOIreUHULcGzR2dEj7xUSm5yGde8NjeFXzwfG9hEt7nvl9g72TGTnHM4aP3BmSV0dtyRxkh6jCq86BFWSTE94hQXyv89R3X%2BWb0y665mfGU70Zlx&X-Amz-Signature=b6e19cd1e6d486a95f64d49bbfc8a824b4635cfac612452b3e4ae35c731fabbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDQATCJJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDlHtKHNKqiWW8m25xtudGkhl%2BC5%2B8vxUYsuMwcGsLDEgIhALGknRn3AhGvL9qp6i9gw0lU8TgMsEFYu0YF2S6RSvktKv8DCFwQABoMNjM3NDIzMTgzODA1IgwIzaEe4F01tKcmu2Eq3ANNNBbqyFF4K7QAEGXeBlLnjSHGxcOuyM2O0KwJMTfC4fcpp2ttj9GqbDfgrxNZmW7mXKouPSLvW423Pj%2FXEOkSVbUjIjhCVWZ4A%2B%2BGURIr2TtBelYbNAHUG6zqHWg%2FeaRKP1PckUG7wDABFABMHj1%2FfJ8V7IosziSa04%2B12aTUbnt5a7iJHF0rTj3dcddAf9BymQ44hMnMbbnKgPknY%2FF8BJWAis%2BfgDnNmUvHjlOCkAhQrenNBRAqjTH0JpY8%2BFgMAcS4lt6UOzt%2BXhbKwV1zt1ZFP0WoRZugt1A4CLzjn9KwhzBh1djIRKuwFUVIV4OztTeAeT7u7%2BWgnmkTb81Ejd5eLD7tcYqPHbJ0m6IW6HUz0SFSJg7OtESpxPmLjst2Di6jBojkPOzQg3rbKhLTPtIwgI3v2RXHNRs3DYhoiPda3niTAsO%2BofN1PmcdkAXb4O8F%2Fa9jNr2ctTOoRVnTRPAaBdj3FaEsGnHxfHQznWbYrnmpJ9eiB1a3tBQVmgZ8QLFg9ZP%2FCiN4y5FHkQmERjgyUpxTof0ptL3G%2FmRciEP8ud0euupWOBn8zdmW9r6TkKdDKitVy%2FEDZJ9EGqxwht6LlbJjy88Kr0XJ0VhI4hgWpM1VGpWKu7ndmjDYk97DBjqkAfO96ow5cu%2BIQ0yOEdhjYREqt5nvYtJJqWuPWpTvh1qDXcSJjGy%2FE1W%2FlrRj5Fb7yDtiObzDWhEkf%2FGzkB%2Bkzzdv73fXpeHB1A1Q21Ni%2FPmviOIreUHULcGzR2dEj7xUSm5yGde8NjeFXzwfG9hEt7nvl9g72TGTnHM4aP3BmSV0dtyRxkh6jCq86BFWSTE94hQXyv89R3X%2BWb0y665mfGU70Zlx&X-Amz-Signature=83fb4de3217e3e6f4177d65af514db1ed98bec08ced7f3da29d0d953e66d23bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

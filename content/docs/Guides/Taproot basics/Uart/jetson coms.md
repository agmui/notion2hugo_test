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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYCWLVW2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEirEytMvhXJxKQUIVKQf7ZcyLXQQH%2B0HR8SkYvIpVBdAiBQTujTBezca627mf3srgR0FgRP7I4QcEtn2imwnGWh6CqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb%2FogwQoJE74gffzbKtwDaNdPNkIrWpA4hRek5G8Bm0PTuAtgoUqrFf2%2BUTvnv7Pt4WkgKn0yRkKLmJRgHQbgvRILIAgEohEPoulnQA5DGwn5dvLZWgUBbaL5xIdPwddE7bxQdu1vkaTl8EaM%2B6OTi4oq3iFdS%2FeUqP6FOf4ONH%2F97Mi87W2%2FImklg7v4KmvSC0oqwxekLQUrhYz1b7JftVQlxEeidD%2B7kW6MEFD4BR5YNA9g%2BTXQEhIgLzGaB7EC6ChZGMdGbvDQrGlQs7RJu4wTIcBiKfGSQX97L8X67e%2F3%2ByjRSepCZXwlolOdGLhL9FVphogG1WBAxPoPouZ1A8tJzcbM5TBUPmHUS9yoJw7kaWlx1ReFeEfIcDXkYAiA89nl5TjTP6SM1dl0%2FAEGgEJLhS%2B6cd8iTaJTKe97GukXJZQ%2FhGGRLGZBBpvij2JmY6NDYDwJVDA7ximop1abrAYbnqufrogZiYstRizkMqtApNE%2B%2FppoExjEuf7knjhb5nsadahmuCI6YJhL30qSQapIruhHftHQzfstlFA1pdxKt7wQscooA6DqNEauVqgH%2Fake5p4kbXPijqmDH8lM2vUOFOTnUhqd8WhzRVP3XV9DVb67h9t3S80foIB62WlomuoJj71b09JWC78w8MqrxAY6pgGy%2BrnpJcVkmj6Wg%2BqBYtnPFGZy0OouKnTFLazT7KKf8xDQp15kBtxkGdi875jk%2Fudhpmp4knlHdG0hgB3y2yUoIEswH2y1G%2BHi7EQ%2FryCIVPr2UT111qyXhBot%2B%2FaE%2FAgD0bj%2BhK58zAETp13IRnKk5TY18AjA6PvcK5g5oaMEOhNpHT91FPjAKwGAYD7fQYPc0BIIkLrl5W4vuy8kWZJtMj9iBJT0&X-Amz-Signature=33d4c8c795b3c68582a3e9c425527e0acaa87ee6e592f0a1378e1eb7ef806e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZSJTZFX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFly4Zz%2FBeGuKUOqmcM3sjviO%2BjKXaStfE3SVG2%2F%2FDXOAiBKmvGIehPvwZU59%2FidXOHLj9SJ%2FmfEXw2CXM5oE%2FtOKCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO39%2FBrNr3PpVa6J1KtwDAakczs1OvUmDnTMMyi002eI22cozLTOYgFkPp3ZJHNSv1kNYIJ9jDuDmowtxoX02haEfyzYRzxBTO%2BfGi0fnvEDpdfXc1XObzxod4Y4xKTajclF2zNV%2Bli%2FpSEQpuZoLszWAsN5KC5z9SSrCyCW9UqOmV8020%2B5X%2FLL%2Fo9OJ8BIyS9lHcMIYRfTF1eXPhSqB%2F5YZmaAOqEti7CZK1k%2BeFoWc5NGCB5rDLfe74hrN14SlBUvy22xrANjxeBLi4XHpUPvTQZmcEINPJchAbFfq3UK7bLodbm1Fb3mR6KAbCHqmhMqVcDabyKRSIY2laffkXHf3S8iYdULgdnuS9%2FaMnpF%2FMar5nGNIdHQDZ7S%2BmF13FULQeD755zkX5W941JBHR%2B3BG6LBYSKtfZyY6FjXK4iT4Rr0e%2BeVjK2qVEvxLomAq9sk0g97XxOtD5w94J9OE%2F%2FZHS2rWBz%2Bh84KDNTdAWAeBIvzJ7A%2B7RgXOafbotpxOgEAzIJK1aaZecobRqxznWRZQgutjr5x4vhvfPzmku%2Bn5GhfJ8pqdZOWkMQm7nKlFkKUIFNS4zwThhkYYev1IbiTmJhPBCdPC7momy%2Bx7ILUj3Sui5%2BhuKOij75b%2F2ls4l0Yol2Hp1uZu8cw38urxAY6pgGdrw0FFY1F1PKV%2FG40vGHYw0OVLNYOrXTjxjn%2FBpyPLc966KyKsrRl88aa%2F677XEbBed%2FL0qvjLSkSwAqsPKZZKmmmFuITCbb8QwzLt72W1yCyrbDdLioXbMzPAiTc8osBegth0QSFBE%2BtKwdggIGUL7TUHrktcg3BBhTNVvBGbB1md1AJ1BcetttGIUm46mGWOx8G%2BR%2BldTpXB8Rr%2FpW869dys6ys&X-Amz-Signature=0d63fb2fd633d3ef311f8024808642a9b573f57e2f2fe19ef8302572cc4c7f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZSJTZFX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFly4Zz%2FBeGuKUOqmcM3sjviO%2BjKXaStfE3SVG2%2F%2FDXOAiBKmvGIehPvwZU59%2FidXOHLj9SJ%2FmfEXw2CXM5oE%2FtOKCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO39%2FBrNr3PpVa6J1KtwDAakczs1OvUmDnTMMyi002eI22cozLTOYgFkPp3ZJHNSv1kNYIJ9jDuDmowtxoX02haEfyzYRzxBTO%2BfGi0fnvEDpdfXc1XObzxod4Y4xKTajclF2zNV%2Bli%2FpSEQpuZoLszWAsN5KC5z9SSrCyCW9UqOmV8020%2B5X%2FLL%2Fo9OJ8BIyS9lHcMIYRfTF1eXPhSqB%2F5YZmaAOqEti7CZK1k%2BeFoWc5NGCB5rDLfe74hrN14SlBUvy22xrANjxeBLi4XHpUPvTQZmcEINPJchAbFfq3UK7bLodbm1Fb3mR6KAbCHqmhMqVcDabyKRSIY2laffkXHf3S8iYdULgdnuS9%2FaMnpF%2FMar5nGNIdHQDZ7S%2BmF13FULQeD755zkX5W941JBHR%2B3BG6LBYSKtfZyY6FjXK4iT4Rr0e%2BeVjK2qVEvxLomAq9sk0g97XxOtD5w94J9OE%2F%2FZHS2rWBz%2Bh84KDNTdAWAeBIvzJ7A%2B7RgXOafbotpxOgEAzIJK1aaZecobRqxznWRZQgutjr5x4vhvfPzmku%2Bn5GhfJ8pqdZOWkMQm7nKlFkKUIFNS4zwThhkYYev1IbiTmJhPBCdPC7momy%2Bx7ILUj3Sui5%2BhuKOij75b%2F2ls4l0Yol2Hp1uZu8cw38urxAY6pgGdrw0FFY1F1PKV%2FG40vGHYw0OVLNYOrXTjxjn%2FBpyPLc966KyKsrRl88aa%2F677XEbBed%2FL0qvjLSkSwAqsPKZZKmmmFuITCbb8QwzLt72W1yCyrbDdLioXbMzPAiTc8osBegth0QSFBE%2BtKwdggIGUL7TUHrktcg3BBhTNVvBGbB1md1AJ1BcetttGIUm46mGWOx8G%2BR%2BldTpXB8Rr%2FpW869dys6ys&X-Amz-Signature=687c6be879736cfb52a11391d2b1a1a6ede661dd641ddc77d2db677a1b0073c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZSJTZFX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFly4Zz%2FBeGuKUOqmcM3sjviO%2BjKXaStfE3SVG2%2F%2FDXOAiBKmvGIehPvwZU59%2FidXOHLj9SJ%2FmfEXw2CXM5oE%2FtOKCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO39%2FBrNr3PpVa6J1KtwDAakczs1OvUmDnTMMyi002eI22cozLTOYgFkPp3ZJHNSv1kNYIJ9jDuDmowtxoX02haEfyzYRzxBTO%2BfGi0fnvEDpdfXc1XObzxod4Y4xKTajclF2zNV%2Bli%2FpSEQpuZoLszWAsN5KC5z9SSrCyCW9UqOmV8020%2B5X%2FLL%2Fo9OJ8BIyS9lHcMIYRfTF1eXPhSqB%2F5YZmaAOqEti7CZK1k%2BeFoWc5NGCB5rDLfe74hrN14SlBUvy22xrANjxeBLi4XHpUPvTQZmcEINPJchAbFfq3UK7bLodbm1Fb3mR6KAbCHqmhMqVcDabyKRSIY2laffkXHf3S8iYdULgdnuS9%2FaMnpF%2FMar5nGNIdHQDZ7S%2BmF13FULQeD755zkX5W941JBHR%2B3BG6LBYSKtfZyY6FjXK4iT4Rr0e%2BeVjK2qVEvxLomAq9sk0g97XxOtD5w94J9OE%2F%2FZHS2rWBz%2Bh84KDNTdAWAeBIvzJ7A%2B7RgXOafbotpxOgEAzIJK1aaZecobRqxznWRZQgutjr5x4vhvfPzmku%2Bn5GhfJ8pqdZOWkMQm7nKlFkKUIFNS4zwThhkYYev1IbiTmJhPBCdPC7momy%2Bx7ILUj3Sui5%2BhuKOij75b%2F2ls4l0Yol2Hp1uZu8cw38urxAY6pgGdrw0FFY1F1PKV%2FG40vGHYw0OVLNYOrXTjxjn%2FBpyPLc966KyKsrRl88aa%2F677XEbBed%2FL0qvjLSkSwAqsPKZZKmmmFuITCbb8QwzLt72W1yCyrbDdLioXbMzPAiTc8osBegth0QSFBE%2BtKwdggIGUL7TUHrktcg3BBhTNVvBGbB1md1AJ1BcetttGIUm46mGWOx8G%2BR%2BldTpXB8Rr%2FpW869dys6ys&X-Amz-Signature=007e6cc981c2b13b66e1088cde836d697d8f9125df32ac3b277f21d0467cdeee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

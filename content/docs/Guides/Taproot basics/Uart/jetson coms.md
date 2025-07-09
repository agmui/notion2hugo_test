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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BAV5SOZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2qfZ0Psul%2FXJXe08THVfV6a66%2FEdPKSXJhZKo5%2BeKZAiBxtmh%2BOdayY%2BaflkLCxhg7cQUvMYlp%2FRRNf%2BJvY9nkhSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5VLEiAWNXw%2FQimkCKtwDFBz2J8zdD8h0Op2CbfCmvddKR%2BFnc2857DJR%2Feb36Ud8DZPpfOScAqsrfLXh6cKeG2TrD9ulGR6Wk2e6ccnXGI7%2BW3Rl09cag96ygPNuU1EcLvRKibJc8tuXM%2BYA0dIRW1Zc3J3G0H4uD02sDxfxW8OMmhd5fdZ8x5spqcYlFkbvz2Cht4I7YZAg07YN%2BtgMXGZ9LD7ZB%2BW7riHSQeIN7s3mPhzpJVu63dIAl4imtNtr%2BaocOKleBbz%2B4Cizi7V2WouqFwvxNoXQp77dyY4gcFLtkSSvECv9%2BFSx8k3G9ssCNtD%2FXg%2FEZccck7LlPhqEGL6Tw4Qg5CFqsSGVodXbdAdV%2FVS4qOreVMiUKqbrJASOF5NEdErINfDL2bdER3pHhMV28ngVt8lwD6sy9bzEs2ZW7OAyNO0JnUORYHTQBOWpwmOvsndgtBlA%2Fwd5rC04Y3telZSLz8rgCED8xfUKJ8MhdBjcAiGSOjJ2orZOnZdaxfqOPi220c2XyLrQxwRqOnSd7dEMeiYBYapvbDdBQ4bdTv7rJAbNyfrsxFGPDWGOHw6%2Bdvb0kyI%2BDeYUitd0TG51ZiahW94hBwT6RSbzkyCInG%2FKWQ0cuPiNMHkX2Bll66RCOeLJ%2BIG3OGYwqKS4wwY6pgF1EcQdSw5e3dzfx3j9ogUW6CqgC6BMzes1HiV%2BWoKpH44j%2Bjgn5sq%2Bnooirf9U1w2tH%2FEuk5u3nePQQgfV7EjM6bwdjw6JF8m0BvYYqQbFGHgf2l5CX6w6zvmp9wMlePjLYPa%2BrZQwbh8Cv9obCmmu4JtPLVlUArcRqZC5RckGDLTxlm%2F%2B%2FlFkVDUWcUf2Uw4%2Fj7kNnUoBxzWktQVib2yPXC7QN80t&X-Amz-Signature=332a511e2864049b7fd288ca16f0f1fc025a33c01b6140f2673804781a325eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDIQPNHX%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3EZIcAwzl7Yt7ssB1TcT%2Bd3ExpXAKCAzrahHSUTU2mAiEA9GeTjUofvDKimMhHchZ92Gr4PTGpsxkKTOzgLXs5VskqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi8%2BSty1u4PN%2B0RMSrcA62tsX0OVpJNAuYU77BCHpr3dg3%2BokJaIIoPIuzARXeA2yo5sWTqjYoT6kLqywYiws5noboG4IRNimYyGe63RmF19upWrs5P1ZTkuX6qJzKn19Jds0wgpScwYG%2FQkWQGeJ4r03mxKcqPjZwqpSVS2vJg9z%2Byp6RvUBbtjzwCYSr6ngWRLh8HgLMazXIjFMjEf81P6UKuW5RbwFFxf7Ehm7OnXvNecu6Yz%2BNfYw2SUzRG8zm8cZkVb8%2BQKvJ%2FlfGvDPzg0QSobKPoXyVpZjQJePZQxp8iVbyi5VnAZukpavFBGp6NO9fcufQZCr4LCtxT%2FTOtxW1Am3Kw3isJnOU4mrkOtrgXmCxxmsK6%2BmDlFNSbZnvfgAFRZsAXcsdaVUIveGelFWgeji7CDCIrK8%2FAwv3cwtJeOj0QGoZuiRbS%2FbnHOxPu1lM%2FEuQgB2cUbXpy%2FP2x0B6K6HbFhXh3XkUqAg8Ub4CmF1VNq9OznZuBXCIqmTcsmkDKiRKINjFZgW6CZM5pR%2BkU%2Bas0k8Uw4hLlvavpaMZC0yVXJyL5LGnIRkJ1Rre3bBKT0YC2d5uqi8yydahlwgpqCfWuIqwDDNywu%2BSGn8VZQaR1bkLVPfhAHqysN0rsVI%2BeFjd3U%2BNLMLmkuMMGOqUBZT%2BJtmFI8UwRXzE5j9oA2fDUIN87FU3Da%2Bc%2B%2FDcH0h0gALOXCiT9Jb6S9%2FTVssyGD5nyD1U3DFCdYeNuj5mk4l%2BHBKBuwsxIZhSW3mYE5ugnxvIxfC4YTuzw7tM3zdFcC8VPL%2BjFkgE9StlonYziUkN8dcJImyKHr8JpvTeRRqCwPfVF1BvOY2KkK6J4aiJX5MDC8OEwOYs97Sd0fbEftI9IS5BM&X-Amz-Signature=22f76107295cc6e65cdb46c5dab75e93cd4d769155f940cc6ed564de134a2a2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDIQPNHX%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3EZIcAwzl7Yt7ssB1TcT%2Bd3ExpXAKCAzrahHSUTU2mAiEA9GeTjUofvDKimMhHchZ92Gr4PTGpsxkKTOzgLXs5VskqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi8%2BSty1u4PN%2B0RMSrcA62tsX0OVpJNAuYU77BCHpr3dg3%2BokJaIIoPIuzARXeA2yo5sWTqjYoT6kLqywYiws5noboG4IRNimYyGe63RmF19upWrs5P1ZTkuX6qJzKn19Jds0wgpScwYG%2FQkWQGeJ4r03mxKcqPjZwqpSVS2vJg9z%2Byp6RvUBbtjzwCYSr6ngWRLh8HgLMazXIjFMjEf81P6UKuW5RbwFFxf7Ehm7OnXvNecu6Yz%2BNfYw2SUzRG8zm8cZkVb8%2BQKvJ%2FlfGvDPzg0QSobKPoXyVpZjQJePZQxp8iVbyi5VnAZukpavFBGp6NO9fcufQZCr4LCtxT%2FTOtxW1Am3Kw3isJnOU4mrkOtrgXmCxxmsK6%2BmDlFNSbZnvfgAFRZsAXcsdaVUIveGelFWgeji7CDCIrK8%2FAwv3cwtJeOj0QGoZuiRbS%2FbnHOxPu1lM%2FEuQgB2cUbXpy%2FP2x0B6K6HbFhXh3XkUqAg8Ub4CmF1VNq9OznZuBXCIqmTcsmkDKiRKINjFZgW6CZM5pR%2BkU%2Bas0k8Uw4hLlvavpaMZC0yVXJyL5LGnIRkJ1Rre3bBKT0YC2d5uqi8yydahlwgpqCfWuIqwDDNywu%2BSGn8VZQaR1bkLVPfhAHqysN0rsVI%2BeFjd3U%2BNLMLmkuMMGOqUBZT%2BJtmFI8UwRXzE5j9oA2fDUIN87FU3Da%2Bc%2B%2FDcH0h0gALOXCiT9Jb6S9%2FTVssyGD5nyD1U3DFCdYeNuj5mk4l%2BHBKBuwsxIZhSW3mYE5ugnxvIxfC4YTuzw7tM3zdFcC8VPL%2BjFkgE9StlonYziUkN8dcJImyKHr8JpvTeRRqCwPfVF1BvOY2KkK6J4aiJX5MDC8OEwOYs97Sd0fbEftI9IS5BM&X-Amz-Signature=f72ac1db42aa16670e270f2ce73049130da0f7b8e10d7689fedeff7dbfa1d9af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDIQPNHX%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3EZIcAwzl7Yt7ssB1TcT%2Bd3ExpXAKCAzrahHSUTU2mAiEA9GeTjUofvDKimMhHchZ92Gr4PTGpsxkKTOzgLXs5VskqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi8%2BSty1u4PN%2B0RMSrcA62tsX0OVpJNAuYU77BCHpr3dg3%2BokJaIIoPIuzARXeA2yo5sWTqjYoT6kLqywYiws5noboG4IRNimYyGe63RmF19upWrs5P1ZTkuX6qJzKn19Jds0wgpScwYG%2FQkWQGeJ4r03mxKcqPjZwqpSVS2vJg9z%2Byp6RvUBbtjzwCYSr6ngWRLh8HgLMazXIjFMjEf81P6UKuW5RbwFFxf7Ehm7OnXvNecu6Yz%2BNfYw2SUzRG8zm8cZkVb8%2BQKvJ%2FlfGvDPzg0QSobKPoXyVpZjQJePZQxp8iVbyi5VnAZukpavFBGp6NO9fcufQZCr4LCtxT%2FTOtxW1Am3Kw3isJnOU4mrkOtrgXmCxxmsK6%2BmDlFNSbZnvfgAFRZsAXcsdaVUIveGelFWgeji7CDCIrK8%2FAwv3cwtJeOj0QGoZuiRbS%2FbnHOxPu1lM%2FEuQgB2cUbXpy%2FP2x0B6K6HbFhXh3XkUqAg8Ub4CmF1VNq9OznZuBXCIqmTcsmkDKiRKINjFZgW6CZM5pR%2BkU%2Bas0k8Uw4hLlvavpaMZC0yVXJyL5LGnIRkJ1Rre3bBKT0YC2d5uqi8yydahlwgpqCfWuIqwDDNywu%2BSGn8VZQaR1bkLVPfhAHqysN0rsVI%2BeFjd3U%2BNLMLmkuMMGOqUBZT%2BJtmFI8UwRXzE5j9oA2fDUIN87FU3Da%2Bc%2B%2FDcH0h0gALOXCiT9Jb6S9%2FTVssyGD5nyD1U3DFCdYeNuj5mk4l%2BHBKBuwsxIZhSW3mYE5ugnxvIxfC4YTuzw7tM3zdFcC8VPL%2BjFkgE9StlonYziUkN8dcJImyKHr8JpvTeRRqCwPfVF1BvOY2KkK6J4aiJX5MDC8OEwOYs97Sd0fbEftI9IS5BM&X-Amz-Signature=985c7cb532cfede9d03fd0e18fd383de878c7adeefb6b311d456f6501d80de32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

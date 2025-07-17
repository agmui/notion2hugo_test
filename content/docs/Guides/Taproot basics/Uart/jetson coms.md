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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZTPW6MU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T133013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDH3R%2B337pVygPs4kvnE%2BxiYCKf6xYfe4RYTKeiunMmyAiBxDDp%2Bjfz19N2arU5lJkXynfWNeXKBjvdiAdxGq2eQMCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM66EnnXXJMtGU497SKtwDXNpnEo0UCNco091jNnRFWe3748hj3bN%2BtZTC%2BfFAQmVLm2%2BQaL7nBUMeOmS74Rh8wc7fY1s9J%2BPtjluelnS%2FDSjs4eeHdTUCef0CqLlyzCsM318FlMrwQ8E2Q2I%2F0RHZ7fbRHI2834pJcrNH4ZENMmrfPKwc7LA%2FyFwS8a%2FV2wFCajHeC3ZvXl6l2GntpNZGzrYFvkogveIy4Y2FkI1Q4EwX9z9FdsjSGZPymrmIrL2Yn3U%2BGoOhbGW3uwl22LJIXY%2F64ghhUIPa8n6c18uOr%2FvR%2BZyIf8zKCqbOp6puaBODt1Y99qPAJv4RzKoATWW07TTxMjn4j6jZzU5ayslyna%2FW6H6OR4ffms1KVc9st4NWsXFwqOsas5gDlY0SnWuYVNyCI1pTqqbm1QpDORubb5BR9JpTVNjQTVaPRJPHO86EvdXn8RWBNFiLx8uWY23sruCWKWt9XAcm2DCS8%2BvC0RSbnaRdgLhvn4s44WaI7coSkxWxALB%2BWq1EOFW1YxmitykuElRUv3GQwI3YcEUfFS2xUW%2FHxLk03VcRwXUVEnSoiq1pknQfQMYJD3GVOWU44DrQmQ0IP1L%2BQ0bkiTHQwcO9nOUWfSnjA2HQ5EPe0WEc%2FZIhr%2FHyALD1R%2FgwpuHjwwY6pgHrghPchIicuH%2BoNdyXQphBrkDDXp4lOieo3k0NgiMnx5t34OYGcQY3%2FCgCclD8IrNV8iax1H%2B2WjnXiB50ycx3meQE78smSMLQGskHjkK5j6b8%2BRX4QdHzvGKZD%2B00Eg36cVr9GTPiwNbrKgn8a7vNHqUhGxFN8S8TG1jsjW2105RGEJhrn2RNCisbupJNL8GnJIY%2Fce2pPV%2BLpw0A7l3tNx%2Bwdgmr&X-Amz-Signature=351a4e86a5e308cf8274b79cdd9ab11e5b9fcb777f43f53bacda02d987f9c431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2TTGY5U%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T133004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCSLV%2FuL4nmPV8E7MJCiEHtADQQpJf0J7A3k0bv21kRJQIgYhudqgk6RgxSQHobeZneLo1DGNNxUbWY85a%2BlmZnihcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJ3NayBaQ4ZRi%2F%2B72SrcA25FIdhoQSXg7ibwzlh7u3aAOv%2FBx9wDzooibTJ1nF75%2FTBbIP%2FasYzgcC4u2QjmCBCH7UbCldaeA%2FCXFCVEqOx%2BKUub%2B6CUnYFngqNFJTWvq8aoXUSfXIAeaTyHypdWQvlwmjod5OeVGQ%2Bgz1keBWaDY%2F8w8657HzId4RdrQkUxX54LY5AVfjItT40IwB00jR6Xvi5ZJXqRktodynOKFOpad0pbd08vy3lu89Mw%2F%2BANVRcjkjpvkeGcWm5qazxw%2F4IM15dO475%2FJZFMsxwfV6ZcpL1UW2xoxjPN2AIxygGe9g1z4A1sphx6Dy3UmWPHaRGqAI14uBShSeF8dNL%2BnxvJY0XdUDNYoS2d9m9F7c%2BelezSMuO60R%2FKuRloSmsBoPBbN4SCo3dfUOZdXy0sRPW0ps51ydCRUmJ0T2WoqrJjxQG8g%2BhHIcaTLX49uLAWlrS68fGmgU%2F7LUzL%2FHZMVqqYk%2BVXvECenRtULvrLbj%2BwuPF13VvGIiZnEkNqQZsyx4faZR3vJRtkAQR2SA1QFyPU0elAJJRufokWHzlaaOR%2BBPPtuP6XGmd2nEH6VCYEJOOIAjr0G3fwGM30R7RaFdWCARMYfuq0mC1McKpzowW52Kk24b1xdwz3Fqc9MMTi48MGOqUB6jjJbmbASjltUz%2FGijZI2adYE9xVMrOJqK77MsU4MLs9DRTXuRPbeWxypra5hn5%2Fo8xkFyEaw2vpVbZhyUSmuPyNtmuFB7STonhAO9mGSjayU3qoV2f0vH6EX%2FaqEm1cpwtoealqO%2BszO6JY%2FMxXNFHx4tOd8KxfgKXSulGOieT44QNo8PpM1pXZx2vlveLJNCvJ9nsl%2FSOYOAdh9XRfFBrHlsCI&X-Amz-Signature=ec05d694d04e4fefa38ff32ea189c2430e23d3c13f06c1f5762c3c441c4e29e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2TTGY5U%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T133004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCSLV%2FuL4nmPV8E7MJCiEHtADQQpJf0J7A3k0bv21kRJQIgYhudqgk6RgxSQHobeZneLo1DGNNxUbWY85a%2BlmZnihcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJ3NayBaQ4ZRi%2F%2B72SrcA25FIdhoQSXg7ibwzlh7u3aAOv%2FBx9wDzooibTJ1nF75%2FTBbIP%2FasYzgcC4u2QjmCBCH7UbCldaeA%2FCXFCVEqOx%2BKUub%2B6CUnYFngqNFJTWvq8aoXUSfXIAeaTyHypdWQvlwmjod5OeVGQ%2Bgz1keBWaDY%2F8w8657HzId4RdrQkUxX54LY5AVfjItT40IwB00jR6Xvi5ZJXqRktodynOKFOpad0pbd08vy3lu89Mw%2F%2BANVRcjkjpvkeGcWm5qazxw%2F4IM15dO475%2FJZFMsxwfV6ZcpL1UW2xoxjPN2AIxygGe9g1z4A1sphx6Dy3UmWPHaRGqAI14uBShSeF8dNL%2BnxvJY0XdUDNYoS2d9m9F7c%2BelezSMuO60R%2FKuRloSmsBoPBbN4SCo3dfUOZdXy0sRPW0ps51ydCRUmJ0T2WoqrJjxQG8g%2BhHIcaTLX49uLAWlrS68fGmgU%2F7LUzL%2FHZMVqqYk%2BVXvECenRtULvrLbj%2BwuPF13VvGIiZnEkNqQZsyx4faZR3vJRtkAQR2SA1QFyPU0elAJJRufokWHzlaaOR%2BBPPtuP6XGmd2nEH6VCYEJOOIAjr0G3fwGM30R7RaFdWCARMYfuq0mC1McKpzowW52Kk24b1xdwz3Fqc9MMTi48MGOqUB6jjJbmbASjltUz%2FGijZI2adYE9xVMrOJqK77MsU4MLs9DRTXuRPbeWxypra5hn5%2Fo8xkFyEaw2vpVbZhyUSmuPyNtmuFB7STonhAO9mGSjayU3qoV2f0vH6EX%2FaqEm1cpwtoealqO%2BszO6JY%2FMxXNFHx4tOd8KxfgKXSulGOieT44QNo8PpM1pXZx2vlveLJNCvJ9nsl%2FSOYOAdh9XRfFBrHlsCI&X-Amz-Signature=b34017cfc7a8d82345d981e206fe6066655fc9cb1a006f6112f0c33694c7a433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2TTGY5U%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T133004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCSLV%2FuL4nmPV8E7MJCiEHtADQQpJf0J7A3k0bv21kRJQIgYhudqgk6RgxSQHobeZneLo1DGNNxUbWY85a%2BlmZnihcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJ3NayBaQ4ZRi%2F%2B72SrcA25FIdhoQSXg7ibwzlh7u3aAOv%2FBx9wDzooibTJ1nF75%2FTBbIP%2FasYzgcC4u2QjmCBCH7UbCldaeA%2FCXFCVEqOx%2BKUub%2B6CUnYFngqNFJTWvq8aoXUSfXIAeaTyHypdWQvlwmjod5OeVGQ%2Bgz1keBWaDY%2F8w8657HzId4RdrQkUxX54LY5AVfjItT40IwB00jR6Xvi5ZJXqRktodynOKFOpad0pbd08vy3lu89Mw%2F%2BANVRcjkjpvkeGcWm5qazxw%2F4IM15dO475%2FJZFMsxwfV6ZcpL1UW2xoxjPN2AIxygGe9g1z4A1sphx6Dy3UmWPHaRGqAI14uBShSeF8dNL%2BnxvJY0XdUDNYoS2d9m9F7c%2BelezSMuO60R%2FKuRloSmsBoPBbN4SCo3dfUOZdXy0sRPW0ps51ydCRUmJ0T2WoqrJjxQG8g%2BhHIcaTLX49uLAWlrS68fGmgU%2F7LUzL%2FHZMVqqYk%2BVXvECenRtULvrLbj%2BwuPF13VvGIiZnEkNqQZsyx4faZR3vJRtkAQR2SA1QFyPU0elAJJRufokWHzlaaOR%2BBPPtuP6XGmd2nEH6VCYEJOOIAjr0G3fwGM30R7RaFdWCARMYfuq0mC1McKpzowW52Kk24b1xdwz3Fqc9MMTi48MGOqUB6jjJbmbASjltUz%2FGijZI2adYE9xVMrOJqK77MsU4MLs9DRTXuRPbeWxypra5hn5%2Fo8xkFyEaw2vpVbZhyUSmuPyNtmuFB7STonhAO9mGSjayU3qoV2f0vH6EX%2FaqEm1cpwtoealqO%2BszO6JY%2FMxXNFHx4tOd8KxfgKXSulGOieT44QNo8PpM1pXZx2vlveLJNCvJ9nsl%2FSOYOAdh9XRfFBrHlsCI&X-Amz-Signature=cc2af6fd6ceaa324701f7965528243901912c81eed4ce49f7d7817dad0852530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

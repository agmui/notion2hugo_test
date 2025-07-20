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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654W7CSW4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7wsSK8h4lZA24AU6Ezd0fXuLy02Kz%2B6jQ7zTYYKbZAAiBE6nLRgtI109aEtH3ObBdDPNUqGfu7vFirgRmAh3LhRSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMur%2BK%2FsDmrhV7%2Fex6KtwDKocUuT%2BCWXMyuV376Xm8ZBkg5KxgwLLOwMOf5W%2Fp7%2BDIil0a73iCStQnB77f8eBGSPg7Fp1IWSK8RU3sDUQj7xBc5zMnUcrMqCMyh4g%2BiVpi2RLVwXZJLLwfk64rBxm%2FE7OB4cyfKgxGCIo450HJON6aMEk6bd3EVygxOJinOyaniyRcUNyUh8wOQ%2BzJBS%2BTVUZqQoWbAYvDU6spX0kths9z9Her5MxXtADKBWGP%2F8abhD6EvHYf%2Bc7UR4Obk4QEogIqfXRFGFWRXwubNx4MFVlsEJpHtErZkh859ocKQeMW0zU%2FZVGYyr2%2F%2FwuExxa8cpN4VIjmuoPiDnUfYj1125qnnw1%2F2R15mGX1ESjuso3eYgNcsZwUz4XyJ7%2BlhRD73KPl2rzwqzc0LibLtGBqoPdjdcWdhgiTNDrZOSS81VNWZaahyRWLVnZUqcZ0eZH3vhnZMQyg95MgBLv7ULWPFbBWlEPTDcVbw3lYF6FHROUxTkgif69487QPt6b97TAKYFw7j83yE3uDAc%2FHXP1GVFlJs%2FC5uJIijz5jxQDf2Gj%2B0s8ZlYyz8on%2FOF2yqx8FDsV1zdN5k3mAkPxEjvQNfp9jDMCx%2B%2BOHY0gPRxLPowQ5KCrLlQKBJcB9%2BG0w1oL1wwY6pgFnwnT2X%2BHqBpmP%2FXVwgL7nFl7%2BrAAzk6JFIdekBLtcOMYVkIFWMghaD57EV19IPdNrmTPXP4ogTLyAH7u4SKbUKd4zxxcAoNRpSYcEkOIjo%2FjM%2FEmG4CACwR11Akoi82Z2QKXuYB2gLMUnX4%2FtPhwAocmF%2FA6crQ8Ngf2s3HAa%2BL7l9UYFGMfyxHo0svU5QGrXcXF6z9cg4LwyQNlKIN6H7G%2FTEEQE&X-Amz-Signature=25f369076f64dd2cbde79d5f317ab6753f22b7fe12e0b2c4e534893f25a47b0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647BFEU5Q%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHQFFd6wpj6l3CsTkEF2N%2BSJx3P3J%2BgFHDJVlq4oDFxAiEAtHkEQFGM7019oepQKNQ04Or92eXpXjY4QffInf%2B9qsYqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGU9%2FZ3hYq0%2BsNniqircA6NrsulfGBjaqWZy7qO2uJOxVAP1FtDTMml21u1NPCgSfhhs%2FQf8gtEnJ3fwcPBM5Yd%2FQGBOe38rOq26cWRK74UmUeQSmb6ENCgAaK%2BU48R9iqy8VfcZbXDm9EuTl823gWyl64y9cwqFqiNxZgXWh0QuJWoATRXWx1rurCY4%2BFHaZ4Pwj%2Bo%2FpzaM%2F%2FbSwluRHwNIdQ6JoWi5vxYeJvIvYRcnpLwKGgfryNJC6g8oVu5oJwWlq4OLnZYxcoBwm4k7DEDbznEz2sWk5kCn%2FV%2BmrrzGQ%2Fh%2FjMacanl0AaCztzL3IH7ggki%2FERMb7c4%2Byp59Tfi%2FNt9dYaavToG8AAP9DjG11dWoj4BzQuHZQv%2FWB4qPnlBWtsqz853A6EBa4OS%2BJHMCcGIQariMLtfpz%2FqlsxaWkWPigDKAn3O%2F%2FVMnK9EMIkuwckDTGCclGxnoHJ5%2BF4Ti81kgn9GAbfbaxlSLmLbP98LBlbryfizG10z2DzDCJwYD4uGDGArIExKSrLnBgrt21COMNIgYvUmFOCaifxF1WHRQBk5ruODYgeyQ%2BnpL6xhCe9ihD2qO8Mrih29OcVigTWMvApabXsKud8uI95u%2FZzXbu8iLIbafQjbnm4NI2PCGZE2I9UXXdJZQMNH%2F9MMGOqUBkdL7LiXef5qZHaQ2AtqdoVZF61oxhaFlzxf08tChEiWhgdPE2cejS%2Bz4gXX9N74iv0zjsduD4r226bn9g5zf3hq8xrKcKDCH8WeyIYvCRbouU5RM4J3BUwvx1%2B9VUlU%2F1o495AUekwEWt%2FWyZQgFFInzodlluwZ0QkJ598R%2BGZ8zvCNYjqppzX9bpfn5NS5VTtKBNCftP4ySPBeWXmR0l4L%2F0eXo&X-Amz-Signature=1e79e1c2d753e8400014af3b10d07ffbee48db6f1455b69eca3f4d048e095e35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647BFEU5Q%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHQFFd6wpj6l3CsTkEF2N%2BSJx3P3J%2BgFHDJVlq4oDFxAiEAtHkEQFGM7019oepQKNQ04Or92eXpXjY4QffInf%2B9qsYqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGU9%2FZ3hYq0%2BsNniqircA6NrsulfGBjaqWZy7qO2uJOxVAP1FtDTMml21u1NPCgSfhhs%2FQf8gtEnJ3fwcPBM5Yd%2FQGBOe38rOq26cWRK74UmUeQSmb6ENCgAaK%2BU48R9iqy8VfcZbXDm9EuTl823gWyl64y9cwqFqiNxZgXWh0QuJWoATRXWx1rurCY4%2BFHaZ4Pwj%2Bo%2FpzaM%2F%2FbSwluRHwNIdQ6JoWi5vxYeJvIvYRcnpLwKGgfryNJC6g8oVu5oJwWlq4OLnZYxcoBwm4k7DEDbznEz2sWk5kCn%2FV%2BmrrzGQ%2Fh%2FjMacanl0AaCztzL3IH7ggki%2FERMb7c4%2Byp59Tfi%2FNt9dYaavToG8AAP9DjG11dWoj4BzQuHZQv%2FWB4qPnlBWtsqz853A6EBa4OS%2BJHMCcGIQariMLtfpz%2FqlsxaWkWPigDKAn3O%2F%2FVMnK9EMIkuwckDTGCclGxnoHJ5%2BF4Ti81kgn9GAbfbaxlSLmLbP98LBlbryfizG10z2DzDCJwYD4uGDGArIExKSrLnBgrt21COMNIgYvUmFOCaifxF1WHRQBk5ruODYgeyQ%2BnpL6xhCe9ihD2qO8Mrih29OcVigTWMvApabXsKud8uI95u%2FZzXbu8iLIbafQjbnm4NI2PCGZE2I9UXXdJZQMNH%2F9MMGOqUBkdL7LiXef5qZHaQ2AtqdoVZF61oxhaFlzxf08tChEiWhgdPE2cejS%2Bz4gXX9N74iv0zjsduD4r226bn9g5zf3hq8xrKcKDCH8WeyIYvCRbouU5RM4J3BUwvx1%2B9VUlU%2F1o495AUekwEWt%2FWyZQgFFInzodlluwZ0QkJ598R%2BGZ8zvCNYjqppzX9bpfn5NS5VTtKBNCftP4ySPBeWXmR0l4L%2F0eXo&X-Amz-Signature=16cfefed1851f97097e060db7ed9deceb04e0194945f2d02057e29d9993012b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647BFEU5Q%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHQFFd6wpj6l3CsTkEF2N%2BSJx3P3J%2BgFHDJVlq4oDFxAiEAtHkEQFGM7019oepQKNQ04Or92eXpXjY4QffInf%2B9qsYqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGU9%2FZ3hYq0%2BsNniqircA6NrsulfGBjaqWZy7qO2uJOxVAP1FtDTMml21u1NPCgSfhhs%2FQf8gtEnJ3fwcPBM5Yd%2FQGBOe38rOq26cWRK74UmUeQSmb6ENCgAaK%2BU48R9iqy8VfcZbXDm9EuTl823gWyl64y9cwqFqiNxZgXWh0QuJWoATRXWx1rurCY4%2BFHaZ4Pwj%2Bo%2FpzaM%2F%2FbSwluRHwNIdQ6JoWi5vxYeJvIvYRcnpLwKGgfryNJC6g8oVu5oJwWlq4OLnZYxcoBwm4k7DEDbznEz2sWk5kCn%2FV%2BmrrzGQ%2Fh%2FjMacanl0AaCztzL3IH7ggki%2FERMb7c4%2Byp59Tfi%2FNt9dYaavToG8AAP9DjG11dWoj4BzQuHZQv%2FWB4qPnlBWtsqz853A6EBa4OS%2BJHMCcGIQariMLtfpz%2FqlsxaWkWPigDKAn3O%2F%2FVMnK9EMIkuwckDTGCclGxnoHJ5%2BF4Ti81kgn9GAbfbaxlSLmLbP98LBlbryfizG10z2DzDCJwYD4uGDGArIExKSrLnBgrt21COMNIgYvUmFOCaifxF1WHRQBk5ruODYgeyQ%2BnpL6xhCe9ihD2qO8Mrih29OcVigTWMvApabXsKud8uI95u%2FZzXbu8iLIbafQjbnm4NI2PCGZE2I9UXXdJZQMNH%2F9MMGOqUBkdL7LiXef5qZHaQ2AtqdoVZF61oxhaFlzxf08tChEiWhgdPE2cejS%2Bz4gXX9N74iv0zjsduD4r226bn9g5zf3hq8xrKcKDCH8WeyIYvCRbouU5RM4J3BUwvx1%2B9VUlU%2F1o495AUekwEWt%2FWyZQgFFInzodlluwZ0QkJ598R%2BGZ8zvCNYjqppzX9bpfn5NS5VTtKBNCftP4ySPBeWXmR0l4L%2F0eXo&X-Amz-Signature=a89aa23b0e6cddc1e3a695e17a07b1c3bfdb9ad254d28382f9917e38e297dfa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

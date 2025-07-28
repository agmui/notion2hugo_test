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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632T7I6KR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDdytH%2BmQf99pXNEDq%2FvJnnxcqLVDAltMa4a49kWlw4twIgS5YZ2VR%2B5uN3cZk89pFmcfvXYzgue7gx8P3yzf%2FcVA0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEyvTCUchSQx8rpLyrcA9AMt0dErj5YjXodrfZ%2Fdc6vMdppZt6x1%2BiQTAJtzz6Asg3cEdzEEFiXQhHIdpUFxz%2BZGgbflH7anfyeEZqIZcE%2FGLck1frNDBNoeZMoI8kLm7klSwaRzUvpMp672BCcWF2rzpRCk%2BulKCtY0WmxidMvUVVgx17C56F3d%2FqCnl8E6Sp1%2FXmGHWPm34nrIlsf1jge3fLW6slDw%2FNP%2Frq%2BATJcTdIXlVwpdJp79vKC9SCbSt48S%2FGJ9tnWE6Wcyk4sZHK5zfcyIVFlXNpoABfs%2FZFBVfIh6witTC1c3jVLEBNZQHp%2BNLxZ6%2F9up%2FnaLMqQpBDqirvNIKndHD%2FwQSsSc64BTfbaJsPVEmyz1Jm6b7subHTzIm2CqYVgYNhdVIhvWzNOFhQV8mGgzBx6LTI%2BK043N4GgVofyFDcp%2BG5BTepR7KwlBI567%2Bf81ChCo3mnRyRLvcikYpt14i4sSo2i13uId0uH5kQO9Rj00TUmWqa1ExD6Qlfp18GTwMcWq6SbWLrqOzPR%2FCP2ZOy9%2B0kBDeJyu0w5F49%2Fbgfd3k%2Bdvhd8Ye4sIINElY2BmBbQmEVAQhQDQ%2BadoAu3NH1HJs07WnCHpoSz0nJk2SpgFU5BzXewaYca75fRCr9d42CTMNq5n8QGOqUByxcR6K8BkeeEPA0G0Zde0INTaJR2wytZee7lkzhb%2BpQ%2FRSIhpS80IG6t7Njnriu2pacbJW2h4QkDJCGlXmKWjItTNI7UF4vnk9fNBLcf8sXO356VvmmaVkVnbAoMIlPQ8i1XC9O7bQFwYW8fa85Cyiadp4AV1ok5G191e5h2LSa1XRwFV%2FdiNjwOSIJzv%2FGEvSQaoWgS%2Fge6%2FKD6coSbmlWjR3MQ&X-Amz-Signature=5ee7f99591aeb3d34ff1372bd6fe35f67893b5070dbf46195e9a3d65b4cd0275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR26T3YP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCzFa1Ab%2BcjL4Oe7Qaa01Zrxn4Si5arsmc5opFyVhIYTgIgALiu8W%2FeqnHA7Xf%2BtKHCxIs0lFx2V0uEROAlqLT26s4qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHp7SfrGq2ykOHtSDircA%2F5mtopJ742krdB5z96XGpFLPYJj6%2BEek3vGX5p0Guvw8Qrmlc%2FF9aU%2Bb4RNf8fRa57ksa0J%2BKzvShX3esmnsalOvbFE4fl2bUBHYtl1dHEncGP97R7YQlpmsQ9gxzOcMn%2FV2kAKBD7rnYGocVZ%2Br8TjJ%2FNdedhja57U2KWkFRoJRdSIzANsQikDFgF7OFFY5Nx0uenKkAiwPYe8T%2F5gnvmfsRZLplbK16hINYwZZHi4vP3RvBIL2miucijVMvYY2rTaA7WEcAoLJkVyLh5F0PVPlahSka4o4k7V%2BrTv47pCXlgwQ2MzcqSLxSQz9a01XVknDUiv9k%2BAwt7krwkgMca0ZVwwJetsuhLIJVRJPM4kYyNHWsDU6bXmnB7BgGbS6RuAfkZF92L5rKuSQxRGVmlY0QHLrJesq98kq%2Fg4h0kpulnf49RfJEYOn7vAYyGLAHkqpByJ%2FC1Z%2FIFWcCLPZe8CtZ%2BiciTPH7ko0qHv62ExMJC5IS%2BNn3CbOT1wPCvrKzwy9Wb31fYsZEtLJVHjJ8RH%2F9f2Rkm7DppdgacLOUt81aljRHI2l3Ftmd0sNVe4JLRuFKRYu10mvzk5Y8I0IwumXsjH%2FnGmftQVEvPNvxr%2BspGz9rmOQuKzN9EhMJy5n8QGOqUB%2FYSM3Xo9Y8%2Be%2F2nHxl8yM6K1QyRo2Ql00SV2anhUF2IF6X2QBkpzdINQz4viHJXrhUKi20KeCf0cn%2B%2Bj2ZsdVojuRXOYjJkHiDnzBZ6Vb8Z3JYxXTsYeWuMleH7yRFhdvszsW8dPiMp%2BtF520VFCMHmR8nA3KMf7rhtncKM9krHBIrDIVMktxceF1hFx96xBmn34prETR7qm2ms9KmHnOm0aKb3f&X-Amz-Signature=efd81bb3b601440e0c4455de29884e47372d8c78943fb92b18b522f86b41d05b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR26T3YP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCzFa1Ab%2BcjL4Oe7Qaa01Zrxn4Si5arsmc5opFyVhIYTgIgALiu8W%2FeqnHA7Xf%2BtKHCxIs0lFx2V0uEROAlqLT26s4qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHp7SfrGq2ykOHtSDircA%2F5mtopJ742krdB5z96XGpFLPYJj6%2BEek3vGX5p0Guvw8Qrmlc%2FF9aU%2Bb4RNf8fRa57ksa0J%2BKzvShX3esmnsalOvbFE4fl2bUBHYtl1dHEncGP97R7YQlpmsQ9gxzOcMn%2FV2kAKBD7rnYGocVZ%2Br8TjJ%2FNdedhja57U2KWkFRoJRdSIzANsQikDFgF7OFFY5Nx0uenKkAiwPYe8T%2F5gnvmfsRZLplbK16hINYwZZHi4vP3RvBIL2miucijVMvYY2rTaA7WEcAoLJkVyLh5F0PVPlahSka4o4k7V%2BrTv47pCXlgwQ2MzcqSLxSQz9a01XVknDUiv9k%2BAwt7krwkgMca0ZVwwJetsuhLIJVRJPM4kYyNHWsDU6bXmnB7BgGbS6RuAfkZF92L5rKuSQxRGVmlY0QHLrJesq98kq%2Fg4h0kpulnf49RfJEYOn7vAYyGLAHkqpByJ%2FC1Z%2FIFWcCLPZe8CtZ%2BiciTPH7ko0qHv62ExMJC5IS%2BNn3CbOT1wPCvrKzwy9Wb31fYsZEtLJVHjJ8RH%2F9f2Rkm7DppdgacLOUt81aljRHI2l3Ftmd0sNVe4JLRuFKRYu10mvzk5Y8I0IwumXsjH%2FnGmftQVEvPNvxr%2BspGz9rmOQuKzN9EhMJy5n8QGOqUB%2FYSM3Xo9Y8%2Be%2F2nHxl8yM6K1QyRo2Ql00SV2anhUF2IF6X2QBkpzdINQz4viHJXrhUKi20KeCf0cn%2B%2Bj2ZsdVojuRXOYjJkHiDnzBZ6Vb8Z3JYxXTsYeWuMleH7yRFhdvszsW8dPiMp%2BtF520VFCMHmR8nA3KMf7rhtncKM9krHBIrDIVMktxceF1hFx96xBmn34prETR7qm2ms9KmHnOm0aKb3f&X-Amz-Signature=338a9c5ca8ef42c95755b4831976ab9044c2b7296a27a4ff2bf6e43625f6e297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR26T3YP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCzFa1Ab%2BcjL4Oe7Qaa01Zrxn4Si5arsmc5opFyVhIYTgIgALiu8W%2FeqnHA7Xf%2BtKHCxIs0lFx2V0uEROAlqLT26s4qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHp7SfrGq2ykOHtSDircA%2F5mtopJ742krdB5z96XGpFLPYJj6%2BEek3vGX5p0Guvw8Qrmlc%2FF9aU%2Bb4RNf8fRa57ksa0J%2BKzvShX3esmnsalOvbFE4fl2bUBHYtl1dHEncGP97R7YQlpmsQ9gxzOcMn%2FV2kAKBD7rnYGocVZ%2Br8TjJ%2FNdedhja57U2KWkFRoJRdSIzANsQikDFgF7OFFY5Nx0uenKkAiwPYe8T%2F5gnvmfsRZLplbK16hINYwZZHi4vP3RvBIL2miucijVMvYY2rTaA7WEcAoLJkVyLh5F0PVPlahSka4o4k7V%2BrTv47pCXlgwQ2MzcqSLxSQz9a01XVknDUiv9k%2BAwt7krwkgMca0ZVwwJetsuhLIJVRJPM4kYyNHWsDU6bXmnB7BgGbS6RuAfkZF92L5rKuSQxRGVmlY0QHLrJesq98kq%2Fg4h0kpulnf49RfJEYOn7vAYyGLAHkqpByJ%2FC1Z%2FIFWcCLPZe8CtZ%2BiciTPH7ko0qHv62ExMJC5IS%2BNn3CbOT1wPCvrKzwy9Wb31fYsZEtLJVHjJ8RH%2F9f2Rkm7DppdgacLOUt81aljRHI2l3Ftmd0sNVe4JLRuFKRYu10mvzk5Y8I0IwumXsjH%2FnGmftQVEvPNvxr%2BspGz9rmOQuKzN9EhMJy5n8QGOqUB%2FYSM3Xo9Y8%2Be%2F2nHxl8yM6K1QyRo2Ql00SV2anhUF2IF6X2QBkpzdINQz4viHJXrhUKi20KeCf0cn%2B%2Bj2ZsdVojuRXOYjJkHiDnzBZ6Vb8Z3JYxXTsYeWuMleH7yRFhdvszsW8dPiMp%2BtF520VFCMHmR8nA3KMf7rhtncKM9krHBIrDIVMktxceF1hFx96xBmn34prETR7qm2ms9KmHnOm0aKb3f&X-Amz-Signature=d97be7de96870c98a21807c32e0a7cfce146798e20acf84fa3c1b1a503eeda23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

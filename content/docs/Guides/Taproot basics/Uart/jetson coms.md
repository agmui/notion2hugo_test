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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6U3HOJY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmKbj1XJgVuUmdigtrpbGwofnZzUZZWnqsT0HDeoW15AiEA%2BIR%2B8zRTeKWGbOlSOBA66TvyLpURErm5Wxa%2BUeCR8oIqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB88XcAqj4cEKAB2aSrcA%2FsGJrU6ceAxFQH%2BbFTo5GoUaT1R%2FUulIt6qIaSrgqmE6mBofQBwyvEwZ7kJFy0BV2vdIz5IzccUw2exFsBRPGhlYfF1b3OzvZM5RJH%2FIwJGOb%2FHQscD%2Fcnzf2FDAtEIRk32d2tahpt0vlcuY7c1iaL4eEfd7i0ONK4eglRpAog%2F9bmLNesV3CABg8VEAaREV%2BpgB3DCWxEU3M4nSvoc%2Bxjl7GwCpBgxzCcyfrYS0YBATIJaDxIGj0XAQdeQmrTe3fGaJ%2Bp31tYoF4oPD%2FWO6S87WnnS9GatYVf8jMihj3NG1SyPIpESae30haEh5ZQIXtqa3v6W6U8AAy7IbfOtuqMI%2FgxrLxkET2GEC0envkl%2BUEap8mIUBPKZ%2F3NRZdmVtVRPKbu8Erd3n1vTZTG4WWRIFsZdcgnVH%2FMry9m%2FbEn1aF9vo4munJNOU0rOYlRRm5WvESqBNQFkKM1NEzX14RxdHlgM3qZCcui8kNZAtTCxk820Da%2FN%2FEtRw4kV%2BgLeLwy7fK%2BhEcTKXYd98W3GjhNExRw28dGW6PbskSBZWKJf9sV%2FfqVOrKyBe%2FoDBujNUtCK%2FLBI7dvuaXRBo%2F%2BMqRHydNPoC6g6Is64BPQVpxypC6QJ9f%2FJhQ2Y%2BV2GMOqJs8QGOqUBsiyslvQYo4euy0BGHLjKu82ytnlYaZWWqSbIvv9LlDO%2FIQBNA3dOCwh4dLLpQieanoQcjnLRDlwdotCxw6pOymtqymANaGH2WmIkLSyLy0tZ62SuANWN4sTtPnYNNSJ0mP2d1yZm07x4tDIf%2BKK8KDMluwJYOV7e8QFSVnZxAIO0JNGtqQ%2BgX7cSBhs8W7hVPYdz0EmrQvtQoux1AJKQyRkiYSIK&X-Amz-Signature=a437fb338de92500c3e8635cf809522291be155aabc038b2fc34f02380f5750b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJNGGBP%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8iSvFLp70W2hf2bb6LN83T72QTGCuZ41lCPi8nyyQuAIhAIPe3k4Xz3fzU8dp1fJksNiv7KevDltGnzFaVYPSOz41KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydPzipT742Oo9UV50q3AMkIvSjRyn75NsRFf%2BiP7L%2Flh26QPT3MrABfB7mi9S7h%2Bw75nstx5Laqg0teg6pG2Lx31%2BeLSkqSj9CJbZFb4mMhwOX2kRR%2BbXcCQYe%2BHxvLS7mq3iz%2FLWXAxJqs44iyoSyL%2Bp0kwfpJJk526EGpEA21p9zAUaCxhWV6hnYVh%2BiaSCDjhDGxkAv0253RqejakRvqsZgC5r4zpal3IHmGLGY60rOVSrN5wC%2Bzd3HU7WbpAmB9LaxFKgK57hwAnyuPjQINb3u%2F3yL2QCOV%2BBfnl%2BE7G68dyGS5ym%2BWEG06GzQ5gS9dIs2V9pr9AnZ1HAyvJL3y9DlD0WD29gQnyW224h5TbbISNXTa5K22klQ4mTb%2FXiM7xz%2BDne%2FknsQYaJ2B4oZLhrllNoC1vBR%2FSgLCbE6yPdkOrB0om7m3LjVzXsJ2%2BurHc%2BoT0tsEyxgN41XFyS6cS4Cl%2BJ9PWW5Z7c9fljN5PGYJA8RHU%2Fp5AEqnoa6hKbnJHeNRU5kvK%2BD02b%2FMXs1cO0V3Ds3JhIgV2tiw5zWS1c0hutmWLfP1R%2BTVEHTMmbfYz2g26tm%2BQ5nMLk0hEXQKuGAmGEWMIkVIrBr4WoFkBbWsbnZSqE3VwiNkj%2B52HwNaF%2BiKgKn%2FAG2CDCPirPEBjqkAXsH7NO4Y1Epudn921THw7kBgsC4LHXYKTDN5GUN3YXpNDE0U0M02GQwQKOFS4WNOuJ5bUE8d7foQudd17x%2F8uaPHY4vHJpSxaNmfkngfM6g4EwcQ8PMqZ0XV6s4VIDRrOu26Wc9vy5Cd5FQTF%2FV%2BeDrr7px%2FUbWnwbm7enN7Ak85n3nhJ4RPAcCycq4kUVmKdn1fJb8p9rCIUlx04YW1lmIwUKN&X-Amz-Signature=915a352e36964b27bff1dd9be3e53e1fda49c47bc21018224c179f41132f0361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJNGGBP%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8iSvFLp70W2hf2bb6LN83T72QTGCuZ41lCPi8nyyQuAIhAIPe3k4Xz3fzU8dp1fJksNiv7KevDltGnzFaVYPSOz41KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydPzipT742Oo9UV50q3AMkIvSjRyn75NsRFf%2BiP7L%2Flh26QPT3MrABfB7mi9S7h%2Bw75nstx5Laqg0teg6pG2Lx31%2BeLSkqSj9CJbZFb4mMhwOX2kRR%2BbXcCQYe%2BHxvLS7mq3iz%2FLWXAxJqs44iyoSyL%2Bp0kwfpJJk526EGpEA21p9zAUaCxhWV6hnYVh%2BiaSCDjhDGxkAv0253RqejakRvqsZgC5r4zpal3IHmGLGY60rOVSrN5wC%2Bzd3HU7WbpAmB9LaxFKgK57hwAnyuPjQINb3u%2F3yL2QCOV%2BBfnl%2BE7G68dyGS5ym%2BWEG06GzQ5gS9dIs2V9pr9AnZ1HAyvJL3y9DlD0WD29gQnyW224h5TbbISNXTa5K22klQ4mTb%2FXiM7xz%2BDne%2FknsQYaJ2B4oZLhrllNoC1vBR%2FSgLCbE6yPdkOrB0om7m3LjVzXsJ2%2BurHc%2BoT0tsEyxgN41XFyS6cS4Cl%2BJ9PWW5Z7c9fljN5PGYJA8RHU%2Fp5AEqnoa6hKbnJHeNRU5kvK%2BD02b%2FMXs1cO0V3Ds3JhIgV2tiw5zWS1c0hutmWLfP1R%2BTVEHTMmbfYz2g26tm%2BQ5nMLk0hEXQKuGAmGEWMIkVIrBr4WoFkBbWsbnZSqE3VwiNkj%2B52HwNaF%2BiKgKn%2FAG2CDCPirPEBjqkAXsH7NO4Y1Epudn921THw7kBgsC4LHXYKTDN5GUN3YXpNDE0U0M02GQwQKOFS4WNOuJ5bUE8d7foQudd17x%2F8uaPHY4vHJpSxaNmfkngfM6g4EwcQ8PMqZ0XV6s4VIDRrOu26Wc9vy5Cd5FQTF%2FV%2BeDrr7px%2FUbWnwbm7enN7Ak85n3nhJ4RPAcCycq4kUVmKdn1fJb8p9rCIUlx04YW1lmIwUKN&X-Amz-Signature=f93b96accdeaa485f6a567a5c8026c325e4aca2a5343f70191ca58dc0b3a75a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJNGGBP%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8iSvFLp70W2hf2bb6LN83T72QTGCuZ41lCPi8nyyQuAIhAIPe3k4Xz3fzU8dp1fJksNiv7KevDltGnzFaVYPSOz41KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydPzipT742Oo9UV50q3AMkIvSjRyn75NsRFf%2BiP7L%2Flh26QPT3MrABfB7mi9S7h%2Bw75nstx5Laqg0teg6pG2Lx31%2BeLSkqSj9CJbZFb4mMhwOX2kRR%2BbXcCQYe%2BHxvLS7mq3iz%2FLWXAxJqs44iyoSyL%2Bp0kwfpJJk526EGpEA21p9zAUaCxhWV6hnYVh%2BiaSCDjhDGxkAv0253RqejakRvqsZgC5r4zpal3IHmGLGY60rOVSrN5wC%2Bzd3HU7WbpAmB9LaxFKgK57hwAnyuPjQINb3u%2F3yL2QCOV%2BBfnl%2BE7G68dyGS5ym%2BWEG06GzQ5gS9dIs2V9pr9AnZ1HAyvJL3y9DlD0WD29gQnyW224h5TbbISNXTa5K22klQ4mTb%2FXiM7xz%2BDne%2FknsQYaJ2B4oZLhrllNoC1vBR%2FSgLCbE6yPdkOrB0om7m3LjVzXsJ2%2BurHc%2BoT0tsEyxgN41XFyS6cS4Cl%2BJ9PWW5Z7c9fljN5PGYJA8RHU%2Fp5AEqnoa6hKbnJHeNRU5kvK%2BD02b%2FMXs1cO0V3Ds3JhIgV2tiw5zWS1c0hutmWLfP1R%2BTVEHTMmbfYz2g26tm%2BQ5nMLk0hEXQKuGAmGEWMIkVIrBr4WoFkBbWsbnZSqE3VwiNkj%2B52HwNaF%2BiKgKn%2FAG2CDCPirPEBjqkAXsH7NO4Y1Epudn921THw7kBgsC4LHXYKTDN5GUN3YXpNDE0U0M02GQwQKOFS4WNOuJ5bUE8d7foQudd17x%2F8uaPHY4vHJpSxaNmfkngfM6g4EwcQ8PMqZ0XV6s4VIDRrOu26Wc9vy5Cd5FQTF%2FV%2BeDrr7px%2FUbWnwbm7enN7Ak85n3nhJ4RPAcCycq4kUVmKdn1fJb8p9rCIUlx04YW1lmIwUKN&X-Amz-Signature=e3566255a9029c737dd0d656be55d0dcfbdd92d74a9de221eedef3e4b1a4362b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

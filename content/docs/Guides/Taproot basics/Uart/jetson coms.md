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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNKBMUIH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAP9Mt73Ht7efDiaLcVTMN%2B1sPGb9%2FBI58Gu%2BqxCNo1aAiEAv%2BCNzFlXRzdoDuPKOKS0z7jswWTc5%2BWg9qbfKuJhm4QqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5daqUqD8El6tp5XSrcAx%2F0o8V4pr34%2FDryCH2H9tvMwzcLI5xeu0leBJ3vSAN5xSfHiRlBScXabGEVfbp9jZiY%2BgsiQkCRd3g%2FOBsim0IshKD78TxGVlV0hvvWNEykvdb4QZXfwyc%2FfdPorEzc3MgbTqXsSQw4EgLTgJnjck0MOleJ3BtcmO%2BQFZ%2Fxk7biYna8B4OttSK8N%2FeKZvU%2FKflxJa3G7As%2FdvLtHSvhKNinPstWAjRVyUp593E9DId0iMc0bd3W7YQh9lPX7n2MSB9IAxgrXuotJ1RzGdG4Q874XBNuiuVsOSUOudVtqRijbckb%2BuMJ6TrZKeoQk73MA5ZNhxBmNVRQUvxaqTsEHIPEoCUGFOUk9QDYYA%2FrfvyDVS9v5fquPYYBwaUlhH7%2BSTB%2BcI9SeDmrnvzdXQePciOS46XbJIX8Y2Ouj61ht49Jqa3KA6FVlHEbu4K65dX7%2BgQHKn3oo24DpFL1hK55f3vd7NLSZv7q6xTEPuhY1FPyAnolG1f553DbymUoREHkI898thFfa5tGTS4ToJzoV38dEcjkDmhQ14WJxnD8Y5p%2Bz5PYjhi4tlLLoHeN5VKtgEK8gLkBvLf%2FD%2Fi%2FORYVFbWdUsKeoN2Ezu5grxQ75oT3U2qT80aO%2FLrE3L7RMOLSwsMGOqUBH6jSg6sRDdfUDawxty8kI1nRq3cHpjwGO7jOG%2FNG2eYXxGpGCepjmr%2F48KUVHBOPMF5swiB1ZNru7HDD7xlLCxWf7%2BZJJn5yUgem%2Fsr%2B2N8VeDOjrBOKxvESqutpAArnnvVlyH0PW3qVRC4jnahMlmSCs3J7r0a9frN66xoJqLILQ0BwcVBurOMRaiVpbYLt0CzHdieHDsjWPPyjLIyN32E1e1o0&X-Amz-Signature=c05c35b211b815c24401c6a96afd0e4f37abd1dd674c115d4a980dec43739df9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DIYNDRD%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD80NCi4PGqCiQG60hcN60GigeXopCN5D4kK%2BzJCh0zLAIgVKEO8fMFNFJr%2F%2BXYKFPMwnUXuVEVQzzkktcHi%2FX7ysAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1rqCfvxIlkq3%2F9NSrcA1LgigJoNum8cWo1%2F7nddcRlbG6aWJuy2KKcMU5je%2FK1MixUTVSMZjnHoaUQhXf6gMUU3UNd%2BsqKzcNQMeDpsGTOzoMwwl7q8F%2FmxhdGvg7C%2Fo0XHqcqc3J39hj1VuFSRKLrvGOWtP6yXAvyMxYrvPE7s%2BjPr860yTb967IiJwzlfypiESOLnJ0lzbzncL%2FhBNwNe2PZjhyT39B9ykWGd60YQ0WLaXD2vgedHGIKDh5KPBe34NI7UfUTbS4Pkh2C9bvQnr%2FIQgzO8FDKHxPFwktKzoRmDfRsshFZj5Mql6fuhTnRWVIEw7gy3vbeSda%2FTVSkfi%2BSxYhW9RNAqXD6ssHgUKt3RfUdGQ%2BgAPKKeeWhvs2InP9LDoaqGFO2jrtaZTg1d4JzmI34kWfJjEiqqTCWw%2FfHnQGlZWnM2iIhxBznp6YVIHsnqA93kDMWckkYsqbi2sGe8dwzdw12uH1pLqOHNcOyf2YOM%2BSntXUwJa72FcvzmleGnAD9YWGZlGdAnUzyNBUse6E5tCyRTVvoxjcvNS26nMkXpdKRoVdiQa7OlYnZ2%2BCmkaihzVTEADCedC0hWJfFtRAm3Xksc7cNy%2Bb%2BAekFf2HOzvhPRBCGSUmtlIZhRXk%2BBirQMD5uMJrTwsMGOqUBX1r09JDSrzA6jcxNu76kEyE7ufl6Fiqh1Wtl84VWRQHO1wY4uooVxdXpc4oAr0P%2B5S%2FHEFzzI1J0BrRokOmqwvvGSBknDk%2FCCgCveRu2tM59RVQOfXjEXDceDSfgAbliwJrS%2B442PIU298ZXd1Ys7teGvRR%2BA9AkOq4PRZp8S6omxb%2FDJjYKoqRi3Dru%2BETHfYBSurF3%2BW1SY90cJiwMPxfyQ%2F6P&X-Amz-Signature=bd5bff65313fb42ce87a514b7f84c7a7d43bc650f1489de10eaf033c7ffc0b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DIYNDRD%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD80NCi4PGqCiQG60hcN60GigeXopCN5D4kK%2BzJCh0zLAIgVKEO8fMFNFJr%2F%2BXYKFPMwnUXuVEVQzzkktcHi%2FX7ysAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1rqCfvxIlkq3%2F9NSrcA1LgigJoNum8cWo1%2F7nddcRlbG6aWJuy2KKcMU5je%2FK1MixUTVSMZjnHoaUQhXf6gMUU3UNd%2BsqKzcNQMeDpsGTOzoMwwl7q8F%2FmxhdGvg7C%2Fo0XHqcqc3J39hj1VuFSRKLrvGOWtP6yXAvyMxYrvPE7s%2BjPr860yTb967IiJwzlfypiESOLnJ0lzbzncL%2FhBNwNe2PZjhyT39B9ykWGd60YQ0WLaXD2vgedHGIKDh5KPBe34NI7UfUTbS4Pkh2C9bvQnr%2FIQgzO8FDKHxPFwktKzoRmDfRsshFZj5Mql6fuhTnRWVIEw7gy3vbeSda%2FTVSkfi%2BSxYhW9RNAqXD6ssHgUKt3RfUdGQ%2BgAPKKeeWhvs2InP9LDoaqGFO2jrtaZTg1d4JzmI34kWfJjEiqqTCWw%2FfHnQGlZWnM2iIhxBznp6YVIHsnqA93kDMWckkYsqbi2sGe8dwzdw12uH1pLqOHNcOyf2YOM%2BSntXUwJa72FcvzmleGnAD9YWGZlGdAnUzyNBUse6E5tCyRTVvoxjcvNS26nMkXpdKRoVdiQa7OlYnZ2%2BCmkaihzVTEADCedC0hWJfFtRAm3Xksc7cNy%2Bb%2BAekFf2HOzvhPRBCGSUmtlIZhRXk%2BBirQMD5uMJrTwsMGOqUBX1r09JDSrzA6jcxNu76kEyE7ufl6Fiqh1Wtl84VWRQHO1wY4uooVxdXpc4oAr0P%2B5S%2FHEFzzI1J0BrRokOmqwvvGSBknDk%2FCCgCveRu2tM59RVQOfXjEXDceDSfgAbliwJrS%2B442PIU298ZXd1Ys7teGvRR%2BA9AkOq4PRZp8S6omxb%2FDJjYKoqRi3Dru%2BETHfYBSurF3%2BW1SY90cJiwMPxfyQ%2F6P&X-Amz-Signature=256f24a7b493b804edc57fd57282f9ab24cc2de57bef5eefd0df77388d528716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DIYNDRD%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD80NCi4PGqCiQG60hcN60GigeXopCN5D4kK%2BzJCh0zLAIgVKEO8fMFNFJr%2F%2BXYKFPMwnUXuVEVQzzkktcHi%2FX7ysAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1rqCfvxIlkq3%2F9NSrcA1LgigJoNum8cWo1%2F7nddcRlbG6aWJuy2KKcMU5je%2FK1MixUTVSMZjnHoaUQhXf6gMUU3UNd%2BsqKzcNQMeDpsGTOzoMwwl7q8F%2FmxhdGvg7C%2Fo0XHqcqc3J39hj1VuFSRKLrvGOWtP6yXAvyMxYrvPE7s%2BjPr860yTb967IiJwzlfypiESOLnJ0lzbzncL%2FhBNwNe2PZjhyT39B9ykWGd60YQ0WLaXD2vgedHGIKDh5KPBe34NI7UfUTbS4Pkh2C9bvQnr%2FIQgzO8FDKHxPFwktKzoRmDfRsshFZj5Mql6fuhTnRWVIEw7gy3vbeSda%2FTVSkfi%2BSxYhW9RNAqXD6ssHgUKt3RfUdGQ%2BgAPKKeeWhvs2InP9LDoaqGFO2jrtaZTg1d4JzmI34kWfJjEiqqTCWw%2FfHnQGlZWnM2iIhxBznp6YVIHsnqA93kDMWckkYsqbi2sGe8dwzdw12uH1pLqOHNcOyf2YOM%2BSntXUwJa72FcvzmleGnAD9YWGZlGdAnUzyNBUse6E5tCyRTVvoxjcvNS26nMkXpdKRoVdiQa7OlYnZ2%2BCmkaihzVTEADCedC0hWJfFtRAm3Xksc7cNy%2Bb%2BAekFf2HOzvhPRBCGSUmtlIZhRXk%2BBirQMD5uMJrTwsMGOqUBX1r09JDSrzA6jcxNu76kEyE7ufl6Fiqh1Wtl84VWRQHO1wY4uooVxdXpc4oAr0P%2B5S%2FHEFzzI1J0BrRokOmqwvvGSBknDk%2FCCgCveRu2tM59RVQOfXjEXDceDSfgAbliwJrS%2B442PIU298ZXd1Ys7teGvRR%2BA9AkOq4PRZp8S6omxb%2FDJjYKoqRi3Dru%2BETHfYBSurF3%2BW1SY90cJiwMPxfyQ%2F6P&X-Amz-Signature=daac4827e6a525f754feab2c87c66ef36ed13e79cb8e6c2cb6f7def83708817b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

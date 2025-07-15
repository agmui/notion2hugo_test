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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA5LCXIL%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCUFsdYVxA0NvFpRD6V%2F1o5ZJHDU8TmvMzymcLP199ZrwIgVnzjQ%2Fdr5mWCNAwCHo%2BvCSdgk1LVaC4DEDBcOxD0Magq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKSfbHEOXzypy97%2BKCrcA79hyWJowwMO%2BlbOhjsH8EMhBLIMHZq46lV9vVJWK%2B576Xw5XhAA3GOIvVg97ZeKo7E1PxG5lF6BzUwYfZzBSTMrdvQuGZBF7WNFia9R6Pyc5hlzv1pk%2F8TNdop21%2F3bGWDMLUG1%2BwLd1nAReeo%2FGtSDn2QV3LgawK4d5VnnwV%2BCOZTB9ADPcWMG%2BewgAORsm5%2FmRayHUnPY06OPAUmja9tzdGb9GE2IfE7tDW0AZoNqU5JfRloATDRFXJ4Jpuxp%2BLQ44C70aD9SIFaSJQuGOvdPcWAPAl8pMowyuLZwefRIggo5KSWMEAdDDH%2FcYoX0P7ifWBccTU3i2UM4pHBar1C19M6lLqbrbXdUZSO%2FX9qRxN5ULKxYJhwuSJ6zKdgPZwW%2FZ77UW6phBpZY6v1pJ9DdigGVWm1dfhO1aGwfUA%2BUW1sjz3qPfnY6LjYNwUpy3CZP4cM0IuWQbPQxMEUb77DsewwFKOR9%2FSYye6dA4ToEmfTUqIAsinZtGwY4kPpRM6WpQhOI66sLhVTdASvR7%2BoWgrazmxTTibsl0tlkaBYD%2B7i5V9JBn7sc752ui1MHGfOrg9v5Y%2FWT55rW3GqjUNDB39bRU2EC%2BiedOI%2Fpc%2FkLV0fme8U5%2BaHD4rCGMKWx2MMGOqUBABcDY7XkthQWPxPqLHzGJ1yu%2BAHXiQYt30%2B1GY45YJ1Ax767hkIHFykl89VxZA%2BtWFIzn7SRPYYU8ByEDliTcIiyFtDDoEedq3ArkEwhJ3tEukIXK9Wd3tjA6%2Bfd7g7DV3mzOgOAF%2B9CyjXdWhDObZ6j0T%2B%2BDBXAwigs8kUzGkdomATOazfiIrEKmsDBW0GctNvCx12bCpjksHcReD5W8ty9IaFH&X-Amz-Signature=17d0699ddb6d75046c38bfebee56267eaf3200ac0e17e8a903b2d53ffbba91ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFP6J2Q5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD4bEF1zh1AqCXZHVaoK%2FGtIL4vZmLaHcRd8iyAzg9fYAIgdm1SJtuVad4ouVyEo%2BwGUw4cKNoVjBY5NeLntQym32cq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDlFalDiusz4egfO1yrcA0UCMqx9bIJfdG4siw5zdoWVcEaiI4D6Q2huLpwq2GP9QlQ850axiBcNecDwUy8tPjoTPVyb1qUWBhtlk9Ls%2FZTcf8Qdxg%2BeYaV4SIDMAyp%2Bgam5KFvFESk5D7J6E0uvCGouDIzQcNdWgOjG11phPWdAHvbreABEVsZ8HKVJRuhrMLboSKX6%2FLFaVkMeWFXm8BxEUkJ3d4sBMeWQRB3yvTnBvebKnboENKA7nT%2B8EcsgZofaYZx13O9hBrY8SflDARTVGhcIdWWzL46T%2Fg6%2Fnrr4Au2gMIo8jZDu3e%2FO1MsY8LrCPhXcfj8tXBwTIe8zc7WYbmAWu41meviLKre4b8x3gz9wtxr8gGv4Od7NLU73gW57%2FciK4Br0VjTWJqFanQVpR9pEAYRya1cHCtR3n7b4S3ZHpHwA%2BBcQPFqBjSBI4BWkDmNXjpQ15KzXj7I8iUeREGQeXBW%2FvycRn6qw7TuxK%2BZJvb8faWE%2BjB6HX9cQ0Q1qU55n0%2FkmLLnsT77rRqnCBys7W%2F3g2y8oHhfp64u7USmNLLoqVmpwgHyNRYhAIxFSd5erWbIpZOX9g7t8BwuRFCAejRWj8Jcbq6EPuZ21ysek%2Fhwhy%2FTXex9LzL6o0WkUdjlOjlAhGL7bML%2Bw2MMGOqUB1kOTioLgXiClSF7brFfcnrI2KioB0ySpvjFbFxnWlO%2Fycv3tiZHjokUrx5MnOtrkrxaIdcbEbSA%2F6BTCZ3lTsofjVwjA6GRjuLmpwBkVpil1p296q7PUyhWWs2rWaM2Ge20CE512T02RDTyMY2SMI3gNuEss5kLjBi4qM7spT73uby1oFuctVsQt0lNSDwskyt2z%2BPkK6Y9rf%2FLtphVDEKm6k5gG&X-Amz-Signature=6890ef09c9dc02dea4e6878bfd0c7c00c0c261ac06a1ddd4c8bbb9edad7829e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFP6J2Q5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD4bEF1zh1AqCXZHVaoK%2FGtIL4vZmLaHcRd8iyAzg9fYAIgdm1SJtuVad4ouVyEo%2BwGUw4cKNoVjBY5NeLntQym32cq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDlFalDiusz4egfO1yrcA0UCMqx9bIJfdG4siw5zdoWVcEaiI4D6Q2huLpwq2GP9QlQ850axiBcNecDwUy8tPjoTPVyb1qUWBhtlk9Ls%2FZTcf8Qdxg%2BeYaV4SIDMAyp%2Bgam5KFvFESk5D7J6E0uvCGouDIzQcNdWgOjG11phPWdAHvbreABEVsZ8HKVJRuhrMLboSKX6%2FLFaVkMeWFXm8BxEUkJ3d4sBMeWQRB3yvTnBvebKnboENKA7nT%2B8EcsgZofaYZx13O9hBrY8SflDARTVGhcIdWWzL46T%2Fg6%2Fnrr4Au2gMIo8jZDu3e%2FO1MsY8LrCPhXcfj8tXBwTIe8zc7WYbmAWu41meviLKre4b8x3gz9wtxr8gGv4Od7NLU73gW57%2FciK4Br0VjTWJqFanQVpR9pEAYRya1cHCtR3n7b4S3ZHpHwA%2BBcQPFqBjSBI4BWkDmNXjpQ15KzXj7I8iUeREGQeXBW%2FvycRn6qw7TuxK%2BZJvb8faWE%2BjB6HX9cQ0Q1qU55n0%2FkmLLnsT77rRqnCBys7W%2F3g2y8oHhfp64u7USmNLLoqVmpwgHyNRYhAIxFSd5erWbIpZOX9g7t8BwuRFCAejRWj8Jcbq6EPuZ21ysek%2Fhwhy%2FTXex9LzL6o0WkUdjlOjlAhGL7bML%2Bw2MMGOqUB1kOTioLgXiClSF7brFfcnrI2KioB0ySpvjFbFxnWlO%2Fycv3tiZHjokUrx5MnOtrkrxaIdcbEbSA%2F6BTCZ3lTsofjVwjA6GRjuLmpwBkVpil1p296q7PUyhWWs2rWaM2Ge20CE512T02RDTyMY2SMI3gNuEss5kLjBi4qM7spT73uby1oFuctVsQt0lNSDwskyt2z%2BPkK6Y9rf%2FLtphVDEKm6k5gG&X-Amz-Signature=9a743beee345a7e64864ecd39c89426054f0fca40e27f9aca5592f503202fa7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFP6J2Q5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD4bEF1zh1AqCXZHVaoK%2FGtIL4vZmLaHcRd8iyAzg9fYAIgdm1SJtuVad4ouVyEo%2BwGUw4cKNoVjBY5NeLntQym32cq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDlFalDiusz4egfO1yrcA0UCMqx9bIJfdG4siw5zdoWVcEaiI4D6Q2huLpwq2GP9QlQ850axiBcNecDwUy8tPjoTPVyb1qUWBhtlk9Ls%2FZTcf8Qdxg%2BeYaV4SIDMAyp%2Bgam5KFvFESk5D7J6E0uvCGouDIzQcNdWgOjG11phPWdAHvbreABEVsZ8HKVJRuhrMLboSKX6%2FLFaVkMeWFXm8BxEUkJ3d4sBMeWQRB3yvTnBvebKnboENKA7nT%2B8EcsgZofaYZx13O9hBrY8SflDARTVGhcIdWWzL46T%2Fg6%2Fnrr4Au2gMIo8jZDu3e%2FO1MsY8LrCPhXcfj8tXBwTIe8zc7WYbmAWu41meviLKre4b8x3gz9wtxr8gGv4Od7NLU73gW57%2FciK4Br0VjTWJqFanQVpR9pEAYRya1cHCtR3n7b4S3ZHpHwA%2BBcQPFqBjSBI4BWkDmNXjpQ15KzXj7I8iUeREGQeXBW%2FvycRn6qw7TuxK%2BZJvb8faWE%2BjB6HX9cQ0Q1qU55n0%2FkmLLnsT77rRqnCBys7W%2F3g2y8oHhfp64u7USmNLLoqVmpwgHyNRYhAIxFSd5erWbIpZOX9g7t8BwuRFCAejRWj8Jcbq6EPuZ21ysek%2Fhwhy%2FTXex9LzL6o0WkUdjlOjlAhGL7bML%2Bw2MMGOqUB1kOTioLgXiClSF7brFfcnrI2KioB0ySpvjFbFxnWlO%2Fycv3tiZHjokUrx5MnOtrkrxaIdcbEbSA%2F6BTCZ3lTsofjVwjA6GRjuLmpwBkVpil1p296q7PUyhWWs2rWaM2Ge20CE512T02RDTyMY2SMI3gNuEss5kLjBi4qM7spT73uby1oFuctVsQt0lNSDwskyt2z%2BPkK6Y9rf%2FLtphVDEKm6k5gG&X-Amz-Signature=fcf12eda9a1e9b2b7a4d5bf4379ac7875bec12bc6c69e779deb845c3f695555d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

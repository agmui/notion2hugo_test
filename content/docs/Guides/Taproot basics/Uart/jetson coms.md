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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LXJJ67I%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQD5cvluvC5nWC2xve3ouvn%2BmUfnuRqUD9kqvRL%2FeBrT3AIhAIaT9eS8zPlZcVl%2F%2F4Vrijqj5xcbkOVA%2Fk0qTFjSss7oKv8DCEUQABoMNjM3NDIzMTgzODA1Igx8hAHR2cam5vgyo%2BMq3AN1zQyesW4z6LPf2Z3sbVlW1JoORlJp%2F0MzpiMI1C%2FBwn%2FU0VrThI0GpDMo3wtxVIc9AnBv%2FnnpV74vlM8%2BPrgeNngTMKBMMAeAed6SE7OMQfk0idrNUdaLVF1iTRDm4J%2F%2BLtaQ0fHuIN4YH2KW5VWoBY2wlEDWbA%2F6%2FDGaFKNS4GVxalcXXD9BGmqFCEG07BfOwDRaeXOKiiklg6xzUzd6Jy6AvF5vlZwZE%2BvzXeZXDoieyM4%2BGs1wRBGhbLWg%2FxiUMfmS32uaxQ9Iz9CwPea24aDfHBbYv1jTNm27%2BgLcBMot8%2Bcb85pzSeVuaGf%2FregIHR3s%2B1UCj5IvZDelMsXWY9lzoOE0LA9Rt0avnFbJadTvFltQ0EBx450iVrpo3TcvvIwqJdIZgY1%2BM0dJPrduBfmh3ujxRUjnMdeaMb9DGMiuwUFnIabLRERvFlSk5LdYckdpVTUbRdOsDFiG%2BhDj6FImUbLxBJoFpVTmfHMja2OhUWqsauligfycN5xYaq%2BLHEjDtJgoRK%2BHC95i0U%2FmW2XPIXXY9vDh1tvGfN2v2iVKQE%2BazDiOGr%2FzHSgk6eHkm%2FmEKiRUIUU70OVvwm88gN19NU40VVazvHm72rODz5widr7mcWJ35r4u%2BTCphNnDBjqkAXA6H4OrD%2BQZQn5utMWRSI%2B5Rro7YieJvbtWX%2B2Et8ifJaIWalsunDoUFJKkFwXo5MHElNCnppf9VCfPgIZovrtXh1hPnCg6PRvSK4punC%2Fl4xWVCaMTh0lX4Gh%2F%2FEueEQxIqQDflI7L9NcuOG2fILNjHrp32OtUj6%2FFx8quc1%2Fa%2F0Qu1hB21bZegjbWxIZ%2BlVwlvn5hYLHiLwalth9FGiN%2B87lS&X-Amz-Signature=0297b82f1302f78b2e04bcb9c76e0b89d516ad17e196d4f00e719ff1a74cd218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFBSP2WD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDHZjH%2FLbbdmSstnCjNtm100gSS7rapPDotG8dPgDY6UQIgT%2BsixZ2fnLXWijBEv6raF0V%2FRYfkzAvpS2xy629YbiIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNYV1sZuaJyU%2BbJiwircA9%2Ffh5lnW70kcLU4U3x2XyfVrxu1khkYYYF7yz0xeA1AMQQFgHUrOe6qhZdXBcpqyN5TCvhfLcnYXNUM5XgeBzCRlqAqBpa1Pl2eOlrnkXU5AxAWDq7Z4YETFpYlY8NPFx5wGJov%2Fcqt3Wg1ehw62aC9g%2FGkZ1RxpqQH6IKWAvDM%2BjCdgJ38P0x%2FHBe0XdwPazv4sPWXXiK1zSH0E5BBgTDqkcKDd%2BjrClzo5u7EgCinXMB8iUYheHyBMv%2BaZD5TKMDamEEKYtoXJQN4XYfc3T7yyj8vTL2AsCUmv44Eq273BXUZlD%2B0A%2F6XRYagbf954ljuNe%2FJEzJYHeBmK72w2pjpoKqwm1x2Sb0KzPq0XYxiS8%2FzUAigKc6wh%2B%2FXmqpSzJnI0MvXhsS0cTgAMoD4kHwE%2FeP8TPUxFF6EUhDdZPkOTwGaR5LetdyZg1xL4XCHX6lG57kgPEWJ1vX8tInbi1REqmmbuEVYOPtUMQepki75KwGfNBancIi3KJzuUdiOfg1x2G8riC0zG2cOVwJIbyQrfo1Eh0NDrIDXnzJ9JkHPMfZ76B%2Bx0tAspfQfVoMh45GBIKW5cpFyy0aU4nPHdCdCS4doJvCXv30R3Cd5nw5I5dL9VKj%2BVGx%2Bwr7AMNKD2cMGOqUBUfOyRg%2Ftf0e80RK06RI2vntJtrv8pwpuplJHGF8WIG4SswJVhsy0dPwwVWNNkjF6qWe061F2F7%2B8NU2eK6Ysi%2BMeyUrw9s8dG7RsBEwLHcWllO9xkKN0ZfxL8Fp7tg3d2HmK2ZHOaouQNZgTSRNdR1FHeH8bz3n0FsotaQEUl%2FgJ3PQsoHKzVe2ZvFz63e3m0v638djvD%2Bc3PqW4RMxVvOP2zPWA&X-Amz-Signature=caecaa202a6fb508d82eb09536a02f4474a9b9a0f7eb0cff6cc9f3aee4bea344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFBSP2WD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDHZjH%2FLbbdmSstnCjNtm100gSS7rapPDotG8dPgDY6UQIgT%2BsixZ2fnLXWijBEv6raF0V%2FRYfkzAvpS2xy629YbiIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNYV1sZuaJyU%2BbJiwircA9%2Ffh5lnW70kcLU4U3x2XyfVrxu1khkYYYF7yz0xeA1AMQQFgHUrOe6qhZdXBcpqyN5TCvhfLcnYXNUM5XgeBzCRlqAqBpa1Pl2eOlrnkXU5AxAWDq7Z4YETFpYlY8NPFx5wGJov%2Fcqt3Wg1ehw62aC9g%2FGkZ1RxpqQH6IKWAvDM%2BjCdgJ38P0x%2FHBe0XdwPazv4sPWXXiK1zSH0E5BBgTDqkcKDd%2BjrClzo5u7EgCinXMB8iUYheHyBMv%2BaZD5TKMDamEEKYtoXJQN4XYfc3T7yyj8vTL2AsCUmv44Eq273BXUZlD%2B0A%2F6XRYagbf954ljuNe%2FJEzJYHeBmK72w2pjpoKqwm1x2Sb0KzPq0XYxiS8%2FzUAigKc6wh%2B%2FXmqpSzJnI0MvXhsS0cTgAMoD4kHwE%2FeP8TPUxFF6EUhDdZPkOTwGaR5LetdyZg1xL4XCHX6lG57kgPEWJ1vX8tInbi1REqmmbuEVYOPtUMQepki75KwGfNBancIi3KJzuUdiOfg1x2G8riC0zG2cOVwJIbyQrfo1Eh0NDrIDXnzJ9JkHPMfZ76B%2Bx0tAspfQfVoMh45GBIKW5cpFyy0aU4nPHdCdCS4doJvCXv30R3Cd5nw5I5dL9VKj%2BVGx%2Bwr7AMNKD2cMGOqUBUfOyRg%2Ftf0e80RK06RI2vntJtrv8pwpuplJHGF8WIG4SswJVhsy0dPwwVWNNkjF6qWe061F2F7%2B8NU2eK6Ysi%2BMeyUrw9s8dG7RsBEwLHcWllO9xkKN0ZfxL8Fp7tg3d2HmK2ZHOaouQNZgTSRNdR1FHeH8bz3n0FsotaQEUl%2FgJ3PQsoHKzVe2ZvFz63e3m0v638djvD%2Bc3PqW4RMxVvOP2zPWA&X-Amz-Signature=2842934808c29ac35e0eca889c518dd35552aa48f82d16f79f0c37c780925728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFBSP2WD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDHZjH%2FLbbdmSstnCjNtm100gSS7rapPDotG8dPgDY6UQIgT%2BsixZ2fnLXWijBEv6raF0V%2FRYfkzAvpS2xy629YbiIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNYV1sZuaJyU%2BbJiwircA9%2Ffh5lnW70kcLU4U3x2XyfVrxu1khkYYYF7yz0xeA1AMQQFgHUrOe6qhZdXBcpqyN5TCvhfLcnYXNUM5XgeBzCRlqAqBpa1Pl2eOlrnkXU5AxAWDq7Z4YETFpYlY8NPFx5wGJov%2Fcqt3Wg1ehw62aC9g%2FGkZ1RxpqQH6IKWAvDM%2BjCdgJ38P0x%2FHBe0XdwPazv4sPWXXiK1zSH0E5BBgTDqkcKDd%2BjrClzo5u7EgCinXMB8iUYheHyBMv%2BaZD5TKMDamEEKYtoXJQN4XYfc3T7yyj8vTL2AsCUmv44Eq273BXUZlD%2B0A%2F6XRYagbf954ljuNe%2FJEzJYHeBmK72w2pjpoKqwm1x2Sb0KzPq0XYxiS8%2FzUAigKc6wh%2B%2FXmqpSzJnI0MvXhsS0cTgAMoD4kHwE%2FeP8TPUxFF6EUhDdZPkOTwGaR5LetdyZg1xL4XCHX6lG57kgPEWJ1vX8tInbi1REqmmbuEVYOPtUMQepki75KwGfNBancIi3KJzuUdiOfg1x2G8riC0zG2cOVwJIbyQrfo1Eh0NDrIDXnzJ9JkHPMfZ76B%2Bx0tAspfQfVoMh45GBIKW5cpFyy0aU4nPHdCdCS4doJvCXv30R3Cd5nw5I5dL9VKj%2BVGx%2Bwr7AMNKD2cMGOqUBUfOyRg%2Ftf0e80RK06RI2vntJtrv8pwpuplJHGF8WIG4SswJVhsy0dPwwVWNNkjF6qWe061F2F7%2B8NU2eK6Ysi%2BMeyUrw9s8dG7RsBEwLHcWllO9xkKN0ZfxL8Fp7tg3d2HmK2ZHOaouQNZgTSRNdR1FHeH8bz3n0FsotaQEUl%2FgJ3PQsoHKzVe2ZvFz63e3m0v638djvD%2Bc3PqW4RMxVvOP2zPWA&X-Amz-Signature=32571d07fc8049c27c356edac42f737b38f1107fc4f14c0a5e80700039bb8b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

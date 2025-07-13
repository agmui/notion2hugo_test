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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EDWRMUL%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9xu5MiQwnZVdC89%2BrvSWnti0U%2BUbPBkK6DB59y8%2Fu%2BwIhAIzefBXmQIUm0ARoJFhDR3E7zJcVq8kCj0vDzMeq25GXKv8DCBAQABoMNjM3NDIzMTgzODA1Igymd0QqXsYQ3NQTIf0q3APuZgBJ2pxAgRYzQtVzHonZM8JZljXxGaSL4vlcMsHg6O5cEAeOZvGScEfYgE6isFLCMSrhiTiADk18J%2BsA9l2%2BKzt1%2FR3VDmodZrCg9oAQ14Ac2urgBa8J%2FTX9z0GaraRN9gh0cTypRtvTGIXMw6YSUGtp08bh99JiRZ%2Bu2vfzeSyn1oFC%2BcxM3wtsRomZKPdPgHV%2BTxAKInhFNMuZttRu1qWl2sAdP96uqBlrecXxr5csA3wt9hWSmPykA6zqTI8APtwbgTO6h03KPbiG4g2pJ5Gy9V1YGsZjzfujqvepPFMl%2FMqIbpNnSSfxkZ6WlP5mNKc1eErYfWjiDLjFxxo4z03HzAuc%2BLUCUamvJliGOc00EmuNDP5RKakWYisqzDHq6EsEWF%2F0nGki9dUw6oa8ALuZR3g%2FfU19VMj5%2BdiK4qRzDTl0IQl%2FV615NanP7VTWc9qy9IglCMO4%2Fy1PmmSoeN%2FAcvIsmQ%2BtI3zVBo6ztkdZLUBV6oMHXhzDarwN9JXcjY90IGcAA%2Fbr%2BFF%2FrLi0m7EkGm%2FynO6eannKeoXaBtq5oj4P4B41YJL8KV%2BEroo4cNt0diPkyfuA%2FU9pmS7jkCRxyz5fQg5Jr4aSLZ5BtAD9IEOm4qeQYMTgtzCgpM3DBjqkARwLQQ4M3rsCvNZ1UzsJoHO%2Br97pxsklDusny1I5c9HolZBdITJ4pdiuJYLraW2G6mTbC5VR5p2hl6wg%2BusC4K2lglbbmn2%2BlTwwR1l5D%2F%2FI4RxnXvle5Gcx5U9vlSdTLKW17%2B4St%2B3KKunbRcJgB%2Bmh8qdNZ%2BrBVghWGpEHcfkHHmFzqAwhc847qA4KapJhyWpMCyHAm9No7Fnm%2B4t8ryLoYQJ9&X-Amz-Signature=0a05d2fc3d0a75b6cec860ba7340f3e2487de865f370e8a8bcb93b4c9745ff19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP5UGIKF%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm6GPubLTr0GciZfMS%2FN9i3ztUI5CRZ7jL8BzB7I2ChgIhAJdi0VXSoqeKYAM8Fq2jX1U2chiJEnfCVVXwQZQrPt6CKv8DCBAQABoMNjM3NDIzMTgzODA1IgwryL3mMrgrI%2FSzbpQq3ANEJrUmcIST5lsMAiKc61fTPokzlYIMo6SOdXPGzna6KXzwO4pc%2FCJIeQNWUjFdWlQFITecYLXaGJxtzH0eprs9JXV%2FUrP1rEzlZRaFFPkR4b9gs024Fm0NjmHA%2BO4a%2BR%2Boon6fzbDB057y4JLlZmCQxHS%2BpcrLV0D4zCg%2BmCNBY562moUk6iQc5bJModc3KvJ2Edf6nD%2Fn1LBaKO5VpjhGxRFmT%2FQkhc57dB%2BQsWOFRR5iIL4I9kL%2Bz7aVA1uP%2Fo9uPFtoC3GOuBAgpB%2BJpA46SnQcXcSIx9InZfs2uA%2BznoJeofSD6Bcw9Tm0Ep7Q4LdvkBK7U4XOHyWXqncinQYwm1zFyhvNZdgnmfzh18mdHPz2EZ95dep2hGqzlekJZKHkUp%2BnAbwDUWMGh72n7HaxZslidySrO%2FLm%2F1izYWEn35NcUoPwCgJvJYEv1FlEmWsNmzRarJIcWiAivhSRRPKarsK%2BNJxhChYWVA2EysL4kFpKF5wItsWfbu%2BHYk5uAjgpXxIjPFz1iUHHgczchp7OmUEE9sG6rBJXUnuSdXVD%2BmC%2B9lvuk6%2F2Rzd%2B4ua9u4GY0vZGkCiaVNjkaFHfi%2BKJTlrFP3krMx6GNpJ%2Bvln3YLJKw6uA3vcKD30G%2FjCkpM3DBjqkAaqri%2B%2FAYP7WHaXKI1amvLoCjzScL4iGY2v4VzY5yxOW%2FURlvzG2hAwyCQff9q4XtVAeCs4ej9vQdmxtIiUaRSs59HKu%2FPoU3l%2Bk2CbctgPgqNgTbyzxgmekA%2FtUu1qANWQ9LhjNXCnVjz8TEqk7%2FHVn8SZs1aeVf%2FvxR%2B20n51sFwlJktWULu7v0QChbMNkb8754xdcwTe%2BAhXk9qrrYDB%2Bxef3&X-Amz-Signature=b179d77d7f6c7e16c47818602fbee3e733ddfdb6323b67018ffc43d119acdd88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP5UGIKF%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm6GPubLTr0GciZfMS%2FN9i3ztUI5CRZ7jL8BzB7I2ChgIhAJdi0VXSoqeKYAM8Fq2jX1U2chiJEnfCVVXwQZQrPt6CKv8DCBAQABoMNjM3NDIzMTgzODA1IgwryL3mMrgrI%2FSzbpQq3ANEJrUmcIST5lsMAiKc61fTPokzlYIMo6SOdXPGzna6KXzwO4pc%2FCJIeQNWUjFdWlQFITecYLXaGJxtzH0eprs9JXV%2FUrP1rEzlZRaFFPkR4b9gs024Fm0NjmHA%2BO4a%2BR%2Boon6fzbDB057y4JLlZmCQxHS%2BpcrLV0D4zCg%2BmCNBY562moUk6iQc5bJModc3KvJ2Edf6nD%2Fn1LBaKO5VpjhGxRFmT%2FQkhc57dB%2BQsWOFRR5iIL4I9kL%2Bz7aVA1uP%2Fo9uPFtoC3GOuBAgpB%2BJpA46SnQcXcSIx9InZfs2uA%2BznoJeofSD6Bcw9Tm0Ep7Q4LdvkBK7U4XOHyWXqncinQYwm1zFyhvNZdgnmfzh18mdHPz2EZ95dep2hGqzlekJZKHkUp%2BnAbwDUWMGh72n7HaxZslidySrO%2FLm%2F1izYWEn35NcUoPwCgJvJYEv1FlEmWsNmzRarJIcWiAivhSRRPKarsK%2BNJxhChYWVA2EysL4kFpKF5wItsWfbu%2BHYk5uAjgpXxIjPFz1iUHHgczchp7OmUEE9sG6rBJXUnuSdXVD%2BmC%2B9lvuk6%2F2Rzd%2B4ua9u4GY0vZGkCiaVNjkaFHfi%2BKJTlrFP3krMx6GNpJ%2Bvln3YLJKw6uA3vcKD30G%2FjCkpM3DBjqkAaqri%2B%2FAYP7WHaXKI1amvLoCjzScL4iGY2v4VzY5yxOW%2FURlvzG2hAwyCQff9q4XtVAeCs4ej9vQdmxtIiUaRSs59HKu%2FPoU3l%2Bk2CbctgPgqNgTbyzxgmekA%2FtUu1qANWQ9LhjNXCnVjz8TEqk7%2FHVn8SZs1aeVf%2FvxR%2B20n51sFwlJktWULu7v0QChbMNkb8754xdcwTe%2BAhXk9qrrYDB%2Bxef3&X-Amz-Signature=c4aa53d79cf789759345d6875ff4cb3e0eba8529879a0484c52d3431de53df65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP5UGIKF%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm6GPubLTr0GciZfMS%2FN9i3ztUI5CRZ7jL8BzB7I2ChgIhAJdi0VXSoqeKYAM8Fq2jX1U2chiJEnfCVVXwQZQrPt6CKv8DCBAQABoMNjM3NDIzMTgzODA1IgwryL3mMrgrI%2FSzbpQq3ANEJrUmcIST5lsMAiKc61fTPokzlYIMo6SOdXPGzna6KXzwO4pc%2FCJIeQNWUjFdWlQFITecYLXaGJxtzH0eprs9JXV%2FUrP1rEzlZRaFFPkR4b9gs024Fm0NjmHA%2BO4a%2BR%2Boon6fzbDB057y4JLlZmCQxHS%2BpcrLV0D4zCg%2BmCNBY562moUk6iQc5bJModc3KvJ2Edf6nD%2Fn1LBaKO5VpjhGxRFmT%2FQkhc57dB%2BQsWOFRR5iIL4I9kL%2Bz7aVA1uP%2Fo9uPFtoC3GOuBAgpB%2BJpA46SnQcXcSIx9InZfs2uA%2BznoJeofSD6Bcw9Tm0Ep7Q4LdvkBK7U4XOHyWXqncinQYwm1zFyhvNZdgnmfzh18mdHPz2EZ95dep2hGqzlekJZKHkUp%2BnAbwDUWMGh72n7HaxZslidySrO%2FLm%2F1izYWEn35NcUoPwCgJvJYEv1FlEmWsNmzRarJIcWiAivhSRRPKarsK%2BNJxhChYWVA2EysL4kFpKF5wItsWfbu%2BHYk5uAjgpXxIjPFz1iUHHgczchp7OmUEE9sG6rBJXUnuSdXVD%2BmC%2B9lvuk6%2F2Rzd%2B4ua9u4GY0vZGkCiaVNjkaFHfi%2BKJTlrFP3krMx6GNpJ%2Bvln3YLJKw6uA3vcKD30G%2FjCkpM3DBjqkAaqri%2B%2FAYP7WHaXKI1amvLoCjzScL4iGY2v4VzY5yxOW%2FURlvzG2hAwyCQff9q4XtVAeCs4ej9vQdmxtIiUaRSs59HKu%2FPoU3l%2Bk2CbctgPgqNgTbyzxgmekA%2FtUu1qANWQ9LhjNXCnVjz8TEqk7%2FHVn8SZs1aeVf%2FvxR%2B20n51sFwlJktWULu7v0QChbMNkb8754xdcwTe%2BAhXk9qrrYDB%2Bxef3&X-Amz-Signature=f4b8f078bbe791dceb3266d0611bd36b5a9a6627e2825f0a9ceb2b49d708440b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I46AWQ5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOcx4kMfRevFtMc50Jt5WoHHz891uHsT08BIxw1iRK2AiA%2BT4fAp0d%2F4X7VbuaAca2JqqgMCzSwrz%2FnTSW9b2A%2BXyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgcuyg43FGC%2F97fSiKtwD%2FNzC2y2KY1pvSOnJxpy1SyRY5%2Bi%2FWqPGNuPakFkodQSXpR7rKWWgU2WjNq1Jn%2FA6nS0%2BIBqk%2FsJrqXhDR54EYr1iy4XA1hKWy4HyX3dF6lF29411r%2Bq%2FqO3vdMGOLAPnEZY0Scjxl3kVekyel58heZ9xrgt8zO%2BXUVzEze1QG4pr2ZrAK99Rk0og%2BZZrCiVt16w%2F%2BMLl89WECaLzmFZXE07gykzgiY5FhdnBudXBE0%2Bpqq%2F1OLD0krYItTCkvE02cQe9YjGxnv7NXkItAmB8i6DevXpWbEZz6nPYL5wQ9nXwC4E6ik8fZDGjtx0nZ8YMdK7Q1FdSIM7%2BeZ0Zxt7AUJbVz%2BHo5t9yzJJj2CIzgJcwnO7k%2BmpwYvxctudFmv5DtIZ2Sa3JvO3HinojLE265yRA1brXJE63AI4zC0lIb4F5GqczHAYvDhbdY8v4A90enly7u7kwCiPpjR5CowXWbebWv8fyfp2KQ84aALjoMtGzF6VdyDcLxSuUkXSjkvme3UKA8Y9UR93i%2FlOAxEGzlYLl1J%2B2yBuem3FXD2lPju2eog7micAcoNpDb%2Bl34vC%2BgarChmhHN6LJ14C5orTU%2BM53XsSlFZO5ShJlXgpC5DcBFYWfbCy1MfBwo5gw55L3wwY6pgGK5R7a7AetIYAvBJbsq%2FgmF8CuWU4Um2Bw0xil1tAKw%2BVZSvpuVbuwKOWdJrhjY8ctzR6%2BYr8Cl%2BcRhB%2FANAYnL4xqQL5GIJBkwlV1F%2BMTH%2BBoSxKdgZPiToqyKvR6kVn0GcYfm%2FF8ljhRIWLnth1ixkP8Lg2bOK3gPjxX45OVBGdRIYNxIvdK%2BNN%2FvOTPkm2SO5VxrgwU2rc3b9n3zzCXrsE0CtjM&X-Amz-Signature=b04a0a20c67e1f149817b12e892ab6d4688522fbc1cc17f5a49c7f22dbe5520f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657AB36B5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXAB6hebm5aYuRQ5MyvBTkrw%2BJs780TujXLeUXK2dETAiEA4NFawcoWHiKVc%2F5s1Yse315DVYn4H5GdYYoOvDXs0D8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNcMv3gOfpSLUXrcKyrcA8%2FX%2BtPRf2HWEsr1DoiFoatlzaaA9hchzgwOizqLAodsC6%2BniBtS%2BAWDBkJczso6onf%2B5Tkh6wDiNCXLpe%2FiPEv%2B1FEkvyJPbqELzXId5gNMZQvVptCDOkT2vBacxwBEn04RHdkZ94Grr%2BGZKxH44AeIXQ8TZipkMwC8Kcn%2FsTF1X0NHnaHsia9P3QKBPCud53tn6d8AuN6CeNwWeVzBKCceny9KWAdQsIDGDaIPCpfm2MCQ4fzX1ZbZ3EYcQlupMIAHp%2F9elRwAyrIU190kJfaunbvP53VWhCEl8g%2FxoSJTqNbGQ%2BY2Y%2BRvvJV4Nr1BxgWRIuc2wypipO7te1ox7A4HX5AZSze6OZpSNyGbRFtiP6k3VEYNW%2FGGpjmE6815%2BMhgxZicMja4Z5Zw%2B4s31cXWLBLOWgDhnEa2vIPnnfSuU6fUKimRhmHiixt%2FFTepqY68A26OwSV63altksPChfaNvQDZxv8ZfvW3OaJDJF%2BwubRWynFDL1gW5EICkho7lHltsco2PQi3vFb8me6RxPvHnxO4ICq9xDxfN%2FgdVEJJL1CSRerGWZx6mfdf9zDpubIfs9M9irkwPphba3aJathA0zjNWAuUgYHzGzgqhKQ1zPQeV9A8T50PJOwiMPKS98MGOqUBDjq1QqOmZUP0DAANvX7wFI6MiDBGENqMm1nWwKN9LktfzJkHVdsGq1e9FWoo%2BRJ8fYedSAW7dpI9EdQzELxw0584ri%2FLohLZDTyoIC5xAJ6i3JSBblMSBgqZhUyIS7zYFB9iIn7%2FrC4S2fJHnqIeSADBV8%2F3dWlOfzi8hV2r4m%2BYxf1MvvHIMrd1Pnf9CnJur3PkDWqntj6ftSC%2BtRXn%2FBnV1GFy&X-Amz-Signature=0491bbfd43c51fe10e3c89d2391631a22d3990dcec79e6aa2f86ab065a967a00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657AB36B5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXAB6hebm5aYuRQ5MyvBTkrw%2BJs780TujXLeUXK2dETAiEA4NFawcoWHiKVc%2F5s1Yse315DVYn4H5GdYYoOvDXs0D8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNcMv3gOfpSLUXrcKyrcA8%2FX%2BtPRf2HWEsr1DoiFoatlzaaA9hchzgwOizqLAodsC6%2BniBtS%2BAWDBkJczso6onf%2B5Tkh6wDiNCXLpe%2FiPEv%2B1FEkvyJPbqELzXId5gNMZQvVptCDOkT2vBacxwBEn04RHdkZ94Grr%2BGZKxH44AeIXQ8TZipkMwC8Kcn%2FsTF1X0NHnaHsia9P3QKBPCud53tn6d8AuN6CeNwWeVzBKCceny9KWAdQsIDGDaIPCpfm2MCQ4fzX1ZbZ3EYcQlupMIAHp%2F9elRwAyrIU190kJfaunbvP53VWhCEl8g%2FxoSJTqNbGQ%2BY2Y%2BRvvJV4Nr1BxgWRIuc2wypipO7te1ox7A4HX5AZSze6OZpSNyGbRFtiP6k3VEYNW%2FGGpjmE6815%2BMhgxZicMja4Z5Zw%2B4s31cXWLBLOWgDhnEa2vIPnnfSuU6fUKimRhmHiixt%2FFTepqY68A26OwSV63altksPChfaNvQDZxv8ZfvW3OaJDJF%2BwubRWynFDL1gW5EICkho7lHltsco2PQi3vFb8me6RxPvHnxO4ICq9xDxfN%2FgdVEJJL1CSRerGWZx6mfdf9zDpubIfs9M9irkwPphba3aJathA0zjNWAuUgYHzGzgqhKQ1zPQeV9A8T50PJOwiMPKS98MGOqUBDjq1QqOmZUP0DAANvX7wFI6MiDBGENqMm1nWwKN9LktfzJkHVdsGq1e9FWoo%2BRJ8fYedSAW7dpI9EdQzELxw0584ri%2FLohLZDTyoIC5xAJ6i3JSBblMSBgqZhUyIS7zYFB9iIn7%2FrC4S2fJHnqIeSADBV8%2F3dWlOfzi8hV2r4m%2BYxf1MvvHIMrd1Pnf9CnJur3PkDWqntj6ftSC%2BtRXn%2FBnV1GFy&X-Amz-Signature=d06089bb31b23f3c7ae05ff1c31e465c7bec3744d5b7f2d555012e4ed373fea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657AB36B5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXAB6hebm5aYuRQ5MyvBTkrw%2BJs780TujXLeUXK2dETAiEA4NFawcoWHiKVc%2F5s1Yse315DVYn4H5GdYYoOvDXs0D8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNcMv3gOfpSLUXrcKyrcA8%2FX%2BtPRf2HWEsr1DoiFoatlzaaA9hchzgwOizqLAodsC6%2BniBtS%2BAWDBkJczso6onf%2B5Tkh6wDiNCXLpe%2FiPEv%2B1FEkvyJPbqELzXId5gNMZQvVptCDOkT2vBacxwBEn04RHdkZ94Grr%2BGZKxH44AeIXQ8TZipkMwC8Kcn%2FsTF1X0NHnaHsia9P3QKBPCud53tn6d8AuN6CeNwWeVzBKCceny9KWAdQsIDGDaIPCpfm2MCQ4fzX1ZbZ3EYcQlupMIAHp%2F9elRwAyrIU190kJfaunbvP53VWhCEl8g%2FxoSJTqNbGQ%2BY2Y%2BRvvJV4Nr1BxgWRIuc2wypipO7te1ox7A4HX5AZSze6OZpSNyGbRFtiP6k3VEYNW%2FGGpjmE6815%2BMhgxZicMja4Z5Zw%2B4s31cXWLBLOWgDhnEa2vIPnnfSuU6fUKimRhmHiixt%2FFTepqY68A26OwSV63altksPChfaNvQDZxv8ZfvW3OaJDJF%2BwubRWynFDL1gW5EICkho7lHltsco2PQi3vFb8me6RxPvHnxO4ICq9xDxfN%2FgdVEJJL1CSRerGWZx6mfdf9zDpubIfs9M9irkwPphba3aJathA0zjNWAuUgYHzGzgqhKQ1zPQeV9A8T50PJOwiMPKS98MGOqUBDjq1QqOmZUP0DAANvX7wFI6MiDBGENqMm1nWwKN9LktfzJkHVdsGq1e9FWoo%2BRJ8fYedSAW7dpI9EdQzELxw0584ri%2FLohLZDTyoIC5xAJ6i3JSBblMSBgqZhUyIS7zYFB9iIn7%2FrC4S2fJHnqIeSADBV8%2F3dWlOfzi8hV2r4m%2BYxf1MvvHIMrd1Pnf9CnJur3PkDWqntj6ftSC%2BtRXn%2FBnV1GFy&X-Amz-Signature=bde7da1def002871bc794afc347e361abcf0e5f210ec2c8975d24950ebb3b2e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

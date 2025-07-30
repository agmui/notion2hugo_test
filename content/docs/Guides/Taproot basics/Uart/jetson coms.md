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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYSHLXDW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdvEK8xH3NHQ%2BUCEaRQIuJxjHryCwtpII1TvgsSw6PKQIgOoIJiw%2FekTdzI%2BEsQLxioOWJhxjnVrmcJjmtvZTzXa8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvjvuW0DBqAuw%2FcNyrcA2rl5pbPwtdSXr0S36ceDky5hO97Rg3BS8tOYTNruvmu%2Bw%2BInfAo4TswtwAcBiAHQKFII6V3%2FUMxFbtLAM2XQX7C59qA46QZi%2B0sBte9aDxIf0CPNOv9TzvCQu0N%2FVM5i7LIPBFRS2BTATO%2BSRKZA3aPb1E%2FHb%2BmhuVBVfnW2uMK47h8oycy7CUQFFov%2FiIbvo3Nku4TUAs1Qr1sBXSkjFWl6vsrlrCOamEmO%2B%2B62%2FsDyRUo9mmzs3aurrbW9S%2Bnv8OjDS27ySEUPDSeh2OhqajpJ7E0tem0rBgUWMgOoGHzAcn5%2Be9DHVvITGcIm3al0TnsYazFp%2FhQs3bJboqvMBKS7ZXSUysb19sEXDQBgc78VKZCVF7JQpkqSDH4v7WmH22jGbYi7HwPM6C%2B1IcA6M8xAvzcv4zC0sA0ZQ6jDVuocvZ%2BUj9jU2AmY2vS2lErQxxg8zEEvs0B0QpyOcFluQN%2FEGz1WSTKNLJCXrsYCjzXOAto8ttnWqIIcVxeNF1a7v27DqMxVPu9BsroilKooZV7WV5DaJokLNmqLVBk99cIvXe53cF48tO%2F7frxHGIr4BCivPfDhzKtvwF4JwT0i5CjuSx21LMCxgUU37Vw1tPZq569ghrI871iJo9mMNKiqMQGOqUBK2adlStHR53bQzcaYzCwaXtVioWhDuWdXHuRUjobcN9oAtZc9GBz%2Br6LShPGSPMz9lSDd6sxtnzVGD8gP%2BnW0qof%2FHhelKbwfuf2Jg1%2Byiw0fQVpIcF6krMYKX8QkHcoA6x3dxPDEsrUQaFBgKU8HorRSbOVhqKC7D%2B1XfVboSxQcnOR7721%2FltTqj2pvpxwvQ63S7A10Cg6sNA6uwj9neiGyX5T&X-Amz-Signature=f210b0cf754d53ce2505a17a6f10c1a3a21d18d04775d6dc4d394e1b90465fe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675U5NYGW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPc23NSM%2Bv00cf6TC9FlLTW%2Fil3FLk0ZFhwaxVAYlLUwIgD3v8XsNqFVSSHOuSZ8LrepgPcPxJPJp%2FzW3pmBgQsxEqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgAdu3brMUZMtMvLSrcA69mBcqKcx6UWPnZnHdmnE%2FXQhCw3nwvnaRuLgrOPskKpy5yIdfRyjXmwUJKEuhWxfdG8o8HaZ9mxGX%2F%2FEW8XdzPQUyow98swZBYYqTYVBUJ7%2FGFNqgAS%2BAkgZwXKYsbKgZRwrRjpQS%2BQdXYTf%2FJMSE1qOhfJdrS8enDUvZ2JLglxtTvI6De7rSDRtXxOfst7qK%2Fs9%2BWCwEMdD5HbvtpilrauG6XOImq1fEG5NZR4PtDthb13ItqJwZO%2FiHrAosU0GH2898yV7FgDJ8bCcumdDRLSxVOnXfBtoo6C1R49JGcCfv40L7I9Ek4WF8ljw84HO1ke2%2FM8GtNjst1Rq7NlAmjpYcgsa%2FSTZE3uqPQGPAzqLuDxO5WG0ILVD%2FGqQFh%2Biu4kW%2BiWcSBjOg1ItQSzSYuZ9ZKPtIgG5BbO5G21zfRapDVCdShnEtOXUSe6hF4H8ikX%2FR%2BsJkWMtPO0aNM%2B%2FR1pMgf4KvTAw0JEz3qVDe1XZDFGQsTKhCVvfGPkxkstDr2UroR%2Fhi%2BozBunpj0N%2FfRVw486c7W0t8t2GYkQR6gmKcz0Hr0%2BFTnswasugCGJA9ryKQYhY%2F8HjdLaCsrW9gORQrrYVwPfKS7l2P44XFMFeaXil3NhZc6BOfpMIKjqMQGOqUBGFiZgriQ7BWvTXfU7JA7rDhjH8YC%2Ffpbnz20uQCPxhUlkSBpW5XGUG5252RVFAMfj1NNqGZf%2Ft08XAuBx3xp8AT1nZr0v4O%2FQNI7lyhj%2BbCf1sT7LwcpoHmuCrJsxM5FMobdbu4BBO86Fk0sJ9QPyQxAfpg0NYvYJpNyoxDmRljt6hnJirLOQANWVwvp0IujV8pPYt1d5hy5ccd082U3OvuVSQqv&X-Amz-Signature=c6deb918dbacfa363cd186c20f7e69818db0934d376c7fd514ce86e41e663d3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675U5NYGW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPc23NSM%2Bv00cf6TC9FlLTW%2Fil3FLk0ZFhwaxVAYlLUwIgD3v8XsNqFVSSHOuSZ8LrepgPcPxJPJp%2FzW3pmBgQsxEqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgAdu3brMUZMtMvLSrcA69mBcqKcx6UWPnZnHdmnE%2FXQhCw3nwvnaRuLgrOPskKpy5yIdfRyjXmwUJKEuhWxfdG8o8HaZ9mxGX%2F%2FEW8XdzPQUyow98swZBYYqTYVBUJ7%2FGFNqgAS%2BAkgZwXKYsbKgZRwrRjpQS%2BQdXYTf%2FJMSE1qOhfJdrS8enDUvZ2JLglxtTvI6De7rSDRtXxOfst7qK%2Fs9%2BWCwEMdD5HbvtpilrauG6XOImq1fEG5NZR4PtDthb13ItqJwZO%2FiHrAosU0GH2898yV7FgDJ8bCcumdDRLSxVOnXfBtoo6C1R49JGcCfv40L7I9Ek4WF8ljw84HO1ke2%2FM8GtNjst1Rq7NlAmjpYcgsa%2FSTZE3uqPQGPAzqLuDxO5WG0ILVD%2FGqQFh%2Biu4kW%2BiWcSBjOg1ItQSzSYuZ9ZKPtIgG5BbO5G21zfRapDVCdShnEtOXUSe6hF4H8ikX%2FR%2BsJkWMtPO0aNM%2B%2FR1pMgf4KvTAw0JEz3qVDe1XZDFGQsTKhCVvfGPkxkstDr2UroR%2Fhi%2BozBunpj0N%2FfRVw486c7W0t8t2GYkQR6gmKcz0Hr0%2BFTnswasugCGJA9ryKQYhY%2F8HjdLaCsrW9gORQrrYVwPfKS7l2P44XFMFeaXil3NhZc6BOfpMIKjqMQGOqUBGFiZgriQ7BWvTXfU7JA7rDhjH8YC%2Ffpbnz20uQCPxhUlkSBpW5XGUG5252RVFAMfj1NNqGZf%2Ft08XAuBx3xp8AT1nZr0v4O%2FQNI7lyhj%2BbCf1sT7LwcpoHmuCrJsxM5FMobdbu4BBO86Fk0sJ9QPyQxAfpg0NYvYJpNyoxDmRljt6hnJirLOQANWVwvp0IujV8pPYt1d5hy5ccd082U3OvuVSQqv&X-Amz-Signature=2e8cd08d6697abfff77dd80df34f1e36b617792c95d4dd1abc0a4e2c4a54f684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675U5NYGW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPc23NSM%2Bv00cf6TC9FlLTW%2Fil3FLk0ZFhwaxVAYlLUwIgD3v8XsNqFVSSHOuSZ8LrepgPcPxJPJp%2FzW3pmBgQsxEqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgAdu3brMUZMtMvLSrcA69mBcqKcx6UWPnZnHdmnE%2FXQhCw3nwvnaRuLgrOPskKpy5yIdfRyjXmwUJKEuhWxfdG8o8HaZ9mxGX%2F%2FEW8XdzPQUyow98swZBYYqTYVBUJ7%2FGFNqgAS%2BAkgZwXKYsbKgZRwrRjpQS%2BQdXYTf%2FJMSE1qOhfJdrS8enDUvZ2JLglxtTvI6De7rSDRtXxOfst7qK%2Fs9%2BWCwEMdD5HbvtpilrauG6XOImq1fEG5NZR4PtDthb13ItqJwZO%2FiHrAosU0GH2898yV7FgDJ8bCcumdDRLSxVOnXfBtoo6C1R49JGcCfv40L7I9Ek4WF8ljw84HO1ke2%2FM8GtNjst1Rq7NlAmjpYcgsa%2FSTZE3uqPQGPAzqLuDxO5WG0ILVD%2FGqQFh%2Biu4kW%2BiWcSBjOg1ItQSzSYuZ9ZKPtIgG5BbO5G21zfRapDVCdShnEtOXUSe6hF4H8ikX%2FR%2BsJkWMtPO0aNM%2B%2FR1pMgf4KvTAw0JEz3qVDe1XZDFGQsTKhCVvfGPkxkstDr2UroR%2Fhi%2BozBunpj0N%2FfRVw486c7W0t8t2GYkQR6gmKcz0Hr0%2BFTnswasugCGJA9ryKQYhY%2F8HjdLaCsrW9gORQrrYVwPfKS7l2P44XFMFeaXil3NhZc6BOfpMIKjqMQGOqUBGFiZgriQ7BWvTXfU7JA7rDhjH8YC%2Ffpbnz20uQCPxhUlkSBpW5XGUG5252RVFAMfj1NNqGZf%2Ft08XAuBx3xp8AT1nZr0v4O%2FQNI7lyhj%2BbCf1sT7LwcpoHmuCrJsxM5FMobdbu4BBO86Fk0sJ9QPyQxAfpg0NYvYJpNyoxDmRljt6hnJirLOQANWVwvp0IujV8pPYt1d5hy5ccd082U3OvuVSQqv&X-Amz-Signature=d5bc85d055dbbb95a9bce6f1c8b67ca025f4da4b857028b5a40e49fa2fb7fcd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

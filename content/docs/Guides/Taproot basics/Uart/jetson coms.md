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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXCZYV4I%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIEu1NVXzM1guchkhQIchrW38zyh9Oplef4%2FR2oBxMTGYAiAfI%2FznuEGr1oaTJ6wMG3LHa2zDIm45K5dONRsRtJ6p5Cr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM02%2BR84tLQFbD1HsLKtwD5jEIGZvbJZKDhw6iEgR1mDrObfai5%2FadZv1XC4Sk%2BQW95HU%2Bkb6VlqUpaAr8ZZK8f1Bh%2Faa9A27K97fyRFSfpa1epbHx1QH4N%2Bd6%2FZvneWYAqwvcMQvkzbDM5J9fFbrCq3sRBcxhdaCDtfTGgiBAo0uTA5eIGFn2K8XLz7Tke6G6Q%2BqCV%2FEwrvanokVgnpvOOOg8T4BWeR1hyhy1F9yJ4nBU3PLRorjfaBqlcM8XOQ52JX4TB6ZplTQMaMXOiYVoc4rTB9FLHlAO8XIgQkvJdTsaYPGNoPUEY7Zlq417nLITYlumsj8v0wPozElveDpfOrbbFwiCaLH8ayJa9eFSeoOmX%2FZ9WbFMBrWhhPsb4kwa1OIY5nPUY0g6zRiOR7V9E0NSV5g3Ci3tTidL0BQG3Zqg3Dd0tLsPvyDgd1L9srqR%2B1txuFH6%2FSsiXnJYtT9sserqK58bwxTx4Dpf7l64SMU1yxhhNNWpDNXjJVILsXA5Qc15TVg31UII3A1lwY%2FS5QTU5t7oXpHj7K0lNteeFaHaqfgKV7ThqI0rcklhHN%2FLNMhrvx5MQWuN6Ob3ugI6Y3PiGspgTL3c2195hrO9pxn8yVpxCHrYQ%2BrI6cYySkj1BZ0cIfmews3UlLAwr%2BigwwY6pgE%2FIvD0PQMCbH4kKcl0xVeWCfmnrtSAUiWdupSInsrSocUtsFo3oCz%2BCUdvPEqi7OkycWoUz1yxdSX3%2Bl5QW85mlG3F%2FHeyEYK%2Bn%2BF2jWBS%2BONG5nbQZdtw4eVK7Vzr%2BD8c4L0K3CCPQ%2FZB07jn9Yz96ipFBEsNYxcPcFYkvjjy9CllLoQt3iBZ91BtIGKIdgHkrQlSc7b2e63ygPsXYqfSPf2Rc6lA&X-Amz-Signature=beb4ad25425d5c470c5462cd84104dd7d4642ed9c7a75610f64cafe36926fd55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MCEUVUP%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBVNyU3O%2BQBQVADwuDEtfsDvnJn3U873gx904hU8sB9CAiEA72L2t5UuCeJEfZTAS1%2FivhszaLS7on042GW2sMKtpUoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDLNwLrSAgnuZ1tqimCrcA6%2F5zNnZLUUdxymq8vwIS3DLzMbk%2F69DKG5uXMFzmUnYIFV9%2FT6U5B5LQIfHH68UFF519J1XD3ETUWav4w7RG%2FNOLlL0uh5cZPRhzFyWdY9jSUVg4E57NOIG0QqoopCIrrLyDjjMOKVuIqgPcwIAbVLQ0pm0gkyVVb2CzC5x1F18FHXnsiXd7UhvHnp46w6i5EB3Kh5QuG%2B3u%2B%2BOEVGc%2B%2BGJ52X3Zi2Fjpbqdh%2Bb0A0mr%2Ffb9oHijFJ8J%2FjV3VafIORZ3IwcJzt9qvLyFNt%2Bo4QGHoQZEMVMVaQcVCn6%2BHpmn8Xi1gF2IHQDwDS7PHozjbco0v4UgIRv1QJdRyNShZ8cK9MHBSbY%2BP6s1C1h3cBoeAbhIhEMBMnmZkqAwUjECx27P3PzrgvWVKj6ve5DiI5IVWi%2BpJ6i%2F4vMs2s1dwhaB5uwl3%2BSXE6zVwB1nVKEyupkDPq3LDveu8flSclx9kWjyy%2FadCIO8rYnjup5XyiS94ts8tcW0eBW5CRJrJKWEP2S1aXBrhODg8eLo1LWqj9LNZ6DqVdukGD75aat5xx0GrPqlq68HS%2F%2FNQ6%2F127azbcbboAmGSceNQ7HVKuvsryjn5goAWnhmlK0i6wfCCvQ1rudqXNTyFgzcbzKMJ%2FooMMGOqUBz5mJHV1Sfcivhary4DVLy5ldicYndIGxkU1NUp%2BMaf1ZE7ugb15nMYq8cl57PoYDiLr0nakzIzoM%2FNndZYyVct%2FTZ%2FY0oKSv1UGMhjU%2F8vtc4OWZHaUB0WT%2Bd72200Ygm5oMuOsTV4Fe0is2EqlMi2xUPQA%2BmUYgVWdGis5dP4JKisCRlBGyGV%2FZTo0FtIZGAPs%2BNAqqCUl%2FBbYDzbU6hbtM1Vz0&X-Amz-Signature=7f0eb6baa597dfcecdc32c0eb40f3396dbdb4cf1af9c5f500661c2d5bea5ca47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MCEUVUP%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBVNyU3O%2BQBQVADwuDEtfsDvnJn3U873gx904hU8sB9CAiEA72L2t5UuCeJEfZTAS1%2FivhszaLS7on042GW2sMKtpUoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDLNwLrSAgnuZ1tqimCrcA6%2F5zNnZLUUdxymq8vwIS3DLzMbk%2F69DKG5uXMFzmUnYIFV9%2FT6U5B5LQIfHH68UFF519J1XD3ETUWav4w7RG%2FNOLlL0uh5cZPRhzFyWdY9jSUVg4E57NOIG0QqoopCIrrLyDjjMOKVuIqgPcwIAbVLQ0pm0gkyVVb2CzC5x1F18FHXnsiXd7UhvHnp46w6i5EB3Kh5QuG%2B3u%2B%2BOEVGc%2B%2BGJ52X3Zi2Fjpbqdh%2Bb0A0mr%2Ffb9oHijFJ8J%2FjV3VafIORZ3IwcJzt9qvLyFNt%2Bo4QGHoQZEMVMVaQcVCn6%2BHpmn8Xi1gF2IHQDwDS7PHozjbco0v4UgIRv1QJdRyNShZ8cK9MHBSbY%2BP6s1C1h3cBoeAbhIhEMBMnmZkqAwUjECx27P3PzrgvWVKj6ve5DiI5IVWi%2BpJ6i%2F4vMs2s1dwhaB5uwl3%2BSXE6zVwB1nVKEyupkDPq3LDveu8flSclx9kWjyy%2FadCIO8rYnjup5XyiS94ts8tcW0eBW5CRJrJKWEP2S1aXBrhODg8eLo1LWqj9LNZ6DqVdukGD75aat5xx0GrPqlq68HS%2F%2FNQ6%2F127azbcbboAmGSceNQ7HVKuvsryjn5goAWnhmlK0i6wfCCvQ1rudqXNTyFgzcbzKMJ%2FooMMGOqUBz5mJHV1Sfcivhary4DVLy5ldicYndIGxkU1NUp%2BMaf1ZE7ugb15nMYq8cl57PoYDiLr0nakzIzoM%2FNndZYyVct%2FTZ%2FY0oKSv1UGMhjU%2F8vtc4OWZHaUB0WT%2Bd72200Ygm5oMuOsTV4Fe0is2EqlMi2xUPQA%2BmUYgVWdGis5dP4JKisCRlBGyGV%2FZTo0FtIZGAPs%2BNAqqCUl%2FBbYDzbU6hbtM1Vz0&X-Amz-Signature=048743aae6cafb35b8b04fcd144cb3ca9c51b0cbbdfec062a2f3a065d238ab2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MCEUVUP%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBVNyU3O%2BQBQVADwuDEtfsDvnJn3U873gx904hU8sB9CAiEA72L2t5UuCeJEfZTAS1%2FivhszaLS7on042GW2sMKtpUoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDLNwLrSAgnuZ1tqimCrcA6%2F5zNnZLUUdxymq8vwIS3DLzMbk%2F69DKG5uXMFzmUnYIFV9%2FT6U5B5LQIfHH68UFF519J1XD3ETUWav4w7RG%2FNOLlL0uh5cZPRhzFyWdY9jSUVg4E57NOIG0QqoopCIrrLyDjjMOKVuIqgPcwIAbVLQ0pm0gkyVVb2CzC5x1F18FHXnsiXd7UhvHnp46w6i5EB3Kh5QuG%2B3u%2B%2BOEVGc%2B%2BGJ52X3Zi2Fjpbqdh%2Bb0A0mr%2Ffb9oHijFJ8J%2FjV3VafIORZ3IwcJzt9qvLyFNt%2Bo4QGHoQZEMVMVaQcVCn6%2BHpmn8Xi1gF2IHQDwDS7PHozjbco0v4UgIRv1QJdRyNShZ8cK9MHBSbY%2BP6s1C1h3cBoeAbhIhEMBMnmZkqAwUjECx27P3PzrgvWVKj6ve5DiI5IVWi%2BpJ6i%2F4vMs2s1dwhaB5uwl3%2BSXE6zVwB1nVKEyupkDPq3LDveu8flSclx9kWjyy%2FadCIO8rYnjup5XyiS94ts8tcW0eBW5CRJrJKWEP2S1aXBrhODg8eLo1LWqj9LNZ6DqVdukGD75aat5xx0GrPqlq68HS%2F%2FNQ6%2F127azbcbboAmGSceNQ7HVKuvsryjn5goAWnhmlK0i6wfCCvQ1rudqXNTyFgzcbzKMJ%2FooMMGOqUBz5mJHV1Sfcivhary4DVLy5ldicYndIGxkU1NUp%2BMaf1ZE7ugb15nMYq8cl57PoYDiLr0nakzIzoM%2FNndZYyVct%2FTZ%2FY0oKSv1UGMhjU%2F8vtc4OWZHaUB0WT%2Bd72200Ygm5oMuOsTV4Fe0is2EqlMi2xUPQA%2BmUYgVWdGis5dP4JKisCRlBGyGV%2FZTo0FtIZGAPs%2BNAqqCUl%2FBbYDzbU6hbtM1Vz0&X-Amz-Signature=f9bf11637f00144c2ae05cdbee15a63dee5a70a16280844a40a99bc0b3f76812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

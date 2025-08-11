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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYQJ6CI6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2FLRBw3IZvspHeJSLtHKVGK%2Fz6aTrHfvop57007EfmuAiAijAFvWaSqiunhtAP9AD8VYyiNXByRG4KhmkU09FBFESqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3W1KabrYGTkrcYY7KtwDfNLqCT1Z7EYgJKg6%2BQSxJbA%2FmL4iI2LZH9GD1oTzGQWMnRWN2Fky2dU%2B6dPJDWc4QU03KKy1d6Va1l3v%2F5LbFDahkF7%2FutxEfj3n5xtqZAxnw35RVBjL8DLMysDybppE6QecaMxYleO7dxv7857%2FHULNminN2f0RmHFREmyieBF4TP2iBhxN4YzWGTeVFJEw%2F3TjqLJ08xJZPmliDODXrcS3WEPu7Bus6b4YaTnAxBb%2FL8XGU%2FsLiZWaaWHttQMosnyEebNXZo9PL21LgW%2FcO5NfOCpamaeO5JrTTTLVzw2lH2quNIQgA5mKDRzKvIIqz4xzx8HV9hHtdmaZ2ULqv5hnoaNkDhE6iXCQJeLxJJGWXYonNLj97zjI5A6sKlEHuJ%2F32a2ee8pCY4n7iL%2B2MSUup2MtXzr%2BfCW0td5%2FwcC49s9F0MB1v2z%2FLiDfseucAfS9EIZDjKP41gY7NbosrKhFFrvfA5wdNNZ1E6T4Q1dLSbR0ELfTR8lkubDLsqYwa3zLLlRSUdwBMXrlCbtTOWfkTZRtbE%2BQCYJIsXkQ2fdyqENzhLfi%2FWu6J74u1JwSyjQ%2FhwqHdp0gd%2FJz7W%2FeKZvIlt4xCqbCn8x%2BPmMbVPqhuh85Shy8kTqVUf4whdXkxAY6pgHjsBcEZiJV5vNSdlCXLQZWbhXROWus%2BJL4BUGDkdHS9BNZo6%2FGEtVGSvco%2BqNxfGN7Nz2IaIiDo7qByEDPR%2FPNjzRLkInVt%2BOauskh8C4XCHt4FoXhuBx7aYsRhgk6gQmRoToVqoYdMXvcyMFHRQ7XmANE52R42ML%2BKhFGvrubquYe9z3Lh6jd8MdToQ%2FrW%2FGuPljFyxmEapRQDBXX5%2BUDaloZ1yAX&X-Amz-Signature=020a85601999bec883c07907248dce8d27ae4bb22d78c59268b4dae2247a4048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E5AW6SP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9E8ksJukMy1%2B7akkIVqKGUOK8lvwghYtiCB%2FK2sK%2BgAiBLYgkNKAYtuIlaQro0BgDVuKlPj8GLspQOJil2qyN0xSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0pnkYDuvnfOm%2FlT%2FKtwDNGzDgVIFXWzqh0Rbo9%2BUm2c26uDzhwcd9FijbK3QSwGOOgyLeiEMY6Vv99O0UpAwcfSGCj6DTyubgVWLJHkwib2koiCqWoaKMuIkiGIQRvDUnIcdR4ZMCWmRjbg0FxImiUz%2BqJqAJhn2WX1CBy%2FP4Eop%2F4ztywIRUIX1BDZGziIeRtzrI9dqzABkgVdvD8sw0W5iYMjfJGkw6ky90cG%2Bdb9NA1A%2BN6DUU%2Bcb4AgmvPLqSX3mhik1viIo%2FcWdDKTNRAyv7eP6Drs78KyIfPyPkNEjRbpnGR%2Fi66IzL%2BXG2dULwS%2Fh7tlf4LSFOG1fJDD6O0Wfph65QlX%2F03JJUJYm%2BWiW3y%2FO7Hldv6MJD1KBUVkSkjR468n8rI%2Bfa5fTwsDLe6IXQd1Ej%2BiOZ1qxLbIjJOH4wOUtiOWQ5JV1WEkMl%2BndPrz1BCNPYNk7LoN%2BAXSJ8RUbLe%2F0bQUS5BWYQIakVidtVfjr5IO%2F0ALed8grOAI08f3vTx%2Fo8ZkpRAOQsnyStgBn86eXwypZZ2UGExgRpyzRd7zpmni9Y4KR0dL%2BUZMz3eWdOpBN2bTO5Gb6E13vu%2BUzMl3JbBYQ0GLTwVJpYCV9vNLrnum1w03UaF0eERRI8i01s4ngCaO1zhQwltfkxAY6pgGaifOjmni3TvE%2FmeZeOnLbRzLT5uBDwoHOcUyzoxi57x9f%2Ft%2BXQDul4fZ8nQvOSuU5JJ3mcCGpnTK0PWalkKKId%2B4GDjP5kdOhQehurCwe%2FrJ7XedfU1xoQkbYF2HErA6olYAAxTKPH2cYF7L%2BSuesu4Dz2We4FGaCFy7pVC81Ib1OS%2BwnppGh5pakanuoPP0Us766tvcrfLMCOXt55mNGpbhZ4Kya&X-Amz-Signature=9594e499f8ac4140717c810d4d432f6a7832081599fd23c9ae91b770c93ddc0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E5AW6SP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9E8ksJukMy1%2B7akkIVqKGUOK8lvwghYtiCB%2FK2sK%2BgAiBLYgkNKAYtuIlaQro0BgDVuKlPj8GLspQOJil2qyN0xSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0pnkYDuvnfOm%2FlT%2FKtwDNGzDgVIFXWzqh0Rbo9%2BUm2c26uDzhwcd9FijbK3QSwGOOgyLeiEMY6Vv99O0UpAwcfSGCj6DTyubgVWLJHkwib2koiCqWoaKMuIkiGIQRvDUnIcdR4ZMCWmRjbg0FxImiUz%2BqJqAJhn2WX1CBy%2FP4Eop%2F4ztywIRUIX1BDZGziIeRtzrI9dqzABkgVdvD8sw0W5iYMjfJGkw6ky90cG%2Bdb9NA1A%2BN6DUU%2Bcb4AgmvPLqSX3mhik1viIo%2FcWdDKTNRAyv7eP6Drs78KyIfPyPkNEjRbpnGR%2Fi66IzL%2BXG2dULwS%2Fh7tlf4LSFOG1fJDD6O0Wfph65QlX%2F03JJUJYm%2BWiW3y%2FO7Hldv6MJD1KBUVkSkjR468n8rI%2Bfa5fTwsDLe6IXQd1Ej%2BiOZ1qxLbIjJOH4wOUtiOWQ5JV1WEkMl%2BndPrz1BCNPYNk7LoN%2BAXSJ8RUbLe%2F0bQUS5BWYQIakVidtVfjr5IO%2F0ALed8grOAI08f3vTx%2Fo8ZkpRAOQsnyStgBn86eXwypZZ2UGExgRpyzRd7zpmni9Y4KR0dL%2BUZMz3eWdOpBN2bTO5Gb6E13vu%2BUzMl3JbBYQ0GLTwVJpYCV9vNLrnum1w03UaF0eERRI8i01s4ngCaO1zhQwltfkxAY6pgGaifOjmni3TvE%2FmeZeOnLbRzLT5uBDwoHOcUyzoxi57x9f%2Ft%2BXQDul4fZ8nQvOSuU5JJ3mcCGpnTK0PWalkKKId%2B4GDjP5kdOhQehurCwe%2FrJ7XedfU1xoQkbYF2HErA6olYAAxTKPH2cYF7L%2BSuesu4Dz2We4FGaCFy7pVC81Ib1OS%2BwnppGh5pakanuoPP0Us766tvcrfLMCOXt55mNGpbhZ4Kya&X-Amz-Signature=6d34e2626a73e20dd9f6c93371bcef546539a97b89991a16a95fe41704ed9ac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E5AW6SP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9E8ksJukMy1%2B7akkIVqKGUOK8lvwghYtiCB%2FK2sK%2BgAiBLYgkNKAYtuIlaQro0BgDVuKlPj8GLspQOJil2qyN0xSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0pnkYDuvnfOm%2FlT%2FKtwDNGzDgVIFXWzqh0Rbo9%2BUm2c26uDzhwcd9FijbK3QSwGOOgyLeiEMY6Vv99O0UpAwcfSGCj6DTyubgVWLJHkwib2koiCqWoaKMuIkiGIQRvDUnIcdR4ZMCWmRjbg0FxImiUz%2BqJqAJhn2WX1CBy%2FP4Eop%2F4ztywIRUIX1BDZGziIeRtzrI9dqzABkgVdvD8sw0W5iYMjfJGkw6ky90cG%2Bdb9NA1A%2BN6DUU%2Bcb4AgmvPLqSX3mhik1viIo%2FcWdDKTNRAyv7eP6Drs78KyIfPyPkNEjRbpnGR%2Fi66IzL%2BXG2dULwS%2Fh7tlf4LSFOG1fJDD6O0Wfph65QlX%2F03JJUJYm%2BWiW3y%2FO7Hldv6MJD1KBUVkSkjR468n8rI%2Bfa5fTwsDLe6IXQd1Ej%2BiOZ1qxLbIjJOH4wOUtiOWQ5JV1WEkMl%2BndPrz1BCNPYNk7LoN%2BAXSJ8RUbLe%2F0bQUS5BWYQIakVidtVfjr5IO%2F0ALed8grOAI08f3vTx%2Fo8ZkpRAOQsnyStgBn86eXwypZZ2UGExgRpyzRd7zpmni9Y4KR0dL%2BUZMz3eWdOpBN2bTO5Gb6E13vu%2BUzMl3JbBYQ0GLTwVJpYCV9vNLrnum1w03UaF0eERRI8i01s4ngCaO1zhQwltfkxAY6pgGaifOjmni3TvE%2FmeZeOnLbRzLT5uBDwoHOcUyzoxi57x9f%2Ft%2BXQDul4fZ8nQvOSuU5JJ3mcCGpnTK0PWalkKKId%2B4GDjP5kdOhQehurCwe%2FrJ7XedfU1xoQkbYF2HErA6olYAAxTKPH2cYF7L%2BSuesu4Dz2We4FGaCFy7pVC81Ib1OS%2BwnppGh5pakanuoPP0Us766tvcrfLMCOXt55mNGpbhZ4Kya&X-Amz-Signature=73fb76f772f2472fa8fe1ca6ee4c425220d7c4c73b7a79b857e407df2867ee40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

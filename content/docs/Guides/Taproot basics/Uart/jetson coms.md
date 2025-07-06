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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647UCIINQ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCb7RJYu9WoZwP0HWVOqZoEqvDs%2F6WbWXBzGv%2BD9P%2Bu9gIgdTNSAdUixZ2EQXrZ8VTUgAWK%2B57aHDyT%2FpSfIKopT%2FEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFTJyI55KsmjFoWzsSrcA%2BhmBYy9AXWI2HO%2FsVXxhtPXkYNZ8IhVTtZx9JNoKNAKEZQ7y3C4LhT74h8%2F0eNYzB0b6VSDFQBke2OggS8AgC%2F1iequ10tzh1BYL1RJgw5ustU0YnZTOIDCzYcTtVN0a55aJ7mxOcC9sBNFdoc58RcsjfNLism2XsIorW03cNZLDbXG2AFhXp70ssFhm3msifFjn9StIHMwXgBlJ8dqE2200WYUcFcoPEp%2Bpz%2FryB5l7k7bbHTHZN6KIkhztYZk374TPqlyXadIp%2BkQiod5bdRGdX5qzlcOrznvsx0i2mf7ORswLrdEOD9qqYov2PSfkfh7vHxVdY%2BFZEoCiW29fOEmfEtcLaH98%2BpaR4AFgDNkMZhcCW8EooYhy3BztRscb1nH0NmgFoDYV6Idllq7xbjTwQCUePDsrXgnVMBhm6LauciS0nKHMLrTFVQaQpwIi%2BgZ5BKiETp7KhAf0L6ggiueFoAPBLiE8UH9iq0yT327BixI3zYlFu%2F684lWbfA%2F4qrYbf3Rv4kGVQ1GpWx17qwHSo1Q8VL29LtzCFyH8xEQtmMPB6FJaaBzouHVPFga7gPzdWmZT8UeqRM%2FCFLpLFwPrHRXUQe%2BDq5hxUSc%2BYvveyMN5nfTOgZ3LGpoMJW9qcMGOqUBN9RbGHYKfsR7aVqnwJNAq4nN314CsPu9jLrS%2BrjbkzZBRv5YhyYJKMhsUGxhe3V4qf79YVIWb7hhji5T%2Fv9wLFLHjsWrtU0%2FZCbmVQSkFlCv3JuNj1P%2FefN0u8XEYm4wD4QOTWaI8vd2duvdCkoJUAoWXBghvsdp4vRMpXcGJ21f%2FeCwbAw1pJk9O4IBSM9T%2BTYfOXHCU4XCuwx9O5RIDdTUj8o9&X-Amz-Signature=dc67e3fa727534ce925054b3dcf48bb74c0e84489acb572c066c0e369aea257e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB5PB5FE%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIBqW5JQJ1NkgkwuUXc3eBJeGhNewSImVpuYzWKNdc7s6AiEA62QCBhl%2BZG%2Fyb%2BLI5HgQnsH7WBn6rrEs%2BgZfMO%2BaMDEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDLB%2BjYOXo5GC%2B%2FtrdSrcAwZjrOg8SnXPXnEGrw8tsbyOhX%2BNcdSksYSX7VtMGrSwYskReuiSuEpVriOhJquz92lHL7Ku7Qkw%2Fh30HC6c%2BU5pa5z7dts8%2BY6AXqi20qYUmA3Nv2dcAww7bzOLzk8FyJTKzG%2BLNqzz3viZt7nAZAf0Sp1JnGwP3JENCCn5AHEF91Wi1DOFKMG2vWNYgXsYjzwm4hda%2BaP6YJcLhRPrvIUkLmxSnp5Y9E4s6WVtnse8GodYElop51kKybippA1yhsd3qpj%2BgLJ4lzMPqfPus7aY89WkuvXSxOTN18aVzVSaxmPX%2BAyCEpi9cyHo1Jbl2h6Soi4AYpWO%2FXBjM02An7DIDkXnKf%2FyNN55yfC6OQdLshmgSdm%2BGq%2FvAkdnqv6CXjh2Lrm1%2BrEGAMbiWVfVPRoX5bF4brVcKI7OAPCmDAmM3XHVuCYBw3zFV3P3G%2BCfYN6uymwjuSaMZHp05trT%2FZY9gZmqIGj5l%2Fk6McyM6ndrLf3CppdeP2E0pA7krsuNvfHH8E8S9F4I0JaQC%2FT9RCcsYm%2Fkn8rbF4tJUydLhAYgEGQVSqZAEsdy%2B3265ThmqZg6KQGs3umNLRyC%2BUtuUW6R4Mga%2FwZmcIf%2BrqmDqiM2MWm2pWty5idtls9RMOvOqcMGOqUBmvZ5ZgV8IFNf6qs00i1i51u6CQLF9THIlRDJf950VKIZnL1xWWUsYKd1TXONPYvyMJZrG4UQHThc3tXtZi%2BLdqf5lgKePiWlp3WI84fGtZw91dX7rN9rDy1oyvOfcSBff022lGDZ%2Fj49bUlYOFTpelsailhMie7XgUJlj%2BV%2FKA1hvSL0WNytOiaqXdAPNwoWHeGHh77d9FgQJ7%2BV7w2PMDNrqj%2Bg&X-Amz-Signature=0340b8c589f013394585c7940cd8552849b145e4aeb7dd9c94680f5ee53a4125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB5PB5FE%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIBqW5JQJ1NkgkwuUXc3eBJeGhNewSImVpuYzWKNdc7s6AiEA62QCBhl%2BZG%2Fyb%2BLI5HgQnsH7WBn6rrEs%2BgZfMO%2BaMDEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDLB%2BjYOXo5GC%2B%2FtrdSrcAwZjrOg8SnXPXnEGrw8tsbyOhX%2BNcdSksYSX7VtMGrSwYskReuiSuEpVriOhJquz92lHL7Ku7Qkw%2Fh30HC6c%2BU5pa5z7dts8%2BY6AXqi20qYUmA3Nv2dcAww7bzOLzk8FyJTKzG%2BLNqzz3viZt7nAZAf0Sp1JnGwP3JENCCn5AHEF91Wi1DOFKMG2vWNYgXsYjzwm4hda%2BaP6YJcLhRPrvIUkLmxSnp5Y9E4s6WVtnse8GodYElop51kKybippA1yhsd3qpj%2BgLJ4lzMPqfPus7aY89WkuvXSxOTN18aVzVSaxmPX%2BAyCEpi9cyHo1Jbl2h6Soi4AYpWO%2FXBjM02An7DIDkXnKf%2FyNN55yfC6OQdLshmgSdm%2BGq%2FvAkdnqv6CXjh2Lrm1%2BrEGAMbiWVfVPRoX5bF4brVcKI7OAPCmDAmM3XHVuCYBw3zFV3P3G%2BCfYN6uymwjuSaMZHp05trT%2FZY9gZmqIGj5l%2Fk6McyM6ndrLf3CppdeP2E0pA7krsuNvfHH8E8S9F4I0JaQC%2FT9RCcsYm%2Fkn8rbF4tJUydLhAYgEGQVSqZAEsdy%2B3265ThmqZg6KQGs3umNLRyC%2BUtuUW6R4Mga%2FwZmcIf%2BrqmDqiM2MWm2pWty5idtls9RMOvOqcMGOqUBmvZ5ZgV8IFNf6qs00i1i51u6CQLF9THIlRDJf950VKIZnL1xWWUsYKd1TXONPYvyMJZrG4UQHThc3tXtZi%2BLdqf5lgKePiWlp3WI84fGtZw91dX7rN9rDy1oyvOfcSBff022lGDZ%2Fj49bUlYOFTpelsailhMie7XgUJlj%2BV%2FKA1hvSL0WNytOiaqXdAPNwoWHeGHh77d9FgQJ7%2BV7w2PMDNrqj%2Bg&X-Amz-Signature=15a4daa746da0f6e05905c443be6c7b1016c920699ec248538ce099e78c24df7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB5PB5FE%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIBqW5JQJ1NkgkwuUXc3eBJeGhNewSImVpuYzWKNdc7s6AiEA62QCBhl%2BZG%2Fyb%2BLI5HgQnsH7WBn6rrEs%2BgZfMO%2BaMDEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDLB%2BjYOXo5GC%2B%2FtrdSrcAwZjrOg8SnXPXnEGrw8tsbyOhX%2BNcdSksYSX7VtMGrSwYskReuiSuEpVriOhJquz92lHL7Ku7Qkw%2Fh30HC6c%2BU5pa5z7dts8%2BY6AXqi20qYUmA3Nv2dcAww7bzOLzk8FyJTKzG%2BLNqzz3viZt7nAZAf0Sp1JnGwP3JENCCn5AHEF91Wi1DOFKMG2vWNYgXsYjzwm4hda%2BaP6YJcLhRPrvIUkLmxSnp5Y9E4s6WVtnse8GodYElop51kKybippA1yhsd3qpj%2BgLJ4lzMPqfPus7aY89WkuvXSxOTN18aVzVSaxmPX%2BAyCEpi9cyHo1Jbl2h6Soi4AYpWO%2FXBjM02An7DIDkXnKf%2FyNN55yfC6OQdLshmgSdm%2BGq%2FvAkdnqv6CXjh2Lrm1%2BrEGAMbiWVfVPRoX5bF4brVcKI7OAPCmDAmM3XHVuCYBw3zFV3P3G%2BCfYN6uymwjuSaMZHp05trT%2FZY9gZmqIGj5l%2Fk6McyM6ndrLf3CppdeP2E0pA7krsuNvfHH8E8S9F4I0JaQC%2FT9RCcsYm%2Fkn8rbF4tJUydLhAYgEGQVSqZAEsdy%2B3265ThmqZg6KQGs3umNLRyC%2BUtuUW6R4Mga%2FwZmcIf%2BrqmDqiM2MWm2pWty5idtls9RMOvOqcMGOqUBmvZ5ZgV8IFNf6qs00i1i51u6CQLF9THIlRDJf950VKIZnL1xWWUsYKd1TXONPYvyMJZrG4UQHThc3tXtZi%2BLdqf5lgKePiWlp3WI84fGtZw91dX7rN9rDy1oyvOfcSBff022lGDZ%2Fj49bUlYOFTpelsailhMie7XgUJlj%2BV%2FKA1hvSL0WNytOiaqXdAPNwoWHeGHh77d9FgQJ7%2BV7w2PMDNrqj%2Bg&X-Amz-Signature=0220ee8cbadfec4a465147a50dda265cbb8ac32c08c19c430d551810bf480409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

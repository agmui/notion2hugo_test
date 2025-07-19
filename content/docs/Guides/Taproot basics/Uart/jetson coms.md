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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URHD52DP%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrNfGpUEObA2zfyLCxNyQWXeZjQQ2hto1FUUQ6kfsMjQIhAKcxFAzuPvz4hYT4RgoK0xJxaRRiUAH%2F5gveOL3bNXTbKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZd0xJlOIODUq%2BreMq3ANWvHKC6TfK7V6ax7Oc8tl6VkgoPR369DyNTEkDFxYdQiGjiNFfN2n0XhALU1k3k1BOSHwoZZXPRkcbZY2Vxgdra1UBSLWYY3PBte0DzEU%2FfQRE6Q6wEYG75uaqTCO0NN3rf%2BZ%2BcpJ5GVrBuIZddrllM8w3SuqNW4psvZmQLGK1W6yaw5XvkoMNnQyquHPIJRQ3HblJtB11x4C7uXpW5hcikpb4FZeD6KZ2mVMlezcKr36kcygpwu2BKi1m33R9H8iUDud3rJ4u42S7Lp6iKLU3HlCV7kmV5fAukcdmN5luFbWctKRoQWwgn20ixwZZBT9qA6d%2FRyPafonw1foT53yEfpJC6aIjpfaS%2B8V1Qaz%2FChlctQmH2FALffSLpVVLirLI5qnAeiBFYAXd6gE14eIyr1s3dcQbkKASAh5CpYerQ8vBaDrM9fA0oo3q6MTAfJ241Oq434Ksc0nRx6O0Y%2BGXEMRPyz4CYE%2Fq94CrHR78OESyH%2FQYZ9CUfw3AVoCmvEDw%2BbN5E%2BxaLlPam76SGvb4ChVu5quCmnIYpku3LFXKmbro8CGTrtS7I4iVae%2FjajW8pY3%2FLb%2FqA2280nqw66I1r6cXYpiiIBv5aA0hsHHpT1Lr2fEdgDtLNTyofzCu5%2B3DBjqkAUDCh08WIrl8lgmKBCbBRAZBQqlvPx3f1Bug2f77cFTjWYR4Kq%2BvVC9ke8JBPV%2BQ%2BpWyYhFa%2BwTUiPQFXdaUdkad64nQaELG5LYWKR%2F77o26OhIP1w6mr%2B3sDBA0WSJx31d9lsLfOkQwIdHJ8DbolcpwDhIb%2Fcou4CS3NvV3wu%2FriFVpLs100WF2VVXI9ok4LahY%2BtH9MKWpS7fZCQgGY%2B72CkTs&X-Amz-Signature=8d2d6eeebebd0b27dbe1b34c0232c8de6e59f570f4583543d84ece7c133b1d80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4Q4C5JH%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExIuHGLWoqa9l7VIZeK7Efq0TbdKYfh8IwufNXKm20%2FAiEAnOfpmOd7tuAhDJTUEU%2FL5tdKgerxkhI15CuvnbB8IkUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIH8imhS%2FTPN3z2ySrcA0NPzs7UvFjA9GhK7pUZeMIC3Wm25Q8EXmPW9b%2B%2BixESSO1uwVA9ZpQCiFjGzmEd%2FuXWU3vNfxDgzHKoj%2FAPBBfMe4oimU1dzc5YcCwqbuUwEpFG7qGHFHePaz4Fyz%2BsFN8MrMpd%2B3MsZZvjpa%2BDI43p%2B0MTpynV3iYYsBzxoZZl89eA7cHOh8zCKSkJEilQw%2B%2BcP7zI%2FXFSMDM00xE7EbmW8C6LQHJmBVu8B0PpNzaAzI5infdFSNgnWviuWG%2BB%2FihvkPz8CD3mFtLO53YsZeYYdQPr4JgKLjLo4twCs4SCamd9Yw0ZD5qDTDCPkh2zpHLvnSHoksZem4hQlTBXLxtftlfpvX9s1XgnSYJw%2FXRedPx8XLMzkZg9aTIOgm8SC2PC6mGxkSLeXOveqI8w7U1Lx%2BgwErOg60JAlC3wZHlSSFp%2FgWKbYlblFB3QDMBGkB9G%2B%2B%2BlUUQUvkoyNa4T1bv9KTufQlCto4npv6KvQNbrVcK%2BgAM4zBTa%2FH%2BEROTvfVwRq8XytYvcKxcJm%2B0XV21Bi7nJAT91gMQDrwWYUOQgNFLdS91ie13GZNDLyLaFl%2F7uZXsY7SeXoH475ERj4RHvqyQR3mmLZUsG3Ia%2F374s5vRfV9LgcQTLArCKMKPo7cMGOqUBJKYNkf5b9214w9mZ86nSzi%2BPPN%2BF8R4r%2FD%2BUoRQ6QmdaCJ0nP6hDKaSr6Z4pY%2Fd96ynll25Jzc%2Fr7peo2gYYbF3dDomqbhIzXjlao5ynAtVIR%2Fe21OeMgg7lcEOy1SN4lCkd1QFLqUL7u3JxWy7W0JwMWirNVVCq5aS3%2BgV%2BJ402m4m0WkRtHsmmr1ZyxuTIDhBgyGiLDWn2P%2FWVicqBw4GjCb3d&X-Amz-Signature=f64a85e71c13c4a3b0304ef6e6c634365be6c936c6d5ba1c597989f38375fd78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4Q4C5JH%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExIuHGLWoqa9l7VIZeK7Efq0TbdKYfh8IwufNXKm20%2FAiEAnOfpmOd7tuAhDJTUEU%2FL5tdKgerxkhI15CuvnbB8IkUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIH8imhS%2FTPN3z2ySrcA0NPzs7UvFjA9GhK7pUZeMIC3Wm25Q8EXmPW9b%2B%2BixESSO1uwVA9ZpQCiFjGzmEd%2FuXWU3vNfxDgzHKoj%2FAPBBfMe4oimU1dzc5YcCwqbuUwEpFG7qGHFHePaz4Fyz%2BsFN8MrMpd%2B3MsZZvjpa%2BDI43p%2B0MTpynV3iYYsBzxoZZl89eA7cHOh8zCKSkJEilQw%2B%2BcP7zI%2FXFSMDM00xE7EbmW8C6LQHJmBVu8B0PpNzaAzI5infdFSNgnWviuWG%2BB%2FihvkPz8CD3mFtLO53YsZeYYdQPr4JgKLjLo4twCs4SCamd9Yw0ZD5qDTDCPkh2zpHLvnSHoksZem4hQlTBXLxtftlfpvX9s1XgnSYJw%2FXRedPx8XLMzkZg9aTIOgm8SC2PC6mGxkSLeXOveqI8w7U1Lx%2BgwErOg60JAlC3wZHlSSFp%2FgWKbYlblFB3QDMBGkB9G%2B%2B%2BlUUQUvkoyNa4T1bv9KTufQlCto4npv6KvQNbrVcK%2BgAM4zBTa%2FH%2BEROTvfVwRq8XytYvcKxcJm%2B0XV21Bi7nJAT91gMQDrwWYUOQgNFLdS91ie13GZNDLyLaFl%2F7uZXsY7SeXoH475ERj4RHvqyQR3mmLZUsG3Ia%2F374s5vRfV9LgcQTLArCKMKPo7cMGOqUBJKYNkf5b9214w9mZ86nSzi%2BPPN%2BF8R4r%2FD%2BUoRQ6QmdaCJ0nP6hDKaSr6Z4pY%2Fd96ynll25Jzc%2Fr7peo2gYYbF3dDomqbhIzXjlao5ynAtVIR%2Fe21OeMgg7lcEOy1SN4lCkd1QFLqUL7u3JxWy7W0JwMWirNVVCq5aS3%2BgV%2BJ402m4m0WkRtHsmmr1ZyxuTIDhBgyGiLDWn2P%2FWVicqBw4GjCb3d&X-Amz-Signature=50e5605fbe17f5603af678432d506ae75b51626185583159f649e083d206b0b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4Q4C5JH%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExIuHGLWoqa9l7VIZeK7Efq0TbdKYfh8IwufNXKm20%2FAiEAnOfpmOd7tuAhDJTUEU%2FL5tdKgerxkhI15CuvnbB8IkUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIH8imhS%2FTPN3z2ySrcA0NPzs7UvFjA9GhK7pUZeMIC3Wm25Q8EXmPW9b%2B%2BixESSO1uwVA9ZpQCiFjGzmEd%2FuXWU3vNfxDgzHKoj%2FAPBBfMe4oimU1dzc5YcCwqbuUwEpFG7qGHFHePaz4Fyz%2BsFN8MrMpd%2B3MsZZvjpa%2BDI43p%2B0MTpynV3iYYsBzxoZZl89eA7cHOh8zCKSkJEilQw%2B%2BcP7zI%2FXFSMDM00xE7EbmW8C6LQHJmBVu8B0PpNzaAzI5infdFSNgnWviuWG%2BB%2FihvkPz8CD3mFtLO53YsZeYYdQPr4JgKLjLo4twCs4SCamd9Yw0ZD5qDTDCPkh2zpHLvnSHoksZem4hQlTBXLxtftlfpvX9s1XgnSYJw%2FXRedPx8XLMzkZg9aTIOgm8SC2PC6mGxkSLeXOveqI8w7U1Lx%2BgwErOg60JAlC3wZHlSSFp%2FgWKbYlblFB3QDMBGkB9G%2B%2B%2BlUUQUvkoyNa4T1bv9KTufQlCto4npv6KvQNbrVcK%2BgAM4zBTa%2FH%2BEROTvfVwRq8XytYvcKxcJm%2B0XV21Bi7nJAT91gMQDrwWYUOQgNFLdS91ie13GZNDLyLaFl%2F7uZXsY7SeXoH475ERj4RHvqyQR3mmLZUsG3Ia%2F374s5vRfV9LgcQTLArCKMKPo7cMGOqUBJKYNkf5b9214w9mZ86nSzi%2BPPN%2BF8R4r%2FD%2BUoRQ6QmdaCJ0nP6hDKaSr6Z4pY%2Fd96ynll25Jzc%2Fr7peo2gYYbF3dDomqbhIzXjlao5ynAtVIR%2Fe21OeMgg7lcEOy1SN4lCkd1QFLqUL7u3JxWy7W0JwMWirNVVCq5aS3%2BgV%2BJ402m4m0WkRtHsmmr1ZyxuTIDhBgyGiLDWn2P%2FWVicqBw4GjCb3d&X-Amz-Signature=78d8d3a9ef69f9793f0659b108b12821df7c4e82b0f4da0366818538a95a3540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

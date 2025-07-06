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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQP5CZUU%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDw4SavYg2hQ%2FU7dcRPQonI5JQBCU0HVGyQ%2BKWUqJZiHwIgFDWWpHhnHMvt%2Bw%2FrR0zqNkJ%2FZe9RuMT%2FaXd63D5rPJwq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDEbG0ZzOfv%2Bjbu7BcSrcA928RfQRYBuHdQWgBePANJO9lBYBNFe3jCxrPmS7kPv5iAy3oxRzwA1OyfUrQ3e%2FAXTHxAt1Dqby9sA4OBleaYWXF0NsdkViscbxJA4e6hZHQql6k3n5LBl9JEczMwF97J4kBkM6v8FJAYhFKTkVvH0EWHK8%2BnNtI%2Fx%2Fmt4wburTu4v5bdolN4EdBz%2FfGUgpGy1%2F1e%2B0j5c8Cl8dYZeTk7xB95zuHj%2F%2FYyWA8QgN5I8mJ62mS4scbZGWRiU7OE7n%2BULQinyyUs2sfsjDUdsBXkIv4cYwLIK84yWB0DWxsn4nD1z%2Fs9jtNNZCNKlx9TgM8gOkfEL5S0DF0dKdzbv6j7iup3oTJO2sbRSnkGIBr1cVikKbvJZ%2BmQfZOfEAdmcmKcbg%2Fs4uTClBqQ%2BlaN01OH5H7oG81eQhUnV4k9TmN8NYJ2Z2hn4n5IUb65UEFsXdrvjt94TQke8PDGSb63JOL8taU19iSoasT%2BloDFU3%2Buthfk27b%2Bh4PiBDQaTG1lOFRmo0xi4Tec1byb15RADHPO0I34WjlUY5DQ0XKXW7thMhuOaFRmzscZFp80jYOc85If1%2BmRBAON5CcGWNRZCxFpq7PzpMhvPSN5YJdPwuKhGRnTswNMn8SyITwK2TMM2Wp8MGOqUB%2B0CvFbAABuharyWK5uiM%2B6wV8uINIRsgOx1Kc8tfyvv7qEKiUDd4GzvfsK0HBjUNiHlP50TK9MT07PYxveu4j9ISWZcti1SL18%2FawCOPULo6F2S6coLV0g%2Fs67yMpKmBonFGc0zI5DI%2BmQsyiqydQnch1b5%2Bo6PCdIeeyY15Bb7lVbf1ueCkshE8qUrh5LwJw1DRKdzr%2FFBVRkia4fKf%2B7vjnjCl&X-Amz-Signature=06cb28b91d3ab71b908279081b5e5b0f3c1883babaff06ecc7a4943e9a2321ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLWHRUDS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCK4rZggFFVHH%2F9n5zR6UVzRMHSs7yACC%2FdhsLDdO3VdwIhAPdSGqYAyZXla3W%2B%2Bvdp2wnrXEninoTSqD4bG0kIQ65OKv8DCFUQABoMNjM3NDIzMTgzODA1Igz%2Ba6vmD1Q1iTvM3YMq3AO1HdfXv4PlNnfrlZnS6V9ZkUzUDV08eGdtVPnB1T5s2YO8EAF7n5KwE4y1xTFjCt8Z%2BE7GMWlC07ducSf9hXqXEXwi2Rb91X95gM7aIJKLYYUp1yAekotTjN3LMRPIPIeBQNdmCdTzFCGI%2FwZdwwSBk%2Ftq3PafruDO8NcRgK38kUgeVbd%2F%2BPYbrTG5sXmlmOdYDdfEp0JXFrLdw20N2ebFMrueF2hCADXKmibiY53oUH3CMQtMeG2ad3JVWWYO0Jp%2BuJma5BiMkeXI5PYLBM3TseS%2Ba6MTxglmk63JZARwbWGJqhMT6UFpkh4jfqgbPX6rNZD8JkZRpJ6UllwHPAvSQCRoJS13Ab1bktjXzPnFPf8MNWD4Oxyi3POaKqtgUi49MyZGnXcJBsV7LZdxw%2FcWHyI1VBv2k6pNzCpBmrT8iT1B0bYDhm%2BedghJQxE%2BFyLe8f5hJSoRU1aP4FyxFMIWlvggSmlY8C3oHa1YqTX2wCsU%2FdaeEIEmHb4cGjSP4%2B6QsjXG%2Bxo0ZshSj58a%2Bra5uKfT0N%2FWY%2Fhh6C62blmX58n1Eq9xQJWC44nzB7AWtHq%2Fy7WDtkJ5RIJX%2B4mfrQGODQabRAW%2F76oc5%2Bz5FfvXFGhzYCROIOeZCiudGDDT8qfDBjqkAbxzpjnDKWahpk55HzwrLpQFtE2L3ir379JyOhkRu%2BpVW1HlfRGvDNbplrYmZy8XmPrqa5aCXyiC%2FRhRs40E4gWHCwKbSlMTxLGDkogrbOOwb17oL5iSymyxFbEqwdPvar0pO3tBX%2BRHzF1P%2F2YuEHucJaL14yydzlHi95wwsQnZQ3zIU41Qpi6yGKiqwcIJ9KlyTJYp2aLF1b84b%2FFuXwBra3bc&X-Amz-Signature=5afd179af8f1db1d28d11ff41954905abc0d935717723195b53d6c68ceeb79c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLWHRUDS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCK4rZggFFVHH%2F9n5zR6UVzRMHSs7yACC%2FdhsLDdO3VdwIhAPdSGqYAyZXla3W%2B%2Bvdp2wnrXEninoTSqD4bG0kIQ65OKv8DCFUQABoMNjM3NDIzMTgzODA1Igz%2Ba6vmD1Q1iTvM3YMq3AO1HdfXv4PlNnfrlZnS6V9ZkUzUDV08eGdtVPnB1T5s2YO8EAF7n5KwE4y1xTFjCt8Z%2BE7GMWlC07ducSf9hXqXEXwi2Rb91X95gM7aIJKLYYUp1yAekotTjN3LMRPIPIeBQNdmCdTzFCGI%2FwZdwwSBk%2Ftq3PafruDO8NcRgK38kUgeVbd%2F%2BPYbrTG5sXmlmOdYDdfEp0JXFrLdw20N2ebFMrueF2hCADXKmibiY53oUH3CMQtMeG2ad3JVWWYO0Jp%2BuJma5BiMkeXI5PYLBM3TseS%2Ba6MTxglmk63JZARwbWGJqhMT6UFpkh4jfqgbPX6rNZD8JkZRpJ6UllwHPAvSQCRoJS13Ab1bktjXzPnFPf8MNWD4Oxyi3POaKqtgUi49MyZGnXcJBsV7LZdxw%2FcWHyI1VBv2k6pNzCpBmrT8iT1B0bYDhm%2BedghJQxE%2BFyLe8f5hJSoRU1aP4FyxFMIWlvggSmlY8C3oHa1YqTX2wCsU%2FdaeEIEmHb4cGjSP4%2B6QsjXG%2Bxo0ZshSj58a%2Bra5uKfT0N%2FWY%2Fhh6C62blmX58n1Eq9xQJWC44nzB7AWtHq%2Fy7WDtkJ5RIJX%2B4mfrQGODQabRAW%2F76oc5%2Bz5FfvXFGhzYCROIOeZCiudGDDT8qfDBjqkAbxzpjnDKWahpk55HzwrLpQFtE2L3ir379JyOhkRu%2BpVW1HlfRGvDNbplrYmZy8XmPrqa5aCXyiC%2FRhRs40E4gWHCwKbSlMTxLGDkogrbOOwb17oL5iSymyxFbEqwdPvar0pO3tBX%2BRHzF1P%2F2YuEHucJaL14yydzlHi95wwsQnZQ3zIU41Qpi6yGKiqwcIJ9KlyTJYp2aLF1b84b%2FFuXwBra3bc&X-Amz-Signature=529239395820b33a0c5cf2f79a876b081434b892063481ae6d8f0cba21f6effd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLWHRUDS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCK4rZggFFVHH%2F9n5zR6UVzRMHSs7yACC%2FdhsLDdO3VdwIhAPdSGqYAyZXla3W%2B%2Bvdp2wnrXEninoTSqD4bG0kIQ65OKv8DCFUQABoMNjM3NDIzMTgzODA1Igz%2Ba6vmD1Q1iTvM3YMq3AO1HdfXv4PlNnfrlZnS6V9ZkUzUDV08eGdtVPnB1T5s2YO8EAF7n5KwE4y1xTFjCt8Z%2BE7GMWlC07ducSf9hXqXEXwi2Rb91X95gM7aIJKLYYUp1yAekotTjN3LMRPIPIeBQNdmCdTzFCGI%2FwZdwwSBk%2Ftq3PafruDO8NcRgK38kUgeVbd%2F%2BPYbrTG5sXmlmOdYDdfEp0JXFrLdw20N2ebFMrueF2hCADXKmibiY53oUH3CMQtMeG2ad3JVWWYO0Jp%2BuJma5BiMkeXI5PYLBM3TseS%2Ba6MTxglmk63JZARwbWGJqhMT6UFpkh4jfqgbPX6rNZD8JkZRpJ6UllwHPAvSQCRoJS13Ab1bktjXzPnFPf8MNWD4Oxyi3POaKqtgUi49MyZGnXcJBsV7LZdxw%2FcWHyI1VBv2k6pNzCpBmrT8iT1B0bYDhm%2BedghJQxE%2BFyLe8f5hJSoRU1aP4FyxFMIWlvggSmlY8C3oHa1YqTX2wCsU%2FdaeEIEmHb4cGjSP4%2B6QsjXG%2Bxo0ZshSj58a%2Bra5uKfT0N%2FWY%2Fhh6C62blmX58n1Eq9xQJWC44nzB7AWtHq%2Fy7WDtkJ5RIJX%2B4mfrQGODQabRAW%2F76oc5%2Bz5FfvXFGhzYCROIOeZCiudGDDT8qfDBjqkAbxzpjnDKWahpk55HzwrLpQFtE2L3ir379JyOhkRu%2BpVW1HlfRGvDNbplrYmZy8XmPrqa5aCXyiC%2FRhRs40E4gWHCwKbSlMTxLGDkogrbOOwb17oL5iSymyxFbEqwdPvar0pO3tBX%2BRHzF1P%2F2YuEHucJaL14yydzlHi95wwsQnZQ3zIU41Qpi6yGKiqwcIJ9KlyTJYp2aLF1b84b%2FFuXwBra3bc&X-Amz-Signature=87d49592759ab19848c2178926b07211cf7130227e85bf02e4436627d01acf5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

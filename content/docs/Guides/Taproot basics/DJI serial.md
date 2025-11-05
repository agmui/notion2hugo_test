---
sys:
  pageId: "7bcc958e-003c-4e25-bb33-06c403970c00"
  createdTime: "2024-06-24T23:53:00.000Z"
  lastEditedTime: "2025-08-11T17:33:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/DJI serial.md"
title: "DJI serial"
date: "2025-08-11T17:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 134
toc: false
icon: ""
---

This guide goes though adding UART within Taproot 

---

## Data format

> Official spec: [https://rm-static.djicdn.com/tem/17348/RoboMaster%20Referee%20System%20Serial%20Port%20Protocol%20Appendix%20V1.6%EF%BC%8820231124%EF%BC%89.pdf#%5B%7B%22num%22%3A34%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54%2C776%2C0%5D](https://rm-static.djicdn.com/tem/17348/RoboMaster%20Referee%20System%20Serial%20Port%20Protocol%20Appendix%20V1.6%EF%BC%8820231124%EF%BC%89.pdf#%5B%7B%22num%22%3A34%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54%2C776%2C0%5D)

Taproot provides a class call `DJISerial` in `taproot/src/tap/communication/serial/dji_serial.hpp`

to use it you just extend the class and implement `messageReceiveCallback()`

the class expects your data to follow this format:

{{< table "table-striped table-hover table-responsive" >}}

| **Byte Number** | **Description**                                            |
| --------------- | ---------------------------------------------------------- |
| 0               | Frame Head Byte (0xA5)                                     |
| 1               | Frame Data Length (Least significant Byte)                 |
| 2               | Frame Data Length (Most significant Byte)                  |
| 3               | Frame Sequence Number                                      |
| 4               | CRC8 of the frame, (bytes 0 - 3)                           |
| 5               | Message Type (Least significant Byte)                      |
| 6               | Message Type (Most significant Byte)                       |
| Data Length     | Body                                                       |
| …               | …                                                          |
| 7 + Data Length | CRC16 (Least significant Byte) (bytes 0 - 6 + Data Length) |
| 8 + Data Length | CRC16 (Most significant Byte)                              |

{{< /table >}}


here is the struct implementation in taproot if it makes it more clear:

```cpp "1-6","9-9","10-12"
    struct FrameHeader {
        uint8_t headByte;
        uint16_t dataLength;
        uint8_t seq;
        uint8_t CRC8;
    };
    
    struct SerialMessage {
        FrameHeader header;
        uint16_t messageType;
        uint8_t data[DATA_SIZE];
        uint16_t CRC16;
    };
```

Lets go though each field and explain them one by one:

- Frame Head (`headByte`)
	- DJI serial messages always start with the `0xA5` byte. This way we know where the start of a frame is.

	<details>
	  <summary>{{< markdownify >}}Why do we need a start byte?{{< /markdownify >}}</summary>
	  
	Say the Jetson turns on first and the type-c second. Then the Jetson is already streaming stuff over. By the time the type-c turns on we don’t know where the start of the message is. If we were to read a single byte from UART with `drivers->uart.read()` who knows what part of the message we are at. This is why we need a byte to indicate the start of the message. We would “dump” all the bytes before the `0xA5` and then we can start interpreting the bytes after.
	
	</details>
	
	
	- [What if there is an ](/7bcc958e003c4e25bb3306c403970c00#223da3bc629780f6b80cffa31fc800b3)[`0xA5`](/7bcc958e003c4e25bb3306c403970c00#223da3bc629780f6b80cffa31fc800b3)[ in my message body???](/7bcc958e003c4e25bb3306c403970c00#223da3bc629780f6b80cffa31fc800b3)
- Frame Data Length (`dataLength`)
	- stores how long the Body (`data`) section of the message will be.
	- NOTE: since we are using little endian the Least significant Byte comes first
- Frame Sequence Number (`seq`)
	- enumerates the messages, can be set to `0` if you don’t care about using the sequence number

	<details>
	  <summary>{{< markdownify >}}What is the point of sequence numbers?{{< /markdownify >}}</summary>
	  
	Say I send three messages. Then the message sequence would be 0, 1, 2 for each message respectively
	The message sequence is designed so that if you drop a message we can easily tell which message it is. (EX: if we receive message 0, 1, 2, 4 then we know we dropped message 3)
	For more information on using sequence number search up TCP. 
	
	</details>
	
	
- CRC8
	- Checks if the `Frame Header` is “valid”
	- NOTE: if `0xA5` (the start byte) is within in the body of the message the CRC check will make sure it is a valid frame alignment.

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBTA7522%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQD5sQZcAEtHA4lhyyLfS8AjI03xiZTb8M44CFAdeBi97wIfLeBeRazMuJsn92Us3c7ArU843c905gDoTEmc%2BVr4vCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMxtj%2FFddbcQ04K6gvKtwD4h7V3AYMKHlFspkEORYEtsnyphuAw6kXKz%2B2XpguvEP9P2xhi0C9tCg8jmJojBqjRlVuo8NeFoOmiALieFrnIj6ByLXEheDymF40FQZ575Gu8JF0pFOjAgpWh%2FSZxdgLiUW%2BS%2F77k52tkH7QDorhjBq%2Ftx3YXk3fNuKlm6z0Newsgutkrss%2Bazo76254Ed9aSPf1NcxGDn2B9%2FIvwkneqhThXKpGZRW8JC4sYjRhvlijY0t7S6A8QfgG3txfsMddeu2AcwuAMQHr3XTEmYLNnyW7qMqh8jIJ0bZdXnUJF2X8HELp4o0qA2Jl8eJIb4c%2BsMGhOVs%2BfA0%2BqF%2Fz6eMjsOOYj7wtUvVl%2B6Rl7CBgUxj%2BXX7pN1IntXJ0EM92hOyTUxXH6GVrd3lhtpQsZuTB0FSjLVewWFrCPTcR41wf4nijkTeOla130a1ABJEGCp8aRmCa2oPXnaXk4A8kxbiIqyMTHnvqNtbnEyXUJv0Tzai%2Far1ct5WUlbviJZ%2BHH4Z%2B14rJVQLsNY2FUTyHZGBVdPSg0AVwwyVKa%2F8HsjCWv4E9x2aLAq3O2aBi4KR9Bhmh1HQKVfN6%2FGc5%2F%2BqrsCXN0gEXb%2BNW8B6M92PEwGaU2MlTgfh2H6wMa0fC8zww8d2pyAY6pgEMLtPSnLDTJ96trsR9OSN2CU11iPEW7XpInySk5v3JQA8s82P%2F%2FItJnVuPPgfW0CA6lAPRTFf7%2BKprc4zEuWj7i1Keim6GMCO3Cn%2FSonShjXM1CI4nonbwRnXhY96a6iaxoHFgxPI%2BDPfU7yu%2FjI7rWWSSd7nzNhkqiuU%2Fy3ca%2Fefv%2FglgIRNvathGXw69F9kiyph%2B7BkAegiL%2BTn3aZjlZQX0cvPU&X-Amz-Signature=0858c06986225b5771c0eefa5cbe0a68c938c5c753a4574f838785712ede5080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZFUEESI%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKwyWCV%2FgzRt%2FZDvxQG132Y%2BWHLiBxeoSJINRJglYDWAiEA2qNUe35ClYXVy1exQrmCm%2BtrWFVj7CL3X3glj6UIYBcq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKdC1EhjjM%2F5YFKF8CrcA4ZDYl8QLZA3ggIB3iWHc62HLPfizZz%2FekLx8fwak%2BBUzxeZDS9U5iaHr0tOPlMit7KsuC2Jg1zOB%2BQQRejCjJbTu2OdRMCM51qxhG7RsUvd9Lnasjp8WspRdF%2FL4FSBr70OumiX5dOwOVU1UGXKY6k2q0kIrV4rxB%2FMU5KVVl08OEYTJjkxen8x3uXqnvo%2Fo%2BHSFjmYM0UIbZ7iHEua8ZCNOV4SG6yjVTb1zid63YNaZOMuQwV83V%2F2%2F9ylJY%2FLo5fp3g7whwuNuDqPOp37WyKP4XhmImY0yOzh9cGYQ44wEOWpa%2B5sM3SLyDdI48ZzTCTarWV9ISWRaVb%2F6D1yuAOkeVm%2FCw8tLavEFxHr8o01oo9phUZ4hq0kxt8ItcxuSlok7kAs%2BCsBvbnMny2Ch%2FRibjDWBTqU%2BwQ90w4jtKmswVb5PSCS3c2Di5t%2BmOc3zXj5bus9KK4BNNOKP9Fv2BGNOkg9TVMUCq3Y1OkWn0qNeWrjvg%2FzgJ7HXRosy2Zl3y0Qehd%2BKE1itcweZaegpqa0AgarvlGCvkj5lSznwkBNOG0iqQBSbMsLXY%2BkWvvS0llYLnQwmjZ39DxrZmrp7B4qFQzfD0ggnE9VURu%2FeUBQKQycfF4rqUl6LJNjMJXdqcgGOqUBUFhuNFKAtTHJYz2oeCU2EZUMyEHyIToHfxbz5%2BRCgPXsUYXAno5KEEYDnlM%2Fe6FT4BGRebbSgE3nojgvAchpluXlJsv48ebKRQ09gmtkGf5%2FTNl93Y41C3bJeJNtO0EsMq1buRtN6cPCSQmdUxjNHiYwfu1qICkRpvqAoirehpynetF4%2FHg2CpwP13K7V1dTUJGFKo%2FrgEgNobfdWOeX0ljl2lVE&X-Amz-Signature=43694d9474072b0a8f8da80513a3e412f27576c1b8bd498b88741ac3bdd3a20c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
	</details>
	
	
- Message Type (`messageType`)
	- stores what kind of message is coming in, can be set to `0` if you don’t care about message type

	<details>
	  <summary>{{< markdownify >}}Example:{{< /markdownify >}}</summary>
	  
	say you had a move chassis and a move gimbal message. Then you could have move chassis on Message Type 1 and move gimbal on Message Type 2.
	This can be done with Enums:
	
	```cpp
	enum UartMessage : uint8_t{
	    MOVE_CHASSIS = 0,
	    MOVE_GIMBAL = 1,
	    ...
	};
	```
	
	</details>
	
	
- Body (`data`)
	- Stores the literal bytes of the the message
	- NOTE: it has a max of 1024 bytes specified in [DJISerial](/7bcc958e003c4e25bb3306c403970c00#223da3bc629780b4b161ede13cae10da) `SERIAL_RX_BUFF_SIZE` variable
- CRC16
	- check if the **whole message** is “valid”
	- [what is CRC?](/7bcc958e003c4e25bb3306c403970c00#223da3bc6297802f8840c262f83d573e)

## Example

lets take the [“hello” message from earlier in the guide](/7bcc958e003c4e25bb3306c403970c00#223da3bc6297800a9838c276de574838) and put it in the DJI serial format

- “hello” takes 5 bytes so Frame Data Length = 5
- Sequence number will be set to 0
- CRC8: `0xF6 = crc8_func(0xA5, 0x05, 0x00, 0x00)`  Here is the full spec for the DJI CRC if you are curious: [https://rm-static.djicdn.com/tem/17348/RoboMaster%20Referee%20System%20Serial%20Port%20Protocol%20Appendix%20V1.6%EF%BC%8820231124%EF%BC%89.pdf#%5B%7B%22num%22%3A127%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54%2C776%2C0%5D](https://rm-static.djicdn.com/tem/17348/RoboMaster%20Referee%20System%20Serial%20Port%20Protocol%20Appendix%20V1.6%EF%BC%8820231124%EF%BC%89.pdf#%5B%7B%22num%22%3A127%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54%2C776%2C0%5D)
- Message Type will be set to 0
- body will equal = “hello”
- CRC16: `0x56, 0x34 = crc16_func(0xA5, 0x05, 0x00, 0x00, 0xF6, 0x00, 0x00, 0x68, 0x65, 0x6C, 0x6F)`Here is the full spec for the DJI CRC if you are curious: [https://rm-static.djicdn.com/tem/17348/RoboMaster%20Referee%20System%20Serial%20Port%20Protocol%20Appendix%20V1.6%EF%BC%8820231124%EF%BC%89.pdf#%5B%7B%22num%22%3A127%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54%2C776%2C0%5D](https://rm-static.djicdn.com/tem/17348/RoboMaster%20Referee%20System%20Serial%20Port%20Protocol%20Appendix%20V1.6%EF%BC%8820231124%EF%BC%89.pdf#%5B%7B%22num%22%3A127%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54%2C776%2C0%5D)

| **Byte Number** | **Description**                            | “hello” message value |
| --------------- | ------------------------------------------ | --------------------- |
| 0               | Frame Head Byte (`0xA5`)                   | `0xA5`                |
| 1               | Frame Data Length (Least significant Byte) | `0x05`                |
| 2               | Frame Data Length (Most significant Byte)  | `0x00`                |
| 3               | Frame Sequence Number                      | `0x00`                |
| 4               | CRC8 of the frame, (bytes 0 - 3)           | `0xF6`                |
| 5               | Message Type (Least significant Byte)      | `0x00`                |
| 6               | Message Type (Most significant Byte)       | `0x00`                |
| 7               | Body                                       | `0x68` (`h`)          |
| 8               | …                                          | `0x65` (`e`)          |
| 9               | …                                          | `0x6C` (`l`)          |
| 10              | …                                          | `0x6C` (`l`)          |
| 11              | …                                          | `0x6F` (`o`)          |
| 12 = 7+5        | CRC16 (Least significant Byte)             | `0x56`                |
| 13 = 8+5        | CRC16 (Most significant Byte)              | `0x34`                |

The byte string to send this out comes out to being:

```cpp
0xA5 0x05 0x00 0x00 0xF6 0x00 0x00 0x68 0x65 0x6C 0x6C 0x6F 0x56 0x34
```

## Software implementation

### Jetson software with DJI serial 

install the [crc library](https://nicoretti.github.io/crc/) with `pip` to calculate CRC

```python
pip install crc
```

python code:

```python
import serial
from crc import Calculator, Configuration

# Robomaster's MAXIM_DOW(the init value is different from Crc8.MAXIM_DOW)
RM_MAXIM_DOW = Configuration(
    width=8,
    polynomial=0x31,
    init_value=0XFF,
    final_xor_value=0,
    reverse_input=True,
    reverse_output=True,
)

# Robomaster's Kermit(the init value is different than Crc16.KERMIT)
RM_KERMIT = Configuration(
    width=16,
    polynomial=0x1021,
    init_value=0xFFFF,
    final_xor_value=0x0000,
    reverse_input=True,
    reverse_output=True,
)


crc8_calculator = Calculator(RM_MAXIM_DOW, optimized=True)  # Robomasters uses MAXIM_DOW for CRC8
crc16_calculator = Calculator(RM_KERMIT, optimized=True)  # Robomasters uses KERMIT for CRC16


def format_bytes(msg):
    return " ".join(f"0x{b:02x}" for b in list(msg))

def send(ser, data: bytes):
    start_of_frame = b'\xa5'
    data_len = len(data).to_bytes(2, byteorder='little') # converts data length into bytes and in little endian format
    frame_sequence_num = b'\x00'

    frame_header = start_of_frame + data_len + frame_sequence_num # creates frame header

    crc8 = crc8_calculator.checksum(frame_header).to_bytes(1, byteorder='little') # calculates crc8

    msg_type = bytes([0x00, 0x00]) # sets message type

    full_packet = frame_header + crc8 + msg_type + data # creates full packet
    crc16 = crc16_calculator.checksum(full_packet).to_bytes(2, byteorder='little') # calculates crc16

    msg = full_packet + crc16 # creates message to send

    print(format_bytes(msg)) # prints formated result

    ser.write(msg) # sends message to the type-c




ser = serial.Serial()
ser.port = '/dev/ttyUSB0'               # selects the port
ser.baudrate = 115200                   # set baud rate
ser.bytesize = serial.EIGHTBITS         # set byte size
ser.parity = serial.PARITY_NONE         # set parity bit
ser.stopbits = serial.STOPBITS_ONE      # set stop bit
ser.open()                              # opens the serial port
send(ser, b'hello')                     # sends the message
ser.close()                             # close port
```

running this code your printout should be:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQCIW3MS%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwdIhHPw%2BqChTo0LLIK7bnJtU%2FQCJKY4iRxbViIR%2FRSQIgKG98mfL9OrISeDaN8riIK2Uzvqh3MFWHC%2BQj0Dy5dvMq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMIK2rmrC%2FGeReVTzircA4XIi3UeEl4vzgbaNmBY22MJRlvQS%2FfPMM5tiOihHQb6VPoOm2xrP1uuoNNkvl%2BflnNFkIKDejaA7KnhrkFBkeeEzaFJzhkvVWgCh0aYmevJXiQDNyDcl%2BUXxv9EqFqsyW2Z4G12P3JJ6dGshszRZAunUCM1c1jPgdIx2oQyKR6OcNowg3PlkNil6Hg9ThCf%2FJXuzblmpg8QEGVMLeOrDmKi%2BHsViDDATLSAc7LJ%2FWIRwcnNXea4qo15XzTD5UQqIScIIaXtU9jMh7KDACIu4vfGTYIWu0peOPysobcf%2BqOjX5Q3ALAuGznfKVamNXPGyZS2sDBMLWTj45n4gaFA6mK9WWG4i2QpJnXcEZUan6qzvs00KUAoGAhhBayhhzBpw6QGhlu2YY7DOn2eTfu6dF7D9BL%2BCBFHVkWezTjNcrDVnkocgBtev98rUFCIXcJ0oOgMU60CLwRSEl0kW8GbLrUosPFvNBzpu6I5BVOWhAvvlxY10EQhw3d19KzvL2EfcfEx%2F%2FDn4rptZ5Rf4UE56yRDNT%2FfMScyzpPBTYOyuchMlJRd373mYy%2F8cQsoRvRm1tfcKDSx66B4Kjf%2BQtC6hcHrhRToBZqWIml5gEYO4xOF6xbOCOMJbMSWyLnnMIXdqcgGOqUBFRv4ONIJcJw91Uyj%2FqjySLXmnRM3jrQmM663811sGHEg68nXOsXKR1yo9Ola71CDJ8ttv246w%2Bqvlt5J0qypWl4HqDDRpT9PggtAX7%2BXkz%2B2f6y4vcb1eSvaF87F6pD7c1gJVkbPwNd0qBYPpjAvqdcM3dZ8yAP%2FNtfThVm5AQ37%2FfTd6bs4bW9eJ1jjlzAmav99Gar1vBGjzbb1JbKcRuI4CfKR&X-Amz-Signature=038deeff2878c5834012a53946012a8d0c7c12326337616d8b326f0b32280f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Type-C code

```cpp
#include "tap/board/board.hpp"  // import board specific settings

#include "drivers_singleton.hpp"  // import taproot

using namespace tap::communication::serial;

class MyUart : public DJISerial {
public:
    MyUart(src::Drivers* drivers, Uart::UartPort port) : DJISerial(drivers, port) {};

    void messageReceiveCallback(const ReceivedSerialMessage& completeMessage) override {
        char buff[5];                           // where to store the msg
        memcpy(buff, completeMessage.data, 5);  // copy raw bytes into the buffer

				// checks if read in msg contains the string "hello"
        if (strncmp(buff, "hello", 5) == 0) {
            drivers->leds.set(tap::gpio::Leds::Red, true);  // Turn On LED
            modm::delay_ms(500);                            // sleep
        }
    }
};

int main() {
    src::Drivers* drivers = src::DoNotUse_getDrivers();  // get the driver object
    Board::initialize();                                 // initialize the whole board

    const Uart::UartPort port = Uart::UartPort::Uart1;
    MyUart myuart(drivers, port);

    myuart.initialize();
    drivers->leds.init();  // initialize the led

    while (true) {
        myuart.updateSerial();  // messageReceiveCallback gets called in here

        drivers->leds.set(tap::gpio::Leds::Red, false);  // Turn On LED
        modm::delay_ms(500);                             // sleep
    }
}

```

<details>
  <summary>{{< markdownify >}}How does DJISerial work?{{< /markdownify >}}</summary>
  
From a high level this is how it parses a message

In `taproot/src/tap/communication/serial/dji_serial.cpp` function `updateSerial()`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVOTMSWI%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRp4zMCLfjyTlDjR8EXjQ09q8j%2FlpUwALmQ2gy2fVg3QIhALEbOUwlYQyBp9Hh%2FNRsWqdL9xr%2Bm47Jwqmu2mrNuVgdKv8DCH4QABoMNjM3NDIzMTgzODA1IgzCTndOm29Alk968xkq3APLjiUWzNHhCJLs6ERzwz6%2FJ%2BKmBXWmgiTKTAZ4ux1CuTwVEp0GbYbS%2FtOt%2FheUrroQVBykj556jEn5edMmNUmQt25tAG2X4L3GRb8NUL%2F9mZxpJW90SKGAaxHlJXVivwutrTTjyYUSZ1LlKt7SOBpHGVfpmmlcLHX3w61RrIp2ICON%2ByB%2FUYgP%2F5BZ3NwzyQUSA87X0PCStcUgwnIkPX800FLq9wPrIEzIskGqlxyFKXGvV7GUQ59OTP7Gy7t9v0qnsFJXq8UxC7FfwEdoSWo7909grRj8UdHckBcFue0D%2FkJX3SRDq8hYkbFoCaWbj4iPbDEtD%2Fpar1RRHoU9up%2B%2BrCkq0qnkz5W67qNIrpl7tGOF%2FZ%2FO0RhPZBjtvxJEXWY3wqKq2s3v05Y85pU7JrAeByxS36ef7bwM1%2BSQpcjj8DXM33hxK9KNhs%2Fn2BpwR8lNy9NvvCe%2FfL2hfgAgQnvpXoTLVbvM5gUMtls%2BnwcQi8zXkk7ZGWV9XEP5QofHOd1yyjWlrF4Uh77Z9BQLWxbMVxh%2F8glqlDET%2Fk%2FpNwqdlSLiw6wxjhx4mQxRAzamhIxKd%2BJCJ8LQy9s3BUKiwI4TGT9g%2F1el%2FE8z0rt2KfZeCjPD6sCkTqSJrMaLFDC23KnIBjqkAZ5w0GWVuQHdY4pRVj%2FjEIDVQsXJlDuvTAN6wgHAW5xrsQRJwCPSk7IEffHdWkbG2w9wv0l389pK9ZG%2F5gWcpc1DjFOXcaSE5pFIeM7J%2BhhOp7LV6R3FBzWheiFpnSYWpquFcRLC17q2eg0CWmqZkH4W199E8vy%2BmywT3uyHXBhVMODN6Ng7HF7GZVpC6YecT5nhU%2Bvxu0rMoIbBMpQjtUwMKh2d&X-Amz-Signature=656cdc36bf47261bfecd922641f71b410c1487b1a178fd4eb4eb1f3390647512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

in each stage `drivers->read()` called with the `READ()` macro

in the `PROCESS_FRAME_DATA` `messageReceiveCallback()` gets called

</details>



### Two floats example

> NOTE: use `modm_packed` it packs the struct as tightly as possible and removes padding  
> basically ensuring there are no extra bytes in between variables

**Jetson code**

```python
import serial
import struct
from crc import Calculator, Configuration

# Robomaster's MAXIM_DOW(the init value is different from Crc8.MAXIM_DOW)
RM_MAXIM_DOW = Configuration(
    width=8,
    polynomial=0x31,
    init_value=0XFF,
    final_xor_value=0,
    reverse_input=True,
    reverse_output=True,
)

# Robomaster's Kermit(the init value is different than Crc16.KERMIT)
RM_KERMIT = Configuration(
    width=16,
    polynomial=0x1021,
    init_value=0xFFFF,
    final_xor_value=0x0000,
    reverse_input=True,
    reverse_output=True,
)


crc8_calculator = Calculator(RM_MAXIM_DOW, optimized=True)  # Robomasters uses MAXIM_DOW for CRC8
crc16_calculator = Calculator(RM_KERMIT, optimized=True)  # Robomasters uses KERMIT for CRC16


def format_bytes(msg):
    return " ".join(f"0x{b:02x}" for b in list(msg))

def send(ser, data: bytes):
    start_of_frame = b'\xa5'
    data_len = len(data).to_bytes(2, byteorder='little') # converts data length into bytes and in little endian format
    frame_sequence_num = b'\x00'

    frame_header = start_of_frame + data_len + frame_sequence_num # creates frame header

    crc8 = crc8_calculator.checksum(frame_header).to_bytes(1, byteorder='little') # calculates crc8

    msg_type = bytes([0x00, 0x00]) # sets message type

    full_packet = frame_header + crc8 + msg_type + data # creates full packet
    crc16 = crc16_calculator.checksum(full_packet).to_bytes(2, byteorder='little') # calculates crc16

    msg = full_packet + crc16 # creates message to send

    print(format_bytes(msg)) # prints formated result

    ser.write(msg) # sends message to the type-c




ser = serial.Serial()
ser.port = '/dev/ttyUSB0'               # selects the port
ser.baudrate = 115200                   # set baud rate
ser.bytesize = serial.EIGHTBITS         # set byte size
ser.parity = serial.PARITY_NONE         # set parity bit
ser.stopbits = serial.STOPBITS_ONE      # set stop bit
ser.open()                              # opens the serial port
msg = struct.pack('<ff', 69.0, 420.0) # turns the floats into bytes in little-endian
send(ser, msg)                     # sends the message
ser.close()                             # close port

```

**type-c**

```cpp "6-10","17-21"
#include "tap/board/board.hpp"  // import board specific settings

#include "drivers_singleton.hpp"  // import taproot

using namespace tap::communication::serial;

struct msg_formant {
    float x;
    float y;
} modm_packed;

class MyUart : public DJISerial {
public:
    MyUart(src::Drivers* drivers, Uart::UartPort port) : DJISerial(drivers, port) {};

    void messageReceiveCallback(const ReceivedSerialMessage& completeMessage) override {
        msg_formant msg;
        memcpy(&msg, completeMessage.data, sizeof(msg_formant));  // copy raw bytes into the buffer


        if (msg.x == 69.0 && msg.y == 420.0) {
            drivers->leds.set(tap::gpio::Leds::Red, true);  // Turn On LED
            modm::delay_ms(500);                            // sleep
        }
    }
};

int main() {
    src::Drivers* drivers = src::DoNotUse_getDrivers();  // get the driver object
    Board::initialize();                                 // initialize the whole board

    const Uart::UartPort port = Uart::UartPort::Uart1;
    MyUart myuart(drivers, port);

    myuart.initialize();
    drivers->leds.init();  // initialize the led

    while (true) {
        myuart.updateSerial();  // messageReceiveCallback gets called in here

        drivers->leds.set(tap::gpio::Leds::Red, false);  // Turn On LED
        modm::delay_ms(500);                             // sleep
    }
}
```

 🎉**If you have gotten to this part of the guide you have finished the taproot series** 🎉

Here is one last resource you should read on implementing the communication protocols in C++: [https://alex-robenko.gitbook.io/comms-protocols-cpp](https://alex-robenko.gitbook.io/comms-protocols-cpp)

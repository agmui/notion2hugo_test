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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD3DEGVL%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCeP%2FPQR9xb49GYRSisSEOIiRG%2FnhXhKZNoJ50V%2Feb%2BLAIgDu9U5GgRvBP1ljdUgrvGRz6TczWsavQ7yOaZIA4IT9sq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOfpBvWxdHOfVvODWSrcA146FmZvnJap33v34Lw91iciZZMhjt00MKB6%2FruKfpngKGvKpf9WFJfjCSvNPa23fBjUAQBSa7MraL3AM9CGPLWS7grE%2F71o6TEmAnjbAK5BbL8j3aQmwIurLYplOJFWNrEq7dDgXJ5nCAzj6TUvfZRXtxXOTnldpZSQrkMRcnpc5bHLChPEYMtoLMQEYP3hvDAC%2BfjkaBChAaH2RJrz3uZIQ7HhTUbQLlzF5GThREBD1%2FiH2qsEIiaHUKJxnx%2BPJrqQ6Trhbyh8x5YV8Y7PZFq2M%2BZMsPPjcekvldc3nK6UeAqyGcmvxGubFDv7QW4vrDKuYikamBUm7ynjLVm%2F0gSerPFpksBaN0dn%2BgK037gckLBR6sd7LE5RwXNLENjItnp87d4pwz6FxXYSyR99itxb5m%2FX4ikytQV5Uh7CTIQaq%2BhR41X6UHt39JP8hZigDlx8lQn8128v7E6lM4gkgEgby1s9jhdx9VzARs4iwbHJEn6KMCQuBvGI%2FBkTJ9zyZt8TU6f6sTcT%2FAs8bqqRIgUKZuBIudteI5DqfR9GbGfbkBwSuK1rHgR290tEUtRu%2BYcZVtpP8ip1qRH7VtC92k6o%2F49PI7U9M30b2Pm%2B7ry2q9v5uDWvL5Pi%2BGpYMLqB7dEGOqUBR0tU%2FETax7ahD90%2FTo1vXbuYJOAHNXW9R4PN2ft74Rxwpml%2F%2FasiJGp%2F7YutnQEs%2Fe7I7rSBeQvFVy%2FIeN92ry6uaP9oh9MVbhwEnvams6%2BLAUownZLz1HPYD1MQ9lE8%2FAt8%2BqBL88ivKHSRjdPsIidHwufFNnFaiGXPKv9HQDu0hmbHlUhLXAyoK%2BWBDUlbbdXsrfnNN6H%2BarbwluX0BVXsq7aP&X-Amz-Signature=58b27fbef9ba0df271b9d776acbd4e548f25ca920881a32763703c5f95fd687f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY5UP6WE%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCN9aZHBOB8KT479gYRe8p28OdfSyp%2FyPQdXv019H2EiQIgKbZsFqasi7Ul9NOIp4ruCe0CaXzuV2WYQmg1fyvBxqEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPsOOZcedo%2BBHkpTqSrcAwqjM46OrHcAkjBTJ9VbE44e8wj0uSf05lflskwRTHRbWNVDwjWFdImxx%2FX7gxiO7HIo%2Frz3wIewN1Styd0R%2FWgFyK%2BVAik%2BQTB28vS%2B%2Bh1sqx35%2BPNtBSuJQI68MbgDAOWkpUClHblWOiehTJKQt600EJ%2BKtamGqTyAlLg%2B7jgdeCuNYDk%2F%2BRL02e3FbNwPNCZ77mkRQ2CNSxuFHwwhLpTQYLc03Db523wGBEdYMIImTb926X7%2BiktzxIuo2hB6M7UzVXcSr0SDik6ExCTVRAuxegGNqgfgw%2FMElWpVV9NqfRhlK7vwqvYqa6cZ3YkelOo7bo9CJiZBg88Rk1EFQlcgks1Ddy7zqEZmBwT4h4xniYm8NobNRJJBiA4PixbIcmNdrUmcLb3npwpvZ2j8fH8H9WdpV3y3quIVs%2FvYr5GCWSEDP5NczheIOkhf%2FekRopt%2FSWhgfR6AMZh2VP6mJUDDAaeqU5EvytuBIVRPB9w16FSQWyqSClvFTwL1ty8Q%2BkjVyZUiPTbvpjJgfpCSeGW9WVghGPtGcrSKs5lY7OuV4Yi0NVlrUzMU0I6en52VDWfY0R8wmRN9Rv8XDnyzSllMo56G%2Fmc646MRApVmb%2FK5gWfh9%2FahXOhZE2UmMJ%2Fv7NEGOqUBTxYhjahtI%2B5BP1zCH6depmuOrh4NTVH56xqqFT9lG4KImHheeLTOzq0r2b6Qe%2BQ2KCrF8PUjrNPWfTAuNnLkRSDjyxXLSusN2o3%2FbojB%2Bcv0%2Bq7AmhzsWCuA%2BYYOAvpSckzPIDbpvxxDQYC9anVjDBS9wgK92HNoEvAvir7TtyxUQVp69V6SSeTj3inj8Hu8N73wT9qkRs2hVGfqaRnhmDbT%2Bovn&X-Amz-Signature=8772524e8396e43944f6dfd0c834f36ac734b20843c0f94cb61e8c1701221050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGCJ4UD2%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCKby4BG89G23TQ1wjVc6yBLTKISQY3uhag3gKK%2BNftbAIgIHkjwJ1ARJpRqpth%2BkC%2BrKUGusqquwnQES4er1hFNo4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJvjsz9ej4aUYrr5oSrcA93gqZphbHJ5MYng8cUY1gm4vdkDTHf810j%2FMfoGPCCV%2BHSCQfIKFZudlZPbcPsgL3%2FJKvSmrbKJN8JxBl5QfR4Nc7JYkuU6wWOhktNPPTuUf8Mk9ZgocGJa6QGxHkJWFIjf421EOhApz17WLmKr1HW%2BJ3xT39bastl1okPAGXD7cO75Qu8226nzdlToXyool%2BS5CUT7qvoOWj47inFDEECes52D307aQM6%2BsSgygtPZCwe843J81kK59o4W14515QG1Hvud9WP%2FD7yCSXMxzPjhWHb7ZqXYA6hRYd%2Fc%2B8qm%2B3wAIDYo90YLzSG%2FUyiPq5GR8IRZ4mY9XPfHjI4ZAcfejGd578C%2FV2gTKR7UoRQBVX05eXgDk3ObkXZIIa3gpXYRqSuzgW9AsozIkbKFgQ4GlgXMGCst0b1cKxGnWsJBsryQvgTKFKQ6se2EzfWr4j2N8P68XcjqBAZe%2FbQEAM4FW4IFgRXASexviUX86xDc6MOnw80%2Bx2aENtfGBxzSp%2FXz09TyQNYU6TwltCjeKmWLbEX8RzyTMH7r0%2FqUh06O6w0Qb81beGT0WmoWbvYbQKw2X8gFoz2lePLou3XD6FqSZae%2B6tsht6k1LzTOa%2BVuDA%2F%2FrjoK3U1ESWnKMK3y7NEGOqUBAdmWIIJStQBrpR8cpY2CSsqYRiSW92JtdS%2BX2hCno51gpt5bbSEE8G1PNaWND%2FHrGspDGZmMr0CjIXlrj3fu5CceEgPLMams6vWXhd1FazB5yDKHpDurKsVS3XE2cQ4wjcPbE1HFztlBKJrQ3T0%2BRl10vA86QAD9qL07pNRd7q8EBPKl3bMm6unRQmTLdldFJkGRg4m2nKW3fuB0h3GjjdDJcwYV&X-Amz-Signature=490dfe5ca95ee6603962b3cbd5d1b7a2033d2191be3f78e3efa85c75bfd53126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWZQTTEQ%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIE3cF3VEBGfI2isrgN%2F4XuwcRRcVYt9FJk2ufbPA0%2BQMAiAJ7gCz3qUeBTQdrW3t5NfmB0J3JgaR0QKbFPNgyQcj3ir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMGg%2BljHHeBn9mgdRvKtwD59ro776Zy5wqom18JYw0fx9iQMn%2FNk1jdtCbE5gyDPlgmo77v6YXlBzjTEzJ0fvrqAY4Qjn%2BL7RKobSjFybl%2B%2BLxAqW5qvZ%2BvQ%2B%2BToJ0TkuKSKXEinkXcdRqPKdpgalwTG%2Fm56RS33dE8HNxbEm20mit2NpXXya8%2B5hnE3bNZT%2F3U7opaQRIEF7Rv797kN9DDWq0cgGvKIkbatIrh9TAqLDA56sd9n0pTHLglto9h0eIDO7f16mIJwraxxNB9p1AGt2p8%2FkpVHkoYvKRubcMmwSsYZdblaZ3msJe4v44n3k6%2F%2BvOqpASLU0pfc4XN7S2eEOL1lFxNM%2FOWeiGGifw9Yri8%2FRjHXJdTP9ikYsFRQIzwNcZgHfbk2sfnnbBAQkPSsMq9mrnApafWj1%2BZBpQqidJnCjV1QPo2AZPN%2F91HWS8DxT3MCqkSdI0otTklXP%2FaLKRSgOJZJn2wxPuKrakJYMDon8tOivyRBm8x7vuZ%2BZ%2Bu6dCfxFXq1a%2BSEM9PRQQiZc4ElzjGwsSpNszE5GM9iMGV892WRgGqYvzkUaQnwPJ%2FEc7qY5CSTHzfkhLW2uUC6Kx3PLY5gTV1evOHIsk15RZbYIk5Dr1onPEGSyiT79m36NLNwiUaCzGnJgwnfHs0QY6pgFobgbE5cw3jxO7hutWKGkeB5HHRN71FajMWcEassFpsUFPb0GFNYEcw%2FBIkulmO6SLS2%2FsFARB0FetVehTWrpNvgnkbO9WlB4bRtm8A7wmFp3n2yg%2BzujgaSr8n2OeBAlzIj%2BVkbMjppKIxRsmDzSz8Zqv5Bm2qYEj9RqoRET6uZqVW%2FPesUtQvpsux0HS7zq%2FSyhccHN7pHBQTt5g95wsLd81fw1E&X-Amz-Signature=00a701acf51e96984c8b33ef5cf42bb3dbfb7f0102874598c4be21a69ff94252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N54U5WY%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUQUbJBFG8VfEm7OoP3pmCmMxKs1cgFttDl7ITAvqX6AiAhP%2Fv%2F5FYUydyUtqt4LnwLgKbRQZVia7IDAsBZi%2Bl2Air%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMvY7gjmK8gy%2FAun%2B9KtwDl9pFGfV9Zt5PVGHLFZykW3Z0x5H71v30E8JgpBDPiE3%2BYLP1wr23PAGFk15e%2FgAhD7sSXuugS%2B%2BhHIMNw%2F0DFMeaQkON4vDnydmjX1GXC4PzvmMkH%2BTl4tJZWPRg9%2B8GPJH59ck%2Bo02vvFR5DI1tbYJ5F7c4iLcC3oJ0A0peGK%2FawYMYDBVUeNXs5Gsa1GBFXaiwC1KdeAp4%2B1EGrQC7WxWI64Gjy8oa7CyzZ2OjjH8Oz2TdqetpadniuiQMmB8iYAJWYgs5BqsEOZAQm3njcOp8OJth3gkX9yhlam5HYAVMU0DQgE8CD7V2AdAIeGOvV1ZU5nK5sEsG%2FvUS6KT17qAfDdxk%2FWE4yr57Jn35AA28C3zGm9rIb0UsXv5DHxdPcaop8syhjbkWkUKRYIKNDuD0ab%2FfVaWv5KCEmlJmTXYzZ%2FFetWUFnv9KN3hP46Ix8Hq8kTa7Hv2LjIUOPdSVZyZmpa6tVQeN7XBs91j2ry4QWiJY1vt5i3Qw3m%2Bkd%2FTHtgLEnns72vJ9kAsj3vOUOHTvXu2mQVexZfeYBEvmoKtNgLqLVya0%2BbZ0bykSU%2FQgS71nHkLgIV2FyfO00Ot9Vx1l5fBwdzUXqgZqdwVvF9tVWgkQ%2BqUDT6YQCugwps7O1AY6pgFCRbVSEzR9LcX1nA%2BAfwK%2BJ5pqTOZuxe323pj%2FzqoS6wkSyVLlnqm%2FaniY%2B%2BkX0%2FZIxT24I0XDrR440e7fxQ04xmz3HQtsC7OiBw9VNuR4vNuZU71Rp8U8xXVfUEjlK682u4Q4%2Feeq5VPuD5BJdqSD4JzXcVVgxY295L2%2FciqSJjrKAsC370WsjlR%2FwlDQGHY3V280fYI8f3tmSY%2BNA%2FihhGawoVnl&X-Amz-Signature=565bcfa024db9994b4729d4e00b1e8b265f7c8fd28b82b706c4afaabcb6f6f5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXEOCCDK%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQWLgHTFwQ5iHjJOA9zEwNr%2FLq8o4n0vbcBEcnCNpejAiEAvRFe62CucjsjxwsRdC6tPVEG2uV0bOeje2N6Ugwgi1oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCTIQLnSdKMVAnNYMCrcAyW9Zj%2BHR5HtSCUuNW%2ByAIsjb5RgKKXWV4FHU5fPfMzTj3mlKQBO5pQFL%2FRgOChRdmZNTK6UaLrNvOX62wKBfLiCmqhVT7X4n7jMb3%2F9CohX9%2F2KbVHLPHKXqdWnaeaIhA9bvELCuagvnbNa0Rs6cpy0CzRPqLIcku0kbN26IwUhybgeDFxc3ri6RqdrMnxHjHohKDy%2FIviaPPn3qnyd31BopZdVFx8DBwAc8CP20hNrZ6oBHCmlpzVJcivqJnSkmVpwuOeNBFmLcUUeT7fyVW%2Bqk4SvISkc12UkhMRnmgTgzzl9o7d6IYGx%2F3rabotGShc%2F1FSgVCfeSnQnYwgOgDfzQyd0hrzEklqVrduQpby6r4Ifog34GImVGdJuSR4yut5xuy0jm3DD4sbGKuO1ebG56fS%2BcU%2FcVKfUjiOG0xg%2BjQpUBWfx7KWP%2Fx%2F3DWvBapZ%2FkgEhe9xm8tO3mZaOY5nUSzdzZuBnrnukVaHP9Dki%2FdOa1OxS3bSCEnqSDyA6qKJKyq00Rfe%2FHJi8ofLDiKEJ2b50douZFlOuaCm15OnPkzmawwzA2fXg1UwAcr0HNdjX6jYw8W9sWaQSVzE87hYcMq%2FkA2H%2FPHtNyHCiwn9xgfah4MC29EPiINFBMJbNztQGOqUBrAcF%2BJLaIiF0pcDds%2BhW82jOFVYUOx1rhSvheZfXee6e6ZOO87djpn%2Fjk%2BJ40WiPMuMHksnUTs84%2B4FIn0NmUd1luFJ58Noqfk8RJ8iy8agrIB4uOPiD1ap4qNszOBLbDRvBlta52g4jJ9iV8ak3fsI2I4rN3UdirTf9Zob6Fu2Uugqto8xP1%2B81RSotWPmLxSwzILfQeN9eFVpGT2lO0G5%2BLjZu&X-Amz-Signature=897885194c6cebf55a4e49c0be1eee808d789efae482bc846f16bcc9f8baa055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IAIXHTN%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDP9pllh6wntRxhbLJBaz94sF1hLCb0HSSPwq18NXpIAiEAmjRTOv7vPwLN14PNmqHm1uJ694mD3NIexMgNadxD6hQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDB2JGNTom0oshFDYxCrcA6HhWqUZ4U812U86lDfqxL1%2BmqqEM%2B5MJkMtzClm4vmpTU1UUcA%2Fw0ZzLeong8aPmNfccwlA5TvS5XOeAKqcQlInFX89ASs2qUgYPLxYHs%2B0E4p2uyZw9Rh3VPsOwBJLo6P6VIszngLlgBFC1Z4%2FUbdVlJjFfImvjYu8vaedMF4yM1hDdLUzQfxYUNtmr6C2qw%2BioeN0KXYRNuYr3LscwehHpzludYf1UuS%2BfGnrrsIsfyP91eLIynVQ4b03yHhupnPYcCQFChW%2FlVHQ9l8MwykXj8qRg9AKQ4l484B0NIr6FCgFv0aqyzb%2BJRSkAZuZYKSA%2BhepreHY4Io8RV9%2B%2B8JHVeMo%2Fe27W5RDcl6YmSHe71XC9vESvvjtuj9vHYFNSDveZrGKKnPTNYNbtzrzeMyU3oJhI%2BHQRhYAeYuhtDff2M8hrJ%2Blkak%2FeGN4cuIAHQSRPT9644o6lho33VNerFa8BJoXNgciCbBUAcm1S%2FhDwMupTwGfGspjYOgv4ecIaWRj4RdDLe1Ytf9kC9wyr4qf76IulVEqaeHHfPAz2Zsl90MMcQKtnQyKYnbfKa2kHIXuFZabIHPnWOoDWzsDfZOnu%2BD2u9%2FDUmuUbcIoXeQ9I6FmJDXs7mvJ6QK9MJ3OztQGOqUBLotDu2w%2FK3N%2Fb%2F0vlV27P9emaoUNVAwc2EMuptQ1ZYV%2F7zHa%2FWjb12%2BD%2FKB2e%2BnqKO1ExHv4Qsu4Uz055rgz%2Bqsuh%2B2MioUN%2BFSZJ7ZCnHXRk7S5YpnA6dvg0ZnaAmPN5H%2BCDekc39ILclsVd2RGg79tmmKaEAI%2F2LJRpoioOULUEDr9sZf0PXMvH90Uffl5bklNfbJzOyRllowTRYDY%2B3Er5PCV&X-Amz-Signature=e7b26164a76db47f3c408c99e10bba6e5cf58053429cd0c0c56cbcf1ada85aa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFYEHKB6%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BUazli1xr9R%2BGiOsP0Ocm0oK50%2FY1%2B7CEQnbUtlvMYgIgD%2B5qu57Q1E3n8uvKte58xiY9BskRW5DMkFepu1EBQOsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLBu4sZmyzMM0s5nSCrcA4SUql0SrSTpbsCrB5JMXl3LbrhdkC%2BaVMBd7lzJNfrGBNexj%2F85yvpTkAntH%2FezrSwEMdGugN4ihaLR0voas9ZHkJhiRpQ3h3X3fp1hGcKupkE%2ByJuyug6LQvnM%2B%2FpVTieQfeOc0YaE%2FbuBTd1%2BB11CgxBoN2ZzrPv9KGaxU53uP4yquN1h%2FK8gcbsseZImA7G4%2BfZc8UMg2we9BODCudfXSFJu0zCR82i3VTV2KTBDDllfh5zb%2BLO53JKuO%2BLM%2B7lbuK0bvRxbffS8q9J1vRnDC%2Bisr3keZPv2S4jGi2r7%2BvjCKPbGtwuijmvGIvEXfFiuEafMtRKFGcitIyHHclOjdZQz6Lyj4Sa%2BdMLH%2ByDF8kcvXbioX4TcDX0lIWTGEQ4bGw91IQlvBP5p9xBakhRyxmyt9hVLnuNknRTpwOCT%2BGqKM8GB32cPHhNCfiNXr26r1XO6%2BqjUNcXd9zx6XVEFF8iX%2FCHwaoqfLvTvCzhv7CLkrGgSyZsI4DMzoqYIEoP%2FqWreX3wNx4jURyvDvkUaACX0hxQ%2B9oHgySjvRpxmZGjmjRsNH%2Fj7Go%2FtJAolJE0fd84IKzhy6XGAhBZCiT0OGvKJk4KUZfYOIwvJskhsfTrIRBClzOc09%2Fq%2BMMzLztQGOqUBUh7MQj84%2FCio3GZmXNNWvtNEuZcOp8Oa2axuKgiij8Mi3m%2B%2F1QPPV6TH2SzsHqy6gpZOHjatqOG0sEptisHvNLQ3kZIYNh%2FTxUYI8w%2F2W47XlkfUnQLbijicumPVM0zQcoV2AC6nCAERsC5hSr6A5IJ9HpXHR8vPhu2mn2u7oTAPKO5Owvz7WGne9vnu9xOKsmMT07aeuUaD3SwrSaNAykcjUnok&X-Amz-Signature=8945732c405784858970249939c5febda5cde0b79ae936c138854c1a6372f580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

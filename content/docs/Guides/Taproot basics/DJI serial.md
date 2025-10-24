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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLSNJJVN%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfaFX2xJEF9d7tMENKPuD2Fw2ld8vFidzSt%2F2VEIARNAIhAMMKBnL2v7k6lBvxIkrBRP%2FgRw20ePzGvnkS9%2FN88qd4Kv8DCFIQABoMNjM3NDIzMTgzODA1IgzPYCZ44XQE72d8zgcq3AMlgzxfG78KDrF75hijsgBTrQBBCeiqDMYzHMjxAPUCFlbpS0aQuOMdWpA0oM0R7%2Fo7r4j9A4UGmFDfDg2ap%2F%2Bb7LbxhoiYPVQGLejPWt4kHR2smJhizgagBkzuVz4mASXcz8amNA5gd9130YUYWJPTnLTe4IcRxU8j3XJwQsjpQMtjOesnVGECVX4S3H9BaQG%2FHg2k3%2FVvYMq%2FrRze8AK8z%2FV4ceY8OCMFbyytoNZI7NRRDrQkTuOedYSlF9zpECv0Kc5DQyKgNXarj1Jbm2bxLsXioowlUcARtBzEPwyRZulbLSEsoORMrCXeMRu33pM7tmTixygsJCOkUoqAgkHfzgfskwuNnFeVZYKlMff2uLOYGBlz5sreipff6HdMFEIH5G%2FR0o%2B%2BGMGD5asMFCdjNrEpU67bb2uSxJFfFhT86VP8qMazcPHCdOMRlue96JYAr8BRNFm7rMTWJHFXDP2j5npD08bInq%2B0krFCmxMmzjveSE856O9btdpG9cdux6Utsgh1pPeWSRar8KF0bxknEatQ13d38bWErV%2BxyZole95YAcIB2rAttUNPQX0awEgq%2Bn6NMJjkdFa5ljpKczb9D2ptEa3BBUfwMGU639km9J%2FolAMX8ZFEYhdwjzCtn%2BvHBjqkAXvlfMJQrHHRWo0KXL3h4sGxIRJNAoqDTPB8rr4ypuQUl3QEIKzOY0kqP63CkQ7KtVvn6%2F7eKwK8i7Y%2Bw%2BDX2eGOZCXoMTzfilL%2FSQauk%2Bsp2ezyV3zaDvABkEPV0balS107pUB%2BgBY%2BamRlipSY7Q98qD7JoXBSocSTV8p7K26BDNMLdk6EKX0enRYg14ck3BSrqEci%2FkMDVnQ5GOAcnrU%2F0ucC&X-Amz-Signature=b33ff04ce4ca7fa573c4ed9c93d5c7cb9f37bf6faadc70d239aa3164b3f87e4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EH3QR7S%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAg7%2FHYnZiYNhI%2B0EOot6DjRIEHN9GtYMZjHqjk%2FSaWcAiAeZGFqIj8IrzW5Lc1ZEaxANiZl1bTjd3dQQzAywG1JHSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM1ZGR7L0B%2F%2BHvSoAxKtwD8oPq8TRj%2FyvVVcnZTo%2FX6o2CJKrvETlB7CSCd96eBKXqDbYitBvkN4KemV%2FgOxLJH%2B3qo7sG%2BdywJJOsJoCQOtrbRrEu37SwnlGGAnUobfltBQBY5BgQeMZZR5kaWY9NPCQMVYqQ3ALGHV%2F96%2FsDoaLneJGkam%2B7CU3c%2B6rEpWccwJAA3pV3HmD4VHn2RpOp%2BMD1R8UirjlxKDIHBvM0yYjf5qIi7mOREygDMkvIAt318l9S0EAv%2BgjkV39wuZLT9leoz2Xzhiyg7x4MR9ka%2B5oGjY6GjMmVxZQjqw1NkcOPWlVxruAb2JgDGx0Oq2RssgRAcsIbfjpAXgg%2FcY%2FQK9tHFcyQlRgbOen9OvY3%2BS6WXIm%2B1soMkZNC0zXhmD8f2nRHmRPscUuWP3B3b%2F1FW1VujXW%2BdRRC1Gr98MQzKpn%2B%2B%2BYcWosbRgVbILm1pHOSKhDw1Y5PpsnmqIOkORXYH1cV%2BBNv%2F52pfR09KPgASYXyieoPc7o4rkbheLHKN15WDbshpzVvtab9rGqXcIRSm4%2F7oLRnXMpnN%2B206l7vnVDxGriH1KMo2TY3cEZLXiC%2BbwNCrhlei7%2FjQqO59XSTMYN%2FU60l19GCRpISQYkn2ghWRSvIMIF%2BoSy%2Fsvowl5%2FrxwY6pgHKvabZ4Etc%2FAq12XDSWoVTS8fL6DuiWd1yuKeB3lbmlSfHGvTEdemEWxC%2F23vAGnZPSawcsfoJLDm1XRhGS0I7SEi4ibiZm4LH6NOnFkU57kpLKyV1sdLNDxGmlt0l3Ayb6oZR4jXOhxV02nUjkZOVgKEWgR2bKbls2JhxvM%2BupSiNe0mJkQJxAI28DzyXYq0IscaJz9K1VdViwlz%2Fk4lz0TpBxsPZ&X-Amz-Signature=f0b8fbbad4f477550ba3aa8f1156b7b9ad856840ac570b3024ac6816452c3240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMIHKSYU%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO4n05qlBg3xK9XBgtLs5%2BBEsEjG6wVopt9BXJchOtfgIgA55SWn2qBOYHBTrbujj0py84VDD2wecCk3lAtz60xk4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDKf4bXIhyw0we0SydyrcA7%2BHsAXNos4AwXC%2BN%2B13TWl6MCBgg1RSQbi4jUlDdKCtSRaMMgQnWgWE20BUVEZULN0I9MGN2FcvbtERBauvQbN7Zc4wvOEhv6gH5JTh%2FVBwOydMpn8tXwI0vRaC5jAM2dt2m3fiwHqpJamT1%2FQsr4UM6mWQ6vSIV1i9XvKDyp7iq08pwBu%2Fn2T4BFfR7pB4mcxQ5xJmyUo%2FIOhn%2FuscbA1XMAKC1iMjlLo%2BRedKCIPUzZsGiGcl%2BfyfXYOHN0WiGMthzq40Eu1roXLfqXIBNqk8Z9vKT63FJopxQuX2lHCOed1ai6xAcQtIrrqU3nJHnnb%2BwyX8YCw7K0SNdtr%2BZgfjV42jIsxtmhDhwWbmm8yyJXXQccb9PMhDRnQKRtUA6n3%2FViVW%2FMx3c0ey968JKkt%2BJ6y34qItjDgSk3rlWnseqVLAjUADQRKwaEqkQem9yhn79t8UZ0gN5EFcJ2lfJH59QtZ%2FyBGJz4fABxlqpQmBQRIIVL4Ugb1arhEX%2FTkGFutV5UjFUKuVKq8AksdOfsXZ6FQM7%2BTWy7uffcwPDt74V3LH2qspkM1GXDwTiK7VG0JUan%2FTC5SRsQr26XKgnhljMY7V0orsZvH6roNSl%2BCWnJ3Uk6SIVIOGAel2ML6h68cGOqUBm8t3bHuTDbE8KR1ibCFE0MEHbXzjUin2pNbbRAOzRCyf7B6z4F2Dcp%2B7CMnvRctoW0LG%2BNguKJ3Y5ikKa3YZHi9Ch%2BN%2FEFUCMagqkXqcOgCeCDxenmI8l%2FfgGk4RsNzPVQ9%2FrLiXxSPNo4bhOlmNz1MzK0kMxsV13tVO9pPjomeHzSrKov2SX7vVHWC8VD%2BDNY9r%2BORQIZVbL1buG3IuoRIY%2BT5d&X-Amz-Signature=aec6e41ea61da65d3f1eb88d3d39da982762b2bd3aa4a1b801b049330af8144b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNTBAT7C%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAv8M1ovuUhR97fwn6qGfWVDlMvz9FjdejgUTYdM8wjRAiA1DlMbKOHVgmqrqOkle9WbaFgzHBJprWgNcX5pjK61%2Bir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMGKW6bYgk7qZgzEjrKtwDeIU6v1fIxUftTt3Y6%2FOePmKP0tJs1727jescU5GUTUdRkHMK0W1aUJrwwueVBXyPj9zr%2FsCE45nFmad1jbizooeg6rQ9qIq77iZalIxWffurb7qc47rl5r00VD4baBOn%2FpsOJ9ytyi1CeHwBC6W8Rg2%2B5MYAaTIOeRoz4HxR5x2Lruexv1xQgAkE31exmm4f1xScmk%2B3nZgE9j%2BCM1uzcFKrqgbquZyIkEktlf0ZH%2F4d9vefBDKzSVwo2z1A4LrFn1AYEZGLX0F6ALFyFtonTSuvFJEBETN7vLNfbxKr4YzomQ7bB1%2FV67TzdPa7UHFSuxdQMIWRz7CEHxvsGlq4PRsW0Iro0kYbHcbSwD80Fuk1Ubynm5Qu1oMDmFyu%2BPjzZdxZC0sVzCfmhqhye0yGaGhx7O7vDrOadH1i3SO%2FDGiGbZp%2B4Wr2epHQ5Jb9iI69lbb%2BBNlKwHoSka%2FnyyDg44M6hX0nJoRFLnrwJWHUYhvyjiT3zrKum%2Bem10xBrCWNG%2FSGc%2F37NizHG%2B3O0tiFmyyTm620XJiFHOmtWBXWdt%2FErCSVZX1VnMDvgh%2FlCFSd%2BzD9Et%2FyNa46bltH4hnUOIlsSEltMkVQs1tW7Cu9c9ME9Cwwxz0lX9DYa4AwnZ%2FrxwY6pgFHqellgiaDhbeeGWBasZZrVX5%2B96IOKsCFsCw%2BxlarjZpPYwc%2BarlszzlSIBa94HRqp6shbl7tTEUE2jdIO30ZkTiml3HorLt%2FBrxK0FylkfNOBZwdP5wBaM1MC0%2FBWGeHwdMT1GldwWQicbJAy1urwUKmqyLvbfXRoFYah%2BwfIHUlqcgjzkZZrolwjvDNflRvoCwh%2BKLk9TKFQxKzdjr6itIBFCIi&X-Amz-Signature=2d397fe184c9527a63571cf97fd83a77db5d771e7baf1a71eb1d33dbf599f72c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

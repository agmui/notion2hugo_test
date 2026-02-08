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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMTZCIT3%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzdhRcfWY1u867VlxBTjJXCZS1sHwxHgm48He%2FkZwjxAiEAsZqolxXosC1WW1UviasPaotNKTy7pbCPXlS8tdbCPhwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDIySCd5Ux1oI9frAsSrcAwAPErwJYx5SB5AgAXh%2BrUCkcGxDK0kwIpPNXouXYLPC8HWfXTwknuJQQ28OIHnfrLT7Yl4FLO515BI6RBeP7%2BLitFYYDNH3KLGCVz2jh1%2BCqcuVThq%2FRdRFBK2BTAeGK52yMHiZfyUu%2BGnBh%2F2RdJkqEBUQpZnqkIRIxsRI2%2BcrF9wvd4GLyIcBugKa10qcR3OQZZHgIVGk1LMqJyYyRL9jXuZGXP9Ng%2FKTV9BAmzGnht8d2PKih8U9EOgLN8pyrAn%2FizcrOs%2BrucNwtZu64MxeOuCXgpPLszNc7%2FSox59FrZpDPTJJtVh4%2FD1YLfgln%2Fur5V75R9U9GEFvMMCDSUoQ%2B%2Bp2%2FwAUWKwJ%2Bjb6tViw%2Bn7uG2PbISii1oamAhv5n5DpkOneP306kHW3hPjX%2BG7YT4oFm2VxbUKQUhF9z7ZP1023f3cRbypGlBefPJsdt5D2ETAz68oqZ8HRi818dF5wvBtvH1RHwRPPR0Nd4taDSd5Reu2NTLcT11jCxNAalrYkH%2FNo9FZukopzV6u%2BhlqSeGHTvkQ1aX6fdNl1bLlhhEwfzmIhtfQSMIQeu2ANdTcAHQ0fBXqhvMF6vniqW4wigfKyvcJh5co2EPbmldF5Xi%2BIPncVJr1a18P%2BMMfqn8wGOqUBxJuIaZm9NCkv00T3oVtI0vqJ4WkNt6W28g1Z2fk0JImQySwkI8PqzvyVgVetu88SjtFD6IHFIwqc93c3XCpV6DjTXctsIPxsagvD8fwYPWl0Qc17iqAg%2FweMs8dBckISRFLDSwuCIerCR6aA9c6CSl9puBuHDwPgoTj2%2BcXAzP3QgYj26rfe9e2pD2woO2QUkeBPmPZsNR4V59LP1j14annmN8yM&X-Amz-Signature=51386d3cfdb953ea52c902da15805583fcec782a7d760e7bf9c8454b8e60a0ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ATHLTQ2%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0WBtTzMbvFnj04soRYmW4qjhj8MIZikPJ43Cfnzi89AiEAk1zLUn7yD1gx4yCrRnf%2Bg5GH1Q9KDeLhz7QfaSGvbVwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDAm0PEBIPs6XfCED1ircA0NhBziiE0HAMa7AABcwkd%2BpbuInogz0hKfkOS1SIR0xRLuTfaUEJEBpHJr%2FtVZ664hMuCRQcnlFdZNfEH3bWKGB7fe2OVtnh2RYGubkSeJtPliKed2NghKqumeHn2AsaSf4lnvFkiXktgzKaEvz9PE%2FchapsA3ffyyU4x%2Fpa7AI6NjvJEcTeJ%2FOzBPT3PL8zoXIf0Ld46NJD0%2BYbCWY%2Bx9XQldkyqUVCrUG%2Fbs0udr3r1qiKvuUgOVMzdNfYQ3ZiBlss%2BjOw9D4SUD7paCBt9gb76EFuMv6lSXmZQzVcmSW6oAA0SQPGk1amPjvaopATcLZNzrKDWA86WRXctGH1%2FvaIMHewzS2HpSfVaIFTy4Fmxcl%2F1hpb3Rb3i82SGL%2BgNSo7pDM626eaRa6eIK9g8bUbJo1iZ1k%2FbUe9cLiH6LzPEQy9ywnc4tqyYL9C%2BV8ovHEwp1QePQ1aDMHYob5f320srXVSj%2FYcU0yB2ptCQJZUOfgVEOXFq%2B10gZaapnxx0cl0dEtd%2Bq9uT%2F9nZD1Y1%2FQGkv8cnVT%2BfK8YC5Pe9IOVZ0ZelP0FJCOCNS0kx%2B14AvDXqUYNiugM98qTPrrKlLAwhist9IpQ5RvK0HF4RoU6vR05S%2BPlFf%2BhvjGMIzrn8wGOqUBB2bo9pUxYW3GLAz4pat1C35E70HMk%2BLywn4UA8HKYIpt5u8TLU3OlTRntEV4dkLl%2F971xkFU2d9qGms8MJmd63KPbNoZkvwkrMfsw6flpgQI9KoKsLpMBk7TSzmjhSq570ayCOCiBz79pYMinITf1uslhk9PQZNZEEqHP0P7UNFqEH5rpKXfAohn1lfOamWO%2BSKNd1f4YQgwetInsfyZfY27zpF4&X-Amz-Signature=633a43c3686b5e1b2299b8802f0da8742aa2866aa8d9275ce8725ea24cc43d65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PCOZ7SN%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1qnjXpbVEco9H7w7uhixrs86Vk4FM4hQSpEKNH5IL5AiEAsIzH7aXA4EaugeeKROa699end6%2FKFluNgbVKr0mUUiUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGnOVaGPXqONrAtlQCrcA0q3CZ3DBC7m9BNlG5kfQprQ51KD66J5Kld8ljmtcaIiNktL8IhxErd1WHQJUg7nApSIeOSyKhu5oH6a%2BRR%2FyUCyrwL1hhZAgZQPrpkXS07s9deJC3FXlqF37eoCndhCZzqih8Qk%2FXm9VBfUHK8TaA1XqMy%2BhxqTk84yHkkGQdq%2FMmSKWJONjDi%2FeD%2Bnbbt1YVq1uE6TQliqcCuusgCFquzez35dvanWuOsXw9jDJhbrEC5nycPSKSOAoi1wppymgH3%2B%2BStTFk9fQMrmQjlON6A49cY%2BDLAdby30HBjJl3BdU8gkSD8u2D1U%2BGNfBxxzwR%2B%2BbP5niyUQaQbcvgQ1pBVkadgT6UVTRBencAJUZ86c%2BnrJrJ2xM%2F8IBmxecb8sl51fM3oPX8qSlDJ6ArU432ESjiZiAkzd3dm2dNoan9j5eUnMdoaydm65T2wZH9TYEoUkNKiF7LPdFSrkxzS1joIktinaxrvz7Yj5wZPTMKERZMVQ9y6j7odoEYKQ%2BQFXAnLQ7RRhRhGJ0lvuxpi7s65NA0elQnVWirPxklM5kqKlY1DoJNkNiDQ6fhJGrkAqPfkqMYJvdu1KfV3s52zKCSxy%2Bst%2FKDJM%2BzQOIDTtm73OM9ORMv0KmvvM0yH8MMLrn8wGOqUB55Khq3lphzbtt9bOOOZhk41Pee52wCxuQohqtKxrwrc5N9Gzzq8ZW%2B7tdTI%2Fg6LmMBmb23uAOOfGeIxWXAw3rXVuga7ypEBgWpSdLMRqDfvjfY1wy4Q5t4ubA3VAa2iT9%2BEXyD1wG%2BgoiByWlURV2qyqTbAxcPTskBLhpoANJpw17ukcitBwKSzIehlHbWXCvrlw%2BiLocSbUIgd%2F7oTp05ewGSXI&X-Amz-Signature=1b62c03c5d07ce1759ad623030aedf89ae52ce7ed5d9b36384a15f0dc96d25e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UANCR5G%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxAxm8FHjioFGrHRAxopU%2B%2Fc9QAFdqewM3FCiTsfULDgIhAOvqBpkRTb6AUQi6ygpYuy4H9mROPBdc5qi8V5YxvihUKv8DCGwQABoMNjM3NDIzMTgzODA1IgzpuMJ0d4G9d7hleEsq3AMHuB2uuW1yzATwxifJXwsKjfBETB1rionrA8CDbSy6%2B%2FVEFTCAz4n0pPJzQD54J2AsCC8xoVII4wltvQGZoAcmE6UrWlce5mAgy8sQ0D79bcYfLqyW3QdhY7qZfzdhFIJwKjlwi6jbEwQTgoUlF1KqXnP2R%2BJIC1NJNB4KjJQxxx58lG5P9cP66R2NAhTrcfGGJN7RTKH7albtnlbVKA2QJkP%2BuwH6TDJA65qXQx530Vuxx5hdH4cyGa28Myv3r1G1WmPL2MmVxakRES1EDwCLoH8IQ5I%2Fm13%2B4O1G8Ncqzs%2Bgug3ylcKYQES%2Bv8OnLwZOi5wrX5Y6kpHmBIMKf2HoDpdvZuIaqKCFO7LfGLj5qj2i6cd38x982TTKDfqGE9fx0UIpnxhnSGFr%2BjU3VnL9284gNHis92cdOMxAEO6ne2zGuxO0v%2F2IranOoQPiXTATMzNhgX7MApPPhrDl5Kfmwp9KjGendD2p7KyA7zcnxhhi%2By7shBDcXalo1ttFMAr4clGFoKX%2BINs6h1Q5Ry7JCwyIuI2sLgcNfpb96YgFOKKbk1cQq9Vu2i7Gaxzr%2BtHThe12nqbDpCKMC7KuEbYPyeeW1OCB93psHgfQHtbq472ziB8p0Nwgnlv9yjDR6p%2FMBjqkAduluDi3WEtuKJDI%2FvQ7XY5JkCJpNjh5uYe6qY1TYvE5MKnGUWriVgdPbg8qwJGScK1rlGHDMdXvdPTo0p2TltlmbJCdrrEMqQRdCoRlkZ2D3Aec2QwhCQVnwaY8jdgESCVAe0ZvdQhEDuXPIp3YQM8XqnR5MBxjOofzelDjQXZwPLdozPtkYddXmE171vK0t5zc8BnRI%2FJuLXG%2FmZ0csc3XJmtW&X-Amz-Signature=cd865d6ed333432b9262635d4a1ff844e8647b674f70a48392b3ebc40683b798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

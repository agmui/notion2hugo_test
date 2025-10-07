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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YYY3KGQ%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCvhUvJ029XNLLrnuihXDS6LASXI1WtveAMZjG1USqoUQIhAOTPwzW4ZoNRL%2FuMXymEU1cg%2FXxffjkm2%2FuHSEegHvR%2BKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDZsfq5GxRYMFA89Aq3AP3CFHRc%2FZYxzcZEY12M2XlXAe6vbVMCuqd48YJpqBe9H%2Bythmj%2BfSv3pmEDNl6HblJcpVmYp1HFJg6OvWSk7jL5wprXXVcNEIEsPLjziQ6VkBIivh0p4AP2nYtbfXGEJ2HvcdTNUQGpW%2BRJeaWnE68sN982E0KEcmyE%2BYypbNnIjAex1n0k52wBudJs7ZAICaNCBOpI3BRR6IjcKwkFALEKWuWShePld3YLoSgIW0g%2BJtLcpxmLduRHJUfoB8xYEwkkrv32ybSwdb69VU2Afuos6dIU9Q99KEBsjL%2FuzMjKn8bWRu10ijXG42RekqysmeDFc0%2BSgwfVvUaS9YlvfuTqnwzSM2%2Fh%2BNbIruZmWVKXZ5zJQIXFYBHmsyE1pXCQKLGJJ4fSsatZyKCst4cuqxJNsoKcSYc597YoPcd%2BqlYCBuh4My7R5f0YUW7cYUqoJ7W7E8pJtB8DZ5r6POoGx8sEmtRNYSBFtfh66mFGyOnvk%2FDYnh2TIpJRYucSvFLMm%2F3ZWaVf%2BObEf6XbGF6qmUN3T6AjBy%2F15w1Tv5DgpdYkfXTNEWYx2fUFvA5tSpusaIM8%2F%2BlMndYWP%2FL8KaBWL54UZRdHak97FITS8cPyxG1B9RQy4yXB8qR5UCnLjDQyZHHBjqkAfaRqYiKjlW%2BLcc%2B%2F87tZ6SGsbPrBRYjcOETv6YqA9lPrLKiTiNdZYa%2BshcxI8lVeKE9wKjp7Fe9mPO%2BSPQuzZhC2yNnZYz7Ba%2Bnlr%2F9wEjZCN7ByY%2BRCAtK0rA8vvkurZglVotwEZY97RdieKKtqoGZM8VKYNDuKHOyDMQFsXOBmOrD1s%2FBwnsJ1rVZOhStq05GhWga%2BvLjxQknUD5vzoNsBCxS&X-Amz-Signature=2ac4c744575a365f73c4bb90297d45cb16df735195bccb752f0ba3bdfb0fc720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ONCL7RR%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDW16FrbaY5LB0GGCWmPh4SaRCvuYzN6mL8z8GDeh%2BEUAIgeGgzHslQnW7TTOZFgQl7kbekew0DLOTjIKBZuR1GueAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaseBLyzCktmu64MircA5zGnNnvmcr9pA1HY5EdIAARAhUpPK2%2B72%2BRI2ZIcHjvJ%2BinwXKWtq%2FA500Dtb%2Fi8E0iTAkr7gC8yFTpa8wRfcmvW4buy5vzCuARvc4WNOlzVNbk%2F8vKxc5UCS7L9H6mVZH%2BtKkYojxsyYFF%2FWjU0cZoFgyieaIV%2BM7Y3LF9PjKfw6Gf%2B2fbPfJWjuBznTOE0Zc%2BM8rNjB6Atw%2FMBpv0wgzUCtjqOSwX1BSZSwJiLEeSOKVzu6XEt5N8iY%2Fd3xwH3H%2BX23UPIg8jS0McVnLoQkzEK%2FFWnvQ301hWBHUu%2BHQ4qLS4XyXl2BMbfAKIHpDel09Gaeo3AAwiDYsrIFp8ofDzCx7KNqRJsHUalpOe8EYKAQytwSY1MvU2w9prQaSHB5645BRFUA1%2B5HMyP92fFSw8l03noAksjdC68xLS0DLeEzyUyBv4ITol6Dj%2F4XQ5G6BpiCi4LV2iZhkLgGRTm1wNO8F3T1M1PYCyAKsdebKPjqi2fIal7ata8qh3QCLqrNHoFdXpUJsu2xeY8IWec0qWz0mPiMC7ERkAdagZVSogcEL5y%2FKUz6o11nNX02yupTfWmPNVZdiyn2KmhYrvFN%2FmNnLtktSLUzCgVQFqjpLidG%2B9INhDMh3DjB%2ByMI%2FKkccGOqUBv5uay6Y7T0Y%2BS1sgafR0UhnACOOLBC3JZePtsMjHvJ%2BZyrKLxhL1Vx5UX9hAN1mVbEjCwh3csWmiqySdkvTpTgwmuPxBun3tpiSzvLl%2FcBdaa0dp7V9uzXLtpTOQED766%2F7ACO46dITliw%2BIOTFPiYqfHLfz7BHa35sXloZwhbx%2BNM87sp4v2zUwc74ZcqQabmMl7Vu3HFDRR%2FHKH1iGQqnQoND%2F&X-Amz-Signature=67abd5fa9ad427f3d74c62a11597e7506c457587f3da53d48ccc43480f977136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V62BNHUS%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCICtDcBtcZWud3FY9YOMXGAFMZhZonnZ96hDduOzUGCK1AiBLtCjoeNi9pmlr90cicmlArc3%2Becw6UC86omI5ghQ%2F%2FyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvc0xFn9QVCD4V7TSKtwDBiLTQL1MlEt2ImRVdynwtZjtpeK2v3OjWLeEtGYW0Yy6TK0QTiZBH7VrZV0MFR2NMDxEpz%2Fwj42PbS%2BIwut0VYiftA56HVW%2FUQA6wDkPs5Dl8h5kHX%2FcWGvhJcivfXbcTYKd4nsM4w9ii%2BC7AoE9ug05Hw3c2ToEQDUV03pI1im%2B0pWbwD5HDHf6DzKE3qUT95DyDgq0eTrNGxpgv0nEWfA4GqwhoRGHkMWnXalj2YsUiO2vjfBqF7aHp0zJ8uHcPBvfSvFguyOxVyHUqP7vGlp2gEAOp2qNQSAxdBImzKHCDI2%2F0nRBLodEcYrlZOjXPm9ufm46esUTuWqyiqUzmf03POtebhEgcWKXCNWgcYECDG1fFVFFsIlO9w1Up2Ga4NG%2FUToNIK09S0zthuo0Oz3xvcPb69eo2sFWQ1Avg%2FWmK562uC%2Bosyip41gD5%2BU5Gbk0sPlxbTQl5pGeRl6qtUExtKloiMvTA8CVQdBsiLDuOilRIBDfpj4gADCFdjb9WOA5XppqV0xWKdZmE%2Fdw3f1MIx1QQUkjnStPBvkZY89XqMNPD1IhFp8iR%2BbfafaWvG9f%2BlAx%2FeJD1%2FIUuEKQEm55NwhOC9qSYOh1uZs7yesUijpu4wbnMvAbrVswqsmRxwY6pgGMmB9YUpLX5uVnE1lqIWMUN8QnANAFU5mlNy%2BkJySM3jJ%2FXVfFjdeljVeJKgbJDhsplQ8Hyuuf7girXLAlXZiKeyPH4aLIvb86nCdJQCSiOJRx4sAGCG7Gx1QNqQdiVp8aDJZJU4eLpTB%2Fj0o41%2BjBrEz%2B%2FW3inLwSOorAxTwnhiyVl8Sx4qdEhHwlkKNwKj1ldLRVJFreTYyFrKGtfwzhmnnYZQLC&X-Amz-Signature=aac0278b5c0188ca1e305fd21ca5546b6e9d1cdaec7c456bb00ed6388757e74a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FDOUSNU%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIEA%2Fzl5kXGkM9YuUmvGZQSiUct74oI%2FTx5I4apKhUINcAiB%2B8RlLaB6gOy0lRmW9m0I4Z4ow%2FR5bVs%2BS1%2BTQx5WtdyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEj3PsUiygFbVSRBHKtwDzckfaJHQ0LLTZ9ojEUYRs9u4bbkiaWAS3EK4571DYuuPGId9NPCkhdH7llCSIzC6OR%2F7LLJOOeYTsv8k%2BHVfNKXnyC%2B1Dz8mtvsoLt65%2BNlB9km3V5gTIGWojgUeJdys84sxCD8ice%2BSKGZSxt7S6J%2FrtHp6Cy5%2Fc73yFf13BtXZq%2Fyy7I4azYaEpgUhlP%2F%2FrTwyLw7fxj0FFGr%2BImectkmViPEOcqXA3zuikKFejOGC6nWnvMKOGy0aGfp3VypAEoKNN%2F7C9iGzUuapegwRXkHUXov3d%2BNYixxFeng5Od%2FU8rbfkHJ%2BdyYH37XGnAB3cGenTh98aaWk4KWU7G1pLPw6iYABmHEK5XgfeuH59xy%2FUYA3fyBaXG%2B0LJLEET3ov4qu%2Bbi%2B2a%2BYpB2enxU%2B3OUkDgTWz6zczGt9Olebn%2FQiVbForiHs1CxALvg0LnvQGshpg0J%2FzzJ0kmA9hdeBbOl1IoRVDxhVR49bkO8JaIQ%2Fwmk6UCDYCpD1zlQ4siYh5hoZIViAoO7K9cOR%2FVIuHhISbXBd%2B%2FbvmzAzPTTTOReprxuCWVwvCzktJ4XomsJnk8GSxt8h5KYfyY%2FoubsqMLE5%2FM5fkieer6sQvYkhJJrXtUD9eQFjkkNfducwtcqRxwY6pgHvugpXkgYhE67SWVAn1%2Badvq3QKk4p%2BHEMsUKDZyDYGhuNHZRmBikbm%2BjIFBqTa8GRI10jcuPhX%2Bcw%2Fx%2B0EViIKiXV8kcWhDN89HUsYC3B49u4Z84TNWxwJ2vRS8eyPRXyxsSWL47h7IUsya6UAZu2kopnKnViUKiCL4v%2BE0%2FK0iygvYA8RBSI8PQrUHOYmageZvM0sckjbR58tnVnSwjq0W4HYGqX&X-Amz-Signature=0f3ede14f183f2db35c5fbfb2ea644d237cd59f657b78a1dbcc792b488ea13c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

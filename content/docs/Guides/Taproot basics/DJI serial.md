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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPQCXEND%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIGE18%2BIhAG9K0tsXg3SLrWz%2BMsdwbHgXaFujrTe9JM9OAiEAvTqwb75vKYOXvIW9nw7t3w0yLjM2GUTqY90KvEIKnHIqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADIB5tt5X4oD3Dt1CrcA5VeTYdQ%2F3Sh3W9U5vpeLqljZbpgaGnd9%2FIrmG%2BhX0u4TEyzlwDUgtUVTy7AZnLeXZzsNL1UogywUqn0vRo6NvZeRuNZdrKoi%2BU9rKICP9iz2%2FnpVwSTFLXijT7sdBLftPmPtrcWidKvggQTZSLEyIqhcC0SczhYv3iwVuxasWOB%2BxhKA%2B3W9cvqsun9shkiHtMLzxLf415V4RlpawSHXj4DoJB62dbN2nRQayc8pzLZCfchFp%2FinB5YaSK3Cbn7AVrOPpwKXCq0n%2BJ0lvjkTeUBpLPLLbQYqLm7pIflIDm4OEzmor3IiS1IUNdYdBxEGaFVRKAzvDj71eXGNlJTU4z6vI%2BhQdBggLl7YVTKlrd%2BPUb6puv0QNhn0kVFr9RZ8C31Zn6d8doaFUDnhZU67FmA1qQh37R1YX%2FRZ0MxWwRuRBh%2B4LjNKTLxILvr8FNR6b6%2FHHYJ3OQuJ1qaYNjE8x22ke1JXsPRCAjkLmh3hvIxq9p6muyroumsQYrA1aWrG11XKb97ymNxvMILBTGZ19cifmMRx3h1umNluxGtI0MFKv3E0cC8WqZnVLHleNmGKuVWSNFpsQZAX4OJog%2FT459pat947bsYuevKVCb1slRTM8v12NYhQN4Bp0KdMMe16MkGOqUBIVwkL%2BuO5b29IOKL%2BZ2DZE708Op%2FTKaoYVZekNBwUDHZ7z2WBSxHAkWswEreKeerbh43jaoJR95HutOoLCLsuUkGJVQ5dKeH%2BklpiXC1pVAW2cDg0vP%2FJQl80CrxcpI3IXerYiuqm6EN3qAnGxDFVFxE9PSOf1xpIaHwm3p%2FNKJHDkuvCoWz3I50UwhubGzElwcAxVjpM3b2JNRCeuFOBs6s1ywi&X-Amz-Signature=b9103146412988f7c5c02b7c65c20e1dc88f2c4967bca0040047056337087ec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5LIT5KT%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQChnD5d5mRmjn3W4MTf8CcSJ2SG3bgrImkuHAw2YcS4HgIhAIKslNVYMU%2FgizZx2p%2FyQy6v9lf1txzUWZzT1FetL0V%2BKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxws0rwcfzgxF92FCcq3ANFRfUZAF%2BUwCyp30nbpg0QrRuWBfyqXamAvXOSMe8aUhHNhhb45ePE%2FqtnEA2QqT5zP0B3YfBITEER25ku0j6nqUWhc6ZeG3Ueb7VmkQneelCkxIUCsibh1A%2Fs77Yx7VeUc0183CVOJeO%2Fn325%2FmML3RAQSSY1HPShhGBMHOP6hH92I2X4ntEUJ95aft1s76InmoDKwM%2FD2RAc%2FrfOVvHEvOdpFJI2NO%2FC7DR3K7Z%2BlkeojMTbs84DKQpZn72ygrk5x98ysqpsJf51ZJNsjW%2BTEuKw73II3N48S4j4A5pjrg1UsmD2eDopzyLsdn6BTe9Y66lI51XTH02wh6%2FZOtIWDLfEFU%2Fl2wIgm%2BkmR8tPhbFZzbbzeiO9WIS905CZXiTBVemR%2F92Je%2BSEPQJ12GWltGxL%2BKLD6KoJIR4%2B2rCEEnnqT6wrFYhu5ynIAhBqQxDS5jpw1A11MrFnoTcqzxDoERbVz%2BWzlN4doG%2Ff3p6W5xL0dkBtRlBgAls5jif3iNRO7e5a9%2BFcf4Ub38FDximFTQXG2kLZCLtdTJZQkARbTdzmleZS%2FPyC%2FAoxPAMFpHuZ8sU0k8SwhMGfIzYw4RjzfCbzE%2FECQY2vfT1sL9QCFeU0G%2FY2g3TV7%2B1h5jCptujJBjqkAZpOnRCc1fvBTpe1AwETdcvpUEapH%2FLG26gnx5Et2p%2FP3q5fj%2FWKkpLERndmez6MhfGHgUseeS6UWrQ3K5KAqc9Us3yvVu4L%2B0IlOK3tzhzXVaIQEyJvTJNOeyei7vZkRLrjFWPT0XDVqDqCdcbNckPbo9%2BIizFNBoSQihKcDOiFQ4klYj4YTHmYpS3TrS9SDECvC1oOmdQGuhR5%2B0oeRZACbPh3&X-Amz-Signature=5ff19e373095122e49a2cc03d9ebc50d593117047b8fb368b6896b3631c0ea5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVRAYB76%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCID6z7lD4ZX%2BSofLlHIPV69QDiwQc3fCEo%2BXCLVh7cLLmAiEA%2Bn54bTYtk0F%2BNShpmsCzMn4QrotkM7ywuGMhzNXQl00qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FC32IRHYZ%2FidRijircA9bI3bwLMn3SiknXo0zZ6WSsRD9YFfwbrJEKEO3RhBVhttkKyEYnqYVUCdh6p8A16b5hBTkChJWJxXCF2dW48DUeEV7dsFSeYz6AzTJrv%2F7FkQJTDbmJTwkRDd50GemMQuBXvc2Sxsdr7%2FQnuKvjlo%2BL%2FmIxd7tN5WGzjO5kMw0Oc6yFhQt1NrPqbSWBRCxF5q%2BKOB0z1t6dj62RqwSKjmy0JPsSLUAJzWAbZke7w0BqaVGWsNwsDmINxBGHTipCUL4RukNoHXNx6A1rO1Fk0ztr3A8X%2F%2B%2Bgz%2Bsye2aWSJovCh0M3TQ07Uz1gLP43pO6Bg8jnaW6MDYKt3Yrf7xtoztsU%2B4TjsY%2B0I7TQjtHoDf66zK6ys8UYKHdm4MMjp2n3%2FtVbTdSJLfRwt1nZKP1%2F5nVB%2Fo1ehA8yXub53bgdjZecwS1VArK7HzvgEFlEfMKYsjkFS90iq0qy9n8bVWHcTWvbuXR3W48VPsw%2BUw0RVubkvpcSa8EQqr1yn8A%2FGSb6kBLq7N0g%2FzFI5Me2SH%2ByCb0AZV8HfiwSlIvO2dR38D37Gn38TgwKbloh2X5ZDiPpGVjSy490kzbcSg4QrmbBvBKIRWqCQ4PmaOhrJYkbQXvfn3XZcLxt4%2Frluc7MIe26MkGOqUB1xp%2BJNiK1rQjkt1q9ynh46RQLYjR63uvtbLSAXHjAZufNqRH25CLSXxncATRznPTIFvsam7OeSw0ZgSQxj1BWvp5sNGmTky7yId%2BR%2B05MEFdKtw3HM18k5wSCYD7evUdJGmPQ4n%2B7Y3oFWzKc%2FhmluyJzRAGNbRg96T2aeDjkUAzzBty32etNmEzv04XgpBSt3CXFtt7OgmYsQBWrWTplObZNJ%2Fj&X-Amz-Signature=2301e09685b68ba4a103af823ed58d9d9750a6cb8ff6b5024202304cf2e65ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HPAKOX2%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIE85jfVx9VdTJYdkWqr3JMTBb5oZIfrywBvcrFO8IQAVAiA8aM4x0a6Necm1tf9yS7kcPQWOgL5ULtOSg5s7amBFLSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BMUzWSP922T6O1LhKtwD4emQ7Qvn20u7%2F40dcnD3K8OiIVfyJdaf97TYSEgaM2vHjvl6hJCzWRoBpNABJK%2BXfeNFTuvt76nqeJqBBByTfqHSD0nZAOs84ug7jnJviNlphEXf9aPbMNtAjG8cbTpVln26Fmcz%2BNu22Sl3GrWhNhr0gfEWPklvahAjfZt4tEZ4A4v8v4Pnp9o0qwj%2FaMud9JaShEcNgD6hEW942SAGgMcP8boekFkjne%2FWmI9lvepUbrNQJ5eGoWOpsxQhVocnMc5SdAYjmLJ9F57ZXZ3pPkjVoumVtsj73ScqpjHSqfvwT6H2EypMRF73qMHGi5UO75dEEUI2zr1Q34QQzeopyMm3PC2xc9NxLwNKlpcTiwXAZeb9IVxkzGsBSxgDnUnMjEt07GO%2BClogE0UPYXoMVh84%2F6vv5s8GgS7V35v9nY3twOZ5PFsqI0sfe%2FwTlAl3fRxwx%2FVPyYrXr0v9HLjBFeSauLOcHbMi4MA3WeVCXd95rriUXjQy23BclENqFFKs57ESmvR8kBMCa%2BsRImakaJWq5RNT5nh9SN0hCEofq4EAU4AyegQGSW1DUNGEQh2wdnPHtZa%2BRYqB121RdqqsZeZZePn%2FMlaihNIq2XLVTj3%2FfeBEReVJOc%2FzJM8w0rToyQY6pgHkTOA7UTylJ%2BmU0RNTbPkIvWNZAmCjmJ%2FgwA5xCe1YRY%2Bs5L2gGfJ0i9dIIS1EguC9ZQeTnqD%2BOcrlDubw5AUiuMhIUGDDHTiJX1D9NFSZbX7kPPK%2BkpVKWIMrfNvXVoFk59AXyX93IqrbveEVF9r5lpg6yUVZ1JvwwUgyGF3V0gSzQ8m4EuEmAL6HsEQaSjcmMc0WqIMKywSM6uaNq%2BKIETkjIigI&X-Amz-Signature=69295a237733ab7c578c6ffdebbf64be2c1d699889280ece5b29657283abe468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

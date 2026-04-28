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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGFWVHH%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBAkvo6amnmsnz6H1PlQyAQGnANVl%2BoPEojOMFahrz3qAiEAqhZEKfdNO9Uxgzf6y%2FQE734cngJxSGi1b2zh2Rv4ht0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUuRUArszVpL1I12yrcA5SSG59XpN%2Bm2euOHMy3jJ%2FfBgVhjJFJVYzhfmUz1UiPNqg4f14LN5fOEc4tChddG2sZLQdnQv1nq2XO49KwZ8Y%2FFO6rZx8Nwb2riWvMiFY9H9jTwBY3FbFL6WVK2pEWPaIl2WCPKFNvqUpi7SLU6saiKfwJ1O59JZ9UhWVXPjGHXw7jBX2Tv5f3ymHZucBA2Rf1MBzDgNWHnnejoTes92%2BKqybzX6BzNnlY3n4Mpe8QmhLpz8%2BL5VznltSkDzmhLKJfr4JBieDmtxcQULatsChez9WHIGqiwne%2FG%2Bgk%2Bor9AVAPzIhOQj3narYhgwRIbA7htVzoWdDvBfiIajC%2BEqyLut%2B8sHsexrl7WSnUPy9olSe8N5jFnXdFz7eIf2zm1JsdALG1o3cWG6fyhUryfhr9rnow7vaOBGUNDW2H7LXv9b7tDPvEyhTi51rm%2F3h2Uo7ft96TQqK%2Fa8fUQsxkwSfBjnF3T0ZyRu4fLuH1KtiltijwfHPu2VvExEtGDCt1fng3qTN6eCY2wA6nsDVlfIjCgksIjo222R6he4rA%2FtRW%2FtqAggC6e8Cs2KHUlE4cOYiSQq4FT7fCgDOsmtHzik2mY9zo1i73vGY2PI93rpsVBKNw1aEejFsCQ4FaMISjwM8GOqUBVIlF1f8Tj1c3CZl3ol%2BQRnonnn9DLij9mxP3C0XMrkmiHLcLr%2BxujFYc7zzB0uLmJHDcc%2BgSXwAfITIoXeyzuqjbuRoTxTNre52GQzvgnjxSROCSHZKtIq6eaXrBc6fELbPT87Pi92bAF7TYArsnC10HWBNL7IYl9pXAdb0nsoKsc7rXACVVTlXJytlMV0LMmeYHhELdvULpIrnTGKpdyhT%2BsCrs&X-Amz-Signature=a04c883fc0d3e24a9faf9af74a6fbe3e572856e6f67eac2aaa4dc3a6709e2fe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZNEHDNS%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD6j%2BkKP%2BHj3rGqJm7gecQUEXCOM3TJGRILojjcX9ArSQIhAJEKY5d7k65Br0sEtSauoGtZ6VJAyFaQvjBo62t8d4ZSKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJLuQsp%2Bwcs5upVQkq3AOqPDgrOOYUuPQyjhL73vBGlb16Cu9cAzzckakcQTGApoQ6iCR8nTS5cFd7SUC9kfXh0zfmUPN8OtsPb19xwAHnzR2l%2F95GUFRfCBvXsdjosXOMcLQ6MM8MBnU66Aaj85WBZRcuJ%2BTCjjJi8N%2FxKdszfmz18L4uIpTUV6Ngu0AIV5QWtekwMlleZYwRniLOaaXxP9%2BQa%2BHHFfJipybYY4auvN6qe%2FBk%2B4LJoqStZN2Bf7cn6vAmCmtltpQn2HXEs9hmRj5Xxh3ZNrhz5LcN12nJ66Z2pK4DJ3cVbC06R7K5ee6ywge1TZi6mQ%2BsdYKMLjhpXj9MxIMqMiYIqGHzsxIcOAQG6qmMEfEcSBl4qM3cMAfFf9VKnFji%2BYSp4ma8pHeFGWJ5kE10u%2F1jgx5SwaX2Gelhz6izmIWNV7F8N%2BOxBV8DBzLyVCox60XUKb1C60KLBvEzO1N6y8GajqgsVwGV6ylZ3xzokmv6zvAQRLdMVLvs8lU4rzYPi%2FbsQOQ8PoqrNH8%2BYCIKOcEmjBUOy%2B2dTyyekA%2B%2Fr4uG7jc0ZqbOZY8LAwFV%2ByrbbHGAGxItok3LQxJF1eZxo%2FKFZskrhJJLq0Fr6MolLpfSnJJ9qeHNj74J9ij69NxlPJSTDTDNpcDPBjqkATRIE%2FmMdd9mZdCW9M8trtzdnrmhtv2rqwcee1QWY99o5yCchElSrrKpMQqTXkWr51GDK8WypQjHFFCGfKFYwYvD4dVUq8Uil1X%2F5fFD4lwHMMLDzQEPqA87GcPhD6Zo05U6t5q4GtRoAE1cIrqaK%2BpyF%2BmgYuOGj0%2BJtHrqly8iFEpqtBhQpS2j%2BpjI55pnKx3f6h8yilU1smcX1eiiuTHTEnc9&X-Amz-Signature=8d261b0a633b718a697e0250afc1331fce4646495073ae905ab99ec1cb655614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTWJQGR2%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCID8%2B6UNnqnSI6qRcqpgcwFMq%2FVi3ajINlTXWvdi1yBYkAiEAtqs%2FTqwVCxUQg62fALccXUI45wUl3jA0NvAvPxghxdcqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCs45CW4MFDj7D%2B8CrcA1CxDaaW5a3QHOM%2B7Q%2BGNYeiwQT7pDWV8pL04OtaEmJsm42iLpZlqYXGCkKKbjBdCkCasXXaf%2FJRq6DGZfL8PMKs%2F76m7IuYE%2BExdgOsW%2B53n2Lo%2FH1H56YPOjn8RLRor%2F5s%2FQSV8XfZp%2BzOHPJhG3bG2GGaLx9xWEPkoh0rxsytzNNbsqt0WNARUdvJPs72OW4TzSGb7dblShR4epowI2eAA3d3fadv8LgX%2BQNcDTS65sSfuE6kqGzOw9CsgqU9ZJnsjbN12PyJ7EWlXCKd8bZ6%2FfqbFTb5KC6oqdw%2BKkGwqf%2BH6obGfIdzE7%2F7XWQxyNcn1SRYwRYVNp72sOp5BXIh8Qv1ROQW7VH54GDCBYcPsE4s9lOGA6JP4x%2F7p8KP2oyHJ%2F%2BKty3o8A51uDURMxd7kY5EoVDhhcq0PFRmD7VuZ2QJ0ChzAQIDCLMBL1%2F%2FMuBhDsvAYvalWA%2FRlNRRtccExqnHVW1yMvNZIESD9w3hltRGOyqPK4Vs%2BV0i1EF7uSCNSkt9gwfuQiNTJEetnLFeihPdVf1cXXMzLMxtLht936DuLX3OU3L6UJHqL2VbcZ18gyhveSjhX%2FFwEjv%2FUJzs63zjVTKS8RD1sa953KA30znEx%2BKHVZmTMfcEMNWjwM8GOqUBdUsT%2Bnt3OwKnnAdtr2Ac1z%2BkUWaGA23IRtpgMj919g0lFnWWU2D2Fd4UfYanNwUA1GdbOwww34CKgQPn0%2F2NGvuJz7oWhl8bx934Dxl27%2F0OCk7O1Kkg91bhrg6Dh3VGOmHKWv2QiAwuTMPAuZ3vrrYIMElA2cIwsne28NxMEn%2FYEsFYU4kRAeG%2FaRuBzWvOXGdRSa5IWcE5ztTt8qC6C4YIGuXL&X-Amz-Signature=8fc6214e9336e3f5fc81d643180026217c1c95426a5e60856ae04feb70bac69f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IDV5TZT%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDBVJyW1RHoGxwdls7oBAumLfdi2pCHMsTarrKOC6T2AgIgZIvm%2FdSgQmGvVbTudj6h%2BXce%2Fxt5GFHZ1E29v7JvejYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCVnjtS59sGoVHYuSrcA0nZ%2FyiLuasIyOP89OXEuRpdyN3yBq6BnJPEQ2TaiDRd7s2s5iiJfa58YDDHmHzH%2F7q2aOX2Tk6MtpFQ%2FbXfF5%2FcBNivg0xub54JteiGlEe29eIjYkkkehh%2F3mB6Tb0zHLZ2VLlxqtA3wfsXna9nf0TGyHOWR5%2BOZZSE%2BNxyy1qG9%2FapkR5NAbZE%2FAy74qtBeP4w9aBWKaoiH2NYI7%2BUInWWieVOjip2qZoDkWZ7FDrGsojG5uAZqnpamyRL11UlelIYqmy7hxqDAUS9O2nF88hW69g%2BdwfTyb4QAri7QOMD8reLiy90xaOHH6RllOI9EqhAmoHOlbcTdndewK38ERIvT1UgyiiMJVI%2ByNXgIjXtOn5fmR3XBrqbFmCPwu%2FFeudNcTTMQmq%2FUBHCo6OPCeIQlMZh3kAtTXyaYwjxcdnP%2FCQeH4Jk3ofoMRfKhEtowfg5xERAneYuLmo47ii%2FzEFMHGCaK3vGSdGavERNM4%2F%2F0wQmaNHhCF%2FO2%2FmtO3DvIzN4xuET28%2FXlHpBbbflaGTqFxqW%2FWwd78GOi1Qe%2FQ8kx2CAwcAaTVYX96XiZQ9jkmRGF8x%2Fs9BcsU8j0HVmrrXFGojf6yq57p6zhDC8E2Dws1d8sEuqfF%2BjjtguMMulwM8GOqUBvmI9Y%2BDZ5OeFXlC0c2aKnSj3xRIKFwb4sDMI6hWtlYd3OerZ2cQHEjsN81a7RCH66M3v4FAbUH7Er93BElO9RGcJQWAKE2n4BWM0S8Ip53JvGyrdvV9pmdHDb0PrlhsNiadOSPpYRvF4ekfb7RNLJtat8eAypPvn6I%2Fr2hMKQxMCaUkk%2FRMLQNxFW2jLe3%2BSzZzuRvgkAnXbw0uxWwskv1MvEs5N&X-Amz-Signature=26368d7a850b47ed5770f71314a0fb565cb30aa976fabc69aa30b6f6672b2ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

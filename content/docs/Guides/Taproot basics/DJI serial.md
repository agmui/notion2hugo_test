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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PUYUSPT%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC4x6Puowfwi0F3wC4LG8p5W9YooiyGHDkbMfl9tVjaqgIhAPrT%2F6S30tG9nsW%2BqipANt2Wvzg279VENIPB%2F0plwnfJKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgHtugHObsM8UDh4cq3AO8yxwUe8guEcy0QKgFkia1XS%2FJANdIhyyI3Ow26m824xhaTWRmL94nkPgcc2JzLu02iA7uv0Dd9G1muoRJbBu9S64m9aLPrmzOyY9ULrqkcDPlvO8FXZlvPGn38Y7jQr71qjHfFYD7KA%2FbC1oka3djsWj0ueeGDG4OztGOw9TZx2pBw8jlJ5vhJ1eiTfNfG8SQ6EriY78UGbr1Z6m3FquMQrnsxEVf6snM20mEM2mZBq2%2FcncoSN6%2FW5U0lDUFKqwvftFQHzlKvu6VCDB0eIZT90yYxiUiF5hC1KgsTv5PRTVWbyKvuzWYAvA69l0XDHdlUAVIjqAK5i0%2FLs7Mx0D0KLx0mZdta7goaAZne8rI49Ty%2BL5KUhSjX4zVhZFaGs37Oa9sqWzGzkx7040ijTl69CDRHL5ZSKiiECldwR1K%2B5MaRO5XzjrJSKbCtsJUyqtUqPeCRRCHI0sDFC%2FxxSP347Yp37OEUONJT3Z3oqXotuW3fk39AmSJO9Tal2Sl%2F5IupHSNPVP0NVBpyLssB1wZW8QLtY0rXE7ToUTM3y4qWMEnHrvhjuR0xNUMfPemzrSulIJ%2BzRVwmayiCaOG1QyLOCQM%2BEwSEhSyxJY67fy8imUP80LKYXwrH1Z7gDCR0LTMBjqkAfLRH9jxguq6p%2FF7jFMcxmKZtxedWic79tog%2BohkDiOU5D60cNcWDXrHtrVeGmF6OrkI1pxKbfOjQd2P5r5aFIHxmqui7N9%2FwLLZEL51AyYyUSpYd1nbJ%2F9YhIrM6PoOKmaEInPZE%2B3dX2upM4DEE%2FUYhnb8HcRfxZVEB8kytfe9gH8Yi6q3UVCNiAlTHgCZmzGhX%2BjXVGABC7m7WY%2BRH9juTrTl&X-Amz-Signature=d66f332b89dedd187be5f2246475c095eca9744fecb3a2d85ef22964367374d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXVOUN2L%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCjr6AxsYNg51GiZsbNCPgWLLF6mTyiic%2FdoqQz3Q8s6AIhANuiwP0qAAqh7wnj4%2BdSdhe6UfTFSadyAqCS9PAoaOEeKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZY9kGgkqXUaDgL%2Fwq3AOjq1a%2B9KAWtQstBu%2FtIQXL%2Fzk2aVlQm0pyTw7aEv9el%2FMt5cSADCkHVViNAAgTy3jiGCw%2BPYDMrrsq9xKi6NMJ07tK1RUW9gnMjYrv4QLgrLVqHJB8EoKFzpZc%2FOPIWuMc4CNF98kurf6FofFiH7eduvQU7tgopzgY1m7dR4N%2BRhpkKOHbuqb8fadY8np75c9fOwNTv4P00HZ52tzYpJt93L34%2BL%2FAa6xCU0yXFVq8eNf3nYN76GqxyIjbegwdkBn6rIzsBLEijjAJYeUc0Yo9sAaqR18EbnrZpqWwRlvwN81uoTcHiuPfpG%2BZCh9ad2LebwB5abxqpMlxktXDXSMsr1Xms8ZDSaKkRpgwRCPaUjiofdfmW5Fn3pIi%2BvG848pGI%2FA9tjm%2Bd54NQQobx0x6gJfjMOVZQ8w%2BjGjI2OoAgKTtNhsAszhrGgFTo0sQ22b9lcH9vAHT3KHTAeG8rNde%2BYIJYXg8oX5CisxpoGL6DspYdf8GqVY1sv3WwmvqgXnosZB%2B1NndkQru3KuxkHJ10YP0OAH0u7XxSXOXGNPLnS9ZUp4RWbdPnJufJETfzFWgRR%2FSC4OONh8EKORsySk1uqbIQZZxclFvUQP98BqqSifOPQorAcKGwCR0PzDOy7TMBjqkATf9Tgr%2Fy1%2BPlNX%2FCzbpghKUNm3SF7T2PWbqMFrYNTV32vD8yhLTteMxLGjnIheGcaGjuFq1nY83hLE3vRpZS0QdiDOyRDP7I%2B7AV4YKEJ6bIlwtz8X8VFVnnY0xOTlEPlkVFegYtq1Gp1KO0ysNZeCgTLD3HONVQ34s%2BMRk05OP%2BsealEVCwTdpyhL5mj2rEMQM1sny%2FJzXa8qb5NGvLSwPHyK%2B&X-Amz-Signature=0b0e4e4eca30fa82b726e7420b5cc965ea030adf11ccbc97e1beecf202459f94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LCMFGEG%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIEAhiNemN0sLg8N7PDTTcwAaDqReERdqsnYswMrs5TyiAiBUTttuhJLbJO020U39R6gYX1cRTAJWtMOZFHRIwJ2s5CqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSEzwc88coYap%2FLKgKtwDoH0lW97Ql5WQCvFFXWiloeDo4eTiKYFn0O0r2wymRL4QShVZVCjhrgWTN4B2eQEEKIBX3w1lSCSgSI%2B7LOiwJiMibyejR3FTMGq%2BqMSkw%2FyvslVNVTXzjhWOCJVCqfywIT60zUpi1fImUpdYip3wCHUePt%2BvuMGNyY%2BmCk3oiaXQy0qg9j6kfzb87AUpNVCc66v85az8ObCLExKUuTNhe%2FMVfNi6d2y7R6E7ZJbRAJnDQ2K3ym1bKoN9dF3ci14YmcUafLx%2BiS%2FvXACn%2B7QjH%2B5jFWyySh34%2FmQ%2FA%2Fi6sgRZJbzfdVAtiMH8d3g7IQMuheA6XNu%2FBYMCU3WtXyp3n%2FwTzcjl11eU3HTfTaSYjiGjzyeLBw1Ki2SizmRdupI3PPL91mZGpLHWDad%2FjD36E53TMQo4vIA5Lcp5mj3R%2F1WMf13GsE1MRcV00fEpRXBfEKnsHwgxGI0FH08tFr5muDSXJxIR0o9REWBG%2BNXOS3W4wS0t%2FXIl7LUWgEti2HfK%2BiG0ftXqloLvp63TnhCVMU1udt2CktJRp1vVR9Yj0XOgpnKxAxaJWsbR0%2BbfSM0YapV6bQXO963TvFU59c7G2DTTWM3KvLcCea5ztP7dYbCXbVsoAXiLScB3uIkw3s20zAY6pgFl%2BV8TX6KcRZ2gcuRhOZB0AeLnUuxThXP4Ll5L07Sv9MvgiwM2ZrQ2NSNHF4d87sMW1vOSJMTz3CWQXRnbenVhRN1qri59lqemUflu4ZRJBo2qxstsAhi2oYQndI0A1M96Wbcr4yj3Bs4zME90J0b%2FGb1h2DRrLBCfiOVW9PFBE18pKx4Fn3zNF8hPxfdkWgB8VL%2BqLK5sw2KwChGPIzytzLt%2FhxAn&X-Amz-Signature=1f9ebff9512ad128480ea14fa70437529b713b5604a8d4d8f5fa5c5a406b5180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EC4MU3Z%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIC5kr2IMCmA0zNF5DmdgRmOBXIq5aK9X1xOtSdW31TodAiBUGJqgr%2FO%2BColK1IaUy8JRRQmeK6x4ZNpja9HV7M8L7iqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX1PsShrr%2BSuKV59aKtwDokIKsnXZyRpcjd%2F%2F99CLf64twoFbsWrXEA%2BxQ1dZ0vZAh6HKqSdqB8jZDCSACsVKb2c7UBIDEsILWmxsrwW3%2BIYnpkSyGDQG0lsm2AE7Vf%2F0IylycYOsbj8Ax4WN0FvUWVrXiKPKwVl1Wprzjw4tXRBbo5C4c7sQD87AW71gcSIPBx8%2FoQm48aZu8X1dufXEVBUl%2Bar8iFhluwIJBizbtA6o1EA6Pi8jSvQuxNaCx7Z8TU%2Bdwdy44kTmoS3V0kaNNHDw0noSqS64h%2FeMyP35cxFX9JAaTw%2FCHBounQCVlgerCEPVftCEaCoKom8k9qTpj5nHHuR9zxPa2I0MKN0x58kYCGHuWkvjRTroe1jsefOXXeajlkLgxS6ID3i7ijF%2B4%2F5ZScad4yhSchzZ%2FxT9q%2FCVp946VDwFAaTKMgq9Nz%2F9gIvd9zwMAI7te5hoA7La8lsy%2FQ5M2WF2%2Bz9DdTVnaT9xmrT6u7m8z%2FRMLW9CwVYSqmik8gaiu0Agm7yZatzY%2BIzzTwwrGozygVn1TI6pLrLgqGR303v4yrGR1ecLEGi%2BNqLvBJ%2Fu%2FxqG1wX%2FvOuWkzVjsEneZP1Hag6LfjJdYvADxOXgDWBLwbpAQFtehNKMSjjzw2RmOZbf6GAwkdO0zAY6pgEK%2BFH1vq25MUY0oiokn%2BXUZFGVeoWj1qN7VtbECV92%2BuHjSxDcQnQFGfALTXHPqCtoeWBt6Mzf3Nl1WqtJwLh3PVIBissmRqWphNEQLbhzz5%2Bra%2FJHip23rVyUWqN%2B9ZyPf7K9rcE%2Bx2vNVi2sMa2Okbgjd54VFLPoqn1r8K1DfPZtmeY3C468DvlSkfqlqi2s9X2vlc8DaP%2BGPn3jgtaU%2Be00LZdA&X-Amz-Signature=a08e175b982727bb327bff099f45e3949de7c4bf566245fd6c42e0ebb11cc29d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

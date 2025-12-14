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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MY3FEIQ%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBNY4I5VtpiYcH%2FMvm%2BMbYiRh55E3BdMtEw3CUNIThLIAiEAquXHNHq5GEMZ4qNitRGA99lGRbbzPofH3W7ZsWEadOMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPcCeiOBQwJuP7wXqSrcA5A2Li0WXuWP57dzUi13rSDw3x3NXXwhhn4rNLqmD3mSNLLr3S5x%2B05p2d7cb3vOJ6ksFdgSDgxMQ6xsQpzMD4cs1nn7w2dehhjzPWzgAj1iRHmywWB34yCsLFgvWI1Qh02yM%2B4oAdk01tGIL%2Bjpd6wVzKIn0eWoxt43TAvoIkL%2FSNwERL24XGtl4tltdrMqlFT8Tb6FCsakhESHQtN7Iy5RJsKqpGQl%2B0HaLkkb62cF9vYMzQXlEWTStXzDgPrTKxp5bWOGqmLh2FcbmgHGQqykuBSDMVuGu0Lu5e7lS%2F9hJsPeOizzWVl4DCp9O6xFnVFUeVP3NTzAyUY5WqlYm086rX8bSZYIkYWuUh66vg2HsO0YZdRpb0%2FFFUy7FVXt3462mZbN6ROwEs3IfpK68EvQyv%2BN%2FhpBTUVtNPLhO8RUvKxNDZZbC6J8i1S%2Bixye6eA4Yrre8tmIwlQj%2BqS%2BFGbALkh29L43YV5kU0z0a3SjYt%2BE4h77j3yM5m%2Fqxdc8LdqECOVpQtNBvgrl3MyV4nZV7W3gRlyJBXhI2rrUEHcDdOvT5RkzV9F1Q9Zo8EqB61iXAtqgLaAqBzbsrrOmb29LgmifYBjnBeIKq3Q1VDv7X7URI6OTGxMQHN5YMJyW%2BMkGOqUBb%2B9epFIe60hgUMbw6lc5CfrPPFCbfGdDNSmqPEsUWVMMtbryHB5k1B%2FUBBAxnHbTmmHub%2B%2Bj0d5najK%2FYOL%2B0TBLdqgmXNy1a9WagQh3444lamBiXOqtVBAjFhrQYmhxsxLouF69RDzsz144vCotiTOEeDVcShPo8%2F3kgcFsDDl8qtk57B1HPMLeRqryF5qpWjw6xXDl2wFqTuuxwlOfdRcBCyaL&X-Amz-Signature=f6185ea6f08fda9d3e63c12eebdeba4dff79eca6b3d60a13f5fd8a650da1c044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676VKA6WY%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD05fuxxV1Fj0wyAU3BAQqLqeASm8d0AmqJtfFw1ZVb0AIhAMKXxzFMLvwA2%2FXr8jG0APyxM9iWeszlI%2BvgxCH8y%2FK0Kv8DCCoQABoMNjM3NDIzMTgzODA1Igy2DIKJKUmP%2BJpOVIQq3AMr2bLdACmYly%2BqMkyMHNXyhTQblQXNmRa4s2dbUg6rSOHQJ4UxvrnyTni%2Fh8aRyxx9cLmmMQ8ICIlcDhfUgcuiWM4Cr204HGMzt1LcJYND1T6H9N5Tx85QljRPadHHd9EurOzVlbv8RlkjuwC4no83DHWg1BEYmb%2BjYVrKojvVz2neON3nj2fKE55ie9ZbcIu6DZXgJhyF8hq3gccBGFv5H3BQElpWEJaPaEnH4JGaYPsLkLd%2FE1DVzClo3UnqaEoZJ14hY5vsKcEZi8HjtxAnKEp7Qibmcc2EGFxQBQx%2B5eWXh1rR1Fnduvd9LUEEy6OjhU8jcocAF%2FBLDCAku%2BE43DSAP96kVl7x8A2VdosRMQNhhn3w199y%2B3in8IyEg%2BHGznUZjlFgObzRUNAYWKNNyBgPuQ0ZeXJ7aAPSkgnC1%2B8CwO2bujCfF2%2F%2FnhcfJBe6AVHIY3NLKxlggPyo%2FJnAYuwT3n3yMW4neWj9TBIrZ6LpGqxUQ%2FQdBKtlR8fnr%2BGzpuFXOzQUhXTqkdJEni5eyoKoV9Vq3ZU2qhQOWPf2Vm6KX8y%2FFwQjJmxHfz45JRv2ZWZjgk%2BMR17Bi1wn7mr0IVIgnb6yb9RZCq%2FTW%2FCuN8guiqzh5uGwh3sCIDDjlvjJBjqkAau89R9dcpzEPyC%2FuBMauxcByMnEjpjy1WU9sYd%2FVXlfrfI88mLdb7mXkmCnKmh4%2FStLM6ddLFKTA3uoOZmp9W5Bqm5vBH2IUzF%2Bzcxy0s9RHMng9O60P8ffTxL0wjgjnkZ9d1LmilL36H6bOoo2aHZ1pLJcKl0moPXLh9zo%2FYysSvXaH%2BvtVVO%2FEr6oMAaCrxPHP%2BgNBZwaLgdPhsmZYJkEJhuI&X-Amz-Signature=0b180fde9e2054c4a8d3049ec60cef7c247ae91123b53815c79063dfd3086f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRE4W6UQ%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIC9hnodb3zxw%2ByDZdKVlkmt0ZWSssleTM3GU65nANPlSAiEAuyvleESQhdU2Qf9MU3%2BsF2IZpzk7DYoYMDOc4nJhaZcq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDP9aP1qXPUDyMDynDircA%2B4uDmqEPkpcc6Lr2BCJShLA1m9itWg4MU5JShcZfbRjvJOTAu6FZSYY1nXFiCpP%2FUUhlvPYFFL8o3PZaqNvshUQ8KQW747z5wcC34V8r70FZVnO3sbAyUqwT%2F9205p%2Bb5tbhUltbc78IBvDGf0o6wLBb6NMgR9TOjLbaV14bVcWT5GrxCw04B52ch4IS87bpCstmap%2BL3fvQKP7vul%2Bi%2FQcp8Hszi03yArbvQnXj75m5VkjMEKx9yWEujP7iCXYMW8x0L8qJoyygCmQqbWOQAihW6EXp%2B1MXsNPUmAyujpur2qNXZStsVUGTli%2ByWQXaGOFpIvbfYlxxOeez%2ByZHUMG7Wpq5neDCyOWR49UT%2FBMr3x%2BMdEfZyalueuvAAfud7kQ6OK%2F9yxPokDhFBB%2B%2Fs3evlvmnp7zrfP5W%2FyACSorT3JYc%2FsPeGkYoPkESUCRCUWNLlyG0b3oZY%2BwVZJMsdTmczmsTyNyMI6eMG%2F0LO8t5rM4BUwQ09trOvJg6VSCufnuFyKwDICnjTa0sl5BeBV0T%2FoCUwN6%2BeySBEWIsIHSAEzR2C5k32wUb0yMmschL3h47qtxUDAUal7bAV4uuD5bRMNzwTbWik%2FSnjxFZQZ6MVuP87Rxqqz%2BYCpwMJuW%2BMkGOqUB%2Beoxn4OT9TRiik7%2BteOSX3pSq1XXijaVJRg08QiVawZkCa1ic2w6ADHJ4s9cvA0uV5okKvDKrNXi9xJCobTe1wXcVJiRICwGNKfiq6B%2BRZuYUfxItKdXwT%2BuxcK2A%2Fuo7%2B0NsaseiXP8YfKCj%2BzgIL%2BQ5cUoZxPwTO5RxIyqxQXd2uwrKrx5PaXb0P3bT4i2O%2F%2FdV9F5vN5e1HIaaHMlZzaPkL%2FI&X-Amz-Signature=383f4c0fb02192a1c2919e88558b19556ca85527b9ba9b2e59ed1e50311b33cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AXOJZXF%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFXAjzJalYsIwr%2FmyXl0LIZfQ0pQaeZ6UMRafoQq5MCHAiB%2F1gBCBQ701GNYO61SFiTiRhDJDbCOdVffQ8e%2B5%2FY89Sr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMFYHp2EjKlpVXjaQUKtwDwPCfCN2jfVEGLGw3m0VzI%2Fd%2B2L6qZLjWQgsnqKYGTRorUYMqz%2FQfsf6dRw%2FbQFFFIRCl%2BHke14K%2Bm9q4at%2FFWljc32TbWRT30y5NRUNccKdobW8s%2Fl%2FmZ19IeS9%2FhGHLLLl9OC5opOfHqqGHZW%2FC0y4UHHhgRvU4Tbz2ogIdezFVbSS6avQUKm8GIJzi4yze%2FofC04KzjVZnLvsMUWvcn8NpM7BJ%2Br5ItYnesTVhP%2BZsss9KtT3P5d2NV8eJ5%2FOdfzrCisIz9saFqM789l6FU0uVeDK4UpXrSER%2FjllsOJHNVj%2BsRa98afM9uQAs81PofL11cajEU8BLMFMOe7A%2BFKifYTrpF7B%2Bh2CDawdvBoH4AIvAORc6gkQ0HHRj9ahxM2IgqDEFneyKo8B4jhukJgHJwyzLFaFAhirRnR9WBqEn16Op%2BoX9hoiLpFUYl38ggy4kAqDxAcw9lDOWOVqRtKuZMsQZKKzGmjR0cMb5ctZZtSOjuVCdHrqciIBYBBx6ZaR3RkMxC04TIXggjnJeUEdhK0TMixt12utjKThBAjyPLUqmCESya4LNGlvdlZpL9ZmC96JyvAMhQd%2FOQtHCcaFfm25H7cbO8XGo9qYt%2FSlJk0W%2FLgCauUI4h6Ewz5b4yQY6pgGafsXY94DLZxmPLWrByh8G1VJ6ZzV%2Bz5wN2W8Srs9B398HPJlrDRgGC9o%2BMafLekIb6UeI4LMr1KBKBZpGTuxZqvVy9UZGAzT0aeQQx6bNNyCCuOHW7V1QUgRYx8ujYkFEhAozGSSQl23nzO6v0Am9GuXkLQTdGPJlaLN%2BJGEOgDk%2B3Ii1h1yHnSxAOuAlXzY9Aw7OK3eBm17Dm4sW1bvf1Xuwleci&X-Amz-Signature=73c562379771209b73d43b3637704203c531cb414b123eaf4cd003a14dcdaf7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

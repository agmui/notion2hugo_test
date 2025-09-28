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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDID4FMX%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCPDSElLfzG%2B1NKwMK6mEtPLDMrFMcPWqR7FcrMndyrwgIhANYKdaOyVeVRnqfl2Lsuaws8mfAB6gKhcN87qR6sC4hcKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2zriLvNK2dvJfeNEq3APVXEPC7u4tot9C6WnaINDDuMmdgtfWbfEHdEvqGtrP3m08cHJXgWs8Zu51%2Fht3nh4a%2Bkw6jgCRkV1lQHKghQluZJ%2FaYVKZKwCt14BugT48S4x%2B6KhRNRoYByneHoaCjIVbITvKp4OnFMdUWzvvshaGVzAhizLp2g5kbep0ZrkWJ%2BykE%2BHFaAz02HCgyUBKnCnz2e9wMSLfbZa2QwzbKJj1XQOmjmLl%2Ft7xcYbqBRxc2EwRXPEnogx%2F8Tc8RV96DjghAitRNNWgYy3l1ea4EsBXl5kER5VHxrLwTPAxeNJHNRYF6utrE%2FFKwcHBMiVVu3%2FelSbl%2Bgkr%2FhWRYu3xrA4PY9Y%2Fgp9TCZm9p6CBmXpXGzv5wkCs7axB9j90FAnv8bUU3pDWYgy1iPbuGp85mMgxJAX6WRIH8jEORCvxvpJ2i%2BXeW0Mb1GvYfG%2FJJ5bUEPQbUKvG%2B91EO%2FmYx8B62xo%2BP623txhrzjYinUUFpA8HnbjepuvazHuXHjPdF4cDaBhNxjDzBrUeezd1ckbaeXyMm8TQP1NuBJwJULixSm43qNPlDc7qQXcDs6g6R6TUwioNLMy3Ynn6fHoTnwN0UjWqV806nllu2%2B1Uv6U0ETy1iLTho0UbX0JjNttPuDCWv%2BHGBjqkAY8O%2Bpcjm8JJ%2BzF7aBL9OF04th9vEbLoifLdrei27KJs2OMjBmEUCu2dACMhBCIaGYzpSl3LIrI7zN7UT5PCs%2FTTl%2Faejb1uFDExs2RfCq%2BH84DzQTNGFxWr9pEw6bB9uXsutFiDjVT3bjSwWkHxae7bDecGEhhxAnsF2FoX%2BrIADGqvbBYy2Y4iIos5rOTMnxNuX65m0lTtlYPk5%2FqvAaHo01wj&X-Amz-Signature=ce4f6c5c5720c1ed0eb14ad2e696fef2b981846cbf767809c5c6b5c48264ea09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN2DOMSA%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIBy0Ll68trwtUdYwWPYG0gMcK%2FAmW0PJYhk4NyuzplniAiEAu%2BLz7DgOIlGl1%2Fi89wmsvQPyT%2BctDICxKZ%2BI5fzIV38qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMCgJdTgcX1hGywHCrcA9z40adaVFl9BEnOGwg1IIW7z1K8gcKO4IbFyU40OtfSwWsNZA%2BZ2sF2bsXOEwiEUfyJiNvU6RKL6h95p%2BW2LcWkh5BqawvB%2BnFI0cfgU%2B1PPsQPomJ2MiZpGmzIPd1PucGVt%2F9r0ht%2FRPjkbGORjb6gKWVK2kwaHHXXHh76R9cFMJee2qPyjFNJ6HVljSBKeeo0soRzJs%2BzOSbr8fu8lpe0KTallv1CtXAekG5IoXaKr0mCqqnIL3quwLT2XTzk7XAjzfxIcxTvlC63e3WyfTfdyZM5gO9x67Nczn%2BgP7GT%2FFbl9OmZgbhLntVozIzEuc%2BQPI%2B51UxE3qwXf0lsQ9MRCpAdr0YoxVi2Su9bvXyDxatW3SEKOnyagLKXdMtn8UFP%2FZIJR0r%2FFyKwSvoL3epiQaXJjsA2qbpi9aduHgAnYbh1qSo2PbNL7wK9ouECIO3546xHHZCnbHHVnFeXlvpwYJHzUcBKJPsP3Up1%2BI78WlSxOOo7kj4QxQvVe%2F2XuEW3BxDL3IQYLG7XIxcsdV1Bix3Dgq9btjLhAvxScf0yD%2BrSQIL4S7DRY3KDlChIHkVJwAha4EOdVOZeek8vK%2BvbO3jeV%2BJ6FlgXJfa%2BDBQASOtiVvOrQqJaMagpMPa%2B4cYGOqUBv8Qvll21vw3KBflyJwH9onIGZior5S8HTQOywzCiogl7hI6JjBbHpDUW54jT%2F%2BLvv%2BGQozqZCwq0enjFRYGzVe1CewULHVzqiFsqEbNMw%2FsIeRggPOgn3gJFskJD26%2F3x2X6iGmEW3wYUBEtS%2FwDRM0tV4Iyd6ToCwwFX8ZrwfYFPseHksY2eraaas6sDRVzKykavpZ8c9G1TNEwUi%2FJNr4YLD8M&X-Amz-Signature=488861618c3818e8a0136ff2087eae517c1de77fc4543e58e76000a45e643534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMS52WUD%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIHfcvJNZVG1OyNYvFaPR1J%2Bw0AAFHYcWZJbzInuQkx%2F4AiAh8SIfIBQ6CyoF%2BaP%2B5ELQVMuYYEYak3G19QI73obyDCqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpr2B%2F%2Fn9yf9pj5x7KtwD6gAZmW%2BY9C435txYxPqs8%2BGb8LrQez91qj%2F4pfi1T6UtrYC0CjRHAkp%2FbQnC3KeIgiMqNShXDTaKJXSSK7fzQjj4de3rwqFO5OdbP2vA%2FnM85CqFCHaL410gxtLz%2FVCIlQeR337YiEbdhYNB6fBaJeMnc8WYEr09c0p6aCHyypVhE7GlsxMhH5ehB9nEeY3y0JmSfABjnS078qT0mlDd80G%2F%2FfGNr69a%2FZuBwehvlBhHqHMhbS5dIjyp1tJOB%2BjdI2FlPYpX9gQuPUOnX7s1zrKFr%2B4vPpr8i8oOSr1A6U0%2BcuPHJ1kD5hiK0p04tM1s2%2BXMsOxIFcDPzfhgcN2j%2FdBZAXFP39wEIfpd0n2dS%2Fav3uf7WmSPriCRWRINgTI2S9B0VFNlFLQwcnmYzWzPYPLx3tGPeEFfWUJ6RBQSsFiLh1zMhW1s1WvNOKjiof1pfsL0ynSgd%2F9T5CepAwUliaNMc3eKwrelLl5kw4hNOSsA7o1jjov%2ByTENOC%2FGM4I0kUxvTa0yV7x%2BPqgyGWbQE0rsKkhwvafwMLCCT3ylip6zRgUsDgLtWC5HJ0vs09ebdPKwMhTj4Zdhor%2Bdivy8w9G3VS%2F3XfFdTe54hknt96ZBw%2FWTHttM1VIWoOIwqL7hxgY6pgGTObiMyqb8twEPkjekOgIcO5AIXRg2cw0%2FvW6iN7yVv2F5PlV8DFO3z%2FYSxPJmFfCdM2ZAYjW6CoLtkFJ7lC0tg%2F1mU3lmSdDLn3Hs2%2Bl60AwuG%2BLdbpIBzGw3OP7G9igx7YuqFVnUB%2B5KygFhBnBJMs8yDmS2OAlGaxXTcbqA%2BhSrWjlqmwcgBY3LTNxqPkVUQhBa7MZ%2B1J6xGKwEGWe9A%2BQfXKeh&X-Amz-Signature=b8651994190d538c57dd1c5e6665a79e0cfd6dfa3739266196ebcf16c5e7cf87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YTSSEPW%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCICZ%2FOmyBrmpSxGogj3UetZ0mC17ns9itR%2BcewYlwI355AiBjXyDmQCY7zd46jhsrTg5VUk8c7zxX12uEHQ61n36h2CqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSJOpTakQp5C5rFi%2BKtwDrirQHag9YpORGkAI1pS7FpFlJoJRDw6yZPUjzf7EQyUJNy5HvqNEyhMkaIhI%2FrSK0sn4I%2BXb63HrZ034tTo048SPdj%2BjMHV3%2BLyQ8fpbIeZfiHxx3oPTOpXK4GrPYhJXJ46iIRx%2B%2BFl42jpH%2BQHFcH3LeiQU0v2%2BzrTLfuMLRHpr1hLmCb46Z0%2BvtA3iQcMJxzNa%2Bt0mqS9av9UlpGDfBxS2mMVS74CcIVB8vuOsG4c2Fayj7SQvT7FJwY7sh2%2F86EeTRuTg7qf1QcFK7niVHXcv4Yq7KcDDQcB90Ep%2FP0%2FCOTzj%2Fw0HgoEQ44rWP90ZyVWZPMzNG13z1m2HAcdTjg2LVG8s0kn4wNgJkGM9HihV7i8Q0AhpwSVSsCV%2FWPcux%2FBDPNQ%2BRNPL7CWBSaI0x%2FzjVErYtk8G40gIl63Db2WOYeXHTkazhZr%2BYbDaf2HUM1t3Plu5LazNzXPN%2BeBoaUXCIqe5vtlZ2Ubg7o6tgxcGudvx14tSodJx4VmelGLVeBLxyLwNDMyHzxrG109nn9ctMvQ7RcP%2BWq3sQtKjZy2ry%2F2sM3A1J%2BcNlRMRnARA9krCh0Dz3iI%2Fa62iW6sGtXXS5szLHV40XqhnpovnRr%2FdU%2BXKV6MMbGAU9xYwjb%2FhxgY6pgHH%2BJ4mw%2B2vDzUf2G7RGD73mTMEA2vjY8RPIVba%2FpmZMIcBarRlytD4g2b%2BRD1ucdUSngBmxna5aiOjVo%2BR3rANnAi0mZY3QLwkRuueGk%2F4ibt71ZW100GEgaWGEI5zbcUNqH4nCSVuonFP9g7To3oEWe0Chs7AeFlPFR%2B5aXwOFirKZLibAwh%2BcHY03N9XjZAkIp74d3qCBxIcTPH12krB4Voiu6%2FE&X-Amz-Signature=b25a1dabfb613f7ea73701e1d7bad770d9bea064dafff518c6fc121e7e882810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

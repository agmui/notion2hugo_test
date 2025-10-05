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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQEZHUO5%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVfJAjITtp8IXgEA8T7CgDvjxf8%2FZJn%2FxJk%2FX6JKsvFAiEArA280Urqf0Dnsqgd5VlnxuHDLNK%2Bi4k10Lztn4dqn9Iq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDPguQZT3wQcsF2P6nyrcA14y3cDXOiBVlkQgYwKuqLMrctKsbqorB0HQ3AUCtx%2BPApHGj8eVUs%2F84Wv%2BEXWWyhQe%2BgF8rfau3apPnR%2BIDUWBCN%2F9Bs5w0r8%2B3yd1yqXKmtngmgh2RgvuExf%2BhQjQaAVIXBWiMqy8tKQhudAFMF%2BW%2Bb6k9x2M%2FJUygGFsan5BeZbM%2B2sje8hMVQvYm9Hrar5qIedoHG6B0ehlSpM72fvvRC5bwIQfqyMoW7y%2FiwM4G%2BzFCHi0Xnkex8fCPtuHydwcPfF%2BG4wPRgqRUwv5NXr%2F1CJQnhtkWV9QiLcsWFcSFPRi%2F6QA3KGzJ%2FGz1XiHYkte6%2F3iYk6Q4Xxr8TngzYQIY3MPDKqsadCbLRtdeq9imNfOkmXit9QOkav%2BNeOYHg80XGuiN7ytkQ1hES5sxpPBnVzycvjl1Rt%2BXLPslSo51%2FzthMh79exyagWsZGpU1S%2FHhomrL4CZf4GBMuTs0fG2CiRborTTLUAtTrf0ag67EDmkjHki6cmOxXDUXem97tgJgbzYc8YGnz%2B4q%2FP7benrrb5qQaYGsVURrbhb1v9fG6JWjIVmUjePFvrgcVUYHgb09zI%2FTE5XVckYR82FZnpSzK02lJbD6paY%2FiegJat5dFNxsfhCMQsgNY%2BPMOH1hscGOqUBQ%2F5J7XDwNzyZ0VFsSKPSdp8toPeIPfruSDABy0fdZeYeCN9q3OiIDEH3EF6OYRMngRParDitpY%2FOfeBqr%2BdUfxHyhqYkzYu3IbDFx6uBzBjaS4U9cjE18%2FQNsDxnNkn0s%2FSx0khgoCDUrM0gWrduPfDU9Iz4yHT3RNbbuAdodj1pbvXzPh1jfX91wQMG%2B%2FVZx4B902IwEchhW1ELsBCEqzW98N8R&X-Amz-Signature=5f14901d60c087be72e04ab679d17b80ee16e6d40c7d3db69f71e7a8facd008e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V65EQIUY%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD98vbemMwauIxspFiXv5%2F15uXdeqPFcRSZP6g1taOefgIhAK3Q6Kx0JPEPVYtY2keOR5hju0jZbvB96YCfnT7f3ZLHKv8DCGkQABoMNjM3NDIzMTgzODA1IgyMB2h67jdJCpLq%2BGcq3AMulwcttlRx38qhDiAuGZDzLGl0CWEEByVADaG%2Fo%2B073xZaF1PE0cOwBl6EaBD8j%2Bvr0%2BiEQswXupZdqATHOnXIvc1pCxyWlqdquIEZolSsIsqSYCZiYIlrZQPUEQzSQNK6R5CbDPCgj0%2FrVDOEgElnCxrGX01rnNQr2hBgNW716XezU9mKK6jgfInbIT0rktwXkvWTo%2F1WkpA3tLflsEjssnjMU8kBm0Hwa4mN6hI5o5DvcObqMMDn%2BqbAhE69Y65WXBGgDE5kmrSYVAgX4nUclQmKsPiaicaNVqfux2h6gLeQUxPnuF6Xh5EiouWFdJK0ldUQaT8XLQXDxWVFpqnVMEBOdWg2iBo9MbnAw%2Fbc0QsPNbY%2BGWXM%2BA6izydgeTDMazzAL8XM%2FZKMTXDnfA9DoVSq1JxbG60l%2BA42%2B1VYyJq5cRR8e%2F1E1k3%2FJCAmUHxlLTLKDTXAVy4mDZ6GjK4%2FuRgC7V%2BUggjpX8Tfjiaq627homGRr2f%2Fka%2BAROy5zfMBAhM35pzKB37ZvyQwzlEfBYFcBe2ipIYayfIT4g%2B79CMnhUenpUXJ2FocIID4vaqawIadUjiq%2By1%2Brg%2FZaGjo7QaH2GKc6fGTLBdbpSIX1TxscbZo2DKVis2j1zD79YbHBjqkAYYMl%2FiFT%2FwE1brUR3mDk0uRab7FeUo39K4iN78ssfDFDInr9Zr%2BISKvhyYmDIuLvcrRpxDWKrwE%2BKSOLvcU2Z%2BXxG4Y2f%2FZj6esQTOQ4vMarY5M20lcu60MCgm%2BIAsDgFb9lDURbdN8DTqX2svukMCkg6CrMccYXMdO90i8FuMB58PB%2FXqebEq5ubPdlk70SZjh6MwjYahVRYR5XSeAS96parXH&X-Amz-Signature=88e3a7d017e5937b91bb2b4b8f33d96e599c38b720bb37f2818dbb834f34c2c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZSKWYX2%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIRZc4S%2B%2B7AN4%2FDzr5yk1yKMNUHs1%2FzeAxl6ZXxjpSxAiB721E%2FljRyRnmhVSFjJDPwCr03T1q%2FBej%2BivW5Fev6ACr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIML1jG1JQQBm3pA0hkKtwDFLTNQuXBfZCwNI2rZRun2z3JkwuVo8K%2F%2FUvLeVy4VT%2ByWI3aa2kdVgoO5ukqGZ7jY6UOjwGbCezMbuER42NL5oP4fOf3yzTUbM9rv%2B6yEQLYkXCfrE%2BMUaunzH2uv19bPWKSYQ%2B2NC5etu7NB1VQx2WJH8hIpipaUTcfcaX5iaFx28tkusgfmASBJUI%2BXani1%2FjlRwNBy%2BCnqcfB5A3beUd3ly0SJHa7KKOs3sfHqcSi0MdxijQxnSNPxfR%2BQxXz0V%2BFhvsmG%2B7tJWVWjG2G0tmJCWB4y%2BkcywmClSIhIWPKaYhYmH4nNq1tyw6ejmtkLqbl5MrVWnMZ%2Fys%2F5NlN4V2SPwx4fODLYWRqrdIW96dmms7gXVU2jmjoxRqnj6gYTPQC4IQHgzmMaN3i4Q61a%2FxY2l9gKPJFwbwIC8pCsfF537lGHF9qFJjP35L5AmMOz%2FJWo1qkHqNmS%2FlFztvryP1P%2BMEDm3cCCkxCdnWX1rFIWUZ3sJIyYb7%2BJgQOBEcDlbeFYALam5GN5jCMvmtjp4yrX2ON6MTt2HPTPDDQ6ACiOGTuSxMTq68S4ctc6YM3dqsKAIWJ46RlqTyOJ%2F7pS6BhEBy1ynMO4vVGQnWAk01GMX%2BWg30q55tna%2FEwqvWGxwY6pgFIVhA7fdqhsAh1peC%2FZxYHxPyAQcC0HORg3bF4zYSzo7zCn9qpMGZLIZNrelkd%2FVtUEq2VBhz4b74tKzSmmniJe%2Bo8xQKMijXePKebAzng8%2BytWKWozRO6RizWuIq79Kl7UQkIQ1Lr7awsGINDsMJ6jQ3e8wYzEONyer%2BLh7VKBJ%2B%2F6zGYsgfJPF1ONXIqLmhoG966CSp7UA0IJ6LsEp%2ByKG11GbRE&X-Amz-Signature=7d3452cac3b3afe21da4d0b9d2779dc1aad588de21170858e3475f0de67cff4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAFUYDG3%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbA8PJDLv%2BhdTQE5rTZvDeqHGMMkX%2BtR4Xg%2BJV%2FwWiagIhAMSdu3yhsaCvyUxXaXMY4UvouElOzapuS1Abu4izJq7OKv8DCGkQABoMNjM3NDIzMTgzODA1IgwYl9qf3p4X9ksWbyEq3AM8kVtbLm1WV19jujHwelHavMAtcuXMBErrAU9ar4sGugJU%2BU3uN%2Fv2sKCN5h7u0EsRuktb7I2Yf4z2ZW8QmewnIiLrmau%2FBcr4ND5FgMJBBJFbrK1b9Zwo70Rf3wrVGUM3H1pr1KCtB4nfHQ8JsmSesVCVQvQWoGi6Q6LOjOTB9GCBtowCut%2BmAt7p3MdQ6Kz3SXMmh1ZvH5l4gPyOuwjQqlRdhg%2FYbvLFPrAbvWYTfKMABzjMibR%2BzHuFj1boTV20gXreqQas7M7R1plR1p5rTxErtQ10zMD8xzz2fYxFDokioR%2FwTX12MRVGwA1i42WtphrCArzN0rusWzp8aiE3fSXp5orjqInltJ1dX%2Fq6atXMO7m0x35rsZYguaFo1fUejNr9JE5oTOsQV245m3pO8KinQM%2Bh69btMYLxIoDGu9Bz5ROwPQN19liwFFs8Yi0QaopdGyBPTgx%2F%2FcTczDBt6f%2BJ7UhpsJRi8%2F1YwIZCwrus31BewAszP7Ab2ioYmUwZ4JErcYxJMLDRWgw1TiUfyL9Y774oFDRCpn1OaNiNzILY0twlLdsCDpIVBO1%2BBMocw3FDRE8L44T2EQ4jwfbqFTbvAXSeI01SJ10Z5mXbGe9nsd1DSNDJRS2zqjCq9YbHBjqkAbPK5lF4s7J4%2B%2BO%2B%2BqR9I%2BgrmeFA6T%2F2ztV4iHgJRSQmT05wmYWEP%2F4t%2F9cQm8wCmtZg3Kv%2BuiIvVb9cv4g%2FKWzmcKzMOx9Q94JxBEJzC6lwd%2FsSya6sAlDldEZ6E5hrY7Xc4IjgWmqGjJh9yYpyZtLQWe0W%2Fuu7nhEJGesi3t%2BliwBziqo8S6gjV5hEpuwLgnxpG574oY4rtgSLMi%2FO7SKWdr1R&X-Amz-Signature=6e3747ed01bd2184c06baaa1e7fdf5ae682a0fd14e60fc1ef1709cde8c4e78b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EVVO3OA%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeF7%2BhpP%2FUo0j4a%2FCCOnnGFX7A%2FY3hPiDg3GVdY4NznAIhAJYMqpb4p4no4CCjDNAdPnVMlbIXe3WQewsNBIr8WvoAKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy22lcED8EPabLs9p0q3ANns9S87xgNXlSgLzgYA4hjS6ZcNdHsl7CNrFTZV8IyKkDclPijto5z%2BdYwoIZMsXkFwas%2BbGQacmCjraMP2H4vcWXpEi2VYuORxQ8AIgUc90fEK6FZRqMHW7IkntldYoZC00oG4sdl3YehhWNezzxDsa7VtdxPRDRscQUM4prsCU58rhRn%2F%2F5JkhqTA2dYmjOr%2Bu1nEJhBiLuO25NuxPwIQrf7BOub%2Fn7CYQa0Xq14fwECYy%2BHx3NmFKhvfmQngnQRDMigF%2Bl6dltyEMVlS9%2F4k7STEB4bTEhtpleCpmrvbRzxhmesmPlAO7FRe3XGfqedd%2FBQ8SjmOsJMCevwop9knAT%2Bxc5wUHEB16s2iC2gEIj6fwhjCQ3Rs1TSdUplqXeRyxWWsdQrhIGw%2Bq99tCHi%2BmR0co%2BT26hq4aUQcZd%2F3kjqptXDgClc52j%2FxhsRPCKbHJi8%2FvxGUqzCY56gsKxTmzT5YCKaZl72FhqfVvi3h2AhCVxT%2BBNWFbrzPNJZVnI%2BeE551qpIMOjVTbYyh3r5kIpTS1bmH0wdblmYphN1ApWk0zu5RiXsmN7JDjnZnF9vfh0mYYTprdx%2B4Vw%2B5E6M%2FOccKo%2FIj1i9rkBR0awZyFqUF%2F1uUjSc3kqV5TCz8q%2FIBjqkAUG96Zx4IQ3a803PVHOFTm%2FVV9LeOd%2FEVvHbNtEUWHu6Q2T9e%2Bf3mLch2zI4Yi1HyMKpua%2Bl%2Bcz5c0sZZ2rM%2B%2FcH57CbGn6U6bsYRPc%2BBJCK2m1inRcYiLFX0RIo9tqiGEXPHM33tj5vjO1hiFvTevtSFD3%2BA9MvMxPl4YQnmjXosNCaZbiaV2%2FVZgxMussez97TDcesbnS9YcyUL289Ec00OAZU&X-Amz-Signature=589b02656a14a4365af72e6da05016ba13603859110855195c05d19c0dba2495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAUIMCL5%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB0hQkbhJSqnVEEABt1cx4wqYplz14KqGJoigJwMQFhjAiEA5RdkBCxE%2BKTIZ58JZukBr1ITyOZQmBxYn1PQnOAe8jAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBaa3XAr8yZ6gYheSrcAzDCjrr8tX3HBEGnEFG3ooMPbEo7WxmhwvsVN4%2Bhn9boetOxk0BTiMy1OA27vO24svu1Xieob8ttvcvKreVerttbOK2kUMkxDRE1Yakn%2FOgpMAzIOlsQ9Kt6kITTKMtph1ubpyXQM9QE35DQ5gZoAH5WdY0KqnXLe5mVLBPmUqJyTAbDC6EITVOCTgDLKp0Y%2Bd7mHqnSc76UA0RwBbGieAPYCqfPnPawN7B%2Bb9QJXHjLnBzFNnwSKou1zdP%2BHunLGab6cvTdqeRYUIv4JhsVZ%2BsnSnLWAKp2lBxh%2B%2BL2Vm%2BU1vUWq66sQfa4SCaG0A4iU3nWItNEEEjIewg3ntlTt5HtmZLHGv0MBJFoHzDNoDf5LORJOgSpD2K40Y3CzFHGC23t%2Fd6hBcq020hngLvwtKhQLqbdSz%2F6eNZ8LnrqY6dG4yNXRyjIDwrCm2wAeWvhba28IBkFs%2F9N6r1HlB5eq%2Fc7CVie%2F7xTgXMOnZp6IfOO9w9W07%2BvP%2FJWK09UhpIKD2Y1YFSXL5YaRWYcbVlRZgJYcj1Iz7MX5ju622JeBqdjozgTmAc%2FOUBISenHYLxzAlhzS0WihsOuHjiwLpQAN9cz0aTP9KvWNkIb826Knk9rPAU2%2Fuy4dX%2BMq%2FeaMKXyr8gGOqUBTpQRwViEpzdazD35uNh5%2FQuOo7JNLheU3Qjn65iSsk%2BGZ47cNIN6j0BQ578i5kJqEjxGlGf4P8gWRnUdQr0ggM12HDpUuD%2BGexdSLEVAe8Keel%2F2ur2JgykcJ63%2BbEO9pGQ6Al9Kj2lYDGsQx9NEBqwd6NDbQxbo5TjJXKwEdSJrmq%2BKDcXjayNuFOCuN5bPS5oGQPQXoE9ldKGATIqU6%2B6fK3yi&X-Amz-Signature=77779d05fce706ce60a675a50dd0b6721f9bcf23570dd74b4202f94749bdbcb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPBQT3WS%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFc25PjD0cl5p0YFcKXTUypD6tByFV7H1t5uxVutWyx9AiBNneI04zB1IveLKdhBLBuJdyknxDsegUdoifBsBC1HWSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsmN0FJel2cenJTOKKtwDl79qLx95%2FLg2KfaJbB3fIhgBxKO2szIpwfOeN9gIwfFldmy8N713Rj8pin5EMcjLdJYu6UeOY2EQbAzwBaj22v8QxUdq7TKEEc8FDrStkE7T9%2BorEKBKk2XTg23CwiEBrK7ysZHo0ZLJ06Y6mFzKVW99%2FQQ0R6YceNogi3c8cTH0Q6U%2FMTsX86wkjRb84VSYs9HBX83ymRuq5icDUtwzBQ6FhH5sMiN1B60sEYUTufRDCJZNI6XsoMoW4wsCsy%2BXQwWtlkziSIaVRg%2B3WNsAGnUqyRZi8cYeHL4K6lCc48OrtCnjpDiLRXAmTev7mu7kOw5QkLCC0AQfRJH7ZWI9Noz%2F%2FXRWRVCT1wD5oxVE2ZcS79oH7orO1B%2BvIUw2gdqaQcBw8qGFJ2tqt%2BN4kmIU8CDVnII0Vb%2BPxq3MXuWUQfbP5DlktWohyyaKpMFr8KZsuQdPna2qquNVwzKaSONlCMJtJUJlHQH5NyOb4YND7XF%2BqkODzHahpyY5k0iZCuxBui4xCrIulVlixxUWIavcWbJEO9PO1wxlh19ROhsyB2aL%2FUJXFH2SzKA%2B0qXSOTU5ejAEtFRNgxfccFgb0CVIF7XuS%2FhF3e8aWjjX1CAdxsHwsw4sevdhmOJQjuYw1PCvyAY6pgEal8mp8%2Fk4lJp8MYeOMJS8vypFP7r4zgoM7f%2BiV7zUdVKBv0LElchwcg4%2FySmfH5QKL3%2BMfwzL%2F9lHswu4bfgmVQLFt%2BHEVe1sUuGIF9SSsbqRPh10v7IZAHGwFjKcrXcx%2FfeYlVkITPUk%2F0p14SHOPkDodkO6oQjzqZlfTTJ%2FMSMkG5YXUD7MEoY1HRz6JhW0IyGQS82cSSKe8dwfH%2BqSFzi4ICye&X-Amz-Signature=f831143a5ed31baa6389a3496376deb463dde1ee728c89004c525cd5f0df9746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY7I2GF4%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc7Z8hAuz1l5yBEO2qKVcS%2BJj32serfYoMqeV4T4qtHAIgLxKKeAUYdRvm7tvf05vohwxBUjfsAnOD0hzxD93fVsoqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiofgCY0VKx7pXSMSrcA9iF2ar8hMGnRdWXTKsWjzSSltWLKFbHPtSmFG%2FAxBYtVDpuYtrK5Eg7fU12urO6TY%2BI9hhBxcLQu6RO8QSiuXKdL4QqvAQ9AMFMcA%2F6suXYfnhZQH6W5ydsTQcP%2FvouV0p4VeS3YNTPgnywZZqDdzmVyW68DPapFJs2wIRozaVMxfItGdP%2FMIQ%2BavbG9g5u120qt7xIDsv9IUG9owZH2nsfaZiefQ35lKtnhvrLaZVPeSnpFrzi3kiU7W3%2BrIIzaPVgDRCWH8xMHit0NsOeaQNCacEOH3NL14H5qKpxxqW2PkSHYT7659TFlUHrvfyOfkxDT5KPBmUKaS%2B5C3wL9obQ6dUInKqwvORX7WPtX5R8D%2F9ZZRf3AA0NT7LN6GfpS64KNnhW8Y1F%2BqKSR%2Bma5GiXCfkqlhFuZuAWzZUpiJuKO7hozsAPlzaxDJis44aTmpYibj%2Bzx5EjvEUYQhyJbdTbLuTbrC2N5ZSJH9A6HclCShh4bxWPv06mAL%2BUvhby0Sb53jCyRQ7icywxDRZo0SMGftSGwqYGHQjuG5h85UBhawaVdJ3WwH%2BtQql2p8vYKvAGbr5Qhqnfl6X2Gj8jqxtXA9HsisKnM54PzXytzpN5Uc%2FKizxxQ2RRMQ%2FWMMTwr8gGOqUBaWeiqan09wKLSHbEEmRbj1xff6x5zv5wO6rLdBpzO9m%2BerfCYnVC39CrCxXV0wGQ3DifQFR6dIJ4m%2BIGOAFIpg6%2BJUYOzr3OeI9A2AIlV68DAZH0nqP6lps7TWRExAICCa5Jnq98hJOIqAM53avJ%2FsxqJWXUZkbMtnxNUBdAgJ9JlZs450H2jQrGVll2cuWmuxDelfCE2EH6KuMwoBs0fPBuoGpM&X-Amz-Signature=77e162b520caa31bbfdb812811e120d796840fb4351f7b400b0162d11e5a4c5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

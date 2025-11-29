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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW6GUPVC%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzKG82sYBkuhjQUMm555TtbeXHGFa46kSyfiBzw4anGAiBHLw7Wg0r7olvw2Fxt253ft4ndjs0p%2FBO4z6zaN7XKDiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdzXZe4t68DYtTRWOKtwDq9rv12REIpDDQnfyRaLDnJ2fR6Dkt15A6DuXbwU4u6Etn0AhMyC4VUwonu%2BnT%2FDRGTJHkzcYe8bvNEZkP4xfS5FbKarKfGKbVy2m0IrtgrVZ2p9ZDctf%2FDsnv92DcvPe0bXT%2BFbcyHuUYiloHJCzMCAXfkv1N2SHe5r68E3POr6yhZ5NaJdPcC7mnXcmtDEBmxuUyMv9UsqkHaBjMFNlqXrKrw3IiFYUYLT55GgKeHgtZVaX0aMUj7jnL79gA8ik9fl0%2BCNlPkRdEx%2FTyhvvBtnYJPftfLf3z1xFPCryZTOmuA3sdX1mADB2u4KZItDushMTVkD9JNW6inLRleyUk1mbUC39qn1yBpnwH8PI6yxxnmiCbMB6M34ESkhykzm8471Unvlqtqd9KzUvd3wgBBCJFm%2B3I83x8VcZI%2BsbJEIg7vdtjiKU%2BplRqb9sINafv89d6V%2Fpm%2BvyYqPh5aOOqDC2oG8Z35Er5wPy%2Fqv1X4wJQEdiU6t7%2BJ6tmWAcSPJc5dFcyK9WEuTLFQXU9MidMbXRZyLTNdaXPstMGJmWjxcQfLVqMo2DwUTVzshwSPOkW%2FUPVcLlIocwtFjJbsASjcWMA6uCZC0MAgps1XyCiFXFuHogLGU7LHay3scwh%2F%2BnyQY6pgHC6VRpgSXX3Vyht5c%2BHJl3%2Fiid%2FQlLU97HgVExAXFj7UsNjPaqrGLz1rz96g0F0e93yK6ih8jaD%2FPZYAAfbA4b7fsW87xmBO4mFleq2LHPlxG%2F9qTbvYcUJn%2F634yucpARjb91yV8VlBDv2WPTydxbh1dM1lJaurBO0pYfy7mNdXF9Y%2BksL1N2ZHgu3qP4%2FXtSygOysR7ICC3nWa2Zx2tvz5e1YAPG&X-Amz-Signature=81207baedf3b066e4e8e482e1509be90bdbbe871b355f6ee0625ecb885cd2193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM6A6IG2%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFW9KBujXBc1JsrvL1YBcmkQsOE7nfYNJ9dICsBddPSkAiEAxI%2FYUNXt3JdqsPWU8ualHKClGl%2FRIfV3JFW7ttSgnPAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbOH1F9yvQ%2FbED01CrcA4f%2BfQDv3b3bD0MtX11413t%2FjjyHfuhdPkpqGV2grRX%2F4v3A9X2VGh53ZgtiSexhy42os4%2BHySmUHDVnUoOoFVZd6DOJ6HXnJ5ZCiILhUc8lK74rKAoSZvmX9z7Hpm4aHGwWWk392Akqjw8%2FIwqv2kRkoGyLTfmoCO1LmaKior2jFRmVP8VG5%2B1Np2%2BewSEdUj78ohDy7EQ7vxU20es3d0Zg5oU93gMMEYVbl2KQdd4JXVyfKpL9VpHnbhY%2BI3MeBjwhuOLNL%2Fte5WWbTrmq3UsvYd2UF81pOrjBE28V8Op62IKEw2PUXlioPI1UVn%2BDD5TgwxbrfKl6EAhniH9PhE8iQOn%2BgUoAY%2F98HsJSxWPHRYzq7pC5YsdUyUuk0Klt8H2zsRqhzrK3Z4NIKwA98IUBzVYWznJ5tIQ4bXYPU7I8k5mslbFZl3zBhzeI70DjNiGOh6VfFjZQ1hHgpaMk0%2Bg%2FC%2FUa%2FknRV8YCW5P7AXuJ%2FupjtqwCfL4F8KAIDpCoZRaGa7B%2BideDym626nBjNvb3XxSCgVxQ8JflKGgyNwg%2BPerl1CwDqSSD8VW1HkYGHP1jbsEOuwYZS09s2YxNJ%2FN%2F4sl0vcuIFh1lLQFGn45vZSTOAdY5SfmL9%2F%2B%2FMNX4p8kGOqUBGrJxrn%2FgoR9eW9WdolR%2FGdTffHk0bQuW274x5FYFl9gWj6SiU7QsTK84enClxMs8r%2FmdmPIL2okpC2zlMwKN%2Bdcw32SNpbLIu7Wp83gM7PvObftx612xspH5I7XKTvi3z64yNuecG2ndpVEjh1aMYqAi5bMUUvdwd%2FedyQq0v9GO7rGWYu4yYwcQAvoXYYaBLpn6CMQf9v2jFWyNXJSu497FNEgH&X-Amz-Signature=2ae172d9e74456cb0970008417c2585fceaa565a4461178e8cb3c7bb9c74e24a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW6GUPVC%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzKG82sYBkuhjQUMm555TtbeXHGFa46kSyfiBzw4anGAiBHLw7Wg0r7olvw2Fxt253ft4ndjs0p%2FBO4z6zaN7XKDiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdzXZe4t68DYtTRWOKtwDq9rv12REIpDDQnfyRaLDnJ2fR6Dkt15A6DuXbwU4u6Etn0AhMyC4VUwonu%2BnT%2FDRGTJHkzcYe8bvNEZkP4xfS5FbKarKfGKbVy2m0IrtgrVZ2p9ZDctf%2FDsnv92DcvPe0bXT%2BFbcyHuUYiloHJCzMCAXfkv1N2SHe5r68E3POr6yhZ5NaJdPcC7mnXcmtDEBmxuUyMv9UsqkHaBjMFNlqXrKrw3IiFYUYLT55GgKeHgtZVaX0aMUj7jnL79gA8ik9fl0%2BCNlPkRdEx%2FTyhvvBtnYJPftfLf3z1xFPCryZTOmuA3sdX1mADB2u4KZItDushMTVkD9JNW6inLRleyUk1mbUC39qn1yBpnwH8PI6yxxnmiCbMB6M34ESkhykzm8471Unvlqtqd9KzUvd3wgBBCJFm%2B3I83x8VcZI%2BsbJEIg7vdtjiKU%2BplRqb9sINafv89d6V%2Fpm%2BvyYqPh5aOOqDC2oG8Z35Er5wPy%2Fqv1X4wJQEdiU6t7%2BJ6tmWAcSPJc5dFcyK9WEuTLFQXU9MidMbXRZyLTNdaXPstMGJmWjxcQfLVqMo2DwUTVzshwSPOkW%2FUPVcLlIocwtFjJbsASjcWMA6uCZC0MAgps1XyCiFXFuHogLGU7LHay3scwh%2F%2BnyQY6pgHC6VRpgSXX3Vyht5c%2BHJl3%2Fiid%2FQlLU97HgVExAXFj7UsNjPaqrGLz1rz96g0F0e93yK6ih8jaD%2FPZYAAfbA4b7fsW87xmBO4mFleq2LHPlxG%2F9qTbvYcUJn%2F634yucpARjb91yV8VlBDv2WPTydxbh1dM1lJaurBO0pYfy7mNdXF9Y%2BksL1N2ZHgu3qP4%2FXtSygOysR7ICC3nWa2Zx2tvz5e1YAPG&X-Amz-Signature=482905be5a8d55b5ac4ee2ae8710024edae0f31226fa89d53641ce9e6fb1378d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQOIAU7T%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnyaiQbXGGRcsxh%2BSelDQU%2BD3tJf%2FERalm4u8yChVQ0AiEAy7AyYF3U0ruMKWfmzYLCcDdpSnVRCCMIlAkdLzMGmOsqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FkwcSq8OjY9keWYSrcA1jDVlFd0oui04nk%2FwChmzbYZ6zbldVc4QuxeP%2FekNUiaznOqZ9PGzlUPSk8LULJkjMMrbQsa8NARlUNgInGglQ29b0AQ49FNJKmTNJAfr9Ze5vthOUOsFT7WIIHu6jdVeUnQ1pt7cTs88L670qPH73jFNJbeZrE6sfUN5s%2BmMTdgr5P%2BBRwF7tiRqbP9b6Rl9lrBWXCI%2Fi6qv8UAijuIJmXdF6lOHRwEy6juLro2ftrXVOiV9LSOeC6ZEL72v14xK%2FePNGphrZBn5bTfe%2Fqd%2FmJuQ2i1YHhrI1ko2M1pDZpRGvSY9eNctOxp0ClyOtiIXIDFpsLcQJ7ArDBql5wxblhaUrsGFetgI%2FhnMCTzGOY46LE8FGjxJ%2B%2FQW1FFwT2ffJw0CTVhllml6cHuCoRYgJ0UNblzeeYT4YxYEJspuDoBDvsVc8R%2F1dmqZT1CG6wBv7oxda5%2F6jq%2BAmssybx%2B45XxaCT5C3Nq4m3U4eW9SDC84vvpI8xFlv%2FcyYAbEBJBVK8l95vn0Hbpw8P1o4wDnnez9ixT5bsvGxtrc%2Bbv%2Fspl3WmuwwKHtf0USf3knXKYALhWBwQTR5rYLzY2dsdOMPoX%2BFFE8XfjIDih%2B%2B7NtTo7l9Es6UsByHgM4LWMO%2F%2Bp8kGOqUBmgyXFq0L8yILHQF9w%2Fzj9ebhRT5cNwWQ4ekOLzoXtWcCFngJGtkxchzezlXz%2BysfowQQTxNEYYOTg3q4F3JYKY9Oy4FhmtpIk3MyeRZ2BrnuTlcrOXZgNedrxR8B2eoBsdICvcaUW7gfIL%2Bfd9xyBZkokXU3ta4lseZlI2A4jTk5jSS5iJ2UhE7WoeDZZCSQcSNjQ%2BAbsamLaBKtRZtOQZxPwd2t&X-Amz-Signature=0975326aa32f3be1f7af484bbbfede48bf48eef7402f27378bd2f0c1b16c032a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S76RI7LJ%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDRO%2Fv3Q0xbeIy%2Bi4Vv3CHJwYRgUhF4tbUJQpoEvVsVlQIhAMfGMUNrq0zysCgOrLVxJu4wUJH9EF7lwHaKYqtPj5d9KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMJ%2FXVNgB1qrjdEfgq3AMUtOkq3OZGMOT9Kg5EF6l6k5nExDNpID990g%2FkExc%2FpwQgnV7GL08nCIYA1%2Fg87uCeOkoN3kCFFolYah6O8sSqJKPRX1nN7%2BBQzSifcVn64u7DJR4PDc%2B0QgoVDHBnCdAMJj%2FDEpI1c4SA3df6oGvnLb7a57H8ut4ssNQpZG1Biy9MWzztIp2lW33QEx%2F8ej11Q7dF3Oe94uB%2BDMxrj7g9MTTpTxRywAT1RD1j5ZdsUcR984YHFtG5KEbSllei1X21MSU7%2B1DCCiDHD%2BnsbnYDL7z3kmxA%2FjP2yitGZhVP%2BoWSbXdwDGI%2BNDK%2BQhtqCeDI9683AolgeibcvQkEWlh3QaMTAMN5nvjLHAxZxoOePIjTZw8lQGW80KgU%2ByUkFjdjMFtYDR1kE26OxpTG0s87kr61VNuDvzurv7vuYIyg8NsSzhQbZNFMnV%2BFJ3W3Fj7GpKEl32Wv6Le2bX2SlYKJIqAABYme35VNtzAztKt3FvM7OUs%2ByInwr8uU%2BxNZwFEoQmpT2juGwQW8ZeJeBVc%2B5xelrKwXalWGqu9NWzHA%2BqXBNw4JANqvBlm6d5foJK04G1R%2BUi47zGEBySVcFALCZuwY5GB5H0eWt1NFk6XWM4wo%2BlUg2DTvL3Lq0zDcgYzLBjqkARQMA3lff3sqmHkVsFh7XpWJfzgqJawOeqpTYFW4Y%2Fgr8IWcYrcMw8GXQRUxGSWr6AyROBUZ59p2oTN3G7MKNmuBMAm6m7AvtThK6Fnco695Zr2xUiwMcwPJXCpZcUTj9MVeQ52e9ptCz5z5Y5Pyfy1GoqEX31M9J1hpmE2hjxkZkbhIt%2BmwX%2Bns6PaW8GAnXnGpClAKanZEhAIcGU%2BxlWyrKyGA&X-Amz-Signature=0df72d6de994c5d998611b80074daac5557a9e82899395c2867554b308e190d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIFREB5Y%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCj2tj01XjCq7qBbk%2BVPyvkASBGh7SyXVe0MNXhvr1OjgIgOy0FwnN2NXXPVyqxSHJ58jG14ExBXqy%2F%2BGP%2F2DFQLRUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGDogOcUjz3Tig%2B6yrcA7d8lpK6tIo3bpY0mtEylBSl19vn3XTUaJ1FMsdPHWJnY6VWSdvUiuUqbmfncIGPAYobzYOyojcWnju4YG6JRwQWZQCO26cgHI4mv0tC8ZX10Jn7RZmWVTieUbUHASnF5iIbf2wWhpSSJzYtnJI29nIJfQ%2FYEXpY5M%2Bl2QRby9CEIfJJIN5HsTuI5F8RipqPy61TzW3ZQCRFkpZg5Cko51td2m3s3YiO5QNShfa%2FRGaOGBSZ5u6YF8rNC8oU7qdxl40ePbnkv1%2F5%2F5Z%2BQ%2F9pultrYMZlgrwD0RqZDOmSl%2BLzI2XvnTmDDGTVWgKg0wGgwkAaZ5mLRRakqYL8RPRd2jfgZQ3EBcg95NjfvL7HIrLq9qPgjX%2Bq39O6MkF3F7H%2BTGvgT5n2%2BQWSj7F6ooaCqc2FKxeKTThqwZ1c9DfrQ2OBaGOiqI6kV4sb0C0%2FYGk3gS1XeFkf6bHDcbRvYOtl4wqeggr%2F2JyMZnnB9LXxqOZ2Ecvc9pj8fJkoRAaFIsEqFQvd14talZCpmHxa5vzxhB2sKhvB9VNqEibpHDkhCSirxlw%2ByI1tMXdRA8HHDiawp%2BEHYEAQaVpk1fl9gVHnNkPIWdMPmW8KTgmTq3IvMLoX%2FuPgm6QLJeGSvOyxMMiDjMsGOqUB66FR19QFiVju45dEl6ohmSKBBaOb3S5yclF%2BGadNxwoUerCIB6RaSrk4feI%2BeCuFcwAGL74G3fXsqTpWXlCFCAgs%2Bfu7y2QLO1H6cfc4WXUQIPe41URNDUv2yeMHjngaWCNj8e8%2F6Br1MkeSoWUQuDVy8WIHvSZAm8xwq%2F9aIywkRkRhMiotbObmJOJf%2B5w%2FtIWuyDoSKkxwmehd04wXSFoELpcA&X-Amz-Signature=98daa867f553af752007ad01138d4e1ff19650d30d1e55b77a854715b73fc6ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27TOQHF%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGSFRnFoAcGH6XRpGBrnn4IRDfVlc9wavGX2fJe0Oq9hAiAeBLWrPQ3zRH4payOOH4rPw4I8F8%2Bae86M1%2F0KRrKxQyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Ghp%2FYHhHxZhLBAlKtwDo9xP76LscVeW5a9jPixqh8lqZXt5rCXHGC4J1iqtrXwb%2FYI2CVa%2BktI9y144JWtT8dYDkSerSHET1UlZw9TiaMLb5geMHtzICbqVFndqba4%2Bti79TKdocpZHwFuwrPbuZOFtf%2FxZEKYEl8bKQow8%2BE0%2BCu5XtkUnAfy3VGGaHkVxLV4mOQ8FXzVDbFk6Bi9SsqwI7m85LVT%2F%2BmuQijvc3vES9OvdfDH9LA8XA%2BHEn%2FLCUrlcrcy0er%2BTWo65OufDXXiq7dec4s04hyQn3mdr5K2GLZ7Rv5GeYrm7T2qnIi6ObKNS21g5NG5iiqGnkAxFLgGLzwmRQ%2BB6%2BUQsdus63C8eja%2BZj%2BFy21o5xsgnSuYnh0LSOu%2B6HeoISiteAXnZdetrn%2Bbj6XjWNWkEPvkb8m4pq%2FabAOXbZKQzxGI3oJPiDNxLVjbfKcxYkz1QjsMHicIXQW0EkQU9%2FyXqA9pR9AAtLxC3sq8R2flBq920KqguVI%2FZfhOpn8fEvbhTWhi89%2B9sXWJcap24SQtGh4VkkNr%2FdIAAmAWBQ%2FJEaAmXtAYLZfcqt1dsYwUvtYXN6KvD1XcnTxcQ72GPIyDE30v0DM%2BRZV%2B4dT0uXFwZaoJE07QvpqFAkczH2urG7ugw1PqLywY6pgFlXw87hJuZZBfNJOYKypZkOtWgPvfPL7kE8T0HPO0CGoHZRpsKgz6uPKWFYFpvKaYU%2FX%2BiINI0HY4cs9Moz5e1sOjLYyDi0K%2FQ43Ag44FtRYgA6ako6HD5PrSOxtyZB%2Fmm%2BYHJAzzfqBsa0bLyMDuKjyCFeyEP1a7GvPU2P2HX9b2WnveF2Dl8S%2F1pQnOcmLsjuvHKToA47tE06seqj5zeUIH89g1%2B&X-Amz-Signature=bd8abc084c4f2b7619f1e9f38e3415fcb381be3bbf9106358a159b2903a8b290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHQXX6N6%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFsqoY8%2B%2FUp6oVfN1iVPpHCg2MCjS8De55I02GPcu%2FNQAiA5GBl7qSvPvBJXwZ2F4gV5n9OzG6cJTbUeHxvcYBmK8SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx89PJQbolgmueiqPKtwDPR2Yp%2Be9%2FvtFbVC6NiDWTxaxVuEz%2BjV%2FUJcBgXY0z0oaROedlp0fcEVrD3ttZ%2FyPNxv1wN0u7KImWtbVlZDHlReFgvGHb1qvC2cCGlx7xs%2FOsaHpQLE33Iotrt%2FIwmKBnJR8Aa9cb4EJCxW3J1jw3mWP5%2BrBSkJ3XwsnMg%2F4GcFk5u7hQX440tXboDYm1cG2zJ0q93p4yqsKgasdeGp7qSeS6HK%2BJM3C%2F6w9z9jbO%2BNA1m1O0osRJukPDlqSRcRo8EO6BWmcCq7z7Fw9yyc2BneANhQS6RaLziu3TnPyRjTsm7yOVkmfFpLUWRAX3%2BySh%2FchhSdyRMMU4MtQ15zG%2But3W9lnCUMbu3JrEgkmjqId%2F%2B7s4TGFWBM2RCu9bdGjqmdMEMDhrHRAAUmex%2Bl7qPegNc%2BzX1BeQ241b9llpkl%2BlWoZZM8Ba6YZf9f4juVstmmxl3m20gT9FtXFs7IFRA%2FmZLZrfU258M%2Fea%2FZenvGKOa8qYb6yrV04u4mS9wHY%2BbI5hH9siY240VKJ10kZpAJKa%2Fs1GvTIdleKEwbnLxks9BHSnNq8SRTdF3Dr4yPZHi2Kecy8Ry8UoRpOkApNIVkR9hUc8lyT%2FasPVa5cEc%2FrTxwmZQvr6veSdzYwg4CMywY6pgFb2iFRqQx14kKA%2FXtFhUwCa1QEc%2B%2BG08y2gBkqjQQ4zVsBJdxcK0fktKIicJWVVkmPKF3k%2FmQyYBPkAsg1ruufVtJ12rRVdztc0r%2FoQ5QsfMuPgmpsIXxsYqZgMNKWFZX23MpVfER06DufHpm0a3MmhRSAk4Dv7c6%2FOAtzKE5rfMHQ%2BHoZ2cZ4WB57R%2Fe3HOSGACGaLL9Oa0fpuv4njWSlQBJVOLNH&X-Amz-Signature=35236449ded72dbd4322d406b9cc5628ff517eea85c27b2d0bac2278cc6d3704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIR7BTNK%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTOATskHSCV6zBRXZ7NAQOpz%2F%2FB1EUE%2FoMHWAcBpMcJQIgVGrrrD5UWS42Nfqkl4oIicWGY%2BZd5wfFJWAkuzdjBloq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDBO9ABxAW1EdCm1QhCrcAyvkVXaQp0hxywqGF%2FciX8C9mG6lCGYR5AdN0T8UYkz4TNktzgTagzddzEOuRRsTSR3EcVIYHhiQrX6CNsJhO8YjV8%2B33mdVN6IS8OPiza3cqrComIKlFZMFmZII3RCU7RQ6a39NZOnaW8xthoQ4rCJwzNO2JEYGn02vVjftEfwCH6sq83EfYuNkAE5FY0qhxu%2Bg0s%2BRZBbR6bOqwAP%2BmPnjyWCxDjFqTqyYYh016dDRvk2rV7A1PHCb2R8DZ7Z%2BtTVWuoa7Z70lYuvRKSG7e4a7N47qduuWM9zcFA9sdVR%2BwNsqiJWOAUVPuGLwbzA3J8ldD7QKT6W4Sue%2Fk0a10Ynj9iNHLKIIoqbaB6IOHKmeOK5Ls2Ajmm32B6V7bbeNJOBOBC1pvSs5fkHh%2B%2FYZA82G7j5QwWVfMy66Dfa9tgSGjsbNXWZzJxJQtrGkq0dFMwNJOMttAzskvBCMFQTVzXagV5okmVHWp32KDL0ws1FVjMOR5cAUrNxMwTNohaIW025OlErZzWFR%2Fnpm0EY3sN%2B%2BbisVwww2i2CTF7SKLymLnsw8YZWrfDyBv%2F7AACMkO5GdrsidwqtekQofT4S%2Fi97MpZ6FEVcvIlwLpcC0kcBkuFLTLwbAWX9OvotwMO2IoMgGOqUB2zY%2Fz3v6e4emIBBuAEsWn5Us6T60%2F5xa%2B73CteJKUijt29rVZ%2BXVF55VJDrC1JJsRMzyPcXt7iLDCs1sy5fTFN8og%2BszYfA6TgQNhUnhjuIqGHLstniBtsqJwJLNK7ANtHFEdBI0GR4%2FOoQ%2BtFNqJch%2FR%2Bs14uL0%2FFWnKGjk0IaJkCMnfkpXvmPLWjgUIwnsq%2BW7zJ%2F%2BAo9CmlzGUr5pTkMFlM1j&X-Amz-Signature=a143791eb42554ad69c7807fc1b1658afb25c333f0d8d8a5a866ff6e1242b110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMMVPG7X%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhXAriR%2FT68%2FDf5w2f7xewXtuI5CyO3IomcYTfhGKd2AiAzV2Yqto7dbktp2QHTOTUAH4tu3cGjbEEtoWtM4psNqir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM48ZwKE%2FpGazdp9BAKtwDvppfcGNZj2Q4o8jO8631O%2Fe1EV8ktIBrqNhyS%2FeDlKM3%2BvsBaTkBuaSWEtlLoUJhqZSj9MIUwO72e8RZHbhCiB10QH1yuUKkRPHQIB%2Fh1pe5G6zQZbfVstKXB%2FlYWQtx3y%2FM1c%2FKVGoBxhi0pIRq5iTpYYtvpn96EGeda8zcXC6j%2FNCk4AzT4Hn%2B3TQSvSj%2BmHW1yTjQAHTesThqm9KqDGPmoSur20sU3t9xfMvnLHDMtdUt8%2F9UuSmH463YKPoKt7UJ9LanQWSWy8g2DLS3nozJV2wKroJaidTf8UPJtmcbXQpMmZc%2F6UOsSWy0H80THMAOqkV%2BiDCAPiafOtndLjkwaHvsV8KFOL0EfNVATdm6bVoIY3ObpeNvOJYOnnOLQyMaa%2B2%2BFlqz3YaQz4cDZ8Ct7r2PnZyM9nxndtHbG8t%2B89MgdG%2FAht9jtdjKsMpJpSqsF8O15j8l9AoxnHhM%2Bx5yyccfa%2FFWt%2F9NbnLx4il3q3YHyIQTsT3UsCmlVkvtT%2Bu7%2FEpK88ja%2BFrOiI8i7s1%2F6dbfIO3Bpu9pki9LEvsNSayAx8ceQqq0iC0rvqJdKZroP7KjTpuLiFzUhY4npN6O74G84QEn53yJoTjvtse8vOBQq5sv2pikHBMw2YmgyAY6pgF7YQ7CsqPCiz5JjICevfrpy3GzHArS%2Fd12vPRFTThpKAJhUtOzG8%2FoIRwbWVwzWp2XMkF3KNsP3wtGzFgrK%2Bpau410MbPOL26l%2FlcEx0THAfGBsqwZ6XcqL7Dh%2B53TkaVUNbI3r70lQuSw5apaQR4ON8PIpox%2Bn9AtXGEQ%2BrZifKAEWsS9Alidyxfs6ZQFL1tfzofKMk1oLv3UdEP2cGg8DRifGkc1&X-Amz-Signature=3dee57e78196a60e558800af532a9b6d08c1bfb3415ed2b7a4d67650fc47e62a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMICZJGB%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEgjYqi7GsQuYxWZhRw5ao%2FDLA%2Ftcff8HRqpQjc4AOiQIhAOojtAmulftqtHaQiRnjuqEGBLjgZnxAuatN1fqDTNMrKv8DCFMQABoMNjM3NDIzMTgzODA1IgwrFOrWIfyBpsXK9ccq3AONUNPZqZrpJxLj0b%2FOYLoUk5YOiZ02yK%2FF5g7W%2FarAuIte%2BmoWnPw5w39tqos4V%2BGB46nhz7XUFHwZcoisC5nKAE7O5emcCevxJEZTZHW%2ByCYuXlDbrbhiq2Cfk1HOQhyPyCJfX10s0%2F1PW2ZopSEqJ9WEZpBjGmC6fyRXxwFnimPpqx3Lh7NnUW73U7HSQdux7J%2B%2FCreL0t52eXQLYTyXyi8%2F0dol71IMF3jvznbo5huBfavoCAoR4ivbdtmmwukrSbjvF1YhHG9RrdQuF0mT1qqEmPYPEKp0FLZgmrwvOH8Gtvgxw5%2FlEjjzh0OKY0dcYJByo%2Fa23V1uEsRsgWOyuHKnjVVZ7eYKGq%2FM1%2FPdE4FMlmYHv2kjdG2VQhe34kDHcS%2BJjt1qbOug3WgMiiXcAqOj4pPzmkfnV8Lxcc82VS1cksy51Hr%2F34zhfGoNpoN%2BxI2ulUr617GX6cqlyi8P8v3In5%2B%2FOXIy3WIrKU35le4z3uWJHxeF6b4ZKmIweJva3e1ojh9Y1ZGDDq1pit9%2FedFcM410ILRFH03y5pW%2FYtnvHAu58MEjna6J7b8MiTO9G8Jpfa6W3%2FuoZkExIX70wQ60wlYzbc2i9jJ%2Bfz9hUZVNx8jnCHTsN%2B1Q1zCDiqDIBjqkAWchP0XK3Gqh8lHSjNP8lZODuPoV7AnXfaGvze%2BfKSV%2FP%2FHOYd1Vf4A1iaO3Ds4C6Qhu5izOvkAFGARYla0BRSbv01laspMN5jz0y7Y1Foa%2BRpK3Zu0qYWP%2FS%2BSgmBxo8qf0F%2FcmejYxgwXLnhTnH3jeuhA%2BCJQUBbbYpsaIrDolVhVow23rABoIoaF2Dz1SRi68KuLuW5wJWc4wJR1BBFV%2F7H6t&X-Amz-Signature=76a572242440ec131de50079552c45017c1c1dbf6b90d38bf18884c0fc05dc5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUMW4NUS%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbBMPI%2FtNRAi4YbYyTsKSfW7VRYPTjnmJwvHJmv9d7kgIhAPJA29kIPGzd9DgTNKyTWgKWL%2Bs6HludONHAD1oM%2Fm%2F3Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxyhKzYthS3ms6Q39Uq3ANA1R0Nyr8usHu%2Bg5iUWwbt7ufqlFRe2m8Qi9mm3beWcd%2Bx72blihaKOcW5uCCDg%2BDlbA%2FtxHngE8gTu6lnqlijuIlhJDhhWU2kZ5uwmH6cQEk%2FqnIFh03XX25HclSY0uMHA7MmAN1eZo%2FloqcyUx2DCl5r4TjhIPlKRGcWw4%2BhPbSiNqZFHO5FAKIf5NQ3rAYUrSAmvJklSsJbyKOT31DzJlxIQ7kcYqbdo1vSmEDBMiA%2B0QY3SshJXyixtJyOJz3U7OFsRp8fXucPzjV%2FmyXlvWI52YStp4DlLvOgu2J0QBHB6ivt8FNEvAj8GQFSR8lnOX1YsFl95ZjJn2Z6XgfP%2BFT6JyAS171Oe2%2FyzEW5Pfxoo%2Bl6jWAU1itE%2Bfq5GISLXGsRQeHv1pe%2FfP3g%2B07pkNTB3SD6bHuY0O3l4M%2FevxSrzWPLzvOhNoEz62mzqy0m7bRaZGh5CQiQWR8OiqgoNwbRmQK8brTUq3gtRWQ1xlc2s8KxOcBowSZY%2F4na8Z6w7dGtySnAubjp4rihDRXXm5sF4L9PhOTJ8jXvuROQR2m1m78W5rLZIhHpiugCaZOtnc3e7mhBJrEIfUiQiwbt4Ez5w6Apb7E%2BS%2BpE0A0tmen0iA%2F4pmjCdd7HcDCHiaDIBjqkAa39NdfHzsXiTxUi0RbcGLRrmN4HTO0sH8l4TNHGQPVmLkTRMg45Q2dCl1F%2B5iBWIr8eZ3txdMk7mFLJ3UVbK8ao%2FwOSQxjg2NstbhdlhLKeV6BdoRN%2BO%2BU1y5skuqR2wVjc8PMo2Gl%2FfXnrlwj%2FR9ftyUG5LVbGpWtBNl082Wzk2Nc4Tk7MQhZtg43B7%2FmQJDPd7JJqHgfLXXQ%2BHPtDYC6EDfkY&X-Amz-Signature=bcdf5008f3bd552c3846496b4cdea2a85fa4fa3fc87b59fad04b8f7a9170d391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

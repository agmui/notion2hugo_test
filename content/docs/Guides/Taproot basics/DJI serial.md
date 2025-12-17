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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRSV3Y5O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9E2R%2FXIIFx6B3Bxo2UIz97GePmFQyJZqLUyX2%2Bp5BhAIhAK%2FvrGXj8E%2BWAigcugc96XEEhlB6ptGWUda94tMRltgLKv8DCHIQABoMNjM3NDIzMTgzODA1IgymAFDfx%2BGAXn2LhPsq3APMJZCUTnHH%2F52Ne%2FwGq2z4eOc3NcAwZCEWfPwOz6jHY29d1k7gy5LKb9y3z%2BR0dAe5gnNR9BRxGTK6VV0QLoQiwdywgq%2FO6DmGMz7lMpXmFsKbTIfMWV8EHlGzOf2yr3iWX5T88PLGzsDZ6RI3I1x4YjQFbFAVq7zGt4Qn2whpqhkapdxjy4Cqfz8fgF1yLSwnJ5nazD3LEhn8aBP6FMxHmzrxoq3i3SbBEYgupfX6CiapGTbrkpJCCXgDhS0OFZxXuuRMBMs72Szhx%2FShI5owfuSUjy67e97DyiYbYQR%2Fi2DlHb%2FNSUa5vTCEM1TVDyOPFIGTEOHI7dOYkfROYpRrQU05JTIh%2BgyU5wWVdW7Sk85RpS54K%2BGJZNoRvL4lF2bRJi3%2FduKT3saRJ9GewBuHMYZBdhh3Cwklfe8WCbMusgaBU4Q46woPtDl5hfVXJemAkRrx%2FzPGf6iXtYNVLh4o8vu1XQz96DzwdFOTna7NYIppxjt%2B9kfqdS5xKWYEBRxEi1x6mzagwKDgfJZ%2BY5Rer1pHjKYxvusaBIq0Ma3GaappsEpGQQqn%2B0WOA5tKC0B%2Bc8CqnskKcbp2PAiqsMH7VFOSkqmGcRCId8B8b4zc9fSB8ZtNfu3UU43YrTDE%2B4fKBjqkAV9%2Fkl0fQm0DIgtENa6mZhnQ1wSVmqABC02Fyahv9s16POx221unaYdKwplD1s1AscYh98tuNU5VMttJjAdk1NhPluMKwBAnmrc3Y7EPBZrQyL2smNeOuKPE2jabZVDERSW1eX0MQb90Qi3%2F9pQkrkOxE1so%2BEwAbSMyB3xVT4lS4SnlFyZSsRtkGO4V2GFBrgahq0QR3z4ccI101E6g8v9%2BBG4a&X-Amz-Signature=695fb13cebfe1cd93f71705eab8a881b9f86eb930834bad458920b555a336acc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDC4V2GR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgHYYgemj3HkWtDkEIkr%2FjTNjZq%2BdQHxugo%2B6oz8RjhAiEA1RcUlshpWOBDacsmHzvu0pRPpYd1PwKPp%2FhVvwCrgUwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCYJWrL7rfpidX7nKyrcA9hTmjy7N%2B68%2FJFziakz2pV%2B%2FnC%2BRKI1%2BznpAsxsPvQyG6y6w5neCoNfUT3nQjAkoKa04EOpEuCQBzl5LTGA3idYXcS8T76vGNHAyyoKtM7wo4muadZXmX7HFVTEH%2FWdWhqB6xyCTFWF3dJLYSuOZwPbpmOt16VbV11RG30hRGikWUpqHKRXSTg%2BXbYyE1C8mqBJ0MJnDOFjtKtcf%2BZMHeVbLpIkgI8LzXD7YkgCDJNc6JYr3t6qmvaly502mfPQo8hpXXZfuxBNZUQkDSFqQbSGDlK6DgODDX9ZzuHX9WFn2fRM5H17I%2BWyMekoC898VkuXs7FJwYMPlmZprRFez6PFshFYBsXrnaUKSemIEWEHLtH2pB1kJocXWOTQPC9j4ic2%2Ffrvbl%2FG0ms74pokkdGAQNJO66QX5RTFqHvm1RR4hR5l1bSQG6tc6TcC4BPDZ4%2B5Z3zLvSbhE5AHv%2Bo1DHRD88KrKvHhO8ZiX2nm3ddxqJJ5fmLHMF7Tj5pKgLk9UsXrJCJ0Iix5L1co1kIpR%2F%2FcjPbfFKImhAdcRA%2FGF0weBzViXpgylbHo02prAsFmX2zhOiu8dsLQb1KuBAsjSAI20EV3cO637zO6%2FI7YMvECDinv7IH%2BA9IhVT%2FsMMz6h8oGOqUBSm8kJ6sp2Tzoj3ybdUnk5PNj1CbJkC4l89EvVZU4ga%2BOsohV3JdcJbP5oMXRqGm4AXE36zPhf1NLk59GBBEZDXebc%2Fh4lw%2FuFSG70fswg7q%2BgJYmYUcLJfVn6iUilqKk4zcvAxotZ%2FiiIiYP2uoJuTLco%2BgPPom6f55WISzAO9bLkkbx%2Ff2o0u4uO7pIFFQFmXn4QvGc%2FcGdHcyuO7NB38deLKX8&X-Amz-Signature=3c8206309c4b06cc5bb0266d31909ad85ef7310fa2a872450b9cc21d569c2314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEVHXZ3Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDXaOVTvrGwWZIodXccdYXNRadfHVyR9nesJLkZQtXUgIgY1l8WDpTQ2V0pgS4hbkTwe3G4TGJ2k3WG8u87AvexVsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKeySUXSW0llpWXWbircA9hqbMj6oZ4MAnnmpDjQT265YMwYNpW8%2FIHXrVbfWJ7TgS1fBA1ZXXA6CHEeFiJFrr31AK1wu7dKYDq0jT3TkXEWf7phdn4D9ztZPxOwa47KbkRpwYzG29WgOTsKvFt8PGDuqMj9f%2BQralHziwB%2BnbYigMGeM8LZzjsyK4YoO9r6heB0NsrCGukJ2WyTd2Grd8k7bs4JYioKun%2BTCb1bw0DK0pND0S9OUnrayy5vg%2BU9eLyqlWInp3ia513AIEWipLfKmK1uMXoyrHYUvTJmWvvx7vPmDnp1ejozZYb4Bq5HtNWDrW0Q7MOnnRWh0PowkPQdUNXeP5UMJgwJT0u0tN12z0%2B50xMZnOzra%2FcBQOtYlNQkvvWv57dZz2SFnpIvescXMALWp4bu8QzKVTXpUNoosVUHe%2BqjhgMlXJE%2BjnbRxva5UoAD8i%2BKrhkn6Xiipbg%2BTH%2F1dzlCof4fxZHmPHqrKRwTczvdXg7aG9LiwpSHZ73aFYQ5pwnxQ42XadFXcXIMH4dbITfFZmwu14y27ch5vTH8Rz%2F%2FIDcVw7wF87lCyPub%2FlPLVq1QKQZf3jyXG%2FQDHoimWe5J%2B3T%2BeHfeM6%2B%2FW83K5eSqLazgejG85icjK5M%2BDN8mTsdvW6eRMOH7h8oGOqUB%2FkWhuBS5UYPKBwoAg0mqEm4VCVdXS8piIvq9n9dE%2BJ0K1gK0gJciM4WKzoACyVDQeVtfQBR5%2FxZ4PeyAkC4XhVaOhTZKz6fxnMZMIbN6DZ%2BHnTich79k5rzcMVgJKYXh%2F9FHDd05779G3jvOR0sFZZjjp%2BRu2RM04h5lLRbXTcv%2F8C8X7ZQHN%2BJKYKNiG3%2FMqlIS%2FLpaNFF3SoK54YODhNJxNZxk&X-Amz-Signature=0cbe01b87c9822c4e589e41b086452fdb4b050cdc7c5e82b65c4856d5bd9189e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XROSXHCO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWwBGrQJeV8GeIFRjPZaYFA9i0qPyzFy77z1PFh9MHRQIhAPINluMq%2FHnxFz1iLWGpli776gnOue6d4pFiTdflIAusKv8DCHIQABoMNjM3NDIzMTgzODA1IgylBfKzJ72FhD6UkU8q3AONo4UpJyLPTHA8UDtsRXxX54sdd4ruF9WWWf7mhE2Q9S44nRBHD2XPGH%2BEoBBEaHmhVu9VO7p3WBBLXbWdiU4mYSMdcUC51aFIFYSf5af%2BlxfnHAywgT2LbqV5bOM1torGGHsw4jN83u%2BsGE6p47PWCEexX5RrElWhffpt8f%2BTSYBL8ZFghZRQJwMvcLhUNEyETegoRkl0zMEIuARLn0H2SEES7DQdAqF8dfb3nl145ijye9AF19fIwZ2VlzNROoIoxDSD%2FH8HO9vDy7%2F%2Fr28t5%2FjcISNviUmZC8A8UDdjD%2F4wkq3OVY5TNYjN8LpPmhBybMd5Z%2B6ArHUn4iolDu2VF2vMwVJEOy0dBptVlH%2FICrb8FOKVyrgkgsOVr44X%2BPi2iNK4bP5KZXyWCjFO4rH5BJjGh4uIWz%2FmYQtPrghviXkGn2M0I36zukTIG9MqPfPFowOa7KwY7Ming4mGnP2CPQxXL52%2F9Y5HQPkaEmXpXP9%2Fhh0DVwXssdWK1LU28wolkepsgRp%2FJjpJpIz97o9TSXFW2Nyq2%2BWHv9JSWv6eMnDckStNJmbhk8qGlmEx5zzmTRMllJNRz1G1%2FEN4pdcpE49ztVjZRGr83qzl%2FtK%2FDZ7%2FT7%2FU%2BMKW%2FJLGcDDM%2B4fKBjqkASv7imwdBfkVxwYDndZZfqxf8O09XdWNSKqLNMz4j%2BmT4COOuMmDDpTP6uY5PXjyL48AOhSzw%2B5p2sCSeIazzd8bVM9m0ZiO4bZWRDUoWaUva243sz%2BUDuhCfsok16Eezm313XijfG%2FF6Fpbty7Vn%2FCe3tkiARsDeyC8fbAFmr6iz801a4GFlqvo%2BjUWfCEzi2FrjfHHowiEzAZsHZyPnsOHI%2FhL&X-Amz-Signature=f2a5eb3c4775495e521c58784c7ccdbeba9d502b3ad02b9e937e23e0679e67c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

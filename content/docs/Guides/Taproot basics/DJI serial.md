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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRMVQXHS%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBEOk5E6K2V8BZkm7dAWyIsf2oirCTIhBn0vvbwZ3tRAiEA2tf2bMK9sQN5iGXYn%2FS8PBaDoVIZLsEAvqzFn1k6FcUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEpuKnxSG7Fi3c1LCrcA1xgifP60pvwnp25iZe3UnuZn1PZIfOlPtzvB03282XjjQv4ONLyWJxovFd3EiomWCw4F8jI1vLvYVJz7GCmr9e0xZcQrKYaaQUGsihimms8q7z4KvPAF%2FECtoJDK8OVpuMYnOeKBoxLFj59%2BYYPuXa6cL8J6qR1AOIIUtts1j5J7OOMDEpO4Bpx3jcYiES6xwORsDwnsD47PBXoXwiyy8Zxxr4r30lzaloOFmuKRCFVA61j9exxOgqFRL%2BsHN63xMUzE3ryomT99IXlY6Abt0Q5SJdg6Gu1xIW2Y0wLo8z%2BTz3kuqlHyQM%2BXBArr%2FZncoP8IAKhiNPADq52v3G1hc8YaffzfrJsnVqlHWhHdgq2RHtAzJ0hrNikHF2ua8ts2Yede7PsnXUcPyeeRHw6VpCTrmKsahX2rxh4qjdhMoC2reuWtq%2F1o30WenLyfDL5f3sirgYGN7ppgurhLbwbJ4wVCcM3gLiTZ9Ko%2FAWOi04oYTeNUelnntAUc5TZXiWTPAJioFc2WxhT14YEdNobw3lBOgoR4LdUpZB%2FoYi4ENrvJ7SBlRGDAfBVnmmD3Q2TvNqqud4gYPRJ3IlkyJeEOceX8vPnJLx0%2BdISSCjjW2OsMhwp0ENyjVzNai4GMIu%2FmNEGOqUBXKLGMt00zVI%2FsLdF%2BoqobVvTqtx3NoByJ0w1KI67FF3MvXXXGugloHaNz3eocf5ceXMY0z6SAnjf6lfUfFUi1ql7QwAAn13z7eOA6G3luJQipIvTvvFS1nDJ3frW8mbcxK%2FA95f7l9ebav3Xak6rjuvJsIwHys0UI6arEZsMLHye0Y0ftyceHR9yGvz1cpAl%2B%2BmeKBZw0m93tr11648vJuJUt%2BRp&X-Amz-Signature=d1bc410dc992c63b6e0a166c943625aad095c803f00f7dbbca42d764d5f361a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZWYAAZ%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC68dwr%2By%2F6zRPjVEUf6XB3XDH1xqqgl5Zu2uysRygqbAiEAvebRj5pRfsFivgGIiRTs3jIH7hpJWpf8WIE0BR9TQKAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7g2BuzPxMhSHyurircA0LEiVbcIP32VjEiCUlELQgWxXeiA8k73NAY8I4QBc%2FRQtvHAIKyZJFPv4LxHuy4PhsfiBKpa30S0kPzUTn8oPonyraQN76MxntptgW7pmE5YMYYOnIh7hP313%2FtvUJ7K%2F70vvzCE%2B5%2BX7QBziQpsC6p2FLEDp7J6yPiXSrPaYCdOAo0RNKAG37j5ppwzpO9SgB8XqJRPdCO3VU8dbj0PZyo6inpHQoA735If3L9%2FfhxBG9xMoOfOfJbh77nS5%2BUMXHvlF6pWX7Q66XyP1xQWRHsJKCRYM54qyDquTUgA0XYL42S11Tr8cMrQPvQalT8jyZ9GlzCUkkliPyCXtDaJYSSd4EPqY2ltOmV6Hw99tAClPahB5vJMSx38DEXAH8K3RAShl4ThS3EDrLOZlZnBiqq0DpYysdFseQjGkJcvSCS8U7oZBykW6drqzY6ZwA%2B301TqWgsa7l1e340CcduSVFOS9L14yN6v5RmdhHBBEOqYD8vT7E99wdvjqD%2FWfGPN5Fe7sVKRUO1DE5bQoRBfzEOZWwnB0jif40YMuQAc7qEWGCWdHzmR7ehg9NDfH1hN8iHGNLKKpxhCw2NyKG5%2Bbj%2BUrG4zl8%2FjIbc4vbxhKWAQMwbPEKW924SeLRMMIbAmNEGOqUB3a177uN6qBtXXrK2Z2gz2Q6qOWciTDbg2J%2FF1Q3aN3T3F%2B1Os7lpjB4qwtAE12y6JzkKuXLq%2B7zFFCT71ZsWTPWHvWho%2FS1ey9s6FiNX1mcID4dwMkDiyNxDl8%2FFA9zyvDEkcOPeUlK6JMZygfe1mStZW8PYR3pfKpCZgbbSdB1Rcdarh4rMww%2BjQZ8EfPygpPlwSvicyDfqUxU%2BU60fPAjkCXvB&X-Amz-Signature=b8ddd1f86c3288ffc47e5185b6edaf269b6d95759a526f18836a7f517a6fd094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SZBK6UI%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG83hicVorE2WYHv2Z6Txxt0Rxi1%2FsQMgaxOuyrSIPCUAiA5X0JfVBnjkK5XCCGorb%2F7NDUvy5NWe3FnEODEgYm58CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6bhXbvmUAtkcbeeRKtwDGOh2MMMLTkOq3lcoGelC0cpAQ%2F1mJ7TShyMvRTihD8vfM05xiGulu1rH0iNAYQkHy1RNyiO%2BzzfLdVBpUCFZFu%2FJ9opyvXEhXgS48wneYrHSLJ%2BbzKCocLIClbamkAr5DobSvD1gBENJmiGrGjAargVeH28MJFs1j%2B1jv2C%2B89L0WhNfTZTY9XlPIKK9E%2BMsCb4f51qEK%2FlNIu6xs9aiw86Ds4lO4reeOQ1pMTlk0leXtpB0iAVv4wqlwZ4f07ibI%2BfcpvE86x3Ua88ds1yEre4AEg9PZIpbBPDErjbUkRPHOiK%2Fd90QDtVEex3akEUy%2FhHxZGE6AN2Xk0W1aozj4UMY9akTlxv8sPUdVH4lrrCb3dL1ZUhYz1j8fi14rv5Y8i4VSf3TI2DMDmP8woUsaP%2FMETMp5qsbpjgdGuL%2BcvB1%2F%2FZXcpd9gBK7QZsu2n%2FoCo5xAeUCMau%2Fxc7n7iYMqoybzuJY69ONyeCwGhFC0co%2FZJ9EO0ayIMjITMtekbfk1gFTqnVUevUoPRew2b40tMOm9W96%2BPU2H5%2BDpM3goof%2BG2wtlj2J2TARvU6wF44kt%2BrITh2M%2BP2qFDX0hfGmYAS0zK0rYkt6HxygPOn8p%2BcAOMzZviQB4UPgOEUwyb%2BY0QY6pgH12n707I6hRLQJ1UmPRSKEBVKiaf%2BF5bMtsEtqkdrhgSsjtAH6cWtKW4wxpvQPuEtt%2BOOBoPrZCfSUbAKb2TxPqwwRnMfX7k4xg0COsXE%2Fr4uQ9dPVmxP85IcOy3LPrn0nLznmUGy2PpILzK9VE5YmiUBuJyQCNv8%2B9cIidHwwwHbMz8FiFe2%2Bcm8IvEKJCEkML2QjaOMRqgUUF9K4XRDv2voOC6gz&X-Amz-Signature=dcfa1c43abaf80554a0b7b549446a950fc5cb0df4b6aefa5d380b23f8d4fae04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBBASVXR%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqPqrCXcD5Wysrso%2Bvd0Nu61GPU%2BsnjtTDWsYvO9Uw5QIgXSu0zfXZc85luM3Kgg7W5ebOrZP79m7FqSLh3iE%2F3pgqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVJAzgbGJNTTvnugCrcA3ZSMKDPaLX1BhbSyDu5rn6XEOIFWcAC4iu%2BPWo4PunfNXs82Dn1YEtlY3ON%2F2ghf3JBBQEScyIYY0nnXRYasiVsHFeVbj%2F3lxlW%2FpKSh4sxMiScQxttBJtefxTeKS0Zbnjkb1UUMIjUYq98%2BlKWQLsYZT%2Buic04BnVIBPv%2BE%2B6%2Bx%2BLprZjc2rQLPvizkfDH3FSZ88uM1WgFXsPqpNmeMfL0wc%2BmO%2Fn62hMkM5ePlbK0bbAeW4PNx3JAMiCWyvJn%2Fjp8t34Net6KOygPELO0Sw%2FmKnxuwSZaEvbIqZLPh8DDaJTaCStYExFsr7UXx6dJwFeGpzu6xI4RoHqzyB6iofhqYUUO5HUoJ2RGKPLF6wQHuxgj8fbP0mvqXHYz%2FS3hDpK3c6MDoFtnWzgUfnt1%2FycsDGosU37TI%2Bfrv7vBTZ2sC%2BwPYVLGNbWheGeW625yQnUWTqGjCsMJ5sbuAnmEyCvv8uF%2Bcx%2BZK0QaGo94q9Mbq4u7UdqYEnlnNLih0Qu8NpR%2FLNFYcQTufUEI1pgfWD1q1QNCBqy0D%2Bwrwze%2FFFrW4KgN3PgBLD2QdqpGWB24NKYKh3%2F%2Fx7ataiPu3VxJ4S%2BWVCs%2Fn%2FDKFxOKCnhGWcbEs342wIHeHX89RjEAML7BmNEGOqUBe1dJd%2BGvUSrxGwrUVmtQNNU%2FXMIpdfz0SmR5Y0tgkngP%2BUXFx4gF2o34kADJEW14h1tHJGhhUgiWpiciPPc0SiOwag7ANmtWBKRnuaMmPUV04KBzV%2BORjOXBCApi2iQhyO1Tml3wiHHCEnSivFf6Pg9aU6qHRvo73TDhQVx1GoHaOq%2FyOQsw9Ht4xEgYFeMa1d6rGxa9YJnqZKkIKTwqtpSzTJ5J&X-Amz-Signature=2d48536ebfbb7f54c1e9d146a61790370765efbbf4dc25f80bd9108635fd126a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

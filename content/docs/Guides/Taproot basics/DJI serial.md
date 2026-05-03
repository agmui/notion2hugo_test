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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WON56D7%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7DgKBa8z4P2TdQm6K68gITogVkiz34SQ1RGcfh1z%2FVwIgAOumygJeWdHSchKD9qptXkd7lWCEWw%2F7WwPcEvQIjkkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGYZeB2gsAMLQSr0byrcA%2BLap7q3ztam%2F1Nhj%2Bm3FNqXcEfEw7pKAC3aCbXwdmjAgPxQwsEHz7DWeyr2azkqspB4Mkexe5k%2Biy%2B96cH0Mlk7vLV3DVtgDMcJrPtyJlP%2FVA8UWhQ97Wyr9oU2avmrstYzsvBlVza1LrpOdwIsFCge1bCACl6P4D74qvCuLnur3WwnmfdiBqYox9x7t5h8OEZALbt%2BpfOcsKNehwyw2kwH1P87iCf7YqvE2IkvsOjk01KK2Lvu9xliaGXTF7S75Yw2PPFzpvWBO47t9kPxMu3ttUwwJ7o8uhxHi1uWREQGLFRu2Z6QmBmQhlafEOqGd8%2BHMWS%2BymEmxuRPa1ZHmKxaxXkUm%2Bttbfrcy8kX0ziPVTJBWqRz0wVzMvUAKJLYB8x7PsH4F%2FTZMuO%2FH2%2BEL5zwcH%2BQDkEFuKkaDEqKc2ZLbMKrGNQWcoWYrgW0K6VTxU4s4Pclf%2FA8YlzK18mHrYw%2F7OLvHlv6pQP2FrPA%2BOdwS9%2BR5Sta4nxReKPFeF6J3qkvFNAWXv8aFr6qSjpe7G3pyIJrQ7ek9XdvlZmIgzLQXfeyD4Qo8pLxm1OuuBlQD7wkZ3lMgSaMZS5BieZkLRdEQNLjhlbN1h%2BwxWNuDXkok7B9d4KerACkmJBUMPfV2s8GOqUBhT1D8zCMMhhigETvG3zkbqHUfSDEOouyB9SLVPMQ1WkNWmWfQdKqzGF0vtEgUy1%2Bbe50Xzs8xcbJKnQGxEfY8CzoDF6W0aFh2GDgTOKc4gOmQgXIiddl9IyBAtqWaD7MqnPgh1scL83TT7LcAlQrHMnJNq%2BTLuFMcO%2F141bBsx9A7JqFxIVHkz%2Bqft3EMgb%2BxksPQ9z8t9wTsJr7zYok3iNcqyow&X-Amz-Signature=f31941b6dadde89c2d4b605c10de2f2ff68945a5538b4801d65859322f1157fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIOWLKCB%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZqLXHPi%2Bc7ZxlqEXoCF3dMABhm%2FErL01anv7OSYYb%2BwIhAO5PPR%2Fja7ayBr679OhSVt39IfK7QCgk1a5L%2Fqq8VvAnKv8DCEsQABoMNjM3NDIzMTgzODA1IgxeahHcPgCgSn3P%2B6cq3APYBHZPfhK%2BXf2G10O3zG59O2f9F2QObUlsNBrzsBVzq9z7jBnDf7lTstpUtnuGdgFQ0eq%2BWEL%2BtpyzTmGkAPBIOnhD%2B7uyXAjv4v90l349ipzxGJvTwStmlNaggycJB6nUnrFcUJua0M3FlXYmPsPdaDq7YJJYqlyBD81giB7PZ3t%2Fj7KMtp%2F7Qz8R%2BvDX2c9sJQSy%2Btvx7F%2Fo4YjzkgsJo0EidQ%2FuetxKzPHfISFfo7%2Bdc7nAeUi0rf8Kc22m6BflZJh7GKvjHIgpeKR26At6rMfPgfUcSo9khlADrZ%2FuqFfafRlfy23Y3z5FMYaitmNlFjwBKsZFXtGVE6Unyq2OzHefbEF3i%2BtqufhGfZ7XrIdiFwuMxpNQF54gs7OKQii%2Fak%2F1WsAOcL4tBsB%2Bw3r%2Fu6%2F4%2FBLsDVieHWEoDImjXXpqAOnBww%2B7V9XTo21puNiJBsD9ztHDcjByXwdZR51hdB%2BFCTNR5QfrCxnw3ZQu9FCuFuIngLTxo25c0YJPLg4JaAalu4EfC%2FQmcHDzK210SQ7oCXcEfPpbN%2BsiLXYalwtP0XJcHFytIa1xnnPelFKxo17U%2FozfqBZ7M1PMZSmCkrwbnCT58Ea2dQlhsvm5A42zlDWCBEeUMCRkpTDf2NrPBjqkAalFEl1sgMEOHRElZSPyXPnuu8BrSRlmnXqNEifRvfvmHYoZoHh0hhQJZl3bHmHmgNnPK%2BfIehW1M%2F1qSlUozJHvCrcMwjDTJBP%2FNW2pEmoYhrq2Nx4%2FN8VuQa%2BEjXQIsLzxEwf0YKZFXDWW3K0nGOwj9wLTiw%2FuYR10ALnstpwKGyxbN%2Bv7MqdHywvXeJKK%2F75HsizPirLDp37M1%2BAwbJqc7q7H&X-Amz-Signature=b0ba16c32c33d11788e6eb2016bb964f9666693eac4e2e46b36c634c7806a549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB6UWWLO%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHNd2sT8xDanH%2BQL9fSymhf3MvVvZ2pNzAV5mraRhULAIhAK7PK6Z7woBmTI%2FiNMSbHygNzRBRqXmMt1sFvpBwvK63Kv8DCEsQABoMNjM3NDIzMTgzODA1IgyyQhGyNaWwnbo4Bk8q3AMdqtJf9VbHvhCsJzq6hnmN5bHVogg5yETIQdIm9NZ8qHe2FAi7tgamGwLUQfIFY%2F35enVrzS82VukcP%2F4i2T4vE3epkQ1AgwpvC1id4gfzA8w6D1d7XZ5Lre8Ueh5utlHOxNBbHeRIZXJ7RhB5KLItRc3FyVaSmctmBXqeMRfJeN266vksazExASK%2F81DQH3rcGKkRbm9a5A8slFSlsMf0LsLoc8uXioBJ16SVdIUs7jWJBc0s6CWAcVu3WeRsrtuXxUAP3hcB03nz9RMS5GeXJjBeJp1io4MZys%2BSn1y%2BKPsNS6mjpKxWn7mRJugyXF%2FIyVUdZk%2BEOBqA33vXPFE5Ao48j6d3GwoDrH%2Fp1eZy9kktiT7j%2Fs8Xtl47W1526QyOjB%2B6Ft%2FSGkFV4%2Faa14mSUfcnoKZ5SQKxF0a2joo1bAwBE5TspjnkoRUq3vfFGAzK8mkRIhfNX1NdbANsoCLmXhxQ0zjHL1J%2F7mM31VOnLPHABekAph626g3bd0%2FuiBBYHNJOwNsCD%2FN8GHT06ggq5HsDpAQ72vvV0OpvpCH1NlzpSY7znsNKTBQxkGG5mzBUl6WGt%2F64seehdqU5nMaND0VYTO32C8dK9B3k5lQ%2FLpLkBCr%2B7OMxjLGVCDCv4trPBjqkAYTiVa1K4Q%2BbSUW82Oz4%2BCxYhwE26Nv4ovudQzUQaJMmdtvu7EqFGT%2BJym5jJRoqZj6wSjhW415cCH0S%2By6Ix79DcmgnWU6Y%2FDEA%2B0jRaj5yfsurJ0IOMUs1AVqHzeJ9M1Jkb3LrFNLMzHeGJtvQs4EfDOHbrvyQVZzeBVP%2BCX%2BRExtuZqdKS7RhbOo6zUS%2FBdVPqG5pxiXpTWxoN6GfQfGFTyIk&X-Amz-Signature=e8c1be991abb66e372d9e7ef1c5587c0312a0ade078e8c04816f51810f902518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666XGZZWB%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3KPVme56t13BetADy1R7UAq0CrG1SXUPZ3z5mc57xBwIhALWMVXlJ%2F4d%2BhzWXDnOA386lIcbULYQ8OdZ3uz%2BphW3zKv8DCEwQABoMNjM3NDIzMTgzODA1IgxDhqTJK8MKN7jD2%2BEq3APlGJIlmpkgntmH6YmzxhJtbi1BQtEU3BrE3Ci2Kw2p5U7g27mmfJlTVNa5BbKoDMewSjrCybsywpuPp9N%2BZac7NICEvY8aQ4i6wqcjNY4lCAq05y4fjlgNYvRKnXxIMfBqyn6gwp0uLlnaLfNaoX8w7qMyFchgaVw0KE%2FvtSTZ2I%2FP5OLm57iDdBRvuXcTHdLSo8y%2FBLwRG6wZIZVUICACIfV%2FPpABuRMyvzNNnijkzd5uOnWtbhgfBgZWgbDCqQC1UTmS0%2FOTmn8smz3DRLPSykziPgXqE6lcIx%2BHKFB%2FTU2%2FkrThwDG0YkKRFPF8jPmw98leNotNRepbU60IItcGHsjxYPx6PSbcryMiybwmJ1s5lnM11mIvwtwlLhbeyFHFf7bGXpMlSPWI%2B467bJIn7YJcFjXOXg73XME5HQPAGepv8nGQm%2FE4K2FIGzgjNFanYIL06agivrVRO5qbovte7BYEmXd12ONmKn5yTyO68Qs7GhyBoWrKbtHE1qZcBj7q9O2HcAb4ELXX42ZgVigYb1kcd5l33VH5qppPXd3a0pOWGI2yU5n5jp6ebdlDfMjMBQITQAUDkn0%2F4fA9h5AxEab33rkQJCNrzvK7ufMkwlWZ6Z1B0E486fZGuzCB7NrPBjqkAbPCSVHTK1qfCqvQWtHTquRZ6IUz6lOn%2Byf7CrzH9Oy1FVPlNRl3bhX%2FoYlKKFlyILeQwYEhUcpxsmC5p26kVnkElJ3B3NY%2BNEDzFn5kORjI5hKpuVDq5RcwYKqwD%2F79r5k%2ByQgjRclFErWZHO3dve17%2BY4%2B7JCOYqKWQOobJVPdEUvsMV8j71im3WrvJgfxI%2BflOiz9SyTyVcS1l01%2FWdChleC1&X-Amz-Signature=d02bf03afc4b62f625e31ba5fac9b2a3093648ffc16f9cdd4b646c1a4ee72052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

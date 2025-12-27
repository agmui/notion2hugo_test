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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUSN6QQK%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDV4Ok7N5CWCPAQlHMglcYG9p35xoM2UToIoA4K0IMfaAiAFfB%2B%2FLJnIE4k96qt%2Brl%2BDIn6N1lwpSXkqk95gOdsMzCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMstJmLtS%2FP5ISLOPTKtwDsauLGgJKziaCJ7P%2FMSZUZgEi%2Bp6yc33mONA05eadvfGQ6QZWnJVcKWie1ISP1V65LfO75XgKeNgUeH6RMqr3pLNUW%2BrPoSfS%2FXz%2FbEOlyj5F2y8ZyB8x1xM3YMFz8fHlKHOpzs1Xr0HC%2FXSGYsaPw%2FpD8EnVbnc9O%2B%2FOu3BHmGUwY%2B9wYk%2BxxUjfd9Ic2QTuinBKyMPahsoa6xu1XfbYpjnPayW2U7OEVeMidP8KKvUYsL02tBESzmpJ52qtgCxVvcmO1mQ4C5nMcEuuCJC52aE8JbX%2FQ4mQVexhCblrvUmSUfW2uoLGrhyCw52OyMOLnnwdM42aa1hnP%2Bt4YLR4P7UuMuFrz%2BGENGGQo2hnDBxwmQdlTOGJCBH5kI4Agosnvp9Ws2YykFpITqJFCpL6qgURdqFz7t3eUJs0auE6ukG1HzpxJayswF%2BviJwmhOzAKnyhelTyZQSYHFcu3asmhEgOHKbf294IoTsyNM5Yoct32PGwQUHb5FdsZ5JEeGoY6WzjwIsf1ObPSOlpwPWf%2FZivDZrrQAKeHXjnwA%2BXmvRHSxjNDtzPQsCsuBEoOun5BQ9Zmsj3ArE2K2rJ4hnfqmrWyUyFkz9Nmoe2jXIo%2B%2FvI4wHCQ6b8rEP3GjwwhOK8ygY6pgFx9jXSFqhDBcxhoi%2F%2BvFGsc28gmgdV1pV8tVJnGUD97SKxg18JZhiYk%2BoQcMWR4lEBv%2FNY%2FUqfaIsMs4tfBk%2Fwa8yPRuRxEQQsAKWft%2B17qlZ%2FkW2hYcKcnJVEnnACynOOOfY0ukQBOFFlFBXm0ZWkstmkm6mzZ4DVG2SxxodUTzEwa%2BkxFMCGM53UTQ%2BIGBFbvysXF4tm%2BLccJfASsuLOZGIMfftN&X-Amz-Signature=0723a49939ac1dddf933d00b5e26824f678d5987e1124acecb3ef5e7539d1c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7TASCA7%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUxqGeTvmSnXbn7J7laN4228qIbQRRVlkJj10CK6LxcAiBIiZQcCdLpMUpKExDKKXVd%2BGw6UiNnLwgibT0gIsNwhyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMKb2%2FKDxfRUzhZ65UKtwDlwr5bQH0oP5OsoooltaSxla%2BpdH1kJd2qLHmx8L8iahWBqXo%2FVU6ia7zeqHWo3HJ90RlO3weQOsUqqN8xNfjhGaF9fDUG6MlY8GUDE1iavd%2FTWeyYyb8IobRk3%2BWSwin11EnhslhD8J2iN4mR1FXeldHoI6%2BXgLJ0fFIkdrSb%2FcjYsk%2BR1WeF8GRrIs6gQ%2BS%2BwduOrc1v%2FLpKrFTJsl3Cr1dLdG45DEMM2k4JFjjEFnE3xRgQDQOwkvVG95tT2ohk3b7frWvv3M5IZxS4sA4h72DIVr6NCl5axwlIpMviD%2BCxjbuW%2FY4jqvV3Sis8G%2BJmGXldcOkeKOQrBGqhKkUSsuFBZwUaqH8TL1SMyGx9YU%2F1LUgVUQjERYlW4ralSA4%2B6IvAjr8PtteAItCiI51BEPBbiiN7usahyrK9%2FJ893tOgo5ST8%2FS6wne5OmbrfhYqEWNw0HazqeY8maOQRyt71c0HEb6RQjuP35na4RnC75TTBpqXGhIYzraWVwzzWlOp6nmPlVe3JcnFdFicF0oRNmLMMKH4o3ZDY2PBQBBs1jSm6%2BxbTTcAgy50QPd91uPFZ%2BuQAZo3GLlb8m%2FEA7WsE58v%2FcxPApdywXBXH6ircHXZXey6ga3njgccNQwq%2FC8ygY6pgEH0X1F%2BOj%2F%2BLS71JwPtImte7VHH9kiq38Dsc4shrvWXvPA%2FiCOTWTtu54ZtVE0WfdQTPHKYXeFAjbojdxiriAyXvcC2Y8SjlVQaNaClkDm1M07UL65cxgWfQw0f%2FLw6ffPxoowff8QRqM%2F6sAig8LFhzz5O98PXRNG1rDKkmCM%2FUK%2FNBcA7X%2F3VUYyTbmY3Je8zDxsLyAVgWjBbTQj2MP%2FfA%2Bz7pZ%2B&X-Amz-Signature=6bfe0cce55a0af1bc5e80877012dcddd468cd725d4c07d4d8e129f0886567dd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UROWENSL%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9wnBrcAqxIG9c3gusz8bJ1m2xglsJjNEUwQA8zmUciwIgKmMoPZ3iCWfp2aVOl0%2BRNx8M%2BP%2F8ptKQg9hdjyqhTisq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDE%2Fvs%2FOBBGxdul4QIircAxOoVJdtPeVizTxUq8Ho7NwlhWqWCU47nb8MaQTi7us9L1cE9Jkk3vVxJzQ%2Fe8lAh%2BDgf03UlMukzmdFe4Fwux3FOigADI%2FDrj1Vq57W0BZTT%2BqeVPjDCVkB83VhC3zmbJ06VBTtNnFJcCTXWPN74nkhcYL74okxS7AA5rN1%2FclEGhuwk4M6qk7P%2B4885NrVyQnAGfUN32xDtFfV2RS%2B%2Blvu9OwvKExP0dI%2FDhOpGp3LMPBSRjbyFWpZPfPrnh%2BKTcvV%2BdCWO3DM0uZPNmS%2F7hR8mdAT7xN3TttpIkVKbMPxhdvKkpOeOb5wWcCkusHQvYJRQUm4u6kbg66wpWYPrjUtxjHxHqc1LkLoAj0mnswPnyTKmFcFhoTa47NTjXTu2mdDqUazBC5KcqYjagLwNVTsGmtAEXcHJ0adpPnQBcvlCHmecXk81RjCxFEwYU2bYNPrxHXPknzBP3Z938GeuiVF8R9a9S0e8KWwTmbUAIUqX891Z8oid7XDLbJO%2F2tQxWgW6%2B51cKVBdFLUwNhBVTDEbLZbakJVPNv7cZIG6t9flXzEpLGnV3zML3PnSTdUpvpcoaUX3Egz8lGz1tWSjdl7Onu9eOArBp%2BGVIH7TwUU29k1rhzxEV0t9Jo0MPftvMoGOqUBIHj18%2BpqdzuZh%2B4wM6LnLTJlO3SxHTdVWL4FQ5Exd2xVSG7n1v9pmCEQiXKDGF1%2BtkR1UHvcxszXzdWpjiuvdykwsg%2BGA6tKlxD9sRfcPlQfHPojMCdlr1hLhvO72CNOz%2FWKT99l32nGM2T6%2BeYvKdrlt8ORGqHxvOsNeB7Hjje%2F6jYdRupx6v8MptjEAg5wF6SjgqwS3F6HzVXkzrejGf28llE%2B&X-Amz-Signature=92b146f2b63a198e844591bf06f40530bdd5859ee2e4d93919dc8f3c96846574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXGYPOAB%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLBom9bIk3T2j371EtszlDmq%2B38agUCqXTuGbsAiYlSgIgKNJZSjBAl%2FneU0zyCf5Zy4YlI%2BbrV24R%2FJuWcZfECSwq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDAPJTlkbwl3%2FwX43USrcA54zpuOA6GsA1a0ajpqdMnxfWkATJ6jBC0EA%2B93JMj7q3aG6QyfjKvjsJ8urQxH9b4jGhfq9RCt%2BI3C%2BzIn8jkG812WqrEOYhaHRwjHtBlqbr%2F2qKIDsOGb0OWUXVhAFtXVBOknBfw7O7qn8QCBQi%2F2XKBNaGmT2ojc7%2FOhEWK4%2Bp%2FkRhU9C6zQv0GdLTzo2KMChvOBegkwwpWkHnHTJn0RuQPWG%2BvltXbzeVoxDan6yqAN%2FHsh7MaZ9zKCTCW3deGenT0Hl0twTUGfIULPfUVwyVJ2mJjytjU64%2FbHdrq0y5RRxbBtbVKYagE028xe1zIWHZ4hmSnoPmRDELcfTOPi2%2FFm0emSc%2BCymF%2FDkZzSF0Yp502jM1opp46ndgJD3qdtvWGWWO9zTzzYF2NWR0BmwPxuGkiYyfrZd%2FHEVpyQKjQSIw01YzKlQEet6SMTs3dKTua2Emq6ZDxI2WpHmYEImEWv%2BZcMgO842z7xZRDpde0jxeTBT%2FZirN9%2Bk4AbXZgDcXyL4abnLtSi13L1rZn6Cn5nEYsKzDt9RUDmBcvZoJruuIZ6GW8CZ7TUQuI%2BEsjlFtCz2Oar058noiHdrFfz7XQW2xSY9bLqE%2FrXbE6FLg0DAK%2FQpevX4PpoCMKHlvMoGOqUBrWLl1sqxaXX1TUkkvjRaXlgNuy0xZKZhPV1A7Mc0RuGqc323z5EYy3o4OgUzdNlCyYVWeuhxI9UOV9iEwCuEXsRIIZ3IQ0l6wQkS5RsBLW%2B6NDnAoAXWYuwrShTLPL7cGtmmoAfWIabMpqg50s%2Bub45V09Jg4V4TtQ3iDYA4SolXvlIkS4xj67Vwnw7pkacutF1DUkNmFngwoXVgA1wTFH5Gzr0e&X-Amz-Signature=5ba544385cb3689d5b005ceaa30fee4c0e0fdd6f92db021abeac1bc07dcc3828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

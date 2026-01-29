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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HD763EZ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1her%2FRtGQtFdpJOsjVRm6PmovnzxJmsf52hpENsksjAIgeo876EKcjroroVtLtx%2B3ypChVrU0cpyKgc7I7UlKPL4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDF7blxzPQsPuuH6MnCrcAzBC7nUfuDnyItNTfLFSdIxJpa660TXCUA7%2B7EYtvpEwyB%2FKYuqkvuPK8eKZE5F5D89PzFqV1tR0QvRi30pjS4nM9NKDt7kJg0BPu6opzhfDBQtLtJ8A0%2FNVCWg9lGGR2p2%2FFHx3ji4Zp5FccZLElv4c9ez0VK9BZ%2FkvT%2FvGBP64ejkLKUr0na1vMqtFs6JMyVTA5KPcoPOJp0Fn11YKOAHETLDpSUXrCi%2BZ697D9rCbP3ILKM%2BdkfvkWFJHHhaVkPheFlZ%2FuiYa5%2FfkXXbuS63%2BPaDYcmDrRUtzG9pToRVGbMq5nb2u4cwZ2YUNefkbqahFmkoTCy8sDsk58KWiaMf4UTMqYNMKFb%2FQsQOPQ2fi%2BByxgFU3hjMxHxUMHTeL%2FODdaiRkTD59Bsv3BrgF88Iu%2F8FvXhyjV0UmT17fRYbVD%2FGcq8jS0UWZm3RRHrqAHn5uzQC54V3iwQgTz1Gz1fdQ5cCzaPFPToYw%2BfsIW3nMDd2hU4gAEFs9t8%2FuqJknA8U4c4%2FzHRRXqL2dRogIrJzzLftGPd%2B3Uo5oAzheqqudoZAEXdn0In9dvmdPWTd18JKWn02nzd%2FLGuT9N6BonHUvIrpZbg7Bm4b1a33hlDLKyDKknk2BTaTlyxalMPP26ssGOqUBPC%2Fyq97TUX2XtKV7CoTMfrRLX5YJ3ElIipjmQjQeBwXhuAKA3Zwb739IDp7JeU47wRewhlyjV%2BYTmGlr0aSEpvUMetcEF9cACTvuVe0SzmQAe1nre%2BumjW6if%2F2%2F%2Fkm8MEHLysjSj1kNDpA3mUmBl2SKxZwg46aAbheP%2Ffhm4NUI%2BPSmMui%2F1JNomoFLTPuT1SgSI1qHiZFq%2FNH8oh2cmOzSA365&X-Amz-Signature=5503c8d0d7cc72efafa25cfa5da5a67e62934a8b77ad99b6e29edec6e06eeed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MGHHSG7%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXuuCB6fFP32qhf0hLSYGIW9Ho%2BzDu3rTRh08UQjwFRAiEAxJM4AhXy%2F5%2BdA2wIFdyGr1832JRu8Qrr0DxVlLLV0%2F8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDLL8wtPT8pyw3OS3zCrcA0ovC%2FY2zYu%2F7eE516aQ%2F5awSFdiBMlhaXcFx4a1EIXtJFBAjWc%2FVobKz4tpHRPatqwyoz1rVrX4igE2JyHCxLaqU%2Fv0FwKB00LRViNS%2FqIMObGp3OxEf%2F5CZR%2FstwlvNT%2F%2BgMrxoTt5%2F4n2voHeNfprl5S0hM56XSV0hU8F9wZ3yPtwTpT33MxUnuhBXUsqov0BUJb6EXN%2Bd9cfxlW7yakTW9ZSnQSXfZwvGKwKMDMOr2qvsvZqpf%2FiBia0B65TyNprqn4GrYJ4Gie2gNOCB8%2Flqnq0DkFnf68x983UIWRU9PK%2FuWG9NkoqCya0NZhGnENjR%2F8mlEb%2FaeLjgFrdyRkZ%2BH%2FiF%2BdJvN1SizmvqqCCaTYtKuy3FADXl8ODYUQot7u%2BG9kSgOd%2B8xYKeuequ2ulEju8jCGOUnSWwAI6RdGSQ5fOpWs%2BKjn9aPio8qtUO13ceKHJU7usG5XphI1B80pyFprP5hZ5jiJBBMo8lrRZyOri9isY8%2Fl%2FkqLJqBcyx6egWp7nE2JOKQNl85CZWQAYuN2FapYk2B83JfiUapa%2BebBxqjhx845FMKAIvdG6J%2Bm5dTCKL%2FgYE5drZv8GjPVh%2FebeqhQXPsP6%2FLuXkMOwyeuBNjs1xVOxHj%2FnMLf16ssGOqUBYPkn9uHhgmGcoyquonvfKWr1GH2VlZpwXGzyGQCJJDHUg21gaWKKmzOacxtgiIlIgYxdqP7ZXIIjzkrF%2FtkkScbxWRMSXleNVC%2Bz8Wu%2B9n2nzs7LZo%2B28kDtBumZJLY8DM77PG1WfDQ4yUlaJ4O4rMYItGwVtiVZteBfym2UoBXo1dfZjnYBaY%2BWBawE8vI2fbJ283wWuxdSHkcDbfHXAep0efHi&X-Amz-Signature=1f20328614d48463ce9438a7c059c7717a71b5e4cf70eac140c4f43fe394306c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D2M3GYF%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH5Hb0mGW2UeNR%2FD8a1vmo0zK6GTDO%2FlIEe3kqTrDYSQIgX%2BEJoXqx%2Fi7Do9%2FIS2ZYd2e7D80%2BquI%2Fc2ExIFB6BJQq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDqrx20hUyV9RZBVyyrcA7A1S04z%2FW%2B64DHVSbaMZWR3bhcufwmeZc8yWZ4jFQOWOdnbRLX0WuNgPUB5jobsn2Fu26oHTaAwTDAJGkUPq9GGPhPfJvkvNyhRbQP5wTQOns7PY3%2BK7oNZ81mr8qTtSzmkqfveZJAHIDd4SItOvzKUeuInX%2BBTBcbx%2FQxcf0E6vvYePZw4Xx3ayipRtFZc0Ilx4YImCX7A18noSMkC%2FKAldd1yLgqOw34aLhZGzGQs3Yq7Ox41mk7o1V12DAWx%2BMR2gB23b6JIxsu%2BrRFNWPPiELh5qoAyoRKx8%2FpEcaKpqUxraMXuMkmkE6UgPkeMJ2F%2F5pMMkLxGl0jQa3slNb7SJK26gNep58ARjcvmQ%2B1A0PWaDW4xw0Y33Z%2B5vIoQRDk5dF5gjcOXR2zYmP5B1Cq3o%2FOuob3oiuUQbzRKBCLPboGLUiyNPASmpsjgsJf3w%2B2SV84Da%2Be3DtC%2FVfSsNTLYkdSRiT6MCLyAGdvjmL6NBCq4eFaIXq5T6dnOHvPCOPPOThdVkpU5ncNjqD7tfp0m7AosLfPHFUKQRfNvRo6jhzKSReBmx0iYNUX%2BrodpSdSybSbQKcH5pVSeWLzprW2vnFAX4z8WgXMnta2viPxisnA8ILrcuiqIQ8haML326ssGOqUBY8SwZP%2FxhRHXHVg4h8jKbCkmUmjinCtPrQHX9oiqq2jScntZpkcJhpn%2FhMgfSjLMXFPePKInbm7Kt5esUp7RsYiUPhOt7wjoUeBl9If1RB9Y%2F3508XlwB0hdtfS1bGEEYJwUMv9SsNSkgGf8gQd4GxGevfaqRkoXL%2FeSLlqx6VOn9c7SqYeB3SNttwwQKqN2kjX1qaM4bmXgMkt9eYgtDwmFSojb&X-Amz-Signature=16695577d40eddf261c241126999b56c35b76e8a22b7ac8f00d0751641ac4715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4PLODQ7%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfuYuSSsJyLnsKA9eQwLs0Jgl6K8Fmwg3M%2B6IWGVRykwIhAJOaqfYi2lNSKo8%2FKtssuSx6shls4QHfjBOyNrxgD0gvKv8DCHsQABoMNjM3NDIzMTgzODA1IgwAbqKWw4osW13F99Eq3AONsYV%2BxiK6rzd1LMj7AhBNLUPCgxbG3J8OxCygZCB21CK%2FNkW3bD3o2CbEzfPeBMPTp2kEks1%2BIr163ceR4sJXQtZxJF94jj8qtAzex8iv50ysLAJnTifHONpzRx7fLDNmVBproXCmM3ZAA8pGzWfEiSDfIcLD5fF9QYn0DFNGbt9RiYtZ3yf0AEWTfIw8LicMFJwhnRMuy5Ab9u7vjdJ0EfuTGy53ZCcD7i4p7Ti4elIy5Vp1RSaOhghORaEtStekEkQHp%2FseFNPcc%2B%2F3F7GFzjzOqlaymskgyvykFIdSzuGI1lGnCrt5l95%2FZBm0MhZS2e7hBcY%2BseVh2n1kCk17j4d92jVIo6zs2beOOEMKp4%2FtaZyShMdoU7iNhiTAIop%2BQOFVAYA%2FglEJRBW6UEOjYuMpJUKVW%2FjXDy5oapJG7tgtIrSKQsd4rt%2B9xEzm7dM1L1Do%2BKXYyLwCbfe%2B5DW4fawuJk5kuNb4pexc3n%2FA3HLfZ%2Bk45GExgWLumMz8cfSDaFtY3HPojxYFvNZhqi0Soazd5R1ZPG2GuXgtOzyaDRg2vVHZbYIiV4sn%2BYhTg4wFbfV283%2FC1lnfat8arbITN1vPoLGoRMqQbXWhf2qRqpt7ZRDWbDzqKbiwCzCu9urLBjqkAdA%2BYT2Jsq6is1TcoTTXUa3%2BNpPf2UslzL6MYhQA%2BuA4MsPT%2FXhlgoAGfzeLOYwIRVYmdWiYXehtJv0aNDlkI61nBBzEhTL786eweW9XLswKC1J6aZTQBP2fRBqYiCjLtvl0%2FjdnO0KNyqlC0a%2FIEYfAkbvWEb05yRjDvw9Vi2qikD3X%2ByXTS%2FEPiHW%2BvfwxddVUWiMRU7pKtXdJSFj8K2TwV2rO&X-Amz-Signature=1a8b1416430eb9f2d4a07917c991f67aaa603da5d88d5bdc9ad5951a1b72f4b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

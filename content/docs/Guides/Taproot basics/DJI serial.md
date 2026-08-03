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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AU33A44%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDtxLerBdWanjlO79muaz7NqcisdHZxhdnY1Bc6yoHVIwIhAIQAslYW22aOznU45wSIKBiq3I2YbhzStY793XAsku%2BdKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHf%2FsfCD9iBmbPna4q3AOAJn8Nkzk8p8QH1MK%2BmeKztTZ3jjrLWtltq69XqfpgSYKvlMlrCQZ8ZyPkX9N076fzArsuSDUyfDmvP8OguSgZ3RxjsVBRXBlFqI%2BXyJ04TwCTfR%2BJHwZmnQaGsPuIRdd8%2FExEysSoXPEBbZIPGwOT0UzzbaJsmaAfyYxXlZQ5CdX4lY0xL7f1bGAs07GB3KSUhuakZkDBSKISkKdGVMFF3YUEC7IifWvwVAOHRohrpsK8VEIcDG4CoKbLAUdTtlO2E9sRgsR6IJs78yIJ%2BuXnrVpIMa%2BLgIwA36PHaVZ1z56C4EYtbJZ70Hby2wEb9VVHJhG%2BUzJTdYIe8%2FQSTBKvHzCoVAE%2BNbFt8i0QivJouAWcZjHrzbK0I8Yi3rwWGPlZLRFghoJhDZKlHSVSAIsGXr70kul8FMlYZmbriD%2BUf5JI6dcJqI4Tn%2F96aS7R2rTglG0%2FxCU3U2pOdYeiMIQK9O%2FULUkkWlWzfqhpo3WbvuAtjsM5VI04gmTcLBVk903YqjRz8brVLmLRVv5PNqFcHt9%2BGaYEKzZ75syVZyG7F7lPLSEwZ7Ab0zNbVpOx7RCgy%2BjbTGJlBUonUs%2B0WDWF%2FO36LwzrIJZLn2a1zC%2BI6hOsfrp3pMxZvWkvejC%2B5L%2FTBjqkAdt51ncH2OwToACC5WJjqxsfLsJgpo1bJZsFafwA3LZ%2B%2BeJyYn1xQ6PlYneTMi5xqml4x8uMlxAxZuPixRlv3al4qlugMR%2B%2FpyJP%2Bkw8g%2BptxhdY8X0DYQ9z15sk2laXDx%2BHzXfmv%2FJIBKWVkDwJD2cr6BbSnvy5EWpQIFZbRIAFTldD138c2uhy6tkhxvihsCZctMIu4Z1AkH0CWBiwwrf9%2BNAE&X-Amz-Signature=7be319347a6ded9f78862798aac2b342d93f7c3ca64d64348c93be66ae7263cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIEL3END%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICQy57eQuIXAgwDrVAzs71BmRfs5%2FH3Hs3M%2BjCEynYOTAiEA9527Nk9eIeJjjxhYuNvsgM1n%2BMGGfBOTRixoEeWOBMgqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFjPNDUUwuLHpDU%2BSrcAxnFMsuc9P9t%2F8U0kVjKNYGUF78Vrfrv%2Fw3HDD5opeXUtHGXWZoEhn05h9MKXe2%2FuWsuT7oOtTAM10Hd29wRTqrColusspIm4R2GbDVaTm4cgUDqQzYO68qb7nrLM74SMxTKWNOqc6hxmrm3IqrMmBRwKeqONQzD4BFoz%2B0%2BtDPs9XpxvubptABn8GKKMPADxQY4kALpxTP8bngBrNfFiV95oketmtjOzGZ%2BnFMW6CMhaIo2oJB8bm18%2F%2BtPACmuchu82bM9y%2FsKUn2g6DusCdbBGMqvfi0A90ASgQ7jrrBQvmoWT759Z6goTg1kWlOHdg%2FgjLogVhzfmxmy0eKTMeQ0T4YPbdpgFjRPgLPr0hpEbX4dEP3YWmt%2FVne7XqH4Bfx%2FHVnRW9QPB53cnkvDjs8tLLYPZz55lKvBu0VmmouxqYhaoHZ0isbgEKKoAss7Ae6nzjrWJ7lD57kEaLcY%2B9nTcZcdr94XdwDfcwFFIQ%2FZ1O7l4Fsyi5nT78qYoAX3dZDu3W7%2Bfu8LTkG0u8h7vMsCriHRQ4U%2BbVQyKSkZ%2FOgXupF0eEKlB4viiK39VZvS%2F8Np57DXUJ5nBEJIr%2B5D%2Bvjc0lgLKW46j9nfR0ZySvOnCnirQOGwVKWyAMwEMKHkv9MGOqUBG1MAm5gqtzkUS5Y01Dxq76kQxgu8EQT7r1MvDJjsbmIrpaBIreshn5guA5qgC4uZNRczCOqsGEzQ%2Fl4BiK743rlKn2%2BEZWNnjKh4ZdLOrgMgQA1BvGZ1An44KRlrhI%2FtGYs4bgUMc%2BXj0jsdnyQQC2GfVGga%2BTr8V6CXiYlc7rb%2BaWqWwBxMVz2TU7x3nf23Cu83SRoFcDL8vFiMtk%2B0JoCa2KcE&X-Amz-Signature=0c571b6ba3bb2a9a6322e3dbc2d106df25f05cb385147445f839739eb5607843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WHWJETL%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDb8EzcIeeSf%2Be4jRKKNWZa1Hqs6R2Ify1TO9509YN2rAIgfIWhm4oNfqEDsNqrplUzIwAutV7YIaOR7h3jgGLtmLMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5LQG3r2%2FDrKRN%2FJSrcA4HQriCL%2FeTt7yr%2FGGlnRGRbDPl8ciQylVGftya9gQRky2lzIFISZraH%2B1UaU1pESaYPJWAZdaVg4dq01nbDMM57Bd7C%2BzXEbmdc6SI3cHo5WFXuRemh6jiRsyvsLw%2FO%2Ff7NnaxvWZ7hp7BcYkNyh2qZNJNOcViud9tvEA1vzgPhJ8DBhP0KM6h7X6Cl6DraSeBnyiHRGo5E83xO6YdnibAEiDoXpgLmpFB06LDZQMi0W%2B1fI7%2B5EZW3FQv6eN7KuoyOEO4BiVV0tdrPckb9jjdqf1c%2B2gEZlM2oRyZE%2FY2Z4aFzeaerczdftgU1epV5dbljU6WikB%2Fv43lA9DwfiUTEe71noQVzjSn2g%2BQp8R1TG4qxBaDxe4Fs5UCSJdBEbILUOgdQ2QxFkj%2B2KDQhLg9HN8eLjIZIZ%2Fyv4B8j2urHxDbgKNwW9rLPhp6xQeK3%2FOoer3W%2FGmegNc0GBFK4t7dtIpJYMwrZfwohPWb5DKKKnd0yusOam7mDVacuU4k5upnMEtD0amXrMRh1hEqgJqYRgiQL3ahArwFOAgLeOwPMxTEG7Ntg6sbrzDJOVVTq%2FMWvwkLiLWPJivNISMvWVvIIGrCWdPmhOZX0CbVdyGxUBckrcjESxHV5OXsfMIjmv9MGOqUBoMSx%2BbRgYxZZ1yclZOrKl8guUxQ19NxsH%2B%2FtU1fAxRbQ%2FbXWdzL0Uc%2BkRdTItrFaYsS8MPXN9R34lzYUgA5NsCiRoIK%2FcZP%2FqXVTgJ9Ko9aMn3GQM1HCKRdAGd%2FawaOBdAqjfUIjg8HUWW8jFvcWkV3IrGqpJvnyxVPJ26pH50n603lGeux3fGqW59OJX7Nv5kP6nMq%2Bconyj0KKcAfWUwC7ARw0&X-Amz-Signature=d2a31c24fdad1fe870b6697061068c9283ad06b31b599cd5106a5c289872adda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S26F75OU%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCICkOt84dfRa2%2FxMXUjrioILEQP5ncChp7ic9AFnS%2FWvPAiBwGbr4ki3dxQAmSBMBM%2F7g%2FYfcW%2BrKRche8cZ7RTslwCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI4NghzbUX8YHhdS%2FKtwDBLUWGdxN%2Ff12lXti5Tb1sMWc2I%2F5PvUDRdwOcEMerHjJeV3UoPR7pJMe7UTv9zZIK55J9i4tIq39mk1lopr6%2FZlL7qcW1%2BkYNBdjgWHNJBaiEm02wPcU7C6hcZL1pzF9zvjnakn61cffhaOdaG6bLQAfiVu4btb%2BMr8hklWLhrs2QpzLX0IdqvS%2Fr8ZBq3dEcpeinNUeCHlOyw939xOZtxhWAL5lu2cJyccpaP7YLg6Yr1cAKLd8Vj%2Bd4oUycj8q36yNKnYvsOPw45%2FR812VROX3OY3rqE9L3FdepUTgsCq9mdNKXfOGb0SQmthtQts3nf5eTJU5ckImeReeVJTyzaVohIwP58ZkhmsROXPsDqiCZFdyhS1bH%2F8RGTvzBXDEL2apVgtjMW94l9Eu%2FvhIZDutbuREhSKnOGskNO6JFmV4ScaIBzwBH6UVwkM7qtSQPFzoR8Ya97wt6CYJVAdbScPyboCRAthwhVw4sJzruAiL%2Bv30E24ZqdZtGUFyn%2BhmjMhEtHLVrk%2Fy1J5MVmA6sugG8qbA23Ga6L9FfQy7i7YmNXaWOMPZ1%2FFgcgPB2gDh%2Ftr96ndVLdqfdPIwDxVhkHz5MEqYBbd7%2BilJEIPp6MQvQeqaQxwV8hnd%2FNswv%2Ba%2F0wY6pgFo2iSzM2MpCyGQWbWtZBSP9MrAWh%2B8IGGD7eze6uBvw4IpA608DgbHYnZFmTWjrnSWsXYrydexpzIGuzFSk6O111bfS%2Fs%2FELwJdLtY7JgRDTvZbbhARI3cWfn4v7wbb0y9gGnRwGa73iF1xd9X3cl8raC%2B91HF%2BIZJME7ZAUZ0AeVJiN6a%2B70PomdOV%2FVTWMwECxgf8exAtXW48fnETfrwQNZrSCn1&X-Amz-Signature=b3cd36aca0b733ec7ac8079b9a3cbdcc3a8c355481b0911f063e5d55f649a116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

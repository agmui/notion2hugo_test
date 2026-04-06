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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HOBQMRG%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGRqKBldT%2F3wA1QZA5vC1HN8c8OVsWlsjnRGR4xgFZTAiBFtOIEGXGTzRwIByDu%2FLtUhtQyxIhfbQVy7scWAdjg2SqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYgqH2pHCqSZekU9EKtwDBBwKhARcuKr2lCPqQ4C8L3ibvrjPZ3WHl1iz7QqmkH%2FMqCODsl4V%2BMD9wurTUpz56TFy3Dj2d0TEcFkFue1q0D73N2JPKj8Ax01%2FfZ3faGlzZctAhJJLDMs141ZEC664u0onlgE0LgJQ8OqGX64TQMjz7N7916gykJVBW6lUG3F3vpRIZ%2BWD7izidtZT9R9RCfb%2Bfrju9ZmUWqFHrojkjAfZHmL7i4VhF5ABaepmmttKO%2BZ6rzum5vapG3jaz3lVTF6F3x1qBqGMIj0WnAJzyDgB6uZKxi0wTwfoLIJP012ybLAS25SNQph7ZQVRoPaIkuocbKOGfUj8etSEWq2BWD84iH3QXvh9zRF7VGMms4VyBs59C0dOsr2c5xMch3sssmNEvyeZITxmYN52tb08ovljewZDo3KFcrumnUGr7uoS4M30uuVGjjR3VGv1S3qFz6qUVFmLkZR4X3gYwrCtGndWTY4LCuN8%2Fisk2z2FYlLxbyRIhbtpT8HTw5Ee72K5S4ALm04h7PpsCP%2BKiZJnYpVJ36Kt7voB67ywR%2FqQ81Kzc0F80CwI9QL8oLyfeAE4tNWpiwH3Q%2Fize4DJryaf%2BPwPZUV2bW3rE0sIQB7AyrkUTg6kwUMAm9ayhu8wz7DMzgY6pgF0lWY%2BYVjLyc3cUGQ8NCMKPkKGaVrSNvtgkw6tCl1Dzt0vs6dRudU4cpHt%2BBgp7Gq%2BWByt6PPFCpdyUCUiIU%2BAwVZ3t6Eyyj7XubtAsbSghNf6IHTgLg0MGEzdvuGdwWFEwfXdM7g169nO40rx38yaJbh0hUEY3XCTfR9NGjEtKoqHjQWT6BSyRcXEB981OXEmItfF0ADEvtwSy5V1TTpwtTRSfESS&X-Amz-Signature=04e9e69e075dc824fad6d7d86206ffd81b10e73b3ace7c3abf5f809043d7fea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B6WREP3%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGO6l7PKgydFTpFRHrKKfBkmCG7RJrkMPoRwldQ6LZSYAiEAsnvlD1lSVmRCwZz1hBeR1S2AvMYPR6GF654BFF1w0E4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHgii3PbUQT2ZxmRircA%2BlvFNWqsvM2EVUIMr2UeI74XxLa4r4zZBUMXxmmeMUpNO0DvyxQMe9Vzqhd0kJzwE8shVgaVm4%2BmnSaeRrows9zarsWANLmD7HIbThob%2BgD8daErOoWYdxYWtU%2FeYS6KwCTOLGZva%2BMMIyD7Myd1ZGL0%2FZfH%2FFqO98FDrMRhQJ8PjywVfxShZlcXbUfP56yUxKHAim87iiWrg7MnBu7Sxy6atIH8LTQCPMn0Ziio9TblYr2O2v4xxFMILsuA1XvHma0UcnRaIEDsxbI63SnWFsxGVp4jzIsIrbIbuVa6gPtMiOeMYrEUjtAgv2%2BQbl73WkW8gCxXbYby81bW8eylec4UmU8bC9C9bf7DYw%2FkjMflFSDKEMTGCNgk%2F8kPyaNW6ZeYph0XmNsFoDM49B9Aj%2Bq8NnpvKJEmSszRYWajWfiG37TwHiyL4g8U1TOINMLf9qpIM7C3seF%2FTZ9eQH6xWUr%2FOV2kT6m%2BvBaM%2Bs2lOg9IBfC2u77lVHuFCCARA56aumO%2Br2LsO%2B9CQxULyJwMojriy51buosNedULnS3LAAAfa4Skrw1zC8kn85BS%2B55IOP3bYG9pLK2Il2OI9dgdUjtmqNX%2FZJ7fPiB8okBWuwBT7e1Y8%2BFbDsXCyMIMPewzM4GOqUB%2FrXQutP%2BKl6rTherRCY%2BzFm3jG0eCzan6PlinAX5QHpR8biqtBDshvoTHs1XjHSD2GeoCYKZ088g1%2BAuu1feX154xIlfitDJBv%2BTYwqLr%2FthnH5Gl8atbtVZVl48%2Fz7qS%2Fzy6UdhZVTSRYvbTVl4IghpeTtBye7%2B%2BpGGUqPO63C3pxPQOxsl5JTdJDyY%2BCMutEGfeUdKeVSaiF1fDlYaDf1m%2Bohm&X-Amz-Signature=b1c12b61e66822e6eded1ceeaf7e80b89de57a57dc7ba9d09a87c1d8f3a34be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIWRABYJ%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCStTw0WCzlCcY6%2BjuUDdhM6U7Sk8Bnlh3QljiXA8ENJgIgOXRoEXYC6xMJDQEaTnOO3JvramrPDsyu4BKCkHt%2BGP4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFltX5%2BCAmCaRPzBSrcAxeypeLtCrVBZpMCUmpa79A%2FO%2FNxBbAjMfAwDxchXsvS1K5CGRE36ysSx%2BQOal6mqAvIufBaN3SwgzsuZDFRM77oxKGpSsyHJpp73dSdl6OCCfOv4bayrfRx0XX8IAnYf9FhDLpkUZ4gXpeznpeK%2ByixD2ee%2Bn3rnrtZ6qvzfJjy59eVeZZ1wtYBp47pdGVvbNoxWVytZhjqd7F%2BtoTHJChOD1WoRYYw3GSgNys3lxhrJmbDprRLtULFL%2FxT%2Fo8a40DAONMqHOZ6tbQjSkqMFWnIi7MZb2CH64b%2B%2B8Ai0tl8S5jV7ulsVf2alfMDYFzSw2PU4J6vcD6B9l1NZ1%2FnHeG8xF28%2Bi8sFnncQLRO9JPsBa%2BPdGS8%2FSKmLPSUMipMovu0JTXADGhMByMkyzvRkyQ3e47Ah3UItmxci9Mr54lRXDCzhRbJdD6d86nMjHM9Kih7hp4EnvD%2FFN%2BXzHUf%2BUshGFgXunJjkCkTPRs%2FhYfLPfLU6lniNvJ1oichIMted%2FcxXvPtWeV1lwjJSLvwBMoEhvUfpOjiAOrZVlY%2FB3AWxjZBsKKLHJresB9fIpoHBkBVjXxlA0ii30YBNGmTDHG0xhEt8EoTsl1gQsoIIuCH%2F5ciy25mKUui%2Fu4IMPWxzM4GOqUBhcGktjz9Wf0eh0IFisVWB9uDEoaT9jexuOqsvNzWWkjrMLIJceSl0L3pWcAfpgZ%2B73SFP14iNSiDNNdfUQIU7hoLcybt84P7WWVi2jNkWgayKyGpUXg9UMAsW798Bo9sESt%2Bna%2FKJOWZSyDp8y3kptahBoCJczQo64PnlNrDcwo%2Bnsve3TYoJCDqrbZwr1gXpamQxeGkF4ZtS1PR1GqNR6rB7z1H&X-Amz-Signature=3211cbb1080b8e6c56029ae20fb029e6a6a0ad2a84b271c496b6a8043a6d7e2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B4SSUVT%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiV20F2KjudaIfXCv6hwMomE3OJ2SAAn99PJ%2Fyx3iGEAIhAOKu7p9p7dC8kBEnQLLF72qNcqIJQTx2eA3Gh%2BZLWAZMKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5D2GYtG6in%2FSqT68q3APUBhbNNvg99A3pc4hlkFgbY8rnJpXRmBfyAgzq0PIYo%2FvffrKtvCyMrHvt0sZNdWd8eyhQcgtpgRJEyQ9j06tfc81iBJSCjbi3qWn%2Bk7xtHDnrNC7mJB6eiD1LHIFO%2F93ShLkc67le0sg0xqvWzmScolXUT03DTNs6FmG8Gx9rB3aVT9hKq7NhCRZ2f%2FzwdkkoKHWhgtwD7UyY9cVDdgCeShFj2uYl5nyONaFdpbFE8CBkgvLpurMtPqJs7pfdRVqfguKbeI3omaJZBjqJmBRCJdrnhgDTSpCWwZoAohU6DYUaGL5Az8fdRzI0mkB%2F3zLcc6zo2RQfMplgaAkBJgAQPRwa3I35eqd0fyAm6In9Y2lD9VjDRf%2FLkWKDlEh%2BIr3eU61tNNovdG0eZA5jFP1NHttAJXe7AH%2B8UksNd29FUFCga5B%2BTdu5FRRBsHwbBu70lsHT4cLlCsnVTjf%2BcqbRBuixgGKmV9npgUYVaa1n2Rw7drAHShLCayonjX29GLqfQEpaeFWsotO3p%2BA%2Bb%2BD3s8rFleIkZpNjWjzKrfZPeNOPs7A52nvBEzUQYX8dVouh5BakWFZ8nRoCmJ5uwkvg2gSmxgeuUz4RnRFfQ%2FG8%2B815Ct9%2BVdggWrhxazDpsMzOBjqkAdE74k6zeQwdre4lns2E8XFYP6xu9csvbahWr4Fq4Ro55X6xcqQbWpyaTWtLj6BzKWQ7%2FvaptXY3QRzviMTwY%2BuoJEckYp%2B8oeVuCz9iyIN7vxanwXlnuI%2FWufUFmI%2BnY2PXwyDVONsJO18Uj%2BqUHOwe7E9eqr6jtngppgEFNKypWMvDHpXVB%2Fp45ibHMKG2%2BL4FQld0NK1eGC%2BZgr6%2BhtiD2mdq&X-Amz-Signature=5572db223218dc6bad27987c604db8bd28fb3c522a86064fdc7b3da0c76d488e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

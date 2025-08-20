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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZFK2BR7%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvIK9XF3omOBtM44FUzagsz7EWZvFuLB0uxjJ8zA8PkAiEA8MpGKnCV7tOUafZJFcMed9spKJwUipM7RLLv1NEtG64qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLwi1SefIDtuhqtQircA%2BnkHY5%2BS2B4EgwIvmkA7csDsXu8EdOTpfs72PDLAxNT8%2FqsaC13ypq4yYmfoKAOIh2%2FHpCYIec%2FcexTRDTfTnuYCQN%2Fi2RiVXI0Io80pFoAv%2BJ4k7h3D5B6sMNLykse7gZbIXlU1P0oD9f43UVNkwLR3c%2Bg9GsYtxP4kyV7gmwJfETym0O9nFLwHe6eVdz08hh8JschCHBWe5T5efoiDv38Wj8Kmy%2BtxsDa2KlcPxAn60iZEzjop18iN0qfmscY5Kn5d2eo0On5Nds2OLj%2BWCIO5FxLZ%2FCdr7lEKfDKfxPFuDwbsStHadiGwi%2BULys1S27OESWL9mDmBPDBDNX3ShvD0CYM00hmTFr2zj4oEWKrYAHX6WhMzay1phqIFhrYS02lWVtpMNdbhwtNBdK1cegjK%2FxEjWrOwT9WNORpVHLwJmos1QhAWldir0F%2FCfsFISce1R1b9w34GJBVXuw5WtyF8gBgKo90DVQrwogjPJEzSu6twOKTjr%2Fhufw7hhT6MP5OPQ%2Fa16i7hBlHmzWVIT6a%2BoJEaAE9QeKv5MtxRbG0cW083DUelb2n3okFSoWiSunh%2FQDV%2BSa5emmgwO9IGZ9Pqzc%2BR7WMgmKcBz3ISGcj%2FpQqEIsITGCCLlyqMJOnlsUGOqUBuB5xXXrO344IH0zBgPH8xxI9Cargfyg7LyPT6BHF%2Fy3mtSPiuxQqNRVN32Kk0NKzTt74Qmq3lG%2FR0XabCDn2kvwIn7XeQzU7ICoWfAonPU55mhAoW0YKQeI8Nm9hVK2018b5oLFVOJ01X8jXtYQaq2vF1wFYixlskIzkw%2Boc1Hm5z4cgJVAe5HuGYf%2FdcRnvlWUFaMcl2zJ03JnEfF4tCpst3fti&X-Amz-Signature=431548feb647075292d855524ff91008fd79ebcee5b0d7865f70887796eebbb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ4GXW7P%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWA3MusmZDeGM1FS0fiovSaLenjWq7tQr868I5YgU%2BvAiAnkuFjK4GhwJA6DdA3vp5HNPeDMFmIQSdkRNF%2FYf4NziqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbDI8nT%2B4vOTgHfWtKtwDQy14uhDmfeqyOQdg4GMixu6kwc1FsnIJbLGWHe%2FEBsKsffdmehCW7nJKOJFCHZFp%2FD7FshRjEu9anjICibMyQZwpMVOvqYHKATznMUwrKoEF9MvOOgocsHPGewgpob62Bs61lkhdp%2F6BM8c5NchH7ZVKnMAN%2Bo18iGkgNTHZ7PGc%2B%2BR%2BlctZc3M%2BW61P4apXY1Cn5VGJhbfs%2BpNqPa7KOdl%2FlKBrBkc9YBnmFLMJa8HdI2sUzpo%2BxHtp3gOH60VbdEWmPk9GOPKA%2FVe9jkrecx2JqELbrYtyUmKncF59cTTyRK6WkZoGXBNoceU8nHhutmF3Z0L0CunMlDa7Ak4TT%2FKSrDxceOcD5XY7EXNwHmQOS2o7%2FTDFo0nh7xiFuZmmQJvCha3p91B2YUuahN2sfV8Rf%2FVxVK56rFL3fDSunQU7iv5EwXsfKrNV59NJjMXLzVCzrRzo3fwjtxIKmYKZb4uSNRtHlTgvgBjAZuUiBH9zi9JdHwgxSdZvInW%2BdKJj3mL06wN%2BsOWGl72ggYYoG0MjKEtkontkzwHpGtHRyUFr%2BvGll3bk99Ny9m%2BhSnU189H6gQlk6QKDUWZECgTi1EP2Tv0uP1SInB%2FozOw3pCwDC0ZtbmxeHQxX%2Fh0wmKaWxQY6pgEkyFvvxTy9rK1FY5U0SXPX22hHeicmF6cQI2HA56iEr0p6hxIjxawtkzWVeCHsvypVU1PZqY4r30U8Mxzlrk1%2F%2BCepFe3lKcqxnvZgotebSK7aDagd2kF73ZgnfCHTA%2B5Rr6MkX0x%2FX1POKVhsIeMTxhG5hyqlZgZ7tem01rJzprdtOz9O5V%2FpV8Lrso8aW5BZ%2BsmagY3JQkyKZk9Sm32LUNgarUNA&X-Amz-Signature=fa563d531b764e8f7a17c610377f8461a05777e5504689ac8c8b8b49c01e5c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TJ6QSB7%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbPHuVPKZA42InKlFW7IRfEeucOoipRZ%2BKI9DE%2F%2F39wQIhALKJ7gvx38Ozip6%2BvjviY9Rt8zkrkz7scAv06CBuWugtKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU2h3h9uSJjilM2R8q3AP869dlfeZV25hMVlYNe17iwr%2F6S3AamLWi49nLipe%2Bf4jmPYrnwMizD%2FkaR7dtRTcMl2KaTA9ccEZ%2F77ZOtkGSDqTUMTH58lf9P2K1I51pHqbQb7XlKiKbbrhJhNhwEZoWcXaA6wxUSFH7qq05FIWzPcpA%2FmKrZDCiuG63qEJGudgp2qJsbXyA76a6ugvhOMSi6pjtFNi3%2FscvfXOYol6S19NPztjxjhOmEPskv1TB03NZM5vMfa2Ce6BvVC8Ary27Ovfu19pvmRNUMk7yjECJAo4kICQfE3Tk%2BDW7wDL2C%2FcL9TXiVkht3NFoZynBxlB700BuqHvacdt5Z7uXC90CRVx5Curaf1uhVUvI8ANHD9SC5mpNPAtJzQBFHgXk7BwNrrjxXrlTQ9gRZvDN7e9welfW9zcXIsxoYdNrsOg58IZ8Mmb0YFT1PZPkKSIPGrtupJroizcSZSoIdwyWFfzx5%2BWyrEei2f5s%2FoOyaJIcvOLHoz8YIWfs3UaILDt2iWl2bXBpOUNuQnWtSqMQOaizxOGX4PeW4O537QYDUi4bYHks0ZAvyd%2BvzE53NlCP82fgGJA3RHlzWW0YzEpzoIfSjTFQZWPzfUWA%2FEZK2KaSKRToxrGzb7HbMxbgPjCep5bFBjqkAfxiiFkUTqo5RUaMtS05zViQMwORsW%2Bbq3x574mnsz%2BxButqrhCNDRpDhXfPH9Fgk6VRYosGhC5%2B%2BKsHtzMlYrsRALSvAEfThkLHCzP25p5EANeQ%2BIw%2Fe3nJkT44qAoDnQXctoif3K7pqF5lC509Nt2%2Bjqeho9pMArREwDZLFPXzCIX0IsqHTpuI54d%2BUWR6omLp8eZE8du4YcEIODId%2FHtO67ws&X-Amz-Signature=95875120b4951dbcaaba1731318c3e9fb8531beac76f8eef8b46f948de0f3921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJAXAWW5%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBr5KYT19vGayNyYQYFa0bGXFcT2rdp4ni8v%2FvDNxn23AiEA3EXWqxh1dnMKOl8UCrpITW9ktBK%2Fh8Vu1BEWsicarmAqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMQqR4Vy3fiyhdQMyrcAychuDrcNmeRZ3ZDKP61B%2BdBtMpzXPmZwwzxbO7ZHJUciK52rUPI7SsdjjlW9NrKZyNuQeGTO92OK%2FOwwfu10MvHEAQSh%2B0kCNIwzH%2BgvxZAyPLShwMO4PF8b9aetonLXbG5TuZ1jW8%2FYL7Csy8WS94ki1RvSj%2B%2BmPurZfY%2FxP2TuerGYW9apYjC4%2Bkh7qPH54q9yTWXp1jDQhPF6%2Fk83j7jDPJKDyq15hxoVAifVGZsif6OGrhKMI%2F%2B3g4ncGC0PdcU6Fcy0Jc7g%2Byjk5CcFlC%2Bwyln8oNPssePdJxq6JFvONHYlk2363T%2BtJTYgxXPjTjIQl6FBh4pwao4REbdkMjQ5xmhRfLLdp4o7glyMIsdK0EJOGeHiGvoUAUwajfBk1CpuZYRG4%2BoONUxUG3y6VNiYCiNWV%2FQe5pXDKraR3TveYdT5xcrpYYSBc%2FP%2FylMWz1tXty30PjAjadlvAa1IG60h5mB4MqFQgDdpuCaBY8Rr1c3Vh%2FE7cEYrl9IVVQf1wa5ozQN1H9x3BEFkBwcKqEcqAJkmws1%2BbPd92%2FBQQEp5DvQHVMtzY4fEqk0UxzGswm3n2%2FGNUz%2FOcy9%2FmxWL9126ZRpLAkxOmQKweyWB4IRUNuKcKhqGEhiZSliMO6mlsUGOqUB%2FjjF3UcmuhvLbuhG9eLQBKOXi9LKifnLuBZWrxjkFMV%2F%2Fp59sNcgC3vfLYqzPbFYwYhTp%2BFAl%2B%2FqgHKXCDeISNljPwMkYOWAaSjM31c2ba0VWR27a2ZRlaPl09oj8oDZOMGnYMrg%2FHZ2aFR9SXnCWFqvGaC6lnCnBSdb20h3f%2B5xPKv5LXEAiqA4Xv1CEXTXEvQJZaSYtspHeQFCVPUL1ckuxBje&X-Amz-Signature=4b7c7626557d8fb5904e8fd3b99b603409ecd60f9434f69208aac1bd2c2dd572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

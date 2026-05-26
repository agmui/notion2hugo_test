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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNYMY5TR%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClybMvinu7IP%2BFqQO4E3iu2KmQvYnvXvNwXQg8qiiCEAIgGau%2BBngT3cz5tPARM9oNTCZO1qTww5tqAzbHCq03wPEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAlQzmdxSxBOaMqSuyrcA80H3EySdasVtOs8%2B8kcizDlHXBn9iMsctrpvRaFU8lbX04luaAhoUph2XKuaGEkLeB%2FGxPfO0RAcd2jvkBcyYIbhBI9bDep41hdg7mzUg5J8ayjVcplDxaILm7Hoy7d0F7nFKfzX%2FdZynPzpsQ9khmAU3ThbQao%2Bq362vnwcUm3UstVXzUXQpc2SsrhlG9R7mehANJGC9BBNY0%2BpVB0Wh2pG%2BExODBMJkGkuwQXEI%2BZ%2BCFC%2F4bGBUnVZpsw4dSrJoNEYF%2BF2tAeJeIOJ9Zx48ewJMTZITuL1r7Pc3OOG8VgOVHmVeZHdhQVlNSzPTZqjLBfXVx5YlIt3GTAjIGzDdCHav6Y76K1E6WhH7%2BBjNbRU%2Bfsr2jG772JNrR2pvNUSuh6YTnTKh7Y2cukLIsmj6uLgldcZbsY7WKLOtctXBF42iHVWZv1FHNXcmb0akWw1KdtT2R38gPGpBHYTJD6JLRP7y2Ys8AukRsiQW3TYN3AScMws9DHNZuZX%2FLc4suPI6oO1m8UjPVF1%2FmyR%2FVuy1fqliYBPoWiQY3YqP%2BmGcqipY2zLKmfDovyID5j4B0SfQrlh5cQ87FNPKKCj6Q2gfkT%2BzTKV5TmVbXmDB3N8zgwdKmzXwJO69fmdAlJMK%2F609AGOqUB3jGDAhWMNVl8J2BPziWwmmA9FFWNJQF%2BGUVm%2B9NgNmXSaMEdEANtLB2RkcmXgUgQE1haKtzeZ2DiV0VkXzpMEEyQbE4DAyiOw3%2BDNinn5pMMjSMqFKjbzhMzlD2Y%2F1hSyoU9rEn8dKTVu7xgk1pfqRRZoxccaKWDx5Y4NG8QJ57k8MHu01rFz1hzqkhAbzuGpaMyqmX24JcXzo15kFDx5BAWqt9T&X-Amz-Signature=a42b5ca92cf28bd0a6adc2c5ac20b84a054a7d12e5bcfa32f69eea8f5dec03f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OSW6TK6%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK9mVk999rfat5z93Mh1JnTdMSDO%2FHIgald58pzUJn2AIhANYTHOXQuou40div2m3l0RntSkm%2FQRPVDK37kT1tue7gKv8DCHMQABoMNjM3NDIzMTgzODA1Igz3S756g70xPz1%2B2TQq3AO8%2BxQaVdkpt7wUqI%2B5K5I4xj5Kpjen%2FZ2zXsl%2FhFrUHbokNKfY5rhCtXMTpa5zsSMMJX8GrsMVtYSDj6X6FWmFFRwH2ixkg6XVmxLoBIPbiGTY%2BMJg%2BLm6yExKq0WBR2mPetibR07fIDlf5PI%2F9dhOLtaf1oTl5e9AZygbO0yB91AI8FWvsvtPAVnDe4T0S6FyFspYKwav55i64WKNkV%2FqqH1Ba32iBNmxlf7QulnTVhWEkFsSkS%2F7qCVFU413usFlvCpNFVH6gr2SuKJjW9tx6XVCFUauLpio6xZ3a4RnlNx9sLiH6LQQZaKZUeFff25VIIVGpmq7Iu%2F%2F7Qostpey9XwRFKJdF4PfNuw2DIiPGXlVw0m2UK5n40mcBHVjPbFtt6HZBihVR6KpbZboFXeDggF%2FLSJJINxPJlUkX%2BJ1JobzAb8uQtRCOH%2FGDriHVNU1U1nxOstpD3hycpErEb19Bs1WVppFX4v6S4EuK1cUykdriHShWQuewLkFMYkOad%2BfZbJaEx%2FyPF6At6hO9SQ8hrc6SZ3i8SRH%2FBGnh%2Bs6fnBPpa0QtIwYHrgHCbe1UqY%2F7hyLjk4kYtpGl%2FuCS08vFeKMr635qnq%2BU2WCV5qUc2WElD2F%2FucmvPqhejC0%2BNPQBjqkAWiniaIRLp%2FYifHQtle%2FaCJxSOwPtlIlR0lBX0JBFPOzfvBgefDIwH2dltRzDaJy4h2b8ZGBY44S4XN7euLFW3NtqGaKtQ4cDsAR0YjQ%2Bp9GI%2BLbfNYvEJAehwb%2FMySGL5wnQwqwKNLVmxk3NXWVfrAzriRIin0CAxLalvo3%2B5UcQr7mJZxSbuHgtYDmP94ckTmmuCk7LT0dvdtVJ8y1P%2F48Iegu&X-Amz-Signature=39e2231cfe25791513c814eddaa367d57853debe9a2eb1b5514470177a1b0d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA4Y3TNR%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZ0s08Jf%2FovxVyGr7qpp6%2BW1B%2FCmSrUGxiKyQ04d8hLAiEA3WbNAhEHVWw0DekjaHo0UrRgaLBjnjopCsr2Anxuopwq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDEV0zc9pBc2EPmmC7CrcA1dYTY50f02uzPtXLCK6uDmEbs695iC7QNl9zblnF6YeaP2MpymZMQhgs5FstPdobBUYJl%2BwWV%2FagvgmwjN1az3P8qSTLmkwkMMSXFHuc%2FZdbow83DRceutRXU8QZYatml8WvsgB7Cqd29MOoWN1GnSTkxB6anK7w5hLvH53ZUZqIPcUQTxr47NvLYnZO0bL8bARSBy3hZk%2BiwH3ZJAlJb2hRCT%2BTYOw9Wc8UmAE9HEHHxEQW68W5a%2BxuS0mxAX0%2FqB%2FlEpW2aWKf2bfNuz1GgS%2FHaf6sGYPOpjK190niXMfqsL37O53D%2Bn8c%2BJYwuNjW2B0nIoeGiidySJZ44tUKNbOxhexv8i%2F9pP0m%2BTRKkx4bqmsRswmcd4LSAcF%2BL6nAiHCNCaeLMgOaTOazkJEQXhHbJZ412Hz%2BLmoq4hTkcwsOQ5FMPS9fDCjuJzVDsiy5UHQF4dl42sOzkL%2FxONWDirryh1CGQZAWaNShR%2FFJpT9PtbK2dXKfzNL24g5RADnP1yZIO%2BZT9vR5KFV4jaE4FheXWb4mg15kg7Ls7xYSoidHlrAC4pyoJo8Jixm8wqXCMTVFkO0F6aXY8W6etr%2F%2B57LMadMeE7dfCwr3zgx1u4G02KHNSMGZo8SXmAhMLf409AGOqUBPFPSypyOkFKmJ3%2FoaFUEnrZnVroK92FuGN%2FtzFf9f9CD9MfjBIM26S7pUtctIjTodeVHzeoVzsVGjTeKgmWJN8BVIvEFeX5GhelVQQxg6%2FOFl1MoMrQPhNLS1tyou04jfj5D7tP%2Fe2KXxS%2F7GKoZV4drm39MXBxGuycw%2BwCByEs8zEA9HPHMZxrTSnQjcIZvfOMl13HBSGTyMUP%2FJ07V6X6o%2B7gl&X-Amz-Signature=2bff444deb0dc1785bdb9288ba0a6b51687621d55d4b8d7c9a5c62229442c1b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDSRZFOS%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrmg0JEs5%2B3cSU9mmlzuRpqmY%2FKubu7ea3jMpM4qxPCwIhALuzNmG9rVC2T4QVrA8dkvSzaOpIdqMavPl9ek7t%2BWaVKv8DCHMQABoMNjM3NDIzMTgzODA1IgyqCXGXsZ%2Bb81tio4Eq3AMX7JxlBFyRaGRP2xa4s0D21VvLdsq7OyrGH9ikoNieTBPXkqSrPGZlnwdMAGnGvfVtxrBhB3rGmC1MmXKzqinmdCKSwLlczaWtHUtwyJnokprpltKC3oll2mVVJvAlT9CiXWwhoNQPxZvZpzISmaWQ5biuBDHns0C675suTV9MkMEl6O3tyLBbIedOFc7vJkoTL5f%2FFULoG%2F4WJSpXzALxYcbxjdXzpPual2nx0jkOFagfbrcP%2BYjsNvZ75Hsaf9Ecbz0%2BJKgbNJsH8h1k1UFe9vsjvmN1Hisl5QTdkHThvTlhv8nKdp1HEGdNg1i6ZCMc8jR9kMDkV9aj97vqttxmbFv86TF4XmYm8VrnbV1i7gFiUFAPVa4RjlXGKivaO5Ro44mxmqcy%2FRpLaEYDSxhd5kEjIp2eK2JiRoE29ADKdhpWe0cVFL1gwTjy3kEEtz4FAmtro7gxXxcjWI505sZXGGPDI8bx7scbC8pnciU%2BDrZfkCjp3RR1yLJHiy0AUjlijlt2CfeXwgz5isItoGkN2fg3Kz3uwiUIdCWtUHchl5aQNGEAewt66zP6EyJJXXXh9Ff2FpeW4CV3HUPaZQ9OM%2BRd5YxgdZHFJoR7YOM0oBINoTNL9ZV8mwpS9DCz99PQBjqkAYHzYW9CQuQi2pGEzVTTutoOsqe%2FrkldNm%2FJRtqBqGtabo5vceBV5Pf7wM1KvNxbIOuJQPEF5akxrdG6hBhliBnpYFBFDe5i%2BJmbCHpeDl2bKILExD3kZPJIF780pQ1V6WrQMECNDVwxMlpnulga8Sfa2zcjrNGXizuH0xYrnm07IXlowA3wtofvWkCGmvvMZP%2Fo6eeed78kJU4htaBfstt%2FjdS8&X-Amz-Signature=e95d11bb2c03f03b07ef6b8c99dab757fd9f2f9b8c8e1abf4b03795b0699c94e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

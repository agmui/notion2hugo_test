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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDAN6VON%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHXSZ1piaCP7DhJcwrWLadxZCw2yQRA%2BFT65aX29k65TAiEAmX4oLqGuHLq3MC%2BxI8hNgngru%2BepMgqUaJSDk4%2FMUrMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYrpql70ic1EVhmLCrcA8D9rfQKHLuGD8MREyGX0WwvuqnxQ7XBq%2B3RlNh9SYyO5HlvG1fzvhjE6Y3BMEIw6hCTqp6taHoviQzqBcbPtj06rxax2Qr4LPXPTLsI7DQv93aRiCqpCqt0AIL6nQDQZ6lBfHXTLyHMOrcDmK2TvjDL%2FPOylKClSC%2B7NibvL9Wa5wYq6VtmeDqwkrex2MyYVAeFDI%2F2sU3C%2BADORyiJK8PdjDgK2L5CLAiPXIynOWXchi%2FqSwJ9lDOoczMP2mAJEpdanb58S6XK8ApQPkWZocKx1yUPcgKKRuHpGwmSz1vbrGCvqg85I%2FnILGimQaD6tMo0PaGV%2BtzShBZjmBcgV%2BvlxDUmhDDOtlIOhrI72bJ9uOnvKMj5K2TRf3aAZlEBPWFYv0q%2BtzM1IB5%2BalLf%2BjM0%2BBodvaIDzlsuqmqy8lmnyMCTKpKjqRKBQRsvutCm7xiMHefbDJU9Yiu6nQS7tcN9TgrDKUw%2BcpR4MGgKKi%2F55KfZaKElQ2UvHoAu1h2nMH3ZgHl6cwAcw9GPGFV%2Fajlp5mrNlO%2F%2BTYDbip2cgrJK4pnB7HYc8cL2Y6SMftp32%2B2rqY0eRhN9KONfo%2FRQ7196v14uYvP5hDexW4KaQW%2FUiQhWtPzyK5Swx18bMLDricUGOqUBVhcHALLOKx6b%2BMRXiEQ6UyNDok19zMEc7aUhONpxgmQ%2FhRVYL6C%2B4riKXUfcd4YwktMTFNjREuYAKBGImUOK6kAxhBp2xQdneXe1F0lGdyidWfkOuP4hP9SarMKxlL9%2BjLwDWw05IEV5l%2B3%2B%2BndbeM7pC9mQBxhb2D0%2Ft8wYCY4Jc%2Fv7Gy8gWpGdweQ2t1nPI35fXLxlQrO58tE7vJhD3w5tbzuK&X-Amz-Signature=082b389a09b3fe76dd9287833c604cf62b533162c7882ac98be5b6caa91f421b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTEHKHAA%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQD8C7zOArFbYt79Srt0YVNIPRLDBxEblNZi%2BsL85xs6bgIgE2pjhNER6b%2BcPvBwD800WFxZi07a%2B0bG48DI2lKFrZwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUy2doVegtWLsNVOircA0KStdgo192GfZSS5Obn7t%2FVe2P5UzpF6YFFly5meR0TpOnGCUMGQrFUhiKxYF8BXe9QvGKJaBzDuKM%2BPo1EvjPosMt5d3iLfgUBjxKaZFNeJvhMBasEzpG2NvBkDBDuNKQitgg8u1JXVwvWjRLKkO6TD3fdGsRM1qcHFeP9eg6kPhnUmhxBdprUeDVmcMDoC5zjJO8%2Bo0UKQLLkfyf2%2BuPtar%2Bd821E7a9R2vDsJn%2BQfKYaozVKTTGLMB9GF6S10h2PkLg5gbmranRLJfg1gSXA%2FmcPE9%2BYPDkTFa%2BMa4rqgfFxjWgZlpxu%2B1uVmm%2BqacH33n9fE7NOY3%2BNspDXDifZS0rzpB6nrE7FPvuYrznSDzU1aPSR3z1NFxmSE%2BvO2MHN1UrE0b54fK2YGHm1i9QJWjO3y1WKkhZByds46IDHgI9r6AqoaPshG045Egus%2B5xXjk1Kr6RRlZwzXnW42aXTBwW4%2BRezr%2BE682bafN4H7y%2FP5tc%2F6RKlBdubi4ZZPNqeWl3Q7mR8xcEl9ELIU8fWE6bH8A1ttVuCpDl3O6sgEss7TU5ZVOyjLi6fJsyE%2BExZ7J569H6Lphsmsvu6DE3necI%2B0Pvus0eXsTiCKJzAO%2FW7BACmVqbBZcALMOHricUGOqUBCLQa2T81yms9ZR%2BBUhGlRAdeVBEVtd8U0901XXcFwPBdj07aa%2BwDxOWntVVGtNZq6EgwjkyqJALx34T%2FsoMFhby1XnpFKMrEiJ3gT%2FjjfMcKWz1AOGwgAKVnnYwDXdlgP6Rzmx69TBN%2FYCUi939enodi16DSw6vZc%2Bs2TxbD1%2BKtiPydrPkeT1U5LbjqRbu4c3Xub%2FrrTfXT0t1RICQyBaU80VSb&X-Amz-Signature=19cdfe75b31a5cb531b57dc44d95eecd4278105732420d7c042fae85e4e720a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623ETLGXG%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICfGzpE2ZCGg3JXH6DfPHQUHcs5zHfhyMZwIqmhGZvMkAiEA7AK9rw2IZR%2B%2ByKoqJLVXx4wGsP5lWNfJ7N9XqGVn4hMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Bj17m%2FDoShh5yXkCrcA6g5kY4BtHd%2Br2mRzMTWHV5L%2BEC8qBg18DeehCk7EO1AeoVftWcLaQM8zNln0BN2nCSpKtVR3AKKVtueTqAlOP5nwXAuoyrnqerClmHIXVknUFlBc7sMvigK1TQrXhDMVElYGTlbSf%2BVxgbwXYzB1Y1DACHCYiyZAOYe5bl4ZAXbZPITwRJ1454kyomANco4zzIdcsqkG9rbcF99cYzfwev0J3BgkUUFHHMdhSt06xS%2FVyj62Xa6dLFSvw0pKwpRC5pvjeBck1B7kJvTPoRwopclUyYeZu3GHXX6X024o7k7PH8MjxvArvbkbYDZdiiNT5NeqRCsmpocWxMYLCtt3G5TOmpaZusSikooJ9p5dwYu17VwOSYJcK36p69fvQ0Cjw1J9k4qS3JXW%2FYh%2FdcbyIwpLekiBYSOPbzj0pyqAgrdCV6FNisLs2r2ImkmqdcywWILlz1tiOkg9qu6d%2F7JG6AjJueJEEfn35uo4is88M8VYSdpyyn55rQcCGCRQW9ZfE4DwXSlnxpp0PipZsyVEHhAwacCUgsF8rfGhB9GyPGKwQayJUgHQRxXMun9gamUXAXqUJz67hPPZXFGwlhjNwXHpThKt8fR3m87qmx3JzB6jdWj9Kg%2BVPzLIm88MInricUGOqUBeaioGg3JtIQEPFYXWq8CCkXnHRe844dB8zdcfD12xz1x%2Bc9rrZwqo8ttUF2H8H16Hs1vPT0EGPSAAoUbxx%2BgstEgMODsXH7SsRhPSByKRGML57LoCQhjwJ7pOIZqd%2Fkxxl5hZBZPURiuqCMp5VB5vse0I1%2BMMFo1T4GYF8hc3behRSIL%2Bw1KdJoARm%2Fw5eSBcTzRccRg0cvt5Qehq6EdqCD%2FwdWG&X-Amz-Signature=a27579bbc6a6fff9c075677ce2c8f883d3ce5383be66222ec0a06e8107a66901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NUPA2LE%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGpxFsMyVwHtdUhmBDepC%2FTz3ENFv%2BPdzLGke2DkX7b8AiASkJFYdND7mIzTOOMCxeWpLZgkulg1l10gaXsdwCNrYSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUIvgPRimpzdKTH3CKtwDVYoWa035j%2FDsznvv9arvyKnKiW7TN%2B3yxGCquDYnFMYzdA67d8q%2F5XxfFC4kAH6ayZ7HPRF5OEY7gViFbiGroQ5sT7vbVAUFX22StIHkdUKf%2BNWTtzj1p8gIV%2F3TSfCrTEbh7HRJaXrBFOxl1JBOKOiWUic9eGtkfylESe8W4T%2FZkjAC83TymSMXKKoHLIc%2FwL%2BL9ZNUa5U%2BXQMlBxj6tliDvGpqI7xIXAiTEMHVr2E1akV9CzUZpTpqdroBDwjoU%2FQUPd1qU88MMTfoH%2FgsQRXlpgriMqtoQSsplm%2FblSPmrVLwZxuiP11AuEd2qFg1lejE0LVUTqmGkeS3Vhxy9H8WMrGFSZT%2Bm%2FyTOZzmqS9FaQl13L6k796E1LiA5rtMe6W98WDNo5qes2kppClxG%2BvLK%2F5AcOsEJIpL77NYl7HenHjpqDmWNzQ2VXLLDSYAc8mgxeuktXwMv5i00NgHoFQlE7uqwwH12uPbbN%2Fr0wYm4PqoioRunQalMhoRjaWOsbk9H%2B93B2lQQ3fOAGzo%2B8osUwSx%2F9mzcnBy6dC2kJAkHroDwPDZQUWbOeejsZVb5m%2F85mB7GlGV0eZWtOsN%2FnlHZLN7ySwt0cQi72NL3izzQykDt8eQGUQzvvYws%2BuJxQY6pgH2mKxw3lnIJyIfxcS2XAVO5iTpUhPxXtmIWPxrfrc0StBLOmD2iiCJxGwye9t1RIV842midk2mFqDGSXkY0ckFp1grB1MU3iZzkz%2BB9Wq4hoDjiQy7sVAnuTDC5aV8%2BasyW04oRM8IfXkbrb6WUZ71k%2FLrjUNxwXRBh4eeFmuK5O3V3uclSeIGdBZyjP6UZ1qMNNXxa1h9NdbN6IiCTrKRFoQcbWib&X-Amz-Signature=2c9a273cde5ccfbfd7cb711170873f150659ced930d51dbccfb1ae63e5af781a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

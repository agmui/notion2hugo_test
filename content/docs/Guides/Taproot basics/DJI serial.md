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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJUARXO%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIAUNRfH88WpTZoB8uT1jnDAgnJn12Cpi3NeyZ4Im%2F5nsAiAIT378CUySE7zDaMaZ%2Fsh6MZQQQ4hDtxFfWmzFd0ArKCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7TODV05jxgS6K6SjKtwDqHPqWzY0AaOlGQSlyk%2FsJoRcPr9E7SioHv0SPmrtpOSslJswiVDnCGfeq8P8JAjE%2B1AHZvxaqNuviuiYsk0mIMVvZcFxfPL2orEFbCirygawdewgUl%2FCuOKBgAewjCH2CZQrKKt%2BVxWd3l9lo0YkChg1Pmdm1ccBmtj4yIOiu4bHQHtlsdUM0ZKawA%2BSBv3zFrB1e18xJalkQ3UdnTPQ9qDPhf6rVCo2JGbBRLCZuKMbwrPEQWJZn1F0x6nC00a5wAjGfa3SAEgYUB9SipwnsiCXCX3ty%2BnPHSaLBRM4IO2aAorr%2F5RVTO5umCLqlDngYYeszhVph9lrcHQXfptmQu44pEd4iR6x5fudIHJTCNVAtWmyRQsvsioBAZdDC2CDnPDAvtOmyaSzPhVTDf8JuM82LKpiV7ImYF9E%2F2cstGpG08kbr9MT2xDQozvrQZ9SprEV%2FEDXBL59kbNBwFVvdet4DrI7RL0T0W7bniRPD3qS7OuV0PIbATX9MK73V1PqFDp7aIOvbdhIlMS91alkCNyNoUW0bH68GN0QoZNNzHjPVQk8mPCkwFFX%2BJxt3hDH4y8BUt1TBHl7qBMLcqHZA7V%2FqRWesvs0L2L73ZQSa5QdrpejHa4PhqnAor4w8PWKyAY6pgEylivVkITLB7y4CtKC%2Fq7niWFm9C6Oxp65AsyIqpIsUA5pjOQexIvOxZdMlELwrnB53kZ6nQQ8UAvmZFavDwDdZThLCMiqQiyQWB6mzcmQwOfxI8zhy%2BUGD84VWSaHdjFQ0ykpBzl0m2iOlSp64f2I7SF1wrKiZNcq0%2BKSZezCL4v2KWgRyND6%2FJ7D%2F0WRkWSRx%2BDctwo4XdYM1tZHRu5Ene6fLm3n&X-Amz-Signature=d5bf519aec568bd4da5d79376a44e89a76d95087ef118f30fec9fe536b272cb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK6WMIGJ%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIHrZOlYy3zLDNm7NxNYVo1KJCr%2FKIPrf07ydZQ9ZPAD%2FAiAvWeWYPI3zxyOkNvJXkreGg6s7lpQgKNVML2%2FhkwV6GSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BMsRinasiCI44FrtKtwDeIDHg6LL6C8eVWREa1OB%2B5aVQKfQ1PtIeSvwL4X6fcFs02lIEHp4ww%2B0W%2Fw%2BZuJn6GPMHX6hvSFZqpgiaqKtALwA%2FNBBHZ7uomuDC27xVO%2Fb11SV8WuORUEu9NGCarwfPZYXTQv80fOtMYV05yrvfRsCgUppmsWEQoiRGM%2BxrdLRyNgOP6go2ZeRTwP%2BBm8%2F2YGEEeuCQzDGKh0cd3pQvonvfxwV3PKti%2B%2BiR86AMSZlxXaFmFMvbbQGftm5g1kIqPlgV6hD72H77xDUuMRf5JK6E%2FUg%2FZg2znyTlVHUkooNd48w6f5O1NKF1RqyCu4OsFPclwXXXK0qDLt3Y%2FzwQfqBvAcSi2TawRrAky8omKPdjV7daeyaO1mu9LVSMQatqapftYK3mZGFD25YKmOQ0qqjh4OvUrp73z5bQhuw7794Oly29GaQY25l%2Bh1MN3bwQPdlnH338iOSgtPoyhooy4zwmuIsKnNKOe7efz9udIEzkacXmqxK%2BT6kGfTyFmaISqY8Sx5%2FWCOZznRbpZ76luaK%2BXez9tnkSg%2B3SyaRcrxf0%2F3vprYAIB6a6tymvxwNLNYhBXgxo6TdYBq1VJngj0oj4wD7qaS3JfSDg2%2FA8kz73InXsnQnmNuvXF4wl%2FaKyAY6pgE28Ltk1PUJv6Y07bRJ0%2FHUxVhdnL%2FhSlAr4ZmJpwNTaKqHPNWXeApU0Pt9UR5n3DQhFG1CYvnRpnRNOOP19%2FNTVLdtN%2FCWxNoCxiPm%2FHlTZyedVhP%2BTnXvYo9wkPmaD5lrQAkxuDPbRm8oW%2FKGaQTkXm8i2CCptqB7h9SRlJqdvD7RMj6LZfNFO0pF3JZNkNXk0GRJMkU1Usv4VB%2FvOm9oL%2BGvGsq%2B&X-Amz-Signature=b89497a68d76fe8339609f1a369373ad6456e52e89d73a9577cbd21d97123e2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH6SNIF6%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T013953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIB9YQXc5gHJV9y6A36E0ZrTYIFTb509CC6FB1fbnbncrAiEAwdja6nthdSHT2O9g1aLIY8RT2%2FZ6N7cl0zIiBuZmFt4qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMK2dkSmi7LU7vDQwyrcA7f10Kze7H01loSGqe4x%2BIQE8dsgX6gZqTGbZ%2FhpD27Av0R%2BGI5ds5YolR4gUuhRQTiFoRWQkwPjotvDU55JH9bgWYYWzDRsgZIyD1twmryf%2BA4B7qvwE0ECBTlzfe51CP21Jceo6r0aVx6y76WDbxn2SOx%2BkNpu%2F6ur5gCXwFRzuBGM62260D%2FL1TcF5p0OUV4051R8C4Z1W05sLnIRrtBgUE8VRFJrCVbP9dVJRDSZkhzqmdc6mgK3eT%2BsdhSPKuY%2FmkyOT4eiwm%2FvuNlvncJ%2FOrM02z7o2SRAmcEPiuXUJq57IyuDUrAxO%2B0YaJOjkcdFaaXkIXUo0E7FimmxzuLS7BDhMTou%2FUZvbsH%2BzpRhRQlJuU1yyzfeN95WRvO%2FAoqfHkUxI06%2FXjBMZ0OcnyUcLR27%2FvELMO8tAX4VezVmPAaaXa4o3pcXPLVyJfeIVkp%2BM7rDtEynT%2FysG185tm5yl0%2F6PiSqokWJlQuqnYLpXjJzTGfqC1nFAUmqWX3oU8K9vr6LxbC%2FgSCfO%2FB3V5tmdE2P5H3B1Txu8ugHr5o1Fz4ukh0I%2BMpwBYIhK5Z2jANJWcjj4cUD%2FzkBT6MFSvb%2FMA0lPHHGIE7Hrzjk34HB%2FefuAfgIdBF25tZSMLv2isgGOqUBY%2BSgarKk9tDBAJXAaovsu0Qwn%2B8Fba3F%2Bc7rCOB%2B2RlmkVjwvYCdQebotEk9UGSD3%2FdF5jeI%2BXI42Z0Ca43cL5L8DA9DodRkiItTr%2FTjBeMnJVWfaYnkqVPYfbnsWiXYwV0KVUhE3UFSo2vRgVCfwY1V5AYUkfjNY3xifOF18kWMMez1uvJY59EWI%2Bsxmdi4%2BP71iatgFOnz9QMtomnDEVjB8aTj&X-Amz-Signature=68a587926c53ad24b72b1018cff56241bff1cda9f9e3450af274a6bc602856f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRFGG3SX%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCYtgvz0yBXVS3sYXNw7NuOpDgOquM6IrCudXoyFRyO%2BwIhALwKhJxyyu9J0IF2ai5JaRGgX6fZWYM7MHmLcrh557WBKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx75DPAYLC%2Fml6UFloq3APmuDzcN2XLh9%2BqqklskHIylS6R9WD2X9YhZk9t8iSscAlwNu12I4Oo7Za%2B0KPEp1ZHDNG3V2%2FhU%2BRyR%2B5BZoTTnIKP%2B%2BNh2gPDh%2F3rXQaBEao536Sf4hNY8wXEDOnGMKQ4FifJm7y9LzkSvTxlF8mHLgbtmlyzO7QUzdi5vaG%2Fx8meZ2j8jBHzWfCtOTr9OVQYOE3cPxvmYx%2FRI%2FkQeonC7qNhkG%2Bff%2FtnWNqtt7pgUcTKGgV7qoJ5Yorx7xFE%2FXIyJD%2F02RZI50tlW9LqLTueT5E78RR2A5%2B5PWTMgkVCwVZo8n60cftfK1T4qu6hsw5TgFIrJr%2BK2F0fMvwNKRXQUn6J238NxIMMkPKlG51pfg3wk6gyNJbqMtnguXe4YnUn20ANeOU2Fc3JYn01ByKnmFMFNr5m1WUiOIn7Kcx5l1dZzmDWwm%2FPPFh0gzrOf9N8AWdb3T1C9Ihgsz4gOf1OnyM9ktMVzKSs8AShLo%2BVf6Pqd03GZ0FCuwcLiIdO0L7w4hTxwZNciQ8WRMo%2BjbhLXljzt3kBYGJWw8kEshz5uvjGp0upzfSF5cplJWTAIzPkBoN1ud%2Feoirl%2Bfw%2F0VJeWPQSrC%2F%2Bz5UGjWMKkGVSgYX8%2Fio5QqJ%2BCv8DTjDy9YrIBjqkAT8WTjTEQMn%2Fg3hgIWRWxlVa3CXhqRaZho95VXuf35C0sqGXL%2Fr3gjg%2F6o30%2Bjb0VEOPLEFW0Tt63HUOYJ3ZUOFPqumh0AB9%2FdbS1y34fxE2Rf25QHg9xsfY5TaHRfroCYckItOMIZEcRi2ali4U7LNHz8tSHE6T6t2BaqddjwF%2B1fBAV8aGfqTbds9SDnrTke7jUpm2a4uv%2F05zzfmlK%2FZWqwqw&X-Amz-Signature=254d532ee1e853276e087ed33b47c90ab0d76d05ed212ddfdcf4b0af6984f854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

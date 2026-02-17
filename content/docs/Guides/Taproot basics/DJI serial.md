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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL3SDV6L%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIBcWTBP2gZ7Ouj9UbsPnAGaHJv0qvJb2bcFfA0rpfdinAiEAtku2a4bfEXKcrrFS4R3aeCBftqDuYYRg3mMDovQhY1gq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDI9w77Ddlde93UQtSrcA0cuNU%2FNq%2BFD7YjiQeZ97c0GDxg6DwGpqoQgBuL67hT2nQ0kq2KCLNDnL2lh8QEURNoV0SF95iDxhUPtl9mRVNP998XczukCqYPaG6Hd1eLzvHXdifbmjH1boIU7uUOJSWu60j24cPg9WLd0V3fDoywOrYvY74Ucizrcc0wHzwHBR1p2YEI9ot8JRX9UKqmw0dd2A9jtfOq3MaBC9K1TzsN%2BLuuNdapazDm6i0JCiqBgAusWzxRwAsGYQ6LbyUYZ3T2wjmqgrriE5rbkyeNckSfMoE5OXlRrD1NFe83AoeA3OVXP0tAR2XNNxC5KGpNZml6hKgEGuCDvDXY8KuObZmcYbdzyGyflamlgCVoaYJcoKEasOtTPGcRgmWfmO7ZaiNzieAeY3CuCILEYzWg2cnvZnCVRmHekqd8uCwvXgZj1uXAJ0zfejV41fp3XNlvU08vazvlMpZ34oa28nfCYA%2B1BwW%2B9xSVPAr%2BinZp9F6vFspFxhGg4IkUUBSH7Kot%2FtdodcDAhCD6Y55cFITvvTTUpl%2FOF2C7axtte0Pejfa8YuC0i5CYlzCyYF88uwI%2FQtQ0%2BQIjjOyX9e07cQfVcKEcH1eIdZT9cJA5OM9COwVPJUwy5NUlG3vFUv0DwMMCYz8wGOqUBxxTYI9dvHz5VdOnK45kRyr3HBnVY%2BCP9S2HH4rTSDl184uEJuh8bB3U8DsmIraPL3W82a%2BKLcTffqZizv2%2FECFSrMeKf0f2goKbAcWvox%2By6J4sJGFYqypzdm1MyB5c83eJt9fUL2ypw9ewuPdCRWbBNKpMHgPc70XMwJj%2FwpYOUzqNdu%2B0YCD1%2FsanIc%2BugIIYj5yVORJFZOen64XxASGuAuNSR&X-Amz-Signature=3d08c5c69071e1fffa70d3733519fb58693a0760a48cec8a14f14cdde0b8d340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE35VDDY%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDHXahrG1zKZKr%2BrDHYcuJtOoaQh62WmT6LvZpDyZwpAQIgfNgKv3Ns30H8GaG5hQZvabYJ6Lq2m1HmbE24bMve3ysq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLq7nESYhEgC%2BTlLEircA4pZ6Cmf6GrIPpJRSnqU8pWIh0G0LBeXYLqIw5Qpr71kcrA23Hw10QrqZSKR%2BMHPM8RfJ3up4A%2BT%2BvP0xM%2Bs5O8z7VucoEW8KjHMAmeBnNYBH%2FPUIbm8thhocKZH3%2FueH6FsweSHwt3RwEriSqubEwU0TBPOM5xDg2E8jw2YUWh5RUNuW0e1YPu4aZh9xx9d0jwXDkXqAmJIIU883fNn6jGWk7xoVHsHfOFIY3LRlBVQsjsmmbv27rZtjY4Alb3wcU1IDGE12W9P2wvkDznOPIrBMzL7OGgCa4jEur7YvOK2q0mYdNF3DZjTj%2Bi3j3VSodkTCfXkI%2BFu1DVJD2V6290VKUy5%2FKV2JSs4yEE0MtcBaQeEBaKAnO1zwyQNfBHyBgedvX5DQ3hnH6yLhuE5jpssmqmvVDW4OZqsDpHgVP1jPvO%2FqeO%2BBBe0ccwhHVtpMvOEvSWBf50KomQ4G9oT%2BBz%2FYfBV5zC62dnzLTIGMMaS38zH%2F0M67TbxUJdG5jk2sRlhTZXyjNlA9xU9Rz%2B%2F36CQPmZpMYaih0HudGQXHyQNebbDVnPnLHGwAKd%2FZ%2F93nRzc8Fw9%2FWJktoRfSLptdOtLLLzIKOwR%2B7U6Dp29ufcUgOvoFzZRmxp2uHeQMPyXz8wGOqUBv3CNIQjWtN3oFCAnwIxBgIiUKLMstpV0Iuz8sexPi5Hw%2Fja3xh1LdTD5SQ6gENw%2FqTzeddyjbojRg54Gc9UZVV9Kl7kg2VlHl1KActdCd55lkV9Y05Uxe%2BHGV0fA5FmpG8Zgt2Md4VvGlHcPS9BZIqFOhSYkCSDuVdIaJCnXM9pmiO7S9UayfW7zS9foSEUW7BjBbbB3rS3pBAYGGbRHccdQl%2Blm&X-Amz-Signature=f3393b0dff796c0e591d0724c26c1d76cbd4de74d946ee55477327a7871debea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LGRBOA%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDS8ZfsiZdxH9H%2BbZhyx9Od2o6xR2JlhmgHa7ezrXLQwAIhANyNC2FRY5vcCmomyKFTS8EVbu66S5bNJG3w4sCIbd90Kv8DCEMQABoMNjM3NDIzMTgzODA1IgzaRk1vA%2B8YPP6MNBAq3AMosGuBfQYjQFcQK97gw%2FWsSCtFtOHNpwGsw3IdNZSyG%2B4Mgs7qgNuEfvLdnaJgv7cbpyoJpc3eAMxRhV4neYFZycF1rtXcI0L%2FKEaCX%2BX83Lo9RR3dtDG8moMYJ8%2B%2F5MGzBoQnP466H9dAKxBb1CMY39nZPkpGLw2Vc0YtDJ32L5OMohAttCH%2B6mb6XvhO5O8tbgyN7GZjMM8Rga456RZVye0JiVVXPsQX3BWcQUhwQ3pQMNX2KGDkxLQ%2FfbtTB603%2F%2BuaXmFesAU0xiCkeDN1cOZe03JAmy1j%2B1IM%2BA8SLd5wdXcM1leju2394NXNe66LH2DUfpuAMwXvry%2Fc7IqFGy6CSgkmq9TGuzdagRqsjlT48qk2DlNkOPQtbmz030hgCuS9jbjIgNbsnsaotj1TxY9IhmTdLTBtev3%2FupoSbi8EiXVxJSAGTYxzRXaOpowgakptUnkAs3zo9dfRxRc69DEJLCtrW6B0JsZGia53RlSDdBqTtNPwn6jojdwAjHW5yEBBxLCpF5ZC8%2B4jJkBkrunBmdJmVasYuKZ%2BUiKxACTWAvy6hPvMkJPKL8phT%2F1vTA9UtRfAWkGrKy7EfCIuPYqA0rlJnSSY3vnC5r1hNdxekT4Xniapm89VMzDXl8%2FMBjqkAVDV8%2Fs4Yy25JdJFMSv0jOgurBbgJqhFqqia7mcLXgRf7eB%2BAXR4NPTtA46KjjdbKl0Ftc7y8uYPAJ%2FlUd8D6FaaLDQzcycXPUcewhgrM6EnXlV3tq6icGh%2FFRwJUulFRXWY%2BRIYmt9NVXGfYQx6AfAOYTItIkTsQu2D%2BL%2BtQtRsJUX5zz4rnNLvS%2F610Y4cfjQ6K5RZlS8WaDdZ8bFVjIyyC8F%2B&X-Amz-Signature=61beb489a55bf96144b9577e6933d9f57a8dfe09bc3938a5756d07dc7bc68287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AYE7RD4%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCsgzhykaJ62IyIHiVQGD3SpMz6GFNTKVt45x01ltYP%2FQIgdnZj21G%2FW2m2bzFD%2BjBhdFYC23D%2FXLe0xjBuMWMfwd4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDPKml6dv9NOpC2Y8gyrcA8Flq5cwl7iUy4Je1UE%2FOFLaZjN1shhDhl5ZK0WsARAAMaq79tcKXsItXEHPA6H1TE3omhT0huVubmBSfxJcamQaON7AX362WIqJGf3p4wFvSgLfJMjCWu8I9uGH4B9uiTxXt2v8Y3gQLqCM8r%2FOfcNpY4g1783QPHoBP%2BcX1FSjIB8zP8Si37w6LbQW9g%2FAMxcpMmtu6%2BUrIz9aoDtvnZgJ3gLKQdEo9FgjrshmJ9dG201EZgVtkU6xhg%2FIDCSXXr8xcDxwau4gneJzRA2277CcCbo5DriHL%2BUxajiMth32MQC7lYY3p1hBYN0AB6WDP6e0Ecz99XXBQtVTAAddiScQL05HY3rZ9zckljSSEUZCSN%2B9p%2FHSuEjfws5rhypNR2XLVCpWmKjgMW7SVy%2B0DZXCzG0qZIWMUZLSutHugeyDNslOJOBZ%2FTrHgM12GDpWaLt5r50rXmUKlDcSAM5%2BkKugLFOJ3cSGGrFWU1jk03X6Eg%2B%2FFAEOkbmrL7NtKXDGpL6nfTyH0Bs%2Fz90YrOtSDYe7lLrTaUUiJ%2BjH4Dr7LnGmIEaQQ99DhEQgs6QD%2FMGkYYGHqcJZ2hewpH%2BA1LTEpmdoSKQaRkdpMgpS%2Fs15ByDsG6jwvYtg8CBtmi7QMMeXz8wGOqUBV8SB0WvXKUbQBj20OnqrvCmoDUqVGtGIaSxwxBoYeNhvbx%2FpPiBNMvJ474%2FiII7H45%2B6WfegXev5grJ6sCmjqY%2F5cptUVfEEpSQK6cdsujtwvQv7WYHSoEDIntdpCzXzuH7ahWQftY3fiZdZp3V6ymmAE3%2FvAmUcinOSJfg3DtMsvJXbnrNvQdIgo%2BHWQcUK741i5a94NoNQWZMK7eTZUW6nHlL8&X-Amz-Signature=0308d262f862df18bde1f8b7e61dc42179614a2eee832ef0180673b476ba3823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

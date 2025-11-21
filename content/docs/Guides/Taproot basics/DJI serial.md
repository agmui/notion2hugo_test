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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WGCWKZX%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCizsah9Lqv%2BIWw%2F68WbpE%2B7qJxneuTT%2FFPl%2FffxIIzZAIgRETgSkNYUQoTZlymyUmuFiSCTPF1MHNTjjju0yyi5eUq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDNgNgDwDWJnNdPwAhSrcA8XN2zv0K1hAF7xZXMS6QrNOs43490v8%2F9aMLrFeLvydWaMjrL1zdocMEKrfSBW2vNqRkYi4DdG0dt1mbfyy0uuX6kTOeRBvFNp9oHxHUPuWvTtPjRHcBCqFPxF%2B39AU4OrJM%2BHTjm2fumGFOxLyo2t2XOsd9D8xAyjWaouaBDsTbkHoMrDluqaJuFXGsIcgSH7S6c17ZSm4AX6stTKvFW9ZEvOqHk0uNCMLO47Mo5tjZmLzInoTSzlqP%2FBzAEYtivMKGPr9gJyX3B3JBs5AbVpbckl2AXWenlBQ1eoPJHyhz%2FWKwEy2Uw8KaGRpTXhU1%2FIk%2BnvfgKRz4VwFEu0NtxQv3LYwA%2F7f0KvS5d%2BQg69%2BCq789ypRKBKLUqIMWRiS1h%2FHDMZoq%2BaVa2jPoTdgHk4jlRG5NTSKchMPBoMRPIEukgH7mBZzO2wrViV5VSaekQHd1ONM6EMDs64RYjda1%2Bs8ib39iRaPR%2FpjpfJQofcFDsyySlPaVKHaBwzYD18U9s3ihNIPKW18jk%2F1XviNkJb9PzGLuNbZ2sgZFBlAb3HSwvfDRc0DoltMxtH7EPMuX7KIORFxBuVJ%2Fl8DLq%2F05Aj6WxUC4O%2F7M9qNtEA0tNVuS3Wn%2FuJzTmG6nZW9MM6B%2F8gGOqUBIUkA2S3MBQ3Vc1BbTf7lnyEV4RV%2FeQc%2BuCE4UyDquxLLyuM%2FCqAGdAVeOgd9h%2BePAOHT2NlIsy77YRONsa7fZWgQGNzW2QCm66zBJclnwU18MIWdl2kZQos9DzU0dflfH7k3SECXJpFBuwEaiDTEQmFz7D5E7Dd1CCeNiVjMBW5PjXDgXw1V6PNz%2Ba%2FqlQdIeB43FWOvNNx4THASyVR6LV8GqLNG&X-Amz-Signature=740687f4910099225a90dd53d007039ee6c0f6af370cc27376659f18eb79091e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARAHFUI%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDxOYLcVgTVff003zariEELVTNkpAs0uZfBgOKxjoBnSwIgaWPh0z0GZ2z5MmMh2FTPgdUD3sDiBh41wD6fhQKnLIsq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDLgGkLPF%2Fg1%2Fqf%2Fj1ircA7%2FvD%2Fo6TNAFPy%2BYbZj5kEf4kSajo7S7l8gQt6S9Io%2BsnihngBgI6QNc73wJ7MaAq4FWjz7pd%2B5luLgy7V4WmjSVFTzaZMrFNRq97ia45To9ekkm%2FdAwGnJCCm1OD0DQf0j9GGfTS8CXxqytZUS%2FpjpOC1zIx5AfYNGMeGIkF6orJzSppJH9pHYOlKoBef939VsmMFblJbgpg107%2F8n%2FItr5aPS5I77UOwyszcL4HrsEDMkNZpjxg77P7u2K4Q3uYMTBF2O%2BiZiFVztfBTYj%2Bt7s3pTgEByg5Qu86AOkAbKMoyxg8oOYEuYcQHT5NeoZwkYTUVPbA%2BLfCBKHvJdzjDNlbVdVlkQSKFg%2FJQdVEZkhkx%2BkGzZQH7AOGpoghqp8Af0sRlbJDq13MaLF6SYIj6eymTsch4JWAaZOAt5%2FM3SipnwTLiINYM4g23V22orC1bFYJp4gan0VLribsTB1puXTnAqRX7aL%2BWW4nT2agEST92hBMgQRYu8w1ssEfrCCPHFNh%2Bw5ZyL0jg%2F3os6lDvxZ9oEobxqMbmqnlwxMReyjhDpzclBbbyHhzxMgD%2BpCPIRYQhQ7Yqa7LP7Ja5Q3uZkraqTkieKdkSIfaPLd2uT3kJb%2Fh9zfFZ6jEXKfMOf%2F%2FsgGOqUBvRMcgqKQRkR9tGn3Ethy6MVptE0Ll660KB%2B6ApS%2Burtc0i6EfhSQtIfJaZKsxtuqSeadZNIEce0KJZSdOVfjfbHASrPq%2BggNYfEhwLnSixkiN7skM6BU2naxuy8e2qcQGwkH89%2FvDq%2F0vYSpjayABOz88suGvmVsIoApTTyqCi3nMGVJpT00sKtTx8AFggxW7vgf2%2BsqEMKuw8MOAFtyREw0G43p&X-Amz-Signature=23e76596f2ab221c3b549a7e5cfd7063ce5506c2679afa710e4c25e15a034dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYWXVXHL%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDCe9Ls%2FMMEjlHiFE4%2BlLfBFCqAVaSTYYkY29eF%2BBnmAgIgcai%2BXAYnNfbuHAneyLg6zfPxTVzgZlbS%2Bd8baG2SMAkq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDC8fMoaeVsMJBM1ECCrcAzuAdbG5PMiMTgj9c1UFUNHyfe4%2BwZYhZJZPG6jnlEWpDxFtPZwqCwUq62TcNm4%2F2dpXQv85BsSbeUF1hMh5ZUZ0bLmLiHVpwoNnfByjecqb2EMJ876JClrWTTJO%2FL5YxRsBETJ1OTWfkiY0Ya7QiGKv6Ql%2BfOYGdR3SxNK%2FlaoZknQsjg6O4dconn%2BYurFEmzazZvxr%2BV6KmihV6OefkkFZOBuwMe737JNfkPxQgLC7QLblFYB%2BRBpMk%2FabarwlTSl5oRUU%2BqMEi0z%2F1ub6JTKvUYlKLncxTI%2BrfONBDndaJ5LwnkJ0kNN2AI7SzOyBK7CF0tujCzCd1Vp59WxNtdM%2Bk8oGANHXAdsEDHW5IDp7tmPOQ9yEDFQ2UvRejj3MXwipEpMEvvDkOOUUOzMzWpudc6NbEzJvn9UiDKfO%2BE%2FcEOTb8hCfYDQmv1wuXLHUvZWutHB5cmZTC5Tf5g3UBgX9p7yEQTCiOWIi0VOaDh6BJRXP0zxlUbTUyCXwVpTElkvMv3t8x%2Bo0EO8DtcFgfr8IPzpDEmlE7YJoQtW3ZOC6dQWlD5dqn9QQ1cmeZ9Z2DfB1XWe94wWmjB8EVzqAgYY5DWph4seSIiWkrerN2qGE%2FIRrdNsIfv9x3j92MKmB%2F8gGOqUBw5x2EjmnXj9u9lK%2FKBS98kbrzsBMaU00ngpKTq94KA2BzutBEu9YA3Smg28SY2iUUxjpTSY4g28yKxlxTx6lOlKUrLy5ZIqyfqEAHqfiLD83HzWFBOmO0lVCPnM7zGpsVc9dudaHhUwDk%2FR9VfISkZjrgURZSALhMHWAW7mMoXT3ZQ5LAdoGLTquQeN6AyxUTC%2FR3JnKj76b%2BC4xGj5IVrNcjmg7&X-Amz-Signature=1e0423763682ccfbe1ed41b5b1b6f1dd3a05e99c9d6ab47251ad3742db43e62a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEUXVU44%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDShyksj%2FkCvE6sfwgKrYu0lALnBIkUEZ1bBj2nS8WUawIhAMe25G1SarvqiXJrYA6QWWnrr9vI72fQAQF24LuQQ1wNKv8DCAMQABoMNjM3NDIzMTgzODA1IgxQjeWRGMIMvS54tg0q3AMSms5YpJ%2Fwq%2FtbRi1n5UJPbwnONGZ0YxJ%2FyioSr9Wm2yMfNJrP8zD8sEYP7Bl7L5YxLe4bmi0%2BRpMPFcQpSWEN0TQCIgfAP4R3Pa37qweXqMkN%2FFSf9s%2FDd569tTyGD9RvSLfUOcuyD%2FoFnDxjWnJDJthkZv3Tz9dT6A%2FYj5UY8BufasC2Fk4nvFdRQG5ASKoiCX%2BcW%2FFLAB0SWLfpDeIh7NClacbN9dnjieYNdJWMCnlebvFqVhrpNxoTE%2BAonMfQEmKvS1N8oXoJ%2FLJUnBv39fTn4LEYe2F8ug65Axz2%2BD639Ua5fQZQj%2BN4zsSLMrm8rCQy5s2QKcnbVKikTq4ubUa8LCXxngSgMFIos2xD5HHrxcqMLb%2F6WKfnDKEAGVElT5%2B8F90rjSFfvDdT5LoFGMCJFhAGukzlrdjR985R%2FaL7%2F%2F065Feho2OcuRM9xS%2BmNHpvMc%2F%2FR9BS3nRgkHXoxDhOD%2FIuZJvQiw6AL2qUp76mn0OhofTEiORmnUn7pSMKkdq4k2QUViFE2JszZjrr7PDYb0dFPuewPqr5aLeWj6tpIXamOpY%2BEU2b7g%2BntViqx6KSSnKUAYnMAC0US9LAZ87dW0h49cdN0jhF9L06T%2BoLxGFN9ojPDf2YVjDrgf%2FIBjqkAY7SjAabcWEXrwoD7LN8BLLnFNDNxFLLAL4tU92hz83sZwHC02SHy7N2Xr368AHhPf5OXt3f25yxEFaEXYZDAaM2PRnIdPm6pK110szs2j60hbxwQiF43pVEJp9%2BeJzKBx6PnmwRfNVkrMvaazkOFdMfjbVt6J7nGoIpl%2BKk7N22fiB8LzxmWrCVQiyZyR5at9QP911M0AY7VVV1rEAA0GfwFL0W&X-Amz-Signature=800b1fb167df260bfd958434a46004845e9138507812b5ed3c687f85e2c8e81b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

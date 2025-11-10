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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664TSG2NB%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDruXSQBhiHx6atVUyARDxgb%2FrfpCESbMda0X7E2AE2KwIhAMhvpE9coPRI9aldg6nexHKaXEotK32eFcqoQyd1bNehKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2ELt%2BZAroHKy5DxUq3AN3VeHtedzNq6CVnmKaDOQFPjuk8b7nXGRh6blgmO%2F1MXrcaZM1lrpBa8xj79SYkYcbjgHr0BGMWufNBXtV9dnrkYlt1rS1fhp71he6ZGXGOJ9mlEcWXFEaDHYG3IsOgfmxgRYsZHw6S%2F42zmhmFEGHJrmm947tqELhZ0s94RKUoZDg4mur7dp13UF3JEdR%2Bi53BGij%2BoJ2qT4sDOT7qyRFn9gf1PmqUF5LdxTEjnStuyGI2KxHozcAgpbAiyR4Molsz8m81YUlVlOmToVju%2Bo0mJltP1%2F1obUxbiH4ikdLqKkYJnzcni3aJuopGTGUlKdiVr2o45zg5B2nxqtitRGRD2%2BkeXU3poIaJx8amJPmDFL%2Fvmrm8ruVI%2F%2FdQ8Xl%2BBz6at%2FMYZJ0ZdAObY4fVbvZaYwXuxFr7tgKkP1UhUWQF1LNqTMdNd%2BAu82pMIeNHxusNlO4rtS06i092ph51KKhUKtb1XGLtaZe8GGxqFQDisgglpxceLoVzdbL5oNAOFI49%2F8GADjVmhCzQbdZ1iMM9aIU%2BAM%2FG1lHYwKuTfSS6JRnZas2BV0GV%2BzZHoCK6p4BnVstqz%2Bba67tm9yuHtIXGSCtxkSAQy2QMmoyDOfOshGPm4SHToX1%2FQs0RzCms8TIBjqkAW%2Fiocs61zUSiUaS%2BPvp5lPQscX6W473yGr7WovPOQRlSGby73i2E4vLdslJYSf4a8LnOmU9w2JfoDSiWlxn5kNQK11kwIPIIM3YWCTV1RbEbAqwOxkDdMByPemh6SscDvVBSQTIFlIEF8mOPTTL3F7KCgBBypkQT0kePIng%2BbWPITJVgXReoOyN87IVFglC5%2BlL%2B%2FcYFTvIwzz671Dj0fzyAQ1q&X-Amz-Signature=000a3ddeadff3dc79bb74bf55aa7da66255d75393b0fdf7fdfb29fe08d357b4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3XMVNZC%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIATMhqI5uuWu9Jws78jv6kKihqAU5Lo%2FEjxhypVVnKl%2BAiEAptAePt1ncWzo8jmotMlZmo6GCtyulb2iYH%2FTcD%2Bzh48qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcjE3CNz8o2KohgZircA9aaPkeSM2FeE66n9hg%2B67%2B5d0ZLF7sXqDkCnZx9rh6ODUKMFTQpkBeYYgNdXcAl9GVPv%2B10wHeTZrfA%2FPOLKFieCqT4Pz%2FMzuZMJIdgjmO8FKHLZk8f56NHrwwUgwyundj1M3JQU4MRpc46ENO1ToQ0ufO06xtul6hK8ovpIi5vmHwWIRpTZoAPM0y1jcxQyT%2Bgs%2FoFLyuK8zI7nS9g2A%2B1ZsIhoIAEMrph9qJftdS1JNBTfN7JhdC%2FoLCSJhQBHwZOpYSSa6dMLjtyPvGdAB%2FvYkibeKa7QdwNEh%2B1v75uTiuPijjG1Q8C%2Fv%2B9CPZj4OLC6ElPc8Bey%2F%2BB%2FXCZgKyG803o%2FMWFVVcAPiq1sbU7DyDuyNLltFx2XNIJ7IFLb6GHV%2FqlSCn2T1DLuz7NwLPIxfw2kwpOF9Drzg2Cb6h7pXNTpNSuhCOTvcrqP5k0wMv%2FQA%2Bf8YOenjxuAgX8Ui0gjJFyzOZX%2FKEu7hkrI6Bi5Ay7uTsMGy6%2BZ18qUk23zzJgsnlDrAY8zmjfBV6KfSxqjqclXrc%2FLJgR6%2FLGFd5gXEzN6UJ8aQM%2BH4S%2FEyy2JRZrsPW4TePYyzAZa7R%2F7ZFgwo8dYqQHLLNofA6LF4bYQJ%2BX1hfTP%2BaVprM1MJuwxMgGOqUBlWjohWl%2Fc6fnffdnC0huvyguP1rQYR7aFgDe%2BQi8bVn6yyMM4I0nuDM7rbO4lSAlYTVD5uGDXEke%2Bm1MB0SiHQ69MzYoFMUY2vrl0d3vboJdcjpsgzd7fdpSL6w4vOKUR29rWtqxmLzU3BEfYAbPnGw%2FZJHjgftGHQ7qxEa%2FIWZQm5JmJkQnkzusFmhnmMbA1cDWHDYrRJMrPP7Y3FWoFveAOlmw&X-Amz-Signature=19bd3b024b6fb898650ccf164337837f79258e5b695cfc1f79aef71eb9a565b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY6QHR4K%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQC4EiB0VC%2Bxd5cxj9QBcRMNYN6oiUafxQnMU7stLmml1wIgRMQWf3IqpiYpP2Lb1zvYEQ9ec9se5LVdjk1eBxEypgIqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJRt%2BDOdFHSpnE4hSrcAwBDTgQOY84Tmy8b9Dny2c4%2F5QZOieMTwUIOk1OUeQAFiz1AM4LZ4rOvxejdlgZ1JfwvE6kvga4y%2F5lU%2Br%2FwN1SSDXtaOw4lajTwxSk2N5VawvHDhxS%2BkUbB%2Buc0vJix%2F2LK29zcJ%2Fg8K7T7SAMMqOrFZfIGXrS%2Bmxfm0AG2kiTWm0dXbF2llG7fGjwE19wkO6hXf3OMiWJ4I%2FD6urjfmca%2FV5sORBKRfgv0hFpAOBPfIJiGZcxYDpb4XstgTAYhDApgKxOJ9VXcoINHgcZSuUBIii6vpSTU7cUt8kdpyiOxRcu6nSJvuzoG%2BVU2TCf1hcpydSzPMZnM4TgDlOrIDMnXxElUcB8nmsO4lzlFKNF38exG%2BvQUoGyxrq6FF0jbeMpKJOoONHBH2YQjns6GmRzpLnWTnYbLnJb01c5Y1hxaMExn8gHMgzk%2F%2FljyGMzp5NwyFsQ6LZ9sM%2BgZlR69M6r5aP0FiEyy6flJBXfHaWi%2F2yhrsKAtV1g1m%2FeS4Hqg2Hql5CV3OW0cTNbewtPx1hZ6kUcJHGJKVeUbMFUs21UgjtdKGk19MuoBIyIpcczrnkgYgXG3gD1looGGRH24WZdZnAXAA49dKZ1vQRHFCbU2EImsQ56ny2tzfi4gMJ2zxMgGOqUBHNbzydlirlZJHKUs7bcLpJWFfNrAfF%2FIU7lfzqqB%2F5uCUUAbQUhnWsCJT37%2BFngLbUO6ezglJPmVEPFtXlY9KSuc8f8Gu21y3QFPzV31lDFxxcuAWg05IdXoA7ED3uLprbeD7zdc0e3Vi9ZmkreOoU8GfpfXRDwuUtZ2sCH26ZAPg7td6goVsYsd%2BkcszFx52xOtoKR%2Ft669i9tGGuh8gOSXkHTM&X-Amz-Signature=0f1c4acbb6a44682969c6123df3e495b245b7db5c6e0db134bd43f37cd862698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHUCACVW%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIHlE1zfNdba7t%2BAI8J99nKKXRnG%2BzfRUNFbIEwpBLrl3AiAqz4q950keKoQKfeMs7NDgxcq4mdcH9KUhlptmQaPIOyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpku7T2xn%2Bop7TwEOKtwDYUineA5%2BH437pJ%2FO%2BXcXLB36vbGphFoNxI2uUOkZ%2BLS9MaJfRYrB4P0vKq4OCi5r0U2DdMqy%2FaL8LdXAtzH5yghQHSR4LoegHpkReGgqCiyWuDQtyiY%2BPenIDOa2zYPCIKmasFGcvkTO43WJ5wxOuhedTe976Wx8MSrdaST57zoch53Mk%2BzOOJWL610LjRpYzoQ2%2BtVLnSo2wGWQGDYLIiXIAuZJDWRUR18u%2BpCelCOXXgjJGv0nciUDsqc6ZNGYc3%2FzgK1ni5hVatJuBgR1YF1viOkaZBG%2BNN5ReDCQfR5mA5yhsqVUYjcB3yNB15yN5Ubvq8Naw%2FwiFvxahX%2B2uA8DfQvmvCIReneLRJiB9sFS9U1%2FkJK425aIu7CquDFfOFIG5FQ2BNxixLgPkc5JW4wmLP%2BnJStRSG3VoNxqVnBHC6D%2BefGldikBPVn6s0cFouU9agkagzcEphcxt5E1aYCPyFHPw2zPS81LbEmmk3cyka8rBrIaqY7n4DGhwJm4kfEYZYQuCERGgSxvnhRdguu07ud7eLvaFrJfzXXAVzpwvvJc9Cjs3lbxwhcFOL5HYeSj%2BLbGRNnjMUSfbvWVFQdsDNLns5cZUQYbp%2BkJkZCLkl4u0jjdL7XYwYUwk7PEyAY6pgEbPkMQVUwGBEPnUAJonp0OsVJoRvqAe4XwFq0YdMtd0oOWF2nu%2FF1CFIrUdABhFR5yTAM0Xr2anmbEtmbarm9NuoKyeCBT169Te%2BJwYHBLAPRCh7CuwNKfV%2Bat%2Ff2wQ1F1OYOqrFnLuMXdIVXqmIyja%2FP3GCKeOsXXKMGsYs2Chif7Z%2BozKA2Jb9OaKWAo6NZVQYKlsZMelB6%2F09RValHTQbjOXt11&X-Amz-Signature=5960ea8b584a59b9d0e9da76f15ae6430437e19e3c6d74b8dab05a7988f99402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

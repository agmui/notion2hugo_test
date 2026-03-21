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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV7UORQJ%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCQHIwsYgDhM%2F%2Fufofz%2Fo2QDN3VXzLWMW%2FGl1x1e0d1rwIhAJgQqvzPUFOL5x7CiqOq6TZ41zc71Vltx1TVefEx8gowKv8DCD4QABoMNjM3NDIzMTgzODA1IgzRcb%2FPBBLZFe8P07Yq3APiiHIXoWs0ctRQruUc3IySKxWThCqrZ3XUoBaQQUNHHT4QhLWwNV8JFkgQSA9wz05MJyph0%2BNruHBjJRbcCR0tMedhcbGXA7s7yeyJx%2BjBuLlOHJP8KbrRXgFJqN%2BZ%2BLfKFpss7xbR7tfpt753ibg2RgvglInVML9G3BZzFJUG8%2BOpF7NIbaS52ui7X824wHVCL5zWSzWIvcqMLidt%2FiYge9UOB4z%2Bte7o8qrUz5hQpNfJ8CwVr4negrt%2F0Ll3CKpuP1GiCnPffOUBEm6iSvAfJVwQ%2Bcpp1ir4RXieT716Zu967XSToM1yUzzwZt%2BPM6WYUZ0ve1gofTcmCNTdj8DVxgZfoAaSGAXub04mr%2F17ySJra46ruLe9%2FPWjwSFeOCTpB5EggIO314d%2BrpDx14fwC6g05Z3W0SKm6ZpHzhMQzkTGY4qZgWbfYxGj%2FQti%2BUWAp9X0KmWrslFe%2BXwXu0XCzy1pxIPI57Fo5Ez5qjgOEAPJ%2FMhhVh7qNVjZ1zx%2FJlhZOiV5iq6raSRGAozAxPzJrKB5vOahzzVd%2BCYWy0xBpPp2aolae8RuvciwMj3lqP2JpY%2BDwQ7KEroaevYLx78f%2Fjl5smM8Lak3pjNBVauFs7lqewo9C%2FomtPVYwTDN3fbNBjqkAfPWG2lExbqsAwOGwIWsrYAa7Ko4WcupxfBuiUmL1bqO4bq09DP0sbiwvUm3T7YYSOQVu18MMY4Ouf3KLAALYrSE5YMRrTPfeQCHhNyP1YE4P5Q3fDSOzqsyBXStnVpq%2FKA%2FLK6hYYI21GHfUiJjcJPH2Pt3%2FbGUjRHNqoULD82zwyfWzcoOyvTzeKv163uQpQggxxMOkTT%2FIlx3eLL29NM2G8zp&X-Amz-Signature=4af35a09e3d77c4471a7ec7ed386cf42e105315d14322db18376c99b46f76e9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPQEE3S%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEtSF4mgdkw2RNpcg8Np9KdPt3csv9A8ndsu18fVKr%2FFAiAxLa7nFymd6Ks3hZNMUSBFhe2tCZehMnCnmHlik8MGgCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMbUGLhbCgOLyBX%2FHVKtwDRUhsinrMMHN7vW%2BYhgiHmKFAT3GRyTy%2FFEvZmop3VxFLX77q80IutMr2WhLyE6IG%2BjmAPyCQp4yE%2BnpOGzzzJ%2BTGd9AY0%2BwGizQTfzAlXOdiRW7o2lxf7NMGpKI76nkunCtHKByyP5J82ZMj1dZhQh1ZYbeOsLOmkVm7vnvYIhXAu76Tqan7m7bOB5ktpFUD3%2FxPyGG2O5qMYhMYVtptZoGDWphZZ59WHaPKOz9K8K64ph1tMYcPExlthLQo2vvjgCBtkMOo%2FlTij04mR9dMnrWc5aJu2RcnvnPdVyizKoOfgIJpnFch8mVm7E%2B8KAQheBnF%2Fzv0D%2B6sdsQVLguNeqCzEKiQiZX1OcFEQA76DWcXbWFa4cdE%2BifXrjAHVsEaZVPpx2VVb6UjZ%2BPFRiTvxL0hoofvuZiw1wlPIRvLkB%2FIsW7vZ9E0M4e%2BEC8IBgfmhxnUlpGSZDvkViuZHSuYAZox7Mn6e5FMAY39UnqYnZHsxLX9voAQhedML0rSFpXtehLvmLYuuOvHHguG79%2F5NJwlkOHmDM5L%2FJTW59GtC7SG9D8ZQOpmLdnlRkNlKwX8IuGpC%2FFXBFCFHhCWmdfQtzQeyS02bimBvVqpN6gS78zQ6AfUKFpXb9mRQAkwld72zQY6pgH7GK1GVnRcLvFoUYK6fxc4oKbESyhq2ich3T7Kyjyj2C1RzFFxi9HRNbQh9fh0v9XW%2F9%2BL0zGEkbq%2Fq9lLzUVz0e8uZ1gS6H2AbB9Mb0tUB%2BmP10VUgLO%2BdHac0eJXYlcwt47TMnWa4xIOGcG6esmUxebgqoqtgYsoQFV6RpGdIQ5MDmGkSrCnYXAyVqAF2k7B9fnhAUl3gWtBDnGpxNW9hoDDzs93&X-Amz-Signature=9ba837914a9d7a28fec687517c20ac95b5f4211232c76827cc1edc830e63d694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S33ZVKDL%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIG3lWLBrNqLbjD3Gg2TAJibrgYAdQGHkCWaIOQ9aBLY9AiEA5RIlOr4oZCfkmZj01kYOe8g1rXMGtOTXkGh2bGdRQNUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDD3xNaGz1lygwpbCPCrcA1kqasQTbBM%2Fml1Q%2Bj%2BhAUkGLQuINvj%2BAlOttErOu64G%2F9DmjAeLyJpApUbl%2Ff6MmMVt9SoQKZAoWN0tYFIeBEgA1Z4Ptg%2BDid6doY8wgajbRak%2BvY3xF6VkLp4g46UantfeYrciF9T2BB6F6tWM2cK1WnrasmfM8HiEIIgGSdHQcs%2FYwWUL%2BRdkWkINLRt8oTfHq9RhJqL6cyPnf7Cht1gRLOuyh4YX%2FIGRyf60cc47XyfO6T6q1SqThOFg9p%2B6TCNpOultMmcieKZTMgOT08PGipeu7cb7DsjpXc5Mz%2F89bYG3W79S3XwlCl3dohnRgCRwdHuhqeChCtgRDl2TbNW7Iahaz9oQl6eM2hU1uoDiGxvGPQ%2Fsn%2Fsb0Ni%2ByGyKW1PggfyTJiaGVgNxBN5E5f3NHg66PSQi0btORZnxkEJ%2BXuiOlIeGobhaNUxbKrCQZ%2FlDIpRa2RaXayAgcbf%2Bfhu2i%2BE3geYbALyvID8V2PyxA2l84nqn7YEngNiCikhxEieTz%2BSAzKvktrP3Qh2gPzb3tlSwMZ%2FV2XDoAnG940eN1lCu1jzyXU2TNAkrhi%2FEcMfc4%2BDOCt0Hhek%2FKYkQmYE3bASqhtbarOgGbgg1Pmpr1lFY73XyKYR3OcGUMODe9s0GOqUBWGGt0CIbY95p4wCJTvYCGvWDFJB6hWPvBG1pg330fHnYnDA7WkJ2qg8hImDbNAcL2QeLyqFoaGE%2BbWPIceJ0U34WLpVRTs0NUFZBLgUBynFMtlI%2FFqgrnU%2FVoIo60BQz90GltRqMwAurHPbVknoeiMbC2iP0CrZE0LwHDTFDecBWGACg%2Fjpul%2FXTCOAHjaZ7DX2FGgpoyF2NHLA8v4u91pRhdl02&X-Amz-Signature=1469ab1d0f0ad22f9a0670ce72d2ad3db9c8a3556dc3721c7db8168da2eecf66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GNUL7DI%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCID19K6NYpbxHw4exbSmbx%2Bgy%2BFnnckEKzq8YA8JbBlomAiEAlyh8jDPWfBTrTdoA88k0iwf9I0Y62dnEhNVY8Pr07BUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKblEIrAIB1pO468VircAyTZ8xwLCdCGFAK5%2BuMptlErs2NMhfLGqZ12tOG%2Fz3UN7AYoM3g1X54kDdQfdZugRP9D904vOSjBlOWVmUXn%2BQghi%2BpKVOwgDZ%2Bs9G15CM44NNmireZ0u0iECteUbyr%2F1KWR6mNlkuURAhjzi7km37YaQic6gl%2BUU0ujN57zQEvwurH9I5%2BLXDxmJETHYJQdMo0YzGQc5GJG7D%2B3yM7iXMdE4%2BEOKmDTqqfzVGjCYCE9Vp5z%2BE%2F0u7UloKnFsjPVAouLs54%2FOm4G8HO0M54DvdzmSR6juz5gI3iFpzRsbkHGJk56ArE865Wnj%2BGbhLpoGNPV1xFzPcgm1aXvLNdJ1T2vV0Zkd0X29rMJaWoOqbwNUelvOHQ2ZJa78%2ByDXtZpYzbwPVspYWML0Xm%2BShWXcj8BPFfufidGiHx2Ib2yuWVQoqT%2Bp9rYKLVNLAB7oRovzI1dSS4HxZTaigNL30FZVhMSlrwp%2FjSPxuWkiut%2FD579%2BFA%2BCSI5PQQ8gMDJnn7gSfu6Ajl8qZmoXXrd1S%2Bpljgd5tPV9MDAZ1Zzefu4HtPilVGiW3Ugk%2FBjerYTwy1xbg73154szE7DStNf9RckpjsBGP%2BVqcIWAcLPmloQtm%2FVM4wO1uMzLRlIaAeaMLPd9s0GOqUBobkc0wG%2FZ59EtbYdTqwdfZWMOUrFHzP9fEWXjN0K5kYFfMkT5byxKMUdwydg8TWG8wWWZR9OpdaWYxXTZO1bzgYCVv31F95Z6nsYLS4e627R5IUaBDuBVusxMevk8eQfsOkfU8XKTIj43bKAwCXP5qvnEArayTCL66raOiIHDjhW0gV21QTvWkze%2Bp%2FG%2Bb6oO%2BjVCSsaXldqxJBJtVoPvsdx1VDr&X-Amz-Signature=fc0e4594db60644bf2fbd5745a81b22ebf8aef17da80575bd170a459ed66db60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

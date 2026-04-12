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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XV3OJUR%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfatfUZdg6AAPedTl8phyGSkC7N7krX0q3jTPnNNCRtAIgZn4vtsq%2BCQ1gk2QvD3yLHrm325HNU4taCevVJt1%2FXIAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDOmvoxP448D%2FFpArXCrcA6EWdqrTi%2FZh1oTsJB9xVjp6NoikHsR0PMaght8LG9qgJATPAOEhH1HbjFuX5bv967KX6cH1UUB7juGLiv%2FdP7R%2F%2F4XbUOC%2F0ZCzfGAO6q%2B81J2G4m94EqERt35oU7XAZ9EQeBJa4WIMoRKwzXAG3THiKPLKECM%2BgAl0p%2B1MWthFTZDezc58vyWQN%2BQZstqtFdgOlhkpvM%2F7VNOVjDFiawDl1NoVqVsNtgKMouoYXEN6rGFTWoBHoqHsbZDUAZO4q64MtcSQ2rn6yGrsO45wSLGJQLeEE7HmwXemjxBKKIbNp5zbyRfyvhSYanItsESslYuGTcooxtsDnmoSYM12vGJ0JtSWUHEqOKXeew95zm%2FNaRDdyWzIioIrA31YO7Q36ZAEtGtEn4f4R665bsywy3v3SBjvpO1HQkfn7kNT4dL%2BdoaqKUaBX8%2F3ZU6cPjr%2B7QT6pwlfVjJfvxqjJCQHCWwwtnsQalKp3sa3sPo4%2FClKV7HZ9zeq9Ge9VY8NSd1GJE81%2FTfMKJTML2LUFa8nBqsKeu%2BTaiOkwBdtRjfUw%2FlzOmoPvZnt8w6uEnu0sbITxclq5nZB7U0Z2%2FkSSGQ4Extb6kmin%2F2yfIvOwRJuRwJDSWTs8R200wKKSTjCMM6J7M4GOqUBhCndjJt56QJGv8AUTsRAenDywGykBWii8qBIcSP6Rq42V%2FKwZZM0pO3%2BlDuQCW2VZ3uQ8WEwA8uAjCHUTApQyYPefhejcVY%2BJcVVoAFS6PnjK%2BMxm1BYODW%2BY%2BUQcYe6SUxoCwqTIkdXok%2FCba9eiuDHH6v8b%2BNovowkBxVOJq1svTmpfZnhKQnw8fpl19umnJHpAxorEoOFiIZH%2Fy%2FbqyCG9qgy&X-Amz-Signature=ed039ad020cb4e85d4a27aa38ce1353e7c59788886c635a83910c70b666a9f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G2EH262%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH783GtCx%2FYvW7HCqPLVyS%2Fd03vSYqjD6WIv0p1E4dpLAiEA2wrgmE5SxFg9hoICp8WzkIkZLPJxrk01jTiXjw1rQOMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDD%2BG78CkpYGHF7%2BTlCrcA6ZdGHVCb8SVZekWgKp4BtCFLd5LwD1E2jPK36Cse0Vb2l3%2Fn%2BHx2tP3s2hVjxMHKNfuwJaN6uF9K%2BNEJwW2ujnw0JDI7%2FAiJSYosH%2BkGYGezcFCrUvbmYGLoXVjqyqjUXSTGcnVCkQWwaXTBHqM3tPJMkkonRl8CRGjpiPMeFz6bYA18B%2B%2BNtXYiUVUuHHWkf%2FWyW%2FgoBE1S11fMw4HhrV6%2BSBs4w5acdKEPKwQvsQyIQpVNzHkikhGNJabfjjPo8TgMGvpptgwGrZnF0A%2F58ebpEXbCVG5VbhTc8tWN9SDNlLecfXcc%2BaNY94XiD%2BxBZaC4NWVaNIR1JrUpOc23IbpLa5LHuq6uv4dIgJ6GZfuYR%2FGSeBDrmRmDZOB4IreROuTKDidg8Rfxh%2BkJh7jD7IFV2%2F8kxD7NhscSPsrdysdzlEinkCPWUEeTsrKvi9Y5NmYOELaei2XWIgM8BK1ijvqG7JgR1%2FWea9vYoxoVY9lmnivZMZAeheUh2A2Gj6CHnUwyHr12HmlRXxMAAN%2FZwrXWOe5goxr5XKwwkY9DJ9OvqkZ%2FCtymdaGNfVnguYuKNQtUcpL5023DsFQpPchSZvFgBRrORSdRtOiKK1YpV3GwYAtJiwoZWUAlLy3MMuG7M4GOqUBhOgD%2BlU5zUQCjjZEcMxWtjuEgqv4MF9vf9E7ARHy%2F%2BZ4Seo5hzGrnBzswwkhPPDniar1yrhJnw%2F1WDJEZr5h1JZ3IWX4Qgufoj38JshaweZ2kr%2FTyyhEyYlEF2ltIgmI43fHz76gy4YYqw0%2FsJ4sw4RbKGOuh3WWllvZ6pD82XET9Vutgvabi7cLczSZkohz%2F%2FDp5ad44Acicwufnyp%2ByL8L7flf&X-Amz-Signature=2e6a62d8b2a773c49a71e3ef16c50c7a13f00e5826fcd692e227a289a9f66d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633Z3LN7A%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOckTwPlgRajC9JLsWQvC6PwRRk%2BGs9WUmpj%2FghT%2BdfwIgMV%2BzolTqFrSWPqk0ZDYzR%2FK9R5RkpM81afmg4gFYj6cq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFddH7v5Wd95st2tyircA5rjmHryD8em8zOXlo0LKbHntb6EKZZ8ZTcjPyYjh5SUMuzgQ0P3K3uhUpn2jtIC2scM1Ve0TGrjfB3SxH21ITpbbFS6pi%2Baz1AkpYICX1Et5ljEyLuAVo%2FZpewmzYj5N7MQSF6yKU%2Fmza%2F9K4MwwNdcR%2BJgbv%2FCa7qE6v8eBeW%2FgFnOY%2Fu%2BVHnOI9O%2BCQLKW8Hpe%2FKWp6nNbg3IWVBk%2BqV96KNeHSGjDoyu7eFku23HFMZRQ29lLskSYVNQOTlcNI9ok6HIRi7XrahqLEJs%2BqTNeXIoxUWmhAWc36zkXzrl1rVePQP0nvuJKqcvAQcEZnBd00PNyKfR3F%2FK4jMopQzXkUAiaPOKfpJoYS%2FKj3mNpH5OYyEY8zHGp3QBShHp5DBzm%2FrXQz0qn3O9iSps4eveiSktgpxMaPTYbjwWyy4WQPzmvFvdLhybYBwtzvtug00CCF%2BdoysZpPFrvjqbF8pMfRIHYA3Kg7m7jLQDxiRrT3s%2BfTmUYPmWpF00uf4jrFfWssJjdEFK1ID7SdatKma%2BCoM83h1m1HSFJsqUzAekiA4axFnBb8TXWyGbcTB2PF0l4SfKGGWm3H641RXPj8TXbrEpX3L6okyV5ydgjiWQTWyxCGpjBo5CONJ7MOGG7M4GOqUBm2AWiA88oxzP2IBgQC8scGdAQMnXm7G8GlUuRrmR%2B8fMoG80Mr6TbAAMIuR5aSI883F7qozVXS8wIkiVCYVB30KIxhx4GihfkhmDmmuxeqUAvHrfU9x6rvNls3HOAaNXwgfV4q%2FH7x2lYzCx2g6MzXCWQhG9y2HkIo6xeYytOYS8qxF7qEzV1ddud0CwAnjT3OztoL8NMgYWOlCmqLd3sYvKVwgs&X-Amz-Signature=4be9ed8a2dc38ca2019e50ae0fab5192e567b736de48e782df47f06b7610e00f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG3IFFS7%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FnCExCOxRpqFHVwe58mS2RE8DWuW9aDcAA4TInd6dQAiBVEr1vtrq7swZ%2F84HCp9I4PF1TNgDuHKqeAQca8qsMQir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMYRH79ky6klChSULGKtwDRTPGApmqktDltbfllWUwxj6KHi7vYlrloMvyGkQDhgSO%2FCSnnnK6P4NI4bfu2uzLhRfoPWP2mxRzGevUHMn24CQXfY1sJ7et%2FWteFhvNFwOjDDwGV92eMX8kTJeUo5joCa5HwJE1TyxNrtkx2pXLiFGq6ld7tTfeCIJRBiOIQF1ZAcqEZZmUjkzI%2Boa5NtxB6NsUHDQmjsUyNns0iu7RZthtVYaVIitxPtydajH%2BesXFscjs%2F1EcEBXR1oILXzNgQx2Udhnv3qj9m7UAUJzwVpOhf7nZ%2Fb7pl6j81RUx8GjSJwZhBd6%2B01LhqYo1LiJ0EdxTycIYRf%2BQDOgxlS2%2Bsc90lU51Jl9IeJHsGAKtfm1f4yC5rXeaaolx7icAcEeIJ11%2F5ta%2FJ1vI6cRIAPJTvdA1PtwHh99F12sM%2BihM9y7K5zAmRTn1WBLqUPRIVyQuG6BMLMtWXl2fLLz6%2BibjFWRVybnYVsm1ChgCHgEqlqFD8o8m9nL1G7FLQ9Xg2e9a%2FFdNRnUoNSfVtRs3unfMMoSjGGHgR0U%2BtMyU31vC6sYjmzB3pUZphErSK8pH7uRJuu4wHbZokE%2FfAHmQ6LkzItADLyDBcVbdCIeVv3dfYxBKBvHkKq4Dh7gPIQIw3IjszgY6pgF7b3lfGi4kcBAyJFkIjPchhQdBREOA6YLiWAjSV7kvD2wtYbgEK0x9cmzszOO5JrXQPRe4vpr3VW0y0qbOPES%2FpBnrz4Gl9fRU%2Blqj0s%2BgKneRj9C%2FDj7Nxl1gTXZ3PjZGvIGlLfHdbjm5pqoctCBEB2X%2F2FtCCMJl4B3lHyQ%2BzGlRqQXWEeSCfFQOfu5WP7%2BV3Ozh3MVARLixWmP%2BunZW7rcu5pdo&X-Amz-Signature=1cba0f9c82134996730795603dd36bcc226995d7385ad456bae952aa9f90c399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

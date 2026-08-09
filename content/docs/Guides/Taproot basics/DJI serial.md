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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDHOWRP%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHM679bOBq3BeIePkVA3XoHGYdRYBO%2F8GfCrS71w%2F7K6AiAMF8QEHuK4mYKharSqkJ3AGDKXD2ulTyWhmAo4OXkWaSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMXXvCvv9OaIh3tq6yKtwDTTJOmLb5F3ppg3P1Lqu1cRpVket0gP7m%2B%2BtQKlWlGT5uZUiuhslaAdlXcdxc4RNsLrA%2F7aLkWNQwRoCaDE7qkPi%2FYuSasAvNnVdRgRqLsSuJtqA%2BvCmiUPCHbXl5u237CbiPgFBTA3u9dOGzqxa77KTOVvQiC9X%2BYnNM5ACFjshlqBj%2BSo4lzE8TCu7VD%2FGXHGd0uZ2k5mMS0yi7azF70HuF3bNuKp2SX5cauJ3KOuc2yVTsK6axPTxXsgSx%2BPdHPsqyRvohCBkH%2B0kuucPcvtV2aTzU9SBVOSzlYL%2BecxmpidDt%2BqwYT9aLHf%2BaaGpyRAon1G633Sdp6%2FqQzzJPL8YvjJANlWOMl4uyR%2BC1dpgQoLA2PgDKdwHQ4HZOJg89SMcldgptD1t6XdxsnYaqEj3f%2BkI5xhxX4s1iIh2DEmOQQIFSJugPkDty3irQcJ7qFiGARO9VHSMXf0Lur7vgMyMKPVjfTflNGS1lfrDqAO4BEYGl%2FTkfV6385Bu2mAsmAb%2FM8ab80SPZMMasu2pZPa%2Fz6DyUNdZi8sp7y%2BLmH2uw1OLFXMUKTRmxEzxOLgvx3I4YjnVA9VlkrzeIwyprS5YgI26KL%2BwdyM%2F%2Bjq0%2B8RMEk5H5ukCXXMBka5kwj9Te0wY6pgFCfg74zNR8nLeufLkcz2WaTEmjfR3ZDPmyPKjDluwuT5L8%2BAgCZf%2FEvO97S%2Fo8YiB80AZnN4jT4HlJMakeTtayUuY%2Bu4V955czNxWIlQDC7TiRy%2BoKAyPPRJXY5GUL%2FV4EwoFPFVk0en9zeeJgRAg%2BKjg%2BUxntdnN7M4LYnDnK2v8mDRKfxdSAgdXm4CitLYs4INFhy8rWyLJPjxZtTU1xfsAw9VTr&X-Amz-Signature=4e57b97945ef2d600e81ada1c7ce1d1b093123c504aee59b53abd3ec15fe4f58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQGXBTT4%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7hNXApxZ90DIJZY0gJKm0WDatZXBKE%2FhdlHgz6Wf01wIgHXuT%2FFap%2FnnksNVNZ5pQph3tl9W8UvXlyWu9mOa0ryUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOQqkYjkCJ8hvHvdkircA%2FsBgZZIYTRHQwo5vScJLX0PV6htKTUi%2FgKP0uKOw0J18TETBhTWXU5WZTY67XzKcLA2jt16VB%2FKXGLqmWteVczqIZ7QUELkSsf6KCWOGe6pEXgIkr5Ft4DpprD1vKJG6HuHyLCr6ZLbQWuOhz82IHZFhmBe6ck01pExWRWcvc7nL69TIKGmyjSlzO2It4si52HS2Cii5XInSTzK3DsE%2BxUQDD%2BT8l1a7Ct3lZNkMyFp%2B%2BZg7k%2F5tLCoUEwmpFAK581GrAyt3jsZkBh9KmsXLLTBU9lbCAeu5YLBPjbdVF7eu%2FNZ2iP%2B6UYXfc%2FnZ2xAtsIXogQGdWoAcXr7Rxh1crkPJdggNzZIUwgJMtEnwdzczOjq8jJwYh7S%2FTqw%2BoFjIhQvsGbsvUGxLldNU8knl33mkThMJeE6VpoWVK62%2FIa6XA0XOWtRibdvzv1REmwiqommutQwXclcvOhn8Htu30nX7LyMFZc%2Bz%2F7%2F18loWBaYz2UJITrqlCLmj3RlzPOJbEkHYL48jbF2mm78VrmHsEi1EZd2hJW3RAZJwgyaLV2bzHJ5ZpcUnJNMLeRAL9QE217JNvLQO2py1A2OYxOiktqdzFEEFFOEiU5fQZKNsgNWBRkZe5eT07WudTyaMIbV3tMGOqUBC7waUSBEujkmtqz33xXJch%2BtLY3fTzRoOgvxqF0GqTO9yvFzw6pMFXOG%2FRylwlTbcwzRCnW0GzfnFuhbOabLSDK52gUU1Fu3Xo0UJ51zdLdWP4NNbRg8lPU%2FBiMED8bDCeNJU893Pim7dLOAhoHkTjVwWW50kwB0vfm7qj7%2FqLL%2BBh10EMkTeEav5F52ogJALgym5T9xjvPQqgCy8NaC6VqgWvdA&X-Amz-Signature=7978b1ea6270163c127603c2c7f75d7dc4d23a8d86483fa30045d2c43ba14ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QORIJS33%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuCvcFrNY5ToLS6AEVSo2wNAd3gX8Yrea61G3TmAWNhAiBW2mJavZufJgWh%2BlA1IfW9BgKc3E0aq3VBzRmcvkJZoSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMIDLeGNUKCZ%2FiBIb7KtwDE0zAytbuFWzTzadIuMmkw5CJHDi4Ebikp5jAex4UIMpFb35s20%2BfxwrVW2%2FjtV2FdTuALrkSangVxMobDKpKE9b6qgn%2BRZfP12fYE9RMdWAJ6Ttjg38O6xaFgnVMQAhb3HDqk1Dl7s9HGTBq8oozaaUf35iwNh9DyiyBtclEy83KT%2F%2FNdgy3xQLKrdSGxflY7sro49IVSEm4l5wolksG3HqMwBbQxE1cUbgQfIBxU9mcPkRoZzkWP3XcIypexpgylSeK8n7ICK5Umf%2FuEFG%2FS6wYmSN7borKsGt75K00q1ktgno4zBFLFgSYmMJz5SjOgPLIHCnPfKHLxIVwy5fuiY%2BVVoJty%2FjoqKwW74jR3CAaVK%2BBdp8JenFIngpT7fZ%2B40%2FV%2FpjJWexXRZNH%2BS7krAg6d%2B6NZhNBhhdqTbpN%2FQ0PJ0Lu4oQ3bpt0XSnjPN%2BuL%2F96%2Bf%2B9xsBONGLUI2J2oS%2F9g0Ehkap4OOuJpEgnWiaj403UAWg7d6WKSk%2Bg3c1SKVXjT%2B%2Bbu3MEKBtLF7WkfJ0xo%2FqegmMZHZ0H6wen5xHaktVIdJZgsmZ3O3Gi2B6gW1JryLV1YRJDG3xhLNg7onW0W2YOoqJXsHwA0OCfvM%2FfbOBwhB9VX31rspQwqaXf0wY6pgEed%2BTk2%2BqpuzF%2FyzeQ0gDUJRs3mT%2BRGUuWRFLrU7Ptv%2BtEFGO6nlrzK15%2FXfRHkwjHwFk5bv%2FWukhmJuzAuqogdjoAeCmeqgtd3G7x%2BNgBtnWfwnyxhuu4UZsN263m8s%2FtOup9KL7vmdZLkfSP21gBPAS7wlGv76CQa5t1ySflfysN4RDukXKLUux5A4ia8ZuLYkykTRhQSCF6mbUDV8SE6dkfoNLW&X-Amz-Signature=e3a7e349ae48a616e8b9acc1f298feb630673b40461edf8c54d081e5be3626cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E7Y5PZO%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEeqlmIApk5YEOguAxTj1%2FQGhm5smGvF4RHO8c1vCw4AiAzYvYYSvIfjj2ZxyJe%2FlTH%2FbU6HZXEqWCAzpsLH087jSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM3x%2BTF81ADuMT1LtiKtwDFr9KbVlO7yTfS%2BSMzG6B77ypLqyHBS%2FYGWkMCdsxhK7BrYs2TAo0%2Bg2Z0ZlOFUOu0A%2FvVc5PidHp5ArtktqsZuklpO389fuRZ5VZSQ7SOfIYMSshpQqBze7Pt4yeRH1SFdmBMzTDWSWWsC3rdgzgOvKsOdxzhb69xcvQh21ar1p2rtaHK0iM2QrJOkgSg2c9TffeWmBh5n5yOVNhtSglfH4gVpwTIt4Hf97RL55nb6kllEHEh49xhmtdnRPRCcss4sclijaN7Cwy7URNP%2FsQ7fq%2BsuwIRe%2BVVnKJ49VO8jtDrqrHYv7OfJ6snHcZ1lSYlLHqrwREwjTKXjqgyqR8tIkWhdAR%2F33SEwQtBy29YNS68BZAtV54d%2FNDiU4ClhCTSg%2Bl9lqc%2BilEcTuaV9I%2B0Qqii1WPRTiekrZkg4bGDRlmkt1miSH3MTgFangcvfY9kAcmDHx0oyMWegAMhuLQJhvAzJNqeXNoXOpvwZ41QTngQE6oSmC8%2BmXAxkHaf%2BLS1mBbGp3EDQjl0EFHW49Fb7dJF9GkEbDfSVzfIQx3lyGHk55BAby10JvG0l3TpKRUGRw86D1VFPV3%2B8bVNpX0BBLXqDGxNFaItVmITlBb%2B1bawK%2FLNZtrOdo7irAwndbe0wY6pgEAlfTUFb7WgRoemDyHMc5JoBqCOGWlVSfrA60m%2Bh3aTL74RRkhBmvSdHDEBGH4bvZPyWa3UYNsLR0%2F4U1YBPRNNr1SnVZQ4W7r%2BCDvr1h%2Bl48wV9o1TXyH0qbmZIE5DI6ciHfqSpsSI624ZdbrQ9FQQ2rbBFam22juv12%2BRgZeeH20Fsr82EgUn%2FzCAvgo8CMQ7krGdgPAiBO4lNjemwqOFowrf4ta&X-Amz-Signature=f69f65c116ca25a0981de8dead71b85ab5714f087edcf2c23665af768eb5eda9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

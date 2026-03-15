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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDWOYOGT%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEssmmepf46ccpz1kcY5jWekb0XazhnK2HYLhMbXnQFSAiEAtp5tG1OGKs30kfYNuXxORxygIdopdJLELzYsiUAmaDAqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCdQjs2D6nU%2B%2FbPDircA6T7V7iyYUOYJZnIfVSBM%2Fji72YgTpJR9t1%2B3f0ZbhWDDaKsBaTem88pwmWZ5AscFgMb8Z3h0w3s0%2BgQGitUCyWjHFl%2FDLusmhqRNlcXNU9%2FsQKaHjnRjWoPlBI8GWeL2ooY2hzKoDC0iGMDind9r3pz%2F2fa2r5xktlEKy7I5IHJQRFFV%2Bhk9OF0odPKDzcSH0jr1m8AuXQLgeAc1cCLx0BjsE3%2BHReG2NZO6QM%2FZA1Cm1eTC9SZWfxtAceMX0NjYnFGceNdEv%2FQKVdFTLEkI53M0RD7b41KZGjs8wjWBm1m9oHlajH0k04r%2BN1lIB5FB%2BbHWee91TVqmU8GKiQKLtg0n3vJvP9ItojH5%2BJOKqJcHljpor%2FZY0qmKr6SvU8aizxAc5aJApe5qzhpa8C75d9IPaSzNlbETYXMsFZMz0gpoqfHfGsYfpCSjSqsPgJRsnayifjJee6xJpg34oqKOQUaK2sq6jfEL87puzSXAGXkXvxTmlAXmv1oL8%2BXuqahwDxpAebSFDFOV11%2B%2FkZ0Oj5gXlP0EHoaOeJVuNvP4pFpD4mkgzNnauXFYoFyx1BivtleVxlzoxSDjE%2BCg3KtVlQMAfMkF0YlYUWzHhvK8Prnr%2F6CpEPsxuzAOR%2FAMKmQ2M0GOqUB7Usr4Qie0y7YI0PEZ1NMLVB0bTNg7PancW%2FSpFwt1OxRwNzwvV9XKBThX%2BKo97FPJ9MY73cHjLPzr5lJBnZynXGRG4Tto%2FCBhUo7fShEnkyjGeyGYds52kE9toejNy%2B9Sdz0mLeKFCTbSyZVZBOO8tkhIx8MM07kyHFjvdGEW3zYv%2BYVw5riRYsZhTwZRD0qMELV72ODrCfkYmnpZiSipp9%2ByQZ9&X-Amz-Signature=f21eaa592de2261ca250b06f978b675ee73d3ca354b79e8a26060e23da83d4aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZYIIAD%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdz8zN6Ej6y9y9MOIlVUzjWLRm05MdFg19UAXwR8%2BYJQIgH2%2B6R5HLwx0yAXomZOEhwPXorL3t1LdEw1b%2BL9mYTqYqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEc059MbwVBGQxcmEircAwBG2ioFtCByOPMV6DzC8BUK7ThftRyEoLZC0DMP%2BjBRFoiF9p2PM1kcD0zVBWlC%2B9t%2FlN%2BT9vtSZMvFqKpiLnxfshzJWJKqpXI6dhvXrT%2FQRXnQHLN%2BjkeIoaLSg4a%2BaZkcXbZhujRtYGmdncyBre1R0Ig19N597niyKCw7QUiS%2FYbAQ63MRK2Ogz7%2F3azGJzyEyfMdwQB%2BKOknG7w3hk2i7NehmqJ%2FaMQRg9iCmqZMPNb1SQ0Pds7k1ylUmWjlRmU4e53PQL4L6HzED%2Firh%2BDKVC6uczalzXwIQ%2FXKU5RWw1%2FHcfPzVE3JDTV3X4IHQhefIWnxznYWsp9bXtqO%2FEGUy6RsBtQRfESgOL%2BRsE4mapZ8UnchaZq5qkxEoExd2LY26BV2oia0Qbg0AAqwt87wWuRkj8XclMIPHXZp2XLnBVxaIISv1ZJLDRdFOCHJY5fPE2dGXPghw0KaeFmvPjL5m7QTPF76bs7W2ppJK2Zht9zBj8QMh%2Bf1u8qC7%2FC6gweC%2FLP%2FZ4hxwqIXg1G1Zj0l5fLmhyZhEJQhpF3CNs4GGFmulKt9Tloaf7qH339VHcAVPzfklsrosbbFMUVhUkTwAO%2B8rCMtOZHIxEFFVrFKu%2BAUCYndX62231twMKuQ2M0GOqUBSC%2FC9kEdjrCDQX2wINWjfXAn%2F9Ikew2VEfYV%2Bz5qeV02ks%2Fg01OLr3sFIXKQ3YpXMZyhsumuqpadGWi69DRz2fGTCVwFleNIz3ocPAy9XHeEVXou4sGCowlOK8mZ492qW%2FJ0aElawd7WTEAJawFQlr2%2B5fpIQQ%2BE41Td88NZrrdpLSfF04Wsr14LUa4DLoJVoDJ2lhnE6C0nZhUHHYDZmB%2FGSLCd&X-Amz-Signature=8f5cf833ebf5efa824ce36c37c4cb87fe9a9b2844110ab1334d64656dbdf7b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUFNCKK6%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAT53iG85QjTDMsbHLucWPZfYuOLBEH9tWPCGFLshNEwIhAM3676t5uG7LZk2uLTLOhboFBVt9N2J3qPFSr7qOC%2FUDKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoawLChfk%2F9FZWMtwq3AOcSDn6G74o7xMfPEdyfo004jNq4WFbILAehvBhUksvuPU2vuttIdLh1vAICA5ujbUg6Z3BgwYqnx%2FYxegQ5v8k2N2mcGFbk1Ana1zXsg2%2F%2Bp2brrd1rXBJCHKFoNy00dGHuPPTKx0nsidnkXoa11vjO0XFearAoEXTtGPzpUWh61%2BGPYbQcyfHkVqKST6tTEcL3PgcLow7CbrNZFB1%2FHsY6hHfr7yTlw0A9QSQJf4EsItgb%2FOAANGAsrE86NS6vqA4DBKyXaSEwJvkZHMTbpQLtqTUcmDe3pkUjCXG3fdvQRUYq%2BqFgOkAZ%2BABKKCDVZqhJrIXB%2FTQiWJT3AbPVzF%2Bpx%2Bl8R%2FAM9hFtKyw%2FB18dlfjEarcIClyBVMH7tkssuOlUo1LOnknvGT%2BiEKxch7zithZ%2BMhkXKJAKUZ0v0%2F9wjjAwmKhQka46l8Wr%2F5tp6fvIo2kI7xR%2BX7dHVuSZdLOaLFoTsnSVx%2FaF7%2FSdHHurgca6LEvkFtmPFfrAHWRtzJQt9IkAqTMG%2F4Im3dwCvecOlYwsz%2F9LBSAa9AejhyWJmDPl8K4%2Bx3qhRmC5ZlMYdyAJjv7yakx1pWq6lsdBrSzGUfg72KcUF1Ag1czeJM5sM35xWp3hHumRpxHOjDVkNjNBjqkASGS%2B%2FMJ8b0uvKDWbdHmy0%2B%2Fj3A8DEfehJTJMueBc%2Bdaw4WsOcZjvS6y%2FAlm4gCTcpvb0HuaBg2k%2FXwXBraPNyNs9jA2ren%2F%2B0%2FD2UI8CKWkO0Wxyty6%2BapZ9VOHDco5wFXXPPVn5%2Fb9DmZ7XEYY2LUzHIMejDqUpsHzOfsiVS6ZstZ%2BBm8%2BVwfuL6HwMPh3xSNjblElUUEAvqBZyOAWdkUYdKJR&X-Amz-Signature=4801fc04be438a78a731f80ca5c27ceb404f960f91a2bb1a7a8fc053ace0cf4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NL6W2XI%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDj73ry7O6IlnlLim3gUUPXjwiSH%2B3t42HvxmiKbjHuXgIgMKwJq6DDwg%2B6zEQsgnL5SDuWLBDRBXibj1hj9Ov6GysqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOafIen0etV6lxWAECrcA9Q2iBQUY3Q5wp6GqYu6Okgx2Wobnm6Br7Kr5sNlLGYOZE6IUWOoXP3IUaW%2BgjfCJhYgrxr4%2FZ3EvqvGh1tVoZGzXyRdtP7zn9qSEarnS7cqSRgs1oxR65GEKrJZqtTRKtk2%2BmbaxOUTtkopQSdyNoqtHSk4hV6H4gURlfUHUVa%2BCH08dSr1p0A8yNquZSqC0G9OZ7TWyf22JLgwEqnZwR%2FYr5O0l1vZKqHwTzV7wLulSC0PoIPeD3eT51SNrjKFF8F0iVvXPjB78RmPcHN8YLQRSRCKCj5NhJzjV8m9pgo4MdXXjHVuDTlyCcnmTEBdNKMF7dJLKmB7FbNItvRVULGQfkNbohf%2BMxWsIEsaWq0Sntae7YKwOx8qDPWkKjFnvpcG7a7kdX%2FO37wgibVEVBPQLYK6ebasKeqXJRY7d0uS0NS%2BLbr6XtsL4a7H39b7J6OnVj%2F0wPGLs3jbhMYiktYjdaoACEDpetCqZrxlYrIXCcD%2FXMI5UVXK4%2BwPSAKb8%2Fd49ozDh8gG7U7rtcxEdtOlaSXtXPEzDbeTKPNR2tLP6R9dxznag19O1XfYYghbJEH4mYPACNa1DCc%2BRD68nw0w3JVsKgtry6khSwvBFm414jEnlOMK%2BEqe9WnwMJaR2M0GOqUBh%2Bo1eOAZjKeZ%2B0BcrnfXkELKiL9D8LLJHTDksk0C4Zbm0kaPlY083FF%2BYXhaGOS%2BNnrbq8eaRWvWH%2BQ5xfp2CzQ5N9ysqFxjjsPH6bWzIRV23JFT%2FW6oMLST27q9zvsUPX4IWD5RGWEqJAve4XCWKCJd%2BJ81hCGgPhXZhCsqE2jjbAIH6AgpqIxKPzd6qdosQPOoOrP2I1pVlP3YMeVHZjAm8%2Boj&X-Amz-Signature=b7d832802db0fcf8904b21ae6c94af49254efcaca6d7ddaafc268202daac7eba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJJLG4EF%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3PM8IxNompDrctzVQem%2BOJKgFyWd%2Fk4%2Bhf8a9bwe6IAiAPj00uNoosZED5I6lVApvdG%2FF%2BLuVgFnnXUqB6v0goGyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu4xdSgyum9L83oNhKtwDxN%2Fbjo4SPtooJs6QwVlvpKZBKHrngHd4O61XLjnz5kO47lrkezcF6y7LT1ijkn7YOgn9wi%2BsteYzFukSN7EESfPJc86HKm%2FskFl%2BFe5ifT5EExhsyB6K2gikqMFrCzCFmjHKsG0j%2BBdtfSUDxJgIlvmnt5iwZ3RWPMKCytXG4JJg9FtqSo4iPAz7dge0L0nXSMcfneJYimZWwHoiS38jJqgapKPcbcl8IgJgv1TtPx652Bq1Yd261ysW9BdePXziQj5jyRV22bUXzA0LE9aHLx%2BJdzxyJ2o86a7USOt1yPWKFbzDivNGQGXlgquG0qvlGxtkFtFAJetLIFlD1WSFKCRB0cw8haewszvoE6%2B2xzcA2vwMs3EWlYLvRL8f7HJYdpZ0QBI2iCNYAMHanbEgMxl7uRoWxenKx1ks2hoI1gnDLuUXXtLVhAPssdFocGr7CgL59%2FZvU9VUshNEal4c3fnBTBbaAwbU1am37lb%2Fj9FiAmxN%2Ft%2BuVmIUvN9LFgvCB6rwPf2PcuwRETRqIZKabpOIcNH%2Bmt8x0wl9d%2Bi7XVY%2BPdERZaX8dQB15G91VCTxSMuLyTvRLQYqKmR4on8Dam47iK%2BiVCpXa4uonN%2FDCVcl1118is1sJ08C5KYw0siSygY6pgFlMo8wW1WFXC9thMNVwTgFFQOHefxaodhieMVXsGvnB2VDPiX8D3TRIJz5XvjI2ZRAeNN1oowM2oIXdyob%2Fhs2zucwJytIt0v4EefIEZp%2BQBJ68XQBZ2CdcJjdf9ZkPVJZ%2BHCh6AhoevWkCrd9iCejiQH%2FOfV3T8WluKqVoHA%2Ba%2F58y%2FXISytDMUU8lqvJxZpoLoyiF%2F1OeWdySCGfr8cR%2B%2BrYEQEf&X-Amz-Signature=b1e2641663d707e5228666233bd16ebcb119dd10f0bc084353b14a94e77106d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2S3PWZB%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuVj2rcOz6g%2BftbX5C4QwiD1sAF%2FepLfo0%2FGZVgMdCMAIhAMHLwVvKqeuAhlLMEYq42lxwvYkn9A13PwHVgTpPsRUDKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BZ7Zw21q7089W5jIq3AM21kcPDI8MahC2zZrApUtS2ZanInIIayW2Jo6xO4eq1knY9AR6BwPfrtA9TKgSBSCDDELhqPtDH9%2BkUmKWMqN3A6m9HarDerPQgZyOlViHOAJ2phQ6sZ6oA5p7tstdWD6uU8H2cb6ghHj0awnO1nKN8HxtjVanYglMWDQP9rRx496pfLgCqVt9HBqB7jgVOlGqUVFuub%2FONZvhcCUeJR2Xb8DnbLuxyV9A7tOrBeOFhmRsZSo3RMbKAkIBsPg13EwL1ANL8sLPbuRejLPd%2BzFalC8QYCX6cGrytcndxjJhWDF%2FFLFQWkG6MxxRFIUdP16zkAF%2BuJSNvfyhzlkIMm5%2B%2Bjqq6%2FIvkHMg1PveCRYeTY6HmQmrUtJevtnuORxWdjFVb96OoWPjFdYFslDq5NIeFTgf%2BcSjLz9%2FJepqAJuU12Kt4iaIxW93Bpcz3Mlm%2FJTs%2BoPtspS%2BIZn%2FEPG4kgd%2BWCDqT3BrRIMwqjmhM0UA3oiBdOZXwcHeBouTJ4fcuiMcZ2qV4aPT4n%2BOK5QNnsh3jfvRaKu2baIqBDWgUyxznBYGLDZFNHvGqr2umdBAAmxEIY5DbkbzUPEHGTE%2Fn2tw3qmLMqtMYAEPJadi8qFYpTqbMSvuitEGuXDjOjDUx5LKBjqkAbDNaApmUrAHNf32DXfdGGIJ983Hy74wlts5IWUt%2FnG8uqYPm1MEJWahdEIAuRmnfCrdwl6CPgqt4Ab%2BXhpB%2FiEsd5ekmMXOLxnNXJdTCSYuisxo6naGBcHuZ42utGGA0rby54s3kbXH2W7mL0q5gR7jWvJT8pcNmLwK4boyUdbIrzqLClQ%2FTd5ZXtb3z7FkLYCHRUcIy8KiFu8RF9FKNWMjzgzM&X-Amz-Signature=fa92ea52cf56d93cd4b2e5d7112172d8a4a9b13afc6ccd602be6b535eed36651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZURU7NDN%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwpomqwAsIZ9F8Mk8TUtgszg5GAg0w0EKfzTtWQO82JgIhAMQ4drBeq9olxOTc5SGr5mnoeTqzV2cd3eZSDXqBYFiLKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igymf0cjW4qk5gyZ4PMq3AOOqEDzUzPnTW66kSs%2FAnldP3VFsgBTBQ8tea4ERk%2FZkSl%2FvG0wW8Bjp3NFiWOJowkW5m4l7i5IQWHUkIxc%2BrjJVWxcKvBGr%2BiZq9G1NfKm%2BpE3ItRVziZhifE%2FblOxs2hnkj%2FOu%2BKY0A9TfoD0bELx%2FaVkU7Q9k%2BXNFKDPwaLu0kOa6%2BMnh%2BaN8yDCwHOcXP6DXKLukMX571QQ4v4Hjd8zbDF3mKoZIjzX%2FGebAymC2hHNUfKUeIO%2F9hw8rJveq1XkC5osdXKPQ7x3U8V7ir3gRnsXAfiq53oRT%2BETle8KeydPw28T5ugmuF2L9bmxhz5XgFaugSo%2FLf%2FPj0sJc5E71wXGsLeOf5F%2BZ%2FyHcezoujucxq%2B%2FhkZwzwzYiSETkocrWu9iSRT%2BsSkcZsTk%2F4I69%2BnBQP7YJunlVDbJPQqgsaNbbRCll75zEYaSkbryixJXXnYaiRZofqOFFSNocWHGmlBF9ksk2CCoFvg%2Fqs%2BYX5Mo2Kj8Fmm3TTLet1S4mw%2FxAEyOyY0MqCTQnKDxDevxfpdaDP2v4OdiLsV13Zk7soEaVsgIuAyNjMLag88G7%2B6iV2kkRM6DyBLylAqzFafKqXSdRmcWI2CxUvrh009ugL77XhlgZcpcKOe8xDDayJLKBjqkAY6sBIsxGrVjov6IruEF1A%2BwDFqodcI2VerCWOTRTm8Z2F6xp%2B4VYqSOtIINO9ueUFPuld9jAPA5xbJbCZdEthoVP1gO6TExqHBRv4shf4Z2Q1lu8IxS8oLpxmGd9ZCxUlMjUMGQz5De29CoYEG1i6UzyObfVchUQSGMYgTP2WJ11OgKj0jwhRbZJiLutO5YhpdhSmNmy4MB1mFW2GmWdRKLU4r7&X-Amz-Signature=c81d3cad5988d4fc5b3fc10d0f4d8ccf6c41035bccb0995228cace8bf54ed007&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLJTDSO%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtPxdh7VoodyIW0pBbmNTfL4CtPn9o1sCp%2FaAjtXdgjAIhAP4R%2F1FBJX0uRGjcnmDvJZBIXCqkDaLMM0iehNfBK2CdKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqiP8fnuNQsSkfATIq3AORFukMzGBK%2B5%2B0Gtg3btS%2Fn4NHEbIRuQk76%2BEfCtU9X6U33Z%2Fqp3%2BOVlxTt3%2BMtI%2BbR5u%2BbBH7jy2OQkEBrogUcmliY%2F7XblhgEBKdUF2xd7ZAjLyO9loNcmFmg%2BsESCNdJNKB8QFTl3QKtsEzXh2GfUDAucp1O%2Fk3bpzl3jCh8nJ6xfJIpGqBiW4eL6hdNthK1fHkvhvGbo6GyWhTlCyYcT%2BdD9hVDJKnvDnAHEUylosRFznMN3JRBb2BnKmtl7yUXivt5gs3iVFpITGbOr5pkJvhozILQXELBxJMTcZvYXcn3STClSnSilV7Tnk51hMRJmAfqrqMlpZrRqmr3TBETsxqBKtNNqzNKbLA20xPujNFM3Ez75dNN5YSgsioVWp8N8AWAxPc9VgXE04D2JUd94j6vT9fGfK7EnKlHGyzy57cYl29AFJyvlFbkrxKnhhgNQXPiz1Ab4lZq638kq3aVed%2BS%2FCXd0AXF6gBbb0z%2BU4S2sXlljyOjfkIr%2BSMKd%2FCJQC1BJ5rxUA9QpNmeJTvSj3JdrV1wmkzLqFtdgUuUgcYaoHeZqyD3L3dpBlIZHGgaiAAmyRr4hIGW66slgVUiNyOVeCKP0R6BpsEZ%2Br49YTy5ko4A%2BETS0EIeDDcyJLKBjqkAT3%2BG6IiNWwUm83ZcCMtG4l2IEovH%2Fy3sSMGrvjjSZ4I4VQOmmMG4bxILXoKlAY6iDRfHE3fZWbOkhhfiLEKKaA2StDjcH2E%2FlkNzbern0M5JF8xwZlwiyonY3SIJLuzGZdJbvYRIMOBo1fkCV%2F%2FG%2FwWLVPkHaMFI%2BaBJHLSBGXmQgj2um7SobVYC8PklgZQkbaSPD2yNCk2aq1od0DjsrlHVvLU&X-Amz-Signature=a93bc42660c18c2cb91d55b5f977d3f91a2ba6357a0734313069a5be2316f43c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

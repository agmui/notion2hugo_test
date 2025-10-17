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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VZ4EZII%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIVd3sWOrdmIZ%2BO2DozFW1iCJTxBVtVuFzg0bUwHvhTwIhAMaS29s5fSuVbiVmmjngpVTDHefsAbmgwXdyeoG64K03KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOGlHT4yRRasrMg14q3ANqoC8UnpPZayN9cTiRdovyZoUM9o2LdgsWfVxARWcwp%2Bk8ekTQEdhz9zxiODYxCIohMmBo9SFSAuXjUWGHKMyGsJGnY76SqBP0HcvqbF5W0I2%2FzpxBhkQ8cp0tBuyhxJaKy88uKSyuwtzmunroRbSJ90YM2cGSpQQPDoVKR3qUrGSaQGtNanJVZlLxFD6ZGqt1eNj0dnAjYfDJoQeBvPUaJDEKikSBJWRFod6tmAlKVRK0%2F5RMV4P3dKWA8a6bVR0e7nIxvKRcg2my%2BfFBtPDGYTynXH0HyzYJxlUqRJm8eTq2L2ZzXu0hrUIK6U%2BUDfpYFWcowFnugkbsn7%2FDsTtrFDR30RCheDVINJ8L37A1pocEfSEzLuM4Hco7PW3BUstl1WTeRXeMYrskL4CmRxT7LkERyM6VSSX2HLh1XsV5nr69WDafx2CLFTzQe3eUK8MxjA%2FBubqOzUT96nmSo6qHNRW8%2B%2BX4aIKSEDS6p%2BSUg6IGDQIKGMiZMk%2BDG6Thf4KhMjWKveQupqGXvphynwGco9Uwia2PGcijusGolmVKLPTDyHZ32Eq47dir%2FueO8ZO1TjikDxKFJF8e1j7sRo9G3crU3v6OtJ6bLeZJT5gZ8YNd0e%2BnIV5Z90KDNTCLkcbHBjqkAUUWRBlibvWT5fy3k6Is67U24%2FkOqcRXeJ9wbHPcx8waFxjPhRsxiVV7SqRP6BGcejcr9VUPI%2F1KLlJhMiVVx0X%2BaXnIHkMI%2Ftl8YjLnmGebzSQ0%2Bf20MQLtksVJkd%2F9cPu0qnyiNP0welzhoHQUVCE9efyHjK8krpr%2FgxKW0Yub7OdfQaeympBYL4zb5RBwHcoVCufScjdQql6mGowyM%2FTOkE9v&X-Amz-Signature=4192778ee833ee876c175ffd99e6fba6586578cac6d0d9f1036eb6ce7f0c9283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BD3ZMRS%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICszG1t8yUUvKnskT03C2f8usypktCzQ3qR%2FSDxH7AMgAiA%2FY5AKYsycVosCN0wySNLGlQ7aVnhCvGhOCapTZwoSCSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD6Retv2SKMKXi%2B3LKtwD5ESL28CkDxKkLxEd1vuwZZ1t9S4a6sTE2mEsknq9n8dtFNCzc83Pl8ymr9Bw79CkpjGMvU2QSwWBONE%2Ft1H3itoaJWPBPcPoM3EX%2B7iBPePmecjwYDWU%2BrRVK07Dm2Kl8EB5%2BIINhN4bI85D6coKN8TohfAKDnHdmi7i%2BFzP590cvWQwxCUI82GfspJqWV51fkg0hcHXT4h0TdVBhxOMqSzMGSn2uaxUEbrDWMcPDBk%2Fb%2FplB1zlD7cHG7nWfWFU4Z9xCCnZxChA1pfHxlUpWUuJZFTrdCH0a7FJZmvBOr9GcDW7VN%2BI9fGFb2PoAzRjsffHmb%2F5XrV95GB7OWm3gCH5ecSCNIl7kKwY%2BVDV3QBdDPyXrNU0jINQQS%2FbZagJhaw2KyshTNTykoUQwiyXCkFnfH0S%2F%2BX02nbBFh0njd6PavJgc62JQ0Sc8DihnsiCa81Ff6dqPcZRSyOeSJJHKYa1sRaDPpZVjg7zG6T6R8TIJVzQGvtm0zRFHhpSFUgToIQkbJxCt5EHFJQbAl0HJIKo33bfA3F75FRTUifzFuyn9CSxencIVF90ePQpVLe6DU%2B9AtEzVsQ9Z3X1CU8U8KDjBG3BREnaUrZNu6R3ZfViUUEsYJtlMMc8DP8wuZHGxwY6pgE2xrGtcbHaEUm8I5wEhNeoCN2inNGMXGro7SdM6Q5Cz3tGkprsQCg6MDJVqJHZGZwfrwD4ZsYxWRCT5%2FY0Ypx22wYbfV3siyt9Z88WrZx4CLDTOJ%2BeLnSsGEuH%2F%2BVrE649uUiF8BhCrWlQc2nEOA6apdQMf4ELaiTMDanZ02BJ2IjcXF%2Bc3JUHiFjRx%2FFuntezAVJAPVrW5089Y%2FhVYtNVeoiICl9P&X-Amz-Signature=a73b9c007401af34cb7fe8a880a15904b6c9e47a188ea376eb5798b75e698cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T35IWPUN%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP1wLbFIdehrusyyRMpZj6taIXTv2M1Ef4p7NVH86gWAIhAIQPDJWmnOBrNNFfI7YgVET9k%2F8UFGA9wrr4Wh8YvE2TKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5pTb2jK4tBpkSIBsq3AMgIxV1U6Um02%2B%2B3R7rIZoExX7S84kJt%2Bzp6fFhNmnpFHVcd%2Bo3OxVwAiXfX0oJH5AY5lgB3Cs4QgC6G0uPYKmxEra%2F7bfUTlZtmBQ1X9J2wr07WhBa7p75gPspDTkp3YjdK924HlT6BY0qo81y09uxRZMopvE67c1yhBIULgfAbgUyrqEHmmxza%2BFDRLxyQRm3Nkk681C%2Fd27g8yOSM4vGk6j2cyD0w5m257BVv6vi012RXIHfFVknI4Bk8Dd%2Bh3rozLY4fKPr6pfI0pnHnXSjWNp4gNdehvWjSeBdGXjhuE1sNJGH9C5cDDhEE23SkKVxHcWEiFEsIFOSD9reIefpdmOrmL%2F22i4tDjw%2F3QrVnf0reXBtWc%2BfvLTdQhPkpH7uhdAyHbU%2Bq79YnuPAFQyu7KZpZuC32tWgZvsJJ6d0hkst9jPVopMi%2Bk2vcj0X1ffitAZftYZ7g1U1ZcdIlBCApoq1oTG2HPuh2uSiyF42D0immXnrHGQgHJZu8K3B%2BSAX9AxSKJSJqF0MpDdHafJCUzNfaNabVRezKAYCRtPiHefCVegvYgZ7tFBMT0KQV9Bzkzti5i%2F5fePqgZiozjZHzTsUjSm9NGBMMKGwUOd0mEKq8EFjxKK7ixMK%2FDDnkMbHBjqkAXUPg%2FEmltnKlxinxyB3JmIuH6I3HSKqkCiSiB%2B2L7y1US1yf1w7ip3EM2Iacx8zOwLdt28DweMz5wFKKJf6dUlI7eABUjkUN%2FYWVq4BOyd6jSd7u6o8WF9vJtTVI3DFXfjEoD6eBuHxLdR5tis6nsAFycdhMOAjgTIxQ8kJBBk0nS5KbAZK%2FtY9yV2bZoz4ZMW8ElkeVQbn5BudBdnzJuHuR6xi&X-Amz-Signature=811e3a4b5bd38b953f227e525d08ee47ed6bb1a8001d23d93eb7208a1590aa31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC3DRTA4%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS%2BzKxjl5v1WqRd8PzIw1MQdblTot4iOKHZlobA2%2F10AIgRsocslhnvgE%2BU4BB%2BF6Nc8zz5KPViGcxq6Ac5Ed%2BAOgqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFE%2B7xPlTPwT5gQ3CrcA9MqdXcrFPYKk5OB%2Fv28p3LudrDWDqVWJbIrCkH6aOiCipnCorRrHUuEOJiZriuNeKNOrYvfagkBqnq5J2PzOybCfXcJz9s4egVW%2BZ4yJ7JJ44IJut2yd33R%2FPWMWirWfB7j%2BX4t%2FlXMeazy8y4K%2B%2ByP34VVnQkh2E8fIuZFGZ5sHiexgzbviKKVXbr5qkdlPaMVzGYLxUYPh%2BfxYlD%2Fa9rffUgfE6hOagRsVpNNt7jUNdt9dZwi225A3CibL1bAKl87lhNT2XGOqpXu5PVJUCzrwNcQ8a4mqyq7rsB7lwAEAFCXQ7HLedBkwFcTROV1LBpu4KCMVHBDG4e4elhawGa6%2FQ8mrbiriD5KMrXfn9b0a2EAsfWAFFIR7nPnVkMyi3%2BL1aAFpO1wQr%2FALHPykbHBKrzrPsC92724A8wDxEAxgw632M0IkW0fVidatguFG8btaeHX%2FXKAmFS4nvWPCWt2WEjut26jsutwF4N9IxT70%2FyhTzXk8v9etF1G%2BB7%2BKGmNQwXXazm%2Bu1EOe7U1wAFOrgde5hfNg%2FgcBYSKXy%2BEAP7KA4kty%2BoiPduL1KJlcd9nJGYoxOmYY9vxkixWZzVW5WBQclFceNItWLzvdg3KfZPeFS5ppBUZ4PiiMNmQxscGOqUBDhVlASe1doLdMR1tp4wkNGPXiNrHudy1yu%2FvyleHWm3fwGiRIxRCdtYIkHo97CPeA5i1rjneAfJfNKiJvVxz0nSxiBp%2BlekaaJo2MCg89yqZKDZNzU7JPBt7M87pE4IrSPqZT1QYjcc%2FLK6S4xixWMjrmH5NFrmrpVXKl58wEpYpUBO9zQbJtnccdPclXC0Tk5kpAwWKIQYHlO%2BM6%2Fmf%2FyRoK%2FzA&X-Amz-Signature=85e04999fecf34734a44cc0f2bbdfc9c5876d70809de5d5c28d2c869d0662a0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FMKVMSP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD82laIyPF4sMJVy%2FSi6B91xrD37e2kYfvavCUPK%2FvYKQIhAKgs7LVZC8Sf%2BDHfzsQKtE%2BNEUFjZ%2BKjEq84XFNeICnpKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy27z%2FUGBeu2eUBj%2Fgq3AOdbXgckUUO0kg0OKvpSrlkHRkO9kz%2BrvvHn3Jp64R3kWoY5kVp5b8ixnr%2FbCF61%2BBiGXUsZuQIQdZhxhgqwINajvEkn9mXCOsrnfEUgd%2BVzwqczlRCHOhsXFiW3r5ohtQxUrOPASatps7WU7Vz%2FO68NWz%2ByWHCZJZX00hUK3EfielAbDRMR2PP0OpqywUPbMrYgdSX7hPxWvywmzbQG68FsneFzRlNaBqv6lcwfePJqpYnPMvV4SsSN1nOTHwnOb4onIErHreyjb6r5LGIWlMBhku71VR76prBdunweSHvbiQ0l1%2Fp7WwEPsyN%2FEDmUdfmartNtkp2UV7YX3tUiJol777nW49uX8AxLs%2FgzX1M47CpNB41QuAc0%2BVr%2Bow3sFUS5PH3YDEG3BCz8QUT0AMyeYlxouu3JKoVlXmZeWKqftEyhl9BT9kQE7gElH681p6OEM2SBLnGDwr%2FYcKMOlwpl1JxA%2FrpGsTg7h9G5UZxbzBdBjTdlic7CDEJqF3z2I%2B1VseIUNsPG2In932ey6Nu%2BRkCtulL%2Fl69YZ3J1UgqOxITP7oUb5ZknJP5XjYNyZmPcuwnpb0IeVFFQoOg9Ov9AJFkwpBkYewvv2hI31EnCv08CK5uSBzUy9cPuTDq0NjJBjqkAUT%2BH1TwDK8%2FUu7v3ydqVF%2B9WCaCXkIH4kD2GXQHRSkGq6NPFCozIjZmfb7cG6zel5NwHx5zIldhAOofl2rR6FNSYL5GyTnNwW0tVfH0Q%2BSK7nQovuu1LO8ptnVVEpCWdRfvyS8phCtZNVzFnQ9qRFHBc5Pfwb9y7hO5l%2B7LbG4hwJ67kMfPrGe6zqr9%2FDl0y9WVfcRSq4RY7pqAFlOsGX%2FaEzLt&X-Amz-Signature=a1209d5561a97975813568190881609aeb4f80a0827c535db4e409dc1d0aae8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROQ4XHBM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBadTeN66HIMlpLsdx5coQ2elBT7JQMu5UHuOmv5lGU0AiEA%2F9CMkGy%2FlK5sq%2FOkjkkBZC4OfNau18Rs3nuxXOs3BtYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUyGrKJigdXQQaCDircA2PC99W7R69b5ot4fBj3tfvmMzITS0u4Zxt9dY7Jg6AlMXTKpN8R3SjndTAC6GBvfMiyLtRGv1AeSKMzv4UGMxtd%2FmIzsmbLYz%2BKXCqDcQ7Aq7q4G0OTAQfqrJcdCkAcZdJxcIJLwFPj0CJPwEhTqD%2B4QH8thKhtJUKIckCW2Wi735IjnO22VQ0YhUUZTUsqNU%2BJhDxHNiAThztHRgNK%2Fkb3naTgayHYvifZRDX2BYcS94s6Nnjz7UZ9f%2FfPdeZGI0NHMYlBOD3WKr3UDMgcBZV3cjp2mHbTf%2FMLJgkGRAttG2mEVozN7he4tyBFajYuw4SY7CuVENriBB%2FwCPv7nkygJalaCvF0sYPm4xk0q1p3qx9z6VfQkQhFEO9y4qswM7Jc5QJdcjAkWZzoRAl2TYM%2FnZ7IIBOoQ1otiIBbgfxjx2v8JfbAYOr4o75Y3Qk9kxhg2xFEAPYme6XdIHt%2FF%2FzcD8jZUapZo10Es88WzW11NlhNAaaWXyt0c6auQurZgcDPPjmPcvQMFSuhnW2VpouwgxSRoJS%2By9MergOTDaLrJrqHhBmqnjCYdrA2cxPIDncc070qrzAReIXfEoRx6nmF34y9l%2FhNIGiAvzJtUZ6NrNDRB6qZXAxOUnPnML7R2MkGOqUBZWzXuFXfduVgyjQ38h6%2B3OFNQz%2Frj8xUsyadzMv85mjL5v7bOkq4%2F0QVLgRx4VLY%2FXNHp%2FlTIdDrWnQvAT9EXm8yq0Qr51V%2FCLCZhvkIgj0HI4Gzj8y%2B9%2BxH4%2FuSN4PHlOBZKjPdtJZ81qkKa98YZpiy9b%2FEIgwUErMlVrt1PujHlwjtmFNwQlh51iept6EIKTqi6jtg8McbCIHVrOrKuZkqMsG9&X-Amz-Signature=5a5e91466caf273390321480712e4137ee5a82d44537f8915f9180a11634ad1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FLNRBPX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMnlPa1yR%2FyekVtiW49IHEH5%2BOiu8Eo94YHOKjHyLyGAiEAum9lgsN4bf9Jw7C2COK0%2BIvS779Bo7dbTCLpEp2FIN8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaffnmDy1MN42HRlyrcAy9%2BXW132CJ9fjtuqfJB4R7NbnM4hEIBMzbhNdlQ4cdZPUn6ls7H6h0usr6UGTFmG%2F7GredfeN%2BeFomSnD6du1FEiX0gnfaDRIv938dh5utSitLfR9rn%2BY6WSQCmaNigDfPpa%2FiqdYoHnMdR9HbRWEdZkzVvhU0LTOI8n5CXgA1e1jC%2BlM1J%2F7VbSNW8aV3WbQbg5xp47A5EeLoqueTsICqgnXzn7hdecO67WlX7LY8yk6HNtUnFLnUEuzgthTjOYoFH0oibhE6XaoY57rVZD89b5wVYMSJTnJyJ34yAUYehnaT6St0nnDO29i4JYRNQA5utaqh9%2B1wDBj7nm01XsYuqlG4s2wr%2FdGT%2FYH5Khv3eSSmZnDz8f0rPsCBPuk23DIr6d8uC2zM0R1PRqClrcHw1LDuETTniE06nMkc9I%2FsyKl%2BKqg5FGwJHi5clk%2FUQBS3c0FKfGHCyDroN81SAh0ajldg4ZZGvyY3WFjDnTb6hMcMVn%2F3097tdk9J52XqySbHvZl7V9ZBIKj8tWFpVDEP22DceyKHxJa79%2FYUtL%2B0A7m3jukc4IAoYYTUD1zDpJYIz5P3vMsGSZp9mlYBvo7ancSDifUmsiNOe7ljzT4B7ZiS9MCe6NuzzSYpkMMnR2MkGOqUBwet8S3KDGf0DA3JpfzthMRv36Dqkr4i7jZNYRZapbi4nxlNiilSyGpVaCbwzuU%2Fnp%2Fs0%2Ba%2Ft%2BHq8f54WmIKDi8ovwMFJIL9LwV8HZfUZDcoliPneZXiVIxp3DeyvnIcLkRk%2BynYCaoJyruA28o84DSiO5bNa6W2HrXHEIONCUjiPT1%2FTg8Tlk%2BA3%2F6rXE63ESrIN%2B6%2FQr5D%2BbM1N4zSMizKaP7j2&X-Amz-Signature=edfe51f0ded49ff9453d84460edc373c0e32dc159be971299f084322a8d9ec1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DND5WMD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9VRdEQp5Im5XZO1leQUdDjyUd9OwpxoDuhzUBClsRJAiEA2j3v46I%2B%2Bo3pB19Jd68QVvGRPvI%2FVGtzyo4%2Bh%2B5HGA0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMO8l4cmd6Th1c6w0yrcA0A%2FHNIIQCO2zk1q2n5FGKWcW9SuMW%2FjAjJHxsTxBITRqQsVJH75XbBU%2FVVDlmfQWTDXiwEKNV37mMXtdOXS61YAcOw4oyRxwKY6GzIAYk573GyBwbOgfhOJFruDW5%2BG%2Bw3SWOUcYMkFpuYIY8NuMw7KyMDla7N5SShuMok%2BjEjSD1yQ3mCrGCl74P8eeARd03QzkmwisUF%2BbzBNkAeRqJ5nYJQJ71I4Gh33vj5okzQMDdK2usHyZaJqfTfChH9heRMjSdq6%2BO9IeAf4TPIAcCNBImjj9Y%2BkrrDcJskpTUFw8SIfg%2FFciYMdZN8Ga89S4tO1Aa8lMAi5fDUjmmMtvBF6O1yoMQQrD%2FcI8PbdI8e7HeaPIDSEa3BtEmaAI2%2FBW1tYQBYu%2FhRJGJ1Jhn51DI9cVyNDolrUjEv5kHB09%2BRE5t0UnpsxOOEuf9Ygenc0rjMbflieVC4AO7cN7ncsuMH9eFiN8R6Ixd8LAnf1PVi5p76iEZOyqCPJ1xiQt1y1ULqsUNZEg7re6mALK3zxTwoFPwyEmhj1SYDGqYmNKv11doy19CHfH3fnfeGP90HgObW55My8k9zCnFQKEfWlNA2TGUtigAcUqsmjO9wKVZGgi%2FwOocSdJlfexswVMOLT2MkGOqUBeTCLkBUmZy37UtHLCrb5lBBgCJuf%2BQLRm%2Bn7XL3AqYPgSsvJYQ48TsBEpZnU9aJ8qbzecx7Tf5W%2FTJjVTPd%2FuXgEwdLLl5TOaostgXbtM7HlmQ0pb0w2h6y3GAC8KIvv6tmZg1TSCfQ3Rm4EznXdurpCJFIPVVOgAARFtF%2FuTvOt%2Bt621G4riwuKg6xA406ChUFddzFlp%2BvOSzdpCgzQqNXd3AZS&X-Amz-Signature=a1be9d5713493a5a04f91ef3ef8e9a344c2cee1a8e7db02cb34101ca44670bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

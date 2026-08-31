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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S75RXGKO%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcneSb5U4uesjK0MejsEyXwFY9nBa5gmeeqcPilwxQOwIgMMU7dItPHRPqIplpBfaEc%2BKGdim9wIFtz%2FZTT9CpzpsqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXWjTmDFRDPf1ooKyrcA8Bk2p5684y75zIByRtD%2FUMb3qd97IjNlfsK3vMrYS9C0cSq%2BPMLpxUEGZuHpFL%2FSCVAhwMec1WRQfTGBOE%2BKozr3FUOzG%2BKM7isFZesMFXN3m7rUiENdHTyXt3RNkFuIrl0Aw2wU6n6Oy75pcSsnw6qzjhCza0O0MqypQfDIAjff1AcIGf%2Bljp%2BJw7ZfpA8pkfG7N1Lur8TVWYWCdGYN9LHx4%2BpM3tPZsXCdHrqsNypH63Tkh3KT4fy94AtHxyLHFU2j3wYeT%2BAX7FjpDsymdC2YVwIwQDNmCRa4S%2FLgR1yx5ugfg32pnsZ%2BJmsghjMWsLlavdLLPn1CyAhVxlecT489KsMuByFiqucovQLBHM69y9Kx0LphhBvs0%2Bz%2Bmaarz0d%2BfjWp4rrsFJapLT02eVpbUxpclw3qMaItn6J0gy51zAvLDasEY%2F8%2BtQSG03K1p6Bahylhq%2FQtOsJwKQhD3s0hm0Ew%2Fwv921mhymxQ%2B0F%2FdbbXNqgJ%2Fr6nJre0jVKkxGWSAyanhXPj1mc8EPY25lZmt1CmMUlZzSlBBcLU%2BMBjKwcnkWLV0fF66wmN2%2FYYVWtW95j0kFkQ5cbffxL1LSF37RgIvxkT%2BdEsD25Ed6GajnmXE7mL%2FMIoVedMLXd09QGOqUBAPqfioxIz3tQwcOsOEekB9WacC%2B%2Bj65Sdl45gFmOYZGmfMf0knSyind5IcVbsUMAK5rXqq9%2FVIOibbq1%2FLZf4TdB6m4xWLvS1AdOMz%2BKviTmLcyBzD1jrSq2lN077p6nxDgY1jo33TzBsJ7EoYAjS84AXbBARp%2F7HxqOesQSWASnMqv%2BeSUejqecgLCpMbe8GqL%2FhipsmICyFBZ%2Bm3emWFWnAa4R&X-Amz-Signature=b22fd40cd1d1f0ec52343dfe35ffc27d79c8b1d2f72beaf1d698c6ed4994280c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BJ3SN3R%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCDgJ5uNJZIH44RtawLtoyXmzImRiNRl%2FExZuv2BkkKwIhANDFYqXCOJ7W4viqgjbxaaNirubg4NBt%2FS8Yz%2FLN5r8lKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziCuxLJtwJzIJwZmUq3AOX0hYpDqlq1XPTjGNdRPen3tJhPe9WdTGYWWkJzPdM55dGFCGWyOcIi%2BJWHWUP9C%2BQPcYbPyZA1qHrTqkxDpZvGmIWcXLoeGF6Q5y9qThIZ3L1uNI36dT27bDbYJs5NhIGqVKfLaKl8kG9eNeV0yBp0oyFHWg0UCqZsIi%2BdH%2FPFbQUeq2Jwwfvsrr8Dr2Op98qTUhnJ%2FX5gak3TkHczD2GEXjxidA0il1p8cyIX%2F7eh6KjINXgMsYA70wALMuzpu68vjuFl26U5TnmOelRpTdVXVjbm5tMJ7QGSd5J1iAXzDAMUPFM7e%2FeglYqiBbiA%2FoUiiTN8RiPoIxE%2BsgoiZxYlnKn12d1T6DiTTzZb2s8g%2FBT%2B24FSBOfJSB96HIQ5FFnUhdsdCEBYuTD8lp560T8kzBmVzgKQw%2F39AXyT3iV8sCMIUFvnfsS24pYX31ioIFaM2C11E6php%2F8n88x25d7ftuWVXojkp9VPmG0G8%2FbMvrvDuR9NgbOhhIIi69G4ihU2maLSjySXbsE%2Bec9ZhsQ8ztpgz5DysT3msLA%2FYcaRzSl%2FoSxSihDS1riH5tsR6F9fvyV%2B37b%2FawIaAOo%2FhHl8HywQP63oQ%2FMZBiuTW8uIlLLJW%2FHj8nWjmAw8TDv3dPUBjqkAYU71RAMyoJh1vMrr1ZRAIH8L2qVnD1OOg7wkyTgiXT0BDuGgoz3oImF%2F28LoAvZqHH63iwj5mw7dwP7Ifm3HpDfOifzx3azoJkj98KgTUqQEivHP8GrpW9ZBXGEMxihXxqzUIsfK2BurdTx3o3V4j2Z7c79A0N9H02Ll8w6PyVK5UG9EQAHzsLErX6EGjT8BnL12TNx4%2Fr9Em8%2FirRtOKg3T72Z&X-Amz-Signature=1a202179cd143978c90c416ed80325d2f5d4ccd8b6a2e516edb14bd0a45086c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMIJ7XBT%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJRFZX8lRizMZEsGkPy%2B48DydJkBEfa3vt3NzoHMHPqgIgJUL8%2FXlTa%2FD3iUz8GXSZ5%2BM3%2FabLQ3WvhFpQXTDX9LcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4oeb%2BndrJKa67obCrcA%2FN0JaQr%2Bjbo%2BGNoVyBwG0TDqzWJ2pVSqINOCL%2BFFF0eUdTCTRGMgNxJBxelI8R4aaeSlGxiQ%2BlAEf98jG4h2E901oJ9lGN%2FtF3NQu1n%2FV%2FKm3bqxMPDT0kwhJo0ZC0DEJfMWsRouXpbP1BpN18MdM0K%2Bgr8F%2FVLwa1OAnCQaUDdL%2Bdbkd4%2Fqs8zFEwsLy23baAOyK9wpWs518UqVLgNPQRUe09MeLBZv%2Bcj4EkYi7vUK4BeSqfHJy5CIA7dv6u4IWpRGKFXS6fMGI4Lb2FM0wC2XAxocJV5siOHer%2BxLLTSBknrkzsIm7ew82yl7iSOW%2BY5%2BkzfDY9rT7pNcSdrLhFqIoIVed1L0xapGi0qE%2B3yd6om3jOvwynDpv8zYIr6qjV9JP7snyjl4Xje9E9vskzRohou23xFAypmr2cf3K0iFNmr7v9fbtkJAR%2Fa4WqFEJPHEmm%2FO9KIwjqG2u%2B6fk33i7zE0ZJIj7rpNAAAkQCTFtgZejkYzjhE0fIzXIhRYuyxikpESqMm11YZsT9LE0DNg%2BIE8Kz%2FXQXRn1Tn7HMQ%2F5sSpDvwRRqRaZzwHn7n8cd2K8B88sRpwDW%2F5DYk7XgY54WrcORSfC9Ui%2BvN1ZW0SIipewDdNxnIY1M8MJHd09QGOqUBRgFdnhCHrKIV%2BAx%2FeiUFSqIxzSxmfHfWsLTq4PUQ8LWkamJqbtzK7ZNzbpWv7eltFyTrI%2FUDDANaO6MfJC5aESR1aOmFfLtzKnZWKuOjNPokD1qbTkkZjLELHqTd2AsjzMvidKVdi6eXEeMk%2FVvLwRZ4wzKSy8IiRtTsqTtSOV3pXPIt0LZBOBTUUb5vr%2FjC5ftWps%2FHVBMta3MDJQQb33uD65gR&X-Amz-Signature=83ff7031cddb95746f99b08c71e9455121706810ff10aa6463d8ed8f07970a2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4DKRZKJ%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFoM6bmVwHivh%2BfhkwWalzFZ1f%2BtNL4KDkZDnqkIv7pQIhAJl3TgY0v9gvyurDjtept6If1HbNQeZYkQSTVolZNCn%2FKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhcGNzodGu3G7xifUq3AMbSS2b8TTyqUfRww5Z4agKCkHjGiNr73c60XlDfs8xsdXg3fR50RPpKlAa0m3oYhXl6akHzgmW2K9gPKKSa98SG9dkH41%2FS6%2BFJNi1mgFkemggN7teP%2FCNfPtQzwqbS5aXJ6n3H1aiO3eqOvC9t6iFBBCNxylUnSj62ecETQFz4mGuWcX2QQR7%2FOhKurd7XvNmdDmAW5VC9JLwTsr%2FpvVD7HOv2GFqzREihyBZkCqHeCYRzLcjHFoZjIgu3%2BqZcq2NqFrrqZ9d1ifVlw9UE8faCxJH1ODo14uqzwb9T1hejAtuwGhuOmC7lupUUibsREP9oI60OL0H6jto%2FJSTlRm6Vh9iIp5QmLzSoQ%2BG3Z1LbIl0VbSohsCmihZxlxGQ3eOCSjJoGLskHKveQSXhymne14QYDqaiQaPrP15cN9i4XjvZJnEp0IzfKtDcLN7GeV9spkK2jdX5rlDPfUYOPi5%2B0wBfXagsYnJH9yc6w7CWyZYmUXmnwTnUOQQdpaDBFbHNbdZs1DXkgqbqWNEAhw4c0WXXMfWlGBKDXKOfP0ogx54MD821IK03i%2Fc2MaxWlrg342EdxPtmp8W2JtrqZKumg%2FQwd%2FLEala4i5xS9tSMdT4oCjYegLsd3r%2BuhTD63dPUBjqkAd4ZyHS9QNO7GbPcYBZSDGuiGtHXzHwhkrcNB0RCdjvRH%2BwlxYcuOX43%2FhL%2F0Vd8BqHUgsa7z396w%2BFt1Rsj6n26Uy6rIo1sbboxVA5bRM9DTi%2Bi0HmhDWm0C4bf5YdQcCMsQAw4wZ13k3htXTcE5%2BdpeAI430sGBd9%2Fh1QR5%2FfSd3krwA3mHDi4iSF%2FcXgoTD7%2BqKhD7oWx0%2FxqyfmVEOYFQE2X&X-Amz-Signature=b59690e5ee731931ece0ca4a20b1565a9f2bcd2c5d4fa1c7544d69526a9c62b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN7CQJNX%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5G0TuLyqUwdtG3UNxgL7GwlGse113q1jdVDDwdc5wpAiEAhcwpSBO6n5i7HrjGI7i%2BOUmUmxwXwsePpVmmct%2B0AOAqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChyu6dwaTuZTFKiRCrcAyKCsl%2F9XoOLqviIL57vVrS2XUmZPi9OffjA3fumqFVjq7dzJ%2B3Ta%2FxTttrEPXBu6sU5GX%2Brxm2WDGXHBxxNxZLGArhg6e%2BfclTNPd8hgptplcV9IwSrUg3pjE36mxPl5mbZewbE1MNZqCCiW23i79GgrNyqi61P9DSZ%2BnYDPXcsBqaT0oMpktv%2FOcodY9ihROUmKwfctkrCsUbcQjsKBWVX6yE642xOVG0vlm8jo3pVA8a7SDZgXQPbbAQAhQgF7DSXDEWI8yUshFeam7bPTEdd0%2BGPbri8CCdj9rm2o8LtCSEUaRRB7y9miseCsEGFX0y3lFw1hyPqZ79ROciNLbMOJ3O4aOiXaBxocTH1U73mO8O4IkgHAtyy2UcW5MLANjdtaJk2qfgsDqivykGyy5xtKhDVNCPbMoq44dmCZGq1GFieCMOz0MlDwBuQcZ4tf%2FwS0gd%2FlJj2nSG%2Fc1xo9N%2FI6oKAZBIu2qtO6VuSDKNAU9NvcTx8iUFmV4Mn0VG1uuhKRRxAJfZpSr3pWSizxp2PayxRgom6ZdvRVCvh4PvphVeI52xA0oUNCwvq4hARNoaxHUKPbom2vI3YSnnEXUr0m%2FiewVLOxXKQ16Uf019M7QEeEPT%2B%2BluaIUujMLGLo8kGOqUBAVGp1gTa4XpYF2PN0z6fHyeDtfCxXupEF5B4erLGB%2FPu%2FlQ7NMya%2FdQVWOh2fCbVZjjopRBOLB%2FCcaNrebjpa5K8kKJLrxWRIAIBo2ztIyVdHh0ENd3gPGbGxCnShKkuxQBINqJqm2tazW7hBxCmlG6BvZvRIRHATsikDeuIdQ47h%2BcXk29XwuEk%2B5YiqfCalScJ7eq2GXzTziNzk5Zd36xpwCmo&X-Amz-Signature=4d5f1b2a49e01a057f893a581cd99691e30551260f48a68466292976df737c38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TGYZNH4%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B7eGo%2BkFilbPcEdlS%2BnUUBnR2B9CDePMkfzpNgsc8MgIgZ2xq9VBxrj0sdcE5vocP0eqtAz2zpvZfzWY326%2FUjHkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpltfKw%2FpPTKlRBOCrcAyVKdG%2BTP1cvWGLmzuzfNnNvDYzKQJG1PfKJ%2FiLXx5v7J83a0scpgfGWx9SQVuXpLxkcw1AHmc9Q2FjJSf9E%2FpdtokOD%2BoNUJT4k5dwpvuHmDUHIh8wiRT6xEC2cOdaS50%2Bfzbh3PC%2Bv%2Bsv5qj4kG6ZYup1NdWPgbaoes6vdqAfJ3vCXMo61YIrxRKte4BEmK24enihDR8jCcI%2F272F49eXFiVLt41tO0DbDVmliq5igfIpFnxsPTNf8HBTu0Izh%2Fu0ppCP0A0YwYWCeBSTKEHokq%2FLjJtPq3pKLR8wHptFr1tC4aloKSkND%2BH0zyhnupKiMOceZnKsPnxwiRj5L%2BQV9AoH%2Fk7gbVIO4ktqZtS2HKdJgFytynnazuJrcEgWgkQdmghQajdkaXmoMAVOu7mkwK7B17gg3S89iyQVKdGYCtgM%2BqDf9RaAG9yeTWlrMvKxbcHonKVSnvpAcRJ1Ww6pChnnH0TEADpSHXfVh24F0hsoXYktK5P6PHf3b7H4NPogC%2Bbha3j8DdEWjNuHxOaKjDv5sXhgv5xnMgoX%2FSZv20Y3ij9IKahDh29u%2FTw73hNx8%2FaYgYJaDzLmBTWdisp%2Bfgtg7ayK21%2BG9Dsw1FrhNbSsLlN29n7lC6z5lML%2FXoskGOqUBKgs1IgQpHTMVz7pq36wmigLtgg2zUqi%2BuIWbN2DEndFgtYmH3Vwrfcbg%2Fua1Z22QAidqbJve66Y94fUecQwjfiZf5MgbXK33fjMopnRRtg%2Fcred70nVLQ10%2Fh3kYHphtUDxJ9PBz1hUKBEy8q8Ujy65a1jjcEiw5EIKya7%2FJzsYCKPK5hdBU6TvAtaPwksaRCOCw3KdhhvrEsksyIrF73My6E%2Ba%2B&X-Amz-Signature=a363611c4b33a7e557bc46d75a1e3be8e2c0cda76b548760a79c527ceb525d57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HO5ILZV%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuJILZi%2BvYf7sGo6o7ocp1E7C1hLS4%2FymUfihBuImXJAIhAJWD%2Bs6gu3tMLdyGnhc0UZcAsc5Pr%2Bc5ScCBY2mn6vA2KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwTwJNm4%2FQS0p7i2sq3AOp%2FCZslj15Cbsi07fvfV8KJcW3sE0Lon91izQ%2BGccM1oPnj7hMMWTlfkIrVtNq8c8%2FSR6eYl66OzseIoU2TIZHX3ZUGRk57zRp8alxYvhvD%2BxKTlon17fK63xGk1FwZxfBZb%2BWikq3kbzKrOHYoAWugnKNrdwTqwOYfTn0GIqhdaGOh0gOnLgbrFHaXk5Eui5sLk1vf8b%2FA4T3Q9o%2FVz5pqHDgS2dD%2FnFjeW9Fpc%2FhJaQCCSK1yyGqCqKUDW4mwpXVPEYKtJlgU34pscGnBR%2FqfdtChuLJf6m7mPeuUcEJrPXPtHNREJapStIi7pQMAMW6fEXSqjAIR%2Fsu7V7XjcbCJ5%2BCuQ01Z3XYQd%2BvYiu0RG%2BADid0Zh95mKFElZNuJNvYojdrxt0zAxpS0wEiUj%2ForN4ZuDJQoskv5%2BiyuNnu68Sc2tUUF3IPyn2FFvXlL03z0R3%2FEdLfKpvgeJveNzI0fEXtXBz0nGphmHhbzo2BS578tlrPsR8EduG%2BCjL2m%2BVq40bccvx0ZtUy0PmBDI4hFh3PJxAeXHzbnz9YCsx8nibnkLvberIZ89PHLMyjo3awheAyV07arBoQPPdNE%2Bzy62d9JD9NPVmecmYyKSqLY5P0YEFFX1xZ7Hl6TTDRzqPJBjqkATAOHzbvpXQxZ4CuoqOXYZYMF0KGYguX5nS%2FOg91kD4NhIfetM%2BIa%2BsVKQzY%2BWx51kfm1b2GVDfWD9Cs9a%2FjbxibfjgjGyQzbI1EW8GAMhqfpvqxXnCudiWWAaPQZt3mArvP%2FMzHFZ0JyCFqNBLAZCxanWEyJaXtSDhVjlsdDiH%2FhrZFFAgrcHANshXufKieFT5vUwrH5MBqla5vqzBg%2FtdAvIUz&X-Amz-Signature=4f7c3e17a51c4e33a43be4b3ef006d985b3ae0f8fd61f62b7e93aabfc9bfac7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K7LRMBC%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIh7YJ7uSf6qBFBQyy2gYjmb0eA0fLkGsYLMsWaaQoAAIhAJLy2p43C6MeSc4V%2FEVu8hLLYbJfUMC9tHsr3G%2FedD%2F%2BKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B%2FQDL44oD4Q9ocYgq3AMkdJSte%2BtWBdjtdCYlGxp%2BDtkLu2W3%2FWtsXiMf5JSQyLIs8u26L0wGDaYNtjQi0MQe8ntLR9eaQpcc%2FBHdtXPCLM7Baxuh0b01VeVlMqsBa9Q1LKSth8H6rG3lzqz8dkLCa%2F7yFOLMosbzomb8l2D4S911nvB7yBmoRcF5oLMKXloExDj%2B5Cq%2Fxa3nNy6p8PGyvt6UfEWN18N6uNhOMf%2Ff%2Bdb29jSGSD519Xb6UWx4gYbdfTTXHgyLlPhGUZoUmKIG8W5Qiv%2Bv2fLL3zrSulgZlMh95zdxXF7mm9b6rkkWr12WFyyXr%2BOVcHT%2B185MrLZ8xSFrb8QEjqEBXaVKNF8tG9y5KqUldTgWxV0iO%2FnaUOfAdZ7CgYwdnDlIMytEwg3GMfgT9gpK6OeiskpOvW3wDJb16707KGnJnUHBw7iaKFpF6Qpgyt9A6YAOWweOsrOGLH5Vu%2ButsX9j8jOGHF7UAr39%2F0LA7Y0CIGC3aY%2Fn1OVJaX4qFY8N%2BveYVqzQ8CSrLNE1X0TSuHo0LV7g66ZMDwOCu9WhjUqifmMKWlb9CExVxlxW%2BTUYJqw538MlMkvqVOsJKfnpGKQ6u8SyefCRPwjL6jQiL%2FOtfeilH5XC6kv6myvTIKajSFo1xjCthKPJBjqkAY0%2BhQEshLVRlFHJGqZwcGAasEkxstT3qpoROcaF9%2BnMx70b9m%2FB3PoKwOt8wbLQlOHg1UKqWJkxbL4nBaegZL5vipwyg9Sdzhbrs5tR3roR6Xpm64QYE8g2UqPWbE9Lce%2BXyavHgfRw9OnGPF7flDcRQKbLJrK3V31P9B%2BRZ6Yewa3hTU0U5nhCtJ6pAmwAu0PSjorePNJ%2F%2Ft9AHRt8z9Qx%2F6eP&X-Amz-Signature=b62a5c19553ceda0a9b1668fdf57a2744dfeb56814b81828a5365144d406fdc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

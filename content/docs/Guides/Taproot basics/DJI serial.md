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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MUM5QZB%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAZkfEGpkIezF1xE2VUKoytoa6d2CyMe%2Fk1dKqKt45FQIhAMhP8VhyI7YwBXGiRPnOf87epq00Dv8L4mziXvqfnJTYKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz82cB7gA7BpyTdl%2BQq3ANP1yd7NzChVaBRru7Yn1manqdeJQ%2FuzGWXDOSyUfqJQaVCovgM7kpxPxXgU%2FlJspQLqJwC%2BiONMjgvAxJrZ%2F7hY0%2FwPfRCevZRaVPkTfM3vLDEiNeyEsvphawz5FUwU%2BQ5%2Fs5IaETwAwxiuTmYskk2Kmzoo0Fuwndby5DbeFrwTY05R%2F9aq93T1SNOvZZpwLAKXJUcLvBy3vMbnq2WtvUF%2BckiBthUszJYwPpBVvi5JRFtoG9OS%2F%2BLl6xQqYZfOWTfhD74TggJv03nfvqxkQRdeQ5Px8uuB3gJhqekDbSqyJTz8z1tlb%2FbhUFuZDjbLknhXYmw4btBctBJSmiyKGIfyWNUkm7n1id05bLz1LMs9tMlH%2F25c8q6rSPIdnC9I%2FsQekgVyaH0uJV4FWSQqUeFNA4yBgpzf5WqlsRTZrZqJnKfaOf9sPfEPLBNJE5CisBNPs9m4WN0I5xjmPbqIjYidyniNr%2Btbn6XMEe%2B1%2FiO1j%2BIgHsXSD9HhRCodbxxymbUbjuPABdUdvi0OK3Hyja1%2BX1yso5gKj%2FyKWMYxBcWXYbbX458M7QJhziKBRA33Ypy9OnycJhH3k%2Bg3u%2FHc33f8Kh3amLpSVMrd8iOPgaGNHGRow8EoTsP9OZ8gTCfoYLSBjqkAV%2FVqt%2BGtDoDSAzvjXG1SFb7M9O%2BVmjVY1P6dB7lOdkg8QdJQ8O%2FFy9Icq66UQrSDATcSB5hNMXS1BKV4uARGjGO0I0ekdAiFLFMZrd5oCDv4%2Bxtz4agc5Jr3q%2Bd3ZFjtcKK4IDOwU9yVz4FHixBddAp5SEQWw%2BeCGBoTBDKiWN2lHdzhbq1Kisww9d7kkV0qdN2s1u1wEkfB%2FBFtd2J1XrK0dBC&X-Amz-Signature=b4e2a5312ce0ed06860f793a5510838866c02ae1088d7e36b037115f137beb66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTPAYLC%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmI7E1xBITIpBS01VFrew62UCDm%2B1LhfeCbHtm8WGbIAiEA9o9S7jz6UD8%2BEO%2B4KWTD61fgYJSy4yoBLZkW8b34AjAqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1mG%2BAbmg6VpwxnyCrcAwrvmblQsx6o%2BQEHewTROWApR4TZeKjByLYTrCnkzFUqxXMnv6bJvVC0PJkTpa%2FfWHtilQ4N1XXiO1DnIvfMKW5FzLwWxUMycD9u9ek19l7TBvxeh%2B0u8GBjisVIDoIH6Z3UJ5ZNLVSrIBa5QpgXoJ3ahwKwnQkeaCBAXmR0RrapYcPmNNeypoBNmE7UXxicjmgD7pq0VjN2zYxpZmK4fXzMz1IiLvSEN%2FW%2F%2F4Z37HJJFdnYYL%2FRkf1r7QASu7bQO4fWSQFwU2PUVBURuFHxpP8QMpzc5bouKbRrYX57amYaehgdOcOtM5WWr2bHgzq7p%2FGQO4zCyBLfEO8OQNQXMBbsqeX7m087sImFItKj5gYQwNLr7mGGlCNF4kBVGfk8gnZflQ9WyyhGQlvQeW7j8x5psmsD%2BEib803%2BMOPQYvAwR1eN8OTa2GGvytS84gWLTkoIQoBXXZqGv%2FbAzctDm5OwVBEIBMii1rHcx%2Bnl2JqqohfN6zTh2qWj1e9KLAa%2BpZ6WB4UBZCjllCyypHoBYDr5YnHNMUC1M5LTUVt9M%2FYx1kwh%2FRo%2FInNCtCmxxPNanc3djiU1UTPD9BfpOHIiNQ3KUGF%2BP0uLvhnrAuyC2lmhloqgIpLdTFPRUzTXMMOggtIGOqUB9bam4aoWQpyL%2BYzyiUrBWTE9zt2VsE4Vt9fjXyShTsDJVeauOxYM%2BdXbKqczzitiGuDUzE02Hj8AddlN177LPANtZ7%2B0Z3ZjSqtunMiQqNfGjVtJsUupYJDllOfRaHZSsfEyNAxwpDpx9hEn6KNFT%2FgnlLx5FXjQ1u%2Bcx4wfpeBwXYzZ7yZC71Yf6JUYQ7Kite1fo15nYiCoL5BsuH8OEKO4g5hN&X-Amz-Signature=3eb3815270f39ca53593e2b23684f8e2620ed0058589316db6b2bf7453184c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHWK7KXW%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxtoF5pBQ3q3jmC8eZhMilmgTcZGpVjyIcnjZaueC7vAiEA2B6RKCov%2Bgwcy4N1nHXN4uzDXqENDHqZt7fbwN6xgjcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYsEM0mimWUcTxk6ircA%2BcDGvk1MRj5raOKsI4J7g9WZZroHhK8Lez5L8QwbQpq1Pru8cF2gq4seGBFjPHcHf0GDsiM84kp8rSp1c3e1MNh5GhXT6Szi7UlDr%2B2jK3VcN%2BJ%2BAJ62crjFM8duAW2TPgxbEhQnjvChM5sWkZwmqZhL4jMVOvv2QFYtSaXzXTQVX4R4YfQKwDxi9963urj2JQnlGWJWLqL4ChWjGyUFet4%2BaBb0wt0DXNXId9114iAWUZKdLHe76tAsgQv17JPV4bQMXgqzEEsjgIacnT6qj62s3mbJZcrRAbgi%2BAK%2FX8xsdtmeThWkNeUgUpECWk%2BVHhqSzKWnAHl5dMPWmFEzgm%2BSycwF0DeZ4XZ4nhEQUNqNkRkf0Ry9XralpBiZDkX89nX4UCPaxce7O6lP7FkQdkSUOw3j2d%2FWua5Y5jDTFOEKawVhscZchJ2QTwLU5PfxIHmqguknzLBl2lUBynoLijSr0h5dm3JzC0QV2346zATt8IW1FddsWqKC83srvU0qiWuxbOghPYC6kR1LVZm9LSmMCbPXLUzQKyHkID7fvEtxkf%2BXWMpKh%2FCPerXOPyw3VyPAxZjOMjNfJxE%2FO0C2Tr64Kw8%2BwU49KU6fre3Tnz87hwpnEp4PJVHVlwIMIyhgtIGOqUBPDTrri0N3JJGPZMsMYzj3ciJUF1n9WCx0vKOfzlVu%2BjSpwMZlN%2FZjhpmzkAeyrRnm8KfzieDKICrKTUqT3Lya%2FODKYyE5i5bvhdVbnJdui91aw0posaw1pDvxDv%2Fj23PdOpPFUS81cPuDM4pBo2t%2BAYXV%2Bbw8Bfdmn8CKpQKe%2BNoMEfxrr%2F2D31xswJBuUvw7r9LPy2rNxjKPzOSh5RTGoN9zyha&X-Amz-Signature=9951e35b3a948cdc2266c7e4de91e37495b916182c3202b209468f347eceb792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DNBOUI4%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdZ6SpBwcxXR0IlPwFbkiud6GU7HehhgYWtP03WnhwdAiEA2vfFBIv2s82fMY5dYxJ6zokoKwuGi2FWbAVvHOxxs%2F0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMupFSjqZCpSo2ChircA7mS1Lwr4UpvMgJIuFxv%2BuZmgS%2B8aymzLZQ6fC7AFkumN07mY26sUhRiWzbuCBFEK7lmzfoMdItabtaqX%2B7lfWEb%2FEOklrRBGS0fkkR3tBNEwRhatE4GvTaFmlebgTUp2Zk4FOaf0zRfkaaa0i1RPKKpmDk2Ti%2BXRnoQqZFrz812J3E8rP1MDAba2n7t%2FTCr1lDT51V%2BLiNpSKoDCFWk2PSC93eV6xEvkmSKkhNlqmFHuzkL9zFkFYxkQMkyEEokx9hgeSNmlZtM7k3KShnDxJhuVJon68Q4djLhAM0pO43j21r3C5I1F%2Bk9Lr9PX9iUO%2BSbUev%2FPKuLVlYnUBK%2F1cnuF7VbX7MYwrN34fiGvzPkJyDICZ0e91zHQcQxjZj5NUsHnZo59CfPtI5JPwuRN7f5jMAFMDnBruFaAtEyrBafD4XQiMZR02evXG%2B77W0rOq1pmFaH6uCwvrsV3R7v%2Fxx9J613PRiUYAFHJpA0n8eAaqnal7fPVkiAxTpybPZ%2Bl5MgPb4Dd2wzU35SKu50U8%2BtSzqGD7keUfGD18qu%2FxnuYok7pHGJDUBzIgwBi3N5LcIGZQ2SZiZQOhFvr8UBZxCKA8K6dmoUwK9uDsHwZOKLtvQozzaQA14lr5v9MOqfgtIGOqUBHI6FziIKeMg7CEjIlId5skNqvDB%2F%2FtycJvmdRkBrslTLgW%2F%2B%2BLrbe53fs2q9UauhGKfFqrKXRdtT3Roib%2BuNyDRvx90a2D%2FYUCIg5mlLxuSDVq9HJw5r3BOSCSiuTJzMOIHhzfLAqXJFx%2FHFFzgYz5MZ3kJ9mOK6vBH0DH%2BfQPCjnfh9PWPuRLUPpp10U%2FScBwZusawugOYzF%2Fvz8Tedjr5MGj6M&X-Amz-Signature=1a01a07ad99bf07b7b834bdbaf19595decc8b7eb45cb6d9717b205476f68b95e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

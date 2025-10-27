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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ4RPVQL%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIE715uMN3BNwzJuk0UvXDlbxiATpt8W7qshxZZf5iZAiAmjowWhqNF3JUuZHd3xsM8MNdvC9NwSEUgi9SofCKUoyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp2xbiWy8nrkd237kKtwDmjkSbWaQfaISCjmJwzhrKyuu4BiKSHZW2MQ3up1CYtJn9HtZs3fSt7sYuBXUvquYWI0y1w6WjnBHNgKZYw6aih4XI3xffQZgWC%2BbGuciRqoDcoYOY1hKO3ExUeND7q9%2BdryJNKzGv%2BwoVXcSJpLdARJGeC2XOP5dOibU9ij83Hla%2FopNTOIf1Devw9ISDPTMb3Oespqs5zfSctMKUFoy9P4iw6XdBdLSoTBsq4bsWlYvPdOSSRgoXCk7c33yBuv9VWm1TXnkbEyBaRc0jI%2B6jPEYQgsyNdMYU9dbUetd%2FeUETu0TEy%2FHV9B5e6n9Dk%2FyJ%2Bi5Wfucx%2BjXf9FYHN88gsTZyznYv4u9a5kD6YvlaQdLdrwbzQd8RTIKRP67w0c1FLfICLVWPP0q5TVZZtqTzQVCMjkMgQDnYQARIi3QUtxSM9CQZSPwDrNXDklNYa40VKWKF5%2BaESjqiheV2vD4DNtsukqUkRPHulp2HCxIlZeLSWjBU%2F7DdfapD4rOm1v5sV4XWglGgeEIfKPnR%2BjaHcYA%2BJuhDPbmRMcAW6NoSn1wsbGhTLP6etR%2FtD%2FsL%2FAjpLr3uRTDaqhn7rBpNw2ThwDD3zyokiO5dpIGH5jiaXFfrkqDhkaSHd72Gq8wi4%2F7xwY6pgGCAPUPrZrIQMvVSSq558lZrltTI2v7rAPz%2BaO8Myl1So5GQEdDEn38mKoDWjggtbzB5epeMskoMSsQdtWG%2Bve36pOaItkSYybofNPvL56GSdDJC4Jk%2FEq1%2FeLfoeNRneGbg7bUaBhb4wUF1TfcNvWTvhnD7WqOIsqERVGOScl7%2BiKYQ8eyIz%2FcxayGPf2VjcZdN%2BkWr%2FXUHexS77Di92sTCdQOuAd0&X-Amz-Signature=e0ba759c258fbde07840ae4d532ece82359c0b071f55d62392af85ad788474bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKVX5PE%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCthM31FprPHTEhvlXzeRMKKKT709u0CyB1y0Wdm1syAiBAFs%2BVGKyTMi2VElsMtMKULeWgOlqg1X7nFEmyLERuHSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjqP0YllRrIWKecwzKtwDJSmhMY1axeV4KbtoTYxzq5ZHGtggARqC07s2p2cgw%2BgLoop%2BYrWEZpZ6k0%2BjAhHs3EJiTSueKkCvr4JLyWEiegfuKYGJeWKq6FQ0Qid0qGivs%2Bbf7xTdcJuNXKeBcOjSmDxpXVP6BnfCKFI%2BIUrWWHjMnwzsnCwfvsU56TT5Ih0BdRFWGbAy29Arp%2Fp6yM3hFKNJWfNE8uSpb19XqC26BBpmjoYdiPCNJ2q%2BZw%2FbJyEBfXkmUVoSulJv6wQrwrp7GnaQRo44NiGKKT%2BcI7T4whOIr3Ko2RFtILayvhhdIgMmirbwCdQ4KlJf%2FGEBIojVxLkPA0bKOg4%2Fmv2GKhKq%2B3iOECeY1JOKJXWrCYULh9P0av05urrhWQZz3UBSl34azNhldkfix%2B6taqbDByMaNFVsKAa1Z%2FkiLEHR46wxdFOl3LoAX6sWF0aj2b6jq%2BqxQbUXVBJQqbIUp7EJcvahTOrve0JM91t%2F3ZVV1R%2FvussOi3bxX6jQqEFEZbC5yeiPrNHsK2U6MJGV9vdjiDUbuLx%2BesS8hZzMU7N%2FxN4JcBgSITnMJrFZDR0fm5jPh6uiTCwbSiDuEhjg7TvM9QJDvKRr1FcPysSqLvqxUDsJAdADWV3KBFRQyOYW4f4wuI%2F7xwY6pgGJNNSSH%2FGV7NJsKto0E6%2FeySMoEuh4TmunkGvK0GeeV3IibCOzr4X%2BNR62aCa56nVjp%2F27b8%2F5kqrz7D2A1rNqsdec6pXWwpZAXl%2Bq6k0YzrHJMquYObIwqinxeg9v4g351ySsFl58gBwKtKYBnhFNCwPT0LDJvZciiN%2FuGwfvAITN3HquejRzDsSHcKpkCisaZWP2NX3R8pu9RbHc1XZ6oKKJP0x3&X-Amz-Signature=5a872111817f92d5331617b679836c340ec431ebeb9e3f2116ee70a327df3b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2K2OHDT%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYSBUvk3nmn1eGknQiCE5ssixwW6MMOUv%2Bd1wmdNPzzAiBt0TAp0aTctqQQJ2oIeXgBjVz1yirAQfoxk9%2Buq9LYMCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn1g%2BZXbxUTep7dPyKtwDWBAZuqtpv5Fbksh%2BF%2BXaKh5M0k6Z04Frgik2uTlqguj%2BysWTFBQmQLeUM%2BuE551ZCDq4k9c6THng9BrSdC8vECp9rwhU2gzic3iHTcI55qOj08f4zS%2FVOlYHV5qeTpce1gakBRJj4NOiYw9FurPuta00hVE45CEmeeLVUxCQ1d4UjnZLxqrU0oz5S%2BDO%2FRShicMZbkZFtnRSYAfRQW4B57xnGgZ76PMRoBS3J2fTqzvJVRYJx4WylE6c0RV%2FMUrSSB23Rf%2BvWk9xpQhcm9vffHG9IMQURAkn0MpHBQVwA2%2FkvFhjiSCJB3djsA9rAUOnBtc3gsnwv%2FNDioj3%2Fjc8GGkghWpS0R3GWerX2nov8D311m9JPbD5NDF5UpKgpDd8Hp%2FowkiTJEFoTzSumVDzcqH5MnALOmmoUBTIBkxnHZbuBUjZGUDY0yw2NsJtdLKLUEzCUEve0%2F6ym4Qy%2Bo3Vnw5c0A%2FEQ7Q5XUPmM0eDqN%2B81DfBvozcO%2FHwPLdXx%2BRR28VMMznLOXkzR%2BECUH2GcjaIMKBx%2FzifPLG1d49uVMiz2wN6JDD8ZStk%2BNWRUF5gg21ySZcf2rGnJgmYkL5LuqUTopBXyDzhMZq5bUduWFyGdWsm7CQLyYJqH5Awm477xwY6pgHiccOlPtj9fgY6ulYhHjxB03U3gwyacy4kLopF9i3SxDSwkeZmE6lVLSAUFBbpRgXD0xg%2FkB9haSYxIkIHtNXQA%2B81swxZIc3MyCpDZAyn8m3li1NvXYSOWkJXPUtibfNG9Qlj5DBP2EQUMBx2M431I8EA27PuqyMP3MAexO%2FOnxzFWsVkOrbi%2BR5akRp556s7JUSG3lbvfC4hNoidOoXM9t2d5bUx&X-Amz-Signature=6f6e1f0d20c238cb8fb553355e2578e85f6d912fd0e9044573e657ace8433f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG5BXWM4%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF0ygz5VgbaOCMM62%2B2%2BDayGezbTzG5hg9QRwRvtYqpQIgEUQzgG23OGdrJ5tURRPQNS2AmZH8rFALNaa6RuDWS9QqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5qduDK%2BIEb9lT%2BIyrcAyJ2KGZsPi6%2BwWqGdPiFZZEaZCJ18J%2FTvkUV%2BQucYu%2F83mAf3BKzRTEknOAhaUBQnHLP08kGm9NwVgVi6qJRE2jCy0tHrvt2ylCP5oVqLiaUvre9HTSyKE32SoBF3NCUBKELlABdNDj%2BfUnwwB2juXDh%2BZ56k1dt78OhnAszS8PWSZfV5JC1IqtzowUcbSS7u6iVYgITHBbD7DiZyA8QahfKTsvHezHdbXR%2BHdP0LxYgUwJXh%2Bt8YU6SMagF6Gdr8KM57YI3rGF7zKx%2BFuXfqxxXd%2FPPCqHwgD8hxmGtoGnCYK0k2crZgUzAC2HprdQJmC%2FLPYdEMvrWd0tLjdXqmwvUj6bi9exijb8lxm4xYWwykytcksOTGgEp1nWWMdH7w9%2FxAQQ2T8Gj2Egk4CDdFanqLs72tyFDQpSV4UIe%2FF1VY6uuz4bsX70NbMFnDO0kB7TNBteX%2FP2udOAhTRI%2FqJG8kU1MJQn8vz%2BBggBk5zABnCLGNybvztcUp7qCkrFBKXIlvTColNAvaMLDIBNXVYR91k%2B2tgduGTX4IcAX4v5Ax5QoceRaFgPkWF9HjF810QSrmy%2Fj0wSCjw%2FXM%2FN787FBR98sUjfOBY29PEXOYEyyA95n4Z0F8aD5IYmdMMmO%2B8cGOqUB3DZUex8QCqzwGGKgFbNBQy%2BbhrdkDVba5PC3bmBJr5v6%2B5K9FTX%2BV%2FPRQjEgkQGEZKq6ycKwkUTex4sQ0ffDfl6RP4Nons0xthLvjgdgi9SQ11ErYr5uQpV%2FLgx76w75Br8ZeSlcLgjM4TrriNcCkhD6TQiC4%2FbWloUkgpfzmeoBM4EmJENm0qsamlh7IMZftZ0C8FcktW2NgX5bIyGErF5IQtZm&X-Amz-Signature=119f17b2a1ed12179debba457b96f69064c348f1baf2a1f70005f4cb1f31410d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O3JGWY6%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICteE02lqQRAgBWBVMYvGDLZOsQlThPuJn6rgVrTDCGBAiAo1xE5OuYjUopODo3in9Hw%2FhqC8Zw%2BF2NbqdMPjN2RyCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMj7v3UOVH3hlpFIoNKtwDuNIhWLSp9QpfGhg8gv6UDLutdLEQA2dljmuNXiL7nfRbVWveE1El5cch6MgwguLbcQUOW6CAkihb8E%2FlzOt6G8eP%2BLRn5ixtzJB2bAYEGOAl8PNBnMg5zRYcS3hNgi5MbbbUJbNaqSk5%2FkjWSLWB8nvB5tZGO3ZwBYwKTKR9kgLJnig%2Bw1XAlMrRmGVP037ftP36Vk5ywNBNQaon4dUIEqZEg%2FdKUKauSqLUpts7OEcF0IQuDHvv7PsxFf30xRBxNp1D83eFiYM0FjmrtxVbE34hpXfff0cLsxJTj%2BckKUwygPn5v5gxYYkNsoYNGamGpoG7oRhfWy7zcOFBhyfPVkT4Uu6b2rOQEqLTA8%2FLDht2wOmqyMhId5TcRCeWWpZE4n1u6SF81Io2z5PyKvfftOboIelFXwhAFyyQpuSYvttpCy8TazrX%2BVYCaK8iE7eSsF3ko4a3cIrbJqaHu0v%2Fvq6qbdS%2F%2BvMpmThgTePJFx15QPDNxejM3NtvUmF%2Fd7t8DuDqyNTOq6Q1C7Cuhe1Bm8JHGM9P%2BJt%2FJVXLA15Yl9DHpGzfSZCbIpKBsluBWT3GAn7gLOWxmxr%2BXy8iKG%2FoyWuVX6x8%2Frf6ug0PioasfiA635sxtq%2FOuMSaqC0wvYvZxQY6pgEl75bWP8P4yEIF3G5CIRCl0Vl1zfWYtyGCrUiESMqRnzUdGG1Vp2I4hrYDxDWERGhWyvZeZHfcRUROKhlJf%2BRoMRK7NsCaJb5nvQKraiXehMEtnaMw6HS5ZbI3Z%2FDjEsSb304RL7twYvndVdm4PzGAnYcsrXjpwf%2Bhhc5379KHWTCp80ej73DAZ2HVjEdaWS1OTRkPDhR4ZFaZo9JAHofUvLCqE4w2&X-Amz-Signature=5c9c5edc263317ed937737c226bb7e095ca9dacfbc0f016efcef6819a0722812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BJK4ZSY%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfF1RLVx0AIJiHUqzv9u1gn71HmhanN1odFgLAk5ejDAiBhIhvrc2Gck4zaXK%2FLUsONHdxZgjM9o97JpZYc%2FUYkZCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMFGyMKfuB7brqfFiXKtwDQgstj6bV4Hk899qCjDRc57pIj0WcrfCLkdrsYnbMM19iZhAp1QdhRn1y6Z0%2FB43mT%2BUk08cmsoIwJn%2Fug%2Bpvs2f3Rkr%2FGPmtUB86UhiIMI1M8j0318sBYv4MLAfwKyaI7YW%2BRYPVtdvvq5Haq5YZ2dBySFyrt8pxIQuegC3r0QsyxpnMdfnrTgOUzkBfMyLDNUNzoZmigWNoIYLCX8KLBQIUFgUoUsTKpt57sWpGARx9%2FSy8ITBLRTBwCq1LDvMtc8NNwuVjuZnbtiGplUpykC7brm7SHG1xJPsgflPvvaNHDde7v%2FWPLBGFTAmQqituTmGeJBesDa84lFqodcwJ7emB3qoUqYcHGyhKwcOqIxf4dIqqYTXN%2BQDi5y%2BXLrXxi%2FVErTRqMnD%2F5dDaGhMN8dqobFRBO1jvsBT%2FpYHLjnH5nr3yuVUZnxITq%2F2rs61iPcTWT%2BpuFTJ8m7Wq7GXvP1pma1%2F%2FOX3p%2FM8befn0F9zoiaIDdpxqhc0eqIFfAIGdJ3X13oUVnAwwFBSmcP5Yo0udnYVRqwjbLUVmlYgvn4UjSDmO6qWobDICg3%2FeWhubSNwzDrN9Ux3Dbhyw1QcH2MvHm8e6wryLmAxTY0CL5K%2BNrpCJEdQj%2FAK75%2FowtovZxQY6pgFkOvyaw5WJxHm1%2FtaxCEdBuDlaQzNm5BjNkg264xM%2FCh9Ys9582Yb%2BKrE00oJw6dAR6VRTNjOMw3rKfqPlwv8zMJUxFlokQFcYu5SDlGvj0KXaSjbXO8%2B9bRue8LWYARn5tgIW4zumkAPML1WCnabxSLjI1mTB1JIyRbzgZ7GtQ6x%2Bhz9vfJgxRJBcIjkz6hkVNCgkeq3QC6IqeauG4%2B9uCrJzKpR2&X-Amz-Signature=a2096c09198fec17f3ceacc777e8036264f88ef636310e01d02264250390edaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJGZ6SZI%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMI3KQzialFaDZAxwd08YrxnryUpmkEsMSAkJImaVtlgIhALD3fuMcEs%2BK72IJU%2F8WSJ3eSfXM9kgw7FhuHFyJPVwQKv8DCCIQABoMNjM3NDIzMTgzODA1IgwynQezsEHfx6Of9T0q3ANTmZgQTLcmUBPwegSn4Swm4aFML7GNz0btMSyrCkDoRZgoSLBvWxa7ObaUTXi9OH%2B%2FfwG36bc%2FYhgGP22M8oXfNk358B4nccNOS775MQ%2BMHRV9E56wGWGeADxLL1fzn9BT3yQVVpTHR5%2BeMBjqE%2FAJ3RPQUFKaI8V7tJbjwETb7uyKfaomWSb8kPsCMBtjSHL2%2Fv4ccjW3XroapXDVRSVcbvRPI1PzQIbOFflygPhWrXiHIAnK8eoFwhbPU6b%2F7YnpT08e1GvXWSykuU5lTTWm6lfazxbKiFeFtrhgfh3L29YmfGReYnGJ%2FmEO8qzeL6ixKQ%2BZul5%2BsJoJNRR2Wt7iQYY92E3UHU9X9ux%2BDCJET4oNMhmka4plQQha05KoCUn4SVxZSvossQYx5ofe0B%2FMtTuPUWf6TnAyCwRHwnIKU5A2yc2%2BWMNg9HgrybHQJjHF5R%2BaWJNA7FdgBuJET%2BYaR3WRpVL2Ju8ffdJhmVY5%2BSaig7pytCAqn%2FUfQvw3mBGYlBw0ScdwhhQEh2y7UwkBX8wVYTQKfBpKWxfItzxbbtfrNWYvidRgF8%2FNZqb5MTL9%2FR2M3YT2f5SsTLiFfRlZff%2B%2BfYUS4AhnVKF7TKJzd%2FGJ5Uh3hZPo3RwNZjCYitnFBjqkAQTwMD8w1%2BubzS6qAXPEMn8QH3hr8suiYioL1qDLtL5Y6Dh2lgPEp8PEy2%2BUaU1MRNEzF4k9OUzGcBiTnJPd2pfOIjyS%2BFsYGsbSXqMz6YQtyJ45%2BkrbXxdViigPJoNk6%2FrEBC4IuFO2fyZcuFa%2FFocxWS6WdvWqWiEUkGy3bvZQnhO2rC%2BOSS%2B%2Fp30p6jaMhEGFCa%2B9QdPQNX%2FdVDTKXi7Y3eNi&X-Amz-Signature=39f1641252558679589f66da0054ef849db067fa176d514e4c806352363a40b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664JRXXAL%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVIRpvpy2UEPvvV1uVK3wJQQLmn1S0aMm9GtQevfteAAiEAz9%2FaRIpC7aju04C0AuknajFTXrGlAF38nke6jEWY%2BrQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDNdxo6I9t6%2FGJfGG6ircA3bXy%2Bx5ig88aT7YRHNtzKirRXFE%2FERdGSH4FFyUBeAx7xZh8PhZz8ajjbDY8IxMUD%2FOX%2BE8uII0rw4hPyld51tzYiqMlXZm9Gl3XUjUcTI6MSyctAk90RgtanuwwxEWG1p%2FGY18cj%2FHOAhB5%2BINVm8yPl%2FLL4N8cgcqKQ1KQ7FwgBzuPqxMj1tcmvaeQm4uXtyxXv8UdjKxLL7CUhp5pXzay%2FHuSDYpN3whStsoR5czFK9OZshHCiR8rErDXHTR8d3qTQIwpXDQh%2FmiR5vKOTvVUtHd0wIwjcOVL11XpQ%2Fvmj8fcKFm6GI3FHfboan8iBVPBGHm8GqyujUycID%2FxRcUr4x6gIi9dFTMjjAeXff46SKvpOV6PdxqHiavQEKHZ4GaXNJHAaRG2topB4lh74M9QtDJ1qnfj7m26Nxpu0q5hKZDGWk5T5bj%2BVRw7jMPOQc41aL5B%2BqTP79bkKB37a7fJ0Kg%2FK3jMYcuZubLaaAiVx0GRMnR24HVAZTCnOeffXSpQ51q1HW9iNOxJcHBpXI1Kh2PGLSIUeEc%2BSOfi%2BqJexOwC%2BrqUM33tigA10eLccCZln3isaEepWvct3biB96ub8EWoKPeeZ%2BCymy0ftxhOXrAVpWnu%2BBLGTe%2FMO2K2cUGOqUBaI8hPaz3YVgpqrVM4Oy5o2w4LpzNdEeq8Lu07gaXXcmogdSJeevXTnJ4Ts%2Bc%2ByI0NGFwL6ugcuEYTlBRvFaPJinM1gDO9Cq2%2FRditZRgR0r2eCuvvnxXYvymzA3ImEA9xTu%2Fxo3KId3vjJIAELnJqy0%2FrJoyUs3BDqwvqslLexaDG9YKuX%2BbdHdu27QMwm1yXlj1uT0Fzur2dk2oB8K%2BTtmrndD7&X-Amz-Signature=72bf49bb8c8132d1afd262053ead253dd6203de20414261494e73fb00687f47a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

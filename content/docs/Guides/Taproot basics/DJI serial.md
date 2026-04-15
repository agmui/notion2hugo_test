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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GAFHW2H%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAY8WR040EKsZ1JpmsoLLeHaqj0ttF26H%2BNxpuFebJ4AiBGByL0n%2B7pRbd55WlaKY5dNv%2BZjtFN3dMyIGTcpCR6uiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOJPvc85xQRWf%2B%2FMHKtwDmj5vAM6CjhSYTj9Fk7vBosIP5k0Sv1T1ruDej9zckR%2FA8Z2%2BPuwjr4rs%2Feb2%2B5EaHRgzNE65H%2FRnUhMDjaKv5V%2BrpbYkOJypukEs4ww%2BgzDqet1I7WQZXSQFlCmXNHkoSkUISyogNvnFHs2grLxWM8l6KefPSpAIDk2u5lKXIi2yBZiTusX8aDWpEh%2FIojlXN0OcgSVz9vjzm3hetnMnGMp4BbSQk9qAWKsys72qJjsADWHYNnZIr5XcBbNyXca7VSYZXnyuyjPmwAsmn3sR%2F8r9Dg6fMjQhThr4TziS7Oa8SyLU80Xt24iV6CvpZEnbguaHLdphm4Uo23TDzKAoyRRbYdfBEl0KdkhiUbHmacq4w94kdH09ZiU5xIBwFUZq9YUqhXMXVR9vWGrxf5q%2BxEBk1BY1dYMVO%2B1D%2BMxXIAMu5BupoL%2BOOj%2BFo%2FvmOXSLZoJxN28Xo9mWNvFcICXRVX6hC6zTIJuj5VOR78mki%2F4JdhZFW5rKINlVROYxeSYHhw0T4o9FAhvZJ%2BrLy9E%2F6E4dfuc9%2FWfpzUDmAUXaKPBqEHoqqSVBrLkQ8fZuNPByuhV5EqPsPWd4yLleYf4%2FEhwyAlUBgC3XQaslf2XGDBrNXA83sOJCk3XLw8Aw3eP7zgY6pgG6DfsrGTxmVUzuzoYRYEaLPpXcF9QIdaVUwBSXzxcW0v3xRyRWtHCyeqcNqiPMIkPMg4zSDJx4j9yJrXqXj9QXPl6uQCBdTAuTUqzFk37yjal05JlO7qCWfny9Ko05aNAGTnbGw%2BXW53sTqul7rgvd71AEum3PXMBuLBjPQB9TaQWTkbK25P97BySgkOKLSg9dBnc%2Fi4UdcTPkFBmB5oSoaChAEDUf&X-Amz-Signature=814327e58bf2bca48c985917dd1d193d96462da95062552d2ce4cbe60eb83a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667443HZQG%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6EC%2BEPK4a%2Bm8%2F9Z0zCd5p0jjCEQDZ%2BPLvfCNxpk42kAIgWEizi%2BLk4Y4Kag5IBJpABVjMq9DZRpMRRw9WEyLJx18qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoAVua9hTeV9xO4kSrcA%2F9YmXOVucQ9G1WUIomGUxcNlbkl2GQYaFyEo1dJVFPAbvY6iN%2FrMrguiGRvFolh609HMC8cBAmuhn4jOQokY06r1pkwG2Iuq3r4HdwP72ooJNBeJv0aXNqgqCTZRE5uqy9ZF4LoIyDvKRNpAWPlsqHPHfVM3ZVx8blFspUjDzMO4Z4%2FmaqlS3UCREmiblnlBKRGdN98kuu6u%2FKVqfBd2ZoBdOJoR2S9WByPZrCMSnvrDa9ZNv6oKL32WdnvH3k6XRNG4tIe9eh0eHPC7cyA01q2Z0oprgk097YKcQukFLlOmHju6KRoclFCkHoCXmJ3mnKq8q4SIFyjjc37clJpxf20r02p%2BENbzQiOwGlruYNC5Q5UEIdxK%2Fvskb%2FehjcqVv5opFCyXlcvXPPGyD9uQy4noO1221aqVns%2BO9i8M9Qyfw3TaXbkqKG34WOSZQm6D3Yk7vk6yidg9qDWWuDjMR6guwHGb9y2U%2BTe%2FX3%2BfkeCa167MrMUuzw3yRX9QMi59r1m8Ttqeg4RUAVAnKKIHPqoMUcxL7De1sXYfD79XQnGG%2BeMHWvv8TX4kowt2B4N3poxgmDfu8zJbyvJBUgXUMSXJ453OVghgsumC%2FWvzmeGYhfftIMzkQgsO2lpMP3k%2B84GOqUB9EJyNLEALaOU%2BzMPkRozrBsDy%2B9cGMnOcLq2i62E73fanYGXsyJfZ6qn2owWhHgUB1bEtttK%2F1mD6POngivOOtrltpjJzF1xPuQ1NXjKyQtmnj5Ue8ihAzFBo0bRuidcrNJ72GXq2rv4%2FgXs66QbBIF3X%2Bh1tHAz4HSlNHGM1tJsCjjSz%2FqscA611iMWKvF9fTLr4sXbF7GUeY35roTOw3JmreWl&X-Amz-Signature=5ed33ec2e90e28ffa8abb1948a339dfbf2a1550adbd4dfd45ab9fe07b77b85ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4XEYFM6%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm0g20skyYlb1mQQ8IAD%2BVC9IzbczAoANkecTQtSCUngIhAMAecLouz5ETkbfOThh3r%2BfDUC3jm4diaNfcyQjuyFoYKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzPkwB%2FWgDcL9hv1Mq3ANU2G1jBRej4oH4kpik3gBmnPJx%2BAN0mSil9ifT%2FshHAYFzELOcZsJH0FknQBGpuyS2yX4QyzmeK3buFr1v%2B0HygjmJ6yL8egOXVZpkAiMx7q%2BgO2XkgjNdSoKAbRIR3OEGKsm0zrOk%2BWpZkNnipc0GZEv1bEbOt86dGhDYLhEoRofXT7yY17gWQ4WlBJSxamh%2FGV0ni9YhbZUIvuK%2F4%2BOu9XU5bt%2F1RAwO7vlLT2o9940LVimSj2URpJgPx0udTXNTyXtyIkUhmRa0Bhf8RYo6ok06y2Fq6xiLZyJu6aOac%2Fp44DjT7oYGTQV5OtnH50x8mQ1OOJS3hcevZwBCYu4trhpddmwwZ6n9fARu9JnbB%2Fe1ss%2Be3nsrPB3kOwDo2N72XksshG9hj9vs0MldJEivU7R2L6ThLYyIPB%2B413KyoWnAqbvIk0%2FhmKhdn%2B7h6LsM%2FPWVy1p302cMojCTSj%2FuNnWWuXHi2Ooo1ouqkxsI%2BfiPuLXmKKk4soim%2FHDM8QeYnwcKPIdXW3RQGDHsYiBfqchm6ufNYxl3Te8f6p85FM68S54oJ1RZwYdBZ9EQSd41B5j9akJKukGfiDG3Zb%2B%2BK%2FgohmFvhkFdPpf%2FNShe%2F5gIPcsv%2FQEp5LpYVjCZ5PvOBjqkAQbxnwg%2F5mG0Opj0j5opzMEeySeYqkjjW3fRyRzeQkzjyfXb7NfXJig2xyloDiFwcuVQTQ8OhvhU2C8HlM7ugLpLqFZ2hH3qGRfvS7%2FV80cK%2BSU3nsXrlNjDZ%2BSDa6GPLH%2BLRCgvd%2Fm3ip8Hu%2FLlgMFNizIdmy9c%2FG5pSjUQ0%2BS46A1QmacNvlgcmkJTNgDubRNJKGF0jNnNO3bdPGHCywbSeY4y&X-Amz-Signature=5e0db18fb49e846eb7395132f756417ee370e230b0eefe7552f03ed2bef24f48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A75SA4W%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCC21HMCk53lQUeC8sSq%2BBdzFKqLqr7pBKUCy6hGis1SQIhAPj63RTGqz3umcWzXq6tmbipnaK5xji3jBODRn1ghyAqKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpnfUl5%2BsfqtDYI%2BUq3AMQi%2BmpP5IR74f7e6uwrspIRCOCvt2SAFPuBtWCyR7Euh70uRPH7ap8rN1faMLQTXSdkNZOH9NfUUpggAviKUSL0FH0IoyrczMYuiVR5VygtOpTT8kYBw7oUNftaUukkpxaa%2FdeOwPiPWQ2HrSewEgiB17UcWvtV993r0ZlTIH3zeARAwuZ%2F4Z0067DEcvjZBNF8kbYzyXaW9Pz7xwYaxhSLUwQZfPH%2BFVYvgwxitIZz3hjQarY%2FHr2SvDldPISbKodke7izKuVlZTz0oPbflDlVdjJoGICz7jVQB1UAo%2FBbsnwseC4h86PdtDEc1WTv45htqXMazxE7DbPKzNK0iWZ28hbaIygWtK1rAVCqrYK0JBOH9q73EJvjaXIVZIusSkk5Ssjb%2BMKbcLe36GltVM%2BDK2aAHNmTbhPo%2FUxIWzo8XTPC%2FzopQLVAtYalhEUE6P4PI1XCJMnebjMMNgLlC9lYey%2FpFeBqBzfNagqo%2F3rgewlU5Bk4fiXHmbQpzUf5EUk0fvl6pN%2Bu2jhRDrj5%2BrUut3043g98DwkzqrwCr1T2Lrz7Aqpf%2F%2FcCb4g%2FAlIjnMNKZ3EqjzfDuHE1b93aSI57EokEzS3cungzFRWvp7W8RlJL%2FbHKeYJph%2FitjDb4%2FvOBjqkARKM9aiencKKtsj0ZNOAbEUrZQMoBEy2ypNKRc9Tk8PVATAC64NMxRtDJIfxIWVH5J9XdLph5XrHcG03tiTk%2B2tRwhZix5C8OsViANiHJBoyz6nWMTUOJCQHo2iGJu6wnIpDxh%2BFMeRHLoDR66nUL4jqNjcVf9uzy%2FW3uJY2IbZpgtStMy9hpVo7uQd3gC1F%2FD4ym4TYAI7GXdgpKIFeX4A63OnG&X-Amz-Signature=2d0e42a2ce93835b3905cc578e385278a0eb2c4b3c40cee584177c05b4bb0b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

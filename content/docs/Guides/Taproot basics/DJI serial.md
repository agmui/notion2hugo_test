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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYWEHOIL%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTyR0zKdJVc7j9C0bXp3mrMQ2wBPtdCy6Wm82GGahnVAiEA0VBwEfp2ruUC47CNX5yHbcBKUBQ7sUtr2iKrgEzhB6EqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEu4LAqel22xS5912SrcA5cs3bxnzeKhyWmMgpwkMpuz6FDM57qajZP7tAQd7bIe6GQ%2FI4ua8bO%2B7zOALCbj%2BjgZobxzn2mCAHWnwXWKbsiDAPsPLx6LuKvbYnfH8gGhBtCoFX01WQq%2BRuNlu6nMP3oLZkJfoHZw3USRM4dvItlg9C07djpL2JNX5T1MLtGsWtdQIv35zoNeWYd920apUxztND2UByKUY7TRPg9y6FXO4tLjrvQNpjj5xo3GrmfDzpDlDFjOnXnMp8%2B8l6mN5woaI2FWZp6e%2BYCF4qopcKJ43ITPTVD3OlSO8ItOwUVJ%2BmNZYJT%2Ff2gf6PTYQ0l%2FJhRO%2BojSWv0gMM3cINP0ASKqYik1xxmPO8lAtxFElJLrTz07pnkjJXvtKKPW6RiNfuRNKP8vtzbrTU0sNG5qVlq3Rww7%2F8TsODkLYYA2wIEnpSrPhrsVE4z8JmeKTyyd8%2F1rvYOgvrVQzJpBk75eGbVpnGoEDj2jHYxIZvWW6t0LQJatIqHKcQ0Bi0uLxIz%2FkzXLeE%2Bw6YqUAGeu4gbfFeYgC6pQ9gPF7ohlXWptFiplukL84ktMZmAEj%2FZGzJhZbLIS1AKN6bWs3140Km4ICtETxrbmd%2Br8HSYY%2Fh02qW9JsAsjZjIlmluuU7kAMNvRk9EGOqUB4bhk7Tu5nM290JjHAdnGf4jm1zKzbCRUOcjqEmlONBrpzDKpO%2FySibUgsh%2Fi4QvKTSW9ZK1xHS4CBFCNF%2BF4yhRzNZZmiub1vy9H9GDAKjY6h3E27sp9UEsKglxyFllrroSREmqe6q5YKGQGrcHMBp%2BwYNGKpf8BTE6hIwZyTZM%2Fjeq8ckCL%2B2IcrZklHAI2%2Fym8MgsOL9sgkO2LVGWKdkXZWYBT&X-Amz-Signature=9fe79d74cdc73b135b22ef38683c9394378f8b714e01ba5b3e5eac3512b656ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KAA2BLL%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDccB3yMDKujRP5uoFQCaCmYg7AwmgZOT%2BU9NDCjno7GQIgZju89o1%2F4zjOCHkAYHrxt0sLnRvL4l53%2F55iy9iSjCkqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBH%2Bk5JTYYhHitq5SyrcA6fjpwSYWzRxy%2Bo%2FVXSSBytWGM%2BJokAAHOwsCwQetss3CLIZF%2BGJxH2eXG6lc1jcoxIJnMtuf6sfY5rQ4Xaf54o5hVyVy6K%2FAelTMYV4%2FAouLxwGBlOy%2BwUdvUlrgtQ8tFR5CgW5i28IgINamjYOlOYPApf7xqRvG1LHNfprvqpPRZzlP0aeD5e2jwrNlDIs59V9MBr6CYICczbuMb8M%2BdIKR%2Bb1oBqXgPULw0rdXM6dfEhoa9mxP35aRA73NokyzFqDI4JeUZK1bkNlCSRSWz1lKgByI%2BfeIaMgjhgSmhgXndzasxEiPVRy8MBqthmG9EgfDrPBd0S7UH5i4rbmCXwyx9f5gkVUSVcCuZV%2Frt3pkwTVpFQiB1TnCdPsONuphfGH%2F8nfMJhKUzsVyIJ6ytVgNPWIGdWiaYIeZ7pTW%2FBY%2BtJYokn4%2F8LEiA7FpBGx978v4eUxOsQb8MRgwtNYWVwRdcMEz%2FzF%2BP7FSwNpVmOJoJscDLv%2FZZWBz91M3shC8YWAqSHsrmnwIpInhqvDIJkLT0ajv2yI5iWGVz%2B7qK8VpK5K3WpNUJKF6GjzXzFUA7ksRnLXlJoZnwbx8yEpZ3yw7SPZK1XUEOtTikSiGhuEUba0eT5QVkEWX5%2BJMJfTk9EGOqUBdBgdV7ty7VbUBObsYH5DVZ0ZPTJgeOp4VKPPzmpbb7jyRfUyojhC%2F0kL8jrEafPD4Om4H1SyLlSbg0W%2FyCqNpeiZmnYJzzGnpmNmWhTBZHW57A78O3lMLJKyVhfBjdYkwcQUBEqtUWhJv57rfY80bv2zy%2FrH7K9vh1hpbu7ynuO%2BqHb6%2FCVuK7eh17uQEl1BxReKquUNFAZq%2Bx7dUQIWzuleT4hz&X-Amz-Signature=f5d36e2233c85920a2c8500cc9366ed510c999bc07f5af63b905c49980987505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQKLEECF%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BOOzI0rPTyVPjG0wYkEvYQbwNQRTR%2B%2B%2BITm27vmpTlgIhAOtQmJBdnxhzBzkMflL2j%2FJ0BF1Rfj%2Bz8sdxGbANoJMUKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIfdVMqlSt0WZ5%2FTAq3AOnSIFkyLbwu9J%2FhlgFzrGAya0vYRMVjjFQ8A66ORK63f2Hym66QeHtpC3nCsdqQae5qGmRk2rn1JOMy%2F%2B%2FBJ%2BnX%2FbTevwxPYj5%2ByL5ot3lzR9q7bRvio9umuWKWPLytkkI1IZu6fxWauetqVgZj7z%2BXZGpS%2BbqOaWSsd6Zt9b4xAR2iMC%2Bj60yAnSarXIsjFWlcDiLqo9NEflydgXO4uR1oKIhGsAXvjExDLjLcmZO8yMhzoOKvDnlVmtBXDfrOx7HD8NXxo08AyMxg17krrN5%2FqnylUNsAVeouaW0HBBb1xujRtyhKfMeOP8m2v5myYHdJJdG2sije6pgZvje%2B2rRXzahDA5celdD%2F8wvoU9MElvhX%2F2cQRWqlf7peZHGdHktyGwQsYLNS9wNf%2BlQT2IUJEjPLNh5J65eEAprLZSloVpk2uyej1OWJZXaC59g44tpAAwEYotwTbnYFG%2F1vQGjcY6glhMYWvVzrzBZ7LftuTwxycJs%2Byl2GdH5HSpGUx2sNwJCwd1%2BBgozPv4Cutnv9uDMmG2m5C4ewRpABxAW8AIsOQcILevQ%2BMBZ%2B0ujOouN6wjzNbeby8JyoYF4XfnMXPXEiNiLutihFvy3P0YjDx9qvW3e1Tp4ZiM1pjCZ05PRBjqkAf%2Bj8506ghVCZ9ZVh6HtS7u3dOraArgySG%2FmkghAFuiPCithDohL5cEKeyao5n5SebK%2FNBPRErpkoQCquA2GEFA2Js9T0UPYcGS9sKb4Yes%2FtQn7YdTEuT3ymC4Q61dYtGh5u1FN49ln6HAJatzBXtuHGd4Ya%2BSg9KSKw8EswCK1DXsbTYgcbvYL%2BMQEBOA7dI89NkH5M5qZy7rmcQqNFvjO9nxm&X-Amz-Signature=f8c40db3000cc151f47a27501fc1eeedc45e07e974364637de1a98e838078cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUJ2AZR7%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEjfEtyY1RXWFWiRRK2Z8LTMtBT%2BbbE1coln3OW3M9zAIhALYmTXvnhxlbqWz9ywsv8RLzK0su07Tj3zQXYmgb58S4KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwckdJPPwEKNqsNj4Iq3AOATJfxurVI1sg3SZBr%2BVqo7iHUUlWEVIjHIQlHkm8%2F9AG9CBOH7PjbhAmR2eKA3s66EhQ%2B4QgMuVOEhA%2FTzt5hz5I2KfFI3hTidt0PfH9JtR1fl3XC5%2FNCd9JgNCUqCCIk2SAr%2Fq50TbvAO6W0GG%2BLe8KJ9UeMa5dqvTI0AIuOZYVB%2FTxWZD%2BLP0UH2zkikj1n7zTlnLbO70tbvI1sqcFUz84TUNFIoQR0mB7veXeoSnOo%2FWfEmaH9tIkAu54J2tfG1wBY4s7bFJ47Qgr7MZQ0nCaxE7TgIzKE0oe4My4yckaerUGfQla0k193Xcak%2FC7xpzn%2BHBm2GkaB93xAKEyIweXDDU425CGGV08hSaHVukvPzQR0L%2FPqHePosFM%2BEvx%2Bs43e8JAObvurrP3%2FDrRvJMv6TV0MfO9BoEFQtZA8NaYqyhwPldwRa%2BJNNnMuKQHt6%2FtD8hn5gaOaeCZxlcFuvH%2F2IMNxlst1aR9vBbMfrPbMNyNTABb99aPO0xTmkuLoAoZ84wkac8aa4qzPdTKDJQhyYsCOGJtKXKIpERE%2B7x9Z2YQ4%2FGh6CvaS67j3aG3IgqSc46VYq8rnZT67zjFI3S0qKa6T0mIijU0BeBZaMglsXrueH5oADDhgKDCD0ZPRBjqkAXFdv7B2OuNJ%2BAM3KCOz77ZneQO02qLjb2IdWSOtVxPM43TzE6BIL6m3HDXGY6jE0dWwG38DVAFmM1KXLChIu6scZQMv15lC76orlTsfS%2BkMq4QpJ1x8o5S9Lt6DYzsI5o9du0BcIaeKMmuLvkMdTmqxNlDRJ02G%2BkZdF%2BW1GpNorkVp20Whc18K7U85mBvbQgrJ8AGw%2B8%2Bhr3yYCbDX6t3RmNE7&X-Amz-Signature=9b0fb692fbef214cbf74f45719a091c10e1d2f5dfa7304b22c80a1b49139e453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RHRX7JZ%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmR%2FUTqDNfQOL2B6ObiIhcflc%2B20pLejMnZ1MRkPfehwIhALvrB5Hn7hz%2FCev5GC%2Bhn%2BJrmPprxy7UELfCZfLqL20gKv8DCCEQABoMNjM3NDIzMTgzODA1IgwII26IFwW1OTNKTvsq3ANcP%2F8XKP9fbR7I7QweG9WgMg7FiNPE%2Fe8bKwkgslAl8RQkJBdtD41WxbZZip9OD54JZRhwQs1OrgM7cINfhQAu4ygSnsOYqHyiHlAZWNO0saB3c8HPW8rzeki5BJxkEyTUCPFQ2%2BDtpq7iQPqkh%2BXfoxPkUjcy%2FnDfRBI2ss3d5iz80YZdNB5i7iDHdYph0wmLqG6Cu76VAPxaD470%2B9r2b8Q9k1Sjoln67UeWURFjQWXePuXjmq5vm1%2BRJ71B41uz1lmrFODU9XpWU7xGbWJRCdpwS%2FN%2FLcMsUQpGEqQSrfQC3YdAYIvPexSxD5l5R9bk3YCzxZU%2Fv%2BjS0MJiY1TUBUNKddOQskdwEVsZ57aQn5PsfGfqV8ygCFkvh5eR%2Bsaa81Fp58PmVe9g2qV0p1oYR8RCLffbQkzOe3XwDFTxbGDGPYkSptpGvuAyjbUO%2BWA9clTWXpRbHLgeX7O58hACxST4VLFal14M50Nv0PQy6A223hZv2AsErWrt0CN079PlkVh3rtrOJK9SBpEayH9nsaNcQG4qZN3n32sctfOrsGy%2FvI3Pqw%2FqOpXMcBsVFRJovEQRuZGbrVBRafGb6obGFiGvepDZ82ePuYosKmjuCxj5WSODyxqJMebZbTDsjqTFBjqkAdkqNL1EBqNBwxZrq8wNDZ9L9jISfNt03m25dY%2BMJ%2FZdXRkPDfGogqYks%2B3mzPYbsZD0ceMQvZtKQKOwMxFgN4ft%2FIJaZMF%2BsA2JBZlPHXfEN9uQL84LzQUSnw36OohLhFtcrvUdTZ2A8JPF2zzCVvfk2WZYRcwnigfn4Vegjcu3RVefo1C%2BpZpMjHpeByAWkeCYPY4l0XxfoX6Aa47CD0rYZhWO&X-Amz-Signature=773c962c7c943c4178cd8fb640fcfb63befc845d43ca01c840f597339bf43cc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625LBIAOI%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfN5vYBvMHuzf8vlvYrOFkZz%2Bp8EXnMkfwzR9WH0APsAiAL1lnEKeec%2FpNsxWAwWihy6aXvGKJSqx6%2BWK2bYRLr8ir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMFa33JVJoDpxYQ9XsKtwD32beuJDa6BdvPR97PBut%2BX0nsVORS%2F%2BCNeZRIu7bew6wuJavWXB4WLR9gS4W7zKQEZvZmwGF02tW%2B1RfJbejYae0Uz%2B4Eqwx6jTot1auUgtqK28lJzD%2BzpzevdS1JsmAkv%2BeEzR8rMZ2065VoB5iOTgzD8yaD5AWEoWToLMygM7cWXl3TQ8rVyAmf1ktAyWLCYYYCVRMDajloGMr7IIOLc65Z0aJMqIw0XAqyX47KKQkeE3P2I%2BboFdrpiA9maf5qjPzgBDypMW3K%2FwqBCcAucab%2FWDkYyl1SKGs7%2Be6AaCRLGktDRWwzm9%2BCc6MS%2BQAk5EQKgVGXKpQ22tABl3uxRXxkP1WpVqTspiMgDSh1tzJukkUhrHw8La7kUtDdLN62s2ehcmnKqnjAGduKV%2B4nD0lJ%2FoRVtgj2x%2BgIt3tF1x0mJMNtBaZtC76QuqhaxI0AdDOjz7Wa1ri2wPhnzBGMNa2y2RQ9lGQGTszPaWG3UGzDWGen2wbJFtKeZb0KIxBvTt4ULm%2F2pT2%2BFHypypS92vqFoa%2F6hLVKV2tIx9Lci659qnuaFpf%2FaL2891ZZjmNn9hT4T4GEN8309C%2BB8R2NDzRtNQqvzrEtmRQ86hnrICJzEFvhMl7%2FPQm6Nkw3Y6kxQY6pgFP3xw3Tyjz%2FAwh2abKOXTd68vKzdCjs8Y3DiSZZVCFriljBklyU9rnUuAig0msdieI9ODiy9Wu3ONCB2f07Pb4j4VQ2Loqe4%2Fkbx2aPAGb4XSe5O4WonrjhyHIl2mKxYPh0Jkcpri%2BYjpGb5kVZefreQzkDp9Jy6MhnGTMW2muV8FEVCVOqT72i9pdouLbZJB7V%2FwumdXxugHbJCmBohELRdBd2siE&X-Amz-Signature=3fe7a03a5196bddc428c349c4fd22c91464837c9f87b8f60f268c86d62bd7e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTXAYZQT%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpKxAGhoNITSp6VSsiqe43XT0ptYq1ye0MQGVZQlj7pAiAlrNyUo9AZPpDQvr6KrmfGQcRaOkJCRnjvRJFJC0AyFir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM9Tvh%2F0BK1Nm0e7TaKtwDzPglsCn8xqEWLtJyvagag1f6LigQSlyK5nYE1gEmPi2ZS7Le%2FY0qwFcHSJBBHGN6oQrMRuO%2B8D0HAOl0UYAOo9L9dGfx0gnKHt87yiqWO75tFHg5unJ8EUpO8zbL1hxzwXlDr4nWsyD4r6%2F4Z6%2FXXlXg4uqmJTd8VqlhX7wNCsSRht%2Fai4LDG%2FV3qOPfNC%2FjVpdhbzxIZ%2BZiEGIdawRKlmiP0r2PFTq8tBysRpRU5dqMkYCOkm2i6CAmCNDs4dkuPdMo1OZJMrwEQAQwAEXx8qTo%2F7PRJQKi8AANuj%2B3RFXsbVY%2Fe5aKqB35H5e7xE0iIZIcWSCJcjQu7D%2FQDLv8rQNnUnpRPaGVNSQxN%2FrY7hZiIypjJ%2BETieOd8TaW9jKPIbtzftmYwqXOTg0TZiuExr9xGhRmW68BzRihU2ORGzMJyq%2F6C7VWH6klJeqN%2F%2FpCY7nUBcIP8XwhM5Wr1Z4efdRnpU0Lebse8Q0W1nMgSF%2BqohZVlQ4gj%2Bas%2BDEUDqQzeemQ9HEqm%2FkenKIz24LLX17%2FEHkiWUaN%2B0bj3Tl4q%2BSSb%2F3ABs00VWhddqdy%2B%2F9wIrMjGC1V04ce9KA%2BC6L6FFdmxTg%2BPXRvPKCagZoPPKFo3s9wikThqFJKGZQwmZCkxQY6pgG6XDehFqukrqROou0%2F10UH5gWe0YXz7Y0d2tjeEGzPGwjZ%2F8iXRP2TOkgrqFtxAbVpYv24qTJeXZauHn0367W5x3M60puJFKVf2cVCLVMCfcruW%2B6X1XfCqhg7%2BTt4s0qLzpYa3MjGmCuv6eg9tVXi4OE0q2g94dThXxqCMBy%2F7Y7tTyfiTGbH%2B2No6I%2BpBfNFnWR7CAQy2MaRBkO9Lwj%2BjLdd1u0u&X-Amz-Signature=e0487e2b35d75b86a78b58f46eaa0e77f65db86f6c19b9b1d59d9deb9a6482d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRZ3SOV%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj2%2FzGq9Vc6BfeKl1%2FxE1Zii5%2FhyQriayQg%2BJbxH%2FCaAIgUDMDnvGD70jPzJwpMWzGjT10wv56jxFyxM0lNsEvDtsq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDDwMu8IpBr%2F9X5i2kyrcAzVvAiNQQVwqCNL6hDc63S9cxXLsIkgFfUEb%2BhvhcUpRRXbfNU8gnw%2BDZQxlPXOrJlhVDx7W8rcE989xt3CO23Cq65gi8Jkcb77Z3RBYNWZJFw2F5f1ziR3GKUPrVIJkmixjsfHTRK9SQoIP2zBa0hI2THtRBpG1P6MYwhT%2B%2FWs%2FOuFXH%2FhhFbSPmF30cANOcfY0vpTLKZm84Jy9IbEfbjG%2BiE2rXvhktcXSu%2Fj1P3N5tBkHV43dQyKXV9%2BxZ7H4VQ91UbH%2FV3nUWZ7%2BNrcuFHIfA%2B0jzqsi5fzEinzHN4xIVLPUyWdAImWzxZ2iTI1T5nRfS64do5t5MvkHZNSNYSQb8jEzF5NiHp5S6Cjm8Gk2TthyuIOBUeGb0uaGYd1LezkaL53ds01aZiv7kd7%2F1Kha0y3dFKwbk2dK%2F8vhS5hfESo7RZpLwHNxp3LQAHK6aMHQCDP6sLL5fmcvPK%2BgzxUt9RgbUy8Hs4HA6ECWIuK8uNWbZhlTBAiU4YjnkbpwT1ZsSwYfFg2JUx0%2B3DEuJrYce95JcPeWNHFs3FGTlJBYn2L%2FWk4LHsKAbw9gyfyo%2B9Nbar5fT7%2FWYws%2FtyF4ZPqxgYf0jFuCz39iSpmZzol7aShTX%2B5d87z2Zy5MMJeOpMUGOqUB2VpA7kkWMDlwC4ccQBlpbrTwqKo7ibIO6PtQ2HDRXQbIskeleJ0zIbNRaXGvAQnIOYJ%2BR5f3anBLd4P4%2Fu%2BmA4u9crzeRMt1aA%2Fpvk2BxRbvCmVVTuncPoNCNe%2BvnATYnhlTt8YxNlhaqrJkiUD6x3nMc9cdj9Zi922pXhAtpbj0mBvu5hgGHlS5iZi2UAuLxaVv%2BJiUBr9rJ37mWWk%2FXcgtzjjy&X-Amz-Signature=cfa092c4815ad695aefece29d544291a05f6e6f4c318c2ebc2b355c08a8ad6b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LMQFUZ%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCwtoBeWgRXpMJT4ptIK3ptWj842jRILcCFaupR1GN1%2BAIgQyRnyj%2BnbcvCqcwEaTGSRmrXS3UiQsvv0CprOXhA23kqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwT7fh5ogaXQOtRXSrcAzTAtU1QR39LOH%2FKbOTnIsPNa4lUMhkmgib%2FhDFNqcPHwi2Hf1oYoi%2FEafp%2FRvTD4ohZwhW8rr%2FwjI2%2F9hirOL4Abzs4jDtd5uDm7iltuVouU%2B8ziUNXvgd2IrEMF7HFB3TU9zgJB3pjUDdP%2B1ECwVODxPhiyjPmOVviP98jV4Zl%2BQXbXCBQYiwv4IIK04tAR26pB2BiUNgrzqFN4ieRfn9VquHMqdLdWFcKdfy85sDkPBdftEEM2BIAsBR9vrZhcS1e1jJZXa2yc6%2BUNkTJg%2F9aeWe03jhBCzV4aA7J%2B2Rb6DAkPRi6%2BJizWxBv5ToilNTHCIvmp41szIy6I3nB3SGg7J0Vf%2BM8thwXYRoWL1SoDPH987zKHrgR86wKUdvw1jIojR2K61N93q9%2BqdqhPRjEjMlG7AwITEmjuXOSfhO4a5UvAGrTj%2FQJWHUKg%2B1vCrx3r1H5EaJrJSlUJV0mP2pStTDatV%2F%2B8PeEQykkJJMJDdrHFGAYGlH%2FeQTCuxcYXBZMEX4iCU7fKhnnXFVPGXc8ZfYcZMIeKFZbUtoLg9CIlpu%2BVOfRxx6GqplBxA8i9aZZ84O9Aha4Q9LAdjrehuikPGrf4OrerR7f7vkwS4XodU59oVJZmaEp156UMOP6m8cGOqUBbEZzxdWMatr9TuQjB8k%2BjhMTW2d6HzzOgarvSYiLYRQQHRllAe12q4i9%2FJENB4n3zMPz3JCxpxmjxZ9oSO8ca19l2r09SJJpHoo3ci2gQanBXwaoo2C4l4WiVwl%2BpnrBEbqcvkO%2FH4H%2BQKzIQYn4cm1tJNWe1quprTZVhvnJrasXZZD%2Bwhp%2Fawf4yyyuzrIZm0p0PwwxfiMnyfeCjp%2BY%2FhPX%2Bn4d&X-Amz-Signature=a20160be23c8a981dcfeefc1bd990fde70549041957d2be40bbf94f51d5af373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AXT2FW4%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIDf%2B9NR6dAtyUOWpv%2BVdEYMbKOBT31F%2F8WL2%2BUtSDpfmAiBy1hkA%2FA8Le7XOUHAGJFLx%2BbK90iXJqcnAzAbEnggFhyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLS9psZxmhDchfWAYKtwDcsqszorKbGPo74QujBGkEUVe7DQUt7fjMOfkfLkCdhpqJicOiPJDfyJFucxbv%2B2mIIObFE7nOi7T2MQVrQtdW9tpAKyBFqO3GCtm86lqn6mnhGr%2FPAOcZhSybqYlVjIyE1jnZZo%2FEpHrx4Pt7NUgIkOZav5kki%2FwoUfl5GCHEknCuOpR9sCWR%2BitnlsoWYqG9fI9hFWpniOt73UYYKaiSa8jse5CHNj1SXpAvGhSbGHy%2BJoDzzFobTxLRDYu0t2eFQFVvmmkSn%2FMpccGj5LKUWoJr5fuDXqTi8IBim48jD6Ti1i2P533YmS0dH9Xl74TA2IwdZkqV9madYMKjV%2FKRNOc1VK8Yat68tkjRZ6VbXJJrqfXUSOl05unDg9mTl2a1X%2BZlHBWG1dTkiBBpnyWp5Kuc80Eki3ZhJE5%2BTaVTb19oy0HDjpm9VAsmmMwybFNxxMDMJWnmlMyKupa7tp0XX4oBKurXXeDPZzhR33z7thxgLu6EoJ%2FNEpiJwBx%2FNUYsQkpNiuEzn4FaFXQEed7LhwsclPICL1c5Q6kuT%2BboIWL0QO52TtX4aWjXj9PGk2PXQqmAYqonfN6AfE1e5yFwZrwkh2Qs13H6ipjovVhfoBo3ULx75xJ392kuMMwzvqbxwY6pgH2RgTlhXOlF47vGBeOpkKbwIFD6aFdpOS2pi5aN75Df0oClKOx8jLa0rc7ZP1ebPDHxS5HFmGF8hfc1c0Ddjwd4es1Gi3Xjiivimk5sVodYMot%2BLDo26SOieJCcz3yovxZl9pO8skWecwzA3CI%2B56EKHEu0JvvQliU8EhV0XllPmIB1whzrtsgWCHDqA8pLjP5dpyDgAZpW165qzLqptB7N48%2BDCq7&X-Amz-Signature=925d43422baba8252fd691001ee2dba34ed5eeda36a0780725fd89aaa20cc3da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AHY2NZV%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHNo0ce%2F1yhuHx5u5OOrX8Z4T%2BJYARpnSbzt0gO%2BEKXSAiEAspUYhw6u0bRjU95uM1RLueyNNP8SW5YKUhhybc2977cqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLM03IDEoDRw2macqCrcA8LUT6PgvixAwBaaeSZEcItJrclPRtqXOCI3a4JQgzxL9Aggtw2D%2BFJUo2xN99VGWKAv1%2FWc8we7yh7Q4nnlc82Lk98G89QJio%2FEgSxMWge78TcP4o6AL%2F%2BC27sZzC%2F99eSIHDPun%2BJwPdxiDMatz2Tbzz5bZnUzlqRKwayp6wE%2BKCc98dQz24RxES9wXaO%2Fjzjt%2F3zjU0sI1Q%2F35dVSWNIXkc3r3IrH%2Bgu1mOV7omFlJihfn4tNPx0TPIezeAi7FFM1uWi54rIQrCKDnRd5A0njD96pNYB1YSGrNhj1Fpi%2BuPgnFLyICVEW7y6AUMniMD0Dq%2BY9rawSv2ZPhkkRBOK7hu3cIiexASCFhhZi%2BdbL%2FRvxLwtSwdjppPQBXGStcrpvJ%2F8TemC7XS8V3utS0JW%2B82oeiKzrgFn2Pv94LfQvGc3HH%2BcCXlz8Gx09jrCJCHvs0Y0aom1%2BnX4aFlUZtf5olnAjw%2FqUsTkSXKOCVK0ga31r8R8qbh8cPKZo1bc5lN9J85S7lh67oAa2K8PiNAWBBJJwKEAbvTOEh2Xlzzl0mJ8ifS0gsbfhfDUbwHWEgj3cKuIpng7KeLxWhQYVIR0AYSzfzeh114j7aPDTf6cq6AuGarC%2FaeuJbR3pMNf6m8cGOqUBOBn9E0PtwSRvAn75%2FqPD%2FJDnIMDAMHh8Y5qwYgLe0iu06LsHY893YtrE%2BJEB0KpaHktP7%2B7Ayst8aDPq9NLqqwLyzMsr2mSExNroSMhkyvZ3jsC5x9UkoWlnoUuOZnTrj5IWXur5Sp2OlPgCj1WVidqZObX4iOZ6FuuCmYcRaw2Mdwr85ZocIxqTPrUPsHwlXzx2R564n8YYMH1pDlIN8j2mXRgC&X-Amz-Signature=4febcb5944f61557e984ad81befd72098dd176e91b8dc7f6772cda46fc4ee931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MNHXJEL%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIEzCQEvXv1DkjtNolrpvZbZt9bT3Aa9AuHfjThwc6SGHAiAVq5anp2vc3JFIePGCay5eWu2KlB6FtzOGjcNxQnxFwyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwrHX3Bb19zv0DUGrKtwD%2FdC2SWe0FvjWa8Lo9cnmheUR40E5TAaorMeVGk0%2B8lqYo551zLI27mQsd868zg%2F8C6bWU967%2B9wlKswGoVwwz14HDziTw%2BiIcG6%2BHcrOR8lQFevQuJnniaUXcw8MBqlLYqxiqUkbzWkzw59Y18h1Dq5j9TRShxXrEdGqTuIK%2BsO08L6gq7GF7wZNR%2FkTu%2BbvbRQxQMRYdB4WoDV4KndfqW1aait5xWfAIy9Yps60tAH5xU36rI04htBq9A7237hFoVZ5dONAUai0jE2%2FkabGC3Lb1hNLPfGQjc9e2WcMwDHryTHrb6vw2GWReR8W7xM7mHVUmi9S2Ib0v5v20%2FYDTOP7JsZEU9aNjpcqyUlnixFnGvqLemm8SMUPN9IL3Fa83iXUbjaqgTyjHtOM3MINtu%2FigfioJWGH0XNdYxiIcNALERzSMQ1bYh4k2pdOOxdtKFpsiW2cmstpx6A%2Bgo%2FK2oAVGKVJwXYynjm260YIENSj4R2SyuFr6glBqIHT7Ndl89n2mmvjNhsuX%2F85MQExPXqUylTIM5ccBVaQ3jz9xMhoSiCQ0064wwuucHVmZGG%2F9Gq7FlcM%2F%2Bq7oSoNZ4iHmh%2FzqwRG9Ldg4b3JNy0kSxO92XoDIBQY2E14xtQwiPqbxwY6pgG6L%2BWlDyUFlfcAvS56Ga8xdvJKOenFd8ovMr%2F3iW8KdE2dkZdN%2BYZDcbkp%2BJfNLeOsOE2wPCfzRmkgDCqgOKNmiN0Yq1TqagHN%2BcFtJ7Ix7CnG%2F9hGueaoQPmxBlMLvWqytotkj%2Fo5I2V5FdzDRZ1qaN9mnjAgFBoGdvcowDfCt0%2Fb%2BU5egKldMN%2Bt5zXL9%2F%2BDMDq3DWbKNbCDUFNkk%2B5Chlipvs9j&X-Amz-Signature=e191de8263024b877409683e0102175d2e5c8d50b90c86dd1f9550bd1a750fdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

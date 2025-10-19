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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VRV6VDV%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC5dqIod8p0MhKBtyzunTG4Jr5NzM5mqgIRaQ3A5g%2FzVwIgQgXm9mhLuEI1EKa8HwUu8z2WTYQu4DGHNathVwlI8tgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfbw00By6%2BD8MxPjSrcAzSRTfVpM0IksOxP237uZiM629CKizKItA7MZ9Zgowm5pQk%2FMIoDpgpBpP94d%2F3RikR0zVypvzvksrN7QxLpdfbVaBfD5Df9RazxXqTMFuz%2FeTkB9KDyKDfa8Xge8NoKJRvqZ%2F%2FBqn3%2BeEbuwoy3IyBhx%2Fn%2FWy1L8fMiJvAW1nGeyK5lCZ7UhDAN8x8GBy76CZa2OpQMMeelR%2Fz3dZe%2BOMSfENaueFPG%2B1AtNILqu%2Fdn6kicwFqysPsLnWagKtk%2Bc7ARSy1dIfQH3d45mqHpjCJqiF1OEC4G%2FNVNq2qBdBHJK21I0nRCE9Kow%2BX66nKTC4vwIdd9vgxNBzc1RI7k%2FX6PCNRAkv1KEXnliJo5mjZTNHtOwcDcRuhby9j9%2FYFm2WJplqhTeDpQVk7oGHfubmzi5FfEmE%2Bh9YbF442MV%2F7AM2LH0MJ2WRE9g18n32O1RIqZ%2FaDsMHrGEMZ%2FGQhmD%2BXvlkGGuOcRg2ACAu9EMTwt0UoKqCMeM0JAFGwUjsdSujWZcrPfB%2Fc0laoDN0LtHOdwcNIpD1jyHUFkP0dTlmnsFDPRiZIBBtZiuDbVkSXTk9k0YMZxWImHPU7Ig3r4Rxo1KVvZ%2B6YQLA%2BfSymz992%2BcPktmGhJZ36W9EWFMI7%2F0McGOqUBmK5TvHxQWQohnsLwIn%2FYEqiLwFGzJt4qSJ4e7EwokzhRNQ3NjPX44nVsb5b1XQIDp1nqk1LeL8Mppq3SzFLu2ZQk6dKFQHwk7WE8JjV8w0fHFJjortUzbshwzCiDVnUsJVU2PEQby3r9%2BdfronRuEBwmCRj8UYYu5YLe0OdR%2BZxhvK4Na95KBjuHsjbSEZwslS34Dd6okxHRal%2Ft3L%2BmMMSGaGO7&X-Amz-Signature=a45b8454b47255da7480492e9e25e88187dd97e1d54ff5a7d41bf17ee5f4f1fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P46IEBH%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIGb54tJHEvZMBdA%2Bbbc86TCEUgff4t4pirusG7l6LKBHAiBs2SXcS57i66rwqRAsbRW20vdpso3Ea%2BxyOEHAHhKwLyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZd5JT8nCdHIN%2BPOlKtwDeQ43EL5jmu85ySeUQOKObmJUwysibMvL0EIi3cF9eUAQVmS%2Fu99UhYU67eWp0NrhZ4pbiD5uMGmRaQEASlVIWVOZNbo0c3Qa6tdKreBHDjMXooihvhrISu3qOMGulvEijr2%2BIWX2OPtP91NZ0cnyhzbweRrsFffuvJJlEyJpebcE2244XM71wn0oncSdT2xEKp%2FSJxw6B3vN71kR9eY8OCnzpHP7NYH8Q5Gpm8HWlQ7R7ZajKdtE%2BciQyTriQeEW4TvDgzagpSFcrLiWzAI0PurBHQ1PApQXfYL%2F9%2F4acRgZN1TlJpd5glEobkb17HXkXzkAkpi6mYSFGuWJZR1UbB4C6IpXf04S1dcH11rrhJctMTV9qWxVsXX9jWyo%2BdkW7%2Fod4N4A2umz93eu%2BEV%2B%2BbqRIgPsm0aBlcbP1yRln1MlZlsZthaa%2BTW57C5I2VO%2FhBANr0X1EYtET8TPN0ECesq8BuxHYD317Bu80251Cs1YKM8tR0J5m6e59iufHuxbDmKPCgVftJ0zlpPr1RwEo1bJGNuuVdEex%2BXS96OMLs1ewwjIYXDFLbhJExJsBQ17HCZsVmyElAuGhXQJwF3jVr6d5cev7B0jZyleBRS4VjAm5mg%2Fv7fGpxNZ8Low%2FYHRxwY6pgFq%2B3MYMZKXAOCRfoRxzEMKxGwhpQB6j1Ycc5xUKE8cUIAvq4r3wqWJAVaP%2FfvPBiZW0FtcLwDqbX54pOTc6xyWPcy4R8n5fOHoMj%2B1R4943rQY7MzWYWrHwFCKvIbU4q1Z2jTPOgVkKm5ddRPNVLu0Kp3maGJbSug8OuXywAtovOr%2FNCgqDxKSHJYfOJyCzgzoqfAGkTrVcd9kXSequZ1dFzly2UeY&X-Amz-Signature=9a6719ad4733e507c6db75cb4faa8bf8073ef0de2bb9e8d98ccd41e2de13b05f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD4CX4YB%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDlzFQyM2thcqOfGn2YJk7Vk1lflVgcCB08SRQ8vSITEgIgBc%2F5Yx0kesYiNqXX%2F6%2FhLO3W%2BPMbxTr1fJNKCCK2%2B8EqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwpIIwCyKD%2FYnjE7ircAxSxvp67nJlNuHcriRbU5m06zrhOrC52rVh4vgwAqqNOIZUj5YgLbpt%2Fu0rm9bl3Ma81PqrLb7V0KSflch4gd0vhmevOO0I2TGal3EOkA7Ov%2FuKEnq6%2Bmj6IE25ds%2FMdf5WwbgpB%2FlqytJxwj30yZQ7PfHxKvdvUcB1CIKpBI4hnZPnnvlzuaWdV03Qz4jS11aTsbJpqLQ%2BWTL4xJX%2B%2BN%2BZr6C8EturCPbUYDZV7HrmY4Lzv8MvWQ0QnfZgCXI4HzvPBS08TZyJKwrXSqySM98btgbsjmHpd90OWyKOMYQMGyLfH%2FKlciKQ56xvh5kzZvr9zrCBzuJwSeDhI%2Bf1UmXZd0OR%2BKZ2ipubfF9kArLEddoXG63r2UF5b5aOHJac6LMN7LNzpBxzb2cI%2F9qb3McINE%2FkZHo2%2FsRC01Gda5cm9q%2FjUDtQRKr8KeNVmtjYePx%2FMY6LdL73M7bHovBQrOm8ZnsZZPNkfKvnlrKi793qaBnBe%2BUZ6CLv2b5lPCclGrVuMMMaHJC0YoUNO1ny5GzJ7lkrUalUeugMiydHPYbvt5%2BTGcCcaJ3lCVAOEYwSESCRkEEdIe8dDmBdsqMrfSJ4x8Beo5JlzzUO4qDcRc0PKBsKFy53tPZi6Dl2BMPH40McGOqUBkVRHMAyhCtCq%2BbHYwNdqEBl1chkqwE4XFZ451qhVfVnGHY5YYCSjd%2Bu4rRJ%2BCm6y%2Bpv9YEOUrVuu8bY5qk5fX%2F2dJ9Oy1118PbNNv28vPT1eNaPcVIa%2FMqux1kvMzHf1mpURNK%2BKxtxBFunchxmFL1yJkW201zTmGb0E4jh4K0PxFQvOwx3LLKcjqyPmnN02VX3HzCGsiG6hqwj07wtLOgDGj8r6&X-Amz-Signature=4008c0d3279bc11ff0aa75d8025dbf82b10366f3de9ad229503262591477d921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI4MKYEP%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIC17k9EU9bVVsdb9mXDAkgHGKiMyZxJBz%2BPBn8JfwveYAiAnVgZfy98vSAKr4%2FxAZEtSPzMw9%2BPyEdB9ZIRSbU0rkiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOM8hHjvvkT0BbJ9NKtwDzVzZqiYLp7rNDK0YwXDoSpPL18EJRyiSxIdw45NdUCD%2FQ9EZuKnknpJhWIwdvV4LhJYcUxN%2FmfYZdvzqtmWnmwgeiq1ShA%2BSalSoDWN4ntq%2FbBHhb1u7me%2B3XqDti204t0H40Gm3ZBwlvhfGf5%2BuCahYAPunfh6A1v5LdOP%2ByKZnposdIFL3bW4jSdpnd8uvjHbTbui8vwxVA1Jo0k880V2F0g800QROuEV8CiCNeL55nvHjzLjO31ydlT9S6OC16UexQDzxduz1AhEGs2tR83nFOD%2B74rmdmbgIgLbBQE%2F1ZOUNN27sgYyNVLoMeziiob%2FiETHUGxq2kOcD9a9QU%2FZrA5z5661ZXi6WKdWeeF%2Bd5ozqZVtKglM6T7tA3O2b38Iwa6yFWtyoFt3AMyGk7H2%2F1cIdknrJOywVKTsK9M9417N0dW4rQSLpu90OaR9JzrLyA%2FcliqVrDlyMHbBu%2FJJ0o7KF5fH2%2FVc448UJlTxTZDNtOHXJRR3ExIubzLytQHzggN3xgOFk%2BoIYTMY4XQeb9MeopV4D4FW38Vy47cOUiZNQt9nWE1pFpBwtgkzH%2F0VJ4qf2sIJPWwJphrVEQ4mRckc7WePm7cnvX3OIbiJtQYZpIdz59ds4pQQw8vrQxwY6pgFfMoxYThnNe6kZT0%2B0YU6%2BHCQcdUutXLD%2FzJ6BwXlohJyh0FYOSBh1VJthxa%2FUYbJrmeZtanJzTinW%2BG%2F9GTo6ghYX5UrUvB1X7hUwfBsaRBUwqsHTLi6U9V%2BK31DgKoCEdVniY%2Fd7IW6EvrWqZl0u7YqSAOUeLgYeQg0wp%2BsKt1%2BBbE7lXQZsnf3OSAQHyXnKEZrFyd1m3e1QRXQKl6CAQ6ygL2ai&X-Amz-Signature=64a7f894b7ec3ab77607e6f4a04d2a96feecc533d6c18c71c913a0e0050e4b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

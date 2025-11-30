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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKG62APU%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCUGR3QfbPItXn86d%2Bd%2FYb45lH6R5DHXcNbMBI6mRlz5QIhAKdazc0oaazdpFHxg4PxkcgenEOUj%2FrEH1TM5FD8RRFVKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5R1kaiOVcmKXRH4oq3AOfIexdEFIbV3L6vT1EJoVsjJ0zff8z0ueK5LGnCeitwhkE5J5PsFSS6m%2BvFi0X%2FBkjkQXdqZQhDZgGzbMMHoYq0SYVhdvQuLGj9kG3jMUlKbf5UBDstazSAqrSpGugjdj5kh1P2CLkvxGst0NioBUKkpjtpx59gpqk%2BjKolDRWAmHZhu%2BnnfbZSyTJxmLmfoxGfHBJ6pZT3fG8EqIjl3AK0pQquKgNl3FDR1gQ1%2FNt20aa1VD0%2BQ21ck35g%2BC2HHdg2OaqJHgt9%2BiQDCw1bcotX73niev5P7scmib%2FiF4BLDQ8NLEwH02QNlszLWZtfH%2BZCWhmSGmd8kjDjLrOcRf1Fr53QGnQtWmcOcZ6%2BshQ2mlo%2FhUvKPr0WDXBlFLsUS63qhFWnl7TQ7BM362t0gcwZ4nEII1gB4Sb8c7NjMm3S6wHXYbNsCQdS0iWqktuz6R9ZHsgdPMfU5xJMUvXvPAiMdzBUWeIw%2FFyEfoox6XpA%2F%2BZwm%2FXOnBfPSzDt7Ucoyb437EdOWoHMe13FD7ZENdghFCXJ9JsHqBHX%2FHqpgGFVQLM2U80D6ixyipFaPkVbjNB73ijWNltxIxyfjyxEYdwwDl5p%2BRrvEh3bYQtXOpwPIuoXM2wVOWAGmRZFzDR1a3JBjqkAVwWG5KWcXtFsFL6HzdhUlOlemA2BorIbpI%2FcayrJa%2FOHEckjKFYFHXWBCdT3e5E%2BRnYAoqsPkpNrewwYukcPjca%2FefO3OCzEnuIey%2B3MWYLdcpFsARQQFabVZwXsWOQrwkpKI8TbGabg1FcFaDwg6bNN2d2Zlguv0%2BvKTRvz9mGQUnvExMJDcnSzVmrG92eUSu4QZk3qj%2B8NQKlLD1l0HnFP%2F6E&X-Amz-Signature=b4fefef56be9303f0ee83510aed5d622a6af619494cfe3b5c62f29f1f90f8278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPHVSCR5%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQC1MVQb86Y5jEa9%2BruwhlovFAa9qSD5USSNtm5qSqpHqgIgU%2FkRfSzH0ziHW8IdmTyUIGGun0Lub1gMA%2Fb9f2ZiWPwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZeQ07e%2BDGD%2Fz0mVircAyQZzX6QAYllzEF0GeBx3sFv0zyHwXxp%2B%2FIfK9LTn1J1BISPlWXyWe7ioY7erf4FwJMnhcDSfKy2GzM9GPsabJ3YreDwGSbNpi3tPRAF29oO%2BsKjS9FVKvdABLbK7FYeeMImEQ1XeFroPYV9ufZMLUW0z5gZXf2%2BT4NP45HpUJqb%2FRBYqqV0k5pSxDD4uDOuPbrkK3bWvzXg2kRIj2gK4wiWtD8sLs1cwTd8KNLxIqagljoArS8OM92OaxfmLtAI%2BhfVQABThajSWsp%2BKPVN1LI3soJtY81UX6R%2B28OWMcqCjWydGvA82t8d%2FR1hTZoODMq0HOwLT78t48Vr5jThQ3Ya4vHtv%2BHfnxtYUnhs%2F8Igpq2J0NMB10wNt74iUGP1l7pzWf0gAizt2WQ6j3RbjArut58b5xQsA1sEeDfPaD9Ko6NCW75lfwl6jUJpXR30Wa5vqX9JJc6jHBhV%2FmTx4WbjXbOdDSFLLjCsGw1fB9sjq9pHG0AfBqhY9lPPVZREdqNdAbPkXuZ%2BtM6p%2FPIOT7osH9e1drpUjzbooGFijZnhnTeGETSz0a2ha1mJ2mpQXWGHp3flIK2cOV0pEyT6xSX54GIgGrNINuzLqFdXzFZyhJQsu1k4CnlX5rMkMMbLrckGOqUBYDq21%2BNN66kxP%2BIrZKlyIm1MntXduI3yL1bi6QpwidOUW%2BpPsVnbkBl4MMUAzkQVisvkJAHEnwQW8hUn4uxhIlPdUVpCanXZDgCgvzSBNGuSgM4DNoNegweHldzw%2F49OxdcbWKKZikBiCt%2B7s0Vn8zk%2BKECyx8HXKPdZQ6%2F75P3hGvQVGsLf6gyjBS8MRt%2B9xhqJsS7RRzVkox4GsCYwcsx86crK&X-Amz-Signature=0485d606a6e434ae2aa41a77c3f7bc0e0911faf79bb659cf2206068c89f4de2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWZ5VAFL%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIETtQey1ovgoF9upOFcZMwifYdLAFAOhU1SdGUXobtf8AiEAvuVF5UNxlbuO9ZOrKm97XJRvehOPRhotj8MI2tMqPfcqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcZWbkagbVoXIyHKyrcA1g080lQGjztU9cqEsxHErJj2TUmkvExRQrsKbYfs9kFSIASWuUwcjRmaFFUlvPVszjo0ngzdKKhQX6uheEl4AmYSWpAOd4ACAgjPEVuarOAAiFsll2qly0rUDop%2BhdV7BqoSvd%2Fqb0CF3WBZ%2FaxvszQjwIUxFUk02imyk8JOguhjt97BvLOCSj647AzVB6XWN%2FVy7L1n1zd%2FW3z5c4ffWXVnut06HC3%2FfMh02lsYJsvr3tp3EahGG%2FBFMf86mKrM6jfJD%2Bkf4lDS93pNgDqFQkHEiAFipsCpL6d%2FIs1lcrAkHItyadNfVDor%2BfqM%2BWRSM0MomZUE36Dy%2BZW1VPYnsJJFR97UJXT4TUWaRlTj1Q7ZimViWT09HwrsyuVo3aaQ%2FTIFGYDCWQyr46Qe%2FpxGp0jD281yMxSBxv3U3K0ocjeFQeKuuEzou4uXnkGDgNkBLQNIvEFAlvcVqvy%2BNspGUqQ65EWa5c%2B1dcALt7kLrRTn9tm4tmYc52lw4Y7UW3DogjEB35h5QpyQjtYS6RrhZbTo50rEDJjcgZl0zeesv3%2BBIGfJZ4GuY92NkZozvXnp2s19I8F86i281yDeuRGkI9rWybnTDwChxolTXN4WrZEDC97uD7nTY%2Fi%2FcWwMIjZrckGOqUBGKxaHVWGxEB0ZxPVnPKttZzhbLVHMnFextbM1Rc0W7IiSC1mdqtRUQbM0YL8pWozlTzQhpAelUSA1MBbbyOM9uESrAZXEzlJVRYwC3BRA%2FSIP%2BdhEdekZuKnFdcpB0d5ayg9h7wDwaAmBThdcNWi5hfaCdvhn3EzTE4%2FOtyDk1NCkixAvRhNALVUeJUV5PIqxen41BgscCb32uA0VpDKEhCwsjtC&X-Amz-Signature=bef742236888ce9e6e24fa9942fd50e5e7730e47c3db84267e5e8ce02f4805e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634UKU2UJ%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCsQ0qv2jn7cq4bEwQG4KAIzISMK%2BY8Tg1tQpK7TOQCpgIgS1fUXHjf7PyJTKLtXi1AvyQ782vDwmQJ367lfuDF8ogqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7Vp4%2BCdD2P8hAr5ircAwbrKsLZPf7olEZn8WS8qJtsQQBV5VVPcT8IjdAvL1%2B88GqoeirVCK1ujhbodx%2FYrsnLsPuyOgCSk3%2BFERio9eH5jMiP8QFVSmvCzqjf3KFa9pRv0w2INdz4KaO76Coq7QKkmUOH92yDUQmmX3xTkCn1SjzduNj7BsaFDSxeN%2BAB8U5vigy9%2BiZ5wBNOpadANkY8PG5KM1hqgxxkQspRbyxvVUmumXx7amd0wqL8E7hhsz7OLrItrQNnTOY3BWQxSkx8xTtH0gzyzyoy9%2FYG0SkqxRv2GTCIIf7MqSeoZdfdORd%2FcAbwYpd6ol7MmMuR15kdFRkvHFkvfeuzHLLpUuMpW05PjqMbqWQ1dYJnYzjgdICdJZ%2BNKrcpP5mk4MF8RMJ65Im9nKkDCV9Q0P%2BsRt%2BJjRIr%2BrWPY6NCudgaWajZ7yCks7isxCn48%2FLpi43%2FnUJ6RR6jPyauOtqqMwXQwy%2BEY7ukfQwLmXaqSLzQh6e%2FuGIvXHHeJlY9FEG3IdDlMYL1KTtA%2Bqu5g80mWL9SWneR%2F6U3Q0qi2VeOMEbG4mZ9p3diKjnkQeJYNbL6DF629cwoLl1oV0YSQswhy8dgI22NGwmNX8tQ9T3wzJ7vJ99xeRemGj8jiDsTdh%2BgMK7crckGOqUB0PQaakUnfJ%2FO7KQzA6BBLlOBMG8QpcMpWObjX%2FEiYrUW6gz%2FC39G4jK9gl%2FsMMlrUGruk52FlOcEReCZ3LeOKDurKf0OhQXCNRIhoGeTy%2BNhMcs%2BzvY9CItuqFZHaVEOyg%2FApgEEjzb%2BO%2BKGKwT5%2F4d%2B9ScQ16PsBBAZ5cqZ2modPYEemIMPVLozVrv2I72WaE3pmy%2FjYc1Qu%2BoZsxEU6Szo8gjU&X-Amz-Signature=fc6478eb22041e7746cf599f3da7e088f54032a1e7c88b698d6ca5f9daa1356f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

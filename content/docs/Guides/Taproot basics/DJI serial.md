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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USVPRNXI%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCIQVn7pr6IUrL395ahrSCxd5Ro4rVdwLv5ca4j9MCc9wIhAPku0fwsA%2B%2BQTl7pQkFIDcuidUmeURAzkgsBrfiTRvJuKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3sX6byb3NUzCoSt0q3APN%2BEIWwuSL%2BgxdADJbYXchDtL8MO6omSgEvlZUT2MegjzH37%2Bg06zaqqdwAorUQx%2B%2FfUinMlqIRLzS50c9jfNGbmfmfhhdX0JECSSLL%2BlZ%2B752yjdmTgJb2fPvMst4rTNl2UXgroCHYrZ8FpTM0NpRLMfW0vhgvXgFT2PTjdElEAo8p2nJHL6gBcZkU%2BfTgNk4a0PFKlLmWXJN5cV8eNv4be%2BI37%2FKNufuxwaKINFvXK%2BsoWtXc1m190FjoXeAPojhzL98GYJMBqmI4QIlLC4dHtuGJNY9mAAvs2D%2BTBnEes76x%2FjtHy9SthV5k%2BWORyN8F8Mnh7zr8%2FMJaE9c63m2gEroWNp6mrnEjj3Z8S9MbyOJI9WMZdID52jj9iMoLfZ7QnIQwV1W2C62BHzXWhT3sf2rbz4%2B%2F%2FmGNdTfpiGqvd9dNtomquu6PX3Il0ONdSGeyJUR38ZNFj683lELSfpxGqe56egWP%2FnLmB8PduTyY%2FLhnWnPcIjR3uVQsANHodqKnKuFiJiZBksPjnyGOOLfW22lIxsEMJMk4Zl%2Bupw%2F4tolRSn1aOFj5JYqUrNkjOULunrFedbWnE18K0ERgDdLsk1x6Lxm2dkqv37VryKWJNh39Sy%2FurBfvF3i7TCq59zGBjqkAczogDpLQ6ou2pNRoQCyfZoSASTg7RrrD0r01bSK10%2BewgNr0rFeG%2BhMlythhBZtT1FDlXxCRZK8EfQh%2BQd8T%2B%2BmAdksAIun8kXY5stJeDK68E%2F8xJ1ngfFQk8e4pU64lnxTlvpO8RP5smKNjJjygfHcfTSVWFIdlTsOi4pdy%2BOQ8KCQIwzr5NKW81DvewHv0s1h81rYuw4Pb5JLnvV2WXz4U6yE&X-Amz-Signature=885bdaf9c9fb4396ddb4c5c703de5d1cc0d9da713fc15310b92a8256bcab99e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEZ6EAQH%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDeEoAciqYnSygP%2F5q%2Bu5pCv1UBEgAgphsq0UNMTPxSkwIhAI7hWUBsHo0GCkgmtE%2By3wxvvfsydRRFY0UBsoBfZ6H%2BKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6gJNdX7Bd8g6KEacq3AO%2BnX0Yhzjvlhb3vZzZXSMgsUTCTEs2VTI1JUvI3fVJeVCT4I7phEmAk0vVdl73beAcMKum7XR%2BVagdCXvt7nitQVI8g%2BYOr2nDN7G8sE6Hb%2FyGPvdx3MinzRq9dQ2jFeZ68r50V85nt1oMmjSy0k4GB6q6iJ%2FWPILDb6ZOGafCSJppVVbRX%2B2naAol9Bp1Ikw7ah21dxM73HarFqSlHbOC2BaG4zvUUfvX%2F%2FpxsZA7T7HwMutmPuyqsIsh3fez%2Be%2B49JWHl%2BHZiJUizEtCLJylvtfdRGHUTYq2jLZPDCWBzWS5ZFejjUnQbPQJZMhOi39GaF8fPBOHSgbXr7XMkOVSGX%2FqLLs%2BHHzBEubwfJwum2rJnlDSQLaA1TH8GWR7%2BECYXE1G8W%2FA9P%2FZx6hTBr5Evu1wY9sLamYLNerats2WbsB6Zb2TqmHQzsLC6dDmwj3AX1DRPt5veA5Ora2A435qRWuW21krs0MEjidoUh12Az2vmB2ECWqmOSTVgbkx5JtIS%2BKM%2B46PkFe50RjW6N6c4velPI8fzA%2BSCDOffahlj8OOqXhH5QzCPwJWs2iQqQRK2IVO8NOfe0sQk%2FD7Ohff0oRwqIPaHQjhvG2YnIJD11wllNTOPl3850argTCe59zGBjqkAZN%2B6uV5oArTkdYh3aKwMbwRQGVrVLyjLXth0a37ALpVZDM8gm3R164K0x6mz%2F5XxEsBDZZmB1lUMJR35EGtUKLRnnB1%2BrzzoXsEz9gOiDiCEk6IK72EBM2Nu8Fo76AB80H39OYccyjAbpV%2FKkKNv2H8Kqx92g0ziBNEcMMdhluAmd47hyFZ57vhZ6gy0RpJ3%2B7L33ABol5yu731r5GxzGHrhbJV&X-Amz-Signature=70f2d0a637e64dc14702b71e83d330378a97b6ca4cc73c66f8da739a14ee64a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPZWLJOZ%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDjt1sgkXdCNBc6EmwopOCvzQhD%2FMwt8%2FwDwjirSd2mkgIhAKpi596vQQU%2BgBaicK6bYWAsagFxKor8NO%2Bj0uQj%2BW9DKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPMQ%2FWWUDMMbjBm9gq3APQ8sF%2F6y%2BxvtdbGtxjJH%2BXCpSL2vecapC%2BdfCSmA8wQ3OnBYjfwtmCb4xiW2TmFy4%2BdP7PkuYvydHc1mMsI97T04JN95h84NjYdIoDUFEWdxSwdghDD57zCY1q%2BQd%2FI7emo3IHvimV5dzXvEUxYmJS%2Bu9cneKAyMrEmC%2F4WDhISWDedRTGONoKYzdFUU4K5c%2FhQRMNU1Gv9SvH2TE54RTNcJwmK8ZI9J8ExJbknYIYqD3jX2zNp%2BFGBD7g4eSkMF60elzxcqp4xaDVt%2BxblIoNfYQ%2B6D%2FGVHPNR0PaOWh2Hsbo%2FXhStLyImmaLY8b6DkwdU%2FsAPrulgiDnonu%2FInAfsW2GNkOA33uIaL1jWmxD%2FjitUGULZ0omxSCKx%2FRP7IuSy7Kcecxoco8y8ZBEjXDBB3XhCrvq%2BK63z78fXPzwOH4JUsMRM9Ggl70a%2FSl6%2FtoIJbKSU4PLQI6jEwjLALfPDn5oG%2BKPe94Nao0o7Wddz%2B%2BLI8%2BYOo7taY8b%2B3QQUWaVQ1DY5sgyahHgnthkHs5lOWsrWgc3ZJIcCM%2BjXR%2B%2FwFO5lwcc4KLAmjY7FIjQygyWKgQOQ8A9h2m3qz5CYHm6EwFF2yLyVubw7YyvxUECjM4PZFUc%2BTwdwFyBkDDN59zGBjqkAWU%2Fz%2FNyiMaF2CU0Wf4Ev1aAKYpW4Ch1oNzMiRM4a7r6XzB6f0E7x%2BgAtMHE0NDmJCALPOUdUhHEMz%2B2HDr0Jk1teqWRKk56ICScoJCwtgQ8s%2BBTVnnH5ICPR1IiriTUCzs%2BKHa%2FhpWCYjyEY5yor1%2Fn%2FEIsx7%2FCkk1VR92mqJ0AFT7dKKqh0qM%2F42dsa3tNANwAlKnMMr25B0kyjSx9XuPxYtag&X-Amz-Signature=0119752fab3533186a3a38fb53f22bf35c47aba19b2db4de5158e3937bde4375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWPYOVBA%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDZye6BR%2F6DEAgVUVkyiZdAHSypWZu1UECD%2F9qIrk%2Fp7gIhAMdeQaF%2B%2B6eqvg2h%2B6jPZ2LRZWQrd14AeSMkRcyzb5NdKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzAlZCEilR9sgg4G0q3AN%2F7w947XG8apvuYW10SaZ1Qwx7oDg4lg3bflny%2BeMk%2FMI9L3x2JXEzChVs2upIfhO8cRRxuGWHjPvmFrl7BD8e4g6rDQRsiS9BbtAyuBlGQG2R37nnKSwEqzo4khhJyHZTjTjsqmA%2FtPHMQi%2BrxdWE6yf7tdLuf4Bhx4RF1VSXToi8kNqa7gtH9HT95DwsNBaE3E%2Fp8zfMjSUzHWHcZM6w5BN42fzFX9ZYR65cmGTaL0m2BlhySDJkeKPdyt8FCdZhPYt1Q%2FgVuHPh4wIlg%2BsQN5CFfMAB%2B0tBt81TIuu6dUSEYtaDnInkPSRk99pUgwachCVWSChG96UkXl4Pmc1BJ8Q54BjHwwEil82d4eNKijd4EEABpFevMwNFOYP0cId2UK1DGozNX%2FBt777u9lURc664GbgPczxQ8bQTCt09PV315BoIb4CDaDyndk4pqPA8ew75VxyVJsFjK5QWGQiOgSdkargU3EoxCsyypsQbQvN9YtqVY5wRPak5XV2Kv31PDycr2KBuPg807DZ%2BV7hZNsd6odPTMyvDlXmlgqFIIVZW%2FhpTOTYIDHDsCFMgFlPneyewZR3hFcnT%2BDFKEBcu3KlbTvrMLQq3I78I8kxHtxxUuyTum%2BqOOVbd1jC%2B59zGBjqkAQYtjlevLAzIvgBHdgvYSGDX5AbAi68CzBejo%2BzjmpyS9rFB4sw5rwJGOoaHg7lsil20FeCXTQIiLBUNr%2BuUL%2BcCLQJnzMIztbEFzOgJ0q50ARTqj%2FNaG%2Fwd%2FDwW6%2Bz25r%2BWfjIMG3Re0jhuF%2FUVyEc%2B4THIiH1rdDnErBdGNDFTfVAe4%2B8jIrH1Fie1dAdZ7vm7Qvwx9fYGrwoQzZ9vqW9g5d%2Fh&X-Amz-Signature=37c8d1c9cffaf8129c844994a1ac59c0c3feff826686cee17e22906f3bc34293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

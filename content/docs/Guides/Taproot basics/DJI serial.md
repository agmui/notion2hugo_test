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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR3MKYYJ%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCICjKVD1B52k6vLEBZJKfDU%2F7538SwrVs2q2LKWJRm%2F0NAiBu1YSNzl6t1Vg0AXRKC8lm1o3ORiBnjNw6513c%2FLYEuSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbWHqj9I1%2BJJDHQ3oKtwDFTITCvXJfqJF6lOXPE2E69YO8pVWdYYBJGxQwaCW21%2BRNxwt9vonIcO54fbDeynAQYDta0PvE%2Fcwz3%2FUCiINY76wTK8G8hFFDn3B0EOmOCy1uFjBAV6EBdjqnkhuV9myBqCFnlsYMDxylK%2FOH9Af4Z3kBJrQkpEXg98Wsxc9ky0SymHCfVIm3BEsT9qqBVqWoouauINU5TeK3YWaiqWIMuxZugFKt7KuIbH%2BxmATfKoC5t5MgqPbovoDTBbUfSGoGWInFVnKqzL9JRr1iyh1C7kyQKswMGI9D4TZwDLucDt2e%2BWLB88w9x0S5RR%2FBrNe5cI%2Fhe1nZWAQm9NJIt0dTH%2B8%2BGQ2Cd5%2FZwtm%2B1eQu7Z7J44ArLEYULtt4lDSKcomsVNMDgyB6rJrtZ5Oq5YqBHx6k496CdauJSkxKEY0dJxqgOMdkXPDIUNQ4%2BQHhSQJD3efXZFEZruerlmr96aHAEa5eTlNc5M1CudPgc6jKg2F7Rtb1W%2B4upFnI9%2BVgbRGIgu7XmlvFaSoVdJN%2B%2Fvp5Ntr%2FiruKDa4yMAsGZOhgkzIbEAa4KbAXyDXo701ozqGcIc2ImIEDIgHwgU9Ex%2BFQ43JLi7EcDhgRlhrjBkaO6xOikiw88STB8Nv5cUw8MeA0wY6pgE5UK%2Fr%2FX6OujCGN3lfHPp%2FruVlIdpzO0Gs%2BAMnxRgOxdG1VmtxX4OxhX%2FiooJFGam8TKGwTf25qikMy7vLzFSUK2UkxBv32YeTf9RkrylCDspNAhWt6G713mgqhJ%2BVY4lNmWgiV3yxCnDIrKMm9HFo3%2FAgdvwRfWJcZIAOXiMPNFzdciVL1SGDoQHY1chvWhKoDECQhA3u%2BIHcI0EpiKmdhWfbeDGx&X-Amz-Signature=7c143e8a192d4cb63109868032e7923e196defcbed7583ba47272bba53f7805c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUCNSU3U%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAyZ2hQENAJaVLEf4EAwvQyRwKJZDYsKr7jVQTVSNgVIAiEAshlOTm2zdhvAttrvwNpLoEqNuDQW%2F6XnembNH7mB6CEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK05nMiwcg5IsopoJircAxPP0Ki8qjtuOjk9HpAhjI9Y8NO5IFB%2FJEdJxGRIseKL9r%2Be5sPyD6oKP7ahyRCXfND2sbhJrdJ3uZ%2BJ18weJFQ7pLkzuf4EWsmgk3I1CcxCNcb3N5HBWZCNQfTny9oVhTMW8i8pxhcSGgTJjHgfrICYgLX762yhLSO0%2BMhzEEF0%2B308yUQdn3vTsNkrD%2FRlvTF4xRfWluFy%2FNWEW6FjKOShOzZOQy5r3Yscb81suevhnSGmwVN7%2FGkh2Tk5zaI%2F3wC3NIP8QHoVeEK17Dgpqu%2Bgeyztgw06VLk8N4eddrLSwI6hmjZ5jXkOVaJgCkR%2F1ukivdOTwkwAORCiQrqpa%2F5HalWy7F5Igq4CQAJFI5DhaBi343BHVK5d1BXNmHVlIC5c4nf6pUkRfktdhYld%2BaHgIIUqHXczeC5PB8%2FYayFUECChY12vzt2OQoMZLU%2FKW9qbWVvEXFPPGxOrI4yNPvC6rSRzmmD%2FvUTF1Ga2FXI4G6M5L94crcky4t5Tootn7l6xW7B0YnGaFs1LQ8VENJ3JFnbDir5NfJe9grZnxs1YegALTZV5uZ3s481c%2BI4ORhRu%2FrAuQDzCAKFKNG96CayvgAKlJ5DAx0z9QgxregsM2nYox%2BQ7VHS4vgFYMM7FgNMGOqUB0j%2F%2FbwIDS2Obj1MdFqgix9RhXfBrSycMpm8VsA7m3J1SZjuSze5g98Fexvz7%2BzTtB1EbWuUTRRvQZCDIUEHAaWPS%2FHPYmyCJeaBWQL0%2Bhqpl3cdMr7gvBr%2FFD9qNCWxR5cR44ZxE8vlPiL92w0GkMPEf36mDdw%2Bego8Gh8cjMILk9%2BcVrcdk8HSKhY7gz7Dthdqj%2F0wLOXSVS7sEf%2BUbe49dWOVX&X-Amz-Signature=237024d558325cbb747274fc2c365f767ab2208a1f82660222ee0dc6baa3f430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3OMO4ZW%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFbgJtEqT9RMctjb4QpWwOJqb1XG5sKNz6hO4ebBHGPnAiAJoP%2FZDj9EQXne8oY0Hp%2F13EPjzJL05gGeXiutTXCXAiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrNZlr%2FKRM0KN3G7jKtwD374HTTF%2FT62jIbNtRfJ7oNaTv1yUSHWICP2kjn6VFKv0YUWunqRGFJOXuhasMpv4DsgO3O%2B%2Fa%2FzFI2HdVvt1NXDL8c0Qa8wIO4bDXLG%2BEW42ZPENXPTv2Nz8euteThoxd5ewwYlXVP3QHSypcwnILNmPcsx98wIkQQhQKNIPsG%2FSrZmk%2Bedo932xshr%2FoEidJqUrYRJ%2FDy3Nq2VESg03A6EoRZXmC0oW6uXsItT3h%2BkFVllhR%2FhDN%2FC72M%2Bra%2Fgo0HhtjNpWs%2FHzzmWwNbJhoXpcqrbDzUycq5BC5c5jMvwUxBg%2FNL6Gcc6xjFMCW7B2%2BxDZiIJNfUK06v%2FH%2Fe%2F4nGuXYYdFh45US7m3iCWnsFxyrBWYTKIXRCDYOqm3%2BUJUe10wV0Ak2z%2BlalZ%2Fszk1T5%2FqRRcuiKhbl%2BL9RYumU2tYqPuWLwATvDdQ4CD%2FqT3VK0wBYwpaO08I1ET45p6avDSUSLWWNav4Hmah%2FJT1V%2FFJ4Gg1r2TVcwKmpn6SSBoW1lvKPtSTtN8K2x2DOA7q1Ql956%2BkBvPRYsDvfmVgClCIlTyiwDbsSFSSVtxauB1EOxIfJzpxGz6zoGxEH1KIFdpUEcWAkI5cwUgnRGPkvlaaiP00k85f1e0NKYcwzsWA0wY6pgGInO6ll7%2BJrUPX%2B5ym9AmWSZsM%2F343GRVHVSRDVDdspgdxBfJDjeR22cP%2FLQYT8vRHDgMYsI5eXwwm5YDQUFJo9ivyIoM%2B4jGKeURzYctOx%2Fkca48tOBpCWkHKAU72i2aE1vy6F6zf2NldQU8DEnF5nh3YrIaVG7hlofT%2BskGeHVEkQCPdhTo4waCfW1klgetUfjQfNLTnpIgWykfftvwvjbQb%2BdJC&X-Amz-Signature=112f295f5826437154b7deed08ca827abdafa2fa4aebe6fcd45dcfe590fd5c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VQOXY4J%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD5EFDWCBnYeYVFThsgMmKkaXnp3wY1FxRZV4Ef2rymQQIgN7ssYwTTKxGSq8nDZbwLvolI3cqmlVSLL%2BU5wlJe8RgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpx1wtWmF51OB262ircA4kGZt7sZGWyX7PQANnKBGsz3dA7sZbytAQwTxX6gMlR8g2WtKwTk7A06LEIxW7DHLNcxx4U6ShxyCVbNz9DLGLovVjwtP62PqeozDNCeUT%2FHd6UYhARP0J%2Bdon46KOcCd0TlUREPSEHK6e%2BRtliMer%2ByQ0GN0JfdIXHxmwSJJ4BnK4IvaQPLdQfBrrw4aBl34MQRaVBC7STKmR2eZ4XgJ%2FvznRdg8xM2uxZkOV59Uw7NdGp1cV7ywplHaBi4ooV5XkVZNpOQkQI5%2BG0wHBToG6evTqoNtJHFoo0I3UdqSlaV7VtIKZrXmhkVEoMkUj8Qq66QsEVS1E3qw6nx40w6crGohS%2F21an5dmaPoQwrKW5VjV40lWeYZM0YB2fS5pa%2FJt6f90KYMiTZhFUDaMoblJqC7k7s8doGLoqbQadbgJID%2FXUzbv04nOagxyh1T%2Bn1XknmBRk7QI7JbolKyPdoqMu2EsMOAoUQhCkj2VoAd1XU7vITs6K07X4TCU%2FHMLv7r24eJhKMsAUj3j7wIKZySQbG7agUzLDHocBgbtdSvURuklBF87yWyf60Z0Fv8rbhDjCBPVuZFlAjPS0tKSqn87bT8Ib9qwIoJSK6nX%2BY4yaMS%2FxqA6WO6apqbQWMKXEgNMGOqUBLbs0ESdvuEDqwiGkt2XnVGHCkde%2B1ZOovTwgowjBrzQjyvATSt8Ldu3eJQg9V7yjkCE6VFY7nO2CQ5dvVkoXjYH3dUebbxlQBH%2B%2BCxmgOVrKXcN4cEAxqtcGSXUBMloixkeiUrw448ULTVMT%2FoAksTPnHfbmRQrSaVNutGkKaYv2JOkBKfGFWKPXGvVV%2BB4NWqHiozYliyvsYuuiDHMku69XV8V%2F&X-Amz-Signature=982c89b000a774dba4940a8dbcf62c870a4c033e9d935ba11ee84951852bc98c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

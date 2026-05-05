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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK66MMAO%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByLy0bMyayog3qT2ok2UZqcvsWBfpCv1bEFdFVnAAi%2FAiBnkFxGGe%2FAHisSuqsAb5zhJ6HZgi65r%2BldQUWSNtuseCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMiPvUvno9%2BBAYZ%2F%2B9KtwDcIZBcBJ2SbfF7v5jhkWdbPB%2FrH74X65TvK5ShDZp26AKV3xnbENzIkyJU7uchf2QA1SF%2B2HlDAURQQ26SNO2puN7QJy4lAxjd8G4Pl%2FgxVOxz1Jpx7ELo1WjTqv8GazvIQhO6mBgxJvJLpK1yIhDzdBOsvxeA9uNEM6%2FhDPt62U0ScmPDawnzpdAFvgwkn8DfiFxrfA6ccyKtILbYv19HeztUtdkoJynq6i35NbrRYEIAp6OSZ8kIGUoCuWE%2FISNeSxOMRIRoOtL5ujE1VQIgfPA1rzJuD8rBkBLkpisRkUFDGs9EsXueI64neBgubZDwpbFT6Xy0zd346YOTJwp%2F0CYiexU6RADaSWyYkSX0kntPasIBDoygd7R0%2BZt8b68kpIbZG4jjT%2B8f1KSVATlz2Qu2Ga5EoXFqwZmHZnBE7mwCh5TwMU2RcwJvRLvJUgESoE0KN9KtjX9wf7lEc7N2U6TqiDm%2BvyR0PqYGGfNcuiUKeJCv0j%2F7x2lipq9hN56lfw4zjYJbiUqOAgZB6lutFep2IL9F0yFsUhrom62xgBwgPkppLZuYAEs4bJPNqjhHFfdQUEKg0HRZrc5pXlO2Gv%2F8ODztn7Mn7QRIOj%2FX6g8W30amf%2Fp0W5MFyAw56blzwY6pgE54m%2Ftz3OZP37qwLHFGgFDpPAECvDlACN1WRCrP%2BqZr7zbHZeV8ik%2FuK%2FErDO8qaffLow0wUyN0ghUCtJi%2Bf%2BPggKw1ByXrBr3TY8qJhWwkx8jRvMqEkfLzMB%2B7gKTSQS7fcLUVg5qHOamkDOMnTH0B79hUXqNLb1l%2F2ZH4NjB%2F3yjqVE2qUTqO%2Bthxohn%2F%2BLQ23BHnEzV43X4YSmuHhzZAmxYIb7B&X-Amz-Signature=7ecc575f866fa955a00a3cf83972c385bd22b1d1141b5a765a74cc5b657538be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4NCKNRF%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpa7bLDw3tRpD0vAODfBYPHH9UwWtONrEmZLaKWod2WAiEA9VVsntXhzAuOjnNGVGGvyzjsywr%2BG6Wc5cC%2FfAyWaMsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFe9gvTSFivkC%2FYUbSrcAzYJTIq%2B4hBa6Gasx7XxalTNmuj1PTsD5uxP9VpLddc66UxNonkJj96KQRPpel1PpDWOv9B2UoVy2VqRdxrQAMZEZsadcZN7EXSdfSiWuyftszuGmyUBSCxesALr%2Fjleeq6%2Fntx%2FWzUnlkdQKoVNPWZSwEBHxVLFX5va8uNU0pvR0RK3rCN%2Bkyy%2FU8vLjyHUQwIuVLFMthnDk%2B7Qjm3R%2BGlYFPzjTb5UanKOEal7xJarwodfGx1potRdEEqyejKba4ew9XsS67g6H25KnIEK8Ka0Ogro1EKSQmPJTeEsfKcqofwVAjgPE2wZzH6Qg1W%2BTawfAoivwkbA4cIA%2BL2TsFCkbfl%2BvaiGT%2B0vnrTKsjS31ngrXV6qXcwzEYZX9zZOu5tDvhfLviUU5OvqiW4J4nDDQXQrHB2xTI7fO0imGIcLcfoa8kYggbfnblM9LGBRSWtskC4yMc1ED8kzO1tR0rJ6PXaF6JiAYaFgCJIiGVp%2FbzXaGZ4U2tzxvecAvFYaHJQi9%2BuqCSbtZCc09JWupe8pu93ZnfyFdig62JcnX%2FkyuMrlOxk19S9u7ilIGg1q7k7SZrtqqzq4a1A61Dc57cruEOOC8ZhjWlifgA%2Bz1emKb0KoP0dh%2FgTIH4fCMNKm5c8GOqUBCjqu7nX4yL%2FEwV%2BCDSqdWKhnBRGP6HM9KjrgQqXdnB0GUFXI6960aoQrW%2B7XLDuNqOvpDlMXbakzfSrv2%2B3bA%2B6IGAUqufnNITMemDyfHJCjOQX5ygBwrRHdednZ0aroq3qEI4O1S30McO2PXn%2FafilazB4rFajAazgtz67nL4FnVe3ZIsTgDaQ%2FDrWLR4D6zfPKwpzXh6CItlY8D8hasdThYFDa&X-Amz-Signature=4bc81b67a60780b37f2b8f101280adb077140cc2afd2faf983e94f348cc9913f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AT2P2US%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFD4lg1siDQW7EtV8wodx4tyoYxvMtX%2FP1W665UiDWgiAiAmoWNF%2F5ciYWcL3Yzz1qgtEo9S%2FOjHu%2BjM9Dmr0h9V9Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMBAio3pAE9KaOE5b5KtwD2vtzEkRN2HegjgX5RfM300dAF2%2BkJUoHSunQcIufnc0XzWPL%2Fv0o7lt%2F50DL%2Blr6rhx9xGf7RBsLH5SMFVQ5QdkDpSGplQ089FnErCR44UpllJdToOLcUUiGWn3Whl5tLpttLGdBjpY8%2BcSuodLSRXiG1ntn0ulPfYtsfIGlGL2IFtaiElpgIcL3ydmcapTQoa1mA2NdJGrN2uXwX7WambjWzthM3erlcrA6peW9q8XozLgHj2gU34pwEAozYtddjK4RSy8Nrp60s8ceWojqFUi0hyjWJ5vVy0IXxUhdSsJ5Tlz%2FCY8CcD2CoTDDuSudTOJ4LBlB2Cj2Vvy4vexiIrCEvlcASoZ%2FNX%2BfwvJa%2F974Heouw726Hi62wfqwZcWAfFVmkx4KW%2BJEDmlQnPq%2FyEpjj4SyxY10M7AoclEQxAZ%2FjIt63d4RagRIWRsyE0N8fmDLEtORb3bf3LKULi8hw7qEi6gDIkKOplqnH5jcXLrDrBjuAwQhZp6sRvsW89ynFGXyYjTQ0H1R85IRDBQsnwRDpZKm46rlH0SHDbg8ocNwZchVp4NDTVYDmZbM18BE0QMV1TjIbFTnZeb0q88Yl3NKrK2f5lzVJCYwI8O3sJQZsD4u6zl32ygRK8wwtaflzwY6pgHoJhhIR5K%2BSPVj5EAQ8AW0CdZVfNAliqI52OPHH9mq9AANdVaGVa%2FkegpM5hM81u%2B0f%2FCFhRdrcbYLiVzbUW95IsvN6LV%2BfDMdkS%2FG%2F8REh1kiPItPFeqAkc%2BojtA9ca5Xi6fIe0g7rvsbr1UNK21FlLoU203Ut24hhP4TRMlsSs05I%2BMw25g42jL7jH%2FvYsqb1SmlD%2BiOThf3QD9sD83gl6OCRPGz&X-Amz-Signature=9692f043066990a759d67e8fb80a1bc7d1ed58ecad7212299fcb58bdd2646ce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV6V2ZRD%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCua6qn3U%2FiUxxsM5EcazCFqAXJrRrUZP5pEenSfuvk2AIgOGlD2RYknxSNTKiIjY3lh%2F6sVB02W%2BznX%2Fetxs96VBkq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDE0GiDr%2F%2BUg7sfp8RyrcAwlyqn9B%2FNnD6LerGzvlKlIrvkftXd4An0J9mk4sZGbPQcxNgamWsJLJKmYyw5xx%2BXbxP%2FmKJoPsjkojaADrIYSt2JXIFFtUBJtLi3ELqHRZV3NKK%2FPgd6tX3UiIfPNmq140Gsz4vaR%2FwBMXyeraLQkBpsTrxRXsmKwKLkgMQ7t6B1wg2g%2FWoRn1xWps4DVfBihaxu1rL37%2Fw2H4anV6CmTpqvbv0Jj1o9xV20sneZ2h%2Fi22qkRh2f0FN58IaSucG5kfFHZWtafAqI8pQ6alceKpTF3RbJ0%2BSetYEwhKEThWHqQ3z2N1%2FIyHBINv6gS7pTx7C%2FZ3YBYfwVQbN%2FEk%2FqgkFRIS53SHS7xW%2FVx%2B32ANg0w4OdQXw2HwRziJFQLLLCELBF7Y%2FnjEzpk2yt6C3J4LK7Z5Onf0CK2Pzi0YaXR1HEE4Kin%2BfxAkrWxHNRL3oPRfrRWDQSe8Ec3yDWMJ1gKYiF5pJLufXiX604TYRWs41IdjpMVW6SxrkohzwwQAQy2XYcoRJh%2BIOwkJKYjDPSO11HG07YqgQzY4OU0XJDI8QBm1pMzDV7oQJoZPDb27ETV3H4%2BY%2Bwkt3%2FtQ5XkkcuD4riNTOGtXw%2FKtEsfkWBN%2FR7KwF4wVlSBIPMj9MMGo5c8GOqUBYCy9AcoonULVaoS7t0lYeFrrYizP2l1L0XS5oAsYVLf55cFJpELx5j13x42uVGvTDVwJUFu8mJ0kz2oU2PJMKt83Bf6gV3i6YPnngZeTqEGjn4wjgUDz9XCj64OOlbja267zRRtRuJCQL4DozU3pLANOjnmGcz3W6nO%2B9ZAKptOYwD4JdDUI28dBfqvV2fCraqkYGvzNA7mzmc9u1VU%2FSHaYLptk&X-Amz-Signature=00c883a7af5378f95bab2421bdb4f63c08605010fabe9f3c87d45dd55e46a2ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

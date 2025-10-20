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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQ4DKXM%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIBdfKpoyu6LRu8y963kNfhp0ykNDofvNs5ze%2F5Xz9K0AAiEA3iMqaVYTygdyKkg%2B%2FrPpQEqUwWzj3zNxaEsf9DYN2fYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhZZIit5JuJAm4%2F0ircA5eg1mjq9Fv5mvkmouC2%2FtidEbP37X7o2iOG8LZUFzBFASbMexGmz34l0ln6FC1p1517V8G8aI6ShAOTpTDu8%2FVAp4ahegxQe%2Fri91lJGi3TPg60NmiSXWj7guJIf5pz4FPEJVUI8TLg%2BAPg9oUWczxEzlKOXJVDbCA8hQ34ivMMMMgsgY%2Bfnb3WGB6BtljuNsaHyjNkTDDrOoDW02CGK8A8CSw3ONCzKyrdB4y6uTuB5EbrrbnNYreN%2FJGJ%2Ftvf3%2B5a%2FQILhX6OqcSbMGEOa%2B2dwwc5o9cqFP%2BzQUiBIdVi7kjzxRIjnyqqpKBEZ9oOIjZ5K9cfDXpGLkqbkpbl3QH3LDnX8mEZZ2PTXib6GRpTBlD7cBEhRox5qYrEw4phEbXkYl8%2ByezcS50rFL0lveaXVyyx3aIwFBpofSBq%2FArW5IHpQbZiLvtKPG9tFjWyuqkzt1HpkL3h9Goll3vjE%2FYsR2QiOXmPVlKC2fEesMy1QcVt9Wul0b3z%2BrGGhJV%2BEoO1oBNaCYEQx6pBkCPDmeTi4%2FLvhDORr%2FUI661kRQaJOPA6ahfREfSnp5HJ3eu03IWX24cL5mA3lI7HtCqdDOdBCNvDemSKyni0S%2B9Ct9PpY6FNKmQP9ztqtNYkMLWR1scGOqUB9cTJx1gUNnQy0FhT%2FwwJMHL5jPLu7mAiqt5UFAM51xS2JkdtZDHtW9RI%2FntYXeIGlwk0YJa5A4CWFwHCPasq5Wff%2F5Kkm%2Fvnl0SWki6%2F13lJ5LXq%2Fdr4A0R%2F45EjPDaqQSvkKQUp8YdyYZinEPO2GrmNDQHoFDBKYFvUbk4C89Hqa7qUrn3hTWZcFbMmKDLWjYf814HcKnDQ8om0k6Mhut09dCNY&X-Amz-Signature=18130219e84e77ccd64fe6fc78f61d3f6acc93e9ce4630b3d0b48fd1ea0b02eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ARNGVJI%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQC1kI2WFxS53FREtVZqE7s1mIPSTUqVDSAiMhU82yKOtwIhAJ0JNlZ%2Bb1HKm9IZy2WiASKt9g8IkdGKHrqTusDi9m79KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgkScKS%2Bu3EJ%2Fz%2FI8q3ANKe3iulNd37U230bzJzzOXNuAtlET%2F%2Fn7tKu7n8Zg3ckUZgf%2FDZ9SMx0LOgCK9UwsYOzM5KQu1hfezbvqROOWFTqTNVjD97hl19V%2FP%2F%2F0jYr5rn5tHtzPA123fPhpK%2BUTuHpnJgSDBh5xMdOgtZ0GZICQseSepFMPGfSVu1aE5y6FcT0IziUqbY5pwHbv7v8k0QbvDYXMcZ09%2FTyq1eOg%2B4UUL7akvv1v%2BHVDKnA0isPNZgrOK6D9Z3afWz3KXMVXZ8GK3Lp7T0PMSEntj2K2lklTE3FnOs8iaj1sz43P0jXiAllY4xwdvPfAhJElzer4GTacq%2BoHap7brv5u6ey%2B1pToews5IC6JukoJhH1VitQnVXfdk1hkiN8LPtPKzY%2BEdKzKk29sKIp6QICpbqhQCbrRunNTLQjYmGD4ZFHaMTcnPnuxfeJbSROkgHUAatYiqJPRjdZrWkR%2FW%2BG%2FGRYoKS7urTYsrCspLguhgj7CFDRW1o%2F82uJVpCdYtPpKkw7NdtjAat03ftu%2BGc3qOD7u1J2%2FFR6jWya4cY1WIPI%2FVGRD03B7g3iqgI%2FlVyMbRg5opc1CFZ2g8p5LUVxFMTmh1wqCe2axewAa0orETe2KeifBtQhh33yr4AgYLvDDzjNbHBjqkAQe36qV9W3iVf37Yzd%2FILJWPC2XPcsPBrcLR9u0g3kIEpoBCWmVWdyg76287KfoewJ%2FJTFGkvM9dAgNOkTEo%2Fpe1ljonzwFbTIyu%2BN3sMXhIlpumxtlJPjpxzLR1RVjiHX1zSFvciHcncg34zHzvJws1YoVYepO78%2BtP4CYyIZSI%2B3WqpzPg7Tb%2BZy6NlZewlPrdhoCwf7iaoiS64c1dtBvcziie&X-Amz-Signature=0e17b49555eb3f917e5121ba18162bcfdb23c862abe5c616e6cb3d50338cfbe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676REMCEF%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDjpuqZ5G8BVzfrBrw2SnF%2B0M1MQ2CEoydrZADdhqVnnQIhAPwkYe3Npm4vMM9d4wawGJ4Ct06bOixBqOo2BkCYghU3KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZsP6hpJG2YIzdN%2Boq3AOS60krPjOe7%2FF3Z4EBi254CnL0UHFjcsWc0k%2BcvwwWJSLtWSDlb0zgCLWhGhanhj2ijBkWkPF05m1TAv2rerWGIzM52sR%2FU%2Fxr8dV2e39gxPTOOnqQlPgU7Sg7VatdVPPd9szFzKer24rYT%2BcZGCA%2Bwfsx15i1ristiIRL9azR2a0YHBC1Grs1dCUrG4eN8HlaROcNdrzw%2Fvvo4Fc1pJh0hCG%2F9bMSWX0fidenYc3gvSleaxVyJwWcFnCLEUyU7dNqDn6Pm64TvJmlHqgL7o9%2Bxj6XF5l%2FaXTAmtQI9NjdPWdj8ZA%2Bj9NyOns2Rus%2FqzLyhaMrOoa8WzDdUNuzesoNcdK3BWb6PvW851hSn9UqXAQiyppMUexsPTEOHTLTer%2Frq5TpBPb%2F%2BBzZuFAh8y%2BoONVXex7%2BIxfwFQNH%2Ff7KHmVkGtFw4K2doe64T8HRAJZoWhbSrqr0ymmMo22Z8faDZe11G7c0olws0iy88vmiEd3grgp%2FFxxlKBS4%2FJE7GGZ4DfgjaHwSVeIMUrLcBDYmZ39uhuPYd2xViWhkJwj1zdVy9IreALwkAKmoYGZRNTC8zFlLHm0FN25%2F3ph3u5vWD9n8o7sCXrH66NnCAytcKXeFS7UNlQTlphDvLTDbiNbHBjqkAQAzaB4DA5SSWSgFZLkCv8i4MisVrOIfLC3QoznzM1PIPUXMcX7nxZWFRWNNNDiwPry65VtCalpTcu4pHcmKPL4n4ZKCh%2F6DD0QAQL66ImwHjQQHpdPjwW3esZ2jFRgHYu8uh%2B90Sxq8CFWxT%2FYGH41ybpKLY3njg%2BG11xvzNRqNeub7k3MSWR2wZlesguHnX0I95oPxMmrY1z2x6Tm7Pdotu1HW&X-Amz-Signature=4e07427bac2e85b05d521c5fbfc49762d5262eb6f7b6cf14f987b9cf24b54f10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS4DWA32%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCsMCZ1ObsaTrtGl0C%2BjdVe6dJNoIHQAHUvfqVjJ8csLAIhANaGKyIPBKvtNrAkl1Jw5juU95YuiZGRU8an1g6QG0qzKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrSWyfiYAz9C7Ltdwq3AMZriPRDsn971WDjZ3ixu5plvEYbuXvneD5%2FjdpKPYZSZ9vftDwdiGNJjkJJaUd07g6Cvc3nz%2FX%2BT6j2gLBmeehqCnioxXD8yVqX60TGfCZJ73gRKlI25N6JRB16gkyhoQ3l%2BJpGCx7%2FZLrAANfwankagHzfGeZsBPhnNsMEVNGod59Zt3L2gQ08ZRrD1IrEW3RFUdtmsxV9ShAsaW9ZC274NHV2TT78qI14jMW0H6k1VVZsXRQthXGI%2BTwwnFf7cElzpfDkvND164lbfOJgFqDmNE%2FP6%2FjeK7JjMBOoi4B12wSSG%2FWkuFvVMRMG%2FWGtaRsacb0%2BKlMokcALqWevzWESchZTIwZScOiZuMWMaLFbhzUn2rCHdDmXO6qusgLXiGOGYB9yapgLBbAI1JZLqvJp6O1Sn2OQG0x8xAIgIjVIEJyBkPXTg5243zSU4te4Q3PxzxydBvapzaJYRov4RiVuhSBCDWUGpikR3EFBhgEZiL9XcT1OUHfTk8h1ZMqUO%2BXJWExDJKJwwjV218RYoaZcBvYN9cqZIHxv0ECkyeAtOoWhJfH49QRfLyVMC66OlWLcfflCOKRMTs1gxWko5mIt0zsZfXKbRnU%2B9eHBL8NsJ%2BrpeEOIz3gq9EyCjCojNbHBjqkAXG45G3AZ0rTEjh3KF3TbV3IW0SwRiqq4lRmrVrgpydWP4QHrDJwjy1C%2BtzceIdZgD3Gbqz6g%2FpcUrWhq%2FwXMqwaCz4VTzTADCFFjGreazbNMKLT%2F%2BCKMAmrQBzCARtg3vjBjUuOQZN8%2FSmBymb36UDgHiHKGvCAa19lE4uz3PdTltAQry%2F%2BytMUnn7tKO%2Bq8l%2FcxAlAm13SPa2HUTFZN7spi2aN&X-Amz-Signature=33e8d3c3c243569acc722fb59657bac29e34a304b8f726f6df268df599536c3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

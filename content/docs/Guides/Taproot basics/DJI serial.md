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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZAUXGJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHeSx3tpGSvrXObJojwIkYcsUtLfSwTWsl%2Bsjqk6qraRAiBtpFwHg6QXNos0KHiBXXMwCflau2mKizb9qExFYLkh4Sr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMgc%2FoA3iWG0bnbtSuKtwD1bxtHoMtxj0l3Bhs7s%2BPqgIhknpB%2FrAJVE9jI8jDAodmcrxD82im4UUAZicIqH2dcFtz4hFflJEmKVqyrJSBRiYpZIZ%2FvBLrcuUTS5ZtCctZjypcTW8KlXfiRylW2TiF3ecwe0Q5HSpvBx2tJ%2B%2FJYb3J0xp3GS0JVVPAzk0j%2FTiGMwjX7qp%2B554IzYWqHawhlugWUVriiGwW4goZjbW8sDdrGPJFQvw0vbEDj57%2BCDBblz%2F%2F68HfYPtLcEXGBibhaZJXwrdEgzA1F6QqYzfAhK5yWTNsopNHuH50Cw1Bol0u3nL0l1uxZgPdNNwv5VnXQj%2FOESwkn3MyphLgnu5uQv3BU0EA%2FtLZeG96NuFddhlNSZ0uPwv97H5iiN0CAj%2Ft9h0XWG7K3V1I0axeNzB1oyChva%2BzP7kyMULDw2A%2BctC8A3w8LHqE5RiWSGXJjkCehCJ07em%2F2%2FJ%2FIprRaytEA%2FbJmU1L7FdAKDV0DIk%2BNWD6%2Fxk6vtU6%2FDSvnU%2B7g%2FdY3Gw21shIW5etzJcoZ49v5yh5qQHF79S7cwVvqIXVHDfAmQixRNlcjH6CWo%2BO4JhpLu3tfVUdTvw8rb0XbmmvvbFxNDxzFSnIX9yCeumVjpPyqbPkjYVeyxbIBdMwnZSCxQY6pgEx%2BlHflfDH6HeeOErM5Gxf1K6r%2FgPq7n%2FA0YlhmW6IKbajEBzshPL2VT1TcF9kC%2FFblqvSdhWLEME%2Bvly4LDU6aduNIRK4wvU4dkdjOo9oSw4N2dVcb3IuaRyPNSUnfa1h1QI1UFzJ0qOPFCc3VRd3h%2F8CHAxjh1Q6n28h7dqsBrSwF1uSB68EtXXCbnOwDZDaC3Q%2BOZI097tk9eQlyXQAcaJB9Feo&X-Amz-Signature=fbd16da6c6b5dd021699ddefca307737b726200a0a53807c36f7ca88d0e32f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666BP6FGN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCB9NpFTxNgPqso2gTkB3ASeVcCso9GIkgGocoSuNYRvAIhAI0GjhbKZcEvMZSpTxmwpXCtk8HjeQ6Db8q6Q4pz7x%2B1Kv8DCHcQABoMNjM3NDIzMTgzODA1IgyAnuHCNjbTakinbREq3APxUYrHEhwYrMKCsrKk4D96EkPe0uxh2Ong2n9CsKtzAliLKmvAYRitwX2QxRoYNZldKGjgJ1XDTh3kTX%2FATQYbpyfZxLKo2YnHmCsxORS5N2Y9QCN0Pr5A8G3FdnIlbDjSC4lpZOcgzgdPFzPTTCCrrFwUPuFbMsQhhSS4vMu%2Fp8gA%2FpFyc545k%2FwI54RBEDFWsENPASMO4z422ZhE7DDd0763epKOnWRBgKidRkc74kDdltcjFArxr4ZUS18SsPJA5dCw7sFvWn6jTyI24mHha%2BcXijbes2QPgsqz5Oj%2F5P5i%2BBp6%2FTKUhg4d7bpNA4ClDKzzAGmy7%2BJUwvyGhD1Whf58zn9uPjm5WEtsjm1vW2eMmOnjZulKBVASTotFpJTT0OqDTOqB5cw9QXiYCE7QhlTY2DkVYl08jcvFza%2BztvF1nFCuMtRHHsV2REG%2BHYRSfX8NF4J8xvNDwtssag6YJdXxHsLnM0slm%2FGlBl5gyWCIoejnGaXaGkiQu0mz1l%2FYOa7urSnWWHIHcfg0Sg20KD7vjRPFJeQBdALOW3I5zWVqNFc5Frx%2BToNg%2FcZVOhnQBHQKcOGasFWCYNSHVw2RJiTGvP8pGieu9aZT3Dt8D6d14UZ4tHJ6NTe%2FHDCsmYLFBjqkAcnMXjH6mh7YN4SiFWR2WwgLbmpxUEF3Ff8GdEujPYA8FRhdccVuxuWmeUZSeK2MGVdIEisN1Q%2Bzv8Tp3srKOOglpu4JzxnSnIS10vM%2FIY%2BJI7%2FoSaK8kdZ9JzXbU8wo8sPipu2RNeqT%2BGLFtVqUqeznbG83GRUZILqwi%2Bd%2BBO2f%2BT1Jj1JG5vrefgg6Q5mesWwqKLeg%2Bnnaec6wmhlaZ0TVRDuX&X-Amz-Signature=76232159fde37655220b2ca58fbadc9d6f3ee5669d558d14dfe9d5ab831cdcc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YUZAX6T%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBeHubUje2yGSmfDUsMdLTUIpH%2BmP3FeqKM1rrRxjrnfAiEAvEkUWvIXqdn%2FrT8Dmae7EBkGL7mRFpYrJmN0%2BjkRk%2FYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKBsdPcswvs9OIjwSSrcA7k9InflYDdfvEwcMYjHYWeSRyMhBsKRHoCB3h3wWeOGYiLmUb59sqQGDE%2BTRm1whpTwHVQCL6dobDQQDNj3zzimrcbijWqsEmuiKJ3Bc48iZEG1ZbMYo3HQR6grupLIAYKbWVgYG8LY5Zl2ZsF2BpPzRlEuwRjWD0YWAlPjRzrBHeIVTuZl%2FN6L%2BH8Ipis2GiYC8guC4pW%2BryP5bjuwStCCwQhCrGi6fa8wjSsHd22buXU4bElQ6etf8JlifLc1kFpGvx%2FmOE%2F4AGP5vwyW%2FssPXcUxAJp9bvdSRQwyIeM5UWk7d%2FXRo8TrF4XPLCdMb2w8z%2F7mfnUoO%2BLRoFgoBKtNHL4Hz7vut2NOqQIjCnx%2FZzxBAiwEupdYGKD%2Flbe2VqjG2%2BEL7xt1jT1Ltoe6oFYWz%2FSQpqfX6SubJGQ4lwGRCG42eDz2UfNMWZFaKb4pRoyeB1rxlbSCfr5MKraCAXM%2FN%2Bngpt6OYsVXHCfkGF6NzoplDDgQ9sSz52LPJyRHMhIhRzNPsRsJoq16S%2FS8dmsECHB6Rj26v9DQoien%2BMBGyL6M%2Bc2syQfTtrLO7R3XCK4eErwJOeRpIj4evVRTH%2FtUM0rEhjYLEXoPa7WCodFp9Y3YsrivSMowgmrAMISdgsUGOqUBP3Aqm2WhgCz99Mla%2BkDHkQO4IfYRLAEnHPnwLiAL5Xa7q0nC%2BlLLHI%2Brx3fv%2FDeiY28%2Bu06XQHsZYRzeDPl%2Fu01UFAdG5fQPZlqnPofzhGz0E8g8ng8VDqt417p6gLEEOKNd1Y3C31Lo2rh3yrhagheEzQtFyAfZUPp3dYDkSi7dFHe4ZYEETRB%2FHnXRR3IXiYRKcojZftOcxq0kExkZEWZbuL7%2B&X-Amz-Signature=c13d813bc559b3ce6214776ff1ef8e1471046886010de7e32f455769f5a4f892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKDXB32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGeBIVkmR7%2F6dbN23tScrJgScMkHgp1S93QYqiRlDXHZAiEAm3Bzb8Hem6xPzUX0hmdjqPUfXo1dJf9%2Fl2%2B4aZtLAIIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAmL5EDw59Ptk7C5uyrcAxnwPBqvauNM%2FavA9Facr2S6ixs019u6zlVE8cye%2Fv%2BTzbJg14eXfv2yOrQChE6EwfvzrqDXJS6X4uaqds4xY%2BiI3TOiBtDrUL9bUreKmslMAtCsDz2vkbYcu2kncjQRgN6sR5fwOcOKctsAlzMsGZrFEWE06dD%2BPFFtr%2Fy64wtadgXZMNr8fy3Mm3wsW3QkzG94qkx1BOYjxjEVzyfbFjnZEUQCsAIEc5HNnv48t4AmDq264Bz8SOvQHqH0mLVeCWycnmpz3ObxqmQcLbF31Tt3e1e7uB6cUQieudvGi8YHbKHDmQ6Q9rOQ%2F0MvDnoobH8RIj%2FOikDFT4CBcxL8B6jKkuwZArChdOJfcMNjnR7rphX1VjuaWYnE1auCf6Z51C3fGvFshl3Zg%2Fwr%2F0cAtq6a1%2FzJv%2FX1zrKE7GkSyto3hxi5eKSRtOVDBEOToaCpRUl3xM9V5LEmUDjjWDvWMv5%2FR1lDq1c3ASinLtzr7IYqOYGyEEeSif7kzW2eRzgPADmytOyFGJiRXbRrMvs4WZp8yApJFtgd4zgaK7cAq91miNw1eaB8lO%2BnevzAQXz6aOTtz1hq3k1kmn9qwII%2BTSaaBL9gEqut4SWRLFvt4kh4TG31VIeQMD4LsefTMLeWgsUGOqUB2A4Un0v%2BtyfQf%2FrycULfGbdcce4sWE7zgH4HKTJQZYm%2BoqVgDCgPtnQ6opy5NduIhv13f2xRY1eMFknVbVCVQ8LCeapYnHvaubC60ZRqbrvODBtlbPlT1A7scbx%2FJU32Es3Gxxb%2FFcwEPRAAh5l8q%2F3nBx5dc80szXWDsuTgPDrcMRshbVUrr%2FS69z79xFu1kaP0GpNgX03JUndgwHkPzAFa0R0z&X-Amz-Signature=2614cd1be5081e1245de955e2b8fc8dccf71b40e80beb3427443c6e07fc69725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

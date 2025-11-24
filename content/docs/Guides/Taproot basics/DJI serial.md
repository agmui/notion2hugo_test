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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WECGVFIL%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4edW%2Bb8r6IJg%2FJTM%2FEj7%2FJIjj44GrMkPpngeA%2FotBiwIgOZnSAvI3Cxd2xUR33vv6r0cE%2FF2VxoL6YX%2FuO7lHuYAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDHy3Tgcrf3cX6CqAdSrcA9SOnghksSE0k2tOHfr0%2FMSY1%2F0VrCv1tIp%2FcHxZAxu%2Fp8nW6Fmc62b7%2FQaEvWqp1Ncgwr0uEKYU8ZN81dmbTbX0gs%2BqccZFHjwjF5OCF5YzTtrGEoI71HKUdPMD1kFU5%2B6g0kTsTXe0YKNa%2B8KDgoU0ATjUjKYHkV2%2FVkg4lropziDX3%2BxG8rkKH9nd7SBl0H4br35bvjxZ76Vvd74mNKiQVWna4zdt2rZMUSpGJZAnNBlkUx3hXRnZ09Aa07f4CQ9sdu5WpqTOLyx25IWS%2FPMz2udOveKoXcqI1HqJQP8qXsvB0bP5LSVSy%2FOtW9VKtgmKLjuHP2mX48SIR0pfT5wde6CO%2BbNLD%2FxPxuNVRLOn4lKhRYoyre5%2FrVe5LIDBusU4YWraphsp3dQAQe7zdcfZOfgI5VQNBXDGDiCXpHMYZO%2B2gOBWBbyoaKsOAmM0KDmfWZLLrAV6nMLYMl85NTApPrlxoh3vplZUeuaUhZaMWyCsrkvmVvtIzxMrjaSAW4KvzBvOy%2FtU7D%2FdbLBP5gvWhXXk6Msft3mmtdlIkDzzMGR9GakxSCNNF%2Blskr%2FziVPlWM4rL5J8mCuOxqHbQUFZ28AApJMjQhQ%2FcGnD2dwZNLavi%2B%2FgdQk%2BO2%2BvML3djskGOqUBcvGXsc1w3fgNL26K1dFlmkUVoJp1AxJYqWAehYjyYo3paR7IUn62BxtreI5kek16wm2%2BQHt4%2B%2FaSRAd7d6%2B0AEhsowIW4VmFL%2FDiHckVUICXT4p1PSnirgNBoTDmKhAjEe4jlo61btRlKfZOr6onBEV4jS8sooDcn8h%2FTv3cqEhZSQhIhlcFNyrZWmtpPWUzrUwX8nVrxMaPh9pjp4jZZ3ErQ4C8&X-Amz-Signature=69da15356726b2af342b3e0bdd707ab408416cb812a538421682ec63008205c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GSLYKN7%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FFNrilxmvEiF3AM7qWoq6yXOe1NFwaQamZVmiE2CxSAiEAnoideiw5dDSWdA3Da4yUS%2BCs%2B9ertRI91KZrTQo7j0Eq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDEP%2BlF4PlprdE8DNyrcA%2ByLMb4fNbE4cRAcNsGySbN6px9r2B0S4ZQEP%2FWXGH1kVwY0PR53h%2BYpvhG%2Fi4VCF3DD%2FikM0Q7zRIoYwJ54HDjAoclu0%2BGUIiCF10e%2BfZpU2vQ%2Fu3eTtWEtopawHHzIQvX7ItB6I%2FxvwKbNz319RkiDNweujQyJRRFbPXiHf%2FS18ESEwXyf8dbObldTXieMlj1bFYBZ4ScWRXMX5pNkX7b6xidjNMJPOg0Sy%2FTp%2B0Nys5nUhfcGV2m2hOdpu2Xx8zkEUi4nwt1ri%2FHHdHxW9QgpmDjsusHPMDI2wx4FiaD2xPMSDv%2BmY298RblRZz1r7jYrHSRJiw%2BboZ%2F9UBfCTjxUH1gwO%2BF4SfEAyi%2BN%2FHFtTPEnKh5RBy%2BJTsMwIPnhEp6Cavh45uXdeeCASiNX5cCEdLuu6cCa%2FnNStRVnqUIgyl%2FKv6ldwI%2FyTjWYglqQAbbw3eZPBZ2IP%2BXgiAjm2kTCI9uX8ZMtEWvzwxX%2FaiL%2Bx%2FCAzKrXD%2FIbWYhuktgXTMDAeV6P7l74bBBV9R0Ar0UOK0p8qPjq3rdkkEUIKr1jZ4iSYg5R6EX7FQ6prY3MNpPc3RUrgXEAf6C%2BS641zoviKBRREF%2FaXHeg2ASQarfU%2FTcyG0Je%2F4kR9PcbMJndjskGOqUBd8iZg%2FGZheasa9%2BqraC58dlfTQHXkUGafjTlcx3AngRex%2FIZSU2BEBQVLdF9syZRxibFeg9nlo4ppEbpFpddwjUrAhzdtqdoFL6s2M091oUcN6q9k3QoUSI0yDczjOQ5lzgcPJBnWOAynezjqdC9cFMXI1LQxeLWJ3CqTJKI9Xq4JaErIbBDGwF%2FM8SY%2FVh9L0H5hLYpfXmmxPZsajsF0kRpAWxG&X-Amz-Signature=b2b15cd42b20c7ee1344ce53a53187b7bad7a7fb1eab3adb151c6d8152d4e20f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ELW5OX2%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEF0JclDQ5fLu%2BuEnGL7ylc9D5%2Bz8lsxrqPON%2BtmUEjGAiEA4GT%2BPtAORklO7xH3iVv082KBZcXmzjVcem9gCyt7x2Eq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBf5TH0uwEEpKZGZFSrcA%2BEbvUuRBKmuXywHQf6qE0U9RQyuhJ%2BLQvYnCDv29d2DUhCwv9clM%2F3UMAEdkzvXj7to3hpB44P4ydePg%2BLysA9rUPhquPtRInsx0yta%2B%2BQGyFuz2PjO6unAyfI0Y5q0N%2FxYoJM%2FNCQQPTFDjF26e6gjemKQqM8P6JafsyYjPxFP4w0kd5%2Bq%2B%2FtZgQiSNAuOcls0kDACdOlmcBgEJCfN2dTc3wmjjYxPWEBbc9c5XhZgkw6YM1EmLNik2K1f75NpTh5xKSUkjK5ylfuo%2BYsH2sgRVtPtf7BOxGzotmoKAnq3PTDGk%2BwO3wF82TBGPMIQU62N1sh8Zld7KD8h09Vd9ByMkGgK2J2apqWznoKFvphe5P%2FmpeN4pAoiDKo1W8d7nCw3RwHpEZECBMQdhrSKSqTVia7zYkB6R37M3tfst7%2B6A2ZFzLv07OmmN3Y0omIT%2F5heKTxOsGKF4m4Ly2LX44hU515pnXj99oMcN74p9BqAPefeVvb0EBliElOjt3wh0I82AeqjxtS%2FGXy%2BUqJQdYYEnSzrVH%2F1VkgyoOsKy1ccuXuGsrWcyRIxgWb0nbQPl8Vw7HVbyA4rihTabAfM6uAWFOa7Hmc8uqLAnRBQZaf%2F26pbbBBEcya8BNBZMJndjskGOqUBnHbWhtiLMi8KAosjmC2MDBUKTNhgvWe5UR4v2vX9lCaa5WmeoYWechnkVluz9ONUK%2FLOFx%2FoVNCRz8a5dpxVwBQbiwJMYLTJziijeLaVfnhnH%2FFLPsUKs%2Bu2uL7A8yjzezCvcTZXOAJQ60f28vIJrSipBdtK43ijz24PsSyrUNv91BJoqgYO%2BYiWLu8XSk1Ln1UFRjX2MOtZ3l42aAWDPeMxXcBP&X-Amz-Signature=7597b78cf25892ab04f383e8b95e70edcf19e2429d90dd5bdd92e5d7da5559d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWIZJ7JQ%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnU6AdsODG%2BHoMTEELE2RQrg1ZA2hQ1MrHKShpkn3YvAiEApqtRQn%2F5COAjhfzp6Pha31yhvM92JKV1Xb4nrU28SbQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDMWty8OQF6qTb8qjyrcA8rMtilKOdNbDLLgnobbd9BUeicHNbYalMjaq2UDxAZyCgP8nO66mbUfgdSpkhNF9hK1IWDJl63bEQ%2Bl4RC0b5w9zXQ%2FQ1F4A0hVQdSc9f08jg05IUVLV%2FmCl%2Fe90IbNfB7TQSohV9llYl5ls1ApQO%2FIjtzRNwwKFvE96MWeagY0FgyKdQxKMNEC6pImz91ihjl65m57%2Bn2mTEBt%2BLZtvwEOPnGf4ABYl7jdENIkOwcJjDnrUiYkd%2FBKFaN8c1iX6Zg67sUorJuzMjKdzIKOiW6dKlUbsEJRPLsO72D5GiDGGSvV8532rR3oqITO8FQ9finL0SndZcWlg4r6e2E9BoClVhnBbTl67T9Jm%2B3p%2FnXU9b6IzhpBGx4ZbEfNYN7%2BkwbFySpWpvvCuAzx5o5kF4dEHyD%2B0L%2FypbDN7eVt9cQMafjwUjjOt4QlG5pBFJg3s9J1JZGRjclERyAvrJyVB0MTqUtq66VejrKto%2Fx6Sr4HW7Z70Vi8012HW3eL40Fqfx2bBWeOkNn6qb6JE9L38YQjm5Nm0zXNjTNscANlDP1D0Y19kRou3wVZZfP3NnPU2waYa15WptKOp2c13mvPHwjsJoFvcGdx%2FvQeOEXjKVkIwYl8LmCEDrEEPibDMIDdjskGOqUBDXYw8EXALP2P5DPJ%2BQvjJj29u6A4FBqxjWLfdiiA32sQB8BqUv8UW%2BmubyQE2nYp3jwZwzOO5TZHtVn5EtBIhMcCdVN6A2zDm%2FVZ5AZyTbgAl7eeYn7wpvz970lBwCSWUQIehtAsE6hdQ7oFcqE2FV7LCcIuTh2JANFdsp2qHTnTNl79NRvJu%2FLsrf%2BuF7E6dDXUipyW5yYwnQmGBOAUtkY7FVob&X-Amz-Signature=81f8d5d98f2229e62e18f4864601c1cd8d746f617f8380d09060cf4f9526a2a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

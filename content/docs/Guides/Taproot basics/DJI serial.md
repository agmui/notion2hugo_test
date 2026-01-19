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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SKDYP4F%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8Mls1tVH4HZQv%2BjFQq%2BvYEJ6nVKXgeP887Rv%2Fh6aYmAiEA%2B4U%2BJadTMG9S7n%2BlKjakKi%2FxV30ib40wYNYziDCDvo0qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyyogp8NUx00R5exCrcA8kZ5FXfqV9gXNkUwlzg6TH5bOaOFa9gxyf%2BsrYN4N%2BY9XRxHqhNrhlNrQqfim64Q4UVkCDTq4EZDsUBhU%2BF%2Fl%2FDDUMvR73XQotcS8v3QAgaY9GASHdT1AR%2FiyMS7aYqBvWeaFhDpTgKjntkYPR21siuvroPc0dR3vNh67zS%2BJzBCVBkdMySK4QS01uYi1SJQOwNx9NLb9Tl%2FIq0br8aUbWspd8qZ4U%2FW%2FzZmjWdiAFEUqUqKMfYC%2BLXr4X5nHqQPQGIB05RMTqZKbMJTQHNqP%2BcDqltXBbNZIHagoMLFKptNov%2F6RZD4vHSnF%2BOsnfu2yNIqgMiwSl69aEyZMuMmn0NaZ5vgY6JiXqPCC8ywKULunMr7qw1s5cGgZMBCbBEYUfw1E%2F7zhi1Pe40dgdwqlKntIztIHuWw0Mx4TdRPVW9lUJ8rrRz5mhcfX6QRjrxyf6SkiX4czkEh1bE4mUs2WYg5fa4KoKotqnS4kILo5LA152aRpg9UmEwjqsQ%2FZcr2cBnbKgMpX26gPh9vxJRyDvG9UO5t8ZnUud9%2B5m5TB70G2AB3LLpEsE6WFnlYal%2BHkSDBCCNIK5XecagaxUzK8pFY1zWAMEtsJsbqcWC%2Bh4U%2B4hvmYxy%2BaYxaTLFMIretcsGOqUBTqb%2Fthi1bH2h%2B0aoO00kda%2Be6G3NE4CK5tWSXkiDbKzo7fguhXcR%2FbrixbY0QPd687u%2BS%2B%2BdXM0PGqxbwyilgRcWxZ4J33NmJYlIz1iUyb4FBSLiaSZY8ZB7YKAmIqJIBCZuNt0Fg6sbwIcclSMh1KdFhZMW%2FvIDh44cxYGQOW1MrQmMRN7wt%2F3cGmRhigJ43FzFkE0p2cKv8M6HEtGQoxtlc5d4&X-Amz-Signature=9c31666a39c1e3f41a7785af27a60ceffdbde34cc95def23ad8583dac3942fbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MI6EFKG%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrURcFcoKXFuqsQAwgnapurMdB8bD5x2Zhnbr5mXTydQIgb%2B7p1ohcvD5k92sq0KV1gNZHjkTaIFqv0Z6lm8wtLfcqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJId0ZIRGrVsJxEj6ircA1ADS76f3eCofvJ1slbsC2OpXywdyr5JCgpoVti2MpqcY7xud493uOUaBCk6LYCsL6ctPZ7gNduLD9V%2FEvcT4PgAYyJEhMCFsEK4sXJfod1dNmOPpqQWZLLFiTIXNbH6O9K5QMLgCmqAaLNJM7AR8jQwnWFL8IFPKgWSgvt8%2F1hUazEZudyQH%2FtKie9GF0%2FyI1vUWMeXlCj67u1i9ytIH20VEEDxNyzYLI1e3BtShLR6KoyqCfBPTtmWwEgCU9uN0COXVzxMdKMQfSWw4rqwyKvDWap4T4DDizlVwSHcHzMhW7qOt%2BzoqQ35FlOxNVuO1HhQE2Z2dbMutPsaw%2BjyZtJ%2BsEBdCJYyX%2BLYNuXUEJ8UWT3p54BH9GFE%2FJi%2Bnt9x9s87W7J9e3%2FImJGkLzrI8AN%2BtqgYYm0y%2BfNwmxT6ldT4UCGJDqNMsy6GagaoC01qV4pnjDEn7p7PDi6XSefLVf61HhCe0vO4htOw3sMYXZ5mH2W7QeAIyotlzp2aP6n5noGBBsv650OYHg2ogdZHk%2F8Q9uqXdDTsYNQAUhNoAB6PYWskgu7vG%2FPQD2sZYNOV8CPDvOPlTStdK8S%2Fq8fvkQzKqNi99XbRU1FOa%2FOsZNTeL5Gqka3Eatlw%2FmDwMLTctcsGOqUBWIWFg4isgZc7W%2BRYf9dsXUVc5lZ2JJ9UeP347s%2Bvey0UOJ2Ja7iBieetFfjNcZhL4cSY69AYvH8wnfH9SwBtk6dI2woi%2ByIQbmZIJaqclE2%2F7dosWSSLgKPdLtU62ofq0Fa1AKNQu%2BCXlWeZYITmjzsHh3K%2BHyA5ET2sMvdr3N686ztEH2YR%2BCa%2FLxDEhJL5sJNodQ0%2BdcbXaIiqdj4Fsrxgca2s&X-Amz-Signature=1fb2a7dbffb31d624d8c5d171276c7b72ef9b6287051a5d21906c3414fba66fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SRUFLAI%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHgSOLX3BxrnFNfot2r4DEtGVnecvitHahXbwA%2F7KsmAiEA8Se0%2B7fHyHTUx991JsuWPc9XP7uhrQbUYRXhSO4t12wqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOas5ulM3C3d0t7R6SrcA7Zt5%2Fdl1q27lDnuzkk8xaR1EwEEVhtwFUqRa44uJQ0dV%2B3trWpA6eoZo%2FQ%2BZY4VQHk4vPs6%2Badh%2BYC5z7sFdsvDu8m703W%2B%2BsSl80%2FaitzkbDQz2hTbcFxMfVOtRok548zAqC6ck66Db%2F0iJpibAALFVr9jNyLEZ%2B5csTe8vB8dzgqREAxswCH5rH9w7oKcMmy1rDsk%2BMaBxb4g9ZfPQK%2FZuHh%2BJY%2B6NxTTUSwqYTJmvruanqyG5SvzSezxE8pqHXXxcViIqWaL9a%2Fd%2BIBEzbUmenUgWVv0gzXNdqvwSxm45VV4iYAcxt%2B8OuehijvzolT2EoJewXGruYEiUqL%2F690PNpksT9T1sG0aLC8sM24cI%2FXp8QSgQ6AhDe31FksfqBDVX0wv%2Ba0MigsuiEJiz9XsesKkUgp8hlaAqC1kglmIruoH%2BKXNfyEVEAgQtknR3bbU4pbwHkWZds%2FyE%2FMduFAr9RcBsLUyvvHeX4ROiPH2vCMhX2Ip7dcVTyoHDSRUyF6S%2FzKswDDXXafF5UNrlloU9fOOCTUFo2mSEikMg%2FtKPMEzjNJOePfKTzWQSR%2FTlWkdJV5x8rlt7ZUpGP6aecS5SqZ71gv8L47spiEW%2Fuvzynf5qSvhi5xAvDfwMKbdtcsGOqUBqlQAy0%2FB71o55q%2Fsa7MS0qsWO9oyaT3MCiyNZVQff6lTRRF3eY7vSvqWR%2Bm97Zxc1hiJf4KOUDOuoXwLGUX4Z2pCGNQFm0dbwL4V62cdCdviJ6U03xe5emD4V5%2BOlaewWiY4gCFoNfUv4PVXfTnk2uHF2seX2SEiJhCX79dvthjZv4jLG7S%2FOQLNXHIpcc5yRqkNAlb2%2FIFR%2B5Zm%2BfmBQsy5HNJY&X-Amz-Signature=49d2db543ca9bacd7f7510e06127e9074255ea0e9c4cd449b5f0846464e4cfe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DYYH7WN%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8OGEIYdBEv7mjJH8RHm23UEBcb3qF4gAoYxlsublAcAiEA1WoxxaKswmz5jelQaE4XEla17Na9kpQfHpnApTzlsKIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIWAmQ%2FvI07I%2BdAMSrcAzzZjqrBZQEOV6GGduUDLPUIHcjQ2KuLyPpHfYbsIDPs2jOle16ib54WMButPmJhBHoYy%2Fr80cz6Io1Z8BiYFwDgtpJz3g%2BAa5lQAvYQcFouSbWZa0sjyhpvOdlND4xacyfWHzDPvMtqbWJhU5yq6tvp4awD25byJnyFGNmctdOLg%2FW2NIaYed%2FAhq4CSCA%2FM72rf0KRQi68m9zWWhjW2X5XBgnIRVQX%2BQ38iydpDjtEFhLvV32fSw%2Bxx%2FY6LDUkRunV%2Fmmdr5hHYiTwEdtCVLvahDrKnkZxr47N78B05zezzME%2F7wRtrnLC2tMFdpJXXJ8mxZoqejXP5h7EZHLFZr%2FVvsmH4Vdw2d5BOjPIAIZc%2FKQnEvPpKqZ29cEFFLnnI8z%2BqVOKFMxX5TdO9Bg2Vf6lGRmrmM6Xyrgc%2FMTq6%2FrvVX7PJ%2F8VaZf7DjYGDlSwjViqS94JT0JPlMBxguBwAstoKPZ27%2F6MPoij8Bsm%2BvoSz8m%2FlMNvXigRkyRbbjTLv%2FCphj4gUtCJ31%2FKhKoiZsV94nJhSe4AKw3fgx6ru5iiB5E2t%2BfNW3yjokudWNjvSqONyGYb%2BiAjve9v4PY0%2B4vVtDb%2BsEt1rb3zLHsUsz6%2BLK9ndKX47I1gWGIUMO7dtcsGOqUBvthIqRcT3VvudcQg%2FjuQmduWyHu%2BpQBTSSVA2%2BVxhCE3Fx%2BmT4OcmPsM7xF%2Bki0sIxQVautiOo2TIhsVNjWvaXEGexCbLIVx%2Ff8jn%2Fiz2lRb3Pp6q6SbX94yogr5oPfYFM82xCLFY5Cc33cZ47kPNKfS0CDNaTJhgzeYshCzFXoDukfs8hpDSehJ7OfFQYsmGVpfLCEVIZ4ZHiAuSNbk0Qx0d4Nk&X-Amz-Signature=f3c4f9b4ed7b4ab23449572a5a060327ac1aaefca68d00310fb98936408ddb68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

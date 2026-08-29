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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRX7TT2P%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7mVtm5c0q0hHc6220kwMZ5WUvPDN7p5ybaZxSePVfKQIgKvwYCfAXYr9AZz7eIr%2B0QK9N3rxTZPOuYu4JwBAQ0kAq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCclEQTbQiD%2F%2Fy57ISrcA9AaXBbwEsqGesbEDJMfjQxIdUScTDvu1NitZPxcWudj2qdLEzppuLFl3%2Fmd9Rqo7lvCJNKh9bPwFjXJcThQBI1yrWzo3krR5GpiFnH%2FpRHyYXOFvIeFJQ2GmEjlfQq7NHNFYLixkB%2F8%2BO3pyWgNa8rj2GNUGQJSZQYOqzvgZGrWdTrEVf87RZjDFKojq2PjZA9B9Jhu3WHp2Ffsi2yEpkZh3LAMgd7RCKon3GZd9D8Zd98mQmZL0xdLHyp01f1jvQi1%2Bstg8rwjdFWF5BIBhAvp3E0D3%2BQoh3%2FAycha1QGWYLpKsW7DB8QDTx%2FbxJCzG4Adf%2FCtFsohavhbkt7IMVvtYryPJJYBQfRywQ0z%2FYpKDO2VW6q8ed5qHmwEclXh9HVsKwy2vPm%2Fzp%2FcInkAknLAUE8XcXVA4Dg3jLK0T5VjCu7JrNNYLv4ZS2VMd%2BozxwWILOMy88jI%2FFeQOmCksKmsLmFhrfwr6%2FugbPlBY8PczT6iiZV1Ep3hLGy0KHIYhw0pGLNM028FoNU3%2FL3w2JOFtWqPBLXZkeSbyq4muU3Aih5vJBeEh%2FXBVyzGFgYoP90OjmMCzLVKvx%2BpcIw%2BUWavUn9k1qDHAkwljUnF7ay4o%2BLYuL1YGA163AIUMMnSydQGOqUBU0qjUx8czHpKgkpmB%2BfnqiAJ4GOSQoLA1nri4ecgtbbrSB1yQO0RO6RLs6rvEhyffR1LsMH%2BnGsMtIQMbVVxYi7SW%2ByWmtbYTDlUtJtulJu%2BrEYsePpazHH%2FXOeJ99%2BrlgCRs8XYEETLm%2FCSTlGk%2FwgUx66BbvA37Z9EzEvOCwlDnuWJsKjs%2FTCQVqIDgX4%2FE%2BIiDjDRpXTIs49dYu72HXkvCnUq&X-Amz-Signature=997cb6f3dd8cb78e570072684ec5a2526c379ee0e8d2307f998171cbc97c601a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHZG7HQP%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFa04S2SLKQ93E2ic6fRp2pR6XqyQl1wzpXsOp8c6LmmAiEAk5wWO2G3y%2BxTlqo1BfN%2FOp379MEESAyfr3XOkvTzX88q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDJXOIQV3TDeJFZhtIircAwyVquSQ7bMxfYZ7VsnRHBe5qWncbUKHCecP58JBptpi%2BVGoMcx%2FZCw27dkWFD5%2BVQyM5Ss53p16e95d2f17EWEkTKufIqD2419rsgi%2BFF4ymMVcn2ammKFg8PF7a5Psh3EKELe1ARkaIZScr2uX%2FgMseDOzMKZ3Yed6n1VgfEQX%2B2OSxb1K1mpUnTwm8q6jceD4%2BGUmTvRmX2ChTiqKpFPHDGuQItIGC3hdjaoNmq4uPeD5hKRPbF0ZJbtxsPAF6GeJCUVJe%2BvuuId%2FOjhJIepud8TZdoDH6XbcG3Tx4Gd7p8eX2sIQvyoFvAtfDZ6yvXRS4qubGV%2Bx5E%2FnFBXEyiDRSxlIlVvBp%2FIRVvkP7ghh8aMuK4BdLxqMDcvjLC0qqaifH0NooHJSCnLfMl3fQcdtgZeFJOA1G0gznjGtk%2FSng7S3nJbnjzuX8HEHG%2BaMAMDin23owziztGW7jrtueCUNlwJ4DbL7WQzgrQV48yzZWQmB%2BaIczA0kD1lWClUBScec%2FFJn4sPpmIj%2Ff1j%2FuH0y572%2B7zYhjk48CQdnh8Dj2PrG60K2U1jriHMze1M2oee80iEsaOHJkSuEQ4lMU5rfcWopJB9PXYDm2BNMnpUnC06EBcfOHm86by8WMJDQydQGOqUB%2BCn0knWcsT%2BPWRDQDb%2FCBIUO7WCR%2FPOQi8Fn71a9n92D8fliPqKf424b0HOiQbpFfSjonFoykLKZ1OD4T2nIPEs08n2n0eyHefYlep6SuZ0DFF3%2B8ShqSrPMwejtx8Bw43YpCuah%2B8pfuBocfd4fJwNkT8e7T0QZrvGhWH8GMwxE2BneRsDIiDle5MRd0eCTAIiHc%2Bn9CK1KBuzOGh24s%2F5XasYS&X-Amz-Signature=7d8706db0130123b9f4a6bee9c06a3bdb8ba79632a9de12a43fc1a81abf0a97e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KGTRHZU%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGuJwNwJ118wP4UNzqSZ%2BPPUY1Q7ZIrvgx9Yu1%2FZ7oJAiEA6ZN0aw25Rc9pdJF0QPdz1M0Fhus9c9vNwuP5vDocbwIq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDKl33AB4Pe2riU0MRCrcA%2B%2Ff0yKyfSUhi6gXDL0OAHJ7oAwA0dwI171kUzuDweZFG59XOyRP%2BZIt6UN5k7bs1v%2BdlUPL4wDIr2K1SXGdJ0gLkJCqtIAOZZG%2Bh0RB7pHaASFbm1rdjQ4l4Lfm41Uxy%2FxrBPi9DiBPJ5%2B2fr%2FdOBh1YdcLq8d9nKkR%2B74FqomWR6uKAZdH0BpvG9pGWadA98hjaFUhJoc7TWJamvfpST9zlMW%2BySdarw9ewUUm6c2MISvI%2FmygeOIEeMpwa79scGyfedr790D6batFkoeqhVS4ZA7FlPw45TCfHs6Cmko2oc6BVzONgtpP0h7GA%2B7TUlJjCaaFu61NF23w5be%2FghWuPgVT7psJa1T6RCaOJx%2FrjdTmxsmkNlb5%2BNPFZqlERY5uxlmUaDpk7SIGwBY2kq7hj1kqaloS7nhRXEFNpLlM4RQcATvDQO9qaK7%2F88sxUttu2BYUPU0a4hMKfPnA0rmwMHncARTiy1f7NEZd2KXOZVKo4prtp1Yy3MPy9%2FS0Xk%2BBw7r1CrsAqObiRn0%2Btuoml0pctbfnvzj%2B9DncLVRvcvyJ7YDDF9sp0Ip%2By2Ul5rZjgpF%2FvY7aUkKDL46JddGK1NYoDnYZ%2Bxtw7ngnzmHY286nRQoYLO%2Fv0w3rMLnRydQGOqUBWw5Fo2a4Imjx7EWtEU78P%2Ft9y0jbGOMVT6e7BxkfpRC5b2DKvdoE%2FyT8fLiv%2BCee6xaoisNDd5j6dPni4iFj%2Bt26ilZXZ9ruzpiYeVUeRXvJ6ZucnebGpMJQzQZdhoa0j3RlPLZDWynykY4UQ%2B5gXQOR1ytYoidtzA1nMD0nCGSE%2Bh06FFWiT69r7Qjm6XdWbpfCMsvcUTSmRtIKTwmxTS8xa9qP&X-Amz-Signature=da26686472b993862ccfb1f482041ff59f787f0ff14a9271290305ff42ef3ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J3UGZ6S%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDegDcmpgcRulq6xbETj2pHMoU6zLDlUC%2Fn395RxIzvwIhAKal5rEMBp7imiak2RNPzXir69HukD8aGkcIFcel0RnOKv8DCF4QABoMNjM3NDIzMTgzODA1Igxy%2B5RwqK%2Fyu3RuR%2Bsq3AMEtXH%2Bj%2FrJtOurA%2FC6bahSgP1fuDGT3fWIoB%2F580gdNp8Svg%2F2nyvUC6mI0xn8aljH0oHqi9TSet9ZGb1CvBfwj5CG2pKdcl9HYYlXylhqmzWT7qdzxM5bC5uSA6NH30g0uizRbBPxUOP63hz0nS5uvAaJnxbBlP6dSV%2B5ctw7B9Fh6KKbjj4hKw0P6Il76t8BT6u%2BkOIhdmmkbxFkKZrOQh38PJorXGhz9WK7d4dQH%2BhxVW7ng9qeLt8Eal7a4fh9cp33CPNk8Or0%2BmWecCx0AL53NZJq1WMqw0bIG1Y3FkIehlHZ3%2FMOsM88xtGnEeJloFOOwcK1z0UcT7GVyT87omirtkZ%2FkDsvAAxBfNh3ZK4tp2oTquMDdgZ9dxA%2FFpZ38GjFV%2BRuNyDtm6yD2AayeAPH4OF%2FRZZHBIoJryb4kESokGzxxk9plDq1WcTzg94RNoOWu0JDSeS4GZWl%2FzErBaMjoTkfEjrPVDIntGVUX7UC7IFoIVwRiK2QgHORzl9m1mtCWHt7dQ2bmwlHG1OqYCWNZyMMd85M3LXLji1QwvbXqvAMvrWx8UQnHhIShwYZXzIX%2BL9H68ujLYV7AezRzmtz97l3BHMh09MmyQeVsktzvSUD85%2FMAQWx4TDx0cnUBjqkARwmz%2BD5gjSSCqQt6ttfk2Gt8p1JIVdPlFz3ukRqhyU8ihQS6kO52ZAY%2FW%2F6z%2BMuOf%2Fv6eHFufkM9XCLhRa0laWrrT0AHCqxiZxyWABr%2BQhZwH2Hee1cxdosHwVCqdJWH4xiIlWOi%2F0%2FChkDyng1LK%2FQ%2BEXF6WpP%2F0UHtcLCZpsVyUXTthcp%2Fq2d7nlmO%2FfnPhaze8Y%2B50Z20hOz9%2FMJ4%2B6h4bwV&X-Amz-Signature=c95b900efeb2b06a44f365852bd48d07df2405cbfc046040043b083905cf1ff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

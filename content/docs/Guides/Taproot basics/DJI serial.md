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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XM6XUD7%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDVIU4DKrS5MVZaNH%2FNDZMgyJ6q4m8w3XWyYgHOdkI4lgIhAPW8sdF8FL%2FNe8FOF0hzWWKTQyez2YpKWsZ2DMlsU%2FoKKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGZlt8b4sEEhm00Ocq3APGfAuPE60Rp24qP1rGlkxqAs%2FDuVvaCl7XIABSRi2MpO51TGTemCXkAAB3HqtiOmlBfLX6nst2XmNzKV0YB6ulq52RQxfeFFElUEFHdudAihMavibq4qvUBXzxiBS1ua%2BxVzKVojxQmF8WN3Uw2nGPr0UZbW9S51BI16QLsPBBI8KuP%2FIEiGZLKEmYSwuB0uLsXv9sxyaY%2FMHhrEKBduyNqQJao3MWzxCmJsXJB4P5ZPcuy1Tl4SpVZyTssfbhSP5EdlvkV4Jlktg2LOtOMa6Fsl1B2hya1Zo6NZPgfuxI8ziac895n6CrG6Az%2F3LQB0%2BmrWaPBQ4u0MCSTL5AxB6HLsz%2FVMCCEi7tApNE5ZEDn8bkDGxUk%2Bd3JxqZNvtcUhcjDE1IHk2wUM0MusF%2FDwIMbyK8jIN5SVOp5vBUHz7UFo0JWFr0i%2B5PRsSA%2FAe4E5pp4nB53Tiukcslre06xJRdduu7WmXQQy1xf8pLKM%2BYr9CxdNVpgLdCgmo3Swv5fRSnhL%2FzJR5JSCNNXIOAvkN3rf6R6vuxHysyE7ySATR4JVo6fz%2BzvhLVQ2JSQdt%2FZ0tarFRoK55qh%2Fek6sAylK6W2p90fBJ4xKR4CeK645tMtxjuqJmpGQTvuDBMSjCi6ufNBjqkAb5Pdll2eq4kGErW6yRmnX0O3sCWf9gtD7lPHJBe6MZEyKnmr30hCb6bnqAvR6%2FATek4Uv%2BIOfaranT0MUG25QJNlSE0vcBIrlZ1GWHwFRcTnOp5pPMmqZ5kWkex0%2Fxwp4O6luCxyoIIU0zvsX3mCiLB3Xk9b0CtqczxpWXC4%2FtN07KjtyKT2GCIaqMACEZirxz9DxY7Qz6grLtlS5yUh4fsLDpK&X-Amz-Signature=b90396be152007898f9ce8107801a8f15bb67f3e84ff35510821cc1611abfae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS5JB224%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCt1dmfiDm7kM6w8KXH21Lv9bR1M4sasePwMrav8n1hUAIgTn8S%2Bd6%2F1sNdmgbr%2Fdx7RifD%2FslJZvHzF9gdZc6LoH4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcGesXam81HogSBxCrcA0DAJx3TYhrQ1MFkoITVkyr3a40Snmb6XFqpv%2BPw11TtrUs5sy4ARIkoCwpXw2RpS4plWWCXhExnYV1jx250iydxsrLwTWmVc9WJOVRndz%2F1h%2Fe2aR91pfVqtfrAtnqfKb%2F%2F2LghbK6lckEMs3i6m8NB3czsb2%2BzhIKMro2UOmuRQ65kU9evyF2x4Djms92H57MOWOt7mXvZwaLX4TSLQ9XLme9U%2BQ%2BdIui6TiCPQcS3jRyuvwpxqrVwxw83lsC90LrzYjmWWdkB7tPUTjRYwZwk6odccZN0FXrd7v1fWk7KqgG1J2pSZEETa4It8MY9pi6VWP4fxWIRrn61C6UnYEPpoF40ULofs2%2FXcSmZGTza9FevgZBdajoQ60rzXi%2B3zaOK652uyNAV5Heu3Tb5SHh3zJKYJZJWivtmdoAzySWFwRzijY5Zdi16YDsxq3C2HktqYbCl6rdOleg8pCy%2BqnKAJQshXtvZwY2tWVVbYykmtm3N4fUOin5mP5Z3MNr4uwxEDXC7AhSrPO0vqC%2F6HlwXUuUuNUx1NHmDClDv7hFrVbLCrQrumYMUBpfqTZ1UUwmnadEoeJ%2BYtLKLSN%2F8CXBY9P%2B8Noh158Dwb%2ByPSt7gBHuVTIJJzuaBXtt%2FMPvo580GOqUBFbcRrxIjFgSw9PG4EfdJkJvQ51BEh%2B1Ax3COU6zcTBpUnALxHHz4GPj%2BvZSlbc6UjfwCmaynIf0TzYJstOyQWLV9hRuOFNEzhgAC1Eijo%2FLTnuEn1rCL3XnA31tF5Zqe07Tnk8Yy2aQ2En0rJ36TKkgRLH95%2FU3OzPFinmY9yKdJCU2qB4U2%2FAfMJQELcidzlaFuJdw3aasWVaLYYFuh4QVt9fY7&X-Amz-Signature=cfc28931fd4673b91cd881b11bebbe704f5ad0085b29791a2e34624d33c1bdee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJZ5FUQ%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIGv%2Bvo2bhDDG1S9mkApmBwDVwkilSUltHnMwDPTupmDeAiEAw%2BKdfTz6gEf2BgfkaY5mwIeAXXGa%2F1J2aobPw3umrkkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlLKFyqEv%2BSn5efKircA6lnYaQzi938pGvr9wP9RhhnuJlYFkgNGjVmaNd3LZ2T6h037Bv8LnkqAMtd7d0zrX5%2FX917o4HwNoR8Q5wLaxz0XjHpB%2Fd8y%2Fyr76m0K6e%2FgHr8LV1gcz06MLdKVSeBmLEmyLkdr%2FoGQtvnYQ9M6FB9bkp76seWDj3Hx8ocUo%2B%2FEzCVkUfD8xq3duQmibV8AC0aYHdgAu%2FAxXy2l3q0lpdSsqt9dp6LLljkbJxqSC%2FF9BaaAZ1GO%2BoKyRLEWw4S%2BvzSeA9%2B3OPncEelnBtL2ee%2F6%2BBUgwSnB6l3Z%2F7FQwXnh2bY9gJdE%2Bz3FeVRCpHja4ho6BlJdeEEfQ7iUYCTI9mFhI86RqQHpSOhP8Eq%2Fp%2BqL1IGV12JYrVRd2X1hDJe1Flpd1QHU1umhZn2bnEQej1IMrvnyEEDasu9jO%2B5c%2FmZ%2BSfpzdII%2BmQ9Ec7JF16YYc%2F%2B22%2FiidNoh1MWZzJiE2CRpAs89bywvr%2BX1Dilb%2B%2FLm9d0ZyKj5rpI%2FH3ZyBzsJBGBZqKDL49y6fV8kIvbCNArwH4CM5GKziYeJphCt%2F5DrRGfClI7VNGIlWoJcGRACZl1%2Fd4siY0Mo2BRGJmdP8sF4XlebwuRRh83SNzbctjhuG2z3WJUY71V8vLpMKvp580GOqUB9meHYtzc%2FS%2FcrT1yXX1h5F7cIFHMu7gLNnSDJOrr46CAAdMlgTnCcsogF%2Bft5AcEd58a3CDaCytstFje495nnROjo3MGb8cFoeJ1j7lTet3pQfeK7IkYL3YbeRuFD7VQXYBVOhHKevqhCzAfZFFF2EYQYjVvKMt6BCjUYrob7svDUdttECetP1h9sVwY3%2Bq%2B1S9EIPuQ4dXwvtSLiVZg4JscvyXs&X-Amz-Signature=d444d004c4af3540202e53495191ab5be6c048253b67c00558a002e8f387a002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZC5Y2BQ%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHYF1ys52YmjN8p33IrAQOZqzClIJRtjsHFYtdmtGazcAiEAkdqxVDRNC8CoGW4BInHSKV9PS2zu7IS3iqjt0CdxCsoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBd9QKzHjQ8gecpKqSrcA7L7VUN0qMzYPAknOd20Ud3vFgIs5NjHh%2BXdYpu4GX6pGFd50TI1LAkFMGRaPfpH%2BhEHk0dsDJS2YakWihihprK0wiIQLNSFxlRpMk4aGAfdbDVyHvs8iuxGmm1ku465UmB6PB1T2grOfaztOOaNzZsVtXIyr9LKc54K0UXgXLgS%2BsTlzDbPUBNPf9N91g6YNoLfZaODS5M%2FXahUSmKHsq9a24CMKL0OTrS%2FPKGiXJFAzN%2B0tJ6mqKNauxDXh1ymLry%2B4znHjl%2Fd%2Fsxvpl2%2BY3zZbYHnJ7EKxN1G75Qii3LEJrdxM2VIWAWbKeVAIoJs%2FrqFC7dD%2BdhTAVjccX4fvRBJ0PxzHKhWjNtCEmXMJJ3jhiWtJLhvCZJuzlWJf8tC3BmJOexqBWg8kJGunn0YqiZSbJqRusGWCK%2BK5cUXLXDW7v6hYIR9pYlX1%2BRKF%2BaZG4JT8Ex%2FkmXOKshPUzbofFSYp00jybtG%2FnoTZmJhljqu3zUSQ7cSxRPnw1CGvG%2Bsdxw77dByaod3cluGN6QJVIonOxlVm9ocL1z0ToQa6icZmvZkQq%2BOdiilkbIIRy54B1%2B4mgxNEsQ%2FJ3I8GgI785TixUlFz4EfYGPEWSrX2exy5lGuaqw7iXPo2bl4MNbp580GOqUBQrONGmdMUOPrdq47EUt5cymdopLLyc8%2BycQymu4HErmkE1%2FguTCsVHEFrawORZ0uto7GOVeqHCI4fz6%2BSnvmQj4xaCo%2BG6D0ZtbZS725Vd60oduIjLAlzf8%2FAeGf%2BGMqT2fi9VtiDgU%2B8cQZFzF%2F8Z4rz5IKNDPM8tJuXYXorP%2BDQGJLW17A8eF%2Fc6PIytzBaO6VLhGhT4yK24BK58ROPkJkl%2FDW&X-Amz-Signature=510dd3f7ff9ae998f278c8354fd78bc434fd8644ea8e05f56126681a1069de28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ASSPQQ2%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0Vj0mZs9o9wulKdsiZAiWhpDTmS2L6NnAfCuogUf38gIgdn6H2kfD6agFtog62gXrnTaDVE8uGD5q3H6Mm9y7yNMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFjAxL0dM6mWJ%2FzDfCrcA%2BtxYEsMFx5Yi%2Bo5lxBu%2BIm2dWYc7GFupffbqWLzBe%2FN4lALqop5MtosbSsYeQHAFyV1i8T5w5yQkwuPJ14nZj%2F8DilDqq2QrMKM6iqpJE3FcFXWy8HUCjWAvhkA2ptS9ddQrwxv%2FtNvf%2FBvGCPhCJwkQbxK9XeFAiqUOAWkPgvsLIxPZ%2FqEAfxFTdZ6sQQMph9MnmVjzdWGWcBzTbTZdI7mIda2kGJFYUfBv5o%2B3%2FA6gHffuqGVVQAoz92XGdKLdNncF%2BT%2B16id2FMRBZ2pjLqm3488FCpn%2Bx2pMGZ8OiG8pzp%2BDtzG1AaS%2FCxBuo%2FUHx%2BJdfGgra2ptmjoxMm%2BGLihycw%2FbsQ7GJrZBXXlp%2B9B5JDNekVkU0unFCFSvX%2FA%2Fwqdd7u62mo0hT%2F3mGxflFGZe0Ywk7pGgkSbLwXG87L2flRctOD%2B1MIrAqqGw%2F92bVW6vTW%2B7lPegqZd8JxcV%2BFsTuU4sQ%2BJ1LSLaKJUZHsMHZ9Fcoctb3NRAme09INchQPA9kqJodh1WTaoN%2Fv6ROscItDcxVEvguH%2F6l1l9jrxUHzhG%2FvLgDnG%2FGrL08y39B6FGCvyAXQbtZUDi06NSCpn9aOwXUvdSTaRdN4NPBAgy2Z46dUigX5Csm6RMNOxmckGOqUBuGeHP%2Fvey6OZvDCCZNgAmjgrikHu79AddV8s06q93PrugF7whZSlWk3UoVaHCBINk%2FwKBZ09MFdevyGFqnKNbQsB6k7yLYZ6mRj7%2BJP0ekxK7mfS3d5HBPClAsjpYj%2FN0zhFMWVLdYDocJSCvV%2Fc%2FOGM0%2FtzfSXU79kTSIgKXF57ks%2FlNZxlYEtVrq0bxldEd3KsYhJ9hBLedpfezU7M6JheyXSv&X-Amz-Signature=3b3f07224de8465971b64a4dbbdb60f1142160d5af30867eb8adb720ac2dc04a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVFZVNSG%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOv1ZgCpOTjt6QjJJQKBs4fT%2B8vyu07moTQOLz8hDHxgIgMSAKskgW%2FFKyhMao9t5cq3rUQh8BpXeclejGo%2BgiRBsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNrFZDiGfDoDyg9kGCrcAwqiUmdqkozY5E2m4%2BPQwnWEJxCK%2FBjBGwa%2FSDZ4%2FprpTzpE5ic0erHGyr9M6ER6xSxMEduXyqTZJyaydx0MgcpIMK4QCAyL%2BQyO5KjCu4nz7O%2B8ZMbgZZpYzRZqCHDzebmAwIIlFjpN0Bns7avqfaWLAEdiiZA1FDJ8YbDFSXZ7ulvcbvnMkXa0OHyFvweEY11WjGot%2BXBk9IDf0%2F4dLAfxxX0nuXs5tVcoJNdpJDiqWkAzR5sNJhyAPCCCYos4LG8HW2ou9Gk1V3UNtPXM%2B8yBSC7XppwwjiQ7HkmBgf06yiW6oev2MJlF1ZwSwgMpWobtnKO3uWqFOm%2BGWAKPywO5oFX9UtOXZymSdu0eiEgHvFOaaolOSGtTcIn%2BUkz%2BOvQxyUdnQv2h4ERbKT9Ck7WA6Y9vq5lqvNX15vKRmUGbGM53iKyP6LxzXLAcHK538U0CwmeOT%2FfaLZBTS04Zych4MuwC6LlUJvbfFJJ8i717APgFWZRStQYfRRtEb%2F2HrbM42iAMMC4eQBI6W1uMRXbJGvCMemloySCXTUDOQo%2FrYuYro3bVIzH%2BZ7C%2BBR2I87ZGid5aNmcrLYo9z5tJVKNdRYtOI6qhBSn3Hng%2FcKZKx7YSRmQTcarwMlKBMOexmckGOqUBAqg5tlSYOFIgqhg9sG7lqLzFhkU2dulv8NRiG1GB5OoChPQy6Tof2vlu%2ByYTyo3N%2FakS0fP%2B%2BQuG8n9fOU67dGn3%2B0XyCqHhkz73GfPN6do1bRTiFMIW%2Biw1V4DYZ4twzdt2gjO3nLBxTE2WmIt2WCFa0GCNHXQ4HrPFW3Ac6f53JEAo2ppiuqtFyqQL4wtREvUUQzfPWUxokaMrqGuzDrOSzMz0&X-Amz-Signature=27e70d1349ea58b2574e1e665febfe7d548fe2870c717d46577dc24296b2d0c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662277BOVB%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICueAG0ic81fJE2dKw55YISrqC%2BlMoYF1wNcWS%2BWtVVxAiBUH11h4Te%2FJG4w%2F2B6kKNVqg5AtqqWLnN%2BsNSlVwemTyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMlm0rjs%2B4L24oH0wQKtwDB0VmH1zRcuaA2UxYPRtvk4g25zkW7REJfbyuDzvW%2FskES0eafUGECy8iPTbThadT4BFSn2AMmgJGJxqC%2Ft8U1Z95zCmTHLGO%2B%2FgJwpeYd5AFRF%2BPfzj0Fg3DfknoFjSgvjlVwd1JE%2BXB1bhRgCB1wJHEMBfBIb1t4oW3CDQNonF6op4AJRbM%2FTMrVtmE2ux3Fn7%2BGs2wQ19oIhQ667X2nK8evrjhmqhorwxbk%2BP1E4JRvTlY%2BftekSPho3GYtHrH3seuvNgIJA%2BsOvT13tSt%2FKVdB3%2FB37pwQw7UOS8J9KN%2BIBpdT0fgRVl5E0SeNrgxIRBj3u2ZVSwkTjoxAP3Il%2FJ6FlDZZL46rFewhDKewEMrrgDCLJ72pVWQkYXLbMyvkaDcnM2hc5v18%2BAQL2xCjbTb7d0N5F4WnapsyAV24lGxXAs5ZOpSRvd9qAu3qB2BCwYAcSMpwkD%2B0%2BzchwBlzjv%2FB8oT5Sks9v4uJ797JNe2hC13B4aOGWhlmWh1iWxyEwQj9z3H3rXfQObKq5QPI%2BF0PBZQwNqlpcJbd9qZ%2FPnrRyIp2M5%2BcWCX2Fik2Ji0YxlSOBMcPcKhftM80UXB0Wf6AtsYJ%2FQgKDf0CkLE%2BlXGQg41Hvc7Dm5jd2owqbGZyQY6pgH%2BYKy1DU5ZkCtv82SGjFW3NgkxKd0ehFn8zcfSFb%2FNLCNYVRxiqd3kZ7aw%2FYtSGd5k6ZxnswDMjEPjeAzkXYNkzdFIBR9h6objkl%2BRhcuQqkWkhaV881vIe68SBCFeyfjJoHEchtnqUoGdnIFfuHo%2BjykmV%2BB8D1Gl9PAQzTaF9dk1M22gUkYzx6dUBAzJXDBbFZhYNkwHMbnkve7cOIDBRT80RpZb&X-Amz-Signature=8b434ed64b43af2be77939b0241fea456d1792266625fd8b6eb051d175074039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BSR3SGI%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUmTnaWZ%2B%2BTNwyLqvCVDA60yYAUvCI7GKa8k9xFytwHAiAC67wr8vBriF2bEc4bhcU%2Fp2NW4ZENHCeh0%2BrZR%2Bgu%2BSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMBrKLQ%2FMaNCqn2CJlKtwDGg4oKqKqw3Xzi%2FnPxQPnVxvkY0vR8zUUtnh8e9akpKTETKxzgXlqeb%2Ff7imvb2Mb0inf7mIHcxw97lCeF7lJFyPLDgeySlrnr2MfwjL0gXt2PuAiTbvy3mE0XRD8maehtEr%2FKPY8pyiAYDFY2d%2FNZJTHONqsgBoe8zjQjFi8JPq4o41lVQyQRvV3lQwzOU0xX46nRJ9tEMB%2BGg%2FplF%2FntkubeOwDIVxshBWULcESHFVfD2ji3R%2Fiva6Zc0WVfoMdh8sUqMlB2BcDp4XyNGr3PnUWURn8eU1oIdM%2BOfvH%2FWgCvqFIRqknTQC0UiMA2cy6DSeK0bu0ytpswG%2FKhLY6fqjrLd5l6nOvV4MDIOxpJ%2FUCsUpqVNsJ1fOZJYNmIxDsZn%2BogFQzu14M9TH7UFaKoWo6%2FdEqSKdyTz4sif4Q5YyxpHP9ii4DIgVR0jGU9%2FhCt%2FHpbAHZ9F5PM04GQNfraM9nfRjG6n1N6mtWowfsRTh%2BrjPvuLxTl%2Bm2bLi7WQFfbNEz3kQZw6M2yc%2BMOOudkXTqghsfJlc%2BHcGsIU%2BcZmTI%2FDhAVSKfYi4qJ8ribu5d8LW31sUaTdWPy3bx1goF82N%2B%2BcEx74A%2BxidX7LOLRZ1SPtusjOdbs%2BaeBqAwk7GZyQY6pgG5QGKcoiFGpJNuGeem4ltHJl4FHcZp9cmNou5gVxiPqYkeks6w%2BI7jSi%2B5soaTNASae0fX0BSl18y2k2rAyUGvQdo%2Bp35BBCjF%2BvFwbwRj3VWzKpoJ9lp19KGtP5aZSV6owOYh%2B2OWRlCtnS5F4m1qrMeBPlcSvrQDJQPiOlvdUkdRwZt7UFyDZN0PTuZsJvnBayLoOHXJpQDa7u8VrxYaFoXNHnS9&X-Amz-Signature=522e23dd6414cfda8dc7288fa46acf6e74381384b88b2d8c67966a197360c956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZXVBSN3%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIAiDfFAONvq8jPhDZ0Eg8frMn%2BLWdxt685ryKq15qo7wAiEAifu7ba33Ki3A4v%2B2QjaLIEIoF4Rq8AhPLZvZX2tY6%2Fcq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDNCLvbczbc4DKUwt%2BSrcA7BmnLU6BBrO3aAlcZOdXMiYLozAp8620Y4R0n7btWMDAQ38G7oURmuW7HpQYeAirdpw6%2FOtMjRqMsaIRY8dW%2BIRFBERGcz7BhZMcmNHiih6WPDuvrxjqssw%2FtZ0KtIFSADFR0drANa0Xq%2FSZxFctahVNjojVh%2BJutWBVTYIu4GYrRjAT4O4MnNWeMoEQVNwN0INluMuKRRaBLHDVkEWJrZ59tML5GHZBXddw0ftTkauT%2F8TeO%2Fc49zj4q881RUmTRLtDpCauRz7INBdtz%2FXIATzqJKZ0I7wyc5%2BDQoeVjB7xu%2BSSxaOYF7pkhv0j3PeOAsRWSwqIw7r2AhO0tRV7D0y%2B3v3SJp5mZZsZsi4%2BQkUIP%2B3E9j7t51pZgJUHGgPcy%2FhNdxJ9nVUMWB18aRs4KomccrBu67SwyUrjNvN9ehX%2BM3PhiDKaOBjy%2Fg8F9i1DPtQ1vnFR2KGwWewfQ5W%2Bm2MSBSBruM6QaQTHBy9VM%2FK4RTWqKuvFc51omC6qEKjnb1Uz4T8HTAqA6sqf4N91laLWJK3CGX7ebFnN%2FBvatYfCTLWJwWSkJ2UOnLyX5AKf6Gs0CfFtuC7NFz1a9x%2FIQzI%2Bir1GV0gTyGEoqOsD6406mZNP4qpB%2FybdBtAMIeds80GOqUBnL%2BfhkLmKQAMwWB%2B%2FfY%2BFoQcKmq61ZQJFSkjLJbq2mzh5EFdqAmPmrVYuqx3kZpGBMYqEtBC%2FgEfNPTaMREmPNpAMy0KXcNfWmfG3FQe2RPq7DHkfGqTRXKnDTth7mIVlgfiJppCILmVzFI4FMgyWuNpv%2F98JWf4FYqujdwY%2FFGpMowNu2DMm%2FzV1vs9fVPi6XTlwhTmvJHOBRAf%2FIG4R9dyRXZ1&X-Amz-Signature=76ec98179df30842ed3653e72aaf69796a2ad658e42b28a8e2fe758555548963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TICU56H%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIGPZXs37kJW8PjTTiEP4Rmt5kcFmk6U4XbxQfV9uFIOGAiEAutOPgJNwOETx9ERfKGUp%2FA995ZT6cfOiYh6iQTsyUn0q%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDB4XOjbVeOWzhFZoDircAx8FvIWVBFAH1Rpn6r3Pxq%2BWyFOv8GnrzevNK2ovmt6So58d1MqqY2a2b0iAtzAAW%2BSEFo5wqGGMnpoivDAu3lZ5v3yZnmHCE5tG6OsFbbbppOVQQZnT7LJ03eEgnGBf0GKKAKx91VVRUP1sWgNRQFLAk2U4ERJlfQMIlMXbfbzIXM2wWhrcjexknKU6FAwCTw3pD2UijmAHSMH8GBw5ZDACouhxZA8OBsMjkmQ7S%2B7xxQltKnExqdkQAC%2B3LWp1t0JRVQEknF719Wo0F9vrrbcazvHojh8b9sx8Ye3uCKrjOfZ%2FSeQN6l6UByCIgDD5SgaSEN9BQ8fGk%2BmPDqoBkLhvjrMtoq4y2gAxtBWfMfE4hEJowcXI5xsoOqwEgDS9hZh8bUudWDdPQPr70m1c3larykaiR4NY%2B5SYVdTgTuhfIeopyZ2vW%2FWcmQp57zCdYeWPjo2S5Sc7lL%2FOOXynO9fgrHXE%2FMVr%2FbgOB9FT0uL%2BrIbaon%2BDcmXlHLNM5VMkTF4mJQzPB%2FFSFoOV33LE1rh8aU9ToJPPudZqeQvZMQ%2B5%2F0BPAz6dhcxJdTOQiSN2MXUJS%2FGrMyKQKFzCm%2Bh7%2Blmc4DQBsaaPVMDOnF%2FxKHJup2O8tsDC9W22vG1OMNWds80GOqUBMybMrfxbpKgdH7rgVDjwOyGlvxSMCoS4%2B0M2HbXUU1CIBEPK1wE%2F9G1xTkzbvPW99cxuys1z6I22m5AsbIbYcgZ5SG0H6mIlWnKLVTe9ra%2BRhUZxSWzpn4DX9%2ByPmRCxpxTfkGl2IV3qQsaSJKmMQxnu8B6TeIry58TS9cr0zhDsHtyyfUOY%2FRta8MyvtAKn2JpndN6junjndaIMEIOwEzGUSibX&X-Amz-Signature=712f71301a9a9db591d1427621a4e4f681fba694c6bb3202d50b27117256e386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRIMDNTU%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIBGtRLlcv4wesEXwjy2kOwm8UPt%2BG5hwzqyPM2un5uB5AiBY2fwcj0YbRTRsccmS4poVRy9lBkaJHYzTHsGh%2BLY5Tir%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMGliQ41dgYliQrXQkKtwDvfx2Cc%2BHUh0thx90QU38IEXpbG8JE9sO6%2BIyr1CU7qH42QCybIOIIrjBSdvBhfzVtMrW2eFYn4kLZXZBgrxXrFj5OvYvpaka%2B97WeWGclUK3S0HDBYhRlB2Kex0CYU4xvBbZ3tA7pjJdKjISQjZXxtu6L%2BslbQT%2BNAg8Z3cd3Z4TGIXIPl31x3b1PpLzdpm%2F259aS%2FVXQBqKkh5o3MFUl5u7JDNIvzkykemfRchvCqBXu82e29%2FJktvAl4Wn44XRz12rpEtGdG9BvVQlQZiPLZqhXDCRL%2BRGbCzu2ocbxRAIf9sHy9q6iSOtw8RELWC0KmygQ9Nkwsgaq9BadwziUZxWaxc3T7sOhxVm%2FVvBkLROze8cShEhkNPxPzKIFK18p4ryT1BE%2Bk%2FJlc2rIyS4JKPG02H3kaJpUF8EnnVgsqx4XiDtwsiWBoajc1JFJb0DRXN56RYWocmsNzMUVywcZCo4ReNKZDuxHS1gD0Q%2BH7%2BOpI9sMYg44WFyKtxqCTUv0ABvRQc8uqX5QUbR7EUeUOx7Xg0%2FquqfZht7oMH7s1aHvBCtRG50LOR9W4gFFf%2FFJuzy1jRQo%2BSHJWQwnXE8rAM4r8ykeuhHXIeF5E4b3AsRdMz4gqW2tlmKugww5ZyzzQY6pgFYXWDR1RjZFqEF3iu92lzhexXrZNM1xL%2FOciRrvdqNQcMd4MLJ8gbgTVMO3wSzSgBmQAkEgeNRByTpcyQvlhDx3Cim9yyDPZe2jF3uDEgNiy5EoqAZYs4SbLK0gCm50%2B%2FSmAxWB8IpQz5ZHuzVc0VnQ3M2xKsKxpvqowj5DZdl6yRo9LiomRdKsQiKa%2BbzGQzvuyFIHLH3VJb7fuIcPDUCuTSn91pg&X-Amz-Signature=5ef447740266ca7d22e75b3bcc15bc6920fd2ab314398ac2620598a71ec989c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKWAN22%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T021002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHaP4OsMWopFkDekX56L0X%2FDnUIsL2tn2LMwf7y4CLYyAiEA4Q9tPcRYV%2FoZT7UaDcwG4OdEc4lLgRP3pCu6h7o6hDEq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDBQoeu%2BmRyk%2BOYUrmircA0rImSYgve%2F%2BNOE99ziN2X8EwqIikQSTiJpJg%2BAAdr%2BMirhrw3nCC70Xq2WL9QaJfOsMspDdxjrdZy1BaVRK9wSJxQmlgKDtgW4dKvCliwBDUQ%2BcbnlJrcdRrih0QThsC23rGSbOxIgjnfhlkaHWM6As5lcewLczJAL%2FV1U%2B3WaEWSGyL4Ifs%2B%2F7U%2BUpBsgcJbJgXv%2BnVbxl6LU3RuwCYN2v7GV8LncBO3jiRjcTjM4uNdrA9jCZlspsUhjmSKrpCZ1K8DHFQzZgFoAaJZv3Xjzw5sdN%2FnZ6z3IjGXt4EQdioP3sv7bj%2BiaNdsu76PtoXs8hLN7KusHGF%2FSbWFwKc%2FriW0Hin98k8LEcsbR%2Fr%2BDELZxAzaUrvIDCaZ5yRW522NGwPqo%2FCgFW%2F21VV3oYdl5aiB6h83J2mcHkFx6nQze7cCm01Z%2Br1CeH%2FfxZoj5eL3k75VOIWb%2BmWZJAQk9B36M3sB1RXH674DasDtvlwzyv34Zt2mVpugDccapjVtMlMT5dWPkcUbNC8qgN0LCxf3WVcha8juoy0QnP76CUQZYnapTOo6Q1j7GMTaHdMg%2FwgVxN7XXpR3yFxbv5nLKEt4uWp3Z0fJl557U9ziKxsFStgqoHNDJPSPKpz2Q1MLWds80GOqUBAYOwcIPwBj%2BzFzyMIUTEl1f4g8B%2FEGlg1nz%2FcVT8E0tyQeZQDQzaFPT9f6JM%2BjDYoVpOc1G%2BSUqAinLg42LljsinrYkwK4%2FYSs7yPq%2FLkTwOGdMvN9YC0O1PwzJnGZ2vcXpZvUpXeUeng%2BPHb6tyNofZ%2FW3GaUudM%2FHQomsheCfHKtyIH0%2FrzdG5FTWs2HI7OWG4vXqszEjaw7aJ1vrC%2FmPDOH94&X-Amz-Signature=dd207fc4ab5d4cf56ae2ac1ec55082651c9d98b633943b1d770059a052cc716d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7P5ODJ6%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC0OaqaOC7lsyfoVuXB8kUzZUt0luIf3ZC0een5QO38CgIgO9bcxMKMOH2EoXjyEQ%2BWJDnj9dGTyvltZQvbSSaNm14q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDLHww3mqbkotUeRz1SrcAwO0N3FU1Vd6w2f9UQS1YPTrkku09dxN2m%2BTMdcwGyLnBdCPJapsCS959szoirGdCgS7oJig8J8JOaXOA30tzweMoQ8wmOH7R6pmHe3zyMXFcVPYv8SpL3PbiyBxK2o06VvLnpOvNwW1Xk%2FE7KWZFHX2E3DDkm0EtS8dPl9VhOssBwxbKioGtfhynho9iEaESw%2Bq%2BuWmNHtsYoAVjkGGsCStULybx5ADtX0PioYtczkC3d9Aj2Vxij0LohTnMeVlRsoexIxqCD%2B51awuvfG%2FDPMEyKJBBVxGkTJSYSFsXWr4iKLYvi8zCBk3%2BsBxMgCnqhPre6b9e3YwXr95bpHBXuvVWWjum93myGpsk2AE9pRSp1gUc2xCj63bzD4YPCxwJ8MAJOR1Z%2BCLnjQj17tfy6wr%2FJ1Q3HfWnn3rblojnvQfJGT5wuOJXA9HpHmcywDJ1t3%2FjLhkHzCCC1M%2F406kO67PrjbgeF00Cbmwi3dsgu3cY4fmquGwCxn6BRIg%2BFjBj90nMZIbF19eg%2FOr0MKXCP3BYfCKbjRWlzDhCiFb1gndSPk09LnC4X1kP2l%2F%2Fqu1bOOcdNDgNoIKO%2BSG5NHz9fUY%2Fr3cf9duibcHP%2BeVFOR1CWxu%2FY1sYhB06KehMIfPj8wGOqUBxpBKANWaAK9rMURDnfjmvnZN1mSAkC2AUwijtdnI8ExWM4mW3KfngPaoWc3gfa%2Fl6aJjev02xeMqMTqv4zJioO7HRyvyVgNZPmLpaT9SEnBe87nGCgW%2FcnrFJaKqI3ZGGqioSjFxstovQlY628uGvvt5tVpVm5IqorMzcQgXOpgq7gvYIePenaIgyL2CdELHQoDhqwccZeYl5QfCDWz9CKq04gRu&X-Amz-Signature=4b2eccbaf8184f68ad595692e755cef0154af6d0586cf26c2821014593115e98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOW3FVSG%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDl%2FhILD6gMrJaBQJGeHwHaHIuStgr7CQGkdKrghkR2LgIhAJ%2Bst5wg6MX4yAvsKISX0DnXSQ2Gnm%2FESzius%2BVqDxKrKv8DCCIQABoMNjM3NDIzMTgzODA1IgxvltlDhYldNV2law4q3AN%2Bu7jb%2FcIc8ByB7u%2FswKig0Al%2Bs6hDDsmttrGkPh9794nX%2FL%2Bgk93aaE%2BRL20EQmYOdKUaSpDyHK3oVoCkg0NUmt4erkyjL5WVlBbNUufWul2cZ2uN5u6LvWbrPLmqHjBALFmobOfaOtPQQAe2h4pleR1TXcwXFw3IL2Q2BDVDxi9vOOGY52CyKrNy98jueYmJwVFtlRcFNtiGbYECGn%2FI%2F4qkI%2BSpIX3iVZ6gxHpSt%2F3xE22nV5kALp4i9slPzSRDAjPVH2LYhdupwaMyqxdwkV7A4MDXGDo6UXFOeVyDietKz5eSzwSCgME%2BpGu0CLhHWgmrB80BfXxznjcXOqgblNa0Io3%2B%2B7y1q4%2Fp3%2Bpk89Aes4zC3REA1PfgbH15KAOrEGqodTjh6%2FdBJ%2BqYq1ve7TDd4cwcc66I%2BaDZoucll1ULeU5accxtFMTCnc2cJFw32jdtZlrCDlQqUcMzWvnMuGhi2zcyeQo%2FvwcRoyJZMLJNZeYLK498wSCXkcAS6HVkXfnUZHYa8YOyyipiZxUWCk%2B9576hZHZ1H%2BUodd0vXpQy7UJzpQ87wS5Whoas36rCHdsZThF6LcrN9yC4mS413tABbzPz22cm0vm1zqKQGuABwMZlDJ2fteKoKzCwzo%2FMBjqkAfVl3VNCsKXhtvMTmhZa17zyXoPxyM4khLftjUkdf1vSXjuq84yNq06%2Bu0Z%2FtKUhaLtj2PbWByfmrF3qeh9Mvra%2F5gi%2Bs0gNJeQiS3%2FPOp%2Bm9qW4wDumeTPmePu2IOZBN7agbKvG8XMczfFLLYNWNlCMQZIxaNQVGQ0hCdaaoSu4gnzWJQQBfevKnVfr9ymW1Tq2gP%2Fpz%2BhmZPIXUrJIrfD7wKuj&X-Amz-Signature=11b97a86b719629fdf9da31a2e3a1f74e29321fede72ec6c4614415a5a08eb3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHKEJVML%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDczp3Jb5iSCH0zwlPRLbs9LtUZDUoCf4fUnbFuMFosAQIgE2dLqXK9p5oUTMD4ODi0TnGUyAFu9vsVRhQHCPufAGsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDZtEgSjrZ%2Bqv3LKiCrcAxN%2FqiQOwLwhwRGmhFdNQEUi0Nkf1IoNlhuMP%2F1UmltAHtFGjlXQPxUbS4mkgpqn9fDVPjR%2FGEOwnMle8imLp4a5fEDyeEGXMQ2WfmcM2dkhb4D%2FK%2FhW8dRm2NLXyQl4RzjdfhrdpEF2AnvCGHZtQGyBAnLgiv0g22HxEzBpajmMVRFWd0FB129rwV1yQSiV%2FWE0TflUrNT8YA%2FHUSYpuDLsBFQ8t5eo7SD5%2FCW%2BsMlZQ8X39i5SiMCNFMu0gu1oKyGT7lRuqjZ%2Bd1AcqbQhy6S8yOLPuDMLqepLxNG9%2BajXMIWT1SGM9JugiDFbmpFeQghiG9VOF5D6aa83yvoYJQR80x3FhI%2FxosZCmu2S2%2BB%2BSVKia%2F0OVQAcnjmxFLNPyneOoOhVZ7k7mJm6AvXltqjcBBujkjDIfprx%2Fa8i5mlG0ep2Tb6Qw1EBPBbkfSYL4518wdzNC%2F1oIqYcjSyGo1PtY1QVr1sZDVt88vvdr0%2FRliFvz6%2Fj08lT3KDZtwbS%2B9zOV4hqi65zBha6o%2FpOfUKwpG5T3tyF%2FxtSW2ezR%2B0UuLn%2F1fRu89zIADG850W8upWPjE%2FGquxMyFfhaZc568wwye%2BopDdcoEtkisiBY%2FK3u7C08W41qgQ%2FMxgPMMrOj8wGOqUBgPMh0TeKGwxCzc0YwdQgvhSxF6wDpSML9swhQ%2BhErw5%2FAbJYH%2FOoObZRu2W5Io2Kw00fo7GEtCyWc%2FmXj1R5rl0qDdUDlfFPE9FLZPk9JvZnS8mxkfmCkIM0WuhwSmJQe%2F8FEATztuOFuq1EvfDks%2BpXrMKiH%2BGtlQxaqbOCECH%2BeJWHoytwpp51eoBeQ%2FWb7ahz2B4OX8rxQKVyOYPeZrOQL9pp&X-Amz-Signature=b17cdddde0bcd21291b575a742057fc1d677ab83797329b1c5655d82ef36a728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYBIGWUX%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGmvFULAlPYx0FoI25SODT3H3AHz4uVDmdA6KxVhbnEZAiBoLqgxhLCamLfOrxkEb5Pf7UmwVpdb3N0heVQsl5cQNCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMn%2FU8nyoIx9FwheOwKtwD9Q%2FOqoGWDO0iuNy54rjykvavdTliVYEEZeIT%2BU1hIOw1%2BCpscCJFWxJHiWoIvv4g7FDNufAbME0p9%2FksX6it9q3YSYDhxVwReNXwUoQENo0wzuzTfG9%2FlZG4SUAYrwdpsRTF0PxTzGdyOQYqWVZKOSO1QUQJW9PBXmvgsaOvydGT%2FM1vyAwTrA1ycGK4Atlo5FeSwqgXYyKUkrOphhJZUYNBm%2FZrOA%2FyBlLjr%2BpY6z50yGGz5sUfg892%2FStpz7YoXXmIBTIGK9TIRy3vK5Nq934UYzk5aYeotNm702OW2wPiidHHusKH10X193pdUPL9djRzxamvsAaLvGQfkBA%2FA%2BfuKgblTsVesoMbpHqDlLfMJI6c%2BaDitE9Ajth9ipZX3Y7DARuCPNKGVYG%2Bunlnphs88f2t%2B3eCJ%2F6uXtCmMRk8sOydPpuo4FotyrzyL5ThaXdUKoL4zzUas00tiWUyXEbXWQKemF19LA6kczRQuaXpW8VsQMulmdEnufAOjF%2F5WAMmA1MzkfJqBL2IOpWazcCbR2pgcQLPBwQbC2FCO8T9CxNy9ek3DZE9%2Baiu6zFroMCHvtC9ttjcMUrGWS2HegQwqz%2B4zuUkEuFpyskUrsokbZjhZl3umvBEfjkwsM6PzAY6pgF2emW6IFzpQKq7yyRL%2BKGu6UCgtq%2FjzI%2B8K%2FSZWN4a3YzKNpYb6ocs8sDnFfnfqrzlZdFxKHFlXRZiBqpKuscXgC61sEkWJS90YVn%2BpbdfyTHRUvXn9zZN22rWB3CGpho%2BhNHfV9peR553ByVvSI1surIO07fUTQsSs9EyGC2cWrkK8lw8YubZly7jSZyZmCR9Wu0sOOOidWQjd3f8ho6HPMkv6bbo&X-Amz-Signature=a4062e696e0c4b9fc019e45809cba27e410e5a66eb2caafc81b7f1dcbeda4819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

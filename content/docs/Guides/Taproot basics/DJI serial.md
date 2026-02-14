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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DGVZOGE%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIA1yEkAQ7a7M%2B%2BTJ9KXaxDbCW1kLsfE2W5EEaOJ0u5yyAiEAzo1hb2zz3AUI7AXxmQ5y2JZUv4GNAu%2FpKq%2BjVGn1plEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOo0x%2FjmF6ITk1K6yrcA2D1Iu2%2FtmrrZErfmgMGhz0NTETQZ5XMd4dLewKztOwQU88d9Rxp%2F5MEnuVPvHBnvi7WQmgIqemICqBCs%2FQDsWGS7hfkmiPtwgYOFSDFnTLMbTKw3%2BWQ4C9jGF9ukcaWVKxXWVyZhf9Kg5bMah5HwEZUNALx17gBNzASPU5zzJWcFpXn2ToEe1FMW3s0d79R6OOSQr5EH%2FxcCk7tFI0c%2BRJj91s3Jx5XV7COfho3qy434Oisz9QXeJfs03fd9YEk1Jb0%2B0BEqGXZu%2FqSELtExqRWDaQL8qPglrllXE5GUA%2Bj0E2CiOgm%2FCqSUNVBhh%2BZcc12WdwbqLrwWYXVUlq7nJF1lsbv6ahYnRlQi%2BLH5vEsAeZmP7vEVQL74mB39URYPRT5PV87yeX%2BzAHMgfK5AWI2wSlGeMnLQPBJeRtuZCSW3gBCLvyjd47fwUn4Bgo5dsJlPNjc0Yi4SChcFhLSVNor7bXVZ3Dks4kZcvjmFjN1brMRlfmwve6KthNV6JmKEAsEKWKnZdA3REL7HUkuU049fOMS9Z22rdryK%2BhCWQfKVTyd7C%2Fp2XQKTngfBBEUCtVkgxpIMR0mdFBUpqall8xDjY1SkYpsmgX65F32YxerETSmbQmeOgo0nPPPMKiTv8wGOqUBsJQKMIH3XWBPCKkwq3PQ8eydi3mvfwvNMiYaQcituUOswhFnhgG46GfshflUCaO5yToss97yjrPmPX7a%2Fa8tTnXVZ6bJlFLcbN%2FnpfbWtKxsuOKQib8u9h8G%2FRVYULFKDKjb4k%2FRQ15KKfCHWOPmst4Yk2ofgm9DWXq1MKROArUnBfP67EUKRedkkx1Kqv0Msi11WLDMlL3%2FsVDwPAKm81u0EguF&X-Amz-Signature=399dd099567b923175e25f7d813ddcac3c3e72de89b2eeecbb668dc7572a7da3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZLL6DZI%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC2BLMTrzT5pDlJaQqnTDmgsZljtLB0EDrSIcBmZi6IagIhALJ8Kvy23QgnQUxwF6r866vvFnfB9DwZhwFbQavPsuCtKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP86YqNUnbFLOwhsIq3APPxHltAG%2B22zON1pWHJwmdQuu7A5Y7yVhutaVSDXAj1NtChV0xVJZjqDHnU9FYICSMSFMfTiCzgT%2FaebewI0E6A5KGSmqFOGnY%2BBJXYx2Qrfo7aD%2FMMX1XUV3PaqnuzlTAkUb%2FXgYvkMY0ZS3dU3c02qvj3GcE4V1ca2mj%2F3y%2FdU7vPfr9TQ%2BsVgS7tK2dWvM8ompIdPvlq1cisB3Gs9u33rmGCT7wajdhldgDsUZ00vf%2BJsoDtAaf1OHj6jM3PbKCvWb1rExZd9yRKXIjreYKpsgeQ7cwM9BtyY4oYAHYWxxaD1%2FnT%2FRaL%2B5zc7Xx0Bg749v4zfyev6b%2F2fcEkPm%2FWXA4Pqyt7yVK0mUNn8Q6Xyjba3405gwRfrh67jph0V%2Bbp4O7IAKc98lR5HFrYjELihw%2FiyoN0LAdowu6amXk6vTW7qRjt1CeJUCRPn1C%2FUZLGaqm2qpMINLU27OTb1geaA3Aj6Z4tWwakrrQeYH8fqIPOhdT4%2BcmHOzm3OkLB8F%2BYFSARBqxspexsu7nx9uzkiFrPur6jZv5Wjsaj6Pi%2FVfTXlq3X6zl0NGNKPgeLCZZ39tSUBwakGHMvt1cz4NOxQRSFwXRqIHcXkCEs5gBdaca%2FgCStX%2FnAPHi0zCykr%2FMBjqkAY23Iu67TfC1Z%2FEACb6K9uhtvGEBDGp%2BrpXFbHMtNS3Zt3N%2BUR2lYCUqTAA9XEyMhCM8FxapHSXA7O%2FpQXBa4rPoNwNEk%2FKb0VMi70hNNcy4ngCDluVCXDwdC3%2FvxtQNzIse4KtQRFVk2fuDEhLUrTmn0GOjnKY38qBJpQOZiMeTgFoOWPkQ5i%2Bh2vdtDaVRoP6rk99s3vbZxIW%2BnHycoCIqTfAE&X-Amz-Signature=a172e3a07ca9f30433e11782dcdfa53126fd0f40d576314c96c2363a91ac9497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLCRNUZ2%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCQAn7m9Y6ld7F2fgl6iGb87sqNufWY7rxmTaOTdUYQ%2BQIgS5L2RsMAEJ9bKO0us7nNhnTEMiNAbEaCsk%2FtmIsfIqYqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfvHs0dzbjVkXWs4yrcAw5s3V342NyCYRKRuvxqwypz8nGugwNYTItHuAxjAyu7eu4QtpIffBpe%2Bo3Tjqax80d0cMZNeaUYl%2FWQz6N%2FvqKjejOOebFEYmffmEkXqrq3CsmLsqYHVuKvOpzSZFCMdgjMe2zxF6i6WF7%2FqcgXPDBiEfEbrx7AXA%2B%2F1JkB0iPqGjLE4wcHPXHPoFy%2B2mmTYhVHeQA6TNaBH5YmDHdiJFyNeM33loWaBzCuUyZEVzmcz0pDi5SbNAiD2I9S2RxUZGN2C9lfONxE8cQMRon6qDvBAMaBd0MEMrK7siUQrn2LTf022zfD75MY8DfRH6e3NJ96DPIBQjnrIIcO%2Bnr6FRnMKO5pgq3RGnpJSjMatLFb0%2BkQcg9vTtLHIOZLsMexzlAQ9hz4lLO%2B0ideh5Oh4kS0lusrvFvvfVo6Olvbx6RnUab%2FX2GvJdJkfxeHsMQ0TdL8FPEh1uCdP43Xbc8XsDFlekNP7eRYa9k0ePmBjDIec08FcsT%2Bg2kabKn3UV3M5%2BYV%2F9VY5pZP862NbTccpwspNnJCGmphpHffv9lB1Q8dw5VNhCic6HR1Q020jYp0R6P9sY09sAFujoNkgkERxjkJu13v%2BNWIXj5phx9W0Kc4I9zNnItEhTneqynaMLmSv8wGOqUB0fPykX4wHtkpZyFSkqpzSIjH1Rw2IzcJvltDGWn78ZGx%2Ft4fmqmujFA4AiTdiobBUQrPChtf4lIq4mhFd8pklp5%2Bb9veH%2B%2FqPrwTXWqwb03AXJdyunMk2aI5cs9K1sDLuvcksGjA5kmdUlqRMMV84c%2Br6xoDjgaKKjYM%2FkwurzstspJp2viMO4lk70Dla7VJOMvwKeI0p8Wo4qj%2BT9KYWuwZqH7Z&X-Amz-Signature=32587c34ad810a528b07820d0ddb52de0e38b884b8c70bd7e4e735c4b6a6abe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DIOFMX6%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDZebE%2BV4yXOMvMjQtZoXRFRNIZziJvQX48mRnScMjDxQIgQFby6o9j1nKd6RQspAITJkKNXy1zReQfwJdDtpYNPYMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8urOZ9tLLwYFxHlSrcA2wui7vZTyo4Vq0VpaMx5Dz2Raw0ibIbOF%2BZ26nrY0NscKiiBD4iAS7Wx5iKckdbiulXEySVb%2BeATmxC%2BopN3C1onLFD%2BGtgw7HZmouHKvE7z3ABDqUSYEQiZHG4GZq9fbrvVpmFAq9MQr%2B013SFMp3GzqvTozAVU5htl%2BPUxj3hHWjTWs0n%2FIepr5jbYSf80pPTc7oaMDVrVrTOAFZOkhDNAOdDB0Dh3V5CGJq8b%2Bcylys9b0OzSMkZLR9PC3IBmqly6VImONBED4Vh2s%2Fz3JSu7Sji3nLLD2BAaZrPwFZw0wyNfby28Hj8TZ17kCYnloqDH3QyHnyfvTzYE5h%2BGjXN12nQDyMcq9Tp8tlvlqTzYDSHkFMgRrT0Fwa8%2FmJ2oWH4goftsqCDHHkPeZAiFZy6Bn5OXXFRCcPYG5nxRDALohxrjxy7A0CldsxaOAH7LFZKNW41Tr2UqZdpX%2BWdYoV2Nxybb9TiYn6Lt0mGM6g3YZyucppmoDPZHd4ZkPlzc1PIJWWzYwYlHUV%2FObAh5ZjnoXv2cvdoF5UD0iXor%2FBFh%2FXn%2FLuqGC9IcOIvLVMiIq3m5G6vo6gyQPKli5CnMAfLH4RdLoXSwlJ4EIJ4%2FZE5exa4LCE%2BT2ebs7QRMNmUv8wGOqUBtW9g4bYuHLeUPba2frBTrTWS%2Ft%2B3JfbMh3popqTUP2o%2BLIsO7oNusdF%2Fksr1Q8SeYJHZH6zDV4nH3EaEf9YSDwrb2gPcyBPgN2oUMn1Wr6oWy5U9dBGfVDuM6mi7sGvUBmkfDdwei%2FwXOLsrq5hz5PEzgrtkC5ky%2BK68Lyeu8IWIzP1MAbfPXbJGdP64gHt3mVq7fE%2BGlwWnt578OXEK44gdydZ0&X-Amz-Signature=5699a6908ce517dbed105318fb700f4677fb2b007765a8840ab2488ce97b8cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

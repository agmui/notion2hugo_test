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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPUY6Y2T%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCmq4xbNVhI4R9ROfE1RCeP1SAM%2FGPn71pU3nY%2FQA1BnAIhANzfKt5AcdBCMaHa37786Ds0beT%2FS%2B0vpoddDVPtATkNKv8DCCEQABoMNjM3NDIzMTgzODA1Igz%2F%2BQjtNLUcuuRhtdEq3AMjRRhvjhkGEmvVv93cjdty8J71%2FVY7i%2BIjkJ5jFR9tTxuK9AZn9l6Jr87IqH8eHxktRLFzap4Ft7dvg1Nj9fomdFRWM1k6crQxJR%2B3ZyiZmwCZff2mtLcesHj6sxNEsB%2Bn%2BBFB2UinMmP2ex%2FAcrOHqrEyNMOYk2MTFVcoNCQTr0cO6T7xIGVgvoi99itQNaH3eSv0bLMv9vZ8Atn8%2Bo2y12dk73SGrP19l%2FXVgJqZNQ6bTqJxAxbaPjoYKU4%2F7uEnuZpM7zciLTC1KqlX3GIMNPO5CGT8piMYG7xJ5v5dxT8eZg1HdOgs%2BKVSUgOlmW6MxVrISaO1%2BYqgYZg2jranU1JFF%2B74qqaBGv4H%2FKAtqIXmfLkuzAPa8l95BZq73M4mGK%2BTBkxphYI5t3Wm%2B7QePjR53rDtdp0ZK78YMjxSds3S%2FMUXbSm5DRNDyo5U%2BtuWLfwgYFlumesTM62MaM6JC9lQdj1vkUsSFHf84QfGETzQa1Jaa0VfJyUuDMDOi6NvavSfGZwXKvNlkhEjYLGGanoD7nA4n%2Bd7Vlf6axr68%2Bg%2F1IrV6SGbD9KySe%2F%2FchBWIEHFvxVIZW0zT92qG62qvXkHu%2FnrnS6aODcGGWsHEc7U3E9bmGHoXn2s8TC97YPUBjqkAbo3DsjqHxMSuQ5GJ%2BFWWF61JvSs7alXlxalV0VDzm9OaOHbnTHcxZNijwRSg12kfrg2TyDOOR1YWg%2FNcvjYywtKayYBx1H4rkovMjONqLpKnpXCz3VRyRjaUTTxHd9TLrfEAiEBg5dqsOuyRSFnj%2BshAZ2qtQDKtowClE3VYoLVUyX21NEbZszR8HbM%2FFfTh0DIu23TevjyhSGmotmZAF5eaUdc&X-Amz-Signature=9bf13789aea3c4a694b73ce7622329efd793d44d4788b6158a9cf738594e5057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4WYI3EB%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDrcJ0Jd8MIcPOzfPk%2Fb2Ar4gWhALyqSn7COAbuxASALAIgA8TJxXwLYWL9Sco5L3Uv%2Fv0F96KNWNbgHoQJ2Y7WdCoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDBEdQ6EYB%2FC8T%2FbaGSrcA3Ehvqn3LAllAN6wccScZ3AJRAlDNdbvB8As%2BaCyirzeMODtP7bq3tBBBVuTLf2bEAqV6M6ymHhLib5uizSxMYNi51yw22xIm9pk%2FzIIVcrZK2qAJ4Hm%2B1Wr9%2BJ%2F7SN487AxRRPXtncRmikD3qcBOuJUeGw2XFF%2FubWT32zNZRB0slZ0vaUvHTZwbnLHyZlFnmS2XQzEyH3sKvePksNUJrQIfz4EAnrQda0NGd4uU5fe1ijBSKfb%2F1RdF888%2B5xD9bSsSkI4xXqrVE%2BzA9obz1uKhYGxgBUYWvVymP0A8958syWTtA67M5ihjN12%2FxHL%2Bu9t1ivi8unM%2By9l6tfSE%2F9n%2Br5UD4QNeR1KA85qa2hQSHvd1mykWuN7xjUf9d7O0RLUwP8AjtrtyNJ5twU%2BCjYDSDX7R6joDO6C77SIjpMxjcQUUt%2BiXnEEXOQ6XBN%2BCXIfoyKQR%2FgFe4NWOKZjvU3HcbR5FpDqjuxulyVkfRmQ%2FC87iMgspzsJxrzy2p4gXuLT%2BQ6fZ4VK5av%2FDKcAR42IWi9e%2BfwpJfFSDfFly%2FjtN1kaB1X%2FG90CAYsVqyY93ansAHJ5twWpXMfyb5cGfx6MiPIoXZ7oMvpJiIG0Z8XLD890flNJrHU1%2BGJ%2BMJ3sg9QGOqUBK2aYkdf0Yjg7JEwhsHq88FalCxtZbkMI%2FLodRpd%2B3tHyjgbQJ9jA5HbSfeVYj9pQEI2AdTNucfeeYAWRVidSjfGiuG58oLC3YIJHXwiv6v365jYHf6%2BqoRRJxNAZLbeoVSbkn3m92kO0qHcX2z6cKv1RkWRIoaab5vUQUd3kPn39Gz3LqyDWFIi%2BZPiE3ZUUj3%2F3c7URAg3cjhhxFpFlj0hwsXdW&X-Amz-Signature=ced1ac97504d6d1010ecb70980334fb0deb3649c55ec72963af77edbe9d8c12b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EWTJDDT%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIE0KkOSiNY1pQgsoXH0Bp4ECeVoOEC04OA3alBiozvCsAiAKzTBcbtRkUD%2FTX%2FnhRmWDMmdkyCbiS9ZT4siPU%2BYJoCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM5gQowbmBMGHENYyGKtwDBFNPlDckFZRBNGc%2BaATzGOgL%2F0rzqwi0ONpHGb2hxUzcfMou7ZAyGbegzOvLasQDcYA0f3rM8yUbyMoSLVl7Ydf%2FFSa0D7IOruqdiH1ncnPxEFCBfelz7LVxb0Bi8yj9AaBYCVv9StQq%2BbT1B8f%2FBPEcJwu6qtKFSFAbaBzYCA5L8o1WRByH8izPUn6WU9cxP7gl7x5MPDh7qsXyHc8dcq%2FE7E3KB1fdO8BcNnsloKc3BPy8g%2FCT7tS9P1TI%2BjV5JiFPemEmM%2Fzl839M5k%2FI1r%2B37Bd0jV7dikPHZ1mXPLVROhJHs8lEpj1n0AEb%2FiF%2Bcj9KpOfiAKf9aTo4T3AUG%2BEClRcn8k4CxKDotyTiZvuJsgVgwq5cCTcF9c2xW00kzUwm%2FtJ%2BXTOaVbYiC7uILFciBS4qs2GCWKaMv9xuYNL49bp1oD7DFG1dC5GwKE5qXKJpimP6AU3H7OLf1UBUl4f6v8R8yWaiuV%2FUN2vHzDaok3JB4v%2F5k%2BF4%2FKE5d5ztAzlKEl35aqXEe%2FQfsjt9z5IFXszGC98MSO6H%2BJBAbZYTHPgfUxU6JjPDvbVFbtdoSXqgtUaPhlDwsVKuQqfY777rLkI8VO1AhaUrEO3oHK96tqnwPk7etkDd%2BN8wwuuD1AY6pgGAsMC7tGvn6tseHSbmrK0f2vZTKfBTiwA5oqka7eAVVKwD0U8Gd1%2BqparAmUrEzAYAIfHRcXYy7GUrzML3mkHBEVSXPHr0jzdkeNGiIr85DgfzELXklie%2Bg%2BeBoalYbnJ8XEZIUEihhQ32B2KkVqZ4fsyCWOLaUvaaFvUlQf15uGCYXELdMNNtUY1Vk2fLG4B0eYifc6vyKWXJWcM6nrA%2BkxO3xSzU&X-Amz-Signature=74dc8ff4b2d47821c84df8bb406b670d94ac91a9ff8da7da88ee959cfa678260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JVVU22U%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIEMDesiGu5jxrTqPS%2BKQy5Yfi0e3DoGlQC4pvGk86%2FW%2FAiA2cTtw2VPldBOcRl9WgzyapuxbenkjrW03RvzevBWNsCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMjWNNNxNK1ZDMUXgfKtwDXZiYKgc9L4V1l%2BSoqSTWQsVOOCvTeQvmy0AAKHL5sqK72ss1dNEBCr4Zk%2BKc3R4F6ZCriryTYiUSLU3PmISW8Aj9la%2BlqQRpBM0wU%2FM34tyyaop1F34QCRoDeeo%2FMox6z69%2Fv255WnabYflWpc6nzF6fKKVzy6wAQWxDHjVVzVHpQHcovjKZeBJxJ%2BXqMXnvTyofpjvDn3zZH5Bmg70hLchTy6WAXeSyFlUdveS2EijZVdnH3hIKHHnUlRAwlvcI1FLRCFx8TOZTrK%2FZmyqPOcqmngz8e1bKpgdVq9v6DhVr1kQVUCkcGM1YOGv8BSa%2BQfTngernmxZYYkwaYxL64N3oRm7hNRxueEFRwz9H%2FtqdF17q0Onm7MKgAGjTEvmOnuUi%2Fc%2B8oWsPACPkJltCNxbq7ibpjeoEo2TCbHh%2FUg3bDIV91wjFyyR98kTrqO0inA7sIefQo04Vp3m%2Fg14OP07TEzuiVKX7QEdXIzjREkhKo0PFa5Z3HEfjgwgRoHGPNYJrzVqLhkYL5PcWLa5d2cXq2jeSF%2FszG%2FzRFuWYagqalYXtCJgRqOhPXRT0IwLkNCey1DmqOCaR6fiUTkzOxoAAxzxSAaxru60IswCoc5fM330%2FXHaaUMnX2r0woeyD1AY6pgEuFFVtfmGR%2FBl96v2t2cluEyKEAh3ixxMmxUitTmoD2C9yBrl4FETzeef8ezl18manLeH3pNSCwJ3YCvPXmKcl0AMynKpctNiqZyI3QYufpcHQ4IO%2BKMUrkoW51objYc%2F5tTVK0A%2FI%2FVeIb%2BgSbRb9P%2BxuD5%2B5RiHSycRni1fMSqAtDDdO5UNsJZJ8mUdG0fT%2FjCya%2F5E5tM6dMbgyGvvygdwOMxi6&X-Amz-Signature=70cdca6633aaebfdfb7b79c9984e2cb9625a06610c8bb4ed61b31a3827bbb4e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

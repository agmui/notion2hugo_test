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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCBGZL2M%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIHu%2FIp42BAVafIwDOJalF%2F%2BEjYUp%2Fq3vO18kJDyHNts3AiAT4RSzfMTuyRy%2FMMrA7IuIWyxK0mnq3QLkKOEY433VzSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMDAn5%2FJq5q%2F4ZwN36KtwD2K%2FQJea7qOB1jCgJTCumn2bTLpDHlyysXDMONb4vhO0y1Bf56ceskiG0TmbXQz2k0RMp8ZGzwRZsYdyItruA1Pp97ZD%2FlRCb5tybfEd%2BoWlIXgKb%2Fn%2BUymEVB0pTdiOiDxyi3nt2vhfl2NwGio%2BxTHjtNfMTFrZzUjI6ffmwzdxxm7LRsVQiV9GUydD0b8wwYkjWgPAJgrlyf%2FqfrC%2BfK571F2Yl8aZc5c8%2FtLGsZkRBxoP2AHPRdAeyAKe3F%2FLNJUUYKbDuZ%2FBG8EtI5AsboCvBa2IQ%2BHUw9EEd4ppEaPSeJhlF9UYs74eTM16xzQG72R%2BJegIAsoblOMMWKH57mUqIRW%2F1UqEMZOMzefHLkyjwio89vkNShlrG7VNzpBsBi4XuFMCwLijpvb0HoGNe3pL69wjYB7NVTxQPrMc%2Fd1Xhx4xIoKKgrevqelUXiEPpp4nX5J8Pwd8YubyRpsHMKO9LC2SBPuI0QsGGh0CTfFzJiCUtIfT6wZcgPAn6%2BOS360JlqtQkN6%2BvNNn%2B6uVYsFW%2BO0Re%2F6%2Fxe89GWPCCU6lk2fSBuJQISyOtvcwc2znHDH%2BjRAGx%2BC2r9pNkt53%2F%2BxBiaholQIM09t8sJC65jtgxwe8nOnzRA7KEiPQwqdmm0gY6pgFuVPNPSjwgweVCdOvjfIlH%2BiGKl%2B9%2B4Z1q3rsmA2i0RE7h4b%2FwP3pxkFPFdLzhG8xLytS5kNLl3fl323u199ODabs5xOYoufOm5BksgQhQ6HJ9RYx%2FcjRSHycGysAHtdj6%2Bp4L5ADrcsc5HNkh7pGUYgehrDCUvCr%2F6soOQAPUw8M1JxNSYvxP9jlHiWOcaoX52wSjbuVJE3mQ5F3M9xAZrjexYF%2BM&X-Amz-Signature=3c860c2f73ab9771b665c0555684e62a5e9591f7485cfb7631c529f7938ec60a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQH3ZV6C%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC3DUpen7zee6rC8ls%2B0xxS7meDdGbpY4Cy8roRTBSZ6AIgYnB8FWaaCWpa%2BnpIbwXrqrcbl20U%2FXLXzy7SU8CBBncq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCEJI30YG24b5MM7MircAwKnugRPRmqlfcmLXRfUZvbghCnjTp7FvNhRhIzGcxNs%2FJPxnYbOQ4EtCoVs7QiXdTcd8Pp6Vcs6JgAaD8uJ53fRgwxS62VHC3SR7Rrr8afwBf9%2FLgw8Cc5k6Shd6z1i9Gf5wELE8klhTMRwAjwEIDkIjULRkL9wJ%2Bz7b5C2NowYES8hfxZL0cfaB9EHNLk0qyoENn%2B0BjludJGbg3ou6oX6gtTsMP9hiLQmRvuThyNyFsabN5EJo6VrqDeNk9A2jlAkFUEF%2FOA4Wl3o1Wc8bAu9wzuTJvXSuCSXEgdcBl5NoN9sU2m3uGTHjHx1ey05EMkk8Orjc%2FCGqFTPW0NBttLAFvEC8wcwJNZ59UqwfZ6KEtlYyvoljc5SSnVBoopYM0%2FL6%2F%2B6LRTn1Sn91xaKJD2j%2BjZtgTaM9ztyEPb%2B6wWO%2BffFJEug%2B3WDcgm4JoUNXSrkNbXKSCquNVg9exdzbOgKlQNDkMhWbeiyA5QqeFj%2BJ26Pv%2BjxRCBE%2B4iZX9acbQn1gkrBckVEDd5re8%2BeM9ry6%2FnCYO0UZQjVg4ue9%2B2oYJbn5GSKpV8QhMaCwKKzDUugbLujezhkelZzlurBpmjvCt0cut9P5p76jVxVx6ssAnlTIpxDSRTAp%2FEzMPnbptIGOqUBn0XFKClBfRCqGjkhwRRL8%2FaYfVQx90fU7Lpa938NuZO4trlcGQqNKgIb%2BwGZRRgEDHI4si2IURR9kcV4cI6YvKj5al8ZZy6IEpVJnMX1uL%2BK%2B4z9FEVDbWUAOB3FVzFEuVyt1r0lIF%2FvuN%2B4oMK7%2BDfEv0xxBUkIJBgKCaSJOFlfVdu7YRU4SQ4fkyM4SBGKr9x7yOQO1ZtHLCwF1IN6b8Gb7Cwt&X-Amz-Signature=65c1691fcc5a5ce58da4ada22a12239b3b4d6a0ec18a659134e8dc5d5d626000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DRCZGHS%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCt0mco8DgJLBhEEy35FGaW1%2FHapChiJSq%2B4cZu%2Bqw6kAIhAJG9jK7LWwK5jx0XyYJy6Y%2BhgNdFUhUQqSVPhPD9X5kqKv8DCDIQABoMNjM3NDIzMTgzODA1IgycCdExUHzLzMft1Ngq3AOQvy5DOgVxTw0%2BwNc3%2BpP5ux0YPaotoMgq%2FolWFP2JVQmoSXMGM7kUGJH8iCyjXm6lYXDKKFE5bVAuVGni8QN9DDXvrPyhSMNzsJq2kFbAhXbsse6S3vqUIKGvOl9uwkcGCEhHzRuc2aEmqNUOwn34gz1mnkXrnDSxfJpFEopzQA%2F5tcbo7dP8x5V7t1l4b%2F551GkwshQoOamSU9zU%2Fz6ABHAqxTKUtOtbVLQfX2yGpF5D2X1jxOC9ygr2cvQ7zff4dBp5i0JQ5rCqEl%2FQx%2FbC%2BgBaLk0OTfRVRHJrwO0TUOWHnk39Q36A1Ebj2KtuNcrb2PwDI7OdRAoX9GVXbNJ4ehan8QW4JXMYlsaIKgFhNVOYxFvjrPCrwwcXNSqw2nRGvrb8P5TaMrL%2BHO3ScBhTzt85g84UbNSqNR%2FyavdymNBDCeUpAeb5Z4PbHUADbMr4iTGpa8Iaj8gDo2a3p6mGvtUHwRbExGo1%2FR7oFhkO%2FXXG%2BMjO5tpSaC%2FXXjIEEAXMNtEukpp%2FPDxvwtkx2SUpyZ7YxIJ6J8VuosoeY1yLvJ9AldEESWQybMGsggGLsvsvkq4xfxPpOB%2F7plHxnxJaBC3GYm1TezXDpBor3eyQOL%2FLWcfzF7JqTkUlrTDA2abSBjqkAQk46xmO2URg60EBW09D71oGgI1i42oT8xf2upSSarCJ4IHS4gPbSvlkHczWmE3jolU6%2F3zNcoWGXQMYqu%2BcW3plE%2F6nTObhHI7%2Bec7zWRudVwVmVCp2Pq0vDv3l0Ktnu4yYtq82IzuyN3zs3Td2RpoFF%2BKGtUoXIbUDpJF9LIFA1Geq7%2Byc9scVOxVmE3WbUrev6nvIN1K5QuOYYwqhwqNiquo9&X-Amz-Signature=8c946d77de04d97d24e64fe60f56a52d7240b1af95410b436264afb294cdce19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZGHC2G2%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICG81L5fAdDdpwpV3E55DzOySA7wT6srLH%2BFiiAPELK8AiEAmJsvVZTiyIVAb2P2IMQlHMCCC7V%2Bn%2Fxy85h1g1QNALQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKo0v3VQG4KV4sxNlircA7Z%2F3ZEMqj3ap1mIoOkxhM4h8Zh02M3sSZhKUwMTfPTgxDoyAHhjxHSo1RjUtRAqAWYW3wJpebBxKWyWaz6KiW1C%2FOKyuTfQmXvKVmOCpQylOgdp6r6iBu0ZyX2dwY9NQAfFBY5k560uanJkaIXeb7UeXpUjEaSZ80Z0lODRlX6QNuj%2FFXxz5Pyd6rjosmjEZfxrkRdCUveQR80WEj3nfSFiOIW7IHnFTUpn5Zbv1Zhh8J5h3CTR4SMLr2%2FYOY0bCYPSjLqMQ8vmbarsqAHnfRjVn84PhbAz3gB31RyGZCzfnmh%2Fg9SALhPTLlerzBfLBNKlFpGwtHz0%2F%2FXwnD8GW2FbVXSJspYI2SlVVjWQgNDv2CA%2BPsgPuFFUfQHuXnqYUrvOI5PFrIzNEpZqUmyUrRoLyX00g8q0a%2BQQUSlikNNqMS5b4vN1NWW9061UKznx1o8zibJWeI8%2FaUVsRYihwddQ83zA3R6EiBSlFu%2B18fpseuSjN7SjdH3TRzuCdiizWb7XCbRccTQt0EBLoj16izKgTrw%2BRVGr%2BBVq8JFkZ8SzoxB1HQnewovt6ceJM1gcu0yvmwkU7HqAWzqBxKBFV2y2L0kLrRNIqG9Lgfv9BADE5BUTLV58eqFu1PBeMIbbptIGOqUBFElMrTsZxhDDdtMRhGeeaH2qwMzsNbVcwvJ8MtqM4mOpyyD8ZOJKPlFmqc5IpqXwlevbRSKlkTE6UPh1G%2FSo7kU2%2BdvqpdPfVSCX6mU8pEaIPixhG1Yfqf1oKGJshXBO0k1SgjvOcJvnoqUPemNDoeCW0AoFULhRbclj6yQE90VhXXv3LiEKrPuymyNnELL0r4cghl2RuCQg3rxDxNxDQEC0QJ2L&X-Amz-Signature=4cac008e3d77b981ee8c4a06c9a6388c65dbeba2d1513154ac918964a2422afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

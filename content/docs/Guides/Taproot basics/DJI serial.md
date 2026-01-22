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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DY2KOJG%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIDWkrszetbcgYzl0%2Bsy3SttNkNAhLxoZusWgecFsffGhAiApqaB0mjjr7m2qYJ93k1fFs0P97n0m4YC3Rlc2%2BKTT6SqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG6kYTRtrqB%2FrZpKwKtwDQnPwZjcc2LVTq%2BWbCVc6je1nMP7M2S99YapHag5NYCbvnETUjo4f1UDdXy8rgcCAA94BJCovc2zZbb8LebhCZzRSrrWffEjXPZlW6lO%2Bt5ZCACQHCjwR2RQuauXCuuJQ701CVtUFqeUzIBbgSXs%2Bo7A6LQ7E%2FkjNVAl6aoVKjAn7TnQos4qkvQ9NbFwS0zll092Z5eQzsROH%2FDMQYTHsYu8177eh0%2FY0mqNOTO7S9TDf7A1AdVMjAL3UekWDGGsvC0JxXwyMVYcoBnCIyaTcTbwPyZ4JD3x5dJdbKu%2BtURYTvYx1zY7ydWt3%2FfWbSzhiKp39p4%2FafJpIZOAX4yGPwzJHBFC4KFONvpu5jSitELPyoUsvpRfEx6nQLWA6B%2BF91Guv%2Bkg4sEVSV21jci5OdMjTiDr6dCDkVj9gn9ak%2F2F2pPnvzHpUCt0XBqimiv3M3UM%2B9bO4dtRFc9SfOZnKc4ftCCBNrGLl9A66fQbsSje9Cfu6DP73TSAFVdKd%2B%2FmJkZUAOZBlPxBu3GnCB4wVIQ0HVYuAH%2BVHmgBFkcqNR2p5Q1JuJ%2FL7x8bYhwtHWwiU8ZPOm1dkr9xLsU%2BCoWGAWN1uv1CL1OFqHVh4PkWJm%2FvdKiYUQ5GSZI%2BCVqQwnNjFywY6pgFePE6SNg6MtLalaPzADeO1iYIwwOBeldkFvIcCjslZXx9I5zwofiSxP4RQ8bzuz0Trx%2Bl9XD30xJnFor8pbwiu3p1hBVg4osrajrlW9CtE8FCsRDnWnS9OTDwJaNkHlmKkGKXE6TwrgYmW9cKYMErOftbsC1lnX2zqqxNvv%2B7s1%2BfMrwNevZMQ3BoZj1YWYlwdsgkdl6qYUHDavbRa9kIGtKsO5%2FUe&X-Amz-Signature=db36fafca938f8a17aa744c95c308312528375094b5d4631cd7a52860be6a79f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R6I7F4M%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCQtqLc7VRepxHSWQVqQ92mhIB5gQfMZ8iH8i5x94kbUgIhANQ%2BDh8Y1FWiNsziPmmApQr%2BXJDbFqXYjv4De4m6ig%2BHKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZeirw4qJzbZVSxtoq3APxSbT2EeMbU9eUeInQyLXH1oQ7PHZCbGGxsP4119C6C4ZdyyRVIneBb6KWd%2BILub93DL1gUQDAjTfhGDhhMlqs%2F6IHyIm8GAOJJrZxc6QaDfPB0Nn50BuCKTiyyaeGf37umxyxQEzSlAYRwrQ%2FTMq%2Fi6yABWd3h3mqUHvJ2bVcxVTz33apQSQ9lKDIWnHqCO%2F%2Bg6NoD50bUHj0sn6Nvx0tynkMK%2FiBUmdLM9cW4soy%2BvZC64xjn%2By5m%2BFGBRfVIHcpAg7dsrePWprGeWedTlrYHkbo%2B5Yi0qrNX1j%2Bh5Ji5Er9ZCzNrnSaU2IyBVgJ6QfAqmvN515oibPeJk%2BALu15mK6L1kINECazCoc%2B%2B46wOq3qz47xCP61e%2Fiebuel2xjzvYdWkmUfd1%2BL7mAS6u1sYI3b5Oh%2F0TOd0TWEW7Eahu6zAnmFN1cIBZtzk2exu0HF4d5thcZhOgNY832W5iRA6QViNOeS07XOYH7ofh7aOmiF9GKpq3UuV6lBFNxeqdxb%2F9H8ailzLd43N4MXscZ8QlhQB1HEnm2vMv6FOli48mJhIq%2BGpTSgiNI5AntyJNDeCgxq9HReK%2BYslNMqjMBex1aLfjudRa0dcJRw%2B8bVW3y7liaTLHiZSCB1ODDd18XLBjqkAabzT9dkB4P%2BlvGezinP5JEet%2Fw7nzNs64%2BL%2Fr%2Fid0RFvpx3itAdhsT4%2Fw5rEFNxiNZCaZujPp3zc9ekWb4ZT7Vl3PuHaJN%2BKTBaIEBMw6WUSVfJEgV7jfIR1W75WaVQKJ7O3tRYFRa3bG3FeAtFe8tmXMFukwGvYANmDRoWd%2B%2F5hA8qZ3yPRBP8Mnug2GiSahEyB1%2FYyFMD00EhMbopXss%2FQGgM&X-Amz-Signature=7a43cf877813534856d51cf953908b3e584b2409d1615ad48654cfc9c416dfb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YTSEJVE%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCICXW0fFA%2FAq0IAAJNVgOeBjUbk4ltGM9MYnv5VtDVcJyAiBfIaEW5lhEqrUnYifWPwX3x1nMN9TFTh1%2F7RLuUCdwSCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaT1fejwqRZIi1rZMKtwD2REttCLX2rmGn83HvTaEfuFBR7W%2FeJegNV78TSGBKWhDT13U%2BsjS24gRMkbF%2FA1%2FeXfHnt0My4uT%2F4K6SRn41oD34LSlRibelI%2Beq8Tn5zbH7P6Uk%2BgE0xPxDHSgKb%2FKmcGT846zxm0OwhgmMgHLvf5dZEZ3E6poF3T5fGirhDEb9nObP7PdxvH%2F1j5jHirvbmVyVvvnDyNZCagu4oXIjzMbfjovGKovZCU2Nh1hLucSrefBf9xQaoNbcMyAiyJewdrlvq4gYAhmVerJXTagtugNwFHOBDPdlkrkFZ1nUAt%2BMQ9sVCtaveC4%2FiPhK4dhSxEU1TYsd%2FlEGjgt2xIGjCy7WcXFw6pPuaZLPwE6iQEMo8DS1D8ZQo0K%2BLbEYedrCnv6OQ397276K6IMLi9ia1CANsv1R74Tr5sUoKRtqtjcTpAdlp6P%2FBZl3CLihe3fS3hE0PdBEkRFHJVd6dKGxuwvxzlagcl1AisuIrsrSlsHQ7Q0McPnYOxU4zlqba5ZtAB7LMYMRUndzy2brx4bwCRzcGHzFi7Br9aRyE9LLECn81DFRbSdYxgz%2FEYkkNQyxt8t451Jb%2FO01PJlxUepoX2Oh18syGuOVI6CdAL3PjEWLThi%2FPWFASvt3Q0wkNfFywY6pgEhQMaLHQoc4zsxjtUuxkc%2BUgtdEBkO2IjRY3rZYttwSe5nE0HgTGmorl0WBAUeEcCJSh9Q%2Be9vRIvIwieoOmCgSHwKjDAZgEPvoGqSqiJmgmyZ%2Fok940B1Q10GBXSQ7D%2Fwy%2FOxc7R50aXCtylYy9VwLIt7l5HmbLbloEoOe7qQD7OHKSgXNm7ZQp3qFAczvzIsfPugMrC8WSbLdNdspSsQDuPoKz3l&X-Amz-Signature=bed35414eefb997ef93ae75f33c9de7ce165b5852b7f0dcee506a7e2176b454f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KUODZ46%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQD6BpMsihnJesqRlbOvubZPJkKaDGnRGsLanFFfpVZs4AIgazYS7L0C76PBWtVayf1Hx8m%2F9IbpFt9ZJX4%2FWdbTnlMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FWxpgn53bov88mvCrcA4rfvCDTKlsMwZFnhDOy%2ByggFHDl9BDkLU9spMt5cZFpixBrM2n%2FOXbBjAEEs0T7qA4lKAfIegNcK%2BOPGGBx2NDYvjQni8v%2Fw80kC8DZRkBv8fW8hjo6lUTmD96StzCLjNRi8qQ%2Ft7hKTvMQEAY4arPsGietkoAl1Ccnu1N8fJtKNztSFhEJYwHMrWLFJSfdUWcln5paCv4IKzn2JYffAeXRdBISsvBRibyK4jsJBs%2FBaIJxwdCFai6N7sY0VhwIufMX5PZgiYXtIU45IXqRkCWMyVsXrCQcRdcJIGDxStktcOEf0t7lfCfuENjAegYGuGRcr3j0SSGPdx5ZFDaYUeBBd8Tg6UXS9VMQ3dHtMGSIhlQDKmwyJTs63LscgZCjALQCpeEsweKeWH%2Ffmp1SnlaJObV9by5zv6zzz3K2mzVnUUUNz%2FWthVAH8j39qKQJiJTPu8f8x36hkmZuHlCpnA4exLkQbsXsnY%2B0p%2BWE7SkKXirqFcc0RS5hDacefaGz78hlUnjEOVqzVBAOcvmv8r%2BK%2F68zoLcP9yNJfHIQHuHs8sOxyMCzAXvAajFZdgfbFEtzUSr4VrPCkMAlyxy81zhS%2BVxnWPhJYZ5Hwo%2BJ%2BUU1noIy1Xfw%2BahALa6GMLzYxcsGOqUB7uWgObkXspCeATVOrhRbZzPddU9m66El4Gd9dtwEGyJVeLRUU1o1bco9zf5LFLxsBbMgZ8i3jh6%2FB2v0PCeFQLCe2dzvT4UGFEozKIreIU2DNtjDscKjG%2FArb3KktyeNABaoQEGoo98zIuacvQqLHRyk4VJX32azCbI5xVyos4rZhwT9gHHgE0jdWhHGIPqfDtEHhM194hQj63mncIEdKUyOvyO0&X-Amz-Signature=87af5ef4c9079cc54fe07cc94990bfc0582fb166579cd0a50507f3045114ce18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

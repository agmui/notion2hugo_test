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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YLUQB6U%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIHODnB2%2BcUZtRccf5CNQp%2FLcgIAyrKgfJPjqM5MUJqPhAiBkr02WG1txx4pi4kEpeWvvPPDCwpS5ZCXh4dgE7C7ZMyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkbS2TerDgu9rJlJmKtwDbNqSGXo%2FzdDqMIorlS%2FBAtmHCqxRP9MkI5utXmFl62Cp6Gw62unBBcZapvGwvlf3GM9B7kcZOCHuJqil0tKTg4eTgtFhfXqAcwBVvh9%2FFq9Jd3xyBzyxTXla3y66b0sS7ouaqPpgo7WGowCY2k1hDY%2BhpLaEsS9oYzqC1jh3BC%2BIK3IBFZETf9nmGpzJ58LfFGnmYXnKzYtlPWbuz79%2Bl7zpKtef1VbopqDjnkD4%2BBfJ9IE%2BlVBOVv0sWGeS%2BffdnXzwcAe9pigYR%2FoG1SbwndNRLkMz51ChIsgLtQoXbi8LgnzjFl8eZgCBvPpftQm28mouPHYFtlDUF%2FPSrvz8oUuAAUjdBReJ8h52zUk3EPmC0HDhfArKIAk%2BFL2M5VosTAvvdGGvGU1yopvbF1M5HOMDN6fOUq8a8GFqPQoewYFCfZp4aRov2pd9scyhLqJB6qPYR%2FnHpd8oXN3vtxiWO1uGaKmftUteNV9m1L2mgstnDW5u387bpoIurma43envRMPNSeN4OG8HIc9S6wMPaPSOTmEU%2BiFkETyHfHauFt%2BZebFf4ewfoFghCIbpI9dv0svjyxP0cP8hD72wlKv0kRRZIhQ4Xyq12atqj29sWhMaZS9dN%2F0xh%2FZI4kgwxZrXygY6pgFLsm93h51AyQY2EUBFPwJ0i4bj6g2eoRQQ7Krm0SMOb6fqvBHcJBCP%2FvamNzps4YHh5CYaq%2BF%2BeuL3lDhE2L3e39ew6SVZzutfsjyNsiQqJyGKAJVh438OqbuKz9cIet4gHM%2Fy6peKjkefoSVBYR9ejOHGUumMuOiTNKTdljmSjlG2JC4v4OqQeW%2BlAYpK3zJ1860r7SLevFJOAO7rjYnA7D0BgMZo&X-Amz-Signature=f110f7ee5f3a5839ca7695aa476efccf3c9930b8b3500041f148d6d537b866d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NVZSU57%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGNakF%2BKyjeXQqZxzDAFKsDU1qxrjtSvuL%2BjMEkfl8aGAiB2w6kZsMBFWJcfgGeY3BMMoe9NAQ9LT8FD1Qd0ZJI%2BMiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF5ADCZFG6YX1u6z7KtwDewonLX5TPlCfsIpYtWIIg9XE5PTvccdXPEyxgx%2B%2FHzNswxw4ks12VYPmpldjE9G8uw2hgrD4cPA41NRQe06FaFkTNZpMGQ9692ou93gTSqhtvQ0rUcxAeF49rmm2cJnNacORt2AAkppsnvxXzDLql0zpNZPWcxkHEcXkeRvZ%2B4348m8D3LWaV2I7sBhQmShyWjZnE5d30Xo%2BfVBARZpMalZxoCPc9CcYzJDYGr5jkpift8p5W4IDqIT1qiW3uOlFfLQ3ritnZYWBYw2Ywv2SPTyvjMLCRFSr5RRtfoz0J4D85UEZsxZbBR06lM5F%2F%2B7sVukEekgybr%2BwhLk87WIi7eMCO2F9h0Xk5lZWVfYz96uwmkboKZweb6Weh3vkymGOUg0N4G5aNfjMlsf0Fl8ZFOm6SLtjE6ues01nTP%2BFT%2BFBAJhTcQi2tImVcg2uM1SIYyCdUrvxrmviDePRdZ6WByzB7KY1Wya3LGob2sBZMgyU0MkujEvmW%2Fow8dHp2LtWuFMQrmYKQwNmG694bZDm1PiZEKn0s8CDE2L%2B7aLLhgF3i4pTi59BrQwdLNk5ifrVuSO9xWfdW81Xh9w8GJyC3xp%2BROIkiM8tRHCux1P5osqvtzLGgDCWwLExuPMw05rXygY6pgHWoJFbHZDkDiRZgVwW4rvYdPBDJi4ndhQi4a4rCZVRgsAmfIdcuo5VqzbY0bZ4hIFaqe1aUj8DCyMjkYSjSw2Vdt4wgdILHn2S2tDN6P3jt8xmNRGOALjtlZ8ToJQeXg150A7N6AETZApuznwBVGk%2FWz%2Fi14gGRllLESQ3XF8xb7sCYSBABaCjkeHFCallxu8TiQGdu8aDt1X%2B1bXNxPZWR9qEkqy9&X-Amz-Signature=8ff5fd61b57c57072885a981cd083eeba126065f00a3139276876fee4a810195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WBS7KBR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCBQk59GDVrfmPT5FHh8n3B0qSX6GDNA7zcPTCeN6L4UQIhAIeZH72C1g5SoPWxa8FVTKbQ3OWKM7E5u0VnKiHSJZwtKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuFHG1QXh0BTYYbvgq3AOh5lPJq8jYr6v05i%2Fn657RY11SznPJGQQKxbbSciNsqttuCZfNLbDbk6mwzOpdhfhkk%2FXfP2qrf7YzsqkILd3NEegaKydoGTsO1LoQ0sJe30AbVutP8H6Q6%2BQ%2FXUJTcKrnivrxfzAeirjqEmIXGImjGAoSQ60n7aCJaO8uOMQlSd6sve0x788h4lPOxQWsmoGveQ6tEETWnhpCBBRg%2FDih2iiz8SdzuQ7FYZ%2FHMkcn1Ufj4cKuGWUYTQHgzyhskit87GSyN%2F2Olh11ohMqUN71ViIA172eNR0nYha%2B9cP4ZyVutyXLd1u3T75tbKiaI%2B2uQWohsvN6F620dVlmi4tMTLOTVHH643%2BduKcn8oNfOluLIQeiveqMnQEUGD9lTPJ27R%2BQVsAY0mgVsIBPZitVzLiS6xzxPQ0x0HXq3HdGePqrPbpexrL3BeGtEP18nel%2FuXQ8F9BaOag1aAveTdw5femImiRbZBL6FMyhEuhXlwhMKkfDTaCR2MVS2F112oBuadfTOw72iTooOKfxNgRuaWLFD2ObFbNdSemrwH6K8cH1rSbE03qipspF3o1ztF8AkOP5v5BuRGLoIoJaRuWIR%2FNSYJGzYzoDvZxDbZQHHOad677XWziCDsO8bzCEntfKBjqkAcbCt96rRW3uJLP3dB6cp9HnrjS0EuuviAV3TbXBTi0Sj3YE%2Fcj3NrxFDQi6HP9lB19ehRCCkIjrtQaziYuLmTf6EatmawJnOtdRd7hRFr0ecVNWMIGymqNKF8HAtgCWaeLelCe15eGmAEXnIXhvw5t3owX3JK1ge2to6AiLNz0%2B6GSRP5P9x9jwiiGrmPUN48PpaSFE86mM02FZ0gr2PoQohxLu&X-Amz-Signature=86f93c13d2c180b8d932ccab5348fc72334a86b637caf143640670fc638a9313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ICXT4W2%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIDxTIHg6HybVx3DyFlJ6ZfGX%2FaHsFTrEFnqsHu0HoN4EAiA3HZfvjpc3vku8syjEWCQ%2Ff5hqDZqd5%2FUa7FSX9PURaiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQJc%2Faeh4yDIW7yAPKtwD%2FOLJTGFxpjcOYcP0wjsN1qOtw4JL3coRPCPKqM8wyFfSNCIRFxzX%2FLsshrvWEv%2BrpXDROoPtyJmv0LJ%2B8BsfITyr76agtKr9D9q2VrQL8ucIGKyfUCDUCqe42vu98K79V4AvURBUA%2FXWEpsSV5jwvW2wNGqUGf5oUvA2VEWOWU%2FDw1RwwopO13TqcIWIeJ1Krjlfq1UDUKldBgcBZc0fkAUzm4E7P3rb5mqGVha4yC1MExp1HaAoX1rF2PC46M2vZjxpWoJumTLiCgFdkOrYrktKpITiQTA%2BWAXVl4g7O7SD8wKMR9QeZ9q3ZLtU44cAuzbzCXRxLZh3yxtxRFYqQ3LLcILXz9Hx89UcGU0goqAV%2Fg67FYZNTk%2Bfmlql9a1I18Thn9cR3l%2BhxtAGwF%2FLP1KrK1BNqM6RwRv1GmXhzE3gk3HhWfsiGsvsuEax6KRuWaMRfY4BfC0KXY9XC1Dgyx2vrBdU8p472X5cg7T%2FhwULdZ0vE8WadN%2F6v5A0b20bdHan7l3F13MNoiRp3RPIQZ8FjL5D36GD1tOA%2B6NpLP1%2B4B5liioFEW%2BvMdeQ0l0J1vLVB3kQthJjhU2XAh5Blet8i3NFaOr7ZRCYgKJsQOVCppbadHBmIXtAPfcwrJvXygY6pgFRw7w1qJJMNqPj7kJ4ONqeOHFm%2F5xlQ3fa%2FoRpwW88nkuzlumsNg545Whl3FrCe6R7uv%2F2tkUJWi3fex2jDptXcaaDg9d7MacPUUPcCgYPkvsRDjrvUGOGfPc9QdumWHLY3sVe8159vy4wR%2BFSSVjNjF8yR0uisumesBNOpdk3%2Fmhy9CaJFcLMvl8kTqox04vxlTBbwnGQJlNb5%2BdpbIaHVPjcewMQ&X-Amz-Signature=a0b3722eba81886ba25d53d97059c58744c3e20c7a010d2e5a69f01149500cc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SYDNM54%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQD3TidMZ4zRHc%2FsiB7LmvyUcn1k%2FsQcdlr8KJpDOKdaCwIgV7vqj18%2BCbr7HjnPc5jPiBav3TnI3qjQBNWwQUF9xE0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8QQyOvwcItqgEeHCrcA8wendSHtc7WfEcZHsqzgo5usdsTaJTaVtknH3kYMTMnlyyu7JDS6PXyKlgFga8LNOX4k70yzYFR02Fb0SZ6oW5hIMWM5aCW3Ag4lmUmruA%2FytwKlpx9OzKiK0GrSt05lfr7HD8RinHsoKUQtyd6TKf1BqUaMMkCYvf%2FGe05sDLd3N4uNBAx1TDAEt5OiCe5Xr5i6eEiuMHAT%2BtcDlhMVAzhnyIkRZRdW2jMHIhcvhIgAu323isnPI5F%2BOflZDkZkMNSFB%2FApuMEdHe2XzajmANjXpKSFJiaLW8PKefS8VTZMezuAqeiS1T%2FW8%2B5hT%2F0kyRZCHpdo8PG9JfFov1axy%2BXH5dlG9PYMd2nh6ZXWbjwkNmmITZgX2i27vIwzT5EDEY5udAc%2FpTuj5ChUopee%2FM%2Fcim336bDiVWkFleMwhNs8oPfcsL%2FnLVmz4zm%2Ban2vDNkOIYlB36L2aDG1PrinF5pkMdUnL2hW%2FGtly%2FcVbhpeu5uL5lh%2FapvK%2FLi%2BsottPyE9mjwb4rrAEii02YP9%2BdHbXTrlsJ8FZHj1cCVfW3joLTMPtiY9TQgfRuMJVCA7Q5zhj9jLKryvE5Gm0UDLKDtg71KqmHdrqmasI203xks5R3u64EEzCEYWZfOMKyt28cGOqUBj8GVt%2BcxxRTrG3i1YaApMYw9u6isvdJIvsq940g6nlj4t%2FW0GP6ztLaomvCfBKDjQ29QeWm967sr0F7Q5aKBc8R%2BMBoY27XaoNQiIqttusILFlfYspeYDQRZoltPcq9wNKO00aF3i8GsqME%2B3iDz0j0qaHa723wXujOg6bdXNpep6OQhS%2FArsv%2FC84MQwfSR2MWBj%2FltWWYMsj16TN5xVOtTOXw8&X-Amz-Signature=a7a9c980c9f5b6a46a8b2a419d0c584ef36afd45615067f03387d83eafc98f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWYRO7NA%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJFMEMCHz8vVZCEl2LvgXOFj5387xarA39lrJ8IgnxWg59itZUCIFWWDG7nPZ2PzV5gbcaBQG6T8a%2B5ncuzmnILCx4BMGj1KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybEOr6DKL66OnCpxsq3AOXhaZL%2Bol%2FoBFqRrIOxL7HDVvM0Mw19YTekGszTydGDQqbiTdL%2FPy%2Bsj4ZUUbKj74V8ZqjnwtP4%2FV%2BcWw9hAAmkO5HS9HLBFH0pa8IE5XaCN9yEfIz5GYj%2BkXJxuUKBYABNOci%2BwthjRjFhDsarE6OTlAd%2FEvPS3W31mc0i45Tw8xNX8n3ar9TfihUAwKrbzeR%2B7wEkTJTU0r6cDOLoqyitgflFwcoRp5GTWsceLAYB7EGSUXfeAKPmWeyetmWNWod03%2FEZwetfFtnlQNJX4oRlRKnZ7f8THMUAFuYmmNCkH5XhexDCRlSlsuqYVQ8x5O6lSxGkGuCrQgYwYrwNFmwUuV4tXtreXtSIkXSnywW00ylf7XpRHVuqBr8mo%2BU5K%2FWZILpUccfyo%2FwKOTvcEmvatv3GxSAucmlk%2BqeqqNc4xdpjwKwCg4iIBeuW17mQszPMeeELHX6QBguzco%2F%2FHr1Ui1%2B3QhclSW%2F4U4Irb7pbj6YpdHTjcnMEgxaIcDpQaNKZu3fPOFbnU9qvOUgGth5yVPv2B85VNCl104G%2B33R5KOO2J%2B66NWCB%2B1VVo6tdvgCxY5w5V8pGgqmWTpQevVy2S4yseL8PEn7W1IdRn%2BgCht0f8WXsbGDw3xPNzCgrdvHBjqnAQRbQKqg5Yy7ieApq7PXI7At%2F40pQKqfMQzJKEAnnltDfyQLU0Rdv70adV65mvXKuqHuMCzS6q7CY9GUxDDgJV3HawZfAQXA%2F9J7h26omf2R3ySkFje%2BhgYXBfLWYADL8IBPEHjPcReXJGl4m8JauVzRrLSQXl4SUoWDD4NPuZuULX4R%2By%2Bb6UT5dYEa%2BYS6Q77gAV2Pro3wAtsCqRz7n7vqjzpb2s%2BK&X-Amz-Signature=c3e85f1b620d59ccc085f2025a319799998c6b131fa17bb5f88cc43732785043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZNO7NK%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIH%2FRlukTYvp4wXnl1heDv2pWlhUmrZXIyiUqHqNmOnV7AiEAs71tdQzIiViep0G97syRkZbpYV7pgnrlPlZEt%2BQvE4EqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFo7t7xNuptMOBsKQCrcA4tFcREfKCsGgp3fXJ0sV2oosOBPB%2BVqlE9%2FAedgmsw6uHXeujYb3TnVWrJr7FR4MIMSEqUQIxigGrg6yx%2BLU43vawgFb%2FteVpsxSgQsqJ3qHCKRHvLmJ4gaX%2Bw0VxGCXdL0kMjzyzEqhgL55kdN7xcR7a%2FXCtDWDu%2FmzK798ARx0bCxsCnmSYE1wDt6UaFy2kUG3eY29SiSeuphOpEDvCnovONH5jdhzauwmWwEzenvUD%2BAi0JEIEkmMrZvvncyc%2Fgtf17q8mUOvgq2k5zxa0nLUhsDPyatOTTdMKydevvS%2Bu2mb1UaCHVEsDHXTPXl%2Bkdhu3oD7tjMg%2BSA8KSBDn%2Bxv%2Fe8CzqGoqyC%2Bx1j6Fa8ydrUPFgGYdF8KC5skaeL3rmFG%2BPB4Fb0%2BZ%2FbdVgKa5csCd8Sf3KYGDXAq%2FKqyYNWDw9F8ajdfR9TxvGKzhyghogddJKtGy%2FosTVfG9wPqWk9HuroWxi3zNNsba9vqe2CBd7X0H%2FdiyCqorjV9e4clFTfDBbU8jmL3kp43z8YjQH0K9kxhsIkWr2ZEL2t881IuycZki1%2F8i240Zl8vmXHP3kYM%2BXdWHgm%2BZlwawOgckjWNA37iwXleC3g223KCZq%2FugWgDYyLiLfbeSzZMOKt28cGOqUBN4aVWKbYQ%2BsU7f8lxRSb9yvvFQdRyMtqedcgVQrvVXYWC8MAVvkiOy3YlZ70oBB2Xu1QCo2dTTduAoPfn8AJsFoEXXgaxtHer36NIUW5hL4evybkpzp0eqViAAfffX0QQO56A7M5jrakL2XROhZYp5g6USajkt0Ve1ugfIeGz3j55eQfVbyWAZRusSFbeZHc2N6syvQSn4AnWwZSwUJs8bsyHaJ9&X-Amz-Signature=6fd5119ef8443bdc9b214a3ad439159ff5503893b1e530bd2665e79966e9e8c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJOTO6B%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIAV4rmrIYed5bgVO6WYXpqM5CJIHwpOdvWDh0dx%2BoTvXAiBwXhwJEScaOlkeDpAow05wLepi2bUlu9T7kkkxKHcQPiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpdOZbFfrZZk7kT%2BPKtwDsKSTEv9rRje%2FNNeSWugD5hQSbfNqQJNa8%2BBTZu895Cdhjcxw%2FnWqoVmkc95fsslTpU459N%2Fuj1ybjnRml%2BuoXqG%2FccBmuX4xpSYFVTJO92qCf8fNqGlB5IazP3DCdzlB42dFIGe5aJGujcpBh7A2JMrRN5WSPQCix9dK6DuK8bGPs3qyONwKAU9PXql9bmdZ%2BJkzvd%2Bk%2Fo4mLBubXD1TlPrgco5CD10WGO1PXESLdyGmSei04UhKWlc14PaiHH1%2F5ju%2BrJsvV1k%2Ftgdi9WOX2RfmKoaIK4CrQcM44NQrSdeQ7CEBR%2BwQzRh23zh%2FcHZh1ejNLLeO3QQDTbhFku5Qjm%2FKah4AhAd3OeZCrvi3cMzyt8a8tMxA8bhH1TqHk1emb1PIBdQtt32fkm0IriUewf7beRSeWda7htmOc8M9dXIraCH3Sld2Abl6eWf0GDm1WccPFIu2utDC15%2Bbae87kKJzvVlRvAXMkStA7%2F7ich44y4B4%2BztKbV7Y9KlzofZ%2BuFUexicZqO169BAT1o2CoZ%2FIp5CxPIK3QkSGAFYyBWVCR1qS8ToB9hgm3rni0LXpCJc6HCQ2hQWfhqXml8z0y4C0o3QO8dT0NbpKJ5mYMd2Q1EqKPZo8rLipwzIw363bxwY6pgEAOV%2BjQOved7Gi6i6vTQ%2FbocIozR%2FUemHdNP17lrNYq06jeb7q37JGuDgU%2BROfhhmmVClQntAM0B6g1PGHGFFnSjdc%2FBIa8rVDDrKr%2BpZpIGnOp8D9mDmJc%2F4dcf3GnSxAKu4ItAUohKdk70wbKzpkq%2BvjIOQP1KP271cv2w9KYZEXewPtB15%2F0lwNPR8KI7dQ9uvvaVfxtymKD9mQQhgjhal1KP2W&X-Amz-Signature=1966052a939ff89b2376fc4bd84e3965b01c32d299d3c155ae766c1972ae25fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

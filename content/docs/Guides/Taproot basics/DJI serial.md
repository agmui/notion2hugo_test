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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6D3RBV%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBI4F9qPKLLpS3KQunlAe%2BdHCilPN1KFe6iD4S7iocCgAiAwmrJlTzj%2BZPoHaX%2FK%2FPrbmCGAvA04emthAph00scxYSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMikqBlo9QUCTTyRzUKtwDaO43JkDwSmkAB4wBNIUz0zhoPCHazDPVNjShsA1qZ2QSWSxSl6hyc%2BWBGGnQ9ASEqu1LdQdHLYtrIxedvK3HRh%2B8UogfbtEZtA6%2FBvNZMNJpTnAeWrkDTCdP1Jzv8OVYOuRKrrqMzq6RNuDzEVWuGK4m5pbNiiTXKOJ%2F7l07Z1sToHJwYOyqhewaFGeW52VeCqD96fWpBLwB5Pb%2BGqhlno2B6AkS5bAD%2F9e1uve%2BHhQkRFFnAKhPt34FbCGKjK1pm%2FQk2HcryxR1rpv%2BxVogK0OCaI9ebvHSCAEB%2F79bbJL8gBD3MpElM%2B5Y7m5pcSDZ7RSzFV7RXPavnMemtsGBpv%2F4iiNRG%2FkuWSbIuhPDmO4wZBwbKD46Y%2F23ti%2Bqa5E0kVWRZ%2FJnTrn%2Bt00XEIZ1BkqDDhnz227mlhM2AF3o6daT2727V5MjP1oBshvJp%2BYTymjc53FN3%2FyBJi2AY0n3hbHFAAJFLQNIIfPmK%2FOLCKqM4ZgIAxDdiD3ObwhBKV4Xu2ijRcNou7b9VLIUcXYLnlCER6ST7yHyDaNlLZaaqQkso3v3ogIm6BOv4WChKigoTiypPQoLRT2D7qvz1NVmieIRjmSJb%2FwAVT9%2B4HRutDugnzWQe9vplX8HT5Ywl52wywY6pgHOsB7iTWdWPtNTSBVQVkBxuAb1P6ibn%2FZtMYk%2BxEMh4%2FSvlryYgKkIsoWZRLlpkaQfkY2NuO4R9WFmG%2BfP92mx7EXU6P5Hdt8UM6mVBsPyMtgNkcWLgmoP8IAakiiLBKHBBNhk1MupaDmauIwQz4fs5D45eBWAU%2B7YnNOHZDhYhIUEEK4u7gieRtgdWA0MVFYM4wiNbcS0voxsox%2F%2BjbtvLEN0Cxpz&X-Amz-Signature=3bae8dc5d1545b8057f3a3f28bd81a204feda2b8bf33bd58c462240983b60e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3CUEEGL%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNV5nQH0ku%2FBWa068x%2FInKJpAyIkfxqhWCfS8LHdG%2F1AiEApxMLv6APHsq%2BgfHbQW10EYRJB0EElSBfsbKjHRwXMusq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDA9OAzvHgR%2BUiucn8CrcA2scEW63iBU5xM3FWTbzynczHfBOtPKh0PplP4GKRg0xozNAUODoKkm4%2FphpVnXK6MXEz0zA%2Bi0mAYhnZS6hgu%2Fv82XMCJgB27ytKyk%2FgdkAWdrSbDEGawkCSoLJKSB9Btm%2BXxiSYdFCeFJauXEulQd5NQkBpiokkyQIin4oOHtEsdD2J4Z9LdGrHRl%2FsGNdxNlrZGOGU4BEJMyQZZd7509j1zaD90gWD2WSIYV25y%2BHzTUD73C1%2F6S8p48y9LMyjb%2FNTLRBM9leEvf7HmOqnZtOAzh2zts4onRosmBpoWBfqMCCi3cvmmes6fFmC5K9W08HYieS%2FmiToWeihKNiq3tmRP4cygjz%2FVYdBQgQ5Rj%2BYIqW4SeNXoPtSdE3pXpFno6os9VKPR6LQuPimRlnpcSgs7hytg%2BCFYlIKf5jb%2FzVSmDoGsjdAayIRPKJk0h8w5O688hjJjf06HwRlv3ephXUfuaJ3OfNbj6L6YuFI2zMM82w6f%2B6KdGPAT9KiJdaSxCNYjeq3O83aoMdSlhisy7hQVbWzSoDt13h%2FD5TIQKAqOy%2F45bOla6LrqO04QMif9nyWTJ3PXihXIClLEFYfeWwZYyvTTI879tThJK4Ro0n%2BynxLtDcs6QwyJalMMadsMsGOqUBHuzGVvo1Y65swmY5B347Mi%2B0nq9AKqHxW6dsD5%2BK5%2BiR0uddteeqxljUJ6k%2Bc5GdYIX3NQRONL1AXYwtLuyXAUhHZ07PiAHDrSuNeDEv1FVFF%2BbVDvfL84tg%2Fdh6kC9MCulPCXzAXv1hWs7RJfT%2Brd6bGzbl0PWxjx5%2Br5AXkOiqdsQR7YpUAT4VREetza6IaTZh5jy8nPwstR7x526LAX%2FsUsgN&X-Amz-Signature=295bd4ece9209c6f5795d9d166618ea33ab002f71ff2929b2a465cdab9f0079d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636AJINFA%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKEtKpgdbP1nXW2LxJ0gzisahF5E8qkFI5QcIEKhTozAIgFel8ZLqhN6PzMUoMYscLNqdNzfyH1jF60IGKxRHPiJUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPlj1kNJrLWgVhm7yyrcA3vVEXpMRSvy7VgaLaIESyQ8LdvmM5QUvvs%2BJK9VcqbNPGq6cVMYX0ZRXpR9bWGwKYYnqbTv3wg9ZuI648eJd%2B4EucUAUxy9mUd5Ke5dxCmSw5qDncQLd%2BYtyNeAZhpjyi%2BQEmGUgGUVPR50k1KBat0VnAUeGC%2BC1Kkuy%2FzPJeSC6OjZhak7sPa9CcTGm4kmXsP4qnqPp8vltbJkDDvGJw%2BFP8539PUgnlZ6bUOB%2F5iILekY5kMFH6EAN3Psxbo8RGhKatnCFur%2FSht5yQEy%2BTrIZBWbfrWficHhpeT9rm6f%2BojTFDyjTNl6b8U7JI7oaR1g%2FCW7YNXpgGcYw%2B4jsbpqcPX%2FTSYUJJyp7uf6Gf5gTyAydXW0ke8ZE%2BNA9PeFHhBGDWmC7uw%2FtKcMtWIz2SoGqPw8kTUvn8gc4N2VwZpEGcW9PQicCdA%2FgMAR%2F7x9AOY%2B%2FVV9v7A%2FHiprzBdLSxLKZyJA3FAjogU1g3KRcJ6yLbqZdx4AyVBj0NMNbraIS9x8jlOuEHc%2BJqrMbeYagCX2qL4KuOpoFx2JI8pHqQzuYyZ7S9mooYf6GCel3b5W%2F8YFRNYmz%2B6PG669B5CBXGpe0ft8bgFTx4YCaLUd2QlcsuleYx%2FYnfqOR1YvMN6csMsGOqUBHnCTcEDEMEkAVOTtQiYJcJkY53ET%2BnmUOn9SUXkiRURktVV8VtLRi753SJDJaA72cPINWZUzlN6HDtIebxyMt7eq5gw1Wi4pbrtmuYXgQbVNYhWFAPAhIg2PReBufFuity62ZIMj9qJWbjVyoF8LkWJ%2Bdml9yvFMXHjwh%2BkX%2BAod55NXP%2F0mOrnLV8ocIIETeyaNLBEUWsKAWNftw7AuUQVqbaeN&X-Amz-Signature=80e5964787897252a922505f1c1945eb51cc924be0c51f1a3a7c96db9b91ed93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD4AXDOU%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzbccmm2DylFb0tfWHYAeW7oheiT8Fu9w40L4qFv9xdQIgA%2FPZzYXMV1mVU7Y42sjeEucfQGEtv2nSN%2F5QUbyk1FEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDsKMaFeHiETVYsh1yrcA%2BVWNoWX5EsT4fhmrKtWMAxvUxNrpzrMbutu4ze9tAgXZdQUW824ZItG%2BISBvW6UaghNnL0pIcR%2BEahTBqts9O9%2BQF7kEcOzZX8xfhfizM5373jmMKduekZLvKRb1UX6OkAghDJOPJAxbElusSVZkNXI2xFNJGvCPe3SDBax3TA0T%2FWMsiLDcq4s1ppZ1wHHK%2Ft0ZCCUsCqvqOoPxbcZeHrf1ajh6D3uBd0CixAKoGt6N%2BtxJLrU5ie%2FFq73N85pjf0xzmnxeavAlJ8LdaPjraJa96AzQcNc5zNdfCjsDs2j6fAEPy9qketiUvUsXASVRO2Aqd1evG5%2BrXEG5154Dhec4j%2BNeM3OzsINOBPkYQaV3bFVlk8cwjFM%2FEQKJDOYgWf8vGp3X6fRqnc4m3jMhyXjtBvACmRMWmPNeDh7rDsy%2FhtJZCDJe65IkGgrRtvxbE%2BgBcQ2TS2hflLn4u7sFYyBoZdn2PYixYskAIqB85eghziv7dF1%2B%2BuxhgEP2ntQprmFMlpaFZcjnktajKv6JSGto4JN3sk2WC7X0b8f4AO1i7tKVd4Kq0Fco6TWvwjvw6DNLTU9VwMvY7bjst%2FcY%2F%2FkaJZ%2Fc78Iy9RDbOScU0cfFMWKRYObjHzPL2zcMPycsMsGOqUBFIuGwMKQCHjoEUBAFlmV7GaLQU5UG76k3d63klVOqvgJYvbkQf4DqXM9i49v5yVM%2FyOiLHFEQWPYT%2FuH2L3XazYSBNeNu8ExgOu43Og7i1uErMnLFQ7axcTbg4Iszn0OWGOEExmKrC0uemaylqNY%2BwVbhYvSC49JY8lxa4EQ9jQMia8PEDoNQPAlo89JQFwsE%2Fw%2F9Y9is5PKevVBijhm%2FbPTEnFl&X-Amz-Signature=34dfc623b2568150a6f4c52b7010f7890cd4ed094ded9aaa7c5fafc34a7e4733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

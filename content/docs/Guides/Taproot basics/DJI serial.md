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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMSRLHY2%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDH7804CuCKoKzjB6Sxk7MbkD1nrxbchCdNcHPlJJqhMgIhAPngUg4nnac9gJ3dcndEmaddR2EY8BHRlFm2Mv5GlxbkKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXy0oZtSA24jnz27Qq3AOeiq3awoCkNlQYgdo6%2BNqj%2FBMMbQk%2B0jQIa1niCJnw6m2CNJMy9JPLOfGoTOfmKUAuscSEnQyz9taG1Mn3dUu%2BUff%2FuXX%2FVy1IfVLx3Lm6SzjDCGxTJV9ZdmDHwMPDA8tehvpIdfNu6vicFt6ky8zvHkcpRy4kfsPkwpkd02sYvjK9hpf80X1%2BONJXwbgD8oygsRs1DfNQV153LjuUO%2FmmVVtteFQCDlvzU8u9vWNh12TZrYLAvNZiDVGhU8FqhACEYBSIoPtm%2F2UDXNN674BeWUKMbFVOrKyPE7kZcK3%2F3n9Q9YsNgftuJEwoW3ygYMHgDb1z3jVYGHREAkdldLdrY%2FRL2dHAM6KLsLBgorhJmQgFANPr%2FzCzJ52eCIAjV4qYvKGM%2B9IMebTSgQK81qkfe9%2FVVRHgYPqxUZ2%2Fdn1NWY2qTbmWx%2Bg2rnEJhKJn12%2BvjE7P0duPhSAED1c777PSyLE3wdvgUmbXhUzsJu7n%2BQ08TZDEW54uEQbnJk5AMhTT8mTC08YjAvYYdyYCQXLh92E0XWMnN2Vao72p9MOnJTQHYKFvTYuMtHh2YgSTEcUX1rnFgEowuyTDflXVqz%2BS0EsYioZa5Qd0LU2DYcCqhw2SA3UYraMBI2wceDCos9zKBjqkAa8pyD72bP%2FelopfldjtOc32LAXP3gH7LJM4HO51jJmWmv1%2FRuWLy49%2BJBNjxExUEnCEaXLAe75W0a7m%2FshM%2F8MXM1O0beFnSuXpCNGGSgUmkCUflYEYVI7UGvaMjREq5Ihcqbl11kpxgvr4OHxZw17Nie18P%2Bph%2BommywGQVZ%2FK8IRMP0yzeDcL%2BaGnH22t2Fi6felLu4IzxXRGJCA6%2B2tt2XQ9&X-Amz-Signature=3988b8332c91645855153bf7c3c8efe685bc76dca7c0caf937fa223dcef7bc74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFLY2U6C%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCcbwyGxhveUVR0icwQtdsQxjTSYbRJL2k5DOQEmUM4jgIgSU8hoNTLxAEIPDaG4a86UeOGT2lFBLQcEtvcXxzEd4AqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFqqESY0yfbu%2Fm5nSrcA5aDhJiSzYk0yU30lGoP1Jg41QXTX6w4JgupBlYzvU13MfRfqBKx0NSFFY4ozXVWsJZC3sPKdISMb%2FuEevs7E3KjH2nziyPa9BDfIsq5Qu7cfUODdKbc0a%2F5eQ0OpKxK79dbwxXzqpZ%2BuuUpWgG9%2FGW9YEHs8qZSxgKZWmKS9ODmpH%2FDX1Peb6uaDmDTUaE0yM%2BuoBzYf2IDDkLQ0NUNsONceOkwkRJxdrbCfgUHLPQK0LCGgCUYpsSp2tZkJEUDhQ1MEApG90cCuBMCsPZ4o1B%2BN%2B5O%2BLcQ95YVb1VY1hTGp6Kzpcit6Gf%2BDf2F57av7%2FbjpkRcUtE7Lo4z%2FnqOxu6lB%2FGHtHW8w5BLPz1NscS41TtKU2RwVYlb5XOWfDtcOcc%2BL5grbcWDOUdXUib%2BOUL3cM0cBkP1xx28wjJKOeh7BPKAyrwo%2B%2BdlbY7qCrPVqKSAl%2BjrHGyNZ5b6%2Ft97xhaErBKVC0a2dO5YvTNXyixJlZyVPo%2BXhl3vQ9dLZkVBVdjvKm3BW%2BK%2BYH1WVPXC082rzLpOIB9yN8HX2kTGQqTTNT9YE1rNJFiQ%2BA4XyfVUWEZ4zgb9kFa%2FHFVcOs4VC6kuh0iRUMr1WBA8m09GPWgBieLnrFiRqAiRITyZMMO63MoGOqUBLDHSmdI9Djdeuyl0JClne%2BD%2FyzGjEG8xaXZfmsliLVWS6RWv8vRa3sgTHA9WO1N2t7KovMPQzcQaeqXosdHbiYiaYZTG6%2BO87B1eMMgwiCvRfMCKH4qBdiZXzrKv8fx2sGMjR8LUg9G%2BVu9XijsW6oSCtiBIlNtWVutFpTIuW%2F23ezlfIgkyYpLLvZjPTmqfRBB3TEsKb58z0SpVuiYhmsNBYFVi&X-Amz-Signature=0b4b80956add647f664531badf22f19ea2dab0f15764aa78eebd91c274486d59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W6R5PMG%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD1qSPr5mVR4UoB6BF52aeOzHy2GoXoTKkta8qLeChN8AIgMDPU79c%2BtfdJw28qHoYigl%2Fhea5%2Flm7zSkzVQhqB94MqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3sdgMvKS84KBBSBCrcA7%2FdzvJhCt%2BvJK4nXyFrE9n6oAtHxmJlo3l2yqRU5wsBShrIXylg%2Bfyu63B1UceHmvbStUqUP26P8XuR1eIXuI9cDXT7ZkXOe2%2BpUlIVzhwx5205gRGJ9uAfYdR3gmbzSdDB6J9eGuSI%2F3bkvFkvkB1xfKW1V1xk0ZmtWikVrairSv4TUv9Cl%2FwCcGppnkh2M4vP66cSG7vYEfkpbZAZvxcArQTxWgTaT6dJ7lgo9XDu0LR%2BEcAFT3%2F8UxfkXEpYG4VXqX2RCt8Bfdy3BQvHkPqyx%2F%2BiA%2BO76eUfqOex2LzYblKj42zL42Pn9IoZCq7weOS4UJ4aIlLsIcmpBAXON6PHIzqE9dFsyhRtEuCZ7IGX7CydF3tTjWYMuMD7auzcNRCLFfC7GeD01B881SEiq06Gekcx7zeSEC3Pdjhebih8hZBjJ2mFOKoVS3b347VgzyBh8RHV76GZXRBlMt4KRFWRoxMxQeS%2Bb2XWAqk3DMeU9%2B95tDsjEwjh4%2BdkvE5VUSDSMCwxt3XnLQ%2BvnK0OHsUDW5QmF5MSW2az3yIPsfCM%2FRj%2BamsyLjrQl65yglWRnG9%2FbGA6MNtvCXKrJOBbX7QjUievJ9%2BmxiWskK%2Fez0I0%2BisRvvlDtGKFKhVfMNO03MoGOqUBCukvIpipj2dHIFC61d1sy4uKdhHIznt87ZoxXkKu%2BZRuSIU8RPI%2F5b%2FQsR8PSR93wl5DiCEswgZJU3SnMae2H3LoYJp0zkxyhl5HpquYCXYE%2BqmMtzQqsbNRGLdQzYVv7AHiILPv8r%2Bs5bw45gpjVqdp8LH15oOwJFiaW0eXzjA47zsoJfxHB55wwLAlqlI0lwncEnqEcpz%2FaSuYOOQ36wr6FJeu&X-Amz-Signature=f293b0d96ed4cc63687a2fb398ba4469709504e86da8f85157df45a1ce47da1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3DFKN22%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDgyiVb6TaesbmcjKXLEXcg45NVqy9WQ76C9JpOQwnUagIgXSWO%2BGEdVsnC7Pis8d1XL4YNTNAdVS1DNehJDGOipOMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoua5O0OBIAVAmgBSrcA2eCtU7QAFYDsv6EONzatrxqIu9VdZ8Cr0raeEtUhR5lFqV8glyqqzV8xBg9rjrMUz6a6gFamARg1fMw4m7nPk%2F4axLy0sYi0B%2B6lYTnKaNyEoxYyYclxDqqpqgaU5tWH31mKxX9DT7vL%2Bf5p5VjW%2BOBZjBgODcLEhElfxBxJJjT8DnUrIrY7mcbfIp0QL1LOfaxkXM1JUysySg96KH%2FzoLvVaxlohILncBIjTaOX5aIQLiWQM2Ye37aZ86CPef4Px%2BK9sQQSkhMzAsbNeiiFi8VRUsxgbwUTQNuy6TrGa%2F0piOGJqCjMExCKC7hSoweG9IZlSchZ4EkIxmRRuGVDNKkeJaGnN8muxaOBaWzEEfgKFUM8utk4lR%2FryGVfzfY%2BvJQVObbPOGpfjjaUEjZCH5hSk1u7CnNUlkiKpf7rzyd4D4nKXAhdJz6NRxO9KwHB8Tqv%2FTEgVyFUyek0bP7ZqOSWHQu1XJLFQSqMZ8Oka0yWX2q0gXkZFq05KC%2FMveV6P5pAF12QP0cAoTDpqmtCcU8LO%2BAInIhK5MkqL6srul8rYUfIGwawuoYCkU6Lb1xOqO2YSiEmyM%2FUnbG2jeKdWl%2FUtQeFCbwres3AtGv0fJmWKhSt875ynDZcX1tMMO63MoGOqUBbZpnE%2F4BWt4Nmk6rMNEdOAYUkyrcgTjfp0vNAJ4trHyccYMxAA%2FaWx7%2BrrBGwj3c0O82Levz45iH1bMHmeSISgkispim4XqevWPx4wieracwpc%2FDCnA%2Bu4PssVvwALlX7JgTktl3kMbKGapuK97r84ydTcj%2BzWuH7Jv%2FEdavjvFHgTEVcrKhBzoMf2p2LtymEg6P4VOunuyx%2FnRvIekajQMeXmnU&X-Amz-Signature=d3ce83f7ca1d8ce4a66f9d5be09fc4c6f93ee93acffa39e3e6121fe2ca242fe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

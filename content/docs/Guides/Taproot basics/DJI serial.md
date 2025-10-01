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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CA3PLKS%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIGaYY%2Fo5qgN4G4mKVejuI7DzW3xxcUsk%2BDzTLHGpmgzBAiEAnvvJXg%2FxLlTt0OUftZkfd7W6VytYPlwFDUfWq3n0JvAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2wvOgEvCbH2lbuJircA4hURmzy47NB1JFUlU%2B4u4rQj%2FSk6zbrYelr7DYbbzo55Fj02248beMFDZh%2BT1w6XfLGHPjdWF6Oa7wC2riFs%2BrxzWyxKjJgnaQVMFubgUWYrKf4oxL6nzg2%2Bi20H%2FO2C3DelsbnQNXYt0UwFLP7F4UBGSTjv37OB0g9uw8XRW43hDfIBX1w3BLg%2BAXwOChoslN2LeQ4hVw2ZBLtE5ETnrSIKpZaLjuGh69jUFahM9BiSdLZLsGM8fy6JOJ7%2Fu%2BLqExd5BncBZT3jEd3%2F0j6WQKf6F45aXwcTciivak6qku0q%2BEd9Xws5FGsITvjttUbRypqpwk2PI1hco25lRZG7xjZjTDNRwax1DUELQRtsMGgbHpf5q27f5vzbZLi5K7Gp3PYSfiVfVGixVTIv8ID6gPmaXfql0zwaWDBT9Hkyn6Xv1KrrGblEzZSrckQJbeYgLkugpQXt1%2FCsiMptyB74L%2By9ducha1bBZkoS0Y4sqEtSdEP%2BW8%2BGkzEN6lUPlhICfK%2Fg1l71MqRstcP2%2B9cpiIEM%2BjhXhePeMJceJRdgNLKuoPXA%2FR3f%2B4crdlsESOdz8OBs1Jk45xS8e9QdTdDhYLDVz%2FHasBT5lUmYno7aH0gJqoxUkL%2FctdeqOj3MIGJ8sYGOqUBF3OiKqb%2Bvspg9Q%2BkE%2B5b1tpYrGf5ASUbKn5bjiZtkmjjOttDa1a0NNBO0QyrqenLFNLULUt74rX8a56ymit8i1KMIT3puioMPmv5nYJuNxVfnpduZSiu8%2BKFEtBvW1lIayU1vXzGQx5j%2BJHHOcyFS6mz5o0dPqWOx0nHpIabd%2F9eJdLHXngjiaEQPJy48XZ0PKzGRsUgEkl53wCNBp%2Bs%2B5KL8Jox&X-Amz-Signature=8d345e88f536d492424d437890dbbabf57ad66bfd9991b749f8c80ce46d6c14a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NT2CJVX%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC3S0jff9ddIyIcQ0WGKkE1zhO8aTCgAVmPsnMaKuBJPgIgdALhOUL16Zx8XZHC19%2BbZHJXRGsIUkx6ykieTtPVrAsqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdxKRWX%2BZjWAF2ZcSrcA%2Bl2tW3LFkWX5KIolSmmsR2YQhEXakpXk36dxV250oSfqXIJ60Ijuci57teA%2BQKKJzX%2BTZ%2BiAk9Wgc74zsMRHUhb9bG7Po45MAsRaIpqisn8R0Hh6uN%2BQObiQwvn7M%2BoCsxV59BetweJ0qejdP4JSJ0dn4sJQpBGA5hUN7V3rA%2FpziXUecWGdu%2B7iFG%2BYviZkDkYU64B466xysjX5CdxVoRhW4ud5kiYYPmOP5xT5w87ni7w%2FFaqtb%2BpzncNSUPGuyxULsz5biwKQJsuGbp70OPDhZdBz%2Bvmo68EsZt0dO49xLYs9tZfp9LuIXuZH7%2FkSQ0aeRNL0TF4cma8nmp02XLsX6pXehQMqGLrhp9m4g8zGiYFGw5xdyK5faPX%2BP3nQ%2FlG%2FtZbLrSYGmNbvzosGywbcl7nkmqxgJrP6KFbuL%2B%2FU5r3XiFt4THUceFTH84QtXr2WZQf9Ag87mj%2FA6E%2Br1noTFj7gEoCoKhx32o0TebagYP52sE9%2F4WTvfn4dnGmRyonasR8j%2BO1qG3J03tGnLd29RhvYVeLKqZwcDop4UwXFzljVJkqJqWAlCHwdm9MmB8ZlB9vifJiXqu0Z%2BJw8ioUh7BdMHXypDnPrPBabG%2Fjm3OzqcBnqmteAVpyMMKJ8sYGOqUBb5BoT7x%2FFQiICwpfaIl8YDACgPe90MGVLs%2FuQm05aG0IhCnHGJJlX94zntklXKq07N6vmbvGokq9RV6Gqm4IAIj%2Foy2wg%2BgIt74ygm%2FHJipMb9ImBnpniQ30sdHbVFD3cLEjvx9bgUTrF25FzREC%2FvvLi6uqDHZp4qe6iRP8yU4pKoor4ZvyASOQUrN76ctAUht1CdQ%2FXqimA6m3wdCdJ484uQ%2Bo&X-Amz-Signature=465e1e1a60ed0fd1429932f8f69e8513a95741af013a9342e9cebfba1b113841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RAQRQUU%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDUqmUzHZ9hlTmoKXWXXVNLULrPmDr4kYW83ZRLYoK%2BFAIhAOqPyzLjQ2G21QKlxCFqqkKQhZvcJNfOckYwskxbft0ZKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTGS3Ros3etrTmPfgq3APYYCiLyWEoOhd4hxUhI%2FcbDzAVfO4QA2%2F9d13Z70jd68nYlqU2fPNUNPFct%2FLMJ4y2J59AYX6tbuFRAfR8lNdm5LBQeBvSxIyRuHP9Ppk7aWSvPP%2FyELeuEXD5EbFzlaaM%2FJsbEJI7kpOZHLAXyITR84630fXaOSYULIrzTd31tMwK4gNA2Xx0%2BDJ0gpv9LKpzeeIHesEkSbLe7fX4FHIHVgsqdl%2Fo%2FLjj4n23%2F3jpyFCeG%2BfYXCKrgs52y7MbnVPIEs7ueGrGbQ8pFc7ltyta2EcFJwReqbAxiVxDKVcTkCGTbMej8WjWGc2oWshbr5kkSxsT6YwruSLNES%2BFHzYcwJdAiWKxfn2d9iMQ649O0r3dXQmOesiE6O3h7ifI7M2zj%2Bwt7Lzv%2BYfb1xi4%2BsJDLb8WXIubumtIvBbuyyUyxrvJ1cvvcQ9L4nqQNVjU9FD2w4Q0wxiJ9aiEEB4RYnf2CRXe3Dl6n3UVtpoHie5UOt%2BrWvJkmqqxgkP%2Bwi6GoCEVblmN7v6AdYts%2FuuBuGoFTIg%2FhZixvD%2FiX1YEaDJZ3H1LP%2BuXh0V%2BXk30Rb%2BuW4Omvw9XK8Q%2BlaxLf48htaGhiotHqyDixVob4ae40WGCaT3k3kjFllxR%2Boi8LjC3iPLGBjqkASZ8xCOWY3D4l789TESLrnv%2FAJiB954uTGq%2Ftvcu%2FrWjeI4wUKTmgdOssb4avZ7lwh0kR0n4Vq5K%2FNkiY9yO7IfbRORfeDDcITyMPjBvNvzkDj7QSPpfupvm5AsdD0Rc7V%2FD3AYP2RkqnXAJ0S1xIaqeNOS%2FlDAInbGX6lKzVWIjVHZCX16gr0FXJGwLFoaWJJlEtE5c35TJ4ei2cw4nl98bmogp&X-Amz-Signature=3af3ee6675a0b6a599d28f8e0f74681c05d9773b677dc594ff01779433808a76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYD2FE7P%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDvd46lyOaNzf6nIDFLO3S4e9HbgWAiNcTXJSt8YRWaMAiAL3Mk0uPLrTKL7v0jkwC86VrWt9qo0EzeINta6RmFmdyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeVkEJD4WK9dfa8kJKtwDwOVIrXNHYEvCM99jTTxxEjziehX4QFD520BfMiEwWh8w4YSJZRHjFOqzD5%2B6GnCdBcvExJSyctlRKZmVWTawgS1iWcfBBnVxG3dIojtV2lJOs3tVOovBMemoeb4lcrKlwt2GCge7JVC84bt5smhMs19815lLfzVVoGm4BPMbhpvJxRSV2ogeGbkuC8sB7n6ECpw%2Br0edVsrvn2gw2W8oZTniTq5pc5WDfYUB3tKdJyNRhkoQCA93QAmDB4Bpu3rYkEl28fmlx4k%2F%2BV4E%2Fl%2FyEY0gVgMYpFh1saYhNJ3nx2iV0M2kYMsUKqphxqFYcT0gwlDe%2Bgkvl7%2B2PY0FE0DO6PC4qCkpqzaDYnhyvCpvGszX2ipMBb63ZxSnY3TkAIY%2BL0P2Tx0Kif%2FLUYOFehuBbmOjp6LwNyzXONCnuT5k1ikKPlajXo6014djaUQQQdrUsbimFSUwPj0TQIQcgpKLj%2F0PeV0EV7nD79%2Bli4qrPh%2BCFxxk9RvtEhmITyX9IPsihPpSSfQI4THjHvNrjf6lqhv9pDlTiro5C%2FXlZvNaAuH6w5mIfhxbJqaVVVWhcT2OBG1ktCA1L6L70ynblcZqdK4VLVA40Ng3zGJb1XGD%2B9YGl5s9qN5cdBhy6%2FgwkYnyxgY6pgE%2FE7UH4szdabPKkN9NcaM5ovO3HrydWzwVvEOzHOsw3TEPdmx2YpifWnpJu92c1HUaNO%2FotMT8nLJQMBB3o2B7gpn82ps2lBNUP7r5QpY7k6mieUuQuOLjdEfYZveRBQEC7gznvz8meUQMtFjMFOxXQjb6oBXF1SAN57f9XkVhnwHgF4ULXq2MAXTCywz0moPDR86nq%2BGxrkBwVj9wgRTKjMDRmTf3&X-Amz-Signature=c11b8d94264144d42ef59047aace389d6d15815fe501b26e2436499373dca494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5IC6QLD%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCICPHms%2BEN0Y0AvMfMIILy55s%2B4vHmkD7FWR9TA40IL%2BzAiBSHVagH6YZvXtdAxmQtJV5C%2BxJT%2BlZs%2F3BEsP98y0QPiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdwUuNwQPxzi1jNFzKtwDLMXaaOfy4lJSJnipwdjTFMqAoDK%2BhG7UkEKhyepzEM3BTbJVuxRvEBWKlj0YQFGW0DO7XflJNTJBfh1yFVtAAVJ1sJ4ccTjfPsu8D5MbaO9u2ehCrlNisUqaWP5tnHkv6UoULyQKHBJUjQbyPT%2B7vcMbT8YIRbCmHdfBo3Vv4SlFoV8UGEZHbDpwF5olvYvQpwMb2xa4KEoP7DT7ESzKFp4tqRBzrSiUaLa55wjGbDX0u3pClxvGhTmpsurGGENU32%2BZKWUw8hYmt2C6xn9dlcOB08LxqnjO8gDWQwQznAqyC6vvParAMSXxCHcnc8UogRrv6BbyTEqky5EZRnaLs6doD4%2BH8Iq9Q4CYgveCsVw4hFFjF%2FxR%2FJw9cHlqu6zoXf6czJMQ%2BLelHm0ywOX0BUez6GYzlZL4wO7fb8PQRPKdKSc8J7o6V%2F3UnHWAdps2DA3j1UvRgEgb%2FlHP9O55YDVITL8U4oe6fH%2BUg63nv0KRWSJwa8W26NImlmGiGUo7QunCj%2FIQdJoAVZ7fACG8fu8qZqctTwq0TSGiodGbZaE1NyUFDHC8BmCTwRE%2FCG%2F3qIN78CUsknN6MSUGGKDPQenmDuWKrbXomDTd7sGphwT1Uxlz39lc8Z%2Ba6RQwoPL9xQY6pgHM43Wa5DjLIEoIwDU01shFpmApP0QW4csR4slPHPWgAa0IG%2FJ1M%2B0si17VyjRFNi0%2Bk2KA5OUfRG1j%2FNYEWVbqLkiDZVpmHx1wsJIjF3tOCn861OLhly6Tfuob70xg7ocn1TW5ZB%2F%2BR6Hj0Av3NIXifvv%2Bjti6%2BLZK2xL7jfjbRjosS4cdCnL1h6rQbiHO%2BWkkquGtYANXUwkVHEkJ0%2Baiqq9c703X&X-Amz-Signature=e16be20072d7241f2bad1bb97c81166659d8e7cc47fce2111e94716939f5cc7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJMCAK26%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCtSXjcjJxnugnN%2BxFDwsQ104ZcxjvNFxNHTyz1czh%2FSgIgfY8ZxUcCX6oF2cHnhRIzACNcVGcoe3awpyFSGU6bRpwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxsaiI1BaW6sAs9ZCrcA5RBHD2z1TJJLbu94RIqMcFSav1dWMTkfV%2Fhc%2BG%2F04zfMDzHf8sTBnFPQYKdc7HcYOUk2UoULaGdf3ljpp%2B4B2FnEeiQx6N32YQX9kALJmGCl1F%2BTllJwLaP%2Bb%2BeiZOuIq4BQW1rw4Vlh8%2FjDgHjXtRw%2BnzWgDsMVDx61FPYvbWOFIhuR55su0yyDWfKnwL4EwpuzYREdn1kTVGQUzLc8mIeiKGTd6FStiZZqA43ZybPx5NCmsIGFTeMRg1lpn1mgmmGkYd9kF0jCkWqrvistdm7aVlgBoVo1YprhKtmS51158Vr%2FPzrA245RKmjkhtk5K9UQeab38thbhTNbLiNm7cAIS%2BbRxFyepG6bHPxkVpLSIw2Lg%2F26N8fY10lCfPeIgWQjZ%2FTALrx808wbsTOUbSURjkaqwGfxLMJO518W%2FiINqCDmHfklAMkNF%2Bs4oI%2BJfRsX07LJRsUPc8MG8GwogKUMODIVIMKOHGJQ8mBEN4Lo6IFeeNPzBWZOsoJ0LDUxfwmeDgIiFYtIqUoxIF6J%2FW0NrfqWGy2%2BTVYmPDIHaqFu5WhAohz2t5zamqgz5B6haoztmGjOk9EmYZgmyf9ibPHS3mn6dxxRZEo%2ByAaXNRGkDe0tcbyW8QPC24CMPby%2FcUGOqUBx%2Frv30aILYBPIFH4TK5vx%2BCJX67qN8aGPNdawFqofIk%2FP8EtjiVVI5XloYNGIZs9GBN%2FOpQ6cTiokARBHSWp%2BDVC7vrbO%2BSWJDMUgdcXnRl%2Bl%2FiWAXkYdeZ468L9WFGdlbv%2F07B7uzPHKH53WiQgHpMUqOuhNZokI3W%2BMAXs8Eua8Zg%2FDat7c1ltaVq8HCTnCdNWZQq0jv4MRBZ4nAL1l9b%2BmhLc&X-Amz-Signature=38a04bc81e4d32e3cf76f0be66a0115b16879c3937d9a2b72adbf8f86010b2c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YND2CQWZ%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCSLkX9HQxaagq%2FNOR0a3aKa15SNCfmmna4pfdnpzd4MwIgO%2FoCGNw4iCUlWfFE2rOI37ifti%2F3jH%2F3SwinuJWZztkqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmtMB%2BwxZpvOaVVrCrcA1BU5NIf95HDB%2B3AoKW8%2FBlmpaVjWzwwAV4y6cM2V46ucm1hkqGjvYqYW6acJU5o0N5Z4eCK8yXM1LsaA%2F4CBRJAMQbsw3I1g3PjfKXUDpx34m0HrgWZUXuAps0UE6wQVUQlkOHPeA74JVv5omZv%2BXJXOhYdMKVFFcHLHJix5tUfgdgwUrmj6HHLub%2Fd0bCyPtPbRQ5BsV692Tb1AAwggFfGgAD9QQXiGnevU8g5JUxjxFBxiJyc6WMp6CZyyQ3TyZj5lzFx%2BVCljqB1auwTv5esppflggCwms058sft5gI%2FJrn1EJdzr4dufcDFv9pFX%2BpFJ0TrUk3T4VGm502BS2N8gUBxESm8CDLkcLToo8GWVVGTlXe%2FUXzuTmTI1NJZVcNPf82lnFOONhWIRSTeMGd6yB4FnwwTB%2B0cY7Ojk%2F9A5CMxXDTbw%2BjO0PeYUoxs3FWwMzcab%2FSerHAga7elASMiaV%2FSG5r6xIZGRUmvNQ99C0%2FcZxymoPWzhezkNzgmieIuhSVchjRt1cA9HXJI8wh0VT9eYvq030vdxpAS%2FBTJjeJVd5Uf8N0vPBGQL1qyoGVIBwsKN1SW3%2Bbm4zWqHgTMUmFDQhS5U0CR%2BXvlOoccXB3FBjKmtJnq9Y3YMNvy%2FcUGOqUBpctjyuEbL3dOu8a0TNbJPgspIA%2FkplypjYy4LBB0EOPuPbscMtZgwY%2FMcG2ma8ODU%2Fc5flKe2V9AB7CZ%2F92rjaIqvZ0qe99xFAph09bRklvkvqDJg8%2BR8wWtl%2Fev5u3VNIzB3XS90E5poPrvgqGnWOIDus7sIEp2pU2jXrnT3V9grdX7TAx%2F9%2Bqsez4KntUdfpo9e8xybpNbmYDCnu7BklizqJbn&X-Amz-Signature=995846e5e1c755840630f69fe3ed41cf3692224c5d29766234e4d2e0c5500dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM6KDPXJ%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIApAfZ1dqyeLUPAl%2FQRTT46CmhNqgxHxDzQJuK5oO7OlAiAzDx0KWy69U6h02UFIUSYmSgWRXjMb0S3QsheZUoURLiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgf6fNA67%2Fslmmj9KKtwDRB04KwUwaQxP2me5MRBaqOi2mFDcHHXLsYnmQiSjjfTnMeL0vvj31FS3iaQTz0M%2BQadh2cn5buGsS52kQ0CQlYG%2Ba31ep3MeKKYwMd3%2FMjlzkDTszmVGisAJO1c2nGvIxY87Y3wrdraMC4TQ6PdWjdSoHkBlPnA%2BdquNzn3KNwLApjvIanhBAZ2GS8usmHJtHGziLNTuOSJLiO2TlWx4E7BJH7J736hXOzoatpZQRxBHEFMa9ufBs1llbOCHkz70m8b%2BlsKsrOfMS4eLaIAAuEIFaax9Kj8BUvEsJvUQzMTWk07hs0zSuZVNBYnKAsk7BUtTp7DoNpH%2FqnZtkAq3nFUcuhlIFI6jcBIcrHs2RhGpfrSLscbZpy4WXP2ZGSrH7uZisctacKcvqWGiVlGkElafjG%2FfFfCJaZGVWkgyFJbmgYoY8H00F5mhINb6JNe6O%2BO3jGe%2Bb5hx2wiXgQIjF8Z%2FN%2Fzh%2BwSxEFDLgaqhwfRqcApANTP07Z%2BClXNFwStFNSv9Cq4SFmCZbrKqUrAlya9ru%2FWl4wD17hUnp5Sv11JQjuKXs4e3JgyIQae7MvUuzKslFhy%2B157STnSRM1rCC8tktBZLeNg5kg%2FZncWtgOYGkZFQe%2FgJw8DhbSwwuvL9xQY6pgGFeIw0sd%2FTNCVMg%2FKewmOhAAt79ccjf63G5D5ejQwGmOlTEiU3Ek%2FPpR%2FZpeUN4CeIfPYm5KTuXYHH5FplwVldGorwT8fOhGydeRmkbFl3FOCxEgNE1%2BT%2FllU0lL1daAZh03gCrK5M51pvGav0gziaw%2FTDqOjUJuBhYb1AHdVPD2WPOj%2B96sJHlYj3Bp9sTrDn%2F6Zop2aTKx1UbySkWBgONRVjKUFD&X-Amz-Signature=4d83f2f2137505596d966c217b3644eb07d0424e083ec4ea6dcfa0dd145a5eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

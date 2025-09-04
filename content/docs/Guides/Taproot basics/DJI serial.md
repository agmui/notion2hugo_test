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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUSYKYQZ%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeIGkSgTG8y3x%2Fpkf8BRSMUNlfV6t64%2FKdc5zBC2fMjAiEAv0lWc1Yy5mgFs4Chu7ZdjY5IXMOWgHPWmHFa%2F4qhexwq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDO4iU6EPAg0ylR1tpCrcA%2FJbpMPZgyspJujLVMxmyoXzx0leShBSBSwLvku%2F8J8XoUG9jE%2BQqVxhPQvr0uJ7Awsfx6pr1BpbfUT4nKlfeyJwqgM4fFyJbL7%2FgwlcAcsLjiKGvzeYybMH%2BMbcuGwY%2BICxUtz0DkFYBhAYQPKgxatZ%2FGk8I%2BhPD5GB3roWfUY5wBl8ACAUc2p3Wpe%2F8E5ouHKZ7h1a%2B4VTqbyBo%2ButV2VIktkDD8l1mqMto9n5wZY8lWknYTe5mKFTwDqHTZIf75I6%2FJSW5MHNzh4N0SeEfsL4wmdA68WKDqww9nzMiy9UJaGFYLjLw9n07EhhcIqEmIFTNY6F95zH2ZKDkkHK%2F8nW2Vi%2FI%2BWYhg0ZHqCThsC42MXoVcNTliBX8xp%2F7ZrGfNJIrPVlfBUl4y45e%2Br%2FwuBTJrINlnL34mJt%2B%2B7HbVeFEPjGTzTYBJ6V54G1ujIfSZCAge%2FKQ4eM7Qkl3RpJtSnEsImVmUznzMovIPj3GqvIqQxC0JMYK99AvM4i%2BpLwFMvURGOSn6t62%2BZn%2FhaKfJhViA0lKJEynSV06tymdDKV8KVJHaIzYUGP5yct03s7796%2BWwUYEk651mXGXBn3%2BbCgVlVjzSTlOeImz06%2BBEreQIXvh8fuEojZSAxYMKi248UGOqUBZdyvOAJ0SgB7Dqa7vFGrNMGE5usQkmNC2xBsXEEy67ZmHAeZ83mSwEWnciGMT%2BqLynyS1Tl2jx0t7A4PgAAE1XAqoE%2Fk9VhX5QAwuHRDbA79mJfMZW2VhGOkHEpXFTRp%2FW1Cruk%2FMqBtH9698aN240rygj%2FWmo%2Faj%2FAr28U4jlvVj8mtpOK19Iiy%2BmjiddKS1NTJeMWno9pp8fmlRs8oYh46SjjA&X-Amz-Signature=168126f9e08b057dda2aab2ab8d107c48d9846d7c638eeddc7de5e2c3c94a291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CAWGMDS%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6bTmyQEuriY%2BUz0vIqQoLvRt6yGnfonhQMHR%2FNUQHRgIgR1oq7oCbkxve1lf9UsFqA5J17XIHOwvK40133QkEe44q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDNk%2FFuf%2FS3EaTTKiECrcA%2BEZVaZPxIAriU9gRZdUg47bj1Qr6Lvm6XMPOnUiKl9uGuVG3k4cvHnWqRSXn39IBJS0ZT7daZtzt4rIg69UPYG8K5JzIViD302%2Bv%2Bf62kn173VRuFSWUG54jFt9fH5okmdJHqyc0jKScMKt78Lk%2FrP6uY9c1ImNWr0RmlGvWckuagBpj4BYsS4OVxs3EdCJ0mZGJV8%2BOnJc3c2lUbqthlTYy5iawbHHPRcIDIHp2B0zmCmEfJtB9P8yUy552WZkETWSxkbG3pV%2BHIZmDWP3xOCiyh4tiamCcIFmQ11zgqbt437a%2FRV0QiR722KvOy7XYnmXQvsepSpXa634Bc4S%2FERJvX9Ap1aOB3R%2FrkNpH373ZVCYwpZgzBP5izAmbsa6n%2Bgdz6dUBhzveDUdwOrp%2BLPeo856MJ98XkUybgksJTY2qkhz1IvloDUo2FrA71tVs%2FCKyuHdCB2Ag4ggrrCYuMY82Jo15FQtIVG%2ByDz70VIk7DfRgJ24yZW72NCAwLx8TDEnnlMSaumHVff1O3okmZWH%2FnrQvulAQTIEXYKpc3xTakl5Iv00brbWZEQv2CvAEi6%2F0zH5DCmtNHPo1XsdozVHz7mA2Je6gK3BpV%2BAMNmbapCXTi3o9XaS6UhnMLa248UGOqUB%2BoquA0mP9pctczE0EAjo6jHJ0%2Bmz9kKTEQMCrJsMLFqcoBFpsWSxQjsJGgNZC7qBIl6HYwwdlrip91TJ8g9bVaip2zyW1dZ1QXq2ylGRiutjdH%2B126sQcBT0sKTFiAyaGrLWD9LTjc4kp5lzo2nsT70JqMX5xz8r5YMOC%2FV%2F78YFYznpQCzYY48PGVaVFrBCkcJu94SuByzBr4bsb8J2VM4kXK1r&X-Amz-Signature=b4dfb5b2e7446dbae4af5ec7816faaddf3ca2cd1922c3711cb2788ffd78eda27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R42X3MW7%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv3mOhpFZOFxmI3I4%2BFC3rS6LCGbrccU91xwnarff0qQIhAJwoErmEebs1ipLgEsR2d0aygGNktEouCQn%2BfQLDXWiqKv8DCFEQABoMNjM3NDIzMTgzODA1IgzKea69buzWU5V6Rn0q3AOEY7qcet9knrr%2BjPPNLFbwDKqzNm0kX4KNX4FzRAx%2FIrzSxoGScrQPJxfkoBhmJW7qYd1cZjlW7Q%2Fe3zpK1ZJ%2B2I1OLF9CmR0vEz%2FnyohT8g8SpawnD%2F1zAvl2L6M6BSemaEo20BFrgxwB%2FxNksE%2FzGc7bOtSeC8vRji7zVgjVkqu0ISgbxfXWYRsgZNhigT85YzVfm%2Bx%2B7eP8jY3BMIQH36C0UzxbcNlzUtd66gh98pnfnQoHuZG6Mgp1gVmsae5PrmeuXcLOLRBugiVWk87AmtbAuZ8fmQ0gDwlCx%2F8Cnu8UYBx7bCSAxEpZUk3%2BRTxvWJFFr7zeyBwIfDvcm%2BlSQrKD%2BOoYC7UNiP7TcnlPio%2F1aeAuRQrWfJL0deqClGbdaKZPEUE3bnBKn1DCUsLB0%2BT9Fs4nBn85GoucCeNROL4zVHGHQ25Tc%2BudKcsoktf%2FwO6lbiWYhmyNR4Ha42xRDKOzX9nsktjMj7tG53Fr6pqwRfoNk9wJaZRrXv8tkUsft0lz9egRg%2BkNQcPClOeXGcRA0QcLFcGngDy9WOk%2B3u%2F%2FaecWupa4qxx5AV1%2BMzgrYmoYzxnUC45%2FSF1XL%2F2wTGz21MU7iAyzGQgOJKJNSUjqDwfewVxk2Flx9DDatuPFBjqkAaopozuwYIWQ4x3s1CTk%2FUuw3QpRQnIwEFV3V6QpInyUOxtnJ1doidM%2FZdrnbUthyeVFY2yzCTiwpiW%2BNzFCMdNe1cY13APSyZPYcF4RBJtpoqsCJ35GOJy2bwuVhsILuaVi9i8t%2BRt0i8rAab1n3P1cNMRwV97VWipcWeOWmWa3%2BbrM4Hx5fMPpn0m2BQpGcVDc1GqnNJ0O6WTmy9bNwJITFHGU&X-Amz-Signature=47b76d714caa5c09fa9a68db8e0baf1b7c4ecc153f604e83d0112ccd7b6681f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PP7EVEG%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyeY263kWJSQ2O3MFDEMzfkwqvUyfqv45Ls9NP5bLmFAIhANsFEea%2BwETlyvqXIi4o%2FD3PLZarcPzbAfx1ugybTRSDKv8DCFEQABoMNjM3NDIzMTgzODA1IgyTD8g%2FV1UozF6I3cIq3APbufoj6a5u%2FT2ckD7hdrwZAXmCGM3%2FtQx1zjkbfEx8XZ7XcXFyQHwrJZZu%2B6XTYxhu3k63LyDaH1OPvkNitlqbIyhtKuhuuYdAFzCy5Q6mpWUOxjXOkIwAFtydFfdiN7uyC0Xcs2%2BT%2BZbwvNyhkPq4Dz5lEORzLyEU%2FrViUX5ke38sXQVer7p5Vgy39S%2FeSzAtsrHrLdKtS6WhMsteIpObVtXx2dKwO9VFsDIFw8HM7MylZvuvCAzXV6hxFuqzAIe9GeT10sKSM2yZQ%2B%2Bs3w8NAZcx6c9NR%2BcryNaWMPTL2bHwx3kqobC2jIaZNUDpXU1vzF3qwAWKUxbJyq35dKIT9CXZJRums%2B8tAfo3O7TcAA4gEJFRz%2FQrZzK6i94jww%2FdYJJXlaXRm3IYsS900XvWuIuMrKArohyD3mVD9KMmK2NHG8GtqfVb%2FLGrmEqiL0K4lHB1h3h20Rr%2Bdx3gJjF9TVPTkL6FMbDQ6SgZ6RjJTrmrSFYkhHVJcVvBh28pciD0eTK5QIFHx9ZWKYnNAA2pLoK6Q0eIOq26rtdOhnt23su9F3WGmHLmcd9zOifCwOyqCRUAzVgY%2FO2hamdqzL6Xi%2BoKje3VX%2FXEVsTfVa8EcZA8Rja4H%2FTypiBz%2FjCftuPFBjqkAVocz%2FHYHWjf0UzHrOC%2BPO09zWid5zYQbKc%2FrWFTjM6xHTyLqoUF%2FIQ2iolEcYv0ux%2Fqky4gj2x44AmqEhy2frx3RB5f1hYz8Ip3QwyCNn0BbTyvvKtaFqHqXENKzgQbQLmX%2FFjtiIQeQs1DgEkuMy%2F4mcEixV2w60ORHYxYescpjoL9zkfzG4rANUDTwVCtvljpx%2FtL%2Bun3DlN8wF7kZhlE8H9c&X-Amz-Signature=44aadd58e1402dd3c0f286fc7c86d7822e83407c88b49d04d4d33cc1387ad633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

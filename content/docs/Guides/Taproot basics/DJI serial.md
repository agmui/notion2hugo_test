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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIJHZGHS%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBa8r89Fk30f5wM6OaGB5OhA9%2FBICFQFi1CNYFNJX8OXAiEA%2F%2B9zJO%2BZB09HMU8lRrDZcucmQiEZJt3Fpg95asnvJGMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNv1Pxwr1LyvH7GBPyrcA4zSxX4TSzUtJZ4qALyHZrR4HiNOCi9ibpiiR7xfjKzpsOBMUvKclufNSRYf35PnRhstadztxF5XqTWwgXtInl6Enpaciw1VAP7jyzPGCBzqlaPjJsOhX2jWjqX227c5tmg01xXGTB%2FMqcwKMsSsmbK43tHcZ0hXl3Wwdcquu5j%2FTVU1Kw%2BFwcaVHmfvSuNBHOv%2BgmBM1DPuvhrSLcjYm5kprU4DK0XHnMzKUphNLLG2rokK6ehyUgcPwpvid5M4fhh%2F5AZ%2BLmA7p9W1mGv6ucmvJSMKZdFhwHv6isJnFE14Du6GXdjQOhcbdbWZzRMYqPgojQIBtEtCFj9JzAnnS3Pd64I5MpUlSqLNJG29fG1AU9uWbNf%2B%2FYaK6ijCmIj0IbYRiKoODrRUuVOWnRKHtjOog%2BtAErASfVD%2BBOVMmQMs7jP5tdN5cShdzvNjwjK%2Bce335j20ZPZOj3%2B5Fg8jbEV5MeqPAkWJ1Z2VAkag7WmNVYm24WQd7Brc8kpIFkTmvBzS9ZNZzE7R4jJgzVdhlSwNf1eyAdrK8rXiCWcoD9I%2FknFEEHuGy6HY4lfRrHSzsSPdyDD5HBVZZHLQ0XqHFUV1CjXK14elcGbg%2FCTKDNc64sELRYplH%2FWygqcgMJvUs9QGOqUBTLqLSjOjm1%2Bjc5IU2QWVatD2o%2FpvEVYQ%2FVJ9hqadxJYAihSyBSVj7H0NYmGQyJ1ptIPRWzl%2FyEhO2zpgLxHfu%2FpfyRWzaTb3XtFwqRyKuWRkcjdw3QoFJ2dtxWSrXaOpInxewouD%2FadnZWuKz2Hh8wzMLHZXCd8xQ1O9khxCxXgr3cSwgoIqTcz4T%2F5TLnCjUgCIRXTcgWm6vG8LuCp40YP3X3eW&X-Amz-Signature=b3802b7bbaa6ac02a2713fa9c864b13780fd65dd270a197e7b2ca73b49d7ebf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTEGR3QI%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIC1Yh1QFHFpLPHTM7mf0NpxGpzgsuuYn479UGZllke3aAiBh%2B4Ba0rquoDs4eNdGVJ1iRVxkIhyB440CywY%2FTrFJ0CqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkUq01SGRICkSIOJJKtwDzBzLBOjCJCk6U611HJTkYX%2F8lDRI0MYgCFA6ARX9tWaEH2gp7xGV9GtoNKhTdh9E0wHSDMXen1CgvN8Xecp8mOzUQppAzpSrK6BgZe858wh5SN5JxDkwwgordiFB%2F8Q6ThWr6ySmZYMwV5UpSVwIvUYre7rWWH4hRw%2BkIsJdF2OA7%2FkCFF6e4MmJ7ECwGalGsd6%2FTy8WVx9kV%2FTrgoxiCVWmrzdo3UyM2egfPNoQayZClKPpiUzbX833C1HGGjeEpofyqJQTVuO0ceA7hD3E4MI2GrcXvdOMvC2FnM03JeUbnUMNdwon8aPT88KdWwDyEjwjYyWD%2Bo62JOW8HLEAz8wVkpadZsi3AoYxmQ4hiie8pdif4YQ%2B14OrvUbVUSfdCMp1zw2Bc%2BzWeSRuItRAC%2BnNJQCFTgNDGSCEYn8XnYZISuo9e8az3iErTmnU5DSmihlq3D69TyIynYiL8iTRnK2e7k%2FZt06oIQcBw46tLRZsEitZhbhLT9uJYw4yMWUXKzApoSwIK9P8FNS7aV1qgCH17cbEmkK9qMos1CYfXIDTrTapUwUCLfqjEDyFpDxZQJUBQR%2BzRBzcJVEkmLP8x9twU1eYm2gUy3VonNSb7ke9IEk7zbLBJKAn0c0wotGz1AY6pgG55qk7M5qjt9x75ve7pRDzKFDpMeCxMzORFGr7TuecYVm8DOp5G%2BHtipUmCT%2BC4SSMmqvG1TWg2okacFdFXpbS0QwtlGJ%2BXwycxSGU1Tf49eHLp%2FQmZqlvDdmIDt4K8kejOLv%2Bf%2FIPytT8v1kB3VMHwFRad3Gb2F070iIBZ7n%2FetVKuMeQd4Q4oSbWJm7%2BTbc19Xi3bOXAw7U6aoLJbc3GTu1b8JYu&X-Amz-Signature=a9dccf6aabd9cf27a26b29e912a5c0a5483f54a17626a486feea18461d2e21cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44LJA5F%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIGWE0TThIsCxxnnQ324%2BN8J5kRslt7z2UScxJmsWQiDAAiEApAHjdyJ79phm22v704u%2BbfcGXtxhncjLrSZl5keBrXsqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDeP7SP7vgxl1c23yrcA7gpyp2Kej2eaYy3uyD5AhhqKpfSTq1J5Xv%2BKiLjsiomsAV5IXqWQ3pV%2FgE1mvzzUTsvw26pti8ZELhYKxl647ueD2H27W0hWTg67hGNBIK0yU56Qc5dUwjLXTEuVVvPwl3immapPMXj5%2FFK%2Btj7s84gST7RZoVx%2BXGkYT4uu1FEytKd77y5Ws1kp%2BiPNyGdz7OoyuROu59yn9hVAw%2FReC11gzFzb1l%2Fc0r6b7NQhLMiiZGvWi9gDT6Y2fuRhP4iNJh2mj6%2FJiwdQd8mPamFjcAygJRjJ03pxZ%2BksQXJsP566DlwwZta6wJAjQxZGHenNo7RWCmefDLpciMkRPM%2Fv2p11XDx7CAabkLi9XSFJNxN7IyPbQTjFU0ayWvuIxnpFFhFGJj1mCgt5httO602YWlCrPD%2B5RtXVH3DnpCR%2BOjqF1EmdL0uL0dG6rf1v4HoRQiYrwBRrld%2FnbaLtTzHx5yUrpgG4qoWxCcEmSj9CKweCCpCOAMho8HoEQFQLCPjXvA5DI%2BVMghL1a5Geif%2FYIQp0eTsvhfsEW5DuJxKvjXziy7mu3wUMBlHGonkSOGvnd2CItofinp8f24o6lCzhRK2Xswh%2FYclY5p%2B7Vtapb1zxA8OZ%2BmilRxw3ik5MJ%2FUs9QGOqUBTLv5JdfeBr0sU2akL7Yf2ihg2Lgqp6jGknIWKC%2B89DBPYt%2F%2Bn6qOa0AP91I6HhZigENqUcvYMIXNM5Jfz20V1a9L5DMM9EKx4c5sdzvXwEA3o8%2B47xHyCHpxWkOJQU%2FZCkPELHK81z1uzDEfu7a%2FTQ7MQpG8B3Pywpe6EWU2ov1S1HNUgLkSRNSX8MG0Jy8%2Be7k882urmec1nPYQKJkyqgSLR9Bj&X-Amz-Signature=3f7f6cbeebf6d643abc9f30c6badd0c8591d1028ee71bcff28a13fbabbb40fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UB4LK5S%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCICZUjf5esUm1V4JNfhQAqLa%2Fcc7KRJbqtV0NqawyETyzAiAEEtFVs5dvTM%2F9NKtda%2F83l6P03ZMmoi%2FsnjZjf8PBpiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvWP0fQ%2FETNoGweEaKtwDgwB%2Fr86QUNXP1H%2BW%2FWOIuB%2FhyKyDG1FW3DbSidb5E206BZb41zGBTP281AYlx8Tktvbq8GMqS88ELb%2FuJzW8KXltWg%2BEUyf7%2BjwAVDykvY0thprdMNwOo%2F7i6vC8hO1rQs43MgW%2BYcAT6tg3BU3wTXwMgCeNyjky6hAVVDaEnwkmjpjXqArEk0hWJgGORmuDsrHxp9eMx%2FnZ6g5Hl0IA4H0wOVrJ1f%2FlmTdXbkLzKreKI6vQtdHIKQ51bSRoCq%2FPSPc9ris3GQM4s6EvgTNaxnXV%2FefylN2qISZQOB6mzephzQFtDc3eTRqLk3FtN6NBWUdtAFIu0iz9UH%2F2Kd9CJIndBh7hnRs6WZsjRKgd1OzoaLpL3MqSfuNFkI1592lmd%2FRDQTXiADs7sYCCFx1cy4V%2FRMuiRdWq4nNUNAElzhJD3uGBkPEdrKiBjGtwSVzJJBu6RADol5FkL5QqhBakvF%2FqjuwXH2YOEJSeG5DUhYadEMbLpk1bDJmaq%2FuX63bhxT%2F4uuoYRqgxcDEiXlv98auOb834AlXSMnLRVvdS3y9Wa2DneLB6xeUPFGBkMdIdmakaxJtZexnAxpWppN3ELUEhxdSBtQpEEgShAYwgleANjfiQSuwnuZ3F4DYwvtSz1AY6pgFwb%2Bi8KI6AMSmEB7JFFneKqJcI45yIK7hQhAaLY6c76PC9XfCyIOyJvorRh7T0Eqz9M6jV7gK1Mlxdys7blTOgd6eEvmLSyCOZG6roRMDb%2FJPCnv8McXr62o36nuL0Aq0CTTF8ImM2w0LI8Pk%2F496wKjhUqteJuvV%2Bdmrvj6IsK9MdvXlBKYSLBfTX0jIF2gyTIrxkx9fEX5A%2Btmc8LjKVtTTk22x5&X-Amz-Signature=f3a42265eb1582befc990924875755dfdaeb6f5fd515648ef1630ef7ba4e32cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

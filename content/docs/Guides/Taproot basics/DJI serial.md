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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TZGJX33%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDdhtkVvoBZdhO%2FBb4M0GKrA782uQoHblZjixgQusP4mwIgZdYVQF4IYyUYHT6BGa88A9HCUgZmhq4nwOr6v1B7ovgqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwZKza3IVZN9BCfwircA7Tx7cY7u02imXBylxe6g0AKFAUisN09BUlYZJtci2waA9pXtH7wux0mgv9E3wFpbokW1BWj%2BXnexKloH0XI4I4Rqt8BDevyl79t1uPCLVm4Dx4nXwDOrr65wI%2FMX8MzeiyUiOh0xfa2uqOoC0qYd9UZkd0jN%2BJgmSeG2p2bvP6Z0A2%2FP82AQP2V8Iqx1NUqZ%2FDEa32BhMcMk3XWln8h1GIP3fS%2FH8Cordw5JSmjRJlfoVdDNCiPxrnQUu86PHUsL%2F%2Bk86IpOg5k7dSg%2FmoJQXWwriMnM7kLjOZHyZxo6h4UTLGW4BaR0cWNz9ke6cYsV9F0XAkXNXSB%2Bi4zGRIeHgUiFA9Ko2na6AeyjL6MNTua1CXTayozk0KDMgE2fBYCotPme%2BE7OYG50joySUhJpAOdTrcGRjBETeFaUdKivw%2Bcv0s4nKbIJ3HeKE7OnCLk4Vn1SXTkJE6P39ToyqH3vXuuRRJ3kBFT9W1kApYQ%2FE6vIPaIaOVjdN8JaX%2B7DiW4I79nA8l0z6asT%2Fs%2Fx8DWCD2lkxy%2BBzrUR095EcH%2BsF9xK9HsWlgSuahysdfNgHEa1MUiJGcHKyIu2WteRKqPu4U65yXr72PNB3nYCUXG3deg2bRRRK7D6p6GvF9GMO7wp8YGOqUB862FSLb9LHWbj4VW%2B%2B63%2FijOv2Phy8ZaCMyoTeEH%2F1kU6ahBT1pywfrxv9bMjR0K%2BUSxj2QO4zRdM8npOOTv4Wdq4dzkRtaIu8W1uy4JIuy4pj28WrPSCpPC3x6G6gVAakrkchgVQumZpp7EybGr2BZI90LUPywxDUAFZSKoNkA8D9lovwN3nXy117zxg8l%2BpX8RYDX0CVrlKLq0WCGeP7LYlI4u&X-Amz-Signature=405e96b21cd7223b286e0447d058c0ccd2e81f4fa0f857b50c948de676e68e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WBJLLU6%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIAECErjNVx8nBUZ4aNpe%2B24wbbzRLOvcFGCYYsQRALgXAiEAmrpCgCHSL34wccuKZYSrZkZT3WKU9XJLDgx6B5REeQQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdcxax7qOk1cYLVvyrcAyWrJX3XFT1Sc8esyvoW1az3FkvITP4j0iv0knFfliR%2FtUbCz98U87kSrfdmXx21LJmYrWfwzq9NgISikg7BfpdBMt2PbBDfj00R5DfPPYNzBaMAiD2Njoa4cViyLYUF1aA3Lw5IEq0TGTMrq4%2Fpko2ck7iAQSr8z%2BYKCKk3XesMIGmLvBascHt5jUea5FFDjEdwuTl7Tb0%2Fv0LdNNCWpx4z%2FWsgW0KD9VHRTrdCEZcbai7%2F4t%2BoPtPcmowWdNydtENUr36%2FQAse5RAaoFq3avEkAoZL%2FcNFRft893349OTTLGsEE9%2FODhyrhY%2FTKOqflvKAC9SgaZWX%2FWNpsOlqxzEdbdvFvupTQUrz%2FuVb%2B2BNSiN6q3S6XJSx5J%2BM7J4RUR8H77wTKF8IE9QMF4iOtKmK5YaMu3%2FDNJgQ4AYYZA9N7Mg8MLTss0nSX0fu5nMPWwH37uc%2BALoYw95B1qW3%2BaOKZm3xBTHdV8OUf0iTuM4OE6C53KqrmC2RFXfbA2EUrKMIM6FcKaD1bI7BMwJE%2FD8wlrMjeSUNlErX%2BC29OxGX%2B4B22qxd3QZv3d%2FlvF6vhAyWNNUXGWOfccJYvokHCsrgs8%2BfztHZ67uv8MHD5IQrLoLU1CKyL4YHEjCYMN7vp8YGOqUB3xg%2FqHcT4VnJ7atHyDG6k6uboZK3%2FVCZ7ldHHJmeHwT5U9cIYIVfHe3hfjCkPFxpOvH4Yn%2B2cGQxuON8POfbcZwMcgnb9cj%2F%2FVnF2mYg1wkhLx5tt1FrIFtDWb7wsb52w4LxBVXkhN5SBv%2F91iZzKoGZEy4L%2Fo9Gr8cbOVjSrKBfZIhuIgvFYtSXmzzi0UWWbL6bnA4KvzyF15FCjNlaqrsUDX4g&X-Amz-Signature=fd4bce9f45203f81fab447557c18d4eade289e6660d6f954d4ca68abcf78d706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHEZV6CG%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIDYns%2FN6Uzwj0VMMR30D0ZR71LlQn1yL9gCWKGTeIVWxAiBLmmsMumMZdMfaBEKX5%2B9xENaZyliM9y1oEU18uR6ycSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTAS%2FQU5STiVBS8jEKtwD2daedId7V%2BPECehDcPDAO0aeXsAcXSmp%2B2bF80iPNLJYve56HdkcRP0RatQi2RaBw8kRv0ei%2Fea6uj2INlP1LkRLbMVssz5RVs0kjMAA0MAptruY7r690sB53Bc%2BYVhrdn66QH4x%2FvpN7GpKIlGiEDgLQ%2FNX1ACB8SfgrvZzAWhGIDpyaOLRBRzxUd98QwjoUKMXQt27Tkb%2FTc2oHNgtu%2BpkfPNjoimVxYru73BiHQncz%2BWoXwLNco29yEgi7hs%2FLnOLXCryV11b%2BW%2FGd1%2BDjc0hwleg9qq6O89MhVQgHOnVx4vIfQXIdkP64XeoGorMT1niPmRWkPhfhEvfD8o3Ok4gD5fqg5WIhfFMWCwlgBgvUU9oOTVf%2BYZvSE%2F0v5zFwIaixsJwGk%2B%2FznbDt6ERMJILG6ISlUEn56fCxE7SX736owRgOdk4F8xR3kZqGvjB7afToK5tuzv4GUdgj4JI%2FUFmww6UHuXqYHdxXWWw5LXxgSusZk4HCUH5euqj74Wv9m0jH6MmzUaxWpdz4xxG5tsDbxaWs4ODLToFlADPZI%2BNC1svzYu6D400CGUo7IjNmtjnsvUaTghjpJzQRehfpnbLUT7HfullSUrCK0hQ%2FkKcfVOlHSw72Pte8Fwwo%2FCnxgY6pgHIRoVpqUKi0l6ONyo7L6adyQvRL5aErYcFyBpgvdVHNcr85FqIEzsF00XIv51js%2F6zo78ANfwyUbmglN7BSVFKcFgGUVnnEgPRJuHTqyQsYiJmsB2m3kOJvhTPBPXZV8%2BmgSzj0C7R7ghc67w6%2FoLpmNiMT77SpnCNdgJbYb6xmfTmLleZDSrFXKJK4%2BQkxL1G6sz%2BwrOmfRxlGiZCBC9Q8ixuor1D&X-Amz-Signature=096d9fd81bba5847e198966f4aca606d3bfca7422c1ff9155b197d5107588458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCVZ4NNH%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQD%2BRA1wPRATsXLtFijBGejQHq76PFQsjS6HEtRD%2FU5qzQIhAKXnmZFriJNCwi3TwqvlnIoXg2IQ5RVnq%2BkJuDiuSWTLKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMtXWyY7qU8NgS0TEq3APgdXdtiPIhRHmU9zQ5lyoLMybX7u60yQ1p5LMu3lG6bMkd9hFaNJePVL5pFceYosothmobOw6BJQ6E12t7jESSyxYBsFOUfWY%2F2EzpME4HF0mGB6vL91iQ52w1MAmCoj8XtYEH8ELTeJ7crq8IxAF2SJJIkpDIOtXy40PkhdEBfJiMhhxjgt6bScy%2FfWULKiTQyXibTq661eZ2Id%2Bh4Aukz%2Bqc7g3lcLXZF7HSWXcU0cZLHHCcU1WP4TqDn4%2B3e%2FyZk5DJIpzVPNvu6ksaMRWuBsCef0LJQqAmoUFxvGZMUyFrnK9HNdMGYa2fUGiXjf8f9thnMOOK4P9gdJiQ7mtl5Bnf24l1puGDHlAcvd6CnEUy3VYDoBtgIYohUbZB2vC1YZadNuRiRKrO407%2BxczkM%2BXM1wQXpLHifdPjlr3VfEBTaabayq1rQVfZmhi3oRS4R337ZFPtwCqRzNXX5a0k9jX%2BtRN2CYkbF4rgO%2B1ERuj3Tbe5bOlfEkPXRIwzrpqfnfQP7MkqiCY5bGjo%2Bl5dpOEfyFZocwxfmCT4wmb8rUQmOjS0FUWC8IYRoVDelb52HpDJQ1xjLBl5c5vNp7%2BUXQN3cNevtXraxdRziaWhvexBlT1eUmjDk9aSODDp76fGBjqkARoy3gZBxdg%2Fgh8SRHoh5i4Dh33N90GLzqU5JL4UeQUlHuvVZhFw8X8gNd4Wilc15j1xwWcZcIPRjG1FEvSLzzgCTfIqrd9zvflI9kZeurq7yDYJs93NgkjhwnqSeS%2FZHktLE15rrK0To7s%2BZYLQ8tIwLj91aeU5xdHIC3zRVsbY2Z0IKt7%2B7RUwcxfVrYxRcNXJGaqicvT8X32mwLGkooq44gNK&X-Amz-Signature=2ab1cde9f2efc9f25241bf59895479d48b1367b608390bc4d31d7231ad5b1130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

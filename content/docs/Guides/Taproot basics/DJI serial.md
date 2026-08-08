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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHYIRSDN%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBz0NZGRHdz6pbaewDCabmwfbInAyR93s2oqreHRfAzAIhAP0YOrs00Sj3FfsBMyLaRsFfx%2Be4KVFha%2FZuna7WY50JKv8DCGEQABoMNjM3NDIzMTgzODA1IgwuAiIa%2B%2Ff4J5HkIYcq3AM3IJlzWWihQfYXoswd%2BGn2DXB3dDLNISprLdix4FYt3mlFQGkngV5qiL97B8v%2BuN845ndfvUIi45AixNXP%2Fk8RAJYgpJwwIU9B8gWiQin0bzoLtfcB8PbjpwgTDcbCs9JIGIqsxt2qFXtmgtcEBNAF04AjJq4vHjAxER5WOZYUN%2FJB0F630u1woXHbIdXbl0XQRNJZu3JzeP2CPQCaCal3E8az49vOjzWH0MXdQ6mWQFVb%2F%2F3QUpHUZH355USdEwnjJf6WkVge%2BssCzIBF19k4CZsbjJZJTwNoqf9cm%2FIlmr1MnOdVzN80W7t4rXufdOOxzYhXNoLXENy8IdMb7dPEaSkJXoN4J%2FxdoMzIwA5GDkU35%2FFBebr9u0xcQEjSVl4n9p1udvPnTAn4UvgGeVPJFU%2FvtSn4e95eVM%2B7kQoINJXb53H2jUu0ralajIyVUOfnswLjuaaNmKjmPdrNxyDte2lWdK9ywswrM0RfkKIo0cGJs2br6rWw89h6i03780CFxuluRzUe6IW7DLzo0240R2v4drBezU5YUyqAfMyReevW%2F199rzHph4X0EdlSdrbHj7iYOfrLL%2Bna8iATJeQoyyPfvRaJ9klrY00foP54GRTQd4X3CcLgScxmVjD97NnTBjqkAc1sNaUa%2BThi54etAf8x8is7lz9Yhklngon%2FlhuwD6F8TfqWuQZUoH38%2BmYT8VJuz25kVP82qBPdWq97MS5vQMkcCkKeduo3V2BMhc8W94Ji3vwG59dFnZSFmw5V88YEHAbi57Lgkb1o08QkIXEYjB%2BrENcswROXscluLzVSs7SIf4LeTeFKTiAgDcEHdM2A6txM3Yy2Yk9L93bk6CWkI52ZHuSP&X-Amz-Signature=323df08659156ced743cb3480c001470b2a8963805904a83e6001c6dbbe5bbd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LQQPRR%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7FEblKj%2BdwnWI0%2F9vMXZrkiRTQYFQGM%2Bk%2FhLfj358LAiBLzg6cSHeZz5yMRhWLG%2FqNwXMq1c24zLlTuYCFHylBEir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMYYjDW3t2SsVpnUFIKtwDQ7CMk1Liz2FTUqU%2Fmf3LjsP7Qr7Tt4m2VW8qDp4iYpt36hfQGFBzbM%2BgT8yMW9Ne92A0vg4gSGkgrfd%2BSiFqiHtRqcn1fQRtSwznybjKOi0nMHprXsCqCb2QCLUKmjBSspUlc6mGAkFtBjgzApPEKMILnGiMrJXLGOiV4XA%2Fg0lzeopVNWz4cPEADYHtCH96BeNBPoiCpn2T27%2BEZRGwGqKnhCMzjzdS5YOZj5lVKPatSGBH823IuQZOO537NQgriHUJo7t1j%2F2VN7ui8%2FFJSyexw6Ah1Ayb9jB9jXgZC3p6hd3UHXITUtVAIzjvCMXZ33x7zg8ig6aFGhW%2F5hnP473CgzpvyilTvYawxM4Hl21P5bPF%2F7RsaMM0iEFWvAERKTQl9eaUaW%2BvpiUuMCYxvPwX2vWnZ9ux69vMMzMlUx4a7Bfx7klqmdWj6WSlL18WWM0cszNn31v5UW8xi6jZpUhq6kCOYiWva2Ys01jHDr8CuNiCnO6jdvryxPUCwCxgQBERcmvWdzPpYVhoy2LsBAsSkakWlRvWKPAeWSCWqrwSaOJxekDgOhsxsBaS2A51p0EKXcEUenXVEN1weZBMb6xQjTwHhT1FKT6S1kZEy5tOaBhCL2OxcJvon1Yww%2B3Z0wY6pgEFwrdNVcL%2FZVHT4x%2F8bvJe4uSRYr9KdMmQPpuKQmi7WkbMN9x8wAy%2F17lMZPP8lXKeluArVpJNv%2Bw%2Bizb7UouQA4yR%2BuUJf8mvKS%2Bd57W9K2GHH65HLNH%2FKcBx0iHy3TAUSvipT%2FzQI7jlYEzJ%2BvlLdwRG9xeD51tx6X9VVmWUSv86zOt37Q2F%2BBR0kgs4L9u%2BOrT9c0LnTAOLkzGxlA8Uy%2F53vqpK&X-Amz-Signature=38fbbc47f0a07833b84108bb80f1705573c14379f4183810d02dd67018939b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEKTXEDH%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtT%2FeaDMlWrrQ2SxbH2Vzfy6Lh1XH%2B5G8YXV6EUW5l5gIgKWi4pHUY42JUnsO%2FDFzx4lxK8ol04UW2tIQxUJRwjZAq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFjwjj%2BdkUovPmMXkyrcA1Xo%2Br0%2ByoeisML2JlMqA4vXE4%2FNdfAJx684dMOHQuz0E9a8jGXbP%2Fh5NugJotZDT5IoSQ%2BUi%2FGY7IZbdup0vsvd4lcffoAIhwMAh252ZOH0kerlGsIhm2fVtddLIuUCPFTDNdkaJNPZgEQMJPJ9nsakKrKC2nnlcQtL3%2FKUalu2exjWUm%2BwOjjakOHuEzJttM9rTeZA80FfN1xXYvUM90H%2BjeA9NsZDJ6usrqrgmBnlNiPJVECOHkXmn8AIIuKnJeJORKpFgpuP1nkThxEiVI6bG37CbO42%2FX1Ak%2FQru6gCXN9AaMJzGCmieXY8SN2Ax%2FPWoZ%2FDd6IPhu0T8EA0eh3exwrxgdExG5XaVyqGb3OLG%2Bd6qPN%2FJUlaLTeEK%2BUQnrEqExbaHdtXgirhNXTDZfKfWswe1VaFi2QzqHL7ksicdKCUB3PuS0sTXyNtb0TYuJFqAvoqDx%2BqQRa2lBPS0rEMxcN9P%2BIxIb39svzqfMFv4kK9otWgexGOrglzVM%2BwqVM6H22YDJ3sRB0KAjJoXSzoObzZsti%2F9Soio%2FNdnEQwgb2o1Bp61m9Ftrlr3tb%2FUqvDb9b2%2BwF8NuFqlEA%2BBrafUMMOZ4YzSSgwDbyvJGAC4i%2Fo6wZ85kFKISOmMPns2dMGOqUBXIwhEO%2B6HmzUQxdRA6cCMxrT6riSBN4%2BlD3G0nxVGVfncEr7CqauFuSgt7sV4YlM1zvL424sMDUN22m%2BL7428lfH1MgfRMlsSg4rYm8dFNCTvWsE7KX%2FTQfRjxS9FMY4PtE73IPth7usFjK0ZxBuEllp6qK%2BtjWDD6%2BgccPxpRkLVYr4t6ESVilELQk5vApidOaLxEkTZFe6%2BlGZxOt7moQ5a2A7&X-Amz-Signature=03b9f75fdd1a8eb42c42066943d4ab2f4a0553dd82ff2ecd7e9c1e1dfa60cea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4323I7S%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3lymCwhMikTuGVoNsCQMs5sBHfUM6rYPonXeeYSrupwIhAP9b1LdgNaPo2npsJr7B6TZsYYWBBej6tIZIC%2FXsboM1Kv8DCGEQABoMNjM3NDIzMTgzODA1IgyKJAl7T3YqI48YE2sq3APxpE08kh5313KeTx%2FiRzyiec%2FE6EmQgMFS4VVcOuLbiShGzFvyKAk6HHAQonB2GupFsNR09642E8WlQVnxmzEv1emPHsWiLQS8wqH5FEmgdQJDku4YtIgpig4ZvxD6oDXVt94scFU8gepAtyMwWDB8CgEHfs478PHRfmDqJQ9MRNwNHcjt46XX2GG8kjAjspa1kvpPfbfnixn9KLVwFhk5GQtJWDTpbD%2FhLio%2FVlV9dsPTHRDBcCRjF2VwJaHnnwSLhUYWLBYrWsrqHtSaM%2BewCprLVmtGpkw8BPg5U1S%2Fx%2FMME9YAoIyqIi5sJa1n4zjjKw8l9weQiYUUbqdTkxoP5U7m%2BqldXH9neY6Z1py4JN0yZDGHkncpxO7YuFqAcgJYbGJRaELfGWaZlBl5kttvxkkASTIXSclRN9xXYMxACE4Q8RJhlSTQLpX9AuNK%2BtwjvtWVtWYBlia1JHiKerzDdiM9qS9Iq%2FzVSc7OHhkhfjh6hLTsXlmXGzYDLsAUAJ08ASkW%2BHg0B4FT1%2BdFYFXCtVUaI2sqrwv%2FZ0AKyfXlPc8iaiEmXJkXKcJ4nj%2F6mmxR9XCyTtO6mPdZ0AMwicwl2%2BL8uio5ehL988%2Fyz8%2FBf1T%2FirPDB9w1NYj%2B7TCT7dnTBjqkAeC0ececTmEQG%2FDTB1hR37E%2BcQ0Y8Ll3OQh4vesKWR%2FgosgTJ4xcKbGD4HsDncFxonoUlhZ9l%2BtFOko8wLdvXZokGuYHOqgI4klKg3e2fjTUpgCNjlZQ26MlFvv7cgXuO8j3KiFj2azhu9VrQrqh5EZW%2F%2BZiCWWqnYAAM3FoeeXnraDVAnwXU8jjgRD3lD64KIbmIMyLrwDvxppm75K8ZnWD0t7s&X-Amz-Signature=23e3c8c203f9a7be71dffb386622b16b37ee7feb112e1467d3813acdc40b9317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

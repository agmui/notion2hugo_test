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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKXJTS2Y%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDou8ZeksB7edfTWlFC24B0frsMavxSEVFa%2BEQTOy3EyQIhAM0YX3yolI3oGuvFvo5ElWCg%2Fc6rDkUtNQUA%2BqlrFo0QKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyt2qMju2bR6Hjp0G4q3AP26Yioy%2FTJuzMWEgtom6AGjytoljoHQWw4Ow2d%2F81GycFd%2BJ9cj2q1jhl4mHH088FAzred5HqtbiWoi5aBNEyRTLDtLsyJc%2FaTkdwBk5ugzlSXNYglrPjTBYForWgADXc8MKGXeETOrPertlEvUGLzA0uEt6r%2BscMUiMDumrO%2BlQfhK9qayvnfX72HjRRTy3gPAJf5744a%2FEV%2F788JL2Z%2BsXL3K5EcnaDvAawdmlktfVa4arpC6DR01NmTU0fmx6ahUAhQhpiO7MMc7xsbu0300dIQztfRVWns98CQAHBa%2FYysnC97igReIILvxnC3APQKZc0HHvQA0e6dGrUZiXFHMZPj3kfc6dDOU5HRuDQuuy9Wai%2FAaLmmtVDeZ4vT8MtB3e3r7OIapA6F%2FW3qAJ7QSXYunJhLhQkK8J4yjxR%2FcrDZ4r6vhGvQfbi%2Bc3wJTrLrvsLZ58R1ZILe8r7ruJVL7amttzGLXsGom0Enb4olNaKA9BvmVj6tTvZgjwhEwfmDAVlwi0joyDpwu76EILQvUAQeHYbkCKBLTn35JyvHUKrYlTZX46LzODXhPRFUfUr5p%2BVvE%2ByNz%2FPKPsVEYnYI1pGYGhB%2FzjBTmeHuuq0JC2%2FlF7yTw%2BJEvFVrJDDw1O3JBjqkAYmabAFn%2FwzT2rbZsIekRgrXgbu0wVtfqjPtMKxcO0lu%2F%2Fjpsh8GjeVH3Bno7Za1VicPByuEX8snEJdFUJ51GG%2B5dBI%2BUuWZQuBQuos7Dhtm2ZiAtwMf1PpC1cF%2BdY8FD7VWBNsXlyrXJI42SWa%2F42c%2FWq5TWZKmg8g2quDNwyTzZ7pw67myeLKgFoTfdf8tCQkMYiT1Tqhka5HjyPiz2wDAHRJX&X-Amz-Signature=79a2e7925a7177ef08f6200f5c056a08274b32e63048f22fbcb0681cab969393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PPDB4Z2%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBLWv3aMX9%2FPnocwfGKXrNA11FRVioz1XHEU5g5wLDmkAiEA1O8zSE1hTKIa1ykDT%2Bit3x8OYHnGW2PS%2Fg10Ew%2Bb19sqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBLDDTp6fkwYcDeByrcAwzVARnp2JlvcGSLI0dZTKR34qqkTQXi08Mp6cNiRNgTwDgQ3ZbBU75L5PObjlgeIJ%2FVsaXL3HIK4BXwmNpr7SEicFinSOK4kzlyBLP%2BjP%2FcJ5Xii0%2FbkB5PpG22SwBtBtITEuc22C5%2FUO0i0FRPYOqvaL%2BdGaKfIGDWwZjnebUIp7PvgeeGFK7sOIj6kw3gg8%2B%2Bz7j5Xg%2BJoBovlfI7i1f3313IW2AaU7obAVpeZekduCcTO69q%2BQpdKTyST4xwn8oxq8YpzKZZtbtZLUS8BUyHwmCCtOowViDMO7Xoh7sLTXaXdVHhqx5ytKk8LCrUdTvOh9weG0Y8CRjwHpe87DtxdlprNXOZUL004hETybpZ5kXT67McpbLVNY8ReXFhcueSi5E1iY7PF5d87wFfS2XIpYC%2FAzNEKyLTmuaOemJ0bLuyCkX6OjTVbxPzLTGH4ojIxvYCIQ6oOW9l4EzFBJGN4MUE3J9Ce6jRJdjhqvT%2FHSGkRt5FxYAkdmZ0MJ84hqxqxMEe6e12aTqqXaaDa%2FNBBghJV7x8Qj5QmrtsQY%2FX93ZHejjrm3hMruEj5Iw%2BRoYuSpsW3cSgZqxPtVQVDJFPCm%2F%2Bwrq%2F4Ggjpu5xKD2snaeVVh4O9yTCemFHMMnV7ckGOqUBP01XQCKTY7OzPYlAXomHaa3Ds6wpB4%2FhHAkjVU9i3vh0rxzG8bK9m25%2Fb%2FWlvHVdHYbv%2BPkKWi0SFukUmwNjFwpmBMcVvr%2B7Sd73jyUPczHtdnTHklM9bT%2BYRNkuCx1RJWQJe268aNcw70KUE2bM9GhSE9qcVyfQi2L8wt3aQEj3%2FqPej2qZQkhvnadVgky8nDH5vbMLTu%2B%2F8bkaVP5D8aVPb982&X-Amz-Signature=d3cb2ab12ede78ab226f1f71cf48dfd2c5c5302a79b43628170255f30963970b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KEC6RDF%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDwcbLBs4jh5JRwuhdLITc6e4oAZggRriPIcuWuRvdzmAiBTNF0tmB%2BwKV8gIZv1%2BrwLbdqsnEg0nsjSxsn3dPCk0SqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS%2Be3bfh1wC9vuIQ7KtwDrfKaN8K%2FY7boFJgkSjj6jl%2F7y5exET14QD1Yy0pNflUMy1CfQ7XCtHj9BRCTNjnsAMDbPxhFEwmqKQ5PgDNuPR9m%2FP60dbJEy7I%2BtrEB6MOuzCrwFzSsZI6NyERz7OkfYsHFXw1SmJ26veEMJQzu1RReJ50onemte%2Fm8VfAjK6jpJTU8MCZ3PyuYjdh0Y8BXL8lN5RZDPjplWK5d6xMFBARoYJxAD7nrKZrADhFiMrv9IGQPsdU5YdAhmcpq9VRkf3k8XSOLmMtbX0ISCWG9InQnByv9adrMkH1lLk2w7GM9Iz4OFYKSL0ZxeWzPnziTFR%2FJ%2Ff9e4xeSsP6aPwGr3OybrO12N0HpzKTkThLwewpe7LcDXoBgiVY7k4SULYKlgTIeUvNO93aCa8YiibbHht2yiun4Zs7QsF9ZhzKlwfE0Je%2BsWAHK5GO8gmMmy%2B17oKkCNf3iFJhYWyfQFKyql76mXFmd3Cean1w0qUkMUN5HXuEfJaFPaKuK6S%2F5JpwJEK0q0w3Iw2Jm%2BltjqZafUDJHs0%2BgepELO%2BaHtwajadvPDK8%2FeWGiPeH4YpyhCKK0H03uy06%2FIemxIpiW1JfRS11NouTzGtEs%2FYm9HlgI98%2FL92yt4XwAR1fApBsw79TtyQY6pgFKOezUyqghrOGws935vuIgZotO3A3mO%2FtU13tcTKWtSIN9Vyi5Gmf4J7ULjzIsTQ%2BsIfu6ijO2mrj%2BlFIjb7n9i92FbxJ16A8ReMwxvUD%2FAfiJOYi4XgMJo7KOL%2BTU6NJhPGjtmoZIyQmTZtrNoRTswVEQ3jUaysOSC2T69nIDbiTKbLggjFcdswynnrBnmGq8DFvUTU5sPCn3sANDP4PvEkDwAvdP&X-Amz-Signature=f9a68cee300c747074bb7f090116854e87b664aecd6b41837a55644e61f22e8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2WPFRK%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGRAwbmnE61M4F2%2FPiHUhxzFLSTLsEd1kQzG8F2MpPA4AiBZn9ggOM3se0ommk3uyZqspQveRc4562jY1BKkupGZzCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFM1n9It4NCqk66bRKtwDx5n6Jgy%2BMDXo%2F47oX85twy8R164BrXNZ29UZnf7ug1uVxU8eL91JM6lkap8OhpfONskzyOHmvE1qEP7LSVkt8WQN6QhlQ5speNMgrO0RXshvYI8UdMxboKbH3f6LdawcbWuUpmleRsMalXtIPRv64Qrnh9llodGSo1n8qomA5IPJLX6l1WFTKCjT5kTJAx7Fo3FabIl56SsBECr1pObjDm6yJ3VxLz8UxRfp6LQbDcvpjRG0XDi9yESDPNKrxzC0IQeLUfkRQ25%2FWe3%2BjNhFzSyNa2xl7MLHrbW4sG9YV%2FIKIPyZg40K3HK6wUQyoHvbbpw%2Bj7DSI4PdebfPiipfl48EE3GfpMQW6HMQKHiOIK56QGfaAec8OtlBNNgLk%2FMJha8vFWMFXx9ZtyxiqNu5kdAUwdM60eILhyuBgVgGT60xoIqmo2Q%2F%2BBzH5NCjTiU9gyFeodC6v6FUUGtwpZawbXMbz6XkudasJywOK9l9FTbAACCV2nbynOjD1V33xsDHMOu52qiVs%2Brwqa6YHSucunadkqKBr02bQxfMsGKJIUNNcqsZ6qE6glZnYkOxP7OiHwYRCtdTxtFqc4lz3wZcz%2F%2Bz%2BEhw2mQdqeUUuDnrW70qp0Eu%2BpoE3%2BI98YgwgdbtyQY6pgHenzMa7ca9qG%2FUouINz%2BplqOcHz13ZgqVYXkuQ5ygMTJgcA95ETnlYOMCsk90C2OAGhu%2BXctG7m09lDsWG%2FLrgqHdCSTZl2pcGdgCWn0P6svaDzAF0N7X1v5kSmG%2BC4Mg4zUFH0fjInICAVnOXDbONB43WIC0tTZV226t9aYoabuB2waDAA%2BZoP%2FgcF8YcqAiLdTwZta%2F9AFeMAY%2FHBhPbWblDXuqB&X-Amz-Signature=360d64b397a2fb05655d1530f24b3bec99eba7f27373a125056a20cfb63e602c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

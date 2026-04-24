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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZMNAFQU%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8t8RVeu7KODafAhNAH6XTx%2FqeNUOksiPk6JVkZp6TBwIgX8dRO75Gkjcbe4qJJvqmkK9NtHNGj0UuWlesEAHq3qAq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDGkTrvFSUeMZ5WzYWCrcAw6DgoHrPh8sBnzSyhRssF2ZJBfDMQRcoE61ewaTih5SfkBq%2FQ4wIwsR%2Byfohis0vQtmEyIPxEhFeVhHSfrLNuqVN86qsk5bLhrevLhYksDco43O0Vl0CljqmQgzTktdM5ASAfZhhrvBC78%2FN97ueA4IhVhpFl3sIiO60Q6MFc9LWy2f3yTyMS0OieOd%2F%2BPmXxXNnlF3g7Rm3K7MMjXxqSNH9zPzXopUtuJ2CNUJbfAgAIlpArddJKJubU1Nh6StXfLUWLhipqCGHiNntwpi6PvvZQnsqq4k4q%2FHb%2BhmH7xSM0UfGqum2Ksu3iGXsuDrwBV%2F%2F8%2F5CV5AwRG9vFYxbR9DF%2BwqfnuaVau49KgF0ebTSNwSsfoEM%2FopxdvS0349XxRl1BsmC8yNdMUYNiCcXl%2BYXcfuHUNMbycZPfXFCmO80AzC2FYt42t5LYD1ZBKJB%2FH9FFbXUTyxks0%2FnDRmsdFnAw7uag3XRi7hO30k6dshjA2YsJ%2BAqyLy4OH2t7SZjcRl6CJq20I8fJj7JetsbdQtXD6dpiv5XLDX2RyzOOVqbGDUYLUC5gWU40jK5bOiKE8W7amJ%2F58Fv%2FgU12JgvWlFFuIRqlqmxky2QGRgcsnxFhnOH6BAQ5lwyW%2BpMJ2Mqs8GOqUB4RWeDG%2B0hYgKFIAKzrE9pbG8P2mPBRQeO26CLbt1fdQB4CceubkffjX6E39YYUYTfPBe%2BYOCcgVGeRL1t4%2B3vrwiChvdrRdaCukPKFfkhcz6cWfQq%2Bpkwxn6W%2BHb3w3AXbOK%2BVuDR6%2Fs6%2BoFFZyYDvWEBiU2eA8ViKs6Vqs0uhJhHtA86S2dostXq98IKaTkpL0W1kT8mh1urUxYtdrKAvIP%2F%2Bso&X-Amz-Signature=dc67ed0ff9817934ceec6239b24e643a5a0c6cdf1837d00250cea9b66a905602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM35QS5C%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOLgf1rNPPN5kvXR99AFtZMcGm3cr7hf9cELGjuCsSeQIhAPO7Bcb%2B8Az5w8ta8%2BHorgajP3auvMA5whB8ytNg%2FT6DKv8DCG4QABoMNjM3NDIzMTgzODA1IgzW2sMt1CPVUTVprrQq3ANYe11Pig2eASza84WJCokUNusds0ggH9Jkz5aV3jgDjbN9X5fstjcWwhqznaGeGZw9CGE7O3O%2BTeRZw6pqhaEZCAix%2BIjZVBuPQM3gQGYuNM2iqqzl3KmfXluH5mjOPggLmpuBDmFoejWGYEVvSrxuILftFP32wMDUAyXUhtPASrDkhXRKpLV8gnH2TNi9W982w7CmOZDZjWau9JZ7Gt0q5DWxlKF%2BXuQauHo08pPuDTAeXm17vtzImIOhLGtlplpQSWyebHoYlSFXkcU1E6Oor9JGsNaL0aYcVEMkRnL%2FBnFNrKhZl6dNCpZzjQbkJRLsMsnhN42npeVSJqUp1B4XeXoWFzAbkMcyCszhikhYuo%2Bz%2F9ykTrzTSc%2FPEp%2BLqIxPgYST9jZvI%2FX2MiXyRWesUq7IGu05%2F9JSGCG5zusy7pqKHRW%2F8jYbRZi%2BtvWQPrc2RmxNmw6V4j2S4jH8uSlUBLbITwWUDTd4x6ovCqqMAis52CSKJchL3fY78yIDNIxAtiCwOJqH2fdhvaIr6oMHN5LcjMcnYvV8wDjzrc%2By8hfGWE53SxsbXo0oylYHttjy%2Fxi0eDy3Muezi618HqV60xeVKw%2F5ip42uythabLxHKLE36FV6Stdup9UADCyi6rPBjqkAWF5%2BRolY%2B31JaHMCM6UoUvhorrXaUZVoomu3wQZXm%2FsSJlqCAP8jQQGhYMycbUDS6je%2FQXS%2FYBRNLmdP3JEXZwKMYbrxfIWsYhe2sTJGbnLDK7rT0RQUS63%2FGqWIy8gJSPhvqTHEkNXSWFfcPtFwCePZogcgkmAsT6y7iYeZDpk2NyHPj66dH8C%2FA7IXoHtJM%2BJalD81B1o5UDVM5dUSxJS8tjo&X-Amz-Signature=0b6bf686d3d699f37bcd30932f1e86f203b1ad84094442213fba33f484b9a94e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CSK6HKV%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8rY7dEzWZRhcfAdabG420iAD%2FMCTCTmW07iqdDhfy5AIhAMvj0PMHu%2FhLzLjnpnIHDtMhZulIF5Ivx2DzcwxKiQEkKv8DCG4QABoMNjM3NDIzMTgzODA1Igy%2FDLqYbK1vo2vh8yMq3AMHAYTJPC%2BwPfXtJfSwYAlz90peGJ4W1kBChDOqfeqC%2F06yeS%2FLoVnDbFBVN05zfeaKhAPPA9JsJQAfY7ie757r8wrB3r6f%2FQe1Ynze8AAZRpKkoYYi5Q86cE2cTjxkg31s%2FnCyLKkL4MSd85bckU861s4lG63UU72zBTty%2BthSrwreDl3JgB2Z08x7x4dshNLh9JvAzBJuemUGGJRlkGzsDIRP37dURCcc2bodEeRIfoRkLo%2FcK6dBFPK3p8s5G1BA2HABu3geaqkJYR6z8R4vdQzUNpMMhlOYQx%2BqvqWsOhTYsDFL%2FMJBbkzMdr7zf%2BSgCQoqMkd%2B0jM3RxSO%2Fu%2Bs8V2KAil8HPhpGzVWMAgfB8PzsWqOD5SvowYqdzyTUYfgmHiJoXHbk7yVjSta94%2FXiVXhfsmniCfiMpVTC96Y6AfrNVQ2Adn9%2B8HQgi83XXgobkaBd%2FGwdBBNV8n59nqYfET%2Faa2cJHdpLso8PRBlG9SGRGyqwu8yv6RjWg2qESwaiyI18qScqVtXgi88jydcr5I8a20WdNnzCaRtGFAOAdulFmHScxG0WfVvvQ68RdtFosrC95hieClsSjl8Qs%2Bbm6TDjbgO4UVc414sCSQ3IXONOnK98ICOtK4JkjC1i6rPBjqkAf%2FIfo5WVroABIf3u9gkYE8qGr5VUfrKJxAlhDk38ewn13v1RfVnZ8%2FlUAznMQP0fNCNgel09ejP427IycLKV9PNItAlctz3uCuahLbZdRXm1aWOOJ%2F5MrFCUXj901LRI%2FpbjVVHKNddZR3m%2BEfOegCD6odN695V1B3otFZCfPJLTz%2FP8JvCDklk%2FzakwvNQyGKdxE49TtIw06nXxdRrubOrJFDw&X-Amz-Signature=0dde00fb510e0de9087a0e8fae3693947dbeb1abbaa39e088f57b979ea939d75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSAKTKXG%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjGVN1JRI%2FFX4bHhnJt2uZxvrhISFEZj6I0i28sk95UQIgT9LqS%2B%2F2ix%2F%2F9s5MraGXx99mbbqmDdRVTkvBGXxCxFIq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDGNembTaqAOx%2FvGZ3SrcA4vInhAN0CEUxEcyvjVMbpkHxpqdKQT0m5abOqf5rr9S7uIOYhh57Qu%2BB5tpFE2uyR1qB9bXXLNgYlNn9H%2F%2ByNUOMQ17kepGNqJjNw0bnZx5v03l5OVj2oAVG4psFkwuyKzRcw1nMPp1Xvig4IyVVGcn8AlDC0MXqfE%2F6duunIKN0CXZygS%2FtVLGdOpQ2de2%2BusBCASia5Yh3zojS%2BL412gYZa%2BoVn4uuBnGtyFqBOmr5YXCj1Eas9yO%2Fh6JV%2F5bYUOIO9t%2FAb4XIuZ3w4v9RS79APLtEffWUXWXFpohpICiTdzAoAVrufILNBpf3DawE80yFYDS50ZxY0xwwQG%2BeX7diQeFVgvqYxEYvfgTFqzRqOM3GIyYelg2v910WHkofvFWTLo73jq9p6OKpPhvoR9148Ef4EiTuNkYms4BS%2BoWvqlXF9L4NKxw0iWu8nHAay3L5L8yTL2kGQeWqCOL4WGVtogGmCwDDYoXcyjjsm2a5e5VA%2FbXaaaMfytNhPpOJTsMHXzW6LPEEZ9h12aFDu8SbBa3j7Xepc8Qj1bcbC2dSnpXaLHM1P2kngkRPYqsxTcWQ6JYU4iys4KdQjbbikNb1jsGaTHEc4TDFGVcL%2BgjTif4MPJZcYRi9EBBMMesq88GOqUBwlkndQNZJuQbpAjmBdLsPsCATMyi8kCQsrMdUtwZ0w49QLL0Y7RJHtkhiuL4gbWmCRffKhUwauzsI4jUj0HiV84dWiicsvaiFPiDQGMHSHo8n0ZzhuImhgv%2FHzkqU8dINOt2KfBR26IeaX9q6nF0ZrC9SzUUfnvR0XWFlI%2F3lydsESGanpTpYtT4yW9uCIkANHMjTx9CZzCrx7iMPaoq4rI4voNU&X-Amz-Signature=5b85721b4ac2a9449bb6a3fb688b6ae3d8d0693baaaf52848bcd15b45af771ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

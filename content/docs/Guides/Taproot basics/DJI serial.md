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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y5XX2WG%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIHHLNVs3XleP8Oy9uJNKdrfD9h2IMsU5b7lgIeW2DakRAiB%2FMfqvlt655%2B7pdB8VpYL0D4kuxC9Z%2FTmN09y84REF7yr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMGZuhg8LHNsuvrV3pKtwD6p%2BYi51To2TgkNk%2F5%2FA8GDeBwodMj0ayKSx2MAbPEwlwJefSlK4G4bc1QLQE1F3zasFt%2B2%2F7qoj0gK756wTyDTSHhexKp7pN%2FmWwYMFR5KUNwCv%2FV0O0L3imXhWAmh%2BZlxhABkg9QCHhgieEQZ4K2CsjdNiaZlpYdn5AYS8a4rWeIa3A0kS9pRt%2Fl5RqCqp6uR8wLwmUGiv90c7S9ywR%2Fx2wjpQ3VQ7Badn3inab4clb1IegHLlQzlLQ1n729ytUCxqmiDboZGzQZNlJCSkcL6n6DgW8KWRjs%2BHlDtBStYi%2Fh7LlwdmZlmGR%2BbtQLJQtfnlNaIlkpn79%2BgLK0sZgaUN0Qy2gNrmsx2vsW70gvfDS7VvRyegDHRiK%2BiW%2F1QwRlge7tOircBuiyxWkyGRLc0gHa2LAewVleUMUp%2B38xuZ00IPRwdsK0clKDI8iS49L1nnAn%2B2pgb9ecyJoDq8Rvqsj3yrdQJy7rQWRomqm3SmPQoQVpgiism2y1IV43zmNnosSX%2BTAQVP6MReXtA9HIoRjkvm4p0oba0bUsERvgbHUErXThDTySPFKfk%2BrlVTe3F46fRrTQB592l6CFRwjdfMcAfWv9pVYH%2F7lozP%2BunRaZl6F0TT%2FQZ%2B9bBow%2F6mbzwY6pgFQkYdEgsaTvvudepsGfOYAi71JOdmjguEvYJWExwi6C0FmeqelbqHyIEwW%2B3Sx%2BJZBSsFbDCk8p7a8eFRr8v6GxO9ZFoQPKQqz1OIOzAp2ddZ3NzcpJCr6BuXkj0zUolp%2Bu7fA4HhZrltcZZn%2BRdsG%2FpdVVslu%2FLHbS2FFwsDWRlJ93QWZi9SbJuhYR2RdK%2BsWf2y7tAvZarRUeEnHOD7UbvDEg4rk&X-Amz-Signature=a24827a792de374efa6c84ed0f334f2cf4de997820153bce55ca540ca0d7ee96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PHUSW4Z%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2BIz9Ar0yzLt15V91u2yuEXe0FDk8GwYA985JAyGbuEAIhAJUMkDQ5Vrrn6Lnd15x6j0YRoPpc5%2FQvcg7WlR4ZAUlCKv8DCCsQABoMNjM3NDIzMTgzODA1Igxsb%2BSnauYQeBlPhtMq3AP28uj2Rkinv7lwRswi2DeV0fL4uOYzXey8Gz9zqDF6XY710nL6oivqTmYNXAim%2Fe2WHlr3hJC6LAdym%2FvsrebRJpcOfK0iVC8OSFR%2FcqiFYJATJALPBh2mbDcTK91R8Hb9X%2BEO8KnVemFncMgzpZIGoqjCo9YJ%2FfwFgWz2lZ2uVs6Ni0%2F0ulqtL%2Fn%2FH7bg3zhpw3Cm%2FvyzaT700HuvvGWwmNJEmhMc3mwDVxsMhGyHXS9CHxgCIquCuPUglvZeFwpyWvOUix6tV4Nfy553GH6FLCj85HwVw%2BhUS95aDsb2o3hyASyCKHZdRTT%2F%2BPPIK2LUJHQ38ZdIBZF5cy1Uqx2UhuEan2bo5PU85EzzRIeivHlJ4%2FxgxDkTcWNvfqIKJ%2F6tR%2FKfDwc0mJyhjGOGRg2iJmpMJaLpRNr3VrwkE%2FzYC1wNqDJIMgeuZ6WnELU%2FyemFjLFo8eUA16nnjNfYm08i2sj9lINLw1v1UqaXKQG1sc9sEjTKzQihNo0lLp1iEfKrmPcy0oqCszoDArpIHl4moBuYJKniu2ax56ZXnZtwd4TiukEEzovS5QB6p%2FEF9GHW4MLevvcInsJ%2FyEUzAKW4nROIxnnlW1lu1txSKDrJQvwJlikGHEkmUmtDJDDjqpvPBjqkAee2uDLfuRVSCxi40wU2n7QZwoWLUVPA%2FaC0yglncqKwvKkOp4W4LM5H6AiQ3Qjzn4N99y1DPnntWJ06obMRgu1EjZM%2BiaypHO%2F3B6qiRH4I6Cz88S%2BJp7FarKJddYfZhu%2BTWaX%2Bt9k7lzHGIaXg0RhLMQRZooGpvYddI8SxabT6hxbzQ8ORuYog7gWzmwQmP%2BJIXvF1d7jTrShJcGFwG7turFVA&X-Amz-Signature=4df7a9666e6dfb31167d82582a4dbd3072c4b71e68413780cf43d46f94187028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642FCOUOL%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD590YKKWVTC20%2FXSh9GM35lba1U%2BaUdIeFGrveCATp%2FAIgELDROAcH8qH8LwhOjRHzM9cMx5vb%2F5Ru%2FSD2Lt8VvQ8q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHFe9ST1THqLkQlzCCrcAxM1fDZiHqHAgrLCrsjny6LvSwG%2BjcQ59g0ISBtVowXq%2BWOq%2BTzvmmw3yFrCCll0QQbFR0Z4u%2FVHAcWhTGyfK2lhTn3StDuTar%2BDTr2g%2FWW42szJ0Aj3A1yFIDYrScmRLpT2D2uzsR%2BNy%2Bx%2BSBYmrAu10WPrevN1RKdOn8jfeSsf6HgBXBnuNlPIevdDkNc0a44wvtBlU2g6Io3bqAe0u2WxF20Y2B%2FVMcVlI1n8wtFB81Am5g9443yK5HdVDmhuw53eyMYDggGCkmuykIANANtbrPxX0m%2BssKIDjVTE%2Fzz7N69N0%2BBLEFr6SiFRkRR5KJIarEq9tnKT4MQgSA4OacFr5ncAfo3%2FnxqEpcnPH5u8DglQT%2FCVHc1hzPbP7B1%2BjATruxBea2emfIKLSnjfHjII2ZsB69IAzAcdVdiogNjvDlyND0O1otkD7eqe%2B8XEVQHfH4pLUA%2FuLsHEyHlFAWUpNmEODaD9jKwK0nQLB8bti7%2B2GJn%2BEDLhznO4t62UOBskamZ3XfYDrIdtSF%2F5pnqwEB2QUJdiNF68IxsGzKLa%2Fs9aW9sKAbgGyjdK391ZPG3OPa5LsZbaAXd%2FNkUiVndHX27%2F908SZwlpJhyTXAj7eDqXLZCJ7RKsL3w3MLeqm88GOqUBX32aH5neF95bRGU9WSkQQg0%2FvvY5B8LIrURNsF8BF7AGNElM5zpo7hPoKQA0xyE65fWgkiMZC5m7ao4NWhczA4oSVWpT65alJmCH8NVkKNsdsEJbDz788XGSe46Mpo31%2FJcV099FCvGJgUgJvM1wPV0fMi4NZEQgXxYgtbTXUbQiQGdgFuQ6PeNniePnwyCOyUkHTJXNCI01HM6ZDT8Q2YiBLP%2FH&X-Amz-Signature=fdc18a9ea02be587471e475158d8d6740ffeddbc77eadaa1e56c46cd78cf145e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKMO2GGU%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD9%2FLuiGyNetbBRGJzO6%2B0MLC9AUSdtkpsjHfrDobInbAIgMYZ0f8XI4af3nzUnkVJiBxoyGOFvVZriFksDK3P7YQYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHNCq03Jh2Zk375kYCrcA%2BcVkyu0C1Zy0P29EO01LrxJltrqt2jCylD60EPmoCSAW36mRJboQOQmES7mcmwSZ3YvjuxLozp0ftHAg%2BXtgMSNZYIilTMvFMg2%2Bh766wtz0N56S2BxGSKiVWA7DWTwy8cIbOSF%2F70dhrBPWt%2FuzkO7CHxJmXK0BaKxj2cLQDEnxjCrMf8hTIqfWscZBzmjMdpU3%2BnNQbVZktcYiRHKGdP6XUMYEfxOkI9CPUsTuqZQSO3adVpX6702R7HMC6YS%2F4YZqEcS2Kw%2BF6CIJwD1iCXaWopKCGMggwdFIRcRd1R3x2eZlXC9kiLyCvzH8lpxrN1ZXamTVsQbYayR%2FcgPUbXrf0myzoLrAovfuu7PLXud1K19%2BXwRW2%2FbH5h2GYqKgAhzjKesMrO3D5GMGMDjO67V%2BwDBxd6f73EyyfJ%2Bdcn81lN06G3hwFzlq3brL1TIl5uRQch7cM02VLdu%2BaLGrwiiic5oUGqMHQ9SlrbGEMtUDM0GQprW57pRI1vUh6Q76yb5NaUPgzBQ3JnxCOAMgXJlHYU8qorVmSj9HCY0peHo%2BYBn4Bm7NT9mvhtOitbggXftNmCDPu%2BUB9ar7tl8PCfLIY8r2vOOGItnz4q5mh2Jbo0DV2L45RGXqKdUMMqqm88GOqUB8j8JJHoWq63inRuVmw09aBLUfLtaqLpgmULzQzs37VfZRcNGBmwSqgoCPnNvJG1GQrYPAiwYN7m7ORKhqnbbIdcqjh4Go9AJPMKcOR0X9IntFeEJzEfcDabWeEMXPbczYUdGqslK3bF%2BEzBWRCf0MH5frvgHlWJVTlAPh40sQd2qDn118IjXTxVgDfyijMbDygeGTEsgrIze7XVUgbJcgV%2FCPRZr&X-Amz-Signature=cf47355d30f9631a389848853d383ce4e8f1f56e95cc2ff912522279e627fe0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

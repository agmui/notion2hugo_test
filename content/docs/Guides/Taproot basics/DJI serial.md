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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTQY25LI%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDinyaiTAkIgBUqJ93Y0WOzFQB8F8OmSU15RV0kEdzGqAIhAO2XlMn4i9Ro35u7bkuqCUzKaG%2Bj%2BEAHa2TfhElXbw9UKv8DCD8QABoMNjM3NDIzMTgzODA1IgxCCNNOLUoSgrUvvhIq3AMB2%2F2sro4l1jbMQLaQB3mdaYrlW8tAksQjvjhR%2Bkx8Ix0YHWK8pEmbWS9IQQU9V%2F3cvbMg%2Fc3LfG2cloIw1%2F81LHmxnu6ukGnDcdQOhP7f9PVcZwVKHBKS62yJaEPjq9bnKXmYNRLtCGCM1K5bfWsLDW%2Bos%2B2RK7T%2B46XB7dq%2B01tjibp54WauNG7S2ceOWrYOczXd5UmpkGrbj7%2BMfTtsAjUFKLE3lkNrwXRCTjWUc0s%2F7B3TM42wZzpMbZ4etdcGLCezJ6BsTjKMcnR3iXwSNa8XJhErcMNg9zuX6DpqdmJLsrDurN3mLSIxWtk07Qzs9QPw%2B8VrzGmxFQ12gRwpVSvIhaG1t1ENPUsJbm7NV4AQUBCl3mWP97mWf663l0GZTxWKCMDWHqYVkvLqxS1npXRhECGhbfrOO4Io6T0zYx9AHBMNe4MovCRmtFPZxO%2F6WjsQPC86SFwXcBAmYMZDL7OJy1sWnpGT3M5totdoPqnlTMHO5OOKEAjFw%2F%2BpeA8eKwle0RrEP0xnBlSbJN6g%2BsefIiuszdA%2BPVDACqIyr3gx1BoM4oDvq4WNy4TjueoptodAtZcbpQu8rOBwqHYOLrOPQoxdUbnvxNKGP0WBAYDZNcQIFX5m2VCn%2BTDI2%2FzJBjqkARSdCPt0DOosaNR3t%2FuE0UnKN9IDf9ZEAWwoXLyqbTlJRhMjHRdISwbKnqly5PErQJ2mcOL4Q0azAWC%2FtOPMD5nta3Nip8YzSoXgIanshTXoqNElDA6tDbiGlL7OqMDEuUQuor7cAPQJzTfYoOWtDYeJLXOxY4kTbZzuWo1UIoDhBpyMmvZ49JqUD0Eytay9M%2F%2FK1kZN%2FoOigxSkxStMZ0E%2FgFLF&X-Amz-Signature=75a587e8e425dfbb1f6545e520c0585c6c1cca36cf23f4226546240c538f44bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WLMQKNI%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCdoSJDmsNawxpTNSAITIxHJeetJqkLHtNyEMG3sW7miwIhAMdKqODKIrKxiR9ElJ%2BhPSG2C8NvubXgf4Odz7oRACTZKv8DCD8QABoMNjM3NDIzMTgzODA1Igyq36eIpoM11zNBBQgq3APvFa0RrQ0Ndc2I6L9SZ8W1UIOaTzm%2FWbTCcEcH8g69W%2BGhw%2B48E1fxsTOAVIj88B25vCjrCSeNWZQLRgl7EKsEi7dp0%2BaOMy6Q1EzAoyXGNYl8mqUbdvH%2FZ%2BVsCWY0mQWtVQAEEPQ8TDOo8Y9yvMvsiehyd53z89gH%2F0u%2B%2FPB3YngK%2FfSKc0V6j9sm68k7QZaOiZiYaZBjZFD7EGVL79HeaDXZcLBI8jV%2B2OZuv1ysfGQygOd4N3SraLkRl7KcpcorxIKs0s0EGxjzT1BWdwwaI0bqadmnWT1u6nhqKJm14IWPUPeva9YFvuIGHJiDaAiQrJ%2B88ZI0u9a50mQxISkliDCu3NG27IsoYQ%2FMdxbskzXaTAlfxcq5O8I1fTXvWHRcaREFNGpSTw5DOFhFJ57gXzQ5JxFv3gTBaEPi42O2JBSBS%2Fou1ktqsJUdyvJ1QQh%2BA5IZr5O0m39iq18mk%2BZ7gAJbhAnwX%2BqG8cFUrA7m2nW%2B8L63Qxa4QLuXV8aLXR33T%2B0xe5%2BjQ%2F8SY5kA8t6%2BzQwTaW%2FMnRH%2FCPNSem2Zqw8MCCgKzywUJoQXmCLeB3f4M6iwiqu74R4pPzRl9sJ6bDxxRibZC7HcUvm%2BidX9FLiAMdIgdyw9ZJcs2DDn2vzJBjqkAdpdOAiu31FJW%2BElw65%2Bk8pfKxPaZOsVDavGQ9PnOfzue5GAuQYf4zyYhdFHT%2FxSzsYylNCLhyUKD1Gg82IIyDV9S4BkOh6SUd1pkwvPNyrvR4yeVGhSPknR4ry2P4bpR2vWzGZJwtez%2BdGLKSCAw9K%2FJH14W12i1VjBSaSEOFJTWaXdECfLEshWtA3j%2BPfBakFvDgodl9JJcduuUICYTWOyq4mC&X-Amz-Signature=3600165b57c885830bddb54e209e8e12c70f96453726489f5ea1f1f22931f2e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYQGSOKR%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIG%2BiN4mox%2Fo5C4OFDOXblDITL2vjs0tTjRe2yk4I7x%2FZAiAJsvBh8H%2BvaTsfU9jObdtAHQ47tjftUy7AHdWgh5Qj7Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM%2BfTQ3SD0hdH5txplKtwD0BD6zx8XxkaygYC4mqJ4RPe6VEj6nF789JfzreAazaUK9GhDfQBgO0vOINhhiLWH64EYHVUjlKsdDupNXwhfn7%2BLQwy4zkJ4FwlgWOBWSdIj0TdUulIPS7oTgRrhnTqYnLhYlhpmARWCHaw2kV5UTQUyeyhjblW%2FkzvTL5zdWYSXwvcdJodLBv117Vpy0Ty9zq2yilM8NTFoT7qBOESHs5GTKeHKVWQECwLN88%2BC6OYq9YAp5dPFt1al4GSkpR7Iq5ft1fLRC7H35Nt3D6F2K4LbFsh8McLOsJwAqfqqGek485VI6i8f4cI7uFQrHa15Ae5Pwj3k6hJ4lw%2B7JN7LtZVwM8B7KBPSFVvy2Q2lZbTcxno%2BRwrfzG3XhmF44Tz8e%2Bl%2Bb8m5kPXeKif75mhelwOtFC4V8R1ha8gPwe37pd2kPfaLiajUWFCFZTSgDfPaNe9PUUn8KSNCXzOvDbg4yg%2FCu8PHqc3BRg5B3yffX%2FozlrLzgFIkfDTt2KmHrslmsa2VRqh2AUylyRmgApeUlbkBRLJFGi%2Bf992%2F9fo1NPWrGByKc%2FFgmKEXVHi%2FNagDRfr00kBJrRr0fFTPcOvOKNTozlUZVv10OfrGcM1NHfWWgIOM70NL%2Ft4NLeYw6dr8yQY6pgEkclcu2O99IqqOiQBGgHjyb7itESgdYphJS1Teun2XyiTTSNxTdJClBrSBPuJaokRfqgA0ooWBnRmgv45R2FYISOBsqs9%2Bmqzh%2FsA934QOhoeQFcrmZIXhqJT0ztYpMacY3V%2BVHkAHxPUvPIAwkOd4LITU%2F7XpvjtC0jtMLoGaAbfrqZxDjCt2E5UcNChQXPLpB5H7CUNRd8qvAS0EViWh1o%2FrNe1%2F&X-Amz-Signature=87ea22e406edb073b12469d90f04dc5f8c73791bdd28325ced198eeae1ace382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZSKFOHD%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCLR8vhhrHCUpGuKPVyQ7OriOo%2BYzva5CKCJDNwJ7VTKQIgYQjoFsyVS6YjuhRKx9A52mnzfhskcyWCM2PbRfKSBrQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDA%2FGmT5MBQvK7vQmOSrcA5C4sguuGzjijvRZYc4H1ymI35QTgDCjo2p6p90gyIUvBDq%2BwX29OdKnevlnm13BaCTbmfdgX1hXq7%2B4kDwi4%2BhA3FOUTex6P2W5M1w3m9L8gAFzSWFr9oEd8mOI7HP9AyIjI8nXrAGATkXAkObT14UfY%2BpzFRv0Igbh7juMdWsdqPeacmnIrWRiFVFrWH1guct78KJlGCePAaBK8jG9NSU37RxW%2F234RbgaWDKhMVY3kZgsIKI1%2FLIE4kyKVB%2Fma%2FILO7OWikP5AhnOAAY18ZD%2B%2BFfHViFYQP%2BBabOA3u5DXxgrJ3aIHRzJNL1SAQ5oe8neWXPgQR6ktaewM2uc9NGy9KUKJT%2BMuU8pc4MtASaTrXZZRKgMj70G3da98myc0Cq0v1q8vAgf8xDGm608JXZoyvMkRffiCBU2NIIL2EGabXG04KOHO1V5T1ptBIwPbxHruvs1WYmBCDQXGx56Y%2BueONBAScM2%2BhfjLU8g6bYKkMag7dxikBI2ntLywSsKDzzkLsHj8BZyeGIYfm4Beg2qc0mWxafXZb4vlcnpFuaUiAfbpLzk%2FYP%2FL43z6bZZNap9sZgpS%2B0AyGFhXDYGy%2BBaaOT1OONWxRVtxvstN%2FMqJ8C2uFj82izPqIucMNja%2FMkGOqUBhk49TOoghSh1ZmPSdJ1OVvyGg7vsVpvI4IKYodtFhaKEvq1lMDNI4OBl9PPLaDbL6kzNfqS15JBCPIM0md9UcYJwhsy0tYb08Q7MaLafRWOsXA6XYy0HaPSshylDeuN0%2B0Jvzdusz0uowEMd0V559JLeydppNkAMbfHicz7eK6qEMf1pa9BdSKVwWhfrDuPoQAr87h%2B4yF%2FdrDGa4bO9F0ulyNB%2F&X-Amz-Signature=94fefd14f55bf09710ebdfe5aaff903d422dfc1157dbd4debd6a6220cadd770c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

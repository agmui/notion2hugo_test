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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL66F7EO%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIE5j5VLlE3hiVFqcavTLAkU7YuHjKinTI5qZ3FrBEnmsAiBc4ORvXnwHqjV75wUD0W%2Fs97hgmCpbrV%2FHmBC0sLtiQyr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMXgX%2FXi3VaD1TvJFPKtwDZBSRYlIGSvuM89uXpf43uB3wIEWam1nSNTLpy%2BlWHS1vHcSLNSd4ed9OaUjm%2BmfoWBZsJZShWEzHv4IKkInDN2BabLqpTup21pZuARIThhL5391DGYOoGDaMlpiYXGRhEu%2FNm4fFLrULMLDVN%2F%2Ffao%2Byngx0umsHk%2BY7fe4xlrMswAyAxFo3n0tN5bORL5FzQRAYkbpZtFTJAdcO15TwIUa4lGhGjf%2F92vriYggMSiDo2xk6UqgG6rv3eMyGPfuMwYN5FZ3DbVzjV3EfWTAz68w41HqvPz0kBp12nPRVEnmoRQLie4HW7iNCL3Rwghu%2FF34ijUSCIhRTrf8pqA7lwzViVOZzOoQKrqFO8XJ7NWa9rn%2F7ekw3NxtJth3rj0OFDvlyArMzcpSgdiT00JT5QdwH65ri3EzRgtFZAQyOFZZteXWGrqV0PtdGoUW%2FEygbyGhjc2rUQSoqX03K0Rn%2FNQCLQRb9DoYGbvMn%2FWIwuF7umLG05lLOjg4%2FUPTNhtQDkaCynuussVs02W6CN0FS2qzxkcoHPbXVZFMmq3qOHAWudt8PeIJMXi3ETCqCAfBPDxKH5a6bEU%2Bv7JrRo1eyA2zwU%2Fo23QF5HLSpjChRSfaIhrsMY4D17NhjMLkw06Tz0AY6pgFOjS4XN4ujrWfabwH8DAwqu8XOZmulWPZJMphWWmMDTXj%2BRgHXy4DWZgV%2Bi3ABoxKo0ZoXg0qAlQMoqAh6xmCbAERNz7zdvdvMaAEc%2B9Uaks7BNAWaeMH4aLWzdjNFiyV5DAqGeC8AlNbCeTRZqoQSdA4j6JJyl7xL3Ok%2FCSJ%2FpCwQq4Wgc%2BEwbD2hXyzg80JdI6AFeD6F%2FpTkRgooptPYh88uivKO&X-Amz-Signature=560e964445f8ee3d14e234d4b19985ff1079d435fed5784f62bb20df2c4c6d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHHVWYG%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCYPWDqTRArBgSDaWaHT%2BgLqYHp7a69UMZZFp0CrepCnAIgK8sO%2BG7e7Lt7GR65zfrb2a%2BCy%2F3qHU6FWTi%2BOe%2BKyuEq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDMK5Tkb10PHq3hSQySrcA3wHVjaZyPunCbkrKio5lhQjlQ165WGHZHxjoPanYSEtlCJtgRcU30JqfX1ZbwnOxBuUr8p6KczmaZI08dhGOh2JsMykftr52mWIhlKUJ6TvFQobe61FYWmNmjuDmeNC4YfaWGlLBHq%2BF2SfqmW5TP89olu5gs150nDt66FqwOmJitatz%2Ftj3sodOGpLAFS2IutOliqerdCH33LXcQw%2BzhDcTJvYptz2HU9sXaVegDQb0ODRYEN0CmroOA8f7cscShwtJH61y3ooJ4oUI8z9D8wQhr0lZLx2k5ZKlAOJpMIZEFKiIWe1dMV%2FEdjuVWm8KUyygOfJ%2BF52sPVxb69OUJxoVl%2FXwYR%2BXRVn7Is70IzHK77iw5%2BavN0O8kL6jjs2jB13NZ9Xgr082DNl960lHzaYymBGLWSOUp%2BmNeZChXwMc2x3Qpf%2FdrzdcPRDqvEuYEh%2BpeTIRIoQFi8gPfjNud%2B3vj2zXGS7hKvyYOxEKCho5PVLz96UwROwkpKyUbJMm0COwKZh4xVrC18TcqVuSv2K%2BZ%2BSXf5HVPEyFfAgwomPFL0Qkie3eWyNV9AImRJk1ExkCaZESqOPoDigwE7E30WcQsFgHVDHXhrHYg3%2Bgr4PLlti03PZUb3uqOkPMMOk89AGOqUBQ2AxWerWETQbhSyyDMc9srPB29qI2nqh2S%2FJOmPW6xhvw1QOMEeflflprKBxMgVnptI7ulCqIXVVGKeK1MPY5O1qE3WKmZrRAjvoyifxCYpPGDaEVMu6opF4Pq5ru1W3rdCP%2B7E3tWZ7jREnICv7IyEe%2FZtpSZKsefCIrwQFMXfsgueEsOTwkBqI7hXFW7my1aPEdoO%2FMEH5sAz3PdN1uisI7hwn&X-Amz-Signature=2e28ed8ca78a8865a877ae84065c2e42507d0e33f1245c8acb5dcc2c55e68d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFY426NI%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDi3l6BWP3TTDE%2BqGSkhqKSI%2BY1ikHRJ0Y85bZSOyR47AiAEDSqj5JEHvF7p%2Fu7gtEDHtrHaUY7dOf14G3rtkSG2LSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMKF8%2FPygoNOM44bAAKtwDC%2B61G2jBt8Sf1pv%2FosjzaCydq31FE3q4bwYcFIPzCJeM1hi7FeIStt9MfeoRPxBaExMf8TFmjkDBNOqgLXTrWoXAC4ASG87tMRWEebFL4K3xU2HkRjjFTA03w5jFtYwHC3ueoGEO2MmtdkBmeRKjcxtOAkpGEEMHYX8VJv1soRRRjTb2%2FkrsQ1%2BuIzVGlpKUWB9cSQC4D3WMPXglDABJjATb7%2B%2F5PFWTj4F%2BI5B2EN%2FNJ%2FpoZR4YTkiq0Y93Lf1RRXxmRlT%2BsS1EFg%2FGhBhSZORL1KDPL%2BdOlG3jH7VxFaL8gxT3XC4cfzv3d2mhPju4d9HpRCxQaikJXP3g%2BbrvTE0chBBuksBMNgtyZySojFqYKIx04XBXzhlS2HVr5N2qck5wKVq0tThLqhjGYHuZQTqCIQdcimRaub9xqB2vfHfzy9DtOYl5nXVYoQzx7uC1zXWojtqzHerum4zqNpZJqFIYYiiBO5hn%2F3%2B1dDyoZAiMZx5IQ618KddKW9aBQBJQ4eexoYwuEGlomPKYZWKlEmM9afq1%2FduDZG5apcazBqmFQuU4nEudBhg3aiHuPp5HyzuFHHJKs%2Ffhsk49HOYdQKpTjLiHkpgrLumnOH3H6e37Uq5vOC0OhFlCcYYw0aTz0AY6pgHGYIApzbxT5nm6xUtXs956t9WoHvtk37nAfzKeybSSphvaaoLYbM09A0FtEjEKGZ5uUnYWdsNIXesM3mjoWgN4%2BD4p%2FCWaFGutI9pKIlPtzl2Hq377m63BMykvEiG9vBqYumcWBe78QIf%2B%2BHZWKM%2F6CXxiBQ9RIV8ma5XJBJ2DrCmqkMf5sO9P1iK%2F7zHnKrY9HuPcmmubKcUv8qLlPdAXQhZN3pnj&X-Amz-Signature=4f81a5fc4095e7e416db7ad0a3905b9cd31cd61a3f14cc71c5b3f40bc1fcc6fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T37YZUZA%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCoWbmeifFAdReSb7LWHv9%2Bv%2FMKktxVK64izR8qYBWuzwIhAO40xrCFZKHHrzYcVWowR9NFp%2Bf9aN0C35HrQEl3W0V5Kv8DCAIQABoMNjM3NDIzMTgzODA1Igx8rBNjpBOqyDjF%2Fnsq3AOgbeW8DJIt%2BWTIzbsD%2B5CodFrZFO9m9zm6rlmIWq27EOMIjnX%2Fh7MfRSf2Lj%2BDQdF%2BSgjCX%2FucZAXQdqogl0Id7wbweGhEHy%2Fn4%2BkJN%2F8LMeRbnvCPL4SaNAUuEKN6jZ%2B4of8o2E8EWYDQW1hzRdv9yQaakcbuJsZ4Kp4QUgdL%2F%2BQVr3fo5JseJZ9PawZPkhwYCRYxaDuOG4GpC2XyzsnMTmLOOsuh7jLnVwE33SgnV2uHaDDst1PdcskA%2FJ60fYXutB9zffkHqBVkzk6wbc809GzkZsm0wM7EuXyWq0nxnTfSqhpx4NZ9AoebRAS5IivxXZLoiQKs361ahHG0tkrreJ5O66qjp8dxl0sw0dWgCuhd6Xn03qqTOOHJ1mvf5S2u4CdnqutLIS59kHBeb7CjwV5XPZ5Tuam4%2F355OLsgT3vt8s6lioU8uAnw9dFSO79bewArIZFYbFY7aUKCzzVPCJMlHW%2F5HWU84U0OIgb%2BW8koWeNl9XkR87X8P%2Fc6CyG48%2BzI9pfQzYl2LoQs2Xh5%2BXcyb2pWjxUQwyMtu2a7NBt1NOAoeGiSgE2TDNM3poY7kAwqVEAPydi3sUSf0pzS0NxRm0JM%2FLizSeux6U9ZGPidz9tsLHKOXAsfhTDjpfPQBjqkAe1t3JRtBgl6siG5Z6FX7I5tgt1pzZKi4eBI2d2tEma7bqdaXcTY9HB0WqdqDSZGGMnDGKdPZhPDVCBT9M4ekXd6SGiWmOQM4H9H9Of5%2FdOwyYkvEKWesvVduZx3bt9uyGaBh%2Fo1euT%2BzZ2B5bXPChybH8iU1LebH6HVdUftDxPJ3WGBBD21w8nka0P8w5ZpE2s%2FeByBOjc2yvJsKhOyKS58vtLQ&X-Amz-Signature=f23b2c545785f0e8a0afa64ea5f540f0cd6c18dbbef717e7eb9a48626bf73735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

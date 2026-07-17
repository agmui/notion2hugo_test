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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QO3OELM%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJYULRru1j%2BdAA5dgLeJqmoBvZXQGYM1BnOofILl69GgIhAOPmGA3F9f%2BsbHVPvad17aGWwlrF7eKvKTgFNwQcrF72Kv8DCFQQABoMNjM3NDIzMTgzODA1IgzZDFVibol2CTqiSfYq3APRh7mCxENh8SRm%2FU%2BYdFGT8eIVVjmGAn1SCWfzBAExK9JQyo8vnOafN4QnAkPd0mZE37WTL4XOtfxGNDbV7dgRiUaFmtmXHCj8XEwbpwfAvT39VfDO%2F9J7oPwdyrx53QMgk0tFaYpVz5jRa5zRdmmjRIvKVNswLVB2oTBiDBKyDlaHzeoLqQsjeuB6es1hW7RX1Pi%2BaqTnvW%2BdFDxWDC8kFEMcCczjeLc9fw2Wd1pU%2Fb5mH6yhJYkjZSbQgXzO6QrSpgYhc69k%2F5McwqIckrJBX178r1QjvvgoDxVHFJe2gBvmK%2F692DyrLILOd6U%2FwAZijM97YM8EVVYIJwss1epCaObpuU99hBbvg5yK8YIVyFKbPAGoVV%2B8hn2zLPbiWYXtrolvgxl0xTo%2FzziycYqW%2F72obdtdxPKJLvWof4BVPvoGOkOXuiM%2Bs%2FVIHn9aroRSnqMdtviVGraYNr7kuegtUxqjlJyYTRRgmrzUm12PHP5BtSejRipv5%2Ba7a3%2F5b3JHAaoH1ZwbHHlJTq7H5PZLpWXsmjq8d7ucLhbasn%2FZQ8nT2yjI1XGGJqOnaFzn2954txIbd5dSjaL9SDbbOeBiw7DNe8BgOGSHwcRI8R615gl2V6CVLMyv4gPUCTCcpubSBjqkAWqaTMNmNUnEQKI7ulF4b9vyYjLn5KP8PBNSjQxNiAPgemSglitTu%2BQeXbZEr2LXhn%2BA2VLLIZq7wuFkIQ%2FzFeEfEAM4oqjdz2TDvYwaLfwfEEog5vUvWQaBWBvUXaONpUHcPuiSbi5kde8EaFxhYSatwAsv3upRS9ayxdBbEUT1SrZ9TFmNSFKwkDaCIQq25CWbhku6AbrLl3l%2FtXyaPj3RiC8w&X-Amz-Signature=61350c6414dd5b9e63fc0296077394d038e69bb3f702534174f58e5f6aa41a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CZ5QV4L%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgjONthNvBoxmAHZ2n%2FF99Tco420wiMyYLZtbk80I8LgIhAM4TUitCG2H0Q0fmOH1gFaw4O4jTE0BoRTMA5tbbGvpJKv8DCFQQABoMNjM3NDIzMTgzODA1IgwtkEUSf2ay7UgdUC0q3APhfRQh%2BRjmgPmlAo0DeibdyJ%2FcQL1AtpiBIUwXaoOIvxq1hzVPNyy1otLp1Y2QsEU3Yx1xPxg4%2BKkCv%2B6uVUdohkqZ3CWPEgxjxiJvlaoaWGBuwv%2FhMKF79%2FbP%2Bdgqib6Mt9abByuI1SqODpcnknW4J1%2F7PN7dULM8YX6gZBaLJsvbmxLXKL8LyUH8QV93pKO9%2FNlh7T40LBTqHMUNNj%2FK1l5juXd%2F71u2VBpV8caVr4iq6iwjPbwu599mEOSIQnzKuOcJ4zIteC5T%2BKM2hfkv09YoX%2FVwAmNwOSw%2FloWjWtrTlRx7sGVE4fELxIsE2gZXbGihkg%2FWbpZcd7nNGbkpwf0x45x168rlksdGyE8ocjGsqdKGrYoSujBB0VLIQemDtty2UYO%2FJOVRobgu5Qf4sU2OCv%2BBiJT0O%2BaxlCi%2BApWEUHWwrAY61tDdXH7%2FJ8PQT2uLvCujpfIXN868hyWPw0EPdqhLekdcspkdUkRuARH7%2FjrT53HiNmWMDalZqBAwSamcsvLG7zg8dy8zPUo0GIRQ%2BKXjzEJ3bxgk5BMSLFgO29imgTHjO7COmhQhIgBjto8Rgvzd6uNhWaJpHLnRyD%2BnTfIEhzCYGUIr2wrMgCUN7khh%2BYU696ccITDwpubSBjqkAZ1uZwodM3%2FNjSe%2FhA5I5JpY2cCAa5jkcozSnPxDoAihEo0rc6OjDRSMJdprL5zB4yxc6ynnXcbA2h0Xe%2FfxrV71%2BNbFMZrzS%2BiC1sQuhWGEWP52s2%2Ff0wUomIdOMovdfRfe5LxmdLmD8enwXP62mOnDpFZ0TypGXXUkXyWpeqY1YXFBcO2PdKdUHnd0LWO5cxVQ5pEdOAXZyo91fucDhTAF9bbp&X-Amz-Signature=15692647832871bff5bbddac7001de7bb88556677b3b891af4f6f70f5bbfd57e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RNA7PF2%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaXcvganYz1FWYosLsjOt4j3i%2BZYT3zi0ARKIWuaJMuwIhAIfDhGjUfhzNWHLcfkzVOUWk9s9om879Qn%2Fn0%2BFDduAsKv8DCFQQABoMNjM3NDIzMTgzODA1IgwdZPwafGWBFErQmY4q3ANk%2FrbPIE1%2BSXK3QBQLPXtIeQQYYhYfmH2q5qXwrT4Hpus%2Bf%2B2KeVA86gV678cJ6nSJQyge1UV11S4SdPvIphlrkabGCGT1WyqXDPC4EtmNdvjMhogQor0WZlDZVHIjTkYolRGy%2FCDjWlylhjpVbGwDRExH4ObcAKKFq4oskbR5jU0RTfS%2FVsU%2BYqs0UwZcf6wJ2LSPSf4uYehL1RRQIzudx9jxzCc%2BavMO7IhN4YS%2Fc9dFc7WzI%2FTFJpvwUhTXF1TpYYdpcc61qjoovjXBDVIZG4GPyQ3%2Ff7dPR0JGjWI3dVfnsOOiKS6rWmsRn%2FkhqBH9iEs9zs6VL9EEVrDDfH2IM47H8io3xXIPkmJ7xVNtgZcKIP5wOzu6agZXWR2Rnpn%2F2YCcUAMAxYtTJGuWCdmOiIrG%2BF5o9BIJAUy9KgME9P1285AFVXC0MsMQ9luDH6t2qPQs4PhXEIIrYYf%2Bx18YOjojJrDhjbnbbr25d70GJiTpSz%2BhqTQg289wUTDlL78YciS72VeGipQf1DKAjvO4oBIhOcuT%2FDskD3FSk1uDN%2BZjbeRc4tET88W94vqQ%2BVWNTQHUDi1RcsHG2VTV9tNrn6KNiwUjekhEDfPHw%2BKXGQ8Xa39ONCHMMIS4jzCuqubSBjqkAfaALuTMMNp0mH04Ls4ZLEo%2Bd0Ien5o0g0wfky9ePRNnSVYxlSYA0hbLDrMJJqldvBHPUGmy1GOP1t9cT8F5gP3TabhGXoZwO1zptbS3yu9vBwmoeSthcyrrXGN%2BNTbLqlbj%2BBLm5kfYSKD1UvK9atNkXL0dUhbxEe9AEED3T5Qwwd2r835CHhY6b%2BQgXCPnZs8IZQjdAgor2%2Bt%2FD98hJyyxqnl5&X-Amz-Signature=de5bf47a1c5da2c3475ed1da788a9cf6f58cabf27f84678fcb3e90e125995920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTCRENV2%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL4ZLgcJAAEm8xynn7QgBP69rp%2FPmlpG0tL4K6zppdigIgeKmvT8Kl6pPAPhGTirwpo51P4G%2BAQQtRdeb%2FlWeieBMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBYpN2mnOLApy2BMSyrcA6xXjzYnGAAZwm5ngW7eR6NWXBKzcU0XZ1IkvAUSdqt1g7ZrIGEWPhkbih2jFMZbHpoCrzCsK%2BNzEgSLAvnCwkE%2BQOASqp7Zrz5rhg7GlSTx%2F2toTLxCQ41BaZSz6xgI1wudTIP8e6N7q4rB6hn86QFDGTPAbzfkqcUgx%2FQ5MoO1YcJpp358Z9wzuhOnhZYgXcRpYYfnfmnilc%2B%2F4MYB4h8grts0tr5RB%2Bb6xrl44%2BIJ2WGwEgqF6ehu%2BOx1aXrnQmHLvlfMnlRtopHgkTGc5GsN5qNGTGAQAbDFsR6TFvUMin5jqQx9A57JxNlDJlUXQeNA5gCLg10jyMfB3FUFfOz3tLV75yvSguYI1OYllEC6nl%2BUPcGNPs7vZlied3nYd4edGjwoxevYQz%2Fre4X9fQATCPNBPXdY5INtUiUbdGs5r4H4Hdwujr79jXfjTQpKOzIVgf69nbh2vPPRSBMbCFM%2BILf%2Bsfum8mo2HONaBi7GL5lQq5iVuWnDAVOW%2FLbxQOAQasWPAhjDfDIANG4OUUWrKi7SRG%2BJx1wRHViT4BAWCgbMVBWY5OEegWl0E7lh69WiGbW8VS%2FbW5uHIsjolE4HawKtQBayCE0uqIh4I0UXpxjR8HSrJcZEJJjUMIWq5tIGOqUBo6SvkjdjJwnl%2FlCB1ocncpw2t9FMKeNl2lnpFV3Ug4EslrFkp3rSmu5f%2FHSKqL9K9KTC47O23pj4f%2BIkI%2FrTetrSl6CY82zbauBFAW%2BU7Mr%2BjbHasUjtwozQSG9aUil1qCrKe44BmMs%2Bpaa6SiEVf3xtHtdltNQxeUfQSCOzA76kLK%2FtlOA4KcKgL4eBN1CMz7Ay0B7De3s7ggi1WtVFTMw%2BYizf&X-Amz-Signature=1d0d10540feee508e5d397f9f360062f54c24c6360b76db5209925b1a4e52558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

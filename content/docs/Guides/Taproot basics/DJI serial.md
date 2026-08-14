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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNLPY4UO%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQClMChTfba%2FD0cvjlAFSwdV%2FZWw1L2GVm2sGBlKmqtPLgIgAjpgig384QUESKdNhhKobaztreCKpMtsms1hZb93CRkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDDCoIZK3i5bX%2BHwCrcAywx7rnwcTuBGv7tXjPkkYFDs9L1Y2ZCutgB7mtH7j74TYohl9G92URpJJygl048ljlu7wYFLHK%2BOraoIK6pJluRoRbA9mpWQyBSXGPSHln2oSVaK1Yi6a34B4miGIH7hq6qiJx%2B%2BseThnhEPwvBgeQDw8onprUhyvwEFJXp%2FyeoBfr3O%2BkLRs7ksCkvqZ0oMZAPaOn%2FOnQW%2B5xI2ktO9qIozf%2FVuBX7%2F80zOPRwr5rGbu4wWaz364dR%2BlZX0QZLJa1YSOlUq3%2BpBlMUwkjwj5YE6xD9fSMcFPoPsjVODNX6XxL4isfRMkSVSyn9H4p37HzVy6bRgRCGOz4WOkLzrQgeVwox%2Fw4YwPZW4kyvDXuO0hBeiW2FZsKmT1hfNB%2BaUIYr54bureDbclbE2KtRu%2BvAEwO3iTAAl1pCVKntnoNi8uQA%2FuICjAMEovsYNt0hh8indUebflZlwccw3e8WGu%2BBDhUDQgzVeHu9s7x3Qre0oTCzAefI5p6CfyvA%2Bxh%2BJmlzJq7m9XWt0owhipMpI8s3iciJk9Eo8zA2y4S%2BxlsbelzSH7RNLboEHsr%2B4VDXL2sNSj9jSOT0v77v4GlWB2IxtpDRe%2FQMZkcEUJO%2Bgw3w55ax8kkDSb08%2B7xfMNG1%2BdMGOqUB0Kra8lsoaxj4IKCF36sWdjP9myKKBT9KMLhV8foQq338c73V%2Bp7zanzrg8VCNq0PVQxe%2FEJS%2Bp4T2zxk52N5PzhQppTQM5PDlgymzEfgrR97ocEaMR9GpzF2ZvrHjc9WFYyXprwYh52Dd5vsl9QKqSY0cpTWy1EGRGf9VpU0XiREerA9FWeWj%2BRANus%2FZd9gOvTMXHUNBnYCUCmBID7CPuvwAycx&X-Amz-Signature=d5fa1f06455648054c6a6850e4626a20f829fb753629c20e244da851e15adb8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGRIZNAJ%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC%2B%2BeozYccc%2B%2BuKNf%2B7U3PiL%2B3MZMGyxXQDcHX7z1TxlAIgbdQuSwbp51iur0VSTDIlUD%2FmEHNJLP4W3W1JTw5o%2BM0qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD03zoGezpnsmW5MyCrcA9Md8cPDfHyn4fCqjoj1fWsHOANtAIgvwChQ7dL91hAkh57pmNOAJgVnkpBKgj3uzTzS4%2FUpaCtHIUZ%2BSvfn5tc%2BBF%2FCcoZLg50P6meu0QDykJ9%2B5VKubrAE8qth%2Bsy0y68nlZsBhlhjluszs4AD2CViekwR6kKX8wLGggTAn8wlR5ZI3c%2Bwc40K5GG4GAfrAPa0uenQ5gdQEOlyrPS3vkYYFJ8UB%2BP%2FKH8r24C7SWUS%2F3DFmIu3FeoCKzPoKDPpvZaKJEQMhxJ%2F8OaMiLu5XIdI2qIXjAeNnTmbke8hNJ7YdB49d8afzjzZIyCXrKWr%2F%2BBJ%2BmRsvfQ9IfR%2BxPNRZ5FgiaRUihV5TVLl8iOCEfpCCrW4vQ8gXpUSo5%2Fqpw1qmFK2Iv7G%2Fi5AkALvC3MUuBLBORFF6MXKi4TlEI3z2FowAF1ztBH1P3ocjPXTdGkwz%2FwjQGZcvnfRJQSD%2BdTn0keeS5aED%2BZcNR1bc6RVNM4dJjdCyvb1krrhiS19ad%2FQb9krSUeMRH873aOvomakTTgJWYIvArRxgUahTAdOnOHssAMTSl2HbR4ycpKgEMYjHLHLgzWlVUHCeLeC6AwSEITGv2ypgWey00FPNX4OTERSTvr44dwBoO75FSAuMKKy%2BdMGOqUBLpoTGTLMmsJLcHAxn52uMisL4MEr0SzHJ5EPDwE7ELn2ez0Y6mBWGZnTefShCgb%2BU7buXyFfeSK5u0qJOHKSBv3GOKvK1Pq%2BtyNQyQ9i9wg3MrE7Nf5v1tAvkG%2Bt1eeEr74FuQdySVNb%2FUi2%2FBUOWL905jEV92z5rvzE8Z3Ah%2Fr1HAooYEGCBurA3PAmxo6Q%2F8PFHzfdBfiFzXkJ%2BcaT5jxZO%2BBJ&X-Amz-Signature=64acee38ace9b0ed4013606e93a2c5ca5edca5042d49f477dc07c1a0c944c421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QNE7TOY%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIDCxD1VKQim8D6OZ3nD4kLez3kGqKgk%2BBNl3CCGbrql1AiB7GN5wCP4Iy083c7WfWEoCn96vm3MTswwRrduZD3pspCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjRYwzESFsJo3l1E9KtwDnXnHgeZZCybjo%2FFOp%2BUz%2BTyMPuXUg%2F9NkoFbOAah6szU%2FbJl0I01D1ajNRiK%2FQFYZEw6iFu3JB9MwZa7okMy2pn%2FA4Qv3uFJkq1LI9NP9gXmTkjaDaYVP%2FFssC%2BmZZF%2B7l87UTT3zmy7MD0XuSphaI2nPXVxwxiGkIa0rVlT8gcBEqDxm25vyxN7%2FNvkJFOKzvscTjeH7K%2Fx89%2FegqNy93hSg0Y%2B8kNburLAqcYCbiM27NWHl%2BnuyKH3CeniB9HHAAG%2BgWOXqfxrgKu08n185I2VoxlC6623rIxrgSlaGDpNJrCRwVQG%2B7OPZGVmu5XW3IoxVVvChoo%2B21dNadIhaiFBJateH0Z4gS1d%2BKXFMPM3Dt5m1YseIz6yQ0npiGqqEYmCF5rxWtlMTpDfsIoEI8Xu12Ctrzn6s1NEIrsg20oXPKZWlX69uVUtpZxytcDE9GMtFHKvYlo2RqQt4Pg9i4e%2FjF54ZTq4YS9AHYdM71EQCOfAHtc6U5H1xRL7Yv5xh9PwOpPCDpHxkDMFQSgNqRiICsbg1H7XakUH8tFl3jVYh0MddFcm9F23Y%2BQyOKzkB%2BBlOIYMYDP0O%2B%2B63y0Pz0YP1X3zsZMnboaKQvfNv8Da%2BXQJTqRtVaGwHH8wmbb50wY6pgF7xqwolRnuXDxDIc7UwlL6isLpFIpBdTpZasmamRUTBaHt4hw2LCAKmc9jYz4w8np2lJGbdBA57N6SDUTj0KCM0WC1zkA84p0Aw320RI2PaL8tDHk%2FokRzdWG4mxqrvEb08ktNZfgR7BxcMs%2Bj9qJyHsmzpLaBWJh5pz9d2JMqATNW95I9NQfy3DoeJP8jQ%2BUCYARVGtzrC4s4XIQPvSWvcJBK8NUw&X-Amz-Signature=bfc7793814e64fe02ad3ba129e5acd92901e4847b15a217757118f79375cc6c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGNKG42E%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIAmqAMc6aLSPqNW%2BhXWdAerpx8hticm%2FIH3Q3vUC0RDcAiEAjXe8PfKvmCEdijOPBY%2BwZHX854fmz4nI2NY9hOtKOuQqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMx1LAeIqiPE55Uh%2FircA7G4h66kC%2FPKUWhk7EKFvM9XoDNLxDu9pzJLaBXo%2BG2mnbGM%2FGWvvCRgICVd8DQtGSwYZj692ZPTa9iwFBihUEDW8LYt724atYLrp0p6hYOn4JptMkWBmGTzFbr2SRSS9i9Oa6eth%2Fv1%2Bsx09MQ1Y5KksX6ZruBD7FuHEb4mHUDCxUnm3Zt8GFPPDyKhV%2F46%2BiwA7nYxBH1cfZxi4BJ1Biuu%2FubIYBB8GKSCQWkZanKd%2BoMmskKFRz81XD7jw%2FhbOhEdX96EswMZMuUIwKEu4sHD9efMOxovErCBAgoZLGs3GY3%2BpDbqUvKYPnja40bNrO0H3adlEhO8V%2B2lgG%2BgToCZRNxdOX4kc3e9N%2F7OBm3vWTpDCYhMSdA3tlBu3lrw0pjuR2EJT7nUzPoO101wsTegSFyTlrPBNSLLZTmmrniY7%2FqGbm5q1AP2%2FAzPCP5VUwGOFiEPRBsFUyKCoEton%2Fs1LOKqJhvipcsNeLONaj1YVQNH3AZgLmjY0XiNxfDdw5mkCkeS3j4KPuDWDg6VgRt4iFN6Qd1EQ2CMgxOnuK1QKdKiYRXGK5Chx6444h3xr7A34%2B6AJIPH3OpJy6GWPvM5Sp0AH8%2ByjIdI5tDw6MAGpy4lu8i3r827RjjuMPG1%2BdMGOqUBZDslna%2F3f6owv9lTRQrDQDInZtRwE9e6W4EOEMFuQtzKBvBz7rynSBUzdGCOzMpNikDybRFaXtrGNQCIUQv%2BApF9b7baoc8OfoABEtcrlqD0C543VED%2FedDUKPRKJJKtm%2BXJcRrDTm9wVeaAbwXwEWsbmM4Z%2BorfEv%2BiDk%2Bu5grW6SL01%2BZkk8fNHiIbKbSLj4A1LrnEhhBVboSeF%2FjSwwO%2FrAdd&X-Amz-Signature=3dcb977ffc6529149040178797402334d58aa2353091cb3cec32a697eb2f7c76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BWMOPE3%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDLZozPf%2FFoGlqmxTB4wQFNeIm5LR0tTujyvC%2F%2FCXtb3QIhAJfhfB6HC1Lj0l3FaS5b82lAPC2B%2BOj%2BXSSII0%2FgW%2BvdKv8DCCMQABoMNjM3NDIzMTgzODA1IgzNHQLG40ya0sE1Ls4q3ANzM4kGkJSdsdsAljzFB44ZB0b49APHfMCM%2BUh%2FsQ7Cx07XFbsrDdvmWlgRbNK7k8PP8gSpR1WOQpNoNEPnBLnm%2BP8QS3z0YsX94JQX%2Fc3QYDbxzFTgiT24puTwDf9%2Fe%2F13U%2F9ARtvWcsgTHoR53rvsqmtswUoDuCEI7%2F2df0l3%2BIqnq3qecoCTz%2FwJei%2BgmJhqyW5escV3qM3ewKMc1t%2BTS5WQXLtaPkiFxMlSOX2dPwX6H8xHwPjpdwfd3aPYj3mGyfmaYxMVGzrIIgKGxzIcQhOruIv3oSr9qJKlAIJt1Zt%2BP3Nc56IH8HOJsBPbNgGE8I6P6qKr5DAWqkRST6z2DCSCRG321GLyBjIMr9vf4QHr3QPxMEy%2F8koCwfq83lzUh5EOr0htaBov48AkNvcPDZo9xxGOb8LclO%2BtTXCYfmADNlpG6cEEvwst5wjK2nSWX6BKWoRYqoLMXU48dAu0Ph9fQgw4BudmQURQHuONotax1HyKEve7QaiOt7Yw6riyQFeo02L%2FYP8%2Bwzzh6pt%2BwpjrWZXOxTVpMma%2FMRJWP%2FU0p5p0XF6Y8hnNgOaPAQrcVfWlGm12qF5jdP8Dc5METLOkrBnocq0CRLRNgWOl%2FpR4UR%2FbRnPxwT1o6zCJ%2BrLRBjqkAYfNqc0KzlqO4vAsr95iRczezPJw51PGgmGtXPzQX6ttqH9RWLESi9pxjyRuXB4gZr7eePVcoxY5tsz7SKyIaunBxeoKNNKO9QRt4tSXPI8O3aID4pMe%2BRX6EDryUhWKtL36g1HDON7cMLdUYjqSQDXjsWhto69xEBTbDZFA6FOLce%2FjToD%2B2KWoGD%2BM2ElXf9U7VcE6eFZnFsnN4v7hiiLAgiNs&X-Amz-Signature=47f10972ead4018c09dbb2bf6144e32cb200eafb4d06bc209e7db7e52948f01f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SUEBSZO%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCbUnNfLKld7an9E%2FD9zCsxtJU8Yz3Z7Pa3zFbeGiq0mgIgWeJVaHLBWH7Xw05bn3nH6Fuc1Gga76brYIQ0G%2Bg797gq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCs25paxDUUYsIKlDyrcA1bkco5NNejhcYs3FK3ri3aWVZEoY0q98tma4q7pHdI9mLNzHU2T52isdzpfmG8OKuTtfmGafqp4QwTHdEWi5QyS%2BcwYgBasiz7LSZfN4pqY3A%2BJKYN18TONv5pHYp35AC7XXhAaWP4KCQaZ0%2BsznRIuB19WN4T4H3%2Fh%2BENOmfYrxMdSWr50k11ZdbCAsxOfgUY4ndCjWQ00OPSTkSvNTYyvzoPEzjttA0Ozjgu0LolaEqSjabybrmFfROUJSEgnt5frt0laCVEQy9YXjQedFJC5ohjGK%2FDGouNInMcFOZrusd2mSCXSRj%2F5YvHAIQoZmXacFQ1Vx4snfXzawYK3FvrFSK9MZZWfXheAdytwRuhc1xIsnbMtq45HOmpxkR6n%2BLfe8LufdFR%2BGuL6jM13u0BJpzy0cjn08YWCi3hA4DgrdAl7%2BvgQ5vNlhjcT%2BPWpTK%2BTGKolj3Lc0Eq0WFPD7sFORrfiueRbc28iMLQzWMGc%2Bi7anrGVxfvgnCUCdqHldPvYJOdrD6VwALjgAmvbONIECezAZjCxEageHM%2FSFxhyVnATkmp1FBLliDmRoGY3eHNHvp2l1gvHIk610f7ftx7EkptSdHzdA8E1jiaDlFwiNHacUiZ6HMS2cIhGMOn7stEGOqUBwmN5bUA%2FyAyOoYOqiEiKRMaGgjgEiarOZoc08Ske8%2FZh2Ljo3b6LTWYiVuZ1fM4bXN9dTZzz397YKBptOAdRvyhgSEfhDnwGTy97IrYq7b8XNCfBLf88j0kqzjy2yP5ev4pu%2F80WxWKSVaO4OY3iyoGnXmFgAlLLS0uzkdRllo1jvditZ6qizRGP36RwvVX9xJFHqDli4TLtIKW20Lef%2BHZYzYck&X-Amz-Signature=f7ec995e92b84988dd5a3eed157e6b8f0932a5a2ea0bece7170482cea099db7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ILXOMMR%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDEvKnjSzBMVOX%2BIEy1jOeml7%2BwQXk1CrB%2BzRxZ2hk6HwIhAK5EYMX%2FwWPyh%2FfmD0XM6oMEtKQR%2FLBA9p2Xwet%2BQwrJKv8DCCMQABoMNjM3NDIzMTgzODA1IgxzmMEZ%2FS1T09EyLO0q3AP5j8RElOppj61k%2BRyFTsl%2FCmG8i6d2Ow9TvDt7UEsCX79yJgRaxklEzreqGH%2FQbv7%2BqN41U3dIgGAffd3aJ1cEOLxsfMiarOZ1pT06XQx%2FL6aLl5oIGZ3V7MQH7Z%2F%2BMY8dYMcKi16LICdLKqn%2BFksX3fQRRq2%2Be%2BuVgu5F08XWQayXhtT0JhqEqYgXOxXsT%2FMeyh9Gp9WrdJJVxwF2R8x1nlPPMLbbbGN00SllvWTyTRzhMkbhT%2BHsbN7zVFyWhZ4xLeIZ9NPqVM6CHya5%2Bz33GdHYvbGzlFfNyGO%2B%2FnVgi457bxK5s%2BXtYNBZk%2BQNu8Q%2FtlHI5rmpox8Mb41by7aGVjabf4rlqvwmWj7oyW4FiA6x8%2FUikXTYCczUYdiInYr%2B4mWdY%2BiaBQB7vMAEfYIAtwivME3TByRzhW3KYyVsLDMXUGyoUDQb9vllYy%2B65RzmBOrP1WQhPnGt2uFZiw%2FGYbePKyz7qwbTAcR2Q2afg4KLlLJoDuZODE2fMWcjZzUYkouPq46bFgqAx1Dl8pJDMZSkDavQC0yNz%2FrBOIzswSOs7Y8rbDK%2FmMlbyk1vI%2B6H%2BTFSF0YvzCCaePl6UC84CGjRYV%2BXbuZES0FZ6ycacyTyAeNDNhlXp83LQzDL%2BrLRBjqkAcrCkAOCCF8EN7sm3OXfFCDvt4oKTitZSctyeFeUH%2B5XRdAkUVSRuLJTKqKzC2HC6ucBqEhsQxUaVgxSoxGWJ5AUwgObeMYYe%2FHiGhs98rBkiwuBcyMx%2FIpsAuNnKnAWTlzBMvZKN00hoCKpz2qz%2FnOdHfjGgIGBfFIlxpF51HRoLB4O8fhTJpuDCHRLhutNwzDE%2FNrvCJuxyGlt8UlEgQf9nS%2BS&X-Amz-Signature=98607cabdac4288399e61a9dca43bd908b7c576aa375e1f2ee9d8985ae7727da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU4JXNN6%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIFrmAYrpBUnYahTdnAHbtG214D9RCGd8%2BSXmAa97%2BvYSAiEA9Xovgi1NM15DVA3eZzEho6bnX8MhjIQQ8TMnSTo3lWMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDFmpDD36Zg1TU0qHoircAyEZJypJ0%2FnOgQy6Vtg5uk4erBPGqyVugr1rUtWjg2cYO5WxGxlbEMdK39tjfy7EfkF3fdbCbXrCG3C2yWFMWiFgkHdSuS5YJIJyiNdlUCZIQiwF%2FuhBNC%2BgngGS97kIjq5EJxhO3GMOzJPgHmPyccBKjTqMnVXVZXB4TxIGelP7mR6A3S9dMBkbqymxnczzHc9MlWwiNzU7RReMjrU2ugK49EfJ9JU1s1bVk9DnmeZU0PJ%2BwMfU%2BdqUtIRJWh8jEiQ5HywRyxvmL%2FN9Cp3IXZqXl7NXEB%2FVZ0PgEvsPU8v2hg1%2BzCV7zK1a9xV6KSh46WdI3KLMQN906OG7dhMDzpwnbZuoWBJkyC7ADhV2YKSz4xOEZVUSZ9WXqaNNfumQOO4Cnetu2balSfLs%2FDZemqAmc7AGzIqU26JvRYXrPeP5GvTe5B%2BKbsp2w0thBzIvzLiLHvwSCk6mSmUZsG8M01EUZ%2FkYn3Vc1wedEMLRYn35WtkHZ4kAUdmrQGYmKmB4%2FJS5uF64SV%2FVTr6pPB%2F8Wd2NJgDcmPHGgV%2BZ6%2Bcgvs101XQCgWY7htolIqjBLtWeYO2QmhzYZBpAbo8znMHBbAWPpXq6nkp4NK3xODEUETCkvls1%2BD4M0Tv3%2FrCEMNT7stEGOqUBgDsOIdzfCZrbGVwXVLNDPHrPLs5K7h8P%2FXM%2BhaycXZzgg2jsFEPKgADh%2BCfcbeI44kT098LbwnqHhUV20sipmtzQm2fxWtVYT2dhNozKCYvjO%2BLME6P0esECmBs1GkG6lK%2F6%2FKq2dpwLNko%2FvPF5tLzbnKS9WMdC4JeVuFpwfr6dOgq5CjfkOI524ZGrw%2BQCsfZXDhgTufREQr32KLv5QUw9lVdC&X-Amz-Signature=590622ff1f26aba0285d47fcacac348f7ca69e00aa3719a3794ac66b0f6ef12d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

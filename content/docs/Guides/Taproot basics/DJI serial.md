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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBOBEKPJ%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr6Qnw9k5WhN4O9r4YWTqZwDMzH7RkLJlTvPlBQ0igdAiAVbQNSunoJ4CPswoW7knBM0j9HxRgcu2sc0wPuu531YCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMHfkUrGSTucmCyhmIKtwDs2qJq8FesWAAI3i5zcRByDnmh6aOBuHyalf2VyIzR0OJ5UXpcJu8Zl%2FwhKkhaMbsU57WSPWnXFK5OsQcQXhlfXYZClAFCgS1HuVJI31DRZR%2Fh%2FVeAll7yUrRE42YdBHfwWEj5aG72XQxEgORFkXCwhbPHSvT3TBJMKMqnjbLJ3JTQ2y8ab%2FnLIJ226lort5wXpq%2BlnrET%2BWUSEmAUOa%2FjpovSENFDHcrqdwb3%2Bd3cVDXAPZdUgFZ5H0OutWD0s1g37mpTeuHKWvGIv%2FgelRMeCiQ%2BeXv2Ddyp4hl4iF4S5br0bUKdKClxSHuOiAyIC%2Bq0s4nPs1UIB3QW%2BRtYMFvRfFrdOgUDuubTB%2Fq6%2FYJeoEQId6piyn9dgEu2BfSi1A%2BbOzNbylln3HPlzN6BR%2FUT2L%2FqnCLnLU%2BmPBRIRmXZXG9aQF5bbQ7ea6C1VkVrrtsjh768XjrtScFpTJ9cHNi9t3dgjyeCu1wjIIXeKZLcq1cU8wthS%2BKALcpyNVRMQEFVJc4TwRP545xDRh0kA9msGrTfEhMtDzsWKjK4Le2EECpi1eglLWxeZP43oz7F4DE9p1KFpkv7hcMVSOxTr%2Fv3falzneObFGI%2Fm%2B9Y4WzjYCmyRQ8yeqX4nsImcswucbCxgY6pgHaadq%2BC7%2BpvO8I%2FtBRkmbuptMZEihomgTNr%2Frgnk6QokPB7xrnfLXEqjnInbsf%2B7GMTrdhm6Sg0NPrMq6bbVE%2BpAk8iQO9OeWW2%2FurgCf8U6jO4bxKw5gLzRDmEPWbfW3oLNJE%2BK%2FYrt9YX3PDUZ1%2F25muOrcM6sp1qQTBvP31bktMGLqK7t796gyr3BjSdwcjLHetWvOHXZJcQehFJyONIGC%2FLnjw&X-Amz-Signature=79bf95638583ba1b6a9472669f31b68352c848b9f8d2fd512c464ca0524a42e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRGAFG6%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI3dgsa%2BljxJZWVatcx8LUALF0X7pOLPLiSoEn1JQYMAIhAOYTCWJ6v9mzKVs39MvPm6%2BhvsDWUwAI%2BszykAqp3TueKv8DCCIQABoMNjM3NDIzMTgzODA1Igzn%2FBpUgvqrSZBepXkq3APCaut%2B8YaoKw4LiPcL%2BlkSqDrBoM8fa4PFNGLl1BgFt53QgcFos4KizQQRWw9wdrF8Zg8xlVzrGUQBfrSDH7I2YSSBR044TcszScUDLWPJpARiWbfE5Rnfa9L0zAGuTBGs01JEJgzi7q3DjHvOZ33bbSOB8RrUOrvD4McUWvSDkMdpI3GaFo%2FD8fxX5U%2FXogbBcLF0vUqw1zF7923S1Zr9LvLyRw4X7G53ysSF8gKhzDU6XQFKO4AyG95XfdvYoXDN85D7NKy4xblW7MaFbeMVQpKG3ueRC3m84vJh0t7WYmPH4Xsmj7daBng1yMCcIyJq3k%2FDd5ngt5gOlDiD1XS0jX1TI3PVRE0xZe63fqDAL4LeTQFR2U6iccciNqEZlHaWosY2QGComZK9LAF%2BnmW8CTYPyhk0FN7jTjfHZbkcxPrD%2BoO6QPHCHXnys9PATOkW35Z5mEvvux%2BF%2FTZMsIFHs3tGdgJ9ga7iZMdeEsSbp%2Bvag4O2VsEAMdnvqgHtRTUVvC31RDfPH6o0bB5OUnoyoFXgcICBZouHXfUjGtET%2Bi9GgKk394KVAu0LcOVegw%2B6zdJ%2FQgHQapgvUMF%2Fd9J5GMRUcth5Qs%2F5ki66y7fMNsVZ4n50Lkh6wf0qNTDfxsLGBjqkAYAJ%2BRiz1uWadttKqvpoTqBwUAFU3UmPYBgv5OQ7bQ4JJKG6VPpuoyo0bWJde%2BacKRqK7hGpBKMUCOOqW0v6AyTr3YHlIesBMl8p42fjkneLGAZf5dTNWGTbHFriLD4mcT0ceOzGaBOVeWJNVGjdDqBaFz1LvK9Q0wloOUZs6%2Biv8fKfdtALm5GWjbp31ZsPat0WrufURGvbxL09lbeczJiFxpIk&X-Amz-Signature=ccb79ecebe088b004c83efbe353bcd68545ddb22b786ea566e766d5a0b85c749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BVKSIAR%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDQiaMlpp9%2BkaxfDESMXgYl0O3KKmBhl0%2BoxbyS2oWPAiEA%2F1YC49QgUNNFsH6CoF6bZHCHweBDUUJ4xh9RmVuYSgMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJy6Ewev5OMirerrDircA8aNqEcuCMIyS2OrLF3mH7%2FxLDU1FiuJvuX%2BEYLjy6wBoFjevunFsiN0dij6ScvsjcPowii3f%2FBpe%2BOXuO015g%2BaS8%2B8U6%2FxRbpDaCDT7y0eJYqcY08%2F1HmiZCzpjK5%2BWQ18tag8oVb0HzbdsUtNbbnUeupc0KwJG9795gPc1u9MmbTq9Tt7BLBPDW2f7EOb%2FaTjRNjJdiGlPAj%2Bg8c33Ljq4Q3Z4vA8uWMv0qkjmrlGcXIDtblAjhKHENlwP4VmHHDC51a6tT9PXZnwGg%2B8vQXPJr4fk6hQjBL5GszFzZhPi2R6meVviCfFIzyshqdNDjmNrozH26zdCcZQxqPSTretbsFtdBlqr%2BXK17NU%2BuYIT2LGvjNV8q%2BsWlMirD7meC2r97SmzTzSy0XtHT993gp2X7oDdMvlk%2FViZucPpeVGRB%2BbPjecJCUp4UdeYANHb41ZgX01TU3pONdvu%2BJnOfsH%2B%2F8pJ0kLV8jX9ecXvmGEgb3Hz%2FYXxli5tXVoNzM1vB5A7uAZm99j%2F1v5QqkneN%2BlQ5BR6rCydGf%2BDwL5K2DbfHHwcmBCaD5h0zTz47woCQFgJdzO%2FRKFyAvennDNloM76XyahjmHApjoM96HhU3d8FLMfL8q1tQWqphbMLDEwsYGOqUBw1oj9lxoXaRuBO4NuCCeDFv8bXvpxTjeLR5gZrjRdSX0eNhj%2FiMJQg3ZTpwYg%2B%2ByBkqCEgbL%2Brm00pAYestExyUM%2FdjF2KZf1J5AsKKPitfkfnzInuTo542Q8f4XMgTKYE6cwSB07x7M5mcBUDUtNfUbWcoHKkUYTvbWINQep68T0C9wrMqoFDKYiUevY4s7vv8K243lFiIFAubmQpT08UauHdPG&X-Amz-Signature=493a24df9cd009706fc36326eea567c98baaa11816651d8e7b0e8ee2de9196c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJPILMUB%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQw%2Ftp5Bp3WxlAifq83xFbIQ%2BQmpe0AQsNj56zaJK6XAIhAMvuV%2FCPFrrMBVwQoarmFCFsX41hJUc%2BY9Cwv%2Fp78551Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyxD4uyGUofGT%2Ftpdsq3AM4zsLLfqSFFkeQkVYIR%2FX2ghZEFFUwAieCH6Gi%2B3lizRg3oReknWHIPxRZyYz11g0HRqI3RhlxeETOpaAfqnaVggG2c3vnJ9DYhm9XPGUaua9IgnU1WgaGmsd4eDP3zW%2BItOS%2FzwjY2%2BGSDIEC86hneAfufN8aHnbt399N6uV8yWaXQUnze%2Fd2zM%2BEtrik7mVTqNG%2BKJW6tYKkdoYBodDqw5Q3PEozlC268UyQPcgOj8E5G0by%2FajI62ln6nRxkxnePA3erf9%2Fow3vYL0cuzHcJcOfCRpARuvdog7LkrogCVKaABRgpTjnM6gl8jZur1%2FyUF2t1hAzaVVLbxj5ZbpRQMwLaKfT6w6oc1ktJac0E%2Fw1VdZzkGd%2FbwN51CLYmZsXw8nGCC16rqx4WRnb7N4xuoSQnIQ5jaAlEAHFp%2BDmol2iLyQNkKop%2FSOqesVrDsKxPpRWpsFlH203vFV5qDXOQVRw3mtL5Tt5KUoe6fVcMMMR%2FIt%2F3HjH03ncHSPSUPWxYwYg6DKEY3yIHSErulkFOLJuK3UBTSIeqYPRRsERgt9dIwiwQend%2Ffyg8fT6KQzXr%2F2YVCmIf0LUJiODlhsshwcHSbTVhIOjYJnCdGP9k8OxGcJp3OasSSCnmTDCxMLGBjqkAUJS7YDrqBMgRFWed0r40K%2BU6t0lHWpphQqHQOBlS0yn1WZ5tZIcDoSDyMZ7VnQhGuMrsVfQdqU7UM5icxQYleKhlvPsy5zDfIXOjKRuIPKhaOCdvT0zINRjq8d%2B9R3pQHZPtX%2FlLAp7RsQfPZl0xO7eZC%2BSNkvYEBffZVo7mUfWIC6rR87ZYpvpXW5EMnz0L4ByHjFW1qc70mPupUghBgaJgpTg&X-Amz-Signature=4c421d30003dd3100b8e2d0c43305b8a6e7704a1bd490c68e3f43872ec62c2a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

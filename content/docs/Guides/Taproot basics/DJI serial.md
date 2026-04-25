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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PMAWNI4%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHxayaselFqq2tMFAYUzN30n1t3BtR7Cwnn49BY2KF1QIhAIuAFDdYgtal0VnrGXfQvyKQs%2FSsyrGQLygNUuUSfGfaKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0qKckXeLSh0LexIoq3AM9G%2FNkTWgXSqDWm4ox1gePsI1%2Bj6%2B8ESU1Q2hJsx24MLg5PTq0ZNPeIAahZf%2FoCpXjqcCIpKScfbAl0r5RBp6sbVyp8GZkqz4Ky%2BSmbm0pJaYyM%2FlpSUiBJkRD4o0h9loi58Xxoewm9793pNCS6bdNC65Rtx8FMNNY1c8SbpBfkVTmqaQEbfSYyiA99CIv67EJCw6H5NrDTIloYVNBoFOhk08rsOLrla77HpCNBkGX4EwaZ58op9jFYNKg6uNDiIWqb3v2QLqO76d%2BAqUQUpI1JIdLLBgv%2FCgtqwNHqv%2FX%2F5DvAQ%2BNI58FVCZ11YqD15BdCFJLBnZKo38BjY%2F9V2hiAPw3I%2FW%2B%2Be8vHz8OVNHbz3NKd7b%2B4IyeNC0%2BmU5TfFUWOwPHmyKRdHldBibYKGtMWZknC1sOO7Fs5qrR8l3F%2F4JdGtcErF8un2mAifeSOWkZPQ2Vpd4FnlKRa0UEyFkiqwyC%2FZHndcF5ZdyiYOUPhEcGJMMOCzO9GzZ4uWbPx4%2B8VO%2FXMYnp2UioRa53elVmUJoQKy6ui%2BeW6SvPS27DLzNwDdu2RD1pAA%2FbggeE55wTtHSxYG63m0tMiOoblTugErJP9K93GyjWGZepCCdaoRjDUdkvgPfj%2FSoAFDDnuLDPBjqkAVXpSqigkDr6ym5VGKWfRBA%2FUC3nNuLP9jwr6PI%2BPxlnVyju%2F0W2H1xEDvHQC3CxkooE2Srf8wDRDqsghvn6N7hseufaOesWy%2F%2FKVk9UJgjbvDLDAuNuvakKh3Ur6NSQTxFyQhw2yATYOWkIC6vvmJOcDNKClWvfQw63nuVStMl7PBTJBJi20AgRAOMtCVN7QukYFtsn8aoLX45lqFP6hdgswJbA&X-Amz-Signature=b05b223df0d3850d595c2e5c7b3d40e27e35cab376e56629955dbb3c2e0d54e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWTV446A%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwXN9cnMT9hOFMo9E8qsd1q%2FuBrzR3HP6%2FMBgB8ba0KAIhALmdCfUqJUHH08nE28sGpmn0qMM9UsBJUgAmbi1WooqEKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx35Kw6DcWYsN7zMPUq3AMv1vvGgJLtyHzdss8nin7xRQKmOQAyTW4FlK956nojl1BbD%2BHq29CM5X71CUVXCRnnsdr1OxwA95mVrxAfvYloYVyDEDSNljJTsVUAXOQjbfxezKj9nwp4VcAOXrpr%2F%2FZn5m25zbJ1d0OgcgpZ43vvVXYFtcfNG55xKTe1XndAYXpRAtpSwnReB40NT743fxJQC5DsO%2Fjnh%2B4%2FjVHcVdpoLA%2BFyAGQ4dk1h%2FinmG5SFmeFwNySBA2xrjZWy7jeGAHfMSMcBJO5mFSHZSzMcAyLO8%2FpSKY1efQsZELVGtMObMVe%2FSVkRF8hEX%2Bp8C%2BlhS3Suouz77HExzRvYdwoD5GsPq59ooNzoZE0jbbJ0haljlcS62OILtbyGGJz3R64zCPOO21RvOtOuhY3f6QHkPke6Bz5HnVJSp8OpMPjaGIbSrGObRVrfmNJJheLjrQF31COVhw1GEurJSh01vxQR9M2aUREuWHyvy%2BpMqezAeoRp97tvGpBIxcy8lOlcH81ipPnixg8fTr5U%2FaCr70zdCQ3lhJjtEVFPSM0Nn7CPexj9yAtI0WOyhVuAhGq%2FVSoNKU%2FcYvu9n5Hi52sWw3m3fydJfCT7tYJahjMIxXDK%2FJfGUGgH3WqIod64Hy9DDCAubDPBjqkAYjgdowFfhhpfJWm8BoS1Ik4lutIkHKzQdzokuZlQlnuiBylHcheVfx29bB81%2BidiLEKitBA4qfDYvkoA5%2BgZExhw8uSv6Zr4qLJg%2FF%2B4Abe9ex7lCG%2B4a8rpXXHzhhpp%2FrtcWvd2nN790yKq3VCJcnKN%2BBraY4xCiXImeMpl7%2BCF9VzlaC0ik1h%2B4ABroXmvx1ZYRoo6vnSyr0C0fUJFd3APvt%2B&X-Amz-Signature=fb54940c717a7c98ffdb7cf2a60452bcb674bd3c5a6c8ea8109318aa95848299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV73GO2B%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErbEUdWzdDp8WjUVHVw9fxYVlvffdFVogy4Ey8wfPygAiEA4%2BDQDuojGPXsOtk1dPOo8hENSjc4WdCOdO4E5HkOJDQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH83g1FbkI5615iOkCrcAwFXwgcnHQyBjNTPg9o0%2F5OXk3FMCIdndeypyiUGz%2FY7cQaHjvlXUSIA8szGZcJNmd9kqQGXvjrwEmpVEgcAsvCi0P23J0o%2Bs9jcEImSNPg5%2By6GtVa3TLt1T26PNvgvHpVg2N7hr4%2FfolfuM9b60xRhDC78Ad4UfCi41mHHulXk5%2FmCOfEdxE6bIuY3a%2FCIRgM5Jhm0x%2B6xYBmhm%2BaeXwwZUGo5vsrMX%2FOCxarBMLQHXC90Flpwt5QjvliM1oZbVXzPkHYyHmAmPU5vAqyHuXLLkWIGSzZNcF44uKK9KyMbyjltFUykw7CjreoJPk9TWnwOFp4wHA4%2B057uXWGoqiQhfCK9jkRZ37GUHKYzLMlEc42HG1VtjmlGg5JCsG26jKDwYHSewc6vz8AvTnKtwlZp33eYpYBhEsozbbR6G0SaLLJ4G9lc2iVdXkaDIPnHHaA9B6Wlb3Uke%2FCfYgR5%2BZMfd5y3YKhNSMmITQgrMamfXPURdSA9bGU1zspuma5guGZusp3VFFCQglZrnGtU%2FmIwSjdLWcdQDC7QoE6xmxncd8ebmXXh1MmvRbtNOmJTScI2%2FhaluA7PX0VVgsECqxO%2BvSCSuEI4UsAruflprO3rwStviEJohDKMVdgMMJ65sM8GOqUBhK9Nf%2FAsdWPcurMFMJNWVOxfK1pU0VFOFz7kosgPTYSxFdC7HminnF6kzpR%2FXzhbqdFRN3Qd5BKBAgc4t1KTfbIH97AK5dsYLB%2FrPgz3dl8PI81NnckyhyYDea6QQWenwKd7RGEWMy2C1G0HzCSa6J%2BQens%2FqCXI9H4vo8rc3sNbICGKqk0C5ZQsT2YsYW7DhECAkoPPkf%2BHREn4ayho%2BsusVteX&X-Amz-Signature=513554dd7f4fc761826509f58540caa755f70a4934c9eff12f57d7cd4656fc69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URTEZZ4C%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtQ9wJkoAKgoY47puXW4CIDNpDSbXfzhbc%2FX3OPeEmvQIgVTqJE4aEUagxAxwgXsbDaOeTnlNIL%2BapE98tiXRkHiUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQEucQ4evnlKOtZ7SrcA8Ak9pnuoR3Oi4EjpJociH%2F%2F68jR7hnxZjEdFPxOoVigJ1O0A365YP68YJL%2FIolOb01PUy9rH53XTXymMao30H2gM0%2BXzfo1PHhAcfsepirCWqQq%2BQq3z2WOzZuHEBk5TsAxdJWgNXmO2r%2F5muIAR%2Bfam7KpY17daeB3%2Fw7M58JiYqkFcVIrsIbL8UM%2Bq704SHzLHC0%2FljUTOUW2oYEeGNfPBnhMEKmMND1kITFDa0YJAhl8ANmbR95usOI8LuQiZLoUJubPgvqBvtA6AbqqSXrgO%2BmPA4XBu4OX2Zvx3FiaD%2BWZkBMLwCYZ66R5q23F1WSnpjjwT4NpLnW40mlEgyy882qogXmg9Y2puSZyoMZnRBkFP6uGGiM0eFbse5SuGHAzxAXXVeNM6CEJt%2F%2FjZ0zqw6vW4DvmdPwqhTFhfeaZLKChFcYR3VugrrdV9jQfiysi953B8Zopb4Z6c9mz7aAOu937wZbl2Gly9jwab6AGrn0mV1dPAadr%2FnJ%2FXqvSiSM8yYUZL0cb3SGmyWl9CoLvT3eiH9FBhlVqLDUwTtWokL0nVxeySmY02Psu%2FW4aRtY8PnVoDh8jJHsIoA6FOvCi8xZlT0yK5XzWeRHG%2B8GTyps%2BGQscm8WFUL4iMLm7sM8GOqUBiGv55%2FZsanBA7WXiIfEzNfXfGfPemjEWIG1kvODsoAAhGpBjbBvwYVoBCQXR4slZfKQEJIm8GEyQIWbhx%2FKBiowZQDvOn2B3KTJodzprseEwEY4rQ%2F0TGdwsezWbKtLBR3sUPWog%2B3%2BmKbeZtPxC7xPf%2Fz%2B%2Fx6frwB%2FXR7Gc%2FckEVLMYgFAr1wgExORI%2BoReGQ7fbdBC4N1c1Q3mUjPBCbuFQBTH&X-Amz-Signature=7563b215c97dc5642ab04be5bb91d1da241adfbf52193a42faff821b1d26d8a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

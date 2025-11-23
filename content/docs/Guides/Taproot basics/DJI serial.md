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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XYZYLO5%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDcP7QxlwGLbGl2ogkel6k9Jd7jgixA%2Br5A9dbht9y0zwIgHGl%2BntRD%2FE%2FTaSYml7rThuk%2FOOijZpr9%2BrZSrv1YQWkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDA3s2DdrnRRjG2gTIircA%2B4ANkyGlwDwSzE9eQFO67Sc1mrCWw8ZXPxXr9eYJwAfLilqQX5OdWvFG5%2FkOeYDaiHlTOEzS%2FCyXi1VtdxArciROdYZkUB4A5QPNoJYsPn5YdQUslOcJkif10ioQfYU%2BpnFret4Ve31cyLpOIOXF%2FA8F8mJbtjeRL490ZomjPAWQBIik1gY0pKFryft5juDhfEjvmzuFfTpxcPjj6Vq7B7P2oWPrhOf5Urydr0Ev6ILkPwctuGRh650TK7V4tVVoaptPEc6dn0OJkY06xOnb5cmzJH9jbKbTRGTFnngtxcMqCVhGzDpbvum3ymztCnGukLMOAA%2BDoSlWHUOmdKSHebvWDHtWoV42dnbt6gI2jeGb3ZX9dFPAHOwrEVozKgpB90cU%2BbTaFckizbbr%2Bg%2F45faYYeLztCmcYAnjzulMe8XwiWf5vSRuU9xZE%2BD2IN0829fIbwvg3CqswSxLzzpcC8CZZVfV7rKBd4pgUWwR74QwjkFpaB0CLzeYpqkXLzpB56BM1KxVIzmM2YPXATLtJ%2Fdl1EhkixS6GNPAYOWTcAqp3psFBPZtdfi%2FlOV97%2FfXjVDCXX8GHP8LPiYJIl1y8ZLUUlt0kohScQ78dsACYRkBS%2BeZuCrdE7Hh6sxMNawickGOqUBzCAhQHWGPSuh3gVJ6SCvlURwIggcuZDUygqEe6kA%2BA1%2BVmljM2%2BwJUTdtOCTzEEnU4eTBSpEFMBIUe0Pee%2Fxuo7VCMP7xf9YVh5giotxZiuLNMnSbXH6TyTbsNv%2BYQ7SjQo7sOZB3O7QqJZQIFNUU44VG8xRjlShdAM4el6FoJNUMJG3Ad%2Bx6mQKTEtwvcf%2Fgw4gjQ9vDjWjT7OjAq7CtgD%2BAtza&X-Amz-Signature=405d4ed531237af0fb60953fe7e20a3e6d4b6f75aab4bcc31f612a2ec231d1f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653LY3HDY%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHBdMVIndG6ioKAAf3C5SvH2vjIL2sBqrLsxmDrj0KZDAiEA9ABAorQOH85%2BzMj9WAwngLbeGTZcbmi4OjES%2BYv0FREq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCWreUAZV6gMejnD7SrcA3vBscvLiQhjSQcFSnaRelmqp57TMXpLzxcU6OG42bTU75iA8bmNnFzOAA4Y80IpBBV1fcr4lYYD9STBWpgR3a1lZ2IGgHjxc0QmqDzt0pM%2BF7Y8MfjquxfmsySE3orGXvrCZg191aYbxe2VMZbrYxg2JibztAETXSofwYbRouy57aXghPovs5TBjTlWpNKkQty%2Fb7z5E5k%2BQw6jhd5L6vt6M5UuXv%2B8V%2FITe99X0hQ3QRIPyRE7yCWNvLQ0LqpoHnARzR0td7Z%2BIGd1C04kPtxJfH%2F1zol1Zj%2FYxjEQj5xBGXVswgjWO3uobOFEsEtS5%2F2iWJxlg%2FZ3ztqWTvtovpc5gk34zuyTTKkQCRyo%2BdZt8HSMvsFU4hE74qsXdr5ngvhe51asF8aUxHW%2FETVCXE%2BqEOA6RepAiyPqS9ktxhZ%2Fq8dZThDnBgOw3pQYnuKYfKRGPLRP2QBx230%2FahibAFA3RmR2ylNf0limgo5qd4zWhA%2FUBBW87KpGCCcuTW0U%2FzyTJKxKdCYmpURJN6gkWs%2BH%2BhGJAvMWqnj5LSrUe%2FHL0C%2BdfOd8%2FnntWQLlE%2Byb%2FtQ9jqxmVXf9cTf9BK0w9t5dzNmBla2djPuL%2F0YJoKyBfAffTiwUnyjpyt64MO2wickGOqUBipSaGeBLQEHIsrgZTwftFSEuYu54eIu5lHOCOQDnUh35kNVhZj58sKlvSHGDVSJkQ8WIFKYRcj6XG8ysHD9lZIFGKaJQ4azSCyue4bRiLJ3awYYcmIJv4q3biL82vdD%2F1ZEcGQOQW0QlmP11JtW3j0MyIf7nPtEGFHALBb%2FdhzuO6Dd8R64O9HLb7DORk1iZatbM%2FbZbjbplv6nJrOBWP9Hu4w4Z&X-Amz-Signature=8bd697ef86ecf1fef7a3f1d9ac8ad31e065541795763a1f81138b49b030587d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI7NF4D4%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGhPB8L016Bp7W2bX5nCeOh8fm5EsMJiFI3bvS2mUJYzAiEA7I%2FI06uVQ1bCMbVoThQlIHU4HKAEcJ3ExMzU9q5jBqkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGGFH0sOSK14ZTrwCSrcA0wTITuM9nSN3pSU0ygLovfPoMPVrfMaWsILYv07c6BhGALeRlbtmYEIQJmeFBKPEWSAk%2FH5DMqd2C1DNxsU0oq4KODsT1ki%2FBlOLf2qH4dyiaoZ20zR66Btje3Hklju7hSuETlau17Bnmd5MrDWJJ98KahOBLbLbb9C9aPGaUK1VkphpgdvZsbjVbFP7nPW5wY6vd5gxbNGXfKERnbCqDaP8ITF3ZD2%2FNYSOOkTQEXgyHbo8fthlVsFITebCRoR0dsnGHp25nt2BV9CkfGonmDHdhM9EhNcsm%2Fz0O4K9LYeByAqUBL1Us%2BoDXZWtqiWXfm9nVWfR%2Fe7p%2Fi7PVgLeb3Bomd8U2JD9qBfiyAZ5rNlXZ2aUMsd8Gh9saP8tgxCBJvKhFd3%2B%2FxqpNLSivD93WlX8%2BONee%2ByMBHR5W%2BpMJdoZXmJwTQSaH57balDeTnhTrpTl3BFhgT19%2BdWEeDOEgbBdHp97UxcilJKTjdwCyIR%2BodP8dPx1Uz1nHDXiU%2B%2BQs2knXfN%2FjcZw3Y%2BYOl7cpTNHWDBPhTMDeTclAwA%2BO%2BmbYWjBWPAC2OiREzYOgRq6F5nh2Q0%2BjlyHT96yoObc5X83qkdSSzydeW1tW5lL%2BWUYhzPP5TihY8d1MZTMIqxickGOqUBCP9CXhhhxSPCrVohnNuf9bZx5Oy%2B1FRYw9fN2LWImbwes3d8kmfCXSsAH4sh%2B2zuz1JUeqod4iO6ShVtW%2Bk%2BpTafOnWhn7CaTfOq7H561z97fHEgYDT0%2FlBqrBlNu%2FMkpft0BWCxo70o7%2BE8HQ6lOUNu5d7HMSJLs9ujHa1%2FW9WwWdhG8x6dkalLNoNwhA4Z39GujIYjv7MSiT1MMGkEHgRDrp2F&X-Amz-Signature=f7a35ecfade80e8508a167f4d5a55c08394499186dbb5f859b27a3f72e7c1d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ZF5MBA%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCOFMOMJAiMldcpTONYLWprQPfwCA0J036E7DoVPH%2Fb1QIgaUcf5nHT3PqfZ2MKQqOdzn1H1WW79Fvbv4V13mxog3Uq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMIRUyukNdBKeftavCrcA4ir1Ls32DIxQOgupME5jZuUSGthQ%2BMG6GKGRnoZekldf2PE79kiOIqL5HOfmi6bHPQ6xYCr8%2BvVdMfaWBWM4y5V5je0u2xzQBHEU9y2gtJ0knd9oydalkoc2%2B%2FYWQKyTeuSoNUismwKvMTp3cLDwb4oF%2BmZcMolep49CdybmRt2D%2Bg05J0GcgitOu5KFGS%2BQyC8%2BliTBqhCou7LfIzQyRLJh0GrJKRgVvHbayxxdc8XhRNcVSImyRtv%2B4H8U8l1Lnwos9fIGFO4kidKix4LJ32teQlFk85XYVoHq%2BvYDn2Bo4u4cT1vz4aKMtGWWI2noCBMkmjpq%2FMOMRVXrGFwSz%2FwNnuJtwi6Od0OMba%2FpgIaSVNO54VRnrS0ExxG%2BQrYplUUUgxubNKie4vVMpGmO2yS0kaigNrS035LMGWqo%2B1Avqdx9jwk2F4aSmkwr%2Bwxw8UvnGjgK3eTaP0THHztWEJ2JmJBF8E3VUlTUgprHYZQ9XWLCS9l8gtSrrg095b%2FI%2F%2Fer9QYOwDHiPeREpLXK%2Fzaovyw2vigalKG8WC%2BvYMGfjfPkMfdi2R9y%2FHq7EGzc0Rajme1xpoQWUEgVD2Wx9nNwi35bC5B8x9jGjBuayDbLZkzK3wd%2FuLrtvnoMMKwickGOqUB23ujIIvMz4Zyac%2BHZeXiq0x%2Bt1zVcnojXc6knHwVYd1EdqWXjInDpIcA1znlgrOR6jI56vU7J4T3V%2FDfE%2F%2F7wC8U7xFzty1kg7Tjp7%2BlL31DLyMvyVhCsehVUiHS5HNgI%2B%2FlCJDx8Umn3S9VbTuiLhj1fmEzXDZxxvcdh7%2BEwbf58TV694JFm5EL8KgAYFbXo8WKDQGBVO%2BfImNaLqSj7yKPK9W6&X-Amz-Signature=b0492013ed1c07e1cc40e7905fc41e9dc097887407edf24217f51bbc40bf2859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

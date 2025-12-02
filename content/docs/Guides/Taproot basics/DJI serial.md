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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7LOVK2O%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHWWSLwHen%2FcA6T9K9jLT6Q5VQl75853%2BDRojZiqxpb4AiEAnnecsQlO%2FxhChgrZSkDE%2BAz848nTWrqvuyjiXtdkbUAq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDMvSJSdZ4qwoCkzENyrcA5iY%2FImrtFHI8oScdo9vj3CKmEt2kG%2BpEEvTEBHo2SDSybgrEHnrC5bUR0j0VHCntm4zyxOzH%2FHgHRGW3asqh7IRwjVHzzLyepJcPtuVWYDR8R6IPNdEqUliuif0ltSp0yh0vxHvpkxCIOEGwxuA09d1XszZJVeHFAAsr2m4c1KlKlERSdewbXyT87iP8b6BcA9srb9VRgALikZgMpTgIQrqHpdX6xbNIxLaqwkoZUFS39YPYUoC4evF8hLkVZidxN0QFvI6f%2BAKEwhh3YxCjFgoFmN4s2wB6Z3A9Kk%2BXQ86zjaNAklkOJm4SW4UZxrIPrGzZV1mYTnLw39pEIwt6dh6ypV948iJNjdt1fZk6Udi8aNVmk6o2khx6XJrtqT%2FpUqyaRzcFLo2YHX%2FnVCX6VmATjY4ALxTdW6BYSZC0AsIVXienzgqDkjUU9fW%2Bxo9BGjd6aOp8U%2Bel8JU4vfRpYYt7CszPHrMYvx56S%2Ft%2Bf0lcbMf0AQiMavVVjOFNOEiK7nmAJOrqgjEJcjKr7BEczYSxayCe2i8xBt3bf5dZ%2FOF7fvgZFEZztPnqWXvuJJpVGR8vpx276hNihN4BvA5s%2BOGLAYE%2BoiIpSEAaQG2wyZGqaEpzvqTo0Wp1m8YMNXduMkGOqUBdYMQfIUHh6KJ0DW1i%2BA9TWmWl%2BsMulqUjYf40PxMOBWMDu5T5BnCJnSaFTTxAownkRTpILWpZ73%2FYo%2BvCUehzlT661FliC%2B9C0MiPzXkUwk1gM4wlYfy1PHdQ2u%2FF7tng%2BlVWwq%2BXnMUOpvxpo6IOvPrCfn4VDkew4wNHqmI8Sh0t90zs6VfZGWmFopNhfYLCRLk4jgIjtBRbA4tiXUoufC3rgOV&X-Amz-Signature=49f7705a6785672547618fbcc9243be8fa8ae5ef745fc1d4aa5e3d9bfd4ca7ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H7T3XK7%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIF0ZEq8B48yrYC85Wi9Uz6g8yusKx4pC1tlzY74QIenkAiEA0yoO0jtYhOft7N56r%2FqonDjiNskGRIy3F3xoeT3Dygsq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDHQOoRDq9zDQS8W2QyrcAwFAuxlSSQo8rpCUG4DuE4ISQD5kfIkbGPXP8yacHUNCvSvrMTUzC%2FMsalcJJgHQecsPAuj6JKcwe5qNB1s%2FM0tLZ09ylpbP4%2B1PtJ%2FB6jCakbSMUZodRFvXwI16O2O2Lc%2Bs7Kvov3glGLYVdir2t6Jy40pogSntgBPeEwK8lL%2BR9fUrS%2FO9lk3ujZk%2BDXJnqBGsZChps4E%2FhEjEgaPJ%2FSMFgZ667j9wvx2DuJUNOkddDn64kJDZY9qbSsehwM1mJRam8NLc6JILdajCjzRzjrY5LKZc1ipo5wi7x034AJoOsdTjxBAQx%2FsXIukTCJo8AappTydenB%2F6Z65CBdT%2FAFbJejhnW8gpZUp%2BpLb5ZT74%2BQlVFGMbpO%2FXMTxsieai37aZrw4vovMzwXSwgZwQmlK0EV9xGrMsy4ybm%2BmgUtNIeOu3yx0X3hwWyuM93p3EugCfIaNGUJ%2FXFK0%2Fwj0b%2FNKgL2Fzi5iROYkYDsrQnN2tMoOJKRD4IFFxyGJXJ%2Bj9%2FOCkzAXFrsS65xtvuxU05xfWPUCDWCjy8d9v%2BNq51hC1JrXsm8N6azE9wjTFhsKGnME50vdFTz8iH4EuVXqdv9c%2Bv2C%2FmNcPV8ozQA6HFqL89XnmtKgCUg1WrpFoMI%2FeuMkGOqUBFijpZ8fU05QtB%2FX9ikIacHMjCx5gVJySyc4gpHmsc847yzBIdaJw8u1dmYy6bcWsFjQi0smVf9JN0rKgZ1oIvC3uvLV4HXxuMvvo7iHICiK0IgLR2FhB7C2%2FCIfrf9HhgkKnT2PhlxJjIGsFzuG28Kt%2FF%2F64FfrP67q%2FAHMeejiSZJxRdOB8tTpZF872zabKqklqi92QF3ztUbufzJ4yva%2BOY9eV&X-Amz-Signature=b7c05d1de73de1ec7e0c91c715b3c2fea9fe3f2c05c128e9933c73f7b4c0621e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7F7ZKIO%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIEIZ8SfuwuGRHazvyKP0rCuWrN4WN%2BDldqpztyXrp45DAiEAu12hc9sHEmrNH4MtU%2B%2FF98lMoPp4NMSxEkmgErAuQ28q%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDNd%2Fg0oBTPKPPtNtnircA371BbV%2B4xa3in8M5Xc2nfOFyyhYAJqlSzAHWuU%2ByS%2Bs13gzUqoKJwUsPR8R3Kxu%2BavskTj4E5eUqUm2TS2EOKJ5ZeNma2Yf1UKPt46Sjxdg1Tlf3KrSUlWxw9d31GBZOKxBkaKkruMqJoSCcrrgFLLMK4Bm%2FIrtQmNlo9U2c6qwWfb5cnbecq7EA4On1%2FZ7pMTY5JGnCCLI9O0AMMraqH3mME542v0noyK1P9tD0cDuSVZ%2BVoi09bgoJMk6pl%2FiocYwY0bYqmAoTHvblgczjmbmud%2FrcZ%2BzPPKOoAX7qsuzOb%2B1nA7WRuKaRAFggn42mv6O40xmoAhqGo%2F3L2hjws7rq6GP3PdhW28cxTucOAkdHY06UUdd12ZWHgyvAnd%2FsBwVRnYZ1ivO6rgFLYMZV4a2KVqTY6nK0sEqCWTt1C10U%2BgvWljmvFoKLSIpABdBU6BWuKLEGuqfDmDJaMrhe0k2Zrg%2FYmPkPIkTlJyWTf7eMCoV3YVq06MmOnjX3FDhcSldAxuMJo93s20OS89ePftsxewbz2gy6Aa%2ByI8vmD72o71LsYHiIS6E7t29NmMpLfI9DPwqR9urHARdYYd8KQYKhfFvviNlP1fFC25RmgfOK4LzfnI5pLp2ZPiiMM%2FeuMkGOqUB5BUQJmOkC01BwqR6dyzSb7iHIb5T8AG373Z1gaNQL2HKJ7ooNmpDtvnb1PeCxshwE16WVCsqjOEhBnTTjiBTSHC8bfouMfuqtLKZ6qr9HliUBJN3%2Fx3yg%2FaQbshQgI8IPMtX7T7Tjjt1ElMBLi4U2sv2PYpkblqz6g0YXLAUd%2BocMKaqEUh%2FQ0YCrup9Evnj8x9c5H%2FDgcwpQWaKOhY4EHh3ozVl&X-Amz-Signature=6204e34028e545ba086e1c015a2cc338d5156ddc04bc168ea25fb671f7b9adfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RJL3KRJ%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDRKI8yjmgaq2aT979eGCYUpqVO0HNilqLF3W%2BFZh%2BZWQIhANdoN12hblFp%2F6xvyE%2B7gauKx3w8bpTzHS%2BQDTvXyNeDKv8DCAkQABoMNjM3NDIzMTgzODA1IgydQpiL3rI33Petr6Yq3APJb3%2Bh7JwO8zXOX49A6DADhGgPUVIfA5JCERTpzXv8fdssWdg2IRWlXEGhr7ZMEWEFkwddxiZ4Msr9KgmUs0UGFIYnBDyXKpwJB6tuwV8XXCISKjHues68eRNipyFCtnRfGm%2FMMg6Macc9kFWEAXGdwOz333HqUcEIRElnQU4I97nK5JVGeJvPOhBHEXR%2FrH0ymDu4%2FIxXsRx9omL2X%2FSLOHtflA%2Fe%2FVmRybtD1Vx0Kk0KDX3Olu8osvHNjqdawBl8QzIDCYbFblzkeEDMFBBznQMgkyFLzbdeF5F5eMtFGlNhC4fvDEupvuQQHYF%2FNkZuxhTZHBYxYoNssaK8uMr7RZ5iLwf%2F7Xh5yEF27%2F1cQGRMyP0g6TeMVdhdh%2FDD7dio1EGMje97OMdPXYx%2Fo%2FvfdByDgYT8ofYHMs2DvNg3oh4XHeMUs5Ouf3BzCAKvTceBqw8uZUkcYnFM4vQn%2F77o5b8U7qv%2ByRCFP6%2Fk%2FOB4a0gON%2BSu%2FPZE8thSnz1WK2Y9rnYNZpOJPjmvOzx2tFrCYxdThBoqO3%2FPEjr0YVIbZpJENtV4i%2BLb3fVgGTy2y2YHZsFAUcQjDBDCmWVEX4q199YDxKylDRV8QPYHEb8twc8%2F6w%2FaHwbfOo29HzCj4LjJBjqkAb%2BATjo9JQ1Tpe451lxywH9v4uoTAsZwOsor8kYWJZJiQtyFVJNiandZ9j14vqrjBDoqWes0CPW%2FqAMomRRsxHORf1tEJfw5a0Z8Y0ZRA4dJN%2BKQCtu7tMiO2iWAvzwrKVjI0VF9Wiv7zD2fC%2BSbWRjbBBQFM8WCKRqbvVxgdl9y1UpSnnXGWiauwxJmIUItxYv395ZBb6ePhlskkbf59CrZ9Hm6&X-Amz-Signature=637af69c2f6c59543d5ed9cf044aa28c7d70bbd5428aefca495af0602c843f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

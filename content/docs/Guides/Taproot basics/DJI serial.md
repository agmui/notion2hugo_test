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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HNOSD7C%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDUbZUrUQq84kHdY3cEOEzkrGlbzbESZRjba2vrkNxGowIgS22ifBYSXJzTyXFMO9to4O3I5PVprX3dHb0%2F7ZXEwKMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAq90HBI27WVt3eHWyrcAyWXri6NbDv%2FhkCv8Dw5H%2B%2BBR93uv93MpnR4r5cif0MwfmdoNeLGOeb7PtxFMNn5miw4%2BhQV%2BAKsj5SZNau6Muah0DUVV0C%2FdeucG5uBvPGmslFX6b7wFBlLKGqmXvul80mSNxfpe%2Bg5HE5%2BEuOKe6GMbyZfxakwU7Z%2Fcsqx6y5HkZzUtRVaabGdOVJVmSfTXlUekeqd0756aXK1xhimLNHLFIErSRl4xRiFYl2Wi6fmbyMtjbltZiIgUsKNRU%2Fp5d8gV16cn%2B%2BgngJD0rjSUNFRK0u7ZTjfp5GL0ar%2BrkAq3JUU7twfZ2Trcy5GEc%2FuhlDN1zDE9ZQ%2FDntos7NHhkXPwzBFidTxIBfsuHdDsnDeKv0frjkk8X7ZS39UPESajQfXQ1PIbBfW86hOUXIyBwwk%2FeMclejZ9bmwk3L%2FpBI%2FgEpRkYZDM9tN48KtjwAZTa3IGhFhcc6pxGkSDJ6wEZZejs%2BZETC7iiDnzXEUjNM4nYga6LxQ6A2MDCzAyfV5KoHMSJDhPljPnNX9VscsFXSeERXoHiGRf75wYtOlhMROLYNqkPcOmtxOmzfx7mJt8RZ9YnSxqEGHS2yZ9yo%2B8BQuMck6EJG2GuSQD99AOBrr79Az%2FT3Jw1SqOW92MNSooccGOqUBovvrsoHRsTzX5s%2FQNeSbMHLpjQUOpcryROL3jZe4wRAmvHGFiPNAQYBNEUWCFjlWIttIO8KpJlkIZMNxTb03RELsBfgrWCbX8%2Bltw%2FTj6iX3g18Boi9hhf7RFGmMVuuuKp%2B%2FWaU7D1BXt8%2FXKrMEW74zHQnrYtVXJox41Z5c30SLXFSQ6VMBo8rHhx8S3NUgQcjHg1maqfXxvEDRtusALzCtmglu&X-Amz-Signature=f88b2eddbf4d66dec706252de5a104a73f10382aa5ec8ede2297a76fe956a474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BGMFAXK%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCl3nZjDnniAukRzISUKt2TI2Tews0D8ECxzQx8UVuATAIgRtiOUb87ZGBZ%2BIDLyQQRlMHfZgRgpQ18WJsfiUT8ONYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BlYzr7ycG71g0VFircA1yvuWtlvt0lunNbI3RZ%2Bpb8wsNh9NVi6d3xwXvhvG52wN1K%2Fw74%2FMajOQAiZf0DpDuSbLZQ9Qj3XWZCJZbTxvySb48lc9C6RTDFLab3BMp9r0RipL4ja1AJKtGRcX3A0rOLFviW2OylhQi124q%2B51ULULIphRCU3M1dfgfKl13lY1SON9v6WG9RxcE%2FlwJGrquBUmQnX%2FlFMaOwBgFXW7m15FKgnc9%2BByGyCrPzOxCkawMZ9JouRHUpCX3Vwz1jL%2B9p4u%2BHcdspPYWUegzi1lbEziYC6B10nmDPeVi2W4W%2FqnZ0oSt2w0gtqGqh8Djbbs2xA1XPQFLePd%2FzL6%2BVYlJKLH1yCykruU0KSnEtb5uQgQ%2F%2Br7lBACxM%2FMJ%2BmsPSFvYLzANHpxzv77cdggpHnykEPkuXM6DCoz0Ze3yoMtXEt5zL9GQl7wGb4cfyiGXV9VUx%2BOkwxIxo3aUyvF7L21rQQJZocrZK07IC6%2FYStwWXhQ%2FKrsjVHuj3N4gmNNeKSFqFXE698dMFbCci11Bq6D3BmkZU1TWfulUXKGHrajGQywvJyG3BlTh9etzY01aRSXHg04e5xEL23OqiLRJOnXtApHNS636HXpOckHzgqV52LX7dtNL8br%2Fi66TvMMuooccGOqUBobV%2FP014wcNZPqkz6rWKsMFJ7AkdAjpit%2Fn2B8pAiNXSGaRkSTDQ1GS7mW%2BL9MJEKzdP5yeRxMb9anVGbdRYZuLdnBBozby1j54eAr0q0p965d4OUorr2EqjkJ3P1ARH%2FIPxt7JSujnQBwEfu8dsbfTZE2yV1Vld2okUc5YmcyjkP5FggQUlB74t7s8SMrv9f%2FyTyqgGq2jUSk5bsVyL%2Fn%2BzgY2K&X-Amz-Signature=3c01707e404cbea63775ad9e3a73ad1d535165b537fb5685323836f44adfb0f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U2JPQKW%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDFnqop8rX9dNrcZ6MUnpzmTVNyWYBmHFekXo4%2F4oR%2BPwIgICHumUuUyfAgBhx%2Bi6ViIkVv8wr5Xm7dP5W%2FG4xQtVoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5%2FIgi5mFaksVH5SyrcAxjcT2f3l%2FXgXtuIwLzeXrXVjT0f7PnQNiAp55Y4uEUJHN9SDcRaSMMeuIIguNQ9CcgVMLPok%2BuZQlREZdOjHqRVnce9Wm49jG9zwjjdsnIjsfRJNXJ%2FXDHbKhtt14WNHB9BEVbhSb70h97QduOmHUQc0Vet5mCrAAWqlh9LB4JUUFlCysYZdzJsaiY05BsWo3CL3tZ8RagQRuivOkTs1%2B3iTQ5YPF5Bqz8xbBWwvkqkkXVYJ8Xhc3ZG52vOuG91uSckzMbPjmfBPDT9Q1mWP1E0NwekWnXHuIRRfbUnFBt3tDaBOI%2FFD9d6zQS01oAlVhK7lNOxHhazvfyQUlTKFPKzHRFUDZFZY1u2XAFA1wJwczGGcsI9ha8vd%2BsDmVEhUv24%2FxOwcKCjatgfLrzJNMqLk%2FcmWL29EIwCVcZ3dw6uGeUQ7drUwdLId9uSyAMDmLww3o8xAPdmH426KAL429fjMYapHST4W6rIfqC1i%2BqLm8BPpTkmNVQgb0KNCypVrlrnxh55uG4JmDNGOuH1L2yxDLmpU56G%2BRUCJCguo0RIDQIPiCxioazF3zQaKfpfGvSWJ6e2a9svwVrTjvc4oxXIgTh1DEW4H5MPY9T02Z03hnJ9eRtRHT6w6RATMICooccGOqUB53LNJCz2zID1fhRLi1GGqW4CcSaLX3VmChUWmTV%2B6m9A0CQGLCe7%2B3WDKE0PUODYziON4D%2FYz9bWLysqLUwY9q9o%2BwBBn8%2BQJrfjO2Jl3t0Y5HW4odQta5CiY0XKqlSI%2BJBoz1x8Lrk3biMRblbqCVZMKwnaYMQgUdcINLfR54XI5b63hHG4ooO2ilTVpCofjpz0L5pYOHawY0dboXNf5yUAq5fx&X-Amz-Signature=cc830dfa2e974fd62d307d8a6823eefa42733917ad181eda493a72d31d6cb348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M4FOZS5%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD%2B6HBAocrPgr3sLi%2BDGQSssDkOFbk%2FR3qWOwoZpcN%2FnwIgZVFtFlj9LHGFRNuP5QmAcJ5dyqzmaE5zXFgpknhED4YqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9O6ouyPzWZ9nGDOyrcAypRAGqilerQzDRA3qmax1xifeo%2B5lvnHcf1K1grOLEtxdfRPUU51e6XE5XuwAzIqI1F%2FjlW8dZ2qd0OAeJWZ8EZBtJpmsvv0TqPgS%2FVd%2BwzgGiGx%2BL%2F%2BNitmccvUHqpc%2Bf3rs8UX4K%2FQAv5LGnvyibvI1SSfnCO5vfZoiVAQPV1DStRJuOzro6xbVqekLwRpgKx7hNbOTtKa9z7%2BFt0PAlkYsFgDXRFyKhyDMxl2Bbv0a68i7%2B0fv%2B51JDjJ1DI0%2B3sXIgdmF7sBsGoISkBdW7bj9HNGd3mjXfzoI6v%2FETebML%2FmpR5iDpE%2F8%2FKhdJzTp8cZiqEW2EUdESWvlyzl3juWd4QZxlwftEFJH4uotpTERAq3M2lOyLUVlCjbXGsOaQfEps1TmyK3zlM0zJ8iB1VONaEVdLzJrN0r4QEjTkxwYnK9sTSsaUk5XisI7HmHUv%2B1FQG0eRETuRG%2Fp6sSPkVEfoXdELSZyW0rrx8B2%2B5zq1bqUjZ%2B%2BsZxrJKiFt8XzMmCV2RyE687aN5IDjXnyZWB7zfU8V7prR11PVQHP3rIOFG9kSgBRUHwSEIE1vKvc6t%2BeLP9XrXfTaFuYZYZm3bJbXMLU8zeVHg%2B7OTRxurJhYVCywNUKJGbklPMP2ooccGOqUBneGl35GDEl8Bov%2B%2F2mEOc3d0kCuaBzLboJFU%2FltIiyp15SEgld%2FIZTh5mnzFQ9Id0OwjLI02EI4KccnW64siKi0L5o43Q3WsxYqUtflFvh%2F0bHlxWlo3W2RQFMRb2tNnlfphz0ugj%2FJ7hDRhMbCT%2BUT34LEUhcYYvf0IQZyrhexbH3aaeLEDUmZ2%2F%2BhV4j4JvXpbl9EiM0kxIk3PK44xVWSzk5tK&X-Amz-Signature=586f8fbccf04a0003105b5d94f8b5d23fb40436ddbc25a88442568c9787fcfa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSLHDAOY%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDbsKMF65TfasenC2msvn15uoYhTWr9NvBWVvWs4BYgQAIgMN2Q6xTx92wYwGi4xTf3cnpAXPhuebmIbprXGhUDJygqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYjSKOZeyWv%2BCQLaCrcA7b3bxZPYvIch9H8T3cZBnz4TamB4yitVTHx8xY4PCs%2BVPtwl60kkRmF0s5CEfkxe4X8R28lBs2fKNBFcY91xWNV%2B8cXMnr5j%2F%2BrxR7y43%2F2bTluOX3xcR4Xyne9ZxST0sSZMMzzIg8cNWUxsd9%2BKrv85X1f8QCidD7ZX9G%2FwfLHd5QxuLI6xk7706jWCVb2ULt1wxcdkeZHQyIrqL4DNVG4Jv0CFntP7wy06pIogf2%2BP%2BdIEVdlS0fY2qHpH4Up1ytV%2F0iakXO6YnrdbnnaSz%2Fx5xgIDGINNyRESpRQ6AmNFWjHR%2FOl2RNd0ikxYHRKhI9M8CFrBe2SG%2BWkN5lcpyyp3U9hTiMfuZUb7WauoshshWqxEgY1Pd6P%2BZTQHWXPHJUOOSEwZQwVlZQ6p5Ao9TjFzJvChCzqwdV6cDjkCFz%2B6ibCCxpaxwVzd4b47s%2BJxd1cbA0wuvnW5pXXD67miMUQIzv8QkPu1QdxaGCSN9R1yeLUIWkBKPTHVsSKYPCiCFscvuRhR7sX7JDOzCtTQDL3%2BvoXviEZ5Ba2X1loy2Fw0AoKmORiArck4O23D83GdqG%2Bz%2FZuu%2Be7ZeY6Xyqd1HuBvYRIwWhKBgGxi6ZSs88CsRzvg5LYnOy0D6kqMO%2FNhMUGOqUBDj%2FxG9nMwq3tK95zkhtzIR8vf9kCejmRxP55yMG%2FuWfpj9BPX9mFdb47WWvH0d9DgyU5swYNxJVwOXSJvpdn1NWfpNMbVgZHwui3XrdbMGv91ib%2BHfWCVmahg3ERtRi6Rm4%2BQu12dbY3N0C65o8%2BaGddDV0Hox2kPCJoi2lMP8pm4jv6qYJQHxBMZnICpyvsKM4SIptq9DKMeGWO5ysInTbaeC28&X-Amz-Signature=4a9f8bb4dc4eff03b6845523f862505825c9e6aa7970fbf37a30e9b2c9019da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNGY5ZS%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFaQ4EpARppBb3wOERhED9eofKexdwzH%2FBr08gWcUao4AiA7V84pRybSGOAkgMTl6wvnqnz8ItGYkwwFQAms6x4i8yqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1MHoQ6s619N%2BpDliKtwDz%2BB2ysc9vXXkFicdGfSwSFKnJjqVCQGvo%2B8eAZmZzkmBMqf7bkFSGzooPxidUAKivPUtcXSoM5Fvis6eyzCgGZw6aoIzkV2QUbyY9KR%2F9ik9wiK%2B%2Fo1ORuKqRH2fbn5jKxpCsTW9IL9gPe3ZbswHWXsQS%2FfO5DQynNJ8VkdOUCoQfhPCGXwpZVAp5801fp40yvdncvcdhHa2Cz5QfDCoD3%2BjRkBhTjfpm6d4KNfMsl6G4sLzzqMSrgaVYzAGTJks3Uk5wVz2XAqh3HU3OgPWVXNVCMaBjTCWAK2Dx7rNaLhpAaOIMtgDwO1AP1DfQ6e94660JPbU2tbC3x8vSn%2BMoACj9kCSDOlESvD719bu%2BeTuEMAfFCJkhBNa88iv%2FLoWskFog2rAsFLRkSXPj1I3fBRJZSfVvh2JHJyCAqgMHLsao7SPt%2BJ%2FdTU7cSCs9xg2wFBTKQsaio%2BSC6dvm001s6kzH9g9YwqdMasOUXtcWGW27Z%2BFKoJRQY3BFfnPErPiy8gvMAZ%2BSh4HrXYB7x2bjO%2Byu%2Fwv9%2Fbnr1u2jLa3Cuzo1JNxii6dBnFF1w6dpzH%2FonoD6McbzMZ0AphVSdbYhKbCr0E752FDPPGKtEwo03bpIeIKRzV49sl8%2F0Qwkc2ExQY6pgEUBA1EulZYrNtWC3wjcPqQFu7APUQh2e1GU6v3BGJaNQQ%2FV%2BiXNSLT81LtiHymiK0UQimp9H45kicT4yeFJsgtnbvDeMZ503JEQDtneKgzB2jeNisre1Vlar9be53lrSbQbmGq4lFZ16xjIotC8HuBapWYkkeeqAaJql5i3LI0%2F%2B5PIX7UpSXxyNNWLh%2FkVddyrJExkXN8tpmoKaxv48Z5tcwdYqhi&X-Amz-Signature=7cd5902bf988f2f59e374bba31bf346deff7ac52fca8a682ddb9c8c6d5ef8eb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRFOFXDH%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDx5OwAko514ScLJibNQpo4zFTmp%2FNCr1dAN9gdAtBwXQIhAMaoaGMahAqtpxrMfQzX0xvN05Eu1VTEl3J21TwJZMdvKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzI9ePJtc9SvGGLpxsq3AMNJKN1HxQqm287H2DISK74DV3GG98%2FWksgkUZ2eML7k7Tcfad%2BocSulFxqtZoIMtV8%2B3Ey1JVSAgcUnvpCmR7KsWDYZdockxUrkUPjhAD74MCYj%2Fs8ujTgnDh%2Fr2fCiNdpfrK%2FPYt14Lphfm1AGejyyeWMunMKgxzljj13iLDjPSK9qzZkOcA6GusAYgrYXoDGmjKNc3Zgx4Lw%2FKbb5Km8fzAHQJb0x7w%2Bqas3%2BMJyxCQMCOCPnMKFRKGltQiIucLD1L9EalkbGwW690pcz6ZQNeFQQUWZVAYDRCBiycS29xvMEzTI7aUBau%2FJ4Mdn4e8K5y6IJu%2Bj6EB3gJ6IMfzzxGljkA0tS%2FYI6xgS65Y%2FsDGxTgCdoZLpFths%2FyLOl%2BPljVjk9Wd6TDgrY2ZuPLve2mrDoltcs7WOBM3gY9zzNl8UJoBg2VhZqXbjhpetIKJE0h%2BmMTOZWZgHFDEYfVrA6HBzEaj36chnEFNKdEx9%2BwXBrmlU5bddgth%2BNtxRCG9QbjraZoAhcd66bVwwIPjXvEQQ8GSHM9ghhJQXRrlpvndr7NUXZcGUsCmjK%2FY2MSXOC%2BrulpnzxSn%2Fpw2kSEJR57Fdv0ceUce8j0DuEl2vCW%2B0uzTtoILsrWd85jDFzYTFBjqkAc56xH0Pxq9gq4%2B1ALI9VM3Fm4gdlrmgTvBmc43QB4d85WVa0IF72E%2BcuTjz%2F1R5sxdiPMS3vDMWqe0Yzd3as5n7YtQOTRmjPw58gdVYqOBGkeyrM5qt%2FVSLdYrMq12MyJkytrt2yfIqPFrv%2BvkC9I5JA5RlyKwe8OfKwgnOMr%2BSi1Pki%2FMvgBbienYC3FixkxkyoTcHIFY7EfGNB64qm6Znyz74&X-Amz-Signature=c59fdc3fe3fe1e7889951932da6c4d7cd1d4264171cd13936569591464f7697b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PLJLZIO%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCv0pIvWfxL9t5y8coGIVRmX92WM07MvogNSu0yy2OiaAIhAMQychYUbBuYBEw%2BTd92pAoP%2B7anfLe9YSxetF1qUXQtKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym8fdcc2oD8kvbIUYq3AOMHKqmWjtBSafy6Wa27pxoPURZHpjdjy9EO4MJMDwLsNWbZ92Kg8JSUy0MB2ndDFJrvb5lzrpgC2vU4ogvwQ5nxxAZxu5QuTqyu9sVNZZEH%2BEPGf1HH%2F3ksZA8szhrjSwlHZx4iT%2BxqClsmJ0R0bxfVq0GGj0lGhG5Xt4R00u1%2B2RYJPHwSqeT9yJc4K27p1304ihZGx0btB%2BH7i%2F74XR4dDYZqnbsX5Uhz4fccg%2FmbH8C1ppn9LWi9cRmjPattN8WOf5oROXZqJdy1PvuE7L1CFMol87UyaTjMxWo%2FAZ5MCfAhRwM33oe2ap1nwmN%2B0fRJbtHDoeyPic2TTZoylpGmS%2FkhZLKVXmeEF5unoKh5HuJIZHAXEa%2F3dace8NLxZlOCOrfDai72kom%2FmUbFqH0GEuTrRHoWVgUiMvCQ8jNTwFwN3uNW%2BYWiH03%2BX9CX2oz%2BerCbPpmlvQ6YUIeGA52biOLDwsunTl80cHZfny0H9DTzfIf8%2F8ZbNT5mJ7jlqDuqn4JQpGve9s%2B2Xfmkg4Qn%2FWoQT5VyP31rOUijNZNDtOVFKzrsjv26DmZmsSClMr3fSzPS4f9kCHXUIMrZZbPIdh1OXuGVsg37%2FRFHHIB56FFrFPg48yClwF%2B8jCBzYTFBjqkARWq2ZfCgVC2jyeaXnODAMGDj0nTlF%2FgKxAar1d8QoOJyiTf85UAHSd3BkXZMaF4Wuy4ai3TpdyId77WRdDagp5EVOWA7JjUqEL1xL18wcl94bpUO7KkDKmoAIO4Q39RPLw6x%2FAfnb6Tcf3c58h9f38K7e9JYPxMisuS6rSBVQuejE2lCb8oB8OcoOiu9nGc3u4DYdvHxy2QIVFqyGHByXf3lpt3&X-Amz-Signature=5fe8ba63f56a74f668ee01d7c20964b6b5ea1739dd1fca2e3e325a850af33046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FKKN7BC%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BRBfdKn2lPi59T9VXaTR1m6MICDLQgB97%2FaTAsHLcwAiBGroywwMwMfSxy4I5KNh%2ByHBCg2NGD3PzaflxZej2Bzyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMW%2Bl%2FzV%2Fvbav%2FfvfFKtwDGT9mCAaGc19K%2FkWIKwFBHXdb7QIEjei2Eldu3sDcRMT5koHq79hH1TzSfOsFLUZkg8OU8QuYZ56OSwj2iDJuWAuWPFceUWNCVvnUjMdXJvJhpuG3Qael3QR%2BRY2jdu0p9xGkNA2zcVRAwJP5ppWwtBEJONxsTVOCJMvRmeHFctri4FNPz6T5OGrTQcgfmovGpVPiHyRVeXmcJAZMMlzsaAQ8b2f%2FzS2eqcABf1x3cPc%2BlimiZV%2B3KSaiSrDxBNJcNT3gFi7b9FCDybaTo8tmzq7joWgxUnfSSGylfakCygqO0CvPa84Qk1%2BNqoP%2FKqoUlh8uUKK6tmpiCSgaoNisXZbKghXj7dV%2FAIM490asqd4AFrpUB9GevYejgFPmLgyHYQgNHgoHbXZ3HYbtUFxkbhF2FTvc3EWp5co2M2ulduY1xgFBXtYJl4thg66ikixMW5FDr27RvPIotgkb4TBLfkZiEseVZEUFCqLhl23U72P84OUMEcPzR5vd9nFC9vh2rxwgReu2tZss91rI6zAsf7m%2FxWSi7bXyurP4MmD8m1WMFjdCKYsOkVHZ%2Bw5JZzfCLGvEUbbXXs8%2Fw%2B8XU4F0paDGbuV6MTrdo1xW1LwcKp569HJlo1jz69VdBRMwsOTBygY6pgHRejHz4oDWE%2BOcuQX%2B1rHu%2FJ90KFeRu8gVYp5t%2FQUa5HAaOpfQOGqqX2vEZTESHf1oHIjlVJDLU9Nvp2jcaeJiH9cbughVn9grIIvh%2FCVmei3KlA%2FvXXtqLrfuXhe8cIOnPxBxCK4T%2BueWuXY8W0OMKRJDDYy4TM2WB44PHOiHZcqAwkv%2BA0xC1Tt7CVvhTNRKyit57hpbIjWXM0XF8geYtLdNacNG&X-Amz-Signature=4bab3e094a1cdc1af83cfcf48aa53251287f9f5b615734772bbbf4c7e47a8e28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3LAZ5QH%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXd4GyIMP3K8w1vkWphRHejXBftwloc5pKbFUV0zpEEAiEAjQf21S7J5fIAAtgUh47lONpQPaRO%2FEuR5%2BdweDn47psq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDMXxallOji8FATpZ0ircAy1%2BTtfRt0HSFqaZDFSZcwI%2FkODioBBrQaWHLGZ6k39W5dnAlkqWsyPnThLrWWc0Y8AYcYF9Pvrz5kau7jwbp%2BDWC4OfljMuMBjN25qy9ON5vcpzbHm5QUulbB1mYOeYDIfADDkhKyGb7adt2QRznjgwwZYcQlAWcHuq%2FsISEyE75L4Np%2Fd%2F4cHCI9Ygh3T1yCQTY%2F1hTh5yCw8j27yntazIFrWIWoYvOIkE1zEcnFK0zI1O4SguBw6o6CIGTij606pi1m8mPksQ1VpboH%2Fpqu9z64ckx4FjJgQD4Uie26744Q6PsMQQO10Bs4oAlYAk8uTdMxDCkdBRu8Ne%2FKYyWZyemZH17%2BnsNEU6oQeh1ofvZ5iHG9N0aqwtOUrv7yx8gYlLAp8i%2BSsEqrFdfpjIrZTTnvYoTFy9Uhc1wPMNzkwRaidP1fD45qval4Sx%2BmtpoxK0lFLehm80r5a0NEg3gL%2FUEeCPA0o6f2TMz31fxqeUtIN8e9JYQvRqnsb9d6cNR5XYbTwwrNAm%2FwlOUeoG32exeniSr3LQQ4qcXzlKk2fqSzMQUAKclJUG4HxLm%2Bmb15VxpbAn1FXGceb3tg4lbZsDFhAxUjwOiRJueIxtDOudwDaUsppTxOUmlu5%2FMITswcoGOqUBANyp5wZzmGAqxUSv5OZCWeR97kbrqPrEpyZxXHnWWYGJeYaYdmKvv%2ByecwoJW3OaNpOpMfAOGRKwaErcR%2Fa1Zd7lFnp71fIklNr%2FeAawvuZP5AfyJnQsF3kKbTDrVwf8NMLt3dRjRdkRIl2u3um%2FAYtsTSg%2FTMOJZW31%2BoyKnWQk6bD1WFV2MaErTluzeFFJicqIQVsJlZJ%2FoK%2FwIoKXDMlzTSJl&X-Amz-Signature=926ebbc2da66bf764afd2fcce44b99e5f2b00b9228e44ee6fc429b2a41e13429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDS26LB4%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEOdpz5sYkDbQA2ceZQ%2BqlT6HClPbu4BxgNCceXNH%2FzAiAIjKGkDtmDdv3ybtPmZrBFwP8YrVifpnnDUnWOF5wmTCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMy0sQ%2B0mlodbtRmkNKtwDYH%2BGbmEoUrcOXwpAiqUff1jvPohpfkCn1FKPaecDvx5vhQH2nF1pJIPfIELfh2rbmA0ZMcyGV15ElKZh2OsW7svfSpUqIq7Xc2IqfIVspREIkvUwgtLcVhO13hx3UQZAzDmwSeBe7hGamqalXJHN8sP9uVmmr1H8EI6fIl48WysCHeFT9szR2EPRvCBcA9AkcrOUKFpSHSTpDNVK%2BbwsWsB1UbEsxX9S6iSUx8SDGK5V7jU1VDop5FXmU2mcNV02dCu4z8BxTgW%2FpWZAp0Q7%2BHU4Sa6Q2SBLqphh3xarL%2FEZPgs9VpXT4zeSDXv3mRd%2BGf33fZ%2F1K3dnvfJbyBLeHulgTfa%2BDgPWrFX26APAGyU8%2FMfUomCV%2FCN8tDxowoOj%2FrSrFxteJJqz4So4jkntdoJ6Ytojc4DslGJhNgdJGe0nWpqgNzc85MzRZTy%2FoC2oOP5iHcJw0BujCfn9EzDp6skuck4%2FO7OrYsNUnJinYPLT9iEO%2Fm5pXAdghm%2Bq26d12WQd%2BIscYB2E6vTCmM9eY7TmjyYhWP5g8M9W4Hg%2BqJWvV9YCujsWMx71T1oZlVAjnGLNVISFIiVKGF1ecCz9j%2BN1yEI6TIZZ9Jzd8Wktq6W3QmkVIBs1JWjowAMwh%2BvBygY6pgEXk7wctEXQdiF9ccOHhZxFKzYpf3XSmpsB4b1T7MOEogdS1SAILZzDeeb0Stdefm%2Byhq8qBujdwMEv8hsVqelLljuR2nxeNuIZMkwZIGObibHWysrAIs5dmIWNbpGJ5DQ%2B3YUIn3ZAWW8Mj26j01e%2Flaxu9s1gNWfvaXcR8met7pBt13UoVf2sKdWbkc%2BXO%2FCZCPWK70ndgugP%2FOhFDmiJgjk5AGmh&X-Amz-Signature=8f88589ca4cc5f31e9fab3146d10a27ac470db38a420084aa8cb8cd2a3169650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWUMC2WI%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbtoholb3BkdFVCFsErIJVT2soNICDFxlsQcu9OcY7NAiEAv2Sjg6JwxZXkgPYqJH4z7ojERqgSq30BiByGrmWvV9wq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDHxHxCI0YZXE7q0SSrcA6EMgzOdrN%2B1EgXeVF%2BOG3M%2FfLAO1oAH5vqY5rTN23qtKUNWsk22UxWbUdPZSc6vexs%2BXSdvc3Ef9WWZdo8LtAPPxhE8C0TQVaoGNXKPKUcTKqO3dOj05RhJMukGwoF4H9q6i2SQ9KnEXLYs9Jgj3qVJsIFh51XEOFP9sMOAMjzjkC5wHMZNDeJhz97CBoA0B6SXSu6jdatDGco0rEQ066%2F2SbnXocBglkqJDJX69eeNy1L0%2FjVBDYeAxtwwVb78aySz6L%2BL%2FBzM0GkY8vInq73hsIp1Xx%2F5t%2BGvTFW7k9Q4o2tYtnUGChj6IXB8LC2d7KuwBp2NY8JXR97N0XAJ4KmNURjKBQ4y2fiLc6TZVZuQKOC2MskJG0akgD2gWI70YSEEW9Es2XIpmy3N%2BQV4XmpzHkr85zylqrpMAIZDmju%2BNp22g2iivJU6G%2BOzHJap1LsbMOI8vQq8MB9z3Z9IcvmsS8ND6zTc9onyf1QqUd3igvOCuaK99AviLK8tE2lAnVAf%2FtvOb%2FmZMx4dOPL273EjNC3iWjgsu8sG0jhzlslZErJT2GQdJR2yT5V0uZwdUjjV6dbb59TihEAVs0V1F%2B54fCbB3uiCa7uqNqcEaPd8adP0qZWQU3d8G34hMIXowcoGOqUBm0B5%2B0x6hKp5HDg8%2FtcIbtx3f2xFa4q2UjqMOlVwD9twZLjcDG6rzfjbSzBJYJMGDnj7R2Ki%2BiJL%2FKkUpcA%2B%2FilO4SCcSb6%2FwDv%2FRyM2Ru2YkMPlqPcCWKWvGXudpLJtNLxGPZhHS9KeaYVId075qF7dJp5zg1uv7JDpUlZ0Fpty7qFVn8blyaUh41ogdjBIYWF2vOQwh52hxH4AN9pJZz4QYjSk&X-Amz-Signature=12dc9e019f878712ceba539552b88877a0e7660d640fb9015d900c0750df013f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KMQILJE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICOmtP%2BniLrbT16BQT7Cy12mr4G%2B8P91aZUB%2FWdvbzOPAiBUVMTopnDSrYRqXS4RdyXbzTeh4Qo9cK1Iuwfbw32LDCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMzyPBqNnzLV6SmaH%2FKtwDDOooqankcvcnyXTr74cGA%2Fxvf87WKpNAFevb0wef1O3O45jAu66OUZRTXXlocuax1Rrz1nqi90LuZjOF5v24Xghdb54%2FU9bK01qjytKkgXkmgNah45lyzf3WFcJjdi5a5vxzsMsI2zpHNeRa2PqzZiQA2MimETPhPTI%2FkQB1PX1%2By8eY%2BEBn4FI7%2B25UTKTEFqSevVqDSey%2B3fkFungcId%2FXQ6jtd4cPfcXqLeahO9ES0mECRKb2%2BseEFzFQze9mEs3jphG1VcDLZrvkKpJxJg6aUPkYnjoaN9szRV1ZZFooulgFsgR%2Bgsjb5sOpjHQRcfXIxx2BAS8LKHA4QS4QXAX05CkpXgo3qMd8%2BEdoLZ0W0RzUR0qb%2BFWYkfiZkD6MNY4XK2cywxmU00U5BCfMzUcvCtznUjShmsU1Tu3MGZx2Y1C9L8vz6SdmbmNj8mrj%2FaLvOBz%2B5N%2B4zc7NcDzt5ilIlPb12apvxaPzmEdefZuDU1bkZ4v2LHPwIDVFMaXQM4A7IKvS6jvDu6DYz1fjMiJdteYnVC1hCdiAjZw2p0mGfBu3hh4rpB%2BI0d2riztA6li3om24davOiuAizfL0UK8eU4YV2pv3vgZGI1AKTd5CeOZt2DzuccX1ewYwsJS%2ByQY6pgEfclqJ2aMv%2FSN4xiKyeWY8CK6WJC1iHLY29gidcTLiz1Vx5YMllk17dyKrxQ8IJtxAyqqC6ePlSxQpLUv5xeEXbOWsramOZIfQN0vFG%2FtVLL1pFITz4EZnugkm6Puo4q4J%2Fu3HNj1%2Bq%2FsdvMbQuQPpcq%2FWwZQWbTJDcmqsRUnCfStdOVXi2bJNKrkgdx7s3QFZOwXdcDDFUMsuGaicbdLO9gduIZMn&X-Amz-Signature=51819c328ba955e76e7f9b0f447d2f697f77ccf7da2b69bb01de4d105f045e36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632YX7IMD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFxL0MXmPmzHZ9BlwRlB2%2FPEBxdNzc%2FDU3XGuqdDTFggAiBVqu77pZ7e4%2Bd%2FZoCDyH43RRFEDYaYBDv8fOPDPMT84Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMT23O%2FLcDyFGZhvOZKtwDK74JVta85LFedIyBNfwa5tu1GPrp9D4f2Ug14iPhUomu7Trm9rqLGP9mtW0Z%2BNwj2RPFL5VDYbo6RM%2FL6y3yEcwQJ%2F0bk8LoUVR4EYCndgWJ%2FAE9mwSxcsdWsz2N2SW48kYD1CZMDiUVLeTbEQ4rotQVkZJLV1xqVIudlTjD0IZyl42jG%2F%2BPDmIVFECql8e6yV7Dqw8hhpQPBliUZ%2F6vTDdNJvZwSsizaV0mPn2HwYj8Ojo%2FNcCP4rTzP%2Fp%2BcQ7%2BUthyrc8ZYdzoz1RbdlwHyXrkSOa%2Br6fVkfMMipu4FLuAssI9K6T2j%2Fse9XfFHIwnD7EkLc1xcx7Mq4hK7rpaEVH8RKEsrull00ph3u%2BK%2BsrH%2B5%2BQzMdfqsYuJCSQ8%2FBGqoySJaYyKRTJ%2FNgfp2EIWTwtj3eGVpyknnZGqmdNMP%2BTn57QBfDPHw%2Brb1yPNKW%2BeCUvQmacSnoaVMyWbyX0R6qXcGOjp01yL9Ldp4i1uhXiETRVl9mN3%2FFn2FwbAvJ9IRcEowWZc9B67P4AReIF3e02nyYQD79TqEwMjhrtLvQv0HLPrOCGE2nszJhtwrbnIu967BanyaUyKywIskB2o0papEIrELUQIsuVkVqiHWawrQqHd9cQQwcbUEEwp6G%2ByQY6pgFVQneq%2FOEptf6OFmiO9r4mOd4uZFy7UM0Sljhntg1yWMi6Euf%2BNOZYFDoeXCpL1DRc9VI5jR0Z5E0mIar2aoXsWsCS0PzGYn5Oqvyo7glJVlnFVo4zCnuJSWQEjiISaGl2G47%2B8XUdWc7xRdrUc59fsrEtMxrLc%2BEUuAw8AtlnoXY7gI%2Bso%2B7eiaujH3mgtEY34BmyF1N0PUPS2KeeLcmfNCo%2BDQW5&X-Amz-Signature=0dc1fde40b570f3799f1d9df8ee45fbb1cd05a32a18d9efe4a0db1b5644676e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654OFOS4Z%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEMJkJI0qiphuL5isRbdZ79gTOdC%2F0cb4z08z2wqU044AiEAjBKbNnB4jwxZsfubvbuwiSi%2FglO0c0c04tQ2S6nQRvkq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBC9C8YClffoap20RyrcA0Lp4F%2BnJR2eVF5C%2Foby0EATi0RBUeNrpR1W4jCWHdz7H3aGV1rm51%2FqEhcetDz4cT8wuzg%2FtC39KXHLPsDR5xI5diYy8Bv%2FriNiohRd%2B2WVK4xeMg3ALt2fbNgJSIWwe6yPWLpV3GpgCJO9GDyUGrzns010muxX6MmwyyJANStlec39fLNPhuf3C6lGZxLpgdQT8KNHGSZDHDuh%2Fb4tJwKUNZn2bhsHlMhxjBySZlvDldN8R1vvAsA%2B5WfnilWhq9%2FTnJTnc2Nb3JqfS5%2BzZcm4DE4ny5GwZdgaVaz0AbIk23ZdNbX%2FMyW5VlYTQis4A81ccpwSCLSSNmbUUdxKFRArYJeRIU6SjOG%2BkOICi6EtfTy2wkU5yxDO5ddWoNFcqD3hm%2FXhXnS1poV2Wz%2FtSRcCzfgzl9Btp%2BivFS5DfSkkHsiB0LTrkltUJQTQs7EKnK4aaHifibbQJ%2Fia%2F%2Bo6JDoUXhlHQ1z0KxNMZbnulcv9AQNltJQt77sg%2FJ8y8Xgt7TzHEtugckhYSeB382GLWrD62YaKaB7%2BM1O6Tju2RGm3uLp7UAvYVbvRozGzHXxeRn7gj9mk3vF5Zz97JPgsOHyi89RipHzeH%2FbpPb1MfPLasQp8WVawjvgxA4LJMLeVvskGOqUBNBHBStm6xhV09EYXks8y86b1BXQvc8KnGdBTh5wJLWUZZv4HIE1caV7gFsL3uWotY6zM3hHceTcTloqHAHpBvdXz8jMjLdRsLispHjKXTUFoftmsY3PDf2HbczPK2v%2BwQIRGYwMWX%2BjTciCq%2F9wFasWts8QxvY5fa9Uy7dSgiKw73pOoQLl0d5VhnPXjP%2BYSitEXGLMbSfqizkmfkDhn4%2BmVYI00&X-Amz-Signature=87bf1a5f9a2bf20644b3817e2d488fc55b21ee918d6f629327cb115602143763&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMWDMHCO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIB8KNdl67FnU%2BTdpnkHhnQgFG8GhcUNVyVeniBeVCJ%2FQAiEAxJ8am2EaPQGiIobs3njNeCV9ncjmV%2Fg97UPEEGbPpdYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDNX00uLwMGr5fA3DSrcA2R2FbpNdYiPSQ7LadmZFIeqdsUJu3tQV7i2v%2BHq5mv5oriVGMgLyNPvg5nKOlOXkt7nee0wW%2B%2FurcRrMPCbkwe6qxvvbze%2BGefhI4waheVfwpYIG4MLkGjK61Eai4SzrGQ0WMGt5pdQiz3TMOc3PJQD5FYKBcKtUfNwBuEINYoF1DBdfJOoM5vml6MTrlPHmGIGqIPxoiq30wemhs6VIE5yAzRV7nw1XXYIbMI2RczivOWqsAjI%2FqfGOVxcTZL%2BgaR2WhYXiahQ%2Bq2g%2BpKiEzSqrKxGHdqKT0RTMwhU49aTZPt2ZhGAxUTCDxqdb783HNoIwtXsFkb%2FBYH%2BO3%2BF1fHbuvqQH9vjAv5zjxgPl9llzcuFbc4aiMa8Gdy4pMCG8Me6bVkwp69jRFgv7mc4vzJoY4J4oXpmGmksxEviiTXHyocVMhFA9JnDIlIaCf%2BNgMJIHEtp4BgT%2Fbbq2T1tW4j9YvBF8mDaDjD%2BraOZ9NMEKHKpmoU5%2FfCT%2BjY3lZnQBl3yuH6Xwkl7WPMlx0p7rq4iurxR5YEK1j93svuk6UMhcEtr8ZopZwYatsV%2F2Yu9eLXNXw6GopiDofPy45LSesr6%2FVXzW%2F%2Bbx6L%2FN8tY542I4i7jwhr6EuMSOm6PMOqWvskGOqUBkMw4J11vkVAQRqyTE0IfmqG%2BcETu0O8c2lg6k3VtNLfe8WBF64oXt3KswnbCTZYJKp5uk4F0Ka%2BYDNDBqISoyQ0M%2Ff3bbt62%2BQ6AyqauSJGTnLNp17N%2BKjuJmsa2JGfsfeJeIbBWVIqGeM3ncYZWxFezwWGgQaueJOhPwDAMxRr7t%2Bmz%2Bh1%2BwnzwNh8dwA4CNULhflgpuEeKFaac52C63Sfvy2HF&X-Amz-Signature=c3e83e6b63353b8397c57c46766277df9bbfbcfadb634d6b29982f093a3ef48f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

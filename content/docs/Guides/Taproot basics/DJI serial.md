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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MXKHDFY%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENFeIZ2%2BiqNGlb1obWc5yyH0pnPiCPl8XRXJ1p9fZisAiAIXhk4bIqt6eiRDoeviZLvo8%2BQG7QbHtO4i0%2F3EKlXbSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVh37PC9MlpMw141yKtwD4e3KjLjcjacqsaivoozJ0WHkfDJi%2Bb6jL3ZReH1ErYcOYGrvZtZP6Ym1dWVNv9mo5t8BX64lNY1CMRICyKfv3v6bTB0cQSO9ikWhCnl8HnuV06R%2FAkfX2Z4p5TOfLCi2S29HMhukILbuZ1du5J1sSV%2FfMXvXSpAR9EPfKWztaEupk8iAZB4RgxvXfKMbHQhHoH6fQsnL5ZO6gx3FcSyXMtbol6pMguvZr8rpXinAQDSY89T9wghfOxXLiaFS6MF20lmt6c1CD2zkalexp4zn6kCPLyFp9jW%2BJ8iTvpI2Fa%2F8teNr%2FEGmEH8%2Box2cXyLNqdirVyIC2VGlPawCnVu6HTCkYEhpL0Ux4s4t50Jdl%2F91bW%2Ftw3d%2FZyvnxG0Q7HSB8Veh0UX5ksiIZ60bWVgaHYA5T%2B%2FxVxA7MApDFBEHln1siKP6wIVpzv0Lo979ixb68V5Tnyoh7tTLYt1ZSbkGbCHkXYeeNIOgseSMtwy7z2JSj08v2dLV7VdKb4CFrMuUn4ni%2BUDbgAJ6ZCgnJ8B4XBJnUL%2FJgAvqwgyGyC2crTBf6IE%2BZceupHTwtKsLmxJ2w8e3aUEZPRrWRLEndn%2BSFmlk1l84CROq2itrNkM9NdwDagAj99znizsukYMwiejezAY6pgH%2BpeoEM7S5QfXP02Da4VsPg2ljMrjACj4jnRMp4P1%2B3OUKxQeHsHP8HVTJL1%2BLnBB5Y67i5LBVRrvFvtf6VAJSb%2BM5lhePDt9%2BjSU%2FlxMJ%2FG44yMbcFiMaY%2B2AlIMnZOP75TnN%2FtTqAmVgu45l4i2TaZAMPcT2zzvB7ww14T99GPxW32kyxfe2JCdz8SNcHcQRfdYdHwtpdbfr%2F0sbem2by2F7diu9&X-Amz-Signature=be1134c6edc80e7496e94a3a8801147b0bb53d9840cd2ec1b8b5f26b6f5f17ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDAQU55N%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtU7Bog8vCYrJHKawZD5d3GtM110mITkLUNqolT%2B8WiwIgax8JYVHQ0Yzmzi7CoUixIyc67mPDfZMhw55T9dRNsRYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3E3ZtsgwNsKOrZoircA5YdPVxmfH9ZSFN4JwxDsp0oTaMrR0vVEomQkprSyOCrpUluEot6OcD%2FDuoHDlwar1Z3%2Fzm%2FU0fV4wRUQgfuYGR48hsm2gPcsUbuRvOg%2B2JtWaalaAbpnKaYxFBLC4AsED4ZRlyWSMKEsUwm9l6MbxHtC0vurRFZmxiwc%2BfOx2GpTkuuWbb37oDL8ZWNdIAYOFltdbziuNkrd2iwI95xe3olbMixTP5zyCLakmtnmNr0Ep3R%2BrvK8NYW%2FSjXZKV6KPCmVYzZdR6ugugaaL%2FvL8suaazNWN%2BbYarsLRUARbO7%2FLEwq0ty4htdoa9puPFBozTbCFBSfRB6rxt1GZTo0XFl57UPNZOdWB4VyJiWwiSkvddwah%2BVu7ogoAUdy293RevMAG0qbhu8VvnYW5GwdlZ6QfmlDJeA9vf3PkmuSTKQd3nJHB4Ybl7lcCFOeUSSJLGU1D4ysWLszy2Ajy%2B1lbRPHTScVGtxuwWvL5EhK2ASnvTmSH7gwa3UwuFBb2b0%2B0jlXlhVzFuQzAp%2B99t5jwnto2CzJcd%2FU8MVQqr%2B%2Bn27tG4yit6tQwMx6hvPIiruaJnHvYe8p6oN8EdmasUNuLFud%2BZShVfV1vh32SW%2BDszbBv5bx2Etbk1BVN5cMLzn3swGOqUBLVH2FiFbQtPRyVkqSsG957sbOgYWWjjQijBubrEpEyRf23rCIEithQOB9%2F34RMMBwhXfKZIM03a15WseHcvQHBHuDhXnD6PiWr0IUGwVFNBps%2Fu9u4XAbyI6Kn5YWvsTpfHpuxm4uteJBlNLGEZXtsFTFGYzmCmgJiRBc90XdpU9%2B92EtDgMXaYg1rQ%2FbaRbRXAOIQfvwIC249dsyY%2Btxxh6yTye&X-Amz-Signature=4f75fc9bf0f3d3b91d70b9bb49804252ebfe43bd434d457b1f17a9f18237ce64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662A7LLYY%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID60%2BvwVAxsQN0yj0XkXCCU0WivHMmxPvImNEqqBqYqPAiA%2FBCvG1CNMDGBJ8e5w%2BNAwwMeLUPqa3ybNCdU8YDE%2F9CqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEiTTEuGEQBQhURi5KtwDcpcv6G5xPOybcobwzgbGOoMVsKGMikR4%2BQFgnVgE2Z1QkQQhno4gB%2FDAFXvfX1X%2Bb5kSIy50ELxXx6W6zTETvMH9l0MCHT%2FBeF5aYaQ82HTB53Sd%2BJv%2Fq%2BGn6NmWpw3i2g6X4ezWXNG5kuU2bJ1YJmcF877WeAzbnuclJDCTPR1FxD09cCSirDw4n0uiSkHgJjju%2BSVP%2BKFXyBTVhTip6EzGax64KNjkn%2F4PKXo20NIdPhVY2l%2BhQhxyGD6eoU8M0vqJ8fv17vn3fq%2Bpa7hQTK6hcTlMM2TvMUUuH%2FMWgUhTgzghqnHiV2U4XortM3Be2iv2ekaXOYciiG7o5H7gw5sz29JCfHL2KAYg08o0M3Enzgg6ut1OzcR%2FGheysM%2BzFnZXiFofBbOqozQQLa2ixDkQ2dRJi%2BTiwBCmWcP4eO6CRsIzRJQRZ3G%2BM7g%2BPw6S5ygTR9CnMl4I%2Fix%2FgKFFAJtuJq6RqE3eKW8DH3Pjde%2FKd7VNidqVUb6DP2UnYzCROfjQ6jqOgYGJyL46P5C3NrFlwfndXKnRK1ZPLgEx4Q7G1QwvIkClFljl6x%2BRB%2FROEjWXe6GgUy8l4XBeyjU1ndeq%2BigSbcaCu42tKFjRVdRp8m3eILtoGw97yA0wl%2BjezAY6pgG7Ld5ZBv0tVSbs5wMW0mnLjO9PHUM2H8lBViSmZJbSrbRokhGlSRX%2FBi33kd2mbO5vOGSxjs7VUEzH%2FjhcZ97PYSC80SllFMsu7fQBmJ1plyDE%2BqXNXl4lyeCDqcoKGj1usPeAx9XGyqXGHNUBFSstNIr3ZMSV935tnp9I7wknLSX7oDDYHfLviWpE282XqzTx8roUk%2FoQVo0SLBrdDlA0W02Qov9D&X-Amz-Signature=17851ab56b4b9f9492058ca35e7b60a696009e5763bc34a73ac711d7dd896111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVPAA6X6%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAj2wK%2FZZRvzhN6r3i5Ku8D4R75%2FGngFhP9VF8nkKm7NAiA0PQgMl02j4Ih%2FsS%2BBt3%2FpkB7oK2mV3fUsyYvZLPlcgCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4BtT4RyjpTayLhILKtwDwE1iL2EyHbMowJNMXhQaewhDuAtAw1HAQHHR4S1gd167EWf2X9Jxoyw3uukC4j2AgNrOO340MdhB2ieYVqjrP7jOYofbG998F9mz9l57B9OqLs19VA6AvOkRQS%2BOcnHkWL40ExH2vY7SBNfH%2FqHlKit34Ms4fopgdGsCw9i%2FC91erfX0obVE4WmfZ7wnaENyjaJEigPLTWl1ZMBK%2Fx7xgIqMRM%2Be1%2FZibzxKlUln5%2Fcfn716Lpu4QFtLIH9%2BnJniKE0l8enzhFkADswp7cIhxmzY%2F6tsK%2F8yP3s4hRRtW2vo7ROjg%2FrABc5k7CyRN4cPNYn4xvy3Y4Rh11Najd%2FlAuUYEl3XxWgKxOFgB1qOluuE6ucR3tvFNfmviyvXOVsfUPJoJM5ykB2APU%2FnpiIcrTAVl8Id8EOl205i5JVbvOcrVeAUljk6%2BZsynOk7zJXHje46xJS8FQxdFfEV6hB55LGBbDt5m1HrozmHyTow62YzgJvyA8detT19srGOr5VLxUp0nTeas42P4nT6nKrDKBgPvFWpt2ukIESLSCCVaVK9QLBOqy5vU0mdJU6FOXvc6uszvOhWAnGvTU%2FWdof2QhHiwfVIpPZTXXbGgr%2F7FtlspKbfLMueYXjcwrYw%2FefezAY6pgHxY%2Bd%2BzZkfr4Eu2UcLqESuyR3TlAmv0djjn%2Fo68%2FOAXShD3c1%2B%2FaaRb0gxKvTT3L1RKwXXQuyhwpH917nbldKFNc4jqsMyUaRebd9XCFDAa%2BnLZ3Eq8%2F2oTOi8RcEoHuA9WWcpgYj2a8eklZenVBk8RCIA5M3vk2JPWC4EtZlcVf1BEk0f%2FGi8c2b7yCaafbmDjxYHo5wN14mCaNowfVwregKDyOes&X-Amz-Signature=808b5338c3c3696e91aeefcadeceeeab0b07804804edc0c71d3445befca03e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

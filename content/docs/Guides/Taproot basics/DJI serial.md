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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHGD22B%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQmixSO82nsbWyq9b3wPupN7nO%2BO5Jc6QyNLwd%2BMA%2BkAiEAsBGBsj0f%2FOUz6JS6hYNxvwe4Q%2B8Z53koIlK5kYidXkYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGv2zQlA81RhmdM%2FYircAwVsern98wRCogFpCN1agwl5VDaPKep%2FDuCv%2FovdSolE6LzClyco8egBOCNGd%2FbF2%2BbaFNkERGrCzzqqPushc5vJD2aezJULAqfe33YMfVSdqxXEUwGN8mP%2FezrqCyCPcZsMqU93idUHNF2e2akciTyEdaWqKUg83nmaj6hXtJ%2BfedobDLzDpqER9ARdk6HJrRyip5zctVQb1VeGO1JqRVnSOMK4JiHPLnRx218ksBNthLEwcZO8U4wYt3uGIhEtovxAAz9Ru77%2F3tHG5FnVzv0hpjWO9DxsPgq17AZJNAWHO79AjHbGfrtX8SRX62M3gQgAM%2F0%2FeV9C90j%2Fk2tRkbFq9f69e4bm7C42IKgieMyAuPZNJ%2FNSXfa%2FR%2BEj7zq%2BSx3TySeWvVkddr4dqFXiKSlHzAfR0rVBB%2FL%2FLRuEPfGLIjBMNUGXgjuFXADM5ZHyUkiiBGQ%2Ffc1tGh%2BHQBXzHXtdoHIX3TRnsV%2FWAWlnImV4jedLZpB77u%2BF4GORXpYQJmPzi8D%2FJEdVFLb1Jaw6mz0WDT067mi9K73hm2kOuc7bAAJW%2BHkEY8HHA0SKUjTdlVBNBrfwiT892hjHwtBoxq0LR3gbv74AGyQz6ps3AVphRRpqX65n8Nj5Ba%2FaMO23tdMGOqUBFna97fMYaJA33SJznP%2FgGKBWnUJRAZb8H4OeRx4Hxu6ODgavSZgAs%2BquUT5TD%2B5PMQy8NwcARy8qL%2F%2B8mNISSZJ7t0gdxbG%2B6htgg92HmhqdQ9VAFUN0%2BBYD2CeyJWOxEW8nP4efcfxgEhoF3bEMSUUMDk%2F%2FeWEJCQArG1uZReeBEvMcfO9xR%2BuRUxvR0y7xA0yx%2FEX9Y4CfuyXKGuf8MsITA6Sq&X-Amz-Signature=46303c056dad7a9351475cda949918ccaaebeb610c85aa6c5f1a8bb8c21fa8f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZPA465E%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzjsfPVHYAQXc%2FIHK8Bwd5RwadrT2ecDcn7OEoGZinrAiEAsd1N6bH2UCU5KJ19VFCP8P31PDzCWF0C8lnR1pl5zXYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKXYG3PJrFTZCocHCrcAzRbj%2BbfWIbRTMwRn%2FoECrWAKZrYka2HaI3g8BZt4vX31gFQjEVvJON%2FWvdlqYf1fDtvhPLXisdg6m0NR2lFGeEQ4Vzq4pmV3JJIfOgBfZ8eoDb2pDl%2FpzsD%2BaJZiTNxL%2Bb38fq7yNvwL5C19ePfVWtI6Cf7jhXttzfo61aQhNXYwQQxizoyytYFOhnzT6nbGv7boRoSvIYjyFozqLZIAgBIx3pkACAI66JX%2B25P9jr7ZiHc%2FPAKC63Wh%2B%2BDZWMvMyLg9H%2BSgub8yCfR0KaZ8stL9eMr5uOBxOcsb6hSZcLRY9KE6J3Wyenm0SSczh5psfR9LJiDmHtG3mMkreTM%2BklvdN7IlWlvI8mE0YeEWukJsCJPUNHTsrk4V4NMnmKr%2BRWP2P6RQ4HHAn515DGOzHv2Vwim%2BJ7X6xEiIoHCBv9UJ5J6QomclJ4LshXpdXhteF4XYbU60vR02CHRFA6oVdVZIGBFla6W4AwYk7XJ%2BoEgiKl0ZsuazdY%2FYbhGxtvAzdTVyt%2BKUi8H3c2wUo%2BgkZ2FsplRFSvF1yPMau%2BXFchkDfrCBJHrWapgMZJxD7S2HaMxjjKPm4uMNqM%2BVCzu1NCtbd%2B%2BQUmIKRJnR8AT%2FbOFV5xV2XpDtxj2a%2BqyMIS5tdMGOqUBXyYmSkg76imhQXa1OO2NPI%2FTJU82YyZvCr1ei2GHdi9zrJaL%2B%2Bc3pscg9Gn0WHseVHI4SPADH36yJS3jEoBctyvDRR2LSbk98PQkMXSWQdi%2FrplSk5WCVq5vHrFhEnb95C2oPj9qAgQVg6sKeZMW8Tnu8hR%2F3b%2Bh7ph0E7mS0lIv04FH%2B9MhO%2FXKJ5r5z%2BTJI%2FB9dExCLFiMHWZoRg%2BtwVZjvtlj&X-Amz-Signature=0e7d3f981967fb027b6ea9b78269a9ffa68031a998b49861a4b210be13b1f30e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7WOTE5T%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDudnYIkml3YbolgbfyQvjXfK9I6EZEAyyv94QbM%2FuGGAiEAxn1NWFvmO9ykEj8UYGh%2BgHrAkCFbIKHNTfvmPHJ357cqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZxBQHp0LfzGHvoGircA%2Bn9ky4K49GHuVSxi8Oj61bAhQz%2Bq8KSYL%2BleyIk8lq7KX%2FnkO2HgQp%2BprPGjmuoHpriJiKmDH141tiAUtOM8NwlP4aJ7DgzSGy%2FAMIy2RST1uRjeP7b0hAPjqFGcyyskT71CqqWKpPzeMplvNXD%2BtrvVA6onarGgL7xtWM2di7qR5GJ5%2B4NErQQVwxA2LxRjlydxeHXdhZQHSG6jlgHhHW1lUwyitGdjAOHGDd1OHCMFHc4N8UYSxkmmNrOdZEnkmYQmPpJ6J0hKT5D3vIx1XWmOaL8xwTuRUW1Away75YUgi2S7Sxjxje4hzny%2BxfLAyQwAhjTMCBrLaIyKGgnyeT0s9GEtagtsV3zp3UW5CdwOvdtR9zN6h6M1lrVa0hg%2FzLH2JQV6%2B0b2nAiP8kZl7QRvXlQ7c3LGUD3pQcyJb68tZ58g%2BsIRartN1js8sI%2BMrUHFNeyEbBrZg8S8ct0paH3IAnWISN%2Fe61toCdQ2EUrCrl%2BeLZEazCEsqgQYlXQE57xKCiTL%2BOYX4Bz%2BJ4oSgpdztCgxYpP%2Bk1vpiiu52IAgVlv6is10Xqp136ofG%2B%2ByQXMBWIQZN3%2BoTf8GDloMIrHI4lWreIDNK42kDzKJnCornvLXZeW4znCNTtMMP%2B4tdMGOqUBzmf2MDI%2FS%2BNiARyozwR8MmYD%2FxryRha9jLbe13aB1pf1KYZEu1VTXb%2B8mNQ757ODCen1Ycw5gIDhIA359Ur34XCl9jDwi%2FH7ro74UWZ2IrN183kc1FGv5n0CTTy3qY0GGL3lIx%2Fw7L7yjia8KWKB0ybGuni%2BnUZk2maal89d0CvbKXqSjIce9WXkYHgVSeM6HchUKTdPkxPsMfKDTPrGKFByf%2BP9&X-Amz-Signature=d4949d95bf6dcc34de5e4684018f9be788f19418b9fd6a8833502a9f836cd898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYBRGZDP%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPwgT8pOEhPI6Co4g7%2FzFHMVbCO6oFRZnECxuhAxKh%2FQIhAMSA9xR49bL6G%2FAhJOJpKHeqXq8pktwTdZ2S8AvXuixFKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPQ4nay%2FHJMlRybWgq3ANuK%2Fgs740vyXKXebpBn6KCerIanNbYv3VopAL5HS3h9Z6uHMOqEgPmzYmkSYrHDwmU2vL468FOPLVVZvVEuW3AH0kM5UbnDruMvejDO8OJeJbBYiciilGOLZ96Q9XuWGbis0gnxViEsJ7Ff1gT3o4CuHqZvoDVp2ZjKXFhIpSqeraZgAU4XtXjuv4bCZNTmlHlQ1xU%2BJ%2F99dLZu1hQdrOMrdtK37CjtxNUDmyu4wdz0VdVIEGpYNvvt1zzY%2Fw8uHR%2F25%2F0m2pi%2BM6zInFa4m4n373IRNNIAiXM5xtkiPzyGrk1jOTFYPmZd357epWEfeAWOTVJPT4Crk6dXEdA2tQ6TsWTEqyaHZN0olgYDtAr7LnJ1bn5WQvo6TYqsEgDEB%2FxkVkUzdwvWepCWwUxJm6iU0I1gLJs1qHIvRUdfwmaHuwd286xVO8drCfOzusozRMgZB%2F4SL6LqwAEvEIxTbcao42BVlPZ6XSV44AZLO5F%2BWLOC%2B4aDP9S7kTYiwWGqQjupQ29RjZtj3KV88rbL1mpGRtJrA3SPrMYBCux0hLJvckMlp32USQ8cSBjSLqg%2BlG8kjI%2BACvZnqLtUsTXXaqowJAC7aEB%2FmQPPVnAkFwGzw9VeJhigvzBR%2BSuijCjubXTBjqkATtyUgfLAjRbCoPA7pBmkrnWe59cUNhK5q3ujUv0wT%2BzXvTaOya8r09aVg007z50guqEpgWALPDRy24e9Fdz1mLLMwUMy8xPaslarPyVvw5oIsXhrTqMgDBtn9ggQ%2BoYeH70cx6IrDd34OtS4d2XNLeKKj5PnnB008FYIqSbqSvl7NxNdGdG5G5OaXZ6WD%2B5HPI%2FFIeYSG3I7hRpHnQ8W26en0XN&X-Amz-Signature=c40a42122f67ca6d2974b1f101ca8b01d6a8b068cb34b4dc3808a3db905636bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

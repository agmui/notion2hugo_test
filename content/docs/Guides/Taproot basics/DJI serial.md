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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WBC3VEG%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXRPcKIzBVUx5J%2BZMM3413Jq8yUrtdJoFlP4iMGqvGRAiAgqLCig%2B9BKpldNTd2rdXPkDa7cHmNL5NkQi3DdyMf8iqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEiTQ7I4w3%2F4KBmrKtwDBbo%2FUNE2uJlt9olfyb5EWsmBhz8rYg08pb%2F6DDG1vjGyn0H6FHXwaTT9atOwI0YtOCtXDro5Xy9Iw80rkKX0AdPWzOrrZNgwtrzY0g5cSXkwTFD%2ByeBfi8oVaI7Dr72mnHVXqIihH4SQIMObpeiIKmzjhEE959PB5nXC3XmW82rcSjKuG%2FYrYefS2H5lF9BMIwuBLgi%2FNS%2BY8RqqDvMziX1M5jRIVEQ0jZURXQJwX31lGl4l2UYI%2BsanaemRFWYIOWnmBEWiscN81PQ6%2F%2FNLQ4lFm53ZTgOeAHUUwbaAGBwfRsbLlVbR4LSddRhTLpck3YfaXoP8W81ygdyre5USxBiaX5YylBHlZROviAsEJpK8bR%2FItaZL%2FM%2Bg0XmzWPckOKYsnzvd9Kn3JJyrBZB38nhY1cIM9%2F55n1epEb6eTlmNwXEgC8dhtsxUtIQooKeU6AOzo5Q%2B5wa2DdVoacKFGjLipxipE7f02A7ubYCQSEUdMr%2Bde%2FPYG%2Fho4EA3anuq6LXNWShCBpftSK%2BXyYB3llZlI0m4s42Um4XUUL0euPdBn41wBY3e2%2BsOejLWxq1w27uCvXipQKRxjw78IBMbtmpHDVbRmpmWBnG8C1DBh1tgVVw9TvUX1tOlDnww7Ja1yAY6pgF6hQbyLkyBZTdApJ0YW3eCnT%2F4VtWwInkIWfSMeNc%2BqY1DlylDnjJ873uLp%2FDjSo7Rku2G78RIL8tXTwHNJJV6npWorenhE3Bw3meJEyTYl93LUAToWcwTV9%2BuyXB27UgqvPVUguAVwUbEKML220FFT4mdNRq18HTMT7wiuiyoF1zIr12%2Bodxnjej5PKeOSOHZorkdl3%2FQZANFTh%2FSWk3rHRBXxzfD&X-Amz-Signature=3d432557de34c89b3dc60c08aabd9082b9fa6de0a6cb9b46c573f4c720b0b1f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPMAVTL%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2F0MCGJrCyyUlbzX5XksQDxw3YdotNbP8IGovPAXsBvAiA2jPI2BQCCEg218U%2BSBnwu4io3bFBtyOt1WNEHJgftKyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8ZQYE6vLC6fjUPZIKtwDaDQAfBjVzDuAxNvulC8rdxNvtedxRSdF7hwm9tYqR1M7jFmhroV6KuxwzEtxnTw4c7Qs6B63xCGKmHZVXmLodAGxGwzSU5jn3JnpT%2FxtCdTrpXCaxcfXvW617ISnhGSEdA%2Bnsl1oe6QLG9xFV75E9I6ahYdNQ4DT7rY3MeMKEoy%2FoWSvwsypWLyzFRyAT37MQKVtumLcj0q1oRsQGWdgd04pdHg%2FtrbmnSqajKR9T5DRf2l41WvYMzBvEP39uqBEwsEDmRMHeIJEBT1QG2E0TmsBbasqu8GNzOAmSbaghCjoNoFGdhzbRCVt%2Fj7XYoJD1vKfuUtCpx87dD3PsrxSlsxtAVygECQJrYaHJiU%2BGRUp8P40094qhkfK7eYxSQffqk57qSAwpE10SMmH%2FpKT3tAaktw3QkpKG5hiz%2BZZHeTNnQlhvDVZ1KlbvITJhq%2FgwJ8LmKt2rPjOkVISMa3%2Bfxb4tJ17lDOjFFBnZXkr7tXEugQeGT8RcGkWf4bdBlelI8dF62HkPa97ytd22%2FW4nNw9gffxkgDjCmuDA8pJrtEjSzRMN4CXVflyOCBLIeNzgIhNCvxomNjJO7cd1nJ3VM%2FkKnEe6kaYFauF%2BfYFAtUoAnmZuf%2Fz%2BNAf3l8w2Je1yAY6pgFT41XBmPsdD%2Ba3f8Pf6ABVaSblvlBHnRt9YImrzQPjHrp3dPOiMwznQ5ntDhEpzw3qtxffM7YsCg6iUkaYVXXpfUQ9S7R5JzM2IIg1agLW4m2QyvTDVgk7UuqXx8hsSKZp7HURxRGNvp09hDrs2pE5amH99yku%2FtjIk%2B8bL1MTzn64FFqU%2F98KDciVdXQ4t06zmeFwkC1wQYG89Jd34yZB%2B8YcAswG&X-Amz-Signature=5c01e44b21e1c08d587962ab51220b3282aa52f8168d233d5b49251feecba1a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663DGQVSM%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAw8Sbli%2BDe4tJjyClybnJrtlID%2FG1xpDnqpLeKLN4OQAiBgAMCbGSxxBt%2BNAO7cRLZD%2FqcystF99pNF1O%2FJBK8AXSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD6HYLx7ASZ7lQqJvKtwDtpBsuHCzgISpHPwQhrSmLCRTv3jyIXtZWY5l%2Bw4G5roQJCk5yCRsqJPx9KyuXnEDFugr9aHIBp0iKGZWNTNixb%2FjbEoY7fbiHXr4sekskcp09SydG5WDX1ZpTNgVzc0hpXJr87N4rR3%2BlzXGInlqvf99AiFGsSzq%2Bhfu0o0NuPbJTHBNlrs8CYPQ39YRfcBzGXGtQbT8H2cfI7oFNCbWG1nFU1uKmgxo0HV7BhlZJjHHrP0byHAFf12ppjDDx%2BhASt1wAwRnkcR5k270ATy20bGKky9Af7T19Z%2BrVkwm6B3Fi33Q6fV%2F9N2%2FAgGfMXhKJOe8rXhH0Ke8VJOkuo96ZUP1IW8hlMGu3dflTMGdxo5tHAwJ%2F2NXU53jYMMopp0kYGVdoIKL2q6FgbJtnmWzlALRrJjQl35UBGymAinLYTksGvLjrtD6NefrqaX5Xwj4oTeXaVoz%2BueBkbNL%2BDR3Q%2FSFSCrTy5vyCDpWiWOAm9uqyrIm%2B%2BcGL5EfDCOWEPRl127ZGVQCBRf0%2BdvDyPopSFFqme96Ko4xL2vgdgnqZNMnKo%2FMZTY2pa%2FNeIN72cm5deKsbJ%2BElfNRY2BZX9F5mTW9G%2FVfAWDPUP2Vrn5ObTnLL7%2FoXWIm0VbPgEEwlpe1yAY6pgEOX1sKrCJvw1iUKwQdo4Vs9%2FVrA48E8cPlrZkpbOZVt2aoo9Y%2FCq6V9wRW%2Fqm1RFyJdeuid9vWsAqYro9IOXLYwGqSo6UnHyh5ma9W1IFWfMuCY9fSH3LQ%2FgU%2FlGL1XaeNkoR8ghGpVTfiRnJlatuDyDT6UtfYgZwhhColFonWXYDPpXdCvxZy250WeH94EM%2FnHDgMlxPJ%2BYpu76J9NRUQJkMf3HL4&X-Amz-Signature=2983fb4c59cc5e83bbe5f7de42ff6f562656d783d35f5dd18274511f75496f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7YNWZO3%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdC5wKHQMYhEilWIEs3MrcJn9TBHXf3YuF7z6po%2Fi%2FPAIhANu6HrVeMlk7JLWbv7DE3AOIHoghdQg8ZFVgyk03JlXVKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzA%2FmLbuH2A18Wmzc4q3ANttgh58XWA3YtlgPT1BbGlqImglZhLf5Y8xFsq%2BvqFu9xXcx2RmDJP7Toh%2BDZZ0QBCbngU2Q5fupSxdnMStHceJ9CSpRasHFEu9cvN7dWNP6Cu1YdMvdXkIfbvqPaU3hkVdLNkPZTukRUtQTgdodVX95PqzTomLTmd704QHvkMFWmJQy76sJdTyHqcDaWHl3eE89Kdwq7o6xGuw1i7%2BRIutNTrhXbKstcDNbGKH2xl5%2BUE9sLnH2McYLptacz0Qt9bal7JCLtn9cqxMIk1UIUjp85hFOsjjpfJr7kGVP1ml3o1yd00NkbT5zPZv9MxilH4k9d0W97Ma1HsEl0oiwc5fmGK8nf3jWdba7fRd%2BiZ3vpPu%2BpOmBVsoqwPd%2BvRNiaj8F%2BqfQT%2BbMXX8oVzSJXErOYB%2FzuqGzj7o3kc%2FT4m6T%2FnwIcxlHPNdLA67KfVJC%2FtaRgKZ1AekO%2Be0Hyn6qwvg6tytel1J6mtzpszozOunF%2BXz6LvU6lFPXRXrM2jT4cUmeNAKJw0AVsDqtLqwuEaJnhhGt8zu7R8M04kbo0thsWvoHNYticCEpRWiETxJhnEjKnF1%2BtDilxm7T7ai4gBERZCCj815KQCBhhpC2TzOs0djh35f8NloT13QzDilrXIBjqkAU4VXRI6CBiDqlGgrM2Rln%2FORN0t%2BAlSWAQop4ttZTQCpOI0%2B7T3kP5%2FD30WEsn1t2WjFZAZ%2BLR2pDyH7yXdjUgk1TIeXbYoap03%2FHc3R1fgy%2FIfnJd6byCMT%2B%2BKgUj7mSDfF7JF2kFIkvoWshMBBTCtpdIEVCwT%2BVVJ%2FIhTebVQVNjKWpZ3a%2B2659YT0ewHI5FufOt%2BsvjI%2F2ZwsHxSs7GThH0V&X-Amz-Signature=ab2c889db88d98d37e852d9413463b821f43f389e2dd4079b0a4f172092d9f74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

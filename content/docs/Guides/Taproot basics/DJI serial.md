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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG366DX2%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAGAmbOBFpoNdV9tSuX9IXqGkhvgDpimWVboc96j6W33AiBSDxO3moyrW6IwPZy%2BxXLpycneP4oBSn751CqDajjTiyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqNUOiUgzW1oFk2O6KtwDuqPrTN0PYKU4iSR6aTCAeyk4ltujNSbdzcTj7VaDCRHijFoZbeeHoHGQKnCd5snwr9zVaXlLo6zFPNBB4izwf%2FMxN5xbIUMnZvkoc7fOI01RNPU6wAu90rGxc7KOB%2FRayeEdhktyE2zkqsh%2FUQc%2FTXDO4QJ2yyg8DzdAYjvkSpNXwAEyv81FkhcYyMLy2ycUXWgEHnEMO8QyjdehsXmi9fcltSwZZvyiI%2Fvy89ysqt%2B1QuvufvwsEMEJOxg9OaBGKklA3EY%2ByQRiQ9j3tZl61jQjNw9U3fht9VOomzw%2FMEmddJ6IQ1Ro0OBcPgGJU375Bkv1hX0M2nwQNUCmVBNyempSwy7WR2K5RxEvzwTimg3cM%2FKzpuAtXcXTzVom%2BwVhkdCR0sDye5N%2BE%2FhjIVDv%2B%2BDI7PH63EafIq5Ht2XTKYdBKUo%2Fx54Oal6VsixLTXkahhS3qxzydpLegb2C3wdgbn1TG%2F0pr%2FzrUlu40BjCRVY2hW4wuN07jcIUXDQ6k2nB%2FO9olH8DdFA3YuupxbbeQ6UAe40jwCRWbUJKCocj2YBEXLDRMGsgPfGHp7DUOwraWEwvq%2B3zv4w%2FXbaT9g61HIJxnCdM6B1uYJzfPKzt5iN%2FUoDiwKpbRLFRwn4w5e%2BixgY6pgEqa9vxAYe%2BcIsK9s2bhDE5ljk%2BTeUizQwpIWytqD3uT%2F9l0ElY%2FTyycouSetQCL4Vt8HuczWqieDc3TN9IM22SzY2ekRBpVbqjFIpZXhv6oSC1iadKGZA9NUhFoZRBYuIKdQfrooDuboSKrbpQZRsu1RGohQe7xblCvr3vZEC13R5exrLKoXUj2wPgBvTGzuygyxThoS5McatrfpSszw5%2F8GrLxL1V&X-Amz-Signature=31f7dacd5cb974ba89b724f311210547a4508d7f3f73b7e150ae3cea84859814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WAF7N4R%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCPe%2Bb6cFpguGgF9mCNEixpLhk2Unc%2FsULYDCpLI1XocQIgEIf2RIe%2FaKe%2Fs4NtgpnLrbASdaWXj0mx8PsGE8hdI0gqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOvSwArZaRbE9ZTUircAz7fPEhzxNHVdKTtNn4BP29fGT6lfZx1CCvxUlz0soDrl1617mekHcqyBN0lTYnKlUZpbE3dy5PXWLmFveti81A6X43IPbS00Fad2PxtBa2BtsRMUfOgO0Wkwxbevn%2Bj3mSrjYgEoifuVwihtGAMGHFuEV%2F4gF8Yt%2B30%2Fr%2BVGVWFn8WKf31z4k3xcEabMe4VsFye4AweWIFT9qvPbS8ZTtdm2lQHxPXIATZRa9FKoCq3EpwXkrrdRKiDd9ZvUO2EbELgL%2BwYriMIQB1Sa%2FnzvWYfbTBoqgT7KiCNPNAD5WEwVC9Gxax2rLG0hUKZO13%2FR5mvFaxW%2FGXRCDkoSNBsxKObVUtu%2BBa9g2HW%2Bdxfy%2BHxml4cof9ScWAQIkXpVI8LDxOpjzrv3bJkgDywBo6vyMhl60pjNFYMJMZAhaSf8hl9U5e92jE4vQ5EDyehqruu2MT1jlJdO42Y%2F6jbzy4KQs9G%2BzflpGFV99RnJY5qCuu3ggIFLa%2FNsxajc%2BtxEd%2FGXxUq%2BcNHZsPIh1L98c%2Bn3ZHS2kl1CpOwZOwV%2BOfGyOdOVSAZTxvzaOgFzTiatYU5LT5es0mNUtq3KtzcAFkQzxeywkPgBefQfhN0SoHWZgQ%2BBp%2FHCfB%2FU%2B9uBHuYMNXvosYGOqUBdZZxZHcwqSC6ZILFcfE2mqrom4pJe3H7XhqTFAyWXz%2Bd%2FC6VwNobYBJsB%2BS8TMfW%2BpaVwO%2BKmGi3m%2BRYznXJtyo0sJYdrgJfr%2F4HPiadg489V3rGSmHwQULDJItPgCh6X063EvQu6wacW2A4CmfOhvM7sHkp%2BCwdz0HwpiLJZASE7x3wTL4WXj%2BsVaQmCYQ2cpe4sFiLfBkdUOnTSXmnSSKlc896&X-Amz-Signature=a807e8d9a4fad1613f4083de45a86d71e37d4e979a57f405fc937435444e23b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6FOTMCM%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD0zClCY%2By3N3JSDEVGN6uX2AVs8%2BRjV8FrJ2MifEt%2FzwIgUYEyisbQY3%2F1kBf8E%2BXhwEQNLy42jKYDNMcgVY7wYzwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZyZoyxOIX2y2U4NSrcA4Ys8YcjXsiXTHH0qeZ3oNyK875VrU0HDvoNAsMOelr6eBe5CWaCUJJM7y8DUcS0nbjQxp9jZkybOBQbZFlyaqc0iC%2FrEl7zql0HG8ZJZYD2vDZcI5ZRk1DCvvRZXOAc3ZcIR%2F5wV9XaZyEiYnnZN0QhibvnRZtZx67U7FiQnpQGZ0pABenR%2F0o5V2g10%2BFXbZrBzzC27WSbGeROcFiE0Kpu8%2B6Qz%2B1zFjbhyWAlIs23OmplRGlPNI%2FXFVsJ7OB%2F87NbnBzDw5Y9cypD5UcTFo7UMiPpnq7a8K0%2Ft3yYgej%2Bhuu%2B5taS%2BAJzy2JHCG8pWaFAwDVsBte33mQ7PgyDwXj%2FIQOVkdJl2MHitbvsx9fzcAskxkUiw%2F0D8SolDZetOB9Fa4i%2BwMEKNQrU6fASaOmFFxlM1DgOn1%2FC000LcZxQb2R0C9W9Nz%2BzO8XhttqIjNBmGB3M%2BuOhZkT%2FQWWXUzahTR%2Bk%2FDNg9Oz6b395KYuPcj7e2fHzuJs0pmbHFY8bVTrBPX562CvfRzkc46npPo4KhVTT%2FWHK10N3d3JqZtigpkKmu%2Fmilqebk%2B%2FK9FPHucSqsm2KUR9nIVstuv42DXtkesXGbc8gfxCKsYRWtFmMst%2BfL9LDmK9PgEcaMLPwosYGOqUBN0F%2F96s7dJD%2FqH7%2Fkl9u80kbxp2XnAwi1H%2B7fU8i0%2BGKhD4ztPbDg0MSkt8Ewiwkl%2BkJKs48XR7AzLkzC51ui8YMT2j%2FQwD9MswAr%2Fum%2FaP37%2FfB2LhwdV6eiWs7dBSIrfo2LxC%2Bv5eXl3QgSaVICX%2B7wzkBvHCtes%2F5kWlVlQ3L%2BGKwW%2FxSg0JwUW2Y84yFfiGe%2FvweF2UfO3Kl2vL2pop%2FUMLj&X-Amz-Signature=11ebd93cde0fe083df718f8e450cb0b91bde381165cc420d759cc7bd13ba6b1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4ILDU2U%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDg%2FcOKoKcTbgHUDamLr2vbYlmyfIwyS0titwzszpX4igIgF%2FT90pCcPt5se3kUJDSgjR6A4KEyG4PizT%2BUOsKbfNcqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWgq4q2Q4OtWOHfiSrcA%2FQIfzXz56i8yeLC1TGjIxvyw60tcCxr7WlpkCjliQn%2B%2FuYDgJVFxPsIApyJ0MyuI3Ba7ryw5irU0mxSslb8qJ8AiwN1utOvULFoGcgpWnjugjRjU0XL3usE912mrCJpwjQClpoubCPC2d9s53eOsZP2z9YJuiTRkC6X9TKKXA7%2BDrCIeaOZpsW4tJelQSdhcLTViUk9IDxJEps38sfHDmRRjN3d8V7p%2BB8edomU6IOvw1CWTqwChEqzpebNh%2FpjBt%2FSaPtPzFZMDZKOoiwu1RnRCqw05JQg5oX3AQj1U8e%2B9EPvIfXLw57G5YpGL%2BojP5dYneowabeDj72zadF334mHv8WGAXVeubLewdJy0yUvP9jNaFV84ADkZh%2FWkEaTSA2exkKZ3US7qOokp53XNuxczqJKCw2RQPk0or8BTkAtOWBU5Gdq21kS4vQ7zs3vH%2BPlvYytTUGVAJX9ocnqWuSADcnCWVlF%2FtEmp8iywVC8mt90ETB9bMmMosTPhSYIFwUGgw5%2FVAalXIrWJe8DGlg%2BpdoZq%2B%2BHn898JHhVXXuPCM%2F9sChgBrxB3LarTJgKEVqMlcMUkBtH4JcMyHivJuy%2FQAFZyEgcgsgW636AFmD2QmQP4ys1hxwheisjMM3wosYGOqUBaeQtQuJiQ5UR6B67dZ7RTAc7IsOYxtBWRX9rLPdsHUifmM66Iyxv7muNunQ3COdCoD%2Fv2sAR6WEJwG0GGwzP2eSqsPfIAr3O4BoDJ38gumjyKIqWo7F6Bchk1WgaTkOsuRpzYljwV%2FTwItzQsnyQxlnRPDzdK0xNe1L57WsD403IU0XFDFgtd1cAh8pq6XtS1KGyYfP9V7ykVa1VmvVJQYLsscWg&X-Amz-Signature=ba1a71d6da26bbad2737a55374714d73cccd42c76580749f288034426690bb74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

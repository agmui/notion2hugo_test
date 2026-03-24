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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPNLC3K5%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtbbKryOE8gBdvpp1M4nPFQw6ftTE6HGRFrQT6Zw43QQIhAPNF5D7SGtzHV3%2FRhRwTnyPnqh0iz%2FTgzamIb8WGhvofKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7iEzLJ8oafFf03mgq3AO4bSKIBRJYnUDR3DTclBgjjm%2FEYWJ9gQlBENv12vLvrWwQudC3cMfCE1%2B9bnxF%2BjMgzhASTLuoTjix%2FsSEBT6l8Px%2FxXjS1eFJWD2zxW%2FDS0rzW7jeJCWgfw%2Fkf9hX3ihCd5H%2B6jIbbIHbNPUpt7vAR7PzB5ozJbyHrqbJxVjCxTmvQqf2uHHDgnqqjQMYVEpiB6sl2uR%2BctDFvQmrLMYcIo%2BvtcSr4vK7cjBDXW%2BpO8nn9URytEM%2BJPf0o6rbCy56qE9M92CQMSIqgIO0%2BvrTK%2FAhNqPV1lzauGpYJZtCyYsoBlGtY3JSMGnSp5ej5beY4rAmtLmjjq9f5czpFK7QowpsXxtHF%2B3gjZkpoRfwDDg8B7W8Ak3mbRMGphApQb0%2FdLvZ12bVmFuVKeFDwLxJHKsZ6cKFxLs6AjOd%2FD4iuf8ltxZffkhFgFYpzLlKtnIE5Hc7MqiJAmEjxtr5JQvp0QuVLsvx2KCsLQJ4juqUqeOIddc6RUu9086s1T%2FjSjSbZlSltB%2BWS7ONH43lbvabtndqAUXsIekLXCDWo%2BA6Aft1dGYR09uDvhkvfH4btBxlfZkqtbGp4GjyDQNtJxzr9%2BBVL3sv6V2I5bVtN7JQQh%2BF4JoJuopPXq0fFDD6yIfOBjqkAaU%2BDHFaTR8wY4OYUI38DzjqVEJ645hWj%2BqNm3MAslzukb9CMpc100cqthsDTQCD6EM9IwOiUTJNA94cvANjUxOxwzPKIOsqdabTEUW3%2FP9pohrhafMmkdiZPRqPYJMhe%2Bm6DsiIsTyW1tukLQelSJ5%2FuPG0NQGWKN20ULHOaE9%2BNM1Itz%2Bnm7%2ByfuDSq8cGFjcbnvWyTZwWUEZDBPrmIA9tUq4J&X-Amz-Signature=de1b3f7ca52a5e40dd16d24c2f4949c0e4ddfd2a8cabbdb683be5adfbab535a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656R2DZ2R%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd0%2FO%2Fu1c3R2b7OEvmStwzqPT66QtSe17Xd%2BoP6GENSAiEAjbLcgSTKtnX2tLEdo6a%2BK2cTuB%2FMQhEzPfbm4FFFHkEqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRVLc2lb9rCaduDxSrcA090xvOpRfYr4kgppMFIoEF74z7ubirtnWi20uY7Tr1zAZKiVeO7x6sMKzehtlTxhUV0QUziJyRJJzDDnPVzNnRN%2Feaxb9aeIqwIeEjWoqmPfv%2FaFbp%2FGeV9QlcmNvWbQm%2F%2FawyUPvubldTqc%2F2jgFU1n09cQaelegLEs05dLrgY3fMvIdbOjTPL%2BXunlr9BfC9YhR3nhy1i9%2FjPGCbR8u24iMvFTunJSrR827YULzYBEG03u1atsCbDDRq5U1cihFYbsedL%2FAFfWcDXaeKYfg8NUJuH6NTPLqEQ%2FHuZ3mkusevdlqAy2Bbrx15%2BsJyeG2NOLN2NxuHJhoOfgMbLpPRYNG%2FLvdI%2FJ3N8MRBvNedVsxlDt2LoxaYqxcy%2FB0uqzqhL3M797UNK8lLaGtNvsnbMJFkQs8KW81mH%2Bs1xLWyN7gTnn63%2BRloNGQ3%2FyyrvtOVSOazQpIdbksNAhwDgAIIwuJyRELXnjR7GzSE340OzX8S922ZKvfXmdeLERjSLvdHUcQQx2FQimOw0mTruRTmw9MCuKs0dGi3JiAXPagK9ntr6UEAFuh2EtoAVcxAPWO88yeoshtJ%2FVQ%2BXGzBtjSG10UY3nV%2F%2BHgE7vd3yH7vI%2FirbHYW5bfGHA0aTMKbJh84GOqUBP%2F3yPWzYjG5j2TsrBmMDGWrTfPWH65GnqPruQJKLwsH8%2FB1h8lTb552oeUQ23OBZjGqe%2BOFp9XJ8b%2F7d1zAYgbcYXwnx3uWhZZlfFYq8lBzEe%2FbnW2b%2B3h%2BpDe8VCjyH1%2BOtvCcoOaLWMjkVDKXxiguSJ%2Fjw15ipetJtuGh%2BocPF8HbjPDTsgJ9%2B8rUxQyes8eCJOuLsDo4toUciyAEIuLoXFS%2Ff&X-Amz-Signature=e75bf2b136b0094b34e35fc0ad823e06a62a22efd19deb5c99e38f2283acd7a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYVUJVBE%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLXQd%2F90M3ST7hMZDSrvfJl6%2BccnH389DIRETEkXZ3qwIhAO0jYiwzhHf8SrnlwnuKlEAGykS1vQxOUmb85ngBJ2pBKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVkxuaPzhj%2Fc9x8W4q3AMcEyHL6NMMqFbD2H35IGuHJ%2B0e7satV98oWOfNYhQnhClSFvqBjn6Oh4McnaHCzijJ0RjNQvLDoFH%2BazXYfSbtbTw0xtPc6wlO3eOkZNjCFQr0%2BZVbiJ%2F8%2BlWyfaLgY2GO%2Ff6rnwPO%2BCuOwr0OqGMlo%2F9epWpfCPUHnOw1X2I3hLUcWHEs7pdna%2FK0TtZHENvs8aQ35304rZhEpHgYjBfGeZKW7lhAXPSeo1ytNvKHVcvxbSyx1uZDeSiOoKGfByIoHnrPm1HSbW6UG34L5XjonhyVnocZzYdgjMQCu%2FLu0NfJ%2ByS9jGZCGn8t9oct4ivcvUhynutNmyOBKfzSY1n%2FHE4vF1UaJwRvv6z7bbNhw0V1hc%2BOOgzlfYvcX2zbcyfdw84PNHJWQq10rnuS5HWzLhNCFKg6OUa23hjDjOnlcH7Q21RULPB1lh%2BwnR8IlfeKTvOUTuZszouXsGNlEaCseqDJb092AELByrhTN5LG0EUojg2odfXgWnT6tDLke1JdSi6mvukKQ7gvGdp5NFOYHXd1Sx%2Fsq8B3vTrPlrY%2F3QsLWrs8NjFiLz1RTHnue62FY1xIBZ82EndA2tgTRiobkuNZESEC1mAhN2LQD4m29DAr5davWzA1hgfJTzDTyIfOBjqkAZhdRvzLtB%2BssJGN9W%2BUGTmeKmL5%2BQDtZadLfCXVpKEh2nLnD6BmT8i15u6V4i3N7DtJ8nTA%2BOKuCAeoAuzH%2FsQd6w%2Fac4Qj1269l4ZnFeF1wOESj9acWV6HW9zUgyb7kwQiLLeUE0Curtma9e4JfHSxd97Q2cf6kFwYRL%2BKjjbfoG0Ydbtgw1NiLC6G9Fz4ygA39bNxBH5nKF4PjogXTvv8Q28w&X-Amz-Signature=c0aca9a09cd86aaded3fe054aca2db9998fdc6a9767e46f8a6013cfeb7f26250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q7ACJ5Q%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfGmOO3efSyKKCY5K2BVEWANMY8QNzL8haZPi5Y%2BvKMAIgFOtCOJmOGGw3WvT7iTNj4vT9eG2W1Zi7ghTJGl84D1sqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHU1stCATMSWEX9ZWCrcAzH2F%2FbTsbOzFMVCVKGRdwyuMLyrzs6fWbQAkzlB582glMy9LW6fg0YQA4gCTkk8lWFH3pp9SIVe7XJlQtNvLiWtK2v%2Btk%2BcXzMpkvGscWW5s15WQU4yOv0y%2FEbLXN74n4G96yjF%2F7TnUzDA9LfdwifJhE6TnWIhNWx57AEyAImWHeObGUJeeD5qgwHmq2ajFK3eD9FVRUqvEskgs21tkYq0pPv79rGRiA%2BCvQDD%2FH8chg6ZQQaMV6Z5Fkca%2BJzwNXeXSixMlKhxfU2n2QKycbroj%2BDvJHEkHztFwkWojw7t%2FAUn9S0AgxNIIC1SNgDaO%2BI%2F6jmc9DBLFy2j8mg6xJGQ2zZVNMxVewToR%2FNYwPBy2053XYFlTu398SaIfpfnJH%2FjK%2BGMzV%2Brw0wYjQv%2BNXnQ5og5Z9vF6sYLZ0rk4vFHKSVtYP9g3ciOeON6RjmAukuizdUkkejOJO9L5KxNqD5bFs5LutWo0432pFZaf4kpwFEtBWZHjczAjg1j6JSMepPAz6RuUbAdezsC1Vj272k83ih%2FYa3AerrHjuJcDjTgilPlPJC0vNSNEvzpM%2Fyqm%2B8ZXZqcYxDVruTzIGq03OujJ%2F2lYfRFKQkluQG%2F0vP45zyzQVHkt4eHdzcdMKPIh84GOqUByT2QfYxLH2Ph7NHFFl8NEXTqZ2IzVjkp%2FQKo2NPmzW5Tt%2BqqdjbyMDGazrw4zCR%2BNqkC07wKZqj4js1MKyfQhhHSk5CTUgtz%2FDaR96G3sI%2BhBP0WdpyhS7qb%2BIJDOoZC8y573XJKO8QyrP%2FGgvR07SEHhUa6A%2FZ%2B1ubqw6E9z2ZHT8EtzMq0RVNBBfcg2IHnF3AtHyE0TkJMImUcwhpQpiTDd%2BZM&X-Amz-Signature=872e0b47c4a08063ec3a10b2d762edd6ee505415edf719bdce8279e35783be86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

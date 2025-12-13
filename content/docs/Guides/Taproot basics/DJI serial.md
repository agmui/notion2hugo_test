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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD2BKXCA%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCqhr498%2BQ2epSSxrcl0Is6D5CzAPhR7guKsE9qM0h5uwIhAI7ifxCEcBOJw0Il6AWqKwjV0PzWRtpKlvG5WoBs7%2F4vKv8DCBIQABoMNjM3NDIzMTgzODA1IgzUSKYaL3gytoifzsIq3AM6L2NuGhjhEeGFsOgiFKAZRpPVBouEa9bZKikc0tLbTvJubwWf3N5%2FpR9h1dOD1DSNZn8fenILwhfYd1eS89PcKhESPeXUEDIy450nm4sSPNQdOPY6XoVGdUfligfitnDV%2BJ%2B6gGB9NFGgCZSHwWn6gF%2FKDQ61r91yL65qQjXsDdlR%2FBKEPK35DycuvWHMZkf7wpl0KW0yGLmgs82DEzUuSkMtDRAZeIh4bNjouxNDscDghgvNysWzEQsdkDJDJ8c1tgaoU2Fil51%2B9rGFhrK33B7bfD%2F0sSK%2Fo5wEiodwZmQkJJ7RE8Lhj%2FkhBWEqENXBI7H5prKMqQQ5F9D5q3REnEhMLzDBScpXdCk0Fnt2RPkrQPx%2BtSnM%2F%2BE1oajc%2FEbjS293inTZ7fTqZurJ%2FaqxGN27Ojm2NzMN57CKzPa6F6WHCHN0vfmvYYWOGV%2FMx817IJ%2BTihK%2BTxF%2BxcRvO%2FHXknVsCxBBo9rtc4QG4pmf0QSzf01YDQycajUZjJS2H6uN36g9nLGwerkRpDz2ny5tM%2B57qAW7niVQAKiQLMBDXctkBDSi1YdipQw9YvhhnUW0qY97VSQwILsg277ttBRTmcqKnFssamzKN6%2Bhpowp%2FLs6sl8B7QkZqdAwiDCB9PLJBjqkAR7%2BG8fqveDgGoLoizzvanouFpSWaGBxpxWKWTWaskFZA7gcVdB7IgndeEqQv1IB9hAnH0D6xVRjlIjTZkbnvvLXRojqL3a16FkLKDX%2FCvmDlGZYo900bvLko8WT%2ByMrlXqwPMm13KXMikSPNAmCTxl2eDM4LOVbMU9ohhkbUCnMZ5FHsT5fs5VzsYAZX3F6AZpTFY3g%2B23Ju0JOQluH13F91J%2BI&X-Amz-Signature=b99f4e0bd9a7a83c65557f4206f94f6af79c66e65b42a6307ce2da9911a0f6f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDGE6QX4%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICpGm%2BzSeG2bQjKI4RNjTNQuGzKhr%2FAqK7ULyYypU0M%2BAiEA11mYQyKRVUtoZ5nZWYX5ayR%2B36e2h32eklv5Cl0dQegq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMzDND%2FiLdHVZl%2FLrCrcA7EKcyqyTuCMk%2FKL7Hj8rOwKYG1BoRUXLar8rDOR%2FA%2FEqNPBLfBu%2FBVMo6hSmt9B68tPMvaxaIJ6hezFuEB7n8EVTISdj5cNbZFz5JqWd0qdA60VQH8lTQP3EEAx5D0trNUyAKE5cH5kvrB5YYXMGMYIXP6DNxsVqcSRTQJf4PkDxEdYLukvbw5CZ2X2UkLMLdebyCXGibcpHo4oQ5DJ1Z%2FbQsnEl3ZHjMlFc%2BiKffwKtobaVROBpgZtHLeAZ1pg7sc%2FzVoxppsuq%2BBjctbm5GLQZgVuqvt4S4NE5mI96TPzENL5ZtWPWNcS8o%2FYShgFIdUPWaqcGQmCqew36I4Rkl3I3HXtyNrxMk4aK6jX9Lrr8UM8wN9JBeyqgqwd42h1pvUbwsmmHyNSYZdQMSleyplR5oQZs5S5DGiUcMxjLcToNIuM7On4tAi%2FkK0Lnk76Kll6If6vCYkpCN3uRDZnFg9CZ1fZGqu8Fd%2FMRk795EROQInbVcWxXEcHO%2Fw24wKDIULJhlN33z0uF41%2F3Z5uhjA0%2FeZC%2B6vhWhB5enOUaDXjBiDIHXOapE9aWAmlvWUTTnU6VIxP5JSERBObcURtQyT3XsbJ2yOSRN5Oyuv98jT4aWRf1Sd4b6LFP2kyMMfz8skGOqUBPWlRWycEAOchYlU%2BG8RuTGm8tVfZGdumyjYSj5%2F66LGB24V%2FtYvNST3sb5AWOP9vsUMfSjnfWKC78kCAbAwvxHybkHM8yADZyCCvz7kYWwBRYuAMPA2Sm0cg%2FXpf69hdqkYx5CTjdilfa9DGy61nzvOrkey27dVyowKnzv8Uz7jpaxQHghgMtFC%2BWfsnXn%2FE6LEK4qoyvvwGHgrfSW7gheyvpN6L&X-Amz-Signature=081b249cb06c29ae2d922c574a4128065a1e46a2ad240f44dffa8811610c2671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KQZRGAW%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIG%2BrhkEyPyd5%2BSJHTTjaLaJTVkoL7U7YOuhs8wLebPBoAiAa6PqVNTl8JFRjKeO5VIoZajpY9k%2FdFPmIu5AivniT6Sr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMAhR4lUA7fRk10ASEKtwDJeD2kAMEH4SdjmkL151nfsy%2BkOAyb%2Bkf1FHEwVb0MhtgEUTWQSwG%2ByhKPILxMQGeF9PfLXp9IQGEr6STZ35s6sYt3UTvEovB45fD0fzDJvkVkSKhT9YXuG3qI%2Ffr8ln6PExQ0%2B%2F34WQiyx0nrrDfH62doL%2FYNg769DSEpidQ%2FwGi4oggs4KJ%2FqlgyuJG5iLbAXCBDeH4qEeDSCGtuL8OmSIx%2Ft6MQQARfUUKBoMpGvyWG%2BKdzau840WLCHNdz8u0CQ79NEsp9SyAYhRmlh%2BZOuVrL8cqc3e%2F5DnuOv5gKKGlTCwgVBBMtDXhu6eT2pQtxjvDOgUigePjgLq3i4eRgSFnQYx%2BNJznLKNfy5OCMzO5ArKT10ZDahqMaqa3fT3I9x292Sr4EduNxpa1ER2I6aCvRXhRlW6ONXgQHCV83vm872tCsPnoZar%2B9TWPjIzxmlYJ715BOy3j0xCvX3%2Fdxz%2FBIh5YpNWaPMPSrOrwLL%2B2ARSAGLT6l%2B9BivG9QbdmaLBwrzE5ghTFZQfS193GzY7YUp8yH2ogtzKna71PPrajuFuLSlSigrAcX9YzBbTrn5Ab4ZdKM6U4bMBT9t1kkhLqgKw3qKAAMM1YTUEVPgHOWZSFxYpWJNf5zKUwyPPyyQY6pgHko7v3yKwmeyd9ZMKm8ICgRO1KoKo%2BccMXHO6KIoxzLkd0FKn2v9bq9AN5dPmTy8RMJJidgM%2BJTD7Eo5FZRmomNNR4RIKTvHY%2BU%2B1GswUfVgHkwCyLA25UsoZHqKgeNPbmbnUe9DltQW5CEfJDyBtg21ytx1n4BCxxUgXVkj4Wn6Amxn1lchXIcEgJJNSHLnc6tzLdlOy7HKY%2FUsHjIMX9e1cSVHow&X-Amz-Signature=ee7bb77f1baeec87e175901bc1a74b03c081bb21456b9278fa4b15591783f7ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX7JR3G7%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGmZP5dEyf3UtBJOdwYksgQ6KOv4Wb%2BqFrBTVFxx2NOyAiBMoRv7M1nYMtYast9vVGCdA79yr2bB02PVW97W9xk4rCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMuMKTjtXf1HO8Swo%2FKtwDIBexZNOEkI9QiAYZyhvE2QMuF2XCXHT0a%2BoZ7n5OgcTzMDY0toxThpb0FT4FLMVwNz%2FUrfoowdR2HMmaICaTroby9r25lkwG9jpOdmrjKBVE3hHY5szq63B3MK%2Feh5inmXUGVEJbNwDz2GPCfT4xNVxHeE2Mf24xnPgCgMGh6kCAxlFv4VRLy7kIvBkV0A9KNbUNi4frL7i34bf5TIG%2BEbzb7FFpN8DjwxBtUwO5%2FGWU2M01MIWErwvEvfmyO5g7roh%2FdTGXkTGwXU%2B%2BGHkAFg5aivlPkKLivpEP%2BJituvFhyU1cdm%2FuTODyv9404%2FagqyFxGHlie76aBiRcBTdQ2vHztPrAAzbL2EUs%2Fdke%2BnOQCyQrbxLds2be%2Bf1ym8qgWZfBbALI0RKGfmd%2BG9g83tNPe1ddVda4alYl7v832pjLHGY8J0yuAaAGsmg702ZRDLguKq4hR2E6vtabMvHaDYg2RarXlZNwTUccLot7Vmdecf3yBAn3whoFbltTaehRuI8j7FNeG%2F3qMvG8wY6l7DqDsLtIjVum534XTG5DAuESfdvUrqPJUmA1Wu0GZ9%2Fn9UySTblPelyyVKG%2Fz4GrJozmKr%2FIBF%2BKTsQAE3kXJM0hHkkojKjcWnBZr1wwn%2FTyyQY6pgGSFlbCBLarY6rRoo4JNWHbKkc85qayIuoFQx07kdBTc0ZgWnBuYP6RTMuikWFFR%2FEp6DkUOnk%2B3Krf%2B%2BaVh5pWo9LNBlYPJZQNgvYMuAYJxYs0Je1Y3CsT3erfj1uGF0nhjk7r25FEBuQgjNqHPsrP1qQgQR69Ye4e%2Fc2C1zJB0BXM3BxO%2FkSwXXNC6a%2BPXtqHJDGUVzq57g4gHcX%2Fxex0h%2B9WuZ3Y&X-Amz-Signature=e2d41d70d295555d92f87caf02fe17a32c6129a2b2d5fcf6572510f5d10129e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRNP3WYJ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIEDjsFEhSdf5CpTNZeR6p%2FxzDLayGazYEfuX3w9o2eCCAiBtSDCaCM07WamewJgRYmcf6KcturZB181lFr1oZwom0Sr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMljuWNMGDj3eg3qlaKtwD1CesgNMVG4I5NMaD%2B4d2RyfcXEmsQPwJ%2Fz%2BH3p45Qy1JgZr3hvjFWDKY9e3%2BCmhySu54mqzxQ2C%2Fa1hYByAy6fMu5DHprf1dESPdE74PnGEd9DVKkCW3onvEHH8Mk5fTn0uP65rG9psVqHonz5badGJWBfUwN42slBNjRBOthjvbVMce%2Fq96aLF7bSiRHhJGtA%2B93SpqQzv2512%2BHGStD6YsHeW%2BWCAnerArd5r9723fEcolzkRMDY40LHUgHp80mUCNpEIYd4SbySkW%2FZNMxK0T6yS3IlZMWQEggTzjUzuenEShk6dld6TIvQr8vTEarfeR7O%2BWlxNTR3XGa2Q5%2BEL9%2Bo8J43ErXxKRhP%2FIpXaVvDRysU5QvEWLT7JbqaLVmh70eAngJXhMtA9nGR00pkX4CPXrkLAcw9f65WuFrCTqJ7NPhcDdrwIJFjjuVD%2FSrV76x4wWBZhdiRxxb6yYmwHSfWRDTVK5Ro6t1STt1E1nS4gsBMApeivxqBTcFm%2FbEX9NqEDRDacXHvw%2BhbkH9TGO3XvTVIzffm7F0DzRK0jYFNHLhz42Z3PSNh06gY2hwSq84LHhWFK7VB7w872hVa%2BrlnULBOj7lQQbEokusZUGlcxivqF84nILvrcw6%2FqUyAY6pgEv%2Fs4SFhLTH3qIbyEgbnLN8KyaTe7T93WHW%2BCtQpQy8moISlpbUQSldcN5dTkdCsYeBrOd8UxTySBPFwnYaCXZgqd4hO%2FHM8O2q5MjBsbTKrhfdoDGyrA2Qb8XfOaZ2%2FIyih%2BJUE97XxROYaxR95CorHX4P9Rh%2BogJdEg8GdlUL6LrJGP6wR3lsBDoM%2BB5QL2lC4wg3taAs2g6q9dTAwSTATmuh9ep&X-Amz-Signature=b043b983e325ecec968b1c2540cf808b9988b2bed25c0e993e7892f1b4d72057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP6HC7T5%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIEQ%2Fy7Xl%2FhKN8lgq0kpz8QAoTOZvSLtT1uVbEFcbbaYCAiBmkXhrDxBLnLk3PJ8WDeNn7G9YuFyGdEG%2FWoFYTrE%2BFSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMUIoaZXJR7tSKgnUVKtwD7z3PZRQealcH9xIGUpLIe2iUjDgd%2BtpsI4hwX0HSwZ2W0T%2F59slOWgRlFJi%2BM5yOHqnHvQZ0FbX94HNsVTm513YdAvSLrA%2F3zJhiQFTKDUxsRR%2FaInXjM%2FSndF9rKpgDyt3JIoNZ54GyiobRo2d2lxXf53BxSRzvYA4hc53hqFlMdPmq64yixbFvMUTF3viiFKFDr7%2FQlXijlOR6Ot6WcqNfyqDaIas5oem%2FLiUCnjByLtLYi1Pmw9zfzVCH64w91juB35sovIsmC9r9ekdKr8HkNLYItckcREXQ8s%2B5G2uY105jAmd7w9VoaWMXF26pQMK0s4v14ZHpcFCIoe6fefM0koQsgmrro0AgBVSwVerF3j4cUPf642rayyNVs6keXNlsnJlGVAOf8spg%2F1lZ0aXmlvkA5JzNiB4PcI%2Bu%2BXr2t%2FMs%2FnhnWB6ADSyo8xIVdPxZURhaNMRcqbgGaQCUbwOvdl3qAOIxkQekQ4k%2BYzEBVX9JCXaZQWtMgVZdHfZX2gJmSr2Q0py4N7bzmWvenQJ6GRbvHUVnxBG%2FXTFtV5CaYWF25hZqhrmTsJk%2B2JT3RGbd9qwUZvTH8IzsVnKvX68WTr%2FInrFcwOT174FsnTVPKuIA%2F2VWpmJU2uEw0fqUyAY6pgFkcROVXAItzLyq6BL8eEHjBGw6eBgT0NB%2BRzkIs4S4KrZQMdNJJaF4h8bDj9ckNS5DKAgJA0vlDmWiOq%2FntdrU3GKXrNEkH7iJ6DW%2BqpSiy4twsoZJFQAsYLQ6fHhZ3UpxsE68M4fI%2BCAu4KRPSHUy%2BfjF1jEtb2IGkCwx3yepC6T5%2BORoPUR8RMRZjvTqCxGXw0vrCdXE1M80%2BZQrYOFoVbXoHMom&X-Amz-Signature=0988674d514207d29982d200cde3cae6466bcb32749f2da2ebd4e707312a312b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQVRH4KG%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCe9sbglL6WJkpsvIWZ7ELO9ozDhqPQUN%2Bmm6hS7xXXZwIhALP%2BiEQq1GZCUl3pWg2kEU6uSVLp8CoCFVLEcXKNQsaqKv8DCCAQABoMNjM3NDIzMTgzODA1Igyir3EJvGkZRf6%2FvVoq3AMLloUinjFLgqs%2BzJAiER4b3eKi5dxG9zbWs9pS3SmWvPX65PHas711q8Vzh5K9FpXNjrJ%2FphkousndRjE%2B0n6lrwMoF5RXPl4oyI2e2AexLOt7CVeCTd7eza0tyjg%2FphJ7zDo%2Fnrj4kioU%2Bmntd6A9bsmfkry2szkPWKP4QLeKj3gQVIA2ibYhEmfyoTZy161%2FGnpmHADIdEfsbsVWckFAbsZV7PPzJvzeiBR34xmR44P1dv4IfchJoGF%2F79S8P9VDDbhSXxGzaQfRUYfMj8YBl0PATKxlHKFHoXbwmMxylyXOPODbhpC1eOmqf7vIFZjqAoD0REQEXeA9nG9XP3GAMnT05k4WBCIrjaMrGH7EYlrqhfkI2i9ZZgZ%2B%2FjgZ8LZ84lEew%2Frjd0WPzyMt9NybB2U2NJ8IpWz6cO91eIfsjWSll4N9fddADYtxihyBEQgqsQbkpu8kkATSWV7RfK6sdhEa25nbiI9fOlsOpMpR2uVWSdEMihhq2bpqJICqrwkWuSzT6Tsi%2F5Hlnm61S16zDBs1hzMV54Nj5BxzBPn40vHtTNUBY6r732zcbOM0Jb7H3l%2FejKAg0X6yINXZQ19zQ4OyP9gN8Ifel2uPQUUb47UobIvTAGjVMbfAaTCK%2BpTIBjqkAREbSwzWMSLZNx9ebjiUvl5QxdicZpYi3EJmEFroZ7qiGWUsBc8I%2BThlJCaRvp3pAm3xganYcQHg7Rtt3VhFqXgYWDw7rYM49pJ9fH7CB2Clv8NgZGxGygCcRcJ2C4Edsf0gR2kD7YT%2B%2Babxu%2Fj1fF1e7dfcJnHsA1Ab%2BrV2Mxu7HqJLbKnpxITLEx02y2NxZaWCaNT08PSGJP3oiSAKxu0pePfc&X-Amz-Signature=c1efb7e83ca8daea2acd5c2b64c242c323539b293023bc478198f944842ee169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SS3IZZJ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEBVLdQy%2Bcw5Q%2BMJVMw1Pz3FH1vAhWqa%2FFrqqgLHPzjmAiEAlUydRB56vFNAEDLHge0HaYSLES1VFLVzxO7dMllqiykq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDBru595mgeofBSZdzCrcAxx1cCfoctsBRjYY8n%2FM9mAWErIOhuKYJ65jZ2l2QlW5nuDupIKfueFOHCPbmYDDVsbg4a6lH3S%2FgGu7ZZX%2BxlFzxBHxhUi1VXgSklTBhUHmcn%2FoXNC3rKkptJ4btXBWNplRBVU1jB0dEuWjgQlZMgP2le%2BaIwafpAfnCbvFPndE01XXRnblFkyoYohVxN9joPTPnXGRB4%2Fzz4nMCgLxG9D1375v%2BigozEJWqhEifb2ac2BL7NSx8JQ89YFvVW%2F5KY1zgZjpvCYo%2FnUlzbaqF78Su4LaZFHJc8XAlHe6Jo6qhFWgJVq0TnKFKHI%2Bo5zJDWRxYW0hkTkx0ChNftqqOuaJ1NNG2%2BLGifAgCPTqqQaEep2SATxLxHRk4R%2BlqL%2BCUTGHlu%2FK7U85HtDxAKUVfb4M%2BI7%2BcxCuIxjeBX%2BAGMIVIq%2FHcNgOeo%2B%2B7QAFNEokgjfWiJ76XwVBqYe51WG%2FVKXAcYcOguDs%2FXU0Ubdj%2F%2BUeaLKERM%2F1WGNi%2Fkd8hJ78CC9qJCuNG8Anv3zn3eOY8uR57fwcT1XEiYecmJBZOQOEi1JWQV9HIhLvlfAKM%2FM67CsUDDDk8%2FCaILf3xYyWWSgWkPXLaDGnOb9%2B2YtVQYJ2l7C2bw810y1XyEToMLL6lMgGOqUBHbVwBQKlgGJej3Ni2VG7OF58lQ7OOP26cjL7dnYtoZEWwfgrJUyucHs3qlx67e%2BeB3Hn%2BuFsA0zuriF%2BTxwUmdRgzLhenURgwZD8PKAzvz1nbgF3GjQtXyI6gq6HXj3lqdPP4tTp9sfWzJ%2Fbcp3td66gm39%2F%2Fhn3hkf36Z8rmh418gQS71Z4P%2FMtho94LXbmdW%2BDUCeTyQAiP02xPo87T6TPiKYE&X-Amz-Signature=3030d720a8ee8c74d2a653a28a431db90581612ba026a1e5c9afe972c2c6628c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

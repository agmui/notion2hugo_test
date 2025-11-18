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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVZ73ZWO%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsP4Fk4bEYb%2FjOU2e3LPA7KsUmgNLD9iw20tbSugTt3wIgGzLtZHPamWAR3d6kOaw46AcnokfXQUBglCOpjluSjBAqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtIHU%2BsevkXo2frpircA92N5IM5EHJpD6h70nRCIKIAd6sNP2AxMfwDS85jNu3LHurMDJpaS%2F%2FKG%2Be%2FK2MCUtSv1ugLkzs4YhWK%2Bzll8ZFVrOoKBVvi%2BJgOO7A89EsWXm47OL6dEdYk3G7cD%2FwT3pu6DxbhkRWPFRsl6C%2BzSG1RBkOnVw%2Fd8bf8fKVPjb6D2kso21cxYI327ccmGYL12XMHH4HGKzbennQvnQ7mP0EukLzN%2BNjBiz2gsZIV4NoBRv67ME66LkPAsYWkTOjKZxd%2ByVy8wPVFW87KlTKlYfS6eG9xemV7hX9XaxiN%2Bm%2BJtdXSBppQuFY1p5OVpD1Kxr35Cn3mphG2TzUhkyv7Zdo17cU%2F34nrjfPlfF%2Fa4SyA6qCuURvPTtw6Af62G3tu%2FGBEhjTeJFYjNi4ruKDh%2F6ldhw%2BwSvvOiIlW2%2FhAOeB3gXBsZ3n3f6%2FOVASepaC8nrTG8dCwyo1f71aBWhdOJRv0vbts2%2FGaRH9dG9Y28fERypACQaRQPpKTYmeQwmFzuGyinlKhZ1yiNmnVJE8OtM9TUJGyTl67weH8zk%2BQsN2wclLoAVSgighGNdyNyqTP%2FU%2BBa7DAz0Sx0L1%2FOPZc7RD%2FLcycKOnROkkvzQ17KtuYli0%2BUQo0EE4Aw46eMI%2BZ78gGOqUBR1y8gaHHSb%2BlNQZ2xBT8gzwFBUHSxP4KzzvqWVz5RXayrSJhUYNsszjyHTQo5Bb3hM9olRiGSDkYysEZKcdxGNBA5AFcfEfxKULOm4Z5FPpWZCZfb2TlOBS8uILFweTW60Mm1lFdCyKPHGbm630TTz0nHtebpjHW0u7kIyC4Moq9nOgZAIZh%2BZJBueEttj64B%2FwcGmBTTcMKB4uCprFGXLJi75Th&X-Amz-Signature=fb9eaeb1e4eb62b65876c2a078750b78c0e77f3b0fe204870ce2fec357041838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZM3R26P%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHZHnyc2o2JXoyljQAuAGzaM%2FBEkJkL6nJh%2F6s8ysYAAiEA5g9uSKdNcZd607uHiVjoY%2BJZ6ifge9G80GMtR9EiquMqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYW2pYUiaTPgKbN2SrcA1AsgfnN%2F33zjY%2Fn0UPUvfEuvP05yXi3CJl4icO9uPABIG355CST7qYG0HoMKF%2Fh5%2B6r293u03z7LQxzvn%2BB%2BP3hQzZ4rC9Api%2FwnHEgrXxTeX5wmQ7bjZ8apfWaoWYyGikrBvzqSGSffXy%2Fa0fy%2F9wNSjG5RoWe2ItZjihx7YsLmEqb5PFNn4MmGpl6q0lbOlU4cd5gZdtD3HB1hnh011vVwikuz%2BcgMnpJhkz6pZzEOw73gCaQZnG5bzj2bvqTiERxbLskmvfh6xZ0Z%2B95qM1ypI%2FGw8efxyHG1ccNY4WaoyOyGAGn%2FQdgHCKg8yG23dVIj2U7XObQf1R0uUBn4n3Bq7yk2C64Rftx10RfhzILKF6VKw1l7JFI6U3bstmby8QVwYOq9KNSigwe9k6u9HetboP8CjiyD%2FN7w9gsVu90Qe0oTUUWxHyKEgw%2FPKBCuGNhFt5Y9M9q0fGxc9mG4oOxwadSvBfGizHCKD8E%2FoHRlq2LQM0o0off60VEB3G3CiZ2ymtTPbXyK%2FSvEqDOCixllikpZ0K5Ip4gE9WObIrjqjUFw7ekXDazIsdH8%2FXYfrXIPVG8IMutR1697M4NJHfdHmfgXKALv0%2FOmp2Z4fDRUebQ%2FQytoRYmNIYbMN%2BY78gGOqUBMYh8Ih5Cfd2UBrUNnRif5eg8NVobGTFi4fn2B4JdVUKYNeJvCA2BvBn1jcbw5joOExwEAZT9FuPqwRabnkWwOCWz8IrpMF4jdGhK6gzDUusDbgB9zIJeon2unk26bwdig780mqdnl3bwnHJFEmMqgn5JlEgxUSgeNZtQrJsoKpZ5Qx76O2kUcfzTwWrUUGrIKypavkngmedXihvz1%2BLnjfHssfhD&X-Amz-Signature=81db598abe448344fd6bb3b93667684156201a4e5f041c310f88e504d4155023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKWK5WI3%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzGx20VRC96mZdNyFvBzVnJnF2fW%2FuDsQ6kYWegKiOuAiAGkEj7%2FxsHBhZG%2FQPZj3Qi%2FRm6JXJKfAdkMxSYSuPuBSqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqPR%2B0XPHLwydW4U1KtwDiqmYjp%2BsWQGeBTNxj22CsMG6xsSdhLPEdowOf5cDTZqomXhRZhnXbwcgMY3ngjdhINas1IA7nKx3luCPSlNGsexVg9SQEyERBY4UNX9lUAoiG0jY0%2B05UKKVXn73mqlPLw2URtK2EI17nPXD%2ByAA85le5NGsHLpcnXcGYTZjR6%2F25eAGVCQuMMDMNtAP2%2Fi9vgQSXT1ffitIR3PsXYOASXaiL%2BrKnMCJvrWRCWaLdGK9AgPPLDzouznAggYY7zM4BzcW5yqBnfy2yMAkj7Sc4lk%2BuAouzuhg46CAzlrBUFfsyw3OAflgPXAaJF9u4fqy7IOWCG1tXKieeQMBVI3bIdldprPzuE4GyzvYLwanIxZZv10CJQ%2FONc5MHvJlQ9h4GLVKJQS9OwymFBa0ioMImW45OZxvb8U0ke1l%2FeZvwA9fH05QSddpqm5ptDKx5cKbj4CLnK8k0jW1oX9gRFMoz8Xk%2Fi9Kt34nIJm5p8UDq4tKfEHiJHZZC2i3YUJW90SKq60GUj6hYeJGdtkBlLLf%2FCpE0p1HNZFfzkn1dAqdDrVUo0Ypmj%2FH2y43JDlvfERIZ0dNK7C3USZBCel242HPW%2FwSoHIhZMBwmKrczwLJS81VVRNHbQqUkJTf18cw7pjvyAY6pgGvjbSjA6shTALD1RGhn%2Brd41421NcQH4HyuPc8N09sB9Z8IA4ZnUiTAdPHayadxpEo%2BxpzbH0G3s28ACrf2d984a2zYNohPe71k1hiNDFYa%2BNCdq0fYU8VNyZkCn3JNn%2FeYWW8nFxK5yS66XOvPO%2BThnPYYFKwZE4Jt3uqcS9qvh7TxX91f%2BMdYAmnbaQKZvwJsbootURBUIkPkBvYXWFmd0Uq%2BaIY&X-Amz-Signature=e304ae87a12fe75c5da4bd0339c3bf30f205a487b7d8e5e4ee14571375d3acb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPOEYRZA%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAFqEw4L1YkFKtKG4z0cnwzpDrbsRlrEmOLrJgVwwhAAiEAtcXGHIovm9Z4Xjd8PbfI51KqsXbXr2ac5IoVYfy0YxMqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIewBNjFgU05zIMwYCrcA7bcF3ESTFHejdEESN0w%2BxkGNhJWfQuHrxc7dNuKituc50vLSX44QcqFuQ%2B2rJcyOJExakLZ5IPnE%2BLxlW%2BK6MbhVJWm1jZ%2BmTNjxIoBtb4P2%2FPwjLJ85o0fwV0s%2BlHhQG8%2B17w0kAYOz6Y%2BdNrRd0ybBJe%2BKkqY%2FxAWQwDknl5ffvpNHaJM67iQQ79VPpA57aft0p3Taq5jhjZQ1eq9utTio1%2BpGCG0L5dWJtDrXqASB8fAZkks%2BebfLuRSfUqhrsw71OgLm6m%2B1lbhjImGx%2BNwN5vg3u0zZEhB6X2y1PUXKIrg7TgROB9BWnXbBWP1OdtiE8Qi%2FK5lSUCddfmY23guDiVsW2Fn06o0qU4rsW2pwNqXPKuKdLdp2b73hvsOPwyhN1q4I3qVx5jyuJGwa8gkJ89L2pSG6F7MSBgD3slqWjtS0bXaVrkXmF8e383p1Z6pESH%2BYC6KXCJ7ueapYmazNME0uDx%2BCrdYw3Hthr14r3W%2BCi6wLIuSQwTR99ctK48Tw1M2U1J578rjV2BF7kxWOY2q2fqje52y1cScuDOlOmbYfh5MUYD%2BxYYnS%2BKsNwtlmMZGlUIQE2fGjvZTjOUqiK2rjIxUCji%2Bo4nqMM6rlkOprToZp8I9DsN3MPmY78gGOqUBUZvTauCAIRWLru8%2B1XjIbJuXzjynB64W%2FGGoqI1HJhuNy6ibdOnkgP%2FyyyTD7OKIsv3g3hmkCeZRL2vNSaIQ6N8uucFoB4DuToQvKrmm3rNhOF%2BmOZr1QK6wmdjTmjYuQMBIZzFk9QPOBDILrp2Il3Ch1AaDOaxgKAb6bPwYR%2Bbxctk7BEbmDmZwfPpq3stib9%2BRYqRqTdOe3MzqFWG7RJG5ItZZ&X-Amz-Signature=a54da8eac6d4052b1c61dec030105642a676ce3b3653e00d1f409eb6d1931fdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

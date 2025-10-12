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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654KBIFDW%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDcYwjpYrpguRsOykdUnBbMBIEGFw2VXg0gx6zDeGsnHAiEA3OGzOOGztfsSon0iwYbQAKNIc8EiWJaIpS73UvrdP7oq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDC6cKl8Bj4lX4pa72CrcA3On0OmvnjdL1lJHAJgdMV4cuZZXlULrP2mqEgpvmaqUGaNW2DDxITkafp5kuiXE%2B3ost%2B0Etkn4lN26yr2Z6btSqYwFsABxVpWuTTjWS5ydOImPcOrKlA9nolQOSHFIlmFyH0JSO0%2BRaAj661RXyXFvGtI2CpsgVQin0sck3KPF6Gxb1VqcKWDZyL8KVGg9aAaTf17LmArIX83ZIGOeFMBL8A9El9LqnS%2BWSiML1YkRooeszwO%2BsDgzcYvRPo2BHHs5bUG4YMxB9KlaOV9f5JtXhdGWKhLkxo4UWAc%2FUoAS%2B5fOweKF8gZ8NvKlI1i%2BmkaRcdKzOZedeBO%2BDemdRYt482ypsQHwgxM0LymV32lc4WvBTGfW0JeYOKHsnedFtLOGR8N6N8YxYVsOcqs%2BD%2BSG%2BOHdfB33PR776ebhdvCb8Gb4mJmgmm%2BYCGIPOK5jMn7gXGUTrX738bpe3%2BHUZA05amxh92wmlkJqKdzKXfuHF8daAmkgZ8HfrLQz5tleX7ekAQdlfJ0wHwSVoozwilOba%2BwoFPxWTgd4pmmizLwww0iP6NX36sTrUpxMhH485UkxDNe9Pj6byy1qDvUT%2FrQ9cgwWe4PaQt01QUg63rgetujZY55SebmbV3rjMKa5q8cGOqUBq%2FWyUES%2BmlHMYjU3%2B9PemzaED7iXi1wiB5x%2BpOifj%2BGxKlJCNz9c%2FCK0FfcBeOOc5BnyOS8C3YujP1nhiE2oiY2bktDMJhW7Hz%2BAJdSnv8k7Kki6H28vCvRfBXxB2tOsjlSJ0mA14SW3VHszYJaZAOtio3qNlM850mXI72ifq33tTHK9s%2BH4KLTPbDZds7kJJxNwCImy1pABU1mEoF%2FWzUlwhBBx&X-Amz-Signature=e167e3742874047dc468a078141a602b7e3f5c5c73c862220607bfd653af0997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NPFDYLB%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDsgOqkxDlU%2BiGHwwDbh%2BvhEzYMyAotVzSaaMa9Cu4ZfgIgOJTiWnMBDgElW5F0sBAg5IpdZLb4FAPc%2FCfkTmquQHsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKXep7G7MdwuRWxGOCrcAwPm0LoH7dESEqzdQlaCSr2j%2F02spk1p7KP9Xi4N%2BXlM6VyKFVKQotULUxQzwsPznoePYZJZr1gS%2FYfM3ZnnzgGwaQs6PYMDQi3Wx7Ce614cbSioZDc9zYZ9%2BXRRGnZcngglyveozmSU4FkRFJqpSIVhDRa5gdh13%2BxmWXpW7T9cfaJz%2BuEmd0eaayb1XjpoVPwirVramk2edqQ7s6wUqH%2B1ycC22HEo7J7bkoGJNhBS%2FEankxDl6mFc3J%2BRJ5PIVaEXeyJqX4EEq%2BNfUT25XpALcbm4Bde5NXAZ%2Fh2KJw7aV4aoMxcJ2mnaxhNURfy50QLWh9cMPlsB2THfhVrIrDZAwoPkeH08iQwKBffbNGRZFlHnZRCtvTkTSkJlRc%2BoBKG4HQLSQwvuCYrsYsKExwVA8Sth5N0KR6WKAmFa7efTifDvmMSNJYoXJoDJzOWsgaA9SLeoYQDVlAvOEdnN3CxLIYXFBDmHrX77gKV5Fk7BwBB39J1U%2FQj%2Bnv8zBFYhwu5RPxB1YmR7rvGoKB%2FoNU4uEW70kfJQulLsk%2B3wQjjR%2FjfDLjXnXYMuTlg09EZlDkVnzR%2FiEpa8t0d1jg7znZM2PAs8tLu%2FpJaCM6b%2Ff2XEKdSef4kt%2Bfg0MsnVMPC4q8cGOqUBkmXR0Y4hdIHFLY8A3oUqB3pJSMkfegtCXrjBbXW0vWW9%2BhkdSUPm8wUZ3pgCnxWg%2Bwcl%2Bg1xjPlXN4lujCglj3U%2FBhGzvwFK6A%2FcbTskOwHxuN57ZSORINx%2FMVNcARg0atvwKTdz6agCrNphHUDiT8TLsCVpt8c%2F%2BumzVw%2FKBL97jtP4bixP%2BqhHRPnhnapMXX2N6c7UZtsdXq%2BrYMmsOLxkkM2F&X-Amz-Signature=7a207fad88b7f3f5dc20dd8f813ea4a0b55462e90d7be1bc31eb771e91267d84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5WAIBTO%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIHrhecViVNMxlwEjIp%2BuYEyj4v%2FubGPm%2FiOHN7aTnuTFAiEAuoUQg1wQMp%2FprdRvVBRNh2eo5Gu4%2FzFeOPwMooDHKOEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDH0zULzmPXCCiUEFAircAx%2BaXv3OG6E%2BZr%2BpcPkkmpZ7drElqLjsN3ksIH5ow0iLiUDjYyz3JJam7x6aiHvim61KLbJETlNJG5cLyvTG%2FzRIyjYYGnpEg2MITKXtYhO90vxBtykJ484tE7uUe3yYgMvZAjnHJunF9rThwXb2VA2AR0G0G4Qnvc7K3%2FrvrpxjeatG5yeW75VlsOAyyPoehqS3qqu8L%2BqVAZY5m1C%2F3rEPCtOWmhqBp9ggDvCL5bsLsq%2FWrvOUQMObh3HHU%2FYTDsljjISGCJ3YjYw63bQxm5rJwF8E8m%2FNbL7pXLiuvmkwbVIojmfthctMjNpU8%2FCKXBMnxUcS0UP3gEobJhXGdjV0kfllSp3UNqewd5XQUy9rs0sQwvl1UacmpM1jMz8VmF6nvhZUVrIsIzq9hoBQ3oDX1syKDjvIq6r7xKRwPFNVCC0ytKfWQKBmDXlIuYr2AwEdiHVTQ0uAt%2F6rHL%2BsuncmmqndvZsRq7tr9eo84wA6OsX1wM2MQMtyobYgxv%2FVEl0UQt8g4J1u2wL7KU3aB0dk41Cq50tAkqxhAryLeFhgodXurSSzQNNjnYNLwEKLzWKUJvoOX2IOi7P8goXiloK88xkkEjJS85XAPS5FSaBjGP%2FfWS%2FIFboJRRpBMM%2B4q8cGOqUBvlm9NcU0MYPHUkUdX%2FppPWbtf6cjg8rGi%2F91k%2B%2Bmw3GviVZlLVBYEaGyTs1pwo9yMG%2FAuWKPAt2W%2FQb5G0s%2Bzr447qm13LguSbMQsYzFWrsOMR9Lm3J%2FiwV%2Bx11J8nmCzWEiVpLbx0NV%2BVvNSgiwNNKzDDCugwNQTZM2KfbXP2DXBuhNLTEyzr14ca%2FMvKs7EGIS43t6rERyevD0jXL0ZWH5kdEP&X-Amz-Signature=e620ffe78e5f6a452fb134d38e9db348001b749b57643422e07ba92d26b4dd46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TACAPNX%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBiU%2B03okcxyNMyAQfYC%2ByBk7xG4jGFaNOwjY5Mo3cKzAiBBe7RehpFWUldu4KeKTcmx0z0Yl5ripicK8VaZksn8gyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMeIOCTCbBFdrTUQmDKtwD8D60D5g0h5YEleOUT9lcDQhH6tY6KuQEhtEwY2Zk7GTwvABEWTx7eb27ctC%2FIhGdmNbM062HMZjrvQct7%2BlFYqRTY7JJCUHlK3s%2BLvfV3tF3RErNcmzA3lkgi7xPloN%2FoOAlBBgUuSWVWSqCq%2FchQULDD795uQacVNMB7M9FviEQ2BJwWO%2BwThjWHVIKhVq9gBS8mQcOvUP3NcYcVGbp166ey9d%2BNub9qM5w6iJu9M31QdPaO9rLmhr5ACrcVpyHjbMULqmwMTF23Jd84IzKwi3lvuVCLJDN%2FOwVacbkR1%2B7O4AwmQR8t4dBfLPIPRGuuXwRTJ2xGPPkrfF0ztNwEdV%2FFt5%2B1YBac4umXiwy%2BIs918%2BaKghYaBcXL1K9ykhbqnDA9PVZlx5Y%2Byuax5Gl7xp6%2FJ%2B3YZfcbE1MoANebmOoH1VrYHiE%2FpBs408u%2FVCXm1TkeyiLGlcCVrgvy%2Fzl1krJYZysA9p7tqmmhfkc%2F6PuQg0J9MB9yq2%2FImY3cdBmLlusGLBHTGzEu3TtZCGRyNNejYgGDvwPK2AYEc%2FdFu9037144kNbVo0Rq4rYR1N9%2Bgy8dAcXkzwpPDisdT%2F9MrpBZwW1h9%2Be7nYKh84imUj2aB6Hy9BqAKYNBuwwxbmrxwY6pgGmOsCRN9f8kSzE%2BVvvp5VD9W6BONo7kVbNq3ARUth3vSUtc5q6JndojRPA6YC7GE3sR3jRFdPgIBL33MQyUXtS9lHlylOP79MRpGxBkggEA7SXL5v6fRFBJqFEoBtnLik1llZ87MykgfczMj9d4EHK1CqA%2B1lfXPTzyhQD5wGOzbr9eK6r4x6NI4fIeJ%2BL4Ll13JuNOkth1OC%2BeicRefXJeIYxE%2BDn&X-Amz-Signature=047ec797e44add88521bfef39a5f4e3568e1190542477ef8c0ca47e99daa785b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

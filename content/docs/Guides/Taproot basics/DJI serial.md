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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA442HOS%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlj56gZJYx9WPoU%2BqXH6N8ThABkl%2FuWI8CYHAudL3UIAiBMFwfWzUlVFdUGaLaNdKMKSgfdeVrNYcY1Z73pJLcd6CqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEsQ7wJRC0IuszmrgKtwDXgxQYsYXmlbvbeFousbvfLBVdOZC3ZlxKmmr9jS1BLadZ9Uxnr%2FRwA%2B2ZTKK1tghAcLlevKt8nQGs0jWzDJmLn1vQJEIroAa1vPknzp8UXTM7P%2B%2FfALFNnrBuRW4wgg9kWWHg5iSPYLPiwMcuFsQZSW2LVfyvvjFDBnC9eAxyoR6AzT3hlKW6dQvV3U7wYLhnZfLu%2Bbri5%2FKcYdqJN7%2BeTfQnYAGOuwLXtL2BA%2B11r4SdSmuQEqbNaxTjf3rHQ%2FlY%2BDs6W%2FpEZf7stGTKySXmBy4Bl4MJkNiy6MDNpGZ%2BvZ7VN0md97egXq%2FmlddD%2F7LE6IH4b2lTt57ny%2FLx1DrIDDUxshSBhdYwQ9siVPnuP7ip0%2FLbW2pPyiiWNjXCAw6lsqy4uD7rhR3AS03fOu930idwK3bp5APhOqjT%2F35ICfi9LhQpF27m56gZGCpdEJiMKgRXhKkh5QkjKMKBKHemImb1JoOaqhjhfBC%2Bl6HT%2FjPsUYJQHtBH3mgz5FQ0bOvTbi6d7jHmqQSpmGAw0TPS3kG51WLU2PZ9J4pKRefz77VWgDzHJnB93oUxOGbm35XsJ3OmIDloFeQhf2gSLRlvW8SIi25C8GYrg3avomFWg9nx6WvHTvRl2h0Ci4wiqr1xwY6pgFLyn2lOyzvmdtJgP68ImjXvSWep4VN2hTHw9Nvqe%2Bko10P1HWkXDxzwa6annrHsN7yQpml9DvYpAXoniaYW8ZryQ0JS2%2FmD%2BT5BhdR%2FQJ86KuYNbVRzJwRK2xIPkJ6GTH1N4IXytO2Yw7fY7qY0L0LGjeHvw9rMjhdBHTPLvF2jLDGs0%2FVob8ArK9rEfb5mP9ako8ELqX8VcR%2F9OADfZ3Llo7s3Qau&X-Amz-Signature=592fea95ea09b1b0bb0950f6bb2801649b5b80958009089539299708fcea5273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA4NC3YS%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuGflfdp0N3%2FreokEduFlvBBTZY4QNpoSUrye7PwH01AIhALHhxRApN0bD0upO3HOAS5GeHSgPUSXR8jKSbxIilr9dKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMiWh%2Fklymi5x403oq3APs5inN65QYeQw6rQag4j0cMDimDRyIWW881BJFxTbwq0l%2BtwHxCJo4zmr7PSvLhfqacMLws15fqzWjaTy3gZYqwfYqzCYw7BEhrOJAcyOQ%2BYjrWtalNYW8k8WZxPa%2FOsMJBfSY9dN9JIkcc7eq4VNgh83IIPplLCqge2ZVqAdc5Mpv07QGksQFVpXM4slSNgWCA08zm8HLQRZJavPEAG6vk4FbwNOdISOmsRHlXdxrQuYQo4jpeBfhxFNM3QLXo7HVQH1i%2FU38KRJOZqNyf%2BS%2FcP%2FPxIX6jkOASjgJPn%2BlXe69gQ4npGROeNUhDgiG8O2fXU5ArCsUiksn0phFtatSTqBnDdoN3ZPp4KUceBFlyLXO0HLYXMaObv%2FZV4fqCkVpmpNwmz0tV%2FEarNSzASEoWnELAkB%2BQylllbaILTzPjFpqbX6n9nQfUjUaa9sDTLl3m3MXSkPS%2BCuXVRwi4SgDlGUzBltjxTBJNjbVxCySsjL0C9JVD5LeAXuUL6ccUcysQvKcs4%2FkqDmHEwMgQ2XMlq5LzlADrWdN0riaNX1MN7zajW%2B74zallOgRaOPq1eNWfKybER7W34wjLiJ%2Bfn7o50MY91gSowVvczeTtPj%2BayKQWcXB%2FQamC1W2nTD5qfXHBjqkASDtJuGGH7C%2B0p%2FRDWEyj%2FSgR7C0BzMtSXSMePFu%2FKK0%2Fj9KC7oGbk4a%2Bq7D8GVGAk%2BNWL6oesuabtKrg7wdE9SJS9UsRH6n8ufB8liF9DwDefRuJm1061bnQ8fLU8o%2BLT%2F7IgU9dvV4vFt520QYyZWAC8WXbuf0qABgsPLLNjuI8wd63ZI7xNeEe6AUSpAVfSAoLsueOy53OE0gHvZEItKqhyxR&X-Amz-Signature=0582b5f2b7458f02ad17b9959c62645ad3841bf0358a890fe785790c8ecd3e43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7SJ75E%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzgxShqY4sDb3ciAYHwoN1FxVQq3wuH1cfSVHRBzlO6AiAyvkbiBhwubAUYxQtFQhij0WVHkMM4p0SPsN924LqCCyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8PkQIl7SfVYA85NdKtwD2wqTXZfuFMycCMrP5AwA%2F1pl2oGcRqG5FdeTKI2gVWtV9Xu8gX4fMWSsi8%2BwbJHUY0u6MdBTB0VdRmSYVuPed2GUkqpDn8FmbezyxpohpOYg2fgDYKk0n2w5qWBi30uLGXTekiSrrHKbwC5X%2FQzQW2ZiJiWXl75NpOpeRWaeJVK5VADnF1G3C9G9bcvFgM4Dec0TQ00Cx9qGclI2LsS%2B5uvj2y4bQ6srKAl3FqzVY%2FyBlT9HyZjtWB7%2BFOVYh4xnA7ldqa9w5Kg%2BUbT%2BLIYeoGfgYJCnZR4KKVXFWjCsTkvrA17dZsyuQ1mo15vQTV8EDW7opkz%2FjIyvaQYTinPd9JIGCtOJ62x07YBTcqyT3pUFZyhIdI6xeO6ph519%2BNWr02L4tckkHZp%2BzTQot3KA1T7OXoUQZSWiQRpfV91T0KIy1e1Sh4U0OhYKxS%2BaxzhGFRIJ7rnRAyOVGtooqv0IG1wmxLi5S3fofo4S%2BcAkmgK4ys1vqR93go%2FwW93t6sMZk3UVVnNq7qW9Z1Yb7%2BhXKVCVYkcuVpxYinC0oUSjW6I7qRCXrqOgcNwvVkzUT41h56kSks3Iw%2BnbbFemtmWfrt1OkM8mpMi01BADjTJAq8dVNjHaRhZUwz0Sui8w%2Ban1xwY6pgG64cW5t8fnI74GPFSSK31DXzyHGoYrID3f0Y0pLP2r1t4bcOedfdhCcdCkdYQEvE13YO0Qf%2FoB48neJRXCFdaqY3SftO8q%2FlY%2Bk%2Bu2GLg7qa2t7vPikPEgneNum7MpuEBdmgPlMQ09MFxmjiuJUVSEIUiJBT2YiAbfSoQ3alubUb7MqXe26hSBZV0ZhQ%2BHV46FlFs1vb2%2BZ2M7FxiJsYozqQ0vUdkz&X-Amz-Signature=17e1923eb0ca1cf00d5b60d1a7563fd5becb3a80ce6783be1e37a307a9e4850b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBWHC4X%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpbaPtgAZG4D1nfEXujzLKZ4FtlHqoTzcG7sM9286knAIgV1XE5Xqpd%2BNRaN20Y1deqH34hiFboBeTVso3JIriEYUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvT0efCkwoAt25VUCrcA7pj%2Bhh52JguONCBaBeNPAz85shVhC5yizYySwfxHzmfilBM8O0AP2FsxgOD3z%2BsCSA0dlk2ZcURudKuOQbZB7j9zgFSWAYhARCY%2BRuppuVA0IUmbg%2BZg1W7DT5CRDCF8TuKw88Dn%2BYBirdBPrlVMhGz0OaP7lZVRwlFUrRm9L2X7HP2LJ2lr00IzPOeeGgTEJr8Op2ALEXSstTuq3TxpVDdB%2Fs9YpwaukVaP49FrxTxy2InRU25WlUYQVgP05B2d3fP7chkHLKw1laSopFU3w9yHMs6%2BpY8PZMPCGd%2BPnWNCtdWr%2BhHUW27tgFKdvkdsypbleZVCTm6yyv28ICGy1qLEUsG7aSML1ZSb4bX4GYz0pvXjT7H8dzqNP2akEQPX15W65VJBvDj05StCwuPGuDeQYoi9GR5Yptv75Nd1cU0ulHBaLAUjaojl8pjin3t6R%2FWADWYm4gnNhc6CK92a09fl8uY4AER25I6XuOwvw%2BZpyUKYDhhDZUZL0AqyFBDogeDSKVX9dcRyctIFmZPX6qV6YR3XWKgbEacfeWFHnLvm2wzXMsQOBBONnNSL0Lx3v%2BShOunEzsCUEfNvmz1u3B8TUkHTp0GVejgT9PJKHXOfblQR0WaBuFCiSi7MNOn9ccGOqUBD%2FvJgBpUP%2FB5uBIwZDy7BIfDDLXFXlsq1NQ93p1NyybloxcbjIFq2aAzWttqEo0%2Bb0NaIStB3NGCYq13eDjcIZ7EAWo5IrnDoxw2bIXeXMezsT6tfwxUxRUPToZSy%2BExsTHUUGVoe%2F9EtkWqh8CWhTiGfX1VfKqICwOAQpIGLAvJ%2FKPk4CIGViqQvYdw%2Fx3EPiRNRuqTKA8eNURM5nHJnxmREho0&X-Amz-Signature=52c502ed1348b40f6495ba263b9be2ffaeae5e300723872b1911be1cdd84988a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

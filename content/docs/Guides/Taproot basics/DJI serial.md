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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNDLMSNG%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClvahwyLpzB0GMwA3f1EEmxz6Yi6LIdUHJjF38s5CUTQIgQUgn4iakrb0PReUS%2BTBwAjZcdArnU4a9gQC23LrCV0oqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEtn%2FWrCW%2BCEWczcCrcAxwoInbm1mx%2BPY%2FnnnfHHAL98yr7ygHM3Pu9HbtN7P4CUyuEgLwENbJsbLOCylo4fnhFZNG5desMteKXu6E2K23SNAwZzugYPhRX%2BQOIlSJYwGNhgolDbAIkbvJpxSvNOyRCpZNEddv7lAZmQRVrSz2yZd2rtL0mY0aVWbwvel09hZlBJwjTYqOcb0SEb4McsmlSdPuxHjIHd%2BsTwnrc75rP2csZ3xSQX8vLTrkZmwgofBQXcGyUsfcRkvPk7by1Tay%2FLXFF6d9fQV2Kkl1rfD39XovpBlPIrhO017TfpKqiOTkEFZ%2FhCMxcRLdhNPQ5qiTwlKuNVVjdpZTVd3tO7A29hlDb4ephiT0yD8ioA1p21U3aW5Xm03cmIPkrYwq2xDbaGEpVmt%2BUy1frbMWMMBGfTLCBg%2BUPOy1QcHxqoehYbX0kf%2BX6izpkdibiNudp0Bvojfl3XLc3fJwIgx1RlnGTuzYDBIGhrKXZwPN9x%2BOYVFsdsbmkdNObgOb9PvFF8v1hDfNo%2Fj9BIsd%2Bd2Cj%2FCe94B763JPo%2Fd0wRy%2BV%2Ft9HGg5a6GJR76v527PUlnnXqiz9zfrO4JgtX76UTXgeOx1iXI61Ucu%2Ftl2jml3UW8c9rRsMPpLpC5IkizRxMJr30coGOqUBY3W3WEo7p3odBaJRxfG7MVaXJRIuae65st0jyZ2oS1KYUymaqThm4bAzNN1LgVuv4R26UR4M6DXcrEq58b%2BL8wWmwFlGCFupGr5KxUExhpJi%2Bt3uz%2BsAJwfij1WDOWVWNCfxste6hLB6FyRu%2BeoYNn%2BfwRWyOYncsTm23PME7yZ7akUS1vuk9oi4f007DlDceRm6cAJSPi6I%2FihW4h3n09WQoBOp&X-Amz-Signature=cdfd80e4dff0d2b0d76458fe37aa4611b3a77a991173af957b718ef06c853c70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDPQQ73H%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDZ0Lf%2BBbKrp4wJg%2B%2BK3jNzpexIaWV5wipoIHW22iZewIhANMyz6njcE%2FfXfr05%2F6tfDWggyONAtAkkiXSm6AZ9ta%2FKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzERAECfWRWiYfqIhoq3APY5uzRv6cWxHo%2FMQcmM7UJNYW3C6KlBk59YJ7YPAJgJSfWbbf2XR8n%2BNhuId%2BLUfynaMfqoP8ntGMng%2BN9iNPdqUPQQDizruCLGc0VBzaSNrO0Kdujqc6hojqytFCsGPXaaHdQg7emwoZu%2FPmUP4jGYlibipKaM%2Bk8cp%2B19KuZMECZROwkL8HZtSeAYkXLbJxX30t%2Frq5LSy9tOIUBLYGnlO8594MfUVIVpjJ8fSBEufUZ5n%2F0kYkeS82iSTggUipMZLzHXMfgaNbv8QwdsReD9BsipKaMvMbnd%2BAgusSYxLzWQyFKcEW0tUGruLEQZfEFpeJjDSnP3Ny10CIBKqIJDo%2B%2FWW5fA1iBPLF8VHgQXdJ%2BMKal%2BJiu%2Bykjze0o5IJ5FH3iacEVa5170s%2BU8IvxgxFDcBgq%2FUKX0YTGXjD1OUkdWMHpWlE2mizlQLkAv%2Fia1QyWoKmUL272eLxIsA1he6eTzECTh0Hsgps1iDym1e5fD8geHgBR0Eqh1dC3s630fLO7zhKmqFEAI76WtowR2fBnKfIIUUzG5oT1zNc6SCgOG7%2FhETvPEA1ddSv93qI4QoTK76BCf6cUC3sTLHUkxGsa930NIa%2BfhOWSKuiG%2FV4erEF7jLHkHcrf0DCv89HKBjqkAU5qQ%2FjUqF7b9U3pPdrMQkQiTjtsy7Pjy0b1r8SXmxuRurfeIJZzekjgJfXnycCaqFWVXs5xW7Nhil4O3KDXxDh6IRj78jggrMSCNht%2FUCGKJcsqDWhJ4PQecUhe5oq1Za9nVndQFmZgYe1d4KUNK6r%2FtZMiFClmOrYsono3qR0FnMP7fFobAK4HU7i4yE5L1pxr81q%2ByQ3SAm7ae9gnKfEtz8FL&X-Amz-Signature=5cb3c53670a4bc25d5ec1396b46f1aa2500f0320abb0accbe4672dea1f30a9ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GKZOFEL%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJwjKyZW%2BOi%2B0m2UC7WJngBDl7B86maHZQTwdchNJysAiEAsGKsTaKcMwiZPy2wuYQ8IG8%2B3p8GnfyM9RxYS4%2BI3KcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZZHs%2BXDKiu4K53PSrcA0RdzG%2BWQSSDoOu2834EHZ%2FP2TLh20Mg9hqcLvktvvQT%2FSl086g4MzieeKLuz4tzQLPsv1TpWQKF3%2Brv9ROvNLdcDG5cCBzgZdbIQWTHiB%2BZtWkUHR6E4VzR%2FNveEDOqa%2FDP44tkCjbtjaOzHEfp9%2B%2BL5VIU4tXFOor2VFErgPTc3iP7HZ9oJ9Nodoh%2BdBEGVB%2BrottrGcD4Y9VSWp5eiO3fOX77Fdv4tj4ZSBhPivfL91NNYDo7a44XHccu2xGL3XCvVJ7dtvxesazVXxb4JsfnPdB9mAmKgpc8GG9qChYE5HuYO0i%2BJIqca7KCaAOEkDJOqlIsgwpliAhYPTb0uVnM2XYdFt6f%2FeDvfJW5E4pLNlzxV1Fkxu26PkUMmDAkf%2F7%2BJgr3cWPqE0EmG%2BK2I3LsVAvHYtXM8aP69a6%2BGikhw%2BZY2lEOD24NIZyEhdW2zLd1OSiBxOd4eQlsKRCBnSUapa6cRzLptxJrM5cJMhlEhtpC9yZZ6bV3pkYzx7EdA6q2Y585AcExdUyAXuo4%2BU%2B8OuNYA3Biwf2V59x%2Blmgd%2BnWB8nFbz1eOoqkaDt%2B27TdMZ58HqyR9VtV8xpSZ6lbQnHW%2Fg2WNym41s5LCQalOAppJu4edKs4h2BaEMNPv0coGOqUB43d9IVYIhFkllP6xuSTwvqP6ZQHM65SQqc77yCrhrCX0ajPNmAlb7rvYnKai%2FbES83IEnuyz5tplle4b3U0V90wVkEz8m6aEeCTcFyhyBQCnPOp1Y6AkheZ2aIGRZ32Zz2J6xUmkBM1cwQEJMb3wR9Fv4grJQObZT3LvR1KcqQaU3KgnD8%2BSqZ%2Bg1pndnBjgmVi%2BIBGUd0R7oRmEwm%2B%2BDdpV74Nb&X-Amz-Signature=b962a3ef878aa538eeef93c7a2fe1470fa46d7b77ede09c41feda0c4755ef0d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBTQLJPI%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELc3qumGMQmePNn7Wstql6Ra42jeGE2yVgSpK%2BqE3CNAiBbN95C07%2FSSlxOoOEpMt4dWU2N%2BEUHuirbpWwA4KAUKSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2dVFaSNiou3DcuD6KtwDLoYfepDPC8Nu1H6%2Bj2%2F76MuQuXXb1Ib%2BH%2FkWAkbQB2Dlmlq%2BnLr7wAdgw0EqCiEH3RacZ0xYehANzG%2FWm8iFhcCh1zuVW1KqYVYflR7JX7GH6bZd7gRTnLEr2dRjxDydR3YiDBHZ5cLpomU8UoijAbspbmNFz3GJ4Mqn9ZU3%2F0DmIe6CePptsA5QTDx99LoS4AW0AeFHR0kFe9Vk1g%2F%2FReIRwbrm0pC6aM3ckUVH2bN2SItJTUaUsEW0SpAljCRRU8btCVtXjaV26e3j96fya0Qzh%2FFoT%2BobPqFxfdmb%2Fe%2B8edWIfBuYl0uoQpSGfvdJXwRjcovPor5qS4cLMmMwMSqXHzj6yKip3DcsQFR4ovHDWyYuu2Wja3MIM0SLcMNVzl1Vqbx%2FD9bpqHaJLO2mvq7I0pz29PK%2B9tCpGth8G4bfPMnW4lrcnhkZDXMO7dj8V1zZm58oRFYmZbaND7Dzgc%2B6NdBn6VZP9F%2BLpXnIHKTIFDJcYFTlmj7gt%2Bmz3NRKASggwFq3kLqtqotmgkZIKeFeLQyEjdrvyuDss8ZJuCuXQ2dG6Vi%2BXjXluK%2BdOE7J0Ev6Xs%2Bn8Yb6aZ5UM0F5shh3u3V0bdRrHJdiqWsz690nTfmOUdR9pudRo1Ew8vDRygY6pgH80mVcCKlk8bno9TQrnCOzu7QQYryYYP%2F5CzYvbow8MsYjXFfciBNRi8dOjdFMr50%2F0svDGbFZCgkfUkvNEwNg2JTJlDsp4iGoH9YqKkv0tYibPzWGKqPZmKHnS3gxZW%2BolGD%2BszMkMAtGilwOHwt4nNV0FtbcNym5R%2BVUA0z7nP6tlXoHevy54FIX3OkpF1tBZycHdnIesWPKlj69yps1FvBl0LhV&X-Amz-Signature=3ec20ff9ccdac2739e35f0a2ac80ce87c9d139bb05035ce10b4578b0bdc49a5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

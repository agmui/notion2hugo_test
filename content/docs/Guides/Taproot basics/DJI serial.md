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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL6465NG%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoN4npXJ3b9S4Bm4YJNT2rJ5XDRcrRLYt%2BzsZmyJAymAIgc%2B2ieZY9P8uBf%2FKbOEocS91Nz64oubz6ael5Wagd6qUqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKi0UU%2FyZhTaRaB%2BaSrcA5%2F18%2B53%2BL4htBCEmA8O9XfGQFwZUd4cRBo%2B2Ux0KpyIxtn19za7p8yoEmMTouXKeGcH0GprlreWsre8uQI4aT%2FhhLjfk9cr8DzduxtEwjG%2FLErPPUi0%2FS9W6nggL8g%2BSOxKPGMqV9kWEvfUeAm2KwCyaiXoannfgMv4yp%2BV%2FyYoay2zsVkalHmystQr6XUSf7UXBvq2c1p2BemCUeXRohcOSYFnDLcHZut5y3jYuO9GPviJhG0VK%2BbZnP1O6rf1OO3RobTjDGTb%2B4tVc7XC9DbhIt8esfFTL2eVISm3Jh8tUHS1%2Bk2fceOKCFbPUMDZzixBIHY8Xx0EJ%2B41gZ8JBKm6oKKKyz7%2FtbVmLai2V8Cjl2SvFACUgHn8VSxhITYhuyzlPoCnSM2ro2LT6TSR8yYLhMPhva23kUnZ87akkC96zmOHXd5JxOac0Dv323vLKRxSMFgOgwZM4H%2FLYgubPZAFn%2F%2FtJD7UUNm3AmcvlNvzxBS3P2uNOFIiJfnzbvI9N1eXiO%2FX%2FNhepwUvElJqdCnRhbc9DxCG1e8XqMyiDR2%2F8EpqW3lGvIZC65IO6JL6DUnn5niemLAdx72Nq%2FtCpe2BTgfYZ%2BuK5yV2y5txzl5rv1D8fgaoJ4d5%2BJ0LMIuC8MsGOqUBf1u6TXeXzudTDfWCa8SyO84UPNfBilw1z0LsEnoRxR1RiiGDOuNriIG8mVB7kpE%2FKoFt7Jw%2F5pJcLEDAmvIF66fYjdodzLAlF1yI87val3%2FMZAmIw%2BSPj6G%2B%2FIRV7zkHPng%2F%2BINHfT9a0jxts%2BW9AwvWSizt5k0i52aFtqPS8Pz16fpI9%2FkdOlNftUb%2B4EYxom%2FBmXgjy1x16ooRQG3QnFJbBMsD&X-Amz-Signature=14b3a4d65ae7a4fff4736a33c1a70f54c6af0284779ece71a0d7caaf36ac90e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGHBLRFS%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDyXTfgC0FS%2BW59pDuJpG8RrN8cLbO8ezXoyf81EFSbwIgb6WfDnkKWXpzV%2FL%2BXWoj463pbclWlemMvP9EVcxdKKQqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0N5Y0PPCoeS9VOxyrcAyJ%2BmqJhJb7rgA40EN3X6isFY1RFlP2kMf3DUvVrOcISx2TXtv%2Bvy73cQnIE9HCUVDBi0ae6yc8CmlxSspH5tMZLjpFbqO5zMX%2Fp1YF%2Fpy14yWKbFpi9Prv5TxyoG%2BHHVwry9NsTLjBOz7UhV9j8T8BoUSmTNQO%2FtlcGkuRvnoW1z8BN0tuCQ5HunXHUqpqI6vPg8vyKBzujpCcdmBlGTWYRfRff7oDg9aNuBGnWdM73tYGjBCdW4PtTi2AYzB86S5RQUd4ZSXE3gY%2BEYdrzWSRt1fkbf7t%2FT1L9yEm7oFUU%2B8rEwtZ5UODab6T8Gsqjji33o4KW99cdodgpQhrbVJv%2FDG5ah4XXT4Hwk9fIHUtPNwWos%2Fhu5yXxo8b7P3n09tlfS66znYJgEaQOiKA4BFLrZzcqD723TFpgcLcaSQ9S7GNs2JU8Nbs0G0CO0FdQKmywToQ0F0kCcpZc%2FqlDEvxaQCP1IVXvp1QBIMJSvkmbVHZLLXm%2BJqaAVLZTILlb57MtjmTxhWpp8e142pqysDmAGo21vE%2BE1xgNLoX%2FTEqh0DXAXHrrEkn0AlqkBTi4iOz3EJCpJTQ5GWQDFaiDuKbPw8W0bEmARcpWzlVooNlqOjMWTPq%2Bt%2B3WwyN%2FMKKC8MsGOqUBGpnGI56ln1DXd6RQvT5sJuM1pDCGyTmAqwUpx%2Bi8RyGwz6GVBFkYUAaco20EmMZtqDAF%2BVF3LALL3YWJSIdXIcPQYKokPYAxBvz2ml1gHlJ%2FrwkeHxS8%2F0VA5K1YBpYzOy06HoYlBjyrtjB1V6emPBfCQpUYL6WtmuszD0NFJrw4XAjIY3DQbZZXYWypeqhDixjabxB8xASKY6aNJqPDoI6aDFOR&X-Amz-Signature=1eb5b28d37713e9a17d0b52b5faeb078a0472ece2b98ed8aac1cd54df0a1e0b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUV6OD2U%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq%2BDpnWehJc2RRhvH48xj9xxdGbGmbpoVQR%2BvxWuYgWQIgKUM3fZKN85E7E5CMNqxbh4lfmjW3M5hvWF6cFS5FTjkqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCukV%2BfKlGTsQwJKCircAzOZxpAzk%2BBa0lEnxsybe1CXmJ22ECJC1WZGe%2BrOtw7mU%2BLz72nSgOrOREm28TFLzRRvKSB4Cm1e%2FsKljvXD9YtuyTd2yU%2FJXzN%2F5ji5IR79EjOgILu8xbnJN6HCjn8I2Q%2FGQ%2FIcFCkq2WIQuXrGz1HHbxrRk%2FZL6B6mhsaGD2MuQhOMFM8eb%2BfviMtW%2BZHgmekGZ9ucI7EVlXUdJ2wSB4Odv5GmrZaul5%2BrFfqs6XhKKXw0PWSx11bFUl98NDQ21OlVkYXZgf9Fvd4tI5Qn6Qykkhsf3%2F61r1Mqkj9JRymAfqjxKDn2Rhqv891%2BWOjm8sbXkkM9BWffIfG6vUrTrYKb8gcKNY58CWPIYzGnHcXkz%2FuNDaR1TXNvy8ZT5diZruT3N32nQMy1sTHwiSa4B3sZk94scGIxA53iWd1EhbhPGMXS%2B0zbmX6Ige79vij69Vdq%2FeKGvz4kbIB3jsUxTJA2l6kWUPJh6en%2FJIYxM7vEkAqqbSY9j0OR68wFM7rzOeykhCoMKYWHa5uq7QKpBNflMZ%2F%2BTVQy2OyvKQG9DeFfZKRjVickMDbJG3JXBtFAM1YYHramPwI2yjg8YJ5LH13NxwHcdK8iDde4igW9H4P1Y8PSuDKisT9WlRZ%2FMJWB8MsGOqUB%2B%2FZdgkBJ5VwmTBIUtm7udfKxl0Lck%2FJml%2F5xmq%2Bj9m4oJnNGZ8SC0afKXqfnX4VHvRAnyy9PjA6wNrZWLAaQsHET2Gpaebv%2B8P5Rsa%2BGzjeHMzwk54jQbnsYAr7zmfD52XwuFgQy8bv8XR9AW0ONdmf0ETJDgzj%2FTGncJJhEXHMcr78wLku46UvgeYJL1fNAb40bXB7s6Jr2f1sg8DqIvEhJ4wR8&X-Amz-Signature=0f1362e4fc4e2b1e940f07ae75a1fbbea1ee9975e6850f040aaf684c3e505ec2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6A2DK3I%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZMhass1D9I6xxZg14DUmjjS36Ue0nNR4VxDKIQQiHigIhAPqJP6nJ%2F3drMMba%2FY8TLKyW3jMjQZqBIXKlnJubsNi6KogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9vLTvPtUIxeMpyCcq3AMFTuBu6yDorjhTkfzrsLdHC1P17jkVS3LUd7d%2BrcrUxT7PuQuSNrgjTDMTD4%2B7gONKRzLC1t1Gyt3NLzM3QoNqPlVcYP%2BPOSroCt2MEAa1ZozW2vKjZJPze6SVTYSIXShrDZGnmbiw%2FYjXsxb%2BRPzWFUoohsVqwF083JD%2B8s6RdZedqkCVvqhpY66mDo6j6N5ZiyV9UEF%2BDE2hEoC9BxFKDVEDS6mpSe%2B6hYYvadyF2YqAt7pO7AAKLUGpMIGf6OWxV23W3x9WJCYEVsd1uj38f5rw5bLT7XcEA8xgbvScSQ%2F8qvGGF1sRCULmvfOvxrCISzej2qkPOzen5%2FksPi4VGtXaaHx6dG%2FhX8aQP5UbWPuaeHgJM61t73KUIYnaj%2B47qLZnnDTaZyiUqo8%2BIJWRLWEeAuRJ0uJRYKIVXZayOBrlG0fUwlejWQpzXHI%2BooRqUIOLXqKFm5ClKeraUXcCTqGadS2TycSTnnTDxWvgY%2F1jZKOJC90aezuTU2lTpbA7UuWLll1GvFIVsjsFkN%2BdBB4tJ1md%2FEACfIF6Fpnc6xR3dqGRejaJpW2XJn6px9%2Bgiu%2BagthPrYEJSziQ7Uf28auVelI1h92XbF9kswzuQGEMcECVwZnvE5YZRjDigfDLBjqkAZsxt47CLHn0TIu%2B4zDro11zimPPRvWivWXiA7kOY83Lykbl6wmVxwFQAb8HGhTpwTnqU9AveGxpjyFPupS8kgWudN4IITS4qyz4aw1ce0SjbRLJHn4xqRRMt9MdhAd5XMoVkw2CCbWI8Gn1GQ58%2B7FaWk0Rj90d5QC5PdU5%2FxAxacRbl%2BhlBrTAzDPl9its4p1oDD9oT5tWOw%2F8t5%2B458LWlv09&X-Amz-Signature=e5b9cd81515088812bfc3783779b7b1e740a7bafbe3fbfa77990e0dff4f9905a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

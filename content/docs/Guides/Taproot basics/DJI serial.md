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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBXXC3SK%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgNQjt0lBx7CUy4zCdPpdha5BPHT9mAID0teBIVq3D7AIhAJFUNjLG2AbrEUOd%2FQ4M8v1ZhXeUzYDkueBwA%2FZKhr7hKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDq45evVjMrgaGYqAq3AOxI%2B3KpGoI2oqrQUbSNtyWTlHfocfUKZz9gFm5hnZBujhEefzIX7zaExtlRq1wiJgzYjEbrH1ISyUA3nfKiGYglrB6dZKsLZCnKXH%2B7%2Bj0kqnKcRZxaN1qkc13BbkrkXOWxcPOs8efPsA3GGsVEhaMz6rhRV7S2WePipiGJfJebeV1xXGKx4tpPocrHhVYOYukFxRuQeX%2BmndJd8o6OnjxjVk8lEIivyThxNULeuKlxxmdEEmjydCgh3QdTOtXq6SEu%2FjjzeiL4o%2FPTOlQmYuqBAc3%2FHBXCKnjMv4w4oorocS39yE%2Fq2dTASppsWoncBhh2NZeocrCO7%2B%2BrhCwXCpJC4gg1XxNfKfhzO6VVdzdZV3E9i%2BZMxlPrIX4DdJr66y%2BG28KvyMViqNGzuSLx9jNDcxzafuqlUO6mNdrjr48DDGzPJtktD8ZYPCR6Qkj4E2SAUX10GYMBhUJ%2FW50fhJcHODqScdOxCAtEbcUGkHp3FAtn%2F9%2FrMsbAkGZRioBJpy2ga3jMt1FeCUavZt83Ooe7gmXE5q3rFUYGjsA7lMkk7x130Q47jyL6uwZXwLxydKK76uiXJjHvehtJ9sGC%2FuEeaKUlIB%2FxHdALK0NVBoOoRz6gI2GG1khp%2BgrZjC04qrTBjqkAQOz2fYf66oEs9vYpAsVjdK8aBgdD8NRhTQUgmZa4GsMZ%2BIKSS5rwS536j7Y32jUFjVh%2FwI5HTZcL%2Bb8rh70O2IV4uLYJGyiuYQZ7wtFoFzkdUpQGOdd0Ao%2B3BIXs%2BhXzyWD7p%2BWESznf%2BErHatEhN5vDyicCjU91RJc4gtjugk%2BsymB5FWIkft8yo6ZD2ziXflNfi1vczQ57gigJbb9XMYkDqB0&X-Amz-Signature=7d0dc504265a4013a5b9842d4ce78a7852e4efb114838315b848878d1a715130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAMA2X2O%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfGITXBUhyDFt7PMvh78IhlWnDlC00tJXWeOHCarrDcAiEA7KXn2SOYiPvvyw1tAAU%2BB6cZQTlxmo28SQC4XFGGvRQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXrQc6iQZg19dnvmircA0%2BlS%2BKeYaDrW0uyj8wYB42tskRGK4mHQXdU6Hb0%2BTOFW%2BCn9IsywFhL0iPHyZH7zXcWMzvFMsN8zTRbHOfaFZM%2FsG5CuuMAIw8lQW6jNR%2BQ0UvE47HtHkve0XWLktXgp%2B0iWggmT8gEWMp%2B9inLfTQzrJ688m32kehPeUF7DeuO3I8RpkxPISqVT8KHc4RjwC9AWQ5sInlFvysFLt9e%2BNQ%2BxFmJrMDA5yLEB%2BC2vGFE9YrhuG7lQKqzfUXa8fqv%2ByP50N8oEUqBwJOAwZtFh5pHbKik%2BatrvNI%2Fp0rorZuICxcz3vUkahMPGkisU5o2U7G3bXpvr3YOngii3bz04EDlfJsO8QWIg3p0Z73Fwc0oxKNEnyI3SrYfLxOzpbhrW37B5rfjLiXumDiFssCrQ4L7nC78di8xF1El%2BvyKtNmHg1HjWdi%2Fe1L6yu7tZxJVg3uQkJS4GzDb0zAuLDK1xX1YkSlBctRjdQN72Cu4KiQhQBbxru63wZiodlT0EOW5x4j7uVzTfCjopP%2BUsB86K794AE6gtIhf0zLOo%2FnPnazxVzZ5Qd2BeIaNqGAcRaRb2%2F9Q14TcX72vKMKRrXvpnyW5oRfcYWJ5Z53C3ngb1hu552bT3ZrQdT9aijIkMJ3fqtMGOqUBJoqxWgP0VQYJnTZhTg4rGiiwSoq56IEgsUXmbpBovUU8EygZpqxm%2F7druno04FrH%2FLFB75e88tsAuMH%2FXAtlygriBwRdYEUEqblSWVMvse6n0oj5tepW7MGilv%2BcknkV102SOyCh7iM9%2BmPCMNK80%2FJztadnJIIllOMFGbX2PnvrJNAjgkGnOANdoHPTsJvgha61xEqEBU2xwZkNG54pJVSOVFmD&X-Amz-Signature=e08aaf7d9e2c3702b57d31a1c95a9a226073500f8f0be026e6b789edd66ac1db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7LCUE2U%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyNp%2FMS3RgNDuL3iZ1rN%2BERCzgHIK%2BlM0MKSpdvRzDEAiArv08ULttjsvmQ5pBn0l3GrieS1%2FzKLRlTzGA9Uldx5CqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqVgVHj%2FDkEUjqG6IKtwD6mLMwSvx6k%2FR0z26mp36emWp56EkEL9CmnsKCeEFPUZ5XpiCLyEHveUPHrst06XQZ%2Bcq1%2BfBEh34WQMuoRrtZ7c%2FF%2BUJvDSDWR37Ivhn90P%2Bsfk7Mib3R5%2BZtQDTiEPOvODk%2Bs0UgNIS%2BPrgkC5YvcrKySybPvhQjI343GKbns55D5wkvVl2gwQ8%2Bly7TqsYXzba8HOy07trLsmZQmd3xHH4VtHIiccmrvd1Jrpu1YeVftSEn8YqpuUCmGsSQSPQU4XPtkgrWYqV3JfZPtRF55GlZhpt0TKBYKRaLjLaNYSW6QNNxE16I5KhBPfZHMzQWcq9xtAHdwpPho5glu3Lchy7XB70oi8Y6lOq7XU12IVaOMulkk2vjglQxxwcLCJ4uKTS04XHABtzD4phKRta1h9DMR%2FZTQ3mJykRLAnOMvTPkhZPTwiJE3hGouiIEkK8H%2Bn%2Bejj763wC%2FHrdmZKrg24i8az%2BopwjkXVpYm89%2BxSfcUH%2Bvr8FKOT8f8ir8%2BikXnQPz1aNMIL7xcSrYhDRkPA9kYPtKVxGCm8%2FQtl4ije3uFmIli536H5vC55Y0%2FpnXJUxxdy2FCTZiV8N40HUuobExm0t3U7Umeeo8ACQh%2F6ZAX8dLRxRH78ufPYw5N%2Bq0wY6pgH55wCZrBXdokBpSmCSyBSWYqGAB5B48uByOc3UaT56fITOjyrEVEBONuWoWB%2BWOhTX5hIR2o8dQ5Yc4S6aE2dec49kpApPJpYcxi%2FPNsu8NqXSrjvIVu5Y%2BD%2F3WJIOAkAbflJID67hL77EskH1cFNEFHHo%2Blm12q33uCRd01o1K%2FBBT2zeJ43TW%2BigCaGb3bHgedrGZmnKDxsWnXZaPlyxiv%2Bvfo%2B2&X-Amz-Signature=36052ee1ffd24524673a63192423979c0fd777c87133ca46c464eaf0feb148ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664H3V2DY%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEy8FtYAwka5NtgF9A6eEMxLcySsZIgtgrxRWKnhERfwIhAMLOm0aU6CnuhY%2BwHEjrT167X6Br%2B06gaEseOeRrELlVKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt7kapYe6ZhJ2%2B%2F6oq3AO2uTPec4rbhgVAZ7ehqTiK9kDnVjZXtOCpM0glRRvOMXEF5YsSm8tsZuFeIqYsIV5EEweNqjWT0IcObSFl4xlYEKEWdXhOgoKmXGC%2F0kz1oPk%2FDDNMq0Py4hXvAMNfRk37GS2mhMeq%2Fp2H5Rt1Rzw4I42cWDFbQQCmyTeltN5zjC%2BuBjkzcJSojX%2FXS7%2BnkCtDxMeNs0dv2RzMNt1FDa4THmAV7fvkdm21ZqePufzdURugNiH%2FkOBeHgo%2FPs2w90Wbh%2FSNRMrw6HaQdtTrWszD2T355v3vpIoHTl04VIalL8Jgyx7H2IZjuv%2FDnMsMhOAJ4EwfQKyg7LP%2F9g%2FuoLQtbQbcP7WabqJknK5%2Bxvo%2BT5lipJrzrIQixeTzkOna4bR%2F6Bgs7DKgSnP4ef0F58mYeoXJb%2B3TNzA%2FJMCovoS22FzYOPNuziAJbDlYnU5%2BwSBZEfr345n%2F7gh09sruCKbOXAs%2FSKNgppnlbMDbGRuaqqGIzo78VEqAiSspOIJcwF35hiwY%2BuFTC7WmvHqOzl9rCUQsBL54Ujun97aMXdJRGMDDTUjiZiA8XGsWLj8zzwz31LZZ199aj9cE9IEizg5Aqc3hcmlnnW4pMtILpI4XhGnotm3Ukem4YlB9vzC64arTBjqkAWf6%2B5QyGFATv4bLv6GMy3G6XjzFRI1drXGP1hJgI4TD20ytOKT3iqibafltm89%2FuxhTd%2Fv7bXhjTjfwK1P9fc4D11uXzsYb8txCAL7xZGEb1ONf7hpDz3Z9dAvOrnNh%2FFxxLwkvtb1UiSmI7mgc3FybwwjK8dxGGemsyN01qolwwLC25b5SlZxJVF8l1ERhOBIjtiuBndMTZRpN%2B8TGX40PQjwq&X-Amz-Signature=a1298f553db02b09f0a6666b484a2dff47b4ac5a0d8d0de8ad7d1e7dfdc631f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

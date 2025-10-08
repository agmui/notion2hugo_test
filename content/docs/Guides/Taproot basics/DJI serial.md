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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C3UQQVX%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIB2CCTKxzbZvO9f2I0J2ux0aixO%2F%2FmGpfG5A50d6EwFgAiEA4QO3%2F24TLJsaBkPJfGtjSdizWCEPsOsBuFr8MohSvvIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgBUGqM8iYQtN574ircAyWj%2BrJxwEz6fVU1n2zxwH6ZZ70ZlG6%2Bikp7VKFr8m%2Bb0u5GR44ZGwGEz%2BlZXLw2bxppftKCZ7rPY1Lif6m%2FY548WqMZf9nAKljU8V2%2BP8HAVUyOPjBtIaJhvuBnCWCmd0mf3%2FrKmcjpgiuuSfEdzBPjNUL1Av74%2Byf0WxTyR1m2Jwud42I02f4qsgn%2FAlayyDFKTanh4RUHFzFPiOjOb4ilVZN6V1GLLUlcXa373h%2FzPKSDj0hF42OWfpl%2BohiicX5hZLMG8cvMRVxJ0z17UBrscHxEahIEmawBEb3YB81yQVoAcTVXyNx8kL%2B%2FKMS0QZM3tIEg%2B1QdoI9sqgfYJyydAB4CM2qaSEfZExfOSeIvGTiY74JS%2FcyICcx8n5%2FXAONAllTgiIbr%2FJ53ddWG3k8lgOV71BtcPC3JOe44qsXJZQicChM%2F4vy5W2Dr8uF72eOz5swM3ro%2By707uOb12aSdQCiBndwIDhACGC4F1M3X1dx2KQynCZ0RfQNxog9R15BDrlmmFFB4ZBVqIvejsBzBqKHl2plz4%2BF7Qt6xN5xGe9Kzmrd7VnryJ0ppyCS7AvigHuOGPDiTjCdE5M717WEmTPOfj301yuxl7JCmdNepR3J9LFHGp%2Fo7EqV6MK%2FmlscGOqUBpEhW2i1boUUJHDgg4SxgLnVWe%2BhG7OHfOXANgy2jBw7uIR2N6vmBEafX672ydGD3WFW9apGFSR%2FBt1LRbsFkXjDsIwNjIfeoemvLOmLd4O%2BvAbY%2Bo8Cy8Ffs9k2bO74KGMeL6vXafQTRgoBMmNpxVRbFfu5pSWb9rg4DlCmoFO86n3oiK2AHmAJbpYzAWd9hB91COO%2B7MJjrg9jepzhu7%2BAlf552&X-Amz-Signature=92f8b318b725d69cdba2dc4a102bccdbc0509f5810ffdb95bb59afd7b4dd5813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3X3ZKU%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIH5fD%2BhCMpqvnpwvwwfI8umiD%2BaqwOAKaGaeAavCTLyQAiAL4TTyfRNGEBtnfC8w%2FdNhw3nkaOvTVIGyKYyzJ4cofCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB4mN4OFe0XceIn%2FpKtwD7VzfoQq9ehOMk26Hr6W2Uc6VWWNHuEamfHuY2cLcfKHpsyz1tuTJ0KO7qc2W9DlDyeBFNm8%2FFEIf6k3hjx0N2Qo%2Bh5M7RyH0uw%2F%2BKKVrtOhH5d4grmGBnZjEg%2FrLejuXoRm9Kyk4OxGOIqttpMLpNTq%2B5C4jf5uCszW55OETiAd70S5365u5abJ6zp1X9baOCWu8lyUwcTu51OiH56ApHMndW0dcuE%2B25Y5C%2FFe3MxUDahIyQHskxSjGEMcbYJpnVdBwtWX441ZibnaoBkEEYDSUigbaXZWffiEJLdjjN8xbFLrAlgefpPpDymjG1KzTidOYMUmEgf%2FwFe8FHP7zDYT%2B04IXWDNz91rXPo9U9cR7NbL3Ezp8IaaK74e2M12YMY6n8HWjsmWE64wFBYOcYgYLZsiLYhTimFCJW%2FEXs7MXqbA%2BQweTcwwyaIaeqja7ILJ7uEjntJnKS6ilAEMueIUJj7Hh82jmzx368Guq7GZpaSQyLQV6uK%2BH5S10jF%2Fq20qiwY7Ht%2FhoQ0RghugVZQZo%2BxeQYAgL2UgfRJliIlSdva29W7sh4sjWzqrOpwZaHJxjfw4Le3bchT5K61wqHb5WYf%2BscQW0AzJxuWU4fhmvA5IaGvAUyax43cAw%2F%2BaWxwY6pgFrJnG%2FRHnT0Nntb7uqVOaCKyiwX%2F72tVxmxpEeI1Wrcsh%2BOikL3glt6KXJQXo0KMHGGl6wRKtWJhSgO5R2whXLmNvkJDxHk6iJSJOkNjffr82%2FaOB3VzOjjHyMA4f%2Fe1yVPOk2Y9FU32JvByftjf0gT7nI9z6BAFZpRd%2FU%2Fjb4pn76ec9e9Ea3b2gbBH4cbdLtET08H%2FCsnzEH%2BKsB%2BLZDIU9uJAnu&X-Amz-Signature=98e5343752bab97616a70dc445e4385617a83c08e10d87e6a2ed02d522a1360e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ID3HXNU%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCiYqBdj3kEVBxaoJjuM5fjthyeOoSlcmqR%2Bw6ORLiYrwIgZafdNidB7GQtKJzK0yjWiDIZLZZXE8%2BLDVihPm7RHVsqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYITl1MSNBq8l3BByrcA8ftpCltc6kKVzm0G6%2BYyaog7XPDWGlTo%2BgquxupbYVzMbQT8TmH0TW%2FFigwR1%2FiWQul%2FHDB8yYrFZfYTQ2uPzTR%2BxZtYFrUFVQ0UhYuuFA0FJlEIsOEglb3YDiIVJq9BOtgcweq2qiUWKhOzfL%2BftJUvZRcWQt4GsIwDGQ3WhewY2Vh0Ta%2BjFiOclSlib2kOyqpalM5CnNYFa7J6JL6CI3Xkm6p6AZP78%2FOKRXFBdxpBBnr7%2BhURFcFAJ1ALx9rYpM8zDH2bKZScdYxBnVtT%2BHogUnT%2BAeW0WPHlNqKfFeK%2B7mgSNb3AcO8UMDYTKQXplRR4P1mu2j5V%2ByT8RxhYyi4ySXHsXEy6%2FoE7ATuIe0YIzRv4AnY0SzQpRDKCT2kk41UbSnKAHppteuz4aZ5T5PoF0PqlF7FI8r2yfIrJ1ay9BRjNQW8W96orwJpRtmDVMy2iDVnn%2BqWPOrAGyrJ8btHEAMNhw49sYM%2BiDmIbNQMxmbYKGUDdLLsbUygst5LfoKLMQDYZwVltDdTV4iX6jCf2rc5NJKMXX8j4xtOioC1yGLIRFsMHx8DP8BJ5tSrx579ZIcOK1nieGv9mfwdgIsqy%2FqN2Iz%2FmRMPDDqcOg4qHfDb2nBfSRuQGL9vMJrnlscGOqUB%2FmCOZ9ukEPjcQeSeXjHIxABnbo2BzlvESzlobl%2Be33Z%2BGSqCSkCtX8eGWTngynNtoFFO8m2NSZy%2BbIEfCvKEX9URuzg%2BGLU941KfBMFKRwm2BftYq2NfM%2BFxll8KkKMAqH3IFnSPP32A1ZzFVm6DdtivRRLAB56uQ7yGEvq%2BTwS5f7KFNBFMd6NLn96CDgm2I3KlunQmiIpG89Lxwu%2BdPB1C9Bzg&X-Amz-Signature=9553da1839883fad59426ff4856382172e28f38eb4bd06ff1e0dd4cee80d29b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTSBTSQL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCB%2FhET2hxenrSM7%2FUDS758sab%2BgCJKH4xvb0QT35dLXQIgb2sRum8jm3os0FEI6eUxl%2B4DCekI0Z8zAZ7qMerRa6UqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHasvg68kmTpXhR4circAyfwn4xqVTtyaYU7Z9nPTOhigQwUSZm3JliMj8RhsFR5xETJGgF31oADPit5%2BQ3dQNDN9qylxh1fPz7eLbLK49LqVdsWt9tPKyWLLC1TWmzbC4XSiA8Ql%2FXsSDgXUi4pGN6C5865zQruyt5vQTGLCRjJeEovwocNhubuD9QSvj3sW3ewyIXtdWNkm2vZrPERby5cMqPxGMJNujjem7ZaAw2f04Ei2C3hwAsjVOlskt%2FamDdUyvJCayQJqbj2cT3mn%2FmHoPtS9Ssb9uJAY1wwLNwRf4L2YYh%2FVkR8n0DqqmU2hE0xRTADtCah0xRRTBH35bncK11HDHpvAmqbw%2BCnxbuGz9IVx7DOzYo491FZr2HF8C%2BLsFFbo0QSqzdCfAz34MU%2BJImFsfpF%2BZnig%2BfhMNVKyMebWOg%2BHLcRhF8FCps7K60VaHRt2g98nXXS25E6KLjKVsKj7Sv2oDbFRYcgHBxX%2Brd7uIVIOYqhDtS625oKOcfFkg63NHshB0nZquZ%2BVu%2BYpja3i3NP7H29Sgn9rjfl1LoXbe8Hk7Ts0bSnWG5hTU1FiFIlAJFex2g0a8bKJshIh1cpAlaj%2FIwb0gM5oA5vWJv75io3PHS35kg2t2BSNIMOAK%2FhshHP7uoIMPrmlscGOqUBd1gkhwxgw%2Fw1t8y7B9j%2Fu9VXMnsRWq8SwXuOFTom78p8WE61Qb9mGoVDkytEl3%2Fum4B5XpC6y6lm3Mo24iFor1O1fNtTlvUmHEy1U44tNNzNncAW7QjV5n%2Bm6TQ%2FhVyPBQDGNjFVRN6OfrqT7JGOzFAXy5kQkJt9yXHIlL%2FJC6bzDPga3ee%2FjEoA3fKX4Ccd%2B201NC8wgi2SX%2FQVebtqyXg8VA3%2F&X-Amz-Signature=8d07a0bfd3d33471d5e081eae92afd7bae5caa7cde83b12c65a4cfa89953f895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

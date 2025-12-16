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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NT3WLKJ%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOJh7Xr6a2Zlx1UC0FB107rkXjVjicumlCwCXWpA3VpAiEAk4I87nvu%2FUrHgtn%2BoVHcWizW8FCRM4Oj%2F7EkEUgxv%2F4q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDKJ0vCM37nRRCtcYRircA9axuivG67K8krv2vZR6Lan9mMXKZ%2FoCdftZayvXh1DKc5o9vx4LSr5t%2FsgxJBiO6ThtC2dJ1XKjCWZ3Vs2VoMh0unW4wBqETHnDqlGftVbYgwcQNaGC%2FgpH5PYNbB6IiuM%2BtLOI%2BS73gZLtJVRwa1YzwJ9MCZYsjGrFZsZSX%2FLVMlhyzCWTx7F7xWg3dWZdjSVSu1tojLxIGrMeMBf46DtSU3ODh%2BO3rPyVdcXm%2FLMhKV8VDdOyd%2BEgXYqRxhP9bppUtIKt6EifEJeclYtYKoVtqqZClYpWwm%2BM5b8VYGaAgO69G0rcIXgHRqFgAZerQXIImfP%2FperlwJUYuclQZ9WB1CI2DmUrIuA7yuD1ZBwm9JLpbCP3bqmYukDSL1WJqVxhgtkn9z7MPG1oEsHvfYxiwwi8URb1MehlNT465JxdIvW0Faup7O2PwWfDcFi812IhOTRqgR7cClirVK7b2vNjHHrRb3wgcXsmZfs0UVcRrWMFpNfvJWWblXxNfUynOqeY7uJfPKIKzsnpw7CLfrfO8%2Fs0lcHInlrKctWCk4vredMGnq%2FUZsqtWcm4iPLgysa2Landmf9oIUrmzbxEjYrxDdtAaja%2BUGZ%2Fx%2BFpXHbsjmHoO2vpiEuWv5JbMIvKgsoGOqUBvVuyIVg9U36MA3dTwq0Gc2yUc2GN5e6RVUDtIfBnYEIp81h2X7DHRLBRcnFyEcAGi94zJvB9Nx0PUE2MqZBc6zqLrm5g4CIjHlcyzfzm2o6Jm56jvet8c3z%2FVeCQi76V3CK8a5ZzSe8whxpmSvwNf2lkBy3gvfraT%2B%2FvazXiVSIAEG36%2B4XaCYP4hz9%2FBkDCVO2ZG42DKNOtStf%2FAG5%2BzXtMEjMD&X-Amz-Signature=6ffcd9c98591a23a7c0e6e2a0114895e8cd1c2f940f207f13195cd8c9dff0b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZD46TWQ%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwuDKz5xZ%2F9GGAuXIP0cqwAEIkp3VDPUkLq0V6oR6ISwIhAJNHYb0RwrkSUJwPpctL2AE0lTWmk8LQWQQxUP1N4vxoKv8DCFkQABoMNjM3NDIzMTgzODA1IgyH1pY2WNYMBHRSPVYq3APDOf1KHuP37yUYZlxebiSI%2FhWsY%2BszDxfIsjuHTKdszOYAw5f4v156NO9Eh6aeaX48F882hDE23usfclBOiM5Eg1LkjcXqw7NGzBg%2FuopKXcYFVJaowLIg90JnudWNHuxCejmEo%2Fb%2BeNQtZxxyq6UbSqKeFNvyMB33W5TSOZwxPHDPLdaKR0bIrUObYxiQ1YqDvSmXFNU8D4crd6I5EnScpQj2qyvqg9BJty1sr%2FSDzx4hroSgtMt%2F%2FIOk2TBiSrW%2BDTLh6cBVmg8OJRZpZ5%2FK79kvj6%2FPJ5ize4YLYi1leZuA4AT7F8r0rWkJ5Q5D5tbflRYtDDOpVyPmUwdWiZpVBw8SRJOq1z9xULdAJP%2Bl37LMittmiffkpTD8du3O%2B9ca59IyEvBGlrN34u9an%2B%2F4KldF8Fz0bQWKKU%2FDdERBbuHQiDE52DnVIa%2FOWDGVIh6DSeLMGV6zM6UMHF35%2FDwlOvz6geAsAUG1c3QrA7t%2B%2Frd8hR2Sn8UwX%2FpwwHxxs3mpn5BKA1gKKABmAfxuujq7RQcgzFAlfark1IX1uaYrP9i3z9KKKKJ2IseaagfC%2BY1hdqZIhlowRo%2FxzzBCRQ3zfcLjNgghYG8U3bGsBpYgdScbfkFfOexvTnR7AjCEy4LKBjqkAa4VB5UlC8stgFPJPnTyUNVXA%2Bg912AOuuys77OCzTg6L74w3FTPYi0XIrF75958Zuy%2BwgiaMGz%2F8xsnMmlMFBhIKhwBtG4FNzKqzUYLOEl7c13Kd81zpgl%2BPp0Hz6mnFtvGk3IgHOyFbwsWgQ3v5bsnAgTNMot1UlInBdvwXY1YoKVH7t1w4SZM4vijwPLLjsm48gRNTO8q0G8bZcHnPqzSHhlM&X-Amz-Signature=d65c15769c23bd867f66432b9997021bc8b294b0d518a1634e89ac5453269a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFWXFNRF%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI%2Bh2KWMNHR3Ca0rdQRHXtzttX%2FqwGYL3gXE%2FNaGff%2FwIgbGT394mL%2Bcr5UPdfEW90O2EdMrHHV0RCOvQP95uYCKMq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDKeOwAxrsnUvIVejnSrcA6xE%2B8WTi5hSL52%2FEQfMcNSHaeoh1Ktv%2FNQk3NkYFHNB05c1Y5zEjM164%2BD%2FBW7yiWwULPvi02cnV2zV%2BcwxD6Qz0mgjxJ0v7gOe8t50mIoGwo1ZU3niw%2B%2FuoRzf1LiDqMN4QXnucL6BriVXT94s74KKWkYzmV%2FBRruHdcjlp8oFtRx7WGZtrp9Ozm8qW6ce2ncUq7sIymaHsk%2F1wvp2qPpxbm6AfybBMzaDvgADilTLCqO%2FddjrWd4yRTtz3a9YtPenaEhxVWAQ5SOevnfjVcDBhNhlwnWczjO2shyfcNLHNHpGH8Y5jjMTltwfbR3MT2q%2BHPORlX%2BLWSV1hLUSsf9W4biD%2FItPHa7Ez0DyJS9n%2BcLw5O%2BUM1Ky3ta9eoV5MFIdWYn9CSkBMYv149KjFbTqakh0Z5W6du8lwt1zx81UPyC5pIse9Pt3v3TfJC437iCd9EW6ABD3pbio5%2Fq%2BFpD%2FNOjbkCVeAbL4v7vNczwBNeRXgno41j%2FAbaclp7D5sg7VN24FB%2FdCoA2NnI6bhDv4j1A74dnfcz5eJUYsV5nuwdpGJsVz0XGFmeb27WMU0g8gGkulZ5TXWjrCRgtCn9R3hDQdXGPSi%2F116juN0BRGBmAshy2ZIQ7RsosTMP%2FJgsoGOqUB3LoOmQm7AlG7LBgbHr%2BrR02bmu0XNt%2B97LfhQ7sLBVF9xCGJNA%2FGZw3e0yPacdN1vlw4QCkXLJpy3m2IZvvL9k7XXbPcgRqppQm%2B6mQ8Kja8ECnvC2F1OlhUOJFbTzDvljeCugxYh6f0yRTRj64PFHBkXp7LKfoPhVP9aPyOZPShioHhyao01nyLtolVVpTR0bhabmMa2epofSwM551SJAgLmqOm&X-Amz-Signature=7fac9ebe763b151aa38536f06282f67d4da44bee7018f9e4254ad49bf2f8763d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2GJJBHO%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMEphYfVf%2F5vchmHs%2FZf3E%2BDqHeHOR9kAK5p1zm5faoAiEAuoCWpX4lWEjhHwc6YfdeEmi0vdRq9dEYQ%2BK986H%2B8m0q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDCQ1yD4B2y9xG2QOZyrcAyfAEAvl8GGL4A8HQMI%2Bftv5o9A9xOM7j1oHreacRgxWj7rCpHIgG5NwXYDupWi3zGWJlz1h1HxzWW7kX%2FiVuOCq9hNeYCeWKr8RAfP6EBxPH43d4Skwd5Ak1vI%2Bxeh1OjCtEo0YHUrNgo87msV%2FwEI2%2FkglGYUvELmDBCYW29oFdy5H0upwZK0FHu7LZPcOc6kWY6ALOk4OMrBcvWDFbos4WRDsPiIgkSGNds4kBqhWb9CM6PtQcodR5ekazjgki7wVrexSITilVj2rpcr0w3Rf5g7AcdauD6DEkYQVxai9riilgzTiN%2BZV%2FUdFEsd3W80QkEljmkzfo2sTWjT1O5wVEhijAjd1giVr%2BzR9N5PoImB75mxs4vsW9embZeA5NOMlFcCc%2BPAa6wZinV%2FFnyP2X1WGYjDEB2SB3eMHRaew0RhHnPfPRrP7MGQEVi1d4RjkAgF0dLjMxQHQZxiNHajICFjhdqOz6yWxWC8ETlfmTjnJyxW60fdKqgoSrSNxi6l7ikDRZqFlLxIeRcYOIgd%2BcKa1AzwJHoGMarIq%2B71FA0yptKojBYaTogUrLxpKgcpXfLpg%2F639SI62ut%2F%2FZZU6VFTkaJ7lRY2uiJ%2FSr3MLWt3Ei48bMnp6ZBrqMP3KgsoGOqUByReZm5tzgIlVnugLeceXI101KyYwcei%2FACbO80IdgFjnA%2Bm%2Fhu8HmVA3OuNBIV7wjfKwg0%2FTeAyUHr%2BpgFuIroYRrfonRNhvM8r6JCYyhdUebstj4UbMYq1PQne4plfSeQEupelCTVQyCFAGbOVUPDICdsbpwO1qMO89DfWmJyigp8Fk56ttC2PPchvCFuFz5hfaxH1H7pwyO%2FcPY%2BdW3caxVghp&X-Amz-Signature=908773806be14bbcc47b1cb226f1ea984ef316d2bb662f77939ba80cbaa94ae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

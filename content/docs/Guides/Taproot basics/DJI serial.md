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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YILPAWY4%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCoN0vS3TogXFtiMvr9%2FK3BzzXDtGA5%2FbuJ7RrXChUOyQIhAMtZoZcIMo9sxE3%2Fx2Qp%2F%2BQuo3sXOTXaObMj8iTNVTBwKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy87K9298DvOZAAQmMq3AP%2FULM%2F4%2Fonh9NZtqtnI%2FCsh8%2FLrXQ9v431w4kAVPN1wtgttwY0eIBzeXrI60XbNvw%2Fl3NVgdG9tR6tNr2k%2FksT8A3NOhEsqYsZ1IjJKUanOq4BXoynEoUFpfZW5l9M0rKURD6CeB3cujCZuC6iB1mvJeMYi9QXmbzvGUpwZiz8t8JI6k9yuf7PrA2cXosKYA%2BeHtJZHRSDf8a79a6iD2vtzMsUH1Occ3RonbZ0qXNr%2ByuyAwwPcR7HllIY3K4qxFjQe06nZcZvppDAzTvEO%2BG0yFe00qnahW0y09MNJBRX3%2FRY6%2BkYvpFqWfoOc8cJm8USmn4qebxazzgHoI2Rqx7Hr%2F%2FqP4BWwj2eDWqRkwCNZfYht%2Fs2mrzWwR4Z4K5zHYuma%2BetRlyXgLW1wxXViTyiFzKiJTKLHz9Fy9C0JwAfEd82pXciZspzzB89zdra9M0dXBgDxox0E2EqyQBXK2kYwAB6A43HgtH8uqR1NisA46rsF1uuW79LbHI7CEeZGO7MWLM4p6KrSn5Wv9%2BCQq4jx6u98SWQcJ2jKUm6PQFWZ2SePM0pCWNyWjcvXP5E9N%2FlpKCXnk5HhCEGc0dBcOb1C7h%2FpXsI0k7tHTifqjlS4vcEByjRP8BHEgNapTCI2KbHBjqkAVQwn2QAkoRfSISRsKsEvPLx4w6jpgcpcGyb8M156SeHcRLotPmylE32YcfahsqrHbniz9MKWTlOUpKM9vDqStJ7s9P7xP6Z0AAT%2BNiSZmlcytORU4v%2FXpUkC2bwXr9fNJM%2BVu4XlUZZRLuihYrMW0BmpFOXS2Af07zuK2fE1ekH658oYzi8Lrhus2l2pI%2BMLij5U%2FSwGNDYNitMnFoWUi4MKGWU&X-Amz-Signature=d5b900852b99e769b57e2cca71a82f3a449cd01b6ec7160d68a75c1b10b8a82e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMAN6GS%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFxqZucW9YumAlEzC2R8hVjvKVVAo0tXg97JANhIfgLBAiAjaEIX3W5tw8nu4Y1%2BPnJ79Ki40kZigtlJJQZJ68%2FnPSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH1EjeQumz4qcJzs2KtwDn5vvTq%2BMJ6zuJl0Jtl9kNjO4Ouwm9b%2F1NYHF2SRUA19SAl0RXWAYv5f2Fiij%2BzxKL0v%2B15eS53OJoZi%2F9d5R%2FE9GDuTRrPVO5cxNNs115vBKjGztX%2BmaxPIxGp7D%2FwKIv8BTKbQHLWvmVZBh6sTTUS1TfqTzFqP9S2KIoHmitpxFDRMqdeunrIVuYsGxwQ6gcyurFkpOTt68bGwdHnni9VJfKl2qpOp6D2BEgP3oX6f0SPXMYIlKSmcm7O3dPnmgU%2B%2BVO%2BPMaAAdydmI%2FoxbmYbIdBaKK5CD4UP3IG%2BuSOyIBoC3JaMbuYpSk1U6d27EK3tk%2FRQFTlTox9yGUBhuncIuWsrHe7WkQb8jlshWuEtaHiY2Mz6ekCQ%2BEDrRlqj2d0YSv%2BxkmCcSHnuQ%2FMmTBheuGG3xNEKuq1t7Q6z4amOqvJz1Lvvk710YITZyq1uj6hNJpv4xHOYVn3DA1hMAkSvORD%2Ff1KCUFJ4DQgkEnteYR7vpE9f5Pby18wtEgyuWlsi%2BkLxbHU5t7sQgBVjObDPWWZn8pQgZmzad0ZrRYTsYGsXHzJRgg0Bny3qXgf83BUzxkJnGszIKEDfzmdsyu7tkNAO1Wq9PRlLLn2CMMEdjllGcG85puqJut4cw%2FdemxwY6pgFblj4t63x9EmkH3Y5w5NubIqzddkfr8V75OwrDjMFdLQv1uzNXoEKxNYN9mi3zh3kTmu5WtTawZB1jR%2FScjIjFFs2VE%2Fo%2FMAEkX7i%2FCo27ASK3Qa5koxv917ZFjMbDbBXw9oYalh7EtqIr5YxS7qYnCjQO4Fy7YVMbVKF%2B%2B4aEDKrZl59pc%2F6tyjN5Z8Zwgk10XMxkI88O29BRoqI6XZPpZ1X%2FrB0g&X-Amz-Signature=4ba0c5376e0611d8f75f25ccf6149b51e346aa3d3dfec8113f6ce9293d59a26a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TUMHG4E%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIFK05TtKH1gOZud0SFQUpyeGFfXPMjqD7Mo1c%2BDkDqu8AiEAhAVFGLHhfUgVzFsmdPj%2FC2zEL4wqFkGp2a23CfWdG44qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAZei3i1ebKgY5cCCrcA3zQCVxnKISkL6KuAP%2BlR6hBe5CdqnTMFdsy%2F%2FecKfXpneIYhmiiDf5X2jLraNzUKyQFgmbMKIASPKsG6C7NHOn%2BU4Dt%2BQ0zTkfs0z7qzivV6TvqP7m4mV%2FoIZ8%2B6FMyzVw8GTS9r2pJ7zxHa%2BX5VBDgl6Xt24i6N%2FTDmQVDBpOb%2F%2FGLZkjT2HnakVRsiJ%2BC%2FPajxatUevDhOGd30y%2Fsr9k7IS%2FfPTqYROgTEPmSh%2BPrn2d8IXZTXPb8%2BqRjwHsty6%2BsTS8Q9pQyXWqntA9YBR2o1MD2OdH6zqIoMKIalGR5lgOhYzcvgp5WZTJTo2ptDod3PeWDKiIh%2BDWjhHQbi2OhqZrsbXMDm6CtjOwUYpTna%2BJp4AFL8%2FQ%2BhO6afGZFJtjOp3n6kQKUuODcpBNETwW3P5Qv%2B5SAyHh2MNg6AEVhGtQs0INq2ovJM3XfB%2BqJv%2FO69S97Z8%2Fxy%2BQz%2F4eoUGLceeNvkkDmTw70XrNNZFOCRlToPx3tgsCn%2FxBfRQnYwqj6gVlx2YV7DfkBDTBKn%2FBENlhDkYQY%2BQRrlbEVVNiTj54G%2FWeJUneRxz7%2FXGgqP7bVdpO2p2ilPuwKE43UfiVf9H9Mb2DkTJlDLtZA6yy2CDGQbfb9zyqBIMZgMNPYpscGOqUBlLWpGdG9qQFB7zEkDyoBKF%2FWF2hTu9B93cdThOzHc274drQs2TAbA0i7qXn%2FqGGFDIKy%2Fnppql%2BQTTnjP9vke6misEOQCDHjUNKE5BUp5%2FsXUVsYEw50ICs1eDSpIi812A6K11MFJB%2Bbl47ThCBPs09VmqGz4fRUDaUoaUAIubFE9PLkhSLXFhTUPdaCNYPhUkT33wgyFlJ6eDV7mFsMbkgZmIXV&X-Amz-Signature=9fba0b864ff3a41d06187a36dc4f30cdfa3be0e8376aec3f1e06d4e7e5812515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STAT6TXS%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIAIcLJ456GStzPz9%2FQIbKS0c3ufpl3lBO6%2FMCmfBhT6VAiEAueSTHo5G6vHuMeA6IpCA1QUlbfVNuc4qg6aXH3whlCMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHqZhHXqwupwGEEhSrcA3fmS9awsp9aYCPe8Dq8%2FwkP5xP%2BRyXhRJgk9kVNEUojbMzD%2BycqcXdn0jlFDRlYN49DLG5rNX2RU3Xub7IDCE5DsETqv20%2BmRrnnQkl6wcALzwLu%2FmcPtqoqFf5qw4SdCzbbKhjkF2Wi4iSVlHN2tLPuX83Eoy390rYM9e8cC1LNn3lPIu00BoY%2FhHiwq8MY4StiwO6d36gsHanNRWi%2F6RekL9wnW4FJDN9UNqdsVLUhmQ2gRzLEtsXl%2BIzKhA6m5oVvHv8gpgoER0jT4vhzlVkLALzCa%2B7hjdJNYHljsCKpaAO2yE569NGaw4nGnWo9Ti1KdbzuTUERNL7pmrzuTzPq4YGkjd%2BMYiyP7AVPCGyTVtlacDwlMLe2E%2BC9LrHqLlPXRgZenZD2e2JTqxrS70%2ByUXbSzZnXNDDUW2%2FkNsV2n9fW0blrChGNSfkLbbyA16XnMIGmngWzgIuf5zSWbURJ2YpdHYvPXR3nHQTttLHVQP7%2BXk%2FcMakVFXqrIBNwXkY5A3ZZOTq7bjSyQZd6gd8qvfzbix%2FIjEvk8mT9Q4XJGW%2F3kqSW7QaYJIQAAOyC0j7EMgxFotexaeOjDFR%2FQBcw6nha%2FfsaDlluEtaKz8duIxCXv4JNEwhK12CMPHXpscGOqUBlDPVgOsL2YaHbpofq2T3xQVnsFzg4VJCllIp6XVCL93MldLnlWcpaAGgEdavltD2fBYrog%2FSaejf2Q7ZmbACYJEgh%2BNf3c%2Bpr9iEi2VKsmIm%2FXv%2FOfx%2F7cbOISso%2Fujz7c5NJfA%2BWb5u9pqZJHuAPpVF%2Bj6M%2BtBJbfj1BzFoIgCG2AoKIrHKKjwhWqjovhaUEPPfVp%2BWCNRhf3zXjrfaJEN9Ysj8&X-Amz-Signature=a05729dd46ea11cc64173f748d421816e8a70a7ad599a38436a2b2b9dd7a4ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

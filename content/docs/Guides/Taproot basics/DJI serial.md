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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUR5IZPM%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBaNrlGh9ut7105r81gLpi80GzRICszIGlkgMdkc7nlcAiEAo1LcjlQ11QP58jBshu5i7zwleBcy4bttcCEr13D9CvwqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdlCMX%2BHwIdWGPtlircA8wo0lLzxmHCSfaLp3dhmHy8h8DgU9XMtMnUB%2FonNObHGfn44I%2BSJyWtN%2BgD98ueKzWqOXB3KAhFtjrT0CvBlYJkBDGuUr9Xq1GuokHOq7B6MTKKxS2t9xvSsNjTWFJKzkQbT%2BCsGhS%2Bh0MZNl2TsfqE1bcKy2XtGa4Gtwcl%2FMs6KXwm1FfmBVOPd%2B55%2BJMm1U04wvJ%2FKu6DFwK6RLCN3Y0M2DJBiqPtd%2BebPbMlXWvMhcrXZLOsZa2GZy%2F0onInqRJqIzRGymaUsJHHW9JGE35Ks%2F8S%2BWYnqlNY05DKw1XcypcUpmjDgIBtMfP9s7LKOqvlAuCHJKuF9RvqRUofEVzhXhUwh%2B8WABJW6pt95LM5v83tLWstUIv8KMwHHhrEl%2FcUn%2BVy2wBPYNqV6D4mg7LqZkbzbtpKN1Z%2B1s7fMOLJGpzImHKaGiJ3lyqfcbdU7QI6eZC1aEBfIlMjdixsM5N6A1wKTP2dUbEiHTm%2B4qhCV9Bckvq7pI4sW9DqQUxFWoGNEUsH0gZDs1BFuaI7YmMvLStsQcNQ%2FW9YjWUfYZniy2d3mmExgmd%2Bajk0rEoYXi9QuofAJ2rY8yRWqqfhhCAMtVdTBKldh5iyvTQZWiaSS60qHnfOZhHk8vLlMLfX4tEGOqUB57duG4yxLM%2FeCUUCq3Hkh51VpiEhb6KWoC2yU5SBYlLe6udjjm%2BxAWZL4%2BWmHjpVv%2FXQ2W771TCbLXmxTJcD4HzjdXEfxtNzm95chKYtBcbwd3mazATPtwm6aMSeym7EO9IFp%2BkUHJ9n%2BkJh2R0utKE6VplV7t8w58nFn%2BonEaFL3ZGiSkDef1zcuKaZWL0xuFqmOJsXCIZ4pUTBN83isRPiNHhP&X-Amz-Signature=e2481061e10beaa6eecce079fec3392d9a1dcce583d58447fb24e21d60bbedd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRC2TH4M%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCcEOrUj1F2lfR%2FuXJmhRRTQp3YFaedB%2BachYbcKlfOfwIgdrdROFDG10S64NuYwfyerS8j5T5zCfx32b7aITQdoDsqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8PzsLJuHer240joircA0KcXw9Hkvw%2BlmMJ9G1DzA3vgTdXF8fo7q%2BOm8LPI5VpLFg0i7%2FprvvDIusBPlC23sqByMdnQANW8rsOCUmdG1tUv%2BIefoDdpStnUZqgpXqrD%2BJJoDQZF2ni8w22Rz722uszikkszfZdr1a1uZ4H6O5yTioO5SVmcJFQhRYiqdoh5ciAkjMRJ4fSZGvkrx9qfj%2FaDdFUr0Ydk2PrYHMBe3X5CeWRfGZ3j0xo%2FI2HtcHtxDvFluJB2ZcGyB0Cm9AFbpZ%2FAJcLFC%2Fm0Uw%2BPvslsGbKU7vz5MpHJIQmBLEGDqhplqqDTJZIAaDfKpWxZmHDHVQwxMOixSkTQ1tPvPNK5PSG8fKMPzuT2YGgwj9jRg4iXIIccGFw2PTWcMk%2B3PKEOychRRqGAYnA6jjU8%2FZisfkGah%2F22463yil5%2FXFZi6J0oWO6ea%2Buv%2FhlnGbZiGtuW0HkuH37XMjDwlykVOZyEAHY3DQioB4VVcklgv0aVzznoGh07oJb4tmbl%2B9SX5jCuejMLnQKSofF8NJGtXwNFB1eF%2B0WolN0vq%2B99BLa1505j7zA7lwvxnSlY6DxLYI3%2FcBNu%2FygXMogI0Cu4vWHvRddhcKfM8U1yLKZnlxWGvTEx6NriOnLnemg7Y0SMK3Y4tEGOqUBt5WfTNMxGuaYNNZai6PnVHXZktAMLGsV2NqdDzaOBRNnFp0lxiIyLdafvCNyckZ7wzTHDQUsq%2Bok17Pn3M0XNolMo2wuJhZK%2FEIK2HBNw5wYspGR44uNNoIiHVnELhhAwo2wWBLkFDejvJUIQXn6rNf4y5iwrktrK27OotONy1WbH%2F7V%2Fp7hoGDbIDMeGK8BqaqB5V9IIbOS0rHvka0MpcLWaceZ&X-Amz-Signature=b7ebfce2e97704ace0cc10d19810113b4cc03396660182b9c07f8de58ddba70c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673GKPKE2%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIG6NwrPl8oVbISWr7pV%2FIxFmJtahrcHsVQBU0c2%2FZpcYAiAPkMpjIB7jhZmBHMMrtfD8QzKKCSbmU3cttNZFXCU8MiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa3x6mk2cF13tlcqbKtwDScsy%2FllOW8IzBW2H7GtxET2Tld7q23BllJURcugB9GhJqNZkHSHgfZCpbsq3%2BdE1piIR3hRQvfWUTYFDcrfNYecINGBOJc0QrFethgH0kBiLKJHGQ2JLstqS0lPu00NKSXo2FeHX9SR0r4FSRR4YqEJ0GBlQ1m9jQZG6CsT9pqeBkuDKePm7dVrf8yCYFmhN4nMkIPYlszwLuGIUP8%2BaUN7bWOcv24demtsySXyqaT2vy5%2BdJn2SbkJwcWDMUZ2YOusEjTzoggtZN2QEL8LQa5ifw32WjAVjsP6ce%2BHHm6QZ5zs8VJFInc7B%2B%2FF3MXFQDcs00gBXMqipKMyHwuUxxA2RavwSXM1YnSb7XCqP7pXbHJoma%2FHUnwa27q%2FMHslyLNWyIh9NQQal3ezkFLUCLQF4KxgrJaIaauw%2Fx6cnK0Oe1%2FBuBdbUkatKssas23Bi4sBoJJGmruEkMfGIpoEYMnmTHlw3kcvCZ4%2BM5XkVRMzldG%2BnXQJLEbTpYCGQibOoMxlVSiu3aWQFYbEouMwM3KdtPlggGZPPgQFxSKTMSuwjurNcDTvHYjn6Wwiku%2FDUcg56cDslQwlli75WmddAEm7zLGVSqIES8N6wEbKHtA88y2Q7Vbp%2Bn9tr5V0witfi0QY6pgHJN8G19uvZ9eyqUls%2B3ZxTe%2BukDQKCffn2skci2KTJ5spGOiMVyeRPhBaP6QFF%2FSOYlapy%2Fz3iosojz8DQCkK8dMsNmNbMLvlPfcOOd2yNWUdyw6e%2BeizXsBLZ9bRzOHmyYJTiyDRi0OMBA%2FL0rrulWyUE3LY%2BGsSkh9ftJhsSKnROs5YSsGZhk5BWx5CHupbgfmA9VC1tA6xGxeznniBMqrAryUMv&X-Amz-Signature=87951a8f1d54d3a975ff1760806a42a0b6a5b7261ecb196d09b102cd9b2f4a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRUOSD7Q%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDp6l3XiilFdyIgbe1RKFx3Pi4eSPkQQ6dtaFeqov7hAAIhAL1X73i3DDWBopZbpa1jRvS3Z4jLrzMYBuCMQ4woD0BUKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypLF6OG6gKmyA73jIq3AOch%2BSLV%2Fxxz1YBzCFECNbYQdmiHB8uZO9zAdy0BtQ9hNlHqgk8t2OrETpGrUAwGzzPh%2Bs4%2FfX4mw1Gi8wA9i6d%2FunXC2n0bG%2BAt9pplGqXsZwxgaxe%2FsTjsGE6a%2FtJNWb2eACVax%2B5peByK0KYKqTzn7Pca0jxltNyH0Gmjs2ljrnxFZX90G55KGpkzjfZxGf68Wx8oCDa2Z1JJ5XfcmQPuGPHrwHQ4nqYQhCwb%2BnWPC1mYZEjBybZjuR95e8Zt3jNlwlKMD87GmKjKB0DI3BSoCHSedx%2B0wAjIPb4K6DWtVfivdNx8j9Zb8ZYbbZzavSYnOcOeePJgVrBOFrxjJUeJrrDFlhDXB89FBx1y4p4876Q%2FmHuRa4tMKO4eidLyaijH8RuJUZVyx%2FkaNDDcYBKaKLExRfk8RcjxcKe3uEuptgkalXJ%2FCXtRb2wNBoWFDgESb6OcXE%2FwMKUPMliDMN%2BHDTf9bLNC59VcSEfnklUBI5CAl655UB%2F24c2MrdqGXskZFAJlkdeQY88rKzAvJk3d9uXRutPVF%2B6sRRFSDy%2F1qHCELs7IlHocm3PaMiBDpSP3tkQjIM9zmmIkd2HQJQCwNHEncq85sLtWYqKWqvXz1HeSf%2FFpz3g6oiBETDJ1%2BLRBjqkAeX2QBxnJUaYE03WDxKKZeLTz0peIlq%2BuvJ0PMyA4FfQQNUO2z3E%2F%2F9TJb4QDoQREh68tihc3spHRx8D%2FGLE4zwrJ49BS2%2FKwc913qzm1Ic39CfpwoACiXuF5Oujb%2B%2B0HCBbM%2FIkPLHa%2Fv2uqlWhjNVVRa3%2BO3ocd9bDTN9hhhFFxVbIW3dnDb2XP7KldogfJWk8k6GI3NJSC1U4W2xBzM33AUMd&X-Amz-Signature=f28b4e4e69d604cf4ff2dd85dcd40f66e4631784ee1ede8e8b3839e9c3718d55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

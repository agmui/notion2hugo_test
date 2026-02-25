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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRJ7JCOW%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCSqscX41b3Jo5GwRTgkYmNKW12O%2FGpB6AG%2B7%2FXtp8%2BugIhAL%2FO%2FvTy0Haf01UnboP4MQ%2B5%2BOFPivnOANRVru%2FNW4DiKv8DCAIQABoMNjM3NDIzMTgzODA1IgxYn%2BVlg6rXHbCBwzEq3AMBZb5aCDV%2BhS%2FQe%2FQjcJz3XEZfG1VpLMjowKn8TDZ3WLgdoUXWu1pIw9lqlqacIsEwD9FuM5P0RzGyIjF5kwfTwOQ6T45c3TETb4sf6TP%2BjENTkBsAoy%2F%2ByZJtQyV09%2Fe1yH%2FZPmB8JdV3XDCgpmrHupFmIPtJOadSZdgHjzPw8MlUDelkrBR4bPjYxw974s2I5phZXgPHOY%2F6k3DTY1EcQQHrhfS%2BkswZW%2BpKMdNHkyJmjm81gW6jtA%2BwT33rOAuhzKUgX%2BAcRYWdJPTmJf3dYRCCDgTI7rN34FWUF7vg5j8Su7soxI%2FQg3yVgs%2FzjlkwQrPAJjIcFEviGNSzf4xX80BYGsBXQMLY%2F%2BYxAMhG7BjdEV1m0Olu8aP30JsFNs%2B1vJS6xo4o1M3RLrmqToZliXtb%2Bt9Ai%2FpIZb1yRdqiCVXT0sxMscXhFykZzVuvc%2BspeRzBmqOZ%2FBAKtYVL45MGaO5%2FKtqN1NddJQB5wPn9Vi%2BpXlGsrazD5tcfW%2FdeSL7utpmkqwEtCuKvZWoP%2FFL0%2BfMp3g5IEIoiVCDSDoTbA6XK2Wd4ASO8Amb59VqD0L78q4RgQJNmYPPIyt622D8lRlvMTS0ISX8U5cyShvdFZcK18h0zILQjX%2BwvojDwg%2FnMBjqkAQ%2FpcysLr3LFMwh%2FBDjHvJuxz%2BMGgyz8k0iuTy%2FZ3QUxI7rjwQsmMQtkQiJaw81D9eurugWdLgTqTHTpjpdPD3Wl22gVQ32zZXjFetr1KmDKs5Khro7fAk5EC8UQYPc%2BpBEBCq%2Bt437N3J04OQ1LD5xWkiT3hBJmikfCVJ1RTfE4HMWMIpKzLr5HrnAcnv48gf5xjylqzD8mM7L9aMP5Y78tJOt2&X-Amz-Signature=5444e64312064037242d04d95135d564df8ec28f8ec7247348fef45b936c6c89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WORAE44%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDOmL5w9jMg%2B6WbdMeORthB14Rki1Mq2B3N7Xc2dKMoYwIhAJM24pbwXx2hW1MAfVaKk%2B5D%2BJV4%2B9FBzfKBsvxGW15tKv8DCAIQABoMNjM3NDIzMTgzODA1IgwP4%2FwE1ImY1%2ByVCRkq3AOJaj3A7fZ8PDYQvelYGD3vd8TmNIFPORkL1%2Fn9zHGnidFCIE1vFZBXZltpi%2B1%2FLdzEYhhy4S4eUafA36%2BvrXxnAx4p6ERlL31FFcv%2FpaBs%2Bnsdv7%2FaKwMJ4nx13pnFNRQJgEUxZP1KMwuaO%2BNzTbEc7GTEjPUNbC%2FllFYhTGVdMWhzbr%2FnyPE5VpEWxAOph6PquJQjMZJboBLE3J5tlyIzMMbyPpZkLyaTudtbfz2I%2BhJTvF094j3WizzxELKIJX1pUeoNILV2sqYGekHM0ILLcnNmig%2FYictQQLOWRqe%2Bw1bz%2FyQPP39DKcj9ohlFSUTlrM4oC33cZtApq9%2FUvJ8dtUhehuIdzl2EE3YxkdhNymVyShlagllhbUAHTcDR1zyn0QD4r%2FA3GJmYpTXe%2F4QHPJnFHsmrUXbMtltMRgbGk0jliViv4FfKlriZBFCk7h1KWpVy0ghXYlTTkZfvB1lA%2FGkOVhaI8ga%2BQJNoUQl7Rxic4o0KKz%2BilvHN3YpnzuHxxXjDde%2BTC45qa3O4zeTeZfcB%2FLYtL61qIAlSepGlWwQJen7p7xYc0lNLlIkcqCwMNYZeFfs7PS8%2BQJD%2F5yPRUlcuiBqBjWkKXYKIqf5sEWsNVCgd3i%2F48FMl7zDGg%2FnMBjqkAV33dWj%2BfBHdJlIYzPIbRab8oEKOzHmfGktlu3V%2FMrAU%2BHxLT9sCiX2sqnVlJB1J8n%2BN5lbrX63WEsGi0WfSrb8N1FQWhb2cCY3pHuk5VkOlZ7J0Gb4lMiOatJozQLwc4r9eAYS8z%2FV5A3GWV8D6qHuYi%2FJf%2FDPI71HOv1%2FXsVhwNAmzXDIseOS8pt4b3bGD35hJqSdTaYoMvlmzE7LPTqrdzb3a&X-Amz-Signature=3f31718dc90b30b33c71aa87e1f635e5b940a107cbf404f04e4e693ef85e69b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD7WHQHI%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEIyPIqJ%2FTvpFv%2FVqDiecKylHKxzHW3%2FgSoA%2Fg0Aa7bfAiAJp26CyNbhLaGR%2F8gqaOFKuNbGuM5tOGMdHwtBD2hwcCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMWwutXOxO%2FbKyntVRKtwDyWaat%2BR6FLx4cVfgb9QHtObYOMIARYndjZzg7GlMdYKRr1eENgn%2FmCiWJuxcvIk5mN%2FhpxRzI9fS%2FB5WTYAFnUpU3iDt3iOqDNkgJCxnFWiQ40NSnms6eDU9beZx0M8kFn0dtUKY3G9GhSwAzT83KkG7xEmL7RUAi4Hw27Opkk8B7oxQMm%2B%2FWM0bRu8OCaHjIRkjLSmR4MmsHU8tSRG5TMaj4J0XG2%2BYn2G4J2oc0C3DYHstl%2FPJiXLjKvbhwesygAMU%2BI%2B7UHgB%2F6E9gAHKbX0332gL9nadDQQve3xrkYlJwPbS0WYYY%2FS%2FiN0CmXg%2BoMcOtrVdAsOK0iwz5G6QP%2B8MDBEjF4kkl7cb0axWEryA3adcLRG1D%2B%2F5AAKahBiMYJex73ygswZ1CcVvRe7jTAhknmbIMK%2F3WLcJAxXtLBnpUy%2BW51RjiDedl9WgzcE6x9HaDsalFumttTxvRNj%2F%2FVl2%2BLsRNTXv1GBkJqYoEOuNcIcBwW6q58xNl%2F2%2FcGzT0SS%2BOyZdUFLqzZv%2BKVZWMDI7fck3HUS4Gaw8iMpFUtdabRNl5PfMXRuyRSJupPTUxWcC1mSIH6WBXXdL5NmTeAQfE3UQ1mWCwayhXfBERw2ejW5TBW0h7KXHWQAw54P5zAY6pgFRWh%2BbJUrCJcAOcLCZ%2BomAZRzLnRqNyMO7aj0urZE7R8TWlesXWTmKCxX8YG1HlqTvEvvG7vLFC6wj%2B92AFO0NCUAjy28gnZp4MPcnx%2Fygl0togrXo82KOkZo3UrjAj7I3x%2Faeyo2pJaEH7djlvZ5OY1NP0Lgf6%2BTRi24URq%2B4RIKLvAdTeu2lB8fTgrMEjXXEHCGwYguTf2q8GnS3MFnT0mGl%2FT9R&X-Amz-Signature=a91b218fc86b246edd98bb6ad86fe61023b88325b02ee5d2951a169656324dec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4V4NRBK%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBm%2BeMwdD9qYdD2fQ6%2FeuFqpL%2F0UGF0028hy8iKUsTrpAiAx59H9fIZ3kx0Ckzl0PMerLqPLSrTMjJeHSOJ6ANYoGyr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMwcy0g0q0OI8uu07eKtwDiwIhBXrlCYalmxqfHJf%2FDMe%2BFGp94UAglanXaAPU9Wdh7iwG5Oka0ZkTPoUs18ThLcA3qLgMdPoV2lk5Zu4BAPDT79TAQ8iUn0z91PyLu8%2F%2FotDuZ%2FBfEH7QvjrOrSQAu8zIDmnVi8YXpUHdQjPM30sOqqS6BJ0Rr0LedW%2F04GWrpmI34uswOSrOI88GoTCJNPhkYyQK3z4LM9PXqFzh5MVtPO2slHq4gLw9HXWaocMuassMGpt%2FJmsoz7iJ9eMZwiduXfLGrwezz5px8b2%2BEforFpA4fqIEGgNxfwSS%2BL%2FsAoRjEP08ArVvfbJJ690cJ8GEsBw8tVKFYdBGR2hB7rIHGgk%2BeR2b6N08u7p02%2BgQi2SV7uDMOknqUURAXA6uT5LqSZd%2BmHvflUP8yxhNJNeTMS8UpKgU1nv58o49j%2BLRyXkNiR%2FwSRDpPBo4XbCTSpjxpBYLE7wkMOvSZv68QhTnAeZ5Ul9o3g3Ok7bPp1HKTNM9DIGo2MNtJcDUCi0Jye%2FAmAS%2F0QXe0AuWPkfjPbKHaPwru5%2B6Kej4tXVt%2FPymnXeiOUR%2Bs%2BA4GLhc8s2c3Y8FzIiFCyOmPwdIKFKG7jrhKqw7VosM4m%2BlK2lQPdyaZ4wD79jutVqnwdow5oP5zAY6pgEtdZXz1pOotojCRoONJpPvYVMqFK3wgimVQR1kvOh6O4kJPDp0bVJ8noyM77R1xrQGnRf3x2Mt6P9%2F7h8GGJKlxDYhuUJIfzzpSyExwMxCzVn5zH%2FgCeFtbCYY2O697IZOJ4tG%2FQ%2BkhF6jhRbnBzsn3HhK1b5c7z%2BEDDPAlknfomWk7pOjWjUdyDNajz9rduTQrJmgplVK%2Faq5nMsVRacuWGsdkDvC&X-Amz-Signature=1a40a6e9ff83b0e494b6f77deb7e927261e65c5a50998a2c769c2be012677fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

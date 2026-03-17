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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6TSYZI%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCF933JAoHQdRg3SXvQZDToGv%2FSUqj2nDDregUUaNgidgIgOinWpiTwamDbFPknlvL%2FUXOSIlEsPlZ0PvDztGr2918qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJbO%2BC4Wza%2BHdpR7yrcA6BCbV25dcW%2B%2F8psSC1CsVWekMn0BSDHRSS3aAFcJDln%2BpqZ59CARnKvicOKW0fdU%2B0uOWApeqo6xj8vgwljSaVkuEFp%2Bba2qDLf3E0iTGIFVEiGQRJ3hZAMH1vhqkxBfFixUi2egxY0518APitTKkv3a0t%2F%2BsDa8zusS1g%2FWpb2QkAvSszb1pkRjxU46Y8nFnw1%2BHUcTswE8NHIc%2BnbAJxhzUBY6tQho8KnZ%2B7h6krSJ%2Bi0eUeCxjuVwgVV2m%2FGPeCFKQgxWGZMXtnD%2Fcqq9JRqffbrI6apCNtZz5uc5FaCwf9gcCGVwbW430H69jAuxBg8lsBsg88v7R9UttQMlYzKrg3heaCvRRO85MQuQJ%2B9fyavfQwDDWZL7M2dtLEZ2%2F85WZGCTp2OACDQmW0S5n1%2B8crVmrXU9bbgEON6Wen%2FR4OyxOe%2Ff1y2YpMhRiqCl%2BuBwk0Be8rXqmDu9%2FJ0yjwsLPa8wyG8PwAevwhc6Rv%2Bmwi%2FqZ877%2F2lYfBCFY8ksmmwG1obTjOjzVKi8PDzN4RSwMRFGiQmEHM4ecVj2Q5cyEWH0DFt%2FqjJYZAVRVEMvwZnGVqblrE14XkrzZobMFlAqIdXxKg4tYr0WASAyFMcJKf8EsYyObCVsMF0MPPn4s0GOqUBO%2F6vu%2FV6zjvMoHCxXDKi7QTl94O4mMIXiMBaJCC6kalaVBBe3dCJiDaj5i1vQpfesG8HKmx888mq1N2w7o3bzLEbKVNrLDrr7VJYXRGIpU%2BU0HbA5WCdn8Z88i4IvPqKejwMBBJeXJqnJbGs7GsmcCJVVV%2BN1ow7EOZfZBfbrALUCbIZ92KCWkFnzvB9ku8ng%2BuU4i94O5wFcbHwnpiytaCVMRed&X-Amz-Signature=a317424f863d81d5ac24a831004fe0200c4741f526dffe1a7eefe8082b176711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643Y3JU2C%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHRv6CwobSGNcXai7EPpMa3hGwQvvbvftb%2F5x8lB%2B0ZgAiAQRjac5d7GW9qJucVJWfpPGJdB0j85cvSTzjjA5K5dZiqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQYZE7OMVtOUAsxb5KtwDBF6OSGPi%2F8ARQwwafC6FuFf8ZIhiyXgtGXMeYhFgmOLJKlZjGYX3rqq2nOQJOsySUryFWOyPT7cYSZ85mXZWc46kdPmpkJVveTd4ju44qRlJpkzYPiNSzo54yv6dQojrC7y61YECLDgxuA%2BPp2kjfbRiwDzQDjn6Ax9EEPvaKKjByuvJKBd4Z0%2FGwRUO4VlEHU%2FtF%2BXQzFIY0a2goNIUrzvaXK0tsJa38Du1TckBA63%2FIDjlY79LkEeLQeyJgpAlsqQZSz6DzAiVlZ1udHIAKq8Bm3jxGNsoHejp0AL5rfOzCqoYy5JE1wHR2oXHCjANJzXsvtubJlzY6hQVHV%2BdnQZaCqy85wr15%2BhENc2PQW%2F5axiwPNtGqeGoQVWpvxG%2BGa5audYBH%2BwWK3CA8TUvssfTFDZqMEBYO2CmG4CTMWD4Bx43yyG7a57eEba%2Fnbp0kMw2t%2BZzQ5UOUeKaAFqgYoeWIET9nUVB2V5mzsxsZN%2BrD44XZIVa%2F3fP6N%2BOjnmUJqcM%2FbbLcJYiw96QkERAi%2B3UgMQH%2B3UYUsuoy%2B0GjwFg599wO0LGIboqnCyMAw84o5dcPcFYVoSVR0L1jMOwu8Bg3GWG%2BesnCJLnYVuxKfNYFS8LsA8HOQm8Yj4wyejizQY6pgEj%2FYiyTxxe6cRxK46aFReAi3%2BbODxRonFWINhXW5%2F%2BLvKh7iw7pP69KPzetodCskGk4mQjy%2FRDxlSEIMskB8s76aRD09XI8u1XV0e9YnR300wLHUQ2OmKg2bI6Uj9qAYRBUmkJzFQX82d3LvX2RJXzu4RjvNYyRimglS02jnNHtEBgFYGBj16jvBMDKxyIxWkLjpiA13L%2BUw6ICK94Jsc3mYRVHOTC&X-Amz-Signature=1a0fff34a0e00989beed7ee790ec2406b49470b2fc66c0233d43f834e4051884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZME42ZVS%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIF%2B9Yk0AyX0dB9ih%2B5HDMn%2BolzfWM9LYBO2S%2FrF%2F9LSLAiEAhnklnm1Zk9X%2BSt40QhEEHK165IJ1Ih65STwuKnAO%2FgUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOHqzB2Q3nbiUr97ySrcA5t7gjWsbS9T99idS00WtBE38dcKLgxHH1z86DDggSbcauNtMcLkKBZ6C4uwyHpRBmwWVdySKobwXTvNbxJG1nnYr1ua4FB8u4TpjuM%2FN8wRKBh%2BS2MtL3SvqukDli6AJKYUs1%2B7tCh%2FlUwtswj20XL%2BAXBHbpEsHuIsw0b%2FOuZHGP6nm%2B6uuu9bu6Lcg4UYL%2Fb1yx%2FrKIhvOES2bQkPG2I3dvS7RJEc0uGKJqkgSw0SJAwO2MXSagmFa4bMf%2BdTQ5nmZbmOMAPrN5W5dV6Gq9tVdAJsqrUz6zW70SYXpmkr9Cel5aAA2cm3eeBra0nz4jtIyeLsw0rbZ5fxtnKHHpzajk%2BiZWtqZr6X0imy3PZ4DF8l%2FZ79zeK%2B9VDD4pmxhbpla6JHExaCQH8%2FYeRYEjkM1R50xNOuT1JXMXq7ANy2EA0UNH4z%2Bm6MBBLnq2Kofm7aKRSf2WHxUjTL%2BVCDvPvK7vDrFzCaD7w0kkG3NwXcdHOqXSrIufGoqiaSX3MhJOi%2Feiv7s%2Fk1LFGF1AJWIyGQp7d3%2F3Ve72dLjVvLXPTaCj8zBNOJKvRWRzcI%2Bp8yAnXypv0i6kJCOLJBJWjERp9w6vrM0bRoReQfnLThEnkrmWEwoRvmdAlQAFJuMPzn4s0GOqUBi4rJONFrSqqVXFp%2FpPWMPC2pnh3y4ImKjvjCDJjuWBhCosM6d%2FWe9KhyLRyxqvTP674vaVPnKDaGUF4ZzoN93gDjv5WocNPN0pqHf0b7UZjpAehpZ8oIOrEZwuPNECzYKYltw0d%2FHlnvMwmzvm9qybDqqIA5d5kjT1SOl2FJlBCqbR1hm2r4pY0hiHqbdxoqh%2FByL9a6us8Gyddt%2BflBmkQxoxtL&X-Amz-Signature=24f6ead5cf5ee83cde951942d2a6ee49e41d82b4b76c6e27cf06cce733b196a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ3JZBFA%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCfoNm5zeUFCdWL%2FYfExItqlHRHOJdWieNv5Ycxev%2BBDQIgbb2fzDuEXWPROaVz90YalESbtA01xjBQ3wox%2BgXiXSUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJK3LGOeT4IE8XBJjircAz9yVZQMMbkJ8%2BDA59cin%2FYsLkEOQkUfeLkNXAHO1WzlgBejgpJ0bTxlVtgvn2rfCcnFztEj06y9aoUdd9Z8GNgR%2FHx9Fh8PurFOl3X0sk3dAwW9BTwF3mmaQN4DJvl8dVh%2Fcff7%2Bk4Ar3gMNW%2Bqgjqqip%2BUdbHoaay%2F%2F7QbTRIBHpE3u2pW4rdt%2FntTI51eMdivR3MRb8aUj8bRgI4lrZ1tbivC2HdTiaa9GXfbqfJUdzO966bu21alf7ztVQQM0dwf6CgqO0hGQPxv4crgAbUtSkab3en8VJDtGcet1NGKvZtFLQ1%2B90ODp%2FmOwMiZd55LY%2FUNDOfM4zgkDC07sBPw7EGHhwPI%2BCQogiSPgLjcxMMUMbu9KYwcfQZrlWxctC2mZv5EXlIs5uhe0JwFpuZHXIadoVWtSIx5cgPLQx7XcD488bP899I8fp164FHq2g4jVgTNld0ilxFMjetOcYJPM7c8mbZ2pOoqYtkB27m3MyOJfBGbW9H3hwPN%2FOqk8UIp9C3aIhAsJz%2BIL9LN2YbnW5PpZIJpAq0upanvImWNzp1ynEKP0Hr8udZnxe%2BOpflvN1kfBpocObFMKa6UoT2y0y4bScrzhpSW9OCRxHzgsGJnJG%2B2XXqiWJYmMPzn4s0GOqUBPJQIxzKe%2BTkr8o3StHazNiA8NbmhnMBVTVU80t4KZ8KCvyeAjL9l%2FGD8%2BT7qp7m2doIDA5%2FKBK94lFMtuJPFwShB7oQVPEU6ezsNrC2LZ4l3rudf1RkAP4HZXZrt%2Bx5AsEmlsdgReIbk2JfPUk7Wrdk%2FKlOoGws3Q%2BUq8p%2FDdWoK9XaMXZ%2BQRTCBwfsy8Tj9erF3z1VVvobmwoVIHU9ONBTDUNkH&X-Amz-Signature=e807f34f24fb501f475fd7b2030a882dd4a84b6c4245c267ed92bb1c02445782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

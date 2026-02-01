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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QR6DNZW%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRRnJXNw54EOtDkhs1I6OqWbiS2nMQ%2Bh1hsDyhcd7bnAiA%2FVw0H1w8s%2FgN0Y6QA0gITAdE9aPdC367tInlUk00XESqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY668nEYj4nHHRMQIKtwDzlR495UhCvnulH8%2Fj1bM6SGUIxVxnYfselPay12cW%2BH8u6%2BQFQCS8l6%2FqoHSKQldpMgsH2iKlqYaU4ln5alqeoGdJj%2FuRjAWCP%2Fx0wAzf3tPTH7uj7H26P4Vm7%2FS6KYWJFkfmslm5WPmwc2wV%2BJJC7TGNqerXWCWa3ZMOEwlhUbpDqtnFB1IJeep3G4vyZjOJbD4CjZrWQ4U9G1zuvKYBb1jv9zoGxx1VgAfeyekrUrnABFEw5QgrMf4ABWLm7VyXQ4Nwakfwk0ZTxech46bTGk6xHtJ4eMYfKl3I1kwcsHvzVxdMyJOiL%2FPdCnMzXIiUQNTFenP1dXdB4U48JL7Xza5ZrPShZkfRky1hp7mxiMQLzHn%2B6nInYlVEinBiYQh9jApQZdms%2FVd5luw2ASEAzk192XIYOLRSq09ikghZP6Hvijdlo4h%2BFgDEwvqeXfDTnmquMqpNjiyHkLqMbZ34NCTOi0f2SJEbVvttnYI1lZGA6ka0Mlb2EZx4sUN3rNWOPjBltTQJqCQfqcx7xa8YEnjHptk7vY%2BvSnDdP1wGVAgmZwsS5z49vTo6xY%2B3wE31VHeHIkrsOmDnfgNu9eijGRZ35NfCV3SjPesEdDyVLmUUwEsa3MeEDeVgI8w2fH5ywY6pgGS2YaLTT3y9%2B6GWradu6GHf7aoIZeDL1k19qEJ4sKRR%2BS3f%2FDbpV%2BdfUqo51FS2FQp2hdzja8EAe%2BRVvGSt2X%2FqzD6Dv2L7adGCie%2B%2BH5jfeGIHVKdsSgmuu3re50sxBe5xg2JYBOnX9LFctyf0EFYEkIcfuu34QcclsXb7te%2F1j%2BtPwDnljOqbJA0mTo11GsXgR6L9sX3ZcDtVCa8yQw9MDdzagYo&X-Amz-Signature=1c8a666bffef2778128187021e8fbe4a368ddbe6d9097aa910681bc2836086c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V3Z2YT5%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVbjtOz1GXXGUjkN72Cd4ihmePFtQdlxmCV3k3jTEcDgIhAPPxdubvNtTIBV%2FRk62DGHObRMrmBTohnpo49aP%2FPU%2F8KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrXt6J8UTlyBzcGeoq3APHBUSE27veXyNQGR1xTkJ9n%2FH2wjKXE7RCeRvOxrqeWUniEun9ru9rxafLhVgERrLMZXtTm9csgEwV7QEPSd1EhHgucqhJhCAbEqv%2BmzqO1TLQOpICdYW3cFz0QDLhRyHFHPpB74m3hY7PgBtzKnHDWBZIuKzti1cZhJURPM9j3PLol%2BqSuz4UgfndFZnN28YN7FsgCq5Wuk8PQafqpDVjI4CClQ6UnJuBPMV%2BNkPzFUA0Q3XCkF080ARXG5aULZotFAucxLzLOSfmKMCMomZ9LMRTENBuA9Rg1ff7JAQtN3hZ8QzQWQ6Mhz9C3%2Bgj6iQBZ6tUHmZssGUTzhBfu6VpGOur6g1RY0LNL64VY9xVl7qkQWfVLJEF7q6spA5hIz8WdXvoSCsEA7gU6gRX3H%2FYJZ0aJFaJzblSTz5YZEVzjDg2dz0GI9pY3UVncRjXyyIQCzTaoVI1PNcKKWAMX6tKxm9eqLEc9yBXpgHU%2B6AJm2GINneuSEFYKNxL5RJEEiDGjs2ykygc5ydvr1NQfolBamKaIQVkf42PPuEcAvRee%2BOzmy2PNpNVS5s6Bh9xEAXA1jXOZJ5MP2CjDoIqQCRDlO8zvv8D3xfG50Lv9010yLXHz3momlSQeu1tdzC38vnLBjqkAbyHuG2ykqBoRo%2BmONr3JSME1VnhEvFbgtEe6dOvenz7Key3bclaZK%2FS%2BOKxOFhBAFIEyjeM7x7hxxfioV%2BuTDZBnjRyMWUBjj0rh9apgyRHWjZ7jAlxpEcLcfA7PjY7t9lMLC8S7QfU6KaXnHp0aVGNAoaOZB5bYMFK2ZObeSSdYcSW2DLcqHp7JthJeFmx2QqFRpkrTDssXHokboCb9LNxWZbp&X-Amz-Signature=268918bc32688fe6720a579e1bcd5e74f640f68e6306392a319bf0bd294ad76b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AOGAMRB%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHlgNhs9t4Ld2kAw8kgKla7F2QYWC%2BRusAVPnSLCyGZAiEA9gVGPfziBQKc%2BPJR%2FZP2mLDENfjkHa2YV7rlHnCcKpYqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB64mp%2BHXbf4DURdtCrcAwRymlPYlJKWoF30ZNOHmKXC7qD5uheBpu13wDBBm%2FZU3qop39xd1UvkM42NdXfELcBglb7wT4wnCZ9OsKwmX49SeUuIap2psOxKT1NBn0%2FeVU53MEgNhCQggBGlxhPcFj7ytdXD0ly24guodORnYmeQjIl0IqP3Xhz8kyPXKgixbaZ4nOCRtpXDKPtSvrD6IYNR%2BpJj6hPxON%2Fv%2FDLab%2FHns4YYLWjXMCnu%2FZMkR6PxSUWsmpOuHo7%2FiT%2B3CU7i8IkFBt2Wolr9vq3y5%2BGM%2B81RGzZtEz9DY2gpOExiDiouIcES7UjmULo9Jz7d3VAfnekuuOP4kSSMxaVb4GTsmlhTZRoWwJMmsR3kEJrMaQjEIrNcy1%2Bhs8ho5%2BIwHMJpriwuiHQ%2BiWY7VcT2%2FWSlKM1yKK7oavkStkRSAEkKT7PwF%2BqNsgO6ewuvI%2Bp8MnEps0LPMszHzq2Y0Y1m4%2F8UhcyX2VSHTALznkHO%2F18Pt1btO4IpF7%2FQf4R%2BaVRKrN4MwWBto7Iq5tCldZG0UJBnFGG5TzMvoRRrs3mCNLMFJBwWOM48izScOOAwzVAjI24J0biIxGL%2BBoDKl7kdiVYBfLQk1yXk0xx%2FA6WT3ECrFDXYoUIi3E2cCA%2FMSXFUMJ%2Fy%2BcsGOqUBLDGGj3v3ibVjP9E083egQ553wfrmXNyPB93Guql8H8dpaxE%2B5kHAQs37GzIbJFEUaigElKa54DrNcz6LdEzINc2ECJ9i0WoIs4f9M2YRx3T5IDPAYsqOsH%2B9gOjGeDHq86EYQQZscVFvhzrUb6kucMbrdW2Rt2TK6jUHVRsqINc4XGo4mJ%2FhKHFItK6uE5nj%2FGBurvHihz8ga5dhkg9FiN2J%2FpVS&X-Amz-Signature=f901b6e4c446e15420119b54f531cc3b7e3ca57649662491d118e31a24381cf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BKKGZPX%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEm0SPyVylnXF2saF8C6%2FuoOiySugCksFn%2B7%2FCXZpaMGAiEA%2FC68l7Fjpp7cOWH1Y6Qjc6y0%2FSGfDO3mpp%2F0N58s79AqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5Z3hCVutfKllKEeSrcA2OVv%2Fomlnv6WJ8HaxHXZ3gzRpCpIHJI68mk4A7mQxchGeFT%2F9%2F9v%2BhKHiv4uKWtd4o%2BqwEJepukKdyPkEDjwrZXw4qYdCXNjjU6qywu08Jdv4HmLSGP4Cn%2Fjh%2B%2BzJiZvYfhRqxyQqAt2H9P85H8Qp5IWGPxfAiu1PpwU2m%2FUkW1TJqidhFM6QS60HSOSOXsIpE061jdKlv6fEvVq5Osjy3b5i%2BtBuBCU1fHNPsyfUB6a%2FTaGJC13hrYcfA9W0aEmZloNSvbCYtiLkZZ4QFEBdOJrDOhzFyQkl6yTE4zsg4j0zfZyCZpM5tLxKcXrd5lXz8e%2BUK85nZ%2BTr9m0%2FJ6F5x%2BCvX5Qa7pZpWoUsblmD0fFImhG2UotZCJYYjtL1fK6b5q89XyKB9hjzs6U7Cz0z4Ov3SEQFAxUbiAiXs9oyXUQbxcb7J7KS5s7zyl%2FUhwiI7Wnk9GIP5OII4ibrkXwTz%2BwKJBjYWJDBTAXpTm8isWSPRxK1oAj%2BQfLYtIAc6Ituk6mpd2Z6aTWbCt5c3kyW0d3f%2B2s%2FMBh76DJq7%2Bqp%2BlqksF0%2B6lEv6KDBbYZFuCofXtSj5g6mYgcF6CP0T8Y4BMSSPr5awKr8NgYr9zEsVA39ALPrbXZ4p503UdMLnx%2BcsGOqUB1Kzs57MfvXflbBSqOP840BaVynLlKjgmulSeaIv%2BhIvbtcFREQEBm%2FKFbgKB4nmqF0qNO2ooaG38tf15N9ejfmHuvzL2YOJGrXNG6K7JUSkOuxSh3%2F%2FurLvXTTAOuVrx33BnhAiPyl0jNf0M7gENrXTAWd9crqN18xdOh%2FAtM8TEPYaF9VZUGuvyQQb7OzcHzBukXMaI9ByWR4VybhKzxK3WX8ps&X-Amz-Signature=532ea7f360e3b5a304d5b3ee3bfd58f7bb6c09b76dea5570c4573fea76b08011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP5V5Z5E%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBDh1Bu34rn787WbsDMXtNH60y8laykSsd7NSvA1voQAiBI%2BTVtTlFKj4H5HhBlc9nEb8hbuVz%2FnFgFv8gI6jVbHyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMObTQhptZ%2BV29WvoZKtwDqDhJNlkbUTxId48wsfBqH%2B9id%2BCEkk5MzBX3p%2FgGom6%2BA59UjXTUYs0MQaA%2FDxMr9jOnu7VFmNZvxCf5tj%2F6x1La7NlYC3t0SDZaz%2Faydn9JtRy57fRA%2B%2FaX3ukszrnGavdimGxnL1KBRHIHXTjhD9F8xWZEXbEj9Z8eyTuICC6hZAl5TiB4m5HMp20CtvK3q2KLzHU%2F4DGG7rQnHOiJu5mJimm%2BcTAXvaaD3bhp%2FDPuI36RHHMlbfmo2L23dHwgiqmTQxyQZj2Pjlo2L0Axk3iXpv9L6%2F9H2cJAvtZs%2BeXs9osRiaVcOMPdKGxBxgJ7CaR60KF6pCzsD0LKBtHIxuBE1whppyaZXd4xzbWHqx3%2BHR4XUfhJ91UQXcQg3%2BaJHQW1auhbn58I93xzAGUdk7f%2BOxc9yT94EtJMKXBHr3sHugpmpPGs3QvmlW3rJVpTh1vvMK%2BVW5YiPrCDoYFsciH3FKnurFBfuw7cITb6NLRpICCelVJE26oJ6My%2F87xlLT5LFX9tfVRThYCTim3qXprGIUJx82C7pCxS0FBwmcn%2FYhKKJTsi4TgHBKeQpGJHz4JuZNM34htOale7biGq0BgM8kHOzdeyIFcohbXbmu%2BPre42AXj6PfYsvCcwpLLN0QY6pgEhfKIONvks1iujmVwAgZ75bR5HH7DoIRfN9H9xqCXCKRlbEiyekRFcbkKHuafm1hljPsQMX%2FZOj%2Ba7Y1dqMrGaqkUvaLBGp8qcyprqRgwfYwXba9kK37DbX5LGPlWVEeGu6Wf0h6ca0CFrkXHIMppGuqAt97g7Axv%2FaqZJuRcNDfr2FAa2SslH2Nq%2FIk5CZUJSnCHVjedAlhiNV6CXsF%2BiwNwQ1bGx&X-Amz-Signature=8f35173fc3250eb033856e309500c2765f76536c08d18694e4ae12e9c6beff5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTNLGJEF%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdMt%2Fcc8nmN%2B1OpV5m4RcOeh1sy3nW6q2jUp4p7sGWxAiB%2F5CFMc1r%2B1xxGdtX9audDxgsy9p0J560XqQMpTLy8WyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMedTloEGhSBWCZ9HoKtwDRw6d6fGtBupCKk%2BD4GJvzOkjZvt%2F5%2FoAR8XqcnQF35O4ZawNYN4a4qbFAWBYnS0HSucVX3R%2BycqmLUP9your8o3uyTPLb0YHdJZIhGUV9GVjhip0U4k4YkFbvVsdIK6zHiwULczBO0Bfe7yOO5ivhVIrrQTV7gLjfFvBPSplmRvLmp2sadFqOkChibVdWnzbVUqRdVSBuVkVpmVV5m5CXYVCU5P7dVcGGxsS4YoG4F4BMB2LlumlrtQ7Is%2B6sCmIvxO5JnEA85r09pEZ3u2smixRkZg0hAduxVXcwzs5LacLTjwm0OmpRu6TcPmwxnKx9is0iOnezaszlxuAcL3EKpsRFYscuXjRpeAcInjsatucASnZjM54fn%2Bs5YwZJC9g1HhG0u%2BRKllM75R74tSR3wteGDcbGgD4V072wHpUQ%2BEC41a9FT2e%2Bu9VLLi5WZ5I0pQPTigYV7%2FTrvmoksauwFcH73iTAJnHcgWh8zXPlF%2Bd9XTIo29vW0HZH0h1Aqi%2F0RDr5V3oEfocIevuNHmqMJhwNtyXu%2Bgw7X2OsGLWQn8GffoVAoJUvTmx%2BojINrStp50H6U9D3YARmViiC4lcF4uM0nwXt%2B1pu7i3VIbeUF6k1LjbEwhcPfctALEwirHN0QY6pgGRblwW2%2F12vErOkbx1AzKgNf3EJMrBYd1fG6UfmJZ8Bqaq5SlsRmJGvGN7c8ykC48bH88b0iY5X%2BeOUgKZ3Len5tJzLyD3bDLukABtYOXUrMXdYLk72CbpMC00TKHuRt3zzKFq5qOya67JGM%2F0KOxbIdeSH%2B2y1%2FbyGdSPGbzJjNmOJqU9dDHyXq33j6J%2BonOSMZRFGn4ffE4JBFtmpLNBvDn8WNiQ&X-Amz-Signature=a52983d4e891f64fb5998d1fe51850c3715e3a4b69999db73868822af995be4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HQ7P3EO%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbCln0tL8RT%2F04%2BadnSL1kdEXPebi1yJ%2FURIT8xxhi8gIhALbj4TvvkBxTab2Zmc3hEfzOpZXDr4QAIOaJqKXEldFEKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCanU7DzZ7HFGOBLYq3AOZ%2FxS80zcC%2F%2ByFAQkT2wsPIPJ7plBTrTHq%2FItMVe42eTZZ2kgj0LeOZPdxeemzmwn4qNJ4jhnTz8hFf2GSZCPV1QNbiUkSXNn%2FBTVgJpBMTNzjvHl0fnDMTNVrLOHrWeb2n8g6HMx903hRqrbNgCQYDuDmzG44Fp0sczmt4vNfTUd8I6zn%2Fk%2BsB5yi%2BzjPKCvUIIuxNtL%2BTSlgmrxVsUSuy%2FVMtYLlG0EoCYVMnHNXpCRynppCX%2F991FZGTe8K4YHHbeuTubQ99cwiJqNdkf4UqPFyzF7PzNx17FdGDfXTmYvOKMiB%2BLoMGBot%2Fz0Cx4l0Yk2U6LtmBNX0NaNPU%2FKZz0po3eHZdzD5v%2FRdsDuZNBDYc4M6qjNR0FypWQcAqHFTjCeJZiwLQcZdUFEBXzOwdwuFUzr%2Fqxh2wl3IaSgF4h%2BIMry3xXjl0R8VIsIaa12nNl15jOzqkw%2FIKOw7tSMTc23Njq0rF%2FMTi9rHi%2B7zslRdpgjMx1FW28VyYH%2BO0NmW4O2E91Q6SPIanKqlw6f714gXd4vvAIevghRuOtz%2BTgEMPR33%2FLBFW8KDrJ5ixGTJ0l437bycaDtbgxQIzi7pJz0VA5XitE%2BbRSeQ1ABcaylD3ToGYkYWd1Qm6zDQsc3RBjqkAbK3s1%2BASn8N8EHjxR%2BJxfMJLwePgv2ifltuPs1y522zSVfzezhOYCA4cuqxaF1hPptK%2BBcL1XDUXtdl8lLYSc%2BTNXJwTV7t%2Bie7TpS4SwZCljHZfYf6PQQIy250kXlPDes0DrYT5C5pHbDWvT7HdGGOGm7ToMpMY6EgloYMhYpEUhnm3l%2F62gkjM9Fnfc8P9nvmoUuimdVjQ%2BSy81V6DH0UCJTw&X-Amz-Signature=e246518f21849284859022123456c403e1496251a8d6163da05161dc31a65cf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R5NQVM2%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBcR6dQaexPqY3sRYJ7eYA3WcQU77Qr38w%2FpftyfKzRAiAqfu%2Fi4NGNxq6Vq1Z%2Ff1RbInzxKdwYbn3lj%2FN2%2Fp6B%2FSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNDayt4qEE0%2FqszEdKtwD88PwhXvE8E4W5x4Ssf9i9MwvpIep6BPGUFLHHBw4jq8CaqyGLA9r9tKq4QIXV2Wf%2BFZONEg08uu0sXmP2DsDl350U43zKGPof7GdfwDVqkbmaZVQB4l23%2B0ahwbnihe8E1VCr6LSLoMvVvQGGPhe78cqY4aLUNM0Cwp67h3rgPQfGlkHT2rOy9GUWx%2FFdtnJIkIjB8eGknWc8LtT9lTHapcjmVSsikjcvUrRgo4l9JGo4yKALS0I9OHzk8%2Fe4rTDdJmxKWkWrYGeVGam6dRuhsTTuKd9AzrVQVcrOA55GM5aLJjnS%2B5PKLdBjND2G6Plde1Q9cpFJTRkl0F7rVeOgidOdotY4Sg8frBpFb%2F9rrQwivyDwRy32vL46JKTjDaUYmxez%2BUGpsFRipPOlpyr29bgOqBd9WcvA5mUFwQ5Wp8o%2FqyHXJWgyTuJV8VVtVj5HdS7S57A8t8mj8zQPrszT%2FKg62i0kemAlH9%2FWeO6PqvCh2YOV50uz06TCSGGbO4StgIHGGh1Ykam8SZ6tszCFn3VyWw18reZl4D57sYHTkYZAhoCs3Bvpb%2F14OrBzYcd4tdK1o9dxLKE08JXBC3k9a8Yfe2%2BwS%2F8h8zohDH8V9%2Fb%2F23%2BHutx7FYZo7gwjbHN0QY6pgG6zciU4dXpKk9f8hSu1C59RgmuoRbIKIwMMlS4P0GPf%2BPhZA%2FlZHmXzTAs3FcDz44xoSj8PPTilvBvE23dTgVn7qkjvGTqKgB88fYwLcOQ4qnSD4sfhH5uw3gFFWBin4WgZNAQaIkN5TfSeEv%2BhLn8%2BaeF64TLQ1e0P2XIUUZ7GB1gO6EU%2FIAt5UvgE45IpEc3%2FcmBom0gmxcvKsoAVIQp3ZZ151PN&X-Amz-Signature=10747eceef0c38e8e75020964a5f0cf4df2490bd37478f4586701afd30347479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

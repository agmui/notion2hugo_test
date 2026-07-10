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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTMPKLTL%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgkUsFqnLePL%2Bq%2F65H%2FebrqHG%2FG1v%2B3C8sVUGVkfKGfAiEA6rMzbJjN%2Fxg8J1W2VW6knpfLofoMosvbvYcntuUr%2FtIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4w9fTA15tt8juG%2FSrcAw0equYAFWe7nmiMLlasl872%2BpQ6BsrPNEncFdipkg14w1asGhToz1OVsepSC%2BdKuQkFwRGgoNcABFGXnJepigs7U%2FRIyIjmrJg9vgwMcHJBiORFxLqLXKve5QZ2%2Bqh4K24aBxJgWdfA9SY8scPAdogg6osHiNDV1bgJsXLXHh3qsI6YKCr7k1pX%2F%2BpjKZtXugiYPPio6sOBs66BkTUQCGVx0cV4iifQ2N7ZaYViCReEumyBQZ4rCMUU0P2or3hmN8xT7Lknw576kgRFj74SwADn6nLO%2B%2FXLXzrmCUDOpqrCZ%2FHO%2F5%2BeIcpH%2BVlIkBBFn3RI5uAceNpxeAaKn2RRieCl1PRDA8%2FmsjxxBgcJjNY%2FV9c9cz63KeQPrbV89FLNqEtxHANGUJomZInNRadDVg9WQ2WMuLYM01OH8ZsNB5ojzYaowQlBivc6LHeGAb2vgslGdf9Hc4oP98euvckFXlJzMPbsVXcGJZOPO8%2B2So8Vqv317jmCU6NPOaMT985Hfn97zzw3eAOef9feAgMGWZgyPCiHrQnqTSdztDs6684vff0FbhXhwroTUJZysDpPL2Qk96PRrKuTmk%2B1ePysdh4lj1BG4IFDzjwG5NwjuQjUXwXcZ2CYzSTBfLi1MI%2B2wdIGOqUBamOkZ8%2FwKmeqAJatQ%2B7asZs4NFlLSh9nPhpXhqW%2BDPzXBzoQA2eOXc3T7Ni%2F%2F1FAv7EfN9LzIqR4o%2FS%2BWUxVHdTWwjLTA4LDnZbESxq8uM3GRI5fpiFCWAtUEmob4DTerX7P0ZQV1%2Fz74%2FLVM61TypyDhQAhUK%2B48Vcc0UwNxSv%2BX5fZM9uJmw5Xf%2BG9oFWNffSQhXPOxFIbEGhb%2BYR3fnHaUwbI&X-Amz-Signature=1e8e011d4bd00e8867a5ff8b761dd15ce0465d9da527273bc32b34545c5948cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCETRR3F%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTiTVhMVia0DSOZkzPpRT6t1WZq8xb3aNf9NNX1fwn6AiEAqIvnmUW4zvk4ijaleLFA%2FGE2u8vMrzA7i18c%2Fa1QBj0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2F5AYlZdny6FaI6TircA9iT6GGe0VvFVk9xl4EgzgkxPf7XqX%2BZvofucbAL%2BmGcmW8tf6W%2FFOzrZTB98o3zbIgevVjZBlJ%2Fya8fpzgqwquR%2Bia0xMj2UUYBThzXgiUphpGFcgWnIUTtfTPy98jC7SEz%2Bau3em3B890XFX60g5r3vjVIJgNipeMX8iRYznXvMd9kZi16qVzULufz77zjBugT988rtKYIwSlGt42Pup%2BdzrHyKcZuz23pW94jxo7hRwSQStjSYWUucgEVdrVigj48RrVdTETZqQjZooxX%2Bq8vGMVsImnrHpyR2tOA%2F99xhFIBbnVql73U931cKAd0u61E%2FJMznb2u1UW5n8kYweSibDIXu9nOnSw1eac2IUxmZPeFsMsYKLvRurkX9fzVY%2FGpx%2Bdz5q3liHIj%2B%2B1km0PO%2FKjmz7U6XtlzxWwowdgzZag7AZn0VyCpY5l8LYBe6OMKFSKULUvFWWDGfloMBHdp9%2FFQVvyh%2FiTFs9EbM%2Bu5Sa52qe9X7ZX86brN9OqX%2BnWbmT1du%2FdOh71E18rw4%2BxuBaSAw3pYfKcozRCfnJqnDNc6wwjb8O8pahq2VA7pl%2FRMXUEqeWsHtcUPxoxtfQCTHeRJrWgCabaVEwAWzMsRmi2u77NEdRyS4ZLLMOm1wdIGOqUBkdGwDhA0xwK%2Fs5uX%2FmGWIGb0eQ2pUHL%2Bt8imZCOylpeOo%2BX7ghnI2uNbU3PphJXTSrWNkOnMV92KV2aeJM%2FfevOb1gzgpdrmLRPRe0wsxwvVqV%2BpYsEROhhK%2BT1dFCq8O%2FDRvRf23pbGB3ycs3iWuYMdiTJmuP%2FLzN%2FQavEEWoMUi3NFxdJqANRlR8ZCH9CLIdqXZcdqA0aPXdqhs2fn8E1iVulN&X-Amz-Signature=6f0bbc3c3c0988999880402d9f9bb059f0672875e6d31efbe6c4533c45b1ac93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHM6DWK%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6DZz%2BdK1W%2BNHhzla%2F4CzE12XH20%2BnWdCipY2jHdqAewIgPqwQE1JVL25GGmtKdCwUagBsjjj%2Fkz5IMDXjfGp4aL0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7fzbEQ4WPieZ2yByrcA1718sYLV%2BjZNN7R4%2BlDimZhEWaa9U097UiMto%2Bj0kOHEc5J%2BqSwQDoFcDfZpFkly9Iz%2BBdO1euIw2RyDanbZftchquybM83HeWqNhHCNJ%2Fyzy9NTl4eZJcMLgROyeksPl9PA0RkLBR3QKMyG%2FfOpDY1%2FMpl%2BCJybKXBJ7AG2MRZajU8tQ7hHrNnIolhBo61nQb5T3IL3Ain2K0PWAiJ7koqqod0hG6E5Dox2fa%2F1%2BJdN8eo0nj4DI4puX2ldedCaZr%2BQ803nsQpWcJuXzvVTArPZ1QywNk1%2FWlksuoxuekpXm6p6%2Fe1D1QEr0CfzKHI5KWADqXmPozSoP5UjP4BspjM%2BjIz3Vn%2Bvz2QnEiPQKT6qGAIxc6T31j%2FNWVM50NADYQdIZMlp%2BKAY%2BtO4kb1r4e5KjTw02KI7OYpPxFQo6wdyALtTWLzHEhVcKbxSP4pkazoqH6T560c4NWHRXnRqMugXT7Dpp1%2BePtPPKOEgND1fC6GSvpXZ5YaVBhl6jifgS6NdPn2DbNRw2a%2FgHqYSkLR8jVbh0qbw8gFi0pD0vRnIHpFkHOjQzWCyDzUbYAm%2F0XkurHboa0Ez994i4iIQVmfhb0BxqnsqR1Toy2eb3nXIlLnyIOqm9piYezsMMO3wdIGOqUB73G1%2FHDOaGVvloX%2BdFe5V9cJgby4HehJEOmMpg9UwOCn2%2FhCWCfNfG27uufPArv8TYs4RfWE07eMuSIdEd6ioRyv%2FJ5wpfSvY%2B%2FeDALo21inCRxYj7Uedkd%2F0M4CEsQ9NVXZd1MkMZe75OA90j6pLzJu3ltWmUxbDnKss0kPPMMbn2ffTt8i8BcXjNUs6ZDKsQ6tMnFVrQ%2FJxIBabv6RDRzIQE6P&X-Amz-Signature=ecabfce3e2119c810733845612319e632c534daa8dfe1fa7da47b87523b93a31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UXHGLD2%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFprAkurUbsgtiRKgDVF4fJdhyha22yV28AB%2BGwnxBA%2FAiB%2F%2FiVO7jNMa1gzx%2FFYiCMh8X50vpaefO1Sb5lBj23XuSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2BxfX%2BwKuxVpayJyKtwD2P1%2F7hWHZGd3RjZFTmMKJiVgTLCF9dRQfcVaWN2ab%2F5MzxHD7SppIswUnxHJiul1aUc8b9L%2BHaTz3Vh8qmAf22Ws5cFZ%2BoWfNR4MmvktrJsHAdieryGFuD0nV5CeNkpugT1jQuANIwhzqKZ8UVFmfWrJy0XLK4S8%2FpU3Baj0ne%2Bagy6XSARkOynJiBiUO%2BGzFZU3Ctxh4IG2jjbh2ckSH%2FsV0rNHesopgWaWBcKn7gL%2BFOo2DNJGSTURB1GXRoW7VMkmXTfpP0bMQfLfFmTNHm3ZYUHFG1HkIVK1quqQM72xcBsjzHwDsKxkPdS1VNcnipVsAVc%2BIeuKn6Qk0gYrTgR3sbmu6ydFjEgTWUyTctuav0E3G7qS3x0Mih3879a1SgtCblxOps2bxINp40s7wAbLX1LVwX%2B2temirdL5G9gLgqIIIHds60cr%2BSEXcIStno3RBxyX%2Bj1j%2FDZ60sljzyNcPM3r%2FS5NGfELlc4I%2F%2Fqz7HfnnPOpntUeQEC4UdP6QJilvAtIwBqXSjek4p3wpHN7BMlak7hPkIsPgo1RYeve8c97eGR%2FD5YoMf56%2BwuPIo%2Fq37QQ1jNZ9ZbQLHOQywxBgyN8vZcs3H9kt3Wo4Ny2v6xc%2FiK2rGqtGz8wvrbB0gY6pgF5L3DyPTo3DiTYAvKTVhaOZHjP8tREAECpaVOCCYU8YxrZOdhtIYSj2tNpiv%2F0JEqGK3AWeVIUbXN%2FdyQeKeOxOulsDm2M5jhHBG9ggrNVrd%2FwuKTLuE1ahXCjlSf%2B7HEWvMjqtzp97U%2F%2BVq2IcifOgTN5lbRsHF5fX2Y4%2F6vgvjOTy34v4LGnXAR5YkZYPyvKZvIT6c5G3IgBvIAy57soO4SlGYzj&X-Amz-Signature=def4e5160a0a4325d14addba688fe7f223fdfe6b3af4091b9191a77ee99ba4e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

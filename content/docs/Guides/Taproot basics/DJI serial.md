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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF2I46B7%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUV%2BJhGXVOGDiIRdfykg22CcKNAFsIaQOsW0u7Dwf0aAiBlZvdh43FDHCimB2henzAXpO8cyL9zF6crfBsGoS67XCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfhIOvUbe6O750awiKtwD9DtwMzxV%2Fuh6UosfI%2BTjDzwrZzZhRUMxNw5Wra8O3mGjNMHe3xZiSRE4CRB0jnmKFtwt7abNhXUxxuheE90%2BBI80g3Djlum48wl1UlYzZ2mqb2T8WFmOviGv%2BFweKPZNo1fe0mNiOzUgzPje%2BmtvnoHLQCfQLEZIWPY%2BefrjxpPpjwhzNwIgE%2BACLr8CkoVUVF1t728y5DZlDLkQnoexSgbJMKdZyMQc47uZLuJc92MvmANIgIWgFMGnC6A9DmD1rnFmABInI9VxkcgR3xajTVt8KRgp4L0iKHYHhJLzNxC44COcf5RAQsLk1PL1PQvJCjaXsl7GENTdWpfg3LzGh6Qyl8mYBggYRY3i89Hbesu6Q%2FoKIv7XdSVjYZoUQ0NRbbbzXB01IpBntqjhrgfmx6bNPKeSMfwmMpWXU0afciU3ygYbbQi31YdG5VJe%2FS7osqr82%2Fg%2BSdtJRNAFdyU9q2Hm%2FtrU9b%2B3h9AjO20SvVJS6UOMvvEVNZXXgwQ11p8LjQ97lkPKxjgs3A9uhUHc1L9PPYeQWRJaYGbWk3pB%2B3xrXAWlYM7RHTCUz%2FGZz4ZIOJqzDA7dawpnZfS%2FOIAP2IcnXlqGKEVdoeGuwOyOH90tzJCuVEl%2F8xigW14woODpyAY6pgEQiBytijKq3h6XIMFpOF7wWVDMuarzBk9QCdWyv0oTLWSP4I8MAxsMXF4kdRm26EBcUH4u7MFNWHpM5TymSVSNVnJBvbUBK9Sx49KweBebtbdsKXbp4iq9jYW2oLVyVZ3rlbKD2lleYPr%2FiN7HoehkaZXmSeNtMI3Fucvn1X%2BPRbsQLtwio6J8AC%2BkAnZk9F4CrFWa1fCAH8kHUG7whGBgPBOOLakD&X-Amz-Signature=88e50cb80548803aefd36bfb7bc25b31aa2325f019ee5d268c405bec8cc33566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTH547F7%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIEw8E%2B4YWJTgAbx8TEzm7WbLdu05VpMXTdZB%2FmpblRAiEAvfAZj7KGECLldKTi8AjJ%2F%2B6%2B4qh2idMn9h5HcAhEdKYqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwVD23xTiGgmHiu%2FyrcA8tPta0ObBnTAQaelzk5F8WtJ7aWHIaRcAUeAz%2BidmCd2tO3NZgOcueJS7hkftRK6ovCmcXLL3z3mzcbCRWaNPA%2BjqS8WIDrxEL6XXlVuw5a3ikxv751wgMVxxrQURkrFmRNoJBFtO0bsFaJA0gJi%2B6pOFbHrumhi3%2BgvmYqstCtMzI4HtjNepgn4m%2FKeakLQVQekWChPDkHPS51OIqAHObYfHLDcFPZRIo5or%2F%2FVKwxeaVpkcGA6H7h9Yi0bfYZ70sPgrY%2B9MeDrnFG23sBsSGiu9g5GlZkypJFUMzlW%2FNJoDokEb5UV8Zar7CQx0489KYpcE9v2aM7ey5uBWRYSjy%2FYPNJ2GF8I3g%2BRHt7Xh1GkBH9%2FOdcN%2B7LeMTI%2FpEqjVoZ498kEDfG4pzOfgghuHaV4jxLRXRDJ1i%2FQS%2B5iSICqnxm8TteWIuawiyt1LHmwWW5YwXIV4VU%2FLUjN3BNfO0SMr3fAlOofgu%2BICNMZlgIL1uejuY7jqpXrqbJrDWk%2FQ0u53fjRQPF%2FJRQyNQsPK6m%2Fpx7WZMw9AVoE0pFHcc2lf6LxY%2FPbiWpQyHRUtWT7QHwiWAXqXrw7yi%2BrxaZPMI1YnKpzygeYujfbekYni68mNjG20tJC%2BHpQCOJMJ7g6cgGOqUBbBTQ%2B8yWC4tCo%2FGiHhiJCEMfsv%2BWJrNhVAVHbzLHV3caJBFwz%2Bg61%2B7bDv1FIp4r0iNcATfKm%2FX8CZwyvfvH2hzc03lOp0H3%2BnhzBLBDh%2FFb14%2Fuz7DajDzrJuVEK6gf9%2BN6%2FIg31TraLYf5FrvBT0fHw7I3oyTiDaeHlpzZsMpIwSah2sbnm%2FpHYAJmEsRFHTYgVtQ8oh%2Ff4vuAzHMcXeAPQbFu&X-Amz-Signature=788dc2e4ff206b72393d07af0c09abcda65b492f78fdb4f85c5602929eefe41a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWZ5FCSB%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUdxEGSvQCFx8NorOBf6dUVxAkjEtLxY598Ureo0OZjAiEA8%2Bzt4vIFNJnWmx3wmKQQmer9KKIHEWv7ZnM2INPHK1gqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FmOOFtIt2zVq86iCrcA76f4WOS1XFP5FAjfKwONEny4OpnOLSDTZ1fgeHv38iGx40gcZt8GC1vPjWLEjGxRQ%2BSPWqGTdmeuxEItUAElmtasQCGIHqo1QBqBMA9ZugMyrkCBVjDvpHhReBRtas56M2aN4wrDpqDGynJJuiV6TkfzxWGnhyGITP7hqwxIzXtXaFSkBanXWopWocuhBRWNAuaHV%2BcdVCQ8PPtslyBYH7W8ZkHL%2BNA6jgKkKJdH0ZbctKkc6KjFo0EsKgA%2F9NowE7BBjo201R%2FO4Bef8zuQRaNuJ1NvwD6ksKZgLSXMz7aL5kyVcjqDyYAnW9nG73VqmG2jhwyj%2Fky8clfqrDPYda8vqHBkzXD1DgEG3ssuQO6SmlUvkRollxOjR49B7hlc64YyZBF8gnMO7Tk6QD8DKrszUDk9oQjVnA73714AGh87HBOavC6ES7saQUHzONCwK9yz1Bg8KGNGfzM8Pol%2Bm%2F4qqhluUyFNbp8tcXXZkuggnVVSKNK3IVA0nhDUm%2BMNBx1mBTmbJatkrbvYWXT9OLr16ojNshM%2B0wQ89EEVq3Q2hwAmy5xlwEyDhKY2PbM8fxZN3TkodOyBQOKZ2%2FmmOTf2IVPh7Dkvin%2BaG%2FJQhs3rvsICBVUk2YILv%2BVMJDh6cgGOqUBYXQpzWUI7qPum6hARH4T6azG63hHTpRfAG8HFC560P4M%2F9TWx1YiR1LG9mz6q6gJ2cE2GUhNnSSYGHDXSEcbu3C4s71qSOKlmU%2FEMXDERRHuUW0yUBcN%2BlyadkaxuBxwZbYM7OLpoI0p2WDSPdQrjbmif9tXpvazCSWXyPzvOqwa%2FmRGP0TP1yEyO0RMwd8%2BTztlHa9rYH%2FS6rqQQiS9Keq6LCy7&X-Amz-Signature=131a436967b3d827bc6d2add314c7bda5d4f8dbc9322d91eb80e1ab51ceaf5ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AWPV3NW%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIu75aX8s7ysGCQGgqLvyAZIgYPO4NcZ5ld7G6hfv1SAiBR6VScSQy4mngwbpPRFsl5SQIYQR8vt4jFtdbsZKBnWyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMauZxSUQKHeAL7SqSKtwDivO9pjkAVc34EQ19LyiPyM4vD%2F5vzANai3kuuaHRkpbMiZrk84hJ0B%2F3qdtMTeCzTz%2FGW%2FNBCNdAU0ZFylXJuzEXROOKqTps9xonIC%2FJP2f9YxYqwdIqhhPdYDbbRx0NZTsvlIJGO8uV5dthXHspLijCuOs9Po0rOgXRI7WU6xu1IE%2BZgXix4UaiLkF8igq5ycC0TvaS5YBWJsEQTtMqAsoyVunVStYdVB1YFaiUlEFAt6p2NJVcZZVYwOtb0tYHAsYkkTmrfclgMOCYdiUPfroqZuOBPHqJjFOnCN3ossWJPQ%2BR1HFI2apO8JM%2BroPC%2BYDO2uwHrqFE9VO%2BmWlj59T6cJXTwf0ShcEVpzvfgBL2gKHI%2BayW2NuColZ2QRLby%2Fzvs87n%2BL%2BBOO3iYeS0%2FA3U719I29IGn1tdvZZotSdiswpNB4bdd19kHk6nQyUJJtN%2B%2BXhc0v%2Fz%2BRXJ0frcDHvVVkc1m67I7HoP%2FRSwplS3lwFhqs0e4W9rHG35W8lJx1s6c5gVgcznK1rEMgfD2A17W6MS9i7Pujs4as%2B3aTGiWHX5uR1bgkzWExxpVi5CwOoVPwtfhZh3nrdM%2BDakehhA8R5y8kqcz%2BKRr0HK7%2B98TBX6VLzRgcuSL%2FYwruDpyAY6pgHaieIOQAdjA3d50VyfqjCYArx8JuJShiA3g8hoix5lmle7pPzWfyCKIpnoTQzXof6NBTvfYByIZ%2B8iyovcV4MIHAOHaIv16Exbi0CBu6Cl5AAgAsuzMleMmY3yZpyuOYiQH2wO05VMUbqvuWb332Cd97YvncAs2e8xKN8b8e0sLc1bvMkv5jaCL%2BAEeRnWYrVN%2BLE3ZHyhJ6I88ElWmh58%2B8DrgBLA&X-Amz-Signature=b9d6df02a1da3819544b948f489ee66e96e5d75cfee3aba791df011ff89cff69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

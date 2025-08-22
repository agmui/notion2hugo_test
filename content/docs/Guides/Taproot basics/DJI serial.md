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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN6XA4P7%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxmVrIZEX%2BW2uzAiyDNSHAjGtyqEJSGaKDqdmSPxs8zwIgK2T2ewnG4jkjOF503ijhlGn2b6S5B70bhGZjLvn2%2BTwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BDKIGEYlnC2ncF0SrcA7nqfivNZ93LAifbRCJnyUJzb%2B8thoMfzP9qFWnsCIfe0wR3Rnua7lNT5s404h6gYOvpy390qEDLkvFU2zaONhQwvTA9HvaEj9nB%2FECp%2F6K3xwHLc5KHKY1LKpbDlQSc93AGgxcHCtrv1ztfzdkN8QMIacfvZzGAIaGW7HQGsqZ8OuaSfVMTTwH9Et11G1hR%2FNynMsqYugXT8k3sMXF3fRGiiOvPhru%2Bb37z0hHjcQRKvZVYTCnof3s6Bv3kh6OTvqJZXbFmwKKCjHdyoJuFyCcJ%2BNVeBC4oJ1xXcZ7je7dZ7alNKCRcxdifDbXW3ZNPTQLKo3rN711NdCKD3lUHKQEc0QopGJAV8bHcNkF4QrSiZwJVMWlmj5MZCbRmoohGEt7pbJAMNcNPqii8Qd4tezFHw3qPZp6HdhoTaZcxC2pwbFDxpICieEVDl99gldNQwlR48hrHitA5nDdCLZj%2BeqdodcSffMT1Uk5DlB4xTA55IblwkQisf2l6qQ5eDYcoh8XN%2Bq0BmC3VONKNSWgvZkQuSSfwQRaUgsgIYwu4KO6bm0zblM4SwgSkdIMBjeSXSXttSSomhMFChh9kAgGbKb0q7CCZBz8mn0oUsZMyTZRumySgXrdEIqaAv%2FM8MMXynsUGOqUBLW3HqeBcZoCOVVFDcF4cYeRGHkf4%2Bu5Wty9Khe1t0v%2BwjG6wk97AXPsWsXhZyYgtCrvlMRgbbJdQj%2Bew1DEZSNp4mKlPYdhJDUxNKBd2OmuHeV%2BlHmd%2BSMRScj6SWkangNwMNkaDG9FUTHY8uHeynGXOqXOZAybIMO5cpa%2BFPFpE%2BLgKQPNlnBQ9dcCsrt5FL%2BwFvGnB2h995OH2GIa0c4ejGAio&X-Amz-Signature=10f8dea71b13fd70b3bb9f7bcf55dc6d74b11f5ed784ba0494a0cd9f8b649121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655PWONJY%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F4v5qDVNveA8frJQrOmmOfI6%2FoNGSdwz1LlM94aGy9QIhAM2Po5RHnKMbDfJI3nC1DwoMxtN3jx4fBN8JBulxwOpNKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyomq%2B62eLPHfGUfEcq3AMPK4olsUj2XyPKFXUO2xhWmfCkV5iYyLHodK82PuksSVkFHcm7B3vuU3sDVHXAW9iq4%2BxGpcMdeNBM6lhrnCqywpxttMkAH9YpXGMfpIIhycamwtiBq0xHea0zhaBcSVyNZ1x0lQkc%2FIfiBeb2coV%2BiP4hOjW8cEzRXJj4L7a84cNENmzDEeXgnkagts79DScPMhEHQ%2FEt7ou%2BAT5KCOk9hfUCOwazpY8fMiYLmwt1fi7aOCtNPldywRQD8ACmetu1kSpuvb35%2B%2FVA5nNJBVchZApoZfZ1qrvIwyFCdYA7qarapQWTSJSlkAY2wiO3UcHWCvhsuQB9kjkWdUsyQoyKSkHDOJpwhdVPp%2Bd%2BvU8qHTNmqLAc8WwJMgHUxkM52PDF5ESfi1Tk5UqaQVuBcqZpqxULePVQAio7dP%2F%2BHMJ8fkGXFmokA%2FgoIs0Wqv05179dIU5x7WS6cMduxtobj7uexbZo8UXvcjhlpw6qvXHPDJN1DjqpdhdZI5dhEAzG%2B9Thz%2B8v2QMgCb6%2F%2B9LSeceDoC%2Bd2ib9%2F7kxpsJcnKYQBM6hSEAMfX7BD1bHtYcqHQvNR%2Bz7mfAwwPnFI7wF16vJBzYZeDJ6WK6yBP5YCgWLqUwrJcty0COPtvgEbTCl8p7FBjqkAdO6hBDivB%2Bu5cEU72NUR0dH0ck23BJX9JZL0nPkV31m4XdJgDMpbf794YiqnrNzUU1U1F5hAy8%2BlOnIaF3rq9aVdtHKnxqdt7We5Jwp0GJEJeYQzeRulzlh%2F1Vq%2FcPRxitln2cBgKXDo8CaihMr2ONKwpbiYDkkon4Y3cWNDwoOpXTqGHkzSinAt6ps%2FtPty6BQWkW3s1jmg9cPnDraJfoCYugf&X-Amz-Signature=fe1c74255658e9a6ecb60c5c15f6588be9ca7a1540b9dd75a616c72bfc5bdcbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIUQ5TQE%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3bU0Q2Dd94USe8GDdzM2d70FlbPUIRE6uI1EmQHB94wIgcLVV8lkxKoHEj3rQezGQ60hvf6wYErm6vA4YHg80BrIqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwEvkFKvdqwb5VtRircA62h%2BhT%2F1QGVM44eDtXnUBMuYFdqMraphvNN2MpvVrwgFbFCBbOwztUMctNl8%2F%2BHx3zkdve8yOSwHf3ZC7WC2DSsiwgMtAEJags1Wl8U4fPWnc93YYUQCEH7Ph7KZgFQMAcYrOvOvFYvjPctXC%2BVtLIaQbnql5JLzVivsz%2BMwBWhOdJBHI%2Fcwvx9zQzwymSktkzZMbicdQPSEWMxyAr51koUX5z54Od%2BxFQaF9MKG3Ju4Tw52YFo%2FXQfpHVWT9tstsyYh4IDdldj37%2BWo3SYlkPLJtLze3dweQfw8tWUPBkVOPPggp6alkY%2FdG16oNFDNZQbNQbS6t6IIyyhZeLz0MMXYKwUGmjMscvv95OLTLABG8Nhro3sn2B2bC0QB0Z1qHMJEHrStOuPBpauXiJAM6ShOpx9Sicr%2Fb1WENVny0xjAET0%2BCyNrVLP9kunumySmKTODJy23h95mFzRCG5%2FSn3JukitxlPDXanSi%2FSnbhC%2F85ow6MZJ4plffyRZoCKbpi%2B6cxGVJKQ6Ca5jBQBNTA%2FzH54%2BCrSWoyGgCFozdHnQj192mmmdReOyJiUmJnz9qAplaeZ45M7WRHSmZzM5jRR052dX02mNrqsec7ROpKyisJJRyzrO%2F%2Bo3Q8ePMODynsUGOqUB9v%2BilyVJ%2FHWu6%2BgJndTOpwWiJQJ%2B6Nxf7Jc2gtAM8aBy2DXnh%2FAMX4DweqEpNErReFShR2coR6sJq8jnIKm%2B2ugHBC%2B5LWnkNxP6CJV1YQ1mvurJVRMeEN4nVbkDBvRwW1y9goy3GIs8g0MCK%2FyRg2Q0%2F8O%2BDGz88HPOE%2BWsi5q9nP%2BadjRzUxuBqkrffPrk8v8Nfys8jVv7QDo38vG3PefuzMVr&X-Amz-Signature=edae4cee6de913583dc2a2f9e3287fd2f40a2dc46d900084172f3be08fc429ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STCBPKXF%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtrDznp690EKN43yWgAs2x6PYEyvyG%2B2RY%2BxiUgKMyuwIgbQZt4NgcdDnMLU1vfpzR%2F38wMB%2FbB5mQ3EHPtZiaP8cqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFUfG99%2FnKxCIbHQSrcA2DUdUAZPi%2F4rCZRt8O7kvYHJ8%2BzXsdMoGTGtmKMas3h2GZ%2FwAAU3605wh5cW3%2F2LCgUldIc8q2qtVlmmMfO3yEGnBydRtWpU6W5Z0HuoV7oc0F3ikyh8hFaZG15M%2BVSxP1rQc5FZXk%2BjReMkyNobBIKfRbQyoHnwCE0UcRsgEGUEiDrYHGm9Yzpf9B7wVP7NXNNq30%2BxAZAel8hPLKZ0oMM2OMIgrMRB8tWfaIku2Af4rso8wtvTrUXTzpCuwUkpITbB4akB46LOS2YMDOhbzfhXMjZIi79AV5vwxzy96sN0MrZbd3DBc2hG42Rr1udLEdGFPaGVsjcHC9j%2BK0jkloA04rNliuJnI4zViaDTtsa%2F%2BtxQBm%2BKXVuQuQ1BpXJjIVn9cY9bFv0HK3IPQuZ3gO4weOK6QXf7orIWaWbzGBYFa9qJN21qD6UlZ7cTYzNRBVhPHeLyp5%2FN0TZL2NSjt2RN7rvHyGY2hLBAMN18L4iPVxEmU1K2kyQgcFsbFbljAnDGSf67jKZjngskeoOAQC%2B46mnv353rQhZKtJkSf799qX3NDuRjAtBAKK2Ak1fELYcQBXBgv8aCq9OTpUWAe%2Br6QvpslEpm9u%2Brwjz70YQ7lL3KNXHEflc4x1%2FMN%2FynsUGOqUB09oHMO13vQdoBcy4SqCuL2dl4XQWHIvlj61XO%2BIti6arAUG%2B5vxM8zxis3Xrj6JkNcNPP1NYIrrm9E3FDs3T59295FUhXNGFNgwoga%2BWeVIWI6oLV0OZ8R66r%2F8hfOQUyOjNM3i%2FKuAD0Ijc5RTZImQ17seC5UejTL8eUU9LfFkTq6fhEn7EVpmU65pKTKhSH6%2BfFoKTShhdkr3l7CnMfi3lTXQ0&X-Amz-Signature=e850903af808a860782202baf51694648a91885853b0f5a45dd9a1d4302af18d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

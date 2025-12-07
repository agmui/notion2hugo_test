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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GSOXPZN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFTtHEUNt8goBwyusgc6k%2FKRHD2nifKzRUT22LHPFZNQIhAPRriqDqEH2l7Ly1rsy7ISUrqr1F%2FTeCGjLe1g4lYBzwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr76gO4zOnfrn%2B1M0q3APvERK3YXf6WNil2%2FVG1hQfuACPRC5gxh7mnkC6tTkRlPfXmOWD7sKKEZd5iJq%2BNECAs8g2awmsQI07zJF41I%2F205WvBc54xlG1AGaphMakEiVY3Ak5TFtuDQ784zmKGTyqBQbdCPJHuJRbqDtIKGRD6MAxTlRajaE691g1w0SKUgkVIpv3Um0I6NKDuRFEsWDGUH9HjqWsdOwgS93q3REkDzHCQ%2FNpFGJGU9wmgXIEaHWN7NRVMUctanHU5HtmgyVtjqYS286ZxcUdHPjEYh8gn1%2BJnqEKcElrGoYRhhZNlAoE1lAMd85Gh7ByaGWzDNCz7eRcI2KVagV8rbdNzMLSmAK5XokbFazC%2FDvIttvXgDHg6hNye6igWuGGYMA4FdlliBFglh790uJ0gqVNdqZfE2E8oxMPxIZe5Zk6e24MfHuiMjTdRKdz%2B5jbMOurAc5YZ%2B5SYheGwhXiOWHT0zGH%2BOHGUR5kBxZxkqiLnzGObD%2B%2FhQPxCsq2TW3na0O0LPwLvz9mYWkFqachn0OA1NtsGhXHr07UjKrJdgIAUjuuvqmF3Und3ykHsc5iR4KqnwWj3uibQiXDoMBzBLnn%2FSCjZvY7%2Fa3pPsWDZe2fMVbTKiq1CKERqWxOxh7%2FbDCk%2FdLJBjqkAfedeMTxUXZ3oU0XZeCDcMepHSAV%2Fd6xSJh2SIgogoQ8KdbjNQqg7nWT4r4bsfo90NfTWpWFYk5ESXzZpwVMNSOfhuq8QAnu59ljpRVfF6tyaPozBF8Th02m9pAbMeoiYSSBWd4yViYU8%2B%2BfCZ2Q1m2QohBtnZwv5XNzO%2FpttSmgnGsfqkJoomUE4Tk3PZOSk3uKvqwblvFAEIUStjFqlI37Z6dM&X-Amz-Signature=4e74a236b64e3837f43b6fca1cf7239b0b8a985c2125772127b065e296e703d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVUQGOXA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCURv33Zqvp8fNhY1BjT1G20aUUTjVersA30kpxGpeIAiEAzvMl4IebXSG1unlsjyo0AKmgHRGsvr4lLWtUTNRohJIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3%2BP9QKZr9uzPEv2SrcAwsuucIiXZHxxfk%2B48Gd35RDNy4Fk%2Bi03EIMpFirLR6ySu75z%2F%2FqM8t1FNHQ1LPoElDIWdenvaaRV%2BIOwxAH9999DjaRJ2lLmqvDH%2F%2BarLwFYESdt4p1630kS9gl3FQoXetvUy56IVWoGq6KToKyfhQPcnCmnA8WYSRWhIbjEcIzjb56ZAO970%2BmfegbYM0B5jpBqeWmy1NjbIr%2BmWQ8jad6ZY0s7aFDoEzzt2ymY2kd3Bq9PJ6mNgM42dammDYl1qAF4v%2BarCFa45eN7sBspepa4OCJ5MOi%2BrtdVu2xGA0VwFIwFpdNJHsAsZCn5WobU4M7jwEWQ6IrVqXaCswqqpRvo7J2trQReB1kYCOndDPl2x0w3IzVznuDm8my5Zg7t1JYl5rVeiH%2FBFiOEMMDtcpCVDuBByOmV%2FnQdxZFZcymog9O31rYNLnWUO3MentNLd42BjfZJ%2B7%2BQJPEP%2Bfw77TAh%2BswJ5oUWmisEi4EtfiH6kl0T0Jfg%2BPGEmXqijt%2F8zeeoFOSwyR9keHGrEyTGEIbl7HMHYb1Yqlq%2FwhxJz8oqPeXyL1rTspPgOT2xxYefFTtezlQsJC9TOh%2BWTnkt%2Ba8dfZWfpLC6o30SE2DbXLdcTw2K109bommJrMOMIj90skGOqUBeKeXc1bBREpInW30ra6kuyyJT6JMrzh8eepWcgiwleFbY35jJU1jQ46fJPUmeH6H67Mxpx9HOydankeahT3GqsO5DHIq%2Fy8oVUdUeJPHDP2D1UerTUn5xu1qpHrz7h%2BjW4BdVbspDCuyhTsGda7E28HAa%2BXsC6WGe7fmk%2B9JbZtefjF2xI7TH7v8ox6BYjG9tdC%2B5EtdxgzEZ4VStBfs3AwuukF9&X-Amz-Signature=8607f77a1d670669b7454ecc00f6a7650f23bf0a351655348a9e86d29bad8751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P5XCYW5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbIiIXme4h%2B5qBorwF3AnZ6qVNz%2BC4WctYml65%2Fuv1oQIgTpfq9gqsNeJ21DQxJMmaMn2lr5wny259QNBuOdmt30cqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNiWnj1rvVq5aZaHCrcA9zR3ZnOot4cuXwYJRPA2tDvMV5bD0%2FNp93FP%2FznboyHK%2BGCvkuPccGbIFiguv8YzDCd4p2tjR2jvhjJBSROuRJ5NTw6cKbVd5JNevz91kHC1ihHpb2DJ%2BUnnuKUiP6qG3peW4sfCzETgR%2FRB9HUWMECVRSjorMejFiJCvR0QF%2FlpQuW8e9WQ%2BUc%2BtGbaegeUbleR7kd0eJs33EJu7syo001hUakMXPljJE5WwmffhdNWe3it99xVHZLCpxrnjL%2FjPwcWvA%2BC6TlmjwHIV2zmEKu99f8dnsVPOFsJWmT7x34Uhl7t%2F0z1f1t4U1EcNSWZLZVPgn0rqiq2OeHf2%2BV%2BpiohkOwaDjYBgTAoJfVQsxodYBIU%2Fra9ZLACp3lF3dK%2FjeNALRQBslcB%2Baf9PkYCX4TJTRHgxNhwNL1M%2Fz%2Fb1wgaU08vIMFT7iolw5dxsj76BA6rf2sVjH53gROYxtHPuf8%2FfNcyZ1aOa6GzlM8MofmhcPtTVTJ5974yiP8JKzefGdQ9dHjtWa%2Bk1VGoDk%2FZYrEz2p8c4pGiI16brnD%2ButBf4xHsV5UuK1tWqoK8PBAremLJyN%2BJc1Tm03vm24jg3nPreRovOosaWQkvukR8bNiX8oJphJd5nVr9t67MMP90skGOqUB5XNTx8cKh8FQ2Qvy0y5sPYOjZ1ME0FxCLEl649EwkiWfuYa8eHlragIMj0LfzMQAKRkonEWGXpzz%2FlHBsoIISb%2FRZuJ%2BqOoDpifJMnyoQh0517HeBCnKEquAQT3z6unqy976le4lV9tFzt3k86ly8BerMnhusXyUwTC5%2Fhu3SuFxCHD9GKLtJcPYk%2F5bbgmZ7MxtqAyVknCfiiK2tmyHGBnAIQxv&X-Amz-Signature=504f2a47a4d21d70293cb10de83ee2d2631e00b01a81943be8854ddb3b4883a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKN3PHSQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENi1J9QxzREuR%2BhobSDJgZnYMVDc6NucvT2iYRGvJYeAiBRnBTJXHegMTDSOMBR6ZsDIqPegfR%2B%2FrXAGaSvK52qoiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgckHhKlS1bVB1cvWKtwDl0ujHjKbvmYlNqV7O%2BQ0dfyJghP8jcKDzsNV2J6heWYnX%2FMgR8IaXXWn5yYlpp5tBWUVjs6pGikTSCNsVUy%2F4LFdco8VqWxSjeS3Fxv12RFpGimutQC2mU7a6qJgoyxtAgo1Hm9vkdfZuHq%2B6U3jDAbWEl1voH8B5eHEv4bz5rmgcCuQmNYdbtjBW5BWDh9sueNwC8qdUHYO5evXgpuRPBBilfEaChatpVTO02qFTh%2BEp7mHSfml3yQ1Z7S0W6kxVGLikMLkLpgcPh9OZx%2Bg%2BhjLtCQY3pOjFemCa1e6igvbGdL8VxQsTBs%2Fmj6N%2FuCQbMb1Z5hCaD0K3jNVYd8ghvivvansVMtU0kKSBfuiHsvJnNepiGRuwye1Ma4uj6p%2F62qgXfaZE4CH6XJDhAbRR4ENFe2GMxc7YEmqi4JgciIdkt%2FxA9%2FPhC5pNe04jTZFUVojJA4y6D40UJTudhxYvLThNf2t2g%2F3N7hISSrUjwgOK0zAEbwrdU9tHKZM22%2FeAzK2HlURukECsNsjdFc3ddDNpLdMIYBxwKn4ukssCdESb08h7ToFfkCBbuQ6y%2FzSlNB2kQg4aYeaEoh3ICzziXRYnG3rjvGXS0LaU9yYmGiKTeDWm3UoKJslt2Uwjv3SyQY6pgEuOtGUHR32wfqBBt13hMEmbQo6z4Tk12cesPSLf4TDnPLo6XYo5KE7bRNxAAIpQiwE8K3gCTcMvmXrud1CIvpVUc2oafbcUMBZz%2Fv5AVEz3gkDLNYoRLGLDz6izY%2B94hLS0dRONsiW4zUjzSJJngRZocb6ks9diWDPljDawo2JrSUcxcr%2BKV9Lw1e63ExLLLsB283hN5gOURHR5qWlFLN0T2MNafp5&X-Amz-Signature=04adcf73e220acbaf9d025161ebabd479bead980cfa2d6413195bd2ff96099d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

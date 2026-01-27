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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2TAJAFU%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaXAELikC1GbX12Jx%2Fg3eNA7wGGR81e%2FhHI3scXewSYwIhAKSKeCNFQnD9vGqv67hMWhoyKdKt1g4W2fRYxbVNC7HtKv8DCEsQABoMNjM3NDIzMTgzODA1Igx4RdkRpAYwOpkrJtsq3ANHhZrwP2nV%2BTMQ5gFOAlmiAL4lcYOjodCuqBpgQrt1GOVPVpR8GhdGlwaETM5VXvwaTTYfNigyGu2AoeBFpfKNP7FiJrKdw1Uh7JlKL5ZlsRvpuUicdUreNi7kistBMse1ejiK5701lIJmjpY%2FgiEcQPczpA89y6D%2BdAchn3ferjnAHvkMKOirdqc73IbWT2FXHLw9kqCjNZczgZg1jW3lFLvlFiiOIpjD7FqJQaeK5ix15WCAJIcn6dVytoraTldmFWVMDdSEDfmQaTuqEJlL0N43FxM4N6oOqiqKCfRPSPqRzFM243dF%2B2iZ6euMGAhwOOnTtSS6v7LXwJB0KPU2J8v51aeYiP%2B1CAj1Npts1Q2pW%2B4ui6LVLPJGYsl%2BT28qpE5YPs5itQcSOoI4c7FEiazUtVXaJjBvmm5KWPHZXw8FUMOFRYp%2BecU0tY07a9nSbykPJKbSP9P8G41dNYbzFiMtSoVI9T6RhV8zT1anR7egogMlpmlgzY4g%2BgMrneS%2BQnG01kjFtTRQNALoGXm6AALORJSDYw%2BojakLhk0I4mU0Ma%2BhD3Da9VfJLemx6Cu8RgsEoEySXtfAkeP3zlN57b%2BjqcnUjWMiC3b8vU0ZaJBm%2FhT8DN1aeYS2mDDhsuDLBjqkAf7OMfsl%2FMnLDITP7GktbROLAFE3fDCNCUDclj3OvnwJFcLDg7NgG%2B3Tprx0clgP8qDO6sKWqKOl3PfLI6kWkl2X7YV%2BjN4jCiGNDuHkkJmActjA9clX%2FkJsp8CQK94rhhDtrEJzK8pZyQ5XYwt4600zwn6OTnH4O%2F7IUxF9ng5%2B%2Fja96GXJ%2FqlyFdaYzBRKFBRW1LmMndzDLcfOUnoq0mkxlpgY&X-Amz-Signature=0e224fdd6ffe754d82bf855af921d7397df3962d47045bd65ad75f7079f6ad57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI3AHR4M%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7LiZz6l0o58iMKZHU1qPb0Wdy74zKw1XRqPSqzwFkiAiB5vR8Wp0LbO2C34GXjrZpCj0Om4NdBsgRXzWIIgPtE%2BCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMaMi7h8B0xktf4w3DKtwDsq%2FTHFzMi2gxFsA43ML6KughdLBq5UA4W0d8mmt%2B989ZD%2FHQt50Es6L2bI7OV1W1i7Nakue3Gz1KZBWWc%2BJDpTW3%2FJIky46wU8ZQhcqK3bjpCODAaXM4dAaAkjU9ihenIxtNsSWJmdmjTRYtrcUtyrG5DuFbP8kkXRg%2BtS4dMBBWTj4%2BzFW6%2BtgAKwJX6msSXJPrdWTMD8O80lTlTOuip7yMoQziHWz%2Fnox2lFjNv4NVA9L6r0oaIoYneafu4sO8JVhsQj3%2FpP4FRVOir7KzJ1PYaghJ3954DOy2UdmFUiKnh0wrdhcYCSi9M5xN3inGXJ2C6hSmJnXIiB3gEFPA4jJYPtYOrN2oHwTRIyRHosLI6QaCwR%2FBjlDS93%2Fa%2B04vkpeE8Tei2KrI2t%2Fj9JfkwZ%2BOUO4nMxhup0kw2rQ8XVuY3G7iXN8KTUd4j8YYO%2BqgQWybiMyW5ZIU7cwrAafGp56ClktlE7MSjqDn3l8a8n6TaPMnEr31pW%2BZ9vcu4HaRZ%2F4HIk6tBxge4nD%2ByHLWU1vjybRiIJ9UChRvEVBOpStq2Vg9oWRCt0RfdNvOjAhV82umNjoqegLnhtrNiBEoFmfHaSMz5oeBQiIhU8U3e30m0wwyqXXSwPA4V%2FYw77LgywY6pgFtLbjPhBI%2BP56b%2BcZQbnBYS936IkUzZ3tZW1bK%2BLMcul2mVRjiJnXm5TsuFRw1f%2BmOAFrxG3LP%2BxScX3U22P%2F3hvOB%2F2pheHu5HqGdpN8i32VWsf5I5mx%2FCIQTDTd2NgKp8QCbnqouwn%2FXjQz1PvzQ%2BVH8DyTdVTAeD%2BDgrcYA2VUuOcSYFFvMperGY%2FX9W%2BwfkEdBf86fp8OE%2BzjzWzbXA9n8i8Il&X-Amz-Signature=b4c0539ffdb4763465bee43e6b7ac498277125754efedcc2416de7de95d6b1ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCQRNYFI%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUL7b9QrnnqM6IjLGq1MdMfkDve6GUEp8KqsZA7Kd4rgIgALRs%2F%2FWAF%2BGhrKR%2BNuD%2Btc4xsR9I8PJJt9CUf9%2FUMY8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHAhbwZvN8Umsx6D9SrcA5NWHOpV3Wuu8GD6MWNnSOkUqLkWAGycPM0%2F1Bxz%2FvTyYfoNuh067Z7MbEFaXacMX8TMW3%2FhwocxDNFpMmR%2FpFm8fyT7RtcTeg1w15vv9hyqPovehrlQ5enTtrum3VbVonbOxuwoEy6Tszjo0hmS0UbGCeIuwrbzKp1jhnWhFXbKlsOInN%2B%2FoJ0ae%2BFreI%2FSQzmD%2B33YmwPg1t8lNkqp%2F%2FvPwmKl%2BB2o7DISGXqY8fqLXgpBPauym%2BvHhk23tWNDmXxbp%2FQHJHlNLch32OpKOrAmjk%2FuhGBcDHTLMdFWzOE2pM2VIFvKro4hnRIBanR9tvEwZnMyVXTfgYBmh58%2B6Oem6Pkt6fbZRkI1WVIm%2B%2FkY3YgfE6P%2FW1Dck5cjSHl6KPj7qh7Ei2ZHaGB31uvgVoOcJfTXdATssd8ruUauhK1oxyKZ2dVomPhAmK%2BI7BsgL1%2BchFcAwY8CnrZK9ppwrHSY1XRsVrt5ZCfVzW1h4NJ81Ztu%2FZYethHsuX4VFktaRCtWXzWfqu%2FHwwN%2BjQdhjPK02%2FTsWm1Bm7C4yjOk1LULm%2BjBMSgmykadsTDWKo79z0ZBE1Vm3hOj%2Bs4b0fvv8iVAqw8psv%2BPlrGdMYKCfkb83h3PRUCXS6j4ImPSMK6y4MsGOqUByL7BvUCTzs5NGBqUL5mJWkTapKxIVhbFV8AxUeb5ZJAPMDldPmw%2B%2Fm%2FpLIO05CttwQ3avKNxTujPCRrUjbKoUguCjfaVrieAYNxTL1%2FytaAleip5b0CTQm7EGi25iPRjPbjlLkg7cuhjMN%2BMt8SV%2F27B2L5021MIyiFxcut0zFYRWg2n7BrH%2FXfSpQeR2a%2B5om07HMLlta6NyGDL%2B0VHI3Hs%2BDIn&X-Amz-Signature=6b6f29cfc13fd7d604adc97bbea727362707664e34e4e69424f794938795c7ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DJIXI5O%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPX1LqKEkzaTGD2NNJ7RSI%2FdDNi9v441OMR49n%2F7Mv6gIhAOIm86ZnvX6MYFOTjVcNe3%2F0Fl0b64b5%2FsMQBPHoUL4TKv8DCEsQABoMNjM3NDIzMTgzODA1IgxKXLXpQWi4LeMBjF0q3ANIzqvZRRPeWVFpVOW1atvarqkpU83Ml73byP4fIgetAXZlgpL%2Fqfi3kHOyasY8R5mOqK%2BCC9iC7f4MeIFX4S6rgiU1oGwHDUJdIBJZarnYwrA%2FNUH4RyEuUA1pKuXRJ2R84R7ZSseh%2Fp541pwUoP4iXBxMWDUzo9ZUPG0no08t9z3rt7YJn%2BKwRMJQmPZP9zrFcV43h1K2LzZa84UW4b3AooRMObZM2GoQxVP40bKkJbqRQ%2FrgfKeGMrwm7psnJAZPbbl%2Bg7mT%2B3KN%2BqjnYAZ4FeLD0MlPZBZN4gKDlCNajeqF3qI01YlYvDzUB%2FQIM6RIEUpgkIGRPxPr3McWqehk1JHqyJuJeejj8DNUhGRKMRxqoN5mHuHnMExy493n0pTPa9EZNZ0Ec6q2VFAlvh6BM6JF1Olsgz1XdLAQRnHsnB%2B9kvIjSSTSoz%2BCycIY6GBY%2BhB8KTreEifhruaJEBgWpyVC2HDYZpkqD1D1AlT32mqfUFtL4uwyksJYhWoGMOVMCVgDV254nCPxdZ9zob8MXyNvOEl8jD80b7WBnYM8vgiNz0tPTg0%2FniHsleMIU9Gf88t8L9awE%2FYzmLV3H8zbDr%2BvDzx%2BWw%2BialPopTitQcaiRND3X0V%2BWlZ0kDC4s%2BDLBjqkAYopTA9uM1TWT%2BFyYXGmS3HxQUF83Iqj0oSSnoqNPlrHbp345MifOvhr8xTY0XHCSM%2B5%2FNEBmT0ZJ61ReTnHRC7DaRH1CwY4mbcIxuRZSWjRPyofCKQek9MyaJrsLvdMNEfnWAsfTF0ghPK79rDo8K0eByE4O8Ht4tAhttKxXeCYncEZ3rFnRZgorHgtRItTgLbRQeFF%2F3gBd%2FpBL2QTRM846%2BjV&X-Amz-Signature=50e86c051d008e91b2345c1e65d81aa528df6c22b688b4cb6c2f96c94c1da640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

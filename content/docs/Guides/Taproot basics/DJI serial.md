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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIHOK4RG%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCICAjNZdWQjpJRcGYylNG%2FqJEI4YKJQ1wSAb1Wrh7PgnxAiAiiReFEyj3hqeaaAoPaiIFCBSLyCVJK%2Fqfn9kKIfimeir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMwelZ%2FGljOwu29c0SKtwDkUoM%2F0A7MHKvLz%2BS4cuRiMXw3egWSiV2YeFgwslGy%2BFpyYuffwLcK%2BNQxq%2FxwMQ6ZSe2YefxcMLliPNXJ1o8gtAPNdaZtUZWjAb1OMmLMyn6en21X%2F2HAznmmVG%2BfFx%2Bhg6ctJZ6Gh2sChBVH4sVfvFf4w12q5PDfmL0Isndu04denG3Tjg3dHvkLsyY%2F8sT6NHVOGGo%2Bi7x5VSBV%2BpKmfHhz7c8NmKsB7AQ21C0bbjQMJ1AhESVl1R5R5u8Cqy1aT%2FJpDyPwh4miLJkrK5teyNSdVYKytEoGkTgB9bAE3VxV2FFfJ1yXZAPEjThOQiKArvMno0rktPCHjnJFHVNArc69AcgDQd6Tpy8bGJ9dBKSPZQtwdZnk7vAr0n2EJwHWD%2FKmLrrknm3DZDEUCXP7bV5HkAiQ7D66nSsKsoG%2B%2BwCg4ZW5U%2F4vELWNJgeNlULtGLC9bPI5WSBWlVTUuBLp7%2Bkk0nhgFeqgykMjeS%2BKJEN5j3OlaD7O5vrdKPWUkF7jXpnHWuDdmcokoVsEFLaQ%2FoSvUERzqs3r1hufkPxHU28AkzWywqOWPPjjhz%2F9v2sCOmMBbE%2FEjwRnxJbdtvN%2B4fgzLoCtOYEniKHnoqLg4ckFFcMlmL9R55SnnUwpa6J1AY6pgGz2EMUCt%2Flm6hlxrf7X4TVER2x0up8VNg7tbIGmvul519sdaWhqkcpRj%2BwIAyNRcs1swR45oIhAsM23Poh1yM9xMEROYLew4uROMJDpEsw4y7UC6%2Bib%2BKAm39DoNBIm0BIuvG%2Bkdjg%2Flx0f866TRtVqyjKx%2Bca8f5oDcXGWiTV8sqpSJZ%2FXz%2BgLh82QtlrJ%2BRPP9KTfh1Ru74hupV3UuaPmsCjfVT2&X-Amz-Signature=27f0560f67b0c3758d1bca9c802317ddd3a0ed3efaeb0e8cdc3922d8928a7ee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCTKZEV4%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDM4XFJ9dZAtFSICo%2BLUvKeOQPYodShWd4A88noVmRU8wIhAO1HoS7di0pCUCt3yrRGKeP6Kl8GE2zMGEufJVG9RmOyKv8DCDoQABoMNjM3NDIzMTgzODA1IgwiIZlJyjaRjF0%2BTbsq3APAOgH7pg8gzZ8celXBxK%2B%2Fgs3CEHzT4xkUyJbGs%2FEvFRqVjBoss9p7zzggh52m%2BU%2BGtn4t716aLXOUraUDQqheJxSrs2pZhs4wEdzvs87XMOGVz7UynOjSI%2FdLcCfT%2FuwFlLXqqrWmSffx8sXpcadhPLEMb7Stw%2FCmiwD1FoFSoYSzbD0qYpenWJLuaUaA8rQT%2BWh%2Fx%2Fn7zsWmHQhyzC0n8n3j29WS0cM0UJqCUcJXdgL6JKF7G3q9xDSepDWhxl3kQhmCCLRLGkgnXxYPGNaUEAtHdLfoIVmujCgyG8L%2B8YE6yOA96bUtjVZdCSThE1%2F20yc83P1g5M3ZWQfushVfb9CiqTDT46Wu%2FTKWjsEZtt%2FQpW2pTdT56tmHpwrKkiky9AZ4iNG%2F1YLrhJAuSMiIJe%2BDJ1j4%2FB%2BQ2TinzrlSbVNO0UekRPZLHAU6P%2BENfYh4XlsxfNOkU2sCUwWkMX%2FnNawmP0yxWWjz3II%2FBWTE7hxlhB17Gtf2%2FE6QYs1rcYtUpPCwKwdHsOcoKKh1U4N9a7PItlpSZA5pS6j1cTsTzMCqCAA9MF0tZHpPrvtmsh%2FWaAwOvpCC98pgln0Q76VkTmq8F2OOF2bxXbUWm8mlKIG2dlwvD8b6Lyy6gzDsrYnUBjqkAd8QJil%2BQX2FjD1vE0NVHeLs70VaJ2IkynqSdjGN5NxpooVFSeNpXgaAFrxFamZSVN%2Fa%2BN6ZXY%2F4geyyf5V%2BrQFg8%2FameE2DSmJVF8YDxh0Qk8zvgM3IkELkkonhf7mi5l1qR5ZyjMhEXNP6jgkhpnNyvTfKHjx9XwCODUQ6QM3c9DxrzYoW9TFyPWm7I8EtceZq0SPSqDGhcIdzlVDsAQV67YuW&X-Amz-Signature=5168fd131cfc25a02a57436c8dea6ce486d6b5a3928b6049ab732943dbbc8258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSLVRMIG%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCa0oE%2BFw9JPkZ%2BzqBkzLvm3hIqPzjqoXiW1g1BAsw1UQIgBrSklU66KBeJBj8to0XY%2Fk83fPXQhdPbjHryqlZa9hkq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDHkHFz4Zv9h9l3K96SrcA2mQL5gdHX8TO%2F4kVlX8xb5bVR9Jo%2FLQphWM9aB2329DvQnVtmPUVhoxdWFghd1AtUUtlnCwz4hl6Fjf67dScSg9OWXjyAqkF8UFDQPOO%2BfwtyrdVaiytvfvfshSy3FHS7ptqSq4dd0%2Fc5XdaiWMJ9MQShm8SXJ6WhK0kuKu4ptW22eBrr4Qnprdpk7DF5Hws3q87R6K%2FQqX%2Bmv8s6CtzQI22NFt3685Ohf0OmYf2AURd5MszgKvdtmwRgNbYXuSIt%2FMfyYs0NVGItqE7bVkBJhbrN1p657GXKhKvY8h6CaQwiwUKryhl8jO5yVAB4zKScQfis9UdQIUbHxxOjccLuJ3tLV%2F2JZWu9r%2Fe7Gz%2BEUMinS0twMXN%2BAq053%2BQDPeRSdFtm2xKlzsbc5QG6Xo8RcPOYcArRA6NLFXzUraosUlpcEUgPyuBzXC6TR%2B0S2kRQ8N1%2Boajfhmuzcoq%2BUpR5fyW0FJgtmekMF6wIoiWue7vBuzs7bFe97cqhEXruEuPSQmEbha5MvmaH%2Bcoyrkh5gi6V97r6hE9qFeLLbVdgw%2F%2FxYpNVvJz6F5FSp2k9dbGVA974krsUURBHgLKF7FdcWqzfcL2XE%2BmRFGyMamcMw3Ev4qM96ebWUse5A%2BMLOridQGOqUBlGKQqXVmejqlRbH%2BWRYFUW4GH%2BGb%2Fk8FlmycC9shxgKOYnWQLjZeGno0b%2Bv2DGtCKStwouxjYEaA2JkpI5poFhyM%2F98M38QMNgxdHgnFfCtISbpmN46qlsHoGPwYPfCEgz2pMVqadRCWv5APee5rrQPTs7NCDOfiZGi2%2B31AfqhmOkrtIyooS8C9VSKkEccdZ3iStfeOsvDsfLqTpZz2wnSTDISh&X-Amz-Signature=5b85fca92a45a57fba8d5b5b154564dd7bfc7cf0643c727fbfd286eab1555f24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626AE2V32%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDOXs0wB4wbaGvo5XsV%2B6XhVxcjgyn9JiCTkpzuw6aAQwIgQLDblSBDwIArtBBgD250tnL7PDw3Rey8Pshph4v%2BU84q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNriJKItOZqlwEnUPCrcAxjF%2BxAIeJ3%2FQktp866QY9lh6Smj1mqrTchnD05aOrcX997ZC1Z%2BFTJUpGFgZqoKvQb7HlKJtkvwFninGDeIy0OZmlxRFzlU9e9Cg7fQuk6mft685%2F%2BgO8o6TSLI3P%2BHxzuHk2u1FnTEu25pAoHnVqM5e5knxhrTH1qPcnNEifndYi97PpDwvjU2R5CtTFhtZXobKG3Ip3cXZXlXQzsKZkxyHjLSP7k7WCQ9kmhvrb9GGspeFz4y7Z3TAx9XXIep3pKc5Ne7%2Bsmm%2BJD%2FzoltGfgsg3Ou482rblBi5w3XUnR6YSik5aWwrT9uNEhJVabe2oTq4aKKRFAGrxWCipZcE9wA%2FtrtWfEoRtvyG2bPX%2FJaPi%2Bie4fCkLvEHXDP9NqYupbZmtxmjc1wRHflW1VB2Tm1W9clTvI12IQByFjmRiFU6mB6lz4n52PnWylW5Y6cISoYsojXy%2FwHj8xKOhAKk7bvHLgTC6Cs4zT8rQwb4xsldT2pkFyMT%2B1AQS%2B08SkX%2Fsz9ib%2BH%2BuD730o8loxYA%2BmA%2FS%2FAxhaqANe83QhfWpzT07kNEO9vfZImVVaREJDf6TtvHCIEEe%2BRvKGNB81MrjaSKaAQGPxaW0HTOIjVFTv0hjdU1%2FCgBe%2BUrrzzMLOuidQGOqUBuj%2FPKfxhqwn8kZoQ%2FlmB0iVXosZ8%2BuuNrCmc1Nw1UtpBq0ijAav7L%2Ft%2B6MtgfYM5wX%2FayDmsk1nqKIZqZtw48OiGLuXB%2Fao6ogounzNkAEc1wenmCzpI9k8wGcZQxJOpa0MJf%2B3rzNbzJ%2BY5%2BI986cb1NEXeL75gegm4SEQ%2B1Lq2hqjDJQQDJtAv7TkpxfegwEHhYkobTHxkZKrJewP%2BDazPfvYC&X-Amz-Signature=8d6d8d5fd49595fdb12e9187795026ac4f9c460db9d61bc1561bc7e4f83565d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

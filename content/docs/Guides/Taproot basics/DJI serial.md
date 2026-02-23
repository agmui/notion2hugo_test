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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH3IIAMT%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIElubCgIIxk6dCPlNDzzICZ1%2Br3kM%2Bmosf%2BBsZrYcPy7AiAkrQBfO%2Br6PMYBne9ioatLtKhQePvBnqzjUTteBHV00CqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKdrjkEq0xoITybj8KtwD7vJyclOsYCo9wPE3Vfrf4AtF6b%2B1S0gIQmdCiC9vD6tWVF24rHmg7Sn26x1I0Y0HwvlsMByCNHA8XbeKtTIcInbKru%2FkIDLEfYQwyQwOBJFs4ffw85%2FupXDOoKwsg8bEOuyyHvTPSFPcBmk7Nc7xa6wZRh1e1bpXL38EsnmjkWrnQAKI%2BjS9eNkvDFJ56SPq3wC07wxM9WikCcIKh5BiCfCw0Uzo2UoVn6NZ1Oah2hudZP7Kw5VQzXSyZgjhcO2bdEKBBVE9KMKzUbu7QCBQlMNvf24wiYaOJHmMxmkrlBPymZ%2BXvw3%2BO3a%2FhekccyIdjFx5DjRtWb353MhsjYrx6Ps28udTE6Y0lzPrgZseE3NM%2BXFDWgJmImqQQJPfaPBYnp21UjFs25VTbIkRf9AU4q63JkDKZPLOPqAQZn1QcxjRgH1awK%2BIE6a11XNTIDCgN21szwoja39ErXe9xwAoYQ%2FmvnJTFA8dtwar2HyGCpr9R91%2Fq15jwFlmjUJJ6V7AbiOIp6te26kMjM4J%2BjAS8xOq9hRez1pVYOOsEV8OAeC1mP969gf9B7kYOdjY1aLSeASXMq8USzttAliE5Z%2Fs6yKtPER6w4I2rviPc%2FbODhxmUjilB7T3oyy6Mg4wqezuzAY6pgGe8a5BTVIorTwcy8sBybzHqiyQWi3QFzjqYgx55RaeIH%2Fq152skRuM5VNdjk3i7ar5VATN7RsTeRc7EURJOph3NtQOUzFZ6cAROYwYIsSM1usA91icMiZCJMjcT9tk1x%2Bj6F5gBKVp74EcJoLFC09b3oiB2UQDvKv3jBECbyEXLgL4Ex1qzAHkSjQnPe6Xi0yTXVjhwA3byFxOe84BJML6lWY%2FhCl9&X-Amz-Signature=bfde997e5124a600310048eb0285613566956e4e2548b339d4ba66c2964b94ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JBMU5IH%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFI7GKI8DbymzTMZW56CwbEJENODyxxmbtzg%2F1tE37wRAiAbdCXp2B4zKg3kUMj04cPHkp7no9LnZejO33YmdjRZ%2BCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpJsiruT9UlHCCyoPKtwDHtshYGLSQeKBfpayLrHLx%2BPRWYXOkyT5qgSif9Vaj%2B6MB37MkcVmiq82XUuCi0dZ%2BnxbQw6aFnN1Uz9xO8a2gU3VatY1l4RLPM2hEU%2FC5JM3TL5VLCdqPI0mDJKJsvq7Fh7cZ6AhOl7JPMVVSjIIdoIN%2FFsNd4qdCedi%2Fcd8JeZ5XuW%2BSSu0FLV5C71n5%2F4%2FgkfCXU2pH4%2F6jIactHbqgOZ6e3esodIGszjkra%2BZpyjj%2BuEpCenBHZ%2B0fT0d4SWzZXGevxbkCQw%2BXWonPZwGKf%2BXosFfWQFocVN3Exi1OfBksQ3iXwLfLGtCeHGWa6aSz%2BqJ8sTC%2F7k%2BA1uzhV5thdkcGppHFoHiWjwhW4aZ4Ijnn%2FZHOSgcA%2B51QqMapSraMICFzj%2B6As6f%2BfRhPBy%2BnMoqd7GYmO3cPFSs6QIJ0UhBZzvDUhHeR5S3H4dgOPKLhzqSFmbaJAMjxXwMvhoxJG3N5OlOL6B2ZfTS2NOJ14sX6atN9ug%2F44dGeKpW7tmzrjpYi23GWPEhad8sQFvNjooAuMi6KK89gA84iSRd40sNf7cNcRwGDEIAHLJqBbJWatqCdFxpaRTNUuyEAgqalAZ%2FLvYhofQH%2F2xv9aBIg7w7134J1NlgzqpCVxcw7OvuzAY6pgHJK4y6eK60bPnlXvECaATwBer5zYzfZmTRx1bZCq9XL%2Fl3yAaYp%2FXOo8BFCewfY2WIUq9TngJgXROrfe7moVPcN0PZYCA%2BRpB7irNaYG%2FLlAPgnovO%2BfuHL6Xo2GJTIYoopJUpvaxgvr4HaHGFEDtyerGsKNcHfpKCBK2dQjtKN1ju3VyKqrRvUdbwwq48GeX5fLRJTLtQo3p3smrVAJ3z9GTrHZ5O&X-Amz-Signature=23527f23e22fc9b67e78c5cd519d417e7e200707e35877a8fe8f4d61c34bee94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466465NWITS%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDHzVtKZdULWGITZ%2BJzQ9ZfyLm0WvRav15YESacskNfSwIhALxtI8NdxYwWbVkd7pVqURZI0hU51DardWb33l5%2FKQeHKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymaPPTGEJ373utMGcq3AMGBsvn%2B1VLYZdm5Ei%2B%2BxNHKvQGjKl1YL9LahVSftchDS%2Bm7HMI09qLTuakQr0GvvSw%2F9R5CthzgFgiuSNU7vlGWJaYxUKVvCXF9waX76A4pHt5xDhC6X57UIiGbQcGYSt%2BDU5rp7KAx19XjH%2FUoO%2FayMVupR7YXMeEp4XeJOY4OiLRlbSDIb0H4rOpYYzeZIyY3Uy5Vd2DcXikCQsvR19QIJSijxxRFBZIQDDworVJAQ%2BfP5da3myV6NoO8NMgmpOwh8PpM1CC9INK8OXP9bl9Cy4yIStMlOWI4n2CP0pkAHTG5lleYlXJ3%2FrYy8FUt5Kxxk%2BX%2B1Cy3yX3jNTy3e6ri91jCEXbvfHYAEEaV0CHZqbrHZqwp6xZvb3vtVkHVjaqlzbt5iiq3VH1ORlRDgKsfJWcP%2B9IjqHbb5MlqLlpE4JyxDzNyfwfztAeCWizCpdmJw7FwALvNeUx9849dz%2Bm%2FNr70zSVD3gC%2FXJqctoyeUIHo683KLRnJddMU0yVr0xYlf1pq3oc3M4kZ2LhmohqzEAV%2F0RIwWpnPDR%2FXHkqZHyMhwjmLIb6h8NIRFP0iH9gcoME5RQGj5lpnvDTfcvEW16NABtpw2phmCQu9poOuRxo%2Bw8r9ccjmVgIhTDr6%2B7MBjqkAbmUdzXe5hXXdxrtV2HJYITuu8xLgtjfsQU3GXoMju1RQwYV%2FRNMgM7ZtsSy%2BmNuYkrvfJgvHZ6azsqbYlTMLmRLHxLlF%2BKtnaCJrbr2nch18ENJELZJBhGtJqdWySHjYqyl3Zf9Ufr5PtT7hmzFD5UAdE3%2Fqs0%2BnO0GGyqHt%2BBJcFi%2B9vEQ5OMXWE2s8IrYx0EcG2HHHGFG3JNkAesiKn5LSgCh&X-Amz-Signature=b3afea2708298f4630131f8c3cd64f367792c0a0b5addd1e5eb3a91555902371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUFUAZBI%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIH67umFi%2FejJXf%2B055FBk6HP5gPK6tS%2BIIbG7LKGyy2%2BAiEAip2pzxU2BkTfUMx9vG3m6FTqCsPz%2FwxVtuhsNQfjjBsqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHn463k%2Bk5ZGnHATCyrcA3Ke3Kk5%2FjNOSCl6r2aeV3o6YG4zd5NHeaZO4R0B2MB%2BRMJkk5HaIf5dHqL0yzzZd8oRAlOsG2LcykqozLolg4psDyrGs0OoMwrQxVNO%2Ba0npneXWGXyFVk0qdUGJVDmTdszKCqS1G%2B%2B0WADUj2o%2BKgMIDui58sd1L%2BAbXkl9PTGM3%2B3kNsplAOUIuCeto%2BY%2BjmJjgpwv2saLymi4nCnhcsHCSvIDq4%2FVyXAnirmKL3lKPI2FA2dC9k18aVJjwmvuRv21l3uVXVl1k4oppeGHduPCdPlfDNccO6PA0Sk5ZQUeJ8pr%2B6dGAcg8R9BiMXNECFlyptUWSPXLCyOoDlbmWYoxAcTd73Z5sTRwyCEptAto4vc53SFidkhpeadQPwX2zO%2BrcBISX66bwtgmSSNUPMRUTVFsbMOVex1RI%2BnVpj6pa7gag36uUROnDIhOQlykJofgQD0tc%2FY5RvDGbLBourA1e%2BPE9qmwDwBSTrQkjJP9m%2B5zCUeHh%2BYUgDIUkawyQBSLZdbN7lfVhzgN5Ol7wcQdEfY8o4xcLn%2FZS3ozXh%2B0XIc1Kr2Mib1lbh9U0%2FiPxTlNZ6uD14DNTOnevKmT3AgMqg8bKJsDqK85BJfjFMgLG3hSsmm9HEFJ%2BjCMOHr7swGOqUBxN4dRoGRX3wnnVzIIIb0FZkdnHMbLQHRc1CWGA3%2F5MF8fenoyRqGvP2Nnafn74p8zQvqMifZ3uJCYhITWVObX3piYDaEf7AkjmnbXnpNyY2Kq5NufNUVSc%2FGn67nUFWBgmjZ4MngG0Xd%2FUITDrCJnlVnVNIUKj5kw%2BvvbSMBlK9%2FZkMXcE4iasoc03hGimQR8AhdqLDJdzE4hV4hXQXrgncFEfbf&X-Amz-Signature=d8df2521ead0fad868c6f00bb608be05f52ba8d292deaa181d4c65655458d1c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

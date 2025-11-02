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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXDVKO7G%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIG3Qlp0oQ3PuHwWiZs5va7j2ZvZQ8C39bhGIdxwMh0kjAiEAiHl0VuVifqQtoKOYUnR%2BEVDAw6qc%2F3aFPoOKc98YKt4q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFwOuMXSsVmfrHLqnCrcA43NeqpjTbJsQffKvkSltj48N%2FFNHwUR7k41mxUcbsD0CKTPxLXLLX5xB5QKvyzdp2FT5ha%2FqwkGj92A5rcuX4k6xqaOTlvQw7BV%2BfMqAMOjcUlXt9aU8JnJJd6GNN7GUqPlvJOyboJ%2BmFBRPNIbc78R9ZJy3nNhpo%2FIVyUOw8uUQqoCJ7RWz4nkHc7w4D2CxwHwlVGIs1lW%2FgInoQpwJL4ua40YsaKsfUzbvrA9uJ1oxKzFsTHxqc028xLQHESWlpb5%2F8y7gCU8t%2BQFEBvjDzOlkbRWTJ0BbeMYVYVP2nM8QadB8nMX8uFYk3J6paCRKYGHoHjjXLFy5jRJHhxy7T1idthl%2BYOOzBAXzewxbmdWp5gvntOexO5jWSqxoMi6%2BizwWoEyfeR1qrNjerF7ssCQu%2BPfp2TbIuB1UTeEwmgqExU50Kvg7HLhXBIS00rBthc0bBLEiSuWQ4dCh87Ek%2BDZpsBsPBQYEUe9858xSnoCzre6PHTKUyirMypQBRRwua8bm3Xe%2BQb73CrHSlZEoKP4qDoT5bcL8YobjEqiizmS0Ew7ZbA4MR%2FiTP9FTlFoaF4jsHRAgLlp19gyshXjmC3JjHuby5UF9ZqtEixteMqVffWV%2BjcNQn5KySO8MKTomsgGOqUBbBYAy52HK9ht6HkFJw88Z571%2FONK1ZpNp29nmiL28E5r2gExxscKXe6RcCtvZT4K2UmPztNRZGxTeThSsdmGyuxLbm6YbEz3pql7leZ81njXYpjRpOpGvGtzVzTbPUKPTC3FfmefC9IiRt9yD22EIJpyifj15Y381PDqHezzBi4%2BgtLycJ5dI43gWeVBEtUfo8dkx%2FtFzfNHHRavSS75ex5Z9Ax2&X-Amz-Signature=fd4f8586b30316bce0c3272151e5212d3cca5b672bb01de0b0d8c4b24e878832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNUG5O4A%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIE9oPF16tv1OO2srpRLUhMM0199gH83jtS2f5Nh5ROkTAiB%2FrgGaH4NSKWcNk75AgqNfsMz8%2F3kARcDXrkzS7rGWPSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMNM6ObgZ7CabPC3XwKtwDXg0a43E%2Feodhat%2Blk7cyrbPRk7bQzg2AOoetGtGE%2FdaqZPrYiQ5D9IsxMWI%2FYF7vz3HhilOYxoOOqDgOUKKFUiKpbcDhRPdD8dh1fUQqNmY1l4zv5%2BbDJH4AfP8UuPoFa3cOgY7g1qmDgnQvqpFrZEoW7otm1htlVdAzyIb9knEDQO2%2Bgg%2FGbaE%2B6ad%2FjTM9anROuXPERFGmtGHeYCnoJzYN7VDaOiKbPGW5WWcSTLg7d1DnfNtr0FfzC36ZQyRavVFysuw%2FDyTcCMeXzZUj4fOncEyvfijR56Yel91OKWfm1bTSDDp1D9c9Ep9QkeIHpPtsHIfjCsSz%2BnRZMiVdwI9JpknuO%2BOOu6qvec69F7llb1ZzzgCwB50k0R28hsI%2FtkckFpPbcXNhU%2FWZyck6qqopvM2vDpw7qsOReGg7UtoGfexk2Y%2BngWLBLfsecfBkZ1EssHN1MV8Y%2BRnR1fn0AHhkXpGwUh5EWQx9Adxk%2BV7zPCmsL5QEn7e7iJF%2BV81d7504wyqkMZPT5g4GkDUsMMeMhUIfC%2F%2FVpKURd%2Fhqs%2BUFi4GCYBJ%2FbxToSQFN9v8S8I%2BaE6TJvnEu672hhE8Rb0LhNXyX9%2BAK1%2FPY32FBwiGhxaQk0qGY3LNYAPgwqueayAY6pgHKqcxgbYUYiDnPfdCE%2FImEUcaIaN7J4QElmRwQykN4rJ%2FYhGngDXBCNRAwboekiIOW%2FXr1oOZlfJDuwcC2JnVZRS9ND%2FFWEnazA%2BkQRRYXcUCc9zCQVrcLEByiNYAp9WjyeLZCyrL%2FyZXqvLwC4ClzoBPffKiNAmYXC4MTCDJRjCGKDhbOqE8TlQ580fb6PkqIBw2JpFwGZmq740k%2BOO9%2F8kbDv1fF&X-Amz-Signature=287077ddd19323df5a1ebfe553085ce20178e4acce930bbcfdf1569a2073a04e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPCLA4DA%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAN%2F7ITBAL8UJZscblVchTwsFWO5mTbbsm5l8%2FuSyb8IAiEA4GZb2kWSjb92Zx2aZBSWDZypWLFQCwcIyi4lr6ezm1Eq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDA5ltTqPvNRfwSrgQCrcA7rNBLnjFvSdFKrEMGx1Jt%2FiDS0cQhXOD76wkIWwkvgOnj7i4TZvWuIm5jSrss2W4lBAnx7F0%2F%2BQ9j4MY%2B3CTWn9no2KU40SYVleCXqlTw9PhSNZaTE8UVOZ%2FfaJLjPbBGMrDncKFjLFyAFd%2F7cj%2BnJGUGojK4XN9zbgrUmAkiQLhBPkUC3C0FAaFarCvRQhNF7Td%2B%2B0XaFEHXYnPpSDgBUGAikEmm8JzcfSzbxbe4K%2F1d2uSrsAb4PvLhHHxWuGgm%2FOSJUYsVcBV8T0NySrGOYE0kANwlbcVt1btsrmrhR6uHr8g50MD5kZ50fdXwTIvWh4nJZGt5sy6oCRJ50bWo5B1Wt6adXWwMdojTsZZAAxw4VrQNOR8QLRd4PqnxQ51GxVn%2BPr2Dhy%2FPwPmQ8EtYVZNjdiNGVhUd6mBUE0VknfTkvjbYsmi9pQxQxWeQmyparZ%2Fe1G8elPfePbyPm4NfnFwVGI2NObZgt1tykrZOQC0dFf5scwLXdG6jGdj6cUP5w9qcoaLlcxt0ZmH7gffoox3sljls%2Fl1rvsdWWcKUx2a67p4TivWw3d7WkkseodTQP2SIiqfp9QGnzvJ2lBxtl16HJ9Ucvo3bzcFEsuk4W8fbuh98WvlMQ0Mzj0MK%2FnmsgGOqUBqqhgo%2B9G7fcy4ZTW0e15N9lDFO1qwX3EC6rwmpvcUQiZbdZsjM0A6oyoWqf2ofJZTJczdkrO1C8esdJChuLrMYdgU%2BaP80eP3mtijYv46c84rXqF9TQu8v1dXcrdngoZ4H4Qff%2FjNiyzSh%2BoHIr4%2BDVhWXjCxDcgokaqLxxVDM22uHaiUwoQiz%2BsyvoTDw2zrm9axP8N4HryHgXubF5Tl0Ki7VBw&X-Amz-Signature=626aac3d951d00142c94c1854d1aab270023786862cf78a6a24d2f2d22d01fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PCB7I6K%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEkDO9vz8hVQJKo2wVvskckHFUJz%2BQgKUU8dcEAyUGunAiAHfysIWC1aFxuFTtrRdnbQXk4MIlw4QODh5gO60PqVcir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMf691Hiic0h8xVDY5KtwDOnI%2FgxxOl1jQ5XECZYgsxFbq889WtJ1dvyvRwGYDnbgMvKb9c1PH3BGbeb6FztZJuQZZtDpJ%2FdmJhrdy4zPIHWzmAnxi1jHVeAQh4ReWJjVCc%2Fg3obccB1Ls8ol%2FyfuqobH2Qa6uTJYhAgDS4rAWQXFvf%2BxOY9tbmvsqA4Up4VbryPDluteBVj18UuiHx5OPSvs8ua95SCko3VB7VK6A141rM%2B5v7eSlsmOf4dDS0pMeW5CW%2FywXw5ay3%2B6xW60rmhU3dP1B3lAb%2BOdxGWxnB3DNY99gFWagw7pwVQZ3w%2BHudxICm7UUCD%2BiqrD69SwneWDGHedmGItZ2LRlDVcp%2B0RKKDNhFfHxqmU%2F6JmL37eCzQ2kBdm2IPr7h5uUr3iNVYg3%2B8NBJ61xN6rWcqH8eB9ReuptdwN7wCtloIIDHBB04pXeBrZ7x0%2FIp5Rsh%2Bs48TgWzeibA50jlqxSCnbxKf%2BWFGrpGQrQF3xCTsXIi0tFZcWFTX8SaBjtVxMxNOkBeqIpZW7vXS3odOVRbB%2Foba27mmMmkGo9btvAHPBqivZbbTPG2HrIil9B9mhvicR5P3w%2BhcyurR3OTptmQril5MEtBfoLPzWC1xAQIezZcWrFVtv7LcgQEaKPOhIws%2BiayAY6pgEsedvSt7Sm%2B4Vv%2B3NR3MsCTrPtNxlfTAt%2B667L2QPcRR1aXkLN%2BAWnpDkGs6%2BmG1gHoNE47Xadzl6u4JT9DXAoXSC4B2DRTQ5YIiQyTT98cuabrZ%2FsKE3qn%2FpuOMoQLNFOWknUzXaXd2iVKd%2BNuk0fWGMvUAxOPYCQD8fl5VLVfYFek%2BgAAB%2F04IKd9by%2BZ7PnYKIHJGWDxSzNvbPY0rt3IHpRFzPn&X-Amz-Signature=aec3a9c9ab2164859b98509455419b607196f29d454f7fac870779ca703e715a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

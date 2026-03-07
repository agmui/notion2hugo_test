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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTFAW5RN%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDXTTik8Rf0lneSZc3pbsj0hU1pgBrvByZ5gWfshmuebgIhALDY1qIzx8OVSOXQnENe1KYqFXym4IHmW0KMIvG6sJofKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbyoWcbuic%2F1UfS5kq3ANV%2FtUAjTZ0f5IxYtX8%2BOzjVnfN8ExvxyhlAC3UADXCCTm737HY9%2FBIs7PzJQBtj7I2JBpuYx9t14635bK6Wp19VZt3Wv2tu7VncxgFf45CDYrpEm0f1SsTRij5wZJL%2B5MAlujP1Phr9Wk4PogEkiRmKl4z5a8qlYZ2EsBKAo9jzaSMIQCgkULMtYVUzDnfc2aANKIsLkXX3LSFo2YBdtYwflRqx0zWbSMmJFeUepG%2Fs5Ys%2BoQNVKhor1af33WsnO6znWO%2FxuxE%2FwGzcbBO8hLMUsWGATS%2F%2BksoQtvkkkWpeN59JBI3YH2O6A6rTd22ZwlbNn8SJR6OYO1%2Bg7WKHdqcHO7r7lbvmaB1k3Kc2hIidAZBhaCTS2WrKW2eYAbu1cPMSrhZq%2FND9kZ%2FOwc8H3Vc4GfInODhkOBgKev7MqNQW%2Fu18aViotiUu%2BgXuvhk7ZlwXuTh03%2FAYmbfSGUFtAeck9FVKaYuGF7MLP8DNeeFGrUSqK1Kjse7q8NgTgw4mPRmGVpnFsLTPCy8wmjW8cs4MKzDg6Dz7DqPUuLlX6wmVz65MjXAVJ%2FSQtsLRvOpMwN7AZaIYeLlbo6rehJHj%2FZf12KLSxRx1HvPtftoLewHmGCuPxXfXO31Mzp6KzDX6K3NBjqkAVvbGnMS20iFHS3dEa5WdnGkkiz299GUcrCNncRsLknH2e2G2sB6jEehFbpnJa%2FeBSoX8egNGZfNrY4uL3FkJy5LesiE7opROpoF1XDyJ9zOMFBaCt4xz4%2F0yxFOMAq2%2FzukDrqdlTfVKpu6dOtXlZygr5p3OvB%2BmgMTsLMaBL66uUwkdhnyQU3qsWP8Frvzl6gK4B7q4shcN6FdDql9ojjPxzwL&X-Amz-Signature=f8ef8f7ffe4bee911437040c855a4a03bae803278f1f433728b197f940d184c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ICRZDA%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDJHN1WTVJNFKF6p9K2K514eUReQuPyq3jZEeo2CFnJIwIhAJ5A8oL41%2FD1%2FIGpQ5S4sLU92RElKM4Y2mpHzo0ixgIrKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcDkYNU1yzldj0LjUq3APhGDGla1N1xamjnspBjSPcDOMyexsu%2F6PO6QGf7w9Kr5vfrffHzS5xc1ngVMq82YTyY3uz3%2FiItnWpmcEuTXFbRDWWNbyQ2gdyl6Fonkwpodhfo%2B36yO8%2BSBZtaxljURwx4z9ivWKh7k1dIktW9VINupHaFRr5HgSCP1Jkztozi6%2FaLqasZXdw7TNSfjfxoDuQ%2FEUCIp%2FhTlAN7yANWLp2HtmtOilGVbXW9M9mNYwH0AkJ7l8NiK77kwxeGc%2BE9hqS9Q6F4SDEOOeCbmNP69pf2P5nIufaD%2FrcnrlIahKvwYDCapVPXlgn83LKogyetk%2BOvkQEM9ZN%2F5gDKk8vMqJhVs1Af0y3Xe2dJjAf%2FoJSY%2B8j8vX5HHkBDQ34%2FTsjOkIr1lYtM3hfpSmTwpQPSK6WfUd8qI9RAoBZt3p3qJAiuP3lg%2BZtZzJyzDkJpVgqhvzErV9GFsxbA7GXobBRouJEAUBcruyX1vR%2BTiuj%2FS5xCbFZ3Bzn1IUc29JW695VDbSXRbj86OXLF6y4tD9WllFBchy0CS%2BtDLBpkKqHMJ9tfMb9m1Qg1bjcNpFKcDa8cpBY6zjc4mdqH33wXOvgMIt228xNwA4pNZ6RLvwm4%2BPahzAcioqKDqpS3%2Fh%2BGTDA6K3NBjqkAUEgDcz7OfI0C3tvWWts3TmQEmLwNCjbY1ZLRPyeQOrGsRDSJWa6Zo7NBhAbgCL5i61tyE8ZwiSCInb8Jvb23rzAgccTBiWam8EET91d3sLu5XQzYYju9W7zASbgSvfqtxkcG1bxpAd5LQlXkWhP%2BmE%2F2oWeOy2j3hdqKdiBhUxEklbLazJ3jxVIi%2F9QVtkdViNcDt878V4hsAYn0VTy0EXuKfMs&X-Amz-Signature=e231325e16a104934485dcb17d278ac6a7b23aaf34ab1011b54748851c5cb219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LWWLH4A%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCD6cKk%2B9UVY171laQ3gJhRKx5tG7zL6F1k%2FjTxMyEiMQIgdHn8yk9oGzP%2B2gkGaiu1HLSnLmn7JLQ9lyW8r%2B2R0kgqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZVtkjX2%2BWE7nFy%2BircA7nbKdE37ZUKQElNCEh4ZSR2%2FtxlPwUWKhaAgkXKPwVElEw8qZmPHNP7KT%2Fqh4GJFL3RYras8sk5gIOhhGlsLpYZ7bT%2F2NF7Ju95tqYNz0XscIhwlU1wagbaI537Vin5gABG5bZlmY7ccO6CDMBOwXstRuzr4eToxwYYhOIXbH%2FLcPgx1hzQpmOkxFJKlkzIOcnP7vsHMTkyvXkkqOQyF7jGx7nxeEWEis0AZnRPffFMJchR2f9IXb0RdoQjhLQUNFT4vNx1HxL%2FoB4zEDhf3Dnc0bWdMRRSiqM8sOFk5VBR8FnM6ReTpFbM8R%2BU1H%2BwRpvC8orSSTNWRsqBX6ShRveb7kRNNbysKILkYzHs1du6bbufVjIz5coY0EbO6gyktsO%2BKmVPdMzB0YZUrxNtUoCxLP%2F7F6%2FREbm5QqGoGBFXUBGaev2Y%2F1s7wpyBUOCMOiW9zpIx5vZQdFyysn65DrJLa1KT6BB6SH0wX7%2FBVMf0xSK0M9tzqVEtPeQ%2Ff7yqWMxjju%2BaRSmEmIyv8C4efSjvPS4j19OQdZyVgQ7t2JMJyvSI2hJHAxsuOBxke9YRfMDx0z%2B3DNmj7NAz0w3Eoaw5WHZoabmfsAizKg5oTZiIdf2z9mp0BmUNaR5oMK7orc0GOqUBt2JEqrDS3HD0aGzkZgzKf5MP5gGfVhvIzHnbmr%2Brr%2BXHvYLhmcly9WUYAlaaiOufUIdZrcH%2FsZTHir%2FoOOjklEnpStjVrwdsECgz4vf%2FerQ3W7MK1nBYdtkhVLnxa05BX%2BDcYTFfKOcFHcUHDivnmPqC6S%2FM3YjnxC3D5bmHw7SdeHOhLVjovqUlec0tHd7DohZwhKL0zUbFJpRONFhx8DjP67AQ&X-Amz-Signature=864ec4468712d55cd5088a03ef9e91201e63f7fd7aa624767c6fe284c76df574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMEPCLAK%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIAjU3KNZQ7%2FtVgoI8raxDWkC3i3qq6RFCe43uSv3%2F8%2BOAiEA9wouVMaZFHt%2Ff1YH1%2BF6KiHA91Xs%2BaINo%2B9Shp8BoMMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCa1sVK9mIHGc1%2FZTyrcA%2BatJW9C1yE%2F%2B2J64SCgh5fU2cDjtafYRV6gGfs2l63mL2gJnAmzhTQXRIEvMdSjZoNraKnNkJXtt0BEZpeu3QfkSi49DMxwulgF36Ku27sw1oh8ZWf9siMEUtFfJCIq8iTYqKS34TP%2F0HhqlHNhYzUy6bCMfcScB%2FUGrWz1Cj5fpbE0C4V%2BKqfCqtrYAJPQRXvsNNT8%2FI6oJ3jjYBpqy7iEjGbUbyG7boExlDR1PTye7wHWSt9E0NtvjVTHs%2BE7c7Q5AsxAcSsOI1lylEENOeVrO1y4s8AYM19dxdcjPKZlXIN1S8PSYaDCXXatwEcPCjDgP%2FAXyojiXlVyUC63GRXY%2FSrKSGROvla0SGKrHDeuhgaFvMuHddGIy7ZqS6gbmhGEBfHLQrRhpFNa2V0k5TU0zCkiSApiwcN1ttMuHVT9uJ%2BbuV8HIyuKsYQLXl6fCex6sanRUtWzIJmGlQ6IAtNd8SQ7SJPgGt%2FaYHOwnGggxPmjFCf6GNkKg1%2B5W2Y%2BwWJpMA1lO2NB0849BIiTxHyduXyEdG6fUbIJLUy3buUVrVg97XrglV47XKu2NlDk%2BG5RX7cP783V0WYqCiDdoNgHIcOSF85pv1N%2Fm3gH4aV%2F%2B8qI3GSHtMSiQJ4vMLvprc0GOqUBhZMjgp7kV7KDe4mJadSf2wZXTjG2p39DhnPO%2BYf3eqSFAQEnKYtpcZIrigGlsYaRypWRso%2BZX9%2BfcPFnhaUCn19WOD5PBo9nmGGQZYLn%2Bl8Snok8WzAGNJhMU5F4%2BKeFF7jF2n4Rzq1X6MJHla0qRkWZ3wkzzthy7Q8M%2FI2hcv%2BSkpClLm%2FIyz0XEv0mAhRcDM4t29tv5gH8sPUxqwvnFdGcAh0i&X-Amz-Signature=ab642bfb1a3cd54d70eda6f25f9a7bc306f03fa320cab15a30b53e140cf0f15e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

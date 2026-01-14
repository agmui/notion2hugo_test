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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NITIESK%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCEP54d3uLfHZZ1gbFiFRFFxkc8qpPCHXoD7Y10ukH8XwIhAN92xvX97iS5lgPIrO7KORhg%2BSzUf7ecy5fz7hXdbZvdKv8DCBIQABoMNjM3NDIzMTgzODA1Igwy6d5g3GDIajev0bEq3AMcNyE2r4pAv%2FlD7%2BAzg0ccio6bxzbMUGbL%2FGasy0j1XShTMeOKGKMRZJzWFymSs8dKsapa%2F4v2lMPTok8VGozZXppyFQiHbKq%2BZeJ68rucYp%2BwxwNGihvDNDJbNzA7pgbp5%2Fa08wOSZD2uU5Gj7pbjzbMIMckMXihKYE%2B5JtyXwJ%2B0kRz3WIdJyHLLy6CUKdzaz63KbLS84EE0WrbLP%2BCK4XgSFbz8MvZYI6noQpL4W7PVFsFSLZT%2FugHR8YMjZk1umUVGQoi0pBecF%2BTtlg57l4LqzfckMQlmvvY34ROWuJMv3RTrQerJdqmiL6MW6qmvHcu4Vl6J6Yg53JqEMUz2c9RGLsphke%2BM2Erd7CjujajBB37eU5OfSy%2FItrM2leRzr9PF0Cyrl4Ym9Aag2VYdmNL8Om6KCBFboR%2FxMOB5hhI5J3bSM9Li%2FOox%2BiKxUfViADgeUefN3qZZcj%2F5RJGY1KTWg%2B17Xt1j8ANEkTEPMQGIqSs2wT6Fqx3%2Bb8WisVrRzA1QiTEclYuxZLGBzLvdkMtJkKJSt89aHZokx7ig8RNZ7GMa%2F3hmMTBNfsygyWgSWVWiaGeAw2C2XQvizgGVqyEpC3OITlhHHlL0hGQSGev2u%2BnYrGA%2BOeiriTCGz5vLBjqkAQ%2BO7ZJKTqTuXvLN6R%2BpCxnKs0aQHgEJiyLC4HgGikf7xiFHG93weV4sjhFKihHIpgZkfemjY1pYnB9DqDqw61vjFwbMITtUeUCTXyl0a0fdlaV3FfKZPofqis%2BHO7rb%2BVpHB1HBrz27RFE30J62PR9CEEXcgDzgopV9C5%2BMLDxHVrszqnnKh4FJFxlzft1mWMX%2FJxGv2VNi53%2FpWcakFhPyaFzL&X-Amz-Signature=daf7b9b79be7f1742c1e3b30006440c4a889044d7495431ab2339217ce65e83e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOWBUW47%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHOE08iQ2KogHqrQ0qmT35cWqqB1hxbvBlxkepHj4473AiByRgJg8sGbIp7CNXb0nKpfs0bvny8n76ODCDERzVOwBCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMTQukqfFxI%2B%2BcdN3%2FKtwD5JC3iAU3lPCLq3PaDaQMpqA5saSJ7F4qiJXA7UHfQ80qnTdCWaOMrD5tqs1%2BbE7pfAEfLsOxMzzl%2BFCIZQCFUqxWuleW1bIAc83%2Fa5j2%2BztWRwtmU96u05lIaJrtk1FoDs4AkOwOhZXGWRF3wrCL3Y3BaLQQKUDGI3Qbk2uM8bAUE%2BTED4HFbn8JGoFEmIypJPTKFlh7OTXbXYnHJZD70By%2FW8xTtVP2EHJ%2BGR4Entflp7NjaEEKyocvUgs6rDdFXgRRp2He4YqPIVs4MDcX6Y8QECgnXpetBjrfD2kTq5v2IllrqK408GUR0gBd9L8ZXokCXdWrvyfMxR6k2ylRXzp8fJxskZMRHQeMmG8iI%2BlFGCv2mSOJOXJpcOmNN8KoguVRp1TcEXYN3CHHES%2FO%2B39Ur0YTaBbaEYa2YRy%2Baxja80i1p5MoS5ZHFr3UcecX3I1VO9V%2BT0zN4WxCKUR5OtLyXDzm00JxOhQMogDTArosTg%2FxhAzZsvbS5CJuSWRoQ4miLWOO%2B0B2SgYgmSnYTfhdtAdg029DBQG7twmOUSmqFtv626OTVdaS0DwsQBHbMmxheVwVdT0x1VLTQSbr9OOMcqpG%2Bk71NRf2%2FU9eaEAYVtM%2BtrVdkANwaZwwos%2BbywY6pgEebPCinoVET7MemdDpmlc3RewMjuKeKl1P6hVnpzwe70CWbPoMU%2BJC23hPB%2F41vlqcHBme1HbTHuDnNTIlz9xOOZWqgYG%2FJUXm%2BTDZZDwhj9Scas%2B1KxofN7oLxIg013dVQOZpGFDJFqdBhEMJX5ueWeZKcxGfIKN7JkVYbNQijnDazkSQxNTvpFdB4oacqacNHQnHpFrYNaCNYGCRDGLYSbPahetP&X-Amz-Signature=400f9db0f710ec06aeeb7b9f343d3d0c55ce1ce54ef9fa0461b807a63f630e85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673YPO47Z%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBKomEKLCY3W%2FI%2FF3x6BS6UtA6vAoO1QW%2FFtk8bvIligAiB22%2FxQWizCwvv71%2BxFkQSuNRVwYdz5blme%2FWGD1l%2BsHSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMVeIk3MdwVZ1N39dAKtwDoYEIq3PCNwlYVbkEIrdmNXqWvflA05r1gfkn%2BosFWNSJUadoZ6zAFZBgcLo3Rd66hAAJiOtXrqrO97LwYGjHLJbrbLvtuqyfcxjqLDWNGW7u9c8vE%2BcqQX%2B7M683kmukLm5zzjkmkpqYvCwI%2B9TACkFJgIagtzgWUTlt8zbzwovJAOfYtEhuGlA8pqkQrmwZTRN9Td%2FpaWKkaDFJxJ%2FfRHwxjOrzg3GqxKsItRmmVjUlwc3D3q1xcBmNj2o9IqfmhVnNUHXvYk5fL9YbE1T1T%2BURsIxCoHzmW2X4Myk1hr4Kxo7wdCT%2FFfpVx4ARKOJZrW2dpPam4WVGWD3IfntoWGaX%2BvLIuJ5EgScJDExZ1yJ7qxdRCTTRT%2F%2F9NGfG%2FPQH%2BJS1pF6hiuscNQnS650VHCGo%2FKbXK8RFDNil8s7h9J0fqQnXtK8Y2clOdQ8pMW%2BonUqiy%2F1nCAUpWJEq7KAym13I6pHAGzr4XcA3%2FqtfsqYh%2BwkcdT4TSaKV769FxyuYTyaJr%2FaTxnU1JuRaIBUNCfofIgUGAOwZUzuy2dq74AaGVhOVMK38MxyNpqwgALxCG%2BysOuChdHlEL1RSLASBqSVJHV6AKWsQ4Zt1MS5XAuFRCs%2FBi9k9fpPJ2oAwzM6bywY6pgFiUFJFUOu7i3l75xuSJGGwtlcr4WH48XJ2VvkcfcGrbcvJTFDGbGP7YhS9j6GKNLLhyjX5Mx0kFWU211EGnyiC9qvgImBE2cQjDpqjLkozjmUHx8c00xqKyosbjgapVELUW3ptrg%2BkFKM0ZBTTDl%2Fe9jMe4N4WXmQsMssPPhOx8KGnG%2B0BOf0o%2FXuENbQLT4PdYzXn3nsn0icrkp8b1Ms9FyfzBm6k&X-Amz-Signature=c66b991c740addba009d261f443980baa5fda2a29416cc8a01e322ba63d01be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3N33E5W%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCz%2BI0GWinEgwih0CzI4P2ap9Q%2BNbC7Gyu3Th0SNM%2FQ%2FwIgLEhxGTjNnOo3tYUab%2BRayyBK4SLSzB9PiHSa3uxLCOIq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDG2xEgUWzupPc3wwKircA8%2FYlhIh%2FxT9yRgGso6SW1zqI421K9%2Fz0NPeQHg6reqJIUeZkm6kDqpDH0ATeE5R7AqgOTXCIwgNpbCHfJ5P7lcxv8jAv34ubPwNPTJAS555W5HoTmkF7vOSFCCHvXTwTBAqCq2cwjTb5MTZtCWpNRwNf6jBYSauC0ik5KpeXE3NZ2CwlQ%2BANQAYhkR0cdC%2F%2FBazA2MUyGLZExwUdtqy3%2BiEhG4NOlTHxMflw%2FvLEG%2FR2ALrCj6VyLHQWqT15owjOZqdA%2Bxt%2BhaCzfADXVOh%2FrzJZTCaeXNBE1mxukXq00VKWhnWyKHo%2FGMI6wk%2B0UvkuHQGNwha5ww5ogMgpi2HEoDCANDphO4IlvLgE6F%2FtCIiM5Cd2Y9%2FIpv3JCpltFlH7TuXlCxvH5LSq9UAm1fIIJT3KdtzlTbS%2FStS6OyEmlpfTEmnWZgP1gXUCPr8urHil68sG%2B9L2acuZr66snsg9aJhXliE8IA8%2FE%2BKMFdZcLPQqL1sDbtnZWOI8bH9q%2BzrscK0b7Mu3qEHbqSUrhrvBQ5kbtlyGomUpLfhcNnbJhSSjAI3%2Fr78r6OTEzWrn3FqFnuf3zs8xU2G%2BzsSl1vz3bCSfpC5tf8FbUBC%2Bgf%2BrExoWNwsaeLAn8JiuMiFML7Om8sGOqUB11s5I7nhiyxdPt7iqEB%2FbNPS7QlNnre7ELBk396iQKxznXePlO%2FI2WgkDRAxVRgqRkozeaXGYcaAkd7xfAUMQ9eYmqNB6dqkRIgKfgEuxjmRzPhZOhI3ca8I9ZRzx3xL688dle2KTiYxtmEovEzG%2FUX8WmwUTufaRbpojoJbBhROzoXlhjwT5lu1Q7%2B2FMhaYyMBiFBu%2F108615uoTKdECROFncP&X-Amz-Signature=69ee9b9a08399aab3a3e326441ab884cbc35537a35bd476ae11473742130f5d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

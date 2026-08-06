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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VKH4L7G%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIESrjU2sKEcM%2FB0xq5eoMsycKTcTxE73uhtyYStd0%2BrDAiBvqigAPkx1dRh52bzOSCuqZQGaiukBWk44cMDfUXCQ5Sr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM6OD0qcoGlr4MSIS6KtwDEZxJGLsoVy0112x5%2FS74C2%2Byz4Ot%2FY5HULNjMYz%2F%2F8blX4PILUPmN8z0JSmUbCahj%2B%2BsE9xaqTHw3JcmKQDP190Ca1eIbQ8cmyxONc6ozUrXis%2F%2FHGWF6O10bBvzoLFBnhs%2FUFlROPyWmfNpkWf85juJO3E5Cb%2Fz8c9l%2BNZrMJQs5KwyPxtBN6M7afVFmUTRmzFXbH5b97L5S%2FqKf9COFeJthLjYR125uXHCXLmYzPwnUDv9CcBXRdMGAH0NdheNLoFuHmal1IIbfnqDszbjlYTGniOL5YCJF%2BOFuzsnIFgEg8xkcfrFyDttbXvYBgkSBxMcyrvU3Ha3r0HTonBwlFFK6tEeLXfb%2FuhJsL3brLPlzKGPPrIpWQHFwlD1SSY6KbVDsaRNV%2F3JwsaQt4r49atE61Ho6z8n459YVeEJmdhoaezSOxIEs5bFsw2OUIQxPgxXKOGVdFCaFAHfrtc8RbhTxbanDhBQFpqzWG0qzVfF6cZSuEIVZGPUauW9KOmskTeXJd7RHqvem6JDMcuJE3ZPF%2BOBFuTALcFP1%2Fg513Ct0c5%2FNZWQax16aNLGzkfUL6VpAmGAcJ8jYcshW3q2cIUlA8Boq%2Bu5rI1DmBye%2Fw47XjY%2FJTcZT0xCPUowtNTP0wY6pgH2cjrsh9MXpBeT%2B01DMmFumvQHjSbqtak8oasAT%2FGIK7wCyageBWn1oYJ6MIh4r1MZMaa1hdKT8H94NCgcFngrQxNK1Q0pqJb5%2Bxi2Ba4wccWwCBC%2B%2F3JOPVAovzs7oqEStC1eS0FV5UOWI89MNBr%2FZEAIps4QcICfIw8feYyppg2Z088Z6ysv1Pj76E8JGPPvJjmqE5tHYJnYPsm%2FCajm5JSlMXfx&X-Amz-Signature=72006e117e672028fc5121953f136cdf897913ceeb2cbe60fffd1522b6d49a91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYHWOJAA%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCzrDD706%2FeT9feR7hdkpDTWiXre1974qFCd4DH%2BpTeLQIgbOZI%2BN4UjTS0POqG137%2BzkgK7RdnAOLkdwvBiRaGcFUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDENEUd49m4CAPanU4CrcA%2B8eDNFavzmUBhuEmW8W8B5ESGbE7ElCVZYD%2Bz7XApdfSVFM1V%2FWsYBWjIuwrgQjzFAxP3lC276cy8QmCikf5DEVCK1RcGB%2BgVDkZK6effGUlR2ulGesN82d0FpL0pkFDe7vksRHkWwOw0LpVc%2BMitlUw40shdWLfuceBwMUr8pxVW1RJ4XAfTktEKmmzAvWYUy%2BaDgyThobGk5Yk6bV%2FEbXYFWjtn2HdUskSPwro8XjNm3ei%2F90Nch%2BKYpC631tL9Fm%2FPA9NKfjAjqL%2BE%2BqOsJIzVEutKFX4t0THQVWNVFRmKNv1f%2Bnl1b6jDDCMAQHNRdTonKIE46VuSfwq7JjOLgJfjy9KGx%2BYHzppizSMWX09W9hieVC95BGd9lXmOWE0wTq76L0zNUspPiK8JYvvNi5MHKz3OmIdiYlSh4w6fNeH%2BriMBrAtdZxVfDBwhjNNJsHbZhVWd%2BWzczSqMZ2ITRugImqjZipxwodX8xLuqTivetf7KhIVg%2BwSjvNUqWCIKpGrGPaeuu%2BXe0oFhvcI64psiJSWCbTkakWk%2Bi1l6GHglHesFyj5gL5oUkdWVCxm2oQDCY6MdkpUYdUB8XrNTsKJyjpIh4S4QgUlmxBM%2Fj%2F3GAV%2FWGr9URMKkB4MMPXz9MGOqUBxkuWgO6XgwRYBiCwNsytp1IUXeWrG8R2hakwazuzqOyp4ejT6EdJElXYcwfKM8qADWUdIKN%2F2NQd7Btpb73bUP%2FGIOHlG5z%2FhAPed6T8CrmQcFGwLYFKRJMKzAMjMQLU0trIzuYNg29m5YhVirEwp70zWURYTadLRVSloohbMiKgMyC7f2DwphQKdaPc0pbWu%2BKqeWBzHjy4vQijrvGJ%2BoQZ0fAp&X-Amz-Signature=d6af8052faa7f406191f1f7657494ce31682ede01a13b904b4161961468dc609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJTH6JDW%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEwHbNk1F%2BLnATllDgN27WDSAkzX6EVDOWmJx6HAL35EAiEAwooKMfxW2ZAU20XDabRCqCt2OGF8%2BL60XgOrq05gpn0q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDA%2B224POJ0uGVbRuPSrcA%2FcWg%2BCfo3pe8H1MrbyezKhjFpMwJ7Wf5St47JYTtogHUybwBJde5freNM04OJN0Br1MKOQUIVP2YUdzp8rJ1DErf0H86W5A1di6zRD2g18c7c02LhHEOkO8qdBE6wQ0A%2FlzTmpqWkrrRQM6esmIZj5BcVog2dPH3OcioxxX3ebjaTALO%2B9RTKEINwLawUsIezNhVgxP1aVHJSPSAyUgeMS1V1q%2Bv%2BIih3J6gl3RhbODi0vNqewFElLc91%2BwFeWNexJ3WayAzIQsKa7PIDlULm%2B0MVySRtzraaOqmsp%2FCVCshNgq7lsfpC%2B3I72CiSa6e9WCAxb0aBuHFU5%2F2iqBKvtmt0nWGAsTDfss2IwiLy%2FC6mwbusq3AWGndGnUmFTLfD75R3XRNJ%2F%2B0fSyeWDUVXpV6cHW58KUwOeC4ek2n3c5nj7s0wH%2FteE0fuV7TZ5FhYk3HL0eY%2Byu%2FNAiwy7w5VMgJkrDxB5tGxQIvcBs4eWgo1FgDDikPMpBj286gM35Jzu%2BV8Y48kUQVw1yn0%2BfTGbiFv%2FuXA7iVzW5MARyJcb89BH6jR%2Brvbhw%2B3RJjUOdPezsOQzUJR3Cv4mRGVOlJwKTY3n01kHkgHSFYFQVWLU1O5%2BeS78m4dJOr%2FvoMKDUz9MGOqUBScdCN2IO%2Bvr9zv4%2Ba6oQAOLvsQiNO5tUabqZfROHRx0ihhe%2FzxyTcfjEBHBqrk9F3OmPqNqCqodSX8U7YBn6LvI9u9lpFHvp%2BM5xEDO8SnSLbBcVbAxelukCGG9ukbIH8S6NQyZGFfuJxC8YibzyZ76Qx1zRWZI2qTEAk9pRIdnO1yeJyFdDCIVgSNhysrkcOGbLydpsb0t0YVVpVVYyQD3REVwo&X-Amz-Signature=f2a1b3437ddd9852aa8d6948d3ccc8c7940f593928e559d61f7942c9353e64c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RZW2YTB%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCs4lMN9VHShWmQuB7CVlgwaWTxFGhinspCzel5QIFjlwIgEn9rgB8lAyMVc3alkeh7%2B0RbdzwdEr3fux9ieWKV9kYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDPu8bMRxgFxO5msLVyrcAyTQCjqCH%2FmVnzcYCwFZUgtbg4NcX6VWb24LnkV5ve02cEApQvZZItTH05zhUG0v9z46sA0hGyIa7RGM4XW192wVUer1vlMKGu%2F5x%2F1ikjU3ULD44dGV2PAcPrz5SaNtNDbUZtwkSXpsFe8tDsvroZhgvFXVbUlSl9Qh8sTQUNiI9KeQD1tBrhaEhKcIgJIOfDgkAlgc%2FoLxeKQvUEoc4s1l33lGZ8RcVZ3cKS3gTe1MG%2F8mGnf59trPf4T%2FLUE3tJjftbxPE3ZE6551nNh6YJOjPFjrOCMqYGJprtiyPzh2L8P9mdQ4kZCvc4fWIQH7V67%2BxsAaddoTRqUpjsWbaSkqw%2BuXJm0mAPSw2IIBOoPs4RdM57lOc%2B34pJdzOI9DaRuhs%2Fx0d03upwUjh%2Bu1JtlaRhEZ202oXYQ6fasXWzkWD2V6bzQSV1rsTfAGKb6jE%2Fkx0K4n1IlTlr94E%2BSZc7KiC%2BjrPRB0lOstwR7SXTaIIbdEGir87Xf6AxGu3wBZZYJQ2Zzrq3HzWF%2FVqO%2Bi7Bmw7auqD13SrWqiQzl2Ga2MWBG9XYxaZFshIqflepCfiCZczS%2B7ssgwaRUPHAIthxdLTq1vnJI4UffXvjlKubmG6ZcmMgvLbIZ7Fsr5MKrUz9MGOqUBg8ORXefS8fTgSpQAlHQK3%2B2uPBc7P6Epm97BkVZ9jsGsxxwPglyzlYXCIMRxkWvNymNlbj8nOMgQvfDsnWGiwbhroN6xMibMdizRt3NG3Cishul92s4vvOo4I4wJohaLPOpSjmX2XhoPQzeklC77DHImrcU1ufDmgMycafTJmUrJH%2BT7%2BTXvXkJKjM1mE4Svq6yiRZxQ6RHZC3JvZM8LywxjT%2FDM&X-Amz-Signature=aa27529e087db870d225abfb5771074e3cdb367239b34029e1f7493b811b9721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUKJ5BZK%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIAy7sxnNX55AFw5J8AUGj8nBovFOGjvYcjLKWYHb%2F99oAiEAkQ0JF5To42EwCNPnaTdYtAtsZy01eTiIVmAsLMNtSbUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfC3hAcXM8MCb%2BZxCrcAwERW9hUc9tf2EB2GsJDLKXFEDHIVMP5TZYKqYgu4NPr8hhbU5U5PVFcwQnmCdnjp5nWMSIWWBgwY%2FpXTAXWqDGBjqOs%2BRocjdkof1qrUuUGgpTuslEBE6dGYeEdq3DNj4AO6XYoGFcyCK%2B%2F8YeCTPEpf27GuI%2F17EAcnNGU9U%2BBGS3sXjGrkIvMRwbY3Rjq5ivci8j2P89rk4YW6pCieZAHEjTumeY%2BLnxfjeKLJmVH454%2FymYiPljmBxAJRAfA8nWm%2BXb%2FV3YMPRdxe%2F5qqmdbPSdHmoDrvjm1xwGYQZlmV%2FXxlNoVq8junMUjo91U8TcgCDzEix78QNTVL7fW34R4YCTYEGIiRpK4usdOP2tjjLp453sgM8v1nXJ1YPAHrqXKrJarJOdi0R276rBNk0DCBzNcbmPxmnLBS4%2FejRE%2BliNpBEEvDIdSRZTL0VXmKAn4TyKhCeZqsCl8tzsb5ks9v%2FCeyqnwdSYJ4ZpsxP4Dvzzx3uYqeuo3vGbHMZ7WZbQPtOyMrWFLPFGh8A7VOx3CrBeMF3OJS2n4T%2FqkIeoM1Nz41bSI%2Foa7veVylxdz4R44wt91uFfNZGUZQbB1e4d5rfXkNWKEcAxfbiUFrDauPLSSiY9ZXYOn7dsFMMSx%2Bs8GOqUBvrj%2FeuAFMvUqDb8EERPiaI%2FEd46hwgwtnYpSvR77gBTqvCO%2FDYexcaOjDPCAXZEnsTLZOpSDulH3jw%2B1Ab0ipcpXmScMIciRm6Y1hnCUgOTCkJnYGreXxp00o4cM3Kgs0zNH%2FW%2F9pMNZ3GUgMK8tpuZ5BG%2BWBo%2BOjLGCdKn0YL6n2ZiSJny75FnNSS92TBsAo%2BSJceImcfNlt6fbrTvhZH4dIffl&X-Amz-Signature=70f10aa2c0b04ff035be6fcce63b3aa3658095da9ffee905b92f50112e7058eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WISPOXJ3%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCDoNe9D5BWxaa%2B%2FrQk4D%2BqRaBxEcQIAXd%2BuYj1den1cgIgPmeh65mIz9fW%2BwO5wdwII4hHxTaWIfz61hJRdSTOHJ4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFD9Aq707XOYcwsz0yrcA4790hPzWy2B5OWb2tM9NljYjEkaA1nRQjCvSnINOhO%2FtVEiVVwNrcDn38FkZxxCHvgwd8ykB%2FyPD0NzBHrlkwOAd%2BP99DSiWQIjqOsQMbKjgUKAicaw1E9DK1dxFYG5ej0h5rPi%2FRRc2hwtJGquQTDGR0ze6HjN%2Fk8mUiOLCdhUVOJdM2ziSX5cu8NqtBBALnEDe7PbLMalKnzCD2GOUCQOftfsjBkdJbZ0rvZ7ZiDTLXMclvs0WWYeztf69F0hMRe9wZpJ8uTkEgh28SldBwnVe8dJUWoaIyefBOR2%2FOIN4crXfU4c%2BHiElN7iNPe2%2BLc9a7ouaFNyjBbzzX04Dc8Zn7oKQEeR6ttZECDIHl1kSNZ3N5F5qBGJF3m8NT1IApk2npOyzSN8PJ3LXfSzUIy4meV9ZWQsGnvMxzS7oAuutNKEdu8xZPbm%2FfNYv45Ml4iUD7qV%2FxfYCRKqGIDsNZhRDN74luA5LubCFBmGcv3OqubhKy3o2%2FXcnGhi4G3vZHJ1LATQmH1vQoraOasD%2FqKFL6gDg1o43ocOJYVJEMuiugVoLGntDvIuzfpmbo5%2FsbLhhr4FLhoNeTFvWpqbtvxa366lVWa9rxmN4EW5S8O1ry4qxRhkUdm0ebrIMI6z%2Bs8GOqUBWc%2FyukB%2FBPqVPAn3b8jN5XOT%2FJFyHtx15ebtqJWDg2vpdYc3CCsNEIMewhqZ9T%2Bn9LB8js1QXUrlN9MlpioBFbLKuHKL2UbqctALoIo5cmgCIAe45zT34YlcXOBAMA3MTIZ0TzQ%2BPC9ynTCegPkzNJF%2Fa2PIaeRuKL1P1UtOJmfvGHWUYKwGdDwCYlSdkB0Cr0cwkfIaOBMzErSdRxRIy5dMsE83&X-Amz-Signature=d279e527e680b4150a8338f54d26b6062a830a88aab04311ff994d22a5d6ac9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNQJ6EQP%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCFhVYIlPNBrJ2OZSlo8xyxWSOS%2BVH13c9jDOwxepsh8AIgC%2FHK21JMZvG%2FiqXlnnFthob8y2cewzMKckyubeOzabMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPY4VEOVk9oZtyskKCrcA2VuzcjZOiF5PXa6WbECASsBeg7mEyvqABjTtI6dZ58baP9GVB68gLjAC4SNbB9yCurtMhGTNH6oQWGWMpLVXez7WzLbPBz4M8uWkpuWq39%2BtRjs4eOS5tszFelMEAWEV4XM5gTwe4VADb3wdFtprvju3LOe88BOPKWWoQFnA6iBgwtlNlzhAtE4wqnGoPl8cnZr7ADEm5T2nfTfj2usL%2F1GgjupZMAjL8mUUpGuPMIBNop3xiBStc0THJ%2BducZMFWgQnSb1uY59d5UbIM%2BCOe%2FkymD6ho7WtTY8%2F2Zcmxc1vlqbzmeVf5p5FyNawKIsLUBYTLKXPc23WIH48UhsAlsaUP3G8wD6sZffRHWN5XxwBprz2e6Ir6mVb4koy3MiGZgJbH2D2gDCRqA4py9ayjlnTdC1L2SuU3IRCaond7bCAeRq8hhgEvPG0VWNR21%2BrfED459FRcJaqZse%2BsDVQcBkxWaZHbuU41Rzfpa9qIzjZJRRkzZs9eV%2FaW%2FrYXURO0dhXtqa8LB92f30dNZpEWItqdEHMitjHEAwSRruLExlQZZ%2B72gNJtJ0BrsRoMaOthw8CuytOoSoDwii%2BP24rZ%2B9x9RMv3Z0PkhgyQbRkd%2B8BCSiMk6gMw8AKVPUMM6y%2Bs8GOqUBt1uyJXeSGyWgPkLLjzQfV7ERIBJexgOUxJZ3PcuQIvD8WBmTZXUMTMt0XECR6sldbCIG67WONNWd7xBxhjFl%2FGTlXJlgw3VHek2HLDi%2BJsDjQzm%2Fo9OMn79lfYIgAF7nai4WDlN81VuWfXd8fTvU6mgM7yY212QTKZ81YU07k%2FMQ6b1qUNbTBkcpf%2BfVRnp9j7iZEd4TqxRzCJDlaOi%2F0s%2FWOv%2Bt&X-Amz-Signature=d1ed3c41c881ab087614d34bb139ea4f15f33867526e5cde3ab4fd5fbe0e27f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3M4J2D3%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGbV3Grw0AluLzQavCbvTojQZUCJk%2Bfk2WJkY49EZYtnAiAiHbIz%2B4owGvsmFTFle%2FKm8KusQDth7aDvMehoEnl9OCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqVYoA5VPPy%2FLL6SWKtwDT1Y5yh4a9voSfAq6ko7IsDiBhY3E%2BeVpCJtSmuXBATruaLkqO%2Fd7HI0jnUsWldpnOGeA9%2BUiX5kLmzUL7ZZWhr2uwr5PsQAsuo4Q%2F6IT6j%2F2EXQEoi8HoQ0I%2FjQ8nlwm1r4b27GPfkjIwSXWTIpH5fx6bui%2Bc7pPvlobvkLvxeTD2i9vZYdivbDcvCqEjzyy2uLU5X4d0F5nEhZw4rZAu3icRGaJustG9qDAtuk2idEPmsWrq45s3ED4VJ54sfOvsb5pRIE9Efu3dzfR8aGqXxQMVmc3BQnm8jZWGbGJ2btr8fN6k%2B1KNWgOFrnRnXCgjcyAX%2Bj5RrFBJ69103PMi8jucm2JWgrALd8iDiwSD2h4whxyD%2BhHzGprrM7TdXFituUOYVup%2FYG3yc0CEjs3150HaAEM1yLV3KukXO6mFUQoz7fXUxBXWQP9CR406LG%2BKIJL28E%2Bsd6UAe4oWAJ%2BMZDoh4kG%2ByvSCf5Orlc5w%2FyO%2F1g17Z8NekLf5fBx4mm7giHoKkStCG4F0g4nDvqT4IHJIigjCpA6KnoaC5AckFMY9r%2BsdqSymSen6oS1YfXVRnMxose8iApevhA5%2FO5VObljpudHG2FNE6gS%2FOfrA%2BVmqS%2B6ybBo4gv51MgwsbL6zwY6pgFMNjrnSFQvHXWymiCe3KFhzu3DvQUStEEhM6lYkwDIGI8mQ%2B9eNy13aDd6uko0R8M8j2XwyZABu7CltQwhHjV1TArQcVOALIt7k5JrkVdhhjQyXmSJlUAHq18V9Y4QwJzMzq%2BrIdMJcrbw5GWd4wZRN1RT4t3F6pepdYkbtrcjG3Isi8Fkz3zDZwFLWUAwlu8koUkEm4fDL7woVLaCh8XlYf%2BKQEF5&X-Amz-Signature=99d83de60a4c541b50954d338f924410420e37c631e95608533b90637b8759eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

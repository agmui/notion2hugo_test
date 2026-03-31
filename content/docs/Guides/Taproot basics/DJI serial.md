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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAGI4CNS%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCC2rw37V6kcHoxUmg3OpHODgi68%2BSoEHeH3rvYF8Se%2BgIgZLADrY4YB%2B%2BFpvEqPlpu24xCDRzXns3tuhQaElmdnKMq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDItD2VhsPeNxAtwoGyrcA7VHZzQkmVcyTXxNRjfPctZrU5%2F4Dj91gcjmDH1H%2F%2BEkbZVi0a5%2FLyVpOUcr7MMl1wrGbz%2FMgPlDQlPIwCdJW6aqqdwvdIvDyokWrwlYHECtOTWDUW%2FOBZMFJFneJhSGVFJRka7TB5VFuJwYNKM5507hW%2FcioStZh87dbow8o%2BC4iFibaKcKH0Xs9tDwIxtoLV9feIpkytMDJHQQtJbEimG5E3ON5RIvPLENmR34XGxM%2B8HIwTXnMSQTAxrAFPFBkFsTz%2BetiKTtBqlEgnqYtYashOAnxYWfXmPagmu4MPTx%2BxaN6j4XnV1C8RH6d7EERlTvjbzcIAqH7M4GNXUNMRrBwvmVfSEpi5pOOSv5dMWFKl%2Ffb4R6wMZDIrM2LXvTHlt2kQAq2DSJiZAqJkKSrM9GUEiSv11GiGvGlFCk74ARQow5HchW6jFZOB00Gz%2BRDkcZICMlnvopE0B43drWp%2BBRe7MxHtG4u00zZmmzwPNgSDYgrLhZK7kv%2FpDiSNbIQs2TkWR%2FO%2BuXwEcy3ppIRwncTc4ib3LoH4iWCW4o2zkRPDz9lMzbWMexUeg2GPP5PtznPnOehZBMULUuxOZbGkn%2FCyB0N72FZ2ek9HfL6BuTI02zX909GV8RhNiRMJzarM4GOqUBCY%2FOzCiVY3%2FEDVIhIn3r679WTQNpaZilxHncfSCQJaLh3mFzGLL4PYT%2BQwoXFz%2FBvHqTR2Ip0t1akubSwrFV1jUEr4wJMu7TeZoqVQrqvXy291X81vpuPyEv42TxklihQNWd1ElZXyar%2BkYCVDJzdF6X0hO2xODzSmQNtRNMp7Mz%2FpHd77G4C%2FHNC9LnstgAeyP4vzRgjJWwr2mI6daIsYzbjo4P&X-Amz-Signature=1aaf18db07ee006d69cf3a34c2d974aa6b4b259f4023329df04b06b8bacef1c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663UIOQ47%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIB7OJF0N%2BXqM4YBivxaRhEO4WJ1%2Fcb9d6wC3pNld12pTAiA5uapmepJ%2BlX7oa4ALHV9%2ByGLs4nuABpAVDzncOmjSeSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMwAdvNUb%2BUMMwf%2By0KtwD%2BPBq%2BvgQdRlSIYpHDtDUw8YR735fXm7BROFNk3nfhJr1WtSdxt9Y2tgn%2BGvTJhEsCZ53ke0H5Zjv4TGEjRojWZugmsVbqSTanXMZ%2FWoNb52l57C%2BFM32uVr1GClaZNGUdVFv%2FjU9L%2FIPywPBCfuZVF3WdzxD4PYBxCiNW5gdgdKISa2n2IHnh8hDajJBphPHKTPY8MB6vKJXvGV7X%2B92HJjPKhAGDyukv%2FB6suytJLEHUjFB1MblnMaToozcf84WeRcGYFFTamu0PVu6CgbqDbh%2B%2FaWSUgtuRCLiwfD1dd4Slx6gs8InUEQRvvD7JXv%2BbP9krTK4WXTQSABYKOgDutfLsKpmzbMnpYFYK6XGPqvXSgfaExRKWiVGteKk4mDw4vDWbynMDv5uzXj%2FgMFV4RUYMW5fIgmL%2FnOl5KqtFsTpXuqcE3kpwrvCwLxeLkg1y7v4DXhYRKF3hjYOnfV7I6UarW6pWeu8u4H0JN%2FGW73yRGz0wtHZS6uQ76IJlySj4Dm3%2FmPKGzJsTAmQ5QroVUTTsEBbEG5k0wtnrqfkRoBf00vnT85QzWVRK%2Bv1h9R60kRlEmaxVnHBQOZz4BFE0hAaFR8fqif8crAcxwQ9D55TWhFhx3KtPZz9qUEw17qszgY6pgEII8CRsceD6gKrcwd2RTCf72dRsXC4nbpTCRUCTTJ1fq6s7V6kw0Fe%2BNho2jqSjdY7uE0VTVa74sga%2FPSxThuy4ShNinVjI18Q891q0CtmrjjE8IK9j96bpvy576WeDGzq8HJyaWmFIY%2Bd0vtRBFz5ooNC6gyTJYGvoBvtbL6uZk%2FqCMzzx47LGhrqX2t%2B4NLFfVrWmRaAHQx1ToO1zw36wyxViBb0&X-Amz-Signature=16a1dc1f6385ef8114b993d4ddef74d463a0a97851911f49ce36d6325519c674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGS53JRY%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIBDUnKIp5Fr6hqPwvfuV%2FKVDN2VrNCvK5csaGohjFmEHAiBdPz0egey09dMmDeuXk6Nh0kvV2a2tFTMsMGivTMM2hyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMOngRu%2BmRRffWTpbyKtwDSWJNuLBdeg550JA%2BIkI48vWiBKto%2FWdPPGN77f8GjHLi4odBsY0G2l8g%2Bs7LmWjrlkgi0kCjhtEY%2BFR%2FTOFQ6k9OQgdrGh8446LnhJP4tUe7GXz8siuVZElSc7n2okfUrXxIKcxuYprKFWyfMZAfaXZAJ29QwkRN6Sipd0lXFDUIm21%2BaEtT%2BYDA1wfD%2BqCFjoIiKTqfIoUgIHfPTT2s%2B4iKc%2F3uFbkPeOfDV%2FefV4Jz5xf7AeKl1sZjoLyf4t09bccQuFvRGx0h%2B4kn8eYg3c0ulcFdAiLMF5fnDPuOaTYkd0bJOdXBa7SFzi3owKIcZY8BttopbIQRTWNKlkDW7yqNwZsO9LRgEmO3bspfTiULMzouv1zFf6r7a3FiKAiciBjp2uv8jdOimWSiSMmCi%2BdAIGOyqa38WL1a8ZJ8%2FJ4GLXmewasqvJ3zkun5eR5%2FvGPbRIY8D5PV3B0pEj3x%2F%2Bf%2FTtDrVm03jQqcwggNwuhYDMcIbR2zLv7VRkRFTjA9JoCYW5LwmsUD0foXjUR28hyzA8qPneY8Bo5bY1SgCGkuzjUlOHoMtUH%2BVdKWGPHgAmeakyQlEyiwV%2BRWwowOYpTNNa0sxUwhv6zSQudzYJIi2Y9XQnw3u6cyB5Iw2bqszgY6pgFx5ApksO15HnAvZTl4gy1JbWlCJybkfhpgaDlbYRkeZVt0NnDgBkOmCfqQxPfbt1aK5AWgfAYkAIq%2BpbN2Ph26KbeC%2FhRQCu%2FZb5YTiBYGZxpmMPOb8I%2FO9zW%2Fk8yTQMF7CtDv7sGWY6LamASNKEOxDstkBAZsbgJ4ps2xjGY9IugJMC4xqRzBUWc3UNCgML0hd9HfifSOLz1orMXHJgMLAwj2bnbq&X-Amz-Signature=703739b5b5ff66128702f76beed9fee3c33a5c846c62b3748b9a48deb4cb1db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ICY7A5G%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDUx3YAUuOFeaJ30UmUoihrtGqj8AOksHur7iaaTuujIAiEA4R4hZR4UDGH7JTgyP7yGiSguiHGvq5oTXWr%2BWp%2FVGOoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBUetp4CjFiXD0Ht6CrcA%2BK%2BAtELOoBsZgWF%2F68fgn%2BkReJH5%2FzvtOOMUI0VjbjIIcfVFo9C%2FBEkTDge%2F3J2Nc5zi6cQepir8EZPe9KwAcacPhr7s4X3YLvc%2BAvuqZNv%2FeS2tgBeEtp90vqYz1Vms00toNfI94%2B2GTWKk6%2Bv4XYXo70T6tqrTKVRbCM46jseBp%2BWErgz2IhZ4XI8q222LL%2BBYMC%2F2Yh1YiQrniL0BP8OQU02uRdRUzcs9x5UHwSPIvdjbO3%2F2dmiFlJ68PvheNM3mOgOZbuMSMY1GKC1K0dOWvyubRUFdBsF1X6Z0QEzmxvJZSW5y92TTcfbK0zjS9nrZDfY9DvSMaa9jkUiqwDovPp2FB8BYHrMX8c2HLCKYnJJ5qiHgyMyqbPLZbWvlvhWvqQlhG8Xn0P8CJq0UWjCtTIFV5P2TjsD4GGBsQKYd8fNg1WFq%2FHwaD0qXg1Nt%2BIiHMYE82KEToH6Zct%2BEjvy2WkYleZb2rwz%2BmmqGzZwc1DphkBu5I%2BmKeoCIN%2BN67bot7q1Iv%2FRULEx0pzjEhWLUgwgUDENWmp8RsL5YyFyeMKZ5D%2FxpSVZxj7vrOG4GeouXiCq%2FmoufjXYmkgpOW%2BvtPtKVVXu%2BKr8hs%2Bnv%2By67xycL3eYSt9X4ZLbMMO8rM4GOqUBaDCQxa5Ogk3lex0vpLL%2FBjGwK55nQQ1tK2cIsOorz8WD8p1P%2F7DDNK6L4LDcS5zoAMYNudIgl0RZ34zNEnzNqywI8ydtL6D2pVJVDtTV3Z22T6eb%2FLBFppWPW8z%2Fy4IRFmzfcqdsmw%2FeKNFKSDltjAs21kqoueTOJ19UD8H2lmR8UPT%2FqHnF2DqagkarNSGyIMwGn3%2FEU6hK9rgFw3jRQL%2FZnXbP&X-Amz-Signature=88d00e4a0bf4990d792c36b7e621141f55e3d576245432d934c76ac25ce70fe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

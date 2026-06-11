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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRK7XMCW%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDg9o0eb0EZ2vWqXPDFViDkHBYcwmQE%2FddjQJNiDySMRAIgUpkC9iZkB60eDnz9L9U9djgIppcv%2BrIMzrS8cp6MI%2FoqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM77%2F6FWJB069a0pYircAw%2Bdt8KaDNteia8SGkBTtlEW848JTe0gZ6nlVkodDgeVBPOnXPdNPWIePZm90zPKyF1etTBPd1KMFFbeeIwf1lKQmeGs4d%2BkXQv1TXp7ac056FbYaF9tXxupaxQSezZ2qk9Be7EiG%2F67Fe0ZoQKLpCO9ckXCD4K2sYfMWorKP7w%2BK3Vq%2F%2BUx%2Bg8Px9iir39yY9MPXNzCU6ss5XLcOTBbrk7YsmIgxJLubo4RFravQWSgSpf1HmLzm2lNJq92knKw%2FkVUfh6CkAmlK0Vk7MdXjflkrchF0t%2FFvgszc0TQIHm7OAfOCv9pjggImZAEVrLXvSh2a6Tuzmg7cgM95e2HCd428S0wrU2lfkCKFG4AqRf0y%2Bl5yBhOzfO3YGOvVQm4ZDbm31C8dRN2b2wkK8h%2B1FAWP1i%2Ftq0nVN3PKto7Gpp9f67eFr3IUwWJ0RNvMVfp3Ww8dEofC%2BatoPJrHOQsbMn%2F0pG9wZW5WLIzaipDRaBAP3kjTEtG4QvP3AoTC0kQn0xG1xHnQElC%2B%2BLVe3SwjNwLqUvmm%2BaQknjmVg9Nr4uon%2Btsr1%2Bzs5NWl09TZYbiDjlcLB6HRH8i3yeE%2BzrplT8%2F4MEzllqFbnC%2FwolYH1P%2FK1f5xHOe%2Flk5UsukMPemqNEGOqUBaeC8EKsligx2xE%2F9RabSPbHAOXB929vRiumI0ksXvNw%2F6AJ5f%2F%2FEza%2FDPGyotEKim8mC5cwBmmZiW0ORfLb6vuGxTTNnONw9smriT3UWy1oIoWG23ZPMazskv67ZoGz14dxpNLL%2BTPjLaXYB59Idu%2BxENxaMgDQae5siZsrI89aDuWbG%2B%2Fly%2FWWVYIEYu%2BFXjoIxuUGnCEni4K1XdobBRGCqes6F&X-Amz-Signature=4d331104412493fa61dc115c6197e0620388c21e13fda989293aea42b5d76419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIWZS7XH%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCLKQz%2BiGyt9fEGtdBZuC6Qu8B25adbKTI5feDNfZRQtQIgDTeJUfrgNORBmWQJM6%2FPpByLXcbHtff8S7PYyYEGc68qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEr0jiXSA6bhwFjzKSrcA8kbWsso3mBhxhxTTF3tLUbX0cKkUVnCHrlqK2qBKDfJr%2FX51rsWEJtTov4xu3HKffvUavg4DNSfXJCrlTjKQI9FZ%2FRk3mfaMAZBfNzJ%2BQ%2BKAcPnp5TLabvb3pxtOu40Puh2cTuDBgzu8J7XnRExOadoHTrWqewdUfRWk1s9WDxZZr6lE6HMbR6Yqw3AdxM9VQJjcZi6A2saZsd08thV%2BXsGSPdCfhlEv%2FRvE8o3T57gAjvAo7kMu75eh056RgLgpQboVPknVtT4UAR3EiLRsWzvpioxqj0EhUyXXZG2WRU1cTQYPhOWEkNBpkjf2YGke2u0PHZbjtuvudU4u%2BgQA%2BUPrV4OBhkdto%2FV4tnv4TDRANr3kvdwgmPEPjBgX2xU32V55OdLNC%2B1pnEA%2B7R1FeXgeyIjT6zgI7tz5NLfAN5Esz6pkU6%2Fp227YtZ%2Fx3mSY0bg10F%2B%2FvDZ8CgmSJb42toDbkXlH2H56ZZ88rDGcL9lnH4Bp5L8vPH5r0WZzE3QSxv4wmJUkvCfd8AhW3L2cjdVx6j3gU%2FC4na713aaRl0RYaU4Z3uCHbduScRu3yJdsnB%2Fzp75aCWjSiYMNlsiAwbTBh78crIjOvh96rYvYis8HPN63abSaODjFakVMOemqNEGOqUBTRQFl7VoQMEbgY8Hiubi1%2FsrWcNcb%2Fectbc7xidktfDXO1ZE1fUnhxh08TDHEaa7V0uUguHGdHJrJ21oyo6sC7hXUDPJvHQMs7CRGnyWv1tOWJ58C1sEZ2JYNSB%2Fl79%2B9ua4IAM75fzKIAtRuERfn36YLjghurfIJx0x2s99I8q9f9aZtpKmGK%2FBzYF7BD5KSgzs1jc%2FMpQAMoEYeF3CaRHeInCi&X-Amz-Signature=560c21561b2727869db9cc750284469b67a3dc78140c6fed6d614d277bbd8de0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KRJSFAF%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIBplD1Poe26T7V4EzKqZ4izk7jSZJmVOUQ78mTvgfZP5AiAsCLTF3rUtiyfxJpV8DUOXktUUwGP6N9rMndIKbW%2F%2B8iqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5LZtZqFz9MdeRtP3KtwD%2F99UNwdbKKXba8JDhNYRl7jeqOH3r1wooOx5hbehZ%2Fvh006GTYFybGNmC5CAEXFV5qN5Bfu6P33pYS9kb13HRKuK%2BVVNMlt%2F8H%2B%2Fim1Zrq540YQG%2F38nT2VlcyTQm3tJopes%2Bkkw23CCeZajKcw5PrrX2qbWZWzXOFN9iEMcHks2slbr91ERcxR1gfmHTLeW8QeoQdf9sxSeJRu7tavSYAvTHcuZXj6RvBnYaoyu38QvaLV8sB0EG05d5ZfihAfrs9PdgOsdGqQZ8LdklGZ7WPqgZXfjOfvlFqC%2B4gHXJBB8BtsSsG6AyeyqeozHG8cFJuljGf5qLU9lHqUH6wTHWk9%2F7zb6bDHlCikkOzBffeIdzvNYGwfxdxm2kAxKtEOaurvjQYY21YavDe6cgqnnZ%2FJwQAQJh2XRtjVaXthd5Ln973Hp7axqZiTE8P772l4NBF5ya4e700SMHWm3eTTFlqtpvVGBTBgdOfOrnGwhtsbcQ6Nri9jtzN9KRmWq%2FecvTBPTAvCrTSmxlZ79ybYmspYZgn699NoxFbTifx7aXWuOiqupq85XISDd81VjaeaSTY%2FNBRVQDr88PO4tLNdMgszJGcma7fI8iAT4PSGRrf1nGnh8NhN6oGuwHzgw6qao0QY6pgFWqB4jyvnCeKxONNYEuPdONzxIOjnMOCrPTR6yuyGZCt5k6gMDjh8J4l6aLlzHAub3TTUUMaeqXPjuXNZF21melUc6Y1U6gv8Q5HezP6Y9aWl5KHFPm07nUVL2UcIAncUgg2GMG7%2FAORD3xiBBiAS0HznRPFtlpSwlLS4T7580TOU7uYJc8DLVgQqK7%2B%2BOG8%2FHNt3Fh6Pm%2FuLHdsHRoSEh13uIgjxI&X-Amz-Signature=73393fa6464b0ccf7b5aae5b8122c9611085b4b5f1bede251e985562d71b58ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYF33P4H%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGfOEjAXwSlbWt%2FERkCY9og3WjUbFyOBIjsm8jJP1%2BuWAiEAwKHdDXNLEVBhkiOudDWAZbh3VGD3ApK2QBBiZ5vChk0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2Woqagdfv6Lna5QyrcA3DWTOdNCzwCYMRKxkQqku9o4qHsCfBnQNjreCux735%2B0x%2F%2FRrWVGc4CEEZysL0gCbQMWKLi2nIFzZPncaZ%2BMh3NFDtBf%2Fnk8MEEzsnD1jTJcttqLv5reu0udxZeORz7oGIv%2FpPWiVSTW%2BZStS2oq%2B03pgik7d%2BxzheO5N91imK6%2Bs9cjZIkvJrhUlkZQ13ITf2jDuSVCcmLZsdJjjT48aGG%2B3iJkfbOaW6z3F094iXjVF2xXmwGq6MuyIIWgw%2F4xop85R%2BsHsV0B2a%2B2Cc3GiF2XbRc%2FYpNrq%2FPJlUT1ZECfU08TQ%2BYu9esDxc0R9Dt5aZI8TJ6pE34y26MG%2FQbX2eaBt9C9xQCBNsEFWWU8RgGhoMyJPKfM20DVBPKjgrpfBNM1hJS4xofjbTSjx58K0sJYPBZHubuR7gREaR1iS6R5D9oPuujt3QooL29p0aRo4hU19gvaz5v0FMqajxCo56k0kpxQvFQxHcqhHPRH0gx4eTbe0MLumve79IJ%2BOdhpF6F0kJT9YBJ%2B%2BHwMFR5JGOJX9r2AhjglvN7geEvhgRx80WPBaVyG45rzxdOPGFHZSbF2sFYke74XhKCyWzif87bHJiGUTy2xwdCzTeI66%2FlFH0UJ2AogwiYX0EAMOimqNEGOqUBEO1cAE8rbvBBbP5JwGGEaE%2F9jJZG8VIYyfLcILY7Muy7%2BWV33x6XimJc7ipVf0cSCCQNVN4ZFyASl9UqGnwylHvzB%2BG0a5O9d0BVdSmHUh5GpK9tB7%2Fb3qxyM9%2B97eznt4IEPsGevjDmNjrmPr1%2B2PkzA4FFF3gtBkWcLKPt07srM25E2esVCRIsYXOKUpBOpS8Te36LLRXOBXM9zYhMCwVhTAaN&X-Amz-Signature=d4c70f43b62913645beb1024de0d823b97189b26ee491381dda0fc67fd44a6b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

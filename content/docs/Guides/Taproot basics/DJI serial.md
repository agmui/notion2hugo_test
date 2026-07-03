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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSR56ZOP%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBoLS%2BO0Ksnv2vKijwzgn5nEDHmZ5OrX%2Fl28E9c8z47nAiEApxeYrN6Qf25r6afEUO%2BlBQiO2LMTzuBmDlqt2D768nMq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDAMqh77B0dZw1GaKSCrcA4Shpg7BybHIeinSsZ09xsyaXoQO7IKkVwjtbvITgkb8xll8GjLyxShilcZL1%2BWl33DFM%2BIsgkCR%2Bx8BgQc%2Ben8xQomYy%2BxSe2TohjqXZgfJdit8vFZBKwW9SozCFScEZCvFNeXy3EJ4T08BbRfwLFLepE8yejHl5mMbb9BiD4C7bUYppcDctjDkJRunjqgJxbvU%2F02UMoeI%2FayrqO0ZnGh8AghSpHjO8megPhV%2BOGr9L%2BFjrW7E9fmduCubvMsfv4IdHa9tavh761kjEgEcEq5%2FyV6m1XCx%2F%2Bx5YQL6HgJiNq%2F%2BB6h6DL8AvOzuwqrmzCATjZbLUU%2BWDfrEEM2ZOD30tcNMJaCIZc97qxfKSXo1Veq6xA8sDknQPTTBW%2BDKKYVuK%2FjShEqsEIBCMvbqqYCgKAd4PVEUVqZXhBWlfGhX5SPlAsmh4yQS6UFEGB5avK74EOntQCmMLd8vj0jJ4TQFgTEX0G1mLO71bzcjxvFVIP3v5RkWRBvJslVlXmZyf2UEWhnDMTJSb4OEdKW0AcjecI1YXYz56Z1TEra994az5grziUU9oafjg7TE0fOgns9Mqy%2BRx5PL%2BR3%2BprACAaOY8euKiDsu2NqLpwQ%2FebvrGP2kxTQPY%2BkRUOXMMJ25nNIGOqUBIKL6Ym4kLH6xkbEPP2x8D%2FLWs99Dd50aigD6swaIvDvocKh8Se7HIFDSZLm9D5KinZvgjJzN0ANrWcIfy5qDsrI95MwbsqOZTx2cNp7uq5Yxxsa%2BhFsJaSPD2z%2FWPtgtz%2F8fRdCvWgq1Kf00eYbEj%2FTXl2TAh1q%2F%2BykwUbFdMBgvrfiVFzwgpleiwgc5N4liExueFRsyKOfpTV%2FxI8kprE7SvVzK&X-Amz-Signature=e394d88507384d3797c69b667a17beb682775da5e0f7e63d2f4abddc743956c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQUTUF5%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDwyqNq1wUk%2BOilfu4%2Fp%2FenIbviVvFOM%2F3Ol83eVFxVPAIhAMmD00lKRfQCQ0um8btYsOILh8ktgP0y8fY6VmzZwehhKv8DCAMQABoMNjM3NDIzMTgzODA1Igx3Jy8H%2FOFzicKUhZkq3AOPRoaZx%2BIjR3bXr4kERfUROz%2Fhx0YcZz4IwlWrfbyaesy9%2FjyVdxwFYBEW7DYMuVrSwU775HZ3gllt%2FlG5%2BQhedygrpzPOZO92jKSbiDX%2Bhk1VxxWEVvhoaMlVfRyuqUZVs4peu8kkwWRWi32QHpLIgjjZ3IEkcliGA%2B70RiMQJ6sg73BePdnwF8f7KAcC8%2Bp5ZikKxe24zORVjM6ykupRhD9y%2FUvrFJnRqomBK%2Bel90ZCjCQxpgsjhhOVEmXXm%2B2O5F0GqhjJnPEnZGv7X8Jfn1np328m0A1%2BXp1rkIkuiKS1F3BxLE%2B1KvJScfM%2BaMocoEWaYJIBFrHtFcIBPQOZ58tpk3Pnrd2FsPbDuWNPQAMMkVRQiRcuovcugzMH2PBUJ2wXonEd%2Bzp6egKMsyaViXuH2L9aOwjmJlLKjMi2igmp3MLhFUoq7y8PHoF7IL8QuKsSOkEMtzgoPxuN3ShUzD78WLVc6TR3jjR8Fo6eJ1DKmsNjMrThqFW0JYuPCln%2B5OyIdudzUKf%2FS5irkh%2FYR6%2BZNt0okOS13bj71wsWNk1tUmsURkfpIv%2B8aF%2BPcr7h2EVpOW92SmISZbwhxtr1OHrnEh4BVf7PMq5i3Tz1LCxhSP2F6HSCD5OFNDCou5zSBjqkAThopwGyFtGeOwNQzpmuZbQWJfuJ7QZUDqllEt2Di6dwvpz7P7phcgS3BiDqCNCRuIRICwOV%2FDv9ocAfBz8WN7ZrTitNcKHHpa5rlTSRSdJmSpDingIm7w02MpP8Hd7gftN9oFBdXfqSKzq9JRuIz0W%2BObtP4Ot%2BCRQX8xBKTBBfcLDemy7lWEUsGX1KF1bS89wT4nR8pbcI0A0pGUIU%2B5EKgDFJ&X-Amz-Signature=4df9c9d188481edd4ca68b83f7a9b496fb4610a6ec26ac87632ab8c28ab23e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DHMFSMJ%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDwlD6P7Lks30HXqmLcKDso%2B0R0JDmeOxaceD29D6RmsQIgSR3fosUj4h4Tmau4KU5WmrTfEaBRVOUi8Ub2tL1A04wq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDHM5skCjPDkBZLl6gircAyu8%2BYCbJ31j%2Bxc7ZLkZF6wkyQM8UxDu10HQ6DFCTqUmYOeToKGvPK0D2yZ0D7TdLpb8T7%2F1aC3FdaP7eSq%2Fz%2FdGFgXl8xF%2BOFHvxzahDn7BlsTWEcpaIq5QnJ1O5xvWhaoYvDQVuDsQXmsRtO45C4n4goxbCKNi%2B6r66LVH3YLbU1t6%2FtM%2FFWwSrGTqtwqRffXOKGdIcBBdwJsrEI7ANaTlhMUTnqCReF8H40dV9IDFdojUhy54p7r5UvHRvMvli4MSlEy4EB%2Bve0Ke%2BloAMUvqgqUsGJsqPRmq8IMJoolWpZfFOupO3ThxRMeJa1Tu7stfrStjKv4xMAJCIv6RDmOpksxz5zevPdTxiXQuNHeCbDub%2FPSz9BuweDOC4Ay0DDNMgXuQiuIPqqtQnP1SulFthAGWNM8NAjj1hNxL21fDyU1Y8Pfkz9il7GagS%2Bwkk1lTI9WkN56I2BNgWra2FCDInvhiVGKr2hcpcGrIFlGiYik7i5v%2FrDao%2BxddfwE6wGVw%2Bw1p%2Fv9lQPBKPcDo3OJCyZt7oeQwpdcnBR%2FEXJlY9WBXc8KcalZzRpsW1e%2B4y1MLkQo6H2PDRIplzakq1jcI%2BRKr1ZGi4BZbo6R%2FZt0QrZtj6tGnxczV%2BxrZMMu8nNIGOqUBLnW5b1UJ0kWfeZ%2BYf8oyEmoE11PuREvOwmdBI8nNkwmfkW4osfIQ6qQXx%2FSIPHsZHpsHVAKlhxnV%2BXZBeMvzEBmZU78NBmb6fYOn3sa5oGnxsWw8aHKtY%2FPGTR53ZmTS48kQN8lCRkrEfspTjpuIgBPe4GQQ6emdRHozexCCo6eDWskTZpZdBcXrpTz22pbGKOhw9RGN%2FHAoJUReLAf5AysMDFRi&X-Amz-Signature=eb5605346562098562bb9de7e1ebee142482c8a6821d105164da1ca12da47778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNX43V5K%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCLpQ7kclPmDmah8O35fFoMM211%2F7bwYgVWLZM0ED7WtwIga1qewnuWwaD%2F2vZk2MeHVyoAQcqFRhdRatju8eiA1WYq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDOORXF4v28Z3OD17jSrcAzqt4NL%2FR2ghV3rmCiIGc3JmWZ2rj6HcDd2GCzwfJg397ODq6o%2FpjeLL75OfaoWMFPrgiiriJQOQS4nMulkSRVdJ2Z%2BXk%2BspO1PZzqgk3rFGYvvBTdi76rhX4muL4y%2BWynWoDJyAk4fTY9xQtBD3cRq5bPhGn%2BDTCM0f9ueI1Yt%2FNMklcnVBoISxvrQNW0X1RCGlAUgrDDP4oKZuiUHdxUITyVKNlC5B5eotZXb7T6%2FRUSsjRtNg7Wh0GNwVdGq0atz%2F4d9qCvXHTZmvyDQLctx%2FNa1IOBHKKIoz%2BFxCzXAOWc0xZeSYQTPH1dTE%2F9xiqDCG0u5dJpClG2q3jHkDtr4DGqVdmtywwRGpeBKU39sQpN7r96L5qIvY1QBwbdBYKIP9MxbxDareIFBHovK%2B%2F657i2RxdMZ1KKRJ3xDTxXTl8a2U6weGIipRn7pNZdfBSmA%2BTC%2BKPIPLxoSlk0lJWvaAr0pVW0OSp9ZZHQXXTiN4uiB9BfvBShjZ2s02iq80aI27xnix8nFXlVvGksFAZgOLJGCYt98wfeeUAnqB%2B2cmkZZXdtxEp9R%2B6lMXMVUPS%2BJbT2Hiu0Va63qZ7evvUvteCepGH1zkBbYwQbWr5Ie3nmmRspiiL919%2B7xJMJ26nNIGOqUB2%2BHb5mQde5aG75vCBrgUvtUmK6ujQRG39fa4YbI7weYCRTsNsIaVTp9YVQlxRIhv%2Fft1caoXPhEgGggKByF72xgJhC%2FtxVlu4bV4ldx27QATr6hLxZpMQUYuGh8ll1gh84ue5eoISaQ5nieguhYsyUy5kD%2FhukgT%2BA%2B4iB6U0JlQYC2%2Fjt42YiUEaZ8E40ObhS%2BXyP1RUzh1j6HFkq43Q44wF4kg&X-Amz-Signature=3d9984db64691d5703f09c4ed60a741cfe773c9c221b9928816bfa7c3dc8c126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

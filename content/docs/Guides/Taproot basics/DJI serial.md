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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2XAX5NC%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCexTvd1PqsPkUhCdmeaoosa2TzwXBQG2YtYCBWuh%2BVCAIhAN9ubN3WxAYfotCMNTuXwfZzbMT3PMMqHaYmFwcUPX0UKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJHkldUUi%2BdI3w1Rkq3AOtezKjbG4a3a35gDqMiqX3ZU%2B6bxjexBFdVefJXL9r7pRLMFz4lwlBjDjmlFyfTv1jKUwot9xnhSuDQHsr4FOP5bsRr5wI%2BAMW9CDSPZd3pchasHFN0FgSMYUvknea5DjISenyfSbF%2F2nWW%2BeC5uteTPydZqMKxf7f9%2ByKYfSoJd6d07wlmImifYO%2BHEryk%2Fm8Ovn3E%2FdWOmduIG5h7SFwefy8lOIQ%2BD1yrCOnMvNMqKCorjx7%2BtvA1JbmkbCvlsFVDflME3p7PM5k3%2FJyl7F2STcHZPrhkeryAKPbB80TDbLcMzWKWUKcPVku19hObZzP5%2FdAck9BNwqz7ci9t4%2FOkDEiE1RYCNSh3eEmgxgJ8xnrPrWM9rL0PqgjcNqadYXvKWlznNMq4e2XdGIyu4ja4KcRHYg8SQSfcRWNZe3vmSVXIn%2FNeYpDNzlJtuzmu%2Fyk8yio%2F%2BHbK0gHntM5mLIIjkILtPHm31fvKVF%2F%2FEvtpfxyJQFNif1io8vT8vB33B0cfyGmJpFN%2BUtViQ6k53WP79jnHdN4KrZUSg1owp%2FwsbGmHGShHvUKcGEeL%2BqDNmPlcDRjsIY7EKM4mPDTGk3cl6YQE4HujNzplECXuGBpMxHsow9SuU3pysMHRDD5h6nUBjqkAaCAFJUO5ptd2ZGAayNzzP3vOfyQvuSx0Ah98j9tY10I8B5haRHmNWlRTfH%2F766z8zTRxsqc7PbtsCeEiy9I7L0txUzqqlt%2B3ygQCaaR2Q8zKDCkUJxE1gjyVizX%2FVcZ8upxUzXFGoh737Ja6jlDDqtUDdRbT2qmVW3ILKhTGNo8fD%2BUFZX4aZhwHIo3P%2Bd0m8sW6iUDqb%2BDzdd7qCDmpksrS5BK&X-Amz-Signature=56e2a1b2e3bff21b7fa6bc044a5156acf8e82418c94c583105b39e3c54a7f1be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6JXJFYT%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDIZL0Ijzv0ND7ACSiBMHRoqNNkS4sXsBNzax9fiVX4TAIgUwZgBqjaqFcVn%2B8zcKYv%2F5Ij5YN3kGOiOSpsSU5DbngqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8rMplvEBNvJhT89yrcAzwJuGHNh3dB3wCFxE3F6V8s5jlI4G23GU%2FXooFw9K55rcqmpNNsHKS2AhY5YHvJxmwMMeAkBHTa0j%2FC1RgnlbLmNExj0V7suTGuBn6HXsomdDb%2BYEmjsxecboGWcgVEqXzja%2Fytk6gTmHiqf3vlCF3WXXIg88dUpYuPnr2aT0QgPXtStZ2s10suuGhHIXY%2BwgcOqAmNOdMcZnNsI1YQqSZ%2BSZi08RUf2hp59%2Bz%2BlukxzOP88wP3g%2FSm7GMT7fiu3K%2FXdyqXdcNiFcFXMFpGc3SymiH8u4lowlC7Sjs7HP1jiehdORj98A7jesgxOW%2Bk42u6UR01%2BA6Foi8XXInZTrFrngJfYQ%2BzPiJ1M4ueOgT0iO%2B2rLynwFq2hGsdExqP%2Fvuvc%2FIw6czu8QDO8jOO2xPIP4vwvSozRo0GHUDVMne6Jfvu7lID8HqSSx4Vw2oadQY%2BU2w731BHRKuk%2BMpQW4YxtZDCbjZlUNhWVCVFeSC8R5I8lo6OnUsBgCybJr1hqkfEDAJyNyjah0NtvHrySs3TBFRnk1Wsjn65xvXRm%2FbKN9hxMdMBmwMk8GQMaDPKJuHnR4LoQOAgqxjoM1C7T7UXgkTXyDBkugi2u54c1iiaa2AlkUhPQzf1ZrFjMIyGqdQGOqUBzrk7ayS54s%2B%2FtMWfiTqT%2F2PHd9ElUt9I0ktkzlDhBaMVN9OtAs8HqEEj1A8QAohreaBFByLgVn11Tb4HNQ9pgPKUnXJkWE8wDMG2XBeIlBReiESOGZP%2BTKIl31D1%2BTq8IjPBAfU5D1w4B3BVmvOJrM0YJBUWVYsO6cUYYVZZmY2Rc2%2B5txylBD76XybGNFvcWuKr8dt5mt7cXpI1RAg%2B0mOMLrYD&X-Amz-Signature=e9541278d8aa198927f6fe7c3b316606abafd202f739e2f6dd2be601cd47e753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY6YGPES%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIGzA%2B6mvvI%2FBgcWDlKYHRh%2FqnJ9soOJ%2FQ%2BuRKye5kB7dAiArPfRxkGDZei65xbFVBCAP%2F5w0wl5IjOM1pV%2BeML3A4SqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm7urVLzI2kx%2FBOeJKtwDJqRY9bpxDNmj9sP20tTK8sFXYJj4I%2Fz5jqjbFyff%2BMBobVyTaIYat4UvDqmAVD41%2BQcl7Ni9I7qPrNH1HlHVLdieUv%2FAjCtUiVZfJoiwoixC5MA%2FXXsj%2Fer0nO7TeNjMHPZMJFzHrG3bb%2BcwXhuDWzGSARrhDrbJ6MbvCKKFznHgC9QNpmugN6ypY527vM9zJlkFqojV3kHp46E%2FiiVqH6Q7KRekwUk8Jcn2m6DUjFb%2B7uAzR1mGpmxxD5TMOFOUv9BsjQFN%2F1fdpWJRDVyv%2FEXVP5lkAgEQ8THpysCzUV63dKgeRA050popj7cvhOWkYFNkAySqpcMoi2Sve20wNC%2FdLrdPaIzWJmo7uerR0ETpfaa9sBhEOSdYv8q67oeOQzz98JSdiFp7OAdfIcZeWO6p0EsuilxKabRHBEOqKvS1w0maqv9SJCwawceb9VfboEcSwR5fWt%2BfeSqgu316niDEyaKoGI2zFQWaH3N4khrLeUMV5NvvlhHjIed7C912%2Bg0eD6Awu9Eu34N5oXGmljjB2jCd%2Fx5v3guKPL439lCa5nmeSfDuZVkYHRq3ovj3fzf9dkNioSJ2bAdgdhrNUPq5bGp7%2FyQt1d7L9%2Bd38ArPBYGWsdqBhcumGpAwjYap1AY6pgGh1RlsMDRDbmY209vAJnOji2MnhF3BLJyiPIK2%2FK4WW6vI2AqZIbN97R5UdSS2%2B2CzO%2F9m66q2Dr5DlOpX6nXUHZ8dbvbZJxPB%2BQsAwb31e1EwUEm7DhYZidpgo8zLq6cF%2FHMwS6euUHL%2F2bPRg2tUNBkA6IYHtFrO7bG8244UePjjg9qAtlVMR6j7a5g5%2FBF6NbVmJjoLMhSw4vs7kO5pBXq0REc6&X-Amz-Signature=ae3b9ffdf5aaf688e7af70698a8a7736ad4516d17bf02ce89571aa077639c163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLDCVYOL%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCIzUiZhV9fblQVc8MJSOlWBQnEWckFwFvX9qfygtvNQQIgKod933Sr%2Fj5uKIeSPB3B6H5nS8EDgTdgMREQFxnumgEqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZlx8Mmrgcx5jsHzircA7vW1LRpJbZbNj12NKF0Fuc%2B%2FbsmL3rDLy2LuBjb52WL2LP5u6U9g5tv3I%2Bupu%2BHLCe29mo%2FUoD6eTu1JSHAnsrG6AltU1gc3skW3br5DeyFJEB%2FsQZjNXjoJyyQVhX09b7EB28bRwgotqUkeWj%2FccznkRx5ZMVNq%2BjVwwiedzhrdgwD21eA0v%2BG8Mx2UeqXEVWHRdpOtaN7TdwkARcK4qs%2Fv9w9Gk5H%2FwC6Zz4RJiLR3BvNVv7dumBiAw2lAGlBTn0iKlnIVyPBJKA7o4KA3AUKn4FMgnc2hs%2ByqDxemZOxLyYlLkh%2FL5ZxYYRyPn4laW0aYvVxEXJGjC4EsgLD%2F6PXP0HnNNzbEUjK7mUq5bbGqvZw5P1LWpnyIj8U5XmnYfCJMvY1n%2FoCYUZu4cV6qKnWTmhm5EuFcSoG7P7i%2FlG%2BayGsQn3khhARmdyiNJK0dHlrh7I6u1ISEdMuWvCd3hDcSvdh5%2BF%2F4ixxQ4O78LhQpDM3pXOlTIMW9UlOYWgLa1BnjppYMue1WsLHfDf3g40C1uvtjxWnON%2FbBgSWuFoUw3MahyO6rg4YI%2F%2BYkwaEEkAXi7F5TLgRSRcgdB2kBKNGD4QB%2BR5XzjOCfzTWMANCjp%2F4EvBD%2FKolOeCmMOGHqdQGOqUBEvHz2is0io5VUU80lykCPetyBMerZGQ99Ucovr6i0loue7YCEanwKGLcjVbOhiUjQzFVh6HvU7OvLy5%2Bi0mWhJ6OhAhTrr3MmQJeoIfiRPGXIivBOoTO%2By7trdYSO%2B3lAW4bZuPV%2FdU1DO7%2BdijTEMQaPWWTIE5JLp7uYMBDJgxQpWyDJNHYVfmOO%2FTrgr%2BTfH2ks8yqSmG7k8%2BrMZW6N5HeStg%2F&X-Amz-Signature=57e31c97caf4e26e2843028c44f7bf1c569c8db62a4dfb8763e05760660a16ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U7WK57U%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIH2tK7lm14xkP6m007sWovg5wvhnFfxVG8pQXUnDMGChAiAxLndXRwx%2FEIWw3wA6caAz0pEwvPSzQ59EgZObN41ajyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1PgHYkoheODkFSxjKtwDdUVnHrnxqUuLsMAfoDxsch4WL6ne1y%2BGfTa3%2BtawMhj%2Bjhvfw2N1snNYUkcjAc2RMXwyrKYgfkH33ZEfW%2B6Vg2y3oO2CcfGxHhpaxEMraaBNa0D6vd2rMZ4qe78BI29TLjuNemwv%2F%2B%2BxBu8yl%2BcRCdKChpkXup6JqQ12FvTUPlhyp0NFY5Rteh96Te4jal6y3%2BtnbgBLviEJg0daZGO%2FetBsm%2FzY3FvwHE96D%2FbGv2EdE0vOEsjhLPNjEQWEoh7U96btpS1h%2Bpe%2Fa38PlEL2G4XiufgERovaYEsjBsrvodZwcsNfxFv0y%2Fy1ShnfK%2Bftm7hQPDvRrlkLYVVk2aG8fO7%2ByigD3EtM1SDOLa2Q0OcGEt%2FwtlR9G5TuOrgiIimRusVuR7mLBBZeSflIiYowElEtZT7cS%2F9J7EwOPzQ29C63eXicnYbWi5hJ%2FRhL5pyFGsrDV96OUkBwcVRDEfs8ivNjfTqCcr0uPgKjKgWQN%2F9wm3IwK2d4amevGrRdwsttRWWtI5HdVLczXsR2Ac3VCOEIePdpeJnUju623jmSyf2GLx35sjfDEZaUyajRUTGayL%2B8oXbaY423c3Eewye8TVlplRtTSJ261MViPT8quYZxHtaKMwzkMQ4ytbYwj%2FmhygY6pgE5WKWtnEXOCJEbOICJdtHJmqa1GfIVuL0wwmqPrSSF%2FurfL%2FvMn6auvOBZmImZuFcf5oWHYm%2BK6ztY%2BtmaSDT6nJCSHUjJMYt%2B118xABjDTDRcFNcEcPMXM5yArOHJRM0fq%2BpmayTe0gPCltBoN4PlqEUihfDD35L%2F0lD8y05SuvgHdD98PKFY8wX1rKueGhcrA6vw%2F3SoriWfFVauStpttDrpi0vM&X-Amz-Signature=c7645b37c61806a799f43550152cccb166af5e98e9fa54b433cca3eda183c509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSYKO67I%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIDs1fR7r%2BwPjSHPf0tHWZyRvq9dHzhivpuqwJfSc1fsvAiBxG66jnieewd8L5TmbMICrbdLTAlyy%2Fnn0BY0kJkUPmyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa5cydaqwDDJBYD9NKtwDZzBYZUlQDy4QGw1RE8K06fC71ByPCDR83RGNlzjr25auHDC8Sj7GrcoywLpJjjTVrhdJOohF6Uyk98KjrbUi5WsUL8hH4ARQexhXRC%2BGc8nK4JJKeY%2FG8AdRl%2BUp0Di1YE4apUiwM7vnIsQRG4PxRI%2B6KChIB4SlTexsGVon4PpXBFxY89f6vOzifcqaSa3qMTNjLX5WQxQRvp3l0XMBqMibo7AMbIvTQAwaV9pxcKXOgZ454Es5sNmych%2FSw7uxRbBsXdOlW3rphSDkpkLB%2BOEedAB6IG7GgZwt3q%2B1eo6g%2Fo%2BwIFNDofNsgcT2nYg1GnsUAF7EDVkli4J%2FEPHts9Gp07ChYmTvHwNaSXtW6Ttx4wCvS%2BlCbL2VCANosTAEvQjP62PgTspiQ3bsRgb85yesHDatyVJl0lE28%2FFCnKTvbumcV%2FrBmwP7zH3E4VDuBbphthyTvrrt86xHb3JQWEXT63hpvYYNT15JBP%2Fc8uC7ffw4dJ9w%2FtsIyI77x4qZQ44%2B8MSqJUlskdGlclWkHoQoptBw1QCxQMj0xRc5XQwWQ85j%2BiAqxXiDmmMPLkPzeZBRMD7gPsbqXaqKg55PeABscPANrkzRRPydByMuq7Xh%2FCvycFDMOgEbbNEw1%2FmhygY6pgG7gmsiVpYTs2DQJcFNjwRdFT6YaLG%2FINEI1wv5%2FUupgZ4V1yD6RYi4ATnbbL0vglFS77%2FltvNC3ay2CVmASIN2TVYzuknpY4M0CsTGlGJFsvHtVsoRLJQCo3RrGzY77PrqDPpvNXPkyoOMHtDHctOLwtOsmY%2BhVRjBSzDgpsbp4odaSR0mxqUTGZwr0tUGuTczo85faWJ0MJjvw0IA3LMHLwO7eFHa&X-Amz-Signature=a1ff24273d41906bf480e01d087dffd4bd53e1de285ba3c69a5f1390d603b6eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ4T26BE%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCCbzN98%2BJG3wLI8Sv3x4o2IAsKM0vX9DwjsqJ58cGJDwIgHYqZ%2FDNG24DzsjCd3BmY%2Bsmw20iAbBO0jAzJ3CaCLWwqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaer%2FZ1uTzFAs1LiCrcAwggnNCfBO1aF2vg2s1volhdY6hHy4%2FSyvMbamDiDQ1mZJRf9rspLJVDTzRa32o7pc3Ha4Koa8qS3klOK%2B5sOsRW23GcVwHrMuiiZ0e9dwqEpBIZkDbuEvNfhQmBZpz5hfGy8t5RSqtVo4JVSDlBwvM7HVxcEmqg96yTwSD4e%2BQbVKyDV10VWmMTA7xlIdtGHy5VQ%2Fj0oA%2FrbFjq1JDXWk1GTTzDh%2FH73Viz9lOHnuYEQ76PWiftYmPJqJAGwUCBinMJDImG8E6YcShPx8aIyd8VK6YwCg%2BGLw9msSbfZUHAMzXuvzsgK3O5RiCNJEOh0rLxfXxM1fOuCzm%2FStgfY%2B3rwj6k0e%2BNIqaAmFY9KAdQUzCjHTnMAX4X8ujN34AxLn7OjoaZhXbfCr%2Bk0lKm5xPl27KZFc670oppnfjurw2c45IRGEpflSQhf3L9KJCkSYy8n6K%2BRl%2F0I2V0sV2JFwn44y7I%2FkUUimDccuj52Dsh9Yptiw%2Fio%2BoiR3aFChr2Xdvgf%2BYFhXfDzw8KJUxjKpUha0JDMTztejz2Iedb7EZpxtTWO3RUa19nIgL21PW3NaXvEgYN8lGrKgjZKGRb271QNmBQp2c%2FW1CnyThQKgQMsmU9%2FHDojKCrWGRMMLj5ocoGOqUBU6EGa50KEtQ1X4LMOdeq0wC9%2FlKz6nRx5hjB12eVkECV%2FDiXlrRgouoOo1ZP%2BqaVv3DcvXvaOeaM2BCZIjo8NpiNHZGGDSQEvMTn3rtsjJxBmG5cSJB3YDyJ6wyXgVrrFSjHQW%2ByMno%2FlF8%2BMz61oof4v3wQtEp5jjIIc4ftgqp6nqf8WDS2Iumr8O%2FKBx6pvzv5jt983G1hPirjgfLD3GdZItie&X-Amz-Signature=5e2f178f600145a40629036ee99b6b1fefe7996c42e3cc49fe4c2e710def3a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD2MXU2B%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDDqWnbSHw6sBbyTeUW%2BT0liDiMBI15Egsl4x035VyzQQIhAMjoVm2qWkZ%2FexVV%2BYLMwipoxeG43Cl3wdwoZJEsnmneKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqUzcmeVLHmTRewtkq3AOI7w6G2zV%2FlcgNLqacYQ0%2F0VANyJA%2F90hXQRJ5Pmwi9D3AThKorhoQOMC6MWh96VE4BZRWns4oTvrsNnb02xi6TQESZn%2FKvmPQgZH20EUF42yn%2BoQDwYK8ZjQChD1zuz%2BU36OQ4AnafuduJBvE5HfdNmajlFRcHPEZxLZYu7pF8mngXRL1JGln3yj0aFIMGx8KwpBn4Ga8J15kfLsP7rVrIXKkYj73JRpvmNxcoSLoZbbKQfEWYprYDmO4UWGuwRyAjCH3NLgmhU3J%2B8AXEaUc9X36vpp7TH1bAIuS5wsQnqQeElUDQyg6w1j%2FgkmtbKx4XSzaZlbyF%2Big8fKlz9uU5U%2FJjUvloQO5AbW%2BXqSRiruZNTz7%2FlP652pmu%2BKoWTzU3Oh0StGrw6uD1AQP8JziSAVJrRmH9I2BEzldZfXZaRZJfbnoxm8ltT%2Br%2F1gNfujUv2glR4F1SC65fKOiDONOHU%2BJsUKJf%2FO04ELG5dZnLINo2BTOBU1cN8l9kHJhgNKVcoC4sDMY%2BaOkfLPRgBDgp0SKM9H%2FXqqURf527js0TcjAA3OZ8Sb%2BGNvgENlRD416r2%2FeGq%2FS0qZMMAwakkX8277jH6SQwttfdJI9z09bEao0ucri2DunfR%2BbuTCD%2BaHKBjqkAS2z6GN6%2Bw%2BPJWB2%2Bl%2FXx%2FMR%2FS%2F9m3SvWUSXQIYoP0VDAYz9n63KvWbTfzeD2QJf6nxbMbgwbu9LfDeA9cFNkqAzVUKLxpt2sV7iW74J0mgjUFUfB80awwqZHYCcRKdOCRJrFKgI%2BMJXK19IIIIIGihl91Otv4SaU8P9mlJ2lMPHsO2Yz1jJo7RZVX2Fbd6Vg%2BWh6GfCc8yoXkdJD5wPNs1kzZl3&X-Amz-Signature=b9227b7bb26fefb8792627d07e468303bd0b2fca0802a4b37b1b10a2f48d2179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R2DVYFV%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCoKc70fJ77lcKfoN67vDPCo0%2BOxRsOsh5yltm5u4AorAIhAKWUeKhiExNksiTt6mOFJkRxaRAdmi8jn89071RFg00JKv8DCCoQABoMNjM3NDIzMTgzODA1IgwDRYbsJlG%2FBRvm1qMq3AMcu4nkCNOvaMUHM%2Fhe4TOnI6yO25r8mOSFiUOse4PzVY3mC7PwzY1Vc5Tp%2FzggRNCjMM6yu7Y3XWmHhoPIeQW1xxC9%2BnkPk0QGsMPhIvwAyAZ8Ndm20NfPIkrNMaqQQtZn4dbgnozJMxeu9HGK4GidZNolreNlgnAdEouNxvKjre%2B10WJyoQzdGslo2VbIbEeQ97fbXU8MgF47oAoTaxFDZXqiNaXFKw7GsfdKQAuCXoHOU9k%2Bz7egXL0Ygx9Xt3%2F1mwyku6thxGmIGn1jlny6eGlG7h7ghhMxm2V4ImQXVvfE3kzgSS9z3sxyMVNW%2BMN20nk8hbl0OZeSrL8%2Bl0AnvCGkKZDxndV%2FoLyFe5sxDcHmO449pGzvYWx94tNGH71bebvNYF3KQ0dpz45SwJegnhK6eyr7BggQHWhMqjCjtahI8HURZApV25lbEOVtVpRv4r%2FMhjw%2Ffv5Rv0%2FweKM2dR2IAajZGxCJn5%2Bg%2B4awRXGgCv%2FqVLvxXO9B11u1mmwbNjer4N22UY4%2BprArnS%2Fzs9sDYelXvlwkJ7wT%2FarWOvvUnl%2FmT8JdXvMj4ghKgceLXAGPtJp8LT1gMl8VkM%2BUi4ruQFzuFLeIdr8SdGAtEvqNeaiVcpxl3zTXlTCH%2F6DLBjqkAZM9xQTckyJ70ZgM%2BMb%2BfkUBP8TFmDFRg2y%2F9DeD8BeXDdI3ea%2FFCe9zL00TwadccskTpaiV%2FDJPwq9%2FaoP1tS6vwgCukOcTVTvRhaHzKxYlO05jv29pqkLNKdM2BnXJVomhDJMSQ2tAk%2FyuxfxVBF0LypodrdRfY2SdIjSx3jYUvB4pjt4zLjz01eFVHF9ERn7MuBda1xDsvKzJEy%2FXhLEwUnAk&X-Amz-Signature=a682c86d7da0e1e2137954fc7de091e16b05490351d182f0fd07d39d1be9ff62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSRJLV7M%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDE96qL%2Ffi6tayiJJKZAWAFmQ4tpZDyLJMN9Zr7yUpFCwIhAL5YsCCkkDOyBqAgiItW9yQG8JZD5jy5dLxRtqXLkp3yKv8DCCoQABoMNjM3NDIzMTgzODA1IgzcXFvzgMN5iT3GJU8q3ANqm6DwlI4ga59MzCTxz9iyJwlrG1KQJfbbm0%2FFrzOt1EL%2BQhURnpMTteVBad%2BZHi2duF7qEQQd0iviqD5UmigYAIG%2B2vwJ0uCAE3GkRIVxZ6xs%2BWbFIE18O2%2BpOFIkZvwEM5qNTlgCanfG1biimM5Q2FGQpVQQCula2ZJcgUcu3M89CIefCr45f1wLrALm3BsC67R%2FkJdhZ7cp9R91WvREzUVqe8Dqkchc%2BNgy8dqW3FuoDaslVN0pfHG0LC4HJnTG1CrXCW1GIqRUw6ajPo4HCsqP0nJnLPo%2B6t7Sy%2BuYi%2FS%2BTYFyI88S4exWhSH1AfTKXEwJqtjvENzf1kEY%2FWWUkjnGIXX43UxKXogArWP72eaWzNHaEdbksQBVppxzBIIPcqTapECSmPg0T87iv1uRvHNtx9gZu2xGvSNHpdpDRvl39TskcaRgxFumbI7Orsfj0v3055gwcswTlB5TVVibxLnbW5%2BRFhCsx9DHHkg6%2FmSpgeXuhB5Scx8f4vLwzEkqhgsF35fHz84wHQTNuVXwYEtvUoiz9XANpGXst6yJ8GJRw7mOsmLn1Xq4BGHtts7b5EFUvCFoxLZ%2Fxel97H0h2bD2JkSs6sFvxJ7BN%2BSeMW1WYqvmP2hVPaeYWjDmgKHLBjqkARlT%2FGKxlA1lQOiRaaLwNSpsgFHHW9pG4DZzBVCK5JS5Dn5xcccv3UcXVOiARlKpdWbXehMyaMwloPvKNuIKGt9i8ArdKCFJwIeMRdkR7%2Fos3yF9IkHekxFojVpEEE8Nwx68RpxDJaOAFbUAEo5SDBUtSbOhQ33%2B1OY%2ByLvMmxd0s3TPvFaZlqCyow2SGxmOybd1dm6Ogvdu6cPF0iPsiJsGqiSf&X-Amz-Signature=f0ddb0276beb2529588ea965a95801fa056738c568bc11b20cd5fa1d16dcfc7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQZ7GVFE%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD9owYU8xOdxmkCXEkFy5Q2jCcuOFg8CY00nFphEP9PiQIhAIYpcbq0Td0PZ0ficW%2BXtBO345G%2FZFXXUnWoYdSMWFKsKv8DCCoQABoMNjM3NDIzMTgzODA1IgzKtwtnSokSSmB%2B%2FkAq3AMrp1JRanYxg6HbLSsx%2BgUllb88wahF9X4bHfWcGSAXUe6WzeMvRzeJdnBA4P1BN2bLnaCUvDdsPX6GntNn1XqHr3vrUmHTOkr3cgwDyu5gzODVOeOtWnlghLjf0wTApx3vP%2BKY%2FxLy1XfxhmzVliGS7ImznNePLdRvSBpwRUm1dnUhfRCR3lu685m22n4KuZWeokrA9IUx3fsScG2aeSycpI8wpUaMyHEO%2Bs2FmVbZQupS11madHbuRdtHSuBO1lSMLpzuSbGlJXYQqmZc4Nta8KAIsoFWNxp0rwf48wghsEREv5GkdgFiFLUwzkhpfofbckvKVr%2FYzEYJ160G03tceJlZu7UYL9r39Au9%2BazceGdipGdFWCzIav3ZTY4Xbv%2BPSw4ujojQ%2BsCPcTUalDYVQdf8llKXLT1qfhVUAaNOZhs8F%2FS92VVBOpgT%2Fscmw1eVslsFYUSm5%2BfwdGe38Vx5ODjdvcT5qvOVhkU1A7nmkZRsuuEcnfgTw0aQF4v63EhwCuRbNWsdDd2L6By4xBFRLXzXUFV5NfNEvmyyf9pShhmL%2FOqBNL0ieDOCEg7tu%2FwdZ177ylAEyXIhh8D8BMzcW5yNzIEbB93HbtsnN%2FliioavfZdwI1nfq9yfyDDVgKHLBjqkATdOTi3IgxyY%2F4mDY8a4%2B5BDfK62m6u7bHwgAH8%2F04oawQkUPOVtVamlYgf1hN4dRjgnM%2FMY2YnK43forX0ShZCjpq76Pij%2BV5WxMXZ%2FXd2%2FfB6FJWrFus9NQwLs%2Bnsk1PZCaVy7ypPJqQ7S2alq8MgEzBDupJygna6LWGptLMb3muUPbDDmhZOT8T58ZDzAF5yzFEwPyMIkKpjJhXin%2Burgj7y0&X-Amz-Signature=3b084b7a31e7d3b50a34d05c7bc7f7a2f16930eae9bcc39680299e7bb5ed8006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y2BMJE3%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIHBgm5I4GTT4jtssCpiHOaZQZcDtQkrwryfuzxepVfyZAiEA%2BvfqewsS6CXrBrt6akDQZ4V6eXo6%2BDr%2BJ9i53PqSD%2BYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFY4g%2FYgO28V8LGjcSrcA3zbOcNwNRTrlO0xYPG0G5pg99vJu5kEnCRzMYiBDLl9q0CNIqB5gX73Z0L%2FoiXI7azuEjpTpR0MQyYubuA7feXmiBRLDhyuhT2aAgve527dEnt9bDyk8Gp9ayyAVyRYt9zCyEM38IewGB6t4cxcZF9YglZEwGB0McedmWBRSMbB5XKG26s%2BIYhFD5dI9gBCD97Hq0g%2F3BxAr6GPDi8elohR1Gkew3imit4wzC0Wv0VPrRbBBR4bd2Q0eyFE%2FRX8K5CL0i6bC1deaOXqh76WKtp%2BdrGaxIjwQqx5rTWpmJEg7yDp7pKJAcHYPWN8uaM7S0l0RX1uy8yRH9TEyrhmBV1lsssadlbuDU9KWKZ%2FpRwPCyovSo%2BrnY5JXtvu0hA0CUHk4yU4x0G3srl2p4T0Aeu0VpafMZOVQdgsBZ3%2BAH2ZykSD5oQgatjEOs32ROsFLd5uYvMpNglYPIHpGzm%2F%2BI%2BqM2iGmg%2FLPrJZ5G4oo4o1xytt6QaPSf7OP4HDJWU4UjoOc13xPydDsyPxkOX72ez7pIE3uech5j%2Fwna8QD%2BeyKSLKv%2BVWb1PDKOGUTURcrcljHhCs6kC2YKJp5Y%2BPlal4iwrr3HdLc7fZfjL1DV6kskB%2BhmxdZy6jgmqJMJr%2FoMsGOqUBbL6KUfrVw%2FtM1WexVTZtLU%2FjBZgcSOx3ezytRo65Kt%2FcRbfjCx1RbPkBenn%2FDal0P1A3lq%2FDptqKuW%2FLYqES6StO1QPF4IVQoAru%2BFmhIlEgbeVYTM7r2RGE8635vBpTWbnf4T9WNAMtPRhE1Fiz02DuDm%2FL2AcXKd3g2WEDXKP%2B7uRkr7Zga78ymHZTIciMUKD%2B7VeRn76uYugECkvhuylo5HbZ&X-Amz-Signature=1d3b7ca3725419c2dd1f34171e0f2cd081209bb178593527dfdb68e737d13aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

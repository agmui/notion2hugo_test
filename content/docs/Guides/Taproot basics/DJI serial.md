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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOSNZUVZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCTRT6cAVM%2Fv6G2ReaCoSSiZVWeTsi5am6k9yDkaHEV5QIgUc3E1JJTxm8QP9bKGX%2B29afMP6pRfe4ALNxU6jEiyT0q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDPY69xbVg7sypRzj2yrcA1PQflPO9Mzt206Uqz5pxubmhVJDTGx%2B8ZpiQM5GJs3qasLeazd2JHyCqXSUTHawm8Fm23k9tpDfRXYtvk%2FKV4Q%2FczlA3JERKZDQa7VL7ykK%2BNEmqIUZBPYHtKlbw5hgK7E6aITXRMbIE%2F32jVrmJoYEWZmL4YO0PtI2px8ZjSKnRhZv33o7CmV4UtSq7yuLyxA2l1HP1n0HoPF6OzWkxtO1YoKNzgFGIJ3Nw6UW9Otzjirj7ws4zgNRueSCV6ixGzWTA7cE8AQTSvnMqCUhppjDiBfXN%2FEE2oigYBDjg82nGa73QGaxv710LzfbGroPHpTkqyHWogTvOcO0oGW6hYkQ1tMnvOw04b2Qux2kf7MQN3wZMgwaIvEaCbySeD8xhxDEuRQGb49tr9Yhy3RTlsHsEwTHsXtN4qkTzZFnK8XmaI%2BvgyB%2BhfDY7XpfBBJbv6R9vrWyVsRFOxz6iauhDhTEh3CX1P9sI6q3nPeTO%2BCGMJRDZvzYbPHze%2FWtg%2Fzs2TpzJn0fetUn%2FWWtzy1ceoyOUcbWGvuXimoFXQHHXG2btyW9uTabDqvdxPxV3WXUw%2ByW830smaH1OYK1NP42hRpBeq2sKox9AtpjdQKf9ZBfffeiERXgAHVNBBgiMJSc7MoGOqUB0N825QXfL2cpiNbFBVZMkNyukynsmIOji55NeEZm9JWsHLlE8XFunDZjRN8WYJ87IP5a6rV%2BEYvMUOgxoLD097aqw6Ys6OiUqtDwAHHD7WfxhxLkeirFzm8L30Vo%2BBvLukY4VUAVqnTh6I1Ge6%2B8FgGnS1K%2BGqxPtWu9qFkrjRnP7x%2FfvXNczABAQ3qgH8WIXJs8%2BfgkRoEWfoqGxyYOdvr3irgT&X-Amz-Signature=737a81284142396b5daf785bf0b8f1ddeee084756f9dc0f9564481f21160da1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXY733CX%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCJddI%2BSAHWfWQEKbZ6GuoHPQO%2BAhDaXMy5p9f3bXLeswIhAMcJjr6ABnSn3iV9OnXTfQ5Q0YN%2B4XKJrkQtb4mXU0vjKv8DCDgQABoMNjM3NDIzMTgzODA1IgxpUW%2FYCUofi0aK2eYq3AM1oe9Kmoivg2CgGq1sepOx1%2FGxFLYW0GNCsnSbAwjB8DSVEZh4ISjweUXKu9xABqWBMNIjvCxODeDueI9BSWjqWd5QQWn1YcGlh3p2HpA6LWT3w1nRtxbz8ANyLaP4AbX9xII8ZbF8aQk04gbj59tAY3tJj8R6A%2F6DUUTIWLKf0g7fsSbVAwGnfcAdKU1CUugYucDFC1w%2FLKyHjmHd97ReSvOjBoLuMVMnQcnkWwjXAq2GNlf7kl3ucGgtwdF4UIIUhArbzRHA8xvUKa98m6loNHyjRkiEbuJ52U%2BfjnQ7HrBJX2Owo04lAdNAtGbzkTgTxcoVMgZFMTjNfg0f2xYFzev99G%2B31%2BGgcDjtPDK%2F4RECMYpjOexPjGpJXRh0IYkTQk2MrkTggFvdLv7PJVEprFGFZpWyQaTBBEp3RGaQu5y0cqlO%2Fk9inVG7hIeCbkJpplyuNrWWzWOok5uEhwcsEcTcHNc6AyDKGyqGIMdhDW2sdtj6zRJL9P9W4wcLpa%2BKiTj1C0CI9sdqYUFSr%2Fv9Qo9ofM0%2F2DYZWRUhuhh2xt5LsEq9bKUFQO%2B3Yt8%2FGqGB2%2BMvpy%2BcwpH38MWugQLUSruEvuzEbtJLD1UhEoRehJIbgMuKU%2Fh%2FB723ujCs6uvKBjqkAQOOFyvKPaDl4wxkEJ%2FwCxkZQbVK9skWb1R5VkKGkjokzuBXkk%2Fc1yC6z9CM4kZgwY%2FhdvU8sSdD5AxoQNxZK5EtFPgiDnoEddVGwJSJnr36ZWM1AvUy3dC0v0MzGJllUfRd5sbvXoI40W9OSuNOCSjmbIJEYpiZzhnQFHY771PrSzMYNfkY6bI891UCVtVELfyMERiya3amBlcRuF8V4V37TK6i&X-Amz-Signature=dfd2fd4a4d9fd274732ba33a30ea6cefdf840a2e3d0cf89fbbb76b0f59dcdcfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLLXHX7H%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICub5CWdwA%2Bq%2F0%2BZbqWaEochRx6FKL7T3P6DWOi%2BFmvJAiAlvrxn5WE5DYRqHPOIu3aTQzNQPUHTdCFfcMX4XUqP9Sr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMhX%2Bv%2BfuBR718rRKDKtwD5w%2BZeNDF6UuKCYEqQLQN7UvtBSyINsq0lJw4Gdy7JN5o1BWhsIL%2BTorQVYEz6vbyTb4AGuUdaa%2FcKsFT6PSy7QW%2B9pd%2BBjw%2B1EhAKY36q6iprWqOr3MoKWd2I2XFwAJcEW9XvSWrfkcw5WzQ17QD3noMrgTpfPX5TyR%2FgVUYqOriR0En3WrdxsZjg%2BFG%2F40VexU%2BJzFyEIq%2BWu1EGxYSqW72kAjllzCdIHpVGuysEbV%2BW23djgBJO15fHkxFYKukEiKNZawqX2HG%2BWxwt0dTvpQVCYsbtqjkmx%2FzKqDi4ZiUnxcTS7g8MIQe%2BDyYQJP29MdNSvW4tncm0d%2B1EqZ7uk2M51vs361HKWHBffs5xMpG88xJ8ofEsQQXgI2eU6GOMuD0xCzB2TEbwjq2DCeNwUMtPLpc3oMoWwZYt%2F79KlPcUkOfCyltWmOzvc7mUHcC%2FjTIbhGxrAGn0a3y4RRvTzGhFOLf4iLcASqCeY223UuQUfwMjXnk2tUhpAkXGLJ9%2Fb2bPyPEORkf8DUOhkvUfiO8aF%2BQd39JviCY0FXdqN1L2Dql9K6ONnWVEegcJ9lzcRxjxE8Gcbrrb%2BF2DwTq9TFg%2BkTyZIGXFtXD9YAVHNSxxkKKUhyLCZkRbSQw7absygY6pgGlmhgvKADQG4po84Z2h7WUD83Ak4veHlERs9MgkpgeQbARC1jM7gJvNNrd1okj1RJbMKaktoTmy3iONcdcPcG2PJGSLEFraEeH9awuN0flpdngYrjgU9WKOBcR49BhJpAy7m%2FLYORMKELC8VNoB58JDO7QtOUFmDde3Zl%2BwV%2F8D9N7GcIy8NoevORYifwL22MoES1QovVAKS902khtMVqLYZJJA16v&X-Amz-Signature=673b0142fc57a63aa881a8890a7ba41d001927c40bb5646a7e92e632df76106c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REWEWWPG%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCICb7mMs%2B6gFp7G62gkMFXNnQMAh6DjIWlCTCkMNfmxoIAiAHni%2BjWkBRsS%2FoxqnEjyWrC6DA%2B%2Fq%2BOuU%2BkuGNAY6%2FKSr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMXgmev7e1ZKsDT6yqKtwDidGcYtMqZgopg6F8n%2FctQkgL7LTN8SPpqFgw1l3duFJaSL%2BJJkDsgs6tCkszx4izqKfOjbsWSbhHwSodLpxnRpUceZ%2FPcnePTzLEAOpAtCK%2Bo3acOgoMwylpALvJNe0inmWv0AaYhdRhKva7XBqErFe2EzLvsybqo0eXNuqYdQE4LSDACQbv8ZzmiRlWk%2BNbv%2FPcerWSbZvIdG1ClB9DmIApnsQBP59awIEGZTVoW1ojZ27pLrsNO%2FgCnKx1x%2Bqvjsyw3v%2FTsxoirwupeR030tKRF6Hzscba1JcEoLx5Li1OJHsuI48WygaHQ5lFbOWwrcvQYM5xmQ1m99Xh0UFWrmoclDPqvbkuLjeTEbvzit017gGHJJuNOmlcDu4KmQkrIacdgqmP8CMdxLszKIbZIJIJmpc3lqwYi0MRHEfeAO%2FyxwuuJ6QhEvsex%2BRknKf1fcSzDYUEy2Ffy0AHWUAGEwoyeftFxHeoSuIhgXm%2B8zN9pYpTgOb2Kb57GI4wisrs6zP8cBq1AY2MnhTfX%2FhC804CejhoUGzU2G287jDjkzm0flUwYY8%2BmsDma7NYhFSThaIf%2BSg40JggD7mmMHng4ugR2IsI7zILrldQZvGj%2BjGoILDWRIRiY1gsW0UwjLDrygY6pgGyFEv%2Bwsvr77y4w%2FV%2BdENKJMpFbZzlZ1uVvACtuXQi0x5Oi6VpKEw29eyuXccCcNVJgrrzDJrF5TSdo2AYAcqCtuytGGYYJIAl5qRK3yDczxryAfxwnN5PG9Kadfo2aClDF%2Bzx0YV8M49h3xKUGM0JbyiZPb%2FZ9ZEiTmGFAuYDp3HZg7MPQsYxRCvrocFI4Os23FmYh0Sxvc8Mm6Ih1BsjfmESqKNO&X-Amz-Signature=142c17cffb4a1abe5515cc97c641a96697a3e07866d3ce887daf35b1e9e94763&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

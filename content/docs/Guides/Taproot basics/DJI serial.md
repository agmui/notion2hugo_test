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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUL623ZY%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDUWhTliaFzkFg1sh%2BHRYQsIOOTW%2BJW%2BCg7jPz4ZLONZAiEA0Z8031o8%2B1SdVnxV%2B4sndBaMd5zRIJNa4HTMYaVkfWUq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGQ7D4WtSfzU45SgyyrcA7cVmFGLheNTkz7p%2FY5RHnpdiujdqufzma1I36kwr0oqs%2BG1Hraux0gC%2F%2FdOuKLVEw%2FE%2FyvB1wtoxGPq9j1rWfjEg1h%2F4wjmc1pxecIsSkGgPLV%2FD5wlQbbMoRtow6ry3z6fY6gWvd7VjUujKLXvNsUi5PfTWhavMHpJoKquSGUnHCSmkfAzTQOpYusV3xjkKA5N0ckwSS%2B0C8BH%2BBhgFMIfGTTPfmSMT%2FYsXtAapG5JqJP5Y6YBapiZIJOX3Vj9q7r4kiZyDIjJDpoofI2eRoZzP%2B%2Bvx58GL0d3RmEG3jKZBt694MfE6wok2c91Ymt9bbx5Vx0vhO73peTVqt1svdtlwKwmth1JGFwpGOSsYHxEgdtcLQHQo9eUaDKi5g2GeW0tJ0L2OOFwoyzHxa9HTauaQBP0LrmXCs%2Bc7IQSQkY8t6L0qmU7TEuNP%2FUl4h8r7UXXaCO5w0UqUC7JjbymZmnGpWopNWahygUcqll5ZBjOAPG7UnfNVMOfmbvEFkYJv7sMbmHlRd4GnwDYwNTXjYXIOjah%2BTB9F3hlDHeubZCwwJuPJbilB7l7irSXYfZbbiO6TNftFvXKN%2BcuX%2B8aRnjxEIfSuoGeM6ExK1EzD4sNo7tpZVcTR8YLwbolMMnv1csGOqUBNhXD39rr0de%2FYzznYbA3kvDYZKSIFwPxvvYVNJfVvO%2Fo8C4fiknMJj%2BhC533gnqUAuoKyr1jZQc6uByPoCi2mDkaTBrLMqX9PgoNvyIe6PbA%2FvA08%2BjXKYxjzPUACzZROA3Aai35p36JDaM9q7SfqXBi3rNa9P8RN%2FehzqocdkYTi8gfISq%2BlS2%2FiKgCfvhmRue5ojcRSdoqwO%2Faecz0WjCJSpXC&X-Amz-Signature=00f7d1485155556bb6e348d96a8966bad99897323e2ae37904f2102499d0981a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCDOPEXQ%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQC8fGJHiQU25XKgWcgiI0eWceKWlg5yS9w1j1JZg46K7gIgTjUJxgm3F5wNXxBuUrSPlDjP8%2Fdhi%2FZhk1DkjZzHUYQq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDPe9J%2B6Pmy%2FVyWqedircAzRXcgryPNO9TyeaNalhWoYd0dDIyTvlZLhxlL6QxDR8aIUgAseZMMiF1S6hs2a28jN5y%2F5P%2FF4MjAWKhLTXG4xK25uDuNvDLhSRsLOAC9cJ5vfticSpCS9ZHeQIn39hL4K0YSBZg0PAm%2FfIIA777KsmEzrIXzgyMlOrIzQYLgxfs%2BBSgLSKWnRalQpE%2FAvHyzLImgh2Hq4%2Fg%2Fo8ISqvjEMA3c2Ip9s8T%2BrL6kxO%2F2xgv49R30OPduPbdYVt9EVHRUbZTEIXP8yS9ws0r4EYjnrcG5vZ4Sja0Z5NR9dmazEssgmyUTXqxs0mA%2BQBFZxKss%2FBL9EMRJUhuBB4sskqOLKFztTU5dIl9N%2BXL6h04Ut4jmUetM7hyIH6zfvmKT6g8Yn2vFlwRxfhftiyONUeGkncTZ1eRbAgxj0%2BzHkKitrXYbVzvSiEUbOQjkg0XLOVRf9PFuIYprsP%2FiadmwHjfA04VT4SDnDOnktHpqJzUKizGEdlgbNTxxRQ1p2IQ0eykAhessnnWrLnPMAgdn6Bw69VZ9sZjvT5KW8ntHrPCKy6rj8JSzFHHOiLZf4ULs6LPnVfT9MbZS%2F3Vb5%2Bmem8siS0YTJPZ6oiBVwXGsHtoK07tOgL5JckFe4VFOpYMOzu1csGOqUBMVd6tsRbduigCvqJFoSX7oTOPgbOFrbfWhqyKGOw4GO7JHWnJxu2leOuXAg6uDMC3CPZBIpZtnl40uXjqjoGUT2cxH7a4Fp7GOGiVI%2BT8YjibcGNrpW0n5nZqjLXb8ivxgTPsx0BTWGwBmGPCCv%2F7FvwFqz%2BjDkGFRvZZgJgC%2BXrb9%2FFd7Q8z3Ux4fuxT3MkLIxnwq8muT56d1iHlow67OepyNrZ&X-Amz-Signature=337cef13dfa73710045178ba0aeb5b4ad7cae48b399dd8f5f584e0f9797a48d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YB6YB7H%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIH%2BiFlTXNkTWTuWicRaWp3F7gUO23090XpcBgwfXK89mAiBi6RHovqcQQnpOi8zbJl9W4ZntOPJRYJjVfoezXi8cPCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMyK5ka1kcVm5%2Fv7QFKtwDUC16ItSl5IpjFdxV86EmQBl%2BVZx1Jew8ZpeGhN%2Bk2MiHvHaCYq2ykoUGv%2F16%2F64xQ0fswAM0Piz%2Fj3xN80UBbUSGuqBLXgRjrVTOiVlOEV3%2BzT7jl%2FwjF0ZOpHuuCI%2BGCqVgl9FCz3RyxuHh2tk5kaJX0CnzD9Fc%2B0mWnb7KThdtdQByuK9xPdOYopIEVQ%2BtGJ15YVQEBW%2Fs5duTTzapKFJuFzkxF4Ypm4sIcYegegCn2I9PLslVJP7vuQcNxzZ909L7aRm4bwooi1oRJmqzDgpBJw%2BR4xdaQsPsmDsQW7VIF64vBa6%2BFUWIV0bQP4JPZpxNxgYgPf3oFVPgGZ1qTau1kI%2FsDnYuiC7EbOnxL5v3LVBE1mFT3RwJ6sWCHHEnqhJUQ5%2B6CuCqO%2BMpe9DSmp2pyCoOH%2BjA4PF7PzA2zgyAZOVaoj%2F%2BcssaAmuA092FDzblnjNNEVEo3rNDwMrABO9lTp4tEQHwPR%2BDyU3xF907%2BwxryO8O7M%2BZFXEb3tCU92T%2FGjH%2Bbx4%2BU6%2F3D4bLH11D7p%2BhLCD2Goo1vGp%2Bhgu8arsa8c2PEk39AHxfLo2vTJ1TSB6Vs1MkxZRTpBCbXCOGelODKnr26DCgMbr7zZAo%2FDWVd8G%2Fw0A7vBAwhO%2FVywY6pgH69VnD7RHrLKEvmUJRMCSJtDrm7DoCGcvQf46oFoXucVc%2BXYdEBTRYDDllntfqAYUOqb3RXNRjK5PtDDxpnGCbhIi3aN3Ta2NOcKvNyRILABPPwLSm0a28ra80ohyMsMiOunGV9PdWphCSRM8OZ8PnSTjP6hVwLiyvj5tytJT%2BJMh6KaJsulaAmH8GQEi2XC26zuzUxPfQFl4HfWxM6JHnb1E3vWae&X-Amz-Signature=c8c29e696c58263d314e9cf96ae9250c1fa84b24a8db2889923aa9bb158d6f17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X37QKK2V%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCH28T3u5RQdXWbWFaacHNNJntVQJ4SX8hT1yTu9fWZ4AIgHXzXDFFqJruD8A%2FGgIbi1bHVoZBa%2BFh0c1bNFbnrBaoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLD%2FqkspnfWkEzgsqSrcA82VitNP4bHqHb1KO%2Bkr5c66JlpaCgHZM7iG9yEqXnaZxT%2BOGx7vA6IhfCUoM%2BiKKnYcBhQVsqlvVxXUdqRHc3Gkwnx%2BgAIjBvR7JZBt7IczluC3O2uO76gwD9zbxGmBpsyaIl%2F3pAgitxDLZUIHGd10rjcRWJfECG7a9cG1qQzcXmnkLfZKn%2BYyyFyOXtORI8WTTdW8SEIdsiiLc2TWmvCMQ6hiyVegyvKqo0PpMRM05BtzLHBiZc%2FXMTBW6JGxv4hFmZepzUmnrczznxblsaM7IJo%2BfT7T5Hca%2F7l8%2FUwbMxpET4RniO0jbfVQDe9MT51hL54tvAmVOHGFhghr2%2Fblu%2BjSQR9yiORyKhVPlurPpTWKGmL7FZ23svnO5JAQGBuxvHCMZqxLoYjaNsWjNeD0aZeT99UMYdvAlJr2b5x9p9mv02ECmPIX6t44TW3CM4aUiHVK7nl9dxQTXzHnQOtQQ4xdq1kSsfZc5u7F8pkdYSXHPaK2ou9ksHQp2nW5TPYQzzBbgzLn%2BT3laea5c0V%2BC795VJVtfjB%2BJYAHmGpdd%2BtlCswHGcroc2%2ByjK%2Fs%2F5NA4hzxL3jFraBpLWvA7NzGzgt3%2BwX5cv%2F4QxBay1RXuWqAQFOe404Cc9%2FNMNvu1csGOqUBQCatFEgTQQGd857Rg7FaAbjc2cEEqadKwgvXdNDS7P8Og5jzX8SRzTw2jHvz0YSkCMJCBL1wh5PM9waOLgCFFhM3jClCkc%2FZwU5LNp4nZrLxF79jkcJ6TUDlHRwBZNHK9Dh38dcaJdk6q7PO%2F2j55NtQBDr5hMYPCK%2FPnTfaI0uer06p2sn7YOvrsKrK6Fs%2Bl0lYjKK7ede0mTsX%2FFVst7SHljPR&X-Amz-Signature=5ebc1852e443a5f68b4f053e8fcd9822c72b52717565275e45f110bb1b9f269b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

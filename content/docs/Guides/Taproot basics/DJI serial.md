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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656FHAZUG%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIF5eOAaroiLgGQxkPBhtcU71%2BUUPCHz4hd6UpyyYQ4A9AiADE2rn2mIUxzzYfTZmMBVmwT9Pnv7RdgkETDURmuRK7ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM0XC%2BQCP0MqVW9qTgKtwDrkiuNNZXHr2Ii2aScbVcONbtCbOqVpOCj4YLFcM4hskWFZVxNvOsfsxBA0OiFA6qS21RHDLTPuSgg5oaTwMrCqtxEAuU%2B0PFODDwqeww6dBhNkTYmimQGJg%2BkVthiRKE8A5fgOcgubtBhOpFuHlagKhZT3eCcI5ZtaJfCH7%2FVuO4P7zNra70aY%2FFrP9Ko9lam5JrEUPKf75Uay0H7oWSrBV9%2BYFxZJt3UUHKWgvrWqUfJeug2b98OAHP0sBX32WEiFDQSXqT61n7O122VszwnXt1moV%2BzE3iFhsO32cBOS9YrARpLWk5VbxyIHELIIq33200VopvqxMXgJRcoQrRprCfCZfvIsx2%2BeLIFuuyjX6NAqMtVMrCj0CEgyGy9YnyJ9kOMJkTyRmljAVmwvmKCGfs%2By40ClPiU%2F7aJaqZWNiOdD%2FJyQSc6JU%2BVIl9HdTNCoIDXgS%2FKTRVpqYq%2Bn8uFr2EH7ERK9%2BQf4570Xoeo9Q%2BIQLmaNeuZ9%2Bi4IWGvxBTDIlf1HC2j0gOWecbtTwKyuq2AfEE%2BegO1D4Dei1%2FBXbo7wd8KZW9uzNgdP7dfowot0MTlGa9bsgSDEGlhtLY4tcASpPlzAi%2FADT3MtAOHCBTJVUoPXJim95P%2BU4w%2FMjVzwY6pgFcpXe%2FhsCQu9Mx6RVMSxwRP3ML4dRCBa1DmOTH22RumcFR2c7w%2Bp4%2BHxcHtxqTjaWEEiUFFO9LEZ3LonLixitBZb2aImz7TgY%2B5nXnZqfwk396YPBgDLvRF8fkJJZ7Gch7vJvY9DaUI9jyhcKsvObAs%2FRA9OsWw4i55g5cG4stVrq%2FKrxLnrvvFzvkxDJXJ275ZGFQksHiVOa7TelPsgLobZsHRAOj&X-Amz-Signature=cd3b769b97bb5842733f3148b2ef03c63aef601fc15542fa01a4e1223a9199d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QD2S545%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEu3uSsnuHBqkwYFUOp2ybHBXjcCTo2cYFjjulaTSSMxAiA9dasqkRhq6D7PO3zd2sK0SKhGLA7GKeEJ8wgGpMl6JCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM5znhlNshlJeSFpsCKtwDKEggp3AlVKjn1OJvi4l6HdFBAETMNLdjKmyk9NYbmdb3UYvI%2FswLHo%2BksCuCJtVwRf7YtOlqOCcYrETM%2F3OMFkhThZ6rJLohZlI3cJXqaSuft%2BWA2Yv0%2F9aq2jHORX3QoVtG5OrQFwnTKkTGrY%2Fi4bldeiZDDhyqgeVu1YOf6V00rO4b3Cssvj5CsTT0saGS0dk2qew6s%2BJBMiuRfZHjqH77OEWjMEoJmctMPT2F3NkQ6MapK35l5N40RkouEoX8mhpi%2BBUzaTtP1tsBvQK%2Fw0k4Hv358oAyCoIhqe95jTgZPmlrYba1SFLsQvX2ndcH%2FFbKv0KQedBUoAJ0dYtxyZZyTJA2j%2F53wQPXXae4EcGrJVb8GuKyk29mjkv9Fi8tyTaatlsu6CQtInIEXCJkpn51PvMaZg36VIMFxIg2OEMC6S1kWaXFERR1XzFexAVe6kr5CF5jkYrGoK6J%2F0%2BUKWrq3zJER8b6qe3wVtf7%2BvnmVTpHL2MGAr8feL2pEzQsVXGKRTym%2FBe8V3tP7z5yLHlXB2C4OssT6cqmbEaRWXOjs29GAwv2xrHrML%2FupdJ4aywWVKWCZOC%2BAESZqSMmicKJXD3gHbB0KPdDjg9gPELFY7UfkYIbVeGvIY4wscnVzwY6pgHH9k9ap9VxIubcGEV26iVQSKOhDMlzcxF69gEjPR%2BDUGhkSuHwHACiyjdhgIepnvQ0jqYIVfwogxksp6Z%2FPoj1GX%2BQqRDdmq6NN7N3B%2F%2FRlco6o76lcTSj4tgF9Ekw6rRgPriCFSj5y6PXykexjJy6p3f4d5yfAk8jPxla8QZZ9Y8peiT98iAOFCntFkKFIPvR5Bza89zfnT2jVngh3LtWqXTr2FSO&X-Amz-Signature=c2ea1a9a9d11039b9f2b3eb86a5898f8a7cd712bbdcb7550a1b6519115083ccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWV5GE46%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDt2373CiszDDZ0jsWuhV0aAQXSrNGR5ZQkXRajxAs3LQIgJ37yOThstvYx5iZ6wYJo017oBIrtNpTcBnWJ%2BTns57Aq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDP6KUp42lkt9VQwLlSrcA2AxDZ5A%2BmuE5ygiUUYgS%2F2jlKgGo4PguLxNEGS6J8YfNvH16Oz0CjLOf2wizFftW2uxeFOc7ISVSKAMJUbEgqAOzdeZ35kG0t5X%2F3ezrZ9hP65DJzwfPL37uL27x6aRcdknUFpBOrGmSWRiNDKpeBPH6J03lOk7zy%2FrDl%2BuYnrz5loDY2tH62eXOppPt%2FoQrprtKzwQTwMdaZCUcyK1A5fa5uYMYph9eKYHXdvzEYtTR0jee1mvMiPeiDUUxk1XIqWlgEgN7ylG2riuBsXl7k3D5GBpuYoU0XKzL9kqtMRZ9hEhYCgMoE0F41pvo3gHQOdikDYSSYs6bpTTMDwDUdSepAR4b1TrB8zmdm5NDyuBp9Mk4Cne2dV92mVxEIkhau%2FQEqVo3jEuMm3MK29VZeOtpINe0Cx%2BCR%2FlyiwijoUopyccVr%2Blu85unZRgsWuYXKL865EgXafkK8UYbH3cma6CnPTQVWYkZ5lxjdbrHXZZBO48nOkRHIh0gd9M%2B%2BOB35%2Bvr7F9%2BEybstmMBvmSnmQSnwMlRsCVZI2P%2FDdi8DOwdoVEIdnU1sT4JPCoVpjH%2BwGvF%2BsphnDKuPt1X4w4MQSvmmXnKpks3zFB%2FBMomOtg3UoUUbEZxuWKoskKMOSn1c8GOqUBmlt0eUdnze2bQGdR1U02CygyEA8H8Uy9Bq7ImN7lC5xRaMy4iU5X6aAkMl0Cr1QXzCb%2FnIoA%2BT0DOUOiQcHl1ybLcB3g271rV1HgeWk1vrF3DGjdB6CW%2BBwQEJiNKvAnhsitifpUg9SlJ%2FdfRM3juVBB%2B1V4fM5WLPNEPYO1CETZ%2BUuhgohTxag7Kg9L1v0dnjM0FE6UjPZGeQpGKuhrRk6ct6Dv&X-Amz-Signature=4c19b3e8f84bb4f82e5c92b46beca5b3eab5a30f318e0becb59fc070c8234ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P3T37GQ%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIC6tM24%2BDB6wxHHbKq%2BIc3RIqWMckPkXBvQTW4nroe13AiAq7r6zJkOi7Q%2FzNToFuDw1u7vWkqrbhZFlJ9tY%2FvUcVir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMS1biyZCjS%2BpKt4%2BBKtwDDJqDaCKOvSbTepIZ60udYz1GuVcBAvQ1xQPSEmtWTq0bfYwezdnJW6Bhs%2FO%2B01FHA5aGRVSO78n1aeh%2BrTQ5N0hwBHOzE0dEDLdLEnjQ%2BeBwifCiYQxcIVDr5BadKO%2F7NsNmU9FXl8ewmJ04wd7rcwL2MSceEdnoAbHqJoidAufVf15%2FXHkvW5KxY2XO%2FWm6m1XWeuo9tHtGDSAzYJNAYzLL1%2Bb4j5F2EAgd05bWpGrwNQBZKbyB%2F7PZNnRT%2BXMSd9pKBWNmRYcMruoZfhhwnhzuNVSiETkKOnW7QYsBVWVfp1%2FTJYcnM6t1xGVEHYxZ5WVqGVKTSDfUBNF15AwejfZSm%2B4%2FdJU9OmtjhSLsruJp%2B%2Bg8wLofLSRYTHNME3Iyh%2FdOMHB%2BK1SO8Q0JfQvnefK8bWko9CkWVPOsH2Vcd%2BGsMhG6gMGsLKzjYgfU5AekjzXuOGAF0M8w6W1%2BB4gUYiwp7qRBDWlB3EeWOwetdiq5f6LsFfyjvIZvAvwdaFjM1pJO6JWIaU1PLT%2F3tVl8oJPcVjKTdUW7aLIpNCpJzLoquE93Tef7YClyiJ9MU8moXz7KROxLAZKMwE%2BYZ8wvVjb7W13cj4Dok3uo4mC%2BxCJBvInEqs6e5YhNyl0w%2B8jVzwY6pgFZeIjyj5uwLJI%2Bk%2Fl3cauwSc1vV%2F93F65aAFWWXK5e0Vs3%2By6l6JBT9DVjbxzlyeN%2Ftejd6a5jbmpmDWVsbGGg76zagEJxRTIQnvtNOsqMpXJeV2wT6ZOtL4vYxT8jBARYDhJOiYAtLp4tsQ9yfn8jtH1KYENq0d3RVRIuJIlW3ZSbKebJYBxTAn3PZ2Tag7Kf1ZkEUcKJvuZJfnVGcdDpooXddIeu&X-Amz-Signature=f6a9f1cae0f48c3a13f0f925d79f0f7a43119f82707d14825ddc9d7b587e2c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S62B6CU%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQC21cPhdJPtTyJpysfRnfyPAjlj%2Bfcn0TQoqWz2Y%2FVzLQIhALMWoGaeyCz4eWwSn%2BTd5zWmlZPf%2Bhkdki2BuVp6fk6oKv8DCBoQABoMNjM3NDIzMTgzODA1IgwdUIyXAWzyZ55Gb44q3ANsnMKbTM8aghgBgGEBgKrmQSnjaZtFqYNxKz5Mkaqwq6Kxxxclf0Dz1MgabVjjYUnq5jQoQMeZzApmbMaJ5uIDBj%2FL6jBj%2FVe5Myzh3gODgapmcG0WRbk00KkoAx6XnERnLK9ckjqzv%2Foxl%2Fb7IClC0QTr977hiNG7EPYnMzQMDp9fjOEwzqS6INB4ODzV%2B%2BLC3lEi7Ib5lgcdB8rhyoP7yerfK7WwXZinxpx3PqYG%2FXWANw4pquFcHV7Ppr%2FE%2BVp4EpOxhg00qj3J%2BnbRIR93Rcr6p5Hnt4vlXoD9qhhaFhuwaGFpHE4eJrJGkrjm8eIhEfcZ9vIJrPG3axaLstvwMiaqjkZPpTON8gE95FK95rZWsKZrBAvPDT%2FWYjp8ptbBGj92RVb5KAVlx4PIKqD8p14%2B3P80Gek38xgrBMkkUrm6a8xGKblJPQyAlSvxnpc7K4rUjQtwaFXQqxAMn3qcL6GtjB%2BjpUvARMfN5u0Ej9SjvYwNFeeIMqEDxt81fJzat1roxGRaHRY%2Bc5nR1IIrnygfZ2q%2BBbU9%2FRxl9JMh65ZOx0HYNfPWoT85Qbv5tZ%2Bsbp4G%2FzCbmSOdo3uPc0Nzy%2FhzMZIhkyr7NLEJVfM9QuCxAUhDhUsGsvYD%2BjCDl8rTBjqkAX6DTdXgy6TRHXVHW2Qn56eQGU8eOnr1CVUr6pgJO3mqx68Urj36l7mXvWow6S9NY%2BxxxzvrApcyOA%2FUX9h4tBINN77B7PcxywCdTTDyPH4Evnqh%2BX5un%2BySN0vkAyOKITnmsiszKZSU3k%2FqhesIGm7Q4MT0gXbusX16%2BiBBrSM1o56YDYQ1NvRs8RJLemXscd6N1wIlz0BcCWOjB2c53hY6yLgl&X-Amz-Signature=c66bb870fa1aa36dec1d6d69cb1bc87f8df4994890b6a19b5482be2971da3695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYILBKLJ%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC2B%2BitjkxLBqHAXaIa%2FNU9x950oMEXlhsSqvf3DYBEiQIgCl8ioCYR02Td4i3gvNNFPEz8klpzkKK9gNRjnf0ofu4q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDMZO8vOAF3M7kLPZ9yrcA5TRixJfNWIMXE9aRTghGS4f0085OZ8T8tijkaN5p39mHw0YaDF9YsjsET7q3MGLdqERkqd10Jl9D19kw%2Fv%2F2zmxoBNmUvr%2FzISywvhpFpWAzzs4Qyw7yln6f9U%2FwhHqCJTtVaLRzhhHigTaclK3xDar2waiaEV%2FLPJ3B1YtZk3vYZVci5wlD245xRXGKdNMkn%2FMe6PNwcOZ9ZIu%2B18b4kqSjBqLNHG8ErUXkBLD%2Fgrjc76Bh8IluXAyDxaYLC0v0exIp4bALb3TCSYSMwnHpkcHnSd1ImzCAdlsnKRPmS12x8bUEw6tf5zkuCqe1FWW041AJSAACOGNmx7uzGTeayVl8lDJ0RAtDt2Z16PduKWJTo9PoL0KPWmI%2BI4uQtK%2FklOYg2n8tU%2BVO3gn2jz2NOp7QdhfvB9YzEK18iw%2B47aDaTPK%2FcLCoFTzpU9XvkThqfx6%2Ffqzq2%2FneHpXh0ge%2BNE4JOKl8MqTVUF25501G9koI89Mpl%2FUotLm4eWhoOy0RLdzz6bs9An2hlAZlGsSp6PJfJPyqdacw22w6D4G3BbK%2FssQRskFriWbT9KPI1oDIVLdYjrcBPSjUurEX201JdRW%2FPr6wctlrXuzgr3U1JUjwWVweUS35JWZMCF9MNSWytMGOqUBO%2BgllyVstvtGr0vdP2Ch5cc4UPPosyfvGTOP8vjZDpE2hl1iY4OZR6QQjaWCGHAQyTiYBXxjku8v5iojXyhfFpM9HAELFddvP3%2Bzc5I3ntQzyLdX4x22VcyBAMxMeO3PlKp9WfgeVVdusSFo3RVlgYyjcWcrOzK%2FpphdZNBvDWSFZW33Vd32OCyUKszAs0Jn%2F3IrFEHJe2DYke5vS7A1yZUeT0%2FW&X-Amz-Signature=9c3f9ff4019be9a8d045faa4fc085fb8ef28f0723fef43b1ad47313ba823cb97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UZYLGVM%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDXuD5A9WHjZL4j58dZDKmrvNaWAu%2FxWF%2BhAj4u8fkVIwIhANLpxXT2boRqVqFKvNK3sV2tQHzHOplvaGUNXhd07UWWKv8DCBoQABoMNjM3NDIzMTgzODA1IgwTCms%2FxBAhBA7zOS8q3ANWycd9Sn9hNSIWVAmAjsdz7HCrIASabAsWU2VFdTDpgEuNH9KeGHWIjWlU04HLCQRscb3jctboPXDDQUQKYzKkgZJ5ItkzepBsQMr%2FWBfBcagUsInj03YO1WEps%2FRkWwXi58iKL4bMjoYWrj8exwznudw4JqZlKZyvAfJUEfyaGqR%2FoX3Hei43q2EMFr68cBNWqhFMMLUCr3JK7eTXc4JqphiU8nLMPF4k7Q2m7%2FoDH88Q3MBDiJ%2Bhy4DsquAktz6dHYusTWuXxo9zq92LYox5jPtq9CaoTvW6dVTJe1RzETvY%2FdX5hOeuffSK4cMqKIlyY0KigMUxn3GpKm7mm670%2Fk4Qx00naBx3Gcc8g%2BHrPoaMC%2FYMPMxwcXCx8%2FZzn%2F%2BGVlnZB3zeqavTQ%2BznCFjVRozOwvbifBwnJtRD3qD3JGG77m8Qgi%2F52tznVgSSyNk5GIuQ3pylL15C1XsbCMuzqgSPQrhdKbVhcdfCRdZtT8AYkJEBRKPqD88VSCiiGlF1Uu%2FeO1JygClwtNUZ%2FZePAS7zlSzZ8OyIUqdTdOxVMkscMe9myYWtiKtxCAQItJ37%2B1h%2BpgZZXf4kV59eVNOmWlIAOyowYy9Im%2B8Tpc7guMM%2FKJgXTQaMPKz6KjCSlMrTBjqkAUVIeLBZvfKa53pVnIIpYTa58hL88jV%2F09W5WVgToKdpJs%2F78%2FFgmXAb9KxBV3TjqHJU2F5%2BxRe5jin3wSrhTPz%2BbAuDCy7vyopQ%2BQzWI0QV3wOM36XJXunDXeIiM0KSgBdX35ppGTmzLZpQJ4eKcM1CpTFbCBdodgqtqeupWIqU1u7Knao0g80BW87qqGYmM0q2uROsmyNGuBdGm7RXMocqIRrJ&X-Amz-Signature=3517c4b04dab4bd01c80725e7a60e7b42871e87150414727d565e9f940bccba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WUVUAHN%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQD2x9WFebUBa5LJ3lGnCwULuESrFcfCQN8PkUKtonoAHAIgN1NgEMYY%2BL1hD5UecHtTdJD0Ah9%2B%2FYWz2m3puPpgjXgq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDM04sugrB4xNoweVlyrcA4E8d9ouWy18gnJ7aK%2BolGq8x8WrZmLKu9QGRXB0rFsojpUpcIWxw0GkvI37nbtMQ0d1IVkid%2FIRDuUTjwZVvCNy6AaTXaSYvzPN6L%2FFaPMlPn%2FbCySg0WuujSOFYzb5ihXCIRGOB1vRk0%2BbAaS%2FrPeILdbtcaC9lYq1VCYqNHWG4ZSPDdvgEiEDxRNjD%2FXS2E2%2BdO%2FTD3oR94UMDxXpd4HxQcRM7WmHERMJXr2IIFT%2FYqkanP4SxPT%2Fsm0q%2BmnhVXDMKWYClz24ltBSjLScJOc9vWemlNMSNnIKFWr15LW%2FwPwl35jMXObq%2BRYyIyu559DWp%2BXgsr6yx5xKJsQy7r49%2BV3F51psUkqU8sCRqdQV5EcwqoS344WxOxSPrMo7y30yRrE%2FEZt2fnHb72SJzsA8ybg2p0hul3OE891brWWImTnRQ%2B7%2BOnQuylHN3vIQ79%2BGtgKQESwwvNS1F8ptsg%2FLCgLxXivy%2Bo2C0JGeSDOobA70GbC2E5JbRUuI%2B6XpTwxFCuEvGC78bM84FFie1dO3GC0jjazleNZhrMNZEuMVqwsAQvVMznLrBJxVFt4spBp3L5QJkezTKO%2B4O43E%2F%2B6FIb%2BFPONNHjHXLnMuglJUg5jci6J0agZ0zZOeMKuWytMGOqUBXLyUqG7f0ovjV3f9l3UkLcCYOAvx6Zc4NEnCe%2FWah2SP1HyQ38T3%2Bxf6zYwNCYLHN65dFu%2BfrTi%2F%2FqRm%2BFKLh%2FLsXuUMqIiE1EBT4QYTXtrMP2rXlKe32QLkX3prybYvi4tjFNFRIUXgttDfffjCk%2BzlbqLsW%2FOAIS2wXRwFaFZtn4KoPSL7teX0IobQjLQbdrpoTxHBzKaWo2PcOpcMDlaSR7Y6&X-Amz-Signature=a8c450781582cf526373d3329e6430dea81b71e1978710bd0c92cc2b31f6910e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

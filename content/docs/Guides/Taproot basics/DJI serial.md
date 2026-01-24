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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUEAVUWZ%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDGzDFTxQQg%2BcpsbaMGJs4MNYCe7PXRbHzzaMhDjoS2tQIgfeRZUgkQfn6SkvdltURaJuUofGyV6Cd4qRyBhrfRH%2FUq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDOsmZsrgAeUKwXCo0yrcA7XRqHVGsxuKgQxOgn%2Ftvr9Ngnk2MGEHojMePTDBCuSXRA0PTaanLPgGarDs2EAlx%2FsUckh4pORMi6afuC6nxm29gI76YqwrjxDwb0Esb6nvfbyRFTtnEsZXp%2F%2BJ1AEF%2BkH3VzoFgBo%2FQGZ22zjIHRjtV8byLHSpWsB5MYWDj1ZlqagJJ8YIVWWQRTIilK5xSWTUBoyEaO7UKpH6cfY%2FzLRxQpleIlJJUddSBnwPVgHpGmLtpZAG0Yllulv9cZxo1Ccz3N84ZsqdpeZ%2B7cKmyNjwJ84oIODP7j8B1yqsSf9ZvWyrmyOlRViqd3ccEwLxPl1Mfx5cNhkim2hASqDcV72OdHGyeMAVvcPadHV0xZYiN4Z6yM2pShcBP3MHCTrZphmDUQHEDrr6kt%2FltNJ6YYdlXDNROL0d%2FbGOnbS0NTbrG3TraPbl%2BJB09Hh%2FZWgITDoBJLL2yiLL%2BbBq%2BDpcFPpd91UE3luqBQRU%2F7VIqejldmu65qVkh0VhDya3HexxhvlVBReCES9W917THgkVLAX5qZNn2SrKi6fT2jUEjPj%2FSN4TJ1HlzSBEZbQreXKG0sfEucpqcHVVBLWOgLt1Egbz4EFwEWg5WjrjY2dz6idstTp57ObY1xjR3%2FFPMN6r0MsGOqUB24D6E46TNKDuPTpI9epx9xjr5BzLA7ntFtyaY8hvg1xVbThdf14rh2%2FQKqBvZvuaPtMzhmg0N1LFytx8B47%2BWwO407ljLhn%2FMLfX1MkTcVYTKuw%2FKPEcikRLAZqFrByJl84HTW5EDHUkSq67yhQjiWXGF%2BnkyNgz5xv4F9X5zgJV3dREEddbJkwK21BHBdlcEcZ3Z2qhvjcrWY5%2F9rRZR5kTyO26&X-Amz-Signature=c3d4385ebc5203e3adb6f6ad002b089cfaad087d96870d2d657abcce27451605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EQV3MQ6%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCJKC3Azm4vIJcBHj%2B3YkJgapXsFJtWUp9%2FjplAPE0n1wIgHA7VGLTfRaDU4HAJfqQaxpa34MI9UJmVdqEhy7liR7Aq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDLEn%2B1Z2L7k%2Fa3xlGircA1mrDTerQJBo5DXH8cwM%2FWMXE3NASHH2T6tf1MKxpr2HQ9G8zpP%2B1fkGaAd3Xsoclk00rPp63C1FwQwF4yE%2FZPn%2B8x8tKRm00r1UnT1m1ahhxgEt%2F28E%2FhZ%2BXSSADSWanW7C%2Fm8v6f1mF9H4JMiBw9nUH8r%2BO0JMRlnYNi4T%2Fo%2FDKj%2FAUK36C8Qw0TcNWslMSwOWadXFkNPIwp8wDOt6mu0ivUqLJitOcjM8%2F469256ZaaJYPAPKX8jryXRawfA9CGCbzh6D9VNvp2B4XC9gzbzsZaETNQGyh%2BpJjgOMg0k09BMQ2ThHkB683yoMFTQFFcF1sNlkfkTgYubEwnSsjCMFIsy4mcu6BNThki9sgtihQlTDy6TMGgHm2oEOtt%2BUOq7FRjfTMNb9UYc9tFwkay0dpA4BxdG9mr8pA2%2BXl%2BGarshtCwIlW%2Fqf82aqvNHyKrC1n6%2B%2BnrCmioMvRhdYBaaf%2FZrXVYWX2ZixvVzkfRHaHk1RsFkVjBiF6qTuGauwrwgTDrNYxZlG4X4tpvbKmnffNvHJlbPvU9mGowxWN50UbUODHGxULpJIPkyC4OnBILWx1YMMv1GbdhsaYpMd3UjXojrnubSmTcExS%2BhGKh4HEIN3DgxoiB1Y54HIMOOs0MsGOqUBOMoAQHYdB%2Bo4cbG%2Buk3sIagWZhOK665sFUQ9bvR3300G785zY%2FRv4WMr3nssGNL4q80CzVNdxbipnO2RVNUDXFdKYMOhOsW4X8LbePOyjAK89Fe71oRjFpJYKRL5kdClVg%2BkS8oOexv17IbjasXgSsXcX0aUoLkMh6FWu4B0lBb2Xv1zPMQJuxCuzcgP6Us1BEo%2BQvYzWFIEPcCbbV5wN5VOAhMl&X-Amz-Signature=71d940de1b3fcc5fe2c691d9dfed97eb26e8f3c7c2f766ae315b9bb240ad1a75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QELGNFH%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDKyrQimia47gRRn1Hoe0Y1ZUTJQLkbl7ad7%2FgwYkf%2F6wIhAPPUYu4Wovka6h9HkValyNiU%2F8r1pbTflEH5IiW3bMFpKv8DCAIQABoMNjM3NDIzMTgzODA1IgysITJhcsdgc1Ng1LEq3AOrz1tQ6DlgJF5OA93fpMvtfxlsZv%2BAcWfvohpbFbk9ec08zuhOhWsDnd96ZC1FVs4DUNlEeENKh26t7g6e4PFCVWRa%2F76pitv2NOBHHTieSv5PUabryqZ9J%2BC%2B3JzFs0lUT5PFGdRL2TQ46x5%2FxOfZ0pNPS7e2rweN6jmoh6TFpDI8buGxpmTcLwLdEHZH995mA%2F0O4M0bYEOUtaD5rAFlHGXXLxhibKIm5R0epVlGgIIZRFAW7%2Frq6HR3NV9TdHsbs5%2FwTtu3uR7XlpO7qg9CwHt4msJGB8IRHF6FAkY0FiYhzCAbVIiNesIrCLO091%2BmHW%2BIjAZ7vFQ4%2BVtQyVkLWkRux3XkGvhA8a1fuc9Usp2mhkAYSBHBZWhzD6kIywjbnLFJrSrg5efKF%2FBtArunuEN6DIZDLQBmOV7PS8CM7WEMVVC%2FNyqRav22GHxGBJPhMebsyS8GdSQdqgvEv%2BHYyij6mBExwEwYjTjRgbJvCgU0%2BkwopWKyeVprj7fl4VKX8xwocmEFBuQQ5xoR8Gp91blitERw5Pb4e5GPtA6kWZh5BvrUge8MEZfl6%2FHiW8crIyqAfRKtf%2BERTnw7mj2BjyzJ%2ByyjClIqlBoFCtcYKUiagm6nnxfKxY1mvTCSrdDLBjqkAe5p8iSHfH8oR7h67fJkukBR3E8v8XwW%2FvOFqUn73hUmg8B2QB7lEVhVd10bd2jh3wOTijyz7rxp%2BjW84LBkb3a8SYoZNBgU%2BSOSWzjBDPZkO9se97PMZTxVdPoIxvLUXn3vM4KYcG2MqiSxDhjBx7cakXiFT8FMUa2Isd%2FGVNNjaRl8JNdveRXhq%2FS0wi1WJHnuvPgWnt4cwVlwWCl10eY7A028&X-Amz-Signature=3c4148be327b201d8726dacae5373fc683952dc0b9b63a835c15d174792c9788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4XTS2OM%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHyomy466wyTlK2v37z78vChSHf2ZWonyouQeU9AAvFwAiBrXUQZUNiFsLAmnbvlvowIEJ%2Buij6OiapObtn9vibT0Sr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM7WZt7kpMFfAR4Ux9KtwDBOB4g%2B8arWNpm7speQ82%2B3fyQnTJoVkx90v4k1FqQze6yRRJSVyjAtmPF1hU8BrnC6jWelEgmTj9tn6ghzo%2B1QCESDetDApNbSvQdrlU0P54PKklEJnU%2BpY%2BKepVwYU3yyMtDZKxwH8bhgNfI5OTnb7Dau%2FA2S3oJUuk0tbSQNbmIoa6isIWtFzau3SEzptYlN1Eod7T71gU%2FPyTgjtK71Pwlojmsn3RjU%2BbHOu1S0KezQkOYsAXOE3V%2FEOAK781X3tdjfLINXJ17rHOGNf%2Bwmtcj5jWLX559XjeNxhVOpnsQshszS7X5CNI7X%2FpYsyrU3bhFvk%2BjJ0o23MbN0fqfBd7qHdT3g7%2Bianx97ewDTbxoktV2wi4843zbcI66eoSbITJSbOap0aP8T5ON%2BvVUaUSQy451zyRnYGlnuAqHgb79uf4OjgB7lBK9oariLZtaDvwWz6wd15IGGC%2FGo5f9Bdh8t0TPrj%2Bc%2B9lPklXQxjCEu4gSJ6DyoYGnMrRviyyQydVz8imjWvRd7Y8JIZL5Iln0jAppMjQOKst7CUvmwSYIS0Sm1GBw6YjQUQGvquaKpvMLw%2B0KXQvHOxTpQ6fzaAKvU%2BaDhS5vB7kAlc%2Bqfg0%2BvghFh2b2A7b%2F3AwoazQywY6pgFy%2BvBpZpE2fvVeVqJqXg7uQokir3KPZUXNaTqA1PuFvRbShNnkD6EZNtFsiYOP3%2FWOO4mQOPYYZznOrDo2JcMqSO%2BQ%2BNSL2NHFRn2KclzgtB7JlK8HI90H5aWq7Ci8Bu6e29%2FBC0A4BtaHqceyqdb4marGcN89K1ne%2B3ahUsJtgV%2FbNcShCYx0VNgVlfcwliHmlFnORBgKWNC0qbzcQoXvuCkc%2BZQg&X-Amz-Signature=2ddf1c08b00577e70f923a0e73b62f8b069b53b64a6279028a80e8eed3884ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656LL6U4A%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC68oWSn7rfsXPFcqkstDCJbNUtXG2sTuGhcxqLPFowhAIgclX1IAxsK0JqGVFAloC0%2F%2BBog3lwUzTXRbvf32%2FbBsIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDB1xwWn4j16LiU4aaircA1Eg%2B0nhCuGy9tDCpYQZkED2FHbTAULDmkirb6gdvtnXHlIg7YavjGqrIe2O0GWLYl4wAHBVhBF%2F7yoPkzDMnTsXeScFuwKaydN9h%2FbqB3bTkTLPys%2F6ePzQNlkcOGmjtUrj2banZkaF7LPfYMgnrCWtSZva428gTL7rRtvvfGBNVhods8IgGP0F9XakU2dpdlqVPP5SqwPXWOFTAHwgoZDmaTFge4XCB2R0hxFuxDeT9dYpyzGpxrEDKZBytBorAKoD0Z2zYzJFbTzuwsYVkHAznkDMEVld%2FX7%2Ffb8FTPeTB%2Frnz9KzQgmq%2FLPnNpTb6X6WBQzIsQt8eJRGo%2BHAzIY91J7hsRWHdHVmFo5AbE3mERiZg7rtJAYH2UDGbUI%2BW%2Fsc6Z554OG4L2m02AvDZ0Efo7tUekBGpYH61Nq%2ByBGvYiD6F0Vkv30WgObQV0xUCYXUbWioD4jZWZAPqQ9Cd1k2h%2BUwBhfpmI8YjJORQhYP9cOTbvZFJz8egoV%2BVWr6nidVilZI07HnWv18KWzjSHg9nZi67hxd4zn0X1uC9OPxNTr3G1lpyNA%2FXpmLohyS6B3cAWp9lmAHwwupG%2ByX9ZDGWssqFRZc9cZShhgbSzBnN6x8Kv7POiH5Ns69MMGgitAGOqUBO%2FyotETdbMo%2FKwyPh7WR1qYP4eCd27oa9YbTeW9VE%2Fzg61rh8V1wvw4RX1PD8GFOe0WYIdhMaN%2F7MB8QrLpfHYxgAhS7pZa9gNPOrvdIorRUqYWNkzX%2FE1RWcaIoVAIvEEaAKNCdDrUHQsDXhZQClo5U1eEi7jCFvMJxTzljaRF%2BrA8zoSGDeQrPJ0PWVyLcZz9aiv0ytLtrrp5TrWuxUIXxfCE4&X-Amz-Signature=2c255e31f3036c48e5fb207b50ec16d309c28194448072b50cc7595b7f19766f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6ZBUEL5%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIFz5Vw7KRyYoMTK5kg6OFvSbA5trK4ZoCU6zJhePVQRyAiBcioAoCrmiAraCDEjZHElL6tGmecwMmONBd5P5FUQPPSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMIWbPxC9TiedKSrUxKtwDBizmCdLV%2FV0UztM7w9BXsfEN9CdLyPcT7z3R%2B9cMmner6qbRU4UhUnBnbdywmlyZ%2B7Cq7iqH9mdhFn9vS94Yu%2BQAg0%2Bj%2B4j7pXc8ZXGk95bDBhOPdcvQcgw%2FYsYStxWf830DX%2FG7%2FlWDVH3gAbNK96lNefmsvIdto%2BTEllKbVpLe9TO1cV4yf3SHqLWIiHfruRxOqOeQXwQCTE9gaZtOuJPE05HTFdyrkaOM%2FIS0UT98YGaiEW3HuNkJc0qfa%2BfmOt4ZNkToQn2%2FHhjrgPBiW5DwCeimJQre7uvQXBpp4ft5tqtnlDVQ%2BaYaI8WhZSIeoTHHwrPo4RFvUYo%2BqSG8VvRZ1D%2Fb9hMy47dEZdS3yQV%2Bc5bncW1UfYk5IKz8%2FM9VDJItkNjcFsZTEASWKP%2B9P7u5sT%2FU9kWCwMH0YYrfKCnbDpaajrulW7w8NaoX6WhTrjtv2uzM3kzgnJKS8kaHR3oopYb08NCpEib377DiPOKgr79lyqiXCp7aMFuytshPvwAOMVZaSunGGTRqw4Td0iLe329E7pkQGsbPixJgr0Jp9h7OQO2%2FAPpSbZ6eklX8%2FwrK%2BUUoqSflOvt2nW5ct%2B1v%2BeTWr08yoaUTUaDAxu4N421EfpmnM00fbEgwlaKK0AY6pgGYT1AvluAUWc7nN%2FGXQD6FI9Ncx3q%2Bfzpej8IeEmysGjcAu9jK0ujGyOcZmMs5PHhZNKGeqK5mfvjzziWzkTG3%2BNovryxtn9kX7L8mTmqB3XFb4hagCzVgPKyU1tmPWtpYaBlFmx3glf1re0CYT%2BsJlmi%2Fsej8TgttGBNT42zFCdxpY6IpkNQCmxcN5sNCqglWZkardosvqn%2FDytTOXXzX28N2xFhw&X-Amz-Signature=5342f4b0a26956a1aff6c38f05c534e138be03538fef080308fa28a8d767c829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665APOY3OO%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCGIEVJCdMS%2Betq032n0prGYtJdn5b5pUyjm74kGDiargIgNoNK1Oa5RRz%2BICQ2yLLsDLlSKT6XUBTX%2BQ0uCxCj%2Bncq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDaCrZDdl3gix7muwircAzXt2BbLodRhwEMA7qQd2nABWnXBgRbCX7jURHn7li3Ox7yMQOEMBVVvpJ3MJADYlzHedLUkpFpQ5LukvMkmfeFh%2Be6O%2B0tCwuTswa%2B90TOwjwpQ99L3CtlzydZwlGv7mTkxn6qRAnFC8f6CLpreZ4wVtKNHkcCmWydDeWlOK%2Fm8hxAYR25sBAb%2FsAD%2BWXlqCsbimIKOdP79enYVFYZZ4OpGhQmv8NJOAxtEeLgP1GG6lFposEEOJzBHhL8JqB%2Fk9j4Pjm59EzcMh80A0QhHZbZWcQzlvEDTTMKr8YoTk6rUWJoLfFXfdW1AezwB%2BvThi8wbn8v1%2BDpNQw6tdJpEwj%2B5Yv9Uk6aBasmALh8CUpbjOB%2F4rAp6mSmAJxE7IsJ18pDWQagB%2BdIRc19fI0irnGZqtYiXdmJIwjVZXsD9TTRh05yoKowYvb4d%2B2cXQ8S1FMP9inxxgkdcUr8WWHZ5B1FL32z7OfDyNik%2BBXXOGwperXkh7%2FzD7OcfJ6G5mffbF9yLagsvxR0WBNweDM1pOmgXzATd7LYdqdzh33xR%2FoNEkF1gP%2Bkw9LhTgEXZAnLa8fEHhckt%2BK5FdBdfovUZLByrS0ei0Hnte53EC5XW5T6C4PmMblJTTgUmcyf3MJ2litAGOqUB%2BK8OtFnCLNylTEDaZycm5yLd%2FnpV9b1oQTZ0Ek8UQShtDD8a%2Be7aSGmMzKWxxwZUGxJ8IE4ecfJkqFdYMqtVRRfSG%2B%2B812nvzqbQvnWnsz9XkNEb45faUAkFSAnA9l7GOM%2FOX%2BFV2gpqT7E2ZdFWhHJ9InbVRpnd9c9r4yuxSsEl8Vltofc722c6bfYZjK4WN%2B6Sx7JvaaPWGzxzGrz%2BPo%2B3Iwph&X-Amz-Signature=48232ff6fc9e87e9dc0f001a7a037e3a3ea936bab7345b446ecafb161aff220e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626HN35RL%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIBFIcuND8R%2F%2BvTuHjXAUEJAXMiD0WWr%2F8JVDMG8E6gB%2BAiEA4oGM2ORqzc04h%2BhZj3W4TZHP%2BOLAuNaCw9K28cwnSncq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMivwjFCg1xZ1f%2B2TSrcA5DDXSYmqHTSyMumSxbuhzpq11UqFhy8jK9Bm1E%2BJSfH55QEJmYA9D%2BcTb3M6%2FA13T3xvKB08QEx43Ew8fsqxL5z%2FqzEJM4MFxBgYaY3%2F6LdwcGdVy3Zov0J35SD3pgbMuRjI5735EdW7MxK%2BRpsZ0cg0P1UJyvJQHdigioVQgT8JXWh%2BiHp9q3npeQ5QYWNqP0ccweHDtQ2uINuUBhJ0%2FN5dNwqN%2B1CtIxTHWQ4CofEIFqhnHpJnqAoTkmyz%2F3ZtBK1priiuzWUQWCcNihb%2F9JHbqSue5Q8gGFookLPNIn%2FB4mgBj6IDzsXlx8Z70ZEtg1ghluzoLd1pA%2FEBZJttut9z5gQayfFEPYn4js%2FrGydwjfdGpRxuj57zbY2U%2FRdYoJweGa2otqrYcWheigkfg9%2FsnFYSdITlKIEpGeYoX0jjr2hBuq3rFuE%2F0RswjR9P7u4qDbA4N%2FcaR%2F5bRMAd1tuRG12sNXuIsabIHEKGOPYoV52ZTUOSmdts%2BIkfBKC4AXgkOGCLWBc5k%2FRN91z%2B0W6TgvXx7gcESwQ7YGOoVE%2B3GTyJrDuNuBf1EFB40KYvBm%2FU75Kq8uaPqCjouOiyQ1PGVzOPfdTAlGOcIWYixNBr60pmn2vVpt76E7BMPihitAGOqUBUl0OCOKdfl%2BfeZB0tVn5PQM6KAIo3IEr0Of5luQkBG0r3EGsp8FZ494KgdXngd9UTL75iMNxOcGQoC06bZZKGKjZMdXXPGN0QY7flFfuZmXYrgOoTvl9gHw%2Fe1JCHMudaxXkA%2FQwhC%2B38njdMh5yVsyIi%2BEZEkLld%2FGnD4TW68sD%2FskhuHtBxLVld4RjIgZkrLjW9%2B%2FKcUdV2I9NRazG7CC6TRhj&X-Amz-Signature=611ccda82a65edfd2ea6c3ca803cd59dc4332739a7593eabd065eaf003c16fde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

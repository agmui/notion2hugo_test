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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4BHQH34%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIClf%2BpRk%2Bykzi40QQ14W7Q61iiFoT%2F2a8IFay9zpXpU6AiEAh%2BA7jzOesKtnlHSczaPoLJ6swf%2FSeeLrpAttbKbxFToqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIANZWau9R6PU8GX%2FSrcAz5w%2FH9Hb%2B0UeMz6Aqpped108z%2FCkhLVjgdvnavme2QSrOP4aovxGaqX1kw%2F%2FTIsuciZauhcp1tyFu8vgFg6QmLk1oP6hfaAsvMA3oxfwRDohm1qAyiFRQdJByhnrWWvAKxUwWsoCpn%2B4e1rfy%2Bza8jIjIT1pfqHAgepenFMvqGpHoMUgkPJeTMxy4eF0Qiigb2DFa9plj0yWCCDqW0%2Buix2f8SQGOlvZa%2FZgWN%2BV%2FyDLdma%2BlUXVfka5BAvzsDZY7w5txX7lhwrg%2FTaKGEJ%2FulbthST7v9zoQzV1vaj4ni1jmmZFGguU4gMuX5AR%2FLuzNcdrm3lvCG8L2xCljKalrP9ib0%2FLr44ECcA91fcLPh3FF43PNUlsTd4reDBzrVPx9PeiMTrqjlAsIZMVU5pVdZs9euHv5jRGAh3qbwWK2yO5BjQebF5Ybe4ukjCOnRXIhX8ZI6SZkR84t%2BtVn4JHhpPyyrwdwi5pnuQAmGpzT2djyOB9q9U%2Bn0A25OrTED52KA2UNQNy57R78NoS1ZRqU5Kl9qpGTZak7NyOZXBQkvIbq%2F12q8RbDkH9TpDC46nKyZyl2VXSRYuhllISzbanFM61%2BpDd7m5%2FoJXFu5UjIzp%2Bl1WLRUgDSgA0j4YMM6n6dAGOqUBVhTUm%2B9lgO%2Bf2PVZsjJhTEgQVOwvhYVrnoqGWbKuNBhQCGr1JZSduiK5T7zlwQ7g2i4P1WwgbBco2%2BZ%2FvZ6F%2FhmhCt3QWMrJManeDQHhXVxqtQ9BD8BZf%2ByXDRrQGSx%2BiCuk1ifS13cyFW1rSEO4fXNk6K5Et4k68rQjBAKJGhj0l5AJC8kvqvBFifyWjT3csAEGJOZPr8GYIafgG9nN%2BXt1e5JT&X-Amz-Signature=1a2c1afbc9ae5f8bb94bca373c301955826f8300d18de38a2224b3a209fa5c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AUC7V5G%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCICgB2hMqYXNLokTA0n9vyUWXIUERIuZtcef%2B7yOF9SncAiARtvepcGl64LeEV0rxC%2BnSP2nSL5o6j5rCPrCZ4MJjFiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMee20cMdpkurcCumIKtwDp5Sr8ok%2BW0V0yFN8kzYYsVzQjWr9gsX22GIP0qCut%2BPcFNrf2yFGsCdYtEWs9CpOvLfWEjsxJc7aTiVNXE1lo6UAaKicipTaqo4HMn%2Bbr8rn4bHv7ruxgDPXbq1VG0XlDjLM5XP37rgxQvuBC3XkWS%2BFLJPpxEcN3Gg38wRFcRtgPLxo6aRnQI547ga8rbS8GrUFmajx5kH5xml7xSS3mh6oEtX25qmGwNxi6%2FwbnZbm6CAmSELar6dIk9zhzzBoqAoYaTVBCEZjAYqSI5AQKzmKrdmnhcd68L0pklwLwAFAH2Jqwcc1RFuk8Npu6SLbL3VzLG0b1DASEMLAt2oxzygpzJZF31ZVEv6VRdTFr0zDfCpffVymGpU49ZejshjKa3%2FBF%2F247SMc%2FXiJfsi4vXNMCao3%2Fg3lJ1xi%2FonyNgbX5JR7JesUfzJ50ActCbBLWvqDDlWcB4gzoYpw%2Bg8wqylHoBAwBFVzE58QTIW3gE5LRJuktPh%2FaOxB8wdxN45KdFhtVb1GQAcRLydFfs8MIwZ%2FstGIXweBogeHb1%2BXbiD8QkADVIgnndmWhxtt6zgWCS%2BD8fL7M%2BnnmOyETPNQbmLPlJ%2FxOCWy%2BfI1j0XyDCNOs2C%2FnwqcuzKhgr8wqqjp0AY6pgFutjwCKdOQLCgGV%2BkDF%2Bb36OyZZt06Cz2htYr5mli3EA4W2yULlrmxH1oIe7S%2BPOz0OyA1QYvdVdjm8nSwWp9zYTZTWLLsoR1KghDz%2BzkSdGBBhx2%2BrqH5pjZGtjV0aodZybCdlR9Ytod4cIsVzoyoLz%2FhTVvkSjbdMdoiX70eiSg11xLasAU8ZEfDA1DgaElINoiWDcWdXjgmW7GH5fqO31iQsTfK&X-Amz-Signature=1e9825a977be42b9089196162cf02aa9fa56075af49eb2d858b1beef49aa72e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3BSVPOW%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIAfMN0GF203MZqHmN1EHbITZkHTSlu5w71oTfUl38rBGAiEA9VNHuafVqDeRVWRyp%2BsOdTxhnAqVrdAOWZP%2Bz0MMDK4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlhuy95wxRBJOZQySrcA89CXC62KsQRAZ4GYb5BGlSycbVFWLZwbW54uiIMvyqDj0nbgzDgiFEepb5l8UhvEia79tiWBkPrgvQbKQXcfJJr8V4pdutMNwgUJ4Gd1QYwzLX21Mtq0D1wcW64SSgDPQ0oNUtRksyYcANbQPC9cCgVrNN1MNaowZZmrOuyKkZAp5IYbF%2BiKX8xv%2FCUZxdLhf%2FUapstnzbNpuxK8mnvD2rr0qrgENilZ0IsGDBcM3dxoMgl69QKZbipER1B%2BBUje0Zr1NGPVztd7y%2FlDs16SCXi9oXI2geayiCYtMI%2F%2BQ9c1hycQqC8WatEFSYt6qpq2e%2FjnubaDsHg7T4GH3yDm0X%2Fn0vGoS2rA8howoCoTzqzHumZjoh41Lag0eB2O2YeivUJgMwLtfCndiX5pD4acIzhOOSnjFJpdQt1MVEGtCu0zPOgct8Y0RhT3OCEpG9HDmqyMOzj5%2BnmXf88n5p0Lc4oRMTXEwMS%2FC1L8M4ag6Vb7etLAQ%2Flv519f18jq2zQBsQC%2FE3EEusOKrlLv9tfem5eIfIMXvoGKE7CVyLHNWtEAjjvg0CiAQwjQ5q5Z%2BL0eep%2F0JoeE76I2FnkfwhYHoHzXm0lv1N6cI4yHOHu1FRAQsGVjNKSD1DulZIbMJao6dAGOqUBkMZhN0bhdQYftzpXOqJFsvCP5sNyRrbV3f6ujmrihUGZ0eCRn%2FoVZqkZpvy3rg4FgTrHYa8%2BenKH4CmB%2Bl1czQV4B%2FRye2pEpSM3bcjRRmEQYtxBkoHsReUiTxuEN2vxrreGwxtPERHav%2FdM2yOcxnR4R5Hms3hWqXTLYET2eF%2FKQElSLZP%2BCGJXv37QkHEqDYZ6pJbwV8OztEs%2FEmR3OLlwhsYV&X-Amz-Signature=169955c8fe316bdd15d3984d9ccfd6f236ca5285cbacb57fa38cac51bed81e31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YAIPIYC%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCLJyMW6dSZZLu0e%2BYiJ%2FSsrcEGfO5F4zuIltxE7WbE8wIgOCJyjrHpau2usTYMJTLO90gL2A%2FxqcqI8WRIxU3LYREqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOL2w7IsPvEb0hscfCrcA%2F6qtjfIgY6nZ1veTDqhFO1S5QfyYdhB9rxMKPym5j9mHYBoSWPCkDE98uZ5iegy12pJf2TVQt9cNVWF8E%2B0mGIcckQ%2Bt7pkEUTWsuqLOUzb3Bn8fzxiyBTKHLmPRNBcZ7jiGWpYnV9LCpINdehSCfEqlKUAoOpLl%2B4pIZkEoP3eXYtZ0pHqa7so6kJQ%2F5mMTLZw31r0YhxfofM1bVJYu8LBc6AoC21P9lda1NSRq4hISKQ5a0YYSGcKwFSmJbhbRkmHhFzm1k3Cc%2FiDzABcy%2BOPHfMyGLwqueQ1qdyXClEnYziAlEDxOhWm0VCxjCmyLW8WUxJsPlHMmUWrzaEOVdPvDGRge331cyrDIunp%2BnyF9uzNRHQ30CvsNRAro6%2FDlQHpPDjlxcJCLKcgGEyc66zrQMpMxAS5BUq00GwIMfwpe2A4cnfBSVw0DFYZxFPjfrTFqL3%2BmC%2F5MCfMINMa2qZKDT3pAI%2BuTjzd8rtYCAWHrkl1%2BZU34Z7mH4p6GlBHKZA%2BbZLaG9cSmYAl4xxIae5MenbVjVS3Olz1U4OxnpPrgvkB2EXZLgyc98%2BM9ABAOanydwFVJPtONmUoEqERYMEdBApQi26AHrPJn1a1fVd6YTu7EYpPvPXUcpL5MNym6dAGOqUBY1DJGSAjQR7HfZaYb8WYcRSyIY83%2Fmc%2Bke7nLQa2rkt3IFeYhlVQN09k8NaMMGAF2uqKGJCmE%2B0bp25%2FT9JEGniALI9ClX7Ati3tYHwL7LQZ006oRkHsKv1tZs%2FCjJxZd%2B%2F6Is9yyRqY8P76RnLvf5You5ykX0HsNAGWp4jAypMtGz3XVEAMk66cP5%2FLfNm8Eus6LM4nLzq7hxb8cHy3K3thE85%2B&X-Amz-Signature=c980f5e254f3f0e06644b102add1f47d9304a739475dcacfe4274df738aab1d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

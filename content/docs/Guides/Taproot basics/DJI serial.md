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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRNQFFHA%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGVh%2BSnbws8BMVwppDlCNlG27rsKWTzzu9BnWLOI1hcVAiEAhAt8J2SPqM6Ne34Hrov4qWzG4Q76KJxf9la0SbeMqAYq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDI7%2FQs29iRzPrIVqvyrcA%2B6oHCwHFynVvZ2dBbzOug3y1mch5PNOEJv%2FzZpAyFwBtCgY0YS%2FBqZUa9MpLhII41wVnSMumf47TVRZA7y0BgSHzh33IH8jGwtRgQtKZWOG9E%2FwIxBZzpmbGTHfXckvH2Na33dsdk6czKEp%2F6KIrdIw11f6gepsRJewWbSCqeyu2eYH72BDl6eTKVRAcMxmMfKYw2hKJYBBiAtmVrZyr%2Bzlmv0FQM8VRQo3dRqlfgBufaOxdmsLuknu1PYvznCAunGW9b4htobb0hZh1D8p1NMbEFvbBZNxchA%2Bx82DGCcGI6hO618RaHqOCvekjvhvRemjLunZhjuKNQ4Tj%2BB%2FT3Fiiy3bcMgcOaZk5Pv7o9nZq66sfBpkSFOhEuCNdIVd9l72vQaRa8LQto6I4C%2FtTZmxYA1wlAL9iNr1zk2p7oT5v03PBufdNpUrVDmoDDj5hi2%2BZd5WOcKJ1uYxfgSGv6tkwIvNi6OELOX2v1ASt8kC0KxUZXjkR3MZ%2FMhoNNiuTVW2Dkt7uvWgDKgQ3AclC4n3jYZEEXDpRSgNs4mNLePwlEhNdhH8LNud9kmfQtaWF1DBtfI6lhmeL%2FydrE2Nj0e0fFUKVbEb8PqVyZ1kW98NWqlEqUtW68PoV%2FkbMK6EhdAGOqUBXaNR1fIkAkwVs8cpvVw6xOiQneCbPElWSxBq%2Fe%2Fgdkucv%2FEqyTXG1xIM1fJaBKFznFcDVDBimtfLgMF4RTAmQ5bCdDqa%2Bx%2BpCesRwLAtBEMsG7IMCudWVMjs9m03Q7iD4JDHeY8f6Ofeo3ow9OuaIbFhr0%2FUNni1Mq0MVzEo%2FWBuFnfSOpfmeIUwO0eIfx7Nn6xRowy8T55vY3Z5VU6RJ51g2tkM&X-Amz-Signature=03e80315246478ba051e6785aa6cc44e9388b0db7c044289344489f4ba6b6d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHMXQ34%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCHU4CNKU3nuSaTamu9Cx0%2FsjY0k8zqqdF3VaPWKPogPgIgCqPBMVsqQTxjtb0KMOYoPn5vGSjinuyheNfT94yHV8Uq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDMBQ3sdRT0g9a4R%2F9SrcAwyR34%2BL00Kjx19qTWQFYclSPjeoEZiChShIW0dVNSWi0D4kP9tPYlhbf7jUbOPBBKsxmmcLlm91jtZdXpjWbwrXc%2Byjjb0xSQ5UIpph644oQI0aH3a6%2BDnHGCmgGmWP7kq%2FOMCh30Jm11tZD9O5uDKoZ5okciX8DjM927i3xVKJA%2BxA64EuqtSx6Q%2B%2BuYALzmSwc%2F%2FBJbHiX5cH7H1HexipLCQ%2FlqI7loukDLONd3rCS9KPe%2Fj6Du%2BjongaTrOradjQzOgdeQgZXpnmQerImGV8dYh%2FjXPfX%2FoIZgrOnDnDbeS2285D8hIfOQBfWZEbLvEctWX96vWOVa1uwveu2eOy7W8rWytejwtfs867MbiO0b9c1JNS018%2BrsSrYxqKay0kycXUNV4H3ms4RBtKrkEE4aeEiiddvGnfxRbjAxw72X7Y0uyOsSOQBff9X3FHHY2tWOlDsAKOyVG3lQYTfA9pm5YfuVBxXd%2FidWKw%2F7iRFXKagig1IihIvM1WqzkcjI7E2hZC9hxTvYhZ1vVphakfJyV9CI7unLSLOP5N3xIh9c7uXtF6hrTLg8YsbdoW4rB8XfRdLB7TgzlBCwRHfqDD3QTzH3aH95ZHw1%2BWMQyCPMlY8%2BSAKSWB4gTCMMCDhdAGOqUB8yHyYfOCmtyjoWbMwT%2BczQ%2Ffh6iLh9kTqOlOIFY7bFSZiM%2FNVb%2B%2Bh9LZmA1SHaOQbBZOgANpMioMDVRGjCnmPEt8crE6EbLAUPlWCI3zhAPGOrH%2Bj0IeR23k4N8D5R2xI2SHdCt5eL1clk%2FMDAajICEIAt57grvbLC4VcfBsVKWs6F7ytAKh3D%2B9Ej8gqSjrNnYdKHNw4KSongZWc3x%2B1bJV%2BWYk&X-Amz-Signature=18a12ff2d33def6522c64f82a3827eb521a725c3270e225c75c22d81a53488e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMC2MAV6%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCZ5s%2B4ZOvIwzOt1Go%2Bi%2B9CCIgIZR25jNcgxcjMwe11%2BgIhAJlz7eiz7ez3OaMQjif179uChguDjmxv7sxep4VzQG8yKv8DCAwQABoMNjM3NDIzMTgzODA1IgyTMcEAPNuMcB07TTUq3AN1VaY569ygwn1yXJjS7czxcHK%2B1Prp8kWX0ifmLcVlJtGHNLoCARWzMn9yWhH0o8HAQb1k2P%2BPgi1h3G9dUOiqxH2b%2B3ouHmVHb9ZBf2ImcR0RA3C3%2Bd8OXA2Tkxw4ZnFPylgV%2BYBKnR4It64A7LaBS9SaSracPSlw9T4sesX%2BdbBGSiQVZ8wP5UX3RuW33WFh4uo5cbmCxfKs6LTgp%2FlhnfMOmpTQv2WAVw%2B%2BVZR%2BlsRyMpfpIEWb%2BSkUQbqUpMh6lOswtmcmJ8Gr4pCSZ6ftlQiMAUsQbjGS40ottanXvk%2B8jzxd0CIlfpxbclCF7s1XWlyuMMc%2F3zZBupgrWnqNXyC%2Fu2LQnSaJZdc9%2BO2NtK0A0FHEm0A%2Fmw5JfXtnu4Pgol8ecVlkBq7Dw%2F%2BebtijEmBc7vqCxJlF7LjsVRdvHavKiL5VW%2FNgZ5VKGJyvz2fwvfSIfYPplheoXaQysgNFENjR8te%2FVNSvVepcXiyGZIqi2E7xO953pQo5uUeUEujk6jKTpKjMnTWZ6ensRDztc3e6FYyPj78clNt9DlsvD2XYQBTn5X0VJUF5UUq8GR4%2FXtLc3pfR%2BMrHXU1mpNCRhcsCQ1pG1Oa8PL4wDwb9803t86t%2FhxkdS0vtXDCQloXQBjqkAWYxhhzTfX6em2aCQpE5ZIKICvHV57XsEJG3aZXDGDyadmAcQYWIgSRfexRzIeh05iFbGFNDcnzPXFe%2FU11wpayiLfsJv%2Bf9ePOqknf%2FBvVhe%2B1CtrMRjUHG7JhZbikqomot60lvTW3%2F6yn%2FDfqn%2Fw9Oyd0E4Aqd80S7Of6W2mph6DRYzZ7m5PRnbKgTancL4VSSqRZdzcAwOd253FWmb%2FOtulx7&X-Amz-Signature=613d364124bac5bf21b1d82094c13d9890d2db1f4e6824b08aa1a032c1d1a217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZVLTO3R%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBcWmAdm1Xh5D2HRr7HbiVb12u6eZm50Qb%2BngPcFlHfHAiEAkanfok4K35EflV1h0yqlgBAoNSxqQ6zaU3tvacQJxp0q%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDBuqcwiemXlp96pv7ircAwwDekkl6HXb%2BB%2F0iQ%2FsvWc3KbmRMfDetsCIv2bZdk5NmP92Okt7kSFrarkrwUNPtqlcv%2F8ATw%2FzkK9TYPhAm0KmNOGYuCkOUBdwmBTqE5w6lOt2BHwZn0r5aUR6zfN%2FxSgm%2Bua5V59dSyqEBAwbsz1SWU9cffFvYoC2LXvAYLeigVmvAJKVAkQrsymGHvw1xIBjfnRlSmjM2DZPZtHH5N0OuTr6ZZuPiX%2FLtYpTqncegrkWwIj258YgWapOOIp9pQxMzJQ%2BTM9rIM3ijIyXbAZNUvCcWjr22wNblCoYFj5%2B7WULY8kC3OPvjI513FPMCvkcFrBnnkFUw8gn5EUF9qQpyBRGcTALYn%2FNFgaxp23ZhMeEYxTlKevXAADbDZm23bR4m8foSekAp%2FmcFubNzrP7MHRhg9l26iu87RBI3H3G9QKsaZ5J9nR0kqb2Zy8Jhv%2FCMOuPBq%2FIYMHwhIizVVarzQbHXr%2B1RfS3sg7Qb7yr9qU4fjdREuuhzlPm0hDSn88hxxDHCTIbrHiWlhqHchoIpv6VN4KlRhj2OzGSDd0SMYHSgQ9H82hd829G24QUJKdrQRNciFtI5GYu%2ByKcNAuZsLCF3OTutYTqgUXNaJlx91XYCl9aDAPnUjJkMM6DhdAGOqUButbGyxsDCWA4JQDj9%2B5HjD77xK3jYTm1iCG%2F%2BRn0sF6Dsxfpn7Ygck6kIk6FoRBXYgdmAIXhNfBxTVr7MRNku0UVV0zVUIRfQJTMql6oyWzxryYotMIye5rSfRPSDwZFaDG1KI8Dwaznbr9mWu%2FELQ1biny%2FDD5cgzelskUQtnmRbw6sbv6tZ13Qzh1CNo%2FBhoKaAmkC8LtrcrY0S3LeHpRR8C7g&X-Amz-Signature=a118a6da7224889a22f2781fe71440f55b180a7cc5e508d8abe4ade4faffca0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

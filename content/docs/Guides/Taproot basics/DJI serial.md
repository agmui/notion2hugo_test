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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC327UMQ%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIBukKnkZLrH57aRtVdWFDaFsM1fZ4N%2FDL0pbYGv81HtxAiB3qOfl4IWTJ1fsYmzR5iZxYs71ejVN5toNAKt1pwRROSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMYUSHOhd9YBfrSixVKtwDH1NmsLkSlBgIq%2BA5njy5UAFQDg900EW3C9GqR1ELcXbdz1RUSowUKxEbLuPAN0NBiNwJWlGg47t219kXddb2T06BcgWCmSPwg8evIKjQvvg0%2FlpVwzctu45wRJ50espWPGtJp84%2BEuX6eEmbDDWziKO8wQadcpq4F%2FraLUg5%2FXK8abh5tIzxuyX91QHTGKjOAP4Sb19v%2F0svGB2slNik%2BckO5GQ3S5UV2tUx0qahaIMn0HLaulcrRixoE51beh%2B%2BdA3iN19SKUcmv6Hm0vGbrs%2FnQKkyDHrCYLr9yWpuYn6rVzS1GarAWiozPmt2zdrCYjKULtNx8nkAndYakMZ9mzI2kvH%2B6DjJG1MoQ%2BPQWhKGlB2coMvppTrE2cstOS3JvmarMWGGqUvY1o3yv3gRGSXX2894txEpDb4NO9jeVT6g9cAJRbusUcSR3QS5LmYBOmgo8yIZ8lbzVh%2FWmaKj4A52iOOY%2BL4l6Wf0AfNxdVfx9KqrDZMwn%2F0Sq2%2BUDisq1sc5svT2LvpxeyiC7Am%2B8cPMuzNNhnd64EC5FDkSbIomDXlSbLmHI1AtOngMhCqLrCExuVVPIWhv846GC%2FBB4cQ38S2NjDwq8yOqyNRK%2F%2B2aA97TCbCf2QKlPLUwj%2BeV0wY6pgEFvMDHfD98Lcsb5ALb%2Ffzskd6JDDBGBXcCj%2BVI8wxT0Aq%2BxrrCzDBUz5ZAVkW0OhXcfs68dWC1B3VPmGwD0YknVgYn6soOiCxkWss12Hz%2Fbbey4PBy2%2Bg7xcJfErQcK60MUPfdDyz9w3SCsi3wUcrEK6nsSKsmkyF33R%2FqPiPPsDz%2FD%2BogmAZPLqX2vUgMp4iqEO780u4cHw7LrIqRFiIt58NIkvKQ&X-Amz-Signature=6f6d699a325920725edad1974bcef72f5ee195cd5199f61403f31136b15e5eb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZJJXCSO%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCsCXrm0AZ5cwz2EdeVhkXZvwudEB4FOI1yKTTL7ARljAIgOK5TiFTshH%2Bm8Sn55oTc2DMZO6JN5ByEVmoEJEHfM%2F8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLF6uv6z20TjT6RpwSrcAxngWQrtiubstgMtfAcEjS0GkGsXJxk2%2FctmpWyQsTqqZ0JEkDHgmbre77CXcB6Z6tmV9wtnlMKmgtEc3FoWHwZnn3DNyJ8Hcgu4Vw5hyfHtgnlzJxuXStnz%2F94t6yTXk%2B54haP%2BukHFfUE3d3Slf3BQow%2Bisip%2B%2FRWFEDUBKWZQl2VVSbhVTRBzTOikBC5vLJFJ2rEmfVQlZH0Cokys4uqsdTwsalNuowuQz7dXx5XPacJlYAEkqs%2BvvTfMJG8gUPie%2BPE3SCFdken0EqCBjmomDob%2FViyJEDcaM7GmmtNIrSbhyOmTQXS2WCY4pNwe6ZDGklkIQDHz%2BswCg0VmwCVvDRu2mU0cAtUbmpGlxduri8MpfbuiyZIDF3YQkL1zKv00n5FhvdS66AoF8T%2FRHXbihAvikghVMUucFMvdYUeT5sGnsGReDAJ2dyIdhYGUvarCNKupUQ%2BCuJwZ%2BNNC74zSkC6gnC1M0G5pZdPfTY0u%2FLipIFqetOw8sggfyjU2q0204q5sRdOMhUBCeaYYYryv9IqKNZE7zm%2Bk%2FSZ%2FVLGuh4jFucJZyCJ8pTYTyDFEtZDalBWsp3np45mS5xfoG9GzhcUAwbbpZyAIG8p32oU80JiU%2FM%2FV81ZVUWZVMMPpldMGOqUB7P9orw2r%2B8PHsodSAijy4lnowiWZniJOCxOOv3%2BM3y8WpblPcCiarRGpDKUfeSmMU5D7BaGSrx9N%2FHe1H2uAiluuN3QJYW1MW5Ohs2YT0ydrv9m7ouvoGw2Ecc%2FerFmDbSiqkfjQSUPOpJxwvVdiEpipSJNovjmhcOvrBNNzOH%2FkDQtoSlc8C7TLaQ%2BM8Ed5ow2K1glMuhsL9go0bf463xHUQzyj&X-Amz-Signature=836bcd91acb5861115ed4bda051026f85c9e33be5ab3e52fe17e5b654fcde466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q33HUE6%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDtRVPHvlfj2NsXaopV7S0riVhSEdooKN5GfXETnso4twIgWt%2BWwty8tokuW4JNC7zL4RsbO9UeL0edwglMf3xWQHcq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFuibDZJvWtiqTerYCrcA%2B8LOicwmKEpzDW2yiCy%2BHY97IFcHEP%2FOP6tCGvNWeDlmEvVjExXLu%2BM36%2BRsFRrq%2BO8mPL7cY9LjR234SZerNCbXtlf8ZLHeHuFkK4ra1GDIlbB6gU%2FXYYmtpJSfuFAJToVJqdRkJiWRrrABP8bjnM0k6wH8AcyWfkagxBXAg%2Fx1LwShrrAM3CBjDviOBgcVhBE7bFApPYdzZb12Xi2XLekQ6NKyrpIXirEd3%2Fvd1Sk0CpG69eKPCZWDveMrRGxxQa8jlKTELgyh%2F8RxhvwAsyVIVHnpr6750%2BGFBEo5UxmjswhWzlS5AzUGBjy7ygxFqrCiTNiFMLuBWocaNogMF6mEgezQXozceaikUrt0wLFaHJrb1iwMZDNhtjvEzKU9slZdNZ3d5w2uwt%2F0jspi6yX0hy1s1cG4HQJh796HOBxLUZ6qLu6k%2BfjMeDAkao7C7X8YFxBEca22pvZHD2VBQE3v7a5SVUesPIfTWG%2FBBBbBeDm%2FQ9Zo3AbQrG8KBUwTOc3T7YHsPibSMItU8oRv4RlxocLiKjWJWeeOs6tTfTGVyYwI6cC5oDQzP%2BXd%2F31MKU3abtbJcuAuX4m7ushXXdE19afXXbVVaHziUNTLpxM99gZI3PXa4dU4tzkML%2FoldMGOqUBaentxuGVGFReKUHSbwxl0nre03c1gKMHRopyLCGwPv%2FGbUKiP3RjCl7FHgTIGuZsjvcwfwghcXUaSGBZF0PSv7rN2W0DU0HivLhAvO8I0IKhLxQQHv2UCu6O4HZsvJCQ665Gehw4YUhxyyTLTuzksvQNITCFSF%2F%2FV1GBWmMK9ZYRRvGYiAzqi9KSrLj%2BFqRd1O8wDEk3GFH%2F9iQksf7gR%2ByMl3QZ&X-Amz-Signature=40d1bad4b1c1e4adf2baf2a2c542e56bf3beb75228c7c932ae53ffaa76af7fe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROULWHSI%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCID6L5VEeco2A9fXTM8g%2BJ1bybmCjaOdzGria1xfS1hWKAiB%2FTcF0iGLRxO9XvEn3HbI58mt0%2FwASjTzUamgFmGtdcSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMHJZGF8i27vGDy%2B52KtwDAujRyHHjRNue8OvN5YlHN8YjGqSHsZFQ2ZUBrPZppgtIcXNerwYKreoMMgaThd4lk6XXdvT%2BcsrGEuKapdbZ1D9GYxFA8vUp79KqntYX%2Fjnq2j8YM0LOhpLM8kvnDSZ0mO%2BTdnssNECr9U1C9hj9JrGrjBNwCwMyDj5YfPWPWXZj77VvoGNbAmaVY9jPvXSvH8wW6x38yQxKHi2VkxH2ngaZ5tiwCXaulJzhpBsPoMsSGvRyPi5lejJtMVZYZPXBgsDMEUxhQ5bMcpHu8Uc3o9WvdX2R19UnTAkBNs%2F8%2FNyUFWX1h806bkkiz52f8hP6DNDWYnMq5F4wpUMsDBJG%2FMBeh5UtRaX%2B03RdinSWkWWimeOVg%2F7caNBphpwWhhStv%2Bk9iEN1F3l9yYbASHa9ibLnkuv0JNqt46rYIE8OC9DTcg2kjjCr4wqjappTQODIcraEzQCRetxBC7Gi5quw1dSHdIUTOoBnIxKj9OgCBxLCPZHx1DDq%2FSAQ7bx3ozjhFJsHWCnYxDq2EC%2BEdzxdmtFDeJAtaBQ60BzV6lhiuQebnIYBTjjo83ZdeCndWpbLOq1KuFyJ25rL3WRti4Ri0skvP8UyXdsVr97hC2bjc3fIDEOJdrLp7KkiLvgwneeV0wY6pgGtshMt6avl8zCl7BfFLk7xgBZsP7uH4UoKaA7htW0xuD9IaXDe8sIY7w9UW5lC1O1y%2FXz05D2yZUpmisn2NGhaKLeNBAcMWbUrGMUX85Dt9BuRojVRIjx59PWUgJArFL5vsjJkIw4ZbDSfKUsG8w1pO00SC6X%2BfeMSc2U1t0S4rO0TAa5081TZcEqMLAxxH6iHz7P2ggjnn6NEv9%2Fvg4AN54r042Cx&X-Amz-Signature=1c407bc20a9d4bdecdfeae417f0795a56b4df0d08e6318bd4dea58dd3c5013b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

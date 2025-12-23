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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEZEVSPG%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIEWnk%2B%2FFyXQqG4sGWGQVq6hUtM38FT2Rgg%2FaKEXPM5lDAiAsJ7KoFxOUv1Gx1bV8uugYjM2h2IqX9iw2RsTJfAuwlCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMLTSE2iNYxnJJ0hyQKtwD7PcwDK5CYJ53PHx76vRHuJ6Td7sTosrJUhq3Re1YI1NmihL4OP7B3WizMMjzXCJurZm1Uj7aCjOd1Fhs34IgmDG%2FRTz%2BXs8946JhQctjhY8EQvp2nV14x4hsx0%2FSFwy1wI1d%2FV%2FjmFnCkjD3D%2BZXrnt4d5jerc99EHdQjcJtAIDgZkCCD171gvlI%2FwRjUZ0uJx8gVMQxlSonprPYGdL6OxB7WThWoqdVAXKQDtCpjPwWC5T%2B5L2w1PhDmZ4yPtxBmoHajMIWTAofgL9CPpREarj5RSk12rIeRcSnge9vzIulBzUhEy%2B0P6DaQCSvwKaKfHAz%2FwgupWmcK56vF6sSCJg5k%2B%2BY5GZz1YBibTe2sBBeDriMDTPkGmqMfJj4oMLVziyzcVQv%2F0ALdk8RDV1Al3rCjC6uwBesBumNFJlpDqmqJFAJmapToEakZYadaEL9pdHLna8pFdwFgUMkASeC2LQyiIf7Pwe3hi8OOwe12JQPi5edXEjut4bP4Yktapk4FJwlcEAypG73yXpaR%2BbcmzB6a3SONUIlHiI6YqWKe8xedFvIO7I16KKVJ1FcE7aVvbd8i%2BEA14JV1ataAgosG3%2FDX%2BiomXD3IAH2sje0nkliTET3FMbfdna5ER4wo%2BCnygY6pgES1Ig3tmm9%2Bv49vXYEsL8tfZd3oL4rBEIigPD56kpCJGjymmBpQZjBXv4hBe0rWO5QhABo9j3E37uUbNkHFJSR%2F53Klhxwcs92f0FQu75KETabg6dambNtqHOBkrAAk36ykF124oCXDc04h8R4XdSoVbSpg%2FSh8WbBFUeiR3qJy3Xe%2BE8OdFJA%2FwecuSn02GHRyjd3nuAdFgyoH52svckC%2FhDhSbdw&X-Amz-Signature=a22ab97a478d69f5ca5099a939b41e6c88fb16978902cfe2b5bb33bf7a163b86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466652J65UP%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDmbkJAlPvMDrWpa88kDfphwfB%2BZEtbpQoc4i2yurGu0QIhAJwNvUfPHsZA6%2FR2a6VTSJfrQXlGENMk9h66lieCu2nkKv8DCAMQABoMNjM3NDIzMTgzODA1Igx8BOeimurXCRUuE%2BQq3AOCPi%2Fi8YyMdtqsMQZfEmTx0aVyTP5aTwTVJpO9z66yb3J0K8fh%2FR1JygD8EdbNhPtywTPEkYGJNQhjApssmwJc%2BU19SX8n1c6w9TjNx40N9Yhhit%2F7LWg4AApPtDGwuYx4Htd55XlnQlh5vPY8NEy3XRsV%2BH1rUgvrIq4600lKtC43SUkn3YCB5nGv9K3OSIAX3AQ2mzN1ZtUi5ohCvNm9b42zznu1Shcfy7LzCs%2FonexhaPU2MRug8rBS1S4sN9cRYIfisdnTB9ZuDLFwFK5mVmA73hU76O%2FaDjkWK0zArRxf%2BKw2GcTHq8ZukojJPhnk%2BWKNoTxyzRZtLEkfXcDT%2FYTEQfTZWT84zGhdtTpWGjg6KatQmE5sS24FhmkcOWttH2uhjxR%2FF48Qm48%2BNLM7AZR9QoS%2FrHoGPv4kixLkGSihsMH%2F%2B4or%2F%2BOHPAO%2Buh97dCei1exDJ4dpyPvGkXB4HV1AW%2FqcZ4Wx9xRYkG2UU0tnNhIvRpTD7XV4kWF%2Bu2xvPa1UjfD12L2orX5RGkvhfg8Prycf6dBBmgdIase8c%2F6V%2FMkW%2FAEp06e6QqN1p%2FhiYjtVNi8V51xtrxfn7x86v62vswUcernAzpqBmWsNGsTyYKOguQkRzn5e5TC94KfKBjqkATF3sPcIMCJIIRyBXnEVzFopVR2XnZ8aS%2FFJINzI38M%2FA3jmt44bXZivjS%2BOkz7tjBUnecl8SQLEv8TO38DF8kpkoJrU%2FNc0a7EiIOFQvwkn4UTt5lkvVMHIj1XtWVg8qoPv3FevAyofAs0r6rb0v8dGx2wwtFepG1R%2Br6WyRCJbP8WnXcf3buDuoUkCiZpQ8EA6SG1%2FW8fcnQcs%2FczF%2BD2l%2BJYv&X-Amz-Signature=fccb53725e1854de163d433fa312c19d104f9b1245b1a55032620463923f6733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QKM6VEX%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIFj0p1QrhZ0v2RBaAgc0lVFiAx7ZW8WjVTRk0R2glPvMAiA8y6mApq5JVmsBZ2S%2FqVYlpkc%2BKhEJhXLxnilMPy4fUyr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMG%2B6NQu5qQqunRTRkKtwDmBtssAef0uEMH1IQfgClVVFlNZ6UQfq2pMu6gcOzVqdRBzprcEQikC6MwYIjoexBmPPiC6sdCdBu89N2RN7xPjXXBwav7ADjHVQ7PGVF69CF72p1wCLrhSq4xhXLLWBU6qJ%2FtA3THdkrmr2ym%2BgjECciy8NhASKIA%2B7jH%2BhS5CAauxM%2B3P0KExuwi3V3czdwIUGOYTkgCR41dmP2tnSGeRRJsAhEkjxjJ2n6TZnLH7MQ8tzcWj0hMrI1ktbBwopJRhvkKZ12TuNoGPEuEqb8WB8r1QKjMoI%2BTj6JZaoxCBluGeM37k69TS%2FlRc93VS3OprLoyT%2BkUuc%2Ba9KmcwUwgPwhuQz1r2TUbQ1CoDyYE5vnVjjVPtR24XUzPgVecT17l8%2Bb%2BnObdCXpPdKP6jq4hCuT0whUPI72FT%2F7Cmd77yVrbeV8U9tm4GoZluu4PqhA3tON602L2heKejhGP%2FpTtGFIwZhz5YmuHs9eVuCe7XKNvnwNRzd1Xo%2FZRoXi1C5v5PY81DMdyF%2FbJDNcmEYgXRojIlqIYrNs7BrPwLQNOhSfqV79zq9xYdiO1XNBBKNqGZ2IM0yK16TM0XqkD%2FhGhOnnx1NpIc3Y3MxT%2BjaaKa5XRcLgwE4Fqur%2F0wcw%2FOKnygY6pgGtDLsRc3YvlMTQtTH0%2FhvcjpSieIGjd7TGwEGAgEk7HcTa73QRA%2B0cBgIYRV5SPr98SkJsSDfi78a%2Bu%2B5LqY87BOnCA834mBXqBrM%2BedOD6OuxE7kWUG98X0%2BVZ9kJU9T3ktfCoQgyXwQ6UekxwxTXVnTFq1gszyqlX%2FjLAjJHc2m%2FcLrrNILP2kURfycx3SUHtIxiwM9rwHY0hpENwagOHpstN54L&X-Amz-Signature=beb81f86fd72b421a7cd808afcd01f958dfe4ddc89f1b3b97212b0c3e4df71e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ2EFEZB%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFd%2B7sdJGzwo7r555tKhnklaXRMHUkD0nBu3%2FuFYMk%2F0AiEAt%2BK9jd3RMSQFzdbyeJNjTSwJFWGTEOD8K1gSTssirjAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDPm8l6rsYsJjaKEhZircAx16XGwZ5%2BdvR6XZEt49tLCRTm8mtfJjA4eNFFd8pUnDnbecl%2FFBAbcpTGy6yPHVFvIppALTFPcAARMIlWdXk8cv58q1SxcUDZNoJuf2AKZ452WXfr3PYOoVvtG3ZNzbv04eI9QqKWCX6mTXPuoKiLSSIxtXUD3OonHSjSiLsl7EZx0BQWVPwnFTouB0N73gI9HWCZfrLsfLNzIHL5v%2Boh%2B3Fduf4KdZNThgqEQ%2BCkN2KO%2BLgR%2BrxrQZnDNmP%2FzwjI%2BjuIeVv6aa%2FHetrhNUxr6nAaZe%2Bg0fQ9%2B3ksT1vVdVUJCAAz6m5Vz%2BBj%2Ba7EmYqdu80RViFl6MyOn5j9c59UL%2FOw%2Bt8J3laQtNrneYKD2237UHNqvd7uzJPpo6NtnsuUJXtuyHBKzyCjH4nbzLP%2B3cDnotPd1t%2FO%2FKMk7yHM01%2FbZj%2Bv2cA4MdGGWIli8kJsGmipYaP9kwWEbY9BVt%2F1GQLhtOEBMB6OdHhMYTR%2BRyLHoxP31D%2Fo8DVo01i5diykhOILC8ZdpCM5Y2tauSyvA98nI5XxGhTZIRC5hYOdKv8IFBUFbkhBGcWWO5hNw2KvY0mL112557KjrzpGYdX5XsVkHPhb1xLCU3Y1QkgZBqNhqTjCKRy22CweQ0MNvgp8oGOqUBHuvyc37qQyNtEe8sQh%2F4NWxXCcvcMoloSFLOaHoz5i%2FOzN84qdNzjYZDwr1NJ%2BMUrYeVrTA6WT%2FZ6yUe5zc62wf%2FTuyw%2FkDv3oU%2BO7eC2%2BzkRV0lVbp8KG2TnIMsmaf%2FIc1EifI%2B2ZZvukRlNJdGZBpPk%2Fwe6xceBrjcdwrEzmzofMdyWR%2BrSPUDOb82YIhJ8uwhQnur2q7U7GPeYL5Dy8vwaFNk&X-Amz-Signature=bfbd804aa8185cc74391cbe9d85da6a909637edcfdf4f732c9c83271ba42e511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

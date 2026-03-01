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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZYCYIMT%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChXumvSpm0SteR%2FciPx61iTcj0%2FPgRe2T0EblZpkoMEwIgFM3tqxrrlYZB2EtN3RBJGtKx2bx9nbTDQVwzoUC%2B%2F%2F4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDG1opvh5SwxLGcbl4yrcA9Jq58MgWp7kH2vdJe95GqUftOwG5BgPYueCRACO0RfCSoxPUcyNZx84lrUbhCO6BM5ZToMlKB1wMWWbthWhoyCIznV5cx59RscuqJO46DzIaddCq%2FrntROP1dNu6AU3VHz6jyPj2u5QDrqndcSJJTFWJSfW9V%2FX0AnKzL8oIKzYIhUfPFqD6jNRmP8bctl4xEihp1eUDoYjlk%2F8y9PRah85OayplEGJ6VXkGyx6TKpMuEUjTjINuPYSNMEjVGvMrPvJJ5lQHA7xVJ42yMXRfv47w%2BbqdFccuFZn6wKQHOaqdcE%2B4aw%2Bqtu6scxRjFNnAsSE9qM4uUtJ8aE8wr55L9y9T7PcWVwK%2BEgQp5tFrl7CJMqamyz57eUv8dnb7eCa25OmMfYuxWpvoYRSqo0F6zovzFnZij%2FNi3D%2FmiYwgUSuZ4Qu7PVdmCWvdoyEQA4ZhV6TDpxkfSVmInzx2mQ75Sk4IUA4K63R7qOYH7TaGxOoH8ShbztMtiZMdP9eYVM%2FpLCFVZSC0br%2FADn3oIEMUUoLLBYmOmN27EUnEXDW50g5Sid%2B1NwqSGEKs51FWbK6PMmgiV0rTZAAq9s1KCzQsMYUC5QiULqhDkUMKOxFLYWKu3GrEws5ZxG4XZ0tMK%2Bvjs0GOqUBQqZa2nx%2BaYfe9p8vsatbCGAJG0QyxaO9hH6qHTkCFvEnBb5S%2FfnRAsco3Y8ntjnd%2FEaZ7rbmvOTqNiL66MTFG69ou29%2FMFbaAZV4G0%2BJmO3RSn2Ua%2BISOxJ1GcGVn7s4wT%2B7KPaCaL6nLBufwVyoObtTKIb7VuCkyIWLdNKEs77TPwkycco5ILU88PTxxjaLKaxnS1pPRVuLXm6U8ELdbwmpmnZ0&X-Amz-Signature=eec30ee90327c4c8fae901b7914c7e12c6d43556fe5ada1129734d3ad326e2e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXCCMARM%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjOxKMp4baHSwOCsL0Cagkh2dEc127hX1RGq92vEMPaQIhAL0KKWj8DgdUaR5fEn%2FdApvVd%2FN1xK4%2Bd9IhhyWiZGLdKv8DCGMQABoMNjM3NDIzMTgzODA1IgzGN%2BH7ln2UslXJObwq3ANepOW99fL3nrAzUSSzWAMvnkCBwXO8%2FnNg2HtNLHO3Jc36tqbGJ7HylxH1mH0dQDTYnrGIu8nOp1fz5j%2BgFicMpfOBAD5RME%2FehB9WA8hFazQ2%2FYbzc582p30PCgLJOMiKup4NaUIltpKaNiI5u%2FqOln9I%2FFDO7Vr1e942Vm5io%2FKuswuE3ld4JyJ8L8iAlFLu1wjVPXpUMkaGpImg5%2B2rwViG3k2wqogEpHS6BbS6KAoP1KXWa4ExuL5jmu4zVwg1cS%2B0bV%2FEUpMabP%2FNSlFzQ99Egq5va%2BiuOlxS3uNd%2FC3Qd28Y32afOjZq0PSGANC0Mm%2BDISLEFw2jC9DlITw%2BdeGO%2B%2B%2B2XomF3Gmp%2FvSfD6hCss5NOpTiyXPjmKZroouGJYvF2oytNBaHl6ehxxKMYLZenpxED7FETnqEyTYYI%2FlTSARsAPv3Je7%2FwMEQn86M7fRNEDseTN7b65gJDQpoAoZFjU2L3h50ShAwW23Ni90a3aMlUCCZ2phIpS1tH4tHLQrN%2BynUS7XcL9iDV26qJ445pef3tZscjm97udDaJ0xpYOu9HyjtihXwAJ5%2FUOrXkf7jWMMUcNtl0M5hreYyKDHEJWx070zhYCXEUhXG3KyMkIO1RyGJK4YpZDCNr47NBjqkAZ32UrD9jdQNvmfQ38%2F65F4U42iRDPFIem6bnI8QnABltpWZHr1IujBtM6NfwTRxe4moXmkTLFyAoY%2FvI2XQhXILWUuJmqKSGsAJlLDRKGjgL9ojfI9%2FWVdXuDRiUEV8CrCh86PMPPEk0uxf14pDBY%2BTk380XSkb1qSJDziba8MPYpZyt42MxtVynm1hw4OmT%2Ft28CO2GnX8Iz0PZ%2F1QnP5aeo33&X-Amz-Signature=a89224e619e8760856d37c7a4f134dc875ab48d1375cfb2bd5099f6b021acd66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QXGDWWH%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK7M3hFLUvUQhyNuUx%2F%2FLn19ckC6v2fRtN0%2BGI4DeCOQIgVhAal95PS%2FO4Bcn9S8Py90GBi%2FkJ77rwdgWAF0%2Fzz2cq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKAzqhGSS4oRbuT6sircAxlJu7PLS9XY%2Ft9aRPH58C1y%2BpNWXy7%2FekZD2yeBMog6aKvSUuYHzJL65rIP1hKazd7HGQLmCOt549v8H0Xhgt40Fj23jrDCNPWM0FpHMug6hdEP%2F1ZGKtseyClk2OcTnOwJmSnmH5uAgADa0kN0mWmAaM3%2FOUdLO7jgFwqToKMbb30%2Fzu8R6WsMTLF5f%2BH5iLDEgiwCuk4RVcgv1mRJsw0t8avscyGJJCK%2BJifMiS1STkKBBmhT17AqEA%2BrDXptRuy57dtUkRvP9iW1kylkZN7hN0oFe1hEG5f4E6X4Zew1bvmcL6hc8yXBZOXDO99IbvcHBo3GtRTwQH3QmasMRvgzBYMOKEztBGL%2B88nF5fb3QpM3m8Rb9ZrNpLIyEKphiEW7aOfC%2F%2F%2FYS5FCx47E89hzU763Yg5EWboFv8b04BP%2FIOBn7AwrBX3CGL2a2WcqzSI8WzqZduT5vo4ebMMfoJbTzy1muCPEI1IY7ITsPw1bNzh5LCEYusXKaR34FhQ8ygvcw5sqhnzX81Hhc2CwFiSeLQmB98dfTc2fWwSVMdvJ42k%2FJ%2FzsxWtCkOkCLZDryL4W8lWrExLJ1Qo4UgNuy7Yv1IfV5bL3Wc4%2F9hWkl8NxCiasyqvKxgtSSI3rMMGujs0GOqUBHJX%2BuvUTrJ1oU9VE%2B2%2FeEVygoKjbH%2Bg95k%2FcWGpLx0IzWzUDmnIBCgPNa72ION4HIrBrtU2ZA9pLykpgygezCcB3ETUn%2B%2FbbldRLWQ6nRFv35ISMFSRIIRSR6v8xEPxxjGkSE5yCYzsjfldJS%2FiVKIUXVQRXoVXFpnbPiNnYE1QO%2F8fVf%2BFkCu%2FHjeZ6NCdZPmGBu2qlXj%2FbZnRYCW%2FMrNGo6iUD&X-Amz-Signature=3f9450c35cafa8f0e25ecbb488715f82be29493fd423a24db572ceb9d2bc5a3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJT6TYCV%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2SxvXOy0zhTpLpROzruxV4Ybz6PSu%2BZxWysWueHOygwIhAMQR4Vs5LSXmVXcuUuijBpNHRgeqerYSVPEvL%2FLCYE1ZKv8DCGMQABoMNjM3NDIzMTgzODA1IgzONbR%2FDI5JTsdPKmoq3AN1GcxRDfHR8Yzi9ODknzNNji0roUYfRMm3zcutypCUvpTej82gClRDfsWcjLoY2yWJ9FdTA28PoL9vcvIxziClwQ%2FgzGBq2GUHdk0ZFVB7XkbGjiLMVysMLZ40ZYM2Y1vdyjFJbX7xtBASgcn44i35lcD7f%2Fn83JsggkAn%2FXq6ErXee4lKPoYGzB0DuHbBq1b3gYJNp%2BYJso67LD0%2BeF9xJ%2FBDDzGN9hdMWr3VJB2JAxyKoKUTrHpXCLy1zX7wXVx9JLVYyt6wDG2hH4zrXN9y1eyh6%2BMoC%2FSKsSPDoWOFVcNfjQtxGhAnN%2FEuUekLQKwdXXOjkxKnwTYyaJTBOcv217IeyKaCejrpAi2Y%2BcBj4DABGtDZJRDeuLOFizoMXJ0GMAp1VWkm%2BQL8YrSHncVafrFDnDxKwYz9l2IZkX%2BNeWHL4F4XYRipbVHOZ%2BIyzmz8WFQ3JW5t51NLgf52ld2a%2Bk8Abj6e28olmeo%2BRPOK7Mol2M%2FOsHWnNUBVvy9uR%2Fvu4tDu7Um19Y%2FXxXun3g7IIPppeaiTcapcFoIrSnjbqtHBRjcoVBTJdGGjXMre3d9Ca%2BME2ueXtjc8gYboDJPwCN3F7hjyhpSskglXIjDfViIDESoqEWPWNjn6dTC7r47NBjqkAR38GcEBf6BKeaRA8wBjDbkyjOXAbeScThuE1aqIAi1uIkKIxI2S8A%2FSH3VgSEUTdi7VUIOQ9nfBGK0v%2FQHC%2BvvIEZ3wLOYvU6EoBH86CP9nCyLTyBKSjA8NmMmL0vZ%2FS64p3LT9E2IIXiHGL%2BWOX2WGFLdS%2Bigmd43W11oDTAnLCBN%2FsdWjh9n9UfkxKPoiIdGXtxBesVOydlOB4CMMCZa80%2BPk&X-Amz-Signature=fd76e5f8824a8778e23d23d08d460f54f057af508672bf5bcc25a8ee99772781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

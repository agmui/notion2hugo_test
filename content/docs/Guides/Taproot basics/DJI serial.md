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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFP73KV%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4o3VIwF1fUpcRmk7NKorIA%2FwyOpsaSYH0gLWUAjEdCQIhAK7oVOvPngSExdTSxjpKWD04r8kMcCXSNMu5bXRaeRJ%2BKv8DCFEQABoMNjM3NDIzMTgzODA1IgzWwYuyzbrMO%2FRhzX4q3AMRNCW%2BQOxVHcEuRpj06IV6WsBAqJR6FeV7YlkyWYsvwbG61F3ADSoeducFgkUoGBbLELBY8MAYkXxGT8%2BlPtXbhV94fXqicG85N7G5JCMjs%2FN9sHZPA8zVOCmeE3OmU2lV2VtVE2ErCIHHGlF4hOG6pjA1Pobfi2tpfRTrR6jHvcTs%2Bsm2r2TEtpT8PJM9BrdZmhb6Ef%2Brls7VofT%2FTXFt0QZczqFpj3RQWg1McUCLxDJjIMXhlstI7K9rK7%2F%2BgdNU14A52C4tUrmLOkNzA4a9aEaa%2BHCCwvBAQzm2hNcrkkot0i%2FLbYeEK96rYojjBJzeclGtuEu2OhbxTBezkjT9ebabcIJJCzICAaQWV%2FznLtIfiF8Ef9e7EkepOGHck0cP9fiOkAdzm87WO1l50cXeaOc9onG8C42UdChdtwTZ%2BTtjAOrMjfASUa0sLdJ2EyJ4ltRlUKmKSMuMQMYI9RLpp2z2Mg2pOaiyGXkuVHPLISJd0x3FeoSp1IQ32u%2BRmM67IWk9PWIQrgC7Kf33gYV6jjcPdtx7dhxYarz2g9di6SXOaMapP5w9rfwIiNDmua3%2F6sRaIoXZLx7ZhyaJdjIku2qEAZ1adA7Gw3ImQr%2Bfo82paV2LHTGizI8JGDC7qbbHBjqkASUfThydqDB8vRM4xdsBnf7o7RcJ5BNO0742AeaCvC6kCfg7uoxWnf%2FLO5j6OTO0CcCP0SaX591pg8QXzSbLLyXM8K7aGmJSgjIC04qy0YUuHbMy7CNGaise0lGXQ0tpQo2IW6PgSVrYa3u97aVbrsUOfd1CCrwQzf2TxQ9I77eTqMgzA4kMylYtrPMUMiMxnnRCU6yJyHksNIqtegNfjzmp0H1G&X-Amz-Signature=0b2c64ffa828ee39ceaced3392de2421d7be5c2da8aea2013234712642585f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBFE77FI%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgquADZ8FrI4KbEcABD5aqhvRhsR6MeXv46IrcJsDpLAiEA2H7P%2BtIsR5Y8S1zVUuOIYfjIr1PY67zG3fIxsHaBK8wq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHOZ0wrPctip%2F9JcfCrcA2YguECKlfdhuYJl6QxQyv098o48%2F8bQEOig3aR7I3jwXRYvgt%2Bt%2ByVcTHf6n4S0KAtDezNHCWPQxtsVeZwHTFml7KKdinSOF8UDtJfWBpHI7h%2BFZtps61yoALN8RlaFiR7TaC8VxX5yGnq%2BU0UWG0BFYtCDf%2Bgy%2BwhpCstmAhBguJPv4A8iG2Nj%2Bx4KHufggbg9fPo4ZP%2FGzfMW0BgA1bAjpwDJNo9yGv2SJEZxUuBqIZfe6ys4h8Na1F4rPmo7GkKn9bnGUtYz8FVADAog7mivag8kZfQ%2BxY%2Bz5xZCBtE4eMoTume1yNbc2G1mu902egOmuSP3mtThJWzyo7HZIokL08pm8F0dHT3PVGlnQuRW8Buy1PsUC9Y8qknrPlkbpdAqCQG%2F8EI1cGtO6LjgR7iu5HzylT89FlHc2lKa9t6H73pjSPlndEIRtWwcIeB6YjQ9ReKLsKnDWjpITEHWvCLJ%2FcpFfP3P%2F%2F%2FTNJUSG4UYaEruqP8FCxNedw5o1tYTlJM9JsyAEOiU3PMPJnFG1NB5Dv%2ForBNPGqgRhjRv6vmTtT0JWycP%2BOhU1oBKCEwjuGZmvC94MY8a580khT7nftH0bqGLGP4fykEgqmZMxij%2FF6SAzxigbrFXadc5MJertscGOqUB8ld9HTslPcEAne5BCJ6lhA77bL%2FTwpa7XCwrvtk5amLJDgf3IW4C69oiHkBT1Vo%2FurgOzCJLD57aE%2B2CgYNhdRf%2FEeDJgNb1pfynQBhcZWQm35JHeLCpmGqizQwG1lSTBz6nSurQ8RuukOJRuL%2BeT9z%2FxFB%2Bex50BHchaSodVcNO4R2lk1Iu6frlv4bynqUz4ttoEjxbu1LvOAWjdVOUCZDrW1SD&X-Amz-Signature=651c17385661176337df81369aa5ddfb29daa65597b5131e63a99c4993fd1131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRRK5Q6%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyoUqB0l%2BUy5v%2BbpUaJoLWYGK9cTOISI5pwzVWXb3F1AiEAt%2Bhla73VcRL5WhV%2F4lKF%2FAng1THp0S8T%2FHHBVGn3J%2Fgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHuj49PHi43RaJSYcircAzvbsOqSgqqtEqkIZ7Q8C%2FWM6pmJdydMGHOuEtS%2FPxGaDOl98XlWBJ1MAZtMq3UmWdJzYxNvFoNMzWLofsCYQ8nYoXMFKIUledIKA1kcnuObhBzSkJmDNFH6N%2B5PzVeFJACZyk5cCjKH8oFDCfPzue3q%2BfiSktpKRN1k2Ub56PL2x61ioqDPYyA0ddNJv4lmQigoI943rkQ7nxD%2FnaJOGdp9cKBI%2Bgg09mTp5XXJSnhAvQMp8VeF03SYpMx2Dl9brLpr8yWWKkW2XBEfnMdUW%2F21h6x4NtK1eQqOEwo%2BC2KxJspI61pto9A3YdcB%2B%2FYPs84pjYDgA0bQ9iysTfyYaNqSXgdko9sDvI2YsrUQbkCUZQChTAesNWWUtA1Hw4X%2BK2tRZ7XatjjbtrKWpgvmlVKVroy7oYChJGKwK%2FANtYI8jrYvHMUyZP5fv%2FlbD14AT5VUOWWs3%2F5%2FVPgKbISEDqZd5LaQ98TUqwJaq78cxidDWiyugu8Uo%2B42kpSA8jXa4YPfeJd5ikTQjWUTHwi%2BQrSIbVklmtfL6awJ1ItOQ3qf2Qa33YtCg5yErcfb3rTwnx5ohTJ92W6IVfqiB%2F%2FIQTO3wiRBdG47cP8XeptBT1mi7QE%2Bp6euB8wW%2F2glMOiptscGOqUBkPunieUqUbm7su1bDcFo%2FF1G2OEGfBWV4hthqLf1HM6VmldTUnXpFPBJTPdxoq5SXMbxYTs6Fq7hnWJWl8Vx3mEJ8mgL5rayF22YMia7Ozg3EKZHNuiJMsBoWOSGp1rOCpCmuOHHttsgytYvULenLPWjjv%2FVNS9rjMfQsp93%2BQORi9zQiS%2F0kU1OLwQobIKHOGPkKdTh7AEUvpOs8AhxXJKLiI8K&X-Amz-Signature=2305449045d1cb1e045344cc1be663cb1872d8e36513ec97f22219d7d13ffa33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466334KZ2WG%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeUouQ8AoEVpG%2B2P%2FRY4e9FCN3yfCtn5bV4OQ3CnmxXQIgG1Mh6bVoaKS7whBaB991RtjiGYmePq2vQhru6FaWcXYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMMgki%2FKbkP1kHXrAircA5uCLcJccs4ooLl848xCQqm25CZ7nOIb95%2FXdAWCniq8CtSNyvCnUwKCtMrP%2FD3ldtUW9YLVpSCR2vuwAVzjic0YSOS2IIqeyGDLgJ6%2B3W0uRej6b7odjWBx0JZbKX6%2FQ5Z5erL3J8sD8WJgYDWYVsXe49F7EfM%2FCEt%2BSAM660niiK6DtBUNx45obK%2B311wUowLGNK5tZLuoxfS65FSwBkeY1ykB4Xrt%2BC5KDm52hKuQfFcdwr1uGrMij7O7DWRQo%2FoY7nd%2BTSfGLT2BJXS7riOBasO%2FHNjOZjEbxY702NPwxrQ1pVnoU6vXluvkPPu9ZUb16NHDKOH0dgOZOqSoYb0qtQC9mL%2BW%2FshtmZole2vd18BprWkxtblb8zMucWyz5VHBwrql%2Fmn%2Bs8vlWprBNoRnrJLDUaQD6KysTr4bp5eRUL4e%2BrHeyIgNeAY1%2FobFEYbgxcGj0wTvxt3EU%2FxCYf%2Fikc8syaQEPz%2FLIkS0Xgc4vLRzPyC9iMoXxl3okChjl8g47LEf2WGRwF0oYeQ7UDUBSZnljwjtiCCHaOUfQ3Yart0vyipb0ojq0BD9uOIVXmbR5WYZwqs7vv2lkNpgr31rKOSfPHd%2BNXoUEG5hhBdOqieiUmEkJGtQIC1vMMOrtscGOqUBE9IN5jZf69Qg6VtopnF1O5bhcPfRcb6uFfbePBlMGU0HbO%2BLUKqK4XfXFPFfR44bVsXU%2FHtzNv9gU14GfBC5zMrKy18Uuvu5JS1k0dtjBXqsZrgrWGSSBGNHLXL5F0rcAY62ZNfzkkL4Gkybw6LdijOW7vfoFqhmFui2d3Re%2BBPUJh3oRjJ7S9v4C7XcKn9bWeI1lhUmPLd0BQtkB9xsy2WsZXPv&X-Amz-Signature=96cc60b23eb88fd771b16b6f3584c82eb1f9af3fb0934f3bf7948acc25768e2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVUYRXMV%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMJnYVyV2Z06Mb7PGYtqczZ8poeeRbQUXwNdi%2BDdgTcAiBr3TdLnqE7sXJCmCZRQzwrJzYmRRIZ4R99urMrUA2DTyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMubakZ2tJ0TuvEJBlKtwDygH25rpqVNme6uDsBhi1HqefLIvrKrpWsFpwyyIW%2FUB%2F91gLL43wcsQBjQNwjQlkSIkxCCxn6R9a4s2JupBrCpVh4qMhRADgu0DJ6Alp5g2YUkY31ykc2BQjP%2BpBSRMouN8iLfJXgLlakdM8CViVL8ELOE%2BfTHcXRChWqfvXIv51d%2BUwWLQhL9rIYOMycdGhdZNUCS6WqP5kAdWS7Iq0l5Yib674030E%2B0V9TKF1858jBQBFDdKvc3NqlDMXBHdRSJALd%2F07uBsdmkkwk1kjIcD86sBru0J1t7Il1N%2B47w9GqvRBoSa0cYAQXfCJke%2F8BnhbIWfdjyKkO%2Bh0xxSBC%2FvIV3YxQ2lLVvU4bMELB%2FW3ptrl0uj0S%2FlEfR5vuYDas73oxhrpohBUjSg8IJIG%2BgeIG1rk4YXcbvu6vWB%2F86AthHHkz%2BzjTgSksd%2FEvp2GAFXDS3MVM8JKZLWGWekfEZHEfiPqPz5E4bWPn9JCfC%2FxoemZ80fIFuj7b%2Bw0g7t1TL2dqAyXK3q%2BbgGlwm4%2BwQ9KObLRJH4ErAzymYiaOsVeIuCWYLxajoCsWL0270YutdSBnp1HFnLne6v4m92j18NQKwvLcgzJ5fnhgc1qpjj6ivkLuVWpF0rSoQMwr6fXxgY6pgG0O6Tx0PVawry6%2BhaFlgH9LELil2VfiMfnhjfZYLxNCjvkyzAp9%2BUeQ0JxBE07isp4rJaGZwp%2B%2Bz%2BZbxecbRk1mlrbrESA1gCkYGXMb9YHogNkzEjTc07H4x57cy5I7TzvVvFHh2lCp7U%2FHJUFS%2FhJ0muZaZ30Rm6y3hxz0F3ttdMObruwFaGQ9dnPRZ2%2Fccxp5WD%2FpTzU%2BCTi3pmit69ghYV7HnLZ&X-Amz-Signature=8ccf4d3c4d9c4e1ea8e105ee29a2da51cc795494a430c36a93e59c9e4cd6f7b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EGWVB6G%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5omdfEdbhYzZ0vik9urlRxAXi0Iz%2FO2G5viqcz2oKKAIhAJu0ikUGSJvzrGjKJJwAlrEqXWxWkmC1PKhACI73uq16KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV8MYVUds%2B%2FXnvogcq3AMHzz9Dj%2BjSGhtsyONqbR38mc%2FBaKxi9iQCE70SK73AIHETaSGshtuCX2tOicJN2OZNYVIqN1ShybXitkNbCFclHOBk5bMpcGfF6WwJ5VlvyvcbUQuefdFY3fBMlG2Kv%2FPU6pAhoCZubR6bMwkHgJ%2F0r8KGiKfSxLXa6Sh1UcGNDZLy1xOKUWqvyEAGYyd7Z9zgSNwzU%2Fk0kOm6MRRU0qAcJ2Q7XJJHcnX7TRK%2BVimsI%2FUYeubETOxQijI2uCyK9DXCPX85tt7AbpZO95TBLPyTTbSGkscgcnrDlNQe%2BfxniF6Gn%2B2lBDCV%2FPss8rBVLEWuYyfP68kK8F82L%2BS0L3stYUFErHjHMIQebM3dOKhiY4nmZ%2BdTg%2FPZugKSFgQ%2BczmGCrLR21dhr1v9P9GNDkGn5IUinuRXNHUpguq%2FbqmN0m8U5ruCZISyY0YX1vNglP%2FovPAqqEdH50SeUMqJRIW52aMNhWanQmhVIHnkTtG02R8sTnF7rMi4KnUyLI95xDfno5%2B02BBwyqe7j4q7NHoC%2BYbxYUThy4dDb4dIvhFUXBoyL6bQSBQV92DXCaeUw3J2lCP98LvfUpgXkJux9vWQUbAgOnBUh6Uw%2FX%2FCRA3NYg%2BtVa8lxjX7ahhUVzD6p9fGBjqkAeW3wKNlBKiQcWVNFnaBu8fNRSefiTWX8GkzBQtR1RrByngAGmSaOjdRetasWpn3fCx%2B0o3xZmMKJDuJD84cqO%2F5Yh6FzTg%2F2XAmQNlANLUyWUQsduCAmm8Eg%2F3JkafUjhUEj1OH%2FKfTJAPBGsWXGASuhdJdNIgmAFPwIl%2FWq2A3%2Ba7GEcwPBa%2Bgst0SHcO3Xk7r%2B3nA2DDXNuySzJ9QrF4k2Ypb&X-Amz-Signature=d47853392f841eb18524cc9104fb839ffd0ca51b76bf79c8063da3d85352b3df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVC72PZX%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcKJSPXZ6MGU1dTSliznx7w3rFz2NjMaTciQDxSWgPsAiARwcXzRuENDTkHUp7tUVQNlnByPKCn6SFuxelY6gMAFyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeUZBM8MyOlKnQrE6KtwDoXWK2FehU3fNavx5JUJssCl1DrHvNfdlhC2XqaPg5KVwt7GB1oRSewLOKpgrvFslu5VAaY%2FLvoJNZif%2FgtnBa0zAxZJe6d%2FYqNHYKhawWewarS7o0oBT00hv1LcMjSyS6cZJHaDION8617QOyl7PU1GkpYIbrBnA2y4HYZRIuRL5QKVVsePQMEt6oLsb3hrix%2FGxh03FGbYQnyZPuix4GH40LLYegjceiIhHNault%2FckNAQulDW6L09TSJnmf5XZMWgwcP6Tb8pqt5%2BQvlPJ0Cb0lPfIwsANfBc%2Fs35QtVR4BXdZR7aTg8KtGSFV72A0tmKy20ca%2FDXH6jNSNgckH2jlnFUJmasFaX7lSdihcfnRbvgmD2Fb9Q46Vtc2bBGTqCm%2F%2Bs58Y2oQZMtSrYEh96fu9b6tnWH92Er2dZ8MZ28B5vI6jEc40fssXreZkAGIcDr%2F4guBXVqhpMTbvPouGLoKFtvO5hFKvr3Ksp1OChwusztiGnnWULzJkWvGWkb7R4XxLPHVavUuiaI41SBvskblDgqIaepJpNCTmMeUtYm2tOtHLSw6wLtkKwWMda3oxOH0TzA2pYYIkb9kplkmLtaL50H7ns72OEsF5%2B7zqRLs%2BA5UoR%2BEVWkN%2BOEwrajXxgY6pgGRAD0fk%2F2dQE39FPu%2FlPAYEgeHBm7NLz8ix2Dg0JA3fBVF6dcD6kIeiRghWH7IQqDmjrZbeYaHHNR07%2B3DoFRrGX%2F4DvHaYAFXu%2BwiY1i%2BFmADM10LJZzQWURtCDyfqZaHCaWoIlrmrnPIcaD6cU7jlw%2BuIdJ32OkwG1hidUaNSYwaIwwyUNOipAfUZa%2FTalVwr9XQjCcQidcAy4%2BkKHzjWp68plkL&X-Amz-Signature=bc5e714f02cd2e921eb45ba9acad3384cfd84c89659d98f7719754dcefa9dd86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOHYMJGA%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKkzxUBAaf17wOG9Rp1Q4%2FFByMlQ3dl2f9f69dX3HZSAiEAwxDVLBlAk6O%2BRndLYWXxQoH94daBxAev8pzdqNyfo40qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3EHKbcTdh0WHWQ8SrcA%2BgLccyjMc4130bhUHDR81yewAx%2BsNEcEpDlc0%2BEhhGObFoGWE8gZ3qPntWC%2B7frFWRDhgGOZMlM4HAB%2BxVheTtjCdfFNZ4HMSk08YNPiNvLi0LrD9PojyMfEFRyEwDJLadD%2FicWKdhUMKjh0C6QgTBIEZVS6wrn7lu%2BR2waDEJ3vAe0%2FQcJzDFhet8d837uqUtKelBKARCnNEtaVDk8yJZI7rs2%2F%2BvM8swjxFvCnPBaRiyBNxbVN2ib1uzAbbXsk46q3jGOIn%2BK33d0LcnNZ%2F%2FFrS%2BvLHbiAR9t9Ke7tKFHG2kGlJnzSiiuw2vG8flptfOmBlDfjgtymY3bTENJIPbd512kkc6FK9oAoYbMQyZnNwbdeIxMA5BylnWXGtLr7tRZPBGzrHMH%2BW5bX1jalSHlQ%2FIaV1opvZ8qupA1HVTBQvjJmoSW4yT5SeZBGpjuCv5BK7URBb9eXWCK8CnA0963qpJRQ6GFyt%2F0mKdsUHoRV2PxHtRrlNU48qYi7ioz2XfRzK1dgofuQEV5ywu9Hab0d0%2BJkC8%2FlOV15xjZ2JtpxRKW32wBPXXoUsuNnHsj1KgcZ8W30T093fLeXnbeGov7FT0gpFrlwrxBFDpq4gl3d6tO9QDlo3enPPuhMKuo18YGOqUBckStl05nD%2Fh4rczijpTDrNBlqB6VohD%2BQQ993vO4kokLGEOu4X5P4zqRz%2BhFEOoyVrx%2F%2BSQmH73L5dvwc0LnKN7hQq8tLgQozubRPEblD%2FH25YgV0ldyrjmzHp1gIhMMlB2cXGRqUXtswEh7Tvvnku898ua3dnweA3NyjsLYjxc%2FVKEnqOwAu6nvQRAn84x1xWFBeyCJspuFe95aE2L3g6Ee4wX0&X-Amz-Signature=cb9356c5c0b88167de4575bb28035c5385e453113be3dc731184385383b7b2dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

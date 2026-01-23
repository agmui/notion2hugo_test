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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSWK44S4%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDRd%2Bn1TD1SwqfWkSFaMqyp17ljirCEZLpbKjR8GGwqKgIhAMgQEFD84AvHPvcmjQpG%2BHhmkZI%2BnreIYQC%2Byqp96k%2BqKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2BtVliEsatKLXla8q3APJMLwQAm9xSeGSekzj0ObyOwq%2FUHjN5Y37LoG62fwKx%2FwPDePOMn5dgofdGVBJjC8dXt1tcrn1He%2FiRUXRBgAWKdGThBQr1UFKUrETxOOxBMLRR4OJtFDubHGYvmpY7VhHJA8i6%2BWgLV3Q5dGmaID%2BCllIG0ekemREnGZ2wzf2TXqm9SHcuQonma49JqDxbvOHSTcUKidVRKkJGJcvqiweZaNW4peR7olhMRancUvzieWlovw%2FctiUAUQMYl5F0nuO8mi6%2B7z5BKfJRmG6zPNBPGya96OqbbMjmlvLevv%2BA6jnUURGaZm4VkcHioGqaLOKKwmyysF06XT1ZfLBnLjHJiBQZb0JreOmZVX4l83v09WiazKmmzX993k%2Fgjz6S4IQDh0irs12dfp7LMHsMZ7MC%2BRqip8fjQmwzZtymnvGOma0FRw9kp1KqdfWPUku7lzZ4JAn1KZFfguLC78wN82qRYtrmaNQmio0Yhs%2BAAdysR6Ig4qsjwgWMJObmGo81IDMjLxyBlPGoQvtRR1rhsKXSrVTSK1%2FhzygF7V0vqrVP8%2FLBTsXj0yIkqzsJ%2F2T3Wq1j9qnF2i5jJow59pKYTHKS9xJRbXRBQAu6UT9g3tWQeI%2Bnu2OBBX915X4NjCtisvLBjqkASjOsD4yCx4PB35qswFdNgV8no2Fn9sw3%2BE3jTeO7onMcwl3r4Lh0o4xdb2Z3Rq%2BxjRHhvjnwIFt6sLU5JF8gVQaJeDk%2FMJvQZjCzscWAl9TgW%2BbUxLFXBd%2FB4dq1Sb20WFyCjhjhB%2BAS%2FS2Dj01efKft9bIzcW9aOvb82n5pXwABpLZtbXxdgZ7ZuF%2Blx7X7HTuFYat1xpCJwT%2F4wO1Wj8VDy0h&X-Amz-Signature=569c0d11b9386d2c1c012e7be91ee5b31364e7c523c7df788f1900ae296c43d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6B5B4O2%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDUw068sbg4af7SiNiIphajNvkji9b1sK%2FxAEqALH77LgIgGQ5b3E105ErK%2FsDDWRcGvxCHsV3K%2FYfL%2FuTjQkW2UbwqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfjafLB9vWl8PbIPSrcA%2BkTreKPqRSl7WiV3qX61KAi%2FVQpiy3%2Bbh10rRivVuDy1nReRrfc0aUAVHzNF5fMNzxbApkW5rgGUX2tMS7L7K8IL0cHNsX3z%2B1ZYfLGilp7cvMly%2FzhXVjEVuOgZtJQXPU4ZBHF35%2BUpIRMe7tGBBxcng%2BU7hx3%2FTexSLC4R%2BBo5l%2FLLdHOIEVqiEvxgiDmn4UeFdZpFAfb%2BkqYN%2BBE%2Fur2eFSuRQ9H2bobLjaK48G%2FDATao5DsLlQaXUXSZ27zS%2BFIqdOz3lAVcqSCMGPOTRffoAvlYwR25mBur5lDS4pt6lQGSqcMJEgxhbYhpy1IwDhKMjt1mPowdNI4cnTFbIi9yB9gDgyexYGXVRJh6G5rvxWFG648xJRjqyxUTja7wM1rOYzqUzXJHCsSmh7FKXKDbnEypV1pLIXArqux0h43rwBw5Qk6VSMKtz%2BHpXKozVlXCrlc7UkRKtYGef1LI1%2BXUcmeF4PFapaCdrx9P%2FFcq3M9bAsqZUdmXQpUE9Vm%2F78CjLoLvxKxCO9jBBNg0TIvwzrze%2BWQrjxpOPVlp6lh25damH9LoWEIdWTMbznhKghyt59oml16M9mVIVF0cfMR5C3BC%2BL8O14nF4BIQQB5LDcSBFO4TistqQX4MM6Ky8sGOqUB%2BnqdRtBplonpzVb8iCNqOwCMtqwr37H5Ov%2Fxsi%2B3fgcTXbH4GpjPFZPCAn8xQionhIQ973zVJZlPOxoWpGkFoglsSWoWAJO35dmz2RoQkCq7OJH2gMW4ojskhXzhrbWmZbY7OCUbmDlZCf2DB8yMBLXF4JAagIC7tV59P5pqUjF%2BZ24Ywvkl5VvSoZVVII%2BCs3w9iSCmkiy27l341vts7lbo5weP&X-Amz-Signature=00ec06ce3c2ef3176e13e7069c15bbfa118a2253912c8ef103bfe456b0cceaca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXLZJ4C7%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIGmmkkgD5%2Bnvelqm84I5nZy5DLD2QmjzXma%2FszpRDsW0AiEAg990SVXCsw0I6jB2%2FcxQWVQSns2yk6LgbYaSJ%2FscYK8qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtQYOezsbGWw9g5XyrcA9ZG9QMbOy9K3Qqa%2Fc82oAjVP4nsjjPHw1iRUibO%2BkEekScc4%2BY1wLMtGAQ7c0hPgnCYmky835lAL%2Fet7TQ0kYsa%2FCzqW%2FQWWquUvyWYB4b%2FM9tVAQBWBpBsyolF1oyQhZJghnXNvtxnsnaBrFx0NF9k6YOg%2FdHLFa87RmZM8XOnoX7QK7bk9X%2BB5XahKUdfRVq1WBjVdpWSrpzRqKzpLQfC4AkBqwX9VIccTdvBLoge%2Fk9j4m8uV6SBmC%2FsFInkxsjzKQAk19NKV9h0XKttMc8JSUXtY3A1OBM51HDYB%2F%2FLsVuxU4DXL6Q7tpXTU%2BfsdPM65l0Xg8y6T3bKpIQD1VoCHi%2FdJWBL9X%2FmIS62JOx9dt%2FbZC3Se3lsMMXUED%2FSwG4MKIUXXly7CRPNL44IXkzhZ1Ezc1DISlm7ri3D71wp2RdLEz6%2B0twiKdpEo%2BM%2BgDud7nvE0MkdP%2F8V10KUaZPV9qdB4DUOn9Ebf1zoJ79nGnCg8o1sJGX69ZaeD6sqFJlufKmJorP9LQyewJjubyFg2ANUovwrdnkIpuZQ0q0M87N3p9sTg0POvjLCcShgyx7YULHS3BFIhAdxTuiok9FLMWf4keITMI8Qdyb6VixLdlyk%2F06jKO2FSHfAMMOKy8sGOqUBwtZ43SMiJO2A%2BK0G4R8nQ9%2F7PufdZR43SKpWPFMStTna9%2B2morrwY2cVn7rRQJ0Eh4bq6GLFDsWeaxJfMer1KFBLyxTnevE4Yc4hNOjj2SmRYz0SoPUTQiM659WzCmxSkp4H1h5cmeqHIVNYCmeHicNLUS80GhVXRnEXWx2H7eIVM%2FV6SWJF2FjGQsVNleQS0mllDPyNJzKJSMt%2BUBIfO9Rl7zFP&X-Amz-Signature=a6a0ebc65cb9b9dcf838796d1d99d968a4dbd589a1ab82ff6f7eabc18e350d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPGL6CX%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIE%2FzHlaXTJPDuEfhd1PKeTm9V4vx%2BaVVT77ZYJtapnpLAiEA%2FPE8zYAMGLWv8jjzDF0N8N%2F9sk3DLUWJpHBqAF9vKKoqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3pOuTEcV6jymqLIyrcA%2BZEkIUM0b1Gy21%2FiPdcmQbAF02nKPFplCkp8YL0v3HLJuTJZnxd9qrv4wbSK0u2vwklwT3p0hh%2BqFNXd44tHLFJAA8ebFsEjdY0wPHLue6kOu%2FRtCCrOBriYcTAy0VQsZz3Znt89hLxUP2GNhHCd22uyo7b%2B69YExWl%2B9E%2F65qcLDiwGHZYG%2BY3ZbbWtLzG%2FVB4dBZTtExxiPa9sWEyBlL4JqYlX%2B%2BNfiZdky1V6xFJTDujJWb73WUGrgYWS%2B%2F%2BGZfSJY7max%2FKhfpIyXY5%2BuUfgDw7Agsp%2BRR%2FRGlbz9AGGqlsGVH%2F42FJNkQgUnb5hP0sP0VjxMG3OxElmOnsoePwl3sImAIubtcWPOgpWUHuLsKBFQ0T72utgb3CbtIef36a7Jsdzv8FJHWK9SNUf43zPf6UWLSpBIk38EcPwhg009dSgxjNXex4KO3DfPK5XNjXE6cBfzBZZSlMADVLb6Xa6TG7rz%2B%2FoTpRj4vNyoIpmEYRJueoH2YUiFoa1hEb%2BFEVGV0tNU5%2B2G6P%2Bv5RcRqWHtZun7eIY2cgWRPfzxg8s28VaaIqgRbStsKF85IlDO5AWNKoPFr%2BDsdU6JGdFlHthEeonQKACXxxxHtEONji7LlTzkJEyXiSQuvLMJSLy8sGOqUByUfePgpkrTNjs5M10O30H1476VjPwgy6PAftj%2FaBpKZCl%2Fi%2F0hptxuFXRJ0shoigfpUoHje%2F7xakDxQOMnj3x3T6jiowz%2BqMRK1VDSV356Vt9ZCupGAhzpKpybQOZFwTMkLSVWOXbjfFtSWFKZ9yJ%2BXme5ohGGV%2FZo1rfHUmVyp7bv8MuEhvPBVh12o8jYMCKVLQNO%2FbNSbzwqu6L3GYWTZn9h9%2B&X-Amz-Signature=f5a497cbe0bb24862d42dd65ecc56e603b519e148ee8370ca6c3afbe0ef91135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

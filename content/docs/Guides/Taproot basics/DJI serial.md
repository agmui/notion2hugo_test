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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRGNDQC%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQD4RK5NPdyDEZK%2F0YXe4L5Ulg6R5EEOM39xjQssDbdP1gIhAIFtBsjhxN%2BQ3KQooDzo3mWNZV4hl5qKBO4gA6VdepwCKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4q0qMsa0CyHEkEkIq3APNiPvxDb36pnIWKC63ari%2FxwGwCjph02osyrG552T3iaZrq%2BKAEdIArYf5TwsnNFsOelFLTbq%2BFa5SNvxiFW6UV5e8Od32YrbdO8Ebb4X5GnlVG%2FypUKPEHiZlc6FImiCyojlMrTg4xHrfnVoBDVHg%2FjFUaDlrKm2d77meh%2BHTwXHRCUgcxfNW094i%2BAkwv59CvrYCxWKJLYuCJ2GHtgqA0amjVyvyBJYgGvKZ2Y%2FKdaeJBN0uUnTrNcWxrPOBYbdxpBEM%2BFJNDDutKzcsmfz76q5g%2BOLUxTt6fVhIKM%2BSZku%2FaKumB7h%2FLYqUAwm27U4wMtd6BBRbs5PNgHot%2BwVuMc3OZOsGctQnYLksW2%2FDMp6FY%2FETId1RTEXHFeV5%2FhCDIiHNQD%2FV63CWP7spRw5GJ1eJEouZA9dOCZIxg2ArMR%2FKl%2FrbkL%2FgAoM0fa8W754biOP6AKrjx2pvW2nNzGGIXVumr1lqrNbuoRnlTbVJ2gv4V7dqzzPKM%2BE6Ulv3xtTLwPM1Kmn%2BJqiRd0pkiuFchqM3pgRabR3g5A%2B077sG4PgJeSxFeoWfyQ18g4k%2BdKhlIKHW2hcHLusumUspdJ1oWMtn55oWm70GZ%2BCVfAbriAMUkAfnT4vNyFJN6zD07JzOBjqkAS5LivYcYURdB8pnlQMDuRrJqoXp4rV3uY94FNEoCnlAgIt8C3%2BiL454OhyljOyxXUpO3J5k2nSJOtEFhxOeMWljP63o2VFLkVKTZHZrmsFR3e2yJbvaG4ObJEegyrU8LVBsWw7V5jAtVVRVgd%2BN8HPXIpvznDrdGjFaKiDjO5kfCYi%2BR9oHccsWGueRsXJURQ3BsucNhzCh1K39kegrHowtkMlE&X-Amz-Signature=98cddd81bbf20754b5acb82953bbb7800c0e8d91daae2644c349545491aa0e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDXO7JC5%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCJHQwNKfRLfMdQ2nS2PIVjdF%2FpJWr91JgwikKxTfGCLQIgSIjcq%2BiqP1CYZDN2a%2F8ibm4KSs5wspdT5oQBeHxw9GYqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiB8jP4XikR6zXWTyrcA38z4MqiCtBNBmkrF8YjTYFHL7qRU7jIJSMc%2FPtVmEvK1378LxSvtMCWJdyQJ3J2uAFSPblxStuxa9bgOv%2FTzqi8123FQxokQEEtsKJAGnx9f3ppW2oc%2F7RORFUHBY1qzyPcZ58DwUyNwQOgaPIZwJTBtvMdkZpcNopDrevplkZvukk365VsfZHNp2SzXVzQpEWIVCUM6AYT0xk3tqRpLLaZ5uuUI7I11kIsyrJfBoeZqYTLV9Fqq1e6XLmzONm%2FxHf7Sb5bliBQRrmsOaSdsox0gDAt8L0fuKATalhs%2FXZI7Hhbxf4RfXHw%2BEpadKeNZtLgibh03iSmVdttdDpGyQQ8Omy9gYkw8PHGc5cENemLrYY%2Fg52jkQWqTFZbhNLvAAHhPEbIl6ZtJh8hcRDZCDmyBzrkN2tHtjV1n74kwIKl51zWzQ2aGJU2DGRWPwK035%2FB0TBqoISPbsT%2BJsdk%2B4iaJZV3R8q%2FdzIDFRRm79F025MKPKGOU8Vn05H1Xipi279MrAr6Gs4uWh5DdZ39oQNSaUW60QYTwZl%2FtnyopyiPCKRhccWJsSmMN5SAtaPV8gHcPBZaOstEKWEzn5E44dCEW4LlIRR3aC%2F2ivo61OyBPxXYw4lrnJ2ro4WRMN3snM4GOqUBTk1XTqDDm7izcbORZwaxOORTqjR1aiIj8cbssXjOYlWlg1AyANHEX1P8C2Z7a4LcQasCIV9NhZsU5p87qhrwSnNOB%2BHmJxO2tgw0SrYnqvuaTTHCqmRvr%2FmlgoAJsyqgi9AOdp9%2F4ZtF%2Bl1WhPi%2FDLaU2p4wcgduNPy7xF3dadR4VEZUxcNxAlSojfdUhZSAOm%2BbxfOWElatHQZpeywCMN8782CJ&X-Amz-Signature=0c3526eaa6923b3697ef97bd48c8dfeee7b396520f8d6d7271286a2ba9841f5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGXRVMSI%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCqZL0ZLaDEKUcPb45xqr%2F%2Fg0vPjyCCxsAavpUjn3JinQIgJemGu3AAXr2X9Jz1m58oqdHXCX4YBM7B9Nq8HeCnYtYqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWfOxS%2FIO4mTDoTwyrcA9cAHnI8D34qEIanAfLmd3BMDjNc7DctQEsa3U1asOnQOjXOOfH83feXLq8eYx0O%2F1OatBYiidGsX56X6jbQIE4Ms6nxdjASM%2BF976HgIHVHyWeUCfgOh%2Fmx86HGFzg1L%2BCHWShpKK%2F%2Fm%2B9xWlwTl9H8G0hAj8kvzgc3FjVuJOVAs4PZN0xnWqiS1R7%2FrQFBdTQkbuNFvgzuyg3IZZnrOPr3KGd5ekVNYwqcz3T3NhjLPIXCFIsHG02ICTN5SpDWl0l1%2FbdVB3G6ITey82vO53bmcAMHokEtm7VYyMEgjPVedobQeKUtJJI%2BoB93UQoR%2Fl1XTg5Z08khlGv31q8BHq6HUmy5%2FYCafYHRmiLL762X7hdJHz4330NLdVuB47EdhFPZyNk6er%2FlDJR4n5UkKM6lLUWUHA%2Bi9%2BDhs3sJ98eiCQp5%2F5AYaAXGeFWayz1sBbg3JBV%2Bq8m2JGgTMwgSisVhlGCswc55OznPuyDDCfNqluqvZZPpsu3wuQH0KFbYuDpWrpHoOm6LH7dfIWtE6LvES%2BoSX0tplBMgXgSVrURNjOep075DbarQxMJ6xVoygM9kwnLuD4Z78xhY0n%2B527q%2BfJ7V3YIKLsBr%2B3C%2FHPa3Oktj0WD%2BSXHjuAZYMOnsnM4GOqUBb0%2FTOdmUjvQF0%2Bgcmn1iSsoaKGDsQfB8YSo1XMHlYwq3Dv2jZ%2BaYwohkAQcWd%2BLqVI8yWiS4J%2Fcp4bPyq1Z2mZf5DPD05ZLAAzRgW%2B%2FD1VXMrMornBR%2FunoJh9GY4jHwCbThoKygl1zcVD2k7vk0o9TAa9IeWRWcM9H%2FtgfgLbwspl5A%2Bv5EFu2uibr0qOn0E4pE476wFRgHse9vAv6DpF%2B4sLqX&X-Amz-Signature=86f01c7eabe34f814c679a7b920ce4117066469efe959c4c6663f23a6bcd2630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRBF7H3A%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCwpErXpipaKY7MgXwmupRjr5AUGRw2SrQ%2BnbCFdNyaSgIgXe5dCAC6E0hP%2BcXe3EKl0WQGf6pUgVw4vTcupJz%2FLJ4qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKuVx7%2FA4XhTFkqhyrcA7XdG5zcJzEjJTdpb2spot%2FL8Cx1k8EF%2BuqRQyYLM%2FdyJ4AqsaL8%2FWSYpmS%2Bo9b%2BCvT14fnEotKiHFIld6pRkwDdoLUpzFJLhBfiZfaKgD6wT9%2B1Y8erEKnFM4hd%2B%2FgoN%2B7DsyGl6QEvpKwo35h4JQSKzeN6ia1Cl3kP6eOtqT2tnpVS7PEfPRCIMz7NHep2ms%2FFBAMOHmcVoocqllJX20aPN1vFq8BEma7A%2Fhk%2FpHjyhkc4C9Ad8XpEBRPRKZCQ3ps%2BFv%2BmWJjCmySt9nhOqZT1bVf1GAu0bFGQaeHimVXjHOMenIVFaKGLTRlXha4Cgfs4vO6RO65XKAMRxidfysPDfDMUTka%2FG6Cp8I7K8RioNI%2BsIQYK%2FPM9mna4OXBHqSqQAq24FnpNiU4Aop7b4DMkFfxL%2FPNFdYWqIss4Mrn17NO5aMb4oUrAzKxi%2BNf2owz0knMZta%2BOiDXNSaHvJdbpb6n%2BGvoppAg5z%2Fo3FJDeeR7huOpgg1e2iMUKERei9ffegjEEQQFAfouml4L%2F56%2BfX2Qf6bYQuvsP9PxM9QZD5kp6I39sClbzlfLmv%2FqTiQFzJQptHBevCnD8A9O%2BtWMIQMXO2jwDh6uCc4woVJYRF%2F1cdusd9Vj3P6JEMM3tnM4GOqUB3NXdxCB9HO6T%2BC6QM4NU0Xer8OHCXQLwTvv4LyE9DXjefBeWvCIeazCADi659KMzSqU3Zrt47f74vxzzR8Q%2Fo0%2BSQcjGYnk2fEgT6H%2BMPKGljscYYqBmrbcUkqGbQnk1ZSe1ohP7DU2Pq%2FUUlwnrI66RtqaRp8UFcmv17fRLbK18ORoLEtmpQoLDrm4yg2cBP9JdcYULFdqWel%2F4zCDE9kxTCK4k&X-Amz-Signature=41d9c4a251d6cd63e22b95c28920ac50443d6d6fdb4e39548f773e90aebef505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

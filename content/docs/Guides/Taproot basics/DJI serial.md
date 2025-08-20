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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQZ6R6DH%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICi2nAEpdc8Jqu3jRPPrRfGKCBA%2F4J%2FAUHkWYSxFRRAuAiEA2XlFxvb8kiHfC3LidAB1maGqD69hh9Hv%2B2RzaX1c7BYqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABAGYQyN0QV1zDVFSrcA9F3gcjjjOZpOtrWRDxfErCNTuOJLyvIvNyLuSqXfswBhT84ZbHzc%2FyXQkLPuryMpPhuCrAoYQrJDGm4Hd%2BE9RxmPN0fuzxIJ7WGaZO8oUjb47Wxf9UbSkhpgVZzk2MvzdQPek0GrvylhgLE4%2FCl7D2uUU0pqs6yzJmIuqdrx4BXhsHw7vkScD%2BNqAaDNbOwpyu4SQqwuQq1qXhAAUwB1sGrRA7S3JgcDNCNl1fSrUDVqrJnr7SrOyJPBu1KxS58dEl5X97OILE4%2B1Vp7ro5na5fRVryv7Qu2Q%2FZXD5tl%2FQ3OSo9wYt3rmAWQbuW8AkFTdesunO%2FPzxyVXlmxoe9LU5kXt2SXJSqx8vY3YDSwYQK53drSxrW%2FvFQx8E4Ti3GZYZp5oJlG4WPtaeUqI%2Bs7pCQiAfyCoK%2BQzfA3%2FqBZll2Vn3rm%2BlUDNHpolJhdVA30EFjHJ7a6fcqUWR3eR7WsjOr2gtE8dMNCYDyXwixyiLtsegggIEkK1ttNT%2B4YiKCrwSStBwueUsAfDse9vHocVmh8%2BJyolO2%2FQJUIRD3poYEp6kUNr2Ld3%2BAGtQctf0oAJCX8jgnTi2OG0xk%2Ff1IyGjod4iUPl6nCNWZx9l8x3dh2KOlb3Lf%2BVKthqNcMOf3lcUGOqUB1PiM7EFlW408Ptv9MPhj729o%2FA0h2XIn6vORgcPcjn6JAx52uk9bMMgQ6EljcHP1iEZ6nDXMbZEkarY1udgC2NlQyJG%2BT1%2BHFDHK2srnS6KUob17riR0%2FF3WyB9hSJ7lZ%2FQGerJT8v%2FhKlXo0ZDHGaJ7Mw%2F3E0PjfxoNU4d2K1TNW341WrHiVltthhPJlwcJgdP%2BQn9O8eEVl27UHxZpuQiAH3bW&X-Amz-Signature=06a3f405e3891819ba3e47209d490d1747a034aba981a2a8956425740ea1f44b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWBW3SYU%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0vHKNeGupg0T9P%2FBjTuKCbVEJXzySt6TuRX8F5JKiXAIgLoZX1dVhewR8wm9Fc3Zh4a7EY0yp4SspQqeyrgT1xqoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFwiCLWYYxW%2Bs50WyrcAwXGHwbBUTd1d7u9vNXtirjKr1R9cCxcutD6ktj5HujUq5uzM6gQdqk%2FqwGK5dPbMOO2MyAWcaIeHBFyeYneXR2ETUoC7btv9aKHXex5omgF78EUOywA546fwXpM5HDxQMyflEHJxMf9eakzaFlYlQkk%2BfRKlZKuPpXgO8pJ%2BDU1mwo%2BUV%2BGdnS5g5967DpfqZHcfm5RlUqEeiGlZvJwQOsTUW%2F10cIpTyeCjSJuMf%2BBEzdobNSkyOdjckt9rnFuQiWGEI3SayuS%2FJIDr3zc%2BIV5m%2FKikH91P0SlFoccaVzP0pV49ixdARdCXIEkUXhnyrgON9Yd9MSrtjs8vvcgAgoYPsAtgWJcibOcISjEQotf6jJ3DAi5hjgAVp1eCsOGUxEfT850KvcToHIvp2xBvwyD2eVqnivw0rut4WxYIw05blISH74g%2BNG8NdSIhl7mOBpoBwjd1FXGIKjK23ReC%2Fv%2FS5h2Wp8nOjc1BInBN9NNiXltwRY8Aihj4QGlvuXlcTk19WUuCDRmA2W0v%2FMb%2BoTLFqYV1YRAcQfbI6z7cEduI8Nn38cbnR30mJ8pxpj77RcogmWMOEuMpp2UHy3lK6mFx0QnnSLtzWvoQi7%2BGqasCKTdQkLg4%2FEEbOSVMMP3lcUGOqUBQxsgDEBBwKVQz9jsjpwh1J8t26CLGEA0MJ%2FD%2FiRI6P4NBDGyv99jbGOuvL1F4aIkYY92JjRTiNIitbMlC7P0DmJEo9Kyfh4KB5rL%2BgnzcGyG67YsnGtt57BHrONGCIsfSJkMQ2LoeEo8Mgq1i3wiE4bhl7%2FiVo67039gFBZU0ipiIzK2q9NZrniWHnYlifXBoQ3SbdS2o6Z%2B3Cz%2BFnoxONr4IrqM&X-Amz-Signature=f1fbafb4690edf47abafd4e30355986ca92a246cc80cfefbb4e6f6274c02de1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZA7UW2I%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk27jHKlkMMiae6HXw1nxZeoM%2F5dyiZ0hR%2Bfu6YKrxIwIhAIXMvx3oMtybpwO27eAYhjEoO5zuMGdfUUKySLCzcAaJKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCblnRw%2BB5KCTvZ%2FMq3AP6tbSDLZtRRGtrfAWoiPqQHP8dOlUwJ0PzMN4eJGL0gSvOhcC6ML7LoNbiaDvmP33TMigN5VRMzfk9cwujj5GFCSncO0J2K19tRB7m4TIQ9P5EHnHYaCTcCMY9C80avw99%2Fw7%2FXU8E1Gaj4UJkpnb9nkpq%2BSrbyarKstXTmQzVHuRJfG6SWuyxEDmgM%2BTqWwCFszDJmNfPIBPdtOZOH%2FBuawP0EdR9Nttm5oHbvXQqWgPnKWjbZO0UtLS2FWsgDFLxkx8M7PcFPAalhGZ30IjtVK86FROg0l2gJF8e0U2ZIFwmDt%2BsvVgbIDEKqzS6PZ2ytOF8nnuZ1r51ROFtmIsFWkuXygA9EupP6T5kodGBmkULX1sovKOOwTQQ4hfOLZpw%2Fm28JICQpwlEkgTwv39YQ%2FQA5WKSBiw68ZT5PDrO0Ctm6DZLk5JIO1vac4J67xmB0%2BGD3%2FCb31WDjcbzdoC9Zyr%2BkjJv2Jwmby1QXwHowWX1%2Fes2XW%2BbL3ewcmPXPoqJ9Ds8kUvxC3YEk9bARSvYBvtRPXwC0oEa6pAVnrSYBPwcY5Rna7oU4EmjnU49N01nId0f0tFZIvYrQuOh5Z3NKQbd1WaGgShGOE1kQzOx2iN8wLKzYdRz6501bDDE95XFBjqkASku7XpZwJUkHRkuMICRqLACa54sN19OY6f0jSateMTxPvNPbwo%2Biu8ICfjwIAmKnHlxpdR42TEeUlu%2BzSrCcl8%2FUcSDoXvU8jbYPS%2BHq9bw1BwhoCzWYy%2Fi%2F66CZKaN%2F8OHaLKJn5Usi%2FDR3s9AwK9jlFoNR9bH0HWCwKE6tgphBo%2BUeVfLKJHm1J84WKMoKgoW3%2B2RTujfjAMWzPTyG9QK9VHY&X-Amz-Signature=7d16e5b8412065913672e09951fe8e05ff110f99a8d331d4f685620e8ebeeb87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPFI7IA5%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDctpmyVqfEbivzzka57UvzjZePYdIhHhLGXSVU9GYlLgIhAOprrn0EEla0EDtwNStE7CkKBuRae0dhu3Klq1vqU8iLKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuiFhJ%2BvXTywjTuwoq3AOz749A9R6MJ4uJG12EepOjEkFr%2FM50faL0QQjQXfx%2Fdo0qYZ6u9fVnEyxRoaoqSowFyd9jdFr%2BNPXnEClEcJ43eV6%2B9t0XWD9lU9HQhCLRzZ%2FYaGNQjcXiQa7Sxhd8O2VFvngN2DvBL%2F8QtqUv4NRstB93JHDIxBPimuAQ6FWzN9oSaECX%2B%2Ft1DsXlQdR0ZMVYHF0tDZR0BiD93khJKQrn5epaAcH3tVeXokGMbaRqQxaIu0BQitWXE0P4pYKfwXmDDQnSY%2BjuAeFS%2FsonAoBnQEcUA0hXva1Jk5vbSHQ1OsVZBDuph%2FSNZuUWqBXWqzLBOkruGIloF00ZGiRJ0tqaVvjVoBuoHMofunFuTIIMARSKczf4eiT59mL7t4uiphZjIMFqoRTAf8pVEdT6qWbvrDqofIMCsib4a4sucpauAJWX4FxrXT%2FYAsNT9flFzMig9Jad%2Fbh4LEHUcUd2QGoGyFGuvgm%2FVkzI6cfpFl2N%2FqqYAq90Ou8iP8C5RtB3vCYaLIsEpmzd9TnfPPVU8ooGSXQC88Fel1eWfX9UJ1agXEaCH7Qw9jKvSr1gSSHmLWdLJ5E9YtTGRIFSIcXSXvxH%2FqvIw4NowaqSDihOlm4jekFVynFjn%2BDuOe6gVDDr%2BJXFBjqkAYs2jiTwtCjV6Nt7FnK%2FFwYIY6ANwdZh8%2FwmgbW%2BOLvKfNAJJtBnhKp7NtcQyKqBxAaRLNzMHv6aU6vCoFhnYg8KQiGAg560vgJvJF67A8ZCrZR9SNyJcQXkBbT2%2FXga8syAFOWiL7oOsxGQhNF2IcesFrSVoSll20NdyMakkjNCmf9zQq8RwbE%2Fbwz6puh2Uo6u0EobqDTJHH5hn4XOWXhIAPYg&X-Amz-Signature=330c2942a0c15e6a22647768084e462c4a9c124009126529aa010ed50d92af35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

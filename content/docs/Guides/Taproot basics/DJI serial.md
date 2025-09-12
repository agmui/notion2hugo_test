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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGK3IHY%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx6hV8jg40tJ9TfAUmxmAx2FAx%2FULUp55%2FUdbwWRI4sAiBH0HFGPXeaUaR4EmomkXOuoKUOZYH8XLR4WGI09bxgZir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMbb%2BhDEi%2BK2vLbDtiKtwDJxYLE0cvbAeiktgFyqqqqzo2JpYEQZNkYjh6oYtgb6BGqbg7V1W2EuTOryigOzVtn%2FR1vwCk4eU1JzO9m5SwCKrkEd5VFUecITi3Ys1NH%2FH%2By%2B5Ka6vTVC4duk3E4gCVIM5nuE8kQkhPft7d1ID1RLyrCf2Cz2i4G9FHhB7voyswP9SOMre8nVHDGxunOBSgAGgJBBoYCRObj281OFUpQz8Rq65FSDB7aRXzioafOokeqRX5m6%2BfKawDmZLie9JkqB3kJgAw6VxWblvLJjGgycPMJ3P4QQOgk9hXZ%2FF4qy8H7tf5QqXhisi1Juo7Zymn4Qgcg5mvBz%2FvWGGJcRCJ0YShkU%2FlE4MNleoSsU9ovIxInb%2FKsTvFxfGk9oXAUkxnnLkBgH3bveA0hoKZseV95pOyaOneCWNaXGgXbZuIkuRQD2XBYXnV2biv0b7BA7zyBJod1gnqn4meP0uJMcEa9%2FUF6m3HCfoydfrCBeSzSNPYL7LVBaRqjrsigXYeA1iXufT0PYginB6S8o2ebT%2Bk0FzbC5INVEOX%2FYoYoxcGoQp0hHiQRfDXeXMBnGBpkMQVgjwjBNZYcrZG5FQ1YUOd3S%2BcN%2Ft6zhROxBbW%2FHAA1H6WdtcRLRox7UO6Mu4w8NCNxgY6pgEPNMDLGAoUEhINu9ckPbzbkam%2FYRvZRMmYyuKZeJHv%2BRncAOgvGSKICdqGwIG9SiQN5ymcySBel9OIAj19h42X%2F23NYcn%2FAOklu8p8rY7LUFwRc21fRvUuXeNidWySgTcfH31hF9LJGiUezPokAdQ5OqAzoGnZ0jnwhcatrkT2kc0wrIQd2%2FYLfG1Ch5P17%2FMLjlFJkub5wq56ys1%2FtcttRH38nR6V&X-Amz-Signature=b75070bc600ef5e61793217bb8be7be04d5fc74691f7cb4a92b47f2d3c8f2ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IBYZT5D%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEi0qBgty3Adi1wIUs9m6%2FSGBfRWuw4t5K1tEZEG%2B9V4AiEA%2Fat0kc7jhpf6ZKwVP5sp1R9z2Ozk5Pd%2FCnntcqXbLc4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDF%2BqAKw5G4B0jI43ECrcA%2BvZOGNrTCOd5AgWMu4lTWnUCQvHVaOw9DJhmH7e47Uk2V6mL9D39MN9abpQIUPz5whx7p%2FK%2FKbfKDAHiHi4v%2F2Xq1%2BAP%2FOASlsjHa3FMaG2qCEHg78I3nNtftaDp%2FsV%2FCmucXkuSFj56dvjzUR%2FDcMckRrKbJRuEwtAFbnk7ZSWDy2bDaeBJVBWYnS5Xz25M%2FoMh8frZWqT4msvUPnU%2FmwiVJ8HDCgBe0LLS00ZnsCzhpVWb4f5ueprIIOyT10i1xXA72F%2BA9XkWnHMhyg2F4R9QMSStUbxDqANb6jKyKfnv6PUQTVzvJ5YaXVR%2F2NP5fSHIGLUpJLIylQTiZZ%2FCTSaS3O5ZUtZKfqCGyZ%2F6Pvz9x2RIdOc3K4IWrJDsofTAiCFuLfHn65HMRWltdGl%2BbgAoW7Ybd1uAi6pqJr3Wy6iqRzUvbNBS%2FNjKZiU2n8l8Tp%2FbTRCtQwT0337Nn%2FT1t2sPWwtaXfsA63x%2BLY%2FgZ%2BRS6D3pfLdTo7F6EDa6uXfkw0TxmWHBa%2FaccGbmt3n2em1JelrQSNO7wL7H%2BjH5ZIGtCVjBo2xAbqAeGd66Kv5uh1bRe6G57atcBj98cZabWATy60BnvednGE4%2FvwStpqlTAMKoGIdrn03Csx7MLvQjcYGOqUBV1prjh%2FvH9CRNP%2BQpSa%2BmN9Xja6FuDBOZ5OEFxO5JRIKzk13rBojHECWQXA4mNHFqO1qr3R6kbgFxa%2B0bpNlxX6yi6w089%2B7PGamYm2E3pIHuPpecAF8eqxpm7O3wntPLKFd1mgwMFWmmBl2VWdOBreB%2BJAgYwF7Z%2Bpw0mGkVrTQtWnP0e72KROgMh9gKQX1mT6QAm5dTIW32%2Bqtuo3%2Fg%2BgmmrSJ&X-Amz-Signature=81ad1268d30e3475c5be96a03a51e0da29ad094f7b19ccf6d4f9cb880fb1ed04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SWAGQSE%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYoldKM9gMB5MZ2p%2Fu5ZijJx%2BFY2%2B6CoDwIOekUm8m%2FAiEA4gGNeiajMf2xpN%2FY77yMYJsH1eG6cQgT3K3wPhfkQq0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDEywWpNPY9lBo3lHUCrcAzqrRgnYB5OvPnTK1pQNH0%2FsfChkEKrdoddiVQBhtGmvKSNa%2BVidbEqw4PsFyglvzXtHYMVIqwe9z%2BQnLIyj%2Fh5SHXrEIV47nvEOIS15vF0SMX1A9lM2cct90ThPIBg6AsAgDodh9ujoZLvGk66OR3mKiLKCd1wgjv2aDH%2BGhs3ZJj2tYEJqnQ66bZ8nDTD87Z%2FpQy3FKXUtbJDoFxoWuksITNZd8SJ4l%2BIfrgPlaoBxt7OiM5F%2B4wzWQs%2BxrTAzut5yhh8%2FSUc2ao3%2FwnLWImI5hi48wjOrjWXwpR1vwh%2BfLqOrqGrWIl6YNSy0%2B5ZX0Sf1WXsckvxR1cPZ2aUIJR3og%2FivC6tFjYmWygRvvMrBbJxg6Jvnq%2Bypw0%2FeGv%2Ft0xKEGpm%2FF1Co7V4kJLepZwnmF14U%2BGDf25kUfHNPjjOOJw8814ROutJaQEyBum7gl99%2FsRTm01CKtXEKCyLhMzxJo6cxNO%2BNOJMuYdZr9ZCG5s3U8%2FZ13zV8rfuByO1NQYoG02hMndXG95e8UmGNYfm3o7mOMjpoAAie0w8sHAMRk%2F006ciJxM%2F2xsy8S0P%2BA5Mc0vqiSjScG%2Bx6FcrgeDsow%2FhTLNuv%2Bd3CARU7xeIYIxX1Onu8fChVPqQrMMHQjcYGOqUBtt67UF7ctlSYHaIuby%2FW9vC1ZvjXA%2BR3NdGzLP89M6KUGLuDicKKInEuStCckAzE6O%2BliuBuwPdzlhja8lzdLYFr%2F%2BpRwCDY5Haz%2FNAAh2JP0d%2BrjYPqPNHBHlWEJu%2BPgI7ifgQestIQQAK0pUUldUIiEIL6g2ax5WAsbKHMqNJCNHkjHpiqIXEqfHh0YRTHEnWuuKi7M84%2Fdf8%2Fha4dpxe0xKpV&X-Amz-Signature=bdf73d1a5805fdfd6ecb3f41c9a861b119e96d9224d5d90ca00744e5aaa5e309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RRJVLDP%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXBKgCdAEo%2FUDhUZV914VMeZcmw5lq%2BQY6IMbM0DbGEAiAga2OG1E44D2eTiFmip9r4A7%2B0Xw2ReNmemUvDJWO3lyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMqYOtNt7M4RJ74S0NKtwD20TLYEJW2bNcTl1X%2FjY921SVMIAAl8%2F2QEMWfQ1GSY8yYEliWz%2B1TgxEChwhSNLJC4peLwD6kXgcJu%2BmmtviFGAnOSX0wkguwDcPC5NvxUQ2PFJnH2MsWGh%2BMa8gIr7WZrzwjTH3tUkPkSqdqYB5%2BUC0ARZ2w2SkW93jKpRQFkE4INGNt7lZW7oaOVdvz%2F9Juh1rH5qnUeybQXlCntxiaE9tggxhKTr0HkkYmGS%2FuU5zy78qk8ITpGYPtke%2BrqmuMUbxl2B4nzzCmB4lxByeIzItEBV1BHOZnMzfaZg1XchgL2yPg2Pk4sMI9SK6NyvcgeU8fPxTXc1xMxq2WL3f0XzVOL9rYC2Jw8gK3kpa49XD%2FysVyazmbXSTBeJF7ogyPKSq4vGo2P2e%2FEmObcxCIqkKrV8k%2B%2F4x%2BhQpFOufdirajwLgQhXj5BiUbO4RnMSmnqqItJEj3d5ioiXdQy6Rq6f6aJySygdlPEMk7SmPmv2nJY2AKc4RnazA9aXS0fHl%2BVUFCVAtHOCyZg%2FwQypnL3ReOFGuBl1CrJh8pDalbxFhhHpqaNcgbtt7KpcuprtB%2BkRRRf232DHQMTNl6%2F%2BBGemeIkkLiGGDMfiKNmZTDp8FcsYP%2FM%2BIYg6Hg6QwtdGNxgY6pgH%2BdymMw8gipzw9Py4dGsj%2FiBbm%2FB%2FzSo1I6LJII9ixyFSeY%2FmsMz6xijeav4u1tdzvw2WJ0rCZleg9vq7xPqllfo92FMMrVsO%2BD4HWvC0RCCbM134l5TvYf89ml%2B0gICb5Yhy9HDdL%2FWyyNdc8LI7AGikfs52CVopWYroj7xOJymfO7AyLXc1CC%2FPP6onmXb9KeGgsk4tNAph0dAGjErHQOeplhjvl&X-Amz-Signature=cd92af3dba5baa2b904d9674c83e9c7b4d05fdbd8b20ed5eac3e8a664e92d314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E6ZF344%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdIDhfWagoJjhyXOhmrIN9iwEih%2BO0aUQ6gHVPttxHzAiEAzFTVipsYMoVtu0tCoBBGp6T5ECl9D5fI7Q8kGPXFNu8q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNdB9LN1uYzf2rSrlircAzPFSC3%2BPt3kadSCbhtx%2F%2FGjiCvzPAA%2B5smf4PEB4bmiDV7IZNMApu9%2FrCnZDk20Vy26ZsjTT%2F0DBLt3IaL7%2Fn%2B2m0hto%2FAy6EuaKAWmEEpaqqRHMfMYXc%2Fa1eKQW4kKs%2BeiyR11yQoHNgybwzRDPoM%2BJDKqOE41Z%2B%2FlGqGZPMKT3cV6NtnjSou1ukpih6ARlraGfn%2Bny0kotZYyp6%2FTfzzoYtaNr7DW2rwxDjsVXLJFkKMYCn%2BdoS5Wr2yAOUxOHUTsULp4dlmMGY3%2BdcK8MPSv8YJE4oepu19glG4OCDE3LqW8zzpI83UQZHK%2FT9K%2F5XHeDq420qh8BW0GUfOJrrfEGPfYsoUxp%2BM0xO6q%2FFJhbypPqK67Gyc47gyr4W7jwxkVKZxUdOJIK1p83MzLrohsp7WPbfDULGaoDUtmSAAdUuCdBSL%2FU%2FXJIVTKIFYtZvd2UtuP1nDfPwHn99K5wvF52C%2BRtMGGSQ%2Fy2%2B3pyjwCMnYVR1Ccrf06nnjkKp2EtERuv%2FC7ikpahl8O4uwnBh4E2YY0enTIFhRb5LcQY%2FJ58fTraecKnV0otdoGh%2BFUwOfMcOd5uCWO6wnZl9puJnOxRY0zt2Us%2F9eeqPBPxO3fdPDNOhEjhON8foRiMITw5ccGOqUBFb%2BVUJmBe5r26OUXk8CjmcT6wjxuTqwJmbJQr5SbtsqH7%2FNvJXce06Vy3MMbdJbEVgKpg0R6ToQugiqEUmimo%2FL7psZ4rVV8eCCjn2QusHnMxlkAF1EC8ekV99qDubV%2FEpkNLKN9eW6iyjUa0r8YWiJJ80qu%2Flg5ohltAAPkeXkMeJgFOgzGbSK0XY5IH9nqCqB8qn8zh2b556kJ3kijgYilndKY&X-Amz-Signature=bb8b6a2aba14ce9fcb3f214c7748068417251f9dd9e7474f88b6ba9900062f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PBKRAA%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYBChiEKG7G5FUOuakOJU3q54Cl%2BYTvl7IgdqtKbYJ5gIgVV0Ib4LUJ4Od%2BSzyX6Q0wDvPIP5CX7DaIZnPR41nVA4q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDHBwiOSigN7JDBX6WSrcA%2FRBUdgJG55QlR3vmUMrXC3REuaB3BYYdH3Ght%2FjnFIgdGwzABe1uwzmdlbRfKkkLTXvmeoHSpZtJTd1jJyemVVGnU95Q128RoMrKkJ9Mp7yPBBAcKwpfNOj2p9IWfb8wntVVKTNE2KUDhR22Z5QACGOSu%2B%2BGowXnGRVvZysr00uxMLSXnZZBdLZn%2Fap4EYVnpkdceVrudUN9djRjXZQ%2BPBUihAAsSOvH5Ddv3IU9XuApk7jnHfg2gkffO720%2FGVXU0pRBcNbKpLqEpwIYklrKMdp5TwKrLR2Gdbsr6FX0DNxV7rA9w3%2Fgp7BSsdeS6kj1a3vtJYrvq1EX7xiP8Ke0xyGI7uxW2Znlgkb5zPBUsLJjT9utXFpH5C%2FNfhBq6HoFYndA38sSRGwd6Fu%2BneYO%2FVEcHbM0kmpWczw8V7wSV57IUiiAc2AuZNOndPC7YPfuQ3fE%2BujJ%2FJyZ7hUhwADu1M3gkVftAtkLUOTtzWyqg2Al42ejLZRiD4B5cV9UV0M096RGOx4TgSQ%2F%2F%2FOm8SclHuL8Ae2RWamA9046pWtWC13i8xESrLjLjQIgvhjCeUCGUevb80rDa8MZ2j2wN9EuSvn41uneYBdKi5xu3cn1IrWEArEjKfKPQr%2F6QFMJbw5ccGOqUB8uq%2Bd6O10gcKPXQbB290KFP4k%2B30RXH18RK%2FgE%2FUi3K1dNYqNI5FGVMQ02wGflZyK4mubtObmJloi6iUyUBDUKaKifD8Nv%2BOs7qsCFyT9HhXwlYWvP78fz3m29YWTTjp9iG1sD1gS6N%2FYEiG4aStBn%2FxOXDaM4XxKlETDrl%2Bml1gSVcWfMlaqF6eTIJb8r0O3QLVMYnzpPTOYcq3Ti9RVq8nWqeM&X-Amz-Signature=cb6dcf2de3c16e42a360ad17879c5469de8190f7b8f80f8eaf4ea703b414308e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646Y6TD5A%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTNc8F19frIWfFFBfXfTGvRWT2QCvqxQRF%2FdEu76iDvAiBTjcaXgxdhOujcvnunRow1ZQ7gUiYkJg83b%2Bqw70kcYir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMInuAzsKQzRdxDwsRKtwDZxG0m%2FF%2Fkn%2B8IFthJjVdKsAY7EGSxGMEZAJuNEeqpPYmQxZHLb%2F%2FGF5%2BAUHfaF7jsLkOFVr2UQsP%2BO1%2FWHljnghFD9pwLBRIhy0jQM7H2k5oTXytb7VcSmohFXINERgYyN5KTQTTYr6IyQ3DtZ1FpxvDnUuB8Z2UTpoWt%2FAWydNSYJixNE3i0F3729ht8lgMyHk2hdyQIxLoO96R3s%2FDc4iRh0R8OXgtqbdBw1rqr%2BpRAkNrqtktJ7hmJ8oKzyzIArRzJUYZgFQbadLEfqy8KIIB0JJ9Lsa8HY0xaQLEYBbzbj3mjfUzuc5lxIwjJuAF72qMaJB0VRVj2lf3ZFXTyp%2BFOcRNNwFJhJp1LgCan9LWMaI4%2BWPAZkLqmK3gk8DiZ0qIvMktYgU3a1fc6myhtCjHvwlgzxAYFLVeG1NRjfLY1ZpiPJr7O1uT7Uol%2BM9RH5XFvNicVOrRiJhMKA%2BRJQvj6kdd9jVCTz1%2BPGIQho19B6WPcRE7mvOvommIbMtyGJMP4eR5DQN%2F%2FU%2B0tGM4J1r%2FI7kmQUzrd%2FAonaslPfyqkyX3OlYq9XTh8WfZGshwmRTOa2avFO8Vbix%2F13uBFV8co96amFtPifZA8FEwYraUE0Mh3So0CYwAupEwyO%2FlxwY6pgGD1n%2FBP%2FHc2av3GisZ3nucoiAjiMGkfsCosFa%2BfYf6uMGNuMG3YbuoosaeU9Qjp6cx%2FxnRtDfa1sBliz8yLVlDwg9OCki4Kt0GCc8oroPYA11YsqQCys4w%2FQ%2BJhkRrNbIoV3SInv2MokvyOjId5lHJyR8g%2BeEIqmSA3l7fl2gIVsBbHXT%2FsN25R6vobZVfP%2B%2BZB1LGrADUEakTaCeAgnVttQTkHsVo&X-Amz-Signature=55f17ec6d38729b86efcad553cf403fa78b70e6ee106997d0e815e58bc16d2b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NZAE5Y4%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICTUaLo3uUbLcSnB37z7qKUt0BEMmauUOM4SMqDt3BriAiEA3Po01AEL7bimTUeCJni5zWC%2FN0ZKRkfYjpLtO3YGwS0q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLqz%2F29sr98U5FKv6CrcA0RQ%2FMBtdk%2BbYhrIaVDTSqCrAwxioW6fvIPuVXP5w71N85KIuJqG0WUsXrm%2Fj3aOMb%2BQT4P0VWxIvOy%2Bul5YSKGQu7yTR%2FB2g2ODR55VHIxmYjiEuMp8KAz0f4FjPB0JsSis%2BOTVzplquc96lCz4zGDpKcNW7S02RUGuS5%2B63BBpFADCUuQfssp6jOSAcuHt%2FA9MhhQbbDKod7JiRynvmfynCc6K%2FZixkgCI5bWVu7fIRcCtiHzxRTjJRNYWjtnrevdCfpFUFxQ9ltayy1Q8ZrRl9d%2BKYvEzVM4JqD%2FWWvCl%2Fc8g6TK9nneIcEWrZ7gafHgC5Y43atXDZ6XpvPK16SHFhP2onqFtQCRfPelLGt5bAL8%2FMDizE%2B4ZP1XO5PmgD9wHClycK4UI3y4htUT76joA2gq2laiwzoxT8R%2BYyU205eDN%2F3yUjjnTA7trq6PefpmLOKaP%2FjedjCc1IeSN1hUJxJVsgZMGKP73GVy3hmHBpMHCdTF402QEDLRpw1MwzZKdjHHO%2B8E7LPEgEZLZ7pi%2BtFdKld%2BCoOCmzHbIdyVoZtu3JFo4nKYsM4cP4kQlNKbrvctpXYkiHeik%2FpVfavcu%2Br8VXNiFJ41CLTnUh2FQLshkmRLxILsfML6ZMIrv5ccGOqUBCzns%2BSa%2BszsS59Xh%2Fqcv5esrr16deD8CroXRfMXGTKDpJxwltWNNiBs9nynUvNeJkJ%2B5pPP9ppVMLlcGvK%2FpOYs1YXdsn068U3U8oCdK5hLZUUdEORtd5fovq0F1srWVdisK4dbKKoBzkFgQjmVePt5JhYsW6dwHLaIS4RSANNgGsPBjQqupLO59A3icliYUE59Q0zyLcU3W%2F6WY%2FiIhy%2BGD2qoq&X-Amz-Signature=3d53054cbf6cd907fd2773765b1425417341ccb67e5db1f526ebc2ecde90a84b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

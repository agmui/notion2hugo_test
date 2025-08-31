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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC7CQT6A%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7%2BOrqtvSbYz72El01csDpFE8Iy41fyo4ojmuLjYl1fgIhAJfGZQVQH0%2BUZ63w%2BRebYSo1k39zcOurVVtBy9Gqwpl%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9aUhZJev%2BnS7fOBIq3AMqaJHr2%2B8rH6HVgOj6Icitl9immPxjlUISOIt0ndxd5SMwHRRVMTJ0AjoX1zizNCDPeS6pcuPEgToQ6cYOXSz2iibFoL7qF13gNX0jzU069KJ5gece0sZOjRJ8j%2BaLq85HzEL7MnvUtlW26HK0GLAWTAfnEuyVz2sFQNFwRujMsaBo45KY4rgClam0lAXXamqe6qSKtF2rKF6lrCWjhajAngEILx9diyMG5gxcXFnqriOhX3yBrPlMQYsoALp1HBvMNLXpr6f4FB1uoeXs2Ovw%2B%2FTujYLzL6yaMz9C1JRCwZrhReJEhkbgAWVGZLmJAeeTQmA8I6GqcNrKN0tApzy3B0N1zrRi6aBLyrhQuq3YD6nNAEZGVfLHLJiPHfSRbi5kwjIy%2FJ7SbOyCwJmDAMT21qYYeEdGaZCEabOfKGM5FEugFYhtnqiAnNgyPhPKID%2BE2tWBrUFOEZ9xinmM9KRZKSndQN9EkCyg9kq3r2ng9jFeIlJBjqxG5ZJn%2FB8D8IdvLMizBG1d3eClPJ5r8H%2FnFPix2Hbs9Zp9vkjXn3fku98nVtl90o2EgQgMUnMOWTwMke6Zr%2BGDyw7fuowEiP%2BbP8Oji2aA5AAd3KMIYp3ojytNMDPbFYeYXDXbYDC9ns7FBjqkAWdPDtYkglDDTUGX6kvNC2jyixjybM2%2B3bA0He0DOenuNXKxPPLrD2mvDqRwERMZGvEOVL%2BAYMmP1KyEDMeTu1IFiQ9Nw4gwX8bLKO8vI0BpgCFmqXtBOt5grZiUpOB86%2FGmZxrwPw0JYGtWG9dEIVCzse8C0ZtlSvjUhHELLlHa6CCHds2AdNEnZe2m%2F%2FaTivnlMTHB%2FfanY%2B7yQ021kJPia5n5&X-Amz-Signature=2db3b124ca3c8b8cb028db23edb51a0d208582c94f80fcdff506696b4a092474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KP6YDTQ%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICFEY8HbmTZHN3Q9Uo1YJ0T1bzZj2sULH9YsPm%2BqEa94AiAbbU7gyaQsv6LoRcHx9g4dQ9BfvP0XlX9iir7MB2ZuEiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMntv7dnFVihaeJ8g2KtwD1vpFeC68imkQnCPv0xSTp3yCiSorS%2FSAhb0o4jJ6hZgjIPvRqxy7N7v3FsaIAv5%2FPa8CoMWBXaVkmiZSihig1Jc7UkMCv%2BYdoqcJ0yw%2Fv10qoGEV9RgUD2VdHgETj1s2ioCO9Hcy1YxPMA22bg6wEnVVBjFMqoUGfMSmowGwclMvMvOP8oFFAB9LCQZkb92qGhq3eEf0hFDDWLg5IgdzmMwZFMwWk0lkLr4HhqbwhMLyfoxpNyfpMmr%2FbD9BWnSUZvilk1tajQo%2FKIdtKRleT6ybHpXsTXoH2gYwFXEz%2FxVNt1VtKY7g0ZRZIovr3s2YmWmrMchNU%2FRbqdjdrg66T%2Fde2glLOxe%2FLCLHgGchuqUtoyC9t2z%2Bc2l1LkmsKgArTsFuohC9uksiR%2B5x%2FPZvj%2BFVU4s1sEsG6PBCdG2h0d%2FshhN7h2g2SjIDw4PfRX0eTpprI5EgCZ5bLWFZryN8%2FsU%2FgCLsv7bjLgtMCxA%2FSO4MAq16ei9IPaziBVDBYti57C92HhdHcwXFyt5fvSnBDYvB%2BFy2BOGJNtRap1FCltftvPSDFw%2BFyJBtrv%2FOH3876Mn7GTN%2FyhtDvT7L1EXYjk0JRNzSRFQhHHpdmJoY04FFKFWtP3uh%2Bn1xWKIwpp7OxQY6pgFG7BAkIhnkEgkP266GTYMXUMsB9tqTLiEaMO2InigjnDKIsyqIOMAzkYN2Gqo4QoLUzGBYU4y19X52r63EroY8%2B22az6VF18EayhclnaQiRE7j7GgSX5x56pKNAUd5%2FzgSFoTpNPTaRSlT57XODnbjScXJhrS9aPWc5gZ%2BeG6rCJboH9EzIPk3S8UWkUR9ioe0luqhXQqIUvGbCgGWduLPndP6rokQ&X-Amz-Signature=766ddb4ff6a753e7cab1652c6e7021f6418ae7e97588c103b73ba473f0ca57c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTT6O6UZ%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU8JaMMbfL5v%2BaZVnbrzT3iAsdxiaynePPnjd9lUH4yAIhALXOqHiko5OgSSJlQRg5ZLkd3QI6oNldNIs2XBspecqIKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmebTaXKqqIWsQZ8sq3AOhFtxw8EtERzqdF0bV9C9aLAOb6R9KuCfAdbqTMMR9K%2Bb1JrcB9gYg1vfV1YKKICBHKNJzVe2l5uuy24SWsjxmL%2B9W47N1QU7ZViMrvoYczF%2FJhKnZXUd0TsO9JZbElVM6AgErxguRFRXIAsvg29yxd%2FhPjKKoaCkb4rub38mkjqIzmfEKmfL0Ur1bTEcZ3Z%2FiKPMfqetQX7R8sT5HjSli3OYlekQ5OhA6kJVjVHo24wdOL6RozRIs2wcFDssizszwcQYLODSiIGKmt%2F2grsB%2FAIm5J9qLgMYebFzXRI%2B8k4M9LCCUuwmOqpByYXBcCvcHLxVE2Ws61HQzmT0tBG%2FUdxZegbYIjF5Vb6hbGeBED9SbFwNahgYyMsBsA3SIr%2B58USCaCvMLJxROf4WnfX1FHk3CDqO%2Fqr4a71%2B4llLruVGDEUhmrO0eonkYCzgQ4d8xJsEm%2FxreC9b1ZknVIeRrO%2F5euld7ox6NPLRebpnxjCWc1tv9qsjsZ%2BuT5NDVPtbBtvl7eHheheQOwMxAcKe6j0eTcFiwQ%2BLHTqIvUbB7Bib0B9nF67%2BLRJV122MlWjCTImvRkI0UA30B6%2F35LZtzP5llxmqm9VVubdBiah3Nzjr7ECw1j9Ws8%2BhYEjDwns7FBjqkAYBQ74ASUOrkyZiilSfczwr13jL7rnlUrH29mdrYxLYGhksTYxeJCG2UnB5MsGRZYEDzlTOH1YdihF9iuIzSkbxS8Dkrxum8Pq3Ie12LMuOKtt6k%2FtQz5osXbGuXNxo1nvYMzpNqAsFOMgB9rt093OsLwMfrPyfF8%2Fk0HD53kRH%2BSpbHDUnjarK4x0lyXbL5YHch0eXH1xGPuvz6dj619OyEoVgh&X-Amz-Signature=a8e388c485a8908ae1d56ffafc6c446cdb0f5a4f1b6ab862a0467d377ff2107d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4L44D2S%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS3vHGpFiGosjWTrOhLqqO3Xz5IOWfnJwH9Qln1ZMzKAIhAKPEHSsiHAfp0kftn28EumDknZ9NalcCh%2FLUxjY46OwaKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypqFhqrfxsNk60F94q3AOKzRb5rUSzv%2FM3xUCWdlguf5vBzy3JofDsJiDmc4E56%2F2v%2B26vtOA4GXcBvVMl946sNtG77urHIBf8hJQ0ImwsG63ec%2F0pAqDt3mB33Sz3P3NIjdnCE9dsy28W7N1l5EZJ1%2BLNH8lwEhV%2Bao3NGs4N42N6H3w1iGkUXLWFVyx15pgtz7%2FqHfPq%2BJs5XDoATmybECgmz6i%2Fzk3J%2F2720UH2lO%2F4AKjs4c014zm7q9xaozEpV09yxfvrzYWAGdsHZD8%2FGd2QycjCPHQ9OmD4sYm4elga1CcT4xLCG1KfJqHtmwKdDH5aXRmxCqHzXEFGKgMwOpGblYifWc6WdpxDnnfIvPyY1MhDYQm9XiatG1TVigygFicdoMJXf9UnZs5hygjDOWdcSDh3QEHSrh9d3SRLEUBxwjTvYT%2BIU0LOZ%2FdinW0w1woI8rApI2L4o32EWuvYA6Nj7eXU4rXLAe5JkBdBfaMX7Ul9FdrUhKrRktP4lq4T9nphvDkU0%2B0lfg1S2CatVC3l5sJqeNf4fC6iNPy%2FlRndcMHJ9WCSciw0Q3%2B1FvM%2FilHSIxjGwUv%2FINmgVv2J%2BUeWy6lERPxkXTnYUayRcRpG5i7yUVqW2v1cmDnJvhiVEWPRI9pkajgAezCTn87FBjqkAQQd2eUPe7gdqNkpYuma%2BR5QgdTEJ%2FgR0wH452i0pF%2BoYYy6wdg5%2FejOdZjbroUjU8dSj9x91PILyIOxqkgwg%2FUjKldxQwpPP3xQhIOGyeEeODDssCUm5PgqzcAv8lOBix%2Bpb04rVcSxp6l3ghqUHGSCcTu0Apwrsi8MT0OeamglK%2BzeexiHuuaPLGVp7aE1essZu8xGMnDDRlWOPMpTQlfDpicu&X-Amz-Signature=6954c7f28399c472bb5498d85d0cef3899a3f7bccb470bf07fce046a0bcdf69c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

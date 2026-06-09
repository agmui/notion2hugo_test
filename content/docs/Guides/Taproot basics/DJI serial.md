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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGGUTJSI%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwzAoGzCp%2Fm1hDNCTQw%2FLSkEXCsfHsw3%2BOnOOFiCMKuQIgY5ILbrAX7H5kJvunxcAgqxVv8g7nkkySKsqZBOTR%2FbUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEJddzermlYEfyefSrcA1PFWaJONYy8%2BmQ6o9fCpgsJKaPspjtd%2BHv0QH09PAU%2ByLAjpLyn92jgYnnkB8NNj2UQVDPBWSWPVaCpMLA1TseatV5mtbyyCnh3gaOm1z1SrKJktefVJYadB2jvTV9PbDkLpwykv98yWfjg%2FtUrRoKRtgu5TIN1kL0CWDZvkwXDwBq2DyJaPgYtHpQ95X2DO1s%2BGiWUeDrAUzA99Vw%2FDo1bmVbEZsfFuAsIZAlgl7k2Lfy%2B2vvXxMPK3DSiotvdIfTfuwjq0LMjdtfOe1fGhh6yJpIsF5yTk33VhyKkQrhktUjMg84E6Pr1pBv%2BK0vWJ5dZQtLs%2FX09B%2BGsbx43MF%2B9rCT5a1iQPVERlpHdDnlri7CBOpz8P7hpHiYO%2FC4TGRpQsiKk3hPHee4%2Bq2ZezEMzFmJ3noWXjBpWaQOqjsTEjz8swuo9xTx8ud172uqEyKNeSrIsd6F56pSM0XTrQ%2Fs1ioxGagp9GTUlAX82oCh1T2n9NRBprQniWgrr6DsaxGz%2FhCaXtA3GJiiUvyyLtCPcLSM5FiF2wQNJGb8d68Y5OWQZiSEoBA1QZVyMDNZ%2BL5PeB7dDROOo2nj7d9gK1vOa8PdpSU7o%2FZDDSpd2a6h6UwB0DphekCTpfKxTMLSHntEGOqUBEYLUKt8PeDfI0%2BCisG96wfRuLrzHch2aVb7Fm5G0y4EuZh9DYQl6dfS7TaUZQP5U2Z8oynYU6pcX1hli515WDKowTdZYirlyh86lncuqqKTxUsEmrCMzy203M%2BwTZ27NsTBV8K1NNA89V%2B4968TBHBBKCpiuLF3GyERrHEw5sKvq7kSUD%2BNniA316EifP8SF%2BseIECbBpgagG7iw4fyRBinzx8zK&X-Amz-Signature=a0c9d8be1df3b6615fe63abd2f016891589056291fd4924dffd1d91d9fd8cd39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3HYO3BZ%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc2z6U31hQrf4BNKaJ8pDnZMUj1xpV8X7pmnTTuI7aKAIgXcIuYsHruzLmw%2FwkQ7ywBqsDo8kDKzEVGVwV9rkVoMgqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGyBetXw%2BB7G5JyhCrcAxNQeuoheIOajiQgwjvLpj1mNuhBnBf6SGFh2Uy28PNaQcARCxbdf7xz1kmTaVCX%2BoASmHUR6Y5MH6tThTUTD0W774MQF3wesreIJYNP%2F%2Bq8KqDpLtW3aV2CGOD%2FHfVQw6S%2FJJK0%2FpqaG2djmOU%2F4OgqeSIFR%2FUXdSKDck2KDy13z1OtwAIHUx59RpxLJTeBrVmA4lUGlMHcKnPfVHX5M1oZaC8o%2Fu514Wv%2BnsMwIg1fVnMy3kIFTWcMixpw%2FIEDNikeHljTV5AiB2cpOw5yWN4K1lyz5uYfl3q0GF5xHk18yuerx7vlB0Il%2F0H6EgKstMhNuzJ9T4lIo%2FR%2FNHygNjoNepwWPLwb5%2BdcDoGSWFQlSFD6YJ1p52P44NiO1J%2B0FXcK6dCpi4ak6BATBxosZK1B8CSHOk0%2BxkSfjYTfJOKqx7MBfXRFM56cnfqbIYRyw3E4kDtBXB32KB6ZZrdKIUPJIHYt%2B57x9qF4oRUqj2V3Fk2cCKw1%2FbQxqAGS7Ny5F0L9mUq03IKeacKkNrUi%2BOyO0Fb8hnIrrZ1F9hMMzfyMqZNC2HLcpSGNC4ESBcT3YK6Jda7F9RSz9VNUaUcwJUq2sZIekNT57fHibnkRgWDwlKzUtFvFcUSgwIQuMPCFntEGOqUBZCp%2BIM6NkQ3aBaacdndRoJ%2FVdgj5S%2BeBLJrm1NNk11%2Bgj5YLBRwN9VedHRjcMeNedcp%2BssurlxEj51hDcDI4tdzpyxbvGXzZAwTyYO8n%2BDiRyoMJKXJh5eU4DuG9OZYGmUk8cxOMXzU1zxDmAF2w8lK%2B10r4ItVsK09iY%2BcIEB69CaExpTMLa1%2BLGNtqPNB2pOYrx8s2HeINsB69FQeMhnbJP6gy&X-Amz-Signature=39e3a9a1376a2c8d1956624848edebd595862f5f89602e1bf8f58c57bc905c8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNZJDZ6D%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENr%2BVXk61Dvynic7OiWqaCWiXBFl9cMFnDwAcVyLa%2FDAiAZaZNphvQODrqSvR9%2F%2F9iqvgM2XuRd1rhhiTO3W7mMHSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMra2d1sDP9ItK1EmZKtwDI30Ef%2B93LG9PdgB4ISIoiXpph%2BxqlSkgS%2FzeBYenXOsNFY5X%2FZYTtMa1l%2F17bHOPsuHlcGnS9CP%2FSjYAhklYQmMITPCR30rKWkv%2BblaI3xzgZKGAItmfzuNh4tA3LD8H4HQ57O2yNvsNrBibb%2F%2BCVK1skTkUHr6Oh7R77u%2BGfI5BL7TUTDhfXCwUsWHnErXvcoS4EYRzKYTk77e6FDUuBUFw0XBX7QZE5MPxY7f5s4oCx4TRhrcP673xXh9RDo3jA68s2xrxRr0OcB6lgRL4Vbi5la96VB0GckviUi10Iwb3MIiyYtfNdLNFhFuSWqdby%2F9eC9ZuAJCw6ZRXv2jHV6SPzHtkoELcHcu%2BE%2FSBSkADZrSfvGsOjEl9SF7X7oqQYkQmMzHkP6AS23unigr%2BGFxd11Kz6JB8qbuiFnlWqpRxmx13VOwkJjBzWs5Xn1zBoYo%2BoC3onnd4gqr44jOP7jaLZfifZDDPtL5hejVgK2mLeKqn6xJYhAk7IlBaqJizlky%2B%2FTz5u5samqGs%2Br3lBdrF%2BzJ35Y0lTgDxtwPyv%2FuNxrbY42%2BzHMwAkBsXdet97RyrRISFKJ8bvY12FGQkqQNv9Oy%2BAJFhiHBjooWdDJ7n2jFBTK2qleGOIrUwsoWe0QY6pgGNBwqENyFzIAvNnWnvCMqdy14rpwJJFdXgeYraS8xeTMDZQE%2BAqvlHC5B%2F2n6dCrlTBReL02CPfkvnVg5PPt3N33QlGeGqNdcWf7Dhyw0k1ZgW1lWNDgQPqci4QUxOAOmb1DsnrU8lRtg2gwxWoZtKQUzl7tv%2BDREbWoka6jEnikT5HePGKf%2BO6EDZ7mdnOCOn3a650joHc4M8DCBJYTYb8ijeRWLz&X-Amz-Signature=84537667e12b6c632ec4772109ab5cbc02e819c6ead63ecd39003adad0a3df00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644SS3CML%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpa0e%2FpqobwIErh8C64eZV%2BqH0eXtG%2FgaHR3XKgPG4JQIhAP1Ov2x2o%2FeXLGRI4P0JhLCyfMQ3S4nV2gRmqDXuirVHKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyekmbfYLVRWpJp7Wwq3AMKMcCrmaXan8jYCGHOpEULuvVU%2F0xoD%2B8loA2%2B35G4ccPmTQy%2B3dNFkuZn6A0ei0zFe80LbrTFjqW2M92eK2ZzXYw%2BYIoWaHCW7s5pqYzEf3su7yk9MFLzTnps5LtxqLOEin%2BDgylCdz9HfJo1JL3Y5XkbcDZQE4J2ryW9srYIoztIehAEwm8FxDw1aZ5fVbQ4j6%2Fw3Anh2tc%2BdchrC%2FUPts0UoVBULn0Tn7LGEuHvvpGKVZS9ARXaNruw9FdLCYAs7Tu1r0jrnGrErAyXQMtxc5Tz3Z3EOSxC0oiMJ2Qfu%2FHbALD9Dotzw6YlgRNtx4u1mfnuZ%2FU9OaS1UR%2BmeG1JV%2B%2B%2BGQuA2Gh0sz3cjHRaDde9QURkL%2F4LL9%2FwaemdOrytVVopdS8cCkaPB8EnI5%2FgmQuMfOhkDCxu%2FGJYJ2RKnjPnFbqJSlnnPdQxUNYbG47VSMizAjz0rzdiEru5DTehuhh0ziGXcXOtnsO7tfYlHP3o%2BwJYAap%2BryWY1I%2Br%2BwX43cfIzYdXbYodBxZttvz8mGHSaFxHnwjUK%2FD7kB9cPF1fubmAIsxQDn84QIwh%2Bt4YObtOR10U9nJVRw7ruuvv9Y%2FQZ%2BeJwnyRz8qAdJGreL%2FXaXBnbT%2FMHrOMpzCwhZ7RBjqkAXlZJpk%2BCyfebICFjekfjU%2FcrkLyuEFmW5JZqFjxEeME%2BDa1SP8GfXyLnBzz4fwwrU4wZlZTH3cX8LCas5%2FrfvKc6b%2Bk2GXCH%2FFnhATuBpjgj%2Fu2U5v0nl0vtFXWeO5CvFH%2B43M%2B38mjvQu5uCjEGRTzzMYTcpa7p8lTT%2FzmDskp7mLWJ0tBJTuNmevX0CKZ%2F%2B6zHCiqhJfz9bbJvcLNpTkHEN8U&X-Amz-Signature=0cb23972b98aa1aaa9afefbf510f00bb7f89ba9350f798615bfed6a0f009d232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BX4PYT%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAD9ltMk0HkZH4EQMHwLgoNO4ILo7WKYk775X6Xl%2BLaAiEAy2nSd9hCjo8S2vwSZZj5ql%2BitYpyyhPArEMSbVwbj3YqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWxEAgGb5H2kJo6fSrcA%2FbXAxexwl1Jyt9hGgfTfBCqRuSbJbgwhX6iNswt9aOlGRsVAhqTihQQA3PmiLCn2bfwWPkIGv%2FfPYvueH%2Bbzur9ZRBLIeZImxplwAKwGf9T3pU4goGEfH2wOtCgKbe%2FdLQm0JtKUjeBHbchrSCcv7chK8jv0QExWFfkM9PTx3fvVFZZiCqaVgPt%2BtRUS4hFxHGyhISSRkGsDRB7SQRDUwOusGeJKQPNxegy634FLLNwsfq3iHY8mdSj%2BZ4JOqC0vCTGkDmPq7l5RQDnt96WzdwhGT0k25lbJQ4yQO3ATMIiaZAZsoT3EFYEFtHQeTNRSscz1sUMCSXM7Fi6XuBSoE6R%2FQLtt8pn11HfcrCzzAD%2F6M8xz5meYVxFmSBoa5J6DKfNLJ1dH58ZpPpF0BJgqbD9G%2BaJGaF0sWc%2FuqdSu3CpPLko%2B1jlWi%2BBdXixXQrJhEr%2FNnrCwNVRILiJ9Rkg9LW2Y%2Bnts%2BI6N%2BIbcM79ECmo3HFBsF9iLYPnhY2XJpICS25dyuHNLhGp7sOCqvm4pH4Gt5snPn96Q11TuZPrZTuayNcbPuUp1wWt2f5LDiqLnvUtnzHEwI8s3rdfBk0RU8yzpbFGZW3gMcWoS%2Fj546NJAEtkvsAx7eHFjHt9MOysjcoGOqUBSaNjRm5zW%2F%2Bs0Mri%2B%2BpXK4wbU0DGQ6iVp4j7eA3vjR5IHKECnD4eqyu2zWvP7VZjcIJAKCZ69znFW%2B3Y1udkbM8TtBeM4m3NRQNGH9arV08bch1o8rtadC8bG4duFrd0BCeAstb3v6c7TSFgQ9xHs3VtidmW%2FjskSKTLWT1jZEv2QMj7lW0TgrI1oce%2BTxMEo2x5NoGxu8WN9D%2Bi6vVFWe6jpjKb&X-Amz-Signature=b98edb344bd0a7b02bc90646ff0861b7028847e63604439586022c67311a2063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBJPDHO7%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQevGFYuEiWP%2BkUwlgA8%2BS3zuD30B7eOGzu2fKcoGHAAiB1MU52Z%2BhPTgLDx9PX4B9u1aOAzkyII6rEgI4iZqs%2BtiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWbEARcxJyiHqtme2KtwDvZcPWEFaA6ck4iQ3OA1SvsuaBW3XbqdLnKae3RPEhimxMxfdm1zM1E88mrIHeH0NE8Lh919eqMsW5YQQ30Lk9nYvTRW6yJWXwbXjvZFxQKRF5WFyhIO7obEQsFSLNMKNiKB4FnIrREQvpcoYNS1dBKFKfBGxwIMk1c51VLZ2HL8cpCObLoF06mwuS%2FARgUERWND4av1Z6W0iqolOGVTbqxW%2BJyEYWecMNk%2B%2FqgDZVLjyFRzEpVW5%2FqWkEMgX1DHfM7TWLUcQBHJKjS8J39dBE8wFCXhgwdUfALx62nmivIImZMp%2BV1wfpWw%2FUUoETO3YCggSK52q0hj48Z3IYqFy8J2fCi8L%2FHFG0rzd5JFj7XdPJfYw5iM1iCx8GRXBPqMb2Bd5WPtpd9lle1BIEEmzH41VvTPjhKR6pfo%2FkPmZE3MilapYzOdgU1nEan62GvW1b6IAEezIMz9eyaskMWdTEUfGiuN7lrx1wTbwb1WRw9Wjs19xUXYpX6s4TqLKcNttppbrPKx2yB%2Fh1vg1PdvpCSS9Hlr6POaq8ZuKmR1pKJKFIraMWkc2xBTzVpasezf2lKCBl0x3yxw1JEUx2yypTLivHgeIGLzHmX5AUKLR2AvTBu4Z02X%2BeYcRMK4wt62NygY6pgH9XH3rcEG3uCMUQPsbEplq2faL1DqsKtho9Era4R9QHTop55vPQEGRhP4OdL6PsmcCanUeU504L1iMm0uz1bpjsl9LrKFtMZPIx72IUfJBBvwScZzjml3pLf2uCfo9AyfMLISJsFpZ%2Bd52rAD8xHqPb2z%2BD6tLxtpYEoAkODiMxBCl9HWuQlvX2uiuD%2BlNjchfQFYB0UvLpv06JGCwLjExeLMz1kR2&X-Amz-Signature=b376fe6ecccd9e99439b40d4b242ab62e94b07ad263cc41d98c8605374d49f7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXZD4DW%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkeos4s57FegVusxYHqm4iXl7d4ZwaSh8nnMyYCHtFSwIgd3y0A%2BQ08ClWR2DOfQ43WlXWUfT03fGpG3dXdBcnJ%2FkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMqsrdRrY48yygtOSrcAwtHNAuprMHw54IcjZonzsStHH8M43J1Y3WYShqj5Tz%2BgsQDZevKy8x%2BaQNts0CxpFGVPL9KM2zdkrTjVwAyqcFx5ZWuLokE%2BH8fj8dqfKdggGLHdK%2BUBtR%2FXba7P5PPZpuaivqPyDPrxTHgI4c5a6MzDiEyyUY1h1ddHoXb8JDHO2f6jZEVeDnotj1jfwjMGLbHDZHerG2SwKzFUjs2MR1W5Zr0pTrg4wNqCEh9Xq1tt91Ys5yfeENHETfXvRpVhoqmVxoRSL3fUSSPuadCRbenTAZ01wjWuBZMmu5Em75eeUSjl6bDlb%2BeZJCYgZ3sx2%2Bkk03HNdSm6gAPEq5KvJwDXT%2BXzPB2CaBpsknopa36r%2BEk9iZXMpnylTmwEEqidDQ%2FloZ1S1RGqcsNL4VyB9%2F6BpP1aBbn9fo7lvSr6zS71B3ay3UyZEIoRfMZaUmYteVxOLsWYgvrBFNcQH%2FmCoqwnCcSBNP60md7rF9mIxBQ60srqwBNFyvx%2BAEa13hwXboaHrkP8C%2BfYj95z2OPVxY%2FY0fcquGYm5FVcGZ8DMaPiamKLQOPXiSMHaw7t6htOCcltPJmlld4xYXV4x0aXIFRJCxc3cFMHk7Hn%2BWqO5DQ6GMB7kzPiaf24iVJMP%2BsjcoGOqUBbgRIrPwJkwYNTQH8i7dj43FpYvOyZkCna1eCaF5t%2FxVBpIS%2FxXwMUPGS4Z%2Fx%2FMHlM%2BEnoPC1ApikElqJII60NMXd9OLXCg%2BR7Rlm02ZX0y5S%2FGTwn2dYqLESu3xm%2Bq%2Fp%2F64vJt9xJzFvEzI%2B2Ldiq7R3aQiSmFD2VhPpBx55rgYm%2Bvu9brFS3icc%2FwDPBjG1800wVLnsaguvJfEPrXETzLR68yHa&X-Amz-Signature=6558c52886f80ba845621b5104d4f2247edb1239158914eb5d27bb0e992f7af8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47T5AJP%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ%2BKnm0g9xv3POds344tiHy3TKWyty71wLHCOYAU5QNQIhANba19%2BpHzRp3nTEPXqoElbhps2XWlWdMjey0L3UWWRtKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH8r9UI8v9b7IAYCIq3ANC%2BG%2F9Ucxa4GZknUVpLD9rlMmexIUm4A6PEsb34TGhysw1jHOUblMfzxbZ4e2jkCaOq2ZKUl0hjNGCTpegAhzW8MQ5%2FntIRBiNrzwuQ2ogjxlvrt4RWhulN11pTPkM4NTiS667gkEZaYCqOoYCfQ1o2dRkJ8xlLbc4Mupt6IStBWzOJRoa9nSWQjcDzl6a51PsZip9T4B3Z74xvA27mQwrkwQMp09WoIt0xj%2BVBBMeaKmYu8gHP8voZjl1d3Yv%2FWLrsrI%2FxATQlkhyqTOaxRoWvL5fCGRTDIP%2Fvwo9XTxwsZ00HtzE2Gg7sDoa5QUibA3JuPzZGfzVjnuT4qcyejklCKDJZ0Hb%2FaAdwwJcyjZ1py6uifvFlVcpSe9SD%2FEO7bTcMyZXaziGilo4efqkW%2FfuJ8r8fEsbTTo9LMfNHX%2Fwo%2BybndXqIh4BTeOKdWsGL4cALYx0Sc0oBylDaNO4JEukk2EOCOP4yJCt4BnAbQHa2chYtZ3pxbqGDKEM8kAQIdDkryoizEQfT265GMryDBWo8JvJ%2B4HAvBpnmcGgUGWOUcyUYNWZX%2BtQzY%2FuTtHL4xhlU3HqU2buFdSH3Uy5EFuQ1ENkLvy9Xx%2ByADfRBg7P%2FtnAm3wJiW0fomXj%2BjDErY3KBjqkAQZUx3Zgx2bd2P8LHpDHm09zduxyw1VoebAsbvrzTp4s1ep6erIqLSu9vqxIHrG1QEPOn4hQeMuwCg03kMRJli2TU4xeRaYHYTQ7m5%2FWonTvgB%2Fv8o%2BdcfjAF9Afw%2FrVhJw7U0zGy8EB1X21VhUONFSpDCdOuvnncBba%2B04roy%2BeVrv5lkqzlrtfRR4Hs5ucKuir7dQQUaibKmszNPxcg7OWiB00&X-Amz-Signature=644754d64a15a479cbbf05e39a4e08d252b0f109a3b24a7b3ef77aa05390b654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

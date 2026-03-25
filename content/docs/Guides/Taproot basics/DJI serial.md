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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAXN6DBM%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5JEBqKfJUIAFQvmoz%2FJZ2cUkr6wnrIa3rNPS88MYWxgIgRJWfhPt74eB2LshoEo21DsHuZS%2FmxcETtS7A0UmReloqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdY2CC3QMCUE5wB1SrcA7szQubcgHU64SGVuCtVM4cxeILDxujfazbZyRSj0WlPEArZ6NoAyVg3fYDLrxWU5fg319YpfC142fH4u%2BiqwhQ67TIalOdQTmYsgJVVycdT4uO2K2I0wkhAlfWB%2BDcTckeBWTGQrqRvDL%2BnaJ1mXVlFKguzCRgym0El04dYYQafG1%2FjrE4ff2ADoz0pdY8Q6XklxgCIYScwkqxohdDrv324WPESRviyMhOmPr5ZDc%2BmfQ2VpqBV6h8BZvfKrDnIVmOas8%2BoNPeE%2BLRW%2B69zT4fAN6XC%2B2wuZ%2FkxB2ghLfS0IKp8NnrnyyeK2%2BCZN%2FChxYt6yC%2FaAxUPeQy3FkrG6B%2Fs%2FqtTWnFJPkgeznVADoNiCQpFa5KviDLaK2qTxxahywGy%2Bg8dM%2BYpECljLIB4B4l14PnrZisOBpG9d82GAX3dSwH7NeDIH%2F4Fs1eQRlu1bD2zNYRoWnELae613UCiEFJ5MOIFWRTnxNP0BhxCtUx1PHBJsy%2FC8a6sFrUHYF5PolpS%2FH5BfZ1Vq5kimEe8ylyJN1DVm01KPXhwG1sNcShIswxuaetOTm8fvgCB%2BXgKTP%2F%2FMJyykOH7xlyh%2Bm%2FbqHz6dwj0g5NUErQPrT4Zcwty3XhCWC0pTn1kRSFtMIL1jM4GOqUBl6v6TGgj%2FfaYRXCfbC3cWxYqCXExls%2FcFkskH32GGKoZdvLSNb5rRukpHJgpMEML5UkvOZWs%2BkPToE7gUABtHlbQiwCL2zF50Ol3GhykUNVLxqU3%2Frz%2FvfKYidG1aRLuC02hmdWI77JMHbZV55LuyhItljppk%2FuNSFTb5HSXuGuAukxnvNoPSUW5b5qnFfgguddcftx0QGSf6ncfKlydqjLsTEWK&X-Amz-Signature=012dff77703e9186aaa2aff31a78182366b2f8bf5a184619f8374f2cae5fa9b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEIEMMWY%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEkPaxjQHUwxdbMogMDw5ntZ9r2CBCqcK7Bj6vvUivugIgGtmsH7rL8kToy4%2FUBpn%2B%2FqFuXnSijfrlpIMAEc%2FnsWcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYBI9Gf8bmp9097kCrcAw09RQXQ%2FuoGXQLVCVuPM4tFr1NyoGdBesAgt9K7IvjxJBWlErRIAE8rhpnwsbGz9Lt%2FfqQrktmvCvZjrBLVJtOHCUjX4JMoitgzro69U%2FgI3IfyNqPrKQmmxXxByaj%2FlCZAAAqRfxbb%2FWZaNNQYIkJuzekzXdNm6diQrZPj7DxmI9ReUMyNvWFX7hYMjG43nv4MqQmbU%2BB3PnSC8OoGiW0djlk1wsoExbp%2Fe69HRhRHT%2F3tv8sRusUESb3IXTSfCCBDWZ%2BjGP3NjZG442YqNMLru%2BgIV6hdh6LZmYdw4SDtvRg%2B%2BuvkEcOAZL4Ga0vjwut48xqhL3H0lxQoFIcvWC8gHYC2192%2FLtXqUZj17C6Z%2Bto34NLvshCUyseS52FeBa5AhVyF0CURLN8YP3o6VJXq9kLy7e8Ixm9EHdpaxxlXYEdJ0KMzFVCBa5KToWdGslyuShzEV1N369zRkPTIf48KSHD9jkd5eIA5BKxV1g9XV4%2Fg8LT9YFNyiuHRnAdqAdWMDTWZht6NFXXnoeI5n7RmmSTQmryodkZcSLdbn%2FeoL5rLPrtZZkMXWAsGjYnazn0zM1Axu6ksbVntOmP5wJWt%2BTmYMZpOIBPqypaGzfui6iD7g9Oxk4TxLmviMMD0jM4GOqUB41QAt%2FbcxF2H5S4zajUPtekQb6qMfH3HFStsXJLSnBX8Ck4%2F2n%2B%2B0WqfnRl6smXPNwgx9re9PJdRjJWeH7FAXGcF4CjMOs6wrvnCvrPyWDTzPE9HEn%2FH4v%2BAsXIAYkVAhyT2oXzVg2KeNF7LvM1IZvclPJj1dNfyzsWLCVsFoDyWdb%2BTyCuD0Oy%2BdEk42kKAVLPF7GdxnM1u6LNEXfyXYnv7Ykfp&X-Amz-Signature=7066ae2ab6e37ff7e26af073eab2dda385d77a114322021067faa410d5bd0eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YESKR7M6%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYPtpi5NatGgPtW1rtzeBVHobzFAWdkKoki0PS1b1c1AiAjg0MeZ0BSFxrKOjPwE3vS7bnCKy4MULkLcEBi0XS0dCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWfS%2BDJsWBbnpxdR9KtwD6Y%2BD0NyUg8t0GN6yEoyAtkgVHxDPpUggfFpxvWWHZFlsFBGDZl21KCor%2F2s7mjwuAdwHivnGHkJvZEH6M4DSj2VB4pNXzWYdrgvrEgUzRWMxbYdHPynXuYLhw1Xpu4zwNSradNJn1gblU1dzJEvbxzruPKDz1%2BlDO%2Bg5IzQehXcjf8Gb56wIJ4ov2jmqfpQsIsx45jDCWVwJkANvS8xQot4Dq1z1bdGx9EZJ7Fr2%2BiXsy59%2Bn36IY%2FJvt61E6KlCyyk9xR57%2B4dxN4%2FQCPbhzmfq8BJADuYgrEtF9lE5eWT3%2F6I4RiYetOd%2BGlIFh3DEnnQvkwnkAKMz2c5ggBHoEPOwkz8x3K8mwOnE11Sp%2Bx2OnoGbtBbHKzPuKWJU6yUQAx94nPkvJuEucEBCGjuwfc%2BT%2FvCH0nKeTfx1jgvez6Cq0LQC7qFmkF7Y4%2BwlhQR%2FFXUF032cr4fqWdMij72AXpE7r1Sd9R2US0F7jkh1ZFF8H0CmPwFiK09xNzPrbVUtV%2FbBSaq67NcyVycbNZcAC3EsTLSSbWfwdW3IPHsHACHDYJqAv1xzr5uCZT3BnzNn7ldRLzPkBCX18nOkXMuTJF3%2Futi4HW613Pe6oOLs5DJ5LfwRHqYGAo%2BTjhYw%2BfSMzgY6pgGkt3EmP%2BB8NijNvmUjzkd6JmaW8JizSpal1AYfpIHUT1pbz7M4GTAassaaMLnr28%2BII2wd6baUXrnGnOb%2FnMqG35ilhFu3OEei6eCJslTeeBOoFTuFfHXcnAcB1NNFO5NKXI3rGh59V3P6KP9ikS%2BMlwTbT2hYOJwlNz0QUfrmFfb8%2F%2FuWzk451of9YCDBrTw1IcYyczr%2FUIO%2FZVuRjM2qhjplldvz&X-Amz-Signature=6f0640cdd81cd6bfbc86803b823a114ce5b65afa62c9bcc3cabceeb6de17fb8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEAL6ANB%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZhp1MM6Uo1xhmdITcqPwH9a39w1AKcID5mBbfeWWGSAiAd1KmnBLWYDFcO4zciACSpC34NiKoAfZqONioX2m0InyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSCvCWpU1fbgsZGusKtwD0UhOBLkSo06t9lmzjIh0QXQRt%2BrpgRvegwCSafPhgxmkKVslYbj9QOB%2FB%2BGevsf2ZgE5lCGyVPPJwUT72OxMF4mQXNPGuTeWKn%2BD%2Bf6%2B7mDu4S4x0JJIqwi9sOyFc3UCYPo6hmK0DUUZ5R7Xx7prGKTglPAsTrAfciP8TxVrrV0DZLbQJ%2FtVDRAtIz6GnhMC9CijCh5BRgR1nQcg841GaA4DL7KWKv0i03BcLokjDtaEm4hy2TA%2F0APlptjYtYT2Gi3g30tumJtzsMJ7dmTaXzj002lyvg3g80cf8VsvM0w7bJZaEqsxGB%2FjY102Cq8TtUIEqiQcBOiulhHtFgTk6%2F6AksvdbEsCuyq8VzZeRKwoihpn4kz8ccaqM1BpAyv7W6q27xNL7dWFeIo86v38o6uRCtMjElIoE%2Baqb2uaYj6Obp8S48o4oxOpOblRJux3Z%2FJVzZ5VFikiS9oxNlwt8xZPyyLKL7VJEO9dlzGRWsEePOtGvNi4tLUsycQZII%2Fo0rhqA3YhnDaOFRoRGkvhUnycn8WFIi1ueJ4VMG3KLucr73kstwbTZJxbbspFDP8V45e5S40fUCYwqOw1fFYCHJr19uCBdl63mhpmSNTc4us7MOJv2Vaa8MocZMUw4PSMzgY6pgGsP1dZNm8I%2Bew1fZQF0bzuWtbNXZ5xSOlILKTKVltUbHT89RLaG%2FsAtX6Ggx6x2OkieFH5dUJUSntqYFKnQDXWZBi3FOTn8MjZFnvxBNrSFrG4SQg3tDeWH3d04MrWJnfH54EEavSAWP%2FMG76DGHuy3sb18pJuLwHVGGCMP6x3%2Fm4vo92gRWZMeRJU4as9%2F7mE5R3E5nZUfvNJOInU73NHZ%2B0i3bHe&X-Amz-Signature=c5378ad0ff9258eacbeede1a8c31a1a958a5cef9fd3d2b47ad36c3ed9b612574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

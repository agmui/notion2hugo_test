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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW2ZZFBM%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLtnHvM7SqkRBrnbLut41Gf1UDM05%2F%2BNGpUX0QcPRrYAiEA5Il4HMJK6idiaNQksPX%2BI7v3sX3a10HIig%2B4vh7fOJUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvpmk6065B1yfJjaSrcAxbpcaYQDYZnUH4I%2FEA4q5d%2FBBJyaO8IkXr8hJqprZqq5yNc97iVpvCID%2Fz3RSFBK9GDRaBduyEUccHMn1eKD4E6gap2ao6xRzYkALn55zJe20OSo0AMgy9NvsFiLy2sP6YsbXHXZhIkqwoZASMSn5g7HhWXiMetK4fj6sP0IDidc61Vis2v74Gok%2FXmop%2FjPpJGeUCKKPBr6L7%2F7AszdpjUtWyLdRG3x5Y9Y23BbVjqYAkK2QaNU27cE%2B87ZA3wF7mPERigObM7SaVEtD9FD%2Fh7t526pLUlSlDkOicVbzc1cR%2FP5w8Ay8F6VdohwstIQbIRW4siCLrie88Hlgbm%2Bb%2B3HYUMYSTXQyt%2FSQg%2F4sFJuQdkZa4qgbTH7bL2zVN1hkm1IiGgDGxrKe3w2i4t1aULK0GcfJze5ghHsIOBifmdR6fPY14btQfxPvhoq2yJUqE5ZtoIzP1p7%2BUjbCPNkD6tPFL7ckDlL6GZAKX8Rrpb8VBjkHXfKKQ1EBviwZJXQfuveHiisAP9bVjaRmAn7zwrGRMn8ns3QqThVrq2dHiBLRdisNJD3pNuQH193vMXy0fFDosyY0%2FZYTn5wahHIR106%2FQBz6lZ2xwDsvIvF47BcFK0T2QQcldtHg8fMM%2BVjMcGOqUBct%2FWSJhY13QMYPFlDb%2FdzKejkWcs2i2%2BGDdzhrBWHjIl6LoCodCpP2Y10OmFeHb1N29SrZv2RjmNdCJEVQ5reMuUtwM3DOa7v68l9GxNKUEgzfioh3TggQ0hOQUKNZN2t0v%2F%2Befn%2BRP4s3EKFw%2BhJGtYk7foLmGgVtyHxw60jufevtzml%2BTFI5HMt2ezjJPvJ9RmJmPbiLzWi4xJbm6CJyz2ZU9u&X-Amz-Signature=473e83bc6f7dab1b086bb9cbe832fa5e4f64a2189d0fbe211ba29fde73dddbc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMQ2ENYG%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnYesCVmDAqKg4s990FAnu85lZ37YAsO8%2Bw4Wrg5SO6AiBZXeMyOkcokc2jnbFVLID%2FEHIPmpfxOUtuT%2FyGP3hKTSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5SvbqmDZPUOXDou3KtwD%2F2%2FrpCAcBlEUkh%2BhQgknQBJGcOBgFfZN5jC61Q4qWvF%2BTO3gyn%2BtQq91seA3hj6wjY5smPV3kBEqnVPFL46lWiJDoZvXLQRmI%2B8tEIgwOywTfZ2iumuNl7FXup2hGFChl41VUX0InDCUaYcyDimnPnR1IU6NXp1RBq6w8YQaxyee%2FX%2BzilKQW%2BZBG4l6QVMdiCn2iq3%2FJmPVSQ1n9ld6okQtwQsvC6AqYZ98igJ2er7xUxZjqt5IZZAsnE4ROyD7r0aY7iCEkD8tXLKZeSeytF8Va8PkXjvbs161E%2BdjaLQPDVmzWc0Kl93AUv28aWFg0IIE3YJ7tbrzBlavx01E68tntlWNw19tEf5RZiclSbh7CXPS6N%2FwiCq%2BmnB1tCzJvv3Gwlo4SGQMer2a3YeHWphd%2FplgQCxxJXtrJ%2F3WfTdEg3nZD%2FQOeJwF%2BuXMZv2wMR%2BJj58tMKCZpmAY41DFzMJXp3lld6Q9iBt%2FGt5E%2BDEIZYBbCCYW4jXhbLt18iBgsH6mbcTQKVFZEJavcjnqfvOCTjLf2nrG0%2F4eUPOvpwUwrLBQWNu%2BnXsuMOH8sf30oRWJZYpe7M%2FYM88tMXzbOTBeQEXcU%2BV1rQMezoicz92vQCjpolSZg80RnlMwi5eMxwY6pgFFyMLAESt8vcwqxarMrg5ajNuR%2BwTT32IcrSCfrxsjsZ1D3KTcLOw7mpRgW208OaZEfQvVQ%2B7L%2F433Z8lcAZymBxkkU%2F%2F8s%2Fuf57DyLh1WOqsiDOOY1ZxnaDEXy5ujHoxkvoET3vdA8egZnzhprz8WjmQ2%2B%2F%2FZHhymX7gdsU6jasE0BBcOobk3hFNxtxoGGYjqyPNovsFhgJxYY9hePMudVQOmHxHT&X-Amz-Signature=9f012072bf2615e4b35f9273ce699d8fb84d86284dd5ac6309781f08120ff4fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WNMMMA%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNH2PrcFiO73PrOeW%2B1%2BEGXnA6RFz4TDQSo%2BwQWxSK1AiBoNHT9XUx1XpqbHrZlWXnb0jUyVgUz9cWx7J7TvrOuNyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgKTpsJMP4SVjXFmLKtwDR8OunJ6WjM9Q0w%2BjlCKwY15aW7MoilFhEeQ8IcuErFl7sAuMRenTbXAUJFh8z%2BcIfi6sThsFWEaBAaMfSa%2Fo7RwcivypyCskC4jxzCdVUFwfiGN39Etle2kyfFLSCc80k2JGJ9sHPy6tJiqzMCYWL%2F0VrEZsPojApy%2BInoW7hqcLMQ%2B2tTdgcitoJ%2F4626PnzkLy5R0gsxxPy1Llr2ioHzNAepb5U4fQyYORlSFcULhlXmDBeSxloS0iVccz0X%2Br%2BKg2wlcPOd4dy2%2BWC85EZvSl1s0DzCNX9avKuZNckFtjm%2Fav52B6XNNlsM1kRILAsZyiwwppx7F48kUwcjKAtCDCLq02VFmE6eTvfOD2BDAeO8%2FJTJlPjjIYmStEldMNQ%2B31AYUEb3k7TMzvv7dZj1LFwvyyiDz11ZHdXiL7dfyb2mXfzbfhmP%2FlLqmv4%2FQoGixs40SBR2JsZRi%2BdRX2xQggr6Fbm7F0vcS7qTXNDWp6LfiYLk2WXIyFDy%2FlJWYBPcUmsbziigMysKMo4G8wobklL7tf2bAm22n6ZKBQgOJTXI%2FH5rbvJAZ%2Bv%2FxpeEm4Ked%2B7yijAJJSe7GLpt%2BRK%2BfU%2BSx5hbSClXumFpdtXNoxn2pzFXTfstiqr8Ewg5aMxwY6pgFNFRKmuZstL7tpH02yrBsiiRBDdOKayAd0U6ZCKl%2BJZMeHa%2Bnnh39rG3Agze9VdwgDSbONIwz6ch0KoyJC%2BHec9gUsIZc8DkeyVFbZiJ2yBSvn76lTCoNeSw%2BoTvKddFkBIgKMrIWqYmSfgcT2dCun4rf1mBTRZUOvdglsBN5NyLu2%2FSvbk8a4v8tsq6gUS%2Bg7gYJyJ4XfEi6d%2Fonpfi667T08IMBD&X-Amz-Signature=ab2eef743f87b88ceb90ae9d381ee4a8d470be788d17a29358fc474bb812dbc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB6OSSN5%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIVrMfQwPiVeTpaN7oNXV%2FgBTlz7nWzqghkyj7ORS7IwIgTx8toMkW69JK%2BEitI3pHr5B3RsefU1uUmOnSRI5VYsAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP68AO6jWPybUorqtircA0MF7Q3rsn39HBVXZpkWCYyiKRNQfgluFVegURZ0bWmKe4bX4DoKFIai7SYtkDyAHJQTqfPMs0yBZfQCF10qdKU2MBygLRCApoJOvn4cK6MaBAJjwzHwRAw5eZx7k8hK9t7P1SbCu6Hc7ZrOOsDKMJageWwAeNidimxLTC4dylJ1Q7eRQrEToL6uowoXwXEcUTQQbQa5cKeFNptSaVXo6GKKr3hyU0ELlZfEege5uvQhm9FpuHm1MQ3VkARhLrS9tmIVn5jBKhYgjDeHV%2FMIyJgR6FMBs6l%2B2M9Pdn4fdTDvrhVSs2M1MVgyYA7C6vy7OFlUp8wpSDLMmhRAfYlMZxORXdLzDO3q8sEZfzXm%2F5S73PCzD4%2BikAWkBY168FwD5ejUT5hPIT%2BrwdCIb0zJ0keGhKAgZ28fxTcEClEtgajlCElQjVW2GbIEhniyFnVoxvHB5AfJ9DBv8JuRXnlttaeAx4ZbCUhUJZ3joezvnD%2FliPTBcr8TeQMZ4CNV7OBglzoic0v8YAtdmZ%2FKMuKLBcOtIB2luTzEEhM80K7n5mJzAtDqlTlvCIsS3ySMmvlAjCL8wtBlD31mkzrXaQevlIRedv5sco8pgjn3fuKWb%2FII8QYghukx4UpAPXlZMIGWjMcGOqUBhJSenjKr5GjEmT8dTeIit1BaLaMN3wrjSWVyxxT0fgvmcCIy%2B25JetWNNCuph7FDDqXrcWzr1UbUuRzLKdo6YHsgIw5Uv5MdFC%2Bbh0viUBGnsuUZB7ygzDp5Q8E4sGkdGBDvu5gAUsUkdqOs3F21U5Vlt%2FQwkgq7V4xeIqOKDY4V89E%2BI03E8pP8n5LQ%2BMMiax8dehzAcRmrZUUCo5RwyNGoXS0K&X-Amz-Signature=db3c72df87c8d8dac5307eaeb44d7fd7071e793518ef188b2beb462a22b589e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

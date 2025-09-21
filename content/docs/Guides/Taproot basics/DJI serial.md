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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QL2C5NV%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAYXo9mCxVQSaDFTC4gIBBV3nSBrswAalWlWmItUavSwIhAMUJI1sG0gM%2FqdObIz62tSeZIsv0bVj4mjJUWR8XxTbkKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysmpWL2Mq%2BjQmo7Nwq3AMWKMnaejgwYJVypFDCUQh0gFoUCE65YFNa%2B%2BxN0E8RAarZxTbF0k2ep0fVXtzU9WyfUwu%2Be3lCmJjiL%2FlaTZALzx859akN1povXrQqFkN9uKhADCOssU4P%2FTcNg3GUQGqk88ovOl5udrm3S6fM7TpgIQy8RmriDqRiPsz9lmCXPExHTcxG%2BrZO0HLFQaa8zd0iIScJe%2BRU6FTt9Us2m7T8GsQfUK1i1Z6AogKyqOiH0f%2FczsA42E7ioSJRgKZpd%2BAiB93YhyLeuWBdZcLT44aHevBjRqqEsj1siRVgrruXW3LNEiqu1xBIS1bfeX0kwoFTSl60fQXFAWy0w2kqcvGOkx%2BB1QQKN6pDpCiD3IcuUiPYUFm9lgUIcQ%2Bjr939ZYJXO3kcULRGSzhDZQ4%2FeuKeAuoO7qpq203RnPo67wFw%2FimPiwjzRLFxSwI6wNp%2B8phdG7d5NWlS2UOw3RMnBb4juBitaqC48rSl636nd40UcQ9%2FBkg3jOI2rf3cBbyGb8VY8T8EVD6PpwJQMbkZh4Go%2BY7j%2FavNSLPimTa3TGhEhIhv%2Fz0Xz4U2mi5DLSgMpyBoMnOBHoKSKi9mOldz5SdGmUhICaR1N9KfG9Mv3OYcZnti4vnN4JC5E0SJSDCvnr3GBjqkAVkk1LiIHj1tYqBisvTE%2Fzlk4vyqDLbrIuH6bX72ghVismHgrWECOQltmBpcW5D3U0ObFEI9%2FPXQSFWgA%2FkoYykDa0oEqtZKJHRD%2F4CipxgUhvIsjjrVLe9VMhX5D4qNe7UeRLzvLKuwNkouGGFPZZ31oVXm%2BGZCLxVpxTFiHJofYKeLW3EG7R7q%2F6H9PNIH%2FO4nb2654Z%2BV519Yu4a9mo6jlLB0&X-Amz-Signature=0d296bba3e27eb30b6a811bb661dc3edca7d2700f3c1fbc3a350c09082742d43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BGSPXVI%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCSb8T%2BehnWA9zGBxl01cVqVZ7KW7MfIHkI4eLXZg%2B7AIhAPSIo4z8dVpG8aYYUItc6DPLrY9cv%2BgmgSPSVl783sbNKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO6es7Gqu0ok2jyh0q3AOtXUWQTHYftMjdi5yt6CUpX2fbOzPph1LTfa74%2FR6Vl5a5cSCtKUYmsBoU1eGC%2B8jVuhgyjnP%2F%2BbOp21XZW%2BItkoeIfZlUVOAfu1jPlq5c3fuWtKVV7l%2FD9CBPWqONBxou6Xb%2FPUSmbCcBuY%2B0M5tiETJBi6nY%2B3s1uk%2BjaRydv2lzrYZqbT%2B7iGYo76wfjnCuAOW4PeUBx6mqVMz0IkE0vQ3htW9GKTzJrNZidxkb3l%2BEZ2lc2gg4ym9ftRF%2FEzvC%2F2sJzLFvdSb%2FpsEIqXH2zl%2BUEWohV1aWkVlpZJA2XhjXad%2B68RVlqb3sc3leSIOmCjvkdokl1%2Bh2%2FSJzdRu79IN8P1kinaLJT0gs3Fqa2SRbAClqdcgs2N%2BFA6qOBvMZs74KoEE8s8GJ7CK3GXLKObAJzsU%2FbS81SplWPmQEZsC1KYJzmwRHu%2FDUvwBc4PK4VtX8x0%2B4Bq0b9QCr5sl3Mvyw5C4kCHLKH0t2gA9Oy94zQRnKacv6Sh1F5FeS9HxrF42vls6EKbJJSu91cS0k%2F1Wijr6%2FuUHhSMeGN9t2MUKH5KeJ4LIS9VtI9v1ZBt2LEQ1Bxu7k3%2BIBNhQvPBbvxuU6%2FNAN6c0Yhlrh%2BENYihm4Kw3b49XpN1FDADCmn73GBjqkAfSiGfBV2YGYz%2BRwxFewkCFxuJHYHSIjpykcLwBWn7h%2BHPZ6x6dO22A5%2FgYcpM%2FU3SOaw%2FgGNdJBQR6SrKIsYtKSyZHs81K%2B6%2BxmwxTNZRZAGusuWksTnf70EfbjU%2BVl81l6pLjntNaL3GRSBpQ9bOA%2B0wF70J4JtyczHILQpKbR4sUn14zlw1YA9KkzfSOyW0hhJqbSEFI6PcYYwDzqDhoDtmmr&X-Amz-Signature=0695d550ed4069374611e31b81f2c76bacda61d12977f5d7792f683d3ed47dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NS4BC7A%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgZn3DpaZ1nwaxIDOzX5JQN3IGP9fxetFu7MquJZBb%2BAiEAqxv1ejO5dtNC7RbFQucHBkXHrhxkooeESGSNEiyYdPkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGC7eH5gfkBkwBXKSyrcA%2F%2F1NrxME%2FPAnPUqw1pnU4pKdY51qKt0VsvtOOLp7ORNVpUotfTc%2BUBzQj4vY%2BKoybxq3dZDXnfR6D1jAhNukyQJIkoJwRVLwWCtiACiIMkcuOHw%2F1W3Hn1CIEYXP97HN34qzcan68Stxrvfi%2B7y90ezYUMpRjNK1zL3un6wHRRmkOzVivi5lXkf%2BHebSi2n80cXlcbe4hPu273cq%2BlqNuD7%2BW%2FitU94Cd5n3j%2FY9QO3zVdbWFOUh7nvmG0lDWSFI8WmfqN4sa4DGMdKEbX%2FZ990Z7TGVgVfcwC9KOUMIPuUPGigVV7lZ0Q0w5Wyx1i0oWsivfKWDrWMnBnrognchM5BjshVRXCnT1%2B32nN6o1pbHeL8OR6NLOxKJW6LcMP%2FwRY7gwd956AiJMuUTSj25JCmqvuqziQL%2F%2BpOsdDtyaMYkQF%2FJS3cC9euMpxHmg5GUlVcCTf70KPs2lNMx09aj2oRYY9cldL1A1BX63IafHsRTuv8AKaSUQ046LYNh4G6ICrSrvAdNsXEEe%2FK0qZGFIEcBy%2BxIkZ0riXfCi%2Fi6Cbm9IV97HyRiD%2BCithxEz2F5T0Wo4PDKit6V4VDqzCYXmYKqvSI9AZba%2FER%2B52KCDct6qARvo6bfJecx%2FJGMLeevcYGOqUBxN9YNmh4Pv5ZLin%2F5cbuU4GWSX7gb300NiwCHyPn6XQ%2F0IW12XpZokh5prR3AyH5MiKeQs2caifd87e2F8owgVeskM2vUnnfUnoHK98PjMnHXfmG10aoRbZ21fadkvQIL%2FR2JFX6FINPpQZmism43F4ivqT8aipePBlsvNcDHzI27dopwHRMECZx6PfxxVsxrDbjMh%2FIl41vIggJXPY9w%2BINP9oJ&X-Amz-Signature=2d089d639bc3f72ee7d9d59546132c8bf1806c31dedaaf938c53651fb0723a58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EGI72JA%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFqsEa3LUCNvGOBAWo2cH5%2BqgPRgJ5HOEoppSPaYUeZAiEAma8ypadfkeCtGc4wRoAKgJcoicGyA96EuPF0hLvI8BoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKdDHiM1Et7KGQx5yrcA8U1sL7hA7q8TLxmweCSsw%2FqHRfLKxq43nF4fZJOTEWHVqe8czbB6nfbnszgrcT4Tbc8fN279rx6n3d7FCIt7tTn8aVSgv88T3HizW6W3x6EIFqVmHunjam3x1DFWkM7H3bE9MZqDjrum3IjJVcTIAtoZFyqebDwuoH2F0f6PEYiny4Ep4QI8Hnmh2rK4Okw13xOAZ%2BTeANnaine7ejdzZxPUwuN8vdLJ1cxPUmMb9NaXWo1Xor3CWUrBBOupcqdyUBahEG%2BL%2Fjk27cg1w63d7BNiDnxCXGMXZYElS9UiwoNJ42HWR73sjeSUcXF6F8obEUCT5QT8GgmAP3aTH6mSTFpR17WH5iEIPbJWcjjQMdncHxSq6I4s5zzMD7evt%2FQ5%2Ftrpsw47QOOzdcnQnxBKAWreFhVwm1MGE5XjaitnjfE1GhaE2MbhdhjEoLuViXlOSiNSGtYqFYao6ELH3iKCoxf1THA3aIMEUXOBmq4j5obT7gu9fUhjVtWuEt190TXfOq7i1H8g4IGtcR7sA4xWC00uFWAOv4mmx3UT503HSPbMihuMWT%2BRWQyS6Cc%2BysOZXnMeQiR5fC%2Be2hFlQG%2FJq4vhfApR0r2uSIWTTY2095DuGR8xa7GXSBh7zw%2BMPqevcYGOqUBrz9PIWEhudu6A5YTmA%2Bw51wOc7dF4axWgekv5JRGVTMMifvXwywT2TdS%2FX5dPlEmYxS7h4CT%2FguOaKiCi9bRklbpa1KSrAmtCSQv6B7%2F1rpFQqtoaMuHX%2BVlZiQUpHiPS2rMhgzovn4l5XfArDo2T92TSM9GUjYKH%2B%2FfwKF5vVKAWAmb5VRxRLkUlUP7SXDr5fggzjutU06TKd7gz2q6Bbn114zo&X-Amz-Signature=319429d79cdd2b9d7d1b15e8447b2eb67c7cf2541e88202e4c9927a3cd2f34eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

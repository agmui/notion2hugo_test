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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE5WKS2Z%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCxaQR1Mfgh1fCEjWMM1380dz6Qc9H%2F0MnDC6eCnzR7AiEAlLNBohgCey9w0oaTIQ2taZlJPOaCJJDpZfjL5ASIFfEqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARqa6bCe%2FrsdEHQNSrcAwLJXNtPk%2F4bwxjI5Mmn44rcSDqV0jJpW4ZgUU20y5k%2FdgKLxx%2F0rsMvG9KAuLJEbufU0Cpf6fW%2BAMEGLKrIEaBEKQUFOyF7e7l1FbutzOmbNbJH7lzjkMBTgHOcrclF1D%2FEdiMfuBxcJy3mYDtQQrxJQsXdg%2BMbhx1Yyak2eweBlD%2Bf4R7%2FKPPk%2F2TaV63h4ZQJ0OG%2B2VfaEpPurPS%2BUrjTpCrMJ3yuWrO1Y9iC%2BStwvGNtPdy%2Fs5oJ9R%2F%2Bxs2F7lSgPDPeSv52dd2B4pzr5nfPaM4Qh7jbcwfU%2FE%2BDsDinVpUTb31SLVaQ%2Fbym%2FDKi0zhJXJfYlPSua4%2FnpyScQWYBhaZh%2BscFuyr3q7ulOyqpQbN8xXfqfpnK4BPJK16kjYrc%2FjKL7g0ZaAK1eaj1SmrEAxujuRTHIWMZjh0kXupLFndj81p27jaVICyw4uBd0ttRa3OWlTCjgN5pwrhGtu6AFWDRuE%2Fg9%2BlAk%2FctJwIHsM1xfxQIFZoBX5fXcDo55awd2H589Jp%2FjZ07uwpIqRsM10QG0uN8iVUhIZ08NKUHfWVR1etO96V9pg23dj962kZ38aAoMkM%2FdYTNIsBHM8Q8NMJ8GoSsZ4CYoz2I2c%2F9CR8r8Ww9z9QN62WeMJLE4skGOqUBrV70EkyYlSD9mM0BAGN3dskUt3xWBJSMgrZaLDCARbeHH%2BwCt5vP1oiO9BeVglo8qn3qy4FaPeoT0Pc2gFMENwrJRLicFZd8QURm%2BN%2BAVv4dTqCNV5fm1gZxHcGmjopE5lAo9mHHPLa9901sJaeeo7kQ5X6RPaQE2QgI%2BryRS%2FFbMSMrzRvP%2F5G0SrHihpXIYnal1kASLEqaLsLsWKjDZpjtJyKb&X-Amz-Signature=9bb5ed7a0699df91486181c24bf91cd571dd15331a734d7e594d8caa5c2761dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXMR2KB3%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsfOFfeVIqdUVbh7UywwsGCizVrkmLhKLLm8YOcYuiWAiAZIQQN%2F7XSI2hHFSZGZi54u6B%2B0C2LfiL0qhohqgCC6SqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6KKRiIzZerPlNPRLKtwDw%2FjTo9OVGXToi3VC49%2FT8Rs%2FQ3oBtdSxmbuP3JIx6%2FB5cvXLrE5bND5Zwzpu%2B1XU%2Fa9njcZ6G03y5LDa18p4DzDhrdF39Er3Kvj14%2BtWvYtM2G0ZsmmwkGkAYU39hP%2B8NBzNNogKiTZKMw6lOoqjEzsD85ptV8z%2BO24EoAAd%2Bceq%2FEZvT%2FCHBsHKGa2rXqCM90usW0RiCP43aRJECFXu3nZcc2cNmvza1u1a3bt2iGstp2PWBjhcr3r5HlhhN4oUhiMIwr5PooMOSCH5Ix%2FdtffG7ypDR8TNcJ1d4bwRJAm4%2BnBbjvxmkGeSr1VgmdQkSNHiFiR97FAE2IS3dfR9DmqnEGaJwuDZgkhWZNJz%2Ba6NIy0uFAz3wPgebqDNyuqlmN9jB56OfaQNNhqMneCR%2FEEdFdY%2Bb7mkeh%2Fcq1uF6HfVGRis0qPJ7PafZqTJagPmL8MVm3z9MvZsdnsS6Nn9Z7ido9DEA3DUJzkLiUApM0vUPEVwcoLoEVFnsjuyFWOEUvTSnKn80AN8dPbr410YXIQtqUN%2FfXHiDVcrmUX14c1aJC2JTr9GJQzxdBJ8z2wYVuX56YH0DW%2FKz7IH5HhPKoVBlvY52yJcuSDUJl18NOogr%2BBbyl2Hq9mM4Wswi8PiyQY6pgFK8UOn2WduU8JICLZ%2FHCVuFeMOprrQVmih7hCYvL6R88lQqOlc62bptVkuNCarGMGCM65LuuLaCQWj8K62OwUNit%2F6ye41SOviCKYRUY3MD0EJME0bQhYBhn34FbpvHGyrlU1kmLD%2BUgwzCj7hRsv1yZis1JDdCO5irtJZZvx7M%2Fbp2OgQ%2Bc6AFwdzapJ8am1sWD%2FwN9oQrTF7bCJxuG9M%2BRoTlBn1&X-Amz-Signature=ced2af84e0ddc51f89119070f1d3bb9be9689d8461bd525d4f7730e9c933e9e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBWRLFS%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh7iiWf5pDK%2FB2fEw9uhwLLoKU8ySVt6WHs1Pbc3PnNwIhAMHAXZiNLHfyf450Vx8cqnvAeMrj01Rjkpn%2BLcCaEDVCKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpRC6XzA29IRzJO7cq3AM6iHNIngEh3QeUUZnNrfDdsTq%2BQuSifvXD76iCRz79qvcorklKGVCYQIkj%2F%2BTT1LdD0DXB%2BqIV1iABK8%2BsD9V845MDbO0fzoXW4GRQ39X%2Fcx0kKBNKK1Zo%2Bp97huvo1O1yOMGAjWapaLzR36XXhD%2BcC4SJi%2Brb0fOYg6QfRXI0M8NLw2Y9wler9eL3CgCI7ou%2FVk4HbgOPd0L1omoIN7bfiqaLS56o1YX3apvqpFFces2UCOdthyUHyYh7Vbqh7hOR5BOt%2B1MJX1mBsxtRsZWXIwtwRxAGzXTakz%2BUZymmFgEzGry2UfUUkqGYVzQykwaIJdfU53UOYlA1a2Sf%2F%2BwufOlYG0%2Fbz97Uxh9pRfGeDezXbY7p9VoKt189d5zKQv5oe%2F3JMIsesrrzWD3pe41La7A49%2B2u%2FQGCueYHhwG5jUT5jzaKnjwlqUzFPFOpefmnxpiHGCNm%2FstFNLgEV8bJkIojEwtnx0%2FrDecd8cGduVrn%2F5%2F6XvqyuEJz0oHHTPNlqCC8wxPnY0uolM4fd6%2FxahukqKihnVma4nc%2B0upt454W2A99tyLBe4lK1SPBkwgVHsgvKL%2Bz2%2BTUEMABJAEyT92skzJDmPUJiBIUqRPWRzVnx6ergrP7keJQ3TCfxOLJBjqkAfHb5TbxXfOJ5KLywufQ3E8TB2oux9SEqb7khDVMIGhUtaV7cyr79ddilNUhPqVuhhvjreIm4gXEx69nypbXYkHYVxSFsY6FXUanzcPXn4Hr%2Bxav%2BWwcprtuInnsmiwQ32WjLu4XxpCw01lwowgQN4jjgHBnFNbujttXN%2FMiOwXQL0%2B2OFRY5hYU7cL7%2F9StMQOR6fBY8yRNUg87oCqJaonbe0Qn&X-Amz-Signature=470b9bf10a5a5fbf81723a7caa60d7da65920e804e1181d042a23f4475ece3b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z75B6Z32%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICC7DWyQDOgQroQqyJ9vU%2BxW8EdEoJdD9PozXSpo%2FMMQAiEAvvNhlpLD73uQkaq3P%2BKMeIPKm06W%2Flfz3DLY7lnGMKAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3gROAKPc1nhYYSTircA7tbwUSJyt4jNIZqF3PG0lGU6tqAE%2FNdOxeDMDsWm4WAbh8J%2F6xGBn35%2F8AlP5ECAFl3nwlydgZE%2F1Ndt5F2dWTytqgxa7nGtTyiaaGRheL7Rnov0zDh29ONM2J2UI%2BR%2FYLQg8vinNNnwx4ayVOXIbJ2Eq6w876BKfqIVcjGatpuaRgV1%2BE8mbfUJ3ianyCpazKx2dJxPsyUR91l4ftwzDMCCOG7KUZ1F3VIFOWfZRFOfCuvnYxAQRhq6BQX2wF9Q9K3R0RRIYSXfzTxmIFnYtD%2BOfzvvzK5%2B4aB8B9DfqT28p2IHR9L6j0APOk5ljpFQRpl5M2mxOQsFsImJvZgWLmorAqAbae%2FIDdTgmVGjVkSapI9mugTaEXv%2F5mRNPHH05%2FIFC35KB7yRFqf8%2BL5XHd8UsiH%2Fqr3EYqIx28m0tnhmzQ%2B%2B7jA6wNG6TEs5xQ%2BbDq1hPo%2BMjbzQd8T%2F0LrvaziwBJRFxRdZQNqYNxHoRAuL8xtGXiC5Vmhd2hh%2FBob7FvmXEM2bv6XLoH5P1RAahxl10842VD0C7aVP1O2oyBCTcuZnRkaK0Q%2Fn%2BcCPkgWphde6zs7AvVzQQMnpFZnfOCYSwvL1c3%2BsxuKuGlzlgn2LOB3y%2B5DxX%2BKxynTMPvD4skGOqUBWLOjgKzXZhfQ6qUOdC0sAsVqFUuElU7K88RwoEXzfeteR%2BV7I9dgGYmNNaqOZLO%2B0eNPWhbGiBalY2Myb2AuF07kGTMVSjiTqQ3fzYQ9SLAodBCkvxVzVteFpkg3i26lY23q5Vuxs%2BJodaHY%2FHJzbUsJKZGKkt0uCDuv%2B7LjZk2SBDA1uZqnCvNrWey9KD0JSDzvdxTPqhcadfXKgHx%2BQEhCtRSR&X-Amz-Signature=31881706bfab4abb67e89358460224282698cf1c8d6a7d33151044c24d560e3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDH4BIWS%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwni%2BBbLFfl9I1Fm3av%2Fn8C%2BxdrbegnAfifzj%2BOluYSwIhAONYc41Yehc1EKEqHiKryINbwSGSZVTNSzTW20bM3Cl3KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAWnzxGDhHG%2BYtmDwq3ANurCfwSsf4m22GIMKalG3rECDqesYbPvSFtskDtGhSVtNjlHHlOvis9znoSZLSch0C3zp0N0nGzKyaqO93POHp07nx8D%2BE0Q08%2Fo5QIWiRu1PxJX0Lv5YDuvI%2FnOdgsyf5eyuqtz%2FSyEJSNRgQYhOfX2R4ZUdc177tM9inw1NOPYBVVfU9V2fVMeCayI3RxGsgb%2BYrjY8uACmeRbNPRtbPwXhXU%2FUCvrrajaVrx%2BGErTw1Rqz94IpmhPaJPc97TbnEUnZWVu1DsrWi4RiJa9PZOt%2FWxww1tPq8ULn8E7lfSHDQqzHYoiYCj5FkRnmTmYodBxwQnrH%2BsSEjuKWWn8hr3nuNYH1U5anNDAcnzCrKxJyFFYBYrfkFMPyfK%2B8RQXuZLW2rPNba8Gez8gJHbIrPZSoObszouCdZuyQRPhHPG7VQRq2q%2BRVRLw8FA0CWp6PW1TNxW9Cm9qw076dSeVz6GOWtlmRmPO7Cwy1bQnwMn%2B80JXdyRT6%2B%2BvICXoB9tS3solQU%2BnupzGcCC%2FZTQI3y%2F9Tsc2V3ixrSJ%2Beh4tXoA0GlDjj3O01FYqK19M8x4TBDixFOzs6YCgIFTUYhQUNJnGhlUHsEt6pPTnlOzofphW3AT1T5z43GlRiimzC%2B2IfSBjqkAW9Jx5YUTCEmfljvXhUY6k6rzEt4JxZy4v3G2rh0B6iKBlmw8mv9DlRffkq85%2BwPc1fVVeSKmvV9lNol%2BGDZVhB5BXKyuydl8beNV%2FwDVzpNTpAalt5dmJA650gnSHFiRG31CZQ4%2BEk5ziF%2B7aO8yu%2BoReWij9YSX5vhV%2By6QFVRW8GSmim7OnusGpJe%2B%2FWy72aHDL1MKorvAktFXbB8xG6noDWw&X-Amz-Signature=fe332e8cd57203aed21acfbac03206960aa33279ac92888f3329e4e467725280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZHZO27Y%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHe7NFgcVW7tg02s6QI8NJfVjzupD%2BRqQ5ETIJ16m7ybAiAul%2BkUjgrXfRJM9aqAmJf46x7x5SpFr7GbNbRe%2FFdyEiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMevgtC9Pob6IfTp%2BXKtwDa0L3JfQa6p%2FnFlZjyhTv0jmXeDCJTXpyv%2BXI631s6Pd1oLUkGcO8%2FHLApX40g6GL8LpD6oOYAAmWpRmk%2FsjBXSu5%2FnF5H9yLTyPyL%2FKoltHq%2BVhyD0cwpv606KUG7hAqjLbWujoMrwTs95dRavCdy7PVwIyVb%2FtVL3TnZY7PVdHTVXgpqI7J71hahEuuw0fgSkdDoM7anHp4MW57ZPjO8MhYzl3JVAffG2Cenj1HYSypPYAJMjfyhk1JXuPK4%2FgRLRYW0yoFJKdSP6aGNZrNDYTm7rDvucO7NoM6CdlGYvXmXbcqUtxkIljJV78T1lMp5m5MkOvt203EDyNG%2BNhCt87wt1W1L2R7pZEAbPvKxitgyzgPUkgL3L8MRksua7iqMM2UPVeWAyJB7gXzQq9%2BLX1vvgIpT4S63O8qVVglqCjncjdu%2FVxohQWNv1lbKWN4lkll9CP1O20w4%2Fm9hTnt%2BG%2Fo2CPld68mVROqS9duu4FcHjf2UKCn2rCauAv5tFRVfe1uFqf8Mmp1ktfMawEvzTvLWUW5V1Pw8A26mVHvB9M2yuU7wrnNUjfF0F%2FKzVYYNHPxIVGW21yWjHz%2BuhFwtB99Eba68EqJcMejsLkGHp9lS7vZ21CfHHjnV2Ywk9eH0gY6pgE%2BXyhinuN6dWoa7AukqEriHuocf5MJLOGZAcj1mj03BU8qKj%2FBbX1TD1W%2BWiitMf9AFUtxz5%2B%2BR0vKQetDE8pTtERrPiMEQXBdRrvypoRjYUP8qaQn668GDvjrXGFkNOCpWg1l9qPbm0jxM%2Foy9r%2BS6o9aPf6rLvtcYTRjguSj%2Bj0KA5WpPtLxv6%2FdEXkAN2UvbuvEP2BI5hauZfjolVk4I%2FEgXaCz&X-Amz-Signature=303d2a859fa6e480b9505ce9684e0f7508e74c933fee4b2a6be0caff04175940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXSFTGL2%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN2bN4uhlbHm9dSNfasGmwQE2MWWxGcfE0pdBS3RqhwAIgITaFlkCPzEjPr7nI0mx03OiOBOF138x2whXgJJzWz2EqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRXP2fvNdP%2Ff5geSSrcAzOhWGeSgAWFs5K8DLJi5I5QExJvfaGyNUxJ7Ot6V9F0tAou4o7NNOzHImUs%2FyG52iSb6bKrHRDML4OzHjYQLEqdIQElq1JLnOyeUWXlKUddffodTEOOiyNKs%2BUSnTBDWJunHN1dWVGse0eTCtwpiGpcbBrZWvy4fkup5q%2BcknfvPTRDQc9A%2FQsS%2BDVL0%2FXxK5Rs2RFQN3JPHmxn2jlfjWbjL4pCU%2FN7ghTh3mwi9hpRkEhu8i3l7SGiAHlboA9M4KFmbsoO%2Bn4NW8d9RhIwDzCuTKdQtTXG8NJvZUO8ZUzT82xaH9cmCYokiFN6cane5NrTdawQ%2FoJExvLKiV60ovez9W3scjatxxsDqROdbts9HGeboQm40lHQ0ax5uUlgDvUxKtZHu1AZUDvpY7GtTPuM%2B%2Bwm5l2BhWJr9t5jdJrerlUKRJ7%2B8faoirMZBD3eslbACSaNwJrl3iQZWsf4mv7RH1J1UsOHFU%2BPeA4mla7O0VQweTeweiQissKiJJFZtcIkjG%2BSONmiZaiZKx1TvDSdbZACXZiAAsyPy%2BTDDCEQu3bNcer1ydV%2BMPa%2FCjuBgeYDG8KDSicisHDTQyZm28twP%2BcMLKqRjIZ29Dy2RVZ14wBOPCfisGDOFtWbMKPWh9IGOqUBrg156LXW%2F02OyxQSk3lUCzY5N9sWX3NpY4Q2iECivnB%2BA5mmkbrBbc2VyEArGQeox9BQ0GC9%2Fwi43DAXSJWNs%2Fb5qwZ2eoeHCHbYoBKSyXwh%2B79L6e74fy3IgEBuT3lQIsuHbqoUAraOPwSC0z1iNCRsQaioB8oCHqBR0zuonLNzLEiV51KClVhJUQYcV5flSUcfo2x2uVYHAgQKKzqNUofJtezh&X-Amz-Signature=a63403e249694621c4dfa46bcde0d43532192ade62c44d0cec16f1feeb222313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N2ZYQRT%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNGTb5kKOoyM0GaNW6TOLQ6RjB2iL9SieBb5t6D4k6WAiEAgYFOnBMJfazE4OCM21IhA4DdcHPs9sGFnXGXVqnCbF8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FV%2Fi6yVd2DXe5KEyrcA5eNECyteZB%2FVJM8xohFZ31uX78odI%2BDaw0rF5DqI77tMyiVfcTiwYOofVIJl375Kbaqp3fpztpXORtSJtYrOaUyCitCeQN9kaSC0siqEEyywX5UC4FFp8weNvnKPc%2F96iIyZaM%2FFZrOjglYaYsf2LodTpqXz%2B0fZ80liYIG9PwN0f2m%2FhnZaZBYWoWNgJDeP8lWEDVRbdHsq6ET3L5XOOCO4aZFOHkUCnkM%2BoJJK4IDeQKm7kbOGFu%2BuerNjzjFpWyneC9jSa1SuFr3M6%2B3UAUTZEudjEe57rxSZJ55icFEoTroKmKHWLDOinkD4e72ja7UvkcDLDWLzV87ujfUFJ0JhiJbVb7aF9lwqx6ATfP2dzUU3LgxsNGr%2BAHucLGIq%2BT9tZnkmlsiKJAv9nVY3PLDA8nO2886E6p8yUJ2fggXOZCS9h3kQ6jn9CJ4XO1tWt9VvDrhvnVW9q7CNY%2BTqeAGxEY6y1IYvNPRV0VtODhrBPxlgPrdc0hC8raSgX1X8h9vUQbVgbQdUJj0kl9ROBa%2BnYbQK3xNGXvl0tZIlhioc%2B7bvrcbDi9grauPZEg4AqGBVnIbmBVLOE9DRNXhr1Xq4H7RqBkiUOKDoKdBh2x53t8NB8l8pOklhD58MIHYh9IGOqUB7QsdT1hDpF5B4I22U%2B5hmEGwQE9LbZs6BK0%2B%2B1nOEdLafMbCd0d1OJ3bdGgQwxphM4hRvFwNFi77gaRGOUQ9sbUxACYfgFgtzXu2BHLzod4giaSu3Ai71Feoj1YqDj7f1C8XPFCGXNDvXFcbkKvDv93BJuJTyT7fxmx38X8PWd%2Bc%2BzrLbgIws2xvVW8ndMSLXZt3zEOqIhDgTkhu3XoczNKGNLc7&X-Amz-Signature=40c96481b6de5f9fc2cee736f58fb968b80f3885c7126420825aa534f06205fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

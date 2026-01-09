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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFOZVQWU%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrHzrhsR0CP9sD2VRIpC%2Bf4VfhM4g%2FK9qF1KToqSlSXAiEAnrofnqi%2FnqqZcqmoB5gyV5AKhdiPGMwtOnVpR7TEwBYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoNLds%2FymEA5JCxdircA4tvoHw77xj%2B%2FqgpVBaThocCvzyBzLOoE0fmCFPS7g5YAqtU1c1MLPegiMnWoehJ2ifM9O3aQDeiTO9Q2ect5AN1xgGLDViY9mjsL9XqJYtioGqX4GIsG%2B%2BPDsU%2FP55fFnEDLGZzQwYn2TPEqEzIpVbp2NzvFgtYVS3%2B7D%2FKOYbtb77jpZeXkp12dAkCc1QwhaWEJxkuXu%2FSgvqdO6jjoQ7G4ruJWUbII7e2WK1g6w2qS53awuBhJW7J9gDWgmg0QxL%2BnbRvaTt9rPuZDnAvwfL2JoVcp6ma%2BrQqkPJ73l0HAe95A46WCB3WJEDxljiRduPWcas0IRvaipd%2FB1LDsweMGkn2KlI6M3xZyCAP8Tyu0RYu%2BKs8Uxe%2BCIu3Zi8FvcOBT2zhqcpVczpAj9jiItPs8ZKFZLscqfqAspq7qczof8BCZ%2BBXC640L%2F5uUlAGMJB46Z80An234oxWE7Aczwq%2FmUYq6UwflIchEg%2Fc851CDR8j%2FKs3PUZZvbB9%2Bo1wrgu%2F4pl8yHIG4fEinzoBty76V%2BKygFcm4ALCRJzpv3S4cPz5YNasaaLXN%2FwpxtDe6nDjZdIXntxNa8xnrGkc6NvepoDBE0nKxpDd4uPPN3Cs9IjKDhgZK%2BtHuWPzMKikgcsGOqUByuym7mUxMRyaKuSqOOZALS8wKuZgEwO46dRMJ%2BiqkA4RtcyDa3d9EJl0eWvBG%2Be7ZVwiKuh3dfTohV0hhijjt%2BYVm0XG2JUQbJfeHbDqbIMxwACsmI72vwooe4I0Rw%2FlHDxVMePQ5KNfW%2BLy07C2N6j8f3eFbbMWcZ1h%2FiSXfVJYdC7iFgOYlyZjih8eRzfM0uM3%2FQ7uCbLIZat5BrEOyNpi9hJ7&X-Amz-Signature=cc7c3d8bc2055073b58f05fc14a9dabf2db2f4f77bd7d11ad9682b082447eacb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U25HRJU%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCas7STSE1QgjH%2BNygwYiNSR3tQGg%2BpUJHETxcEkwpTQIgNKjlEuu0F69Hgviq4nJosS%2Bak53dG233J%2FueHuEfZwAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqh3a0LEaBjYqVpFircAxzQ%2B1yc%2BHtGZ81RgqwcGmJBkWXwYE7IKt0kn9NqHPbXN4yYF0MBpzawp1EHqkl9cPfNKZcQUB3IwyvVXHYutZ%2F50kDkJbu7ZjtzAZzKumAYHHJvqMMBpu%2BMhb78%2FF2HRxycEC7G89ZT7tJm3mrsxAJracTqFWMUvlEK51khHt1zt7%2FPJ7GJB%2BjNp5GDeFAmGkwWdqcHSvKRN77XpKYJ2%2FUqNNXrMHu2n8f9AwD0xlbk4lVJpa%2FN7XsLnf1fSUhab%2B257I2relVYbdpWVFoVR0tmpMGcTC6ni2NOJiAuQjBPng3nrQ%2Fc2eOABisla3WVHbprM8DFOZQ1MvgrF3AtgW5m6S4jdHp23xqkjjs5uXYV%2FTDyi5nfKcB%2FhPoTSd%2BZKdHW2aW5%2F0ujvmWVumRVb72nYU035E73lA5zJiSSWYYrgMY5VHfHUJgIMhflsohzElVi3dPdKyLMBYwWO2J4wWyDYWNVzg4YjjSOkUFxJR8%2B19iv76Dz%2F8%2FBPjMkOD28Xvbg%2FvYFTIPuxDKIEDa8qm28gabqk4EBRYJ8OzNZDR6lbBGBVivjQn2RHGfMfBYKRmPPJnWmhzKoVeKi2AlvXC0nfBOQqABt1hDoHsFP869WLNlXFjTHfydFKQZsMLekgcsGOqUBiiygXrf%2FQR8OtnZ%2BvIPDPPd6nkgjJ7Z9Nj1n3n%2FV0XDlpwzyPUf3NLIzH72GrSmXzZ4uDRMD2Q9XxgppD1S5vMaesMQ722JX2Mwd4XMtiB7PMWtMQkcYhinuP5jjF50unDWjSgpVGdK%2F4uvCU8R3eAnJ8YIT5Dl6k51WIXS2mzaIp%2FASs6HOwPBo3Z0zqvBBmsMKhGw6NBC1aRnpy%2F09d3LDPQHX&X-Amz-Signature=d7cf9b5e6fd430cc8212d5357090224366768d642d89d8e0a0bdba6522bd4152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRJ6WHSZ%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQH7uMA8wy8Iinb2XI0BdijJ%2B%2BRmcIm9Jjd0ErTkm0UAiB0e000UDlu6aVyB1FPmk1c0u9%2BDfgqxQcj%2BPvc4PWuvCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwples0yfBMLzDRvDKtwDfqQLsqLrPodDXVo7kSGNkXpk%2FD1ru35rXoLGP0wg8udIna%2B6jUI%2FF80dzYi%2BJtdktjGWrfA7qKlsWPQDT0GZaKQTOsgimaKPPXP82n77nTadxgHPlChdTIbgd2NnSNo%2BNaKaGRbxaMWRDboVwTgGyQZ8%2BmDemB5yipMX3oi2ppPmrc5Fz9RofBEjdsXUaXJxm8mHizr9yGvQ5flzxo3IXfL1SrBHbULyXtyi2nvUONjxO3xR9z3iwv9s3ZlKmXFecrdUEnYvBKxL6RKRRxKwLfX9McL3R9Etq%2F8zIB6OKDTcmo%2FIJ8YYsQ4kTqXM48OFRmDNKEcO%2Brj%2Fvhs88a%2BZIYZqdfId5RkZxeecC%2BLfW%2BAbtVS9PMqyG6N%2Bt4Yl6bxoVsrTHlErDui6mmbcjtjzvQrqjKvfLB3g%2FbKLmuis9dAT7Ts%2FkUkvkUs4AUEgJxkqVBFnb6j3mu4uO3GLTK3IoMZ4M6vKvWZCuykiUqJGMvtLcB7P23IFRc%2BtdtvU2sfDTk6VvSdnw3y%2B1RkJrQxORGvwHZdk4hI4cBzmihSRD8qvLNB3jhFP7OcmXhDjyw4QR0zoLVwBPRirVOfYBT2KuGa6ufFM1ORz7n8dgBeIaLYBD4J7%2FYl4WhCO%2F84wr6qBywY6pgG3rh1asJPMBF1r5GvDqtTeTSMGUnHhVXjy7ydV0hPBnLxEy8Y8xeDupgjiXV%2F9sxsw7Flsxt74rWOBjrS80os9n0h8Qni9ceTWh4Y6WOuAAcGNUM%2FA2sDQ%2BbSPODSz0DmUMRntiM8nFaUaU2DpA2YD32yPUdCBHKCQzQ1gyZ3HRFrzIYUw7bH6UnE0bwAfT3P1lPtq2dZL24uBTGgMVWy8ur1MPXQ%2B&X-Amz-Signature=1a0e8fbc87d9e9c3c5fbbfcf851f1676cb05478b4731181395a67ac71b304273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622SVZQU2%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd0GpjBkbY0TlMTsUVamcHyZLqNHFOFtCMZSaKNaSZsgIgbFFj0NINQ5yyW9QPypR6GOcgixPPh8ElDvJIdBSPXTYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2F9J1OwVFYNJcsLASrcAyWzE5nPC8reI0cgEJQO2fFnQHmkWQL3xZzR4IJVv0m9qp3%2BQ1Mp5lJpSrXF5bKhT7FM8HlArK79olfl%2FSktU7KnkvopqJ4WJBSdtcYSVsghbMvJowPLCmIoUP8f%2BIdnFG4xB6RuniGzPyBW5nA5wIR2EDNG0iiIBGNOjT84g%2BxTWpCifV8gD%2FEpHbe5dvIxD6jRPSFlaK4cKVt9A762GaLJaz7lh6LhdhTpm1QXL51x%2Fn5wSBzVUEbNc7R3JAkO17UjcBA6z1tw9a%2Bm83x0VG59dlfBabUXxs3ev6HTiSCVAk1VSZwq8czyhm2YrDe8%2FctRsY%2FPRHbupOhqxHwnry1a1hS3ukDCmsRPE9V1rNcQugUQTH7MicWdJP3BLzRoCxkdmbH9HTd1whVk%2Fwt6XaUYchwDz5UyTzerC%2FE7Uue87Hn%2F25JkVeHU6VMVASFvFlkoB5vlfzvhqid5nC3K40FRWxgjSC9l3f1hi1IzEw9JX%2FJ5qhs1AmBBk5bPpWZQ8dkRCYtlicfPbt0DLmf06GbtjJ724zYt%2FAQZjkeV93JaiUwqkvOFFobnTzQ%2BJapnxh658zePTwudjQUs7dWzEvJRIqDdNRQGALtmBTSCz7BQup97X%2FOfWr1gQxKxMIOkgcsGOqUBgFuo4Qmk7sWqcLJoLK2zU%2B0aAvS16%2B8CFl9P40ZSYI7PpeYk8%2B5arQbo8DInhcbKKJFFQcu9ix4cRIXB3OSbXo6PjCTPj%2FJ28WhauhDlvQVZNfEEE8y6PERP6lPE%2B1okD0d%2BI6tkdogHhCNRM5blcTEBAFnGp03rLTJiinbI8LQiezKOt9O2FLkexLv6Y%2BTzcYhYPCi1Bh8wncy%2BNe5Ze7LhukjF&X-Amz-Signature=5df87537fc4319cbd6954a72abb5359ab3c143f957cae1a1cce7897cc6113765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

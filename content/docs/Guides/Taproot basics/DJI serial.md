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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZJRWCQY%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnlvusCz2cbpQGUsKAMiYy%2BXMys8zPS1bYGFPSVLZHyAiAsGO7eN19BK6uNdK4Uj%2BHPLgHG%2Fz7m0WxUzBskWQPgbyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMRguMSS2At1oY8LgrKtwDb4fNxlCMHCGueigYp73jza%2BEXgC%2B0GaQ%2BfpUzloWW5xnSQEqwSy5UfM9bxDD2RETHncO0wU4smkXu3M1hem1EC45FBTnDz5TDvUrObb8Kbm1bnlLU9loMSAtYFGt88fvmqLg8Gxgt%2FXMRUUDeLjqXGUEmSL6G6GQ8Vxq9d6%2BUWQTPWxUQaMqoW%2BEUgHq2ljhmWWxXqK9Cw7ixyoaAMTIaCxJuTfF%2FuqIliUM5FOj%2BcIXYgpu%2BGxucKCksX7upNZyJnjqsrnve8rVPHg%2BbHdoq%2FMcSU2Zj7zZdGLOT7olTEB%2FWCYRWIWLN%2FS%2FP0QE%2B03YY3FziInCkv0Bw7xGiaKLtw6ztGWP82iXNnYR%2B4%2FC1NRJ33brqwKoK8n7AxY%2FADYKUUOJEEyx7axgCwpGe5xPK%2FkZHcMhEqyYcReaJoukwdIxVe%2F5SWQjrBRkXveZqHvs8EOkRH%2F8VQS16SJ7aEeiCy%2BBRNPLJXNbP%2FMvtSoGprPqFCcbCWK9DYxlN6u9GoX5aDfy3uxY33zLlGgbT8Jl%2F%2Fo%2FJIEnILFBfsgzSkfi66sV8TN48uQ3ST4FAXUn5YjdeGuEMb9AV%2BzdjDSldfRzFTPe5V5LQMVJj3o7Djl7rAhduet05xnlFNJRahUwucW7zgY6pgFcs%2FUPOg4IBK%2BmbMJWLaaeAtK%2FQv5EXBgTYEprZCNlz%2BYSpBHejrNObGwn%2BxKkkhQB0bUjo1zko34eXvnurSSpKyhZv0DnrFlAzsMY3cF6c%2BKdPL7bp%2BADq1j1ruY%2Bti10z%2FZfdK917Box%2FS5QRaVjMZDsJilTcr%2F6ui2GKYTysoQdJCvjG9kJOBGjXKkWIvc73FjK5adRZ%2F5Zbk9iguvnY%2BP7wIMa&X-Amz-Signature=7540e876aa530f57f3be1341655d3ce784838bd6937da523a3386e4b5f4282d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466243MB7KO%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq9NPKF1ENIlPYix%2B9vr4dyJSU3HqwOMYmNQqYVIsurwIgF%2BqhXVnhw5xWKAX9ARLdewJy64eKVTWvcFkAn1sS1gAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLwfYmnJwMBmu1rF3ircAz%2F8OP0qFvtEu%2F3zEUY6RR2VyjZLYht6HZWAqS%2Bpo8CnLUVDvpbHrNYGS7sFArbN4d4S4%2FS7h9l4KRIOe%2FeagK5WyotAnoQJt%2BnnYVFCQC7XcertKDQC%2FPXhLxggU2fvC6DiMus%2FXe%2FpRkKEZaNM9Lolr5Ao6hp3YyAQV8JfjXi5zh2N4vA1K497k%2FiOSSjtD%2FFC3HfUIS%2FRMsvSa2sU9RIiqHseQTY46rOxhlFIZQuEQswGB1w%2FlmHzDH4etgBsZNrRaT%2FbMd6m0X1imf0%2BIbx0Un1e5eQjwtB%2FysFTgZ2%2BddCM89C0P6%2BH4fNNLpGhtNzk2UqluvOHKfAnPIcdXliPnOhLQBnsw%2BVBbTtsJtdKl2IdYJj%2BwAloM01I6bxBaBPqU%2Fapst6a%2Bg9iahwiuv0O0IgCGA70jFdOQF6b6T6%2BIz4g42%2F9ncF9mQAhX6aHWUbq6kpOs%2FAmkjKgLTnNgobDjCoH6AEcHGHENyamIRGAHSHhlDlVdwG30OHYeVD0RGA%2BYZdkpuCGnCV%2BBwqqlliuKJICNxT19dflDdn63b6az4rzy74uCEDMPMoe%2BU8uagTOeVIsPvUiNz%2BiRs51hadMr43%2F6SbxjyiWESvOwGlCw%2FRZfbI8WYmSKOm9MJnHu84GOqUB8WCyud%2BIO4dcIKofAIawGcNO2VWx7Dae8lcwF1woV7ot%2F4CO5%2BaVAmFgKsB93cZX%2BmKh%2FvCa3mBqRfrwJIOQGjROj93aTJmkhVwkmxrb0BwTlVl6fcbdmIDnh%2BcSWu6GP147VliV2GzFfUlxOS92NWs0jAKTFCIBMu5RCrU6%2Bt1jBwi9geCv2vum6GUSR4TOG9AO9yE%2BBlOy4%2B1dk1iaPP9I8eV1&X-Amz-Signature=9393043d46140872e4994a30fb81c951cc8a093f157265faf88f7b20ac7aaad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3GQXBNL%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPsh2VLSUKd4e1EioeAZxEsCdV9o6krKNsW8vt5zaJ6gIhAIS3cPbNsbj0ZnR6jaDFW1xNOeRUDouesWGROOGPBzxZKv8DCHcQABoMNjM3NDIzMTgzODA1Igyw8uyQOppsj8dQcicq3AOqrpfb8jF%2BkaO9t5SvZhWwozDFx64c5zZIm3EVIac4jiT8PAjWRYFNOM%2BNeiWDpvkQeIs%2BQQUtGww1Dv%2FLcnYEY8Xv8xKM%2FnLYnc0jypxW48r%2F8UKKskWzzvxw0z%2Bb1vCxqqUHSiqwLsIYAXlJFzlZP5rK8b0yMYJkBToJ%2BlVUwQ0g3zEG7GEYGJPOHjcvtb4YJusMmoCXucdBwvM7Xsmv6WH9pYj8Hq3uqk0tCm%2BHXWLM5eUdZnf%2FSfMSVjXdz%2B5WadLwMpX2dtsrZHXxkPbdKluwlsC7DKUQukWLV3H%2F2ljniBBmsmh760DZMs%2FyAy2rEi5BFc5HpQrwu38I%2BbopizSg0jqgDXBfggYsTNhXEoXzvVmvl9PrKXfppBT%2Fht7HjN7q5zZD3oV7BokhL%2BMIOi6%2B9bQ9eF8j7XVWxLhBESpiwI3XOVc9l6JQ8wzjn6qmPx%2BIdclJslJKn0MCNpi03Fqsx2fYOSBa7GTg%2BCbcM49Vup63zpVddDenGAtqnBC6T8pvgsne3E%2BU2KcZCesl9UouivAr1HOO78ntJcpI%2BWB0khYLZo%2BpAJqtMsO9hGSJSeLZF8apgSY3rDcbOPWRhlY7YYjJSeegfFYcAzsU%2FTJvMqgfV%2BkbEkMiujDGxrvOBjqkARiSB4DVPRMk1t1BpXZt0FCGKJwSbtNm74hr%2B0qqsuPbZQdA9gRogym4V1kw48TKTANdsGdRRNC6Ow4MzOfO%2FsTf44msEGoch31%2BRuUgYzPguantchYifLMKpPjgqY6kKQM4p3BPu%2BFnPtCzeHXscJMgsslMyV4ygxAj2meMrcw1Up9niVWktuPfgY1bD%2FUgvSG2lZFP3CAvhPKnE6CL6YuQ1I6V&X-Amz-Signature=aada65633baa6a498700083903df1e5c20b3ed3369c71fef66d4b4172d1012de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62RVTTV%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXOeetnowgTF%2Fh2BA4%2BaE26MKM5RNPf2ATTQa2keBiSAiEA70QgCX8ja%2BmWsf8ySLhORr6jPREVwU9sekEgnUqqWXEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIo5N8HWbouVckK8MyrcAx8nj5psI%2BT9mC8Mb%2F4re9qqAFMB3aasTTpWwEt77jmWWmSfYz9wImKwNXjJf0FVL7btstwvYdOzcEY9JMmMOYkilHLjkaqxMcNs0ka7SIgYQK7nCpgR7q8JpGzz63k2Nx0QoBcIWKgDM8xB1kVTdE%2BJOi7woSx1IXbHKHzVVwQOAtaEXd71IZPfH5KXISswJR1VQmvx5AuXA89w8StHo0hdSrDkQQQbWrvCnYIcfHfyCrsO4fz0YH0qbrjm0jcDFM96Kvz8cm4zXDoH3wd6JmuYjXeKqWjPpFIkjX%2BFpy1%2FL0Z4w1LVLO%2By5lm0SVHhOl5uU929Xl2g7erIvxzhkRYr5eqHOMQ9lwvIQkTJ6eAvRkzqELakXqtRzYdb7acvzwn6KrBiWlthBU14IPRCGHsfk%2BTxChx2v2AQ9moYWiWb5UPLmVTsdkLw7ciIholMO1nE1dpOQDqio2%2FXvdNXTsh6YmLYpl%2BZPeC2UO%2Beq7l0w4W05RcSZa6eBqCpXgz0DVNWc9bLFzU0ZYQgtHIhpIsOOkZbkKDn%2FQSgynd3JJJf%2B1Z2iVDkFI06A%2FKk%2F1EKoawLksUdm07%2BaQAXBOJOutrcO9NG%2B%2FTCBKaM1dsAls8oCuy4VapYAd1gYIVJMIXIu84GOqUBPxoOe%2BvCxXtCUHk6Q8gdYKL0cMZQh5jeF6j%2Bw6fD%2FOl5u51XcuJzHjQ6j3PIEJktggndttXuSy2EO%2BGUvTHuOIAJqvVYzpkn07V%2FmpZmyYz6O%2F9IivDxwfn36vopzLO0laWFrg9EVnhNfa4OlQ1cfaJb%2BDJPR%2BWwn9QZSGYBQpotmE1GNxZ1eYsVkY%2FLeXSsMaWN4%2F6gcF%2B1qjGKuZf3Nl91iapU&X-Amz-Signature=dc3d6322a171fef81018a1c20d1342f44d5b2538d043b58f6c6c962629a1f620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6ZZ7VIM%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHYbH0lb5n9DVt9TpQrp6s9FLl8Q68o%2FTftX%2Bu%2BJ%2FGjAIgSMDkB6w97MvAb6D2s3zv9Y12SpWd9En3jb%2BlG3uiq%2Fcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDCQ8fyMfU7KMNLt9ASrcA%2FtJJog2ej%2FsVaNTmYvOQdUouHLFCzMvJZeDLz9iWOUI%2FOtbX8%2Fif6%2FVO4zw9KO%2FyhY6sN2L3jrrxblGGgAMcvhSTLq3b155pnSLuT6SuU%2FH4peyv%2BPAUo7OZdI0g8NP8YGbrl3t6PWIPB%2FjIX3mIkrpTrdBkMrw4i7vsABD7IS%2FANZbRFWm4pX23ed7m0QEmwWmRQyvJSzLHFX%2FUUJeVyreiDW42R%2Fa1IJAZPmhCsQeVj6QvPTgTNb78Z9%2Fl4TCRgYuLIvdeL1wxqVRfnxzmVszLuoFUqIWZMEplBtpQ0EHneoXDr2XIgYOeTsZTESzGg7%2B%2B0FoOnJr8JDRsDY%2BC74vO9piS4KKD3fcUWJQf%2Fg9kf%2Bu3tCDqUf3Ghgchvz8F8UeQP%2FFerN9nuAEmUNLEFuXXPHXVD%2Bz48YVL804F2V%2FNceK9NJbbFaNIFMh0P2SU1PAv1rRIYexAp9g2eAZhmfOuIZ851qQksZJBqgwXUbGZpdtMz3rEtjpfWNNL25VFa2E7mAamuClzZ9BcZJzJzIwGMhKDdeURLUojWZ%2B%2B1D%2BtaPs1sJyLVYV%2BmjCjmwWtBMQYeLqoGPe4up%2FgIihokzZOOcBZUleJY68rOF59P%2FDkr6DjTqXG9sqReU4MIPLk8kGOqUBKa%2FhtjkFW%2BE1WY9xtYtxAHoH2GW8a%2FNjE23tePgj%2Bp83zRLfhcDlg0sqSujzcLglA3B08gBn7pnOq7uFnbp%2B8tx%2FawuwO%2BdrIz4%2BOcrHVWxQn1HdJ%2B%2B%2FqxbzTRh5u6Otuau02pBWDOM55EiQ9hH7DeeCJGSjA8Dc%2B6WsBu8jcIc05kGpWyqkqti4qQcot%2B3O%2FQRJkc8CNUzaIhuM8ObqVAgbKVpu&X-Amz-Signature=ca48313764f5b95f32e35b8a172068b68c5f658fb1aa32e4bd07405f64367a95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWZEOX6G%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrsPdxfLC3%2FUsNvgC4JiuaOtoi3xXJRNadA0U%2FD15KDAiBpNd7fBve8VxNSwXF9pFCPFeFRrZfdMdOEh0XfJb8%2BvSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMS3eDlwBnF0SQ1mvCKtwDbiKt0MpRiU9xynpvyoD%2BeH7YIU6XjG%2F7eE3w6N4ViJND3P66IPY64rO0JVuzRP%2BGwJagQUuVUH4YYW%2B0icZlQ%2BxYxF7iajp8Y%2BncR%2BRZ47MGC%2FkDoVL08KpT5UIllpzYhdPw9%2BuA6HwuU6d4E5cvSlJlxKdNMYL3xl%2Bg0j6c1c2F4JXJA5xsNaZrvSYIPFqfNs4jyiARF8OP%2FCdQQcqrqP1qETs5D0GIantjSma1Ngv7fN20DlMpb%2FQ3y%2BnFcNAfaFl4KpGCaotqB%2BmrnLhrIhFkV7vN3xH7fWfazMSS99NXiPOJXcKk%2FPw0fOMieW6VJh4yMHDwN2aiIFHayEyWSTJf8KPUkems9UO505Rn8fQv96qmKclzJx3OYKQbEPLTA4riWNFfNxpooBWpVXyNOSPfHMjjqhFj18ELOubgy0OrRduK%2BD8TQKT%2BD8XaeSj5SunZok7VmosrSEdkoWsof5WHGtN%2F8AKk2pftZiri01ELJVZnAEYBWXN%2FAJnHHte9oRqJb1ABt7R8sUjg1IcFQlzA5NHFSa5d3mmQg6ANSpVITsHLRHZPl5trzikY7PSPol6813rpDjrjEmta5TVJFzlnS2gfVCh%2BnhcjM3VgLuDuH89r2r674c1o0sQw%2BcqTyQY6pgFFTkoYx9T0uzsqIpSfc0YIbfbgqU5fnyfk%2BuADsRZGdm7dqU69MyA%2BtNY1qu5G3fJpntGip2tYNbKezuhJ1TUu%2F2vrMIGBiUTsm5OqDJHH8AWpV6rI8IGsPnPTtH%2Bi52Xjjymz67oHYIlExykjh6IaqdbBMZfYnjttIUHKck1CKe4NbWIOhZpZ2Ga%2FKNKadqb0ft%2BHbnbhwLVPQWMdqXdkfhhrMyOn&X-Amz-Signature=53410be7ca3a89a955c51f5ce5e2908b50a1dabf17790649b16ba08d6585bf27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647URU24K%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBChKnd8LFUBRaHGC36rbIJipicyblrBn0fOfiI9U3RMAiEAw1aHe%2BbSRP6%2FxcnI7kNwcJhdLMjSR85MkPjkto3y%2FCoq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDHvrM5ApPKjTgdF%2BCircAzjlwcn1l2bsx9jRo%2Bzksk795%2FKJhrCTSSw5nVHmNgRW1Fy4UGUUAR5jfazyWnIaTtY2OfbOrbQpDnhhO7z2kjC4uTWFfHfhEPjlPNyq34QDHm8IPXOsPnUqTiDeP09Xs356nyi%2BWkp2JK4%2BhguJzw0TF9CaMb%2BQ5q9qoeTBbK3ufowXKPuMrew5ofKxK0%2Ff3Kura5qZ1m0iI7p4IbJrD8K75OlkWRaNloIViZUXWmMzpcl%2Fk2CacCU10oEkFfdiFLXcJbUPTIeS3aJEl8%2Fg6MBdh1taAwGPCTwh5NzmJoQ1Qp3tGNPFA3hFvH3jV760ekUgxeiszIwXoI5SQcK1VOQqpjw8QogbRkUnNtGMpu%2BMxUqemg7aHZczFD6Qc1Xhd9S4jSH423DPHwRtWLlWWgna0NSZ%2BTd4%2FZOvaT5PFSWoFPVMpChLGbF3rzbVmYX%2F559hZAhVFYVsLG9oepCpw6IiAXNfrhYkoyYLq50At2njEkMRJdMHohStw3ExdCg74dom91AajrU7Y1O1A7zCoWePkzs9OCL2tu1%2FbZy8Dl38ybcwyI8kaCnKMWoYDvkNT5EuOAm8gIT0gkpf%2BwF7mBKo5V5JLA4IeTfcEc4bUOV6XQ2oL0p0PxrbwRC8ML7Kk8kGOqUBD0DtiCXOZlT6OMEYTr8m9%2Ft%2B7rY21bs5PdbOM9QQQyO5JDefd3X3tAa4i0asfzwLkzyz31sdxI%2FYzJXhFEYm52saAhO5340Hjn6hcvovtFXFUAHQlvNOHJpkihQCOHJL1K58uVg8S58Rg7cFNcd5v2zdksd%2BzlN5S5BrWX6V7sLPsgR7uZhurLn2BGNX%2BYdFxO32COAYaeQc%2FtkDLjmb6T8mL386&X-Amz-Signature=05d509fe751360e916a6823c8987d8094034fe68e7e959e6c67972e1ca584208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTNPKPVR%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAKE6q%2BbQa9NAwev6ctvHlIWndBgoVo3%2FmNYUN9JlFaAiEA187Xo539iBYZ2sGg2v3eDSUUlviQVOMaMHEkbS1WDVsq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGXouKLJtV99PBScKircA9GGwSVLHuY%2BdckbmuSO2NPR8t3Q3tDF2ka9QjoJWBBDgGk7c6Fm8Z%2BB4oO6cjE7msCFjS%2Bm8wtsXWVPIopnnjwHA8YIIWV0APtr8oayDgwjRdGPt8J2z6h0agZwoGiARgkvYvzs5Pypi6%2FeUURye2RDMOMXnsGNs1DalTHoCTSyLJ7E3euNhDbYfxEK8wgMQu5fxTGEHFaLTRHsVR5ewFXr3vMCawwGxJU%2FaPZsiKHhc5GVuVV%2FDQnTMMn333DATsvzjRZXYMgfUh%2BAmyWQJxaEr%2FgZziL4kkGrjK5gvFDfGDjUFhsn3xBGMeGu53oB5HSEXrY7ynZyOcaiU5TAbKTOLxwcjnyI2IVNdo%2BovQG9QUpB2L1Z%2FQA4hD9XBREYMcqsYIiZrjmpeMhWgg6s7nvKnGfne6SrvwUPPfj2imlAv%2ByaBIaRjmZgAQ8v7FOsqChqgRdtiTlV2Jku879nuDptZYL5zJAg26xAhOkHxhOh2kd%2BGjPjT1FmVaBR6lofIRPV73q%2B%2BL4Ny34fGDQp7yhJrMERgm6M%2BBwg7FRXNXBKEQDHiiVwQiNNp144qcHdXwudkoTu4ewsPUQgMOrgma9ZrkIsqmf7eS6rMP4juWhT%2FxVLKUy%2Fld0b2PTqML7Kk8kGOqUB8VbdTY1kbIb7mx73JXDPdgy4AnbG%2Bb4uPWxus9iDkTQ292fmRhiN%2Bc7N4TYefucoQl2LHMY6yllcZdJRf7coFNedg6%2BMCQXqHjvu2rTmwcG4PCCvk%2BIctsAJY%2Fkvn5qABO3b2YjrCsDsddQowuI2W3wRSaNbCHd%2BVIch5DangVAPskKRaLYTCMHwxE0goQOupCS%2FKrdn5QYGR38mvdTUy1ggUEOB&X-Amz-Signature=db064d5b4c214b96a7e990b101724579e7718697bfc238da9c35c86cbf9d15b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

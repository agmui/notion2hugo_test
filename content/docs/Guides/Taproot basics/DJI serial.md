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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XTQIRRR%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIH9QafArhC7nU%2Bk9e%2FCjp%2B7rbG%2BBrOIsy0tuJN%2BZNdAsAiAEEwXytJN9MMToMvRpmudxhQa8rrSc8vJKYIiyJ5IdnCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQNx427DMHQQ2Q50kKtwDwk%2FGZ885yv8%2FoAdTxFX5MeS4DU5bqmo6AJdKCAdMjnM4QOsvhruv8VzGjxhfQgn7usaiWSvcSSaiKHExB%2FqErhMa%2FlI1xyR55rELvZSuoKHWPoeameLTyxrfSvFtwk2V0UtqFJ1pDgTt3HYyOyh%2BOGqoOnbBnZKYSKyqrE6hknPd54C8sWpiPXrXP7QtOybnw1gXVjDVjuOtWef4Fp5Nz8fV3dXiedm55tF2CrjnAGxXf3Q3H8s59w11TQ3ZhqnKfm15K3LtPjDebuVa5EyZ91KzRMj18M8gOTtKDYl1h8qPSulRtoYyEs2xR8lM7eDlK4b5PA3gYoSk6KAbqUOgHOX5IDmwF%2FH5YSSGi%2F2faurLxxAS9FMZEo4%2FuPeyggDgFWObQkRF84eMJdeB9%2FJ9Kg16tKWFn58Hk2BmxrKrYMg73sXcpqZ8aZ7V5JxiPewV13ptBtOOy1kJfpF9zVp4qEbNPQTTbkMHf55c2umChYJ3pAzFQO9aTvCmGbEXBP23xnEm7N4AFLyccXf8CKwLyIIujB2PN5bYTrghAG5M1DIIUsCvcUTso5ST0NQb%2B0B7AWKuMmP1AyfTlwZSAHVsj%2B7kdlMcQHLwhBeCTOv9SpLo6FQwomJ8OXNwLf0wvcC60wY6pgGOjRhzjNraXYU6OmkzQI1QJyQ7ZGKa%2BFVWm8PdQlLbJJTrawu3dKLZFyAyAGiGR%2FJaclB24ztIHdI9%2FcKNybmeM9KmX2QU7CTJzempYmjvQVl1OKGkj9ojpz7DApTThmQJjr7Fim8yHKhKy44xEfI99KOPWcVagoLOqLr1K89iROBAMI%2Br8f1d%2FUVdoYgTbJSZPKY%2FQIzlevJjUgE5xqTjUPWL6wHP&X-Amz-Signature=7a1130e6b5872e71871aeaa29dd51f7c593fcad2bb5f5154d2b4e69afc1f6dec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR2L62D2%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIF4RVaJVgVXwmWI75iBuxmSmIlHJpaEtb5eOk2jXvtWRAiEAz1aIbMEHG5rG8HKJx6agPkCKwWYriFP7l%2FRVOEVJo24qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIX8pTIjkKXSt4uS3ircA10qNJU0QQdxKCB%2FZVpVyMfwHGqp7MenQgMqH7GSOcPeNTDVRbxhkki5W8K9zHsRxeasUyfy%2BJXUp%2B%2BoFvfTOQYhXiMHTk7LeCYRdjBmxTIgDE36qpBDP7hs6tpVGWUtf8o1URbYi1ssIq7Wryiqn4CXeBvNiuKghLBbwjKz3deBlqJ9Apru%2F1PYPIza6zBa7Mj2T5fbhex74VRxwfTbGwJcratuE3bQc7hs04ppgaONutwczEgX1HdXU5t8trxPC5NJU0biyR8EEAoKaFfVnie6cFL1yK4LDwcmI4zrkIJm4f0ITrBA16djDtq1X6GbBVn5XrraG%2BdhXCTdKSON%2F6LliDdEdbqY57xaXqFb36xJuBk8MNPCBe%2FHh7derYHjTpiD49hrpW72YoKnRjRsMHoCLiQVvhXAKI%2FswpCQtL%2BYaoZNmyH4ISIbKiApjae%2Bupfoi7FcyHJSfcV4pE580BpvglglLjNJIeCtu%2B%2FYN%2BpymF3AR1UoYTXafpqxVa4dh2Kj5%2FKo1W1k6%2B9aimYinO%2BbQI%2Fb0a1B%2F8iIDYeYWd8sYoQYa05WtPOOE%2FlF%2F9BgFa0zxhVcEbcFjhZkQRYnAScqlAGFx46fMz3HxJTEmTzx3rL%2By5MHDrVr6i3wMKfButMGOqUBtx39OEu9k1qNdoWJHoqG5ZoZiBPKgfDrZ%2Fh%2B2HNIHUs4hEqPKxjdxgRDIMZrL9tJEx%2FGGY4hT4nZwVEi9qc4bj07E%2FZEvgiqBq1Se4WsBUOPGd9iqyMGg2MEKmgzxFoxARkCnSvos5ocLbw5c2kw78kyGYJ8jH85sdeEFQCUTyAze8fO1A08I%2FzvLNMO3cCt3H5H19WHD%2F3aqbRH555jCkzCZDzo&X-Amz-Signature=3bbd47be364f4df43656ebaafe3fa3c93e1134517349f973b3baae71e133bbf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR7Y27EF%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDYzWxKqhwJKNMV7FTLSqCb%2Fgf3mpGXz9seKeoo4GpQiAiBISGjaGU20iiau%2BCEklbuZGcEzI%2F6HhFr%2FR99Fs2036yqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd59g%2BCuwUY9mHcVvKtwDcqO%2FO%2B%2Fe18SKwc7VWj9NAxUFnvEKoRr4Hi684CVQOpGlbjT80d%2FkLeC%2B5O%2Fr%2FkGqpDlI7P%2Bmmu%2FlBtHvTFcV5zVJ4n3rOlB4w%2F38iVgNq%2B4lfXzQugUMghH82jyCW78ptozS5tHJmSAC1zREWvdV8drx5MGd9gG7VtbOUKAsPXH%2BEkBOIFuqs2fa2SCOQqQ0pc3jy9CHq82YxS5TkBHao%2BuOsZOc38XUO0k5%2BOPcc02Kbxj5TLvDKxz6DPhDDUpVQWsATjkgGbe7XFK3NtdkzG3gnicc%2F%2BvX58aDlXjojBv6%2BV5aDL9haVQkLKpXlLnDe0moCcdqtJcNUiLS1Mj3WPSsrwwxbwsloI0yn7btVaoMihu3J1efLrnohf1x564DOuWbb465HqbNnAdoxZi7YOB7etCVZTv66KeCY3lf6jNRc4YW9%2BoErqkfqQC9AgUCtPJvaE5y9g45oRqbuorna5oFiRzh0vmjdIC7eMoxwlY4yu%2FSvL1dX3XcPlBBE4PUfdluuZgG70y8%2Fb6cKwScDKByJPU8WtDUn%2B2GxpP4X0aHdmD%2Bq7jvECvAJglh3kn%2BCCAvPELwc9PBNOxP%2FtvYDb4XyNYo3O1BCwaCLvKHIW04zfZWQd2M%2B%2FnwuNEw%2BMC60wY6pgHt3eEjlLpT4rZmE50gpGPmGmhCUnoXjssJc3%2B6XY9pPk7WHP%2FQbjlFaQsBzUiVO%2BNOyFi9ZGAcciskz4IcJUh8WL%2BxxaD1WYyrNHq%2BMw%2FzvzVOEhVppZ8X6UfHL%2BMQ1FJgTkBVM7rJSC0D%2Fi1T71m97RZbfkNcY%2FTaEic%2BHZBdNXSfNGCdTpgB5eKz48zZS3KZSZd69AUGdsqzHycgj78J7nTULb8M&X-Amz-Signature=20bbaf45370e9c4b1329a1ac934fa264a2ee38f4341449d9929189f06be07e03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUIGQYU4%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2F0ru5zQ2nmMH%2F1HkVHKr073XX3pC2YBn0mEmX79y%2FZQIgQVg4RvTwb4YDDzYcDDu7iQuytMx3qR0oebiksGkPATsqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEshOC0VGJhv2vo2VSrcAxJdwVH%2BK9M6R0v41nzzzL3lgb3CiXv9%2FPUgapa96PK4AZVsrEjNxxC63Jpp7ZiBarChZqing%2F0FlA%2FdKYApL2u5ytsMwCeB7IzTYeQw%2Ff2bDjDZYdBfs8tzTNds%2B3SZtQBFI%2B9e6JvQknPgBSb5j%2BbLxQfu4AlKzAFV3AOP3OaNATpZaEseDhuGlmmucmcBnV7na%2FxFgyiO7ngjGcHhcBxiOJP8hGQv6LQxpe5LJY0dDitnjf5Jj%2FxbMlKVLq8ewPSHceRQHo1GlkiGihihQqXv6Rtery5CD5s8dlvd9QRVO3wuncB%2BgMMaUo0TTHxDK%2B0tJ0JeLGkVqxuYC5k8Hdvin%2BIR2SiEr9IezVElpAOfEyiJ9t82KVFqPH3baJWr0UimB1QUDQR%2BA5Ji6kieq6hmXtU7%2FubhSCZcLFYEkBIRLHuga1sR%2FMHMQfDE8D5GRxVaYf%2FbsU%2F39K2785OjFjtseG4BiatVFDidGGpXYvrmnCBcWPHCzQoJPWBTi%2B0LjBsn%2BhtMKciILYgiUFxn2dZXNa2mi7ngc6QnqgKSn8QhlyZ9%2BBB3NacgvtRP846UvNt6Y%2F1g9S%2BHJhC1Iki5bgwSOBTsxPruU4%2FRd4vaJ13hSTgSiyrq97mRaGzxMIPButMGOqUBomTw6HxfullrhmPCNaCFJ9lUv1Ra6SVXn9OcTskymirv5gT%2F163l0ZrmIqa%2BbZu4Y5RHZRYUL4JeifGwDHbD%2Fv%2FcDCQkLIGygJ4bRvEDS%2FqsdW92zhAiypn83lHn6qBkLvU0ShdrL8b7msa9aygAlTvJ3tu9r3ciaIAbOTpBBHAmdHO0TwSz42qUHnQU21NXdDiCpuhTkTB59wJRAfabkHg3Ezlz&X-Amz-Signature=b236b454eb9fde3122b0aa64aafe9db210a1a68e20ef502db013f9a16e561142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

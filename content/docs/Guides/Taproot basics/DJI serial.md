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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWUARR4G%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAUbjAP0CnRfJEVhAO1hI1HqTtFHsfzgSEKPyZt4AF8gIgPf%2BLTNG06knHMiXaFHMeji%2BL7zYZ5FF07k%2FOMJ32C8Mq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNYUQOtc0%2B1ayIOQVCrcA3jnJmWxJZ9kWJswX13qm0gMlCzO1nkBQQywmjJ%2Bg8CvYrI3vnuRjKEdOa18fW3onvAUCHYxETu6lWsJEASySkTHGofRcg%2FzXX7WIW5pfRFljTG0ljq7bfMubP0guzdopd60wBlPw5AbFh8f9O0jrkUsPR0%2B9wSAMEdTYX9YUAnI99CVOHhCupEaNskeRV%2BSuLtqAxINZ2E3xkUGN7yMlrU1IjOI9vsnJ16vxLdG3YlLgASMukyXOWzshHJ1NW5%2FZ7ukU%2Fevr9IUNQwzXbCV6chVhUoaW7uLNA291fv4nkmxxAk0CsAD0y6sRC9K2QpKi%2FxSw9RgnT%2FaVpqigXEr%2FGxz6kKZa7ZY6gD8pRwuXDUO8c9IOshLuZIBI8%2Bajl1ENA%2FBNYAaV5qtm25mqvowcoowzZGI6eFBOnRTkMIIX2DZ6H6E9UwSvUdLYDSQkTdfueoIa1yDvEFGA3ly89aqx16wI0E1%2B7R3TYGlCIEr4rRLZ2N3Zf980%2B%2FBZ2QwfJwN5RC441n2iTvLIOj6WlMeo0mFLxXGpmzpMOJxlRuXmKVrCak29aNNmTrPGHpHC8Vo2%2FzEc%2BVF%2BUAmnsv5f4%2FgiITgl7N90Pvo2hCZtiwN0UH7XaU59A%2F2hdSF8q4%2BMMDHt8oGOqUBEUrG%2B03ouQntkrLshf%2BCutsqMvZ5DBRgfVuxvf6e%2FlSkPlLNoVuIeEnBMDso4xrt76xR3FPlIk87KX0HvWc7Wo19CTO7l3VDv0HmhXOG9cDFOKONs2BQARMarwKyEX4mjiEyWz4THP6WdgmTSFJc5m0xxsg6jMUKLTSGBIsRjtZJDdX0tjcC2zi3ikfCPqj5yq7fU1tPnd3CGLQOdKP3ntkgi3pI&X-Amz-Signature=e09496f18da4753e1fc7ace1711bd797dac8062e7e4771553a5c1f8664dc759f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPUMKG4U%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICOdfmsezLuMkKh9rSrrc8AyMjzWGSAgao7gSAvbAC%2FVAiBWkjDfNFuIjEq3B7uvcwyMwH9KcQjUFxnG72HtxtjtRSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMX6as8FzZWysvBUrHKtwDdK1zD2UsBVgnawC0WPsljwt9mMLdjjZFRbQlzs%2FWF%2BFI5fhZPx1HUd0tfl59SXltG211gREyOZBZcVV0MXpjOajVxOdmODxo7qGEoVkAXtMjY1DLCxl65PrzkAVEPzEAacgOFHGif0holHG8mbIl4WD0KlXxceIwhvPybekDlSbgLYnW22jCjodrfzbV5G2g45pnGo%2B540tKjyspFeZvlyYHKzeS7STMZw21iLUJ93OwZ4PmxIz95P8rH7eKNQ2eDEN5Jva97M8DIDMFpzxtimDL4oYNEUQdjmE4X2ni1VzRrq%2Bi7TLAEw%2FQrAjhF2dPoqNLnTyA5KLD3XlS8cDmJMk2OB%2FGDLMuzKlv5GjTvJRGrLK4%2FITqUBU%2FAJsXFpjFEx9Vj1XC9qphvBgXASXU4%2BGwUz2Zj4Hi6XEgjK4hO%2FDyi6TYOoxXmRErFfbNBaW3%2BY%2FDJrgFxII7VSTsOziD8IYkBSaodsJ%2FaNw3XEVaXlD28%2Fk9YUGXXC81WuKZoKueUG7oBrgJj%2BVotan7faC%2BNA4F6ef%2BIadIZqE%2BZ%2FipG0CUdyx57LV4LbK7vD8%2Bx6%2FOxWYRdMa8rihzZc5DaYYj%2Bk06H7rbpbXZPVAOnHw0UQf2TSfsUiNLkEGJr%2Bkwr6y2ygY6pgHRxVatMtqz8xGau%2BWlklZtT2dnozjWHNG%2BOWXBitneA3QgGau%2Buj6sAF93NVyEd38BSXekEpvJK9C2abVHojINJ18nlwdmHNADIGCyU91WNRDPhXTJBJPQp6r6IBlsf%2BmrtNsc0uWlv1LA%2BN36tTRc2zIISk1H1bpDPUP%2FBcPtHOpT0rI4YHzie4nGiRr23DzhL%2BR%2BYfZZ%2BOpc7FRXPPq%2Fbgq41MO1&X-Amz-Signature=8b26ccb2f2f4ad6dbd9f24ae8171414b5e75308fcc43c9b743ac43aa7955ed2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3SKCY3T%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIE3msqW0iEwXfYQ7VBR6ZwRj05aB7t4uag8xJFWIX2sfAiBb%2B2SX2PUf8YEQhz4%2F4am%2FF55rRi8D%2FpvzQYU1M91QQCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMWpNplYr9zjW6RD2DKtwDbhPjC%2FxjXjGpxeQn0dUknVh41G5OcZ5W%2B0s1IbkviQBzyeE830dffaCDrwPrClbTxiAE9WoWU%2FteXJq%2B7QLWv3RNeR6DhhaW2EZNaVMg%2FTC58QQ9gNb73xKv7sJvH6VP4TTPCvpbftHgzqgg%2BSSvu1u82PTgtxG0XNUvzRD%2BcTdI7nkXy7VRyIfnoajrELY8JEjoMYq92f3%2FW07qKcDa6en%2FOp1kg3%2Bygi2pTlXy9gYluqne2Mx0vnDGkNybJ2Qxoe7wyngw0Nfqzhk80J%2B2mzoKAVS39CTAUro45NZChw1Z1nezqIqea%2F%2FHmm%2FP246saT6A9XawZiXh6imIDXsgMfHWrfGF6vGtzVNCa2VWETlfW42y%2FUdLIw4ixRg95gnHylFLQvlV6X0g9S4HwoFAliPaKpFKmyxMtcRDLyXh5RqeSEPHimkSwFh3NrLAVlPZIrT9l5zUjZ96egJzg0hWBx3E2o4BCrqAWfpKc2iUh%2FawsJ6ZbsQBtvzVje3pR99C%2FgS6vULxiB6gAzP5BFS0%2BPsz8DXNikqCzhYxJMe8zFpPK5AG2FRwZrHzSLzxUznuhaD2pcUx4lruziFBj%2BKD2n5%2FY6Hqtz2qJuQnh%2BSOndHaU3bfQaORDIThz3Ew5LC2ygY6pgHAXwmXDl%2FExLHkV8YXtFHZGkwRby5qaYQbdyFGvlYz9vAt8K5cAFFNkDCQWe2c7gVVbkRjlTDHaVC%2BWrVX4g%2FKk5dHmYCgN5RRUQBTgcGbXJzVA19X0vLVxX2PG7Kif1qDcxKDJXPXr2ZD8bvEQYKRGS%2FJ2BppQzVYwNtxPgxC%2F4qcboCIfmU3emCImTRfhG%2Bqmwe8bJWnh%2B8oyc0Zlugv0x3k9P4I&X-Amz-Signature=b5de29dfc78fab0506e897a01b2c7cbc2972d3cf2a8a6a17c6c2b55d18ef4295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPYQXPOZ%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQD%2FroIIfSs2EddN%2FzWwbSsk%2F7R7YRUYqj0rtWRzPMNg4gIgVa1r41N1OQvq9Wce7AndSZSfhxepy%2BuQoqDmw44RVmkq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDGOzR8T%2B3pwgu%2FyFiCrcA1zHX8OQfHj6PcsMsAiqJeljEy9e5wj1qWO6F1cUkOOJ4XOrJVpBNFtzOKkVow6YuDjrHMQZi4vivWMVzPy5nhrmLyjjA%2BwJc0hVk4VmmKF8yJknyofhKVLslbwrqXyD81fzI4KkDQsmSn6inaNQ3FQYPnjizrmnnGD8XzHFsrdnUpvlswEZQTvKrtMIONXuiaLllMpaj2AZKm%2FyVQEXKQ%2FuKwBhuynzSy6RmU3IR4Q5oMu6y7W03%2FQTm4Xxq6vIbeTRWWPKd93oVSbIAtmTLKxpQIwPaRw6jzBOtY6ZmVfKpk2OFkfihYaa0L3YRgK5NbugoeBRak8rfxXFHQUBmtQgM0JN%2FVs1oLo9jJ5kYjTbpElzeXIDfFl%2Fud%2Bg4y%2BIfuiIa%2F2v%2FagqF5dP4F5nT2zLMrWhg6O7gIxFhsmXMzeFjtbYc2r1iunHSyL3PJDNK3eIc6vfVX72LJSs8%2F0XSliARhROQ8Y4CYs0o3HxkmFf%2FM4H8IDycaYrhQGnk%2Bhq6%2BozXbEdBj5vVFfwI3eLWpApVXKEiljij0hWYf64yKwDk1a4Yu7FPnUs7Kxel6rCRfHFIpiSbLmduLQJQiqKSSgU0s1tXPB%2F6Reu8QidiPkGbKWeFiBdEfOxk2lMMN6rtsoGOqUBWBK792rvAE69%2B5zpT8r4zkVDT8BUCrTjNgZKuJQEhYbnxgR1Wez89aQ9S%2BDrK4sr4Mjw71m2SWxrkH2I9N%2FgCgHpEs37vxclU5dMiJH%2FYKXnK%2BrayUefWUKF%2FIUXg7z%2Fq%2BKXz9W4ZxtlqGuuCuqSpGXK0vEGzTlnsv9qWV%2Bz3UKrcbE0n3HFoVZBObMZYpvP1BEv2JpUhxF0IlkiicSkYyXxQUh3&X-Amz-Signature=68d9924034301ff03aa211d3c7907d39a8aea906a45bf1309461d65d46ce616e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

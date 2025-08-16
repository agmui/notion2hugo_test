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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IBXRYPK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDSG%2BuK7xIsIn4S0huVcRBE2IPDIyNTTdP0aaPPFO7xIwIhAJSru%2BDTcP3VscwB30Qs%2BxXxAtc2t3bGiyJjDJJ0Tt0sKv8DCHcQABoMNjM3NDIzMTgzODA1IgwY0oyMLr45G3T8Q5oq3APT1QmQD57Vs63hlv7MLtEjC%2FDZPvbQvQibswirr46O0El5GBXV2gUrf5vE7hksCplloRyHPDRQK8gNi36nV0H6WRpOPSdF191QRw3hMwjsGXJwY8EezKRAcw%2Bb2Yhp7Cld9qfDKI%2FpU1%2BXE0gyNeR3WY4cfcXFAuImJ%2FECoN5045nSWI38iVMZkURWWl3dEiAi3XUnvbburijchEJOzuoD9MfiViQJa89TgTerhjtKFPBurS70csEn1QFGu96qwFDFD3Z6PLdesqZEnKpWUBHNVUM81mybEraXeOkaUVaqxMhkecBei%2FqI7dCTOAXMZgM%2BgunTZS7Z4JtjrCmV%2F%2F0ejtTfXvlOwIFzYuu4O6FcSn1IqVFckDnZw254z%2BysOLuwJTalQENAAMFRcX9tBsHwRM12hYMDMzCA9OkS9%2FSD%2FBFF1Sy0wcxKwG4%2FX2HNU%2FVB53C8rmzggdknc%2FAhJiFt0YBl68dk0xl2LfEOPa1kMG8CeC57MzOpNXOlzHDiifyec7NyGcG2XOm00FW571wbProcGjtuUKzpaPDo8OivwBVmH5UEG63bweSnWSN8k%2FMxDKEDb%2FZDOFLdWDeQmFzpAMxYm%2BwGEbffTvXAqpfcGh9kr9WnH97SoZG7GzDNlILFBjqkAU9KBzXMrKzam1%2BuST%2BBDuo1M%2FAbql5dbE3w9Ym495b1Bv2GQEJafh%2B05ZWWfTVYG3gB4R7Wjut1JbDcHiAFwEI48M9DxTIO7NQ95EIIIL4Rft9yTqMddUYR6ydMWXqe1y8qK%2BKh4mbH%2BeE1S0XUxpW8cGdNYxfJV3jApGmUGiNOfqWi1BkZxDPphLd3OOeu4lqM0FTV1gAqgo0%2Fm%2FGRO6XB4KE%2B&X-Amz-Signature=09f66e950e57b75f3f2c8c44a1edbe5fb293d56ee983856f421f68b48cdce286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMS2NJO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIATef%2FgIltAoCy4KHR9vcboGiDVjy7Izn1z0gOLKVaNnAiA7OKE8iRTL3cf8X1vS%2BMyI6lfMlj80ktHt58AyWaKASyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMBzpgQrPiehJEdRR2KtwDHMX6pCAA3ueg5a9AKbGW5y97UU5HkVg3zTmFQWn7j0kuSGEpERtK%2BGDufcOImAdkGoGq40d69R6uba%2FNZFw%2BauZcWNjkFxmG4xbKLVYYfb3V%2BHcNNNlEftbyMNEfl2Zp20qHfbrgOA%2FXh%2B%2BuPv8EmUss76hTtUw4G%2FqpiVQEdtRh407%2FuX5sEw4TqjtBkziqrV%2FQ3RLuLqULp1lk7StNu5D82OBx9cyJnmrzvB4q9FodMcOySEoKb9JFFQxLxWpCqXk6inujU30BLKkBQKJucplWQYdlpwrmLFWcLtU3kPBKG8dHT6QwYuqNogcmsKRQoPQFADo9HHHN7QFKg9TqUGaWYc3Tp0I1xmf6LBRXp0Msd8Xnv%2BalA4rqFYtPFzN0BlzCjO64h0pzgh8M7MP75V5dGEWMwD8wVryCz1GgRNwnv5Drfl3Il3Jh8cCZo7ea8DaQh5vQx9q6nWfa%2FkybZnYjBq1EUioYrfssdyju3kqszCJ8zLe4rFv36%2BAnz85SU7RsXbat1sMibTEs9QWcRN62mL3HVwKZc0DfnJY0oBXBhHxEPE7NRAPRtd32V0JfirjHXldiS01D35iD1jWjRVyMh5%2Fvq7l%2FsbgKSJ3XpP9UKlXZrbryc8UWQSIwmJuCxQY6pgG57OO040XxbdtKuuJ3O%2BhINL4rWWHr631HrzUoa0LKgJCUQsL5JPKoCYM6DGm9PZVMRrLzz6jQNf9bXLpJobuUaIr3lCyL9zok82vPeSB0TkN06r8OeGOHrzzGoiAgTbpG7L9Z7SzOWp6Ta6cC6Gy5kfdboSyPIut%2BpzPlZ0wgRvjgogkXhQKX09ZuJSkucMPZ3aViwBOd8D8P6ZUYZBiAcnpj20Lk&X-Amz-Signature=2c5f660c402da42402fab0dd77ac292da16255e320ac872ef38c7826f2529e1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6NLGFE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDSchbEwS0QePUJbEg%2BLPrm9qSOKums9CJZkAjr5jceigIgKNjzXnSAXRDY9AF3M%2B%2FjN%2F%2FCgTOHskfnzD9aii3syJYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDD7YZnmzHivrSSAIMyrcAy1Vz8MgCu56EOomU1T0nyFZfHzoQlNWOY8UKNfgzUs5QNEI3apfiwkwZ105n%2FUtGkQh8CV6kggpG8xjnabHqk%2BGtpu7tUlN%2F69IgtXdE5bvZGwEMLc6NN1JVQvP%2FWoGvBtLsK6LaIr4T0Er24lxpIMdKxr%2F3j9LLGo5URIvVRrXfEyZ4dN3XGLzmD3TQVuJIHSf%2FzBUZCFdaObO%2BHPyVRW32fZo5zgKczaQ1OO4CJTdH%2FIkf6pereXAtP7r34UVit74XTibXC68pF3CjK027Ydm5FeYxi2dx6uBrd5hduuAxC8xxsHXo3%2FYcIx0GKQv4iQFkXmAlTmTnfQc24uGAOEWxtA%2BBS92aYMIpoAKLqxdblwQ8oHyRBMzmjBohegzDZVdN7oDYvUDlNgNKdABeSZbTAj2Zv0predOeeSBP0EMtspcDRfOu%2F3tBDBA4aZemErLPrnbNaEptV%2BxTSGT74dLBSkWWr18q%2BCvWtXjdmtdvtfyPglB8tRXMcUn6AykdRnQQ506g%2FQnZ28od7j7VgR2YCE6ToO8zNVUsOew3oBFEUantnkQrYIXygeMNK4Apsr64Uq6ieOIVUC%2F9HEjQ3nzRpsKu7Mj3PLuUF1YRskcYH7jDwc4ob4R%2FQsSMPCXgsUGOqUBbvrF75MA6mo%2BjCPIX5D5CshkMdzQIajXyqtn82XvdHVyU%2BMQcLvzR4CVGmq54V3QSjNPC%2BuKwm6LyeMwY77s6llQ5HHfzhq1CDlaHQOMDiUnKL2RQQao2qRC6w%2BcdDUCRtUYIEYG4r5wbAakMDy%2BlpI1xL1xC3EITxYh5n2T0mPwakJS%2F6lOHDkpTZmQFZAy2CTlV69K7eA3Bj%2BXqrFe7guVA1xS&X-Amz-Signature=5206a73fc08f7eb39484cf8fc880048af2c20a5738c69bd976810aa9ab1e24cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRTJR5RT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCf7MEQI8bqGk8YPt5L%2B20iluY9I8oHsEaq9R4GPGELfAIgKiLwsAXJac%2Bqf0oygcji7%2Brjz23%2FC01XDgESnSYLdQ4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMu41%2Fuq4T0KmzgxMircA3fwQHFi%2Bu09RAvLTnAJGeII4KkILxL%2F0EIZp4mf7KUsBuMnNaWRJQG4bueNeXnYw7yUW2sBC9l2LVSX1Foqi0XUxNjA4khfa0wFhuFD5czUqtvlU09nxwrKaKNvNkf%2Bl1g9fTzkSCD%2BTTtJBHHJbzHKEbeEIPxW9%2FD2zbbFIeZK9275e3wB0Blg8Vx%2Boj3hwvjf8Iy5MbYdSPqJlspBOQdNaGs%2FksHdutdS5fdU%2BQszQSc3OmQXd%2FssGmPySt%2FzX83tMpwu97NND831ixqcT08k8Hz38G8oKXIUxUk6IcGXRLTeFy6lxTWNjsz6kfPlPRDT%2BCpEhydca438HDftbfFRYrp8DTEA71Ter%2F7rhDHiipAldPi7siuyhSSoH3HQ8g4trY1gndvP8QbqQZe%2BdDa51CKGbGi9UAQQcSQ%2BUTrrfRz%2FplqXbeh8IokVQGyLF0tTvdXPG48xvXEAUo%2FSmhdcbrb4%2B9cOyQ6%2BZ3saHQ7B9%2Bf%2F84IVq%2FGH%2BA1VA%2FoiR9HNW8HmUlXkuN468BfujrVl3ERhGSIMlndFFZr59idResuoYgK2HZaaHeJVtnpYk6Xdt%2BxUqti%2FkdPBxJvPK%2BUIZrGdhZn6k%2Ff7PJ4WYfJQsYKbnEBYeLVkLrTNMNycgsUGOqUBwhMHsvi%2FhEbtmgQnlOyrASgqnwMNg5vIZX4Jpejl%2B4BRxSfeWf5xpOQmpIF56gHq75scRM4%2BCDLFn9xTVaBOE5dqKb0e8nmT2G6Vy%2FFsYvXcPP9x1Z%2BBAXbPcLJtDHd11flvSbS7hjy5V0Jz523qpsU5XBrvCGP4Gsh1qAz8%2Fj%2BHRZsLF%2F8RXKtrgSZKig8gkXE6%2FCcrV6D%2BpcvNht2mpvCYhrod&X-Amz-Signature=f862c2e5532ce2021b6336df2d8d78c98a48959b17f25b7ae453876a5b038302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

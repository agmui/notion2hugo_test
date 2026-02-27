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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HYUHMR7%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICl9Z8HgibjSoF9oZ0UI5oqkgg02gCwvvsJ5xaEVOK2rAiEA%2BWolcgwDSkwmPRWygIKP7HI6POhaRvZBc1OQI32arEAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCfdKSyYBDTsBEDLrSrcA%2By6%2Bi6Zvbz4Q5CC9O%2FziiBT3bsNK42LscP3fitCCXhhudbB%2FqEpYaGJKa2s63nKYWiMqlH1h0NuiyzM%2Fl3sYl%2FwC6B4gnrffqlofXV79TypUKb7pyhOc65uHDL9OYGdV7t7U1K1Ydudh2wWC7iZMC3kYuHBIiq3Y6IG%2BSaAObpig50QQJV0NGyKnTRlCDSeIOZOfpk7se9VEF%2F6bPOgxyOhBagd7DaufrFMlTbDUXa5%2BuP%2BGPR%2BbW9n9AWgbb8zGcg2WlxFFkjL8jCjVe3ej4ubwgw%2Bhe9VcyrgpLeUqbvhW6W%2FvGFfVmy0%2BGBWTl5JtlA6aFhbb74yncWL4spA7Z0YDcT3OdAw5G1qkZ7i5025Hz8szYS%2FHfJqjt9wXZSUM5ifxzr%2BCUyoUHhU3EBsjePgWYz9IC95Qy5v9IFTe8B1rCFNxTARdtlJKwu5Zz9LPDLao21nX3IE8ywjhOTKDa3Sr3ouMwDtkqGvPaqp1tYJzTW%2F7nwqHvoN4vK8JWT6JGgj2IzBd%2BD%2F9FftHgjbFcvHyDKYjlgAhL98Ak8aJp%2BgY3fB9d5ytdGH1YiFlfExqZcK2IRiUcctj936R87XVZHbZhlTokaEazXrxmkAzn4N80Lr0%2F9QhkWwLbr5MJ3Zg80GOqUBITD95DD5HK5U4kBurI8jbxJvsonzSJnjXMlQ9xREelkmR1LfqUas40lnSeD6ZLltT2HHrJ2hF6pdyx%2FLXndYXpFYn8KJ%2BM0AonTJK0u%2Fkg6aix8zsHfmGkQVMzM4q0XP%2BQ31ury8VhKoEXZwVh1s25LEUmRX1VO6kKpkTzzYaimdW4jDMaWyBn6d0vWiExYXHSZSB%2F5TQa4Std9cwSd5UeGJcQEl&X-Amz-Signature=618d92b622d43f75d35a9de9ae3ebf1d5dbf02cb8b22a073ed0f1335019c4b67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O24SPKO%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIF4Di7%2FgbYIh7sP7sC8XjeU2aFeyweswWqsfpXYUt26kAiEA83u6FicdNc%2FA11PWALNo527ud%2Bz%2FsTurGnIPAxjRcLEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDK%2B8A%2Fb6an9I78Q7AircA0OeU1ul%2FM9VNCy5gG44pzyA0%2Btgd3kGMIjT6mdDexKDpW6DqsIRvGfRLzyez4bqli25yfMjvQId6KuR5g4A7jt%2BK2kPVuv32GnVtEBA7%2B14jQXjGn4ZomO9lx7JrejC5eSKt%2FZXoTmgq5xYnP9%2FJJI0x35uoWeMr9fG5zgclEZX%2FAZCqEIIYTTJoQs6tbIyHPg6zX8imksAVAIWca42%2B1C25n3ToPLEJNu8kO1N55Ipc5OuwTONo9Df7x%2Fw9gKpRPA%2FgcD7NkBt2cyTZoxgUbYKMu2DIrSbySpDk8OcCvNDkSNnLZMYRLp3PIWdVAWWUlz01Y9kcgU7qARI4FEVucPHYlioM6lb42GA80zi02UgGHjeAIcQBNH7QNxJE850bTPf1QWlbwJ9sj9WOakYXguLCOEeg%2FJYbr%2FtmXUFp3J1lXBmv5o41fXlh8UR%2F2BFHoDxMPVieAXnFWeNQ9NfVWcF0bXeQFeq6q9V4RVAk6BjDNX0Z0TGeo3A%2BD8h3NGerCqricATyeZNXYee5z6PZD3HkHa%2FeMHAU4sTQFzdIcrJmZUUauqXtiNqr7%2FDx5jsNtY8Vf4D5W5mIILif2isT37QPXLwdI7aj36LPyFlQG%2FHcFFhzfn6LPgwxUZ1MJXag80GOqUBY9bXZ71saDv8hwAzTT%2FyJ7Z0hykG71Dt61sSbfnGHAEMTLPSn1%2BMGFvNORmfT%2BEzmLjlfz1c6P5ANiY74BZITAvl6CYcpTHYqpJUwhWLo6nSoHKfLPY7fONbdvfSPkMc1KZ8SoyfvkAFmp%2BTuvHUqDq7FJ1THDmbXj1k0mM0%2FWlzIb0LYjqpKipeKmNphXBE7ev6KhCEssAJ6i8okAkf6OJGNiEb&X-Amz-Signature=377e6348c4d5c502ec5a6cff81181e28f21f8c08a5bdec169c853dd12a108890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623HPM5AN%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICKAyI%2FgB49ObdaVPuh2Mi7pZj5VI0Nb2C3bMJvDXGBiAiEAg5gx98eapfifsaYZFOUM6SDHRzTuomDZo4703HrZuWkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGubHszvawUtW2yG2ircA8TaUPfLdJPmmZh4V67e0JFD6ETOQmQeRzMdcv%2BfSSBEezrsOxtfKlwUmHZdxdtZ4o7%2Bp7QMcVv7Qx4VTyihJbD4giEhaGh5U1cFN0%2FFn7oav%2FZue0QR%2ByAH4c9Z9wqpK9ve89eemrtDe4C4EM9F6mfQSX8m%2B4vr%2FD2b2W%2B%2FnjEpodZbYAs9NxK3eZTXLoF8oCOh99NGpo9ksbT1tRcM5VS9wxOooOzLVR6di9oGXJkyuNv0u6K3nURhnKX0s2wN3QCsn%2Fjg1zEOoHvPm6y2AxXfYAGX2lZsv1gICUbsfLaUUdqSbIBlMqWWxroAnrLgAR9201oPLy6qDuuAtZIfSMIzxutkrCtNKnsrDMUYOj%2B4VxVAi%2BlHyuy507w5VNTpbp4jwRoSTsumspDMkNHww1CsLoI%2F%2FKG2htt7isYPl5vuNvx0fxYZ66gb%2FygV2ZS0gQZqT6nUCFqTqAzF4%2Bwb4lHwBR7YRX4U%2B3SSmjCj7XEnxeg0DMvtN3XZp4pq7r3tlwVY2h9uqiFhdXSEag5R8xf5jY%2FRQURYQDZxPGtzwkJ6FPrOWZbvODLnviR8F6dlNPnnl2h7dTK8xywUKNjzVkiUyv8QrM3b29zBdNsl%2FeUw7Mlef1V2ii2bbmW5MNDag80GOqUB7%2FAoN9FunUH2K%2BrfvQxS0zRNKLilZgKNriqRAeUvQIZCbNuLrX7Qq3FnmtXDRyrm%2Bi3%2Bzikg1P6J472%2BNDz8GJEg6CdYeVPzEMjoHQHqUG6zVbjcJX5xoWmMkU5qHNhNcLnmzPgkD2huJCo%2FOEZWXlY2p%2FWbPR%2BC0pPj6wm97jNF8VEtrNC4eofuLVd%2BKvAv4GLIfz92EZjs4aITpQV%2B8G%2BXPftc&X-Amz-Signature=e1ca924424908c181fbc11dd9a488c64c2a8d040c7886250df77ca254f1a5881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQED725L%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIGU9jsIdfnwqBCbSiPYgqMs5DTFvAGLH8nTDROi3lCPXAiAqpS7gzlhvykSMtwTgW8dC2%2Fgdpj2pO7VbgyTvsuy%2BUCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMwqP72pM5RvzOV4vOKtwDUuXnrxbOGE%2FuCsSPdrPWuqBqrLUV7kOn1iHjeT%2FHNafUqWfw9j5wOACDwZSVECUM1WFHJZ9dI1ppP6xxI56XCAXb%2BK15g4n91A0s2n3oXbbl7N0X1N6tcC2wRgytig4RZXFYE9K0h7O1kRdUlfvxDkU0aIOiKrDSwttznB1vZknEu5zzffWxSUz%2Fzfv8Q9eC6NkCzyh7XAjOVq3NrVVPz8bVYTvPb%2BF8xl7TRM4y%2BG2GY7iJlLMZvM2fcYtpXt6Lc6ylcLpueB2txiW7GiEGsGpBF%2B8Oey3biGlZKhdV2wH4rDLsOWGlTVZaS%2F7urokCxgNMwhLiXnjmM04novqfGEXpwJ62aDu5fhX90Blh9LObCbKb24suvAO5B6e%2FeZbuFEZOP3g%2FK4bclJ7SrVdZThlxfxv%2FLEeglMwIqYf56sEVFxYCsk7k9DCv5acoKtPWAu9rGiFoej3r7OyiFOFONY3czCmK6raH8ulW4IUP%2FtYE8i5K5p1ZxjE2icXips4E1iQf8YQKCCIQ9i9Arb%2FFzA7k%2B3%2FHCOHonoE%2FDYYOc43wXQsA7VTcBXcWX4WOazNDHTx36gC21tsJ%2B26tVg47afhiVXvKhndrDoXflV7bhpIeqd0j3nvZyMtvuggw0dmDzQY6pgF6m4L5%2BpoC7eI06mELahdnur03zaiVHZM43sIuL1TQpdV%2Fs7Ji19KiD66djMGw8JQ1lnkdi4BbG2AN%2F9K59i7v5rpnLsgDbiPc9qYtNhwc8XGgeOIMl%2FAttpOPN0Senm8HaAoiSVtMaxHuCTQbQWgKrs3%2BxRzp12CmC6kgPEKH63ylxz9Km%2BTdXgB00%2Fks94Df46QVNGcWI%2BbLm5UOeHApyhz0k2Id&X-Amz-Signature=e32403f7c7cb7c600657811196fdc8a7cfd5a77820eedd8fd9cd735b709efd5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

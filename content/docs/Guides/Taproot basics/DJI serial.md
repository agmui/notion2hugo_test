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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVRIHWGX%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDDoV50B7D8Tb1J%2Fp4fNxFriwboUxYrl13ar9GKtVEkoAIhAIBBWVdxzJp8Tk9ocATzw8Xbc0Nm5K0PDOdpZadszndLKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnrZoc7ePzS0Go7yoq3ANbtvdsZz09tI9QDD2VFvWgr2TG0AkcXMJJfwd0tr7lNV3UczP9Wya1YH%2Bl188kHTUyAr8fof%2FNuib4EvMI44L8TddpyMRN0YgkIA%2FCZBsgA1AhB9lJ9M7sWCxRD4QPq%2B%2B3xrUm3JmERzwGtOz2rDA3Zbp8VVRaozd3MG1Y1R%2FMj6Wlzxe0PA9Upxv8%2F9%2FxJhuqsJMbz3tEZNO6eV%2FkJ1K6i1zJMttIhC92AeKda8rYNOMsfRFopctTw8TXEUTlRDXtURLTivMKsvuoIc7DnTJBG%2FamfuaNZrjhgQdmDrBhU%2BZppYeW7IN3FgKZiF%2FfmiSOwq8FNozTVAu1%2Bx0ZaG87UJ6CjSkjUXf%2B%2FNXHWmaYyaj8JNgeiOZmqYHWmva%2FPPqv5O2maHJ1xdE3BUAz50cgbZvFDe%2BWpz45f%2Bk%2FBFVLD4pAub38Eg284CjxXkFDmTBBeCGJhzi2j6RGw67h7bkzietcAgoqwD7O28g2reTXuCILdVcj6tFIYRbPq%2BCExTk6HfX%2F1%2Fw56y06mvRnY7KSlacc82XGknQdGcvVsgSppgZVUv8Tw2nnhirMVerUK1cqFw9tLjNSzp9vhCCnDfrDulU5f1QXsyzowCTkq5ncBhIZdiVyoE6iJu9sszD0%2F7fGBjqkARsGUe4t%2BjVDB%2FDdyZvZ2TAwRxETNtYLHo6fab5T9iEgIsKLapaDaJ9pKS6qEKBChIti%2FrBibpr6S7F7ig2V8r3f%2BYa5XuxdeVYkr6Dz6W0leIxkjL3y8FVVs0Bm4m6aId090X%2FWo%2Bdfm1qsAG0kG8t%2FogxwCCXZCiYCPFbayJOvqg4EwKOWA%2BSYzA9%2FEAAjBXbAWiZ8WlBA6srbQDx0AXaPSKsM&X-Amz-Signature=e84270e5226e74551cda77a321c779d5d19ddb0fb7a3dc1d4ea3f43731bcfaa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW7R5LI3%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEozFneJVYoMMwy9hLtSs%2BrLT1nYHWpFJNWoBc8vjr7bAiEA3QVd2mpeFys1dtk%2BNpR0wRQTtbgE%2BpSzgOG7Ph6Q%2F0cqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3pMqZoJSwS3V%2BdBSrcA0tKW2wKdBymi9kut2t30yM0Z8DRSAotiLiFpH6J26RIzKPqg4FY3dpeIph8cx2t5Tbd%2B04xNvx6WnWMqKmNM4wePhxSZKMBteFA9gmC4PivAho%2F8IYbZysS1mnMCa3X6aQUhI3PnYpPfi0zmjI9oYzpEL4RAkF%2FnRE9lltd%2BbnPBARa8uO2QX1AzHvgiCX%2Fe%2Fvx5ZtZdr6En6Y8r7yFwkk5UszeOS0u1jdRr77oeeLorLZpdyOkEGMTXXCd6UjC9iEIA2fIZ2Bcf2E5mjCUeAPicYEBy3IX4k%2Fm2jvVRpAJvFqyQLRPXjKwcGiZfjp9Dxqc%2BAar9AA05uOGBHbBYo1%2BOLxhGGDDBMmnp03wCsCndzdwLIOcFznAi8sV%2BwTDN4v%2BKt5DJOsnTXx1%2BcpkTHXxpGW6P6RrUx%2Bd%2FLSufr4as9EzTGelR1E6%2FsYigQt2cNeF1%2BvVCW2qy4lATxg6TXeOg0ePMH7ciDC9qhSXKC8Ncuqj5h6cH7PL7HhuBQL7iHtIVhtNwqreY%2FJqV5PaF2iNdYZ27D%2BTGuSeaFiWwP%2BWvqbGIWDGfScmtO%2BMmY8DFO9uHMe8YqJ2JjTG0p7jp76zeVPX2W5fiTzD%2FTL%2Frfogx4j5Y7QT1Sq%2FU038MOT%2Ft8YGOqUBuG5EtCbS1E1UKq30ZEKAzW7j5clhtRS%2FRBa2DAG7KAU5beceaxiAFz%2BxjNjzlWeiAMPKAUXpjzaQj%2B1NlieUTAIzGzd6nHMy1NBIxyZc613iW%2FZyP%2F7sh7lOXQQgOR%2BPV%2FOw%2Bq3oe9%2BwLzatM4SpvtLAwGDPX7n6X8xj%2Byh%2FPtt8okQbBzMt3Agn7Emx0gW2t9MsAq2XsDk5XRcDlOGA9X4pRq27&X-Amz-Signature=eb794d63283c8359bf90be120116712576a08ec10d86bc747de3b7708fd611b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXNTWWYQ%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCujCX5TX2rH0XzfFAeO4MHfLq7JqspUasyDE1HkC0T8wIgGMSn0OIDTzyddoZsotOYwtwT4onRpVcylpM%2BIlYaT3UqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnBVWxME8iYvruuGSrcA1vf4IwmGrp9VWx4zB8fkEEeu9DxXcxHKxxIMHuBS2W0ZfAS3k3ytLUHH%2B9zpxsdM47tLapVdNIbSuiMn34l5d4sFE9UcSkJmfY%2BP5MJ8XKtcns2Stp64TgrzsOFm8luu6KkE12BbI6r3G25gmDkO%2FM6BCgFuz3WmznRzWpMSWXNyzpGQ71qkrEC0kxRTE%2B2iuPI6C9DwZ4DjjP9%2FFud0r1yM8XfxcJqQ84u38w5byRCAdV3ysDacxLRY9Wa8TcCF0FkyZFfQEqNua7teDMVuX2wsXgz5ZSmC2d7zaiB3j5ruQ70%2FaT6jQV6VGCF3aWqhBGKe7FEI4YJzLm8hmtI6wv3w%2B41fX5MzEKT3rCYNYLeVqp6luxN9ygDeXeLjKbXf7GGXPePex47y%2F5zldWUSthBE1qDng51HHFM89Qemeq5YhqUk69zM5g7gSvOKvQubyBj2ClZSu6tFU6TmAscwc1V1AWzJyghJjorpsuYeyw6Lum%2F0X%2FzFK%2BYY1k781XKU8BYIXY9kGKK1VKmxpp0m%2BMDQ9eyEnzD9sZADhWRmJXRoZcmQzJfiDPeZuPsaAGI3WBLXoVKpyfZLxcXhXhtHsafEjjAD4Re7nps5PR%2Bqax%2B8QfDbRyqhmcVpAZbMNL%2Ft8YGOqUBBCYnFq7rx2W0yRSI%2F09zRq6LUWcz9t1b8zf54hpTAbCQRiEkwad5hs3JIqdIbf6DaE87Bq06Ya7EZ%2FC%2F0M%2BtKmadLM23ZTpaSHcmwmT6KSgv3SF2NMlaGTykmUErekFWsWGqvxhxLhcQUVL7P9BEwsrADg9w8q39cWl0R42unWHRQiywWZqS%2FM6HOmsndqkA9sPIx3jrU7QBGYVNCDK9fYZ5F7QW&X-Amz-Signature=addcd13d169212d6a4a32fb7264cee89ddf71399953da5a4dfc845e84b1b77eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVSYBFHK%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCxsvyFbMNzyfzABWFepw4EZRqYb8eVz%2FySorfwdgCYVwIgWTyFqbGBCom9vz9B3s4twg2hqA3nE7nTwlXX1YMdFV0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWaP5QzhLt4dEzHSCrcA%2Bazp%2FVnFvCBTcpIOGMzxiSYhjW8HRun52rebvujixdiho4Dmpl79cytnyk49M%2BgoEo0WLUgQ7NKZaC6mYEx8N%2FoUHq99ehzGZo9zsl3EO5wEYuaBOfVoZCRcLdtHZmxa1ABUXX0INvKeSRSqhGC7GjikHBqj1amzX1LeWNG3Vqt39mfpU4c8E%2FZzPnOSnybxUAgyWn%2B99TGCxDLvf3fB%2BvkzFRBkrNny3HlwAiC99MUSIfMe9Z2poVfEbVH%2B2B32SvNgQAoYtkzRH7JLADJyljZuveJ3ylKOWZqlNsY8rA2qea4br%2F%2BdEe447MAQQErH3yD1fcvfAulGq7qfqBX8SMuZhxjXPChxouGWLspUKuwP87ZQ8eCl4EXrUL2C%2B3ntW8vwG7dAVGIKbRI5wzv1ZFZ%2F%2BccB%2BJQAwWfz%2FVjkNUwtshbmElmdMqrOxW9VWrOW3fhVQbRJLOomZIac5g16AaR1IK%2F5LWbl6sCjTTfHDTPf8BfAEh6c2%2FrYCzUkcYhlz1gUIhcQ856U6xEwCwH1L9rKWICr7xf%2BZQislNexh2ThTYL1bG8MWWetLY0EoVR0jNynInKtOj5VCbctlDh8eXlzPHKgkOUophCWTh91YUDz6rWtcPYgUXV0vMGMOT%2Ft8YGOqUBmqz%2FXmo243ukCYg6lWWsfhuYVhtGHxJbXTM5opzdo%2FNLujf0Q5c4FGbII4AFOc8aoGjpyDOcP4Jbx8ixJXbbXIDZW%2Bw8cwEj80QRPFVr1j3lS6Ieu3pEI3SrDSy5%2BkyNMZk1AN2B67CWq0qsIb8PZgABC0E%2B%2BYcSEwtOm42RW8c7vCuR%2BPNPjuCpjCYjiguqlbWKHD3%2BEi5Yom%2BImckSZ%2B5Jnq3p&X-Amz-Signature=1703b6032d2f8d805a5cdc0ebb9175bc6ac229c03a7497f6955a54b4abd850a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

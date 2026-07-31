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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1bb5fdbd-8147-48c6-8397-eabaad16fdc3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5NVN2OI%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHjLPd78Pg2%2Be3ChF7nKOlPBRtmNxOA8OfSwYFVZWJsqAiBTRtWvcgRQho7g5Yx7OCAG0TeaBI8d%2FNyiRb%2Bd1ELsCiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FD7Urz7eMeTdgik6KtwDbNBb5%2FP%2BTyTgcZo0novYgWiBNWCBJNQCMCqMUAeK06nCQ8vp02rE4fHS0J%2Fe7J9r%2BS%2BeUZMyZ7cwY8S8qRsPGVeTGX5flyIa9pMRsyHvhRRdplvkAFx8Dl0tahSSAy0O%2FnHDT%2FZFI75ObTA0%2F91GekB%2FVjTCIlNKn%2BVe7aHHT1Ar1KEdK5p1TG%2BYNZRCzoKP4MgEzpuu0qAIhtzVjg12YzsPIT26BUAgkqFt7%2BPdFdNp0U2kS6JQHqQ73H92GBJy5D7pWkOvkN8aOrpi3fRWVHED95jAY1BWgC2xVjUb1m1qFlonal39KTBFWAnII9OU1Sixj%2BWbosu5tki%2BSlMcLsEPv%2FIeI0iGqJpTr2xVJh4f4s6jKFX8QtA0y0FwIfrFhVldBEP7P72uzTHqZMVy%2B0strqtrRdGRkZMbsTh7N1dZA5oN0pz3yJ00s6l3PjpT31xYjIRHKb0Ez2coaQdGUNWdQysX46wqzhqBO0PbwTrGhatzTU2qMaPkjJVmX36LlL4jTiaHTorj9USzpqXwKjRHCELXCzjIK13EtlHUzgX%2F5ah6a%2FLJaoQ9Jq16NpAxZdmymjgD5h41zzIqpup8Yf8LOO53m2dZdi%2BL%2BlTHnYga57qIvldWnC7tAp4w5Zaw0wY6pgGsLU6Xu80nelUxtgXxKzfvSvHy4DIn4qAaUFFuAzsGZVdMjlexgzbGyGSxQlprBQnj6VZvEm5PlzwpN0%2B7cVxOvUTo4KfaMnPo2zMRqHfxxwb0Wpb3E02rHIg5D%2BZ%2BqG7x%2BmYeSRfEBcXAAC1YrQYNQPSsDlfDKFsV2%2FsIzHFkLWHEuToxSdcM%2BDNLacmEL4KE1I%2Fwk5tavJlV7fKd388ovPKm6yNB&X-Amz-Signature=2a7ee049dff4b88ed83d6e58d7309a6ed04fc0054aae7b0e8f10eb0821fe8a89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

	<details>
	  <summary>{{< markdownify >}}What is CRC?{{< /markdownify >}}</summary>
	  
	CRC is a complicated error detection algorithm so I will give a simplified explanation here.
	
	Think of CRC like a hashing algorithm.
	
	Given a string a bytes I have this function, lets call it `crc_func()`, that takes in the string of bytes and outputs a corresponding number.
	
	Then on a different computer when I go run the same `crc_func()` on the same string of bytes I should revive the same exact number.
	
	This effectively given every message a unique CRC number.
	
	If I send the string of bytes along with the corresponding CRC number then the other computer can check if the message if valid.
	
	If for some reason a bit gets flipped while sending the message the CRC number would not line up showing that the message is not valid.
	
	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2bdca144-1d4a-414a-a4e8-d86a72366667/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGCALTP%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzRW%2BMFO%2BzWd1tBNf%2FQeRMoVJeWMtm13rR5zr0W%2BEN2QIgDD5FWVpMKncOfrMNodyfdE9fffuEc2qeBo6PknT69yUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDgIMjooMIzWbipVircAw3P3%2BiQIT%2FMzbJ2MCLb40R3UovCJD7AJ7DIVhSIUmDbnSc89P7lAHHEan6Trh0KZzkXIrx2RGfcBXlymE15zmI6sEHwhy2G1KMVlTlUOP5pZu04K6JmUWF6kSnRvd2taGXdiqLsEjEjnpNwCj%2BGxF%2FoyVymbzjQXnpp7SXhpAbfMavjSRS7QGUrVTJbXmcMsvPbsmVK4%2Fdr%2FTXhbMITsyK4kn6642qew1jmR1sT4fPl6tSYEvkqrtyBMnxS02c7B9BF1EklV7I30GWadGXMRt%2BlrqsqNpqfAhhnFUWnMy25XDqWY64bi97fkOcQumv6jbC1vXfiLt7yrxc1vLTAvFaWWGzAUDfZ3gjP%2BII8h%2B3EVEUagnWAjWrwGQGnftaPRnsExuxHSQXTA5O%2FBxY5Mvs%2BXB%2B7Gh%2FJrzuvknBq%2B5Rj6pVNetlzWu5F3esF5FUB0pBIV7R%2BJeZW0syaODvXNGbAIkklozr8EZsq5GWN%2Bn5IQQlh0yQwCHPk86V2CNg8SLmE1w08lAICSH1uGNLccLSeKEHpUshY76g86%2F%2BLWEkkT5nVGxbk6hRbnJdmEithliGex4vahrWr5VyqIs6W1uHM4677DBGf9cwLoflsWk9Gg59Gblx2vlfMEZkcMKSUsNMGOqUBg1jwkyGyqYT%2BVvrRYTEejbEhgFRbC5%2FciTUVw45%2BfmicSs6TTrQxIry7fT0wFgkr91ONXxsVV%2BCSjTO7L9FrR%2ByoNrrAkEaqp9K2aoV4Ny86cA8aszmR25ZwYzvJM1JeRYmEroyXJZJCOSoBCVavN9qIrxXeUNAaRGQx7HUTleBbpWBvE14oEdP1f1%2B7QPD%2B3mhRB5xOb7iK3r2pXu9XxgQuQr8i&X-Amz-Signature=ac081eb4fe495be6545d25a1580a70ee50abd5f50df166538c54e2fa003b5e0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
	
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f0f20eb5-b37b-4dd1-96fb-318307f62b91/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633AQF5HN%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF06dDQp5c5twkLTr26Yo3%2Ft1HQvUNIkkCWa1kccb1scAiAXgZNFu0j0SjaT%2BER0tGKq4fQaLK0xtYzfodoWItFlUSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F3T%2B1MemMGKWfpuSKtwDQu%2B2qs%2B%2BG%2FCLrKLF97CWjeRBKOBkdwc5I5GdhnlZVrfspFFNNSxATdkd%2FuqUDFBTjWI1U4TT44rfnY7tRZizHx8nVcQBwoXBFp6dl20saQwt9jfYAaOqIxW%2BpAliCaI3qRKq%2BpJHB0JtgSp%2Bl8KmCScA715SHdiR4N0GB0Q5zq00uRvixpWMZBaPnme6Gj3B%2F2n3UUMKf%2BPOq9zcYEUKJ8HcGWecQD4RPUhtrQMAD7Br7UAYKCTmrSRi5heFjdHD%2FnBhjf6w9t4aJomNKtXBhJ%2BHz86nvACYYEGyHZWHLsZePf%2BiHBC7CX%2FiOsKMcoWH%2Bdhffypdx%2B0Sq5arHelouBPfmgCp3gVb3heB0WGsYODY8uLINPoDaUPxjqnLaQkwkdriwMJcnfsX%2BN9hgJzPImTv%2Fx6zZxdbzWorXaqOUblWgJoegStTdFy2Y%2B7arhe0hp2jRk%2FUTnLCc%2F77Bgt1bYU8pTbx9deWV4YLSpWN0M%2BJ4KQZmzKuAIwQsjJQCfmDSeWzrPh2i%2FxsRQN%2BMFVYijWBoDInHE%2FAFBkLCmA%2Btdgp9v3NoGGky3Axttdz1Nu9gDSwKCOidgs4BQLLebiKTifZ5cWOG5gTfZXcBiJsQIaOVI13fh571%2F04%2FJcwupew0wY6pgENSup9nU%2B147SlTqHcDoFNSJ%2F8iOAEgkc%2Foe3cNysYNALl337AC20zP9I18yvU2sAbxCHQO9KgvNJ4Qh2YmZr32n19CcXq8d8Z4fZutdcbdUQ0g9M4evtEfeHnyu4yL5wNV%2BZ%2FQX%2FrT09d0zEV5clOo%2BH5TMC1VEf%2BF%2FjLT56%2BY2hQzitL%2BRGJLu5CkFvbpH6GoXXTuiSyC7KNuVBKXtuEcBJxPOgo&X-Amz-Signature=6686da045ecf2e1cdc83c86b035a61148a176e557efda915aea349af9008f47f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/478d2130-ac01-443b-8363-796ba3cf5a20/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623VFOEOC%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBg0MRaM2irrIfbMeLZ8X2J4fY699kjcWvmOtuXAnF2XAiB3T1WAkCirBp6W5%2BKg5GIvVsIrF06W4i3lbMIdHRI15iqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGBUAmxbgKXz%2FnN4bKtwDzAGXhBWHsDMWjk61GorVJIfvF%2B8ZDPVPD9umyiacXaT2iiap7K%2FRww66jqE33yLko0H1VjMIc9%2FMdN49WQvcXkYmXujcpis1MsVcZXqIVCISr0ckcqAhXvoLtsRPbNQH%2BhrAR00am26qESoDIrwL4iuSRP3Z9MC00d%2BVZRzf06Q3rlio40z1oz480XFzgKGufIqWyAQb99YE4yJbT9C%2FEsgaqEwrbTBmOLy6EKGUwmQiwHJjSWOp56MXtpFBESWxVkKGDiTv%2FC5Rf%2FDtXVdM7W0UsPtpWx0zSw%2Bh6TlJUHbfc6EOe5IDx9c7XkI%2FlOwbnxhzD2XgAETfS%2BxcGjD0Rt3nQeg9mVzBbm7upyz0dA9brUeLWL1OU5Bv9ipWYtQ85aYk%2FZHNKc02Ng1AarOt9B1%2F2Jtmy52HcRyXQXxIee34pxpt30OKJ4djQEQL20RStbr%2FyACmR8bJY8iJaSJAXqQsVdqPfqHcKYTFMHIAJyAB%2BIihcwMNUSFWL4Nj3r7cWwoWTH%2FYhVVqJj%2FC0PwXHpvTZ60Pg1FcAZic%2BQAyVU%2Blu%2BlnCSSPJFF0lmE5oycSB9UNAohE6yeRxzAjToa2y2grJ%2BFGa3Tp2u%2F0iqaiBEhQwdnvOI9oyu5NoOUwtJSw0wY6pgFDrAHV%2BYMRL%2BhW0wFvYfQjbMX4hJMZCPEK%2BvbV9xyD6fFpNuvmgbZydnPnxWRct9ra8wc4cRxAofgGmTanKtfiLCpPk83mC0p9%2F6o134qShDV3EQ89ozRMpYZy2WssDsplgn5dQLt4Vt9yBbHwsykktYoOlPAUF0VovG%2FsLEc0w5P11R%2F219G%2FjbA3zelWgE3%2Bpa1RMOW9ziUxwPYSqmfF5qLvOAhJ&X-Amz-Signature=7e09fc43d8f22101505b024e4c14aa848f4a6d7e277d12fe59f866540fbb7396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

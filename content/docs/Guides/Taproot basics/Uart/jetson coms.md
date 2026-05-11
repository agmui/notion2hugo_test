---
sys:
  pageId: "223da3bc-6297-80a4-8291-ecdfafcf7da0"
  createdTime: "2025-07-01T23:33:00.000Z"
  lastEditedTime: "2025-07-03T19:55:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Uart/jetson coms.md"
title: "Uart/jetson coms"
date: "2025-07-03T19:55:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 133
toc: false
icon: ""
---

This guide goes though adding UART communication between Jetson and type-c

---

Suppose you would like to send the x,y coordinates of armor panels your Jetson sees the type-c.

The simplest and and easiest way to do this it though UART.

Here is a basic video on how UART works at a low level if you have never heard of it before:

{{<youtube "IyGwvGzrqp8">}}

## Materials

First lets wire up the hardware:

You will need 4 things

- Jetson/any laptop with a USB port (laptop is recommended)
- type-c
- [USB to UART converter](https://www.amazon.com/HiLetgo-CP2102-Converter-Adapter-Downloader/dp/B00LODGRV8?crid=2K10NE19DJYMS&dib=eyJ2IjoiMSJ9.7LOjrpNFxmPhGRZZ3kvolMAira4OsO6xYfnqFStomtQbzIrqXeQsm6BC0NI3fjYbRt-Whqg0ssR-dCFBmTTrONIPIEBLel-_lh85Z4CMTziF9gL4dOz_saed6pMNWw9nxJ6EnIWFXwffRjDxX7VlRy7NbsMCjVoN3dUnycTqv0rGjdaFjPfOqBrIPJ-6N5_YBiW4cNVRfrFXBVx3LHQ_M9IXyKtC0iC9nEkuHTa4Ju4.pD_y5RBjUFSqTrt8bcDLeOVA7zfEkch_RnuD_iFiIM0&dib_tag=se&keywords=usb%20to%20uart&qid=1751326690&sprefix=usb%20to%20uart%2Caps%2C183&sr=8-1) (there are may USB to UART boards out there, I recommend this one)

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXMGGAMZ%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCID1y7Owx%2FQMBAg2NMf8v%2B5djPZ3AO9dqAKItU2S%2B8lEbAiBYVos0BSke4tn21dDshbAreiDbjrG71SnWXfPBkRk3Wyr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMzeaxCTefht2vxCk%2BKtwDUOw9n3hknNVPATzlDMl%2BoDQG0NeiQKBNbul2VmxgtrVVCBhXMG3RV7YiPgbNCFlHVgi7nAyLgZE33GBeqzmgrRRnuF%2BtZZYJ7A4DcoozFyjqLbIGZM%2FQU64Bl5JNoKg1G04dCgpflWdqbLWPDu9L2zXHQsp1Nj8QnjaoOP1tk7Lk3gvXP3DFAP51w%2Bn19MtAyO9ctb%2BkCVVxjjrJwYnzNyNrAb4MLSnItAKYjXWpA4mx537NoGv4vozSrkvw85EhJQTWUzSoXv5VPeB1ThvpgEfvYPibCeNCcZQZzKg6L8UrVL6gfgqDjzYEbme5g%2FIfAAiDLri5mjhCqIkMDKfOW7I46wc%2BjnmZAB6lyaxoaHOMUt0nl8RPtLGzPLvMRoznTGgsAMv1UoG4i5A2onyVzL%2FNwJnFsdyPbdA0SGo%2FC7p8R8HZc%2Bf70MRblGR6V6EqoGiO2S6JjjFY5s%2BphxtAVFJg%2Bc0XQuwf%2FYtFQi7ATJMpscszIZJLFDBrRYuDSK7w3cwWSX%2F%2BrjBLxM3LMFUt56GFj%2F2e95tu%2BROwEiWXV%2B3FSS6zxQwLxBSRg1lD6gc3MhdEU%2FJFLjApU9ONKfeu6hh0eD9KgwsN0neMRYm5FlN6nOlOK%2FPzaAWD%2BqAw%2FIWF0AY6pgEBVZO6CfyDJWcubjb6RpZUgfSQdtP33V6rpu11ZCm7w%2FtDr7Y%2Bdl28dOyuAUK5UwNHWeqadg4JxW6a%2FhJ%2B%2BvTdrsYthSYhbq1lZXTmIq6WSBXozhZTkWzY0cIlMHaRpAMKW2l6zVDGE6BsE8fNZgATVbGBQfuia%2BepiPqnaJh0so%2BJhn5TMr1pSlcOI4e1aNn9Nw9JfdXv59PYRqicUvqwvhBUlAKN&X-Amz-Signature=5e421ad348010162423755841f8fba4dc83c89f4167c48d6d7affe0426ce993e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B4PR7IW%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCYZWQVXKmQ3xVIHTMParzNQKBRE9wOtTJWkQoBUryuaAIhAMndeTzWXjeXEkXzQKyKGzidgwgnF64Bg%2BpMoGBhc7GTKv8DCAwQABoMNjM3NDIzMTgzODA1Igw%2BbKUkACMeZlRSxNMq3AMxu5Bd%2Bd7rHQbuCBg0TeiR%2FSezu3fi1%2Bi%2FNQ%2FKiWKejylQn6RkHt3%2BA7%2FDMkAt2B1SOXCImnJuOeb9dqh93xox7wwintiUngCt2o9KjfA8%2BAGhPBMBmcl3%2B48uMZN%2FkMRpjpjK2ZhtTw6rIH8E1b5fO6j5WUGetcZQuBLuAv%2BomqQh6Y2LT%2FS5ooPn%2BKYpbH4GPSQT74KSn%2FzyTTwmmk0WcUwdT9%2B%2Bw4tnmFf8At3qW3CRjX4XDt7jb63aoS9OljSwoF4p1BhivM34vZCl1jz2nthIgUTLKft8jmpuoVE04qrEheBtX%2B7kPJacrkjtMuHZjAEXBzyQLL4D1B4Jlvyd5V1tG1LStS0%2FZmnNDxPP%2FTD9KdaZefyMbmGjBAgC9mu8ps%2F5Rtiog6mo2o6Eyz6tvNlYPSI4n0zGNatAliir%2FYiw1i2grtyUC31QAs%2F9MeiRJ7bWOLKP%2F5ELpf631kxwEQqHZRzFJfyn3To1LhEnup6wGtWJk9%2F9hgpcCDuisv5UMkmvZerkhmQaJNe72reOXoH1uDRa8XPhVjq%2FswUn5TVMkpOgIBuI%2FMRQ730dl0rWm5USTgWlD8y9Kg68sbdbk9HwGlis1HRXO0xV7hYEZEYb2QVa1SEynK6fkTD9goXQBjqkAZzcP7yzXtLkA97nwh9utvu5%2BzYULYv9wn2H%2F8hDNoL0PioIHolMULHVhjYsrNBPruPUVGryTtZIO5u%2FuDEKUvpTAawDb5F24puYiSulrQlKopRh3Nwb%2BTdcAGPJtIdU4QYZsRmSqmNmV5j0Hv1A12Xam1qd%2Br8lGDN3a0HRdrkg1vBjqHFbTpVyTjgiJx8ZHvfizda4FgLwjDlbUg6SNmnz9qbJ&X-Amz-Signature=f75d2665d140d0f412e2dc61e470c01774266146245f93b809ef9497973727e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Connect RX of the type-c to the TX/TXD of USB to UART

and TX of the type-c to the RX/RXD of the USB to UART

<details>
  <summary>{{< markdownify >}}Note: TX and TXD??{{< /markdownify >}}</summary>
  
They mean the same thing in this context

TX == TXD

RX == RXD

</details>



<details>
  <summary>{{< markdownify >}}UART1 but its UART2???{{< /markdownify >}}</summary>
  
There are actual 3 different UART ports connected for the type-c

that is why in taproot there are these three in `taproot/src/tap/communication/serial/uart.hpp`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLNY65YQ%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC2I5%2FlgzEhgRf36lg1UKvvScdWouTGQJVuJwxwHG2LpQIhAKETkB%2F7yDHNtmtiPRKBWupTkSlfV%2F9aYaRChHVH%2Ff%2BOKv8DCAwQABoMNjM3NDIzMTgzODA1IgyIAVUpbCP45q47yG4q3APAHH5yAA11SJKTpcOP9oAihQ6S04mZPRzz75SNKpK9J%2BrTTia83mXFcqQtZKOFlIHRKf9zBqT038BVXdPmbireRNPnZ%2FguENKORNV4akQRTjyuhImSFCt6slbUVmPWqlXcqi5wR%2BfWAn%2Bc2yLSl%2FaFKHBK137V7cv3IkjQsS0C1eAM1j5yBqgH5q7OA1v6vYd%2F5iW9bt7Cyl5Yv13p1P2bhXcA4QlRBCLTXLkufjpcIAFCPIhPn4D164xgcoHJ0eoeCDEmx5Xh8sNc5A19iKPAvSKQT0aGG94pWBOogSyfrNbEmZ%2FsFyyAnbDnwmtVVg%2BO%2Fdck8wj4wRK3zh55U7t3vp3fBgCz2pjGg2Y3h34v31sAx8pu5igOg%2Bln7vuiIjFcNKlpeF17yCdl3aUqLpVtpRKSZakdcf6jiySEIkKCEcTNGaMofYbpO73J5PVOrPGeOdL3xQD%2BeXIoRgD%2FeTIXzD%2FuJF%2FGLCGSJHXXkAgZ0YOcNaInOvsF%2FihxM7RiCeHRg1cNhwmIBif29eKIRGqFoBAMp47KwOumDbzNlLWDPDlL%2FO2e44nbFQYvjl4gWmFrwSaPhCdRCmeu9IUrjRP0mMD91mmqFxifLKymbEwqpUlNfcGHUC2akorvaTDIhIXQBjqkAWeUuwVVhKRxIJ6aQHUXzYIBWYof3OZvXX5Y4bXVdJTRXk%2BtxJx5mnyCVYRmlj8MsaFzp6TBgR7zmabZFa0zolL0mjKIO6yEu%2BubyaqqMW1GbiaAiRjFmcuBSgGsazxlOUpUtP9YfCRDuzhol1sv%2F5LPRXMgiQW%2B1M3Yd%2BFTjnWKyhdphSDYnN8oeTpsbc8pJufyvRP753d4jnk7T9xi%2B8EdOQ7I&X-Amz-Signature=9e3e9437f858ca79ec7a49fe6bc46b190b9c7b01d86df0af9d7830a2696d5aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLNY65YQ%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC2I5%2FlgzEhgRf36lg1UKvvScdWouTGQJVuJwxwHG2LpQIhAKETkB%2F7yDHNtmtiPRKBWupTkSlfV%2F9aYaRChHVH%2Ff%2BOKv8DCAwQABoMNjM3NDIzMTgzODA1IgyIAVUpbCP45q47yG4q3APAHH5yAA11SJKTpcOP9oAihQ6S04mZPRzz75SNKpK9J%2BrTTia83mXFcqQtZKOFlIHRKf9zBqT038BVXdPmbireRNPnZ%2FguENKORNV4akQRTjyuhImSFCt6slbUVmPWqlXcqi5wR%2BfWAn%2Bc2yLSl%2FaFKHBK137V7cv3IkjQsS0C1eAM1j5yBqgH5q7OA1v6vYd%2F5iW9bt7Cyl5Yv13p1P2bhXcA4QlRBCLTXLkufjpcIAFCPIhPn4D164xgcoHJ0eoeCDEmx5Xh8sNc5A19iKPAvSKQT0aGG94pWBOogSyfrNbEmZ%2FsFyyAnbDnwmtVVg%2BO%2Fdck8wj4wRK3zh55U7t3vp3fBgCz2pjGg2Y3h34v31sAx8pu5igOg%2Bln7vuiIjFcNKlpeF17yCdl3aUqLpVtpRKSZakdcf6jiySEIkKCEcTNGaMofYbpO73J5PVOrPGeOdL3xQD%2BeXIoRgD%2FeTIXzD%2FuJF%2FGLCGSJHXXkAgZ0YOcNaInOvsF%2FihxM7RiCeHRg1cNhwmIBif29eKIRGqFoBAMp47KwOumDbzNlLWDPDlL%2FO2e44nbFQYvjl4gWmFrwSaPhCdRCmeu9IUrjRP0mMD91mmqFxifLKymbEwqpUlNfcGHUC2akorvaTDIhIXQBjqkAWeUuwVVhKRxIJ6aQHUXzYIBWYof3OZvXX5Y4bXVdJTRXk%2BtxJx5mnyCVYRmlj8MsaFzp6TBgR7zmabZFa0zolL0mjKIO6yEu%2BubyaqqMW1GbiaAiRjFmcuBSgGsazxlOUpUtP9YfCRDuzhol1sv%2F5LPRXMgiQW%2B1M3Yd%2BFTjnWKyhdphSDYnN8oeTpsbc8pJufyvRP753d4jnk7T9xi%2B8EdOQ7I&X-Amz-Signature=478c92b4288afcc03d7dd0dc87bc0bba4401c62ad5b2cad723360af4a074f20a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B4PR7IW%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCYZWQVXKmQ3xVIHTMParzNQKBRE9wOtTJWkQoBUryuaAIhAMndeTzWXjeXEkXzQKyKGzidgwgnF64Bg%2BpMoGBhc7GTKv8DCAwQABoMNjM3NDIzMTgzODA1Igw%2BbKUkACMeZlRSxNMq3AMxu5Bd%2Bd7rHQbuCBg0TeiR%2FSezu3fi1%2Bi%2FNQ%2FKiWKejylQn6RkHt3%2BA7%2FDMkAt2B1SOXCImnJuOeb9dqh93xox7wwintiUngCt2o9KjfA8%2BAGhPBMBmcl3%2B48uMZN%2FkMRpjpjK2ZhtTw6rIH8E1b5fO6j5WUGetcZQuBLuAv%2BomqQh6Y2LT%2FS5ooPn%2BKYpbH4GPSQT74KSn%2FzyTTwmmk0WcUwdT9%2B%2Bw4tnmFf8At3qW3CRjX4XDt7jb63aoS9OljSwoF4p1BhivM34vZCl1jz2nthIgUTLKft8jmpuoVE04qrEheBtX%2B7kPJacrkjtMuHZjAEXBzyQLL4D1B4Jlvyd5V1tG1LStS0%2FZmnNDxPP%2FTD9KdaZefyMbmGjBAgC9mu8ps%2F5Rtiog6mo2o6Eyz6tvNlYPSI4n0zGNatAliir%2FYiw1i2grtyUC31QAs%2F9MeiRJ7bWOLKP%2F5ELpf631kxwEQqHZRzFJfyn3To1LhEnup6wGtWJk9%2F9hgpcCDuisv5UMkmvZerkhmQaJNe72reOXoH1uDRa8XPhVjq%2FswUn5TVMkpOgIBuI%2FMRQ730dl0rWm5USTgWlD8y9Kg68sbdbk9HwGlis1HRXO0xV7hYEZEYb2QVa1SEynK6fkTD9goXQBjqkAZzcP7yzXtLkA97nwh9utvu5%2BzYULYv9wn2H%2F8hDNoL0PioIHolMULHVhjYsrNBPruPUVGryTtZIO5u%2FuDEKUvpTAawDb5F24puYiSulrQlKopRh3Nwb%2BTdcAGPJtIdU4QYZsRmSqmNmV5j0Hv1A12Xam1qd%2Br8lGDN3a0HRdrkg1vBjqHFbTpVyTjgiJx8ZHvfizda4FgLwjDlbUg6SNmnz9qbJ&X-Amz-Signature=4e0b0706b9fabb43c1ee1ef9f4dec3a2b6bcece88d5ab638c70d739b7a4801f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## NOTE: MAKE SURE RX → TXD and TX → RXD (they must be “flipped”)

<details>
  <summary>{{< markdownify >}}Why flipped?{{< /markdownify >}}</summary>
  
TX stands for transfer and RX stands for receive.

you want the transfer pin off the USB to UART to go into the receive pin of the type-c and vice versa

</details>



Finally plug the USB to UART board into your laptop or Jetson

## Software

We will first code the laptop/jetson side in python

### UART settings

the settings the type-c in taproot uses are in this table below:

| **Settings**         | **Value**    |
| -------------------- | ------------ |
| baud rate (bits/sec) | 115200       |
| byte size            | 8            |
| parity               | None         |
| stop bits            | one stop bit |

**NOTE: the bytes are sent in little endian**

### Jetson code

install the [pyserial](https://pyserial.readthedocs.io/en/latest/shortintro.html) library with `pip` to be able to send UART messages on your computer

```bash
pip install pyserial
```

If you have any questions below is the pyserial API 

**Official pyserial API:** [**https://pyserial.readthedocs.io/en/latest/shortintro.html**](https://pyserial.readthedocs.io/en/latest/shortintro.html)

Otherwise let us write a simple script to send a message over to the type-c

First find the port on linux the USB has been connected to by typing this command

```bash
ls /dev/tty*
```

you should get a list of files saying `/dev/tty`, `/dev/tty0`, `/dev/tty1`...

Looking for something close to `/dev/ttyUSB0` or `/dev/ttyUSB1`. (In my case it was `/dev/ttyUSB0`)

To make sure that is the correct file/port unplug the USB to UART cable and run `ls /dev/tty*` again to check if it disappears and reconnect and run the command to see if it reapppears.

Next write this python script and for the argument for `serial.Serial()` put the port you USB to UART device appeared as

```bash
import serial

ser = serial.Serial()                   # inits serial object
ser.port = '/dev/ttyUSB0'               # selects the port
ser.baudrate = 115200                   # set baudrate
ser.bytesize = serial.EIGHTBITS         # set byte size
ser.parity = serial.PARITY_NONE         # set parity bit
ser.stopbits = serial.STOPBITS_ONE      # set stop bit
ser.open()                              # opens the serial port
ser.write(b'hello')                     # write a string
ser.close()                             # close port
```

> Note we applied the settings from [here](/223da3bc629780a48291ecdfafcf7da0)

<details>
  <summary>{{< markdownify >}}Note: type-c max baud rate{{< /markdownify >}}</summary>
  
according to ARUW the type-c can’t handle the max baud rate of the USB to UART chip (921,600) when using both RX and TX due to impedance.

this is why ARUW runs with separate UART ports each with one RX and one TX.

</details>



this script should just send the bytes `hello` on to the wire or exactly the bytes 0x68, 0x65, 0x6C, 0x6C, 0x6F.

| h    | e    | l    | l    | o    |
| ---- | ---- | ---- | ---- | ---- |
| 0x68 | 0x65 | 0x6C | 0x6C | 0x6F |

run the program and you should see the TXD led flash on the USB to UART board this just shows the actual 1s and 0s being sent on to the wire proving messages are being sent from the laptop/Jetson. 

> NOTE: this is a good debugging tool to check if stuff is being sent.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B4PR7IW%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCYZWQVXKmQ3xVIHTMParzNQKBRE9wOtTJWkQoBUryuaAIhAMndeTzWXjeXEkXzQKyKGzidgwgnF64Bg%2BpMoGBhc7GTKv8DCAwQABoMNjM3NDIzMTgzODA1Igw%2BbKUkACMeZlRSxNMq3AMxu5Bd%2Bd7rHQbuCBg0TeiR%2FSezu3fi1%2Bi%2FNQ%2FKiWKejylQn6RkHt3%2BA7%2FDMkAt2B1SOXCImnJuOeb9dqh93xox7wwintiUngCt2o9KjfA8%2BAGhPBMBmcl3%2B48uMZN%2FkMRpjpjK2ZhtTw6rIH8E1b5fO6j5WUGetcZQuBLuAv%2BomqQh6Y2LT%2FS5ooPn%2BKYpbH4GPSQT74KSn%2FzyTTwmmk0WcUwdT9%2B%2Bw4tnmFf8At3qW3CRjX4XDt7jb63aoS9OljSwoF4p1BhivM34vZCl1jz2nthIgUTLKft8jmpuoVE04qrEheBtX%2B7kPJacrkjtMuHZjAEXBzyQLL4D1B4Jlvyd5V1tG1LStS0%2FZmnNDxPP%2FTD9KdaZefyMbmGjBAgC9mu8ps%2F5Rtiog6mo2o6Eyz6tvNlYPSI4n0zGNatAliir%2FYiw1i2grtyUC31QAs%2F9MeiRJ7bWOLKP%2F5ELpf631kxwEQqHZRzFJfyn3To1LhEnup6wGtWJk9%2F9hgpcCDuisv5UMkmvZerkhmQaJNe72reOXoH1uDRa8XPhVjq%2FswUn5TVMkpOgIBuI%2FMRQ730dl0rWm5USTgWlD8y9Kg68sbdbk9HwGlis1HRXO0xV7hYEZEYb2QVa1SEynK6fkTD9goXQBjqkAZzcP7yzXtLkA97nwh9utvu5%2BzYULYv9wn2H%2F8hDNoL0PioIHolMULHVhjYsrNBPruPUVGryTtZIO5u%2FuDEKUvpTAawDb5F24puYiSulrQlKopRh3Nwb%2BTdcAGPJtIdU4QYZsRmSqmNmV5j0Hv1A12Xam1qd%2Br8lGDN3a0HRdrkg1vBjqHFbTpVyTjgiJx8ZHvfizda4FgLwjDlbUg6SNmnz9qbJ&X-Amz-Signature=06514b86ecb888a3ee96372c7e99bd9852e45411fb34d63d3ba91e5a8ca21774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XSWCIUE%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCgu79Hc9wJ68cJ4NSkPKU4cBdnYtvSEsNk2XSum%2BXpCwIgFRiB0Ddwnam0vZmKn8lmuqIbi38tZ9dbjbWbaNxaJ40q%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDCpt7cqkHO7C3wA0KircA5g8VgRlLlOLsBbVYdu%2BrrF%2BlKmOHUEXtUCobyT5tkfUIwqVr9hF8ycnIy1V%2F0EK8%2FrcKmpiwg7KiRG0si65M7EGzMLP%2FkZvQls1IqTNaRXsvOWRVfzRHRgSGe5ba83qfKDFqEpxreLVSFD3ZcjZXCQNMbpfU43mAZVsQIZikDJwUZLFn8SWKAzV2lTdauvKZPEfIFJaSwhR0hlrDPPNlfuKDQISnbYJzV4QpzX8m7LUYYlDwlxsTa3Ep8bUeN%2F%2BpFTWoX%2Fb%2B5VmsRZhqqU4Sv4J9azvTyQ6KbvM6ByTabTmcu6pP4%2BWccXbHyPkpgc2fkvCPxXBFw0ppC3ZMoYyCuViEOdcUpjXXKIUvScGeOcw%2BN9Q3aFR6qbbY7de%2FKaJbbCWbYt8lumeMTvjluSEI8eTrg283NdpvUbYXAMG1tG9jFQtnExpgCQknNT1zeL%2BRWpt4kKtckNYwFWnrIrecmXkxp7eypuyCV%2BLbP5r%2B4WEpMrNC5ShbKmSKfQv4E%2BHJ6kYnn67%2BvWpTjXIqqusUSoeeqM8TCEKWE7LX58C2m8blbKjURNh%2FLFfTyH87z0mRm9O9jEXQnUOKf9%2B%2FVfQ0leXcHMgdPJPk%2FKQ%2BbTsPhRRC%2BFOEd1qvNBJdVdAMP%2BChdAGOqUBYxMZQKv9Hb7nD%2B4Iek2teTZttSwrHQZDlKZjjTyCoTkla34kJ2YnclYteb92GIr%2F0Q3SNMNKSjiqxK6Rzcu2cI%2FvjBtByZlhrKJ%2FGy7UFAbpu%2FXffy2xo5PTiVw5HxrKSyg%2Bfz7mctnjXZQWt6MSt55tLI5RcfeWYSUqNncrLHmUiyV%2FKNirkSdCh8P1kByVsfrnDSeiddGRII8JH77xNkWQOSeL&X-Amz-Signature=f48e94506b41fca3004ba89b4ddb364dd07106bd0ae97fce4c823cf23b162638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



### Type-c code

let us make every time we receive a message we flash the led

```cpp
#include "tap/board/board.hpp"  // import board specific settings

#include "drivers_singleton.hpp"  // import taproot

int main() {
    src::Drivers* drivers = src::DoNotUse_getDrivers();  // get the driver object
    Board::initialize();                                 // initialize the whole board

    const tap::communication::serial::Uart::UartPort port = tap::communication::serial::Uart::UartPort::Uart1;
    drivers->uart.init<port, 115200>();
    drivers->leds.init();  // initialize the led

    while (true) {

        uint8_t buff[5];                    // buffer to store the msg
        int read_len = drivers->uart.read(  // read the msg in from uart RX queue
            port,                           // port to read from
            buff,                           // where to store the msg
            5                               // read five bytes
        );

        char* msg = (char*)buff;  // cast the raw bytes(uint8_t) into a string

        // check if read in msg contains the string "hello"
        if (read_len != 0 && strncmp(msg, "hello", 5) == 0) {
            drivers->leds.set(tap::gpio::Leds::Red, true);  // Turn On LED
            modm::delay_ms(500);                            // sleep
        }
        drivers->leds.set(tap::gpio::Leds::Red, false);  // Turn On LED
        modm::delay_ms(500);                             // sleep
    }
}
```

compile and flash the code to the type-c and every time you run the python program on your laptop/Jetson the type-c 

If you would like to check you can check each byte of buff (`buff[0]` , `buff[1]` , …) matches with the [hello table](/223da3bc629780a48291ecdfafcf7da0) above.

### sending 2 floats

Let us now modify our code to send two floats over

```python "2-2","12-12","14-14"
import serial
import struct

ser = serial.Serial()                   # inits serial object
ser.port = '/dev/ttyUSB0'               # selects the port
ser.baudrate = 115200 # set baudrate
ser.bytesize = serial.EIGHTBITS # set byte size
ser.parity = serial.PARITY_NONE # set parity bit
ser.stopbits = serial.STOPBITS_ONE # set stop bit
ser.open()

msg = struct.pack('<ff', 69.0, 420.0) # turns the floats into bytes in litte-endian

ser.write(msg)          # write two floats
ser.close()             # close port

```

to turn floats into bytes we will use the struct library

**struct API:** [https://docs.python.org/3/library/struct.html](https://docs.python.org/3/library/struct.html)

> Note: we use little endian because ARM and most communication protocols use little endian

```cpp "5-8","19-19","20-20","24-24","27-28","31-31"
#include "tap/board/board.hpp"  // import board specific settings

#include "drivers_singleton.hpp"  // import taproot

struct msg_format {  // creating  struct to received data
    float x;
    float y;
};

int main() {
    src::Drivers* drivers = src::DoNotUse_getDrivers();  // get the driver object
    Board::initialize();                                 // initialize the whole board

    const tap::communication::serial::Uart::UartPort port = tap::communication::serial::Uart::UartPort::Uart1;
    drivers->uart.init<port, 115200>();
    drivers->leds.init();  // initialize the led

    while (true) {
        int msg_size = sizeof(msg_format);
        uint8_t buff[msg_size];             // buffer to store the msg
        int read_len = drivers->uart.read(  // read the msg in from uart RX queue
            port,                           // port to read from
            buff,                           // where to store the msg
            msg_size                        // read five bytes
        );

        msg_format msg;                // where to store the msg
        memcpy(&msg, buff, msg_size);  // copy raw bytes into msg_format struct

        // check if read in msg contains the string "hello"
        if (read_len != 0 && msg.x == 69.0 && msg.y == 420.0) {
            drivers->leds.set(tap::gpio::Leds::Red, true);  // Turn On LED
            modm::delay_ms(500);                            // sleep
        }
        drivers->leds.set(tap::gpio::Leds::Red, false);  // Turn On LED
        modm::delay_ms(500);                             // sleep
    }
}
```

##  🎉CONGRATS!! YOU HAVE WORKING UART 🎉

---

At this point you can stop reading the guide and just use this setup. 

However, there is a much safer and elegant way taproot provides for UART communication this next section goes over.

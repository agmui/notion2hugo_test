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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTMIYXUF%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIDifqCBEAH6pGj5vl3C5s7FgFLlp%2FxzJR%2FlDBo0r3Ll3AiA1Yg%2BY7%2Bq7WsTxxx%2Bv9Mu6Hws6K7BhHQGHTKJxZ8tjNCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0nxFSOz2aZiIWt3wKtwDwXaRAXNJfs84teD1EqypKawV8246mnn3pOt%2BRMTUjSjp4GLZmsFTUMgmAf6SfvEMzghIUrI6afiDARe5BZMUSgpc85E5m83AIimxNjT8AEy9kIsGz8ROYlRgq994esrR%2FF%2By5fD%2FxfbPa%2Bbp%2FFImfQSk1jc%2FQjmmrOiADHUYcfqRew0VpVUhX18pVPmjfAVU6Y9KsG22AWhUNGHp0E1ikbbAoJFcPs9WX8MYEqPQHBYrvaoQ5Ys5nVqUUuuWvM3n6pXJm11G%2BoVxfbGehplXz19EIQGrP26H9XG0vEX8A3uuvfzSIoRr%2BHhxUgtEHf93T2vAKYqKsY9NjMoHK%2BHEblAwP4wqIjeu%2FaNCmqKCgbE7K1XzQ%2FYz3A%2BLrk3WTRYpI2Z%2BHOKXi0CA3Jr3qwRvuVX1VGd78JGrHxYJy2pllmRonTPOiOc34ki3DakQyrahSM%2FwcJw95WGJjDccypBgMsVj%2BiPgV92CnLCT71eOoeUkUAzf%2BAmqbPFk%2BZzDFecg6jQgOgdiWh0okNgSic%2FBY4h%2FEAbiYxodmztSC%2FUr8hMmcsmjTo3T3iRD5ZfqS4ag08XuDWEn6E0oJmicmujDECyYjX7QQJ33vyaTWnNpp0prCCb%2Fr%2BTUUeIYnGcw%2FbfcygY6pgEIIITU7vCKHOQ2BCwkKeNEzBx6sHbfTGP8nPFeIF86YEXLZ7ACqRQZYVq2NmvFIqBt8mBCwJVkptd01w45xG%2BmPIcSDpRgIMROx%2FsgzpBKQKL8YM%2B1r9IdOrkvGnA0Pado2AUButOFKrR3Mstl%2FfTTHOA3XdBfHGHvXThZYdPuywX2gwSHuDHtu13%2FeB4rxWbT9%2FDjNRUCzOkp71sEufnxSeTNnZt9&X-Amz-Signature=458c6d663f887f53b0f488bc6984d1e20d3eb482b2fa90b2579212ed2ff3c92c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE3J2G46%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIBiS2aC4nNoex%2BONHi1geYU8%2B7tek8ugsjx4lZBVbxqWAiAWTbxXlgJa%2BjkksOl9%2BsMk4W1KyEjODRSIu2EZybavZiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIWw7cXJcpkRv3JVLKtwDq5lE425D1QP81Y3qUGOHw9qGl2MdzqABVP2GauXvvYy7fjKkXWc%2F%2FED4ppWtPUgoU2AmbWgeuZ4C%2FaCRAsm1F90jwCUEotqioPeWXPszOYkLYqJSSxJfQkjxetXHxUqjNA2txWcgyo3sa9FQ69dsEclIv%2FM5gdFAdc1ZeGx%2BE7uvfTl1IqY7Ci0uikjmOEHnyi4AhYU%2FZF75KrvIH883%2BNYqAZq1gpGlu0%2Bm3Fn%2FQsrv8vrd2cGrHfYvqc6m667i6GTRaZuC4odWwftMDrhx1tPeGpoEVe0E%2BeU4XDjAzI6B81ZInMrBi9FOZsngytSLGae1ac%2BmdGvqYSC7etH0pn3h8Ujl9tpQQGQu7A%2F8rCXAtDL4Glufk70jdDnTsfIjTEbRrRhQHt7utSkh1XiRXSs%2FU62WJnLqnISSZ2UwuLrji5ni0ecPA3IB%2FacFDpVU%2Bata7CbqglojUUWLDulZjXrRW0Oy%2F60wgTWrKMhuuS6KxQSbAoRXTG5pefKHarLaVCjFQXV46J31f0ZminTQB24ozl4moYaBA%2BFtjG20oABFv5Ezp0bWrACkC7dpCbtykcB%2Bl6n%2BXCk9K6%2FH9jMUSyiWlB7sKRjp0kYm9G2ms4M8VehVY3%2BSrA%2FfZLYwo5jcygY6pgEvLTaBkOVlRX0A7ZzvOctWSHuaRUMK3Tw19k%2BBKrraCvyag%2BaJz0yQQjvCkNsCafbFWsIZm3BTIdKCg82RCEuZDE9Zp4KmECkQjxn1U4ZcXcYNC1Xn2RCOvpPmYPCrlT31D1VR7U%2BANqqb9Y3brUiR8meFuh51dhsFoDKm8ZZoDnM6YQTut%2BpHdEQyus3bBcAZs9xnnFcmSqDSwNx3UkvEDLC1qQOM&X-Amz-Signature=294bab0aaa128414aac151c7d70c9969058a1341de5c4bf703dd521bf79762b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCTC7I7S%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDaVGxcSl6Gv%2Fh9t%2F7qud255cLyPZ7vxSZGTyTQgfPkawIhAKyM9%2FotvQC3OFtKbdJOG4LW68COKD4sOi1sHHUGG%2BrAKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1udHSYHc%2B1tWop8Yq3AP%2F1uAHlrJi10zPOBXCFOL1W0Rtw3Sz4S14lEz9LXMmzn6n45BL%2F%2BF63OMOhRtBwm1Y9x%2BBCbLJ0msJVX4n0Cy5NiTuXPXwW8QSkj%2BEPi%2FG8IDn2BZ6Z4y9nAJ3%2BmMoxlIBHJ%2FEqydB%2F9Jd1VAo3Ert9S%2B2neeFSlAAmQ1FCxIlI%2B9cCDjNE08c7LumO8yrki1pIL8f3GwTxC3sA7x%2FjxQlUtYeGV9W9ocRB7Zz3GydKargWMtOwF8t20NYO7RKP%2BXODUIJ62R7ykt0LUMg51mxaIzB2MIINtyOetq2HtJhgILWYNlZsAQJ7OrfE6za3POoVah8tIEiDrl07%2B%2BnkT5plo5RrQUC92YtTi3HIqbWdz0%2BlteEcCFl703QlR44gGehi0dbozB70LrqTJlRGYmkJmkUvhSAzS9IsGr6ArIvTOZwrCtD8b5D9Y3TSLCmQlTXs4mvg2cEvpabAEu6JMkLt%2BFt8tZW68ov%2BGExeqsw%2FT9mga4ZyOYBJbzDzoRsV70PBmP7lDIS55%2BlU6CzASalHdabEq49zm4Ax5Yc19sF8iVn%2BBXOhrmdf3SDN1G4BwPOUg1jogeRovv6ceGIGDeY5UWoDT%2BHLyA95JXMuKRf500JQfs7rQzU6EXBZjDDvdvKBjqkAaeCh%2FNUC4augIhs53jqHhsFvSf%2Bg0SU1rXI2eEfNH6psmjflViZpnOd5b31u2qhTRqZWfjsncYVZvvb6ajpjvLlhdeNIGBSAz2JR1EvZCoWX0v3W62sVgizOEb79YrkjulBtnPVX00VFhLhVEu9ysAkvuIzvx44pA5RmKuNo6GIvh%2FyNdJbaB6w2022cbrgV1hfeSbEV%2FBIGqtwCOZuVusDqnK8&X-Amz-Signature=f7c875b162bff779e8503e5fe4c8314f1da3b2881b959e4769cd35e6798842ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCTC7I7S%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDaVGxcSl6Gv%2Fh9t%2F7qud255cLyPZ7vxSZGTyTQgfPkawIhAKyM9%2FotvQC3OFtKbdJOG4LW68COKD4sOi1sHHUGG%2BrAKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1udHSYHc%2B1tWop8Yq3AP%2F1uAHlrJi10zPOBXCFOL1W0Rtw3Sz4S14lEz9LXMmzn6n45BL%2F%2BF63OMOhRtBwm1Y9x%2BBCbLJ0msJVX4n0Cy5NiTuXPXwW8QSkj%2BEPi%2FG8IDn2BZ6Z4y9nAJ3%2BmMoxlIBHJ%2FEqydB%2F9Jd1VAo3Ert9S%2B2neeFSlAAmQ1FCxIlI%2B9cCDjNE08c7LumO8yrki1pIL8f3GwTxC3sA7x%2FjxQlUtYeGV9W9ocRB7Zz3GydKargWMtOwF8t20NYO7RKP%2BXODUIJ62R7ykt0LUMg51mxaIzB2MIINtyOetq2HtJhgILWYNlZsAQJ7OrfE6za3POoVah8tIEiDrl07%2B%2BnkT5plo5RrQUC92YtTi3HIqbWdz0%2BlteEcCFl703QlR44gGehi0dbozB70LrqTJlRGYmkJmkUvhSAzS9IsGr6ArIvTOZwrCtD8b5D9Y3TSLCmQlTXs4mvg2cEvpabAEu6JMkLt%2BFt8tZW68ov%2BGExeqsw%2FT9mga4ZyOYBJbzDzoRsV70PBmP7lDIS55%2BlU6CzASalHdabEq49zm4Ax5Yc19sF8iVn%2BBXOhrmdf3SDN1G4BwPOUg1jogeRovv6ceGIGDeY5UWoDT%2BHLyA95JXMuKRf500JQfs7rQzU6EXBZjDDvdvKBjqkAaeCh%2FNUC4augIhs53jqHhsFvSf%2Bg0SU1rXI2eEfNH6psmjflViZpnOd5b31u2qhTRqZWfjsncYVZvvb6ajpjvLlhdeNIGBSAz2JR1EvZCoWX0v3W62sVgizOEb79YrkjulBtnPVX00VFhLhVEu9ysAkvuIzvx44pA5RmKuNo6GIvh%2FyNdJbaB6w2022cbrgV1hfeSbEV%2FBIGqtwCOZuVusDqnK8&X-Amz-Signature=2537ca7d555e95a537385fc4133738ad93350bc1d0264f84d14f809168916484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE3J2G46%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIBiS2aC4nNoex%2BONHi1geYU8%2B7tek8ugsjx4lZBVbxqWAiAWTbxXlgJa%2BjkksOl9%2BsMk4W1KyEjODRSIu2EZybavZiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIWw7cXJcpkRv3JVLKtwDq5lE425D1QP81Y3qUGOHw9qGl2MdzqABVP2GauXvvYy7fjKkXWc%2F%2FED4ppWtPUgoU2AmbWgeuZ4C%2FaCRAsm1F90jwCUEotqioPeWXPszOYkLYqJSSxJfQkjxetXHxUqjNA2txWcgyo3sa9FQ69dsEclIv%2FM5gdFAdc1ZeGx%2BE7uvfTl1IqY7Ci0uikjmOEHnyi4AhYU%2FZF75KrvIH883%2BNYqAZq1gpGlu0%2Bm3Fn%2FQsrv8vrd2cGrHfYvqc6m667i6GTRaZuC4odWwftMDrhx1tPeGpoEVe0E%2BeU4XDjAzI6B81ZInMrBi9FOZsngytSLGae1ac%2BmdGvqYSC7etH0pn3h8Ujl9tpQQGQu7A%2F8rCXAtDL4Glufk70jdDnTsfIjTEbRrRhQHt7utSkh1XiRXSs%2FU62WJnLqnISSZ2UwuLrji5ni0ecPA3IB%2FacFDpVU%2Bata7CbqglojUUWLDulZjXrRW0Oy%2F60wgTWrKMhuuS6KxQSbAoRXTG5pefKHarLaVCjFQXV46J31f0ZminTQB24ozl4moYaBA%2BFtjG20oABFv5Ezp0bWrACkC7dpCbtykcB%2Bl6n%2BXCk9K6%2FH9jMUSyiWlB7sKRjp0kYm9G2ms4M8VehVY3%2BSrA%2FfZLYwo5jcygY6pgEvLTaBkOVlRX0A7ZzvOctWSHuaRUMK3Tw19k%2BBKrraCvyag%2BaJz0yQQjvCkNsCafbFWsIZm3BTIdKCg82RCEuZDE9Zp4KmECkQjxn1U4ZcXcYNC1Xn2RCOvpPmYPCrlT31D1VR7U%2BANqqb9Y3brUiR8meFuh51dhsFoDKm8ZZoDnM6YQTut%2BpHdEQyus3bBcAZs9xnnFcmSqDSwNx3UkvEDLC1qQOM&X-Amz-Signature=0e7f5a52def4fdeb69edb5e788b643ba8364ee01f8f0d5cb94a60dab5df37b8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE3J2G46%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIBiS2aC4nNoex%2BONHi1geYU8%2B7tek8ugsjx4lZBVbxqWAiAWTbxXlgJa%2BjkksOl9%2BsMk4W1KyEjODRSIu2EZybavZiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIWw7cXJcpkRv3JVLKtwDq5lE425D1QP81Y3qUGOHw9qGl2MdzqABVP2GauXvvYy7fjKkXWc%2F%2FED4ppWtPUgoU2AmbWgeuZ4C%2FaCRAsm1F90jwCUEotqioPeWXPszOYkLYqJSSxJfQkjxetXHxUqjNA2txWcgyo3sa9FQ69dsEclIv%2FM5gdFAdc1ZeGx%2BE7uvfTl1IqY7Ci0uikjmOEHnyi4AhYU%2FZF75KrvIH883%2BNYqAZq1gpGlu0%2Bm3Fn%2FQsrv8vrd2cGrHfYvqc6m667i6GTRaZuC4odWwftMDrhx1tPeGpoEVe0E%2BeU4XDjAzI6B81ZInMrBi9FOZsngytSLGae1ac%2BmdGvqYSC7etH0pn3h8Ujl9tpQQGQu7A%2F8rCXAtDL4Glufk70jdDnTsfIjTEbRrRhQHt7utSkh1XiRXSs%2FU62WJnLqnISSZ2UwuLrji5ni0ecPA3IB%2FacFDpVU%2Bata7CbqglojUUWLDulZjXrRW0Oy%2F60wgTWrKMhuuS6KxQSbAoRXTG5pefKHarLaVCjFQXV46J31f0ZminTQB24ozl4moYaBA%2BFtjG20oABFv5Ezp0bWrACkC7dpCbtykcB%2Bl6n%2BXCk9K6%2FH9jMUSyiWlB7sKRjp0kYm9G2ms4M8VehVY3%2BSrA%2FfZLYwo5jcygY6pgEvLTaBkOVlRX0A7ZzvOctWSHuaRUMK3Tw19k%2BBKrraCvyag%2BaJz0yQQjvCkNsCafbFWsIZm3BTIdKCg82RCEuZDE9Zp4KmECkQjxn1U4ZcXcYNC1Xn2RCOvpPmYPCrlT31D1VR7U%2BANqqb9Y3brUiR8meFuh51dhsFoDKm8ZZoDnM6YQTut%2BpHdEQyus3bBcAZs9xnnFcmSqDSwNx3UkvEDLC1qQOM&X-Amz-Signature=b3e897d80fb41e6a8f4be39c1910e4784b1866c058324af2445b5a0b94cdf6ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUKRIWDX%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIFhZVLceBCMz3VYrLzheYMgP0z9VlzsUc59BrnGCIrMlAiAeEf3kYBAV9Wu7%2FasUUiZUpsJfhzWl1grX8RvK3fkUXiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzr2t%2FzvI8s1SaUbBKtwDGlvsoQRYWR4vY9Y%2BTYf1gQBI2mSdWH%2BpbuasLb1ihx8848f5JASoG8rK2ZMtCHOWMk%2BuTNOns19Pm%2BbkYsGWkWn7Uec%2FI9VUc1%2Fb834GeuxztOuR%2BTDs5RymWa4ZuikMd0N28pJZS28xbEWLablCOTmSqN0QD41PW0bD1N70riNjVAzz5fK2OcnhGSZ879v7OEGB2dBNsC1HoRQ6dscN6vWZ9Jv4dJVDRgUBr2eR%2FqFp0C2DohCLXDUgTQ286QP9V73CxHkjnA3xLG1Z%2F9ZCwAlSYLuEu6Ne38TMJkQNcJyvuFPXrBLO2XYSSYSU7ZxIRD4gllPtwooVKV%2FKCYBaC9hldDCruBbY4bE32ZVCL4cpFqPVgzJDsmBXxauSyG1yQ269kSQWhcAJYiBjy8G7rse1tWUSiwyoIKe%2BVnnmxpOF2AcmXw%2BV%2BhCAwfWCyBBEudOJsRIEBXowVc3tTbwRNHzejYdSRbun%2FzhZ8optm%2Bhj91piR%2FjOZRDYAYha77AfW4b5M%2FI6dj3Nesp5duz3OfFDzTyObj7b8VgkFi%2FfevLSl4q9Pz3MjdEu8c%2Bvmim%2BS0Oq20ubxJYIpFrQZp1bgTIimlFnybwyaXfcoJixTDcBywcWiA2Wuty1olQw4bLcygY6pgEBcujCysOTeuZMNW0lcIMsk4q5cElpa4Lb8rLKX4mRS6FnUjcwNOA%2B%2B%2BOq3UKCsx2HGjRoOYFPybWnGmmG7yogVW0BGMLl7%2BhSaimT0aRnmt9ZIiHn94dCUxOP4TUUUHVxok1c2uZLO%2FWz9bSM2lpV0KbWxwzSk%2FESFh%2FVOuOxcPVieGKdrbv8ffTt0rKxisJ9RGoS%2B%2FkT%2FHOk%2BVT61acEJJAoFcKE&X-Amz-Signature=cdadf75137254a9e6b6e41a831383c7c1a40f70ed2af7af737714ca5149523b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

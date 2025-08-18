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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLEDBG2J%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAwqqekOA9L32SjwpaMOOsVultXo%2F4eyqn25dbVxsupvAiEAj4pXtFS1M31PfgbWmjor2ctTJiXfININwbDhl9VTvykqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBf2kRS%2FnpN5RnomsircAxtyu5c%2B7c3Q1x60tP0o1iagqmt9L0X5neaZPUOYhRL%2BiMWnv29jgdRFvXenL%2BEo2TB3n91gIfb8b3B9%2Bx8RjccsTDVcx9eo3JxKeWoKc4mxDWkfM%2B3y5u1fpWTdpD6bac%2BUUpqAJTkzYlvRZYHbKJ1rO4Co8KTngk2w0wIAT6nfqMSTp336zAc41VEGrI5N4UEPQFKNjrqOO8aeSkOBD6RgUhppbtAUzDJHNUpCjUXMWntjodgiqA3QIIwS7KjXNqHofZd9o4aymv1WB1fV6WZCWI7SrWLeyUrn8cmX7ME8R6sezT4%2FwbsAs8LpDDFT9IrZMQJKQYJPnJiS3WGtm0m%2FidoX8pdyrnpPAfkeUEZTzIljOmDoH9LPUqelIBmunjE9OS2ICbb7yvnA0Sdnxilzmy2zguW9YIXKZ94zh0kbS0sBxyFRZXqQaMVuDE42fXJxqyFObj8p40v5fooZrNhSuFEEis24wP9ZuKslyjNbXKMXKX1gnFDA4fAZh%2BJ4ot0g5HsUIolu2cGglbg8RRLCHNzjV8916O8uQcqVUZ227Ry5R0vLEORlT6Cks5AcCtOlcSQJh1OpXhN307IwKk%2FwzRqFo3MdnRzadyvPqfDAiIoelLs0ZdquWUIFMK%2FricUGOqUBUJU0QPTQsVSefAkmPVtPi%2Fteo91myRc4I%2Ff5ev8jdb%2FH1ehVtACaHnvXAFbw7GQ0ktU%2BZnBk04JArNYrI9%2BwV86pQZGzMDxpdG7Vi1DfSLDgfFkdoH2Sa4rhbLO2Rd6Pm%2ByvY9OsRbEvdITxk0rQ8%2BljTblLtLHtiMXC%2FQBD7ltocinkOZB7TOcdfFr8tAOD%2FvJkGS0kvrqivzbpWx2%2BcnQTL7UR&X-Amz-Signature=4988216600ebba7039d6c48369df4f7ff7baf133bb9e7557dd3e323f92b35922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYPZ7ZF%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC23zW6OmAq0jz%2FvBzqdhc7vh8ODbgeVUjGBHV7SP6r%2BgIgGpjQ12ChGY6iVrhnZugtPLxN7iTqF%2FCLkhnJ85F08jEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0XHgmLJpZ0DUfAXSrcA%2FV9SJWwPNiR7EA6%2BY5syQA4cln23IRTj6vVFJF7aI%2F%2Bzzhz5nhApvtYguMtce%2FLhAp0YjSssEsBTRhrSOJnvNTOCT6ROPCG2n5vN9PU35rSsgpTyvJp2W%2BVKkXBBEwwLop4TUe5Q0skaMYiFXaXLTktwsL08C3Fy%2F0jIdsa596sptzOQ0NaB%2BBV7jvQhXkH%2BQT7ywFyiZ8zQ0aKByyXEBKcJtR59Odn8H0bAbWSi28qH6iLOEc6o4XUnjxXVtF9hkv2G8QysxxNI1iOWf29B%2Fu2mYOgsjjHkJa4hZyaIfEc9nLJwV3lgraXupZuFRBfJ5qMBKfVUOPIeeeTA8bzQQJZZ65k7zZM1hUTfK%2BvuA5GJXGqFjnqvOlArrfwawzSKZZ%2B8vL%2FwiP7kM3NfAO5Xp1ROGzD1O3aFVd8qnai4Fj73KxYEa5z7tpaiQjJ6CPuZKY2HormagPTJRsiCsegrHWS9qG4Yg6llEbipQjXHABvpc0WL8Ltklve5Y5OReaqGzp%2BPjJG%2B2h4UMuYSasZbBR7u%2B1p19QFbz4cgMGTXHJz5eyFqORd9i4A5zdSnpJ1LZUz%2FloiKjo%2BgQxSziI4fIuL8QupOiXJY767rBRovXlp9sfcOQi0JmQ3nwhzMLbqicUGOqUB9wzC1NeIQvu9qCtV8z1%2B8YO%2Bg7VqyRDr9IPnGc5IxSnTvjJa5smsFeJaqVvJsIYZEjc%2FDsIXswMWbw%2F9y3AAMLr8liAC0imOuZHELX%2FRw6IdIkBLTGD4l7mysSEwN9twLPeo111UMyLBjRbEqUeUj54LJVi8iy85pnyw%2BkPIOkaSJZCIZPPWLx74HSxd2Af%2FjfuZnAdZOIUPeQzkg76M%2B%2FLrWKIP&X-Amz-Signature=2b6918d697dc8574a3533f7ab91003b2bbc404c598ad7213e78223f3c804fd63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNKU6ZV%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIEJGklMv0l7b1SJtCazmZZiEyfW%2BAB1PsNnnQnaCyebvAiA0Eyea2Q99Z0KfFN9Gga8dHVwMAAWxuKvPpFcZj8VWLiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgqh9Y%2BnWgsl7TFI7KtwDQJ%2BJOboDFYuLEslGOb7fl%2BJBmaOkKePqPG1hRumP2DNrQm9VY97ySxMzq7RvjbiqCtUT%2FuDDG%2BKcjHXxftU%2BdaNAYplSKultJxZAzanW3H9eviulHuUjFfs%2ByjDytgToz5eGqJ9Ixn%2FjZsj4quEX5%2FI0ZEA2RLqKohSJKwyNh6r2Me%2BnL9OVz3awE9pZcIqOF3jC%2BNvKT1%2FjmYbajAlX29BTxwzQn%2B58wl%2BeLij9f%2BjpHaftnHJ6VuLI6yzAPyyll6pYW4B6GfLWwR45pODcl4tERcv5isKtB0koIRFM6l3VolUbmVX0oDbGn3U7BrV8Kh%2FAIYqC7q3jt2h5ayM8PkHVK5dlUB1Cd07ROxZUgvhGal40BdI5FtJm5g8LjGvcBNW2JCbaOWXi81exrw0uss%2FgPKpWujTludORrHbYl3Vbxxw08JtlBQ3mrynATzwKIyCCqN%2Bie%2Fkx2VtTmVVUh%2FFBUEfuD2HfQAPmph%2BT2UTcHHKniBhE7%2F8rSwx1NdcVo01nHVxP0gpwTh41HX4CaF9bVSNDCsB2ZIJMQblu5ic%2BtiolSOTG2q2oQG9PKvF58k5gkw4ykpLoh0CTZV7s5Wb8pVEDKorWB3W5hoam4LV8A2et54p8ZGAtYlkw9%2BqJxQY6pgHYwVbUxq7e0BH2YmLNGwtitUD1%2BJhMussbd8xIHlrkyP%2BDqOYf5Dr64l9XAt1jXQzSi2tAIt2QP4%2F0KgAEHT4wPOVFiafCTbfGWWbNs4BuKHN7ulPNe22sWAzxckI5zef4zXcSkiN4FMqR4mKfEe1SHmBSUqhiDmDWfovR9DQawRqQ97TeyllG4WL3BV7nSnmHjtBNP4Yzb%2BneCU%2BHgXlExbhfF4GD&X-Amz-Signature=1fe02567b0fd4b241549c750c3561b9cbb77cb81da552cc9af53dddb42543e3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNKU6ZV%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIEJGklMv0l7b1SJtCazmZZiEyfW%2BAB1PsNnnQnaCyebvAiA0Eyea2Q99Z0KfFN9Gga8dHVwMAAWxuKvPpFcZj8VWLiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgqh9Y%2BnWgsl7TFI7KtwDQJ%2BJOboDFYuLEslGOb7fl%2BJBmaOkKePqPG1hRumP2DNrQm9VY97ySxMzq7RvjbiqCtUT%2FuDDG%2BKcjHXxftU%2BdaNAYplSKultJxZAzanW3H9eviulHuUjFfs%2ByjDytgToz5eGqJ9Ixn%2FjZsj4quEX5%2FI0ZEA2RLqKohSJKwyNh6r2Me%2BnL9OVz3awE9pZcIqOF3jC%2BNvKT1%2FjmYbajAlX29BTxwzQn%2B58wl%2BeLij9f%2BjpHaftnHJ6VuLI6yzAPyyll6pYW4B6GfLWwR45pODcl4tERcv5isKtB0koIRFM6l3VolUbmVX0oDbGn3U7BrV8Kh%2FAIYqC7q3jt2h5ayM8PkHVK5dlUB1Cd07ROxZUgvhGal40BdI5FtJm5g8LjGvcBNW2JCbaOWXi81exrw0uss%2FgPKpWujTludORrHbYl3Vbxxw08JtlBQ3mrynATzwKIyCCqN%2Bie%2Fkx2VtTmVVUh%2FFBUEfuD2HfQAPmph%2BT2UTcHHKniBhE7%2F8rSwx1NdcVo01nHVxP0gpwTh41HX4CaF9bVSNDCsB2ZIJMQblu5ic%2BtiolSOTG2q2oQG9PKvF58k5gkw4ykpLoh0CTZV7s5Wb8pVEDKorWB3W5hoam4LV8A2et54p8ZGAtYlkw9%2BqJxQY6pgHYwVbUxq7e0BH2YmLNGwtitUD1%2BJhMussbd8xIHlrkyP%2BDqOYf5Dr64l9XAt1jXQzSi2tAIt2QP4%2F0KgAEHT4wPOVFiafCTbfGWWbNs4BuKHN7ulPNe22sWAzxckI5zef4zXcSkiN4FMqR4mKfEe1SHmBSUqhiDmDWfovR9DQawRqQ97TeyllG4WL3BV7nSnmHjtBNP4Yzb%2BneCU%2BHgXlExbhfF4GD&X-Amz-Signature=aa523e8eeb0e61c9052208c02bb02d7965b6183796d81c9dab2a8b95933c929d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYPZ7ZF%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC23zW6OmAq0jz%2FvBzqdhc7vh8ODbgeVUjGBHV7SP6r%2BgIgGpjQ12ChGY6iVrhnZugtPLxN7iTqF%2FCLkhnJ85F08jEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0XHgmLJpZ0DUfAXSrcA%2FV9SJWwPNiR7EA6%2BY5syQA4cln23IRTj6vVFJF7aI%2F%2Bzzhz5nhApvtYguMtce%2FLhAp0YjSssEsBTRhrSOJnvNTOCT6ROPCG2n5vN9PU35rSsgpTyvJp2W%2BVKkXBBEwwLop4TUe5Q0skaMYiFXaXLTktwsL08C3Fy%2F0jIdsa596sptzOQ0NaB%2BBV7jvQhXkH%2BQT7ywFyiZ8zQ0aKByyXEBKcJtR59Odn8H0bAbWSi28qH6iLOEc6o4XUnjxXVtF9hkv2G8QysxxNI1iOWf29B%2Fu2mYOgsjjHkJa4hZyaIfEc9nLJwV3lgraXupZuFRBfJ5qMBKfVUOPIeeeTA8bzQQJZZ65k7zZM1hUTfK%2BvuA5GJXGqFjnqvOlArrfwawzSKZZ%2B8vL%2FwiP7kM3NfAO5Xp1ROGzD1O3aFVd8qnai4Fj73KxYEa5z7tpaiQjJ6CPuZKY2HormagPTJRsiCsegrHWS9qG4Yg6llEbipQjXHABvpc0WL8Ltklve5Y5OReaqGzp%2BPjJG%2B2h4UMuYSasZbBR7u%2B1p19QFbz4cgMGTXHJz5eyFqORd9i4A5zdSnpJ1LZUz%2FloiKjo%2BgQxSziI4fIuL8QupOiXJY767rBRovXlp9sfcOQi0JmQ3nwhzMLbqicUGOqUB9wzC1NeIQvu9qCtV8z1%2B8YO%2Bg7VqyRDr9IPnGc5IxSnTvjJa5smsFeJaqVvJsIYZEjc%2FDsIXswMWbw%2F9y3AAMLr8liAC0imOuZHELX%2FRw6IdIkBLTGD4l7mysSEwN9twLPeo111UMyLBjRbEqUeUj54LJVi8iy85pnyw%2BkPIOkaSJZCIZPPWLx74HSxd2Af%2FjfuZnAdZOIUPeQzkg76M%2B%2FLrWKIP&X-Amz-Signature=d3dc6a52f479c7695c6abfd05834087bc178628cafa9736b9671e5c4eff6e69e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYPZ7ZF%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC23zW6OmAq0jz%2FvBzqdhc7vh8ODbgeVUjGBHV7SP6r%2BgIgGpjQ12ChGY6iVrhnZugtPLxN7iTqF%2FCLkhnJ85F08jEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0XHgmLJpZ0DUfAXSrcA%2FV9SJWwPNiR7EA6%2BY5syQA4cln23IRTj6vVFJF7aI%2F%2Bzzhz5nhApvtYguMtce%2FLhAp0YjSssEsBTRhrSOJnvNTOCT6ROPCG2n5vN9PU35rSsgpTyvJp2W%2BVKkXBBEwwLop4TUe5Q0skaMYiFXaXLTktwsL08C3Fy%2F0jIdsa596sptzOQ0NaB%2BBV7jvQhXkH%2BQT7ywFyiZ8zQ0aKByyXEBKcJtR59Odn8H0bAbWSi28qH6iLOEc6o4XUnjxXVtF9hkv2G8QysxxNI1iOWf29B%2Fu2mYOgsjjHkJa4hZyaIfEc9nLJwV3lgraXupZuFRBfJ5qMBKfVUOPIeeeTA8bzQQJZZ65k7zZM1hUTfK%2BvuA5GJXGqFjnqvOlArrfwawzSKZZ%2B8vL%2FwiP7kM3NfAO5Xp1ROGzD1O3aFVd8qnai4Fj73KxYEa5z7tpaiQjJ6CPuZKY2HormagPTJRsiCsegrHWS9qG4Yg6llEbipQjXHABvpc0WL8Ltklve5Y5OReaqGzp%2BPjJG%2B2h4UMuYSasZbBR7u%2B1p19QFbz4cgMGTXHJz5eyFqORd9i4A5zdSnpJ1LZUz%2FloiKjo%2BgQxSziI4fIuL8QupOiXJY767rBRovXlp9sfcOQi0JmQ3nwhzMLbqicUGOqUB9wzC1NeIQvu9qCtV8z1%2B8YO%2Bg7VqyRDr9IPnGc5IxSnTvjJa5smsFeJaqVvJsIYZEjc%2FDsIXswMWbw%2F9y3AAMLr8liAC0imOuZHELX%2FRw6IdIkBLTGD4l7mysSEwN9twLPeo111UMyLBjRbEqUeUj54LJVi8iy85pnyw%2BkPIOkaSJZCIZPPWLx74HSxd2Af%2FjfuZnAdZOIUPeQzkg76M%2B%2FLrWKIP&X-Amz-Signature=c7907810e5e07dbd46ae1a197affa9d603ddffc157885c31ae97ec49bb45309e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB46MOQK%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCnyamZNOExxNEcJBXjL1adcxwU6lzLWSMUdl%2FInVLjxgIhAI5ZiQ9LGRODWnreXOhiu1GqBkXZPvwacJEuXAn%2FJl%2F7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6Ynpik74MUwcm8JEq3AOsx3Iy3xQk60povfOBRH8MLGItm7rgsMr43%2BdDP7I88kb4HTuqnZJgSWWYehTyWU5cIq9IL2fNZv3GkzG%2BKy8sg5RREi7PN6bjTT39MQrWtpHBPIaKrQPbMZu1bEesLpGon3dckmuGQDfbbpahgMwdVkmx8%2FLggaIBde31OfyRuRNJLir1ZbhbILMX8%2Fz1v73tN8Sf%2BLF7p1DJLOwTpnf9NARNqrQzzzxo7OQWwntIZjI66Qb1HL4R36Iwcuit63qa5Wo92I4upHs3xOIVNT%2F%2FgvJHwpxdvAjd5utxdzBQXYZoJu8dg61FYismd8Rct44nhAmW135iIxbX4andmj7EX59t7iOs3GwH1%2B7OUpt2sCrnugRCVTz%2FHa4atRr2%2F2kJlCCClbbOsVERuwHuMpqBa0gFDm0Y82M7ESA1l86uhonASNEcLwxQZN0EPhkE4pZASaRZRODtyGPfVsJYmbPxHDVK6EFDPPZpGuOLVanomWnM0D1wCUEZ50TccMlc%2Bp8GI5ZFD8LheigdCpeNViXIX9Nj5owfwhID7SZVko1XQ2%2FgO2Nlh%2BqIwiQ9w21npttsB4W0OjxqPJEaZ6B%2FGb0aLCEJ0bIu609H4tJR%2FBLJ%2FCMYh2Jc%2BWa%2Fd8yLSDCI64nFBjqkAeWe%2F%2B9PZaZ8Gu%2B4jucJNT3ApGprFMveYCV2p8gQTCfhB30jsZtYIts%2BvX67AXY4SV%2Fu7mi6zdD%2FokNbsvCdVfyVGb9mBMgKtsgJvB24P%2FYblr02bU%2FCAU3cGwJDfN29K3M1oU%2FTejmrWkwZ20OsYW9TPbU7sjopOWHdolAzrLKy7hcm1erxgZVK8B0AnBoGaQ4QvTYekAPDKj1fWvQx7IAI8YqZ&X-Amz-Signature=64e07e124b8a95b99db7d342821ad0fdfd6bd57a996ae3203899d42a38bb3c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

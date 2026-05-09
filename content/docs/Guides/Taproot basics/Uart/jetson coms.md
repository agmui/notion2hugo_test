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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVVGVCPH%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIE1NJzZMWrllkdFy0hSQGTym7M2WDtk94XhuqINtdRugAiBvGEXlckavZLPhZDQJVihD8UNRoIgg857TwpNpRkTB0iqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR25R52scmNqk6EwCKtwDtZa5wWQde%2BWpqzf7wUxlohUB3ot1yw8H0d93Qz99uE%2FcCKyMwRv6YXxbVQXheLGrui1tO5mtmsKRCDwQ5C1ns%2FbUX40quI0RJffjVfOeNCz7DUA9rRMBsCI64F8Tf3qGO%2Fgc2QWwDdNptzVYMh%2BxLZgwT9f9BwD6gupQMFsW2v0pVeBssOFrgkUpP4%2FVs2ji05c1LQUYIEysBFc6Z7xXV1DJk1dC%2FB4lJreEdt%2F8vnoizgX2caIxxJbXwKIon9A5orh1p6Db%2FAsw4POO3HjspNtqL%2FyUYyxbBKsGa3lmADeg9bA33cVsxj54Q5Y3SE%2BXOpP%2BQxMVQ3kc8hqt6QOofjqXP%2BZ2w4bWBv7T4UVKv%2F2mz6dljxjNTrCrhAeLGlHWhFVTv1u1nLgCKK7oI5KWnsIQK44kS6DKO9ijXFMrwzZqhFluq0qASwtVPX1NClzKH26c8n1C%2Bw3QQrGxDsaL%2FUuG2eSgCP%2B0JDUlXPblF96TcFqh%2FoXJ8Dhk4Yre0l7CCuppkZe0yMtiNQDGc1sAo%2B5%2BI0ZnqjKhhNhdn2rpZrFsLE4yaNwFekOiHnHBnrJXVHkEVe2LI9Mnr6mKnAu%2BMQsCMR8626rhR9kMakRoLVYZ9bTtIb8kbcq%2B37sw%2B7H6zwY6pgFbpx9vDP752coTmRGJo4CTpitEtXsdv3Zeq3%2F05jQ3vaf7BYIm7YWe7FDbGT9PSZZttV2tcc%2F1htOU%2BIVHeC83Z3owURPm2cwFkt0vLMkhxeDUGYKElQDLitvCpL8tdqR6KpgfKUJN4rm3evojrtaAnKLuBbQcfIIQQeLnipq5HkXL9LBdvwHN%2FGXxMImJhAV%2BUYCwrsUQGOggXgpDxVZ4s4cK%2FQ2u&X-Amz-Signature=f860d8bb3a2286681b55c5d6e55914ac603f4ea2b3815aa9d9bac41129aa10ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIL5RYDQ%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIDfmYgKs9ZLgnbIjII2Sg9TEUm%2B1v%2FmwmEhib8k9qhC5AiAwDSssUVPy7qagZTQtt3jeaUJg%2FyjPoWYDTurZgn1T6CqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8jxFNzqyd6AAe%2FQpKtwDdsTJFC7535HUvlneRxhmzBOmCAtxBRFRufANiIEIWNui4dqkcodgmy5C9jmzJFNGc5a%2FdAHEO6SuOEmmN%2FzWGuo3rPJe5jj3a2dOrbQZtgzZZGS%2BAVF0HjCIpBqzrNHbNbTijcumcUpKy3SwC5UDcpr3yv8orK1cfTQulw5vOElo2syh%2FA0vOMdkLvIagxryKB8OcL6KW56xUACeCXuZK%2FlFdiMcgSbyAkGQ2cNjrQ3UPysEXD1bYqWyrz0NMijeLcHIGoMmJm%2BNeUxM%2FtuD%2BTcovDWznTOAvzYDUkg6bgcGGdi%2FOPz04H1duB6f4F9C50SaE%2BoySpKnh8xviz7id3tqm77KVegWWB8QHaWoZrW8g%2FmF8mCl0uqhc0F9S%2BCo4ZaLOQejqkEi6X1p3oMDaq6VWNg5vyeea%2BySrrRrGPSYe0CRnAvc3TwM%2FRGnmsMWrQ0XXgV3hJTGVi%2BMwOF3EYKLnGk6dmRsOHi9D0erGvEbYI9bbY%2BJW%2FjX43MmtgdTVqouGCWwoSq%2BM3zNG%2FpEfz1xuC8O6xH7epr6sRaAp4vQ1KW8%2BOI1aZYazIFp0gj4Bq9V%2FgF%2BAIfGsf3MvZgpxyfrA7JSvWaCea%2FutR%2FspRZHztHXsyB0t9%2FFb7wws7H6zwY6pgEhXD7zFXrsIbh9mJRcSLWOK3D7tuC4NNK%2B4raiugP%2Fq6M7OMAu8%2BMMD0eUfPL2lzCTD8T%2BuvQnfsrMt%2FSu2FWoS9ROJ7Lxm7okGILDZvtEn9Nc21G1v878j8oWxXyy9q%2FsZfbBOAg%2B%2BuizjC2Wlo3xSB%2BRqqpMT40LQQReSto%2FABxN4uwGG2L70wa6uQDAOu2IfzL6Jnyox24%2BV1JTyFMEhYznYMhw&X-Amz-Signature=1fab974998fe46eb824896da40e4519b0e7534d6740b753b80e7887b088e7066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W723VJZI%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCxUfdbKrqL0WRwTgtd38AFSZ6tA2KLUa8V%2Fyt7J9BSjgIhAIA%2FStUdYpQao67hnfJEzl5Zkw7RWkGWbM96XqGHiDx8KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQhilNP0RnUfDQ7uoq3AORqGAs77d%2FZQKzaGXQ3UvmSzWoFtl1RiNSZCPIR9RKkERXtBUEno4xN%2BotRN%2BC%2Bf%2F%2FhmjRHfftgZppDLwK%2BdO3A0yBJ4kgF7cOfXeN0tPktnZHCH9CEBx8CxFkaZD8hvTZsmZ9YWH29Kw7MXtaKGRnknbr%2B4SK0xdiywQk3pxG4HyeCHq36DzRpqjrrTtg4IVETlyNWLHrWKd0Y7og08cXQ0P3WenloZDg3JhBdu2pyzv8Ih2o4OUNAbypxYYnaiqnEb2GnAeY4%2BGrXryjFZkLVPmStQG1nMjtvA6sxTMcTt1dIYKROLmjAW4jMP4QfqG6zY7KGQYhla2jT%2FVpE3%2Fy7yElmVg4IRQOPkU6GnlqUlooQUx%2BKfEvXmurPV%2FiX0xKfw0ehBY5MET%2BgY2RhKEChtxntSMnQclwZa2ugC7f2QBGLrFP92bL4RKegg05Cpqt4F8axgY2h4KTuWvQWbGwxX6xLzqJJ0yKlyXyKvrlkMgDlKFA7Oryn2Bld2vswY502XO3cn0gPN5zllYsFZJ8u321bSh2rqPeUgnl3DtYpx%2FiHYUA31987fyWM7%2Fl%2BNr3E%2BiisET%2F6WbUndAlpnVgh20x8Qx9y%2BG6t8fzkvQMQVnjyGrGgUB1OYMdwzCJs%2FrPBjqkARPi4W6%2BR5BJKhIsleiBr%2F9jaKNbE1W7tYHfXTd9l1eu1qyue3LaqS%2FnYDbLDW6%2B8vrZI2p3K0bLXNqQdoG%2Fs0MQFwtDZ2IWT2mF5otnCA%2BubxdanvHPlgNEGU8BRXa3xT8rak8Y1w0b%2BbPY9rQOgkYSKVvKztoH%2FRTUsM%2BU94l6expON6eby6ow8Np7kqcIyQn%2FOOScSV32EEwlBBvqdeXlcN0S&X-Amz-Signature=59c45e227688bb520c76063315d138e4e1c603ec5c2bd8d984586d7578f63a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W723VJZI%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCxUfdbKrqL0WRwTgtd38AFSZ6tA2KLUa8V%2Fyt7J9BSjgIhAIA%2FStUdYpQao67hnfJEzl5Zkw7RWkGWbM96XqGHiDx8KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQhilNP0RnUfDQ7uoq3AORqGAs77d%2FZQKzaGXQ3UvmSzWoFtl1RiNSZCPIR9RKkERXtBUEno4xN%2BotRN%2BC%2Bf%2F%2FhmjRHfftgZppDLwK%2BdO3A0yBJ4kgF7cOfXeN0tPktnZHCH9CEBx8CxFkaZD8hvTZsmZ9YWH29Kw7MXtaKGRnknbr%2B4SK0xdiywQk3pxG4HyeCHq36DzRpqjrrTtg4IVETlyNWLHrWKd0Y7og08cXQ0P3WenloZDg3JhBdu2pyzv8Ih2o4OUNAbypxYYnaiqnEb2GnAeY4%2BGrXryjFZkLVPmStQG1nMjtvA6sxTMcTt1dIYKROLmjAW4jMP4QfqG6zY7KGQYhla2jT%2FVpE3%2Fy7yElmVg4IRQOPkU6GnlqUlooQUx%2BKfEvXmurPV%2FiX0xKfw0ehBY5MET%2BgY2RhKEChtxntSMnQclwZa2ugC7f2QBGLrFP92bL4RKegg05Cpqt4F8axgY2h4KTuWvQWbGwxX6xLzqJJ0yKlyXyKvrlkMgDlKFA7Oryn2Bld2vswY502XO3cn0gPN5zllYsFZJ8u321bSh2rqPeUgnl3DtYpx%2FiHYUA31987fyWM7%2Fl%2BNr3E%2BiisET%2F6WbUndAlpnVgh20x8Qx9y%2BG6t8fzkvQMQVnjyGrGgUB1OYMdwzCJs%2FrPBjqkARPi4W6%2BR5BJKhIsleiBr%2F9jaKNbE1W7tYHfXTd9l1eu1qyue3LaqS%2FnYDbLDW6%2B8vrZI2p3K0bLXNqQdoG%2Fs0MQFwtDZ2IWT2mF5otnCA%2BubxdanvHPlgNEGU8BRXa3xT8rak8Y1w0b%2BbPY9rQOgkYSKVvKztoH%2FRTUsM%2BU94l6expON6eby6ow8Np7kqcIyQn%2FOOScSV32EEwlBBvqdeXlcN0S&X-Amz-Signature=08ccfc4a9083b500c2de3a6b0360b29b074703304dd4cc4ce1e557a5eb7552e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIL5RYDQ%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIDfmYgKs9ZLgnbIjII2Sg9TEUm%2B1v%2FmwmEhib8k9qhC5AiAwDSssUVPy7qagZTQtt3jeaUJg%2FyjPoWYDTurZgn1T6CqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8jxFNzqyd6AAe%2FQpKtwDdsTJFC7535HUvlneRxhmzBOmCAtxBRFRufANiIEIWNui4dqkcodgmy5C9jmzJFNGc5a%2FdAHEO6SuOEmmN%2FzWGuo3rPJe5jj3a2dOrbQZtgzZZGS%2BAVF0HjCIpBqzrNHbNbTijcumcUpKy3SwC5UDcpr3yv8orK1cfTQulw5vOElo2syh%2FA0vOMdkLvIagxryKB8OcL6KW56xUACeCXuZK%2FlFdiMcgSbyAkGQ2cNjrQ3UPysEXD1bYqWyrz0NMijeLcHIGoMmJm%2BNeUxM%2FtuD%2BTcovDWznTOAvzYDUkg6bgcGGdi%2FOPz04H1duB6f4F9C50SaE%2BoySpKnh8xviz7id3tqm77KVegWWB8QHaWoZrW8g%2FmF8mCl0uqhc0F9S%2BCo4ZaLOQejqkEi6X1p3oMDaq6VWNg5vyeea%2BySrrRrGPSYe0CRnAvc3TwM%2FRGnmsMWrQ0XXgV3hJTGVi%2BMwOF3EYKLnGk6dmRsOHi9D0erGvEbYI9bbY%2BJW%2FjX43MmtgdTVqouGCWwoSq%2BM3zNG%2FpEfz1xuC8O6xH7epr6sRaAp4vQ1KW8%2BOI1aZYazIFp0gj4Bq9V%2FgF%2BAIfGsf3MvZgpxyfrA7JSvWaCea%2FutR%2FspRZHztHXsyB0t9%2FFb7wws7H6zwY6pgEhXD7zFXrsIbh9mJRcSLWOK3D7tuC4NNK%2B4raiugP%2Fq6M7OMAu8%2BMMD0eUfPL2lzCTD8T%2BuvQnfsrMt%2FSu2FWoS9ROJ7Lxm7okGILDZvtEn9Nc21G1v878j8oWxXyy9q%2FsZfbBOAg%2B%2BuizjC2Wlo3xSB%2BRqqpMT40LQQReSto%2FABxN4uwGG2L70wa6uQDAOu2IfzL6Jnyox24%2BV1JTyFMEhYznYMhw&X-Amz-Signature=32bc1079e25ec98670c60f1275aaff8e58a38fe97f685626bf6a7f1a3890f526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIL5RYDQ%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIDfmYgKs9ZLgnbIjII2Sg9TEUm%2B1v%2FmwmEhib8k9qhC5AiAwDSssUVPy7qagZTQtt3jeaUJg%2FyjPoWYDTurZgn1T6CqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8jxFNzqyd6AAe%2FQpKtwDdsTJFC7535HUvlneRxhmzBOmCAtxBRFRufANiIEIWNui4dqkcodgmy5C9jmzJFNGc5a%2FdAHEO6SuOEmmN%2FzWGuo3rPJe5jj3a2dOrbQZtgzZZGS%2BAVF0HjCIpBqzrNHbNbTijcumcUpKy3SwC5UDcpr3yv8orK1cfTQulw5vOElo2syh%2FA0vOMdkLvIagxryKB8OcL6KW56xUACeCXuZK%2FlFdiMcgSbyAkGQ2cNjrQ3UPysEXD1bYqWyrz0NMijeLcHIGoMmJm%2BNeUxM%2FtuD%2BTcovDWznTOAvzYDUkg6bgcGGdi%2FOPz04H1duB6f4F9C50SaE%2BoySpKnh8xviz7id3tqm77KVegWWB8QHaWoZrW8g%2FmF8mCl0uqhc0F9S%2BCo4ZaLOQejqkEi6X1p3oMDaq6VWNg5vyeea%2BySrrRrGPSYe0CRnAvc3TwM%2FRGnmsMWrQ0XXgV3hJTGVi%2BMwOF3EYKLnGk6dmRsOHi9D0erGvEbYI9bbY%2BJW%2FjX43MmtgdTVqouGCWwoSq%2BM3zNG%2FpEfz1xuC8O6xH7epr6sRaAp4vQ1KW8%2BOI1aZYazIFp0gj4Bq9V%2FgF%2BAIfGsf3MvZgpxyfrA7JSvWaCea%2FutR%2FspRZHztHXsyB0t9%2FFb7wws7H6zwY6pgEhXD7zFXrsIbh9mJRcSLWOK3D7tuC4NNK%2B4raiugP%2Fq6M7OMAu8%2BMMD0eUfPL2lzCTD8T%2BuvQnfsrMt%2FSu2FWoS9ROJ7Lxm7okGILDZvtEn9Nc21G1v878j8oWxXyy9q%2FsZfbBOAg%2B%2BuizjC2Wlo3xSB%2BRqqpMT40LQQReSto%2FABxN4uwGG2L70wa6uQDAOu2IfzL6Jnyox24%2BV1JTyFMEhYznYMhw&X-Amz-Signature=3be17514736021137b2e7f16b3cd3b9003af1571e115b59b95a9c7c3175fc6ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NMPILDQ%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDz9BIqvMlBJQ1mdVwoOJA7orPcAWGHmyXAaqyEo%2FVnMAIhAOQD4buYxVKq1%2BBv9z4KOJL6tzajgpnXKgELvUuC5RJQKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsMXX%2B2svQpfG38GAq3AMyGzQX3%2BDr%2FViPy8cmuZIgczH4qq%2BCSOu3KqR7Jd%2Fmcka56fP3X8RLDK6C3EseHNm5BDv1fm94iSbhykwKGAUtDfXJTiVGx2ja85Asz79W4PH9PyjC1XV5SCg%2F3xsvgFIwA9Ulj1rWZGDl4bfIxfS3lTd%2FZQZ6AJEzkZIlw3QUpdB%2BkDBrM%2BhtQC5UARAhiImuRfQkJwCcDRfuWwoydl62OTzcsCGtdm%2FXMEKx%2F4VFXhRgnU0JdwktfOfwkU5at0n1iEbF557j8juVCr5yYr1jVx8e%2FFgegx6vmg9WHpP6d%2F8vHP4Hcpea1NO%2Bnl37RuYUzjnGbfqd%2Fb1U0YwJRbT%2FqZxYSW37c45meOap3YynTftVNtldVe9BMtkC6XrwX3ziLgwIljC%2FgFy6Y0im0IahWJ9FRAF58K1%2FcxmtuaQS3EenERtJV%2BEH%2FUX6J9ZsykC%2Bxjs1%2Fe5lMsh25qQijqJ1RbU4ngCjBkR%2FFig3ZjTHMoZD1nC1ovToJjkg3AuEVXrCaPmHzISgdqDkQYbiVfJUP5Ti9FEwfB1rD837RSm9uDXiw7zd1avvtJe3hw%2FbGu9oAYAed71NroaIFHz%2F6tyPQrcoCaWBHGHLwrmvrgGlXZbNocYp%2B7HEI2%2FfDDCytPrPBjqkAadGkCzbZhfT56x8wxNfoUTgVUOUi6GMSubFtQtgv4YGI2RkWoeF53xTy93EL1JtnWhsN7diQOy3pynmMY3LdF4RIqPEhC8NhU2cJUne1JYIfQkdoO%2BddxyK33yEYpGi8ebzurC6AlD3QmAlj7sS77hiEupkA1UbybIf3FFLJ0zj6x1hbc8hUutKMJQRwQXU66WqsFArPzZTGcSKszFsWOSMd6Bn&X-Amz-Signature=0b7f05ab1b0c11b0051ac8bd5ffc384983103fde807866db96cff074f4591ba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAZKK5GX%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCwG9OiUzwbPgZva6oLo8hGNPYA3XYhLDqVS7q8ctISRAIgVljKw5y%2BY153WbQs%2BBHpe4Pu9JdH%2FpOdiMLiIFrSz5kqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BC79FiLKHEx6zOkCrcA5UQqvZAEwrLSF%2FympenmT%2FQw6O4fkjBcCaZCpuAoC%2B8W1lGdvyySy0Hly3TbJf6KCp%2Biet4DsPu0LVVIOG8qDqKpS0foF4yfImNB8TZ1MN4dgRuZLZALpcY1X8GzUo3lpe4%2B4GuQdOtYz%2FZ5s2S%2FwDMp%2BGKvzlTcHau7PuSBDxOz75j%2BDLQZKC3%2B5tQXFx7fLyOSUnmBwt7Sg1vt3Lc1og0Swzm5GA%2B4MvHQxz2oH5dJgIBNuT%2FAg2KnV1o6FVeAVtianKhIoHjCz3AfMwLMidNcu7OnBkCb0rNJsXHmAwiTXeESIVSvPrHXxWotyy%2FVJ9XTLhQJXyvjERf3wknNzydNYzLWjAJQ9%2BhgvVXp1FiX1EecWJuCPK%2BsRvDGr4hDmXOe%2Fl7TSZWEh9ruV33vhtcQm9a97JstlCDaJMGmWKYK%2FVqTXF1gD1VAIEAFC65e%2BU5kTq9i5tn%2BZX1Y%2F5ygxZrub2LL8KatBBDuxOB%2FHQreaTHdMehUWSHWnUw3JiPw3r3W%2BfeQh%2BrlQFZh1g6SH6JxttQ3fxFBN7nJyef2wEA%2B%2Flv0KTL0y8UvepR1Wa6WwIrDvbNJXzoHknm%2BJVAh5wQUZ7V%2BbQ8udhOuujLYIkTdl4ipiPwRiyQUn7kMLmIqdQGOqUBDmMroBwhGBFckvAkcgKv1vPII%2FTNCbNbbtYfl6uvcPesCBp7yXUYSVWz%2BCnjJudAv3Bk7mopRm9oCMrXgpo%2BhfWqAmJ%2BsyK6lwPnTH8ry5NOL83jGP77rubO6Z0n2epSIg6HplNz%2FtsWZme9Kn4hwVjbWie7So0La1lOFz%2BX1Wi1fhcoRrlE4DjlsnoZAL64SUAeJpK28AvKkVY7n77dKEsqsHCt&X-Amz-Signature=c026aa67c49ac271897080893ea426288f337b8ee2be9e6283ee8ccd535ccead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TABQEMTG%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD%2BgEioB7h7zW6VeMYwrNXtqf%2BoBN%2BwB7WFDkURmq0%2BCQIhALKmJBMPdhuHTzn3qENPy4O2IcRoc80fTeyXnoK%2BXz4QKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU75qhx8Pwz3CLe6oq3APer6OUDTO4Cou8QfARiKas3f1m6Vhd4mwthXbv%2BhixL905jxg9arQzGqN1O7bJwypm2%2F8WYBgXwzxHcjjCI86n0i7gpdz5HZilg3AMmoJ3zp4wsI82R%2BUqed%2FwJ7V8gMZVt%2BONce4RjA%2Fy3b%2BCL5tAqFDu42THgqKB1fwh1W%2FuplqNaMiA5orVLLJ2%2F24n3W1bLjcolhn%2FpfjtLLkd5zKWunxCuELtCWUj83t8Ypq7BCxSeLv3zC9x7Jx9dfQx2cXxh08KukhoDl4Y6PHJU1Sr1FX%2BUkxlLN1wTaOJId9MTDxo1hn694bclfMQTAqJl3hnX%2BDrJZzTc93xIYYq%2FfO4zT57E1kuJcrgT%2FAdhKjCaPycQV4ASszbCuXCnWmZWHO5a4jQHly2CrK9rt%2BHClzXz%2BBYzCm6p7ZW3sWESh5Bh2D%2Bic8aIU%2BO0KnQZ%2BqM9voEcRMoKJFxhYRXV9eMhScIPEeQlQprY14K0QvcNO91xzbpecxNaJmqZRaR%2F8WrI8gCFtERryFyEuPX%2Bd4Nnm773Ni0%2Fr08WnJA4FXCaLiw8omoe0osusFl3yac6RH5E2YYOFR%2B%2BSOPRLWfU7FeDkkp9il3Bw%2FqTy%2B86ww2RT4F7Bz9Ep0NWcxp4l1lxDDOhanUBjqkAehaMXx7nfsrgk1BGvz%2FlG8wD2CdtcIvIlaZbbRL74xoRFz6UdwJaQQG7VQEBg78Q5GkLJa6KUT5eIGhpi%2Feay5zZPuYu3SSF7H3wNOFYL5yeGfBmDCp0CT5j8rgTExzrDm0Ppv8uwdJVMqJFZ1jymn2F6VKE8DwQ3kfjoMDq2woGQ0PNPdY3NypMiLQHGMweGwqagGboy23M8HTPS5njTY1pTGq&X-Amz-Signature=90c509b00fd7c8e07c5e158d4a39ef95069ca5da68d67ce6f621b4c448ae5e89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JIW27KZ%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDHoRHG7tWWWYda%2FIGg%2BvSP4MQrqtB1BeIbEdBU6%2BcnbAIhANqipLHKpDXLaasMvasN4aCzbVy7PlCxuAqpc0Z%2BJRavKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD%2FriJtZGrxFQjAXAq3AMWv%2FePGKMGUGw2Wpydys4pvolf8vvinl50Ras5mOuaz3olCIMVnIhqX22ZQ8Imkwf0NQrAzu9OUviPhJxBJaNqjKwC4OMDlMsYWOiYMJkXyZ9nyYxkOSLTzDDlOed0z30V%2Bgk5jT%2BcQqkaRsXkuWwXEzi7DvmbfhDnq%2Fe04SBSv2WnWWNNUgfWssGSIlwFJQyxL1G6kWLgco%2F01qaX3ZSU494NiTc0rTPCGPagQe6mkplIKm5aMsnbcCyVWJSB%2B7GPePHYg3HJqGjPuiRgCoAGm3r%2Fcrq8lXMRZzaPRPig049P9yHNVUPV4UU7uqUU0Dzf4u6gDouOLiCs6g9XnutDvfgUIDBDlfnoALbu%2BHp7w59yklCKzarExVuBbMNvke2T7AiWABscIMllP2qy9gR69e%2BqDft9x1XF75fgcoeccx5vZ7ohT7L8BIYH0PJivp5bgeWqkXo4EtHyJYl%2FvsgiB7edzwTrdJnnxY01dN%2F%2B6uVKDKF9b%2Bg0AsuVWyM4BYY9bi2i4UOxw2xO4GOM1%2BI1Hm4YTy6%2Bkxz8gd1%2FQrYzSsjsMrQ4SaLks23iUCc6%2FoYhC4DvlqMuiSQ%2Bsb7iFMKRZk55OOF2YlwN7%2BfOcWsLy5scFFSU82vra%2F352DC1h6nUBjqkAZ0DPJNH8U9Ps5JvQLygYhqhEDKLiKKLPG%2BKA%2BFG%2F8iO5QZRZDGJrh0qCAC9CK67kgZw4xIvgIUFBRTdjvH9bn%2FLjhDe%2F7SikY6LjTMhPbTB58nwxknlRiI13LKqm%2FtM5dm9hHkp1QTTypCwsiYzwtj4xKOi6DwN7cosTpizDPi3%2FbArqWTbNTOzuFAuSiPMBtvRhRxSWtzzCGifWWS%2B%2Fagf4Kq5&X-Amz-Signature=c9a4544bf0df00289a30b8ee28beed338d8ad354e294ff7ddbfe6272e84e99bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JIW27KZ%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDHoRHG7tWWWYda%2FIGg%2BvSP4MQrqtB1BeIbEdBU6%2BcnbAIhANqipLHKpDXLaasMvasN4aCzbVy7PlCxuAqpc0Z%2BJRavKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD%2FriJtZGrxFQjAXAq3AMWv%2FePGKMGUGw2Wpydys4pvolf8vvinl50Ras5mOuaz3olCIMVnIhqX22ZQ8Imkwf0NQrAzu9OUviPhJxBJaNqjKwC4OMDlMsYWOiYMJkXyZ9nyYxkOSLTzDDlOed0z30V%2Bgk5jT%2BcQqkaRsXkuWwXEzi7DvmbfhDnq%2Fe04SBSv2WnWWNNUgfWssGSIlwFJQyxL1G6kWLgco%2F01qaX3ZSU494NiTc0rTPCGPagQe6mkplIKm5aMsnbcCyVWJSB%2B7GPePHYg3HJqGjPuiRgCoAGm3r%2Fcrq8lXMRZzaPRPig049P9yHNVUPV4UU7uqUU0Dzf4u6gDouOLiCs6g9XnutDvfgUIDBDlfnoALbu%2BHp7w59yklCKzarExVuBbMNvke2T7AiWABscIMllP2qy9gR69e%2BqDft9x1XF75fgcoeccx5vZ7ohT7L8BIYH0PJivp5bgeWqkXo4EtHyJYl%2FvsgiB7edzwTrdJnnxY01dN%2F%2B6uVKDKF9b%2Bg0AsuVWyM4BYY9bi2i4UOxw2xO4GOM1%2BI1Hm4YTy6%2Bkxz8gd1%2FQrYzSsjsMrQ4SaLks23iUCc6%2FoYhC4DvlqMuiSQ%2Bsb7iFMKRZk55OOF2YlwN7%2BfOcWsLy5scFFSU82vra%2F352DC1h6nUBjqkAZ0DPJNH8U9Ps5JvQLygYhqhEDKLiKKLPG%2BKA%2BFG%2F8iO5QZRZDGJrh0qCAC9CK67kgZw4xIvgIUFBRTdjvH9bn%2FLjhDe%2F7SikY6LjTMhPbTB58nwxknlRiI13LKqm%2FtM5dm9hHkp1QTTypCwsiYzwtj4xKOi6DwN7cosTpizDPi3%2FbArqWTbNTOzuFAuSiPMBtvRhRxSWtzzCGifWWS%2B%2Fagf4Kq5&X-Amz-Signature=5862abe28d09d5d71930bb2c2bfcebff1116b9259761937927537a4970345f21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TABQEMTG%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD%2BgEioB7h7zW6VeMYwrNXtqf%2BoBN%2BwB7WFDkURmq0%2BCQIhALKmJBMPdhuHTzn3qENPy4O2IcRoc80fTeyXnoK%2BXz4QKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU75qhx8Pwz3CLe6oq3APer6OUDTO4Cou8QfARiKas3f1m6Vhd4mwthXbv%2BhixL905jxg9arQzGqN1O7bJwypm2%2F8WYBgXwzxHcjjCI86n0i7gpdz5HZilg3AMmoJ3zp4wsI82R%2BUqed%2FwJ7V8gMZVt%2BONce4RjA%2Fy3b%2BCL5tAqFDu42THgqKB1fwh1W%2FuplqNaMiA5orVLLJ2%2F24n3W1bLjcolhn%2FpfjtLLkd5zKWunxCuELtCWUj83t8Ypq7BCxSeLv3zC9x7Jx9dfQx2cXxh08KukhoDl4Y6PHJU1Sr1FX%2BUkxlLN1wTaOJId9MTDxo1hn694bclfMQTAqJl3hnX%2BDrJZzTc93xIYYq%2FfO4zT57E1kuJcrgT%2FAdhKjCaPycQV4ASszbCuXCnWmZWHO5a4jQHly2CrK9rt%2BHClzXz%2BBYzCm6p7ZW3sWESh5Bh2D%2Bic8aIU%2BO0KnQZ%2BqM9voEcRMoKJFxhYRXV9eMhScIPEeQlQprY14K0QvcNO91xzbpecxNaJmqZRaR%2F8WrI8gCFtERryFyEuPX%2Bd4Nnm773Ni0%2Fr08WnJA4FXCaLiw8omoe0osusFl3yac6RH5E2YYOFR%2B%2BSOPRLWfU7FeDkkp9il3Bw%2FqTy%2B86ww2RT4F7Bz9Ep0NWcxp4l1lxDDOhanUBjqkAehaMXx7nfsrgk1BGvz%2FlG8wD2CdtcIvIlaZbbRL74xoRFz6UdwJaQQG7VQEBg78Q5GkLJa6KUT5eIGhpi%2Feay5zZPuYu3SSF7H3wNOFYL5yeGfBmDCp0CT5j8rgTExzrDm0Ppv8uwdJVMqJFZ1jymn2F6VKE8DwQ3kfjoMDq2woGQ0PNPdY3NypMiLQHGMweGwqagGboy23M8HTPS5njTY1pTGq&X-Amz-Signature=f39d5cc79bcc20d27e6bb2eedb75200424abf7ceb288d1b716c7a385f313a53c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TABQEMTG%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD%2BgEioB7h7zW6VeMYwrNXtqf%2BoBN%2BwB7WFDkURmq0%2BCQIhALKmJBMPdhuHTzn3qENPy4O2IcRoc80fTeyXnoK%2BXz4QKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU75qhx8Pwz3CLe6oq3APer6OUDTO4Cou8QfARiKas3f1m6Vhd4mwthXbv%2BhixL905jxg9arQzGqN1O7bJwypm2%2F8WYBgXwzxHcjjCI86n0i7gpdz5HZilg3AMmoJ3zp4wsI82R%2BUqed%2FwJ7V8gMZVt%2BONce4RjA%2Fy3b%2BCL5tAqFDu42THgqKB1fwh1W%2FuplqNaMiA5orVLLJ2%2F24n3W1bLjcolhn%2FpfjtLLkd5zKWunxCuELtCWUj83t8Ypq7BCxSeLv3zC9x7Jx9dfQx2cXxh08KukhoDl4Y6PHJU1Sr1FX%2BUkxlLN1wTaOJId9MTDxo1hn694bclfMQTAqJl3hnX%2BDrJZzTc93xIYYq%2FfO4zT57E1kuJcrgT%2FAdhKjCaPycQV4ASszbCuXCnWmZWHO5a4jQHly2CrK9rt%2BHClzXz%2BBYzCm6p7ZW3sWESh5Bh2D%2Bic8aIU%2BO0KnQZ%2BqM9voEcRMoKJFxhYRXV9eMhScIPEeQlQprY14K0QvcNO91xzbpecxNaJmqZRaR%2F8WrI8gCFtERryFyEuPX%2Bd4Nnm773Ni0%2Fr08WnJA4FXCaLiw8omoe0osusFl3yac6RH5E2YYOFR%2B%2BSOPRLWfU7FeDkkp9il3Bw%2FqTy%2B86ww2RT4F7Bz9Ep0NWcxp4l1lxDDOhanUBjqkAehaMXx7nfsrgk1BGvz%2FlG8wD2CdtcIvIlaZbbRL74xoRFz6UdwJaQQG7VQEBg78Q5GkLJa6KUT5eIGhpi%2Feay5zZPuYu3SSF7H3wNOFYL5yeGfBmDCp0CT5j8rgTExzrDm0Ppv8uwdJVMqJFZ1jymn2F6VKE8DwQ3kfjoMDq2woGQ0PNPdY3NypMiLQHGMweGwqagGboy23M8HTPS5njTY1pTGq&X-Amz-Signature=343e334ff80bf29bd7c490a3a6d5a0f7bff2300da49239a438642329d501e38c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BXPKTWR%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCT6Fl2ZW%2Bf0gOR4eeeaRqpai2lyk9W%2B5escz8aB4%2B%2FYAIhALlZfAl1BBG%2B9Gz0nN90U6jMmkD3mk%2Fvo5QRvXxVc3nuKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQQ6cxGBKgLw3ACN4q3AMjZH7pKVgipWMOTYmww74Hb%2BX%2B0OZBxhA%2BKPONMwO0PoaVgn3s%2BrgsUiFqc0vCowx8sVgduYPtpYQwqWfieyNU63v%2FwryruzQBdQPVP%2FrVidWlUU7WaKnRTqZ8NQ4FhC%2FIxHEHjE9Jv4JGYKxmN5IaPCq2qRxpYcRBkq8zxDbrKdRewvfua1Iir%2BKWTlWHp4PsqXVH%2Bu2l9CotpHLUjiJf3iA97Qgq3qZ6055vZgSbAhnOBWWpbjYOg8RWSEyJJRzPrDlLVMoa2dkPIVVGuTK8fVkHjnSiuA1iHj3T1Vduo86cEawJuMMRlY%2BkfAh%2FvGEOs3ef5RhaZ81MOV762IOpnetQsNq8WRnJs2DKaaZrQKuUBFRSKL0p1q9oycpa6u8lN5IufrFtqFjUHxxC0GKCBaFnbOWbDuWiWn%2FSQRQjHtJRI%2Fqqiol%2BXO4gY9QBY2XZVOIHW7HkWL0xAXdEYmQH9B7iE8IqjEFl%2BcLK9egZB9CCF%2F0RIbSRC8H0BKYMsNaEe7TaVS3%2Bg8mMj5HDBIHUOGseuEXrndcsetXKLxj%2BLWBqJnrm3UbddsKvNFt0aBey8VTV84SltUJVOa97fiQBFSY2c4VB94v3g2xigvlxwMpY%2By%2BVpwLsgVveujCohanUBjqkAX0fPd74VvMIYY0fKzUXpNAQ4KjMdEQrovH84%2FDsUAnvsOUELRr0RMKUWPTSCwzVoQd7nO7MwfdpieVhiXiqAn0rIVBp6iicPhMDtZ3WRlz%2B3vbcY%2FuEM3V5GLpUJO57clmhywu%2F8Lm5OIV0eHlts6ldTbbAyCCO9xRYtMXhMIrpqQCBwrBMR02bPGLNxqgiKmi62lEwGxVbfS9cCvXYMZUDa3xQ&X-Amz-Signature=f31ed9a1d3d9bb77f5ec0ec731deb10c0c1388feb0633dd12fab9b5057f03018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJDTHGQ6%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrmMaTT2yH%2B95dbv3DMZvev1jeYvaJzj95g1rKXDDe1gIgS2MTJQi1eFf9oHH8bWX7deJZ9tpeGhgz%2F0semWmlr%2BQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIDgzDWxI48wSJ%2BK%2FyrcA1osAYtvn8YdEi7ROv0dzm0QclUV8%2FKFM11JRNfKPTP3QKzm6DNx6eu7zDBIO4m1QaOXXagDUmq4V6mQKUy%2BZgLimrLBRGcexbzAl5T%2FE4ThqJjMijgblXy0F2agyQasFYXqyEWfSQ6U0Wf4PbaQGr%2Fj3uMtqUOPy5OWQ0YYU5cnNPM9hjAk3zuahyDk2hh8OZOPBKhtsVy%2FzxawV7pCOVm%2BruM%2B4Qi4SY6%2FvHZUzbUsaQKFnWUlGFROryuLgsq0V2J8KWqlZ9FJ6xhzzrx%2Fb%2F9P9QDY%2BrTJpO4NFObbruLnSDMzbnk0DuDKnbBXwsFudDL6rZVCeDtp4fAAgXXmzqpIwqtLd19FrjS%2Bl51QQ5OP3zzcLQQkwyVD5Og1ZRPNN1pcNKYrJdg1B%2BuhWMmvxohO93o1auprwPgJxwi%2FXX8N7%2FsAyCd0AXNkdVUzRpvCYR6AjTiv95VniQl5hkduwWZKHumLVxWMn745hvyPo62iOsQPPPBVsY%2BTDGTYyj0aHcBC5NVmijumk7fEru%2FOPY1kIM5ZbrZt5DlrLRJVzuInb7QXDQ950W%2BnOIClPiC7tsfrb1TM6pk4ynrDeElWBWibdwni7u%2B44uGa7SgiPwzVWUkiqqfdiX9OWkfcMPmzztAGOqUBgb9J0mcnoTi7%2BxrjP51wFaZmgYuiNc6y6QSQx6rTii4TGZcmdeVG1Nihd9aaLJZFDQVgpAQdFxLEDLP%2FTl7kF%2B9pZZHeeBLn9ibfceLqgPuXC1jmLxbKU25XzARJbbYS7QBZ%2Fp8NlyWjoQ6RYjAGhkxMMZU957WIbY7ulfzQvZbW9%2BPTyL0DHJFGnYg79rYHQEys9PsPksGhMcI8%2F5AOZL9jWLkR&X-Amz-Signature=2f51bce202b7132b0f1e029569dc00477ee8a1daa0fb83db7363b59300d551c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQUL73V6%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9RUuiTDZZsvxXZY4t0t2vAcp9upc41kLHMPGw48mkhwIhANzJw1KdFMIDMywnNskJRV1LV69170TL8VM7rzxulcRIKv8DCFoQABoMNjM3NDIzMTgzODA1Igz%2BnSe4OuskCAIwFr4q3AOKbUNAcqDrC7BxJ0ZiNSFTzvPK9pvi%2Fn8ERvgrRJ70%2FjxOFoZluZkTn4jlUckCa6F2Rczfi85LaZtnwuB5%2FKGkUJuJRvZwCLMD9x%2BXXk327SXxjQYmaL7BFQgz1LnCZiGv%2BDFILk%2Bu8hQMzVzhel8oYkvRhcpFgriANGBY%2BvserP0PC4O414xhRIyBYO%2B6ts1GCzkdXNGygMALtnUVAFNIaIln7AFgLZvt2ZbwXz9SfKZcHvU5iB32MwsMWBKOI4ihH2al97iNqF%2Fi4%2B0ADMvKtBo34nQl6f5sLTJuyY%2FH6xCm1Olue9WN38c%2BShM0K87gM6DcJtEmzCSfOehCB5XWC6YlmAaFNSqZJjDO4BTYuCfsG6vdzFr8OaP%2Fu2NrFMvSxdULK6UNZv8MstIZU48yYhH4Nja1CSacbsm2xFzeABTT3eMMHHWrr6K%2BpcP3FPEjhqGkaR3PjuvnEXDhMaXZsJvzralu82R66hNfBumqWd7zVZZHNuyt1ZR467BYx9dd1epp%2BO2TpLvmr2gAnuowF20%2FjIm2zXuDHbeRhIXpLRrpKS6M29e8kYqtegSnWrmwwJ%2F0ijV9zoiNqqSF0cfGKE%2FqKxmCTs8tqcxr%2B%2BlPeUWHbHM67TT%2FNw1vcDD4tM7QBjqkATQPEdR0XOCQvvajr0NgicGKvJTFd%2FxLw56KPqiBWl62OVdgH30qW7l%2FaccJpd%2FePEDwnBv4N9mcpnvfJAAEiG%2FsJALnjSFIH1bakHMlKPWM47LrjlbEgcbz31izWpTg01gMpedJkzSBP4WmzfhqrYa65xpZzRhkXkItTJlVF3uv3f7vCjLFljAJUJUZDVWjrGkei1EuQx9lw3HXHMEZcgDRt1Ix&X-Amz-Signature=43c7519c702a2c7f6ebc5caeecd9b1dfe145e04908fc1671bfa95cf641123b80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5MCABS%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ8la%2F7%2FYRwMqzmB7ezQq4wV8dEX56VnhXGzf468SVwwIhAMqyi6SOkkQRn%2BRoMNdbc6ojNPK4NKzTA%2BjBSW9n8Ng1Kv8DCFoQABoMNjM3NDIzMTgzODA1IgxL9uqgadd4Kse7J5kq3AMbew7GJWRZ0hkH3jKPPbigrm8%2FUiNxBb83v%2BbkndaZjf4CBUJdI8zKRbPIpgRBy5k0a2DemlcQ%2BCj6l14I7cMXKS4ywFm4XnhROtFJyI0%2FA1QaN7I3LpGqYiw2Q3UogIKVSARw6JJ5LudYCbsxJ16izuy96bQjnAHW2eQTqondy%2BEoNvGUyu6UpHBSClK%2BW0YEOyj1OtRBs3MDc0VDiE60rfvDOqDRULzmDc1eF2%2BuH1QO0qqqx43aujb5SUaemjTpffbrca8F4kQQtKgJ34t4qDa%2F4N5kcJ9wtcxTb82JPcFGwHm5vIrRLyUaGnLZFeWHG1qET8gwOJiNzfob4kIOOsl4Obgvy1%2Ft2GyAFKHgxrLgEJ4gY1CtUr3LtPT0I1n%2FdQC5TZgBcRIElLt2Qws5D4d3v2H8Pa64jGNGcbMg8mQ9DxWxohmoTLeGnp36SHaP2TaT4G4Zyz731t5jB8uEpAdqPAcNb%2B55ZbtW%2BGkJ%2FoU7jCxbMsT5sn7Xs9nmz%2FyrOIYS28Agas24qShdWjn19ut3UmkSt9FoxCkuNIKST%2FU61hj0F%2FYq%2FRpr79BbN7fBL5Pgbp%2FCXkwnNu3AYKUdg0yc29jbNAiMkxPCc4Xf5MMkab4XXh9wfBgcUDDZs87QBjqkAcxte4xnVw2SuR8bhChHLHX8gmZD7nrC3Y56%2BJCE1M3SJRupT0Ej60md1nPTtWzqOuhGQouiaMvRUGpIkYo%2FUgRWMRbgH8eujkh5OI%2FCKW996ap6jaoVdm3KYZXQ2SbxkYGN0Cz%2BHRwrXKGDpwuDhM0DQP2qMEaNXArDcyWHGil6%2BBFQNRVW5mjsF6ykGTviKlhQNiEZCjk6ZWbwzmN6bAY4R1fp&X-Amz-Signature=1aea01ba0749689ce6f290b0c44afb95d52da56e5967f136bef10f732ab8a488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5MCABS%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ8la%2F7%2FYRwMqzmB7ezQq4wV8dEX56VnhXGzf468SVwwIhAMqyi6SOkkQRn%2BRoMNdbc6ojNPK4NKzTA%2BjBSW9n8Ng1Kv8DCFoQABoMNjM3NDIzMTgzODA1IgxL9uqgadd4Kse7J5kq3AMbew7GJWRZ0hkH3jKPPbigrm8%2FUiNxBb83v%2BbkndaZjf4CBUJdI8zKRbPIpgRBy5k0a2DemlcQ%2BCj6l14I7cMXKS4ywFm4XnhROtFJyI0%2FA1QaN7I3LpGqYiw2Q3UogIKVSARw6JJ5LudYCbsxJ16izuy96bQjnAHW2eQTqondy%2BEoNvGUyu6UpHBSClK%2BW0YEOyj1OtRBs3MDc0VDiE60rfvDOqDRULzmDc1eF2%2BuH1QO0qqqx43aujb5SUaemjTpffbrca8F4kQQtKgJ34t4qDa%2F4N5kcJ9wtcxTb82JPcFGwHm5vIrRLyUaGnLZFeWHG1qET8gwOJiNzfob4kIOOsl4Obgvy1%2Ft2GyAFKHgxrLgEJ4gY1CtUr3LtPT0I1n%2FdQC5TZgBcRIElLt2Qws5D4d3v2H8Pa64jGNGcbMg8mQ9DxWxohmoTLeGnp36SHaP2TaT4G4Zyz731t5jB8uEpAdqPAcNb%2B55ZbtW%2BGkJ%2FoU7jCxbMsT5sn7Xs9nmz%2FyrOIYS28Agas24qShdWjn19ut3UmkSt9FoxCkuNIKST%2FU61hj0F%2FYq%2FRpr79BbN7fBL5Pgbp%2FCXkwnNu3AYKUdg0yc29jbNAiMkxPCc4Xf5MMkab4XXh9wfBgcUDDZs87QBjqkAcxte4xnVw2SuR8bhChHLHX8gmZD7nrC3Y56%2BJCE1M3SJRupT0Ej60md1nPTtWzqOuhGQouiaMvRUGpIkYo%2FUgRWMRbgH8eujkh5OI%2FCKW996ap6jaoVdm3KYZXQ2SbxkYGN0Cz%2BHRwrXKGDpwuDhM0DQP2qMEaNXArDcyWHGil6%2BBFQNRVW5mjsF6ykGTviKlhQNiEZCjk6ZWbwzmN6bAY4R1fp&X-Amz-Signature=1260271bb7c24b33db5ae02ed9771ecaad8585ff21569d07a5fce23f6a0a7859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQUL73V6%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9RUuiTDZZsvxXZY4t0t2vAcp9upc41kLHMPGw48mkhwIhANzJw1KdFMIDMywnNskJRV1LV69170TL8VM7rzxulcRIKv8DCFoQABoMNjM3NDIzMTgzODA1Igz%2BnSe4OuskCAIwFr4q3AOKbUNAcqDrC7BxJ0ZiNSFTzvPK9pvi%2Fn8ERvgrRJ70%2FjxOFoZluZkTn4jlUckCa6F2Rczfi85LaZtnwuB5%2FKGkUJuJRvZwCLMD9x%2BXXk327SXxjQYmaL7BFQgz1LnCZiGv%2BDFILk%2Bu8hQMzVzhel8oYkvRhcpFgriANGBY%2BvserP0PC4O414xhRIyBYO%2B6ts1GCzkdXNGygMALtnUVAFNIaIln7AFgLZvt2ZbwXz9SfKZcHvU5iB32MwsMWBKOI4ihH2al97iNqF%2Fi4%2B0ADMvKtBo34nQl6f5sLTJuyY%2FH6xCm1Olue9WN38c%2BShM0K87gM6DcJtEmzCSfOehCB5XWC6YlmAaFNSqZJjDO4BTYuCfsG6vdzFr8OaP%2Fu2NrFMvSxdULK6UNZv8MstIZU48yYhH4Nja1CSacbsm2xFzeABTT3eMMHHWrr6K%2BpcP3FPEjhqGkaR3PjuvnEXDhMaXZsJvzralu82R66hNfBumqWd7zVZZHNuyt1ZR467BYx9dd1epp%2BO2TpLvmr2gAnuowF20%2FjIm2zXuDHbeRhIXpLRrpKS6M29e8kYqtegSnWrmwwJ%2F0ijV9zoiNqqSF0cfGKE%2FqKxmCTs8tqcxr%2B%2BlPeUWHbHM67TT%2FNw1vcDD4tM7QBjqkATQPEdR0XOCQvvajr0NgicGKvJTFd%2FxLw56KPqiBWl62OVdgH30qW7l%2FaccJpd%2FePEDwnBv4N9mcpnvfJAAEiG%2FsJALnjSFIH1bakHMlKPWM47LrjlbEgcbz31izWpTg01gMpedJkzSBP4WmzfhqrYa65xpZzRhkXkItTJlVF3uv3f7vCjLFljAJUJUZDVWjrGkei1EuQx9lw3HXHMEZcgDRt1Ix&X-Amz-Signature=8de99215d68cb887fc734b5d8e47502ff4b1621a13f8b117ac23c32ea5dc6a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQUL73V6%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9RUuiTDZZsvxXZY4t0t2vAcp9upc41kLHMPGw48mkhwIhANzJw1KdFMIDMywnNskJRV1LV69170TL8VM7rzxulcRIKv8DCFoQABoMNjM3NDIzMTgzODA1Igz%2BnSe4OuskCAIwFr4q3AOKbUNAcqDrC7BxJ0ZiNSFTzvPK9pvi%2Fn8ERvgrRJ70%2FjxOFoZluZkTn4jlUckCa6F2Rczfi85LaZtnwuB5%2FKGkUJuJRvZwCLMD9x%2BXXk327SXxjQYmaL7BFQgz1LnCZiGv%2BDFILk%2Bu8hQMzVzhel8oYkvRhcpFgriANGBY%2BvserP0PC4O414xhRIyBYO%2B6ts1GCzkdXNGygMALtnUVAFNIaIln7AFgLZvt2ZbwXz9SfKZcHvU5iB32MwsMWBKOI4ihH2al97iNqF%2Fi4%2B0ADMvKtBo34nQl6f5sLTJuyY%2FH6xCm1Olue9WN38c%2BShM0K87gM6DcJtEmzCSfOehCB5XWC6YlmAaFNSqZJjDO4BTYuCfsG6vdzFr8OaP%2Fu2NrFMvSxdULK6UNZv8MstIZU48yYhH4Nja1CSacbsm2xFzeABTT3eMMHHWrr6K%2BpcP3FPEjhqGkaR3PjuvnEXDhMaXZsJvzralu82R66hNfBumqWd7zVZZHNuyt1ZR467BYx9dd1epp%2BO2TpLvmr2gAnuowF20%2FjIm2zXuDHbeRhIXpLRrpKS6M29e8kYqtegSnWrmwwJ%2F0ijV9zoiNqqSF0cfGKE%2FqKxmCTs8tqcxr%2B%2BlPeUWHbHM67TT%2FNw1vcDD4tM7QBjqkATQPEdR0XOCQvvajr0NgicGKvJTFd%2FxLw56KPqiBWl62OVdgH30qW7l%2FaccJpd%2FePEDwnBv4N9mcpnvfJAAEiG%2FsJALnjSFIH1bakHMlKPWM47LrjlbEgcbz31izWpTg01gMpedJkzSBP4WmzfhqrYa65xpZzRhkXkItTJlVF3uv3f7vCjLFljAJUJUZDVWjrGkei1EuQx9lw3HXHMEZcgDRt1Ix&X-Amz-Signature=47526aa9dbef279df755fae23c172735520f77bc01dbe6cbf6e063afb806a4ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W62RX7W%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLeaGIj7lQnySt8Cy9uEJQLkhlI%2FKRYIuYz5M4hXH0LAiEA2AAhfmqI6ydoYx7dZ6n2IwH8YsJ%2F0brZAvXvZ373bEkq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFyFa%2BRXMCVNJ%2BK3lSrcA9bYmhc52Qni0pKjKbvBGDGq7CPRjG2tvx81lY8q6lnB42A4gMwgSrvC8FZEWWR7XKx0%2BcxAOvtSkUmbSL%2BVbMHHz05CbVQ1fAJrZMfGRkbCWOqBosMsNi07Ua36AmF17qeXAJ1RfItsIHvxOBz1tpeNUo58Z3%2BRMCIpxT5M2ix1IoV1DwCTTtsuEy5s5S8tceAysnyySrWSZaNgapdeVOktOUQF90pUn9OSs6UqzSwildrORHedhiU3XO6OO%2Fua3jlqdcwrrpuYoBh2Scp4N%2FBqay9TjprIgZ45G8%2BMWJ5JaFXd99gdYm88npYG%2FQc2VrTQvbDAsNzP2rNe7j9Mbvl7%2BC3BnedUAuncBn8A4PGPILkealLcVGRUVYCnNh8M3qYTeaZ%2BELxdUVcEhvr2CbixMXndZZm8qkkIm00EEsx94Yp%2Fe02EbHEpxrriRedWed0JLDDqRk6UVai0%2BzB2F6d0nChuBNSMQoOXqiPv1bAXNDBS6m1sbHlJ04Sjaz9wlWdZk%2FJMDHFrV8KrhhGnqH%2FSlqRgXzu2VbqyBthnZiHLn3TJqOGuSsziK7koO5DPE%2FaPwCRxh%2B6dtra6d5xjSUZKwAqwVB4SFuu9qdi18asHwwdo3CL1osbEbkZTMOO0ztAGOqUBxRVEa1lOWKcNxFfGrhJX8f5cor8B3xen29ltdRgDekipeXDob08qwcpuDMSMenluO9Gs5hF5twjQkiGi8fxAA3iAlRXAcAT758UYWB281nZWeMrLzp4WxgEIbNdhm7lYcDw0C1ImThi4gy04xRQxIu6XSupoTApzV%2BmmwPP74rm28BXVcayMMZhGFowpfQprLFuUwWnj4UUcJfd18lZf4F2VCR6i&X-Amz-Signature=163ce586f15b9e14d7ac7e521e14a37e502db6a4a1d16457fecaf326c5582bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

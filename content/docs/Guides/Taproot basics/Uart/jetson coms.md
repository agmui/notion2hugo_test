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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMGHURO5%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD%2FhGd%2FPaKiTICAnIu9%2BPUgmdGdu0UP7bSb0c8kZ4zxZAIgfST0SgAzM4av%2F0ydgd8KiCziHE%2FwaFXZisOJG1KcbPAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFC6mubgNV7Z6ZU4uSrcAz21fnHibSEYmm7SVvhvVX%2FpsWx3aCvaYcprR41VJaPxKoUiz8TYXWWV4xphLcK3fCqI4HUJ8Jxtz7TD1AGCq6kuWRHnGokHWRZVWP5%2FFJNbS9sRaK58oQy%2FzURapUBf4b%2FplT5xfu%2BtrnPXJH3mihnfyuyozVUxJs8UOrqzV6afAErWmBTkz%2BeKsfgMltfYu6aNHIRmRKSyQWDH1HVbjnISh06P9q%2B1%2B7qmT5Hhtdg8gKVAWIOVdzzw07RKwH3jIi0pNE5D0%2BWDV%2FF8sqRvGgVyhvj%2FizrxcTGwG0wJDNFp3gSJ9JFNO%2BggG3RQ4BOiflTwc952Gm0MNFa1Gai4cxyFxZY0t5X9b%2FlewKjUynzMU%2B%2BPc%2BCbD4LqJMmYPt%2FjGJul6C3vub9lbrTaFAInYQcULGaNVkjQp7MNCRzarWwv5OSw%2F5kzomdqWEdbyN%2B%2B2d8laDqWV%2BLHItlu%2BEluHgENCtP8mm9I1MqdJCJsS80enM0YjcKAjILl7pRjTvnmjZz2%2BNTK7uibeKIvgnglYXMjAuTHDbbtoMy4SdtV2mY18MEHFZHEMDGTMJbly8h6hKS0kvxgDk6PD5cHW1T158UwRucXcV7819Mor2EFlACegr8ye4lssLUDfTHDMPTOj8wGOqUBAek7CzbXenZBNSGu%2FAqDWW4u%2FAEmrQdt%2B2O0iqvM%2Fzu95Y%2FniWqSR2%2Brl0pBsALXP3OAGWYRMGwVLTAYW4hlXcSLSRlXlGXCn4E6c3WiRe705avcpe1l2tLM7g2lyEs2wrmR0Cia9WO5dLrVPccrWs1U6BUWZE%2F6CyBOu6nBv16Je8%2BMUmmlZdT81RMSRbkwFSm2fwD%2BnxI3ww0aqzyL%2B%2BilXvW8&X-Amz-Signature=54cc66cfe70fd789d4b7c03807fa548f2a7b8b2ea41bd54ba91a97552174ce1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJR5NTUA%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD%2FwCb5wWORZ77ImxW%2FE%2FP%2BozEHSnMzab5HYym3i206MAIgIbsXtm%2BlFaa56fiGdwOBsumj3wWxiFHJFfERX3ILNSYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHX9Ce4hylcDzURP5CrcA8FDj7kfQ9FAPlmx6DYKxOEcKvfs3hmI5doiAEbGKctk4JV9lT4m6vRkIu4IA1knSgLSwX6b%2F4vMskzKCi5DdHHzzZdgX9r3%2BX9v0OGrFKaMUj2yUA15vzAp9KWIaygGKDXRnah3VhGAWGvNXMiCZKeZ7fnaG71AX4bT4na83Ck2bkLL6xUpT8kOU%2FeT0IwPlo7UcGITgug5Hm0Iz7M%2FtTfnbCT4UIWi4x5BTgdmX2%2BT3sjUKlYXl7Zq55clLnDvCFj0OL4k4%2FmbQuA5hgovXDGyiTItfLPNJFDh2cli%2F6MUMqjgLjPhMLVkbG9E5W9GCPvL76aQSLirqpiZCXUR4GDo2qrIUo8u3C11ThfV%2FCCpdZlJ%2FVk%2BVbWRmIagOrcWHs%2BImtGyC3DiXKKpiPaIUZxVNkXrpDAPX2zxokrW1LFcMLFCxSvRr%2BH9vFMbgX124RJ3ACeTXi9v2UwUAlBA2RXPJp8XZFCfF9zJYUxS6BER64xGuFxpeU3zn60zZfJIfiaZKGJgi5lyuAJtbNy2bWxn6n9rrd4uovCnFjNC9AYo%2FZbK5h5dLla0BBMQ2Qgrg2RvzQKtwzx25BSdjXA9Vf%2FB8psP2DZUx%2FwOe3gFAXwKJPW%2BtX8SUfJ3ZL9dMI3Oj8wGOqUBYd1KYtubHA6nIqZNI4r%2BxEPDAirAkRTL9ovatJzY20VItZDcH9RPgEbOf23jCyycXhbZtePX21Abnqgo4K58%2Fbelf40hiRb5jwHYZMd6RQdFFsrlVzopsn6%2FBjkEtcER1BUQtZlSahAyJXjsckESPpl7pCmpLWeiuvDtF%2FRm0oypFXd2mf3gYuxXbDa8n6TBcyuHUJAm8p8RuGauDm5j%2FFZsFNKm&X-Amz-Signature=a449daafa53bfa4c8610e0ffc3671fc3211c8f976aac26603ff8b662cf922be3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIENEYIJ%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGW6jNFdxJ6KwndCO5OF%2FygmRIq561OmbpP3awNcjy1GAiACcXjjCmo6%2BFAy8EGrQ%2FYF%2Bs%2BgrB0ihTwTY3RslOQvkSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM0xsblCvQxqlVFfRFKtwDbZl4TemchfvhvQGjcDh6Lp09100LQAyM1fZp7k52qf%2BKmlg5hFU4JBTHtkoX2WzQ7a9CYk6JCYgHbjUrWgTrF%2FDJSEhYMVjDJjTQoOaP3KMlX4DVtsB%2FO9e1xtfxfsc8iV5%2BOkIRqIxJzNL%2FwIEGnJBb4mNOAt%2F%2F2tzyzlNa5OwMqadl68wQlGwYsV5pU9vWAvfXbVobqUBAE2l67A1wpLhAdc7KUDzFDKkF%2B4G19qCujcvjonu8voME9u4YCD%2B5pyRoeR1KfKoT4Ok4nzzfBdHLwIiwXQdmmi9qyyWGqEspWEyJ1g3zcABTJrKIJ11SvNigOxNmByqvCLy30yM%2FmQRAMcieaTDETMjs8NoeQW0gYkC8l%2FbCjZeBzck9%2By1njWWztlgzzYXr2T97nZ%2FJwJFUs83NWAkedMcQuNAmym5h1KIXfuOerB523A6Sz0EGJP4R4gAPc3SG7454bFfahzjujxgDf0lCHW0cH%2FiqDWeYw1j7w6hO5WcqUrA%2BXRrTbO1fwS36uCxSYH%2BAJdFet%2Ba%2FlLqzlrm6HPDnqjhfdsa5s2is1SspsJhtpb5Xp57aO9hFJ2UEihTCkCn8sob%2FXqJK9IoNnOSwz7yWdwkyUnLRqwLmxY7AlS2qf1wwzs6PzAY6pgGqyU4BnzjlTrh%2BfHE5BM3ANz%2Fy38z6vtNgCpPTtoUvbqzi254Zw0aYnJvLsVVkh2OxSH99e8vOUwhBw9h2DUyZjG%2BCDWawt5Jf4ZCwNaCSxkxZjGOOYJ1XcB3eW2ohsN9NwAJ5Aw1u2pHD4qzw2aZ6Y4n8QXwe8tYgewkeXxykcXE51nPLtvCrtOzDx51bQrJuP%2FTr3lorZrWli5RZlBnKh04%2FxUDF&X-Amz-Signature=7c4b4964d16f606b3ee40a964b5abaf36c56c1110a5a2837428491140c63224a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIENEYIJ%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGW6jNFdxJ6KwndCO5OF%2FygmRIq561OmbpP3awNcjy1GAiACcXjjCmo6%2BFAy8EGrQ%2FYF%2Bs%2BgrB0ihTwTY3RslOQvkSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM0xsblCvQxqlVFfRFKtwDbZl4TemchfvhvQGjcDh6Lp09100LQAyM1fZp7k52qf%2BKmlg5hFU4JBTHtkoX2WzQ7a9CYk6JCYgHbjUrWgTrF%2FDJSEhYMVjDJjTQoOaP3KMlX4DVtsB%2FO9e1xtfxfsc8iV5%2BOkIRqIxJzNL%2FwIEGnJBb4mNOAt%2F%2F2tzyzlNa5OwMqadl68wQlGwYsV5pU9vWAvfXbVobqUBAE2l67A1wpLhAdc7KUDzFDKkF%2B4G19qCujcvjonu8voME9u4YCD%2B5pyRoeR1KfKoT4Ok4nzzfBdHLwIiwXQdmmi9qyyWGqEspWEyJ1g3zcABTJrKIJ11SvNigOxNmByqvCLy30yM%2FmQRAMcieaTDETMjs8NoeQW0gYkC8l%2FbCjZeBzck9%2By1njWWztlgzzYXr2T97nZ%2FJwJFUs83NWAkedMcQuNAmym5h1KIXfuOerB523A6Sz0EGJP4R4gAPc3SG7454bFfahzjujxgDf0lCHW0cH%2FiqDWeYw1j7w6hO5WcqUrA%2BXRrTbO1fwS36uCxSYH%2BAJdFet%2Ba%2FlLqzlrm6HPDnqjhfdsa5s2is1SspsJhtpb5Xp57aO9hFJ2UEihTCkCn8sob%2FXqJK9IoNnOSwz7yWdwkyUnLRqwLmxY7AlS2qf1wwzs6PzAY6pgGqyU4BnzjlTrh%2BfHE5BM3ANz%2Fy38z6vtNgCpPTtoUvbqzi254Zw0aYnJvLsVVkh2OxSH99e8vOUwhBw9h2DUyZjG%2BCDWawt5Jf4ZCwNaCSxkxZjGOOYJ1XcB3eW2ohsN9NwAJ5Aw1u2pHD4qzw2aZ6Y4n8QXwe8tYgewkeXxykcXE51nPLtvCrtOzDx51bQrJuP%2FTr3lorZrWli5RZlBnKh04%2FxUDF&X-Amz-Signature=1fc1c3b0b9816b2c1066f6ee911d70be3b3791c4df1497c4f07d7804a1824601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJR5NTUA%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD%2FwCb5wWORZ77ImxW%2FE%2FP%2BozEHSnMzab5HYym3i206MAIgIbsXtm%2BlFaa56fiGdwOBsumj3wWxiFHJFfERX3ILNSYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHX9Ce4hylcDzURP5CrcA8FDj7kfQ9FAPlmx6DYKxOEcKvfs3hmI5doiAEbGKctk4JV9lT4m6vRkIu4IA1knSgLSwX6b%2F4vMskzKCi5DdHHzzZdgX9r3%2BX9v0OGrFKaMUj2yUA15vzAp9KWIaygGKDXRnah3VhGAWGvNXMiCZKeZ7fnaG71AX4bT4na83Ck2bkLL6xUpT8kOU%2FeT0IwPlo7UcGITgug5Hm0Iz7M%2FtTfnbCT4UIWi4x5BTgdmX2%2BT3sjUKlYXl7Zq55clLnDvCFj0OL4k4%2FmbQuA5hgovXDGyiTItfLPNJFDh2cli%2F6MUMqjgLjPhMLVkbG9E5W9GCPvL76aQSLirqpiZCXUR4GDo2qrIUo8u3C11ThfV%2FCCpdZlJ%2FVk%2BVbWRmIagOrcWHs%2BImtGyC3DiXKKpiPaIUZxVNkXrpDAPX2zxokrW1LFcMLFCxSvRr%2BH9vFMbgX124RJ3ACeTXi9v2UwUAlBA2RXPJp8XZFCfF9zJYUxS6BER64xGuFxpeU3zn60zZfJIfiaZKGJgi5lyuAJtbNy2bWxn6n9rrd4uovCnFjNC9AYo%2FZbK5h5dLla0BBMQ2Qgrg2RvzQKtwzx25BSdjXA9Vf%2FB8psP2DZUx%2FwOe3gFAXwKJPW%2BtX8SUfJ3ZL9dMI3Oj8wGOqUBYd1KYtubHA6nIqZNI4r%2BxEPDAirAkRTL9ovatJzY20VItZDcH9RPgEbOf23jCyycXhbZtePX21Abnqgo4K58%2Fbelf40hiRb5jwHYZMd6RQdFFsrlVzopsn6%2FBjkEtcER1BUQtZlSahAyJXjsckESPpl7pCmpLWeiuvDtF%2FRm0oypFXd2mf3gYuxXbDa8n6TBcyuHUJAm8p8RuGauDm5j%2FFZsFNKm&X-Amz-Signature=d73760641f23a8b1364be950afd21af14e398cbd8cf621c5a299c796603bc180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJR5NTUA%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD%2FwCb5wWORZ77ImxW%2FE%2FP%2BozEHSnMzab5HYym3i206MAIgIbsXtm%2BlFaa56fiGdwOBsumj3wWxiFHJFfERX3ILNSYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHX9Ce4hylcDzURP5CrcA8FDj7kfQ9FAPlmx6DYKxOEcKvfs3hmI5doiAEbGKctk4JV9lT4m6vRkIu4IA1knSgLSwX6b%2F4vMskzKCi5DdHHzzZdgX9r3%2BX9v0OGrFKaMUj2yUA15vzAp9KWIaygGKDXRnah3VhGAWGvNXMiCZKeZ7fnaG71AX4bT4na83Ck2bkLL6xUpT8kOU%2FeT0IwPlo7UcGITgug5Hm0Iz7M%2FtTfnbCT4UIWi4x5BTgdmX2%2BT3sjUKlYXl7Zq55clLnDvCFj0OL4k4%2FmbQuA5hgovXDGyiTItfLPNJFDh2cli%2F6MUMqjgLjPhMLVkbG9E5W9GCPvL76aQSLirqpiZCXUR4GDo2qrIUo8u3C11ThfV%2FCCpdZlJ%2FVk%2BVbWRmIagOrcWHs%2BImtGyC3DiXKKpiPaIUZxVNkXrpDAPX2zxokrW1LFcMLFCxSvRr%2BH9vFMbgX124RJ3ACeTXi9v2UwUAlBA2RXPJp8XZFCfF9zJYUxS6BER64xGuFxpeU3zn60zZfJIfiaZKGJgi5lyuAJtbNy2bWxn6n9rrd4uovCnFjNC9AYo%2FZbK5h5dLla0BBMQ2Qgrg2RvzQKtwzx25BSdjXA9Vf%2FB8psP2DZUx%2FwOe3gFAXwKJPW%2BtX8SUfJ3ZL9dMI3Oj8wGOqUBYd1KYtubHA6nIqZNI4r%2BxEPDAirAkRTL9ovatJzY20VItZDcH9RPgEbOf23jCyycXhbZtePX21Abnqgo4K58%2Fbelf40hiRb5jwHYZMd6RQdFFsrlVzopsn6%2FBjkEtcER1BUQtZlSahAyJXjsckESPpl7pCmpLWeiuvDtF%2FRm0oypFXd2mf3gYuxXbDa8n6TBcyuHUJAm8p8RuGauDm5j%2FFZsFNKm&X-Amz-Signature=23fed59d9bba9ed209d485fd6a53b8a6c91f485423eb5b868977384fea7db125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP6RK2IZ%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDkt8XFXYHCpYavvFvT1TjIXXw0JXiJ%2Bb6so2LrjQ7s%2FwIhALnBiVSKTp2dzuBuSjH0ljZY%2B%2FvqeEQUGEHlAOkm%2Bu2kKv8DCCIQABoMNjM3NDIzMTgzODA1IgzPyUxlUdac59UF%2Fbsq3ANoAPtZgeqBEiIQYJ7g9KYwX1QJWS3CBhvaX6rFWpArmTzT9IWD7bopU2Vc7qLG15qScOwHLPsZHnyDORNKwD1mSRi3WB3Ji%2Fifk0%2FE0UzwHG%2BzX9nYXGa%2BYqQCgqKQZ0BNCFG7hdzupgkqLqyUtxV1RvqSmeaQk1j0BNMWOvijEmUwQqXjIf3QQGKGOyz8u1lr3qmNQ2FsJETn3EGczwFkw2V8vOoofQoHo%2BrbVbJnrFpM3hsXUTWptBgbGc2B3Hkftf33%2FN1YkfQOBbvR2NAZFQuur62UswIGdaNczKjP9ToT9yy6HEwteVXzeqcBeYk1lLR%2Brtb3wDK5dk89shV7OiUZ%2FJNFOqnU1X23TRnYXBlnsrTsE669rGW6FCobnzjArGC54vISku4G%2BNQKLDbH4rbEjR0707Xq8Zz0wzd1cwRQlFepmeLY3mSm9dJIMy5m0WISZSvo2m7dMb2EX%2BrR%2FmNMITHf5tPGSdX4GFaqlUpdeu54%2FTuJ3dOs86uEtTFKmO4Xq4W4pWELvpQw0RzUi08h7%2Fhk2lpBT04h1p2HuA07KlHSzgbcgPE6gwzvfjt0jbyP0lrVd972jShI9SQ6EYOC6nNXjq%2F7n8i%2Fen8905Fpuk5OubzAqS6pvzDOzo%2FMBjqkAawizwhGxpvQwfOGSUY6M66y4w9rZTrSkVlIgeG1GeXVwTk7yqCvGxJkFG7gs0nY3p3gkXrVVGVg%2BiNcLqX21w49CTLfOksjSd%2BJM75zMv467470egJzvDVGDZq%2BmZDdKuG1HMXLxzbJNmxMTjapocAHrfkrrJfXUrJe%2FJWn7r1BKgO%2FZecG8UpvVEBZ1N1j%2F19RLEadegkPyV7zIGBMY5cUb0zH&X-Amz-Signature=d667aea4639e5fc2c93a04ae32cfb459ccd1ba4c64fe4d1ace99a7feaf92569f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

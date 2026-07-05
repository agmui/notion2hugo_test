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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667URVH25L%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEhXWdpzgfaJmc5rbMw9BJ7qRGkZMj0WaTIOaNY4NHwHAiEA7NCmm00%2Bs5%2FBAhF6pN%2BfiMNIwVu8tbZrPSN17ouw4c0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGuh6Hrb5%2BKf5zgPxSrcA4lPIzNH2De8c4HpjmsF9Ds%2B1B5jMQ5xFjpxmRgnr8rMtfQ0nPZKVxDJZg%2BEfm9DPe8W7SBhHnbI%2FW0AFdZjo5%2BtuEJfQTTTSQRfab4Rxr9DDFe%2B2%2FaZs72QxAnswxsJQpadUQCNH3ghbihhGx5BAkwyEBgK3qoJ8LntiY2pDifUub79bHW4Th%2BLgCznVl3KnpbJnnCZQYMvgRfv0axDcoI9PUYv13gUiQzv5rZAP1iXW4AmYlEZWzuFf0hY5V0jy8YYobprNNKmF03JOPKKKpQLJJqZFaSI9pK6DLNhwVlLsnL2cdr0MpOH5WA7teu0bBE2kfEbhCoWCCN56WSADzItB7cQZeJmaPW1MoOXGXkxzgD1%2BB6OdnglfJ1GtzljE4M%2Bgp7Xu62tR2FyiTcODLn5TPwRsii%2F0SkG66VcO1RRgB8tmqiBOkQRSgnLcH1PYRxQv65xx%2FbcS8nzU8O4TcEm0SBW7h2B2QCowiCrQpF0kCre%2FVES1H4LRkS8dMc1E8Xkb%2FsNYqEOpnXKbFBoGYjQ4zUniQtzEDQA7aktOVKq97PuiWGj3FXBtY6%2FVZwuMZpHivT163Hx0kOSm9%2BOVwuW94WH%2B6IN3wClfeA1fXO%2BMT3x8xDH0wNFpHv4MO3ZptIGOqUBiPKqw5oDZw3xHOY1mfZ3pNG8mQi47aq2V0LUyQhtUVUNKNyDrfCHiBSO5%2FWudae4fXmh8T1j7XTgbTYPkx75WaZ6HpOHonqtQQcqV5HZA2HUlbomZ5g6xi5tvk%2FTAxtTgxQadF1CvhrQzn44fVEcf8%2BpJdMEDOH128rcWpVHhqMThULrnbjDrdGHqbQpnzrHH4bfN56kVGD66wmRQMTRKwFICMik&X-Amz-Signature=2166f064ed587823e94cee4672bcc45498f3e8aea7bf5157ae9d7ddd09e0f562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPRRNUL%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEvVLSOnapkqJikaEGnYJHymz7W0VGhYmPi0rAWFlWO8AiEAnIUNNSZM2lo6q760%2B428%2FoRkdKfFeMfLTuyn0Wq2Exgq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMnk1%2BDFC9iwFRNPNCrcA4CAzujPWK6a%2BmPRPQuRqPT8L9qjVcs%2Bi%2FLAl1TVq3YV9mTOrQyv4gUbgAqZhmehyAstdBrAtEraVFzLYFZ2vIQK3kG1ymQ%2FGJ%2BVw5qjhacvkWHV7nGqomaOpdmcMbznNzCgCzB2QOVRqZ%2FlsmJ339YBWxwhlBp%2B%2BvPfpYK1rQENhux0MBrAFTfZ3l24ZL3uLPga%2BkvmnjE%2FuqNETbnwFUd4smi14jC%2BglhKhsu6Myg%2FIQZwuXczz4PTAltu%2FmHW3MdmhFjIO8zgaK9rbxa6%2Fjr98guGIvDh7ewetGsyr6cPt8usyfGG08KjynRjbgxfqMXl5kD2ei0DdbswKf1l0Re4hXcwidzdTonCtnw%2FzdIgg%2FOJen2WB9KUWeTCNB7H3l8HuaYRZC3QzOdR4XUtebv3W46uGtWe%2BvhUO5Z3IayvQ5jgyzfhF%2F%2FAyFbsL7ClaFf6cSAq6PJgbAQyC4ZO0p8erJv20bP5adLqDyIY4NawL7p0owoHTOlXrxJi2w3NbX6CvUIOZs%2Be3ldBobVLPWmtkVDUejje33oX5guK49s6eRhmKT%2FEWb492gqWHaQT4K5wiIabr%2FgguFxBhs%2F8WVSZ8RIk8hgjcWTZPQ6cHxmiSPnE0QqwxgLWRhyqML3cptIGOqUBgTA8Z%2FbKzDu7wJ3fC085X9IWxDNDXduPgYcudo6WchGvBmHiMRjQ%2F9f4gXDoOHOh71VaB0cCxQ%2FpFtYfqHywpSoCxlD73Cb9V8e33KKnM4NHXC7Bu2IWfgfOe6JnY4XsVqixMGSPsBQXdMfPcZh6Gdr9jiCongaFpnjojHJoMRMad2HNppfeDUdMZjR4BCY4%2B7B0pG31othOGlDOkEyOMnswPbU%2F&X-Amz-Signature=9bf7c479dd82327916d4d3bf93801db2e2f0a3ac0bd367f57f308694de97ba1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DKKXFJT%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCi45ndIhm2pUsR26NJL6xbgwM7gU9b8CpMNHkJYZDp7wIgeTpaah%2BQAzRy1lUSN6ThPlhARhkELIu1hUTpVfXJQ6oq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJW08IA9UrCGoEnsSircA%2B53AKf2p0pE6U1yOAK%2BWZczi9%2BV0TLclTyuc4kU%2BcZohIXJ4%2FvLvvMzpCcOQysACP5MBwrBGlbI13xbTgxW3LnVNDY6mR6%2BuQKs%2BUd0sRODQ2vbyrF%2F8MOmbxU2ZpxwT47o1DoT99f11LN9XWzev8QxP14v0%2Bw43LImK5RQF7dPWETvU%2Bw27QzeYDpZedUoP36LCnzK%2F%2F4KbdWJUPzGA%2F5gFb%2FNkCl5CqwOQNstR9Hn9t0GkL5e%2BCgLzQRzDKoLYSMELtAm9fpldZQGXrYrS9cxZ4YIFFPI6B0%2FaMgmXRlJHZt%2F1nVc2ajlwk7nW14FkPUFjC3j99S8vai5dzXe1%2FcUzBgKzOPcn5VhA%2FJ7F4BPJcwPdl%2FExy7Ff9m9LY%2Bf6ihD7c5nsnZxPi3qJlVd3Kpac0AToWLP9rUlR59P%2FnKBt7kpu%2FWrZl1R63nkvqO%2BEfdgJfTbyCVFWFXZHXQa%2B%2FIFeyauDAV2E78IH%2FSExX3zB9d1jiZPU9fZxihWBvPQe4%2BZsTp0cBW7uAewadXXu7yj7Gv%2F9VESvqpj6fuTD8dEy%2Fp3BXkMI2Nje9C9J1GtMoW5Wjjumm8cHm8dhmPH7h%2Ff71u92vs82zPjEHTd9Y%2F0SWJtNBzNyMU%2BFiXEMN%2FZptIGOqUBEDwLFQamdkAAlMUZoVRnjJULDgpkXjqk%2B8JqOEkIqRawI4x69UQ0VaBd5CZ92pLIFSlKMnivNyhDO5HS1WJxPIw3v%2B7wLGq0k%2B5BtQRkRR5%2F2BQW0l9Hq%2FRWVStvjjyapPuu6gJXjlkuhYFa%2FvMiPnlVzB7VfsYxZBSZDkcFc9yXgwoLc6DVoURbjeJ3F5R2vCOMm498GsC0a%2FIx8xTI2HZhi7KG&X-Amz-Signature=1a67a06969f83bfb22c53ba8bc1c420c598ba636ecd5e0ab5fe8917ca5e1829e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DKKXFJT%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCi45ndIhm2pUsR26NJL6xbgwM7gU9b8CpMNHkJYZDp7wIgeTpaah%2BQAzRy1lUSN6ThPlhARhkELIu1hUTpVfXJQ6oq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJW08IA9UrCGoEnsSircA%2B53AKf2p0pE6U1yOAK%2BWZczi9%2BV0TLclTyuc4kU%2BcZohIXJ4%2FvLvvMzpCcOQysACP5MBwrBGlbI13xbTgxW3LnVNDY6mR6%2BuQKs%2BUd0sRODQ2vbyrF%2F8MOmbxU2ZpxwT47o1DoT99f11LN9XWzev8QxP14v0%2Bw43LImK5RQF7dPWETvU%2Bw27QzeYDpZedUoP36LCnzK%2F%2F4KbdWJUPzGA%2F5gFb%2FNkCl5CqwOQNstR9Hn9t0GkL5e%2BCgLzQRzDKoLYSMELtAm9fpldZQGXrYrS9cxZ4YIFFPI6B0%2FaMgmXRlJHZt%2F1nVc2ajlwk7nW14FkPUFjC3j99S8vai5dzXe1%2FcUzBgKzOPcn5VhA%2FJ7F4BPJcwPdl%2FExy7Ff9m9LY%2Bf6ihD7c5nsnZxPi3qJlVd3Kpac0AToWLP9rUlR59P%2FnKBt7kpu%2FWrZl1R63nkvqO%2BEfdgJfTbyCVFWFXZHXQa%2B%2FIFeyauDAV2E78IH%2FSExX3zB9d1jiZPU9fZxihWBvPQe4%2BZsTp0cBW7uAewadXXu7yj7Gv%2F9VESvqpj6fuTD8dEy%2Fp3BXkMI2Nje9C9J1GtMoW5Wjjumm8cHm8dhmPH7h%2Ff71u92vs82zPjEHTd9Y%2F0SWJtNBzNyMU%2BFiXEMN%2FZptIGOqUBEDwLFQamdkAAlMUZoVRnjJULDgpkXjqk%2B8JqOEkIqRawI4x69UQ0VaBd5CZ92pLIFSlKMnivNyhDO5HS1WJxPIw3v%2B7wLGq0k%2B5BtQRkRR5%2F2BQW0l9Hq%2FRWVStvjjyapPuu6gJXjlkuhYFa%2FvMiPnlVzB7VfsYxZBSZDkcFc9yXgwoLc6DVoURbjeJ3F5R2vCOMm498GsC0a%2FIx8xTI2HZhi7KG&X-Amz-Signature=19ac0adaadcfd4eed9b34638bdfc6fb186af12d69898638d520ec88cfa8a9011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPRRNUL%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEvVLSOnapkqJikaEGnYJHymz7W0VGhYmPi0rAWFlWO8AiEAnIUNNSZM2lo6q760%2B428%2FoRkdKfFeMfLTuyn0Wq2Exgq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMnk1%2BDFC9iwFRNPNCrcA4CAzujPWK6a%2BmPRPQuRqPT8L9qjVcs%2Bi%2FLAl1TVq3YV9mTOrQyv4gUbgAqZhmehyAstdBrAtEraVFzLYFZ2vIQK3kG1ymQ%2FGJ%2BVw5qjhacvkWHV7nGqomaOpdmcMbznNzCgCzB2QOVRqZ%2FlsmJ339YBWxwhlBp%2B%2BvPfpYK1rQENhux0MBrAFTfZ3l24ZL3uLPga%2BkvmnjE%2FuqNETbnwFUd4smi14jC%2BglhKhsu6Myg%2FIQZwuXczz4PTAltu%2FmHW3MdmhFjIO8zgaK9rbxa6%2Fjr98guGIvDh7ewetGsyr6cPt8usyfGG08KjynRjbgxfqMXl5kD2ei0DdbswKf1l0Re4hXcwidzdTonCtnw%2FzdIgg%2FOJen2WB9KUWeTCNB7H3l8HuaYRZC3QzOdR4XUtebv3W46uGtWe%2BvhUO5Z3IayvQ5jgyzfhF%2F%2FAyFbsL7ClaFf6cSAq6PJgbAQyC4ZO0p8erJv20bP5adLqDyIY4NawL7p0owoHTOlXrxJi2w3NbX6CvUIOZs%2Be3ldBobVLPWmtkVDUejje33oX5guK49s6eRhmKT%2FEWb492gqWHaQT4K5wiIabr%2FgguFxBhs%2F8WVSZ8RIk8hgjcWTZPQ6cHxmiSPnE0QqwxgLWRhyqML3cptIGOqUBgTA8Z%2FbKzDu7wJ3fC085X9IWxDNDXduPgYcudo6WchGvBmHiMRjQ%2F9f4gXDoOHOh71VaB0cCxQ%2FpFtYfqHywpSoCxlD73Cb9V8e33KKnM4NHXC7Bu2IWfgfOe6JnY4XsVqixMGSPsBQXdMfPcZh6Gdr9jiCongaFpnjojHJoMRMad2HNppfeDUdMZjR4BCY4%2B7B0pG31othOGlDOkEyOMnswPbU%2F&X-Amz-Signature=49491d403b322e5c8b59505929102922d343d1afa38792f440e8c52801d79f41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPRRNUL%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEvVLSOnapkqJikaEGnYJHymz7W0VGhYmPi0rAWFlWO8AiEAnIUNNSZM2lo6q760%2B428%2FoRkdKfFeMfLTuyn0Wq2Exgq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMnk1%2BDFC9iwFRNPNCrcA4CAzujPWK6a%2BmPRPQuRqPT8L9qjVcs%2Bi%2FLAl1TVq3YV9mTOrQyv4gUbgAqZhmehyAstdBrAtEraVFzLYFZ2vIQK3kG1ymQ%2FGJ%2BVw5qjhacvkWHV7nGqomaOpdmcMbznNzCgCzB2QOVRqZ%2FlsmJ339YBWxwhlBp%2B%2BvPfpYK1rQENhux0MBrAFTfZ3l24ZL3uLPga%2BkvmnjE%2FuqNETbnwFUd4smi14jC%2BglhKhsu6Myg%2FIQZwuXczz4PTAltu%2FmHW3MdmhFjIO8zgaK9rbxa6%2Fjr98guGIvDh7ewetGsyr6cPt8usyfGG08KjynRjbgxfqMXl5kD2ei0DdbswKf1l0Re4hXcwidzdTonCtnw%2FzdIgg%2FOJen2WB9KUWeTCNB7H3l8HuaYRZC3QzOdR4XUtebv3W46uGtWe%2BvhUO5Z3IayvQ5jgyzfhF%2F%2FAyFbsL7ClaFf6cSAq6PJgbAQyC4ZO0p8erJv20bP5adLqDyIY4NawL7p0owoHTOlXrxJi2w3NbX6CvUIOZs%2Be3ldBobVLPWmtkVDUejje33oX5guK49s6eRhmKT%2FEWb492gqWHaQT4K5wiIabr%2FgguFxBhs%2F8WVSZ8RIk8hgjcWTZPQ6cHxmiSPnE0QqwxgLWRhyqML3cptIGOqUBgTA8Z%2FbKzDu7wJ3fC085X9IWxDNDXduPgYcudo6WchGvBmHiMRjQ%2F9f4gXDoOHOh71VaB0cCxQ%2FpFtYfqHywpSoCxlD73Cb9V8e33KKnM4NHXC7Bu2IWfgfOe6JnY4XsVqixMGSPsBQXdMfPcZh6Gdr9jiCongaFpnjojHJoMRMad2HNppfeDUdMZjR4BCY4%2B7B0pG31othOGlDOkEyOMnswPbU%2F&X-Amz-Signature=29e1a84d5ed82f84238bff3f9803f92f9951f0235129d5b9ae18b828ebe84bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNBAF74H%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHcjVc2sOgiXP5%2FvfYImvCK5fVot%2Fxvb4DB6mn2vU32gAiEAoROan3OyJBAEcz4GezLRvbEkN82tUjkFEeUjajZ8d3cq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIvvxnFKprG8%2FG4rqircA7AisIb%2F5VIO00W4RtpE%2BvWtzjUY2X0ZE1nmjh12P9hFuqILgP%2BR9v%2FRkFNx7q%2ByzzNcS9XawS1l3%2BpQQGk0srZPrx6l73Ye9vZghSJOtZaem4U5yjrGOyEvb79hRhEvN9%2Fthe2KLOYvpDgU4UYVMPGwwi7I0MlAWjBduqoeR%2BkhEsiJxeqhIY0Mm813epT5Tn3SzLXF7M6QUHwz4F5suESHnALWrw8XsWerx3zfHYLsFzHPIvtjf%2F8vHsvYKCEKPB0IeLCWbHuhA6nMxwrAfah9WLOSrh7i%2BVDLv8%2F2L4omjwk5QlaXM%2BKUA65P%2FQb0zEFrqfhqNSQKZKzyv1P10NWx2244qgUwEGUHvL42lOce60l1O2FNtOk8Lkn%2BmZbRVSeFVB7YmOauvO8uneLT2G8x8v%2BZERZP70osbK1M78LdX8VKySjSkU24V4xTrBAm1Sm7jVfYpIvdAZVJ4zX9MJUoMS145BJ42k3l2jgIVMTN5wz9avmkyFO2Jkt7G5%2FXgx3bsUmwh0WoHk0e%2FhpscCvgp1%2BtHd53hQSBb2AbnkueOiIM%2BxBtrRjlM4zypNsEo%2F52O%2BoNR4OOUfp4TbLhgzIpVU6TXiY5uGWuzA1hFNWruuJWGj321Uzxn9XQMNnZptIGOqUBSSUceVON3XSzYC2oyjO54ShRhkcsfccir5OAtmXkHCwcU2q6pRZRrM4Ps8FDNk1%2B53veifweBPoN9ef8j2XFhlR5V6eLzAwDrXVF4m9UM9nu%2B4bpqDOv8LndXKOQHx1WUzO2KKHj4j%2F%2FqZ8bGA7nCV9Wp7ER9YQqxQXCuaeiZiJQ1fddKSMLt0XeSoZfATdObBJeg%2BpQP1Rs%2Fwxqq6hqEUKQYJb5&X-Amz-Signature=d21101ddffd1df64af01adfcb0a3158a7633555d11508c436d5d8924d3c07869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

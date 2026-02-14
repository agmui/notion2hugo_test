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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG2ZRHQX%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCs8jBRbLesVuzjElnO07j4ghYIdNibouP06lUqx24fHQIgIqdBugl%2FIuEd0dAx%2Ft%2BBkz%2FjnLW8bUSEjn0WnWa%2F%2BjEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3Kkm8zhNd6n9K6uSrcAwE5lWgGKUm0JpqIFOqvXfY2BWfoRNYdg2f7EV3XGokTtnUCQPtZiZ5PpQ2pkS2GdDElb%2FZ3RaSbqLw6FBM22eh1rhzebXQ5kDTLqdXFNX8JU2r16fTgfSToe8RAx2dJvBgqv3zCoUMwyShIH144MoRGqCgZaWkpeE4wrzZ23DGCL9JAkPE3MT93nv2RJlxOqc5Uusa3GR5u7y5JR%2BucwcVhtxDDvDESxvjb9uPuOSIwcLA0iXXZAhFFoZJbLkFGbKKr1UELTGjDvMpNaWPE7Qw0CJAvRQCfiVsU%2BDkmGrzqoWpaLh7btauaEE5wL1keJAqoAWH5iaAIGb8QT8frF4JJFbaEMB%2B4JHx2ynCAdfAGVTblu7Jem3OGBZbgRsjrzj2Fa2euA6ahtzldJlGMnUphNLn8k38kSpQbY734AESsEwY5HlbgIqJl8jbg0gpJ1Yfx6K1h3ub0qUJELs5ThjPJCQ%2BuTQMmWRDsBnlqQXXwHcORbKpRAueTXT3sm9kAnR%2Bb4u3gQKm9Q%2B3nUoMUtECAkgRCiR0nfVWJu%2FiW0UmTHuP4E4%2BcqHWIsm%2B8chmhJj%2FPh0CZOcOc5JcarNGdIg0Q9nZcultbMktTthQBcYe4NXvHE5ir1ScWJ04LMMWSv8wGOqUBtv9mdX5XQgiWou4HKogb%2BmvEXrKkJM9KBmWYGA3ADZsbpFt5n7osVtiCKkLJoQaexhEz%2BXFKvTVZoGErjylVVV3bHAbMa%2BXkDABNz2QLeNY4SWEbHxrVmFbDZeGnyiw0jRVx1%2FNcT4UplrPKw4b5Ug1%2FKLuJQwJVqR8sKSshiQdvqJuGBwxbF9bYVe3DGimc55gQS7nRiYIPjBSa7KMC7ej0t6PU&X-Amz-Signature=bf7663b20b91efe8b380ef987152d905f13b768c065a75b73e3c68365e566087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLJN4J2I%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD3lSOWuoojuczLWuoY044supNTOLDNelsURFtHSrHZ4gIhANx4n2KiW6xACJcPvtedUG1sdb02Je1XJ5EVFqERJ9RaKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3XhQQ7yOhLZaqF1Eq3APk2cNED%2FQFgF7xX25rGAOU%2B7oGhRQXhNzBfZlWsSZnb6g2uQ24AOtkEkrElmY3WLuBz7xFhU4Cs7u1siKSt1Eu8qLmK6uboBeLJKfEuOr4hvCg%2FLFn1qdZ1Pps3eTdkthTTVhKyVfIN788TaTfGNjtQMEpsop6d5ReSFKgdZMRSgO56aUJUoQqyiOy1PoqtejXSrcttBelZ5JwuRuhOv9YQhI%2BO%2FQ%2FcWBv0d31prMHlUZjRcgoF9Jzm3QtmW5Otqvw7xHG1x%2BBVr2JOXOOu1CDL0YgDhvuwhcR4d9K1rJ15Hcb77CQzpdHAtthS8z5ZULMELLFJ%2FXkIHZw%2FHbZYspIqlpol3r3XaFr5U9CI8QrC9pUOzsKgpaFGYHPYCwIhGC%2BJjOz1B%2F%2B907xSDDq4CGc5xvjnZXmxECffTkscGzDMiz8L4n%2B68leExOlyNsxBBAmo%2BpLDOz5tKyHN%2FlDdVlhVMOk0ZQLijvrwtMeH8Up1Gnai9GHShGAYUhZiSyOJERtdAhynWUB3Qp6yuG01W6fcMEybf5bSxkq%2Fe694T8N3mXNjR7ul8MASN4jvr72lZSSx6bkzl39liuUBoZveGLMPtcV5zwAinzCY4lb%2FC5Ho%2B%2Bq7LVUT%2BiKmUA2ADCsk7%2FMBjqkAZjqR%2B40JgsjIDBs%2BQQpzPUyqgY4ed2c72DLXX%2FEeTPkwv9MunhM5vhn4M6XdsbGySunbOHn2PSt5xTgJHrWq6DoXssrNwXwpjyawhoiZFZY0clczig3JNYMp324jujRAe88fc%2BhX1ZdsEe8g84Yh2%2FD2YS4dmyYRzp2iISh5jqCBl3IJ5dnYLzLkqcqGb%2FS0mQURscvp4ltfUaVtq9cn8Ot%2BcgU&X-Amz-Signature=986c3c9fdd7f2a3a664b1b1df4dea5d022e509f9400e517455599aa179b024a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQVPVPGJ%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCICLkRX3EpZNxg3lZhFapdBih3cal6czcK8AVrk2J3996AiEApahSiwkjN%2FMQHwAFXUwI34couHTrnI7%2BbsMzOmV2yWcqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERRz5sdz%2BKxOYQfKCrcAwuS9zjaK0sMFyx4fhPgdiZUab7lhYKFEIwJnaxR0AMP6d2yWuYJiChy2b0D1RVn4jx8w8tOP673wo6wSFE2kz09qSkWsK%2Fx7agxo6TTwPVWqG005GdClmZCsgkHCfdeIr9n67VMQvrsSQ%2FhTMlSapvPFBMzTlk2GKh5jXxC9n023PpFrGoG30qHq9rIirwheCkROcWVLXKwlbesn%2BbwR8%2BT5nTISVG5MPtPDrwhJ0QxypA83NJAqW5d0zwho03QwVYdH9fESWfrFhdb7KabXzVSD8QsKcfjRdKd3nqdmUfcr%2FcHZACRtG4xLdFLQ%2FAJoZWSa0o%2Fw0YspnV2CCtTinCBv%2FM7nMUm%2BQZuJEGHc5SJDekE3SZiSgI35NAnNbPGGWXwZ0Aj1rxZMxYJoW8FI2Jp4vC48OKCENJlsVb2Za8W6VlWBn%2FOr2I7LtRguYiy0klQjRll2K3MpVHoRgLBN4IpUcuQs06h7zp8QtWg4lBncnh%2BbrXnkvLYgUFp4TXGRT%2FTRWyRahk2xNDFIDow8r2b%2BRh8b6sPzzg6mt8%2FqtSWFTeznsIgEW%2By7SHVHtIph%2B2RKk6182LQavpEEQ4PI57A%2BVcjDJR5X6iKmzvQjpwQPZMOeOy5l%2FwPonAXMN6Tv8wGOqUBFrme9Cch6Rd6MW1XZGQB%2BOG1Zj29veC%2BY7mLTt2GuES%2FufFMzVHUhLRWfiBImFRaJnU%2FXVg%2BLVmZ%2BKZgA9baQau%2FPJHz7I%2BcWiQ9w4qaqerxUnEvhLvoF8af%2B4zYPbbbEkoe2KjHcf2vZQZoA3sexJVrDMlbPVn3YIl6a0fACFOVnHqNDFop2HtApGKhlmHGgjPHrRZn8VRW6KK%2Fix9y5PH5BIR5&X-Amz-Signature=12eb5802d45ffb41c2a47e498d0a5037083b0dd69461320680a7becfe7f83bb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQVPVPGJ%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCICLkRX3EpZNxg3lZhFapdBih3cal6czcK8AVrk2J3996AiEApahSiwkjN%2FMQHwAFXUwI34couHTrnI7%2BbsMzOmV2yWcqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERRz5sdz%2BKxOYQfKCrcAwuS9zjaK0sMFyx4fhPgdiZUab7lhYKFEIwJnaxR0AMP6d2yWuYJiChy2b0D1RVn4jx8w8tOP673wo6wSFE2kz09qSkWsK%2Fx7agxo6TTwPVWqG005GdClmZCsgkHCfdeIr9n67VMQvrsSQ%2FhTMlSapvPFBMzTlk2GKh5jXxC9n023PpFrGoG30qHq9rIirwheCkROcWVLXKwlbesn%2BbwR8%2BT5nTISVG5MPtPDrwhJ0QxypA83NJAqW5d0zwho03QwVYdH9fESWfrFhdb7KabXzVSD8QsKcfjRdKd3nqdmUfcr%2FcHZACRtG4xLdFLQ%2FAJoZWSa0o%2Fw0YspnV2CCtTinCBv%2FM7nMUm%2BQZuJEGHc5SJDekE3SZiSgI35NAnNbPGGWXwZ0Aj1rxZMxYJoW8FI2Jp4vC48OKCENJlsVb2Za8W6VlWBn%2FOr2I7LtRguYiy0klQjRll2K3MpVHoRgLBN4IpUcuQs06h7zp8QtWg4lBncnh%2BbrXnkvLYgUFp4TXGRT%2FTRWyRahk2xNDFIDow8r2b%2BRh8b6sPzzg6mt8%2FqtSWFTeznsIgEW%2By7SHVHtIph%2B2RKk6182LQavpEEQ4PI57A%2BVcjDJR5X6iKmzvQjpwQPZMOeOy5l%2FwPonAXMN6Tv8wGOqUBFrme9Cch6Rd6MW1XZGQB%2BOG1Zj29veC%2BY7mLTt2GuES%2FufFMzVHUhLRWfiBImFRaJnU%2FXVg%2BLVmZ%2BKZgA9baQau%2FPJHz7I%2BcWiQ9w4qaqerxUnEvhLvoF8af%2B4zYPbbbEkoe2KjHcf2vZQZoA3sexJVrDMlbPVn3YIl6a0fACFOVnHqNDFop2HtApGKhlmHGgjPHrRZn8VRW6KK%2Fix9y5PH5BIR5&X-Amz-Signature=e19632a05f16868fdf7ae9e9a30de565faf5bb03821fe7203ca6d78d5c1abde3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLJN4J2I%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD3lSOWuoojuczLWuoY044supNTOLDNelsURFtHSrHZ4gIhANx4n2KiW6xACJcPvtedUG1sdb02Je1XJ5EVFqERJ9RaKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3XhQQ7yOhLZaqF1Eq3APk2cNED%2FQFgF7xX25rGAOU%2B7oGhRQXhNzBfZlWsSZnb6g2uQ24AOtkEkrElmY3WLuBz7xFhU4Cs7u1siKSt1Eu8qLmK6uboBeLJKfEuOr4hvCg%2FLFn1qdZ1Pps3eTdkthTTVhKyVfIN788TaTfGNjtQMEpsop6d5ReSFKgdZMRSgO56aUJUoQqyiOy1PoqtejXSrcttBelZ5JwuRuhOv9YQhI%2BO%2FQ%2FcWBv0d31prMHlUZjRcgoF9Jzm3QtmW5Otqvw7xHG1x%2BBVr2JOXOOu1CDL0YgDhvuwhcR4d9K1rJ15Hcb77CQzpdHAtthS8z5ZULMELLFJ%2FXkIHZw%2FHbZYspIqlpol3r3XaFr5U9CI8QrC9pUOzsKgpaFGYHPYCwIhGC%2BJjOz1B%2F%2B907xSDDq4CGc5xvjnZXmxECffTkscGzDMiz8L4n%2B68leExOlyNsxBBAmo%2BpLDOz5tKyHN%2FlDdVlhVMOk0ZQLijvrwtMeH8Up1Gnai9GHShGAYUhZiSyOJERtdAhynWUB3Qp6yuG01W6fcMEybf5bSxkq%2Fe694T8N3mXNjR7ul8MASN4jvr72lZSSx6bkzl39liuUBoZveGLMPtcV5zwAinzCY4lb%2FC5Ho%2B%2Bq7LVUT%2BiKmUA2ADCsk7%2FMBjqkAZjqR%2B40JgsjIDBs%2BQQpzPUyqgY4ed2c72DLXX%2FEeTPkwv9MunhM5vhn4M6XdsbGySunbOHn2PSt5xTgJHrWq6DoXssrNwXwpjyawhoiZFZY0clczig3JNYMp324jujRAe88fc%2BhX1ZdsEe8g84Yh2%2FD2YS4dmyYRzp2iISh5jqCBl3IJ5dnYLzLkqcqGb%2FS0mQURscvp4ltfUaVtq9cn8Ot%2BcgU&X-Amz-Signature=80247991a1ac8b932cf38d3fbdc0637e0ddbd77eeac59923517ae9a6a3bc7980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLJN4J2I%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD3lSOWuoojuczLWuoY044supNTOLDNelsURFtHSrHZ4gIhANx4n2KiW6xACJcPvtedUG1sdb02Je1XJ5EVFqERJ9RaKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3XhQQ7yOhLZaqF1Eq3APk2cNED%2FQFgF7xX25rGAOU%2B7oGhRQXhNzBfZlWsSZnb6g2uQ24AOtkEkrElmY3WLuBz7xFhU4Cs7u1siKSt1Eu8qLmK6uboBeLJKfEuOr4hvCg%2FLFn1qdZ1Pps3eTdkthTTVhKyVfIN788TaTfGNjtQMEpsop6d5ReSFKgdZMRSgO56aUJUoQqyiOy1PoqtejXSrcttBelZ5JwuRuhOv9YQhI%2BO%2FQ%2FcWBv0d31prMHlUZjRcgoF9Jzm3QtmW5Otqvw7xHG1x%2BBVr2JOXOOu1CDL0YgDhvuwhcR4d9K1rJ15Hcb77CQzpdHAtthS8z5ZULMELLFJ%2FXkIHZw%2FHbZYspIqlpol3r3XaFr5U9CI8QrC9pUOzsKgpaFGYHPYCwIhGC%2BJjOz1B%2F%2B907xSDDq4CGc5xvjnZXmxECffTkscGzDMiz8L4n%2B68leExOlyNsxBBAmo%2BpLDOz5tKyHN%2FlDdVlhVMOk0ZQLijvrwtMeH8Up1Gnai9GHShGAYUhZiSyOJERtdAhynWUB3Qp6yuG01W6fcMEybf5bSxkq%2Fe694T8N3mXNjR7ul8MASN4jvr72lZSSx6bkzl39liuUBoZveGLMPtcV5zwAinzCY4lb%2FC5Ho%2B%2Bq7LVUT%2BiKmUA2ADCsk7%2FMBjqkAZjqR%2B40JgsjIDBs%2BQQpzPUyqgY4ed2c72DLXX%2FEeTPkwv9MunhM5vhn4M6XdsbGySunbOHn2PSt5xTgJHrWq6DoXssrNwXwpjyawhoiZFZY0clczig3JNYMp324jujRAe88fc%2BhX1ZdsEe8g84Yh2%2FD2YS4dmyYRzp2iISh5jqCBl3IJ5dnYLzLkqcqGb%2FS0mQURscvp4ltfUaVtq9cn8Ot%2BcgU&X-Amz-Signature=545b195e77ca4338583b1c0996a858942b03fabaa547529554624f9aec245f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V54ZTU4%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCLUx6YCI27mm4Acuufes3kPSMjFWAWgS7y7ueLw6MiMAIgMeH9ANMcqIkPhTxRhN374B9Nakl2iskJ8M9BBF7q9AUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1sCHYSPhxwaFHGLyrcAwuDVuZ%2B7iRpRbiEMZoDeREnFUi2T8xGU7BT4%2BSBlIEHxUpNTYn8qVLMzQ7U7GZos%2B1grksVq4iWHUkGlJnjqaDD7YEWlvWtWi3X%2F%2FythH9XEJK3bbxIMUgsQAlQKhlcwLUOBpbwdkheK7rl557h9yq01tzrgCHbctg2HG82zRBP5EKMRCFq64u8rc0cIkqf18LbetnOdtLy0R7k9zyH7iK4xGSvarNQwNiMVO0dlHNzTP7sc4K%2F6ufl4348r8gjSOHFigCQckmPfjIkXsUvuR9gKZb%2B8%2B%2BC%2FDxcrkQJH%2FCaZEUZtJvNQPHgBAvDp6L3LGm4D5GE9QTTU8jO5MXk3tRAS1e3jDANELrIoibyP3NRduUPgIJoG5OEir4q8%2FmdMzKp%2BtULBnaiOJPqLfLrH8%2FsRN1SYGgp84uJ27X4EY7Nf5S9pR2rDnADMVMaiudebDvO7SNLFs2fVzhF%2BxTTzA%2B5mruUmPkV9bhItvT3BJwfI4jjwAABogbmBni1A6cSaUR%2F14OGX8ujFHEHpYYaqqd1Sgfei6cLyF0YogLcGSj5xKausjB4ZgLokCIcH5bK0716GD1eEiNkyM9PBjPAOuafNAQyBt6n9DtG7Zd%2BxZAWUxLQIXM9rTuCreteMIyTv8wGOqUBkg5ex7BpCSrDpFHHXuRDysOmbhyWDRnmVLVOG4aKkoWtLjWIs0wbXb8OOWbNoKP2UKWAlUzj2gwCuByhOqME9dtikEAAKojJZ3PGK3ELVtmhX0QB8UWFWWlozdDl92Lj4I2dx6FGoxA%2B5IWckl%2B757JLko%2F2I0TCtikY9hCWP9N0wv22WsavcvaGrvwuAfcUw79InJHeWnclvZtk1lukSxOq%2Bbku&X-Amz-Signature=87b34196c20d1fba84063a42b55fa83fcb5c81959f282c609dc5e5325d572e37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

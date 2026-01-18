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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EKPHUMK%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwzEH%2F8CS7DuBZ5v%2B0zgYM%2FZa3w9pI3U5guVUuHT4MgQIgcF6SBdNx6w%2B6%2BRsFpTIbe%2BbYgr0WPmuHRAwcvgs4YfUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDFKW7nhlwkKmJzTgtSrcA0xHTCPzO7RTCgJmcDP%2BSDtO3XHAQ5ZHJPWhxZI1N%2BMPIQ%2F3bjx4vhYWuLpBcZ7T4Tds9JK2qoZeAoQujtOE%2Fr7RpH5qOs7cXefURRjtx0uO36sigrG7cL8piKrfEObjNq9r0fZBclOuMJ5TQptbOezRNtq8kAMCSCVqPNRftM6cIPkTLktBwG%2F%2Bh%2BE3hp9u2J5pUh7fjUGFa0MiKyqd00n1nRF6D8%2FmO72n%2B%2B5Gz66IHVjnZzLQUOQh9cyt6cv%2F9cgPlJswGfd04AvKk1F9cQ7pTpswJz%2Fh88ZpiPdoWtQ1r1j8CAAxKg27YIrXA8HP5xmIObcefry0gc5skK1AW6Gt9ajYvPPxXqsaLklqZShfX%2BkD9WGDY1FHoGHMf6REif5WcFfJczY3LSzLbr%2FES%2FHCjS4L%2FWBsoXLs44jxqQK%2F53h0hp5SUp%2BFuNK4QIUN299Ik1Qn0vckqmOPSDo39G1OZWDxLUv%2BLi5gpaZrvyDWnhWteBSo%2FXUugM0OLuKdJAGxnhKGqKFzESbQ765S2S5lROLK%2BBAJUPKgt6KMNdUNUyCwsMkyBQWLaEpdNPZg51ySPCR7XrPl6wJeI2ha05La9%2F0%2BtJe19h6XJ%2F9XzSOQ5gutnlOUDym9zlIvMMWdsMsGOqUB%2BjpwY0I071nQMctHjpH7fo5%2FBBzKCB8NiUpMD0xjHue%2BC0sP49XLbNhwmrF9KDIa32KZB71usGYK5M1IXr1wi%2FTijQ15HHqzzvFoyxdRI%2Fzsish%2FxPWcTTTiMhoOMppZ8MSZm%2FaNqDwytkNdJl6hysTsrjfbJzABeyDM6DAtTkrBwq1dHei%2FQagd8pzT65ucGXT6bRwSTRUfmlnTckqptXFEERgO&X-Amz-Signature=1a403d6eda62f28d3cb91c0359a22841c5a61b2c0efba28876f852ffe081d64d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBSN35FZ%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP%2Bsn5bWL7OpQwrz5mu7pPd9YilLQ%2BSawdcE%2B%2FeAmEZAIhALjGeGkEk771abZTHxbwMkXWZuproMgMnPVdbLImUOL3Kv8DCHAQABoMNjM3NDIzMTgzODA1IgxjA%2BFa7BCOWr606nUq3APj6nyno8lXjkzKb%2BorMzJOgq7oUcuZrjG6pye9jGgoNegNk4z0Ulcf%2Bz4GiZU7iIo3Yb%2FU51Ij6Lmhi0aYhxXHlm6PAs7l3MJEftpdPgsapJl19sBE9JwMVXjFwhuT9%2BsVZ4ln0UDMMAsVoRHDGcSUnAS58Rb8cZqE6gYUCEgq0qmj2o2tWhV558Pu6QqvJ2WpxgwUcbJhndg%2FNOsrO%2BR41%2FK8%2F5KKvBjhEfppMT4yX53bXP%2F0RDGeGQUZ6BMynIK6obmdRmsZjIlV6IywVgoP%2FVIxljUd1Keb8nLrUQyRv50l5%2Fupu5qPjcOLxRHW9YAgd92kMO9EhHRoWaxXLETTcJCzN%2FI19t%2FROLCWRoJI1kOUULenB3C6c7MQG7wQfIMtcfNrUjqZ8nQecAE5ntgWgv3XlHvQWeYyhKZcLiwoS0Oq5SvaZT7q9S%2FHQWvLUjwIqD6f51z8eIPzunii7Q3eJko4Dmw1nr5Q9ke5LMPWuN2V2z2v5UlIbJPnpH0HRlCzW6E1fHisyWjFImKj0E1cpVV26QSEUAb1FFBSETXLcQqQMSwAfZ8wQkSYx1PJU1tBKZP3y%2F%2FUNosUTI%2FC96fdZWj%2FZiIRB6BPIGEn2nz8mEYaQz87n2erSUFqIjDDnLDLBjqkAe3JeTmP872LpSN0Snr0UTV6DPj5QCC%2BGerY10hnAnyT1JNXrzKmZhZqn%2FYTQOz5uaS6zGgboYuifKhnCxv6R2pyUBIZAXPN2wt%2B5qsQVdyufqQVTnZ0pZUIN4zfc9xQr9vNSaWWXQquuMiDRUKgCrTvwleH5V3MA85Aqcp77JMHj%2Fc5Ae6kYvJRxRoVq3waM03HFw7qDIEzTto%2FPUcLahdVtArY&X-Amz-Signature=1480b4fc96866be470f954f93c1e6134006de6be004769d7522f2bcbf857df2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DPI43YR%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEBZG9wONXGVw0jYxf%2Bio42IIYpSEMyuMmpFbZcDTuKQIgDA975bGojr6l%2BA5iLgzf9CUh8Ef4ysShkqrGgPYd6FEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEeVKk2hndP5ROUp1yrcA2Uyn%2BeZm6ZrEcgV9i7lGVxkSAzFPW1pb4Y7rJivSqZjYTyzQz5jSBkF2bxgYllk%2FBDeWx4sZhAJelvEEF%2B4YX1n8EwVUv7eAdejPEXg1aAr7AflSKF75YpBPatfTGQJIoqi5%2FFSuMm%2FGJZiFsiwXTdUDvMWeJenW7YjtHIn8qmgHCd1dD%2F3XhMxA0bb6YmIXEvT99FAdBS4VJHr0xYUWr1nTmhIPhhtuDhwssH6N0e64iRSBINmL1j6prC6smkNGGr9AkEatQW8ERm9rPw6UUrDFYcf8L%2FIgCnWymzf77CAXtOjaeEuLPJ5jUG54lPluCXn9t7cdE9kyN7HXtl%2B3d%2F0o2furHqgRV8wVdJn%2BkXg96CybX2hcvQ3RTxNRXBVQqCIRYvYab5AGwIaVp6utPhJLgpLSCqEybuit5r3ld01lUla%2BwGdbC3fsfAOiaOJj5AQE2u%2B4p1z5%2FRuZ4iPqtrL%2FIsjmQxea4Fh23rthqIyNLn%2FyHch6dWbmR%2BXBWaj4KDHF7kwsITZkJRslIA5bI6WN19xIp06TPCr79TKu14DtzJewO8bstMD1odKDKgUrJdSqUi8cPy3RVaOanwCBDfPmMe3ObMz6rQCmFFkQLrDrPU%2FxHlnrgWJKpQLMI6dsMsGOqUBOnFje3%2Fk7%2BY0QgJXR%2BRtQ0vlhhwLd6Xp%2BCUh%2BD3D1jir%2BBhc0%2BV18rccPx8F7ydWZC3%2BfOiC6zmlDf5v5pwhU2h1TEapidfZfwNvtNP5EBbdZ%2BxC69NW7cGxahE7zaIQdHyPJzxXeUcSVvJ83ZlicKQ%2FAygCHADHjcAfrP%2F6pcowFYkau5j%2BRfjm8f5Kbs%2Fo5B5tD7JIYrKFUosWI9Z5%2BXpVWsyf&X-Amz-Signature=b23b1c231db798f935aa7a2a2bb8eb0dad709e2929e32bbe314bea903acef8b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DPI43YR%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEBZG9wONXGVw0jYxf%2Bio42IIYpSEMyuMmpFbZcDTuKQIgDA975bGojr6l%2BA5iLgzf9CUh8Ef4ysShkqrGgPYd6FEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEeVKk2hndP5ROUp1yrcA2Uyn%2BeZm6ZrEcgV9i7lGVxkSAzFPW1pb4Y7rJivSqZjYTyzQz5jSBkF2bxgYllk%2FBDeWx4sZhAJelvEEF%2B4YX1n8EwVUv7eAdejPEXg1aAr7AflSKF75YpBPatfTGQJIoqi5%2FFSuMm%2FGJZiFsiwXTdUDvMWeJenW7YjtHIn8qmgHCd1dD%2F3XhMxA0bb6YmIXEvT99FAdBS4VJHr0xYUWr1nTmhIPhhtuDhwssH6N0e64iRSBINmL1j6prC6smkNGGr9AkEatQW8ERm9rPw6UUrDFYcf8L%2FIgCnWymzf77CAXtOjaeEuLPJ5jUG54lPluCXn9t7cdE9kyN7HXtl%2B3d%2F0o2furHqgRV8wVdJn%2BkXg96CybX2hcvQ3RTxNRXBVQqCIRYvYab5AGwIaVp6utPhJLgpLSCqEybuit5r3ld01lUla%2BwGdbC3fsfAOiaOJj5AQE2u%2B4p1z5%2FRuZ4iPqtrL%2FIsjmQxea4Fh23rthqIyNLn%2FyHch6dWbmR%2BXBWaj4KDHF7kwsITZkJRslIA5bI6WN19xIp06TPCr79TKu14DtzJewO8bstMD1odKDKgUrJdSqUi8cPy3RVaOanwCBDfPmMe3ObMz6rQCmFFkQLrDrPU%2FxHlnrgWJKpQLMI6dsMsGOqUBOnFje3%2Fk7%2BY0QgJXR%2BRtQ0vlhhwLd6Xp%2BCUh%2BD3D1jir%2BBhc0%2BV18rccPx8F7ydWZC3%2BfOiC6zmlDf5v5pwhU2h1TEapidfZfwNvtNP5EBbdZ%2BxC69NW7cGxahE7zaIQdHyPJzxXeUcSVvJ83ZlicKQ%2FAygCHADHjcAfrP%2F6pcowFYkau5j%2BRfjm8f5Kbs%2Fo5B5tD7JIYrKFUosWI9Z5%2BXpVWsyf&X-Amz-Signature=4a7d2cca5c0c5d6f7bd03f87ced980a690e183e4619139f01b6f9b05a1043f09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBSN35FZ%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP%2Bsn5bWL7OpQwrz5mu7pPd9YilLQ%2BSawdcE%2B%2FeAmEZAIhALjGeGkEk771abZTHxbwMkXWZuproMgMnPVdbLImUOL3Kv8DCHAQABoMNjM3NDIzMTgzODA1IgxjA%2BFa7BCOWr606nUq3APj6nyno8lXjkzKb%2BorMzJOgq7oUcuZrjG6pye9jGgoNegNk4z0Ulcf%2Bz4GiZU7iIo3Yb%2FU51Ij6Lmhi0aYhxXHlm6PAs7l3MJEftpdPgsapJl19sBE9JwMVXjFwhuT9%2BsVZ4ln0UDMMAsVoRHDGcSUnAS58Rb8cZqE6gYUCEgq0qmj2o2tWhV558Pu6QqvJ2WpxgwUcbJhndg%2FNOsrO%2BR41%2FK8%2F5KKvBjhEfppMT4yX53bXP%2F0RDGeGQUZ6BMynIK6obmdRmsZjIlV6IywVgoP%2FVIxljUd1Keb8nLrUQyRv50l5%2Fupu5qPjcOLxRHW9YAgd92kMO9EhHRoWaxXLETTcJCzN%2FI19t%2FROLCWRoJI1kOUULenB3C6c7MQG7wQfIMtcfNrUjqZ8nQecAE5ntgWgv3XlHvQWeYyhKZcLiwoS0Oq5SvaZT7q9S%2FHQWvLUjwIqD6f51z8eIPzunii7Q3eJko4Dmw1nr5Q9ke5LMPWuN2V2z2v5UlIbJPnpH0HRlCzW6E1fHisyWjFImKj0E1cpVV26QSEUAb1FFBSETXLcQqQMSwAfZ8wQkSYx1PJU1tBKZP3y%2F%2FUNosUTI%2FC96fdZWj%2FZiIRB6BPIGEn2nz8mEYaQz87n2erSUFqIjDDnLDLBjqkAe3JeTmP872LpSN0Snr0UTV6DPj5QCC%2BGerY10hnAnyT1JNXrzKmZhZqn%2FYTQOz5uaS6zGgboYuifKhnCxv6R2pyUBIZAXPN2wt%2B5qsQVdyufqQVTnZ0pZUIN4zfc9xQr9vNSaWWXQquuMiDRUKgCrTvwleH5V3MA85Aqcp77JMHj%2Fc5Ae6kYvJRxRoVq3waM03HFw7qDIEzTto%2FPUcLahdVtArY&X-Amz-Signature=321d7776055c730dfd75bd853646f0c9a4c036ff97cc6ebc9352e2c47611b85f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBSN35FZ%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP%2Bsn5bWL7OpQwrz5mu7pPd9YilLQ%2BSawdcE%2B%2FeAmEZAIhALjGeGkEk771abZTHxbwMkXWZuproMgMnPVdbLImUOL3Kv8DCHAQABoMNjM3NDIzMTgzODA1IgxjA%2BFa7BCOWr606nUq3APj6nyno8lXjkzKb%2BorMzJOgq7oUcuZrjG6pye9jGgoNegNk4z0Ulcf%2Bz4GiZU7iIo3Yb%2FU51Ij6Lmhi0aYhxXHlm6PAs7l3MJEftpdPgsapJl19sBE9JwMVXjFwhuT9%2BsVZ4ln0UDMMAsVoRHDGcSUnAS58Rb8cZqE6gYUCEgq0qmj2o2tWhV558Pu6QqvJ2WpxgwUcbJhndg%2FNOsrO%2BR41%2FK8%2F5KKvBjhEfppMT4yX53bXP%2F0RDGeGQUZ6BMynIK6obmdRmsZjIlV6IywVgoP%2FVIxljUd1Keb8nLrUQyRv50l5%2Fupu5qPjcOLxRHW9YAgd92kMO9EhHRoWaxXLETTcJCzN%2FI19t%2FROLCWRoJI1kOUULenB3C6c7MQG7wQfIMtcfNrUjqZ8nQecAE5ntgWgv3XlHvQWeYyhKZcLiwoS0Oq5SvaZT7q9S%2FHQWvLUjwIqD6f51z8eIPzunii7Q3eJko4Dmw1nr5Q9ke5LMPWuN2V2z2v5UlIbJPnpH0HRlCzW6E1fHisyWjFImKj0E1cpVV26QSEUAb1FFBSETXLcQqQMSwAfZ8wQkSYx1PJU1tBKZP3y%2F%2FUNosUTI%2FC96fdZWj%2FZiIRB6BPIGEn2nz8mEYaQz87n2erSUFqIjDDnLDLBjqkAe3JeTmP872LpSN0Snr0UTV6DPj5QCC%2BGerY10hnAnyT1JNXrzKmZhZqn%2FYTQOz5uaS6zGgboYuifKhnCxv6R2pyUBIZAXPN2wt%2B5qsQVdyufqQVTnZ0pZUIN4zfc9xQr9vNSaWWXQquuMiDRUKgCrTvwleH5V3MA85Aqcp77JMHj%2Fc5Ae6kYvJRxRoVq3waM03HFw7qDIEzTto%2FPUcLahdVtArY&X-Amz-Signature=6e74240bc9e6415fb0a1cf4b15d0e1b04428625aeb5d49e8ac10193efed5ffda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JKGESYF%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp%2FLGQYrfYYlMdNJiIkInRQSMENPItrn0kJ%2Fll2tUQnAIgHolwiuQbaKky6UmsnwpOgqxFcc0fQOJpTg69n7ygiDMq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDJX8aa0zmMdlGOgQSCrcA9m7I1UN9K4t0G2NRD3Q8O8k2PSEpTIXA4Ob2XKqi7apR6QyZwIREFRSrIT3hRWB7FCKEb4tCnmIIp0sUyynqnXIMRwzdTH7zsd7J8l8HbLKSoofmce%2Fl%2F7Pbl6Q3ZnSPjltCP%2F83IHis2sVg6YjmOUj%2BY%2FDC086Z7yOfUp%2FJuFAsj%2FvzzNMLHxrhC8dOrdASUi9U6xgTX1I30ucJqy6BGwZyli0WEEycsLBwVw6RG1wpw9XJjP65KoWo78VwX69y08T0J%2BOFczCBrT3CABaMfT4%2BRUwCNEHXfkdaFxYgLAdQSwo%2FyCON1zVr9aw3NmPySHxelp9CFjXtqiBcInXHqVjZ8lh8XJ8eqSCobKZOyh1AKVIgnptVSM81CesIdvBWK5EMM%2BR3eVgdgDe%2FR8CIViAdsMLi34DABvWuyORnarBPOO5gHzI9SMZARfrxoSHR%2BVg3BoJrTr630HC1nuEHLnv7qcoZTdhHSWLwF1VEFNbNPRR9RXe5uEeUH6w90lezplw6IYBw9yh2aSUiOQyYFoSPT417EQWv0OxvGo89Kq3cy3lBtC1P08nwEtvoj3R9WjyDkC9Zm4ERd0RlrVNquy5u%2B%2Bno%2Fh5hVCx3vTGIJFiePZGVZNvz3rp78mkMNacsMsGOqUB9p6j6taTv5LAw%2Fu8sIEpC%2BWfko7s2GGAG4ce4WszRVZaq78ltY9HvkcGudE6Bcp4UexbeOIoKE428v8pdi%2BNvU5A84jTkOXtZVaICyQyqR3Q4FOQNvKQ4%2FLmf1QGy1mkkIB0oH3JoNAxD05Dq%2FB5rcgcBE4WLKuS%2FYmWQf28vU6lNyd2wwsk3QbKHFge8Xo2LXdHZXwNvMbtCK9fbOGbfDwANL3b&X-Amz-Signature=e0930edbf9cffc9e9acddad5a33beffae93ff9c9d82bdbde588403fac3bd992f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

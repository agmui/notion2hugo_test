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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIP62HNT%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BH8tTkCaJ%2Fo7Le%2FzwIeoCVdLWO0EBiouaAZGsI1PCGwIgFWclSTt2n%2B1TvRuxACMPOpZkXQNJE9YI7VREUBacK70qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDomHInzvdHxRVSxKircA64%2FmAkS%2BGO%2BHENBrqKAWh5ZLHN%2F1D8Y6kN6zzk%2BpN2qQlBDVqwDC0hmkRth0F3T2Tp6%2F91CU%2Bio1iBy39%2B78jf9At4rRY7G7KWzsWF9k3nB%2BImMrPZrLRBiymvWqPcTP%2FA39bHzRWHTnWaLtpyt4MOZrC1CPGS%2FrIkiMSDN4M0QTdf5ErlvNbwUBRgyFY%2FTmblMy60aEYoBlzKC99tNPbFwhxDPuaY6zYqd9IUTLL5JcyjhmhXgdzXy%2FaV5Xu2GUtaj%2FEpvjEeH%2BCrojhy29L4JJTmx%2F1kpg9mdq9KBJAvb6F7wlHdomb3vqZ%2FWERAUWxlx%2BkOkmWKzA%2B6g2eiJPPYq20zwdvuQaOwMjxAsbmhe7csfZqAfAnc5MqrPtoeiD5KlnI0Jla%2Fs4YjJme0LhaIVEdTnSFY6GhDvWdus%2Bwf2eqIUxiaSskwKl%2FwwLxFdIlJTNnmCyRQxS%2BuKeZQfcmwsjPrJZ%2BZJ0j6kIstFmrsFsk%2FPQXmSiF7DqNurd7j67FXvcCar5%2BEv3wCf95DaGQu2tOze4rHeQKgVQBFVam8FtR%2Bze56BcIDsUhCxD1oYkp3eB0RZ1ViIZl4fzKdG5mZmC4HPd6LTqUu8N6tYGzVQC65Q43bSuq7eMIkZMI7Wh9IGOqUBGpb9sVkR7NU0kXVzkHpGQL933jlklPXc2kyQ5ieUyi94QLf6BjTz5x8OcqMPVi5utQU3epipYjc0qaebRrCY%2B%2Bf10l9H4QDgH31OqWhSJckJvAe%2BjMP4Y2SvwFWQ2g72g6eLh5mnEFdIYQWdymKY11ZWywvwvC7kuOWt5RxGOJ%2F7Y1QsZ4lSn%2Fle16o0U1NM08nlWFHu9nMHP%2F7wrNDeE640WiBz&X-Amz-Signature=c02a57e63eaef0b915a6edde38942d7d6f19ee984ffbaea63504f9660c99871c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3CYWLW%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDItE6A0Pq6yhXr63E6yj%2FQi%2BeKJv1%2Fnvh%2BUEKpEUiYuwIgbWXDTTOagzT5F2Ke%2FcXrbgW69i6Lm9xb5s52lz0IUKwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKg1j4wuckBunCNhqSrcA37rukui9eSX24uKJ0uhReYqFCQ4lKeP3LKY2Vzyh686vOzos2Msq7DOEB4yte64lucBxGYn4iQr3G13x8WLH4iMU%2B0Prst7YTh2hH9yqQn1JQfIqz22jm4ouR0lVPcbXnAtUmXluRC5dQrVHB0fFVqE2VlXLdhiYu%2BAd8bqe9XZC3NqJ7qSEKzWm%2FEQbvg0oHgxYmUpgLGRpa76RqHn1DjjBDfHUMWcVabCD3M1zlxcj2BYFeOY3jhg8mf%2Fwl7YzuRJ9loiPBrVN0jT7tNAMhIy55CAEP7GVtQzxK92gm%2BC%2FE7W4CzZJQfOkUOglLdCBDQIuLLIDuMUTvQGBcynR4ZUqFHvV9zWYq4chvvfQSMN3QhqxQeER7XX0B0%2FzlTQ0tDad2G3%2FNAuaG934og1G%2BaQ%2BLV6SoXmE3%2BmyKyBqhiSoYvs57VdOUsYOehEzJTYAQg2GwMBBKn%2Bx%2BxIt83CRxn1IBiyeiGdOkgXJNNzwLPptoZ4HcG3qiw7wVYL1z84dhlI5xYjmGD8SXGJfHPGXT9TG5h2ycMS04TpkglTA7cC2%2B700OEDvabF9GK0bK8VsUFTSJ4hg%2FrWpWfyMj9B2DbATsi6WxskFFK1DndllWKTmsjB6GeJTELjeqOGMKTWh9IGOqUBG%2F5xk4foMzyPhNx1y3jGQ2nz2gRbj9ZbrapH3AJA5dF7hkXJf6R1a2zoFl%2BIKIKSxNSx0jFk%2FuELbRuu7LlKyp8cvUzWWs84yMssY9cUKKUZhomVUimAfOjCaV75mBVoSs8C3fmaWc%2B6fXFp9MhhkfrhqiXipgsPIlnufOzbDqkxQusFlUZKXAQUDrJT7GPV8oeKiFdOHh7uWszAH3pm8qjNh7W7&X-Amz-Signature=8a006f69c94a10ebd2e28c98594e7f406641870cee9c7833bda590db0203316b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBPO73VR%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZRgwVmcV0weIDYDIrfFa%2FXAfXTEviwBDYCj86HRtU2AIgWRtzgEfPzzXCPHKOLa9B97AiqW0gnZLDrD10OF%2BOrfAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMMQxOZ4%2Fcp9styGSrcA3oAIgzohtxV%2FNmGaXVjZCi%2BA9AIqSjfSJufdu4OgGCzp1vDCV7X2ZcLm6ynQ9g3ypK2Em%2F%2BsjJWxK9XOmrt61UkliuHZEy3L3LGyBNOJYdX7RZGSeDSsP2yKdMC7BqHkomO9LyxCtmO92%2FAf0W8bCBzUGDlDuHqysZCTFUP9EgEHi3T36LCNlH0r6ccUoTYZoE%2FH7qMJEyhagZ%2FcKyc0u4GoebaNY9ETm2SNQQn79VgtWXFKg3Gh%2FuWgOXn8vsYQ7R17A99KC8C1Cz39eqH3krT9%2Bng7l1n9%2BA06Z87Jca0A7ltGZ3RuHKxLFQvL9QRMZxxDlCVJW7THuGbQKnh%2FLc2PQewxaDMhoNJbxIr61a6xM6caw%2B01z3blZhz%2FHAr7wDz%2FQV7rwEonnlnx8YcSxQXvyg4It3UOvsxUeQv%2BSmpL0AxuF83X9%2FIWSaLHjlnwKdWk9OtMX6lIfRZdW5qrX%2FzFI0hpR7iRY%2B1SQJSdbpilsuQIsZgDgsxjyhFtkWLQdcQk29Nc1kBAXL5YYeObVoyj5hFuqKrXs%2BlJlpCLuvSstMYBdXwY70xFWnJ8XW84bEkuLaIgwvuvEgdjnoXA%2FYugHhTqXnD7stf%2BO7b5HYFJbBQaLhbh%2B%2FnODjXMLvYh9IGOqUBw%2FBRlR9HIVFJA%2B9WYxHtTZPICfdWp5%2B1dkCePGa1h1KICWX9lUQpYtotSDapi2%2FvdLukKRL%2F%2BJL6SNDoCOCDR%2B8FYaMIt%2BavkqDhHZkqLIyG5jZBUqAsW2OAtj1%2BMsz39gWJOABxc1q3s8AA2YaSJsXXM5YeofXNPALkW9DoWrYvMPVEXrLR1vUxJm6fsbjgT71qiQXBbX7ZdQw1H7HVsl9vak2H&X-Amz-Signature=fe9c234b8e2d25430de713818cca7c6b71d68de69b212b7a33ac19f763a46845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBPO73VR%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZRgwVmcV0weIDYDIrfFa%2FXAfXTEviwBDYCj86HRtU2AIgWRtzgEfPzzXCPHKOLa9B97AiqW0gnZLDrD10OF%2BOrfAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMMQxOZ4%2Fcp9styGSrcA3oAIgzohtxV%2FNmGaXVjZCi%2BA9AIqSjfSJufdu4OgGCzp1vDCV7X2ZcLm6ynQ9g3ypK2Em%2F%2BsjJWxK9XOmrt61UkliuHZEy3L3LGyBNOJYdX7RZGSeDSsP2yKdMC7BqHkomO9LyxCtmO92%2FAf0W8bCBzUGDlDuHqysZCTFUP9EgEHi3T36LCNlH0r6ccUoTYZoE%2FH7qMJEyhagZ%2FcKyc0u4GoebaNY9ETm2SNQQn79VgtWXFKg3Gh%2FuWgOXn8vsYQ7R17A99KC8C1Cz39eqH3krT9%2Bng7l1n9%2BA06Z87Jca0A7ltGZ3RuHKxLFQvL9QRMZxxDlCVJW7THuGbQKnh%2FLc2PQewxaDMhoNJbxIr61a6xM6caw%2B01z3blZhz%2FHAr7wDz%2FQV7rwEonnlnx8YcSxQXvyg4It3UOvsxUeQv%2BSmpL0AxuF83X9%2FIWSaLHjlnwKdWk9OtMX6lIfRZdW5qrX%2FzFI0hpR7iRY%2B1SQJSdbpilsuQIsZgDgsxjyhFtkWLQdcQk29Nc1kBAXL5YYeObVoyj5hFuqKrXs%2BlJlpCLuvSstMYBdXwY70xFWnJ8XW84bEkuLaIgwvuvEgdjnoXA%2FYugHhTqXnD7stf%2BO7b5HYFJbBQaLhbh%2B%2FnODjXMLvYh9IGOqUBw%2FBRlR9HIVFJA%2B9WYxHtTZPICfdWp5%2B1dkCePGa1h1KICWX9lUQpYtotSDapi2%2FvdLukKRL%2F%2BJL6SNDoCOCDR%2B8FYaMIt%2BavkqDhHZkqLIyG5jZBUqAsW2OAtj1%2BMsz39gWJOABxc1q3s8AA2YaSJsXXM5YeofXNPALkW9DoWrYvMPVEXrLR1vUxJm6fsbjgT71qiQXBbX7ZdQw1H7HVsl9vak2H&X-Amz-Signature=e815ba01dc529a3742956898a6a65f52f80ffdc3bceb624ba938e8aec916f76a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3CYWLW%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDItE6A0Pq6yhXr63E6yj%2FQi%2BeKJv1%2Fnvh%2BUEKpEUiYuwIgbWXDTTOagzT5F2Ke%2FcXrbgW69i6Lm9xb5s52lz0IUKwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKg1j4wuckBunCNhqSrcA37rukui9eSX24uKJ0uhReYqFCQ4lKeP3LKY2Vzyh686vOzos2Msq7DOEB4yte64lucBxGYn4iQr3G13x8WLH4iMU%2B0Prst7YTh2hH9yqQn1JQfIqz22jm4ouR0lVPcbXnAtUmXluRC5dQrVHB0fFVqE2VlXLdhiYu%2BAd8bqe9XZC3NqJ7qSEKzWm%2FEQbvg0oHgxYmUpgLGRpa76RqHn1DjjBDfHUMWcVabCD3M1zlxcj2BYFeOY3jhg8mf%2Fwl7YzuRJ9loiPBrVN0jT7tNAMhIy55CAEP7GVtQzxK92gm%2BC%2FE7W4CzZJQfOkUOglLdCBDQIuLLIDuMUTvQGBcynR4ZUqFHvV9zWYq4chvvfQSMN3QhqxQeER7XX0B0%2FzlTQ0tDad2G3%2FNAuaG934og1G%2BaQ%2BLV6SoXmE3%2BmyKyBqhiSoYvs57VdOUsYOehEzJTYAQg2GwMBBKn%2Bx%2BxIt83CRxn1IBiyeiGdOkgXJNNzwLPptoZ4HcG3qiw7wVYL1z84dhlI5xYjmGD8SXGJfHPGXT9TG5h2ycMS04TpkglTA7cC2%2B700OEDvabF9GK0bK8VsUFTSJ4hg%2FrWpWfyMj9B2DbATsi6WxskFFK1DndllWKTmsjB6GeJTELjeqOGMKTWh9IGOqUBG%2F5xk4foMzyPhNx1y3jGQ2nz2gRbj9ZbrapH3AJA5dF7hkXJf6R1a2zoFl%2BIKIKSxNSx0jFk%2FuELbRuu7LlKyp8cvUzWWs84yMssY9cUKKUZhomVUimAfOjCaV75mBVoSs8C3fmaWc%2B6fXFp9MhhkfrhqiXipgsPIlnufOzbDqkxQusFlUZKXAQUDrJT7GPV8oeKiFdOHh7uWszAH3pm8qjNh7W7&X-Amz-Signature=7ab2e39b0cde9edf9f71ef88f1133469a5810755a1f3371d6663bed1061068b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3CYWLW%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDItE6A0Pq6yhXr63E6yj%2FQi%2BeKJv1%2Fnvh%2BUEKpEUiYuwIgbWXDTTOagzT5F2Ke%2FcXrbgW69i6Lm9xb5s52lz0IUKwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKg1j4wuckBunCNhqSrcA37rukui9eSX24uKJ0uhReYqFCQ4lKeP3LKY2Vzyh686vOzos2Msq7DOEB4yte64lucBxGYn4iQr3G13x8WLH4iMU%2B0Prst7YTh2hH9yqQn1JQfIqz22jm4ouR0lVPcbXnAtUmXluRC5dQrVHB0fFVqE2VlXLdhiYu%2BAd8bqe9XZC3NqJ7qSEKzWm%2FEQbvg0oHgxYmUpgLGRpa76RqHn1DjjBDfHUMWcVabCD3M1zlxcj2BYFeOY3jhg8mf%2Fwl7YzuRJ9loiPBrVN0jT7tNAMhIy55CAEP7GVtQzxK92gm%2BC%2FE7W4CzZJQfOkUOglLdCBDQIuLLIDuMUTvQGBcynR4ZUqFHvV9zWYq4chvvfQSMN3QhqxQeER7XX0B0%2FzlTQ0tDad2G3%2FNAuaG934og1G%2BaQ%2BLV6SoXmE3%2BmyKyBqhiSoYvs57VdOUsYOehEzJTYAQg2GwMBBKn%2Bx%2BxIt83CRxn1IBiyeiGdOkgXJNNzwLPptoZ4HcG3qiw7wVYL1z84dhlI5xYjmGD8SXGJfHPGXT9TG5h2ycMS04TpkglTA7cC2%2B700OEDvabF9GK0bK8VsUFTSJ4hg%2FrWpWfyMj9B2DbATsi6WxskFFK1DndllWKTmsjB6GeJTELjeqOGMKTWh9IGOqUBG%2F5xk4foMzyPhNx1y3jGQ2nz2gRbj9ZbrapH3AJA5dF7hkXJf6R1a2zoFl%2BIKIKSxNSx0jFk%2FuELbRuu7LlKyp8cvUzWWs84yMssY9cUKKUZhomVUimAfOjCaV75mBVoSs8C3fmaWc%2B6fXFp9MhhkfrhqiXipgsPIlnufOzbDqkxQusFlUZKXAQUDrJT7GPV8oeKiFdOHh7uWszAH3pm8qjNh7W7&X-Amz-Signature=39aeb545bf6eec554bd3b077aab5969931830e1994736f05d17df240deb8eddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TI4KASB%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2O4FR0aqRVNcrFYMZZfyVpQd%2Fhrlx4d%2FLbdl%2FC%2B6%2FZAiEAgL50cA5eO2bfZL1uBRr5MlBiG1qI9aFZlv5BpWgKlPwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPO9U7tRz1%2BF%2F3dX%2ByrcA2AtHOglzI7Per0nYUg%2BLD%2BqgLsYvRWG8Ktjo86I0qTcZvaRosj9FnsN1aZkfxAelOmU7Vmj6SFvCKGcoke4OacrpYrDBxWr12WA5dn%2Fe7LrR1%2FzA%2BXJLql%2BclKA5fCxgAopxb5KIgwDmgs6Yz9rbx246HNGx2ZHnXhYOYY%2FVRwgEwoo4FwpO3Z%2B%2Bwxj4urGDZeQIGIWd9%2FlxWZBOeUGdkr2SFvMmuhKXKFDA6u0qXVbqAYd0B6dg1AorKihPxHoreFrWfB30Xv%2B8zZNDHmsoWxTkX30Cbsldmp1Ghp6koDNWab8E77wKdUmxP6%2BQYBGHm9KnH0camcgH1ORAOAnrtidj7QhD0mUW0oLMt4%2B%2F6fr6gFnivqW%2Bd0CEs1qYRpx7Bn%2Ff7JL7sa8f5Vu37MFyUa9YzDnP1ifTONVZJ%2B6Mu%2F2F%2F6I3xO5JxhTE%2BY4v215L3vY7g4OwKFbyLG%2BPiS5tnp0G503rbFmqOSC5xrFuRA9E6MZqQlXpZrw2hnTWBEam7IHXV32JmXaSEcOHpbekXbDePt3tEqp7%2FiODNInW4dKqEcOupb47S7ddGtnbl7zgLf10FYMuDOFB8nHvcWPFL%2F260gmHLXyf297drgHOZGRf0dhMf9vh22y7XPmMPHVh9IGOqUBoQlIObd7pD8%2FxXS2e9WCyzM%2BYCAd72oXCqLhiNC%2BoLBChW9S1z9LRtEQgAcAWz8Ur0rsTyaTTl57Mn%2F6I2w2UkZtXJwYkBWK060YS9rdtJYVVpDr6oFZBkjTfNVUNjbHDHfaqWHx%2BAaSz8y6EiZyC6Lqsq80azyexvVx%2F0iArcbb4EOxESziisvVpq%2FuTAjOOMO9ohsnsWfU7oQbpapLQmPa0Nl%2B&X-Amz-Signature=70a6b5709c819c95e29a706dd5f4aa3ff368afbd975543ce2320b7cbefdf0d51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

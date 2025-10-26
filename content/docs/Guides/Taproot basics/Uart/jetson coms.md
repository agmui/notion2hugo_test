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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7P4BVHB%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDI86lQNus2dO8QujXQ9g%2Fb9ICQ5qfHT%2B8U1OWM7BXsIAiAtY4pL6HwEwmEIh840vdjt6Sd6uVZP%2B2js7NB9gGYxXyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4lH5Ds%2BK3KMvfGJJKtwD0pPukpOqcZc%2FQAZCfbvSni%2FjA9%2FUlf5y%2BnJkU7q2EXtIvQ%2B38ozyl5gtOgIDQttVux0%2BnvhMG6YYBlZNQMN2bsDE6P7P8O6ARMuPvPsuT6fN%2Fc0%2FBbfGGRMIPqCGMjF4L311uYzGiubNucz4rgmn2k2SQLrRntq7jikJoGtmJewWI8oN5flIde0iya4YI0dvnDnjv5G9uiIjewmv0meiwKEBrPIPhSSeuG82O22oRZsCY4ePhW4Du2%2FuiF8VOB37bIbVKRNK6cFfQz9OG317NYxleggCdiKdkAfnXrRVES7Rz9cjU1pjgS96o9%2F0oBcgLVIYv%2BKXMU8Cp6NL5z%2B%2FhYlBEARmE1AQzBz6dPRzCYKRt8rRpPSxNQt9NoL%2FpMno1LEARTFo%2FxqgHUEmj%2Bv6iq0IZVNVpyXFgemb0pIyb5%2FUC0ddGa4hfEN3V6PPhO6zW8NzfVH5VDdKotlYwxcVRuNFygzCGKdRY3XSd2kMZYoWkz6jXGDOezafFVDAjhY%2BcUAHkSBJtyv%2FP67OPnfj7W%2B7nUE6X%2Fryf%2FJoXIvhErPbfl6%2FSxTgC14rqBQjb3oLtCcRahnx%2BUfJcG4B%2F4YSCdnS86Yd7yHZ1L4QNIN5v9nbPFG1wJ0rEQkefR0wnqv1xwY6pgG78NLwZesNvdHJ3jvwGZt%2Blxa5W09WS%2Fx8Cgi8T6f%2B5wEhjGlF3Xsg%2BMPLnYntOa71hBBgUy3IE9J2FzVGISdofJj5gCGd5e09RLfSXh5KWTd1uc9lprYU4CBqnZD0R7JW%2F6mID9VsNQ0Jky0FrSBXHiwFoT4F9Ft00678YvgK1xIhXK%2ByqKVXuXmwfWfj0ED3YeKQS2ew%2F3OnX9N84reGtzIfenth&X-Amz-Signature=39b07ecf40c45bbfde449bd33bdb626dc3014d669b6b4476e2234aff1ca51384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTC4ODEQ%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1l0paJPcRUqfwR3otE0EWdGUsj1ZEW8XQYsndrfQs1AIgTBtIjq6smI%2Bwq6c2UlVk%2Fl%2FjrJudm2AnYY6%2BGZIz65AqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyYkeXEgj63AQdkxSrcAwXQb0jemYPCFlQ3S6wlyMTQUFn742jMAqOiWfbsqdM6jNQbt2Ybak9yJE8Zszx8UGU8khVwXsZyZ9uvENWhowSGWX0WtxNhkcSPMqYqXcK41XTHHyAkrG8Vp6lb%2F4Jr4B2iVJQPGwCOE9dt9hL4SPhmJNZfjiNJ%2FWWNyroD%2BftoHaImAl7WE8gtOL7IEDEF%2BZsGJ26UfKk4yEp9rraqiSj8nU1102SU6HdJ835KRK06liCMg3vneXNxTlNn9I%2B8gOgzVOvkhBXp6ulHhUkY8LSTe14fBrGq2P5q9DrOWW7h5hKBPcDkMvKnGX8D0eOZEard6E5YkDrPJLYjbZRfFUTM0EM%2BuWuBbXHdZWBztUYiPbszeanMByvRrUm8qLUxS6Rktv8hGv9FlSbtMvAT2c%2FONGUq7uTCab%2FQHFsSLtEtDctK2GIgodP0gmTGahcPGMIY%2BTtsMamI6gE54AuiTsFzidUXpWrNVu8elYZj7NrxTUjSWhLaODJ6YmmN6llN7k3zwXvqi00%2BuOVWz%2B9GUzhtyVjEqJtgCiyuJqmGdRXm%2B%2FQYur61FfH3kEZfUR%2BP9L%2FbDXbiskBqtq5vxpxUn08CQXDGedXX2lMZzpB4lZu00hcHnSDsHZnMZgAuMLuq9ccGOqUBO5%2BykOZ0hcWB%2FEepX9TQIsIg8vuWmvNwGfdq%2BKLb43QS7hL%2BZR%2BkMXasNdZDyWGFV2wWNPF7FjaXdb6nuLZtivjvBW%2FJbbbBjKY0CZp%2BfYuLpzXkQZItU1hww9dLDEHKUK4xY2IcLfeJRq4cZyV9c%2FhLBPGLZnMQPmoisx9j5NNzzG%2FsRpSIhbE8WcV5un%2B2q0SsNCF%2Fys0YLIZwbJPCd1dON2iI&X-Amz-Signature=9a03e98d36a585c41653842928f1a18257d330db95fe9c9b43cbc9795cafc6d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P7TDJH7%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8sjXdr%2Bbf55Vxrw%2BTn5mQUTvbGSbVRYj4ZwFFO%2BYLdgIgZQelMse%2F1B0MUFD%2FN2r7h3JngnYkOW2SdUTr3bfhLvYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI9RoXG1PDFFd9DmRSrcA7JiZHREz%2B4SOByWZ0Qcvp4VntJ6R%2FJSX0PwavAUMUds%2FhYYAwFqrdyz%2B%2FFHV6XS7Xy6uyiDRpTrLPTUqhvmzxqH1%2Bcsis7RbD3xQ55tZNSV5jTauMgVenLLpah8R%2FqBaGZUy33QRSWOwtPIgoHWk3z4bcy3wFZPrRPLH8EuzfGODrovz%2BtxpyBZJugbThY8r%2FdTwrG3PlcYCkjw3NVoUd7lMoSQIFaR7JOS430wt3DW9BSpz4Nwu3XN3qlsbeJkJpVGE2QBPYybw%2F5tRNnfGjJXhPuHRZNwk5BMFNb8IEpv2yZ8YN%2BxMCBWtSXT0fOTf1HLUhRAlUP6GtZmUeHVVH7GmTzWB72i8%2BL3tUaU%2F3C753JRJfJvf7yO9fiE8i66FgPTwVVsO9TJo9VdpEOMx3ckalYpKuczOkF5ju7Q25CgoxIm%2BVz3EqY5YLgt5k2fPhcmjI05ge2ImqdlnuGx1sfwORd6EmM5LwyxYzU2A7%2FGs%2Bp9M%2F99Ru5xjw3viZdYFvwnETvl%2F1D4v7DgXA13B19%2BA0izVVBn%2BXqJK%2BMi5OgNEYPgWJQ4mLAV0MUiKem4zhK8wijFlpgcSKEuD7cyA8dHXia68a0Lj5kK61c2ODCNBJ7Sh%2Fj95V0Pn6BbMI%2Bq9ccGOqUByno7k2Rt2ZSfkWo3xdkwrObFeSUb3n7h8XsNiT%2FyTLk9NOHPFbutIo0mEoC%2FtKOLpi6FhEb93xy2%2FYenQa20gBlzrXrfpQeLvhzSSphv3v6vsBIqpMjlv68COmrVxTDxKxQnv8QfilUuRwS9xi6fIALqyb5RycpLWvwV%2BqALLl03RA2LXnbzS%2BuTQiM8QS7Wj16SnLn8gVdQtZB6EfA1viLFpzJk&X-Amz-Signature=5b7e4c15ee2b8bcce7dd3d36af9f5818f1e49af58084869bd0fb90cf1c71ccfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P7TDJH7%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8sjXdr%2Bbf55Vxrw%2BTn5mQUTvbGSbVRYj4ZwFFO%2BYLdgIgZQelMse%2F1B0MUFD%2FN2r7h3JngnYkOW2SdUTr3bfhLvYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI9RoXG1PDFFd9DmRSrcA7JiZHREz%2B4SOByWZ0Qcvp4VntJ6R%2FJSX0PwavAUMUds%2FhYYAwFqrdyz%2B%2FFHV6XS7Xy6uyiDRpTrLPTUqhvmzxqH1%2Bcsis7RbD3xQ55tZNSV5jTauMgVenLLpah8R%2FqBaGZUy33QRSWOwtPIgoHWk3z4bcy3wFZPrRPLH8EuzfGODrovz%2BtxpyBZJugbThY8r%2FdTwrG3PlcYCkjw3NVoUd7lMoSQIFaR7JOS430wt3DW9BSpz4Nwu3XN3qlsbeJkJpVGE2QBPYybw%2F5tRNnfGjJXhPuHRZNwk5BMFNb8IEpv2yZ8YN%2BxMCBWtSXT0fOTf1HLUhRAlUP6GtZmUeHVVH7GmTzWB72i8%2BL3tUaU%2F3C753JRJfJvf7yO9fiE8i66FgPTwVVsO9TJo9VdpEOMx3ckalYpKuczOkF5ju7Q25CgoxIm%2BVz3EqY5YLgt5k2fPhcmjI05ge2ImqdlnuGx1sfwORd6EmM5LwyxYzU2A7%2FGs%2Bp9M%2F99Ru5xjw3viZdYFvwnETvl%2F1D4v7DgXA13B19%2BA0izVVBn%2BXqJK%2BMi5OgNEYPgWJQ4mLAV0MUiKem4zhK8wijFlpgcSKEuD7cyA8dHXia68a0Lj5kK61c2ODCNBJ7Sh%2Fj95V0Pn6BbMI%2Bq9ccGOqUByno7k2Rt2ZSfkWo3xdkwrObFeSUb3n7h8XsNiT%2FyTLk9NOHPFbutIo0mEoC%2FtKOLpi6FhEb93xy2%2FYenQa20gBlzrXrfpQeLvhzSSphv3v6vsBIqpMjlv68COmrVxTDxKxQnv8QfilUuRwS9xi6fIALqyb5RycpLWvwV%2BqALLl03RA2LXnbzS%2BuTQiM8QS7Wj16SnLn8gVdQtZB6EfA1viLFpzJk&X-Amz-Signature=589e7b993d182f9ae2a400600261bfd03acbdeb9d8b1da05f420c50ecb9409f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTC4ODEQ%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1l0paJPcRUqfwR3otE0EWdGUsj1ZEW8XQYsndrfQs1AIgTBtIjq6smI%2Bwq6c2UlVk%2Fl%2FjrJudm2AnYY6%2BGZIz65AqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyYkeXEgj63AQdkxSrcAwXQb0jemYPCFlQ3S6wlyMTQUFn742jMAqOiWfbsqdM6jNQbt2Ybak9yJE8Zszx8UGU8khVwXsZyZ9uvENWhowSGWX0WtxNhkcSPMqYqXcK41XTHHyAkrG8Vp6lb%2F4Jr4B2iVJQPGwCOE9dt9hL4SPhmJNZfjiNJ%2FWWNyroD%2BftoHaImAl7WE8gtOL7IEDEF%2BZsGJ26UfKk4yEp9rraqiSj8nU1102SU6HdJ835KRK06liCMg3vneXNxTlNn9I%2B8gOgzVOvkhBXp6ulHhUkY8LSTe14fBrGq2P5q9DrOWW7h5hKBPcDkMvKnGX8D0eOZEard6E5YkDrPJLYjbZRfFUTM0EM%2BuWuBbXHdZWBztUYiPbszeanMByvRrUm8qLUxS6Rktv8hGv9FlSbtMvAT2c%2FONGUq7uTCab%2FQHFsSLtEtDctK2GIgodP0gmTGahcPGMIY%2BTtsMamI6gE54AuiTsFzidUXpWrNVu8elYZj7NrxTUjSWhLaODJ6YmmN6llN7k3zwXvqi00%2BuOVWz%2B9GUzhtyVjEqJtgCiyuJqmGdRXm%2B%2FQYur61FfH3kEZfUR%2BP9L%2FbDXbiskBqtq5vxpxUn08CQXDGedXX2lMZzpB4lZu00hcHnSDsHZnMZgAuMLuq9ccGOqUBO5%2BykOZ0hcWB%2FEepX9TQIsIg8vuWmvNwGfdq%2BKLb43QS7hL%2BZR%2BkMXasNdZDyWGFV2wWNPF7FjaXdb6nuLZtivjvBW%2FJbbbBjKY0CZp%2BfYuLpzXkQZItU1hww9dLDEHKUK4xY2IcLfeJRq4cZyV9c%2FhLBPGLZnMQPmoisx9j5NNzzG%2FsRpSIhbE8WcV5un%2B2q0SsNCF%2Fys0YLIZwbJPCd1dON2iI&X-Amz-Signature=06ca0932047b6d46e348b4f1193d0664dc49c54ed35deda4df7c04d3c68f272d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTC4ODEQ%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1l0paJPcRUqfwR3otE0EWdGUsj1ZEW8XQYsndrfQs1AIgTBtIjq6smI%2Bwq6c2UlVk%2Fl%2FjrJudm2AnYY6%2BGZIz65AqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyYkeXEgj63AQdkxSrcAwXQb0jemYPCFlQ3S6wlyMTQUFn742jMAqOiWfbsqdM6jNQbt2Ybak9yJE8Zszx8UGU8khVwXsZyZ9uvENWhowSGWX0WtxNhkcSPMqYqXcK41XTHHyAkrG8Vp6lb%2F4Jr4B2iVJQPGwCOE9dt9hL4SPhmJNZfjiNJ%2FWWNyroD%2BftoHaImAl7WE8gtOL7IEDEF%2BZsGJ26UfKk4yEp9rraqiSj8nU1102SU6HdJ835KRK06liCMg3vneXNxTlNn9I%2B8gOgzVOvkhBXp6ulHhUkY8LSTe14fBrGq2P5q9DrOWW7h5hKBPcDkMvKnGX8D0eOZEard6E5YkDrPJLYjbZRfFUTM0EM%2BuWuBbXHdZWBztUYiPbszeanMByvRrUm8qLUxS6Rktv8hGv9FlSbtMvAT2c%2FONGUq7uTCab%2FQHFsSLtEtDctK2GIgodP0gmTGahcPGMIY%2BTtsMamI6gE54AuiTsFzidUXpWrNVu8elYZj7NrxTUjSWhLaODJ6YmmN6llN7k3zwXvqi00%2BuOVWz%2B9GUzhtyVjEqJtgCiyuJqmGdRXm%2B%2FQYur61FfH3kEZfUR%2BP9L%2FbDXbiskBqtq5vxpxUn08CQXDGedXX2lMZzpB4lZu00hcHnSDsHZnMZgAuMLuq9ccGOqUBO5%2BykOZ0hcWB%2FEepX9TQIsIg8vuWmvNwGfdq%2BKLb43QS7hL%2BZR%2BkMXasNdZDyWGFV2wWNPF7FjaXdb6nuLZtivjvBW%2FJbbbBjKY0CZp%2BfYuLpzXkQZItU1hww9dLDEHKUK4xY2IcLfeJRq4cZyV9c%2FhLBPGLZnMQPmoisx9j5NNzzG%2FsRpSIhbE8WcV5un%2B2q0SsNCF%2Fys0YLIZwbJPCd1dON2iI&X-Amz-Signature=56dee0205e23d22c5eaddd1e0cb83ae507ef1f6b83bad87bd1ad2e22408eded0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN5ZLHK5%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCgeoi8Ugp0MKNcYxHAiEbms6nTG%2BZ8iHEEm77dDijGAIhALOb2J9bpGR3vNZGiAGKnUfqk38dXK4LbVaqedv7ZypfKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL3ZRsk9e%2FYC1SBggq3AOgMKdjAFw%2F4BLaUNyHODjDVaegXIfI6vKMONt9wrU0mJrf%2BkzWUUQ2lOEufOoDyyX6X6m%2FS6Rflwjqlc3SGbPyaXJF2d2JJmLTKRcmaU4NATixRyscx%2F0zYhKyC9e5p4Dt8mz1YK0u5fAiRTPrmwZb3D7d%2ByPUotEfNKMROPEgskL7RUnCTyaDrP3A2SCWLqWC%2FtERkzYF%2F60BqheHYZCo7QCE%2FCCjOqbtSbT9OVjK3FXZ5l%2F4EVKip82TbubU6z4619MIvmmODlol28rYHLUjv0lyDo5s83PAeXlk8u1XG12prQPud4fWcxIU7xPA0%2Fj%2BFlpGEY1wo4xM5jMw4vgzABafJ3TYugppEb1V51WqY3R2qDz3e0edUfFedoNuYd0Z9EGBB2NyOmIUsW4BZL7A2TkzqJSfB5dIeycPqgV3q9ne0jXhc2aUlnAHb%2F8uYjdheqs%2BhfYpXDYjvXs7lpbwV19ax6NnaqtpTlEcyN6ojWKyttQWtN%2FODydXAKdYZmQj6wjNacMvC6obyn%2FnGj0RI7IpHvqnT1NFan7YEzlJOex%2BHdI31GpZe%2FZzCcpIyQMKrLAuaHWHSTW77RFoeWkx7M21Bzf7CDa0QXgzH9vcaHIzSNqB2itD2xIgVzDwsfXHBjqkAc9QD%2FxPuj0H0i%2BVqTC8zawxfME4h9He2QjDREKzQJtztV4XwLBKGMD1pm17dPlraUQZjh0ECuCZd6NJY0ldfFgZJlpBCwNWYFgAKId48xH60RYkGZpzPur6oxMguZHseFe1aJ2j1%2FW9AX2Uqdsu2SAkaCXeXNrjcmgIy5PArA5xiLJ7uRV5wO5uRUBaiRsAGDv0m9YcUZBcZw9X%2Fm95bc3SwHyB&X-Amz-Signature=223dc62495de548d8ee8850a40227499d4d0686310266eb7a6a1dc3b94339fe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

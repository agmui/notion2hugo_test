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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB765C7V%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc2F7YjxGe3M2LKuq0r8XgZQ%2BEiMIIYYexMqQNvp1PMgIhAJI3aSrfZQWRPLvt5xcmy1I5Tx%2FL9xf3C6crfJ7cJHyMKv8DCFQQABoMNjM3NDIzMTgzODA1IgyvLWnX8L9sxIrX9d8q3AOlGbOT84ZrDrPgpvyAeoXSErNTr%2F8dAQ8cdckQV2Sl2UWjPIViJhG044OOwTUsGEjaf51%2BdYegodrIM8ma9Gy2NXDE%2BIYb4gp4wEUoed1AX%2FCXuEZAr2W0W%2FsJDqWCRZSOIzLOyLFWlDc%2FZNX3V%2FtAYj7zR0cGP59zJKmOOWgAV6cNJ7GJ6vntBruF269S%2BZp4qEBD2L4Ek84SMADV0tIqUOYl4LIqbhlgDLjI3%2BEuZvdOMyP2MBff4mkUc7U%2FunEzaRtn4aI6DW3wa0cNjhK5MuzXstE%2BZy4yi3gV6EdebA10qPeNtAPRClWOkW7Ey98ih2j%2BtcXD2i9ApjqVjTr%2FBf8n%2FLWmOASTkfGZ0ZTBNEPxLwwmQZyCEpsUnZRKxSY1dgIfMVsA5RL%2BK7rq4MmV3pAeM18FZK9SYihSsx9KLhufjon0b8no%2Fj3VyRGy6XHpd87DfJyoNKMRMpLfDT2dLksmAoWukSNaGDRK3YYyhs3nf6R7mx39tpnB4TuoQf0TBtNFFwodO1%2BSRLuUv5gR0ckR4OP6hJwcznUOBP1QIqD6Jotu2R%2FnvBndrCe%2Fiy7d805Rq88Myd6%2FPNnjjtQYt5PPXppw6YkW2kemKFIptJcltD693BCDM8XE5DCjqObSBjqkAZUTpOcBZg7mm0uHGmUoFKcZY%2Fd8G9MkQ9WpalWP4lp4w0IyqFDi8WeVJrQkWHwngHOWoFRRNtrPvUFSh%2Fi88mzdmIKamZehkDxoeaW6eG4f88BLc7DsTgD7kLIrD3e2RxRaATcG5izJqBpucMy0JAZD5AygtPl3wM%2BL37u326fthluI2zJEcffWbO0t1Q7TY3yG%2B7txvDfA2H7G8SyDfapLZRMm&X-Amz-Signature=e62a8647c78a315d688f0381ec2dc5e4e45f12c7f53dbe8b7ac6fa56c96f8ea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLSAW6K3%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl37rzJHqpmFPnR%2FxIq%2B4HFquQDqvrlJ8XXMOQDvliugIhAJjJIKZ05XBuAwq2fKX9wSTApFpf8AVBBBcgSngKlqTCKv8DCFMQABoMNjM3NDIzMTgzODA1Igx9flpoV0eri%2BLxmvQq3AOAfFRImvTX2SaJTdaiQXsvKHXwCT8Zw8Q56vcRiEyI%2BskOk3jh1X6RYQ46M2rrNGAFtCP%2FJAr9iscwMJvIT%2FZ4xjpvhspy%2Bv9YvWUmlegR1S4dq2D9f0cNNim4Yevslvdb2mhDMPvuaafp2VpsXiqvvBwFdvSBAzCYVt5nDahCPxnR82O%2BZcwJdfbjhSnxL3aQAowV08mJDMkLip8dLk8N%2BpWiqUtplbpeEPWwmQonfOVP8MGSAM%2B8E8zJ%2B9WWAW0urHyskrQW6Bq7bS3EBQF4wuq%2FlyEd90%2B9CukZsRv12%2BZDqZZ%2FstyQnCJIjq0MJ3MlNV3wT%2FD0uQ5OT09W4BwFGqaWTj2K004nLeNkeIAEbxTmPnmB1FxS%2B%2FaCS2v39GCEGRXb4U6rH2SD2DYiUxn2lLqZgs7JY0gWM3FLrSVYlohbZWQ1X%2FrzcpG27zVJ34pEnl5lvBUR6U5MmHQEs3Bg7cogtnIDsPG%2Brg4R9ouyb6BH2GgwMwfc1332R09NjRMAcmOBAtq%2FFHnJOAcXwzKNA4Nb0Bavlt7E79mQMhrMMY17oZ6oHIzLZHxqirY5rDLjwGjN8SyMd74qfgXjUpdpCrYft4I1s8PqPqErmLPE%2FPD6kGQw2KhsB4TSLTCDpubSBjqkAVEd8aOwuZrqccN2de%2FzIH7qPhDkzW842%2FaYUNMCkYEi4mkLmX3djymOdWuBt357d75vX%2Bq5OtlAnE5bxLeKKZSDIxCS0FaHXrN1m2B4qPSi1KWWOhhgl3%2BHlSHfbgVpHRGzlGlMRk5zmJIA65pTR3kK4jwy1re1PL%2B809JacN238t%2FCheaxktoB8VwPS2Yf2vM9pyxsbRlBP8StvdhJrPanhJMS&X-Amz-Signature=c0002f4273393550c086b7d5c69e01ca7359090310b0b02671395d11b056cc67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCUETHLT%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDltM64BsPfUz1%2FQBtb2Xj5QuHQRKF%2FCerX%2Bvp4cF3%2BgAIhAMqvDiSsuIsQ8RCf8EIUIBqtWEIz49Qe1bThmiozmbksKv8DCFMQABoMNjM3NDIzMTgzODA1Igwd18n1vbpoxWdC5Vcq3ANVSWQlvD0MLB%2FhC4Cqf5WdNO9XA3EvyQ08nuOm1JHW7BHNq%2FdZpwCovbXBHRlfn1LmnOjKHBSKo4QLHN8AOqFnewmaiZggc%2Fqk4IDTIO%2FhRjtFYbqFU8s3MRSgA%2BqnPyht6bKWRmOVbHle8o6CpSRaqqJk8Z0Rvk30kHOGlR1WU%2BnlC%2FQJcggiU1g0GRBfJLxc4nIhLX255jcQ7GAHlkLFJENDD1iTixcRy1K%2BdW5xDiR1m%2FOE5g2cUK1lYnBrk%2FmpLco562WrIAC%2BmvydQSivXf7Su22%2FCAXFy8mJ4Dq%2FdmTUfgN7Nb9j972CGgXTsf%2FZYhtBgB%2F0m8%2FzqY37MpZiwmmuOfnwXj3%2F1Ot5fkJd12byzm7J2amXP2oUMT%2BcwHFGvo%2F%2F0eKgXSwYSqGnz1JZYvzZ2hZK2MOynb8purhuUfZ3XuFls0DC%2Fyv5BP7GjsgxeyFBxcMBnhEOTwWwhv%2FQyboYKKgmuA5Iw9z%2FI6ty0DvNDrUFMU%2BKJJEges0OBLbkwJzJ%2FN9eWh4gAkPtX2CGTeHNZQ4%2B4tki%2Bc%2BbEGdBQaBQS6Yf6yZuZfktg7WWSF2PRbPixwKX04Qe14XfyYozGZUhPMee191ZcHm%2BeN3cFS7OWkqnlyQf3SwYRjD2pebSBjqkAX5NxTqAXxr6Z4jO5vfEJ13BR1%2B4%2BJOE6TAadiaOyIftWtbLoBKdnWcOyPVesY7QF40mt0tG7GWJm5BkzYN5KwzxWOQuMBq8cABzIc5DOR%2BQmb%2BHUJqj0Pl%2BJxSP%2BlLTmAQAdAuZFgcpz1iNwzAJg2fZJsDfnWR3B7eAPKoSs0VhyPlL2bNwMhVxitr7wQBWkZK9mcAYYEeVuxrKHOj7W5QgAq0j&X-Amz-Signature=51a4fb91a1ee2d2c1dce38d910f4a48a11b00ccd428e2ff0574d4e50f2cbd6df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCUETHLT%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDltM64BsPfUz1%2FQBtb2Xj5QuHQRKF%2FCerX%2Bvp4cF3%2BgAIhAMqvDiSsuIsQ8RCf8EIUIBqtWEIz49Qe1bThmiozmbksKv8DCFMQABoMNjM3NDIzMTgzODA1Igwd18n1vbpoxWdC5Vcq3ANVSWQlvD0MLB%2FhC4Cqf5WdNO9XA3EvyQ08nuOm1JHW7BHNq%2FdZpwCovbXBHRlfn1LmnOjKHBSKo4QLHN8AOqFnewmaiZggc%2Fqk4IDTIO%2FhRjtFYbqFU8s3MRSgA%2BqnPyht6bKWRmOVbHle8o6CpSRaqqJk8Z0Rvk30kHOGlR1WU%2BnlC%2FQJcggiU1g0GRBfJLxc4nIhLX255jcQ7GAHlkLFJENDD1iTixcRy1K%2BdW5xDiR1m%2FOE5g2cUK1lYnBrk%2FmpLco562WrIAC%2BmvydQSivXf7Su22%2FCAXFy8mJ4Dq%2FdmTUfgN7Nb9j972CGgXTsf%2FZYhtBgB%2F0m8%2FzqY37MpZiwmmuOfnwXj3%2F1Ot5fkJd12byzm7J2amXP2oUMT%2BcwHFGvo%2F%2F0eKgXSwYSqGnz1JZYvzZ2hZK2MOynb8purhuUfZ3XuFls0DC%2Fyv5BP7GjsgxeyFBxcMBnhEOTwWwhv%2FQyboYKKgmuA5Iw9z%2FI6ty0DvNDrUFMU%2BKJJEges0OBLbkwJzJ%2FN9eWh4gAkPtX2CGTeHNZQ4%2B4tki%2Bc%2BbEGdBQaBQS6Yf6yZuZfktg7WWSF2PRbPixwKX04Qe14XfyYozGZUhPMee191ZcHm%2BeN3cFS7OWkqnlyQf3SwYRjD2pebSBjqkAX5NxTqAXxr6Z4jO5vfEJ13BR1%2B4%2BJOE6TAadiaOyIftWtbLoBKdnWcOyPVesY7QF40mt0tG7GWJm5BkzYN5KwzxWOQuMBq8cABzIc5DOR%2BQmb%2BHUJqj0Pl%2BJxSP%2BlLTmAQAdAuZFgcpz1iNwzAJg2fZJsDfnWR3B7eAPKoSs0VhyPlL2bNwMhVxitr7wQBWkZK9mcAYYEeVuxrKHOj7W5QgAq0j&X-Amz-Signature=d6bbb04692c398b8ae6b07310b7b2dd00c5b0ff81b3b2ffdced0c85efd8b8e07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLSAW6K3%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl37rzJHqpmFPnR%2FxIq%2B4HFquQDqvrlJ8XXMOQDvliugIhAJjJIKZ05XBuAwq2fKX9wSTApFpf8AVBBBcgSngKlqTCKv8DCFMQABoMNjM3NDIzMTgzODA1Igx9flpoV0eri%2BLxmvQq3AOAfFRImvTX2SaJTdaiQXsvKHXwCT8Zw8Q56vcRiEyI%2BskOk3jh1X6RYQ46M2rrNGAFtCP%2FJAr9iscwMJvIT%2FZ4xjpvhspy%2Bv9YvWUmlegR1S4dq2D9f0cNNim4Yevslvdb2mhDMPvuaafp2VpsXiqvvBwFdvSBAzCYVt5nDahCPxnR82O%2BZcwJdfbjhSnxL3aQAowV08mJDMkLip8dLk8N%2BpWiqUtplbpeEPWwmQonfOVP8MGSAM%2B8E8zJ%2B9WWAW0urHyskrQW6Bq7bS3EBQF4wuq%2FlyEd90%2B9CukZsRv12%2BZDqZZ%2FstyQnCJIjq0MJ3MlNV3wT%2FD0uQ5OT09W4BwFGqaWTj2K004nLeNkeIAEbxTmPnmB1FxS%2B%2FaCS2v39GCEGRXb4U6rH2SD2DYiUxn2lLqZgs7JY0gWM3FLrSVYlohbZWQ1X%2FrzcpG27zVJ34pEnl5lvBUR6U5MmHQEs3Bg7cogtnIDsPG%2Brg4R9ouyb6BH2GgwMwfc1332R09NjRMAcmOBAtq%2FFHnJOAcXwzKNA4Nb0Bavlt7E79mQMhrMMY17oZ6oHIzLZHxqirY5rDLjwGjN8SyMd74qfgXjUpdpCrYft4I1s8PqPqErmLPE%2FPD6kGQw2KhsB4TSLTCDpubSBjqkAVEd8aOwuZrqccN2de%2FzIH7qPhDkzW842%2FaYUNMCkYEi4mkLmX3djymOdWuBt357d75vX%2Bq5OtlAnE5bxLeKKZSDIxCS0FaHXrN1m2B4qPSi1KWWOhhgl3%2BHlSHfbgVpHRGzlGlMRk5zmJIA65pTR3kK4jwy1re1PL%2B809JacN238t%2FCheaxktoB8VwPS2Yf2vM9pyxsbRlBP8StvdhJrPanhJMS&X-Amz-Signature=79e61d5ba3f2e358393312ab0e1b061993fb96f1d67b9428596c3a04bde0adbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLSAW6K3%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl37rzJHqpmFPnR%2FxIq%2B4HFquQDqvrlJ8XXMOQDvliugIhAJjJIKZ05XBuAwq2fKX9wSTApFpf8AVBBBcgSngKlqTCKv8DCFMQABoMNjM3NDIzMTgzODA1Igx9flpoV0eri%2BLxmvQq3AOAfFRImvTX2SaJTdaiQXsvKHXwCT8Zw8Q56vcRiEyI%2BskOk3jh1X6RYQ46M2rrNGAFtCP%2FJAr9iscwMJvIT%2FZ4xjpvhspy%2Bv9YvWUmlegR1S4dq2D9f0cNNim4Yevslvdb2mhDMPvuaafp2VpsXiqvvBwFdvSBAzCYVt5nDahCPxnR82O%2BZcwJdfbjhSnxL3aQAowV08mJDMkLip8dLk8N%2BpWiqUtplbpeEPWwmQonfOVP8MGSAM%2B8E8zJ%2B9WWAW0urHyskrQW6Bq7bS3EBQF4wuq%2FlyEd90%2B9CukZsRv12%2BZDqZZ%2FstyQnCJIjq0MJ3MlNV3wT%2FD0uQ5OT09W4BwFGqaWTj2K004nLeNkeIAEbxTmPnmB1FxS%2B%2FaCS2v39GCEGRXb4U6rH2SD2DYiUxn2lLqZgs7JY0gWM3FLrSVYlohbZWQ1X%2FrzcpG27zVJ34pEnl5lvBUR6U5MmHQEs3Bg7cogtnIDsPG%2Brg4R9ouyb6BH2GgwMwfc1332R09NjRMAcmOBAtq%2FFHnJOAcXwzKNA4Nb0Bavlt7E79mQMhrMMY17oZ6oHIzLZHxqirY5rDLjwGjN8SyMd74qfgXjUpdpCrYft4I1s8PqPqErmLPE%2FPD6kGQw2KhsB4TSLTCDpubSBjqkAVEd8aOwuZrqccN2de%2FzIH7qPhDkzW842%2FaYUNMCkYEi4mkLmX3djymOdWuBt357d75vX%2Bq5OtlAnE5bxLeKKZSDIxCS0FaHXrN1m2B4qPSi1KWWOhhgl3%2BHlSHfbgVpHRGzlGlMRk5zmJIA65pTR3kK4jwy1re1PL%2B809JacN238t%2FCheaxktoB8VwPS2Yf2vM9pyxsbRlBP8StvdhJrPanhJMS&X-Amz-Signature=700f4aad51f3e7987c00d4f3e0c7993d4d41d7fe64deae48d7e2f70c899ebd61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVCBOBKG%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlut15FJuvKdnTv0oUmtoaI72%2FQOKOpo3aalRMi8z00QIhAOrdHZFwIYc3Ljeo%2FC5g8IG%2B3yEkMJVVpcvOmcJKu0ZHKv8DCFQQABoMNjM3NDIzMTgzODA1IgwVYB%2Bp0XIiCUKp6awq3AOwnaCeaalTZ1xVXfGHpNx8T4ad3GFW%2BYWNkZfWR3sgT1weQVK00y2DuFJNLnK97HmysQOx8C%2BAxO0LhGJDU6QH7b0YjuxlaKRy2Q3WXmC%2F57xyhq3VQd6UJrYwgJpIURIOEOoTjCy12XmIkrRhghQKUxlxG%2B4mXBuS7hMqguBy3nVXWag4eS4Lpzj1GLrVOXpqY7XmyBAc1pMK9KSvgOwsvyX40qR7%2FbWsJDRe3M4NI09BbANq6KXLMft9HmOBjHsLqVYeM2X0QrZV2yi6UMGLm5TCxb4o%2FR%2FfAAknIr7s9q9nGVbZkHQ%2F5q%2F98xS0MCp7UEaRSAoElA1cjabroKhwT2VlnOyaKi3C7EfU0Hhm%2BoCHohRAaFuhlD%2BKWw%2FMZLm6Cy4ueXf3qCQEYVApsRx5%2B%2FDTYg15XDnLcLRuPuB2On8zG9ugIVh70IsqdXWU7dT4Afq%2FLEwD8pgDC3l582ff7Y5K4ZmfZIdvvIbmnO7XgyHB0Px%2FdqieaseBUE5LFxnpFURnpIBcFbf6yNGo8ChfbwXOBnz0%2BHb1tJoSTCYYuiwfDll6kPb%2BEiO5Bi0byJUHVTygf8kld1uyUGdpNxoDNjs%2FaWL%2Bhe4m8kM7ilsUE8HqRaMZreqa3%2B5KVDDcpebSBjqkAaZ5Z7iqRrIe%2FJjR%2BTZ1hRBVy6IDnvttCsfyqLIy222xEhr54i6QJbqw5mdo31MjGNeVzvAc9UtsexoAc5bdgeXrSVVBrTomUaWXjlusxAvIVQaAboFtmoM%2FeMGxSRCPAVu5wo%2B%2FMUjpp9PJB5AWtXG5D0LNOGn38DTFwoJuKC5K21EyxIQMqvoBEsKiPr5Ut0OnljO3BY1ARNVWhz9CJiI%2BH6da&X-Amz-Signature=32cb28a42d6fc9ef58be9ea2ecf4be732514689a553c79d79f58d10cb12bd607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

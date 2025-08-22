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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LUTEFZQ%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXIyXR%2BwJy04UdpiSdsUT2vRXlXsHgLGFNLcP%2FXmjj%2FQIhAInYeYISWZoi80RAvTpo8hXzDsxPpX0ZHhuKXeQo4VOUKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyocyBG0tfhB27MXaIq3APbJ9E%2BX8d1ToLqDCulAEoqmSAurWFLOFY5CvVREDJ0d4XfhZW1YX1tlQ%2BYWrBwAF1S%2BmuzN6M2tBzvZkV2%2Fq7eJlxWHrRpWFTar7rNofLpT3a%2B78IquwALcs0kEkPUinpMjJSOKC%2Fqqwc7PB7OMaopwbwH5zHouu7AvRxMw6gObBfjCzVCJ6v55vgUETqj7uezk%2BGzEe3dX%2FWD4FN9GkPjRLXIbA0RaUyOjqiKozXyLjYtKuYahdMS6dEJ2MBc%2B6el9lKVNebXrUYuIOrDU7ljYHjyuXhBlAGmrYfuHKdhFXNyWh6b15BgWVGWfroUA0OOBY3%2BA%2FRRjpGlcLpOqWkRevpH5lsMC6eoRyHpAKsSycxfptyjhGKpMu6kx5HjvWjPQRFfQhPjW4%2BCNo2yi%2FvdbSoQFmN49xQHRzTj7VD7k1JGHsa1C0eChQLLPXdgwzoXEzBNcq8IBljRi0B8tP9w%2Bj%2BOkZGCErOIygSeim1rYS41yTcVcTAnFQQLA9VGxmDF%2FEehW1%2BJtfTc7q%2BoLIWZ29TA4FUIvGV8KN6Uayn8DYbD7bdvQtDwAvygF%2FzS8BP09Pitx6%2Bn3v%2Fa2S%2FEbkcWmzzZ%2BmJjlw39pJRMFz7A%2BCQ07LVfgPc%2FAmqmPjD68Z7FBjqkAd%2BrMuXAs9gFbTTE0%2BXNV132Xh48clyq5vBS1Tt5fMpn75fjLe2%2BEbvy2tFNe3U%2Be78SNp%2B%2BeZBtY%2FNVKkHpT%2BK9qDhIEg7qnmXpxLqADJyP7RysjzAkwGcmZN5UCVqbVdYd03ugXKQ9GQd%2BwQCjhi%2F6aJj%2BNlijfaQMzXa6zmn4pjFpSDy2iOW0uiusGYuvx5sS%2FdIU%2FFmcRxwtW%2F5qmod99%2BJr&X-Amz-Signature=474bb94db0b6e1189f09a7e98ea1b07fcc01cc6072db73793f04d91c425213fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U334SVRC%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSaajb6oIsDUl%2BLWdMgXK1efGhtC6B0fA1LRrvwVwCOgIgOmfjAMluETqSwnIaw%2FP2%2Fo%2F5v4REOwH0J7fWiYVxCYQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNVtUFR%2BmwfKO9d9LCrcA67BuO%2B9%2F9m2%2BfnQ4tHKg2rQgA73owG01nQCPxUf0WaV3PhA2C%2FuJN9DAEZM3tOCuqG7EbU7ocXa%2FVOSJZjDMPHQs%2FPOhQv%2FnGdq7%2FNURPUvqW1O2dc4jPyqC%2BW7PoPtyyQK5fJtnV2lmgnwnylYMuy6FTtIAikVvJKKJOPNXFpU74%2FcLRteH4S8%2BXozbAEQAdPAampXyK1wsyBCkaSYF7AxLt77uxAJ24KnivTYlTGfl1H6r50XLwER6Rd72M0XYyhCe1hzQQdep3%2B1CM%2FQp6c%2B9sFw%2BoDn8nGiF%2FrqsRLVlr5OJxY0SxCrpRbBQHkTeroqRqUBwwxtVo5kfnOlVAO3e0Z4wX4ckVFdQ7dIWh6NfZ%2BjdNylOvdpXeL11biRUhjFiXb%2FIyQsAXZRfhXZuCykAQFNCaJRis2ic1CxA7Y3vCjn7cp8i0Yl9pwugObO2%2BBJnYdUge1z8j8RPcey6zu%2Bl5UTLr14VHa%2BPNsc8NMuLRACFAwzyUkScQGM04WJ1HbTfnbrzBUwqxH04sNfJLskTqxdKAZQtWSVjbeVPkllLmTOo1YziNnPxayPHOXDGWH7d%2Fw4HJ%2F3Yu3VybN%2BV%2FwJ0M6lusDcDW702cEHsOix2mW0lnYIto2LbncFMMnynsUGOqUBvP6LSCtENu%2B2cHDL25H2QkItAOrWL3iB6cP1o2Kewls9p1MDjoL6H06uzzXhl1pqQGWjOFG%2F6hoGtM24YQjvL7mO%2Bei%2FQ6wjf4kGyZ4xnCwmffkR4eGv4BzlkFd8XQfFENB0QIZ2cSXVZ1di3nRKAz8ItDZ8vKbFXVPHYsN9vabRo5VocwHicg0OW7YS14PffZu8EbE8PdUht1krzWraZ84Vx3MX&X-Amz-Signature=539163508e071e1804e51b20e1a2f924bffb87f5b0d1dac7d6741b6de9483145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGX2FJVD%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8LwqpGZ0QY0UMmhIWEM3vn0%2FV624eGT%2FL4xweZ0%2ByJAIgRVpcSp%2Brb9c600rUSm6ougGTcp8MB2muRs9CUc7DZ1cqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmDf98N4UA2yHHEUyrcA1EXBkUJ4UCnc8BSIVxJ%2Feg%2BkDlrOo%2F7b6M8bGDwe830vGFfBN8CBNeGJMN0l3ZmnQBEIDIV8e1mHleFuyMbUgh8CcK69tqEjkvrBIlznZEqIX2Pf1OD1PFoMa%2FYL1XoUQXy91sfqRTP7k5rjIRdcaNRZ7Lu7uM3S5Ow480gIcPpvmHKM26BRqwoZ9bVZeLe1GZ75zH8fkMOpQTKPnsNkEX5UrOZe9wdHSn79k4VH6HnGMopxJCjl77O8V2dT4eACz2BixnapmO2rpydd7azPRO%2FtPKZWxoRQllFwnTPQJpSnNwxKJmUJOyss23oPVzXfBJYVY6aVR22Qh72RUhQvotnlB5bF%2B2NlDaUIT%2FCHXcKwzmc%2BY9%2FpByArnY8BeGuUUVT5kBbXTbPEJ43RdQiFDdG4kqI1QigBxfowkNvQ1nCu0hUfnIoJHvfZjxZQHnTzui39jtj8Yx2Ac69ilP5OpyuhwDgAPEOdpdQ2AszFZx8fJx53UTC%2FE%2Fzez7AHWzyjBqEiJ4pmH%2BqsjRODr%2BzqUsBf0ZujMfYfFyY2pmF0zNtdcFEzuVDyXisa646PsbpTdEvTz8UuFGvfIR%2Fx%2Fqkno2MGHCKTVff62nO%2FQh9i2f577%2FhHD0%2FY4VwE2RHMPnxnsUGOqUBePrs83sUD3jjswF7bu0ggRSAiXltyp%2Fw7LZUKMPESNmZqmGIL1BYWyG4QHs5keVjhMlfTjdb5P91F6SDxYs3m5K9HR%2FzZ0YRk0ugWmQeBA5xTNkkuxkLrqNLLzOtNgMyWRkPvq5wzulMS1ZB3NWGTtoh%2FjXB3wvC78cHwSrEdvgiX83TVF8U3vq9HgNCACXGxNFDZJyApplnTAWCVbulUIp9a%2BIO&X-Amz-Signature=90a2e842e866470d7972c2c1e3ecda4f7a6e2044ce14d8bbbe0101648bcdad0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGX2FJVD%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8LwqpGZ0QY0UMmhIWEM3vn0%2FV624eGT%2FL4xweZ0%2ByJAIgRVpcSp%2Brb9c600rUSm6ougGTcp8MB2muRs9CUc7DZ1cqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmDf98N4UA2yHHEUyrcA1EXBkUJ4UCnc8BSIVxJ%2Feg%2BkDlrOo%2F7b6M8bGDwe830vGFfBN8CBNeGJMN0l3ZmnQBEIDIV8e1mHleFuyMbUgh8CcK69tqEjkvrBIlznZEqIX2Pf1OD1PFoMa%2FYL1XoUQXy91sfqRTP7k5rjIRdcaNRZ7Lu7uM3S5Ow480gIcPpvmHKM26BRqwoZ9bVZeLe1GZ75zH8fkMOpQTKPnsNkEX5UrOZe9wdHSn79k4VH6HnGMopxJCjl77O8V2dT4eACz2BixnapmO2rpydd7azPRO%2FtPKZWxoRQllFwnTPQJpSnNwxKJmUJOyss23oPVzXfBJYVY6aVR22Qh72RUhQvotnlB5bF%2B2NlDaUIT%2FCHXcKwzmc%2BY9%2FpByArnY8BeGuUUVT5kBbXTbPEJ43RdQiFDdG4kqI1QigBxfowkNvQ1nCu0hUfnIoJHvfZjxZQHnTzui39jtj8Yx2Ac69ilP5OpyuhwDgAPEOdpdQ2AszFZx8fJx53UTC%2FE%2Fzez7AHWzyjBqEiJ4pmH%2BqsjRODr%2BzqUsBf0ZujMfYfFyY2pmF0zNtdcFEzuVDyXisa646PsbpTdEvTz8UuFGvfIR%2Fx%2Fqkno2MGHCKTVff62nO%2FQh9i2f577%2FhHD0%2FY4VwE2RHMPnxnsUGOqUBePrs83sUD3jjswF7bu0ggRSAiXltyp%2Fw7LZUKMPESNmZqmGIL1BYWyG4QHs5keVjhMlfTjdb5P91F6SDxYs3m5K9HR%2FzZ0YRk0ugWmQeBA5xTNkkuxkLrqNLLzOtNgMyWRkPvq5wzulMS1ZB3NWGTtoh%2FjXB3wvC78cHwSrEdvgiX83TVF8U3vq9HgNCACXGxNFDZJyApplnTAWCVbulUIp9a%2BIO&X-Amz-Signature=b0c64d5ca3e618f5483b871e801ed2b4f2f8e7f07381540758dc519f159f175f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U334SVRC%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSaajb6oIsDUl%2BLWdMgXK1efGhtC6B0fA1LRrvwVwCOgIgOmfjAMluETqSwnIaw%2FP2%2Fo%2F5v4REOwH0J7fWiYVxCYQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNVtUFR%2BmwfKO9d9LCrcA67BuO%2B9%2F9m2%2BfnQ4tHKg2rQgA73owG01nQCPxUf0WaV3PhA2C%2FuJN9DAEZM3tOCuqG7EbU7ocXa%2FVOSJZjDMPHQs%2FPOhQv%2FnGdq7%2FNURPUvqW1O2dc4jPyqC%2BW7PoPtyyQK5fJtnV2lmgnwnylYMuy6FTtIAikVvJKKJOPNXFpU74%2FcLRteH4S8%2BXozbAEQAdPAampXyK1wsyBCkaSYF7AxLt77uxAJ24KnivTYlTGfl1H6r50XLwER6Rd72M0XYyhCe1hzQQdep3%2B1CM%2FQp6c%2B9sFw%2BoDn8nGiF%2FrqsRLVlr5OJxY0SxCrpRbBQHkTeroqRqUBwwxtVo5kfnOlVAO3e0Z4wX4ckVFdQ7dIWh6NfZ%2BjdNylOvdpXeL11biRUhjFiXb%2FIyQsAXZRfhXZuCykAQFNCaJRis2ic1CxA7Y3vCjn7cp8i0Yl9pwugObO2%2BBJnYdUge1z8j8RPcey6zu%2Bl5UTLr14VHa%2BPNsc8NMuLRACFAwzyUkScQGM04WJ1HbTfnbrzBUwqxH04sNfJLskTqxdKAZQtWSVjbeVPkllLmTOo1YziNnPxayPHOXDGWH7d%2Fw4HJ%2F3Yu3VybN%2BV%2FwJ0M6lusDcDW702cEHsOix2mW0lnYIto2LbncFMMnynsUGOqUBvP6LSCtENu%2B2cHDL25H2QkItAOrWL3iB6cP1o2Kewls9p1MDjoL6H06uzzXhl1pqQGWjOFG%2F6hoGtM24YQjvL7mO%2Bei%2FQ6wjf4kGyZ4xnCwmffkR4eGv4BzlkFd8XQfFENB0QIZ2cSXVZ1di3nRKAz8ItDZ8vKbFXVPHYsN9vabRo5VocwHicg0OW7YS14PffZu8EbE8PdUht1krzWraZ84Vx3MX&X-Amz-Signature=f308e96395b8aeae32d23245fb8ef4d7d57a20d9c0df205f6171a560086a8c0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U334SVRC%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSaajb6oIsDUl%2BLWdMgXK1efGhtC6B0fA1LRrvwVwCOgIgOmfjAMluETqSwnIaw%2FP2%2Fo%2F5v4REOwH0J7fWiYVxCYQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNVtUFR%2BmwfKO9d9LCrcA67BuO%2B9%2F9m2%2BfnQ4tHKg2rQgA73owG01nQCPxUf0WaV3PhA2C%2FuJN9DAEZM3tOCuqG7EbU7ocXa%2FVOSJZjDMPHQs%2FPOhQv%2FnGdq7%2FNURPUvqW1O2dc4jPyqC%2BW7PoPtyyQK5fJtnV2lmgnwnylYMuy6FTtIAikVvJKKJOPNXFpU74%2FcLRteH4S8%2BXozbAEQAdPAampXyK1wsyBCkaSYF7AxLt77uxAJ24KnivTYlTGfl1H6r50XLwER6Rd72M0XYyhCe1hzQQdep3%2B1CM%2FQp6c%2B9sFw%2BoDn8nGiF%2FrqsRLVlr5OJxY0SxCrpRbBQHkTeroqRqUBwwxtVo5kfnOlVAO3e0Z4wX4ckVFdQ7dIWh6NfZ%2BjdNylOvdpXeL11biRUhjFiXb%2FIyQsAXZRfhXZuCykAQFNCaJRis2ic1CxA7Y3vCjn7cp8i0Yl9pwugObO2%2BBJnYdUge1z8j8RPcey6zu%2Bl5UTLr14VHa%2BPNsc8NMuLRACFAwzyUkScQGM04WJ1HbTfnbrzBUwqxH04sNfJLskTqxdKAZQtWSVjbeVPkllLmTOo1YziNnPxayPHOXDGWH7d%2Fw4HJ%2F3Yu3VybN%2BV%2FwJ0M6lusDcDW702cEHsOix2mW0lnYIto2LbncFMMnynsUGOqUBvP6LSCtENu%2B2cHDL25H2QkItAOrWL3iB6cP1o2Kewls9p1MDjoL6H06uzzXhl1pqQGWjOFG%2F6hoGtM24YQjvL7mO%2Bei%2FQ6wjf4kGyZ4xnCwmffkR4eGv4BzlkFd8XQfFENB0QIZ2cSXVZ1di3nRKAz8ItDZ8vKbFXVPHYsN9vabRo5VocwHicg0OW7YS14PffZu8EbE8PdUht1krzWraZ84Vx3MX&X-Amz-Signature=c1fc06314cf9059cbf101575d3743dd0e27c45584a6e7c05542d74b29b7b70b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH26LJM7%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTfMhE4pzeqtuI6Y9Jj2UFexOQEFOh18EpC%2BRRxfrQ3AiEAlJvgA8QeAvS80rFl4C5j%2BhLP8AY9HhTLzQAXtCOqb3cqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnHSPFQ7VeoAayN5CrcAw99eP%2Fk9LnF5v1len2NGC%2BKbC4XzQ9mUM%2B3WmMpcu3fgakbLVZGtcSgL85YGTjdjD%2Fb1Ppq2SC4FqJgUQrGwZoD%2FOJZPeLAwSoFq8ztnXbJxEIGNQc5nuNMV4K%2FG5JAViudveC5zjCC0xD28ihpgxbt2QSk6fWzODQuXFszianbkfssBuIGHwmX7PDtLVhX4Y0QTOfT5AmRTTf%2FiJM%2BYZJftLe5mNVSoBI4%2FkzhOzM80QXwDnctxPwKmglmu3yZbyAcnNhjkhFPMfsvgOlDY0xbN%2Frvh214IZ%2FwFJ2D0UYqN927xk5ru5WMG1490E8PgGf47RrjYVViPO2az4X2%2B3kxFbsB3NPc%2F2TaOzu5TVjcqql%2Ba2xKoaBTGhiWwPD1fJcOsSXFZhcgi9gKGToEr57LgB8GzhV2CvrhllwBQoRIkxj8BmysfPgvyrHBJeJ2eyLWRyRSpdbcCjpI5vEWHWa0l%2BgDAbtUHCvxlvsDdUlCUw46z9hsPhzkTeHXqW8Fo%2FUDLobeBKP3tATckIgjiOH%2FAT5aqvmAAH584s%2FVgs7yeu54aJky1tokm6wD06N%2BOGPBxAbnUsuT4%2FthbzZMC9ERmjPJyQAKM8QwWLe1EbhtfWRNzK0132UwzKlUMLTynsUGOqUBHnN4fBE55Orf5r8YbX49kpXSugKxpYA%2BCNmYUjnz49HE%2FuUlClrh6%2FwaMAM2MS6LIKpmPwxc5TzvqHU3%2BD8mVUcRvJnpxxUP99nlYZdSRGFClRpMBV3JEige9i4TESBLqkfg8hboSgYhzkMlvF9eoENyip8qPSmncLzoRrd86lN2ILt2mn%2FMy%2B8m3KkeISiwoK3oyv4RNvlsi2dqaibgNgzkXutl&X-Amz-Signature=1a252dcc45e7434afb0f439f73abd4a982e2486ebc8c3a7e3714fbc6c317a6b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

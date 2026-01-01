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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IDFZWJV%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCm2K8A43KijL9kC5C3pep94couVZTmxCbP%2FucMniKwgQIgWHJTQvPJzPQuRI%2F4jzH2fDRv%2BCtiqK9IwGX%2FHVjMRBUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSUcoMO2GhDCrEAWircAxA0%2F7QP%2FhONZ5hC6TxyexDV2DBB06gh0YBkDH7Hwt9XvIfYQx2MZ1UJhRDlJHZw1x9xZs%2BCzbrzrCT1Zeyh5bDbugvHjd9FcnBZut5TAQj6KxEf0A1TWbdFrIAE9lh6RY3DSgvHCmxl8fQ6O2xHYt%2BZbX17p5rOOB3SkJH3YpXTC03hAN3Pa8H4%2BDsyrUqxqcKl07nmAGn76jQEFbQ55MeQ%2FRRIEagzZMjaxe6Arl37UHRzaklzung%2FAtBJ639mu0BrXRFxXvrurXVHsAEDOficw3jf2s4%2FkhyXIWLkumnLVA72MtsUQlaqDSephNa3%2BGw%2FlYFBdBBCiBHKgXmILc66PHn7j92GWCRQ7t8N57Ubl8Z5YsaEHVMwSvgmDapCKJG5kmtTqtCb0mE%2Fc7Kht%2BTdaIKFkPy%2F6kWUTlLehq1zTtOdqt0ACkMnXxCg4VvY2Rtqrakl6SxGsQcAjg2Y4GVUKYZ8hjdzJe0%2BCOBX7MvXWUNCaVU2cYDTCaxTONOuXbyxMuBkkwIB1YXo2rR5E6vW9cbBLyr9uwi6eWP090K6ksXPtNm2mEqIpDh749%2B6dvgZHddET9nUpTB7mNNIvpGCk0FeobULQlOfF60e8zCBeoR1NxdixJWy6fCaMIec18oGOqUBpid0c3a6kBorPyNwRT4fwt8AW3kXTWqZdPGaEo13TmWU57nwU67vf4%2BMFXLkfnXQerdvtR6EdGA31yDdK%2B1hlVv3g%2FXN%2BmrTnru1qOoatOq1VuHp7o5R%2FySBbqALFwjs0kRGq12YxV3QEjXbifBCzUR%2FrJsRufRejWEQ0h8ITXTomvls2%2FUm2SfW1VcLLE6SVU6urq1WCREDmbl%2Fhqy3IE17LSKb&X-Amz-Signature=5f0cf2f33e51254bcd5af1394caf3a3b31c2dc9c6ac86d30bede89015a0332a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4I2KHOX%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDSxCIGlQCJvY700MGySQfNTJSb8kguIuyNbzfMDQ4mtwIhAIyfJvZO8tVHD0lnbKig5cpXChByNKZhTcXAb7%2BFYRppKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaThiRFBhhIuJY9WEq3AOXfNxLUmIyTYxzveuzco2XYfFkzMxroIOo%2Bl3UHCzE71o3p4tnWnM5z6oukh3oTsSggq2RUN9jMw%2Fmgk8vMC4jMZ362aPiWCVburIuR2r%2FWnXEE%2B0r7OKo6UsgfcYV9v%2BZLdQ051wGDFhOXRtFQrc6ffkYjp%2B3lM0xXdBIopilPjGX4bkfLzEjtpP2sWnqUEUmGRzaI%2F4A54pJ%2B4h6NTiPbjp4%2FxuXlrzL4T6Uo%2FL0rVrfJ%2FoJlQeA5IHK6rc7MSquc2%2Bp2pXZJ5wWg3GcAdHzW5yBtYxTEHhKXFEYpIm9uS43LpLT8uZWZsRXdj3ixyTJ4NGRJuUiKVEGqO3SVkUlLQ0s4T7FRchcT4yRHo7oLpmr3MqxngyK%2FASlaTl1woyKsFZ0tXCbqHOUt51a%2BOfNPggVW9LvFssSdk7bQ9n18hUDZMJb%2FlA%2FjdtUOueMA6sAXFiF9fuWzsSovvJEetc0oN4QPE29a5TjIhL%2B2bBy3o9Qyqf8W5Epo9o2230H6yrsBdWEfnOcBlsXAD6LrNlQhs2etycXQX9KsfqYLbcG66Cpaa7hthPBDmM0kBiNtUeUYG0r2tMN3voOXQcwF1ppy%2B8Wb1pDOpW1LLqG%2FqLx4F01L5ZmMp6kJ2ZN4zC7ttbKBjqkAaKzh%2F6NR16k0MIVOGNBynfm7D4%2B%2BQuF5Uc9ZAUPRBrEoONEGZMgrbd0VxozTq2otIWdqfw1n1dvUuG5zNccgflWvESl%2Bh%2BHS1TT8VlD1JWyiyg%2B4YSDy5VN3Rs63md6wpPLcQBuGvvEci%2Bs1HxRkHaQSsvh0n9IRLR4%2BGYyHJqMCrXN1OhA5o8hAtT5fw1Su0W%2BRXVQQGVvmPW2Ae7CPP2%2FootH&X-Amz-Signature=940089490a448dfeb83806ecc0364519e56e51ce5e7a9c266543e43de7689ad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ZW4XSB%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGnjIoojbRjgL538ldJudx7DECJtW6fzemu9LOZAlf9pAiAzG95wO5Ap%2FRdGe%2BIDzUuMqVEiyNWtyN%2B35pwccnGnkCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5p6JPnBnuL51LKZzKtwDum46%2B%2BQdNhHnd9iCOOinRpmNQ%2BBAJOEfk87iDQpPiUxoOmv0CVd4CnMfE%2BGo2x89%2FxtJpfA7NzGcO4w71MvSTxwhH569R%2F%2BTePRcr4YVlmdodF2jkIAeWFzeWYCYoMwhwdolrsWsjGMkb6xWZQPy99siELyyUQi9exCMUz4pPUTDQEmcveU9D3IqwGlpPURYZ2rdeTLeJlKRrB8YDOcZXquwfj3JgFjZAfqxQopNPcJkWQLW19NKI%2FcJZ%2BSb3N0DvVRYkA7wwGuNFkxUZ9zsIieGVmxQZ6%2FltPGk3iSCQ65Rr87cor4BOG9zcI1w%2BFGk4qjtmHfWndWSgg4V%2B7fzI1WrEc%2Bvf00WHk89bLBCnQZth4ZD6%2FJ4qPZJbTYQr5ai%2F%2FYcRxP9lrtTAMCuP5HQdD%2F5QWfJIFE8MalLpnieiFRSLuTh%2By%2BYf%2FEZqGWEA6bvA%2BnciqdJzyjOlZEYk4GCI%2FykNr%2BMBwSgU76YtHnDQZUJShsuv3%2B8dzUWXeW2nesRstdh4jkhsPjHdX8eq5rDGaQs3VAx2OtA6HF6fb3TqdaXJJ4FRWXiYIQs3akm7hDvFQMR4Tff0n8Cj7Fg%2Ftc9Mu67BYhGgQ%2Byh4wsyGDhnS3kk1KVUqYuzJ598JUwi5jXygY6pgE56qWBj%2FpPByQliH0FhKjWi4Y6rb5Af79JQ1cs4SDmcNomvQjHuot7ktLkJuLnIoGLqtQgR1v0gqEsKzO00owk%2FowlYTNPSVlA2Nhu2Qm3VtHM2wXnpg04a0lzctj9jTzpnNgzXeEMrdFm5GyGQbX9Odt4x9qhTIuIYLWWuazFQectkVtJ5SY5MXEABeS%2FRrH29RIKnSpYLzCVhGAo4aMxKU93m80x&X-Amz-Signature=c78d05c740b5afcfdf0263c086fbc685d277b03c84bdba033a6067cd17c5281e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ZW4XSB%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGnjIoojbRjgL538ldJudx7DECJtW6fzemu9LOZAlf9pAiAzG95wO5Ap%2FRdGe%2BIDzUuMqVEiyNWtyN%2B35pwccnGnkCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5p6JPnBnuL51LKZzKtwDum46%2B%2BQdNhHnd9iCOOinRpmNQ%2BBAJOEfk87iDQpPiUxoOmv0CVd4CnMfE%2BGo2x89%2FxtJpfA7NzGcO4w71MvSTxwhH569R%2F%2BTePRcr4YVlmdodF2jkIAeWFzeWYCYoMwhwdolrsWsjGMkb6xWZQPy99siELyyUQi9exCMUz4pPUTDQEmcveU9D3IqwGlpPURYZ2rdeTLeJlKRrB8YDOcZXquwfj3JgFjZAfqxQopNPcJkWQLW19NKI%2FcJZ%2BSb3N0DvVRYkA7wwGuNFkxUZ9zsIieGVmxQZ6%2FltPGk3iSCQ65Rr87cor4BOG9zcI1w%2BFGk4qjtmHfWndWSgg4V%2B7fzI1WrEc%2Bvf00WHk89bLBCnQZth4ZD6%2FJ4qPZJbTYQr5ai%2F%2FYcRxP9lrtTAMCuP5HQdD%2F5QWfJIFE8MalLpnieiFRSLuTh%2By%2BYf%2FEZqGWEA6bvA%2BnciqdJzyjOlZEYk4GCI%2FykNr%2BMBwSgU76YtHnDQZUJShsuv3%2B8dzUWXeW2nesRstdh4jkhsPjHdX8eq5rDGaQs3VAx2OtA6HF6fb3TqdaXJJ4FRWXiYIQs3akm7hDvFQMR4Tff0n8Cj7Fg%2Ftc9Mu67BYhGgQ%2Byh4wsyGDhnS3kk1KVUqYuzJ598JUwi5jXygY6pgE56qWBj%2FpPByQliH0FhKjWi4Y6rb5Af79JQ1cs4SDmcNomvQjHuot7ktLkJuLnIoGLqtQgR1v0gqEsKzO00owk%2FowlYTNPSVlA2Nhu2Qm3VtHM2wXnpg04a0lzctj9jTzpnNgzXeEMrdFm5GyGQbX9Odt4x9qhTIuIYLWWuazFQectkVtJ5SY5MXEABeS%2FRrH29RIKnSpYLzCVhGAo4aMxKU93m80x&X-Amz-Signature=7a32a7c719bc0c0002815b3e0ce02e5e3c4ca0a72bdf54cdee591e480ba8e700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4I2KHOX%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDSxCIGlQCJvY700MGySQfNTJSb8kguIuyNbzfMDQ4mtwIhAIyfJvZO8tVHD0lnbKig5cpXChByNKZhTcXAb7%2BFYRppKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaThiRFBhhIuJY9WEq3AOXfNxLUmIyTYxzveuzco2XYfFkzMxroIOo%2Bl3UHCzE71o3p4tnWnM5z6oukh3oTsSggq2RUN9jMw%2Fmgk8vMC4jMZ362aPiWCVburIuR2r%2FWnXEE%2B0r7OKo6UsgfcYV9v%2BZLdQ051wGDFhOXRtFQrc6ffkYjp%2B3lM0xXdBIopilPjGX4bkfLzEjtpP2sWnqUEUmGRzaI%2F4A54pJ%2B4h6NTiPbjp4%2FxuXlrzL4T6Uo%2FL0rVrfJ%2FoJlQeA5IHK6rc7MSquc2%2Bp2pXZJ5wWg3GcAdHzW5yBtYxTEHhKXFEYpIm9uS43LpLT8uZWZsRXdj3ixyTJ4NGRJuUiKVEGqO3SVkUlLQ0s4T7FRchcT4yRHo7oLpmr3MqxngyK%2FASlaTl1woyKsFZ0tXCbqHOUt51a%2BOfNPggVW9LvFssSdk7bQ9n18hUDZMJb%2FlA%2FjdtUOueMA6sAXFiF9fuWzsSovvJEetc0oN4QPE29a5TjIhL%2B2bBy3o9Qyqf8W5Epo9o2230H6yrsBdWEfnOcBlsXAD6LrNlQhs2etycXQX9KsfqYLbcG66Cpaa7hthPBDmM0kBiNtUeUYG0r2tMN3voOXQcwF1ppy%2B8Wb1pDOpW1LLqG%2FqLx4F01L5ZmMp6kJ2ZN4zC7ttbKBjqkAaKzh%2F6NR16k0MIVOGNBynfm7D4%2B%2BQuF5Uc9ZAUPRBrEoONEGZMgrbd0VxozTq2otIWdqfw1n1dvUuG5zNccgflWvESl%2Bh%2BHS1TT8VlD1JWyiyg%2B4YSDy5VN3Rs63md6wpPLcQBuGvvEci%2Bs1HxRkHaQSsvh0n9IRLR4%2BGYyHJqMCrXN1OhA5o8hAtT5fw1Su0W%2BRXVQQGVvmPW2Ae7CPP2%2FootH&X-Amz-Signature=b3c11148cfa8ef3f663a02693a32a2d3a0a2d6d7d6dba74c5d61b21ce12f142f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4I2KHOX%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDSxCIGlQCJvY700MGySQfNTJSb8kguIuyNbzfMDQ4mtwIhAIyfJvZO8tVHD0lnbKig5cpXChByNKZhTcXAb7%2BFYRppKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaThiRFBhhIuJY9WEq3AOXfNxLUmIyTYxzveuzco2XYfFkzMxroIOo%2Bl3UHCzE71o3p4tnWnM5z6oukh3oTsSggq2RUN9jMw%2Fmgk8vMC4jMZ362aPiWCVburIuR2r%2FWnXEE%2B0r7OKo6UsgfcYV9v%2BZLdQ051wGDFhOXRtFQrc6ffkYjp%2B3lM0xXdBIopilPjGX4bkfLzEjtpP2sWnqUEUmGRzaI%2F4A54pJ%2B4h6NTiPbjp4%2FxuXlrzL4T6Uo%2FL0rVrfJ%2FoJlQeA5IHK6rc7MSquc2%2Bp2pXZJ5wWg3GcAdHzW5yBtYxTEHhKXFEYpIm9uS43LpLT8uZWZsRXdj3ixyTJ4NGRJuUiKVEGqO3SVkUlLQ0s4T7FRchcT4yRHo7oLpmr3MqxngyK%2FASlaTl1woyKsFZ0tXCbqHOUt51a%2BOfNPggVW9LvFssSdk7bQ9n18hUDZMJb%2FlA%2FjdtUOueMA6sAXFiF9fuWzsSovvJEetc0oN4QPE29a5TjIhL%2B2bBy3o9Qyqf8W5Epo9o2230H6yrsBdWEfnOcBlsXAD6LrNlQhs2etycXQX9KsfqYLbcG66Cpaa7hthPBDmM0kBiNtUeUYG0r2tMN3voOXQcwF1ppy%2B8Wb1pDOpW1LLqG%2FqLx4F01L5ZmMp6kJ2ZN4zC7ttbKBjqkAaKzh%2F6NR16k0MIVOGNBynfm7D4%2B%2BQuF5Uc9ZAUPRBrEoONEGZMgrbd0VxozTq2otIWdqfw1n1dvUuG5zNccgflWvESl%2Bh%2BHS1TT8VlD1JWyiyg%2B4YSDy5VN3Rs63md6wpPLcQBuGvvEci%2Bs1HxRkHaQSsvh0n9IRLR4%2BGYyHJqMCrXN1OhA5o8hAtT5fw1Su0W%2BRXVQQGVvmPW2Ae7CPP2%2FootH&X-Amz-Signature=1656c513e1d16cd92efb750ed1e568a60a81a5d8a95ca8b2cbe99bf255fa01df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQRVKBJO%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIEpqbcFqb8VvXZixRX%2FKH1xZVxDmF1IK766UBeHMt6m4AiEApUlf77HWyAeiqDVOo1oo9kE9MJtBBLOTjnr%2FOpO%2FekwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9csy2Z31ZE31qllyrcA3H61waJch12znj4g%2BKxPof9UZY6Z%2FQZpdzyRQJPGqqE3BH8o1wo0hwFLcIPBgChmdWa%2BZz6Q5kzq525u3%2FPaSODKXJJAMU%2BwTcVpHUGclDJcnoXEqPQAh0rug7P%2FoeS5dTyws%2BQuyoQlH8mT65ZcNtTxjH2vGK45iHXw8ZkQdRHTqeYJgsAjCTgFAEEfRCZv7pa%2FyoW0uqeVMAVV8yRYGBOIvBavkLrF03jeOrpv8z%2B%2BKVGuR11soDsFGPDh6pXbbcq8nmxkbl4QT%2FXTlnntwxqAEioxJAeQ7uvWQf2Yve7NymHhGSPPBDP6pGIsQrlV01XPGdbUmVxzFD1y6d%2B%2BxLIMTJI1dRIGkdWntSdxZ%2FZ63%2BK%2BIbGr0ph1oWrN8NqqoC7QxX9uHBjlf76niV6ixWdTBESO%2FAv76PVNcWaYUDNqxMYcGGb0wVal64h7bHb1D6NkNhYoVWBPxLlCIH24suuatqoE4EHH8o09BP8w9%2BVc5y9IJUr7vOeg2sAbaV7VbUVdREFMuodKW3Gf7068k9QNvh3H2PiBLaLspuYeP5VZKOfh%2BsCA0r8rBtoXSeIFZWCqsfg5YiY4YXvUHMZJTeiTSQamhNpFjvacpucBgR88aJ1CVTbP7eyLVMIMIai18oGOqUBkJT1IRzszN3SqWEoPlk4S7I0HPCunv84xL9K5Nrac0ki3cgHjeCZcqRv1MvgD4NLG7qgWsOu8KMtERUOHcDeBe9eiUj7GsAWm5REaSEZ9wBkmu6aaylH1PPcnOhPpMHN42oPl3Hnv7kmpdX6pjd7dMLPDdGUPhEHlDaxmUlp7qaNDSawu7iyFnvB5b2QmfiLCEPvrm8LQfFL92%2F51pXOVt8%2FQnce&X-Amz-Signature=65845fb280154427bb041972881484494bbf00c33b9c3771c66feddd1c863ba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

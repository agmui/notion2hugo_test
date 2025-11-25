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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOG5MHAH%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlJNyTFPF9mRerlTbOJyXzgTu1hl845b6V289Fb4JVfAIgVX6bbgfCbQaMb2U6EXV3A%2BcUSKQvEkV0t2NzGiHnqNEq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDNXenfOfTwdn8ziycircA3FkBhYdqtuhe9tjnhoexCFU37OmgorQSE%2BH1My7u%2F2n%2FA2S5UeTS90G7IpB8xPIiLEOXStmp%2Fw28vQxRscLC8G93RqFak0ZOcJmDC62QrFlQ%2BN8PGTzXaP%2FO%2BSzq3rImiqL8WKUV1dkKtoYMNvWlgeD3h%2BdryTZis7cSQjFyAxGzhxceEYBaZqgotg%2BknM7zhFdAqkAWpFVLa4V8HtuiI0nFXIDG3%2Fe7Hzm0ufQ62dNJ4sm915RNRb3uEtx5qeMlRQ6EF7Tfc%2FqRO5mpWaFsSiXnE2Q%2BjQJOz3tmJjIjjo3Y1m5li2OqoXIsKSJrTuJzF%2FbgQkbuL6OGCj%2FqAEQj4NKSv0If8oIvpCuGxvrjBq488vrg2X%2FIxToqC1TA%2FkBOpVykXwxMk3N9VwanWuEY5vQzP7GHoKNN5VDG%2BK55isILVTfW8rSgK0A%2Bd2T7n%2FiksDrQqcUItyMWAMgcfXM92988qDGEJULltqqSKtwk8CJspRApGGkgi0qipthyjFOYjgtLjhwCFZyA%2FbQtQDxuwcIpYlMLIpA1YwdLSm0vYrXhqdUzzMmocYdLYgzUb9UGuLqkQz1HoFuilA7xo3BoNpR8waWPBE0GEwBj1GQlFoFCxnMw%2FE8potfUP06MLHLk8kGOqUBWFF8XWqk44n8amG6Xu3AQSoMeK5RkgD6BKDb7kJDpXMUrwWhz6CyueSmYUYba0X1URgnX%2BFAa0wKHEuhYZOtZErOHA8waz%2Brw7ZBtimDUXKySOccAP%2FTG683GcJaoq0hsnvZ7GKkeOlmdHjsVHEchhtH%2F6%2BHBIUcftlK4j8GEDKTyh1x5Z8%2FnOVDWQ0O3aZgT6cJRvvsQnpwceegiHZPeRUJ9NFx&X-Amz-Signature=868d333d8ed3e08e24bafc4af656c90adaf1e14f7c4005e299356d3be5bdcb08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRS7CVOA%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH87BK3G3cy8o09KbJbolfxnhsWVcmkd8wwdQnqQ299wIgdAfWYuxTDnFyWaeWOcnfvQO8CGPF2wg036EdkKyhOXIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDNp40%2BJ%2FYwZ59GsBuCrcAz8KUjr793qKaWd5T2o5Qk0NafZZ2XWX0XNjLAbkYnsbRSrV2pNGK%2ByIbGoDeGE%2B06maaPRbh84TOAEgpxSOg52o7GzPwkHX70eR%2FGwireF0hIXyDO6JggptSUFqLCTtsgX23zM%2FiDTai3NOnD2aIgSrpxPU8Ue9cf6BCtbfi8iitvKik80NOAG%2BY9v0Hbn8kHinGOeRDNTmfUVsrdgb8WvAyNF7YqtT%2FJQpY1eA7gR%2BOhNQrwVFemplqA1StjbVeXL5z6PQbz0ZTTWhOZijbE%2B2qYrvyzshDhAW%2F7NaE0ICL%2FagTPz%2FEsDRuBmhf0o%2BioEaTM9wN9O7%2B3dZo9o17siKjcGgcFItDeAIjNBoquN0XBm%2FkfmkZXtIUqhtIVHe9%2FZ0qtFfyQJxsIHLN%2BhLjteILPKNZMeIT4H58TUOCOEBj5c6gE6ip23A2iIFYfbq85%2FeXOLN5ks2YhyY0PznhgRj3Go0pC7zMg7Uaf5gNBdBegFWEBMwelYKaMBDlqOUZNXf8hWmyo1qug5J9kvAYxo6nD%2Ff8Gt0se2yZ4i0a2dhL6dQgSdMrj2Z0F0HTtipmIbQOyn1RiHOn1KKQu%2BCb5G%2FT5Wml6Wv5r9RstXHfnrX3M2Ya6FGo3lUtXUsML%2FKk8kGOqUBY1KQ2MqM4ZsxRb28elLUDXjmuFVHZX7exs6wfJYnbg2FL77JI0pRkQOCDbCOuV3RXfowDiyW6POG3KZ9Kz8KfzXn0%2BAf0NLVEPuw%2F5hbsGdca%2B%2B81tnP98vNoQ%2BLXKxD2JUm%2FkwBee1blJ%2BMKE2XTW3dXoMbIosBFtGK%2F9kS3tNauwmJ7WIhcpB81aNy9OlkZWGHUW5WjO1I0CYSB6P9RQiHMWpm&X-Amz-Signature=66d9cab798deb9d71917078792e6040c8ea6ccd01de5ef06b52a01614d625db2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C5DUYXR%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2Fyd8lqIilO%2Bu8AgrSqhv1SKXzelqjHek5uCUvtciFlAiEA52TgwD%2FaUHqokB1QyZLPCvsmSIsruXeVArvAm5DlR1Qq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDBqH146czMXvOESILCrcA4Bt8t%2Bn4H7FENyj0bJVzE9s2Sa4T23AY7bGbf68k7ePdXM1zVH4S%2Ba2SSV7dYAWoUAefU4%2Bo88lSo3tIQikp469P2lgnhOlCnt3ToYkG4Z327GWJUtS9ge3qpQssqsq7WpFk9g3IvDnMc6%2BHWmBmsmYRAxWVioYF4h3UPMX3S7nuZPxerz8cApHedbs%2BmcuqzEp8igkUuaNv%2BS59C2oYAjN9S2wXLMJoYZfU9v%2Bqkn8aqh6yVa01I1XShYFnPbsFhTynX%2BLokYCOMZLIZUWI%2BF4ioeT%2FKj6vOoc6Xi39Pxm1CCFFXj5g0dH702qz98pq9R%2F3v0pUJVkjj6tJct%2F6GRdNOGKKTm%2BSewk89QEJwlgThmlddhN0tU%2BmIjv76lakVxs9qd0zTW53cZHp%2F6l7zKtY4wVT4%2FpQqPk6IDbTqNyWY6dWYutu%2BAFvs%2BqCC3N5VgmQYJYFegNV9i4Vf4Mo4Wo%2B1qGP7zHRuiCS7CQ1FzlNR8L2r7glY47%2FhRwKNpNT8DIrnzgzp6dIs4Peea%2Fe3To2ZwSXY6rBih1k%2FswCrWVUZAPgNj4Ch2CwzNZFciH0V50CwYCHdq4VIF2hYKM%2FcUt6EaGpAZC5Y5%2FsVc0SIE4B40HiIumKKmIreGwMN%2BBlMkGOqUBK0pOpCVW2QVeUDUrlZXv%2FKCdLRGanzNXyfd4era5hENiCj4BN%2FI%2BIvt5G8hdVpTBro2acF1poRGZfYoxguVMQGo6xCmNIcU%2B6wcV57CSW7lGunTs0%2B%2F08o74XtZZlv576bAlH7AKnIdIYlgPupgvje6btYJ8yRrTzBAK6Qm8j2is7wr8fW3X9XozMBQq02gu1gT35c%2F4iRMwkpAiTuRpOT4wW8lj&X-Amz-Signature=19195eb86507a1d89c860623c02682b6e1a5923882969025e72fca7de25db00f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C5DUYXR%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2Fyd8lqIilO%2Bu8AgrSqhv1SKXzelqjHek5uCUvtciFlAiEA52TgwD%2FaUHqokB1QyZLPCvsmSIsruXeVArvAm5DlR1Qq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDBqH146czMXvOESILCrcA4Bt8t%2Bn4H7FENyj0bJVzE9s2Sa4T23AY7bGbf68k7ePdXM1zVH4S%2Ba2SSV7dYAWoUAefU4%2Bo88lSo3tIQikp469P2lgnhOlCnt3ToYkG4Z327GWJUtS9ge3qpQssqsq7WpFk9g3IvDnMc6%2BHWmBmsmYRAxWVioYF4h3UPMX3S7nuZPxerz8cApHedbs%2BmcuqzEp8igkUuaNv%2BS59C2oYAjN9S2wXLMJoYZfU9v%2Bqkn8aqh6yVa01I1XShYFnPbsFhTynX%2BLokYCOMZLIZUWI%2BF4ioeT%2FKj6vOoc6Xi39Pxm1CCFFXj5g0dH702qz98pq9R%2F3v0pUJVkjj6tJct%2F6GRdNOGKKTm%2BSewk89QEJwlgThmlddhN0tU%2BmIjv76lakVxs9qd0zTW53cZHp%2F6l7zKtY4wVT4%2FpQqPk6IDbTqNyWY6dWYutu%2BAFvs%2BqCC3N5VgmQYJYFegNV9i4Vf4Mo4Wo%2B1qGP7zHRuiCS7CQ1FzlNR8L2r7glY47%2FhRwKNpNT8DIrnzgzp6dIs4Peea%2Fe3To2ZwSXY6rBih1k%2FswCrWVUZAPgNj4Ch2CwzNZFciH0V50CwYCHdq4VIF2hYKM%2FcUt6EaGpAZC5Y5%2FsVc0SIE4B40HiIumKKmIreGwMN%2BBlMkGOqUBK0pOpCVW2QVeUDUrlZXv%2FKCdLRGanzNXyfd4era5hENiCj4BN%2FI%2BIvt5G8hdVpTBro2acF1poRGZfYoxguVMQGo6xCmNIcU%2B6wcV57CSW7lGunTs0%2B%2F08o74XtZZlv576bAlH7AKnIdIYlgPupgvje6btYJ8yRrTzBAK6Qm8j2is7wr8fW3X9XozMBQq02gu1gT35c%2F4iRMwkpAiTuRpOT4wW8lj&X-Amz-Signature=5e137ebcc0c6d806f6a88b7fe41daab991d035745ec0deb64e574450029e1849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRS7CVOA%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH87BK3G3cy8o09KbJbolfxnhsWVcmkd8wwdQnqQ299wIgdAfWYuxTDnFyWaeWOcnfvQO8CGPF2wg036EdkKyhOXIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDNp40%2BJ%2FYwZ59GsBuCrcAz8KUjr793qKaWd5T2o5Qk0NafZZ2XWX0XNjLAbkYnsbRSrV2pNGK%2ByIbGoDeGE%2B06maaPRbh84TOAEgpxSOg52o7GzPwkHX70eR%2FGwireF0hIXyDO6JggptSUFqLCTtsgX23zM%2FiDTai3NOnD2aIgSrpxPU8Ue9cf6BCtbfi8iitvKik80NOAG%2BY9v0Hbn8kHinGOeRDNTmfUVsrdgb8WvAyNF7YqtT%2FJQpY1eA7gR%2BOhNQrwVFemplqA1StjbVeXL5z6PQbz0ZTTWhOZijbE%2B2qYrvyzshDhAW%2F7NaE0ICL%2FagTPz%2FEsDRuBmhf0o%2BioEaTM9wN9O7%2B3dZo9o17siKjcGgcFItDeAIjNBoquN0XBm%2FkfmkZXtIUqhtIVHe9%2FZ0qtFfyQJxsIHLN%2BhLjteILPKNZMeIT4H58TUOCOEBj5c6gE6ip23A2iIFYfbq85%2FeXOLN5ks2YhyY0PznhgRj3Go0pC7zMg7Uaf5gNBdBegFWEBMwelYKaMBDlqOUZNXf8hWmyo1qug5J9kvAYxo6nD%2Ff8Gt0se2yZ4i0a2dhL6dQgSdMrj2Z0F0HTtipmIbQOyn1RiHOn1KKQu%2BCb5G%2FT5Wml6Wv5r9RstXHfnrX3M2Ya6FGo3lUtXUsML%2FKk8kGOqUBY1KQ2MqM4ZsxRb28elLUDXjmuFVHZX7exs6wfJYnbg2FL77JI0pRkQOCDbCOuV3RXfowDiyW6POG3KZ9Kz8KfzXn0%2BAf0NLVEPuw%2F5hbsGdca%2B%2B81tnP98vNoQ%2BLXKxD2JUm%2FkwBee1blJ%2BMKE2XTW3dXoMbIosBFtGK%2F9kS3tNauwmJ7WIhcpB81aNy9OlkZWGHUW5WjO1I0CYSB6P9RQiHMWpm&X-Amz-Signature=6950e16e646090c16c0c7c2012d56f49f97b5f63cd0e6a3f6e5ea6744743d625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRS7CVOA%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH87BK3G3cy8o09KbJbolfxnhsWVcmkd8wwdQnqQ299wIgdAfWYuxTDnFyWaeWOcnfvQO8CGPF2wg036EdkKyhOXIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDNp40%2BJ%2FYwZ59GsBuCrcAz8KUjr793qKaWd5T2o5Qk0NafZZ2XWX0XNjLAbkYnsbRSrV2pNGK%2ByIbGoDeGE%2B06maaPRbh84TOAEgpxSOg52o7GzPwkHX70eR%2FGwireF0hIXyDO6JggptSUFqLCTtsgX23zM%2FiDTai3NOnD2aIgSrpxPU8Ue9cf6BCtbfi8iitvKik80NOAG%2BY9v0Hbn8kHinGOeRDNTmfUVsrdgb8WvAyNF7YqtT%2FJQpY1eA7gR%2BOhNQrwVFemplqA1StjbVeXL5z6PQbz0ZTTWhOZijbE%2B2qYrvyzshDhAW%2F7NaE0ICL%2FagTPz%2FEsDRuBmhf0o%2BioEaTM9wN9O7%2B3dZo9o17siKjcGgcFItDeAIjNBoquN0XBm%2FkfmkZXtIUqhtIVHe9%2FZ0qtFfyQJxsIHLN%2BhLjteILPKNZMeIT4H58TUOCOEBj5c6gE6ip23A2iIFYfbq85%2FeXOLN5ks2YhyY0PznhgRj3Go0pC7zMg7Uaf5gNBdBegFWEBMwelYKaMBDlqOUZNXf8hWmyo1qug5J9kvAYxo6nD%2Ff8Gt0se2yZ4i0a2dhL6dQgSdMrj2Z0F0HTtipmIbQOyn1RiHOn1KKQu%2BCb5G%2FT5Wml6Wv5r9RstXHfnrX3M2Ya6FGo3lUtXUsML%2FKk8kGOqUBY1KQ2MqM4ZsxRb28elLUDXjmuFVHZX7exs6wfJYnbg2FL77JI0pRkQOCDbCOuV3RXfowDiyW6POG3KZ9Kz8KfzXn0%2BAf0NLVEPuw%2F5hbsGdca%2B%2B81tnP98vNoQ%2BLXKxD2JUm%2FkwBee1blJ%2BMKE2XTW3dXoMbIosBFtGK%2F9kS3tNauwmJ7WIhcpB81aNy9OlkZWGHUW5WjO1I0CYSB6P9RQiHMWpm&X-Amz-Signature=3ce6757a442661cdfa320ae399a91c016bdae547b2a33467fef87fd6aef73b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647PAZ4EP%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPJHbFQhn6m6apRGevvxRL91chI8tR%2B%2BLbRTbZL9IiCAiAWqW5DU6Db9HKNDK%2FuTBOnm7NnVhlmKHhEuqfxdky4fSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMPKi8kuZMPEx2NBCcKtwDYvs5v6ov5GrOx8tG75pYZU9%2BmLowso781XeKFwsijMF9zES2t9DthFp4g1ldMgsuJ41UW4M%2F1zRk%2F%2F3b2XNgJcgjM9Nrpc5GaEVQh75ToOz%2F%2FOqUDwhb6FkkyyVChs6p1zWPBVIO8R0amNcvT%2FGMmIEoUpT0vm4Ho450XMnNUw0WsSHUrray5yF%2FQOy6bKD%2BZ9izGJrFdE4804EExuGTd%2BSYaIOd1Vw7fReJfr7SpBMvcMq93pwKQ1rx6KGhEFxhJCNUeyBf5C9c%2FsPwsOGKnuQLBx%2Bq5bYdB2thSOBt5JuGOQJEkb7HzMGz%2BiANaczYVRuvdgAelXl67TEZs5YA9L4fvqvhIO72Ja%2Fskcnp0uMPNanfhwdAbynin8VQxINZw6ylFcRy00T2IGqhcV11ArVq8g8f417Xpuwp0pcNl0boCgR4TzZx76%2FDv00jvE67SGrOHimr%2F17eaNJIGV98JoFMOnq%2BOfLApftIfswQ6k%2BTJb4f%2Bu3uDD5fkWObnT%2Bzb6zH02UvGxXsTIekqUqtWMJMU0UY%2Ftl6muFZw4Mlxk%2BAUl7G5XMxNhsfJLqW53JylGrO%2BP1ZQBBft%2FZIvjAElkoAqRj76QLflIV7UOzGP4fA8uupxlm03fgrDA4wjsuTyQY6pgE2V7hCDHDeGU3cOZO2sqRNouWAjaHVZku5kSsrDPixRoVcVUStgVa2AoqfF8jFPXXCHFzqKi6vSbnlEAzWWK2X4akZG33xlBtIYKcsybVvh8clQdELZSIHLURBbekRSh5q039T2jSf5mTztOvbd7Z4ek47Hp%2BBXTsMFRnZkC38zwof11fdGNhJt65jxYuV6Mn1iz%2FpvC9tw11oo5RITTTLcc0dOwFL&X-Amz-Signature=92d0c4c8ceac390c1c8e8815df45e58dcf4f4e6d6fcf967fa7a1c8a93522e33f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

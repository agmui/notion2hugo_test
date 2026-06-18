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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YYLNOLS%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHeocLHuFtvVZg2CNgQ4sbKfS6yF7SwFv5bf5IE3fnlwIgTHQQ%2BIROZc96oPzL8ChtMmetyskhW4E9eiMDkzes6p4qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQIcd9HOzvTstLqdSrcAzbFZ6ygMxA2J7IsD%2FjxlUMUW3gMXF8XOawkEfiBnMHuc1BC0n5bzklxUB0k9uezC7%2FpzzRLEzGJjWu1FtbkLmRi7Be70VnXRfz%2Btx0xAvLBNMB32Af4RK09hRf9Mi49ZbfO9VjL8HSsBA1B3Ps6ePhJkfJD2gPl14oY4Sp2v8TT%2FfIjdTGPC9YIIDjXPLtOcplDc7eR2VD215vDqcoV%2FBIt%2BRp6dCui3dPw%2Bvd0ect8NpKqfY2Ndm2WQVeY2u3I4oPsdekEkOx3jDBbuzDtpRqDPxtUGOxGnP13kDDBVn4qrQx2pIaDd%2BivixGzMTbNYECiCkiAijfe82y1msrVjYXNcm6PDwZqc5mJi%2BlbAudWCCdqd%2FLVAjAFKwfMh1KwjffLmbH9Ij10Ie5jRw%2FRxIO%2FA2qMAl1Hp71HgcjCACFJermqA4NH29x%2FSu0XuhQmjcvXsAq8h5DGU83vl6oB2ArM3pv4aoYPWlMRnFImypL%2FQ6ZFD0cYFHBZd9IhfTJQrTCd3KIFXMWhJ0v0O9bVbXOdWoMpJco0Zsk2OKphIt2VITbMvUc%2FZsg1tYdq4LC2%2BMOXzBmHjTpUwI773bEXxqU42apxUr2fwYcxl%2BwL%2BpRpu4Q296JvMXxQI2N%2BMOOwzdEGOqUB1Z242SU5THN1%2ButByz8v2Rufhn%2BR8w4x4AiTjCNhczSbxSZzrMx0AubcbTjzinwSAylcJpgKh5F%2Fav0hx19HXTVva0i8P%2BMtzgj%2FlHHqVNJSyZuKwSifVyf9LMtFDt3kH9V4O6ZYrX53v8VEBym6r90GsMPfUykyF6BwDOp4eIbhLbUmKr8K5bhibgTQ%2ByobViUSoNhBg3ucWJkdcrakbT19tVFP&X-Amz-Signature=51be5459e88d634808917d237af97c008c6d714f9b66e2d206ad7da4f46e5d92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QOCT6RS%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBp4DbKQIRCaFUqHHdFYAffkLYflAuvxLpfa1IJTPTg%2BAiBw55nTbCkqLs2HRB%2BNHu%2BfQmLZOFjK3YobqHS29uUOqCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCHPqmiR8RAf1%2F4aEKtwD5My8KMdx3TRtoMh5hL%2FbK00Kk7wIjO5LXiRebM57QEsFSlrjsTw8joXi5ModO9%2FPeLuxIP%2Fd2qud%2FunuxtTTtDzRjHtdU237Hfzd0xxkhlLLrXLVHIfqKWHqnEDRYyFoj3oTOXy7%2F54mASwZbMpCDYRdqV564dkk5FF4iqNluBCZ5w%2FNS8qGjCQt7uDFXtwT4YzqQtLl04DKkdaFrQfzWXGED67r%2Buq0VL83abmsAeUr6oCZn4G3wLdHQ4g0fO4i5zdV%2FVMsDtcnqEhHQWWMXh2vRVbMinAWX6axCgdnZ6oQeUbjUfstGdGQaZfor97YZtYAUY0EHnZPwDdR2LV1Xf26Yq4SMBRwHrwHvUbwe3joF0ELbACKyKe1u1hnm8WMm3Y%2FzSWICdZh7rM096j65U5qBY5aXIjMp%2FqApwl8F%2Fnb3qzWTMUXvnzQqXpnKeMJ66Mdv74i4aB6X%2FSKUahzcrTVtmwD8Dc8KqmU5hLrbfwJKvk2GhKTRrnSztIqwhAfmfrEY1KZOqrQqD04%2F6E2l4SfSbr7S77rnPpHcwhNOjO0unlXKJ48XQy19jtsLJgFylctxWdAwSFaVv5kyTw14z8n0mOQk1wIzPGjailBgxwht%2B2ju4RGu3Cad1Qww7DN0QY6pgFk9EVQKt1b0Q%2BU13LZ7AYevt2u4SQrMmOonsbALq6xCNoVtVt3NsGOsoHyPNUOOUfR8HP%2BgBrBC7W6UJoWX%2Bfb4QhTGY%2FdQcmRKp%2BmBFYviXcXwu%2BOSlUc9pvEypTuHBJgx9CMHzLceyWFvUBb0eVlrnJFwsI59hMjR%2B23SqZnviilGvT3HYt5rk4%2BI8W89whSLpPH4JsWKq7BnHdajf22yze%2BlCkL&X-Amz-Signature=4e88874508905d4ab5f631d778f382558d7d6fa51062eb7dc41fa14c79b8efb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHRVNKGW%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQPhgf%2BDLdNoxZ%2BsLofSWA51vCSUnWnwd7tssnxXZNHwIhAOjIF4Bnibk5e9Qhni8U89SQOdEflEkPOL5zF8tt9oliKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywnRh4oEEleo98Smcq3AOgqe4fZIpViQlcnZ2vEbXP3CXasdJdj1huVyEvhXPbdpPVwlO1z3JcNshcvxinFKE1uIdBfLPBmS0wfPQR8aLlOvrCixoDCeNptLGFu5lRnRU8rRvauO8dLtts2mtKHUtRtm6BwkDUmE3oETErXmPPncylC8F3x2GYWC4NzewA9vurwstE5VxHPDRjG1albNc3ue2EiwPclACtuJWS3WuGhj6fu%2Fd1b0ERHhCnUT7%2BBQTwWojIpwOTk0Cb1gKd%2FTPFJXwzCOtti9imJu7mNj%2FF27I%2Bz0TLaVH0RZzpxitXlD4gjppECjxCtFdhu771G7LnRC%2BgFJ6YPS0Aq40f%2FKkq20DNGy8R6cpCFUTAcY9NLmwl%2FZgiImD1rqc91opN%2Fm9MrnV33Xnz6ZwmRqXy9ih80sEh1mQv3RLP6teMtZiVlwKUYe4jeXCp%2F36HlQOgOjMv1NxUFXXzgR7a3FoJHQu8JJu7kVfyrv4g9nsMDx9dsv7ADWuWzxk2qGHgxTwB5o6JRJCfmHxr5kZkJ%2FjllXwJO0xr1o6hsfp1lRYUMXzwek444oq6RdaaQL29URs5AMvyLDtzzIygsNps4ZVOKj1O%2FXqTODLIIO9K5DQ7sT%2F9vVozapy%2FwNHDxm%2B2dTDXsc3RBjqkAaTqcN%2FR8UvYLfRxTx5w1cnpnT4DQjvx3BLfzSQ0d7KpOpZl5e6WQgr7%2FcdNycbSs3ID26sBaHygFuO34o1TomMkjjpJ3oQucaO9sstGB78qrqlncZ%2B1s0PNWU%2FVEdsnsomczzGoAdE3cdWcD45iDTlgUwWf62IWMk6TB2cWNXn2Ud8EYg9A3PS3XgW5n%2FYhT0XB0XrHNY7qseI79x1rag97XyOT&X-Amz-Signature=2330ea8ecbfedcd78331ee146fd1476dea517e103576f0b24225be3742b8d66c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHRVNKGW%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQPhgf%2BDLdNoxZ%2BsLofSWA51vCSUnWnwd7tssnxXZNHwIhAOjIF4Bnibk5e9Qhni8U89SQOdEflEkPOL5zF8tt9oliKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywnRh4oEEleo98Smcq3AOgqe4fZIpViQlcnZ2vEbXP3CXasdJdj1huVyEvhXPbdpPVwlO1z3JcNshcvxinFKE1uIdBfLPBmS0wfPQR8aLlOvrCixoDCeNptLGFu5lRnRU8rRvauO8dLtts2mtKHUtRtm6BwkDUmE3oETErXmPPncylC8F3x2GYWC4NzewA9vurwstE5VxHPDRjG1albNc3ue2EiwPclACtuJWS3WuGhj6fu%2Fd1b0ERHhCnUT7%2BBQTwWojIpwOTk0Cb1gKd%2FTPFJXwzCOtti9imJu7mNj%2FF27I%2Bz0TLaVH0RZzpxitXlD4gjppECjxCtFdhu771G7LnRC%2BgFJ6YPS0Aq40f%2FKkq20DNGy8R6cpCFUTAcY9NLmwl%2FZgiImD1rqc91opN%2Fm9MrnV33Xnz6ZwmRqXy9ih80sEh1mQv3RLP6teMtZiVlwKUYe4jeXCp%2F36HlQOgOjMv1NxUFXXzgR7a3FoJHQu8JJu7kVfyrv4g9nsMDx9dsv7ADWuWzxk2qGHgxTwB5o6JRJCfmHxr5kZkJ%2FjllXwJO0xr1o6hsfp1lRYUMXzwek444oq6RdaaQL29URs5AMvyLDtzzIygsNps4ZVOKj1O%2FXqTODLIIO9K5DQ7sT%2F9vVozapy%2FwNHDxm%2B2dTDXsc3RBjqkAaTqcN%2FR8UvYLfRxTx5w1cnpnT4DQjvx3BLfzSQ0d7KpOpZl5e6WQgr7%2FcdNycbSs3ID26sBaHygFuO34o1TomMkjjpJ3oQucaO9sstGB78qrqlncZ%2B1s0PNWU%2FVEdsnsomczzGoAdE3cdWcD45iDTlgUwWf62IWMk6TB2cWNXn2Ud8EYg9A3PS3XgW5n%2FYhT0XB0XrHNY7qseI79x1rag97XyOT&X-Amz-Signature=ef470fbf1413f8e8bf1faa3d1908632f7c1e504ed7a74ca072d8026688969b24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QOCT6RS%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBp4DbKQIRCaFUqHHdFYAffkLYflAuvxLpfa1IJTPTg%2BAiBw55nTbCkqLs2HRB%2BNHu%2BfQmLZOFjK3YobqHS29uUOqCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCHPqmiR8RAf1%2F4aEKtwD5My8KMdx3TRtoMh5hL%2FbK00Kk7wIjO5LXiRebM57QEsFSlrjsTw8joXi5ModO9%2FPeLuxIP%2Fd2qud%2FunuxtTTtDzRjHtdU237Hfzd0xxkhlLLrXLVHIfqKWHqnEDRYyFoj3oTOXy7%2F54mASwZbMpCDYRdqV564dkk5FF4iqNluBCZ5w%2FNS8qGjCQt7uDFXtwT4YzqQtLl04DKkdaFrQfzWXGED67r%2Buq0VL83abmsAeUr6oCZn4G3wLdHQ4g0fO4i5zdV%2FVMsDtcnqEhHQWWMXh2vRVbMinAWX6axCgdnZ6oQeUbjUfstGdGQaZfor97YZtYAUY0EHnZPwDdR2LV1Xf26Yq4SMBRwHrwHvUbwe3joF0ELbACKyKe1u1hnm8WMm3Y%2FzSWICdZh7rM096j65U5qBY5aXIjMp%2FqApwl8F%2Fnb3qzWTMUXvnzQqXpnKeMJ66Mdv74i4aB6X%2FSKUahzcrTVtmwD8Dc8KqmU5hLrbfwJKvk2GhKTRrnSztIqwhAfmfrEY1KZOqrQqD04%2F6E2l4SfSbr7S77rnPpHcwhNOjO0unlXKJ48XQy19jtsLJgFylctxWdAwSFaVv5kyTw14z8n0mOQk1wIzPGjailBgxwht%2B2ju4RGu3Cad1Qww7DN0QY6pgFk9EVQKt1b0Q%2BU13LZ7AYevt2u4SQrMmOonsbALq6xCNoVtVt3NsGOsoHyPNUOOUfR8HP%2BgBrBC7W6UJoWX%2Bfb4QhTGY%2FdQcmRKp%2BmBFYviXcXwu%2BOSlUc9pvEypTuHBJgx9CMHzLceyWFvUBb0eVlrnJFwsI59hMjR%2B23SqZnviilGvT3HYt5rk4%2BI8W89whSLpPH4JsWKq7BnHdajf22yze%2BlCkL&X-Amz-Signature=7dd1cb50ed79d7912a5f2acf74b643fd07d6cc919ea96dddfd1939be16cd9f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QOCT6RS%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBp4DbKQIRCaFUqHHdFYAffkLYflAuvxLpfa1IJTPTg%2BAiBw55nTbCkqLs2HRB%2BNHu%2BfQmLZOFjK3YobqHS29uUOqCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCHPqmiR8RAf1%2F4aEKtwD5My8KMdx3TRtoMh5hL%2FbK00Kk7wIjO5LXiRebM57QEsFSlrjsTw8joXi5ModO9%2FPeLuxIP%2Fd2qud%2FunuxtTTtDzRjHtdU237Hfzd0xxkhlLLrXLVHIfqKWHqnEDRYyFoj3oTOXy7%2F54mASwZbMpCDYRdqV564dkk5FF4iqNluBCZ5w%2FNS8qGjCQt7uDFXtwT4YzqQtLl04DKkdaFrQfzWXGED67r%2Buq0VL83abmsAeUr6oCZn4G3wLdHQ4g0fO4i5zdV%2FVMsDtcnqEhHQWWMXh2vRVbMinAWX6axCgdnZ6oQeUbjUfstGdGQaZfor97YZtYAUY0EHnZPwDdR2LV1Xf26Yq4SMBRwHrwHvUbwe3joF0ELbACKyKe1u1hnm8WMm3Y%2FzSWICdZh7rM096j65U5qBY5aXIjMp%2FqApwl8F%2Fnb3qzWTMUXvnzQqXpnKeMJ66Mdv74i4aB6X%2FSKUahzcrTVtmwD8Dc8KqmU5hLrbfwJKvk2GhKTRrnSztIqwhAfmfrEY1KZOqrQqD04%2F6E2l4SfSbr7S77rnPpHcwhNOjO0unlXKJ48XQy19jtsLJgFylctxWdAwSFaVv5kyTw14z8n0mOQk1wIzPGjailBgxwht%2B2ju4RGu3Cad1Qww7DN0QY6pgFk9EVQKt1b0Q%2BU13LZ7AYevt2u4SQrMmOonsbALq6xCNoVtVt3NsGOsoHyPNUOOUfR8HP%2BgBrBC7W6UJoWX%2Bfb4QhTGY%2FdQcmRKp%2BmBFYviXcXwu%2BOSlUc9pvEypTuHBJgx9CMHzLceyWFvUBb0eVlrnJFwsI59hMjR%2B23SqZnviilGvT3HYt5rk4%2BI8W89whSLpPH4JsWKq7BnHdajf22yze%2BlCkL&X-Amz-Signature=57dd4469ded1677a5ad20dd4e42c50bd60a842c1cd4af38f975dd0e4ea82808a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCWALR4Q%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDTcPeRXybIr7cU0V7ORzVEv5TQumGEYBt2ndRzVrxxQIhAMBBEadQqba7%2Br88DBG4zUMke%2FC97YXPBBFM%2FXEMTpvDKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV4qbV2RnrqXga0mQq3ANNWeLd1PEKMBDyhnJYPOWIDH8wSQzqhtl1Ek%2BGfL3lcouNHv20xLu4QuxAtsiIJZelBnK3s47%2FoNYPxAj07Gp96a2B1QY8T8R7BkG65EsCwebLOKijbCrBzCNi%2FPrOrdlO6jDxOE5lr28LN6g58FwhZ6U8vO7GgkSMcDsr249OmFwfdnSzGgMWWe4F5FLaScPfjriwXWdec9%2BdLFAHpkiP36m7rwx66ljIjoHNspw7btgwv9Tf1G00CdXxhvdB64NbiMD7Q%2Fo76KtR3Q0QeUP1GCFqunEKPzn%2BF1r1%2BLgEMMw9SWIZle97OY9aJMtfhYnx6cgJuam7nG6gSI5afRMiFhkMogs4CkbjbhCENc4UVztTH5LF%2Fk2yJpjg5pQ0R3muGxcuwfmqU1BnyPwbsyE3oEg13w8naURKN4Ed4jF7EOtZtV3Ch3WVpvYmomhIz3beX%2Fr8%2FG%2BhVkJlqB%2FBW4zIUk4Za198jc%2BQ1VvEZ91Z82DX3T5B%2FD%2F31fS1PltTGfOLV6zOr%2F1fA%2BRkojID%2B3yTos7vTKbiJ9GWyFNz0SnY0uPMmaCLfB0d5hUKVmh22zyEdbDnar3N1sIDFELkQD5YUocccljjQ6p7LMH07HYkg14Ik8KyZ%2Fvj%2BIoc6zCJss3RBjqkAeD42cecxS1YPrzHBP%2BmMc6opvLBMElQcgiPlhFk9HFgOpSbAN80wnMjV66rNVRg952Z73NVczA%2B9S05RNirgq8u1WPO5DjkyA6Ys%2F7FEB7YLGMHpBqRjn%2FSOTaDXsY094UvKLmShVQRmGxjLTl5rHFjRbVBA%2BzDU4H7Pohzd64OUJG5EwdAfscI4CORb2Ejf3OjtxRQtGSM7qmmXp79ldABALb8&X-Amz-Signature=f04bb8777fd72dc4dd8ce73d60e66a0ed16b6a17d17e505700c583dba18bb1f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

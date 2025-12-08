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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQMATHLJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDak%2BVUG96Sy1HNYIVZeSpxCntY%2Bu79jd6j5iz9EGWkPgIgW%2Fcj42eyiO292NSVvRT0ojBt%2Fs9l%2Fr%2Bs%2FoghiOdsBAUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDylA2dd0jhXNfm%2B7SrcAxu6IPXZVsEz7Zs0qxIUDS7vl4ppqKY473CFETJNwuLTrxCx2L7RocoVoBRFSfuX5ems9kxZz3K%2F9vPO%2Fp0Nb2aR0Wf8%2FY3C0J6DEEohHFRVBzvDp0gx19x3HUgVmxL%2BKYFjdiJfiru2qE4Ab5FDfopBdFxJRT2fnKSHIaBDlyTRmjZxzyxnioWwiA2hJyPxv%2Fibo3oJVBpaU73EMEnN0HNQG7Q8XPcKXANFzc4MCuWt1%2BvFAHBKpIbo%2FsFL0DmIPJp%2FVfzFSzRX3rYNDL7WNuNq%2F8o10WqpoRPPityDmn8Bn49qk2IHYQFO39gXjavovLw2OXumoEcsBfVWRbRyJjKDg33okauqe2Xx%2BPZRfTvTarStBZAIiQyREw2nSKWNPVMHENuoED%2FWNTpZOGwuOGQDMK3%2BQopi3DEIGMJRFu1T%2FnHi0akDFkdAbDYuMWjrmXkwmneX%2FoAHj%2B4QSNZYc86wy5QjXGe6df6a6ZXllJnSN5C%2BZ1vEyNh7JTUGaGgqh4C4MWhwhfyK40VpQp7ubQjB1Li9PK9tePp5E3oeK6tMgEMqM2QgXpCQO3obJ3J93ZhMlhPHcpUi9gfQP84XTlPnLn8vw8XETMNoO7cgVY9oPY%2FTiY%2FUSdWv2lQ1MJ3R2MkGOqUB554M9BCuDlrcXv3tGsjYgcPrG1P9cmNCQ5ZM4xo8iRXK9EtRTrn2%2BBFVnlZPMMVRCOzH9q39ct%2Fcd%2Ba7SEE7%2BSPY2ZwRtptEVo6fxrXE22MBs00O5Qn8y8vpqXAEfbOBQN4u7QxVd2BJOtWuAkPO%2F11ylJ5PdfnqN9AWmPGWwimJW7yUgpkDRG14MCx0wlg9J7IvCIZGlKQhccM5PJGYcODNb0mY&X-Amz-Signature=bca4bd781bdcf2b6bcf4e52202047646085e4167ee36bad396d14d404f8034e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S3DO2JY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBP2PLTN5OkowjC57MGMfDPHNA%2FGoVTthigmpyMPjCNAIgU6dm7R57jVnYMg9g13DueC%2FtN9epWvybQNjosmZ%2BqRkqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkXeUpiXKmAD5wKJSrcA2QKAtio1dSFjukD6f0DDw8UBmWJwGzJiOetAzdxky07uWR0RC82UOh6dd5hlceALPE1IIrpSUboqYgLCiXmbTl7%2B5CerOPZGdULmXdTc7JFv1whCoKlHSGdJBK3%2FZeKnPfyZF0eADV0u1Xm%2Fdf7XIpBN1mm2CTg3ExsonzgwgrjmAqHoid94aJQGvIJnhAfoAlJq6jiL3Wb891FVwNeiqYbmWQCJC9W%2FvFMDmp4zG%2FmbuK%2FDuO0%2BUjCoeVUQRnPeGycoKLPNySg8aWo9McY%2FtB8u1FWtHl46X4VSrBJNaUclGuCE%2FtcouFUMSoIOE9NawhavF0KppF4A28Y%2FIBDg43uv6gx9QUqdHzTWjkaBzfVJxqgQ0WrtZINgTQbeI45SWHWRN3HveH7pgmITrQWbqiIM%2Bu644dQe%2FJ7ak9ys7XhZgXfVirUJdwmbKyzAUODHfkDH90VzZYAyjL6msblx1GVuAEUadMhaN4GcIL24T0juofDRalqI8tXQ0zwTFMRsI2GTk1wUSXf72TsicO%2FIXuJ3G2iwx7bxOvY00PopN%2BrC67NwR%2FJkdKLmeWGkXLDmzM9DV9CSQAFb2tIne1TUvm7pUqp2kJ09VYAoCfDiTsB0HF0%2FUVVcBA4fOlFMO%2FQ2MkGOqUBCUkMqUpaoga1iezivZ1Nonq1UxtQar0BTrO1cLJB%2BJ9Ecg9s3yKMxAAq3JehmyEUCT1NfyISwsDRGdw03tZLysSiqcUkPnc1L2CWaZ8dtdjLOhiv9yDE7DGL7hTWxj0whIwaXpbOgwDEIY3NUiL47%2BsfajN3g68oNl9xhHA1LykRKegSZEdNTGPgM27FQHqwW6UEl%2FR%2BaMMGf6XEdTe2b76r7pVn&X-Amz-Signature=45e32b596941b382df7113d27aeb4271a949732f4b6c3b152f1b5df7325c18d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2VUM6VH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC72q3pEdgsK4uF3TFOHukNd0dm8nN1R6kbsfgbcsyLGgIgQBfYdIRkXDFD0C%2FM9LFqFub0v12IUDCZhWthB8mwoKAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4xg0BlCGDIwDfaYyrcA%2BEFtjMdHiSO5TlRHO9jA0MG99uuihCBnksrZBR46cFotoOSHeMHjB06QxDk3lIJ2lfvHR6Zaiauq8RugirifbiLg7ouQynI8hSQLydlojpQ8Cub1oPMyOEo56RQTsXadCOzON5lr7BqSF8%2FOMXzKvXohcs8QnmoLpHw58q8MbVrbVHfo2tdRnw2VsO9UhVnGMIzeDMkfHxgykOxMnAdQFaAbAlTJ68ctDIitDOiuQrG4DBcw%2BcgsZ8jFJz9hU85aVnDbuXrGG0akaXJdzhyT36GQJoy4l4ZQfZwJscEW9LTmCZXlVZcqnaeTVVdsUAUwkkU4JdGZwQ3Mw30XVICFtqrzJgv8BovFWiVc5zmRQIRnXxNdNYDkfVokScYBHAp8mur%2FPaCVt4%2BlelfhlkK%2FuVBb%2FABzM2qwLidvkdkfEUZo9M1UUtadXP0f5gUObFrEx3tpBknYLCwYjcE9fBncZ%2Bt7BqqNJlPldsn7Mh1vL%2F%2BGiqWjOj6YkheXGtLil%2FNHARor8%2FHE7D8axN1pz48%2B7TbA%2BAQEMvNOpKL2pC3QukXrNK8L9z0UtuhUyPtOrQBNSS6azxJMOOW%2BQcH65ay%2B%2FnHt1luAh10%2BRq3QBA7ZF9EUEmhACiSNKJmHqRHMIfR2MkGOqUBLQy2RyD%2FZVkiK4ali6r%2F1eR9i47Qvz9k4l1%2Fvlp03F0eRD8WTJheuUxhEX%2F8ZSwjuOm6dXpu1axkFvIB%2B4UyZIWonlbmLoV2htWYIJqfxIeXMAIu8ruce0jIi3BP1sFeWxUxoN3Ay7h5%2FVzv5BC1cV7gPD%2Frdg6MHnmojj%2FmDEUi4xUbv%2FBoqA7oBsbkzAiBCpfwKVx6AvyGFf8Zu79ORmFILig4&X-Amz-Signature=991b6faa1d209c5d63551606160c51ee91073e977d49154b3e88155f4bb996d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2VUM6VH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC72q3pEdgsK4uF3TFOHukNd0dm8nN1R6kbsfgbcsyLGgIgQBfYdIRkXDFD0C%2FM9LFqFub0v12IUDCZhWthB8mwoKAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4xg0BlCGDIwDfaYyrcA%2BEFtjMdHiSO5TlRHO9jA0MG99uuihCBnksrZBR46cFotoOSHeMHjB06QxDk3lIJ2lfvHR6Zaiauq8RugirifbiLg7ouQynI8hSQLydlojpQ8Cub1oPMyOEo56RQTsXadCOzON5lr7BqSF8%2FOMXzKvXohcs8QnmoLpHw58q8MbVrbVHfo2tdRnw2VsO9UhVnGMIzeDMkfHxgykOxMnAdQFaAbAlTJ68ctDIitDOiuQrG4DBcw%2BcgsZ8jFJz9hU85aVnDbuXrGG0akaXJdzhyT36GQJoy4l4ZQfZwJscEW9LTmCZXlVZcqnaeTVVdsUAUwkkU4JdGZwQ3Mw30XVICFtqrzJgv8BovFWiVc5zmRQIRnXxNdNYDkfVokScYBHAp8mur%2FPaCVt4%2BlelfhlkK%2FuVBb%2FABzM2qwLidvkdkfEUZo9M1UUtadXP0f5gUObFrEx3tpBknYLCwYjcE9fBncZ%2Bt7BqqNJlPldsn7Mh1vL%2F%2BGiqWjOj6YkheXGtLil%2FNHARor8%2FHE7D8axN1pz48%2B7TbA%2BAQEMvNOpKL2pC3QukXrNK8L9z0UtuhUyPtOrQBNSS6azxJMOOW%2BQcH65ay%2B%2FnHt1luAh10%2BRq3QBA7ZF9EUEmhACiSNKJmHqRHMIfR2MkGOqUBLQy2RyD%2FZVkiK4ali6r%2F1eR9i47Qvz9k4l1%2Fvlp03F0eRD8WTJheuUxhEX%2F8ZSwjuOm6dXpu1axkFvIB%2B4UyZIWonlbmLoV2htWYIJqfxIeXMAIu8ruce0jIi3BP1sFeWxUxoN3Ay7h5%2FVzv5BC1cV7gPD%2Frdg6MHnmojj%2FmDEUi4xUbv%2FBoqA7oBsbkzAiBCpfwKVx6AvyGFf8Zu79ORmFILig4&X-Amz-Signature=829b603317d491f77dceccf78f6d5505e33557239805d091a55ee9b8f5869885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S3DO2JY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBP2PLTN5OkowjC57MGMfDPHNA%2FGoVTthigmpyMPjCNAIgU6dm7R57jVnYMg9g13DueC%2FtN9epWvybQNjosmZ%2BqRkqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkXeUpiXKmAD5wKJSrcA2QKAtio1dSFjukD6f0DDw8UBmWJwGzJiOetAzdxky07uWR0RC82UOh6dd5hlceALPE1IIrpSUboqYgLCiXmbTl7%2B5CerOPZGdULmXdTc7JFv1whCoKlHSGdJBK3%2FZeKnPfyZF0eADV0u1Xm%2Fdf7XIpBN1mm2CTg3ExsonzgwgrjmAqHoid94aJQGvIJnhAfoAlJq6jiL3Wb891FVwNeiqYbmWQCJC9W%2FvFMDmp4zG%2FmbuK%2FDuO0%2BUjCoeVUQRnPeGycoKLPNySg8aWo9McY%2FtB8u1FWtHl46X4VSrBJNaUclGuCE%2FtcouFUMSoIOE9NawhavF0KppF4A28Y%2FIBDg43uv6gx9QUqdHzTWjkaBzfVJxqgQ0WrtZINgTQbeI45SWHWRN3HveH7pgmITrQWbqiIM%2Bu644dQe%2FJ7ak9ys7XhZgXfVirUJdwmbKyzAUODHfkDH90VzZYAyjL6msblx1GVuAEUadMhaN4GcIL24T0juofDRalqI8tXQ0zwTFMRsI2GTk1wUSXf72TsicO%2FIXuJ3G2iwx7bxOvY00PopN%2BrC67NwR%2FJkdKLmeWGkXLDmzM9DV9CSQAFb2tIne1TUvm7pUqp2kJ09VYAoCfDiTsB0HF0%2FUVVcBA4fOlFMO%2FQ2MkGOqUBCUkMqUpaoga1iezivZ1Nonq1UxtQar0BTrO1cLJB%2BJ9Ecg9s3yKMxAAq3JehmyEUCT1NfyISwsDRGdw03tZLysSiqcUkPnc1L2CWaZ8dtdjLOhiv9yDE7DGL7hTWxj0whIwaXpbOgwDEIY3NUiL47%2BsfajN3g68oNl9xhHA1LykRKegSZEdNTGPgM27FQHqwW6UEl%2FR%2BaMMGf6XEdTe2b76r7pVn&X-Amz-Signature=d3ccc452d16eea429ba475d8b0537ce86b611906fd568b471a3b6e7262ceb42b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S3DO2JY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBP2PLTN5OkowjC57MGMfDPHNA%2FGoVTthigmpyMPjCNAIgU6dm7R57jVnYMg9g13DueC%2FtN9epWvybQNjosmZ%2BqRkqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkXeUpiXKmAD5wKJSrcA2QKAtio1dSFjukD6f0DDw8UBmWJwGzJiOetAzdxky07uWR0RC82UOh6dd5hlceALPE1IIrpSUboqYgLCiXmbTl7%2B5CerOPZGdULmXdTc7JFv1whCoKlHSGdJBK3%2FZeKnPfyZF0eADV0u1Xm%2Fdf7XIpBN1mm2CTg3ExsonzgwgrjmAqHoid94aJQGvIJnhAfoAlJq6jiL3Wb891FVwNeiqYbmWQCJC9W%2FvFMDmp4zG%2FmbuK%2FDuO0%2BUjCoeVUQRnPeGycoKLPNySg8aWo9McY%2FtB8u1FWtHl46X4VSrBJNaUclGuCE%2FtcouFUMSoIOE9NawhavF0KppF4A28Y%2FIBDg43uv6gx9QUqdHzTWjkaBzfVJxqgQ0WrtZINgTQbeI45SWHWRN3HveH7pgmITrQWbqiIM%2Bu644dQe%2FJ7ak9ys7XhZgXfVirUJdwmbKyzAUODHfkDH90VzZYAyjL6msblx1GVuAEUadMhaN4GcIL24T0juofDRalqI8tXQ0zwTFMRsI2GTk1wUSXf72TsicO%2FIXuJ3G2iwx7bxOvY00PopN%2BrC67NwR%2FJkdKLmeWGkXLDmzM9DV9CSQAFb2tIne1TUvm7pUqp2kJ09VYAoCfDiTsB0HF0%2FUVVcBA4fOlFMO%2FQ2MkGOqUBCUkMqUpaoga1iezivZ1Nonq1UxtQar0BTrO1cLJB%2BJ9Ecg9s3yKMxAAq3JehmyEUCT1NfyISwsDRGdw03tZLysSiqcUkPnc1L2CWaZ8dtdjLOhiv9yDE7DGL7hTWxj0whIwaXpbOgwDEIY3NUiL47%2BsfajN3g68oNl9xhHA1LykRKegSZEdNTGPgM27FQHqwW6UEl%2FR%2BaMMGf6XEdTe2b76r7pVn&X-Amz-Signature=55b0a22d50f32552c58d63b1e2a7ebfc3666a64ef3103e3cce3d79f651cf47e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKS3CC4K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpjryxJ4eI9YPwPoMZbzUrffHr9yCnpw%2FXd0PaWw9QgAiBMEnvzScBS53Z9hYjt5b1thEjoRlk9VLY7lMLzT%2Fb60CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzVzpg7YbQB7Q%2B%2BERKtwD7X6C5I5b64rUBB2C1mNyCRf8ecDJTcHxFgOtdaz6wDcF7SokakyIl84vSL7ZLn%2BdAh%2B9QX3R%2FQSCQFN1BlZ0b%2Fcdc%2B%2B1ZW9ydUbXoRhieM8c4lY23jVp%2FVsmnGRh5qzaK5DE9PWZ4Smnzc%2BEvuXE5kKP%2BIb4nHFYUinzputjIX9orKOsn3u2nbg2mLjJULup5l4hNJerOjBB5xyN7i4sXO1AmRO0awhFDIhqnJsOUjeG37KA8U3K9vR46SZIAcdYWCYHDYEhYUvllGet%2BbF6lPSZpPw5fwWr%2B3Ux95DV8COwE1YN6PSPbLJT2%2F1PaBrVyeg2c3WV42k2fAHmUaQPNlC54zXlRS%2FuF%2BgXWRUWyMCguG6aNM4JLjxFQD3d7AG1JazXaAxA5kh1Aohq%2BUNJEYei8RqF%2FYmR39LyYrkYnPLbW6DT5ih0COEUwXyWJK1mCR1VH9V%2BQM7Z8572fXl0HPC0bBEbh3YtT5dSgd0GSPq2ZgfWbsuuCwp9KWDeF7Q%2BvRUoZhF26wjdpbu88IuEYuK75TGyT3e1Jb3CVgIpbudIeNPAxO6GlQLWTzQdy9MERnWQI5t4Bf9p42XuxFsbhunrR7tHOuhN1SjBFYj69YOPxbUNWGEshdAuRCwws9HYyQY6pgFRnikYdFZje0sJfL0OdtIzWi4m9U0SRVfHctK98N2HCWJ3e49v5ZrnDadCj28s9VXdiHEtzkqzchvwiMlOmcCd4LMwsF9FU2hTACJT0ic9pqZ0LiVd8pM8LxdDq5RSALky2XzuidfX1n6b7K2jOu8DYwRTk64uSoEAcLeHb4PRpOHARR2IUtXBsB%2FUhpPTC5GuH%2B6hs9wFP3Ix77vDW%2FVhOS94QpZ5&X-Amz-Signature=d2e7fc52cfb47cc4f3843d434e811d1e971190192d64ae30189b95f9e22da426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X4QIRVY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDn22w6DxgqJZDjL%2FakhRlvUGm2mWZjKsLzGPSsjb9aBAIgJJqlG8t3gx7DpcEIMq%2Fc3fqxMgal5K5UimpMtPHA4%2BcqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpakdnshvwHeBqG6CrcAw7EN%2FuO7nAgBsNIDRGgHsBBsBfro9ZUXfLNxC0DmIGoNs6xbG2XRWR2sqd2lZQcLIKHVHvvhU0oMwWFQSk5MQjkU5Y3CA4CV42cRP%2BY%2F1YNcwXuzC2d7og5ajg%2FmhmugZIDjO0iQURmUDPFZf4ENPBdQ4l4RQ9u4SkSW9KWL9aEc%2BB%2F2dlcH7LxBJApN2%2Bzra%2BMv24haqxCH4im5FCPdgmBwQAvWA7405RhwQAtep%2FTWCSAJtTioNIqPkI2WgSuNZ1QQpLTL%2FHdE83bp2lvYsyRTI2Bqu%2B%2F6IBD2ncJ5gmMsGCyAYYEKuu9LB%2BFbeRjYLsz%2FkGc%2Foct1ATVdbBmcp29D%2FZCTIoQ5NvoVgV6shiuuLvuJvMxhvLWftBYj9tPjHf%2FpFSk7TvVaJzKtJvkvoAPkTdTtHd7hZEBCW1sc0%2B3ynh10SshoPrB1jsQyQgB8F5JKsXM5yma%2FSatH03Dsfv0rBfKo8zOHMunIk8TWa4MxuGTW04DvYx7pi1bEyW2%2FqkxUjIbEyH%2FqihTv4FPZggFaY4hwYOMQZmnHsFzxM6D7ChSuL9L2iCyQHiqQ6B5kpc93c2hoNQ%2FcRLytj5znMi7mc5q0Cj3CXLgn4M26TE7t%2BLizI8frLlHF4zxMI%2FwosYGOqUBQmbkdofWIE64enlEgXg4WoGkDEky8px6Aoit1fk%2Bbw86aSy272Z1nWbAnua09%2BF6r2Ss3OqT9xLOjaKst%2BUK75qxVwzN7BlPB7jXX9y5%2BFZwAev4k7U3lMvSs6ZYhfDtsFzuYjI0bD12Lz3t2m7v8Ydp2fL2k3y%2Bn7ZdX%2BHmVAhD9e5GSy3G8nk%2BC8c0GLOjeB82opGOZQjo2%2FZzbjrx0EsxcjLm&X-Amz-Signature=1f966766f364724113a2f91e7ea79d36506c9233b39df4f0810203d1c150911e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLPJWG5K%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCVajDCqdk2HYZg29XihGrtT%2BWyXBj1r4qafVmFUavfuQIgKZ%2FmwYBbM0pVp8DJ5OrKkH9yYiWWyfQJBx%2Bqqj7TMH0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZZgOSf5sKfvQYNQSrcA518wqAEtlfZ2JnhnuZJnch%2FlqKGPxrq1vipu0Pw%2Bb9tpYA74LRrt796ZSURQrFrhkzpRzW5WGJ%2FhYUz0ZtCIVPCAQUTMDh5SzgLi2AsJrxsO9LqTj0kxoR7mtYXRMTE0z0olUBvS411fVVZMPoJEZ9lGR6jCnmVmjZc6f5y4juFcjNC2r8TKQjxRCIXceYpL%2BjTbomc5I%2BB7RDjI8pGCsDgnUAOhruT45fRAGIB2KZaD5W%2F4Xd2QQnZRTDIyefnyVzFI77DJ73vISJsqg%2Bc%2FkFf0AaMBRjD24y1R2y08QDnWq85q8RjY5527vcAwfsO%2FfsODlqrGbJZ8fK2Dx9w222GrlYCzFTfLflDSU86oJC7kUrbjCkqTPE5Ir6SQVnHa5jHvEWJIHByns9yPq34cZ%2FfTtEJo4qyPCidVvVt53eeF%2Fo%2Ftb77Yo25SxahotMG%2F9FHfmNKNP6RQRmNVDO%2Fxk3LhvM5LfugF%2Fg61WRzU%2FViT0JvjxUFOxvBYD4VIdhPXB%2Ffldu63flHMp9I6zqZsx4%2FHEwxm%2B3avXlRzr122VbyQeLo7gZ8gQoA%2BkTd1qCt9NYjHLjgKkt7LNUq8y1hWknSMt6LmsHd8vRmAaHVU0j4nhCQka4Kqrrsva2GMLfwosYGOqUBY7NVOVbgoQ%2BYqCUQAKw77koZnzS9J6lxwRzoux9GSSa%2BEQkkoWgND965WeZxGST8y5MIYT%2B0Vy96ZKdjPlbonV8MVGnFqbXopmAGMV4CnKEC5tLlxLBRhBDt4e2l8eTH%2FmT%2BguFptju6G3sJ%2FuRdjlovL70ay5UJw5xoC0mWHRKQqoAQGQ4lWou4Ru%2FgrmjO%2BA3W3xIcbaG1yLjpm%2F%2Fp2PgNL4Eg&X-Amz-Signature=df23003c3380838044acd4e3b56cb56c6a8e8ea8dbdb30b0d1e5162fd4c76f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XSZP7VK%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIGDBKFzS%2FUgPgxeBD%2FIx721P43s6JrSth%2FtKhDgQBwOFAiEA4BSmwbbFBieGxxfWRf5PjCK%2FGweSetgCqZfOsVmbXmAqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcrIpSUpYZ9W%2FqYPCrcA6rwTgmouD9Vs2fY4JWHSeV2DcSO4IfrffaxQzNYKB3B0lz%2FqyUGlbDkh2mRAzf0XjzA0afpB3SQCBZ%2Fa%2FF%2BJqZj6SL%2BAO3yf7hql33nYOCZKONqumqy9DSAeOxbz%2FyxtteHfZkIALo2qMUhp6bHjaVEll57JkoV8WWXkB%2FpvT7PxP%2B2YPpPKoSaIim44syzGLACi2mGPbuf8T5RlOhXrKOVuwO4PDBsWG%2Bt%2BKVU2WeenATMvdt0a%2BBzjSbsYt0ldkQ3gIDAxQBGO6TqvLSRSMTIvhNDo1%2BxhIumsilG%2BR1exYPrUHSkhYhb6tzeMNS0wNlplfyvIPXKuJ1GHkgf3nDsYwq%2F2wlapg3UJ7SgsthBgWtqyvGHaMJ65pd4VJHheCN0oUOZAvxcBaH2xwZ3OUJpvvAQBEOZKIo8aAm3HKHJK7wo%2B2SaSYajG0SX2TVdGqZdePhB6j6zphRo74uq1X9DLvzvUCe9f39QB9cFQVXQtYM7f07Xn1IR4cIt3NRMJGoyaeHguTCwn4zQYVIfajrsNzR3OPnE2Bdc4HoirSzvLRVl3JEKJZhEKWgPSdnzH2zR%2BW9eFgcGx7uM2FCUBYZ9Cw9LJLzpOfqlwP59qEggv9MIAoVaEJhvtTt3MJvvosYGOqUBSRTx9YfDVMivY8omJkeFHdXcTAwY807V9O%2BqGuOQnZbeQmNZIKIJ5g9JkNiKkxVH98hjzbDKTxAsDt5Y%2FDjGcDUTg6SwjOCwEgwBivQCNDrvRMI%2BFYyUvpLihwYUEZpf9b%2FBV9HMDDhO0jLEoUcnzLNETw5H%2FfiDO0mMopzyG5mWMx86ay4DZS0ei9NdA8kVaxX%2FauY0LdtX0Ywff%2Fk92q%2BiD%2BXq&X-Amz-Signature=fa00b56e228018b3fee81381234a613091e2bb708dfeebbb19680513f67da4e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XSZP7VK%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIGDBKFzS%2FUgPgxeBD%2FIx721P43s6JrSth%2FtKhDgQBwOFAiEA4BSmwbbFBieGxxfWRf5PjCK%2FGweSetgCqZfOsVmbXmAqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcrIpSUpYZ9W%2FqYPCrcA6rwTgmouD9Vs2fY4JWHSeV2DcSO4IfrffaxQzNYKB3B0lz%2FqyUGlbDkh2mRAzf0XjzA0afpB3SQCBZ%2Fa%2FF%2BJqZj6SL%2BAO3yf7hql33nYOCZKONqumqy9DSAeOxbz%2FyxtteHfZkIALo2qMUhp6bHjaVEll57JkoV8WWXkB%2FpvT7PxP%2B2YPpPKoSaIim44syzGLACi2mGPbuf8T5RlOhXrKOVuwO4PDBsWG%2Bt%2BKVU2WeenATMvdt0a%2BBzjSbsYt0ldkQ3gIDAxQBGO6TqvLSRSMTIvhNDo1%2BxhIumsilG%2BR1exYPrUHSkhYhb6tzeMNS0wNlplfyvIPXKuJ1GHkgf3nDsYwq%2F2wlapg3UJ7SgsthBgWtqyvGHaMJ65pd4VJHheCN0oUOZAvxcBaH2xwZ3OUJpvvAQBEOZKIo8aAm3HKHJK7wo%2B2SaSYajG0SX2TVdGqZdePhB6j6zphRo74uq1X9DLvzvUCe9f39QB9cFQVXQtYM7f07Xn1IR4cIt3NRMJGoyaeHguTCwn4zQYVIfajrsNzR3OPnE2Bdc4HoirSzvLRVl3JEKJZhEKWgPSdnzH2zR%2BW9eFgcGx7uM2FCUBYZ9Cw9LJLzpOfqlwP59qEggv9MIAoVaEJhvtTt3MJvvosYGOqUBSRTx9YfDVMivY8omJkeFHdXcTAwY807V9O%2BqGuOQnZbeQmNZIKIJ5g9JkNiKkxVH98hjzbDKTxAsDt5Y%2FDjGcDUTg6SwjOCwEgwBivQCNDrvRMI%2BFYyUvpLihwYUEZpf9b%2FBV9HMDDhO0jLEoUcnzLNETw5H%2FfiDO0mMopzyG5mWMx86ay4DZS0ei9NdA8kVaxX%2FauY0LdtX0Ywff%2Fk92q%2BiD%2BXq&X-Amz-Signature=cd31b4a6b47fd552758ecfa512adc2ac917bfe89cf1a7a43ba32a69e1a5cc8da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLPJWG5K%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCVajDCqdk2HYZg29XihGrtT%2BWyXBj1r4qafVmFUavfuQIgKZ%2FmwYBbM0pVp8DJ5OrKkH9yYiWWyfQJBx%2Bqqj7TMH0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZZgOSf5sKfvQYNQSrcA518wqAEtlfZ2JnhnuZJnch%2FlqKGPxrq1vipu0Pw%2Bb9tpYA74LRrt796ZSURQrFrhkzpRzW5WGJ%2FhYUz0ZtCIVPCAQUTMDh5SzgLi2AsJrxsO9LqTj0kxoR7mtYXRMTE0z0olUBvS411fVVZMPoJEZ9lGR6jCnmVmjZc6f5y4juFcjNC2r8TKQjxRCIXceYpL%2BjTbomc5I%2BB7RDjI8pGCsDgnUAOhruT45fRAGIB2KZaD5W%2F4Xd2QQnZRTDIyefnyVzFI77DJ73vISJsqg%2Bc%2FkFf0AaMBRjD24y1R2y08QDnWq85q8RjY5527vcAwfsO%2FfsODlqrGbJZ8fK2Dx9w222GrlYCzFTfLflDSU86oJC7kUrbjCkqTPE5Ir6SQVnHa5jHvEWJIHByns9yPq34cZ%2FfTtEJo4qyPCidVvVt53eeF%2Fo%2Ftb77Yo25SxahotMG%2F9FHfmNKNP6RQRmNVDO%2Fxk3LhvM5LfugF%2Fg61WRzU%2FViT0JvjxUFOxvBYD4VIdhPXB%2Ffldu63flHMp9I6zqZsx4%2FHEwxm%2B3avXlRzr122VbyQeLo7gZ8gQoA%2BkTd1qCt9NYjHLjgKkt7LNUq8y1hWknSMt6LmsHd8vRmAaHVU0j4nhCQka4Kqrrsva2GMLfwosYGOqUBY7NVOVbgoQ%2BYqCUQAKw77koZnzS9J6lxwRzoux9GSSa%2BEQkkoWgND965WeZxGST8y5MIYT%2B0Vy96ZKdjPlbonV8MVGnFqbXopmAGMV4CnKEC5tLlxLBRhBDt4e2l8eTH%2FmT%2BguFptju6G3sJ%2FuRdjlovL70ay5UJw5xoC0mWHRKQqoAQGQ4lWou4Ru%2FgrmjO%2BA3W3xIcbaG1yLjpm%2F%2Fp2PgNL4Eg&X-Amz-Signature=2e12686eef3670eb4676a1c795a634568967a882732f98d2cf6d6c7cc3900f62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLPJWG5K%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCVajDCqdk2HYZg29XihGrtT%2BWyXBj1r4qafVmFUavfuQIgKZ%2FmwYBbM0pVp8DJ5OrKkH9yYiWWyfQJBx%2Bqqj7TMH0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZZgOSf5sKfvQYNQSrcA518wqAEtlfZ2JnhnuZJnch%2FlqKGPxrq1vipu0Pw%2Bb9tpYA74LRrt796ZSURQrFrhkzpRzW5WGJ%2FhYUz0ZtCIVPCAQUTMDh5SzgLi2AsJrxsO9LqTj0kxoR7mtYXRMTE0z0olUBvS411fVVZMPoJEZ9lGR6jCnmVmjZc6f5y4juFcjNC2r8TKQjxRCIXceYpL%2BjTbomc5I%2BB7RDjI8pGCsDgnUAOhruT45fRAGIB2KZaD5W%2F4Xd2QQnZRTDIyefnyVzFI77DJ73vISJsqg%2Bc%2FkFf0AaMBRjD24y1R2y08QDnWq85q8RjY5527vcAwfsO%2FfsODlqrGbJZ8fK2Dx9w222GrlYCzFTfLflDSU86oJC7kUrbjCkqTPE5Ir6SQVnHa5jHvEWJIHByns9yPq34cZ%2FfTtEJo4qyPCidVvVt53eeF%2Fo%2Ftb77Yo25SxahotMG%2F9FHfmNKNP6RQRmNVDO%2Fxk3LhvM5LfugF%2Fg61WRzU%2FViT0JvjxUFOxvBYD4VIdhPXB%2Ffldu63flHMp9I6zqZsx4%2FHEwxm%2B3avXlRzr122VbyQeLo7gZ8gQoA%2BkTd1qCt9NYjHLjgKkt7LNUq8y1hWknSMt6LmsHd8vRmAaHVU0j4nhCQka4Kqrrsva2GMLfwosYGOqUBY7NVOVbgoQ%2BYqCUQAKw77koZnzS9J6lxwRzoux9GSSa%2BEQkkoWgND965WeZxGST8y5MIYT%2B0Vy96ZKdjPlbonV8MVGnFqbXopmAGMV4CnKEC5tLlxLBRhBDt4e2l8eTH%2FmT%2BguFptju6G3sJ%2FuRdjlovL70ay5UJw5xoC0mWHRKQqoAQGQ4lWou4Ru%2FgrmjO%2BA3W3xIcbaG1yLjpm%2F%2Fp2PgNL4Eg&X-Amz-Signature=a183bc19f7f511af0ac6b47ddf0612c5e05b47860f5402ee400bddaab31808e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKSRBAP%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDYALVxMv3I4J52yzIYlbngCUzem6mgOG941IvBCpMQHQIgLCOVoks09A1ms3luuSITdSZ6B112mtCQSUd4C5jkXfQqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKeiQoDnrX9qWT%2FISrcA9%2FG0s0WRtbv6Yx1ji9ZiFxJy7W93IJWeIoxiIFYq1egGAqqsTzjpc82XQPi%2BvwzCoceXM6E6UAqqMdt04QFaF%2Bb3GrfHfEWjTEqpvk9ct1VssNPpHiupTcLQ93OB4gkVGvqExMzXJF0AK0vQUmW48a1MrlE25lw1iu8ts0TrA5VXer4m8xotAtlxp64zGatnkHMmke%2BphKWVgV1I6KKOS7my5zHhxH0N%2B2xhqgAM1WzsIAv8o%2F9OZWywW1pQQux8fapFRiYMa2aWye%2F%2BYFGeS3%2FO%2FlQtCI9tqeXOpg5clfkI1z1Pi%2BjpcNzjekta5KzqQugbXjopQtNZNaPfe6hWKpvPKJF1WFg0d8LjAckiYGBorWcEiZnSMop3PymPVBPLiD6vfc7QAAMGR7upni%2BcJjIjMlSj2tnOSqn%2F50moTBd0ClzFu5zmu7P0CAKUJUbWuuZBcWxXjwiaCH2CmHDfNBRY8Fh5RpPXwD7N6fyILE2ZpdU24itDTNFk84OUPeA0ZmkovBPR3ydnJLaQ0v6iPTR6e4qUauDDC6On03rsMO2v9Rcn82bTkYHl6NsJA9sXwU%2FebyUi2XiimBMdnW2xnJybyrI7S72Ohaui5l2XC7i9sx5PJ%2FtINMsZqFkMNTwosYGOqUBARcezzCyrNhDby4sV3791cPdxcNJQgHqqRPERRxCFy69erRbv28GZwJUSW6blEAxMp2CguwUeX87OdwUA%2Bt2UkPL4SO0Rsot3%2F8qe7pWOXSXFQpMRFW3Zp0rCRoyoX4DVGExgHocufe02YLHGYt0l6KFgCueWr3wVZOHXQSGxmY%2FBtQilvZDkBeHt4T47jIryVzRLOd02QZZ3A7PgYsuDUOHH%2B9j&X-Amz-Signature=b23abaedf16bba4404d4120ad2bfd2c2e4dc3ee18dd17bcf607f62c3b6e2d632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

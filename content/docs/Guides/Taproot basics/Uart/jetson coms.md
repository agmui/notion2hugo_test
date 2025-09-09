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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VBMGT3E%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQC%2BsjS2zFJVpzTQ1B045PBho7y1DK%2BGcG3Y2iaQUBnfyQIhAMnmQeDFC6hkMpq%2BIIPY3nGxpvlOgGeq9LIqGX%2FngWdrKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9vXs%2FmJVwSpZL1V0q3AMKZKZh8d9JIOUFv5RtYntylODAKAvsQw563eoQbSoIR9ogI70WkJAeRJvmePH9hKu%2BsCQiaWI%2BjxgpZATt7%2FXl%2BspnGP7e%2BBeS%2FVreFOQ7u7wksT7MvnZIx2cJabg%2BVV2%2B5t6L81NsHMzAjzp3X6RWO841gX6kb%2BqCx2u4spFtlDi5dsEles5TM3VCujqjTq11pIXpQ4vrSlqIWjfE1FdFh0R5lWaBu1idTMk2Ej26sZhdSjGLZC30io0%2BoLM34Gc6Cvrt5o5g1y7xR8XoWzpuGvpstciRm8qj1m7daQsNm2pZg89qUcklz2kRefquYDGaeUCEj67YgN6GKUM9pZxPMz3qjQi3zmPUvy4U9GwlR7JVllOGiToj4FnsCkGlWFVOEwtrgqPW42%2BchHghlW%2F7PF7UKGhmWlGDTiQkNjqtguHLOdy2uO3Jsmzyv%2FKu057Nvw%2F1opeQpOCFFUkgN4njtuCQtMZC2dL5dTgbqbb%2BjiOSld%2Bjf37gQsvMX3w4h3RhXUxYMMUxxXcK9s523UMc7Wm9KoaF0CYZvJY4i79NntFpBVdHrrACgF7Io51CANECx5uPaJOsrVJbUu7iukmqQUqjoQPNwwR1jJGPOlaFcoKPdybdEF0OMj%2B1AjDa8v3FBjqkAY%2Ff5aM0D%2BK1YE%2Bbqc6QduKkyHs2gC%2B2pKLKtDsoiIEOK%2BKsyM%2Bey7TifTemoPQDvcyh3eHGYm8ouMRKw1DfBqxNMsPQ8tl%2BTTzeoI06cXKJCI52W35lDqgs%2BtoenbqYZ7Y1bsyrzGZHJf%2BLEsVqRKNbPhba0lR4iF1CKuLIPp%2FFazN3ALK%2B3wDgyfhtRdfCxlZ2FrCb%2Fmzm8U%2B2UyQmf3jxxK%2Fd&X-Amz-Signature=72460f33421baccb1fc3e5d83c1d905fc20a6675e0318053693c24c4520137a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNJ2PUK%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDIo1lvzw2VhAZUO4FAOyyoXmfLDU%2FgNGngPe2JXaHyIAiEA5QKSemkgv0F6kf1dGAry1YBruOaGnvY2gbHw0DKZVBIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCd%2BoLTYmrUg8epdxSrcA7z%2FwAnuPi4G5AI0pHNcu9o%2BWD1cErzCJ0SYV4dJI5n%2BVx8ZpEDEnkpHC6H4FjgJ3q%2FixlHfLOyqsdJSmloLQeoSKaHvI1A8kD%2FOMkY%2FTW1WTZiQQnufSYUf%2Fqdossupdv6jUXOizJbdp9bxe%2F0brNesDDdggicNLaoHb3m1QPeTwyac5LiTqSdPXsopr56ylV4Ou1jRWQXAicwTWn7hNEgf8SiCRA3KPpZdHt4HlEr7Nx4R8U3gv0RmrhWpgN8es5nsBXQi23tLjsOuHzz0aRfNKdvt5oK4wwBep5IIfipTzS8WPU1c1eA%2B0mOGbFkuNW%2B9gJbMjxvbJXrA1s8qYyQsDwm0njX%2B%2BDXDvSMkpiYE2Wj7r4H7bDjFT7GDnhjcJnlLAlfJcf8GN%2BTcd649aMWdqRqCQuMO9kHwEwDGlVwLchtF1XmXxmLPYQFUW58s33wmrdy4j6PRQlTOeLfR2%2BU6jGEFrxv%2Bq%2BKdEYOlq6e5T%2BaaqUHngN2iRDAcH5BOVw9C4GhaDnVKwfjS2sF5tgkbIm%2BChQaIUndAttd%2BjeyepOGdfU%2Fs9urEDg8FKGWoPkVchYC3Rm8CTIPYWUQw%2FznTB5n2ttePp0LKqI1e9NqsZgDDUpSCrlyhV%2BA7MP%2Fz%2FcUGOqUBd3f1dd6%2Fjpflzqq24244ubuMfD%2B4CmUItReVxyuqba8YLr5DO5IHzaLBYJHwtk0nhErCYBaLwVSIWcYrTnIoD%2BwV3yh9%2B4PzHe7PutElbFx90cX1zb3J3AFV43jM0Q3iX%2B7xlsHr9HqY5qfFyRqg17ZpmnQqwJ1wABRyhdtCp%2BEg%2BuQ1E4FwW%2FdbU%2B1USuhhSuILFZRpZpJIIk%2FhDW6ocmC85PQw&X-Amz-Signature=7e154c1dff615b222ef7b4979bc35fcef3561a1f3886f5d2ecdb6ec417af3509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NPGH6XX%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDj%2Fy81Im%2FB2IWSzR3yET%2FCuMuC3qXuZPfwC6WPqof%2BewIgNAPdsrODh4BdBXSytmX8yMOOfa8IC%2B6UZ69lRZKEEOcqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEccR87u7BiC0VHI0ircA5K5yMTf3G0wB0vRVULJbiV1fGfSkEAwVb4BtgjBBaNkNSYOf2o3AxOz%2F7vTpkHX9EF%2BDrvcr056X%2FLUq4YapXYEh1TQz3Hn2mpeQdf7Zw1X98V5KQEKFNAoacZ9v06iMF4pwaWSVg72nEi7MtWMqvmQHk2PPDPFol0W2t72loOmkHYzn%2FwSVjulof%2B2tD183a9AnEXehYmhPBI7IXoQHlhft8I2kE8mkNgfIyZQHNA4bCt9xL09902xz2Dxk1AsHgT3K40ij0L8qf3AUykQWpdPHYLyEYwvzLZEWuxeAdrULYTcKGe4Oiw6LDQM0KpgMWmDbzteBmv6j2qHvSGUt4taPauqLgICnZ6qBk%2F6%2FvcEgxio%2BHiEWFNs5FQ%2FBJVJWAEUf6k5RDUoRNF2eTc7O%2BYKHveNcj3MuxjLzMS06W9HkYZ8sOKRqga1Wg5Qf3%2FFnnfE41VWK%2FxGeBGy0MfCr2P21V6LN%2BINFofKeDfnVqPIFN2f5k40nMyclM2TVJ4rAXApBsYjqMJDDpflyeAn9ai3hJPmf2hMThac4LjkKK1fZLdQMOaJYjLR4VDoqhyBL31H9MSP%2BOQ3k539GywGTM8B0PrVFZ6NWKArhD%2BqG7NiSLLvOlRjIN62L7M6MKTy%2FcUGOqUBzSOs5HV1wQoQSL9iTPnDwu5P%2Fp%2BaFI5REfK2LcE3dt9E97MNd1vVVf5cF8TWqPUDm4w3yMlcmFGSfvhSkY4s4n540qzRqe0%2FsHLJZtidEozI9eEuueHWU2SWtSy1xxjVDbmHQNVYeQC8J1RDDmIPA%2FBvTXHBh4okJKJ752YzdR6358yNwmysuCr6MQlDaTwA9cOndKabs2qeQ5RHa4y%2FkTPDlgYk&X-Amz-Signature=7d6925279af29d5817a8bec2ca99ff375194eda603303bb566b58aa07e9027d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NPGH6XX%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDj%2Fy81Im%2FB2IWSzR3yET%2FCuMuC3qXuZPfwC6WPqof%2BewIgNAPdsrODh4BdBXSytmX8yMOOfa8IC%2B6UZ69lRZKEEOcqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEccR87u7BiC0VHI0ircA5K5yMTf3G0wB0vRVULJbiV1fGfSkEAwVb4BtgjBBaNkNSYOf2o3AxOz%2F7vTpkHX9EF%2BDrvcr056X%2FLUq4YapXYEh1TQz3Hn2mpeQdf7Zw1X98V5KQEKFNAoacZ9v06iMF4pwaWSVg72nEi7MtWMqvmQHk2PPDPFol0W2t72loOmkHYzn%2FwSVjulof%2B2tD183a9AnEXehYmhPBI7IXoQHlhft8I2kE8mkNgfIyZQHNA4bCt9xL09902xz2Dxk1AsHgT3K40ij0L8qf3AUykQWpdPHYLyEYwvzLZEWuxeAdrULYTcKGe4Oiw6LDQM0KpgMWmDbzteBmv6j2qHvSGUt4taPauqLgICnZ6qBk%2F6%2FvcEgxio%2BHiEWFNs5FQ%2FBJVJWAEUf6k5RDUoRNF2eTc7O%2BYKHveNcj3MuxjLzMS06W9HkYZ8sOKRqga1Wg5Qf3%2FFnnfE41VWK%2FxGeBGy0MfCr2P21V6LN%2BINFofKeDfnVqPIFN2f5k40nMyclM2TVJ4rAXApBsYjqMJDDpflyeAn9ai3hJPmf2hMThac4LjkKK1fZLdQMOaJYjLR4VDoqhyBL31H9MSP%2BOQ3k539GywGTM8B0PrVFZ6NWKArhD%2BqG7NiSLLvOlRjIN62L7M6MKTy%2FcUGOqUBzSOs5HV1wQoQSL9iTPnDwu5P%2Fp%2BaFI5REfK2LcE3dt9E97MNd1vVVf5cF8TWqPUDm4w3yMlcmFGSfvhSkY4s4n540qzRqe0%2FsHLJZtidEozI9eEuueHWU2SWtSy1xxjVDbmHQNVYeQC8J1RDDmIPA%2FBvTXHBh4okJKJ752YzdR6358yNwmysuCr6MQlDaTwA9cOndKabs2qeQ5RHa4y%2FkTPDlgYk&X-Amz-Signature=6e1f25617950925cf8a63bbc24c93184adde8f929f22bb2514381398e6669442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNJ2PUK%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDIo1lvzw2VhAZUO4FAOyyoXmfLDU%2FgNGngPe2JXaHyIAiEA5QKSemkgv0F6kf1dGAry1YBruOaGnvY2gbHw0DKZVBIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCd%2BoLTYmrUg8epdxSrcA7z%2FwAnuPi4G5AI0pHNcu9o%2BWD1cErzCJ0SYV4dJI5n%2BVx8ZpEDEnkpHC6H4FjgJ3q%2FixlHfLOyqsdJSmloLQeoSKaHvI1A8kD%2FOMkY%2FTW1WTZiQQnufSYUf%2Fqdossupdv6jUXOizJbdp9bxe%2F0brNesDDdggicNLaoHb3m1QPeTwyac5LiTqSdPXsopr56ylV4Ou1jRWQXAicwTWn7hNEgf8SiCRA3KPpZdHt4HlEr7Nx4R8U3gv0RmrhWpgN8es5nsBXQi23tLjsOuHzz0aRfNKdvt5oK4wwBep5IIfipTzS8WPU1c1eA%2B0mOGbFkuNW%2B9gJbMjxvbJXrA1s8qYyQsDwm0njX%2B%2BDXDvSMkpiYE2Wj7r4H7bDjFT7GDnhjcJnlLAlfJcf8GN%2BTcd649aMWdqRqCQuMO9kHwEwDGlVwLchtF1XmXxmLPYQFUW58s33wmrdy4j6PRQlTOeLfR2%2BU6jGEFrxv%2Bq%2BKdEYOlq6e5T%2BaaqUHngN2iRDAcH5BOVw9C4GhaDnVKwfjS2sF5tgkbIm%2BChQaIUndAttd%2BjeyepOGdfU%2Fs9urEDg8FKGWoPkVchYC3Rm8CTIPYWUQw%2FznTB5n2ttePp0LKqI1e9NqsZgDDUpSCrlyhV%2BA7MP%2Fz%2FcUGOqUBd3f1dd6%2Fjpflzqq24244ubuMfD%2B4CmUItReVxyuqba8YLr5DO5IHzaLBYJHwtk0nhErCYBaLwVSIWcYrTnIoD%2BwV3yh9%2B4PzHe7PutElbFx90cX1zb3J3AFV43jM0Q3iX%2B7xlsHr9HqY5qfFyRqg17ZpmnQqwJ1wABRyhdtCp%2BEg%2BuQ1E4FwW%2FdbU%2B1USuhhSuILFZRpZpJIIk%2FhDW6ocmC85PQw&X-Amz-Signature=3248f38a8489644c9ad759804ee33979d9ea6998ed82a76f1f5ff0e0fc653f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNJ2PUK%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDIo1lvzw2VhAZUO4FAOyyoXmfLDU%2FgNGngPe2JXaHyIAiEA5QKSemkgv0F6kf1dGAry1YBruOaGnvY2gbHw0DKZVBIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCd%2BoLTYmrUg8epdxSrcA7z%2FwAnuPi4G5AI0pHNcu9o%2BWD1cErzCJ0SYV4dJI5n%2BVx8ZpEDEnkpHC6H4FjgJ3q%2FixlHfLOyqsdJSmloLQeoSKaHvI1A8kD%2FOMkY%2FTW1WTZiQQnufSYUf%2Fqdossupdv6jUXOizJbdp9bxe%2F0brNesDDdggicNLaoHb3m1QPeTwyac5LiTqSdPXsopr56ylV4Ou1jRWQXAicwTWn7hNEgf8SiCRA3KPpZdHt4HlEr7Nx4R8U3gv0RmrhWpgN8es5nsBXQi23tLjsOuHzz0aRfNKdvt5oK4wwBep5IIfipTzS8WPU1c1eA%2B0mOGbFkuNW%2B9gJbMjxvbJXrA1s8qYyQsDwm0njX%2B%2BDXDvSMkpiYE2Wj7r4H7bDjFT7GDnhjcJnlLAlfJcf8GN%2BTcd649aMWdqRqCQuMO9kHwEwDGlVwLchtF1XmXxmLPYQFUW58s33wmrdy4j6PRQlTOeLfR2%2BU6jGEFrxv%2Bq%2BKdEYOlq6e5T%2BaaqUHngN2iRDAcH5BOVw9C4GhaDnVKwfjS2sF5tgkbIm%2BChQaIUndAttd%2BjeyepOGdfU%2Fs9urEDg8FKGWoPkVchYC3Rm8CTIPYWUQw%2FznTB5n2ttePp0LKqI1e9NqsZgDDUpSCrlyhV%2BA7MP%2Fz%2FcUGOqUBd3f1dd6%2Fjpflzqq24244ubuMfD%2B4CmUItReVxyuqba8YLr5DO5IHzaLBYJHwtk0nhErCYBaLwVSIWcYrTnIoD%2BwV3yh9%2B4PzHe7PutElbFx90cX1zb3J3AFV43jM0Q3iX%2B7xlsHr9HqY5qfFyRqg17ZpmnQqwJ1wABRyhdtCp%2BEg%2BuQ1E4FwW%2FdbU%2B1USuhhSuILFZRpZpJIIk%2FhDW6ocmC85PQw&X-Amz-Signature=d37a57931c2b726fa6fd71fd492b6bfccab3e329d451b743ec99ede080ece24c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PPBD4JA%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEN51bKM1bdAzlK%2FVeCmMFpqGY%2FTn4Q%2BAU7pwLctta7HAiBtx7nXD9S192KGnJsGWPS7eqJNrNR3vZtfxlqcRaQidSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKpASU3q7Ax8dA5XBKtwDV65imfGhcqZw02%2BjMN9HH7rdoR8ae4Vnj20K1KAnp2%2FwqUdkWaAw%2BT%2BTWoxSsCyN8gqWgo3w%2F3PIMBoWJKNthYUt6%2BN8fSp7MHovWaBM%2FX18p%2BRfeWscxrp6tiZdgF1hmmMY9AKO8faragRmAyVLeBDsyj6nEGlywcy6PsLp45FJZw5e8zOP69qvWD6suHU%2FJ9iU%2BzYfJDKJT5GhlYCZWFuxjdYCX8x0YHIvhdfuvmmM6%2FuB3NRb5d9XRJEouoYEX6MwTF%2Fj4uh2VKu2tZCSQ8xq62C%2B8acrxIZjGnuoB%2FY2zhgHVX%2B5xYiV6vxBJwZVXbr8pgJWQt0NUBqOPHDSwrUxs%2FEBKE13LAyeOEDvynRAg%2B212EzmtdKaiO794BlthaQ2Fsj7kQQRGl9njtOjvtmeKEDv1GAPs8PNJokerXvgrylKlhF4%2Brcluxd9CX4d1QeesW3Ad1ohJmGPhROtbM%2BBbnylTEud0wISaypslrOs%2FYkc5j9t6CoXGNPUkjt%2BYQ6oafGfISl8dwJBTQlDTl%2Fo6uCmD%2FHXJ0sFgWnJEmG36Qas8ToLSEUmClmu%2BwBFt7iW7460A9Yz4Jz7%2BXPTBFg%2F09KmvmvJlxdF2UpEjeM6xv52O3g%2FQj6hbOwwu%2FL9xQY6pgFWJzBI9tIQPeedq637jp2VMlnaqSkaWDCDFnTzKnzPKS5HqUgPmX%2BbCd%2B3dlUJPiS6qD2TYvRxTRv1X37g6lOHZBvlWY3v52kqJGM09ThGKtlMCzNLbEs%2BDFD%2F9s7qeR9YdyKS82TJoGTQbL8evEv5sJXDsP4wLqD8%2FurM%2BWB1LTWdxdPtbmOC2PnT7h7y98spAweDgshOKCyY%2F82QWdqkHyIMEMto&X-Amz-Signature=60aa80126827acf557f9e3d4c3a0347fba4a18f89b7246e88b3eef95bf3a5e13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

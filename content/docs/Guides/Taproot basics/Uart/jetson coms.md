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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEFGDDPY%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIG3l1VFIfQ6uxHm1S2UG8xm8SOd9McEICpFBkjYdBDWKAiEA5Zj0CoEgEpwVOZ2lcS%2Fr0ijzbOr3jWAmVAKtIVbjQIwq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDPnoVZKQY8HuWqW4jCrcA2GcaBD08XiB7MdtJoSEWoEzq6NMOuCU1FppJFPbYyXCmqLxQW%2BxgBgsT4GYZnGQptu5DJZUCzyZYkgzHVSpvrwaMTZbaymDLb2leCXLU9qNOu9LghJgEfIoF%2F76V13xlpHBkG%2FQH72DAdR1dHark7OZv7BeCYMn8FnbL012DRQKrSZLqLStUpDdkMjqetwBi4wr3Zf6dRIA9no7d2uoCfEW18%2B20RQs6MQhez2YsL%2B6QCse8jQ7elqprU2mzAhCqn6Bd5x1xyRvEY3817ScS2L08E1L375OKTaHRNHUqKjxPBXoYZT0nm77XHQaMjU2zi956CR6eWolkXN553rr0xc4hM8VnC7YFgHwdEO9lSNddyptLRNjIQiyUuQ%2BxIt5%2BnWLcL69X%2FH%2FzoekiH0cxClrboC%2F5%2BwKFE4hk8JraOCwucrLLzFjILTLwi%2BH4dgFYrrfwlQznDZiv5FvZymjZgKEM0C4EQ3PiwbWoRz%2FSWsUQB1njIob2tbtd48YcvpTmXr0R1bPZAwtCut%2FUI0HIbduWg4sqFzE%2BSBoyxRCx1gkYS8Z1j1QOzuvIQTNlzMmoKbgx6NbrV%2FH3ydYfEh0MpdIcJAL%2FJ941zslGL5IT4Hl8Or93EitjhioU3y9MMWs0MsGOqUBtAD98SZr5GPrExnNeeeI1%2BMbIu35LUvgAuVyLLmhXK1jc%2BvD%2BIITJhzU6auBTzaXnhAwioiRu0mrwkipg7GdtZjRQ6OkHdfBb%2BiM84bXqC9fzKpeEeincIT8iMAiMR4%2FoczBRlsm4%2BQFsbZGL7156bDWbEw66wqGobBeUG%2FCOZ2x020BxeH6iH9BCr7JF2X0WIZ4iZ9kV3xpHQtq8pMyg%2F6Y8NVB&X-Amz-Signature=59c86c56692975d042c8e30d6f243236aa07ffcf22da4e487f9628530cab1345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y22S7C37%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCrLtvbjd%2Fs61KgZpjMleaKUkg%2BUDOSZRyM2AdiyUakawIhAJPS3tuRj73FM23U6snH1atBtDTChkOTd8bpe56alg0iKv8DCAIQABoMNjM3NDIzMTgzODA1IgzgaNsaLqIMD5EwhW4q3APp2Aah9K6kK%2BZJn2XXbAWSpTUdOXsKaMjRBfwUmRhDfxrid3KgAvXE4mTU5r24vwNB7aw%2FU1plpKHJivTb7BjLMv%2BApSEhZMVh4RXgf1qp06X0qhGqeSxE3i8TlGcKjphM4etaT4YTVtZkvGF2xBjSL1S8kGrfxJCN91uPjSc86HpJtF2bxjxCMlDR%2FXSXiAdujImkZDOyQpD5SQ10QqMyt7%2BrJRDCwKY9KkcABnYAmv1wfdVcYpU3Ebh%2BXradsX%2BOtWY2quiYilmHp9vtqFY89ddhiMrq2pB88p0MPNrRFsxsmA25ZxfWdofktj5UIcG%2F2hlK2P5UvWkG%2FvR6GjhOe%2B5FL%2F7VRpWsDUrM6GW8L%2BhMoD9gcfy0%2BJoico8%2B1yRLwkQb97xKzTHOWva%2Fw3K4R3sfmeu7h8BmEi3CKmp1l09nOGGidbhT%2BSnfhl5PJgSlm%2B54bte7YWdzbb6i2njOyj6lzNxnjSbE8nvdGdV1NC4U%2FQ8v822UYHAMWOtljTAMzSt%2BrWB5k3oyapDdHwcwIfePOJMILdRrZ%2Blnp5BYjJ%2Bxfs8FxRfBWypqKexcDAP0RBrF1knkwLAnhzajCfjCixuLoaGGu%2FwLZKQ0MugZhagCJ3tkO54jJL9bqzCNrNDLBjqkAQveJfEBezKQVmUmfATz5hUUHAvVUkkdZ4jDuodBhH2H%2FoyuzWmqilGaD32O3UgeHbwfbww2rFQJ9FsaQECLlePM3U%2B3LdC18LbrX3TV07t5L06g02dAkwPre2mWadi%2FK3OutJ4vhiUA%2BSUIvLAUDdy6dO1yDE25oWjCkdus46uWz%2BfZ6N0NNsW6%2BlZu%2FdWGgqG%2B2lYkYvTy9hp2WetIeUpfjIRV&X-Amz-Signature=6424ab3f7227a45eb629feecfa1655f9c862559b75960e62df6188d56edc7218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRZSMVYM%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDJM8DBDWhvw7AsIP2IM1QY1iH%2FH4hi21j4JGr3u%2BVtPwIgWsJErpHLx0WAprN0bPVQYEoHQ0JFfb5L7LSsIZOgpPwq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDCTntJTcjwQpzgk4pSrcA7cu3GjyjFGw3%2FnKJ8n76QBhwLLFpjK4B9sLBx0mP8ZsDjEs6twNAHHGtJ0pahentKcAAEW7vhk7V1P72Xk9lV5kwF6nhZwWYkHqc6njASFdSr7aVjGBCTIUntrZ1BnjWh0k82AcDRwQDRSgtlod%2B7QS11t0LR5Al3d%2BdhFs0FZiaq767UImsjAV2sB41oq8qgpSxtzkLIfFhDDhINQpAvytP89vddd3kj4AiOLuX0qGe2TFaS5n2d01DqJ%2F4okfhoa9eKnksji9jojSdArPQ0eiMMhd3rE5bmizfqewVB09o%2FtD0HunwU3BRUU0fdc0NnlShJc9Fn1ZUCFGeDt0oUqUmgkJLeod%2BtHwWtk5Rlobzv%2Bt6Osyrxoa9ATCsqJyRlrNucUoD5gVCakN0HxtZTb1CmnaVnZPCL11nL7zuxiltPPJyTA1aSmF%2BUGik65ZO8siXtQssHwwwdBJp66yaeEmDhOlEs2qd0G4O5aukACxL%2FNgcVyAZib6tM54z4fP0uUkFFWB3l8Huf9yrbyXXRfwrTvYihuBJeB9HWDz8N5m8rKMDJGXIRe23kKHmvmK1ezfhUAjhs%2Fhs2jSwMDWC918R3IQVzrMGWmjyglc2B0r1P7ZKug96adFkE71MPis0MsGOqUBQQ8rHVUacDlhGpK2k6WK%2BUmHcEbevXRsyaTiH2HGPe2gM1H4uCTzgP4rXMDzeSYnTeMo960kWEiriQswgA%2BGW2JiRosRDFZbBGFp0kK3D7DMCb5zN2KvuvWmlROmRnIJj8Mq2D8sA0ju417sHPL1%2B2Pklha8%2FigK0BLq8fTaicwpqkY4hXGOyKr%2FjkNfyWozdlaFOb6kcLd5rXLLuXZutEhCXUQS&X-Amz-Signature=1f6684093cd14d67d58d19868020da6489cf8c6e81fde25e157bb8725d69c73e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRZSMVYM%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDJM8DBDWhvw7AsIP2IM1QY1iH%2FH4hi21j4JGr3u%2BVtPwIgWsJErpHLx0WAprN0bPVQYEoHQ0JFfb5L7LSsIZOgpPwq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDCTntJTcjwQpzgk4pSrcA7cu3GjyjFGw3%2FnKJ8n76QBhwLLFpjK4B9sLBx0mP8ZsDjEs6twNAHHGtJ0pahentKcAAEW7vhk7V1P72Xk9lV5kwF6nhZwWYkHqc6njASFdSr7aVjGBCTIUntrZ1BnjWh0k82AcDRwQDRSgtlod%2B7QS11t0LR5Al3d%2BdhFs0FZiaq767UImsjAV2sB41oq8qgpSxtzkLIfFhDDhINQpAvytP89vddd3kj4AiOLuX0qGe2TFaS5n2d01DqJ%2F4okfhoa9eKnksji9jojSdArPQ0eiMMhd3rE5bmizfqewVB09o%2FtD0HunwU3BRUU0fdc0NnlShJc9Fn1ZUCFGeDt0oUqUmgkJLeod%2BtHwWtk5Rlobzv%2Bt6Osyrxoa9ATCsqJyRlrNucUoD5gVCakN0HxtZTb1CmnaVnZPCL11nL7zuxiltPPJyTA1aSmF%2BUGik65ZO8siXtQssHwwwdBJp66yaeEmDhOlEs2qd0G4O5aukACxL%2FNgcVyAZib6tM54z4fP0uUkFFWB3l8Huf9yrbyXXRfwrTvYihuBJeB9HWDz8N5m8rKMDJGXIRe23kKHmvmK1ezfhUAjhs%2Fhs2jSwMDWC918R3IQVzrMGWmjyglc2B0r1P7ZKug96adFkE71MPis0MsGOqUBQQ8rHVUacDlhGpK2k6WK%2BUmHcEbevXRsyaTiH2HGPe2gM1H4uCTzgP4rXMDzeSYnTeMo960kWEiriQswgA%2BGW2JiRosRDFZbBGFp0kK3D7DMCb5zN2KvuvWmlROmRnIJj8Mq2D8sA0ju417sHPL1%2B2Pklha8%2FigK0BLq8fTaicwpqkY4hXGOyKr%2FjkNfyWozdlaFOb6kcLd5rXLLuXZutEhCXUQS&X-Amz-Signature=1a69b2ccc080c805545a85c1d858c3d1c0a77be9263b8dd5465fc4f8f9501123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y22S7C37%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCrLtvbjd%2Fs61KgZpjMleaKUkg%2BUDOSZRyM2AdiyUakawIhAJPS3tuRj73FM23U6snH1atBtDTChkOTd8bpe56alg0iKv8DCAIQABoMNjM3NDIzMTgzODA1IgzgaNsaLqIMD5EwhW4q3APp2Aah9K6kK%2BZJn2XXbAWSpTUdOXsKaMjRBfwUmRhDfxrid3KgAvXE4mTU5r24vwNB7aw%2FU1plpKHJivTb7BjLMv%2BApSEhZMVh4RXgf1qp06X0qhGqeSxE3i8TlGcKjphM4etaT4YTVtZkvGF2xBjSL1S8kGrfxJCN91uPjSc86HpJtF2bxjxCMlDR%2FXSXiAdujImkZDOyQpD5SQ10QqMyt7%2BrJRDCwKY9KkcABnYAmv1wfdVcYpU3Ebh%2BXradsX%2BOtWY2quiYilmHp9vtqFY89ddhiMrq2pB88p0MPNrRFsxsmA25ZxfWdofktj5UIcG%2F2hlK2P5UvWkG%2FvR6GjhOe%2B5FL%2F7VRpWsDUrM6GW8L%2BhMoD9gcfy0%2BJoico8%2B1yRLwkQb97xKzTHOWva%2Fw3K4R3sfmeu7h8BmEi3CKmp1l09nOGGidbhT%2BSnfhl5PJgSlm%2B54bte7YWdzbb6i2njOyj6lzNxnjSbE8nvdGdV1NC4U%2FQ8v822UYHAMWOtljTAMzSt%2BrWB5k3oyapDdHwcwIfePOJMILdRrZ%2Blnp5BYjJ%2Bxfs8FxRfBWypqKexcDAP0RBrF1knkwLAnhzajCfjCixuLoaGGu%2FwLZKQ0MugZhagCJ3tkO54jJL9bqzCNrNDLBjqkAQveJfEBezKQVmUmfATz5hUUHAvVUkkdZ4jDuodBhH2H%2FoyuzWmqilGaD32O3UgeHbwfbww2rFQJ9FsaQECLlePM3U%2B3LdC18LbrX3TV07t5L06g02dAkwPre2mWadi%2FK3OutJ4vhiUA%2BSUIvLAUDdy6dO1yDE25oWjCkdus46uWz%2BfZ6N0NNsW6%2BlZu%2FdWGgqG%2B2lYkYvTy9hp2WetIeUpfjIRV&X-Amz-Signature=4ea4a8ec7746a0744cbb7db39cf2593dec2ad36477a5c2fa2187e5e0bad9d385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y22S7C37%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCrLtvbjd%2Fs61KgZpjMleaKUkg%2BUDOSZRyM2AdiyUakawIhAJPS3tuRj73FM23U6snH1atBtDTChkOTd8bpe56alg0iKv8DCAIQABoMNjM3NDIzMTgzODA1IgzgaNsaLqIMD5EwhW4q3APp2Aah9K6kK%2BZJn2XXbAWSpTUdOXsKaMjRBfwUmRhDfxrid3KgAvXE4mTU5r24vwNB7aw%2FU1plpKHJivTb7BjLMv%2BApSEhZMVh4RXgf1qp06X0qhGqeSxE3i8TlGcKjphM4etaT4YTVtZkvGF2xBjSL1S8kGrfxJCN91uPjSc86HpJtF2bxjxCMlDR%2FXSXiAdujImkZDOyQpD5SQ10QqMyt7%2BrJRDCwKY9KkcABnYAmv1wfdVcYpU3Ebh%2BXradsX%2BOtWY2quiYilmHp9vtqFY89ddhiMrq2pB88p0MPNrRFsxsmA25ZxfWdofktj5UIcG%2F2hlK2P5UvWkG%2FvR6GjhOe%2B5FL%2F7VRpWsDUrM6GW8L%2BhMoD9gcfy0%2BJoico8%2B1yRLwkQb97xKzTHOWva%2Fw3K4R3sfmeu7h8BmEi3CKmp1l09nOGGidbhT%2BSnfhl5PJgSlm%2B54bte7YWdzbb6i2njOyj6lzNxnjSbE8nvdGdV1NC4U%2FQ8v822UYHAMWOtljTAMzSt%2BrWB5k3oyapDdHwcwIfePOJMILdRrZ%2Blnp5BYjJ%2Bxfs8FxRfBWypqKexcDAP0RBrF1knkwLAnhzajCfjCixuLoaGGu%2FwLZKQ0MugZhagCJ3tkO54jJL9bqzCNrNDLBjqkAQveJfEBezKQVmUmfATz5hUUHAvVUkkdZ4jDuodBhH2H%2FoyuzWmqilGaD32O3UgeHbwfbww2rFQJ9FsaQECLlePM3U%2B3LdC18LbrX3TV07t5L06g02dAkwPre2mWadi%2FK3OutJ4vhiUA%2BSUIvLAUDdy6dO1yDE25oWjCkdus46uWz%2BfZ6N0NNsW6%2BlZu%2FdWGgqG%2B2lYkYvTy9hp2WetIeUpfjIRV&X-Amz-Signature=05096c74c0e8aaf99ea9d6e8a54f2686f709ff315e6c5abb019be75c92325729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643D7CDFY%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCdo5MXGE0VjVOX9x3el7vfjQ0yXjOoQnXxil52JzjtLQIgdot5rCrP3VSKboJuY67mgM%2FGEbOfeGP%2Bi%2FQMPUgQuAcq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDC6zVe8w4HV3rytI4CrcA2uen56JmpLeLDCVkDO%2BL0lVkICaDlx8sWSXqVBE3qZZgvAOYqaVXB%2F6%2BEDU5Pe9P%2BlXcSdXYNuxwV5rZL1ajw%2B2I%2FpE%2B3oUTxHbUeZ59x1sCID7lPYxhCkx7RLe9rBTGltfaDT%2BUf4Zjo63d7wb9XKayZt3laQa7Jw2NFDNBEnMZiIlf5dta%2BdMIT29JeI9gqYtMo6OyKlWdI0iAEYiQbwyyKgZGbG2MIODvyCmo51YM0HteWNGNQEIKvO4FBx7ALqvhDX0Xh2NeWFKz%2BotCDxQPrBe33yeJoPKFAyIPAmEkaCSnFce79MjV9%2Bfn9Izu0x1uaD24Fcb04YJeUK%2BtEK8dRPWspMsA32JnNQkHPvxawWt2KtGvZc5JVqBYFvVZl4fUxptVY6Zl9pyoHklRDBQuq4Ei1gx8ck5gpoXPcjQM8ZbCbjtaQczhZZCyxwlD4pzuKLkRBk6XCCIug76ArYnUM8fqBfzS899GCXFnEHzU4sq8drksZsI2G4h9M2mgijn602Qx16zvB%2FpExHYuFgua4hd3f6nBuZ75F9cyg5OzWBeSMMUWroFyqv1s%2F4k8h268dFwBkfrAbIeWh03756arbDL%2BBkXOtM%2BxHLu%2FJWXlAXroltK3jRTnK8EMN2r0MsGOqUB1q3JUDOhpkKGSAoCGVGMywONOo58T1tNK0N1lz9pmzSnf%2BDf2CN66uiFU47x0FtyJpLnwG%2Bw7idWoixbUDSREH0QgCQgHWNsdjQ8QR9RF1BYkG940GIKt8sy1dH7ynvmAYOjES%2FPJYlgpT%2B2mj5qLsFzgyXxQiExxWwaWZn%2Bh0FlSi1G9%2FgpOXVg2NfA2jh2Uua6Pin102ATO%2Bfu7x6OqWMHJK9u&X-Amz-Signature=a5f3a9f60dd31989e80f652ee1cb6159b60d095bc1393399eafcd8684beea243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

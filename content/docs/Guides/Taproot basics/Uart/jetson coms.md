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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSOUK7JE%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnNK7cNi%2BlQkPDiTmeJIsnS03%2FFphguaMqDbl3qBgWVgIgNxHjxsIq6q4uryIaDmRfZG5fMYSCC6lhUyB3TD0%2BeMEq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDPklxm14u8bRJljnGircA0IRvycSqSawyq3jEG14lIzGFVNSktnuKLCwTRp%2BiXSEaHBAhpurHjFWZaS%2Fv42CFlpqgELDzbqX4RqSuW3n1Qp%2FuYjVjCGjt46MhJguKouEVra7uamrqX%2Bn%2BkRLvY65IFjunSy4%2BC6Vx98d8u8pG1N25Ad78r6WgWZCve7cSW4w%2F%2FYzh4iUypW3pZgnaWeJCZrQ7mb%2FODK6h52o5k2Of60%2BaNy8Tu6yGz%2F1X0A6Te1%2BQwM%2B4F9hgc8jler2pAS%2FZ3f0VfylQUm3RQazWr4%2BojE7bZIyb99wt4AgdGODgeTQpc3zt%2B8oe2B2VyqmnN3PYCb7TWEGEf%2BxgIMtu%2BKnTzC0MHFZ1XuXQThppkSwU3vyOc6hoBQglHOmYYIeFdU9jd%2Fqr%2FfYR3jOdYsvVw0bhmZ1yzfZ778sOxx2k4IZ%2BUuAN%2B0Usx7kixsXGEw46nxokbJz4fe52IHJt1q%2B5yWxDOs4UVJnKLa2rndyG5fHHELquKR8oD57XEynA6Kl3%2FobCraKBUKv0aad6%2B4iloh22iumWiUFzHd%2FNCr%2BkAzoOGgWgwow3rXaDxY664ZtI06U4NujOEFT7uH4fNSt%2FJ8XKR4%2FHm99Q4n%2BiGrhJKYc5XUhWatsW7PDI4MM7P6jML%2FSydQGOqUBl013z%2B7TJ4YORb3HWKy%2Fj16emxdhyUkPMBQ1gi6gW7LS5RbI61ffBGyxxKz1MwrEPTgzEG5mXWOQdxZKJp%2BOKNPAu96wa5mwKBTSAitDxnDkTVNaprBS5vWLMVNPkWE7C1rUfdOFqWyjHOJDBHBXDK%2FE5Odq%2B3oonUml%2FljDcxCRiaQsZ6Ij3kmtE0VIZiDtDXmARmoR5Hg04biqJ41fPfbVySi%2F&X-Amz-Signature=fd8d8de07e42dcfa5a0d8470b776341fb411fa27e904346f7b8a6daa657159aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPHYM2VN%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCDMxQ1a%2FOULn0nwI59XLf61ZitTceIsoUhSVhHT1YhQIgYgZcAO8kga90k%2BjQYuPlwDJ%2F%2FZSEg8xR%2FVtD5sQkVb8q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDLsTfT9%2BF88cbrwbHircAypZnydHiGQKYSDJkI8f6UlotKZqUbQpW9IWMF1J8emDq5mzTix6TXQJM%2FzXT39d6VWOAEWu7GtoBbOLudkuPSbJo2DpI5eh1Ib8om%2BIL%2Bgx5MVPRC2QpqEiy2ioPY99EyvID8aHStV%2BJaNvUhM4lLcldrkJYkLoRRRsL5YR14bQDiItQ3Df7EJx2zIF3k2ALmJ2UNIavsDvPa%2Fp2gN9QxDrCEIM800cr7wTgZFYUEAULx85CVAaE3UauSZQanZYVQe0s4M%2FYsgIoBVcvmQj%2FcZlIik4kKrSR%2B4KCORg4XsHl0SWwgkLcfDprhyTW%2BHrTVaN1rB%2FI0kEzOQnVQeg5ip%2Bilt7Omx0GiWvFXMpgEuIl87Pz3bL2nIIf51kctYZMB9WgiPWtlsoPnIj%2FNwrJXAWGyIrlXrMgebBnpNhzsYtoKWlItBSWsZQyWbVVT324U%2BmC6MCcGzVIqkgbV0LKq%2Fkaa9aDehc3UmOF21nNLuD%2BDMDHhdBDKlv7l44Ngfrxhq6Ox6wHzKLrE5XsvW5w79EBi4jROBPF2MrhqdCpOaRVpbLJruAv7svwN2lHJVcbpRnt0BX9BA6p0P8BEY7nws%2FuGoyI1XGUiUqaUbLm2BLUZlB%2B45r48VcvbFYMPDQydQGOqUBXavJSxzZV9XV5j1kZgGgnRWVRkhp5p9EoK2ZEbPTo5Rq3GuLJTFm0si0GzDTV1vslTfXXi5RZr3kwOJsMfD%2FLQUrkFGrw5hCYK%2BQkT5tkRVz2Pcj2spzmxJfOt9V3FgZiU7rt6BTQ7iFpRNvIrFC4NMLqQ9V8QjV3PLpnfaBdTeHwPqjfqtBHCEImK5r3%2FV0S3iqoL8iV5hA4bUmqpywF%2BhWy0O1&X-Amz-Signature=02d1a604b277bd73748419e38d7b99f5adfaee34ac3ede571413ac2d2ef7329f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGPZF5R%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsxUq7cmPsl%2FudoWmBVOQhjYxwxc4QjMijjw000%2BAZSAiEArAzhTzp1%2Fir7lWwXowixA1mE1Hvirdskyl5T4MNaOnUq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDI5yeo8ybS01cZFWuSrcAw7JKAYwPRtzMUWpu1Kk%2Bx%2FC6abeGQntDtoZxx1iH9aCAfO11wjlGnSGJ0PIT29vM2REKKN%2BSVjAdqoKnuVESEpTzw9GQQbRTclog9G%2FPEU70HGqNLNiyxtCBGmLM%2BPtlfBvPuG0dST3pkXy0qDLH00DHGOP7MKYF9XII%2BIEHLuumR64h19wD0YqTztyuQ188MkUjZ2hlGaRSVuRgW5fgyONqalWQ8o0aO%2B0CQCZ5R8hqDQohDumfUD0lEV%2BdrL0v3D5FMs4JeoY6COxWP4q7yjjKUEKqEycdDdoocK%2FVBh3iIURCvc6rjiHLuK1UymoNMn0o%2Fzh8rUBjOI4hvYR27PP88yh2X38yNAOZYVihZYwjr72it40u0z05MLjYjTB81ua5vuWP0%2Fp1qZViGECxuGw4lgon5nCyhcb%2BsoKdGZwFDhTXKysTSaG12oj9dWWvsPzj6R08DDhiEMRiUV1WcxVCq0quoyzze5T%2BsfK%2FHdwTp2aSVMrraZ8%2BQ%2FyeJV35sBbzAZRSswHIfeo0J%2Bw4psuctn4ClS%2FFEwanifudlImbUQCg9lI617wp6GK92X3Ga0EU3lJT9GTUV%2FMk76B7tG6fNBFfKo5iJM7FJ3f%2BgdgNE79pZGBjIPcR6MGMM7PydQGOqUB12SjNBLKq1TWcY2LVhheutnVKRISjpdm0oEJEJst3a%2BVBrqk1%2BZhMuU7LvYKoPvfhG1%2BzcDqHTbs%2BMsvcBlOlmQZmRBNXvmOZKbMUFTeGobJngD96BbBiKpLcZM28OiTYrbO64yRsmzb6jQeBskZIwMRj2cvxogeAr%2F4yDIQC69xcFlXmr0usRQDDdW3aVqRL4FhOF3sw4Eln4zwKZnqH%2Bt8IFLz&X-Amz-Signature=6f3bb6448b3b73ad22958680d716f56e232f51d9223d37dc3cac3114d7d30cc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGPZF5R%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsxUq7cmPsl%2FudoWmBVOQhjYxwxc4QjMijjw000%2BAZSAiEArAzhTzp1%2Fir7lWwXowixA1mE1Hvirdskyl5T4MNaOnUq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDI5yeo8ybS01cZFWuSrcAw7JKAYwPRtzMUWpu1Kk%2Bx%2FC6abeGQntDtoZxx1iH9aCAfO11wjlGnSGJ0PIT29vM2REKKN%2BSVjAdqoKnuVESEpTzw9GQQbRTclog9G%2FPEU70HGqNLNiyxtCBGmLM%2BPtlfBvPuG0dST3pkXy0qDLH00DHGOP7MKYF9XII%2BIEHLuumR64h19wD0YqTztyuQ188MkUjZ2hlGaRSVuRgW5fgyONqalWQ8o0aO%2B0CQCZ5R8hqDQohDumfUD0lEV%2BdrL0v3D5FMs4JeoY6COxWP4q7yjjKUEKqEycdDdoocK%2FVBh3iIURCvc6rjiHLuK1UymoNMn0o%2Fzh8rUBjOI4hvYR27PP88yh2X38yNAOZYVihZYwjr72it40u0z05MLjYjTB81ua5vuWP0%2Fp1qZViGECxuGw4lgon5nCyhcb%2BsoKdGZwFDhTXKysTSaG12oj9dWWvsPzj6R08DDhiEMRiUV1WcxVCq0quoyzze5T%2BsfK%2FHdwTp2aSVMrraZ8%2BQ%2FyeJV35sBbzAZRSswHIfeo0J%2Bw4psuctn4ClS%2FFEwanifudlImbUQCg9lI617wp6GK92X3Ga0EU3lJT9GTUV%2FMk76B7tG6fNBFfKo5iJM7FJ3f%2BgdgNE79pZGBjIPcR6MGMM7PydQGOqUB12SjNBLKq1TWcY2LVhheutnVKRISjpdm0oEJEJst3a%2BVBrqk1%2BZhMuU7LvYKoPvfhG1%2BzcDqHTbs%2BMsvcBlOlmQZmRBNXvmOZKbMUFTeGobJngD96BbBiKpLcZM28OiTYrbO64yRsmzb6jQeBskZIwMRj2cvxogeAr%2F4yDIQC69xcFlXmr0usRQDDdW3aVqRL4FhOF3sw4Eln4zwKZnqH%2Bt8IFLz&X-Amz-Signature=720b981f69f507edf8f29c93dd2249b087cbde3d83702ea7994ab0459dda3a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPHYM2VN%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCDMxQ1a%2FOULn0nwI59XLf61ZitTceIsoUhSVhHT1YhQIgYgZcAO8kga90k%2BjQYuPlwDJ%2F%2FZSEg8xR%2FVtD5sQkVb8q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDLsTfT9%2BF88cbrwbHircAypZnydHiGQKYSDJkI8f6UlotKZqUbQpW9IWMF1J8emDq5mzTix6TXQJM%2FzXT39d6VWOAEWu7GtoBbOLudkuPSbJo2DpI5eh1Ib8om%2BIL%2Bgx5MVPRC2QpqEiy2ioPY99EyvID8aHStV%2BJaNvUhM4lLcldrkJYkLoRRRsL5YR14bQDiItQ3Df7EJx2zIF3k2ALmJ2UNIavsDvPa%2Fp2gN9QxDrCEIM800cr7wTgZFYUEAULx85CVAaE3UauSZQanZYVQe0s4M%2FYsgIoBVcvmQj%2FcZlIik4kKrSR%2B4KCORg4XsHl0SWwgkLcfDprhyTW%2BHrTVaN1rB%2FI0kEzOQnVQeg5ip%2Bilt7Omx0GiWvFXMpgEuIl87Pz3bL2nIIf51kctYZMB9WgiPWtlsoPnIj%2FNwrJXAWGyIrlXrMgebBnpNhzsYtoKWlItBSWsZQyWbVVT324U%2BmC6MCcGzVIqkgbV0LKq%2Fkaa9aDehc3UmOF21nNLuD%2BDMDHhdBDKlv7l44Ngfrxhq6Ox6wHzKLrE5XsvW5w79EBi4jROBPF2MrhqdCpOaRVpbLJruAv7svwN2lHJVcbpRnt0BX9BA6p0P8BEY7nws%2FuGoyI1XGUiUqaUbLm2BLUZlB%2B45r48VcvbFYMPDQydQGOqUBXavJSxzZV9XV5j1kZgGgnRWVRkhp5p9EoK2ZEbPTo5Rq3GuLJTFm0si0GzDTV1vslTfXXi5RZr3kwOJsMfD%2FLQUrkFGrw5hCYK%2BQkT5tkRVz2Pcj2spzmxJfOt9V3FgZiU7rt6BTQ7iFpRNvIrFC4NMLqQ9V8QjV3PLpnfaBdTeHwPqjfqtBHCEImK5r3%2FV0S3iqoL8iV5hA4bUmqpywF%2BhWy0O1&X-Amz-Signature=b1bb29f807e3b36ee7cbc08c123b9811493161eeb89d0aebd5a12658c08d2853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPHYM2VN%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCDMxQ1a%2FOULn0nwI59XLf61ZitTceIsoUhSVhHT1YhQIgYgZcAO8kga90k%2BjQYuPlwDJ%2F%2FZSEg8xR%2FVtD5sQkVb8q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDLsTfT9%2BF88cbrwbHircAypZnydHiGQKYSDJkI8f6UlotKZqUbQpW9IWMF1J8emDq5mzTix6TXQJM%2FzXT39d6VWOAEWu7GtoBbOLudkuPSbJo2DpI5eh1Ib8om%2BIL%2Bgx5MVPRC2QpqEiy2ioPY99EyvID8aHStV%2BJaNvUhM4lLcldrkJYkLoRRRsL5YR14bQDiItQ3Df7EJx2zIF3k2ALmJ2UNIavsDvPa%2Fp2gN9QxDrCEIM800cr7wTgZFYUEAULx85CVAaE3UauSZQanZYVQe0s4M%2FYsgIoBVcvmQj%2FcZlIik4kKrSR%2B4KCORg4XsHl0SWwgkLcfDprhyTW%2BHrTVaN1rB%2FI0kEzOQnVQeg5ip%2Bilt7Omx0GiWvFXMpgEuIl87Pz3bL2nIIf51kctYZMB9WgiPWtlsoPnIj%2FNwrJXAWGyIrlXrMgebBnpNhzsYtoKWlItBSWsZQyWbVVT324U%2BmC6MCcGzVIqkgbV0LKq%2Fkaa9aDehc3UmOF21nNLuD%2BDMDHhdBDKlv7l44Ngfrxhq6Ox6wHzKLrE5XsvW5w79EBi4jROBPF2MrhqdCpOaRVpbLJruAv7svwN2lHJVcbpRnt0BX9BA6p0P8BEY7nws%2FuGoyI1XGUiUqaUbLm2BLUZlB%2B45r48VcvbFYMPDQydQGOqUBXavJSxzZV9XV5j1kZgGgnRWVRkhp5p9EoK2ZEbPTo5Rq3GuLJTFm0si0GzDTV1vslTfXXi5RZr3kwOJsMfD%2FLQUrkFGrw5hCYK%2BQkT5tkRVz2Pcj2spzmxJfOt9V3FgZiU7rt6BTQ7iFpRNvIrFC4NMLqQ9V8QjV3PLpnfaBdTeHwPqjfqtBHCEImK5r3%2FV0S3iqoL8iV5hA4bUmqpywF%2BhWy0O1&X-Amz-Signature=4a22ec46812966fe372d704173b45a605e71efed0628726c648927919005b366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRSQZ2YI%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKQe2qtINRYgKrjlmxSPgqkPdrI5Qeq0S9shU3ehEj5AiEAn58DPvlPJaj%2BLyznUJBX90oTG08wEsekuhlxF1etQ%2FMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDIKwQaxf1upvCPLMhCrcA15dHOrNoupHy4zcx1Zi0C2hPQ%2FnjYbQRFo1FS3hKG%2F23HgNHY%2FESUcYCNyYaaYEXaUd%2BSbYge46kgd5NGxWVyL10cPXiAFYLomX%2Fbu%2B77o92gMnJ%2FmARx2KK0G7Jv3pRrU1u3IOKXLCsSIjIcRBv7dBr4zhnJbLa2%2FxbNNtxPz1cwIUqUjNCqjNqn5kh45mYfeS%2BkCQq2EjogN9hz6HaUzcDsfxm%2BIcwZQs2nEQ9Ts2Ky3f%2FxdUvM9m5%2FMJXM8jpG0K4MZYBmcyDgI%2Fc174Apf3Y0Fx2tngw2f0Y0yfVxikIKltEN2DhwVSn4B59%2BY6sNKytmTqYkfYBv%2BnzuVQNcP6pbU1%2F0%2FyYmlestc3oS4FUkyh71m0WZKzZp93eqd2F16smmrwQZgD%2FLx78ePq19hgYCSIB271tPcVzC4XutIMciLYItxf%2BxqmaHQCz1KcwRG9xX2C7sWzf1z8KZDxDpjWABpkcMh6hg1tmA%2BaZFEb0X2uEv50YdBdvvoObnFVSp02tEy4BvRlcplr4b6y6d6moiP2FC5RIyUkXtagtXh5nkSUXFf23q5X1XbiCNgN57Dg5f46qw4wB1%2BMUvhB5MoxDP0tl670uUEq6OmAR8pubkhpwlvh7hdPH3H%2FMMTRydQGOqUBvYNWOV9VqWrXkUqWkXERWkrGOeBF2pBrMDlVeiSyJPCLKLPZVBzDf%2FwtgPJl1QUiIMaDWvMrwHFpuvHzt25FUmCZBB8KjmjFSsKC2FnFk1W3qWFcVlbKutmfgaKTd3XFn99zZdJ5VaxUf%2F91HjpTvV%2B8qTi5Whm3lI5KSAXOWeCwCmSI4l55%2FcXDGhyzHCq1OQNtwSw7K5siLcNsYjXbaq4YqRY0&X-Amz-Signature=2390b9686bf83fb9b46210b027848b180a6ed744b32b7298cf1c37f1797c3f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

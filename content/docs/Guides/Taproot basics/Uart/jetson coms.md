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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA5EJOJ7%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChohDR9HIpplnVNtQfpuWPoc%2B%2FNNUA%2BXWBKN4n7hRloAIgWS4Mf6jCMcbACPPGIE70RaxYlkPnx4dovUndaEU0pIkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6gIco0PEwLnBXAMCrcAy0wfmPhi6Ckh9nx9yRrprDVlLirqBzwV08v%2BR2q9KiWLYgxSOm2tqruBGZEiyUMrwBXw3Z%2FMnp0PzOv9ZuS7PjmKrljF4oa2j43VNJ0PmbLPhGH%2Ff49dxa%2FTxwZAniMJTbH1LxyoHSP4KytolE%2BwVZwr3rGt3qXwWFl3kcN0nTv5TUjsmZYISknJAeLx00mJUxDz2wc9RG3XVzu3PCmvLgcLFuftTRMizsxy1j%2Bl2B62hEd4eiOP8qo4ojOqNn7gVP70P8K%2BiH%2FEaPF0cabHa242TfkF3cqvDeFa4xBTymQ%2Br976vMsghs%2FVR11oaMwWIlc0vG%2FashclbVwbeosWcDH2bky3NwDyR3rrck%2BViJQcj8InYSvScTNVkwdsPblTgqZ9kvJD0cK9OreqHl%2FrbTkxOqmrR4sHLG%2Bt2zy%2F%2BpghAuCCM4lEflD%2FtQKJ1jOvR3U9KXhQqQ1pIOygldOBUuYcAG7N3sPyUDjRdiPBx12uNJaL1dQ1QMd56%2FOE7WFJXrcqUFpN9vHdXHKJYmtCuTC6PqQcpFhNqA3X4ItyAXtQgHdVQLEAMohlZuZbt%2Bxb1VufcSE2XM4ZXyiaO%2FwNadtat7VfFSLVhlMaNN%2F%2BPWHjCtQvbD53BC%2BV5BhMNuRxscGOqUBEQSaKESkojPg8%2BmWF3GW6djRyCJHOIf8H4mJPSLkOHWL%2FLm%2B%2BIKOfEmaG9Ne3yZvUEeRCDdfva%2Fc5vPBAa%2Bf6tJI28jhgLdMs67vb7tsiZbEwDvdZQckYCq46t1678Rj9xECL059vhL2cf1v9QwIXxlgADiAsfnvsCUMGnc4meMWXTSqVW4gwJp6nfArhVfay3XFBexNPspgLeD0GDP8OIAamPzA&X-Amz-Signature=48b0625091147e8fea84c58c74d2cd2fd6a96069f6726cbd4de89163a97ded3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WHZHASB%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwNdiey29S7Q5PA6aYUgnCyKoaz2v5YndPO4Ynp9s%2FZAiEA8AmXqrT8v13Ru1kqlvyJDE5TsyjNiB0MO1d0NJFPyYsqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BAZ2RlKeEm5VxbIircAyLLmOOXo25nbAci2qrUcn%2BdQTjxf62eAN4BMNHcnTY%2BQHU0N5BIp7jnW6uxLgpe5RTLN6f%2B8NBXrOyJT01xQ0W7ZrcUauofxLELCCXUPNaKIDg9uOL0g%2BBZfGWU0qTCML52oA3C3XUajS%2B2xEWdOCnKarv6g%2Bf4LhnPuBkcgytYNeVpfZ8x0gbkJmLUrmz26wW2kDIXEdkZMbyXB9GQ0C68pjV540l3ObThVix6bhlyNJoxrzOGhK83qByT%2BSzoinBMtzoOGTGfIhquDSnVk3ccfNCkK7tl9sRBvAmRtFbumTogU4XpogOxrkg5H82tbbZhsD0q86tiwchG0G3CaibHt61OlOs2QNDKdzVfUOstsQQOglB7BWwnpaRORO65I%2BvsaL1UBCT68IezwdSUrLZdLeh6dJarFT8LZbvln5Z9UFlVeHhv2OEGCyZyYsWYtCy8cqIVwbf3O9YLE9UYIpZXGML2e%2BvGjANCVZqDwF7Gx5xKNAgNBq03LCkTcbF2aZRAfE2veqxdmc3c72UwlLFcD2aewVg2ap3EaYDjZWFX8ilB9eckYtdqMZJBdvTLv%2BUT49Ph89jKekupzQo96QS2RqJQ7fLC%2FsbG9iiE%2FNq%2F8k6QRry8WTsAX8%2BSMPePxscGOqUBY8p%2BqssIJETygEHIxPePM15S499pyg%2Bn9E8RCCUuUM%2F0ldSJPkLvt4Ug3STUJz18Lurok0hzqzYOsbT04RcGT9VUD2RXH%2BapVyxRzn8elHaNkkZl8MyC%2Bt4UfkyMQkf%2Bhm%2B3fv1dtx1Ag6Et%2BqpVJKskfNTSTma%2BJEKZ4g4YLgAY5GX0zNlK3uKrd5yk3D8UCluYX3vKmevFR4%2F874cijCc9FXm6&X-Amz-Signature=044627c8fbafa6253035c24376ec7417465b4af07d8666cac60046b36f071f5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6JF6YPL%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7DYyUfn%2F6CyMyg4Nyjo3h2l7zHf89VlDLR%2F9tCdNRYgIhAI2svwnl5DWqvBMGW%2B7TkxIOuZShRjIcPMvEP5KvYgtsKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyldD8lHW7XUeqoag0q3APoeHs5ixZCicYnPG7FtzfMrpAhwmDz%2BunWKs4lc0g2inPdIo8DBPj6%2FWoMLkLByAazDU5bnZx9cqM1uewDKM2yas6pUf%2Fuu5Wyd8VpUMdfGH27RUMfhf6C%2FatxeKWgTf6VF0%2Bi77g0h%2BJ%2B6%2FcSbW9OI7%2FNgHX%2F1GTFd0d9qkQ%2BoymuVwziIGhwyXeB1jhieeWkExfo7hzFqgGubY7roLRa%2FXR5fWUAfFCps%2F0MzAC5jRE3Yd2151ZKOaeaLuaR4uDk5zrwuvV%2BhMtN6qEtInku34HceJ8gxcg2ntKq6bMgr2uzWfEyKxnAS3C9c9QmdtI5BOb2Gz3Iv%2FVTDDvEIS6lKbTKgzYQpPz3YhDUKrafQ546ScjsF16X%2F1oHTeuyI7rKf2a6x2Ig5KtAYQmPz1OSBJHREdCEn%2B7Z08Lzf0pTnLAYJ4BSMj7nI89AyjqFjXgOKZC5Sp%2BcM8EDj8d42uxe8g8EpkE3mTU%2BKIECxLTh76aZPij2iGuNUzVUwy7jzxECZBJETCYU75WtdVyWE%2FZnPF%2B0xM7H2qYUyrB9UX7HDkvHUfe3HsfMRmhyS7mCmZY0bkV8u%2FZtNEDAFSPOuqL28ID0DNKjxXOkXPm4Hulh3qWLYG28tEaD1nk6HTCftMbHBjqkAY3wVJ4dCkUp%2FPTHu09n%2BByvOy6hq6yLEONON6NMyzvV8QtDQ8wk%2FFRB%2B20pF8v2PLfBt38aS32D6YZah6WImFkYvZa%2FK%2FJJY5vrUqgy7inB20TLRsl%2Fg50B8xWJVxtHkAUr6Xi%2F9bwdlgpRU8UI7boUD8ak%2FXcAuYlHZyCwwGtkyxNVrEErtf5RftylUWWXif4Pyn34blUhuDJhrDNyNsA1Fvmp&X-Amz-Signature=4ec486460430f92217da8eccea85b8888a217b621ee84edb4e11844ad84eceb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6JF6YPL%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7DYyUfn%2F6CyMyg4Nyjo3h2l7zHf89VlDLR%2F9tCdNRYgIhAI2svwnl5DWqvBMGW%2B7TkxIOuZShRjIcPMvEP5KvYgtsKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyldD8lHW7XUeqoag0q3APoeHs5ixZCicYnPG7FtzfMrpAhwmDz%2BunWKs4lc0g2inPdIo8DBPj6%2FWoMLkLByAazDU5bnZx9cqM1uewDKM2yas6pUf%2Fuu5Wyd8VpUMdfGH27RUMfhf6C%2FatxeKWgTf6VF0%2Bi77g0h%2BJ%2B6%2FcSbW9OI7%2FNgHX%2F1GTFd0d9qkQ%2BoymuVwziIGhwyXeB1jhieeWkExfo7hzFqgGubY7roLRa%2FXR5fWUAfFCps%2F0MzAC5jRE3Yd2151ZKOaeaLuaR4uDk5zrwuvV%2BhMtN6qEtInku34HceJ8gxcg2ntKq6bMgr2uzWfEyKxnAS3C9c9QmdtI5BOb2Gz3Iv%2FVTDDvEIS6lKbTKgzYQpPz3YhDUKrafQ546ScjsF16X%2F1oHTeuyI7rKf2a6x2Ig5KtAYQmPz1OSBJHREdCEn%2B7Z08Lzf0pTnLAYJ4BSMj7nI89AyjqFjXgOKZC5Sp%2BcM8EDj8d42uxe8g8EpkE3mTU%2BKIECxLTh76aZPij2iGuNUzVUwy7jzxECZBJETCYU75WtdVyWE%2FZnPF%2B0xM7H2qYUyrB9UX7HDkvHUfe3HsfMRmhyS7mCmZY0bkV8u%2FZtNEDAFSPOuqL28ID0DNKjxXOkXPm4Hulh3qWLYG28tEaD1nk6HTCftMbHBjqkAY3wVJ4dCkUp%2FPTHu09n%2BByvOy6hq6yLEONON6NMyzvV8QtDQ8wk%2FFRB%2B20pF8v2PLfBt38aS32D6YZah6WImFkYvZa%2FK%2FJJY5vrUqgy7inB20TLRsl%2Fg50B8xWJVxtHkAUr6Xi%2F9bwdlgpRU8UI7boUD8ak%2FXcAuYlHZyCwwGtkyxNVrEErtf5RftylUWWXif4Pyn34blUhuDJhrDNyNsA1Fvmp&X-Amz-Signature=2c0f235df76a36fe783ab40a49e12050b5f714259bdf05947d84975dd4a48957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WHZHASB%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwNdiey29S7Q5PA6aYUgnCyKoaz2v5YndPO4Ynp9s%2FZAiEA8AmXqrT8v13Ru1kqlvyJDE5TsyjNiB0MO1d0NJFPyYsqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BAZ2RlKeEm5VxbIircAyLLmOOXo25nbAci2qrUcn%2BdQTjxf62eAN4BMNHcnTY%2BQHU0N5BIp7jnW6uxLgpe5RTLN6f%2B8NBXrOyJT01xQ0W7ZrcUauofxLELCCXUPNaKIDg9uOL0g%2BBZfGWU0qTCML52oA3C3XUajS%2B2xEWdOCnKarv6g%2Bf4LhnPuBkcgytYNeVpfZ8x0gbkJmLUrmz26wW2kDIXEdkZMbyXB9GQ0C68pjV540l3ObThVix6bhlyNJoxrzOGhK83qByT%2BSzoinBMtzoOGTGfIhquDSnVk3ccfNCkK7tl9sRBvAmRtFbumTogU4XpogOxrkg5H82tbbZhsD0q86tiwchG0G3CaibHt61OlOs2QNDKdzVfUOstsQQOglB7BWwnpaRORO65I%2BvsaL1UBCT68IezwdSUrLZdLeh6dJarFT8LZbvln5Z9UFlVeHhv2OEGCyZyYsWYtCy8cqIVwbf3O9YLE9UYIpZXGML2e%2BvGjANCVZqDwF7Gx5xKNAgNBq03LCkTcbF2aZRAfE2veqxdmc3c72UwlLFcD2aewVg2ap3EaYDjZWFX8ilB9eckYtdqMZJBdvTLv%2BUT49Ph89jKekupzQo96QS2RqJQ7fLC%2FsbG9iiE%2FNq%2F8k6QRry8WTsAX8%2BSMPePxscGOqUBY8p%2BqssIJETygEHIxPePM15S499pyg%2Bn9E8RCCUuUM%2F0ldSJPkLvt4Ug3STUJz18Lurok0hzqzYOsbT04RcGT9VUD2RXH%2BapVyxRzn8elHaNkkZl8MyC%2Bt4UfkyMQkf%2Bhm%2B3fv1dtx1Ag6Et%2BqpVJKskfNTSTma%2BJEKZ4g4YLgAY5GX0zNlK3uKrd5yk3D8UCluYX3vKmevFR4%2F874cijCc9FXm6&X-Amz-Signature=22cc00c685d04f4485033ed8414a6ad0816b085ef1f175a83a0e53787d200f99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WHZHASB%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwNdiey29S7Q5PA6aYUgnCyKoaz2v5YndPO4Ynp9s%2FZAiEA8AmXqrT8v13Ru1kqlvyJDE5TsyjNiB0MO1d0NJFPyYsqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BAZ2RlKeEm5VxbIircAyLLmOOXo25nbAci2qrUcn%2BdQTjxf62eAN4BMNHcnTY%2BQHU0N5BIp7jnW6uxLgpe5RTLN6f%2B8NBXrOyJT01xQ0W7ZrcUauofxLELCCXUPNaKIDg9uOL0g%2BBZfGWU0qTCML52oA3C3XUajS%2B2xEWdOCnKarv6g%2Bf4LhnPuBkcgytYNeVpfZ8x0gbkJmLUrmz26wW2kDIXEdkZMbyXB9GQ0C68pjV540l3ObThVix6bhlyNJoxrzOGhK83qByT%2BSzoinBMtzoOGTGfIhquDSnVk3ccfNCkK7tl9sRBvAmRtFbumTogU4XpogOxrkg5H82tbbZhsD0q86tiwchG0G3CaibHt61OlOs2QNDKdzVfUOstsQQOglB7BWwnpaRORO65I%2BvsaL1UBCT68IezwdSUrLZdLeh6dJarFT8LZbvln5Z9UFlVeHhv2OEGCyZyYsWYtCy8cqIVwbf3O9YLE9UYIpZXGML2e%2BvGjANCVZqDwF7Gx5xKNAgNBq03LCkTcbF2aZRAfE2veqxdmc3c72UwlLFcD2aewVg2ap3EaYDjZWFX8ilB9eckYtdqMZJBdvTLv%2BUT49Ph89jKekupzQo96QS2RqJQ7fLC%2FsbG9iiE%2FNq%2F8k6QRry8WTsAX8%2BSMPePxscGOqUBY8p%2BqssIJETygEHIxPePM15S499pyg%2Bn9E8RCCUuUM%2F0ldSJPkLvt4Ug3STUJz18Lurok0hzqzYOsbT04RcGT9VUD2RXH%2BapVyxRzn8elHaNkkZl8MyC%2Bt4UfkyMQkf%2Bhm%2B3fv1dtx1Ag6Et%2BqpVJKskfNTSTma%2BJEKZ4g4YLgAY5GX0zNlK3uKrd5yk3D8UCluYX3vKmevFR4%2F874cijCc9FXm6&X-Amz-Signature=ed2576dc55433fe1189ba471922690ab568ac6ada46498cafd5e98550e3e2c14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7U2PRL5%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHw%2F5uDkJlbVCyEY1fDMeoVsj1MYOdQcBdevwvl%2FtjXgIhAMPLbeUbdsqJsCFeB%2F6JNkFThhtJ8KB2rftEuIa7CbSjKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBfApCpc0BTb5iCuEq3APoVNaMMOvvqy914uGPF%2BHh0RGLk3RL5He5na7hE%2F4U2VR%2FX5IzyMKdtpWuk1Xank5dhWL3SK3O8OCPIQg2rTYsEsu9eB9FNa1qGrc2o8rlpYcgmayhQhLEkXfnMtbuE9cJZECl1Zstgh9bedvtM3%2BJG1FSRRtdNz5zGZ2ceTL216ZqkoOC200ZrZljO8cIX8t%2BIevhccHR4VUtAV8deve0onBw6roa1IQEU4c%2BMP%2FeNEz%2B25oZFuUXleZIeJSpMrTWBzruNhnNiSMixzzFq2c5mGmitiiljcSZzyWKr0%2FWmQUzkxrJ09%2Bj7izoKOD9JSRRvjCxAnSp7N%2Br7xBmmlXTDO5ZoSr01MP1zVJM7tjY8ppj5FVFI6sgfs1eSniOY284n1zIdr8Gc8AJlH3VFOgw7ZNb7HSFhWnCn76V679sG0hSZbTXYkhUAF3ltOr9VMEESI3QKIy8jqU%2Bek5zceTY6h%2FlHyfxDQ0Zr7RnzA2u0rR61vcXA85%2FmCLCzAdgbM7Q%2BHXv7FKb2dsJ7AuO3Rzs4TNBdZl3NRinwep8zhZE3KaNXFiT85v9rVKwXjfKQqvwdW6vHp7wd8P6BVV1DFT4tSHgGgMJ60tvZn%2F6%2B59uMoMSoFLLxLKxGFLrgjCytMbHBjqkAYTan%2BOgvF2XwhKqGXWnCtyBqdbTt5hnBcfTOg6LPrAb5Nz0WFWqKNiCw2JQf3AGXhFiNQ9duIoVTfAqb%2Btffo7xMcwcgQJ33%2BpX6gKf%2BXaN%2BujOMmv9mHpnPfLjGWJmpOBTVjvzeo5SacAtk7rsxYSY49C87DmdIcdCAu1u1SWUeSMNbO2LZVVjcB6EzkyOAyVjU6tp%2FxeiVwSPJoMTDsJOA2eu&X-Amz-Signature=42ce9723be6ab321d7ed36731da865ff215da1544c727d895b8ef49fb65dd394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

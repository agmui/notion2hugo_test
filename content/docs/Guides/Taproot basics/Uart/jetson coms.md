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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M2QOXY5%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD66BzIQGaiQjacYSonqRGTilX0tblX83iN6sH2F2zY%2BwIgQhU%2F%2FV%2F2c9hgKu7lievUXj7RgvD4ug35j9JHAbNBWRoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2B6WK%2F6onsPA4zlVircA%2B8icErea1Ob%2F%2Flqne%2BscmhNbxDJGtMgZasepQlpIqJM0kDM32oKPINHH8NenV30YswMEnHeKuRFxqn8ZWWSvDZhVfnZ77%2FrUawg85y%2BZA9O7tpMWiEbS8QFIZO8kPAJnK9Choydb9XVhwaZVz4WMc4m9WpEpxkb2ybkThjTRrAD%2FlS%2F97%2Flx5GerS7%2F5ilBLg8rbowcMDZy2HlPqiXoS91iuZxgcm8UURfG8wdUS6eRsfXSbeb7OFl6OWYB8N3EhNB5DjLDeNJa3gzrdVTRC%2FEu4kfXRoKPmhzFRcFdLFRNBvpXI%2F6e1573UpM3%2B3NohqWPwda2t4UXuWkdteLb9SVB37FCr2eCPqYLoOcquPeqMGyKMci5nDsA8jx%2FO2laGBBYFYXtZiJZAnofhTXPDR%2BhJYQ4WOdc8l1yztqeI%2B9Y%2By3xtCnCQeSatrQeNmgXbQj3jx2edwvtSOzdut2Mboj2Nu%2Bdg9aC5pZA88nmlufJfxmkee70AD3gxZUIXd4Rl2Ld%2FRxWhblS00S1p%2FxdY5KE0%2BQe5aMDV7%2FY%2B7VfsxoP1UZoMTUtcVKYQmW3M%2BOVwdfM80a8Iq4oPecp7ahSsd2dM%2BmyQCPlbvKUZW6yTMNOQH%2FkU2CQpNPr9aXzMI%2FD4skGOqUB0RrDzCWy6P79xr5aZCdBzbEVhRyTVpo8Z6p%2FLIeHcyqF%2B8XcaDBUaZ3GonwpAaCbRzaeFfoHhjTJbNLV0J1NkW7G9pr5PIoM38qDp3Y1I%2F1r8bGrfNE22e1fQzuoqjLF%2FtIcjI5ihvBjQWyRoaOaS3hyKCFUGKaexgSExgnJRnt2lfgy96WBa%2BmMMhI2%2ByqeKBirRDGI%2B%2BqanXF0aanq80J9t4pO&X-Amz-Signature=011de3bc16f0f2830f9dee3109ccf54c3a1f3b6a486552420af231108de1b326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGIF4GY5%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdrksR2DO9EY4IvAkjkExWuuFUo5SJZJ6AxnWzWyvFMAiAa65bss6EMR2lnPqDORxgW3kOj7imHSRQGLLWPz8RJiiqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8cpWYF87m%2B0hwDERKtwDRPkbZm9W1vp1MYXMOIGjNdhRP%2FS2ARTf%2BadysUYn6mNLY%2B8vpcci77JRmdQ0n4CTQkiGSXVtbrgk9TtF2osDhR6u%2Blu1MehW0AF%2B1eq%2Bpp1E5y153xu0w0MWA8TMZLVeqrGVB6KTcAuLRpzgMCPkax%2BQ97MsaSN7ktD7fs9cxposeJcTYWlXW1FLReZzJl4TLDdIzu%2FIXpKRHpo8Mt%2BMjWAuEu%2BY0FP%2BKcE6sph2HtIJl3lbgd890w8I%2BYdfHXu87l9tdNw7jjmz3VexTv0%2FiBoBBowqO7EGl2PLSUf1apEgK%2FD4Mr%2Fc6ikMjRWik6tt5d8m1YrGHVhaDiRZRbDokc5Ubg3rd8NyhmT%2BuE2s50enUt8mJ9cZw%2FhHzJecH2tXMgObWGsGOXUZCjJhvX9zrBd5CAatROu216IwPqjHh2S1zO%2Bu3d3meevOt1MYUxMozzrF3rJIvGTRRFIVcJM1Yat%2FXqSSmNFqRyT56bBsOlTuEJA9qlZXf3XjABCgQpvDxqgmvoapZ6OxMZV6OLl3iIy6EXzT5r7jhS53OdZn65Zu001np97X3bfoBkyygKJexMyrb%2Fka7oqorwf2d0w%2Fvlm554Ozg4RxL%2B8VmHQi1xACaSRxpWbJe5MYAFgw1sPiyQY6pgGaG%2FlDZS9IszX8XkIWKuw7%2BIjwfd5j7L9vJ8u2KUTUhBgV5qEE%2Bp2jxJgG7PKq0UockdK6YBrDw3hHHyJw1SMBg7RPl5nk5iv%2BOzGNjwEeaOlqUHivD1%2FZNVyEoUruAXMS1%2F7l1cwBPLu59CYSl8UVDm7PEqIMxq9wnBRKgy0ulIluHmV4FcJ1FCp3w9yF%2FxbU0kprk%2BnJlbF6GSBbEzH712SQLTn4&X-Amz-Signature=d69decf98ae5f93a6b027504d2d1edb91d2c208fa987fbf0de8ae6472d759b19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XALKNIM5%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwLHWvQ9GOQ4K%2BG3v%2Fx41YEQEN6ijZw1Iw5tcFn6fXmwIgf8KhjNR2V3p3YdZkGaspzPGhPM%2FKx4xHMqV0F9Awi84qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8XJY0B28GDEgNwSSrcA2N4CDPQThF3LVHb0s3kDoMHe30SsffUthCBafwh%2F%2FIN%2BweB%2FXKceeE5o9%2Fuv2ne7UQbegoC93jWOVqU%2BAEB7LHj7W9WGvxunmAxh3sJdf2VuOOyKRsmeOyYSNi0zL4ZjhnCuWs%2F8Q9ULVNJw8IgcovzOtDGTKp3uOgJBmK%2BKxjcFf9XIPy3FE7RBqN1CzxWft2SZ3Pt8hhckuO2bmklhwWvS3ZQLB03q1dqjVx7eOkJX4b0TCKD0Ckq3pKfCIs%2FrUP4WdLQmk9ZZWJ%2BRB6oL0ZCex8aYmGS6Yg2FBrIYg0YDv3ZnS6jtcNJrjGgOTCTsmTFiCpFnRAhzP1tM6Lv5HNYotPD86TyicCSwkX%2FVS%2Fl196Un5Ru5UvINGTW%2BDE%2FUwNArwq%2B3w89hWcpyFKHGD6w6fRN0PLTsmaaZjy6WbGoHHSdSroo8xZ9Hs88srtW1wfAg%2FWf5L4SPHUpeesnqf%2F0jVGUKNri7Hz%2FArP6lEE0KJdT51UbNwOe%2BqH6EhwEjWnvSWbTJ5M8%2F674IrLIyJYpLBTf1%2BRzdxIMu8xitj8T1Gb0vPz9phpu1gIw8GM4%2F29iVLDtoUof3uCngrzR8w5hYFkpxvOvkgTTSa8NfIYUEQOgjfKZXoJFZDbnMLjD4skGOqUBRD%2Fm3auFN4lGzwDZaVUgwDDicXJYq61Jenc4pp2ukTm9y8euFnUVzbFX6nGYtkVvyrCeFWnf4P1T7L0FpagSqCLGdzYyc3SWX2dA2OXJKoApqSZIU2y9qDhZ6NtghxEJyyKzPAEBETrMdaJXqHSJnmtBrJ6pOWGb39Ht0TNV23td6qnpJZ%2FSpu2xHsmILKn%2FVUnobc7isp%2BAd2wP7TEAU5QluiAJ&X-Amz-Signature=26cc38909cce0b5fe404b3bf06afda085cda9339e39b39b437003ec97d73aa8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XALKNIM5%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwLHWvQ9GOQ4K%2BG3v%2Fx41YEQEN6ijZw1Iw5tcFn6fXmwIgf8KhjNR2V3p3YdZkGaspzPGhPM%2FKx4xHMqV0F9Awi84qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8XJY0B28GDEgNwSSrcA2N4CDPQThF3LVHb0s3kDoMHe30SsffUthCBafwh%2F%2FIN%2BweB%2FXKceeE5o9%2Fuv2ne7UQbegoC93jWOVqU%2BAEB7LHj7W9WGvxunmAxh3sJdf2VuOOyKRsmeOyYSNi0zL4ZjhnCuWs%2F8Q9ULVNJw8IgcovzOtDGTKp3uOgJBmK%2BKxjcFf9XIPy3FE7RBqN1CzxWft2SZ3Pt8hhckuO2bmklhwWvS3ZQLB03q1dqjVx7eOkJX4b0TCKD0Ckq3pKfCIs%2FrUP4WdLQmk9ZZWJ%2BRB6oL0ZCex8aYmGS6Yg2FBrIYg0YDv3ZnS6jtcNJrjGgOTCTsmTFiCpFnRAhzP1tM6Lv5HNYotPD86TyicCSwkX%2FVS%2Fl196Un5Ru5UvINGTW%2BDE%2FUwNArwq%2B3w89hWcpyFKHGD6w6fRN0PLTsmaaZjy6WbGoHHSdSroo8xZ9Hs88srtW1wfAg%2FWf5L4SPHUpeesnqf%2F0jVGUKNri7Hz%2FArP6lEE0KJdT51UbNwOe%2BqH6EhwEjWnvSWbTJ5M8%2F674IrLIyJYpLBTf1%2BRzdxIMu8xitj8T1Gb0vPz9phpu1gIw8GM4%2F29iVLDtoUof3uCngrzR8w5hYFkpxvOvkgTTSa8NfIYUEQOgjfKZXoJFZDbnMLjD4skGOqUBRD%2Fm3auFN4lGzwDZaVUgwDDicXJYq61Jenc4pp2ukTm9y8euFnUVzbFX6nGYtkVvyrCeFWnf4P1T7L0FpagSqCLGdzYyc3SWX2dA2OXJKoApqSZIU2y9qDhZ6NtghxEJyyKzPAEBETrMdaJXqHSJnmtBrJ6pOWGb39Ht0TNV23td6qnpJZ%2FSpu2xHsmILKn%2FVUnobc7isp%2BAd2wP7TEAU5QluiAJ&X-Amz-Signature=41fb4f3e911f46ee6f581fd44c79f7a1de275ab3aaff8a4cf5c6a19201b469e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGIF4GY5%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdrksR2DO9EY4IvAkjkExWuuFUo5SJZJ6AxnWzWyvFMAiAa65bss6EMR2lnPqDORxgW3kOj7imHSRQGLLWPz8RJiiqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8cpWYF87m%2B0hwDERKtwDRPkbZm9W1vp1MYXMOIGjNdhRP%2FS2ARTf%2BadysUYn6mNLY%2B8vpcci77JRmdQ0n4CTQkiGSXVtbrgk9TtF2osDhR6u%2Blu1MehW0AF%2B1eq%2Bpp1E5y153xu0w0MWA8TMZLVeqrGVB6KTcAuLRpzgMCPkax%2BQ97MsaSN7ktD7fs9cxposeJcTYWlXW1FLReZzJl4TLDdIzu%2FIXpKRHpo8Mt%2BMjWAuEu%2BY0FP%2BKcE6sph2HtIJl3lbgd890w8I%2BYdfHXu87l9tdNw7jjmz3VexTv0%2FiBoBBowqO7EGl2PLSUf1apEgK%2FD4Mr%2Fc6ikMjRWik6tt5d8m1YrGHVhaDiRZRbDokc5Ubg3rd8NyhmT%2BuE2s50enUt8mJ9cZw%2FhHzJecH2tXMgObWGsGOXUZCjJhvX9zrBd5CAatROu216IwPqjHh2S1zO%2Bu3d3meevOt1MYUxMozzrF3rJIvGTRRFIVcJM1Yat%2FXqSSmNFqRyT56bBsOlTuEJA9qlZXf3XjABCgQpvDxqgmvoapZ6OxMZV6OLl3iIy6EXzT5r7jhS53OdZn65Zu001np97X3bfoBkyygKJexMyrb%2Fka7oqorwf2d0w%2Fvlm554Ozg4RxL%2B8VmHQi1xACaSRxpWbJe5MYAFgw1sPiyQY6pgGaG%2FlDZS9IszX8XkIWKuw7%2BIjwfd5j7L9vJ8u2KUTUhBgV5qEE%2Bp2jxJgG7PKq0UockdK6YBrDw3hHHyJw1SMBg7RPl5nk5iv%2BOzGNjwEeaOlqUHivD1%2FZNVyEoUruAXMS1%2F7l1cwBPLu59CYSl8UVDm7PEqIMxq9wnBRKgy0ulIluHmV4FcJ1FCp3w9yF%2FxbU0kprk%2BnJlbF6GSBbEzH712SQLTn4&X-Amz-Signature=c7f270aa3fe3bdf68ac9abf5b372f0cd7cc2df2b0c0181120cbca71e213b606a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGIF4GY5%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdrksR2DO9EY4IvAkjkExWuuFUo5SJZJ6AxnWzWyvFMAiAa65bss6EMR2lnPqDORxgW3kOj7imHSRQGLLWPz8RJiiqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8cpWYF87m%2B0hwDERKtwDRPkbZm9W1vp1MYXMOIGjNdhRP%2FS2ARTf%2BadysUYn6mNLY%2B8vpcci77JRmdQ0n4CTQkiGSXVtbrgk9TtF2osDhR6u%2Blu1MehW0AF%2B1eq%2Bpp1E5y153xu0w0MWA8TMZLVeqrGVB6KTcAuLRpzgMCPkax%2BQ97MsaSN7ktD7fs9cxposeJcTYWlXW1FLReZzJl4TLDdIzu%2FIXpKRHpo8Mt%2BMjWAuEu%2BY0FP%2BKcE6sph2HtIJl3lbgd890w8I%2BYdfHXu87l9tdNw7jjmz3VexTv0%2FiBoBBowqO7EGl2PLSUf1apEgK%2FD4Mr%2Fc6ikMjRWik6tt5d8m1YrGHVhaDiRZRbDokc5Ubg3rd8NyhmT%2BuE2s50enUt8mJ9cZw%2FhHzJecH2tXMgObWGsGOXUZCjJhvX9zrBd5CAatROu216IwPqjHh2S1zO%2Bu3d3meevOt1MYUxMozzrF3rJIvGTRRFIVcJM1Yat%2FXqSSmNFqRyT56bBsOlTuEJA9qlZXf3XjABCgQpvDxqgmvoapZ6OxMZV6OLl3iIy6EXzT5r7jhS53OdZn65Zu001np97X3bfoBkyygKJexMyrb%2Fka7oqorwf2d0w%2Fvlm554Ozg4RxL%2B8VmHQi1xACaSRxpWbJe5MYAFgw1sPiyQY6pgGaG%2FlDZS9IszX8XkIWKuw7%2BIjwfd5j7L9vJ8u2KUTUhBgV5qEE%2Bp2jxJgG7PKq0UockdK6YBrDw3hHHyJw1SMBg7RPl5nk5iv%2BOzGNjwEeaOlqUHivD1%2FZNVyEoUruAXMS1%2F7l1cwBPLu59CYSl8UVDm7PEqIMxq9wnBRKgy0ulIluHmV4FcJ1FCp3w9yF%2FxbU0kprk%2BnJlbF6GSBbEzH712SQLTn4&X-Amz-Signature=3a24617c267802cf09f96992d3ea63610db25c8739c4dea28860c9f4c1cb24fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF6LY2PR%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXZ0zqHdLXoEYarGVxoSNmsCE%2FwYnh8hUbVsLztwanvAiAIjOcP8tpB84k332kvSVmy99SsNAlDA2STxA66CST%2BISqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfX2gG%2FzK9r0Lxwg%2FKtwD7IWPvYDouoM8DdWjy37J3Yq9B5d1ZxUvh%2Fp0%2FLUSJ%2BnluNoyug9b%2Bz2CSNN8V1fTO4T0esPmxHiacq%2F0abmtYl%2BdgXX5Rb9TVGIUWZWBvwGrAKnSz2JJiC8t%2BuYQVdNu7mFShZ2nc2AEFi%2BCT29GZJYF%2Btf8rkgEX%2BHK1p0V9qnfQQINyI33k%2Fga3NIz3I0DKdRlm5PetyoDFj2SDjxsasILneLYrk8pgWnq7GBL5CkmcmrHqwXX%2B4e4jXVsLNW%2FvecNjqaU%2BSbLM%2F6ywCOxmg3CAPTKRKtVFALGRtmysahK3LNWrJNuCh1m241SvKvLAdna%2FULxuaZhyQIYUmC1Vx%2BsO%2BY%2FwQWQH9PbwYCmO5wGicVoa%2BBvd6SK8MSXacLiivFvTotkwhQw%2FoHfMI8gfUkx3V%2Fyzsj9KTt7wqzgY2oghNN3j%2BhLaIm14pF5mvDXjwNhDOiY4HIREt63kDzgcRVT01lo%2FKj%2FNTesU5ijAcOxC1JPOv%2FQ%2B1z0%2B5K5JlGi6oOXjjy1rQvvYHL0rQ7X6r7UMVYz4sORcuejV%2FmJQcDKSWF58Ytqu8vmR6MI%2F7xbkcPUgcZ1TCbfvQ3oXSmUa%2Fe0BNKGvpbGfba4msQ2tuNDokU8Jazu5KNtUjQwlcTiyQY6pgFmk4kSu2kIEfQlf7UQ%2FYZStJmHAaSfYRnAVxgNOzZ4lB5pMbPQI3aFNLcIA%2F33yIH9gcdTNcPB4tXart%2BGwbijqtxDPkTFQ2cdGRZHxWqIkB18YqEhbzGtQzzn7nj4ooTjfcH1DS%2Frz7DGlCR3%2B15ReT1VQnKuVp86BPx7kvzhYCvRRFPJy0WB8XOnY28%2F%2BLNga%2FEhaH4U4dBaEq4gYHs%2FbpLbK2%2Bi&X-Amz-Signature=838fcadfda4ec13f1fae04787d7f619bfb0344295b38146e64228a0266ebb1c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

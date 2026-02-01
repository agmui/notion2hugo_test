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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLGUROIF%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC962wJYctbXTqUSiqNf3%2BWGuPGQJ%2Bya7osAQDY5xg9dgIhAJXKD5PVvjr4iSTJABM%2BttkpNVFXAM%2FZjV8Zsr1SbpXWKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPr5VHjYMjpRqJ6Mkq3AOL61L9WbIl1bPpIOw3qTqXoJ3hg%2Bz7ska87EpLIRSPpSQrjs9mPy9TjWoAe6d0661Kp7HdxHHxcBdl8wRt3u8WXBQijlfDAzGRa8b%2BP%2FUDLZfPPyzOU%2FxSjbNphLMR69SpoPo9ht2kYXcteGU0tzSLY8Mxd5wpmFD%2BlWNEknnTLzigsjuf9L18Sc%2F%2FbMUmUVFX%2B3nRhyUpQxBxwa8R8hvFhg4z0dE%2BdCKlgQDa1EweOgO1CVYfcmEF4byfWDAVQH0RcJBIC0Q7JxkVtAaJF9zPg66nW8jy7Ws1XHBt7kinpUyr%2B3qIRm4151YqN8rdJCzmJFU0saeRh6EoI5p4Q6ClRCeb3yJKmUp%2FMKtiPop7fuItskMpukjlw0LBZX7gD38Br%2F2mcxzG59%2FtrEHEzDZIJ%2BcwTPx1HcAXkUrjKeSohqe1VIDZT4wu8WGH4xAg0e82YLOl6%2BKUkw%2FR979oESbmLPiOr0OZ3tLfLg16ptCxp0LsCVnns2oIsm%2FmlQFxFutF4qoynw7DmF3OdIhPUDlB2%2Fm7ipQ%2F6R%2ByOoBMzV0UJO8EwFpG7lHMostXeT2fz%2Flb%2FBlHV%2FL4kXBsvqU%2Bqi24O22LQESlfTQ2fpvBPf7D5aZGJTqP19D5vGLJezDa8fnLBjqkATxsGTcO%2FWN9jSyg30dCaeBCcxFag95xj7fTKnSlYEdo5VkxmJwud6urnihCPWKv4vsb6TWG3WQR2Y2MNQuvH1FINxTvJyDEwnzTxORXnrRe6r63vMU3GIuQctP4IxSXQWTef%2BcBzttGksvA1vjl%2FdQgJfgiicvA2geERF9fAaSdmmz2CCFezjhEESzBawtIhefQkmtsvQLD7SZeqECORk81T3dL&X-Amz-Signature=74b4bb955161de4f823e5b864a66a003cce62554fc208cf2f48a84d3cac43208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J7PED4W%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4VPHBYXvrHyklVS3hNKY%2BmhbBxzZ9C1n%2BFDKWOdf3HAIhAPeYUSbXygJbyp4gCUt4m%2BuXqmu6Zzvr0I2zW71QG9nEKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzuY9qzviLUyThLmEq3AOPGt5ZO76G8LBM5LwpMV4B6HDw7524Ro2DhT7kl1iOms542gf6le%2B6hCbtDVEer7cOZHAufofoFrwt1C%2BFyO6TbsEdfADXN%2BVNduvCx3vK3tAHVqD0NGEcRE8QNg14wQsxdy5rS8HSpPQ4RSu1Ljob4VNTBUTdFzggLrl8EbiO3HmgrrZB3ek4Z7CVf4vl3TljgVPuHTMpIRKeXyDa1pqG8SKM6bCwHc8geMMXy2ouW36SQGvWK1gSECOw9YTgjoQCFdRYT%2FqhNMn%2FCDlU8ne1ch0fl9hFmDc2w%2F7d1ZBPUnxzZQpFCa5kh1u6Weo8tyIagXaxWQfKWysRNOVBQNKq0FRl0PDOwhrVQjq6EtlBqdPRZRjsUFfRYBkG9AF5TAcInJAo00HfGhwHjGimLp39yl6U0LpVIGPSQwc6R3Bo6HlhPcJefEBnRdbJMne3h%2FFk1idq%2B%2FdnswBGqeTrcau1%2FW5GP7nbxjvHm4vJfSw4%2BgL7uyrb6qYhBpTCQQItm05c1ITptsa9cvigI%2FfS59s9V2UlVPJ9E1UwwunoOHtAsJJTpMVV73o80IecLMcAXR1AXZ62y9e7wwy8c93eg41tEVbfccu7TaAS3XDFmfdrn8fVcXKKu7DglRILpjDv8fnLBjqkAVwV5wguzE47Xds1%2F7DDz%2FvF0guBpx3aayAHCuLrT%2BK130wqf85DCGpEm64LV6jnLzspspiIUL8BDp032i2HypaggTX4b4RE7C8P%2FLbVEWoCSrx3Yuw1Ngx1zaeUmIEUYDCQshTJPpdGILWPtwsWRuHXOFZkGNbHo%2BZjtywrSyIul1Ecg03yQgDJ%2BusqLS7GiC5XSTRFz2q19Ounxk5GVVDzD%2Bt9&X-Amz-Signature=e5f6f2c19d574c834b26d5b19e0f4d10ae9a767a3492b84884fd6cb0014770f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTJA5TV4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr4YsnaqzfxoyuEjuqwd%2F86b1xR0EHnATdrk7ygJJGLAIgKdv38Cwh6OjKQTfP4M3BNdeZveQ4EN2%2BxYfKHlmdF1gqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9YzUz1GARtcGVNyircA%2B%2FrxYFcYHytpv7fFkLLeSO487Da9Eqj9esmOwRBsKbVqYHW2W3i07Vrqkwuy5ciT96fo8NOiBhed2tikYbMTWxiO0CMS3z4CKMNfJ95fShay0o8EbVlB16IJCiQNKg1pFCuC8RtuNahtzNkHBuQMj4llYLrk90X5%2F1tx2E92qjaxs9xuJsHlxhxF%2BPMXvEmokLulssJYKp%2BvED8mhtvuCTbVkv49cG7aP2KObprsyD3wUInr7525GtX1%2B%2B5vtUyEJj0RGDsshXXhm%2F02mK%2BW%2BHTYgwJaYgOFoTQcHAQ77DXPENKcnZAsymuGd44UT3gXuxWFf%2FBzSibWoCg%2BhtmmaSNn4f%2BWKe43xZjM3%2BIMgDiVPWv72%2BI6%2FDtxI4WdzLQ6h9UVQfqCOv4uFXhpuAr%2FcyheEQ%2FQqN%2BzDwjrN25GNTTbL%2FhHlUybo4S9l9gB1%2F6xfZBN%2FjAlQzLEBC8D%2FiMRObufdXGVBsNt7%2FTV1PBqeeQA996P9q28kDiStDXT1t27oPR2VmaPvmDcFW2yW1SHJ8rK13YyalC0nwOTMYIudK5FmLMKjm1cIAKvNNWH3CkocaR5AiIJv4BfuW72OXXhKn0zC7jWhY0Rf%2FjijQFFVOcZGibEOpJXD33WwEKMMTy%2BcsGOqUBm7aIkdF%2BicSahcHRNDkwc1EExE%2BP%2FIWiyqTpvAB3e%2F10eObzp1WaMrdoiJfYHJDdkPqBNS5hnp%2BxHNzNSbmypedLCQ2Ehs15LmbtRXllXS9fG0I%2B7mqB2DouYpYZJQ8GfDxa%2F5g9orsSJzL%2BJXbGIq%2BvE0rQB2dEjBtRsxUVH7Ytc5TN0a3S2wDDaBI3Cb54HUQF4fSMnTrZgJseTQHwteE%2BGHDU&X-Amz-Signature=7958c8c19bab1e7c7b59d95223eb4245dde63d542aea0d9e64f024c8736af62e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTJA5TV4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr4YsnaqzfxoyuEjuqwd%2F86b1xR0EHnATdrk7ygJJGLAIgKdv38Cwh6OjKQTfP4M3BNdeZveQ4EN2%2BxYfKHlmdF1gqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9YzUz1GARtcGVNyircA%2B%2FrxYFcYHytpv7fFkLLeSO487Da9Eqj9esmOwRBsKbVqYHW2W3i07Vrqkwuy5ciT96fo8NOiBhed2tikYbMTWxiO0CMS3z4CKMNfJ95fShay0o8EbVlB16IJCiQNKg1pFCuC8RtuNahtzNkHBuQMj4llYLrk90X5%2F1tx2E92qjaxs9xuJsHlxhxF%2BPMXvEmokLulssJYKp%2BvED8mhtvuCTbVkv49cG7aP2KObprsyD3wUInr7525GtX1%2B%2B5vtUyEJj0RGDsshXXhm%2F02mK%2BW%2BHTYgwJaYgOFoTQcHAQ77DXPENKcnZAsymuGd44UT3gXuxWFf%2FBzSibWoCg%2BhtmmaSNn4f%2BWKe43xZjM3%2BIMgDiVPWv72%2BI6%2FDtxI4WdzLQ6h9UVQfqCOv4uFXhpuAr%2FcyheEQ%2FQqN%2BzDwjrN25GNTTbL%2FhHlUybo4S9l9gB1%2F6xfZBN%2FjAlQzLEBC8D%2FiMRObufdXGVBsNt7%2FTV1PBqeeQA996P9q28kDiStDXT1t27oPR2VmaPvmDcFW2yW1SHJ8rK13YyalC0nwOTMYIudK5FmLMKjm1cIAKvNNWH3CkocaR5AiIJv4BfuW72OXXhKn0zC7jWhY0Rf%2FjijQFFVOcZGibEOpJXD33WwEKMMTy%2BcsGOqUBm7aIkdF%2BicSahcHRNDkwc1EExE%2BP%2FIWiyqTpvAB3e%2F10eObzp1WaMrdoiJfYHJDdkPqBNS5hnp%2BxHNzNSbmypedLCQ2Ehs15LmbtRXllXS9fG0I%2B7mqB2DouYpYZJQ8GfDxa%2F5g9orsSJzL%2BJXbGIq%2BvE0rQB2dEjBtRsxUVH7Ytc5TN0a3S2wDDaBI3Cb54HUQF4fSMnTrZgJseTQHwteE%2BGHDU&X-Amz-Signature=d2f3d781bd9b64b890bd42617896ef0978fd744007ced7323b4b65a39266f63e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J7PED4W%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4VPHBYXvrHyklVS3hNKY%2BmhbBxzZ9C1n%2BFDKWOdf3HAIhAPeYUSbXygJbyp4gCUt4m%2BuXqmu6Zzvr0I2zW71QG9nEKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzuY9qzviLUyThLmEq3AOPGt5ZO76G8LBM5LwpMV4B6HDw7524Ro2DhT7kl1iOms542gf6le%2B6hCbtDVEer7cOZHAufofoFrwt1C%2BFyO6TbsEdfADXN%2BVNduvCx3vK3tAHVqD0NGEcRE8QNg14wQsxdy5rS8HSpPQ4RSu1Ljob4VNTBUTdFzggLrl8EbiO3HmgrrZB3ek4Z7CVf4vl3TljgVPuHTMpIRKeXyDa1pqG8SKM6bCwHc8geMMXy2ouW36SQGvWK1gSECOw9YTgjoQCFdRYT%2FqhNMn%2FCDlU8ne1ch0fl9hFmDc2w%2F7d1ZBPUnxzZQpFCa5kh1u6Weo8tyIagXaxWQfKWysRNOVBQNKq0FRl0PDOwhrVQjq6EtlBqdPRZRjsUFfRYBkG9AF5TAcInJAo00HfGhwHjGimLp39yl6U0LpVIGPSQwc6R3Bo6HlhPcJefEBnRdbJMne3h%2FFk1idq%2B%2FdnswBGqeTrcau1%2FW5GP7nbxjvHm4vJfSw4%2BgL7uyrb6qYhBpTCQQItm05c1ITptsa9cvigI%2FfS59s9V2UlVPJ9E1UwwunoOHtAsJJTpMVV73o80IecLMcAXR1AXZ62y9e7wwy8c93eg41tEVbfccu7TaAS3XDFmfdrn8fVcXKKu7DglRILpjDv8fnLBjqkAVwV5wguzE47Xds1%2F7DDz%2FvF0guBpx3aayAHCuLrT%2BK130wqf85DCGpEm64LV6jnLzspspiIUL8BDp032i2HypaggTX4b4RE7C8P%2FLbVEWoCSrx3Yuw1Ngx1zaeUmIEUYDCQshTJPpdGILWPtwsWRuHXOFZkGNbHo%2BZjtywrSyIul1Ecg03yQgDJ%2BusqLS7GiC5XSTRFz2q19Ounxk5GVVDzD%2Bt9&X-Amz-Signature=bc413f169c59cbb6afdeadf66e3f4b1f48e6bcbbf3ca01893b8471d512b4da08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J7PED4W%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4VPHBYXvrHyklVS3hNKY%2BmhbBxzZ9C1n%2BFDKWOdf3HAIhAPeYUSbXygJbyp4gCUt4m%2BuXqmu6Zzvr0I2zW71QG9nEKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzuY9qzviLUyThLmEq3AOPGt5ZO76G8LBM5LwpMV4B6HDw7524Ro2DhT7kl1iOms542gf6le%2B6hCbtDVEer7cOZHAufofoFrwt1C%2BFyO6TbsEdfADXN%2BVNduvCx3vK3tAHVqD0NGEcRE8QNg14wQsxdy5rS8HSpPQ4RSu1Ljob4VNTBUTdFzggLrl8EbiO3HmgrrZB3ek4Z7CVf4vl3TljgVPuHTMpIRKeXyDa1pqG8SKM6bCwHc8geMMXy2ouW36SQGvWK1gSECOw9YTgjoQCFdRYT%2FqhNMn%2FCDlU8ne1ch0fl9hFmDc2w%2F7d1ZBPUnxzZQpFCa5kh1u6Weo8tyIagXaxWQfKWysRNOVBQNKq0FRl0PDOwhrVQjq6EtlBqdPRZRjsUFfRYBkG9AF5TAcInJAo00HfGhwHjGimLp39yl6U0LpVIGPSQwc6R3Bo6HlhPcJefEBnRdbJMne3h%2FFk1idq%2B%2FdnswBGqeTrcau1%2FW5GP7nbxjvHm4vJfSw4%2BgL7uyrb6qYhBpTCQQItm05c1ITptsa9cvigI%2FfS59s9V2UlVPJ9E1UwwunoOHtAsJJTpMVV73o80IecLMcAXR1AXZ62y9e7wwy8c93eg41tEVbfccu7TaAS3XDFmfdrn8fVcXKKu7DglRILpjDv8fnLBjqkAVwV5wguzE47Xds1%2F7DDz%2FvF0guBpx3aayAHCuLrT%2BK130wqf85DCGpEm64LV6jnLzspspiIUL8BDp032i2HypaggTX4b4RE7C8P%2FLbVEWoCSrx3Yuw1Ngx1zaeUmIEUYDCQshTJPpdGILWPtwsWRuHXOFZkGNbHo%2BZjtywrSyIul1Ecg03yQgDJ%2BusqLS7GiC5XSTRFz2q19Ounxk5GVVDzD%2Bt9&X-Amz-Signature=c5da959701681972709b7079dc3aec007b654b51783d4b5fbc70bc881ccfdd8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU2HRW3E%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGh40x%2Fe0mTpisX3l1d3NZz5v%2B9fvilZmTWPL8reg2yXAiBF3tU2gzTTz0LCw2ZfNrBif1Ny%2B0eS6CPIqhHbayPqZyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwFvLstXvf1ifhNnnKtwDSkqGzMaeTw30X3nfwRQoO%2BTd4NkFudDTK7W5kVBKqjx1NxoGThqUXOKh%2FuwZoIdw3Z2suBR%2FLk0aHUKlq6tPjx0T5ZAkirQMKQn9bjPTL7zHvRzKY3rIv1smWiSclUN5QLVR4Ft8H0I9eP3OyGJI5tRknsD2rNnJxVRSVBSZ6nWR0Dawy6D92Img9nWMqNkKoUVp%2FdXH4E4AxqwQB0C96rfJ2g64Z5g7dAPt1L5to7FhC5PYx4wTIgAeXdVTBRvd%2Bfw4ik2bGFSeRXDuw25mYhKrTy4dxhgcuIervzBns8SiegWbDM2JaAm63t1GfX8mf2KrO07YAVg%2Bgd07Mx1Nzj5EJW3kWJK2tgzKW1qww4Iez3Unt0gJQKIwag0eTEneySyw2HRmHHrLJ1Kt0Ed96k65cw%2BshasuqxUwwra0oXhRZuXvlqxAirVMl5DOXTRQOu3KkYKJn2RWhs%2B6%2FN7MGCPgVFTqV0jzihz6cS3RBfh2P7L6S1xvnsHcVCNXNhGVAJrqqMv9tOh1tSluVW8HGwT1hlFIbifykW1TzSWV1hfk685qsbi4sKWn0VKZIVHRSQCDJsOp5d0I0mOOeRNubpn5JDah2QBBvNLN%2FO20ZJwhgNTYcbS%2FpSeCMIswxbH6ywY6pgE3cTtEgE6bJjqFohdkiMQuWaRdxfDrUtGjCBuN7dw6SzcqqvN90%2B6PlnQ7tsUGCEJLLahEi7EhbKWZVbXh5fTDHPVZ7wgb5sZEBPM5HPAtqpyFL22vEQM%2FpSJbGR9MC8RUPyoLkzm3yPzeXDw2tRfMjLPsKhlpCs8%2BhD9XttOqYlq6kkTdgw8HlizIaQumwL%2BNcTtVEzbsJF%2FblFEz2%2BDIGV%2FeppjH&X-Amz-Signature=106c9a704a75836aac37f6f93c87c5e57bfb2ea6a9e614d924a42321ada25c75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

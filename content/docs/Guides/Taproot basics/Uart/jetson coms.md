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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSSM7CBF%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyDVdfSP5Uvkq0JNvK8NV1R7v8AG7Xa0gZqUvq15mr5wIhAIuAOYdEtQ4DDt9yf3D%2FcvR0RIDzSJxmmQ3k6R08kedfKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygOa7EAHAeDTp8Wjkq3ANjMhpAmubixBosb4lSsJdBEaLwKxmgpEoBZ9xXQPDIIW7kbGbsmNI5Sa1up1Y5vqAcyuFkaju5ZO4JWX002tBo6BF7axXLBlAaSsS7hLi0xSZRc8k%2BS8IB52Lr3DcVM%2FlPOcAzOIT0o%2B55nlrounBJmFjLeWB63bpbcbzwSVa5kFqFmgc4ewF0fojUWsQVhaPTpjqHQ0cn9v%2BfdbjKJpl%2F12w%2FVdbFcjyreCzC3QPtYKB4CR6z878wwLiF6xD6FMSvxuJ%2FdxkR0IVWrknXRFfmpXtElpyS7qN%2FeO4nXLplNgfPG%2FJYzP3aQiyMCdcvHaPcwy7nF%2Bfgy6FyJu88aSKFvSx%2FA9OiDu24gUUXfDzASklQ9oxDBcbXmfpZuLT1rCEBeVwFSgGQolUcFjMHx9XX8jwKo7oRoRPVBznOVKbEfLmz0JJHLyvEcyOj%2FyNPuizk%2Fulk38T8vSzujjx7qiFw6n%2BcDqkFyizypE8rZRDOC27Wop2AJPHRSWxsH%2Bx6kaN6YZ5tvUidMGAa5W7pYBMHIJs6CS4x9mGBQ4E2%2BHYmm95zHjX3sH833fhitJrG3A9ML97tieP1XOzU1F9DSpNCUikB%2BTmRqDiHkmIh%2B74h1bli9uSnQDnE1w9%2BNjCNkNjNBjqkAasPF%2BpLg7b%2BZfzye2u%2BnqPWGZb7Um7UthyjEI5xJ%2F77c0cHIwzfM9Q9kNOba%2BVkl3eX4CJpirH2%2FE3pO7%2BmnJq5XLnIN2OV4Ikxut8dyXfnid27xe%2Fo7xO5wYbouNj6TmwZGplOHKOV8P4aR4Whr8a8pJrEa4hPsnrtfNceNMBxkkrJ70nakBA0dyQ5cAxbCqFnkcRC4LxLbVmFVi%2FkaL6RtNNC&X-Amz-Signature=dd92307cd90055124fdbdd01ccfaf7725f232ab77cee0b5491eca5ac6757fbb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R72IWKR5%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOBCVSRkbKN4DOBM7%2B3D8K4vmwVSJ2naTQ0gQx7fDJbwIhAOllYLTgurl59Sb7acXPypHQMaa542eGzjesXJ98HPKZKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLtGMJAV5jD6AUTYUq3AODr3bppu%2BiAEKB7FTQTklxQGRQZuQ0ST0LJZgzgPblL1Z3GLUqPerc9I04qkmyDzFomaQ%2B0lySa7W5ImLK%2Frgr%2FwvdDHUcXH%2Fh349iCd5fSniMx4tmPtizKL%2FRrCzZ2H6vWZ%2BnxViAcByo4vMwrUOYh6U1ucaqiMNj7Z50CBel1j7EUtLc0ysQZpN%2B2yQVJ48%2Fs4NXltsfD99wTryedEzQ3oPxd5v%2BGsV0Yvf7HR2i55QEGbOiJKog%2BhoaYNk6PmQt6GHCmR9EsXixrIBEBM%2FsJiO%2BuHOo5TT4noaqNodUGNr%2FUSZhB2aatjWRIMlX73rKPuuO1cRe6JCGDZciQSedoZDvFoV1dcstaRpnO2DJu7FbLssisG8zX6LC1GBshm5dDkH0U8QuPNA5HIUY4nWUyfaeHguU5OEIvI1EBGnWGRoTqPTvqSpKE%2B2YU5ZMynWX%2F8c2VWTuTd7dGj%2FhdAjDcLoitvetOz486iyuW%2F%2BItBuTHQw%2B9DDVEBOQbNeRHpbgGw4py7oFAYYjLO53A9W7RND%2Bik8pR%2B7PrqFM%2FAqmtztk%2BBl%2FOhGm%2FlYhCkSKftrHYD7ELbowYoUzoTzrKRVRTpgCr%2Bmyh5WMkJ4SfZJkVtl40TlIaF8xbX%2B0UjDgkNjNBjqkASxPcxaSHmkX2Y7dq%2FJKwOG7hKSmiXyhGMFE0uBmqfD06UdUXJsN79nDgiSd60O17XDRwaKI9R5Z%2Bi79gPTM0klrKSAxr6ZGeOl%2FDcYqQVq%2BB%2BfW6mkrAVvCa5BFV74ggj7X%2F7kccOOntVX2cVYN%2FxxftXBORXJQkLRalW0CRGjJllTPmFTyTQGdjSC3emsl%2FGo%2FBTeNuYuD%2FPZMzniUya%2BImRvl&X-Amz-Signature=33169c14fedbce8fd648f11e380313553e354c213ec0313413a8071c0f38e10a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMXEUJGH%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7TWD4AMhmVBv07e8X0LYkjVCxVBtgyW7IVZM1tmFrDAiEAhHDkozEMDu1mEHQJpCKxo9CJ6fbCh9wX9ZzGZLuaGOYqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBjJ%2FTpomb4mpobwSrcA1f1fVvOtIg3c7%2BlVVFSA2mdbrVVgfkFBO2SvF8vcsUVszaM6voCf7e6kC8EyicW7dLHZZHIC%2FdVbj9IwB9BJoLb%2BEyAdVhq9v33j8JawcWomjkgBPXZJocte4zNAArlvl7q%2BxcBkDG4KBeUtZYifrg4JvKvZ0NkqCXTd4Gjn9als7YNUmadzkwLePULiGtofc1ETvIaP%2F7Yn%2BB8v28SBdIsD2towQMUHwsT75S2orbdhswfIsjf%2B5U7vCnc7MAxdKdpdwe8Q20i4mEuRJA8hQGp2j8%2Fjujxeg5VDIEMMloDFn2sxCozBLflInVRdm7fhZ6q1iXJxp%2F6kxhwL07sZvNCfesPypZeLnAHLcOJGtIh%2BslPjP%2BflLiF%2BFrx%2F83TA5th%2FkLMYLAtNxtCSojSfjo%2BsuxWmdTLDI%2FILSIleIRhWIDwsZnwm%2BhaMklx5iQQpUgcUxU6nKmXlrBnqgye9aTUhbejxfLgnmsFonozwbu1hSpcJd5EPvrmRNDUdjjjAU14fqd0Zdkg%2BnB6m6Pl%2FDsXdJUwswhyaoBDZKv18AI2pnE0n7Ljtg%2BArk8Z9OCE%2BkbX3OAEdvrW1XqR2SQ516TLZLZtvRisfNfneBeMsP72E0bIKhJ7wMbHOpcAMLSQ2M0GOqUBLTZ5HcNf1FWzzRemhiagFwO4EOpwzj1HVeoBwOZ310hE2W0FYb0bhBkWq%2BGuj0t9TjaBNvgjUhOLzjeywWTQloevX4iiUAKh9C0LGc6FU4JLWPHD%2FIJfhCADeoI5g2KXRXlFZG8nNlsFNMseRAsnmLjZSycuz7NchsrXWdxxLLXWh8l1n2xnDrHuxdPJQfRNbKLtdX0X78cFsVrTsf5m%2BZNHxZAs&X-Amz-Signature=02cae6e8dd56422018c5cc5f0923f6a386b1f686f329efb9e73b2a1a91af6eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMXEUJGH%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7TWD4AMhmVBv07e8X0LYkjVCxVBtgyW7IVZM1tmFrDAiEAhHDkozEMDu1mEHQJpCKxo9CJ6fbCh9wX9ZzGZLuaGOYqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBjJ%2FTpomb4mpobwSrcA1f1fVvOtIg3c7%2BlVVFSA2mdbrVVgfkFBO2SvF8vcsUVszaM6voCf7e6kC8EyicW7dLHZZHIC%2FdVbj9IwB9BJoLb%2BEyAdVhq9v33j8JawcWomjkgBPXZJocte4zNAArlvl7q%2BxcBkDG4KBeUtZYifrg4JvKvZ0NkqCXTd4Gjn9als7YNUmadzkwLePULiGtofc1ETvIaP%2F7Yn%2BB8v28SBdIsD2towQMUHwsT75S2orbdhswfIsjf%2B5U7vCnc7MAxdKdpdwe8Q20i4mEuRJA8hQGp2j8%2Fjujxeg5VDIEMMloDFn2sxCozBLflInVRdm7fhZ6q1iXJxp%2F6kxhwL07sZvNCfesPypZeLnAHLcOJGtIh%2BslPjP%2BflLiF%2BFrx%2F83TA5th%2FkLMYLAtNxtCSojSfjo%2BsuxWmdTLDI%2FILSIleIRhWIDwsZnwm%2BhaMklx5iQQpUgcUxU6nKmXlrBnqgye9aTUhbejxfLgnmsFonozwbu1hSpcJd5EPvrmRNDUdjjjAU14fqd0Zdkg%2BnB6m6Pl%2FDsXdJUwswhyaoBDZKv18AI2pnE0n7Ljtg%2BArk8Z9OCE%2BkbX3OAEdvrW1XqR2SQ516TLZLZtvRisfNfneBeMsP72E0bIKhJ7wMbHOpcAMLSQ2M0GOqUBLTZ5HcNf1FWzzRemhiagFwO4EOpwzj1HVeoBwOZ310hE2W0FYb0bhBkWq%2BGuj0t9TjaBNvgjUhOLzjeywWTQloevX4iiUAKh9C0LGc6FU4JLWPHD%2FIJfhCADeoI5g2KXRXlFZG8nNlsFNMseRAsnmLjZSycuz7NchsrXWdxxLLXWh8l1n2xnDrHuxdPJQfRNbKLtdX0X78cFsVrTsf5m%2BZNHxZAs&X-Amz-Signature=0c67ca689879e333e75b8a1911324399cb69816c0ca32eaa4e2e3ae209906ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R72IWKR5%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOBCVSRkbKN4DOBM7%2B3D8K4vmwVSJ2naTQ0gQx7fDJbwIhAOllYLTgurl59Sb7acXPypHQMaa542eGzjesXJ98HPKZKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLtGMJAV5jD6AUTYUq3AODr3bppu%2BiAEKB7FTQTklxQGRQZuQ0ST0LJZgzgPblL1Z3GLUqPerc9I04qkmyDzFomaQ%2B0lySa7W5ImLK%2Frgr%2FwvdDHUcXH%2Fh349iCd5fSniMx4tmPtizKL%2FRrCzZ2H6vWZ%2BnxViAcByo4vMwrUOYh6U1ucaqiMNj7Z50CBel1j7EUtLc0ysQZpN%2B2yQVJ48%2Fs4NXltsfD99wTryedEzQ3oPxd5v%2BGsV0Yvf7HR2i55QEGbOiJKog%2BhoaYNk6PmQt6GHCmR9EsXixrIBEBM%2FsJiO%2BuHOo5TT4noaqNodUGNr%2FUSZhB2aatjWRIMlX73rKPuuO1cRe6JCGDZciQSedoZDvFoV1dcstaRpnO2DJu7FbLssisG8zX6LC1GBshm5dDkH0U8QuPNA5HIUY4nWUyfaeHguU5OEIvI1EBGnWGRoTqPTvqSpKE%2B2YU5ZMynWX%2F8c2VWTuTd7dGj%2FhdAjDcLoitvetOz486iyuW%2F%2BItBuTHQw%2B9DDVEBOQbNeRHpbgGw4py7oFAYYjLO53A9W7RND%2Bik8pR%2B7PrqFM%2FAqmtztk%2BBl%2FOhGm%2FlYhCkSKftrHYD7ELbowYoUzoTzrKRVRTpgCr%2Bmyh5WMkJ4SfZJkVtl40TlIaF8xbX%2B0UjDgkNjNBjqkASxPcxaSHmkX2Y7dq%2FJKwOG7hKSmiXyhGMFE0uBmqfD06UdUXJsN79nDgiSd60O17XDRwaKI9R5Z%2Bi79gPTM0klrKSAxr6ZGeOl%2FDcYqQVq%2BB%2BfW6mkrAVvCa5BFV74ggj7X%2F7kccOOntVX2cVYN%2FxxftXBORXJQkLRalW0CRGjJllTPmFTyTQGdjSC3emsl%2FGo%2FBTeNuYuD%2FPZMzniUya%2BImRvl&X-Amz-Signature=c48c1454d22cc80529cdf46238b24b837186be550251c830c7a6c4afe3890314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R72IWKR5%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOBCVSRkbKN4DOBM7%2B3D8K4vmwVSJ2naTQ0gQx7fDJbwIhAOllYLTgurl59Sb7acXPypHQMaa542eGzjesXJ98HPKZKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLtGMJAV5jD6AUTYUq3AODr3bppu%2BiAEKB7FTQTklxQGRQZuQ0ST0LJZgzgPblL1Z3GLUqPerc9I04qkmyDzFomaQ%2B0lySa7W5ImLK%2Frgr%2FwvdDHUcXH%2Fh349iCd5fSniMx4tmPtizKL%2FRrCzZ2H6vWZ%2BnxViAcByo4vMwrUOYh6U1ucaqiMNj7Z50CBel1j7EUtLc0ysQZpN%2B2yQVJ48%2Fs4NXltsfD99wTryedEzQ3oPxd5v%2BGsV0Yvf7HR2i55QEGbOiJKog%2BhoaYNk6PmQt6GHCmR9EsXixrIBEBM%2FsJiO%2BuHOo5TT4noaqNodUGNr%2FUSZhB2aatjWRIMlX73rKPuuO1cRe6JCGDZciQSedoZDvFoV1dcstaRpnO2DJu7FbLssisG8zX6LC1GBshm5dDkH0U8QuPNA5HIUY4nWUyfaeHguU5OEIvI1EBGnWGRoTqPTvqSpKE%2B2YU5ZMynWX%2F8c2VWTuTd7dGj%2FhdAjDcLoitvetOz486iyuW%2F%2BItBuTHQw%2B9DDVEBOQbNeRHpbgGw4py7oFAYYjLO53A9W7RND%2Bik8pR%2B7PrqFM%2FAqmtztk%2BBl%2FOhGm%2FlYhCkSKftrHYD7ELbowYoUzoTzrKRVRTpgCr%2Bmyh5WMkJ4SfZJkVtl40TlIaF8xbX%2B0UjDgkNjNBjqkASxPcxaSHmkX2Y7dq%2FJKwOG7hKSmiXyhGMFE0uBmqfD06UdUXJsN79nDgiSd60O17XDRwaKI9R5Z%2Bi79gPTM0klrKSAxr6ZGeOl%2FDcYqQVq%2BB%2BfW6mkrAVvCa5BFV74ggj7X%2F7kccOOntVX2cVYN%2FxxftXBORXJQkLRalW0CRGjJllTPmFTyTQGdjSC3emsl%2FGo%2FBTeNuYuD%2FPZMzniUya%2BImRvl&X-Amz-Signature=ca7b4469bc21432ca34c6e099eb1caa43b22b05f863586705bec56efc8df9ea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCALVMDH%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwQaQMHLSI%2FjaNdCXA3AI3ntn4TjNW2ZgoD80mACPYYgIgV1B%2FMUXqgM4WuogS4n1%2FHP6uQmQsN7QB9h21FqA3UqQqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTy4RR2SvPZEPxJuSrcA88ySkaYdrA8XvZKWTR4rkzpHYkiWBGHdAteq5A3JaWtqrjl1d7dr4kW6dV0re4OQe2whWYhPSw0ZsjcZS7A68Z6v%2BEl36WvdR%2BKjBVVWb5pT5%2FDPN6zfWajibzauI6rtBuxFdnj8QHkoq%2BgsQR39fogkkXxZwEVuuQucYpU8B5Gd2hux%2BA1XqB8dNgzENBpfWwcjDluRI8OLWEtCk1oZ0xX0DBVbKmPzOzab6%2FsNXUZeziChsk1bQvVP%2FHurCv5HCDjsHCCgpU%2BH3sy2t8x4nWB8hUTGYsNxHC8dpvftlHqj59h5m8Kht%2B7cI%2FlG3wtkaCla4CbItzX0WiAq8wh%2BPpbCelXMjYou%2FWQb6OD76tmlvYKJotqSMIFcsVwi%2FwevawMlkvJHlbKyDWhAVy%2BFwq8BGN0B61Wln2JCM8TD1DxGpuIHia3c%2FbKQoEnAbDKprstZ3EhMNnrsY58Gnpo6m1d6m15qs4o3D2%2FWhhFsT8ebBiFc2ZFc55OpvZ7maj0Wuyjf1nqwOvr%2FnKa9gVT8EwZ%2BSzq7%2BJw6jIqIVoIdPbKLSpzALJCAx2pKK7MD%2F07m9Pq1LMVsyZ38uikhvfAn6LIcC9nKoL7d0QGuroWFTPD3JtKYKAsphOnIyFwMOSQ2M0GOqUB2Z6ugfqn16HA8OSpBTqR8hLJ0Dpiv6wVubBpeTRWFaI5jtL9Cel6M%2BLmHRyYlAVSILHNYt4hi9xX8AZkkREJ7SHSX0bg1%2FUU%2F3q6c%2Fa7VB%2B6i4NJmfTqmqL8SgQeocniHTx80zBD44adPLCQ3%2FU%2FcTGh3s%2F%2BbzFk%2F5mkSYtdcUYDGvPLe6K6NqIK7WOBnX%2FMqC9tgDI1UW2cmShrV9puAdtLFvQB&X-Amz-Signature=3146be7cc229da2ec1c6985544cd1bb227fa18c33f57cb2808bde58f19eeeb95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

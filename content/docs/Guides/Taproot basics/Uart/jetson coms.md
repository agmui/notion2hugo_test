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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLVCKTRA%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtxkpWBCdkPR8vKMA0qKeJdZ2nWHeSzDJNhJSebhP2TQIhAPW%2BR5Q6xKPEP75O5DNYcYz3k%2BvT%2F3dNMc14Me0kdktWKv8DCEsQABoMNjM3NDIzMTgzODA1IgyaNqha57K58otXnFsq3AMvP0iUrqNoRLKPA%2FtkwLbQhXtkzjLseu2QLIKuJVoWdw17vStBuS0GF1IgGXCjtPba319g%2BoZt7A1uTT1LfnSfx2PBhz3RCiKYCq1Wco2VRExzolWgxZZm5R0esZNRx%2B4KrxWysTmWPDGu75YvUE%2FkUeGjcr8VM%2FPy%2FY5rfOjJ3Q0jsF8P%2B3bL8UiRRDhIYrjDTafQR6bYNUmcixuCj%2BCHGpLR%2FzJfVsfCHBKNr04lCk5tjTW6etPr%2FvRSCTxyLGSEmQJwdE5z7DJ5Vifpz5%2BY77%2BLx8SwQVPIgnqSuZguYE0u%2FR2VMGgK7OyNMptKSsU3L%2BGU%2BozuLayDS1hVwM8Qaj8rZn1Yyvq2Wgx9YyFNf2TmUhgRRx2e0WlEKyurANIvxlTqC4sD3mtP%2BnKxZF5GQ41CFcdr5uqQPPD1xFSN2DtbsItOTRrihWGSHVPE9KOP9NVyWlXjFHSx6ASCpuc7UVsJMN5Bo1vujF%2FfavApJJoLnyIQbyUcBfq00CZ%2BA1Ma0auTI8ZYUV6UqmmhY8TzY5ut6pJ2UULj%2FOwYLpgWtRp3AF98GOdUiuckClkYf05Ijx1yjbxi4hLa%2FpZWk7LcIVKHPkXJ%2BHykHs7OkPMc5CSFBLh0OtTXKqpk8TDmr%2BDLBjqkAUADvofDFkwtBqO6TEFlXzpXaqWIoAkF1FhwkDQv50U5zs9G7%2BzpCNt2y5g9UzwfBJOyJD6fq7JBFul5E2h1wtxk6NRPdPJH4LxBdDN03%2F7aSrJYQKbHgDdqi0XdipQoszEir4C9t6jaz41CtexfLpmZXoIThK%2BGmkIFb%2Bg%2FXaGtNCxKZQwAjSFh%2FEOIiTAZAqMaPng4noeExplWGj3URpzGSxyD&X-Amz-Signature=8f1eac06f727fd58713096cbb01f3f8b8695e2d800955f911b47f8d4404e3ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKBIFBU%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3L0mMJD9Hx9dWw6Gh%2FsqZn80tHZRHTGgvrm2Q%2F%2FVDpAiAUaAfiYw9%2BJNLV9LJetdZTp4Ab582fnsGmTjZK1rh5MCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM4DWwPXS07YwbXzIHKtwDs%2FvZrmPwQlWBcrXkQIsE3S6NZi8sugng9mzpUhQzpmCIIlae8Ib%2BEB3xIyHdWNS6lXVn3iVu0M1hxJuVMa%2BQOmBmdLu9K4%2FypzQ6iynbBAmYYWjE9OkfhpIh74puy0mWb1KAZaz22jFE69GebH13CADFICe0C5D7FJcZuxxfDSyh7jZmUZWevfoEN8Zqv5pD5L6zidLCg%2BBBCFlyXUvxeoDCmEjxhYgYBJ77b872dHOiLcqn8mxxQPINVUbxbuoQHFL0BUoImg4FgNetRsag1pckPG6YWTe9XQMoEn6z6%2FWc4zv8QKD5%2B%2FM6kcsnslg%2F2xPzm2OZu9KLi7TyTH1bK%2BW7XOBT853E5W%2F24l99i0z5tHmz%2BJNZoXWvNBGfSA%2Bscjhri6f9SS2tZ2Kl3q0xqUvPT4y5kphYTy1pUdfgTYF78USxCZncIBLcCOXbn1d3MBzybIT1narXyUk86yhdkInCJR94LVSSR4gj3m2vMPytSO600IdDBS7E2eJ%2BH5KXridorHyiCBC8mVrsa2TjupsgT2bg1G13tjb4SbO77NJ1%2FfC9NQsE8tg7bzwdt1ogGB47Hc5FeB9RG9jsRE4ujI4jGnxqao7OBcG%2B6FQ5HiYCFd1%2BhIPhbGPMsGswrLLgywY6pgFoISha338%2B%2FM4xOLOXKfPi%2FcOnZrx641m%2Fu%2Fl%2BHLJw5XWYFwXqdgiA9I%2FrxwqIPjFvARz7TnJIys6luESjkTMZbxsjxEgUDEwJJGbGAg62HuyHODxOSNCjEnVU%2F7rv%2FACu7kaUYyBSzLKjSOcOFETUoFz1JKZIkYMnwAoLh7lvHv5MlhfOUBl0EuI1iKWGJwhxRXl9%2Fwlejw2AhdOyx9h1%2BRbB53gW&X-Amz-Signature=eb1f22330cdb43e867acafe79c526aadc0403a2454cf5e7677958fddc7567206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M4SNG7X%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2h6d7DQrgqOOHmxJJv%2BS3PIlO9JpPIofM8f2K9KGTyAiBKxnxCQzB3VDfw7JACNroJ%2B%2B%2FNIT%2BoXdlOU57SJ9OxACr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM4jNNu1lzjb6XhxMCKtwDlME28fuoU4twE2pzVzW0jFMYGhoR8xiAZRPvyU9q8S7W%2BVxiPyT229asI3cCtFK49PAHjvunld7iiS8jKSm2wwrSprAP8OHhKbZi1JxzYLTUIjbY20AXpicvJhXeG159qOIWEkDSk2slrCaPDvEZZ7%2FOEAssbMFSqMgHCkfPiZM%2BeaNyM0aD3GF1eNN8%2FthjRmBHD9cQongCWXz0Ma6l4KzKzFalF3RR3aXGV2246yj4ynKWlYcmZ%2Bq5z68MFPGxcnp117ggR9%2BmdAfZuEHRmg%2FwvBK8Dhx1Lo1TOzQAduUapkEqDGdZsywc6KmQy%2Bieg9y95Eb1Llkj5B2udS3V7Y6dyZLSOnKskYTLC%2Fi3nNYsLo%2FygF6RX1R4ugCttzRDi093Jk2gMqEd6JcL0WIWE1WDcvKSVt4KBcVuE8DX7mboUEDGCR%2FvIq3vi0DXRWJZCOJtR7UZ0eqQxkdl8uHFgkja3sFnUnSJyyzxranEUGdBCcJCN6j6HQ9oIJcbEjJUJKJMqV0hKQajX%2FEQUzOnDeqLqaQRoI7V18HVA1ijqs7Ho6JE3gS32b%2FbyQIvJbh7se95s01ZwN6OIJyFW3oYgc%2BvUMn8RfMhVA10E6Z5S6e%2FttmooISFaIqFZNswjLDgywY6pgGX7TfyXFQ1ZgCE3JYkYnAtgddOHpUKK7v64Kr49UffhjhK8R4Slz%2BeWzpU8ebj7KyWhx04sbpPDJovpmndW9AMELRIyLLF1t%2BlDNgcSideHOs356LxF6ePeFUzsvjeO3mGrYTNaUB1Q416naIogVAs%2Fli0VTFuMNX5RPbr5%2FBXEpY3tHYP3%2BZjnWpNJgP7pWU6SoQug0rV5r9fxUdh7d3mbSUogrsa&X-Amz-Signature=6c603259f951b913ca8193525556d61260dac623891f7af94ea4a4ba8fad7a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M4SNG7X%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2h6d7DQrgqOOHmxJJv%2BS3PIlO9JpPIofM8f2K9KGTyAiBKxnxCQzB3VDfw7JACNroJ%2B%2B%2FNIT%2BoXdlOU57SJ9OxACr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM4jNNu1lzjb6XhxMCKtwDlME28fuoU4twE2pzVzW0jFMYGhoR8xiAZRPvyU9q8S7W%2BVxiPyT229asI3cCtFK49PAHjvunld7iiS8jKSm2wwrSprAP8OHhKbZi1JxzYLTUIjbY20AXpicvJhXeG159qOIWEkDSk2slrCaPDvEZZ7%2FOEAssbMFSqMgHCkfPiZM%2BeaNyM0aD3GF1eNN8%2FthjRmBHD9cQongCWXz0Ma6l4KzKzFalF3RR3aXGV2246yj4ynKWlYcmZ%2Bq5z68MFPGxcnp117ggR9%2BmdAfZuEHRmg%2FwvBK8Dhx1Lo1TOzQAduUapkEqDGdZsywc6KmQy%2Bieg9y95Eb1Llkj5B2udS3V7Y6dyZLSOnKskYTLC%2Fi3nNYsLo%2FygF6RX1R4ugCttzRDi093Jk2gMqEd6JcL0WIWE1WDcvKSVt4KBcVuE8DX7mboUEDGCR%2FvIq3vi0DXRWJZCOJtR7UZ0eqQxkdl8uHFgkja3sFnUnSJyyzxranEUGdBCcJCN6j6HQ9oIJcbEjJUJKJMqV0hKQajX%2FEQUzOnDeqLqaQRoI7V18HVA1ijqs7Ho6JE3gS32b%2FbyQIvJbh7se95s01ZwN6OIJyFW3oYgc%2BvUMn8RfMhVA10E6Z5S6e%2FttmooISFaIqFZNswjLDgywY6pgGX7TfyXFQ1ZgCE3JYkYnAtgddOHpUKK7v64Kr49UffhjhK8R4Slz%2BeWzpU8ebj7KyWhx04sbpPDJovpmndW9AMELRIyLLF1t%2BlDNgcSideHOs356LxF6ePeFUzsvjeO3mGrYTNaUB1Q416naIogVAs%2Fli0VTFuMNX5RPbr5%2FBXEpY3tHYP3%2BZjnWpNJgP7pWU6SoQug0rV5r9fxUdh7d3mbSUogrsa&X-Amz-Signature=1f187138922744374c23ef966ba965408404239b589cae37238907dfa6f273d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKBIFBU%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3L0mMJD9Hx9dWw6Gh%2FsqZn80tHZRHTGgvrm2Q%2F%2FVDpAiAUaAfiYw9%2BJNLV9LJetdZTp4Ab582fnsGmTjZK1rh5MCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM4DWwPXS07YwbXzIHKtwDs%2FvZrmPwQlWBcrXkQIsE3S6NZi8sugng9mzpUhQzpmCIIlae8Ib%2BEB3xIyHdWNS6lXVn3iVu0M1hxJuVMa%2BQOmBmdLu9K4%2FypzQ6iynbBAmYYWjE9OkfhpIh74puy0mWb1KAZaz22jFE69GebH13CADFICe0C5D7FJcZuxxfDSyh7jZmUZWevfoEN8Zqv5pD5L6zidLCg%2BBBCFlyXUvxeoDCmEjxhYgYBJ77b872dHOiLcqn8mxxQPINVUbxbuoQHFL0BUoImg4FgNetRsag1pckPG6YWTe9XQMoEn6z6%2FWc4zv8QKD5%2B%2FM6kcsnslg%2F2xPzm2OZu9KLi7TyTH1bK%2BW7XOBT853E5W%2F24l99i0z5tHmz%2BJNZoXWvNBGfSA%2Bscjhri6f9SS2tZ2Kl3q0xqUvPT4y5kphYTy1pUdfgTYF78USxCZncIBLcCOXbn1d3MBzybIT1narXyUk86yhdkInCJR94LVSSR4gj3m2vMPytSO600IdDBS7E2eJ%2BH5KXridorHyiCBC8mVrsa2TjupsgT2bg1G13tjb4SbO77NJ1%2FfC9NQsE8tg7bzwdt1ogGB47Hc5FeB9RG9jsRE4ujI4jGnxqao7OBcG%2B6FQ5HiYCFd1%2BhIPhbGPMsGswrLLgywY6pgFoISha338%2B%2FM4xOLOXKfPi%2FcOnZrx641m%2Fu%2Fl%2BHLJw5XWYFwXqdgiA9I%2FrxwqIPjFvARz7TnJIys6luESjkTMZbxsjxEgUDEwJJGbGAg62HuyHODxOSNCjEnVU%2F7rv%2FACu7kaUYyBSzLKjSOcOFETUoFz1JKZIkYMnwAoLh7lvHv5MlhfOUBl0EuI1iKWGJwhxRXl9%2Fwlejw2AhdOyx9h1%2BRbB53gW&X-Amz-Signature=01f11ac071594938dfadad4b4cb3078ef70155ae33112526477d198821a8d682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKBIFBU%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3L0mMJD9Hx9dWw6Gh%2FsqZn80tHZRHTGgvrm2Q%2F%2FVDpAiAUaAfiYw9%2BJNLV9LJetdZTp4Ab582fnsGmTjZK1rh5MCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM4DWwPXS07YwbXzIHKtwDs%2FvZrmPwQlWBcrXkQIsE3S6NZi8sugng9mzpUhQzpmCIIlae8Ib%2BEB3xIyHdWNS6lXVn3iVu0M1hxJuVMa%2BQOmBmdLu9K4%2FypzQ6iynbBAmYYWjE9OkfhpIh74puy0mWb1KAZaz22jFE69GebH13CADFICe0C5D7FJcZuxxfDSyh7jZmUZWevfoEN8Zqv5pD5L6zidLCg%2BBBCFlyXUvxeoDCmEjxhYgYBJ77b872dHOiLcqn8mxxQPINVUbxbuoQHFL0BUoImg4FgNetRsag1pckPG6YWTe9XQMoEn6z6%2FWc4zv8QKD5%2B%2FM6kcsnslg%2F2xPzm2OZu9KLi7TyTH1bK%2BW7XOBT853E5W%2F24l99i0z5tHmz%2BJNZoXWvNBGfSA%2Bscjhri6f9SS2tZ2Kl3q0xqUvPT4y5kphYTy1pUdfgTYF78USxCZncIBLcCOXbn1d3MBzybIT1narXyUk86yhdkInCJR94LVSSR4gj3m2vMPytSO600IdDBS7E2eJ%2BH5KXridorHyiCBC8mVrsa2TjupsgT2bg1G13tjb4SbO77NJ1%2FfC9NQsE8tg7bzwdt1ogGB47Hc5FeB9RG9jsRE4ujI4jGnxqao7OBcG%2B6FQ5HiYCFd1%2BhIPhbGPMsGswrLLgywY6pgFoISha338%2B%2FM4xOLOXKfPi%2FcOnZrx641m%2Fu%2Fl%2BHLJw5XWYFwXqdgiA9I%2FrxwqIPjFvARz7TnJIys6luESjkTMZbxsjxEgUDEwJJGbGAg62HuyHODxOSNCjEnVU%2F7rv%2FACu7kaUYyBSzLKjSOcOFETUoFz1JKZIkYMnwAoLh7lvHv5MlhfOUBl0EuI1iKWGJwhxRXl9%2Fwlejw2AhdOyx9h1%2BRbB53gW&X-Amz-Signature=2926ae1adde915649d64ceea9703ddb6d0278bb14d491da9472d02e1bee1c525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VJAKIUC%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGet6aBvak7xliWWvu%2Fw6Ksb3iI2SgdpeS18TQTTzYmWAiAWOi3zQq6182753oSu6FEWe00uEjISA1DLH%2B7eCcPjdyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMiF%2BMu%2FeX8bDPIMxGKtwDHv7wXHfraRg4AT91mG4A9jLN95O2Yan96TIxVdX4gNGbvhuPHgELt8FzMGQh%2FhhU2ULUNpNd4Uk61yFQOMKE452KJ2hqNMu92N%2BllcW7j4lN9tarfL2OYFsp8KIrWX%2B4YNZYKrcMOiWw%2FUzUrzAqdBCvT%2FeTW%2F28VYmnXC6lis8cxM7jlW%2BmqQ74twx7GSG6HLj9S1dpDZr8ohRGqQjz6cWEUX%2BtBeqqZLLBeDO85CuMuThuI%2FHovW5XQ7Xg2z%2B5xlGm5y9DBbhvgPWFZtJJVtDJkY%2BDTBtidvMPi656InCLXwmk%2FAc3oeq6uWFUmQgelJ0JZ3rYGLKWtpG44O6%2BEhJxMQkD%2F4IQS8DcYrD%2BwW56qm8Bc%2FqbmS3VXm5qiP1QfiQCNtlIDJwl7ZUfLxu1niW%2BKtqTrP54I9%2Fj7e%2F0mkF325rJKLJErUbXqNlM84UsppASuYPfkYQkUBpOAs7Z2qUBCWUT5QY4dwzHG67Md118V55B0Cm0grdE2qkTmrY6BHBOFKQPsgE2%2Fz9TJRtVacVj3lK3CnA29sp0vGKEvo7%2FKIGA9dmLK0owWcBR3nBWECb8SeDN%2BErYSpCGu8W%2Be2opEq8FkDuaJ2mUUT8l1a8QYp%2FcGIQJTJx3Lfcw4bLgywY6pgF2SRg86%2BV4CBQrGsk%2FRnkQf7meOfGV3%2BD31STUd6DkKxcHwfWNyT04j%2FH1fepi4INcq49%2F5lG0owWDu6O26XVAunYd%2BS0TE856A00YWGFPeSezEoCYO7Y0i8wRdWOVZhmtcX2gKztXSqLCVzZx9m9LOhRc%2B4ypjUC%2FDzLHFYNiArekoKNz7gTAi7AA02Asol2q%2BljMAEndW8NjfsuHh4aJX4zhOmtF&X-Amz-Signature=a56a656ba40c1c81686dbb5bc413d8b671da2f4116fa197a5345fd77ca23b13b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

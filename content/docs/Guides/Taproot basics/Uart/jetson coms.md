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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CW2J67V%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBP3k9WljlFjwc4CZD3t5R6zkTDmxBaAeQ%2BDcYQHDkFAAiBkvijsgVtEVwFs5GNST5x3wXFRnEaMXHgfawI2RSwvjCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMNxH%2BZmCJg2I297qYKtwD8OzjcpvkmBXUaWpxYs6MEmvaeVuxUPM5hNYtuBsNSpDjfBN1JYbOvULpM7IzaFC7ZOlL%2FIfwn81Q3%2B%2BxUt%2BsEnmjX8rd4zZoVFBM0L33s8lIvn4zQ89Ig7fMWq0SxmxzLDrBspuiTjH5lpRntTs8XZ5VBGm1BopZt4n5WgXhMlI%2Fg%2BauDK7YX9uSYDogpF5RqGiIy35NCpODxtC5d4JtSBiy0VuHbGnL2Xc1%2B%2FSlQMSztTB%2FP5EzPS8Jl%2Bna7DRjDEB4o1c2OnbXKLpoMAI%2FQhzi6ZOBEU9fZgr1hfkeuqTxDt122a8VkW46isaFWHa6NTYrv492Q6K16owvtL76ql14WonLnajbqbdLIxMFJyyn9w3VydNb0S6F0xRptJiE407N1WM6Hb9NRP2oY9CWYz7hBP9dd2H3arbu2Rp6AgGFaXIaW9vliUiPnJXvz%2Fj4EuHQ11CE6bPrBOJ2VJ%2B89WtO1Ct81w4LeDtOzByfLfvK6iX9JJCKD6MmzJIHiSIcRg2qtiJg5RuomiT4YR3Y%2FH5OR2KNV4Jqui8xhyvKxNZD5zWJw1ergfvAj%2BkmPHONfs2HR4pDFppsq8L6x%2Fya1O7qOGhZj56pnlP6WblXPX2mRuZa7K5%2Bpup4BLYwoYnszgY6pgFOGtGf2EhQU%2Fe9pWJKYz%2BMHRqdL%2BDrViCB0j1LC2jEaVhKITB66ko8jqQuHzRXd%2BznLG7qK9t5K33J5AsiCa7NO12N2CtgTvdqCW%2FxPAzHa%2FsXOsUqJqqMjkN5MwTp3hBUJ4V3bHpMZK7ztsycgBi0biEoxchOC9l%2Fx7fQlTc1z3pPRROkZ5ixHbpKrdWrcGin8aGZJBdqooxHWi8W26DR8MzKlp4V&X-Amz-Signature=b73e82656531b1d8520ede67b2f600e8a55354f9e91858d89da4c3f57273f883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SCPR6N%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7gH4KakfDoIobzmPMkwSvmhbV3r2Ptzny7JmWcucEXAiBc%2B6Z7Jk64GDTr1vDCf7SfGfZWMvI5PXENfRDdM5PzlSr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMd6ANOGqAaI8uVMjbKtwD0ac5batm73r7CQIBuNv%2B3C9eyEebl2Q5bhumCq9DrShgz08JXxbu4A3e5EvxyxBg81G7j71e3Ols7svymGT5Y8Dp8bHDR9oEEs722qTO9BW1JoGn6DI4tCiI0xngmcrDbFQdpmzCoi2%2BQKBF9NbWnD9oCcNAc8FKe43KQ1xURQoBO3%2FTL7sfUOQjqtQ7xE0cUK2kQ%2FsN6NGPFE8jlllpbUGeAn7uRE6yQhPkfyp%2BFr2qxjDISkMEsQPUZBYmN7811f7vIxFqPj4KDQElIcekX8zNVSHsQPoCd%2BwHevT3s8UqXo%2FRnsHWQpk81c2THI%2BjtrdvqKY%2FxKOWGEwUiJutDZm288e%2BwfpiXmoaGg0EMa1%2FeGDIf9wbgquxxD6SBPZmnmqmp7XXDFueTuS0lWrSTdYCwjiwhbPB6v9%2FNIfGQuFj4AxEShxwjGLI1LzTOuaHF8BQPQSVvDcqEkN2vsvfCbGscFVST7ivPPSYWCVuwce6iD3FHlJ28aIVK4N%2Be%2BJPSH7Pz%2BW1zYdZlHV7ZhNDOTcUNQJHo0yOo6Pto%2Bh8G37XZ99sChgcBJWZNrMrIzb3Tz1ywznQZhTfgThytCJZKlni5vjSP6NPZRGS6bUgYIiUa1ezWZjqU54AQP0w%2FYbszgY6pgG9vKH9VZBOZEIESppBu7EqxgVJOGBfHv83Nx14xhKfwW%2FMcTzL%2FetJltjXPrf7uoiodTjar0oPU02eqS4CueCy3hsnW1iZ18iGaOHyYe6BuLkvWf45CAxaMXjYPDFe1FMWxK8kvSZ3rfqmXR4D5aQuBtv7EZ%2B2wd3HyVlmq7WYVfV4QL5wqcM9m22XrKIcvGQ6R%2BmXRmDPh1eo7LJ85ZQmtYmCq%2B%2B7&X-Amz-Signature=aeb1972a6b0aec488aa9d48b379015bd0791609079a23393360206f8a98e91e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ZR57BD%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3vVUwGYx%2FvxHQAZU8r3w3IPILrOttbW2wi1jTTKzjgAIhALRLlyRGpgzSpMNqd2rV%2F21N6h74S9VCrMQ1TTKqVEUVKv8DCFQQABoMNjM3NDIzMTgzODA1Igy0V0fOeyY7QpGLm84q3AOxEcx7hPn73BdVuZDM822aSPLGR4Hf1W%2B8Cf%2FOuKJ2RfwvNIMyHziIEy9szI1rAmadotsaO%2FhhkRXcjTog3CU058DURlez5vaz29sBNjbNEWtOglpmtuBmU14790A0cERctTZZAy3zh1ngXfCzXlEHRKu1ureH5YTKVWiQ6%2BTZOIU%2F8cS%2F3F0fauOkgeyA3XW0hEcnSKjU8YLelpIFVGda8bTJYbkKoSqPesBzzMfsF5IlVHx5I0HKCrqj3b8%2Fc4FACeThr3iq4z32czCh3NzhWDrtsTquk%2Bw5lRxq9XNtmgjrEQbkPHUqJAb2%2BXvlxrcRRymwA5P5TWT144HLBQCDWJdxAlFqjTNesGd9ESvVWpOtU8b5nBH3llgri6totFBqHsy4ON1mRmlSjXT%2BbJ4BlRdwyMy45%2BdksvJPaWQvBW3IvKpu%2Fk3kOwLZK0PBb4Wy06XM35G0YtP%2F4tqpxNByxwtACt6yXXi3XTFRHLlXRfNMYe7w%2BsLTXWN6VySs0HHhRrZVEgg7cQl%2FM%2Fd2ILXZfp90hDfatM1mmQvRJzEQ3TADHOsHBtDJXMEL46p3bwgAt5OXBJOyYo5hii5DgsewIHakpo1IG0nR%2FOq2EeI6lg8KJ04vVZtFg%2FNuHzChiezOBjqkATrGNDe%2F73oTXEScdMLIXcxhNumcUaLk3IjztNhX9jr%2FKAYbpTwXWX2coTIHolo7%2F5HHLk2AjTQ3744HItow%2FslSRYJhgzLrcwKN9xMAMEp4v3TBzyImgjzYNkwiRBNKoa%2Fmhg%2FO9qRshiqNGnY0dSS0anXFRLfgIQvLXBtQBUjExUt1UmsglDMHy40aC8JMtRiOIK9DL2dB1Rm2a0q%2BU3puW%2Bq6&X-Amz-Signature=c47c5784f515f9eb17c147226956bfdba9f3b005a560f3400cf08e0ecccd0340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ZR57BD%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3vVUwGYx%2FvxHQAZU8r3w3IPILrOttbW2wi1jTTKzjgAIhALRLlyRGpgzSpMNqd2rV%2F21N6h74S9VCrMQ1TTKqVEUVKv8DCFQQABoMNjM3NDIzMTgzODA1Igy0V0fOeyY7QpGLm84q3AOxEcx7hPn73BdVuZDM822aSPLGR4Hf1W%2B8Cf%2FOuKJ2RfwvNIMyHziIEy9szI1rAmadotsaO%2FhhkRXcjTog3CU058DURlez5vaz29sBNjbNEWtOglpmtuBmU14790A0cERctTZZAy3zh1ngXfCzXlEHRKu1ureH5YTKVWiQ6%2BTZOIU%2F8cS%2F3F0fauOkgeyA3XW0hEcnSKjU8YLelpIFVGda8bTJYbkKoSqPesBzzMfsF5IlVHx5I0HKCrqj3b8%2Fc4FACeThr3iq4z32czCh3NzhWDrtsTquk%2Bw5lRxq9XNtmgjrEQbkPHUqJAb2%2BXvlxrcRRymwA5P5TWT144HLBQCDWJdxAlFqjTNesGd9ESvVWpOtU8b5nBH3llgri6totFBqHsy4ON1mRmlSjXT%2BbJ4BlRdwyMy45%2BdksvJPaWQvBW3IvKpu%2Fk3kOwLZK0PBb4Wy06XM35G0YtP%2F4tqpxNByxwtACt6yXXi3XTFRHLlXRfNMYe7w%2BsLTXWN6VySs0HHhRrZVEgg7cQl%2FM%2Fd2ILXZfp90hDfatM1mmQvRJzEQ3TADHOsHBtDJXMEL46p3bwgAt5OXBJOyYo5hii5DgsewIHakpo1IG0nR%2FOq2EeI6lg8KJ04vVZtFg%2FNuHzChiezOBjqkATrGNDe%2F73oTXEScdMLIXcxhNumcUaLk3IjztNhX9jr%2FKAYbpTwXWX2coTIHolo7%2F5HHLk2AjTQ3744HItow%2FslSRYJhgzLrcwKN9xMAMEp4v3TBzyImgjzYNkwiRBNKoa%2Fmhg%2FO9qRshiqNGnY0dSS0anXFRLfgIQvLXBtQBUjExUt1UmsglDMHy40aC8JMtRiOIK9DL2dB1Rm2a0q%2BU3puW%2Bq6&X-Amz-Signature=5cad03f730f3b410dc33b9257c0da51c6d148b09a47547268a188e63b32abfdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SCPR6N%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7gH4KakfDoIobzmPMkwSvmhbV3r2Ptzny7JmWcucEXAiBc%2B6Z7Jk64GDTr1vDCf7SfGfZWMvI5PXENfRDdM5PzlSr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMd6ANOGqAaI8uVMjbKtwD0ac5batm73r7CQIBuNv%2B3C9eyEebl2Q5bhumCq9DrShgz08JXxbu4A3e5EvxyxBg81G7j71e3Ols7svymGT5Y8Dp8bHDR9oEEs722qTO9BW1JoGn6DI4tCiI0xngmcrDbFQdpmzCoi2%2BQKBF9NbWnD9oCcNAc8FKe43KQ1xURQoBO3%2FTL7sfUOQjqtQ7xE0cUK2kQ%2FsN6NGPFE8jlllpbUGeAn7uRE6yQhPkfyp%2BFr2qxjDISkMEsQPUZBYmN7811f7vIxFqPj4KDQElIcekX8zNVSHsQPoCd%2BwHevT3s8UqXo%2FRnsHWQpk81c2THI%2BjtrdvqKY%2FxKOWGEwUiJutDZm288e%2BwfpiXmoaGg0EMa1%2FeGDIf9wbgquxxD6SBPZmnmqmp7XXDFueTuS0lWrSTdYCwjiwhbPB6v9%2FNIfGQuFj4AxEShxwjGLI1LzTOuaHF8BQPQSVvDcqEkN2vsvfCbGscFVST7ivPPSYWCVuwce6iD3FHlJ28aIVK4N%2Be%2BJPSH7Pz%2BW1zYdZlHV7ZhNDOTcUNQJHo0yOo6Pto%2Bh8G37XZ99sChgcBJWZNrMrIzb3Tz1ywznQZhTfgThytCJZKlni5vjSP6NPZRGS6bUgYIiUa1ezWZjqU54AQP0w%2FYbszgY6pgG9vKH9VZBOZEIESppBu7EqxgVJOGBfHv83Nx14xhKfwW%2FMcTzL%2FetJltjXPrf7uoiodTjar0oPU02eqS4CueCy3hsnW1iZ18iGaOHyYe6BuLkvWf45CAxaMXjYPDFe1FMWxK8kvSZ3rfqmXR4D5aQuBtv7EZ%2B2wd3HyVlmq7WYVfV4QL5wqcM9m22XrKIcvGQ6R%2BmXRmDPh1eo7LJ85ZQmtYmCq%2B%2B7&X-Amz-Signature=b8fdf82bb8b5707ece8167f59214d6a96feef0417c34cb40ba2d22720ca8a0ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SCPR6N%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7gH4KakfDoIobzmPMkwSvmhbV3r2Ptzny7JmWcucEXAiBc%2B6Z7Jk64GDTr1vDCf7SfGfZWMvI5PXENfRDdM5PzlSr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMd6ANOGqAaI8uVMjbKtwD0ac5batm73r7CQIBuNv%2B3C9eyEebl2Q5bhumCq9DrShgz08JXxbu4A3e5EvxyxBg81G7j71e3Ols7svymGT5Y8Dp8bHDR9oEEs722qTO9BW1JoGn6DI4tCiI0xngmcrDbFQdpmzCoi2%2BQKBF9NbWnD9oCcNAc8FKe43KQ1xURQoBO3%2FTL7sfUOQjqtQ7xE0cUK2kQ%2FsN6NGPFE8jlllpbUGeAn7uRE6yQhPkfyp%2BFr2qxjDISkMEsQPUZBYmN7811f7vIxFqPj4KDQElIcekX8zNVSHsQPoCd%2BwHevT3s8UqXo%2FRnsHWQpk81c2THI%2BjtrdvqKY%2FxKOWGEwUiJutDZm288e%2BwfpiXmoaGg0EMa1%2FeGDIf9wbgquxxD6SBPZmnmqmp7XXDFueTuS0lWrSTdYCwjiwhbPB6v9%2FNIfGQuFj4AxEShxwjGLI1LzTOuaHF8BQPQSVvDcqEkN2vsvfCbGscFVST7ivPPSYWCVuwce6iD3FHlJ28aIVK4N%2Be%2BJPSH7Pz%2BW1zYdZlHV7ZhNDOTcUNQJHo0yOo6Pto%2Bh8G37XZ99sChgcBJWZNrMrIzb3Tz1ywznQZhTfgThytCJZKlni5vjSP6NPZRGS6bUgYIiUa1ezWZjqU54AQP0w%2FYbszgY6pgG9vKH9VZBOZEIESppBu7EqxgVJOGBfHv83Nx14xhKfwW%2FMcTzL%2FetJltjXPrf7uoiodTjar0oPU02eqS4CueCy3hsnW1iZ18iGaOHyYe6BuLkvWf45CAxaMXjYPDFe1FMWxK8kvSZ3rfqmXR4D5aQuBtv7EZ%2B2wd3HyVlmq7WYVfV4QL5wqcM9m22XrKIcvGQ6R%2BmXRmDPh1eo7LJ85ZQmtYmCq%2B%2B7&X-Amz-Signature=0e1c5ded9f36b3c9948c3d5678749fbfc9204c7b8e61cd2c3589b5265817dd88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C4W6AK2%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYN7k9VrQq9Gho%2F3XlWsZ04Muk88e%2FlIhwIvSKgIkzTAIhAPwQvCQGiiAGfW906u5FgLodxF3IOrR%2BUrzNRlPzni%2FyKv8DCFQQABoMNjM3NDIzMTgzODA1IgyUZidviyH28Eov3xIq3ANwjxnmyURvtlotDw6nRUxAffADsTSVFjEmngzbN8TTzxsWu8HqOwHDoZkwms4EjvxLaqiTa0hf8FuGrXoLMaSD2Ct5lR6mU4VfukJNAMTKpdcO8QHQdHcCaAjz6lfjS8kmcOQm39BOwyp0OOsUUMwX2dlR3iYv49j2WDgYtcdToX6rDnqsJK3ybhTsklPbSvZwLDEqUA9Jp57rBneMYqYnf46w5VZoMMODhoPnapUIXn4Qgpq%2B14sZpUKb7v6TDd58ThKlgvprtPmbiiHcJcn6E9MipMu4hgqTrH4XVQH1SdfLDgop1TESTtE5r6PG6lNC8OZ2WBw5tgDrFglGnYSfpN6%2Fnd%2BjB3SvWongEkOqmMlZ%2BizmL7U6%2FxyERKExOzmJTf4AHzbf8ktYinGDftuFBlP0qga5eClGZvT%2FC10Lbe%2Bt36QVRoNwrSDMW5%2BsDHCKbIwEA4zhzvr%2FWwTwSgMclg2%2FwLyNIodRr8ev0pjBG1RzFE5ERrsWiuRGp4ZpvIsPbJQRzYZUYeCWct6ZcZR%2BsAbBSsB4aTyDb4h1FBkKJ6WT4GxSkU5SDvKq5n%2BuQSfgK5DSbGUmg6NUwtVX7SKotuy%2BLiECLZm3W4vMn67ZSvGYGldDZaaqUgZ3oTCfiezOBjqkATYsvDyGMHSnAGCm4XgGAjUY8RfahcydyM7pUve6ACAl0VF21HBZIpn9UMYGpkq%2B2n6X0RFZoChI0tIFsISNfqMR12a3POTq3F3ZPVSGbzrv9q5eUjyeLzI0LpNP7MIVxL4w0JtJDXtadHSk%2FrlK5KhxrDTpFi6vlaUE0yTvjWF1%2FWFnIH7p46NrbbhDwK9%2B2oD6FdaFi0DG5RQ1UvZ4wflo%2FQtP&X-Amz-Signature=0465bae3784f382a6897205b875b5eb420991151489eff67ba307f61ad1348be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

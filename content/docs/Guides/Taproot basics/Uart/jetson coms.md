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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSKSB4GF%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAPNAthpyBlRiwwHtUCjzltTU1B8IWQK94nmzOgquXLAiBYKbQckF69oJdZtbZAONBzPmy%2BIqrceTwH7LicwbwJriqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM1d4VZsFJbxdraTtKtwDJfSBgk4eGi2AR0ozWsWBeSv%2F05bk9jRzlGNzmpTGQFgyQT74oCr5I7j%2FhgI9WGz3zukv91jEFijD8w6Icd5rFSbzIaIRnHtp%2FhWJRZgqf8znuiKsuQj1W3XQXDyKuPieigw9m4s8fy02XyNO1FA66ALrHf5q7CdYTrbNqs2PLMptB6ZunUsN0Pf8V6DNk3ukPdzM7A3SicY%2B64j4cOpd5yhPszja1xxppxsIhhZ52VhxBpMDbmUKSiSVOe6%2BrTUScMvXG3DAeurUzsSiMK%2FBp4LAmIJhEMxYI3KhB9pkmeYD1w%2FI01inKopynvC50U1w7YDX9h38Km54d%2F5UD%2BvV7ggvkIzmfEcVvV5EIrVutsqULXeWCKEARc0pNQPc4gmexIDCmiR%2FHB8vo2T8akaH1XZ8xdNJ9XlSuCgqGADa2XR7F4Q6C9EIL5diorpY%2FmX9%2FkjfxMPVn1VwO%2FY7wYMLxvKZXy%2Frba6zDvrM9XhjY0myBMpWxGHknk7nM%2BTKXcUjdLeuBpopPe9e0MDKn68f4k2wZnBle8%2BTXW3wKSKpGiIUSLfFjmQUYvcT3yaumjfCtkhU4lK7RP8ZBAjZ7o40aRV%2Frv8Jjs573QbJy%2FUqyva4UdU16pbLh3jM9ZMwwsiSygY6pgHfuyztbBV%2BAymvvagGjJLddLGezF3xt1aKbgWD8DDaIZBwQF5fv5ZV64kcfhwkQ7sjvmDPqr5WovEND6y9hTL2IRYr1CYS3JN725JCqlHwq4D6Mf45btZrrdfDlRn8wLs4%2BbLzdthgpOvvQ13%2BFU9N%2FyUK7SDMZGp6p0XwyaMHP22UFOTc%2FeJOL%2BCuN6%2FMWyd9k0FuHVmGQHrheULsZumJsBDqi3P0&X-Amz-Signature=295c6dc439f9096435c246f5ef45567b2470d3db97ba5997c40ae650f86d23f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJETHO4V%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqddAoS7yl216AEdN6JRjV8ca0m8op%2B1oXEKjPIBGaWwIgR0s9a%2BGZhP7fvw9nayFgSA3o0r3WsOUQQcnlKQ9tY7kqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4JU46d8ElJ663fOCrcA2szz5tJLtFvCy1%2FXM4DsvXhhknXwpnCyL7j7UOS0FklS9DEMvOtngLSsWxhGoSuw2b%2BJdHXsU2i69dmG1zOm0ACeiqQnwMsQHriSvsIgRNFw3uZBAdDxUW2Vf5DW6HNwQuMc9iTTE5OMVSSBgX2vd8V4iYIBQY7e15wZmeK5C3NBNgS7Ks11TwLn5GAgEYn74rCQhsHgnc1EUmwJh5s3tHiS8mlYxKTfemommfxpb3w0daIJqDUOc0wiuCVhQKE1r0hsiNDBmI52ZxBQmFTi2HGNrfY1D%2BQSnENAQkMHN7mgBdN1i1xEXlhD8XfwTvrkL6NC2dKDiwxmtPMAa4uWsGfFwo71quGqlPVDKCDdNmjuIIyVsFLL%2FWvz%2BGeyp6gdmuc2pKCCl9ZV4o3weP2t9s5BtnhbKO8BARH4ULIC8KRxNJzDdFxXI6lqPY9SCytbSnZUDZ12mlza02y8R7WOyeTwjkxz48wdGUITvSnFf%2BPUKzmPwM7RY%2BkhwKV4hscX5Mbm2yx2wJlXKKaKSUrVW0Pa4lNnOeyMAurbjwEs5GfP51StdlFtPYUqGU1fNa2L3qtGtpOJcblHgZnDzXG%2BkTut7Vqpbdu1iUNLuBzmB2byruIih61oAxcVPxAMIHHksoGOqUB8PppgwTlbe38D0MYsp7eWFA3eFntDtNCP7YkAYKK2tZsiThf4P7gjjD7laM3g1TN74RrKT6gKqV45CoEF%2FrXPRdNkVTH1%2BllXXwG2gi68t8Chumy7H0nQrqUhPkO0%2Bty0FV8KAgEy1%2F3Wj%2FbM9Rxwk%2FjHwtnbNNAFx%2B74XCcdwemfOM0YDgtriOsXy3wpeNdvWNcF%2FGM%2FD7PFADivt553%2FYeyfKN&X-Amz-Signature=9d3234dfa1447fbbc3870b927cc0235f7c821c309e49c20e180cca08587da597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWYA2RMP%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIUqwpOwiQZl%2B3dpY2JwSOFjyYEoMS3IOCSFOTG4HrIwIhAMI%2BSp76GVpSHXx%2B3ei%2BDT8rkTDYX%2BfEDzykaAHx%2B8xpKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQRA%2FmNtnmuo9v3GEq3ANMU6rvah4IT3C0A6A0YHb74KwAzy2yFnw8mxdqq%2FnEU2PeddS2sty5z%2BpT7jJLKwA3u2KVNiHDbWb7h2kaZZglwmeYqK4lwz%2Boo3dRF4cWBKGtYgZq28E%2FYPWGR%2BfhC%2BDfr%2BMGVNtw89BUjKBYSDv0AVciHQyGE2euCy1zr%2F9xy17%2BzYNXSvNlO4hp3dlsxdxHNjT33hLo6CpSuAUSBH0vZSZP%2FTqoBXYWg6GANpqHX9nII1VJZTKkw%2ByQEApud9JnO0TbUXgtPsKuPqzzBVrkEAnXKj55x4aUP5gv%2BzJN3y5aDVH6FAyHFlq6LD9OIUjE%2BaNqynF%2FeI5zVaWccXEI9KuISRaYGGOI%2BEDJsDpzMwEPn553I7BC1VyfgvxCgV3bolGSdsHBNnl80EfLX9iYmzxdFV1y94mBsZXwFoPX0icGTHL24Ikzd6P%2FyBidTW1mE7JUvE1985VUCRn71kLXYhblwpwW8flvcH6%2FzaJqUcWm%2ByprZjYuvraSnwOyIK%2BgKvOeXhM2fKWFLz6SEMRwyRpsQF3nqUG7zskugHiCOgWFmD%2Fv7GdJFh12fNr51789XrjudR1clmCVdoROG1sCWTiZT3nMSQJrV0ZQiJOZjztK47HQnuT0vO3JwjD%2FxpLKBjqkAfHle4TajL3E1%2FT2tZ%2FrCHUNXCiSi82627X1XanD5m1QNl%2FE7lqtmAryDtPjdtP5NEo9tOonJMSQK55AYR%2FlLzPFTdU64sp50VOvUTXYiDPwPPRw%2Bs8jwsEi%2FIsSp2mmAPxqozDZB4aQXHW1QWjKLLy%2F7NYSsdZoQiDqqRQSQ5nNHpao5ZN88Cy2ccSJ1tKvZwjqOA66FD8ivvfURkH2fh%2FmSlL9&X-Amz-Signature=ae13debc22c5ec9ea04af9bdf3fda80108ca3400d73bcf6be5eb1ad388d22aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWYA2RMP%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIUqwpOwiQZl%2B3dpY2JwSOFjyYEoMS3IOCSFOTG4HrIwIhAMI%2BSp76GVpSHXx%2B3ei%2BDT8rkTDYX%2BfEDzykaAHx%2B8xpKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQRA%2FmNtnmuo9v3GEq3ANMU6rvah4IT3C0A6A0YHb74KwAzy2yFnw8mxdqq%2FnEU2PeddS2sty5z%2BpT7jJLKwA3u2KVNiHDbWb7h2kaZZglwmeYqK4lwz%2Boo3dRF4cWBKGtYgZq28E%2FYPWGR%2BfhC%2BDfr%2BMGVNtw89BUjKBYSDv0AVciHQyGE2euCy1zr%2F9xy17%2BzYNXSvNlO4hp3dlsxdxHNjT33hLo6CpSuAUSBH0vZSZP%2FTqoBXYWg6GANpqHX9nII1VJZTKkw%2ByQEApud9JnO0TbUXgtPsKuPqzzBVrkEAnXKj55x4aUP5gv%2BzJN3y5aDVH6FAyHFlq6LD9OIUjE%2BaNqynF%2FeI5zVaWccXEI9KuISRaYGGOI%2BEDJsDpzMwEPn553I7BC1VyfgvxCgV3bolGSdsHBNnl80EfLX9iYmzxdFV1y94mBsZXwFoPX0icGTHL24Ikzd6P%2FyBidTW1mE7JUvE1985VUCRn71kLXYhblwpwW8flvcH6%2FzaJqUcWm%2ByprZjYuvraSnwOyIK%2BgKvOeXhM2fKWFLz6SEMRwyRpsQF3nqUG7zskugHiCOgWFmD%2Fv7GdJFh12fNr51789XrjudR1clmCVdoROG1sCWTiZT3nMSQJrV0ZQiJOZjztK47HQnuT0vO3JwjD%2FxpLKBjqkAfHle4TajL3E1%2FT2tZ%2FrCHUNXCiSi82627X1XanD5m1QNl%2FE7lqtmAryDtPjdtP5NEo9tOonJMSQK55AYR%2FlLzPFTdU64sp50VOvUTXYiDPwPPRw%2Bs8jwsEi%2FIsSp2mmAPxqozDZB4aQXHW1QWjKLLy%2F7NYSsdZoQiDqqRQSQ5nNHpao5ZN88Cy2ccSJ1tKvZwjqOA66FD8ivvfURkH2fh%2FmSlL9&X-Amz-Signature=40f2ab025cd023b7096823aedf369e5d10cd5f88341f09ac6d87949b7b05e4b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJETHO4V%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqddAoS7yl216AEdN6JRjV8ca0m8op%2B1oXEKjPIBGaWwIgR0s9a%2BGZhP7fvw9nayFgSA3o0r3WsOUQQcnlKQ9tY7kqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4JU46d8ElJ663fOCrcA2szz5tJLtFvCy1%2FXM4DsvXhhknXwpnCyL7j7UOS0FklS9DEMvOtngLSsWxhGoSuw2b%2BJdHXsU2i69dmG1zOm0ACeiqQnwMsQHriSvsIgRNFw3uZBAdDxUW2Vf5DW6HNwQuMc9iTTE5OMVSSBgX2vd8V4iYIBQY7e15wZmeK5C3NBNgS7Ks11TwLn5GAgEYn74rCQhsHgnc1EUmwJh5s3tHiS8mlYxKTfemommfxpb3w0daIJqDUOc0wiuCVhQKE1r0hsiNDBmI52ZxBQmFTi2HGNrfY1D%2BQSnENAQkMHN7mgBdN1i1xEXlhD8XfwTvrkL6NC2dKDiwxmtPMAa4uWsGfFwo71quGqlPVDKCDdNmjuIIyVsFLL%2FWvz%2BGeyp6gdmuc2pKCCl9ZV4o3weP2t9s5BtnhbKO8BARH4ULIC8KRxNJzDdFxXI6lqPY9SCytbSnZUDZ12mlza02y8R7WOyeTwjkxz48wdGUITvSnFf%2BPUKzmPwM7RY%2BkhwKV4hscX5Mbm2yx2wJlXKKaKSUrVW0Pa4lNnOeyMAurbjwEs5GfP51StdlFtPYUqGU1fNa2L3qtGtpOJcblHgZnDzXG%2BkTut7Vqpbdu1iUNLuBzmB2byruIih61oAxcVPxAMIHHksoGOqUB8PppgwTlbe38D0MYsp7eWFA3eFntDtNCP7YkAYKK2tZsiThf4P7gjjD7laM3g1TN74RrKT6gKqV45CoEF%2FrXPRdNkVTH1%2BllXXwG2gi68t8Chumy7H0nQrqUhPkO0%2Bty0FV8KAgEy1%2F3Wj%2FbM9Rxwk%2FjHwtnbNNAFx%2B74XCcdwemfOM0YDgtriOsXy3wpeNdvWNcF%2FGM%2FD7PFADivt553%2FYeyfKN&X-Amz-Signature=8288afb0df95330cff97b66932c2bb0e10586970cff22e12711fa0f527f3b8d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJETHO4V%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqddAoS7yl216AEdN6JRjV8ca0m8op%2B1oXEKjPIBGaWwIgR0s9a%2BGZhP7fvw9nayFgSA3o0r3WsOUQQcnlKQ9tY7kqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4JU46d8ElJ663fOCrcA2szz5tJLtFvCy1%2FXM4DsvXhhknXwpnCyL7j7UOS0FklS9DEMvOtngLSsWxhGoSuw2b%2BJdHXsU2i69dmG1zOm0ACeiqQnwMsQHriSvsIgRNFw3uZBAdDxUW2Vf5DW6HNwQuMc9iTTE5OMVSSBgX2vd8V4iYIBQY7e15wZmeK5C3NBNgS7Ks11TwLn5GAgEYn74rCQhsHgnc1EUmwJh5s3tHiS8mlYxKTfemommfxpb3w0daIJqDUOc0wiuCVhQKE1r0hsiNDBmI52ZxBQmFTi2HGNrfY1D%2BQSnENAQkMHN7mgBdN1i1xEXlhD8XfwTvrkL6NC2dKDiwxmtPMAa4uWsGfFwo71quGqlPVDKCDdNmjuIIyVsFLL%2FWvz%2BGeyp6gdmuc2pKCCl9ZV4o3weP2t9s5BtnhbKO8BARH4ULIC8KRxNJzDdFxXI6lqPY9SCytbSnZUDZ12mlza02y8R7WOyeTwjkxz48wdGUITvSnFf%2BPUKzmPwM7RY%2BkhwKV4hscX5Mbm2yx2wJlXKKaKSUrVW0Pa4lNnOeyMAurbjwEs5GfP51StdlFtPYUqGU1fNa2L3qtGtpOJcblHgZnDzXG%2BkTut7Vqpbdu1iUNLuBzmB2byruIih61oAxcVPxAMIHHksoGOqUB8PppgwTlbe38D0MYsp7eWFA3eFntDtNCP7YkAYKK2tZsiThf4P7gjjD7laM3g1TN74RrKT6gKqV45CoEF%2FrXPRdNkVTH1%2BllXXwG2gi68t8Chumy7H0nQrqUhPkO0%2Bty0FV8KAgEy1%2F3Wj%2FbM9Rxwk%2FjHwtnbNNAFx%2B74XCcdwemfOM0YDgtriOsXy3wpeNdvWNcF%2FGM%2FD7PFADivt553%2FYeyfKN&X-Amz-Signature=c47de32ee924b1ad3958baa3287c1fa62efd312a43a61d37cbfc709cc6fad482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466623VJIWE%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2M7SYV%2BNojAnerMf3QMRJJOO26FX6dZdyvT05rSMn8QIhAPpq9Rh8320dQ466evdUk8fYRwBPXWdDeNlw547O%2BUdsKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoU8GWzM8PvxI%2F8mMq3AMnemmp5JTM59%2FCEfBXNRGzmK6YZ8OwJ42YusdMC323UjptXfuGtpEQGZb%2BRA5h5zqqHb5kowMMZ3etjCgrVRSfUvp2n4VM%2BhhgDNrMAazF8NQh7hOEY52RBh8bJhE0zqSIkR0EsYSKEenug4Yhk3Ubxz6xd0SllEsvAJ2e3ngEnCrB8uejNo7FqsquFfYA2B55qFU5x8eIN%2BSt8%2B%2Bntn7IQVYG%2F7kjnj9Wr1LjhALFKVRYjDqkKPIRwryvIsdLPc6u6uozVh6ma6yMyTYqjaAxaSUaaEo4oDz76KvV%2BAcRaHewnBLzsVgG6yfqTTSAE2GJZTLDRbJotozsiyCPePw9QGnQloTpqjJbWb29xWGqkGWPC9JEYGX%2F9hXqtO66srVm6dmZYhAvFh7svc22BbqBdGmSGaWTw9zfsTuIDpWnwy9dRGe7Ax2sdcZNH2ys6kT%2FztUJgx%2BXKNoLnX5w40Zdd4NrIjM5hAKA0OT4B7TCUC6ND3q2nARW7kWd5CflI4ymZ3JOuNK9TIarKMIkHlrGK28PRc3zxa83IFbL%2FQlcnoLmn5rnq2ZETMWc4RrK%2BJxwo5BPun1KzjiwFL9oP24nH7uxlnL9wogmMiB6ysuNwaWI1oMf0Nhm0kbPfDDQx5LKBjqkAU8dvoxkFKsQTnHKLDarcn9ZBSlRh0mKV9Zq6QQ2cuRH%2FVrgq%2FNVIiOYOf4QvkmRjrcRadlRTTUqNTcdmc1yNGUWBpmxQt5gMOz8y7AAmSVVr7GO3XfAeqvVm9bcG5asiDbauYC%2Bf2rBmrAdYkNArkGNj9BhwHqEF4B74dWmCWcjOdQ6EAVUAPohv8AuOnNibpBQNtT%2F2JzesRRQikv0GJXcFprB&X-Amz-Signature=85131948d4793f6cff4653a953c83ec13d5ba2a727569c42cd29e039a0d29531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

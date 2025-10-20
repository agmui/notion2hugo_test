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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PHI6BD5%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFipgmkCHl%2FI0c8XZIhU5IkCvpVy8qUweg3wm9Z%2Fbc3RAiAoQuA0kxJvcbMuYKrRDEiY2uiln0gVff6U3cTjZDC0iSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUp5RQoITJJwPVJ9SKtwDt92du%2Bf8YLcEBOnHf0zs8Fu9ZhdOrEa38ssZbnsPEbRIrtWB%2FJeMMDJcS7ltQKoMhj9k%2Fs0xeOC1lk5%2BnVHnmNvHNM15qgrAOatJQqe%2FHGyJID5GPpw2PeCfOioajCtb%2FvP%2BKFM39ZmqHNFZ00RQkwqyC%2BkoGlkkRYNmBzHJvN%2FoYLrUaa9LfMNXzbt7lbKTTdDEapfL9w35RZ2G%2FM5%2FlpWnINsOsRHnpvD5sdPIqXzOsBTsdDguopPFt2jyhzG3ZbwoeY3FzrIHTrKjMM4%2FXoSTdyrELdQCnyFORHMTrrasxWfQ1X0gkhkyTiTzc5Ke8r2Wm4DNsxy7ztQzfnsqD8AN7CuO15tyhgtvG6vWfxlgAilhoLBxwAAYDYXfenizxDHrSXeP%2BT8G6XFOllaP%2FDspyWHfEHifvj8WAvwjugxJtdnBmwKtMHhy68WdKkg%2FAqT%2Fgi70lTc7XT0rlLhqGeAhPEDXuF1yLHL3nZuIKqQTeaeCacgdli7dumrVmn%2BxQcVjHMx8AgnnGLTVhobBUZIajn1Y8QDtZdflVITndK0SqhntxzRFhR2Tzmr7dh8q8XZnFHw1v6bdATuOFmK2eGReubNPhCCE5Z63YvsfGT%2B78hnMkDOzYZopFbgwoo3WxwY6pgEdBNl3fyDjz5KvICu1i%2BeITsrnLPRssjL3%2BCFpYsfjdbeur4UpTYeUbAdyKQFiHNVU6wc3uHilvIdg6tNSB%2B4kHb9sEyF3glDIKaUTZX6H%2Fe2fdVt0%2Bs0DnWGvW7QUJwDSg60GRHO9qoXKkbNOf1XEkYucGORIOStt10sAU3jFuD19%2FrvN%2F0OnRVHZOKY%2FgUI38vt7GBvEptPmX58NgqjmSnAQ2dX%2B&X-Amz-Signature=8a2b7b8fbd50fc12753643cff02db9f9537db6c90cae54b370ccf73152c7a7f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHHM2DOI%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBcBdz21XSNc0JqlULUlJbzbBx7Pq3kKcLYQgGrl61GJAiAglg5RGMPxzu2VhHxSdetmo8qAskEGFGZpIhnSEoqXfSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHpMwAjxdM8685OelKtwDmPJ0tlBPhuRM3tVNThFhxBFp%2F04Q0uTMrtsJzzZJb4J8%2BN89h4X0K%2Fuss6h0MxOtGjTggLUxjByozQtIV3K%2FmN3UkWpqVgYZrqUddUzIH5dlBELo3Cf9Bg0U8%2BKkIKn3PjBzAzpIKrnW57t7y9FO792uVfwDr%2F6kdKwutwnvjI74NT1AE0SGTmIeigDOAhTqP%2F7DAPvk1lGCuazn1IQ5A8P1ftm44sLpAbfWShS8qvxodiN0P%2FWnorH4DKdnUVVRXVh71vntrcBCAprfKK0o%2BYLJlLCyNN0usEW2%2F0NgdRV7QSqWa02DUfcPYvn%2B7jRYNuPYsYJNDopG8SsHk2LdYydq9wqGlofeQX413bYiysnjrc4hpWlvYPEQz%2B35Fk54I8YfmPKobkRf415R0DwAvZdXthP9YEYfWG1sp2zwy5dBYO3AQQ2V3AKQ72mdV3HZo%2F5uGvJvCOeWl7TBaCx4xe8HwRtMnNbeja8qdDzevXM5LFOfZC1YjxQqO2fKFDYHrRpfEBjPrWyl59tZ2XIOB%2BQjlgsoq5ENxx%2B0yEUdg5zpyxdu4yYlS7BAaSM6%2FML2DobxhF0GJVgS58FSUyvyQQ%2BzJbVR9zu7BnAds%2FeFCTFKpwn7pijSmxRyAeEws4%2FWxwY6pgHI%2FRMSTxqk7RZp%2F5OrcL3WXaUPpl%2FPHSKqKfuCv6zZzEjuxYOiQfxAkH5dGEVBIddtcuz4JyEKo6RJlBxhFwSJoUv4hPBkrvjL9AcoMfcVy7OIK8WTAJzNvbNtG7Q7TZKYt6d8IFMT18q3%2B0%2BTaskEo21OLVz7Uja4slAhkOJHjmJT5VZOtnOuRVp9VUHoLrvuCF2%2FzlAOrBFuJMRsvD66ED1IYbOq&X-Amz-Signature=cd9d63a000429f41cc9ae0334a51277164c7405b87d0ebbb847bc10efa4cd48e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QLDFFM2%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIDnUgXtwr9TU%2FCg%2FHN%2FTiyDBR%2B08hv0BY12Kggy0i8ckAiEA3eP2orjhKy7szcJAy1YYRd23%2FgXrjlzzZyonheiWqI8qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPoCUrCw%2FSl8VbKQyrcA1i1ur%2BDZDDTKnrJXA8SyBBbA20bJtVMNH3dpLV9mF7bo%2BbKgUsru2h87e%2Fgm3A3Fw4GV1XGvyXIFa8BH2K6yzFKLK9oOvAbuRNd%2BzJrpEMHpy8jc1N4X8zTbaydF58x4I34Y0vvFHSM2CErNmiUjEoLytmUDYW5VHs4OB6Kw5AVPN0BRQn9QVmh5Y6ENu4tP6wjc8GtjkbutUjm9KSmThUqXGTseE2IeDhrCkTwOgLlrajDAa1mTjfk%2BUB1jf7sHi9E%2ByZ7NSPd7CKSVeQmMkiKDsTQYgynEUF7Siba4HfSbIE90gkDRMPnh6vgtWw2DGjzEkSktLXIRMu9ApzWXOtpc%2BvuznXNHI85gqzui%2BDUMQrkd8nCiHw0B1c1ibuBsLZa6oBapUy%2Bn5CqVsJNhJlwxBpnmGqAoV1TfiN5fAQ2rd0fB3yhh9mjUZMG7yVKuHtLYkZMTZy4cIZjwp0peQEunNZfo9H9q8BCafmU%2BL3%2BuyMsoNY0s3nTpVsG69EDgW%2F1E6lPgv0PxYaqE5N%2FcCRSZed%2FL9nh1STYsq9JrhBMXnae5ST8RAVCkNuiZ5HjY0mWCYwiGiolyofnX97qJWYfKiQZZA%2BO17CW50w6U9gxJv6iVENoEOZLeAMsMN751ccGOqUByHejOFbQhtlMYWU0ILoZ84mDfM4BYgOGOFlVsCN6G3s6hw5AyG8BK4KPfK276klXxP22Xlt61UxvE92HschIWYxV9FzX8qeGFUFpTu6I2iACdouDbUwYTmXFjBJm2%2FYNEqGcFsgiVIgBJkxL5KZeHOFSrx5OXYrY%2FAimeDGVRo%2F%2FngV5ab4bs%2FyDwBlW0Bm1RjoZ%2BiVGCS0j2vfxZx8vtiPk2xev&X-Amz-Signature=63ba06a2cafe6ec5e7204c41cd1cf1a82c4f5e6efaf178d3d82ff7a65a88d254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QLDFFM2%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIDnUgXtwr9TU%2FCg%2FHN%2FTiyDBR%2B08hv0BY12Kggy0i8ckAiEA3eP2orjhKy7szcJAy1YYRd23%2FgXrjlzzZyonheiWqI8qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPoCUrCw%2FSl8VbKQyrcA1i1ur%2BDZDDTKnrJXA8SyBBbA20bJtVMNH3dpLV9mF7bo%2BbKgUsru2h87e%2Fgm3A3Fw4GV1XGvyXIFa8BH2K6yzFKLK9oOvAbuRNd%2BzJrpEMHpy8jc1N4X8zTbaydF58x4I34Y0vvFHSM2CErNmiUjEoLytmUDYW5VHs4OB6Kw5AVPN0BRQn9QVmh5Y6ENu4tP6wjc8GtjkbutUjm9KSmThUqXGTseE2IeDhrCkTwOgLlrajDAa1mTjfk%2BUB1jf7sHi9E%2ByZ7NSPd7CKSVeQmMkiKDsTQYgynEUF7Siba4HfSbIE90gkDRMPnh6vgtWw2DGjzEkSktLXIRMu9ApzWXOtpc%2BvuznXNHI85gqzui%2BDUMQrkd8nCiHw0B1c1ibuBsLZa6oBapUy%2Bn5CqVsJNhJlwxBpnmGqAoV1TfiN5fAQ2rd0fB3yhh9mjUZMG7yVKuHtLYkZMTZy4cIZjwp0peQEunNZfo9H9q8BCafmU%2BL3%2BuyMsoNY0s3nTpVsG69EDgW%2F1E6lPgv0PxYaqE5N%2FcCRSZed%2FL9nh1STYsq9JrhBMXnae5ST8RAVCkNuiZ5HjY0mWCYwiGiolyofnX97qJWYfKiQZZA%2BO17CW50w6U9gxJv6iVENoEOZLeAMsMN751ccGOqUByHejOFbQhtlMYWU0ILoZ84mDfM4BYgOGOFlVsCN6G3s6hw5AyG8BK4KPfK276klXxP22Xlt61UxvE92HschIWYxV9FzX8qeGFUFpTu6I2iACdouDbUwYTmXFjBJm2%2FYNEqGcFsgiVIgBJkxL5KZeHOFSrx5OXYrY%2FAimeDGVRo%2F%2FngV5ab4bs%2FyDwBlW0Bm1RjoZ%2BiVGCS0j2vfxZx8vtiPk2xev&X-Amz-Signature=1510d1e299d8c66bbefcaaee09b212a63ad07d49102885e1072bdfd06db046ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHHM2DOI%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBcBdz21XSNc0JqlULUlJbzbBx7Pq3kKcLYQgGrl61GJAiAglg5RGMPxzu2VhHxSdetmo8qAskEGFGZpIhnSEoqXfSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHpMwAjxdM8685OelKtwDmPJ0tlBPhuRM3tVNThFhxBFp%2F04Q0uTMrtsJzzZJb4J8%2BN89h4X0K%2Fuss6h0MxOtGjTggLUxjByozQtIV3K%2FmN3UkWpqVgYZrqUddUzIH5dlBELo3Cf9Bg0U8%2BKkIKn3PjBzAzpIKrnW57t7y9FO792uVfwDr%2F6kdKwutwnvjI74NT1AE0SGTmIeigDOAhTqP%2F7DAPvk1lGCuazn1IQ5A8P1ftm44sLpAbfWShS8qvxodiN0P%2FWnorH4DKdnUVVRXVh71vntrcBCAprfKK0o%2BYLJlLCyNN0usEW2%2F0NgdRV7QSqWa02DUfcPYvn%2B7jRYNuPYsYJNDopG8SsHk2LdYydq9wqGlofeQX413bYiysnjrc4hpWlvYPEQz%2B35Fk54I8YfmPKobkRf415R0DwAvZdXthP9YEYfWG1sp2zwy5dBYO3AQQ2V3AKQ72mdV3HZo%2F5uGvJvCOeWl7TBaCx4xe8HwRtMnNbeja8qdDzevXM5LFOfZC1YjxQqO2fKFDYHrRpfEBjPrWyl59tZ2XIOB%2BQjlgsoq5ENxx%2B0yEUdg5zpyxdu4yYlS7BAaSM6%2FML2DobxhF0GJVgS58FSUyvyQQ%2BzJbVR9zu7BnAds%2FeFCTFKpwn7pijSmxRyAeEws4%2FWxwY6pgHI%2FRMSTxqk7RZp%2F5OrcL3WXaUPpl%2FPHSKqKfuCv6zZzEjuxYOiQfxAkH5dGEVBIddtcuz4JyEKo6RJlBxhFwSJoUv4hPBkrvjL9AcoMfcVy7OIK8WTAJzNvbNtG7Q7TZKYt6d8IFMT18q3%2B0%2BTaskEo21OLVz7Uja4slAhkOJHjmJT5VZOtnOuRVp9VUHoLrvuCF2%2FzlAOrBFuJMRsvD66ED1IYbOq&X-Amz-Signature=423b321217087ea232a151a9d81815d71c15dbeff2c8370ecb3a083f759755e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHHM2DOI%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBcBdz21XSNc0JqlULUlJbzbBx7Pq3kKcLYQgGrl61GJAiAglg5RGMPxzu2VhHxSdetmo8qAskEGFGZpIhnSEoqXfSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHpMwAjxdM8685OelKtwDmPJ0tlBPhuRM3tVNThFhxBFp%2F04Q0uTMrtsJzzZJb4J8%2BN89h4X0K%2Fuss6h0MxOtGjTggLUxjByozQtIV3K%2FmN3UkWpqVgYZrqUddUzIH5dlBELo3Cf9Bg0U8%2BKkIKn3PjBzAzpIKrnW57t7y9FO792uVfwDr%2F6kdKwutwnvjI74NT1AE0SGTmIeigDOAhTqP%2F7DAPvk1lGCuazn1IQ5A8P1ftm44sLpAbfWShS8qvxodiN0P%2FWnorH4DKdnUVVRXVh71vntrcBCAprfKK0o%2BYLJlLCyNN0usEW2%2F0NgdRV7QSqWa02DUfcPYvn%2B7jRYNuPYsYJNDopG8SsHk2LdYydq9wqGlofeQX413bYiysnjrc4hpWlvYPEQz%2B35Fk54I8YfmPKobkRf415R0DwAvZdXthP9YEYfWG1sp2zwy5dBYO3AQQ2V3AKQ72mdV3HZo%2F5uGvJvCOeWl7TBaCx4xe8HwRtMnNbeja8qdDzevXM5LFOfZC1YjxQqO2fKFDYHrRpfEBjPrWyl59tZ2XIOB%2BQjlgsoq5ENxx%2B0yEUdg5zpyxdu4yYlS7BAaSM6%2FML2DobxhF0GJVgS58FSUyvyQQ%2BzJbVR9zu7BnAds%2FeFCTFKpwn7pijSmxRyAeEws4%2FWxwY6pgHI%2FRMSTxqk7RZp%2F5OrcL3WXaUPpl%2FPHSKqKfuCv6zZzEjuxYOiQfxAkH5dGEVBIddtcuz4JyEKo6RJlBxhFwSJoUv4hPBkrvjL9AcoMfcVy7OIK8WTAJzNvbNtG7Q7TZKYt6d8IFMT18q3%2B0%2BTaskEo21OLVz7Uja4slAhkOJHjmJT5VZOtnOuRVp9VUHoLrvuCF2%2FzlAOrBFuJMRsvD66ED1IYbOq&X-Amz-Signature=57d0de19cb63733be4c7325204d10123caed6bd4e555a78522af41d14329f104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIPPMXQY%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCHP3pe0K8W%2Ba3rSCdbzb0hPP8ug3CXSVTR91Gnpse76AIhANHzlSgA1M79lSHZAR9zGvBqoz%2BLWaszovrAlxsltbKhKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9AY%2Fp2f1QDvKsaF0q3APj9hDpQnkIyx3GPSe46bAy6w9UvmuZQBINb8nz1npKf%2BIuha07O1VlXsoi4KCVJAh33m3k4Hv08p7cZLKT4t9iDyy3BQfSE7XtAMKVH1AMt1zz1SXPXxx9jbHdoRuafCDzcH7eCwqlpe7akJf6DQaX%2Fa1mxtA8K6GF9fMYohZZZPCBJJPtazMiu%2FDxE8I9xxpUuMDCwFrsaYOzm%2Fev3%2FcZfxlf%2FXsYk7nU%2F7v5PE2kOPyHqC%2BIq9KEfCEtlSsuEgzZfzzbo1AYUOp6J37W1CUV54QOKcg7AzRldst1MpvsEZMGox2vi4TfdTKcf4zz1JZbg78AHbac6DPoHvtggcokzIw24EMDnHb9UXAKGJG11mtvEwivJM0ARim7gp7sHKi4w8w%2BNVSSh3xJoUN0zeIEMxpgv4YiHUXCVRhjcYEHqx07%2BpznKIjA9F4vfsLXNNj4tn2GTCglaJhBBY0jdV%2BDsmY5uncc4riKvFHjYi6sFu7qHvGCW5cXx%2Fytm%2FV%2BOnJktMfKcR9OrrbjBuo4xz4QZGj4V9q7eDFMiS3iClHTpv7cISsRrna9%2BjH5uB3TumSJ%2Bl%2BKgBbUb03Wv7iibxCGScCA1zckW3KVAxJ1WenWf%2BK6zQIVWNsF9JCogDCKjtbHBjqkAfO0WzXmYC1BuWKhO5jaHM8vjeU1OXKASP3KRrNnshSp2MyXvuJYy35fEbGhCA54GYf%2BmEgkGt72VZMUxWNifiTzNVdJLVcPzYqJHHIUvBSc1d8DKDCBYaIcpUSw%2BeJG3Du%2FaKZ%2BJ7ufv%2BpMej1K00G5XdHYe%2F%2FcO0hY36SZ7XvM09NTjKj2UOsJ1B4V1%2BJN3I2Dxi4qwfFa62%2FVG2dFTW8dEeW1&X-Amz-Signature=6970a6bfcfbc54d09b4796d09dd265d04c9ed97f9a5e33420148f2a768f48ec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

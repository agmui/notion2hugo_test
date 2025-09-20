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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT5GOIDW%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFz6aYSnyq4UJ9nnaA8V%2FtpHTRPiT%2BA93PnMtdnwbDNdAiEA3JRFzV2QVwJooxnwh6DDBsXCk2ZYo6W6wdeLNz7u5EcqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBH2SslsT2JxYpq3%2FyrcA7a0XSZayY6QyomsTqtYv6%2FfOOBVb67%2FFsbX8kFpYbvT8hbJzqzzdENWgevIjdvnRI1dOTU%2F6HBDdmI4OEsGc26c0vbBocW56UiEdsHr95dzl3ihhfJ1bdS8Xqtz6Zmtq68JrU%2Bz4vliBSi6QA%2FtxJ%2FcSlBzIYztcM5gIXSoLS7GFbm0Du1YP8hdB%2Fx9FzlbLeDTWV49Rgfwq6nFl5m06R2PIWcg%2Fiy%2Fo3VqZ%2BA1YBhqmmG9ZcztNcjI0BspQklbjoJ3QoMLn1IEBJ9U5K95DVz7eyt%2FIgSlkG1e4iPNcnH5Qwo7x%2F0A72Xxg5lomBsu8aRtH6GYNRH%2BBznboEPCwSpg%2FONZYt6ffwsbnF0zdKytNFE5ADXVDXcI9AMBLOgkyOXHDXdU6%2B1Y8C%2FOLJRUof6rWFlWO4cernq44YJHIFnlr18ERXsPN7udzTNAM1FIBOuSEX5ciOhZjoTKRJGnIIjLHPY%2Bq5stszHgqZ4%2FhXx3k0j3rJrFQKRgmLX5ii%2BhK1%2BOmENqS7yOUzSbtak9RpN6cUS67Mj5Djmq9CHP3y0WSTZXRR4BgNqhq%2BSelHm3akbLAn2%2BOLPNsCJkgutjJiqELVnyewMdZUI7X%2B3%2Bh%2B6oZP8qBppcbJwFYKAqMKeAuMYGOqUB%2FM6yWzx%2FmBr0tKipvHsvjI%2BTSsZk375ErE3eA1Q5E0wwT5%2FOisvwuJiBviThL6JaX%2BfN8NVNoEIdFOuE4j6sow7xvOtdgog0vsVb3jK%2BKZjPD5MYvmUIsrC10FSoMSi2MO4ULusDKjTV2oVrdFPgabEZ3z4cg%2FrOveGNnKMAg4VeulYiXsoXZG0%2Fw%2BKGqqxhRnglHUg%2FNCaOsPKhR6QAnXrE1cLj&X-Amz-Signature=cd7cf64c764b5ac42f581d24107ea43218bdb8afd66d4f67a7a4e35a5f3a96d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TQXDAIB%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAKiR%2FSgmVuFb24%2BHS%2FR%2FIb3rzl83zKblO6V0mY%2F%2FgAeAiEAhVzL0zBhSWkGjVOA6ITM%2FQ8dDJlQsrYOmnbgz83eGD4qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGW3gVms3crUe9Qn3CrcAxSuzZPugTSFCKr97tFWDFkhJ%2FmUJjOL9Tfe24oa4F5gVh5E%2BB58V4IiiZakcq1RJjsTmlygYeNw9tYVYr8qArChj%2B8dYXsvoW%2F52mdNisgaEkHcVak3iL9j51%2B%2BdvKgEtFuvr%2BnakQ589lDSYqANZ%2BiPdkrvffubzbhl6hX9p3lW%2Bx71lsalFVQJu3ApKklluxmW4Gpso0Vx4FAEtCnNcxfxAgcbLDMboealkDksL%2FJAwkMRAZb1N9duFth8j1JiM%2B7nMcPikbEtolZP2MrJPFxvZ9l%2BuTf%2BMDk4WlubpVzGhLqXdcvVkrCHTjeXZEYPN%2F4K%2FDLLCES1BJYmj0kYq%2B75GrJQkVY%2FMIK8s9FGeWWAfpOyp9SqU3SJPvX7iNwhsphWl9snpZCUmREYlNRFQsTN0bXV9QjL%2BHoFE%2F0tG9dMX37mu5Wlwmz7HHbwx%2BRTTe1FxiHF3Lve1mdSneh0KE6zmV0kWWGbyOR5RkBPUm141QgRGAIkoUwj%2BN1Ytv2GuupzjPkGRDMaeEB8EuMDZa%2BGMKHc%2BS8UisUHsWR7AhqWuk8%2FQZdZS%2Bh%2Fg%2F1NIY9xtmt5C393RnlUje5Nt2iPSjB7BLOSWwgY9TmJzHHx1tkDOoDeelU4W%2B2r%2FDlMI6AuMYGOqUBgHovbEzC6oWfq92WojedPXBXmq7d%2F7DS72q0g6riEXf9FO%2FR69TRDIqxNCN40Ymp5HKW7yuPklBziFmI4Q6m6lRJsoLngvnFRv7PF3adMj5miH9%2B8v7Uzf5QYAEpvEflaldHQV6gILAnAh%2FgBrF6838WqiKTQ8htIfoZQeRRO2uOBNpGdx%2BXXPU6iPXWTXrhG28Ul7pdWGjTw%2Bm2tdMJmOhNUEf7&X-Amz-Signature=ce08594b4f701f86fee3c9a852c363a0c8ff472da42dffd8209c9f1d74304b63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEQ4NTO3%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCb4cDmWQDQj1woedOwV4OMj9ZZZCMjjI%2F9PIXhXHLXiAIgMWu8%2F4MABdu5oIgWqUSPf0i2FcOSJzDC1bCDir44uXgqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGZXRqlP%2BQRGx93hircA253k9hPwDnl%2FLVMq5QHkntdL8rGDPj7QUY%2BQ3qB0qhiTfRzBpF7TI1mF9WM0z1vpA6s%2BDMNl0o4qYStd7jsb3h%2Ft9pPri%2F7ChSnje2C9l3%2BKaFFCD%2FAAV6sXWmAxYgmxUbCInzgcxudiKnSvZOSfqB0Qvc3f8mVUiBVvEtDk4AJ2EhN23fkkjsR%2BkWRnSdtZSJbcbRat8VNUOJfuZfDnPuMz%2BWCB8AYoNZdL%2FlK6qSdKa1YZU0CPD2%2FA94S89JQbP5tnWY6ECtNxDmCKD%2FdP47oh4idQtfYOvfpwlRpt9l2FNexBaXiZK2wQmabRDn8zQguvNnjq3Id81DmwbYihjUglFqTx4Pt0tETTlJKK6iu%2BkANrDzAnTKzFwcTotXq8odR5YUnhDmieAjeLmLtoty%2FrWnf9Lb6byYh8cftJB70f6NKKW26G1q5GwYGGEWb9LHkjLu%2FmtSYKqH19nY3cfeq%2Fp3ps0X4Kolw7is75aaOWqUCBpex4sjPX9wdapootyB3ekIDCfimpGxhh4%2FLjX09s41b2UA%2F7yXcxUL2Yfpe2klO%2Frnxy3URCbN%2B3X1vxRJgW6N53V6CtAGG2A2fgCMKiuHw9MK4bb5SCj3WIjvQ%2B7e7l%2Fr0VhDN8eCzMJmAuMYGOqUBM8IsA749lylB%2BTn3mYjuGt4aAiMyyzynhzZiR8H1HHDcgZlmPb6QGevJFKZezMzo5IgxiOdyrtkFg9fyBn2HTo%2BuR9sZ13yTbq2A1gq4JjELyLLvtF4lLaOB%2BLM0qHPQHhupW%2FnAVo2vW%2FwTfPVwQIZSkOofRO8azTRRauMcCnM1Bef9AP0diqslyz9UR2M6YZPVFrg%2BUrnjih1Qg5obJxjKnoAB&X-Amz-Signature=6be9357f34739bbe7b6b7704b2fb17acddeaca027eace7b374153bfb319a8092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEQ4NTO3%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCb4cDmWQDQj1woedOwV4OMj9ZZZCMjjI%2F9PIXhXHLXiAIgMWu8%2F4MABdu5oIgWqUSPf0i2FcOSJzDC1bCDir44uXgqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGZXRqlP%2BQRGx93hircA253k9hPwDnl%2FLVMq5QHkntdL8rGDPj7QUY%2BQ3qB0qhiTfRzBpF7TI1mF9WM0z1vpA6s%2BDMNl0o4qYStd7jsb3h%2Ft9pPri%2F7ChSnje2C9l3%2BKaFFCD%2FAAV6sXWmAxYgmxUbCInzgcxudiKnSvZOSfqB0Qvc3f8mVUiBVvEtDk4AJ2EhN23fkkjsR%2BkWRnSdtZSJbcbRat8VNUOJfuZfDnPuMz%2BWCB8AYoNZdL%2FlK6qSdKa1YZU0CPD2%2FA94S89JQbP5tnWY6ECtNxDmCKD%2FdP47oh4idQtfYOvfpwlRpt9l2FNexBaXiZK2wQmabRDn8zQguvNnjq3Id81DmwbYihjUglFqTx4Pt0tETTlJKK6iu%2BkANrDzAnTKzFwcTotXq8odR5YUnhDmieAjeLmLtoty%2FrWnf9Lb6byYh8cftJB70f6NKKW26G1q5GwYGGEWb9LHkjLu%2FmtSYKqH19nY3cfeq%2Fp3ps0X4Kolw7is75aaOWqUCBpex4sjPX9wdapootyB3ekIDCfimpGxhh4%2FLjX09s41b2UA%2F7yXcxUL2Yfpe2klO%2Frnxy3URCbN%2B3X1vxRJgW6N53V6CtAGG2A2fgCMKiuHw9MK4bb5SCj3WIjvQ%2B7e7l%2Fr0VhDN8eCzMJmAuMYGOqUBM8IsA749lylB%2BTn3mYjuGt4aAiMyyzynhzZiR8H1HHDcgZlmPb6QGevJFKZezMzo5IgxiOdyrtkFg9fyBn2HTo%2BuR9sZ13yTbq2A1gq4JjELyLLvtF4lLaOB%2BLM0qHPQHhupW%2FnAVo2vW%2FwTfPVwQIZSkOofRO8azTRRauMcCnM1Bef9AP0diqslyz9UR2M6YZPVFrg%2BUrnjih1Qg5obJxjKnoAB&X-Amz-Signature=55040676c12ada5036ff664db70c85306e102ddb5316c7a116be36b2a008dc1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TQXDAIB%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAKiR%2FSgmVuFb24%2BHS%2FR%2FIb3rzl83zKblO6V0mY%2F%2FgAeAiEAhVzL0zBhSWkGjVOA6ITM%2FQ8dDJlQsrYOmnbgz83eGD4qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGW3gVms3crUe9Qn3CrcAxSuzZPugTSFCKr97tFWDFkhJ%2FmUJjOL9Tfe24oa4F5gVh5E%2BB58V4IiiZakcq1RJjsTmlygYeNw9tYVYr8qArChj%2B8dYXsvoW%2F52mdNisgaEkHcVak3iL9j51%2B%2BdvKgEtFuvr%2BnakQ589lDSYqANZ%2BiPdkrvffubzbhl6hX9p3lW%2Bx71lsalFVQJu3ApKklluxmW4Gpso0Vx4FAEtCnNcxfxAgcbLDMboealkDksL%2FJAwkMRAZb1N9duFth8j1JiM%2B7nMcPikbEtolZP2MrJPFxvZ9l%2BuTf%2BMDk4WlubpVzGhLqXdcvVkrCHTjeXZEYPN%2F4K%2FDLLCES1BJYmj0kYq%2B75GrJQkVY%2FMIK8s9FGeWWAfpOyp9SqU3SJPvX7iNwhsphWl9snpZCUmREYlNRFQsTN0bXV9QjL%2BHoFE%2F0tG9dMX37mu5Wlwmz7HHbwx%2BRTTe1FxiHF3Lve1mdSneh0KE6zmV0kWWGbyOR5RkBPUm141QgRGAIkoUwj%2BN1Ytv2GuupzjPkGRDMaeEB8EuMDZa%2BGMKHc%2BS8UisUHsWR7AhqWuk8%2FQZdZS%2Bh%2Fg%2F1NIY9xtmt5C393RnlUje5Nt2iPSjB7BLOSWwgY9TmJzHHx1tkDOoDeelU4W%2B2r%2FDlMI6AuMYGOqUBgHovbEzC6oWfq92WojedPXBXmq7d%2F7DS72q0g6riEXf9FO%2FR69TRDIqxNCN40Ymp5HKW7yuPklBziFmI4Q6m6lRJsoLngvnFRv7PF3adMj5miH9%2B8v7Uzf5QYAEpvEflaldHQV6gILAnAh%2FgBrF6838WqiKTQ8htIfoZQeRRO2uOBNpGdx%2BXXPU6iPXWTXrhG28Ul7pdWGjTw%2Bm2tdMJmOhNUEf7&X-Amz-Signature=30d346c945375acfe7a7a08f612fae00aec4189de0bd97501b3548721bf265ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TQXDAIB%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAKiR%2FSgmVuFb24%2BHS%2FR%2FIb3rzl83zKblO6V0mY%2F%2FgAeAiEAhVzL0zBhSWkGjVOA6ITM%2FQ8dDJlQsrYOmnbgz83eGD4qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGW3gVms3crUe9Qn3CrcAxSuzZPugTSFCKr97tFWDFkhJ%2FmUJjOL9Tfe24oa4F5gVh5E%2BB58V4IiiZakcq1RJjsTmlygYeNw9tYVYr8qArChj%2B8dYXsvoW%2F52mdNisgaEkHcVak3iL9j51%2B%2BdvKgEtFuvr%2BnakQ589lDSYqANZ%2BiPdkrvffubzbhl6hX9p3lW%2Bx71lsalFVQJu3ApKklluxmW4Gpso0Vx4FAEtCnNcxfxAgcbLDMboealkDksL%2FJAwkMRAZb1N9duFth8j1JiM%2B7nMcPikbEtolZP2MrJPFxvZ9l%2BuTf%2BMDk4WlubpVzGhLqXdcvVkrCHTjeXZEYPN%2F4K%2FDLLCES1BJYmj0kYq%2B75GrJQkVY%2FMIK8s9FGeWWAfpOyp9SqU3SJPvX7iNwhsphWl9snpZCUmREYlNRFQsTN0bXV9QjL%2BHoFE%2F0tG9dMX37mu5Wlwmz7HHbwx%2BRTTe1FxiHF3Lve1mdSneh0KE6zmV0kWWGbyOR5RkBPUm141QgRGAIkoUwj%2BN1Ytv2GuupzjPkGRDMaeEB8EuMDZa%2BGMKHc%2BS8UisUHsWR7AhqWuk8%2FQZdZS%2Bh%2Fg%2F1NIY9xtmt5C393RnlUje5Nt2iPSjB7BLOSWwgY9TmJzHHx1tkDOoDeelU4W%2B2r%2FDlMI6AuMYGOqUBgHovbEzC6oWfq92WojedPXBXmq7d%2F7DS72q0g6riEXf9FO%2FR69TRDIqxNCN40Ymp5HKW7yuPklBziFmI4Q6m6lRJsoLngvnFRv7PF3adMj5miH9%2B8v7Uzf5QYAEpvEflaldHQV6gILAnAh%2FgBrF6838WqiKTQ8htIfoZQeRRO2uOBNpGdx%2BXXPU6iPXWTXrhG28Ul7pdWGjTw%2Bm2tdMJmOhNUEf7&X-Amz-Signature=782fb8d0622fda91271bae6e4447955d2645608474a1d031ebc0dd1b0aacd31c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IGQ4DDX%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEB1odOIgy2tjBltiKP%2FYIzgRiVxhZTJqlcTf%2FwF70g2AiAjFk%2Bfvw5e8ohvGw%2FEiqruvIZ66Qp9qGzxYCi4MAFegiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJerBh9lD2PlPs2X8KtwDF5bcGc%2FWapS%2BqddYZZKmvMRvBZfo%2BfzxxRtvtdttK95X%2B6lJq%2FdF415t35pbdZIeO3h3AFKsQECZWIVF63tPAIt4SMsq7%2BKFWavN9SZ4CAOW2%2BHvFFfubeaxRQMeBmXtOydci0yg2qkMdkJaFNcICWur%2FNWem6aZBJOSvvmwJ0zVf9QJRKdVrEi5KpyyORc87U53RHyAxdeCD5eZ6cgAa7d0VB4N5h0SgTvxQHUTL5uM4fAqSoHT9XLVqpXK0J3TUPR%2FAFRLgGh6rKIUeOuDdeMy%2FVC50bbUZgsetJdrcG9UyhV2kiUIxVsgThz2nDlrZfzRJ%2B0iGwPR0UotNE0rtvE24EHUOvuZuFwlte7yZutw%2B3OG1a3cvjcXjR92vcPnhR9dyni4soNmRkaTqCFsQ6%2F81Ppxy3GAKxbZCL4ReiJ0t%2B4St7IUk7J1iLIg87Qsyl7m%2FIs7Wj7%2F88xATznmf9DLQ7iYutYuNwKcmARwQ1Z2yvIZ7zfrGh4zmfURxB0sY8vhuUVTg5L4MNSG3T%2F4vnEiSJ3WsImEK49XRssr0nDz6Zo5vry%2BkvNJOIX48s%2F7XPM%2BYkTYmjyJDMiT80VxgtQCSwbQrG3Pdrf45fz%2Fu8hD13BvY32vvbHFu4ww1P%2B3xgY6pgHXWqrlbHrXuyvEOcocsBsrj8vVX3YT0trWjmBc%2B%2BpC6eCD%2BehSa5Rh2wDVEu4czjua22tym94LL3itEiovEFU3DbUunkno%2Fl7uCj%2Bs4gKT4%2Fvx4G2mry%2Fg%2BmtnRykIeB2GCDEXIHmYaMufeJ9GIZEra2zccutb1BjBTxOpJawRGUXJ6LGqwRmQ9N%2F3W9jxq2oLbU%2FtOosoTZ2JQQ17ku%2BqSNMVLBDi&X-Amz-Signature=d4e2c2c0846b0217c8ad515b16bab6947d585b4660b38bfe1ad748a9f6187204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

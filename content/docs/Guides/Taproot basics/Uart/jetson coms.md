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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XLOCVXE%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCID7BniYPWnvBUG5TEK9YmuDCGIiNVuOzu5JHpydRmsl8AiEAiQH5LZgvCRX0XvTOTDP4dl1vwaclRGOv46L8L88ULNYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDD9FOTclnIsu0zcySrcA6edFpyBf%2FXPO2QKV7rFMiYq%2FdznjCuSc96i7axNNf%2F%2B1zw%2BT99ckdGoTL0GolFiQH%2BSmCHONJFTM3vgtobTCru1%2FyihTNnwv5T0B8hsPs%2B6QUw%2FsVnUUJ4uOq5mQMIXsl%2B2x1JohxYGdXphFKdLiXeRfuBhDgiRjHgccWExVDjx5EHhqH4kGbt%2Ffpmb%2B0gz%2FX2f6cCfojiTL3CnWGFmhUNOCAwN%2Bcj1FusopSzUXJV0Wk7QdFo08Fz6OVU%2Bqe7QQPoFKjwFhxVOc3nA%2Fxe8M%2BH9K53r%2Fq6on1ThaB4m%2F4o9QiHjtKinFa1PYyCatlqycMYDNWmZevExxJAFR2f8NU9AKBWrb8Ccr9Qeiv6ptEpKB%2Fn7WX4ewGKSgSq7wTV9rz4tL4mc3Ro8n7PtZb3PF6kk%2FxI7OdSDKqqP6xLXuHJsWKUDHBPFen%2BwyoVYTd9%2FARJV7ZqDPKtp5Ob38tHRscjDI9kxSD10mIhKytnHOnQQpRCW2%2Ft2haMrJnCXaXr%2BAbSwqFtWuDaB%2B4Dbh6b1VQ36A8oM4ngKHE0WG35QPPpeXQl%2FF8R1QVFKF1PjrQRXyQkjdfsd1t1h9djTA9JNqw6wkcvBUokqfUy9FJF4BsysiRJ0m5U%2B9Ut4IfQvMIecuNEGOqUBScH1aivrrbMCU0LMk7QqbEleeR%2F9dadLm63tm5HItMF2TJn6CNA1qciFYY6fY5dQt2L7JuIhWEqyPLuoe1V0mJa9NEq46aIx3GJYNoMSHsSak3n29J7SlbKIia5gb%2Bd8w9%2BAyACe7pw%2F5fE%2F6fXt%2F%2F4ZkUkjLRQCY8z%2Beb2EGsGUiUpZEPZfH%2BHeY5NucLDdSm9DY8F6hYvLE2hao7QgWo58L1GH&X-Amz-Signature=49516fd22a99b28b50a81946893e209b35793c0d0fcbb86ebcae70a81cc922a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBWHXBMJ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDQfxlhwn8AF%2B0BRNkOnRonVlnvhzOxIOSvLwrPbROheAiEAkMCvvy9wcwWnfPJCaTCgPQo0Nxap0aEivocGiXUyeIAq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPHB1NDiXeNQpeEoWSrcA%2F%2BDkamcAKtll%2FSc0HQgYkUr8Qu40Hl3zS510wd45bO3N7vbuh%2BmFy5xJuWctcchL2hRf%2BgGT29KOc5VoNBA9GvD%2FoBZFdErk70c3fgErmzpRnGduhpAAYQVLY19DwjY6%2B%2B04Lx%2BaXeNL6kvutYHmr%2Bix0So4JSLnujycWEoHcdmlb1gQWB0H9a9Ym6Ijo%2FWR%2F65N7lxTrI5XAwHuBjIyAfAzt65RxPAkHLw4j3mmuEj9%2F2NHC4%2BifCZmSLxpjWbCvfhXTAr5kEX%2FGHjdKdokchTtUbBPyTKUMHYKg0FusK1CNsPkmxY1R8mklFWpPmP%2BJEB78mcJosjudOuMg%2FGZyiXLiIBshhspJi6d0uA0Hdaq2VGAOUKiV1Yhkp5I6Xvmebj%2FJJhJ9kCUQ42Um6NqPVnuwT6hLShEfi569O1OSQmhSs2Yo%2BxaC8ctxt%2Bj2AANP2kSIlROF4SJBr9MFQmma8qN%2F9tzECmDRmO4xTQkT9ZhbCUmYc6SOdZbNWycBo2Flgfel8KgSyLDo%2Fj2lEBYlmxk3xdI08xtko810CKAwmDeuJY6aaTCvdV3iafJPirINtd4NZHzniU%2FU8VYqkTK4uOayrig7feAtjQZyIhUKnBGKIuZw5PZdgi7chjMMecuNEGOqUB5%2BeElU0FVXD7Pi%2Fid24WYhc%2Bml8coS%2BfuC7VkE%2BUjzuE6n3JQuRdWB1OcHWIdSVk6uKed9QSIcSFrRAPKXGO7a7eDlWgHETWPQ9h6th07KvGiiK0Jh8hDSb2ytMfkuu%2FhqWHE00JyMpeMMx1V1meTbGAh3XCpHSrO2r4sX6wJ9Ra3X8YDheVKrjfDsMsf6JRemuufKwcQzuS6Rr%2BgP3DGD6gO%2BjX&X-Amz-Signature=2f49df6b810c87bcdbd1394bd06cfbe25f1eb9c2f0159553b17b3cafda3b3830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRWRJBKF%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICQaKr5SgmschsnGKJozkYXX7ZeiDAHxCcgac157IVRCAiEAvR0zeBVc%2FlJ3NtO9bS8uoaF1KTkl5JvGRaKCVvIeGwYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDF27NpJGIedVsF%2F4ayrcA3bQb1K2zIy4%2FV%2BNgeHYv%2BOWZmwf1hiRZLXy9053lHcAbniAZ5hSm0xBQnOSg93zv4S%2B%2Fcmpy1Y0peG8talgJKrBm7cwnCUxs1f7DBf%2B8ereUUd24b339kNMCp22YAnk7l9ENxG2yj2Ui%2FJkVkue6ey2TnvgPoM2YWX4eVqqfMhPcNmLRT%2B0tdMhAVi6OCaPRny2qOIto19yimZ2bH05EOD5sBfC0yLSXO8VvPOHEKQgPAohn6XM2X3P4qML56sGSvbtLk0YGGzEvLLS1L7ymYd7dNQ5SGrUsnE6o52wgvXtNnFfY2rFWlh7V%2BFY%2B1u9E0AVpP%2Btd0fLZr7JUnzAxjWo4DlRtMI4LTAV%2Bxdc3iIHDDHnJqKTRw3nLZNu9PnTsqtyBp%2FE5BDQenxU6U%2B%2FqeqHMbFcWZ4inlnR9GUzpgB9wyMwKo%2BZnmYzjNHk8jJboOigfbKifwJvGAzYcNgWNfuf4H3eay%2BCXQWjrU7QVgeGToG3vzhdZq3V5Ut6rHtFFqKwf9rKAmNhQlh4fKN9kfvP9mexIWt26lfQD5ObaaZlVk08C6%2FounAcpI0s%2BjgeBs1rGHCLobv%2FUjdFccugMG1ovlV70pYzo3%2BDsboeqJAcKfmGazg43pzk4KnZMKeduNEGOqUB8uJs8LHW1ysL64%2BvO1bPb2oH01lnD6kFCxFjxZNF1bmWuiSiswwLa679pHoC6RfGhBIalLV5A2HaCfqYvxBYQdqOKtbe0%2FDcJ0xjOgUjpOvJc4Ym8Y8mjg%2FACVXIVAK4%2Fxbd%2FrCfLlFk7jhL45nyApH7uc75ss1kAkUWIqXjkr69b6w5dPCZfPeGnoZPs3I3IC62K7ROTZqBomF24dAGIaPjUp2H&X-Amz-Signature=97085a9e56cce1d4151aeb94e96906baee31d7f90d022957e994b3a05311dc52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRWRJBKF%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICQaKr5SgmschsnGKJozkYXX7ZeiDAHxCcgac157IVRCAiEAvR0zeBVc%2FlJ3NtO9bS8uoaF1KTkl5JvGRaKCVvIeGwYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDF27NpJGIedVsF%2F4ayrcA3bQb1K2zIy4%2FV%2BNgeHYv%2BOWZmwf1hiRZLXy9053lHcAbniAZ5hSm0xBQnOSg93zv4S%2B%2Fcmpy1Y0peG8talgJKrBm7cwnCUxs1f7DBf%2B8ereUUd24b339kNMCp22YAnk7l9ENxG2yj2Ui%2FJkVkue6ey2TnvgPoM2YWX4eVqqfMhPcNmLRT%2B0tdMhAVi6OCaPRny2qOIto19yimZ2bH05EOD5sBfC0yLSXO8VvPOHEKQgPAohn6XM2X3P4qML56sGSvbtLk0YGGzEvLLS1L7ymYd7dNQ5SGrUsnE6o52wgvXtNnFfY2rFWlh7V%2BFY%2B1u9E0AVpP%2Btd0fLZr7JUnzAxjWo4DlRtMI4LTAV%2Bxdc3iIHDDHnJqKTRw3nLZNu9PnTsqtyBp%2FE5BDQenxU6U%2B%2FqeqHMbFcWZ4inlnR9GUzpgB9wyMwKo%2BZnmYzjNHk8jJboOigfbKifwJvGAzYcNgWNfuf4H3eay%2BCXQWjrU7QVgeGToG3vzhdZq3V5Ut6rHtFFqKwf9rKAmNhQlh4fKN9kfvP9mexIWt26lfQD5ObaaZlVk08C6%2FounAcpI0s%2BjgeBs1rGHCLobv%2FUjdFccugMG1ovlV70pYzo3%2BDsboeqJAcKfmGazg43pzk4KnZMKeduNEGOqUB8uJs8LHW1ysL64%2BvO1bPb2oH01lnD6kFCxFjxZNF1bmWuiSiswwLa679pHoC6RfGhBIalLV5A2HaCfqYvxBYQdqOKtbe0%2FDcJ0xjOgUjpOvJc4Ym8Y8mjg%2FACVXIVAK4%2Fxbd%2FrCfLlFk7jhL45nyApH7uc75ss1kAkUWIqXjkr69b6w5dPCZfPeGnoZPs3I3IC62K7ROTZqBomF24dAGIaPjUp2H&X-Amz-Signature=98a57ab9ab891f03f0458ef89427f5b04b63cb0355562144c6ae7523f27d5dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBWHXBMJ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDQfxlhwn8AF%2B0BRNkOnRonVlnvhzOxIOSvLwrPbROheAiEAkMCvvy9wcwWnfPJCaTCgPQo0Nxap0aEivocGiXUyeIAq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPHB1NDiXeNQpeEoWSrcA%2F%2BDkamcAKtll%2FSc0HQgYkUr8Qu40Hl3zS510wd45bO3N7vbuh%2BmFy5xJuWctcchL2hRf%2BgGT29KOc5VoNBA9GvD%2FoBZFdErk70c3fgErmzpRnGduhpAAYQVLY19DwjY6%2B%2B04Lx%2BaXeNL6kvutYHmr%2Bix0So4JSLnujycWEoHcdmlb1gQWB0H9a9Ym6Ijo%2FWR%2F65N7lxTrI5XAwHuBjIyAfAzt65RxPAkHLw4j3mmuEj9%2F2NHC4%2BifCZmSLxpjWbCvfhXTAr5kEX%2FGHjdKdokchTtUbBPyTKUMHYKg0FusK1CNsPkmxY1R8mklFWpPmP%2BJEB78mcJosjudOuMg%2FGZyiXLiIBshhspJi6d0uA0Hdaq2VGAOUKiV1Yhkp5I6Xvmebj%2FJJhJ9kCUQ42Um6NqPVnuwT6hLShEfi569O1OSQmhSs2Yo%2BxaC8ctxt%2Bj2AANP2kSIlROF4SJBr9MFQmma8qN%2F9tzECmDRmO4xTQkT9ZhbCUmYc6SOdZbNWycBo2Flgfel8KgSyLDo%2Fj2lEBYlmxk3xdI08xtko810CKAwmDeuJY6aaTCvdV3iafJPirINtd4NZHzniU%2FU8VYqkTK4uOayrig7feAtjQZyIhUKnBGKIuZw5PZdgi7chjMMecuNEGOqUB5%2BeElU0FVXD7Pi%2Fid24WYhc%2Bml8coS%2BfuC7VkE%2BUjzuE6n3JQuRdWB1OcHWIdSVk6uKed9QSIcSFrRAPKXGO7a7eDlWgHETWPQ9h6th07KvGiiK0Jh8hDSb2ytMfkuu%2FhqWHE00JyMpeMMx1V1meTbGAh3XCpHSrO2r4sX6wJ9Ra3X8YDheVKrjfDsMsf6JRemuufKwcQzuS6Rr%2BgP3DGD6gO%2BjX&X-Amz-Signature=a3f805d3923ea972503a8697a4a021017a36bd32d0fde39b2673a901de360a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBWHXBMJ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDQfxlhwn8AF%2B0BRNkOnRonVlnvhzOxIOSvLwrPbROheAiEAkMCvvy9wcwWnfPJCaTCgPQo0Nxap0aEivocGiXUyeIAq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPHB1NDiXeNQpeEoWSrcA%2F%2BDkamcAKtll%2FSc0HQgYkUr8Qu40Hl3zS510wd45bO3N7vbuh%2BmFy5xJuWctcchL2hRf%2BgGT29KOc5VoNBA9GvD%2FoBZFdErk70c3fgErmzpRnGduhpAAYQVLY19DwjY6%2B%2B04Lx%2BaXeNL6kvutYHmr%2Bix0So4JSLnujycWEoHcdmlb1gQWB0H9a9Ym6Ijo%2FWR%2F65N7lxTrI5XAwHuBjIyAfAzt65RxPAkHLw4j3mmuEj9%2F2NHC4%2BifCZmSLxpjWbCvfhXTAr5kEX%2FGHjdKdokchTtUbBPyTKUMHYKg0FusK1CNsPkmxY1R8mklFWpPmP%2BJEB78mcJosjudOuMg%2FGZyiXLiIBshhspJi6d0uA0Hdaq2VGAOUKiV1Yhkp5I6Xvmebj%2FJJhJ9kCUQ42Um6NqPVnuwT6hLShEfi569O1OSQmhSs2Yo%2BxaC8ctxt%2Bj2AANP2kSIlROF4SJBr9MFQmma8qN%2F9tzECmDRmO4xTQkT9ZhbCUmYc6SOdZbNWycBo2Flgfel8KgSyLDo%2Fj2lEBYlmxk3xdI08xtko810CKAwmDeuJY6aaTCvdV3iafJPirINtd4NZHzniU%2FU8VYqkTK4uOayrig7feAtjQZyIhUKnBGKIuZw5PZdgi7chjMMecuNEGOqUB5%2BeElU0FVXD7Pi%2Fid24WYhc%2Bml8coS%2BfuC7VkE%2BUjzuE6n3JQuRdWB1OcHWIdSVk6uKed9QSIcSFrRAPKXGO7a7eDlWgHETWPQ9h6th07KvGiiK0Jh8hDSb2ytMfkuu%2FhqWHE00JyMpeMMx1V1meTbGAh3XCpHSrO2r4sX6wJ9Ra3X8YDheVKrjfDsMsf6JRemuufKwcQzuS6Rr%2BgP3DGD6gO%2BjX&X-Amz-Signature=53813880da861b7f84042b6d621ab29aac43f4b134535e5baa96023c8eea33ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RPWEBU3%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFpXWX27MXaJZN8c92Y6qF5cAPbN5Ov%2FAaEp%2FQVXyxahAiBbwxxw1fm6HpCAimEmPiGh3WRpRwAo2lqZj%2BnX4Ms9mir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM2HJfDW9VmNgKhHMuKtwD3fscrNFHOj8K%2BnAAkKjT%2B%2FK7sAYpSrXAZwaA39U%2B6%2BQi17r3HokQIYlFlQGD9sltxt4UZxFTpurfyOzcX%2F%2BQqvKZafGQpn9YjbUKAIFwXAOhVbRCOgCssxwB0hgSa39NQuFb%2Bh4kp2IOn7t75ZK8WVywfdAPWYS7bescR1hQshLN6kbTfk%2FtHx9KH%2Fw5aLwxIScZ5LmWeTHjMkInwyvCWoVp3Z72UhK5KgH0%2BfauEcFU4HCxrjF3%2BARlNPBHDtDM%2F508bsiuFkj8nEdS%2FRgh6PPgVzn74wpKUTQBvZbsnzFL96RPKkujvYam6WIjLuNBpHdOZEypznZpEmjMA9zVRw4%2BaEiszHF%2FnJBSghiVzTgq2ro57tQPuVwzgHA%2FPu03m6UUIxr5ee%2BiTGvpVJI1RZVbIrwSZ0hQHJXpmaidgJobkxwvSQYfxJHsZrJlWz5OCmx%2F%2Fzrd%2FqbkpiYph2LOZnQsFRFSMck1DaCCY04tYZ2EX%2BHhs2B39i1Tdwwl9JKGrXWDhTkGth6sfs4PRlfVHx7nEfFtvOJhiY0XJTH%2Bfg8PonOnGeRqg83dvdkJL9d0%2Bv8fMQ8Uscy9uBr1Ty92yrpkINb4Ew0Z36JOecEtOWySCiSkoi87XS%2BmrBkw7Zu40QY6pgEhV1uD0Zy71WxrnMyjdpkhsIWhRZ5RlMO28rm0qdmvL6TAcjIlU69Xt%2BQoRKcIAhqlTDM1Ca0kN%2BA5%2BaLISd%2FPJAvjRWxihxmeBD0t6DXwc%2FMmXsY5r5O0AFVLKdygQNEDsn8uKpkBZZ%2BwSbZ4HgiHtaW8lFjURq%2FsmcKsrPfbmjrta3gNPzv%2FyCY%2F2GNc3QF86RoJwu2MB%2B69d5VDE2sP7uNEKDRE&X-Amz-Signature=ceefa250c79628ddc7f5ab03d3648df994915b63b518290b504a7f0873075140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

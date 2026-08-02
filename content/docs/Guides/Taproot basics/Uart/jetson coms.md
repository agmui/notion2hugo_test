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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ65ZAVE%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCvUDswaU%2B%2F9wELHnc%2Fa5TwpeWFb6m9n2quvNSpJe6rIQIhAM35oz5SqFW%2BF%2FvZ8qDsh7s8q%2B8oaw6J5HQbxns6JEqcKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwifZVUlNq5ZKQxZM8q3AMGyvs50EF7c5qwiFRx4mWvIOpy9v7ePBVQpp5oqcjJ69rJq4m6x2wELdbkIAauXSxpmge7HWalllbIFDefP7W9Cixfcu93I6eYgmb4u%2BNMf4T%2BOc1zwW4iOsmI%2B3R5TnEiZ4WEmL3ZBCeyn31KnNUXEaaC%2FyQcQqG8TJ5nhKqFk6WLaTdQqZOb3Jv%2FscdCH5T55HCK1ROiemqOwSAtrgS170NsObs8nIkUnF7SCGfTy1l8qzk1125x8hmsopylzTJ%2BCzd6KrdbRccnwPdrWmaNgPY4Q7VQE953Jby6TrU8YknIoLLPRL%2BqTih2jMp4%2BC%2FdOH1xWdnRagWS71zxA%2Bpg3HjBCya0C%2FJS%2FAeIawiW7BgI8h5FO7oVaNSGeSMSGorMa8baiyS%2Bhv%2FZ%2BpOwopmKFhiYIkyPam4wVAXGEJZGwx6KLWIzgXlt93rR1c7l%2BjWPcrN72rrTmfF6szikqq9fozNovwlxHUkemHvgpBfLsMvUr5Yo6TN6zoLpF0SltMPY4mb8THGCzShvpW0RD83YUB%2BpQyebjeIq3TWi2y6Gj8Gqn9JmCCUVCsxXGOs3M5Gkg5dV3ZA2emznDvWcunK4uGRfsT2CgmeWWLQlbHwryAHj2Hj2FaGmAsYGRjD0wLrTBjqkAYESPj89wrlDZbE12cs5dYu21zNUb%2BjX0FVDHvOXwR%2BsMh5ah1vddGawbasLplN2GW8MiW1Yp5EUT61d7%2BkgFsV6d8PT1ztjmfORYP1F9wxA9jG21rWxG5ES%2BDDLcwRDtWucqF3INu7dn2ZO%2BgpwRNR7LINRUS79%2B%2BlVBeCdzOtm0L32qYys41DPEgavxtdztg86yPncmQSGtaxGHTmivs1pSXBM&X-Amz-Signature=1f971f1efdc13fe78a1d8f757adbe18ee91eef87e9201dc1a64524484cb997f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKYL3FDD%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGBjXb5NHU3bYDR85g8lfspFI4fc7tA7Gkp%2BQLpgAQvOAiAg35d0eHeuosajdbIoAm9WL%2Bmz6WupDRNM7sZLCx0CjiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXtoxifKfju%2B5%2BzPuKtwDJzHtxs1ncil0BdO7UmdInHmFVLj%2FWHPEj0RNbYpGOJpSb%2B2JtMfGeXXuIYGincWrIYaKWv4igxG7ylEn2E77C6oUyqmtpSKIAuNorAgNaKw8juWeUj3jA3vGwXv8SPLOjmKNHQ8UN%2F6tzBP0gXwb%2FF948H8kSwaJkYSNPRSGfrfqNvQPhfbmVyPe3YnvZIbOlvE0fkPdL4D0XwrsnC4LYni1PJZHKaR7WUiRFDQ%2BFz0xneXannO5%2F0jEVxnNfe7yE3KeFEapCLGYRim1Bf6l78dx9JddVOpNCwXxrx7qqAeSgHFhoE5KHgbYNSuVcF0kDgHWhz59Oy%2FZuxJMvoUL6pkHf2dRnDdFNmdzX8ITiaXPg%2FOtOKD5TIReeQk9wwsGZwf91KXVbfiJPQ34KdGkumfNu0OC6CAPURh79fkSX3mu0j1pPvkUk2Cwxmfl0kRmGkzVFxpLZI4WMveMSsrKEMrNbOm6TJO5rkHYNARbDHj1VvXb4bawYFtwHC2h9WnVhcOl3UwafN2EosZM%2FVMlSSXT2bDMsiTgjgnsq2FZdPN8Eb5QDPoI2%2Bzz7IZR4%2BQFQeb3tF0FN25svnuGlpBCCYaW9TAggVm2r1bjx3iL7a%2FbUyG1t7cfMot7b94wvcC60wY6pgHA2tgLuiFNhRGcuQ2qIUeGQi3ittBLgzTpupv3mBlLifEKdu6YOH3V2%2FeKIoKuYrUjJHVUd3B13FjYpFPSU2rS8cZwoJn4pO9kuxGc7514chbY6n4Ih%2BQnGWfroVE7bHZkrPioQvjagInob5AGF6M8V78r3ql%2BOvRIhlB6zKR44yW6GCxXd7I20m2nabrr473LcHAm%2FRcF2Kei0TT%2B2crY73l8XDhv&X-Amz-Signature=fc174d313756f13622dc95d167f79388487d0ac253dfee179b4edcefe491e262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7ANNHNX%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCkXlJohHatz2mzXJQFd8AJVdMk8AEh6ksif8Ii3QcaCAIhAMSTNatViZlPuzLdS72L2rswy7x2HAoQVQO0lfAQPvC3KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfuKqahztWP0Tp2Kkq3ANih3UqLaffEQ%2BPYufujvhiUJKKbSPuiAvbUqxZP%2BfXK0tTj006aqFhHvW%2BRHQLFeziOy%2B3kHFgeaK82Ky%2FBIq2XAU3%2BJ7vPQtzyO%2BfAdJIr3LQPPt47oXwtVP%2B2xoKAuqR2rzAeyC%2F1JKfFOryVsytF5hIYMyh727lMAQDEV6Z4U4VwNbrFWlrhuP%2FXTGHNyLSCjij2%2FXFfjIJruhur26rK0J6rTo04a7c3N81YZMh55IegiWly2hb0WdNYa6f8EAn2mC1gveYvlufStTJeBPSYQZfNnJmmn4L9Ss4Lr6X8yVQUs%2FNMF6uC4AIBZq%2BjsVQm0lr%2FXmxv5v7O6trJ4wwdycutK4XgKKU59BobIARB337LA8BKRNvc6sMBMJc7QSLxwkEdVqpeJYQZ%2B1n2StlMhXtapS0br6De0Hges3r6nIje6qgdXTbQR7uwrVQVBUo4wHgVjAeNsUqbmxPrhp6uz6awlIr%2Fu6mABREhjIwm60Ie1AvqH3oqWDzzgVINWjYYM2ud1W0cb47AMCFhuGhTySpWHQqUGgcBVHuP%2FC8m18G%2FB5tBZ8Z6qikxMgF08MXv4CSk%2FuqtIuIUo9Ct1%2Fcv2NLPPGBsqxg%2Bay%2B02xChCtMQiH2rq3Pfs%2BYjTCKwbrTBjqkAdYfXZgz2WBC3eT1EhL%2FF08TgnFOdoaAMsYD1W%2BXBHZTNpJXuptAqLlIJXUjXTby8Qi5wLzthwJdWe5fIfoaFTe4L5x%2F7PVdsMIcXyTJJUUFTqEMhLLbrzUGYNtUBjCz15wFFabdPURrHeL8E3gD34aEP0r9zBdiS1ga5UAy58tgEv8JgWCbgmpO72vPixlfFOb9h2q%2FT6uefmHr3wLXJ7vqVfi%2F&X-Amz-Signature=456618a3b8aabf6e0720aadc114be976e0b340ccf15e05342286de57af76b6bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7ANNHNX%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCkXlJohHatz2mzXJQFd8AJVdMk8AEh6ksif8Ii3QcaCAIhAMSTNatViZlPuzLdS72L2rswy7x2HAoQVQO0lfAQPvC3KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfuKqahztWP0Tp2Kkq3ANih3UqLaffEQ%2BPYufujvhiUJKKbSPuiAvbUqxZP%2BfXK0tTj006aqFhHvW%2BRHQLFeziOy%2B3kHFgeaK82Ky%2FBIq2XAU3%2BJ7vPQtzyO%2BfAdJIr3LQPPt47oXwtVP%2B2xoKAuqR2rzAeyC%2F1JKfFOryVsytF5hIYMyh727lMAQDEV6Z4U4VwNbrFWlrhuP%2FXTGHNyLSCjij2%2FXFfjIJruhur26rK0J6rTo04a7c3N81YZMh55IegiWly2hb0WdNYa6f8EAn2mC1gveYvlufStTJeBPSYQZfNnJmmn4L9Ss4Lr6X8yVQUs%2FNMF6uC4AIBZq%2BjsVQm0lr%2FXmxv5v7O6trJ4wwdycutK4XgKKU59BobIARB337LA8BKRNvc6sMBMJc7QSLxwkEdVqpeJYQZ%2B1n2StlMhXtapS0br6De0Hges3r6nIje6qgdXTbQR7uwrVQVBUo4wHgVjAeNsUqbmxPrhp6uz6awlIr%2Fu6mABREhjIwm60Ie1AvqH3oqWDzzgVINWjYYM2ud1W0cb47AMCFhuGhTySpWHQqUGgcBVHuP%2FC8m18G%2FB5tBZ8Z6qikxMgF08MXv4CSk%2FuqtIuIUo9Ct1%2Fcv2NLPPGBsqxg%2Bay%2B02xChCtMQiH2rq3Pfs%2BYjTCKwbrTBjqkAdYfXZgz2WBC3eT1EhL%2FF08TgnFOdoaAMsYD1W%2BXBHZTNpJXuptAqLlIJXUjXTby8Qi5wLzthwJdWe5fIfoaFTe4L5x%2F7PVdsMIcXyTJJUUFTqEMhLLbrzUGYNtUBjCz15wFFabdPURrHeL8E3gD34aEP0r9zBdiS1ga5UAy58tgEv8JgWCbgmpO72vPixlfFOb9h2q%2FT6uefmHr3wLXJ7vqVfi%2F&X-Amz-Signature=e4a695711c79b560a96bf2f4484d3dc7c9a1d7bf7f5389dca1c463709e7348be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKYL3FDD%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGBjXb5NHU3bYDR85g8lfspFI4fc7tA7Gkp%2BQLpgAQvOAiAg35d0eHeuosajdbIoAm9WL%2Bmz6WupDRNM7sZLCx0CjiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXtoxifKfju%2B5%2BzPuKtwDJzHtxs1ncil0BdO7UmdInHmFVLj%2FWHPEj0RNbYpGOJpSb%2B2JtMfGeXXuIYGincWrIYaKWv4igxG7ylEn2E77C6oUyqmtpSKIAuNorAgNaKw8juWeUj3jA3vGwXv8SPLOjmKNHQ8UN%2F6tzBP0gXwb%2FF948H8kSwaJkYSNPRSGfrfqNvQPhfbmVyPe3YnvZIbOlvE0fkPdL4D0XwrsnC4LYni1PJZHKaR7WUiRFDQ%2BFz0xneXannO5%2F0jEVxnNfe7yE3KeFEapCLGYRim1Bf6l78dx9JddVOpNCwXxrx7qqAeSgHFhoE5KHgbYNSuVcF0kDgHWhz59Oy%2FZuxJMvoUL6pkHf2dRnDdFNmdzX8ITiaXPg%2FOtOKD5TIReeQk9wwsGZwf91KXVbfiJPQ34KdGkumfNu0OC6CAPURh79fkSX3mu0j1pPvkUk2Cwxmfl0kRmGkzVFxpLZI4WMveMSsrKEMrNbOm6TJO5rkHYNARbDHj1VvXb4bawYFtwHC2h9WnVhcOl3UwafN2EosZM%2FVMlSSXT2bDMsiTgjgnsq2FZdPN8Eb5QDPoI2%2Bzz7IZR4%2BQFQeb3tF0FN25svnuGlpBCCYaW9TAggVm2r1bjx3iL7a%2FbUyG1t7cfMot7b94wvcC60wY6pgHA2tgLuiFNhRGcuQ2qIUeGQi3ittBLgzTpupv3mBlLifEKdu6YOH3V2%2FeKIoKuYrUjJHVUd3B13FjYpFPSU2rS8cZwoJn4pO9kuxGc7514chbY6n4Ih%2BQnGWfroVE7bHZkrPioQvjagInob5AGF6M8V78r3ql%2BOvRIhlB6zKR44yW6GCxXd7I20m2nabrr473LcHAm%2FRcF2Kei0TT%2B2crY73l8XDhv&X-Amz-Signature=cd38a89ed74443ea43bf46f1199486e7ca998dc21540c064399336b70a5c7a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKYL3FDD%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGBjXb5NHU3bYDR85g8lfspFI4fc7tA7Gkp%2BQLpgAQvOAiAg35d0eHeuosajdbIoAm9WL%2Bmz6WupDRNM7sZLCx0CjiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXtoxifKfju%2B5%2BzPuKtwDJzHtxs1ncil0BdO7UmdInHmFVLj%2FWHPEj0RNbYpGOJpSb%2B2JtMfGeXXuIYGincWrIYaKWv4igxG7ylEn2E77C6oUyqmtpSKIAuNorAgNaKw8juWeUj3jA3vGwXv8SPLOjmKNHQ8UN%2F6tzBP0gXwb%2FF948H8kSwaJkYSNPRSGfrfqNvQPhfbmVyPe3YnvZIbOlvE0fkPdL4D0XwrsnC4LYni1PJZHKaR7WUiRFDQ%2BFz0xneXannO5%2F0jEVxnNfe7yE3KeFEapCLGYRim1Bf6l78dx9JddVOpNCwXxrx7qqAeSgHFhoE5KHgbYNSuVcF0kDgHWhz59Oy%2FZuxJMvoUL6pkHf2dRnDdFNmdzX8ITiaXPg%2FOtOKD5TIReeQk9wwsGZwf91KXVbfiJPQ34KdGkumfNu0OC6CAPURh79fkSX3mu0j1pPvkUk2Cwxmfl0kRmGkzVFxpLZI4WMveMSsrKEMrNbOm6TJO5rkHYNARbDHj1VvXb4bawYFtwHC2h9WnVhcOl3UwafN2EosZM%2FVMlSSXT2bDMsiTgjgnsq2FZdPN8Eb5QDPoI2%2Bzz7IZR4%2BQFQeb3tF0FN25svnuGlpBCCYaW9TAggVm2r1bjx3iL7a%2FbUyG1t7cfMot7b94wvcC60wY6pgHA2tgLuiFNhRGcuQ2qIUeGQi3ittBLgzTpupv3mBlLifEKdu6YOH3V2%2FeKIoKuYrUjJHVUd3B13FjYpFPSU2rS8cZwoJn4pO9kuxGc7514chbY6n4Ih%2BQnGWfroVE7bHZkrPioQvjagInob5AGF6M8V78r3ql%2BOvRIhlB6zKR44yW6GCxXd7I20m2nabrr473LcHAm%2FRcF2Kei0TT%2B2crY73l8XDhv&X-Amz-Signature=425d0566af08206388d80564c1f40ea02aedb681b013e16a50e09861fcb73504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN67X632%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIA%2FZzWCHL0RwypPlW%2FLtizcieHCRIPUHD9lVybU7NdPAAiAkhximfGAFswUDluT25eL4BWXGtdk78lyK5BV1pCOXwyqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfmfh7C4zRfNJ2bsYKtwDVR5qf7Zdhs4A7A%2FbeKlTP4QMCwjGBLMaRVyFJ6Ip4dkCV2Vn9sVvJxkL4GLNbh8JSwossF%2Fq60QHJxaGEhM2giTaaaw1YtQJoQtls2lwzvWl4eHLC99MOp6I3ppfpUe%2FhPDDebahCHtBbMQjDfSfKXcpEQ%2BWrJBnKNBjaan8mFgacfrI01ZBPLHdIo5VQhJzpNBxWexLH3DGGAS6cStP2xCCAcrFvvNU%2BBvDqYm5c8QyfP0IsgnnYFTuEUKcenwYAeagzXIp%2Fh945JazoUlMqYbgT%2FC0s9UmCKRPAVSigZC5lWyisinA%2FjsrUMVEot93IvJnrJScUniG%2Fn9%2FnGKZnyR1zgA48YJCIo0UM3ytDjalT8bl8aoWD%2F48cHNYklJbl3MXHZZ18SUZ9iEnPINdN0sBxLX7LjfQrXKYIyA5lSOy8683z%2FRRV9ETikl%2FFZ1Y6zvADAoK0fGAyqbhpR%2BzCl%2FvW3zYDdptbjVRCy2EaDVlCLaBux2Wf57SPnrFinVylTCkPewigNCJojZ7mfpevbT7VP76BcD0dNOhvCrKnDaPOVm%2B4Juas8kHgptZBwgyDhgP6cSSLbMzibUZKaOgvP7sy6pYANktkXPaL0rMBbhP1jrKeRkoW2f247kw38C60wY6pgHpP4jG%2FgF2bJa6wnSgtAcqy1DjUi1CYWc0yPIML9TI%2BZJDdOlb4UctUlUIX%2F84q8Hc5VncgG%2B5j4DkPuu%2Bof22rNIRHIKIllje8aBzZAtbH8LPV0Cpe6JaO41tOlp%2BEUqXIrB%2FaZG9RyVsNZob49oKgeyGR9JQGd6U4l%2BkZcaGZXHHGvEaLvnV9G5vFRbfjF8ICx4uBVJ4L3spXvlYlglRmnvYX1Dm&X-Amz-Signature=e9c190c33a4ccc831dfd87cddf9ed7bcb69661410ef4f2a718e30f2e92b3f372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

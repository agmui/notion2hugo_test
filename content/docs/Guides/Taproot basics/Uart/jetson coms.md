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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OFAOIDR%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDdpfbpbyenE6sn207Xzd0qBppYgBxYzx4MB202ZtabMAIhAJcWrJU6B57o9Hu2knCjRkC12Vso9crGXnBQQH18u4h7KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1sLSlOs03iP8sC3Qq3AN%2BEjGYgpF0h2ivya76h8oMY4LRj4o978ZsWCB7roWH%2Bi%2F3%2FcON%2BwQ%2FuAZO8GaHcKpu47aLzmCnHFbJpOzh3WmUZFCkOK4BDSDJTSzY8gWo5%2BaQiO4iaTZKXLZUJ3nY%2BRXfs8DPORao5pVV70AyLEo9E5m5Sksx2pqQqwI7QUDBCUjq%2FuiyUQ%2B5dnfAf%2BtJeFDTAmGqSPfc6j0QVVXBz2qUrWdRwc55%2Fqqd5bd%2FsJA1aSsHsXsB2a9DtruzA%2Byo4UN0TDS1PbUowZA76LWnyi17rebd6GEff7gOdtBi0j5rEa427qJsicHCS3gp8n6bYM0cKNy0KtQZ6l8qT2f3p1yEUl0j%2BPjkTonejojtw3%2BFm%2F4KEk%2FTDTDvAhuC4hEyN0xyfUmIBHsPDwOcVIyANIRvbcXFUFMT58VDe3PWIhwOoGxooJOX%2FE7GF4tjz%2FoMebm2VzD1PM5Od1v3D8%2B4MD%2BwkyvqmiHxhQweCpZ9BFnrX%2B6YhcRXivZ65qFz8L7CE7R2SYQOX5FWCTme2iV7PPyiaEBpiUMxJ3fuLuzNhwcLtkKfzwOr7gyU84%2BcR9zKryNB%2F2c6QGG5rsyBw9ynzCPm4OIUjAf57BEf39voU8ByTT1BaQDFodw2Y%2F7VqTDfzYTFBjqkAZl%2FFvxT4rLUWU6trnILxkh%2FBMhWOY7WMvHEK3IgR%2F0%2FynBQ8zj1R%2F%2BW%2Fw%2Bi7N53DGoZen%2F3LMMZ6rvYJeVA%2F1L1mPX%2F3QJJiOzoAgr1r1vaCbzu509jKpYJNdCt%2Bg2%2F79G6Ua9A8HhRPhQlneuYap7Xy%2BdWWwWQAghte9hE3gFVOqNWbAEn9zKsId8KqnYUdFw5ZQRONDL5bHSDRbVwqQYMDZqn&X-Amz-Signature=27a9ac7d2af50a89a64f17a15f87e874fa670bc83e56977ee2d3c4e5cb830137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YLDRDXR%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCyPnczWzDaD7a9Y%2BC%2FgWM19tfBS4TFjFDqevO%2BQOHfpwIgSZdNnYGgXDvmdqOSyn0YaQSzGWG12h%2FoNi7ykz34uo4qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEGE9FNBWo0HKGyXyrcA1JxXyOhXefEvnsioqcVC8pte04YRYQn%2FTHwvur%2FxURFjTr2L724u63Rc3dq79c9MT0%2B8A5DYfbGUU%2FW04lbhyu0s2EvQmLCqe7Z9r043CD%2Bnra%2BI6ABopcYcFoAtffuu53SwIvvHhvSK0USToKPqaV4W%2F%2Ft0UiGsHWIM86kqGUoHQryjQq5cfYIv1aenb4UkXcNX%2FLvfasRs4TaJnAogE3wE8yA9TCPu3ZWcH8rR2dVC5ykbpjUimCGWo8ru0MAJJt7FQHK1YN2a9aJcNl2LzHojVOGN7i1Ae38S6%2BHHhazc8%2FnKBySEK25mKIIIOdWhWFeU5c52oVNhJLYRtwMnC0c3fKx0ohOb8DxKGU0VWBCmHplk8MFg247YUDjoeEBOwO2mADdNAFBsMx3PVVT%2FN0CcI9bKIcLtRe8113wgaX3%2B5cbXKgTnv1cFaoC6Jy%2FCdsREeZMHSpWQj4B6pCEgdxq%2FJsJ605f0kolNLc4%2FWO71EDCFBleWkAs2y1z1C49BybNNf8S03cxM80Vj55gJ1hyhgMMIjgL3Na96MH35YU0IdiHqn5qGx1MfunmIaSQfeEPszVXkVLG95abpDSNJ1oDJedIMNRUt2sVdo8H9EmTMt0StRQ0kK%2BCNO1jMILNhMUGOqUBNXbtoHNNwmeYOloyL0j%2B5JHmN9Z%2BghARXWNa2k0ABM0DZAE%2FtagFsd6jyNkNUqye6MT1SR3kGy3ZPenla3dh9r1m4ULlcQd5bRlYvJnrifEejrw2xRP4dclItzn23a8fSAS72ZGMtxcMOELtXPK9ngLBp79IwAsxHcsdanAO%2Bf%2BRi5OQPxsyBWvbkdPoxkVDSwcgI8kM5XygpCjhcsj7%2BjSKKhMP&X-Amz-Signature=8370047f19250fab070c776624ad8381eafce19a3476c8b707d31c56eb09f4dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O5TU4XF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCroJHrC9eOWUgIh7uW1N0Lv2IPNBFq%2FBGFYo3miSzsrQIga9tl11K0aCm6jq3KoDxSlUlN5sR5lfTPRxJ4wdMRMoQqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfHUx3sBIqAf1eVBircA%2FCa7TTvc915sFusBWXDDJtQJIWlycpk60EeNi81KAK3xQvR%2FlimDxDfmBslrqUaQKVnSa7a55cZJ49nIgJsUtIU87S%2BGzlgN4j%2F25HUZYg9PHA8FGNKIoyjn4s3lHB7ICGe6VkM9BaUu1lNIWzkVu0VqDP60s5YA6iRTNxFf0j2lq2pJ5qX8QbJ%2FR0qibKKpEhYO22XHu%2BEK2qnzQq08vJZEfzE%2FfANYhNxzfhYeb8aSuzYDC8IhO2xl3AOIijqrfAskpKrWb3bjyVAUOQha3Sh4RWu1EAu9%2BJcb5fYCSUFCGbRnLHt37%2BWR62JVjJnlqY3m%2BT4q812t5g0YTxhMD3M86bmH%2FJSp3JYbv7QpvdxOELSk%2FwA7jZipTLmm%2FhmygyPS0s0UY4vjV1%2BpyXCXEVbew7Y2RS9ZztQnGdi43fiOXhFwOH3qKfWNwXNhSbQ8Mr4Ack7eEV45a2uvt8uAPftuljZb1CcjbNIzXMqA7VURpB%2F1qQYNFr5OkDlM5t8kC2xpnwUhoFOvEbO8yQ4QWv1RgnxHZdCrooq%2FnFToriMNlIXk7UgyGiSkpmWseDA4cPhfvlBgdAXVQV4BS2FGpFH8TNZaxntwRTS0jIpDpYJouRdHiPPbpihhyPHMI7NhMUGOqUBpzEWX8aZdRx9SAPA79b%2F05%2BVUNzhHdRCZhPXAWqLUgpZDhLJVsHstoxV5JVPlN8WMyF3M%2BzKBU5ir66306mUjT8ZFW%2BOJR2ubtODJFVtKWx3tO7I8xYG9hpLiHVSX0o6tt3Q3AfzAm3Yt2Wo4iBepeFjYFZUaO1MEkCH66%2BZ5Lbfktkd%2BJ8rgyyiVRUV8X4eXUTXAKxEw6O1Lto2n4D167cZBw%2Bt&X-Amz-Signature=7cd5905ba1d6e2b477ea769b1114ba0432a099395d86773317ed4d2abc4ccbe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O5TU4XF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCroJHrC9eOWUgIh7uW1N0Lv2IPNBFq%2FBGFYo3miSzsrQIga9tl11K0aCm6jq3KoDxSlUlN5sR5lfTPRxJ4wdMRMoQqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfHUx3sBIqAf1eVBircA%2FCa7TTvc915sFusBWXDDJtQJIWlycpk60EeNi81KAK3xQvR%2FlimDxDfmBslrqUaQKVnSa7a55cZJ49nIgJsUtIU87S%2BGzlgN4j%2F25HUZYg9PHA8FGNKIoyjn4s3lHB7ICGe6VkM9BaUu1lNIWzkVu0VqDP60s5YA6iRTNxFf0j2lq2pJ5qX8QbJ%2FR0qibKKpEhYO22XHu%2BEK2qnzQq08vJZEfzE%2FfANYhNxzfhYeb8aSuzYDC8IhO2xl3AOIijqrfAskpKrWb3bjyVAUOQha3Sh4RWu1EAu9%2BJcb5fYCSUFCGbRnLHt37%2BWR62JVjJnlqY3m%2BT4q812t5g0YTxhMD3M86bmH%2FJSp3JYbv7QpvdxOELSk%2FwA7jZipTLmm%2FhmygyPS0s0UY4vjV1%2BpyXCXEVbew7Y2RS9ZztQnGdi43fiOXhFwOH3qKfWNwXNhSbQ8Mr4Ack7eEV45a2uvt8uAPftuljZb1CcjbNIzXMqA7VURpB%2F1qQYNFr5OkDlM5t8kC2xpnwUhoFOvEbO8yQ4QWv1RgnxHZdCrooq%2FnFToriMNlIXk7UgyGiSkpmWseDA4cPhfvlBgdAXVQV4BS2FGpFH8TNZaxntwRTS0jIpDpYJouRdHiPPbpihhyPHMI7NhMUGOqUBpzEWX8aZdRx9SAPA79b%2F05%2BVUNzhHdRCZhPXAWqLUgpZDhLJVsHstoxV5JVPlN8WMyF3M%2BzKBU5ir66306mUjT8ZFW%2BOJR2ubtODJFVtKWx3tO7I8xYG9hpLiHVSX0o6tt3Q3AfzAm3Yt2Wo4iBepeFjYFZUaO1MEkCH66%2BZ5Lbfktkd%2BJ8rgyyiVRUV8X4eXUTXAKxEw6O1Lto2n4D167cZBw%2Bt&X-Amz-Signature=d3a9e6a17df40762e179202bca27ac61e43487d8cdfb05cf6e8b6d47efe34cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YLDRDXR%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCyPnczWzDaD7a9Y%2BC%2FgWM19tfBS4TFjFDqevO%2BQOHfpwIgSZdNnYGgXDvmdqOSyn0YaQSzGWG12h%2FoNi7ykz34uo4qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEGE9FNBWo0HKGyXyrcA1JxXyOhXefEvnsioqcVC8pte04YRYQn%2FTHwvur%2FxURFjTr2L724u63Rc3dq79c9MT0%2B8A5DYfbGUU%2FW04lbhyu0s2EvQmLCqe7Z9r043CD%2Bnra%2BI6ABopcYcFoAtffuu53SwIvvHhvSK0USToKPqaV4W%2F%2Ft0UiGsHWIM86kqGUoHQryjQq5cfYIv1aenb4UkXcNX%2FLvfasRs4TaJnAogE3wE8yA9TCPu3ZWcH8rR2dVC5ykbpjUimCGWo8ru0MAJJt7FQHK1YN2a9aJcNl2LzHojVOGN7i1Ae38S6%2BHHhazc8%2FnKBySEK25mKIIIOdWhWFeU5c52oVNhJLYRtwMnC0c3fKx0ohOb8DxKGU0VWBCmHplk8MFg247YUDjoeEBOwO2mADdNAFBsMx3PVVT%2FN0CcI9bKIcLtRe8113wgaX3%2B5cbXKgTnv1cFaoC6Jy%2FCdsREeZMHSpWQj4B6pCEgdxq%2FJsJ605f0kolNLc4%2FWO71EDCFBleWkAs2y1z1C49BybNNf8S03cxM80Vj55gJ1hyhgMMIjgL3Na96MH35YU0IdiHqn5qGx1MfunmIaSQfeEPszVXkVLG95abpDSNJ1oDJedIMNRUt2sVdo8H9EmTMt0StRQ0kK%2BCNO1jMILNhMUGOqUBNXbtoHNNwmeYOloyL0j%2B5JHmN9Z%2BghARXWNa2k0ABM0DZAE%2FtagFsd6jyNkNUqye6MT1SR3kGy3ZPenla3dh9r1m4ULlcQd5bRlYvJnrifEejrw2xRP4dclItzn23a8fSAS72ZGMtxcMOELtXPK9ngLBp79IwAsxHcsdanAO%2Bf%2BRi5OQPxsyBWvbkdPoxkVDSwcgI8kM5XygpCjhcsj7%2BjSKKhMP&X-Amz-Signature=80023500f6b0308de6ff88f3878794a82d6fd05f706ec3459f4faa98911ada99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YLDRDXR%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCyPnczWzDaD7a9Y%2BC%2FgWM19tfBS4TFjFDqevO%2BQOHfpwIgSZdNnYGgXDvmdqOSyn0YaQSzGWG12h%2FoNi7ykz34uo4qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEGE9FNBWo0HKGyXyrcA1JxXyOhXefEvnsioqcVC8pte04YRYQn%2FTHwvur%2FxURFjTr2L724u63Rc3dq79c9MT0%2B8A5DYfbGUU%2FW04lbhyu0s2EvQmLCqe7Z9r043CD%2Bnra%2BI6ABopcYcFoAtffuu53SwIvvHhvSK0USToKPqaV4W%2F%2Ft0UiGsHWIM86kqGUoHQryjQq5cfYIv1aenb4UkXcNX%2FLvfasRs4TaJnAogE3wE8yA9TCPu3ZWcH8rR2dVC5ykbpjUimCGWo8ru0MAJJt7FQHK1YN2a9aJcNl2LzHojVOGN7i1Ae38S6%2BHHhazc8%2FnKBySEK25mKIIIOdWhWFeU5c52oVNhJLYRtwMnC0c3fKx0ohOb8DxKGU0VWBCmHplk8MFg247YUDjoeEBOwO2mADdNAFBsMx3PVVT%2FN0CcI9bKIcLtRe8113wgaX3%2B5cbXKgTnv1cFaoC6Jy%2FCdsREeZMHSpWQj4B6pCEgdxq%2FJsJ605f0kolNLc4%2FWO71EDCFBleWkAs2y1z1C49BybNNf8S03cxM80Vj55gJ1hyhgMMIjgL3Na96MH35YU0IdiHqn5qGx1MfunmIaSQfeEPszVXkVLG95abpDSNJ1oDJedIMNRUt2sVdo8H9EmTMt0StRQ0kK%2BCNO1jMILNhMUGOqUBNXbtoHNNwmeYOloyL0j%2B5JHmN9Z%2BghARXWNa2k0ABM0DZAE%2FtagFsd6jyNkNUqye6MT1SR3kGy3ZPenla3dh9r1m4ULlcQd5bRlYvJnrifEejrw2xRP4dclItzn23a8fSAS72ZGMtxcMOELtXPK9ngLBp79IwAsxHcsdanAO%2Bf%2BRi5OQPxsyBWvbkdPoxkVDSwcgI8kM5XygpCjhcsj7%2BjSKKhMP&X-Amz-Signature=c55712c8afe138a4bc5e4d411e701cdb02247e37f0b5018094fdfbe8f8b1dc8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UE2CYXC%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDqU%2Bz9T8LXKMGMJgp4bUBmyWdJ4nsoSkl3ioi%2BmwRasgIhAOQbB4fwX512Dd78svu9%2FHVacGgSJUZWSGjDmvIEw84oKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6zG3Ta1osKrNBcIAq3APN0T1BsMpaDhsTrWQoJZQ8K2Ql6QWIBtnaTYnwULHyw%2BWL9Q%2FNOfR%2FsLGIATi1Mhb7ogJSm5loYnYLNEEPsq%2FKPcdhmMWe5Ri3jnG59R6ydJ4%2BscqByu62Nj9w%2Fe1OmTTVLOaYNVLw5v1RO6PRDpnbvZJZIYoJyhs7HYMGdCwYXFkRvb0z9i%2B0ENXIpGfW%2BX1mrvc%2FIAnbLU%2B64o8lRW0YWQJzFkPqgYFG%2BjAsoqVo6jfMgUD6Phr64GLDlDkHzxz4M2QYZtoI75iMVBO6BV81h5nd%2BA%2BN1McLQyKUBgwVuJ%2FXBEe6%2F5q44m7zr9prUC7mhiD9V3RC9YpoS8MdoS0DpYml0Z2lm6J%2FywJaZ77FOfW0D9D9783DPm9BHP50%2FIM%2FLSwHcpN1WbHf%2F0abNkDhBgAfP8VpwDWT03J3YCrCauy6yrP9B4%2B6lBoT3VS6jiImBrR9IrqpDjrniC3uakagWMvmWI%2B7cZxzDXpwFGFkK6D1E1wcGqZURhFvFgJOIW3wejG%2FLRfHiMzTNznfUqxErjmNZ5WarJMrzfOps9kjnZ1oE8tNb5PGoRzqpUTJL0xWA4yOW2intXVJkRoWJ1%2F74BdKb66u1g1B3hTNOU20fgCwmd70Jgax3eXPBjDuzYTFBjqkARCePIjL4z9ZY7Dz%2BCXSB%2F301COFMBzrv1r0mZsTaWXQWD%2FRonnqb%2FGd6XpyvYJRZmEGnlHVyTJIfW8tORElURX7bPwT9jysly2a2yvGr3fbMa8gO388ObUcNYH2UAGKyEpWg%2FuGzbs%2FGbbx7os5UCXtwKpbQ49aifv%2Blxwpvo1NAY2DgO1Y3%2Fd4EEpBGa5upA4wkhkeSrclBdtIwzVvKX0yLk82&X-Amz-Signature=382cc8702ad274b7ca6e63ddf0d2a049600c5ef9dec4a8a52c2b9eb5582941cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

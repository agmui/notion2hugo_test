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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6H4MKIL%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDQhTt8%2BZ5aA3A9t8rS7%2F9%2FQkYSnygjG0NRQr69m1n25AIhAKL99z9POm%2Bg%2BJ7qJo8f%2BIyFcrZoOHCXeDYy4OgT4E7UKv8DCAIQABoMNjM3NDIzMTgzODA1Igz7GfKATdV58AC6sTgq3AOKAwGi1%2B0pCPhdhdeBhGHk%2BJj8uSIV45PJtJiP3JfAwblIcKwQIEPa61sHkVCULthBf0y4Q6qr%2F5n7hnY%2FrjL8oOhscZcPUrV84%2BYz3pTM6D%2FkZRl9n4NTe5jOdbNFP244lRIoArXss65qlceCKQ5lOSkjTXk05rymU79EmurCzLM2kcpnznu5VdCUnj9blcObhxoGyCJES6atH7rAx3jM%2B7dusIr8tW5WxbKO3SzEsaG2SRVpHNxol9cBcbdcQTP2VTtXOTSEE6magjJT1eiWL6OzkdDQE9hxdKIHODykvGwf%2BA6dmmmkvTSlhm5Uw8aHj1AC7O6X1Ow8ucmYfswpdyhQGub5dzXkGKea7zIfclpmDBXV8UJpMc1qNKNcmAKxswhGA6g3GNT33h2IRm7yt0Sa6Cva%2B2hf9ahAuxWgoj6FGt%2BYM0uPATvY0fOfMotFQmFfXiXah%2FsrHthf76nqp5qtIinogiq0g9i6RwIMGUhGksmO5mEqezwSoKxCM%2FT0KCsN%2BAHHnPHk51paBJkYWIpEdmQkkXUy8vmTu%2BusaE7harhhDmzqdoXWWdqNcEk%2BWirAc5%2BVVZUN7ENVzIpg7Rv8VCZAnzMj2kdnrZXv3CcWczdFiwToefGBBjDrpvPQBjqkAZ2mlS7rWx66X2tiJvxsTXQzYTy0cM9CKjoOCK7LfeuaWSptpozgoWUPg9nGwxl6XlrF9%2FTGhMeFOdKvvcUlSGs4d3amsfp8B64xPhWDdKP5SU39BU5EBnTk780b4f2JPpNo7XhCLRlahAg0qMLip9u%2BhR1dVCFzHwxEYLFKguhEOaqd02%2BBU51DLdm1ScD3%2B2MSY4dNO1WJ%2Bvhx%2BVrD%2Fg036txL&X-Amz-Signature=8f08623fdef571f3d2b0fbdd53d43be193a03830f9d07ce67836b26deac73323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR5OYRSE%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDIbIXqhpYa5B6bcLCCDyAetmRWDAGDrdRY68BsXH2wKgIhAN44M%2Bj44pjA1m5CNiU8so8TJN%2FmSbe%2Biit7FSsYhF0WKv8DCAIQABoMNjM3NDIzMTgzODA1IgzBJdmot4Q7zmK3pwQq3AMmJUcLCtST7NtwbDJX4zBUKeqCBmULGfozcEFzmiXNvUKHAEnlkRbipEc%2BNLeKAlm9vOkVuJLpDjIZnVDm%2BEYs8SNUWyEtCqJ7xcsmRq0i5zyjVvAlpiE8u1strzw1a%2BP06C5nAVkldD0b%2B3Hvt9bm%2B5YIDPG3jYXNnac1TByx8ynbm8RHzpdMKREAZXmDrBPXIu8oA%2BOnZAtEjOP4zMhGq4ZODtTeGDHdk%2B25WkxbFPXJO8iJ9HZJ47SXbwJuxOCVChQB6kn7y5XxStD%2BKNjEdMeXV1r79HYgIa3IWvtOVhFgZtEP41NFQct1kXj%2FvaZdTUzNeXRm99iLI4EFc%2FdP8%2F9Z0FPt3wmc1GcuLaMwzi2ofoqeYCCcckA7QA2szK6lfVTPxvmWTQeeadWmWcPG2k4oThWPfbz4Cm1MSi%2F18uQNRfU5HdTic4A%2FwZQnPnrtx%2FUMcvmrA33vuJXCoz3s%2Bq0RBn7N4waOBGzAsv85HzHfUezmQPgOXVhU7eiM0eES11rWM6MPhY2hgr6PMyiF%2F2tbTpPu%2Byw%2BOljXQALTniuIEn56FfWokxTDlfkakcrsZS3rxU2vTqzqekBlLPa3S9SfVVqBOaECq7YUruOBSe2TRr883vzZPVISmTDUpPPQBjqkAWdH7lFp2WdjZ5Bj0VBGNBISQ5mCP7g1tdBPQZpW0ZtQCOl4yZ0E5LCu6VusMBIqsGyA8aZ%2BpItfokMn%2BWavqu7Tq4tHkzAn3do5YlTloxzBf7ZVtPa%2BFcxbHwWroOIYU9tosRZs21oBo6S8sstuHrkKKBW0D37I2s8V5FgNqcaEZgHAWed2dSuV1CXl%2FvaBm5hFBVwtLljhWMIgid0XEZBHUtlw&X-Amz-Signature=d7fd72b4b921e564c1de15cc7f0d4594dce84ec6dd06cec8294f9dd75d6e45a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSAQQJG3%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGukGJG%2FkqKbfZSjukOJEg9UP4VMeWXcMk4MjKH5IW6cAiEAn54scsW2JVyF32OnXNvXLTHKdzbkYlDhngiBb2grMewq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKAPRYBXKzyeMB6TsyrcAyp5nJ4sxY3KqZoeuelo4YE8LQY4jB8tgpHuTIRP%2FzjZ3VpBl%2BMsrOEwP%2Bw8Q8OmoM2bpxyIOkbJ9pUBirFmTNXPtviLe5F1XYUIMpdj4FKgmJgjagZ4suZ3m9e97hqKrbUdXxY4YGpGa91nNpTup5sL1HlyFNtEhybpzovWTCf6YJvWjnKgDurTMRZgw8PFs6bzWB6X7gdoqQwAQc28C%2B9SpQ%2F3jU44gD25g0lCzGBGHxv3VJXSrhWa7aZc0O3fb4WCEaiqrLYar7iygBVOh8QUgST3TD9r4vFF%2BuXxv5oE5UXWndLzepYmkskYRxfPTX77Tj4EXOZG69Pkui2YLm54nQtXX4AH78usgfhgF3Ywh37lpDxtxzrcq7rkZ6ioDE3u1JBeQJwOv1XUHgYKInHQchGJzY2z36Ujuxg4nmeZiBzvUf1sGwWPnTxUpXabnphUED%2FhemiJK9KH6d8voTn48MR7F0EXWaYYLU3Onaa4SoTl9455lvo5MYJJ8fXHQVa87h0K0MK6vmeviaMMOAx1kBJl2wrf8lcHr7TVsfi5%2Fh4qHxlInJzuE7%2FkM%2BkuvsD62iOA%2Fu7AbZpvmUhU%2Boyc5u8bSMUUjXjcvXpEP66hBFHs%2Fr%2BtH6DfAGkMMMen89AGOqUBIyuGjRExgG12ObYuRBh5ojY13KepogfY%2B5kPKPg2N55Bwa%2Fnbx6DCyYv%2B2WW8KOMm6rMTTHnE5ks%2B0ZO8s0WWvnaRqkAA%2BGCLH2MWnD8w7pvff7F4WMhxmzKE8rTggxJY%2BMaGGvJxzT3bCJ%2FL%2BWVszbWjXal38SGgOQkkg3P8gohM6W8iXdO8NL1%2B%2FKdia70Lh5FoihFE%2BxxSvK1SmFlFri%2FLcfY&X-Amz-Signature=0e95680a9ff7c08fa7e1a70a5a38a819ef331ab642c878de29720863e86090b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSAQQJG3%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGukGJG%2FkqKbfZSjukOJEg9UP4VMeWXcMk4MjKH5IW6cAiEAn54scsW2JVyF32OnXNvXLTHKdzbkYlDhngiBb2grMewq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKAPRYBXKzyeMB6TsyrcAyp5nJ4sxY3KqZoeuelo4YE8LQY4jB8tgpHuTIRP%2FzjZ3VpBl%2BMsrOEwP%2Bw8Q8OmoM2bpxyIOkbJ9pUBirFmTNXPtviLe5F1XYUIMpdj4FKgmJgjagZ4suZ3m9e97hqKrbUdXxY4YGpGa91nNpTup5sL1HlyFNtEhybpzovWTCf6YJvWjnKgDurTMRZgw8PFs6bzWB6X7gdoqQwAQc28C%2B9SpQ%2F3jU44gD25g0lCzGBGHxv3VJXSrhWa7aZc0O3fb4WCEaiqrLYar7iygBVOh8QUgST3TD9r4vFF%2BuXxv5oE5UXWndLzepYmkskYRxfPTX77Tj4EXOZG69Pkui2YLm54nQtXX4AH78usgfhgF3Ywh37lpDxtxzrcq7rkZ6ioDE3u1JBeQJwOv1XUHgYKInHQchGJzY2z36Ujuxg4nmeZiBzvUf1sGwWPnTxUpXabnphUED%2FhemiJK9KH6d8voTn48MR7F0EXWaYYLU3Onaa4SoTl9455lvo5MYJJ8fXHQVa87h0K0MK6vmeviaMMOAx1kBJl2wrf8lcHr7TVsfi5%2Fh4qHxlInJzuE7%2FkM%2BkuvsD62iOA%2Fu7AbZpvmUhU%2Boyc5u8bSMUUjXjcvXpEP66hBFHs%2Fr%2BtH6DfAGkMMMen89AGOqUBIyuGjRExgG12ObYuRBh5ojY13KepogfY%2B5kPKPg2N55Bwa%2Fnbx6DCyYv%2B2WW8KOMm6rMTTHnE5ks%2B0ZO8s0WWvnaRqkAA%2BGCLH2MWnD8w7pvff7F4WMhxmzKE8rTggxJY%2BMaGGvJxzT3bCJ%2FL%2BWVszbWjXal38SGgOQkkg3P8gohM6W8iXdO8NL1%2B%2FKdia70Lh5FoihFE%2BxxSvK1SmFlFri%2FLcfY&X-Amz-Signature=c144945fc3355b0b2cdbb1f369a55c8f452dda0e288bc1f0dcbdf63919ab4cf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR5OYRSE%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDIbIXqhpYa5B6bcLCCDyAetmRWDAGDrdRY68BsXH2wKgIhAN44M%2Bj44pjA1m5CNiU8so8TJN%2FmSbe%2Biit7FSsYhF0WKv8DCAIQABoMNjM3NDIzMTgzODA1IgzBJdmot4Q7zmK3pwQq3AMmJUcLCtST7NtwbDJX4zBUKeqCBmULGfozcEFzmiXNvUKHAEnlkRbipEc%2BNLeKAlm9vOkVuJLpDjIZnVDm%2BEYs8SNUWyEtCqJ7xcsmRq0i5zyjVvAlpiE8u1strzw1a%2BP06C5nAVkldD0b%2B3Hvt9bm%2B5YIDPG3jYXNnac1TByx8ynbm8RHzpdMKREAZXmDrBPXIu8oA%2BOnZAtEjOP4zMhGq4ZODtTeGDHdk%2B25WkxbFPXJO8iJ9HZJ47SXbwJuxOCVChQB6kn7y5XxStD%2BKNjEdMeXV1r79HYgIa3IWvtOVhFgZtEP41NFQct1kXj%2FvaZdTUzNeXRm99iLI4EFc%2FdP8%2F9Z0FPt3wmc1GcuLaMwzi2ofoqeYCCcckA7QA2szK6lfVTPxvmWTQeeadWmWcPG2k4oThWPfbz4Cm1MSi%2F18uQNRfU5HdTic4A%2FwZQnPnrtx%2FUMcvmrA33vuJXCoz3s%2Bq0RBn7N4waOBGzAsv85HzHfUezmQPgOXVhU7eiM0eES11rWM6MPhY2hgr6PMyiF%2F2tbTpPu%2Byw%2BOljXQALTniuIEn56FfWokxTDlfkakcrsZS3rxU2vTqzqekBlLPa3S9SfVVqBOaECq7YUruOBSe2TRr883vzZPVISmTDUpPPQBjqkAWdH7lFp2WdjZ5Bj0VBGNBISQ5mCP7g1tdBPQZpW0ZtQCOl4yZ0E5LCu6VusMBIqsGyA8aZ%2BpItfokMn%2BWavqu7Tq4tHkzAn3do5YlTloxzBf7ZVtPa%2BFcxbHwWroOIYU9tosRZs21oBo6S8sstuHrkKKBW0D37I2s8V5FgNqcaEZgHAWed2dSuV1CXl%2FvaBm5hFBVwtLljhWMIgid0XEZBHUtlw&X-Amz-Signature=9a37440175222a8c0ab3eff5299b16e9ee44aa1705906d2a567e92ad72d7b8cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR5OYRSE%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDIbIXqhpYa5B6bcLCCDyAetmRWDAGDrdRY68BsXH2wKgIhAN44M%2Bj44pjA1m5CNiU8so8TJN%2FmSbe%2Biit7FSsYhF0WKv8DCAIQABoMNjM3NDIzMTgzODA1IgzBJdmot4Q7zmK3pwQq3AMmJUcLCtST7NtwbDJX4zBUKeqCBmULGfozcEFzmiXNvUKHAEnlkRbipEc%2BNLeKAlm9vOkVuJLpDjIZnVDm%2BEYs8SNUWyEtCqJ7xcsmRq0i5zyjVvAlpiE8u1strzw1a%2BP06C5nAVkldD0b%2B3Hvt9bm%2B5YIDPG3jYXNnac1TByx8ynbm8RHzpdMKREAZXmDrBPXIu8oA%2BOnZAtEjOP4zMhGq4ZODtTeGDHdk%2B25WkxbFPXJO8iJ9HZJ47SXbwJuxOCVChQB6kn7y5XxStD%2BKNjEdMeXV1r79HYgIa3IWvtOVhFgZtEP41NFQct1kXj%2FvaZdTUzNeXRm99iLI4EFc%2FdP8%2F9Z0FPt3wmc1GcuLaMwzi2ofoqeYCCcckA7QA2szK6lfVTPxvmWTQeeadWmWcPG2k4oThWPfbz4Cm1MSi%2F18uQNRfU5HdTic4A%2FwZQnPnrtx%2FUMcvmrA33vuJXCoz3s%2Bq0RBn7N4waOBGzAsv85HzHfUezmQPgOXVhU7eiM0eES11rWM6MPhY2hgr6PMyiF%2F2tbTpPu%2Byw%2BOljXQALTniuIEn56FfWokxTDlfkakcrsZS3rxU2vTqzqekBlLPa3S9SfVVqBOaECq7YUruOBSe2TRr883vzZPVISmTDUpPPQBjqkAWdH7lFp2WdjZ5Bj0VBGNBISQ5mCP7g1tdBPQZpW0ZtQCOl4yZ0E5LCu6VusMBIqsGyA8aZ%2BpItfokMn%2BWavqu7Tq4tHkzAn3do5YlTloxzBf7ZVtPa%2BFcxbHwWroOIYU9tosRZs21oBo6S8sstuHrkKKBW0D37I2s8V5FgNqcaEZgHAWed2dSuV1CXl%2FvaBm5hFBVwtLljhWMIgid0XEZBHUtlw&X-Amz-Signature=3f3a82f8d9717b6785403336d7c58bed0dd276471f9b5d7a7bf6c1250440f170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZAQUC2Y%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIBSijk4dinJdOOe4LpLLczcxNnbsdZNrGk9rBRGEkgbXAiEAtVvt6mzv8h0mIuNo2UR0w2IDZnBRArmRkziuvNOqwhUq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDFA00Z09hxdQyzVKpircA75RWLNOAdAyrBS1FinOVD4m5iiw%2FOKXt9msnkRQiS0SG23NuOgg%2FH%2BcST2PD0EQULLws4NXsBVVihQy0clS3%2BMt8c2eaJWbx1%2FGnpGthjkzh8cGkdRc5Ty8c7ahiaY4S%2FA24oXCm7Gavf2UCEwjhSATWjOxyiThnNx4HpBpxMdDzybrIqxFN5l5unB1DeW2J5gKINplV1LXDwTE6BjxaOVUOnjZy5kuxQjlqtitxcBo0WdJOraDATOS7X1fHtQ%2FFK7H%2BpaHiwDmYJQs17LinlEYv7tX8S2XDd7L60REkf5NDi8cSgp4zUQMbNzG%2FI9JV2X8vYzPSQlNBvAZDqoLWmbO8ltPFdjR5ePJ7PAtK%2FGk6MDkaRYJOaw72BAycMDMkG3Au1bhmLUiVA6DXAl0EPqBFUc2fxKeuAIO93V5aZzWeuxdpPiN087nNSiEPTpoTb7KP0FBz6wEIpwTnJPIPN1W6%2B5DG%2FNmk8RbIiqInJDGxQHXFIXNVORe1Fl7pqQsy7f7zPGnU1mr1K%2FWaxwMgpHJaMfRKcWCOTgW94U32xsmUVVDVj7UFl%2BLc1ZHSVe%2F%2Fln0XTsODqxoN30hnjb93JpadljB6kjHan32AOdN0sAWHsjbQmjh%2FTn42pWmMJWl89AGOqUBUxJuz9cAJgNg9mNg%2FK4QaCmMWCJnYmRBPDaPSWti0HJZDFK5XaNW5VFvl%2BBw27miHlHLmIxHCxlhnQTC92KayA1fcLhDBIRUiSXTWeEB7FfIglWZBcbGrM5B7pQrNgD%2FgC6pZTe%2BEiv%2BVDdZCyMf%2FmpSokaJ8Qj96m1nyhCAT%2BuC6So%2FcW%2B185WGEggtlmE8uJB%2F4smlhmUuCosAaI6%2BDoBGrZAk&X-Amz-Signature=547ddf3b4df6d65fd23f4abf0642364b237cec86d5bbaff1eff00c9b5f87171d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

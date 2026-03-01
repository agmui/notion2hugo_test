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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQ3SUUC%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3pufrXriWZ8k%2FcIcZfL2CRxsZiCSloRZgzPjZT7ZEgAiEAvZkOk1wxkmzXUF%2Bko2vAbDplG%2FYPr5sn2Sl%2BEOHAmqAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDP8fsPl0b90wt8hzwCrcA9In1vppmaQzpwLSXGLvE%2B33GQedjsDUHYJSeVKD9lDtiIfMKxzHqXVGGnMc3NL%2Bw4ZIKslxq%2BiZY5E96HbkjTqRhRuo%2FqR1Ey%2B7GAdo7x0u84i420cWGhxDSHdIOvMUvZLWpGgcrBbVamhNi7aJhWM%2F7To7KflAo6gKlt8gMWRie5pMioEFowOesHuBP9r5%2FQT3pXXAX34d1aZN3%2BVleWxTsg93NV91DN7ThDJC6YXhJ1ObgsBJU%2FEibJ3vpka%2FilrcXrPm7Sb9NIfmMExVCgwaEF1SV711nMd43%2BC3uC9k%2FFwA9%2BKkYsX6SmbZ1fZEOIZQ7xykaXj3hRgHI1umlEm7uINhexXHmVLjmJHTeW9WW0l0qDa670mTdRIYacY0uybwN8znZO9Lm7D6h1gUkuKfwVOiEg5d3DXR5iIxFrb%2BV96J%2B22qoRgHRv5%2B2LCJWVNy2QgNJHcyzhqYe1m%2FtDn%2BJano00EOuDwi19w2%2FYqBghXk0TRvuf4XDSj54NJVaMd6YVT8R6%2BUliqagxEGYb132YbyCIxTVfi4xwg31UO9fTuORF8mdm%2BUvZ6pwcTp9WqYyz21FDhk7fMLcHG%2B9O9ng7q1Tud%2FGU7%2Bg75MS8x%2BiTTBVNI9kXj%2FBRCJMK6vjs0GOqUBthWvoyyrHaefKAAS6X8UY7dccKaveOV1qRQdwAwycGNpantDejAi3zExfpwgmPF3P5OITg5HJivsDMFlAhbtVdiHKFfUbJ0TZWs4KxlUmRPLoiJYkPnmetx0We5gIEhtmUMrYzgeGi5ggztOIeyMio1SKatgO3mDmyJMVi%2B571dk80bJz6qUjscIlMS%2Fz%2B72V1EVD0YoCr1xJ6KLNEkZJNREoUh8&X-Amz-Signature=c2f763b0999504eb78ad8952fef1f2ca44c7700a41977ee75b3af7c0a9bfba60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D2X2JV5%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxYeN638kTXjZloAP4PHOhWzggcCkJ%2F38UAd4FJDbptgIgMRDdf6KviUeY8IlP6Exoe%2BIYTqK72rvdBDGO0tHT0ksq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDM9D7EhzqXcq6Gc5rircA1XXfcMtGhpDHGCs680UiwtLW%2FVQXjyw8nM338hlKm8uojGJZ39UvaoDlK1jOGX4E%2BqpHOEmUI9Jx6sGZuepc3gmJljq2RHsIa0zKUl66rZh7ZmMGL5jJAKG2KgVjAQ3JIJwT4O0eLRF39PGm7kLo%2BrjTj8L6zOTv8xZ6KwUSNTBzlKujRB%2B7X0v5YbfRyiOiimS6oLhkmvmP%2BlRuWLoI961ZEKU9JJXBhfEDEu%2FJNFIydphUcvMaHkFSj33NzhI2tJtelf8O%2BRGhd0i11hTHzZR9E3x%2FyP%2FGFcJVu4wjkVnHmsn0KD565acEd3FSDFZI8mq1zCJQV6u4r8oKJPIwwGeFvkPPns7WRt2mfq4XVi37MFsG604%2FQ4YkzpUbxhAhjIs6sYZXGPpk4i8dPAAmaYjgFttjFljY6e4ZxkBm%2Bkiy2eogXzaTI7jlWhf4KS2pKDK3mlCvqem19vTnF3BZt8crrA77WDLkKrsql3Spwp%2B86TXA7EISEuqj6rhALo7YMGo8FYfPK%2F9IIf9eJJKm4VbtIPgAzfUg9jQbVnpPP1%2B5IFXyIKYnvmvK%2BMtDd1CEnzMRf5ufoldaOPpa%2F3sW2z3QKvzQDLvxEMp%2Faq8wK68mhhtINEq%2FLzvpV5KMN6ujs0GOqUBXSZ9yxZAjzKXwQv%2BkFmFBXM0Ocfj%2FBbhcqFuRunC%2B2kVaWiiv6%2FGVVL0io%2BR3WW2Nq8FMxQG%2BC0FbAWi2oio1EeNyFmIqMlSrByFsXgotZbQnL5JD5nbqvLtEGdNd%2B%2BZoUNzqEcYBHBDxQv8ezOdEwWv3FWbLBQPQTsWB1U1bWR1tTaKqWYzJOFjmrZT%2BBiozS%2Fvsk7pUjoSyYXa4U7J5QjjpYN1&X-Amz-Signature=c0b38718db1c52a93ee5d97d8376d52caec9eeb77a01bb876bb77d132ba0966e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3FVJHKG%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOMeKP7wd%2FFfLVOn7JZwbsXnt835ldPU2e5pmHnDpb8AiEA%2BLIWyiqsuvYrB1MuYR5WJ%2BN7970uzhkdLgIbSNCRZ8gq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCpudnL77YG9SC5%2B9SrcA%2BkcVPDjV5CmFsvBZ0mlz1dBmYrG0m1SMWpgwTj%2FIKw8gIHWD%2BeyvksVClhPFRnsSeAjcFV5JgYjsJYLtQCFOEXT9Q%2BB1DCYDJgsLVEmKvF3143StJfUVLXdV%2BxucxXTGkblexex7kPFQD1jdeiZCEXfxc93SmP1kQhxcbovHwbvE57wtCCXHrzhVlSqeebJMcrG%2Fde8RbpEb3fv3eE09nfykGfiaNhynXj%2FnYcQgkvI%2FmDy5vz0EBAxBqzVl97madxBeKzgSmUESpawWAQnr0k32hhLGUPSjHZJFovsbZsP%2BzjQ7Rea7UJj9vmYOxS%2FWgYAnAsa7B%2Ba9eID5Mo3KWHK8UIi2MpJdhotTDD9z90sWWd3WglWkaMXcngmBlbW1QL8CZfr5IQxrieK8Ohybwr%2F3kbV%2F1dIAwCKhQGomj%2FMKIwSWPS%2B%2BECa%2BezUYSurNYNjZEWxOu40OwPtocWk1ZHSCirZppq%2FQ7rk0twW3qdsyYIRmZ0yrYtSOnwP57%2B7fQSg36HhzRX7vTBm4O2JN6%2FPtSF6XhWytYOmWRG7rRinnahr0N68gF%2Bo5ZHfyVsgbytbVHj5wNCy3xAS6bLE%2BMFsGqQ9PSC4I1cKC1AI%2F4%2F4eHZ3OPyvXN2i2uM2MIiujs0GOqUBBo4KEsyTRimQcCECKbe6Wb1in%2Bkw99dagI2traTrEFdVNT95VFxhg2EnSncDEPCeb3ZXHUUoiY%2BBghMLEW5mFVk6%2FtXbwssr2mtE%2FsWNnh9O0yxZIW5XpX3vuLpPH924Fg0fDr6DB9EuV0x6q%2BCZStA%2BRCMt7avGRjJtzABvPV7m9lX8hIHXqszFvwU0NQrLaSw%2FLa53qLQrKkWsCCfJo%2FcefKW3&X-Amz-Signature=db4fee528ba1f8a9a4a0a378a2d480d31a60cbc6dcc8e91fdb207a2d6700c578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3FVJHKG%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOMeKP7wd%2FFfLVOn7JZwbsXnt835ldPU2e5pmHnDpb8AiEA%2BLIWyiqsuvYrB1MuYR5WJ%2BN7970uzhkdLgIbSNCRZ8gq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCpudnL77YG9SC5%2B9SrcA%2BkcVPDjV5CmFsvBZ0mlz1dBmYrG0m1SMWpgwTj%2FIKw8gIHWD%2BeyvksVClhPFRnsSeAjcFV5JgYjsJYLtQCFOEXT9Q%2BB1DCYDJgsLVEmKvF3143StJfUVLXdV%2BxucxXTGkblexex7kPFQD1jdeiZCEXfxc93SmP1kQhxcbovHwbvE57wtCCXHrzhVlSqeebJMcrG%2Fde8RbpEb3fv3eE09nfykGfiaNhynXj%2FnYcQgkvI%2FmDy5vz0EBAxBqzVl97madxBeKzgSmUESpawWAQnr0k32hhLGUPSjHZJFovsbZsP%2BzjQ7Rea7UJj9vmYOxS%2FWgYAnAsa7B%2Ba9eID5Mo3KWHK8UIi2MpJdhotTDD9z90sWWd3WglWkaMXcngmBlbW1QL8CZfr5IQxrieK8Ohybwr%2F3kbV%2F1dIAwCKhQGomj%2FMKIwSWPS%2B%2BECa%2BezUYSurNYNjZEWxOu40OwPtocWk1ZHSCirZppq%2FQ7rk0twW3qdsyYIRmZ0yrYtSOnwP57%2B7fQSg36HhzRX7vTBm4O2JN6%2FPtSF6XhWytYOmWRG7rRinnahr0N68gF%2Bo5ZHfyVsgbytbVHj5wNCy3xAS6bLE%2BMFsGqQ9PSC4I1cKC1AI%2F4%2F4eHZ3OPyvXN2i2uM2MIiujs0GOqUBBo4KEsyTRimQcCECKbe6Wb1in%2Bkw99dagI2traTrEFdVNT95VFxhg2EnSncDEPCeb3ZXHUUoiY%2BBghMLEW5mFVk6%2FtXbwssr2mtE%2FsWNnh9O0yxZIW5XpX3vuLpPH924Fg0fDr6DB9EuV0x6q%2BCZStA%2BRCMt7avGRjJtzABvPV7m9lX8hIHXqszFvwU0NQrLaSw%2FLa53qLQrKkWsCCfJo%2FcefKW3&X-Amz-Signature=ba60f03e1182826f54539c2018954f91f493f4f011a1531ef6b0fdf07cf5a843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D2X2JV5%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxYeN638kTXjZloAP4PHOhWzggcCkJ%2F38UAd4FJDbptgIgMRDdf6KviUeY8IlP6Exoe%2BIYTqK72rvdBDGO0tHT0ksq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDM9D7EhzqXcq6Gc5rircA1XXfcMtGhpDHGCs680UiwtLW%2FVQXjyw8nM338hlKm8uojGJZ39UvaoDlK1jOGX4E%2BqpHOEmUI9Jx6sGZuepc3gmJljq2RHsIa0zKUl66rZh7ZmMGL5jJAKG2KgVjAQ3JIJwT4O0eLRF39PGm7kLo%2BrjTj8L6zOTv8xZ6KwUSNTBzlKujRB%2B7X0v5YbfRyiOiimS6oLhkmvmP%2BlRuWLoI961ZEKU9JJXBhfEDEu%2FJNFIydphUcvMaHkFSj33NzhI2tJtelf8O%2BRGhd0i11hTHzZR9E3x%2FyP%2FGFcJVu4wjkVnHmsn0KD565acEd3FSDFZI8mq1zCJQV6u4r8oKJPIwwGeFvkPPns7WRt2mfq4XVi37MFsG604%2FQ4YkzpUbxhAhjIs6sYZXGPpk4i8dPAAmaYjgFttjFljY6e4ZxkBm%2Bkiy2eogXzaTI7jlWhf4KS2pKDK3mlCvqem19vTnF3BZt8crrA77WDLkKrsql3Spwp%2B86TXA7EISEuqj6rhALo7YMGo8FYfPK%2F9IIf9eJJKm4VbtIPgAzfUg9jQbVnpPP1%2B5IFXyIKYnvmvK%2BMtDd1CEnzMRf5ufoldaOPpa%2F3sW2z3QKvzQDLvxEMp%2Faq8wK68mhhtINEq%2FLzvpV5KMN6ujs0GOqUBXSZ9yxZAjzKXwQv%2BkFmFBXM0Ocfj%2FBbhcqFuRunC%2B2kVaWiiv6%2FGVVL0io%2BR3WW2Nq8FMxQG%2BC0FbAWi2oio1EeNyFmIqMlSrByFsXgotZbQnL5JD5nbqvLtEGdNd%2B%2BZoUNzqEcYBHBDxQv8ezOdEwWv3FWbLBQPQTsWB1U1bWR1tTaKqWYzJOFjmrZT%2BBiozS%2Fvsk7pUjoSyYXa4U7J5QjjpYN1&X-Amz-Signature=45d1a749102b9b46a91e156cc7e59f09ce5d82f528e21a395be8ed43b7387704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D2X2JV5%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxYeN638kTXjZloAP4PHOhWzggcCkJ%2F38UAd4FJDbptgIgMRDdf6KviUeY8IlP6Exoe%2BIYTqK72rvdBDGO0tHT0ksq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDM9D7EhzqXcq6Gc5rircA1XXfcMtGhpDHGCs680UiwtLW%2FVQXjyw8nM338hlKm8uojGJZ39UvaoDlK1jOGX4E%2BqpHOEmUI9Jx6sGZuepc3gmJljq2RHsIa0zKUl66rZh7ZmMGL5jJAKG2KgVjAQ3JIJwT4O0eLRF39PGm7kLo%2BrjTj8L6zOTv8xZ6KwUSNTBzlKujRB%2B7X0v5YbfRyiOiimS6oLhkmvmP%2BlRuWLoI961ZEKU9JJXBhfEDEu%2FJNFIydphUcvMaHkFSj33NzhI2tJtelf8O%2BRGhd0i11hTHzZR9E3x%2FyP%2FGFcJVu4wjkVnHmsn0KD565acEd3FSDFZI8mq1zCJQV6u4r8oKJPIwwGeFvkPPns7WRt2mfq4XVi37MFsG604%2FQ4YkzpUbxhAhjIs6sYZXGPpk4i8dPAAmaYjgFttjFljY6e4ZxkBm%2Bkiy2eogXzaTI7jlWhf4KS2pKDK3mlCvqem19vTnF3BZt8crrA77WDLkKrsql3Spwp%2B86TXA7EISEuqj6rhALo7YMGo8FYfPK%2F9IIf9eJJKm4VbtIPgAzfUg9jQbVnpPP1%2B5IFXyIKYnvmvK%2BMtDd1CEnzMRf5ufoldaOPpa%2F3sW2z3QKvzQDLvxEMp%2Faq8wK68mhhtINEq%2FLzvpV5KMN6ujs0GOqUBXSZ9yxZAjzKXwQv%2BkFmFBXM0Ocfj%2FBbhcqFuRunC%2B2kVaWiiv6%2FGVVL0io%2BR3WW2Nq8FMxQG%2BC0FbAWi2oio1EeNyFmIqMlSrByFsXgotZbQnL5JD5nbqvLtEGdNd%2B%2BZoUNzqEcYBHBDxQv8ezOdEwWv3FWbLBQPQTsWB1U1bWR1tTaKqWYzJOFjmrZT%2BBiozS%2Fvsk7pUjoSyYXa4U7J5QjjpYN1&X-Amz-Signature=f0cb88b7615dcb9d812f1932d27638b6c0694144ac7f6633f592bed0a25d0c42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ6GUC3A%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpH4ofFNqFhDB1av5c3P4nfDXwCLnDXv0xv%2F25Z7qsTgIgMiG3KIry5Cdcz6AGKFaYoK10uUDBsz4HNAoBJSPRiHwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOWcJ%2BsQx9vkr1T3nCrcA1zJRRFmkHJaj6UBz7JBa5gUIFPtTfGd660OIU0GqM15u6O0YTgN6iL9yE%2FKI%2FOx2n7JT1L3v27i7Qc02YAXQ1tjLfNcQl9U0TDSYB%2BsJklUNYZjUsDIuw62Vn%2Fu9%2FNsANC%2BVbaRwYftJM7N5mGCy4q3w1Qm9%2Fz9dEAjr0lVqcyKoyOuVnne10BGaMMnlmvRz4F98cxyzcdw1WGOpwIUU2jJ5a52nJ%2F3tH5fl0Pwk7xpXEFvmSjqwonmIZXL6LnZpD%2BqhEcxFO2YlR6%2B%2B3I5XZeYmnHBm5D8sszxUYFpqlJu5vNK3XQx6J1bdKNdQozX0OZXqA7QMkJpofn8qs1an4105%2BMAjEbS5B0A0xxwT1oFwjYgYKuP8UWChkokAeUhZZGBQTyvaz%2FusesgvNxX3d%2FpgabLISBbtYVyX7KPnSH1HiB5tHgdrYH%2BZeyANssaAndQ2q1qRI%2F6Vx5qTB2mdPt98C3a2S6yOTI9Tu0Av7LyqnTz8TgInlQn5lGn3r6N5jYwdEs4COtYwD7YL%2BsR6ElMrqJFgB8rTAYsp2%2B0jZrz4WxCE4fSZLTaD50iP7SATDbqv9V%2BGOCPeHICyZKwS%2BCvSKVa7KLDXuNkdfz%2FFimYu75uqEqJERWBUOYRMMiujs0GOqUBGIaEBXPc61kGHpBsU%2FMnH23lKldj%2Fl7t6owKwgx1jj%2BsE24DWWmR%2BQhCSneepH5WOUfvxTqQHDRCP5yzrB%2FNiNsbVBdkd%2Foto9qptZN%2B1n1vusG7pWqj3FJD%2Bm8wWNoiJCwDxsrmYC2x8Es9WG7Kmi6XTIh614fjuy0amRTCnajl%2FCOmZyAfznmHzwCtKkWLN6xaL8qVY%2BWsXHo4wzE5uLb8Iy17&X-Amz-Signature=308f94d3f5f8c0fe8da7fc30fa227924ded1b3267f3dcc102291f49270d5a53c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

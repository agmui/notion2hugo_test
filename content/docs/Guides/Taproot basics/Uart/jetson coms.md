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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622ADCL5P%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIEgL0tq7m3jdzPyNFnOiFxmpZhX1JoOvdqCjgFQGbeiGAiBP1rIyo1zyBLzynVr7wU0vHU0wrTpbYVkjyjM%2FVo2DBCr%2FAwgEEAAaDDYzNzQyMzE4MzgwNSIM1QIIY6iC9pqw4i6DKtwDbQxDLCVhlnecf81211YaMWQ1gzZL%2FxKXdF6xYWs4HtYJZ8Iu7pvcQP8h4Cu7TR61XUweXM72Vk4mJ3YmhEWtB2vFFNu%2FfCiI3ABTrsBp%2FEFDOPMI5nTLTEius%2BX3UJKcWLJVz5VzzRheifVfbkgUXtm2frF3iDwRYgAqz%2BKxJFvlFSjdi2ddYhraR63ro8IGt7a9bcrelwcfUqQaNkWKb2XrznS6NxWl%2Fozf9FLwdeNsaXn4PjisP%2BSL3FuL2EY%2FsaW6b8dhooZyfPRTS6BWWCY%2FhkAUbM%2BWOJ9075zDmxjDIU%2BbKiDFy%2FKQLJnAdUPI%2Fg1t%2BSi8%2BlbvaQ3SWFbbC5FDbF8yfpFCrAcUxPiSQdyH8S8v7M8qgsqP3VCj1yX7M8yUIydy2iSSgvuV%2BvU%2BfSwlAkndyZquwKJr7h9MMZKwyNmmZk%2BFVPElbE3J7NFcmQ%2B8BASO0gBQpOKbo1ZtdfiX6ftqFjUBmvvE1InBsrF2cU%2BNgNfUpOoSjOCi0Qin5yMgA0eiKOggtNNDPx93uIvDOLyB3hFA60CKPeYjf%2BZx5J6LjicmZtsJpOlo1mnGdfjRviVOVehGMInuzLVDNBUtkG2RzeWuBo6yvQ%2BZwdD4%2FEq8z5mtxrrZ6dkw%2F7uc0gY6pgGWQqs7q18iGBwRAjPXG1feV84UU4ytYVKIqtME9ZgBhpqzTBQoQB2IhUR3XEMyoPsP%2BSnouWbAwAzkbKbGwGJky1h9ca9jFnopfxphS749Ki5QbgS5s%2B9b1PulhTtummnnItqJGLotYvkbddZGivpzX1QGo%2BbZGLS%2BrZAz1BcxoShV8rqck4djpPGGByupaTYFLbSJoqDm%2BQVl46hswjUGmYMTOsUb&X-Amz-Signature=8e101cc15b849a16c3f2b50d36738461cae979340486803699a87891c64b782e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K4E45WC%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCL9%2FI8l%2F2HkMEv9j00cs6cp41xPvTXOtDv9az6uwG1lAIgDbNMgtcVmFgEYwzaZbGAlCQiDp0Z%2ByK%2BUdqo%2FWNrnSMq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDFeD%2BeT6SNVoJATpBSrcA5%2Bp0SBoB%2F6j7CNkeXdeHV98HjxXw%2B7LJ3LMo9CUTgNN1NSt%2BGY%2BZmBSPcd1umrYHohqrsoQNMblOWQnHrJCWSu8Y8I90tAGdt5oATuMhEqcSHa1ikeezTIIGhwert653MHMCVLusFxpuEgZVfKPikrebvNeBxe4RpXj8vaefLkQ2Jq9Ci70xevLe8AQUFvex76OIvk3y2uKHQeXrD3mIc754oTu3NbU5LuQzrx%2B8LvdRpJ%2BrI4W9EaxEudXa9ludEKeVPaR%2FdR1Xc%2FVNxGKcoYqiferXczDDwk%2F4EgofeinYFywfR1EHCYsThtLO4BGxeDYDUiaju2Gnu13v33W7Sy%2FBgUnuNwLFXUQ582vbNyzyxSDfFeACW%2FN5y7ar0M0nEQlW%2FLjkZTww0yN5h89ddXs0OE7IdG2EW9QlB6c0RNUg2KLyoJxZ21mXOKoHtmcGGG6959KHDzPWY5zWPg6ULqDj9TU2cMZhPolE0RMP0ncivMWQNWmfE60EuhjJYgNmwlm9zPWPy%2FDPiIP7rmgVUj7fqi4cdl6q1nz6jx9zmqQQKcWICIjRrtmJ1tlF2EMKaXXsNLRWTytJZT%2B%2FFyz5faI%2Fu7sYHuz0G9VPkK1LCY8paNoGqG1itpuIXbJMLG6nNIGOqUBrAChnlF%2FIRMB%2Bl131xxK2yAR5n%2BXqcx4wQem6Z%2FupIuodBy%2BW20zLh6T8rnJDMBuvusM%2BzKofipG7qGzFfvwv6Gq39Tmr9UT2pXqGcryZ84EpidcWZVHUYUFk%2BjuC0RgVHwok9x16oFn%2FcAmI9B4Digjn%2FOsPapwrJ2SUZWGYezRNzw5mNPBL%2BmwOmgfe%2BkPN1X07Jd8lyi%2FhXoD0mg6bPXpogzZ&X-Amz-Signature=3b6f30194b164bb15f9481448af0cc6319d325cb6c95060ca5d191f40ff42b0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632D6UOVQ%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIDhdOLRD9U94sdDMnbqDKGRtxFupIfbsJvFdQ7%2BRMk0GAiA4WKzTWusA2L8cjAKiKqJvaYp7GR9QZSN1BHHeRjl43yr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMTjzy5xEBRG6wTrCnKtwDLoOopFUHzUfQUSAWerQlXT5T82ZXYGqjyL8vZNS17fWJQlC6l74VdzN0UEghySloaWCdmkoR%2B4RtGWwFeFNDuG4R3KDqfXeR4QtLwGikf1%2BH46z%2B1NUZocgI3HcIb4ZAAl7mj70DTtsP%2F2oN0p4L8jfobfAdgbnQnBA50b3T9mVm8%2Fk5SKXVpncx3H1K%2FBXbas8oFENmRyJueGKquQFIx2n9Zrlx2c979oJaTsxQvUeXJq5%2BQQbbZD0dVv5lKaylrVqdJKfq7bxwSWwaQkdkN54sjGKbU6KLSUkGcIOgYhTuLC1kTLtUztE0P%2BTlLy88FC1hLYp%2B8X8yAuwMnEXLXe8PfRO8Tqn67kDfm9kKi7rv9yr%2FNPLRkcYYaUiiRC8EHBi3MOJRJKNxP7zHPDSLRql3BZwWw9whrwLKLBsGjGU0q4wJUdcAbUXS%2Fkl6NJvbPan6FsxtJPzxfBnML0P8Ifksnf89aogFTGXd3raeL8VSZW%2B2tAybZ2jfQ8TmeKQ%2BHndj8amnFtkmgk%2F0SVmntSZBtbLXJ7ZwranKiHCNdqPmvFtA813W21OUGP%2FbMdGurtg6kOMxJAhga8xbmVQjWMMOUp4pH24MgvW1tqvH4zxZgCA8g4C5TMEt3t0wh7qc0gY6pgENullp5YBOzsidtKHzesFh3CLQx0cFoAP%2BJYIvd%2FaHvASpyoqPZnEVMUcmRf6yWK55RKi0KwjmEZa702VmMX9%2Fgm4lrSpqTm243u278bsl1XAJjdx44CYCpw%2B1x9mFQsKNHNr2lTOuG9kkQuVJ6WBB0nMay1%2FJfrlV%2FrO1vVSzyX3Fdr5qGJo6lovXDWULyG8wtoJBcY97it88iUIZtm9EzAdoXJvW&X-Amz-Signature=5acc38fc99f863a54589b1ca617cfcd179b2c37ce52c793b339da2d7fc5c49d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632D6UOVQ%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIDhdOLRD9U94sdDMnbqDKGRtxFupIfbsJvFdQ7%2BRMk0GAiA4WKzTWusA2L8cjAKiKqJvaYp7GR9QZSN1BHHeRjl43yr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMTjzy5xEBRG6wTrCnKtwDLoOopFUHzUfQUSAWerQlXT5T82ZXYGqjyL8vZNS17fWJQlC6l74VdzN0UEghySloaWCdmkoR%2B4RtGWwFeFNDuG4R3KDqfXeR4QtLwGikf1%2BH46z%2B1NUZocgI3HcIb4ZAAl7mj70DTtsP%2F2oN0p4L8jfobfAdgbnQnBA50b3T9mVm8%2Fk5SKXVpncx3H1K%2FBXbas8oFENmRyJueGKquQFIx2n9Zrlx2c979oJaTsxQvUeXJq5%2BQQbbZD0dVv5lKaylrVqdJKfq7bxwSWwaQkdkN54sjGKbU6KLSUkGcIOgYhTuLC1kTLtUztE0P%2BTlLy88FC1hLYp%2B8X8yAuwMnEXLXe8PfRO8Tqn67kDfm9kKi7rv9yr%2FNPLRkcYYaUiiRC8EHBi3MOJRJKNxP7zHPDSLRql3BZwWw9whrwLKLBsGjGU0q4wJUdcAbUXS%2Fkl6NJvbPan6FsxtJPzxfBnML0P8Ifksnf89aogFTGXd3raeL8VSZW%2B2tAybZ2jfQ8TmeKQ%2BHndj8amnFtkmgk%2F0SVmntSZBtbLXJ7ZwranKiHCNdqPmvFtA813W21OUGP%2FbMdGurtg6kOMxJAhga8xbmVQjWMMOUp4pH24MgvW1tqvH4zxZgCA8g4C5TMEt3t0wh7qc0gY6pgENullp5YBOzsidtKHzesFh3CLQx0cFoAP%2BJYIvd%2FaHvASpyoqPZnEVMUcmRf6yWK55RKi0KwjmEZa702VmMX9%2Fgm4lrSpqTm243u278bsl1XAJjdx44CYCpw%2B1x9mFQsKNHNr2lTOuG9kkQuVJ6WBB0nMay1%2FJfrlV%2FrO1vVSzyX3Fdr5qGJo6lovXDWULyG8wtoJBcY97it88iUIZtm9EzAdoXJvW&X-Amz-Signature=91da2e3ec587060641b49f5ffe218a69af5f457739b4751bab5e37221aaddbe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K4E45WC%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCL9%2FI8l%2F2HkMEv9j00cs6cp41xPvTXOtDv9az6uwG1lAIgDbNMgtcVmFgEYwzaZbGAlCQiDp0Z%2ByK%2BUdqo%2FWNrnSMq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDFeD%2BeT6SNVoJATpBSrcA5%2Bp0SBoB%2F6j7CNkeXdeHV98HjxXw%2B7LJ3LMo9CUTgNN1NSt%2BGY%2BZmBSPcd1umrYHohqrsoQNMblOWQnHrJCWSu8Y8I90tAGdt5oATuMhEqcSHa1ikeezTIIGhwert653MHMCVLusFxpuEgZVfKPikrebvNeBxe4RpXj8vaefLkQ2Jq9Ci70xevLe8AQUFvex76OIvk3y2uKHQeXrD3mIc754oTu3NbU5LuQzrx%2B8LvdRpJ%2BrI4W9EaxEudXa9ludEKeVPaR%2FdR1Xc%2FVNxGKcoYqiferXczDDwk%2F4EgofeinYFywfR1EHCYsThtLO4BGxeDYDUiaju2Gnu13v33W7Sy%2FBgUnuNwLFXUQ582vbNyzyxSDfFeACW%2FN5y7ar0M0nEQlW%2FLjkZTww0yN5h89ddXs0OE7IdG2EW9QlB6c0RNUg2KLyoJxZ21mXOKoHtmcGGG6959KHDzPWY5zWPg6ULqDj9TU2cMZhPolE0RMP0ncivMWQNWmfE60EuhjJYgNmwlm9zPWPy%2FDPiIP7rmgVUj7fqi4cdl6q1nz6jx9zmqQQKcWICIjRrtmJ1tlF2EMKaXXsNLRWTytJZT%2B%2FFyz5faI%2Fu7sYHuz0G9VPkK1LCY8paNoGqG1itpuIXbJMLG6nNIGOqUBrAChnlF%2FIRMB%2Bl131xxK2yAR5n%2BXqcx4wQem6Z%2FupIuodBy%2BW20zLh6T8rnJDMBuvusM%2BzKofipG7qGzFfvwv6Gq39Tmr9UT2pXqGcryZ84EpidcWZVHUYUFk%2BjuC0RgVHwok9x16oFn%2FcAmI9B4Digjn%2FOsPapwrJ2SUZWGYezRNzw5mNPBL%2BmwOmgfe%2BkPN1X07Jd8lyi%2FhXoD0mg6bPXpogzZ&X-Amz-Signature=e3160fb91c8f3c11a79a69d2a6e26e1e491975bc8e8a976a44de86b5f437034a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K4E45WC%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCL9%2FI8l%2F2HkMEv9j00cs6cp41xPvTXOtDv9az6uwG1lAIgDbNMgtcVmFgEYwzaZbGAlCQiDp0Z%2ByK%2BUdqo%2FWNrnSMq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDFeD%2BeT6SNVoJATpBSrcA5%2Bp0SBoB%2F6j7CNkeXdeHV98HjxXw%2B7LJ3LMo9CUTgNN1NSt%2BGY%2BZmBSPcd1umrYHohqrsoQNMblOWQnHrJCWSu8Y8I90tAGdt5oATuMhEqcSHa1ikeezTIIGhwert653MHMCVLusFxpuEgZVfKPikrebvNeBxe4RpXj8vaefLkQ2Jq9Ci70xevLe8AQUFvex76OIvk3y2uKHQeXrD3mIc754oTu3NbU5LuQzrx%2B8LvdRpJ%2BrI4W9EaxEudXa9ludEKeVPaR%2FdR1Xc%2FVNxGKcoYqiferXczDDwk%2F4EgofeinYFywfR1EHCYsThtLO4BGxeDYDUiaju2Gnu13v33W7Sy%2FBgUnuNwLFXUQ582vbNyzyxSDfFeACW%2FN5y7ar0M0nEQlW%2FLjkZTww0yN5h89ddXs0OE7IdG2EW9QlB6c0RNUg2KLyoJxZ21mXOKoHtmcGGG6959KHDzPWY5zWPg6ULqDj9TU2cMZhPolE0RMP0ncivMWQNWmfE60EuhjJYgNmwlm9zPWPy%2FDPiIP7rmgVUj7fqi4cdl6q1nz6jx9zmqQQKcWICIjRrtmJ1tlF2EMKaXXsNLRWTytJZT%2B%2FFyz5faI%2Fu7sYHuz0G9VPkK1LCY8paNoGqG1itpuIXbJMLG6nNIGOqUBrAChnlF%2FIRMB%2Bl131xxK2yAR5n%2BXqcx4wQem6Z%2FupIuodBy%2BW20zLh6T8rnJDMBuvusM%2BzKofipG7qGzFfvwv6Gq39Tmr9UT2pXqGcryZ84EpidcWZVHUYUFk%2BjuC0RgVHwok9x16oFn%2FcAmI9B4Digjn%2FOsPapwrJ2SUZWGYezRNzw5mNPBL%2BmwOmgfe%2BkPN1X07Jd8lyi%2FhXoD0mg6bPXpogzZ&X-Amz-Signature=9622c12cf12b0fb7374cacb707dc350bb0d785a6dad69795f61cbc23f53812dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPYF35SK%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIHEhFiPcQVdttABsyYtpnkv2rnNNCJ6JmlZi7te7QQxeAiAeCxIfeGPB3WxN%2Bmnhi0Fo8qs%2BWvJzkGMcZbZcdBJk7Cr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMLkyEJvbtCJpwb0atKtwDEHFS2Qmm6ovNC5q%2F%2BobVZD5uVRm1rqfw0w6gDcmixjiCeLP0YeHzKPJ3Wi7OvBy3%2FZdG8efw6xzzsAMFblWNNP0iZ4rD7%2FYesKLG%2FuVK1A6gt%2FtxYjHj3qHZ9X6R3SUwf5DMc1TLArq%2BGCduTfYCXU%2FqcWatPk185j33fr3CRC3C9lEIhty5lZwqi0sgbHeNRMsFU27N%2BeeMrQRTOspLbdWvWv0e8ysaBySILz6UDgFhbNbTWvAvsFd1H6yGyYSzHk1qn59QE9EFfnR1dLDqGAIXRLe1YIazh6nZP0wqCbVcIqYa%2BWjpencv8FU42bUgluYAGvlAQYIYDeB5oKa7wKYwuVfrbIJQfgpp8cMrWrO6qEW7EgreE65TDS8vXNpaEN7%2FRPabiVgFzC%2B1NGNpZTmzbwKeBgWWuKcyUxdihXES%2F7Szl8WQh3laR0hxl51y6OUHqPaE%2FXjuRBFhraag5MKTqaP4jdVvbGTnaEQXjenzpg5nfURlrbnSrph5XTIk5wtUnvF0F%2FOyOjfGY9vgtl3lYkBWPtZFqAlDCrl%2Fi0YBEgG19wmn1OOL5blrWQWfv2vZCE5IkNCvO%2F3ewVlPqCbSN73WbcFXfK2Rf%2BFK4hYWlg73SXF%2FeaTN9yMwmrqc0gY6pgE8umTf2IX7xQnwXVxC4hi1N3nN%2FKgyxeeMA%2FSnCC9LwAHPhhlXKm4qLGWZYn4mabkNfKV7TZVGi4TkAikeD4RKhvJvXdqlZBA8p5eDREwh%2BmSIKxD7wT2ju1jiIylupN1c4hyyWAJjvkRXwfDOWiQ1sCDKs2aet32t%2BcYgkKmLYmtZyv6wsufhOv3hZwnAYBwQrqeFnxzCNtnrK6nbl661bETf4k%2Bi&X-Amz-Signature=9f559599bb8344adef871939b6c070478b8b02bfa055d6acc6f1099fdf8acf97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

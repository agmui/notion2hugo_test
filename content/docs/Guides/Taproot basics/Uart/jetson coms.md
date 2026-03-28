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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RHPPBG7%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDCJGomGwGvbxC9yH8okZpy3oKR92CkWlde3Zp4LmfpFAIhAI5vmytU5fhfw21RW4N5xxZL3sGtuq%2F2qbue9mRgzWKkKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyapbjpNUKdUG2walgq3ANQUjlTOcLDGm6O8v7o%2By3PZHtlmlMntrPdesDfWmToktONKXT5dLbwhlLNZb162Po%2FcCs%2BrJMJyXrqfy%2FF9ZCABnvdXCaxRKgXVwZyopQgX2bEqqZ%2Bi8IOvUfo1cW0h%2Bg4XZ53WV3M4OdEQ9Vg5mt50gSGlRHR9MSvmsVTHLM5Rru2NSOr2BWpK09dcWXiERrDk63eNNTzTunMQsb0VEq9NXPHUqOCTz%2FzsrQLKe4xsH6mhUo2LjYbcxcJAOLuEwlwOFug3miBwMGW4lFGZCuI0L6lqEHdy1uWMlm87thxYoDBTiqDIhlFE1mW88AET0IOI0VC9AY1drSCyscDuVEsp4ZA06qc8XPgqe2fjpwEQIy2UN3zIGgk%2BdS4NoS754MBK1U83ArTTlmwycPYQZ%2FU98t7PshNss7XKemWihIkDUJEgGiEr2cgAXUZyKDj5O5p9G8Qfogkg0d9t5eGyu8ZHYOqw08FyxlYy%2FTG0lGGf1a8UP45WzML9nndp6%2FEVXSnPOwDKdZ97wRl5y58gFPGR5yA5DfQiQKyzyWM9k1LCVP252rNs8x0LjnwqvWF28fyZlrX8hSybV5rBtQSgMucukFyqm5uKox%2BWrvrsl17gFIj2vxTCZsKdnwIBzCs7JzOBjqkAbwcbEeizEx6601gdQD3LPsn83LV742xuXxXJ1EHAJs820O07Y5IMzozlYrYmvzJHukkuG3Xwf4ke%2FvUe8ZK89fehtZJMB%2B%2FAJrBhYK6AeAfsqBwTAx8oY7du1X2C%2FzJQP3nym7FqqKYp%2BRfmfk4gI3zOdotrsqNaDEpea28joLXVttEMN682eBpUXnw24G87kSSOQcJ6xErxbY9%2By3GvXn8%2FHO8&X-Amz-Signature=53bbad2d58ca6331625ddc4043928e5493e6144b79bb1282b7b7071fa4f912a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NX2YTIB%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIETt2cFePZeIyCveN46HcK0dhnE6suVEVadoeXl50LplAiEAlc9kb4cB0gaq7nvg8JZNVlkd20exsLtWMscVweDoWzQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVIbItSla8MR7eVAircA%2BT98RuRv0eps%2FaAKwgPcDadZX1PNk4cq5KTTt03iqOezggUVolLGiISPusAY0h86e2ncAXdefH8534ufmISUnvqtUMTTYqRFzGKi0Xt1qhQ2fq3nNz4AeZ20Z2TqOSxW0ZgDJ0zcPI6vButHWwGRU9nH5yfxBhx15n2yjXy6SXfuH1f2gy3klMp6T5pp9kXNmoFxd6uzuY%2B6%2FcUZCAjQ0lEbLs4AVjo259%2Ft8BcgSzXPwjep20uu%2FI5DZCeph56wNNOiXNzmTw3ajd18P9ZjKTKZhWIL42Y%2BHyyTkQ27x06lh8kaQARNBBohgL5N%2FKmYrCuV8MmaybWr25006f%2FRDLBbzqzSaJdgm%2FVBCD3QWamikq9OGghpjz5nxdbUb8lZluYHu5WNHQ70ttrthm%2BHeQDIkdHwusRZVqaF%2BkUp3ewWX2O%2B2SzqHBIg1dJJuCULJgP4MD6RY5kVUrkSBb6SWQwn0njrQO2HYO%2FaMgYh1jcCtpa5NSlCQAVwPKIYWbLOqsbHWqjZS1BBtMJsoF1KTeDM1ydP4r3EWYZW3DV6lvRrqzYHLuhIUZsgCkSBesSJ97bfxvGQoUtyV0Uo8kOxuXq8Zv3x3S2jAz8ZGT4pCUyMnPdMJPC05EKu9l0MJfsnM4GOqUBzd9rkMPtY034wEYEU0dVqlyb%2BSYXW2jjijKmEciVG4l0x0U6nVrjPFrI7iwl%2BxD%2Bz2VcsT9wPUFaPKYil6sHG%2FU0z8IPKSwHC2edyd9hFAF%2BZPzcU1Km8RVydGZnyeQ%2Bg%2Bbl5fYuQawHrbbGqY8TXvbSNnUdXeIf8BUlN%2Bz%2Fwva5jw86cwqqJOhYbgH1W63rOOCJCp8DwNUNnfq1c40wRjZ1or7U&X-Amz-Signature=8309aaad0bf42eb332917d9d55270d6fff686fb675ed14d1a0616cbf9cdf4de4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YKM3YJ6%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIH%2BQS0z2r8CP%2BEZe%2F4JNQ6N97JA6eZImc20xafP62E8JAiBxKNJjXaL0mPgwP1KKWRFkG0GiLFYGFU0hTKZnMJ3YdCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvDE37KYjq%2FwKInAtKtwDtp2DOwqWrHqbd5khgj2jBsRa0hqDChv5WFF%2BbGb0xvCj9n382cScPWX09S66HjZTHgSCKz%2B495IL6nlCMI6EoaoORkmUnkkDoIqJULkGKsP%2FW5DUmOKi3Z1vms8AWdITnvqeb3uar6FPCwGY2TlLVxmro9%2FX48XlMQnnxUTvVHtzo4%2FyEucnta5A0OJ%2FrsskpT8hjbypHkIgEiSzMNbwLil2B01a14RnFEAvNFK2AlcUGFQ40yFQZhhFdNEmiDiv0pHyCOTYxzmYdEKH5PqJhfyjZozBiD7pqieCRH0QDvUO4TVJbV2NQ21lesk%2BUzI3QdIYybIVga7UTWKL213IfWzXB70tI6g3%2BvbhRRw3fYTN3ol7gumDaobPNtAq7WcHY4h%2BRsWlHj53ldYsYBvWEaahEfQs%2BxbrlHhnrhfAVJHS6%2Ba3%2BA1fajMdoe0xnuH0cihg86uDzLzxh4K0Qp5APSuZvou214nHX6QhKcuzl240pmy3DGlee0QknsFinqi4tiCpixPHPk7B7ODiYVOYwx9gh5H2n8YmIceD6e6DDjMQhmr1GS6BTWaqNcz%2F%2FUCWv7iTsPrzLdOR8JWX2es43gXPH8N6AjldhogTC%2FNDMPQGj0rJVygtsmmxtrIwvuyczgY6pgGCYxiFExis6gtKwcdbMDaEtDLoMyDw%2FgPlnqzx9waphpWETDTYU64YFJL1My6ocDi7%2B2sQsdRDIRLGqjSn2LaZ4psuKJ15f6qbe1Jo%2FwNoZMcPEritkfei3GUASsHV%2B%2BOd0byx5LA1tQvHg9HB7tgzRpcqabPipBW%2FkdPcZQHnIKrXPNB9KcXGSJEwwtbE%2F4dAAtht3Eeb0mE1xL8E6wQQE%2FGmasaN&X-Amz-Signature=77601c47e03b917d9934d7984314ad5da1f72f796cb6785c6ebdee7f34f34a3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YKM3YJ6%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIH%2BQS0z2r8CP%2BEZe%2F4JNQ6N97JA6eZImc20xafP62E8JAiBxKNJjXaL0mPgwP1KKWRFkG0GiLFYGFU0hTKZnMJ3YdCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvDE37KYjq%2FwKInAtKtwDtp2DOwqWrHqbd5khgj2jBsRa0hqDChv5WFF%2BbGb0xvCj9n382cScPWX09S66HjZTHgSCKz%2B495IL6nlCMI6EoaoORkmUnkkDoIqJULkGKsP%2FW5DUmOKi3Z1vms8AWdITnvqeb3uar6FPCwGY2TlLVxmro9%2FX48XlMQnnxUTvVHtzo4%2FyEucnta5A0OJ%2FrsskpT8hjbypHkIgEiSzMNbwLil2B01a14RnFEAvNFK2AlcUGFQ40yFQZhhFdNEmiDiv0pHyCOTYxzmYdEKH5PqJhfyjZozBiD7pqieCRH0QDvUO4TVJbV2NQ21lesk%2BUzI3QdIYybIVga7UTWKL213IfWzXB70tI6g3%2BvbhRRw3fYTN3ol7gumDaobPNtAq7WcHY4h%2BRsWlHj53ldYsYBvWEaahEfQs%2BxbrlHhnrhfAVJHS6%2Ba3%2BA1fajMdoe0xnuH0cihg86uDzLzxh4K0Qp5APSuZvou214nHX6QhKcuzl240pmy3DGlee0QknsFinqi4tiCpixPHPk7B7ODiYVOYwx9gh5H2n8YmIceD6e6DDjMQhmr1GS6BTWaqNcz%2F%2FUCWv7iTsPrzLdOR8JWX2es43gXPH8N6AjldhogTC%2FNDMPQGj0rJVygtsmmxtrIwvuyczgY6pgGCYxiFExis6gtKwcdbMDaEtDLoMyDw%2FgPlnqzx9waphpWETDTYU64YFJL1My6ocDi7%2B2sQsdRDIRLGqjSn2LaZ4psuKJ15f6qbe1Jo%2FwNoZMcPEritkfei3GUASsHV%2B%2BOd0byx5LA1tQvHg9HB7tgzRpcqabPipBW%2FkdPcZQHnIKrXPNB9KcXGSJEwwtbE%2F4dAAtht3Eeb0mE1xL8E6wQQE%2FGmasaN&X-Amz-Signature=1640ca4a6fb6fc9ffb03181030b48485321ddade637ce4b40977fb62863b177a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NX2YTIB%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIETt2cFePZeIyCveN46HcK0dhnE6suVEVadoeXl50LplAiEAlc9kb4cB0gaq7nvg8JZNVlkd20exsLtWMscVweDoWzQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVIbItSla8MR7eVAircA%2BT98RuRv0eps%2FaAKwgPcDadZX1PNk4cq5KTTt03iqOezggUVolLGiISPusAY0h86e2ncAXdefH8534ufmISUnvqtUMTTYqRFzGKi0Xt1qhQ2fq3nNz4AeZ20Z2TqOSxW0ZgDJ0zcPI6vButHWwGRU9nH5yfxBhx15n2yjXy6SXfuH1f2gy3klMp6T5pp9kXNmoFxd6uzuY%2B6%2FcUZCAjQ0lEbLs4AVjo259%2Ft8BcgSzXPwjep20uu%2FI5DZCeph56wNNOiXNzmTw3ajd18P9ZjKTKZhWIL42Y%2BHyyTkQ27x06lh8kaQARNBBohgL5N%2FKmYrCuV8MmaybWr25006f%2FRDLBbzqzSaJdgm%2FVBCD3QWamikq9OGghpjz5nxdbUb8lZluYHu5WNHQ70ttrthm%2BHeQDIkdHwusRZVqaF%2BkUp3ewWX2O%2B2SzqHBIg1dJJuCULJgP4MD6RY5kVUrkSBb6SWQwn0njrQO2HYO%2FaMgYh1jcCtpa5NSlCQAVwPKIYWbLOqsbHWqjZS1BBtMJsoF1KTeDM1ydP4r3EWYZW3DV6lvRrqzYHLuhIUZsgCkSBesSJ97bfxvGQoUtyV0Uo8kOxuXq8Zv3x3S2jAz8ZGT4pCUyMnPdMJPC05EKu9l0MJfsnM4GOqUBzd9rkMPtY034wEYEU0dVqlyb%2BSYXW2jjijKmEciVG4l0x0U6nVrjPFrI7iwl%2BxD%2Bz2VcsT9wPUFaPKYil6sHG%2FU0z8IPKSwHC2edyd9hFAF%2BZPzcU1Km8RVydGZnyeQ%2Bg%2Bbl5fYuQawHrbbGqY8TXvbSNnUdXeIf8BUlN%2Bz%2Fwva5jw86cwqqJOhYbgH1W63rOOCJCp8DwNUNnfq1c40wRjZ1or7U&X-Amz-Signature=66c7b1d50f50689503c69dffc430253f35147f1eb7a5fff564c6ca367bff7a52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NX2YTIB%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIETt2cFePZeIyCveN46HcK0dhnE6suVEVadoeXl50LplAiEAlc9kb4cB0gaq7nvg8JZNVlkd20exsLtWMscVweDoWzQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVIbItSla8MR7eVAircA%2BT98RuRv0eps%2FaAKwgPcDadZX1PNk4cq5KTTt03iqOezggUVolLGiISPusAY0h86e2ncAXdefH8534ufmISUnvqtUMTTYqRFzGKi0Xt1qhQ2fq3nNz4AeZ20Z2TqOSxW0ZgDJ0zcPI6vButHWwGRU9nH5yfxBhx15n2yjXy6SXfuH1f2gy3klMp6T5pp9kXNmoFxd6uzuY%2B6%2FcUZCAjQ0lEbLs4AVjo259%2Ft8BcgSzXPwjep20uu%2FI5DZCeph56wNNOiXNzmTw3ajd18P9ZjKTKZhWIL42Y%2BHyyTkQ27x06lh8kaQARNBBohgL5N%2FKmYrCuV8MmaybWr25006f%2FRDLBbzqzSaJdgm%2FVBCD3QWamikq9OGghpjz5nxdbUb8lZluYHu5WNHQ70ttrthm%2BHeQDIkdHwusRZVqaF%2BkUp3ewWX2O%2B2SzqHBIg1dJJuCULJgP4MD6RY5kVUrkSBb6SWQwn0njrQO2HYO%2FaMgYh1jcCtpa5NSlCQAVwPKIYWbLOqsbHWqjZS1BBtMJsoF1KTeDM1ydP4r3EWYZW3DV6lvRrqzYHLuhIUZsgCkSBesSJ97bfxvGQoUtyV0Uo8kOxuXq8Zv3x3S2jAz8ZGT4pCUyMnPdMJPC05EKu9l0MJfsnM4GOqUBzd9rkMPtY034wEYEU0dVqlyb%2BSYXW2jjijKmEciVG4l0x0U6nVrjPFrI7iwl%2BxD%2Bz2VcsT9wPUFaPKYil6sHG%2FU0z8IPKSwHC2edyd9hFAF%2BZPzcU1Km8RVydGZnyeQ%2Bg%2Bbl5fYuQawHrbbGqY8TXvbSNnUdXeIf8BUlN%2Bz%2Fwva5jw86cwqqJOhYbgH1W63rOOCJCp8DwNUNnfq1c40wRjZ1or7U&X-Amz-Signature=d720cf3023b3241cba5d9c127067ae015b22e95c9f0aff39dc8537e366b2b723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SEKCNCP%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIE5Y1n72iwhnQPL8NiPzHPK2EndCe9LjqeRI%2FEibo%2Br%2FAiEA6RWcRiram3aRc4VXxEd8Y6AwWtQJQJGQYOZpCaJtKfEqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcWYQPBdgi0RJM3pCrcAyA6sPvNs4aup7bPr7alHVky5QMbdKm8qNTC24agWLWgprh9JUIyj7iQSKkSXLlmgBZ%2F9n9veKf%2BFEYUTG1kY3yAM%2BeFuUGaVRZTL23A9lAsOxTQan7tQpjeWmPWMrLf0TKIuJaWbGPxoiT%2BzZKR1hlN%2BOSbgklSGon883zaaHmqK8vrD40iN9GySrE9M68M0GqxLh9kBZRvBm%2F%2BXmrWKXdhnIZZyRLhVxCkKa6nOYpnJBPcGhDOOKsG3jyJIJbvuvxwjr3ouNkG2Il52qHkqNueARTwXLs2C%2BDfoTlJdyr5eM5LNU93qjwqEj2iNWP5%2FhtzYN6x%2F6YGHfQHAZj4cCV%2F%2BwTGowN4fNc655o3yooTl5QSPIkDMUCOnko6t%2FBJYYRdi2dLK1mGdZEtNN0j%2Bc9S1BsNIRvOgVX5xUWWSQSGADsvyHKC%2BWvyhGbskXmLb6LcjD44xilyjjvL0zv5gTOLNZkVUolXjyFkVTKwbGt2B8s4zez1tsl%2FtkZDJ8yukiAWsoIH%2BzTx7xtMU05QHT%2FRbvadwypmiKd2uiC0EwEtxaas3EOUrLcYY0TXnXil8IyK50VeLgXdXUDKJBlWZRq7dHB%2F39vnIlKm%2BYp74lpb4TmkCBxxU9pLT5L9ML3tnM4GOqUBBx53p%2BNfUHt%2FDz%2FPWnSTMBsz5bcsoKhkA8JbO9%2BVi3byxAaiX2d4LCq%2BpgBHEggBIZy8b0IgLhBBXe72ShR2vHk4sH%2B6hKL%2F7PqemCNU4Mwh5Xwv%2BGB2FB9i%2BlyCH%2BG5kN2cRC6BoIo85Eh1i7BAVVr9qwkgglq8k62hgxkc5RC13dZ9JP4IQhAlUmp7c9J8S4mqK1WbFEWhg3S%2Bmq9TTKoY12tj&X-Amz-Signature=9ba6d38de31956fb254e7b6c51e6b4a3461a7bc4fa558f235a81e1953713c10f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

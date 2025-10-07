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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2VH6OX3%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDGQTSxkqlsLeGOJPlP9W641ND0teaGz0bNbkw7sA%2FStAIhALce2vZDyO89tU%2F6%2FMuwUmaGruH2AyuQUGz70Y0EL4exKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysoXPHBBntDXkA6zsq3ANSctYWUUY5vW7Xs33bZKvHMkvSnHT5TiWgYpGMTsHFvOOuK%2Fr6rrOLHRzNbEr%2Bp6PGI9dgVmmbiHRk9rd2AOfmmvdEA1HrCUfKVR5OLr17MyUhfNxpo6r5g3sbYytQlf7aqYVXRjN%2FLaNNTMAZvsMovPVSbSgBOJlEhdU%2FIoJgfYuntf%2Fp6SKywbYi9Eo4Nq11hFwUMPGkkDoecs4qEYOmL0LaOA2D5HoB%2FnrV2hX6xc0dC0df%2BARePPQan6YfoDB2Wb15Nm7byFSHgHnRV%2BpBTjeVC5N2shiX7BCe6rOVy%2F%2Fps2sNoPWstPUfyZ8UAddiD1OdwsQnVPlv6f8ymCMw0f182v16%2ByjpnKuSTVnimXYiMfc%2F292enLylj2tnD34q998ypPbLrz108VjsDP%2B3xGWah57zqtj5QMfLT6RJ%2BhqG4umNLyJdSztmtdynp8JtgCajcPQnd7iKgeqymB9v%2BrjGGncTwH7Lpyji%2FeGUNFIyjdKFMTKCbQIB0EOZT0idTZurf2C6dbttIIU8X%2F40cnZUk5MXvUHpsTfUtO0SlFajPhGlITQCo8LL%2BQQYy9xlnWpWKwl9thyGD2UmukT%2BaH6P9KiCm21lMvzIbp5281axxNF9Qo%2B1FqtkKDCgyZHHBjqkAc34bKFy%2BstqYD0OAu5N%2BGNEduRa6SWRzk%2F3UZwkGIiNUpLPI9Hj%2FjARKVNJdSq2iY%2BAWZI%2B253%2BMnvY%2BmOHTECKPEx3HuVZTlo5%2BTnKTvjOv6xchR30mIaEDAE0tAU1B8iKLD1O0yfWYHWYbvCz7Aw%2BENttjfvycmhbCxlraYCey%2B7XinAFKle5K%2F9iqJC3NHM3Qyl51ZTu8OKHJEbof4HbbRv9&X-Amz-Signature=994e311715e85a7cca6adab207344e0783a664b268d0e68bacccce8ef9becc8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQB6FXRO%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDLFcT9zxOJSLwzCD2tlCmy9VVX3MBPgC6xzj9ViaT6tAIgAnDUvTV6UcTta28f8t5FxE%2BpyXj%2FkGMQ7ZOTFKLdcvEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7yai1nlrpEESC6pircA%2BjGp95gfYFP28wExesYGI7S2vFmXq2Xar4Tv3gCcYCrMKZfB9q%2Fhcj5cJBKu3HnJdgiRlrPh%2B4rlr1SXAfyDbUz9M3rTCeaQiv3UXcIg8qkaag72tFLXopNFAtQD%2BP%2BRoFW%2BqpRlSB4r1sDz%2BM5pB6Am03TsZN%2B7ENs5vlUjIOPYiF8qM7KHBpgAa68weumRX0tU2Dk06Tx9D9KXmPtbz7FaxLYaVOO4fN%2FQUM9j6IjS1KGZ%2ByxJnsaBdwIlpMk0j1lR2%2FcxibhdWrL7YesJUTdFj%2Bkfc7XP2RIL0SajAEVZGHktN%2F5Gez0q03xuDljUO%2B4JUc7ZacuVpb7%2BvaiJHQHPBeDgO9sb8hOgARKOnbBkxEsGbQoZlTBuUk6MmiEafa3LaweXBcbxPxx37GJ0iTtjYYEQeWQI%2BfZ6iNXPs%2Bmi5%2FKtfMafskKU5mNP3Do2OaYM7NmYjXJHQIMoFPHbQX5c9OGpqyOHjtjWYqAyz59HPVk0zVpREstCsI%2BWJsfQ%2FWZwUGW10GL98wVFaSYmg6mNg%2BPD9yFCDvjvtjogN%2Blke9Ka3pNqlDspdIpjmeLs0WBX42O4dY7Eg7B%2BzmKDZTO56mBHGZJRQuKc%2FrVTZjzdrHFqzTmxi1cS866MJ%2FJkccGOqUB1cHdeKwvtI4l%2Baloqh7qWLB4EcdiGnpcu7WxTNX9HmgUDjOVQi3dJKsf9TYFX32bKG93aifOpBzbpVdVJpl7U1ug1c9TO7N9du8Adr05rIpVH%2FAVjVGUMeAlH0kJXtswEO9CsDRdSxrnhwahMAPYEcxvKmRMgXYEUJgsNBg7wb6z%2Br65ZjifcmWzqCXlGFqS6LSd8n05rtp6bqRf4SQhJSpSSqL3&X-Amz-Signature=06df20a76d1aa9563e65baf891ac5222b0bc732a20e0d1c352db75c82761a4b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHY7HXPI%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDsan%2Fw8jxJJT%2BNNSrziHU0y0CYV%2Bp46di5o%2BcShRy%2B5AiBJGmRxOWeAPG%2BQmXYOG31QnPXsWkh%2BMF5jlEOqFUMRHyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF4tcoaY8zWaphJ9gKtwDm0levfrI7qf1T3dLtYUqklLwkScKnz0bBsCg1AxhnhRX6677HvVHMAW6GE1HyHUrQ6lvBlCtHopWSjbBfQ5ocXUowQYb%2B%2FAxiOv5o9bTD36v4xR9mTnsr8vZO53sf7X5akIqFS6RLK0tkEe9HSt2cJPTb2TJEPG4uKy9r1u%2Fp1igUHrdnmajWgPi86u1YOGIupL1JTx%2BZyNm35uhNeii85peMIXVR%2F2ArAcTijgvfql7LCh%2BDRLLfXI44HTQypQr6aPR47dBEkqmnpW5q8CX1JE8YN5NgqZrf%2B35Srocz4EmfBNbWP6DCyfBKhe0ncDrGj8kbQc3MtKDseIvlMFlQkjX5NWt4MabbM%2FvFGRlCtB3jUIzky%2F69Dt9LViwGrGAq8%2B1IAMYuw8ofvrxqmWvLenoY7SOYwCampjX2czYLtn3Uthqknt9gTAjnk59qvbsa%2FVw6BeOd15rCj75eQjYVN34asU7ncqLgDs4O1xPze79GKYiA2mGDquLIQ8PV2rYF3AxfITBCUPk8XlDnt5XIBJcEKPtCYGD5Yq2GOb1ZkLVYWM3mrD0g0TJvUbib9aY47oqYUKKwkZ15qGEloQFP4lxWg6tlwWcCqqWeCEjKFP51eyQpZUuZ3eDU%2BgwoMqRxwY6pgGkMrE%2BvYEU57MGAbFrlzMbxLnpB2SsEZtYmZPfUoZyD8hbjeqVvbvIFEcL7Z0m%2BV5CpvIEV3oMfSI5VP8ENNmSEggCqrRU7qIuAjKCQchcCSDuXNdOAE8aNgk%2BGt0dhV4vRk9Key%2B6y5tiLTa1oRegTIDffECB51RmH17HiO7ULewWbf20Z7uc6OqYlHovTYJ%2Bd3KnogRmZe4Q%2FqkdxjgQcDsl%2FxyE&X-Amz-Signature=72d1b6a54fd15a47aef1cc095a4880b9acac2f2137fe84c2d5e5f7e85aca2fc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHY7HXPI%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDsan%2Fw8jxJJT%2BNNSrziHU0y0CYV%2Bp46di5o%2BcShRy%2B5AiBJGmRxOWeAPG%2BQmXYOG31QnPXsWkh%2BMF5jlEOqFUMRHyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF4tcoaY8zWaphJ9gKtwDm0levfrI7qf1T3dLtYUqklLwkScKnz0bBsCg1AxhnhRX6677HvVHMAW6GE1HyHUrQ6lvBlCtHopWSjbBfQ5ocXUowQYb%2B%2FAxiOv5o9bTD36v4xR9mTnsr8vZO53sf7X5akIqFS6RLK0tkEe9HSt2cJPTb2TJEPG4uKy9r1u%2Fp1igUHrdnmajWgPi86u1YOGIupL1JTx%2BZyNm35uhNeii85peMIXVR%2F2ArAcTijgvfql7LCh%2BDRLLfXI44HTQypQr6aPR47dBEkqmnpW5q8CX1JE8YN5NgqZrf%2B35Srocz4EmfBNbWP6DCyfBKhe0ncDrGj8kbQc3MtKDseIvlMFlQkjX5NWt4MabbM%2FvFGRlCtB3jUIzky%2F69Dt9LViwGrGAq8%2B1IAMYuw8ofvrxqmWvLenoY7SOYwCampjX2czYLtn3Uthqknt9gTAjnk59qvbsa%2FVw6BeOd15rCj75eQjYVN34asU7ncqLgDs4O1xPze79GKYiA2mGDquLIQ8PV2rYF3AxfITBCUPk8XlDnt5XIBJcEKPtCYGD5Yq2GOb1ZkLVYWM3mrD0g0TJvUbib9aY47oqYUKKwkZ15qGEloQFP4lxWg6tlwWcCqqWeCEjKFP51eyQpZUuZ3eDU%2BgwoMqRxwY6pgGkMrE%2BvYEU57MGAbFrlzMbxLnpB2SsEZtYmZPfUoZyD8hbjeqVvbvIFEcL7Z0m%2BV5CpvIEV3oMfSI5VP8ENNmSEggCqrRU7qIuAjKCQchcCSDuXNdOAE8aNgk%2BGt0dhV4vRk9Key%2B6y5tiLTa1oRegTIDffECB51RmH17HiO7ULewWbf20Z7uc6OqYlHovTYJ%2Bd3KnogRmZe4Q%2FqkdxjgQcDsl%2FxyE&X-Amz-Signature=255277ab35e204b598f8130ec6736876241ebcdd8fe431126315570dc379836f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQB6FXRO%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDLFcT9zxOJSLwzCD2tlCmy9VVX3MBPgC6xzj9ViaT6tAIgAnDUvTV6UcTta28f8t5FxE%2BpyXj%2FkGMQ7ZOTFKLdcvEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7yai1nlrpEESC6pircA%2BjGp95gfYFP28wExesYGI7S2vFmXq2Xar4Tv3gCcYCrMKZfB9q%2Fhcj5cJBKu3HnJdgiRlrPh%2B4rlr1SXAfyDbUz9M3rTCeaQiv3UXcIg8qkaag72tFLXopNFAtQD%2BP%2BRoFW%2BqpRlSB4r1sDz%2BM5pB6Am03TsZN%2B7ENs5vlUjIOPYiF8qM7KHBpgAa68weumRX0tU2Dk06Tx9D9KXmPtbz7FaxLYaVOO4fN%2FQUM9j6IjS1KGZ%2ByxJnsaBdwIlpMk0j1lR2%2FcxibhdWrL7YesJUTdFj%2Bkfc7XP2RIL0SajAEVZGHktN%2F5Gez0q03xuDljUO%2B4JUc7ZacuVpb7%2BvaiJHQHPBeDgO9sb8hOgARKOnbBkxEsGbQoZlTBuUk6MmiEafa3LaweXBcbxPxx37GJ0iTtjYYEQeWQI%2BfZ6iNXPs%2Bmi5%2FKtfMafskKU5mNP3Do2OaYM7NmYjXJHQIMoFPHbQX5c9OGpqyOHjtjWYqAyz59HPVk0zVpREstCsI%2BWJsfQ%2FWZwUGW10GL98wVFaSYmg6mNg%2BPD9yFCDvjvtjogN%2Blke9Ka3pNqlDspdIpjmeLs0WBX42O4dY7Eg7B%2BzmKDZTO56mBHGZJRQuKc%2FrVTZjzdrHFqzTmxi1cS866MJ%2FJkccGOqUB1cHdeKwvtI4l%2Baloqh7qWLB4EcdiGnpcu7WxTNX9HmgUDjOVQi3dJKsf9TYFX32bKG93aifOpBzbpVdVJpl7U1ug1c9TO7N9du8Adr05rIpVH%2FAVjVGUMeAlH0kJXtswEO9CsDRdSxrnhwahMAPYEcxvKmRMgXYEUJgsNBg7wb6z%2Br65ZjifcmWzqCXlGFqS6LSd8n05rtp6bqRf4SQhJSpSSqL3&X-Amz-Signature=a44a6825967d570e0134c4aeb634438b2da6d4602494200048935c94becee48c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQB6FXRO%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDLFcT9zxOJSLwzCD2tlCmy9VVX3MBPgC6xzj9ViaT6tAIgAnDUvTV6UcTta28f8t5FxE%2BpyXj%2FkGMQ7ZOTFKLdcvEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7yai1nlrpEESC6pircA%2BjGp95gfYFP28wExesYGI7S2vFmXq2Xar4Tv3gCcYCrMKZfB9q%2Fhcj5cJBKu3HnJdgiRlrPh%2B4rlr1SXAfyDbUz9M3rTCeaQiv3UXcIg8qkaag72tFLXopNFAtQD%2BP%2BRoFW%2BqpRlSB4r1sDz%2BM5pB6Am03TsZN%2B7ENs5vlUjIOPYiF8qM7KHBpgAa68weumRX0tU2Dk06Tx9D9KXmPtbz7FaxLYaVOO4fN%2FQUM9j6IjS1KGZ%2ByxJnsaBdwIlpMk0j1lR2%2FcxibhdWrL7YesJUTdFj%2Bkfc7XP2RIL0SajAEVZGHktN%2F5Gez0q03xuDljUO%2B4JUc7ZacuVpb7%2BvaiJHQHPBeDgO9sb8hOgARKOnbBkxEsGbQoZlTBuUk6MmiEafa3LaweXBcbxPxx37GJ0iTtjYYEQeWQI%2BfZ6iNXPs%2Bmi5%2FKtfMafskKU5mNP3Do2OaYM7NmYjXJHQIMoFPHbQX5c9OGpqyOHjtjWYqAyz59HPVk0zVpREstCsI%2BWJsfQ%2FWZwUGW10GL98wVFaSYmg6mNg%2BPD9yFCDvjvtjogN%2Blke9Ka3pNqlDspdIpjmeLs0WBX42O4dY7Eg7B%2BzmKDZTO56mBHGZJRQuKc%2FrVTZjzdrHFqzTmxi1cS866MJ%2FJkccGOqUB1cHdeKwvtI4l%2Baloqh7qWLB4EcdiGnpcu7WxTNX9HmgUDjOVQi3dJKsf9TYFX32bKG93aifOpBzbpVdVJpl7U1ug1c9TO7N9du8Adr05rIpVH%2FAVjVGUMeAlH0kJXtswEO9CsDRdSxrnhwahMAPYEcxvKmRMgXYEUJgsNBg7wb6z%2Br65ZjifcmWzqCXlGFqS6LSd8n05rtp6bqRf4SQhJSpSSqL3&X-Amz-Signature=585139abd365dafa7508ce5f76ebcb2b1ba770aa3c47bdeb831b71913a53d870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z74CW7SS%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIGoBcC0h2oOtbgHs0Kv99p6UXP9vs4Vo%2F4mrJSFnuuwyAiARCv1ZGSX5j7Wpt3%2Bauj0NukJ1%2FpskDFWFPFPn%2BKduRCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWzAasgysI99HB4rmKtwDy8gEIUId54Tg4WdbQej0Na2vjYEyoPE%2BHEc235dWloFoN1jESwQZ2TqkntpKwAKNbk8WMeAJDkh6lP5LsA%2FV3G8VrDCdvQgMz2g2tf0%2FN9EqpmM5XX%2B%2FECsEuGsnuszXIIbxpFp1WwKHgwi7aNyCcYxlVIKtrziuT%2B%2BsIxVieQlQO24lcKDuUCeVLNT8uiPbkDiFsuWEl3dvPFAC7QqPFpkeYvAjsvypkB2A9%2FbjEIoHJlzKuP9yue%2BOlaSMwusNBEBGyji%2Bjt%2BlsDhfUtH5uB6qqhgLsqIBgW0wsl8RSChsUDZvR6omXLB4eTOywBUtyoPnimg%2BbABJkuzu8czojlITYwYyHBaem1rlNFlsRLkKtPWQujvIChneeCPBOuuTkQyxZjebMR18g5p9flYJwGpneJrMXOaUSinD1J8gQnZ5KVSwSR%2FYeDSgW6YGcfvI6TfB%2FU3m%2FfI9l1SeV%2Fnlv%2FFR%2FTuhJzoi%2B5WzLd43LFcJtLC%2BlKuHPRCwCO35RmsEBKHtyFSD0kIRO3bKBTcFXPjNi6QH5aitTaSI2Nr%2BzWwUxCej03kSUvZCCrp%2FjhTvJjwjmyRIDJEv5OdVgFmTanDADHDb0Qo7bVfr9bfSDq20EWuU2PZHj3oQmZcwlsmRxwY6pgGK3UCoAeGfJVDn7AGpTt2H34i4Zyrt99q82CsRfJNFXisx6IFuBHK3qAVGJa4ElPcZZ84B3WQykzZS%2FN4zNdb0J%2F6WC9ESCGzODekY58Tm%2B7PnouXndEXtGok2g9aeSteB4A5oy5rJUR2o5BzlZuYqUXyoI8rEeNoiR5aATjGfciLlcGP7AXPuGV3cctaNK9r6E1xmVP0Lm8UadRa8kdztcSiB%2BCSW&X-Amz-Signature=d9ebc514d626633533505c06790e751a1ef5ed23582df54b3032b8ad966e85dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

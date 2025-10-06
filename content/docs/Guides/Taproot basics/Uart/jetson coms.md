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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTOV2CK2%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BsguNcHE1aPbLiWSw9AeNGjOY5JFKWfcyVwmwM76PpQIgRDCHiZYF6EARE%2F5QcTrv6BmtPPM4CY%2BFkbYqW9XkVusqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqwbOCSaddc9qX%2BiyrcA9tsG6ofoTu3XMRLQZ7DBThUYZWFCVht9Fwva0fH2npSdSrbXxKdSrWiU6a6X%2FqfmjNbIcjS62lVqZg%2FtfaIMw%2F91i5p3mDYSAUGVaZ6acLXJLrIDsmgvQ%2FThuBVPvomqIBXlejHTfojGrS22Krx0PT%2FlNV1p6Kzonn7mz11aj66OMC7cdqFiiTfdKsjC2QweZVY%2FFVdbPVP6WJo9K37Y1KBYI1lS2J0skjJ2cRklLAaqcXdRRr%2BlM0OoQo7ReR7%2BK5AFJUmcV0JjC%2B3nJlIqWEeaSroyTdlpi8H5JDR5txJnAM%2F9E%2B4msVWfKztIeFrVNCA8z4FFQc0xxrD%2FF2IDvwfObj4pnybUKaR2unUzio2LPmWAIqw%2BiaX65TkS8UyS6TEiO44FCeN7Wocv8LM51NAmNRx2kbl8%2BrLeJV6CN75jsj9DgS3Nquu4cOwmrZVsmhI9nHQvo6JZsZ%2FvTeRy8tjXSQuVMbRzHjLM92bCAwTKRismF4jQVl4OJw%2FqUl0u6C15cjeTlK%2FFwsu2Dzmqx%2FNX1TUI50DTl%2BXQ5o8Y88Vr7f9MJvzmTNylZhTlshWxMyUxeJXYFwKPxgHQY6uIfJ3tkK47IJZv1iGcGpvfR0Pqzav%2F3G%2BCZXBlIXuMO%2BVjMcGOqUB5cYY%2BdNeAqSZXLyputPMBlco0J9wlxHHl4CDhf9m5Wuvy5dZwtbVNN4%2FIz8PIt3wXubWqpTCg7n%2B1UJq%2FGCe%2F4SF8Kvqt597TfZF0BYx63H%2FtbdSThLL%2FKnF7UG5P%2FUIGti7ZNcC22JPfqrsmDLGC8HVnylGxLIE8JFSlaLi1HECIiEVr5wDB8MYFsmkBmGnFzwUZFmu9A6TTk6wUpD5c%2Favhbo%2F&X-Amz-Signature=5554d52ae8a98fd3bceb22d9212edcc6293772e0eb1bf7ba38f5f53e1c123158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6EZKBYI%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSonOJQpQp9jHHrjWsJ5irgd5Xut2Gsxx5ZTPYVpBQ3QIgfB1KqEynjlWog43ntR5z%2B9dCuGGxWvTrmDZdzlJ654gqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUdPOcicDL9izaiHSrcA3eVinMkq7hDQzhOo9uH%2BRrmCgzXLUjGlSuBWqHewc6xH%2F0ueXEdQ3kJpO6E6eUHKLvRYYrIJeIpsGIHqrMlrIv3ENM36z2cjtls9RDIwAfZneMrcL5Zv3y%2B4g3BzWyegkzLiqtCPbnV%2BLlw2WAwxlxN3ASjd0cgwKTX1KD%2FvMwiWtrr4Dq2wHuT18ynXVuo5vO%2FDmLlmYTA92Ak17yKnkLXS4xiGMC03nkHLrhOjK5UjMHq5MZMZBqIoduASgzXlLm2ub%2Ffm32Q8cWGtUPSY83hzn1FKdok71EDsXKn%2FY4dzO2u9%2Fhp%2BaHYXVu0HEwSxJpilyr5q%2B2hVNCgUk0RnaBkZXrhCTThh1BqGE0roHya2QAAVlFNSS9Xnztz6JV5CIuRRlnwES8WIIYD%2F1fEeDjFJ76o%2FPZRghBszhqtllsVkSWyioIzmwZ0WdbvKEu3aXo4MadQ%2FOV37vOu%2F%2FOnHUiLXtWdiWDsLPp%2FxORvM%2FZwxhnhDgGjL14zEfxDC90Vro03Yu3rSQv4qS8lziZeImfI3emp%2FDLAxFvDvLn8bbdL7d%2BML12dF7hq1sg6Qvg5%2F5cafGv2flToUFTjFwnrD37EfgFxSpQccMFr5zqG8iA67wJ1YimPI1yA6JPpMLuWjMcGOqUBvJ6oJaYh6oK9oXUg%2BnEB7oPerPtk9qVhj2tG%2B8Et8qlZgYERIeG17%2BbXJOzV88zV7mGlNktcPdVpZxXsoX9GuqPlqcO4qwKYrrUOyi9tBxCyhsm8Y%2FbCHcdu1qAsH9kkUHvw3iOMoCXuNaBs9VuMKQKpW%2FckO4UdOW0rWIOBwMup%2F0iZAGFNfSG5Bj6au7Upgw5CoeYMXbDCp2vRKcSfi%2BZp0Bau&X-Amz-Signature=0215c3c6c56120e8dfbbdcad611105fb36b69a71f0af78c7450623bf834990e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGIZL6YG%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUAd9T3SaePVqSu8EPfHiYa%2ByOwxHPNsLxC0gjFc2V8AIhALseJxxu8n%2BdUCfOv4Nw%2FCKrv6wPXBkoz8ul%2BSDnWmXfKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuHCPVXtT6hgDMvN0q3ANQixNLzTX1mIBGvAYDE8859DOGV%2F90EZRA3waYzJLmdqu8gwwiEtQgqyQiGgjttMxthmZSAAUDBR27%2Bq4EzlTOtxhbbhCMyV3H2gtOiS1g4OBo83skJE7EhFLyt%2FPiql7uZJyvujADKaQ80SN6Z%2B5X4lQ5dum9jXuqLQIGMOUCQPP6OdxPS9Nk59TQYtV1DyQHTgpnKXYf0VKYK744vjSlmVcRR7OpVDbSaROrvdggapMjyA5hDouhK2yi7VKENr%2Bx9DiMydlHV1EOFPtlP857BTh95zQzRLsL%2BWc25KcTMeCcVO7hGMsYP3PrJ%2FLMga2Mpdi%2BK9cnc7HDjkQQ5yz0pu0nJfjpYxIJBbnbWw16xqP0eb%2Bw2ubaVpojhzgtJe6RDPj9XI9YeFDx9EabK35gDd0HynrLL%2BflJq2%2BKn8mVFxHmocYXMko4YF00cwq6dgE8xAuWqjlumQJE7Knh%2FJFKRjtPJBq%2BLZ2l1jW31WuFPfT0AB7a0l7ruPQia1pI2qYkimn1VFo5niZT3Oj%2FvqTwQeNXq0WCaK7NxeJSbDVyF8T0n9nu1zzXF6zQO3J%2FrJvxmTXIrYh0F7npMeAnn2AiHODyi3v5om%2F955AJh47dcA1fdD03UdrmKKFDTDTlYzHBjqkARdcolJpGyQRxR98Rf16JQQQz4XMe3V6KgQjODBnC22xGmRNfwUai2Eb6wJkhJgmX4wvW46OFX74X%2FhcXH3m7y2sqnucrLXXI3nLRtGKyDgmik%2Bzpu%2BEt%2BtkQCmZNy7U84N%2Fz4F81hN6NGbudt29tINuU1Mub9yvMMfKpne8B26bA3Pac4Fty6Le5l3V12BGUQFMpFRdEFgJrR1sQQ291NYd3ijO&X-Amz-Signature=65f7f2c307a36e66b8957ad21ce3c13c47489607ec7a765fde1c1b74055aa0be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGIZL6YG%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUAd9T3SaePVqSu8EPfHiYa%2ByOwxHPNsLxC0gjFc2V8AIhALseJxxu8n%2BdUCfOv4Nw%2FCKrv6wPXBkoz8ul%2BSDnWmXfKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuHCPVXtT6hgDMvN0q3ANQixNLzTX1mIBGvAYDE8859DOGV%2F90EZRA3waYzJLmdqu8gwwiEtQgqyQiGgjttMxthmZSAAUDBR27%2Bq4EzlTOtxhbbhCMyV3H2gtOiS1g4OBo83skJE7EhFLyt%2FPiql7uZJyvujADKaQ80SN6Z%2B5X4lQ5dum9jXuqLQIGMOUCQPP6OdxPS9Nk59TQYtV1DyQHTgpnKXYf0VKYK744vjSlmVcRR7OpVDbSaROrvdggapMjyA5hDouhK2yi7VKENr%2Bx9DiMydlHV1EOFPtlP857BTh95zQzRLsL%2BWc25KcTMeCcVO7hGMsYP3PrJ%2FLMga2Mpdi%2BK9cnc7HDjkQQ5yz0pu0nJfjpYxIJBbnbWw16xqP0eb%2Bw2ubaVpojhzgtJe6RDPj9XI9YeFDx9EabK35gDd0HynrLL%2BflJq2%2BKn8mVFxHmocYXMko4YF00cwq6dgE8xAuWqjlumQJE7Knh%2FJFKRjtPJBq%2BLZ2l1jW31WuFPfT0AB7a0l7ruPQia1pI2qYkimn1VFo5niZT3Oj%2FvqTwQeNXq0WCaK7NxeJSbDVyF8T0n9nu1zzXF6zQO3J%2FrJvxmTXIrYh0F7npMeAnn2AiHODyi3v5om%2F955AJh47dcA1fdD03UdrmKKFDTDTlYzHBjqkARdcolJpGyQRxR98Rf16JQQQz4XMe3V6KgQjODBnC22xGmRNfwUai2Eb6wJkhJgmX4wvW46OFX74X%2FhcXH3m7y2sqnucrLXXI3nLRtGKyDgmik%2Bzpu%2BEt%2BtkQCmZNy7U84N%2Fz4F81hN6NGbudt29tINuU1Mub9yvMMfKpne8B26bA3Pac4Fty6Le5l3V12BGUQFMpFRdEFgJrR1sQQ291NYd3ijO&X-Amz-Signature=dd1c5b701248d7daf7d60534f4f0e68eb6273da91b61030395f656132c21733c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6EZKBYI%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSonOJQpQp9jHHrjWsJ5irgd5Xut2Gsxx5ZTPYVpBQ3QIgfB1KqEynjlWog43ntR5z%2B9dCuGGxWvTrmDZdzlJ654gqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUdPOcicDL9izaiHSrcA3eVinMkq7hDQzhOo9uH%2BRrmCgzXLUjGlSuBWqHewc6xH%2F0ueXEdQ3kJpO6E6eUHKLvRYYrIJeIpsGIHqrMlrIv3ENM36z2cjtls9RDIwAfZneMrcL5Zv3y%2B4g3BzWyegkzLiqtCPbnV%2BLlw2WAwxlxN3ASjd0cgwKTX1KD%2FvMwiWtrr4Dq2wHuT18ynXVuo5vO%2FDmLlmYTA92Ak17yKnkLXS4xiGMC03nkHLrhOjK5UjMHq5MZMZBqIoduASgzXlLm2ub%2Ffm32Q8cWGtUPSY83hzn1FKdok71EDsXKn%2FY4dzO2u9%2Fhp%2BaHYXVu0HEwSxJpilyr5q%2B2hVNCgUk0RnaBkZXrhCTThh1BqGE0roHya2QAAVlFNSS9Xnztz6JV5CIuRRlnwES8WIIYD%2F1fEeDjFJ76o%2FPZRghBszhqtllsVkSWyioIzmwZ0WdbvKEu3aXo4MadQ%2FOV37vOu%2F%2FOnHUiLXtWdiWDsLPp%2FxORvM%2FZwxhnhDgGjL14zEfxDC90Vro03Yu3rSQv4qS8lziZeImfI3emp%2FDLAxFvDvLn8bbdL7d%2BML12dF7hq1sg6Qvg5%2F5cafGv2flToUFTjFwnrD37EfgFxSpQccMFr5zqG8iA67wJ1YimPI1yA6JPpMLuWjMcGOqUBvJ6oJaYh6oK9oXUg%2BnEB7oPerPtk9qVhj2tG%2B8Et8qlZgYERIeG17%2BbXJOzV88zV7mGlNktcPdVpZxXsoX9GuqPlqcO4qwKYrrUOyi9tBxCyhsm8Y%2FbCHcdu1qAsH9kkUHvw3iOMoCXuNaBs9VuMKQKpW%2FckO4UdOW0rWIOBwMup%2F0iZAGFNfSG5Bj6au7Upgw5CoeYMXbDCp2vRKcSfi%2BZp0Bau&X-Amz-Signature=8231eed2790446b1224dea649272d45cffd34758372af3816998da51938c2a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6EZKBYI%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSonOJQpQp9jHHrjWsJ5irgd5Xut2Gsxx5ZTPYVpBQ3QIgfB1KqEynjlWog43ntR5z%2B9dCuGGxWvTrmDZdzlJ654gqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUdPOcicDL9izaiHSrcA3eVinMkq7hDQzhOo9uH%2BRrmCgzXLUjGlSuBWqHewc6xH%2F0ueXEdQ3kJpO6E6eUHKLvRYYrIJeIpsGIHqrMlrIv3ENM36z2cjtls9RDIwAfZneMrcL5Zv3y%2B4g3BzWyegkzLiqtCPbnV%2BLlw2WAwxlxN3ASjd0cgwKTX1KD%2FvMwiWtrr4Dq2wHuT18ynXVuo5vO%2FDmLlmYTA92Ak17yKnkLXS4xiGMC03nkHLrhOjK5UjMHq5MZMZBqIoduASgzXlLm2ub%2Ffm32Q8cWGtUPSY83hzn1FKdok71EDsXKn%2FY4dzO2u9%2Fhp%2BaHYXVu0HEwSxJpilyr5q%2B2hVNCgUk0RnaBkZXrhCTThh1BqGE0roHya2QAAVlFNSS9Xnztz6JV5CIuRRlnwES8WIIYD%2F1fEeDjFJ76o%2FPZRghBszhqtllsVkSWyioIzmwZ0WdbvKEu3aXo4MadQ%2FOV37vOu%2F%2FOnHUiLXtWdiWDsLPp%2FxORvM%2FZwxhnhDgGjL14zEfxDC90Vro03Yu3rSQv4qS8lziZeImfI3emp%2FDLAxFvDvLn8bbdL7d%2BML12dF7hq1sg6Qvg5%2F5cafGv2flToUFTjFwnrD37EfgFxSpQccMFr5zqG8iA67wJ1YimPI1yA6JPpMLuWjMcGOqUBvJ6oJaYh6oK9oXUg%2BnEB7oPerPtk9qVhj2tG%2B8Et8qlZgYERIeG17%2BbXJOzV88zV7mGlNktcPdVpZxXsoX9GuqPlqcO4qwKYrrUOyi9tBxCyhsm8Y%2FbCHcdu1qAsH9kkUHvw3iOMoCXuNaBs9VuMKQKpW%2FckO4UdOW0rWIOBwMup%2F0iZAGFNfSG5Bj6au7Upgw5CoeYMXbDCp2vRKcSfi%2BZp0Bau&X-Amz-Signature=9bcaa0a840de12f34d86a4aed447deb4bc6bb290279ae363c1649e15ad46c68d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USONSKSW%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJy1upTdIjuruzdHJDd40vGeXaabnPrgzhvSxQv0%2Fj0AiEAyK11LZdHJ15nGlJ%2FpPbcIEvxTPWgJlLXjiYwbxTgijMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuL6fpIfhfxK6%2B2rCrcAxg1GIHZSqa%2BFK1oSE2sI22rBa6Bv4vjkqL461LzMmNuAKQYfseZC4vfr9yZO7sToHgzmrTn4m0lZUGbUozXE9PiVCFWAyXU8n%2Fa5m4e4cW05xYk955eW928yzVWFKbNN8m1D91rIYO6%2BSUWjA5KdFG%2Bg8Mr0%2BlA2%2BO4PDJy33JjeLDq62ynFKDwewhRrb6%2By3bbQpZlAvc1nmYt03h6Cjyom5Dr6NEatquHnYWwPjaEKdc27vzbGflyXDmHV8ln%2FvA1thG0mD%2Ffs7HXzZuGD3db0j8G2oOE6HXB3PUSYbHZi8FsBvm58MQz9YWKeYt02KgdBjxzUdmFzaznm%2BxZqRGaTzqTwcWes4K8mrJDBq2Sy%2Bre0USEwfyEM1whogwlaromVGK6TdTruadH4XSW1aR7vKKJJj1%2BhPYLbTNxYCMCEVUQHc5nkFp57lHzRYC%2F5%2FtmzzttqQmWBeRmSaicS4xH9NEUZN9zRVl2oPDQht7dB6pEeyMc6bxxsXMdFcdzMm4D%2Bpf3kofDCmrKA%2FlyN9rnTPpI%2BraIxhTESigUCW1Im%2Btb8ZzCQc6v%2F%2FlnlrC6mf%2BZl32pdwoCUJxGFsDC2uHHPmggA3XA13DlYCHHfOlDb%2BRxOMyOBmfMTgRSMOWWjMcGOqUBsctcGmChPHMd0mrMm0vRYU9cl5%2BAc%2ByjMsouKmop2TmPChfbOwB1QWXi7k%2FwQD5%2BZyiwhlhyfxN8SJVTjwdDGoHDRQSI6gFdh8xArZItARhy%2Fvc2bmoamK6Xbo64Yr7lCfPm5TLe%2F%2FUkcdhF9%2FwrCRm2ASKapKldtzolq4VxOdUKgwCEz8qGVIdHaa9dK2YAnRNpiW3002v4pUPA2ZwklTsp7%2FsD&X-Amz-Signature=67a43ce7a8faf73d5d48f2339c4ed38897611fdc4b48578fc6acc77afbe07c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

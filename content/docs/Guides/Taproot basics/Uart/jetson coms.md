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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S32W64I5%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC76%2FOeTreGZXdiA7awqboQ1U8htyz7UMNTTj7El719HAiAQIrygkBdlzy4ZGNeeZ99MK%2F88LWY2FMZxCYM1z%2FyoRir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMLph5T6LfT6dcSq0SKtwDVPlfJ40SXz2UeE54RuZHWmt0EIAJ9g7Q5zmUobxg1bXU4a6Yx7ep%2FhcvhDmwbCD56UK%2BxMn07oiisbJDWKgcWNTI6du1TYtO8I6wuO0%2BZXlq02cK2k1Ae%2B1VXliLI5cpesaigHzzSxJSLYKe8eX1md%2BdYo83ZNi8bM65id9u99Q0gAIEXQxi5Chix8PKU3pE56TENKGmz7SLuCj9VDZQCV5YkS7yDAeXc3pQrFCRZPBgZy%2Bd2FXjBVEtuP9CBdDDU4jzQlY0COstU4R%2BLQWpD6VBSazy9gv%2BZwpAHgHhlXsMT0dRoQuMtDCDfiYbPg4STc8mQ23BNe9RTtFg7vImSZWfltYa%2Fhrx0m8lg%2FSv3CgPCsQ88P%2FwwhjM0M6x40KpmiINhv%2F%2BYV040rPKCdzxVGgplU5I85IDcm4ZxAvuBL0wJzc5a3mthQQptwZoNmR1O6csPLWF4OMuD3EJqFUO%2BmDWKwPHRqQxdYa6ZaSJsra2xxgja%2FNw9BUQdpawJQFd3Ep93dF0kbALSoxUXBvipPZRwiiuSYePYC6OSjybtTpWWHlPEwqlqVYnZXdcTyQvZ7SU48UV5P%2BMGViRwHdSY1pP6AS60Vc3iohsV%2BiRg1E%2FkVmiyvi5WgNxs%2Bww4tGNxgY6pgHhKml7P80oZDGSALO6d4PX1skwHTNheE16AUcgrsEX0ExAs3gcJYH5kgZnlthg6ocCUNO97twPRVivEQluX%2Bo%2Fl%2FyGwYtMQKDTVMbdgXV%2FgEs0tvtVcCzzBtOAYVVZITenSSFwQkREvSjTMNwVopZ9%2FJ0eHTPMTeJg8%2BNxMlNQu%2BHOCd%2BtOkumCM7kL%2Bnb8Kbq2Qz4aLBSOJi3hC9T7PX11scpvPjw&X-Amz-Signature=6cc59447f2d4c6c2063b4b95bc51d60342c18760c121524c7f29c756b7b1408a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSDU2YWA%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfzJkjkSZd0sqn8%2FvXA9Z6Vg%2F9n8mutrkTHzmQD3SOxgIhAPj1wSriWESaoYu%2FcQ4PrJsF5jWz0nuMyxKVuWjKovWLKv8DCCIQABoMNjM3NDIzMTgzODA1IgzVqZZ8FgdkwzMfB8sq3APqva2WzyqPQ3WxKdxp5lYAIzgaMJAsRNZ7Hy771Ue%2BuhIHRF274%2FkQgn5qbX4mH%2BbE%2Fj0fE%2BhIsZImzInHMNWK6BaCDiLDtedvwJ88ouc%2B4H36yyixUZNdOwaDbiTpc7Pa9puQlMN6LYq6ri%2B9in6ipA%2BB8fU59Tx7BBUmwJFz%2Bk1HxGNry8Uln9Xt6UV5my1ZEIJNEvXfBEZulht%2F25Wpp3nGJg8v%2B5JjbDdJFrTmnpa0I3G%2BJewbqsdAnC70KVhvZWTevCf1dTFOQqYAQWdPaT42D4bY1YVmO8nyM15XBkI4oSDKKQYm52h6J0KhpvJq763o8WH3gjRXOPU7ZRMLAgxZooVxRKTiO51blTpYa1NLuZSYcFeq2VjYfgBQyQ73AkHxxCi2Ved7Lsz1t5Ep%2FgJsfoSc%2Bf206aYJGrHLJ470tdQlq7q5fGaQTP6vRM7FjZkyst9pCL7xEg2axc1359iSS4PFm0YuBFL536hRYEgMWJMxRkwwnRbUx%2F%2BQ2gTfOKHj2DrQvHcuUUA6ZMaBdozlIyqcqTIJWCcsG3twiahVzCkw%2Fg3h290H8o4Y8%2BSco4gBGuE8YO45d2uanQ7jSZYM4QbxSpA0CiVzu3nSef9FszeCLbviIwjF0jDf0Y3GBjqkAetuPdz2AGbriBQ0xW7pq4GOHL6fXnMh4zSfDL6kiwlpdUfRqgRoNmyaWdp1PzrrRvSt1dYVH4%2FNiCvlnCoQjEBx1DjMMYF2xqKjgg0CLV2KiOHYCRS8TS9DBAd9kS14T%2FtT4a%2BVqoBpfT%2FPB2gCFldm78c98P6BLQ0wWr6b%2B2Yed6kDidB20rUNm0uNFjXWg1Ys8sOBTnheX7gLbC94Ab%2BNcXfl&X-Amz-Signature=b48647b0d5f5f2f64e84fe196786fafe4385c2531ee9003410ed261fb2f8723b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PED5XKM%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSvRF0iNwrge8UADMhwOU2g5U9tu%2F9611b6ENgqdzSqgIgLsh0q%2BuoUTxjdSbXpU%2FQVPKTwI0wGMvMEBXNAFAX1hcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJiYJlnpGtw0g%2FIHfSrcAx0pIGj%2Fsu6KaGOOMA221Kpw7awwbu%2F%2FXprUI5Z2NEBkPgZ9qfUtLwLF5BQzXHA097Swa7Te%2BkbeoRTEjE0aKWrFBn0Sj1oqzRuaNuzJjhoVxRsCY7m1FgDZ590fnyXX0KbqlxJbdU9G7KO%2F4K9ew6dA8rixOG98WvKzTqb%2B9nOzfz9Y0Z%2BA%2BZwnoSVwzgcbBSnUBKYkacr7iUpLQ8A2NXu0j44k00S70ksEnBLa%2B%2B%2Bse45HZbkU8HFXj5EsTA0ujP%2FrQKclK49ROBxzZRZwOxAnsAQtipt7dlIYrFyQiKYrCvEkJ2WeS7SKiPaZah8l2wFQ%2BQq%2B%2BwcGFeXBKMz%2B7kFV0yYuzd3dKPywu3hipSMA%2F2Yg6lVoNXPGqw5GXkbvBvoLHeVfFTTdJ8VI3zUk4uGA7nacWWP%2FkZtwlgwFgOxmK27g%2F5cNyGwoJG8gmGXFqgiCJip7JQYZhXVIqDwz5B67jWPWY4LuJtLMY9hTGNI594p%2BiAgSM14QIymnBuMRmPLLxhtVd%2BYGaI1MiWThDKtUcGoUYCEmskqWpxOyPmHOp7AtFzscKcaau7iz4cyLcz7Pk88eKxEVE4WBVEty4qaDG7ehS87pcuyAOoPt2kNmF%2Bj7tjAlfOatFHQvMN%2FRjcYGOqUBl7sM2rJueZ%2FzLf6EQXEASKYlQw31OnxwE2XTssK%2BVmRdHEDx5Qic%2B9uXRqbj6RgmbpKBqveayhK7hCECxaTDp69Vf2qd6rW31TxsKjBrcn68eFqDxP0tX2VOLJmnOkyiHo3Axwnd7PeLis1iv6zLVbPeGoPEp9N2Ta3aKP9u2jgHIQqoEptmqMPB5pRfeFgENhDjyoWFqToycoc8hWLG%2F5qHNi1D&X-Amz-Signature=6cd69cba85b6c461036cdf3ac2de4d321f7826ed84085817e0df3797a7765328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PED5XKM%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSvRF0iNwrge8UADMhwOU2g5U9tu%2F9611b6ENgqdzSqgIgLsh0q%2BuoUTxjdSbXpU%2FQVPKTwI0wGMvMEBXNAFAX1hcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJiYJlnpGtw0g%2FIHfSrcAx0pIGj%2Fsu6KaGOOMA221Kpw7awwbu%2F%2FXprUI5Z2NEBkPgZ9qfUtLwLF5BQzXHA097Swa7Te%2BkbeoRTEjE0aKWrFBn0Sj1oqzRuaNuzJjhoVxRsCY7m1FgDZ590fnyXX0KbqlxJbdU9G7KO%2F4K9ew6dA8rixOG98WvKzTqb%2B9nOzfz9Y0Z%2BA%2BZwnoSVwzgcbBSnUBKYkacr7iUpLQ8A2NXu0j44k00S70ksEnBLa%2B%2B%2Bse45HZbkU8HFXj5EsTA0ujP%2FrQKclK49ROBxzZRZwOxAnsAQtipt7dlIYrFyQiKYrCvEkJ2WeS7SKiPaZah8l2wFQ%2BQq%2B%2BwcGFeXBKMz%2B7kFV0yYuzd3dKPywu3hipSMA%2F2Yg6lVoNXPGqw5GXkbvBvoLHeVfFTTdJ8VI3zUk4uGA7nacWWP%2FkZtwlgwFgOxmK27g%2F5cNyGwoJG8gmGXFqgiCJip7JQYZhXVIqDwz5B67jWPWY4LuJtLMY9hTGNI594p%2BiAgSM14QIymnBuMRmPLLxhtVd%2BYGaI1MiWThDKtUcGoUYCEmskqWpxOyPmHOp7AtFzscKcaau7iz4cyLcz7Pk88eKxEVE4WBVEty4qaDG7ehS87pcuyAOoPt2kNmF%2Bj7tjAlfOatFHQvMN%2FRjcYGOqUBl7sM2rJueZ%2FzLf6EQXEASKYlQw31OnxwE2XTssK%2BVmRdHEDx5Qic%2B9uXRqbj6RgmbpKBqveayhK7hCECxaTDp69Vf2qd6rW31TxsKjBrcn68eFqDxP0tX2VOLJmnOkyiHo3Axwnd7PeLis1iv6zLVbPeGoPEp9N2Ta3aKP9u2jgHIQqoEptmqMPB5pRfeFgENhDjyoWFqToycoc8hWLG%2F5qHNi1D&X-Amz-Signature=7398ad5d6181748fb6694eea419b987512ddcd6b934e86c0b37b2511f2e823ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSDU2YWA%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfzJkjkSZd0sqn8%2FvXA9Z6Vg%2F9n8mutrkTHzmQD3SOxgIhAPj1wSriWESaoYu%2FcQ4PrJsF5jWz0nuMyxKVuWjKovWLKv8DCCIQABoMNjM3NDIzMTgzODA1IgzVqZZ8FgdkwzMfB8sq3APqva2WzyqPQ3WxKdxp5lYAIzgaMJAsRNZ7Hy771Ue%2BuhIHRF274%2FkQgn5qbX4mH%2BbE%2Fj0fE%2BhIsZImzInHMNWK6BaCDiLDtedvwJ88ouc%2B4H36yyixUZNdOwaDbiTpc7Pa9puQlMN6LYq6ri%2B9in6ipA%2BB8fU59Tx7BBUmwJFz%2Bk1HxGNry8Uln9Xt6UV5my1ZEIJNEvXfBEZulht%2F25Wpp3nGJg8v%2B5JjbDdJFrTmnpa0I3G%2BJewbqsdAnC70KVhvZWTevCf1dTFOQqYAQWdPaT42D4bY1YVmO8nyM15XBkI4oSDKKQYm52h6J0KhpvJq763o8WH3gjRXOPU7ZRMLAgxZooVxRKTiO51blTpYa1NLuZSYcFeq2VjYfgBQyQ73AkHxxCi2Ved7Lsz1t5Ep%2FgJsfoSc%2Bf206aYJGrHLJ470tdQlq7q5fGaQTP6vRM7FjZkyst9pCL7xEg2axc1359iSS4PFm0YuBFL536hRYEgMWJMxRkwwnRbUx%2F%2BQ2gTfOKHj2DrQvHcuUUA6ZMaBdozlIyqcqTIJWCcsG3twiahVzCkw%2Fg3h290H8o4Y8%2BSco4gBGuE8YO45d2uanQ7jSZYM4QbxSpA0CiVzu3nSef9FszeCLbviIwjF0jDf0Y3GBjqkAetuPdz2AGbriBQ0xW7pq4GOHL6fXnMh4zSfDL6kiwlpdUfRqgRoNmyaWdp1PzrrRvSt1dYVH4%2FNiCvlnCoQjEBx1DjMMYF2xqKjgg0CLV2KiOHYCRS8TS9DBAd9kS14T%2FtT4a%2BVqoBpfT%2FPB2gCFldm78c98P6BLQ0wWr6b%2B2Yed6kDidB20rUNm0uNFjXWg1Ys8sOBTnheX7gLbC94Ab%2BNcXfl&X-Amz-Signature=90e03daf7e080ceaba2989513dff7018b50f42fdd215779dd030dee8b3ffd60a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSDU2YWA%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfzJkjkSZd0sqn8%2FvXA9Z6Vg%2F9n8mutrkTHzmQD3SOxgIhAPj1wSriWESaoYu%2FcQ4PrJsF5jWz0nuMyxKVuWjKovWLKv8DCCIQABoMNjM3NDIzMTgzODA1IgzVqZZ8FgdkwzMfB8sq3APqva2WzyqPQ3WxKdxp5lYAIzgaMJAsRNZ7Hy771Ue%2BuhIHRF274%2FkQgn5qbX4mH%2BbE%2Fj0fE%2BhIsZImzInHMNWK6BaCDiLDtedvwJ88ouc%2B4H36yyixUZNdOwaDbiTpc7Pa9puQlMN6LYq6ri%2B9in6ipA%2BB8fU59Tx7BBUmwJFz%2Bk1HxGNry8Uln9Xt6UV5my1ZEIJNEvXfBEZulht%2F25Wpp3nGJg8v%2B5JjbDdJFrTmnpa0I3G%2BJewbqsdAnC70KVhvZWTevCf1dTFOQqYAQWdPaT42D4bY1YVmO8nyM15XBkI4oSDKKQYm52h6J0KhpvJq763o8WH3gjRXOPU7ZRMLAgxZooVxRKTiO51blTpYa1NLuZSYcFeq2VjYfgBQyQ73AkHxxCi2Ved7Lsz1t5Ep%2FgJsfoSc%2Bf206aYJGrHLJ470tdQlq7q5fGaQTP6vRM7FjZkyst9pCL7xEg2axc1359iSS4PFm0YuBFL536hRYEgMWJMxRkwwnRbUx%2F%2BQ2gTfOKHj2DrQvHcuUUA6ZMaBdozlIyqcqTIJWCcsG3twiahVzCkw%2Fg3h290H8o4Y8%2BSco4gBGuE8YO45d2uanQ7jSZYM4QbxSpA0CiVzu3nSef9FszeCLbviIwjF0jDf0Y3GBjqkAetuPdz2AGbriBQ0xW7pq4GOHL6fXnMh4zSfDL6kiwlpdUfRqgRoNmyaWdp1PzrrRvSt1dYVH4%2FNiCvlnCoQjEBx1DjMMYF2xqKjgg0CLV2KiOHYCRS8TS9DBAd9kS14T%2FtT4a%2BVqoBpfT%2FPB2gCFldm78c98P6BLQ0wWr6b%2B2Yed6kDidB20rUNm0uNFjXWg1Ys8sOBTnheX7gLbC94Ab%2BNcXfl&X-Amz-Signature=a8b1ca8bdd780d4a34c2a952c54ca9977fdfd84f6ece582eb64d5cd5accf51d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNNRVQTF%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEm1J3ybdIqqgW%2Bz65fp6OjZHi73sS38BlZ5apDL6wBaAiEAtCVHpuPzK761TtjNT2iSQppZyTXzCUUg%2B5AXJ%2FwsM0Qq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDCu1HW0SpgTL8AZymircA0%2B6muPxm2NJTwqfcpgvoFvLf3XjKcMzXCSnPna8BNwNmBH8UUUQ0VcNtBnAYwD5z3xqVqaMF4yQ1A3ZBnGLE6mLakIb7K31uiDadj35z%2B11FVsa6xI6uH7T7Z4feYCM%2FfegsKrFxQq50s%2BTO2WJFDBeK8Li85%2By31fyB6Qjd4APH7Rk5vlp9oYoGQ9uZVijBifkmaIEpyY5TJY649vNKZRetifhhfnJMp%2FvhIkX6nNWij1qO%2BvHUZaKzT7IE88MoJekGgDB0PIom3t1qJsNmyh3GTU3u%2BDkURzasOad89iQ7rxy5cFWx0nKRnmXBfW7GuXNKBRZMUIrU1UdVVBksg4dumxTKk9J1ZWLtdSICeil7DPT5qkcRtPgwpQxCWxtc3ZuqhjyNKylxNe%2FL2TMOiDOnRWMDh%2BMUz6N4DsMgHR9MfXZxZvTnJNwnnG6tIVsycDMXEc5yS4OTqsC4xw7NTIJhKvr%2BX0gpsTq1vnJaNSkTHKC5iDTU%2BOs9H6yPAoTj5a3U0d6166Gz%2FM1OY2EVJLva6i%2BfUIbkL7WDFxEqdjrBfdzGzu1S9vmO131okXHO0Vt0SfljTKcNM8vakkIV5Cz5F8ezHpLXmVgFrBPdTqY6u3NvxlcUCaIQuiAMPvRjcYGOqUBaWS%2BdRCF0o2ICDilryKqs4xGNVpYAhpFZ%2BGPXovBVbpynWWZSiYygHHBR40DOXbhlRe19ROT9duHi2pyC7QEWvGuw%2BSM%2B5vZI4cXDcvU6bI1TOSqjHSInq8hBa0szNpTV6YeH8QCJmvsz9i6SmfUtOOMqsj1uS%2B5Xm1RMIAOAfCRKpEbHj7NRvprr8vFdU4XI%2BTLKy8i7vwTkZDmsspQQlGGiYnh&X-Amz-Signature=f48bb26a692045e3fd98c5af67a576a955e67f4e3248c1bae5a37e85379125d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

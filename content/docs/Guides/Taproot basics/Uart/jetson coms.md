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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T64V6IQN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5utS9E870N7eODTdSijBRnN%2BEvG8nAe7etZtQ7uHRngIhAPyyMMQ6bvZ9F7e3tTWBiShU%2ByueAMvS%2BuEQUOh9NAlzKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN9NzGcv%2F3Bo1hgeAq3AMFaaKFhDQDWlD8U%2BGuR8Pf0CTMQSApH%2BndwcCyGQj6mUbNifjBNsVd%2FctrJI8pNDl%2BMgj4JBIKbYE2%2Bwntg94yj9rR4VHWaL7oIBtkw1lQC4R8I2Tz2BcKvW67J2lsJt%2BDfVnZJ90V%2BF1wJRYxHTysg%2F0pAmpVPZPp0dRbCiuV8AQamennqTxzki0jJI16PBYxFMpMGx5Dlm%2Fno1voxyNcSvHAZEg7AoWbQ8ZDvcL5T7FpTvTiqIRo5ca8BIVGawHRbAXQiRNxW6251PqS2o6eAnLDhA3Nd7GOrleMSJhqv%2BnALgduck4cdrWpj0QtR72FFabQ8RVAiBRMNBksLIK97uNsyX56Tx0L8cGbR0oVUJ8og3gUds7vBhKe%2F%2FjB2gx8g4iUu6MrUcVRuqrkHgtxEJsRjJcUc6fEQFx7kaCgCFCi6m1Q73OgDSyixCR0ClJuV40bC4R6lm81oo323eNFp5VcVvGNE6PzMeJaYg%2FbOYfh1J8kXE3eLNyoL89YuO%2FphbsqDnbHfhaPn5B8yuZaLRw9O2FIY2XxiZPflXbJ31Fs6TKB%2BOBVRaghrF29yNROJizNF95S0Iq1kMOU%2Fq7xtNweg20vB6vCuKvuZwCBQQZezgEd%2BZegQMOzBjCO%2FdLJBjqkARrlwX9IgcvL4oah68Tte78WSIGsJKAy%2BJvE1EV%2Br7epamnlpq4gvg3tReWFbo9VC1R3fhX%2Bof1RkcIY84EMKnt6Nw%2F5zCafn7T1gHMAMoYt9mHlLnH%2FHSWZAkOsEEmg1eDba7ojg0ypyuw%2Fm6OjXrQVlgeSatAJii1IQT9h4rCFabU%2ByY7ojmccrdIO5WpJssLLkz8ojks7QorycCMA12s1lwfx&X-Amz-Signature=954aa08fed87b7d6fd615d0b69bdb559018d5d820399d22abcbbffbc5be0b6f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIPJAGFV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWPm156aEUlqWWGnysqB7pJ4nqbFyg6I9teAEObX1PFAiEA2khvu3zmNPaBWeVCsB8WSH%2FlMz3NkNrpDCYQwrxujSAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMKa%2FXoPFDbWcpHNyrcA1GddWBS3O%2FTJ18PKyFl%2F3YIFfDg0xP0RX3rXV5OjxnslSOVHkfwu%2BRwhDHuwfhG5ToHxtOJglUfLqIk3Sptli9kiKesD%2BCbMx9vyvP3Bc%2BL9EDegdn%2Fwn9HYt8HGDfNHyzEr%2BanPs4tMhJ5KW%2FbAc%2BT9lto7e4eyjCZCVs8U5JpZqtSbcepcsoXlXuPs7zuexNgnQeYgFmQ0AlnMiS1lmfkZgAZZvI07WtRmfLTALnrJsUKvLyG%2BIxT7RS3WZ4iB8Eqo2g3opLGkXoMuNBBafKEKXl46ySSGGegWwhWzyaFJ1LpMSS5rlGxJgXLgNA6SQqo%2BQ%2Bhtt%2F3DtO9AiD6fPCGynwXaviaKpu%2FcjxIYKcrOwyKY0TbkSzPSHdekTp2S%2BWHIoRe3iCnxWIrfrKfPo1PO4goh0c5hZHlSO%2BQCih2jz9pG2laCJn2B%2FPMO0l0Wc%2BpPy9D5H4%2FNsxEUAPYCOncojKst6SNq%2B6cSh3v3TCyYxa4HX%2BdGinioELS5iqZlo4MiV760s3kawMDBai2sfjGFcOcWr33q9y3Xt%2BMAyEmpNiAZdHbrNcRMOFFkXpiRcvdkSR6DyJjjwdEmIaBRJjHwOP62FiAfVUqo1XuTnuoURZxneLjxFQ5MiPSMLf90skGOqUBJoEysg%2BE09p36%2Fgvxo70EL%2Bfq8bDTlP14Y%2BNciljpk96O5PYR7d7EJtM%2BRmWe2uFFJ7hO4Tyh48t6Nh40l8PQ%2FFjJToYVyrPH7tNK3yvtiglg4sTdmnJWTU2xeMqC84P%2BX0vzxVEkYma%2BYG3h47r2Rg8YLixxsg1Lpe6ntP%2FIWKyikNdhFkDkTcb3tcnLGO7m6WGwEyzCcMnIQaoOJmheM555dGj&X-Amz-Signature=00fac3ece8554256ac56490ccfc675c0fe4451cf6d65e676f422582429ecf4c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RBE6WFL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD840iQePi6Ff%2FaHTnKB0fy9aR6f6oINRrT3VfXw6pTTAIhAIDg1Et3YnXuLBPsbbyKLpTMWLX9v%2BVTem1WqG6YhOpGKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtVfEIrKfQUXxU3H0q3APSnVtY4kebDXUr9A8iOEsYKyLw3BgSSZ8zsqi5us0LwXQPm8r5HNHIOQaO8TFOnZ3Ec%2BcOLIeJguPRT4RLD49o8arNrCOQ4ifsD8%2BWV5v56AXCFvOTvZgHpbVzhejQjMQHDpfu3%2Bofjlfyx9P2DJ42uSAg5r1CQJWpnjqJ7rqxIDYdOiWNivcJqs1lAYwEkvZlhuONtdMoLfMU4PR7%2FUnacMi%2F06n9bWW7y5lghsAnyA7C%2B6EYwV69SgfXC6D%2FH4keXEp4uGgotEj5YtX2y7ZfBKpdBuuhh7baum7gGhHyCeXzNBn69bn%2FVsiOKflOEXOkwNxHp7XBzrDB5QI%2FHXcoy9ixh%2Fn88O2lz6Ua25gHi9CVEa%2Bu9QASQmsugIoUfSR5BzdNoJAuVGC3VCgZh4fVjZv7D27rsULL2y0UMdiWoPHKEN1baD5H2NT1qJ1nK922hL35d1SC6WV746cnGoCWFgNh8t0F88dUZ2Vkey5zKom87OfHbkHEbwM%2BM2ac8Kv6zXRc2z3nctEQxscbwGjZiQe6hVHMnLmkoO7RVS4QMsvZlNty5ZpTdEo7CJ0B5i%2BZiqBBikVexR8KRM3uVDXSf2Aox34Jduik2ftOmAoeFClj9Xrt%2FcRUQNRjxDCM%2FtLJBjqkAW99cpsmU1bfxgcqQ5gE76KYPHSmcbd%2FFY9%2B5V7dnhMx%2B8H%2BQSxsrt9ombMHkQS9Diyxz0J%2BbQ5xufAkzMcm307h5PlFe%2BwxRVZUA%2BPMaiiH9Uduq1tWVehQAO7QMgyUMSIF5QTqVGuGZAwFr65cOcSTQWLQw3wSD1P1hepKr%2FbCM952uIPNZk8%2F%2FW5u5B0uQbCjZ0khaRpX42zR6qo34%2BqVgY7z&X-Amz-Signature=986dfda94a3b8383376b2a39c41242db5fefbd71cb9d797b2b29578bc6c9d9c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RBE6WFL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD840iQePi6Ff%2FaHTnKB0fy9aR6f6oINRrT3VfXw6pTTAIhAIDg1Et3YnXuLBPsbbyKLpTMWLX9v%2BVTem1WqG6YhOpGKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtVfEIrKfQUXxU3H0q3APSnVtY4kebDXUr9A8iOEsYKyLw3BgSSZ8zsqi5us0LwXQPm8r5HNHIOQaO8TFOnZ3Ec%2BcOLIeJguPRT4RLD49o8arNrCOQ4ifsD8%2BWV5v56AXCFvOTvZgHpbVzhejQjMQHDpfu3%2Bofjlfyx9P2DJ42uSAg5r1CQJWpnjqJ7rqxIDYdOiWNivcJqs1lAYwEkvZlhuONtdMoLfMU4PR7%2FUnacMi%2F06n9bWW7y5lghsAnyA7C%2B6EYwV69SgfXC6D%2FH4keXEp4uGgotEj5YtX2y7ZfBKpdBuuhh7baum7gGhHyCeXzNBn69bn%2FVsiOKflOEXOkwNxHp7XBzrDB5QI%2FHXcoy9ixh%2Fn88O2lz6Ua25gHi9CVEa%2Bu9QASQmsugIoUfSR5BzdNoJAuVGC3VCgZh4fVjZv7D27rsULL2y0UMdiWoPHKEN1baD5H2NT1qJ1nK922hL35d1SC6WV746cnGoCWFgNh8t0F88dUZ2Vkey5zKom87OfHbkHEbwM%2BM2ac8Kv6zXRc2z3nctEQxscbwGjZiQe6hVHMnLmkoO7RVS4QMsvZlNty5ZpTdEo7CJ0B5i%2BZiqBBikVexR8KRM3uVDXSf2Aox34Jduik2ftOmAoeFClj9Xrt%2FcRUQNRjxDCM%2FtLJBjqkAW99cpsmU1bfxgcqQ5gE76KYPHSmcbd%2FFY9%2B5V7dnhMx%2B8H%2BQSxsrt9ombMHkQS9Diyxz0J%2BbQ5xufAkzMcm307h5PlFe%2BwxRVZUA%2BPMaiiH9Uduq1tWVehQAO7QMgyUMSIF5QTqVGuGZAwFr65cOcSTQWLQw3wSD1P1hepKr%2FbCM952uIPNZk8%2F%2FW5u5B0uQbCjZ0khaRpX42zR6qo34%2BqVgY7z&X-Amz-Signature=6a66e6dfbf0172e43ab5676e112cbd8d8635f00cba89763cf8ca1413ac30e074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIPJAGFV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWPm156aEUlqWWGnysqB7pJ4nqbFyg6I9teAEObX1PFAiEA2khvu3zmNPaBWeVCsB8WSH%2FlMz3NkNrpDCYQwrxujSAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMKa%2FXoPFDbWcpHNyrcA1GddWBS3O%2FTJ18PKyFl%2F3YIFfDg0xP0RX3rXV5OjxnslSOVHkfwu%2BRwhDHuwfhG5ToHxtOJglUfLqIk3Sptli9kiKesD%2BCbMx9vyvP3Bc%2BL9EDegdn%2Fwn9HYt8HGDfNHyzEr%2BanPs4tMhJ5KW%2FbAc%2BT9lto7e4eyjCZCVs8U5JpZqtSbcepcsoXlXuPs7zuexNgnQeYgFmQ0AlnMiS1lmfkZgAZZvI07WtRmfLTALnrJsUKvLyG%2BIxT7RS3WZ4iB8Eqo2g3opLGkXoMuNBBafKEKXl46ySSGGegWwhWzyaFJ1LpMSS5rlGxJgXLgNA6SQqo%2BQ%2Bhtt%2F3DtO9AiD6fPCGynwXaviaKpu%2FcjxIYKcrOwyKY0TbkSzPSHdekTp2S%2BWHIoRe3iCnxWIrfrKfPo1PO4goh0c5hZHlSO%2BQCih2jz9pG2laCJn2B%2FPMO0l0Wc%2BpPy9D5H4%2FNsxEUAPYCOncojKst6SNq%2B6cSh3v3TCyYxa4HX%2BdGinioELS5iqZlo4MiV760s3kawMDBai2sfjGFcOcWr33q9y3Xt%2BMAyEmpNiAZdHbrNcRMOFFkXpiRcvdkSR6DyJjjwdEmIaBRJjHwOP62FiAfVUqo1XuTnuoURZxneLjxFQ5MiPSMLf90skGOqUBJoEysg%2BE09p36%2Fgvxo70EL%2Bfq8bDTlP14Y%2BNciljpk96O5PYR7d7EJtM%2BRmWe2uFFJ7hO4Tyh48t6Nh40l8PQ%2FFjJToYVyrPH7tNK3yvtiglg4sTdmnJWTU2xeMqC84P%2BX0vzxVEkYma%2BYG3h47r2Rg8YLixxsg1Lpe6ntP%2FIWKyikNdhFkDkTcb3tcnLGO7m6WGwEyzCcMnIQaoOJmheM555dGj&X-Amz-Signature=00040b50460ed4c407850f2caa1732a55d485ab2c82e7b09458ce7c77b1e6357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIPJAGFV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWPm156aEUlqWWGnysqB7pJ4nqbFyg6I9teAEObX1PFAiEA2khvu3zmNPaBWeVCsB8WSH%2FlMz3NkNrpDCYQwrxujSAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMKa%2FXoPFDbWcpHNyrcA1GddWBS3O%2FTJ18PKyFl%2F3YIFfDg0xP0RX3rXV5OjxnslSOVHkfwu%2BRwhDHuwfhG5ToHxtOJglUfLqIk3Sptli9kiKesD%2BCbMx9vyvP3Bc%2BL9EDegdn%2Fwn9HYt8HGDfNHyzEr%2BanPs4tMhJ5KW%2FbAc%2BT9lto7e4eyjCZCVs8U5JpZqtSbcepcsoXlXuPs7zuexNgnQeYgFmQ0AlnMiS1lmfkZgAZZvI07WtRmfLTALnrJsUKvLyG%2BIxT7RS3WZ4iB8Eqo2g3opLGkXoMuNBBafKEKXl46ySSGGegWwhWzyaFJ1LpMSS5rlGxJgXLgNA6SQqo%2BQ%2Bhtt%2F3DtO9AiD6fPCGynwXaviaKpu%2FcjxIYKcrOwyKY0TbkSzPSHdekTp2S%2BWHIoRe3iCnxWIrfrKfPo1PO4goh0c5hZHlSO%2BQCih2jz9pG2laCJn2B%2FPMO0l0Wc%2BpPy9D5H4%2FNsxEUAPYCOncojKst6SNq%2B6cSh3v3TCyYxa4HX%2BdGinioELS5iqZlo4MiV760s3kawMDBai2sfjGFcOcWr33q9y3Xt%2BMAyEmpNiAZdHbrNcRMOFFkXpiRcvdkSR6DyJjjwdEmIaBRJjHwOP62FiAfVUqo1XuTnuoURZxneLjxFQ5MiPSMLf90skGOqUBJoEysg%2BE09p36%2Fgvxo70EL%2Bfq8bDTlP14Y%2BNciljpk96O5PYR7d7EJtM%2BRmWe2uFFJ7hO4Tyh48t6Nh40l8PQ%2FFjJToYVyrPH7tNK3yvtiglg4sTdmnJWTU2xeMqC84P%2BX0vzxVEkYma%2BYG3h47r2Rg8YLixxsg1Lpe6ntP%2FIWKyikNdhFkDkTcb3tcnLGO7m6WGwEyzCcMnIQaoOJmheM555dGj&X-Amz-Signature=f8f817952c99cf32269b1e1cbc19efb912bc3fc34eba74e560bd49bc08093ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOXPUAK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxlj1gaFBmDMt0vXyHWRM0J42QwaSWLjXRaHucr3lg3gIhAIv3hEV6phnzLCJN3OVpt6PHHOk59WIxrDH3oqQ95B%2F5KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlgIVXx%2F0%2BNzYZ0GUq3ANlsqcURhjDKGopUGGPDxgmaY%2Fzb8iuRu37qHNAzkfu80Ou4z3M4KKhQCi4cihBlf0%2Fd0tlPoJTLvulFmKib7kMw1SFIKENW6pGPL7rtNWNMeDhVZOl1Pd%2Fz6hLt980S1ywnig8n%2FiaIgcN3TerwrLtwADVUKgqJqrUIMOHl5IEOjN1lN1L0dfeTSHju0iCrkd%2FXpQV6Sk0dFn60V0fCzGOgiwvwQUyR95ZDwCZZeOnC1e6v4Rl3hjfdtt6QenjVVTo01ZIawH566KAr8XLGx8gIJA7unAsWyR6YEAzt1ACdFsWKaD9ZAAqX1QypB8JjWkps2HN3piz074i4xczbwRUK43BTEZTQRpZuGDp4l%2Bz1e9hy7b2gPIgdeQTQgiQ2ue1yaG4N9H7%2BzhhoYyXFbrkuJ7imCC1EKJp9I4E2pxgTJweHAPrEeFKsD%2FJJoecCVjI07mC3kbA%2FLY0whel%2FqRUSG0S0TpjX6DjWuR98H9AFRHZMBOE4wozA1I5%2Fmw600idvU5jfyYMKdQSJ%2Bja7gGMmPL7C1yEooRYtbOKUVnJyFm9QY8pcJ4xPKMvW4K%2FuBrhc%2B5OLBb7b7A2UZODhm91IG9zPG%2Bz3zoCzZkAggIQLB3JCI4JPxBb%2FoRr4zDc%2FdLJBjqkATX4Pg0LYKtLiN%2BO3Vno6%2FK17HtwalTtqIS%2BOLbGjBlUTjyAuyx7Hq7DSpE2024T9BctGoDyd9bxFmGk5uUtbC95XXqz1idjDeIY8I4s1rYpbBt2r%2F52p7HnYvVrtgRkuhRVAR5%2FM%2Fa%2BmtiUC9ky040Z2FH6xm91TAmUslNGZxhVoSPoMIycyN8E6vzR%2FMmrule886UIF7TW7KwDbFzCP0ZaXYKc&X-Amz-Signature=b3db44997c7d6399012a9ef8be134de7db5564c5021ffcf0e6a789baad3ca7d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

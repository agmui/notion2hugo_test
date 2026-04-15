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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7HIB5C5%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCclbC8UjmJZoe6VLSR4j2jaIRD7IYYiTWu%2FeLdD%2BksOAIhANzjCixYCyOAyeJuIQtYqTEek8%2FYdtW2J3ZGuUNDdrPBKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPPYjVLvTCVc3JnNkq3AMaJqVmt%2FheR1gv%2BpXjPL368K6kthYRzpztXbAEbtsD1ZXC1%2BohplBtO84apOpx%2BgRoJF3frf6xtERLHlXepI%2Bj2DJpt%2BW%2B2YITkhsQjnDbSXAhsviHzjVqOjXhI%2Fr1TpHNkbKNqdXA355GoD9V%2FR6kPz1m9rSyiJMHOTBvdP5GRGtW1ZILYitnyGrF4ihIaJFiLI2Xae75kTjKvlsnoATGCd%2FO1sdFazjLzvhWDXf5Du9GHilRChOjl4GJG9R%2BdXVauwP49OabFGRxc0BaV%2BYTXIPAts3h%2BzS3zFR08gexGhp8mhs9AFBX%2B1l%2B3U9TwjiRekBW6MBFMHBuONX7RQXkGJ57Ah2o8tmgVICaZSBcV5sOuIEcLcWBdGu5pzmYLkJkxxFx4aGoKAoPK80re34NxFlxvOsQCa%2FRzbLkugmebqn5nL0tqgJFWWqCHgDKcQAWEcFv8yuy4cGU%2FmCQLZ9Y4JSs0iGQp5v8V9E6iSt0qVSli07pkVpKDUtLhj2Xf%2BWfx2eF9fcYbEye1ifB46VP1IUqP9vPEfWjbG%2Bo121LOorjOPMrWYj3w2m208lY2RC3A0GCtK8TZzcP7Dh8cAYjO9U1y%2BawfyTZqfdeMQdktRbkxdvXYfys7gQYnjDK4%2FvOBjqkAeNnEHOhi8XOiEhsgkP%2FVZrRXq3yH%2BX%2F1fx5Al2hAGcBMtJVQSvxSeNvc1goZrRBEPV%2BdUHpEIfQPRUccpIsNwghAszJRPNHp6gqcqJ7dudVSlIN%2FUOVgDHst%2BCLJru1zhr6eYnqbptdiYz4LgFntiH%2BI3e5xVhq9L7fmtPmUrq3whrlQnxvpR%2FkwBu8gxCFUZNw8brSkuqgcIgLHKfe7VNqxFMx&X-Amz-Signature=be2c8b6e1ec837e9740b353d4d59c4a1d36cdd5e1a9e9c39affc06e7ab009596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7D5EGDN%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxUe9a2boUhgZuKP3ALFk7HheN4GDJjskdRL0C31PqPAiAvwyikbQU5exNBj4HBQI1smh2jv%2Bqsmrz7MP4R6uochCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN%2BUCjlRAGDFWECPvKtwDVDUSXkqJPqbrT%2Fyja9AsFiS5Z3X00BxUtWu7MeadcqebzDxZ%2B3hDgS%2FuiPzZMWsfu02b613fHoUzPtKEMfvsPbtJIlix0L%2BrB4YhgyHYXcu8V1RiP4NBQmwIE%2FA1IPgveSTYP0k%2FaZmKQLzCnr6p1KPuX79wzYjgZIOAqlGVesFqoeqxOwVrT2by7z0qIeQQGGGyaMMQC0CjVBOvVllsMxh5OtRn%2FxCfkIgWY%2F9ny5RdrfCTMYWh3GbuFCaNOHqWwlRx1BGhiMv%2F1maDa8Cx1eWLi86siAC9XpRfmz1noQ8dlw3BqMGw6AyPCxSOHR04e97fX7DK4VL1AaXTmH%2FWUO02wiW0R7Klm6ANEw3dS3z0glJoXSsCCVGW3qsZn09fBFPWj8OPmiLMXHSKbs7ckQV1uR%2Fq4iYGZUjtjLdEniBAkdGxQuVK4ngOT5uyY9PmCcLA0zRZ3372h5iMYTXi2xhecgusSZkPbBW81%2F2qQKlmejLuytlXWCeuwqzpCHF2AIGZyOtZGo5Jl4hQq7mmGzu8ZToEeliXmFAJrzVwlKUniB8ds07lRlpMacKi0F8ds0aFNFOU3%2BrRECTpykRVEojzbHgsDp%2Bmtf6mgXzo4zQmVqegQVOakKVrgK4w4eT7zgY6pgFGXRy0Lz9TsGQRqhQbKVmEuC1H8Y9gEOzOXtfSPcqcBeiCzx1lPbHuerp17%2BwXtTOmmTkzoGclq%2FO6djdhOxfBnEJTik2USPocCdVkWMJVaEv7ppYa3dKU0Z2H4anF1wWYC7mY2nwhYEItsEeoFD176xqekRq9zfSGLzFqqywyx20h3Lx6hMeAmq5ZcTJA8ruHij0XkwP8xtQfU4MD7RC%2Fo4v0JquP&X-Amz-Signature=65e706d100a8ad5e902026bbd50ae2b77035fb82b4a414b93e8e67466541b86c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XS7KRCH%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCUtwS8KL0ASfyQnTppJT%2F4CV1EE%2FSzyalA5y%2B67RNFAIhAIIi1ftgjm4x7eXe3a4WI5Mqu6aO1r4UyRxUVrZve1bjKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrRlgnmXgeC4CNXSYq3AM1UUoWFfdUXVO1Rafv9tWnneMWdq7NLpsyRrUsiNnob%2BhRQT348bsKxKAIdVxJOb2vx4UgpUBkhwwniF1EQC%2B0wTqL%2FY4oPQWBga1XO%2Fz9VbpukmWTuR13sx93j4%2FE3msKwVYQLl7zCGD3oCkjjq7ZdWOtWIus550qjeUZYNMmqS9up383mENSNFsEHzaNlpBLQUuH6OBsuZENzWo7r1UiB4wLNDlfUBXlvU%2F0AslpBOeGDjNAl0L0nO5GcbGdpm9G87UuDAA9QGX%2FkQAqPLK2ooSRI473TyIFsuyU3xdKu49ttTR3sOsWJ39PC7KEueVvbL2UPbkATOkj84Op9hSXKZ8PZJwgj%2FGZKQKMqJLIdUzY9FMTmVT89XxSIfH65AsQFT%2FSpJ683Yex2Ih%2Bza%2FunsGKG8rEOf3kJBED3Js4jYJ%2Bclg0ytDCAX5s3Ve7dJiF%2FMLew7MFMJnf7o6iH3bbi905%2BY00LIV6pRJVZbgyV3viVtBYJA5umG1aPAyxJMllvBZckFPCw%2Fj8Ha3K6sv4e4IHOjXpUUekZTDjw9%2F8%2BdZcEwB%2Fdxx2RDuyST9QhqpM3wznHMZ5cEjLtTl9eS9NJGe25dpgKUq%2FxUQIxsUwrRuay1g54QyAQFMr%2FzCS4%2FvOBjqkAVlYynWH%2FYekFcdHSH4Awg5R6PLYJcJ%2FY0%2FcbCtmb8oZ5N0RT%2BwnwQ3J9UlFlWbIWsXCL7XEiGJR9nYYSyDe3%2FCyurHNuGQtXrQlS6jPGw7d1v4vjbBOpVRn5oghKholgnO%2FZ89JzB%2FqppEr56qcnW%2BtKgQ%2FByJk%2BOkqD3JcSZLpb0TI3OxTxYMQkCVJ2h4qwj78b8nowFD1LWHQ7aDY3jJwPIeN&X-Amz-Signature=2144727f89a286b59c48cc3fc48cf0329413537bb90aec97540808bb6ba0dad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XS7KRCH%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCUtwS8KL0ASfyQnTppJT%2F4CV1EE%2FSzyalA5y%2B67RNFAIhAIIi1ftgjm4x7eXe3a4WI5Mqu6aO1r4UyRxUVrZve1bjKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrRlgnmXgeC4CNXSYq3AM1UUoWFfdUXVO1Rafv9tWnneMWdq7NLpsyRrUsiNnob%2BhRQT348bsKxKAIdVxJOb2vx4UgpUBkhwwniF1EQC%2B0wTqL%2FY4oPQWBga1XO%2Fz9VbpukmWTuR13sx93j4%2FE3msKwVYQLl7zCGD3oCkjjq7ZdWOtWIus550qjeUZYNMmqS9up383mENSNFsEHzaNlpBLQUuH6OBsuZENzWo7r1UiB4wLNDlfUBXlvU%2F0AslpBOeGDjNAl0L0nO5GcbGdpm9G87UuDAA9QGX%2FkQAqPLK2ooSRI473TyIFsuyU3xdKu49ttTR3sOsWJ39PC7KEueVvbL2UPbkATOkj84Op9hSXKZ8PZJwgj%2FGZKQKMqJLIdUzY9FMTmVT89XxSIfH65AsQFT%2FSpJ683Yex2Ih%2Bza%2FunsGKG8rEOf3kJBED3Js4jYJ%2Bclg0ytDCAX5s3Ve7dJiF%2FMLew7MFMJnf7o6iH3bbi905%2BY00LIV6pRJVZbgyV3viVtBYJA5umG1aPAyxJMllvBZckFPCw%2Fj8Ha3K6sv4e4IHOjXpUUekZTDjw9%2F8%2BdZcEwB%2Fdxx2RDuyST9QhqpM3wznHMZ5cEjLtTl9eS9NJGe25dpgKUq%2FxUQIxsUwrRuay1g54QyAQFMr%2FzCS4%2FvOBjqkAVlYynWH%2FYekFcdHSH4Awg5R6PLYJcJ%2FY0%2FcbCtmb8oZ5N0RT%2BwnwQ3J9UlFlWbIWsXCL7XEiGJR9nYYSyDe3%2FCyurHNuGQtXrQlS6jPGw7d1v4vjbBOpVRn5oghKholgnO%2FZ89JzB%2FqppEr56qcnW%2BtKgQ%2FByJk%2BOkqD3JcSZLpb0TI3OxTxYMQkCVJ2h4qwj78b8nowFD1LWHQ7aDY3jJwPIeN&X-Amz-Signature=61c285973149172d778e5f39c9088d9d1dfe179e71ed4708c3b0a3ec3e18c537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7D5EGDN%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxUe9a2boUhgZuKP3ALFk7HheN4GDJjskdRL0C31PqPAiAvwyikbQU5exNBj4HBQI1smh2jv%2Bqsmrz7MP4R6uochCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN%2BUCjlRAGDFWECPvKtwDVDUSXkqJPqbrT%2Fyja9AsFiS5Z3X00BxUtWu7MeadcqebzDxZ%2B3hDgS%2FuiPzZMWsfu02b613fHoUzPtKEMfvsPbtJIlix0L%2BrB4YhgyHYXcu8V1RiP4NBQmwIE%2FA1IPgveSTYP0k%2FaZmKQLzCnr6p1KPuX79wzYjgZIOAqlGVesFqoeqxOwVrT2by7z0qIeQQGGGyaMMQC0CjVBOvVllsMxh5OtRn%2FxCfkIgWY%2F9ny5RdrfCTMYWh3GbuFCaNOHqWwlRx1BGhiMv%2F1maDa8Cx1eWLi86siAC9XpRfmz1noQ8dlw3BqMGw6AyPCxSOHR04e97fX7DK4VL1AaXTmH%2FWUO02wiW0R7Klm6ANEw3dS3z0glJoXSsCCVGW3qsZn09fBFPWj8OPmiLMXHSKbs7ckQV1uR%2Fq4iYGZUjtjLdEniBAkdGxQuVK4ngOT5uyY9PmCcLA0zRZ3372h5iMYTXi2xhecgusSZkPbBW81%2F2qQKlmejLuytlXWCeuwqzpCHF2AIGZyOtZGo5Jl4hQq7mmGzu8ZToEeliXmFAJrzVwlKUniB8ds07lRlpMacKi0F8ds0aFNFOU3%2BrRECTpykRVEojzbHgsDp%2Bmtf6mgXzo4zQmVqegQVOakKVrgK4w4eT7zgY6pgFGXRy0Lz9TsGQRqhQbKVmEuC1H8Y9gEOzOXtfSPcqcBeiCzx1lPbHuerp17%2BwXtTOmmTkzoGclq%2FO6djdhOxfBnEJTik2USPocCdVkWMJVaEv7ppYa3dKU0Z2H4anF1wWYC7mY2nwhYEItsEeoFD176xqekRq9zfSGLzFqqywyx20h3Lx6hMeAmq5ZcTJA8ruHij0XkwP8xtQfU4MD7RC%2Fo4v0JquP&X-Amz-Signature=e8ef4fac90334509fe096bb946abb2ed67d3137150e24b03fada5f31fbedf467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7D5EGDN%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxUe9a2boUhgZuKP3ALFk7HheN4GDJjskdRL0C31PqPAiAvwyikbQU5exNBj4HBQI1smh2jv%2Bqsmrz7MP4R6uochCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN%2BUCjlRAGDFWECPvKtwDVDUSXkqJPqbrT%2Fyja9AsFiS5Z3X00BxUtWu7MeadcqebzDxZ%2B3hDgS%2FuiPzZMWsfu02b613fHoUzPtKEMfvsPbtJIlix0L%2BrB4YhgyHYXcu8V1RiP4NBQmwIE%2FA1IPgveSTYP0k%2FaZmKQLzCnr6p1KPuX79wzYjgZIOAqlGVesFqoeqxOwVrT2by7z0qIeQQGGGyaMMQC0CjVBOvVllsMxh5OtRn%2FxCfkIgWY%2F9ny5RdrfCTMYWh3GbuFCaNOHqWwlRx1BGhiMv%2F1maDa8Cx1eWLi86siAC9XpRfmz1noQ8dlw3BqMGw6AyPCxSOHR04e97fX7DK4VL1AaXTmH%2FWUO02wiW0R7Klm6ANEw3dS3z0glJoXSsCCVGW3qsZn09fBFPWj8OPmiLMXHSKbs7ckQV1uR%2Fq4iYGZUjtjLdEniBAkdGxQuVK4ngOT5uyY9PmCcLA0zRZ3372h5iMYTXi2xhecgusSZkPbBW81%2F2qQKlmejLuytlXWCeuwqzpCHF2AIGZyOtZGo5Jl4hQq7mmGzu8ZToEeliXmFAJrzVwlKUniB8ds07lRlpMacKi0F8ds0aFNFOU3%2BrRECTpykRVEojzbHgsDp%2Bmtf6mgXzo4zQmVqegQVOakKVrgK4w4eT7zgY6pgFGXRy0Lz9TsGQRqhQbKVmEuC1H8Y9gEOzOXtfSPcqcBeiCzx1lPbHuerp17%2BwXtTOmmTkzoGclq%2FO6djdhOxfBnEJTik2USPocCdVkWMJVaEv7ppYa3dKU0Z2H4anF1wWYC7mY2nwhYEItsEeoFD176xqekRq9zfSGLzFqqywyx20h3Lx6hMeAmq5ZcTJA8ruHij0XkwP8xtQfU4MD7RC%2Fo4v0JquP&X-Amz-Signature=3e82a565ec7075984e24e1ddc0c53dcdc4627ac2e9a710e70267256d1ee5f746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQWWJUSU%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI0O%2BKozQWB47nWG%2FwdWTGZMuHgb0%2FHnCU72ZaGLnsUwIgPzZZTRdlUboUM%2BgZgXIMcryKbCBCovwPDLyDwEd6yUkqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYxvgsrFwKSl4JQ2yrcAxpirNF1H0mYBSSiy6BgU6%2BjkkOGu%2B2eWWOCdfZ3ACvJOiOhnQmoEGa5DIk8fqgcA3Qz70RXDe7Qvd7HWVqL3qj36L8pC8u6zMDjvJ71Hco9v5GJz1Ha7sulhc7%2FXgteDiKtEhfkE7lIbfVkZOOLA8HKmAGDSXj0Sk9FtxHKakhMfYKO97wesoqXZuuG%2FNQTS5dxVPh0uSg%2BPzcPgGzn8Yd%2B8gdpMupVxgiMZLUjSV33LN%2BgPu1CiviUINicgBxhIjjWCHDqEYk6sNUJMzx4OC1yDJ4QaSWkGh%2Bjb1ZdsouaPtiIHjRm3gxmqOCUO4NyYBCRKL2otvjtsUCQ7ptOUIo4vEz1Wvd0yQ7YtfmRsZTXKfRQvsLZdRX%2BAHZBzYFM1pKrk7QPvu4QkYCrgX9EkNHjDqi4TPedm2av7EZbbXUhFk1rUUj1ZMnXT5i11eeOE4e%2Ftd8C%2F%2F22WObfP8vOrNCMVfdBIC08sB8l1NGyq44nlEVKe%2BEFAwWUgrpPdRgdPbnNtRR8W0s1LRe7dCZ27GhI3W%2B23JzE6P8ihQEgFK8D8VNeQpj4ufQvF4i7tQtfnXoKCuYFO3FcPngpYeIw9Uxbj99xcV5b7QKyfpNtNnySq71V2jG355fBvxBhMNfi%2B84GOqUB4cVQMKfwbVEgyzcMXFu5JTQIBUIu6E0vwF9dFhpedKoo37cj3HR2vpvHt5MyLbcQxXfZd87fXGn6ehC4PIWq%2Fkm73cz0DxxAAOQxX0R3Wed0K5c8OxwhowFr%2FkiXMsbQx5SYNBDVFH98FIq1KwBQ8f0NaNQt2MOHxMVRonrHeHQr1EzRePnw0zo%2FG8CR8T5xOAJmt75kBk7vxPfwf3Cgp4OYjARd&X-Amz-Signature=95ea70781a675d431e00a4e3c3106f5df588ab62b031cdacc48cfe0fcbdee574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

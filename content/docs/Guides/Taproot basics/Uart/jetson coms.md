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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D7PFXEN%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPyZtcTiKAgyLt9QHchkvNEulxtyFjtWLceezwlHykeQIhALw1l0kAjEgKWZWqb7y6%2Bw9ShbIQ8DPf5J7LPEoZLNxWKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzyerb%2FExCiK9GwojUq3AOiBlhaImQRBfoppYTjW86sA8c07vLgf6ichqiO8W7xChkdXrk2vMRr1REjKnOcn7bJUUh%2FgAsN7dGaw2LIjJmRNkIv6AhGnaDNWtxdr7t9JhCYSh%2BSGOef7BmfhhVeH%2Bx%2BLYcbTLnXAZ6i30yCp3I7DHN3oqMCWbD8kCEprT6d0%2B3QVzKur%2FNDyPxec%2BYoPBpIb01fXRVFGTqpY14Y9Q3%2B5n2Avu6ncj0nYuEK3ou6%2B8QVcgUwohjsvBX2XC4Y8D1JazzhwnMvildAEhLLOOCE1VwhfobX3nFh%2FZ3DD9zKNI34ozwKWCKJF8DhcfFZJQlWWQwawfgnzRedJughqsjuf06RmBwvV9d4HR5CXLElhcQd%2BXQ2a2yrUERrdX7JR0%2BW2yz8toYT4obVuaCeNUfPWBXgc8ckUp9Cvw5RG%2FTcD5ATX13srHcJGOWHYFH4bHk3ZR%2FFe%2BW5rK%2FNeAB%2F2KCoJK7Kb1dws0vZeH%2BSQ%2B0szLVZR0m8EmBhOdknd%2BM1dtU1tUWC7MzgIboj9ICn3HEFQMSF7UWjjkYXGszCTXL93qibWzyCMpRLW9PP77XSngQA%2B09NdTXuGp%2F%2FG8D6nx04kW5dSWCVpp7c2BVsKi69R0nfC8ZdzWBs5CqiUDD%2Bp9fGBjqkAfjvZV%2FRow%2FE8mlGhXMFoOdqtR%2FJ3gplWLIoC3e%2F1Sm61MsY1PHNPUiI%2BEqOl5SnC7Tfe5JG249Afv6jFldZ%2FLz02jMoZexWImFyzd9ns8hzA9DyNdF2LeJBczD3uYEsi6%2FFgf5WYuiQTbvyGCGr2qhSqskx1RjTplauk2YUuHsqwfF8YPr62EzD3KxxyDRGaE0mcvrLpzP7Io2VI4zo56bwc8mU&X-Amz-Signature=4712f30595699cfd16d7463606cb04bc4f83a02ce3dab405d3c40b613203c092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675PFXTRH%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtFVAyFiK4sC8TbnLL3aUAgX8voX5zIYJgT2q3YN1v4wIhAPwwjvMrmCol%2BQXdKLWcBLnpGp%2Fzu83TZ%2F63sJOksBU7KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjrB%2Fzc1IYbO9fZsYq3AOmFLLM5svy0UvxpS4VN9Et%2BwtVvB5sk12PI45TSy8%2F4c04%2FXv%2B9vgS%2FMR1paGMOXdmnGYzu1pnHHX1YdkbbuPf47n56BWif5sfOH0thkMJBP62WLycyX387T%2FXeVpN03zNZbrCQryHbbYpovaDF8KO4NypV6vC9jb4Hpnl27G8GpjkZDMYZJf5Tg8HGSq%2F31ak0Ov1bTG%2Fhw%2BgQD9mbBQeTnl18zzMrd91S2oDM0O0sGuht2D6PtTMjmBevTMdsvHFQwz2a5r%2Fgixc18AzIhaU%2Bguma8m5WL7PUlSSrk1DZmesrzgFcziETH8cSqFhAJE0VinJkj0ZwD10hZ5oktsK45B%2BGTzG61l9eHNDyd0jv6OmxhUWP5v9fHci6IWOYi0IsdC%2BnKElKWkpS7ENr83xsbZSDERaPtqpnif2dg4fgUWyas6WO1EPYpSNbV%2FgIPifaFrLCYnliwvcyl0DKGKiXdXs%2FO3lbDlrSAznZaFI9jQjYi3U1gcfZZXCHlnjsRb3Z827%2FVh6N%2BKnlRm0qL3JNPayEPRPA5M4Z9AysSNy32QcSZtSpFqeFf8NCEbqZRM%2B%2BTTSx%2Bzgi28PJHwENhF9aQiB6ER%2BPSUrQw14qWz%2BWlcMS3HqIx7dOMAkaTCdqNfGBjqkATjs%2BlaiSLWFfSGHCB2%2B18t9rXhQxOVG84%2BCgj4ArrENVzQirf2k26TBCg4pXwdvLSy1%2BGNFC%2FmZLKNL88wQBjDhbPvwKG%2BDCH4QiwSvQ%2FRTzmqQ%2FR7qi9TAnQTkz%2B2gdbeLicToMW0AHo6EGXuZtBxTL7%2BUdXA5JftO9ZpZRi3vyKKCC0wNGvDmOnbkcN1yZkPeMPDRTrFqOeUoj4i8zamY0js7&X-Amz-Signature=364c626f04854e9862997a02d86438fdabe042a5972ce753cc3c81c83664b107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4GPIPKA%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK%2BnTZtXNgbpC7KM3Vb7sTd7q19XZ9kdtwvXBYNoJX4AiA%2BLUpQ4Vv4n2Etir0Yl3Qyj7t6yuQtw6yjA0YKa73kEiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHF2zt7k4nJQM9C20KtwDTJTZSLNG9zR66dvm5xTHuEpeI1KbhqxDuaVVAmn9QG2y5k0znOj8LBqjKt1aiV0iD6Ie2xSbh90zDC7hvQ5KXux0WaNJpgavIL9oqreGRrtFGc1RI22vT%2FK8rmTp40aPKqY31P2ZjwUoZ5LSR%2BOYyXsIwyGaVpbOcFH6LzTevBMsG45zguH3pPRlb94nZ7ZfU1wE2dE4iLa%2Fv9HMH6gv6NtuMGY1xLa43DHStrFSm7vio4jM2PRFBinLYWM0Pkw9VnzDYv63xh27NnpyVPzP%2FXyGNxvVhDQJpIMtyjNRu6mqYlN8w9x%2Fdhn4%2FJHBb5jYDlLS35WXZy1VBIvR2PzBI0qImbyiPIqyVGCAqRjqPagxPBuhdfl3dEAR0cxH4zq5Mkhvt1jL0ov0ogqxOSEC9qAbQ0brJvyL4Q7WT%2BtCw%2ByitDCGRfr%2FEq8Yod3B1ZTJWg6VtmyCcjYmje8%2FgjYDto9tGVQv5tGbsjUZImdHs5YMY3m6eL6Es20PWwCsi69kzTudQQMiY35k3il5Z4VmR2p5yS0xCEyf%2BDTtWv64ONw2CYoayxKPM65z1UZEStTMBlwfEnDmkKA0s4I%2BvmHWrhoAKaG3f1XxumRHFF%2BL%2BXpAqfIF65tKdmFlHkswjdXXxgY6pgFc8UHHLFNdzP8b36cAYMMjREMC9a%2F2KztaniF5jt2iUpoeoopzQj31gLEHWYKga8f%2FVnh8MfmN8k5zwy2c4gz%2BtZMX3iACpvA8dbwdVqKJiXVut0KRT0H%2FP4KBqvQERZm%2FfXM2TTeLBxCQGW0lu%2F99C04%2BX%2FtMs4CLNBuqCm1nfTd90E%2BGM38UtPmKgGKF21nbOllMC3apMPpQ8319QzBhjpsOouVm&X-Amz-Signature=b58b6bc3c97853e3b96da1a39bc50f3e0b39df93e8eaa1c178cc939aaba3f052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4GPIPKA%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK%2BnTZtXNgbpC7KM3Vb7sTd7q19XZ9kdtwvXBYNoJX4AiA%2BLUpQ4Vv4n2Etir0Yl3Qyj7t6yuQtw6yjA0YKa73kEiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHF2zt7k4nJQM9C20KtwDTJTZSLNG9zR66dvm5xTHuEpeI1KbhqxDuaVVAmn9QG2y5k0znOj8LBqjKt1aiV0iD6Ie2xSbh90zDC7hvQ5KXux0WaNJpgavIL9oqreGRrtFGc1RI22vT%2FK8rmTp40aPKqY31P2ZjwUoZ5LSR%2BOYyXsIwyGaVpbOcFH6LzTevBMsG45zguH3pPRlb94nZ7ZfU1wE2dE4iLa%2Fv9HMH6gv6NtuMGY1xLa43DHStrFSm7vio4jM2PRFBinLYWM0Pkw9VnzDYv63xh27NnpyVPzP%2FXyGNxvVhDQJpIMtyjNRu6mqYlN8w9x%2Fdhn4%2FJHBb5jYDlLS35WXZy1VBIvR2PzBI0qImbyiPIqyVGCAqRjqPagxPBuhdfl3dEAR0cxH4zq5Mkhvt1jL0ov0ogqxOSEC9qAbQ0brJvyL4Q7WT%2BtCw%2ByitDCGRfr%2FEq8Yod3B1ZTJWg6VtmyCcjYmje8%2FgjYDto9tGVQv5tGbsjUZImdHs5YMY3m6eL6Es20PWwCsi69kzTudQQMiY35k3il5Z4VmR2p5yS0xCEyf%2BDTtWv64ONw2CYoayxKPM65z1UZEStTMBlwfEnDmkKA0s4I%2BvmHWrhoAKaG3f1XxumRHFF%2BL%2BXpAqfIF65tKdmFlHkswjdXXxgY6pgFc8UHHLFNdzP8b36cAYMMjREMC9a%2F2KztaniF5jt2iUpoeoopzQj31gLEHWYKga8f%2FVnh8MfmN8k5zwy2c4gz%2BtZMX3iACpvA8dbwdVqKJiXVut0KRT0H%2FP4KBqvQERZm%2FfXM2TTeLBxCQGW0lu%2F99C04%2BX%2FtMs4CLNBuqCm1nfTd90E%2BGM38UtPmKgGKF21nbOllMC3apMPpQ8319QzBhjpsOouVm&X-Amz-Signature=85290614bd881898fc671036ffe9ce59e3856df6effb5574c028fa4ca44a2f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675PFXTRH%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtFVAyFiK4sC8TbnLL3aUAgX8voX5zIYJgT2q3YN1v4wIhAPwwjvMrmCol%2BQXdKLWcBLnpGp%2Fzu83TZ%2F63sJOksBU7KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjrB%2Fzc1IYbO9fZsYq3AOmFLLM5svy0UvxpS4VN9Et%2BwtVvB5sk12PI45TSy8%2F4c04%2FXv%2B9vgS%2FMR1paGMOXdmnGYzu1pnHHX1YdkbbuPf47n56BWif5sfOH0thkMJBP62WLycyX387T%2FXeVpN03zNZbrCQryHbbYpovaDF8KO4NypV6vC9jb4Hpnl27G8GpjkZDMYZJf5Tg8HGSq%2F31ak0Ov1bTG%2Fhw%2BgQD9mbBQeTnl18zzMrd91S2oDM0O0sGuht2D6PtTMjmBevTMdsvHFQwz2a5r%2Fgixc18AzIhaU%2Bguma8m5WL7PUlSSrk1DZmesrzgFcziETH8cSqFhAJE0VinJkj0ZwD10hZ5oktsK45B%2BGTzG61l9eHNDyd0jv6OmxhUWP5v9fHci6IWOYi0IsdC%2BnKElKWkpS7ENr83xsbZSDERaPtqpnif2dg4fgUWyas6WO1EPYpSNbV%2FgIPifaFrLCYnliwvcyl0DKGKiXdXs%2FO3lbDlrSAznZaFI9jQjYi3U1gcfZZXCHlnjsRb3Z827%2FVh6N%2BKnlRm0qL3JNPayEPRPA5M4Z9AysSNy32QcSZtSpFqeFf8NCEbqZRM%2B%2BTTSx%2Bzgi28PJHwENhF9aQiB6ER%2BPSUrQw14qWz%2BWlcMS3HqIx7dOMAkaTCdqNfGBjqkATjs%2BlaiSLWFfSGHCB2%2B18t9rXhQxOVG84%2BCgj4ArrENVzQirf2k26TBCg4pXwdvLSy1%2BGNFC%2FmZLKNL88wQBjDhbPvwKG%2BDCH4QiwSvQ%2FRTzmqQ%2FR7qi9TAnQTkz%2B2gdbeLicToMW0AHo6EGXuZtBxTL7%2BUdXA5JftO9ZpZRi3vyKKCC0wNGvDmOnbkcN1yZkPeMPDRTrFqOeUoj4i8zamY0js7&X-Amz-Signature=3cccabb3b65f0d09b612babe7f529381a3cdddba26dcb1537606a2245c8cad97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675PFXTRH%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtFVAyFiK4sC8TbnLL3aUAgX8voX5zIYJgT2q3YN1v4wIhAPwwjvMrmCol%2BQXdKLWcBLnpGp%2Fzu83TZ%2F63sJOksBU7KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjrB%2Fzc1IYbO9fZsYq3AOmFLLM5svy0UvxpS4VN9Et%2BwtVvB5sk12PI45TSy8%2F4c04%2FXv%2B9vgS%2FMR1paGMOXdmnGYzu1pnHHX1YdkbbuPf47n56BWif5sfOH0thkMJBP62WLycyX387T%2FXeVpN03zNZbrCQryHbbYpovaDF8KO4NypV6vC9jb4Hpnl27G8GpjkZDMYZJf5Tg8HGSq%2F31ak0Ov1bTG%2Fhw%2BgQD9mbBQeTnl18zzMrd91S2oDM0O0sGuht2D6PtTMjmBevTMdsvHFQwz2a5r%2Fgixc18AzIhaU%2Bguma8m5WL7PUlSSrk1DZmesrzgFcziETH8cSqFhAJE0VinJkj0ZwD10hZ5oktsK45B%2BGTzG61l9eHNDyd0jv6OmxhUWP5v9fHci6IWOYi0IsdC%2BnKElKWkpS7ENr83xsbZSDERaPtqpnif2dg4fgUWyas6WO1EPYpSNbV%2FgIPifaFrLCYnliwvcyl0DKGKiXdXs%2FO3lbDlrSAznZaFI9jQjYi3U1gcfZZXCHlnjsRb3Z827%2FVh6N%2BKnlRm0qL3JNPayEPRPA5M4Z9AysSNy32QcSZtSpFqeFf8NCEbqZRM%2B%2BTTSx%2Bzgi28PJHwENhF9aQiB6ER%2BPSUrQw14qWz%2BWlcMS3HqIx7dOMAkaTCdqNfGBjqkATjs%2BlaiSLWFfSGHCB2%2B18t9rXhQxOVG84%2BCgj4ArrENVzQirf2k26TBCg4pXwdvLSy1%2BGNFC%2FmZLKNL88wQBjDhbPvwKG%2BDCH4QiwSvQ%2FRTzmqQ%2FR7qi9TAnQTkz%2B2gdbeLicToMW0AHo6EGXuZtBxTL7%2BUdXA5JftO9ZpZRi3vyKKCC0wNGvDmOnbkcN1yZkPeMPDRTrFqOeUoj4i8zamY0js7&X-Amz-Signature=9b7175545bd5b0ed6487951252c8a885745d66627b9c39e52cb42074a8513f73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVNYH7FS%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6qY%2Bm8R9r8psE%2F2cRNYO60ygDjw1p8ASUVMJuEg2iLAiEAp9vQw4j0iOGInPu%2FruXJLm5H%2Bq9Qgub0gyBfELL8qXYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFEIabK1cn3M5S06ircA54yWmd8GyammNByGF%2BGATvp29orH028k2BHCxB%2F1pVNzv7KoCb8AXIAVRaw8YxrLBkJCCi5ZG%2BWRhoZnoylNmYv1qzcTbvaGv77H0zl5gsa5%2B%2F8OsYWBS4SlCNPn172ZB%2FqsL04M8mbuctn6FsqdSbft4VLSAXxOCokecnxSPXJqK7o3VIbtn0js3Et453mHotla3yc0I0P53skkfREpsfgW9poLxpCb09%2BcKCWKxLgenMNm3n9hqaVQ%2BPnFNxhTrPJMATAndW2Ed2D%2BMlJz3AHPY%2BFnoh8TmyhpJ16lSS7zWl1PAwesaStvVA42gbJJLDXRH9QJRZahdt0CholQFsyDpAzK9cV0V%2F7U%2FIOyca3rNqRrva8UrR2Hj357Lk0lXu4lYzCudGOBxR%2FPMQAPjpq3GrPWGi3DUDzTfbpTm%2BAfrRWbNu81IxQFuZyfte24cFNRYTwl6CX4mXnSH%2FI%2B0CSMm6Ip145nGG4Fnd6GCvbNvr7Ml%2BxmfFI5WXZY%2B4fj3f%2FYyMflUP4AYvjBder1sICURWq4rMZIaSVGK8wmRGy3tzBEE%2Fr2icAxiQyOxU3sKWjIfLYnL%2BQLAO5AgroknO9%2FvDqSZoFfpsTJ%2FwhROgkZD1EhvVRsBwiqDFFMNbV18YGOqUBlX0WMCn67OiJ%2BjBWnZB5MfaSUajzAh%2FAuYnlfhzB9VdCbsZRLupMRPP762dd6lzYj4x2ymMDMonw60XuIylfDo0cE2OfS6zsZRU3cPtUZWnm6GFihgG5O4o7RPVdotdEai5uTAnP81uqIUb8byb1CX%2FvHEc%2B0pRdxgAm5WfA9q7yTRK42fqcPEnmYbjCGCI5xaH4VjGJnC969OhLZPe1nivJUbiJ&X-Amz-Signature=1ef840eb0a09876c0bf2340cd32a4d5473743476d0533ca43cf52e9499fb9f46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

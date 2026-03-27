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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEDXPTEL%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIATOtOnv8TeQ09aYGY4KJ0ZqiScSLBiYrK9PaDvlazUWAiEA1SN6aSujwtqceB%2FYqxAlKVQc3mMdsIbgbkOiAXgoWycqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6IqKYnAUv04%2BM4nCrcA4%2BoxsHv4k8EPP8YNQqRLFw%2BS%2BmwoTwIi77wKVLfYoNuemW8cYLQzx6pZlIw%2FhR9RqDSg51UUN0r1nHs062gbVSQPuRpUsVKwWtOgsmJavZmDWuumfwA86Ht3pW6HlIGbHOzwI%2BDuYmLl%2BLlNrLJBGiOvrpHSsg8XRdLFH0ymUFGpE2nwkvfyXZAiIKeed7FmIqbW0Hxi58pcKuj%2BKHLTAp%2BZqplmiLZJL85q1sSgPbEVaStkTic41gsQaPRiVBWxzGpctmAvlso7TbcyjqE4Lr37iOM8pzSOB%2Fcjt7orR9GBtXO04mQILeo3WgP4nimx4wTHATBqOoGIRIRymN5rUI9IT0tBzAsbCdyCvtHZciPMFi%2F7tDTob%2F3faIItmWvQiIFHcXCPDc0SrJ3UA1k7KKMGZ723akDc0qLfl%2FyaS3R6iHsLD8JUgPFXBgzhHsnTkLJK8NXZe%2FrCNAPMAI%2F8LMR%2FgcayjyOe5b9l4KS6lwgviDgW8%2ByNfkrsEiO%2FbFu%2BKYfQ%2FlwCSxBOIKMIdByn35gmyDzHaymI2TvsPWGwNqriOc%2BDFqsK4qnjDExPxqiDsCJ4c8mc7wVEGdPnPMuymgX9ViNKNAGHZ5nfZICbUxdrVZQM76XW65snVs1MNjyls4GOqUB7mbwMovYZfaAfmzNwSlgzR45ArWGVgcAqrQhN%2B5omwXdeyp2xz3pADFDd%2BC9PHX1rIGQfhOFEeu8ARm7HEFFtcq6tAjWAcXVHqhwoJJUY5NNeh%2FsWYFvQ%2FC3cb8AjYn5rlZiCOa%2B%2F8iB8Nk%2FOwiwTbME1DFn%2F8iw%2FP2TZq3GSocfLUvfKINugoiZliphCrbuMI1fdRmW51jMw%2Fie3C34R1T%2Fqmks&X-Amz-Signature=6ae3209ae5a8e0188c0be1540a76b5c72bf2595d18b21f2406b9e4c51432517d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQIAFRED%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIE9zdK1W8dQkd9kz2wA%2Buw0y%2Fk56Xc%2FKUVaBR%2BdSrL2LAiAvQXBo%2Ff8fCBMM1PXJ4LZe%2FXbzHP3hYaGXu0jZOD8uQCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOUJJwfpLjKlfmxJKKtwDmEKCxDkB%2FYnhzMDL33N61GiSzk0twJ1GpR48pJ5T2VAmUfO%2BZlA1azYYFsGckRLHpkCE%2BkBk%2BMidVYl%2FbH3%2Fm6RNOKOmD2QE8spey39CF%2FNz61rJDWrT2%2FJFMpU2k9z4oPmfoHA8hehNtorU%2B9jFeiEi8i3OefdzEgsp3zzn5wY0HLb4FgkGyHCTkYwUkN1%2Bb7eilAEp89cTxxUaQvXKjgFt1UzghqNN4cJu9lh9El1aIR5jOA8VtxGfO7xXfqwnQY57L2bvLxvzV7bfLKq1BX%2F%2Fg2j5q%2BOme5M%2F%2FpygJZe2E9OWaaachoqt8wYDpuJ66rCscvoxlJM1OsNIrLMq42%2F3LAQ9SMslI32YJd2Gpxk6RReHHq61WF9TqWp1DwRaf7antVD4zHEldCd0n3gh5NOoB%2Fif5ksFfk5DvmyGN1%2F9OXIypn44IiG9LWtETjL%2BCOV1bEIRUlGsb%2FqTdmAERwpOX3lGoqPO2Gb2IdtkQqC%2FHVNOVDFUjrwNIOuOwY5SzOAPMCZCtqmSre2S%2BjKe07SJtGkWkdPxT%2BujRgK4wtepndmM9%2BFyGYTlfFkcSMQWrgRF6cHTGO3I1Xw9sNFXwDuw7qeOFSoQIVrTWbrEvhL3ZBoNTsDOQROWU1IwieuWzgY6pgHIeIOOMILeG2FKEHEzsLQUhFa4KZN3G8nc9eNoVZWrfuQZ%2F3w3buBFmc7TKj15AFmtu9r%2BVjg1aEWjVRQ4wwFGYsPzW9JWxqc8iWgih5umcoRxwdkEGiZTS%2B%2FcdHQ%2F%2BNoYeWPzDN2p1kwd072eEvj9gHnpCcEW51mxQWV%2Bf8b%2FT7ITCoYSKZ%2F8X6QAoo%2Bzx9mMRIrQ32ZMCYI%2FTo0BRoHhJYLbSL8g&X-Amz-Signature=012f8cbeebee6f62ed0fcaf1e87fdeb839dbdf0cdb61031a6fbe55f507d1e79c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FWZXXSC%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIA7B6NacTGSr3Jhk5KWcN1%2Fn5s2MUyMvaOs4lHrNXhonAiEAk%2FFXqmKHm3jSPQ1umx9iG6duF0EI%2Fad1IRhPCRrRIBIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOl2jGZsIoE4fxCm2yrcA73qB0FlulAPT5MlrQwjr2xHZdfJCLKGfPwpiJu1TvKrBEjnsJpbOUWKyJkE2zAWBPhF%2FtUKfo9kjdX344R%2BjOe3P%2FydDvhjrlzddWSO%2BhfQoPXEZRBUwrxktGqtNU5fgsCIWhl0mfh0OdLb6Frueu9TFjlqG8yxj4ipCZMpxyrYD4AoG04FH2JbGxufmLASHG4IPLvhOcp%2B6JRPmLf0bOt0zo1UE7vceGez7oCp8h4VxWZQzKeMZxUHPgjoT5%2FP0DNYNIeFx%2FEiSH0rD7302zUP91I3SH%2BQUutnG8gC%2F1leYrLgiPPxCquh%2BoeUPA%2BRSAzD6LCugzZcxio60Vh6d0XoDaOAVLAEN0DneE9PwrjQ%2BokSTLzjDa31FaONTE6u%2BCyuHikh2ptw1wZreWPVfuwi27gUyBJT9GU%2BUv9CuVhCo%2BMLYTeY9cN61z1cAi2ilQUWSz%2BjNZ9KRW816wvWo%2BqiK89m9T5%2FXY8kUwjpvIxcDVoyDGBv6gAuawC72qTwvxhtivcx%2BVIh%2FLP3%2BMo4%2FzQJ5vDzPZFCnBxA5dV0jaKYYJ2%2BepX3bGT5P2Zg%2BJxnfVbKOiOWkK67COqwL%2BbK2B2Dabr0%2FV6kqGh0U5s7oEvtRPqn06BZzpZ3q10FMI3uls4GOqUB9rG3sNwJsTTV7NN%2F6kDWR8cUWlOMOVC27YhdoPXCMyIKcaOI5yAgcr0ZuckWekVXoDiVHw2bmNovlH9qKS%2BWxGPKbfG4xzeBw5i3jk4TTsGJNQVWa9rRWyE38Rt39DIFX1lOKPbpKYiqr%2FWFcPw91sZdW2pueOSRT8IAE6ANSibWuRZHVz0OcSw2BRKjdjV%2Fuxy3hIkHDo3oZLjRZ2aqcNA9EuE0&X-Amz-Signature=968fef1f4bf1966044c078dbbfbc575d62e6c3ba1fb38c2489ab745b49b9fd63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FWZXXSC%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIA7B6NacTGSr3Jhk5KWcN1%2Fn5s2MUyMvaOs4lHrNXhonAiEAk%2FFXqmKHm3jSPQ1umx9iG6duF0EI%2Fad1IRhPCRrRIBIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOl2jGZsIoE4fxCm2yrcA73qB0FlulAPT5MlrQwjr2xHZdfJCLKGfPwpiJu1TvKrBEjnsJpbOUWKyJkE2zAWBPhF%2FtUKfo9kjdX344R%2BjOe3P%2FydDvhjrlzddWSO%2BhfQoPXEZRBUwrxktGqtNU5fgsCIWhl0mfh0OdLb6Frueu9TFjlqG8yxj4ipCZMpxyrYD4AoG04FH2JbGxufmLASHG4IPLvhOcp%2B6JRPmLf0bOt0zo1UE7vceGez7oCp8h4VxWZQzKeMZxUHPgjoT5%2FP0DNYNIeFx%2FEiSH0rD7302zUP91I3SH%2BQUutnG8gC%2F1leYrLgiPPxCquh%2BoeUPA%2BRSAzD6LCugzZcxio60Vh6d0XoDaOAVLAEN0DneE9PwrjQ%2BokSTLzjDa31FaONTE6u%2BCyuHikh2ptw1wZreWPVfuwi27gUyBJT9GU%2BUv9CuVhCo%2BMLYTeY9cN61z1cAi2ilQUWSz%2BjNZ9KRW816wvWo%2BqiK89m9T5%2FXY8kUwjpvIxcDVoyDGBv6gAuawC72qTwvxhtivcx%2BVIh%2FLP3%2BMo4%2FzQJ5vDzPZFCnBxA5dV0jaKYYJ2%2BepX3bGT5P2Zg%2BJxnfVbKOiOWkK67COqwL%2BbK2B2Dabr0%2FV6kqGh0U5s7oEvtRPqn06BZzpZ3q10FMI3uls4GOqUB9rG3sNwJsTTV7NN%2F6kDWR8cUWlOMOVC27YhdoPXCMyIKcaOI5yAgcr0ZuckWekVXoDiVHw2bmNovlH9qKS%2BWxGPKbfG4xzeBw5i3jk4TTsGJNQVWa9rRWyE38Rt39DIFX1lOKPbpKYiqr%2FWFcPw91sZdW2pueOSRT8IAE6ANSibWuRZHVz0OcSw2BRKjdjV%2Fuxy3hIkHDo3oZLjRZ2aqcNA9EuE0&X-Amz-Signature=f7767578fc12e61afb94fddb74ba403596a6918ada9e0cb2e495e51059cab17b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQIAFRED%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIE9zdK1W8dQkd9kz2wA%2Buw0y%2Fk56Xc%2FKUVaBR%2BdSrL2LAiAvQXBo%2Ff8fCBMM1PXJ4LZe%2FXbzHP3hYaGXu0jZOD8uQCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOUJJwfpLjKlfmxJKKtwDmEKCxDkB%2FYnhzMDL33N61GiSzk0twJ1GpR48pJ5T2VAmUfO%2BZlA1azYYFsGckRLHpkCE%2BkBk%2BMidVYl%2FbH3%2Fm6RNOKOmD2QE8spey39CF%2FNz61rJDWrT2%2FJFMpU2k9z4oPmfoHA8hehNtorU%2B9jFeiEi8i3OefdzEgsp3zzn5wY0HLb4FgkGyHCTkYwUkN1%2Bb7eilAEp89cTxxUaQvXKjgFt1UzghqNN4cJu9lh9El1aIR5jOA8VtxGfO7xXfqwnQY57L2bvLxvzV7bfLKq1BX%2F%2Fg2j5q%2BOme5M%2F%2FpygJZe2E9OWaaachoqt8wYDpuJ66rCscvoxlJM1OsNIrLMq42%2F3LAQ9SMslI32YJd2Gpxk6RReHHq61WF9TqWp1DwRaf7antVD4zHEldCd0n3gh5NOoB%2Fif5ksFfk5DvmyGN1%2F9OXIypn44IiG9LWtETjL%2BCOV1bEIRUlGsb%2FqTdmAERwpOX3lGoqPO2Gb2IdtkQqC%2FHVNOVDFUjrwNIOuOwY5SzOAPMCZCtqmSre2S%2BjKe07SJtGkWkdPxT%2BujRgK4wtepndmM9%2BFyGYTlfFkcSMQWrgRF6cHTGO3I1Xw9sNFXwDuw7qeOFSoQIVrTWbrEvhL3ZBoNTsDOQROWU1IwieuWzgY6pgHIeIOOMILeG2FKEHEzsLQUhFa4KZN3G8nc9eNoVZWrfuQZ%2F3w3buBFmc7TKj15AFmtu9r%2BVjg1aEWjVRQ4wwFGYsPzW9JWxqc8iWgih5umcoRxwdkEGiZTS%2B%2FcdHQ%2F%2BNoYeWPzDN2p1kwd072eEvj9gHnpCcEW51mxQWV%2Bf8b%2FT7ITCoYSKZ%2F8X6QAoo%2Bzx9mMRIrQ32ZMCYI%2FTo0BRoHhJYLbSL8g&X-Amz-Signature=5f1960ba7fa08700e5a0d7f7b2dd2898956f8bf8183bf03f9d34be16d5c7f8c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQIAFRED%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIE9zdK1W8dQkd9kz2wA%2Buw0y%2Fk56Xc%2FKUVaBR%2BdSrL2LAiAvQXBo%2Ff8fCBMM1PXJ4LZe%2FXbzHP3hYaGXu0jZOD8uQCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOUJJwfpLjKlfmxJKKtwDmEKCxDkB%2FYnhzMDL33N61GiSzk0twJ1GpR48pJ5T2VAmUfO%2BZlA1azYYFsGckRLHpkCE%2BkBk%2BMidVYl%2FbH3%2Fm6RNOKOmD2QE8spey39CF%2FNz61rJDWrT2%2FJFMpU2k9z4oPmfoHA8hehNtorU%2B9jFeiEi8i3OefdzEgsp3zzn5wY0HLb4FgkGyHCTkYwUkN1%2Bb7eilAEp89cTxxUaQvXKjgFt1UzghqNN4cJu9lh9El1aIR5jOA8VtxGfO7xXfqwnQY57L2bvLxvzV7bfLKq1BX%2F%2Fg2j5q%2BOme5M%2F%2FpygJZe2E9OWaaachoqt8wYDpuJ66rCscvoxlJM1OsNIrLMq42%2F3LAQ9SMslI32YJd2Gpxk6RReHHq61WF9TqWp1DwRaf7antVD4zHEldCd0n3gh5NOoB%2Fif5ksFfk5DvmyGN1%2F9OXIypn44IiG9LWtETjL%2BCOV1bEIRUlGsb%2FqTdmAERwpOX3lGoqPO2Gb2IdtkQqC%2FHVNOVDFUjrwNIOuOwY5SzOAPMCZCtqmSre2S%2BjKe07SJtGkWkdPxT%2BujRgK4wtepndmM9%2BFyGYTlfFkcSMQWrgRF6cHTGO3I1Xw9sNFXwDuw7qeOFSoQIVrTWbrEvhL3ZBoNTsDOQROWU1IwieuWzgY6pgHIeIOOMILeG2FKEHEzsLQUhFa4KZN3G8nc9eNoVZWrfuQZ%2F3w3buBFmc7TKj15AFmtu9r%2BVjg1aEWjVRQ4wwFGYsPzW9JWxqc8iWgih5umcoRxwdkEGiZTS%2B%2FcdHQ%2F%2BNoYeWPzDN2p1kwd072eEvj9gHnpCcEW51mxQWV%2Bf8b%2FT7ITCoYSKZ%2F8X6QAoo%2Bzx9mMRIrQ32ZMCYI%2FTo0BRoHhJYLbSL8g&X-Amz-Signature=923932f5f529a3f2181a5abd2979c86b122be23864061699d6ef9f5de3582f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z4C3AFW%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDUj9hhD989lcssn7jrn8Ls1zJvGvgi9gD38E5H3pbXxgIhALbzO6uosqRUQAqbhSDW4NwJ4qgn%2F6u9ER5jqPfFtDN7KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkzZACYvcTwRZWrM8q3APY9MzdBfIsnl1DsjvgeLm7O8s8b0QvRk6nNe6VWzzUFKPGdNf6uj%2FjESkA4eMxBm%2FanYOqqb91GmC25DrL%2BfOFPwW7UowgjcRvMAbl064hyQ0%2FoqSZjXkzV0quSDaoQK26XfoVl%2BfemHVBD0Z%2FuD5cotQ3Ox3RXw%2Fvh4S6nxSYLk%2F9L%2FbJ0F%2F9xDnGuzx5udUFFa9Io1ULCQ6v%2FSIF9BToKYMA94uEcuPEJSyonRVbnpis5fh6RRY4JR92e2cb61ZJ2Pi8UHi6js0xR7aEoPygJAepEycXAydb2f6mvbBoLGhuJILwSy8N4ad0YBchfrE5I8jwbRl91barIkzB6sV2KtrC69%2BVn6vpB4TkZJ2EnN4ySnimOBSeFRfjrrWNWsxY5Tsgx3kCMCNw9ApVes%2B4naEUIN42URYoEiNQAR6VCu96Y7FFDcNRbUSW2in7GVG%2B1k4hOcXHUNJGa9J4BFVCbQg3C7wQgcN1iQ6ho9sSUuVp8IP%2FKQQMKEeXdyUzzD71wIxdbFwMUhmUqIoCWgdm%2FrfIceMdSwsbYqI10dxdnn4gw9uYe1%2BNXs2%2BDnr10B5yzHRTJtHwAAqkrXrWnDOeEHi%2FlZFea0YUyMImyJQvOiQeDI8EpIyz2lfNAzDo6ZbOBjqkAU4ZF9W4AhQqvQK0cDadOVmNH9ahdzq3tcgcZ%2BenUmLEFqvn%2BE37CaBB9%2FAhtgwUplFxNdxTFnGGClzCXfGsiCQV4I%2Bobv0K%2B8OwGTgXUSkZFqD98lpo7tU8tpqdU%2F%2BKCUhdv8Eii8CUeSnyNTQUhA6CK9aVP279zwXlBWBnOVuFiQHWINw6kQFnLDqcBdG3k2tAQO5huKiyiPGjLF1AUPS62R3V&X-Amz-Signature=e5d118cfe9945c85f7bbacec3b3eaaacf4e744cffbdb74817aabfb1f049f178d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

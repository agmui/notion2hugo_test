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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK457KND%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDHEC933dSfoHTmi1So8K3nNmE%2BWEXhhnblAJx3nsZINgIgRk9QV8yDCXFmSL3aCOK0RZOURk%2B6WtuVX4yCKLbDxwMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPRsECAVvQWrIro8xyrcA7YpohrFfj9VxSM7QKcwGfA6U7LyurOGwZMhFbJROIlDHXtI7%2F%2FLtz4rWOTsAlK3LPDObJ53n6O1wMmTO6%2BYwHWNJcAXcjE88yO%2FlaFassTjLPO7oAGLXicP38yHnCvRRuXXGmmOdjU0c2n%2BTM1yXAbg0D%2FRxkrgWNJe6Optv%2FnZ0k%2FYcH%2FzXLSKN8214U0eqTMBVwNV0sDRYIoGpPmi9b91Znoqh1ut%2FL9HK9db5ncQlo3xPDN2uU22VIpqMpFHRGrb73bDyckk3hgwCGMUpBMthmEnjS249fuNsRVVOmNHTrNePcrXr%2B4MoWD%2FZy0SioOV9iKHldXrD092FZpuQC4w2bB61WcDFphoYh6u2ZXSnRx1Z4D9LyCPUqxf8zEwbi4fOW%2FgdppiIrX%2BYViFzQ1u1Wz6DNV1i2uwby7JLnqdG1OCTAZNoNk%2BU7q026Qduv2XfYhIkQQdpknR0gvk%2Fa0nPz17K%2BcdEpVMRQf0SRuBIfxpXzbRKFqffujvcShzeNU3CHWRjlqs7FhJ5qp2fe11KkXRVzQklZe3IWN54DLWX3PbqXbifrO%2FlDt9iUeOhnJWMDnGQHjfBAj4Dpw1NqoLZMkxURpVqsdCvVIgEqLEDHVMmatB%2FibLQME%2FMMfNm8sGOqUBuRWIjuk35rwqtdKLKOSZvpny9Pq3vqu5dNt0v43Yqo2VRfGd5urkuDwjttE%2FRAHb4J4WFiNrs5vh3wEM14jSRgXMJYWCI79rZryewtjaMznsJE32p4zB3tR54fT9%2BlXqXACAzLXlxIROzFU%2FxbYSbJKxnHY3TywC91R%2F9xDcRKB51OmgZyC88RQ%2F3AE%2F4h0OGUKTXkP%2FLsZBZ8SHSv5x4J%2FDb3gr&X-Amz-Signature=eff63bce585114d9316b26f744db26b6a34d1f77315c64bbc3a5c6daa7072dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XGODFXR%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCT4gWFN3NBuin8BC5%2FPpLYGaZm6IvZzWXzexa2MBFnbAIgQ9sQDIrnYs%2B97%2BmJkdZR1PuZgXXkUyI5L7YOr6b7RCMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNmhgQEzQ52KS0HNMircAxhWfftTbq2cKxHqlziWZGM3RTOeET2v%2FlXzrthHQcj3Ns%2BPzWhqPaUB8xDMghtuqR63EhhwdozLXFHNryjVN%2FPkwwSzplQfdN%2BlA%2F1czwDH0OhKUyJx%2B%2Bl7zvRmah7XDJC2GaBDTk%2BPyTQBlGEjkbKDm2OA73ZWSoodAF8PyuG3sdalpIwLUjIOImZqNgffyBqGw2GMh9RjqI4zYdrFMBLDbqYdw7XDGRinZsK9r5FNiNkJDmHZKQE0SGTefLx6XHYSA%2BCIyM4X1t9KG6aX9gb%2BjCE0C16Gadu91OzkMJVLRm%2BYLkbMy8Jvgve6HivC5P7rkI%2FrimhE5I2rD%2B%2BLD%2FOt5G9zCu3kHI1kO5yI%2BmqW8%2Ftwfr9IkGwGhokTaoWFdDlEWqMWdT4r6TVBpRjDOPoVpeK9L0oahrM0hXjhXm2nB8%2Buv%2F2K7wt8B8n21gcUKepWuEUuS5jA1%2BRZQ5hns8yT4l6VANQ3lrjOovecPE2HxdAwwj7xBxa0M3s7W4VyAYpucDKPC%2Bp8jHUDhIgKAZ4m3H7jiF38U3fGEpNixjMmmj9l3%2FeBaRQssJWIVQGPOu9refWeYBNcGAQ1NVDfKYErzz9NsAZD9I4dC095EOsZ6X4B08cgxj8%2BRA%2B5MPLNm8sGOqUB0Hxu%2BfzSBGAxSoy3LlOIPF%2F1SqS9COtELo9GjxEVQIWioh75%2BSaDJcAgRQdVinfQdqPBUTjWfojqKNhnut1ULXXCzbwxJ65aSyoIFO5sQrXTcvgCC67yZPy%2ByElhdO2pRmaRTa%2F8XEwVFQ3%2BJpErbumlx4WYAzxMcdUJQQgiS9KBTvgjOREdhLFSjT3lhImqXPdalfwtC2LzqvXxiuCCoN%2Bq8L1y&X-Amz-Signature=ef281e6ee477b802a9b8cf3d03898c07645fe80574ff95caa2825f33ec851519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLNROBJN%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQD5TpLexAz5W3H%2BGkH2vL%2Bmaz%2By9jSEj7sLYGbxRFWnFgIhANyFVwK5OxCNgv6DPgks30Kz6jYZUNr8liZc%2B87Am8xrKv8DCBIQABoMNjM3NDIzMTgzODA1Igy%2Firx3eyYv2lPdkOMq3AM1ATCiEOs6LRA8mQ59%2FFcvx4LgJoC%2BGPyEfflUf0sdEa%2BnyGGKzumvvs7hJIZlV54z4aFwFeFGGDQjtIy5RMaepiKVYPUSP8ikB5g5%2F1jXqSQuCan006wfvqYbQIXxpQDFgSZ2roBXCrsAAEslA5Ec6hyuCHvXsUcpA2ZfS9RDpwlm8PeDrk98u6TSCW6f1nAyRrIn6qiq5xi6grtp0jtGXNu9eI20WQOnBfbpZ%2Fc7QK1zJrzQJF9Fp0lHXWRLXiCVHKRMRynYU7esdDeuPcDWd%2FlLcu0S5zBiMjxooYZPfVxQjaR6Zu6R6NCWuVKyea137jUNEsKAfoImTdadz6jtrX%2FcBivLVHMcOh63y0DnphlfSQm68XStE0w0P%2Bh6pi8k%2FBQmbZL89TXig%2B74CTeEbbB3m9SiVvB8Rj%2BREh9RoJmFzZGrnZpqjSFlDDjfW1eKVh7wqVdks%2FldT4mkvf117fhObMhAkDhsTJaEYfEgGrlh5%2BcO7vU4nszEYrtV4wTwVmHdfq3bz%2FAjs2zIt6VYAqI28zVOmHh%2FRq%2BHThtqLhAJqqbaY5abWPYZaxneB6uKMhHNByHHdjzzkOUUcF0CK4BkHW3SXTxkYLRQTwbPVaWQGzt%2FQVJF1HLU4zDDzZvLBjqkAT1Ym2Ns%2BrFlBAiFj20lP9fcdpqb7inBzOwWGY5jOoM5DCH1ZRFzxfrg1R%2BZ3hZUhAx9GQ4S2sfEk%2BG6a6c%2Bjsl3DODtOozHto25MPc2dmTtRzsEgtnVGZU5ETWLAL8kYeFiZEwYaUN%2F82IN8oE4TjdUNE8bMGUD9HCRU%2BIRmTY6uE0hDRAmDx6LquR%2FsmTpkeh1PJt6gqHfzlDwD9nSrtpQWfhx&X-Amz-Signature=13f739fa1c1be29dae3d3555702f569784ef5885f0936c2f5e30e1b37d289ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLNROBJN%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQD5TpLexAz5W3H%2BGkH2vL%2Bmaz%2By9jSEj7sLYGbxRFWnFgIhANyFVwK5OxCNgv6DPgks30Kz6jYZUNr8liZc%2B87Am8xrKv8DCBIQABoMNjM3NDIzMTgzODA1Igy%2Firx3eyYv2lPdkOMq3AM1ATCiEOs6LRA8mQ59%2FFcvx4LgJoC%2BGPyEfflUf0sdEa%2BnyGGKzumvvs7hJIZlV54z4aFwFeFGGDQjtIy5RMaepiKVYPUSP8ikB5g5%2F1jXqSQuCan006wfvqYbQIXxpQDFgSZ2roBXCrsAAEslA5Ec6hyuCHvXsUcpA2ZfS9RDpwlm8PeDrk98u6TSCW6f1nAyRrIn6qiq5xi6grtp0jtGXNu9eI20WQOnBfbpZ%2Fc7QK1zJrzQJF9Fp0lHXWRLXiCVHKRMRynYU7esdDeuPcDWd%2FlLcu0S5zBiMjxooYZPfVxQjaR6Zu6R6NCWuVKyea137jUNEsKAfoImTdadz6jtrX%2FcBivLVHMcOh63y0DnphlfSQm68XStE0w0P%2Bh6pi8k%2FBQmbZL89TXig%2B74CTeEbbB3m9SiVvB8Rj%2BREh9RoJmFzZGrnZpqjSFlDDjfW1eKVh7wqVdks%2FldT4mkvf117fhObMhAkDhsTJaEYfEgGrlh5%2BcO7vU4nszEYrtV4wTwVmHdfq3bz%2FAjs2zIt6VYAqI28zVOmHh%2FRq%2BHThtqLhAJqqbaY5abWPYZaxneB6uKMhHNByHHdjzzkOUUcF0CK4BkHW3SXTxkYLRQTwbPVaWQGzt%2FQVJF1HLU4zDDzZvLBjqkAT1Ym2Ns%2BrFlBAiFj20lP9fcdpqb7inBzOwWGY5jOoM5DCH1ZRFzxfrg1R%2BZ3hZUhAx9GQ4S2sfEk%2BG6a6c%2Bjsl3DODtOozHto25MPc2dmTtRzsEgtnVGZU5ETWLAL8kYeFiZEwYaUN%2F82IN8oE4TjdUNE8bMGUD9HCRU%2BIRmTY6uE0hDRAmDx6LquR%2FsmTpkeh1PJt6gqHfzlDwD9nSrtpQWfhx&X-Amz-Signature=9a76227c93f9eb45680b81d7c8f0061cfd7e25b4f702ccc22cce0a6cbaf89227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XGODFXR%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCT4gWFN3NBuin8BC5%2FPpLYGaZm6IvZzWXzexa2MBFnbAIgQ9sQDIrnYs%2B97%2BmJkdZR1PuZgXXkUyI5L7YOr6b7RCMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNmhgQEzQ52KS0HNMircAxhWfftTbq2cKxHqlziWZGM3RTOeET2v%2FlXzrthHQcj3Ns%2BPzWhqPaUB8xDMghtuqR63EhhwdozLXFHNryjVN%2FPkwwSzplQfdN%2BlA%2F1czwDH0OhKUyJx%2B%2Bl7zvRmah7XDJC2GaBDTk%2BPyTQBlGEjkbKDm2OA73ZWSoodAF8PyuG3sdalpIwLUjIOImZqNgffyBqGw2GMh9RjqI4zYdrFMBLDbqYdw7XDGRinZsK9r5FNiNkJDmHZKQE0SGTefLx6XHYSA%2BCIyM4X1t9KG6aX9gb%2BjCE0C16Gadu91OzkMJVLRm%2BYLkbMy8Jvgve6HivC5P7rkI%2FrimhE5I2rD%2B%2BLD%2FOt5G9zCu3kHI1kO5yI%2BmqW8%2Ftwfr9IkGwGhokTaoWFdDlEWqMWdT4r6TVBpRjDOPoVpeK9L0oahrM0hXjhXm2nB8%2Buv%2F2K7wt8B8n21gcUKepWuEUuS5jA1%2BRZQ5hns8yT4l6VANQ3lrjOovecPE2HxdAwwj7xBxa0M3s7W4VyAYpucDKPC%2Bp8jHUDhIgKAZ4m3H7jiF38U3fGEpNixjMmmj9l3%2FeBaRQssJWIVQGPOu9refWeYBNcGAQ1NVDfKYErzz9NsAZD9I4dC095EOsZ6X4B08cgxj8%2BRA%2B5MPLNm8sGOqUB0Hxu%2BfzSBGAxSoy3LlOIPF%2F1SqS9COtELo9GjxEVQIWioh75%2BSaDJcAgRQdVinfQdqPBUTjWfojqKNhnut1ULXXCzbwxJ65aSyoIFO5sQrXTcvgCC67yZPy%2ByElhdO2pRmaRTa%2F8XEwVFQ3%2BJpErbumlx4WYAzxMcdUJQQgiS9KBTvgjOREdhLFSjT3lhImqXPdalfwtC2LzqvXxiuCCoN%2Bq8L1y&X-Amz-Signature=273035df3f7c86eac3c3998689194bc8c9c251910f8dec39ced3d6a802b2e930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XGODFXR%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCT4gWFN3NBuin8BC5%2FPpLYGaZm6IvZzWXzexa2MBFnbAIgQ9sQDIrnYs%2B97%2BmJkdZR1PuZgXXkUyI5L7YOr6b7RCMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNmhgQEzQ52KS0HNMircAxhWfftTbq2cKxHqlziWZGM3RTOeET2v%2FlXzrthHQcj3Ns%2BPzWhqPaUB8xDMghtuqR63EhhwdozLXFHNryjVN%2FPkwwSzplQfdN%2BlA%2F1czwDH0OhKUyJx%2B%2Bl7zvRmah7XDJC2GaBDTk%2BPyTQBlGEjkbKDm2OA73ZWSoodAF8PyuG3sdalpIwLUjIOImZqNgffyBqGw2GMh9RjqI4zYdrFMBLDbqYdw7XDGRinZsK9r5FNiNkJDmHZKQE0SGTefLx6XHYSA%2BCIyM4X1t9KG6aX9gb%2BjCE0C16Gadu91OzkMJVLRm%2BYLkbMy8Jvgve6HivC5P7rkI%2FrimhE5I2rD%2B%2BLD%2FOt5G9zCu3kHI1kO5yI%2BmqW8%2Ftwfr9IkGwGhokTaoWFdDlEWqMWdT4r6TVBpRjDOPoVpeK9L0oahrM0hXjhXm2nB8%2Buv%2F2K7wt8B8n21gcUKepWuEUuS5jA1%2BRZQ5hns8yT4l6VANQ3lrjOovecPE2HxdAwwj7xBxa0M3s7W4VyAYpucDKPC%2Bp8jHUDhIgKAZ4m3H7jiF38U3fGEpNixjMmmj9l3%2FeBaRQssJWIVQGPOu9refWeYBNcGAQ1NVDfKYErzz9NsAZD9I4dC095EOsZ6X4B08cgxj8%2BRA%2B5MPLNm8sGOqUB0Hxu%2BfzSBGAxSoy3LlOIPF%2F1SqS9COtELo9GjxEVQIWioh75%2BSaDJcAgRQdVinfQdqPBUTjWfojqKNhnut1ULXXCzbwxJ65aSyoIFO5sQrXTcvgCC67yZPy%2ByElhdO2pRmaRTa%2F8XEwVFQ3%2BJpErbumlx4WYAzxMcdUJQQgiS9KBTvgjOREdhLFSjT3lhImqXPdalfwtC2LzqvXxiuCCoN%2Bq8L1y&X-Amz-Signature=3e066ace3edbc8303460b8e78fb382be778247d50deb486aa284e850dc6364a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AFKNP2N%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC2G4EdmRDweFhaBNwvJgR5I9WmdOQ2p%2BJeZER2Uocj6gIhAIRLVy%2Bj66y2Md%2FHt4L%2FxI%2FSpFvG0bjkgAYGlICx8nAEKv8DCBIQABoMNjM3NDIzMTgzODA1Igw8XBEpKDnLw2JaYZoq3APdu0j7BWHNUcKGYKBufQN2yJqY6umcgpd268i7yy16mc0VjeUm7ORt5ho9%2Ft6MDuzgyqnu5LwrkYEWbVY8aXJLZnNhlY%2B%2Fd13FbHYT0A8L48RXplkClZsdlY2R8U56%2BGEWG7DvoscadrFYEAmfcpCGdVnOXTg%2BhxVlj5A0Nq4POZD%2FpJz7ptgLHVq4hCSNcBRRQcE5Tc4HgGWhPcNs%2Ft5cvFNgWE4N7NP2yBLkCCD68atnLGQkF9nhp4uH7KPQ8Ji6dNTMGYXSnDVhB5u4n3070aYRgDIx916zvk4Rt%2Bz17eKOQ%2BiC8CpIYHY5j7ASndkS3QtB8eQi1lt5liOdFVaxK4ps%2BruGsuEPV0zlGJT64OLqMl%2FHIYl8KRYPKQrixPMRHmzn87ymFGPyp5I4FF19plWMeoavOs2ibEGorfDXPgW1xARNJv2AztSoVRmzZooC6bQGKTeV3SRzEQ6r477rLZpMEa36gwzKUtzIDwGegU8R62bQT4nMPDRQe9Uf1HJhKIWquMoq76V8aQOOcJMLs3CyFxSyiFT1YJlt4BTBSL0HdJhZdh%2BVPczYcHxMZD3HUN%2F35eSEmsdpXIiFy0rD%2BH7e%2BuAGy8i3wq8NksilEkbWBtq0xTIKO6wRZTCRz5vLBjqkAclUb5858YIGHOR4mjxGE8XuDXp2TAtM7h0pASCd7Yx4N773h9eWNODC0BQ%2BYO6oM0Zi%2BIu1IGjkgyLytQuN9%2Ffe7gxOPBIevaz7%2FmJyMRt%2FUv2V2Gh5%2Bqmox08MxXjXshehcLurMv7H7s4Y1fGFKrAIC0%2B0ZQbVSo7tEVgMD7CNepMgc79%2Fo3nh2bs%2Ftbi3MNllMu0MNIi3xsRubPDAn2ELYcwp&X-Amz-Signature=bbaab524ec53db2cb854c4091adbe449760da00fa5dc037008a614e9be44d95e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

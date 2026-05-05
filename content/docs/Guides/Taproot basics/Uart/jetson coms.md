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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBX4HSFU%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2Blgtm0%2FHgH%2BpUSWjptgTZYv7BNt%2F%2F4LUetgpG%2FeJBIAiBfk2jJNoZjxKLYQFiZUSnqz5dNc4rTcTM2dynKJikt9Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMul%2FmNAbX4n2NST3HKtwDtLTf7awXfuIqLQSQWpJ9UowwVN1QgDNvO9vEPS0DD7XGOw%2BMVnsvWs5L%2BxOaXrM91r35kRwzXZUDEJ%2FUXuHW4FnHanf3i6SN87TU%2FPYJwbHnP5ehCj%2BPWbf5gbRm%2FpMi9fj8USbqx6B21AOACY9sXBXuZtVLDpRsu%2FIL0y45mfF1gHFmf8Q0imANH%2BHabX2Tpt2EuhCbXEbJA%2BCIzKqzTBQtoYv7MsMafl9w0MFbG8RQxRi%2BrdZkgQwMxf89%2FrhklpZe62eZ2P8prhMbR19FV9793r9ug7C7tm6OIlDbIq823X9lOWT7H7t9t2mmJIyd6MKoymOJ3dZBYn7wCY9AzIx13NqsGO3an7oqpm0cVn%2BZM6ANkmYZgW0EvlZJTCOE6yR1%2FGp86zmmSGGO2HExaLLNzZ32tNqDV4LSXM0LsiK0WqT6Kg0MX9MaOOEqFzf4qj66O50Ymu1srQrwjnuQe15pewk217xzrGQmBySjc0snAaM%2FWxBspsos6rJB0GU8dFnNNiCgqUcEK3k4uOYySuna0zCUYu50w8wLoNbmcJTVhAd%2FNFbr6e%2FCdcG06JzpmPIQJ6sIhqWSWxyTJFbYdb%2Bc51X%2FNWcqRDd17Xkcr6724Fr8rzYza5Vc3DQw%2BaXlzwY6pgEEfuf2%2BMCyctCZRGoHtgeXmDm2plams3xfIun%2BNJSDPpGjgLTu5NE1mmpdJiPlrr8VIlT9DWvtPVMB4JwdtGjW%2F8iM%2FlxxXKxdE%2FaFXXNuDKBhXZt%2FAi7AUBaeUXPeZRfMFjLOu5lB6afhahNF4z7F2RE9yvM6V9OoKtwuMhd1Zt93usKND3IXMfIsoYm4gRqPnN4kNb1cHhEagQp5gQPM3wN%2F9p0v&X-Amz-Signature=392552f757b814a6710454489ed48bca30b97fbb1103b6f8f38b31f9ec82cbed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ2TRE4H%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEF34mVGuG0D63x%2BANDOT3gA6VzikVojKHb0%2FcIBoeVQIgccLKJz2BG8Y7RvDBr4pdHSKCinjgrhlf85mqHyA8ojcq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJFxJ%2BdavvSxU8fsDSrcAxVfcUT76ubFlr0fYQq1uEDOGagFDAtCqNsl1bNlitBQkdVlF%2B9jW9BskpNPgILXHrIDlLnJ3VxVuEuzcE8vVKYO9%2B4R0veRZSk2tI7dgiwS82h3LbVaPc4leRgEkGDt24auN%2Fz6b7Dnz3qBu8oBe4zKEG%2FcIzRg3D%2FVfyMtHcqbac3VAK3FIrxokJHvL%2Fpjl0DgP3lJHYzbgcgrn3U59uoet19TzDMrrISKIAYFJVmLIy0M%2FO8BZw2x4FAwnOZY61WYPAJUFK%2BRPQ1WZEF1vMmQTHzNBPoU9kwbLKunOV3Y4yM0VIC8KP3YHxRugpC61ljOTQVaLt4rVJ52mjG5a7q7OFwFn0ileexnr1aGDNKoBTIwmfLdlPl2pzaxLPrnMtnzBmj3b8%2BONkdOIeopu58C8nYC4Xx3YhrArtBXFom6tFa%2FscAwxEc3LWK%2FkayqtE94lEN9eZvCRX%2Fcr%2B40aDUOiVVYBMEyq8qO5DwuyI0wD57Hh4XVknf8PNlewuwJf%2FKFMjYxaKfNwHE7vJa88cS%2ByRAixXENi3kQwdb0sGeCVXthk10OtoRD4rjm1sfEGY08Ehcz%2BsiC6oYEhAxlrSYQaoOJ4sRQNjzhaclTogBlnC%2FMeLMxoSN5da%2BOMIao5c8GOqUBaUnzFMG%2BxE69weSeXH%2Fil%2F9Z2EP%2Fc%2FH%2B4GWlkunLKZ1yqdEDT4U7q5SLcGc%2FfxcP%2FlAkAAjuERmnQzOtrg%2FJtrSlBKou1PWCRUWklGBO3PlgrRJWp5RWthXVOROlbxGmYwbrEGxmOLlZhp%2FHaVlcczV785yRPMbazKnSUwNZcyXsQdrYMHPELPHKA05kx%2FTGh1N%2BA0%2B4GPOudVZ1p2ED3rx7QDBC&X-Amz-Signature=e61c734d72c40135430a0485990e41b0f1640f8e0335afb3fb5ff2077f2b2c08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSWREABU%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGh2ntcK1RA5KnDleJxDtdZkRqErvGeHFEyWLq%2BOoOZYAiEA4LdXb0Ko%2F0E64e0GWBbp3%2F0qS4ED5BTYlEEDvSVvofcq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDP8%2Faggk%2FqYmYcdr0SrcAxBwgXY%2BnJ5bQtov33XaJNIMX2AD7n3uR5wPBO7A1TCY2yNRMQvq8zOG3243nAB%2FCMWlF77tsl35hw16KnOcgEzQjh7cvK34q1rW%2FIAqauz34IOz%2Fhb0U1xsj1ak7Fc3FEsRBedXGAOj%2FKxj4B%2FlClJ73rBEHT%2B5RxRgpyTbpXGL2bkdrgt0JG7iJqJpIhHEQYDlmG938ORAgW5j0%2BhStEa%2BMb79%2Bqnm22%2FjLrYvo82Qz9bupUvnSncNJY%2BKhs8DSC2XYmZYsrNm0GkuI8CiVZVRYqvmeTaTcltbqBbwT1l7zO%2FtaJLJng8CUMfjQn%2FtkqbpdY7NFf12olq0QND4nnvVMkw06r%2Fo0QH9VocdVy4Ubv9FMI9JDKbKrvY3fikGKb6sWMV2YbBodId3zWSMX98%2BIOGBbsHApcLXYmfCqz2oaKJygotZ1mqxfAKsT%2FjDShTvF6AXascot96FszV20PElbdYeCCRY8wuMc2Jk3w6EAU0%2BwbIgaQiy1NotGVjjQsg5fJltfgcBcprXlk2BJCnSxs7GzD2Kyp%2Bmf%2Bmn09mYrqGuGPBklP3S8yjYMvpZqbt6T64yXVxPdQgOsLuhAfpGAb5w67UhnBCXoMm9EMGpigibs8jxrqnEJ2a2MPel5c8GOqUBA5UzkP2NUqNgOBZhBBocOiyamwCTol4HnN7YUuZM7fCBbcgH1RpRP50RX4iAJawuXweqU%2FDtfuLU0n8SbRrSzUiKhRz1sELrokBJVJBvK6j%2F%2FntsmePkCufn0mQjDwT5WznVeKBzc2%2BPW2F%2B55rQxvV%2BJrSjfiPUha%2B3%2BnHo7CYqj5dtSdZAKs2eiTbblbGAkJ%2FRi%2BPf8DfPdb9I6pkS4zvShUnA&X-Amz-Signature=6401e867648f74706844c2d72e892144d4fc359b7fdf21f0ca96e68727084631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSWREABU%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGh2ntcK1RA5KnDleJxDtdZkRqErvGeHFEyWLq%2BOoOZYAiEA4LdXb0Ko%2F0E64e0GWBbp3%2F0qS4ED5BTYlEEDvSVvofcq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDP8%2Faggk%2FqYmYcdr0SrcAxBwgXY%2BnJ5bQtov33XaJNIMX2AD7n3uR5wPBO7A1TCY2yNRMQvq8zOG3243nAB%2FCMWlF77tsl35hw16KnOcgEzQjh7cvK34q1rW%2FIAqauz34IOz%2Fhb0U1xsj1ak7Fc3FEsRBedXGAOj%2FKxj4B%2FlClJ73rBEHT%2B5RxRgpyTbpXGL2bkdrgt0JG7iJqJpIhHEQYDlmG938ORAgW5j0%2BhStEa%2BMb79%2Bqnm22%2FjLrYvo82Qz9bupUvnSncNJY%2BKhs8DSC2XYmZYsrNm0GkuI8CiVZVRYqvmeTaTcltbqBbwT1l7zO%2FtaJLJng8CUMfjQn%2FtkqbpdY7NFf12olq0QND4nnvVMkw06r%2Fo0QH9VocdVy4Ubv9FMI9JDKbKrvY3fikGKb6sWMV2YbBodId3zWSMX98%2BIOGBbsHApcLXYmfCqz2oaKJygotZ1mqxfAKsT%2FjDShTvF6AXascot96FszV20PElbdYeCCRY8wuMc2Jk3w6EAU0%2BwbIgaQiy1NotGVjjQsg5fJltfgcBcprXlk2BJCnSxs7GzD2Kyp%2Bmf%2Bmn09mYrqGuGPBklP3S8yjYMvpZqbt6T64yXVxPdQgOsLuhAfpGAb5w67UhnBCXoMm9EMGpigibs8jxrqnEJ2a2MPel5c8GOqUBA5UzkP2NUqNgOBZhBBocOiyamwCTol4HnN7YUuZM7fCBbcgH1RpRP50RX4iAJawuXweqU%2FDtfuLU0n8SbRrSzUiKhRz1sELrokBJVJBvK6j%2F%2FntsmePkCufn0mQjDwT5WznVeKBzc2%2BPW2F%2B55rQxvV%2BJrSjfiPUha%2B3%2BnHo7CYqj5dtSdZAKs2eiTbblbGAkJ%2FRi%2BPf8DfPdb9I6pkS4zvShUnA&X-Amz-Signature=404d6a06bf8a21ea6500c169176e890fec9d9155bd8033325a1b043584c9eb87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ2TRE4H%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEF34mVGuG0D63x%2BANDOT3gA6VzikVojKHb0%2FcIBoeVQIgccLKJz2BG8Y7RvDBr4pdHSKCinjgrhlf85mqHyA8ojcq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJFxJ%2BdavvSxU8fsDSrcAxVfcUT76ubFlr0fYQq1uEDOGagFDAtCqNsl1bNlitBQkdVlF%2B9jW9BskpNPgILXHrIDlLnJ3VxVuEuzcE8vVKYO9%2B4R0veRZSk2tI7dgiwS82h3LbVaPc4leRgEkGDt24auN%2Fz6b7Dnz3qBu8oBe4zKEG%2FcIzRg3D%2FVfyMtHcqbac3VAK3FIrxokJHvL%2Fpjl0DgP3lJHYzbgcgrn3U59uoet19TzDMrrISKIAYFJVmLIy0M%2FO8BZw2x4FAwnOZY61WYPAJUFK%2BRPQ1WZEF1vMmQTHzNBPoU9kwbLKunOV3Y4yM0VIC8KP3YHxRugpC61ljOTQVaLt4rVJ52mjG5a7q7OFwFn0ileexnr1aGDNKoBTIwmfLdlPl2pzaxLPrnMtnzBmj3b8%2BONkdOIeopu58C8nYC4Xx3YhrArtBXFom6tFa%2FscAwxEc3LWK%2FkayqtE94lEN9eZvCRX%2Fcr%2B40aDUOiVVYBMEyq8qO5DwuyI0wD57Hh4XVknf8PNlewuwJf%2FKFMjYxaKfNwHE7vJa88cS%2ByRAixXENi3kQwdb0sGeCVXthk10OtoRD4rjm1sfEGY08Ehcz%2BsiC6oYEhAxlrSYQaoOJ4sRQNjzhaclTogBlnC%2FMeLMxoSN5da%2BOMIao5c8GOqUBaUnzFMG%2BxE69weSeXH%2Fil%2F9Z2EP%2Fc%2FH%2B4GWlkunLKZ1yqdEDT4U7q5SLcGc%2FfxcP%2FlAkAAjuERmnQzOtrg%2FJtrSlBKou1PWCRUWklGBO3PlgrRJWp5RWthXVOROlbxGmYwbrEGxmOLlZhp%2FHaVlcczV785yRPMbazKnSUwNZcyXsQdrYMHPELPHKA05kx%2FTGh1N%2BA0%2B4GPOudVZ1p2ED3rx7QDBC&X-Amz-Signature=d67b219fa1c6a8e7a030e958010a39c3ffbec61528ff462cd10f143d90c36f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ2TRE4H%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEF34mVGuG0D63x%2BANDOT3gA6VzikVojKHb0%2FcIBoeVQIgccLKJz2BG8Y7RvDBr4pdHSKCinjgrhlf85mqHyA8ojcq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJFxJ%2BdavvSxU8fsDSrcAxVfcUT76ubFlr0fYQq1uEDOGagFDAtCqNsl1bNlitBQkdVlF%2B9jW9BskpNPgILXHrIDlLnJ3VxVuEuzcE8vVKYO9%2B4R0veRZSk2tI7dgiwS82h3LbVaPc4leRgEkGDt24auN%2Fz6b7Dnz3qBu8oBe4zKEG%2FcIzRg3D%2FVfyMtHcqbac3VAK3FIrxokJHvL%2Fpjl0DgP3lJHYzbgcgrn3U59uoet19TzDMrrISKIAYFJVmLIy0M%2FO8BZw2x4FAwnOZY61WYPAJUFK%2BRPQ1WZEF1vMmQTHzNBPoU9kwbLKunOV3Y4yM0VIC8KP3YHxRugpC61ljOTQVaLt4rVJ52mjG5a7q7OFwFn0ileexnr1aGDNKoBTIwmfLdlPl2pzaxLPrnMtnzBmj3b8%2BONkdOIeopu58C8nYC4Xx3YhrArtBXFom6tFa%2FscAwxEc3LWK%2FkayqtE94lEN9eZvCRX%2Fcr%2B40aDUOiVVYBMEyq8qO5DwuyI0wD57Hh4XVknf8PNlewuwJf%2FKFMjYxaKfNwHE7vJa88cS%2ByRAixXENi3kQwdb0sGeCVXthk10OtoRD4rjm1sfEGY08Ehcz%2BsiC6oYEhAxlrSYQaoOJ4sRQNjzhaclTogBlnC%2FMeLMxoSN5da%2BOMIao5c8GOqUBaUnzFMG%2BxE69weSeXH%2Fil%2F9Z2EP%2Fc%2FH%2B4GWlkunLKZ1yqdEDT4U7q5SLcGc%2FfxcP%2FlAkAAjuERmnQzOtrg%2FJtrSlBKou1PWCRUWklGBO3PlgrRJWp5RWthXVOROlbxGmYwbrEGxmOLlZhp%2FHaVlcczV785yRPMbazKnSUwNZcyXsQdrYMHPELPHKA05kx%2FTGh1N%2BA0%2B4GPOudVZ1p2ED3rx7QDBC&X-Amz-Signature=4fd133c9371ee38f77368515d0c86f2f877972e1f8c2c0e925c43c76ab6d0431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG435BCV%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQTOAyG51jgmlbQ%2F3XXvPqWN7EbmLNYTZBDAcHC%2B9HzAiABS6LOJwRnq9cjX2TIJeNmhNy%2BlDdEBgm8G%2B8JnVr7oir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMRJUCbOef6cLnrv7WKtwDkmORxlPMyCohKNFTp2BCrjrVWink6von5NPBywOWzcWuvLLh4O%2BJRjiH4jguOnVJlvE80OAUcvrBgS5CY%2BJchNqMOxh4312qkYIjt%2FREGV3qwQiFikfzwGZftE4xiPqtXmaaYoYy6T4UMSNTvq6eZHTjdPLokF%2BdcIA6sTsWH6sUBZ%2BufurmzClalODjtxCL%2FCSdAssSsO80nkVZOlTCijcUj1sAx%2F7hbG%2FuY5qmJ8Xhx2UTDYGYPT%2FFLhpX46pZkoNsx3jBZwrvraQCeHeCQMFNts8ZpbVePQGxxVbLXwPFm%2B3USa3p8FZiXKVcvlbCTLzaPu476w4p2DX6Pjrd9FKJ7LV5o%2B8FF%2BmTR5kzAwkionwDJLmLnol1wi6lOMeDtTnCHzfOEns8TDmyxdMo%2FYJaBNJJeAMUKluzWrmKzU6SSB%2FopPXmbrYTFuOqKZR0f1SGdKB61WrHrTQv7nqC93LbBzZ4dBeuV7xgpP0vidZ6yCKkMBePUvFYU%2Bk1FOK%2Bg69NUjAez8MRbQ1GpLA92%2BFxKVG6m5%2F%2FRaBbnt2Ay%2F1XM%2FBzL4UBF8Xf3zshnDn0L%2BXg3DeWwKZK9mIf5VsMldzeRkJlZUVtWO4C8b1SAPKUNBsAb44zIgmYdYAwsaXlzwY6pgGbAMXUfkUc7gBQJqKkfgG%2BkgVRO7W%2BMjF7jiTQr8xar21H53%2FZR6zWZ%2B6CHkWq2GCxCn1XsRWc2g0BT6xJYlsTjpySZhDdh2DcyfYXLoOxKva%2FHipxBRRfWhGXmLH3LXXsiX9FbLdlR9pLAPZVJcygs7%2B03BDUXD9PVAxdbekw73MKvuQEf2C9OhKAmxsS7W6DFR2KKomwJkUt5pBD8TMXSVgwLERT&X-Amz-Signature=a9a947fe153e6ad11b5473a8f8ec0e4623195f1e342d8a09045ffbbd71d0dc08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

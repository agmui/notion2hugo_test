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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GCWOMKH%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIA3fsrtSRMAoXZ4dLxV%2Fa0cQUWyFF0mjJfrG4b%2Bxs3atAiEAnXgdiVCjq0baiEquULLxa%2BQj2L2np0O1K2eRuXugsAAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDAuMBKR54cu0gZzGQSrcA309SWN7Al6t0nBNOcttups%2FHFUOuhuFySvG1cUd%2F87vCafP0LR4NwCCgGD%2BIQMB6Px0DvbHdCBE%2FApB%2FQnlTcwoLqBEPCDvEF7rT3s4zFCjFOOSuLHm%2BpMPg7Fi7G8W1i0IhmbPN3mGu2CgT1uKNFEChuQBtEEhpOGziouBuHOLr8OzhVwnjCCUa7C3IgOW%2B%2Floq8K6ntvimh5mKwAh9vJfWgkx%2BwLvjWtXwrrDi3ZD1TbJUYB5uKO1EbhF2eUX3F4aql4x8B936pQYTRv4CxnFnpd4TEnBJobGfTNb4UkZjh26gIx7gGvy1vREH%2FWbKuam70EazzdWeMan1YX5%2Bz1dKZrynK%2BP2HbIVQarcQb4dXUI%2F3wUIyywWDwzL9WpeL0V9MKzKmWk4Fq2RFeIBVPE9Ws4k5%2FJ38hpwiFZ08fiUnRq%2FerEHCjj%2BAp7oeqEBzJfiL1SHb2FjHK%2FIf6LcHfuFOF%2FkaVX0kHmLFr37pnjdmSPqPbxOXSyR9wiXoSU5Td3FLs3C1i%2B3ykKn8l5XS5CL9zdAVYvKEMzkP%2FKMI0ir1Sp%2F4j0hKuN7fTvnrrlIdKG%2BgTeLEWwyQ2Fnl90zJ87I8%2FK7fDgkIIgPQrzQShr4ZdeSWFMD0afgffkMOjZg80GOqUB7U%2FheOKk%2B3nTuro41XZCC2wEZKGL9FslDLvqADrg20zK%2BA5o45MECaiZkScCWtu5HDiAQq4R3HAOd%2Bfe25%2BGyV7vuY7Lid0DPb7h3Yew5hJcxwcIwTqUHnMnMwZAIPQpXv3z7Pg3GVMb8ApJmx1MUOE0Q5EJyWjmRmLAcEPf0takRTvwyny1czsrwSlFWO%2FJnnlCYftWn4RLJlQeX5sKc1o4hqJQ&X-Amz-Signature=767e36b0b356e645ea4fda349d930268c2c0f87b4a9382bc44b71d518b9a364e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLXM3WI5%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDWQsWP8EsAHnQNLLO4vhFS4LQO3ks9YqMU58K5%2BJT3oAIgDsqvoUeohCnOZfr4UyfVq9c359JRAZWR6h0pdXV0U%2BAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDEx5JhDJkVVcxy0A%2FCrcA%2FOTJ0latSUg%2FAxbGpNuQbP2Wekf1j26HOcLt7NDeShjDEXQFPOKQs7dh1GE0q8wgXFSxNBD9A0YJPdZEBlOtAl%2FJPXFWd5GxNLdkFyNtqPCCg0vFF25mkbsSHZbZYFw%2FTKJsBVS5S%2FZWMBj3J%2BNBstmZAfGkHrDc0bYN%2BV8dehqEZD5LQAoVS4zxhyPcEEOUzAXdkh1K%2ByKhpDjvJ7Wjcj7Trhiaebt9xfXfSdIkpH%2BWC%2BJ%2FoJnA6gIv6qpBdhpwyNuLGKCt1UgZ8Qo%2BJMwF3fnZKgOt1WehgLUhv2k8au0SHSv8W67Mg8eu6ykHvHxawYPwLAfTkMOls4DjS%2FMacjDGrv9issqlD2wH1lHO6JdWJsTVnbjrP0%2F0wK0HdPq63DWNaRb3GSfauJpr3skaBsqfJ8cRHR5bb33ElYyDziAcHjDmhvITD4uHCfKH8DGJy6cBgdQFNx3K7E2HfOc%2BWGvZAxv7qyVdprAx5NsOSrK0xMBJn3QwzWRhi%2B%2BOt6kQMBuUlePoCxcvnDR6Rdq4WpXxlt%2FcFEKspdLIeyOxsQaOuqNC2e0UBd3ij80cjmMJKO%2FuUbAOrhPuQyOSA439ecDQfo1xUsMwjXX21CtGJ3JcNCllP%2F3vtSxbNVXMOfag80GOqUBkkvn1uRLP3yVc6maSBrBnTRVwONx7dzkSjvytQfVrlpl8dygmkStg3gUS4y0B2uf8hpsJ1sko58DNKYM%2FImxKjffkg2gWXB26NN8lMfXOjJCwsciofGtO2aGBB207KTnbD3Rssa9LO5Qg%2FtIb0y9HryEL2YM%2FZVedhzWb5c%2FqmW4EMsZy%2FY5ek6o6s9356YnMN%2Bvw%2BTBdylOgRXo7QDiIRxwo8vE&X-Amz-Signature=b4912d7f691743d6952a05e604d6fb9d014ccb671983fd26ef078bc375dae710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GZ3KC6B%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDNDjNvE5wn1pmYXXYR3F5UhTcqmbZI2jhMGSVPhQmzOgIhAK0MAuS5ZB%2BkXIRnuh8vM4svVU4WjOmCsRmPVpnNqhvBKv8DCDIQABoMNjM3NDIzMTgzODA1IgwsPNvlxZb3h90rihMq3ANYJKSDwmYwljz%2BIxoVqWkffdqXlYoU4mtUjlcmebOvgbNk2ORycmq28YMguIyHWmMVRwjoRBTvrpUb4ou8%2Be9D3M3HqhwP6XYtmTVu%2BEYfOUNuEp9nbG0vPG8f9tP82dL8Pz3%2BqxTXi35OdPvEkTJMmnSjEQ%2FFJ1LOt3b6SPwThQA%2Fw3uz27rCkS8NSiTVU1Qe0hBjgDJvLFSD9iFU67H4nlJkazC8jpq4R%2FxKV9ix5fPR5fmVb%2F0rks%2BJoqjse5yCcxFHyqpv%2FW3UdRaS%2FQbUgO0W8YpDXnZh%2FWL%2FIOnvyoaPO6EqywrE3bkBRU6Q5%2BOQUEmEIwPcmDMzFtCfFmfF%2FLKYS6y44YS%2BIM1hHs0YiR9Ju1MYUz79quOoaaAv2vogBBKKih741V%2FZfU7M4VQUcc98IsCAc1Ws5UnMiOpVqMjT%2Bel%2Bunn3pmyJxE8Cr20HAgz7OUhXCFFpNdxocpSht0BO24%2FWumbuogyLGTW6QopiRicPC7%2FrwoAl%2BnBdrDbd77mdVkFlKQmKcGdaYGJwxE0yqMXSKqd9TcEUwyXDgS3y2CAWUcqAcrwXTdngfkbUy2XBqaDwAmu6C7Vv0El1pArs3JqWRdD32NPDbk2aBNeh7R%2Fq6GnLxWN%2FBzCf2YPNBjqkAWIjdWdPw4i8OXYjf6KjR4tA%2FAfsb5XUNbICNga7pgiPm%2BymDyWptJvDH15mGkaJIBn0SBV4uGIeIDKETM0HrBgrSsaXnSGoHnNA09oiyfefrIsjGDHBH2o49HpGqR5QjfNBMJnj9xlLgN%2Fnr8o9dD%2BAKM0E%2BLQPKcYTPh%2BOhTgcQFQ8HhljS7E8tDYMrwa%2FVYLm8B%2Fy5wrk01KX%2Bw1xs2ye6LDS&X-Amz-Signature=ae9510968080467143cbf0c92a06850e1024468def077134c2483e40de7e3a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GZ3KC6B%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDNDjNvE5wn1pmYXXYR3F5UhTcqmbZI2jhMGSVPhQmzOgIhAK0MAuS5ZB%2BkXIRnuh8vM4svVU4WjOmCsRmPVpnNqhvBKv8DCDIQABoMNjM3NDIzMTgzODA1IgwsPNvlxZb3h90rihMq3ANYJKSDwmYwljz%2BIxoVqWkffdqXlYoU4mtUjlcmebOvgbNk2ORycmq28YMguIyHWmMVRwjoRBTvrpUb4ou8%2Be9D3M3HqhwP6XYtmTVu%2BEYfOUNuEp9nbG0vPG8f9tP82dL8Pz3%2BqxTXi35OdPvEkTJMmnSjEQ%2FFJ1LOt3b6SPwThQA%2Fw3uz27rCkS8NSiTVU1Qe0hBjgDJvLFSD9iFU67H4nlJkazC8jpq4R%2FxKV9ix5fPR5fmVb%2F0rks%2BJoqjse5yCcxFHyqpv%2FW3UdRaS%2FQbUgO0W8YpDXnZh%2FWL%2FIOnvyoaPO6EqywrE3bkBRU6Q5%2BOQUEmEIwPcmDMzFtCfFmfF%2FLKYS6y44YS%2BIM1hHs0YiR9Ju1MYUz79quOoaaAv2vogBBKKih741V%2FZfU7M4VQUcc98IsCAc1Ws5UnMiOpVqMjT%2Bel%2Bunn3pmyJxE8Cr20HAgz7OUhXCFFpNdxocpSht0BO24%2FWumbuogyLGTW6QopiRicPC7%2FrwoAl%2BnBdrDbd77mdVkFlKQmKcGdaYGJwxE0yqMXSKqd9TcEUwyXDgS3y2CAWUcqAcrwXTdngfkbUy2XBqaDwAmu6C7Vv0El1pArs3JqWRdD32NPDbk2aBNeh7R%2Fq6GnLxWN%2FBzCf2YPNBjqkAWIjdWdPw4i8OXYjf6KjR4tA%2FAfsb5XUNbICNga7pgiPm%2BymDyWptJvDH15mGkaJIBn0SBV4uGIeIDKETM0HrBgrSsaXnSGoHnNA09oiyfefrIsjGDHBH2o49HpGqR5QjfNBMJnj9xlLgN%2Fnr8o9dD%2BAKM0E%2BLQPKcYTPh%2BOhTgcQFQ8HhljS7E8tDYMrwa%2FVYLm8B%2Fy5wrk01KX%2Bw1xs2ye6LDS&X-Amz-Signature=1d2c715208c93cc3a8e2ff2aa7132df763ed0c3c9efdfef2aa93e4094362c15c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLXM3WI5%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDWQsWP8EsAHnQNLLO4vhFS4LQO3ks9YqMU58K5%2BJT3oAIgDsqvoUeohCnOZfr4UyfVq9c359JRAZWR6h0pdXV0U%2BAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDEx5JhDJkVVcxy0A%2FCrcA%2FOTJ0latSUg%2FAxbGpNuQbP2Wekf1j26HOcLt7NDeShjDEXQFPOKQs7dh1GE0q8wgXFSxNBD9A0YJPdZEBlOtAl%2FJPXFWd5GxNLdkFyNtqPCCg0vFF25mkbsSHZbZYFw%2FTKJsBVS5S%2FZWMBj3J%2BNBstmZAfGkHrDc0bYN%2BV8dehqEZD5LQAoVS4zxhyPcEEOUzAXdkh1K%2ByKhpDjvJ7Wjcj7Trhiaebt9xfXfSdIkpH%2BWC%2BJ%2FoJnA6gIv6qpBdhpwyNuLGKCt1UgZ8Qo%2BJMwF3fnZKgOt1WehgLUhv2k8au0SHSv8W67Mg8eu6ykHvHxawYPwLAfTkMOls4DjS%2FMacjDGrv9issqlD2wH1lHO6JdWJsTVnbjrP0%2F0wK0HdPq63DWNaRb3GSfauJpr3skaBsqfJ8cRHR5bb33ElYyDziAcHjDmhvITD4uHCfKH8DGJy6cBgdQFNx3K7E2HfOc%2BWGvZAxv7qyVdprAx5NsOSrK0xMBJn3QwzWRhi%2B%2BOt6kQMBuUlePoCxcvnDR6Rdq4WpXxlt%2FcFEKspdLIeyOxsQaOuqNC2e0UBd3ij80cjmMJKO%2FuUbAOrhPuQyOSA439ecDQfo1xUsMwjXX21CtGJ3JcNCllP%2F3vtSxbNVXMOfag80GOqUBkkvn1uRLP3yVc6maSBrBnTRVwONx7dzkSjvytQfVrlpl8dygmkStg3gUS4y0B2uf8hpsJ1sko58DNKYM%2FImxKjffkg2gWXB26NN8lMfXOjJCwsciofGtO2aGBB207KTnbD3Rssa9LO5Qg%2FtIb0y9HryEL2YM%2FZVedhzWb5c%2FqmW4EMsZy%2FY5ek6o6s9356YnMN%2Bvw%2BTBdylOgRXo7QDiIRxwo8vE&X-Amz-Signature=adffdf836159ac7516a2b404ef652046618bc82da192fc6588f5622b17fec4fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLXM3WI5%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDWQsWP8EsAHnQNLLO4vhFS4LQO3ks9YqMU58K5%2BJT3oAIgDsqvoUeohCnOZfr4UyfVq9c359JRAZWR6h0pdXV0U%2BAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDEx5JhDJkVVcxy0A%2FCrcA%2FOTJ0latSUg%2FAxbGpNuQbP2Wekf1j26HOcLt7NDeShjDEXQFPOKQs7dh1GE0q8wgXFSxNBD9A0YJPdZEBlOtAl%2FJPXFWd5GxNLdkFyNtqPCCg0vFF25mkbsSHZbZYFw%2FTKJsBVS5S%2FZWMBj3J%2BNBstmZAfGkHrDc0bYN%2BV8dehqEZD5LQAoVS4zxhyPcEEOUzAXdkh1K%2ByKhpDjvJ7Wjcj7Trhiaebt9xfXfSdIkpH%2BWC%2BJ%2FoJnA6gIv6qpBdhpwyNuLGKCt1UgZ8Qo%2BJMwF3fnZKgOt1WehgLUhv2k8au0SHSv8W67Mg8eu6ykHvHxawYPwLAfTkMOls4DjS%2FMacjDGrv9issqlD2wH1lHO6JdWJsTVnbjrP0%2F0wK0HdPq63DWNaRb3GSfauJpr3skaBsqfJ8cRHR5bb33ElYyDziAcHjDmhvITD4uHCfKH8DGJy6cBgdQFNx3K7E2HfOc%2BWGvZAxv7qyVdprAx5NsOSrK0xMBJn3QwzWRhi%2B%2BOt6kQMBuUlePoCxcvnDR6Rdq4WpXxlt%2FcFEKspdLIeyOxsQaOuqNC2e0UBd3ij80cjmMJKO%2FuUbAOrhPuQyOSA439ecDQfo1xUsMwjXX21CtGJ3JcNCllP%2F3vtSxbNVXMOfag80GOqUBkkvn1uRLP3yVc6maSBrBnTRVwONx7dzkSjvytQfVrlpl8dygmkStg3gUS4y0B2uf8hpsJ1sko58DNKYM%2FImxKjffkg2gWXB26NN8lMfXOjJCwsciofGtO2aGBB207KTnbD3Rssa9LO5Qg%2FtIb0y9HryEL2YM%2FZVedhzWb5c%2FqmW4EMsZy%2FY5ek6o6s9356YnMN%2Bvw%2BTBdylOgRXo7QDiIRxwo8vE&X-Amz-Signature=98a1b8c22a30d5c2177bdac98711fcc9b2d70ade4563f5442a52e44b8e1aa76a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMQ3BJND%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEDWbZVcD5HhXBQ1U7oWe%2BRGXQsiji3v9evgv9MuFEDWAiBjUVv0BqlQZaHOGP7nCHu8erVRp0t80QnQLXnWdebxSCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMao4dGMyHAjFRgxXwKtwDojNQo3elGjTmTU5FM0KIxQQbh4mX8EL3SyeZZ0BysbgTvI4m6g26D6wqzxXibPB8%2Brq0rd7sVMhyovnA71hcW3%2F1Vaxyew749XvHfFMav%2FJPTmir4MHE6SHtRiADDcYiikQY2DZ0Ci6rou9EW%2FgxrO2O3BV58lWISUTBjmRWq4mDNQPwX2yKzHh2KGdd4RcCrJQ%2FKsb1xf6r%2BkfG07x1yH7OCbdm1Qwl30nljMizsa2%2BIDJY%2FU8WX39pxeZC4O1hP9SN29r1NmAFLiOLrfmsvxvX4Aq0JHJYH6eDD2nsjtDegLoWnHu1Zw4%2B%2BBKphbmB3LebZxPGXK7F7WqnQBeJXIcBDAIgHAXbMLqX03En%2F85FzJbeSbV3y%2BGaCfhmJybAfLhbD1Zt6irBcHHGmSitL6URwGvsZI6SmhOcmrSuSJs5iwpDLR4rsTWnZybJx6GCZGqNunNdNssxjNCqhG%2F7eiiLDmGcRtHrgaTgwVnvPDaQo29yn%2Fb9w%2BG5lvwsWa5U6eqwO2xnFZTDzgrQJ8suwnR9P4o8wiuVBZW1X3MUNtGCN%2BJsqJe6B5NIUGw4XeZW2EfFcda2yScQFls8oLhWC94wn%2FkXu2FJWrAX%2Bw%2BHu1u1cgQ86QMS1o2mKzwwltmDzQY6pgE6uSrGbHiCZG1TLeI9iX5LF0b89WNtEvUGVPL%2FfyssWsGTy3yT6H3mIsw4TmTmGIIVNbMTCrZgTSkxkCKsB0CvdTnrjs5R3nVWCh%2FNA8MEZ2xf%2FVeB9I1Y8XSMhsdt5ZQChBJQpEfqMdlq%2BzcTOaw4RWhd%2FXJZ1gcDtCZLi%2BQUMyLm4scOpA1H97laOOPjDTFl%2Fi14%2FF2M5ETEbiHgbVLtWuItcCnh&X-Amz-Signature=9ef3fa8bba57dc3f8354c8a69ae28dcfffbb4edece78ae0d00f219041ff8f592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

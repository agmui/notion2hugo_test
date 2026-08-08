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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LZTPE4O%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ080J3l61JlDI1YbgG0UjOBlCKhWaGAQfGYRvMAQYuAIgQWDjXBKOKmBMXr4RTL67ikq0vP9nCazZY7jmr7AQRTEq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDF4ge5saC175OGto6yrcA0wGsHVb3nLu3Iqqvvl6jQZBhSyH2Kh0TnDjoPyxLlm4ZmA5DAKeiHeFZsd3Fj19RLY7alRb8xvc1G4EZ0B3DS8X5cWUWssH1NpDuwPRG%2BHlZ%2FsvHhMwUrPs%2FlZfZNpf1D%2BusRDRY3Dd%2BSgNOcCXyHq1dr7wFFgofPRhOsDx9N0ZuOM9rJM8AyzStcHrK17hd6jEEZyu0a2%2BjOhCW8Bpye2oJpIUf7AoHyYhMvRn9x5DS%2BzuJKYvowHJy%2BzwKBwjRSq8WMqk0byUH8w%2F7R0xAFtaAz3%2B8%2B2zZSCO4WQk8Ez0%2FjbHL5WhP5vLWT8vVasJUy1CWEPkNxjNGVVqGW802%2FZ4wg2TwG4WnrMj9TMtS2TWHj0syoUXnKHDoYgLFFfhMFdELHaKHSRXDjP7trce2grypankbYLIsc4Nt7M1lNUVoWN2mX5fsR2Dc9imscEu6TskKlhhriqV5BdvDhhWQ1UhcAu8MWDGNBHARkzK3gYzpWBByxFkVuu%2B%2FJxPsARPqgw9OSMO9uV9aD2Euxl08R1EcghVRc6qZ85d2ZhDuhZ29Ymf3h3bnO1DxaYIhuUvTsaFeJAL%2BH50qLXQDmml%2FKASbYK%2FP1rxJjxnnZNA9mPnFoP3AcTRzcHC5OLFMOrv2dMGOqUBh%2BrQZsTl5CMPG%2B0OcribgZMYl4AoKD%2FFzoesfiVBHOYRV2ic6y4uqpAOxqPbBRPi%2BFMUbDjStE8P8kxyhrDVpsfbBqirvquAiO0XEWcOQiqqgHuf%2FqH6IC%2BCtRkMGctTKGRADaVI5LH67q7pu3dnb4Ionl2wYYksOmWb1e7PicBSki9aUy07zfGFkyJyUUWhhmcVn%2BbmIRy0qj81tsCYeIVy6dIa&X-Amz-Signature=9e6587d29149f22deb9985faaa7502f165249483eda01478bb79106224cd8964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSGHDFT%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkP%2FMEwF2YCXx4uFZ95KfxgIU%2FrqvJsR8Xg4NvEnCphAiEAz7sSKmWEEBG8qc4EwsqkPrxvKEzFEsdolf%2FLlFfrwJYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDGRCpd%2BbsLAR6sfxRSrcA3aJuK6TmZNEeGamNOWJ2%2FP4Ln%2FJHVA3vK%2FclFZeUJjPylLmWv6sHGI47CGbwgrKb4N4ILpjLGxR%2F9gC5dkzkh9xBVeDgZIkHu1ZBT3NKED%2FddEAWTMQSrF2GgOIZS7E8mOzDWL8zbptU%2F6BcSWLUYtnPfQDPS%2F1DALIA7auau3EIqvkAg6czebIn%2F5D6py88c0AZxuGw9gqZ3RlRNYxrfzPz88OCwU9n0Fw9vyHriwxD8M8%2BZkorEevxrNIQ7t0EGf0iKs9sF0wZUbTk2AgUQ8tg1W%2Bfw03G2pmsej%2FJyIyPdjDMiME0DtDlK8wZm769Wbfmk7XzBO2sGgBv627MQfYgwZECJ9hRi%2BHCweN2eOz0TrxOev4bKHeZKUDMGWoUZFUHslkgGRNlkmAISyLQySY27nSCFhZbY%2BKDuTuRL%2B17p32mHHESXyfBh3kWDyFvLuh3hCxkQpkRLfxx5%2B56nsbW6e9NasvD%2F%2FzCfv1yzyKyRw9G5wP6q17nKcKHZbta5YfEr%2F9zXv0J37cUilfqd%2F%2Fvs4U6Lq2fMDmfrAn4WUw8UFx16lmIh0%2BW%2BTdB1xlJxro7L4p6hDTDaxNWnYRw%2FZ29SYoCjvMz2TiW3BM4YVsjXVnvKYJS5wsCdZuMN7s2dMGOqUBH2fLGMNYcUAMlhUbO7LUDZ8XXvWS%2BDx0iyunZdaBpHP%2BbEFXPpdXOCgBha4N1pWdrWN2NXLhG%2ByLcAIgp1p7q0B4WIhhT8Buyucow53DDflQJUgYsve9c6dIsvzAEoq4ejd%2FoWdvYVPyTSstZb3FlFrXkBN1Y4veKmHJhof%2FX9JvOS3lo6iqDFNWx95QgW1dDV6bBmDA8YzSDW6%2BNlPyOVcRdzNo&X-Amz-Signature=fe4544329909a21faace86ee3bb317afad11627c93697c8beca7d28fd9436248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMRCARTB%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT1LjIL3q5hQcwHfdk2dpuAvzHtZ89oQRQIUqtMkLz6gIhAKiS%2BZbUnqF2tQrf2cfOFHVF3245LHwkk1R%2BaeIT7ew1Kv8DCGIQABoMNjM3NDIzMTgzODA1Igw7wj5yfT9krS3dx%2Bsq3AOw15vUgKvDPp6fQmTUlwgWgI5Gk8rbQndKxqqmvoFym%2FKos1q2V8%2FgNMioHohcXH9bFNoh5GVjqOvaVxsBw%2FK9wz6EYOTATWZpERUzg5Z8SYXslyRh8q%2BItw8ofBSSxvVveFQw8YXQAsfpUHF2K337OchiU8RVy2o%2BcnaSaC2tfIfG9EUTyR2LzvdFptDHgOO3fJn0Gsi3Kbk%2B8IfRF6VSDqzcag01hjGBPSNDqa8ct7rYEKSoeCMXviHASnmOUMwIpvOQypuZ7lNa8SYj8zB3RSfHOSTSYpneSQPxnSRgbqHq5lGsZZR46CeRaLMnB48Zw%2FxRbVDwMNbr6N83bpNRpsmAvP3J9V63oVvYaJRI2J295LKGq6Hz2XQ78V6GAmpwI58qPwsbS3RZgPpvjcY%2FYZMTnrv9F%2F9xoPjlY74NFO9Kfi75ab9IH71MDgPj9t2htoskqtQ8miV50cjb62ey4Jt1EXNqBkVRILkHbSEJV%2B6mA%2FCy4xPX3QLlPnhhoCr0qAnwDYTOa2hwypnoDjTFGPtVcqfVksU8sPL185vNRSFsUJ13%2BDVkaog%2B6IgH5fmbCKCLkFiY8Zuou33x%2FKK2R1qSa8ICPlPcBfbReM0J%2BjGMh0A9IoPawxdt6DD97tnTBjqkAefOAN20mXq2u9dIw8G0kaZty8e1JsI7FifgR%2F1UcUtyKoReu0JefWzcglbBs3ghu5MqgGADJ5yvfn8qvhqLIb%2FZoznwlvP9fRLbBA%2FHCJCYmS8%2BOD0hgE5BaE5LyF%2BtdKt89Ut2epm%2FxLADkhGPF3ZFFdOgfoCmRSOzWQB9niqb%2BFn3cQ18jUJ4WvW7hN87DJErXI1SdRVlh3UP%2F7sIW80RxmkM&X-Amz-Signature=f36b323e867d568d34793336d2b8b394e898acd9403243338c016d828d39dfbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMRCARTB%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT1LjIL3q5hQcwHfdk2dpuAvzHtZ89oQRQIUqtMkLz6gIhAKiS%2BZbUnqF2tQrf2cfOFHVF3245LHwkk1R%2BaeIT7ew1Kv8DCGIQABoMNjM3NDIzMTgzODA1Igw7wj5yfT9krS3dx%2Bsq3AOw15vUgKvDPp6fQmTUlwgWgI5Gk8rbQndKxqqmvoFym%2FKos1q2V8%2FgNMioHohcXH9bFNoh5GVjqOvaVxsBw%2FK9wz6EYOTATWZpERUzg5Z8SYXslyRh8q%2BItw8ofBSSxvVveFQw8YXQAsfpUHF2K337OchiU8RVy2o%2BcnaSaC2tfIfG9EUTyR2LzvdFptDHgOO3fJn0Gsi3Kbk%2B8IfRF6VSDqzcag01hjGBPSNDqa8ct7rYEKSoeCMXviHASnmOUMwIpvOQypuZ7lNa8SYj8zB3RSfHOSTSYpneSQPxnSRgbqHq5lGsZZR46CeRaLMnB48Zw%2FxRbVDwMNbr6N83bpNRpsmAvP3J9V63oVvYaJRI2J295LKGq6Hz2XQ78V6GAmpwI58qPwsbS3RZgPpvjcY%2FYZMTnrv9F%2F9xoPjlY74NFO9Kfi75ab9IH71MDgPj9t2htoskqtQ8miV50cjb62ey4Jt1EXNqBkVRILkHbSEJV%2B6mA%2FCy4xPX3QLlPnhhoCr0qAnwDYTOa2hwypnoDjTFGPtVcqfVksU8sPL185vNRSFsUJ13%2BDVkaog%2B6IgH5fmbCKCLkFiY8Zuou33x%2FKK2R1qSa8ICPlPcBfbReM0J%2BjGMh0A9IoPawxdt6DD97tnTBjqkAefOAN20mXq2u9dIw8G0kaZty8e1JsI7FifgR%2F1UcUtyKoReu0JefWzcglbBs3ghu5MqgGADJ5yvfn8qvhqLIb%2FZoznwlvP9fRLbBA%2FHCJCYmS8%2BOD0hgE5BaE5LyF%2BtdKt89Ut2epm%2FxLADkhGPF3ZFFdOgfoCmRSOzWQB9niqb%2BFn3cQ18jUJ4WvW7hN87DJErXI1SdRVlh3UP%2F7sIW80RxmkM&X-Amz-Signature=22f0b36a41222dc169f82958469b29ebac5a2249f3a008ea2ddd920e0c27b01f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSGHDFT%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkP%2FMEwF2YCXx4uFZ95KfxgIU%2FrqvJsR8Xg4NvEnCphAiEAz7sSKmWEEBG8qc4EwsqkPrxvKEzFEsdolf%2FLlFfrwJYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDGRCpd%2BbsLAR6sfxRSrcA3aJuK6TmZNEeGamNOWJ2%2FP4Ln%2FJHVA3vK%2FclFZeUJjPylLmWv6sHGI47CGbwgrKb4N4ILpjLGxR%2F9gC5dkzkh9xBVeDgZIkHu1ZBT3NKED%2FddEAWTMQSrF2GgOIZS7E8mOzDWL8zbptU%2F6BcSWLUYtnPfQDPS%2F1DALIA7auau3EIqvkAg6czebIn%2F5D6py88c0AZxuGw9gqZ3RlRNYxrfzPz88OCwU9n0Fw9vyHriwxD8M8%2BZkorEevxrNIQ7t0EGf0iKs9sF0wZUbTk2AgUQ8tg1W%2Bfw03G2pmsej%2FJyIyPdjDMiME0DtDlK8wZm769Wbfmk7XzBO2sGgBv627MQfYgwZECJ9hRi%2BHCweN2eOz0TrxOev4bKHeZKUDMGWoUZFUHslkgGRNlkmAISyLQySY27nSCFhZbY%2BKDuTuRL%2B17p32mHHESXyfBh3kWDyFvLuh3hCxkQpkRLfxx5%2B56nsbW6e9NasvD%2F%2FzCfv1yzyKyRw9G5wP6q17nKcKHZbta5YfEr%2F9zXv0J37cUilfqd%2F%2Fvs4U6Lq2fMDmfrAn4WUw8UFx16lmIh0%2BW%2BTdB1xlJxro7L4p6hDTDaxNWnYRw%2FZ29SYoCjvMz2TiW3BM4YVsjXVnvKYJS5wsCdZuMN7s2dMGOqUBH2fLGMNYcUAMlhUbO7LUDZ8XXvWS%2BDx0iyunZdaBpHP%2BbEFXPpdXOCgBha4N1pWdrWN2NXLhG%2ByLcAIgp1p7q0B4WIhhT8Buyucow53DDflQJUgYsve9c6dIsvzAEoq4ejd%2FoWdvYVPyTSstZb3FlFrXkBN1Y4veKmHJhof%2FX9JvOS3lo6iqDFNWx95QgW1dDV6bBmDA8YzSDW6%2BNlPyOVcRdzNo&X-Amz-Signature=9f057ce2cce7800c043e405b1543fd12f8aaa8ab4a10a1ec7f8c8b8e108f7823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSGHDFT%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkP%2FMEwF2YCXx4uFZ95KfxgIU%2FrqvJsR8Xg4NvEnCphAiEAz7sSKmWEEBG8qc4EwsqkPrxvKEzFEsdolf%2FLlFfrwJYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDGRCpd%2BbsLAR6sfxRSrcA3aJuK6TmZNEeGamNOWJ2%2FP4Ln%2FJHVA3vK%2FclFZeUJjPylLmWv6sHGI47CGbwgrKb4N4ILpjLGxR%2F9gC5dkzkh9xBVeDgZIkHu1ZBT3NKED%2FddEAWTMQSrF2GgOIZS7E8mOzDWL8zbptU%2F6BcSWLUYtnPfQDPS%2F1DALIA7auau3EIqvkAg6czebIn%2F5D6py88c0AZxuGw9gqZ3RlRNYxrfzPz88OCwU9n0Fw9vyHriwxD8M8%2BZkorEevxrNIQ7t0EGf0iKs9sF0wZUbTk2AgUQ8tg1W%2Bfw03G2pmsej%2FJyIyPdjDMiME0DtDlK8wZm769Wbfmk7XzBO2sGgBv627MQfYgwZECJ9hRi%2BHCweN2eOz0TrxOev4bKHeZKUDMGWoUZFUHslkgGRNlkmAISyLQySY27nSCFhZbY%2BKDuTuRL%2B17p32mHHESXyfBh3kWDyFvLuh3hCxkQpkRLfxx5%2B56nsbW6e9NasvD%2F%2FzCfv1yzyKyRw9G5wP6q17nKcKHZbta5YfEr%2F9zXv0J37cUilfqd%2F%2Fvs4U6Lq2fMDmfrAn4WUw8UFx16lmIh0%2BW%2BTdB1xlJxro7L4p6hDTDaxNWnYRw%2FZ29SYoCjvMz2TiW3BM4YVsjXVnvKYJS5wsCdZuMN7s2dMGOqUBH2fLGMNYcUAMlhUbO7LUDZ8XXvWS%2BDx0iyunZdaBpHP%2BbEFXPpdXOCgBha4N1pWdrWN2NXLhG%2ByLcAIgp1p7q0B4WIhhT8Buyucow53DDflQJUgYsve9c6dIsvzAEoq4ejd%2FoWdvYVPyTSstZb3FlFrXkBN1Y4veKmHJhof%2FX9JvOS3lo6iqDFNWx95QgW1dDV6bBmDA8YzSDW6%2BNlPyOVcRdzNo&X-Amz-Signature=48cec89362caa1e351ad3130342bf0d2120419feee5d426f5f289d0e3182f908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEZ3OOS%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzC6GfAThJIuCnwjyibSMqYkLXVw3m54aTV2FDCtGmgAiEAp%2BQP588CXgCI3X5cfY8d6wNoyKcIBRxWW9dUI4%2BrBtYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDB39IojNZQFjVzLaWSrcAzlwDZDM8uykXCtpwU%2Fk%2BKjzYTZ2qcIJY6EPx%2Bu9urYGl9rjlusBSoJ7XwuaEHepXKe4pdXp%2FwLBlUHuLUosK4Gwts3pYlU8cUw%2B1IcG5T4OsTweU2PiWHcbq9atj3%2Faw0WugliMczbf9oAcLltEVj6%2F%2FRdSIHKVTNk4O6eM56Z8Pg3WzcLwZVwOzG%2FeKdL8F8cRLsT%2BCf7VaupmQ4lGiC5fg09p9Sy9suqAR4RfuwGSE0lMhyZlMEa5FF25pY4XiFJk%2B%2FhG1FMHSOM2cb%2BKNfDkaRYeujccNXQPUHv0gabrxchwfbmTZAdVt04aD6M8smR5AUivsz5d6P8qC3JHDcjyzzRyFgRiTeAh5eRFwT7D6DmzSKnxksU5473CmV1N8Q9DGrlMuwKDA208bI7p6x%2BYcDv1X2gU6X5Wn1ScMzCIkcBc3kpUNhJpRP8Fv0RCJnBIThkms3YDuoJQCZNHXUiMOuDHE7cmrtxxeXFKhBi3sBQsunApjy6g7mxrGH%2FsqPHHfubGqaDSh%2BldQxr6FC09dLFT13eTIJPK6%2Bi2Rrr2Weq7NeeHPfKLX%2F4WCw7ca3Tqnb9dF9Rpw7RkwKaMpk91Wp47ogfFQaBFMXctdTA7aa%2B%2Bsccw0R4ZaX3vMIXw2dMGOqUBG%2F6sy6gmjB1S%2F83Mtn%2FhNYDVkDPaMpBa%2BmKXVnivpCjHWR%2FAFt7shoOviQ8DJz5Ajtl6KIUS%2FsDlNvq0kwr1AHuu7QhhyhBmxSE0IeMPul7ye1dtM9A4%2F4lUcHyqJ3bR5SNzLIaxhLN9Ky1v6%2FRVdywtSpciNWbcnY4%2FZo6O3XAkmGgqTGRaRtvSu%2Bk393GliWMBtL2nuBHiXHd2G7PdRdlfcP6K&X-Amz-Signature=147673bd7ea63427b27bda021fcd7fd4606c5aa2386209c9c95e1ac968e033cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

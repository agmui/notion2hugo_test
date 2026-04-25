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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3HSEKA%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEZ7%2BPKxbVsYTuZWHMnA1wWSOeVGnIARq70Fti5qIAoAiBON3rinYfBDckBhcaN0wjRnh74deF%2F0BYubcaIUFA2iyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTHhuLeFYxoAhdddbKtwD2QT8hKvqs7PweQkvRwRQ9yaWHLwi6zZZ1TEbxOqLycK%2BtF1SlXhzaVQUA8mCc9%2B8N08F2TDZ4qE5zKUSJ2yrB9ZuwLwjoAvM17sltO9GzwV8r2jONVbz%2BxJNNao8QyQ9Fb2AdBjgGM2NxNmMeZtQUUASvHrDGzMfJWnhzLrVZk%2BVxnSww0jn2bt2gGxeiNM7jx2nl9dF%2F7%2Ftj6qoEACGdsiK0E2ZnmPNpanEcOUoJK4Pqi4NG6H49Yilkl3j%2BEgOIGK0PgX1ZkOR4xRLtX12UqWsoMst4JTluD92ueVAySgfr4T48gDk9K1YA6ii0VFvWp15Cq8OO%2Bzh0UmEtgpWGISe1YgNqeVZ3xmUKFcU2mgPyVkby6XYgaGL%2B5etAe3FIpuR3NE1vqlNk97C00oyB2%2FA0EuCC8LsCCfS3eyMHhad7hp5%2Fng7ok6MfhoIvVw3EhN4KpGE8Ba1p1x7CUljE4VfrOh4Ch02AkhBNkoWAHaXQTYbPSYvcpvAfCQZm1i9C9A%2F9Mt4P9FK5vD%2Bh2dz%2FJiS6rZ8Q05GKf2zre%2FGssKZncgzAohlAe6zFRBHVJLTJWHEAFPzycclstgEGTegk0TbMOxp6uQ2NZ5EyPMCPNTpwP%2BCp%2FuQqERorIMwp7qwzwY6pgEZ8Z2SVIQHtGF5OBezqv1N5ChbIMMVkLMcW%2Fqbe4fzhz834Oxg%2BVFOD3TTU635IiSeg%2FsUwqo6kkWcnP0KqUAtg50NV2T3M4mmTMrM2%2FuvIQqp346ZXzlOncXgcmGHw9ZEQBOUj4Qf7N67kaAl81Y0vvA3OCOr27w2%2FdbPXRvrwDDJCBYdJqtnuIIbGVPTLwf%2BG6IjOxaqgs%2BGgbmft%2BT6f8rtyB8e&X-Amz-Signature=507bab5ab6b0047ea67cb8e06dcfc31cf7f37daa5947d287c236299e19b2466d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXCBFUSD%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwuCXIOBqKgGCoXZy4Smlg6%2BXlXljBKla%2BlGXA%2FzUxaAIgZK5wOKKKz9cyKjKljwvRXdnk4pOpQ9GSahtbe7y3s7QqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAiiIZ8Yx8rVZixQyrcA9tZIBCGJVGnc1OZs%2FJNsg8lVEgG3kZe7ZIG0BUp6XIscMCAPb0JeRA2Bd8xh3%2FWddqex7ijbLx%2FfbfIZ%2FAnkdeeVNBwEtR3Sxe87WOOLIrcuk0mv%2BwxtCqWktblv%2FNQy4TTo5oshcTXmPxjIEfqi3dHdZC00VeUX2PQ%2FVo0%2FY2%2Bj2znYiNy6TaG7oYZsg%2BZWeeKSloxBs%2BG2fOwq%2BNPu5%2F4VPnlbRoGuNp%2B0J%2FIWGryKWPbx9rY11leF%2BjKPun4psj91I6cAv6LY3MQk4HA9OtcbqNWhs1WufcLFhD3L9bRk8dquniK4eiIKAtxAGVy1uOvIF%2Byv5IcG%2FtOf5MO58k1CV8FCC6KJOMHOXp9Q4L4jHo1TwjmTeGmBaKOGgc1pm%2BibbPLqlnbwnKiQFvmwO6ixg28LeL6%2F07XO9x20YdsCdxh5hXxzPUdjpwy%2B%2BiutLDiXa1XufVAh5GMXOxpNn4QpgR7A736b112KJAbFjr%2Fkc%2By1koSbVsPBL6v2oN1pOcUm1s4aQPiA8BGPC30QXvXUGbHZG5dsDqZKIwtuXlHK5AHYYlzWjhtEx1uv2rKTfz0iqq7jOLUgu7HSSN3xmp%2B1CtKOTHKodOkHNHyiQqR%2BqzDyeWKdOS%2BQ9yVMNK4sM8GOqUBkOuVL483t%2BaMkQznFPUWrVHyBS9%2FS2PCPB%2FU%2BqgPTne5K8cRGFtb7xysQuPwBLC5y3orVX27BC1KweITnQHS5Hz%2FgNae9om0Tqz6REABvmTvIhg8mOVMpvHPTRdzS4smv9K5cmeox2Cjsahx7nwpSVKMkr6fgK7%2Fy5NLt9K6I5snPf2RGssXkC1c56SQ0iHpNDavBFheQHcmPrnnAv0uZbPtWVjc&X-Amz-Signature=119c49e47a9f7b0261fc639c9033ad444392f4f5c265916411f8779ff90b04c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN3BCMY3%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5mJ4KEtzRwN4AFc85%2FRacIa%2FxebV8FiCA5jqLWn9HAiASUBhlyjm8QR7kOoHq1ujeZX%2BjdtpfhP9U%2FyXRIecy0CqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BLjnietedWt6Uy3WKtwDf8VWngdlYXF7l%2FxiRu9%2BdcW4bUr2lih8CNniPNrLA5tY%2Bu5wCHQ659Ib5eor6sR2Uzizq88rhciwX%2BOPXzwxl7KMBNLnnxPPULrjzc5l%2F4Z4KYvFTzScM2O2Pg%2FFpCFCdjPMwHBY%2BZpkmA7hj1weCtMeSIMHBZ3P4aILSCC1EvTwsyRwblEyhFD0EoFytGo5TmlA8usNThohkYdQZBmU6n4Xz8ENdsLilbGvzAoati6fLg01bdkPuWzPoGQEg0jebZ4qvWCZdtvQW06Xl9rGHwUGh1d8phoba93WABPrpEE09sp%2BV4K%2FwE3Rg9zJsIaHUANrAGLeHnwYJe6psbeQlzv4qj2Bw3ggm%2FkWPm4dW1nKEzhhXm1IrYqfuyKT9aPiekaPC08Zc%2BtkbKmuq9NN87R785HZXWliyGc2zrkP3qT%2F46fYImlvP1K%2BwQm9953UW95cCVfAZr1O85TJa9eKCurBrNKkn1Y2ddqJBtXy5rQ69HPTKDwYf7O182zHsjQwbEBHfKnz6O6PIc6FMVPXwSiwfcA1iAzW0kwg8hSb8llUomnJ5pZ7pnV3ptQenF0Go9gxWjDViCG6V%2FghaBdf2RuWjD7gA1cEhMm8XVjA5OW5LrfxfIg8rhVHB50wjbmwzwY6pgFqePkc2eO9CT4tK8aJQha50j84WZLSFrHbXQehwkgX%2FWVqXfKe0vkPmrfCDQ3IE2tn8TOHW3FtyZ3%2BtYkT0Uclp6noYsgl0r9KvRn9mu1iFMUGzcOeP63fQTAAg9z2m62h8H91llHZJ%2BONLRbwYOXrq%2B%2BIKtkFmesndOCLlS4PKkxrREK3%2Bz82MXyWwCR3pEvhxQha1g2M2tRVNgfH9WhvpnNbMtaO&X-Amz-Signature=76fed8e12a807aca778dc70091207dfb0de61f2b2b0b47de132d973e795b64bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN3BCMY3%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5mJ4KEtzRwN4AFc85%2FRacIa%2FxebV8FiCA5jqLWn9HAiASUBhlyjm8QR7kOoHq1ujeZX%2BjdtpfhP9U%2FyXRIecy0CqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BLjnietedWt6Uy3WKtwDf8VWngdlYXF7l%2FxiRu9%2BdcW4bUr2lih8CNniPNrLA5tY%2Bu5wCHQ659Ib5eor6sR2Uzizq88rhciwX%2BOPXzwxl7KMBNLnnxPPULrjzc5l%2F4Z4KYvFTzScM2O2Pg%2FFpCFCdjPMwHBY%2BZpkmA7hj1weCtMeSIMHBZ3P4aILSCC1EvTwsyRwblEyhFD0EoFytGo5TmlA8usNThohkYdQZBmU6n4Xz8ENdsLilbGvzAoati6fLg01bdkPuWzPoGQEg0jebZ4qvWCZdtvQW06Xl9rGHwUGh1d8phoba93WABPrpEE09sp%2BV4K%2FwE3Rg9zJsIaHUANrAGLeHnwYJe6psbeQlzv4qj2Bw3ggm%2FkWPm4dW1nKEzhhXm1IrYqfuyKT9aPiekaPC08Zc%2BtkbKmuq9NN87R785HZXWliyGc2zrkP3qT%2F46fYImlvP1K%2BwQm9953UW95cCVfAZr1O85TJa9eKCurBrNKkn1Y2ddqJBtXy5rQ69HPTKDwYf7O182zHsjQwbEBHfKnz6O6PIc6FMVPXwSiwfcA1iAzW0kwg8hSb8llUomnJ5pZ7pnV3ptQenF0Go9gxWjDViCG6V%2FghaBdf2RuWjD7gA1cEhMm8XVjA5OW5LrfxfIg8rhVHB50wjbmwzwY6pgFqePkc2eO9CT4tK8aJQha50j84WZLSFrHbXQehwkgX%2FWVqXfKe0vkPmrfCDQ3IE2tn8TOHW3FtyZ3%2BtYkT0Uclp6noYsgl0r9KvRn9mu1iFMUGzcOeP63fQTAAg9z2m62h8H91llHZJ%2BONLRbwYOXrq%2B%2BIKtkFmesndOCLlS4PKkxrREK3%2Bz82MXyWwCR3pEvhxQha1g2M2tRVNgfH9WhvpnNbMtaO&X-Amz-Signature=4843abc90f1046c1a646127ec536cb8e4098336bdc76fbc0df56e0de617814b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXCBFUSD%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwuCXIOBqKgGCoXZy4Smlg6%2BXlXljBKla%2BlGXA%2FzUxaAIgZK5wOKKKz9cyKjKljwvRXdnk4pOpQ9GSahtbe7y3s7QqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAiiIZ8Yx8rVZixQyrcA9tZIBCGJVGnc1OZs%2FJNsg8lVEgG3kZe7ZIG0BUp6XIscMCAPb0JeRA2Bd8xh3%2FWddqex7ijbLx%2FfbfIZ%2FAnkdeeVNBwEtR3Sxe87WOOLIrcuk0mv%2BwxtCqWktblv%2FNQy4TTo5oshcTXmPxjIEfqi3dHdZC00VeUX2PQ%2FVo0%2FY2%2Bj2znYiNy6TaG7oYZsg%2BZWeeKSloxBs%2BG2fOwq%2BNPu5%2F4VPnlbRoGuNp%2B0J%2FIWGryKWPbx9rY11leF%2BjKPun4psj91I6cAv6LY3MQk4HA9OtcbqNWhs1WufcLFhD3L9bRk8dquniK4eiIKAtxAGVy1uOvIF%2Byv5IcG%2FtOf5MO58k1CV8FCC6KJOMHOXp9Q4L4jHo1TwjmTeGmBaKOGgc1pm%2BibbPLqlnbwnKiQFvmwO6ixg28LeL6%2F07XO9x20YdsCdxh5hXxzPUdjpwy%2B%2BiutLDiXa1XufVAh5GMXOxpNn4QpgR7A736b112KJAbFjr%2Fkc%2By1koSbVsPBL6v2oN1pOcUm1s4aQPiA8BGPC30QXvXUGbHZG5dsDqZKIwtuXlHK5AHYYlzWjhtEx1uv2rKTfz0iqq7jOLUgu7HSSN3xmp%2B1CtKOTHKodOkHNHyiQqR%2BqzDyeWKdOS%2BQ9yVMNK4sM8GOqUBkOuVL483t%2BaMkQznFPUWrVHyBS9%2FS2PCPB%2FU%2BqgPTne5K8cRGFtb7xysQuPwBLC5y3orVX27BC1KweITnQHS5Hz%2FgNae9om0Tqz6REABvmTvIhg8mOVMpvHPTRdzS4smv9K5cmeox2Cjsahx7nwpSVKMkr6fgK7%2Fy5NLt9K6I5snPf2RGssXkC1c56SQ0iHpNDavBFheQHcmPrnnAv0uZbPtWVjc&X-Amz-Signature=30f98079b229575dde1d7d130ddb671cdbdea077f3188170c5c8597b71cec7c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXCBFUSD%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwuCXIOBqKgGCoXZy4Smlg6%2BXlXljBKla%2BlGXA%2FzUxaAIgZK5wOKKKz9cyKjKljwvRXdnk4pOpQ9GSahtbe7y3s7QqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAiiIZ8Yx8rVZixQyrcA9tZIBCGJVGnc1OZs%2FJNsg8lVEgG3kZe7ZIG0BUp6XIscMCAPb0JeRA2Bd8xh3%2FWddqex7ijbLx%2FfbfIZ%2FAnkdeeVNBwEtR3Sxe87WOOLIrcuk0mv%2BwxtCqWktblv%2FNQy4TTo5oshcTXmPxjIEfqi3dHdZC00VeUX2PQ%2FVo0%2FY2%2Bj2znYiNy6TaG7oYZsg%2BZWeeKSloxBs%2BG2fOwq%2BNPu5%2F4VPnlbRoGuNp%2B0J%2FIWGryKWPbx9rY11leF%2BjKPun4psj91I6cAv6LY3MQk4HA9OtcbqNWhs1WufcLFhD3L9bRk8dquniK4eiIKAtxAGVy1uOvIF%2Byv5IcG%2FtOf5MO58k1CV8FCC6KJOMHOXp9Q4L4jHo1TwjmTeGmBaKOGgc1pm%2BibbPLqlnbwnKiQFvmwO6ixg28LeL6%2F07XO9x20YdsCdxh5hXxzPUdjpwy%2B%2BiutLDiXa1XufVAh5GMXOxpNn4QpgR7A736b112KJAbFjr%2Fkc%2By1koSbVsPBL6v2oN1pOcUm1s4aQPiA8BGPC30QXvXUGbHZG5dsDqZKIwtuXlHK5AHYYlzWjhtEx1uv2rKTfz0iqq7jOLUgu7HSSN3xmp%2B1CtKOTHKodOkHNHyiQqR%2BqzDyeWKdOS%2BQ9yVMNK4sM8GOqUBkOuVL483t%2BaMkQznFPUWrVHyBS9%2FS2PCPB%2FU%2BqgPTne5K8cRGFtb7xysQuPwBLC5y3orVX27BC1KweITnQHS5Hz%2FgNae9om0Tqz6REABvmTvIhg8mOVMpvHPTRdzS4smv9K5cmeox2Cjsahx7nwpSVKMkr6fgK7%2Fy5NLt9K6I5snPf2RGssXkC1c56SQ0iHpNDavBFheQHcmPrnnAv0uZbPtWVjc&X-Amz-Signature=2d75ab9a2e507721cda2d18d95fd25d10b5f00288183bf718526c3c5ca9a68f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVVI6GJF%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F7fWP%2BuYNCTFDzoKjNrgDLDzqPAk5ICBYOqNKXys6yAiA3ady2AjROWvCq%2FnGWxI9YgGJQaJiTws7ONYd0MOgsByqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B6jUAO6b2%2BLk%2Fyf8KtwDsCEXSi84cP8BSiNHGl%2BuZuyXiRySi1z7Dg5n4lWZ44lIFAFokazTqo%2F4Ki5HpWo92NBiPPXHGR8JAtuRblwBaVc%2BA0mUcaiGd9I%2FqZitntWGcDNrNkePGum6pGafmIjcBunfQqi2%2BhArFZdXBjxsARprHJiLeYlKaUXgR2CUsXcpeZs%2F6ku4d3JWitNnvlb4I73iUfgsLiFwNSML84p2RqkEcnzPeiRbIWNFv9nINTMLZAAi2KrsOWv6oTAkOBecMaVCgKE%2F62CDzbRxNIBkKlciRgS9ErNZGkimpQssjOcyhuQRpmkms2WmlW7hHGby9RQPVqd1kAbfXZZD7QYg6dVSyJUZp7XlUPTPHxlvYwddY0i3iUN2mH52lapwrbyiYprVVjOR%2BMWEGqAI89AL9GwQVpiQcc5piwxCxxBTct2%2FPlcp7oFdItKZxnxTV4UjyfHsPqBniyqKBcFcG9qucxZDaPMnplyvwOmwKlfgyKkf69bsITsudQnDDaYHwq6wu5GQv6JWo%2F7pt7ghPmmdfVK%2F63sM5zTo%2BAIcEPEZKV%2B7cRUbniBzNnU9bApoNS9CvYSa1pe%2BWwHbOkcRjVRWtwcxSWbUDaGuOIyquTLqYMB0GqpJeKpcEtZqRcsw07iwzwY6pgG1c%2BqbKouiDIhCbtQdhUlxZbag8JS24uOjS9F2LZZUunPjpRm7MlqOUtEl%2BM0uIm5wM7eROxsFKSyxgUIjVPjaf%2BjzGxfCocoAuj0eF4%2F5oAab6MwDDSKe3pwOM4EZTopJMIk1psoN9ldGxoVhG%2F1I6GDLlU8Om26BcrrCiCVbH3iaADWAMi0uD6kdBzoJVw1Rs%2B2X%2FoMM5N5GA4Vda3a3uC8BOkTl&X-Amz-Signature=853662c79c593e6cb8c3b0a4b436461586c08e57d07f00e1d8d6b50f528831d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

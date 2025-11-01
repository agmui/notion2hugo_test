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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KIFSAIY%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQC%2F3jPUrgT4ocE55GP%2Bs9t145dKUL7KNwxbAkaLS6pDgwIgEtPPLODuOGzgzk5QcORkzmNYKQ%2F%2FWVT%2BFRw6G8jIiBUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDIQtZLuLc58hzH6IgircA8qM4xZgCC1czomF%2FpskiK0Iwrumies%2F557HoE9V9qFzu7zqkSQesH7yl2pLAyZ33f2Lt00tba4EPQvJjADKT9yXdIK5OaDhWYuwztcDH5QK3qOJJ3wV9WK%2BU5Jmw%2FAA46Styy3c6UTknoyI%2B1cW7NWjh%2FL9LGmJ%2Fco6HSru5f1v%2Fo47FlmCiUlxbO6w8OoGAZT5awRb9sPEX9Qh7Zsnbum4%2BPu6NqcIeIVY7LBzOwR%2FOPLsGArTZYgZoO0n4oXMVtsazyF2AdvpQVHqN3xq0iYbJV4YHEa3xp3oGhyLFWKYqj%2B1b3T90rgXnnkdpVQcVCT%2Fr%2BwgEElZb7pViHWZrdeQW4adiKXA1qgCkZr9Vhx7nyx1WhD%2BeZTL%2B8XsQ5vMWUfb0NDXb9dTOtvSO3fIG%2BJ6HFI6fNKKYe6gozKAKHe0X4zBpyFI3nn8MaNQK4N33DR2%2FI36H%2F3JMRTg13SvpArTf8eO3OzOssC2fSVIYuP9rqeRYkscniCJyhVT1ScCaBYQFQ4oGFLtKcThn7Tc23C%2BUfFThX67%2BVK8d68aD3DCwGqLZtYGzFVU7Qg9d1mePi%2FN%2BL3h7cwOfRg%2FKXvqqkeKUV2pRuSrwnZPSi9Wy%2FP8Z3uzqoMud%2B9lIujaMMT6lMgGOqUBARfT8irCVKkJMyg%2B4kDX22Dy6KLrRd%2BtOyVoVrZVmv0l6su%2FhTJ5C5X78e11QQkK%2FjKPT8x7vyiLtuum23kNwTvaehEW96Nf3BpUSJMHZjZXl1N56aZg9IUIoq%2F4jCSManwR85BHrXcj5VLWfyBtOKkFWqFKgzaSJXNqeBu7jQcVF76hLMdhxWrVF0vUq2S2ucBsJW%2BWx9nFN0%2FS%2FJi%2Fxaet4U4W&X-Amz-Signature=3735cd7c32ea30e3a731eec2f9de9ed350041e00d040a79b1117908979322394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ5OCFP4%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD1O3UML%2BH7%2B1ZI8xWWTNy4m5AHLu%2B1v8sKTzqUrFZuowIgKeBVHW1HEJMTAQ1P0NPGAvXwYvX7grpxCShNBzHnCasq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMHvncjmxRHPZl0rVyrcA%2Fq%2BV59kcsE%2BXO4TBXO8JzuKUUZNlpF3SKLhEgFEViw5DCeE40UhI%2F8zU%2Fqt6Sc1mDJxh82g14M6pmcicl%2F1tMamvX0BHTXh%2FZ0ZHEnGVgHDv9%2Bcwciu0kq1wvjvI8n%2BLcd2OmMEzsizlUvnl4UxV1R1lO7Vr0IxH0q8VuU5VyG5ZAiw4W007aeAxALVNEtS6uxyAtpgdU6o2yLTVNUoWUAaWrN%2BaxMNcIa1JwFBLBNyQ%2FOxbipT2xL0ef4FQ9zDcKHF3z1kpbOOwvnINDiWj9QO5XeOWQim4a7Q8jh6MF6pMo2%2BhACBXifl0i8agXZdfNWehx%2FHE4w5u%2BnQ9%2B0QEoM47sJap4KD8ynP8yFmVKU4Src5BJW%2BOdZtaXJSQ7sSKkoSJLsTClWBZ1s2NFGuj0CI708ueszEHv2iUGtiFRn7A%2F48z%2BdS%2FjoMtz8gzn%2B6hzgwavLgQLD9py0fUfVPmDmalN7zihis1MJQga2KxRbIDDfUokN4eJ0gZXPEhUuu%2FeZ%2BwhaP9TbVJz7YehGN%2FWOupc%2FRGQ%2FJbmmRyV8wKzKPOYaGixIxuJBN%2BpcvBAcLPcDCykelwv5IhDdtn5MpvfeYeWw4Nc9ILCmRF9zJV%2BJk0nEKk7XCBihQoLmbMKT6lMgGOqUBACiVHOY4502iGftPgqo0FIGOhuFPOay2aXyH1WiQXkQFRoq91D8E7VVOFa7dN6qr8X9wLsonrpr89qEMZPz6WoLUuqAcZYpxdYsqYdKEvRiubitG910TB6feZ17IrT2EKxoP%2FMrM2OkkBikLBDXFAJnvNlPxPyImhTMPREMc0tkxF17wYzDAqJv%2Fux7AFzzTvNidmJf7fZ16Butms5CcpIMapL9z&X-Amz-Signature=76d188810f4fe9c7f88d3bdfa1ecc8823fb192a660eb864112513f602381decb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF5WXRJ7%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDNq4IHPTxiO4ONKrD6WimqoQ%2B5jqNE4Ndqll%2BTMO15sAIhAPLDF43UgQ3qXF3WX%2FGxcLWLbHsOFRipYzsxQQwIm1BLKv8DCCAQABoMNjM3NDIzMTgzODA1IgwUnDtsqLZ%2FSUK203oq3AOyX6BXbw%2B%2B2zcpYQwV5HlYBr8SgPSZM39He5jAjbw6jWUG5ihCgJGz4RB676fwOU3Dz0DgfWCxv3KjxX6TRUbRv8Pj4U18%2BG657uTxI9dnCtTtqHau3yFzzBrbt0ajQ%2FD4Jmdk9MzkDF7qMyMRyFLMJqiC0wnsHsvoWx%2FDj0D5UC16cTQh1JAaQ9Ejpkk0%2BztWgwHicMLgRop4TH%2BKLCR2Jb3USwssWV7RdZBVaCGFTZq6IKAKreglSYqjqx6FOuIngVfUt%2FQqRV9DP1c%2BsvaDgoniE2r8NNeTcPMVUs2noP%2BT36%2B6l4DCJLJuQbaks37u%2F9wN2lF5qqhqHwW%2BH6KKHkCt1HI2NGiJL9CMYqjsS0B%2B30tfjidXer5fJM4PO2GDCClBXnveZTUE7M%2FmQ%2BCfNfe74b1chYZ8bD7vbMMKnZtRN32s4o4b1eTHEFS9rspV8%2BJHWbU3XG%2BcY7HdiYrMQTp3jHL%2FIPZKV8hQvcUuo4eQxsvS2xIpjRpyjIs%2BdHJrEnAH9XoZfG0MAH%2BmzTmIq%2BVTBoOV9v8admmDKHIBvgvv3GPpjZbO05SXp0Iwij%2FWmRYAOOuSMrOG%2FAAYFDN2q46MiuCM5EnkYlsA78KdFTN9cNbBHDEP%2FHuMHjDX%2BpTIBjqkAWAyyHmMZq0J%2BUd063rHh58v%2FwuCrbJCQyEVDfjvIeycrzpWe0nNs2O50de0EopGiIZEM6zeDfxq%2FulRBtM6fOPAAgxvWRLYTANwSjHumWfieDZftFTu7jECNiK2tvnJ9LiolO9lX4rCCVyx5aiArezkOBBJeMK%2BVPxQmbpDunXaTebIPkZT8sCtv28WCGDWo8BJydWXW6rr98IapiPFtkAjqWwj&X-Amz-Signature=d623cc58aac746af315037124c6cc7b033568e4a36c78a6d9bdcc7d383d204d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF5WXRJ7%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDNq4IHPTxiO4ONKrD6WimqoQ%2B5jqNE4Ndqll%2BTMO15sAIhAPLDF43UgQ3qXF3WX%2FGxcLWLbHsOFRipYzsxQQwIm1BLKv8DCCAQABoMNjM3NDIzMTgzODA1IgwUnDtsqLZ%2FSUK203oq3AOyX6BXbw%2B%2B2zcpYQwV5HlYBr8SgPSZM39He5jAjbw6jWUG5ihCgJGz4RB676fwOU3Dz0DgfWCxv3KjxX6TRUbRv8Pj4U18%2BG657uTxI9dnCtTtqHau3yFzzBrbt0ajQ%2FD4Jmdk9MzkDF7qMyMRyFLMJqiC0wnsHsvoWx%2FDj0D5UC16cTQh1JAaQ9Ejpkk0%2BztWgwHicMLgRop4TH%2BKLCR2Jb3USwssWV7RdZBVaCGFTZq6IKAKreglSYqjqx6FOuIngVfUt%2FQqRV9DP1c%2BsvaDgoniE2r8NNeTcPMVUs2noP%2BT36%2B6l4DCJLJuQbaks37u%2F9wN2lF5qqhqHwW%2BH6KKHkCt1HI2NGiJL9CMYqjsS0B%2B30tfjidXer5fJM4PO2GDCClBXnveZTUE7M%2FmQ%2BCfNfe74b1chYZ8bD7vbMMKnZtRN32s4o4b1eTHEFS9rspV8%2BJHWbU3XG%2BcY7HdiYrMQTp3jHL%2FIPZKV8hQvcUuo4eQxsvS2xIpjRpyjIs%2BdHJrEnAH9XoZfG0MAH%2BmzTmIq%2BVTBoOV9v8admmDKHIBvgvv3GPpjZbO05SXp0Iwij%2FWmRYAOOuSMrOG%2FAAYFDN2q46MiuCM5EnkYlsA78KdFTN9cNbBHDEP%2FHuMHjDX%2BpTIBjqkAWAyyHmMZq0J%2BUd063rHh58v%2FwuCrbJCQyEVDfjvIeycrzpWe0nNs2O50de0EopGiIZEM6zeDfxq%2FulRBtM6fOPAAgxvWRLYTANwSjHumWfieDZftFTu7jECNiK2tvnJ9LiolO9lX4rCCVyx5aiArezkOBBJeMK%2BVPxQmbpDunXaTebIPkZT8sCtv28WCGDWo8BJydWXW6rr98IapiPFtkAjqWwj&X-Amz-Signature=ff238d1b3d379118599ae6987da364add79b38106ce9e1e683a57cb072575d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ5OCFP4%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD1O3UML%2BH7%2B1ZI8xWWTNy4m5AHLu%2B1v8sKTzqUrFZuowIgKeBVHW1HEJMTAQ1P0NPGAvXwYvX7grpxCShNBzHnCasq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMHvncjmxRHPZl0rVyrcA%2Fq%2BV59kcsE%2BXO4TBXO8JzuKUUZNlpF3SKLhEgFEViw5DCeE40UhI%2F8zU%2Fqt6Sc1mDJxh82g14M6pmcicl%2F1tMamvX0BHTXh%2FZ0ZHEnGVgHDv9%2Bcwciu0kq1wvjvI8n%2BLcd2OmMEzsizlUvnl4UxV1R1lO7Vr0IxH0q8VuU5VyG5ZAiw4W007aeAxALVNEtS6uxyAtpgdU6o2yLTVNUoWUAaWrN%2BaxMNcIa1JwFBLBNyQ%2FOxbipT2xL0ef4FQ9zDcKHF3z1kpbOOwvnINDiWj9QO5XeOWQim4a7Q8jh6MF6pMo2%2BhACBXifl0i8agXZdfNWehx%2FHE4w5u%2BnQ9%2B0QEoM47sJap4KD8ynP8yFmVKU4Src5BJW%2BOdZtaXJSQ7sSKkoSJLsTClWBZ1s2NFGuj0CI708ueszEHv2iUGtiFRn7A%2F48z%2BdS%2FjoMtz8gzn%2B6hzgwavLgQLD9py0fUfVPmDmalN7zihis1MJQga2KxRbIDDfUokN4eJ0gZXPEhUuu%2FeZ%2BwhaP9TbVJz7YehGN%2FWOupc%2FRGQ%2FJbmmRyV8wKzKPOYaGixIxuJBN%2BpcvBAcLPcDCykelwv5IhDdtn5MpvfeYeWw4Nc9ILCmRF9zJV%2BJk0nEKk7XCBihQoLmbMKT6lMgGOqUBACiVHOY4502iGftPgqo0FIGOhuFPOay2aXyH1WiQXkQFRoq91D8E7VVOFa7dN6qr8X9wLsonrpr89qEMZPz6WoLUuqAcZYpxdYsqYdKEvRiubitG910TB6feZ17IrT2EKxoP%2FMrM2OkkBikLBDXFAJnvNlPxPyImhTMPREMc0tkxF17wYzDAqJv%2Fux7AFzzTvNidmJf7fZ16Butms5CcpIMapL9z&X-Amz-Signature=a81853ea06cb76e8d7c107af6466ec840109dd1f7470acf22c00aa2b1459662e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ5OCFP4%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD1O3UML%2BH7%2B1ZI8xWWTNy4m5AHLu%2B1v8sKTzqUrFZuowIgKeBVHW1HEJMTAQ1P0NPGAvXwYvX7grpxCShNBzHnCasq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMHvncjmxRHPZl0rVyrcA%2Fq%2BV59kcsE%2BXO4TBXO8JzuKUUZNlpF3SKLhEgFEViw5DCeE40UhI%2F8zU%2Fqt6Sc1mDJxh82g14M6pmcicl%2F1tMamvX0BHTXh%2FZ0ZHEnGVgHDv9%2Bcwciu0kq1wvjvI8n%2BLcd2OmMEzsizlUvnl4UxV1R1lO7Vr0IxH0q8VuU5VyG5ZAiw4W007aeAxALVNEtS6uxyAtpgdU6o2yLTVNUoWUAaWrN%2BaxMNcIa1JwFBLBNyQ%2FOxbipT2xL0ef4FQ9zDcKHF3z1kpbOOwvnINDiWj9QO5XeOWQim4a7Q8jh6MF6pMo2%2BhACBXifl0i8agXZdfNWehx%2FHE4w5u%2BnQ9%2B0QEoM47sJap4KD8ynP8yFmVKU4Src5BJW%2BOdZtaXJSQ7sSKkoSJLsTClWBZ1s2NFGuj0CI708ueszEHv2iUGtiFRn7A%2F48z%2BdS%2FjoMtz8gzn%2B6hzgwavLgQLD9py0fUfVPmDmalN7zihis1MJQga2KxRbIDDfUokN4eJ0gZXPEhUuu%2FeZ%2BwhaP9TbVJz7YehGN%2FWOupc%2FRGQ%2FJbmmRyV8wKzKPOYaGixIxuJBN%2BpcvBAcLPcDCykelwv5IhDdtn5MpvfeYeWw4Nc9ILCmRF9zJV%2BJk0nEKk7XCBihQoLmbMKT6lMgGOqUBACiVHOY4502iGftPgqo0FIGOhuFPOay2aXyH1WiQXkQFRoq91D8E7VVOFa7dN6qr8X9wLsonrpr89qEMZPz6WoLUuqAcZYpxdYsqYdKEvRiubitG910TB6feZ17IrT2EKxoP%2FMrM2OkkBikLBDXFAJnvNlPxPyImhTMPREMc0tkxF17wYzDAqJv%2Fux7AFzzTvNidmJf7fZ16Butms5CcpIMapL9z&X-Amz-Signature=6c1bd398b45104a159a887044e795cfd43432485f86482b1a2e0d9b457b69b96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TW7GCHE%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIG0wrElQTcxHOfq0qL3ZsBBJ10%2B7S%2B8Q%2FjqrqZgP0%2BNqAiEAgCioXMHiuuRZGk0qIs35jHtDdeQGO8cepqSQqk4nIOUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDP8SOgmRzEDtDYKOdyrcAwmB5frFnMDhRDW7PL0cWcdvoyu4gyturnSMS5D8CCVuheBCdZowap%2BJRI2Bh0q%2BPAi8EVZ4wcgVa6HwmJaCZJG5dOlwHv9xnQHkVkSoo9enbZn90FizbK0mq6jtt6IDP7KBc07M%2Fk9Q8Z0iS6ow%2BJE1cAV1OfYoWt8er7rD9uTMsY08ioDJAjIUwWoN01EeIU%2FnexOlBcPWzvwI6kf4ccl%2BvXlrg7UGgi48oi959EiWPa39H%2F6YAzfDmGBbkszKnHkFkiC7Axlw8Fku0LF3nI2HDBE3HNjTBC4JuXyIv4G30v3fRnHNxdOwFBDR6kbo5NtQcetLsvhWMnosk%2FJvRApKXphN7FL9E2voftexo2AQerRHIly%2FCieV72mw7TsVnQRflMT0cirSH2JITPja%2BqbH5jxYu%2BvlIZSTZqHvqHZB1dk%2BEgTv6elEFeFbdDU5ufPFZ2F%2BDNnyJV%2BvYsTXgy5aC7gLDno5Kon3cdtCOX7bWacH8KVyC3R0fUxzOWO364N%2FJJjx%2BdtzVaWNtnSzNVlalYNLJ1mZWyeXWIjs1wQ5byv4XK2fDB2q2Mcbjh2P8yYMvIUJy3OeAis1wLT5cS0mbQyVXRof6MBpV1TxxvBiF3xkeIOjwoiaoEljMNj6lMgGOqUBctU0dJHyJSjzlFpY3Q3UZ4d1XbhMx0PZOsOARRc6%2FvD8CsS1Qb31ZIPvgwyNVH2IMNzE68n5Dv%2BndSr22xh%2BBIVvVhCq00OYuGC9PJKOpEyZERS4%2FIzmBulqiF8%2F3Z43eBZJ%2FoWpZiixL4SgLQJvgDKmMy7ONiVXYuma4oZPy7J38xss6uQmMfdcsr5IvjtfoRd7G5sTzfrs5EUhZYrij5xiLTNu&X-Amz-Signature=60fd71435215676de0defbbb67725435a955e311fb012293a2bbba47ec837567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

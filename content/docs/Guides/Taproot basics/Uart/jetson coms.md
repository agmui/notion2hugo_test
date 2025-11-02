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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WG3Z3WW%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD%2Fk0crC6VAh7vW67e5tqNxLtG%2F6GRzCY2janNSzUEm7wIgf5qa7Amu8MvjaAc5iBctb%2BAdLSjkYTT%2F%2By6BZgvm9JMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOaVhMXGmxNEtLgu9CrcA56cPEQLPtj0HRo0FuuYDoDt0f3G6VLxOpRRI7%2B4yVv68eho23N%2F4xkn9P%2FbiMYTuoW2xwRUq0kVz%2FG8KA9RFPqQaVx6ZO9zdvMK3M7DwO7w%2BTbcAGKasHDBKRFiqFkgHjBJmt%2BweUWdnNy7P004ERds1RpelRlHU4F7LNYpkkztDzZSlgqGI8mT9dXkLxALjRJmBkVQwWUq7q4fVpk9NCzbBBhhp%2B8Q94TdhmMTD6BqXjTR400v39nwCjKLFIkJWq%2Foemuct8pxAYDZQ5UOgTKSmtWNVt5FdvhO7zTMaRkZfTyczpteujQdu2U9BPGAXoCOjQZDTprb5JdfY2ClhIZEn9jB9s9MSBbMUE5IU5WM6k%2B3CbAuNRNiNV27U%2FQe4I2eDajqSTnpkt%2BIPzgEwNYI10xY5BhVRdst0gnRPTdv0j31aSlPxmnJ2EmTFYeV3IdHr1Ut%2BvUlaHBU3GKLf83bNMo2p6Ehy%2BT0kKElXm6d8UcroITeH%2Bt7c1ca9btg2FdlUp5F5UB8xc46c4%2F0o5q5rsrZ3tqBRDG4d1ssJV%2BFtxfgwWXKIgrLiq%2BB2X1YZg61bYKFHaOYg9viYKfoy3UEgBD%2FKgcP4V0%2F2N9gk7%2BkYpqzm0l8CzmxHSbGMNTomsgGOqUBTHQUn2pn7m1axnCHz2eKCK5T4OJP1TtYwca9IsGqgSI7kt77FiLvA0omWTMjSk9bMYarP7I1AOXINmeJCGg4S2V6h2y1Vm8WhkJui5qechrHHol20NTDVluCRkF3ovXbaBygxPi1XEMx%2B7bpd%2FZlA1ExEwI%2BeHKUXO3PAXokOlCx6vVLZXe%2FQk1uEg526jqxzZCKAfDu5MRNOLglOGti1uwzMg7b&X-Amz-Signature=c76e94fcf90028cb72193bdef90b3b955c27db29d6faf33e709ef9bbae998c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUMSXRQ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHYuhFuwJoIiy7u2m%2BE1SK5NLqv%2BDGucAs87FKycAyxxAiAgbTL2Lp8Uaz4vPl8zxrshGBGraNZ%2FF4CwDhWCHiwpLSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMt%2FNJJ2f4lWM1bHGXKtwDAWyR8oD%2BOi%2FpU6KfkD2jDfO8FJN2NEE9NkxvDBcVek%2FQBPwlOBjuh496kPdkIML%2FUPULVOzmmf0fKD8gJGtgB7oYlcNJWe5y03XJgLw5ovkCjNxTukiBVkteer8HBXydksYTV%2Fq2OtuHKgwKLKCkVO%2FqcT3J6TB4oUY7pEn%2F8Vk3nkup4EnvuJ7ZVkGf%2FS8%2FULicMtTa24TdxxkeEOp0Q%2FIJKX3aaacwUV4jFqHKEq6lRHyvCnXFaTqhGdIy3dg7gWZsVdlgvkBq3vfqsVwo5FWsBZKNIQr%2BsB45RJvfAzLEjmOl7HkHjKzyQFiLWo3l%2B64u6WYh7kjUitJqfNtQ%2F98X0lXGLTrDIuq2VR7QjdOpMqRsycITDgMJnZ054IAXenn4R5n%2BZZO5yl5WmVD4iR8d2NjJA1%2BNr8WewI5BUN0fUfwEFAm1xy4eAZR771ltTzJSZn%2F1c2NoRptidzBr2THGQrmUimBW6FzLjQzaUW%2FcHFPtRjd%2BKVAwzDgc8Yf8nwBDbk%2F8NeAEGGNalabFyqtgKrhAuw41%2FAHhvYuFxHUNnOiPQYf2IlkSAZKZ5q6Xl8QxUQjELfC9amXST0VYhiaHn2Cau5kOQajbcTW%2Ff63Dm9CgPeFTunY5eIMwueeayAY6pgEC0VUxsaG0mCWQbX8Z7Lrqzphv3xgtG%2F2DT%2FuwLeeDyqDKUK1DU8nVHmoatP6t4%2BAYIQyJAFfmLo6k%2FAmQNkBy%2BWQsCUjPjRyQNCiS2pSWbZLBkezZf5yWX6cA3FwWvlyN%2FbFZAPYjFjgHLh6gdiYjohZVkJfebVnXer6OKFM5ff9R%2FMnnCjtafv9pQ3k7fWOTtWkry2rUjMcefkPbtv%2FnkTcIUfDp&X-Amz-Signature=c54fff487c129ed53ea52e770c2e162271715a335982ffc03015e91083191eb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663YSUWPW%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCCLrT6vxj8RmmhqSFZ0Csmo5GKWbDrw7GSjeR5mo23HwIhAOzUDME8OVpenKUs0Xz1LPyjS7F2hEJ8%2BjGqUrC%2BMcIIKv8DCDsQABoMNjM3NDIzMTgzODA1Igxj4pPyWu3jZuLXtb0q3AP1%2FYC4LFFddpL06%2FdRdT7E6yjIqkeJiToFTICw1D92gj3sAVmhm4BNbpTpo37FiGl%2Bb6GTlok2yq1SxjyR20ym78fbXrVgwVl8y45iqGdsVi3vfxPOip7Y82Z5RBANRTrvriNqG7VBM2ddWlG5fcN%2FQrUVq1hU5Cj1aT4S5xS6LLLoDYc4fS54Fu0mCUVnF4nuMa8H%2BVVF4C7dm4oEdjkxp2XIFiFnKpl8ae9JKGIbMqYA9Uv3oQQvPmSTBQr1IJbccGKFHh%2BdWmThxcxlhRgJWX0O7PEBFCFaZDI2q1fOZP5xhj01m0osDFAYRmGnRvH1XC7JWU7Axh%2F0nUVN9jRjw9ZHXsCwzJ4PJzkkbbnWKnW0ClnTfV277BXFfLALTBlTNbJl3hUU7MN4DyF6DKCZxBTF81SXd%2Fs8lyl53o9IHeNcs2GJCMS%2FKH4YYpRNiC7J3VpibXy%2FegaIM0UEM%2F7adAoRrbuPiOnVa1zg9bGxovwvp87FGEpbSPKncXZye8vkHJVvNgTIKq%2Fgfk5BvhpS858Gse6vJ5EbWEBOqRFccedYSWGXNHkhA3DwjyKtGc3ZteSdjSW%2FRCmtgPDEr208cGisn5C0W30zSsmxlsifhSpERwBubL54ohTJsjDA55rIBjqkAdc8UGlrRSM9dQ9tercT0El0XLef3IyO6cGw9zrnLZ%2BwivqaOTN027Y0EaK%2BYqkvBCmk5vR8bpAXqBpVpRDcuaf5B0%2B%2BYh9lG5S87Fmsg10DlKParvpM0tC8VxCjzMboUg81btGAfHzPJmJFDDhH7hAvkf3s46P%2FIj4slIdcMOU4OK4hio%2Bw7h8IBqSJyc2U8tqfHZLVzGBmwxWLBd1fx7mtWjXu&X-Amz-Signature=09b275ad12d9574b43d642763aa049f2d73763a24122b2d81cc6471932b9a8ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663YSUWPW%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCCLrT6vxj8RmmhqSFZ0Csmo5GKWbDrw7GSjeR5mo23HwIhAOzUDME8OVpenKUs0Xz1LPyjS7F2hEJ8%2BjGqUrC%2BMcIIKv8DCDsQABoMNjM3NDIzMTgzODA1Igxj4pPyWu3jZuLXtb0q3AP1%2FYC4LFFddpL06%2FdRdT7E6yjIqkeJiToFTICw1D92gj3sAVmhm4BNbpTpo37FiGl%2Bb6GTlok2yq1SxjyR20ym78fbXrVgwVl8y45iqGdsVi3vfxPOip7Y82Z5RBANRTrvriNqG7VBM2ddWlG5fcN%2FQrUVq1hU5Cj1aT4S5xS6LLLoDYc4fS54Fu0mCUVnF4nuMa8H%2BVVF4C7dm4oEdjkxp2XIFiFnKpl8ae9JKGIbMqYA9Uv3oQQvPmSTBQr1IJbccGKFHh%2BdWmThxcxlhRgJWX0O7PEBFCFaZDI2q1fOZP5xhj01m0osDFAYRmGnRvH1XC7JWU7Axh%2F0nUVN9jRjw9ZHXsCwzJ4PJzkkbbnWKnW0ClnTfV277BXFfLALTBlTNbJl3hUU7MN4DyF6DKCZxBTF81SXd%2Fs8lyl53o9IHeNcs2GJCMS%2FKH4YYpRNiC7J3VpibXy%2FegaIM0UEM%2F7adAoRrbuPiOnVa1zg9bGxovwvp87FGEpbSPKncXZye8vkHJVvNgTIKq%2Fgfk5BvhpS858Gse6vJ5EbWEBOqRFccedYSWGXNHkhA3DwjyKtGc3ZteSdjSW%2FRCmtgPDEr208cGisn5C0W30zSsmxlsifhSpERwBubL54ohTJsjDA55rIBjqkAdc8UGlrRSM9dQ9tercT0El0XLef3IyO6cGw9zrnLZ%2BwivqaOTN027Y0EaK%2BYqkvBCmk5vR8bpAXqBpVpRDcuaf5B0%2B%2BYh9lG5S87Fmsg10DlKParvpM0tC8VxCjzMboUg81btGAfHzPJmJFDDhH7hAvkf3s46P%2FIj4slIdcMOU4OK4hio%2Bw7h8IBqSJyc2U8tqfHZLVzGBmwxWLBd1fx7mtWjXu&X-Amz-Signature=b8f106e6f0b409a2bcc9f70db0a298026f84e4f924eca4909f846e1cd0d7a8fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUMSXRQ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHYuhFuwJoIiy7u2m%2BE1SK5NLqv%2BDGucAs87FKycAyxxAiAgbTL2Lp8Uaz4vPl8zxrshGBGraNZ%2FF4CwDhWCHiwpLSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMt%2FNJJ2f4lWM1bHGXKtwDAWyR8oD%2BOi%2FpU6KfkD2jDfO8FJN2NEE9NkxvDBcVek%2FQBPwlOBjuh496kPdkIML%2FUPULVOzmmf0fKD8gJGtgB7oYlcNJWe5y03XJgLw5ovkCjNxTukiBVkteer8HBXydksYTV%2Fq2OtuHKgwKLKCkVO%2FqcT3J6TB4oUY7pEn%2F8Vk3nkup4EnvuJ7ZVkGf%2FS8%2FULicMtTa24TdxxkeEOp0Q%2FIJKX3aaacwUV4jFqHKEq6lRHyvCnXFaTqhGdIy3dg7gWZsVdlgvkBq3vfqsVwo5FWsBZKNIQr%2BsB45RJvfAzLEjmOl7HkHjKzyQFiLWo3l%2B64u6WYh7kjUitJqfNtQ%2F98X0lXGLTrDIuq2VR7QjdOpMqRsycITDgMJnZ054IAXenn4R5n%2BZZO5yl5WmVD4iR8d2NjJA1%2BNr8WewI5BUN0fUfwEFAm1xy4eAZR771ltTzJSZn%2F1c2NoRptidzBr2THGQrmUimBW6FzLjQzaUW%2FcHFPtRjd%2BKVAwzDgc8Yf8nwBDbk%2F8NeAEGGNalabFyqtgKrhAuw41%2FAHhvYuFxHUNnOiPQYf2IlkSAZKZ5q6Xl8QxUQjELfC9amXST0VYhiaHn2Cau5kOQajbcTW%2Ff63Dm9CgPeFTunY5eIMwueeayAY6pgEC0VUxsaG0mCWQbX8Z7Lrqzphv3xgtG%2F2DT%2FuwLeeDyqDKUK1DU8nVHmoatP6t4%2BAYIQyJAFfmLo6k%2FAmQNkBy%2BWQsCUjPjRyQNCiS2pSWbZLBkezZf5yWX6cA3FwWvlyN%2FbFZAPYjFjgHLh6gdiYjohZVkJfebVnXer6OKFM5ff9R%2FMnnCjtafv9pQ3k7fWOTtWkry2rUjMcefkPbtv%2FnkTcIUfDp&X-Amz-Signature=e117f560593bc035134d06e6bfd378b132e4f8c2e3ab38467e91d63b363021ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUMSXRQ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHYuhFuwJoIiy7u2m%2BE1SK5NLqv%2BDGucAs87FKycAyxxAiAgbTL2Lp8Uaz4vPl8zxrshGBGraNZ%2FF4CwDhWCHiwpLSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMt%2FNJJ2f4lWM1bHGXKtwDAWyR8oD%2BOi%2FpU6KfkD2jDfO8FJN2NEE9NkxvDBcVek%2FQBPwlOBjuh496kPdkIML%2FUPULVOzmmf0fKD8gJGtgB7oYlcNJWe5y03XJgLw5ovkCjNxTukiBVkteer8HBXydksYTV%2Fq2OtuHKgwKLKCkVO%2FqcT3J6TB4oUY7pEn%2F8Vk3nkup4EnvuJ7ZVkGf%2FS8%2FULicMtTa24TdxxkeEOp0Q%2FIJKX3aaacwUV4jFqHKEq6lRHyvCnXFaTqhGdIy3dg7gWZsVdlgvkBq3vfqsVwo5FWsBZKNIQr%2BsB45RJvfAzLEjmOl7HkHjKzyQFiLWo3l%2B64u6WYh7kjUitJqfNtQ%2F98X0lXGLTrDIuq2VR7QjdOpMqRsycITDgMJnZ054IAXenn4R5n%2BZZO5yl5WmVD4iR8d2NjJA1%2BNr8WewI5BUN0fUfwEFAm1xy4eAZR771ltTzJSZn%2F1c2NoRptidzBr2THGQrmUimBW6FzLjQzaUW%2FcHFPtRjd%2BKVAwzDgc8Yf8nwBDbk%2F8NeAEGGNalabFyqtgKrhAuw41%2FAHhvYuFxHUNnOiPQYf2IlkSAZKZ5q6Xl8QxUQjELfC9amXST0VYhiaHn2Cau5kOQajbcTW%2Ff63Dm9CgPeFTunY5eIMwueeayAY6pgEC0VUxsaG0mCWQbX8Z7Lrqzphv3xgtG%2F2DT%2FuwLeeDyqDKUK1DU8nVHmoatP6t4%2BAYIQyJAFfmLo6k%2FAmQNkBy%2BWQsCUjPjRyQNCiS2pSWbZLBkezZf5yWX6cA3FwWvlyN%2FbFZAPYjFjgHLh6gdiYjohZVkJfebVnXer6OKFM5ff9R%2FMnnCjtafv9pQ3k7fWOTtWkry2rUjMcefkPbtv%2FnkTcIUfDp&X-Amz-Signature=dd111ee1ab155bf113b80e8920ed083db15991c35188f931a41c89e751243900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TZKS2AJ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDKcT5GIapZo4DjtlwqLdieyLhnVCWJMY4komN%2Fo%2Bz44QIhAO8%2FyemqxIjxX8qnsV%2BVbEm4WTAGQwQxTpPO367yMWGEKv8DCDsQABoMNjM3NDIzMTgzODA1IgxyqHDlqiKDA64Zu4Mq3APYFSlQty3RCD%2BGeJ%2B9peolUUuFrGo%2FWb%2BfaHovxqvFzmvBh3FjVz%2Bnd1K6e8VV9UCtQVxBnBprCK0rqc6IC%2BLKn7ESew4WIGO%2Bb5hPhyhM45ZTez7jZdZk%2B6FN7QaWVK%2BR5U0DcACTwoOUji62ykoHcfxX%2BP4D%2FU%2FX4lvrMF8hBs%2FzKOTEHkwrJTe5lFTlNrUty3p9J8TEFYLLi1EwuhifZBRcg9%2FTazRHCd%2B2WL2%2BP6QkInRQKCrm0ihm2aj%2FfGwBL3TtsXfnO0HPuPO2cJAE0dsso%2F3sYjgmOwnVaXNDCajllthzVqV%2FJKdvSOJQ%2BXbksASV%2F9K6Z3CfWTFfnVJdHezl4BGjEapAXp7SuaZOlTh20w0USRm208qRBG6BPPf6cIeRIiR3YGAnDyUSWK%2BuFLVqSur0L348LnOK3sRfo6PFDW9IvPOW53n%2BEyOXGZ1xRACJ361i5trpK2dmOn0fhlkzlBVkO%2Fjh40a1%2Fk1hsP9Yq6w1WsdyB%2BoibxYjGtwRJ%2BbZbGSV%2BfzGBpm%2FThHCB0v%2Fk%2F8M17EJ2t1tN647baBCo3UnudZLpAr%2Be%2BGjctDG%2B0Z9urZmsupy6EtPSDc0DsocxywSD3TEo%2FyvcC40drQ30g8ebnE%2Fld3R9DDx55rIBjqkAcaIRhTubsZ%2Fdso0%2B%2BUNwFYINLdp2gQnyfR7vWKfeu7rKfOevxXNjKZ70wXmA6Fgd3ZDKltE1R%2FShAogr1BlSjSDXEWGUl385QyT79vSgzj0U7Q64prKi3yB36uoV8g89CezLFaGqE6aHtHNvHsxgprt%2F%2BeygHpCt8Yao96dQqHUMR3KTTmpggVktdETNXwW7mPR7TCjS3zqm1M8sqXl%2B8tc1AbV&X-Amz-Signature=325522166bf0edae07ae5ee217c634ae1caf9974bcf33be9ad7e359bee645f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMU7OQSB%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiAvD9%2BBQqH1PuPEbG1AF9Ho%2FOBZt6K626EpO2cDK5CAIhAPjAnFVWOCUjyhCz58G4C6GHfvhqjmKPs5RTnOJMWn84Kv8DCEsQABoMNjM3NDIzMTgzODA1IgwFgel4%2FetMSP6p6WYq3AM%2FLTn7Es%2FEeroNCtZkUDsHoOXlz3aT9u76txM52kA5IRt1p9UZt02EQrUit8fVIrgNG%2B1v7J3U8LWZ2WybstpmS9CMbjxSVYDLrQ9pXv7aF78iws%2BZNbbSlerMwOK5sm4ZGBIfHNP9B2QttEMV4Y48IVzR3cd%2BlU3KoqxPVoa6K9B9yNgb6KVPoIzGwB8Bb0xZfn1SltMlmLlfSUVsyx2nIBa%2Bu2LVEzTVbX%2FWjxxpStKweR0aRuepKWdGAdhHgpNqtt0H0R1uDe9Fqvfx7o7R5Jf8b6Q8cyBlYKqV6VB0W2wgcQCDVlYmSeoXTgtabp20dn0ervwPOUWq8mZLEsRQF0J5nxOivrZFqD0%2FX2ldKkoHrpVdnI68jUbYzzvC2s1yJEWLOT7S%2FcNEab5ncq89HoHHj4uXI6ESfVEyd%2BnhLx5%2FG5wCKuOLPNKtHRzoxkPMdeBicK4%2BFpCkTJqs%2Bzqt3LEBYJmLxqBcvUx0gcwwVkistREZ79FhSVG8ES3i93s7Eg4Kj8c9yMCOOhbu8oFvV6CG6G%2BaVsGg9gSG9pO25SiMY2Bb%2BrmhCT6nWlea1Fr%2FprXKKGROsByHcFzWY6N7zNAzpohMxJbR5gQj11r4PSWN0CrZtCk5%2FJ4p7zCW2NrPBjqkAfcwHxmOO8L69y3Zr20Xbw8G3Vnt7hVtg4KMIcvGR%2B80l7AoTf3633%2B5Q8k75v3et8Pib9a1Ki1bDPqvj%2BmD6i3kbnbdh4dunha8ODBk59LdnozjurLSG21mgX5%2Bk%2F4D4RfcQsnTvw%2B0%2Fo%2F8fxE1CJsBCddP9QagTbZkX7Tae44WczXPzIv1BT0qF3uH80P5G%2Bqe%2F2BugVU4ZFKGdQNqXW7ab0CH&X-Amz-Signature=7c4ae425efd6bbb39512faf1e80a12782d6664cf72ee5d7c970fd8c06a5456da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RK6XS23%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAk7hFP4sZG1E%2BYajJnhAQO%2B0HKdE5HKjwxxvOt0E6wWAiEA3%2FYrI6H2EhY7WqN2v8rZO%2FuEdIYOxEQBbqZvAJPMpegq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHBUo3G5chciXuoBDircA%2FcUIik3QUrWhDjD2bl4susPFRIsQJ9yI8tphroT1%2FNdM8hBKJgAEY89%2BMjvMIyqSXkZkW0EafrxmhnVGJkk2wJGihPQfPYwKBmePcmsxioVQ3yzImA4F%2B0KuJUZqjT8bSz%2B0HD8%2FKQ%2BTDCAN%2FcWXhotTZMQRUr6FPiTNebQYAitcaX2s1bHULt8e652y6ZW8GnTGcHlTQMy7XSB%2BsZDDMt1Aa8zDFjZw5U%2B0HJisCr7VtEh%2Bb4fJ%2B7geFCPBM2dVDb%2FXJ%2BY3SXnpIiWRsfJLhd8Rb%2BaTtiWRtVzFJxa9ZZ2yNrD6uEuldPS2bLHfTioPH9GgMcnJ4%2FZ3oJr2df3bjYo22BoT9wMNm1Wd8zDOTmRLbbYXkK2XJjTv3tYE1%2BLHwgZJEVA1AhnTHKjDOBrLWGXKhcoXdGXBesYC%2F1AeQuJCu8KjllfUhAdKMUiDbI4DUvUOk32kQ2yjyf2rp1AUY623rm3nEoykFupcAGBNONxl6HVle3FBhHMMIdVueq6hqRICr0eTbfB12CpnoqJAqgNYFDRM4yFFibYK1e08O4ceqLT716dOUCYIF4D6s8T1hhPPlpSnzyldCDHFUzW0r2owh0abFxorZWz%2Fcgi8j6ph%2FwDLdMUd1%2BNcmxmMLzr2s8GOqUBrjoB7btgagw8nnwEp7TsBb%2BAA5IUr%2BL1OWNtXDUl8JChsqedRdX6Jt%2B0AkElrxTqN8rRIL5HJ%2FLskYDT4nv03hSVF2WFOwaf76ixn6sWOxBj1QY62rAKJMhXOq7ZHYJvrru%2BfGCs%2F6M9aJ440b%2Ftxb06HV%2FXoK4Hx%2BNfYVxI4KVKJmrVrAJ6oRGvZo5E4VgEbwIYsmsehEdGQu5%2FtmNaSAZqUkyf&X-Amz-Signature=9346a0efc374bf99a46d0b967abba331504594b3954a9a71ea31f736e05f1048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GKEFRJ5%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKANBzZ%2F3ekLDZh%2FID7EKv9Nl4smXel%2FxGhb4PvVOvfwIgE3IgA4rX8QD%2FBmuASzdJXWjWI%2BneuU7Klipd7W1hJxkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKDjhFCG8yeTVptysCrcA0rnKjfkVBcpZjZLAfnI1aHOS3WgwILNtHCVuaf6JJIwUO6JbPKgfDSsmxYkrJlXNEMvuutWH4uDq7kCo1pN1SSExdP33YFd8Sh4R918z57nqkkY7dt4UB6CYlTxyoAFLbpOuIZ%2Bggm2qPZJ%2BO2s%2BgXYlHAIvcqKgY0oRpkITb7727Dl%2B71AERfYt4ByKgTEoVKl4W9NI3ZxhevNxeihDYHfgZPMVCfP3RRP6GkeTp%2FKl3bJpOFVjm6mc%2BVDQwcZ4eU9BXZCtrI53i3Qf8I7LsmZ4I0%2FWdyfosM1pJ5hFNwLXKv34NzCyaBz06q7mtD99JW4tb64tykBIQiomOgIusJ7NZbB%2FC2WZC7x7trMfFQed504JsnPQY83jZ7uhlR2ytHD%2BFREFYrceKToZS0lqv6EQnIvMKHoZHgwMEhSL9fjHz0VDmRamrIomnFFbWqCQwNuBcqe5i4%2Bpnr29l2gxNf8VG%2BJMxem%2Bmex79timZwmiNDEVeMFhFhopig48l0baf5iLRg4KouduxNdSmZwa%2BgfBcd%2F5pvEE3ZNQpCKAAP6eN94E6O7aQVVTr1Ls2KkykpyLuCy3tnjN2INsXvKbzxywdB%2FWNKPXE3Hy6XhIrEnkTwUiq24AfrPichnMKLW2s8GOqUBnYbxaPDOZvNO1sxrD%2Fnoe1EpnBxZ4FjvnplSlz%2FAXiBlvJuUiOeDf3S4rYG1aRHBpL6TNG39qnkc8j3qPHpkeintLmUr5JVkTlLUvkofrPtFFu%2Fe00sMI2y68qitXk63lcOhdD9QvR29YlY1uIS5sQArKt1zo%2Bdb3%2FvFDebLIoy0sn9DEc4oQSCT4fbUd%2FUOirHwGSr%2F7xiKjGti8Zvh29K1uFe%2F&X-Amz-Signature=e0a276d9a3297c265ef6e4c1cde38e50a4ba10b342c44a7c97019cb1664466e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GKEFRJ5%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKANBzZ%2F3ekLDZh%2FID7EKv9Nl4smXel%2FxGhb4PvVOvfwIgE3IgA4rX8QD%2FBmuASzdJXWjWI%2BneuU7Klipd7W1hJxkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKDjhFCG8yeTVptysCrcA0rnKjfkVBcpZjZLAfnI1aHOS3WgwILNtHCVuaf6JJIwUO6JbPKgfDSsmxYkrJlXNEMvuutWH4uDq7kCo1pN1SSExdP33YFd8Sh4R918z57nqkkY7dt4UB6CYlTxyoAFLbpOuIZ%2Bggm2qPZJ%2BO2s%2BgXYlHAIvcqKgY0oRpkITb7727Dl%2B71AERfYt4ByKgTEoVKl4W9NI3ZxhevNxeihDYHfgZPMVCfP3RRP6GkeTp%2FKl3bJpOFVjm6mc%2BVDQwcZ4eU9BXZCtrI53i3Qf8I7LsmZ4I0%2FWdyfosM1pJ5hFNwLXKv34NzCyaBz06q7mtD99JW4tb64tykBIQiomOgIusJ7NZbB%2FC2WZC7x7trMfFQed504JsnPQY83jZ7uhlR2ytHD%2BFREFYrceKToZS0lqv6EQnIvMKHoZHgwMEhSL9fjHz0VDmRamrIomnFFbWqCQwNuBcqe5i4%2Bpnr29l2gxNf8VG%2BJMxem%2Bmex79timZwmiNDEVeMFhFhopig48l0baf5iLRg4KouduxNdSmZwa%2BgfBcd%2F5pvEE3ZNQpCKAAP6eN94E6O7aQVVTr1Ls2KkykpyLuCy3tnjN2INsXvKbzxywdB%2FWNKPXE3Hy6XhIrEnkTwUiq24AfrPichnMKLW2s8GOqUBnYbxaPDOZvNO1sxrD%2Fnoe1EpnBxZ4FjvnplSlz%2FAXiBlvJuUiOeDf3S4rYG1aRHBpL6TNG39qnkc8j3qPHpkeintLmUr5JVkTlLUvkofrPtFFu%2Fe00sMI2y68qitXk63lcOhdD9QvR29YlY1uIS5sQArKt1zo%2Bdb3%2FvFDebLIoy0sn9DEc4oQSCT4fbUd%2FUOirHwGSr%2F7xiKjGti8Zvh29K1uFe%2F&X-Amz-Signature=bf1afff8dc75ffc193a8e662982c37889b3b2ed47763b7d97b54d15e928fb61a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RK6XS23%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAk7hFP4sZG1E%2BYajJnhAQO%2B0HKdE5HKjwxxvOt0E6wWAiEA3%2FYrI6H2EhY7WqN2v8rZO%2FuEdIYOxEQBbqZvAJPMpegq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHBUo3G5chciXuoBDircA%2FcUIik3QUrWhDjD2bl4susPFRIsQJ9yI8tphroT1%2FNdM8hBKJgAEY89%2BMjvMIyqSXkZkW0EafrxmhnVGJkk2wJGihPQfPYwKBmePcmsxioVQ3yzImA4F%2B0KuJUZqjT8bSz%2B0HD8%2FKQ%2BTDCAN%2FcWXhotTZMQRUr6FPiTNebQYAitcaX2s1bHULt8e652y6ZW8GnTGcHlTQMy7XSB%2BsZDDMt1Aa8zDFjZw5U%2B0HJisCr7VtEh%2Bb4fJ%2B7geFCPBM2dVDb%2FXJ%2BY3SXnpIiWRsfJLhd8Rb%2BaTtiWRtVzFJxa9ZZ2yNrD6uEuldPS2bLHfTioPH9GgMcnJ4%2FZ3oJr2df3bjYo22BoT9wMNm1Wd8zDOTmRLbbYXkK2XJjTv3tYE1%2BLHwgZJEVA1AhnTHKjDOBrLWGXKhcoXdGXBesYC%2F1AeQuJCu8KjllfUhAdKMUiDbI4DUvUOk32kQ2yjyf2rp1AUY623rm3nEoykFupcAGBNONxl6HVle3FBhHMMIdVueq6hqRICr0eTbfB12CpnoqJAqgNYFDRM4yFFibYK1e08O4ceqLT716dOUCYIF4D6s8T1hhPPlpSnzyldCDHFUzW0r2owh0abFxorZWz%2Fcgi8j6ph%2FwDLdMUd1%2BNcmxmMLzr2s8GOqUBrjoB7btgagw8nnwEp7TsBb%2BAA5IUr%2BL1OWNtXDUl8JChsqedRdX6Jt%2B0AkElrxTqN8rRIL5HJ%2FLskYDT4nv03hSVF2WFOwaf76ixn6sWOxBj1QY62rAKJMhXOq7ZHYJvrru%2BfGCs%2F6M9aJ440b%2Ftxb06HV%2FXoK4Hx%2BNfYVxI4KVKJmrVrAJ6oRGvZo5E4VgEbwIYsmsehEdGQu5%2FtmNaSAZqUkyf&X-Amz-Signature=2fc0f2e2cc3af13c692ca426b1cb94f3cc1eed29664a00cd9014171fbf8f61f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RK6XS23%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAk7hFP4sZG1E%2BYajJnhAQO%2B0HKdE5HKjwxxvOt0E6wWAiEA3%2FYrI6H2EhY7WqN2v8rZO%2FuEdIYOxEQBbqZvAJPMpegq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHBUo3G5chciXuoBDircA%2FcUIik3QUrWhDjD2bl4susPFRIsQJ9yI8tphroT1%2FNdM8hBKJgAEY89%2BMjvMIyqSXkZkW0EafrxmhnVGJkk2wJGihPQfPYwKBmePcmsxioVQ3yzImA4F%2B0KuJUZqjT8bSz%2B0HD8%2FKQ%2BTDCAN%2FcWXhotTZMQRUr6FPiTNebQYAitcaX2s1bHULt8e652y6ZW8GnTGcHlTQMy7XSB%2BsZDDMt1Aa8zDFjZw5U%2B0HJisCr7VtEh%2Bb4fJ%2B7geFCPBM2dVDb%2FXJ%2BY3SXnpIiWRsfJLhd8Rb%2BaTtiWRtVzFJxa9ZZ2yNrD6uEuldPS2bLHfTioPH9GgMcnJ4%2FZ3oJr2df3bjYo22BoT9wMNm1Wd8zDOTmRLbbYXkK2XJjTv3tYE1%2BLHwgZJEVA1AhnTHKjDOBrLWGXKhcoXdGXBesYC%2F1AeQuJCu8KjllfUhAdKMUiDbI4DUvUOk32kQ2yjyf2rp1AUY623rm3nEoykFupcAGBNONxl6HVle3FBhHMMIdVueq6hqRICr0eTbfB12CpnoqJAqgNYFDRM4yFFibYK1e08O4ceqLT716dOUCYIF4D6s8T1hhPPlpSnzyldCDHFUzW0r2owh0abFxorZWz%2Fcgi8j6ph%2FwDLdMUd1%2BNcmxmMLzr2s8GOqUBrjoB7btgagw8nnwEp7TsBb%2BAA5IUr%2BL1OWNtXDUl8JChsqedRdX6Jt%2B0AkElrxTqN8rRIL5HJ%2FLskYDT4nv03hSVF2WFOwaf76ixn6sWOxBj1QY62rAKJMhXOq7ZHYJvrru%2BfGCs%2F6M9aJ440b%2Ftxb06HV%2FXoK4Hx%2BNfYVxI4KVKJmrVrAJ6oRGvZo5E4VgEbwIYsmsehEdGQu5%2FtmNaSAZqUkyf&X-Amz-Signature=3b1b31b956cc852aafd590f246c54836ac6c43ba851dc7aedc1140db77de67db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USXRFO2K%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS8QvNySDAUaHyypCCAXGPfB53v04%2BZsddfvWzMsw%2FnAIgTU%2F3%2F4gh%2BsZSMknIn%2BUsxKsE4tZ499CosKQFFcRWEhAq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDA6khl3D%2FjDYLxElfCrcA5gof%2FU3UmQXiO3G%2F4SEoop4d1VXYW2PO2qiy7OHYP4CcuWjJ%2FLTXT731KtvNZzA1Ho0tho4dWZUZHWInHzCEnyvYUEJSMUW4Z9PK%2Ba1v2UBphIXY333%2BMkFqbu8nKPqGvIH0EZSXYcW5lAo3DJuZbVah%2BC2ymAHaPL%2F6Wh%2FJkObzH7zHQ4DyhNk3uaFN3mgCR6%2FlMr86Da%2F3RwEeBqdfN%2B4iyTDQ%2F9GPqli%2BPe%2Ba3IC3rNfr7h7%2Fssz8lgdb17V2x8%2F3vnaOih6qdfZp6C7ouOXLZ70DSRZ8CJSFQtxPkrE9oFAEkm2Xi99hOOxXQe3FCnOibfbvO9QKqerSTeWajN5iY6315RgOc1Z8z%2BrxfTKYIyH8IctWlkOULimGN%2B55qWQyZpTE89fl8%2BnLXYCoT4GpbjtJDPi67g%2BonhqiwyJwoXvMhiZ9ptT6hNesv1%2FmxhKC5i1DkE%2Fs7JwiZuM7z2DQFNTT582TzILBUTU8vC1Wt29Jmo%2FJiiFmAeEap2FS%2B%2BkuXVLqn8y1ew8xs6Rn1dQ23t%2FZHjzkPa3r6EH7dhfaca13XkhknINvcJzPA3vhTfscpVN7kfzs9tM9Oach%2F9pBZT2TUujMFENGcbPkcxqVENJ%2FviEzk%2FXqLGmMM3W2s8GOqUBckLVf%2FE3tt2oOmvZUJ6v1IqXv32ypW2xLuWuoxcm5192wn4laYuf0O9M%2B56N5j4lEQeLbkfLxu0ZV4J90Kb1v9hRVakDrAHoruaMBA2%2FMDi3tpkdpbMb84RyufQ%2FwdTuUsH95bYNUlPbRo9dKAvmt0vI4ey1iFTwqaYuNyMoLSFw55fraQXC0FIrKm6t9GAxE7yvEIcRtMiPeU3pYLPJBWyV00QR&X-Amz-Signature=13fb59202d441e4fd2c24891d9deb88a69a86adb2f5c95f1d19451ded52ceeef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

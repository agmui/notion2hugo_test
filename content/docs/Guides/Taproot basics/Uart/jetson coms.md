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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MGQP33U%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDJfiO0NX15%2B8zAZBx%2BB5wqyRGVI3gEUZvueuEPpARVeAiEA3bq%2BvoEvS9%2BvY9eWjCvMsq0psKc4JNliSnDJOdOM7Mgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNRPTPia4mva7uGqAyrcA7CceiL%2F8IocOpFvzFhony%2F8fJTaFSlrzhUOdMMmSpNvqsbD6iAM0ahS6aleA6SCmH0MJZnAdiUNtPUlFhHsAg2EBJWqKmCuIdA5uQu9h3pmv2DOgwr2xjDiwayfaMSuNY4I8QdjZZggCrD4ZUxmwx6BF18ptahlV0C%2B0w5EAy%2FWZGBIF%2B4e1gKLV1IJq96ai77kpxxfjp6QjWYK9PBOIin7cWgkTiE1g%2FY%2FQC8vX8ZtqTmwPIp0CTqmnp2rObzzOlVZw%2FCEq7ZMfnPqmQozxtE%2BZlfTkRZpShyANXbxpdV6muWKH2lUmh4p92TzW79kRhWnaeO8gzyI8MAX5p40Ium6Tg0vFgHSoGxeK%2BBNdwDOmtVj%2BelqJ4gBo2i5MRuyJhzuiahHFGQ6XtFXAXOB2xx%2BwzKt06d2EX%2B2Fu43Ou8DhAAVFg1fV%2BVLBH%2BMjjLjAF%2F968gm2oh8cNLh1w4emGnrgOZJCWAXepQyAaO6O2YTdHoHfj2IXSkzPcrXEx25ZCgBY6F5IPWGWH8NXU6uRbYmhuNP%2FKAoKBY7RV%2FURbUKUPvvP7dnSwRjrfXK42XIeazhZnHSeV4Yn2vGqskaolirCm7%2FMlROx29%2BBmSQaLVA8t%2BMjn8SEwDJ4HZrMIvJldMGOqUBntUHzpRvJCQlNOlFi3X%2F212%2FQynaPTDuYBz%2FIgxiNATv2CugM6XT3dDTPaUbtfJpfomU8XTHni7b%2BXeGdUdgnYAuY%2FyYa8NZ6Jf2lluNsZe3CinvLPpNRe%2Bq7QWIyaTNnj52BhHFOYX%2FXj7BILvRutQQu8Sx3bRTCHvL66TNGwAJrYVhTNlJ4BBA7CHOvDoNcdPu0oDksME28DJVfEhXEyo3r%2FJ2&X-Amz-Signature=7b0425060777055ac45f4bbc1808ce0b75d601ad5043a5ae9d879e1cf0117cc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FNFPHEA%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAP%2FjPAXQra0YcsNuBmOMfbdUgVOQdeYEuMGYk7ra5DPAiAvks3rnZBZ0f7VunTFCx911wJV6WNW6kr2V%2BfUBL7%2BEyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM6hYA8Qjyghf7Qlp8KtwD4GGRjRfu58Blr0s0vnIKOhcFHFciD2h%2BUyROt4ztZqaMvyu9XfxCEYSUpL9phjrMxL1TVT1ReerZq7D%2FOwjW%2FlkWsuOZ8yGfFosc7tfqhg5oaKVVRHiZ3Jt%2BFWQqhOfmV%2BRIg7LZZI7ng89xdKx7DF%2F4%2BLXKMk21JviZUz5gC8lwGrfLT7j6%2BqKFzTDCKUmwaEPA7GMFL28ZncFIfS4HoFanWA9hE3bpLrrBeMWJv5xr3ny8V2rRwm84jY1bt%2FrYzmpfbMyeT3hnKufR7GMohqWixtOrUcGgk0stwYy0otFqt1dm%2BjiV%2BVnCIevhI7aKW7X%2BEDfOHGKLJE%2FfyDTAJAqAYEcdKaWT0BYdmpQ84%2FLWVYrqkQ5LAGSEZxy%2BTIYIttNKK8%2B9vhkotBfsrH6JDlHB5fXG2MvuNtOok8q4ICCCbfrMawYYKA3PMMLToUzSAEWlC4tkyQqAJK3OXBBvwERGltLq6eezvVJDFsW5lq5OhyX%2F5Fvcg8usb4IS6iCq61O5HUJIbdYfSc7wM%2BMFvViEhynHKQD22gzuhdwG%2FUiueXTeeQNOQN1gnYNF6HzmCUtw%2FvF3SwsKUPNcxFoODF9sHlseQx4m8366t8PthNEsfRz2zOH7wESHN1ww3OeV0wY6pgFdGdThtiDnU8fzzX4cF66jSAHaAQZN3M9xz2z9Lm%2BnGRZo6lZQSZWi%2FQpfGJ2kESyv4YFaxJGQ5LHaoD%2BscWJbgrMCvug4JNxfii5Q3z1exGtf6wXt63ytReY6%2FZKQcTsPFoYvnh%2B3fuFPpzTWfbqT7HHEQiO8aAr6%2B5OKFhKh3UBf98Ggw66q1WaHTp%2BAr%2FUuzC6%2FBfemeONaM4Qa8BdSewQH7DoG&X-Amz-Signature=059609b4db8fc70130279a00e9b52d1cd475b01411b0c9d7b81e5efd65b26e20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626DU263I%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIASugeAbmup400psRmx7PjMXZvKZ%2F%2FYYoUF7lFyF%2FG7cAiEA2VIRBumDoj3IEQ4mcBhodr1TiRNBATYvmguPunydyh4q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDO6JP8a6TRl%2BBnWtWircA8%2BDXHzMOewgZp%2BdquB6FYH1%2Fjoh%2FW2S0NfuydVPt2bNfDyOAt9nuLyjfWe0uMVpCuK5%2BEvn96o63qqNqh7FdWkfklgZLVnn7zHadxUEadyyctMe9495DAgnCEPBh5RejEYcswt%2Bhv4t%2FPGzPixEIDWOJChRdAwAn8YQYh%2FtgROssC1MSqiRymoJhzmmrfpFPx1JAg3cimSQEGVwbWUNIcvsidwtk67aKrn6zAcN7WqoY4ffH54Md8CYdatQHapL4SxUocUF8gPg3cEpobHfzJhBVxqwfNJM2oCE12aK8BxZaA60KEUaiLez86msnhpMZcKtREz%2Fg%2BCb6ImGtk%2BcMqbAuweGTOwmrGCv8VmC%2BJtybwBzbWDtzqbFvaWqpi5QODC8mS3ZsV6yUdd11p2JdiGmKjHW%2BwYQd0YGn1ETi%2Ft1UXNuJUJL5Md%2FHsuTym6hUQyG0lqYTMPHllvmhNbyVcm6xueCktQvKCwA22TiaSgKZFz5U2eJY6H%2Bpz39uZYIsLKBiYEeAUOHsvt4xWA4FcikMaLEBAWRBqF7iD96c3PJFVeN%2BiUkxU2%2FX9j4%2BijmXN3nq%2F85O0D93oRjffzg0l6yrtlwcwSFMnB%2BXhCHBVljpwTpUios4IAp25sKML3nldMGOqUBogQjU77riwQkHhtVWFkUqdOcra6VP5CCtgtkW%2FjdRpLCJ6CVAEmkPrch2RPQqi3FSOHixGTTbwpxj2zAix4PeLekKwwjiMGA96wFsLWkEWcTzfuSsTw8CMSg9knfJsPefvsMXkGq7p9QffbThmnYIR75jVkbX7lnqR8Or8wXYAboLdEvbF%2Bs61i4oQ2q%2FQLwTtT8mo15LpRCX7TwU2u0l5sqJ3qQ&X-Amz-Signature=e1ad1869048afd2b36b5790e6c1c4619d249d3d5b9708e712c1d7c3e8819ab7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626DU263I%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIASugeAbmup400psRmx7PjMXZvKZ%2F%2FYYoUF7lFyF%2FG7cAiEA2VIRBumDoj3IEQ4mcBhodr1TiRNBATYvmguPunydyh4q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDO6JP8a6TRl%2BBnWtWircA8%2BDXHzMOewgZp%2BdquB6FYH1%2Fjoh%2FW2S0NfuydVPt2bNfDyOAt9nuLyjfWe0uMVpCuK5%2BEvn96o63qqNqh7FdWkfklgZLVnn7zHadxUEadyyctMe9495DAgnCEPBh5RejEYcswt%2Bhv4t%2FPGzPixEIDWOJChRdAwAn8YQYh%2FtgROssC1MSqiRymoJhzmmrfpFPx1JAg3cimSQEGVwbWUNIcvsidwtk67aKrn6zAcN7WqoY4ffH54Md8CYdatQHapL4SxUocUF8gPg3cEpobHfzJhBVxqwfNJM2oCE12aK8BxZaA60KEUaiLez86msnhpMZcKtREz%2Fg%2BCb6ImGtk%2BcMqbAuweGTOwmrGCv8VmC%2BJtybwBzbWDtzqbFvaWqpi5QODC8mS3ZsV6yUdd11p2JdiGmKjHW%2BwYQd0YGn1ETi%2Ft1UXNuJUJL5Md%2FHsuTym6hUQyG0lqYTMPHllvmhNbyVcm6xueCktQvKCwA22TiaSgKZFz5U2eJY6H%2Bpz39uZYIsLKBiYEeAUOHsvt4xWA4FcikMaLEBAWRBqF7iD96c3PJFVeN%2BiUkxU2%2FX9j4%2BijmXN3nq%2F85O0D93oRjffzg0l6yrtlwcwSFMnB%2BXhCHBVljpwTpUios4IAp25sKML3nldMGOqUBogQjU77riwQkHhtVWFkUqdOcra6VP5CCtgtkW%2FjdRpLCJ6CVAEmkPrch2RPQqi3FSOHixGTTbwpxj2zAix4PeLekKwwjiMGA96wFsLWkEWcTzfuSsTw8CMSg9knfJsPefvsMXkGq7p9QffbThmnYIR75jVkbX7lnqR8Or8wXYAboLdEvbF%2Bs61i4oQ2q%2FQLwTtT8mo15LpRCX7TwU2u0l5sqJ3qQ&X-Amz-Signature=85f1bcf6aa5c878ee52874228a2969a0c023e6889a06c632e976ae2979f1ef03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FNFPHEA%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAP%2FjPAXQra0YcsNuBmOMfbdUgVOQdeYEuMGYk7ra5DPAiAvks3rnZBZ0f7VunTFCx911wJV6WNW6kr2V%2BfUBL7%2BEyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM6hYA8Qjyghf7Qlp8KtwD4GGRjRfu58Blr0s0vnIKOhcFHFciD2h%2BUyROt4ztZqaMvyu9XfxCEYSUpL9phjrMxL1TVT1ReerZq7D%2FOwjW%2FlkWsuOZ8yGfFosc7tfqhg5oaKVVRHiZ3Jt%2BFWQqhOfmV%2BRIg7LZZI7ng89xdKx7DF%2F4%2BLXKMk21JviZUz5gC8lwGrfLT7j6%2BqKFzTDCKUmwaEPA7GMFL28ZncFIfS4HoFanWA9hE3bpLrrBeMWJv5xr3ny8V2rRwm84jY1bt%2FrYzmpfbMyeT3hnKufR7GMohqWixtOrUcGgk0stwYy0otFqt1dm%2BjiV%2BVnCIevhI7aKW7X%2BEDfOHGKLJE%2FfyDTAJAqAYEcdKaWT0BYdmpQ84%2FLWVYrqkQ5LAGSEZxy%2BTIYIttNKK8%2B9vhkotBfsrH6JDlHB5fXG2MvuNtOok8q4ICCCbfrMawYYKA3PMMLToUzSAEWlC4tkyQqAJK3OXBBvwERGltLq6eezvVJDFsW5lq5OhyX%2F5Fvcg8usb4IS6iCq61O5HUJIbdYfSc7wM%2BMFvViEhynHKQD22gzuhdwG%2FUiueXTeeQNOQN1gnYNF6HzmCUtw%2FvF3SwsKUPNcxFoODF9sHlseQx4m8366t8PthNEsfRz2zOH7wESHN1ww3OeV0wY6pgFdGdThtiDnU8fzzX4cF66jSAHaAQZN3M9xz2z9Lm%2BnGRZo6lZQSZWi%2FQpfGJ2kESyv4YFaxJGQ5LHaoD%2BscWJbgrMCvug4JNxfii5Q3z1exGtf6wXt63ytReY6%2FZKQcTsPFoYvnh%2B3fuFPpzTWfbqT7HHEQiO8aAr6%2B5OKFhKh3UBf98Ggw66q1WaHTp%2BAr%2FUuzC6%2FBfemeONaM4Qa8BdSewQH7DoG&X-Amz-Signature=469c2621ec35735ad01135ba5347861cb67684e8fe8942d767b1feeb3cc76e50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FNFPHEA%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAP%2FjPAXQra0YcsNuBmOMfbdUgVOQdeYEuMGYk7ra5DPAiAvks3rnZBZ0f7VunTFCx911wJV6WNW6kr2V%2BfUBL7%2BEyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM6hYA8Qjyghf7Qlp8KtwD4GGRjRfu58Blr0s0vnIKOhcFHFciD2h%2BUyROt4ztZqaMvyu9XfxCEYSUpL9phjrMxL1TVT1ReerZq7D%2FOwjW%2FlkWsuOZ8yGfFosc7tfqhg5oaKVVRHiZ3Jt%2BFWQqhOfmV%2BRIg7LZZI7ng89xdKx7DF%2F4%2BLXKMk21JviZUz5gC8lwGrfLT7j6%2BqKFzTDCKUmwaEPA7GMFL28ZncFIfS4HoFanWA9hE3bpLrrBeMWJv5xr3ny8V2rRwm84jY1bt%2FrYzmpfbMyeT3hnKufR7GMohqWixtOrUcGgk0stwYy0otFqt1dm%2BjiV%2BVnCIevhI7aKW7X%2BEDfOHGKLJE%2FfyDTAJAqAYEcdKaWT0BYdmpQ84%2FLWVYrqkQ5LAGSEZxy%2BTIYIttNKK8%2B9vhkotBfsrH6JDlHB5fXG2MvuNtOok8q4ICCCbfrMawYYKA3PMMLToUzSAEWlC4tkyQqAJK3OXBBvwERGltLq6eezvVJDFsW5lq5OhyX%2F5Fvcg8usb4IS6iCq61O5HUJIbdYfSc7wM%2BMFvViEhynHKQD22gzuhdwG%2FUiueXTeeQNOQN1gnYNF6HzmCUtw%2FvF3SwsKUPNcxFoODF9sHlseQx4m8366t8PthNEsfRz2zOH7wESHN1ww3OeV0wY6pgFdGdThtiDnU8fzzX4cF66jSAHaAQZN3M9xz2z9Lm%2BnGRZo6lZQSZWi%2FQpfGJ2kESyv4YFaxJGQ5LHaoD%2BscWJbgrMCvug4JNxfii5Q3z1exGtf6wXt63ytReY6%2FZKQcTsPFoYvnh%2B3fuFPpzTWfbqT7HHEQiO8aAr6%2B5OKFhKh3UBf98Ggw66q1WaHTp%2BAr%2FUuzC6%2FBfemeONaM4Qa8BdSewQH7DoG&X-Amz-Signature=6a9f67fb891c39f9fa8b21e07e8d45e78e7908af10ab769bf7062909acda18f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNR7RE7%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDysFtukmBk0LMLOZ9FiVEFZG5c6PH0Kkr0iCNcW3IzAAIhAO12gyIRm8%2BqH2iRduI1JThDw7bPZCjwXZjiKVl1FCH6Kv8DCCwQABoMNjM3NDIzMTgzODA1IgxrlfDlud0I%2F97Ch8Iq3AP%2F1oqvwphbutpNpMsq7ttU%2BrLiodCoDhCu4pMXG1mdtl4hUSkJ1YHtKiyFxKt0jsHqdHT20eZF2UtWxw3xr4mXO4YbzgSPrvcLXw0Y0xqXhEc1FH4Nx4ReuCoTXxYzfCtVCK5N%2BTtkYePnZe4z49Hp%2BSj4SLi4UQURpcWkkaCV2C%2BtqxH4iWIWLjy%2F3dHDvpH7NW58O20FPzEk%2F2meIU9ChLOCd6KYKBIW7OuvQ8qqXalyBGSrbb2KCcUnEk1vh1RPRN7F1gpbpJ4B8VVSufeXw%2BCKUW2FD981nO3nnGRHqDeswld2aBj9GCUcEXEi20iDkTUXSo0hPcChKr7WLpdl%2BVwVZ7e7xpL5XcceBZrsTXKc9hkICBwodW%2Ff0WxhRHN6FM5hY%2FeWomMLUD%2BylWU2uOkVjcYyDK5XYcKcbpAWpXZHk9uJmTTblxvu3Q2cW6mYdenxYmGoy7rfnKuOdzG0LlNgrlEvwgylz6Ya%2FVsig%2FdJ7rTy8r8GFfUK%2BEe3obNSodmgpBvBkPjNl4acrxkuiZZLAJTCpf9XWW3TcrlLen6w7t7JSQgQSNlltNjRFrgQ0Bpyja9jdjGP4%2FD0kYBVGNXUb7%2F3U12fmqrdemaa1YwOcGWupoLSb1liCjDf6JXTBjqkAfUVPtcbjf%2FZEbF16L3IURWKO6X8hWmF8qucKl6EK3zNcvqyxk%2B8W8U2aGIpATKsSrXjFsFZSuo7s1tJSWxFadmgHCUNNoRUcgyTfglPauk6Plttp%2FeNU5qRj4TefsKigEqXrzGi8RIzAv297mLrOATn8B5kRmUAYTHs3z0GaI3BEK1fq1mHF0hdilazxIuQ3xFaF67dcqT26AbdKFJ%2FYLqT1Duw&X-Amz-Signature=12cc05575b8df0ac7b13f451b07c11232768db5de101294e531f9eed790823ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

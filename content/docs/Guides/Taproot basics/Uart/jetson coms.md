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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PHHDLOL%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCxsm08lg1R0nZuwYhPyHem44SlLcgcFdQ6xtmYEK27jwIhAJzDAtsz59eYPHB3V6BymEGTTjRjrUpy1io4zeSfYNN7KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynWm%2FY%2FcpEgeLR0I8q3AO%2BDflu55hwXpwdmOic6krb99lTpY1nwJ8PCb2XdJ1oY02zkgOu0twJdGQvz53oHZNlr7bL3cZOQ4nndU8rH41smDQ6adnfWUoFWif2ZpYkuJsAFl9Fg1RxPpqRfDnh615X3n69E%2BaiLipZ7uRWDYcPQgvkhi2bbnyLds5IqD4lC15HBU%2FSGzch%2FLvAutvNmkjYlcBm03%2Fl3AisM5B%2B3qbY2UsMVSRriPD8oJBqjxuEGDyPvBCWb%2FoBb3gtKjBLLFRBYcPJatvN1vvf9Q7ZFbhKdjCPVF3vuTshiLxKxZinOTObFULlYJfyXaBiSggXpJY3SWD3VQxUHxGkqpasTiZfrwxHVu6DNp544%2FqGNnYxKBySCykbZBsKcAamp0tqnXZyDmQe0Qji0NBhzzGOOL8qbH2tx4Z3rTAq85AQMc4q0JJHLVItcF9gJOOjV5g2wm0QglEipG4%2F7YKF79j9C2lEcJFVsipBl%2FUJsXnNVkxrD34qZf8lZbDZJnDIZAI4OjcYS9cn%2BiuakrB6U%2FMpAw8ak0GjVPFHuK%2Ft30obs8LBmWcKhuSWxZVLuJ3IOTLEdEdbbcT3mVC1GY7f%2FZ1YPdb558H8uIidnDd0%2FdjxZEujMKflGmgPPg0KoliIOzDmgYzLBjqkAVd1Nw1Nwtm%2FQ1MzYT%2BDsquOVvwy20g3LcsgCJZyNtnBZ2usVvPBbZfCpgo4T7SIW6OSFSEF3ODfYfSWiq2ZwYJH60IUkKA9WzhomRnvnfqzH8Lv5AyDxpsm3kAU3OXCeCvFZkM6T%2BgtaCrouK5JbulF3UvUBew01bqMYTsXjDsJ4TLkVdEEClnYA6AU14yX03%2BxhgSP5WwjnmabeSjX2svX%2Fnik&X-Amz-Signature=e2a79b4aa0b17c64d9d4daac11c230a00adcc191219d48e5f2f47d268dc76139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBK5Q4BU%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIBWTXcxbvz35KSckdWKRAZBFBhI4%2F3Bjs7mTsWwgUgxPAiBJ4mWygPLFg0EAObGLjKoqLp8gOYPBI%2BsvDAuqFw5eNiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgLVvjvciqoilUeSXKtwDAqDZrMyPl3%2FsVloEijjsSXNF7x9mkFTsLuie3OpU2HMc4aFZedwRC2I4rCGJhin103PX5oxrePQbMVwYmC%2Bttz4cFzoOptBx%2FjE6TyIDmTocDkWhTf6c3i%2BuIF0aIoxsVourGePyT5G0AqGO5ox2wDx3TN8Ymq82eCiRw3mP4lX7vzy5B3Pe7oCi%2FqoLZew9NniyqVOt8uvu1r%2BLm9mUjUyvS6ElOHxpLnrQ7YF%2BrpA4Fk%2BQbPJ4gXLsbmmLG2HVsxSmNp%2FDpMDDqmHo78nBFY96tKSvY3kFzWVWv06znob%2BfPOH%2B99ZsmsNo7y9JU25rnETwn61mh%2FOTYUcHv0KP%2FRfBOmgC6SDuwOx%2BZLgPSAXWGMOwsUsXrw0N5JkAH93Dofojg5GHk46mPye38sUBPjPK7cFyOLp%2F1sZQ6CbxOuQ9M3x9IrYPZXEYFr01594iBy9sxAl3doo7i7On%2B1iwx0esvI0Pzn2jRad%2BnAtelFdNikckpI4EHXkGxECQ7%2F29e%2BJB6fUysNrChYh6uq1RMF4XObPreAz%2Fms7IIQz%2BJ0%2FuDtBMOO%2BQsFYtjJPcVG5RDprzpbKdfqbts5CMmDaqa4WnnWL%2FAXzRavVfmz4yyYu%2FzztbFYI4TZb1oow7f%2BLywY6pgGuCWcSj8auMfDtQoJ%2F1BER8gSMscw7dYm1qQzTM4UHj7hfx%2FYSecmK3MXlHCJGmWsA533w8GsXK1x7ykrc9BtEDyA%2BvKdl5DZFJrrfBnMmdES9tHlU8mazyfdRe7z3%2BiSNN%2Fn0lRfyhVEuuYy8wvkLDYaZrLDMvCzHbLgIAHjj1hVN%2FLUcnheOvQRBjC1xmrugqMeNGssiVFGM0IxhG2NeZJuj%2FujC&X-Amz-Signature=4d463434b0dd01c02632d3091639fac748b24e12924ba43a0e6a282c214fba63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHBSVKVP%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCICyb54ke1YLhmVz%2FI9HeJW1rErhGPl63V3TRXHInzkm1AiBM6QBQSnnR0rTGSNzEH8Hxh5fsHDdYBol2%2BD13bifIOSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIGc%2B6H4TuUsv8Ob6KtwDxqX34pFVmJ2vnvSUtCwuIHKLtOMXxRtN0fJwqXNmPzW16ZvwMHSfCZta3JdZ%2FMYXtrXnsHk3iy1f11fnUIaF5S3ELdi%2F5sOPC6GEkGPLqQ7Yeysn8McGiSIIzUiOy%2Fq9GF%2BohSe%2FQenB8%2FrZWzwnN7FFbiqkJMF0EYVaaCqXze2xb3%2BgdULlUbZA8fs14wRm%2FiRAQjedz9sSZTFJPaW4iek48fyp%2FON8I8IgFuQVaYtRshWdRcKA%2F1nQr7BQhLAbt6Oq5%2Fx1QhcVjL7vBk6NKx9UZ9cYs05URJT5cqB8s%2FHLDvfMKadcCNUZnkpKdixamrYrKnT3gLVl%2BlJl5KpGJpkxhmZJeA2kSSzgMfhHXilJDfHpSuisBIDTOY1z6IZstGfy%2BJrCxvDStA0x0voXZkyAVkAXJtkbEjweqtNJrhOhvwKmJ9db6ULB7frbYmMfc7q4nj8jTQG4yx8LxtvYdN5cI03Wf6mJ%2Fyp0gU4yE3G53L1Ss%2FsKKSSlUsU0m1J9feG%2FKo5qU%2BafEbTjHQQxSANXcvCCXtV%2FBhVizt5p5En5TMI12%2B5HKkBymor0xcZbp5gA4tZXIjI1ttP1fQTZCPNl84t7KNSsEfu50hxqyE5YXkuKfkss8sSrpGQwjveLywY6pgHDDscv3vaHxpob9GE2PkuRsT9nt6lpAifKFfHITuuSPW8bXkkwI%2Fak2NOfljVZiKSlH0WRI6HS2ZSmE9MD1rFFNc0zMBdvjVRvY5iBmwzJuQY11OgdBVF72Z5qBXwoz5LKr0lyF8pxVGI7Xk7AeNclm3kYRKqiGJRBn8LwFK%2FGjhmMUYKA3rMH5QyKWU8Vv4eyUOwkFtPDeYkU8oeOTiWdyWO26LHH&X-Amz-Signature=07d6481f7be93f967d74d752a381718ead440eb2ec6be207b60c410cd850d93a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHBSVKVP%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCICyb54ke1YLhmVz%2FI9HeJW1rErhGPl63V3TRXHInzkm1AiBM6QBQSnnR0rTGSNzEH8Hxh5fsHDdYBol2%2BD13bifIOSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIGc%2B6H4TuUsv8Ob6KtwDxqX34pFVmJ2vnvSUtCwuIHKLtOMXxRtN0fJwqXNmPzW16ZvwMHSfCZta3JdZ%2FMYXtrXnsHk3iy1f11fnUIaF5S3ELdi%2F5sOPC6GEkGPLqQ7Yeysn8McGiSIIzUiOy%2Fq9GF%2BohSe%2FQenB8%2FrZWzwnN7FFbiqkJMF0EYVaaCqXze2xb3%2BgdULlUbZA8fs14wRm%2FiRAQjedz9sSZTFJPaW4iek48fyp%2FON8I8IgFuQVaYtRshWdRcKA%2F1nQr7BQhLAbt6Oq5%2Fx1QhcVjL7vBk6NKx9UZ9cYs05URJT5cqB8s%2FHLDvfMKadcCNUZnkpKdixamrYrKnT3gLVl%2BlJl5KpGJpkxhmZJeA2kSSzgMfhHXilJDfHpSuisBIDTOY1z6IZstGfy%2BJrCxvDStA0x0voXZkyAVkAXJtkbEjweqtNJrhOhvwKmJ9db6ULB7frbYmMfc7q4nj8jTQG4yx8LxtvYdN5cI03Wf6mJ%2Fyp0gU4yE3G53L1Ss%2FsKKSSlUsU0m1J9feG%2FKo5qU%2BafEbTjHQQxSANXcvCCXtV%2FBhVizt5p5En5TMI12%2B5HKkBymor0xcZbp5gA4tZXIjI1ttP1fQTZCPNl84t7KNSsEfu50hxqyE5YXkuKfkss8sSrpGQwjveLywY6pgHDDscv3vaHxpob9GE2PkuRsT9nt6lpAifKFfHITuuSPW8bXkkwI%2Fak2NOfljVZiKSlH0WRI6HS2ZSmE9MD1rFFNc0zMBdvjVRvY5iBmwzJuQY11OgdBVF72Z5qBXwoz5LKr0lyF8pxVGI7Xk7AeNclm3kYRKqiGJRBn8LwFK%2FGjhmMUYKA3rMH5QyKWU8Vv4eyUOwkFtPDeYkU8oeOTiWdyWO26LHH&X-Amz-Signature=0198a6037112e069da5d0b6e72292ed68af335db17e4e273b13e7c12ada48edf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBK5Q4BU%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIBWTXcxbvz35KSckdWKRAZBFBhI4%2F3Bjs7mTsWwgUgxPAiBJ4mWygPLFg0EAObGLjKoqLp8gOYPBI%2BsvDAuqFw5eNiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgLVvjvciqoilUeSXKtwDAqDZrMyPl3%2FsVloEijjsSXNF7x9mkFTsLuie3OpU2HMc4aFZedwRC2I4rCGJhin103PX5oxrePQbMVwYmC%2Bttz4cFzoOptBx%2FjE6TyIDmTocDkWhTf6c3i%2BuIF0aIoxsVourGePyT5G0AqGO5ox2wDx3TN8Ymq82eCiRw3mP4lX7vzy5B3Pe7oCi%2FqoLZew9NniyqVOt8uvu1r%2BLm9mUjUyvS6ElOHxpLnrQ7YF%2BrpA4Fk%2BQbPJ4gXLsbmmLG2HVsxSmNp%2FDpMDDqmHo78nBFY96tKSvY3kFzWVWv06znob%2BfPOH%2B99ZsmsNo7y9JU25rnETwn61mh%2FOTYUcHv0KP%2FRfBOmgC6SDuwOx%2BZLgPSAXWGMOwsUsXrw0N5JkAH93Dofojg5GHk46mPye38sUBPjPK7cFyOLp%2F1sZQ6CbxOuQ9M3x9IrYPZXEYFr01594iBy9sxAl3doo7i7On%2B1iwx0esvI0Pzn2jRad%2BnAtelFdNikckpI4EHXkGxECQ7%2F29e%2BJB6fUysNrChYh6uq1RMF4XObPreAz%2Fms7IIQz%2BJ0%2FuDtBMOO%2BQsFYtjJPcVG5RDprzpbKdfqbts5CMmDaqa4WnnWL%2FAXzRavVfmz4yyYu%2FzztbFYI4TZb1oow7f%2BLywY6pgGuCWcSj8auMfDtQoJ%2F1BER8gSMscw7dYm1qQzTM4UHj7hfx%2FYSecmK3MXlHCJGmWsA533w8GsXK1x7ykrc9BtEDyA%2BvKdl5DZFJrrfBnMmdES9tHlU8mazyfdRe7z3%2BiSNN%2Fn0lRfyhVEuuYy8wvkLDYaZrLDMvCzHbLgIAHjj1hVN%2FLUcnheOvQRBjC1xmrugqMeNGssiVFGM0IxhG2NeZJuj%2FujC&X-Amz-Signature=1b6d4e14c968df2139467f87e40f6ded6f494e2f15156fe2686d16cbfc0ae78f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBK5Q4BU%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIBWTXcxbvz35KSckdWKRAZBFBhI4%2F3Bjs7mTsWwgUgxPAiBJ4mWygPLFg0EAObGLjKoqLp8gOYPBI%2BsvDAuqFw5eNiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgLVvjvciqoilUeSXKtwDAqDZrMyPl3%2FsVloEijjsSXNF7x9mkFTsLuie3OpU2HMc4aFZedwRC2I4rCGJhin103PX5oxrePQbMVwYmC%2Bttz4cFzoOptBx%2FjE6TyIDmTocDkWhTf6c3i%2BuIF0aIoxsVourGePyT5G0AqGO5ox2wDx3TN8Ymq82eCiRw3mP4lX7vzy5B3Pe7oCi%2FqoLZew9NniyqVOt8uvu1r%2BLm9mUjUyvS6ElOHxpLnrQ7YF%2BrpA4Fk%2BQbPJ4gXLsbmmLG2HVsxSmNp%2FDpMDDqmHo78nBFY96tKSvY3kFzWVWv06znob%2BfPOH%2B99ZsmsNo7y9JU25rnETwn61mh%2FOTYUcHv0KP%2FRfBOmgC6SDuwOx%2BZLgPSAXWGMOwsUsXrw0N5JkAH93Dofojg5GHk46mPye38sUBPjPK7cFyOLp%2F1sZQ6CbxOuQ9M3x9IrYPZXEYFr01594iBy9sxAl3doo7i7On%2B1iwx0esvI0Pzn2jRad%2BnAtelFdNikckpI4EHXkGxECQ7%2F29e%2BJB6fUysNrChYh6uq1RMF4XObPreAz%2Fms7IIQz%2BJ0%2FuDtBMOO%2BQsFYtjJPcVG5RDprzpbKdfqbts5CMmDaqa4WnnWL%2FAXzRavVfmz4yyYu%2FzztbFYI4TZb1oow7f%2BLywY6pgGuCWcSj8auMfDtQoJ%2F1BER8gSMscw7dYm1qQzTM4UHj7hfx%2FYSecmK3MXlHCJGmWsA533w8GsXK1x7ykrc9BtEDyA%2BvKdl5DZFJrrfBnMmdES9tHlU8mazyfdRe7z3%2BiSNN%2Fn0lRfyhVEuuYy8wvkLDYaZrLDMvCzHbLgIAHjj1hVN%2FLUcnheOvQRBjC1xmrugqMeNGssiVFGM0IxhG2NeZJuj%2FujC&X-Amz-Signature=b95d04ae97a7c2dfdd0fa2d33533fadab9d19ca275c390fd2960b4a3170f22f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZT23MGN%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFxSnbLvC3kbuJIZZVR7CghzX3BAK5fnkgzKdBvArkhyAiAi9kHyFIuyhHRaxMf2ZNTbaPFn2ayPGFKi%2FTQfdcpt9CqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSUFVLK%2BWAcZSn1ykKtwDcAQZ14v8Hx6mG22kPzh2x9TAUQIzmuvwj%2FNuRAD%2BfMimt%2BmEcJESVcNgq2z9phPvLNhSNB0KJWdMEV2ngfkIcoMZf5hTLWmRZM6U1TY5rJUFKzG1SI6hQubUlJd89LdQjQQEb9Dh8RVjXxdMLjOzL4NfCs%2Boyb2hx67ZkY8oWeAQAfk2jb0j1e4VsL%2FLJMVzVfjqePOFRLg2UUcpROkxglja6nTDl0RqQI2qv7%2Fm8ugW6Il1Ia7XOxypxqY3zzgacvpbBJ6W8rF8UHKbPmLJgAE7F%2FI%2BZnPf86okhSVapp5%2FqRYqkGUA5FRFxm1m0kV7CMQ8724gmpwcGI9fc1UJ2HjpOYgvFnv5yTSyd%2BLGJZsq3zytRQsCkb8NLqAVgBY2EA%2Ff8k7V%2Bp%2BkvwVSy%2FvgWImJEeNDlcEeFGlYDiL4ghvQPskCr53rO2QXqxcWBvFayeJCg2clNLJNGpxwGgENsa2ZcHAa8BMLHVsOm%2FaeS8R94omzV8gMIo8FcdbAT2Wwo7t8K7IXeYThS1B4WMoodAT%2BBar6Y4%2FDgMpxqPCvGmhkROoh3MYcSwW%2BxKLE3Zzb5SINMYR3yz3HHJ8ljFW9GjCRmuikeswWZw1qp4XLVtbZFjOQP502lEiv48AwgfiLywY6pgGhTRwfyFoJRJJ%2FmwKWAy7iSeeDM5WUtgndSPy3JtwacfKBg66JZwtSKykaNaRdwiA%2FoQpxCk%2FYYiN%2BE1el0CSf4lTwZ%2BnaTDdlgponah5Tri3HxfKbWSBdr8UgLJ%2BNho01jIFR0Y5Aay0r5JWQnMSRNGQ5fCTz22Zui9cbKnpL9w6MHu2lYiChGW%2BAqpexvWctpOs0JX%2BS9hDzuaLOT17fGhOIG1U%2F&X-Amz-Signature=d9b9271caacde386330b16e3940f9b97cefe3a7ae323c78b23de33bfcb6116fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

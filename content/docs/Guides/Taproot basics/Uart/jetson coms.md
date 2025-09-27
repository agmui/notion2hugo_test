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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4X2N6UM%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIAyq69DXuOxD%2BAKTCwhFPw4uyvAxSMkVFzQdWZpoqtI2AiEArfiCr%2BY6gn2U34S9KzS33CyxozxQvi2NERVd3FmoLlsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEU0UdgVR0yQ%2F%2FgKzCrcAzSTlqrsSiCYmx84rO6w%2BgjDaID72Pj4BhvdhAzf1Y9hWTVbs9v0nUJnLa55bZUT%2FfDUIjWCAl8KQvJxjZFykDfydkct%2FSKyYMLVyJDDuuWTARJ%2FB%2Bfxop3StJAySbrPS2pzBLU%2BbTmU%2B2cEQb0sqO5nWZKdvFfnpT%2FDRvsO6Os2v6PI3rJn1yDNU06jK3hSXNr0aRhPMCXZjYnQTJp8QXpqWFhOZDHaP7dmHVSXbrzlRVgBvqHWzjxbt0ocl3vtF20Qs59EhXxkgEMK%2F2Fyybds4FCd0bIHHPCq81WcGajNfXaQlaUdSyk9ESTHvKGRrwNkCWHgbSgUUqJ2G5vjKbOFXnFIhRjUruJWSdJ%2BvD%2FjVrvDJIzi4PleyjJHo1t30vfNFpTj4Wc7sVmvnXDlWKyPkgUxKuBLPp%2BKyLLjgJLqCwLdQQ76NIbZ7T0IjbSQCyhPA%2Fs4CyaazsYtCuNK%2FqZ0h%2FEtygolof7h4bO6UD0BE2QZRXKBTstNv6bVv1Qrpl%2Fuo%2Fpz%2BhVClPBaMgLH3ZXgrCm4ZqKhLM%2FSd3xclem840J44L4qNFkVYsbZl6iV7L0I4ZeYhI2CBJ0BN3HIToENgHjh6koWdJssbdItlhi%2BU5wN%2BiKozv%2Flz9oUMMDn3MYGOqUB1QpyEU52z1KwfwMZbrWsVc4RDeAnCR4ES7ZoQ6mj%2F4eVgerlvvfRCXnw28KtYAWdopEhufFQ5W%2Fg8Fh0%2FEyR0xEzvpLgfRUfF%2ByrKPcCcBele7E9Vlq%2FtmEOt%2F%2FPcR7nqIOfMQAMqI6PK33vz59qzTTaY5UCNtrDLlC6Mv9%2BVtJeamBn63JwwubFsIDg22aVvr4xd2%2BCcK4v%2FYpN5RKlZp2RL5GU&X-Amz-Signature=af93089513d3de6161ca051ac3fd8ba605b4bd021876f32225043843ed88ea4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNJ74VSJ%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIA1NfFqtIatamehOMkbQVUFyjKXGfpvTbJR8sRr4O%2FqfAiAWrgCanhAj8LgzjlyPye69Lfy0A8lqFf%2FROCfHh1vM0SqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB6p6750EHzKvOPpsKtwDR%2Fr1pqed%2FygITU71J5optZPtRu2V5x5em0y%2FvKnk9cE%2B2sqk0DAK8GDXs0qfEHEd6%2FLLNWm%2FSj8iOEUxL8BZLTtf5BLr9HtOlICOSq3oCszO31ljbIQaVJ59ZS2pPP2KVfYL9T2lQn51lTq7Gnxi5JXPJFth2mGr1k0hUssR%2FX%2FFRk2rXQaH23cWQB4cwQa3Ip%2BUT%2FHoxxVSXRCE5yWuJLrpyoOOWDUfDaBPhAcF5zAyRNFFx8jPuY2eW27AVbL8K4CWIIXunh%2BgwGIr%2BcZbeyTY4LRUxl5C17j%2BdIKKfBJsVOlEMdk6V6AYZdrx%2FAbTZnCF3bXuuB6yZiXba808auL%2BgQfCDSxFPIa4fVzHazT%2B%2BqjriqSn3khWQ5Sx4iTpdGoY0VotB8UN1FehYpe0qY8XLDw9fE%2Br0RSiahn8JXiRI5q%2FsIGRrg2jZlK5k3rmMO%2BTvSYDy5N50XthwSh7%2FxO7pOXTNoxXBcvJaT3qVWkocen62y0lbPqmEE8LqJ0e0FBRpcNb%2B%2BV3s17Tirim1qWFbfwRePVxg2gaG1u%2BH5ljaf2IQnh5dBT2u67HjebtaGz%2BfHP9xU%2BvkrzaS7HcJBKxQ5it6eAvKyzATWT4sW94pLGyJVxtnCwDv98w7ufcxgY6pgHnrCQoSFajk3TS7a6aKqMmYb1qMU1TsxoVx6sOGvrCZ0beZ2gjCjwxTKy2qCYh4%2BIxL73kdY0l2yphJZuJwdOVLt%2Bz9%2BiW99xPUUJtDkHctgjvHJUvPVyzYB6fDJIosbsYkC99B6jMrVboCTEc6C8ji1x3X%2FJLkAOUUKw%2Fj3xOcVH8H2Q0yfvjCuAMWQjwRdXBtDMOPW40RgBkwFclnCxh0j6h7o4%2F&X-Amz-Signature=8eb60d9789235affa481d414238e85f8dcdc3ec200a175ff50169bb9c0ef38cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKBXY5PR%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAUQwXKLy4hKawvrxYEwL2uGVFpqENzF5zKZIGiXhF2GAiBYQMoXYExFEEgkLo5iM%2B08TdDh1FrmJGGJN6QBAtZWHyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN%2BMHTC7r2PjLaQghKtwDsQ%2BSv6Yea3RS8tFAjn4a5Jw0ksVOLj7o9%2BE0Ve9d2A18vroZ2270YSYI8XMBVbj0Ek1NPN75g%2FUm1bxarB%2FWS4QQY2DINyvcinXsMETf8BHqwWxkjrGEjXiYidRJzsUiT2X%2B4lAzNSBhqAShJm%2Bu9A0JRedp0Hb6zceStekMQB5TmPfemaBVCJLhSjAkwL5pwfVX545q8DzNEt8ENQN0oFH8oAfdWCZguWu7Qie00%2Be7FVU3uq%2B%2BQzr7uE%2FQZCaz%2FM5fq5zraHCvilM1uTs%2Bp9MhKMNTMUJZAknLM%2B6NaKd8NOBAjw4jYp%2B7A%2FwYj5m7b%2FW55jVJ9lwsYjrIFdWghKEocdoTREK0woro%2FJGDLAABGffqlaplLtsYsQqXHiPw%2Bez%2FShWAHmVYQZ3DvdxrUSGRfsxbNNDqvAAdASQJBnnTmx5ophNMepgoM4Qe2OjDVdpxaSZY3el5FybulOij%2BIRGu9A7C0vxdA3swJ5zZflEtNl4dd%2Bu6KYiJb4XfKbgZsOoeMSNuy5k6A0oOmQYQ3M11htDYNyohC%2BaelzhskF%2B4vqD4JudW97%2BSv1CY%2B%2ByefOwGO2mwrYdTixq6KJke1kiP8CGTySWwN3wPE4O8pugddWzF2xfxQWAOd0w7OfcxgY6pgGE%2FiYT8nzXJiREuTezI%2BYhSjYXlk07qDCAJJZxr7lLn9e51fBmeeF0BxsRMYNdHMHEUm6TOK77nwVp99SPDiZa9J5R3F51vFKOl0IcdpznPHYXnM%2F4LL1MlrbioxVdw6VsUEvAAS%2BMdlKI9YX5k4EqNsSqEyh9nGB1sUGQu5xBhP2N%2FwPgSdJIBIjvfNX%2BvkoP%2F4aHD0%2F1ABSip0YN8jZTpiqvikoY&X-Amz-Signature=f0a5335fb5aa28260e484e1e06c793828c24a926bdb1e24e8e598628240a1161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKBXY5PR%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAUQwXKLy4hKawvrxYEwL2uGVFpqENzF5zKZIGiXhF2GAiBYQMoXYExFEEgkLo5iM%2B08TdDh1FrmJGGJN6QBAtZWHyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN%2BMHTC7r2PjLaQghKtwDsQ%2BSv6Yea3RS8tFAjn4a5Jw0ksVOLj7o9%2BE0Ve9d2A18vroZ2270YSYI8XMBVbj0Ek1NPN75g%2FUm1bxarB%2FWS4QQY2DINyvcinXsMETf8BHqwWxkjrGEjXiYidRJzsUiT2X%2B4lAzNSBhqAShJm%2Bu9A0JRedp0Hb6zceStekMQB5TmPfemaBVCJLhSjAkwL5pwfVX545q8DzNEt8ENQN0oFH8oAfdWCZguWu7Qie00%2Be7FVU3uq%2B%2BQzr7uE%2FQZCaz%2FM5fq5zraHCvilM1uTs%2Bp9MhKMNTMUJZAknLM%2B6NaKd8NOBAjw4jYp%2B7A%2FwYj5m7b%2FW55jVJ9lwsYjrIFdWghKEocdoTREK0woro%2FJGDLAABGffqlaplLtsYsQqXHiPw%2Bez%2FShWAHmVYQZ3DvdxrUSGRfsxbNNDqvAAdASQJBnnTmx5ophNMepgoM4Qe2OjDVdpxaSZY3el5FybulOij%2BIRGu9A7C0vxdA3swJ5zZflEtNl4dd%2Bu6KYiJb4XfKbgZsOoeMSNuy5k6A0oOmQYQ3M11htDYNyohC%2BaelzhskF%2B4vqD4JudW97%2BSv1CY%2B%2ByefOwGO2mwrYdTixq6KJke1kiP8CGTySWwN3wPE4O8pugddWzF2xfxQWAOd0w7OfcxgY6pgGE%2FiYT8nzXJiREuTezI%2BYhSjYXlk07qDCAJJZxr7lLn9e51fBmeeF0BxsRMYNdHMHEUm6TOK77nwVp99SPDiZa9J5R3F51vFKOl0IcdpznPHYXnM%2F4LL1MlrbioxVdw6VsUEvAAS%2BMdlKI9YX5k4EqNsSqEyh9nGB1sUGQu5xBhP2N%2FwPgSdJIBIjvfNX%2BvkoP%2F4aHD0%2F1ABSip0YN8jZTpiqvikoY&X-Amz-Signature=60ee53d82982d04548a320b905ac67cefeafeb6485c6564eab65afbc96c8ad11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNJ74VSJ%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIA1NfFqtIatamehOMkbQVUFyjKXGfpvTbJR8sRr4O%2FqfAiAWrgCanhAj8LgzjlyPye69Lfy0A8lqFf%2FROCfHh1vM0SqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB6p6750EHzKvOPpsKtwDR%2Fr1pqed%2FygITU71J5optZPtRu2V5x5em0y%2FvKnk9cE%2B2sqk0DAK8GDXs0qfEHEd6%2FLLNWm%2FSj8iOEUxL8BZLTtf5BLr9HtOlICOSq3oCszO31ljbIQaVJ59ZS2pPP2KVfYL9T2lQn51lTq7Gnxi5JXPJFth2mGr1k0hUssR%2FX%2FFRk2rXQaH23cWQB4cwQa3Ip%2BUT%2FHoxxVSXRCE5yWuJLrpyoOOWDUfDaBPhAcF5zAyRNFFx8jPuY2eW27AVbL8K4CWIIXunh%2BgwGIr%2BcZbeyTY4LRUxl5C17j%2BdIKKfBJsVOlEMdk6V6AYZdrx%2FAbTZnCF3bXuuB6yZiXba808auL%2BgQfCDSxFPIa4fVzHazT%2B%2BqjriqSn3khWQ5Sx4iTpdGoY0VotB8UN1FehYpe0qY8XLDw9fE%2Br0RSiahn8JXiRI5q%2FsIGRrg2jZlK5k3rmMO%2BTvSYDy5N50XthwSh7%2FxO7pOXTNoxXBcvJaT3qVWkocen62y0lbPqmEE8LqJ0e0FBRpcNb%2B%2BV3s17Tirim1qWFbfwRePVxg2gaG1u%2BH5ljaf2IQnh5dBT2u67HjebtaGz%2BfHP9xU%2BvkrzaS7HcJBKxQ5it6eAvKyzATWT4sW94pLGyJVxtnCwDv98w7ufcxgY6pgHnrCQoSFajk3TS7a6aKqMmYb1qMU1TsxoVx6sOGvrCZ0beZ2gjCjwxTKy2qCYh4%2BIxL73kdY0l2yphJZuJwdOVLt%2Bz9%2BiW99xPUUJtDkHctgjvHJUvPVyzYB6fDJIosbsYkC99B6jMrVboCTEc6C8ji1x3X%2FJLkAOUUKw%2Fj3xOcVH8H2Q0yfvjCuAMWQjwRdXBtDMOPW40RgBkwFclnCxh0j6h7o4%2F&X-Amz-Signature=99e9fb90a48d650e0a0ba2c1ddc564c05b0d3177ef3e790697094192591da159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNJ74VSJ%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIA1NfFqtIatamehOMkbQVUFyjKXGfpvTbJR8sRr4O%2FqfAiAWrgCanhAj8LgzjlyPye69Lfy0A8lqFf%2FROCfHh1vM0SqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB6p6750EHzKvOPpsKtwDR%2Fr1pqed%2FygITU71J5optZPtRu2V5x5em0y%2FvKnk9cE%2B2sqk0DAK8GDXs0qfEHEd6%2FLLNWm%2FSj8iOEUxL8BZLTtf5BLr9HtOlICOSq3oCszO31ljbIQaVJ59ZS2pPP2KVfYL9T2lQn51lTq7Gnxi5JXPJFth2mGr1k0hUssR%2FX%2FFRk2rXQaH23cWQB4cwQa3Ip%2BUT%2FHoxxVSXRCE5yWuJLrpyoOOWDUfDaBPhAcF5zAyRNFFx8jPuY2eW27AVbL8K4CWIIXunh%2BgwGIr%2BcZbeyTY4LRUxl5C17j%2BdIKKfBJsVOlEMdk6V6AYZdrx%2FAbTZnCF3bXuuB6yZiXba808auL%2BgQfCDSxFPIa4fVzHazT%2B%2BqjriqSn3khWQ5Sx4iTpdGoY0VotB8UN1FehYpe0qY8XLDw9fE%2Br0RSiahn8JXiRI5q%2FsIGRrg2jZlK5k3rmMO%2BTvSYDy5N50XthwSh7%2FxO7pOXTNoxXBcvJaT3qVWkocen62y0lbPqmEE8LqJ0e0FBRpcNb%2B%2BV3s17Tirim1qWFbfwRePVxg2gaG1u%2BH5ljaf2IQnh5dBT2u67HjebtaGz%2BfHP9xU%2BvkrzaS7HcJBKxQ5it6eAvKyzATWT4sW94pLGyJVxtnCwDv98w7ufcxgY6pgHnrCQoSFajk3TS7a6aKqMmYb1qMU1TsxoVx6sOGvrCZ0beZ2gjCjwxTKy2qCYh4%2BIxL73kdY0l2yphJZuJwdOVLt%2Bz9%2BiW99xPUUJtDkHctgjvHJUvPVyzYB6fDJIosbsYkC99B6jMrVboCTEc6C8ji1x3X%2FJLkAOUUKw%2Fj3xOcVH8H2Q0yfvjCuAMWQjwRdXBtDMOPW40RgBkwFclnCxh0j6h7o4%2F&X-Amz-Signature=40cc9e7fc34f475dcae56b3936da22b60a44e1a48aa10921f2fb73a6bc47142a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657PH7LW3%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDMGH%2Fy2lYbldxSm1PerMhXis0DtHp8Ti01KmD04sMPDAiBnmzxD0hRyjOu9RCjIKL%2FdWWX%2BpPJXa%2FWk1cuPxn%2FtZCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy6EWcOfGuVgqaztYKtwDfqITv%2FaPEID8ok7qJoDO%2FRJXMs%2F3mIB2Utxn69loO%2BPXTdot7lZxGHHAexHlBZySarNiYN1Ba%2B2fnimpMh5SttBn5H8HiK1Epticu1j5V2XlT%2FJ5dXqzgIo3DC8au7GaRdkSU1ZDu0SpRq2AnZrXBT%2FdZmRXebvBDiBNapUGeWMP43rW2Jv6F09WvIiQJDLTvKk1kczZ22kWRSbkARiRoSWscS8QiatV6QmEu9AmaFgfUv6i3FtkbZvQxp65rb5sFIRagtpczhCERpp3O2q0miS8%2BDTXlJl4hnr8GR8VFB%2Fp0rORZDLAidXI3TjLQnEgz1jDnuwrX5WrKb9zGVVTYK3wh3CHHV9MgMOdsgLRfQ%2FrfvFu8HDkLJWmQTHM9SAzvF2YYQV%2Bd%2Ftv9PRDJwTlWzW2cpoFeE7jgM6HPsy1hHX0wH0m9wf%2FmJONalMcbrii8%2Fk%2BoJtm0HO7al8tqGakExfIrLrayh9aubzQNnNwAOhtEhRsg7%2BAwFTgvkj8oNHn%2B3n%2BkRvv0oxFJ3wdbmiOrLStkn%2FjoLMXy6fn4SmUh1cOODpvmnwL%2FrLvYt80CBDxeWBWrpjsmyDKqAMfYu00SwR9qc7hC%2Bs5fBLrS6ObhS7O2zcZdrW84Kh29X8wmefcxgY6pgELwYvyIe9ZOSWWTq24tAnCgLmcO7FI3347Ab05kMZzXHtiEjfSkx1QNy9nNFz1tjlJMupRIQxjLxhhICv8McC5MbQs4wx4IDk%2FWpSkQrsEwIFO3O148JlvewmAKt%2BRbyx5GV0KSWRTDaQtNpP5z610CODyxc%2BpGbwOonK2w8tYOW8ZFQ1kwMyjd7StrKq2CtlcwkqPukCcDKrvHj%2BEsFYCL3QVJ44t&X-Amz-Signature=5702c43c59a75a00e857be3adea4f61b3e8b72d2db4c0983378bf698b402e4f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IWPFZ2G%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJfLX%2FwZksq8ElXfI4GGxK0TbymQvkquicdkPgoptn6AIhALKA6m9Mrkuoigi8oYY8qBnOVklSzTpxgiS7ZiUtBMuMKv8DCDoQABoMNjM3NDIzMTgzODA1Igw3biZSp8h8m7KzkUgq3AO8SEkI6A7yFQVip70i0VaLv6JdzDTNX%2BWswIBMz0X3PFq%2FAOZRfe6TJRK%2BLjt%2BHXzXkioaPv3uwCxEBfZO7D2CTvlTU%2BmQmFqR9fExNs8Spgpw0Y0ZDuGIzaMBlttiOks%2F%2FGjQHvZbRmNzIi%2BnYKiguv%2BrxTHRETVv58nWbyDPany%2FLx3C%2F1KhrOY3l4k0WyAiNSfjhh%2Fz2sR03NwDvWC%2FKr7%2FN5GvXdyHYuuO6gQimT08AV2DbOsiQ01zOQnIvX0YQfBQinFhRnMpdtGyJU7ZDUeM6JqQjZ8nPmzOd5Fbr6LWANbo%2Fd4kjyYAser6FLNF7Z6xCU0VOZluS58psz79ASsQ%2FxYYsj9KSYKFsHazAvD2zv%2FgZ1hBuzy9dps8SHFrX4beM2TXi73wBzf%2BbmO8k1KBj%2BkjMiJTjRoBGC8gdV2I0mmOo%2FRalqEj%2FSJJZHFm6%2FiCyTDM43sqeHHfxJNTo1fOWtZy8d7MOqX1fFxn%2FHF3PgrM6Q3AOUA%2FlkT5GasEdxg%2FXWgpI2zzwOWaRLSd3ljEmPD2kWzX%2FIfgqGWmV8oEseKhcPm1e80eKdM857%2BPq5JLiusSuTvd18R4C0tckxeZOXdhNqOlu6bRvS1HNyOv4QsZ%2ByMpNVH2jDD%2B7%2BXHBjqkAepMlOnAoccvkPeq%2BvW1AchuXp6NEdFfpAuUZtnOPCiHzp5c2fxpDJtIkeYq8ipm6e8yhH8FlH0LasH%2BwnTV8rch5qIqXpOCmy7eUonnfj1cLyNOad58Pqxs%2FhG%2FQJ8fVKlDYtv2RJ3Axriq9G5iHS0eIzhFoN1CHPfBegYBs6Rg5KQ5EXP%2FUKRUcVTQZnqiSoFBfjl9JBUIZO4GlBQfK%2B9ITMkO&X-Amz-Signature=fecff4e74a1724126126442e2cc978c21438f337f019d67f16c8ca49afa40523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCB6OSO%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrJalb6m%2BFXbc8TZTu2JAIPIALBdGQH1mNrQWXaydzIAIgW0mghEeVkGkPvnuSv8T6FNQ5ekdtdjdl35BnHlKZxscq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLRssXE81sPcKVKAQyrcA0adRu33niTihR1l6a57VcFAy1GagrjxZtgw6pMMgIRMfdFZokBctjuabt6g68KX%2B7hExzECFJ1lJCD82KB2RiWhuCiFIvLNWSqmT6UmRSsf5yHY13j1K5m6Dl735pJRvX2MICKYIxpBHDSPN4tBb26Wqxgx%2FYLaSosCH4aXylRFYBBIBnV6%2B1pBiMsrx7e4xeLTgN%2B88Q6NMEuA3XqUiNcCd1b8cshwM3eaoZiaSvHIo6JPHOvJlTG8Uuwj1hzAD47WeYh5mNrDlVXeK%2FMMhjDkEO7IvrGsRy%2Bhn6NP09YFWu423hNkJM0ATMC7VSEe2bRluQwJKoBefSRewWuiuYx%2BvOc33eMYp%2Bwjv7FPUETzJiZP6BLiMeLgQ4r84ifg2epxgKs4UHCIYRXR7zGUq8g4GWtIPJIZkblZFp7QgvimZP%2F5EKXmF75YKIUFM%2FOJ9AEBQSX4IcTqT%2FXAjOb4ZunQZHy3O8%2BQX1Ad1qu1gwc0wNn%2FNKDsh%2FtvF9Q4naLQUBTQ%2BhrdtuhZn0qDBMgQ1oTexrivtDqtwqMLxfKnP8z7SuEIQxFkgkQWPXw3k5F3Vw34WtlzK0l3wVDbe3U2EzfKOoFiGROh%2FXhY%2FIPdfJZn3JI9MrYRw05X2TRNML%2Fv5ccGOqUBKWdb2DfIMp8mZsNHveIdTFR06%2F4CpMc7ccCC2jCmz%2Bde6brSpzap8zZ1roz6cXywgvlXrP2E4LSpoJLqrzgC5T%2FmaeDARNCRlRfXTUW66i9RnPMTQuVBNEh6T5niaz107tGRIIAHqvf2Pm7MMyXU%2B%2BOk1IlysxiDngyHAtceQQl2XBeiaoUAa80U1%2F5QVa%2FVz%2FmjCj%2B6Vt1RmBhUhtoN3KCuVmDn&X-Amz-Signature=9b895039e474c5e9a1ead481775db0f1f5a73d44f26a8c4ccebf389719e48a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYVXW657%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7s7L4JF7%2FdmHoiFfVhISga9fn8W6QRzLS7updgH4nvAIhALN68awH%2ByIlOi3iE7x3RDEUREl7juuvRKWMPR9x%2FrJnKv8DCDoQABoMNjM3NDIzMTgzODA1IgypZHghS50MbZGsvsQq3AOVlzu56x0aj17%2BVBdUz6ipVY0clqALvUi%2BTPitl1jnKDXp51ZkZqSsrt0VWfryTAObmjT2ZGQ8qDW82izMvVRAfsFsy4U6p9b9fm%2FlJDbUhO6lhnypiWshIpe2LyHAvQyoWONajKg6CsHF8%2FKdovC3%2BduqdGR%2Fi3f0c7zKj8AfIcLt32iuX%2BVC1eub9vwxJ%2F58awgc4ew1IYq30rvyUMtw8CsYWbxSE95IGqHAN5dSg%2B4GBDD8ATnBBrenXC1lsaERo9MNr6szIeQXSJ%2FB9tLM3e5MpkDs1AzLWvSU%2B433KTZinllQBTcH8ul7kbdFkhq7KyGiQHdJH1Z4qJ1x9CW%2FD4vFci809cw4JNjEyaw11tYlqAUQmAbOxGopuZ%2BwXbrulueXdK%2FSr2knUeG1%2Fl06IYkgA12722eRNlJZTZJG6LyuUuUqjo9NQ0DSfOyU1k5oZPYcJqY2y8pG1xGtLTc4UcYYf%2FoOi5wQASVm%2FFFhNEk6NY6gogE8s1WnabpYtr%2BSjfVYDXM2HpfwzMGKdcOpa%2B76G0B9j7ED8tdlLkUJVRS%2F8opFMbw9%2FRKpJI1I%2BfR2ggRQ4NrG7e20ljuN0nb4oDGjkf7R68Ul9cbDjwVDe1VbHU7NjOTyejbnRTDq7%2BXHBjqkAb%2Feqkez9kMOEO4ZdJxN1n4YItrxuY8sIEMh2qZ9xf8cGpH%2BV5jBK1cXlVwkbeDmsWl1Na0zrGBVDx41TRsN8DH9IXuO8VduKrcA8g%2BF9EhHN7E6VfDubaSGe16IOC8RVOm7w%2FuwfvLnWbeffgRLSjjnJohxSz%2BNsBdONmY%2BSIaHXGQ6i4Gbx0dBnBm1FxTOg%2B47bzhAeTSP0UzZbqPMYKelVhCw&X-Amz-Signature=8068bc511c49bda34884a3953d5447ee15c1cfc7bab1b9c49f8227f4042b52c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYVXW657%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7s7L4JF7%2FdmHoiFfVhISga9fn8W6QRzLS7updgH4nvAIhALN68awH%2ByIlOi3iE7x3RDEUREl7juuvRKWMPR9x%2FrJnKv8DCDoQABoMNjM3NDIzMTgzODA1IgypZHghS50MbZGsvsQq3AOVlzu56x0aj17%2BVBdUz6ipVY0clqALvUi%2BTPitl1jnKDXp51ZkZqSsrt0VWfryTAObmjT2ZGQ8qDW82izMvVRAfsFsy4U6p9b9fm%2FlJDbUhO6lhnypiWshIpe2LyHAvQyoWONajKg6CsHF8%2FKdovC3%2BduqdGR%2Fi3f0c7zKj8AfIcLt32iuX%2BVC1eub9vwxJ%2F58awgc4ew1IYq30rvyUMtw8CsYWbxSE95IGqHAN5dSg%2B4GBDD8ATnBBrenXC1lsaERo9MNr6szIeQXSJ%2FB9tLM3e5MpkDs1AzLWvSU%2B433KTZinllQBTcH8ul7kbdFkhq7KyGiQHdJH1Z4qJ1x9CW%2FD4vFci809cw4JNjEyaw11tYlqAUQmAbOxGopuZ%2BwXbrulueXdK%2FSr2knUeG1%2Fl06IYkgA12722eRNlJZTZJG6LyuUuUqjo9NQ0DSfOyU1k5oZPYcJqY2y8pG1xGtLTc4UcYYf%2FoOi5wQASVm%2FFFhNEk6NY6gogE8s1WnabpYtr%2BSjfVYDXM2HpfwzMGKdcOpa%2B76G0B9j7ED8tdlLkUJVRS%2F8opFMbw9%2FRKpJI1I%2BfR2ggRQ4NrG7e20ljuN0nb4oDGjkf7R68Ul9cbDjwVDe1VbHU7NjOTyejbnRTDq7%2BXHBjqkAb%2Feqkez9kMOEO4ZdJxN1n4YItrxuY8sIEMh2qZ9xf8cGpH%2BV5jBK1cXlVwkbeDmsWl1Na0zrGBVDx41TRsN8DH9IXuO8VduKrcA8g%2BF9EhHN7E6VfDubaSGe16IOC8RVOm7w%2FuwfvLnWbeffgRLSjjnJohxSz%2BNsBdONmY%2BSIaHXGQ6i4Gbx0dBnBm1FxTOg%2B47bzhAeTSP0UzZbqPMYKelVhCw&X-Amz-Signature=89874411d76bbc32b4639098ae59f29c8f0166696963f5d1ea1d0aaa229d64d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCB6OSO%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrJalb6m%2BFXbc8TZTu2JAIPIALBdGQH1mNrQWXaydzIAIgW0mghEeVkGkPvnuSv8T6FNQ5ekdtdjdl35BnHlKZxscq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLRssXE81sPcKVKAQyrcA0adRu33niTihR1l6a57VcFAy1GagrjxZtgw6pMMgIRMfdFZokBctjuabt6g68KX%2B7hExzECFJ1lJCD82KB2RiWhuCiFIvLNWSqmT6UmRSsf5yHY13j1K5m6Dl735pJRvX2MICKYIxpBHDSPN4tBb26Wqxgx%2FYLaSosCH4aXylRFYBBIBnV6%2B1pBiMsrx7e4xeLTgN%2B88Q6NMEuA3XqUiNcCd1b8cshwM3eaoZiaSvHIo6JPHOvJlTG8Uuwj1hzAD47WeYh5mNrDlVXeK%2FMMhjDkEO7IvrGsRy%2Bhn6NP09YFWu423hNkJM0ATMC7VSEe2bRluQwJKoBefSRewWuiuYx%2BvOc33eMYp%2Bwjv7FPUETzJiZP6BLiMeLgQ4r84ifg2epxgKs4UHCIYRXR7zGUq8g4GWtIPJIZkblZFp7QgvimZP%2F5EKXmF75YKIUFM%2FOJ9AEBQSX4IcTqT%2FXAjOb4ZunQZHy3O8%2BQX1Ad1qu1gwc0wNn%2FNKDsh%2FtvF9Q4naLQUBTQ%2BhrdtuhZn0qDBMgQ1oTexrivtDqtwqMLxfKnP8z7SuEIQxFkgkQWPXw3k5F3Vw34WtlzK0l3wVDbe3U2EzfKOoFiGROh%2FXhY%2FIPdfJZn3JI9MrYRw05X2TRNML%2Fv5ccGOqUBKWdb2DfIMp8mZsNHveIdTFR06%2F4CpMc7ccCC2jCmz%2Bde6brSpzap8zZ1roz6cXywgvlXrP2E4LSpoJLqrzgC5T%2FmaeDARNCRlRfXTUW66i9RnPMTQuVBNEh6T5niaz107tGRIIAHqvf2Pm7MMyXU%2B%2BOk1IlysxiDngyHAtceQQl2XBeiaoUAa80U1%2F5QVa%2FVz%2FmjCj%2B6Vt1RmBhUhtoN3KCuVmDn&X-Amz-Signature=f656d2fbdae1fe6340ab72a529de9f3d97fadbd7173bc1d79f3ebf21c1738493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCB6OSO%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrJalb6m%2BFXbc8TZTu2JAIPIALBdGQH1mNrQWXaydzIAIgW0mghEeVkGkPvnuSv8T6FNQ5ekdtdjdl35BnHlKZxscq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLRssXE81sPcKVKAQyrcA0adRu33niTihR1l6a57VcFAy1GagrjxZtgw6pMMgIRMfdFZokBctjuabt6g68KX%2B7hExzECFJ1lJCD82KB2RiWhuCiFIvLNWSqmT6UmRSsf5yHY13j1K5m6Dl735pJRvX2MICKYIxpBHDSPN4tBb26Wqxgx%2FYLaSosCH4aXylRFYBBIBnV6%2B1pBiMsrx7e4xeLTgN%2B88Q6NMEuA3XqUiNcCd1b8cshwM3eaoZiaSvHIo6JPHOvJlTG8Uuwj1hzAD47WeYh5mNrDlVXeK%2FMMhjDkEO7IvrGsRy%2Bhn6NP09YFWu423hNkJM0ATMC7VSEe2bRluQwJKoBefSRewWuiuYx%2BvOc33eMYp%2Bwjv7FPUETzJiZP6BLiMeLgQ4r84ifg2epxgKs4UHCIYRXR7zGUq8g4GWtIPJIZkblZFp7QgvimZP%2F5EKXmF75YKIUFM%2FOJ9AEBQSX4IcTqT%2FXAjOb4ZunQZHy3O8%2BQX1Ad1qu1gwc0wNn%2FNKDsh%2FtvF9Q4naLQUBTQ%2BhrdtuhZn0qDBMgQ1oTexrivtDqtwqMLxfKnP8z7SuEIQxFkgkQWPXw3k5F3Vw34WtlzK0l3wVDbe3U2EzfKOoFiGROh%2FXhY%2FIPdfJZn3JI9MrYRw05X2TRNML%2Fv5ccGOqUBKWdb2DfIMp8mZsNHveIdTFR06%2F4CpMc7ccCC2jCmz%2Bde6brSpzap8zZ1roz6cXywgvlXrP2E4LSpoJLqrzgC5T%2FmaeDARNCRlRfXTUW66i9RnPMTQuVBNEh6T5niaz107tGRIIAHqvf2Pm7MMyXU%2B%2BOk1IlysxiDngyHAtceQQl2XBeiaoUAa80U1%2F5QVa%2FVz%2FmjCj%2B6Vt1RmBhUhtoN3KCuVmDn&X-Amz-Signature=118ccaf9e0d6dcebd6ccacc85269651647a68edba4aa0c07045d429a935849a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BVU2ZU6%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoK5TzcPKERIeZfRFw9%2FfVLScyCSxhGoN1WRW%2BUpFb2AiEA6DexLZxWRnbTgaPUtE%2FtXHH267CAkrCNg9%2FD53Z6ZTUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCIXuAAq1zfk7Ad7DSrcAzxJZ3Jy5yMgMc1X3oz6cxEG1Sdl0jSLitHas9k7ydT7yAC3Miy%2FDoM4aUsfPofgimxCVONgJgYddXuYV6VLYEspt3vvq%2FMUh0MPoKBJN%2FHSeUChh5mMAk8nTKmExa0K7r%2BCpkpX30nKPtgiYqRA6VaBmC%2F26lxPi9OelkJHUMA2ZGg%2FOy8ehp0VZaSYioFql7QsCmunSOR59gJwJElRaa9fOuABU8V%2BQEQJeYI0dAW4sgMsuCybwIsxUCiGmcy4em%2FNBF7Do3D7SrlfspFlQbY4XcZmxTon4vZriIM6u9ZYiDqN6cP7yBGMMkOQNoXMIRYc38nuIUCNYM1ucNSia8spf0oSuAv1lQGKTG6EJFXBQsp0fDE0MogjIg%2Fo5MATxrzBEK7MVHo8BXJ8WijnmYk9xdEDga%2FP3fWDLVNQdnAO9fXTQyHXR00uIgygDuNmZjaBwgtfc5qijEKcUc2Ayx7%2FZr3FVchyrGqd3rAcywvO%2BuNhA86AcXzPYPyGCVulATfYxteSeamVCer7z49k5LDUqq9rjQDwl6Fo0r7fQKCYuSybBbzJhsBYVrGVbXiq25eqkhOgSey5tN2X9VBo44n0RkLxnbg1JrjJ5wu3DkCLXTLTZbdAhZMd%2BiyGML7v5ccGOqUB3AmmMRNPFx7WNa6JPV3FqFjzLFRRNABv057QQ5lrg6dTWg80GhEXtyRs4R5KtuHmq4WtrfUOHkcqbEDXUxlErn7mZqZumXXHsqFR8nx2hpjQm%2BRbmjq1U8ndSILOzyc%2BjV1veEzejV2O8hdW9ClpFH901ieZqAGiG38Xg3Xe6k4hn2CfiLXGFfSRB68KxKACzzt7SA3goB4ZQWMpn8o7seyncgVU&X-Amz-Signature=ed009dd8104b50ad4f071b8f7cc6b835eaa2c9a10ee604a5d9f928061591cf63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JEDADIQ%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqHr9oO2tiCjdFNYpAqFYtx%2FRSlEj9BFT5d%2B6n0WyLrAiAOGzeSHd2Fs4tKE%2B9ApmQA4ySpdF6Sr6Jl5RZav%2FRtIiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnX6Jq5Uk1QPzhUhMKtwDPIC1FYDa9sUJbKis0xTJsD5mN6xZ9rW%2BmOrbfM0eckwziSSr0m6a%2BiZ7U146AuHRUJZEUi%2BT4NP1piU3J2wnm%2BC3A9KsWIVmaXDcFlyFI8BZcn4I8rF3Pij2uDZDGp9ggc3HEBqKiWBQQ2a5SX7ZueObIpFnkkF6bLZICZGAgwdmDxtAXek7GdRfy4lLxcQJMZBHADwyNpTqEm9FF4MinozvdriTQKtY8%2Fd71el1%2BwokP2KxRMJEt%2BPm%2Fgsq31EW3Rwv2MBlmYWsjzayjh81lPVcuzhtJUhMU%2BtXQlRMcVyPZ%2FgfD0CSrFwkZKDLaPYQ4WCXh91HTL8vh606ZXTgP0brAeTWKLpC4sDxyY1FWi3Bs%2Fkxf3ulO%2FoHNrZwf0jKDnlIQQGN6rZ7AfWf%2BpYgrz744oLXrEvgJ6tzFcPmzUReEYhICYEQcqWta4Do0XRba0kbksL5R0R8xux3qU%2FMz4r0yegxJ2TnU2kva6%2FdT4XYkO88susABNDvLFq4832gtGSo8yBQitb9dZVn5FawO4T5FIg%2F9mhdo%2Bza603OSEw7gV2Puo9KYgKVkl9kQnpiZNgOVJeFuEvjqsPzB3VxbgdooxO%2Bmf5O92LGGpIk7uhmZw4gN%2BPEdNCanI8wkenu0wY6pgHV95wwRGdl1AxJYnF3d7cGh7U%2FSz6yHCk5TPWUqlH2gv4iTMZePu8Kd%2Fy%2B%2FgCoUpGkHHwinM9Da66ONo6i74%2FKB5ZLHuWZxN5r2sBVbfGVexRXYJ8LWsOfRrMlzFaMvZhthOvG5umczmhRh4EYBEmkmwe3A%2FaLZ9VLttr2HSPSWVyiIXw6QwLTaMOXKqmmJwzBhR7SG%2Bl3dc1vRTXiTJoYweGKeQBc&X-Amz-Signature=1c98494a456aee110cc543cfbfcd8c7972cb97507c0c05cdcbd6e252a2113155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WWUCBJP%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL0Hkos%2B0MzOmjHmdANT59hNhzPhqw17G1bAEBUbDCEAiBCEOhiydQMNyx8pAzcnc%2B%2FA8%2FOsdXckAGedEGiwpQnvyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMde1Qa%2BSOqdDrn%2Fe2KtwDkff2VHoQ01JXSKP23QDFxWeDqcz3tJ%2Fi4gcenpna14yrbzNWDr5lXG%2FxDIw9%2B0tNQoFBMIFvMduXAkjfCvrc0WvRguaIjp1tADwuH8Iq1PsY0N9WBLzlwvDA0ZTttojpmUUAeild1Kf1WFyzEHg%2FJ%2BWot9Y9NNvGZQJvqKOXapw10GzH%2BV3oYcfE5lQIeo8zPHL1ZnNtfmtUPYmHsqwIf8YqtXtZCAxXcJMq9imZy%2FXzB3zQomJ5UuTjvZFo1flGmUwX3Zl9cMjbgfbLkgGsDy26dxc6aY24rCMOobTyqwY9xiEmg%2FXRnhJArT%2BogYK%2Bf7gWlVSrKnDZEQs5PMMqgdDAQOh1HNvA%2BVHjaKmysLbBOWOBYZRqCXWQd9GysNlron7f6GhjuXeu%2FOQ0TFXjjQ40Gpll2zmNgbW5VqWFgVDNltC5H1SH15r%2BV3GZtgXs2tFxFOzi60f%2B36rm6IUggvRavdVttRnx8deZJk96B2nPg6Ii9seP73SlIO93M8LJXi%2BQzAsR8SrfwdC0Isd%2Fg%2F2N2cyBq7XmRIBHvcRSTrxgDlKM2qZJwFVWoWDn3R%2BmwLM80bNhwdY7McyP6JvYQF%2Brcjhjqym1SkrtHA1nS0Zbl75TogxaDWMsms8wnenu0wY6pgF%2Fe0mDZOr7DIGJkCl58IuPcpMgCQOdzG%2Frvef9brviDOy1c42IkJJ0XPIa9Yu3ovNavE9DsVBui1jz49ChH2zg%2FFR1aZpsDlyEwU3YjLYBHX%2FeEO4h%2FirbJtXfk3cUPPVwd1mXWowQ11rV6wQZcAOBRwf5v28DFbnClKCvMw1DGQzn%2FFQbC2cDQl1bI4uh1Bey8Ccuz%2FiWaHFv1ORf17Esh2FDhJbX&X-Amz-Signature=cbb131587dcfce18ddda0169cddb19c72ae9280bb3140e2e06230ac05de91529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTC3M2H3%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfGjoV%2FVP%2FzkE%2Ft56NRdvVJq4SyDDVw%2F7NjDLiZvfZLwIhAKZb5vDkWqGVpihDHONvTLXg%2FhEaQFIGRUfFIAvENWMbKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxik%2B9vQQfcRMyIhpoq3APaHr7zl7hGqHzGHj1RNwJzKz7R9CqaLy2DoBy8XR73d3PJsuimDa1AqBjFh6RdPs9kLGd7oHNwK5bziLgd6Nc7edQclHivgRE4z%2Bl%2FxlC0B8hCZ4bpXzHF9gRt5dxCqcza4NJ%2FaDitSBuuShmWfEXR5euSf1eMHfvFH4iUg4CkAJMLsc30F1uYXcFzg0%2BZpVKZID00JRhBWb9a046gDV1X94gGDas8KMxvXR4xk39B3JttZtGz3YhScEI0bYKKG9mO8pU2bSQYq6KLn7e7n3dMYO%2F0LZhEiljIVel6%2BD6tZ0plJBL4d5QWJuSWXwFYtNAlLADtd4UQd9%2F7E6chHx226EtQIKbgitBmqZM4yjtnGku3R3cLV5ebb4D6Gxz0IHT7BgGj%2FsnvCja3QqgdrJAXhFsb%2FlFUZ9Ncfv%2FV%2FpoKTddiedmRxuFV%2F%2BKPgtMp7hQ%2FMIq4Hel8cfcv1kfry3MvV3IN5BCQbUv59VMvtRcYiK0lUFcU60hMIuWReMyTeoX2HPoH6mvrfStsktkZ1E6Xfi9NAFVdjYRX3b%2Bj3CHE385LGjYoV9p%2Fy%2F%2B1TwRPDKnv2aUcytythZ1xTkAPQ1b4CHynWh%2FNfJ4Wwh2vopGFSngTW9Wp%2BOpFl%2FlSqzDf5u7TBjqkAREHMQR5aS4N2KQ615hajfZTtXtVtJo6fgS1LaOhAoqx0iTPEZkUR3f9QzlE5LhrOQ62r0WZz8WrWgsLVK9wm9FJfpC3Y%2BPX0Sv25RDBVuZVWudEufWtp26VlGYuukgSe8zuW3rUHtYE5o8MUdmFHXFCse05xNL1XMz2GsPMFtbKRwAksMJYacZuC0NUf69rRxj4BXg3EeiVPz31iZB7tNSY3RSD&X-Amz-Signature=555a50db84938f3a786c4978185d7389e722db1d7a193d44a672451bec4940c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTC3M2H3%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfGjoV%2FVP%2FzkE%2Ft56NRdvVJq4SyDDVw%2F7NjDLiZvfZLwIhAKZb5vDkWqGVpihDHONvTLXg%2FhEaQFIGRUfFIAvENWMbKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxik%2B9vQQfcRMyIhpoq3APaHr7zl7hGqHzGHj1RNwJzKz7R9CqaLy2DoBy8XR73d3PJsuimDa1AqBjFh6RdPs9kLGd7oHNwK5bziLgd6Nc7edQclHivgRE4z%2Bl%2FxlC0B8hCZ4bpXzHF9gRt5dxCqcza4NJ%2FaDitSBuuShmWfEXR5euSf1eMHfvFH4iUg4CkAJMLsc30F1uYXcFzg0%2BZpVKZID00JRhBWb9a046gDV1X94gGDas8KMxvXR4xk39B3JttZtGz3YhScEI0bYKKG9mO8pU2bSQYq6KLn7e7n3dMYO%2F0LZhEiljIVel6%2BD6tZ0plJBL4d5QWJuSWXwFYtNAlLADtd4UQd9%2F7E6chHx226EtQIKbgitBmqZM4yjtnGku3R3cLV5ebb4D6Gxz0IHT7BgGj%2FsnvCja3QqgdrJAXhFsb%2FlFUZ9Ncfv%2FV%2FpoKTddiedmRxuFV%2F%2BKPgtMp7hQ%2FMIq4Hel8cfcv1kfry3MvV3IN5BCQbUv59VMvtRcYiK0lUFcU60hMIuWReMyTeoX2HPoH6mvrfStsktkZ1E6Xfi9NAFVdjYRX3b%2Bj3CHE385LGjYoV9p%2Fy%2F%2B1TwRPDKnv2aUcytythZ1xTkAPQ1b4CHynWh%2FNfJ4Wwh2vopGFSngTW9Wp%2BOpFl%2FlSqzDf5u7TBjqkAREHMQR5aS4N2KQ615hajfZTtXtVtJo6fgS1LaOhAoqx0iTPEZkUR3f9QzlE5LhrOQ62r0WZz8WrWgsLVK9wm9FJfpC3Y%2BPX0Sv25RDBVuZVWudEufWtp26VlGYuukgSe8zuW3rUHtYE5o8MUdmFHXFCse05xNL1XMz2GsPMFtbKRwAksMJYacZuC0NUf69rRxj4BXg3EeiVPz31iZB7tNSY3RSD&X-Amz-Signature=1a94582b8ed6090751aefb3a96a722dc13f16d71c9b66902e5019dc18fde511e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WWUCBJP%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL0Hkos%2B0MzOmjHmdANT59hNhzPhqw17G1bAEBUbDCEAiBCEOhiydQMNyx8pAzcnc%2B%2FA8%2FOsdXckAGedEGiwpQnvyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMde1Qa%2BSOqdDrn%2Fe2KtwDkff2VHoQ01JXSKP23QDFxWeDqcz3tJ%2Fi4gcenpna14yrbzNWDr5lXG%2FxDIw9%2B0tNQoFBMIFvMduXAkjfCvrc0WvRguaIjp1tADwuH8Iq1PsY0N9WBLzlwvDA0ZTttojpmUUAeild1Kf1WFyzEHg%2FJ%2BWot9Y9NNvGZQJvqKOXapw10GzH%2BV3oYcfE5lQIeo8zPHL1ZnNtfmtUPYmHsqwIf8YqtXtZCAxXcJMq9imZy%2FXzB3zQomJ5UuTjvZFo1flGmUwX3Zl9cMjbgfbLkgGsDy26dxc6aY24rCMOobTyqwY9xiEmg%2FXRnhJArT%2BogYK%2Bf7gWlVSrKnDZEQs5PMMqgdDAQOh1HNvA%2BVHjaKmysLbBOWOBYZRqCXWQd9GysNlron7f6GhjuXeu%2FOQ0TFXjjQ40Gpll2zmNgbW5VqWFgVDNltC5H1SH15r%2BV3GZtgXs2tFxFOzi60f%2B36rm6IUggvRavdVttRnx8deZJk96B2nPg6Ii9seP73SlIO93M8LJXi%2BQzAsR8SrfwdC0Isd%2Fg%2F2N2cyBq7XmRIBHvcRSTrxgDlKM2qZJwFVWoWDn3R%2BmwLM80bNhwdY7McyP6JvYQF%2Brcjhjqym1SkrtHA1nS0Zbl75TogxaDWMsms8wnenu0wY6pgF%2Fe0mDZOr7DIGJkCl58IuPcpMgCQOdzG%2Frvef9brviDOy1c42IkJJ0XPIa9Yu3ovNavE9DsVBui1jz49ChH2zg%2FFR1aZpsDlyEwU3YjLYBHX%2FeEO4h%2FirbJtXfk3cUPPVwd1mXWowQ11rV6wQZcAOBRwf5v28DFbnClKCvMw1DGQzn%2FFQbC2cDQl1bI4uh1Bey8Ccuz%2FiWaHFv1ORf17Esh2FDhJbX&X-Amz-Signature=bcf85d8b3ce36c30ee68c40c5b3f6299b9dc0a5170911ad7ecbecf8d46497463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WWUCBJP%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL0Hkos%2B0MzOmjHmdANT59hNhzPhqw17G1bAEBUbDCEAiBCEOhiydQMNyx8pAzcnc%2B%2FA8%2FOsdXckAGedEGiwpQnvyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMde1Qa%2BSOqdDrn%2Fe2KtwDkff2VHoQ01JXSKP23QDFxWeDqcz3tJ%2Fi4gcenpna14yrbzNWDr5lXG%2FxDIw9%2B0tNQoFBMIFvMduXAkjfCvrc0WvRguaIjp1tADwuH8Iq1PsY0N9WBLzlwvDA0ZTttojpmUUAeild1Kf1WFyzEHg%2FJ%2BWot9Y9NNvGZQJvqKOXapw10GzH%2BV3oYcfE5lQIeo8zPHL1ZnNtfmtUPYmHsqwIf8YqtXtZCAxXcJMq9imZy%2FXzB3zQomJ5UuTjvZFo1flGmUwX3Zl9cMjbgfbLkgGsDy26dxc6aY24rCMOobTyqwY9xiEmg%2FXRnhJArT%2BogYK%2Bf7gWlVSrKnDZEQs5PMMqgdDAQOh1HNvA%2BVHjaKmysLbBOWOBYZRqCXWQd9GysNlron7f6GhjuXeu%2FOQ0TFXjjQ40Gpll2zmNgbW5VqWFgVDNltC5H1SH15r%2BV3GZtgXs2tFxFOzi60f%2B36rm6IUggvRavdVttRnx8deZJk96B2nPg6Ii9seP73SlIO93M8LJXi%2BQzAsR8SrfwdC0Isd%2Fg%2F2N2cyBq7XmRIBHvcRSTrxgDlKM2qZJwFVWoWDn3R%2BmwLM80bNhwdY7McyP6JvYQF%2Brcjhjqym1SkrtHA1nS0Zbl75TogxaDWMsms8wnenu0wY6pgF%2Fe0mDZOr7DIGJkCl58IuPcpMgCQOdzG%2Frvef9brviDOy1c42IkJJ0XPIa9Yu3ovNavE9DsVBui1jz49ChH2zg%2FFR1aZpsDlyEwU3YjLYBHX%2FeEO4h%2FirbJtXfk3cUPPVwd1mXWowQ11rV6wQZcAOBRwf5v28DFbnClKCvMw1DGQzn%2FFQbC2cDQl1bI4uh1Bey8Ccuz%2FiWaHFv1ORf17Esh2FDhJbX&X-Amz-Signature=60e025c35ee3be9aa466701c27bf50c17364ebb6f9b1027ab987e19d7c6c9eee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466347ECK3Y%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGslcg5Eshg%2B2EaDvHxWNW35xCEmLMqRZnGTGX1GybewAiEA3d0xx8TvVBeAaTbjYcteogjvb68ATi4TspfH73NSQ0EqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKDFJrIbfetC2IhFGCrcA9B0virLMlNQTQzqar%2B999drIBFAYTSeneoF8Yp92KcUnXkX6ryOSM20GZ0I630YW5xbZRcckmO9nuUwSKorh7XVfOhPoEQPc1hhTweQ3ZDkh4dZFRehtv7OMxqfBME8BnbUdcWge%2FkhtM0Zp8ZkldmMOQJZTa%2F8WsNn1DI0CXsF9O1FltiQs23ruTFTs1FYQg7wUvLyDg1caGEekVsNXntG6%2BY2AGt%2FW9BdmWxyvCdqFm7SX4D89n%2BenInKLN5ru4R5r%2FlA326Y4oppeGrQnbckUcri%2BvhNAkapylE1KMob18w7AbdpFlGsyr1q44Sewqzo1gQ58bVLi%2BimVxl5OjcPvjpCxL5qS8zTQ7nk1gh4vYb0VYhOQ8eAY4HWZbiCWuPbD8gIeioCVpQH7OeoRj6Bw0jhr%2Fajg0ddMfw2c589Hy6WzZeOAFyzB7TaLs1csgRIaBo3QXKVJ%2F%2FSD5iLkve9NTgJ4D5VQ%2FGi2AJoixoG5fq6dDCPRF6%2FILCMPOXjzf9uqCjLMz9nz28UDFVbhceclBKOe99r8MDqfL00fsJjdFf8k%2BObbsf5QeCsu6QREutRYFdHxZoKE4ZUh4%2BTPPxxrnYL0X01qRVaSVOzCVPxtsKwAX9%2FGBzGBZQ7MNzn7tMGOqUBwY5rceI5DJeP%2FwsQ5rHTU91%2BcKC%2BpHL5suuDuShKUvTPTr8L71ORyqnYztNuheAnVf7PIp2vX%2FEXUyxDt44xBsv3e8X0guL6TtV7G1WPg6dRCWbQMqyx8F8B70tg82wsOctzN0ZSl09uDunSF93OurVrrRfFybKJmepk%2FWByuhV2U9n1BnKrbz61T3HR37a5TL9vjPuqBJGa2GwqRtVL8bA1rqUV&X-Amz-Signature=ce0f1868f668865a65edcdc1af56a972e121ecf4afffe34e97b478d8443c5c25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

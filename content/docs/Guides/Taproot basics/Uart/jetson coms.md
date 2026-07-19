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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMPBBOM6%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYKJD2Wgcj9Ng%2FCJRVsTpVQnCa6i2qi9ceKN3bmILZPgIgPQLw%2FCboTsWrcF6UdbWuOdPvdxNBbKPdr7PdXj2ZrQIqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjm%2BfR6l%2BYfS0Vf6CrcAyuK%2FPtMVj529s40OSAKKHk2m2EOoeclK5ApB2P2OJilpI%2BsXRG%2BQShtKTTdRqasJv5q7YiyyclNmsmnVYmFSA%2BZNIdi%2BURwn6vmh%2FumxHAARkNxCbogJap67gHQU42e4O4GiQJQeDEHL7ota7YSvwvjE%2FyqyJK1YJEDbdcbgKmsKtdUaPcOk6h%2F3qnI8kwX5etZx69n9lvqDmdnFIhqeKSEwROfjrEy%2FHMD5F%2Fn9lQaZ4Z6x35eokUqMglsPCOW%2F9j69G%2Buf7SKd9HYPzcsCwLOyttzGGlH%2FDsYoqUlEGG65U1dE4Pfp4tyJEqnsL9Xfzv%2BgxcX8%2BBPXsB3BVCFWEX%2BXtGXm2xDmhJgMqznbHNg2VxRMNrNZW8bxP0EIMBycBMjMrnWdl2D9tRKDtLIoeVP5sldPpQMny6ddwphtM3tjBiXVOlAnJxA2YsqNaQBljVxrllcWitNFhxrIGKsmkaELUYYbjUdTWm9XgtZ3YphN0O8xJC5gXeqt%2BMQCDfMt6QOGq%2FWl6QzPtr09sQvYvZWwXiyr%2Fp27yeR0NgQKo9biyh%2B%2BOxhMjYTm8j8CjkESV0Rt0MK2jV1eVr0zKhturADW98UqEk%2BejMxMfMSznIRSHBerYEA5Gc%2B6%2FgtMJzY8NIGOqUB2Bv9ebeye1y0S%2BQ0uBqhADxsDPSbk7wHP8XozEP%2BxWrPZ566fwkj3qHqBwvv8%2BD2bS3eVv95lzDsAaDYtbtzFE2aLhLZaS4AMRtDp3jI5%2BqXv%2F0rRFauyCQRuOEk4wftPe5DL22DRlvmZ%2FsvOKsMsbzmdFzqSZTMo7rzZHHTn0E6xYkh81dE6gKiRz35PEQroWth35IclfoZW27nF41dTo4EXK5f&X-Amz-Signature=2b22dc08a2f805d51585b96ab33076d71364510861bd8fe8b6c9e2e032f3f4f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKGA5TTD%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4apiUWaREgcUrZ2DVpozN4kxN%2Fo45bevGRO0ZRkGBlAIgZmCSVgxLVDd2lhjhFI86WYLvaqkBkOaJuRbZJPESKUMqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBFZOOj39kSohjCyyrcA9Q%2FWXlVeAoMg2ZgwQGnKHBDUGIwRnzOORAK5G3VQq383J5zk57h7Hj%2BjU2cTR7eajuC%2B5r%2BiKfrJ0uuR2qBOnLk9YDPR4uX1YiFBMxet4xlMEePMM1j9lbmsRFSZrKKFIVixSaqDmUT%2BvMS9PKoyS7WuCuKmXnovFIXqB2m47bn%2Fgnl8ivP1K75vcSpHXbIqcSTB4X0cBwjplkFp98T9hbZBZUBC0gJf1DC%2FYfsuQ7tn1HpbjXKq8MeNsJbMw3t1ygTEzhMI2%2B8ywPYapqL84qeKZi%2BIA6dV3kI40Ts1tmVUwDPrZxt7uwSqt0%2B2aHnjx85qDwV5dOJyBkcqMdIi7WXnIuLA2Tjc0Di0DowNJNGknIm1Xq9bTg36UdcFyQvEUABhdg9MV1GM3KMD47YehyvD53zcqAQdIhQUPSMuXSg5pgBGb5xi%2BXL1dCaxenq%2B2EOVHNrmAcV2bN9S%2FnwvxV5yo%2FqfxApDcD67t%2FlZ%2FSa33Ymx5dF4%2B2P3pvUNNR2SEf4qnVe0CvZkiGfe4jCwRqNnDZdnlR7lF0DkPqNoE7%2FOQQhaLTGQmfr3bi1oN%2BPC2odlbeHwgdzEiAJJWYlUBXbYC96J4GBGFSpYJE2b7aIdiAHj7hMClFmxwpyMP3W8NIGOqUB6bzsSDFbpxmV15VksZlJCszP3YQ%2BFBiyoZvfpaKvUdGJjkyv072hqIDbh07%2Fqzv22Arej5aiqoTqkKJrK%2B8UhIhLzeC%2FPUWWwabLSCll%2F%2FOFTlDlBJvhl7qh2U4998TbcopGn5nE6yHZ447VPw6ThuKT8MxteC%2F2S6RJTDtZ%2FtMXIJ%2FVqJKIGSU5H2QrpLm8E9Uo%2Fv10JH%2FT%2FvIV5EEGNMAEFmR3&X-Amz-Signature=019421a9c437b896ac611cd6b77c3b0906f33b611557663c41de55bbf824cf03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRR7ORRK%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwIFxxjoqZM%2BXH%2Fe1RsHfrftbJIjJbMXP%2FnKS64zzcLAiBlIyARh%2FOYnwVu5qjEs34lLtpLxus2FANvdDS5W%2FblsSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHN2tEGa%2BTg4DFhMPKtwDOGPTI%2BiNVplEuYAAaZwqTI6db15TElrU9%2BW0fJe1TFIQI95%2FbA0ZriSZAK7AId2iFPxYvRXzG1SWwEp2DscDaqPdzbgVS30tvvZWGw1iVQ0d5LpPFXaW8naIKos2FBssNTrPZRJOkY60rCQaKSY3LboC8hbQTqRBRXQox4kqMKfl1V%2BM2SC%2FSsxU9VzJY8ld59DjR3koFqu7s%2FgycOgTqOTiXO7hH7afb5HhY%2BTcCKspgxF1Jz3gqWFGgzTjA2jpAo1Tn8O%2FTmhBgApwmFoL9RXuTL5w1hnu9tspB%2FOmU7RlZJTp21Zr3DaqoL5D9QVWydPHNXFSj7fuN0S9sF4Ua0J5%2BSypJKy%2F50hX7dTeTluRDIR9DGUcK7rRHvjcYWHoetjZGvZv1WTDXAdy9kC6oQTQge8RgZWsUNb5BRhdzL7uD97zZ5Fvo3Rs2lc9CYnI50r38hKjc1fTbOQ%2BTunYuSXbD8SyAG4LF%2BB6dvGpgunfYrXb35ZRr%2F16K9xZomSYRjOjU%2FLAM0Hl3O7yoPAE%2B5fis%2FCn3T5KBEvxipRWOgAup%2Fr5GoZgDue3Ckz3I2CTIplD0AK91Uguhuz94w15LsmpdpoH4Mtz%2BVJZCvvzQBS7gOkzUvFjJrpjXmkwotnw0gY6pgGEHGALHRR2TFXC%2FKBgiUNHXIifUc5znR%2F8FzKXC%2B%2Bj%2FoaNl6jXsHXJZeoZxHud6APuIGRzCW6%2Behhe8XsNM5FyYL4EB%2F0sjqDfW2osQ%2FGDZ3q0af6QLXm9aFTJCRa0f%2BgmlKDtANIUdeAFh7u9XzQ8fuPDK26mHQZPO5eEhv0Gp02LXsvejfmKu5AhZmylst1VoDEYD2rlBhs0mO7vASucU9PTpW2W&X-Amz-Signature=79272e8f02a7a58769fe6af8c1464d910d968c299ba00e594bca7ccace3b2b50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRR7ORRK%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwIFxxjoqZM%2BXH%2Fe1RsHfrftbJIjJbMXP%2FnKS64zzcLAiBlIyARh%2FOYnwVu5qjEs34lLtpLxus2FANvdDS5W%2FblsSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHN2tEGa%2BTg4DFhMPKtwDOGPTI%2BiNVplEuYAAaZwqTI6db15TElrU9%2BW0fJe1TFIQI95%2FbA0ZriSZAK7AId2iFPxYvRXzG1SWwEp2DscDaqPdzbgVS30tvvZWGw1iVQ0d5LpPFXaW8naIKos2FBssNTrPZRJOkY60rCQaKSY3LboC8hbQTqRBRXQox4kqMKfl1V%2BM2SC%2FSsxU9VzJY8ld59DjR3koFqu7s%2FgycOgTqOTiXO7hH7afb5HhY%2BTcCKspgxF1Jz3gqWFGgzTjA2jpAo1Tn8O%2FTmhBgApwmFoL9RXuTL5w1hnu9tspB%2FOmU7RlZJTp21Zr3DaqoL5D9QVWydPHNXFSj7fuN0S9sF4Ua0J5%2BSypJKy%2F50hX7dTeTluRDIR9DGUcK7rRHvjcYWHoetjZGvZv1WTDXAdy9kC6oQTQge8RgZWsUNb5BRhdzL7uD97zZ5Fvo3Rs2lc9CYnI50r38hKjc1fTbOQ%2BTunYuSXbD8SyAG4LF%2BB6dvGpgunfYrXb35ZRr%2F16K9xZomSYRjOjU%2FLAM0Hl3O7yoPAE%2B5fis%2FCn3T5KBEvxipRWOgAup%2Fr5GoZgDue3Ckz3I2CTIplD0AK91Uguhuz94w15LsmpdpoH4Mtz%2BVJZCvvzQBS7gOkzUvFjJrpjXmkwotnw0gY6pgGEHGALHRR2TFXC%2FKBgiUNHXIifUc5znR%2F8FzKXC%2B%2Bj%2FoaNl6jXsHXJZeoZxHud6APuIGRzCW6%2Behhe8XsNM5FyYL4EB%2F0sjqDfW2osQ%2FGDZ3q0af6QLXm9aFTJCRa0f%2BgmlKDtANIUdeAFh7u9XzQ8fuPDK26mHQZPO5eEhv0Gp02LXsvejfmKu5AhZmylst1VoDEYD2rlBhs0mO7vASucU9PTpW2W&X-Amz-Signature=4aabaf10d532e48fba81a799cfa3e0e7fba8b917a6a9501d6dbfb1951062f9e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKGA5TTD%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4apiUWaREgcUrZ2DVpozN4kxN%2Fo45bevGRO0ZRkGBlAIgZmCSVgxLVDd2lhjhFI86WYLvaqkBkOaJuRbZJPESKUMqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBFZOOj39kSohjCyyrcA9Q%2FWXlVeAoMg2ZgwQGnKHBDUGIwRnzOORAK5G3VQq383J5zk57h7Hj%2BjU2cTR7eajuC%2B5r%2BiKfrJ0uuR2qBOnLk9YDPR4uX1YiFBMxet4xlMEePMM1j9lbmsRFSZrKKFIVixSaqDmUT%2BvMS9PKoyS7WuCuKmXnovFIXqB2m47bn%2Fgnl8ivP1K75vcSpHXbIqcSTB4X0cBwjplkFp98T9hbZBZUBC0gJf1DC%2FYfsuQ7tn1HpbjXKq8MeNsJbMw3t1ygTEzhMI2%2B8ywPYapqL84qeKZi%2BIA6dV3kI40Ts1tmVUwDPrZxt7uwSqt0%2B2aHnjx85qDwV5dOJyBkcqMdIi7WXnIuLA2Tjc0Di0DowNJNGknIm1Xq9bTg36UdcFyQvEUABhdg9MV1GM3KMD47YehyvD53zcqAQdIhQUPSMuXSg5pgBGb5xi%2BXL1dCaxenq%2B2EOVHNrmAcV2bN9S%2FnwvxV5yo%2FqfxApDcD67t%2FlZ%2FSa33Ymx5dF4%2B2P3pvUNNR2SEf4qnVe0CvZkiGfe4jCwRqNnDZdnlR7lF0DkPqNoE7%2FOQQhaLTGQmfr3bi1oN%2BPC2odlbeHwgdzEiAJJWYlUBXbYC96J4GBGFSpYJE2b7aIdiAHj7hMClFmxwpyMP3W8NIGOqUB6bzsSDFbpxmV15VksZlJCszP3YQ%2BFBiyoZvfpaKvUdGJjkyv072hqIDbh07%2Fqzv22Arej5aiqoTqkKJrK%2B8UhIhLzeC%2FPUWWwabLSCll%2F%2FOFTlDlBJvhl7qh2U4998TbcopGn5nE6yHZ447VPw6ThuKT8MxteC%2F2S6RJTDtZ%2FtMXIJ%2FVqJKIGSU5H2QrpLm8E9Uo%2Fv10JH%2FT%2FvIV5EEGNMAEFmR3&X-Amz-Signature=221c7ba2e04d47128b7897373ebb30f7301042a3f6496024dac37a0f4cf41462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKGA5TTD%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4apiUWaREgcUrZ2DVpozN4kxN%2Fo45bevGRO0ZRkGBlAIgZmCSVgxLVDd2lhjhFI86WYLvaqkBkOaJuRbZJPESKUMqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBFZOOj39kSohjCyyrcA9Q%2FWXlVeAoMg2ZgwQGnKHBDUGIwRnzOORAK5G3VQq383J5zk57h7Hj%2BjU2cTR7eajuC%2B5r%2BiKfrJ0uuR2qBOnLk9YDPR4uX1YiFBMxet4xlMEePMM1j9lbmsRFSZrKKFIVixSaqDmUT%2BvMS9PKoyS7WuCuKmXnovFIXqB2m47bn%2Fgnl8ivP1K75vcSpHXbIqcSTB4X0cBwjplkFp98T9hbZBZUBC0gJf1DC%2FYfsuQ7tn1HpbjXKq8MeNsJbMw3t1ygTEzhMI2%2B8ywPYapqL84qeKZi%2BIA6dV3kI40Ts1tmVUwDPrZxt7uwSqt0%2B2aHnjx85qDwV5dOJyBkcqMdIi7WXnIuLA2Tjc0Di0DowNJNGknIm1Xq9bTg36UdcFyQvEUABhdg9MV1GM3KMD47YehyvD53zcqAQdIhQUPSMuXSg5pgBGb5xi%2BXL1dCaxenq%2B2EOVHNrmAcV2bN9S%2FnwvxV5yo%2FqfxApDcD67t%2FlZ%2FSa33Ymx5dF4%2B2P3pvUNNR2SEf4qnVe0CvZkiGfe4jCwRqNnDZdnlR7lF0DkPqNoE7%2FOQQhaLTGQmfr3bi1oN%2BPC2odlbeHwgdzEiAJJWYlUBXbYC96J4GBGFSpYJE2b7aIdiAHj7hMClFmxwpyMP3W8NIGOqUB6bzsSDFbpxmV15VksZlJCszP3YQ%2BFBiyoZvfpaKvUdGJjkyv072hqIDbh07%2Fqzv22Arej5aiqoTqkKJrK%2B8UhIhLzeC%2FPUWWwabLSCll%2F%2FOFTlDlBJvhl7qh2U4998TbcopGn5nE6yHZ447VPw6ThuKT8MxteC%2F2S6RJTDtZ%2FtMXIJ%2FVqJKIGSU5H2QrpLm8E9Uo%2Fv10JH%2FT%2FvIV5EEGNMAEFmR3&X-Amz-Signature=d9cd40dfb1b0502cbed84854d8716a0bf04dbf332776196eabab07ece5e20d50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOIFN6W%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7ARYsZZ8qbHAKYl9WB2tEwD1EGEFxCosnckjINicxcgIhAM0ENkN5ZMRBrJkP17wF2%2BHHej1qT74TE5MVb0v1b8WWKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F%2Bs4Ot1LETCHdAhwq3AMk1GsSRC6Nr3vDbKxJdUCUpV1Z1CBui644hq51x8B5nbAsv%2B7pJdMKZaBZMAxJs6%2F6BLep6vRL7xb4YBL0lvZFEQW6AOO07AE9xznOLXdk9cWlimUHvTEgO8%2BIAK3BGY5%2FIVWS0EEPfyQxUM2NFjmFFBM4I%2FrNKRytDxdX3ZuwdX4kBjvcOaWBlBM%2Fmvuq9d9mhX%2BWW2IJ8sVn84fAzuJCs95bGwH82Imp%2BWo8tk7J8jEfSDwZgNgZPvhbmnryWfsfrYIGGLHBDuNaSCGtcjTOc%2FWDvdzWAyAlGjI7%2F%2BvoHw%2FZcJzc%2BoQzBCOyChw902qbpsmPCszNAIfjY%2FTMkPUylSkViS0IQ3tYshZZZ5k%2FwWndUn4CNC2CSYzCC6ym%2FbVUcVdd6A1whB1%2BO1owOhvGjrqJjJea249Nx9oyE%2B5%2FUZtA8zY0bp7UwF6IkzFLO7L7DGUFq3trfXXd3cNFwv6gsYmWlk9L2nYJljzaeiK6dTq5qXKmHe6jiZ%2FZ1euexpznjLxSN2%2FIp97CBUfwF5twGwN84E93BdUj80q710O8AXKNcNjS6vv2OPV3eSFe%2Fu0vfWQj5AWL1Rglx6anF6jslot2E8APfIw3V2QzlizJ5eh%2FJRm6z8onQwSY%2BTC%2B1%2FDSBjqkAcZqOP4bAorM6I6wiS8Z5RQphlq00wLQnyz7qRqwXpTRlxnpByUjLkoO4eY%2BgQRbFVvTE611Mn8NFVfiPfPVnwEK0ALbIEBwpoVTuJ9EQTbs4B6JJQ8eoqN1QGNU6aOXNih1RYcjPPIL278AEMmq3DEc%2BtyWIpXfO2Fuw7wi4j6hXoQiqlLHKEkoaKySEowpbfLz8sHP5RqhJfbzDhLdZ6LlDXUB&X-Amz-Signature=0358cdd2f0030787750df32f9e45d9ac912eb56bbd76f223f668fc41cf782854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

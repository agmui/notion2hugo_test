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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNJCIO2%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFd735S2VOVQntlZWV9%2BHdw5VSe25qfR%2BB8zT5RCgMPCAiEA%2B3fynO3uublihvUYQ7Jka7VhNWyMz3z9efIH98j%2BG0oqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0xxhMSaWU2vM3MTCrcA%2FFDp0jlEGVlv2G7quTEmPJlplPuOTgS8zdgAQNAD5qdBaPNRlLiw2G%2FvvOr7PSE2tSdTAVk1onEJ3fsd1JEDYp37ipeWoeV6IgIv1KrqKOpzB8wKmsIPkXJIF2cOdz8Ptyg9kZfeXNlMaCI8lmWLj9lFH5yorckTNAfzTCxc8OeQBThTef9RaeR4ifvWpImWqftS0UPIsTSKAj0MrwxdGY5g8rtvkXITmoFHCjsphDMcwnYrKwQAVt1%2BpBBuQ0km4NqTzy4YC1DYnzI9cOWP1yjhDsVz0NLyLfPhVpGQrJwEq1JRCGDYglnfpJmMZkdZnv1oYhUULHmZKtx958eF2adbnr5sAZ4TwDqZMimK3zIjmVReLlj3QA%2FWUfm4xb7IEOJ6kEOxarF%2BK9WyMmnXcqRgJysWyXgDoFoYcrN4M9VGBh5idyBrHtH8GmXZmpR%2FFDp33KbsQGT%2FcJMFR7k0X%2BDkE0l4IiDXEjbd1zMHBCvnrgQxNT%2F7V0aDOtMKY24xzZvF4XW%2FyYvSGM%2FKBCa2wlBQwSld%2FugxiTkHSIoAqrkvqNpOZ8pDOxaadEJaR6Q7V%2FyicQ8XbHnHLNNix3nYA2nn4LiX0z3a8NFt3w4AKY2zQCJiHw7ptNucaLWMPuevcYGOqUBy%2FV8kZkf%2FaCqancc6chCGi09F6JYLLaJXuU9Q3xERo3RVCnowrRdI%2FRWqLWWvIleP2OhVO9vbFR%2FieYsnbEZDN6O63zJeFSpu%2BVcA%2BC%2BMW%2F9VnRnGgKhFXgyIVRWemS83lR9iqc88vZLi7w48eGyXxRqcDZSo5A1r7Iy%2FOINdasb0BMhcMz4GhEhW34NCDWIqQ3houOG6VKVkEvgNxiCPhevPBoQ&X-Amz-Signature=4a29f3fd1ce3034caf7ba86faadb246e2731bef6c98ed9a1d3292546ea4a2ab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K7WPKWO%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlVQyGUUSMbJfubcHA1bRI%2F4GvHsDKlUSusB5lOLXZeQIgThAYz2RgpZ7xDRhh3yQkPDHFc3Yi9yo8hJq5KZjhIEYqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJs0vmmzvyXd2WJVWircA84rz%2BYUbnknHaTga7HIy06IjWb9duwcquvoFSO8IkTOu4IHj75zMlD95Ip6CFBpxmo6GQ3Ukg%2FVGbVFySe8GisHRUvQV56QAi4uo0h5GCqKyqkvKZ6721lsXVUIpXVVRhtzaw9zYvfIgoP9Od%2F7HRGhPlNXqNU47MOTBQdKuORu86uKnhEPcoIiSypv7YHAk9%2FlenDnemljlzao7Iz8Vqt5TNv%2F9BfJl1Xw9oKo17dMHMZmEGnF7KgUtIsWvogQJtxTF25B2n87sbu1HnGGgO4k5oIZnmREvi7O%2F70FkIr9v7y%2Fw8h6UK0jr5mn2Gy%2FqZz3u1H9G3ngUHOzFt6x%2F0VFzYWmB47BaBm4%2Fd96yP3oM7inYUCom2M0WG7O2WQV4arKrTD3v6MZHRmZgilNzdNNgzJviZ4QylOhjgKmk4UTrAJrofwQAmSUBtDX3zP7HtW%2FsQk3ZYLiVOiNnrBRxigFFE%2FLOwyFCXjBuLm3xkOih98%2ByTASUFOT5yPzcMhkemr7WvHpmePGUSG5QcPZgqdd9ZSpE5Cus1n9kc7xZJXpwxvtp6DUNAgjVvo80PjpV6FYnKnFgNfwgyVWQsOrl64LkXNJnB3WRkPpfPjrZNTw3DFG3kXll7HAM7vZMPCevcYGOqUBtiLzSxvracf2vHoXYoFrTXDy%2FzSr%2F%2FMalDbYt33C4DtweupWnqmd7hr6otz9XUuwKB4dC%2BIiLWBiRsaTEjYCWnTNoj%2FfTWN7TLxJy1ceilyvigYUASl2zcxc%2BZXNZgjfzmxvxVr%2BmldpJFO9fSuaBIzlnauvlct6UFdctf%2BPN38T3qsE8RTS9m%2FYLCXy%2BrywiBxyRVb7VqubPifJDE6OO%2FSnPt%2Fv&X-Amz-Signature=07e32d56c8c6d75f81635f01891865061d6dc1f222e541ff5249f597953a4aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TJDDJCJ%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJjpmldgfElzMazHecD4CFNscmTEycCwT38OnqHm2mFAiBP8ZE5MyBRGcZ4TbwLC4mef%2ByW0qLcocsBkrTc8BAW8iqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8gMXEuxahMXn4qNgKtwDv4KkDLDvMoW9IT%2BVX58pM8M4Cb%2F%2FqbGdrZ%2BGleUx7avef30fBm39X2CzvWO2HPBJ6UFaCuG4%2FsYOuK%2BUCGZ2PMxSNR2VidIn3BNUHJwkD9yjbET7fr3xy1M4Heg66A%2BNFUkzbGynx8VX1f4j3zvPVLGWipbKYIYaeCOBaHMIi%2FzwpHSRdhurrtVxZOE2%2FuFY1%2BnCdvDsC7D%2FxHAwCd4kD7zMlywvn5MNRWMFuP0bYbt7OxtY21Oq4Zx8UZuhTkp4tMIQW6s3WgODcmRvRV7z9vBmX67TK%2BLxfYfU8ghieFjlMDCG60l%2FlkcBoUaa3FQd4rRk%2F0JwCtNA5a2DAcaGjKkPexXU6OdQqp8WtA39nhfB8yQJCn7mCAQBNp52zKUEETVh33qPSTfTiUDQuHf3nDswvGGNMnJSA2yTeq6AzZjfAE38OiYK2%2BbJFUi0j0FzMn4y4ANC9USAuvCYPjxO2jUXPnxr4avPhDROenDJFSg6UbmFEbN0UdzJvgRlUqQLRLi6YO7vOc26wF0r9BWX%2FfQUQ047RWMA1C0%2BE7IECVs%2FhzCA9Lbp98Xty6X%2BPxQVcXEzApX9B4w%2Bceiu0WsP7NF5iU%2FzxBINhFqMLssezgZ7ZrERxWxGHJzvSnwwpJ69xgY6pgH8dLtMku%2BfVG%2BLHPru3yP0FmNsadJma32ChNZCxyhCXqCnZnNs8Fy0z4qj4mZ6qZlhGJmqER4U%2FcVoAM%2BeXdOtDzQEKZe%2FXUtw6BP9nE%2FAQKWKlviVzUxkm19h1ziMLsq2IXgJADNnQypgQP14k7Qc2dtLZt94%2Fa%2BerNXmeZgSVnkagxc1exl2Q8WICJl64v6Z3kuQ9Cf7olBYVjKoE%2F3qVfo8I5oG&X-Amz-Signature=b0a06b3d7e67feb5a55a41f39d1a09976fd007a167ccac1d81a8c55d88463216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TJDDJCJ%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJjpmldgfElzMazHecD4CFNscmTEycCwT38OnqHm2mFAiBP8ZE5MyBRGcZ4TbwLC4mef%2ByW0qLcocsBkrTc8BAW8iqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8gMXEuxahMXn4qNgKtwDv4KkDLDvMoW9IT%2BVX58pM8M4Cb%2F%2FqbGdrZ%2BGleUx7avef30fBm39X2CzvWO2HPBJ6UFaCuG4%2FsYOuK%2BUCGZ2PMxSNR2VidIn3BNUHJwkD9yjbET7fr3xy1M4Heg66A%2BNFUkzbGynx8VX1f4j3zvPVLGWipbKYIYaeCOBaHMIi%2FzwpHSRdhurrtVxZOE2%2FuFY1%2BnCdvDsC7D%2FxHAwCd4kD7zMlywvn5MNRWMFuP0bYbt7OxtY21Oq4Zx8UZuhTkp4tMIQW6s3WgODcmRvRV7z9vBmX67TK%2BLxfYfU8ghieFjlMDCG60l%2FlkcBoUaa3FQd4rRk%2F0JwCtNA5a2DAcaGjKkPexXU6OdQqp8WtA39nhfB8yQJCn7mCAQBNp52zKUEETVh33qPSTfTiUDQuHf3nDswvGGNMnJSA2yTeq6AzZjfAE38OiYK2%2BbJFUi0j0FzMn4y4ANC9USAuvCYPjxO2jUXPnxr4avPhDROenDJFSg6UbmFEbN0UdzJvgRlUqQLRLi6YO7vOc26wF0r9BWX%2FfQUQ047RWMA1C0%2BE7IECVs%2FhzCA9Lbp98Xty6X%2BPxQVcXEzApX9B4w%2Bceiu0WsP7NF5iU%2FzxBINhFqMLssezgZ7ZrERxWxGHJzvSnwwpJ69xgY6pgH8dLtMku%2BfVG%2BLHPru3yP0FmNsadJma32ChNZCxyhCXqCnZnNs8Fy0z4qj4mZ6qZlhGJmqER4U%2FcVoAM%2BeXdOtDzQEKZe%2FXUtw6BP9nE%2FAQKWKlviVzUxkm19h1ziMLsq2IXgJADNnQypgQP14k7Qc2dtLZt94%2Fa%2BerNXmeZgSVnkagxc1exl2Q8WICJl64v6Z3kuQ9Cf7olBYVjKoE%2F3qVfo8I5oG&X-Amz-Signature=e531d09db543bca21b83ad25dbf378cd0632b3bb8f1fc2494a73595b0e04fc80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K7WPKWO%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlVQyGUUSMbJfubcHA1bRI%2F4GvHsDKlUSusB5lOLXZeQIgThAYz2RgpZ7xDRhh3yQkPDHFc3Yi9yo8hJq5KZjhIEYqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJs0vmmzvyXd2WJVWircA84rz%2BYUbnknHaTga7HIy06IjWb9duwcquvoFSO8IkTOu4IHj75zMlD95Ip6CFBpxmo6GQ3Ukg%2FVGbVFySe8GisHRUvQV56QAi4uo0h5GCqKyqkvKZ6721lsXVUIpXVVRhtzaw9zYvfIgoP9Od%2F7HRGhPlNXqNU47MOTBQdKuORu86uKnhEPcoIiSypv7YHAk9%2FlenDnemljlzao7Iz8Vqt5TNv%2F9BfJl1Xw9oKo17dMHMZmEGnF7KgUtIsWvogQJtxTF25B2n87sbu1HnGGgO4k5oIZnmREvi7O%2F70FkIr9v7y%2Fw8h6UK0jr5mn2Gy%2FqZz3u1H9G3ngUHOzFt6x%2F0VFzYWmB47BaBm4%2Fd96yP3oM7inYUCom2M0WG7O2WQV4arKrTD3v6MZHRmZgilNzdNNgzJviZ4QylOhjgKmk4UTrAJrofwQAmSUBtDX3zP7HtW%2FsQk3ZYLiVOiNnrBRxigFFE%2FLOwyFCXjBuLm3xkOih98%2ByTASUFOT5yPzcMhkemr7WvHpmePGUSG5QcPZgqdd9ZSpE5Cus1n9kc7xZJXpwxvtp6DUNAgjVvo80PjpV6FYnKnFgNfwgyVWQsOrl64LkXNJnB3WRkPpfPjrZNTw3DFG3kXll7HAM7vZMPCevcYGOqUBtiLzSxvracf2vHoXYoFrTXDy%2FzSr%2F%2FMalDbYt33C4DtweupWnqmd7hr6otz9XUuwKB4dC%2BIiLWBiRsaTEjYCWnTNoj%2FfTWN7TLxJy1ceilyvigYUASl2zcxc%2BZXNZgjfzmxvxVr%2BmldpJFO9fSuaBIzlnauvlct6UFdctf%2BPN38T3qsE8RTS9m%2FYLCXy%2BrywiBxyRVb7VqubPifJDE6OO%2FSnPt%2Fv&X-Amz-Signature=6af22b243d000c0775d4fcd9966a6c982b4b2fec408312c89e9d6e7fb1287811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K7WPKWO%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlVQyGUUSMbJfubcHA1bRI%2F4GvHsDKlUSusB5lOLXZeQIgThAYz2RgpZ7xDRhh3yQkPDHFc3Yi9yo8hJq5KZjhIEYqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJs0vmmzvyXd2WJVWircA84rz%2BYUbnknHaTga7HIy06IjWb9duwcquvoFSO8IkTOu4IHj75zMlD95Ip6CFBpxmo6GQ3Ukg%2FVGbVFySe8GisHRUvQV56QAi4uo0h5GCqKyqkvKZ6721lsXVUIpXVVRhtzaw9zYvfIgoP9Od%2F7HRGhPlNXqNU47MOTBQdKuORu86uKnhEPcoIiSypv7YHAk9%2FlenDnemljlzao7Iz8Vqt5TNv%2F9BfJl1Xw9oKo17dMHMZmEGnF7KgUtIsWvogQJtxTF25B2n87sbu1HnGGgO4k5oIZnmREvi7O%2F70FkIr9v7y%2Fw8h6UK0jr5mn2Gy%2FqZz3u1H9G3ngUHOzFt6x%2F0VFzYWmB47BaBm4%2Fd96yP3oM7inYUCom2M0WG7O2WQV4arKrTD3v6MZHRmZgilNzdNNgzJviZ4QylOhjgKmk4UTrAJrofwQAmSUBtDX3zP7HtW%2FsQk3ZYLiVOiNnrBRxigFFE%2FLOwyFCXjBuLm3xkOih98%2ByTASUFOT5yPzcMhkemr7WvHpmePGUSG5QcPZgqdd9ZSpE5Cus1n9kc7xZJXpwxvtp6DUNAgjVvo80PjpV6FYnKnFgNfwgyVWQsOrl64LkXNJnB3WRkPpfPjrZNTw3DFG3kXll7HAM7vZMPCevcYGOqUBtiLzSxvracf2vHoXYoFrTXDy%2FzSr%2F%2FMalDbYt33C4DtweupWnqmd7hr6otz9XUuwKB4dC%2BIiLWBiRsaTEjYCWnTNoj%2FfTWN7TLxJy1ceilyvigYUASl2zcxc%2BZXNZgjfzmxvxVr%2BmldpJFO9fSuaBIzlnauvlct6UFdctf%2BPN38T3qsE8RTS9m%2FYLCXy%2BrywiBxyRVb7VqubPifJDE6OO%2FSnPt%2Fv&X-Amz-Signature=3e090832fcde349a59d384909bd6095042fcd278fd99a65658dc75432ca3d9a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663STEKVFP%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmrrzhiqNXZFxG%2BcmiO5TotZ884YKHoBoy8g7cnUXsmAIgRVMiFz3s%2BfaIfxuS8pprSQSrkHXqFwqEIey5Pf%2FwLqMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSpm5XXT8dltSct7SrcA%2BRbhdinSHghieXcv9E5aZT6vhusw3qtKV1TAWVOSI1DWLfv4XCNfUMFug13%2FskCgFMdUyhyVPZaX1wpw%2FpwrIFgWkJWJ9wlNq7iGHOoBmjdpFvbRgdCvTZpcm96dLGhWb8%2BJso8aBGOMiq376OZuueuiIYqPCqf0eENnacwnYSj5NST3iKWH8aFXDqumkr1%2BRpn3Z8LZYyEgFTXRM%2FpSe0jgAkQXwIegv4ATzudyqoA75UVkd5yBXG%2BA35FGri52Wg9Pusn1WVDG8oOiZzGkXIpUKI%2B%2BtQUF%2BmNQEKnoVw6WI%2BsQALy4OGA82LmJzCRaZpp3j%2F8hNwseVPWOyJBkR8yf7SxkK%2BX%2BV%2Bzg0FL4yCzKrtvVNKwTdl5u%2FfyHD%2FFvK%2Fnks%2BvvNN1IYKJ7d2uanPXsyDcoU%2FkBvRdGk8Ezp32sG2q420i1JmJjTXEsJl7lDlLYUiHHuZ%2Fof5uyZIEJ52afi5V6SbD1yZFm29553vTqsprfRfl2UetLvMQ1zT%2FvO%2FWdEO%2FsccEngIlRHmmkOdUvMnR%2BShobQzLYM%2Bj%2B9rPTMabVNwWBeb4%2BZiCH0KbgB5sKOA2zDH9oG6AwTiaYEtXU2T3iq3EFwZrN9fsySKkTAFUJCgWcf%2FizRbcMK%2BevcYGOqUBxU%2FjWozePwWjcF90p2xJB%2Bat87BwYI2wMjipFTiBt2OSJ8pD7ktpAd9H%2FzMVskHplXocta%2B9FaeAdKvHvRUtVX2WrZVRlaHWg69jDp%2FYfZplHGwcnPDktomb%2BjNDLpugcU6lY%2F2TrE5BnMohbMU3yTftLb7t%2BSb9uWLKt9dK9gR4hCY8J0YzHuOBMS3mfO13K7DmfW7tmVBaQ8LZWOId00iUG%2BJ%2F&X-Amz-Signature=273b8cfa51eae4e8ce7fb50047c5887e172826687ecb73ddfcbc9a08079859da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

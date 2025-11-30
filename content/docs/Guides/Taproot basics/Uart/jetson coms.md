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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ITLBLJ%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD9FjNH3bH9nQP5D%2F7urAjHNvBy8ex0Pts2xAtaXMTIjAIhANUiTTv%2FJOn8YzI8EfiHL8qiRBIFrAj1VxXMoKn2rgOZKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJbbPrYHGKX1dek2Iq3AMH%2F%2F1k48nF77S4hGg1sMFWkTiHNV7i2oChbT9dcKyFggt0EZZnyFITbJCRRDA7kOYOFlH6StItH%2F2j6sdT%2FaK7ZktV%2BfGmmx68QgnKgwcJRz%2FyMU2gEG9CK%2BMZIq3t6otd7C8DGVFNIzUSC9OTtY4SMIPfGD6sSae16VJGGUepYSik7kvieokTdwSQPr%2BhYmITI7M1w8UFpnkr2vhRM8QNxionouJymiTeCvf1OKLwIMmmaUTX062jj3ez%2Bq7DiOMZHP1ejuo7rxubB6PQ0aKCPymlBLMKWPsUNqSsQ2XJfhNdwI6CfUVEMbk%2BQPUPyYVKG3s0vVLQx1uvgUzCZMESkXif7xEpL2%2FEI8kU3OVFkG4pVMsI1%2BNeyMnE7CSpudiVuM3QxU6%2BhY2odYm%2B%2FG1Uu4J1RZofCLEWuV37DCqRM5spQsD6yEQQNEZW%2F1n0%2BGA8VqvCC1HW1vgMAysSkQ40z%2FGE3XhXvW5RTZFmoMHniVv7lCl2O3astFzr%2Fy4Nycd9i3TML19k7MmLDkgBQBo297u2sI5g6ui3pgR%2FpYYu3geBk6x9DvVY39vBRz%2FiXF6Im6A10%2Brs2ShAkjbPDSNHtUr%2BtlPf2YBTQx6zyDYf6dLMUKVDrVA5yBJGOjCu063JBjqkAQBIl0%2BfT9BZz3dcsImK7VKM1k8SohjPMSWuopyq7W%2B59VpN8kqP2JUh4EUT3q3bhGZsrfrD10KteQ2GjUHXPTYr%2B6h8sv9DJgdr5eiaD3XNqSfRrqATORpjr9kMyjWHrreTueMn6u9uPRqKiVhzQ%2Fyl4ihPAiN%2BaUC4he4p%2BLMjTQVcSBpVfzoyB%2BPIeyfUNyBtIhYqishQVMbqkRFO%2BByiOBL4&X-Amz-Signature=f6d9740c97b483ad401d8ef6951aeecc9df1d035057561cadf1c7e6b9b07cdbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWH35EF%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCOvpD5P8hO8tp8tvNsRfJApPG1yNwKB0knMBu3aQGv%2FwIhAK8VuzkMp5TZ3X2cwvsjcJZ9%2BpG0ZIQC%2FGWjlHbugZYZKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy3GzJhowGdoSALZwq3ANzJyLEllDxuGY3dY82lTtckf1eS71VB5WzTVIKJdsCn4zGrkZweTLLeIFgXfqQo14jNsxBn6HDG9DqtSg9EfO5s1dRSVfwnj%2BBOG4yUOVjjTg6LmwiRHToNXr9JBUHRdXMM1rFMhqxgIGhrWi6Djow%2FCsrzZqPvGMchgVmOnV%2FqmVx4kUmzj343YB3e4sx76vUjfadpueiGABLXZJgb7cqaAwtaoIn9uSjTPDqzjRMYCeioe%2BshvRT55XdJGC4l1bIXDBFRLKqfB18X4TqxwVHIb32hc%2BR0PgDw2VWVi0tPk%2Bzl7stlBzVUCw3enKIh73ahxGc4FEqMXyFJ33SHM4N1yj%2BK7fKClt14FF9%2B7qWsNSjZPY49M7FH1TOpjwNv8H2m2sqidBBo4SkdnIMYJ4CR374WdhQvBboHvrxuOEkHas9BSE%2BRY%2BZTy7%2F7CucIW5LLPxssiQAKEhV2BADjoUt2A3EE6TqhwcTLVESkszFSaDzXHcYtlEqHjm0QxxilRyFvXbI%2FgypqA7rWXbKoJa8pC6I5J8TPw%2F38oma93SnaLPh3iHCyOOy%2Brc4sekxd%2F4diOTQd5bQppVCeCKi8j6u0jz3jSRMXAlkGMZ7yf7ONu3lHOl%2BTWvqpolL1jCq163JBjqkAWHB6Pcx5AgGe6YlLjC35QUldrB9OS4zLhmeyTADi1%2BJiMpLSCkjWQci1x3qk1zvTe3Ct9dKq1XUVqvRN9h6NO91NY0DOJqIsRmcyt38ocM79Bd%2BmtbJK5jbiRoSnK%2B5sXZXcLX9VegJc6G691WMkaPAVssi0spDLCmS7jBPhLd9QFJrCGoVljDgZhLjJ2XLJu3D9vp6ho36n2QHMyL3vaocGZcT&X-Amz-Signature=da178b80f262f73d6002702e90467be50673897fdf7cf4039df6eaf5020c1770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UHV7DD%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCID3Hxc%2FOlUuZuD6XgkXPkEXm%2F5OwLeBJaOsR47f6UlilAiEA6EeHjDUEkhjQma9aVoEQgvQCubJ2R%2Fu9sU%2B5eDbQRWwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIncFvDXNtOjXnmadSrcA6oFb6A%2Bv%2FV5VZJ5vauTsuzfavqEb65pzA9p9ETQcm93juMu%2Bl%2BCa1i3VQsw0fATtsS0eVvz%2FkGEsX6NMpHa34rZXHhF3Iei%2F0zevyv979VdSabUnKPffj10IvjM%2BlMJPrqGd0CqWm%2BEubbjzTOmTl9KumqTXh%2B1Awl76Ow4zYzhWcg24IPDTjBue0%2FqYm72DAM%2Fn%2BeiB7nK4kM0bGI1cnRg9TK5S8ZuPVBt0N%2FKjXztKYKwp4Af9Q92gQR4G8TFZMTZ6I%2BvSZymJkCOb130Zu0pmdv9NZ2Y5A94V0PXh9UkhtQVkfrseYFPgUFfcCHyC9jZ56nGYjxi%2Fjs2aePpxAgkFwIBgMuhs2V9P8k8Ni1TtWPAuxej5N9AetqnADKqlApmeSsMcHlaGF3PYTM5duo2Eqihl5dWnRYxR1K4RY3bVRIFpt4P7sLxc2FWLMBRZw9uZXQhP%2Fjp76XHrxmY%2BGEGL8jj3AHHomTwLb2LUQUuVPLqYQBu2G8v%2FoUsQX9kb7Y2TnuHehrk%2F9jkvn2OJEXu0j6CR9nnu9PIBnBU5bCSVXUgWqNjdU2fnQw1U%2BL4O4tAvGx0UAJySw8baRHf4UPtPAXmPaWRc%2BccIWdIfSn3DlSOFxbeKXN4ihBmMO%2FMrckGOqUBqrFtznZY9dvgeVK9WHVI8OXs0iLiugiOklu%2Ftuz7PQ28UxyOfflWzFWtQjS2OFp9E4kGG1mE5mOvccdwmSqIQtMB7VpVIxVWV9MJbvcsmiwz0y9KMp1RW6A1LrEJGvR0UxaqVGDl47SwqNmQDY%2BUylkGJ3%2BSNCG267527bjrjfcHLrNQJh%2FZcGMQibsReGdv3NGpBBT%2FRvXAxCKwI9NgWJcB6Do5&X-Amz-Signature=6d3b9a2fc92e76c0f95471b7603a044993809bfd1256d2156ffe5af9ee6a1d4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UHV7DD%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCID3Hxc%2FOlUuZuD6XgkXPkEXm%2F5OwLeBJaOsR47f6UlilAiEA6EeHjDUEkhjQma9aVoEQgvQCubJ2R%2Fu9sU%2B5eDbQRWwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIncFvDXNtOjXnmadSrcA6oFb6A%2Bv%2FV5VZJ5vauTsuzfavqEb65pzA9p9ETQcm93juMu%2Bl%2BCa1i3VQsw0fATtsS0eVvz%2FkGEsX6NMpHa34rZXHhF3Iei%2F0zevyv979VdSabUnKPffj10IvjM%2BlMJPrqGd0CqWm%2BEubbjzTOmTl9KumqTXh%2B1Awl76Ow4zYzhWcg24IPDTjBue0%2FqYm72DAM%2Fn%2BeiB7nK4kM0bGI1cnRg9TK5S8ZuPVBt0N%2FKjXztKYKwp4Af9Q92gQR4G8TFZMTZ6I%2BvSZymJkCOb130Zu0pmdv9NZ2Y5A94V0PXh9UkhtQVkfrseYFPgUFfcCHyC9jZ56nGYjxi%2Fjs2aePpxAgkFwIBgMuhs2V9P8k8Ni1TtWPAuxej5N9AetqnADKqlApmeSsMcHlaGF3PYTM5duo2Eqihl5dWnRYxR1K4RY3bVRIFpt4P7sLxc2FWLMBRZw9uZXQhP%2Fjp76XHrxmY%2BGEGL8jj3AHHomTwLb2LUQUuVPLqYQBu2G8v%2FoUsQX9kb7Y2TnuHehrk%2F9jkvn2OJEXu0j6CR9nnu9PIBnBU5bCSVXUgWqNjdU2fnQw1U%2BL4O4tAvGx0UAJySw8baRHf4UPtPAXmPaWRc%2BccIWdIfSn3DlSOFxbeKXN4ihBmMO%2FMrckGOqUBqrFtznZY9dvgeVK9WHVI8OXs0iLiugiOklu%2Ftuz7PQ28UxyOfflWzFWtQjS2OFp9E4kGG1mE5mOvccdwmSqIQtMB7VpVIxVWV9MJbvcsmiwz0y9KMp1RW6A1LrEJGvR0UxaqVGDl47SwqNmQDY%2BUylkGJ3%2BSNCG267527bjrjfcHLrNQJh%2FZcGMQibsReGdv3NGpBBT%2FRvXAxCKwI9NgWJcB6Do5&X-Amz-Signature=f401316baabc0ce1566969fbefde316b9324a37335ba66787815b176b6edd4ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWH35EF%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCOvpD5P8hO8tp8tvNsRfJApPG1yNwKB0knMBu3aQGv%2FwIhAK8VuzkMp5TZ3X2cwvsjcJZ9%2BpG0ZIQC%2FGWjlHbugZYZKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy3GzJhowGdoSALZwq3ANzJyLEllDxuGY3dY82lTtckf1eS71VB5WzTVIKJdsCn4zGrkZweTLLeIFgXfqQo14jNsxBn6HDG9DqtSg9EfO5s1dRSVfwnj%2BBOG4yUOVjjTg6LmwiRHToNXr9JBUHRdXMM1rFMhqxgIGhrWi6Djow%2FCsrzZqPvGMchgVmOnV%2FqmVx4kUmzj343YB3e4sx76vUjfadpueiGABLXZJgb7cqaAwtaoIn9uSjTPDqzjRMYCeioe%2BshvRT55XdJGC4l1bIXDBFRLKqfB18X4TqxwVHIb32hc%2BR0PgDw2VWVi0tPk%2Bzl7stlBzVUCw3enKIh73ahxGc4FEqMXyFJ33SHM4N1yj%2BK7fKClt14FF9%2B7qWsNSjZPY49M7FH1TOpjwNv8H2m2sqidBBo4SkdnIMYJ4CR374WdhQvBboHvrxuOEkHas9BSE%2BRY%2BZTy7%2F7CucIW5LLPxssiQAKEhV2BADjoUt2A3EE6TqhwcTLVESkszFSaDzXHcYtlEqHjm0QxxilRyFvXbI%2FgypqA7rWXbKoJa8pC6I5J8TPw%2F38oma93SnaLPh3iHCyOOy%2Brc4sekxd%2F4diOTQd5bQppVCeCKi8j6u0jz3jSRMXAlkGMZ7yf7ONu3lHOl%2BTWvqpolL1jCq163JBjqkAWHB6Pcx5AgGe6YlLjC35QUldrB9OS4zLhmeyTADi1%2BJiMpLSCkjWQci1x3qk1zvTe3Ct9dKq1XUVqvRN9h6NO91NY0DOJqIsRmcyt38ocM79Bd%2BmtbJK5jbiRoSnK%2B5sXZXcLX9VegJc6G691WMkaPAVssi0spDLCmS7jBPhLd9QFJrCGoVljDgZhLjJ2XLJu3D9vp6ho36n2QHMyL3vaocGZcT&X-Amz-Signature=ba6ec4b08e98a10cc9c92d641899f041db4ce4b9b85c2b2804767b73ea576303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWH35EF%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCOvpD5P8hO8tp8tvNsRfJApPG1yNwKB0knMBu3aQGv%2FwIhAK8VuzkMp5TZ3X2cwvsjcJZ9%2BpG0ZIQC%2FGWjlHbugZYZKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy3GzJhowGdoSALZwq3ANzJyLEllDxuGY3dY82lTtckf1eS71VB5WzTVIKJdsCn4zGrkZweTLLeIFgXfqQo14jNsxBn6HDG9DqtSg9EfO5s1dRSVfwnj%2BBOG4yUOVjjTg6LmwiRHToNXr9JBUHRdXMM1rFMhqxgIGhrWi6Djow%2FCsrzZqPvGMchgVmOnV%2FqmVx4kUmzj343YB3e4sx76vUjfadpueiGABLXZJgb7cqaAwtaoIn9uSjTPDqzjRMYCeioe%2BshvRT55XdJGC4l1bIXDBFRLKqfB18X4TqxwVHIb32hc%2BR0PgDw2VWVi0tPk%2Bzl7stlBzVUCw3enKIh73ahxGc4FEqMXyFJ33SHM4N1yj%2BK7fKClt14FF9%2B7qWsNSjZPY49M7FH1TOpjwNv8H2m2sqidBBo4SkdnIMYJ4CR374WdhQvBboHvrxuOEkHas9BSE%2BRY%2BZTy7%2F7CucIW5LLPxssiQAKEhV2BADjoUt2A3EE6TqhwcTLVESkszFSaDzXHcYtlEqHjm0QxxilRyFvXbI%2FgypqA7rWXbKoJa8pC6I5J8TPw%2F38oma93SnaLPh3iHCyOOy%2Brc4sekxd%2F4diOTQd5bQppVCeCKi8j6u0jz3jSRMXAlkGMZ7yf7ONu3lHOl%2BTWvqpolL1jCq163JBjqkAWHB6Pcx5AgGe6YlLjC35QUldrB9OS4zLhmeyTADi1%2BJiMpLSCkjWQci1x3qk1zvTe3Ct9dKq1XUVqvRN9h6NO91NY0DOJqIsRmcyt38ocM79Bd%2BmtbJK5jbiRoSnK%2B5sXZXcLX9VegJc6G691WMkaPAVssi0spDLCmS7jBPhLd9QFJrCGoVljDgZhLjJ2XLJu3D9vp6ho36n2QHMyL3vaocGZcT&X-Amz-Signature=8dae1343b95b5b0f556ce020645d62bb6ab00f879bfdf24ba548894979713c02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMCESQNA%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBqZdG7AFBpmg0quabqXgIGjv7rA%2BlW7YhLrkh6011hJAiEAxn65gvMWdF1uUbs15XIv4egkyt8fHDDHvkqFdMC9%2FroqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFee0ZsnYeMdSctauSrcA5RfuWFFrFC%2BUVvyeVL9XYJW2bvODYV2j2ODkQVt3j0XQ1nvkzDP2VtnCtTjykBxApHhsoJ%2BBdVa7WmOAimiMd7RNI0m3hIkkXqO8mnwRiYLqJQMVNL0%2FRnxCG1r5yobxvErgWc3lWvjbonxFfEhuVu%2Bc8SeWvukWSgDfRzDfRl4dvgnODKkB1LimQpEdV8upgGwfGIqvlWWaqtMKZcG5MwNUw8Q%2BupO9YEieXy2xK3lu5ed1Mf1305u2Pglr%2F%2FriAn5DiiyHvke5ok2th6gkd%2F%2FLV4MQ32wu3lDhrchuHPuF2uWlgDvior2yfwgZ%2FQNZ2fmq6pe%2BfuUNecNOQuX2D2hCHDZtJzcG173t1i%2BPbvMz0nj5VqI6M2uF%2FDK7CPclRUwNMqhNfMEKr5UVnrZ2yUyulH3sL173PVAbUWtVKJcu%2Faag3Aj8mpydo2gG1z9clPy3BmgC%2BO15JPK%2BM9%2FQNTNNPhN3shxTVA3SAqaFVJWVEvpcGV7W9%2FCYpedO8PwPMvekbVvtRzwiQeE8DnJp5jn92Y0W7lwP6Pa%2F61KQIrC0X2MnFR%2BotyLLaZVRjNBa9qbKgHItyNmZa9l5OgAwpqgBw%2BfoX2zT5qOWEGBNT6DA76OOKY4QcPQFf5iMJ%2FSrckGOqUBnkt2lEQtXbwXsxEbPn4%2F3VZUNZLJMIorPA%2B3ZyM4WO6eq%2Bby8kcSL%2BWaBKfG56wYQGxtyZa7dAe8GJHk4bhZ%2Fqdk2x6xWed2odS8UAruhzmsryPEhyNVI0omSEDrpW%2BQsnZ5EUGGaOBdm6fSUKoU4qxIu4RvC4Dj0s6JNBSSoR6l0704HU0gK88abcZXwwG0DgP1hBSfs9N0DKJapiJQU%2Ba8XTiK&X-Amz-Signature=ef10e45bd3fc8766bac90b04bd7675993516a1c4e923cd609e68ade9ceb070ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

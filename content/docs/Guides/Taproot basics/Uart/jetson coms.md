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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBUACAVM%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCfXVWJVqFh%2BpfqZvyxvnYdj4zo4vpuBpx6nHZtK45BeAIgQva79gZ5inm5PZGnrIsnf3KxZFwdkpsDgrtqBFyrBrwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELhK953j7jSyqadqyrcA4bVDdxRg4uouG6yJwuBrE5BC7NxNZV%2B5m99YrHKW%2F0%2B3%2BIvERNGPZP1NtmU4tDUdEzxC%2FmOTW9VlcCYhO0A38BoJ5cmD0u6OEza4bO6bdQ89NlvHsBTN9oQDF42SdvvgS80E2cuJhxsLLiNywFo1N5O1TcFsHP6Z7RDTrVgiIFGjfKviLBjraylZ9lGfeT7ITjT048CYtImofVKHyoVNzmZ9uOAr1OUlIOrzqfvAFPMo8Q4h9Zgfdq2VXsmgQqctlLSuJQ1%2BPObBjvAVMXHGOE2r3f5S%2Bl%2BoTDZJjfXLTV1luDfa%2B%2B%2FFMClFdcXdFcRceqfVSyAOKSJBwekivHEKufv45Fv8eQe5ct%2BboFkUIjM41UKMYYg%2FzIym4AggqccrTBwoAX9Be4%2BOqpatNRdBqVFi3UGyNCBEsv2%2BdHkEuCACtvOQ8fzbd0UAxVWId8OL%2BQhpSB9BMQdJ3Jj%2F96Smq0RAw5r5RKwUwCZZ1PEK%2F%2Fn8ZLsxhCD8z3N98O1WjYP%2FKG8gslnTPTCbRzeV6ReNarmQ4KQ523ePQHHDUyI0rs8F34CJcLBnJon3r74gGkibb7koHeGTNhHz38ykbXASfv4XlW1LAaG4hG5sL9OE994%2FCjcuyKLPrBGXIlDMKL7m8cGOqUBB%2Bv1gEKbTYfw996R9pht1%2BJLCKhEnvoHV7S3%2F2VMNaPtcfmVXaXSNXReRm35woxHPTgn9BoH1ivnM0rUY0N47B1znl88tr4t5vs6abvHMPSJmZv4aka8ufT8csNl3EODx2pyB9l6FuNJvEaWo5eGnIA%2BjkdCsj9OAHxcU6ptWBsipoAkjr4Fp%2FzuYgqdaRW841TEyOF1YFFtD0EgnG1SfSQmiN9F&X-Amz-Signature=ff06103227a92440310af760dc98227e2317761797bfa6fcabe5620f50f61dce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TBAHQIT%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIBirdaRr%2BLLcxMkWruPvGy7kjoNC4UI%2FhmilnRq6ffiVAiEAl%2FQox7lcdNFS0HZHWleYp5qIMOKv%2BxoLD0tbcMwdqRMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtPO269RyoJiXbw9SrcA%2F9VG8GvnkVVLxyzXuYJ1e49cQ20xsUOXihDvFySXDsO435pRRdnn0l2B6QpS5hLPSdX78hrikjHYVM6ETUDFqiYR4VRxEMYLFKwCRDq%2BQ%2FsX0pcxzZFJsG96VS0o%2F%2BWaRMFwnP9Qk0Idg68F2u%2F3HUDwQNiKFXB2PBG64a4XoX2GXeg1U1ArYXakRMKp0OdJOAzeyX9H0GcnEuAVi9LxvISUbtxle8dEaFxLLoBcFKhXWacuKc28u9ZWC0msbHPis0tj4zY2HAZizNVEarBNCFaMGTdNrnKeoTDfQCelo1vc1jtwSO%2BTjFvvlKYO9JR%2FiEF81x5NMxGGLIFIWhUi8UF47JrcQoWYT9hsy90FTdhP0HcCQ6AtgGxi6qiUv9mv3R2wSVe40nHMT1HDopleFyjM4%2Fe6FUIx3IvJ%2FVTt84YINgPPay8EM%2FdfiMm2gf2YykDA%2BKV8Fmldvie5ReMhfYE5XtQfUczQOaC1VZT3TM9OW7iVdKjVz70PCWsRu6M%2BXZSvFLJYjtsNO%2BUV15H7APmEHPeLw13fDFeYDrFMi2BrFOA6F72aFrkazFYDnplxzD83o0kJY878Kb61wZ8OgeOD5r0IK8KJDLA3j1CDkOJsL2O1wlT2UFlFM%2BxMI36m8cGOqUBlLfs2myBz%2FJrsDGZBYKuYQxENGYH9QD1Y2ZsbB2j0Z%2Brj8akqh2PJk5uoxa9nLcKM7Yv7pdSoSL%2FT37arN6yeKJDIYD4NWjvc3wojRESNivydq78VYFfZA0vniOT6xYkZdyy1Wza0To22bQUNdCQfmV2By9HnCNrKwSR6ORwVmAF6ciiyyKSysN4YVXkNaCcSYCJGIWqJ%2BLcRqB%2BWD5RyjEuTGqP&X-Amz-Signature=8d9d67cd6e533dd366b3648b78b78a52e208f849545518f01ace6e8d4fa14d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647KLWV7Q%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBsw21H%2BKa0VoDn3iwaCfb0BUrtccIu%2BK%2FiJqylJUJexAiBa0NRgNc%2BqylhvkOIpeU7JSDoUhFzxMZTNGEMmdSNVriqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc%2FIX60AupCIVwuWAKtwDDIHO3iYrF3y4fXDh2zWc87G51KzR9GKXXG6i47e6KUDE%2BmufZOJ8qxiCuGOfnlNaAS0VLFM1XHda5InYcJaCFH3ImlsUAN%2F7ho8tmUz2qq5K%2BBEAjsp1wl36C%2BA%2FJRCelgT4eN7eKmGluQ29IQbmLO3i4Fhbg0fPIhB%2FdD5ud4IXenMbioxgh3UczL7tjqmIyQIOKTXvBCraFrM%2FMs6e48oYp6sDnc3uienXcOMokAYnTFYBMtLGWpG1QAbq%2BXymQx%2BmvTGTaVCUIqF2aJU3O8rabcmzwsN5%2FUjeQmhDN4wsnCfYaS5B9MdHVm9Yw98tmUETrUiWeiI%2FmBju4sybHD0FVw2emkgn4x5x8nxVOr4%2BWmYLLyUepqXiI%2FWXut%2BqNcHKuQ3iRUBDo7GdZQTgpJZux7iZNgQci%2B6WcEZBTECURRdibL%2FPiC8klD%2BXUD1CUm%2FSU1%2FMctj4Q1kwiaF%2BhvBQAu0W6h2HfbDgJjsK6MIZd3Jzezj%2Fh5YV9nYQzeFaQFY9srQhBGdpHz3Qd9Q%2FgSwGkAU7a2MNyaWIsZKst9MqRvIqcbcgszGc%2FIjfUQkMcWKC6TNJasohbzv2%2F2qaciX9XqXUq%2BQylPuo%2FAfpW3uftzBR8AHtA%2BqvIREw1%2FqbxwY6pgFXVi6UeeklQkkwT%2B7nhcpES907dsvllSnD54SHs81LFlIosOZZn%2B4ZFElqHB9pxzdeDaq1OjrjTJAgCsCOYLx%2B301Ow1zyXgMjx8vRFu1Nfb%2Bn7tsvn1uqfWxq3144fYyaAIofEAnK4rzFAjd8JrDfS7oAVQgA3grJ2aPB7MVaSWf31%2FaMtMv8lWLOB6M%2B997pi78NxXi0HMbTj674UrUwfwH0Z3fw&X-Amz-Signature=a542c32842920cf7f11257b24fc08d1d5ef5c520ebe6c213a936e76655bb2121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647KLWV7Q%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBsw21H%2BKa0VoDn3iwaCfb0BUrtccIu%2BK%2FiJqylJUJexAiBa0NRgNc%2BqylhvkOIpeU7JSDoUhFzxMZTNGEMmdSNVriqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc%2FIX60AupCIVwuWAKtwDDIHO3iYrF3y4fXDh2zWc87G51KzR9GKXXG6i47e6KUDE%2BmufZOJ8qxiCuGOfnlNaAS0VLFM1XHda5InYcJaCFH3ImlsUAN%2F7ho8tmUz2qq5K%2BBEAjsp1wl36C%2BA%2FJRCelgT4eN7eKmGluQ29IQbmLO3i4Fhbg0fPIhB%2FdD5ud4IXenMbioxgh3UczL7tjqmIyQIOKTXvBCraFrM%2FMs6e48oYp6sDnc3uienXcOMokAYnTFYBMtLGWpG1QAbq%2BXymQx%2BmvTGTaVCUIqF2aJU3O8rabcmzwsN5%2FUjeQmhDN4wsnCfYaS5B9MdHVm9Yw98tmUETrUiWeiI%2FmBju4sybHD0FVw2emkgn4x5x8nxVOr4%2BWmYLLyUepqXiI%2FWXut%2BqNcHKuQ3iRUBDo7GdZQTgpJZux7iZNgQci%2B6WcEZBTECURRdibL%2FPiC8klD%2BXUD1CUm%2FSU1%2FMctj4Q1kwiaF%2BhvBQAu0W6h2HfbDgJjsK6MIZd3Jzezj%2Fh5YV9nYQzeFaQFY9srQhBGdpHz3Qd9Q%2FgSwGkAU7a2MNyaWIsZKst9MqRvIqcbcgszGc%2FIjfUQkMcWKC6TNJasohbzv2%2F2qaciX9XqXUq%2BQylPuo%2FAfpW3uftzBR8AHtA%2BqvIREw1%2FqbxwY6pgFXVi6UeeklQkkwT%2B7nhcpES907dsvllSnD54SHs81LFlIosOZZn%2B4ZFElqHB9pxzdeDaq1OjrjTJAgCsCOYLx%2B301Ow1zyXgMjx8vRFu1Nfb%2Bn7tsvn1uqfWxq3144fYyaAIofEAnK4rzFAjd8JrDfS7oAVQgA3grJ2aPB7MVaSWf31%2FaMtMv8lWLOB6M%2B997pi78NxXi0HMbTj674UrUwfwH0Z3fw&X-Amz-Signature=71fd5dfdae1bc814289f3d4c1c08b4552a315209a8d9bb56e5ab02a76162946d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TBAHQIT%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIBirdaRr%2BLLcxMkWruPvGy7kjoNC4UI%2FhmilnRq6ffiVAiEAl%2FQox7lcdNFS0HZHWleYp5qIMOKv%2BxoLD0tbcMwdqRMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtPO269RyoJiXbw9SrcA%2F9VG8GvnkVVLxyzXuYJ1e49cQ20xsUOXihDvFySXDsO435pRRdnn0l2B6QpS5hLPSdX78hrikjHYVM6ETUDFqiYR4VRxEMYLFKwCRDq%2BQ%2FsX0pcxzZFJsG96VS0o%2F%2BWaRMFwnP9Qk0Idg68F2u%2F3HUDwQNiKFXB2PBG64a4XoX2GXeg1U1ArYXakRMKp0OdJOAzeyX9H0GcnEuAVi9LxvISUbtxle8dEaFxLLoBcFKhXWacuKc28u9ZWC0msbHPis0tj4zY2HAZizNVEarBNCFaMGTdNrnKeoTDfQCelo1vc1jtwSO%2BTjFvvlKYO9JR%2FiEF81x5NMxGGLIFIWhUi8UF47JrcQoWYT9hsy90FTdhP0HcCQ6AtgGxi6qiUv9mv3R2wSVe40nHMT1HDopleFyjM4%2Fe6FUIx3IvJ%2FVTt84YINgPPay8EM%2FdfiMm2gf2YykDA%2BKV8Fmldvie5ReMhfYE5XtQfUczQOaC1VZT3TM9OW7iVdKjVz70PCWsRu6M%2BXZSvFLJYjtsNO%2BUV15H7APmEHPeLw13fDFeYDrFMi2BrFOA6F72aFrkazFYDnplxzD83o0kJY878Kb61wZ8OgeOD5r0IK8KJDLA3j1CDkOJsL2O1wlT2UFlFM%2BxMI36m8cGOqUBlLfs2myBz%2FJrsDGZBYKuYQxENGYH9QD1Y2ZsbB2j0Z%2Brj8akqh2PJk5uoxa9nLcKM7Yv7pdSoSL%2FT37arN6yeKJDIYD4NWjvc3wojRESNivydq78VYFfZA0vniOT6xYkZdyy1Wza0To22bQUNdCQfmV2By9HnCNrKwSR6ORwVmAF6ciiyyKSysN4YVXkNaCcSYCJGIWqJ%2BLcRqB%2BWD5RyjEuTGqP&X-Amz-Signature=2b40728a591fbb67c6742e3d19b01f70d4348a98c85e4ef7d1959d525d65f241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TBAHQIT%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIBirdaRr%2BLLcxMkWruPvGy7kjoNC4UI%2FhmilnRq6ffiVAiEAl%2FQox7lcdNFS0HZHWleYp5qIMOKv%2BxoLD0tbcMwdqRMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtPO269RyoJiXbw9SrcA%2F9VG8GvnkVVLxyzXuYJ1e49cQ20xsUOXihDvFySXDsO435pRRdnn0l2B6QpS5hLPSdX78hrikjHYVM6ETUDFqiYR4VRxEMYLFKwCRDq%2BQ%2FsX0pcxzZFJsG96VS0o%2F%2BWaRMFwnP9Qk0Idg68F2u%2F3HUDwQNiKFXB2PBG64a4XoX2GXeg1U1ArYXakRMKp0OdJOAzeyX9H0GcnEuAVi9LxvISUbtxle8dEaFxLLoBcFKhXWacuKc28u9ZWC0msbHPis0tj4zY2HAZizNVEarBNCFaMGTdNrnKeoTDfQCelo1vc1jtwSO%2BTjFvvlKYO9JR%2FiEF81x5NMxGGLIFIWhUi8UF47JrcQoWYT9hsy90FTdhP0HcCQ6AtgGxi6qiUv9mv3R2wSVe40nHMT1HDopleFyjM4%2Fe6FUIx3IvJ%2FVTt84YINgPPay8EM%2FdfiMm2gf2YykDA%2BKV8Fmldvie5ReMhfYE5XtQfUczQOaC1VZT3TM9OW7iVdKjVz70PCWsRu6M%2BXZSvFLJYjtsNO%2BUV15H7APmEHPeLw13fDFeYDrFMi2BrFOA6F72aFrkazFYDnplxzD83o0kJY878Kb61wZ8OgeOD5r0IK8KJDLA3j1CDkOJsL2O1wlT2UFlFM%2BxMI36m8cGOqUBlLfs2myBz%2FJrsDGZBYKuYQxENGYH9QD1Y2ZsbB2j0Z%2Brj8akqh2PJk5uoxa9nLcKM7Yv7pdSoSL%2FT37arN6yeKJDIYD4NWjvc3wojRESNivydq78VYFfZA0vniOT6xYkZdyy1Wza0To22bQUNdCQfmV2By9HnCNrKwSR6ORwVmAF6ciiyyKSysN4YVXkNaCcSYCJGIWqJ%2BLcRqB%2BWD5RyjEuTGqP&X-Amz-Signature=5919587eb449d7868dacc49b0052a146933a96efd14a7a68867ad8baf60e0c79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMFDXK3X%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCLH7XNXlaq2v1mP3Iod7Tzbd0D91SSnmyKhndl%2FU8VqgIhAIDx8ttnQjoOw7I5mODU%2Fs5M8y4IGqMLVg5ft8UUH6cLKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxV8trdYWScKIsJPTcq3AM6EQFkhsJF3bzF203d2YVe%2Bh8Bqd4Wja8xeWHEuIBhNHx%2F%2FqLA2DFIe4DEGyQjP3Y6LM1QH1kPtvnXG6WXiVOF%2FYGj%2FywpQc23%2FJWw48BNRpG3Jt51WuG31PeRWdl4vfiXa4iktDdiKViWvhJEkCDB7dKYSn6BLf%2BVaf4CDPATfNhRqWBSzpVnJRfwPbYUaBltqRlpGsxAhGfrIkQACaSrxypJxOKy2B93P%2FmdhgMaezGfUGyiPrcCcuSkIR%2F2z%2BtDUSX7Ldb%2B6YGC7SgSHG72Cz6ELOhymykUtffRzg27GsBMcAViIGlEQqTPxv3ZrADmqWfVu4SEGzaBZVAh61CFBo2mNvTCEgqjTvNd6E5%2Bv%2FhNyzzo1l%2B7wRLaFNR9toaPMTu1vYMdpRcNrTeSWF459LtgEGp6FSLaa2Ny1TExJ47pRK%2B0rF3pQeG3wfKkqpx4UfDhqPspIUdAfVXrl8LIcxIxTYuPC8Y8o4apCjyG6cPVikxLo5y5LG6BR2cE6Ifrwn9aJr1pZGJo3JXCv9pEFQmFeb5RXBzdDRvzeSb9kJrR0q3HFymuIxPjSbHMcMRqW5ugKeaKZ0kf3DVOOUPO1FGqQR7kUHbweX5bDYJMMp9Q6vB3lTmSYJ8ZpzDE%2BpvHBjqkAQzYMctItysVk5RLpd%2FUnAwyFvHNt1wSpISEDB72smqzyBkaF7OaL7oS4KOWY0N0JTCn1nU%2BcuHgyvT%2F5cc0c57CumuQ49cPmd6zg%2BO5pQTJakzZEYUNiYgtwlsABqYEtTFMMqgB4B%2BEgy7N0j%2BS3AvWhoz8sfz5Ut4FengFKILYKH9sYV6hNoLVuGfiJ8hmKGcdATkn3zSEjVx6uHRZ6UHSCdqk&X-Amz-Signature=eae83d583f5b6d7b76e65bc9899d2f55f526c44f86d700e71d48b41dc06f6769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

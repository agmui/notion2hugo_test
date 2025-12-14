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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOSIX7R%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCguFXCJziqaJfGafcfd2w1xCDg2a6sEXR%2BssTv9KCf5AIhAOKYd9N9250LVRrcgqaxgIew64nrGt%2BlKu2YO5LHxry0Kv8DCCoQABoMNjM3NDIzMTgzODA1IgwPJC6tbqKg2YI6EcIq3AOBqS3xV%2FtfLLKKV%2FG9MU7MU7ZGvFI%2BaQxfAm0QNYrp6EFn6K3H88ZRFKbbwORP3v5IK6o4mTU8FpYkbuF%2BohRvHIlZfNAhCuwS8mXpHjVWbw0DbNfZiWuFV9X0FmfUfki9pbUfaJbSNAYscy6oD9LD4hUeA94Td%2FX5QGBK3Gc8w2a3QWuEDoO849sQnUO8j6cSbIiLbVmFo7ZTQ0bcAp1Y7%2B4prQH%2B%2FY5lhW4OK3JievRGuW9czzFq%2BNQrDcsvywYhvW3FMk1D5O7TzRGdVdAQJNerF6HTYA%2BwJMTzUr7tIhXs9kZ7V9ZcVDswTe1gLId%2Fu1Wh8%2FgWVFrCQxPExp4zKDDuJoFZM873v4m1agEHQQM5%2FPgJM5j6FgWOTZ7i%2FGQCMYSFLrFbdpYFIAC0jX98VJrBtCUm5ullh0TszcMH%2FM2wSSm1CPo8R1son8AxjBpDHnjpId%2BNVvWqhYXrvVmavcYySL0HXXOv0g4n3hn%2B9RRNPy7LW9OKUtAAKU7f%2FqCssSJexgNIwu4rkRbHPXXlpYEX7YrvcH3Yq92bzu3%2FqdDLlB0Pq2F3sZtq9HwhVfkK92gixbLjacNRCSWTam%2BlRhhTo2a87YPGNGsupZkhIDtNxUTZh2LrbcbttDCUl%2FjJBjqkAZJpTevwpSMWCc08yboJej8snVc7guUmnlFPwuzB7Qgu%2F8m7%2BozPTXeBc3iyM144Bm7RP%2F0Qba6FnEbh2TLdUQEDfJiNDdtBObK4yw5QjlufTZHfFtte2Rqq8VlEwmNGVxi5p%2FCbSRUxFlzN2F6aempmLNNU2DCRKh1DWvz367%2FibmX8rJhvmTJcjWTOwoK1vZYu9wshLwRbqYArsfRdDG1D5a52&X-Amz-Signature=ef7188cd3a53a892db0176241b8d686ccde09d721f930550fc5b5f0a5943eb49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D7BBL6R%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDI2%2BPhu1h73q%2By4zNjXcT%2BWtfAx9efuXk0uo4%2FIbmZjQIhAMWFWNG3JWJtqUCcJWFhDRJ9HNQVKSb2mU2nmti2mrPsKv8DCCoQABoMNjM3NDIzMTgzODA1IgxMLqbrl6roZUG0%2BsAq3ANPIOK5LvKuDB2h8B6vzcZW9JOBNec%2BZZJJoCKBukxOLjBucLq3%2BA0DSqSHLHp1Ad%2B3qWx1MTTm0LumXk8YtrGraYTNUo4u6q5uSYmW1bFMzm5TPIaI1w%2FVewuxPhVW9TX0BTYo0egrGJDuBmcld393Cv3Qj7xRQnnBSdVNgqItqMFSCR%2FGde4e%2Fp%2Bhbhif0krTX%2FaGW3onw0ooitd2Mio%2Fpq0n1%2FmiXQ%2FOgYyfUJKHWDG6NgzZynRoGxpV2ETVBl4sNDAeaEWqVhosYDOtXoH3KTlHs6dqyLNExvQLRKcOJyQl0zXVryOUlZki5PdW61sJ9gLK2qIVZHpMlQrLRKrYiuciDIcScQdux%2B0gtsfL3zFMKuYHDX62FYLWYPhM1UMnjhUAShzDLrV2Uq0KlSPe7N%2FiCjj%2B7KNUUamVmliLpL9oooAESN65dC7cvHTxfxv1oMGrgvYgXZJRfJLLWKYu2nSD18CC8MKiWBkyIdkwptD9YXNjBKGo11OCz%2FxD1woYNtTR8bajrqqKBNwb4muNF2ozYp%2FU3U1plMXSZlbo57zxECT9LeCXbrv%2B88BEISNDd93eQuIJbBnFQVszceAX0ym5wAt%2BKw7jgL61cu%2BYbQVsBJIBlEaMsXZJEzDwlvjJBjqkATavTUI3FS2%2FRQjKTiEvSeY%2BKrC0fuK37gKXfvntHYdfIKiwEA27UnnAASKFwBQDvFIAhY%2BY8K96hp4A%2BLy2DxxghU0AiX8Mtidl6PXCtaPGCte32kGj%2BgfGIahHCZSGsFOSM96NQpGZojVYI4zTAQ0%2BDx7SQP5%2FOki8nrBenbI9CtnPFFEXkBJvPpSpRkUNAAyyUq95Bk%2FDmh3V630RNkBTllQR&X-Amz-Signature=29992f1a587605cc46739b086bc589fe6e0202e62c10e66ef33799b76d784702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W627XK2S%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBE3kGw9fUCPnwb0L3iAfOvklEqnaTSJnZJl3n5q%2FcCMAiEAwkVvKTnFrM6gv0oToPiOhhDar42lKXM%2FTkV4E7UPUUAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDP%2FJyQi15HjmA70kQCrcA%2Bkq%2B%2FvLaa2T7XeP4BA9hVT%2FGhT8pvWj9ypak%2FOAmqhfO9DEjc7izAmKgWidvCDCSNSaH5h9donKFTid4ArbYNwO%2F%2BhweInjIniuKP5a00H9NjejDht4e4Ov4shkvXe0cjydFzQ7Lg1ArNqAsRw434Xx3HGBSg2uNeM%2F6O0vjNVRdoiqXjN4jnBa65AvxgfY1CSRgZadwfPAAjIEHEAthphEDrRlVYVRwIMsh0c%2FYLOxCtWby09dX2VoUa0siKp0fSWAiRiuxvTEkBh5m93lFq2erDTIAqqtA2dCMrKgcqcg9%2FqF4pEGyMSZF3uAhEpjtxatle2LNKaI4OywgnT6Bz%2FX6irQFXwYvns1pRRdVY9go2733KeedIhLJknP860e9di0Sjk7TcuYXGmk8zO%2BBYKgqPoYp3EybC1Fc2W29Z2nO1lYZ%2F5hye7Kui4jPiHedghPX2jv8XZGO7H32ywMOJhTtAmIkCXbIY0CPEtmEm0E0OZ6VEKuT9T1ggcZd%2BGu1Eytc3koUDBnmWcX70Jc%2FPFhC9X6ZYDkTu326a8hct4YOywD78KOL58Y9b8icxaFDjOjQeDPWBReOTBS%2F%2FWX6BL8Zwa3F4rcyRGgKiWP7VOIKblJ5OwMzRD%2BmBFuMNuW%2BMkGOqUBqWKtbjkQadHyHtiB%2FIvtXVH9WK8sfqXm7zkhPLqTxgqWPjowONzxvjpcX5SG1chh%2FLAYAeModOxSMxZz%2Bo%2FVZE0QHTs%2F8ZNuoocdXUjSzrndk0zlCiZ1%2Bd7W%2FbhAKdoz8bhzzwgxj6yru3i4BDAWeXKx7ayEBRCVPx7dUQq4svZb75nHT7%2FTXYHajX%2BuKzFdbS4dUAb0nI5RGLMe4R0rTFYwUU95&X-Amz-Signature=f52d4f1f47da1a29e001aeb4e042a1e3c577f8f3f0ced75b38a05ae765cce267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W627XK2S%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBE3kGw9fUCPnwb0L3iAfOvklEqnaTSJnZJl3n5q%2FcCMAiEAwkVvKTnFrM6gv0oToPiOhhDar42lKXM%2FTkV4E7UPUUAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDP%2FJyQi15HjmA70kQCrcA%2Bkq%2B%2FvLaa2T7XeP4BA9hVT%2FGhT8pvWj9ypak%2FOAmqhfO9DEjc7izAmKgWidvCDCSNSaH5h9donKFTid4ArbYNwO%2F%2BhweInjIniuKP5a00H9NjejDht4e4Ov4shkvXe0cjydFzQ7Lg1ArNqAsRw434Xx3HGBSg2uNeM%2F6O0vjNVRdoiqXjN4jnBa65AvxgfY1CSRgZadwfPAAjIEHEAthphEDrRlVYVRwIMsh0c%2FYLOxCtWby09dX2VoUa0siKp0fSWAiRiuxvTEkBh5m93lFq2erDTIAqqtA2dCMrKgcqcg9%2FqF4pEGyMSZF3uAhEpjtxatle2LNKaI4OywgnT6Bz%2FX6irQFXwYvns1pRRdVY9go2733KeedIhLJknP860e9di0Sjk7TcuYXGmk8zO%2BBYKgqPoYp3EybC1Fc2W29Z2nO1lYZ%2F5hye7Kui4jPiHedghPX2jv8XZGO7H32ywMOJhTtAmIkCXbIY0CPEtmEm0E0OZ6VEKuT9T1ggcZd%2BGu1Eytc3koUDBnmWcX70Jc%2FPFhC9X6ZYDkTu326a8hct4YOywD78KOL58Y9b8icxaFDjOjQeDPWBReOTBS%2F%2FWX6BL8Zwa3F4rcyRGgKiWP7VOIKblJ5OwMzRD%2BmBFuMNuW%2BMkGOqUBqWKtbjkQadHyHtiB%2FIvtXVH9WK8sfqXm7zkhPLqTxgqWPjowONzxvjpcX5SG1chh%2FLAYAeModOxSMxZz%2Bo%2FVZE0QHTs%2F8ZNuoocdXUjSzrndk0zlCiZ1%2Bd7W%2FbhAKdoz8bhzzwgxj6yru3i4BDAWeXKx7ayEBRCVPx7dUQq4svZb75nHT7%2FTXYHajX%2BuKzFdbS4dUAb0nI5RGLMe4R0rTFYwUU95&X-Amz-Signature=03a351abf5272c212e24d98a2066c065a89005ad5d3fc6ed6aea95e7a17a3fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D7BBL6R%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDI2%2BPhu1h73q%2By4zNjXcT%2BWtfAx9efuXk0uo4%2FIbmZjQIhAMWFWNG3JWJtqUCcJWFhDRJ9HNQVKSb2mU2nmti2mrPsKv8DCCoQABoMNjM3NDIzMTgzODA1IgxMLqbrl6roZUG0%2BsAq3ANPIOK5LvKuDB2h8B6vzcZW9JOBNec%2BZZJJoCKBukxOLjBucLq3%2BA0DSqSHLHp1Ad%2B3qWx1MTTm0LumXk8YtrGraYTNUo4u6q5uSYmW1bFMzm5TPIaI1w%2FVewuxPhVW9TX0BTYo0egrGJDuBmcld393Cv3Qj7xRQnnBSdVNgqItqMFSCR%2FGde4e%2Fp%2Bhbhif0krTX%2FaGW3onw0ooitd2Mio%2Fpq0n1%2FmiXQ%2FOgYyfUJKHWDG6NgzZynRoGxpV2ETVBl4sNDAeaEWqVhosYDOtXoH3KTlHs6dqyLNExvQLRKcOJyQl0zXVryOUlZki5PdW61sJ9gLK2qIVZHpMlQrLRKrYiuciDIcScQdux%2B0gtsfL3zFMKuYHDX62FYLWYPhM1UMnjhUAShzDLrV2Uq0KlSPe7N%2FiCjj%2B7KNUUamVmliLpL9oooAESN65dC7cvHTxfxv1oMGrgvYgXZJRfJLLWKYu2nSD18CC8MKiWBkyIdkwptD9YXNjBKGo11OCz%2FxD1woYNtTR8bajrqqKBNwb4muNF2ozYp%2FU3U1plMXSZlbo57zxECT9LeCXbrv%2B88BEISNDd93eQuIJbBnFQVszceAX0ym5wAt%2BKw7jgL61cu%2BYbQVsBJIBlEaMsXZJEzDwlvjJBjqkATavTUI3FS2%2FRQjKTiEvSeY%2BKrC0fuK37gKXfvntHYdfIKiwEA27UnnAASKFwBQDvFIAhY%2BY8K96hp4A%2BLy2DxxghU0AiX8Mtidl6PXCtaPGCte32kGj%2BgfGIahHCZSGsFOSM96NQpGZojVYI4zTAQ0%2BDx7SQP5%2FOki8nrBenbI9CtnPFFEXkBJvPpSpRkUNAAyyUq95Bk%2FDmh3V630RNkBTllQR&X-Amz-Signature=7c91d046eccd3d0b01ba4146ac92be12a1311514c3e1ae3f31da617dbb88989a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D7BBL6R%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDI2%2BPhu1h73q%2By4zNjXcT%2BWtfAx9efuXk0uo4%2FIbmZjQIhAMWFWNG3JWJtqUCcJWFhDRJ9HNQVKSb2mU2nmti2mrPsKv8DCCoQABoMNjM3NDIzMTgzODA1IgxMLqbrl6roZUG0%2BsAq3ANPIOK5LvKuDB2h8B6vzcZW9JOBNec%2BZZJJoCKBukxOLjBucLq3%2BA0DSqSHLHp1Ad%2B3qWx1MTTm0LumXk8YtrGraYTNUo4u6q5uSYmW1bFMzm5TPIaI1w%2FVewuxPhVW9TX0BTYo0egrGJDuBmcld393Cv3Qj7xRQnnBSdVNgqItqMFSCR%2FGde4e%2Fp%2Bhbhif0krTX%2FaGW3onw0ooitd2Mio%2Fpq0n1%2FmiXQ%2FOgYyfUJKHWDG6NgzZynRoGxpV2ETVBl4sNDAeaEWqVhosYDOtXoH3KTlHs6dqyLNExvQLRKcOJyQl0zXVryOUlZki5PdW61sJ9gLK2qIVZHpMlQrLRKrYiuciDIcScQdux%2B0gtsfL3zFMKuYHDX62FYLWYPhM1UMnjhUAShzDLrV2Uq0KlSPe7N%2FiCjj%2B7KNUUamVmliLpL9oooAESN65dC7cvHTxfxv1oMGrgvYgXZJRfJLLWKYu2nSD18CC8MKiWBkyIdkwptD9YXNjBKGo11OCz%2FxD1woYNtTR8bajrqqKBNwb4muNF2ozYp%2FU3U1plMXSZlbo57zxECT9LeCXbrv%2B88BEISNDd93eQuIJbBnFQVszceAX0ym5wAt%2BKw7jgL61cu%2BYbQVsBJIBlEaMsXZJEzDwlvjJBjqkATavTUI3FS2%2FRQjKTiEvSeY%2BKrC0fuK37gKXfvntHYdfIKiwEA27UnnAASKFwBQDvFIAhY%2BY8K96hp4A%2BLy2DxxghU0AiX8Mtidl6PXCtaPGCte32kGj%2BgfGIahHCZSGsFOSM96NQpGZojVYI4zTAQ0%2BDx7SQP5%2FOki8nrBenbI9CtnPFFEXkBJvPpSpRkUNAAyyUq95Bk%2FDmh3V630RNkBTllQR&X-Amz-Signature=fb5e92d6cbe3580b2a7594ace1d06a6b708c06917afd79832a31d58f5cbcf131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BSNIMC5%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIG6Xxd8DaRqb1d%2FZ4Yw5ojMuipL9Xw9Ny2CZOTCNv%2B92AiEAo83uIaf8gXyzWZtZ%2BCnmqQe4V1r%2FZnp4fktDoMD3Aekq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNWlYAeyrmp01h%2BgHCrcA9vA0RvbNLKyJd%2FQZhI3HKI%2FOWTf1GUNQbQbouN43xGftNwg%2B%2FtLXiHMmej2fELJNuT%2F8tHdNGXQuc4OqzG3TZ7pX0TqIfBb%2BQaVFS7lMe6LJEIAJSV7BG8ukfo8ZuVObioY%2BxpbYwVuwFOIvvTQyx2cHgYlLeTCkU1D4Lpikhty3TmmTam5tESJcGWvwvVkvSPg0jm%2BQScza4dl8yYFag%2B%2BOWfEvG1NrzGE9vosZ1AdBa0cuFW27N8X7PUwhlD%2FDHRzNZUuZNZT5Wvt5LxD5pbNQAknR6pzDUA%2ByWZTJ1gPBiXXwFS89b2kENc4S2B%2F3%2Bl3LyiwXTOvntbMne18gcqPATbN8TiBIelJYfkra1Rpcg0J0H30lsA%2FBfHNOXLpBmtsw5r2xIsd86igpdNmcqcHBaySuu8xX7nnCLIiz69768GngZP1kLJox1deiAJHVoQ5DVPn%2BQKlOoYhbgpqJYKkV7d87l4rXzcO%2FBhFRLXsufBIsml3DtW1q9ZFImad3zsMoRIYnNjnRaDbo0K8BKCl99zeVigaVTtkRVFOMOMu0KV9aOHt3n5J9OkoE7uKgJrX%2FYQtsSmqh3U43t0nuV1K%2BgE0JiaFWSRnTFUP50LS%2B%2FHyio66T7XipNDRMOKW%2BMkGOqUBz0ZaTm8SpFDHNa%2FKRd8t%2FYlHUuVahf1oJatT9P0aaBouzEsJF9VCGh0gBbSte%2BSWcQ8xKH92dTq2LZSpQfY82SjbtIrobcAwvgBMnG8qhJTqucSImGy4cy2o4zwDpWN5tM%2BUZZU79cF1bbhwG%2BOMfs0pfkz3V42Em30dTSSjZr5BthlJOIEw3YF3K1aX%2FAqWHU0Gv8s83PN3giwagC8B56yberLr&X-Amz-Signature=a7cc2217e13270f2775a024be89e80c83f0c3eb54f0f8c6b0fd3768c7267bff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

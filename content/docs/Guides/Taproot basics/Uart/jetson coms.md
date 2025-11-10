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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVPHMBL4%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIADHw0eWEBM3zuh0fGn7rXf2V%2B5tIsZdYQ2nF6Eje1AJAiAXvdFC62RBObGBoBxHtTmJG6hKuTySHFPT8UV8x5a%2FsSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0lSlKH7KIUSFqVG6KtwDVUWfy3xVFOlI9xflwZ6VJZQLN0cx%2Fqqqw6FPG1DuxmxhLjt0vcCLwkmcBfw6JV5yQEuRzVZuI%2BymbysacHnvRMrHL%2FLAQkm94yoG73VIMCKAPEfWlGS8PMVCdWAIYIk%2F0b91s3zvo8i%2FJHPsznUt8ly9rHoMblE1oHaaN9vTuhpuwtM%2FjtK13op9h9cJCjP5JF%2BItPoThZactB6l%2FwxORDukm9NyP3MJ6ozu785Hdiarqr5sXw4f6RYVqhaHQy3PnvalgUE7EnUd4HUrCT3VbvNy2Lozd%2BsTHxktpB5AoWlqm4vTwDSXNeVqzydPr5fnKKeAFbGlTyEZbW8RzmD%2Fm9Qftl0RO6IQDCV%2F%2BVSogaBe19F8krNixxQx5owXeqs7GZF%2BPz%2FYZO8wNctrOFCE0%2BOvqffWq0TyxsC%2BzGauANFPFsBsAw9SnIhg2gKNGuHiRKL9%2FZQFoJsD%2FTLozLQUD3iS9hhgg3vuT1rqlJ2TiKJC1eefC7As4gUAoEkuI%2BWxeEBjHVHhb1mkUDCsJ%2BCOC2UVQxsjXSlS2cMa8scehMC5vXxEFayGkgc3WaQ7aFW5ZFBIO1IVazQ2hjeaONdDByOgzEJmQCWOHyzoQm1K9QE34cI2Bzw2JTykPjww1rDEyAY6pgFRVmRZFS7xeXPNvTbSqf%2FJCr0Aij205l%2F8wXEaJTaf3x19wR34zYHTdOkYyO5pbAhQU1%2FKINZwxV87bMYCFtC%2BrfEUrHg669EP%2BQowJcQehDU3rzT6Bs4%2Fg0kgq%2BAVmCnvqfTfFjb7HpSuGVwbFhKqa%2BaRjH2u4k5TLAJaofnetk7vo7xUP1JEPtzI%2F4Pd%2F6pt92Ce1QSSPyUb8WRsDsb976v0WiTP&X-Amz-Signature=b61ea3c311478e065c5ab8b46cfdc21241c42a9e94b8dcb2e37a19f8ba185a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGD37SSA%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIEBEocmSxPwrx64xecf%2FEKhANKHu86hQhjdEyRWBsI%2BKAiAdPdCFYvLSZwcS3Lrby9u4wkk7XcgfIAHcwkII%2BAQJ0yqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvvyMrOZtklixG1R%2BKtwDLV5CGX58JhFL1j5We4CjsOWapY58OZeqIUE3aN9K4eR0VEQzmnQ%2BWg3OFJmQuA4R9oHUI8LznybRDMjnkiPzr%2FDgNBr7z5Z0xJB80nbYdMyv7hd1lpfTaxGDEE5Zc2v6%2BypxT0CQ7VI5WAPhU3D1gv5SmlqKX4%2BgjdCAiUVzTMfjm2ILc5K3W3XmMDkCIUtfgoRHnKuB6F%2B6RpgiSD0bsFKLUE%2BIUxUQSCL212wWHjMt8vAyRLL7W34rKBaDbuz8jLZP0uB37nVLGVNJUwXwBacg97XTToLWhErj5Y8sMdDwhn%2Fwk%2FuuWb33WLYTILjm6t%2BCpwvHnuCJWsKkLuEjP1KvQbkhHZQHWtMsISY3xaFwzlxGk8hC79Qyxglw929WwcWmg5cAdnb7aDM5k5TmznlMT3DLxwfoW1ys7cIkLj6MhlWOp1gK1zzMSCug2CSP66YW%2BKO9BR9Ph8hj1vgczJgYtHHuU5cVShN6oDcjVdIX3vRiS7H5p19dreyJz521o1h3FJPH0b7%2Fi8CC6n3zupaCH28%2BtUwFPGG7wOGZ9O4sUBa835fFp9%2BNU%2F8VuLRFir2tXhAxZP%2B%2FVlt%2BlzRoyyWHf7G7RsTwf0k6muIFlxuuXLnD6seDT%2Fc2dVoworfEyAY6pgFqO5bmC5SuPU%2BP38wEaGyvpXhfz4tvvi43VD3gL1TIuzAFmjiCfzxW3rrwge9ipjNl42gDdJW2vhcqzZjUrm%2FDLKm0ohuOLfptg1GkFToaXLHxlCEvXat2%2FnxJOSTLoJ9EtBu4ZR7W59%2FPGBLVx8Kx6o3YK%2BQNdkKWSI%2BS2NKnqecnb6uGtQT3u44wPVi3oyxTq6tTGzHscifBpOVSrPfTXzXZjTL%2F&X-Amz-Signature=799664255b6304654ece397ad862f98159a134eb5f22e1d96f60c13baec5987a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCROYFSD%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIFufCnsm6sYCDhDRyZejc%2B4nDPAE3hvXvTbmn%2B5E3pfhAiEA8FWwEzLRfHKPCkgAROvdgIccsOOXZPHlhd%2F4CvkSiFEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNTvj9ZddxJuR85M2ircA58orK4XEupZIGt0SLlgl3YEV9TVmu7FQTG3BjeGvIXIU%2BppFaGuckgjVUM5rWXP2CiIGrzaR8ZFgbO5qjA4SqwyeVhlZc62fGD9pLQb9xFrUr0rAx1TlWj8lg1Ta5Ur998i2UPC3H3GczUBMJKnMD%2FGhWDTuMujemBsDwGQnfwZqdMJHHnWlMytqP3dlymnuaA6uy8vO974F4HvrUVYurFDUisK1TeFw0M5hM1%2BP%2BvPmhy9wMMKojy21VGDoJlClwX4%2BeGxlVns3qZKHOcoON403WVffY%2BxZL9Cc%2B1W8nVZwdVkWkmYgdy4ad%2F4SWKVHLhq%2FYeuyA2Hly%2F5F5oKgErO%2BL%2B4U9612v%2B7ipniZWfRBR%2BU0C0bKdOV5TRjOFiZT5UGivjYXxJzyZSkmAeNFmkZL13V8RAi8ZGKqz1pOqB3vP2l4%2BIe7v4s%2FyNq5ZroCp0N5lSJnvBTF6OusGR%2Flpl%2BZe9ZvDzcYQEyBgsqB0mrv10KiPCRBM1e45P6xGTU4z2zF%2BNgMiLUV2%2Bk1tnO03fUjTbB0vXFpCBHbM%2F%2FIhGgjlOxj92lJa4t76BMU2Vj2Hi9LUhYzdTzB9KVOqKHhiJ57WbIWB2IaKpmk9jCnsoL8Og%2BUjR%2BtAIQrbSTMLqzxMgGOqUB49%2F%2B33zMNVhZ7p50RtD2AXKAlawiOfAZp9nxe5dCnmO78x3a%2Bh0e4ZxTRMzxZzBsasuHT1ykIAtz3CZ1fYC0XOOVrlVpkcRDnqDTSWMuV1rdNTU6n7eonE6hruS8vqnDcFfZ661VczrOVOqtEBJ2tf%2BhDBBOdUzkV5LypkY52e3w%2BW0QpUvBxiiZAScdn7gd51O77vU7JHncLrtPoQrnG9vQqZSP&X-Amz-Signature=723965c8d951987ea2c04505c9da2665c7d8f771147a6535d0fd2df264b333ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCROYFSD%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIFufCnsm6sYCDhDRyZejc%2B4nDPAE3hvXvTbmn%2B5E3pfhAiEA8FWwEzLRfHKPCkgAROvdgIccsOOXZPHlhd%2F4CvkSiFEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNTvj9ZddxJuR85M2ircA58orK4XEupZIGt0SLlgl3YEV9TVmu7FQTG3BjeGvIXIU%2BppFaGuckgjVUM5rWXP2CiIGrzaR8ZFgbO5qjA4SqwyeVhlZc62fGD9pLQb9xFrUr0rAx1TlWj8lg1Ta5Ur998i2UPC3H3GczUBMJKnMD%2FGhWDTuMujemBsDwGQnfwZqdMJHHnWlMytqP3dlymnuaA6uy8vO974F4HvrUVYurFDUisK1TeFw0M5hM1%2BP%2BvPmhy9wMMKojy21VGDoJlClwX4%2BeGxlVns3qZKHOcoON403WVffY%2BxZL9Cc%2B1W8nVZwdVkWkmYgdy4ad%2F4SWKVHLhq%2FYeuyA2Hly%2F5F5oKgErO%2BL%2B4U9612v%2B7ipniZWfRBR%2BU0C0bKdOV5TRjOFiZT5UGivjYXxJzyZSkmAeNFmkZL13V8RAi8ZGKqz1pOqB3vP2l4%2BIe7v4s%2FyNq5ZroCp0N5lSJnvBTF6OusGR%2Flpl%2BZe9ZvDzcYQEyBgsqB0mrv10KiPCRBM1e45P6xGTU4z2zF%2BNgMiLUV2%2Bk1tnO03fUjTbB0vXFpCBHbM%2F%2FIhGgjlOxj92lJa4t76BMU2Vj2Hi9LUhYzdTzB9KVOqKHhiJ57WbIWB2IaKpmk9jCnsoL8Og%2BUjR%2BtAIQrbSTMLqzxMgGOqUB49%2F%2B33zMNVhZ7p50RtD2AXKAlawiOfAZp9nxe5dCnmO78x3a%2Bh0e4ZxTRMzxZzBsasuHT1ykIAtz3CZ1fYC0XOOVrlVpkcRDnqDTSWMuV1rdNTU6n7eonE6hruS8vqnDcFfZ661VczrOVOqtEBJ2tf%2BhDBBOdUzkV5LypkY52e3w%2BW0QpUvBxiiZAScdn7gd51O77vU7JHncLrtPoQrnG9vQqZSP&X-Amz-Signature=5ee11b238006811d95a8c290704d8a6dfc203b9fd832bdbccfed26a619ecb2fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGD37SSA%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIEBEocmSxPwrx64xecf%2FEKhANKHu86hQhjdEyRWBsI%2BKAiAdPdCFYvLSZwcS3Lrby9u4wkk7XcgfIAHcwkII%2BAQJ0yqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvvyMrOZtklixG1R%2BKtwDLV5CGX58JhFL1j5We4CjsOWapY58OZeqIUE3aN9K4eR0VEQzmnQ%2BWg3OFJmQuA4R9oHUI8LznybRDMjnkiPzr%2FDgNBr7z5Z0xJB80nbYdMyv7hd1lpfTaxGDEE5Zc2v6%2BypxT0CQ7VI5WAPhU3D1gv5SmlqKX4%2BgjdCAiUVzTMfjm2ILc5K3W3XmMDkCIUtfgoRHnKuB6F%2B6RpgiSD0bsFKLUE%2BIUxUQSCL212wWHjMt8vAyRLL7W34rKBaDbuz8jLZP0uB37nVLGVNJUwXwBacg97XTToLWhErj5Y8sMdDwhn%2Fwk%2FuuWb33WLYTILjm6t%2BCpwvHnuCJWsKkLuEjP1KvQbkhHZQHWtMsISY3xaFwzlxGk8hC79Qyxglw929WwcWmg5cAdnb7aDM5k5TmznlMT3DLxwfoW1ys7cIkLj6MhlWOp1gK1zzMSCug2CSP66YW%2BKO9BR9Ph8hj1vgczJgYtHHuU5cVShN6oDcjVdIX3vRiS7H5p19dreyJz521o1h3FJPH0b7%2Fi8CC6n3zupaCH28%2BtUwFPGG7wOGZ9O4sUBa835fFp9%2BNU%2F8VuLRFir2tXhAxZP%2B%2FVlt%2BlzRoyyWHf7G7RsTwf0k6muIFlxuuXLnD6seDT%2Fc2dVoworfEyAY6pgFqO5bmC5SuPU%2BP38wEaGyvpXhfz4tvvi43VD3gL1TIuzAFmjiCfzxW3rrwge9ipjNl42gDdJW2vhcqzZjUrm%2FDLKm0ohuOLfptg1GkFToaXLHxlCEvXat2%2FnxJOSTLoJ9EtBu4ZR7W59%2FPGBLVx8Kx6o3YK%2BQNdkKWSI%2BS2NKnqecnb6uGtQT3u44wPVi3oyxTq6tTGzHscifBpOVSrPfTXzXZjTL%2F&X-Amz-Signature=09e377fc4dc7da844b1e3227e6aff2692f16c75d66aa1984363571f062367244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGD37SSA%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIEBEocmSxPwrx64xecf%2FEKhANKHu86hQhjdEyRWBsI%2BKAiAdPdCFYvLSZwcS3Lrby9u4wkk7XcgfIAHcwkII%2BAQJ0yqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvvyMrOZtklixG1R%2BKtwDLV5CGX58JhFL1j5We4CjsOWapY58OZeqIUE3aN9K4eR0VEQzmnQ%2BWg3OFJmQuA4R9oHUI8LznybRDMjnkiPzr%2FDgNBr7z5Z0xJB80nbYdMyv7hd1lpfTaxGDEE5Zc2v6%2BypxT0CQ7VI5WAPhU3D1gv5SmlqKX4%2BgjdCAiUVzTMfjm2ILc5K3W3XmMDkCIUtfgoRHnKuB6F%2B6RpgiSD0bsFKLUE%2BIUxUQSCL212wWHjMt8vAyRLL7W34rKBaDbuz8jLZP0uB37nVLGVNJUwXwBacg97XTToLWhErj5Y8sMdDwhn%2Fwk%2FuuWb33WLYTILjm6t%2BCpwvHnuCJWsKkLuEjP1KvQbkhHZQHWtMsISY3xaFwzlxGk8hC79Qyxglw929WwcWmg5cAdnb7aDM5k5TmznlMT3DLxwfoW1ys7cIkLj6MhlWOp1gK1zzMSCug2CSP66YW%2BKO9BR9Ph8hj1vgczJgYtHHuU5cVShN6oDcjVdIX3vRiS7H5p19dreyJz521o1h3FJPH0b7%2Fi8CC6n3zupaCH28%2BtUwFPGG7wOGZ9O4sUBa835fFp9%2BNU%2F8VuLRFir2tXhAxZP%2B%2FVlt%2BlzRoyyWHf7G7RsTwf0k6muIFlxuuXLnD6seDT%2Fc2dVoworfEyAY6pgFqO5bmC5SuPU%2BP38wEaGyvpXhfz4tvvi43VD3gL1TIuzAFmjiCfzxW3rrwge9ipjNl42gDdJW2vhcqzZjUrm%2FDLKm0ohuOLfptg1GkFToaXLHxlCEvXat2%2FnxJOSTLoJ9EtBu4ZR7W59%2FPGBLVx8Kx6o3YK%2BQNdkKWSI%2BS2NKnqecnb6uGtQT3u44wPVi3oyxTq6tTGzHscifBpOVSrPfTXzXZjTL%2F&X-Amz-Signature=4d57dc380f4539defd134983e440910ce64059bb4cf59a177cddc5d82f9891fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHVC5MGC%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQC3s4Fk%2FT7Br6CU2u8dPSL3se%2Bku8dRKkxfHjcCon9A9wIhAI%2BO62fxDOSl0T0qKEwhpvGa4acLDZ2t24yUz9lMGLTpKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOlReiMcMdJ8Hk8Ywq3AP0sORDzei2cldEc8Nhk3dG7HBD5kS8WeVrcK8FJQCgZ%2BvQJWv%2FhuZR66fceBejuerHyAVW31MjOexvHRBcgEgAbVHr1WUY%2FTZR2C3zvPDqyYvkCbgqEu3J2u7HsOKLSdZtzLQ%2FQDywvVQ19L0wePw1yD3arJSIJdHhqubdMnKe%2BHWsusm9AnFGeuKDQnxshhhX49beiXgdikY18Aw38DHXwYRwf5t50kd1jZpK4vQu7ziQ0j2QALFYZM5wUssoBZtJy%2FhbwAeqqHmt28JKm3uIk85lGw6sgiXzXt3x%2B%2F3JIM%2FbVMDEwxva%2B0DtqEn7WzljIJqULeB1hKCYUGqMoBssQUzbspldt3OfS34bapu4CBUjbyGGMFqz3oSIhcovZsdjRjfHmKDqA4ZTxaUR16X3B%2Bz7FIVOPdXkLt7byvNpBMM3S2tnW8J1OTgVJpDkbPQ8Ok%2FtKXCaqjLMHySJDeswDrGCsCFnTbZezv7ZSrvR2D8meAAmpSXbhwsWFPnMkCT30GpB7kBvbAKgejp5321vpUeE8XEUX6apPNNC7zw7QsPUmbvygr9en3Qh45rhnc3iTZ%2FSBP4BvD9MADAVm6WmcA2sEOH%2FoTKNRF1WgjVDpDtJVhxm20YJjw7Q5zDbucTIBjqkAQk7hScZm7Vz0PfAmCOlPMdyrjVKazpowkI0qZIITzipjf3ZjXkddJzE4iJNnYcn7%2BxYQQae%2B7orW2%2Fzo1Orvhkdp%2FrA%2FVK0hd12kupP4zCcOCqHq%2FshdWukL6%2FPjrczq4gGzax6YY3F4d32LskQ4VX83v29l8ht5lsEFuoo80sghcmHUoDOYac1Wu%2B2JNijTFVlcUu70N5bz4QGHP%2FWe%2BcRR55L&X-Amz-Signature=e8a55ea894a42936aec41cca40992e5c9c251f5a8996b5347cd5b242b15185c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

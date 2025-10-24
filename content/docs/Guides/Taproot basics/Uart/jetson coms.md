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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3GIKSD5%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRSlhOd%2FpSHDRmycbzU5T%2BFEMoI9Uh4Krm4jFFriwKowIhAK%2BIDlee23Jf43SUhPfvck%2FNVe%2FAV5hVMjJ5HpKxSS1aKv8DCFIQABoMNjM3NDIzMTgzODA1Igx9LqzeWaN0xG7ufFIq3AMnIN8ZlvCuX%2BrYXC4n8rGNqZq3vSRcO9j%2FBAHR6CM0O36n2DqcI9yWFdMbV0QY1BptZ5fcunPMMYtQTLUMHJOSu56CqFzgIEc3NJJ9Z0CHwo3i1sh3GbfxEA5dtTgxMWm6YexQF3mamTFAklkR1haUfagN%2B46rFtHE5S%2FEMv9cdrq91Pg%2FsA68js9BOfQk3sjluIBiOyQPpNJ4pAjBF3sZRSAC5%2FaLjNb0aaZE1DlXKB7rQmQYYPfpSpL830WI1aaEQ5jABKS4qvp4BYOPQAU3RhvuJe8aoXUmtzt9hpXuHtl4PZjoh6St8LbuP5HaHndJQzL1JBz7RH2GIo0F7exSnnqQg2Q%2BfCjQtQN9UEzUo3sgbFTETwCVR45auJUa1ccOew3uO%2Bc%2B0AmXp5bUA13WpvapfBR3rdgWlwoWcGP5kTsui0GBfPoQcrGdjiRv4FupuWSHrkcSkCFoi5tUSS0qIvJoT%2FjANRybAbIsU9jos9YgIv2A7zUokL5cuXx%2FM0doFgtVT8F1Jh0GKBW573JQOJdqyLZOBJ8cy9%2FHeNwg8%2BwlK1nwIFd1J96HY7YCLeTCNFJFQG4JsEdGBOOPyFpV5GNcZTBRg4kSbpqJHQ8n8%2B0PtbwGp9%2FuSyVWyTCtn%2BvHBjqkAcMSt7k10vPh16HHNvNV6Hix5sG0Z7MvSBWdg76aMTxps49H3hhrAdn2rUgq5tE6yK75r2bM3ogRa9N%2FdPs4oWEOgIwowHi%2FzfhAdpxGbXVt6eocfFvvjKTok9l4Uw7aKT34QcoQPuNiUGZqOpev7yCiXeZirRD3mmEdfuDtSinBHxxXb6OPJNS4Ci0uzo4dMAki%2FxRxUQZCGaN5Xijutew5qtzh&X-Amz-Signature=1e082bb18a138b6ac89d31332e38907bf04ce7d5c88ce3440e2fca9aa316ad22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5INZIB%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgmwP5EGsxzby%2B4Nfuvur8NMmnCc6n5nbQCoDWegb5FgIgNqo7qiOM4CY95qLLJyWjRmK%2FLsBmvgsUcJmg6%2FdQYDoq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDCM3m5%2FmWl7XxANR2CrcA%2BRxph6Fnph%2B0BosqLTGUVApR7SOm3QaD06GWd0zIvoqV0EPN9199nQHEv5NlQUJKY2pshaU47Iz7QebHe%2BtNVD9N2IjZN3x7JdifyOFo7%2Fg5ZxUsBzuQ1wxgk3fSxnd503CKaqi%2FR7ogGQWaC1sO0q8eoxTtAiLJJJ9ZF51PaJ3FtL%2B4tNIS%2B6xZOKlUIERMRbQapqPgOFIZdihI4c0ixvnPsgI9bjBQB6%2BP254vZjxiKBaeq7timKM%2BYYtQDoWB7ZS5JjAQ6ToaW7tGehAoegbQqWqNv1p7xv4vtzbZ4yjioWwe%2FyCe59kikepeSXWAn2%2BXWXKb4ujmBV8YJY4UTaUsE%2FnyvhBrAKeUkGZRQ9v51TTsSFKVHB4rRwR1VpRVWgV5g9EVw0OTieHk3bnpq%2FA%2Bsb3IKGlj4Xs2GjFYaArBSEBE0UhiLsTRF9A82WS%2BpdFzjWUVeAEw3Zg1hGxrLVsgJNywhu8hO6vyMg6Ca6LhK7VBwmQrCUCZflC%2B2Qtr3SnxS52nyzJnyqqJoR3Tcl%2FNY%2FIrXdfnVHbIt%2BR8UK51%2FhenbdIzOP1%2B3s09lnS%2BUVT8xPVF0FeC4HqT1iruRw0sy%2FZN86cgJXVUZPSqj2lng1Qo7a3tkOxkTupMJaf68cGOqUBX%2B2OEXV1l9fDzoYjNaSU%2FQNW74xliWadjEc7mVK6sbx6jgH7b2EGPZDj4doN4CqJ5kpQY1skWggU97IxlgUBKh5HhHZxp1IRfKj62u20XANVc1Rnjk40h5kqJIVOmbIFn%2B%2BSoxDMb15er54ykfwGPnzPxIa3RwH2Gv5UmzDKkW4Mp9vPmOfIeVonZyGR6Pfoz57PdxlI%2BB9uwaWtvAyf4Ls2Nnte&X-Amz-Signature=0f2f4a008b95a4e5c2faed01dc6ff0d249e0d916b629a67ba2ad9a4ed2fae54a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G2CA7KK%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmd01vBUe1x8UgBuMC5wZ1k7iXjvclzxw%2B0dP4plDwCAiEA618xyW5pGmm6GkyUbscEy%2FJczYlxZBrT8IHU8VqxGXMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDImGtJfbWh9symcELircA%2F%2BTlWo2y4l7ysCN4NIKj1YpIty7Jffr9Nc7Ninbde4xabwvrWSNSghcplG1tc7QYK2CEMuPTGB50RNYopbQ2%2BErEPM%2BZnl4ssLRyizbB8JbD1FYENy5aszuN%2BKdVNPVn98zlzzkX3ImWSMGjFMSEZFcUQi35qUGch1eiaNPqTh1rV6tA7EYNLuIEPhBvMEhuvdz0uxrWyF82f4BDQnF2C1DyhTEpzKfr2GQEMNQtYQRqo6IV0c1bwPSvLeLSp9q1F5%2Bldo6Xln2cHIVx2syyuur%2FxhH%2F4acTEJclrMrRUsDM20m5nAswtNbUE%2BAd97IYqWP3ifD5GullEZDBwtQhcurCWxDL3wHFFMJgj3LPp7liH03Wx4wGISVw03iSJiZ17GhGLtBL3787S9pq%2BbYmGfYOTVtzLn7XTuTRE2kTu%2BHBgGatsww5u06EAw5tSYAn0PbDD%2BFh%2BLH7JLb9%2FZe5T62%2BD5ElQgGX59nskIJAQ89i1eMGyRX6RQJOWWKGHN%2BFue%2Fjm4f9vkby5n8o%2BVJ4QRxDits3bQ9ti5JXVgDv1OCioE4m3v2eFAFe0UTy4mcq%2BzMdvaD9tldZlN4WsklooajKUBiCGLroOqoujoiq7C1LfivrAjDGiF6Cq78MIKf68cGOqUBjlKm%2Bm5FRsyf%2BcE%2B%2B%2BwXHGTSFVuUg%2FGzBOMKErkNF%2FKvgK5njhuBPAv001isjsgtYq3d%2BJIJFD6WGm%2BYExlLB0lMGUB5zJSGD1k2zm3Vr8n4wwmNhtd0X33OSJ6akeLiXw0vYYfSCApz8tLBc9n3Y5HAnP3KPj4GtMwN57OOjc7DcfLlsJmFQBSmOBSQuWc5%2BujGYTZzN9wnZGwmUct85Q9Y3NJo&X-Amz-Signature=e7d6e1219e84c690f78136e76c2c468e4846fdffa30f0bad7c416255cb348a62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G2CA7KK%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmd01vBUe1x8UgBuMC5wZ1k7iXjvclzxw%2B0dP4plDwCAiEA618xyW5pGmm6GkyUbscEy%2FJczYlxZBrT8IHU8VqxGXMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDImGtJfbWh9symcELircA%2F%2BTlWo2y4l7ysCN4NIKj1YpIty7Jffr9Nc7Ninbde4xabwvrWSNSghcplG1tc7QYK2CEMuPTGB50RNYopbQ2%2BErEPM%2BZnl4ssLRyizbB8JbD1FYENy5aszuN%2BKdVNPVn98zlzzkX3ImWSMGjFMSEZFcUQi35qUGch1eiaNPqTh1rV6tA7EYNLuIEPhBvMEhuvdz0uxrWyF82f4BDQnF2C1DyhTEpzKfr2GQEMNQtYQRqo6IV0c1bwPSvLeLSp9q1F5%2Bldo6Xln2cHIVx2syyuur%2FxhH%2F4acTEJclrMrRUsDM20m5nAswtNbUE%2BAd97IYqWP3ifD5GullEZDBwtQhcurCWxDL3wHFFMJgj3LPp7liH03Wx4wGISVw03iSJiZ17GhGLtBL3787S9pq%2BbYmGfYOTVtzLn7XTuTRE2kTu%2BHBgGatsww5u06EAw5tSYAn0PbDD%2BFh%2BLH7JLb9%2FZe5T62%2BD5ElQgGX59nskIJAQ89i1eMGyRX6RQJOWWKGHN%2BFue%2Fjm4f9vkby5n8o%2BVJ4QRxDits3bQ9ti5JXVgDv1OCioE4m3v2eFAFe0UTy4mcq%2BzMdvaD9tldZlN4WsklooajKUBiCGLroOqoujoiq7C1LfivrAjDGiF6Cq78MIKf68cGOqUBjlKm%2Bm5FRsyf%2BcE%2B%2B%2BwXHGTSFVuUg%2FGzBOMKErkNF%2FKvgK5njhuBPAv001isjsgtYq3d%2BJIJFD6WGm%2BYExlLB0lMGUB5zJSGD1k2zm3Vr8n4wwmNhtd0X33OSJ6akeLiXw0vYYfSCApz8tLBc9n3Y5HAnP3KPj4GtMwN57OOjc7DcfLlsJmFQBSmOBSQuWc5%2BujGYTZzN9wnZGwmUct85Q9Y3NJo&X-Amz-Signature=dfd7ba36a11e3b3023d5da96f8185b67270f05499d45f204f91c4bff9165fd5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5INZIB%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgmwP5EGsxzby%2B4Nfuvur8NMmnCc6n5nbQCoDWegb5FgIgNqo7qiOM4CY95qLLJyWjRmK%2FLsBmvgsUcJmg6%2FdQYDoq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDCM3m5%2FmWl7XxANR2CrcA%2BRxph6Fnph%2B0BosqLTGUVApR7SOm3QaD06GWd0zIvoqV0EPN9199nQHEv5NlQUJKY2pshaU47Iz7QebHe%2BtNVD9N2IjZN3x7JdifyOFo7%2Fg5ZxUsBzuQ1wxgk3fSxnd503CKaqi%2FR7ogGQWaC1sO0q8eoxTtAiLJJJ9ZF51PaJ3FtL%2B4tNIS%2B6xZOKlUIERMRbQapqPgOFIZdihI4c0ixvnPsgI9bjBQB6%2BP254vZjxiKBaeq7timKM%2BYYtQDoWB7ZS5JjAQ6ToaW7tGehAoegbQqWqNv1p7xv4vtzbZ4yjioWwe%2FyCe59kikepeSXWAn2%2BXWXKb4ujmBV8YJY4UTaUsE%2FnyvhBrAKeUkGZRQ9v51TTsSFKVHB4rRwR1VpRVWgV5g9EVw0OTieHk3bnpq%2FA%2Bsb3IKGlj4Xs2GjFYaArBSEBE0UhiLsTRF9A82WS%2BpdFzjWUVeAEw3Zg1hGxrLVsgJNywhu8hO6vyMg6Ca6LhK7VBwmQrCUCZflC%2B2Qtr3SnxS52nyzJnyqqJoR3Tcl%2FNY%2FIrXdfnVHbIt%2BR8UK51%2FhenbdIzOP1%2B3s09lnS%2BUVT8xPVF0FeC4HqT1iruRw0sy%2FZN86cgJXVUZPSqj2lng1Qo7a3tkOxkTupMJaf68cGOqUBX%2B2OEXV1l9fDzoYjNaSU%2FQNW74xliWadjEc7mVK6sbx6jgH7b2EGPZDj4doN4CqJ5kpQY1skWggU97IxlgUBKh5HhHZxp1IRfKj62u20XANVc1Rnjk40h5kqJIVOmbIFn%2B%2BSoxDMb15er54ykfwGPnzPxIa3RwH2Gv5UmzDKkW4Mp9vPmOfIeVonZyGR6Pfoz57PdxlI%2BB9uwaWtvAyf4Ls2Nnte&X-Amz-Signature=b7a3ec06565e09c5dcb870eafd45f41de4b355429293347e45b5959a7c746788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5INZIB%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgmwP5EGsxzby%2B4Nfuvur8NMmnCc6n5nbQCoDWegb5FgIgNqo7qiOM4CY95qLLJyWjRmK%2FLsBmvgsUcJmg6%2FdQYDoq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDCM3m5%2FmWl7XxANR2CrcA%2BRxph6Fnph%2B0BosqLTGUVApR7SOm3QaD06GWd0zIvoqV0EPN9199nQHEv5NlQUJKY2pshaU47Iz7QebHe%2BtNVD9N2IjZN3x7JdifyOFo7%2Fg5ZxUsBzuQ1wxgk3fSxnd503CKaqi%2FR7ogGQWaC1sO0q8eoxTtAiLJJJ9ZF51PaJ3FtL%2B4tNIS%2B6xZOKlUIERMRbQapqPgOFIZdihI4c0ixvnPsgI9bjBQB6%2BP254vZjxiKBaeq7timKM%2BYYtQDoWB7ZS5JjAQ6ToaW7tGehAoegbQqWqNv1p7xv4vtzbZ4yjioWwe%2FyCe59kikepeSXWAn2%2BXWXKb4ujmBV8YJY4UTaUsE%2FnyvhBrAKeUkGZRQ9v51TTsSFKVHB4rRwR1VpRVWgV5g9EVw0OTieHk3bnpq%2FA%2Bsb3IKGlj4Xs2GjFYaArBSEBE0UhiLsTRF9A82WS%2BpdFzjWUVeAEw3Zg1hGxrLVsgJNywhu8hO6vyMg6Ca6LhK7VBwmQrCUCZflC%2B2Qtr3SnxS52nyzJnyqqJoR3Tcl%2FNY%2FIrXdfnVHbIt%2BR8UK51%2FhenbdIzOP1%2B3s09lnS%2BUVT8xPVF0FeC4HqT1iruRw0sy%2FZN86cgJXVUZPSqj2lng1Qo7a3tkOxkTupMJaf68cGOqUBX%2B2OEXV1l9fDzoYjNaSU%2FQNW74xliWadjEc7mVK6sbx6jgH7b2EGPZDj4doN4CqJ5kpQY1skWggU97IxlgUBKh5HhHZxp1IRfKj62u20XANVc1Rnjk40h5kqJIVOmbIFn%2B%2BSoxDMb15er54ykfwGPnzPxIa3RwH2Gv5UmzDKkW4Mp9vPmOfIeVonZyGR6Pfoz57PdxlI%2BB9uwaWtvAyf4Ls2Nnte&X-Amz-Signature=8a5856a8ec94383cf5679db4b1382541004f7cc1780facfb98399406df705e71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JJPMA53%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9CheJku9D0jMCblke%2BB7BBiG4VN%2BZvR1dmTrYvEfNgAiEA10FgS3cQ0s0nfZ2aSzaOCAVEJK11M13s8SW43p%2BlMc8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDAeoHojVe8hBYRs6IircA%2B2sprbdq%2ByaCpqzwTkZoTtSuZFVyW6ZkwNA7RN94JOj39ttBDm4AWyQKTmTBqOzDnGykSFO%2FvnziqCCSqaLt1oamwWHiJdHKGF7UWILG%2F9StKoOV36y%2FXT5tniQqSsHVtAfRBuLrLYFAaqbov88dTInl8f0jNSIA5S3wfzX0Ze9l1X5WcYWqqjtdBV%2BnjqgIKtyYCT06q0OlC7i8gW1f3Ee12uVaBMl%2FbfCEX%2BqoJnQZGI9t0sdaKL0lF9sDMs2AykSr4F1ABLI%2FdE0I4gz7zSfHkxSHw24s5VPKXMLqwdLcYfenici6OmYGIkT5eR7ioWjD1NiypQe1HpoH73Is2CWfoJr35PCN9QIemLMbyB6H3RgXdX6WCTRAeIjOgYHg5HzYdAtC%2Fq0G%2BeQ0cTwCV%2F%2F65V3kVo%2BmdpBxfMYsq%2FusbejEK14AEKHv1KpSh52jD%2B5VxTO1rlb8HrZdX3v16%2FV9A%2FvS1R98KKon6x%2Btvb2%2FLpQdJpA5f5n8K8GYsX6uLxg%2BYEMRv0nq1oPVk44S6mCVxBKBmVW04KRb%2BN9H%2BDg%2B1k3Tv28RL88G7TCV%2FzuqNDD%2F%2F8W1FgvRPebZOJnTIEYI9XYKRuL%2BkWYTRIpcITpPwjuWEcBX54CiMRwMNGf68cGOqUBLvFWJwn6dkAdHpCqgli2QbRURK4CZ1m%2FrduE6jIUUFE1pdqrwNUMbK42xeBDiFjcEvMjevG5lsdHcz%2FtjvGcg0kVxOm7HV4slv8X0Irq7kht9MQfDjIq5MlqIPei4AeaKbnXIlBT68OhUBybCANVGPFnVMNPNOi1j6gDDNAUReVg3YUCHY1y00rizDqOv%2BmV7tXjQOsLPBI%2B8X8rdboG3w6evwqk&X-Amz-Signature=da87bf7ff5eef0f6d71315e47ae1d47c7d4dd643d4dcee52b8fb9c2d2260082e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

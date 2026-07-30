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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PSCFPBL%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFnKEVB9ddCjnMK3wzxXTvdc%2B1FRh%2BE2iC8YzCRbZdeAiEAkmefD0zzQaziR7iRv0%2Fi%2BVPJgeC1AKTzTWO81i4qd1IqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHv0%2Bp2eS5T38dQzyrcA6i5Lt2QsUWkgkvhyEN6UHAdSVk2a05v4vNqtUUG23xyZywWFUr3tNFbazeQGWnZf6s5f6GUDw6gSW1Gr4eHZFfKNfSU02jeWA5YiMo5p3CXN22UWpy6Hj2RxpB%2BSviYw%2Fi%2FW432Ywfex%2F6EEyz5YLElZHEHFOz3u5bHtyKMZcVOqAjLpigLWfP%2BRGIs8aJ%2BnF8D7e1glXAUI%2B%2F7w67dvKgpnYHX2jK25TuEJvf%2B7S3UQrKYum1L90lswqQdlwafoj0J0XEOQl0vDuemxINpmdUD6oPEVQg82ZyalRMFx8jujv%2BVFaXgfinXXFPQDl4ocmparSIyLcq6oIRILM6oT6rX%2Boxl5f0pXIJBSt%2BItxv%2BqdCNxzTr8y9m8n72EDG%2Fn4gRHZ3CtRuT%2BpxcCk54fGAyxsXXO0wTNlRyjE%2BckVKkDcHOM21SeMZJ2qhX0zOTuiyexR4r%2BmAX%2FUsAWfLeHXfEHJtFDQjiuBtxmYJjwUzLjyzM0M8VTAX8G5WL6VLTetIGRaOQsMqzPMVbtoJDOaC84jHxng1Yjk7r7ePryXOo%2BT0aF13DJCGiQW8%2FhUXGydFM%2B0kG%2BSqAvdiJ54lQm%2Bwt4Cab6IrglGW%2BcSolni09HdgXMQlPPEvsjB8dMPLiqtMGOqUBmyn9OyiIszTlkc9NbUPIcMMGFwVxFYUBxzgr%2B402g6GVLM9%2B6tgS8R3akSn%2FZhbwLHu3W9nTTACBq%2Bd6UvwlhWi56HNSqHP10Y209%2Fj5QZSWlPuYCIS3U24CW52OrkGNQm2OBJNo%2BszxMlJlM41WwN2K6KmXSfTrw5eMriw59SZ9Lv1y%2Ba6QQABoXgCQbveLSqaawrjK%2BdaEERiD2YJYtojeX0Va&X-Amz-Signature=02ed4acb1301867337625169233426ac6b1ac48d037b93b1716b4e388e8631db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFDAX4DR%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNU4l1bv%2FqAlbVxnsuTilKTmCu6ydzrgK5PUs%2F999XWwIhAK9Nl%2B6v3f%2BOfnIk1vGU%2FEWBDGaYY19Huv0AbD2J6ib8KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRACc1eWchDGQnOzMq3ANN%2B0Q9GAGaOSP2CvOgLaIkw6%2FpzXdcG0Oz%2BJ3wEMn074Z9z52Bem%2BgMT7R1X2lJJrZGRHtXYMT2pTuvl0O8k7V%2BEhu1yt4cgt42gb3%2F5PYeCb9UM2gEaeQplehGF1JV9u2C1X3RoYRmspFmZBLWC%2Bwk%2FPiXof%2B5yhgl8LOKs%2BtBIb0ok1Rfv%2BGtr4wU6%2Foq4WA9hV1A2aApMT1tHxtQisQWroh0yQGF6GDSqHKzECWH44OfepSncR%2FBpRv%2Bqshwl4XmQXw5szj7uoWzf8mU%2FDXQHohopVgDxxWjhL%2FYrNZ6NsC84cfI5y82xWKYkavQ6C7Xqld6xcuUtKVL9GuCYQ5KnVO6TpCPh4uZgr8x0KVeZ4LoTpHZ%2B2P6S3G1QyCcgm7qHiapPcL2y9Pg%2BiSMEbWb9O51JAHld1JGZhOzvGTinCqCVVwztzpLwdjgTJsWGA4N6%2BDUSkQLICxK9KDL8NHRsr301zAQkHVc5Q1%2BJC829%2B27rwybh9Oeak%2FgufvAXbL7EdFEwj4oBnCGU5BUHAB3Kwg6hBAquXhtp3rQniCPjgximiwjGP8nv%2FZj3Ik0OYO5h%2F3dCoUhK6Mf58dmx3E%2F2V%2BmNOJSQNtSeS60IytpPZdV05ODawFRlGX1jCZ46rTBjqkAUk87TZcKo%2Fo%2FMC0BvL0qrA7M8os4o5RFWC9kidt2Fo9nTdmdOYP5C8EfhgAPkMu3T1dZWp51VfMVzcGtJoDVg2ZThQ2JXpmZGh2oG2Jna2qFhOOLj8UeQnCe5DWM6hI8Rs90FF0EzFM3QwhIUPAG9L3MNnPf0OWVCHazg7zx0MBjdLA2wvZbZsQ%2BywlE1%2BXCGhJYsi7zMH4lYyICvsxNa1X7pQS&X-Amz-Signature=797e746370dee22174fbde46d1e6d120f056af2eebaac324752d7a93a4c3880d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNDCBNFI%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHqLmrST6XLRUBxsmF39RTk9xAwdDyvR6BJwTKc8sEaAiEAn1zaAa56DWrD9HwRAKJ0EINQu8VlHdUvhODqNPu%2FhFcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIAJnJz6tHGUnou4ircA5VPucsuAuGn9%2FBEmRT23Rusjj3%2FNVy%2F8rjJ43L%2BThEh2LQTfvenU1E0BbT9odhRUCl%2F3FVBmA2sEHoLRlGC163C0h06P2r%2BA%2FDdHORdAJsn1sL2ZZ7E%2FDDRZqmo77TYo2lGRT03szuiMJ1gZD3gEMugc3fAM%2Fhc81xUqv7SA6FKrEeHu%2BISEeXcjuxG69oSOwl8BNdig1aN5x5s6VUlcl2wUEZ8FzNYYOQ6eMHvLzRntwKQ%2BGUTr0zWO8KlrJt9hn3Ju9T13WxOi4XdHK52szDkbbqPL7Ewy8BdEtZOzjdhuOXTzhHorGLGBEj6bTjnUikkQRo%2FAe%2BPvEqgGRay1kXFZDbLNpaduHg1lASGDJES4OAar2Dgvc9sBQg%2Fhl9VoOTKTBqEZb3iUkHM9X7%2BFxXC1%2BfJrKR95%2FA1tSqP0pY1Mtev7P7pgrGEJOijoCB77FIAoFx0RS%2Bryf%2FCb%2FLBT1%2FboGBkH7bZsO6CeAWd5tRg3D%2FZNZviUjq6t1mtgxdMqtw7UJeUcBTFddwZl3KEqyd8N2QCNA5vHgdk4t7erZw%2FXyhAMZ0o9JwK5TgX8Kk1ZgPGk51O33X1pT73AIubhRhUCSERfx9H0WMRZ%2BevUUemGxNP34rGN4EEYz6RMLPfqtMGOqUBN1MZWqRewlNXYbKyF5SGMuRBf2bUOUySucy%2B0nbgKnSdNTBbz1TA5RmZ64fDT%2ByPgOpoZY8de9cbTc%2Be9RQzLTU1oYV5VReHvqYr%2Fh2%2FAGSU0M3B2JdMutzma0oax5VSGbB2oDFNMh%2BM9SXyG0HUKNEuZyZ7C05HNSismkVpdtxElzPMvwRslG3gFXlEUinvx4RvDGxl%2FkB2hy3vEsICFFTRMv6O&X-Amz-Signature=9926d5bd98859838db5c4f07ecbde07aba056af083510067578cc51d9ae7047f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNDCBNFI%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHqLmrST6XLRUBxsmF39RTk9xAwdDyvR6BJwTKc8sEaAiEAn1zaAa56DWrD9HwRAKJ0EINQu8VlHdUvhODqNPu%2FhFcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIAJnJz6tHGUnou4ircA5VPucsuAuGn9%2FBEmRT23Rusjj3%2FNVy%2F8rjJ43L%2BThEh2LQTfvenU1E0BbT9odhRUCl%2F3FVBmA2sEHoLRlGC163C0h06P2r%2BA%2FDdHORdAJsn1sL2ZZ7E%2FDDRZqmo77TYo2lGRT03szuiMJ1gZD3gEMugc3fAM%2Fhc81xUqv7SA6FKrEeHu%2BISEeXcjuxG69oSOwl8BNdig1aN5x5s6VUlcl2wUEZ8FzNYYOQ6eMHvLzRntwKQ%2BGUTr0zWO8KlrJt9hn3Ju9T13WxOi4XdHK52szDkbbqPL7Ewy8BdEtZOzjdhuOXTzhHorGLGBEj6bTjnUikkQRo%2FAe%2BPvEqgGRay1kXFZDbLNpaduHg1lASGDJES4OAar2Dgvc9sBQg%2Fhl9VoOTKTBqEZb3iUkHM9X7%2BFxXC1%2BfJrKR95%2FA1tSqP0pY1Mtev7P7pgrGEJOijoCB77FIAoFx0RS%2Bryf%2FCb%2FLBT1%2FboGBkH7bZsO6CeAWd5tRg3D%2FZNZviUjq6t1mtgxdMqtw7UJeUcBTFddwZl3KEqyd8N2QCNA5vHgdk4t7erZw%2FXyhAMZ0o9JwK5TgX8Kk1ZgPGk51O33X1pT73AIubhRhUCSERfx9H0WMRZ%2BevUUemGxNP34rGN4EEYz6RMLPfqtMGOqUBN1MZWqRewlNXYbKyF5SGMuRBf2bUOUySucy%2B0nbgKnSdNTBbz1TA5RmZ64fDT%2ByPgOpoZY8de9cbTc%2Be9RQzLTU1oYV5VReHvqYr%2Fh2%2FAGSU0M3B2JdMutzma0oax5VSGbB2oDFNMh%2BM9SXyG0HUKNEuZyZ7C05HNSismkVpdtxElzPMvwRslG3gFXlEUinvx4RvDGxl%2FkB2hy3vEsICFFTRMv6O&X-Amz-Signature=43960cc01dbe6f6c161f8cf747c8b7c2edbbbb795d3571290a815a850024977e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFDAX4DR%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNU4l1bv%2FqAlbVxnsuTilKTmCu6ydzrgK5PUs%2F999XWwIhAK9Nl%2B6v3f%2BOfnIk1vGU%2FEWBDGaYY19Huv0AbD2J6ib8KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRACc1eWchDGQnOzMq3ANN%2B0Q9GAGaOSP2CvOgLaIkw6%2FpzXdcG0Oz%2BJ3wEMn074Z9z52Bem%2BgMT7R1X2lJJrZGRHtXYMT2pTuvl0O8k7V%2BEhu1yt4cgt42gb3%2F5PYeCb9UM2gEaeQplehGF1JV9u2C1X3RoYRmspFmZBLWC%2Bwk%2FPiXof%2B5yhgl8LOKs%2BtBIb0ok1Rfv%2BGtr4wU6%2Foq4WA9hV1A2aApMT1tHxtQisQWroh0yQGF6GDSqHKzECWH44OfepSncR%2FBpRv%2Bqshwl4XmQXw5szj7uoWzf8mU%2FDXQHohopVgDxxWjhL%2FYrNZ6NsC84cfI5y82xWKYkavQ6C7Xqld6xcuUtKVL9GuCYQ5KnVO6TpCPh4uZgr8x0KVeZ4LoTpHZ%2B2P6S3G1QyCcgm7qHiapPcL2y9Pg%2BiSMEbWb9O51JAHld1JGZhOzvGTinCqCVVwztzpLwdjgTJsWGA4N6%2BDUSkQLICxK9KDL8NHRsr301zAQkHVc5Q1%2BJC829%2B27rwybh9Oeak%2FgufvAXbL7EdFEwj4oBnCGU5BUHAB3Kwg6hBAquXhtp3rQniCPjgximiwjGP8nv%2FZj3Ik0OYO5h%2F3dCoUhK6Mf58dmx3E%2F2V%2BmNOJSQNtSeS60IytpPZdV05ODawFRlGX1jCZ46rTBjqkAUk87TZcKo%2Fo%2FMC0BvL0qrA7M8os4o5RFWC9kidt2Fo9nTdmdOYP5C8EfhgAPkMu3T1dZWp51VfMVzcGtJoDVg2ZThQ2JXpmZGh2oG2Jna2qFhOOLj8UeQnCe5DWM6hI8Rs90FF0EzFM3QwhIUPAG9L3MNnPf0OWVCHazg7zx0MBjdLA2wvZbZsQ%2BywlE1%2BXCGhJYsi7zMH4lYyICvsxNa1X7pQS&X-Amz-Signature=5210f3a9a3dbd1be1f1daa61d93837fee01a344a67baef40726685e567d6194d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFDAX4DR%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNU4l1bv%2FqAlbVxnsuTilKTmCu6ydzrgK5PUs%2F999XWwIhAK9Nl%2B6v3f%2BOfnIk1vGU%2FEWBDGaYY19Huv0AbD2J6ib8KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRACc1eWchDGQnOzMq3ANN%2B0Q9GAGaOSP2CvOgLaIkw6%2FpzXdcG0Oz%2BJ3wEMn074Z9z52Bem%2BgMT7R1X2lJJrZGRHtXYMT2pTuvl0O8k7V%2BEhu1yt4cgt42gb3%2F5PYeCb9UM2gEaeQplehGF1JV9u2C1X3RoYRmspFmZBLWC%2Bwk%2FPiXof%2B5yhgl8LOKs%2BtBIb0ok1Rfv%2BGtr4wU6%2Foq4WA9hV1A2aApMT1tHxtQisQWroh0yQGF6GDSqHKzECWH44OfepSncR%2FBpRv%2Bqshwl4XmQXw5szj7uoWzf8mU%2FDXQHohopVgDxxWjhL%2FYrNZ6NsC84cfI5y82xWKYkavQ6C7Xqld6xcuUtKVL9GuCYQ5KnVO6TpCPh4uZgr8x0KVeZ4LoTpHZ%2B2P6S3G1QyCcgm7qHiapPcL2y9Pg%2BiSMEbWb9O51JAHld1JGZhOzvGTinCqCVVwztzpLwdjgTJsWGA4N6%2BDUSkQLICxK9KDL8NHRsr301zAQkHVc5Q1%2BJC829%2B27rwybh9Oeak%2FgufvAXbL7EdFEwj4oBnCGU5BUHAB3Kwg6hBAquXhtp3rQniCPjgximiwjGP8nv%2FZj3Ik0OYO5h%2F3dCoUhK6Mf58dmx3E%2F2V%2BmNOJSQNtSeS60IytpPZdV05ODawFRlGX1jCZ46rTBjqkAUk87TZcKo%2Fo%2FMC0BvL0qrA7M8os4o5RFWC9kidt2Fo9nTdmdOYP5C8EfhgAPkMu3T1dZWp51VfMVzcGtJoDVg2ZThQ2JXpmZGh2oG2Jna2qFhOOLj8UeQnCe5DWM6hI8Rs90FF0EzFM3QwhIUPAG9L3MNnPf0OWVCHazg7zx0MBjdLA2wvZbZsQ%2BywlE1%2BXCGhJYsi7zMH4lYyICvsxNa1X7pQS&X-Amz-Signature=5a751891764757095284f3909d0cd0867ef692ae870b2aa820ac1855784432aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UNKEJN%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwR%2FHoy%2FaW%2BBCuag4lFIsAAxoBhq6LAYTvEzdIa678iAiBfhnWbxD9njQEPPKvVtiT3F1vkjzrX2AmrmfnU8b5DIiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGtgUAmH9Vpui2Gh8KtwDX4NjIRhcfDB9K%2FARoAp7CWIk%2FAE46EQlc5PFiIYi9OtH%2BH2MX0GxBlsR4VSWrWMSFN%2BSDDiOEOxnNk2ihuzHkLuUOk56Qg6e3%2FvQPIjUB%2BK8NsnEuYxuBx6fb%2FhydCzcIfG3JjCDjrjzBXBvr0P6c1OdGEjz%2FLrysMa1kqBX90lmh5CWZhTgD8a%2FbZoVF2F7MJG%2F3Nus96vQBNO5Om9QSC%2BOU15Fur8zsQinFo0kJ5VmWDhDW2R2w2IpDdIXONhNuCvENlPpA4xon0bxfZwmz2LBlvTTJYyQyAfg%2Fsn9lxkdEQuMrejOYfJc4hRtngqE2x7R5VycfA%2B5DM3%2B1RJq2U%2BC7SsLIk17fI66ppk4lPhLNI72nvNZTxdmTfml89VlxnxiBkJbCBF3boKVoE80%2B3dhMi6Mgrk%2BI8jzI9QgcSyxMcg72xjTaTqLbY3NYGMiLdNvcPCEGEdPfZufZWm6EXGUv%2FISWpBAEr%2B11QhBPV0evtm2wCHOKm1%2BSMVTABnFbF1x4xf2MbxEVuQnIhHe%2BffR79AbubIw9kooF%2BriPDXT4nte3KDmNaQ2YNVAds7RJZUvctiHGZQQX3rNleATvgNHvHyI48ui5ow8kR2D5qyC7mseZd1txVsbw9Qwp9%2Bq0wY6pgHRz6wyo7%2FxYDs57dmxXGQpnt4c9y12%2B7owRxvgvdBdfSjzpzXAQE%2B97WpTc7Bqbkw1t59ohmqnItaWFhD245XU%2FuJMDfj1rxH3bbVRKOde%2F6HeQt7uyni5%2FvlRa%2Bz9tMCDfSFrQ1eicRhmURTl0BHnxspe0lr7fnpL0AtYPvvEoI7pt8b1bnbspXYtTCFn9%2FXU7bPQPqto4W%2Bt1IeGJ1EiAtEs8H59&X-Amz-Signature=5ca4396e88022d400a52d1b7dba906c83bdcb25a8dd8bc73750d405f5606fa2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

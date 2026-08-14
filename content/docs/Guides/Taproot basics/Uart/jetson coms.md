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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZIVV6MV%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIHOd3csrtEQ9DLIgRHy0tjmpXXbh45qNecDsQ939rIiVAiEAmMO7mYdGj6zEgBaP2F9aAdgAsHtfEF3wy2hDzVSfIscqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQpWJDj1YhYv7N8QSrcAw9MVQToVZEoLm8duGPjwSFTuUB4tn88mSt2SSI56p%2Fm%2BZECQZJup50A%2FBoDv2hLoyKqd%2FXWdBX3jJ08moi2%2FH5OMs%2FP1kXux0qJYnLYfAXIv1ub8OvYH7kckXLiOhaENUTzGX1rK%2BEUeyZim9mIGE0ypI1G87NQaWFfHLSeNjjLxSqdoZANErLSH2u%2B493vHTXFZmF5U80nHfnGXyC6%2BY0xm%2FsFBOAD%2BWtx2vZTo%2BB28AcDu6Li0BaUJTKxUyVc93s%2FiyALqZNR2NInSdYHSfLqNUZ3EPg%2Bc8YNZY5Bfji2Z5D9hCcHQzgiYBBB%2FTxSbSNTHBT%2Bc2Cxmyi%2BcyJlqYJVrEV8yK%2FdP0vkF3p7vKg%2FrTOVUTE%2BacoHRvHMZ7ydQVbUpDF9Pwn%2FB5Eij1pF5gbcfst3Os6wDeCCEEaEM2ic9nei7Yydkq%2Fvx9Pd0t1i8c%2BKNrB%2FA%2BR3woFFW0WF753%2BhMuEqCF1rcSyWE9f%2F2T3agzAxJ8kSTYetNdSGCZdti0AFvlNKID4BLE09laBe6CTQ3E4xStgtR56RDu5eTzUT42qtQpdjPQZA8vcM16NFONzOgLh4VJdibODvJhoTIhYblNTb6nAGOKvd4Xh61WuMOEsv6vuNCEXS1BIMO60%2BdMGOqUBgKtnLP0Vh2VhJ59KO6GMEXBVGUsHjrelL3oa1E8MpWfjyaulcgGBM6171en9sPSYjehPUTIqlGcm9v10J0hzkzzAzGxowgXe%2F2Gqb1SLM6bMxMpYImBrGPeKmho29wdJSz1rNZNfMf8mtcZAe11833KX%2B9cVh7ouwIIRO5YlYDXsIUAkp8l6zIU1Mr0zG%2FeaR%2F3dCKZ31eVYA22y7lhvwMH7MoTm&X-Amz-Signature=f9e18aa373b00b60b846229f6e4a49482435d8e99631120a720b35dc01209b24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466437AAKBB%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD8VyAx0JQ3eRa3hQ%2BQzobZduZt80my%2FNG4BXZffjIl3QIgZHZAC%2BcVmHXgv%2FmrT0dwgSGJK2pyZHiMSWkys1slNbAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0VY21YP6hfQ8ZqHCrcA%2F0x%2BkHr1%2F6hpi%2B18oihG87sxsqMJhyjbAos9CSqvbQQmA4nHfX7j3%2FB1kfv2Cd4OoXK%2BQ82l7az0Bb2mqqZ8zO119ay8a%2FaWm6a6uoPFHnXkQFQuHP02ChKmESiLTiJylRam2RA4T3I2Rlg60XAONP7L7RzV6uHRrnTj7z%2Fdmg8JKp8clmjYb9TGwjW1CK36lERczSTmmjVbZ0yHOUD5%2F4r05Wd7GLwCYTeljGtV9taAcloDlCImmFpls%2Bs7deyWDif%2BS8utFZpEq9VLdqMb2V74aPSCfNVGjPraJy1rSmii6Bz%2FYUZQznD63%2BJ1f32msE2fDh7b9nIR5ECaxo85MwXT4cRaWdeCRns1oTHPA5vMEJw9GF7T3hM%2BRnjAwQ8jXmYG97O5TDaIzAE4R9d8IEtv%2F6yk%2FZcijDUZnEYJmIq%2F12GdoKY61VE09Zwx680DMUmS%2Fi85jxlGJ%2F0B4K3gYeV6B6xABPrtvMOGXztS2usrfzxte9zO8dafL66xOtWXkqru1h%2BARZfdtaS1%2BUpHIcnZpPbKWfeKV7Ot9vQKipCiLwJtDrljDW4BfB3koqJ3Ov8dL5ZCkByYoKrI5ys%2FYCehMU4b7jG5ZeYJWRfPaQ%2BA%2BHp2rUI96jb%2BwF4MLGy%2BdMGOqUBxSAaYQKK7kspcJZ1boijn1TXWpwnGOA92o%2B7g1fnE%2FL6Tm%2F2%2B73h8qMf%2Fym88wuHZug0c8axC7CRIvw5KUF4UqlWgkkPma3RGFcot%2BRxPmrLeXtrwEuoS%2BDQ4QxrNLwvH9GRkCIyL%2F4iKLhGquTwcppRFLBBmxV5SY8ZRNoSQmJN7D6kN4mfr8JVxcdPplfPF0W%2FA6mVYsNGtBMzvqMyIldNo7eB&X-Amz-Signature=b0e1bf8c1af462554f47990fc953810da9ecc11215e3ea79f91a9a239b2b687a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C2VRBIB%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDDHCaKebIPGVuyS3cNXxsgubnxx%2BHA1yCcgosvwECDjQIhALOTkUjaGqTvuEdlpzVWxR%2BNbGXp9H%2BmEU59avF2GxaLKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzx%2FjVAkDikS77KCYEq3APLIwcmHipcVSN257ojUWC0BAANQ967Pn8TyorPZgPcfvjQ7r1Q0asU1g9q3yo8ztd0htehEzGU1lwSaXG9TPzTy%2FbVhS7l1318dVC6r0cOidNQf2Tg6HkmiYN5Edh6BFk2%2FQ8XpXL1IIwLqUNcosJCIPYlpnbI%2BqWoZHA8hor0c5Of%2BtHjoJm8MNaDjM3ZItKdXB7xMBfclRkb0SFi1RPr0k4G2jTnRZRXCeC%2BNDctvRUrGSfRLmu0VIJVlzMWn2Ww1%2BDVPfXUNsUi6ceq64exfeNxhCrVUAPngwe7xfGNZwDU4mR3PWoGL3g%2B2g2WM6415Y3%2B94M4VGMqxFVcBlamhXktGFYdrCy2Tvh6%2FnLij4IBx2nrhuTUtYXRnvfp0oE5Q218nkXOlIRkJeun12b76IGcAmD2xdIsOGJaxjmerhohjUsA1I7A%2B6SXRiqgF0kwvHTlGiEVd1O%2BZe8TVhtBkjtm20jgNVqs%2FWlbdjwfQIIklxO0hPSPBaQ9o0A5fJ1ICXRwKPPDf1NFT9WgrSZL%2F9c56MI%2FIr6fTMuzWGSyBe3uvm43QrjCBEab3Y6aacoBaGs2pZVDe8nh7l5q7NP9b4xU2uTOaOCJsOLf7yYvn0M%2B7OL9P5QciZyJ5jCutPnTBjqkAfiyFk1ucU8kyXgDusbjS%2F5uvsFojakd3%2BKFtAyjujgts58asWqomY8GAMUD%2Fdfk8tbOysA%2FdZl6x%2FAE%2FCLeNsR2uEVprZqQH1UXjbDy4DOvL3uhDE8jDAlczBBiXNdwriRH3Kjj9nwd6SRqC%2BE22TJREBcYkRyFR9H%2F6D0GucHHVOweeuQ9on0Vb4VRJFm4csgL3qsKWLSkQcXKofpA9%2Ffaea%2Fi&X-Amz-Signature=bbd362db3466c404e0c54202c10304274dafb93b08d8f4c007afaae9e92ae76c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C2VRBIB%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDDHCaKebIPGVuyS3cNXxsgubnxx%2BHA1yCcgosvwECDjQIhALOTkUjaGqTvuEdlpzVWxR%2BNbGXp9H%2BmEU59avF2GxaLKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzx%2FjVAkDikS77KCYEq3APLIwcmHipcVSN257ojUWC0BAANQ967Pn8TyorPZgPcfvjQ7r1Q0asU1g9q3yo8ztd0htehEzGU1lwSaXG9TPzTy%2FbVhS7l1318dVC6r0cOidNQf2Tg6HkmiYN5Edh6BFk2%2FQ8XpXL1IIwLqUNcosJCIPYlpnbI%2BqWoZHA8hor0c5Of%2BtHjoJm8MNaDjM3ZItKdXB7xMBfclRkb0SFi1RPr0k4G2jTnRZRXCeC%2BNDctvRUrGSfRLmu0VIJVlzMWn2Ww1%2BDVPfXUNsUi6ceq64exfeNxhCrVUAPngwe7xfGNZwDU4mR3PWoGL3g%2B2g2WM6415Y3%2B94M4VGMqxFVcBlamhXktGFYdrCy2Tvh6%2FnLij4IBx2nrhuTUtYXRnvfp0oE5Q218nkXOlIRkJeun12b76IGcAmD2xdIsOGJaxjmerhohjUsA1I7A%2B6SXRiqgF0kwvHTlGiEVd1O%2BZe8TVhtBkjtm20jgNVqs%2FWlbdjwfQIIklxO0hPSPBaQ9o0A5fJ1ICXRwKPPDf1NFT9WgrSZL%2F9c56MI%2FIr6fTMuzWGSyBe3uvm43QrjCBEab3Y6aacoBaGs2pZVDe8nh7l5q7NP9b4xU2uTOaOCJsOLf7yYvn0M%2B7OL9P5QciZyJ5jCutPnTBjqkAfiyFk1ucU8kyXgDusbjS%2F5uvsFojakd3%2BKFtAyjujgts58asWqomY8GAMUD%2Fdfk8tbOysA%2FdZl6x%2FAE%2FCLeNsR2uEVprZqQH1UXjbDy4DOvL3uhDE8jDAlczBBiXNdwriRH3Kjj9nwd6SRqC%2BE22TJREBcYkRyFR9H%2F6D0GucHHVOweeuQ9on0Vb4VRJFm4csgL3qsKWLSkQcXKofpA9%2Ffaea%2Fi&X-Amz-Signature=ace7b7ccd279e80667e933bb09992e84d0f35f5bf5e1f3ab709f50f2612a8bf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466437AAKBB%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD8VyAx0JQ3eRa3hQ%2BQzobZduZt80my%2FNG4BXZffjIl3QIgZHZAC%2BcVmHXgv%2FmrT0dwgSGJK2pyZHiMSWkys1slNbAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0VY21YP6hfQ8ZqHCrcA%2F0x%2BkHr1%2F6hpi%2B18oihG87sxsqMJhyjbAos9CSqvbQQmA4nHfX7j3%2FB1kfv2Cd4OoXK%2BQ82l7az0Bb2mqqZ8zO119ay8a%2FaWm6a6uoPFHnXkQFQuHP02ChKmESiLTiJylRam2RA4T3I2Rlg60XAONP7L7RzV6uHRrnTj7z%2Fdmg8JKp8clmjYb9TGwjW1CK36lERczSTmmjVbZ0yHOUD5%2F4r05Wd7GLwCYTeljGtV9taAcloDlCImmFpls%2Bs7deyWDif%2BS8utFZpEq9VLdqMb2V74aPSCfNVGjPraJy1rSmii6Bz%2FYUZQznD63%2BJ1f32msE2fDh7b9nIR5ECaxo85MwXT4cRaWdeCRns1oTHPA5vMEJw9GF7T3hM%2BRnjAwQ8jXmYG97O5TDaIzAE4R9d8IEtv%2F6yk%2FZcijDUZnEYJmIq%2F12GdoKY61VE09Zwx680DMUmS%2Fi85jxlGJ%2F0B4K3gYeV6B6xABPrtvMOGXztS2usrfzxte9zO8dafL66xOtWXkqru1h%2BARZfdtaS1%2BUpHIcnZpPbKWfeKV7Ot9vQKipCiLwJtDrljDW4BfB3koqJ3Ov8dL5ZCkByYoKrI5ys%2FYCehMU4b7jG5ZeYJWRfPaQ%2BA%2BHp2rUI96jb%2BwF4MLGy%2BdMGOqUBxSAaYQKK7kspcJZ1boijn1TXWpwnGOA92o%2B7g1fnE%2FL6Tm%2F2%2B73h8qMf%2Fym88wuHZug0c8axC7CRIvw5KUF4UqlWgkkPma3RGFcot%2BRxPmrLeXtrwEuoS%2BDQ4QxrNLwvH9GRkCIyL%2F4iKLhGquTwcppRFLBBmxV5SY8ZRNoSQmJN7D6kN4mfr8JVxcdPplfPF0W%2FA6mVYsNGtBMzvqMyIldNo7eB&X-Amz-Signature=e0241034b3589dcc1d9777ab00877c1839498012eee1edf1df987fbc3a2d7729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466437AAKBB%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD8VyAx0JQ3eRa3hQ%2BQzobZduZt80my%2FNG4BXZffjIl3QIgZHZAC%2BcVmHXgv%2FmrT0dwgSGJK2pyZHiMSWkys1slNbAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0VY21YP6hfQ8ZqHCrcA%2F0x%2BkHr1%2F6hpi%2B18oihG87sxsqMJhyjbAos9CSqvbQQmA4nHfX7j3%2FB1kfv2Cd4OoXK%2BQ82l7az0Bb2mqqZ8zO119ay8a%2FaWm6a6uoPFHnXkQFQuHP02ChKmESiLTiJylRam2RA4T3I2Rlg60XAONP7L7RzV6uHRrnTj7z%2Fdmg8JKp8clmjYb9TGwjW1CK36lERczSTmmjVbZ0yHOUD5%2F4r05Wd7GLwCYTeljGtV9taAcloDlCImmFpls%2Bs7deyWDif%2BS8utFZpEq9VLdqMb2V74aPSCfNVGjPraJy1rSmii6Bz%2FYUZQznD63%2BJ1f32msE2fDh7b9nIR5ECaxo85MwXT4cRaWdeCRns1oTHPA5vMEJw9GF7T3hM%2BRnjAwQ8jXmYG97O5TDaIzAE4R9d8IEtv%2F6yk%2FZcijDUZnEYJmIq%2F12GdoKY61VE09Zwx680DMUmS%2Fi85jxlGJ%2F0B4K3gYeV6B6xABPrtvMOGXztS2usrfzxte9zO8dafL66xOtWXkqru1h%2BARZfdtaS1%2BUpHIcnZpPbKWfeKV7Ot9vQKipCiLwJtDrljDW4BfB3koqJ3Ov8dL5ZCkByYoKrI5ys%2FYCehMU4b7jG5ZeYJWRfPaQ%2BA%2BHp2rUI96jb%2BwF4MLGy%2BdMGOqUBxSAaYQKK7kspcJZ1boijn1TXWpwnGOA92o%2B7g1fnE%2FL6Tm%2F2%2B73h8qMf%2Fym88wuHZug0c8axC7CRIvw5KUF4UqlWgkkPma3RGFcot%2BRxPmrLeXtrwEuoS%2BDQ4QxrNLwvH9GRkCIyL%2F4iKLhGquTwcppRFLBBmxV5SY8ZRNoSQmJN7D6kN4mfr8JVxcdPplfPF0W%2FA6mVYsNGtBMzvqMyIldNo7eB&X-Amz-Signature=6f67c3a198b68943f0f8a2ce1f12e5965cb61a864c3a81de2632f39a74f3f631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466335MJJZP%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIHBMjG5mJ5xGueO1HVYqfueifWJsoRgUv%2FvDLRZj8JspAiEAincCO0cRERGIxwUZnkX0spPEAyIZhmAtrCm7wM48Yc4qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOj2qur7WHeNcws7ircA09qAeA4g%2FkYk3bgg%2BcT1DtuU779TDO0KuQRA%2Fns9Q9JCfhM0JsR8PKmjp9T3VSIW%2FfAr5lygWghxbbndgxwyPsFcXOzzdmeSPQVgajiO%2FrOo7Fy8X8TBfmF7Q7KTpJ%2BkKSbr3DHIDdrO9ytauIqlBjW3ChcyN2IOabXJWtywQzjae47AxnzmeoiVnBQ%2FLZKnD9ES0WvtEFNZzCHCYvIQQ86hXYEhakyt25a2sFQ6L256l0jUBB0Qu7exkUU1DEBx2e80gho2FBrmnNeu58GE6t1B03P5Pla8xWn46izYbcQ3KKDID4H1l0eOPYdenfkX1d9wiKuLSDkyNJKe7l4Kz0BxUEGXQb8GlFDrYwwU5Dhd7oaY%2Br%2BGeNbzQN0Fl8U0J4HVfhzRtNr1KU%2BKV%2BA4FzXGvqq4Vh4EfTCA6I3WxHYahD3WqZ4mInbajEshEqOGGcbh4ZHS7UYiuvPLtja2IuO2iN78pgzzLW3uliKiepHbBaAH8Jjvgss1FpOn7pR86g2vILZ86aht7k3zXsAMjIQq9DVTG5d1MqKSWk0DyJwCbwKKRAa%2F15PYp7I5E9gLqFetKE7hiBMbFz8QUKuUz828qV2Tm8B%2F6tF5hS2kxXzVwotIgXYjwTSI60lMN%2B1%2BdMGOqUBJedGT20IYFPtRg9xxj8HpnZ5o7aFwOLY4aZ4YFWin%2F8U%2Bn0729XaTKH8hky4gfi1MvBqeC5sGF6gpiupeM7magzzZFCgpMAyGzPAXe17ZwqNtai2llYVbEQrivP20ODz97fk%2FVJjgijcBHY2rKNe6aO34dfZ31b3vf96WDAhsrc3wWMtNTVOKHAH4UltJKIsvUJk6np9Yv2CdhLG84dKGKdNtca6&X-Amz-Signature=6bf9566f9eb778ac4675e97e0969d4297cfa9663a6b60a8c06c43497cd561d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

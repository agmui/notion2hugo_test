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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UP2XCRW%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDVJ9e%2BjISsdUit2e3fYeLp4AwybpU6Pg%2BkBRA8KkiX3gIgOOAXr0lubkfgpWnHXci25H1JuDB%2FPn6hvP%2B8G7PufMYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5Nf%2Bg7RTL81ZfBYyrcA%2B%2FEzqc2jTVGAjDsJIGrSnMzuothNWeSHXUreB0YxBkp4HjdLWEOuKH%2FESNrfUIv4Bet8uAHEtRpwP40CsUcqTBgWcom17qQMX6s3ONvqJ0L5GLhcWABNPnm%2BxV%2B6Rl7Oe7AHod4aO4%2B%2FA4ADFrvR5KSEaaoZ6%2FHBc7HlzBOI80krG0ECH%2FxIwyYEGq1I7%2BKkSuHlSbqAFmI5t044thK7i0lhldAvQvPiBFr4FJW9YRK%2BYmEQOVlkcH4HkWynf4Pvj%2FV35%2F%2F2xYTrPDNJGnjRphi48Wra3KzAFEAGh5LmQyeD5%2FfuWV5lInGYCp38gZ6cCn%2Fmj3Sm51ZB72PemljAZNm%2BD20Qxw0UNxzy3a61C672SKuIGmX0IZWt3BnFA1cYglUGKnPM7GuKjq8xRJ%2BCu9o7iqK10n0fuXMeowWfaFQs0yoNIdFDa%2ByY6iFFSpNnVzXoNxTRLPdWYbNd%2BYyohNPGnr%2BJh6Mz96eFSd%2BziHhGCJWxmULd9Hr8STcf%2ByYWHsFrdUcpEiA3ap0ou7PN8b2nrsZKIC8DaTsXEAlYvI0DOFTSVVDrDRSPl8izvazlVQxVxP6CJWu8X9jZSNVTj4g4XN6qNwzGDERcgnOIM%2B2lg0CC%2BeRDx85he4mMLL5ocoGOqUBf1bsYkF2SWswrIeVfasLBXlsW6JBh8ecX90%2FcP9cx95ikOislNJQzQeVYtFGaTESI82xAr%2BmwaQoDX41OriTXdlSoXo2CR2WSmwLaSXe2Cb8GVFwWEjY%2BKBin4Q3Z5saObWt%2F5nJUGP7qcre34UmkOn4gYK6QsvoUggIk7m7xgbtbYAHuYPNFPYah6lj%2BN342SshE4JNR%2BGI%2F2tStA%2FDGXayp7t9&X-Amz-Signature=c276af641675b353a63d1b58ba205960f8c10628b80dbc545e38f747f3d675b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S7Y2DYF%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFyKzglT2n3CHv4WovacVNTL7wtqvRQ6AVBj0S4zL6T3AiBOaDqG7KuSh%2BC%2BrR65aXOHNwPJItWMcp3%2BXnM%2BRJoAoCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMemtG38ngmVuvbaWEKtwDAk%2FxKVg%2BaqprjkQCvhHai7ZAZWqra3WDvL2DoCVtKnpzdAf46pKDMOj%2FKk1wdjp5XZ0%2BEd9mEd3rMLUGXCzDWPtMyeAqSl46ftf1Y%2BgIxsMnYomhNVZG1uxMi9I%2B3K8xvjVrMhep3JYv57yba4Lm9fMRJ0T0p5iJtNuN6URxhj9npDbzDNHQElJi4JgLandUQtDy%2B1LQU2vcJBM5VjJAxQZSyE33kcK%2BjlWm6Jtra%2Ff%2BgUpbd58KJ2vbQdaOb7bt80sRunotMGzN6T%2BsOQdLejeRxRqeYSMVbAwyOy8eWGsDPbk%2FnOMOGCsEqGfxmTFdaePhkPfA8FPxwVuMKHLRTEArElaZP4%2F1oi32fELENCVhB1IYI1TjmrlPSGMYWKpoTUnhAZAKUL7FA6HwJRq36iKYkzmEWMOH79WYNc3%2BlF9ncmYlng2me%2FbMgU8b6V1qbnZ3hMiJZnfcmpKIda%2BHMdQ3fK4Q3NzQlNhZ5930eziLGuDPNs7OcIkHHSG3v2gvVsUQGy1oD5HVLTvdszYOQh89DuOFnR%2F9FirTPAi1jr5YO1lBfGgPWUoA2vP%2BoQzf7JvTNPXCoSgQthIgRRDrdDHh%2BbXBNGvE60FCKaKGB5Inb5aFblNf5PIo604w3PmhygY6pgEt4jq2MmkDtAzyfbiXlDwc634uGzsIiQ9M9PzzsBraVQeGY5KU9qJALhAkphtn7yZ8IsstawmJAarxnpVXxVbe1g2F3b22Bk1iV%2BIzZ%2FKo1y6hvYnamPuSBFvuAEk2Ex%2BMwg7cUmWkhRbiz%2FBzOW%2B987z2hi0Jff28%2F7c70EXgw3pWphA7rNvCUouQCADHw39YXWMpO%2BUm6zoChrgpB9ryuPZ%2Bg5Qe&X-Amz-Signature=cc3491dabbb4946e3baaa2f02d5dd41d4073255747e31b8dd1c38211909a2a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7ZDNHVV%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCg3ddcaogr12jQsK0s7trR%2FRKns5XVARWKVBwegqjfLQIgRpUEeY59UCA6%2FeC5K8Tobg02COGOyRHk1V353M%2FjcRQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BkrHsE%2BFIX9S4cGyrcAx%2FphzQoiBJS6L9UjNPRIreRmVmUN3KNd97u9IXc7mn5RlL5i1FlxOSKO7tlHfaGoGOGhPUWPaL7zuymIezR%2BMOjbJhcsvrHmTUJag061YBSsRGYAsf04snkIJK0YW4oqP0qdZIfmELQaAgQN50yAPzL%2FxAxiWAeXMqo7nZcC9P5MjiLu3cQZ7%2Fd4cptwoPfNNnf0mSHbfm%2Fgfj%2BAmLMSiEcmt18UpbYQagUjZxMotEFHq4oDupozWhYZhDv%2FuIT798wzw4oNjlO%2F6OD5rcPXF1de4rCxa3h%2F3D2Nby7iyx9OLc%2FrKKCslyhUE0RC8o9l14ynB4PCM6hZnSUo1goq9DHsY9l6xktZq1OpD92ENGxN4QqvR7PHlui9s60hpLu4YoIDq7k8LBlD%2BBRmOsCKweMiQcbWOy%2FOOJNz2a01Bt8AtzhzsW%2BeGKDtaml%2FUHQm3W27m7qnHdIcHgF8HSOeg1GlDauN%2B80ub5BUPrG5dKy2b%2F0SXd7GWgEDDm6ph6tFV9%2FuM%2F%2F97KRTGObIKH9jIS7X25UmhToXncMatGweeAjN7P8dmAOSN8L8VHqeJGHlV%2BhlVKxD%2FeeHjZKj%2BQQqnV%2BGPAFYD6XgJP2bH8aosI%2FWnJsfvMtxM20FE%2B0MNL5ocoGOqUBAXAio84VRyfPr2UbJ7AqUFmhoUhsgHlDVs8arK3G%2B3ihRxmAfSLiIUDBxmkvsweWmZCi7%2F7rSwcb6a08bKwoITb7GdPJ%2BEdY6wwBHkE924KbydwXiHzhKVJBqgy1oyuasjPHZl3KU%2B8sjUfjZZIZHHusA%2FOhHuEPh8cDs5ONKjzrpFxK0otxf%2FSnKmg9Ma%2FNUefP1tpTOp%2FVHd8UMKtxPH%2FkEm5%2B&X-Amz-Signature=10dc910050945a851deb2010c122f0bfffe78022904cddf63ae605febcf775d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7ZDNHVV%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCg3ddcaogr12jQsK0s7trR%2FRKns5XVARWKVBwegqjfLQIgRpUEeY59UCA6%2FeC5K8Tobg02COGOyRHk1V353M%2FjcRQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BkrHsE%2BFIX9S4cGyrcAx%2FphzQoiBJS6L9UjNPRIreRmVmUN3KNd97u9IXc7mn5RlL5i1FlxOSKO7tlHfaGoGOGhPUWPaL7zuymIezR%2BMOjbJhcsvrHmTUJag061YBSsRGYAsf04snkIJK0YW4oqP0qdZIfmELQaAgQN50yAPzL%2FxAxiWAeXMqo7nZcC9P5MjiLu3cQZ7%2Fd4cptwoPfNNnf0mSHbfm%2Fgfj%2BAmLMSiEcmt18UpbYQagUjZxMotEFHq4oDupozWhYZhDv%2FuIT798wzw4oNjlO%2F6OD5rcPXF1de4rCxa3h%2F3D2Nby7iyx9OLc%2FrKKCslyhUE0RC8o9l14ynB4PCM6hZnSUo1goq9DHsY9l6xktZq1OpD92ENGxN4QqvR7PHlui9s60hpLu4YoIDq7k8LBlD%2BBRmOsCKweMiQcbWOy%2FOOJNz2a01Bt8AtzhzsW%2BeGKDtaml%2FUHQm3W27m7qnHdIcHgF8HSOeg1GlDauN%2B80ub5BUPrG5dKy2b%2F0SXd7GWgEDDm6ph6tFV9%2FuM%2F%2F97KRTGObIKH9jIS7X25UmhToXncMatGweeAjN7P8dmAOSN8L8VHqeJGHlV%2BhlVKxD%2FeeHjZKj%2BQQqnV%2BGPAFYD6XgJP2bH8aosI%2FWnJsfvMtxM20FE%2B0MNL5ocoGOqUBAXAio84VRyfPr2UbJ7AqUFmhoUhsgHlDVs8arK3G%2B3ihRxmAfSLiIUDBxmkvsweWmZCi7%2F7rSwcb6a08bKwoITb7GdPJ%2BEdY6wwBHkE924KbydwXiHzhKVJBqgy1oyuasjPHZl3KU%2B8sjUfjZZIZHHusA%2FOhHuEPh8cDs5ONKjzrpFxK0otxf%2FSnKmg9Ma%2FNUefP1tpTOp%2FVHd8UMKtxPH%2FkEm5%2B&X-Amz-Signature=ec2ac23cb19ae9072315c4307e842662a55276c5d713cc9eceff1df634757d61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S7Y2DYF%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFyKzglT2n3CHv4WovacVNTL7wtqvRQ6AVBj0S4zL6T3AiBOaDqG7KuSh%2BC%2BrR65aXOHNwPJItWMcp3%2BXnM%2BRJoAoCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMemtG38ngmVuvbaWEKtwDAk%2FxKVg%2BaqprjkQCvhHai7ZAZWqra3WDvL2DoCVtKnpzdAf46pKDMOj%2FKk1wdjp5XZ0%2BEd9mEd3rMLUGXCzDWPtMyeAqSl46ftf1Y%2BgIxsMnYomhNVZG1uxMi9I%2B3K8xvjVrMhep3JYv57yba4Lm9fMRJ0T0p5iJtNuN6URxhj9npDbzDNHQElJi4JgLandUQtDy%2B1LQU2vcJBM5VjJAxQZSyE33kcK%2BjlWm6Jtra%2Ff%2BgUpbd58KJ2vbQdaOb7bt80sRunotMGzN6T%2BsOQdLejeRxRqeYSMVbAwyOy8eWGsDPbk%2FnOMOGCsEqGfxmTFdaePhkPfA8FPxwVuMKHLRTEArElaZP4%2F1oi32fELENCVhB1IYI1TjmrlPSGMYWKpoTUnhAZAKUL7FA6HwJRq36iKYkzmEWMOH79WYNc3%2BlF9ncmYlng2me%2FbMgU8b6V1qbnZ3hMiJZnfcmpKIda%2BHMdQ3fK4Q3NzQlNhZ5930eziLGuDPNs7OcIkHHSG3v2gvVsUQGy1oD5HVLTvdszYOQh89DuOFnR%2F9FirTPAi1jr5YO1lBfGgPWUoA2vP%2BoQzf7JvTNPXCoSgQthIgRRDrdDHh%2BbXBNGvE60FCKaKGB5Inb5aFblNf5PIo604w3PmhygY6pgEt4jq2MmkDtAzyfbiXlDwc634uGzsIiQ9M9PzzsBraVQeGY5KU9qJALhAkphtn7yZ8IsstawmJAarxnpVXxVbe1g2F3b22Bk1iV%2BIzZ%2FKo1y6hvYnamPuSBFvuAEk2Ex%2BMwg7cUmWkhRbiz%2FBzOW%2B987z2hi0Jff28%2F7c70EXgw3pWphA7rNvCUouQCADHw39YXWMpO%2BUm6zoChrgpB9ryuPZ%2Bg5Qe&X-Amz-Signature=da27a80ac3c46ff6d9618401b8725487d972e62f4da79d370171153b22ba9b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S7Y2DYF%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFyKzglT2n3CHv4WovacVNTL7wtqvRQ6AVBj0S4zL6T3AiBOaDqG7KuSh%2BC%2BrR65aXOHNwPJItWMcp3%2BXnM%2BRJoAoCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMemtG38ngmVuvbaWEKtwDAk%2FxKVg%2BaqprjkQCvhHai7ZAZWqra3WDvL2DoCVtKnpzdAf46pKDMOj%2FKk1wdjp5XZ0%2BEd9mEd3rMLUGXCzDWPtMyeAqSl46ftf1Y%2BgIxsMnYomhNVZG1uxMi9I%2B3K8xvjVrMhep3JYv57yba4Lm9fMRJ0T0p5iJtNuN6URxhj9npDbzDNHQElJi4JgLandUQtDy%2B1LQU2vcJBM5VjJAxQZSyE33kcK%2BjlWm6Jtra%2Ff%2BgUpbd58KJ2vbQdaOb7bt80sRunotMGzN6T%2BsOQdLejeRxRqeYSMVbAwyOy8eWGsDPbk%2FnOMOGCsEqGfxmTFdaePhkPfA8FPxwVuMKHLRTEArElaZP4%2F1oi32fELENCVhB1IYI1TjmrlPSGMYWKpoTUnhAZAKUL7FA6HwJRq36iKYkzmEWMOH79WYNc3%2BlF9ncmYlng2me%2FbMgU8b6V1qbnZ3hMiJZnfcmpKIda%2BHMdQ3fK4Q3NzQlNhZ5930eziLGuDPNs7OcIkHHSG3v2gvVsUQGy1oD5HVLTvdszYOQh89DuOFnR%2F9FirTPAi1jr5YO1lBfGgPWUoA2vP%2BoQzf7JvTNPXCoSgQthIgRRDrdDHh%2BbXBNGvE60FCKaKGB5Inb5aFblNf5PIo604w3PmhygY6pgEt4jq2MmkDtAzyfbiXlDwc634uGzsIiQ9M9PzzsBraVQeGY5KU9qJALhAkphtn7yZ8IsstawmJAarxnpVXxVbe1g2F3b22Bk1iV%2BIzZ%2FKo1y6hvYnamPuSBFvuAEk2Ex%2BMwg7cUmWkhRbiz%2FBzOW%2B987z2hi0Jff28%2F7c70EXgw3pWphA7rNvCUouQCADHw39YXWMpO%2BUm6zoChrgpB9ryuPZ%2Bg5Qe&X-Amz-Signature=54636928f82ffc684b42c5fc41156a2b37b0997325e75267452bc8bd29c31b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R72TOLHU%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDlBMTcns5AjYByXym2o9U20KhcgIE%2B6op39uUaoq1U2AIgUihuIx%2Bs0UNruG%2FnRyI9fgHTmyGNhI0aFeoGqKdZa7AqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtE0sBttnp8rjBbUSrcA7EPN010F6I%2Bcefatb7lzgncB3%2BldnPiwPrNTd9IFQZ%2Bf%2B3LdkwKkSpJStzZ70DOWqOYolKtS5j%2FvTUJ%2F1IJPxnuZGxyLetq0tbyws33Hj%2Fim%2FGm5FzQl0G1yQHwlAk2qmqxi3Jw0QqS%2Fzn57SF91BaVde5qyBLZs%2Fh2Yav%2Fl7Sc2oJFbIL%2FKXDASyizbjdPmb1skSMjvBbQZj37zYQPFrVQ%2FHSrSP0xz1HYM2Syi6Gkc2phw1v6pN%2B%2FQcrWq4y31mbaWbGJyHABM1TxY4h0zxCz41Ee3ZqGmESrtLwEDgHrJnM1qP3dIByNS%2Fj%2F6n7OAXeW1Egc3lx5ZJbPlQSSnntq1CpTnyvcOvzBj9mTxcJhHC5B7bfaCk6KNPv9DJNJAQK68MIcDI4v%2FJ0AvHAra7Qo8ADCTGjT9C17RcsKVQYYyr99TS158Csqu91INL6J06nBV5qzI3WtJqrQS6KtczhgD294jeVv1P2cRuxIdC67pBG3oSPrkmGDU%2B7ZMQqh6o%2B0Nuy9npp%2BibwUHcf26nI8MzQEMHO85ZcvNtTbYrY0Jt7gN7v9ssFS6sI23TnGCoQGvgY6ZwyVrgKP9LbDhPivsz4nKaWMkW7UECMdY8TcpkIS3Za6xKyt7FKAMOP5ocoGOqUBiADVIHKq3JfAsD06W9a24qeKyB4attU4Ea1QOylygB5osrVuKw%2BfC4v0da21GcFsUjKZNbY2qpocffLPNmv7BhbkS%2BpCZY4veeCtQhMuWQwje630itFaZcl%2BGK7nJu1e7t8s0Mb%2BixB2OPsFzG9x9RGIk%2FDLjBezhTFySo13LQkOj4t0uyfmZ9Ob%2BNq1UHxkk6xXlTRaku5wCltfgcPtcpnUXNMh&X-Amz-Signature=0d17b55beefe04235253a85075d6c77b6d81ddc3f43e0085cf094f145b2749b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

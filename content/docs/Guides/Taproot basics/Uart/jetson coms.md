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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6DBNXZ2%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUS1QLEop%2BR9bgrYb%2BBCdFuTolcwB6hOySORKTg88J4AiEAvzM93Io3SMmuuzjt0szfeJomesQxd33WF0FGYsHyAfUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNpUgYtz6SYfwrqtTyrcA27hyIr2%2FCXJs8bYWBtc7CyRDR6bFu1ioHiRn5tLLMHzxiv6zzPpOnRWwdHgwyA77fFYYKoG1gPQn0iF5Z6AS8CEYBjZsieUeHzjjGrGBG%2FUUcHpRXf4FmUsYCeSpjKnXSeqm7d3eimlpOCKqaMGoAl2oG0hAnfXQrXtbhgq9NpyP8Bugsg0T9McNL56jN74pqXNV6yIBUBMFFMF8JXipk2L3Y0D8LArwgCZdKt2dKDFz4XtNW4tPbZRChMu2IIUjqcCommCC92KQ1bJXJPunZetAn56g4YvglIJ%2FQuYIqbRX%2FvrgL88sS%2B%2Fk%2BHBBMpYlQnvp4w7E%2BD%2FOTL5fyMAwn6afWrZRMhuZXHD5SgBoRiwU00Lf%2Bvc84VWtqlyvBYWZcIQxiET2sozzerxOx6zbj77y5nRzhfaYocMqSRk%2FdX6whJQZCGUpheVtRGSyKAdwcllvjzkyx5503%2FV29oTpX5B1VhOri%2B%2BNgeA%2Fwyirl4JU7AItcTr7m%2BOHNwKNz7ncJRiXBxoy19pp%2BwbMG7cqVg38gJRsFfCsGB%2F6EM%2BIC35rn3IU%2Fz%2F3%2BTTfFq8HlQ2g3izOnjnZq9IS3D6wijs3s%2FhSvgiWh6O5XNwWDrc6K4IOvUgIwoAhbUbaid%2FMPS2wdIGOqUB1Re9acHXeUe6VNF0sgV9XcKpCb75KSHIHt7LQeUxmnb6zZD1ALTNrMFczc13AqVd6wxFMl9CUMx52g9p5TeyeoKEulEcV0xjF2MB%2BsbNA6gbXk9%2Fe%2Blg8RH0DzY2C9PHheEjFdcax1GAoKPS3SraN2552PDDF4t8TJjGjwNd3P0BWfh%2FTaB8LPaD%2FAfS14mMolzEdfS9KVVjU6gqdG9F%2FLk6Sur%2B&X-Amz-Signature=2f46a95b8f175377a04499bb17d01a4a15292ec2b39a76b8311fb7d19c453a37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC46V4LV%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwYOCxoxrppQrXwz3jyPwMIFM0v66pl4InlQlYBEpLHwIgWhRj6YpgGDaPKXTmK2BBY65qEAHqYNUs82stz4R1DQkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7Zc77DN2ZreiwcyyrcAy4FW43ByyzryKnTwxXzjcR9Y5bCPbZ8b%2Bs5dci%2BgeyQcNFeVFtkH1Q0bMU77qd14ZIP13sGRJC%2F8is1CCcIPddivJCsDR3cm01hj2mSWbadeVbbjcuUEbw9oxAmsqCFuqPn1gE59h3%2FxVZx%2Fm0cQVPfWx%2FWbxOagWraFYAVslxgsagBQxTm6Dp5AWWkjcQnHd5ommB8lOvd6yyLD0qxdBVYEkKVi9lJJwwU9MXMdEJP%2B4BcdZ2TQjCdcAFUEzHBawHIsQw8MVfefVibJvhqi6OM3kCW4DY%2F1C6U0z2EA%2FBipBTnSSCNgv24LLAGgwp56sXqsDwaF%2B3mh7bvbH53Qo9p0ULYnMN8N0J6ttTD0a0xQPNRqCjeksskaW1iEgrTiwa88hqlfL%2BFQ6DBF%2BrvzX815popF19d%2BGbzumQM64xlsRwEnSn3XdY9u1o1ZcylxOddvooYLbL7VmyzMpL9iID7mf3oZdy16aAhBLbP7EO6U0JwfwAKodEhytRXtlIAPz8Vd4XqVfdp%2Bhxyn%2F2ua6HTL9avhgsgQokrAbd8LoMPtQWBVt9j9cQIp2glHlFvuWDAX%2Fi4wTZrKdu%2BeUhdbbVFqfY7vqjqdZ%2BKCO7huVI%2BOXHfsQWd9y3I9OwKMI66wdIGOqUBhkSqJbeD8nI1rXbe6Nevgb38nc13JgUY8xeoV7Udil9J6FGjJQ8hAkbtEHeHOFRDrX1G0rnBtm5HLxpYajK1gubhp7RK09yxPNydxSmSBv14%2FVyv%2FquQt4uSnpa%2BulxLNyDZ4tBrFZjVyCBH8zIifUi6cufljgRujgskN0aqKJKY7ysVfCbcN8kk%2F3pl8wgkdcYUoKMKwYy9JSM2PUgPejQLzRz7&X-Amz-Signature=0ce07af0ce3798ded200fe886da220790bb386f83bb1120bf8ceedccf1cfff24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTCRWFGV%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3H5%2FeIOJkrsBYFZ4K%2Bd5qr9P%2FVYELOJP3WzW9%2FdF%2FQwIhANa5PRY5Cjews86Cp2cEQUPG%2BZHbiwfFcNJqrm0KUzevKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxEW09MUSkVxdOTNkq3AN981xXGy4S1Cj6R4cU%2FraZv7MB0IgvXl0q%2BXMErfReFaaU97JowxYqz8G6VhX%2BvAVQMMBD6jLSrbqXJEWNoMTzEtNXP7kiSZCY5fA12wavs44x12aApk9tZI66tAdhl0ppKz0yedwc7tZqHOfE2siYsIh11%2BsWYv7i7kGscdJUZ5O58sx6dIN5Ld98zzRHV0ojTOIli90QeVJJ%2BOqRm8gj7cIsA4TpEEp819pOtnO6GkNyhTRMlI3MusY8WEG1FDibdhShO2Dk2uz63X3zhzxssPNnGDGFcVqihixmwKZ2I7Pec3EQNg9sGuCeUShUR4rkJunYK9HOyaAOuKyOuTKS%2FxwgRI0LIkRq1C%2FGlih3LOpEZz0Uqt6LoNWtzMW2mFxEUuoFQIBigmgafzaYKlWzfo4vUh48QJtK0cxpM65Nidh4UfmczL%2B3nnXwu9hDtF4ZsgrnS88fsoeu7iHe4KzvkGeCaNyWdU96w4FOhyzLqOYR2Y%2BwoOmYjO9JsKcU9MR7GdUtsjNMsXa02WDVADew%2BupK6kMXF4wExDGmJ1k3BQno0KKHjKtyEZtH54Qb13lWMOEW3Is8jv%2FaY8iG9uQ%2F1glBGcTzXhuOnYC%2FX8OGsR3LCu33I8S8HG836TCkt8HSBjqkAV9bcyzV53sZWNpObkVNIrxrZCEcrcRElkPOkRzh1qEUmK5FlILB6%2FtltfWGSYhXYgN4fEwhfbgH7GyqYa3lpi6DBhhtgvUwRonbPPHwX8f6SzA2DodmcVdPKU5OIeL%2FJlyeyyefekyjh9bjbw0qN8YX%2BzfslAg0ntlbAYCzw%2FAlxiw%2FexmDXcsg3HIzUzqkd1cea3TuDgBVefC4Rr6KYb2WL9BF&X-Amz-Signature=5270426d88d5b1aa93048cc769af83c6fde62077e70230dcb6a17b939440ca64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTCRWFGV%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3H5%2FeIOJkrsBYFZ4K%2Bd5qr9P%2FVYELOJP3WzW9%2FdF%2FQwIhANa5PRY5Cjews86Cp2cEQUPG%2BZHbiwfFcNJqrm0KUzevKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxEW09MUSkVxdOTNkq3AN981xXGy4S1Cj6R4cU%2FraZv7MB0IgvXl0q%2BXMErfReFaaU97JowxYqz8G6VhX%2BvAVQMMBD6jLSrbqXJEWNoMTzEtNXP7kiSZCY5fA12wavs44x12aApk9tZI66tAdhl0ppKz0yedwc7tZqHOfE2siYsIh11%2BsWYv7i7kGscdJUZ5O58sx6dIN5Ld98zzRHV0ojTOIli90QeVJJ%2BOqRm8gj7cIsA4TpEEp819pOtnO6GkNyhTRMlI3MusY8WEG1FDibdhShO2Dk2uz63X3zhzxssPNnGDGFcVqihixmwKZ2I7Pec3EQNg9sGuCeUShUR4rkJunYK9HOyaAOuKyOuTKS%2FxwgRI0LIkRq1C%2FGlih3LOpEZz0Uqt6LoNWtzMW2mFxEUuoFQIBigmgafzaYKlWzfo4vUh48QJtK0cxpM65Nidh4UfmczL%2B3nnXwu9hDtF4ZsgrnS88fsoeu7iHe4KzvkGeCaNyWdU96w4FOhyzLqOYR2Y%2BwoOmYjO9JsKcU9MR7GdUtsjNMsXa02WDVADew%2BupK6kMXF4wExDGmJ1k3BQno0KKHjKtyEZtH54Qb13lWMOEW3Is8jv%2FaY8iG9uQ%2F1glBGcTzXhuOnYC%2FX8OGsR3LCu33I8S8HG836TCkt8HSBjqkAV9bcyzV53sZWNpObkVNIrxrZCEcrcRElkPOkRzh1qEUmK5FlILB6%2FtltfWGSYhXYgN4fEwhfbgH7GyqYa3lpi6DBhhtgvUwRonbPPHwX8f6SzA2DodmcVdPKU5OIeL%2FJlyeyyefekyjh9bjbw0qN8YX%2BzfslAg0ntlbAYCzw%2FAlxiw%2FexmDXcsg3HIzUzqkd1cea3TuDgBVefC4Rr6KYb2WL9BF&X-Amz-Signature=a9c2fd1591f6dc8a0632a60cd92a3bba4d340ee5ccd8d903d612b1462326f34b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC46V4LV%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwYOCxoxrppQrXwz3jyPwMIFM0v66pl4InlQlYBEpLHwIgWhRj6YpgGDaPKXTmK2BBY65qEAHqYNUs82stz4R1DQkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7Zc77DN2ZreiwcyyrcAy4FW43ByyzryKnTwxXzjcR9Y5bCPbZ8b%2Bs5dci%2BgeyQcNFeVFtkH1Q0bMU77qd14ZIP13sGRJC%2F8is1CCcIPddivJCsDR3cm01hj2mSWbadeVbbjcuUEbw9oxAmsqCFuqPn1gE59h3%2FxVZx%2Fm0cQVPfWx%2FWbxOagWraFYAVslxgsagBQxTm6Dp5AWWkjcQnHd5ommB8lOvd6yyLD0qxdBVYEkKVi9lJJwwU9MXMdEJP%2B4BcdZ2TQjCdcAFUEzHBawHIsQw8MVfefVibJvhqi6OM3kCW4DY%2F1C6U0z2EA%2FBipBTnSSCNgv24LLAGgwp56sXqsDwaF%2B3mh7bvbH53Qo9p0ULYnMN8N0J6ttTD0a0xQPNRqCjeksskaW1iEgrTiwa88hqlfL%2BFQ6DBF%2BrvzX815popF19d%2BGbzumQM64xlsRwEnSn3XdY9u1o1ZcylxOddvooYLbL7VmyzMpL9iID7mf3oZdy16aAhBLbP7EO6U0JwfwAKodEhytRXtlIAPz8Vd4XqVfdp%2Bhxyn%2F2ua6HTL9avhgsgQokrAbd8LoMPtQWBVt9j9cQIp2glHlFvuWDAX%2Fi4wTZrKdu%2BeUhdbbVFqfY7vqjqdZ%2BKCO7huVI%2BOXHfsQWd9y3I9OwKMI66wdIGOqUBhkSqJbeD8nI1rXbe6Nevgb38nc13JgUY8xeoV7Udil9J6FGjJQ8hAkbtEHeHOFRDrX1G0rnBtm5HLxpYajK1gubhp7RK09yxPNydxSmSBv14%2FVyv%2FquQt4uSnpa%2BulxLNyDZ4tBrFZjVyCBH8zIifUi6cufljgRujgskN0aqKJKY7ysVfCbcN8kk%2F3pl8wgkdcYUoKMKwYy9JSM2PUgPejQLzRz7&X-Amz-Signature=5b7aba46a3014b8399535fb5d78c17c27892544ddcc2b54ca0e7c53631948605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC46V4LV%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwYOCxoxrppQrXwz3jyPwMIFM0v66pl4InlQlYBEpLHwIgWhRj6YpgGDaPKXTmK2BBY65qEAHqYNUs82stz4R1DQkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7Zc77DN2ZreiwcyyrcAy4FW43ByyzryKnTwxXzjcR9Y5bCPbZ8b%2Bs5dci%2BgeyQcNFeVFtkH1Q0bMU77qd14ZIP13sGRJC%2F8is1CCcIPddivJCsDR3cm01hj2mSWbadeVbbjcuUEbw9oxAmsqCFuqPn1gE59h3%2FxVZx%2Fm0cQVPfWx%2FWbxOagWraFYAVslxgsagBQxTm6Dp5AWWkjcQnHd5ommB8lOvd6yyLD0qxdBVYEkKVi9lJJwwU9MXMdEJP%2B4BcdZ2TQjCdcAFUEzHBawHIsQw8MVfefVibJvhqi6OM3kCW4DY%2F1C6U0z2EA%2FBipBTnSSCNgv24LLAGgwp56sXqsDwaF%2B3mh7bvbH53Qo9p0ULYnMN8N0J6ttTD0a0xQPNRqCjeksskaW1iEgrTiwa88hqlfL%2BFQ6DBF%2BrvzX815popF19d%2BGbzumQM64xlsRwEnSn3XdY9u1o1ZcylxOddvooYLbL7VmyzMpL9iID7mf3oZdy16aAhBLbP7EO6U0JwfwAKodEhytRXtlIAPz8Vd4XqVfdp%2Bhxyn%2F2ua6HTL9avhgsgQokrAbd8LoMPtQWBVt9j9cQIp2glHlFvuWDAX%2Fi4wTZrKdu%2BeUhdbbVFqfY7vqjqdZ%2BKCO7huVI%2BOXHfsQWd9y3I9OwKMI66wdIGOqUBhkSqJbeD8nI1rXbe6Nevgb38nc13JgUY8xeoV7Udil9J6FGjJQ8hAkbtEHeHOFRDrX1G0rnBtm5HLxpYajK1gubhp7RK09yxPNydxSmSBv14%2FVyv%2FquQt4uSnpa%2BulxLNyDZ4tBrFZjVyCBH8zIifUi6cufljgRujgskN0aqKJKY7ysVfCbcN8kk%2F3pl8wgkdcYUoKMKwYy9JSM2PUgPejQLzRz7&X-Amz-Signature=bcdf063dafcd9a541d8e9af7e1642c9e840c44fa0b1e007ad79933d0d3bf3824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNAR33EE%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZfeuhg9N3wXBmcRkKQQLMpKN1A8wYhIUhSb1WoY7krAIhALt9GZUE2ufqwwwsVY7X1sZN1vdkWKYxzvAdcInJwe4hKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlQzE7tS5Yfm046RYq3AP0%2Fwf%2Bq8u2UVtCCp4hW8SxNer4umi2%2FIINAvEdg4RNi50BSxriBG1%2FCHeEBsrnimPS4wwBf%2BG%2FtzxfJsKY0GNfm%2F6ZPVxbIlQTQ7EScec%2Fg0gtD30dPL%2FBKRM1bqFgWQy6wfpWacBEldznXSTCO8FXqGYWJJoo6%2FRSlz3Ijsr0KDvPLCfwIlRR9BDSOvzHrVt2UpR7sFBrcgeSIQEQG7hJBlvwxOHsrfVNAdVactLfk%2Bfcg%2Bq4UJKCa7OD65PLncfzjmwh3tyvDZyuJZA0p75us2w49OvM5WWxiiDsf2BydbHXeDXLFNJL2qXLgKnEcZuQw7CU7XS%2BFqZ6UwH0xmbq62VH6miItopdU8NorRpXifeImiT3IDcQdBBU10lqgXOerXyfkjPDUflZM6dAwH0vPd4l%2BufUyAvK0Ca2NoriFeCvw%2FPmObTFmRyqCnt366%2Brgig%2Fnnep%2BPN%2B62YMtvDoC5QmUiPOMSInSYOGvFo9%2FaXlIyQqMPXj93h%2BRgTwc7x4orM0r4R76Uczg4GAP%2Be47iHRhrp6GZLUIPgy9TFe2fquuiLn9x6miI6plC%2BTfKgGYuur5jE6iH513f8coNdL29hO%2FzVaJAyZF24X0fcQxOgL4e3b7JRhu66vGDDjtsHSBjqkAZb9HCR4EdXace%2BCiAuLOHEIn9ND48i1JC1EBDjP5HLp5e%2BSJWwtlyplX4CmrYg2k45vhaEQYzSt2XM6cce5P%2F2yd8LJsPTTTa0KXtq3qS2EVhNJNs7jmBMU9TURw%2B2HSpcWmAkZvEgyOEwvbdPy7MGuEC8vHbT%2B2VIyCY%2BbqZP3JgMMvala8rjz6%2Be0k4BP2ybVgmBIg5B1sLo4sU5G3lxmF%2FNg&X-Amz-Signature=b12a00cc6d27419f66545d7e29beb76ac6861f29c1853b6eac013aea9bcd1036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

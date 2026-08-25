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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DTDHDIK%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDEXsHRBplQ65r6f2VMIEFEgsN9Qz3NbChRGFwJ9oockQIgYrSAQ5irAVqvbEW207lWSe7gyVpkFjMUnRf5bL6SfnUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4K%2FuGjCScGDu%2F%2F0SrcA2q7LIAckgNrQWNhteAvNoQ%2B6bAySX5FtnBCfYh9jmjNlSpwzLd9AgyncWNtrlycrq9cRQKYSEp8Ak21gcAvbl%2BZuAwO0u%2F9zj6y9kue8IJFbSmyDEWM%2Bm%2BffjdIj%2FE5gOzSrby92OjDpH8u%2FvvRXPPivARAoY89EpCaZwdclM%2BZbUpwbkUg6sMfkAOa6jd806DDPLy%2B5grmPzVY5Crkbqo0ZlpJ%2FIrc8%2B8kus3f8b%2B4lJvrbQoIojy%2Fo32g57j8BVbbwNijgDbilis75zv6QeJrsr3x57Z%2BcpdJm0RJMfn5TTKxXZJU%2BHlCU%2Bm91%2FzARyltpzkyp%2BNHVtNbKtH1RZhN6x2ZuJqsZg6cIgp%2B68YVpt%2BwT9vLAcHadBBMzOLVElwJpshc5cVE1ilfZUSrukQ7WszhuVaSLd3Dacn7ROuewF2OoAKjmy87ApfQFcFnYE4m7xnVv1BpSXbTraIrKNSetZmkGOrVcO0ImQzoDbfnYlN2hrxEUAQZXxVpzd8c4KCz8hrqKJoV2kL0euffEsVBrFRi76qbT%2BMH2ovkIGsVkVhB8GI0peUIJo8ttF3EnBw%2FuAsVxArVP9WmWZ1kS9YfMVhhKKSMtl9mMxnkjI7esG5V5RqsN89AdoqdMO3Qs9QGOqUBcdW3SwA5ZLCeFP28LwckjcZsKtCWyZG7pKj3ggJMqkSY2lVzfkZzFfTeTNUu1rgRF5oq2jw%2Fwj4yzWYWuy%2BLHtoajHqzQDwGpwFdPtk8r4g8o1gFPVZan81C08oIZRUJG2lAkl%2Bm%2Bqsn0g2S%2B2EpU2gd%2FCp%2FCUakyrLvDq9Ro31b4I%2B9WCdeF0fEx6jY8A2RXvFLUL726SHvPfg7KbLDe2oNubIa&X-Amz-Signature=c108dc340c09cf27539a51015771e3023497aa1e7c9e34f23370909c7321c2ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VER6KQUG%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC916EashNsslCENMsTsAm2blTVdBfzQjGk3rb6GNitUAIhAPS1zIpx9SdPbw2kwES%2B8Bs%2B8q%2F1Z0I4bFdwt6Kd5ZWAKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8WJOEik%2FNUl1%2BNZcq3AP0l4fjDns5ZcjiZGn%2F7zOAoiCA15p9JdD5epGfXctPAyTHKBoc%2Fgwd8kEhAIhaGU7mpb%2Bnfo7Bk2sQ2vB8zFMU53H3VoFENedSByi8U8PkyHGeRyr%2Fw7P1J1gp1tolrVxGyEgEC%2BJ%2FVJ4NlXSSr2YGRY6aHtTOwqfs5vFJaq2XB%2FZko4Z2D4IRzsUx%2FDnPraiEyFhruOA4PIJrZErI0zV5y%2BvyfWxAVIUKsYIatt9MZIze89LKqdVbP%2FHupttEZIr4vllpvxlo54TWqTc3IPxMHRuGCtt1%2Bn9OFl6gj86QFgfG20G43gmss%2B2Ap55LPsu1X1HWUexh6FFOy2x4DCBEezKqwuikr8k9YqqOEzHRHR0%2Fgf4cyex2NpEUFt0AVvFoydEruABzKFaczGH7LXlyxWfyC0HlZFiwypxMrqkYK%2FQBFSJIaX8hKCsWdyQCtxtjplsJ%2B9SC9vqV6N1vvN37uWIuGMNw0nldsO2vfvrPdrooe3SMhLxYJSY7ZQGjtXE%2FQaaT2sl3jtTkmoprzuKFJayvI00UrOY39LxRiOPo8da6M3gaFvafxk%2BKdJIf3k9fcZd1McRNl15v66RV0%2Bg4IC8UtcgaQLlMnKxaHDTWqT1%2FL7taQoTuQocdRjCR1bPUBjqkAZafAStgNkKPPFFlSMcCVTeS7hBQDC7RVUFmj4Df8pU8nSOU5vD6Y78xmDSMUuFqEU%2FyanpN5xzTeCMKNWLk9rZbSBd6Suy1VQwMKU20uajFSrHhuFKfHJ%2FG%2FIv0Fm6jBTp5ffGpy%2Ftf5%2Bedg5noy8xhKCSTc3zfRVDtK3siTQTCXrS0e6nKXxGeJaJDSWF7seyot9w%2FJ4ka7xJ5Q9ONJum5OVCT&X-Amz-Signature=bf48ad89751e63cf9a3eff252bcb97bd35da00d44bfe748dd2d8f84d0dbb006d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SBDGYGE%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHPJQsmumiQpVAZAo%2Bg8zkznK5ETJ2EWxcRAGyJk7%2B%2FAAiEAyyl64iMbCK5ufa%2FHYF%2B9igjFD6TVhelHm62icFz5hhIqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUC8vgF%2FfKzERTjiCrcA2NAQJP07tlTW0AqC9nvrCoi9cF0X1qYiiyg%2Fzyrte%2BOyF9mUr%2B72hO11jFNeF%2B632SUKAzzpEN2FaXOaoPRbIW5wuGumnPVb5DIumirqi7KM%2BvVD%2FV8pl%2BiNVTkoY%2BbjZHVFlP5EOxISip7c9pDpaCULrQKbeZhKQjkRQUS1DlEb6ujFaWhityU8dV6VU6AavZ1beS4e4EJM746k1Iy%2B7KbzicetdW%2FWoE4mI0p8WKmC%2BWJrgOT4w3jTmBlBNsZCrRxoCQvJKGbytmUof6mvcOwr%2BhRp%2BrDg3C7rSTURB7DSFUoVDNG1qRyCct17wSpHeUfEKDHU6H5812InqMJX9wp8k7CU7MJRE8OFKe2Hhg8rnNHUpIjzhvDb4h1XUYHSjVMVrotm0OSHyYcPB2%2F4v3MxYpBfo2HsJ0wtIbqbxE6FOfm2ejabPzKrdkdqFBIjaMry66%2FIspfMPhB3ZdH%2By0TmAq6L8YlCU8aG%2F8yhWfs7TnuwomV7GCkYyruBVUDJUOqUF380tF70NCw1Q%2FCIp7j09rvEOFNKG4HLrayXwaEIx0hsca0u%2FdoAhhvLxoJ9bUKJNmX1AWAbVciHUHNuFGUK3lwIgWV%2BzffsXM0f2pq%2B16laa5J1QtUgJ1BMO3Us9QGOqUBcl1FvsoCF5mPuSFoLo%2B4qy4uM1%2F0TVVKZTaJH%2Fn1u5txi02XpwyADZhWtTp7wkLp0nJLnFw7348FdUA5Xf5AR6gL2QG23bY51c%2BoAEwZYatA1E99P5%2FrepO6mjI8RhP7gFXRvmiYFB5Fs%2FEBuq6lweZPChgzGdbvNqoY3Brjop8Vxxe640OwEddkc%2BgyuEblToGykCFXhUZdBF8FBVmyWg4BSLC4&X-Amz-Signature=cab5538f61b76316adde53005f023702bd120881decef95cd0bd55a504bae368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SBDGYGE%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHPJQsmumiQpVAZAo%2Bg8zkznK5ETJ2EWxcRAGyJk7%2B%2FAAiEAyyl64iMbCK5ufa%2FHYF%2B9igjFD6TVhelHm62icFz5hhIqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUC8vgF%2FfKzERTjiCrcA2NAQJP07tlTW0AqC9nvrCoi9cF0X1qYiiyg%2Fzyrte%2BOyF9mUr%2B72hO11jFNeF%2B632SUKAzzpEN2FaXOaoPRbIW5wuGumnPVb5DIumirqi7KM%2BvVD%2FV8pl%2BiNVTkoY%2BbjZHVFlP5EOxISip7c9pDpaCULrQKbeZhKQjkRQUS1DlEb6ujFaWhityU8dV6VU6AavZ1beS4e4EJM746k1Iy%2B7KbzicetdW%2FWoE4mI0p8WKmC%2BWJrgOT4w3jTmBlBNsZCrRxoCQvJKGbytmUof6mvcOwr%2BhRp%2BrDg3C7rSTURB7DSFUoVDNG1qRyCct17wSpHeUfEKDHU6H5812InqMJX9wp8k7CU7MJRE8OFKe2Hhg8rnNHUpIjzhvDb4h1XUYHSjVMVrotm0OSHyYcPB2%2F4v3MxYpBfo2HsJ0wtIbqbxE6FOfm2ejabPzKrdkdqFBIjaMry66%2FIspfMPhB3ZdH%2By0TmAq6L8YlCU8aG%2F8yhWfs7TnuwomV7GCkYyruBVUDJUOqUF380tF70NCw1Q%2FCIp7j09rvEOFNKG4HLrayXwaEIx0hsca0u%2FdoAhhvLxoJ9bUKJNmX1AWAbVciHUHNuFGUK3lwIgWV%2BzffsXM0f2pq%2B16laa5J1QtUgJ1BMO3Us9QGOqUBcl1FvsoCF5mPuSFoLo%2B4qy4uM1%2F0TVVKZTaJH%2Fn1u5txi02XpwyADZhWtTp7wkLp0nJLnFw7348FdUA5Xf5AR6gL2QG23bY51c%2BoAEwZYatA1E99P5%2FrepO6mjI8RhP7gFXRvmiYFB5Fs%2FEBuq6lweZPChgzGdbvNqoY3Brjop8Vxxe640OwEddkc%2BgyuEblToGykCFXhUZdBF8FBVmyWg4BSLC4&X-Amz-Signature=dec2338e99b3cea0fdc30c56658c2f4350a4806838ef93402c8fe94e51507e3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VER6KQUG%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC916EashNsslCENMsTsAm2blTVdBfzQjGk3rb6GNitUAIhAPS1zIpx9SdPbw2kwES%2B8Bs%2B8q%2F1Z0I4bFdwt6Kd5ZWAKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8WJOEik%2FNUl1%2BNZcq3AP0l4fjDns5ZcjiZGn%2F7zOAoiCA15p9JdD5epGfXctPAyTHKBoc%2Fgwd8kEhAIhaGU7mpb%2Bnfo7Bk2sQ2vB8zFMU53H3VoFENedSByi8U8PkyHGeRyr%2Fw7P1J1gp1tolrVxGyEgEC%2BJ%2FVJ4NlXSSr2YGRY6aHtTOwqfs5vFJaq2XB%2FZko4Z2D4IRzsUx%2FDnPraiEyFhruOA4PIJrZErI0zV5y%2BvyfWxAVIUKsYIatt9MZIze89LKqdVbP%2FHupttEZIr4vllpvxlo54TWqTc3IPxMHRuGCtt1%2Bn9OFl6gj86QFgfG20G43gmss%2B2Ap55LPsu1X1HWUexh6FFOy2x4DCBEezKqwuikr8k9YqqOEzHRHR0%2Fgf4cyex2NpEUFt0AVvFoydEruABzKFaczGH7LXlyxWfyC0HlZFiwypxMrqkYK%2FQBFSJIaX8hKCsWdyQCtxtjplsJ%2B9SC9vqV6N1vvN37uWIuGMNw0nldsO2vfvrPdrooe3SMhLxYJSY7ZQGjtXE%2FQaaT2sl3jtTkmoprzuKFJayvI00UrOY39LxRiOPo8da6M3gaFvafxk%2BKdJIf3k9fcZd1McRNl15v66RV0%2Bg4IC8UtcgaQLlMnKxaHDTWqT1%2FL7taQoTuQocdRjCR1bPUBjqkAZafAStgNkKPPFFlSMcCVTeS7hBQDC7RVUFmj4Df8pU8nSOU5vD6Y78xmDSMUuFqEU%2FyanpN5xzTeCMKNWLk9rZbSBd6Suy1VQwMKU20uajFSrHhuFKfHJ%2FG%2FIv0Fm6jBTp5ffGpy%2Ftf5%2Bedg5noy8xhKCSTc3zfRVDtK3siTQTCXrS0e6nKXxGeJaJDSWF7seyot9w%2FJ4ka7xJ5Q9ONJum5OVCT&X-Amz-Signature=c0c70f2ad99a3cc963b94d8ec4926b25be71ab4278c87c2145f76100286b7aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VER6KQUG%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC916EashNsslCENMsTsAm2blTVdBfzQjGk3rb6GNitUAIhAPS1zIpx9SdPbw2kwES%2B8Bs%2B8q%2F1Z0I4bFdwt6Kd5ZWAKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8WJOEik%2FNUl1%2BNZcq3AP0l4fjDns5ZcjiZGn%2F7zOAoiCA15p9JdD5epGfXctPAyTHKBoc%2Fgwd8kEhAIhaGU7mpb%2Bnfo7Bk2sQ2vB8zFMU53H3VoFENedSByi8U8PkyHGeRyr%2Fw7P1J1gp1tolrVxGyEgEC%2BJ%2FVJ4NlXSSr2YGRY6aHtTOwqfs5vFJaq2XB%2FZko4Z2D4IRzsUx%2FDnPraiEyFhruOA4PIJrZErI0zV5y%2BvyfWxAVIUKsYIatt9MZIze89LKqdVbP%2FHupttEZIr4vllpvxlo54TWqTc3IPxMHRuGCtt1%2Bn9OFl6gj86QFgfG20G43gmss%2B2Ap55LPsu1X1HWUexh6FFOy2x4DCBEezKqwuikr8k9YqqOEzHRHR0%2Fgf4cyex2NpEUFt0AVvFoydEruABzKFaczGH7LXlyxWfyC0HlZFiwypxMrqkYK%2FQBFSJIaX8hKCsWdyQCtxtjplsJ%2B9SC9vqV6N1vvN37uWIuGMNw0nldsO2vfvrPdrooe3SMhLxYJSY7ZQGjtXE%2FQaaT2sl3jtTkmoprzuKFJayvI00UrOY39LxRiOPo8da6M3gaFvafxk%2BKdJIf3k9fcZd1McRNl15v66RV0%2Bg4IC8UtcgaQLlMnKxaHDTWqT1%2FL7taQoTuQocdRjCR1bPUBjqkAZafAStgNkKPPFFlSMcCVTeS7hBQDC7RVUFmj4Df8pU8nSOU5vD6Y78xmDSMUuFqEU%2FyanpN5xzTeCMKNWLk9rZbSBd6Suy1VQwMKU20uajFSrHhuFKfHJ%2FG%2FIv0Fm6jBTp5ffGpy%2Ftf5%2Bedg5noy8xhKCSTc3zfRVDtK3siTQTCXrS0e6nKXxGeJaJDSWF7seyot9w%2FJ4ka7xJ5Q9ONJum5OVCT&X-Amz-Signature=7d39dfb15c717e1130ff6d2a882904e05f1b209cec4e26d5712e0cc86aa49e2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ2LR6DP%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD2OA4uyhaVXUrmdJ89pHp2nEiGPmL10mfky04ca%2BYBkgIhAOvkW%2FHsxuMYUzEvZQ3PFahhlkBfeLQQj%2B0Ti20b22GCKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2m9U%2FEdSxtTTnfPUq3ANh9jUMXPstOnfh0GIQtK8aEFB%2BcEHDePl8f17lPs0Oo4ettpXjfXBB1BxibBRCm0Sb6mY%2B5sVQUW96msSze4nkQz8mpy5FShBnobE08uzYEBjU0MmQXmvycfVWqGtJ7Y%2FNhA%2FKMddYMeQ5UVfZOD5bVuu%2BZiCZZjqxkuKB9tJKr5wqQE0PhT5WkDqgnjHQZBI6OsX8IMMPUrHs1gYUlvQ6uCzAqpAATFvTTaRM7lljx2OsA553%2F3nW2AhKTFREvshZMINcC0y8D6B7VBeS7op%2FXB7F9JYR4rAUHy77yxN34BK7ACgj4rwbROH42LKM44xVeM9xzRxbUEpB8z2rlHrqCk%2B4Z3QcZ6pVpL4kqJoltAirLcY7BB%2BOWfOAG3F0%2F%2F7Y1J%2FS9gWHB4mMv5fNCWp3XTLlLC8agwmtIox5i5u6yRzK1RQ9zTcsN%2BhkTGMfRXKFv5lQnOOqpTFjFZPL6C6zLcxNlyV4ryHy%2BjovF5K%2Bj87X2NUC2B0OX5mBO%2FLHSs3hGEorS0cvbiRuS%2BEUn6Z6TMZzbIvV18JhkPQDqswoxB%2BzgHvX9XeKxAmLlxpPeJNZC3lH2RkDB0OlVG1EhR4fyhjaCcXFUaW4VB%2F%2BIEPNYgKb83HEp2tpE7E88TDb0LPUBjqkAejLWT%2FE%2FqAgHoDQajbJpcayoBSjOrCSQzBLaj8dkqTAWth%2FHJ8h1uI6F9JtvINYZdWa1RiLwOXCmwOuYMM8emw3ubDrVN2GZkFc9ufj8%2BuAeCsaF10MBQj%2BAfAh8cvOnu16HVji4ARP9wTpfZk7JZVwHkDwEId5cEa3CLlAE3doekfGqN8da58nqn3sq04e%2Fk5ly8QC5EiSHHgdC%2FM%2BiGuJHWBH&X-Amz-Signature=80f6db6f620f755b3ecd30069a99b0612e65f2d39dc45a7abc6ce5080451e7dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

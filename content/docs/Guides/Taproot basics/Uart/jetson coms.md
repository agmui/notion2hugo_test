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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYIUF2WO%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYRDcCA%2FiwVWJxcy6N9eRsxVrkGKnaIPQ2QDjgiaNB8AIgdJTARHL80Hfc5ONwtREgtTMPqH32DflOo4jWKpOH2K0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMUVBSm3mq4hUlJtiCrcA4m8h52PVCmbwyXrpaehXhm2APMb84otWKhr4e5GW2BL93lomrae8CE64MxUh0QJe2De8YOuChA8rsrA4u6wxhaQeyfwIaPEXgN1n8YAvfbH92TUO94OQRxhBBXfmJ%2F%2FouN4hreCM8usx6An5DY04bOU6TOWTekt83ahveno2FXLqrIShd0l4fNQz3zGp5EDi4%2F1XmHLnsoF9TYUCbS75mT49hXCjCXjDeVWOgo1uStrRPWUdXyhA9%2BLOY3Xop53DGYZHctw1VvMGnNIhA%2BEkmORT%2BKYbTugb2KXr2L6QQA81KnQwYMUPZQzlo3RFOdIxBpHe8g1Bidm52rDUPpM4TLRsWemeONNdw38w4SFlSNyye61gR7V0mQroF0OlT0ff67PEmqNe%2BCEtv2gAEFWwr1j1YNXByzLzrL4JmTeJNQXNUQ07QS4NzQY6XcDXBlcRCrbMD%2FhyjYxO5BazsVlBh3y8bHfGt%2FjyqjO%2BbgX23t0aEOyZptGf3a9BlDRbYH%2FP5VDu9oqddMEcOHIN83LURpVscKdL8VrTTcDqsEfzcfL0oiFeJQD%2Fxqc33dO9ixRnmJq3w%2Fg9R0ks5m1L2s9%2Fra6NDF8jiTboZtJo0DnEBAvWyBWEGt5N4K0agR8MLH309AGOqUBRcrTpIjDM2cDqWxnsgfrIbJ0rI2%2FgsY5nYGYynJDevn9aCDV8DzAg4CzWh7X4s9Er5FV503B%2BCFMHasIghH9mbLmlg1pEplfG8e2mRGSJYlj0hnppc658DyMlXrAiIKNsYRcxk3z2S%2FyVsxg4%2FZu2Rb3L5FsxE%2BJaIbML0VdfvOKCYN7cyHQswp4j0lR1jXLubdmBJWz4kDLZt2nYFXNjQ8hxYRV&X-Amz-Signature=b5e0a3059284faf6a03e8101012182d3c9f803be2fefe980a1f1753e9d63b523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UT4IUXC%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqH71v%2FvKJX4Z3XetLK58E2qaVnQkIcELfHOQDdwh3gAIhANaDak%2F%2FYupSkWD3LcTPtGPsNY780jVh4TfIy6t1K27FKv8DCHMQABoMNjM3NDIzMTgzODA1IgxfE11GbfZMBqi01pcq3AMjzUKLtFlkb%2F0Ipp7ubVWXpTuvXUSJhVjauPD5ak2RTZbagUtOEYvVHeQsABkLojuPFhvBrEl8f1dEkmjszFSrVfRrYuOrkIkWof7fotM0eeZHK3%2FWjb7aQW2V1Sj76YAuiNRQnLDgGJfAWpkrdcgwgcx57%2FPaCaMVa9Pf7J2XbPrZySeB1GYPtn3N3%2BE0VEiFnA1waK%2FP%2BZ03U6ewDE5n11RctMHIWDQcxHKhSq1pj1tycTuN085thNBzmkhV8urUa32UE24qLXgKT%2F7cXaMuVudKtSUMp8JcqHnYw4OgG%2FEdZGEyQlSPMB0oJsUm3xnluTdOyKNO4Io5kYY8NdCciZmwWewzpOTqBY3J6oxfugwGD81ym93FFsXqVSUHoWTpi%2FFk7yy%2Ft4pDVIWM2Dhl7LoC4X%2FCTG8qFYd9SUCSYEmVXtl4uOISPXuic8%2FO021Q0oCd6Qck9LuDaeOCboLuCYjDHlHGp353hGOYowmsl2Sx0NUpDPe3Tcxke2Dh%2BQFtEVn6l%2BNxtx5yNoa2dFlAgAnqUnR1cMMjWuoq8mhcg32OWj%2BtXJ%2B20dW%2Fv6hhztWWegj8r2dxMCw99nN3l%2Fsw0OTJ7WyJnwwkRNsyJ7J%2Bp6MTgF%2FzahVeZzjTAzD9%2BNPQBjqkAaru0HkmKtI5RskirR9F4AdsXus3s27XCtm64%2F9XN39Ht9%2FLWky3rA%2BzYTNVmBsefwXSAODJ8tL5NfISFNtHW8%2BPhcxhi%2F5Vpo45LFVVxd8xcsyHlNS%2BfrCYJfQcRusycjENYqtQIpGGotpGvmhI0nYYhxVZvTyPIBS2DIWK1r%2BJl25kvsflE%2FX728K7sIWqQDzqV%2FxIwV2lix16hIPVOLxOKTEB&X-Amz-Signature=002a3c271c8f948842f7c008d681e357f9dbdab0f9cfc8d239588215694256ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN7OQNT3%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuzche%2BPR3wiyIk9V7LKV6N%2FAAXin0QM3WAUk7ZAX7QAiEAmbfw3IX2aW2mwSuleNQgiKUyi%2BhqnKpnPT3v1ihggy4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLNZ9FVB%2B4k7pkBWzCrcA7gl3WCdSoJfbz7Z2%2FKXPEpKgoLxpshbaWSzMm6oMuRVMGOkJaCz4FlHPXd1%2F6jMpvnXczU9BKEQ4acGeAwdc0OBq1Pu2AubNP0eimjvQql302aws0hqdZFpEz7OT4ycMc697U9akyI9rhNa4YQNsef2XtrXfZCTRU2QqJT3yF7MXi7oPm0%2B%2BLWsMKQCXgPjB%2FQewMSAnx4VGZ5CjGQvQUiZBBDjqJUWtRKluDJtJYby88CugMExxBPU5NnR0m%2FN543NbVsJ%2FMjQB1nArCfaI6PtDQam5PiWrSWh9MJSMefxPx2%2FRtuc2mpfStolR3Dmj0rJ%2Bu3Cl5bEaptH23ZJsPLtY0%2FPI7%2BFFI1cdsaqc0F7YrNOY6fMWej3O%2FMdExSr8cgADrxFk8dRCFLGrvE6qs02cz1j%2BprcxvqknTrTCBRvQF8rAPZDaR0veWc7G4%2BFFeJmC3mA2oZybLk1Eo9sQdUuW4DpHyojEz242WB%2BxNIqbc0Q4bCO6lww09PHnOru8gJjFg8gnFfdD2W84torJ%2BIe%2B2qMKbyP4LvRLGQMgIVLpvd0XHIFVGmpHCQZYuybB78D%2FSoMk4WpPKxtpXFU0qye%2BazvI95qGEWbt%2BZRoUZvuwVGrXqoOAjJ7%2BLBMMn609AGOqUBArCukwjsZ5Tuf83E%2B3vPJmVGSnVAFZ3xzPZaisQedT7AFU8t9f8dn64oZa3OTVlBHgJTU52If0I%2FawNV%2BWD%2FtmvSOqlTtjBm5kKuYUM9a3F3bWOb4G3i6AVtSltmBwkK5sOwgNPWcNLVTYuar0eJZVZ4vgch5ULiRyGPvNXUA9JAgD01VI8qzcJA7oyKc5w1hsBmWh1vM8CqYoqQsSr0v1fzejsk&X-Amz-Signature=5ebdd797ac7dff953d8b5e5035f1c46749561a1dde30d7fa2cad9c2068df5369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN7OQNT3%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuzche%2BPR3wiyIk9V7LKV6N%2FAAXin0QM3WAUk7ZAX7QAiEAmbfw3IX2aW2mwSuleNQgiKUyi%2BhqnKpnPT3v1ihggy4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLNZ9FVB%2B4k7pkBWzCrcA7gl3WCdSoJfbz7Z2%2FKXPEpKgoLxpshbaWSzMm6oMuRVMGOkJaCz4FlHPXd1%2F6jMpvnXczU9BKEQ4acGeAwdc0OBq1Pu2AubNP0eimjvQql302aws0hqdZFpEz7OT4ycMc697U9akyI9rhNa4YQNsef2XtrXfZCTRU2QqJT3yF7MXi7oPm0%2B%2BLWsMKQCXgPjB%2FQewMSAnx4VGZ5CjGQvQUiZBBDjqJUWtRKluDJtJYby88CugMExxBPU5NnR0m%2FN543NbVsJ%2FMjQB1nArCfaI6PtDQam5PiWrSWh9MJSMefxPx2%2FRtuc2mpfStolR3Dmj0rJ%2Bu3Cl5bEaptH23ZJsPLtY0%2FPI7%2BFFI1cdsaqc0F7YrNOY6fMWej3O%2FMdExSr8cgADrxFk8dRCFLGrvE6qs02cz1j%2BprcxvqknTrTCBRvQF8rAPZDaR0veWc7G4%2BFFeJmC3mA2oZybLk1Eo9sQdUuW4DpHyojEz242WB%2BxNIqbc0Q4bCO6lww09PHnOru8gJjFg8gnFfdD2W84torJ%2BIe%2B2qMKbyP4LvRLGQMgIVLpvd0XHIFVGmpHCQZYuybB78D%2FSoMk4WpPKxtpXFU0qye%2BazvI95qGEWbt%2BZRoUZvuwVGrXqoOAjJ7%2BLBMMn609AGOqUBArCukwjsZ5Tuf83E%2B3vPJmVGSnVAFZ3xzPZaisQedT7AFU8t9f8dn64oZa3OTVlBHgJTU52If0I%2FawNV%2BWD%2FtmvSOqlTtjBm5kKuYUM9a3F3bWOb4G3i6AVtSltmBwkK5sOwgNPWcNLVTYuar0eJZVZ4vgch5ULiRyGPvNXUA9JAgD01VI8qzcJA7oyKc5w1hsBmWh1vM8CqYoqQsSr0v1fzejsk&X-Amz-Signature=1ff1d3d80576eddb13c1b1626a10379d8b7ae1609e213d39015e8ec401a5f7e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UT4IUXC%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqH71v%2FvKJX4Z3XetLK58E2qaVnQkIcELfHOQDdwh3gAIhANaDak%2F%2FYupSkWD3LcTPtGPsNY780jVh4TfIy6t1K27FKv8DCHMQABoMNjM3NDIzMTgzODA1IgxfE11GbfZMBqi01pcq3AMjzUKLtFlkb%2F0Ipp7ubVWXpTuvXUSJhVjauPD5ak2RTZbagUtOEYvVHeQsABkLojuPFhvBrEl8f1dEkmjszFSrVfRrYuOrkIkWof7fotM0eeZHK3%2FWjb7aQW2V1Sj76YAuiNRQnLDgGJfAWpkrdcgwgcx57%2FPaCaMVa9Pf7J2XbPrZySeB1GYPtn3N3%2BE0VEiFnA1waK%2FP%2BZ03U6ewDE5n11RctMHIWDQcxHKhSq1pj1tycTuN085thNBzmkhV8urUa32UE24qLXgKT%2F7cXaMuVudKtSUMp8JcqHnYw4OgG%2FEdZGEyQlSPMB0oJsUm3xnluTdOyKNO4Io5kYY8NdCciZmwWewzpOTqBY3J6oxfugwGD81ym93FFsXqVSUHoWTpi%2FFk7yy%2Ft4pDVIWM2Dhl7LoC4X%2FCTG8qFYd9SUCSYEmVXtl4uOISPXuic8%2FO021Q0oCd6Qck9LuDaeOCboLuCYjDHlHGp353hGOYowmsl2Sx0NUpDPe3Tcxke2Dh%2BQFtEVn6l%2BNxtx5yNoa2dFlAgAnqUnR1cMMjWuoq8mhcg32OWj%2BtXJ%2B20dW%2Fv6hhztWWegj8r2dxMCw99nN3l%2Fsw0OTJ7WyJnwwkRNsyJ7J%2Bp6MTgF%2FzahVeZzjTAzD9%2BNPQBjqkAaru0HkmKtI5RskirR9F4AdsXus3s27XCtm64%2F9XN39Ht9%2FLWky3rA%2BzYTNVmBsefwXSAODJ8tL5NfISFNtHW8%2BPhcxhi%2F5Vpo45LFVVxd8xcsyHlNS%2BfrCYJfQcRusycjENYqtQIpGGotpGvmhI0nYYhxVZvTyPIBS2DIWK1r%2BJl25kvsflE%2FX728K7sIWqQDzqV%2FxIwV2lix16hIPVOLxOKTEB&X-Amz-Signature=a94f338c414ded58c298f1befc195e038abd17d4c5d87f2bbc2e6f499db76008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UT4IUXC%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqH71v%2FvKJX4Z3XetLK58E2qaVnQkIcELfHOQDdwh3gAIhANaDak%2F%2FYupSkWD3LcTPtGPsNY780jVh4TfIy6t1K27FKv8DCHMQABoMNjM3NDIzMTgzODA1IgxfE11GbfZMBqi01pcq3AMjzUKLtFlkb%2F0Ipp7ubVWXpTuvXUSJhVjauPD5ak2RTZbagUtOEYvVHeQsABkLojuPFhvBrEl8f1dEkmjszFSrVfRrYuOrkIkWof7fotM0eeZHK3%2FWjb7aQW2V1Sj76YAuiNRQnLDgGJfAWpkrdcgwgcx57%2FPaCaMVa9Pf7J2XbPrZySeB1GYPtn3N3%2BE0VEiFnA1waK%2FP%2BZ03U6ewDE5n11RctMHIWDQcxHKhSq1pj1tycTuN085thNBzmkhV8urUa32UE24qLXgKT%2F7cXaMuVudKtSUMp8JcqHnYw4OgG%2FEdZGEyQlSPMB0oJsUm3xnluTdOyKNO4Io5kYY8NdCciZmwWewzpOTqBY3J6oxfugwGD81ym93FFsXqVSUHoWTpi%2FFk7yy%2Ft4pDVIWM2Dhl7LoC4X%2FCTG8qFYd9SUCSYEmVXtl4uOISPXuic8%2FO021Q0oCd6Qck9LuDaeOCboLuCYjDHlHGp353hGOYowmsl2Sx0NUpDPe3Tcxke2Dh%2BQFtEVn6l%2BNxtx5yNoa2dFlAgAnqUnR1cMMjWuoq8mhcg32OWj%2BtXJ%2B20dW%2Fv6hhztWWegj8r2dxMCw99nN3l%2Fsw0OTJ7WyJnwwkRNsyJ7J%2Bp6MTgF%2FzahVeZzjTAzD9%2BNPQBjqkAaru0HkmKtI5RskirR9F4AdsXus3s27XCtm64%2F9XN39Ht9%2FLWky3rA%2BzYTNVmBsefwXSAODJ8tL5NfISFNtHW8%2BPhcxhi%2F5Vpo45LFVVxd8xcsyHlNS%2BfrCYJfQcRusycjENYqtQIpGGotpGvmhI0nYYhxVZvTyPIBS2DIWK1r%2BJl25kvsflE%2FX728K7sIWqQDzqV%2FxIwV2lix16hIPVOLxOKTEB&X-Amz-Signature=e3ac4187c9b81c9ed656992596b7bd84792d8bd93805872a77e95c60ac3f0cb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2SLE4XR%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCliM9K5G%2B7gNoWMjrD5xUCdJcXM5pWZQZv6BfZ26bO9gIgDgolSATnfwhDZKomrQO9toMI%2BDA4i3w0NxiC59hRYEcq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDEMDCMcm1IKsjftR%2FyrcA0dz3h9qoJrE5uFSELSRil5c7SUpmLuY1fxjMb4Zq7IiUuKpLg07FySTAub93cVu%2FExt75VAYRNors1DaThAS42L8mE1bhkvnI5Jffuzgbruk%2BPBMHuYXLArX7GkOQMzOtASwWLR9i0bcobReuuDis5XKzajFqvKmYUC8bNF2gMy0KJd8j8lIHUV6aLxQ6kZPtayHRQPjgXR%2FiG5TLNWPpb%2BDaW5IdY96KoVru954rsa%2FL%2FxdK2NdV%2BDLpNQSy7MwkuvyjJUsrJaPw431hRF%2Bm88UcYKUDoEU9OphBWd8qtKnIH4PijD2kdMLVBSkuSj5m1v7NTE3Hk0aBFa%2B3oqs%2FdkhxwEiuZO6ap5PZZiBV72w9MsP6dejHc9gWLLRy%2FkVZJpdrzUA%2BcwGaSKOuzEY%2BxLtIru6NqEZg8LfimdkAcBktLH2NxkLVN7GL8c554kUj5zBC1YSwKiBJJ4dZIPAbjSi%2Fjhpy0kL0u7BJjvj7J%2B1SF%2F6rG2dSfYUgC7ERgfG6QjRFYDurj9wmAu5qUBFfWKNbyhcd7QFHO2rK6%2FcGuhJ8H4nTVOnjJ2c92oqIkptqyJ7nzg5%2B6NcKFSCRtxg9i2uCsTTd%2BsQUW8YY%2FA5uNi9NXMyjexH63qLluZMKn509AGOqUBgkO939peRG8cYV8dCvZQOC1WWTOTf287MTniZD7OjWTfP8w8EPchbTO9IOX3Fa6KCBuAHiuElYlo9XxJD0F8QvZ0QAzCPDUykGftkhKpQi4yHU6gN6gFEr7Kzuns9fBQUISYtIoUhl97OvGZwiJMiEZKJVrgPDwA%2B6vT2XRFyj1qTSrNwDA37HIdpnESrxjfnv5CNtdY1%2B3Uhpsg9tdQ8p2OsNwN&X-Amz-Signature=8ddf3baf17e716c5ce7085a1deacc7ee05b52f38140a8d2039a174f6ca459cc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466657HJ7BK%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNmfQK1M12zjt1RIYFWofi7asqvvZBUrif0McMVYE9XAiEAieQAttqJEwl7YTyVjDgKhctAd%2FrUIqDoHzW%2FrjVnRXEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOnSjA2rp3mMUpn8VCrcA3ynMT%2Bikw4UGELZmbwVdYz%2BVjC2xlKJ0wtq5w58uj5T5xJhdPj6qkqljExsuOnYrAFSSkglLgAt9i7V7s6EDFXWmMvk0v%2BNuJgAt9A5OeOFT95qJ%2FiO6lPQKxfxg%2FgauKZuXvdVcBHXR%2BS12Wgm1TBEz0wCPah8%2BPUcKHosVcLkKFIr5TZ%2BDn9MRMhIUKUwzeiEt8dRu6LoJPOmDyGhA%2BU6UCbaSZztqkkRyHd2OGjipU7Ys0j1BN14jXMjA%2FVoKr%2FfZtJPYEVhi8kXBMu1SZOn6sHyRZ7pwkdLpFZGK72RfanpSfO3pff89auveqtcQtqmw7N6QOCqEadO%2BbINMqtud0kPNlmdGqez7SwWFE150kfljqR3tU%2Fq6DkSRt36u0g0p8pVbRwbri3TUT2WUsyzkxm%2FC%2F5ZjFdftmhdMV3JTrOILYm80g%2FR2SFs8nvqk7FN0TW1E%2Fa7H9S39msnXHQUFGqxChp1qTXdqr2pfvmxG612PVA0EEK5gql5DmRh%2BsXvDD2tjHlfUr3wxXK7fMRjCFG9UyjYE%2Bnr7d1iexlylM0f1FNdzD6J%2Fqz0sTbcil1R00Adkuei8QhjhT%2BAN%2FJsHlfygfkzw%2FsJupzlqxOBNawm1mnYx9rVD39aML2L2cUGOqUB65K1OM%2BRg3yLa0kkAz53NZx5QuekZHwoOQR8XZQXBM1FyY6SCyw5uZOk1j0XvskQkCFlMVQZgEEW6DO0u6IdN%2BTjvm8GKYImK4sSbaeryWF9OYsx98wmmuuxh7UXqdzm6fNwhzCNlXrPOBRoOpihzLdZue0csEIuNRUg53JjNYAsRFKgfPjdnstp5rEhGpOOuyPtCPCCDWFRturbdJMryewkqHeh&X-Amz-Signature=a7372426a782aaf021fb96ecb1243cdb327d16db4168794d984932ae75394b31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4JDV6RJ%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3fPz6U7hvR%2FYs0zvsX0PpkppVzGchAI4OFEmSdG2mnwIhAKbXTz9g7%2BGWgHPkqS5%2FS4AP3ymGLIpV688P7kNiD6s8Kv8DCCIQABoMNjM3NDIzMTgzODA1Igztyf8A5ksB06l7qGcq3APsY8YjRgapd3DC5b2C%2FUHAqOs6JtuuLjC9qs50P2N7fGqjXM1EkXZMQ133jrJJ3ZaXLlhTAH7y7mrqZkF3hpgGbz5I6cvRbnY6Y2omjqb5Z%2FEKKABR6584eo6iwFCYfdBBISWUD4f%2FyrCWRqqo5zScPM%2Bs8MKFmPmA8rVfcSzMDCAGNn%2FkG8NerALmVN4zXpek7r9gedlob9aU0g99HA1iPvgTVLvE1CeD5%2By2i%2BkitL1xc9tEFL7DEhdDrdEkWZJbS%2FiMsDNsB6%2FZgHOJ0Ng0F7oMOOYGWuVP2CFFRZWVEhgP2tTx9T5Ciy2zhS398JW1LGFWNBBuIXT4a3X1y1I3CMlY8i40UgJzOiC65RA1fI2WPMr3O10jEQGlbL9oKLNWl0b85UXdvF6Ma2S2kVWjmEZ9%2BsDQ4vG3vbO%2B0k49NOS%2Bv2U664gWeWIxqZEgs5ecHi4nG7TY3aVmjAfduM511f6WWHT78O3M7iFQtAyGQatv3A%2BP0RT9G8PdNn%2FPaUer5tRwn9iA6LsjdI88PLcvTE3X5LLodwWTRFha%2BvsAwVtgwJWQHXXcFvviV00mlIlENsgpIBxVAzKEUGs4Qii86mh0WTWpnYAIuengyy84KzzPjzOYADQLO9vKJDDNidnFBjqkAYZW%2B%2FNQnCuyepWJZQ%2FHRgM72h25oT36YlGOJeCg1ejZ8qGX7SqpemOGfXmVsw3QhBJzX63RpN9Cp%2B6HauOZhlcTlR9Y7LrdQ6AK%2FRtHdyF%2FD6qRYHWSWSwUyAiQk1EJ%2F%2Fck8OWFqeyOAAFdTxS3x3xL2l65SzS7Y51RSLYeFOAN3Ul4hKE7cy2HnOv4QdaBgW%2BT6M8nlzAxyIC%2FvxOAUxtDgRKL&X-Amz-Signature=91c99bf94916d84eafd25c6edc6f78ac07d63702c9ce1ee81bff54ae114de272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSG7ZFYE%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzIfhwWV0nkczbF3EhRe5BK8VZLDJE0qdDFTvpRg%2BaRAiEA1IQOY6sUGmPuNum50UV9DDfaBkA211qT2MO6QFNODUsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDEiWHQRPRGPnVakIayrcA2a8V9C%2BrWVhIx0h4pJkJdQPJkZptOfQ7h7QpvJtI0XEaQe2JoJbSY2btHL4RQrIY3nGVmINBBPgCBEHJ86RqnI8YOcPy1K3F9i7D7Cezk2mzPAcvCS3dG2lQNcZ8AWM%2B%2B1f5Yo%2FaR0zgYsV5voefdcYpz67%2BWyrT7cMKE8SkeXuJdk%2FXm1R%2B5GCIF0NYVymKRJyxa0c4irN4dht%2B93BYvWvWyYDQjpIzvhxnhTemxiY2fpYlTJzul6WmHwBZPbWMRcmSIcRTqLKMtsGsKGDNx%2FvB%2Fghawrw3oz5QTog%2B2iDm3hVV39vHUVDeQmCiRCk%2BXIMyicfSvYSF4boSAfJsGbRjo8hgevs0VQYzsCfUtdpYR9iZPgZ19VJzsnpgPd7Ka03G8KDPtXqbIlFM%2BKlB7KxeUPNLrJvLg5Z%2BAOIglzFXc95pu5Z8o%2FPv5f1AISRQdyFhgUjey3vhJsO2GH03I1EEHhHkLwM4rLLgUEllxbLIrfizC9fCVmKkbSWV1GvOVYLQog0A1zzHammVA7UXG87AanRIFEz0HETvdjm%2FZs4NTIV%2FqJ3%2BP8BzDFdogBpcfQyTDcbrGLxz5lSOV6dgsFD64vIzNtat2Nm%2Fg%2FhqAmEaBRAMxEkUZSXze8XMM2J2cUGOqUBUiGw6Wuurt1cr4oIPS1maRMYPBzZp0%2FZbjKSTjdoIJGI1inkyOrJrBECfvsrhhuNqAkNeoL%2Brb%2B54VskFUgBjes4WELOmivH8Qs0CTwNNOofxFXNZO%2FEnG7dFioQagGPtPo873WNI4OQ4uqfhyZC%2Bttr9sUfhNsomNQeNCSP6b4M7M%2FqV4bkPrtzzCFNKbmH%2BIcfR7v2Xbo6qjBQHRJSeSItA0v6&X-Amz-Signature=c8a3da05efeeb81bd22c5c3504dbaa74ab565684d36a1cabb33c7754a8550894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSG7ZFYE%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzIfhwWV0nkczbF3EhRe5BK8VZLDJE0qdDFTvpRg%2BaRAiEA1IQOY6sUGmPuNum50UV9DDfaBkA211qT2MO6QFNODUsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDEiWHQRPRGPnVakIayrcA2a8V9C%2BrWVhIx0h4pJkJdQPJkZptOfQ7h7QpvJtI0XEaQe2JoJbSY2btHL4RQrIY3nGVmINBBPgCBEHJ86RqnI8YOcPy1K3F9i7D7Cezk2mzPAcvCS3dG2lQNcZ8AWM%2B%2B1f5Yo%2FaR0zgYsV5voefdcYpz67%2BWyrT7cMKE8SkeXuJdk%2FXm1R%2B5GCIF0NYVymKRJyxa0c4irN4dht%2B93BYvWvWyYDQjpIzvhxnhTemxiY2fpYlTJzul6WmHwBZPbWMRcmSIcRTqLKMtsGsKGDNx%2FvB%2Fghawrw3oz5QTog%2B2iDm3hVV39vHUVDeQmCiRCk%2BXIMyicfSvYSF4boSAfJsGbRjo8hgevs0VQYzsCfUtdpYR9iZPgZ19VJzsnpgPd7Ka03G8KDPtXqbIlFM%2BKlB7KxeUPNLrJvLg5Z%2BAOIglzFXc95pu5Z8o%2FPv5f1AISRQdyFhgUjey3vhJsO2GH03I1EEHhHkLwM4rLLgUEllxbLIrfizC9fCVmKkbSWV1GvOVYLQog0A1zzHammVA7UXG87AanRIFEz0HETvdjm%2FZs4NTIV%2FqJ3%2BP8BzDFdogBpcfQyTDcbrGLxz5lSOV6dgsFD64vIzNtat2Nm%2Fg%2FhqAmEaBRAMxEkUZSXze8XMM2J2cUGOqUBUiGw6Wuurt1cr4oIPS1maRMYPBzZp0%2FZbjKSTjdoIJGI1inkyOrJrBECfvsrhhuNqAkNeoL%2Brb%2B54VskFUgBjes4WELOmivH8Qs0CTwNNOofxFXNZO%2FEnG7dFioQagGPtPo873WNI4OQ4uqfhyZC%2Bttr9sUfhNsomNQeNCSP6b4M7M%2FqV4bkPrtzzCFNKbmH%2BIcfR7v2Xbo6qjBQHRJSeSItA0v6&X-Amz-Signature=2f5ea994a05443faa5299a28f8817482535fe1812350a843838e352b2f1bc0f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4JDV6RJ%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3fPz6U7hvR%2FYs0zvsX0PpkppVzGchAI4OFEmSdG2mnwIhAKbXTz9g7%2BGWgHPkqS5%2FS4AP3ymGLIpV688P7kNiD6s8Kv8DCCIQABoMNjM3NDIzMTgzODA1Igztyf8A5ksB06l7qGcq3APsY8YjRgapd3DC5b2C%2FUHAqOs6JtuuLjC9qs50P2N7fGqjXM1EkXZMQ133jrJJ3ZaXLlhTAH7y7mrqZkF3hpgGbz5I6cvRbnY6Y2omjqb5Z%2FEKKABR6584eo6iwFCYfdBBISWUD4f%2FyrCWRqqo5zScPM%2Bs8MKFmPmA8rVfcSzMDCAGNn%2FkG8NerALmVN4zXpek7r9gedlob9aU0g99HA1iPvgTVLvE1CeD5%2By2i%2BkitL1xc9tEFL7DEhdDrdEkWZJbS%2FiMsDNsB6%2FZgHOJ0Ng0F7oMOOYGWuVP2CFFRZWVEhgP2tTx9T5Ciy2zhS398JW1LGFWNBBuIXT4a3X1y1I3CMlY8i40UgJzOiC65RA1fI2WPMr3O10jEQGlbL9oKLNWl0b85UXdvF6Ma2S2kVWjmEZ9%2BsDQ4vG3vbO%2B0k49NOS%2Bv2U664gWeWIxqZEgs5ecHi4nG7TY3aVmjAfduM511f6WWHT78O3M7iFQtAyGQatv3A%2BP0RT9G8PdNn%2FPaUer5tRwn9iA6LsjdI88PLcvTE3X5LLodwWTRFha%2BvsAwVtgwJWQHXXcFvviV00mlIlENsgpIBxVAzKEUGs4Qii86mh0WTWpnYAIuengyy84KzzPjzOYADQLO9vKJDDNidnFBjqkAYZW%2B%2FNQnCuyepWJZQ%2FHRgM72h25oT36YlGOJeCg1ejZ8qGX7SqpemOGfXmVsw3QhBJzX63RpN9Cp%2B6HauOZhlcTlR9Y7LrdQ6AK%2FRtHdyF%2FD6qRYHWSWSwUyAiQk1EJ%2F%2Fck8OWFqeyOAAFdTxS3x3xL2l65SzS7Y51RSLYeFOAN3Ul4hKE7cy2HnOv4QdaBgW%2BT6M8nlzAxyIC%2FvxOAUxtDgRKL&X-Amz-Signature=c727b0b002a894879acbcd63b2cad5e962aaa5f818b5e89d9d3d05b64179995a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4JDV6RJ%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3fPz6U7hvR%2FYs0zvsX0PpkppVzGchAI4OFEmSdG2mnwIhAKbXTz9g7%2BGWgHPkqS5%2FS4AP3ymGLIpV688P7kNiD6s8Kv8DCCIQABoMNjM3NDIzMTgzODA1Igztyf8A5ksB06l7qGcq3APsY8YjRgapd3DC5b2C%2FUHAqOs6JtuuLjC9qs50P2N7fGqjXM1EkXZMQ133jrJJ3ZaXLlhTAH7y7mrqZkF3hpgGbz5I6cvRbnY6Y2omjqb5Z%2FEKKABR6584eo6iwFCYfdBBISWUD4f%2FyrCWRqqo5zScPM%2Bs8MKFmPmA8rVfcSzMDCAGNn%2FkG8NerALmVN4zXpek7r9gedlob9aU0g99HA1iPvgTVLvE1CeD5%2By2i%2BkitL1xc9tEFL7DEhdDrdEkWZJbS%2FiMsDNsB6%2FZgHOJ0Ng0F7oMOOYGWuVP2CFFRZWVEhgP2tTx9T5Ciy2zhS398JW1LGFWNBBuIXT4a3X1y1I3CMlY8i40UgJzOiC65RA1fI2WPMr3O10jEQGlbL9oKLNWl0b85UXdvF6Ma2S2kVWjmEZ9%2BsDQ4vG3vbO%2B0k49NOS%2Bv2U664gWeWIxqZEgs5ecHi4nG7TY3aVmjAfduM511f6WWHT78O3M7iFQtAyGQatv3A%2BP0RT9G8PdNn%2FPaUer5tRwn9iA6LsjdI88PLcvTE3X5LLodwWTRFha%2BvsAwVtgwJWQHXXcFvviV00mlIlENsgpIBxVAzKEUGs4Qii86mh0WTWpnYAIuengyy84KzzPjzOYADQLO9vKJDDNidnFBjqkAYZW%2B%2FNQnCuyepWJZQ%2FHRgM72h25oT36YlGOJeCg1ejZ8qGX7SqpemOGfXmVsw3QhBJzX63RpN9Cp%2B6HauOZhlcTlR9Y7LrdQ6AK%2FRtHdyF%2FD6qRYHWSWSwUyAiQk1EJ%2F%2Fck8OWFqeyOAAFdTxS3x3xL2l65SzS7Y51RSLYeFOAN3Ul4hKE7cy2HnOv4QdaBgW%2BT6M8nlzAxyIC%2FvxOAUxtDgRKL&X-Amz-Signature=851fcc532ee766a87d505d8d48122936386f3fab3cd1fb1a1722f10494af7c1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPSNYPQL%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuTa6PinKEd0TJoNg60r4PQGUuryvvPCue4NcnOHNx3wIgV5DLNBjJB7xB5BcGF5LRfr05V14RmZGTMJOrqUS4j6sq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDM4yGUZftgO8NKmGnSrcA5VNCORJqVk3%2FkWFdKYDMN6pzd0kYix2Ln5aEXmsYIEyrR7gYEvqmLJCkuxB%2FU2gPTwFdO6ibeFAr6iDakKnfS3oIxcozEztIwroecgrl6X2Qrz4Uj3dXGK%2BjVCtE4F1HovENgjgp8hW1xQUEDSBWwaBj9ERtGM3O3Htx0LOg57agNCHbGeG92e2WBBK4Na%2Bf3nPAb3gWHFGqdg0fZH2FYQ54k59VxhLY3X0AvUFsTI5M7L0Igq0o66b0dvXcf0rtomtOBfHBfkzlCRbXvSm%2BGn7vWcP3fv6TgM567Tkii6rWaIM25nxBNleJdBqlEzraLhr0%2B8BJPdR%2BfijIpVmo9i2Ny0XGB0DBC3zUu%2Bf09mOFtQ9AZa5%2BuMxLEeToMs459FKmY6FujXgZyFFQP3VExHY2QPM13PCIiyhUqdEsjabrYMHVrtwPHWQue4eTaQvQHSdLOPvE7X%2BTaT3lp%2FJAqzvnwo24aDR94Rrz8WfMF2%2FLaPvt8cHdQRi8Bu2UaKnad%2FAYZipy%2BrfCjI3%2FDc8Orfi2RJsL9Ogk03bcbviA24mZ6K3xm2oav%2BzwLv8oMmbsXShpsL1YZoZZYSMnf1ddv30UQ4DS4CvlICgjYZKQTUIHVe%2Bhy00U9%2FFcPiJMIuK2cUGOqUB%2BcdfHMf7WNXL%2FgehUoy0ZTczdYAKNPXs8MdKiQaKrELqX4c%2F76ery48xt9w9WUFjWLUw22pquobyRPAxBGSV0MAjRzWvATMY8t2%2BqPII1oQLHV2c8iMsbDURHpuMOxeYbRR8tZUJzuTreO%2B%2B5CB58y49dOoAkGILjuj%2BimMyRUrfbmgl5wOn12WSXtNdjv%2Fio0sx38n7%2FU1vDcn1WBOAdybL14VW&X-Amz-Signature=f1c561da7b43e4c347f7eb939361d4c4c5cffb5b0d970bff9672c91f533c51b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

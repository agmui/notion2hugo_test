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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P74OH3Q%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIC3deycQR2ccr%2B2bfTRWxJxaC89Vr0Kgr1egCc2i%2BETOAiB7C4VWN7SZK%2FXyEAC8Q9fnQubVPf2AatQYZOjc2oUjlSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpIB%2BMGvWQo4hf6goKtwDY1ajO%2F9s3NLlP8cBmNciKoJitNTleeBHlVB%2FYjVoSTwENtAGcI2xfsiU5uW68QnTfvFUO4HJLIvQ8UMIDq9N1zyA8CM5OlbSYkrD68ECovo8VTk8hHCCmRNP9cC6hEVxjbUZ2G3856o6kuO%2B2f6aquapAIe5%2BE9EcHbgY1HiX5oKEPQlQzI8Sa%2Fp2V03kNq3%2Bsi6sKyRXYDbnaNKKPgTnDbqEldnm8UFzdTJjsWUQogwmbDSvhOX9E%2BFRgmRSWmCzO%2FtUUmvcZEewNHrIUFJMybgXXXbjfCmLcY%2Bpbj6Qs%2B9qg0lUg6JmpWJ8yB6czXoJd%2FJYUbeDGlpKCDQr2HyrCw2OsUyeVCpRRUArmZXNWrb0yf3nr1a4fZVzBbymevYx7EKfNZSR5FEvgeTDYIzKbDEsBvgtYoEtAjNbySfc%2FNCndXCI1wEOQGuIjvJSVAFFm2ARybHHIw1Xi0vozyn47%2B39JAWkkL870de45rgc2KMeSiifu2rzqOFz6qboLiHO63NyM7qdd842YNmtnjV%2F3RVw0B6mb4J%2FLZhrjaCQo1qo8xOWXDCOHvu3JtnKwDER0XLG0ETf2zjOjWm25cuxxcccvIxiR2N2ISxI8auYmY7ZbN05oijA5uFI8Mwt4uDxgY6pgFVyWWRcXBPLJH9TAYaZBA8brEs%2FNQATtJ%2F1Pl8ec2ewmZBiX4Y7UVD2Hij3nVVBfCfItoEAvtL%2FiO979ON15msvbL%2FBKm9bJrSJUsdZI4mWdWDtYnVHfeKbDbohE4jiBEJpppzXOVo4hwCsBUsxnSfUohdVOtE9ZBS2V6Nis4ZTAiFDN64ctGicoNXnesb%2F5O6astnfBDzlszIHafc9I%2FBSyqbc9Hw&X-Amz-Signature=15d4b149a8fb3a12979bf2d46cba1680e7f144540f1667d0b52eb8dd071d1cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBOBDGTP%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQChYDPiEhvI7sPj5vpydewt5gKie1rocX0Oq4X6U6lR3wIgJRg99d0%2FKVI0fOdlD%2FfvF5MS3acqb9f6G1JXpXawj5gqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYL%2B7riLvjythYPsircA114L13s060%2BuCnKumYFgzbeoZ%2FHB8ObOC3jZQYnOavQbPWcUsoeb%2BfIXG0svl%2FB8eEnn2ngJ3he5%2F34DVbAmgOeiVEdHflHDFCHbBBcW%2BpYEgiy4YsR241T0DhYzZf2SSr44cHkoDydaK%2BIEiqDjulAZgp%2FG7Ooum%2B5KoB%2FquCVF3fH0sQE4pUSS9jiXNV7unjdm6D1hp%2BZi%2FK0i372UN5R5pnva8A0iCZpuRYTvsRUw36OVnd4DRzpJ%2BHXzDqar9clT8VzTdUTnBWxNauzRqKAN4yIapZAG10Xr8DP9vP8uaT9TIiKGkoiLpYGxQy5wl1gOrbumoPvRF7w3ZU3fLtDEOS2omGnYAAvqCvaPlFTo8PFQ2r01EMVEJ69D53RbVSq5bmlkgF7Tb492NSYFL%2BYRXTWsw2szzdgmghiNXImVZen%2BhHcUKbJ1hs5CiY0h%2Bu7r45prsLaOuin1gXlVEb%2Bp96IDZkP2p%2FEMc9Rjz7x6SMI2YviH9k9lG79U1ICSAGBrMQY5kzD7azgopxdDyjIPdJaesEX8RzaOtfebRKNyDmeILPn6yRgjvpv2IYztbUlInu%2BZcByGfNThYlo15aQJxecZ%2FhkKjb0oX%2FOi5qDNjUIDET%2BrVZoZJ57MI6Mg8YGOqUBiPyNe5T4YBnT82fIC2H15zw3WC8vd6gRmBXPJu2%2F4KFzpe2qr669rUBjhwpxoBZWN69uFYftvdq%2BFBuzlAtsBpNlA%2F1dP8VV8ySLioSydb01RTBAND1ps9vD5Vw6k3gFgt9DvIOLRwC4xAQC5OjMVYt6sM712tPveRBUYaSB2jEuCRt4eGagIpbvdnOZBsfD5Za1LSZu8zvc8o%2BLw4B3oifnSv%2BY&X-Amz-Signature=92f8a1cbfdf8fa97ee9ec8339b0e80ae027bf50d077cfe37b2b6660885669b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRONFL3I%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCxZWt8Ztc37Ec0RvnT%2Bn8XzfchOx9bw49Kk4w7fYLEUgIhAOc6sQ30Km7KYRqmKM3oq%2Fwh28Vd%2FiW3LFtc0rzYIag9KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyeinFZTDXm84GF7Qq3ANXhcDXAkKLkb5PDxwygOG%2Blu5IzbfzycXcOb1ejNmZOf%2FtqETG%2BEkh8CtqDGzHzQYglWxk3N7zTgK60DPIo9Q9QSpkJLrx3wExZ3aW8nECiYfDvB5%2BOKOYhdjCoMfAcAAC9AOOZ0B6HX6cstGv%2Bzqo7qJ2DXPgwSHh77gg4EC7uKzyOFzo7NWoVi%2FOwQ%2Bu6yILTp%2Bjsa6n9ESLQ1njiwZqyFbb6aXucdsGQBfvT5JIN4fTfO0BFoTOArO3I3YE%2FqHK2eCi4qnUjjRiu4NWvlfgaD28EEjH5NLtuAyBHX%2BbmFPSsO0eEXTc1c7zaqKFjV%2FtK09XspPP7vLOFNS%2Blv%2BMn3o2ktn2myppyU3bHvdUVPpYPSaB%2BnEIqmQ1yKW3aT%2BEbvJqRl01ozx4zfOZ7G%2BXU52hzqgfWxA%2Fvq70R%2FIQzCTKcgD7dsBzH70DJe9SPBQ3%2FBMIDR2MCNSw%2FZZHhv3u%2BJ8u%2FV1E8pTM2g59dIsLLjsz%2BP%2FJGqNiigEFwCa253yJlAfYXwbu2brDb9MR3Z2BwSREpM%2B5ODP%2B9mXYJ180QRAPXpLVGxO%2Fgzt1P4uG1rdnDX56HiC4fkm2z%2BzNtukUI18yXvREWWvyk6y9YjPlO8C%2Ftn4RBK%2BgxTwnxDD0i4PGBjqkARL1dBLmCjIZlcIptszxjf4%2BNykvf4RJbOf%2BppLVPKjJpfpXEphBPMShm13lkgwsMR%2BtKrbjYYVqJ%2FwdRlDFLN3rz%2BwupAHFrC%2B3%2FBKQIh2hUMph%2BlMW%2FUnJOQl8WUEKakIGlUrN4Mj6AmIo3GYB0sZiqPjXHRw4pB%2Bit1BIO7UJGSffa3CYTZ7mklOjoKzThgR7Dd7X7OUiSm0OIxgE9IqFOxMr&X-Amz-Signature=2d54592e674c6b3b4a0e1fbe14e4f6dfbe508be32b7bbe25ec49c8017b9f7078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRONFL3I%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCxZWt8Ztc37Ec0RvnT%2Bn8XzfchOx9bw49Kk4w7fYLEUgIhAOc6sQ30Km7KYRqmKM3oq%2Fwh28Vd%2FiW3LFtc0rzYIag9KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyeinFZTDXm84GF7Qq3ANXhcDXAkKLkb5PDxwygOG%2Blu5IzbfzycXcOb1ejNmZOf%2FtqETG%2BEkh8CtqDGzHzQYglWxk3N7zTgK60DPIo9Q9QSpkJLrx3wExZ3aW8nECiYfDvB5%2BOKOYhdjCoMfAcAAC9AOOZ0B6HX6cstGv%2Bzqo7qJ2DXPgwSHh77gg4EC7uKzyOFzo7NWoVi%2FOwQ%2Bu6yILTp%2Bjsa6n9ESLQ1njiwZqyFbb6aXucdsGQBfvT5JIN4fTfO0BFoTOArO3I3YE%2FqHK2eCi4qnUjjRiu4NWvlfgaD28EEjH5NLtuAyBHX%2BbmFPSsO0eEXTc1c7zaqKFjV%2FtK09XspPP7vLOFNS%2Blv%2BMn3o2ktn2myppyU3bHvdUVPpYPSaB%2BnEIqmQ1yKW3aT%2BEbvJqRl01ozx4zfOZ7G%2BXU52hzqgfWxA%2Fvq70R%2FIQzCTKcgD7dsBzH70DJe9SPBQ3%2FBMIDR2MCNSw%2FZZHhv3u%2BJ8u%2FV1E8pTM2g59dIsLLjsz%2BP%2FJGqNiigEFwCa253yJlAfYXwbu2brDb9MR3Z2BwSREpM%2B5ODP%2B9mXYJ180QRAPXpLVGxO%2Fgzt1P4uG1rdnDX56HiC4fkm2z%2BzNtukUI18yXvREWWvyk6y9YjPlO8C%2Ftn4RBK%2BgxTwnxDD0i4PGBjqkARL1dBLmCjIZlcIptszxjf4%2BNykvf4RJbOf%2BppLVPKjJpfpXEphBPMShm13lkgwsMR%2BtKrbjYYVqJ%2FwdRlDFLN3rz%2BwupAHFrC%2B3%2FBKQIh2hUMph%2BlMW%2FUnJOQl8WUEKakIGlUrN4Mj6AmIo3GYB0sZiqPjXHRw4pB%2Bit1BIO7UJGSffa3CYTZ7mklOjoKzThgR7Dd7X7OUiSm0OIxgE9IqFOxMr&X-Amz-Signature=c509c1e24b169f204bd29d1699bbc392f8688dda4748a9dd672004fd7f7bdb6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBOBDGTP%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQChYDPiEhvI7sPj5vpydewt5gKie1rocX0Oq4X6U6lR3wIgJRg99d0%2FKVI0fOdlD%2FfvF5MS3acqb9f6G1JXpXawj5gqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYL%2B7riLvjythYPsircA114L13s060%2BuCnKumYFgzbeoZ%2FHB8ObOC3jZQYnOavQbPWcUsoeb%2BfIXG0svl%2FB8eEnn2ngJ3he5%2F34DVbAmgOeiVEdHflHDFCHbBBcW%2BpYEgiy4YsR241T0DhYzZf2SSr44cHkoDydaK%2BIEiqDjulAZgp%2FG7Ooum%2B5KoB%2FquCVF3fH0sQE4pUSS9jiXNV7unjdm6D1hp%2BZi%2FK0i372UN5R5pnva8A0iCZpuRYTvsRUw36OVnd4DRzpJ%2BHXzDqar9clT8VzTdUTnBWxNauzRqKAN4yIapZAG10Xr8DP9vP8uaT9TIiKGkoiLpYGxQy5wl1gOrbumoPvRF7w3ZU3fLtDEOS2omGnYAAvqCvaPlFTo8PFQ2r01EMVEJ69D53RbVSq5bmlkgF7Tb492NSYFL%2BYRXTWsw2szzdgmghiNXImVZen%2BhHcUKbJ1hs5CiY0h%2Bu7r45prsLaOuin1gXlVEb%2Bp96IDZkP2p%2FEMc9Rjz7x6SMI2YviH9k9lG79U1ICSAGBrMQY5kzD7azgopxdDyjIPdJaesEX8RzaOtfebRKNyDmeILPn6yRgjvpv2IYztbUlInu%2BZcByGfNThYlo15aQJxecZ%2FhkKjb0oX%2FOi5qDNjUIDET%2BrVZoZJ57MI6Mg8YGOqUBiPyNe5T4YBnT82fIC2H15zw3WC8vd6gRmBXPJu2%2F4KFzpe2qr669rUBjhwpxoBZWN69uFYftvdq%2BFBuzlAtsBpNlA%2F1dP8VV8ySLioSydb01RTBAND1ps9vD5Vw6k3gFgt9DvIOLRwC4xAQC5OjMVYt6sM712tPveRBUYaSB2jEuCRt4eGagIpbvdnOZBsfD5Za1LSZu8zvc8o%2BLw4B3oifnSv%2BY&X-Amz-Signature=2b6d7cb5bc80f8f1a65e22c657c89446273065696b6fe8e0edec3883973f3458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBOBDGTP%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQChYDPiEhvI7sPj5vpydewt5gKie1rocX0Oq4X6U6lR3wIgJRg99d0%2FKVI0fOdlD%2FfvF5MS3acqb9f6G1JXpXawj5gqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYL%2B7riLvjythYPsircA114L13s060%2BuCnKumYFgzbeoZ%2FHB8ObOC3jZQYnOavQbPWcUsoeb%2BfIXG0svl%2FB8eEnn2ngJ3he5%2F34DVbAmgOeiVEdHflHDFCHbBBcW%2BpYEgiy4YsR241T0DhYzZf2SSr44cHkoDydaK%2BIEiqDjulAZgp%2FG7Ooum%2B5KoB%2FquCVF3fH0sQE4pUSS9jiXNV7unjdm6D1hp%2BZi%2FK0i372UN5R5pnva8A0iCZpuRYTvsRUw36OVnd4DRzpJ%2BHXzDqar9clT8VzTdUTnBWxNauzRqKAN4yIapZAG10Xr8DP9vP8uaT9TIiKGkoiLpYGxQy5wl1gOrbumoPvRF7w3ZU3fLtDEOS2omGnYAAvqCvaPlFTo8PFQ2r01EMVEJ69D53RbVSq5bmlkgF7Tb492NSYFL%2BYRXTWsw2szzdgmghiNXImVZen%2BhHcUKbJ1hs5CiY0h%2Bu7r45prsLaOuin1gXlVEb%2Bp96IDZkP2p%2FEMc9Rjz7x6SMI2YviH9k9lG79U1ICSAGBrMQY5kzD7azgopxdDyjIPdJaesEX8RzaOtfebRKNyDmeILPn6yRgjvpv2IYztbUlInu%2BZcByGfNThYlo15aQJxecZ%2FhkKjb0oX%2FOi5qDNjUIDET%2BrVZoZJ57MI6Mg8YGOqUBiPyNe5T4YBnT82fIC2H15zw3WC8vd6gRmBXPJu2%2F4KFzpe2qr669rUBjhwpxoBZWN69uFYftvdq%2BFBuzlAtsBpNlA%2F1dP8VV8ySLioSydb01RTBAND1ps9vD5Vw6k3gFgt9DvIOLRwC4xAQC5OjMVYt6sM712tPveRBUYaSB2jEuCRt4eGagIpbvdnOZBsfD5Za1LSZu8zvc8o%2BLw4B3oifnSv%2BY&X-Amz-Signature=55cc3d13066a6dc475fda17bbf0f340b3b8ade65d596eedc63ec5fffea78dc69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMIMSEYX%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDeWHaUILQLsauQMzasnp2Yq%2BEC%2BmOoRUwht5TrZ5w9TgIhALMYcY7n%2FL1p8MYNgaw6eheA%2F01ZhMWnq7oSJukIGyOCKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvO3OA8HBXHw7uBNIq3ANpvi5EYyvrqL32PKTPf0hkgOC%2FgFcsIesY1OAoLh9mz0Nt%2BzB1LCU0ZeDeqs7dNQX8piUg2sLkWHQ3y7dGP7FjRB6IXT6h%2BoO4ZK53yKkmyHpjHp9%2BRRiGpCle2XzspAtzox5m7VYE8OwniCShwS0L5o1QN0McBK%2B0%2Fi0eW5RGlUBoZhM5CwCWMevrI9vWok2ZHwp5dpwlK5ZK9Fh54knugG8jr4Woax1jpLePkEQ2IPcNC%2Fuy%2BBdtbVGVEeiNb3gh5NOas05GmKy4QwSvV%2B%2BXPAC3wQerlVGb123ivmCmEY5jdku7N0z3MVKNYINe5QYZFe98%2FJoLLX2wTjdN%2Fq3o5IemEY2MI80qCIaNk%2BJ2jV%2FR52UWX8DrBiSxi4lzAWX6vugPRN0Zbx9A1pzZDA5dxY%2Fw7OP0m99M6uZ2ZcZq0EjDLc9KmQsA7PGvdALffYoY5CqPpxR5AW0iRl7jYcKhAEEZkvjP6U3I2gLRJPVlObrlY0vS7OSkaL2bRWcC2fYgMkAiGl7dH1jvGBYc0FhX3Zs2wJjpZPIBlfGGA6mfWy7hfaagxbYT2qHLgOjc1zSN2y8HlLeryfaciyUnMvHUL4RC7teBpOXj2P%2FNZsQzX9sjdtTHOgTtZfRRRTChjIPGBjqkAc9GpJ7rWDy3uRn9AGa0MEUz7XwdN2CPcpIzS6TWdAHZCA8oCYtVER0EDtK1HT9oERNkikMe%2BeBR4dUuy4%2FfL9YWl2u77JXNr9v7SHAsnzgLrqqMUpAFhO%2Bn4b5VN5oa7qt4qERBv0yOBKGf7UrSuZ3Zir4m23EaqOeDrJCHAsgnTMiNcPRrLGY4lWUzoHKep2OV4ED0FKKIc%2FC5FLHeGZy0W3Gz&X-Amz-Signature=a33a4b2fae8f0e1f903adab70cfb85574fcde7eed6488c94ad484928e73f7975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

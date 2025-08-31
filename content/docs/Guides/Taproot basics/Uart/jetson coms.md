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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZDPGWIE%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbiD%2FMDCRUWwMRzM5MUjO217cHq77PtMKQr0sdMoGGXAiEAvRh%2FzlEI%2FCxm5qlVcyRcgc%2BpzG9%2F9Z7KnobiekEcOR8qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiHSRSjgsqRmgygrSrcAyHIV8t8NmGon6WCuKpfda5rLcwI1b4ytKi%2FS9jbsAh2xbjRp%2FVD8QoDWD2fmrAdgw4e6BlCpFJYJi6m9EgUHDJrkSy2g7cIWbZD96tyl%2B9c3VSFr3FtIjws9h6piGdJ21O2vqzL0udbl9PyOwKR8JLlZyBTIpEIalzxVYDfOPkdEW3HqeMHGkfw1rLKCgDLZwkU5b38xCZx96T7k2%2FJmGoezq3RuIVVB3yupCLYHsqvomgsj7abN0SRNlH7c7nSgXRi9wRUPHLQRHpgLEgGQ4ZIsHzOdHajJ1GWTX5gfa9Zy%2BgwZuV6oWPksX30Qh%2FBkoe%2B684HKj6StnxePZ6HKDj%2FfqfZYPqDhAQfbHYXtmnwD0SJ12X0kSc7x5Zu%2FL1J1JLAXi%2Fql5%2Brs84D3qo2PGdMHOdyl%2BfxzLch1VFRMxX%2FXPYlMZ0LNPUtTx0rKufIWyfXquZn3EHsxb0ORX0C1x66%2BSTZCDE%2BJMkJRDbIB2bagE0qzJvPDW5JRtVotxytzIfThyAA05kPDjWIy%2BrD9%2Ft%2F%2BXtxyw5QxKVBtdj0J3MMhPbYNB%2BPZxCXRwzGvEPchdRDmrOI5Edwo3LStmHqmdRF%2BEWFG3TPPgdhaDZK%2FTWmv77AvzHLNSsQisGNMJqezsUGOqUBAUd9rW3Bi6aLeeRAjvoB26rZAzREbzUhNgmCs8H4py1ZM40gIyXn1gawgk7u6bJljwrHh9SKg1zcl%2F12IZlLCJu%2FzcWPBpIUQxkJDKFcJQxa%2BmhZ0BLllSnrCptMg%2BcJXOV0TBM%2F0txHibJ%2BkDRV1BuYNfoS9UmObB2EUZu1JPOMf9bpBAb6%2BXTS75iHtKcRV%2FHubBtTkO7cM3S2gKFIeBqB53Oa&X-Amz-Signature=f45109f51faad67244dba9e28c101e440529ccf24e0c4ffbad0dc643d1558149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AJUS7ZU%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FLuOJGarEv8wyK4BMBUqcXaR709YqkKd1Uu8KV%2FaWQAiBhiv3b6toXeUUt4R%2FSYJRrqcqKeqX%2BojO2QM25EmMbiyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0pTsHfQG9ttuGMarKtwDQzjW3G2VbbPHo5bJaSlw%2BWZ65%2BunRb9rqYfXHg7XTMTnYFNuPBxyLCaIR1A4U1N9CNPSADLkiDArYBokTpWgvsOfMOCFYQ8wtegWWQCndgb948i5EDha9dtGTOwZy8m0WmI9GEajT1sEQOiGeN4puQnYKoXn498YqmSFLLhYqL7Xx5vou8yrYtylhS6sbG1uftFyoJUj%2FmZ%2B2zqYnTYr7o%2Bc9KHKSNbhJhHou20qj53Mei7AL3%2BCyIiDRIMN5XRxI4v25h4c3M00upB35YbE1z6hq%2BFfGnLdhICA%2FUti90Gc2SsMNDmwlZB46g1JonhmXdDL9kHsNvMtadv1P3kH6Mwl9I83UqaPkz1L65nhIaPztVMpHDvtywm1cXuC1tyHPmM4Sl4ryM78PcLUPqlyB734gY2Sk1kNpRUa5unnspELv%2FC8rpvrODyW7jqHRDJy3WmOR8NXsLLrWnQgSlIdHasuNVOLpf7%2Fb9BN2qvaJ4IcyeW548UWEUQ%2Fgu%2FFjRLTqGCr3hSA%2BWPX6%2Beupw510XKgKnO0MKrcJcY1iuoCBZBHZZjzgu%2BqNQZUuTzWL6HeNw3QjIrHfyHujzrLYcIoLYeBD2xgTBtPjDdFn0DAH%2BpERbLmEHNvMPXJHXcwo57OxQY6pgHU8fPt1lS3HApw5DGCuFXS2gHsDt72tMs5%2FY%2FRdqm55%2FAilACPQV4iwqwsWSmqznWBzM2fPpnsTP%2BJal%2BdKn0Gfn2uBRhHHw3N%2FgER3X1e5zZnowfhNzCgwD%2FvBAFFjm%2BQ6VsKnsajfMTeBbJQOF72rHKoS%2Fdx45SqyzCN5EGc7oGTdEto0ThHrhxRy9g%2BNDsupn6fixbcryPkeCsznH1sZAcXBV4T&X-Amz-Signature=7958ed1ea16f3e9d0ccb80e6cd68f8cdf579339ca80e71ebd7905c4ebdfc1079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5YJXAE3%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1DkU8RFcQG3gAT6PDGhWku0yrQlNW6qeuQhl4wcYq3AiEA4wQBlvWEUd%2BF4Wd6XWsAAVFYiBycM6imVl2EsK66%2FjQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTjwnPq9rn5cQu09yrcAy2H5WqnBX0dgvGhdtnpHVk8r82HaTwtqmQC7NUnzplq99RqBMLvPSArQOyVtHFFT%2Bf9%2BdypkJsi5e%2BYGoNLraDQAjHuimrkO7ycdSt5T%2FdafTL3TEQRJknAdN0T%2FeInPL6T2Rjmv8MIykMBB55n3ENn00hilQxIIrlb8zzRGAmO%2F8DLuOPXSYqVlV9FBPGyM91bzms20Sy0oTPi7AEKUkLg1KmRp%2BoOROs7ulo8JvsvTfhPDyckMSVu7BXIvMfA6T0qOrZfmDEIPAI5DAoRPUnH9Sb3E8fbu74M3NMviqfA3t4G00Tj0N73Abog0eba5%2FDc6OTa189MzmoU%2FV77tp8OzlfFOrIxxWsCCLBH81G33FHZnEHBe4oBQ4rg2DlQwdTllxMt2%2BBqDA3rHPNPcN5MVHLtzO2aUe0kMLU1v1qGIURPEwA2cGjjhstrFBwObwzlfZER%2FRYYN69Q1d%2FOFMBCYPnmTUXR%2FfLt1r3zrg9ngQmNsYMH5%2F%2FdVMBxW8lyx501K0RpESqHtVPyrfBAhWIk3XKOCq39RBna4VPZkjXUlSrQ%2FXMXIM60MBbbW1yx1kSqBtdLhdC6P17%2FlGqKMH%2Fbsf2c2Kp17tpg8zmZrVSB%2Bn0ZoO%2BYCN39d25lMJ%2BfzsUGOqUBI3P8C8p6d0%2FVlVyIUcLXJ634J%2BUHunguCS%2F8YuWLjt9jAA%2B2E0caVg7slD%2FRZxFz6BAuFK8bdkNSznPgdJc9pZPAW1JZJjRmjGG6rZgzyGOCsr4iDmK98z7vp5h8JLuf4Z%2BX8O%2FgUF0E5OpVadgUwFISs1JJIxzdqliBoAqijbmLpHkhcqxg6X%2By9v0Mas2szJ1gvHJEjtjZDdobilVRJ%2FD5lVpJ&X-Amz-Signature=08e14fce30c2abd51bfc423b3d302515aebecafb6a59148d80d79b3b1794f9df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5YJXAE3%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1DkU8RFcQG3gAT6PDGhWku0yrQlNW6qeuQhl4wcYq3AiEA4wQBlvWEUd%2BF4Wd6XWsAAVFYiBycM6imVl2EsK66%2FjQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTjwnPq9rn5cQu09yrcAy2H5WqnBX0dgvGhdtnpHVk8r82HaTwtqmQC7NUnzplq99RqBMLvPSArQOyVtHFFT%2Bf9%2BdypkJsi5e%2BYGoNLraDQAjHuimrkO7ycdSt5T%2FdafTL3TEQRJknAdN0T%2FeInPL6T2Rjmv8MIykMBB55n3ENn00hilQxIIrlb8zzRGAmO%2F8DLuOPXSYqVlV9FBPGyM91bzms20Sy0oTPi7AEKUkLg1KmRp%2BoOROs7ulo8JvsvTfhPDyckMSVu7BXIvMfA6T0qOrZfmDEIPAI5DAoRPUnH9Sb3E8fbu74M3NMviqfA3t4G00Tj0N73Abog0eba5%2FDc6OTa189MzmoU%2FV77tp8OzlfFOrIxxWsCCLBH81G33FHZnEHBe4oBQ4rg2DlQwdTllxMt2%2BBqDA3rHPNPcN5MVHLtzO2aUe0kMLU1v1qGIURPEwA2cGjjhstrFBwObwzlfZER%2FRYYN69Q1d%2FOFMBCYPnmTUXR%2FfLt1r3zrg9ngQmNsYMH5%2F%2FdVMBxW8lyx501K0RpESqHtVPyrfBAhWIk3XKOCq39RBna4VPZkjXUlSrQ%2FXMXIM60MBbbW1yx1kSqBtdLhdC6P17%2FlGqKMH%2Fbsf2c2Kp17tpg8zmZrVSB%2Bn0ZoO%2BYCN39d25lMJ%2BfzsUGOqUBI3P8C8p6d0%2FVlVyIUcLXJ634J%2BUHunguCS%2F8YuWLjt9jAA%2B2E0caVg7slD%2FRZxFz6BAuFK8bdkNSznPgdJc9pZPAW1JZJjRmjGG6rZgzyGOCsr4iDmK98z7vp5h8JLuf4Z%2BX8O%2FgUF0E5OpVadgUwFISs1JJIxzdqliBoAqijbmLpHkhcqxg6X%2By9v0Mas2szJ1gvHJEjtjZDdobilVRJ%2FD5lVpJ&X-Amz-Signature=879e5af745eb2cffd8a1a9db8b341ad6388f3903962d24e7d4160671bde30945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AJUS7ZU%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FLuOJGarEv8wyK4BMBUqcXaR709YqkKd1Uu8KV%2FaWQAiBhiv3b6toXeUUt4R%2FSYJRrqcqKeqX%2BojO2QM25EmMbiyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0pTsHfQG9ttuGMarKtwDQzjW3G2VbbPHo5bJaSlw%2BWZ65%2BunRb9rqYfXHg7XTMTnYFNuPBxyLCaIR1A4U1N9CNPSADLkiDArYBokTpWgvsOfMOCFYQ8wtegWWQCndgb948i5EDha9dtGTOwZy8m0WmI9GEajT1sEQOiGeN4puQnYKoXn498YqmSFLLhYqL7Xx5vou8yrYtylhS6sbG1uftFyoJUj%2FmZ%2B2zqYnTYr7o%2Bc9KHKSNbhJhHou20qj53Mei7AL3%2BCyIiDRIMN5XRxI4v25h4c3M00upB35YbE1z6hq%2BFfGnLdhICA%2FUti90Gc2SsMNDmwlZB46g1JonhmXdDL9kHsNvMtadv1P3kH6Mwl9I83UqaPkz1L65nhIaPztVMpHDvtywm1cXuC1tyHPmM4Sl4ryM78PcLUPqlyB734gY2Sk1kNpRUa5unnspELv%2FC8rpvrODyW7jqHRDJy3WmOR8NXsLLrWnQgSlIdHasuNVOLpf7%2Fb9BN2qvaJ4IcyeW548UWEUQ%2Fgu%2FFjRLTqGCr3hSA%2BWPX6%2Beupw510XKgKnO0MKrcJcY1iuoCBZBHZZjzgu%2BqNQZUuTzWL6HeNw3QjIrHfyHujzrLYcIoLYeBD2xgTBtPjDdFn0DAH%2BpERbLmEHNvMPXJHXcwo57OxQY6pgHU8fPt1lS3HApw5DGCuFXS2gHsDt72tMs5%2FY%2FRdqm55%2FAilACPQV4iwqwsWSmqznWBzM2fPpnsTP%2BJal%2BdKn0Gfn2uBRhHHw3N%2FgER3X1e5zZnowfhNzCgwD%2FvBAFFjm%2BQ6VsKnsajfMTeBbJQOF72rHKoS%2Fdx45SqyzCN5EGc7oGTdEto0ThHrhxRy9g%2BNDsupn6fixbcryPkeCsznH1sZAcXBV4T&X-Amz-Signature=fad19d6e1d80dc96775f036ef5211efbc49332ab31454f70fad6d00f0a8e7eb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AJUS7ZU%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FLuOJGarEv8wyK4BMBUqcXaR709YqkKd1Uu8KV%2FaWQAiBhiv3b6toXeUUt4R%2FSYJRrqcqKeqX%2BojO2QM25EmMbiyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0pTsHfQG9ttuGMarKtwDQzjW3G2VbbPHo5bJaSlw%2BWZ65%2BunRb9rqYfXHg7XTMTnYFNuPBxyLCaIR1A4U1N9CNPSADLkiDArYBokTpWgvsOfMOCFYQ8wtegWWQCndgb948i5EDha9dtGTOwZy8m0WmI9GEajT1sEQOiGeN4puQnYKoXn498YqmSFLLhYqL7Xx5vou8yrYtylhS6sbG1uftFyoJUj%2FmZ%2B2zqYnTYr7o%2Bc9KHKSNbhJhHou20qj53Mei7AL3%2BCyIiDRIMN5XRxI4v25h4c3M00upB35YbE1z6hq%2BFfGnLdhICA%2FUti90Gc2SsMNDmwlZB46g1JonhmXdDL9kHsNvMtadv1P3kH6Mwl9I83UqaPkz1L65nhIaPztVMpHDvtywm1cXuC1tyHPmM4Sl4ryM78PcLUPqlyB734gY2Sk1kNpRUa5unnspELv%2FC8rpvrODyW7jqHRDJy3WmOR8NXsLLrWnQgSlIdHasuNVOLpf7%2Fb9BN2qvaJ4IcyeW548UWEUQ%2Fgu%2FFjRLTqGCr3hSA%2BWPX6%2Beupw510XKgKnO0MKrcJcY1iuoCBZBHZZjzgu%2BqNQZUuTzWL6HeNw3QjIrHfyHujzrLYcIoLYeBD2xgTBtPjDdFn0DAH%2BpERbLmEHNvMPXJHXcwo57OxQY6pgHU8fPt1lS3HApw5DGCuFXS2gHsDt72tMs5%2FY%2FRdqm55%2FAilACPQV4iwqwsWSmqznWBzM2fPpnsTP%2BJal%2BdKn0Gfn2uBRhHHw3N%2FgER3X1e5zZnowfhNzCgwD%2FvBAFFjm%2BQ6VsKnsajfMTeBbJQOF72rHKoS%2Fdx45SqyzCN5EGc7oGTdEto0ThHrhxRy9g%2BNDsupn6fixbcryPkeCsznH1sZAcXBV4T&X-Amz-Signature=1251697cf90e374ae3ab76a98c09a3b84968dc61932526ec62cbbc08ef42d616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCEYUM2%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAncWNwUvrPfOtxDj8Q3hJjEqjS3bTmnfSKy%2BUcRRXevAiB%2F2%2FEFR2EzPUi0qove262l3iQJBeaBB0%2FmtgjG5Vd1JiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR5lOi7H4%2BBYzH1cVKtwDKa3dx1ZyD6ArxCUYjlDYwK5mXN9qHTjW6CXkdxVL6Iw38GJugnIXkNtSO%2FNS6AdDS5AHBLucRf4DQrw9aBpc9wrC4zV6Fr5Czr6mAksfdL76UqqRmCHuO8UbZXYp5xZ7zKJ3%2Fh1cpFDIBSjDKUqkUrRMUn4AIHxjxWbDv9UGhGr3q9v9ph6hkBMZodLIkqW%2FZCvIXY%2ByismGpN8F5bvmN6K%2B501UzeTB6ENvtmeg%2F6yLB7sJn0D4NRm9NKvCB2F82lt32HYipU00glibIlGOGNNxbOFRzTz3Gic9M07%2FuRrLuwtuNjJCkGL4zIJIMsBmnilBSAYqyQlcHOrWaoJK2LiVo0AyK1BDJ0XjqLucYG%2FPQZ0zhtRzk4qX%2FJ33LMfRdBGhCF6dGUAXEBz2LGFAka7LJBGVk0TC1k4fq5MR%2BAPwrilAwXHckWek0IYQDr1Vjq6fo5UoF0s1ihDk1R5aIR%2FtIYCEykGvUyomfX3iQWmNgtxDV9AgYZQmfsqdnQL742ZBF3VLBkVN%2B27%2FD%2BVw8fBhuMf5H0LSFb0XNbf8e2maDbJ3hjQ%2Bg8YEtF8qpTS5%2FdwKhd%2F%2BUxzuyUQiOOIq%2BfbcoTEYwXQKQUoCKm%2Fb2tWdQDcaIGBKC09TBIcw357OxQY6pgGMHOBfr5PtzPi1lqEJIMuYHOuqtVfswBgCmoOHcf7%2BqeT9sB5sQtUeq3zHXbqVbO8kEHcA3NVHhW9xmBHYPwMcMOROMo75aFpPNmndfRaZ6idzEWxWkDeW0lie4IQKZcLs6KHs7DjfIusdIdX0WTjUTND%2FL5srbrsStvzdldRAiHF4p3MouZhZjPq%2BQ0RmJYSFODtSEWucOOpyiHax2%2BYN8YVwNbpo&X-Amz-Signature=cad8b255bddcfb6f466c89a675559e2b38be9b779c19f7548a50ab1b4c9dabbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

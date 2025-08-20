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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ6IYYMW%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsSqD6ZAua2%2BBCyMAF4acesumHfO7OmWbb3DysFkEVtAiEArQ52sLqTMP1lJOHod4IONpHUdnMwYKPOiPmYLlOw5h8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA22PC37T4gz2Q0SeyrcAy8rcMTkoAmhIU7d%2BeYtaAvBKdwFJkua4hrrQjPDvYAseFS8Tu5Q%2Bo7iUv66trpeDlDMybS0UtFeKZ4ySCNR79CGBdvKZ0KIX5%2FmZXx7DTMr3wOwHXTXIeP11UywSssHIpWmIdKE78AM9BfcJk778WOgCgkra2AE9IL4Pm7hiC%2B8twpK%2B7AjY3X6%2FhQHmlrewL2fmG6sVGznyiQ3yUZw%2Bu5BRMj%2BOfIv3RWJu2eUiwx2us4PhTJB5GTK7ZDZXEF2ckxJ5u6XFjRlqW0hfc4WgFmqSl4l7OKPsf5ZyrgPZai8dRI8CFtWvT9eeNbAlaguLuiWm4Z2vZ4F8mmz5u9J91BINpfM38DOVZzVO03FmpK%2B2K%2B8Cui5oQ7hTTI1e7%2FWCGaxEg9wYGO43NaWI0PcYQ4SFUmjoJIRt3ndLr5y8yH36iOKJ7%2F4%2FE3255EcrjJ6WiRwR8U%2BM4tH91ec07hBfiG7SsB0PTSmO4HWCcr9DBVMWynhaNI%2B8FdwMCa9PkwWA9wPlxhWFH4B3%2FDrPkPOzzzWZOA7jBLYqv%2FD3XbFIp5hXWCM%2BZ9%2BVxatdm6Ji1LSrLqmL1h5nLdRZ%2BkJuwQQ6PndoQP2mSpj5kOQ1vGJ5YIHq0D0cYxU54ZmKxGAMO2mlsUGOqUBeY2hiJUG4xTpvkzXZa7Hb38LxFoneuUuk5JYdNNk%2Fv%2BhdU%2BCos2ZpsHUYu1HlCYkeLXUm4av0fy1mfDFZaNY1EkNSGtudo7Bo7btEQDZ7VvN%2F0jAPDneAG28wKGwAlv5ErAZrUHPNA%2B48x4fT6PygIAki7yDFoJeCttx3Mrf6QreYaPS3YnTaOfr2%2FXC5KFwDflOyGXB%2FlgSGwIuGjxPmgpIBMbI&X-Amz-Signature=7609a5ad1d4cf1aee3eca7c16a393ce110045bab72f50eb20d292ed5573c5c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZENJBDBQ%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDog2MWtXwwxxeG%2BQe8Tk3MKsEMN0SawYV2Y3rByk%2B40wIgXWQUfRmBFjcWHZwW8jPWhBBsKsuyIzTMCCiWWsHqJskqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLK2g9fGOJR2ENcA6SrcAwKZ1VwOTQI0qmR58TVkE3xMPNZyGvfwutH0Meld%2BxI9I0lZS9ijgMukznq04Rqe3ojhJoItdaKilM9q9S8Vc9nyRRNekelcTWgrswAcSxQzk%2FJB5s1y8lSYZ2G5jhk9oKwL5GycY7dvgrvIbTQIp4YuEeLOPnADHDlGLo6ZUYIoeLglMMuDGJFr4MNIbB6hhzgetdLbeZ%2BYVsGv3CpJh7ZE8Qc7vLnvGvFpzvqK7oQmQRSXyWdZjgc2dTG20PjNerMhDEZr7%2B9USpGcpBxLAIjePpYpoooMRvAIBIa%2FKPGy%2BPAi%2F%2F1k67JQLvgXozErYAIBy6dmaMnBDhkiDB17TFphZWkQmINHRS5P4jSawmMZ3bhGm%2Bwu9qvA%2Bss2eaNCuv%2FZ%2B%2FW7YOqqCSXDTBznzJQUyIdW5mTO4puPCeI24umizEKfkw4v86GXbg5KqEywpMdfBnKvDVg7DDsGlLfxCKnN3WjgpH%2FDib6SyUNSL2mqYL0X5TkRC2GuymDFGn8Ta4L2cobTRV4CPe6gOvIaxcmbSu11sS8ps3sVjdfljm2UQsHyT9pS%2FhdPRQ0DqPl%2FPMZoOUSJqomfrVMt%2FbEJziAyN6RdfuD7x0Pdpr3E1qM5fv7XsHXO%2FAaKIc1WMPCmlsUGOqUBL9Hx5V56FfgslP5Q3LkhKrd%2F9GXJvlb7oLRWlxTxro4G%2BPZ6CNtqNpqvnypfHgoyRcorE5KxS8a0%2FKXmtRUnSyVWnKAWI%2F2PLA8jD3Rm%2Bb0dDMRZm%2FLihuveBk%2FOEnp7bYlgcZklLJE4c5TTf%2BfpGxaO8QxOw77WJLkCXh%2F2u%2BTDK5za9m3ahTPL4ryMmZQzmvG252%2FbIr3lq53h%2FY%2BNB2as%2Fz1Y&X-Amz-Signature=9e53c7ece14b525db1d16008b059d946d2208b50cba283ac1a6e15cf310a8f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCZMQSTW%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0gwq8MxuB%2BhOkrD%2BtDqFG7ogqRmnOzD7w%2FR16e5HVrgIgDeqcG0RgCZqta0K6bxAZCeuRHB7Nx5214QInbHZjeMsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFR4U9iv9voNoPl42CrcAzSX8MBlWGWVvW%2BB0IIV%2FUDiuiBj27ArmRM2irLlVB6s4mXAyLE%2BnlJ%2FHLr8jovxZaesPFOgnHsVH%2Fo%2Fwm3%2ByQ9MIPciw5jI1pLTbYhxEt%2BF69LWX1faZVG8yNhPDgU7lCbfNIls%2B96xERgqEkv1uAgEW4cgSHWbgkzjVfkCwOHg%2BIxxhuQBhFP8T4vEMHqhbQC0SRQn4OAC%2BSG8u5Sko5asxgs%2BtYuADlGbOZTXSNYzG9JO0CGYZ8BWAxqCL8VAjptMZBDvPD6c7XvJX3WSo3CzlE%2Bk%2FC8xbRNmBgrKM8trA12y8wbCs0HwL6cGrDN%2F%2FTrCUHj%2BGXRpVy6WQ0B8WId4wucOEuq5tRw8BJr3Jw9K9ilMyj7sw%2BA75d1mbvreHYyLmX0RXSxrSd6oSU2ReAb8M69MkegvBI7n8mxwAHZ8VAm6NYBPeh%2FxnMy6Qxkca8EBs7HlfwsLPWJbohSgEP2tec4hjji8M0AhcX97PB8Gj74XvK8Kf4BsNECleAcDj84AG5VfTgyB%2BkBz3bY256bK2QvC%2Btb5OAyp17lYDqCqAuTfpSeQQlnS3kwZrOSli8wTIEkauAMqTgHFII63P3Kmc0YLUwk%2Bbihaw9LEDqRBVcF%2FWNr49c%2BmEf%2FzMJynlsUGOqUBiyObnw37z8U5S0tyysJ4JJRXCZjWvfbiay9FOYzfjm03IspSc%2BnW%2BwtsGqjNpdPYCACR5Kk70N48sxwdvbtcUm%2F1KD6Lf5iI7e93x%2F0glDFTapy5qu5wLhYCMTEtiwqW8CgFzojUgZ1u%2Fo9YAtt8ylOF0N99OEgCwGE4ZkCLMGznp3YHhtGvK4KkgLLD87F7ztsxNaBpOzFBnai5zkA5eBsVHrZK&X-Amz-Signature=fa4cd67e2960f5f0c921d4def76bc3f9d8d18b68ed74892d8c3fc4d58ba02b86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCZMQSTW%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0gwq8MxuB%2BhOkrD%2BtDqFG7ogqRmnOzD7w%2FR16e5HVrgIgDeqcG0RgCZqta0K6bxAZCeuRHB7Nx5214QInbHZjeMsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFR4U9iv9voNoPl42CrcAzSX8MBlWGWVvW%2BB0IIV%2FUDiuiBj27ArmRM2irLlVB6s4mXAyLE%2BnlJ%2FHLr8jovxZaesPFOgnHsVH%2Fo%2Fwm3%2ByQ9MIPciw5jI1pLTbYhxEt%2BF69LWX1faZVG8yNhPDgU7lCbfNIls%2B96xERgqEkv1uAgEW4cgSHWbgkzjVfkCwOHg%2BIxxhuQBhFP8T4vEMHqhbQC0SRQn4OAC%2BSG8u5Sko5asxgs%2BtYuADlGbOZTXSNYzG9JO0CGYZ8BWAxqCL8VAjptMZBDvPD6c7XvJX3WSo3CzlE%2Bk%2FC8xbRNmBgrKM8trA12y8wbCs0HwL6cGrDN%2F%2FTrCUHj%2BGXRpVy6WQ0B8WId4wucOEuq5tRw8BJr3Jw9K9ilMyj7sw%2BA75d1mbvreHYyLmX0RXSxrSd6oSU2ReAb8M69MkegvBI7n8mxwAHZ8VAm6NYBPeh%2FxnMy6Qxkca8EBs7HlfwsLPWJbohSgEP2tec4hjji8M0AhcX97PB8Gj74XvK8Kf4BsNECleAcDj84AG5VfTgyB%2BkBz3bY256bK2QvC%2Btb5OAyp17lYDqCqAuTfpSeQQlnS3kwZrOSli8wTIEkauAMqTgHFII63P3Kmc0YLUwk%2Bbihaw9LEDqRBVcF%2FWNr49c%2BmEf%2FzMJynlsUGOqUBiyObnw37z8U5S0tyysJ4JJRXCZjWvfbiay9FOYzfjm03IspSc%2BnW%2BwtsGqjNpdPYCACR5Kk70N48sxwdvbtcUm%2F1KD6Lf5iI7e93x%2F0glDFTapy5qu5wLhYCMTEtiwqW8CgFzojUgZ1u%2Fo9YAtt8ylOF0N99OEgCwGE4ZkCLMGznp3YHhtGvK4KkgLLD87F7ztsxNaBpOzFBnai5zkA5eBsVHrZK&X-Amz-Signature=75c602a6fe87701ede3e26e1ef5a4553281204c1745d72a9c515be9b37041d91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZENJBDBQ%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDog2MWtXwwxxeG%2BQe8Tk3MKsEMN0SawYV2Y3rByk%2B40wIgXWQUfRmBFjcWHZwW8jPWhBBsKsuyIzTMCCiWWsHqJskqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLK2g9fGOJR2ENcA6SrcAwKZ1VwOTQI0qmR58TVkE3xMPNZyGvfwutH0Meld%2BxI9I0lZS9ijgMukznq04Rqe3ojhJoItdaKilM9q9S8Vc9nyRRNekelcTWgrswAcSxQzk%2FJB5s1y8lSYZ2G5jhk9oKwL5GycY7dvgrvIbTQIp4YuEeLOPnADHDlGLo6ZUYIoeLglMMuDGJFr4MNIbB6hhzgetdLbeZ%2BYVsGv3CpJh7ZE8Qc7vLnvGvFpzvqK7oQmQRSXyWdZjgc2dTG20PjNerMhDEZr7%2B9USpGcpBxLAIjePpYpoooMRvAIBIa%2FKPGy%2BPAi%2F%2F1k67JQLvgXozErYAIBy6dmaMnBDhkiDB17TFphZWkQmINHRS5P4jSawmMZ3bhGm%2Bwu9qvA%2Bss2eaNCuv%2FZ%2B%2FW7YOqqCSXDTBznzJQUyIdW5mTO4puPCeI24umizEKfkw4v86GXbg5KqEywpMdfBnKvDVg7DDsGlLfxCKnN3WjgpH%2FDib6SyUNSL2mqYL0X5TkRC2GuymDFGn8Ta4L2cobTRV4CPe6gOvIaxcmbSu11sS8ps3sVjdfljm2UQsHyT9pS%2FhdPRQ0DqPl%2FPMZoOUSJqomfrVMt%2FbEJziAyN6RdfuD7x0Pdpr3E1qM5fv7XsHXO%2FAaKIc1WMPCmlsUGOqUBL9Hx5V56FfgslP5Q3LkhKrd%2F9GXJvlb7oLRWlxTxro4G%2BPZ6CNtqNpqvnypfHgoyRcorE5KxS8a0%2FKXmtRUnSyVWnKAWI%2F2PLA8jD3Rm%2Bb0dDMRZm%2FLihuveBk%2FOEnp7bYlgcZklLJE4c5TTf%2BfpGxaO8QxOw77WJLkCXh%2F2u%2BTDK5za9m3ahTPL4ryMmZQzmvG252%2FbIr3lq53h%2FY%2BNB2as%2Fz1Y&X-Amz-Signature=d24b5104d5766691fbaad2a676e2c95700efd54846252a88d1d8e18d61cabcf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZENJBDBQ%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDog2MWtXwwxxeG%2BQe8Tk3MKsEMN0SawYV2Y3rByk%2B40wIgXWQUfRmBFjcWHZwW8jPWhBBsKsuyIzTMCCiWWsHqJskqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLK2g9fGOJR2ENcA6SrcAwKZ1VwOTQI0qmR58TVkE3xMPNZyGvfwutH0Meld%2BxI9I0lZS9ijgMukznq04Rqe3ojhJoItdaKilM9q9S8Vc9nyRRNekelcTWgrswAcSxQzk%2FJB5s1y8lSYZ2G5jhk9oKwL5GycY7dvgrvIbTQIp4YuEeLOPnADHDlGLo6ZUYIoeLglMMuDGJFr4MNIbB6hhzgetdLbeZ%2BYVsGv3CpJh7ZE8Qc7vLnvGvFpzvqK7oQmQRSXyWdZjgc2dTG20PjNerMhDEZr7%2B9USpGcpBxLAIjePpYpoooMRvAIBIa%2FKPGy%2BPAi%2F%2F1k67JQLvgXozErYAIBy6dmaMnBDhkiDB17TFphZWkQmINHRS5P4jSawmMZ3bhGm%2Bwu9qvA%2Bss2eaNCuv%2FZ%2B%2FW7YOqqCSXDTBznzJQUyIdW5mTO4puPCeI24umizEKfkw4v86GXbg5KqEywpMdfBnKvDVg7DDsGlLfxCKnN3WjgpH%2FDib6SyUNSL2mqYL0X5TkRC2GuymDFGn8Ta4L2cobTRV4CPe6gOvIaxcmbSu11sS8ps3sVjdfljm2UQsHyT9pS%2FhdPRQ0DqPl%2FPMZoOUSJqomfrVMt%2FbEJziAyN6RdfuD7x0Pdpr3E1qM5fv7XsHXO%2FAaKIc1WMPCmlsUGOqUBL9Hx5V56FfgslP5Q3LkhKrd%2F9GXJvlb7oLRWlxTxro4G%2BPZ6CNtqNpqvnypfHgoyRcorE5KxS8a0%2FKXmtRUnSyVWnKAWI%2F2PLA8jD3Rm%2Bb0dDMRZm%2FLihuveBk%2FOEnp7bYlgcZklLJE4c5TTf%2BfpGxaO8QxOw77WJLkCXh%2F2u%2BTDK5za9m3ahTPL4ryMmZQzmvG252%2FbIr3lq53h%2FY%2BNB2as%2Fz1Y&X-Amz-Signature=4396e272ddb1d25ef38d50570016f118ef50b42a88d879bff7aed3532ad4fda9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOOYJXHE%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1SedFYv0ArAqiPMZetATxjVxG0sdWPb8LQL8hoJ84VwIhAI4X87V9BfCtbnpfEnw9UirW2nYRMcseqcNoauM7U0X0KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfEpgnmPKMG4F2ZBkq3AO4ymhQeoWTqn%2BkjA%2Br3Y4RxLGWPTvUqoldEYWSS63BLy3Jlh3w9jEMGGqiYzEYd8W8nfwRkAdo3a4506H088%2FR3IcaS8fjSwuDVRwyh2BHgIRG3M7%2BFH652jHgJ0RwGk3BgDIk%2FkY80NuLHbAo0yWupx9FvotRJTWJThdO2zgSbLW43Thizm%2B5RhjAT1Oyv480te3Pj4hw6WlgE7CUjQPZXZOGtZI60kIPferYj03MczT0s6UkCf28Bays%2F4J8aKBOg4a28IM4CEoV2i%2F7MjLCtSY%2Fai%2BW6AydT1AdSmtSf6pgCvbvjTEvMh5194OAaaoImSy44PAlV0tMmu%2FqwCApYUwCtfAK%2F1%2FggCBsm8%2F3T0hsFLgncV%2B7tf5JgddIlZ8RieQW%2BAv3huz3nmgWRFfF9gNRVAMal7ONalEvo6ug1Rt4nhjVS%2B0sDRT5sQvI8vN0nA1psNPiL3qo7SV1ugw%2FGwRYxo%2BsfOPYkh6p2pTViM0BtIPEOEXIogmW0w0Puq%2BuDAbWcVgfO%2FBq7xH3Uq3AthDIlsju3g1XIFXdrRMz6cR9%2Bdn81kbCoWt2wcHQW0%2Fi8pFEAPnbggI6%2BbeccXNKQR0RzDuIyNQ%2BYtT0OASl9Aopap591g3JJp8N7TDrp5bFBjqkARbSUYu0GjOlX2yAnhY4CuVQSYcRl2bTXPwL2JFGwEQYM0gv5sMancNyhrmiMCdKDCqJ1rCQcQWCsVRvNuNxI2mP15TKjQORQMmjKzEobf4dbWTD3sFTDbwmFiHtb2wYdpmhQ%2FbsT2ylkS9MPKBI0XwZgTfD024S96GZo5az33NN89M%2BxotqHMi0uVxwNGcNZYxv91Ss0qok1UBBN7KvO2%2B3ZAmW&X-Amz-Signature=2bd4f4cb7a9ec7bfa6af028def483eb0b732be4684e25101edfa23cb944c505d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

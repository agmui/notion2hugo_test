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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHHM5HHO%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGd10nhU8WQ1pzQDJKUt4iV2T%2BGJTF9uUBR9E2qs1T8gIgZDqL25QFKKX3JbXVYPNkjPNqkSFLHzsZn8MqXG26eSMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvd9ntaEQpsvgfAMSrcAwjx4oOpEKmwuxIfL6Rq7jOqzhnk3t4a3o6PLewqRVmDuL8mAKXV%2FEbK4y8lJiInN1IveEaMsKNGOvFyX2pUxemo4cQRCQlXjdmF5PMVkvVQlAWiuGcxX9DJcfeORtTVlId3e2ZYDuI6%2FgH%2FGNmC8ndYHpEwsyx6%2BJy3IbomL7uCmZZKVS13ZPYVmbhtt7V8ryuiGR0fgxSFheuIn5xpjU6sVXZ6Wky%2F6kc5mpyrTn3e3dE5BW47kNSe06Y3sIcZkN0SVkulmpVmAwuaZRQEnjjfeAaHRI3hLb2vtHsldIbUAEDO7LxOzTCEyV8oArnGYIUtEdkhCaYpyWa%2FK5aunoPqgxrAV8p%2BmvLCaNqnErGxwSy5Fp5B5TWc1%2F2UD7TdkexJ%2Fe%2F1EdvAe%2FmNgoXM7nubYxBA4GRU%2FDiE9V2hA3XK7YAS9LI2thcV87oL9hg23xquWnqpu%2BpqPyUcy0I3EzICazLEjBmCLT6rsDIwDAYHldGw8szLSTBuYmhdTcdgghDWeiVAzo5FXUsT0GZoa%2BoV%2F9H6m23eaeScCazUO6lt%2FfX8ryLBFI1JwNXpY50IXZqCVj7u8zZcb%2B%2F49%2Fc6P8UNeP6rvqT2Hi3TSGwmYH6i5nkamRYD53ut644bMLGC8MsGOqUBNzomTNgxPVf5T3fw9JktwKtPfBmPyrAUM2qvx56IBFkzYXZYlpD7k9YJXCQr1PUF5nYSXidDA9TI0kvfX%2F%2BCiN%2F2sefE24ksMg8UkI%2BU99sufPNVLIcimZMZOsQNrr0JMmdz5KgKStlQ2Ve7g5mPLNjxKJHK3t9RjIgVmKOobTEBNorrerzoegMbwefECColAr9YUfDDa0dNLZ7CsFVjlCVMlXR7&X-Amz-Signature=99c1ecd6949456ef3962fa1f6d5b20c808c9e8ee4013ff1b1bba2a1eb0ecad70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCZ4W4KM%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhs6Fle0xTtUR0ACSWexGnx9C%2BFYeAg4vK59dxgwTZ7AiEAnqDRDyYVQsrSObK59xoYJ8hQQVkqpHLHCR%2Bna2dxeJwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkC2XW88F0SdpwArircAwte9TOAIoHUDAVyK07v27%2Bok3wqHoVcti%2FeigbDdVy6vuSVZ24QKoio5ymihE3AAFo7aT8I9V03rj80yB4ZU9qbaBvstQfCIWWLTTG6NBq6lNnT3uaQY%2Fa3SBZAyA%2FVHOs%2FBtI5wXjeMuBwyxVfZmjXH%2BG%2F9XEg%2Barb7GZxsl%2Fzex6mk6lvpF5p8uN%2BIo9dTuU%2F%2Fkk%2B0apgKsjPPIkbPPzwGxuR3qCQzz4knMad%2BBTbR0N4cWbqy7VfQKZ22GMvJL%2BaNAf1dPeVYA%2FJiNPGHjzmWuyHKgO%2BoXJAEQLcp1ZhF97tDslxXgShotfiY56ZTx5yKA%2FARozCwvP55eGluVTjm0jp7PYSpwPCm6s1AfzJnI7nfDvmX6LwW0d68fMu%2BCZmuVzmeMTcyzfFwlVoAR%2FYpGp1nH8TOZGfG9vmYeqwb4dh8eACW1%2B%2FBH4Vlr%2FX6%2FnF5ks4es%2Btr2agzyjddhuSoFebK%2B%2BHNa3xUawQXqb%2FJiByp1qtUITCgte9yADDJCPBiE9lq0BLpbdEPv2iL6hOBi75Bx4Awluedld9NlccFvOGUmpNS2SLlOgmBjlZGwdcNTeS2h05OmyuLNj9cX2cXsLp2ug219%2BijIsgFYIiODx3%2F7CyGcW8MXFHMIyB8MsGOqUBXlDGh8SrXdwuin9ZFAuVnMllsdcGenbrQxp%2BirvskkL5KgQCmNFV4cJtSFX2xZS%2B4mAFibGbOX%2BCOa%2F%2BURYZmcliPo3U7X3iv5cLIsawoVmT2J1SfPtb%2B4BMs5yjw68G4LHKawddlqM3CX%2FMs7dKiDYC3hJVETB9qT%2FCyvspJu2%2Fldf5FgFLiU2XvZLZ%2BK4pcURav76mesev8BEdhGljGyBiz8QM&X-Amz-Signature=ee58e64455dd1c2aedbc4cdd14a129573b3a0212faac47aea87e1f285d88033a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHAUJ6GD%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqog1yRJHQaPLI4ANHRYc%2Fd9I6RPpXpL8th6%2FaqHvYEAiEA3EYgNPmIWgE1AZOqYnr%2BiY14ApaT5ng4xSQ36oS%2FN8AqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8IiMZbh94JddXH4ircA8CQJb4pcZXOyrYRIB5NhyQ%2Bvt%2Fhp7WT6P9SbAZZRwcEa9zVswVP%2Btj2Bn108YDR49W9CVPWbygSoovjyoysxqsD1vn1jcPjpjZycPQQuuKEPDjHJh1KxLpTSlIxHlLP2Ya86muo3oHJ8SHk0C1vgsWdom371IfCREM8ooh7DSQW6efYbo3LLSINpGtpWRhye3kUgAlPX5CvjdAYPQtlLrF7PpC1WTrA0wBz%2F5STWlojQUZPMb5Rxl6Di%2B%2FG6jjRdEa3kVeSAFj2l29ZPQAJm6o9jL7LC8WoSCi71vWbUSGJUaVWFz79Vh3dVsExeTYnq4PNCQRGkV42to5zzVcdtuS1c%2B5S7ETIAirqA9WFMatwnG1fdh%2BIRd%2FNSod%2FEwVNAfOy6Qv9Zr2L2q9xLknc8feTmguZ378iflxumTX1DyTzjcbGDLI5vYARAbewW%2ByDwn7pbJX4dIK50amg%2BI9b%2FsGi62B%2FBB9k2PQsLs8BrecCJwe3ZStvTHCGBS5Y6nhwzjC2CpzCc7AtCp5GjVCRMpVtIWUklf1aLCaohRW4Ko44VNemtxkdooecYZO75uGn%2FsLiSmKJMTquf0NKu%2FUgi8kPP0e0bNbFnpOqNPlV3nmM2Dxw%2Bd6RfJIUE6jxMJ6B8MsGOqUBlFx5cZqy%2BZEVtSqEojjXifMLCeFc90txUTYKYoLJvO%2BbRNqxgLBr5zs7%2FfImHEKj0Hy3pRoRUEMBdy5bEw%2Fazd4RzVfCg85775zeA0Dkd7JA9s%2FzQD5tqq8qNCfuUjyfTZ471AFp1ublktBxJO5qLZRZBgRQLpzvMCZI6f7hc4UH6ND2QPxNKutBfbI%2FDNVkYo2AoVzgtejHMycIY5NIn5r%2BonLX&X-Amz-Signature=94cab697499843f41b03a8ebb78294d823be70b6ec8248faf303f860b8190f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHAUJ6GD%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqog1yRJHQaPLI4ANHRYc%2Fd9I6RPpXpL8th6%2FaqHvYEAiEA3EYgNPmIWgE1AZOqYnr%2BiY14ApaT5ng4xSQ36oS%2FN8AqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8IiMZbh94JddXH4ircA8CQJb4pcZXOyrYRIB5NhyQ%2Bvt%2Fhp7WT6P9SbAZZRwcEa9zVswVP%2Btj2Bn108YDR49W9CVPWbygSoovjyoysxqsD1vn1jcPjpjZycPQQuuKEPDjHJh1KxLpTSlIxHlLP2Ya86muo3oHJ8SHk0C1vgsWdom371IfCREM8ooh7DSQW6efYbo3LLSINpGtpWRhye3kUgAlPX5CvjdAYPQtlLrF7PpC1WTrA0wBz%2F5STWlojQUZPMb5Rxl6Di%2B%2FG6jjRdEa3kVeSAFj2l29ZPQAJm6o9jL7LC8WoSCi71vWbUSGJUaVWFz79Vh3dVsExeTYnq4PNCQRGkV42to5zzVcdtuS1c%2B5S7ETIAirqA9WFMatwnG1fdh%2BIRd%2FNSod%2FEwVNAfOy6Qv9Zr2L2q9xLknc8feTmguZ378iflxumTX1DyTzjcbGDLI5vYARAbewW%2ByDwn7pbJX4dIK50amg%2BI9b%2FsGi62B%2FBB9k2PQsLs8BrecCJwe3ZStvTHCGBS5Y6nhwzjC2CpzCc7AtCp5GjVCRMpVtIWUklf1aLCaohRW4Ko44VNemtxkdooecYZO75uGn%2FsLiSmKJMTquf0NKu%2FUgi8kPP0e0bNbFnpOqNPlV3nmM2Dxw%2Bd6RfJIUE6jxMJ6B8MsGOqUBlFx5cZqy%2BZEVtSqEojjXifMLCeFc90txUTYKYoLJvO%2BbRNqxgLBr5zs7%2FfImHEKj0Hy3pRoRUEMBdy5bEw%2Fazd4RzVfCg85775zeA0Dkd7JA9s%2FzQD5tqq8qNCfuUjyfTZ471AFp1ublktBxJO5qLZRZBgRQLpzvMCZI6f7hc4UH6ND2QPxNKutBfbI%2FDNVkYo2AoVzgtejHMycIY5NIn5r%2BonLX&X-Amz-Signature=496de282b381b4b49006b19238c7005a0ca4c109f8b88376c234b6f9a1bf9ead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCZ4W4KM%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhs6Fle0xTtUR0ACSWexGnx9C%2BFYeAg4vK59dxgwTZ7AiEAnqDRDyYVQsrSObK59xoYJ8hQQVkqpHLHCR%2Bna2dxeJwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkC2XW88F0SdpwArircAwte9TOAIoHUDAVyK07v27%2Bok3wqHoVcti%2FeigbDdVy6vuSVZ24QKoio5ymihE3AAFo7aT8I9V03rj80yB4ZU9qbaBvstQfCIWWLTTG6NBq6lNnT3uaQY%2Fa3SBZAyA%2FVHOs%2FBtI5wXjeMuBwyxVfZmjXH%2BG%2F9XEg%2Barb7GZxsl%2Fzex6mk6lvpF5p8uN%2BIo9dTuU%2F%2Fkk%2B0apgKsjPPIkbPPzwGxuR3qCQzz4knMad%2BBTbR0N4cWbqy7VfQKZ22GMvJL%2BaNAf1dPeVYA%2FJiNPGHjzmWuyHKgO%2BoXJAEQLcp1ZhF97tDslxXgShotfiY56ZTx5yKA%2FARozCwvP55eGluVTjm0jp7PYSpwPCm6s1AfzJnI7nfDvmX6LwW0d68fMu%2BCZmuVzmeMTcyzfFwlVoAR%2FYpGp1nH8TOZGfG9vmYeqwb4dh8eACW1%2B%2FBH4Vlr%2FX6%2FnF5ks4es%2Btr2agzyjddhuSoFebK%2B%2BHNa3xUawQXqb%2FJiByp1qtUITCgte9yADDJCPBiE9lq0BLpbdEPv2iL6hOBi75Bx4Awluedld9NlccFvOGUmpNS2SLlOgmBjlZGwdcNTeS2h05OmyuLNj9cX2cXsLp2ug219%2BijIsgFYIiODx3%2F7CyGcW8MXFHMIyB8MsGOqUBXlDGh8SrXdwuin9ZFAuVnMllsdcGenbrQxp%2BirvskkL5KgQCmNFV4cJtSFX2xZS%2B4mAFibGbOX%2BCOa%2F%2BURYZmcliPo3U7X3iv5cLIsawoVmT2J1SfPtb%2B4BMs5yjw68G4LHKawddlqM3CX%2FMs7dKiDYC3hJVETB9qT%2FCyvspJu2%2Fldf5FgFLiU2XvZLZ%2BK4pcURav76mesev8BEdhGljGyBiz8QM&X-Amz-Signature=e4645efd2c34991daf5aa0cfecd83a96dc05dfe1a3ab4768c7b61cb3707c8114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCZ4W4KM%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhs6Fle0xTtUR0ACSWexGnx9C%2BFYeAg4vK59dxgwTZ7AiEAnqDRDyYVQsrSObK59xoYJ8hQQVkqpHLHCR%2Bna2dxeJwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkC2XW88F0SdpwArircAwte9TOAIoHUDAVyK07v27%2Bok3wqHoVcti%2FeigbDdVy6vuSVZ24QKoio5ymihE3AAFo7aT8I9V03rj80yB4ZU9qbaBvstQfCIWWLTTG6NBq6lNnT3uaQY%2Fa3SBZAyA%2FVHOs%2FBtI5wXjeMuBwyxVfZmjXH%2BG%2F9XEg%2Barb7GZxsl%2Fzex6mk6lvpF5p8uN%2BIo9dTuU%2F%2Fkk%2B0apgKsjPPIkbPPzwGxuR3qCQzz4knMad%2BBTbR0N4cWbqy7VfQKZ22GMvJL%2BaNAf1dPeVYA%2FJiNPGHjzmWuyHKgO%2BoXJAEQLcp1ZhF97tDslxXgShotfiY56ZTx5yKA%2FARozCwvP55eGluVTjm0jp7PYSpwPCm6s1AfzJnI7nfDvmX6LwW0d68fMu%2BCZmuVzmeMTcyzfFwlVoAR%2FYpGp1nH8TOZGfG9vmYeqwb4dh8eACW1%2B%2FBH4Vlr%2FX6%2FnF5ks4es%2Btr2agzyjddhuSoFebK%2B%2BHNa3xUawQXqb%2FJiByp1qtUITCgte9yADDJCPBiE9lq0BLpbdEPv2iL6hOBi75Bx4Awluedld9NlccFvOGUmpNS2SLlOgmBjlZGwdcNTeS2h05OmyuLNj9cX2cXsLp2ug219%2BijIsgFYIiODx3%2F7CyGcW8MXFHMIyB8MsGOqUBXlDGh8SrXdwuin9ZFAuVnMllsdcGenbrQxp%2BirvskkL5KgQCmNFV4cJtSFX2xZS%2B4mAFibGbOX%2BCOa%2F%2BURYZmcliPo3U7X3iv5cLIsawoVmT2J1SfPtb%2B4BMs5yjw68G4LHKawddlqM3CX%2FMs7dKiDYC3hJVETB9qT%2FCyvspJu2%2Fldf5FgFLiU2XvZLZ%2BK4pcURav76mesev8BEdhGljGyBiz8QM&X-Amz-Signature=b06c32a14c8f054b8b1e2edc464168c01f7c603e193f30c1609d0f8a2323ece3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5QUC63G%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa2M1zPBj6OWc0HQjZDYezjJ92DH5NDioi98MBWwSJdQIgRwrYWztvR2Nj4RNP51nyAck9am%2FhFRDajPSAfj0iMgQqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqQmWFASHwpuHZVyyrcAynVDQIwQVo9SlsRCPZidv6kP%2FlkPJsWISATCjHUn7qpUSwoAgDTcfuknlA92AAyGJEWWnZ3QDlaVKkr%2BAYAYS6wN5zysxCFFth1RJZVLwFGFEAIXMjRwgi4wnHtM2LEYJ3uAvMfjqrT87oexy6bloZX%2BnfNYpPixaiapcyvfZuwZuSHn%2BxIvyZ2TL3r45XwBVCiqmg9MKAQ%2BvU8Fjclj%2FIbkoysyGrLw6sFExvJ%2Btge25MeGV2eYIQheYtB1kwiZpNCyid1TINVyjbmijrmal3yFcXWURM%2F%2FXI3qx91uzX9D8pZzMOlZvZohoB7zBCgg6fbO6olN9QN8%2BOCsPDobkYd3AF7XgDbn4ux2G7Fa7kOxVtee4N8GXdYSaOOksR%2FJ0%2Bp5kOieGDjCPJs5ROMn1adCeEXsozfxGvPfeQaHAkkRGBLrsbh2dcPEO0znnijpoxMoiNmHpqbnh2dyilyy%2FLqHkcuP%2B3c037%2FQkxHAWOIFm92OfS3T%2Bi9T0jJiL0Ft%2FmQsKOfltb%2FtdPqhka1No5U%2Bn%2F1luVhOwiTMx%2B%2FQYCG6GiTVt3UbByjDe1HEXBB%2BfDcFgb%2Fn2XOF7kZuO7H5jVYRnfUqtnnEiFPKgIiQFeDX9cCfNGQOllMHq2PMO6B8MsGOqUBE3PXYf4qtjefTGEdJSp9LFVrL2iQO5L%2FUXprkxAXULD2UWdheSdzpcHscMMTFwHsxrI%2FC0xH0oE9sI8RvOu6b5q%2FKfkXhOuI%2BERn3gxIiI6X8zQsrKiJreUbUe8s4bfTuYU4B6aWk1c228yAaabgjYPVecj5TN9dyeUkUzCvohkY9I7lpL2VUUiwJe4%2Fo7F%2BlW10MH3aJjNyjN1CED%2FGuheIFC5b&X-Amz-Signature=4c2cbbeb6a0a161793a88fe931bd8f31eb2269eff5447108602e06b4e2e561da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

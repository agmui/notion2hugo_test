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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PLQ2KCC%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF1R8SGkrCt0j1caxt15LYkuXAKkPwiHlrAl%2Ff62vevQIgGGq12C6MKByl%2FZThPDqcP9ml9%2BlN1smZ%2BPF7TvD%2B5pwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPy4W%2FgNqWxxmzBvBircA6mHgS7VVHqlvt1CunYKVl9bO8cu4Aeb8CrdYJbS7UOzRZwhrCRqawwSUK1pv3tpk5eD7x9i4VCb4a7rZwxOZp1snXPptfaN9zhjdZF1QbOzbkJZWlUoEDaa2XyrlxeEs7DntNz5NYTkLndM3yCRth%2Fad7hlFLQo5igV91Kybdz2aWnpqGYcn7uZAxQEk0w69lcGL0CCGc4yvj%2BpZ4eOr%2Bfs7QVh%2FqS81U%2BtauIquo2q%2BXrR54FvIM2DWlwQzOf3l247UBsJdkMhlPPuxt0oskjGKpTYh9t9p7VjtJHSYD36OMlcpaWMJGXUp6jCA5eLDqD0UuiqMskSBN3X2OHumxG80rQ98iwiUQ5Fc76jUU4mjxbuYTBL5DSDgeZIB9iE6ZLjRkZsJ%2FhBv4yyms6QbvNYFlBeML2RfFNcjb%2FC1AJ%2BHoW6Lh5LIIgZySS6pSptccLuFxdkmlszN9zjyFkYsMx5PKNJquf0oDG0PP2GdV4O8VY752F2RpZ2u%2BoZAuL2r56MDyeB8W2vnYCiqlNRWanhlKi27Z8j8vL882G6iY78M27Bind5c1SxQHGpGbUffsAw63i1IvmhKtlcBlhb%2Fp777ev05YNrk%2FpHMUUM%2Fl9FfdRsGor%2BgxSmY2X1MJre09QGOqUBWbgnffTWRqDIQQqyEU3zr9W4joD%2FzXDXShSUJ1qw4BmNyRnl0b3TT4%2Fhf05z0IbuCSWmDw6296AIKfnPOt77KNaxKX6%2BLrgyFLQmDsIkSbvhwLwJrzAcFGOS6e27SDXpcGxnDrFY5zZ0yH%2BCLRABp49C1LKlI%2FiA6j5Dmf5XTr0%2B%2BwiGkIyjiDDQkOReAUeKpjsAHK6O3xfIwkDLLevjem3WPKeN&X-Amz-Signature=18fef174a4cee9ca31351de3d2a95809ca860959ecb9d3533b88868ddda09dba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WOL2VHR%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3VRmr6pSBPyN44Uyp0aLiZYzmRTkFVf45xNCNGEt2KAiEA78wvtiXDpW%2FTy5CU3ptJlweOTLFEwNM6LCq8FjimDJsqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA83Nr5svXXi7JaLircA9Bp28x6kLbCp9YR6wXhhHuOlF0k%2FjfMV6rTVS93tbZZTPHU6LtttU3nPuLLl8vh3V2k7p2PfL463tQJT5xGeAxs2WzfYnO2AX4UdLQsJwDsznBLmlz%2FQLUGzTrvHc55cZ2V6xUwPoB%2F%2FIgrjnEBzOMAMwyJtZQR1WQAxxiDgzzTjxHHYBcZsNOAvXpZlqkdR0gXyCr%2Fm5yFGafVmot4iArjA1eDJj963lJ3Q8lBfHc8NioPMg4Vr83S5CG2evWm24NraP5FY7NEmHHFZoylW%2B9yj20u8VaUirUCcXTHb5QQINYVlZ5ume59NBaUgUhCctRer4r9eNYXPEJCTfMFFXLtebxLIUevxxCYWINvvYUhFkkL5NDvgJiQ6esd5dLFAZ6UEdi6Hhe1DkSl4a%2Bdnvyrxx1HXGASVBpFHNJPTOQASD5A0WdnV6NwMAny6S5Ll3Sn1lJ1bZIM0XRtNBEtWF7hsG0cYE6h4MN17E0aX51OwBaC4htpPDRgxPUg0pyxRjBFg1RTNFoLnE9AY7thVFYQW4%2FERe%2BgP4gaE12mBY7DME%2FJkBdQbpTp3p8HTdGBUBbADzXtI3xENUeZbjHUyY1168n%2FK21FaY%2Fh%2BsOpzEUQJRzb0nmPt%2BiFcHGMMMTg09QGOqUBnAmv1HUyC5fS2QDsSVJWSf%2BoXmm7niQ6y95NGPQHv9YIbM%2Bj9UjlhTqRUprXcj7gMsI0ubMOvL4cVuT5OLB7z6YvfQ%2B614YqJ0%2FAFLOx4SjjZS42Dz8ddqbNUOYxfxn%2FPCpNkqgtIbPP4SJ8F6V13kP9cTW3TDhVMOWj%2B2e49k2fUUetFGXQlb8QX6DePoeXWm6AodkjHSleQRmHMDB%2B%2BPeeDoML&X-Amz-Signature=a2cc734bce0c5693fb8596877b0275efc3e37f823d512940fcb755e485ac933a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFSUAQ4K%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICacX0HBCQ4sn2a2k1GDDWCTfPFxqKYciPFrblPrJC%2B4AiEA1RM%2F2%2FcblW8meL8kYAhBPJDwGNSnog3WbdNGoooalhUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI66AdpZB3XilZh4VCrcA%2FlzUWTSJRBwzLS9%2FV63G2CK%2BXLuRYBf7TwctPcwrc%2FjNa5PQITH4ykza2v5kWYTp%2FCdb4kWR22EFJg3H1k%2FlZLH9z0gtDFQ33XJlvlYe1N%2FHh3j4gN1Yt4daj0emhcdx4sDQ8WUtjoaesN5bgMDyl%2Fcr1nQBEf7qd9O3GzTIWLAK2wa9sp0X0iCy%2BhuGH%2B2WvNCdr%2F6yZkSk46J%2FSNNNzW6kEqgEcpZvp1LolKFsTIKlOYUyi7sFbQk8ejX9t0PCJ621KDA2ft1u4%2FPdBlD7GCi1cKI%2FxLZLPDfqiK4PI8OyqlciJ%2BN4zF6ghsDdzb0zDIsS8CjrvBQjupqdtL3irTU07OeyWKr8%2FAQI8ocD%2Fv4jEtHK4RMBhl0e%2FEZSD6ZjyUFn5etGNqzFSYf0TfhclcM%2FSUddAxYaCYq7SmoC1j%2FkM3lIr5pM9%2FNR%2FXQI6%2B1h47%2B3FU5%2BGIKip2tYBxqDX%2BeONj0Gd%2BxWh9HCLVoe8Pd6dhIReJ6NswTMLmXynp1CE2PAzY8fwfNSQwJLPouAww9d3C3deNcChnXy4VkGpeCgsZE5mfFTavfTkM%2FFA7TWdZvtERy2iK4Yks6QzcwjKoszHkLz4BOwGc%2Fbg2LlHOWm3f%2Bldx6s6FM%2BEDhMI3d09QGOqUBj2VVZ7q1aWDazMQV6Wsu%2FC8UNTMkpEFYhwko0avnLtkG27f5vVqIKqr2B2%2BmiykT3ihTaTeb79E6P2PkVLhsg3ZOjeFx6QtL%2Bx%2BIYMVWhfdkZLrrp001jk7vYFs18j25Z1FW7O13Oagb2B%2BulI0SLgv77%2FZy1OnnMPvwoB%2F9eq%2Fmi%2B7UoRHwvXzb6EAAu1ZH6l3eBdSxLeG0%2BfHPINojEr24kbmG&X-Amz-Signature=9fa84572a5d97af0cc7da79d3e141b4ae53708bccb4f4d093c4abdfee5ae2620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFSUAQ4K%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICacX0HBCQ4sn2a2k1GDDWCTfPFxqKYciPFrblPrJC%2B4AiEA1RM%2F2%2FcblW8meL8kYAhBPJDwGNSnog3WbdNGoooalhUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI66AdpZB3XilZh4VCrcA%2FlzUWTSJRBwzLS9%2FV63G2CK%2BXLuRYBf7TwctPcwrc%2FjNa5PQITH4ykza2v5kWYTp%2FCdb4kWR22EFJg3H1k%2FlZLH9z0gtDFQ33XJlvlYe1N%2FHh3j4gN1Yt4daj0emhcdx4sDQ8WUtjoaesN5bgMDyl%2Fcr1nQBEf7qd9O3GzTIWLAK2wa9sp0X0iCy%2BhuGH%2B2WvNCdr%2F6yZkSk46J%2FSNNNzW6kEqgEcpZvp1LolKFsTIKlOYUyi7sFbQk8ejX9t0PCJ621KDA2ft1u4%2FPdBlD7GCi1cKI%2FxLZLPDfqiK4PI8OyqlciJ%2BN4zF6ghsDdzb0zDIsS8CjrvBQjupqdtL3irTU07OeyWKr8%2FAQI8ocD%2Fv4jEtHK4RMBhl0e%2FEZSD6ZjyUFn5etGNqzFSYf0TfhclcM%2FSUddAxYaCYq7SmoC1j%2FkM3lIr5pM9%2FNR%2FXQI6%2B1h47%2B3FU5%2BGIKip2tYBxqDX%2BeONj0Gd%2BxWh9HCLVoe8Pd6dhIReJ6NswTMLmXynp1CE2PAzY8fwfNSQwJLPouAww9d3C3deNcChnXy4VkGpeCgsZE5mfFTavfTkM%2FFA7TWdZvtERy2iK4Yks6QzcwjKoszHkLz4BOwGc%2Fbg2LlHOWm3f%2Bldx6s6FM%2BEDhMI3d09QGOqUBj2VVZ7q1aWDazMQV6Wsu%2FC8UNTMkpEFYhwko0avnLtkG27f5vVqIKqr2B2%2BmiykT3ihTaTeb79E6P2PkVLhsg3ZOjeFx6QtL%2Bx%2BIYMVWhfdkZLrrp001jk7vYFs18j25Z1FW7O13Oagb2B%2BulI0SLgv77%2FZy1OnnMPvwoB%2F9eq%2Fmi%2B7UoRHwvXzb6EAAu1ZH6l3eBdSxLeG0%2BfHPINojEr24kbmG&X-Amz-Signature=a90aabfbb035dcb75efb3b3053a0b53728a8fb68af410056de52a9db2ce0242a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WOL2VHR%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3VRmr6pSBPyN44Uyp0aLiZYzmRTkFVf45xNCNGEt2KAiEA78wvtiXDpW%2FTy5CU3ptJlweOTLFEwNM6LCq8FjimDJsqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA83Nr5svXXi7JaLircA9Bp28x6kLbCp9YR6wXhhHuOlF0k%2FjfMV6rTVS93tbZZTPHU6LtttU3nPuLLl8vh3V2k7p2PfL463tQJT5xGeAxs2WzfYnO2AX4UdLQsJwDsznBLmlz%2FQLUGzTrvHc55cZ2V6xUwPoB%2F%2FIgrjnEBzOMAMwyJtZQR1WQAxxiDgzzTjxHHYBcZsNOAvXpZlqkdR0gXyCr%2Fm5yFGafVmot4iArjA1eDJj963lJ3Q8lBfHc8NioPMg4Vr83S5CG2evWm24NraP5FY7NEmHHFZoylW%2B9yj20u8VaUirUCcXTHb5QQINYVlZ5ume59NBaUgUhCctRer4r9eNYXPEJCTfMFFXLtebxLIUevxxCYWINvvYUhFkkL5NDvgJiQ6esd5dLFAZ6UEdi6Hhe1DkSl4a%2Bdnvyrxx1HXGASVBpFHNJPTOQASD5A0WdnV6NwMAny6S5Ll3Sn1lJ1bZIM0XRtNBEtWF7hsG0cYE6h4MN17E0aX51OwBaC4htpPDRgxPUg0pyxRjBFg1RTNFoLnE9AY7thVFYQW4%2FERe%2BgP4gaE12mBY7DME%2FJkBdQbpTp3p8HTdGBUBbADzXtI3xENUeZbjHUyY1168n%2FK21FaY%2Fh%2BsOpzEUQJRzb0nmPt%2BiFcHGMMMTg09QGOqUBnAmv1HUyC5fS2QDsSVJWSf%2BoXmm7niQ6y95NGPQHv9YIbM%2Bj9UjlhTqRUprXcj7gMsI0ubMOvL4cVuT5OLB7z6YvfQ%2B614YqJ0%2FAFLOx4SjjZS42Dz8ddqbNUOYxfxn%2FPCpNkqgtIbPP4SJ8F6V13kP9cTW3TDhVMOWj%2B2e49k2fUUetFGXQlb8QX6DePoeXWm6AodkjHSleQRmHMDB%2B%2BPeeDoML&X-Amz-Signature=98a0146d3ae95876b0df3060d2a5dad36211d68a25b712efd6d27263900b7c7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WOL2VHR%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3VRmr6pSBPyN44Uyp0aLiZYzmRTkFVf45xNCNGEt2KAiEA78wvtiXDpW%2FTy5CU3ptJlweOTLFEwNM6LCq8FjimDJsqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA83Nr5svXXi7JaLircA9Bp28x6kLbCp9YR6wXhhHuOlF0k%2FjfMV6rTVS93tbZZTPHU6LtttU3nPuLLl8vh3V2k7p2PfL463tQJT5xGeAxs2WzfYnO2AX4UdLQsJwDsznBLmlz%2FQLUGzTrvHc55cZ2V6xUwPoB%2F%2FIgrjnEBzOMAMwyJtZQR1WQAxxiDgzzTjxHHYBcZsNOAvXpZlqkdR0gXyCr%2Fm5yFGafVmot4iArjA1eDJj963lJ3Q8lBfHc8NioPMg4Vr83S5CG2evWm24NraP5FY7NEmHHFZoylW%2B9yj20u8VaUirUCcXTHb5QQINYVlZ5ume59NBaUgUhCctRer4r9eNYXPEJCTfMFFXLtebxLIUevxxCYWINvvYUhFkkL5NDvgJiQ6esd5dLFAZ6UEdi6Hhe1DkSl4a%2Bdnvyrxx1HXGASVBpFHNJPTOQASD5A0WdnV6NwMAny6S5Ll3Sn1lJ1bZIM0XRtNBEtWF7hsG0cYE6h4MN17E0aX51OwBaC4htpPDRgxPUg0pyxRjBFg1RTNFoLnE9AY7thVFYQW4%2FERe%2BgP4gaE12mBY7DME%2FJkBdQbpTp3p8HTdGBUBbADzXtI3xENUeZbjHUyY1168n%2FK21FaY%2Fh%2BsOpzEUQJRzb0nmPt%2BiFcHGMMMTg09QGOqUBnAmv1HUyC5fS2QDsSVJWSf%2BoXmm7niQ6y95NGPQHv9YIbM%2Bj9UjlhTqRUprXcj7gMsI0ubMOvL4cVuT5OLB7z6YvfQ%2B614YqJ0%2FAFLOx4SjjZS42Dz8ddqbNUOYxfxn%2FPCpNkqgtIbPP4SJ8F6V13kP9cTW3TDhVMOWj%2B2e49k2fUUetFGXQlb8QX6DePoeXWm6AodkjHSleQRmHMDB%2B%2BPeeDoML&X-Amz-Signature=b6311552f429d04f8bb7c78b69dc9b29a7bb8d2b45fa0aa552b8331aa2611578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3DRMQF%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGr6iVqmG4Aw8poZ%2BTzKs0kJ%2BijBWlALfHquuhGb%2BoVxAiEAqB4FK6bfpKa2cWiooNbbfQPIRp%2F9KW0KyZvhpj0AKDIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGevGMrw%2BXqUHfC8CrcA28uMZijchNX5WrVoTAsAQe%2FJHH3JvLeQ6xO9NqgZwylTC3Mwtjr4RV3pbdxIh0tiafGCjlZ%2FbDG9lFm6NYBaa0dedfXy1lGjGD59J7KTksL7iUisMxaAkGQZcYIVwQTRpfWgYDOmwy4s24V9H0N48WdDw0fARXxkIl9%2FHwiQ4VrOX5RORrdfRtIFdeUUbryl4l1FX3BN%2F02cn0PQ7i1ZIfecM8qhicQCgR3EtrM%2BNPhJaHbdxDpPzenueuX8FePADo7ljCsQ%2BLZ%2BwSqYVJ2oQ5EaCxgXZGRkC%2F0n0aUmSBYwCu8CuC%2FSsnDXzFKsbbGrDGMixymwg7sZlMtZeTaC4MboJGi3f4clG%2B%2Bh6s%2BQRSlkncuHK7lwdyOTy3SJSJOw0i69j5AGHAXS2iQEvkFtTneXCqctUerChGtC%2B4qUVM96Au2OsIAdP7abRG5RJ3DIDEOYFcdf9fFs5i7EVnuBEwsWR3%2FutDRHu2%2FZevyZQu1hVVFqEchFmGLtiwij2i0P%2FRHcys8xwD2dE3q2ur04iQNul2oj7CnepP5A%2BoGq2sZnt9vlXphG%2BfCHnSzfCE14tb1s9dfuJqt6N27mxGZv%2B1jeICLubdIZNViyN87Q2bI2L6ND%2Fzx2cKWLjLDMK%2Ff09QGOqUBny8%2FHHpnxFV%2FbZ2kYajTTMC6xaSGnmMoN%2FJdhbXuuVS8rX378IRI1%2FAUE%2BTdvolNI8UrFnd7hTjtinyOtUqb0VSmFU7%2FnH0EER%2F7f69AbXfpnoRkrO8G3l9LoUwRYu9zqNs2E1MkU6TSETT0Yzoxp72xxuFtmXBweMr8kynAfocwxnP%2Bo2%2BRH2PSyH%2FARlh%2FMFUHbYU%2FeAR2bOm6avAtBWCCqgKo&X-Amz-Signature=7a0c2bda85bec89b7a73a49e397ee941d51d6b0fd8390b76f2edc2b2e71e0f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

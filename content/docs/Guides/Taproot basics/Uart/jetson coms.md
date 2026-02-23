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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDHOKB3%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD804AopVUwC%2BtZa8qesA8zCZupZVcwOpg%2Fb26H2czZNAIhAJ7dtd5NTKQLjCWrgdoAd9VhA7vccwHCZ5XMH9NU%2FPD%2BKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igye8C%2BWO%2BpVDnIHGrMq3AOPEZkTd74wXc6MlEXSbptIYkDYh4rrCIJVfjV1h2anc%2BCk3UqZPB41gkinFB0NpG6zyd7wZZ032%2BmikX3OZNj3SZxxbYcqtNBebDd82VJPE7HOACvLn1mkHsE5jWTxg0WdoQkjTgqjaHNoIVbJybIFA5jORbxMKFgnskML5TUKyQM019EPCn2CTFSX1kw2v2TsIs7yzePx3xueNOikpOOXfYfpDWZGsU4OAk9Ln%2FlzCJPJK7qN6Sw%2Bsm3bCeMRtEloMEI2tT8Ec0dI7SzLgtgvkJF17di2aDceaDTNKlDHAejtNAkI9HDcvrV1OmAlhXApmHkBbHOxqUHrGz42jw4nyaLFJZJ2tTTpIYTpYEjoOVu7iJxPt6CKTUZSEYFyGP4wCR8gfLv%2FOqXviaGYs6CC4%2FfNjPu4szHonbd5OKNg5A6VWYnZLR8VSnmRs%2BQr2pcb4nZHWecPHLMqC9TPOp%2F0zyZX%2Be2gJSWt%2Ffd%2BiC3FT2sLv%2FQNML7hr0Q97Umf1X2Fy6QX0vLou8HXmgnFa0pnlUhZsLCSTdg4i%2BsNt4CXn6ILi7piKCxLDpRGDdP826cFx61Lv%2Ftp0ZsgfxSyTcOoUQMlAQhP6%2FkTDFiOnUzcd8rnj99Hv0lKnLDv%2FjDf6%2B7MBjqkAeb4LcJzjd7mUczq8HhwfnhBevTwNqb5HFv72%2Fs3r4dxAIF9XumEu4yx7ufphqs7nMXWZ3EzMHjOLqT60o7vvq1j7tHNpWW4o6wZQbULqfxv0SdZiKXkqxCfLaDapaOiPCswo6AAaIQf4N6zip3ki4UTYF%2B9ZEO1%2BLCf0Sj0PaQ9qcSME47jOcEzBPDaARkijpeIE41Ct8EXTFuzUF5gE59EXC7j&X-Amz-Signature=ca1c151a34f3d79b71b27f77c75e3bc97b682d5eb93fdeff6cc46e934958b0c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQNN3GNY%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEYyuP1GuZnldQaZxwvLxwlIH6Gziy4vorX5Qq5NLpfTAiEAnZEHRo9GMFGqgwhd8QSTVYz%2B9u%2BwBnOoBY6IP%2B81qCkqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXvElrfQm5eyxTJ6ircA%2Bi0LV%2Fsb0ytJ%2FR9kNz3gIGlpgUzDyKPXDDSlwGMFJcgYaMvr1lR5M1yN00zEJkxgglP1Z8FoI%2BZxahXVM3m%2FaLNH5vtlsV0wwInDtAg3Yvb9ERDa54ajSELgBL0AFuS6KDXGwYGgqaerq9sX%2BpTaJ%2FTKUJA8W32ktHzQH9GRxYTSX72YZqn64L1oCm2GFenc9ASlyz%2BlFrlkGzatOVBNqhNvFTNhcGCu%2FLigj4D3GFfEm%2Fdi10KXED%2FRNh0vz3H2UPD4M4x1GFaPgUlvpfUej%2B6bNW7brRhcL5DzWiBIKFrDPPaUf46FmKQ1GLpAUK2AXJyOTsH90ArQO%2Bl1MJmQ4EbPXbEKuFPanFH4K3G1TUE6HixfLLDR4cpgBwwLJM%2BnioYP99Vp7wu9wpQwDJXKh648tcAfrPbNLXNR0QU%2BcFBLgNlukWxxlVr78N0MtskhHLmRrSmX8l3q%2BMhlxu%2BKcbW6oeHSNtjbQwX7c0Pe%2FbQ2BLaCll1tKOnET3avVxBG7dcHYumMrRtqhuTUTiIXu52%2BguOEHgu%2BFxmT7cXfbgQYLrio2fVEygIYnUpgkgqFxhFER7CDsKevZR1mC%2Fe9oxCdnhw5oKxb5Lj8IvVTDAwoblr018OGV0QGn4CMKbt7swGOqUBuPnwjyzLhwrO%2FmEUfV1QbTsBs33epRx2zWEWZkw%2BUPFqOLYLf6eTvtysiKQYz6aD%2FWYlJs7cuoBAO8NhxMRISHIQoG%2FtGIjI8NXd%2FwvhyhoeUFbSYf4Cbf7eD154leaFcc88NN7PenyfAnxKwYVW8lRpLwXY4RhUXKc5tYkA8fc3MK4YjteVYcUs%2B56VR9AEQ79YivHIJK0b00F80XRPDe1Jl33Q&X-Amz-Signature=7a450c21b3c24d593ef6cf2a406e6d9e84fa1379ba4906889d062c8e7f97eb43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OJCGBR%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCKQ%2FwGFM%2FMq9X7U14yM6Cdjbg32j5gXKJp%2BcTUL9ZxsQIhAN8Yz3IM8WDj8a4LyKtSdhFm%2BCu9ZuA2Nj5veF5Z4Ny6KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZKGqFg4rfHLBbyfYq3AO9LgD7drDEfWYwKNt%2FuLOIfywMTrepqewXrr%2FtE8jWUCldic0giqSD%2B94nDr2hm8JDtOgAdfe3lzbKAkXpN9hc4l4pLBMU1t%2Ba9x3s9qQgp1jkJwSBvRCNEzeX%2BIE2Q9XQlVaKRplVIx69LIL6j3XyJuR%2F2QvLYxJYC%2BEjhsrFXX%2BCStpmFFfQlwq2DEnyUzuau1V9Sb37ykkelP3pKDyZIapM20D%2FxkFfZWcg%2BZGOFyJkB8jkJNL%2B2wzXiWCLI5g5xdWWQPnLt3Ry51KIXEWzIQGodFbj%2F5LwB8B5l6%2BI0ZfVE0f98DKnGpJDEz9gu0kmmJb2uxyKy%2BAZhReZmQpV2TrbNMd9iEaqgY2WJNOqsYt24TXvzRSIi7XxD9hstbbpsppiWDijRKc%2BhEbXHDjGr2X2VaK7f1YgjorgM%2FKiBuu2CMwa6oG61VGi5Vd7U2koo%2BvLNrZM%2B8ZecCbGGTEqxdk%2B4GWKr2uejow1orRyDUojJsbdo85AMtxl5xLZMoMtK3nFQyKz%2FJtQWx1d8DO%2Bc9pyz%2BAAwnZ9YHc01YCWi8H2eAY5EP1mUQ8DdynAa9Yr6m8q731HSjXQObWwEmCaGbLN7Kaq0oFnolhVpwZ5BYlIObLzDVUPywth5zDn7O7MBjqkAdv5dG5HQGucIjvfxMzFkX%2F0xHpWOkl1O8rKOZzj6s4RrHMQ5MFk9BzSYhFKc0Zlc1is2eQ47vBz4ys4QFkw2iTV6vlpmlZnlzURQTCuggTK8DYABh89kH44JlzZwF65IpA1Jkpds5hx3ezh53732zzHJWeK1pb%2FuKjTlvcP3J9ffb49B9tq5mTuWxLWMFJBfGideHVAj7QcJ8Hn63IwK0hW6AFd&X-Amz-Signature=b952e21135b37e776531a65b3c5b5c3bdceeb30937ab8090f56402bef842e504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OJCGBR%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCKQ%2FwGFM%2FMq9X7U14yM6Cdjbg32j5gXKJp%2BcTUL9ZxsQIhAN8Yz3IM8WDj8a4LyKtSdhFm%2BCu9ZuA2Nj5veF5Z4Ny6KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZKGqFg4rfHLBbyfYq3AO9LgD7drDEfWYwKNt%2FuLOIfywMTrepqewXrr%2FtE8jWUCldic0giqSD%2B94nDr2hm8JDtOgAdfe3lzbKAkXpN9hc4l4pLBMU1t%2Ba9x3s9qQgp1jkJwSBvRCNEzeX%2BIE2Q9XQlVaKRplVIx69LIL6j3XyJuR%2F2QvLYxJYC%2BEjhsrFXX%2BCStpmFFfQlwq2DEnyUzuau1V9Sb37ykkelP3pKDyZIapM20D%2FxkFfZWcg%2BZGOFyJkB8jkJNL%2B2wzXiWCLI5g5xdWWQPnLt3Ry51KIXEWzIQGodFbj%2F5LwB8B5l6%2BI0ZfVE0f98DKnGpJDEz9gu0kmmJb2uxyKy%2BAZhReZmQpV2TrbNMd9iEaqgY2WJNOqsYt24TXvzRSIi7XxD9hstbbpsppiWDijRKc%2BhEbXHDjGr2X2VaK7f1YgjorgM%2FKiBuu2CMwa6oG61VGi5Vd7U2koo%2BvLNrZM%2B8ZecCbGGTEqxdk%2B4GWKr2uejow1orRyDUojJsbdo85AMtxl5xLZMoMtK3nFQyKz%2FJtQWx1d8DO%2Bc9pyz%2BAAwnZ9YHc01YCWi8H2eAY5EP1mUQ8DdynAa9Yr6m8q731HSjXQObWwEmCaGbLN7Kaq0oFnolhVpwZ5BYlIObLzDVUPywth5zDn7O7MBjqkAdv5dG5HQGucIjvfxMzFkX%2F0xHpWOkl1O8rKOZzj6s4RrHMQ5MFk9BzSYhFKc0Zlc1is2eQ47vBz4ys4QFkw2iTV6vlpmlZnlzURQTCuggTK8DYABh89kH44JlzZwF65IpA1Jkpds5hx3ezh53732zzHJWeK1pb%2FuKjTlvcP3J9ffb49B9tq5mTuWxLWMFJBfGideHVAj7QcJ8Hn63IwK0hW6AFd&X-Amz-Signature=380491bc31308870d8eb0fe6c23201d3e73c253ecee28d89fc747b0061d16d41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQNN3GNY%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEYyuP1GuZnldQaZxwvLxwlIH6Gziy4vorX5Qq5NLpfTAiEAnZEHRo9GMFGqgwhd8QSTVYz%2B9u%2BwBnOoBY6IP%2B81qCkqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXvElrfQm5eyxTJ6ircA%2Bi0LV%2Fsb0ytJ%2FR9kNz3gIGlpgUzDyKPXDDSlwGMFJcgYaMvr1lR5M1yN00zEJkxgglP1Z8FoI%2BZxahXVM3m%2FaLNH5vtlsV0wwInDtAg3Yvb9ERDa54ajSELgBL0AFuS6KDXGwYGgqaerq9sX%2BpTaJ%2FTKUJA8W32ktHzQH9GRxYTSX72YZqn64L1oCm2GFenc9ASlyz%2BlFrlkGzatOVBNqhNvFTNhcGCu%2FLigj4D3GFfEm%2Fdi10KXED%2FRNh0vz3H2UPD4M4x1GFaPgUlvpfUej%2B6bNW7brRhcL5DzWiBIKFrDPPaUf46FmKQ1GLpAUK2AXJyOTsH90ArQO%2Bl1MJmQ4EbPXbEKuFPanFH4K3G1TUE6HixfLLDR4cpgBwwLJM%2BnioYP99Vp7wu9wpQwDJXKh648tcAfrPbNLXNR0QU%2BcFBLgNlukWxxlVr78N0MtskhHLmRrSmX8l3q%2BMhlxu%2BKcbW6oeHSNtjbQwX7c0Pe%2FbQ2BLaCll1tKOnET3avVxBG7dcHYumMrRtqhuTUTiIXu52%2BguOEHgu%2BFxmT7cXfbgQYLrio2fVEygIYnUpgkgqFxhFER7CDsKevZR1mC%2Fe9oxCdnhw5oKxb5Lj8IvVTDAwoblr018OGV0QGn4CMKbt7swGOqUBuPnwjyzLhwrO%2FmEUfV1QbTsBs33epRx2zWEWZkw%2BUPFqOLYLf6eTvtysiKQYz6aD%2FWYlJs7cuoBAO8NhxMRISHIQoG%2FtGIjI8NXd%2FwvhyhoeUFbSYf4Cbf7eD154leaFcc88NN7PenyfAnxKwYVW8lRpLwXY4RhUXKc5tYkA8fc3MK4YjteVYcUs%2B56VR9AEQ79YivHIJK0b00F80XRPDe1Jl33Q&X-Amz-Signature=33712f39053a055b2e39a8b141fcaa1c507d454ba4356781289d61fdb24e5c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQNN3GNY%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEYyuP1GuZnldQaZxwvLxwlIH6Gziy4vorX5Qq5NLpfTAiEAnZEHRo9GMFGqgwhd8QSTVYz%2B9u%2BwBnOoBY6IP%2B81qCkqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXvElrfQm5eyxTJ6ircA%2Bi0LV%2Fsb0ytJ%2FR9kNz3gIGlpgUzDyKPXDDSlwGMFJcgYaMvr1lR5M1yN00zEJkxgglP1Z8FoI%2BZxahXVM3m%2FaLNH5vtlsV0wwInDtAg3Yvb9ERDa54ajSELgBL0AFuS6KDXGwYGgqaerq9sX%2BpTaJ%2FTKUJA8W32ktHzQH9GRxYTSX72YZqn64L1oCm2GFenc9ASlyz%2BlFrlkGzatOVBNqhNvFTNhcGCu%2FLigj4D3GFfEm%2Fdi10KXED%2FRNh0vz3H2UPD4M4x1GFaPgUlvpfUej%2B6bNW7brRhcL5DzWiBIKFrDPPaUf46FmKQ1GLpAUK2AXJyOTsH90ArQO%2Bl1MJmQ4EbPXbEKuFPanFH4K3G1TUE6HixfLLDR4cpgBwwLJM%2BnioYP99Vp7wu9wpQwDJXKh648tcAfrPbNLXNR0QU%2BcFBLgNlukWxxlVr78N0MtskhHLmRrSmX8l3q%2BMhlxu%2BKcbW6oeHSNtjbQwX7c0Pe%2FbQ2BLaCll1tKOnET3avVxBG7dcHYumMrRtqhuTUTiIXu52%2BguOEHgu%2BFxmT7cXfbgQYLrio2fVEygIYnUpgkgqFxhFER7CDsKevZR1mC%2Fe9oxCdnhw5oKxb5Lj8IvVTDAwoblr018OGV0QGn4CMKbt7swGOqUBuPnwjyzLhwrO%2FmEUfV1QbTsBs33epRx2zWEWZkw%2BUPFqOLYLf6eTvtysiKQYz6aD%2FWYlJs7cuoBAO8NhxMRISHIQoG%2FtGIjI8NXd%2FwvhyhoeUFbSYf4Cbf7eD154leaFcc88NN7PenyfAnxKwYVW8lRpLwXY4RhUXKc5tYkA8fc3MK4YjteVYcUs%2B56VR9AEQ79YivHIJK0b00F80XRPDe1Jl33Q&X-Amz-Signature=369049a3e27948db1b7be183e71217e4895794e99ac4211d62e9963dbc3b1f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4OSB7WR%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCNKM1lEw%2Bpu1zYFQoIWoJ7vKk2%2FSzm8xEaTZ0AJZ7XZAIhAIt2%2FZDtbsoo%2BUXv%2FMhr6GqPx2BjER2vUbPrvxp8rHdKKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl5zfWDxvQFvug%2BRoq3AND9iUnKfL1PY5s9dniukPmyoLUABHB%2B9qm6%2FofsV%2BxY5WHrT5FitXdaN1W8PetpfVSHtghT5LhCru0%2F7%2Bn%2B65Zs1sJnMqXF4S8Clp4BUWBQZT5ES1QO%2FKjnUYkt4t%2FWjt3DfvdtIKdrN76piWeEynO9kH1P06bZg51f%2BgWXqO7YIYyIbY5PiDT8ke73HRqmEl1Sr%2Fr%2B6dJQoJxVczXKWSYdTY0LGn9ByFwltwBZGz6G8onNbSp74m1Wbmsf2mP8iTyajr6vLOUf1MxpAmWknKD6kqXgubM955TKded%2BGYLxDBNvVp27okWUjFo86kQXFavFIGAMgQ0cM%2BcZJUok45vWiDZ3ZBh8pu%2F7HdmQB%2F%2BL9mUwhHdCOQ66P8StNhVX%2BT6LPLVUMD6sf9SeWWxVQgsA%2FMZGv99WCGDar1A96FMyfZf0cVjSapJ9ylq2tpctxnV%2BCY4t8aed%2F1%2BSmWx8jQWSo%2B%2BtCFrDXOI5HkAfHXY9tb%2B7lF8cEabebfnWxo5S2JseKFvZzFB8Rs3kt2aIvr9%2FDSYyBT7SWUDTO2oiK3zb0Mzg5zoQ%2BmnWVLPJWTyGqrpJ94T9D6%2BBMxbh0af4CeUZib1jdLxqQ4XrYBolec7E9UPEPi62RKVUgke9jDr6%2B7MBjqkAb%2B0QJSnhjRbESxF%2BeQwITXIOPKmdUq4Wd%2BEyIYkymHhEHkW3WlvN%2BBmiB9Ws8PxNqwCbv32Jp4ODHQqJCBR%2BeGX4HPwIhGBtY9AkN6ltpPTs1mbBOeQR44Dq1pT76uniklz11en6DPnkmnuywDpFfUYFhO2gSBEx04QuD%2FTtPqW2E%2FMLFLP44GopdotKHpDjeGri3BC00BjqMKzMXAaJS7ZVAi8&X-Amz-Signature=b829ec2abf476d86a5f0e6408cb488f65799edab5d2473d0d758d5039c1f38bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

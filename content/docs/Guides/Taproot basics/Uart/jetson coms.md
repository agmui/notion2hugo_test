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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EJHDXZE%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0Jk6TQl2JjLSg1FJ3g3Mj8q3pq7%2BAIdXktkqix7fDHAiEAkIE%2FOVCrPn9BAQwr4iGVKShl6uIYIJyVNUocojqw3GgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEs%2FQA%2FnWivtDnFmyrcA7Y88TC6qnzVZpMOJ5WH4UAsdqwo6%2Byq%2B2oY86sPVJC2iw7qR%2FhIExEuzuvvTwPOgr24OE1H5VV%2FLWxHsSzt9%2BjIckfYkT%2Fxr6%2FeSvNSkysQ6WME%2Bmg6Zu1C%2BXZOASxlHa9hHIRSR174wpIPjX1DqX84JSFQGENUcLwGKLTeKM%2FcQeCPiTHNUtBuRu0Pi1q2NLl1RDHwmyfBsDzqLzofEarmm712pxdv%2BbKBPcT5fbQbyu251fhIoU4dhu5IEHlvSuBVclt2%2FAkdEMT3DRFdNKVurKQ7ImzHaFBScyAHHqtUajLbG43M2s3%2FOXN6DBIuXcKB86YOuks79DiQKLQk0VnfSGYBe0SimbLiT%2FolNVXLHRllh2PqEG%2BjL5IDtDx39fKiRL4UmfCNENwMmWKXrInnZz97EV37WZYhkMN%2BBmi9CxDBUC3UOUTxyZr3S6vQAo8sCEwaJDz1HN3IY8VxN%2BHZPHkuk3LKuvK%2FTUvvQa7K3Lx2DVZe5PiWVMsWECrf7M3D%2FoIxaiQLR18myD4rCs167BAa%2BOcnHYoQGL5EZtt9aCP5kfZnhcsdHfcNIe7MKlUmN8mzgbvIUnwehd4F3NZu3rycvZUViK7wv8vy8o%2BVPaRr1MTYPkFVu3IwMJHyr8gGOqUB7Mi6Sx%2FVGg0TvJ9UT4boSYqG4Y9E%2BPh5gXylcSYVxlCCTQ04Y%2BBkuznM%2BGSWVGCR55bmCMHTMSi81pfNONU7uvdAOnzyUk8nppToekzFvy%2FxITqrohf%2F8VtbSreL9jltNpsrp2LaxkyUW0wbqZCLyMEnlT2U8X1%2BLzfwaGyBKMYpRL2Ydwk1nP3QwHNyX6g8xNijdVzLj6z7CAszs99sqpzZTP7B&X-Amz-Signature=1bee0676c1fff7bf98d690aefec2f7cc7b23b4adbf5d1f9569328e735f126f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB72QFE3%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvHq8jjJ8J9rmkcgVIF3ZR1oRWKHRQW27In6k0SFMO0AiBvBt4lZkqVPs%2FCAbvdGj8llBuXSdcKObuoRufjca%2Bc6yqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcW%2BcPDSvbkvJgwW8KtwDjbDHf%2By17JPwkmLB5%2BcbpaidFGrJqjhStdCOV3vTVFTc1Dll5UZ8sQs49YILGFDym4KVUASrwrrdsfTTTo3Y63qhPR3dk6Qs7UIrBXu%2Bka2za6J20SjJmmGvgkeDr%2BCXnRe%2B5RUZtMGMHOph7J7tOyL164rZgQLC1CK9rAfC%2B7%2BoNX9NdLyLIX0zgNJTYdcYu4bR6o6pMPXNrrkSjYHMRxm5S39l5EYB6fKwXquyo3GTNwJJ697O3un8Ui4%2B5OQUY0tuaquerpZl1Ft464yg78t%2BQMK136M8v%2FKkx9iWpZb2Z8jSPNk1EM7TbX0pl1P9aEdK4iaEmqCycW2AVRksXBx7HbsnmvrXuKAb%2BYLvPK9Uc0U28P3oD9i%2FSh8fp7w7%2FzglL4QSqTvyEwr6JRywxlB8Mx4S9U%2BUYI3kk8mAK55Pg0D%2BUqzDXr2LjFJlp24f5C053pYLIyOlWYlUHkNxy79fHIwfs64H2jfbyqX0IPHFq0UwfUdRTxar7or1YQzvWf8C9qnhizzhisCFkQNEiqZYUbcXsl36PbohVnPJ3qAte4Q5DUnGGxwc%2FYfub6YnGh6V%2B1ThrXBX3zJ%2BXeDg12ME77EtoJV0l0jpW2B5mAFa3fb0AzZ3fcc%2FYOww7fGvyAY6pgHaf0MByux74GEzI61%2FI3ZRJLH6EwgTdvUFklNYQqqcGD41WF4Pe8Dy5HyJA7kkiwljR%2FgxU%2BHg5mcO%2FpzfFbH1w%2FNYdBfJrQRKATL6eWGrhTr%2FJel9t3FAz6jaBJkogZm76%2FiKiYAeQ%2F%2FmjhQtLHitSDRp4OK6x3e0a%2FgT%2B2s7Mc6DYSkBH2DOY2rhTad8u0IqvHc%2FrlTGEfElv1DXCm9k1jo%2Bmqeb&X-Amz-Signature=6bc8e568bb28ee657e6bd5ef94ca89b067160f15fc90864ad2834afd79d54a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTYG7S4U%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTuDsPSh1umhYt8tmzU2skxqsaD4ZF4mjvgPrdQSF0XAiEA%2BbAVKs%2FEzfPjpkf2jeYGdjsG%2Fmsib2Cg7ZrR4kiJbf0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaz1M0tBGMpaBvjeSrcA2Dq%2FRsZYTFkOXK4QkOU979CqdGLGXZy1q6uzN3a2oIQISRL5TgCwScFDNC7KFY3ir3uK4xGFURVVfuXdBjVjv4MFA7Gozt5IhkTxejudRI2x%2B5iLysMYaq5kwCTXYJGcnDfEy9L7tbJUb9XofrI3sXJcB9zS7RcUKaBNGr%2FsCPns5RgY4CW2S4GPLYkpP1NBu%2FbfQGLlWc7XUSiZ3Lw3VWHeA%2FJBtUa8c9mbKmwq7yXsaTmY%2Fez9EsJ6OxYl%2BFfLEair4VSkQ27P6pG%2F5J1lfc2OlQ601w5%2BCcU27Eljok055POgt1EeGH2rbFCNDbBOLdqORcTOUrSzSVNrmEkFx0Hp1R%2FlhQR%2B4bscXcsVOyklqxzsNuwDdL8jW75YKLGytp4%2BZUw2kTwPOQgQV%2BOga1uhtjbQQZYgBmvXWKFzYU0o2mvMI%2BEE8HfzynIWSRfF9A3dwvZp1d6gWa6AQ572TucbvC9IhTRekpqp1ntFBIclcNTm1Sv7kk%2Fz1IBu%2FwYDlVfvUaqAXiexfFkweKr1hRJFi%2BcJXRS5guRcg9Hhl7To5yHYk3o9KPoUeVc2EAojA8EszBMH8TGW6qt9Jle5IrjpqPvSE13bxUDK5g7y35Bm%2FjbZxo01w11bePiMMXwr8gGOqUBTi7KRpJD%2FND2Klkng%2BFtt9tEHpFdJ443ZZobNkKd19DTVt8rZM8yxg7dnZMDSqTpAeakHnjoAmTiGLZlxWz%2FRGfavjEIZk0FJWjHBeDx0VF2EgUkQYyjlnYhKI6CD%2BbsSv3zgyRJIGdXUCGrSAJm5vbfOhaDovOXd9BCEhCDvLptaJllIJ2bOiUu4iInZr6H6tWxaTZCVyALZgHE5f7cQRXv5aah&X-Amz-Signature=58b02606c269ae85f168e5e59aae8606186bc922041b8d764aece77aa8e59aad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTYG7S4U%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTuDsPSh1umhYt8tmzU2skxqsaD4ZF4mjvgPrdQSF0XAiEA%2BbAVKs%2FEzfPjpkf2jeYGdjsG%2Fmsib2Cg7ZrR4kiJbf0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaz1M0tBGMpaBvjeSrcA2Dq%2FRsZYTFkOXK4QkOU979CqdGLGXZy1q6uzN3a2oIQISRL5TgCwScFDNC7KFY3ir3uK4xGFURVVfuXdBjVjv4MFA7Gozt5IhkTxejudRI2x%2B5iLysMYaq5kwCTXYJGcnDfEy9L7tbJUb9XofrI3sXJcB9zS7RcUKaBNGr%2FsCPns5RgY4CW2S4GPLYkpP1NBu%2FbfQGLlWc7XUSiZ3Lw3VWHeA%2FJBtUa8c9mbKmwq7yXsaTmY%2Fez9EsJ6OxYl%2BFfLEair4VSkQ27P6pG%2F5J1lfc2OlQ601w5%2BCcU27Eljok055POgt1EeGH2rbFCNDbBOLdqORcTOUrSzSVNrmEkFx0Hp1R%2FlhQR%2B4bscXcsVOyklqxzsNuwDdL8jW75YKLGytp4%2BZUw2kTwPOQgQV%2BOga1uhtjbQQZYgBmvXWKFzYU0o2mvMI%2BEE8HfzynIWSRfF9A3dwvZp1d6gWa6AQ572TucbvC9IhTRekpqp1ntFBIclcNTm1Sv7kk%2Fz1IBu%2FwYDlVfvUaqAXiexfFkweKr1hRJFi%2BcJXRS5guRcg9Hhl7To5yHYk3o9KPoUeVc2EAojA8EszBMH8TGW6qt9Jle5IrjpqPvSE13bxUDK5g7y35Bm%2FjbZxo01w11bePiMMXwr8gGOqUBTi7KRpJD%2FND2Klkng%2BFtt9tEHpFdJ443ZZobNkKd19DTVt8rZM8yxg7dnZMDSqTpAeakHnjoAmTiGLZlxWz%2FRGfavjEIZk0FJWjHBeDx0VF2EgUkQYyjlnYhKI6CD%2BbsSv3zgyRJIGdXUCGrSAJm5vbfOhaDovOXd9BCEhCDvLptaJllIJ2bOiUu4iInZr6H6tWxaTZCVyALZgHE5f7cQRXv5aah&X-Amz-Signature=88264767421423d2a2a55df5cde52acdd6e8afa16a1686c43d55678e81b0e665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB72QFE3%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvHq8jjJ8J9rmkcgVIF3ZR1oRWKHRQW27In6k0SFMO0AiBvBt4lZkqVPs%2FCAbvdGj8llBuXSdcKObuoRufjca%2Bc6yqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcW%2BcPDSvbkvJgwW8KtwDjbDHf%2By17JPwkmLB5%2BcbpaidFGrJqjhStdCOV3vTVFTc1Dll5UZ8sQs49YILGFDym4KVUASrwrrdsfTTTo3Y63qhPR3dk6Qs7UIrBXu%2Bka2za6J20SjJmmGvgkeDr%2BCXnRe%2B5RUZtMGMHOph7J7tOyL164rZgQLC1CK9rAfC%2B7%2BoNX9NdLyLIX0zgNJTYdcYu4bR6o6pMPXNrrkSjYHMRxm5S39l5EYB6fKwXquyo3GTNwJJ697O3un8Ui4%2B5OQUY0tuaquerpZl1Ft464yg78t%2BQMK136M8v%2FKkx9iWpZb2Z8jSPNk1EM7TbX0pl1P9aEdK4iaEmqCycW2AVRksXBx7HbsnmvrXuKAb%2BYLvPK9Uc0U28P3oD9i%2FSh8fp7w7%2FzglL4QSqTvyEwr6JRywxlB8Mx4S9U%2BUYI3kk8mAK55Pg0D%2BUqzDXr2LjFJlp24f5C053pYLIyOlWYlUHkNxy79fHIwfs64H2jfbyqX0IPHFq0UwfUdRTxar7or1YQzvWf8C9qnhizzhisCFkQNEiqZYUbcXsl36PbohVnPJ3qAte4Q5DUnGGxwc%2FYfub6YnGh6V%2B1ThrXBX3zJ%2BXeDg12ME77EtoJV0l0jpW2B5mAFa3fb0AzZ3fcc%2FYOww7fGvyAY6pgHaf0MByux74GEzI61%2FI3ZRJLH6EwgTdvUFklNYQqqcGD41WF4Pe8Dy5HyJA7kkiwljR%2FgxU%2BHg5mcO%2FpzfFbH1w%2FNYdBfJrQRKATL6eWGrhTr%2FJel9t3FAz6jaBJkogZm76%2FiKiYAeQ%2F%2FmjhQtLHitSDRp4OK6x3e0a%2FgT%2B2s7Mc6DYSkBH2DOY2rhTad8u0IqvHc%2FrlTGEfElv1DXCm9k1jo%2Bmqeb&X-Amz-Signature=d1d53d3cb68bc7918ce274eea7979a653c51550d23e613c27a69ade296e11207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB72QFE3%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvHq8jjJ8J9rmkcgVIF3ZR1oRWKHRQW27In6k0SFMO0AiBvBt4lZkqVPs%2FCAbvdGj8llBuXSdcKObuoRufjca%2Bc6yqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcW%2BcPDSvbkvJgwW8KtwDjbDHf%2By17JPwkmLB5%2BcbpaidFGrJqjhStdCOV3vTVFTc1Dll5UZ8sQs49YILGFDym4KVUASrwrrdsfTTTo3Y63qhPR3dk6Qs7UIrBXu%2Bka2za6J20SjJmmGvgkeDr%2BCXnRe%2B5RUZtMGMHOph7J7tOyL164rZgQLC1CK9rAfC%2B7%2BoNX9NdLyLIX0zgNJTYdcYu4bR6o6pMPXNrrkSjYHMRxm5S39l5EYB6fKwXquyo3GTNwJJ697O3un8Ui4%2B5OQUY0tuaquerpZl1Ft464yg78t%2BQMK136M8v%2FKkx9iWpZb2Z8jSPNk1EM7TbX0pl1P9aEdK4iaEmqCycW2AVRksXBx7HbsnmvrXuKAb%2BYLvPK9Uc0U28P3oD9i%2FSh8fp7w7%2FzglL4QSqTvyEwr6JRywxlB8Mx4S9U%2BUYI3kk8mAK55Pg0D%2BUqzDXr2LjFJlp24f5C053pYLIyOlWYlUHkNxy79fHIwfs64H2jfbyqX0IPHFq0UwfUdRTxar7or1YQzvWf8C9qnhizzhisCFkQNEiqZYUbcXsl36PbohVnPJ3qAte4Q5DUnGGxwc%2FYfub6YnGh6V%2B1ThrXBX3zJ%2BXeDg12ME77EtoJV0l0jpW2B5mAFa3fb0AzZ3fcc%2FYOww7fGvyAY6pgHaf0MByux74GEzI61%2FI3ZRJLH6EwgTdvUFklNYQqqcGD41WF4Pe8Dy5HyJA7kkiwljR%2FgxU%2BHg5mcO%2FpzfFbH1w%2FNYdBfJrQRKATL6eWGrhTr%2FJel9t3FAz6jaBJkogZm76%2FiKiYAeQ%2F%2FmjhQtLHitSDRp4OK6x3e0a%2FgT%2B2s7Mc6DYSkBH2DOY2rhTad8u0IqvHc%2FrlTGEfElv1DXCm9k1jo%2Bmqeb&X-Amz-Signature=71620b8112d6519ccdd0750a2190b7abd1045c9554d3e1b11b4b9d731712075d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ECVGYVB%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDucknumrMQNo5rC2vf1mrxsr8F2KilJe0s2hzfaSAfPQIgFs7huS%2BCmGs8Nsfhjo68GmyLg%2FPl4rDeKbPe85BJum8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B8Y0snpUnE3ot%2FPyrcA7twOUvGZLciWTkbgJD%2F1MqESt9B2fQBjtSWvv1LIf%2BuJh0ai%2FRQg5gLLdD0Fr%2FVNzdDmSM0eTTqotE%2BRu3HE58h8tobaPfykHRNyKXD3KSNyownaMMGONXfx8PDI6fdpLsLw8vJNMnMl8S2hRoepYU%2B7htsBLynjwyG956RkAZHmc458W%2BqzJ4GXxuqUhuNLEY%2BG3EBighs4qxJ9pibe9I0InhNpmZizmcNCQjNyK4jO3JB%2B%2BFHH042yRtfRsgAro0AfKUeTUWctP6ZUKBFJ7dIwuhGPqvytQ1lAaZhHl9T3adDQvJDEOQBgXdSLKvKlJx%2F85t%2FW4uTVCRp8bdU7INRt1Pv4e22%2Bo%2F1s98rzRQEPTFPi13zl3W2gKmK3oylXAkXsYnoUBx5BP02fUfi%2B5lcXl7%2BprYCT8I7K%2BWbz6CHQPIYaQUJfLWWzLJPGsXKyNNI%2B9pcmg%2FEbJTfBb6TMjBbO%2BZwZ%2Fp%2FgcPkSdFnzkvdpUUF6%2FiEdcb1hVCFBJ1IXEFOGSNfutHUDMw2mHPS3rO6TfS9M%2F61Zefxu2w1hcHTzNvgaUMAsQoZwBlcI8%2BReXQPW3%2Fgv1BGdGEZA0fpT4NBNJEcp0eykLBPY1ylXBnLaDXpa2q2E8DHPkwtMPXxr8gGOqUBj2wGQcJy%2B3IHO%2B40N4EcdMOxzXQAcAPtqwlkujRw9xlcqV7sm0hFHTDn3UB2nn%2B4Mg5XI2xiBwdmQuEhu4VC3zo38%2FFO2M4ypVm4QbDwgvpxt1d1vIEZ1W8M5LRHCz2zIa3I3fPdcCAluIG2jG09%2FTI1NFZ%2FBtLllQ8O6n4JQulirHX0JQ7FRv48HDTc0cb9yuUKR3Z4S4ZEH8TFO00VgXHyrLvz&X-Amz-Signature=39ea62328b2a74af6976b84de1701a2dca827b7cbba531835369c1f5f576d1e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

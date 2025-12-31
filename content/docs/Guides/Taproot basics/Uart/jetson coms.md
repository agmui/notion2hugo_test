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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J3AV7VN%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIyBBUpfU0HG4QJxjCMfJVPafO%2FYIbk3tNEH%2FPql7nQQIgK%2B99AAgyhmu9ZYzkDitwnbaAWoGFF4ovk5aOViVLDCUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdaqOzbMjlstFKzRSrcA4CmCA415FOt8f206U2ufEI14%2BdGzYZ1gi0D9KTjo45lkWx0Qk5fGkbLewH9IDX8%2BOJeAa%2F40jq6KDzCkZld37Yj0ewfK76aOwDtTZgc0KndmCZVjynf3swIZa%2FygCS1WFFTSTj2euyLznHyeb0o0O%2BbSbdWjaXA36FYHtrfRk0jWPfjAMRyc8juiQwa1QrwzS9cEwQhOljw6xW%2FOTwTwcXUaUfO4jGh9M5DcJiN4u6ZE9MuBu7dhScLoPtAtqPL6EGWPJarr0Y2Po3BBMVZNo3I3x2FwTdX%2BnyxCWyTH05IraA9ChgF8EgWO2rG8PfyXS2wxDYEPdJAUJwXmnlB9q0%2BIAWoB%2FzaDSJLbdY1jCn9JdkqqRFmNs8tOwInwaAlA0btMnmeVuL7XwO%2BGDeTfdqFYMXdG8kTdiH2ymL%2Fb0TGkCveNFN0q41z9qTNnw0KK2EIQYOtTuiuWzI0N3T%2FrtctdoeXvGNR0%2FhpTCaqIoc2EsWe2M7i25UadOpLn0Ih%2BHyUWLPrGv0slZRXvAdiViCrKN4ycUKFsBoOqJIzZgks9H3oahmPxn1aw%2FLFUbt77mqDMsB%2Fsjcw0K%2FgfkM1N%2FrYv8%2Fqv9%2BFsbMtCvirDPlpxqRoY9AIkVwCv6GzMMf40coGOqUBCWpuSGqzrJ%2BT7kbKhcVtMs3yMReN0S5fksj9zZJq%2FPTrpIbyvDio9bSgOEreX1TUUgnrXJc0osoa%2B3xpLH05C5RlBrKrLyutCBGloAT%2Bnvlq%2FhE1gjVUA5%2BhhRvdNQrdZoX3Sa9MI1PM3j4h884TNLzLlBNTVIiDmj9OxxwMeQYT4dCxKEOv6%2ByImRr2%2BQeyw50sd6EgMfUdnzdrgLIJB4WyGidU&X-Amz-Signature=85fe38a7b6e0a1f53a5b156116ccbade7bde867558ab33b7ea3f147a04741a98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEI47GW%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9rJ8pRGiDIM55R1cSfMXhHRpIx9BEfr0ccIdYeGJJXAiBTJnpLKuQnb%2FDO%2BUrvurG2L7x5Ky1ElA1IloBpkFEJZyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0hxtgtXH7aluiXygKtwDf2Fxor6IaKqVJKmmP83XC7gQMiIIZCnxse8Q5GhGoDWRqnUR%2FOLfTy1egu5ko19XfHHHgq%2BDe%2FfwEVSjzvJ7zMdasy0cNAA%2FNAUrt6KTODDWkXObSdcb5hs4TNQDroTzN49v0VNdv3MqO%2F5vBHrtUjWFn7krUY7GeV0eNpO7EUYRBMd6je9ZG9YLLZXHLKQOct9vH5%2BvYzJoSYnBkF17Z6rr8OxfW9IZ3F%2BVYzSluE9M7FoXTZXNa8dH0EMzoMhBg4%2BikoneMtv6EuWr0amimBKcUBdJ3AWXmNXILFrGvJQolBmFJDxgq8e4ZDzRoYg%2FWUpHKNKKUnLIEnOHtUjNWiJsQw2HFhX5Nt%2FZNkqmQ75dUMvf4MHYFGTyx41Ixx1lX%2F4x113k62mm5iKdHMfVGNDU4zCkj%2BiOtYwSQQvcXUeGXwZ0%2FqHNY77F0Zg4Y2UbsIW5V24fJjCnCAUxoGTXU0Tw0HAxynfW2tmutPCGxDf%2FYjcMdOG5RJAFk23D%2FHi26H%2FO5gFP8hVvmnbYNmmGpKIumxaWBlyOBgJf10vej9bT0tdra92P0D%2FIDvRyhfvcn9zWtuVlXyzjU9NMl2V%2BPg8oG94JzrOGlXFICc85BxCWn5z%2BzEULykwvg%2FYwyPfRygY6pgF31OcvrCIpAA2p9ijY5f%2F5MMbC%2BNlB5hkOJvO7nNAoX%2FKp8NP7dK13Y%2FGCoGZWxx1ZfPKy3g66sL%2Fx7zHX6E%2FhFeNHKr4H9qz4f9ODc4js5ZXF9uu4wGAqP8Cyx9hUgsf3UAUxYTzktqB0i5R1nFV2JtHpeZeYujnh9nMLvD%2BKLl0hkS%2BuOVpW0Qqn7WfFpHU67F1AhSudT%2FCd9aUlAuHBTYaXk94s&X-Amz-Signature=5f43d40a23668ac13360670acacba25262e29f8c0207ce60afc8e9c6d8da7699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT466GOR%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0tryaBiGzjLPoEK3X4PdBy%2FFH1E6MCQn860Td%2BlahoAiAEs582Myo5s4KRh7WuM3XRFbTSvT7kt18tVjku7N8IUiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb9Kzs2StI%2B46Ukk5KtwD9XNI7%2BpkQCaHPsyI9vH0tYi%2FvqINqazO5yOuyOoV3osh%2BFTyw1%2BoO10BAzCCgJ0pG65If0rUnXGaldf8%2Fe%2BOKBo1UPC1FX1CCVZlcnEafidJOCGB0R4GXsv%2F9RAYqtKKNMWQFr%2Fo7kBYRmAE8YB8IB1dXnTxoMzU5dysFfrZro3q9iwCSXn2Hcu1YGjXmgAsV3vGkbP6Y0Tdh4LN63jRiHG1nYKmd4B8aNnUlMz4u9nmkBsQyt4O4MxJttEMfu7hzaFel7cAAhol4TK2FQMyT8%2Bfeyq7SU6WqK%2FmcdAvQRs0c1GfGK53qfS7HFppwe%2BTYSfGruye7%2BMWOp%2FVU6Ra9SAwcxuBVM%2FQa1fMFDnbfow1m3aa6veAsllRFbbMoYtyfJAlXMeSozmNJk%2B6pMJulhydaVKPhnSPTAEuFAv5a7zjZMgsrzlXmXT9cU60F%2BhM51WqoeM1aQU%2BQ23j33WwS%2FVYkxm3lHx2PJ%2BhtKi4IA85yD340PfDIFRGeb3gUESgacH6a5tC5NJWnpqSE7EO3FAkxmfteFZQU6LY7D9BFVevhpWlrt0yVNFImT%2FfWb6vpUukBPgEGDRBbp%2FT738wRvND1tmA4Uol%2FfJ37K%2Fh%2FP%2B3MTgKjcRLXvA4KcIwgPzRygY6pgEYwPwVcI1QTL9IdH8ZOpQ%2BXwumIfaWITgaY%2BPiXB%2FE64L3Ut1hJoFKNT2Vb8%2Fx6Vzsx5GEW7YeSRZGFS1BajCUVqUk6BAizACOVTbhqlU%2BcvyLZ9dXAqkDsy7OBGJDXN46OcNLo78Xy2juucrUXlPMpv49iTnPCMiOzxajuyhHsuLjzgadA4uoTthTNwQ7qpTAX033mzz4HuIfDI5TOcfqa9zy0KNv&X-Amz-Signature=9449c8228ddd143883149224dc892383ddbf45f12f15778aacd5a233cf8f8155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT466GOR%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0tryaBiGzjLPoEK3X4PdBy%2FFH1E6MCQn860Td%2BlahoAiAEs582Myo5s4KRh7WuM3XRFbTSvT7kt18tVjku7N8IUiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb9Kzs2StI%2B46Ukk5KtwD9XNI7%2BpkQCaHPsyI9vH0tYi%2FvqINqazO5yOuyOoV3osh%2BFTyw1%2BoO10BAzCCgJ0pG65If0rUnXGaldf8%2Fe%2BOKBo1UPC1FX1CCVZlcnEafidJOCGB0R4GXsv%2F9RAYqtKKNMWQFr%2Fo7kBYRmAE8YB8IB1dXnTxoMzU5dysFfrZro3q9iwCSXn2Hcu1YGjXmgAsV3vGkbP6Y0Tdh4LN63jRiHG1nYKmd4B8aNnUlMz4u9nmkBsQyt4O4MxJttEMfu7hzaFel7cAAhol4TK2FQMyT8%2Bfeyq7SU6WqK%2FmcdAvQRs0c1GfGK53qfS7HFppwe%2BTYSfGruye7%2BMWOp%2FVU6Ra9SAwcxuBVM%2FQa1fMFDnbfow1m3aa6veAsllRFbbMoYtyfJAlXMeSozmNJk%2B6pMJulhydaVKPhnSPTAEuFAv5a7zjZMgsrzlXmXT9cU60F%2BhM51WqoeM1aQU%2BQ23j33WwS%2FVYkxm3lHx2PJ%2BhtKi4IA85yD340PfDIFRGeb3gUESgacH6a5tC5NJWnpqSE7EO3FAkxmfteFZQU6LY7D9BFVevhpWlrt0yVNFImT%2FfWb6vpUukBPgEGDRBbp%2FT738wRvND1tmA4Uol%2FfJ37K%2Fh%2FP%2B3MTgKjcRLXvA4KcIwgPzRygY6pgEYwPwVcI1QTL9IdH8ZOpQ%2BXwumIfaWITgaY%2BPiXB%2FE64L3Ut1hJoFKNT2Vb8%2Fx6Vzsx5GEW7YeSRZGFS1BajCUVqUk6BAizACOVTbhqlU%2BcvyLZ9dXAqkDsy7OBGJDXN46OcNLo78Xy2juucrUXlPMpv49iTnPCMiOzxajuyhHsuLjzgadA4uoTthTNwQ7qpTAX033mzz4HuIfDI5TOcfqa9zy0KNv&X-Amz-Signature=1c6edfee4c34cd8364cc178cb096cd248664712ae4f674bbada7aad7f86ad282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEI47GW%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9rJ8pRGiDIM55R1cSfMXhHRpIx9BEfr0ccIdYeGJJXAiBTJnpLKuQnb%2FDO%2BUrvurG2L7x5Ky1ElA1IloBpkFEJZyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0hxtgtXH7aluiXygKtwDf2Fxor6IaKqVJKmmP83XC7gQMiIIZCnxse8Q5GhGoDWRqnUR%2FOLfTy1egu5ko19XfHHHgq%2BDe%2FfwEVSjzvJ7zMdasy0cNAA%2FNAUrt6KTODDWkXObSdcb5hs4TNQDroTzN49v0VNdv3MqO%2F5vBHrtUjWFn7krUY7GeV0eNpO7EUYRBMd6je9ZG9YLLZXHLKQOct9vH5%2BvYzJoSYnBkF17Z6rr8OxfW9IZ3F%2BVYzSluE9M7FoXTZXNa8dH0EMzoMhBg4%2BikoneMtv6EuWr0amimBKcUBdJ3AWXmNXILFrGvJQolBmFJDxgq8e4ZDzRoYg%2FWUpHKNKKUnLIEnOHtUjNWiJsQw2HFhX5Nt%2FZNkqmQ75dUMvf4MHYFGTyx41Ixx1lX%2F4x113k62mm5iKdHMfVGNDU4zCkj%2BiOtYwSQQvcXUeGXwZ0%2FqHNY77F0Zg4Y2UbsIW5V24fJjCnCAUxoGTXU0Tw0HAxynfW2tmutPCGxDf%2FYjcMdOG5RJAFk23D%2FHi26H%2FO5gFP8hVvmnbYNmmGpKIumxaWBlyOBgJf10vej9bT0tdra92P0D%2FIDvRyhfvcn9zWtuVlXyzjU9NMl2V%2BPg8oG94JzrOGlXFICc85BxCWn5z%2BzEULykwvg%2FYwyPfRygY6pgF31OcvrCIpAA2p9ijY5f%2F5MMbC%2BNlB5hkOJvO7nNAoX%2FKp8NP7dK13Y%2FGCoGZWxx1ZfPKy3g66sL%2Fx7zHX6E%2FhFeNHKr4H9qz4f9ODc4js5ZXF9uu4wGAqP8Cyx9hUgsf3UAUxYTzktqB0i5R1nFV2JtHpeZeYujnh9nMLvD%2BKLl0hkS%2BuOVpW0Qqn7WfFpHU67F1AhSudT%2FCd9aUlAuHBTYaXk94s&X-Amz-Signature=1d1ff402a2d1ed8ac012f963047a98d24e0ab37e89f4d968f257d6b2025f9f5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEI47GW%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9rJ8pRGiDIM55R1cSfMXhHRpIx9BEfr0ccIdYeGJJXAiBTJnpLKuQnb%2FDO%2BUrvurG2L7x5Ky1ElA1IloBpkFEJZyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0hxtgtXH7aluiXygKtwDf2Fxor6IaKqVJKmmP83XC7gQMiIIZCnxse8Q5GhGoDWRqnUR%2FOLfTy1egu5ko19XfHHHgq%2BDe%2FfwEVSjzvJ7zMdasy0cNAA%2FNAUrt6KTODDWkXObSdcb5hs4TNQDroTzN49v0VNdv3MqO%2F5vBHrtUjWFn7krUY7GeV0eNpO7EUYRBMd6je9ZG9YLLZXHLKQOct9vH5%2BvYzJoSYnBkF17Z6rr8OxfW9IZ3F%2BVYzSluE9M7FoXTZXNa8dH0EMzoMhBg4%2BikoneMtv6EuWr0amimBKcUBdJ3AWXmNXILFrGvJQolBmFJDxgq8e4ZDzRoYg%2FWUpHKNKKUnLIEnOHtUjNWiJsQw2HFhX5Nt%2FZNkqmQ75dUMvf4MHYFGTyx41Ixx1lX%2F4x113k62mm5iKdHMfVGNDU4zCkj%2BiOtYwSQQvcXUeGXwZ0%2FqHNY77F0Zg4Y2UbsIW5V24fJjCnCAUxoGTXU0Tw0HAxynfW2tmutPCGxDf%2FYjcMdOG5RJAFk23D%2FHi26H%2FO5gFP8hVvmnbYNmmGpKIumxaWBlyOBgJf10vej9bT0tdra92P0D%2FIDvRyhfvcn9zWtuVlXyzjU9NMl2V%2BPg8oG94JzrOGlXFICc85BxCWn5z%2BzEULykwvg%2FYwyPfRygY6pgF31OcvrCIpAA2p9ijY5f%2F5MMbC%2BNlB5hkOJvO7nNAoX%2FKp8NP7dK13Y%2FGCoGZWxx1ZfPKy3g66sL%2Fx7zHX6E%2FhFeNHKr4H9qz4f9ODc4js5ZXF9uu4wGAqP8Cyx9hUgsf3UAUxYTzktqB0i5R1nFV2JtHpeZeYujnh9nMLvD%2BKLl0hkS%2BuOVpW0Qqn7WfFpHU67F1AhSudT%2FCd9aUlAuHBTYaXk94s&X-Amz-Signature=f16ca1f03725078ed7a40a58da00ecab07a73a935fdd9a053052dd7f6ef274b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFR3EHO5%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0LuAOVjQ%2Fwg8Fskba%2FHczFTg9fslrhAoZIXIDLEnLSAiEA8MyzmvuzJr9NrxG%2B6xKJS6lD1l4%2FVaJjKnJJLP6WVWgqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMTatiXh%2BeRYHRptyrcAwStuYImXJ%2BAngVhlfu8mvHODQJj54zE34CvIhdFjQ6MvQw0QfEFieb%2BlaU8HVP7AAygYVYHnnwYDgXo%2BqijC1obPCmpHRKPIJtXm0tLZ7AufzWRhwMFlN8aE%2FTCUJFTf15D%2B8Oj7xdvTmLA8WzStTSawRZ24g0xpk1dVBWK2Rq6zniq3GLLMxKp10BmeP2okvKglycXlSi85FOeWDCQKbnGmOsfo1OcfwK%2FE0nkgOL5xlZ1GuXc%2BK2n4ZtJbiUoJox%2B2H8WUYwhrDf5aRdx9ur8FwSosSkssGQeGQQnhmg48%2FJr7S2JnrP75z%2BXVas8kL3es0eqa4l2OUgLf3tJ%2BY741eygRnqvAh1TGeefyUQSKUuXUsX3Tl%2BedaxcGBMVOx7ueEHem%2Bm8o9gfe3k%2F%2BnQO2hxZq%2F6XxZQV3e0M%2BaY2b52Z5mMnZB8nDQCPYE5ML104LFvJwqMn59%2FI2Q0AOBL6T028ZdwyVbR6YZHzYx6bsqG1PLpUR7sxZ61akXpJebvqueiyp8GtEms2GdeirReXKbn%2Bz3LLuREXcMAhNimkolpnljVCjl2mFtglJMqCdlXeC0Y4JQmTrxsqxqw4Qs4VO%2BzowLrT6%2Bq2d5iPaL5QFcAzL0%2FdS2cm5l%2BsMPry0coGOqUB7heekUcm5mriRoSI2tur3Bd6NRrKBImScoh2m%2Fp5ZLD0UdZNmFuom2xYz6M9gxaQ4NU88n41YoO6SY67w4B%2BSYuhoHtbD3UGhmBYDHrP650nNICSyrNtE%2BSDN0iX0G6x1z9mXO09Cfup4BqhC9719%2BoCrHu8xhX6zl0bO6k%2F6FX9q7AmmSkgSjaahXxuoX6igA3EmK1JVVrS5dpYMbXh6vg0MVO%2B&X-Amz-Signature=6c6a332fe5f554fe6bdb8d1f1a046bbd50093cb4dea4d2d6386c6acac8d0d57a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

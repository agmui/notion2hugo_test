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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FBLYXHZ%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFSxde9AWZeDUTlLaMjhuUCOISVLGU5L4M92vlBUtsuQIgZRBosBLn37P4LLDKtuIZepW44K5IaoQj155MP8d9cz8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdisBw9L9EeVUHRzyrcAyuJMfssqGYLXoNj5%2BTIAwav2y%2FfDuFXVWLvrakqqy5%2FsSnkpv2ImdHQ2WWaHGqxzfQLEue9pagNNwzYR2DAuM%2FwNlK6PS%2FBQhF%2FEfuR0d54qVKbsc%2FFYrn%2FpXkaP7sfBfgOrV2zsrEBlkvJzhdiMztkSPzCCVoL9lt%2BgYptymCZIDILbrJ2Q4xwkKDaCRQp1tW1sbQ8hm66GM%2B26PtxUtCv%2FRzS5FsU5wAJtTD8%2B5BeWc8si2Zjzj8ao76kx%2FsqE%2BX5y4uo%2FIfBLAcZabXfzVSDlIkdEco2%2FDVY2yVLoflHb2rLGAhW3YEj4GvZMmG5Q0Y9OE4o%2BhIPYiM3s5TX0gMBPZ4hbzFbLKv7ZHOUevGWtHgEiB1XcfODfzmzdA4vWoG%2BO6LszLLpolkaLLVAfU9pD%2FAeW4z0tSmjW4N0gOzNxgfw4ix7v6Fzr17%2BGxGRl4pgHXVJxlEOpvl1wyTwJqNPd9HXWMOabwjDtHKFukQL56YQACWkZojXNnz8WezjzPCBUyoZLWOr9lG71dOz0bJ2E167%2BAtFrBb3YFtN5bCnbd3CEX9RUUgNdFvb%2BmN%2BZx%2F3Vp96gRW2OG0nglqivWx0Bd8w3T%2F9HV66QFySkA9TVsdPNvpJXMQmepFTML2VsNMGOqUBJMCIL7qvulVmAVpIlT5coU2yGcgO7XZyIwmR0wXWW63bdQ%2BsJfXzTtyTN240Td6W7mWqqfHB0ExmoQXHHzv6TCXx0Gc4xn2tuGFgeCohbimnWmoF46SB0A7xXdTQOtlE9tR0M2vbUHbCyWe21HL%2FixyHZwwiIDjJSK87irwVSC2L4ZeujHW%2F7tijPLo4MJ%2FBML2W4NyMlQaDzORXUCCrH8VdLeK0&X-Amz-Signature=41021e51a19014a80134efb20bdfc4153db0d3c284f7d2670704192851600b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KGH66RX%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxUJig0OiUGJVMz5ZXkZgM%2BzgnRjbRIKbeKme5uyO82QIgIu22MPSrMFs1OrWiAYF1haHfs5HtE9YNrxcobF5PXgkqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5vi9RP5tE2NDez8ircA8kFNgm7jDE6P71Q2cE87KgmlRIvqRhum4RwLIxyztVMtm%2Fn4G4vXyvE%2BlMTMPrdOb0y8QL%2FUWF6XbXQsrJT%2BoZO9MgNBb444uboOerwU0QMXRsbdngNKqR1IhR6h%2FbsU8lOQPBEVtfQpsKkvgWpTN3xVCM71B%2BT97tLimsnakkSm2PObOSQDiSzEiYQhlMeqRVU1%2FO4sX238PdcGWV7CS3iHLldu0SEr3jDZwM6UxpMx8M3c%2BziZ0%2BE1V2XEsIKbiFu7DuVk3eqaAa96pu8wAqwsEWd8ju3uHapKtC7Ftm1LQygrzGxOU6vJws0UoPHMWTob3m4f%2FDFqZ2Nhn5%2Fr67ypAyjnTRPB2K1TeaQ%2BKiraXwgFa4KfEYzUk%2FrwNB2y79uPkgA36so9KXhYJqPv%2FmZN4tcZ%2FiOm00DGarb3pL0QXjJkkAsOsna5sqxm040hWA7OIbYGVrRIbzpnMwCeKoizRRh9DRJmi57a8A4RCUbdzqQ07U3L5gOFd%2BwLx23FaLsFrIKB1dwzonsZJnN3HaaKvHHo1sQdLSaHpkleFAzLtULUyrrpqUU%2F0yP1jQpisaPre0f9hbsVH4cU7Am8ssjpAm7liViT%2FCUOVsSUgyOuhDy9zetBhd59D20MJCWsNMGOqUBo4RmERKZfDfTQFGT8kDUrujTSehKGko3Wby7JqyiuGIIaoXYUE5o77lctxkM5V7vyXKBWZ7NUlC9gZFLRt0pHhNAO914l%2Br7wOBaAql6HBak4tfoNFmDpSD4%2Bzy%2BCcA16nb%2F7SVHIBbnGHa5NVAHxAKY4Ydu4u71krDl17NR1BLZ4ArKSQGH0Hbd0L0MVP90GMnHO2JsTNwDgc%2B9sqQ4eIr8dy9O&X-Amz-Signature=e8e54743e1fc8661c2cb284d26804cf2e18200974bd00bae8ce1f74580fe1a31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TATWHGO%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzQHrrdJjI02915GR9xkd6P8KH9zhyfFHE90t5SWDFwAiB%2FhhNHX5LdTijBe%2FpDc51vQv1Q6%2FU7MFBRyUOcAjnHMCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuY1i376BepFYktJBKtwD6Sz9utkg%2Fqmo2lYRFUmCg93AfTONX2QLFz8ZzzdtounTtFop4M7IWs3jEpJOTlMJqXdNjQJa3iaZ9sajIaTnCwuM7yU9tsY%2FnkZFTckjCtzJ1VVpjQ40gyOoH1XrgbZdHG1SYZSRAmLyIE%2Fr3VSSHvm0u6uokSDe%2Blst69XebEGE6XWMufPRlQahNW27BkNq%2FWIfl2xL0nRGOl0lCF6%2B5odBDDWQb%2BI8LYyyjDRmiTdzyPxdr98hS8BZXTXavsv7CyggTO4zw3EaFw5TgOqf8GPFZzPsq21dIBIgwTmixW8IskWUd42Mxy8mZULsm5SdhfmBcP%2B%2FpTSviL2ZFjaZOkEK2YSE5xVObVPgAUNU4ad8jEx4PPwu2f1flt5ccAhbbvnv2zs9MpNHsKuOEwos66lPDVKUWMWU0yZMTE1C8lIVmrPQpf72g8UdtdC1d1lKoHX1C7biZ%2Brqz0UUbVmehhB0kQ%2F2oYgvRrbjLKYTSv%2BN7iZlbYl0JiVTfejdmM726xD0aYokb8UjePs1Syoub%2B9CAgUa%2FTO9wEJz1SZQTXdzBBJA1hbQ25XZ%2BdObqmBzOL07eInIioUg6mvN5oTbbcA%2FQ4T2qaWYP4uICvjNYcTAWcJvj8HGx%2BfRSE0wkJaw0wY6pgFmxgQQgRSJ6O2cQm14W5QioLzEDUz%2B6Cxqb7bmH6ugf%2Bf09WWndCfemAFUhkrNO91jDG%2FpSSxAr%2Bfg2v37msal0qHUE16U2eFoWX1P3eW9vpL2VRA9tdJpHNGmmROu%2BpeQif0O48P0HkES3VheyccKP8Vyd%2FLyGYPk%2BhtlI3yAesb7QiQmcr84%2BCwt%2F1l1m86fBlzFII%2BRCfapDNreDvcDGCDPKKZ0&X-Amz-Signature=66f024bff8f55202054decbc51612b571e5f2e23b12f0e22fd7d12d8473c1192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TATWHGO%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzQHrrdJjI02915GR9xkd6P8KH9zhyfFHE90t5SWDFwAiB%2FhhNHX5LdTijBe%2FpDc51vQv1Q6%2FU7MFBRyUOcAjnHMCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuY1i376BepFYktJBKtwD6Sz9utkg%2Fqmo2lYRFUmCg93AfTONX2QLFz8ZzzdtounTtFop4M7IWs3jEpJOTlMJqXdNjQJa3iaZ9sajIaTnCwuM7yU9tsY%2FnkZFTckjCtzJ1VVpjQ40gyOoH1XrgbZdHG1SYZSRAmLyIE%2Fr3VSSHvm0u6uokSDe%2Blst69XebEGE6XWMufPRlQahNW27BkNq%2FWIfl2xL0nRGOl0lCF6%2B5odBDDWQb%2BI8LYyyjDRmiTdzyPxdr98hS8BZXTXavsv7CyggTO4zw3EaFw5TgOqf8GPFZzPsq21dIBIgwTmixW8IskWUd42Mxy8mZULsm5SdhfmBcP%2B%2FpTSviL2ZFjaZOkEK2YSE5xVObVPgAUNU4ad8jEx4PPwu2f1flt5ccAhbbvnv2zs9MpNHsKuOEwos66lPDVKUWMWU0yZMTE1C8lIVmrPQpf72g8UdtdC1d1lKoHX1C7biZ%2Brqz0UUbVmehhB0kQ%2F2oYgvRrbjLKYTSv%2BN7iZlbYl0JiVTfejdmM726xD0aYokb8UjePs1Syoub%2B9CAgUa%2FTO9wEJz1SZQTXdzBBJA1hbQ25XZ%2BdObqmBzOL07eInIioUg6mvN5oTbbcA%2FQ4T2qaWYP4uICvjNYcTAWcJvj8HGx%2BfRSE0wkJaw0wY6pgFmxgQQgRSJ6O2cQm14W5QioLzEDUz%2B6Cxqb7bmH6ugf%2Bf09WWndCfemAFUhkrNO91jDG%2FpSSxAr%2Bfg2v37msal0qHUE16U2eFoWX1P3eW9vpL2VRA9tdJpHNGmmROu%2BpeQif0O48P0HkES3VheyccKP8Vyd%2FLyGYPk%2BhtlI3yAesb7QiQmcr84%2BCwt%2F1l1m86fBlzFII%2BRCfapDNreDvcDGCDPKKZ0&X-Amz-Signature=558721c5a9e62f86c87e230560d1572ecf775c218c9a1893fc3f6574f606e72d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KGH66RX%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxUJig0OiUGJVMz5ZXkZgM%2BzgnRjbRIKbeKme5uyO82QIgIu22MPSrMFs1OrWiAYF1haHfs5HtE9YNrxcobF5PXgkqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5vi9RP5tE2NDez8ircA8kFNgm7jDE6P71Q2cE87KgmlRIvqRhum4RwLIxyztVMtm%2Fn4G4vXyvE%2BlMTMPrdOb0y8QL%2FUWF6XbXQsrJT%2BoZO9MgNBb444uboOerwU0QMXRsbdngNKqR1IhR6h%2FbsU8lOQPBEVtfQpsKkvgWpTN3xVCM71B%2BT97tLimsnakkSm2PObOSQDiSzEiYQhlMeqRVU1%2FO4sX238PdcGWV7CS3iHLldu0SEr3jDZwM6UxpMx8M3c%2BziZ0%2BE1V2XEsIKbiFu7DuVk3eqaAa96pu8wAqwsEWd8ju3uHapKtC7Ftm1LQygrzGxOU6vJws0UoPHMWTob3m4f%2FDFqZ2Nhn5%2Fr67ypAyjnTRPB2K1TeaQ%2BKiraXwgFa4KfEYzUk%2FrwNB2y79uPkgA36so9KXhYJqPv%2FmZN4tcZ%2FiOm00DGarb3pL0QXjJkkAsOsna5sqxm040hWA7OIbYGVrRIbzpnMwCeKoizRRh9DRJmi57a8A4RCUbdzqQ07U3L5gOFd%2BwLx23FaLsFrIKB1dwzonsZJnN3HaaKvHHo1sQdLSaHpkleFAzLtULUyrrpqUU%2F0yP1jQpisaPre0f9hbsVH4cU7Am8ssjpAm7liViT%2FCUOVsSUgyOuhDy9zetBhd59D20MJCWsNMGOqUBo4RmERKZfDfTQFGT8kDUrujTSehKGko3Wby7JqyiuGIIaoXYUE5o77lctxkM5V7vyXKBWZ7NUlC9gZFLRt0pHhNAO914l%2Br7wOBaAql6HBak4tfoNFmDpSD4%2Bzy%2BCcA16nb%2F7SVHIBbnGHa5NVAHxAKY4Ydu4u71krDl17NR1BLZ4ArKSQGH0Hbd0L0MVP90GMnHO2JsTNwDgc%2B9sqQ4eIr8dy9O&X-Amz-Signature=71c08dea8529b9c52f87995cffea3d50f1ea1380fbd7e81a6e2e9929af0d02d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KGH66RX%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxUJig0OiUGJVMz5ZXkZgM%2BzgnRjbRIKbeKme5uyO82QIgIu22MPSrMFs1OrWiAYF1haHfs5HtE9YNrxcobF5PXgkqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5vi9RP5tE2NDez8ircA8kFNgm7jDE6P71Q2cE87KgmlRIvqRhum4RwLIxyztVMtm%2Fn4G4vXyvE%2BlMTMPrdOb0y8QL%2FUWF6XbXQsrJT%2BoZO9MgNBb444uboOerwU0QMXRsbdngNKqR1IhR6h%2FbsU8lOQPBEVtfQpsKkvgWpTN3xVCM71B%2BT97tLimsnakkSm2PObOSQDiSzEiYQhlMeqRVU1%2FO4sX238PdcGWV7CS3iHLldu0SEr3jDZwM6UxpMx8M3c%2BziZ0%2BE1V2XEsIKbiFu7DuVk3eqaAa96pu8wAqwsEWd8ju3uHapKtC7Ftm1LQygrzGxOU6vJws0UoPHMWTob3m4f%2FDFqZ2Nhn5%2Fr67ypAyjnTRPB2K1TeaQ%2BKiraXwgFa4KfEYzUk%2FrwNB2y79uPkgA36so9KXhYJqPv%2FmZN4tcZ%2FiOm00DGarb3pL0QXjJkkAsOsna5sqxm040hWA7OIbYGVrRIbzpnMwCeKoizRRh9DRJmi57a8A4RCUbdzqQ07U3L5gOFd%2BwLx23FaLsFrIKB1dwzonsZJnN3HaaKvHHo1sQdLSaHpkleFAzLtULUyrrpqUU%2F0yP1jQpisaPre0f9hbsVH4cU7Am8ssjpAm7liViT%2FCUOVsSUgyOuhDy9zetBhd59D20MJCWsNMGOqUBo4RmERKZfDfTQFGT8kDUrujTSehKGko3Wby7JqyiuGIIaoXYUE5o77lctxkM5V7vyXKBWZ7NUlC9gZFLRt0pHhNAO914l%2Br7wOBaAql6HBak4tfoNFmDpSD4%2Bzy%2BCcA16nb%2F7SVHIBbnGHa5NVAHxAKY4Ydu4u71krDl17NR1BLZ4ArKSQGH0Hbd0L0MVP90GMnHO2JsTNwDgc%2B9sqQ4eIr8dy9O&X-Amz-Signature=84df97ca9d10508b31f6dd376cbe5788e1b78978f948f2d57e22246d6e46f6e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG3FWQBN%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqfJBT7dgv2OVyVr9TGTPfOIZBFznf8zjHQXEZVPdHOAiEAmyZ5M2tSCqkwaBOIcbpUKZ4ZGfjCG8Vb0doFo8raUWcqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4x%2FlO1tUqx%2FmZWzyrcA24G%2F7c8dS8Jx6g5htbCH2lK8eH8y%2BD%2BcYvrZ9iP%2FCyOP2qfUITZ%2FzTsxPOZkEBlTaxdniNNP%2B5AsYvwrqdmzcv9ZmO%2BbUNcMbcsSGBpoYZNOc4D1EuiCfMkapWKpGi%2FkTH18T4i%2Bf73zrtlGWBBY9g8OhmZsjbK3rG3NE1%2BI2nkKsF5y3FEE%2FKRVNZpPFx6INKXNQ%2FCUxf2PHwtDW7u3xBnjYssjbAhc1VIoq7HVgkTf2w%2Fz4qM4csJfmh99tfZEjZsuihlbQ5F7v5ABBkqYVGL6zMsS8bOIur8ChxWItLAEoTWK4oMrhohnJEB83ZlaBe9vvkm7kguWAzXXADbF65RV05yL1gFX0FnGY2VNnSRL%2FA%2FqDigvhI4xiJFBMqoVPb%2BksmRi42kV7U%2BkFVC%2FMojEfq32s1lwW0l%2Bz3SI6zoBwFttB%2B967WbAOoLKooQlcByw29b1Jlml3S2Rw2KWXsaibmuoPrMeeik2A%2BPTdBFDWYa8DI%2FLXRsokenazlQmQsDsjyzxiGvvPowEbBWe2j6XWm46mkfiP7TbwwHAv%2F%2FIaK29bsAX3s%2BSA%2FUhpC1PIeXWGWtu4egCewOYIqnbmi3gIL6vRr0J%2F1oj%2FKnTTuBaK%2Bba%2B1p0QdMIFqPMO%2BTsNMGOqUBVcnvqJjsbEaQm1VZN8LBlQNil%2BXm%2FFqyskq6bzjjV7sAjnKvb14Nz3mMJFO5OJKmnbg6Mmd%2BiZbHqoyWxiu5m4b3E1K9IFXpMU6tBykmR6HfQZiyQv8y4h8%2B9Qu18OgBtnRYUSkrrr9irxm2ogAca53KN5Cx6tSPOfencluVsNM5Rjxu23mpcD7U4%2F0tT5uK9fCzTWModfQl97gOwCX0udkj1%2FKw&X-Amz-Signature=f0e50920eaf54a172ee3edc8087c84fcf2eb295ba53ab56a09f308ddae110616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

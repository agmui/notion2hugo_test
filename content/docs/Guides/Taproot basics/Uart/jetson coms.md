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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KUVONFN%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGMzsN4TdlLhh6S1sZCQ%2BRHEF%2BdUBmiRbqsWbMhSJc4AiEAuNBXQYVlZr10wzPjjryzlh642o9y99G4C3xzUSFqyiAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDE2rnqjibS8%2BzNCpJyrcA4Ik7uald098put2Hw6iG8hBNbZg%2BrBcS0P2BWcMX8MLjgxX4zlGXtJQAHhKzJBXJ69PyIQ6g4RinmQmDSDnyy5ilTujfImYQkqpSW19ie3OAKPQaqwJWLWoROy4vczKcBasKPDgEGXfOSStghBvjRHsAJk%2FoSu2Pn3xUt15K1BN%2BTTS28riCpAnRzT5qmprgiOo1TH%2BdOD%2F8b4urzk2rfFBMOUDp0Gf9UWmdNYxqyp5SdTYxLifc2jG%2F5Ec8ppnIwKXle4yhVk4nOGXOnbtfUajL%2F1lRi1v7KAflfG6aPaPT8ON4utS%2Bm%2BYdv7sgbbKEm%2F85hIl1HKAD3TechMuLOs2XzzyG9fEClmy1GyXvkOZXtDCiPddAIr1uK9NtaJESAQFOEPGotWUnI7qI67coOosXkYwqanIi%2BiRVws7sRtb1D1J3bQU8Lys6jLMPfdZpKTAupKHv%2FX3ap5ZhPSfBCxU%2FlRU8FOzyZoLQCN6%2Fj21ZLz8MI4rIPAZHfK66abhNbiuBNJWoV4pK39c2NJOZDR%2BwP6HW95JvVgSmJIfjpFHyHvnssH3xR%2Fdud23Yd3KdbM66sJ3A757%2B8TaXJcC0HoSF9HfsoIGCioeFeLJQuAy87h05l165%2FlYPqSYML316ssGOqUBgY2tS72Qc1wgrykU6azQV9fCM0yVOTh%2F0EQQMGNcoKbV0tcpot6iam%2BPOGuFW2hkCH5RKSoRUdXCrKUyjRa8hTzhkCrvxyqBTBEsR45qhyRyfEPJgyxJA1KFs2jaGf6bn91tgfSevimvd5h%2BeIT2GZBihLNb5CQ3i%2BBdftYjwJiN%2BEvJCdpBZdqxnJMMxmr3wnKErJyR8h0F6%2BF29ek24QynaDel&X-Amz-Signature=8003b0a6f5db771abb4e892d7db9c8c6d44aef71e5dc2752e564014f8b958a0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJXKNUUV%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1DXZU3MDZiA7uWjxHz71vITUZ2Tbf8Y%2FtDh9YchSb%2FAIgRRRvgLbciQTGUGO%2F5%2B5hgIWxoffHHd9BmuQx6V5Sswkq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKMLUJWa%2Beg8MhY7lyrcA0kkBVs6FIBPbaEQqSgbbT2r30MKZ%2FbPAIcpvqXjdn0ggScRWiZ16Syy3jeJPEr%2Bm4a7gtnahEQm%2Bk%2BpSPQlPG4XVRVVyM19aCKSZ1ace5v9pbrRSssc4qdspnyq29IDOjBpv88H2sSqSznNf2I4%2BU70Aa1hVfh2mDm2qqs2CiAhDwyg%2BCwA16YVYEChFNS6VgLn9vlcsLzwIFRYcjTFOTCjrZWOEVk1uJ%2FE0wVQWTKEpg%2FzQDe7CcWMjXgCzz1J75w3K%2Fo9iFZ7ifLx%2BWQzVC8G3HakVswbcDeB%2BYUuEb%2FTm7aBTbmfkhm53oa5NFAraKaVnV%2F13%2FnGTpEE3%2B6vIKEwPMEiG72H8101%2BI0VyWlbkeT89Miehqc8pAXNtPu4gD%2Fv6xIsA8n6wdIcY8sN7ef2eEA8kDu7yNQzl9HHfzpSbkPIYwRWCPIGUGwgg0GOW4%2BpbEBbhcTn32O5%2Fp%2FdWLWg7pYoSPa70BsC1g9cBnbsYpr19V4QlT%2BnyM5w50Ij72bGXqCK2RTH%2FYenKVemgHC53LFaESCSDvLlZaeRh6jKVCHtSOcPLp5WY1M1bzhH2kNkQhwXwD2W15zYRPWmUYCBGAtpFaM%2Figy6tbH2WWHg5yFOBhTOqebC6RhQMMn26ssGOqUBTekBhyB112T2izUIiHsk3oiK964Hcw81uytKqlbbzpD%2FM5PIXoXer9XKFyVoMagkjrOHP1rRMWmt9IIIveYejNL7stcf%2Bq3x9Zg5I8bkaI1HmiSf5XVdNUtlnkJN4HpvS1aivWWY8wiL%2FULHmJ3b%2BK41XhoWv1sYrIx3aFEreUV6TPmgECrzOr9V2Wu0gSMck4ZVWDJpVXJgEr26SWA4%2BD21RT5J&X-Amz-Signature=a7e452e2b1b010bf656c155024ac7143353095aba997315b4d48dad445d9874e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILZRXIJ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrEq5oy7M54rwOycYV8aliifORkHYHHjojxm7H6WsBRAiBYXwbefmLhQoteBzYb6ZI4wUf5%2BfuAAt4aXj4%2FpwqSMir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMmoAN4TmJbWyt2uJUKtwDIp8EXDP3VoOkVmo%2BmEEtw5J55xnS78xVTTOAUdR88uu43U41%2F8h%2FI2HvPoAncrXJ%2F6Dun4j2%2FeWK7QC9ddYLuGigD9J3BDluFP2iNcDHQvN1Pqy6eriMboNKbz8oNXVtN9O2ABFnQiF2QeWiWz5CVN%2Fefi%2FgQKcldxnIVEHgn5lWxPySr6BwQUyIfSsnGi3YtmWjT3VyHIXtbsWpyIOrWC3qeGr%2FNlSsdJDcwTLSaxbWB5U7uJBNKxGmEejEyqC6wk1erkuY%2FYjgwwrehBrav%2BMq42ckxAbv4Td2TYFiEHyR%2BOtlu76CJTZM6ynNChwL8719k3kkL340OctTJykdFoe5b4RK5lr3%2Bq4M%2F0TIK9u7kUSoS%2FqNI24NPSWhiYpvJ5iz%2F7ZTMhS76g5ChxSa9VGrTBNgkgFy%2F25dpWf1bo5McHyeeXXn72xvGTn2m6LW4zVDT7PobwnXAUIeVct7JJ%2FW35%2B6hDurNv%2FK2cbaECoDBq%2BqCIkwclWe%2Bs3WpZxh0SvZ8FyPB5WTfewd7NRHWcLqOuna1MxWQmRuRr7QkK1PUTuy1dKMWe4LmOBDR30fkEZ%2FmqVbq%2FvPZQ%2FNejGDWs4zO3eviHFOcUQhvPNRxn%2FLnnZTG5WiLIblX34w5PbqywY6pgFP0wDem99Z34tkCvIDwXdNfgwmJfjua7%2BufTeLLZ6GcGdCSpa%2FvEEtO0A8xr9AKJ1INJ4QoX5Dhom4U%2FrJQfYrq3hHOjiSg%2F7dAM85LL4TC7rXza2qfjzibp8Xzn6cvR6usV2mmZUjnkaJUaT%2BzabCTXMwlVhKFtveNaPQWnTsF%2FMzAOaIK43KfhsL3wdjZW7qpAbr3zzu20AgSjoMdqh59BbdQcsg&X-Amz-Signature=32ffe53365fb2b1ee32aaed25901852d3598f93935b028d49aff05b594dd1f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILZRXIJ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrEq5oy7M54rwOycYV8aliifORkHYHHjojxm7H6WsBRAiBYXwbefmLhQoteBzYb6ZI4wUf5%2BfuAAt4aXj4%2FpwqSMir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMmoAN4TmJbWyt2uJUKtwDIp8EXDP3VoOkVmo%2BmEEtw5J55xnS78xVTTOAUdR88uu43U41%2F8h%2FI2HvPoAncrXJ%2F6Dun4j2%2FeWK7QC9ddYLuGigD9J3BDluFP2iNcDHQvN1Pqy6eriMboNKbz8oNXVtN9O2ABFnQiF2QeWiWz5CVN%2Fefi%2FgQKcldxnIVEHgn5lWxPySr6BwQUyIfSsnGi3YtmWjT3VyHIXtbsWpyIOrWC3qeGr%2FNlSsdJDcwTLSaxbWB5U7uJBNKxGmEejEyqC6wk1erkuY%2FYjgwwrehBrav%2BMq42ckxAbv4Td2TYFiEHyR%2BOtlu76CJTZM6ynNChwL8719k3kkL340OctTJykdFoe5b4RK5lr3%2Bq4M%2F0TIK9u7kUSoS%2FqNI24NPSWhiYpvJ5iz%2F7ZTMhS76g5ChxSa9VGrTBNgkgFy%2F25dpWf1bo5McHyeeXXn72xvGTn2m6LW4zVDT7PobwnXAUIeVct7JJ%2FW35%2B6hDurNv%2FK2cbaECoDBq%2BqCIkwclWe%2Bs3WpZxh0SvZ8FyPB5WTfewd7NRHWcLqOuna1MxWQmRuRr7QkK1PUTuy1dKMWe4LmOBDR30fkEZ%2FmqVbq%2FvPZQ%2FNejGDWs4zO3eviHFOcUQhvPNRxn%2FLnnZTG5WiLIblX34w5PbqywY6pgFP0wDem99Z34tkCvIDwXdNfgwmJfjua7%2BufTeLLZ6GcGdCSpa%2FvEEtO0A8xr9AKJ1INJ4QoX5Dhom4U%2FrJQfYrq3hHOjiSg%2F7dAM85LL4TC7rXza2qfjzibp8Xzn6cvR6usV2mmZUjnkaJUaT%2BzabCTXMwlVhKFtveNaPQWnTsF%2FMzAOaIK43KfhsL3wdjZW7qpAbr3zzu20AgSjoMdqh59BbdQcsg&X-Amz-Signature=5b9d5e82b8d2b2f25306a1428143ac45bfcd87b65a7c924adc34cb67d576363b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJXKNUUV%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1DXZU3MDZiA7uWjxHz71vITUZ2Tbf8Y%2FtDh9YchSb%2FAIgRRRvgLbciQTGUGO%2F5%2B5hgIWxoffHHd9BmuQx6V5Sswkq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKMLUJWa%2Beg8MhY7lyrcA0kkBVs6FIBPbaEQqSgbbT2r30MKZ%2FbPAIcpvqXjdn0ggScRWiZ16Syy3jeJPEr%2Bm4a7gtnahEQm%2Bk%2BpSPQlPG4XVRVVyM19aCKSZ1ace5v9pbrRSssc4qdspnyq29IDOjBpv88H2sSqSznNf2I4%2BU70Aa1hVfh2mDm2qqs2CiAhDwyg%2BCwA16YVYEChFNS6VgLn9vlcsLzwIFRYcjTFOTCjrZWOEVk1uJ%2FE0wVQWTKEpg%2FzQDe7CcWMjXgCzz1J75w3K%2Fo9iFZ7ifLx%2BWQzVC8G3HakVswbcDeB%2BYUuEb%2FTm7aBTbmfkhm53oa5NFAraKaVnV%2F13%2FnGTpEE3%2B6vIKEwPMEiG72H8101%2BI0VyWlbkeT89Miehqc8pAXNtPu4gD%2Fv6xIsA8n6wdIcY8sN7ef2eEA8kDu7yNQzl9HHfzpSbkPIYwRWCPIGUGwgg0GOW4%2BpbEBbhcTn32O5%2Fp%2FdWLWg7pYoSPa70BsC1g9cBnbsYpr19V4QlT%2BnyM5w50Ij72bGXqCK2RTH%2FYenKVemgHC53LFaESCSDvLlZaeRh6jKVCHtSOcPLp5WY1M1bzhH2kNkQhwXwD2W15zYRPWmUYCBGAtpFaM%2Figy6tbH2WWHg5yFOBhTOqebC6RhQMMn26ssGOqUBTekBhyB112T2izUIiHsk3oiK964Hcw81uytKqlbbzpD%2FM5PIXoXer9XKFyVoMagkjrOHP1rRMWmt9IIIveYejNL7stcf%2Bq3x9Zg5I8bkaI1HmiSf5XVdNUtlnkJN4HpvS1aivWWY8wiL%2FULHmJ3b%2BK41XhoWv1sYrIx3aFEreUV6TPmgECrzOr9V2Wu0gSMck4ZVWDJpVXJgEr26SWA4%2BD21RT5J&X-Amz-Signature=d5793a7818e6856466fcfe1220bf9a8adad356d8abacb562ce617b26615f8e3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJXKNUUV%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1DXZU3MDZiA7uWjxHz71vITUZ2Tbf8Y%2FtDh9YchSb%2FAIgRRRvgLbciQTGUGO%2F5%2B5hgIWxoffHHd9BmuQx6V5Sswkq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKMLUJWa%2Beg8MhY7lyrcA0kkBVs6FIBPbaEQqSgbbT2r30MKZ%2FbPAIcpvqXjdn0ggScRWiZ16Syy3jeJPEr%2Bm4a7gtnahEQm%2Bk%2BpSPQlPG4XVRVVyM19aCKSZ1ace5v9pbrRSssc4qdspnyq29IDOjBpv88H2sSqSznNf2I4%2BU70Aa1hVfh2mDm2qqs2CiAhDwyg%2BCwA16YVYEChFNS6VgLn9vlcsLzwIFRYcjTFOTCjrZWOEVk1uJ%2FE0wVQWTKEpg%2FzQDe7CcWMjXgCzz1J75w3K%2Fo9iFZ7ifLx%2BWQzVC8G3HakVswbcDeB%2BYUuEb%2FTm7aBTbmfkhm53oa5NFAraKaVnV%2F13%2FnGTpEE3%2B6vIKEwPMEiG72H8101%2BI0VyWlbkeT89Miehqc8pAXNtPu4gD%2Fv6xIsA8n6wdIcY8sN7ef2eEA8kDu7yNQzl9HHfzpSbkPIYwRWCPIGUGwgg0GOW4%2BpbEBbhcTn32O5%2Fp%2FdWLWg7pYoSPa70BsC1g9cBnbsYpr19V4QlT%2BnyM5w50Ij72bGXqCK2RTH%2FYenKVemgHC53LFaESCSDvLlZaeRh6jKVCHtSOcPLp5WY1M1bzhH2kNkQhwXwD2W15zYRPWmUYCBGAtpFaM%2Figy6tbH2WWHg5yFOBhTOqebC6RhQMMn26ssGOqUBTekBhyB112T2izUIiHsk3oiK964Hcw81uytKqlbbzpD%2FM5PIXoXer9XKFyVoMagkjrOHP1rRMWmt9IIIveYejNL7stcf%2Bq3x9Zg5I8bkaI1HmiSf5XVdNUtlnkJN4HpvS1aivWWY8wiL%2FULHmJ3b%2BK41XhoWv1sYrIx3aFEreUV6TPmgECrzOr9V2Wu0gSMck4ZVWDJpVXJgEr26SWA4%2BD21RT5J&X-Amz-Signature=f3c8b8da2593ee467c56b0341c070ce0db54b40875f04cf3013409dc56d4b9a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HOHTM75%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExrHP8787Manx4tNQhtC5b%2BEJLimo7wNrPbiKLpw6FUAiEAvR3E6fLlIs%2BzGtck%2BhWDcBAkPMzO%2Bi3AZFls2MS0Ok8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDLOH3LGEtNgFExoafSrcA3vIg4hyOqWCbRuTUd5Cec8JVKreEDpfVQdJ%2FjvIgNqDBk2ccLjA2eUtAduKKyxX%2FW0%2BWoriXU0DBRj5514LXIb6Czpuke6q88zAwJ2f3e5pwcJh6BCbAYecves3VvD6zByM94eMRG85Q1zHO0aB3pWIM8s1XynfTUXjOA6WVk20%2BZ20jWke5il88QCrVmIIHxeOxHZRptfpukDR5%2FeLowAY4B1XGItYl7W412cVKhg1QKUKxsSyQh7KXJWjNMXXCXTt3ljbeAF%2B1SicQ%2BLc9dNg2mQaTA2ELRUTZrBTggkw2Fn7DqhEhcjviA8LQU78%2FvxWb4jBGeIONXBWm1qOx5PmMDV%2FQ14HHng3pZQT3ugCpQUNSOCdmqybvOeKIMpmRlXkDcPUovHG46JvVTIuav6Ryl40UVuspcGIvYUsOh4maY2YdXexev7XAdLGBsTbzaDYXp7ffRbwUWObjNFmnaEN2CJpNqJc54s0xuMAQCiEP7lgo%2F0c0xvLCrowtSz5qShfj0Wy39MkVyzlV9ScPf9wvFq%2FbE6%2BKxelVu6hksNGlMGGxtp%2BpE%2FJtF8YsEpYJMbkwX3SfVmggwz%2BtdhG6WYJ%2BPopyzZvPO9II9X7V40GzLatHhPEsSmKkJ0pMJf36ssGOqUB912m7X9jx6gF37%2BaN%2BrQmM4zaqRb9J3CUN1L5Wyuu37t9s4eazFUwu5yjLC2YmgimH5SsFL%2FedSunki9qQa1t57Su3N1H2hhsluXPOesuVqUnRlyGD34uY8Ns%2BxJHjdoUTg5lkeQoBCHqkS%2Bfq89KFAqELQk2W2MLGyMgtexsmbC7SI5cq8qbjJTSbjVBV33AWRWld9Eqf5RZ4k6ENdUMSrtr9dJ&X-Amz-Signature=e8ed7217550fac7c937b822ce0f115f4dcd2c9bd249de55ca72a9f067bc90ca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

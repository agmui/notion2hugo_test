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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2AHP24%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJ%2BVtGL8CB8viaO5S18a8GYLw8wtLO2uZz5UZTPF5UrAiBNh57%2FZPxy0mJEWPa6bE6NjMezuNztwOIx9mg7xL0A5SqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN7fj6M4LtAEBGYwDKtwD1j63D%2BWSWXAj2BHiq74qHY9cN7LJ%2BiPGqAHQyei80ztS0cbDTYIs900XI8F62GWKGsGAWBm%2F5RRgpzn%2FNxGwA0OsRK%2F2yXfmSrcivupzH5FwlCQio0sxXoivFJekJ51YJY9alp7XGBKtZVyJ9B0NuRyUo%2FcbtO9laY23FJdYq87tFGMrzZMUMoV2OCLaA6R6EWu1auLlNom0xWGzcGjipB%2BDELy0r5%2Fo1DkGe9epFXvJzYedNthlRCzMDOqA0ghkseTMbKNSiVITDFeJIW3EJVeI0Rcl0Nef493prGrHsTFiZDRKslJ7bpvbuqneUiE72JDrra8xuIdUo1X0LtjCj71YWklmKi4Oj6tUPRj35sL9cOa4WdhObE6ta1l6X99E0BBVLyK971JopzsCOzj%2F92IOc6snM0NrtTT6sYXIS5YvsuwWS5v36X8xMOpjS9yN67qjmTMwtEHr777VuWqYtrG63ufz4skcMc0bMFHIOPA4DlbU%2BtwPgkAq1Hm%2B0ibg0RfrryInwYwEv90zJ8mtsXkofPAo6rnUrMOt1yMvTQA%2BoC7PtdPbAW3ALR%2BufoF5SfiwvKRiVdsT6TkNOAF%2Bub0Xp5%2BvKtsyk6s52Sj4WWnKOa4uULVRMMlGCXYw7c%2BiyQY6pgEI7MsEIpbtw58Z72Ux8SUN5PH8vziCRJKjKdgGgL7%2FLjBeIfWI3lsJg%2F%2BpFDNh3odgKGnTDXbQ%2Bn54YN35f%2Bhqc%2BH1DP5YPFajxeXD23rcbh2JWFhs89LMIHqTrzbAT4v9W2U5r%2Bv5dJWzGPooUD6baKpdpkMmzl4G3G%2FtyzsyccG3WpN2TjjyTDwK%2FMjVFyE0zvjOcgF%2Fn9e9puoyNetEjrbAbYxR&X-Amz-Signature=cb133bfff920fc6643bef17c9e4a88fecf3001ee43d88fcbac111c9d06a6018e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSZJPMSF%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIZ4zKgxcePt%2B6aLbjIroUDRxmErHORc4eoVsipismpAiBj6SfYALigcVgjWSgSMEut5FZWTjVW5KHYm7%2FMy7tcQCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsxSbgAh0Tf1mee0rKtwDg1tmlFQ1RVmdifCm0%2FiQwBzBHy%2Bpl4v3RdYL2vqo2QUPZ7l2T8Cl1A5UJ0LkMPUigXJZkbvf5VDQYxYsS9KImD1qabaVJ6Rm9HqaVoe%2FX3wDTnFOKU5pd%2BqEHAQp1K%2FtPW8gmiZegiX%2Ba6GqEpOgg1Eq6IcJ5pMndi6LjlnY0L65zz5WzGKGkrwe9MAAQlsdt%2BASTW5szSr9%2B3ZtwA71e7J6vrLNW21hUc1spgN4VqPBElCPkHGv3YTOUyWzjVqj7IrqzmPm5RN3IuCP0CT8UIFWc8qGf0mfUCI5xfGQq89lstSrvvS0voOcBwaMNe906omL6%2FbAbtNzlcJ4bcudBzd%2FwHFen9HUhpe8YSo4NtDbcqswcXiTerKidduKIs6Qvfeabe%2Bydt0%2BjV%2By0TVGLf2G%2FrAtgGRlRWEqXlQTobdtZaWeze6Is%2FtHfdWcwdHs5Zdnj63gfan9PGg%2BfzvX0Fm7IU7iI2%2FYLXioTsWEVI7aYo9b2lQGthzudFtveWkt9RIJyOorUFukXwbZGT0TfRnLn6wUMGH9VQEzJ1R6K6%2FsUPOtiQHGHCCQXBkvgAx3AmY1bcMsGzW0gmag9lwMNrkrXdMccCasVyAXWXpWWxWhSJuXTQZZPXJGMrMww5ijyQY6pgG31feB8FJmAiHFeqJq4zv28pT9Db%2F8W74rwGxu%2ByHrJPlVSuyrlWaWfq5eZ0PMi971ZDp%2FEL5Q%2FkleavEZ5eWIZFetkr3%2Bk4Ad266Vb1VOQYyLpUWCtB7%2BV19Am8KrbxTJ%2FHRxVl0YAXxhzIrQO1zgty2o84ID0a4tjwRzWFO6lLsm4E%2FCgUUtZjjGZmnyDJ%2Fj2ol2Y8E0RaGuPPG%2F7SfhQkquzuac&X-Amz-Signature=140ff12de6dda2613c5011689125e5f09bb8784cfb296c2215c48bee7f352006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLDAMWC%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICttKSw1FD18lj3qnMKvhWu3oNXxRg2lobqTUVL2vS8zAiEA3wqHDSSmX7ZPOrDADs4IvzbIYasZbIkuOfeUNIttwrcqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNk7add%2Ft%2FqsgrB%2BPSrcA0E2%2BPNUXyibaYTrmEAZjR6y8H2ONdsl2445v%2B65pEjZHXizCvi%2BnV1CfRQD8JkvJp3hByalT%2BFF6DwKx%2FNPW72tb3ZJUyG50pSmxBg%2BrSq8FoLHxAq8lHb6I5rUXr5t%2FsqXqX%2Br2ioKVyRL1AhPGKwhVPuxsw%2Bh%2F9zvm%2B5vCsp3lrarWxz%2FTXIuQLQr%2FO40nZC3WqOZqa1lYnDBE5snhdNVwBDnClvKgcZxwsgFl8xIlwGLbK68eXOdyWF9R9535KhAXdsb7Tr0F7H5PnKVMQFJCUR1%2FBwyfEiP0f7ZWSAJEyH%2FdUk%2FFxzLWdoW2DLFOydUB2M9j7MsfXPveprqhaHdDQmaA%2FRjEq6j6ANalMo41HFUtCejuVW%2BHXM3UeGIEVrCw464Xt8CKtK4d1Dy%2BaiFFJdJPv5ICjitCOlB5BUmHlCAToHqm9xqYsTQDMrKOQ7jVdKFct%2BFhgjjqQuke2Q78Uh7Z06j3fFq8fKOe5yTA4AFjLKJVeUWlv2tAxYjtgzz4BFUVWFZQqIt7PTukT6Ykz6w1Tt72HqvRY9nCE2725vmiDT%2BgPfAMyUNwOcuijMRrb0bwza7r6YGiZbgLK2lOlLnFcGqKMod5ER%2FI%2Bu8eiGSKLnLTPpOzzaqMObSoskGOqUB2AqJ2C1o1Hvk4sF4bIpJe8WupKEH6HnRISwdojGHsbE8mQXdEZS4GzJamX6BEEUPMND6gsVvxlArr41w%2BR7%2BZ8kW28oK67P%2BXUgbzEB%2B3U1BwmyRap%2Bsf2Q5uOyaS%2FA1Mri09ci2ZaWqWF9IiPmJUORLlSBVA6hK1A4Mi8PHO3wC15IMEXjvk1HW7FsFv6OKYC%2B3LYvU1WqFx2T6VGMb7gAz3HYM&X-Amz-Signature=9415a5c76ff948bd9953a34282d7e565cc6e7265434c3fe3ad9ec7761cf8375b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLDAMWC%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICttKSw1FD18lj3qnMKvhWu3oNXxRg2lobqTUVL2vS8zAiEA3wqHDSSmX7ZPOrDADs4IvzbIYasZbIkuOfeUNIttwrcqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNk7add%2Ft%2FqsgrB%2BPSrcA0E2%2BPNUXyibaYTrmEAZjR6y8H2ONdsl2445v%2B65pEjZHXizCvi%2BnV1CfRQD8JkvJp3hByalT%2BFF6DwKx%2FNPW72tb3ZJUyG50pSmxBg%2BrSq8FoLHxAq8lHb6I5rUXr5t%2FsqXqX%2Br2ioKVyRL1AhPGKwhVPuxsw%2Bh%2F9zvm%2B5vCsp3lrarWxz%2FTXIuQLQr%2FO40nZC3WqOZqa1lYnDBE5snhdNVwBDnClvKgcZxwsgFl8xIlwGLbK68eXOdyWF9R9535KhAXdsb7Tr0F7H5PnKVMQFJCUR1%2FBwyfEiP0f7ZWSAJEyH%2FdUk%2FFxzLWdoW2DLFOydUB2M9j7MsfXPveprqhaHdDQmaA%2FRjEq6j6ANalMo41HFUtCejuVW%2BHXM3UeGIEVrCw464Xt8CKtK4d1Dy%2BaiFFJdJPv5ICjitCOlB5BUmHlCAToHqm9xqYsTQDMrKOQ7jVdKFct%2BFhgjjqQuke2Q78Uh7Z06j3fFq8fKOe5yTA4AFjLKJVeUWlv2tAxYjtgzz4BFUVWFZQqIt7PTukT6Ykz6w1Tt72HqvRY9nCE2725vmiDT%2BgPfAMyUNwOcuijMRrb0bwza7r6YGiZbgLK2lOlLnFcGqKMod5ER%2FI%2Bu8eiGSKLnLTPpOzzaqMObSoskGOqUB2AqJ2C1o1Hvk4sF4bIpJe8WupKEH6HnRISwdojGHsbE8mQXdEZS4GzJamX6BEEUPMND6gsVvxlArr41w%2BR7%2BZ8kW28oK67P%2BXUgbzEB%2B3U1BwmyRap%2Bsf2Q5uOyaS%2FA1Mri09ci2ZaWqWF9IiPmJUORLlSBVA6hK1A4Mi8PHO3wC15IMEXjvk1HW7FsFv6OKYC%2B3LYvU1WqFx2T6VGMb7gAz3HYM&X-Amz-Signature=db1044c3cb7696431c9063d1d562ef730c0d29013683c29a49d75a5f25425628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSZJPMSF%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIZ4zKgxcePt%2B6aLbjIroUDRxmErHORc4eoVsipismpAiBj6SfYALigcVgjWSgSMEut5FZWTjVW5KHYm7%2FMy7tcQCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsxSbgAh0Tf1mee0rKtwDg1tmlFQ1RVmdifCm0%2FiQwBzBHy%2Bpl4v3RdYL2vqo2QUPZ7l2T8Cl1A5UJ0LkMPUigXJZkbvf5VDQYxYsS9KImD1qabaVJ6Rm9HqaVoe%2FX3wDTnFOKU5pd%2BqEHAQp1K%2FtPW8gmiZegiX%2Ba6GqEpOgg1Eq6IcJ5pMndi6LjlnY0L65zz5WzGKGkrwe9MAAQlsdt%2BASTW5szSr9%2B3ZtwA71e7J6vrLNW21hUc1spgN4VqPBElCPkHGv3YTOUyWzjVqj7IrqzmPm5RN3IuCP0CT8UIFWc8qGf0mfUCI5xfGQq89lstSrvvS0voOcBwaMNe906omL6%2FbAbtNzlcJ4bcudBzd%2FwHFen9HUhpe8YSo4NtDbcqswcXiTerKidduKIs6Qvfeabe%2Bydt0%2BjV%2By0TVGLf2G%2FrAtgGRlRWEqXlQTobdtZaWeze6Is%2FtHfdWcwdHs5Zdnj63gfan9PGg%2BfzvX0Fm7IU7iI2%2FYLXioTsWEVI7aYo9b2lQGthzudFtveWkt9RIJyOorUFukXwbZGT0TfRnLn6wUMGH9VQEzJ1R6K6%2FsUPOtiQHGHCCQXBkvgAx3AmY1bcMsGzW0gmag9lwMNrkrXdMccCasVyAXWXpWWxWhSJuXTQZZPXJGMrMww5ijyQY6pgG31feB8FJmAiHFeqJq4zv28pT9Db%2F8W74rwGxu%2ByHrJPlVSuyrlWaWfq5eZ0PMi971ZDp%2FEL5Q%2FkleavEZ5eWIZFetkr3%2Bk4Ad266Vb1VOQYyLpUWCtB7%2BV19Am8KrbxTJ%2FHRxVl0YAXxhzIrQO1zgty2o84ID0a4tjwRzWFO6lLsm4E%2FCgUUtZjjGZmnyDJ%2Fj2ol2Y8E0RaGuPPG%2F7SfhQkquzuac&X-Amz-Signature=77c29dea02957f28be1f40296c198debdc5c3b7e57da7cb492a06a05aa9c7108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSZJPMSF%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIZ4zKgxcePt%2B6aLbjIroUDRxmErHORc4eoVsipismpAiBj6SfYALigcVgjWSgSMEut5FZWTjVW5KHYm7%2FMy7tcQCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsxSbgAh0Tf1mee0rKtwDg1tmlFQ1RVmdifCm0%2FiQwBzBHy%2Bpl4v3RdYL2vqo2QUPZ7l2T8Cl1A5UJ0LkMPUigXJZkbvf5VDQYxYsS9KImD1qabaVJ6Rm9HqaVoe%2FX3wDTnFOKU5pd%2BqEHAQp1K%2FtPW8gmiZegiX%2Ba6GqEpOgg1Eq6IcJ5pMndi6LjlnY0L65zz5WzGKGkrwe9MAAQlsdt%2BASTW5szSr9%2B3ZtwA71e7J6vrLNW21hUc1spgN4VqPBElCPkHGv3YTOUyWzjVqj7IrqzmPm5RN3IuCP0CT8UIFWc8qGf0mfUCI5xfGQq89lstSrvvS0voOcBwaMNe906omL6%2FbAbtNzlcJ4bcudBzd%2FwHFen9HUhpe8YSo4NtDbcqswcXiTerKidduKIs6Qvfeabe%2Bydt0%2BjV%2By0TVGLf2G%2FrAtgGRlRWEqXlQTobdtZaWeze6Is%2FtHfdWcwdHs5Zdnj63gfan9PGg%2BfzvX0Fm7IU7iI2%2FYLXioTsWEVI7aYo9b2lQGthzudFtveWkt9RIJyOorUFukXwbZGT0TfRnLn6wUMGH9VQEzJ1R6K6%2FsUPOtiQHGHCCQXBkvgAx3AmY1bcMsGzW0gmag9lwMNrkrXdMccCasVyAXWXpWWxWhSJuXTQZZPXJGMrMww5ijyQY6pgG31feB8FJmAiHFeqJq4zv28pT9Db%2F8W74rwGxu%2ByHrJPlVSuyrlWaWfq5eZ0PMi971ZDp%2FEL5Q%2FkleavEZ5eWIZFetkr3%2Bk4Ad266Vb1VOQYyLpUWCtB7%2BV19Am8KrbxTJ%2FHRxVl0YAXxhzIrQO1zgty2o84ID0a4tjwRzWFO6lLsm4E%2FCgUUtZjjGZmnyDJ%2Fj2ol2Y8E0RaGuPPG%2F7SfhQkquzuac&X-Amz-Signature=af8207d5ca5b706295b127672aad92f776d35c687bb86d4c52b1971cad84efe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNSBXEMM%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgrtBPYcBrNJaKofekZP0gyQQZG4Zy1Tlui5EPUU3HHwIhAKj%2BSwt34GL4lRxyFAdDIE4aoGD28p%2B9MtFBcCoHOM2KKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwE0to5o%2Bq5GJAAdogq3AOg6FAAYvR9bpWJ0UKEOti29nAlEMFDoC6Q6F8nP249O9qVVvOKtlKv%2FxKy9MHnoHg8gFNOuaF3%2BDebnFTMvHpBPWg6FaMhHDGAa9DPCQxBpwP9493vZWrKSoa%2BpDuDDS1UKpMXZCxPb7SmZxpinQ5ymhzszKe1X1pn7sKsJu%2FEZ5OmKiJxfepiB58krYFgduXHFEb%2BZyk6dUmptCPr%2BVNfkeqAvlXmDxlhgWzbzi7LDAatTZy3dIspfOlouuaaziJHSosbwJ5USyCDBVfs8VEBr%2FaHt6onbiOdA5Vsx99op58B2NKIGQIp4t6C9HCSQ%2FV0UjMEdXw28LtM49mBYg%2FqWQqFd72GGLGMTXAFalTPB7SDwcp0p9XZPLTy3LRuNacWOyedFvAwHDefUjPDKNfp84QkCDwtay9YS3xQt1fXvKtQAXw2u4TAw8TpuzNg7MNDyxSk5mlZ6MVkoK3hZ3ETNOZjaUfByQZKoslTgrWP0G%2FetDFcHQ5gypH77cpOGcGTsbZewwpQtU6cgp5s7aTeSRYh35hd%2FTuEkqIwuGMUMWHFJSK2Eeu65bVINVONx0n071qdsLB%2Fxh72Pw3DG9JMr8AXFyKkWI3%2FDk7Ak05GZPIAbj9%2Fdg8zqPgjNDDwmKPJBjqkAbl44Nc7%2BHLzpJpl5fCDDTH%2FaeqPArVP0q4n5PUtqm1TFhO2KJ7%2F6FCg8yL3PR8DzVWUp0xH5kyLB85N1v0A06gULvm4HWtzY7H35MbsG5uk60oHDZKtsw6zxJE9oW2ReLJAfNY%2F6PsXoem0f4q9aDfhRGMOqqYo6TPRuU817g4e2v%2BUtIVxoFPayIO%2FCmYUnDrvI3NCuo1MlMsY3SAlXZmAGxVa&X-Amz-Signature=28ea793e60b4432f943b4f52a27fc4fcbbcab25c2819af3bf926e18d16674740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

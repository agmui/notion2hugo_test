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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWSATCH4%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICo714YclK6A6Lwcbq5OO0U0UABr%2FRSD3MhACq%2FLHVyYAiBIpwQBsLF8I9Jo1AdKP4AoacsJPPQvTDxMSayL5bqNYyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbm6TkR%2BLmfewI7SDKtwD7S2dLJEDh4zueol0cOiHsvrKXboSoecDep%2FhGWhkOBJU0wt40cFumEe%2BUJxfnBta0RUD6hcm5d6Og%2FsaicDMWKemLpJT2TwemQfB4Jam6wzmiqW%2FnUM5DezOJ3T%2Bl7WZjdzMd0QYxZlyXHR7iLSy83i5rD5PNF1YFmUHyHID1RgQBT6RZaCfmKI%2FFK%2ByaLcBwuuDrZ6%2BCs7zY0cJiJLwwUDB%2Be48h762G1s0xziOibmDqdmhdDbwvm7uSXlWK1FU9p9JvI6%2BH3Rj%2Bj%2BMvxUbip%2FFoGnXHrXiZ%2BWzwNl3%2BkEjfcTABxzybz%2Fs7BXPQZM1%2FkWIt4w2edD98%2B1xYyQaIl9RX%2BIqcoulPotH6M54EY140kaPPXbMIl99BP8Ie24ZxEYJc0sxvr2sbGBBlHy7vwkU8SVijMnLrG%2BQtm3JNxIjIGBdy7ZrEcte%2BuE%2F%2Ba3DW9WDGiOL6%2BGZJDev4I0Xopy5KNGugZciQgzoz5%2FtS18y6LisHQb58n7ChKHh7SCjbqzkw2iSixTs7mnd6UzZpObDo4hJVb2DExYwdO%2F9hMF4Y4uFaWDyHfB2G9iB1HdtrtUkxADtf9FadV3EsZQZNb2Szn98P41q%2FsIjGSa2TgipHLUqDJwTVPziVs0wxqmhxwY6pgFnqA7vUYx38hDrVqgK8%2B%2F5o1mkAq1ERPYeA%2BCPUlBn42w3XqDI5v14a%2FSGV5ew0LLYz4WkvzJDhjuvpokbOgoN5T4vbFhNC13nylsEpRG9sE8v1ddgzS2xqra7%2F3NeTXr%2FkbqFRwlFLoUC37tYafiPkXh9ePXJn9a8GWQKy51KbhrgetWpjdApE6rqGkHSKp94JMeQlxe8QCfllba%2FniTDRxMtxqva&X-Amz-Signature=f74d887b5c375f0b58495fdca4700a506a9bc72d6f2bc1596d72e3fcaf7edfda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664LEXEA2%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD7W1oWXpf%2BPCVxkkMLE0BR4yg2WZTLY9LdusBjsP1viQIgFix%2FO0q6B3%2Fo0VL7mW5n9HUgajswheS5uaF1DU6F2q0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHog%2BLCOviNz1cBpircA7y%2FIXvuIuLOnsyspsr67vq9Isf1qEJ1ikioaUG964I%2F6tWAiOCeMqzSjQ%2BUDYn3odnhuflztxILXa%2FddRXZ2%2B%2FYPW2dEnCbuUfE4StETUKETwC1bUEfB8nvIpbt7TOJMS54zQrlhOJCNI9ZRoZw4iOyCTdkK%2FtIyeNruaLxkDpIWAmM0SWsJ0lX5O04NK%2FAi9wsWk7sB7GXcXzBJ5G9xiX3AmJK1GwRrNH0ZZozukukJbxXlTINBqqt00%2F%2BYo%2FWgfQstWhYMsDmZFmO7yt6RPL2Urqu9E6dLi2coxQ%2F95mJ0fIIDWDlkr4t0UzE%2FQr%2BR6j4AblvPi%2FpoZ6PfV6j9x3Iru0hEbKYxUZN9I2T593BUJKrJiIajWQj90JGSZC%2FanLCx51lBzNzIq2Hys23MNKwcXM99NobZzQ447bRWMY2yO05HW75ixsPQLnJIsurcc%2BbBPx2qdrKcKtYIqZ8hlkSdV9UYgvnMOYQ%2B7z5l2muTg6eLRTuHfu6pud9VfS98LkHpagYKj2jCcMqte5V3Kz549TWbMcxOb%2FGZ7bFjLqfGjH0%2FVo%2BCwzuI%2BPUnM8dldaotu0nxOX4Y1b2a2qE4LXww%2Fi0cVH3l0gE9Gcz9T5vXi34uINFhitucHkaMIeooccGOqUBJ1uerMHs%2FDZLC2OvFsNAy6n61BkOym0LjuJlCitYisxnB5F956QHGMCFMhc5SE4b1psZDodafbnrYOhlLNN2MMh8fyT27hVWoQ0f1IKY8FNvzBQNpTKnyngZPCBVm%2B%2B8iUlsIYtvS9Gxh%2BjHXJzlGy%2BrN9TBvUnwI9xTbTBqtEJksQCdl%2FH%2FG9AB6BRH4TpbXPTspE9c9cQRDfKZZhcr3wokSfmw&X-Amz-Signature=a9f0e426b3585c62048c717009ea63532c68e9777bd1115ecd1fba59e41ac614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TABMR42M%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDIvpM9hg1%2FehFGquso8zbCNyFWMGDBtzW130UfP24QZgIhAKqg75EliJp1XVT1eaTH3HhXmhDQUrymnRJrfj%2B%2FHs%2BMKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGua84ynq0XNg3JIoq3APAgfJqYvkcKPzlL7Khb7fd1MjYobRGYg78caDGs2TCXs3IbkrNvMa%2BJeVfdsJCGZ1%2FufB4FkIStGG8PnymuZ33RAUappYU%2BNAK5Ce6ZpwjvlPmJjmAeqXMbAguyOyFNO9dKmu1rcISzbLuZCLJAKZdwRyizFqa4J302a%2BbgQ7e1BFmpMfUaZIyFcDy9MdOvsmXunJ3ATz9m2vqsLJD%2BgOA1qT6Ab52XpCOqNoxjotyPdb8p4%2Fhqqj4b107jZo27rzuHtds%2BL0arI1UXEBqZdTsRSo4%2BH0QMN0sDD7u4pd5R3hPaVcrCymw5EWmuamcg3KiFc2P6NvI3ozpr4LaE1It0Ucv%2BBfuj3jkuAHcIQppYzTO6AGJdGb7IjDu%2BQq2FdGiU1krgPycxMkGIMHpWKNeR2GrknQx3UHxF%2BSF3weW2BT0VpxzEfN5fOoe3UAR3mrg5fFZUkMuLr3ljtq9c2COqS6IrMdXgm461fQXwgtsl2jPfiJDYqDxotLXK1ahv7%2BQIUENf5jyQgidJoJse9bz5qS10lMz8iDZKqhoFFjLsBNXos9vm6wufViYQWfEGGqS%2FLxvRiE7nIDPhzubMsybJ%2Fz7%2FIwk5%2FiINVOKB4SVEae%2FBYr2PL4c%2BO66zDCHqaHHBjqkAcjE%2F8%2B5psdQqw7WD5eJPas2rAMWprsq3mE%2BRhAxIfmRrKV0I9q4G%2BdcHhNn4tvzpg5HQP1z2XOZArCZ1KU5pl2mSD%2ByOi%2BJT1te2HGO%2BiOmCBkstu3nNhB%2F%2BQSJVLRqP%2Bcwyf3lZOdAafn6%2FlB2IFPMP7pHYPsPHjAlJJE0O4GEPTSoUfD8S%2Bb7dSbWz38w%2FysoHYU2FBiqbqfCjx%2B4Ov0UiaQo&X-Amz-Signature=28a45f4f2dd6582fb101cb90919cf55b7c94af6df00815266f3e1260144db7ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TABMR42M%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDIvpM9hg1%2FehFGquso8zbCNyFWMGDBtzW130UfP24QZgIhAKqg75EliJp1XVT1eaTH3HhXmhDQUrymnRJrfj%2B%2FHs%2BMKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGua84ynq0XNg3JIoq3APAgfJqYvkcKPzlL7Khb7fd1MjYobRGYg78caDGs2TCXs3IbkrNvMa%2BJeVfdsJCGZ1%2FufB4FkIStGG8PnymuZ33RAUappYU%2BNAK5Ce6ZpwjvlPmJjmAeqXMbAguyOyFNO9dKmu1rcISzbLuZCLJAKZdwRyizFqa4J302a%2BbgQ7e1BFmpMfUaZIyFcDy9MdOvsmXunJ3ATz9m2vqsLJD%2BgOA1qT6Ab52XpCOqNoxjotyPdb8p4%2Fhqqj4b107jZo27rzuHtds%2BL0arI1UXEBqZdTsRSo4%2BH0QMN0sDD7u4pd5R3hPaVcrCymw5EWmuamcg3KiFc2P6NvI3ozpr4LaE1It0Ucv%2BBfuj3jkuAHcIQppYzTO6AGJdGb7IjDu%2BQq2FdGiU1krgPycxMkGIMHpWKNeR2GrknQx3UHxF%2BSF3weW2BT0VpxzEfN5fOoe3UAR3mrg5fFZUkMuLr3ljtq9c2COqS6IrMdXgm461fQXwgtsl2jPfiJDYqDxotLXK1ahv7%2BQIUENf5jyQgidJoJse9bz5qS10lMz8iDZKqhoFFjLsBNXos9vm6wufViYQWfEGGqS%2FLxvRiE7nIDPhzubMsybJ%2Fz7%2FIwk5%2FiINVOKB4SVEae%2FBYr2PL4c%2BO66zDCHqaHHBjqkAcjE%2F8%2B5psdQqw7WD5eJPas2rAMWprsq3mE%2BRhAxIfmRrKV0I9q4G%2BdcHhNn4tvzpg5HQP1z2XOZArCZ1KU5pl2mSD%2ByOi%2BJT1te2HGO%2BiOmCBkstu3nNhB%2F%2BQSJVLRqP%2Bcwyf3lZOdAafn6%2FlB2IFPMP7pHYPsPHjAlJJE0O4GEPTSoUfD8S%2Bb7dSbWz38w%2FysoHYU2FBiqbqfCjx%2B4Ov0UiaQo&X-Amz-Signature=e20e9a6684dc707d9920e6f63f2e4d4c17a213755e94ccf139a3973fe0a05d24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664LEXEA2%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD7W1oWXpf%2BPCVxkkMLE0BR4yg2WZTLY9LdusBjsP1viQIgFix%2FO0q6B3%2Fo0VL7mW5n9HUgajswheS5uaF1DU6F2q0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHog%2BLCOviNz1cBpircA7y%2FIXvuIuLOnsyspsr67vq9Isf1qEJ1ikioaUG964I%2F6tWAiOCeMqzSjQ%2BUDYn3odnhuflztxILXa%2FddRXZ2%2B%2FYPW2dEnCbuUfE4StETUKETwC1bUEfB8nvIpbt7TOJMS54zQrlhOJCNI9ZRoZw4iOyCTdkK%2FtIyeNruaLxkDpIWAmM0SWsJ0lX5O04NK%2FAi9wsWk7sB7GXcXzBJ5G9xiX3AmJK1GwRrNH0ZZozukukJbxXlTINBqqt00%2F%2BYo%2FWgfQstWhYMsDmZFmO7yt6RPL2Urqu9E6dLi2coxQ%2F95mJ0fIIDWDlkr4t0UzE%2FQr%2BR6j4AblvPi%2FpoZ6PfV6j9x3Iru0hEbKYxUZN9I2T593BUJKrJiIajWQj90JGSZC%2FanLCx51lBzNzIq2Hys23MNKwcXM99NobZzQ447bRWMY2yO05HW75ixsPQLnJIsurcc%2BbBPx2qdrKcKtYIqZ8hlkSdV9UYgvnMOYQ%2B7z5l2muTg6eLRTuHfu6pud9VfS98LkHpagYKj2jCcMqte5V3Kz549TWbMcxOb%2FGZ7bFjLqfGjH0%2FVo%2BCwzuI%2BPUnM8dldaotu0nxOX4Y1b2a2qE4LXww%2Fi0cVH3l0gE9Gcz9T5vXi34uINFhitucHkaMIeooccGOqUBJ1uerMHs%2FDZLC2OvFsNAy6n61BkOym0LjuJlCitYisxnB5F956QHGMCFMhc5SE4b1psZDodafbnrYOhlLNN2MMh8fyT27hVWoQ0f1IKY8FNvzBQNpTKnyngZPCBVm%2B%2B8iUlsIYtvS9Gxh%2BjHXJzlGy%2BrN9TBvUnwI9xTbTBqtEJksQCdl%2FH%2FG9AB6BRH4TpbXPTspE9c9cQRDfKZZhcr3wokSfmw&X-Amz-Signature=a655cc192977f52820cfc3328b02b7e7574f32e89f597f5dd62bcb2390e79cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664LEXEA2%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD7W1oWXpf%2BPCVxkkMLE0BR4yg2WZTLY9LdusBjsP1viQIgFix%2FO0q6B3%2Fo0VL7mW5n9HUgajswheS5uaF1DU6F2q0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHog%2BLCOviNz1cBpircA7y%2FIXvuIuLOnsyspsr67vq9Isf1qEJ1ikioaUG964I%2F6tWAiOCeMqzSjQ%2BUDYn3odnhuflztxILXa%2FddRXZ2%2B%2FYPW2dEnCbuUfE4StETUKETwC1bUEfB8nvIpbt7TOJMS54zQrlhOJCNI9ZRoZw4iOyCTdkK%2FtIyeNruaLxkDpIWAmM0SWsJ0lX5O04NK%2FAi9wsWk7sB7GXcXzBJ5G9xiX3AmJK1GwRrNH0ZZozukukJbxXlTINBqqt00%2F%2BYo%2FWgfQstWhYMsDmZFmO7yt6RPL2Urqu9E6dLi2coxQ%2F95mJ0fIIDWDlkr4t0UzE%2FQr%2BR6j4AblvPi%2FpoZ6PfV6j9x3Iru0hEbKYxUZN9I2T593BUJKrJiIajWQj90JGSZC%2FanLCx51lBzNzIq2Hys23MNKwcXM99NobZzQ447bRWMY2yO05HW75ixsPQLnJIsurcc%2BbBPx2qdrKcKtYIqZ8hlkSdV9UYgvnMOYQ%2B7z5l2muTg6eLRTuHfu6pud9VfS98LkHpagYKj2jCcMqte5V3Kz549TWbMcxOb%2FGZ7bFjLqfGjH0%2FVo%2BCwzuI%2BPUnM8dldaotu0nxOX4Y1b2a2qE4LXww%2Fi0cVH3l0gE9Gcz9T5vXi34uINFhitucHkaMIeooccGOqUBJ1uerMHs%2FDZLC2OvFsNAy6n61BkOym0LjuJlCitYisxnB5F956QHGMCFMhc5SE4b1psZDodafbnrYOhlLNN2MMh8fyT27hVWoQ0f1IKY8FNvzBQNpTKnyngZPCBVm%2B%2B8iUlsIYtvS9Gxh%2BjHXJzlGy%2BrN9TBvUnwI9xTbTBqtEJksQCdl%2FH%2FG9AB6BRH4TpbXPTspE9c9cQRDfKZZhcr3wokSfmw&X-Amz-Signature=f3b3cf41de2f29f75c55aa84ac30bffd29999d44bf3663f5fad82d80b069876f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJPABCWA%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCM%2F74qSfhSodOLwIkGYw9Fm8IOnyyrtffa570%2BHUSIagIhAIHdMnLoqk1nIo6R86gUaY0%2FYsOCK3Lv2ClcqsdgFginKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzM4idJZmroj9FoP9Mq3AM62GqgIrwPLibgDpqxfF4YCvR5FP7QjCvxI%2B5OBTmTqUGmpR2ubVTaP%2B2IYrckmWV%2Fm94IboaKSH0VLj6Y9afDKLYQsJr0TX6WZY%2FtpZj12bY2BjnS5t%2B4ehLI4RNiiJGo%2B9CPwkkM5y76mupyP4xRQdmG1kDLszdLRNzZcNKn3Tc5p604%2FRDA1h8hVBmv9CdAwZqnnhxRAEeA%2BFxGvhsCdnRMzhVLTTwl1t1zBLuRGwkKFJIZLP8EzArFu9iz7EF3JOccyhkbSRcGv1aZA6gpYDcE0xqAU9t7UhnAhWuI57Wv2QHUH0D74AuFA2WgDKQdK5n4SL8oyGRLXvso2oNmZwGXA7R%2Bk%2Fil8pMs6ffMFbXe3LqVSGMvMX%2B4WCUuIn%2FTDq9DipfX%2BA%2BzqL2MwiY2eV%2BnpT%2FKi%2FftHcu%2BXphrF2lPNNshjT%2B2v6eXd%2FYZ%2BwT213l5PPUCFW%2FrZoaoDqJuHZ%2Ba5ITW5mjwJ9chQKcdEiBJ4ZMSLoB6ydsK4o6cD3vHHKpKOhFw%2Bk3%2FCLRbaq2MrBo7Coo%2FtTr1xgmcDgbECKveP%2FcEBvjQaSQQjbr7X5Ss3yKqezIbLLU7IAu4R3SVnlnkXzGhgpRQkrS2JExoaIDVkrQR9nhjPRDcwDCHqKHHBjqkAX10l0%2BTfQYhYd1QtOpnxQjOh78rCwoHJUjlLyrbPIw%2Blj7JbkKZLWi%2B1%2FloVn0jsBIl7PlN62ndLzacZ0OfzpdpniSYc96VwZzGO8ya662C1acTp1MCqTQdwSwlsvbt39W6%2Fbe4rbydmUpbzokXjLFWlD%2B37vBgL0u9pk%2BR22BVtPt2gx1KRP1U%2Fs57xxXGyrenH9Zuyle913p1bTFRHCVaqHg1&X-Amz-Signature=c29ab079c25fc235c024a3950b011699d3e469d1aefcbd32287c7e85b43dcc06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

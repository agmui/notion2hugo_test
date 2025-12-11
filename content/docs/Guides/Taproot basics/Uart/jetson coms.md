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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GVPWDDV%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCID2gnef7K5mloRKDvxCaI%2BwxNykXqT%2Fz%2B%2Baead8gXKk9AiEA9BaiCZ%2FaWLzJ7HBqzDGRJMkWYpPAZ0oJaKZJGIHHqvUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrH2Yiqx9dhQBUwgCrcA0id3%2BSFj2QmvChsVhi%2B3q7SwH9NjOIw6RXvqx0T5PRTN%2FjWFtY0mVVkEhSO2%2BLgAbhIv9ImDaJVHclR4TwXbHEaJdzfwtGVi0N4oMHZKe%2FBJFkhyohDhVYFbRetESyXtNJZgAHZg4ArVvj2DqBDtA2oYzS5bNkLcjkjoSAJ3HoAAlB%2BEqq9G%2FZ%2B52N9tOc6Nh%2B4JNne50ZL%2FsKovSL1cXPQdMw5cOZdvraJxm9t8bdH86Cnku0CCoDAr%2F9reMd6hKPxY%2F2UU2xfXhsefeHbreMfq6wsaIqOuZCfC1GCV4cx8Q8BkRYpvn%2FUcSAImFxSFw%2FpNFxqJlHtNXGYhcnJQGDuImXCl%2BMHy6E%2FYEV2mqkpDZ8Xjwcsu5Ypze1VAUxv%2FpMByCXKcj%2Bkg%2BD3F5PTrgcQ1ihjT21KiboC6IgAEDSNrtpKzU8UW55JmlaXjrdl5EOnNZeaJvUcLuEEr%2BN7TQ%2F3qDBXFTyOv0ccb5WbmHdW66a4lrTkNvj7l3qSIkK4a4WVEPL0TGsWXQpu0ofZvURdY%2BV8k%2FjYZompKueRaAFMdDuVuODiU2lTkNzR8iBbiX%2FojG5iUH1zgsxCug%2Fs6I3GYnDfg0XnK3qI20J2x26jqAbBeVcmLGzZLJgBMK%2B26MkGOqUB%2BrX6UrcTwOedlDiKdRLoiyFl01%2F9ZTwPIS4Msq19%2FFe777FVFSCLrvDduGu%2BPWWjQAwYstHPK1P6zfVtXUaupp7aXsR%2Bqx%2BSp0jnoFL6kuV%2BnUTqL6Xa6icvj6iS9IM4c33lPKVbK2eNHMbB0u5ajgawGyWvdwZ7%2FEMewSxKD5RUS8KbnDf8Hi%2Fm9RNu2Gw82%2FMajBNlp1fqeuyqT6vF5QziDA1i&X-Amz-Signature=ae02cb768916a793674454ed1eca8186efb058d3b28dfcc3ba80b8c565bdaf55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMHWMH7%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDHwwNrLdMOlZoXe17rhK6ko7%2FS15bptzWo7aBzEjAgVQIhAPR0r%2Bw9HRyYFfCHJerex0gJHFAim9VyhqYfHH39uROBKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0bQe7RO55383pOaYq3AOzAr%2FUxtpRaWSM66HDLS8LvjQtl8pX1b%2FPpjeFuxM3bc%2Ba9ZOSTNPG5rFnMUbmb6nPyO9dd9FlX%2BiLeCuRAUcQ7OC8Q%2FlsC%2Fz%2FDXz61gzXHkIOsEwSqHB2w5JwNAk6kcvkFFDE5AyiCkcH8%2BjlGJjuv82y3y3iuGrh9OwarngiP0xOviChOVsJGxwCM6kApJq4oFL33tNHn6M6LqC%2Br5q7Izrcv83xli49mj4KMnCpdDW68GHxZlA%2B%2B0uMlpa5JkDELeylSiE2ivPh0Htt0tiduXSVxG9VdfN7odU6GT9P7CWXtJ0F2KIhEIho9GqBonbSHJMhEpDursD9irU5AyLxmtwC1GvkYX77nA5Uf6CsHgUsF6sqvy5QkmkSBfa53BsJdVT2Mp8lbrDDgNWuzMBVAbxeOj0Bvp5vnCb3YKMLK78kARgJntzyUSxgS0OUkkuaL4CKECxU%2Bw9Idwrw99sv30scmDIpGCoXpM%2FuInQKI31E%2BUy4bsbyEimf%2BZx4ZUtRY6%2F6uMuB%2FoND6HzJ%2F%2BZOdm5al%2BERMf5PwjEdqTaBoGnpLb4Z23%2FDeObraURda0PFlczJ%2FyNn9lRnYWMUriE212zIR6izmSXS4F0JEvCTVJvBihVdcicENJtl%2FTDQtejJBjqkAb7pXErUqmz6UpNVeV3WuClAVNoHEof9CW1eVov6Ah%2BIIG0RQgS6whJhoHRscLOL3nZhJYDBIPV7YjWO%2Bh8VOVZDBIcm8GwrBO768GnT6cVGJsqPHKbKSp8ULYyDoLI7r%2FOv4p%2BvJa95fhe8lUG924W%2BfHxbwwzbQkQl9uoJR7YkhId1Ytv5yVToIId%2BNDJTIjHe2dH4xU6XBY2uoxBjfv77hJ41&X-Amz-Signature=477f405227f13ae6bddb52aac138a330a892fadfb769c23ed0c10c4a648fd076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2HRSKU%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDnpBYSHOx100%2BhnTLVWUtsqhI6GB1t7OLS1MXZRFsP1AIgfYLMtS4TQem8Jfi8gY7QimiVOhAPz2P008V%2FTzCJan0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpRpMtF5WbrX4LZyCrcA2Nl%2BWy%2BkxTsK4H3vcOcgx8siMUHH3%2BvLaVErpUGUZxIzPD45453mhHE6EF2h0SBKxtnqZ%2FBya6Qv05hR6PMPVIahLZlfzN8lOANAWW6YSeszqhLiqck0hwoa0Ne1uI%2Fgd9ACQDf4TTAFQg3sSKhf9oF2hgBcD1mgVpu%2BWPzClQ0QPg279nvvpdDWxfOyF2YFEnias7hxW%2FmZVa6SWMtY8RDIorq9%2BEzH0GsTxNLt8VYfuGUrRVWhe46%2FkwVZLnZHk8qbAiDd1dNVu%2BJ7ujCkiGWCGcuQyxCrxdtSwBpJOpjX3PyLbNRUe9VGhVRntk9FleRn8ZSLioZ%2BPwN4K5yCb7BmLShHHJ5ymr058crUV%2F8ZVUh93e4%2BF0Z1jWG7vyGTFybI7GDfsGbAhEuL8g9GA7zR5dI0nwLy4oDxnxUs%2FjxmZcUjEu75u%2BRVNuQJhIGyCuD7ShzXVYIBjRrYFsqyixcRXW1QphNw8d9jXhFQb6qkYXQ1t0dpLrZcAA7deWaJKvS5hxTBJRX1LJ2HuvFW1zW95Yh5zMPZnsNOKE9zgjyKKrijuI9KnNDuo1z6NjMHTuV06GszF%2FL7Nhh5gcTytX6C8EwG5UMqy0MgKGMzgQc%2FQxFSFAphlhX9XnQMKq16MkGOqUBFcIWobGrH5dOdgPgDoWA1qlWSNuplDgCZRmzIraFGkt3puSoqDBspnuNLEAL9QePh%2BCE0nWHi5A%2BgUPOed7CV64f361LV6LCqIX4rcLd7cRiad%2FdvDA4AfbMasYY8nzEcVaJje0VGq9QvjCuaWecFkRRw9HihyZMTI4BDPkFIKgdV8%2F6b2lZdVPZMIzXNhp4JXAR6KcM7QBU9GXPfOdvRPg73XF2&X-Amz-Signature=70dacc340357b84d8ea81ec9d8e3ceec3d01dd119ea57480e56a3e6b04ca82ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2HRSKU%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDnpBYSHOx100%2BhnTLVWUtsqhI6GB1t7OLS1MXZRFsP1AIgfYLMtS4TQem8Jfi8gY7QimiVOhAPz2P008V%2FTzCJan0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpRpMtF5WbrX4LZyCrcA2Nl%2BWy%2BkxTsK4H3vcOcgx8siMUHH3%2BvLaVErpUGUZxIzPD45453mhHE6EF2h0SBKxtnqZ%2FBya6Qv05hR6PMPVIahLZlfzN8lOANAWW6YSeszqhLiqck0hwoa0Ne1uI%2Fgd9ACQDf4TTAFQg3sSKhf9oF2hgBcD1mgVpu%2BWPzClQ0QPg279nvvpdDWxfOyF2YFEnias7hxW%2FmZVa6SWMtY8RDIorq9%2BEzH0GsTxNLt8VYfuGUrRVWhe46%2FkwVZLnZHk8qbAiDd1dNVu%2BJ7ujCkiGWCGcuQyxCrxdtSwBpJOpjX3PyLbNRUe9VGhVRntk9FleRn8ZSLioZ%2BPwN4K5yCb7BmLShHHJ5ymr058crUV%2F8ZVUh93e4%2BF0Z1jWG7vyGTFybI7GDfsGbAhEuL8g9GA7zR5dI0nwLy4oDxnxUs%2FjxmZcUjEu75u%2BRVNuQJhIGyCuD7ShzXVYIBjRrYFsqyixcRXW1QphNw8d9jXhFQb6qkYXQ1t0dpLrZcAA7deWaJKvS5hxTBJRX1LJ2HuvFW1zW95Yh5zMPZnsNOKE9zgjyKKrijuI9KnNDuo1z6NjMHTuV06GszF%2FL7Nhh5gcTytX6C8EwG5UMqy0MgKGMzgQc%2FQxFSFAphlhX9XnQMKq16MkGOqUBFcIWobGrH5dOdgPgDoWA1qlWSNuplDgCZRmzIraFGkt3puSoqDBspnuNLEAL9QePh%2BCE0nWHi5A%2BgUPOed7CV64f361LV6LCqIX4rcLd7cRiad%2FdvDA4AfbMasYY8nzEcVaJje0VGq9QvjCuaWecFkRRw9HihyZMTI4BDPkFIKgdV8%2F6b2lZdVPZMIzXNhp4JXAR6KcM7QBU9GXPfOdvRPg73XF2&X-Amz-Signature=112607d39f7580a477a64073e3f1180ba7cc61b0acc0cd662f9aadfc53d7a092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMHWMH7%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDHwwNrLdMOlZoXe17rhK6ko7%2FS15bptzWo7aBzEjAgVQIhAPR0r%2Bw9HRyYFfCHJerex0gJHFAim9VyhqYfHH39uROBKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0bQe7RO55383pOaYq3AOzAr%2FUxtpRaWSM66HDLS8LvjQtl8pX1b%2FPpjeFuxM3bc%2Ba9ZOSTNPG5rFnMUbmb6nPyO9dd9FlX%2BiLeCuRAUcQ7OC8Q%2FlsC%2Fz%2FDXz61gzXHkIOsEwSqHB2w5JwNAk6kcvkFFDE5AyiCkcH8%2BjlGJjuv82y3y3iuGrh9OwarngiP0xOviChOVsJGxwCM6kApJq4oFL33tNHn6M6LqC%2Br5q7Izrcv83xli49mj4KMnCpdDW68GHxZlA%2B%2B0uMlpa5JkDELeylSiE2ivPh0Htt0tiduXSVxG9VdfN7odU6GT9P7CWXtJ0F2KIhEIho9GqBonbSHJMhEpDursD9irU5AyLxmtwC1GvkYX77nA5Uf6CsHgUsF6sqvy5QkmkSBfa53BsJdVT2Mp8lbrDDgNWuzMBVAbxeOj0Bvp5vnCb3YKMLK78kARgJntzyUSxgS0OUkkuaL4CKECxU%2Bw9Idwrw99sv30scmDIpGCoXpM%2FuInQKI31E%2BUy4bsbyEimf%2BZx4ZUtRY6%2F6uMuB%2FoND6HzJ%2F%2BZOdm5al%2BERMf5PwjEdqTaBoGnpLb4Z23%2FDeObraURda0PFlczJ%2FyNn9lRnYWMUriE212zIR6izmSXS4F0JEvCTVJvBihVdcicENJtl%2FTDQtejJBjqkAb7pXErUqmz6UpNVeV3WuClAVNoHEof9CW1eVov6Ah%2BIIG0RQgS6whJhoHRscLOL3nZhJYDBIPV7YjWO%2Bh8VOVZDBIcm8GwrBO768GnT6cVGJsqPHKbKSp8ULYyDoLI7r%2FOv4p%2BvJa95fhe8lUG924W%2BfHxbwwzbQkQl9uoJR7YkhId1Ytv5yVToIId%2BNDJTIjHe2dH4xU6XBY2uoxBjfv77hJ41&X-Amz-Signature=d7a3bac376a70af4e6e984bccf761c16889ca8df5449f2f8806f930cd949f887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMHWMH7%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDHwwNrLdMOlZoXe17rhK6ko7%2FS15bptzWo7aBzEjAgVQIhAPR0r%2Bw9HRyYFfCHJerex0gJHFAim9VyhqYfHH39uROBKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0bQe7RO55383pOaYq3AOzAr%2FUxtpRaWSM66HDLS8LvjQtl8pX1b%2FPpjeFuxM3bc%2Ba9ZOSTNPG5rFnMUbmb6nPyO9dd9FlX%2BiLeCuRAUcQ7OC8Q%2FlsC%2Fz%2FDXz61gzXHkIOsEwSqHB2w5JwNAk6kcvkFFDE5AyiCkcH8%2BjlGJjuv82y3y3iuGrh9OwarngiP0xOviChOVsJGxwCM6kApJq4oFL33tNHn6M6LqC%2Br5q7Izrcv83xli49mj4KMnCpdDW68GHxZlA%2B%2B0uMlpa5JkDELeylSiE2ivPh0Htt0tiduXSVxG9VdfN7odU6GT9P7CWXtJ0F2KIhEIho9GqBonbSHJMhEpDursD9irU5AyLxmtwC1GvkYX77nA5Uf6CsHgUsF6sqvy5QkmkSBfa53BsJdVT2Mp8lbrDDgNWuzMBVAbxeOj0Bvp5vnCb3YKMLK78kARgJntzyUSxgS0OUkkuaL4CKECxU%2Bw9Idwrw99sv30scmDIpGCoXpM%2FuInQKI31E%2BUy4bsbyEimf%2BZx4ZUtRY6%2F6uMuB%2FoND6HzJ%2F%2BZOdm5al%2BERMf5PwjEdqTaBoGnpLb4Z23%2FDeObraURda0PFlczJ%2FyNn9lRnYWMUriE212zIR6izmSXS4F0JEvCTVJvBihVdcicENJtl%2FTDQtejJBjqkAb7pXErUqmz6UpNVeV3WuClAVNoHEof9CW1eVov6Ah%2BIIG0RQgS6whJhoHRscLOL3nZhJYDBIPV7YjWO%2Bh8VOVZDBIcm8GwrBO768GnT6cVGJsqPHKbKSp8ULYyDoLI7r%2FOv4p%2BvJa95fhe8lUG924W%2BfHxbwwzbQkQl9uoJR7YkhId1Ytv5yVToIId%2BNDJTIjHe2dH4xU6XBY2uoxBjfv77hJ41&X-Amz-Signature=3b2a2546653889d2a1b5f587897b9eccd7e13a0a90249720a162812c07157b15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CHDPLLF%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDmgeYp%2FbKBiC3cxdiI0yUFko0JBut04L0%2F7jzD31IXKAIgexAW6HHCZ8xkVL68FTQGVbZbWQbAUgpHedO7Di99gDEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxIMt9AKDbYlvLyHircA6TkmB%2FniCyalGTSzs3LhbFqGPTlfTglzw6607hshBLu%2FISWnYG7hOT%2F0JQGhF%2B9%2BlsjHxG07WAmR4ECFR9q5Z9%2FZ7yjlrGf2Loe8j5Udo6I5r0DSfFaIuj7wGb%2BHkVy2aliYJWtl%2F1cxrqpYmpP8QJkqoafK1M3i%2BEMjVPynPOIq3EpDWH1zHFcMGVl9BTyTnd457nyn2IyYSfH%2FoYpgTiCI2o0TVqG9Ip99B3HynZ52gCZQTkF40fqw2rr%2BPmbt0YGJYwGzmMwOn93JgHq23lAqC70MQExLfmKnJ7RX3vdL7SC1ho%2BPxHNRSl7ir8M72WaPoPOSPW5JdaZ1J6zhSYOY9Tm5fcS0jBBTqsI2UUjUPb4dL3ONYsXHPNdRrd545w2bCVGmSDejPOmnLtJeb84NhlLUwyHR1mC6mo5y457GDnokMzqt4bR1IrW8F4JsNRGaep3fa%2BTgCoffIPUV2auBR%2Fl8uTXVIeL9ipHJzEnHUEPBh4z24CThyy41pttOyYE0gnjxRs6p7hecj3UAuhxjt0ekFW4P1j00n3sM%2FHeHL2B3WIpzYlzGKuUxrg16rf0dL0dWKWw49%2BVUE9oALzCFn0q04b%2BVTZJsPzlSqFh82nfToqkq5QcJgcXMMa26MkGOqUBX2nLlw2Z6irGbLFrw8yM58O1bJCyi%2FyTM7C0QkG1%2FZ0cMs%2By77fAqDgOQCJKET3BNAXSPTcvORedYpmJKsSj2ZJk%2BlicW4K4vC5PmucXfjZHZQqIfQGxvp1Ih1CbYWHRKbY17Z%2FpoWZ9pLuZL9bkf934S65B6OGeH2sen4n8RhJp5mdccHfm0AmncW56cmClC6nPMNlfpcdhctCttT4WCD0vfHif&X-Amz-Signature=731c1d6890f741f6e7e79f56013ef0ec2b036c2c0e0c37609e9944b2115c8214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

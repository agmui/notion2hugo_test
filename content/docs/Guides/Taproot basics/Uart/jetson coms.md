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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKOEZZY2%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGCjinwJXBzPBfqVWFBgZ8N0JIw0SWo8YSAPp3ObKLzwIgPXQDKcYR9TjgvIQF1Ka5xIEw%2BN6DxQJb%2BYaO%2BTdrqO4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMmL8xZxvPRbEUuEzyrcAwM6d1oVJlgI0QZ%2B0rvM0KgvVR4IZbcEq2HFAY7iUcWfeCEp5kQbpEPb7H%2FLXvS6XzbPT3a2aCssR9wV9GJl%2BkIDDU6TNJh9xiWzZqFKGjRk1LZ7pJ9kUB4dfmQuwtX%2F2iXuXmpNeMArnZamAdO3HHfuo9cibTszC01QQlt5FgyrysWkqefhlPsfO0cN2mC%2FqCQscpT0ISNhyyu7m1DJ8TK8ZJmddO2JyQATeMaBKegCzmVRF1wAwWrYL8JmN%2Fkkbj%2FgP5VQuOcpEh5vm9yAPKtzfMvfDZMueYlVYaX4qVp40l0uYAmBr7S3OmabeTjf5mUVrW4Ap%2FDmvI%2FzwtJB8n0E5mGrq%2BjnR3vCiPbvszQVGUMhSTCxxmr7bGTINxN2bY%2BgAKJ%2BkSA3bPmK%2BqyaRLgGhpSN%2BObZxsxPn%2BBSqilKVFEhM2ZuYpK4ipGIqi4RsPYSQNevWJiXVxr7uUBIdgsf%2Bn95KRpskVjUn43xDGMyxTRUaM%2Bxqc%2FRdm6MoysSXiMclVEZLMSYjShq%2Fixh4lt918YjaTaTcg96rBFneyIQUYVUhD0WO6tYU4Pa6W7JbPz0Up%2BWhz%2Fre3UYz0SToC4WdyBOoLjjiX28D2%2B%2Fgn1M1eY1FkaOR1a96%2B1BMJfHu84GOqUB%2FMb%2BmFvMA8%2FPdXWfLWTcODiYXZtWHeKlnKuQMMzzzdD%2Bk0oCyk8%2F%2Be3J9A5TPov6MAbsQ%2FPbfAOZwx4i3CTuiQPY0fLFetmmmmXsXYQP9Ct%2FSg3bAXhGeTChxraoOR6CQsB9Jfhds6aqkYlSvrlCwpjeY28LmUt4LRGwu7KuFl6n4LWU9X8WVPGIMKPWKI7QP94vLTN42VMzVVd254Cs9zTW5IWn&X-Amz-Signature=8ad332c9c4e9cc9402d6caac3f7558b30423f8a4b9693b9336b8c0c6b54b4d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676FKCFN5%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTM2scim9lM%2BHpTyqX%2BAYka8DtFHMzk8%2F9NLd3%2Bb3aNgIhAM%2Bj6n4QNwB%2BxGJCiyjBTkZZjs%2BdX2Nt0e7j8HZyO12QKv8DCHcQABoMNjM3NDIzMTgzODA1IgysN7WE0gZJdyHhLYgq3AMW9hw%2FFpPp7y9lWv4BtASTKtEm8AVPFIClDRBjoNg1hBdUO8%2F7ruJB6T8j%2FWxa3rA7MybWHsRyEIr%2BpEYCEPOR2kPP3XhB3SToF9V3KzCGtjcK50ynpDSOYASRQJtQiXHTbBvn9mehE0MfBNISgBbiAI%2Fr3QcGw6dsbOvB20xwtHy%2BVJyjjdO82gRPJpIs6m44jCjf%2FkNMv3Xlk%2FQLBit%2FcZCX%2BSgqylaS0TZA4IJfOaJv8BKgagd0MQR0hoI0PqyweLZYW6CwyLilFEjBoXPW%2B6X1je%2BLSA02iiVezJ51NLhiy4uq2eMSoDhrFu2Jc4sC5jtUTxVY%2FtkeNGobv%2FvDtMEzW9CSG9oA56Bs3hzRk9PJguDRh8xpaf%2FZFQmUaCetNI0nf4ADGphWuerFugPdNZ8ckp12jjR0LMpMoNJHuVVOXdGQCH4FocGjNMz3LpgGA8dadgr8YmuI3Q6pI7Wvso5AJaO%2FxfUA9ZnIvxJnEId4FV1%2BD9xM61EH%2BonH%2Fvu5%2BPrCrVy3p0pX9sGMRsZt0k7OJByY5ST7YV6X6n3VCKKX%2B9W85Huw34uvvrex8SBVWTzhW3vXjpRTDB1kCA6SPZC0OQNePAdAoaL8cB0zVpNnGbkcGPHuvhHLOzCJx7vOBjqkAeiZjnglhvBg%2BlgOdr9FbPmqkOqQNm19uURNKIZ0D0HxMQAP1uHUJw7yEjFaEV7h6T%2FnDE9tMEv3sEsySgVEwq%2BlwqWgZr%2BmQdBnGqDeCA9PY5uz1hUQw4ojVHRcmsjw9CUvGVgJHWdFG2ixwDK2szEuZgt1hzRP%2BoeY3IDpUA7UsSOErE9yZQ%2B4ooQyKBl7DQQcnX6kVZ9fKCzNKP5Ru6oKXeBS&X-Amz-Signature=676a12e806529062bfd7126172540d84d20c4a7a84e6dcf530142b01eee2fe9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XONSLAS%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCw%2FCL90aXfNs3gdiVFgZJIaICIvF7gcH%2B2lcbix0tMAiBa5h1PWKwgIX31X9ePgso%2BGJrGk6cQVsd8DA7dXZgGFyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMdV%2F%2B3LT71wEWupbZKtwDIqX4i67f8rC4EBxFk7RBlk%2FaFD2Hk9ERdCpbYF9IvX6%2B5O3lUhVQD0SNnEsv95UY8F6pUoawCpoX%2B5dhI1rwrZieOvC06ULQ2Y7K8GRxFTXVDE0KfGxNxBB6ygdBz1kvQ3igwgogdQzAYRHiEfqhLjhU7QGYhf6u%2BlMBg72cRhDVj63BEjsnU7hgSTHVxhXSu09%2FrMO6PW6ge1h%2F0bTLtU27p9nve3ffcuWGPWQflcHA1YZdFAP3BcKWTTMzoT0anJkF%2FCkRgw6tGgEmy9Ja3fgSFWDMNFkXM5yqptfUi9GsMDICBlzcLJeVj8%2BPCE0BFFNBn%2F3Ad%2Fh4gtngogrTjEmKbzc4TWG0Ksnxy9dNyzZyWE7wrwNdoBkhsiOWYMmyCyxy%2FvTISa2%2BAMN%2FOjhWqzPO%2B8ONEXWVar%2FkYE69gbquDFv10CTIZLAXDXXRuJ%2B5YGfyuMDA%2FNjrrFEOvMjtyETgugkSOIRa2K85QBvwRrbPBIXKa%2BcjXxqg6k3yFnN7ir%2FdWKQ0%2BgZ6LU7UvjsbaryQ2LZiNXZKmYY3FVkoKhup1ftL0xWw6H02KshwlfP%2FWch7TnojfqQPRHe%2FCiygQtpuRyYy9fPbIC%2BtOAWQ696J6ezxy9zyTeXyWt0wqcW7zgY6pgFuYA6TBoth11LMBp5b2Oeu%2FXbWzsoCvIU3yCUzul5dfmUbbjB5hMfdhSVQX8j789OJ5B4cRAwy3Jf5915chXo3EtQM6mEWJx%2FQI1K24as%2BBVbW%2B5ekETJXFlbfXmpIYTSh9BQRqGV87mkOmftxgqIxTyevwjwcnpDxLn6MRNdTjddkP4%2Bkp3NrCjB1ZHQZ2mGZbv4vdEqK7toWPioLil66I1S8e9WG&X-Amz-Signature=8471a0c4bd92506fa342c4f9de1036bbb4da22a5c67e2ecc350dfe77b0c5825b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XONSLAS%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCw%2FCL90aXfNs3gdiVFgZJIaICIvF7gcH%2B2lcbix0tMAiBa5h1PWKwgIX31X9ePgso%2BGJrGk6cQVsd8DA7dXZgGFyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMdV%2F%2B3LT71wEWupbZKtwDIqX4i67f8rC4EBxFk7RBlk%2FaFD2Hk9ERdCpbYF9IvX6%2B5O3lUhVQD0SNnEsv95UY8F6pUoawCpoX%2B5dhI1rwrZieOvC06ULQ2Y7K8GRxFTXVDE0KfGxNxBB6ygdBz1kvQ3igwgogdQzAYRHiEfqhLjhU7QGYhf6u%2BlMBg72cRhDVj63BEjsnU7hgSTHVxhXSu09%2FrMO6PW6ge1h%2F0bTLtU27p9nve3ffcuWGPWQflcHA1YZdFAP3BcKWTTMzoT0anJkF%2FCkRgw6tGgEmy9Ja3fgSFWDMNFkXM5yqptfUi9GsMDICBlzcLJeVj8%2BPCE0BFFNBn%2F3Ad%2Fh4gtngogrTjEmKbzc4TWG0Ksnxy9dNyzZyWE7wrwNdoBkhsiOWYMmyCyxy%2FvTISa2%2BAMN%2FOjhWqzPO%2B8ONEXWVar%2FkYE69gbquDFv10CTIZLAXDXXRuJ%2B5YGfyuMDA%2FNjrrFEOvMjtyETgugkSOIRa2K85QBvwRrbPBIXKa%2BcjXxqg6k3yFnN7ir%2FdWKQ0%2BgZ6LU7UvjsbaryQ2LZiNXZKmYY3FVkoKhup1ftL0xWw6H02KshwlfP%2FWch7TnojfqQPRHe%2FCiygQtpuRyYy9fPbIC%2BtOAWQ696J6ezxy9zyTeXyWt0wqcW7zgY6pgFuYA6TBoth11LMBp5b2Oeu%2FXbWzsoCvIU3yCUzul5dfmUbbjB5hMfdhSVQX8j789OJ5B4cRAwy3Jf5915chXo3EtQM6mEWJx%2FQI1K24as%2BBVbW%2B5ekETJXFlbfXmpIYTSh9BQRqGV87mkOmftxgqIxTyevwjwcnpDxLn6MRNdTjddkP4%2Bkp3NrCjB1ZHQZ2mGZbv4vdEqK7toWPioLil66I1S8e9WG&X-Amz-Signature=ff4e80720d5b75613205a4d313e6dfa13b2f1a5a16e0d1766386b08bb8eaf56e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676FKCFN5%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTM2scim9lM%2BHpTyqX%2BAYka8DtFHMzk8%2F9NLd3%2Bb3aNgIhAM%2Bj6n4QNwB%2BxGJCiyjBTkZZjs%2BdX2Nt0e7j8HZyO12QKv8DCHcQABoMNjM3NDIzMTgzODA1IgysN7WE0gZJdyHhLYgq3AMW9hw%2FFpPp7y9lWv4BtASTKtEm8AVPFIClDRBjoNg1hBdUO8%2F7ruJB6T8j%2FWxa3rA7MybWHsRyEIr%2BpEYCEPOR2kPP3XhB3SToF9V3KzCGtjcK50ynpDSOYASRQJtQiXHTbBvn9mehE0MfBNISgBbiAI%2Fr3QcGw6dsbOvB20xwtHy%2BVJyjjdO82gRPJpIs6m44jCjf%2FkNMv3Xlk%2FQLBit%2FcZCX%2BSgqylaS0TZA4IJfOaJv8BKgagd0MQR0hoI0PqyweLZYW6CwyLilFEjBoXPW%2B6X1je%2BLSA02iiVezJ51NLhiy4uq2eMSoDhrFu2Jc4sC5jtUTxVY%2FtkeNGobv%2FvDtMEzW9CSG9oA56Bs3hzRk9PJguDRh8xpaf%2FZFQmUaCetNI0nf4ADGphWuerFugPdNZ8ckp12jjR0LMpMoNJHuVVOXdGQCH4FocGjNMz3LpgGA8dadgr8YmuI3Q6pI7Wvso5AJaO%2FxfUA9ZnIvxJnEId4FV1%2BD9xM61EH%2BonH%2Fvu5%2BPrCrVy3p0pX9sGMRsZt0k7OJByY5ST7YV6X6n3VCKKX%2B9W85Huw34uvvrex8SBVWTzhW3vXjpRTDB1kCA6SPZC0OQNePAdAoaL8cB0zVpNnGbkcGPHuvhHLOzCJx7vOBjqkAeiZjnglhvBg%2BlgOdr9FbPmqkOqQNm19uURNKIZ0D0HxMQAP1uHUJw7yEjFaEV7h6T%2FnDE9tMEv3sEsySgVEwq%2BlwqWgZr%2BmQdBnGqDeCA9PY5uz1hUQw4ojVHRcmsjw9CUvGVgJHWdFG2ixwDK2szEuZgt1hzRP%2BoeY3IDpUA7UsSOErE9yZQ%2B4ooQyKBl7DQQcnX6kVZ9fKCzNKP5Ru6oKXeBS&X-Amz-Signature=af4d4e853d84576c63d4c6ce4425e1442bcb7dac99ac729bb52e390428b80699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676FKCFN5%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTM2scim9lM%2BHpTyqX%2BAYka8DtFHMzk8%2F9NLd3%2Bb3aNgIhAM%2Bj6n4QNwB%2BxGJCiyjBTkZZjs%2BdX2Nt0e7j8HZyO12QKv8DCHcQABoMNjM3NDIzMTgzODA1IgysN7WE0gZJdyHhLYgq3AMW9hw%2FFpPp7y9lWv4BtASTKtEm8AVPFIClDRBjoNg1hBdUO8%2F7ruJB6T8j%2FWxa3rA7MybWHsRyEIr%2BpEYCEPOR2kPP3XhB3SToF9V3KzCGtjcK50ynpDSOYASRQJtQiXHTbBvn9mehE0MfBNISgBbiAI%2Fr3QcGw6dsbOvB20xwtHy%2BVJyjjdO82gRPJpIs6m44jCjf%2FkNMv3Xlk%2FQLBit%2FcZCX%2BSgqylaS0TZA4IJfOaJv8BKgagd0MQR0hoI0PqyweLZYW6CwyLilFEjBoXPW%2B6X1je%2BLSA02iiVezJ51NLhiy4uq2eMSoDhrFu2Jc4sC5jtUTxVY%2FtkeNGobv%2FvDtMEzW9CSG9oA56Bs3hzRk9PJguDRh8xpaf%2FZFQmUaCetNI0nf4ADGphWuerFugPdNZ8ckp12jjR0LMpMoNJHuVVOXdGQCH4FocGjNMz3LpgGA8dadgr8YmuI3Q6pI7Wvso5AJaO%2FxfUA9ZnIvxJnEId4FV1%2BD9xM61EH%2BonH%2Fvu5%2BPrCrVy3p0pX9sGMRsZt0k7OJByY5ST7YV6X6n3VCKKX%2B9W85Huw34uvvrex8SBVWTzhW3vXjpRTDB1kCA6SPZC0OQNePAdAoaL8cB0zVpNnGbkcGPHuvhHLOzCJx7vOBjqkAeiZjnglhvBg%2BlgOdr9FbPmqkOqQNm19uURNKIZ0D0HxMQAP1uHUJw7yEjFaEV7h6T%2FnDE9tMEv3sEsySgVEwq%2BlwqWgZr%2BmQdBnGqDeCA9PY5uz1hUQw4ojVHRcmsjw9CUvGVgJHWdFG2ixwDK2szEuZgt1hzRP%2BoeY3IDpUA7UsSOErE9yZQ%2B4ooQyKBl7DQQcnX6kVZ9fKCzNKP5Ru6oKXeBS&X-Amz-Signature=f89398992fbb29bc62b97ddf3f496ae34dea1f5eb6689b156c24b49102b38c41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO4ZD43J%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWicBeoRXqfiUUQ1MDyLt7RhpdkcFX0IKG84J2866hpAiEAiwh%2Fi6%2FTLb07VBeHzKd%2B6JnhzsKJY7tc5d3T4fo9IDoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOLG2rOysrMag3dD5ircA%2B%2Bg88KiH9MyRdc%2FBEFErqCDi14D1LpKLRT%2Bh19rV3XfwUc2DcnF7GZTlb7951rT9M3XMk41nqMdir4Qrz4p9H%2F%2BJe48pU0TzNvZrA5Q21F7tyGxSQRNlvSZCdV0K%2BfF8HvksQESXOKlH%2FzVRA98%2BjQrXPMHYmo0ttmtfNrFx3JeG2gVF9fRKM2d9EDXVdS1nhZ2c4UJR73FWX4r%2Bohz1lj%2FlBbq6jHk5cxRaLmtrhywpwi%2FW6tIzZ8Skuo%2BPF5umfwKXamUYqsneHzruD7Gx0mczFge4%2FXxJrS5S0taI2TTS7V6X%2Fq9I2qX8jO6aJj9O8Qa31zVMDz1wDsX7zetlt6tTGr24JlTbHc8pTlfT4ufM9ZqSgBv8TwTJQ%2F0HccYNtKfdEIbr0%2FpVIyMIRRkkn0CJEetmEmtBftJTkFPqGhE6JDLQTZ8FmoqAdjSeBoUssF8QQib6mTAyEg1zd5aK351ZeiXXGjBkHH%2FXTyX93Xpu0vY4TI4v5JpqIqZXQXe5cGwghDZZU3j8cakdHFqT0ubo%2Fnm9DvzLGghWhEq63Hb8zoWzwtbCVBjd%2BFvAIodTW2At4ZIZhJDVLJy5FmHcLSnWxewwGMxu%2BIF%2BVJzG%2F8GWNzmyA0TxnyWmLFgMMiIvM4GOqUBZ2Gq668UvnfQ627cZdx9fU%2BoGGQPz8oI%2BgWnYXgUCXoOrIK3NxzwO%2FKmiTcqduSazi1qgzt0LyYK9Kbgzyw3w5To7ipbZ133QjvrsLsBXItZhgVVHXGQJyuCFpJDe3UQC%2Fa3sRcoDvEJhK6iJxWh3%2B%2BrZSOBCtcPhBtRqdjYH72JguKXJnlNy%2F3LsJZyT8b2Fyux%2FLE4XAEE9rGu%2BbFhaxwW1WSg&X-Amz-Signature=43a74ed9cc2be2eb26391d5c7e33802b9d600215ea2eee5ffc78702de4233279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

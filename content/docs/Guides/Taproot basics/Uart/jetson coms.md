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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGH7F5N7%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzOpvy6D5Ful3Z2d%2FfCt%2F9IT2pSl1OAi%2FtBST0wmd%2B5AIgW8JQOcB9IYm8nmr0xBDVK3rudF%2FW76%2FTsRxHZ6KBBJkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEU6SSMYpA1IKV4wwCrcA3jvMocc%2FTkxT4WnS1T3kEESwdP8EaEN%2Fs4vwg6JXYVnbq3AYFpK5fNtqKB6rEXnjF4GcX4f%2FopeLzJ0kV0%2FbSrt3gh6jtZV5%2F2Cw%2FPykCDammqRQfmiQhTSjOmmjuOIWE647OLp%2FCEtgq0Mr2DOZYBSSy5e8EFlaY4R1Z7fgJzdkGto05jGSzrvUteH7gqVG%2FV6gPLo%2FOJ76L2GFaOaFfDYpAuR61%2BaEIel5MrWC4N%2Bs0u9Tzn%2BmI0Scii%2Bz9Fnz5Z%2B8R59isxICOY7zq%2BdgXyAr79Hw9kIO4%2Fhd31lliTPI%2F1tXOIUV%2FQLx3LtrCe8sk9fJTxPPt2nyFfFXVvA8A%2Fh3npaiIiV9XooMsrzdf%2BI8tFHfTYN3N%2FBhi9nB%2BOXKtaN7GuuF7t34vDZ%2BYh1ETNu7MtnTanKLR2dLRgSCiM7KcYV3SdTbNJceVrMRwj9QkDupUKxWD138QfTeaaZCm6IzPo21djmHEs9SbDTHWbOCRAG5F53xhoUYOw5JRwDi9bVC4qNPGJMNMyBrW4LGl5H43PYJensvMTpJSAc6iWPweEtTMhUMkR6ge3lBkuZZUBSDHUoj%2BvPWoDttg9mPgvGBM4%2F8DaHeSwpgjKgO3cA2z3%2FIYUpvOUlxE5KMODLztQGOqUBImBLcVEyZw4CHU%2BtAyAfvyYO%2BwLFlZaVhJ97oT9x1jaqDLxsH8oQsTCIY%2FrU9gQH0bVQd2hhBg%2F4GsJvEN5QuL9bKHjhOO3KAiZ77K7Tavk16Vu6XVkYcgSY6eDbcxB%2BBNMOVcTpZaGIwUCq4WCen8HnCXqFqTT9YROL7IbgVU8ElzrJKFza5mUFphSsfH1GCrZB7U4kSRemq0tWPfAr1pS6i5fp&X-Amz-Signature=a5ff9092d3ea440428cc30bd0d429a6bedffba17843445f63f493d64f1960639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2DDHK2R%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtStGyk2NaAdnsmWPZ4Hd3iNLC7HoZBs101P%2FHVleW4AiBYslu%2FLdqjjkH6RciTIWUAyN9dMg5tDXO8FVMaT55uiir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMmqNn1%2Bw0tbJM17UWKtwDXyo2%2FoaVQDAfIIjX0LBcrgfHy%2BRBffRrhtiOcHfQSt21oWJAt1zxDOACdYLfq8Y%2B4gYhxub1VFYIYh7nqA9HGE67F5VSOmHh7zlGii0Q1X8ieVWM13l83xiklpLtwTZfD12zZkjrZznNnEAOQywrmUSlro5TwrtgwFPyQTODO78jhgPa%2F1%2BBJBkjM%2FJ%2FI5GD%2BiY1duS2ld17HqdEf9DSOemjocXvlKZvuDOCAsl5oKm9767dxccK6pvnEVn2En9Uz5Y5Z9QLQnqW00vqtk%2BozEOntNA0Vx93FJA8pNrLLyWTiOFwH8OCy%2FvyQWc7nV6%2FVkZpOziYSUukolwwT%2BW7ypqquUWCY3EBgzgivR2my2ivNVBgCmfJizh7mfepnq868jFOFCunezN9nlbU5XEmGfv6wdkgbd2iY8W8iFLRkF2JEUCUlFSooXAdWm1ZDSKmi8oaI0tZgU47SGwXs3rX3ff8bNA5QFLMRGQz5KQEazqd7hbHncacdhSpV7VFS02e%2FGYPToFOkT6I4jRS7mLASL9aYBFOh58wkAfPvGZIowQeIJ6Jrm2MRK%2Faeyhl5O245zjX3qf7h9fTJ6gPMK8ZsiVugzoaWokWV4%2B6xyBLpoX1XoIRa1lX8BohWYgwvczO1AY6pgGLv73LihwTZdJRimh0eQbsj%2BklIMLMLmatwjJ84BBxeOMrTlONkugmFay5zUPmQa48GcsMeseYV4rgo76gv198SbbZitCUGkBiNvK7a%2FzbgQIt5AxpcMbMXFGHNjazPP%2B2IMDnkhWFxWLogtcqc%2BZC9ICJYROEkRjfot2%2B1pSltJTMU6ilJSoVjkCBasHb7KCoD5J7QKNRgFOe4upVVbxovROc1bUN&X-Amz-Signature=86aeba9ee21a3df93133530ddbdbbc12012d637ca37cc0e61aed112d437790ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBCIQV6%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0nQfIjfxMQxoOjr0%2Bn1tsN25rKy5vHuGc23wuQiTD7AiEAxeVpdbYOWcFeobTrS8kLPK%2BfMeKieHa3SKCVcv7KVOoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEpNO7mfft9%2B8Eha0CrcAymP26FvB3yghUD4Ls3Tgi%2FK2hpLbFnfqCNL%2BQUgYPGmFwkCmTvv1Y1T91rImzY4xhMIhDMWi6qiTUqvZS26bHVPFlXRc1qZjkQ9PHnr6KRAjY113YbMuRUe%2BTZAlYY19uB4x%2B5aD%2BW9s%2BP%2BIlHFUzlwiWqXW5IplWCWP5Ek1JXvJoPQ7hSH0W75CDWyT6Z7opZ%2Bc9VijqVbPF4tfuPqv9tiksQxtmqOzhtbCzum%2BSul1JwBvEhjF8dsbrqUXl0HGV2sZx%2BFX4h%2BWdUkxrRET1jvk7%2FR9BfJn%2FoDg7fP5zcu0pjpLw8EdQ1g4rjoP%2Feg6klFVLP8RAsIymii98KVbVY2Uqz3hzCJqstvmByuqGbLdz6p4ZjissnTijHJInPAIs%2BM3y63VCv09JIIZO28Y8vUNVcB3uYSDyXONcr6sp4VvCVJ67gEdbyoGHqpSbx%2Fih%2FrznMir8nXom1N4ivHL8lJSZMNiN0PtDC7J%2F%2BEq5ezXFJujo6832%2BzPQKCng1%2BByrKw0t9XLUtt3eu60AqdjI6kC5I21hOedWFLwwNxQKV4jMLUxD4ViGqaULE2uy2nKL1PIVyr02QrQHp%2FgHflWOZJDmxt15niQVDcJINUwaRainhSAI%2Fb1%2FqytvFMIPMztQGOqUBAh9VAfdt6tko4eWnFu4Rf9qqoLsy7pHWM6mL%2FIOvlH8B5D8GAGR1XR%2BtAPvhQu%2BA3T5rF8Hsqh9KWRj1XTOwVg0Hye45d%2F9y6%2BMdSp94PcBekS1Sx9sP2mpUflffEFxCz7h9NnzKdRmyYyFVcr091WgSdJ%2FQMfrV5tfUbXLIvK70c8%2FfKrAbamfciQra2oV1IXbylETF02cHJ3sHuZSnv%2BYn1haf&X-Amz-Signature=d69db445af08235aeca8a3007b32668545c5587bb6739e2d69de1972040bdec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBCIQV6%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0nQfIjfxMQxoOjr0%2Bn1tsN25rKy5vHuGc23wuQiTD7AiEAxeVpdbYOWcFeobTrS8kLPK%2BfMeKieHa3SKCVcv7KVOoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEpNO7mfft9%2B8Eha0CrcAymP26FvB3yghUD4Ls3Tgi%2FK2hpLbFnfqCNL%2BQUgYPGmFwkCmTvv1Y1T91rImzY4xhMIhDMWi6qiTUqvZS26bHVPFlXRc1qZjkQ9PHnr6KRAjY113YbMuRUe%2BTZAlYY19uB4x%2B5aD%2BW9s%2BP%2BIlHFUzlwiWqXW5IplWCWP5Ek1JXvJoPQ7hSH0W75CDWyT6Z7opZ%2Bc9VijqVbPF4tfuPqv9tiksQxtmqOzhtbCzum%2BSul1JwBvEhjF8dsbrqUXl0HGV2sZx%2BFX4h%2BWdUkxrRET1jvk7%2FR9BfJn%2FoDg7fP5zcu0pjpLw8EdQ1g4rjoP%2Feg6klFVLP8RAsIymii98KVbVY2Uqz3hzCJqstvmByuqGbLdz6p4ZjissnTijHJInPAIs%2BM3y63VCv09JIIZO28Y8vUNVcB3uYSDyXONcr6sp4VvCVJ67gEdbyoGHqpSbx%2Fih%2FrznMir8nXom1N4ivHL8lJSZMNiN0PtDC7J%2F%2BEq5ezXFJujo6832%2BzPQKCng1%2BByrKw0t9XLUtt3eu60AqdjI6kC5I21hOedWFLwwNxQKV4jMLUxD4ViGqaULE2uy2nKL1PIVyr02QrQHp%2FgHflWOZJDmxt15niQVDcJINUwaRainhSAI%2Fb1%2FqytvFMIPMztQGOqUBAh9VAfdt6tko4eWnFu4Rf9qqoLsy7pHWM6mL%2FIOvlH8B5D8GAGR1XR%2BtAPvhQu%2BA3T5rF8Hsqh9KWRj1XTOwVg0Hye45d%2F9y6%2BMdSp94PcBekS1Sx9sP2mpUflffEFxCz7h9NnzKdRmyYyFVcr091WgSdJ%2FQMfrV5tfUbXLIvK70c8%2FfKrAbamfciQra2oV1IXbylETF02cHJ3sHuZSnv%2BYn1haf&X-Amz-Signature=6fba3823dd0fa02a8d650499f6b698f20473a9fd4ec212ccb37d9695a30df8a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2DDHK2R%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtStGyk2NaAdnsmWPZ4Hd3iNLC7HoZBs101P%2FHVleW4AiBYslu%2FLdqjjkH6RciTIWUAyN9dMg5tDXO8FVMaT55uiir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMmqNn1%2Bw0tbJM17UWKtwDXyo2%2FoaVQDAfIIjX0LBcrgfHy%2BRBffRrhtiOcHfQSt21oWJAt1zxDOACdYLfq8Y%2B4gYhxub1VFYIYh7nqA9HGE67F5VSOmHh7zlGii0Q1X8ieVWM13l83xiklpLtwTZfD12zZkjrZznNnEAOQywrmUSlro5TwrtgwFPyQTODO78jhgPa%2F1%2BBJBkjM%2FJ%2FI5GD%2BiY1duS2ld17HqdEf9DSOemjocXvlKZvuDOCAsl5oKm9767dxccK6pvnEVn2En9Uz5Y5Z9QLQnqW00vqtk%2BozEOntNA0Vx93FJA8pNrLLyWTiOFwH8OCy%2FvyQWc7nV6%2FVkZpOziYSUukolwwT%2BW7ypqquUWCY3EBgzgivR2my2ivNVBgCmfJizh7mfepnq868jFOFCunezN9nlbU5XEmGfv6wdkgbd2iY8W8iFLRkF2JEUCUlFSooXAdWm1ZDSKmi8oaI0tZgU47SGwXs3rX3ff8bNA5QFLMRGQz5KQEazqd7hbHncacdhSpV7VFS02e%2FGYPToFOkT6I4jRS7mLASL9aYBFOh58wkAfPvGZIowQeIJ6Jrm2MRK%2Faeyhl5O245zjX3qf7h9fTJ6gPMK8ZsiVugzoaWokWV4%2B6xyBLpoX1XoIRa1lX8BohWYgwvczO1AY6pgGLv73LihwTZdJRimh0eQbsj%2BklIMLMLmatwjJ84BBxeOMrTlONkugmFay5zUPmQa48GcsMeseYV4rgo76gv198SbbZitCUGkBiNvK7a%2FzbgQIt5AxpcMbMXFGHNjazPP%2B2IMDnkhWFxWLogtcqc%2BZC9ICJYROEkRjfot2%2B1pSltJTMU6ilJSoVjkCBasHb7KCoD5J7QKNRgFOe4upVVbxovROc1bUN&X-Amz-Signature=b8c7d804accf266e30bb2b233899fb21f61dbcd8ffafe1b4bef14fb4d90df389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2DDHK2R%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtStGyk2NaAdnsmWPZ4Hd3iNLC7HoZBs101P%2FHVleW4AiBYslu%2FLdqjjkH6RciTIWUAyN9dMg5tDXO8FVMaT55uiir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMmqNn1%2Bw0tbJM17UWKtwDXyo2%2FoaVQDAfIIjX0LBcrgfHy%2BRBffRrhtiOcHfQSt21oWJAt1zxDOACdYLfq8Y%2B4gYhxub1VFYIYh7nqA9HGE67F5VSOmHh7zlGii0Q1X8ieVWM13l83xiklpLtwTZfD12zZkjrZznNnEAOQywrmUSlro5TwrtgwFPyQTODO78jhgPa%2F1%2BBJBkjM%2FJ%2FI5GD%2BiY1duS2ld17HqdEf9DSOemjocXvlKZvuDOCAsl5oKm9767dxccK6pvnEVn2En9Uz5Y5Z9QLQnqW00vqtk%2BozEOntNA0Vx93FJA8pNrLLyWTiOFwH8OCy%2FvyQWc7nV6%2FVkZpOziYSUukolwwT%2BW7ypqquUWCY3EBgzgivR2my2ivNVBgCmfJizh7mfepnq868jFOFCunezN9nlbU5XEmGfv6wdkgbd2iY8W8iFLRkF2JEUCUlFSooXAdWm1ZDSKmi8oaI0tZgU47SGwXs3rX3ff8bNA5QFLMRGQz5KQEazqd7hbHncacdhSpV7VFS02e%2FGYPToFOkT6I4jRS7mLASL9aYBFOh58wkAfPvGZIowQeIJ6Jrm2MRK%2Faeyhl5O245zjX3qf7h9fTJ6gPMK8ZsiVugzoaWokWV4%2B6xyBLpoX1XoIRa1lX8BohWYgwvczO1AY6pgGLv73LihwTZdJRimh0eQbsj%2BklIMLMLmatwjJ84BBxeOMrTlONkugmFay5zUPmQa48GcsMeseYV4rgo76gv198SbbZitCUGkBiNvK7a%2FzbgQIt5AxpcMbMXFGHNjazPP%2B2IMDnkhWFxWLogtcqc%2BZC9ICJYROEkRjfot2%2B1pSltJTMU6ilJSoVjkCBasHb7KCoD5J7QKNRgFOe4upVVbxovROc1bUN&X-Amz-Signature=0cde56b3e3263efe3bfaf9d1138dfb3f2a6de0325e38c5bbfa0681ed177548a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXD7LPD5%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgWSl83kQNXQfPvKdXLRki16maz0jODt0v%2BJUJKg%2BkQAiALRrwEDhJkFbbQx4ERgOD%2B%2FjrmhWxqN21YjgleGzurTCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMieoVe%2BojjRJFZpXYKtwDuSCh2CvgPycuw47Ncbg%2F0WCGA3Ab9VVrj7NmX%2FOD5o3NITZsXMXF3eJ0%2BH1yUwHa5cdLWThzgfHzrfH3HbHzqy0JTb5NsIpQ6YKcUKpzj%2BhVrepLKzyEuzs9QM0UvtBSVIgYu89lHcEQLSCCTVnNiCFxDuu3qpIug28rkpXLIA2hjTnYw9ROCNLLLTboH7ysxwNeZw2%2Fr8j7mGoFkiBHADZ30aticasS45h84SKFfv5N9gx1pr8VYP%2B7CvYh5N44hNKpeSJTSTEQAJBBQooJhsJIAp377QzipfUGkdvCIPTytvM9N3lr7I%2BvlY9urWveqNmPRmxRsjQ7KwUfOmnrpcqfDmjiA4yd0YBXzD6baLbRXpblcN%2Bs0bq4XcOp46lqV%2FXJ2lhaBdAUSPCwMjPtw6zBDR7945dMFx%2F7my4slwTqHhVn8wlRrUF58DVnJ4JEAW9vgcym558njNUxoLO%2BIY%2F3C1ALnuVpZzodvp%2BAZft%2FcHrgjvvro3WUcMKr597kZEO58sXv4Y9XhJsCceDDfNJlL5oWCdQklkABM3DEUpKUbrec9gNeuo1FySG%2FctvXekLtuvdd9muTZsTA8By0lJ%2FHD3q03bpIIMr5R0ROmNl9UMDuLWTcyg1tNxswnczO1AY6pgFtRgh91Jsvt5pzkdOK85vT%2FpZMPFKAfneFVelkEngNvytekwhTmRGi2SD1pygcX9%2BXpC1LfyRkz8k8z53QfPxBvsP%2FhRK%2FaVVhnt19jkEZKoRKp4u%2BN%2BzfrijDJEAFk4bgoNG6MD2P7APBUpACMzo6hKZgqC83hI805olxYxtaIVa%2F%2BmWAkXiiSVfoAukOv%2FetBrYfG0F5mj4NFERhW9luG35QbDeT&X-Amz-Signature=68a6abf627b787d57946e39f2d0b9dd6ea2d40dc9efbad7bb4bd65d57785d5b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

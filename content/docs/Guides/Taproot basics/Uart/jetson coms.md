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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T46JUSBL%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcDVnjQdfiSrbn1MLSfr%2F%2BdwTQBO3stv7xUPHRIs300AiAHKiag6ckl6HyIYAoiIP6nNGZvkn2GCTwXKdKelqEZdSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM51CucwnNUd9O44aoKtwD0Ol6EtySUZl5Pc%2BfQPrAa2Yg%2B2Wb3jrdJ8ITT9C56Qd3WSiseyrZn0XIGBL1WOl4XhELMHJQDhM7bB62%2BJ%2BhwezxEWgGVRzPoMfNO%2FlAdgdDVFWJF3A1%2BHizRKCXnMIt1iBOlzW%2BBLjxEu1F6QV3dWRlQ9bvY5CImIxeRUM56pIVfObkA%2BNpABR%2BfWTdtjAGs40bwNIAYsllEggpbzNFizjtfrIoAki5llFyc8zuYaI9G4xuVBwqj8s0%2FuAfwh2fwcz7W%2Buh6c5CMLQ4VedPDDuWKi51b5UcMW0bM5DY7OOkWF%2BzAaqUGl9Cps3GC46KnlnJjxm%2BW8MIEQhVFVCGVWiHxe5k0QI8KDOGdDoUL1THm5rrx4ADUoakVlC1EwEfr8HQfISGmM0XzaS3Rw5Vukm27QrTd45gN7YcXgwcaDdO6Td%2FklE4ALbkENDaQPui%2BWMmIBNIR92L8akBpcI%2BMo%2F29sifq0OS7lWmH5XwrApxuE3o%2FrGjTepYoXxI4fIf%2FVz3OEmWS9CjGyeEcJIvyegdz4Y0bw8HigKV5wpoAno3L2zfhySBN%2BKNAU1gVkE6Okj6KaPMpHaFYHugeCCC5uC85KxpgOuRmiNdPkreyVONKB9aaCHRKVTBtjQwmd2OyQY6pgH739JQbaobY%2F8E%2BjiTYtJejH%2ByInU0xH5hY90ovhI94R4ZsZYFlCYU7wde6AzLSd7D7oA8fvjngYrExVmwHNcqHsfXsXjb9pGq20gEu6FrzzCFXn3RHW3gHfqP9vz9vfuM1I7qv40s3dhUjm%2BIl%2BjuiLJncygWf%2B8RvwJd%2B1M28rxeiU3RffMQXRbYMJ%2BXMsaD6wLqoHwTEI8TCsRc82AH1XIoIinn&X-Amz-Signature=e3db7b1fd7db931bda6eb6a5be5176cbc945b70f1cab34615463af04b8469c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KITDZ44%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkwTl9PmSrkYg94x6Q0No%2FRddNpYMiSPR%2FxzYF9fey1QIhALGtwjt8kktla1bCvJi50MGzHcP9yd%2FIX10N65WeI6FhKv8DCEoQABoMNjM3NDIzMTgzODA1Igw64GTysIwg3Vcz%2FPQq3APi8mxoWKgMnanTKHxiOy1BpY7%2BtXAxfo4I8dcFCf00nY5bsMPGlzIx%2Fy2P0Vk3YSOiOpjJTJlAAqg%2BkdFYyyHacp8gq1kgxEJaeY39Ins%2B5XO3kPV0gzBU9XXZwzBPX98YxDdhTqHQTsU6jIBi9XGIyxrCvxYHvbf7E0wR%2FLhJbscnrMhjyvKbr0r6DlOPHHjSstwkQAbrOTRFRqqf99UoZNKnVDOEP6LeIgbJsNxnubSu8U%2FeUkXTevbLnfud6esEeRVMay2V1pDvKXYy9SAwUJDTy6W%2BmGZZFA6thM4RTI8zlScjHv%2BuqWSAhvbe8fRhJSumAD1Xgj4XLQ84NEKOWyVZuG0zou2gtHcjsuR1yh4crfUHav2Y0PP%2BJYQIzQFQlrUEQq03rJPM%2FwsSgRJBmS5ZlhaMIgCOL4ndpSROsoU3z53AdSByN6StW%2FMlYL0sPdeUA5WKwq8QuRJCfUJEQb%2FvoP1MvS3wOy0hmDgRycUqRVwNIPGS8SY8xIp9N%2BGyOI%2F6YwzotfJKJLsFRcrNIDcvTRKWewZLl%2BDrTx3vdSPsYm7G2aD4hREwzbSD%2F7SUwXCqTmGtJfI%2B%2B3O9lzVKeEzApQOEXE6GQBHFdZgUEJv06B3UerfVEDUamzC83Y7JBjqkAaseA%2BjJKjJ1UPfHsYMHK1CBQnMr5RT9q4SYgRS4HeJofYp6psOw8EjUvwbF5hEYdViQdWBKJHD%2FMoU9ek0dJPGwdL1fb4y0fIvamzWbo26WcN8lQJWCVjPdyUjs7E%2BynCVJxT95I6yeiWkQKDaKNoYZ7XwoLk9i294WLMuNILuxpmpsMAdq1tk5X%2BgFiuYw1T4WSqwsSfoO81hMgQ1MZaD9yzw4&X-Amz-Signature=c3e5c436ead7bd638235d288836fc7a6df58f2acceae7389055090426595ded2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSMCMMFB%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4yiHA2E3LzgFZuYjtIOVQZ1Plyo1UFJ1S%2BQrkSeYDZwIhAMqcVflQkuK7h%2Fme1e2sI5rfAycPtcUhUTAoP53yRLs4Kv8DCEoQABoMNjM3NDIzMTgzODA1Igys8KDvIg%2FxlHPCxmEq3APC1caBq%2By0kYIy6XWE4ialb1inegi6GSz0TYHT0IopmdggBoKbqC0EtWQKRs8xNF27NjCjk666KpYLsh4M%2Bvv%2FPBF9y4icdp4tE8cUv4e4GmodnuOSPPkpAp%2FZ%2FXiWyD226ZrcVcbNgZr6%2B3sNIJsZxu129Rs0clJ1s3fSYeEq1Pff4ByZWy%2FsPQLYQNYzQe8WHnvCq%2F6BFuS2%2FrjwAh50epG9ankQcK7MRhBgOtKZek4AD7BOTyFl7aS0swk0E15mmQxESn2D6Tb8sNDZqjvMhjME%2B1acqa6pa9NN0sDEai1j11fajOdgkSmTv%2B2UcDhl8UhXSitW%2BVXwk59e85w0osSJcNhAyk6zEji91Ijy%2Bi%2BguDTdMNH%2FWgtxtZDXj7WYvNoGqPOn9oaf%2BRPh5CLomMZ67Gk7sSiPc%2F5dpNCHv6XnIpka3jrhMJz3kKu0bESZ2XuELdVucNCjESNoAugdA%2FZv1YRQ94gUU6Gy5VGRCOvjpSXSFGS4J9%2BLBDIjztaQvessk5RGMGwK5LqBAQ%2FzmROPK%2BrphYSzFM6q%2FH356Gi%2BiquZgv%2B5rAepxbyTKA14RWmjWdr9WeyeSaGKMpOjZwmP%2BZ7GZIH%2FaAzbD5CWQu%2FFPUOLjUdhC2mpaDC83Y7JBjqkAQjrvyY1CkX8R29DfaM2ry2jHATngLfbMuYHIh1MbXrUalOY%2BJhfTwMmaU%2FQOMod1KzV94uHP1QTeRP8G39PZLsKZGsBWnZhOa8gR2FZRog5CCJzdSR%2BFOLe6w4BERRzLg%2F8xsMt8pk7oT7gs%2BxW%2FjEMaTV24FjPn5tc2tZnbr3V2ClUvvvceeKo5fGuKm1%2BjKc5CoGrAFsUz73uzgAFUiUAfaqH&X-Amz-Signature=5c1b8c177043d43913d994353d603abf509c5c87a5689d88c97e89499518fe2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSMCMMFB%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4yiHA2E3LzgFZuYjtIOVQZ1Plyo1UFJ1S%2BQrkSeYDZwIhAMqcVflQkuK7h%2Fme1e2sI5rfAycPtcUhUTAoP53yRLs4Kv8DCEoQABoMNjM3NDIzMTgzODA1Igys8KDvIg%2FxlHPCxmEq3APC1caBq%2By0kYIy6XWE4ialb1inegi6GSz0TYHT0IopmdggBoKbqC0EtWQKRs8xNF27NjCjk666KpYLsh4M%2Bvv%2FPBF9y4icdp4tE8cUv4e4GmodnuOSPPkpAp%2FZ%2FXiWyD226ZrcVcbNgZr6%2B3sNIJsZxu129Rs0clJ1s3fSYeEq1Pff4ByZWy%2FsPQLYQNYzQe8WHnvCq%2F6BFuS2%2FrjwAh50epG9ankQcK7MRhBgOtKZek4AD7BOTyFl7aS0swk0E15mmQxESn2D6Tb8sNDZqjvMhjME%2B1acqa6pa9NN0sDEai1j11fajOdgkSmTv%2B2UcDhl8UhXSitW%2BVXwk59e85w0osSJcNhAyk6zEji91Ijy%2Bi%2BguDTdMNH%2FWgtxtZDXj7WYvNoGqPOn9oaf%2BRPh5CLomMZ67Gk7sSiPc%2F5dpNCHv6XnIpka3jrhMJz3kKu0bESZ2XuELdVucNCjESNoAugdA%2FZv1YRQ94gUU6Gy5VGRCOvjpSXSFGS4J9%2BLBDIjztaQvessk5RGMGwK5LqBAQ%2FzmROPK%2BrphYSzFM6q%2FH356Gi%2BiquZgv%2B5rAepxbyTKA14RWmjWdr9WeyeSaGKMpOjZwmP%2BZ7GZIH%2FaAzbD5CWQu%2FFPUOLjUdhC2mpaDC83Y7JBjqkAQjrvyY1CkX8R29DfaM2ry2jHATngLfbMuYHIh1MbXrUalOY%2BJhfTwMmaU%2FQOMod1KzV94uHP1QTeRP8G39PZLsKZGsBWnZhOa8gR2FZRog5CCJzdSR%2BFOLe6w4BERRzLg%2F8xsMt8pk7oT7gs%2BxW%2FjEMaTV24FjPn5tc2tZnbr3V2ClUvvvceeKo5fGuKm1%2BjKc5CoGrAFsUz73uzgAFUiUAfaqH&X-Amz-Signature=61dff1097cdec068d6930174388f62e5b2e76c830b35c47c55bc5000aadb133f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KITDZ44%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkwTl9PmSrkYg94x6Q0No%2FRddNpYMiSPR%2FxzYF9fey1QIhALGtwjt8kktla1bCvJi50MGzHcP9yd%2FIX10N65WeI6FhKv8DCEoQABoMNjM3NDIzMTgzODA1Igw64GTysIwg3Vcz%2FPQq3APi8mxoWKgMnanTKHxiOy1BpY7%2BtXAxfo4I8dcFCf00nY5bsMPGlzIx%2Fy2P0Vk3YSOiOpjJTJlAAqg%2BkdFYyyHacp8gq1kgxEJaeY39Ins%2B5XO3kPV0gzBU9XXZwzBPX98YxDdhTqHQTsU6jIBi9XGIyxrCvxYHvbf7E0wR%2FLhJbscnrMhjyvKbr0r6DlOPHHjSstwkQAbrOTRFRqqf99UoZNKnVDOEP6LeIgbJsNxnubSu8U%2FeUkXTevbLnfud6esEeRVMay2V1pDvKXYy9SAwUJDTy6W%2BmGZZFA6thM4RTI8zlScjHv%2BuqWSAhvbe8fRhJSumAD1Xgj4XLQ84NEKOWyVZuG0zou2gtHcjsuR1yh4crfUHav2Y0PP%2BJYQIzQFQlrUEQq03rJPM%2FwsSgRJBmS5ZlhaMIgCOL4ndpSROsoU3z53AdSByN6StW%2FMlYL0sPdeUA5WKwq8QuRJCfUJEQb%2FvoP1MvS3wOy0hmDgRycUqRVwNIPGS8SY8xIp9N%2BGyOI%2F6YwzotfJKJLsFRcrNIDcvTRKWewZLl%2BDrTx3vdSPsYm7G2aD4hREwzbSD%2F7SUwXCqTmGtJfI%2B%2B3O9lzVKeEzApQOEXE6GQBHFdZgUEJv06B3UerfVEDUamzC83Y7JBjqkAaseA%2BjJKjJ1UPfHsYMHK1CBQnMr5RT9q4SYgRS4HeJofYp6psOw8EjUvwbF5hEYdViQdWBKJHD%2FMoU9ek0dJPGwdL1fb4y0fIvamzWbo26WcN8lQJWCVjPdyUjs7E%2BynCVJxT95I6yeiWkQKDaKNoYZ7XwoLk9i294WLMuNILuxpmpsMAdq1tk5X%2BgFiuYw1T4WSqwsSfoO81hMgQ1MZaD9yzw4&X-Amz-Signature=7fbfc09e83527de9ae53d4a26453a23bea2aec2d6bfa578478ae8bbafd7bc512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KITDZ44%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkwTl9PmSrkYg94x6Q0No%2FRddNpYMiSPR%2FxzYF9fey1QIhALGtwjt8kktla1bCvJi50MGzHcP9yd%2FIX10N65WeI6FhKv8DCEoQABoMNjM3NDIzMTgzODA1Igw64GTysIwg3Vcz%2FPQq3APi8mxoWKgMnanTKHxiOy1BpY7%2BtXAxfo4I8dcFCf00nY5bsMPGlzIx%2Fy2P0Vk3YSOiOpjJTJlAAqg%2BkdFYyyHacp8gq1kgxEJaeY39Ins%2B5XO3kPV0gzBU9XXZwzBPX98YxDdhTqHQTsU6jIBi9XGIyxrCvxYHvbf7E0wR%2FLhJbscnrMhjyvKbr0r6DlOPHHjSstwkQAbrOTRFRqqf99UoZNKnVDOEP6LeIgbJsNxnubSu8U%2FeUkXTevbLnfud6esEeRVMay2V1pDvKXYy9SAwUJDTy6W%2BmGZZFA6thM4RTI8zlScjHv%2BuqWSAhvbe8fRhJSumAD1Xgj4XLQ84NEKOWyVZuG0zou2gtHcjsuR1yh4crfUHav2Y0PP%2BJYQIzQFQlrUEQq03rJPM%2FwsSgRJBmS5ZlhaMIgCOL4ndpSROsoU3z53AdSByN6StW%2FMlYL0sPdeUA5WKwq8QuRJCfUJEQb%2FvoP1MvS3wOy0hmDgRycUqRVwNIPGS8SY8xIp9N%2BGyOI%2F6YwzotfJKJLsFRcrNIDcvTRKWewZLl%2BDrTx3vdSPsYm7G2aD4hREwzbSD%2F7SUwXCqTmGtJfI%2B%2B3O9lzVKeEzApQOEXE6GQBHFdZgUEJv06B3UerfVEDUamzC83Y7JBjqkAaseA%2BjJKjJ1UPfHsYMHK1CBQnMr5RT9q4SYgRS4HeJofYp6psOw8EjUvwbF5hEYdViQdWBKJHD%2FMoU9ek0dJPGwdL1fb4y0fIvamzWbo26WcN8lQJWCVjPdyUjs7E%2BynCVJxT95I6yeiWkQKDaKNoYZ7XwoLk9i294WLMuNILuxpmpsMAdq1tk5X%2BgFiuYw1T4WSqwsSfoO81hMgQ1MZaD9yzw4&X-Amz-Signature=5d95281712b65e54e2c17967f778f244ae3166ff00455ce2a4ec35fc5592d710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USDMQ3PQ%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjWqK0s%2FaaKUP%2BS4fyRoDmORI54hHVNbaJ3Hnfu1glAAiEAt8ruZVI0gL47rLM%2ButMWm8gVoK1IVyfy%2BZtxUj7xM3Iq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPypMdZq2sz%2FUaMejyrcA%2F7OAxOAT07mCOVAk8RIj9PkzlpFRwCn76a8xp2c1QG%2FRooucYVSEtlVfGGA%2F2K6ADrECRjf4gC2%2B8imxuiIXXKGpLtS1pC5XG1%2B%2FjsYqvNf5h12x0UrVkPoSvMhBR1vW9rB%2BwBIDSnIPx47C8yWWo5%2F0QVj1tIhAWRPLQHfCnhmt%2BPGoS%2BtDqiUNpp4WEVursTmIEW9USK7C%2Bffw6NMy6oS4E6PDoxPY57wYB%2Flv1O16pAvsHSV%2ByUe9nlqSQFZe%2BKZc9SnMY%2F%2B4CIUsVw5DvIOgpTRGIjc4HuwdTlKUd0pPl5APYq7c%2B0l0irlLqCfp4zrnnhnpI8E3Xzc0gzpT14xZG6A3nge2P2CcT3OA8VCkFF75PBpd1VA12%2FJ2cWcFxD40KSfqk7fbU1OsFpakfKMIAgeFlIkvIO0SmQWDYA%2BpkGqPM0QqFzDnVSxp5uBInaDComXzWGy6JbgO0C2X4Zts423misgAGqEWWu%2Fg3yUqQ06vhVSoPXuo4tZ9%2BkeCw%2B1eKwu%2FTpEIDsPgWSjmJnKUoch0N2ojzex2WZSweHUBHlxoRI7irMsHoHSfSmZ50zVzFXSq9Xd3NsmghAd7VnQFSThJhh8J9izieSPvkrej%2B9TdADuNJRKH%2F3MMPjcjskGOqUB7pue%2BMd9BRRxgJStnr7XXnlqcqe621gzXVdXrgwqgXy9AaGi7S5bu4YLR%2BzDvNX%2BqWqZHENInAhydmn%2BiH2cFl%2FfgOrkqLxlEvGhOBOaJxkLEv%2Fwm0dZJHADGkxdLHV16mM1FsaPO6L3zlwi6J9YH9lH%2FHr%2Fl%2FO8lYzDv0OOrvKlZkYks%2FlPuZaK35ShTm1rvn3Uxq3lZdnXXtdKhW7DwFrIofgx&X-Amz-Signature=9b34fbf06b053952fc3503c31389a8d374ba45475b3dc1dbc696a25b96bd8001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

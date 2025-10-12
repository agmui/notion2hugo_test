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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2VGNIBY%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIGWONTNtORPjv%2BUzRebRUkQQHPdtk8vMqgPNZM2uWgKmAiBWoIWKeAJwarDtGRxNI0JuqCXandg3El8lMDekwBkKPyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMbuwMDctW%2FEMh59MhKtwDK817VOGJWViefACsqKjtIkb3aPyjRYeFm3qWabo79w7KB8xuWjdvdMZCgUM%2Fj03Fhmw5dfLKnb5IYSH2nPrYveaimPmV2hmtspsaEe35Y9mFk1438Brt%2BUyQmsljdx%2FFPQESNptIH6VeCgViSgiRpKVIbQ2%2BeK2qkPZsPnkpKDpIlOoQF%2BLu8Gx3PBSBLodubOgeACkdHTDqnTBbzuFiHMZJxbMHjz%2FjQy6S9WxwnngaoNpF5T3I%2Fg98zOHhqBYwDzSC%2BQfh76aRnSeZCCMR4%2FDRoL9gT10IGwVYGsQAW4qx7GtkBJZcLvihiw1U6tG68pF8zDMcrn1LtONBMjst8girg2P0MVSKcXYeLzONYhQsTdW2FJs6eiyqUo5%2FmpP%2FD3GIGdec%2FNn%2FRP0NE6CgddAnqMy8xkNmmlyW6Y4CzweL%2FEHROIcJfmcMRLzQpmMLs89vcLPrLpdHeD6eS3wkGTbym7peN9xRMynWh3xKGo0%2FMKzIJS%2Bi8nZbpueeIdgnDE%2B6rm%2B2a7j598Ajdmgq3V7%2BbKSdzVLDlSqJHV%2BEbSLwUJMBqpiRP1YoofIQe2Jka8s0pfDxs5%2FHNVfgt1EEPPZNAzFfeucFYofCe6bsqfDx6S6z8ADvBjpgKLcwz7irxwY6pgGvGuE7DkUquL8M6oj9mcuYHz8Qw2HkhZQlswZqMg7kOY%2FWcWKgUK6vlSV3qjnVYt%2Bdxf29TmiikJ4s6zgBaKfuK61KB%2F4XpCuM0qbmPfxW6lyRoBXxCPSDN%2Fo4MahbDkrX4v7yehQ6pF0P%2Be1ZfOMoIxgaDFPhK6kMIM2fTC2Q5f5YigTsp3djn116ZNArD9A4XMClgtmqVWWvKz8VFxfhe%2BowueDZ&X-Amz-Signature=ed93001a13202a01224e84ce63dd788e2313cac9b1f549347f504a0e38a58db0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNMSIFMJ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBPWV3Cbdl1rvA4CNaSFKs30HAIxjYa6ZytCipF6OXZBAiEApi3JjzUZMSF7KE%2Bi1jZEFpa0uhxQKAUEGEb7DnRTBJgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDAO6F7PtSbNjqzoKgircA2TaLShiLL6iIRUlDA07mncEK3tq0z4EFAvLXPdlhlGu%2B0gb2TLmf234XtFwykZxPyPU4WtV76GUIOoAK9aBGwgXIPNuZkUfzhMlC%2Bp9TLzffAhxQxk%2BkUwhMV8opwozsXChVZZ5WGLfosXaec19lWurTDYBQSubZ7TR2YK4xfGJGhcTS4g7RZQsphs8X5fjbR%2FgQrZ0pc%2BtH9ILoZx9KBakrwFSN3eCQ3%2FLIaqZsWV4TSNs7v5kA7IsWkfcVfETAdPMg2PFCpZXIf3iFWFG1EZ07YTAhEERkVjSayZGOprPkvGMYMJk0tTMCSeLRgJaNH6DhgOxLdHP12sk%2Bv5Rq%2BdkaHJ6m0ZRbvn1SLKufo7xGtjXnQo55ytrvcyYCfCi4XfV%2B9JqX2dECNRK3qPFpdrsxqcUmIwnDNe%2FZK1v8PoOTI2NdsugOy0Uj0P%2FVdpG1u%2FdRuJ6JRXihJAwINCCUBIFiLUn5MYSVWr7kXaLI%2FmCts71TBOr6JjOLV44OAq5KA8NKqyZ3d%2BokaK%2BQOmoPLxOFNV4Azx6%2BJzU433HaAqoh%2FSFMlBkWdI%2FcFBXW3Hiy04nQVaAjeFqLR96mtUq8i7P3LaNyLN%2FDTVwSRjgIuJ%2FJOCwYWskg4FvnT8qMM65q8cGOqUBYTQY%2FuFcBLUSL5hiGojB174%2FzRCoSdbwpkun1NJNTfMDc4SYsgPsf9kM3RUrBoQgOxdBuM6j2CMwrQwOw%2Bn8Z2ToUjlGKr%2ByB5ueLyCKS4bQ09QKSElQFp%2B%2Bt17OZrBMDjMLx59LGxU20XDEjMUckRGQCcblMlyGn4ba0HGXmAspjMqvfPlHLwpCEbBkmWexQxyE%2FlrZ8t7uXOLShkw7v3kx%2BGK0&X-Amz-Signature=80e52ad764142494f9431a426fbe75ec11430461157094faba8f552dc7f06b16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2G7PNRC%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBfXfvGzhslLv%2BNaMMgHEXjdWy5D4AZlqmFlE%2B7FZW2QAiEA8MoWBL6ccBaxjgaJeLFIJhwpEbWaKFu78L9g%2FUjt0xAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDENaTqky9kQwWubJ%2FyrcA%2BujBW6PpEIDCMdSLzNnldeSxrtCGs7rQGbKF%2Feltojb4%2BF7NKbTzCsYF40MTkOBeTGAWaRLyzv2UcvYrftLYW6rls4HmpeEnx%2F%2F40%2BWR0iCn95HtTswO0ORAORps6gDNDsCW0RgJz1pgA0AT73nYsXXMihP5n9RgheoF12Y%2By8rH3oeNNsUp%2FoKo6EsveukRyb%2FuCosPBMi3nzCM4Zkuz%2B0I7Gget6xVTApOBeoffYQReERO10y8A%2B%2BCYF2eavPXjd1oaoDY1a1Bt6c%2BeQ7RW3RoYWM1FGFwdBsA0UuZRuplY%2Fc%2BprQdAP9%2B3KkUDGgE9QFw%2Bm3i67WBK563pa5A%2B7Q%2BPx02GzL6En1CRAGVRgzvAP42kFvsxU3SyVnTxeyqKCqzrsn9rIwNajAyM%2FLwQ3qwJNd%2F6spOAt3NcEpQFloAB7b17fi993lWIZ0w1oUctRW5z78WdhMm6%2B4j4C8M7%2FY%2BjlGKoZcduB%2Bj9p52xdSqhekD0JsAKdHQ8MINV5IpRAu0U3E%2BxaY%2FaPBNM8lanOs0z%2Fa6X%2F%2BtwmeO%2BfjluO8%2F5WRrgFV2OmI5evgDTa22S90PKeo8EnRx1psjcwGPzRq8QwBwyJRvWzs3%2FS5zRtc5aXjrj8j9ncH9zfWMK25q8cGOqUBJbZdhC1%2FdNV986dC7TL2WrzGIxt2aeY1eYENYSTgxsOudqMsPdsiQT9v9%2FTK7OH2gJKpqQRkC0teKZB8PCL8CAiaLx3oxjiMoRaDVYmFFfhOXcTtlp3ZYH%2F0v0Ha60jqzNCplrwBLOt1Mk02KubaCRSt7pPl78ahus8qHYLi%2FEDVAFYarO7F1suMafR9lOFbzGMoBiQQ8wkej%2FhN7TjFW88fVcrC&X-Amz-Signature=ee3edb67c587186013874a92c843a3247bf243d2513d965970109c132dbd3906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2G7PNRC%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBfXfvGzhslLv%2BNaMMgHEXjdWy5D4AZlqmFlE%2B7FZW2QAiEA8MoWBL6ccBaxjgaJeLFIJhwpEbWaKFu78L9g%2FUjt0xAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDENaTqky9kQwWubJ%2FyrcA%2BujBW6PpEIDCMdSLzNnldeSxrtCGs7rQGbKF%2Feltojb4%2BF7NKbTzCsYF40MTkOBeTGAWaRLyzv2UcvYrftLYW6rls4HmpeEnx%2F%2F40%2BWR0iCn95HtTswO0ORAORps6gDNDsCW0RgJz1pgA0AT73nYsXXMihP5n9RgheoF12Y%2By8rH3oeNNsUp%2FoKo6EsveukRyb%2FuCosPBMi3nzCM4Zkuz%2B0I7Gget6xVTApOBeoffYQReERO10y8A%2B%2BCYF2eavPXjd1oaoDY1a1Bt6c%2BeQ7RW3RoYWM1FGFwdBsA0UuZRuplY%2Fc%2BprQdAP9%2B3KkUDGgE9QFw%2Bm3i67WBK563pa5A%2B7Q%2BPx02GzL6En1CRAGVRgzvAP42kFvsxU3SyVnTxeyqKCqzrsn9rIwNajAyM%2FLwQ3qwJNd%2F6spOAt3NcEpQFloAB7b17fi993lWIZ0w1oUctRW5z78WdhMm6%2B4j4C8M7%2FY%2BjlGKoZcduB%2Bj9p52xdSqhekD0JsAKdHQ8MINV5IpRAu0U3E%2BxaY%2FaPBNM8lanOs0z%2Fa6X%2F%2BtwmeO%2BfjluO8%2F5WRrgFV2OmI5evgDTa22S90PKeo8EnRx1psjcwGPzRq8QwBwyJRvWzs3%2FS5zRtc5aXjrj8j9ncH9zfWMK25q8cGOqUBJbZdhC1%2FdNV986dC7TL2WrzGIxt2aeY1eYENYSTgxsOudqMsPdsiQT9v9%2FTK7OH2gJKpqQRkC0teKZB8PCL8CAiaLx3oxjiMoRaDVYmFFfhOXcTtlp3ZYH%2F0v0Ha60jqzNCplrwBLOt1Mk02KubaCRSt7pPl78ahus8qHYLi%2FEDVAFYarO7F1suMafR9lOFbzGMoBiQQ8wkej%2FhN7TjFW88fVcrC&X-Amz-Signature=d4bbe8ecb0be9e9db3323faa700034e2cf097309ce05ce9177695cadac2488d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNMSIFMJ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBPWV3Cbdl1rvA4CNaSFKs30HAIxjYa6ZytCipF6OXZBAiEApi3JjzUZMSF7KE%2Bi1jZEFpa0uhxQKAUEGEb7DnRTBJgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDAO6F7PtSbNjqzoKgircA2TaLShiLL6iIRUlDA07mncEK3tq0z4EFAvLXPdlhlGu%2B0gb2TLmf234XtFwykZxPyPU4WtV76GUIOoAK9aBGwgXIPNuZkUfzhMlC%2Bp9TLzffAhxQxk%2BkUwhMV8opwozsXChVZZ5WGLfosXaec19lWurTDYBQSubZ7TR2YK4xfGJGhcTS4g7RZQsphs8X5fjbR%2FgQrZ0pc%2BtH9ILoZx9KBakrwFSN3eCQ3%2FLIaqZsWV4TSNs7v5kA7IsWkfcVfETAdPMg2PFCpZXIf3iFWFG1EZ07YTAhEERkVjSayZGOprPkvGMYMJk0tTMCSeLRgJaNH6DhgOxLdHP12sk%2Bv5Rq%2BdkaHJ6m0ZRbvn1SLKufo7xGtjXnQo55ytrvcyYCfCi4XfV%2B9JqX2dECNRK3qPFpdrsxqcUmIwnDNe%2FZK1v8PoOTI2NdsugOy0Uj0P%2FVdpG1u%2FdRuJ6JRXihJAwINCCUBIFiLUn5MYSVWr7kXaLI%2FmCts71TBOr6JjOLV44OAq5KA8NKqyZ3d%2BokaK%2BQOmoPLxOFNV4Azx6%2BJzU433HaAqoh%2FSFMlBkWdI%2FcFBXW3Hiy04nQVaAjeFqLR96mtUq8i7P3LaNyLN%2FDTVwSRjgIuJ%2FJOCwYWskg4FvnT8qMM65q8cGOqUBYTQY%2FuFcBLUSL5hiGojB174%2FzRCoSdbwpkun1NJNTfMDc4SYsgPsf9kM3RUrBoQgOxdBuM6j2CMwrQwOw%2Bn8Z2ToUjlGKr%2ByB5ueLyCKS4bQ09QKSElQFp%2B%2Bt17OZrBMDjMLx59LGxU20XDEjMUckRGQCcblMlyGn4ba0HGXmAspjMqvfPlHLwpCEbBkmWexQxyE%2FlrZ8t7uXOLShkw7v3kx%2BGK0&X-Amz-Signature=2fd25515662c8d6d380847b229b4ac54f5337fb10574dec6dc107190c2463b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNMSIFMJ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBPWV3Cbdl1rvA4CNaSFKs30HAIxjYa6ZytCipF6OXZBAiEApi3JjzUZMSF7KE%2Bi1jZEFpa0uhxQKAUEGEb7DnRTBJgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDAO6F7PtSbNjqzoKgircA2TaLShiLL6iIRUlDA07mncEK3tq0z4EFAvLXPdlhlGu%2B0gb2TLmf234XtFwykZxPyPU4WtV76GUIOoAK9aBGwgXIPNuZkUfzhMlC%2Bp9TLzffAhxQxk%2BkUwhMV8opwozsXChVZZ5WGLfosXaec19lWurTDYBQSubZ7TR2YK4xfGJGhcTS4g7RZQsphs8X5fjbR%2FgQrZ0pc%2BtH9ILoZx9KBakrwFSN3eCQ3%2FLIaqZsWV4TSNs7v5kA7IsWkfcVfETAdPMg2PFCpZXIf3iFWFG1EZ07YTAhEERkVjSayZGOprPkvGMYMJk0tTMCSeLRgJaNH6DhgOxLdHP12sk%2Bv5Rq%2BdkaHJ6m0ZRbvn1SLKufo7xGtjXnQo55ytrvcyYCfCi4XfV%2B9JqX2dECNRK3qPFpdrsxqcUmIwnDNe%2FZK1v8PoOTI2NdsugOy0Uj0P%2FVdpG1u%2FdRuJ6JRXihJAwINCCUBIFiLUn5MYSVWr7kXaLI%2FmCts71TBOr6JjOLV44OAq5KA8NKqyZ3d%2BokaK%2BQOmoPLxOFNV4Azx6%2BJzU433HaAqoh%2FSFMlBkWdI%2FcFBXW3Hiy04nQVaAjeFqLR96mtUq8i7P3LaNyLN%2FDTVwSRjgIuJ%2FJOCwYWskg4FvnT8qMM65q8cGOqUBYTQY%2FuFcBLUSL5hiGojB174%2FzRCoSdbwpkun1NJNTfMDc4SYsgPsf9kM3RUrBoQgOxdBuM6j2CMwrQwOw%2Bn8Z2ToUjlGKr%2ByB5ueLyCKS4bQ09QKSElQFp%2B%2Bt17OZrBMDjMLx59LGxU20XDEjMUckRGQCcblMlyGn4ba0HGXmAspjMqvfPlHLwpCEbBkmWexQxyE%2FlrZ8t7uXOLShkw7v3kx%2BGK0&X-Amz-Signature=95c52ba6395a10086b82228553bd6ca72515f055da6979a97c8775619f86665a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6X3MXLS%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCaCDiFW31%2B%2FS5ZenxoV5UW6F6uKpRPbaLz5oEuldIe2wIhAN7rck4LBsCWFzwB1ctDkaBOIW%2BiwMMIhDdkFGe2V4kyKv8DCCAQABoMNjM3NDIzMTgzODA1IgylVgIPSqJdOfdZGeAq3AOxpbMc%2BcQVwZjNpB9NpAZ0Bdf%2B8ryvAMjs0%2BtZo8ydZKoH420iQ6h0RvOhdfkccaZ%2BKJ0IZsaD%2BebjYps3nfsPIRmN3pFMNqOzHLhfwrhGFWU60Dn1X4jyctC12Ok4US3GiueMcmVCPhdG69rCv7tSa%2BSfFarTjNY3PQDo9aK4%2Bp02Gu6y5UpoVqHtN1T%2FkCetBCEZ9Ni1%2BLoVrHZgxKYhOfioI2ZjDJBl6SkyMcubCy005lpTaZemnfkteDoPRlSyE3JXuvwuQWtcYZCx1bAFecFeLwZfuRAL9%2FnRtBgz7RKjtB0CDXyrZoIsQ5dhUf9c6aUcDkK1IInUVgH33EKV6pFix%2BCvxHGf6Q9PIy7G%2F7A8DZaINrm7M70VY5JG669yEf2Gvd%2BaQ2Tw%2Bldbi%2FytjUSR84Zj%2B7PljXE%2F%2F%2F9qYlTJ0bb%2BGlHwdSVeKrsT3F85gIuSE2xQaeHSgfo96k25jTp82TBm6FxsJ95FGkgShXZimXVQOOedADkpHyVU9TYfRkZX9OW0WdXwpfeh1aZhXIALJariGW83e9%2BQep8XrMrUqBXeo7UGFGnwherkXvkusPJY1otRog22J3lmw180ZD11HGRZx15q%2BYtevP%2Brn%2BBUni40gk4gtBK2dDDnuavHBjqkASA067uO2rYzwtWxGEr0TX4626nm3zKlIDi%2F5YkSJRm1QDCuZVUNl49Rqppge2lPEunx7r0Y4aD3H8NrFvFRf2iD2SNBlbYltnOBLTbnYaLYeLMJMQyboxWoKM6quL93WlMyBjYkmyms2uvBld%2BzqGJp08fEqbPbekC84I8fhn%2Bg%2F%2FtzwgtYVzBUkMZxduwLPqOsoUXI645%2FLtHWEudTTyuteaIs&X-Amz-Signature=2d1c4661c7f5fa608de4f81ff45526a4c0d8f5323f757407c4b6af0addc0c25a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

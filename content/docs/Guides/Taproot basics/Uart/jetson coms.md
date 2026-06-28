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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQXOF6X5%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyLw1S8y4qOfVou6XavNM4tq5%2BzkDDianTHo%2FI%2F5kuBwIgH%2F4sZrPq05alWoxZKQKOsFbHSGFF%2BNyZwxyXceMAhFYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP75nTiEX0jFeQ5jPCrcA2owZAsGdP5YMxwRcYFGdO5B4xiDsM7Mh3RZZjkfdwX54DqyF9twZ8A9HQHZTQywV3gFo%2BH%2F3OQfS0W7x4fEQ2Rt5TvUge6ZbirCfBKhuASjnqLvBjmjDrnnIMPhYgl9I9xDMfCZ7H7E1Wb3N9Ik1aJfJ6luji02mRc3wlTT19CS0q1rNyUPWo59mNDvmJErhfkV%2BGW0MX5LUVxDg%2BUHo0YF0QcpJK81YepQC%2BqfMMk%2BMjicuw4JT6Qly2CIisuSrdfdT4282Ld3ukE2zylbIT4kQLOAjB2AJGPGeZvRgpvt7es4isk4YZI5Eq69jIXo3Hq9L%2BsJj90BpSGhP6CyNBXLuXUBYaNVWOHULRX5qt1mOCUMAUeDrzPczqCPnk3CaFMxiw2d2bq%2BwV%2BcUegBKnmXu0lZYBMat7X3zBhmj4lIPkTajnO9OWW8%2BqapPBM77VJ7aCG2pXVJp%2FXk2glNs5Ba2zRN6eMY%2BM1bUH7lCL5ecaz0PqAnThFH5ClRvXPZf54S%2FxivcPbPWlNi7OrC2GSHM4dpXOwGD9J23mtJCbBgbw4aRpE3CyEb8bQ%2BEfdvpJjSkTwJswahJQXsFoNIiHFgZ9HrfvTQ0MI3hdeyPxyiVQLYO7QG3tpbCqAgMNCggtIGOqUBba5uR5da6ICW8sTJE39nFpuKedGPZfme9As6BYMz7lsL3GDzQDIOPo%2Ferr9yv5PnO21eVR7OUbjQ1ugw1R3OAukrhfvhJE%2B3a9M6jz4iOzig4FiLC2XZlLhGxr5j8iTRchq9U9xDqVhV4Hl3gWQ%2FJQcgui86rvG3W%2FRwUCmccOCC7TJsLkLK1GzhoW%2BWVT%2BM52Sa2Rybjibr%2BmaYwsdumkwBgUrN&X-Amz-Signature=a368a17a6a415e582ad80f1895a68aa6137f2ac56006c5a423c3286c17c1dd3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2XH3KM6%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsdAmn63mBZqPXoiBtkBEyWfldusUlE2F2uLmUylDl%2FQIhALfZzXgDTsH2Rhy5i1jy91TPikIy8HupnBzaAQQgUhIwKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzBPxX%2BoRiIZUI4Acq3AMfBFqci0OyxLb3Oq%2FXqt8yzpmECkZ%2FT0F%2F3W71d4f4TJygY%2BVF1LFGPUGBfCG7VvtHGySXNG6YEm2j0Lsiz4uOoWtegtUsVo9gZczGHLtmyhZmVnIqk1SMzHe%2BciStcQCQnzmxe%2Bo8HF4C%2FYnHBVxYXW2grMi%2Fg%2BamxBXZ1jCgyESwrimtB%2BW6C6HY7v0YPXJGDkQqobxiTZAHzcaKhEGt6EskNAQMTlNKTc7jFkyIIL1%2FQCEq49%2ByOXpNbA8ijzRnqFKzRE4f%2B%2FRxAe30Uq5z5VdcqSvlimnQOa%2BTJGJjRvUfWhD%2FFF9HgOXjafpDunZkXOzZWJ18TBh2mL0ns7W9EU9K7W4jCQMRDWmIzLskRwyp6XzUszPw%2BAZr9nce0zSpf7EHSjVLfeDhlKC5%2FQtEyIQpzb9WlOT6q6rBy9xgAVi8984EOftkTCK5HUCgV1%2FsckNLZiOsKFQuTIoKGrkqGqgbbVHqT2CajljaV%2FmaK0MmqQNYaUnvmJaKnlO9dDIYGCZaKNVSbKduNytDi%2Bo8VBGKWqymCYJLln%2Bokpw4axMZNGxr%2F0%2FgtsvRJwRhwuhN18boN82m8Bqi6xIHrnAMB2XlsTHfq1i4l7zcPI8zOUijEezFc%2BRbfVDx0TCfoYLSBjqkAdEmdCTGWsocxgg6SuuLrbFlh5tTshWIBdljUdI4PITWEppyuanzofo%2FuNRJODxK0T0GpalMnYKk1%2BezWt038ATwGpTmxydmYyk5DJqkdapTC53T57wXwEaeSr1219N5Pi20P3FQNZDMKNpCBxGfBBlzDFt9EgmuEbGClfadAUfRHNp5cnkhKSi%2F0S3t6on5oxJL9h%2F1qAQG2a%2Frf7CnzGHoXvtY&X-Amz-Signature=ec4c71ed88d173e383fc2a253fb92bd93623bafb13b36d2725ab66bc63911c54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5GOEZKG%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD65AfiPWx1fYZxR4WE%2B152Dk3cuTxoh5NlY6x1Da95QwIhAJHE3oY7ugLDcdTnvn%2B9UXli3SqG0NUQE%2F71JoRYjEAjKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsWb2DwD%2FM5K%2Bu7%2FAq3ANyNBLdBc8GazB9%2FTJPIzkLFxwFbQHn9%2BqHVu5ww88c4mUStAz2ZJlYaYVCTDylILAdjLhDG%2BzWXyE6rjL6qH%2B7w4vrIvrRMaQl%2BpOpmAUodL0obsaUg3aRtfX0tfKIXSfoKx4Kf5UNbMHWd5KaG0Kx9%2FJ%2BhZDwKd3OQNv06lONL9%2BciOp%2Fb5DS%2BHE0rp0umhgcCTTrSh6xgxrxnPNLrf%2Ffo1DY8vS%2BdcQre1TACRli4h5UYpq50gmMK9%2FyDf1oWcgSqax3Q0aTk1QZffk2NYFM6VyUfL5zsGQBvPuuDHpo7iGptsLZDy1z81UXFtwBQZhqX7XALu4jT3h9vrIEVKEeAz%2Fr8h%2BplVQ5l%2FrNY0ysA%2BulsLXzel0NKRvaB1kdtcjEz39Skc3sLounCC9s5XwWvrFye65nNz8y7A6jb6UosCBxmv3u%2FuxsRdKAOcY1G0b3EvI2SBWd2Wq0fL3KV%2BZ%2FgY62TUtty0F%2Bpq586ICkwODMKJ8EoEGR8amY%2FBOGbSzi6OPmMYHvXzBCTh3Eb3L%2B%2BOJybNRfIUZPGYjMAplhq0Dml%2FSIQ9cXoZ9cR1j91jmkNMgRvhd64td3zYkkDuog1UA%2BX6Efd%2FivR6a5oIGGJVOA1KjNLcmZYmN5vDDEnoLSBjqkAayINnmzIdEm7tzusE%2BUAGyC6pZ8pmNdqQlPPlXr0hzs0rD%2FZhQn43hrgz2XlgCPZNwz1ZvvRHlB1q6SUFmDO6ItJtxpaFAAhk6lrjLhYUKK4NRXGfcVMX7nastfyp8H7QD58wpUeNeZ2iTjoEp74FkEeY62l6byEsKT2YmwTxPhkBRye%2FWSjzIFCHfYJpit%2Bz9W9XqTbFj13aoj%2ByW2C8syhotw&X-Amz-Signature=37c00f925871a1e11d603621d08b725abd3eb6a55f64c4926f842e709c9a8026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5GOEZKG%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD65AfiPWx1fYZxR4WE%2B152Dk3cuTxoh5NlY6x1Da95QwIhAJHE3oY7ugLDcdTnvn%2B9UXli3SqG0NUQE%2F71JoRYjEAjKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsWb2DwD%2FM5K%2Bu7%2FAq3ANyNBLdBc8GazB9%2FTJPIzkLFxwFbQHn9%2BqHVu5ww88c4mUStAz2ZJlYaYVCTDylILAdjLhDG%2BzWXyE6rjL6qH%2B7w4vrIvrRMaQl%2BpOpmAUodL0obsaUg3aRtfX0tfKIXSfoKx4Kf5UNbMHWd5KaG0Kx9%2FJ%2BhZDwKd3OQNv06lONL9%2BciOp%2Fb5DS%2BHE0rp0umhgcCTTrSh6xgxrxnPNLrf%2Ffo1DY8vS%2BdcQre1TACRli4h5UYpq50gmMK9%2FyDf1oWcgSqax3Q0aTk1QZffk2NYFM6VyUfL5zsGQBvPuuDHpo7iGptsLZDy1z81UXFtwBQZhqX7XALu4jT3h9vrIEVKEeAz%2Fr8h%2BplVQ5l%2FrNY0ysA%2BulsLXzel0NKRvaB1kdtcjEz39Skc3sLounCC9s5XwWvrFye65nNz8y7A6jb6UosCBxmv3u%2FuxsRdKAOcY1G0b3EvI2SBWd2Wq0fL3KV%2BZ%2FgY62TUtty0F%2Bpq586ICkwODMKJ8EoEGR8amY%2FBOGbSzi6OPmMYHvXzBCTh3Eb3L%2B%2BOJybNRfIUZPGYjMAplhq0Dml%2FSIQ9cXoZ9cR1j91jmkNMgRvhd64td3zYkkDuog1UA%2BX6Efd%2FivR6a5oIGGJVOA1KjNLcmZYmN5vDDEnoLSBjqkAayINnmzIdEm7tzusE%2BUAGyC6pZ8pmNdqQlPPlXr0hzs0rD%2FZhQn43hrgz2XlgCPZNwz1ZvvRHlB1q6SUFmDO6ItJtxpaFAAhk6lrjLhYUKK4NRXGfcVMX7nastfyp8H7QD58wpUeNeZ2iTjoEp74FkEeY62l6byEsKT2YmwTxPhkBRye%2FWSjzIFCHfYJpit%2Bz9W9XqTbFj13aoj%2ByW2C8syhotw&X-Amz-Signature=dc123bbc40dd1276549bb744590549e08ec1f84723e557a2bafcceab1096c208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2XH3KM6%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsdAmn63mBZqPXoiBtkBEyWfldusUlE2F2uLmUylDl%2FQIhALfZzXgDTsH2Rhy5i1jy91TPikIy8HupnBzaAQQgUhIwKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzBPxX%2BoRiIZUI4Acq3AMfBFqci0OyxLb3Oq%2FXqt8yzpmECkZ%2FT0F%2F3W71d4f4TJygY%2BVF1LFGPUGBfCG7VvtHGySXNG6YEm2j0Lsiz4uOoWtegtUsVo9gZczGHLtmyhZmVnIqk1SMzHe%2BciStcQCQnzmxe%2Bo8HF4C%2FYnHBVxYXW2grMi%2Fg%2BamxBXZ1jCgyESwrimtB%2BW6C6HY7v0YPXJGDkQqobxiTZAHzcaKhEGt6EskNAQMTlNKTc7jFkyIIL1%2FQCEq49%2ByOXpNbA8ijzRnqFKzRE4f%2B%2FRxAe30Uq5z5VdcqSvlimnQOa%2BTJGJjRvUfWhD%2FFF9HgOXjafpDunZkXOzZWJ18TBh2mL0ns7W9EU9K7W4jCQMRDWmIzLskRwyp6XzUszPw%2BAZr9nce0zSpf7EHSjVLfeDhlKC5%2FQtEyIQpzb9WlOT6q6rBy9xgAVi8984EOftkTCK5HUCgV1%2FsckNLZiOsKFQuTIoKGrkqGqgbbVHqT2CajljaV%2FmaK0MmqQNYaUnvmJaKnlO9dDIYGCZaKNVSbKduNytDi%2Bo8VBGKWqymCYJLln%2Bokpw4axMZNGxr%2F0%2FgtsvRJwRhwuhN18boN82m8Bqi6xIHrnAMB2XlsTHfq1i4l7zcPI8zOUijEezFc%2BRbfVDx0TCfoYLSBjqkAdEmdCTGWsocxgg6SuuLrbFlh5tTshWIBdljUdI4PITWEppyuanzofo%2FuNRJODxK0T0GpalMnYKk1%2BezWt038ATwGpTmxydmYyk5DJqkdapTC53T57wXwEaeSr1219N5Pi20P3FQNZDMKNpCBxGfBBlzDFt9EgmuEbGClfadAUfRHNp5cnkhKSi%2F0S3t6on5oxJL9h%2F1qAQG2a%2Frf7CnzGHoXvtY&X-Amz-Signature=087ee21a9d2a1aca43303814661e355dbd10394f16e4f21bfe23afa73f1b1f5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2XH3KM6%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsdAmn63mBZqPXoiBtkBEyWfldusUlE2F2uLmUylDl%2FQIhALfZzXgDTsH2Rhy5i1jy91TPikIy8HupnBzaAQQgUhIwKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzBPxX%2BoRiIZUI4Acq3AMfBFqci0OyxLb3Oq%2FXqt8yzpmECkZ%2FT0F%2F3W71d4f4TJygY%2BVF1LFGPUGBfCG7VvtHGySXNG6YEm2j0Lsiz4uOoWtegtUsVo9gZczGHLtmyhZmVnIqk1SMzHe%2BciStcQCQnzmxe%2Bo8HF4C%2FYnHBVxYXW2grMi%2Fg%2BamxBXZ1jCgyESwrimtB%2BW6C6HY7v0YPXJGDkQqobxiTZAHzcaKhEGt6EskNAQMTlNKTc7jFkyIIL1%2FQCEq49%2ByOXpNbA8ijzRnqFKzRE4f%2B%2FRxAe30Uq5z5VdcqSvlimnQOa%2BTJGJjRvUfWhD%2FFF9HgOXjafpDunZkXOzZWJ18TBh2mL0ns7W9EU9K7W4jCQMRDWmIzLskRwyp6XzUszPw%2BAZr9nce0zSpf7EHSjVLfeDhlKC5%2FQtEyIQpzb9WlOT6q6rBy9xgAVi8984EOftkTCK5HUCgV1%2FsckNLZiOsKFQuTIoKGrkqGqgbbVHqT2CajljaV%2FmaK0MmqQNYaUnvmJaKnlO9dDIYGCZaKNVSbKduNytDi%2Bo8VBGKWqymCYJLln%2Bokpw4axMZNGxr%2F0%2FgtsvRJwRhwuhN18boN82m8Bqi6xIHrnAMB2XlsTHfq1i4l7zcPI8zOUijEezFc%2BRbfVDx0TCfoYLSBjqkAdEmdCTGWsocxgg6SuuLrbFlh5tTshWIBdljUdI4PITWEppyuanzofo%2FuNRJODxK0T0GpalMnYKk1%2BezWt038ATwGpTmxydmYyk5DJqkdapTC53T57wXwEaeSr1219N5Pi20P3FQNZDMKNpCBxGfBBlzDFt9EgmuEbGClfadAUfRHNp5cnkhKSi%2F0S3t6on5oxJL9h%2F1qAQG2a%2Frf7CnzGHoXvtY&X-Amz-Signature=1316b17eb3a7cd43013491a9f77cb74d32695ee6142760933a7dfadf9bee06f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB64UXYU%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCThmzwPvwBDZkGHlIuBmO%2FZfkCpy6qbCnebfNrn9R98gIgGrEUurXqyyaYpY%2F7HKkX1Tw%2FrFPVijRCQUzlN4rK3%2BAqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkh%2BDYLrX6ej4VU4SrcA8HTM0NDM%2Bt5xLn7BfhzQLqkdZUxFby9qKRTI2h5OPAl%2BueK1vLpaDB9TByHB5SUjwU4978fWsJhVyv1KH1kCcu2%2BJ8vzdk0SboiZNB5Tps4M%2BPnjtHVBUp3aVAq4Y2f0CZ1WRNM%2FOsrY8m43bKph6NU%2B12z5DAOMFuFtRb2AEjVFFFcbIOv%2FzlgKzn8pTuKlO2B7fTguQRWTs2cJsYcM6430fUYdBlnQ73f2oMzouVb5bfcEEfDTFU4d0yeVUuSvsBN8CKSyl%2FUDW11OJRHzaXMKBViR%2BWciguridNxAXQpILkLDKRbR0zVO5eKF2nrt7WLzAZns7YD9pX4W94JkPIx6CJHgrmJxsx4nOYWUW1L4a1BV1dPbjc1b6bpBR6w4nV%2F1fWZY%2FjRzHZXmcp7JXlXmtw6unDKFF8QgePsp3SMwubvRgCSLFGXlGJOA9ZLcoOLGibmPf6mFr9zLyEVImlkC5x%2BcDm1N%2B6Kc0S4ao9EluYLxSfYo6stkjgfAlECojXIgfDrZPKqml3%2FuuoSZChSdxqu1N6YUnGtm%2B3uEYxDKndBkWrjXUZKSqxN%2BBRAVHhh3RUjtKN%2Bru%2F0paW%2BQI%2BUAYqpHudoX%2BIIUIOyj8lep1z%2BdyT%2FNHiH%2B%2BqaMKWegtIGOqUBJydCpxKLqMcRl%2FUYLItlvisoZTcfXzD9XHgftFN%2FQVPVBPgZ%2FlFW2PJ8U%2F6mAf22k4cytMCxjxNADhaN9V5Iurg2xCCjyO3gy%2Bo%2BA1ui%2B8o%2Bs7S4bNEFPgq7gww7Qbfg8zBygLFGWekizVIbmRCEP5we80kFEvv9uBD%2BBM6fUFgCEUQipxcNGpC4FHuOIEQh7R9syrGbVCx2sRwacwRBTtiWQPmH&X-Amz-Signature=f03fe8ae562381a560674c51daf1412fe9c52a5220bfb2e5ee5321a4356c5835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

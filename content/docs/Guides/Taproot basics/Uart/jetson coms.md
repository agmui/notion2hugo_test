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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYWPVUFP%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCipJa%2BKdK36NeESdMKmyACEWedfoc47oSMf39uCiFz6AIgVz6odlAglyxQ3LCcPBfB2vrt%2FE4tS6wHKE71Zq8qNeQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjNezoYqKOqkO2xuyrcA552WxaWMC4%2FXEQyyLEXMbo4Mk%2FXTScPaBnmFVpzR%2BDHzYvBRcKCVgFcN8Oyuyhb5T17PNjXLcQps0B3lz%2BsOTY6jObXRvpfadBFdQhXe5HUt74X%2FdmOnP7xfGdf1j4jauyFOiwRU6KgBOr2xuGC6TbEG4iEDzb6W9INDjsJspBAuDmLlutyreekOn5VFTL16qpZGb1FvvbKjABKuUlW%2Fj5LeS1yNms17vTcQqNXCopTloMOlr%2Bkav%2FSdnVVi%2B%2FE3jqXiyI3kZRFwuap3w3Lok9TOKeFPbsQDR8DDgaIcC2UQAMGRQbBonmrJ6e9nlzHqwTI7nAagIIU0JRfPEmFc5qGN701nq%2FaOAwQEC9NLX45NI9OlGxcNHgykmw77gZO5ocv%2B9oSZMC%2Fg2FNBjGlm9bhUhg%2Fv0%2Fp1VJRrHm%2F3MlE%2B3o1nB%2F8PIKi7yR3Ejg8MiOZm9P37k22%2F9ILUynpHra%2BBMZjnKYa0KNr12fcVYV4Abz8UgAyp59t7hjFRhJk%2BvUtyGQIvNvmXCrZOe4hG2rH6zt6FOpGMTIhLvYB0gvHVRCkmHw1ti3tHkYPVfi8nDvsLIsiqTzMBIxNkWjlMznKcnkkr1XFHGG5dijh%2FsytZIzocN3MgHT05MdqMPPRk9EGOqUBU4e5PXg6rl99XfdKSVZISlAnCOo3m1eQLMT2BfyU%2FpSeq3sBuRQsGAVCLibvfQnRnwjpS8AsbMcYmet5J3c%2FpAYG6GoyQPc0Vh582dn4CCQ%2Bno3Mvzl85eBXHN5a9JMEFUTT7Acry5g8thqJQ6XVLbE7QdxeAjGAsx%2FEJIeprMfX3iLOkC30v7t%2FjR8m0yfLwCTOHLUozz8H%2Bks1qcFqqzJc0KGa&X-Amz-Signature=4b86b1893eb4f6b866c44cf5ea0a5da76e4bd206c714f3bf668dcd0d18a7f654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE3O3AIY%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQzdgG3F6LRu91tLqddTyMclKOWief7eVQ8KoohCqg2AIgXIjBgCh0qATOc30SBCIJltOJ0DdRD95WAj2AFPG95G4qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLA3jg196mjlknLTGSrcA0k9Qfx0LCSUBI9%2Blj%2F%2FLThh3ptCcjcz94YM5P2N00UZQtMEr1F6g4359YCMhhiYvczJZwQoQ0vnFqKuPgmUufUvVQYNEfLCRy7GW5Yw%2FRwBjKwSClcKnXQ7yR2iZHWeemylcc6d%2BT4Fx3jmSrUCXVTBG5BR3wwP5hmgHSMftmy%2F%2FxF%2BD6azcNgRPtrtmQyM%2BmkxDbsyjFQkf6KoVClXhqAk8DDMt3kqsK%2B8yMrLhQhNFqd9b2zFOlDXG8mmW5u1t3dt0fFWlAeSkhlZIyGI2tPn3pfLJIALZcbTMgZFLw8RUc1Pv8wYo%2BaiX9RKeI6P602GwxXiq7LRzaNdFsqV0gSQ5EWR8Ns7O1nFi%2B3GM4IvUlcP3SDDidWoUmPj1DCna%2BzqTvrgvAWCTKexhnOkg3hEJX3rCvYTNLEccHu628Z%2Fd%2BIbCUtRtiYtoZ6TIlBFDp24y%2BdJ0dVQzFqklytmzDDwnIDSaK5vtRcovLdwjG4HfnzKuLjybN%2Fo2hZGRRhDFYB4PJRg1DDH4jTO27gMP9q6fraFA1MHibWW0d30rTBQFBd9VMGguH435APANEjh6BIuI8FloT4i6c3X0sE%2BABIVMdvt6RPFsf8w%2F32PjfRZS8R99vLwoOOea%2FKFMJrTk9EGOqUBWlrMXsTAR%2Fjd66973sm6rgXCJxhAMVkfdf2nDuQ48oYOyhmNVrQcTl%2FVXb34jpAQ5aiur%2Fc1I4TyHd7Gnq8qDt7%2BTM9OVxu7FvUFULjxTyaELw9vkBpJGvWWYppRESXvFfAX1guFAWRvA2Se%2BmUM5cRMsTOYDWfrtlnQScAaPXjVw3AB%2BezIrj5R5K7uU0dtROSOCQbpNC0vEi1P0x9WInW%2BpyFM&X-Amz-Signature=057b9f5fe45739f4f02e44cfabbd36a1624f6264f5c5ed132ec44a9eb6c98204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWQSNN4B%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCenkRNrTI79m3S%2FYctUj0YEbTdQIT354fm6ivY2YOQPAIgaHBkNLNIvt2bG73CaR7VHo26JRutitp%2BoT%2FzV31ro0AqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgPIOETLbkzo7wg5CrcA7GBGa046bUwZR%2FKgVCBsi4xqvzwoX6015DF4qd037ywZXmjv0oORJ5p%2BoNCcWkmLRIhI7aHybK6SQAV9Xh7UzEosqBnjTMWPsSZbcnxRDLTfoQSoUTzS2050JZ0gFKJudZVZ2fgCQy0CNPLC%2B%2Bkx2kPlvNSjAlgQXyaSND2bjRUtGTO%2BrH%2FkvxO0hmsE7W600agXtKDjNvRjMC0CGL1mAQuGFiE%2BH8sVMoqKRg5B4iNmRIKB2YjUpTAGkomzRI7nMKcDSziI%2F2lAa5gYgz0y6R9ntxFU1wnEZKKQReTsrrMLDMDCudLGyFKxXtM1qmNRCEAhzpJoH8Bt5YUmtB3Z9a5igV%2F09Macj1y%2FC873SUtlrldB620%2Bn%2BPFRklFLsBhkfjJIRcRWa2Wq%2By%2BK5ASWIfKaqNeXndmm4KonR2WpqaI5FL1DQ3hu2%2BRUJBiFhyGlro%2FlgxQbZH6NQ8RslJ8rQA7fe86H2lmJHLEIlRj6I7elH2tw66JBmK%2BeHpFGC68fKgkN40ZP5YZ4%2BQtestbxjb2PqX8lYrhJdZ330Gk3fja1q%2BEPLLJ%2FObNOTtN151JbIazdR0V%2FzA7ZwiakKice%2FVGqp%2Fc7iwtqKVvAnugjvi8wgGLQdlyTWKWnsZMMnRk9EGOqUBVuIPkPDnxRb3eVivzfD6dwL58XJu06FtCxgchmnAUyFm%2BVweXGt37dSy8SpaoY15MfFbs%2Ff51kgRBc%2Fc%2F1eYSn%2B2z6UAqwrwjH%2BSjc6g4G5ht9sykC4CAHupwAPXS4vwY%2FboyrOee9NghM4Ol60aU6D5vDnlYLF4%2F9A%2Fug2LvrepAQ5Qi2fBHlqB92osjZ0yrZ005zL5RqwWWi8T%2FnCFW2McMmUE&X-Amz-Signature=5f7f894c29697fb52db6d85dfc4523266c72e5ceec87822c780c79cd73e6b62f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWQSNN4B%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCenkRNrTI79m3S%2FYctUj0YEbTdQIT354fm6ivY2YOQPAIgaHBkNLNIvt2bG73CaR7VHo26JRutitp%2BoT%2FzV31ro0AqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgPIOETLbkzo7wg5CrcA7GBGa046bUwZR%2FKgVCBsi4xqvzwoX6015DF4qd037ywZXmjv0oORJ5p%2BoNCcWkmLRIhI7aHybK6SQAV9Xh7UzEosqBnjTMWPsSZbcnxRDLTfoQSoUTzS2050JZ0gFKJudZVZ2fgCQy0CNPLC%2B%2Bkx2kPlvNSjAlgQXyaSND2bjRUtGTO%2BrH%2FkvxO0hmsE7W600agXtKDjNvRjMC0CGL1mAQuGFiE%2BH8sVMoqKRg5B4iNmRIKB2YjUpTAGkomzRI7nMKcDSziI%2F2lAa5gYgz0y6R9ntxFU1wnEZKKQReTsrrMLDMDCudLGyFKxXtM1qmNRCEAhzpJoH8Bt5YUmtB3Z9a5igV%2F09Macj1y%2FC873SUtlrldB620%2Bn%2BPFRklFLsBhkfjJIRcRWa2Wq%2By%2BK5ASWIfKaqNeXndmm4KonR2WpqaI5FL1DQ3hu2%2BRUJBiFhyGlro%2FlgxQbZH6NQ8RslJ8rQA7fe86H2lmJHLEIlRj6I7elH2tw66JBmK%2BeHpFGC68fKgkN40ZP5YZ4%2BQtestbxjb2PqX8lYrhJdZ330Gk3fja1q%2BEPLLJ%2FObNOTtN151JbIazdR0V%2FzA7ZwiakKice%2FVGqp%2Fc7iwtqKVvAnugjvi8wgGLQdlyTWKWnsZMMnRk9EGOqUBVuIPkPDnxRb3eVivzfD6dwL58XJu06FtCxgchmnAUyFm%2BVweXGt37dSy8SpaoY15MfFbs%2Ff51kgRBc%2Fc%2F1eYSn%2B2z6UAqwrwjH%2BSjc6g4G5ht9sykC4CAHupwAPXS4vwY%2FboyrOee9NghM4Ol60aU6D5vDnlYLF4%2F9A%2Fug2LvrepAQ5Qi2fBHlqB92osjZ0yrZ005zL5RqwWWi8T%2FnCFW2McMmUE&X-Amz-Signature=5d35c944f3b26325f1ddead80a638abeabd6d7f5948c13fb8f67164c83b04ffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE3O3AIY%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQzdgG3F6LRu91tLqddTyMclKOWief7eVQ8KoohCqg2AIgXIjBgCh0qATOc30SBCIJltOJ0DdRD95WAj2AFPG95G4qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLA3jg196mjlknLTGSrcA0k9Qfx0LCSUBI9%2Blj%2F%2FLThh3ptCcjcz94YM5P2N00UZQtMEr1F6g4359YCMhhiYvczJZwQoQ0vnFqKuPgmUufUvVQYNEfLCRy7GW5Yw%2FRwBjKwSClcKnXQ7yR2iZHWeemylcc6d%2BT4Fx3jmSrUCXVTBG5BR3wwP5hmgHSMftmy%2F%2FxF%2BD6azcNgRPtrtmQyM%2BmkxDbsyjFQkf6KoVClXhqAk8DDMt3kqsK%2B8yMrLhQhNFqd9b2zFOlDXG8mmW5u1t3dt0fFWlAeSkhlZIyGI2tPn3pfLJIALZcbTMgZFLw8RUc1Pv8wYo%2BaiX9RKeI6P602GwxXiq7LRzaNdFsqV0gSQ5EWR8Ns7O1nFi%2B3GM4IvUlcP3SDDidWoUmPj1DCna%2BzqTvrgvAWCTKexhnOkg3hEJX3rCvYTNLEccHu628Z%2Fd%2BIbCUtRtiYtoZ6TIlBFDp24y%2BdJ0dVQzFqklytmzDDwnIDSaK5vtRcovLdwjG4HfnzKuLjybN%2Fo2hZGRRhDFYB4PJRg1DDH4jTO27gMP9q6fraFA1MHibWW0d30rTBQFBd9VMGguH435APANEjh6BIuI8FloT4i6c3X0sE%2BABIVMdvt6RPFsf8w%2F32PjfRZS8R99vLwoOOea%2FKFMJrTk9EGOqUBWlrMXsTAR%2Fjd66973sm6rgXCJxhAMVkfdf2nDuQ48oYOyhmNVrQcTl%2FVXb34jpAQ5aiur%2Fc1I4TyHd7Gnq8qDt7%2BTM9OVxu7FvUFULjxTyaELw9vkBpJGvWWYppRESXvFfAX1guFAWRvA2Se%2BmUM5cRMsTOYDWfrtlnQScAaPXjVw3AB%2BezIrj5R5K7uU0dtROSOCQbpNC0vEi1P0x9WInW%2BpyFM&X-Amz-Signature=c1a39cb891f8aad5151f0b35a8b022166b98efa1c9424877885e7e093c2f8d31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE3O3AIY%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQzdgG3F6LRu91tLqddTyMclKOWief7eVQ8KoohCqg2AIgXIjBgCh0qATOc30SBCIJltOJ0DdRD95WAj2AFPG95G4qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLA3jg196mjlknLTGSrcA0k9Qfx0LCSUBI9%2Blj%2F%2FLThh3ptCcjcz94YM5P2N00UZQtMEr1F6g4359YCMhhiYvczJZwQoQ0vnFqKuPgmUufUvVQYNEfLCRy7GW5Yw%2FRwBjKwSClcKnXQ7yR2iZHWeemylcc6d%2BT4Fx3jmSrUCXVTBG5BR3wwP5hmgHSMftmy%2F%2FxF%2BD6azcNgRPtrtmQyM%2BmkxDbsyjFQkf6KoVClXhqAk8DDMt3kqsK%2B8yMrLhQhNFqd9b2zFOlDXG8mmW5u1t3dt0fFWlAeSkhlZIyGI2tPn3pfLJIALZcbTMgZFLw8RUc1Pv8wYo%2BaiX9RKeI6P602GwxXiq7LRzaNdFsqV0gSQ5EWR8Ns7O1nFi%2B3GM4IvUlcP3SDDidWoUmPj1DCna%2BzqTvrgvAWCTKexhnOkg3hEJX3rCvYTNLEccHu628Z%2Fd%2BIbCUtRtiYtoZ6TIlBFDp24y%2BdJ0dVQzFqklytmzDDwnIDSaK5vtRcovLdwjG4HfnzKuLjybN%2Fo2hZGRRhDFYB4PJRg1DDH4jTO27gMP9q6fraFA1MHibWW0d30rTBQFBd9VMGguH435APANEjh6BIuI8FloT4i6c3X0sE%2BABIVMdvt6RPFsf8w%2F32PjfRZS8R99vLwoOOea%2FKFMJrTk9EGOqUBWlrMXsTAR%2Fjd66973sm6rgXCJxhAMVkfdf2nDuQ48oYOyhmNVrQcTl%2FVXb34jpAQ5aiur%2Fc1I4TyHd7Gnq8qDt7%2BTM9OVxu7FvUFULjxTyaELw9vkBpJGvWWYppRESXvFfAX1guFAWRvA2Se%2BmUM5cRMsTOYDWfrtlnQScAaPXjVw3AB%2BezIrj5R5K7uU0dtROSOCQbpNC0vEi1P0x9WInW%2BpyFM&X-Amz-Signature=359b71b1eb9d21dab2ce2d9c7f575676d246c551e6fb6e5c423e9e38c2b49ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFP7KSMK%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiEG6YsTULjtTR2MiKfhEScWkr6UQyl8RYW6vOsUq55AiEApcSQnoP3Cb7rasj4L6TdWboints5IiMLUmWGTB927FsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjdX9oA17hJ2%2FbbWSrcA7oAmbZ65w4f8TcpUQiIFaRZRk%2F%2By%2BZUSdBBirtj4RPODmiW92mfPrg3V9hoTal18IcWkLiUTDZd79gkKR4WWV7pEycv2V%2F%2B1Of0PZDYUJndnByAl6bkYdO83adjBliIlos0OTENZvR1V3Zh6V7Yc8AMHflg33XHwqNlFUNe54nYDwyrIhOHt1PGerWq6kM%2FlJ9B44Qy6j85RrLfoluKGLzaMPn5uwYHErMi35p0iawTKW9JOj4FRLOZSuBTVmF7%2F8prgo%2Bnuy4n19BvzJVusKQ8GOV5huLNjVbze5gY8ylOCotFLno36VlC1sBX2FIz29wFTHDxsG1KDYByzZaE7KNdNqNWxHR8T6uKl2UwyAF6U7Eb30mOg2aPyZf74DDWAF0qUImVUHKGeiWuK7pCxQcYN7rp69g5L5mTl7P%2F72wuaxT8F58q5acmmY0ISICjRpbJrGiCvGxBX%2FXUga4sh%2BH%2B11UyJ2EUC%2Fw4eX6zTnf7kqT4aKTT7Yocg2Gwdt053KqlmyezXstoj31lq0IKE6WXaJJYssNaDlFcQrhiAZ%2FYb886z%2FqlHclFhQAENPxvN52yowcVspcw%2Bo8gYstUn8NPifj50H7xHTaF%2Fivrcpx1ATRLYe5lbW3ffkq8MMrRk9EGOqUBZryP%2BoQE2ZPgFgK2lIitqRWeEBwN1O1jn84zaIfPxzZUXoJ4RD1j%2FCOvp3tQbfGMz54nLD6GkzrzzTrc1EYu%2FTeSrjhu2HvZDXbgZwo9jY8SJ4%2B3lsErQwv0c8yLmuWA53WT9mZOt7lIfD4GyDTpWsF95uXFEgU8gDt8MP9Payf67tSAoiYZWDOBeWJKhxd%2BXcJSf5TLexhPRrl9U1sa9BHdFm4m&X-Amz-Signature=ff5d00348466e7de9a6ce2b08734e6f02966c3eaa7e203f94f810ca71b6aa3ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

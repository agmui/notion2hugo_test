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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665O3RCOF%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnIdCXwg4WecvFbnPhOX6VEZ53Cj4iB6SBJmcoBrAeHAiAaFZAPNIAmeZR7BQ2tEUQvNOQjbaVH1s7xXx6tk1Ah7yqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjz2UaV33jPlY6Kl7KtwDNcJdkGXLof9JJvASGaJoWeS0l2vLODcVaEBCuES8dH2wiJSOJ9xdkvTjvtMZmjoZTLctZ8V%2FbzYjyIT9%2FjfNJrwUO26VzgAVZ7eiQTxyge4aQrUnxIY%2F%2FhA3qPB69GCqVCv7QKUeRzkAsENGxaj5XSbh%2FkQi8JSikPzvzldg5JNnyXySNw%2Bf7ydTy7bf5xjiWnixa8DaizXdwwdG61ZkEvDNacSlQx0abnsfJfixIWOfNOQLBqUv%2Bm70%2BIdzIugjUDP%2FBhoCV%2BINbJtQLApUP%2BNMJhXYHNixLM3gX6Lv4BgyUGLYxNpmvYfQjTY7osRXnest93pAp4w8VKmKf00dx30cb83R8cQnsvrals7yOgViLvnAcwnhNchvICt6nqKjlqUNs%2Begowe2HsX8%2Bxr%2Baat%2FEeKAkMDkckOQSF%2Fzfm4TjXcxZbeJDLCwhX4uz0iaZ7D7JmRWEYUDNIWSm68KZElvxlATEgBEyfKwxkgfopAJx0ItdmLjMJtuwGmGMj%2BtUN4M55ikamLZko4oVu1jdP8brsB4tiLKB3r87DJPo18EtM7cLTsPugHMvlO%2BiSPAGFEVULNsHClLtrrfa6TJS%2Fm7XRFh4UzeEF%2B%2FxpA0Z28z9bpS0stEcCledKkw5%2BfezAY6pgFbolqGgKcqVuIuLJMwZkbsdwqErsAMNiZcYDQMYh0LUCDMrpK6%2FQsId9vxAHyHMXCEwCJI91MvchyqUPhp82wfVVEcrRoLf8FuIfKKGnHtm89RSL4Qs45UTMbMiud4jpMCTmNvoaMMEkG4M23xizjrwnxx0nmhjCmGpWCaHkAQ6OyHq96Y4lQ4LA7SH2X77JLIRQtJdYpVpmkDMnKOHxfhYTdzQTzK&X-Amz-Signature=4d2c65de7f39e3506e4b5414ac548d55127757f108fcbf6281dd92c5997e8b7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWGVHI7W%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEP0cY6OtlbwzisTOk96wjgfGmFlAX51onA9wiyPIeliAiEA9vwexRwsp1PuW4rwkLDA90HPDwmx2TdcFmFDlDlVrRkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGG1dMaUFLI6fcriSrcA2hKIZJcpBEZbvGwLMhdfXa66rqC00S9DZ%2F%2F94nZ6Q2T0%2F7kH7QGi2HBu5QIzRgEE%2FFhuCQksB8HQnKOnP9Sip24IPHgfAJaHQvOyJqbb%2BDgrwnL%2BZT7TPeOEW53mc0UQY1SnmKnUioTpMwXferHU7%2BM%2FoPB9QcOzSczZWqlPb%2BVTZ6ir8BgC3occPFTm1ckp0wAGujOqaQHpsQrLLath2f99U3Jx9Q0GUTX2hbc%2FuF4qprmscXfTm5nkL5gX%2F66XIxGFmKnO63gK2GLfwV44oYqK20DOlFfx9%2BQxMJd3%2BYOlLueu10wOdt1qNApAEssKxfUWUrKrQ9%2Fetbklv%2F%2F2e%2BxTUN4zHzJwByz0p5E%2Bj6I6lYZvzLE4MlMtDEQTKalsOzVCp1NemNluIl4M%2FkSH1shpu%2BUZGL5lP7TSD%2FtN%2Bo28EdDDxeUZhaEigzmpgVrGYPc6dkDyrGTiHRT%2BoEozKaUPbpdqjMhoPjPpkLebpMOISzIafyFJVytK3xrRR0%2FmDTLvRBh3u0Ul3615lRT3fu681LaXzya2sKEEGuy2oU7LkALynYdEGYvAcgYacpGQp9mktjydSxqYaLawkZZlHbgTrqgkL%2BwRFxFNmPJ0kQg3dYDUoXU0PLgnCG2MObn3swGOqUBIIx2OEXzoqpapHObIwA%2FNUTvRWr%2Fl3%2FTTj%2FT7B7cft9v19gjnc5ZQPrJhz4uyiiZ87C9djiXaXkExJNnon9UsxiLO5A742MzJAo5iC12j0Cxhd2kYWAvC3uqeDvivHzUW5uHKcox4BK7CDSHFrEwNq%2F7IbQEun9I2HjYh6D5fzBvBvG0BlQfPnGyu3D6QCsLyFOa2DqztELDoYRHPZcJbOKHRiz7&X-Amz-Signature=5412524916da2d11bc8dec5ab129538cbd964cd5c2efb6e7ba5292c00b88dd2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE7TOQAM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzwcYGKxVYdAGCmx8ubJItq0CheYkq%2BnKJS9dE0mtmvwIgWLsR8vMDhj9aak1hlFDpl4MFsTCfqiT98ynPkjHSUt4qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWJJWUzTasSIQDRGyrcA50%2FnbGLTqVRVur7JSXWT%2FC8QD9edN6N7KSHJ7tFgVEyBsAVOhRcmEle8s2PYy3YKuVKL%2BjxvHf1PUhSDEO%2BsinhwAsUgrl1gar2fsIFLlguw2%2B%2FvRFTxKnCJ63sFSlKL5vARP%2B92D9ZnSA4gECs4nRjADH%2BXEIIUK%2B%2FXcPuNOihhDE3BLh22d2AGqkSJPC21nIUe3tJF2mxWPIuC7v7e8N%2BEyYxKE9bn0SAH2tk28J0iRxh9osWmKkVtBSxHZjpMsL8%2BHFXOtE5Scm5ya%2BI4zMh3BQqpND0aCTw3%2Boi8LHmAnVyWS17sV3F8cmeVKmQsMbBF4HgIQWRU7tHdeeouYNfTSmXZo2vasxGR0SQjQ9b%2BPwNQiwSYi6BE4BzH3BmzXf3wtkQptu6cSehcyVjQDiGnWAmTfugO2J9a7d1o5%2B7amy1U6kMMZfxJPhuuVGUILPi4hpuChMblV%2BgR1WmoyO0h61vbdZlJ3NM%2FcYFTuAe7oqPbm8d83jPY%2FHBGqpxRco%2FuhX24879%2BVTEUf72w7BRCBdtsBqoDNL4xyylcJjPYaJP1lgFyMIj28nNs3bpLcf%2FPA0A5C0DjOvemnxpO5PqGhU8Qwy3EN9Q%2FChknCtKcvuD6aC6uqoL91QCMI%2Fo3swGOqUBdgAH5hfkjFGD10RBCdS1nFYecPdPpmcej3I3V0JBWmtFgssTeNESDJ88XQChhKZ9W9QOrVlX4VO1QT5zysXUiPJGpBxAPWfv9J8h0JpMbPNDSUZcABzofyYmJLgTq3qwabG1wdveYdJ%2FMOt7mfkVy4SJJE%2BRNHaaoZTZM7f7pP7Fxm7BsL5fT%2FeBqGF%2Fm7Zzp4InNcQzYPitSv9UDehwe6gTmdQk&X-Amz-Signature=9a0c27fb344e22c9526e3da56aa4ab57abe2c360d9fb15f3f73ed2247cca62af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE7TOQAM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzwcYGKxVYdAGCmx8ubJItq0CheYkq%2BnKJS9dE0mtmvwIgWLsR8vMDhj9aak1hlFDpl4MFsTCfqiT98ynPkjHSUt4qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWJJWUzTasSIQDRGyrcA50%2FnbGLTqVRVur7JSXWT%2FC8QD9edN6N7KSHJ7tFgVEyBsAVOhRcmEle8s2PYy3YKuVKL%2BjxvHf1PUhSDEO%2BsinhwAsUgrl1gar2fsIFLlguw2%2B%2FvRFTxKnCJ63sFSlKL5vARP%2B92D9ZnSA4gECs4nRjADH%2BXEIIUK%2B%2FXcPuNOihhDE3BLh22d2AGqkSJPC21nIUe3tJF2mxWPIuC7v7e8N%2BEyYxKE9bn0SAH2tk28J0iRxh9osWmKkVtBSxHZjpMsL8%2BHFXOtE5Scm5ya%2BI4zMh3BQqpND0aCTw3%2Boi8LHmAnVyWS17sV3F8cmeVKmQsMbBF4HgIQWRU7tHdeeouYNfTSmXZo2vasxGR0SQjQ9b%2BPwNQiwSYi6BE4BzH3BmzXf3wtkQptu6cSehcyVjQDiGnWAmTfugO2J9a7d1o5%2B7amy1U6kMMZfxJPhuuVGUILPi4hpuChMblV%2BgR1WmoyO0h61vbdZlJ3NM%2FcYFTuAe7oqPbm8d83jPY%2FHBGqpxRco%2FuhX24879%2BVTEUf72w7BRCBdtsBqoDNL4xyylcJjPYaJP1lgFyMIj28nNs3bpLcf%2FPA0A5C0DjOvemnxpO5PqGhU8Qwy3EN9Q%2FChknCtKcvuD6aC6uqoL91QCMI%2Fo3swGOqUBdgAH5hfkjFGD10RBCdS1nFYecPdPpmcej3I3V0JBWmtFgssTeNESDJ88XQChhKZ9W9QOrVlX4VO1QT5zysXUiPJGpBxAPWfv9J8h0JpMbPNDSUZcABzofyYmJLgTq3qwabG1wdveYdJ%2FMOt7mfkVy4SJJE%2BRNHaaoZTZM7f7pP7Fxm7BsL5fT%2FeBqGF%2Fm7Zzp4InNcQzYPitSv9UDehwe6gTmdQk&X-Amz-Signature=f8ee2fadade69b176545ea370ecd6bb22dea8672d4733310286f4cf2c07a01da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWGVHI7W%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEP0cY6OtlbwzisTOk96wjgfGmFlAX51onA9wiyPIeliAiEA9vwexRwsp1PuW4rwkLDA90HPDwmx2TdcFmFDlDlVrRkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGG1dMaUFLI6fcriSrcA2hKIZJcpBEZbvGwLMhdfXa66rqC00S9DZ%2F%2F94nZ6Q2T0%2F7kH7QGi2HBu5QIzRgEE%2FFhuCQksB8HQnKOnP9Sip24IPHgfAJaHQvOyJqbb%2BDgrwnL%2BZT7TPeOEW53mc0UQY1SnmKnUioTpMwXferHU7%2BM%2FoPB9QcOzSczZWqlPb%2BVTZ6ir8BgC3occPFTm1ckp0wAGujOqaQHpsQrLLath2f99U3Jx9Q0GUTX2hbc%2FuF4qprmscXfTm5nkL5gX%2F66XIxGFmKnO63gK2GLfwV44oYqK20DOlFfx9%2BQxMJd3%2BYOlLueu10wOdt1qNApAEssKxfUWUrKrQ9%2Fetbklv%2F%2F2e%2BxTUN4zHzJwByz0p5E%2Bj6I6lYZvzLE4MlMtDEQTKalsOzVCp1NemNluIl4M%2FkSH1shpu%2BUZGL5lP7TSD%2FtN%2Bo28EdDDxeUZhaEigzmpgVrGYPc6dkDyrGTiHRT%2BoEozKaUPbpdqjMhoPjPpkLebpMOISzIafyFJVytK3xrRR0%2FmDTLvRBh3u0Ul3615lRT3fu681LaXzya2sKEEGuy2oU7LkALynYdEGYvAcgYacpGQp9mktjydSxqYaLawkZZlHbgTrqgkL%2BwRFxFNmPJ0kQg3dYDUoXU0PLgnCG2MObn3swGOqUBIIx2OEXzoqpapHObIwA%2FNUTvRWr%2Fl3%2FTTj%2FT7B7cft9v19gjnc5ZQPrJhz4uyiiZ87C9djiXaXkExJNnon9UsxiLO5A742MzJAo5iC12j0Cxhd2kYWAvC3uqeDvivHzUW5uHKcox4BK7CDSHFrEwNq%2F7IbQEun9I2HjYh6D5fzBvBvG0BlQfPnGyu3D6QCsLyFOa2DqztELDoYRHPZcJbOKHRiz7&X-Amz-Signature=bbcb377a9b31860d3daf2c47c43f64bbdd2a2a76175412b99d94a3825df0efa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWGVHI7W%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEP0cY6OtlbwzisTOk96wjgfGmFlAX51onA9wiyPIeliAiEA9vwexRwsp1PuW4rwkLDA90HPDwmx2TdcFmFDlDlVrRkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGG1dMaUFLI6fcriSrcA2hKIZJcpBEZbvGwLMhdfXa66rqC00S9DZ%2F%2F94nZ6Q2T0%2F7kH7QGi2HBu5QIzRgEE%2FFhuCQksB8HQnKOnP9Sip24IPHgfAJaHQvOyJqbb%2BDgrwnL%2BZT7TPeOEW53mc0UQY1SnmKnUioTpMwXferHU7%2BM%2FoPB9QcOzSczZWqlPb%2BVTZ6ir8BgC3occPFTm1ckp0wAGujOqaQHpsQrLLath2f99U3Jx9Q0GUTX2hbc%2FuF4qprmscXfTm5nkL5gX%2F66XIxGFmKnO63gK2GLfwV44oYqK20DOlFfx9%2BQxMJd3%2BYOlLueu10wOdt1qNApAEssKxfUWUrKrQ9%2Fetbklv%2F%2F2e%2BxTUN4zHzJwByz0p5E%2Bj6I6lYZvzLE4MlMtDEQTKalsOzVCp1NemNluIl4M%2FkSH1shpu%2BUZGL5lP7TSD%2FtN%2Bo28EdDDxeUZhaEigzmpgVrGYPc6dkDyrGTiHRT%2BoEozKaUPbpdqjMhoPjPpkLebpMOISzIafyFJVytK3xrRR0%2FmDTLvRBh3u0Ul3615lRT3fu681LaXzya2sKEEGuy2oU7LkALynYdEGYvAcgYacpGQp9mktjydSxqYaLawkZZlHbgTrqgkL%2BwRFxFNmPJ0kQg3dYDUoXU0PLgnCG2MObn3swGOqUBIIx2OEXzoqpapHObIwA%2FNUTvRWr%2Fl3%2FTTj%2FT7B7cft9v19gjnc5ZQPrJhz4uyiiZ87C9djiXaXkExJNnon9UsxiLO5A742MzJAo5iC12j0Cxhd2kYWAvC3uqeDvivHzUW5uHKcox4BK7CDSHFrEwNq%2F7IbQEun9I2HjYh6D5fzBvBvG0BlQfPnGyu3D6QCsLyFOa2DqztELDoYRHPZcJbOKHRiz7&X-Amz-Signature=665f7b2158f10de41f63e9b4004212fcd7e1e42cead89710c8b4577dbdb042c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVLQXAFN%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEAA%2BJMnrLnruPYufaC1G0iY9kmHb2a8wxoh%2F1%2FfCYOgIhAIj%2F62NfuTXBQuOg2N9UjtmGs45Sg1hRbrPrtUF0%2Byu1KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxyM%2BqBPtZYdLEK2wMq3APMXdsj5jbuJ9mWom%2BLPz7%2BUI8gXtIWRkhieiQ6WEq9%2B1kouAU7ClmJ0CIJHkGgCf45e9Av8h0O23%2FaZX6sz1zyWggjC6zJeiUgKWRRRsGmdnh8o8Ml4AaWjeGynDNXzwy8DxFOfLB%2BW3efMXTl83GbcvpQA1e%2Bvx0fXWCesHSujqSz1iK%2FTx3FGQYn3qK%2BXBO2o5T0cFP4IefXDkUCYKWjBu7Ph1zEOK1mSsQP6ZvqBGB%2FEiYQHqWSvYQPxwGzO6i6kbqeLKLARWUjp2YhsxcMw4sE59bNF%2FNvMGyaMStnzFWCSr0iaIgwri7M%2BJmWPgynXVbtdlvc253IgT1HkCb4nQxF30EGHOjlMV3YEtthHlxUznF2LEYugJ8Vu%2FYw0Mg7h6YJQ09eZqek1KD%2B63D5dbpKR21VMpAMtz4t5FGw60FHhFc%2FqQie8ENL%2B4EIZt0qNJwjIP8bB7T5Ba%2FWPMsl%2Bi8TFmjuomyzw99x6DbT1k0sClT2FwQeFBZ19InxXITRlYfQ0nvWtuJCaHKOxyv4dhKjTr3lHV3zha%2BcJ1D%2BZOvdkqs%2B2v9kuBmph1PKTbg87IfH415xqEBBy9iZPLf21iQwfzj%2FGw7IY4YZtqaxDSJ00pz0wnW9CGxVZTDK6N7MBjqkARf5BsO2FbW2eRKBbZxKAgz7N7AK%2Bnru0qw8B4VAYS8aL0k620Sjt82WnmopbB4a%2B7LYLJJhr8rRzrJF33RjCoE7ITQOKfxxDJnqDvRpHSIm1Wo0gslAEZdldXbwO%2BTI%2FqefCLBYiJ8OVmlhCChqEufnlF8mPtRS39ChrtcQ9k6BMUdZaVBn7Svcpbg%2FJtjHx1BkNJ7rlCTpHoLH9oW0kQ202suG&X-Amz-Signature=d305fd69f34b9db9d3d7c87bfd1ab5744c1b31b8784e2d039f8321ad72da5f5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

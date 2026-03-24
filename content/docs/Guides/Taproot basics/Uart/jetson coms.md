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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQHR7KJI%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTTztyCGxCLuofS%2FS3Gb2CWDmO1Fd%2FxjS1100uTEVkkwIgNoDNJSD%2BB8%2Fm1VrnNDt48SKwZVV9X3S5K0gnH9vaFlYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOX0sNWfpVxa1r3UgSrcA2VamHNdLRsSgAU4HHDRWnywTyfZ0U4GLjlfZjGjxKlZUhtTVqXX%2B8KnzBTFeoOGfXdixVPzVzbHJSOkLXG%2FB3m3EF5R37AXaedjBF4Zwj4u5yujEcgOpDMt9m31I9nvW2khAmYg%2Beaa7bR3QcPL1FF%2B5ebqUTgs97%2FE%2BhGmjEJsJeih%2FpyWoj97vsDkI7Dih3Nrf7oJiO3P470cCJ1Ca0NP5JotSRi3F3WL%2Bijh1%2Fsgn46tc9z%2B7Y4r3iFEXhPJDFWLbXO8dC9G19YmXL3K%2FkPpH5mo5DaRpsu7%2F2FLySL3dDLVQKJvR8X3pQjwiFE%2B6Tl5n8io5hLMbXygHel5MiYdQm9B48AqJWPEBV%2FEc5A3nmAz%2F3kq7PMsCkTpcY1UrfAOmGXzR1w%2FPDsHbfgxz%2FjXW9mWYep0l44Jxit67fXIAuXZdZ36vHju73ycULihe0Q4s0NQjV5OfsiZqHqX9axvwCL7AquCpYW9xfYRhu5MDp4wt9E9QYw3KFvDC2RQKoMJqruFO9%2BZpow7AG9Usj71OKThToELI1dM3rcbMTsVG8PkMgN4JgiVcrr1pRIRp0PhRWL8xGhKWdfDcl8ZhmkEi4ay0YcHS6EyLzSKrtwOfUfSjPRJnokmj8shMInKh84GOqUBAVJrrwntr2V2gMI7OJZMtw%2FA1dKEbJvyiHF7OR5zjK%2BXgHD0iSJHDcB80LexjhCgIrXiouST9PqIuWFQBYiuC5EbZEG2Ch%2FDbylOjjeSzP3bmCwF8DltLjLIunGy3%2BStCAquBdTGQPtm3Yr0MfCLaqen9P4BbORc7Y3PR%2BIq%2BLJTkquhT0%2BFtTf8ZucFiAAPsqgT%2Fafg5ZLJp7OxjfqoIITK4aym&X-Amz-Signature=54e1be273f1a5878b4a4daf689f4101b8800115dce86ff1af0ed948c0eea818f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ROPUGAY%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFoQhIJY7SW3zLPaAUJLqjveEDUU72eQpj4l6TNOavHCAiEAzBDaMkKlmnJTLHwG0h9HQuxFMVnorO98L07yP7txK9QqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDED%2BGJQO30CL%2BnvDHircA6yL9n4ZUUAFZfsI334zjWa8Cmebp%2FtWDJZA%2FWpQq3g0GJgGVTPKm%2Bhjr1pjXC%2FrW%2FerQWZQI47l33JjR6JDfJGt%2FTA2jAHm7YJDXcM%2FzEElnroVjMqcK5RKNFhRhhrE2AvbKaDLFpYGYfqwwHSPyNUYvUHwQr9Rslx8kMFdK%2FdrHJvXPN4Rv%2FDXrgav7l27q%2B3ZX7CNHANJx1sBpC8I2%2F%2Fj%2F6IYXW%2BH2nDvIRDjiQyvNNAV6lLlHJyCorEE8ktoRH3cChcAU80PXMTtTYvj58yfO%2FHuBv3sxgTzwbLjVcFsRvv6VhNTyxkDWtGcJDySgW8Jz2b14gXDdvAlTNzDg6c0tMh6V%2FKY1sU7aSo65fwnZ0GR7EWUuAGbRMFOdMba9SkOfx3w0JFko943FQVKMTrLxQVfWIOWmI0Vxjv2k0JyVSFkB9WItI0RvvF0MXUA5oX4gxCBIiTX6051vON%2BnON43FFfGyFW6FG5LgLh2odA1bBPuNMl3bjUfD4bTFXM6CpwmC2CaO0w4D1mLRgz9oIXhlvO95fIHn8HWi6ALaRr7An%2BDFPrO4hA21Z1nXFsA0Rro7dsF31ae8YM2NLP7b9ogkD023uINgh6bgr5wn8HqJPJ20HnAF9BMPzIMNvIh84GOqUB7O9DOl8u0DZcxmEWo%2Bid9KqSeGFHPm%2Fs%2FV4isafRU%2FjXPMdtIw%2BvOm8BTKGiIDexn1UWC6EKhf6xYLdNat3rwhvRwNzWtbmI6FXEaZsIZ%2BvkC9TxvRjVXi6jFB0GCGr7K6XwCAbn6xFxk61t5PKL3lD9o7amYGDpC93nOc5DJ2Kp3k9AxV0eN0mErVjLWcY7ALMDDVi963kvYK%2FU4t%2FETW9Ezgp6&X-Amz-Signature=70c66a18a61b9388873d9c234f211da0376e940ec0d95b84570048d691b508a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FVWMJXN%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCluMhOn2FM2R2rY1hHaufBoHd4udayzc5%2FS5PntkF6%2BQIgO1GA07KslPSw6KQ00Z5TUrTqAdZniuKWfZnJCkv4DasqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPjS%2FUbtgzln8GtNyrcA7G9EmqxRVx3ySRNzsx1gE5YyuMpLoNTTSdHIwA5QhgHsbGYSXd6%2FCT7qnwJa3egs7%2Bqi7y8MAmxgiz6%2BZFzwvkie9cpN5vyF1WLmGmsiOPJnfpcSbi0dKnEd6fOLx1gJE1TSLQt4KhiWDALgVlY9q36RT9VI9oHX2EzP8P2g7sdCO1L2%2FL33Ly9PjGxgHT5PkqbbkZLvQqKLtSmwFnnUoUyBKPmn8aTmUYA1q7FoZeMx2ExW9O7aF%2FjmbwQ3gRi6Ze0qKZVhmAE%2FjW7awSp7CLNwzMqZS9FAWKJfBd7Pv4ThUmhGMcb3duD1IrwiKbTdfk4YhljKUskG58sqay%2F8%2BVzDbQGY91%2F7get5wEelN0DGp7WxfydG%2FZjc%2FPfZAOkxVB2QbnngWxW0MbfbtobDRF6SyFlRDrIMGRYXqmXmF3L3jEIe7DuriFFgKp5%2BC84Faau6KqVOtD%2FdMx%2BR%2BIbhRxY0tnGRz9IcLlbPWQqRPSUvIv8e7JqmE27Xk93MTRvRmZHHZhlfeYITDjVS7lVuN1gA30CzTLEcbzo2UF3qkEmDHGqtLJiCWCVqupHsvjT%2Bt%2BBFpfEKBiz2VmAYUbZcp55Bn%2FV2nB0zrv3XzXQVWc5fgFNmFkADCaDUKT%2BMPHJh84GOqUBc4115Zgd8rrpYy8WCX0VwFeKAdX5HNGYiuwAdnOXQu3EOr%2Bdrc6R8dQG%2Bc4%2FSRfyfz0LYyzbDFZAensyvKWnxrnkpjVZ0V8h3pqdhGtKNJIF5aJd4n2JccOEOeh%2BWBEEHOPcOSNd90tvRbJclZMlMVr1xLaSS%2BlOf9ZIJAl%2BpYIH%2BAWas5Es5jE3XH6EE5T7%2F6iScWIS7wXTevHyluh9xuYGvaE6&X-Amz-Signature=e21dfec870712e36abc96d4f789b1c63e65bc7cc88ca3574f37c71d1cd112283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FVWMJXN%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCluMhOn2FM2R2rY1hHaufBoHd4udayzc5%2FS5PntkF6%2BQIgO1GA07KslPSw6KQ00Z5TUrTqAdZniuKWfZnJCkv4DasqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPjS%2FUbtgzln8GtNyrcA7G9EmqxRVx3ySRNzsx1gE5YyuMpLoNTTSdHIwA5QhgHsbGYSXd6%2FCT7qnwJa3egs7%2Bqi7y8MAmxgiz6%2BZFzwvkie9cpN5vyF1WLmGmsiOPJnfpcSbi0dKnEd6fOLx1gJE1TSLQt4KhiWDALgVlY9q36RT9VI9oHX2EzP8P2g7sdCO1L2%2FL33Ly9PjGxgHT5PkqbbkZLvQqKLtSmwFnnUoUyBKPmn8aTmUYA1q7FoZeMx2ExW9O7aF%2FjmbwQ3gRi6Ze0qKZVhmAE%2FjW7awSp7CLNwzMqZS9FAWKJfBd7Pv4ThUmhGMcb3duD1IrwiKbTdfk4YhljKUskG58sqay%2F8%2BVzDbQGY91%2F7get5wEelN0DGp7WxfydG%2FZjc%2FPfZAOkxVB2QbnngWxW0MbfbtobDRF6SyFlRDrIMGRYXqmXmF3L3jEIe7DuriFFgKp5%2BC84Faau6KqVOtD%2FdMx%2BR%2BIbhRxY0tnGRz9IcLlbPWQqRPSUvIv8e7JqmE27Xk93MTRvRmZHHZhlfeYITDjVS7lVuN1gA30CzTLEcbzo2UF3qkEmDHGqtLJiCWCVqupHsvjT%2Bt%2BBFpfEKBiz2VmAYUbZcp55Bn%2FV2nB0zrv3XzXQVWc5fgFNmFkADCaDUKT%2BMPHJh84GOqUBc4115Zgd8rrpYy8WCX0VwFeKAdX5HNGYiuwAdnOXQu3EOr%2Bdrc6R8dQG%2Bc4%2FSRfyfz0LYyzbDFZAensyvKWnxrnkpjVZ0V8h3pqdhGtKNJIF5aJd4n2JccOEOeh%2BWBEEHOPcOSNd90tvRbJclZMlMVr1xLaSS%2BlOf9ZIJAl%2BpYIH%2BAWas5Es5jE3XH6EE5T7%2F6iScWIS7wXTevHyluh9xuYGvaE6&X-Amz-Signature=1f5b3c35bdcc9f51264e95d2603c30fa6ca9b95b4430da1eff9e779c251aa748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ROPUGAY%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFoQhIJY7SW3zLPaAUJLqjveEDUU72eQpj4l6TNOavHCAiEAzBDaMkKlmnJTLHwG0h9HQuxFMVnorO98L07yP7txK9QqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDED%2BGJQO30CL%2BnvDHircA6yL9n4ZUUAFZfsI334zjWa8Cmebp%2FtWDJZA%2FWpQq3g0GJgGVTPKm%2Bhjr1pjXC%2FrW%2FerQWZQI47l33JjR6JDfJGt%2FTA2jAHm7YJDXcM%2FzEElnroVjMqcK5RKNFhRhhrE2AvbKaDLFpYGYfqwwHSPyNUYvUHwQr9Rslx8kMFdK%2FdrHJvXPN4Rv%2FDXrgav7l27q%2B3ZX7CNHANJx1sBpC8I2%2F%2Fj%2F6IYXW%2BH2nDvIRDjiQyvNNAV6lLlHJyCorEE8ktoRH3cChcAU80PXMTtTYvj58yfO%2FHuBv3sxgTzwbLjVcFsRvv6VhNTyxkDWtGcJDySgW8Jz2b14gXDdvAlTNzDg6c0tMh6V%2FKY1sU7aSo65fwnZ0GR7EWUuAGbRMFOdMba9SkOfx3w0JFko943FQVKMTrLxQVfWIOWmI0Vxjv2k0JyVSFkB9WItI0RvvF0MXUA5oX4gxCBIiTX6051vON%2BnON43FFfGyFW6FG5LgLh2odA1bBPuNMl3bjUfD4bTFXM6CpwmC2CaO0w4D1mLRgz9oIXhlvO95fIHn8HWi6ALaRr7An%2BDFPrO4hA21Z1nXFsA0Rro7dsF31ae8YM2NLP7b9ogkD023uINgh6bgr5wn8HqJPJ20HnAF9BMPzIMNvIh84GOqUB7O9DOl8u0DZcxmEWo%2Bid9KqSeGFHPm%2Fs%2FV4isafRU%2FjXPMdtIw%2BvOm8BTKGiIDexn1UWC6EKhf6xYLdNat3rwhvRwNzWtbmI6FXEaZsIZ%2BvkC9TxvRjVXi6jFB0GCGr7K6XwCAbn6xFxk61t5PKL3lD9o7amYGDpC93nOc5DJ2Kp3k9AxV0eN0mErVjLWcY7ALMDDVi963kvYK%2FU4t%2FETW9Ezgp6&X-Amz-Signature=decdbcded8d040752d300f54ebe696ab90776d91bb9bb6dce83c63c33870db56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ROPUGAY%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFoQhIJY7SW3zLPaAUJLqjveEDUU72eQpj4l6TNOavHCAiEAzBDaMkKlmnJTLHwG0h9HQuxFMVnorO98L07yP7txK9QqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDED%2BGJQO30CL%2BnvDHircA6yL9n4ZUUAFZfsI334zjWa8Cmebp%2FtWDJZA%2FWpQq3g0GJgGVTPKm%2Bhjr1pjXC%2FrW%2FerQWZQI47l33JjR6JDfJGt%2FTA2jAHm7YJDXcM%2FzEElnroVjMqcK5RKNFhRhhrE2AvbKaDLFpYGYfqwwHSPyNUYvUHwQr9Rslx8kMFdK%2FdrHJvXPN4Rv%2FDXrgav7l27q%2B3ZX7CNHANJx1sBpC8I2%2F%2Fj%2F6IYXW%2BH2nDvIRDjiQyvNNAV6lLlHJyCorEE8ktoRH3cChcAU80PXMTtTYvj58yfO%2FHuBv3sxgTzwbLjVcFsRvv6VhNTyxkDWtGcJDySgW8Jz2b14gXDdvAlTNzDg6c0tMh6V%2FKY1sU7aSo65fwnZ0GR7EWUuAGbRMFOdMba9SkOfx3w0JFko943FQVKMTrLxQVfWIOWmI0Vxjv2k0JyVSFkB9WItI0RvvF0MXUA5oX4gxCBIiTX6051vON%2BnON43FFfGyFW6FG5LgLh2odA1bBPuNMl3bjUfD4bTFXM6CpwmC2CaO0w4D1mLRgz9oIXhlvO95fIHn8HWi6ALaRr7An%2BDFPrO4hA21Z1nXFsA0Rro7dsF31ae8YM2NLP7b9ogkD023uINgh6bgr5wn8HqJPJ20HnAF9BMPzIMNvIh84GOqUB7O9DOl8u0DZcxmEWo%2Bid9KqSeGFHPm%2Fs%2FV4isafRU%2FjXPMdtIw%2BvOm8BTKGiIDexn1UWC6EKhf6xYLdNat3rwhvRwNzWtbmI6FXEaZsIZ%2BvkC9TxvRjVXi6jFB0GCGr7K6XwCAbn6xFxk61t5PKL3lD9o7amYGDpC93nOc5DJ2Kp3k9AxV0eN0mErVjLWcY7ALMDDVi963kvYK%2FU4t%2FETW9Ezgp6&X-Amz-Signature=dffb4ff797118e0ffac11e3b8a40825901df89b0bdaa82159ff017c10203738f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T6M65QN%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr9LU2ZlJ8x60d10emDzRuPxkGv281NxwwpFLM7Lrm3wIhALyDl0UktvRxO3bC8ux2I99TmmFgHAL5neXvug8llXMHKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxId4TvxwWtG7Dodcq3AO3kyHGjyuC70rD97R%2F5CK5Dp4UhnnwAWCTDFNVFzx1hKDsNRSt7Ay8Kkijy6jollMbwLwn4kKs7IzG5%2FlaFbCX9qq1CaIFZoP4n06beBx9hyTxHvXhS9AfFMFAkje%2Bi4Tpyies8bseMVyejLMrzIUefQNDIKkmHuXiYrGgIv9Yvf6SiL7ahrK1OuJqk1OilaPMHj5N1pR%2BfhZJt3V6kz1nzm%2BpfBri%2F1GWRYRGmowjyDoE5IxN9pRhOtXM8ZlIHBQ5OGKoeZE9yNoNwn5aE3T6YMQoJNqJbdpoHReMrG8UiY8uC7CWBdVMIXGdoJvIfkvFoUlsSn1yR5V6DegKbb88ZqLBoZahAzL%2FYscspPKyzOnEStxOLeW%2B%2F06PrOb4VT2lIu7x8OhCKthNZxFhsnwb%2BfXgOqJAWqUS8GN1Z0n4cV2IBoEjehHl4AEEFLDF%2Bbk5owxcHd8eC2JplCpAQbIihNKDbadzLbo2hZ3zCAWGstwdlu5Cyq0XXFU0Rscc%2FyjaC50QuKB6eaRke%2F1xBSul%2F0t816qqjvWN2RDtLDKLMkrJZDjzv%2FMYlvgKLg4HYcOGS3E2bDzp5KadwtYEr78VQm6ZElQHKFNIei6BNmuCGYFQcO0FPQCwVxfeJDCuyYfOBjqkATgt9I5wVfG368GlPHurCYBmjtcmtltPZhEG%2FMnKZzSlvk1Tii4yQVwZ5Rf70%2BQXVQVZIgHKVYPYSl7pc2A8WRWnx93rhmqL%2FYHl60BYCmIEH78RgMovYaINEpNZ1IZeCJcUE0ARl7AoGws%2F%2FFVoKgWvPNVlBHq5v2C44x3B1k2KrHYGX4RqlBIbN9126CTPxki7V5RUWcCK07fnmIbRrc7Vbh7F&X-Amz-Signature=9536e8da3fdf1dbae663407a1d4c26e90e47c30d1013a65dcc375201799c789b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/74d73116-a670-4beb-987f-f1630397f4cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664ZUYG4S%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJN%2Bs90tpsQ2PjaH8JjJf60amSWAQLbtJnCt8SYnGKVAiAORgXbRcXnSmBvZGfoZvPFPPKhcBc%2B5tKbSCCEduFdnCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq6z3OkbLduTE%2BPTWKtwDR5uVWg0c%2Bik40ku0o0Ui%2BmubQ5FePBwS7RoWHdUoPOnstzeDM1i6mTc%2BKShXZ2FTf%2Fye9OB9A006UO%2FkaPKZiazE5Sqmn8AWXk31NdnPHQDcQJAwFNCGIaC2%2F%2BdFalWrSwlk5OxEm5ZB3jG8ZWM3LPBdCw%2FBghI4rUxmHtaliZ%2FfiDyo2T7JqEr5h%2F0r%2FZNTZVqhVMIStr7cSzam9pZUlY3ao9V54kdcTe0uRNKoRdz16ds%2FHk64%2BN2Lz7sbxydrF7BU9OTeE6eQKYJWL7BLXPV5I6f5QJevVaLy23zCyXe31A5ZSoKLdbLYP1cpcHPc0xxPBuwmHdk7migywdRZGTnzW9gIFix08w2ncc9JvfMKxMGf%2F%2By5nP8k8OhqrLWMbx7wRRCPO1s0NlCP2raamC4D9XqDmeIwBU9ACroPMT6xJLOXVsESupgZapjBEbi17fxq6dDPczk5XGhFQxXA5C%2Bz6ikbty%2FWxszqj%2FjeVjwsaG5pI1R7jcRcD9v9TJ%2FJZTzc1imi0EpXxSgYEQkicgxvZ4F6TUZcGMlNImFA8aqaHGMGOxAtwlP0GkRCvamBMfZqN2Dz2iIvB%2FOG4TSDIhN%2FJvDxWydoK1JX09a1rUEF9fMerlvarv8r8p0wya2NygY6pgEl3Z9U3PpRI%2Bt5gHxscHbfLDyoSIUgcQnb9pnormK0UabsscVcEp6snVWVl4Oz3llaujGfPlRLb4BMomJeX8HRl3vw1iei6DmBVSa%2Bc%2BgUFjzRRpIkrbY1pydM90sL%2BcmcspFp9ex2DmKcEFqXKEuaPu1uWmKDP5MHG9A3kakpxqhZDEbov56H%2BTSNo9q7Zf9yk3qUR7wOXP9%2BpqO%2FaRVjAuhoFFV3&X-Amz-Signature=b648777e7b269ec4466d05bdd27433236f37b154841aca4fbfa327c0e1ba87dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- type-c 4 pin UART cable

	TODO: get pic

## Wiring

Plug in the 4 pin UART cable into the port shown below: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1306181-24ad-43fb-af03-d9d9feda5f1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4ZTER4R%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9GzBlYPK%2BnRCfXTR683j84MWY%2B%2BGd9RhawpPvH5O24gIhAK0SdXmA%2FT4aBAWXZWZQc%2BSAg1rJ0q%2FyscBvmMM360AtKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFrT5SdlRbZ9iVIEsq3ANMxUuqDSL6LGZWxGtS4%2FAMWTIPaioOM%2BYj%2FnQ1re9VG8Ypdw3%2BoJeIdLDs3S0ek3UU0A0WkIfpu85%2FkNQzyvIlMGi9R21Lj%2B2ojN%2FMlywlnXLNtOfx29FrcXWHXOugUGWxO1BC4tTi3WNC32VjA5Fbfck%2F9ZpC71MIQXCd2kQKROliTKbQ4hK2T2E5Bsw16%2FDT6UdBUUDjikob%2F2I7avL7ZjiHpu%2B%2BD7eXvJWObPGn0ZwkAUx50QrYuMKIuECSs0RHi%2FbqLK0itq0RqNCOQB%2BPYbK0n4e6YJxCObFBG%2FluCOUZiI1ysmflUnOEpePU55Kr6M6U6hahFhDIG43rivTx5su60bwXgYGrMKSyjTESzLnb2YTBrxTBQMD3z6uiczgG7apTshcIF0QtkOy%2B6XvqEpdU2VFEcBwa1RP5Rgzbc1ET0Ep347HCgDLc5%2FF7Ymc4lJzmueX%2Bd8lnLB9FeoFKkqK0U73uX2OjRH2oQlioq6pGBm%2BjIlAmUhwmWyM%2FDgQSrEIMXgW0iSnLhz81MsWLKMGzDLTanoBFRCqflkQl2ba8NfKYXQ42FwM4qiKUO9u%2FIiWic%2FPibGUVW%2BHEheN9HnWDjjr331NU%2F2u2E02A6w3AgeFBzclHJAWadTC0rY3KBjqkAecMXi0IVIkNTfIPVnw1C9c65cB%2F21OVCWTmj2pxatyxq%2FnBjoiK4LMbEj5mQ57M8g8CVqH5YL%2BPR0QkvLykdgQZJB%2B%2By6ZDD4JNf8pGvh1lqn7vi6FOhKVgodsBHi3BqfYjpcwdUOAcSyviGBFFbzv7hzuOVpnCClH8tnUCak4%2BUvQEjdtmLD000LpG%2FXAViDaIlNu%2BiPGLqF8RDo7nmckR%2BONV&X-Amz-Signature=d7afa1037faa1a0b33a2318c83444d594411a1befb56613ed63f46ee28ff8674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0f234d81-e596-4477-a7e5-a367f4715ef5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6SH65PS%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvw12Prg7Oihe05PEK9a5xI1rx1v27VOnDl9lcgGJ%2FoAiA%2BtEjCz%2FleHX5ry6ZXrF5dsTbW4FqGqugcXREjf8PEDCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI%2BxBETfVQ7PkvQ3kKtwDCLDVlFDPy7beJAFFeM8dxobqRsf1zRyeG%2F%2FquljYgB4AQHLjIjP1%2FIqnWkWwA4NZCzF%2FoE%2FnfIO5Tysxa%2BBTV3kg2Qce3gD3gz%2FPmdyfCFGG7HjHk7cwBsGFE1c%2FD5L6GiajpiK3Tmzv5VKS0FyqGLV3rIUiPwEaIZowwifMBXxllLqRRLgZeKxsczeH%2FZZdX4oJqCaRDqY9DMwxYVFRyDDzsBMjXRvjLW8sClM3giKlRQ7veJG9AbbNZB%2Fj3jwNYpbQLGS%2Fg7o%2FNdJX9v6FRhkyd2fgbY9ar4hRpqaNg3xgqjrHBa75fx%2BHqnUYnw3E7BXxAgDyjy3CxGkF6xAkbIemZXBpEJ7Oiki7seyOgQWCOO%2FLr8oZe%2FMAvMIin6phFt%2FNgOmUmmaIgMw8OY1Pw64lRBMTzJnYgiYPTYDt7NkkK0iZKLsKegnHwPfkn4MGMaI%2Fqbfhf1gMN8hAt2L6g0Ac%2B4KbaCCLxnWrA%2Bq28Tz332fcp%2BMrWxi7lL1a8zFASTkxPd268iQg3ujRpC1UJw4zkWgPFJa9aPXvg0dWX0IfSeJq%2B182K2w9cs%2F76xkoPyLY3NdEKYHXGzhLCmimr%2FqWl4j%2BmF1FBcixHCZ9qq39aK1n6PUmwX4ds2cwva2NygY6pgECTfvJDdmLoFLF%2F5mcWZRGwoytTD7XUnqwHYYHhBYBFb4tFKXYnVeZ%2BR7fq5ALaHBUi%2FQUKSRADh6VGpvjymqfZFN1cKGRb6%2F5YBnrvXzfnC51GBAtcU2UrPzrEIc4S%2FZNnfF%2BjPdchr1dzFDaH4Wm%2Bw94EJktvDzkB1JWQTX%2B833yZULCBfjo1sC6F1vWlDqt7RMGnNNMsQMAnd81uLDiIi7ohU7l&X-Amz-Signature=249b8e8d45ad6969acfee3ea08a7dae5bad5a0e2df5a35012cf468418ef43c37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here are the mappings of the board name with what is in taproot

{{< table "table-striped table-hover table-responsive" >}}

| **Board name (silk-screen)** | **Taproot / STM32** |
| ---------------------------- | ------------------- |
| UART2                        | `Uart1`             |
| DBUS                         | `Uart3`             |
| UART1                        | `Uart6`             |

{{< /table >}}


here is what the official DJI doc says:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2d7f3fe9-8dfa-4b7d-abb0-1263617a811f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6SH65PS%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvw12Prg7Oihe05PEK9a5xI1rx1v27VOnDl9lcgGJ%2FoAiA%2BtEjCz%2FleHX5ry6ZXrF5dsTbW4FqGqugcXREjf8PEDCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI%2BxBETfVQ7PkvQ3kKtwDCLDVlFDPy7beJAFFeM8dxobqRsf1zRyeG%2F%2FquljYgB4AQHLjIjP1%2FIqnWkWwA4NZCzF%2FoE%2FnfIO5Tysxa%2BBTV3kg2Qce3gD3gz%2FPmdyfCFGG7HjHk7cwBsGFE1c%2FD5L6GiajpiK3Tmzv5VKS0FyqGLV3rIUiPwEaIZowwifMBXxllLqRRLgZeKxsczeH%2FZZdX4oJqCaRDqY9DMwxYVFRyDDzsBMjXRvjLW8sClM3giKlRQ7veJG9AbbNZB%2Fj3jwNYpbQLGS%2Fg7o%2FNdJX9v6FRhkyd2fgbY9ar4hRpqaNg3xgqjrHBa75fx%2BHqnUYnw3E7BXxAgDyjy3CxGkF6xAkbIemZXBpEJ7Oiki7seyOgQWCOO%2FLr8oZe%2FMAvMIin6phFt%2FNgOmUmmaIgMw8OY1Pw64lRBMTzJnYgiYPTYDt7NkkK0iZKLsKegnHwPfkn4MGMaI%2Fqbfhf1gMN8hAt2L6g0Ac%2B4KbaCCLxnWrA%2Bq28Tz332fcp%2BMrWxi7lL1a8zFASTkxPd268iQg3ujRpC1UJw4zkWgPFJa9aPXvg0dWX0IfSeJq%2B182K2w9cs%2F76xkoPyLY3NdEKYHXGzhLCmimr%2FqWl4j%2BmF1FBcixHCZ9qq39aK1n6PUmwX4ds2cwva2NygY6pgECTfvJDdmLoFLF%2F5mcWZRGwoytTD7XUnqwHYYHhBYBFb4tFKXYnVeZ%2BR7fq5ALaHBUi%2FQUKSRADh6VGpvjymqfZFN1cKGRb6%2F5YBnrvXzfnC51GBAtcU2UrPzrEIc4S%2FZNnfF%2BjPdchr1dzFDaH4Wm%2Bw94EJktvDzkB1JWQTX%2B833yZULCBfjo1sC6F1vWlDqt7RMGnNNMsQMAnd81uLDiIi7ohU7l&X-Amz-Signature=85e18b060c1b76d64136c0c333994a6c0b82bc116bd41e6435b0e8883592b33d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70ae6b30-8e79-482d-a660-1a08355e3200/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4ZTER4R%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9GzBlYPK%2BnRCfXTR683j84MWY%2B%2BGd9RhawpPvH5O24gIhAK0SdXmA%2FT4aBAWXZWZQc%2BSAg1rJ0q%2FyscBvmMM360AtKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFrT5SdlRbZ9iVIEsq3ANMxUuqDSL6LGZWxGtS4%2FAMWTIPaioOM%2BYj%2FnQ1re9VG8Ypdw3%2BoJeIdLDs3S0ek3UU0A0WkIfpu85%2FkNQzyvIlMGi9R21Lj%2B2ojN%2FMlywlnXLNtOfx29FrcXWHXOugUGWxO1BC4tTi3WNC32VjA5Fbfck%2F9ZpC71MIQXCd2kQKROliTKbQ4hK2T2E5Bsw16%2FDT6UdBUUDjikob%2F2I7avL7ZjiHpu%2B%2BD7eXvJWObPGn0ZwkAUx50QrYuMKIuECSs0RHi%2FbqLK0itq0RqNCOQB%2BPYbK0n4e6YJxCObFBG%2FluCOUZiI1ysmflUnOEpePU55Kr6M6U6hahFhDIG43rivTx5su60bwXgYGrMKSyjTESzLnb2YTBrxTBQMD3z6uiczgG7apTshcIF0QtkOy%2B6XvqEpdU2VFEcBwa1RP5Rgzbc1ET0Ep347HCgDLc5%2FF7Ymc4lJzmueX%2Bd8lnLB9FeoFKkqK0U73uX2OjRH2oQlioq6pGBm%2BjIlAmUhwmWyM%2FDgQSrEIMXgW0iSnLhz81MsWLKMGzDLTanoBFRCqflkQl2ba8NfKYXQ42FwM4qiKUO9u%2FIiWic%2FPibGUVW%2BHEheN9HnWDjjr331NU%2F2u2E02A6w3AgeFBzclHJAWadTC0rY3KBjqkAecMXi0IVIkNTfIPVnw1C9c65cB%2F21OVCWTmj2pxatyxq%2FnBjoiK4LMbEj5mQ57M8g8CVqH5YL%2BPR0QkvLykdgQZJB%2B%2By6ZDD4JNf8pGvh1lqn7vi6FOhKVgodsBHi3BqfYjpcwdUOAcSyviGBFFbzv7hzuOVpnCClH8tnUCak4%2BUvQEjdtmLD000LpG%2FXAViDaIlNu%2BiPGLqF8RDo7nmckR%2BONV&X-Amz-Signature=b7cd674602ec3c963c2bb86340fa5c492e87ee5c96c555927463ed624b0fe860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8aaa69b-bcb5-49e3-8d21-de86a613090f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4ZTER4R%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9GzBlYPK%2BnRCfXTR683j84MWY%2B%2BGd9RhawpPvH5O24gIhAK0SdXmA%2FT4aBAWXZWZQc%2BSAg1rJ0q%2FyscBvmMM360AtKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFrT5SdlRbZ9iVIEsq3ANMxUuqDSL6LGZWxGtS4%2FAMWTIPaioOM%2BYj%2FnQ1re9VG8Ypdw3%2BoJeIdLDs3S0ek3UU0A0WkIfpu85%2FkNQzyvIlMGi9R21Lj%2B2ojN%2FMlywlnXLNtOfx29FrcXWHXOugUGWxO1BC4tTi3WNC32VjA5Fbfck%2F9ZpC71MIQXCd2kQKROliTKbQ4hK2T2E5Bsw16%2FDT6UdBUUDjikob%2F2I7avL7ZjiHpu%2B%2BD7eXvJWObPGn0ZwkAUx50QrYuMKIuECSs0RHi%2FbqLK0itq0RqNCOQB%2BPYbK0n4e6YJxCObFBG%2FluCOUZiI1ysmflUnOEpePU55Kr6M6U6hahFhDIG43rivTx5su60bwXgYGrMKSyjTESzLnb2YTBrxTBQMD3z6uiczgG7apTshcIF0QtkOy%2B6XvqEpdU2VFEcBwa1RP5Rgzbc1ET0Ep347HCgDLc5%2FF7Ymc4lJzmueX%2Bd8lnLB9FeoFKkqK0U73uX2OjRH2oQlioq6pGBm%2BjIlAmUhwmWyM%2FDgQSrEIMXgW0iSnLhz81MsWLKMGzDLTanoBFRCqflkQl2ba8NfKYXQ42FwM4qiKUO9u%2FIiWic%2FPibGUVW%2BHEheN9HnWDjjr331NU%2F2u2E02A6w3AgeFBzclHJAWadTC0rY3KBjqkAecMXi0IVIkNTfIPVnw1C9c65cB%2F21OVCWTmj2pxatyxq%2FnBjoiK4LMbEj5mQ57M8g8CVqH5YL%2BPR0QkvLykdgQZJB%2B%2By6ZDD4JNf8pGvh1lqn7vi6FOhKVgodsBHi3BqfYjpcwdUOAcSyviGBFFbzv7hzuOVpnCClH8tnUCak4%2BUvQEjdtmLD000LpG%2FXAViDaIlNu%2BiPGLqF8RDo7nmckR%2BONV&X-Amz-Signature=db8604dda5eb3ac1093a4acbc2973dddfb802f1d856a814f98201ad5c14bd49f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}peeking into the wire?{{< /markdownify >}}</summary>
  
For those who are course or need to debug the connection you can buy a [logic analyzer](https://www.amazon.com/Comidox-Analyzer-Device-Channel-Arduino/dp/B07KW445DJ?crid=3AZTGYUPNVFAD&dib=eyJ2IjoiMSJ9.PC1-V6lqm97_7AvpkZePNjx80yLsRNi0grR8vp5_hcctxWKrnTq-7yybn9q8HeyzLafdGaoewRTNNfSXVcqPrjekjuN3NxbeeYU1XkHHI3lpTffoO1kEMlvumRe_-6s_kQpbOzD4q8fWy8I2HOBLuCndCg5T4m2U8EUgEHoOU5hlbc8OUSGKjALQ1lql20hoSN2KOjpccafwZgVJq_Blri_he5T7SHEqVx09JyenviE.cwnDRAdHY9AMJxAGNxrHEBr3arHdvZarYYFwcaUduF8&dib_tag=se&keywords=logic%20analyzer&qid=1751329902&sprefix=%2Caps%2C424&sr=8-2) and connect it to the TX and GND of the USB to UART board to see the live bytes go out.

Make sure the settings are set correctly to correctly see the message

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1fefbad7-53f7-4b9d-90e3-4debcae5c0c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HTHSCWD%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTfhxXJuH2ojMod1Z04%2FZ%2Fr0yZQcqNwvqIAFy0UMvcAAiAieeBcFsikP4K1CLfUJ3vgYYAslIRSXbvT49CCmjcnIiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnTXq3YlRRI9UHmkxKtwDsHk5tpRi9J4xYvmoXnlDjjc%2B1yRske20%2B7tpbAWvPelJb4PNcW1pR6mGTbPUwq9vnXptUAi4ww%2FpZI0NEZ9NDLWShaXgtgJL5WKvr57bcqS6zVW%2B4gUKIuA4e8aSHCZA7UtLN%2FssoahauLX%2Bbn2DM4ghv%2BqF433uZkKgcoMGuc50RisgayX89hU7%2BdksHxSnogeAuoljTAd%2FSqnoep9c7XKP%2FGpwvj1iHL88pmuJdldxdSiwDn3AZHjy2PL137xx7dzqwVXxes7kP1cvKL1vBletlVOge7v5qcr0j1Kvcmyrv%2Fnbc8KcoFTDrVoXiWx4bCjmq%2Bhtc7n1OaXktUSH4o6%2BfCdlQrv%2FiLARY21Ns4CQIONjMwPGwh3jxrME4wyRUf6KUsmzLMUzNHCgkvYplOUxQ8pkxcx%2B4vT3EZXihKNk3mEbcWKJZeFIBcko%2BrTGEfn1P%2BaHFsjyVnhLZMxeh4UkVHeMNIJVosRAhmyoP0cPhEzIjsP3wKx6SB0OdK6R3Z9iEVAGpEodZM%2BoP3OyWVkFsBz2EN3Yf0SyIaAG4HBA0Yf2Qz8x%2BxXUZ7DylkEGrNCWVhANahxfUMuUGmmDv1dy7Ks%2BU6bmrE%2Brvzc4UY5IdgiwfUtHQBaP6pAw062NygY6pgFCdG7mh9iequgbzeMXcMhJzdO6jDYZsIuq%2Fv%2FP%2BUFnTKEXhydFyNZQU5wugK0nfgTZXxTkzrv%2BfuUps3jk28oyNKBK1VWaKaC%2F3RM4pm6OJEWvM0QbEduBFRDg1i6%2FGvhWTwA6dv5C1pLCJSS%2F6vT1L2T1DPY1uOJ%2BDmoYC8yXG0Ri2%2BxyqWtu2cwNj9zfL6yNjaGB%2FJtH9U8z44Cus6kUgShsPbJZ&X-Amz-Signature=13f1b1724992447d2e5acad9d57d53c7adfd91eb7ee5204f4f305297c61f5bfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

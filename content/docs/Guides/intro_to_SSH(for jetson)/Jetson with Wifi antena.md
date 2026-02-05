---
sys:
  pageId: "253da3bc-6297-8011-841f-f88fbe0b7d30"
  createdTime: "2025-08-18T10:37:00.000Z"
  lastEditedTime: "2025-08-19T10:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/Jetson with Wifi antena.md"
title: "Jetson with Wifi antena"
date: "2025-08-19T10:27:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 196
toc: false
icon: ""
---

## Jetson with tp-link AC600 antena

If your jetson does not come with a wifi card then you are able to buy a usb wifi antenna

> In Robomasters it is not allowed to have any WiFi antenna on the field so most teams buy something small that is easily removable right before we head to inspection.

[TP-Link AC600 USB WiFi Adapter](https://www.amazon.com/wireless-USB-WiFi-Adapter-PC/dp/B07P5PRK7J?crid=2A6KL18KI5SF3&dib=eyJ2IjoiMSJ9.Cpk9qEaP8FCv_AaXO1Xwmdj1GYqoa_EkhJ_amXLEabU7PLZMP8AzZEneLC-Q_nogRud0oO5wwc5VQh2Kqoq3H1Hdn97Su2NZg-V3jVWFKL5XL0lN7kGrMrWCY37kt6mFuCclHRHH5Rp3UA9D9gQYdBOUaSa3tI9rAB_biVS9DtI4c1LuYY-yQwoMmGm6ZVzHJPqlysQMd8U0TXJzxeWErZM9QvsEkeqeSMLB-9PStd8.ioFKhTTYaaA_uoO79flxMMDpEKAsdkgsyHzxQBjnf-o&dib_tag=se&keywords=tp%2Blink%2BAC%2B600&qid=1749570822&sprefix=tp%2Blink%2Bac%2B600%2Caps%2C119&sr=8-1&th=1):

Here are the [drivers for TP-Link AC600](https://github.com/lwfinger/rtw88#installation-using-dkms-)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPXNBM7%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCHwpL2tCxN3qZcSXg%2BmkkUFu48qp%2FIgaoGN14JZvznvACIQCx7z3TEqcUuZ%2FCIL1wT4MBChCFZBmmW63YEMdohpjp6Cr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMT56POWoC%2FUfGvGXbKtwDABzzpiYKDYpUlo8fVlXVWwICvK3eohSfkfAZ6jK5CquPQUkpZ4VjOBqWIMjzxO%2FZ%2Fw95xZz2Qz39irzG9%2BfgmwZdcMhM406Ap2qrgFv5DQILIonNX8xjqtWPKLjLrse7YMl4pT1lFe8AiUixtVmdMoJz7fjqhYdqFdw4HvFyARfflmfTv3oyDN1XEGKgivROZ0JwcIxKyuPuvfcW0ER05pqjrfJz0ixqAeIlcdA7JlyrWzqyRebUqO5K3VIl7gMkoM24G4t1W8UaT4yO3%2FpVgOE8%2FO5NhzRv1O4mmEjttGpVBfZFDBchCDPts7yDoHagJvTg2Rse%2BVxnPGqk72oLy6CnIVyzysi63ljjD7UkttHo6Aw1SZfjzsGIUPX%2B0PsEUFpdx6oPJUG46HR2n05vArp4gxiBPzkz%2B34xU1hgcC9AMupFTYkwH4K2oVKIlOylgIx%2Be0klA5kWMJe%2Ft%2Bt3VN4xGGvkoWsgkkLkLgvnNR7UegrvtJjYO%2F74nf9%2B4fM3l09nVsZ9dMxeedz7EGLc7Hj2JCubYO%2B8d485eO29KRfPByxqL4BqSi4%2BdxQPN64kcw4Tu%2BCYx8FXww6xtUhcsWfuZqL3Fgv%2Ff%2FcpUqqvcku5A%2BdcC0F6fHIdzqEw5c6PzAY6pgG3msssFKmQpDe6zfxvWC6rM6ek92CVCcmOT5lVGmgzfkisL06wro4o%2BYKinfGMDs%2BlQDfcNL1XuNfw1J0LbdRFradLA6ldxyhGgwY%2FzGToyzK3a8WCH%2BHVpX8khJzlHFKt9GyNcPys0sgKbsBqXjzO%2FG5zzbXEiBleaV5eYuxnreUUyDYRwMGtHMPWLyQrqMW4%2BVzIi1xZ9%2BaA5ZUMyGiHGZBtyGaE&X-Amz-Signature=dba7233c1d606c8340d900a7739ceb99806e7f38ba68b14c6d8a54889a843f3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX6PB2K4%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFnUmLDbprOFRzIW0rLO%2BfYFrYvLR2Z2qIPTxOFPmdX5AiEAojipQeWU9bxP1zA6KzRFHFihCt7GuKA422rynfjC3yUq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDJk0OW%2BFGqod2bFnASrcA0XNSpyERCih%2FvU4%2BckMSwhI56pTD7BTAERoJGWpTl2trLVlmRbn30t7qVnUKFFFbtv7hYOHp%2BPrH8pUp7OmLvRwXXa2qIkf1voaynlRrL8qOgwnmwM1jht7g4BicHRupWE654KWxw2VKFULF9iD9zjk%2FWMH8XKtmsxmYi%2BNJv2sfJTl%2FIMxVf%2BHRUefG80CMmVSIwF4yoKwr%2FE6TGyUCZXPRZHXiD21xAlEeJQevtDoLjcbxEZsfX4WRsqx0%2F6D4PM1%2FGVVwSQDDY1vDkGzD09xmi33qnde88MZDc04bPwZ2TD7Ysv8eoEOotwmZtzIQCGT2O%2B6xIc1cOLyJTKOap%2Fvxzfwh8cxfaR%2BgfKrVTSAmffVz4XVdi4tL5iHU1xJ4lvFBmu85jMXHD3CHhDPQ8BYQLv%2FsOg1xOFPLOzftqQh9gaBSvQmk7Jx%2F5s55NXtBBEqdMiWxUP8RkYQ4kr6QGBNFq8LC%2BWYVZfuJpmtS5AEkIcnM2%2Bld0ZYUSsSIuFvjhFtzaJ6vhCVcdhG1Z0xUUqwhbfo4MQSooSdQr27jvCEhu9mVNYivVzVjtqFyzecWX4cRKQYAZqnz2Op4guY6IMIMr8SeNhM6qGGJ4%2BtM%2BePCoQnqMdutwe%2BDjNpMOTfuMkGOqUBVDFrXecoyHT4xL4WNrHMD02jr%2Bq5hv8P01LEXbthR5GLmz1PDwCGAMpbmf8tKBpK1K%2Bjq1K4h2JWb95DypkF3CSTY5dMajbVoOsBTz6305RMB3O2Uka3Wbt8t7ScGxFVJLposAHZdfs0%2BP8mMWue8ohkHHajfhHxHlSiplcqUnZd6fUbshF9iMLZLj6A6mkmcnp97jW7H1IQz33PYalmGoCRCFuS&X-Amz-Signature=019228d6017af0233e6f48ae47c0e1f5343da5bf209f55f1514b480224f52c05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

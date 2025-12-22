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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCKKP5WN%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCuBIo0%2FFOxxAeE76lxq0ZhqVHEK15c1W6K%2BQ8%2FygaWLAIhAKQ73W6GtemzYP4HnCq8lgiI5xBSrDKe%2B5A8uBn33Pl2KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytPxSkVvNiag1NC7sq3APir9shC0sz7OC8DbWflua6Ywmqa2sxdSI63ibxl0RFIyhaNH650UWK%2FAk3dQRVHf3kzBr8%2Fi6RrHBjYBZ6wzzPvg9fTK68OVI5uIdgdI2xIWWbmrRqYj4InDsE0S2V%2F0b8gFZcKnTHJMAJzA8cYhTblHTZmjJ%2FbLYlFDmc3CPtKrquOTqp20TIKJIyRHeTx78pKvmoCTYFvY8dV1A0J8%2FPihyLr7uYarV3zL1fNpkVwUqi9u%2BsqzwspAmtukMubsJ96WCnO1cP2G%2Fm7VmcjoXIn4DWHAIASz62BdDCSFRUG2%2BoU0CFUbH2XZFmoIBVnlUkJEl3a0IvoGmq92dDYgtP6C2f8Dbcb6ZDyjgYhBv5TYY7cwWUKIi%2BKm5oBdkERotBynCpL9rbRZOUb%2FoBEQ1y8Yx%2FhZ4%2FpjF%2BiwduWt8P%2BKN6Mdaspj2uuC7BPeOW%2FYNiL3kiAdKmr6q3SDlAke0mmM1hoeD4c5%2B4Q5m5epXGLzx2YyBM27jIT9v54rthK%2FcXJed6UsHBZf3ek%2B4%2FIHGg9p%2BrO37C8mFa4iv2loIlTlTymBxa%2BDBEyCb4bKcnsKN%2F%2BbjL0FmAsq2VN92XGPCq2wjR2mIPDiJzrpRpOO7r0H44lHQAiqlyW39C3zCX%2BaHKBjqkAXy0B04RQoqkO%2F%2FLBJPfNyn3Vl2iXH%2BGdioCngCqfXUeZUz2ORuWgW%2FEz9u9IV%2Bf9XL%2BLPRt1e51LC6YUf7qR%2BGpJDrvslxRFeAA20exfbx6EtlmXTSTtKr0%2FTUt7Eca%2Fx%2Bv50Rpb%2Br6U%2B0IU8MW4zyyhUH0TZKEVkc1MWq4lorif1NO%2FFozNrtkpr6vEx4oLjW7oJxvaAG0CVo7Zg%2Bhl47VfU2O&X-Amz-Signature=e3490d7644b7349fa1b7d139a12ab055440f1061d7ed293698fd29c797522174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

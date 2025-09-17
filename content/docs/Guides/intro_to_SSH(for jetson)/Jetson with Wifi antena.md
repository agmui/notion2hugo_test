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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664625OOAA%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCTNytSdogECFOiDM%2F60e7Lq9swXT9fMo6bRJq4DDA%2BgAIgckminpTWhnkQoDuk4hVZkKe87ho6qWreyGCH8%2Buf68wqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJn%2FhpfkkB8RknO%2FqyrcA7Gmh0AB1G%2BIrbJfQj3aBh9ESm9xCrRb1WffqFi9vqXgc3CUrh7XHO2NZDiO8yRiIXSVsgjHMTTbirfFdNL1GKI%2FRTeWTh6G7wHUP4HgHpSJzxTylSdTH0g85L9RelVnknifePGix2186HbvNhEPImLaokJ9XaeIsks1B0BrM%2BVEn%2FkltEDz9ET%2FZjTPmV7RoFeVhQ3Gv2PWdbK6h%2F3%2Fa5cvJ4k9p6%2BJOISeum14BHzcW6AIW%2FyAYwKCSVftNndcCF0UPO5NM0o%2BUDauHB4ddFYLVMR3xmcH%2BG%2FRoFHvPGKWQITJivF3fkQRlXcshC37j4Qvhs240QV3nLtj5k6KhiUdWMbdaNOU%2BRRMfg3%2FAeMO5AW1dWibeQi3QN95SSWPW4LITmEHiBMS6L367AsC6dg%2F3FL%2BPM8mjhfJ25Gf3uun5pLtoR7QViHFG6wTU5URCusHCkGh7bbVnMoCzo0VLj0gwCb9axYaBhj3hyaaNAxiK7%2FEchUtDh1rHm6tjturFFuhhytUVrvJk98NSO2vSa6QuUr%2FpVU8gwStOOojvd7uKKPAqeQPQgz%2Fdm%2FPPX7u0KKt9WYowonLuYojCEfhoGWXzIFzFnZWR%2B%2BggKaFTIK4%2F664Ps7QivOCLL21MPHvp8YGOqUBW8HCgKIlzch9Z7QkBVn%2BbtvAQK8z9GV4%2BoOOJt2xkPu%2BWtwh4c8grQuDPGCnYvtTmxlSp%2FS3Ho5eCOMejUbgRN2eievmKQRpI1kDTprDQd5U9vkN4ShoXU6%2FzBKORhG9ATKI6DYTHTi5w8UWkTmTK6zqzlibcBUbmBYXmg0N5M%2FQCjJW1swKbZ%2BnjUYBJ2WcPVE5P8fhs47AR1xqlmQLyg%2BI0Y2k&X-Amz-Signature=9c5fb9855b85dce6e54ce98fc61823942694b9b5548f5f718baed63b1762d3a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

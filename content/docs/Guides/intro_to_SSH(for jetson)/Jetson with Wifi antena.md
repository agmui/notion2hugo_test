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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6I6XLJN%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHF3igWsvt7ZTW6B2vLCxE5zDA5bUzMZoZZJban5sMG0AiEA%2FwgzTteitTQsXcDzdhVQmOgtrL95oQK4HeqxlTAKZ7YqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhnbcdqkrGlbpuoCyrcA1djG1OnfKgHFaryxvXXxUXvB1GzUyVSRtj1Y8beoWW5YIUZF5Hfhs2Se2Y51YDTgTxT26Qq0%2FW%2FPrUUDPpPspBP8eRUvAbxTvDF5cE9NSb8OBkYwugFb%2FBGIKXr8tQNs%2F1w49lXoXl3eLHJ64gSI7lKhyBFuBNH9Yjxj8mEaOb6WSMzcuhYFp7l2jJ20bk4f8Gc3d7cEyx3DcocdM85OK2CJ0iERCqOO4KwkRIEQ7zoZXh27K%2FAg2n9fiKoM99yFnqfL7rkAGw7eLOCS%2FYwulI%2FMVht1B5CGKJEEpDFPTCY7cpa9rkC81W9osPG947RaSzEcisVR06%2BFzNiHhppKJZADVuVl8aTFeODD%2FSFJaop8X9dzWWZ3wGuQZtI6VGMOlSRseKWzbfX1Sx%2B0ZjMz58pfxvpqPdn0gw9TKYoeTef7NDOf8dDjuZVFbaqS7mVGr0MzziPa42YCEMRrdx%2FekG%2FJGGwox0UGAOzjKSKEArpSrWo8DUDbZwZmmnNjLY%2FxtTOZ6Enc08fB5YwMWFtv2VZSRO2c68EGlrzwuHg2n2Y5V3SnzG0n8wtWMxQGGOtnijrTD7KuzCAi3Z1QxhdZwim6fiqsoOfbCF7qerbmAk0s9IzAjD4m6J0Tt%2BkMJiWsNMGOqUB8j%2BeoJLk%2FjXdHYcQ74Jy8JKDF35pGNlcRC1K7KL8I30ZUuBMb9U%2B9hjKw%2FX1SbLFYU23jwQF38i0dF9Mgh0QFRwLDTCsUaMNstwCZdhTUara7FqBAYZlI638qMOHTiEIKqTCwAqgxOyxB684gOjBQbnUdY06TarlCJvEMSpNqN4A2pvnDQKkeCireWZy6bheOqLIkl1viTYxcxPD%2B51g8U2%2FLBU1&X-Amz-Signature=b01cf2220f16943a3229df234b3bac36a08a32d82db1071bf3098a3048248e96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

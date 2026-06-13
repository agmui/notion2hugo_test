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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YL5ISUO%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIDvDEgGi%2FAisYuz5FUOr5dQOle%2BmR%2FSpttz57Zlo4p5EAiEAiIuCVZ0VfLSxieXVN5iotPSvjSkNePhc7tyJaygrbD4q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDHjpdVdnmnVMWwRp%2FircAySfI3YyjELKxoOQjZQwg9hWiQTiBSADbkCZw7bluD%2FCwa07sPOrsgtAaS%2BszTvnGM20WYJA0mkIsHKtURXUk8NvqtYlfgHAR8itLqJLahVmuWnAZwJNLVE2bzPZ1iyR7Wmq0%2Bs4N2QKS4oxSQ2P%2FKSCEcqqKi9H6X%2Bxwiu8pUOw76%2FVjchog43odZYzzvjDFJT%2FteC9HS9KIY%2F7h5SZSk2zD93in2Kuf7K0NkgKco%2Bi%2BKfeZ4b%2F%2FTjq19I6eflj38hHepWunrPl94US%2Br%2B2QO0uX4btQegNFB3giV581yisXudaQJDNOPQflCOcNtuYoiLeEAZuMmBbxd7HlHbJL5HIP4SgUchlhY0c3dszVdzTP1h1PwANkcNVDwqIaDsAsXop1%2Fb83Wob%2Fo0%2Fom3zAO5Msh9eR2D4JTP%2BS9UqtN489mizqf3xP%2FRMGVrCoGNYkNruYhi%2FrHI8fNAsQD4MWWwhAXBe90EHBfUflX93IkZeJ%2F5Ld%2BuKBQLhUFsanCMdpZDoAsQVx0qpt0EMjLrczSV8ZHRBN7wcV%2BUA3mN%2BSVv0lWG750yUFu%2BGSK%2Bg%2FuYtF3daKTKVrxEcF73fjWx3%2FRAUKKXSMCvnleE92soQuoJhjvqIv6pBPt9BaHOCMKz6stEGOqUBLBMRWzmsOftJPZbFjhCIclaodkzNHpRNoKwYvo2fF05pu5QVeZTNIqiquhshfuzKXu7XjXoaoX975hvwy7GQAnFYQ7fLL9lRTPskj1Dj1tvFJZ661wXFJ95j8V2hd0BN%2BKtyHDZcWhTrkfnC6viRyTn0j6zOvfkpFSe2YVV7ZUGAEcS3gUHkkVPzBRM1vE6vhnZrBRR%2BHaF%2BMWT5u2hIV36TD0qd&X-Amz-Signature=3f13877658f122a1c4dfc3ba6a3cb36552ac431d914970dd923dcdd7b550be25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632NI3ZFM%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FAuEqwZVr4yqH81MlgdfGC%2BLADtmogoLO8MOlh0IBfgIgFQctlvmqOyNfFQm6JhsHB6KW%2B8FOxF%2BBbgQJxYMFWCwq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDEpRhv9fQK%2BDrvrdjircA4Wv822I95lI9FuBkOkd8P3Dici%2BO6Zs4iqzoxLyH8FWsg68C9WGoiw0QqeW8t7aCLz6Wpa7RFi3BhePhVafQjEA1b4gKyqgINt3Fn37%2BEmHEPfVTh5%2FxNVUboODxkyrT%2BjHWFUnJiTyzPnr2CfQM%2BffuJj%2BHE5IVq3awhNkrKomZzMx9AWiPUqlcFDP5Oa70mkZFRmV5Ax8QI78SbvKuoP36j3knZuS7c2csB5gvwUv1fkTFTMUozymNoVsXvoHsXEPNPhdnPnFX028RT3qS%2Bu9Qvhf%2BNK%2FCJcNi21rJcPzyPIg3mhHoOgYJi3MQP05aMM3gf2lOJRRz4fLPisMT6kJcL5MgF1RkRsnTsV076mBZs%2B4aKOg0W2PYgzmq5L0Xn8qW0KXH3jhwci%2B%2BxYTZ5wpR%2FCktHC09oxTKV4rkEf%2BT%2FAS%2FWCkI8gJMtJLTme4rewbAzcya%2FTofMeIwT7CKP%2FUGbpe1zDFKJgrs3aMBKRYCZfbWcBYdInsCKCGN6Mem6RHohY3QMkVcHBmKHouDk7LqxZ4NBA4N%2FVH6lcqnIe1upHRD96VV2HX%2Bg7Ct8jhiQS5dFJ2rC9tLwPbO3efBXCHWiYyOtHOba7lxDpjSJejqh0f2nL2B1aR8qkzMPfv2dMGOqUBliqzkdGfFyodxo7htqNsFuv8Vt9%2BIc19H8pA6vRSBX6D7uRJxM6D6KsvgsA4oIlKBYJ5kzEGpEdKORJtOHC3kaU%2FYyNJDgcUMed1qVGZJ2SAzf7Sg5Iosnver0PIqyLK8jwdGWKTRDjoMLvrcR3Lo8Sh6kO5dY81tqeyoCSMAvDDs0mD0TVYuEqDRrp3d4dLeAmL2OCjWUC50Ojr4XjOhfr9EyOu&X-Amz-Signature=eee7d4d3592a436a595ad7084db153d18742f32f05ca67a94c030af54dc292d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

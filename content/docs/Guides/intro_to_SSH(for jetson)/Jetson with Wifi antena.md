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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643SM42WR%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdNp762qi9oaaj0ykw0kDPbwUZ8EvEXGCi8nq3gcXgOgIhAOHWR%2FlsZNdhQNkBQUQbg2BI3U2R%2BqmsK0PoGGC2KzovKv8DCFIQABoMNjM3NDIzMTgzODA1IgyfTwKo%2B64JRkqB%2F8wq3APJklhCsO%2FUcAGP3ptigZjfcgviBST%2BaZcWQteXVxVHX75PBlvaj411c1Mzv5QzEcXXzGElTgMocDjh3ShB%2Fv3GAbt5n8d9%2FLbC9zS1QjRQSSCW2lO120bwsKhoW9fsjrkEo6GH4Dz5oayjzoi7ZEeUDecigFtx0OY9nJ8Cf%2FP4DWz7%2BnvmQnQAn5b0%2F90UofEEW04XXDNqLxlpIa2HQAHyWuKSuil%2FLQhfvsa9L3PfBReQybnwxT%2Bh4KRu8ih83OBO6roFUA2hOlZj8%2B1Vbe0RhQ4fuPonC32BPwqTHv9sIRQdaoAr0ZNavDkYIDVXAPSoeDbEuxrhpSeMOcDH%2F519LjtSg%2BhknS6pnNzKu%2F4YkZf7cXEbcEde0N4Ck03oVqcBfa%2F0umbrZErtzbRswim9OU8%2B%2F6mTeRBaq76N7Nk4KwQUmG1STHH7yP71wr641tXqcHUFs%2BL6%2FFH6O%2B57eNhOnobffQll71y2HB%2FhdcDSBIvd2iYshxUsxHiNm%2FiVZMWdE0%2BZkK7GDbdRYC%2F5q2RpUyBagKYhY7i0Qwo5Im%2FX1r8FDHv2Fh2at0cIIYhIlXbMtBa5R6KJvxCBSZSsEaPOZaTrGek8znz4EU14KmW3CfoJBuOM9SXhrvdbKDCBiKDIBjqkAasYLzD7gy6F5tBoiFhT4dYYFfdc6ts8Vy5Vy4CE9VpIt%2B7artkIoGhIk1mG3FCWwiObD4cJyQxcrShYlE%2B0FMztsQz7XkXQ%2FryMruFdHu9GunB2ZkqcTSRM6ve5y7zcldJywIV4N6bna5%2F0nBetqPxe8Pa4p34qQde9btRO9qV38cYqdnCVrNpgeN%2FJomgB8x7lRlgsw%2FglS0avyOTNqs93Pacp&X-Amz-Signature=004a32ce4561f62eafcf91b74531a33f4ee0221aa54bac14b0ab6e61bc5e1120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

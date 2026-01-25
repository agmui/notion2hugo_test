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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUTHKMVS%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCqBZAtK0uYyPNqUUqp8yrH9%2BZV86MulHptbK5h3vIMAAIgVl42OKU77R3wadLP%2BWN%2B5HtjdC46psZMckHcRiZiEn4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAu%2FhqLfaKO%2FJ6IgfSrcA3HLu20kns7Eqholx4ZFmSEqArHCgOqK8J6eyYVDLOhj6eZhPEgM2PJ0B2Qds%2FOLDm9Hq65zPT2RXTMplGKZ%2BjdwzymodXTjrDNoD2TrF43MJnn5kKdRzvxbHr3AavYFv92QTbuTKP8YtDCUIPKJw3mAzEl8fOooiHpBxdzrFmbA9lUm84PcLIjgw1GD1Qoqv%2BzK0xo%2FmjxYifZjd5lqHHsMfKeS21VXtDoFAo8a4AFT68ksKh5MRJvupXXInRixfs27TgdYmpNP1KUOijIUBbv9CHLJBInYNSan%2B2Y8sUjghZ8UjWqQVYz3bzqy5D6nGskyjQoypZ84W7FGagECQCfFq8FPJzo8i%2Fq%2F%2BYCTJYzWdgjQ7V7gXL0EFygreYsIOr5xQoUD6xyObOvetXdhWwSfz9Ho3xbTYYtTXFdkpDZpo6ZgUFv83KXHBY9%2BhmzYIBW0YM4E0q0otR7a0so%2FiAUBVy3ZtCX4FtvBWksFzARUlzDx2VtjTqHg8cQ2tz1vQdNwNY35J4KuvirTnXwhxebo8JC2H5jz%2FAcx9SxnhkvR4UClaCL%2B%2Fi1XLSwsHo60VbSGtbXjaGj%2BNm9%2BZdJOpFDI66O2P1jV434j6qQ7Tbr8sa%2FJN70fAqmSTXDNMOXu1csGOqUBEBPTVJcqPtWSiiIYXjDpJZrSjnVzfstCOQzLs6Fugz5WOORTGS1Cr5BE%2F10A3TUNeEwg9U7un0UweulUP3%2B8rvR30wRdibJCa2uzcE3CZg8c9aFF2QXSIipyHIXZDa114twYEkbSJXqnRDHIEwT%2FWY2A%2B7zFeFKpcECWCY0CctvqVvE0PMsC0QkgrI9ydVWshnxe%2FO1Md8TYXQovf53wt6gScaaZ&X-Amz-Signature=4b0d530898f5ee8f4fba846bcf35af4d3de8e7b1eab52bcc00cf8120e514ef39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZOVSBO2%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIGzk3fJftnNAdYdvQtzrhojMEGhftrHD3O7w1AmDiYiRAiEArCa%2BWCbAVPV7SJN6OyhvCrFAsqTqfzrEelKU91GfYBkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdI786clhsdOSTw5yrcA4eEvab6Qtmw%2BiTy8VqeHt4PRLi2GGMs52lQVjd0JVQfbWyTkjXc0FNz7Wgrhz9PNCtU4Oj9dEDkNl2ZZQQt4HK45ZgcyRXVt8%2FvaFgurBjHmR93%2Bv1j0a2HB8XAgOYGyM%2Bq%2B4ogzlbXbAFLAOpnQnfljeIF2encbTi1EGlb857x24J133iarQWsf2p%2FBewXGZqpu0YPVnUTrW2v0CY46iyy6f6bISQ18b1cFQsjOoZrF0%2BrBWzRvAr%2BJmVJ7oaxvU%2FhEOVTfnk6XK0mMkAKx6t%2Fu1VjnIm4Ih4BLoUnOAtH9I2fKyaLpJCjfBiK1LNLjt4wcajwL5%2F75frhnN%2FP4tNbhUPF2pLzCQSymyrmCmQOnp3n16Ypxp1WqeXBQjxbb9mX84V7QaC3prxtaEKlb9B%2FUbm7S9qfQmjpQk2P6oRAB%2B%2BYqGd9EZKqBiSNBhoLzJfP7wUwJi33p4M8d%2BR4laLCJYR1yY3sosLw4lN18W6bDhEyLYV2HnDjlfqir9Lho9MyO4R2CbNNmsXDxA3dS8nIDKZaoBSb5yp8V6l8FLolEf6U%2FS%2FDxxGtRJSMyEel3GiZBx%2Bb0YG0klCX2H%2FyC9Yte%2FlTiKLQpSJxOoyXgTqs1HB4pILBdRCfdezJMPuhl9IGOqUBk525QwPp0HZI7W8Mp1sXcHHRf6J8eSHj3pq1IravV%2BYDiyzSYRekiFH3ARJPAONxS2yItFxcngmjw%2FZdep7eKwIBQ%2F6otz9gVcaBzRPABEx4jT1Ht3h7KCZLQVP0cxoSLCJyM19mCyyDl1xpdfKzu3TdidhVRXuBuISQ5N337SSFqck3%2Fd7ad1BskYw4fulvum22b%2BY4pNt248%2BGZBpyz6NqLbVm&X-Amz-Signature=cde35e22d44df8df3823ddd101707f47abe009f516569271ca795f8864a673ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV7HLCU7%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXpKb331COn1OD3CeKcoavavalvjdsHbQ2HVJVXR5XXQIgCmu7yQCdlQczKtQ3yPzThdlzM9x75T%2BrkwBzC%2FwS2CEqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBLRP55tivyrdsnHCrcA4ezFzgQHgi44YU122EsPzFtT2E1X4Emi4Pk6N5AV7m2Th7jVNoitp9Pbvc3rnawiVZCVKaQLC6DhAuHLiIl0TCXUpvOOfiTdl4S7P%2BxCTPZdiu514ozV4BHTSvIxnbwe9IDgcIbl3eK%2FEyYZL1v8tlid0y7tHNc9Y77BGd7bczi43iKepNfIkcuFCxm3B%2Bq1ERr854yUZ85l8gtIH5b7oakga1WBaWgqu0PbgjBXe52cUGznw3oDhDx7hL4rzFHWVdUTtKagQ7e6tV9Gdr1VZRejcQ4qUPEoYLCT3vVjzRL6NXJ2c7Yb9euZZQ7Yd0Mtrv8ycNfNfq5Jj0HQJ8KkWVfXdZ6cHWOYYC%2F6hXq2IT%2FT7LubNNnQQLwtpNoFIAoaBi1TcJxHt%2F6rTlOsrB85ut100kUPAPNSIwoWmTVuDTaUXSHXSFzY96P1%2F3pgdH7GcuN8b9Ok9%2BniDb8PSLlurR1Bkh5Vs4outTGvb67WyDhc4qOibAMlr9CghyXICKUKU044EX0uQRMvYka5a%2BnNeP84STETeoynUkTzNqrOhSuUSRIIZLv5Iz1QrMdIWIKRhWYMwSIvkxN%2FhhdtZenm%2FCL9Op8Bay4KWjiRfKzu%2BvDpvSJNLpqPorDCQ9wMKrIh84GOqUB4edics7poKKRujnIphaPpymTuwsgvec%2BL31TOLw2pK51YGvaZX1elZEuvREXT6naLrgbt2KxgQhND1MLE8qkHE2RflUbh1YZPverEgR%2FnxCv2no8aC58LTDyrC3UWvlMqzTboN3KXplbQR05vLrMoRnoce%2BJ5PHLEcbO6en4Y%2BMxZHTUKFJ%2BbHJWR7dBQxgQz3zv%2Bh9vmnDLo1%2BzqUo3vSqjqQjs&X-Amz-Signature=e818a1c73d4ca2eff6d2d9e72dcccbd15eeb935e2c6398b74753e185d6f7093f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHEAW4X6%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQD1LMxJUVmOq9oTeTrng5gJIzoRmixs31Hv39JiHe4AiAdy23z8kWp2WqJwQ%2FrbnDjXV0UN5UeICeKEPDldAYqZyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLvf4%2BR2Xn%2F20QuvXKtwD1uFEAbA1NQtAeZ2gOpwnTFNteqLNraKIutE3OMRk%2B%2FTwLdUDGC9LuImTjXQcqXJ5ZWtXGv%2F64tipbr%2Fa7u8IBR%2FHAz26ottB1UUhMZJeyX4futEwpi2IFIfGT2b4KL%2F%2BkeTOGCZg3ZSxwfZnvbZivPEOacFmEzHZlErq768amA534c67MEoPrMp5GLsIcbkB%2BLQqj4RsvdXyTpLC6WOEfPT9KsbMWtjjX3xOJzF8bYa1txFg6KYxgW%2FDuMxcZtcQp27GkWMMEJvzqh2XRq%2F0fvcRe8bOZ8AzBG%2F3%2BqN%2FAWn0c1906e6wyy5iP16WqFKNoRO93neHew6IOBtJ13FQffvMuaDUhvCHQTitiNWuw32wjeylQfIx8Lefjp51SNVAFFDrj2%2FYQW3S1n2f%2BIcMVyKG%2B8F%2B4GXuEsiItxYrRB20a54Lpan94c3jqMKClePl1k1xVJpkuEAqy3Kwl6uzVUtkFaY6ZWV278Gi4jcee24lvJPuAUhc5a%2BQhymhuD9yhawOTFDl578uLSe01VFPgIgvsABOyAk%2Bgd9fS8eAlglXPt1MaSggwVopx4%2F0oe71hFwAXhGRJEwAJsJcYwtr5VZUPufBAjuZQDWDZaFCP7nOQi1lOzZg9R%2B%2BWXUwjJ7OxQY6pgHnxfYd158Q8AtGNSFy1hYEZZ3d5d4GEWSG2BbGAB2ht2jlMV3KQY3AWHEIiBqjgiYMi35TPtm11ZPRS4Fzj7Q17lKxsg5AR3KHzoMGFgA78SbYvuQ%2FhoO0N5uH8ie%2Firx4HE2a%2F6kY7uvnLtOaAG2dDQTnePcbzWLN7RhedgflcFa%2FuybG7wbMqgR1fEoqfRYDvVD%2BrKSboYHCz%2Blgng3xMqKJDuFZ&X-Amz-Signature=cd919e8c1bb453dd47826092f050782eda6f4fe7b82f66082f3f10392cb2d8f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

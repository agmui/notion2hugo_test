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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKC7ZR67%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkCnhCuIRX53%2BF08vVQv35IH%2BOW61VVkllH4%2FEPwuuDAIgZ4k41FUETC80BUg0qQFp3TOtwev9Xr7yuxrsGN1323Mq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDI5Y7xOAkAbrunv6oCrcAz1CaWcH80iS7i5tYxQUnehsUoIUWKfsmmxW2pdXLGWc1NjfZzKEm82SXg6w8jY5SZVPnu9IE3hJSiwqYcAxEH3a0qKJ%2FQrGWHo%2FP3q1ta8XmR5rJJVsQ5LuczamHV2yav%2BThogPn%2B1VZDp%2Bs0W3KDP0Dk6r%2Begw3iHFRSvrofd0wXx8jWBPRd%2F3%2B3rm3CwHI3wMCOn4NV6RMEBihCJQVZLp28%2Fm%2BZWnGW8et3ZuAeH2BaKULRN5jAKRA%2B1p5eYBTIYfXI66of%2FOOJb22R7xFlx3ylLa1a4VmRe8Ly47apyfQlJ%2BACI7ruKVnaGjiFdEWT7iuQueQGhiWXLtUGUGgZURDt6HLyOW1Cuc1MFpQHtvcrgdmmkDCOcD6blB6nCPkAuk53Ccnw%2FLyj7iDHWK5NM%2FS1BammCWEvnDx1o4E3GKN31DPSCbCnudRueZYN7eVdRtRM7g6yMwgtynu2q1VkELQJw8uVr04bwyvUBM7l%2Fihm0LytVAaHsAfGKeMcJx8fSnsf79z7UTbAa84KRdrKds7EvgDSgUQCnAjwqZT3EkragzuAEbtnCguMmcMoLEQ8UgU%2B2SB8PxAkkFjvCwAdP9fi%2FJE7t7M%2FBONx0CFQwtZlUYIa5Fa36v%2BZexMI2n5tIGOqUB2n2nRIPSmTYyTd3WfsmlI%2BNRwDSexw6LAIGobRkVJP1CLln2izkw54pNrGXaikG9p%2FX76VpL6SjEvY8XK1EuxDsiPe9LawjqfJfZKqXMt2TFju7uUXSDRbBYj8k0qt3LJ7tPI%2Br1W6xEPMa7cNhRywTMFx1QifZl56qNEUNsEURsonCUm8eEk4qAkaoIMoKzWu3%2FX9SwAolX8rYRpkZoY9CFOhaf&X-Amz-Signature=c71da1b4ef7bc12081bc6715a28dd20712e6d8fa2b57bbc83072dc1d066570fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TA7TOB4%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF8R51EzkB4EcDVaMOpQZkpqD5b2w3Sg%2FZI3WLqqbLqAIgeDIjcSmzouH1x75VtNOd3tSbjyXoOEe1GS5aEJuSDKIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwNDtWHk2CcmqKgmircAyL9XzNNCbjTy7TC5aEe7OVqL0ieQFW9HJbU8KW%2FRZYXib0j4y7Hht62gr09ynpExZSaJV%2Fh18%2Fy%2FPxrbYm1PJXj0TP208fCsDbOgWbydFtwpYzOWbkC%2Fig%2FqdTsZ6sdwAnNUoSMRt6J%2FUriNEkdOzVFylTknWyTFKff8jgf%2B1gDdF5IQWbDzeokTyUPP0TkOFiDdiWpVTjjVg8FZUf%2FhsMjuD4E2C%2FpUULdeT%2Be9FOKoQPjWEi6m4Scq%2BWoPGeVoMzwXLZnjTuV1r62iMbnxR%2F1zTM5qc9DxgtrhNI9ZfsQL2EN6qkP5PGqLsQGCQjJVIxF%2B2EQk8texF%2FVmhNd5WjVezi%2BaV%2B4nKoc6BroVWnD4zNCBBWvlOzdClZx2wOvyk2jfk1md81IwckIoCW1wc%2BitwCqgSAj1C9al5gHE6FZtr657ALWGRHUXkbYp6ZH5p0su6oUrf55edTvsHTJ4imBk6yN%2FDAV8ZQsMgiV9k7Qu70r44YKOnMBmzL37kATHpitEdxZ37bm3r%2Fr0UzIyJ8TuUKKxjpGMAsSJtv2Bn7RlvL89%2F%2BZjq%2FK9prE2Yf%2BY1UW0DAPwjvgtEx1aTqeW1oVe5qvpcPSwVrAhgsxqvBhe84Y7oEm4j%2BKiApnMLD5lcUGOqUBE3Oul2NTB%2BzCbULvchuT9QHAuOJtu4YEBegeQxrrcd5Wm%2BpNftvgI%2BO4NSiQlnfPbdxLW3ZiGPKMy0jnLKPF72ofVNeo4gNYe%2Bi6YF6u2uCBwJeXbvK3C3audXKmfy6R%2BheJRNBG1kfmw5QXMfmkkDA30mKtVPrJ832wvkoAv0BkdWvI0EAdn1pUU%2F%2F0V1uJf3bwss%2FwgzyxvWRDvKUfRxDWXfeW&X-Amz-Signature=c3590aea9acac129511015f53994185978d5e23e26751c9f44c21dce26ae4ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

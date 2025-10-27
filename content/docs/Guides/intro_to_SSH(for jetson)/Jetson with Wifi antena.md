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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA2QT22I%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6dWe9PN2G%2FQqDyjIFG0Zn8mEE46KC%2FaK262oDtVv0KAiEAgCK9%2F%2FO1aMk%2BUKzKQuJwDSL%2BMfoZCdMpdfX5i9OSFwwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGvGM89o9sQcTPcQyrcA5iXy5%2BN2%2BCJuo3LKC99IUb7yaq4%2F8r97%2BL59N3dMgGxhNYMKMRzRFA26ni2ZvmB0Ok5KpI9UBAaUPBptEJGNcLE93D3ZsUoYMsrgE%2BTLOiMV4SVKwEILvwuOXqCyYWjMrl1wJ1UeuGWDV9%2F4rWHDvzAsf%2B8Zd5oUks8a3yEgkhfcqP1IDIfh5QD1TxNhqkRyi308b%2F0BjrKQDcq9Z5WK4Ykhne7ALevclaYJvCjwrFRDKNzdFHz3laROKhIuq8sqFCYf%2FPAfzJd05Ij5MqfKswGpO4MwfJT9H0FaUPAAKJqjHdwG8Ba5fnz2R5t1lwh5qqUtC1ZY55T7JFNtl7jOCeuLQKo9vX276tD0XIPp3S6yNpQlgA%2FSlbR9HAkvjakTfFYNg5zGfZPFhkU9PxA6ZpWbuzwNA3i3P9VevUG5imI5aYORHfZbjaITLI06XnrX0tCI0ehmPVmA%2B3h6PrQuCi6Qds8MnPfClUHErlZiNQBPhhVSHzq53jOoZ%2B6MbxU72EQGGET6DUwg%2BZEwSqUKdjMKqPZuthmC%2BPRs2M70K9FVyN5TJKkKSD4GQ6MSV1mlCEq19MaR0%2Bnmtup14HtvmeoEnKxmqUidq2oZZ%2FnfRLTnhM1objGTza5PTznMNeP%2B8cGOqUBNZrFe3w2r%2B10GHiYIzhLxYeQNEz8C%2BwxWjRkatRm9sf5Gx9CEZcDpFB3cMVCdSDsgbjbYxMpfHwlec3QhlmukkjQv7%2ByVH7cdvZmtRY6hUsf62JXiPkaWJ3YlwM0kERePMtoDCkMrgs1MUZ4ZJz8buYCWlUhtUjgQv71C5KryygAvv22LeB2Hh45lxEeiUfD1IT60bKFx6hzzHM9g4BxrRPQBtUK&X-Amz-Signature=0e67bfb5f9da58004f7c5f9dd374d7fefc2ca5a720337a514528419922a0a431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

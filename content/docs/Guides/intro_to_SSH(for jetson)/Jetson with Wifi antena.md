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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLS3TBD%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZjxnfsQhwVob3kht7FAntHCkOzYcqhhMLmA8CiBfYZAiEAyyzNPMV7mAisZ6F6s2PCKF5exMehP5XcsoMqQKZwneYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1fwWVF0bA5wE9hnCrcA03wM6x2tHhVfNWZqaQte7Q7UjqKqz16xuo%2BB%2BbjhSA1Bj0nWT7jVlf3xOeFMu%2BglRfwbwjTdBemZ8BOXBzycLQvKRSfSeLhzl5Wc43RGj%2F0aTWV3o%2B9q9C%2FaUUshvkFYexixTnDKv6kyVwyuWGo1iiTIpA2HfchJQwct3kxYykc9Y6zg0fM8bGULEaZkA%2FvDgBmFeqslkE0pCLiRUnxmGLupIKPD4E3R%2BH5TytG9NWL3ERPREOJNFbmDJe%2FlYMl%2FhrupnSk9%2FOoWopoVFkFRYopJcrQ%2FSIVn3mPFYXLtQKlIUdxXEw5urpZfxEpLdt8KvrnKqJpfBbC%2FI1LL08KMRSIXVdQt2bBio211NSnGyLPeobllYPUJ8BtiPbs89z9NDXXjlk2kyxMUmUgmhxruI4jgNjaW0Lr9czUrp%2BEnL6Zej6UogkIyn8WUF298h9YAoaF0CQ4C2Y451jyBDG495IMbFE%2FS6kWMV27YDDGYmrkoCKmYJ3HUSXP0bJvBVyPUq8zvQqiCY8QUJx8wEGF1DT7hnZcVUUvLlP4fnNIDkPWvgDKQFaJEThbbP2nJu3X2We%2Bvbf%2BJOl3UFnvnQsj8LrejsmqmbScEP4hKr%2FoHU36rBSVyGhr8q3o9VJzMKCegtIGOqUBf49rNyBhRqHRvZ%2BG8EkscdIGII4uiDkWDe0t6altw485VfNBGUaoAPirZB7B0dRnGtdaDuu0%2FNduMKNOFIaqt2Bo9Uj%2BNeMS%2FjydYC7lkCEcTl06t9q7nWG4C%2FqkaQhGoLMiZp6Sm69YqI2e49PqlspveI%2FZHgOk3HWwTR3qVbL78fbpKOMC9Nkd417%2BOKr0KvNLZBGMDPthMRBoPzQr55sQ35cL&X-Amz-Signature=10c5549474e4f9af40cdb4963ec4c8aa8c2c3b261c2c07b08517083f70970c6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

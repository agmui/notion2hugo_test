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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KUWOO26%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIbtdJPUUoLrMo0vzGf3aSfQREigLQwVb5JOS5%2BH8%2BZAiBUpeSByXMFwQdyDIANchC7yQKU1DUHuWAXGzia2Eb4ESr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM5ZFsgXJu1JAA762QKtwDCQsKVO7Vz1vNQgzBdv5qWjoJnvbuQ4OmdwhnfB5VqGQ5oBQh%2FfC3E2DKG0y3NYWTqEgC5L416BpxigX%2FVMalYUh8YqCz0r2Lxe7BzcWrgdh8RWh0S1zPzTyJzupP9OlPQOhx1u6UvyYSHyqvo07%2BPip3%2B0ks6OMI7JZNSrpBLQA04b7TS%2BHDqLsCW%2BYhRkd6jQc9pwfAx9llxDNvFzlJUTnnGIyK3D1QyrRM1%2BKX1vhKblDPOgyazjnBU%2Fo9wWSw0YyxkGlmfHI%2FSoyhrz5o1Yno34bnvvckuICA4ivN%2BuUBmw8ITdKGaKcFYAsPkR4FbiZm8INv%2BPUnts7OjaGRfc2IfNPbnBdMF1j5UrLziUYAvu%2F03gc3xER7mkGWwsLAWLTIIITfr1QKPCpFNqTQ%2B8R4d%2B4qMvTBdQ9LE0vayohLFoG6gVvGqi9Cz7sT%2Fp2Aam1qTFTWGBKGtlW10qNdK6c5zHNraVLZ9S4uPvf6PcnQAQfjpLjV5lCJRV95ey6xM6RBY3JmdJOsI7EnvHjG63J6hCAp2i0m3lmTPJeVunOqN%2B7i6t7HI0x6RZIVp%2BvhHnjGXx2UKF81cmUKSm5O0RbFlv3X3TQpLn5Wwf7S0wtOPjf2gz%2FlqTC3fUowj%2BqfzAY6pgHZcameAEWej6pKSgp%2FLEMOWTfQ0KtqQyasqJVbZNsybOgjBul%2FpJFAKuYTZqd9sYVQuUnrMTNpNNt6L0yAC6meL5GBkMOoIIIGbiBUDegf4mpcIn5xKzybehqoZgsen9sck5SvWFsvwC6DKuXMjJUASqZhIyjm0ySy3fvC5z5zHFm4hdxVUzV0i%2BBRCqnnTq57AM%2FJ7WS79UtGWDHDaO0cc%2Fl6SrX0&X-Amz-Signature=95aa8bd41a8dd51bdfbcf0fa65553daa8952ea58c48b1d552b64d8cd141f1002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

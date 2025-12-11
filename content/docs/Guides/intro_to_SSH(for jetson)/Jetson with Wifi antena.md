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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WGASWQ4%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIGED4tMhnQfaGCdWJP5gTvsIw4V2tjz%2F7xkXOlk312d6AiEA5tqg9xytURPT0PHLvfULYWQBOQcWMEFYCMPzKMPAQBEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtrKp1dzBU7PQ2HFircA%2FNjQT%2FGxM3gNbYlP%2F4P9ITs%2F1rPp0KXmGul%2BIHN5Xhxn7TAvo2PY4mvaaD3MJiwXBFXYkJsIpMiSmz9dkYX6%2BtT7Zw02HWzUQBoir4rwN%2FnJsoG4eLVmLlOIrNpMbLI82AJKAMDwOYzExSXau2IStkv1q2I1n1cwa66FwkRLjDP8c%2FKlABZE%2FbwkeWAyoWd7VTV%2Bq32fHzRyHGC6PfDFc5l0tqbAs8JDfBtSE387Y8ZuVL%2BgkWEp3Anktylnoffq8cjz4EEXt%2BCxJe%2FRdWPTF53r3Rh9phi1CbSxZbRdSjHUxvIYS769coe%2FnnlIDknQ%2BaAdRKIg%2Bo1bES5Y%2Fq0X6JyBax1MvsKGlnHFlcZi2AqJaZAsbsz5IQOcCJbqaSh7%2F7Yo70rChGhp8QllIUz5KGFog7z07sWMeRPcCxt8WTzUryi97wKvswYDleoOhLbDKkiyyGIhrh6d8TAnYPzJQCqBqv7Hz1o1bqiS5Cggd5io8VHSHEq%2FodUdX3GzShabCE0Y9szTuutJtvahKNV0UIwwWYv1RLInPxWNiMK7vYmaivQ%2BdwmTSbc09BqusrsYqOc46NghM0sToX%2FWBQWAlN2Z0zdbIqu91EYu67E5MtTkHzBd0eQ4GmI4kgAMNC06MkGOqUB5A9rtPKWbYadBnrQnK9povieszqZ8iSVXyH8ZMXet8tXt%2BDvwztDTGh0WDziFp12PIU%2FperObSnTjDZQZRNWP2ujPfadkKe7Frtt5UjB7l147efDx3zNOyCa6A9zDABRFCPfo7PnW0aWEm9C1TViAhNUw%2FK%2B3j16R4Oe4HMRP5sUoIeH7eXk4QDUPy%2BzCyBOVuZTyKFFKhX4cpVe5bUA0hxY1jR8&X-Amz-Signature=7fabe86c2135e9143caa29159c6dc0ffd8ad7377abd263acd4f18e423f1e3717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

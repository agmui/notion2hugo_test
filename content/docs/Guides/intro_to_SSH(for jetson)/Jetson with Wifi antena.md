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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FAZRPRO%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Fu%2FIVSsM6dJBi4A%2F7hlIFukfmGt4bKAciXJ8wBqUrRQIhAN4Tl42nHZ3S3qRoDDrXogyL3DEy%2B%2FhCqvGKMxAzfKMuKv8DCHsQABoMNjM3NDIzMTgzODA1IgzWo7Fjk15V8aYBk4Aq3ANXAamsUT6JzJG6S6Io2JQ4tjqC3twOdMf3PEpEbkoetPBn%2BjaZifVXX%2F2weDSocWha3LXQ3vA7Dj6kXe%2F0u6wxTcyrjzRwMIYPYh7HagUHbTiLJW4aH6SjbUgGbE0Gitw%2B%2FHBSGEi4ZgM%2F%2BfTvOUOf2ZnZ26v0inHdzBIo6EKHjwyALfXlqbDs943Lg2IrxL%2FJQkv8zk6TUL8mP8efvJcpR9I%2BTp6VSEFe5M9W7FGWy9Z9IvsMz3frcW50kzZRb7%2BLPNiA%2BKd393gt1s7COQ0NjW5zFVQsKh5wytkZC2o%2Bnmr8jDfuZsWTVZs4e7b%2BNc%2FHEI0ctFiONUVDOm%2FVjJhJxEHSNTQsFfagjsk%2BKvGi%2FN7B%2FVH3qEUS%2BhKLvTWF63UmWXCpfVoLnUXxErrwDdMD2mzLqKw%2FZ6wbVV2J4O37K8cYEhwUP177u84YaRb4zKjWY1h%2BWpqQBwWX30BI96G%2BVTTUb9diXwOWiVBn5GKexRb3kp3NsIIQppOpENHwQVj%2BRT8s4IgL5dnmkBaEsfpCA8aUvBmXm4e0W2kiesc67hUHUK%2F5TTt279KhrOjVpCWkbGrCZxtaWq70sLgzXoki9wAqme61DZw3XoUgRifvI7Fg8DgGaiTZHc8ZijDc9erLBjqkAcwLWCC8Pu4ZxVP7jTuanXnsCjOsjGibZCYSS%2F0Ml4rM6bVK7xLVrkQ69mjiMcwwU94fKOdlLytHC8GtZW44%2BZNzWdt67oXBrZ9Ck09rkghBvbO9WgrnBAK9wfzrd07YE3vv8E0XAYPT52MNFJClpTEdMrTVqKZCxicaFvHfmFGAEo5rvY4xtcU6YTUyFG34tiYqYA0mL68XIxTw%2F%2FYn%2FN7ZFFo8&X-Amz-Signature=6f1b36e1c6ffd4657853dbb098b4539c6841cc75948d741bb5a33c12887b7007&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

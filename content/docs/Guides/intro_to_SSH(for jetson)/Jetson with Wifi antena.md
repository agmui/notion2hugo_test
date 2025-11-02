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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHPFXA7U%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFRB%2By%2FItJkdAdz8gwX%2BWuIC1LYuiq2vVSpSFP9cN6psAiEAgbEbv3q%2FVBdO6tcRKzEXsn6X2RkhFhRz8OQzOSDK0rIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOiulbFTchzd2umsACrcA%2FSNFT2ylyRYVrMyfITYRvu%2FMxMSE4T5oCBoKaaZIHNiGd0EEidMF2nnve1f6u9NWjyGjmnJrX1O%2BPMZLC1b6l%2BcdP10t7RPO%2BzEJTT0CawxgEZvh1fKuo4s1p6kg51SG4jztSJR%2BHmsWffPriRW0iVZJ9TFjKkweCwb%2Fg9yhipa2ZjmxpX8j4iktha4RqHIs125mJmGBRtEO7as9fG3jedGjSjrhRUSxsH1c%2F%2BbZKW4Y5oSPfGNuBW0u%2BGDaTkcqvNhroTWtzYc%2BXDqUF0vTaOUxqBFzEvgAS9Ad4w4hU%2FHTS9SA15G7EA9WR2tQ17Lc3YgKoQYgPIFbGJHNrDi7HM%2BhCmFsBjxv12Ne7KWL3wscBkYhg4UkO4vyQj%2BykuE89bSpCK%2F7eVfHwsNMOEmQBXlhWiOtQyh7luJcYab6C7mAS4u1cZgNtBVMZD6HWxauN%2FdPUS%2FdsUXJTLz6AVl5E6EIZ6ohCCp5S3FNiCzNLADa61ElVEkUeqzpDbGuND0A7iFUFkU0GnpfgLFi5kQTCC%2FrsEQ3SZ%2FBJ3GyTy0KacjgMKwT9t%2BAfjfiWF6JzrFm1Q7Z0gjlavtxgq88iAb8DAe6xOKZt2r2iXQA7fFlOflgm%2Bmi9ZYxYU33oiZMOLnmsgGOqUBU7deJLdYOlJcC09uJiw20WvMIyhrKVKRqngBsgwgSqrcHXRPv4ODGkZtN58AxisITjPXGzTmmUvh8xglxrjKib346uiXWjShZAgglFFjyYBwlB0jYDsMlABTiNDbcWIX%2FUC5Tv0Aa4Ke79W8LFpbGUq8ULSP9MAzALK5foHeDZQBy386MNRAiV6MGA6ilESXciXcEbX9IWX371%2FncpTScW2cIGcd&X-Amz-Signature=b7bc1c2cb3cdbf7abc88048f7c9aff97a26821bc6325ea95fdac63a8c3affd5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XB5EBJ5%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQD9lwgVHQI9R3Q2uemWj0ZQsjfgom9LbwqoSA6tqOqgiwIgKvBlJrhDpAu%2BHxbZAf%2Bf%2FJVZhryQSKRl5bkui8UwfckqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3bY1ncoqdonJbybyrcA8DDG8OER97HEXePXcCuY%2BTW1v1KACeTER1MzIdhwslbrAwDCGmCzi8LCdkWtGyUsPm4ymeNX8UCE0ssRfRofnQCY3tZlt1oE08eBq5WQDwxRufbLOLxbaN0nKfTJji6QybHxvj2pZi%2B1fo9II3oRrE9%2B%2FGOKRGaluelRdT%2B3WcQD6iDYbNGA%2BEYHGVKF37Qu7IVDmiAjCtxsJezZo7c09lxkF8itmR5T%2F63LHz6yqQWS1%2BaV98hbAHAHqxD2Do%2B3BV%2B%2B8e9k8VNZ%2BWWOy3vKw1dKONRHATDQid4DNhRhob%2BWFAraY4hnxyJcKuEuYawVFmt3cJKrMdzyfSJpiJBgAIwE8Q4ZyRyGw0k7z7GdawXNcR%2FtKMjuraW9LDgcqGGTK08bNElgYPRTn6OBsZkQAYKFlgTz9%2B%2Bcxy%2FtskPU3r8nHULIhNpu9jmyCoHTCNryKtuBKw4CM%2BgTQSI6t%2FoPnoXTTXLSZCaXhwZDSLj2132nT1eXC31vkLI%2BfFoeRh2V4MAeS%2BZE0SplCcm7SddEfTBynolWGbfTezp5KWF%2Bkj%2FmllVUlCj8iy%2FR7HWnMsj2aKpPUL%2B1KsPiLjotzi0eFzlyjuB9j3jlbcnI4DKsduu9kDSOqu1EMkdZLJAMMyHgMwGOqUBh14PQwD2fg2%2BDC1Hdo9bMid8ZGeOHH%2BFkpkrn5ep1VOqZX6NjenZleg3g0SpGsdS84zHx%2BUKVlikh8ASQqlc712BXU%2Bw5tU37I6iOOcpy4fzDU5t1ryY8T4aZGeqZtOcUh3jUFNm7EKukeQiFTbbVsWyebbewgmefeTmDXeHJ%2BJe7oB5bZtSiegx9mCxp8X8Kp4Jg6wFuuDZ6Wi8gMW1t%2B8fA9Zk&X-Amz-Signature=895214525fd5722c9bb9c1725babb61822654116d790e4a8069f41daab0a776d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

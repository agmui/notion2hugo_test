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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXD42ZJ4%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWrlWDZfGuzRbIPSS2sHOIFBECfyVdHlgQsl6GiQSNbQIgLDPWSbryEF223yd9xP1csYFVtLUmsKnRfSpbyKxuchkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtEUHfHiWdu9JCkByrcA%2B7XSLRT%2BJvT8gk%2BYR%2BW5mqUYQpKIsTXbzTG%2BAIo6e8a8bHSW3qB6WiNt6GNrONjxxSqo7q22RUQ8TCTXWZ9nOO3hFdgUppm%2FgycrYzIxJ07iKE4rAECSRSSzdIvxZ4%2FppEfVghtIwOMYQA6ZrpZWwxuOExhjW4BlTtUtAoxa%2B6oitzjjrUpm5y93S%2BbhzwU3OoPfTtJFIzV%2FttMjOhI8deObxJJV22NWwxoJR3ohHYTM4xlsSzkXCBYUVLc%2FVMg1k5%2FFVbi90vE8CCrkGE9tvddJlvcal%2F7gJhUbDKsBvEg2SkepDzJT0Q%2BtiCiiL09d5EpzTEF5OjvfG2zRJslaXcF3tOKpFYfh5UNOnfn%2FNWn8RdwsuHm%2FbLKs4l5eWH0WLX2isPmmxiCadSPlkHrLsotXQvPRaI4DUx9Mpn3UGF4OJSqnZgYLQBvPKklXG0LT81jtebk8qPAhPJMbM5ebNYdDkSNb1XGdPxC2eoaG0PfyeN79Fmnje2EkInQVqU4VMV09sBAEHKHDNmnhuloqnvFg%2B0come%2BdFwzq9JOUuzJziL7kIYh155Nup05Q4MxdaKWkq%2FxLIbQThIYaNwIDxL%2FA5QT23F1D5dzP%2Fzbe2%2BY4F0aBRQP1a0OPNB2MK340coGOqUBmaJcun0lowktf9OSMOEzCIZ3qOVFP5McvJ31TSmnyNDM9qNw9ncDs7JrZbMTLzYhs0S3RHrce9zgWuCfaarh5UbJCMi4NWxw4fEChE9gXHSccgdxSJwxslQg5oFkUYFyNR0uk9DDzIKxb0IJm3TLNbupHYi9bizbNo4pBgouT9vylPQ6z6RSp0kG74Ve%2FvgAjEkZu4coSIbDzBn79CuZeEg%2FPE0M&X-Amz-Signature=7da45c54b794c1379796b804b07299c0b3e51ef72054587b81cf222a72eb8293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

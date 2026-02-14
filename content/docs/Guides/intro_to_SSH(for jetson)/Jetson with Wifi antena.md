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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLETZGVT%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDObvig5b4KTxKrbJ%2FDRtyCJT7Uwhw5o1C8V%2BEN1r3RMgIgWSJhQ8UondkyOkodOfYRZMGBJwQ2Yqx4kVTMtqsYSxwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3MpwuGfivpIRBsYSrcA7ZAd2VfR0zSYmb%2BXqvfRb94X48E6bq3UvJDr7kqB4qgzql8qKD7TE9a6kzOAqapjsSaE9c2JVL4qxt1uVHzyyBbtgHAPwLAzWWytxOkvPOCxrhdie2Rg%2FiD3CCpltOQqYVYf5b8%2Fks1uIVaDg3ifMCGO72vKijdVvqWueIVWojuOYTmDN2ZwaePqDtL7imw2Q2CUU9OuA74GFUwqbGc%2BrFyjKmSUaRkY9pbz4RtRMjbh4p%2FJb1O0oDAJq2U4b%2BxUOY%2BYOp0gshZjlsoQVvD%2FVQhhWIsL8J5q5bBI2v%2FjFuDEATQxgXIzWvRWs15U0%2BAZeAeMFTSgmK6M%2FlkTtjwFB2kZ0EChe1nRIHWck21jl5SsC%2Blr0ua3ANd5mFCz1LweM8bswFv0H2GIJktpygUeXFuGyC%2B5fFcnkqgowJBxR3WCLzjpGw%2FWHf2n5lY52kb27m3SNyKzn9EzPbDRXQm%2Bw6KcjGcjP8dO7tfSaaPbmuJcqfpz5CMC6ShxQBSdPRB8ReTBgVL9YPz8jaM0nMUbeLvaZAsZOu73TPUougjpP1i8hHF199rjSCethw1%2F5A2jopm3USHncNd8EO7n6gPjKVmD5Divavu8A6MKgNDTnJGCv6dBnkDBfisTjpyMJqTv8wGOqUBfNa0R6Nrsi%2BhLipAy4r3FRFHBm4%2FA9%2BLbvtXDoW2Enk8JH2vRM9SCwDid0lTJ%2BfMlKRhH6uZqoNfngad62OaIY6Z3WnYeQNhpqwEvTk3rsg2%2B2VmK8mTrAptguTxzvwy5SDc1esY%2F06xtUAMlJm1zl3Iz1ndputaYLJJGzhZ0s106UNcZoseGYrtPKQf3ZGmq%2Fxmh1ZXsLnFxUaoT5IYJuLH50YL&X-Amz-Signature=7af85b90c9a6c8d129408849eb3efda64c90ef17591f10fc7f7ba0df61b9c584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

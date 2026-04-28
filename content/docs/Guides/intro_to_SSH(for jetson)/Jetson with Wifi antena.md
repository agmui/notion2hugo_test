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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665BBXNMC%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCo2E651QK%2BUyq3B%2FDgMwSDZMHLqKuIwuEfjYoCThDWkgIgep4qj2GV677iHfA3wr7V74G0Ks4U87334beUFwHu%2BQIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCdy%2FwY55o3HwvwiyrcA3EoWPI1jWITu2nVapzlp1RkOImDQ3vabmWxwz%2FHSyvQtJg6e%2BQv5PFzuQi%2FUezsSk%2B8whi0eNsFF4bhiJV62Jajg8iTc%2Biwxu2UQX6UBELoLsuhfqxa1F74QSOzWvxYX9%2BwbziIAzG3iKcWbPiaUREI%2BOCLfC%2Ba3K2CcUuZ4C94gyPL5vX8Rg6SJ7oYmbD8Lzq3u2e4pxEfzxCH9UXD5g9Ln74K34BiVBArgSOQzvZrpl2OqcxPsPgaYoP%2BJhgS2cwF0MERrzdpGoLia83YGVWN2griKjnEIaBp7lmzhnK7fzAEAmbV9KP5ErbPM65hRlfv%2F2LjkYR1FBYgrTcsE3sNY%2FibXZywWjfVVo0Fv74bdcMW9bL6UYTTvWhmPdxpd6EiXmqU66RaX43wXOZt5FDP%2FIUCSf2B3A8d3cD%2BVonDsgMGvY3J37WjSMNkIPLxAboJVXbktZa9tcTZysvaj32gzr%2F%2B6UR%2B5Fa3kQA5WDrezyie5hftDG%2FcTsH0e7IOjY21c5otpqMxW6FsF6bqMKKe8T2Co7pv%2FEaKwqfH16GSKP0dd%2Fe5EhlCdBs7Yw0ZCV7r3z%2BGJIJScaw3CuVMLjUW%2BNIhfh5knAb7UBzF%2FoZUXsXuYvS3tWvZ%2FT2IMLajwM8GOqUB%2Fa6adW2%2FHZlba6%2Fg4D9PwnskcJmPKo93xfvY3rQukstCMA3hYj7D754hCTl8wa2bYjfIXhY%2FnpJLyEJxdVp%2BiO7FygddZS2DLyVxbVLNClGtPZtMDnrQ29E%2B2ATvoPKpmmxjzFbMYSzuAk%2Bm%2FDJVCbqGDo4A66WJdhOfyEqdql9SZ157f48iRlYiV5ixSZ1mENKWDjd3lvPv0bLHRnzkA4rPrgxr&X-Amz-Signature=9f00ff650fac389a3034c70d25f4a6643093d4d619f6bad4bd3c6f6d14789264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

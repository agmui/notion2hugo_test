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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJT2ENJ4%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF2e7cWSWF%2BzTWl5882rQ6ApMCyg6pO8j%2BQ4VNF2zROvAiEAzteCbuxw%2BF8CwkQ4loIpQvj75P6d%2BrBQWMnwR34BWzQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElDZ2IfqyBzS7YhLyrcAyTWJeGt%2FRl%2BCrQods4bCDrdmojcAeWW3iCo0Oa9v1vuHe2zuTLBd%2BCgD3iOFJRj7uv71V1cUbXj6WFDFgeJI7hvuDbTIwFHmBvJ0CHToRN3VMzp1s4xEfZ7mS1x48DP%2FXT%2BKmAE4NqKcg7leNXJjYa4VE18Imh%2FlAjA59%2FWkFmHHaK78cSFVWwmT9%2FksjupJpqY1jNBFV%2FFyg%2FnoREEGzHD2WvGAujTHFxXzu7az%2FAub4MA8I6bARUgObhTdIe1L5G2HE1uTptAwo5yedTfjBxELAXPdDozu2y8c2l10Danhfj6H8FCrIaz5qyuE1TUC7bPjHnI9QpyU4OoRpKp4tKZjO3VJTPalNVzVUkRSk9QlELOvu11w789ZPdibndMobSHFl6dHnl3l5oilPWrrNN6gBZq6zUT%2FDokt49k5%2F8OEP6TBwDPHv4ODaWefO11FAMv%2Fg1Mqq1E5495rNO8Lt66VncWQ186U2%2BpS%2Ba6jtlsqxFuvXivN%2FTcupzvx9WX4hFju6LEIYS%2FWQ30iAxjJP7sQSOgf12Q4EvMJP%2F2LpHyUO%2F%2F9IVlNvs0hsrsk1%2B41oa1ONF0qAfSjNkQvRg5s7q3J%2FZa%2FlI9EKlxihcEVyjnGM32P8bw29yZKP3TMO7n3MYGOqUBtIupK%2FVU9nSgAAmILVoBNYloFg%2BGLHOCNblC9J7nXR7sv033ncA9AhtRH0PG5JDz3hpuiHxQUpTSuKN7JmVI6iql2WU%2Fn4LsvC6na14ndRs3zlVhsqls%2FwgTyMe57AJxh1cFuGKKsXjjK0lNc9H3SAx%2B7TlaWRbDol2Newj%2Be6Pw6GduI55p2NZ4O1F3VleZig4ZnXKapghCOrmLmu2D95TwogwM&X-Amz-Signature=259860e789ff2ee8eccfc929d32ce659b0be08ab5f53b76cef7680d933c64347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
